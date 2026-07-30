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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5LSZPWS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5%2BGBuk3jGTsvrz6fuczSUz2L%2BYV4NLpjaDZgtD%2B2M1AiEAn%2Fpq9%2FiBzt%2B13K%2F4hPDkaaxKZ3cXq6FiCrxrNcSQzocqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX7aEylDhMhJceN5SrcA%2FxHDtmg5eZ4M6de6gWo36yucXS5m4So15Xgyd5PCFuJzgZxdKyDlQ%2BnYtxogBDwdT61bK6UQYNZx1Y10LTv5B3H3K%2B%2FbDuiz0zgVa5kAYmfOMkht5M2JeSdVDuH22%2FZfQnoc2RrNTnPUSSWu%2FxWLvT%2Bg8qipeOW3QrDpeeh2h7xh%2BZO2i5s6IAHtJT0tB%2FKpOPUt%2BcYNtlEpkConyPZw2lFXF5f7HRvhqrFoQEW2phNoKDbdG1ePM2iT1qwn2iVJtgRMDgALlo43YYhCAinSepB3ieMAFpe74KezOvxozot%2FCelteRJbYCMbVuAd83YHvw73slEJkZzYDrtfh0VIzxwHFbaC3NjRBVY3K2uwNfIgABMecvIRt%2Bq5JJ6u3dtMqMLlH%2BmDxhdUYdtlI5XszqY49i%2FJbvU%2Fh3WU5GrS9Ipb88VJn5jvB0PdOYjkt0Ns1w5Fs917dSZLgUTcbG1wOJ57yNUNrz687kQzsaP%2BCzfvAgTuWUH3NuekV2az8houSrmHRSDVpvLb3Pgf%2FO3Kf%2B8%2Bx9C1PhFZ3ILihiMGrVqhDm4XpvOUXWeLEIZeyoMDz547fzLc1kqAqxTEnl9QSR5Wdf3ocqtPXMpEEvebFOkOmGyZrIdcS0IWQhnMJvfqtMGOqUB9Wmj8IkR5WEXdSRybe0ifDK3kTlYQtrGhfnS0WaguhXSBjt80C%2F05NwsNZKDERwiqEi0%2Bqiy1JvZlXaY3s9dt2Ek9DhT7ixLHwlvvPRrxqiMWmlQjB4KqRAVEBqtZkfcXb2y3XR3rS8Gcsv7NakG3yyereQtvX2dNbvJ9czUP8LxAzrh90pKeLMUVk%2FnOlW5NqSGwfPBFM881MdjwkV6jYvk58ia&X-Amz-Signature=a4681ea0c9058061dc1d60136718808c71b5a94479eb263422915f805a3a9ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5LSZPWS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5%2BGBuk3jGTsvrz6fuczSUz2L%2BYV4NLpjaDZgtD%2B2M1AiEAn%2Fpq9%2FiBzt%2B13K%2F4hPDkaaxKZ3cXq6FiCrxrNcSQzocqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX7aEylDhMhJceN5SrcA%2FxHDtmg5eZ4M6de6gWo36yucXS5m4So15Xgyd5PCFuJzgZxdKyDlQ%2BnYtxogBDwdT61bK6UQYNZx1Y10LTv5B3H3K%2B%2FbDuiz0zgVa5kAYmfOMkht5M2JeSdVDuH22%2FZfQnoc2RrNTnPUSSWu%2FxWLvT%2Bg8qipeOW3QrDpeeh2h7xh%2BZO2i5s6IAHtJT0tB%2FKpOPUt%2BcYNtlEpkConyPZw2lFXF5f7HRvhqrFoQEW2phNoKDbdG1ePM2iT1qwn2iVJtgRMDgALlo43YYhCAinSepB3ieMAFpe74KezOvxozot%2FCelteRJbYCMbVuAd83YHvw73slEJkZzYDrtfh0VIzxwHFbaC3NjRBVY3K2uwNfIgABMecvIRt%2Bq5JJ6u3dtMqMLlH%2BmDxhdUYdtlI5XszqY49i%2FJbvU%2Fh3WU5GrS9Ipb88VJn5jvB0PdOYjkt0Ns1w5Fs917dSZLgUTcbG1wOJ57yNUNrz687kQzsaP%2BCzfvAgTuWUH3NuekV2az8houSrmHRSDVpvLb3Pgf%2FO3Kf%2B8%2Bx9C1PhFZ3ILihiMGrVqhDm4XpvOUXWeLEIZeyoMDz547fzLc1kqAqxTEnl9QSR5Wdf3ocqtPXMpEEvebFOkOmGyZrIdcS0IWQhnMJvfqtMGOqUB9Wmj8IkR5WEXdSRybe0ifDK3kTlYQtrGhfnS0WaguhXSBjt80C%2F05NwsNZKDERwiqEi0%2Bqiy1JvZlXaY3s9dt2Ek9DhT7ixLHwlvvPRrxqiMWmlQjB4KqRAVEBqtZkfcXb2y3XR3rS8Gcsv7NakG3yyereQtvX2dNbvJ9czUP8LxAzrh90pKeLMUVk%2FnOlW5NqSGwfPBFM881MdjwkV6jYvk58ia&X-Amz-Signature=022f6df5d58ae1b300a44ee691e45fb9c2d58c1bc89e5c829e4fc0f48830a2c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5LSZPWS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5%2BGBuk3jGTsvrz6fuczSUz2L%2BYV4NLpjaDZgtD%2B2M1AiEAn%2Fpq9%2FiBzt%2B13K%2F4hPDkaaxKZ3cXq6FiCrxrNcSQzocqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX7aEylDhMhJceN5SrcA%2FxHDtmg5eZ4M6de6gWo36yucXS5m4So15Xgyd5PCFuJzgZxdKyDlQ%2BnYtxogBDwdT61bK6UQYNZx1Y10LTv5B3H3K%2B%2FbDuiz0zgVa5kAYmfOMkht5M2JeSdVDuH22%2FZfQnoc2RrNTnPUSSWu%2FxWLvT%2Bg8qipeOW3QrDpeeh2h7xh%2BZO2i5s6IAHtJT0tB%2FKpOPUt%2BcYNtlEpkConyPZw2lFXF5f7HRvhqrFoQEW2phNoKDbdG1ePM2iT1qwn2iVJtgRMDgALlo43YYhCAinSepB3ieMAFpe74KezOvxozot%2FCelteRJbYCMbVuAd83YHvw73slEJkZzYDrtfh0VIzxwHFbaC3NjRBVY3K2uwNfIgABMecvIRt%2Bq5JJ6u3dtMqMLlH%2BmDxhdUYdtlI5XszqY49i%2FJbvU%2Fh3WU5GrS9Ipb88VJn5jvB0PdOYjkt0Ns1w5Fs917dSZLgUTcbG1wOJ57yNUNrz687kQzsaP%2BCzfvAgTuWUH3NuekV2az8houSrmHRSDVpvLb3Pgf%2FO3Kf%2B8%2Bx9C1PhFZ3ILihiMGrVqhDm4XpvOUXWeLEIZeyoMDz547fzLc1kqAqxTEnl9QSR5Wdf3ocqtPXMpEEvebFOkOmGyZrIdcS0IWQhnMJvfqtMGOqUB9Wmj8IkR5WEXdSRybe0ifDK3kTlYQtrGhfnS0WaguhXSBjt80C%2F05NwsNZKDERwiqEi0%2Bqiy1JvZlXaY3s9dt2Ek9DhT7ixLHwlvvPRrxqiMWmlQjB4KqRAVEBqtZkfcXb2y3XR3rS8Gcsv7NakG3yyereQtvX2dNbvJ9czUP8LxAzrh90pKeLMUVk%2FnOlW5NqSGwfPBFM881MdjwkV6jYvk58ia&X-Amz-Signature=bd884efb1462fc05b313c58ad4af1caf43e8fab63b1399ad7698f1ea42dfc833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5LSZPWS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5%2BGBuk3jGTsvrz6fuczSUz2L%2BYV4NLpjaDZgtD%2B2M1AiEAn%2Fpq9%2FiBzt%2B13K%2F4hPDkaaxKZ3cXq6FiCrxrNcSQzocqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX7aEylDhMhJceN5SrcA%2FxHDtmg5eZ4M6de6gWo36yucXS5m4So15Xgyd5PCFuJzgZxdKyDlQ%2BnYtxogBDwdT61bK6UQYNZx1Y10LTv5B3H3K%2B%2FbDuiz0zgVa5kAYmfOMkht5M2JeSdVDuH22%2FZfQnoc2RrNTnPUSSWu%2FxWLvT%2Bg8qipeOW3QrDpeeh2h7xh%2BZO2i5s6IAHtJT0tB%2FKpOPUt%2BcYNtlEpkConyPZw2lFXF5f7HRvhqrFoQEW2phNoKDbdG1ePM2iT1qwn2iVJtgRMDgALlo43YYhCAinSepB3ieMAFpe74KezOvxozot%2FCelteRJbYCMbVuAd83YHvw73slEJkZzYDrtfh0VIzxwHFbaC3NjRBVY3K2uwNfIgABMecvIRt%2Bq5JJ6u3dtMqMLlH%2BmDxhdUYdtlI5XszqY49i%2FJbvU%2Fh3WU5GrS9Ipb88VJn5jvB0PdOYjkt0Ns1w5Fs917dSZLgUTcbG1wOJ57yNUNrz687kQzsaP%2BCzfvAgTuWUH3NuekV2az8houSrmHRSDVpvLb3Pgf%2FO3Kf%2B8%2Bx9C1PhFZ3ILihiMGrVqhDm4XpvOUXWeLEIZeyoMDz547fzLc1kqAqxTEnl9QSR5Wdf3ocqtPXMpEEvebFOkOmGyZrIdcS0IWQhnMJvfqtMGOqUB9Wmj8IkR5WEXdSRybe0ifDK3kTlYQtrGhfnS0WaguhXSBjt80C%2F05NwsNZKDERwiqEi0%2Bqiy1JvZlXaY3s9dt2Ek9DhT7ixLHwlvvPRrxqiMWmlQjB4KqRAVEBqtZkfcXb2y3XR3rS8Gcsv7NakG3yyereQtvX2dNbvJ9czUP8LxAzrh90pKeLMUVk%2FnOlW5NqSGwfPBFM881MdjwkV6jYvk58ia&X-Amz-Signature=b70702cff50760fba26c54bb489d49eeb95b0b332e1f566d9f07a21c5b96bb5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5LSZPWS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5%2BGBuk3jGTsvrz6fuczSUz2L%2BYV4NLpjaDZgtD%2B2M1AiEAn%2Fpq9%2FiBzt%2B13K%2F4hPDkaaxKZ3cXq6FiCrxrNcSQzocqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX7aEylDhMhJceN5SrcA%2FxHDtmg5eZ4M6de6gWo36yucXS5m4So15Xgyd5PCFuJzgZxdKyDlQ%2BnYtxogBDwdT61bK6UQYNZx1Y10LTv5B3H3K%2B%2FbDuiz0zgVa5kAYmfOMkht5M2JeSdVDuH22%2FZfQnoc2RrNTnPUSSWu%2FxWLvT%2Bg8qipeOW3QrDpeeh2h7xh%2BZO2i5s6IAHtJT0tB%2FKpOPUt%2BcYNtlEpkConyPZw2lFXF5f7HRvhqrFoQEW2phNoKDbdG1ePM2iT1qwn2iVJtgRMDgALlo43YYhCAinSepB3ieMAFpe74KezOvxozot%2FCelteRJbYCMbVuAd83YHvw73slEJkZzYDrtfh0VIzxwHFbaC3NjRBVY3K2uwNfIgABMecvIRt%2Bq5JJ6u3dtMqMLlH%2BmDxhdUYdtlI5XszqY49i%2FJbvU%2Fh3WU5GrS9Ipb88VJn5jvB0PdOYjkt0Ns1w5Fs917dSZLgUTcbG1wOJ57yNUNrz687kQzsaP%2BCzfvAgTuWUH3NuekV2az8houSrmHRSDVpvLb3Pgf%2FO3Kf%2B8%2Bx9C1PhFZ3ILihiMGrVqhDm4XpvOUXWeLEIZeyoMDz547fzLc1kqAqxTEnl9QSR5Wdf3ocqtPXMpEEvebFOkOmGyZrIdcS0IWQhnMJvfqtMGOqUB9Wmj8IkR5WEXdSRybe0ifDK3kTlYQtrGhfnS0WaguhXSBjt80C%2F05NwsNZKDERwiqEi0%2Bqiy1JvZlXaY3s9dt2Ek9DhT7ixLHwlvvPRrxqiMWmlQjB4KqRAVEBqtZkfcXb2y3XR3rS8Gcsv7NakG3yyereQtvX2dNbvJ9czUP8LxAzrh90pKeLMUVk%2FnOlW5NqSGwfPBFM881MdjwkV6jYvk58ia&X-Amz-Signature=4936f34862869af4d32f6b5573167dd193ca227cfbbdf70d26e9644845c63eec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5LSZPWS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5%2BGBuk3jGTsvrz6fuczSUz2L%2BYV4NLpjaDZgtD%2B2M1AiEAn%2Fpq9%2FiBzt%2B13K%2F4hPDkaaxKZ3cXq6FiCrxrNcSQzocqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX7aEylDhMhJceN5SrcA%2FxHDtmg5eZ4M6de6gWo36yucXS5m4So15Xgyd5PCFuJzgZxdKyDlQ%2BnYtxogBDwdT61bK6UQYNZx1Y10LTv5B3H3K%2B%2FbDuiz0zgVa5kAYmfOMkht5M2JeSdVDuH22%2FZfQnoc2RrNTnPUSSWu%2FxWLvT%2Bg8qipeOW3QrDpeeh2h7xh%2BZO2i5s6IAHtJT0tB%2FKpOPUt%2BcYNtlEpkConyPZw2lFXF5f7HRvhqrFoQEW2phNoKDbdG1ePM2iT1qwn2iVJtgRMDgALlo43YYhCAinSepB3ieMAFpe74KezOvxozot%2FCelteRJbYCMbVuAd83YHvw73slEJkZzYDrtfh0VIzxwHFbaC3NjRBVY3K2uwNfIgABMecvIRt%2Bq5JJ6u3dtMqMLlH%2BmDxhdUYdtlI5XszqY49i%2FJbvU%2Fh3WU5GrS9Ipb88VJn5jvB0PdOYjkt0Ns1w5Fs917dSZLgUTcbG1wOJ57yNUNrz687kQzsaP%2BCzfvAgTuWUH3NuekV2az8houSrmHRSDVpvLb3Pgf%2FO3Kf%2B8%2Bx9C1PhFZ3ILihiMGrVqhDm4XpvOUXWeLEIZeyoMDz547fzLc1kqAqxTEnl9QSR5Wdf3ocqtPXMpEEvebFOkOmGyZrIdcS0IWQhnMJvfqtMGOqUB9Wmj8IkR5WEXdSRybe0ifDK3kTlYQtrGhfnS0WaguhXSBjt80C%2F05NwsNZKDERwiqEi0%2Bqiy1JvZlXaY3s9dt2Ek9DhT7ixLHwlvvPRrxqiMWmlQjB4KqRAVEBqtZkfcXb2y3XR3rS8Gcsv7NakG3yyereQtvX2dNbvJ9czUP8LxAzrh90pKeLMUVk%2FnOlW5NqSGwfPBFM881MdjwkV6jYvk58ia&X-Amz-Signature=aacb15d039efd8635185be2349f4d73a73e3a939091c19a119cf35513fb0366d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5LSZPWS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5%2BGBuk3jGTsvrz6fuczSUz2L%2BYV4NLpjaDZgtD%2B2M1AiEAn%2Fpq9%2FiBzt%2B13K%2F4hPDkaaxKZ3cXq6FiCrxrNcSQzocqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX7aEylDhMhJceN5SrcA%2FxHDtmg5eZ4M6de6gWo36yucXS5m4So15Xgyd5PCFuJzgZxdKyDlQ%2BnYtxogBDwdT61bK6UQYNZx1Y10LTv5B3H3K%2B%2FbDuiz0zgVa5kAYmfOMkht5M2JeSdVDuH22%2FZfQnoc2RrNTnPUSSWu%2FxWLvT%2Bg8qipeOW3QrDpeeh2h7xh%2BZO2i5s6IAHtJT0tB%2FKpOPUt%2BcYNtlEpkConyPZw2lFXF5f7HRvhqrFoQEW2phNoKDbdG1ePM2iT1qwn2iVJtgRMDgALlo43YYhCAinSepB3ieMAFpe74KezOvxozot%2FCelteRJbYCMbVuAd83YHvw73slEJkZzYDrtfh0VIzxwHFbaC3NjRBVY3K2uwNfIgABMecvIRt%2Bq5JJ6u3dtMqMLlH%2BmDxhdUYdtlI5XszqY49i%2FJbvU%2Fh3WU5GrS9Ipb88VJn5jvB0PdOYjkt0Ns1w5Fs917dSZLgUTcbG1wOJ57yNUNrz687kQzsaP%2BCzfvAgTuWUH3NuekV2az8houSrmHRSDVpvLb3Pgf%2FO3Kf%2B8%2Bx9C1PhFZ3ILihiMGrVqhDm4XpvOUXWeLEIZeyoMDz547fzLc1kqAqxTEnl9QSR5Wdf3ocqtPXMpEEvebFOkOmGyZrIdcS0IWQhnMJvfqtMGOqUB9Wmj8IkR5WEXdSRybe0ifDK3kTlYQtrGhfnS0WaguhXSBjt80C%2F05NwsNZKDERwiqEi0%2Bqiy1JvZlXaY3s9dt2Ek9DhT7ixLHwlvvPRrxqiMWmlQjB4KqRAVEBqtZkfcXb2y3XR3rS8Gcsv7NakG3yyereQtvX2dNbvJ9czUP8LxAzrh90pKeLMUVk%2FnOlW5NqSGwfPBFM881MdjwkV6jYvk58ia&X-Amz-Signature=bab581ed9c4cff65f53204b06e6f50f524fb027745c7490dfc3344b0cc047714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5LSZPWS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5%2BGBuk3jGTsvrz6fuczSUz2L%2BYV4NLpjaDZgtD%2B2M1AiEAn%2Fpq9%2FiBzt%2B13K%2F4hPDkaaxKZ3cXq6FiCrxrNcSQzocqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX7aEylDhMhJceN5SrcA%2FxHDtmg5eZ4M6de6gWo36yucXS5m4So15Xgyd5PCFuJzgZxdKyDlQ%2BnYtxogBDwdT61bK6UQYNZx1Y10LTv5B3H3K%2B%2FbDuiz0zgVa5kAYmfOMkht5M2JeSdVDuH22%2FZfQnoc2RrNTnPUSSWu%2FxWLvT%2Bg8qipeOW3QrDpeeh2h7xh%2BZO2i5s6IAHtJT0tB%2FKpOPUt%2BcYNtlEpkConyPZw2lFXF5f7HRvhqrFoQEW2phNoKDbdG1ePM2iT1qwn2iVJtgRMDgALlo43YYhCAinSepB3ieMAFpe74KezOvxozot%2FCelteRJbYCMbVuAd83YHvw73slEJkZzYDrtfh0VIzxwHFbaC3NjRBVY3K2uwNfIgABMecvIRt%2Bq5JJ6u3dtMqMLlH%2BmDxhdUYdtlI5XszqY49i%2FJbvU%2Fh3WU5GrS9Ipb88VJn5jvB0PdOYjkt0Ns1w5Fs917dSZLgUTcbG1wOJ57yNUNrz687kQzsaP%2BCzfvAgTuWUH3NuekV2az8houSrmHRSDVpvLb3Pgf%2FO3Kf%2B8%2Bx9C1PhFZ3ILihiMGrVqhDm4XpvOUXWeLEIZeyoMDz547fzLc1kqAqxTEnl9QSR5Wdf3ocqtPXMpEEvebFOkOmGyZrIdcS0IWQhnMJvfqtMGOqUB9Wmj8IkR5WEXdSRybe0ifDK3kTlYQtrGhfnS0WaguhXSBjt80C%2F05NwsNZKDERwiqEi0%2Bqiy1JvZlXaY3s9dt2Ek9DhT7ixLHwlvvPRrxqiMWmlQjB4KqRAVEBqtZkfcXb2y3XR3rS8Gcsv7NakG3yyereQtvX2dNbvJ9czUP8LxAzrh90pKeLMUVk%2FnOlW5NqSGwfPBFM881MdjwkV6jYvk58ia&X-Amz-Signature=96c3d631654c7d3ceb5e6b1ee8cf673ec161be816ed7fc7d42b91c616d0efcf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5LSZPWS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5%2BGBuk3jGTsvrz6fuczSUz2L%2BYV4NLpjaDZgtD%2B2M1AiEAn%2Fpq9%2FiBzt%2B13K%2F4hPDkaaxKZ3cXq6FiCrxrNcSQzocqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX7aEylDhMhJceN5SrcA%2FxHDtmg5eZ4M6de6gWo36yucXS5m4So15Xgyd5PCFuJzgZxdKyDlQ%2BnYtxogBDwdT61bK6UQYNZx1Y10LTv5B3H3K%2B%2FbDuiz0zgVa5kAYmfOMkht5M2JeSdVDuH22%2FZfQnoc2RrNTnPUSSWu%2FxWLvT%2Bg8qipeOW3QrDpeeh2h7xh%2BZO2i5s6IAHtJT0tB%2FKpOPUt%2BcYNtlEpkConyPZw2lFXF5f7HRvhqrFoQEW2phNoKDbdG1ePM2iT1qwn2iVJtgRMDgALlo43YYhCAinSepB3ieMAFpe74KezOvxozot%2FCelteRJbYCMbVuAd83YHvw73slEJkZzYDrtfh0VIzxwHFbaC3NjRBVY3K2uwNfIgABMecvIRt%2Bq5JJ6u3dtMqMLlH%2BmDxhdUYdtlI5XszqY49i%2FJbvU%2Fh3WU5GrS9Ipb88VJn5jvB0PdOYjkt0Ns1w5Fs917dSZLgUTcbG1wOJ57yNUNrz687kQzsaP%2BCzfvAgTuWUH3NuekV2az8houSrmHRSDVpvLb3Pgf%2FO3Kf%2B8%2Bx9C1PhFZ3ILihiMGrVqhDm4XpvOUXWeLEIZeyoMDz547fzLc1kqAqxTEnl9QSR5Wdf3ocqtPXMpEEvebFOkOmGyZrIdcS0IWQhnMJvfqtMGOqUB9Wmj8IkR5WEXdSRybe0ifDK3kTlYQtrGhfnS0WaguhXSBjt80C%2F05NwsNZKDERwiqEi0%2Bqiy1JvZlXaY3s9dt2Ek9DhT7ixLHwlvvPRrxqiMWmlQjB4KqRAVEBqtZkfcXb2y3XR3rS8Gcsv7NakG3yyereQtvX2dNbvJ9czUP8LxAzrh90pKeLMUVk%2FnOlW5NqSGwfPBFM881MdjwkV6jYvk58ia&X-Amz-Signature=bb352fe7fa80783b220f7e787ecb16ba0e7fbbdd4a71d48c671d0ce665023d8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5LSZPWS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5%2BGBuk3jGTsvrz6fuczSUz2L%2BYV4NLpjaDZgtD%2B2M1AiEAn%2Fpq9%2FiBzt%2B13K%2F4hPDkaaxKZ3cXq6FiCrxrNcSQzocqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX7aEylDhMhJceN5SrcA%2FxHDtmg5eZ4M6de6gWo36yucXS5m4So15Xgyd5PCFuJzgZxdKyDlQ%2BnYtxogBDwdT61bK6UQYNZx1Y10LTv5B3H3K%2B%2FbDuiz0zgVa5kAYmfOMkht5M2JeSdVDuH22%2FZfQnoc2RrNTnPUSSWu%2FxWLvT%2Bg8qipeOW3QrDpeeh2h7xh%2BZO2i5s6IAHtJT0tB%2FKpOPUt%2BcYNtlEpkConyPZw2lFXF5f7HRvhqrFoQEW2phNoKDbdG1ePM2iT1qwn2iVJtgRMDgALlo43YYhCAinSepB3ieMAFpe74KezOvxozot%2FCelteRJbYCMbVuAd83YHvw73slEJkZzYDrtfh0VIzxwHFbaC3NjRBVY3K2uwNfIgABMecvIRt%2Bq5JJ6u3dtMqMLlH%2BmDxhdUYdtlI5XszqY49i%2FJbvU%2Fh3WU5GrS9Ipb88VJn5jvB0PdOYjkt0Ns1w5Fs917dSZLgUTcbG1wOJ57yNUNrz687kQzsaP%2BCzfvAgTuWUH3NuekV2az8houSrmHRSDVpvLb3Pgf%2FO3Kf%2B8%2Bx9C1PhFZ3ILihiMGrVqhDm4XpvOUXWeLEIZeyoMDz547fzLc1kqAqxTEnl9QSR5Wdf3ocqtPXMpEEvebFOkOmGyZrIdcS0IWQhnMJvfqtMGOqUB9Wmj8IkR5WEXdSRybe0ifDK3kTlYQtrGhfnS0WaguhXSBjt80C%2F05NwsNZKDERwiqEi0%2Bqiy1JvZlXaY3s9dt2Ek9DhT7ixLHwlvvPRrxqiMWmlQjB4KqRAVEBqtZkfcXb2y3XR3rS8Gcsv7NakG3yyereQtvX2dNbvJ9czUP8LxAzrh90pKeLMUVk%2FnOlW5NqSGwfPBFM881MdjwkV6jYvk58ia&X-Amz-Signature=91db76c985d13e4172f5d0266484ecd119fc3d124fe12e164c32db59830ceb6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJVJYE2J%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDud%2F82TuOug1XgBviRhHsbUpC7GgFm1jHPRjeWTmVVrAiEAyChbqtKYGOZ9o94kXH9Fg0v1teJpTgVy3uc%2BsPRwbC4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPUmrDzKUr2Cvgx2CrcAzMpa5IwauGTgmsVEefp8PKn6K5nfMwa1vVxdrkpVvYwPCPFMqWcOW1wELWusjbk5l39naE%2BNhogc8HUlSFU%2F0SVU0CqJJIIifEa2XdZf8%2Bv6OsbN2oiJAPYxmEeCgz8LbHPZ%2Fat0SAvoB%2B%2F6QaRY5wZILbpc3PwjtypzdqOvp2jOj7Us3GYcoGRM3rKgWF8D%2BAhmxiQrBjhh%2FynLDn%2Fj8Vlz9CCsM6DLR7peUx1bOqwLFXHpQyNr3yH7l6gtVO9OTdkre3RyDH1EGwxneMTyl3QTm1LdQDm8qKJ81xG8%2BjWZiVqaUi8FiexrC4hrpro7nhEhFHtDy5qYrMjESya9VDo4e020Kkvt8S9bgK3WoVuFo2rfzNETmG%2BuGXMfp9pOnROGEPFCJYtWb3g%2B84jGwzeOBaz9xTh78Kw4qrfnnYRaDlgFyUxbJMIhBNxSbzRH%2Ft7fs%2Bz5MxjQysRORfeLBo0K013AF88MLPxFwSXUdfAr5Vaec2nL2YFOWUN1Lro5dlXKPHoJwU7Z4dzwvFF367Fp6LDsNP1ytWguWWtNM%2FDiCqgivroCBbgV1fAWOSSFubzi8bGbMSHKa17xrej2kYw81vmj0ObAGfwlopMZAabiq%2FvieN18UJyOsxsMOPgqtMGOqUB9oVBxBln59q5sB4tLvg8kIPbh4YESREHPPJAaKsQNZNUsEKRKh8hq3eOXBepT%2BDdAlkJtBsbG9lwasgQkrpA2VuOl9vkhx271YGscAoyBR%2FQmMxiU7HakNuaUKQrr0B%2BxmwryGXRzjxaTndjMYcjyce7F5mac%2F1N7henrJtBUluTrGAoqFhv8eID8RkfGjWGrZETpAU948K1k6FVzsB2Wsidlt8J&X-Amz-Signature=158c9a606ed5fbfe79add463b9d22b0125ff8b66c3633e35a01b9afb8da9ada3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGOMYGXH%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTgH4vmojEXf5jxKSzbE%2FtoIX4NAC4VgpGY7Mq5DBAGgIhAITVuFkKJdz9InbXF%2FYG7v55FIX%2BR6uEypG4sEmxbubvKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGOf1phxfNXFqUUzIq3ANEvW%2FwGk40vJUpNawEeYSEfGtFn0uXBE2HVpwOhrU25v2Hsz2bjuaRRA6rAECwm3pBolEBQapFsg9K54vk%2FDpbEuAMO7AbnBmZCVfYl2RXYSYHeqZk%2B2TRoSV5JO46337iG9yQDPVAmNduP567RbmrYqC2Qfs%2F6ZiSiiinjBp0FvRtIhkByAldkxTDM%2FUU9%2BnFjjsg6PxEElbpEYUdHsMkiNbMAZPuMLEQSgWeRgjhNyeIbeEa6j7AHSE%2F0lxqINuT9X0brqTAu1or9c9KuegGMOLU42h3Lbf%2BrSrBMBTmKVbA5cHCwrkONu7HMh2kG6go5Uk%2FtEr5tcRJSmKyHvIYCr%2BXeAbb%2BlvwPWrpxlWFVhOd97PS%2FkuWj5nBZx6cU2Ono%2FS1EYHOGmn53WOpS7r%2FWjebvxgjpXdLlpPVl40gJRuhCmAx58oySxw3s1hhGHGqRnUsg3k%2Fmqb5B1QqMdaYpHCj3GcyX8UXft0hsTT9WhN3eDGvQO662OImiY8w3IhHtsdxYNJwlCrOg%2Fxc3UkWwqUmwaJgNxkfHF%2Fg8FaqgOkFmaDh2rmUdhDwWWmTn8Hsz6W9iT8KRzzAyq5qlTsJlkFCDMDOlN9lH0G4JHTpSyDscSfmsEGh08xn7jDJ36rTBjqkAbIbyam7LNsXzjG4uwNoV3hbyRqivyK98aUzWOpHgNk11kaR5TPMZ3OZuIkbALTJwBpgKKLzrVqfhbz5dfuI8CElSHCO4TfOzN3LbTmvugGcbrRT4JiyKvh4PW%2BxmgQg45e08iGr%2FwnatMDyb%2BjCjfkkRF%2Fjp6bGTe%2FKzadsWT6HTlzp8hdmrOQdJggM8nB%2BXRrCn1Txje2BQpP2SXqBEXPeKF9B&X-Amz-Signature=5fcfeac825dbbdaf8d7cafd5ba1daf1cebe0909eb156fc9732fabad515103eae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHYO7E37%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfln%2FC6nkPuCZ%2BixDOUbJSY72%2FQX9aUoSl%2FyCQmjNSnAiEA4BkBZfMRJCfSda00U5umICHCZ2Y5a9J7mBNFd2ynLG8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRx50d7oNYLx6Pn4CrcA8jhqk0XvSKm0yk7XY5drTts2flWEkudpCQMdv0pt4NaCF1o1RHqiq%2FgByQxAudRC8g3QtjYzU%2BkKipOIpdTiXhwMbGNj1ZbFbyIGsbAgp9jfhy8opxnco8hBL3%2FQmytWaCcP%2FpWwThr9B3rwVfiFkSgzzUFd1HHIUCIGvtAL2PY03KSROtBxBSWUfZ%2F9tuhCzyGIz7erzzQMHlbZwxZ15o8A9H%2FcqX1AzLm%2FUT29uZHj2SxDklOZJRlObLXAxUOxVZrk284brj1RXXgSpIUtoJSNdz3Qw%2F0AsgI3O%2FE9wwboe08j9l8OuesS8HMIrM9eT5HUO8Ky4UQBZGx2XvODfDEoCJhQwH9vvQCK2xP1PNSCyqp6Sv1Ho4Nhk9GRXdeEJYw7GEluvOfLJNwVilv8RSeIPoId%2BNGdAvucRuiwzaLkyvduuc8OfiGsZcH5jwpKNyDnKPJdUnJjdS6pzX%2F9qtNi09Kc%2F53WrdHtWtnj2pcV5YxDXoTUCvbm5X%2FJd%2BL4gWIzU2tWXpaig3aW8cvb7zRQqpLV%2B8IdlEkmXN4TPNtmCKf%2B9SFJX7vaqfXQAFFsuUO5PEZBJciXf3IyFp%2BAJnJwaedS5bElDIKdh%2Fq4HUdgdMgQdyOegnSN0uTMLPgqtMGOqUBRBNhei3K%2FsHh3cjnQcKRN5AzWUc3dgU7DVTIyWDqsjzNwSVRk%2BGVEIYUVDduooNiwIKEAxB230FgY%2F4Ex0VxrAmgABN3HXUntLWwBQ3IYN8B1BlWwTNM9fA%2BrZwJ6cxYquhY320fVUTndPZyRYJWNqH4rgnOy1VTbpXDr9%2BytoHsw%2B2W1GhJ2Xuqe1MLiiIDFfIlkwHYjgK7uFxYVCAHDO7TmVIF&X-Amz-Signature=34c9d86b2bf76c17acabf6bd38d7347a1624bd9b20f781f2e00e8bc3db2342c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5LSZPWS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5%2BGBuk3jGTsvrz6fuczSUz2L%2BYV4NLpjaDZgtD%2B2M1AiEAn%2Fpq9%2FiBzt%2B13K%2F4hPDkaaxKZ3cXq6FiCrxrNcSQzocqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX7aEylDhMhJceN5SrcA%2FxHDtmg5eZ4M6de6gWo36yucXS5m4So15Xgyd5PCFuJzgZxdKyDlQ%2BnYtxogBDwdT61bK6UQYNZx1Y10LTv5B3H3K%2B%2FbDuiz0zgVa5kAYmfOMkht5M2JeSdVDuH22%2FZfQnoc2RrNTnPUSSWu%2FxWLvT%2Bg8qipeOW3QrDpeeh2h7xh%2BZO2i5s6IAHtJT0tB%2FKpOPUt%2BcYNtlEpkConyPZw2lFXF5f7HRvhqrFoQEW2phNoKDbdG1ePM2iT1qwn2iVJtgRMDgALlo43YYhCAinSepB3ieMAFpe74KezOvxozot%2FCelteRJbYCMbVuAd83YHvw73slEJkZzYDrtfh0VIzxwHFbaC3NjRBVY3K2uwNfIgABMecvIRt%2Bq5JJ6u3dtMqMLlH%2BmDxhdUYdtlI5XszqY49i%2FJbvU%2Fh3WU5GrS9Ipb88VJn5jvB0PdOYjkt0Ns1w5Fs917dSZLgUTcbG1wOJ57yNUNrz687kQzsaP%2BCzfvAgTuWUH3NuekV2az8houSrmHRSDVpvLb3Pgf%2FO3Kf%2B8%2Bx9C1PhFZ3ILihiMGrVqhDm4XpvOUXWeLEIZeyoMDz547fzLc1kqAqxTEnl9QSR5Wdf3ocqtPXMpEEvebFOkOmGyZrIdcS0IWQhnMJvfqtMGOqUB9Wmj8IkR5WEXdSRybe0ifDK3kTlYQtrGhfnS0WaguhXSBjt80C%2F05NwsNZKDERwiqEi0%2Bqiy1JvZlXaY3s9dt2Ek9DhT7ixLHwlvvPRrxqiMWmlQjB4KqRAVEBqtZkfcXb2y3XR3rS8Gcsv7NakG3yyereQtvX2dNbvJ9czUP8LxAzrh90pKeLMUVk%2FnOlW5NqSGwfPBFM881MdjwkV6jYvk58ia&X-Amz-Signature=e6a952e3a24f8e9042658637f6776f3bd73d499ee7180ef58e5080d0d4209663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GDHJ7WF%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7ljL6FoX53VE9OOP2D4eiK3cnWcSP798MQ2bjx%2BlfCAiEAuedL11lNkC7qY7EcE5MUXN%2FA0Hn715PJut9Ab7kNeD0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHfHiwdGWWZefVsYSrcA84K8rbEVHWV2AtlU0T0qME6BWcSo7li0KRHaZDHWQPiY7lUZQFW6cTCNCAQinNBWROS5AKQiUoK4bLGK9qwwMfME9k1Bf1SIrnVidyMIPQz5l9OAJ%2BExtdMl7zCvU5eszYO32Q86dRlqHsORZvJlscBaAMXsDXt8Bll9waygPdhvuV%2B%2B3SzEPBMbt8uxe7DcJz2mHwZVRnBlktoeNmr%2FrsneuhR5t2hQFDsJrO23i10yYf8r3J6hP4le2B%2BfmLFcgQcoveOShnT8H0s4Vx56taJWJhWefzbqLMQbYTmWhP07uDBJyB5JWlbflxo1Zpxm3bWG066wUiXSTM4mcXPhnj1msQ1KQVOCpZWXv3Qxz%2FDgqY87FfmNF48Wk2jvUDrlH%2FGtNfWjzX3%2Ff7k4SdQ8iuXQU1fxnjn3IyeKUF4dSeNPMs4OBpFP1kQgEvfIdiEGIfNyesC%2Fq0lY0zEHtEbV1SiYv4AZG36EvRkxbrRXqtwb1xaWDfT4l1pDp2wAabvWZ64aObOWRFrR%2Bd5pd1KPpTjU%2FC2IyTQXpwpTPAupF%2BzR5nEmkERsfUaK7VPXHDvz3CDWd2XLLISHs%2BqJvPozsaRtOByeA%2FmHCjwBTjCDVWRKRVr9BGkNqUCOnDDMMDiqtMGOqUBO6dEt%2Bi3bFC2pYEroGFSUXgHjg9nMVUtKE1qe3c6iokGu6ZhEe%2FG4FNqfKjJa4yZVqDx8upCnXjt1fHmtS2C%2BXgkErfPwHRktkjhtNrXaOuaA%2F4wkmsGbLdQAkkzBj6LkskSGihHQXfkoZgvVBANBAiZK1lF6dN%2BPjppPszhpfkSREeGkzHvvl5cVJsUHGwIim0eBrIjLr4tmVAfze%2FCbJcgy9Lr&X-Amz-Signature=b9f9c6cce7a5819221ef4638ce49155b5f0795d6811767dadbb4d7a36eb3ebf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5LSZPWS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5%2BGBuk3jGTsvrz6fuczSUz2L%2BYV4NLpjaDZgtD%2B2M1AiEAn%2Fpq9%2FiBzt%2B13K%2F4hPDkaaxKZ3cXq6FiCrxrNcSQzocqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX7aEylDhMhJceN5SrcA%2FxHDtmg5eZ4M6de6gWo36yucXS5m4So15Xgyd5PCFuJzgZxdKyDlQ%2BnYtxogBDwdT61bK6UQYNZx1Y10LTv5B3H3K%2B%2FbDuiz0zgVa5kAYmfOMkht5M2JeSdVDuH22%2FZfQnoc2RrNTnPUSSWu%2FxWLvT%2Bg8qipeOW3QrDpeeh2h7xh%2BZO2i5s6IAHtJT0tB%2FKpOPUt%2BcYNtlEpkConyPZw2lFXF5f7HRvhqrFoQEW2phNoKDbdG1ePM2iT1qwn2iVJtgRMDgALlo43YYhCAinSepB3ieMAFpe74KezOvxozot%2FCelteRJbYCMbVuAd83YHvw73slEJkZzYDrtfh0VIzxwHFbaC3NjRBVY3K2uwNfIgABMecvIRt%2Bq5JJ6u3dtMqMLlH%2BmDxhdUYdtlI5XszqY49i%2FJbvU%2Fh3WU5GrS9Ipb88VJn5jvB0PdOYjkt0Ns1w5Fs917dSZLgUTcbG1wOJ57yNUNrz687kQzsaP%2BCzfvAgTuWUH3NuekV2az8houSrmHRSDVpvLb3Pgf%2FO3Kf%2B8%2Bx9C1PhFZ3ILihiMGrVqhDm4XpvOUXWeLEIZeyoMDz547fzLc1kqAqxTEnl9QSR5Wdf3ocqtPXMpEEvebFOkOmGyZrIdcS0IWQhnMJvfqtMGOqUB9Wmj8IkR5WEXdSRybe0ifDK3kTlYQtrGhfnS0WaguhXSBjt80C%2F05NwsNZKDERwiqEi0%2Bqiy1JvZlXaY3s9dt2Ek9DhT7ixLHwlvvPRrxqiMWmlQjB4KqRAVEBqtZkfcXb2y3XR3rS8Gcsv7NakG3yyereQtvX2dNbvJ9czUP8LxAzrh90pKeLMUVk%2FnOlW5NqSGwfPBFM881MdjwkV6jYvk58ia&X-Amz-Signature=b79954d37c76049117887326f3de0cc68b4069ff6e0c65bbdfc62bb48cd9de30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDQUIF5W%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJFTO7zCjxGyw2BH8PTX1j5EDnryF2sQ7z1k10fMwR%2FgIhAMGn8akxfn0Wf0WKj3Fwl456k4wONCTptMKDHZiwOgmSKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMvwVObmD%2FDz6lRWYq3APmVWeE2MwrRZSEWUiW9iz27YvBWMYej%2FxkA3cVA7O6905Wu5t0aQKAaMDD254d5SJsfaF%2FhHDj%2Bhh%2FEdpW0LWO8bhk7iETTMzjlMp3tAqaIc0eD23Hkwx7Zq%2F3i4eXCAztTy2ovxm90HUbyyEDYfHEKtrKKoEkuaY%2FLA90YxBEP137kPipB75jIVygG%2FeMeWMcokWltPgpfsGGuc9YRpeznnzlUfg%2Fz7sEK15xiTUp1%2FyzTtsodcKM0nJqsOHwEEjdNS%2Fi%2BxMtx7STrc6LAcxs1tcfrdyxjgMo%2FmxwCZbSKVzsq4tH44iICU1ISxobClo0el7zlVJmeb5vlVVVrjI9%2BDLI7wUBZwhHNnQ1wI9pP6q3s9GVsQbBQ9N1G0q97%2FrCN96xZnrfLNkoi8bf9635xx6WBNzXOxxwG%2FzUJcgQxMq0PLFhsZWPaooNGBkizZShvnoi9AlYlZf7a1ZruqrkEVaQjtSeHpGeeYTJPCyqbJLgK%2ByrgTQPnijovmSlKYW%2FLI3Li4yxafv3TiVEOsmYrhJnAfZJeC6o%2BfiC86HCdj8R%2FEsr4bQu7JY4hVnu%2FWdG%2F4j4JST9TFijHCUiyEywgxsIxCojX3nBR8bxI7%2B2j%2B8fPxUhjq8ZG3uRXzCT36rTBjqkARm5vosqfYgeV66iUASyCubLFwfegBfFON8AJ9H4PZf23iILCsRJF%2B1ME36SEhl2jHSGOWr%2FPbQZtXaNJo1674sV1IVipjO4m2F1F0%2BG1c43fweUtAOS4UH%2F9sAK11Z3Mi2OIB99hiek8nPo42LsuXPFBk079Uy7Mxf7nl1MF%2FyuIcc94XsXGxun182PkSwlWJf3RFBshzrGvlfY3tBYGAZ9E4DJ&X-Amz-Signature=d6c2dbbf49a363bb4be5807f38b7ae8379e04fda564695c2f20d53810088c594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5LSZPWS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5%2BGBuk3jGTsvrz6fuczSUz2L%2BYV4NLpjaDZgtD%2B2M1AiEAn%2Fpq9%2FiBzt%2B13K%2F4hPDkaaxKZ3cXq6FiCrxrNcSQzocqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX7aEylDhMhJceN5SrcA%2FxHDtmg5eZ4M6de6gWo36yucXS5m4So15Xgyd5PCFuJzgZxdKyDlQ%2BnYtxogBDwdT61bK6UQYNZx1Y10LTv5B3H3K%2B%2FbDuiz0zgVa5kAYmfOMkht5M2JeSdVDuH22%2FZfQnoc2RrNTnPUSSWu%2FxWLvT%2Bg8qipeOW3QrDpeeh2h7xh%2BZO2i5s6IAHtJT0tB%2FKpOPUt%2BcYNtlEpkConyPZw2lFXF5f7HRvhqrFoQEW2phNoKDbdG1ePM2iT1qwn2iVJtgRMDgALlo43YYhCAinSepB3ieMAFpe74KezOvxozot%2FCelteRJbYCMbVuAd83YHvw73slEJkZzYDrtfh0VIzxwHFbaC3NjRBVY3K2uwNfIgABMecvIRt%2Bq5JJ6u3dtMqMLlH%2BmDxhdUYdtlI5XszqY49i%2FJbvU%2Fh3WU5GrS9Ipb88VJn5jvB0PdOYjkt0Ns1w5Fs917dSZLgUTcbG1wOJ57yNUNrz687kQzsaP%2BCzfvAgTuWUH3NuekV2az8houSrmHRSDVpvLb3Pgf%2FO3Kf%2B8%2Bx9C1PhFZ3ILihiMGrVqhDm4XpvOUXWeLEIZeyoMDz547fzLc1kqAqxTEnl9QSR5Wdf3ocqtPXMpEEvebFOkOmGyZrIdcS0IWQhnMJvfqtMGOqUB9Wmj8IkR5WEXdSRybe0ifDK3kTlYQtrGhfnS0WaguhXSBjt80C%2F05NwsNZKDERwiqEi0%2Bqiy1JvZlXaY3s9dt2Ek9DhT7ixLHwlvvPRrxqiMWmlQjB4KqRAVEBqtZkfcXb2y3XR3rS8Gcsv7NakG3yyereQtvX2dNbvJ9czUP8LxAzrh90pKeLMUVk%2FnOlW5NqSGwfPBFM881MdjwkV6jYvk58ia&X-Amz-Signature=2869e4857651c69be3595de8bcdc4d6f2af5d8a3eb9502782f74c51540a66de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM442X3K%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0YE7I%2FnFCSOwtQ%2Fxx%2FIRbhrDsR4Ed8a30%2F9gIvcm8GAIgfFYt6TKPGRXvkxG8%2FpcMmhaKEchuiaXM3T1WraGyCSoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOP6HhKeAv%2BdN5uoLircA1GgqoUDukcO0mdwKWywIL6XlAUvsf%2B%2BNN6LXQy0oY3xqbMZl9NpsTNnNZMYUNTMGfPk92Es2vnZ561tK9vanUPpDW8vf5ZSaoFMherzw%2FAKlNv5FmkYz5OwYzfp3oiTQpxPo0KDdzpvKJiszqK%2Fph6Iz4q2czs5YoIAkAtSEWB2zXrwhAr2ZSI7PayF0k9N0h1RFZbukvQAzQtT5RMziOZNJWzW%2BDqnflpTaRPG%2B6WFbwQTsZeTj64O8MbUi3JjXOLX%2BTYtLe1j%2BzjmY9D%2FMXdS5xGhtbwcrJOjwGb7w8joLCs%2BnyYLr2WdZLhMYT8qg2bnAosIYlfkS8NxtZSRo4OLYy%2F3WfgAOHnsq%2B%2FhZKvlqGHQlB4uSuDtbIQ%2F7wNl8tQ2q2hZ%2FIOjH4%2BlUBiLVtpV78il9RFIT2vsYMdt8M7t7gaNssy%2FRGLt%2BoyGAkgN%2FYD61Yu48bSbrekO8no9ykGp0hJG9UCR7XplKDdGjxOEXft7JxuSCBwQJJUw87Sk2GxXMgIIsW7Zg4ZP%2FT6aLRwo0iWRGLzAdQXkBBRY882ZUKTJ8G4Nq2D2WJfxanNJhtVy9BAtUca2Yw72xXz0kXpvJ1cxlJ7phd3CoRNMlTI24SgR2MMbZRihD%2BcOMJTpqtMGOqUB4R5uhn8Ao7Wsw%2BNoTgNT0h9BBBeFV65Bs%2BQ7huxuvXESVIIV7%2B7FHZSu35x03HT7g8yWlE5YQmfPuD7qqiV%2FSJFG79mm7fUDzZqUBCAD8GI9FyxGcho%2FPOAo555eLjUYAaGEXF%2F5Zb7ER0BVYwgajDKVstR5IgJhNZe9F3nH9pYJpOToNLxnbkV7hPtYXdrXpN4gCjNy2KJmuFwE8f98z1bBndPW&X-Amz-Signature=d9f3441eb391333d2f7d6c56276d5a8b92428a39b241211b7946cbd684725e73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5LSZPWS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5%2BGBuk3jGTsvrz6fuczSUz2L%2BYV4NLpjaDZgtD%2B2M1AiEAn%2Fpq9%2FiBzt%2B13K%2F4hPDkaaxKZ3cXq6FiCrxrNcSQzocqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX7aEylDhMhJceN5SrcA%2FxHDtmg5eZ4M6de6gWo36yucXS5m4So15Xgyd5PCFuJzgZxdKyDlQ%2BnYtxogBDwdT61bK6UQYNZx1Y10LTv5B3H3K%2B%2FbDuiz0zgVa5kAYmfOMkht5M2JeSdVDuH22%2FZfQnoc2RrNTnPUSSWu%2FxWLvT%2Bg8qipeOW3QrDpeeh2h7xh%2BZO2i5s6IAHtJT0tB%2FKpOPUt%2BcYNtlEpkConyPZw2lFXF5f7HRvhqrFoQEW2phNoKDbdG1ePM2iT1qwn2iVJtgRMDgALlo43YYhCAinSepB3ieMAFpe74KezOvxozot%2FCelteRJbYCMbVuAd83YHvw73slEJkZzYDrtfh0VIzxwHFbaC3NjRBVY3K2uwNfIgABMecvIRt%2Bq5JJ6u3dtMqMLlH%2BmDxhdUYdtlI5XszqY49i%2FJbvU%2Fh3WU5GrS9Ipb88VJn5jvB0PdOYjkt0Ns1w5Fs917dSZLgUTcbG1wOJ57yNUNrz687kQzsaP%2BCzfvAgTuWUH3NuekV2az8houSrmHRSDVpvLb3Pgf%2FO3Kf%2B8%2Bx9C1PhFZ3ILihiMGrVqhDm4XpvOUXWeLEIZeyoMDz547fzLc1kqAqxTEnl9QSR5Wdf3ocqtPXMpEEvebFOkOmGyZrIdcS0IWQhnMJvfqtMGOqUB9Wmj8IkR5WEXdSRybe0ifDK3kTlYQtrGhfnS0WaguhXSBjt80C%2F05NwsNZKDERwiqEi0%2Bqiy1JvZlXaY3s9dt2Ek9DhT7ixLHwlvvPRrxqiMWmlQjB4KqRAVEBqtZkfcXb2y3XR3rS8Gcsv7NakG3yyereQtvX2dNbvJ9czUP8LxAzrh90pKeLMUVk%2FnOlW5NqSGwfPBFM881MdjwkV6jYvk58ia&X-Amz-Signature=1f5c840061e6e8612f9d9fa3f39c22129322d3a672dfa625d660a4588b7cb21d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZAFS32M%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChk3AiN5qxGrfm80D1JFCTBuA9NmqZjyEaoVWXtcnZfAIgfh%2BuQWsMEdrq0y6koi5OZdbDWAyV%2F3C4ggS%2BNzY6jpkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZBpR1ai0EqslHWgSrcA3EEVbF%2BVqI5Iss4ma9h8S%2FQvyjiHYrwuAk0V8tiZ9AYpCt2lHgymmwHpm%2BLljoB66bvmvaocwtyO2cq6QzZpDWZy0wjgJZWbGkz1%2Bxf49t%2FvIIC7OQTSzUU1SwDY6GIbT48%2FqkMy04e8NGuILQ%2FAQe%2Fu3Xtyw8KOidouDZwW2GiE%2FoB%2FksHLpefTN%2BqsQAt3MpSWJ7qBtDqUnctnOp%2F9gmKYZms%2BL%2Bbzu3uewNjWPsqYhg1fNL7n7v0e3eEJIL1HaTNktfd58K48lQhBdjl%2FuH%2F2o6TfYx9el0HTkh5xa%2FyTDEsDV%2F1g0KRxpaNfCjYOGavn5X7ootiP6aWXumWuU8IGY6aeIUzMyy3dkVtnLrox6EooEO2w91zZ18uxD%2FSwaYdTGwevuM%2BbIfiagiy73vRVLrACXpAyJKiLdbZvk2i3sHMv0IuTjyeZcCsZfEjiIxrdSwLcAwhS%2BfHm73tZZeXrZBfpqlCHe1pGpo76cKfMfaqq4oRrYjB6O3YToD6tlRhXFEbwNL3kTEapnI2bX8e3TBLzUS%2B9cRWDDdGq8DuL0CdUQ8tkQxFwO40u5A13XWpU08%2FtlbZ4XMsxfOLnNHCid3fg0fSeEaheC2H4J4pU8dFRUaNHC4qLjmMMOfiqtMGOqUBVko58cnRld6ZZ1x7TZwafCicrtFheoxs2DhY10mfMHtmC8eA06U1cluVZwfwiXVpTIjI%2B7VBFgkrAr3bsO66%2F67skwJolM3OWb33t8kisKNJn1P%2FoZlfM%2Fyg2jO86Idbmc2Jg%2FOp%2FmrPAnfDjYK7SVF65za7WCePERDKkh8ti3I9R%2Bs3LxVlxM1zFUbYvKJWX0ZIpHXWkUKy4nvN%2BHl4XlVqH%2BjR&X-Amz-Signature=eab1d068ff713d838fd0fca890c1f07faf2608e9068cc3186da5f9439406040b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5LSZPWS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5%2BGBuk3jGTsvrz6fuczSUz2L%2BYV4NLpjaDZgtD%2B2M1AiEAn%2Fpq9%2FiBzt%2B13K%2F4hPDkaaxKZ3cXq6FiCrxrNcSQzocqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX7aEylDhMhJceN5SrcA%2FxHDtmg5eZ4M6de6gWo36yucXS5m4So15Xgyd5PCFuJzgZxdKyDlQ%2BnYtxogBDwdT61bK6UQYNZx1Y10LTv5B3H3K%2B%2FbDuiz0zgVa5kAYmfOMkht5M2JeSdVDuH22%2FZfQnoc2RrNTnPUSSWu%2FxWLvT%2Bg8qipeOW3QrDpeeh2h7xh%2BZO2i5s6IAHtJT0tB%2FKpOPUt%2BcYNtlEpkConyPZw2lFXF5f7HRvhqrFoQEW2phNoKDbdG1ePM2iT1qwn2iVJtgRMDgALlo43YYhCAinSepB3ieMAFpe74KezOvxozot%2FCelteRJbYCMbVuAd83YHvw73slEJkZzYDrtfh0VIzxwHFbaC3NjRBVY3K2uwNfIgABMecvIRt%2Bq5JJ6u3dtMqMLlH%2BmDxhdUYdtlI5XszqY49i%2FJbvU%2Fh3WU5GrS9Ipb88VJn5jvB0PdOYjkt0Ns1w5Fs917dSZLgUTcbG1wOJ57yNUNrz687kQzsaP%2BCzfvAgTuWUH3NuekV2az8houSrmHRSDVpvLb3Pgf%2FO3Kf%2B8%2Bx9C1PhFZ3ILihiMGrVqhDm4XpvOUXWeLEIZeyoMDz547fzLc1kqAqxTEnl9QSR5Wdf3ocqtPXMpEEvebFOkOmGyZrIdcS0IWQhnMJvfqtMGOqUB9Wmj8IkR5WEXdSRybe0ifDK3kTlYQtrGhfnS0WaguhXSBjt80C%2F05NwsNZKDERwiqEi0%2Bqiy1JvZlXaY3s9dt2Ek9DhT7ixLHwlvvPRrxqiMWmlQjB4KqRAVEBqtZkfcXb2y3XR3rS8Gcsv7NakG3yyereQtvX2dNbvJ9czUP8LxAzrh90pKeLMUVk%2FnOlW5NqSGwfPBFM881MdjwkV6jYvk58ia&X-Amz-Signature=07070de33a4d1f7d3d9521443d75a3618e603dcb160ca638210b2017256ee703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WALQCG5R%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYEU8ngMMQg982L6ji1OdZ8Nti6TGrSV0zxcreXZqtowIhAM%2BH2dKXmQeZ1gzpLcU4yVSHuF6TuBoWi01OAhLE9v1IKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIs%2Bz10wwb%2BsOOHNkq3AMOmZhuFoWWBgyyNZGDJocUg7OAlb3yiXd%2Bfkq7CK15IvPHFj9zeps8DA4RBH1%2F3Epn3gUpKoyo%2B0X1ZFTdB4P6sAcReZhZw8n7BsG0SUigH78LMASQqcJ63JfoO6amBg9L49QE%2BLlMtNqv3mEh7hrIVJR%2FW6StxKrki6bomjyJ3kz2ZZ9%2FPs%2BU%2FagXpAwv6%2B7itfHr8ZyYMgAJKl1UvSJQ92pduxR3NFnTctn1ZkJthMbie%2B4rBAb%2BoWFi74QrO9AxX7OZmH9mg0hFXLo4KdKpMQNCXIM%2BKHI8R4GwlVwCfFGRAiSmpYolxrm80GUopa4iA4SlYLGx6VS%2FpYrRqe%2Bl2v1dqPFgVdJ%2BC35n1L0ZeO3Q%2B0gH5cp3pbWBzkFBUXGaYWvjZwpV55Je401tGcLIADocdv32eeWdaK4HJMYVVnkZG0vhw00ciWO0l7q7Sch9NmwTdn7Em4qU6L%2F2qONZOWKQK0DZZ6PBZx50r5YUZo2LTy38kf%2BtnMNWhgFqO99oFak9%2F29GCYzEN%2FZ7I%2FZFiJE3Pnz4HGPp%2BaReqMbxXyDBf6SZLZllQMb%2FEDqEhUjnk0YfI%2BlyxL2KUYTeXv2R9wDbU%2FYbyXwnHVesD1v%2BqXTq7GaguW8NHMLVozCc4qrTBjqkAY5TA%2BHhjW%2BhaGjhiRByD5YkbmJJqTgS%2BJSNiHTnLA%2FUS63JeKpuBD8HvSv3moT%2F01G9j36JXBsyETfuJS40kOKO2vJkNen4ysOs0Gh166CcXS88briOdPGGi%2BHduI3n17cnXF7jD5XBLaSODfsmMLqh8EOEFf6Y0LEssv0RT5PFzmgdhPiJ%2FW2aXu4QHCdt444R5es0KrCT5D%2Bv%2FPrYEiJhNBFd&X-Amz-Signature=da9189ba98e953e866816cd7064e96ffb7c2dab58b4e9d7f2ed69bfb0e7cb0bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQFKVFIJ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRDprYI8u92lo04ew2jklY4b9oqZi4avYxHg8BB5cC%2FwIhAO3hk%2FyeM7n%2F305UQTQAtvjuTdt2V%2FjtNuo7Cno1vRG%2BKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8%2FKVGphV36xcaHUAq3APnbrXPEusPNqSqLiPr83yftYCBqQr9Vrm4veynKeul4EXQrRjiMRZyBLrf35cCUaBDiuOl%2FBSSdUUnBwU29ElA9cL2LYZKejmIl0bcxHo%2BFnZKXlN0wJ4jIQll0Fnytyj6re9OGFipn1O%2BiqZbKaWjhxxQ9ljPvhlPim4HEwAxjSe2HGskTjnFSYyDhkBhcppCNjhxYgfvJgJl5aMS0DRIYF16UthM9i6nubVKEN8vBBUEVFwt3x%2BpOFLaqHxfW9nj0xpOslpfNuF%2FhQJqgEWr4metdjYYouZ%2BLxVH9WNELsgiJ7JwVGiRble8XUc%2F4HNT1kI9v7pmdi3BJSJT2MxabxhzDHSYoAWwe%2Fjc7NrhhUpcaajOrQLdefMquueSnIWPl5cABQsr1DS%2BDaTvndukHmZN2tfaosq0CGRTTl3%2FXAyMbG0ABYDxL7fazHsLJcjtkj%2FLy4pOONTXmkGPiwxOPnNjCskc2qIyygTtMiRgKyUfdi4sjmHKsQe4zOPOjN3JHEjsgiJkCIyXrzrdjo1RQHCusu4iP5uMW9KGxBh%2Fl63qQ89AnR%2FL0sToSgNkEVHsUxQRNuJ%2Bft4yspuRR3MTDe9ET24BYQypJ0XpU6SDb8whBLgb%2BGmVFyE8dDDb4qrTBjqkAViGQhEz34Dh4HxY1iGUXh%2FC8el8bGitnXs18ix6U5z1gSbloFs2i%2FaPGVjxDVOYePI67xCOmmVXwnk6XwQQJy0Z1bhwkdHNdlTsrgSYofcm5RwmvvJgf%2FudjQQeoTF4jch1o5sIwrj1y%2Bgqrq85KTR%2FR17NSOFXHNR6sJHLcfdPg%2BLl2GzEg0wxu0KIFXiVFU1W675HcvWXsfD7jQY8dabQV77G&X-Amz-Signature=71a02f712ba9d2451e3e258ac6a0c4d8db3de7a96e00f6dd9c0cc4d7ab13e362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJAHXQZD%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXdgzcMOVhgfQmnFl84bI5vc5CanjMHMqHe0Hbl%2BjIJAiBwefIUmfZIEcyq7Aj0HVVT1fVmamAgoXlh4VfmigRQUCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD7AOfjL9rHVVGPDoKtwDMaxheWil9mqulwUZFFADr4DHDf0p1ZtHuJXAn29k9jeKgTfh2MLxSkVSygJcqROgnXWcmbCKKrtC1%2FY8bYAuC0RAA0iWv4647%2F5o2VSxmQh42AGreeQ1BsvrKvmuLnojzxoAe7s%2BAlj0SWQlnpdgAk1VYMSvdoV8M0EpFpCgmTJwFR96kt95ojaGK4AWi05JXIselYGsr2kRU4rqkwAJOsgQuip173SGGwNB1Y93WoQjP0egPytS5TDMX6uELzMkI4DpT3uBs39sOk%2B85%2BzTGOuecxdjmb2b0eGiW%2BISqCK0hxQFWM%2B26ful7midyU1pkLtzrR8LxQHlkrKTvUls%2F0N0U%2FLYk7pK%2FgNibO%2F%2BRMRTQ839L0d0aP77FcFiHWJDR7j83kraasb3rhDkzsFpsx0pcq3yinJkcDx14Y33JgEBFU%2BS70AJi8V1KyKNxZgNalkvTU6HH9cBBrvxW%2BpKRwiP802Jtf%2FLQ64CGBiaWOASW2i31KBRkS1CzFXspIEKfB9xcihth5nkBVsLzF52mbJVBT%2FvBY%2BOHNWFGDjJmlr0%2BKyu4JPRZw6oKSyIGK1VeLgfwqEaV8YTMHVZMdPMuVB4B4jbwY5fah9lTASe5sb0sxjQz4%2BP2qxCiLQw1t%2Bq0wY6pgHOR8U5Yu4KtsBbcZObeoqktAoHXfG76k17S2i6Hn9VCbBJHiiGBIf%2FaGJss7Vo1fOL4bs9ASkXNtTZIVIuRdOJIzkFQjWmHklNoPMe9rI1UB8gRdtwyscL4EdcSzN0fzBuGM9mQg3sMJt8HPM8fj3g8MwMtvuw9dSZIuMrA0M%2BdHUzYI3ttJ39E8xp4VnZxaNp0lye0z%2FT0kOMchAFD9JJ%2Fg9a4js9&X-Amz-Signature=9520cb153fb363474c31d3574c3cd7fc773260900797aae8685b11fdec1c7fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5LSZPWS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5%2BGBuk3jGTsvrz6fuczSUz2L%2BYV4NLpjaDZgtD%2B2M1AiEAn%2Fpq9%2FiBzt%2B13K%2F4hPDkaaxKZ3cXq6FiCrxrNcSQzocqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX7aEylDhMhJceN5SrcA%2FxHDtmg5eZ4M6de6gWo36yucXS5m4So15Xgyd5PCFuJzgZxdKyDlQ%2BnYtxogBDwdT61bK6UQYNZx1Y10LTv5B3H3K%2B%2FbDuiz0zgVa5kAYmfOMkht5M2JeSdVDuH22%2FZfQnoc2RrNTnPUSSWu%2FxWLvT%2Bg8qipeOW3QrDpeeh2h7xh%2BZO2i5s6IAHtJT0tB%2FKpOPUt%2BcYNtlEpkConyPZw2lFXF5f7HRvhqrFoQEW2phNoKDbdG1ePM2iT1qwn2iVJtgRMDgALlo43YYhCAinSepB3ieMAFpe74KezOvxozot%2FCelteRJbYCMbVuAd83YHvw73slEJkZzYDrtfh0VIzxwHFbaC3NjRBVY3K2uwNfIgABMecvIRt%2Bq5JJ6u3dtMqMLlH%2BmDxhdUYdtlI5XszqY49i%2FJbvU%2Fh3WU5GrS9Ipb88VJn5jvB0PdOYjkt0Ns1w5Fs917dSZLgUTcbG1wOJ57yNUNrz687kQzsaP%2BCzfvAgTuWUH3NuekV2az8houSrmHRSDVpvLb3Pgf%2FO3Kf%2B8%2Bx9C1PhFZ3ILihiMGrVqhDm4XpvOUXWeLEIZeyoMDz547fzLc1kqAqxTEnl9QSR5Wdf3ocqtPXMpEEvebFOkOmGyZrIdcS0IWQhnMJvfqtMGOqUB9Wmj8IkR5WEXdSRybe0ifDK3kTlYQtrGhfnS0WaguhXSBjt80C%2F05NwsNZKDERwiqEi0%2Bqiy1JvZlXaY3s9dt2Ek9DhT7ixLHwlvvPRrxqiMWmlQjB4KqRAVEBqtZkfcXb2y3XR3rS8Gcsv7NakG3yyereQtvX2dNbvJ9czUP8LxAzrh90pKeLMUVk%2FnOlW5NqSGwfPBFM881MdjwkV6jYvk58ia&X-Amz-Signature=eacaf4d4c2aa18e8ebc1002473496d7ae0655ed975acc58925037a59d26de940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5LSZPWS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5%2BGBuk3jGTsvrz6fuczSUz2L%2BYV4NLpjaDZgtD%2B2M1AiEAn%2Fpq9%2FiBzt%2B13K%2F4hPDkaaxKZ3cXq6FiCrxrNcSQzocqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKX7aEylDhMhJceN5SrcA%2FxHDtmg5eZ4M6de6gWo36yucXS5m4So15Xgyd5PCFuJzgZxdKyDlQ%2BnYtxogBDwdT61bK6UQYNZx1Y10LTv5B3H3K%2B%2FbDuiz0zgVa5kAYmfOMkht5M2JeSdVDuH22%2FZfQnoc2RrNTnPUSSWu%2FxWLvT%2Bg8qipeOW3QrDpeeh2h7xh%2BZO2i5s6IAHtJT0tB%2FKpOPUt%2BcYNtlEpkConyPZw2lFXF5f7HRvhqrFoQEW2phNoKDbdG1ePM2iT1qwn2iVJtgRMDgALlo43YYhCAinSepB3ieMAFpe74KezOvxozot%2FCelteRJbYCMbVuAd83YHvw73slEJkZzYDrtfh0VIzxwHFbaC3NjRBVY3K2uwNfIgABMecvIRt%2Bq5JJ6u3dtMqMLlH%2BmDxhdUYdtlI5XszqY49i%2FJbvU%2Fh3WU5GrS9Ipb88VJn5jvB0PdOYjkt0Ns1w5Fs917dSZLgUTcbG1wOJ57yNUNrz687kQzsaP%2BCzfvAgTuWUH3NuekV2az8houSrmHRSDVpvLb3Pgf%2FO3Kf%2B8%2Bx9C1PhFZ3ILihiMGrVqhDm4XpvOUXWeLEIZeyoMDz547fzLc1kqAqxTEnl9QSR5Wdf3ocqtPXMpEEvebFOkOmGyZrIdcS0IWQhnMJvfqtMGOqUB9Wmj8IkR5WEXdSRybe0ifDK3kTlYQtrGhfnS0WaguhXSBjt80C%2F05NwsNZKDERwiqEi0%2Bqiy1JvZlXaY3s9dt2Ek9DhT7ixLHwlvvPRrxqiMWmlQjB4KqRAVEBqtZkfcXb2y3XR3rS8Gcsv7NakG3yyereQtvX2dNbvJ9czUP8LxAzrh90pKeLMUVk%2FnOlW5NqSGwfPBFM881MdjwkV6jYvk58ia&X-Amz-Signature=720f26e2953889ad441848156d90a7f35f0999b843cd4ca21a04979868590171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUEJV4RZ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR2iUb6S13KkCHY3j2sJp%2Bphaw%2Fko2FGMCh33nGp7gFAiAGvnetn4CPTGSobhavFkQPCKrMfQ%2BndD1r%2Bv65%2FecokiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6QMhHaN7JrDlLJq4KtwDScuCYf1K0naQUKGjjL6U2csTGqczItyExJ4Dr70Z4iOw%2FsfSyUcyiw756cELbco2r0x62VFQr6CXnXxFFJK7Z7Q2yjHLGosy3hHoQ4nHDw4FEI1E1%2FnrWKLiPeo63TXbiH%2BHhP5%2B%2FBzFLhG3rtwRLl99PkS6LVyEX2vALRzLcFAsb0ugpA%2F8cVDZVjIgp3oFJisqI6PjrjDaGnejfcKaPjM%2BJ2a8Ptmx8K7%2F1B7hb3xPwKHW2yZnU4TZdms%2FVYgqvPWkishZFw1gHHGlV4Aaj1Uazk%2FDiUOzKLA5FlFxm8jEHfUeutaKgxMAdEtIrzD6LFFNwD3rh6eFLKkDXRibo9AFRKp4wIRPRnin7srklDZXFCiJD%2Fj64psqhFuGQ1HIDYwbb0R32JEMLDzVfPk3x7flsDCoKYpmyZioqG5sT7RUx%2FYwV0BB2LXo0a9K5xj%2FF7txfMXxWFQA7pypY7PQoUNARKUnmop1NBhWxoFOuInf%2BBf8988HWMBPFk1lqT6frympOUNnXrrTylYxZRwewrub6nFjP4IF%2BD7%2BmKsg2nFNgYFA5DxMq%2Fg%2FbkiUd8fDQKBShD8mXNSzmPNjVHSqBlR4VbTKJ4i3CuScJBSH3lYsLalM2isMIC19Ztcw1d%2Bq0wY6pgGmRiX81ljgXBN5QjHwa9EwA7W71S5mldKkqpGKMaz2OTwU486Y%2F2p5CALt6cUG5riWzru8Jfho8C0LOWQFbdmjiQ6yxchyZFBqpcT2BGDlFE7SEbyQoM5mtl1h0bZBvRgFg8KXoetd%2BRpUqwWlfmDOLu5RXS2D1kWSN2X9XdnFwAqrQVMXKM8BLWN3rujJRxCBy%2BeeXNcqqIxiFRC0JN4ILqukBEYh&X-Amz-Signature=b657c8d04bb1b6c8bab07631617021294d6181fa2cc0e4f03a4aa7aaa102fe3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUEJV4RZ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR2iUb6S13KkCHY3j2sJp%2Bphaw%2Fko2FGMCh33nGp7gFAiAGvnetn4CPTGSobhavFkQPCKrMfQ%2BndD1r%2Bv65%2FecokiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6QMhHaN7JrDlLJq4KtwDScuCYf1K0naQUKGjjL6U2csTGqczItyExJ4Dr70Z4iOw%2FsfSyUcyiw756cELbco2r0x62VFQr6CXnXxFFJK7Z7Q2yjHLGosy3hHoQ4nHDw4FEI1E1%2FnrWKLiPeo63TXbiH%2BHhP5%2B%2FBzFLhG3rtwRLl99PkS6LVyEX2vALRzLcFAsb0ugpA%2F8cVDZVjIgp3oFJisqI6PjrjDaGnejfcKaPjM%2BJ2a8Ptmx8K7%2F1B7hb3xPwKHW2yZnU4TZdms%2FVYgqvPWkishZFw1gHHGlV4Aaj1Uazk%2FDiUOzKLA5FlFxm8jEHfUeutaKgxMAdEtIrzD6LFFNwD3rh6eFLKkDXRibo9AFRKp4wIRPRnin7srklDZXFCiJD%2Fj64psqhFuGQ1HIDYwbb0R32JEMLDzVfPk3x7flsDCoKYpmyZioqG5sT7RUx%2FYwV0BB2LXo0a9K5xj%2FF7txfMXxWFQA7pypY7PQoUNARKUnmop1NBhWxoFOuInf%2BBf8988HWMBPFk1lqT6frympOUNnXrrTylYxZRwewrub6nFjP4IF%2BD7%2BmKsg2nFNgYFA5DxMq%2Fg%2FbkiUd8fDQKBShD8mXNSzmPNjVHSqBlR4VbTKJ4i3CuScJBSH3lYsLalM2isMIC19Ztcw1d%2Bq0wY6pgGmRiX81ljgXBN5QjHwa9EwA7W71S5mldKkqpGKMaz2OTwU486Y%2F2p5CALt6cUG5riWzru8Jfho8C0LOWQFbdmjiQ6yxchyZFBqpcT2BGDlFE7SEbyQoM5mtl1h0bZBvRgFg8KXoetd%2BRpUqwWlfmDOLu5RXS2D1kWSN2X9XdnFwAqrQVMXKM8BLWN3rujJRxCBy%2BeeXNcqqIxiFRC0JN4ILqukBEYh&X-Amz-Signature=82c38f64766cf4a404126c2acdbaf8aa57806ecb97d1fb625aa08c199be3fd8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUEJV4RZ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR2iUb6S13KkCHY3j2sJp%2Bphaw%2Fko2FGMCh33nGp7gFAiAGvnetn4CPTGSobhavFkQPCKrMfQ%2BndD1r%2Bv65%2FecokiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6QMhHaN7JrDlLJq4KtwDScuCYf1K0naQUKGjjL6U2csTGqczItyExJ4Dr70Z4iOw%2FsfSyUcyiw756cELbco2r0x62VFQr6CXnXxFFJK7Z7Q2yjHLGosy3hHoQ4nHDw4FEI1E1%2FnrWKLiPeo63TXbiH%2BHhP5%2B%2FBzFLhG3rtwRLl99PkS6LVyEX2vALRzLcFAsb0ugpA%2F8cVDZVjIgp3oFJisqI6PjrjDaGnejfcKaPjM%2BJ2a8Ptmx8K7%2F1B7hb3xPwKHW2yZnU4TZdms%2FVYgqvPWkishZFw1gHHGlV4Aaj1Uazk%2FDiUOzKLA5FlFxm8jEHfUeutaKgxMAdEtIrzD6LFFNwD3rh6eFLKkDXRibo9AFRKp4wIRPRnin7srklDZXFCiJD%2Fj64psqhFuGQ1HIDYwbb0R32JEMLDzVfPk3x7flsDCoKYpmyZioqG5sT7RUx%2FYwV0BB2LXo0a9K5xj%2FF7txfMXxWFQA7pypY7PQoUNARKUnmop1NBhWxoFOuInf%2BBf8988HWMBPFk1lqT6frympOUNnXrrTylYxZRwewrub6nFjP4IF%2BD7%2BmKsg2nFNgYFA5DxMq%2Fg%2FbkiUd8fDQKBShD8mXNSzmPNjVHSqBlR4VbTKJ4i3CuScJBSH3lYsLalM2isMIC19Ztcw1d%2Bq0wY6pgGmRiX81ljgXBN5QjHwa9EwA7W71S5mldKkqpGKMaz2OTwU486Y%2F2p5CALt6cUG5riWzru8Jfho8C0LOWQFbdmjiQ6yxchyZFBqpcT2BGDlFE7SEbyQoM5mtl1h0bZBvRgFg8KXoetd%2BRpUqwWlfmDOLu5RXS2D1kWSN2X9XdnFwAqrQVMXKM8BLWN3rujJRxCBy%2BeeXNcqqIxiFRC0JN4ILqukBEYh&X-Amz-Signature=8bbac4216b065964f090055d6537f3180ef63c327af92c415bd1ac2a3b9a063c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUEJV4RZ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR2iUb6S13KkCHY3j2sJp%2Bphaw%2Fko2FGMCh33nGp7gFAiAGvnetn4CPTGSobhavFkQPCKrMfQ%2BndD1r%2Bv65%2FecokiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6QMhHaN7JrDlLJq4KtwDScuCYf1K0naQUKGjjL6U2csTGqczItyExJ4Dr70Z4iOw%2FsfSyUcyiw756cELbco2r0x62VFQr6CXnXxFFJK7Z7Q2yjHLGosy3hHoQ4nHDw4FEI1E1%2FnrWKLiPeo63TXbiH%2BHhP5%2B%2FBzFLhG3rtwRLl99PkS6LVyEX2vALRzLcFAsb0ugpA%2F8cVDZVjIgp3oFJisqI6PjrjDaGnejfcKaPjM%2BJ2a8Ptmx8K7%2F1B7hb3xPwKHW2yZnU4TZdms%2FVYgqvPWkishZFw1gHHGlV4Aaj1Uazk%2FDiUOzKLA5FlFxm8jEHfUeutaKgxMAdEtIrzD6LFFNwD3rh6eFLKkDXRibo9AFRKp4wIRPRnin7srklDZXFCiJD%2Fj64psqhFuGQ1HIDYwbb0R32JEMLDzVfPk3x7flsDCoKYpmyZioqG5sT7RUx%2FYwV0BB2LXo0a9K5xj%2FF7txfMXxWFQA7pypY7PQoUNARKUnmop1NBhWxoFOuInf%2BBf8988HWMBPFk1lqT6frympOUNnXrrTylYxZRwewrub6nFjP4IF%2BD7%2BmKsg2nFNgYFA5DxMq%2Fg%2FbkiUd8fDQKBShD8mXNSzmPNjVHSqBlR4VbTKJ4i3CuScJBSH3lYsLalM2isMIC19Ztcw1d%2Bq0wY6pgGmRiX81ljgXBN5QjHwa9EwA7W71S5mldKkqpGKMaz2OTwU486Y%2F2p5CALt6cUG5riWzru8Jfho8C0LOWQFbdmjiQ6yxchyZFBqpcT2BGDlFE7SEbyQoM5mtl1h0bZBvRgFg8KXoetd%2BRpUqwWlfmDOLu5RXS2D1kWSN2X9XdnFwAqrQVMXKM8BLWN3rujJRxCBy%2BeeXNcqqIxiFRC0JN4ILqukBEYh&X-Amz-Signature=6f1201977cb36070be58df2ba6a1efe358d9376c80eb8d4d2280eabec38333eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQEIHEEQ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXJxlb5Ump50Km6EwymROlO6VzqSporzP%2BEnw%2FpXLt4AiEAgwZC3uT79GuC%2BUoB19l3lDrGViu0uZc9TmM3E6wqcPQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlWgMEFM8i8cGhnByrcA34d66Vx2A58DMUM%2B%2BLwh3OuXL1qMer1R2kEnN9HrZ%2BuoBpfyqW4mJIYSjdENEZ5CXqDvjukXdpvsYJNyfDVUibM%2BPYPPb7Dh2rYotEvAX3qA%2FQexl2HwZcbxNR%2FuUxeZOmsAgawx1vA%2BDZq6QnHMeMyp7QQYouqiJPa9aNuhPXwlxSqmIVifz8K2nRjQWzwZIJtBnr%2BprqnZ7Ty6evuti9NQx%2F8SvTN%2BLAF1eXbP0bKBIS2mMcMq57xZge2uy6EKngog8YoqW%2B65FXGE%2F0hfbp5Z8IrIuFAM8m6n1KOlBN%2Beej5d%2FSC3o87y1of3dAcJ3CK%2FEFQAQyZ4eDMI%2B9kE6l4g9P4dRit28adCivqBZb67ET1vDetVN0NtdjynlrRq1Tl%2BlZ6hqMQgtxuYctGQowHjX6uN0nwOExiok0UU%2Fg9ACuCzCwbhHuJX6YSMea1r57Oe69PQ2d0%2FCAnXVliBFedDos5ZJnq0nFGK%2B4MpxgTfYegKecS6w34TZB%2FcF6OcoAEyTfstcunZ9YiTHbcvtMai9AUCE8Y3lwoDn3FapWF4xTzIPvFyJzdRdp1Ho1mM5wbArWgwbCRQk%2F2R2XqRlFMt17Y9ONvSk2O7qvT5URMUJOs4Q4JOMqDjM6iMObfqtMGOqUB%2BlYbahawT04uCJjIeffvHq8eqNoRkYSc4hxdSdzrqoS93iZRs7O%2Bsyt1GcotokapAFT7%2FgqiCjFlB8CMCNxehAiWu95ujO6Rmcxs7A8NS2%2Fbmfc3vSjOHO%2BMiXTo7cjs4a2j9lHIxsF5Hxb8tEUmygWSAevLWyFbFJ%2B4WNEe74%2B67zGHW0bVJ3xddHqwTDfNe6LuxFzMawIbFXH4254RsT9YtqTF&X-Amz-Signature=b863ab6274aaa80dac6d5f2136d37a7dcec78455e1a917ec9d2f8838387dd981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUEJV4RZ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR2iUb6S13KkCHY3j2sJp%2Bphaw%2Fko2FGMCh33nGp7gFAiAGvnetn4CPTGSobhavFkQPCKrMfQ%2BndD1r%2Bv65%2FecokiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6QMhHaN7JrDlLJq4KtwDScuCYf1K0naQUKGjjL6U2csTGqczItyExJ4Dr70Z4iOw%2FsfSyUcyiw756cELbco2r0x62VFQr6CXnXxFFJK7Z7Q2yjHLGosy3hHoQ4nHDw4FEI1E1%2FnrWKLiPeo63TXbiH%2BHhP5%2B%2FBzFLhG3rtwRLl99PkS6LVyEX2vALRzLcFAsb0ugpA%2F8cVDZVjIgp3oFJisqI6PjrjDaGnejfcKaPjM%2BJ2a8Ptmx8K7%2F1B7hb3xPwKHW2yZnU4TZdms%2FVYgqvPWkishZFw1gHHGlV4Aaj1Uazk%2FDiUOzKLA5FlFxm8jEHfUeutaKgxMAdEtIrzD6LFFNwD3rh6eFLKkDXRibo9AFRKp4wIRPRnin7srklDZXFCiJD%2Fj64psqhFuGQ1HIDYwbb0R32JEMLDzVfPk3x7flsDCoKYpmyZioqG5sT7RUx%2FYwV0BB2LXo0a9K5xj%2FF7txfMXxWFQA7pypY7PQoUNARKUnmop1NBhWxoFOuInf%2BBf8988HWMBPFk1lqT6frympOUNnXrrTylYxZRwewrub6nFjP4IF%2BD7%2BmKsg2nFNgYFA5DxMq%2Fg%2FbkiUd8fDQKBShD8mXNSzmPNjVHSqBlR4VbTKJ4i3CuScJBSH3lYsLalM2isMIC19Ztcw1d%2Bq0wY6pgGmRiX81ljgXBN5QjHwa9EwA7W71S5mldKkqpGKMaz2OTwU486Y%2F2p5CALt6cUG5riWzru8Jfho8C0LOWQFbdmjiQ6yxchyZFBqpcT2BGDlFE7SEbyQoM5mtl1h0bZBvRgFg8KXoetd%2BRpUqwWlfmDOLu5RXS2D1kWSN2X9XdnFwAqrQVMXKM8BLWN3rujJRxCBy%2BeeXNcqqIxiFRC0JN4ILqukBEYh&X-Amz-Signature=d35730345c5c59ddc741eb988e1af563f5e42301c839cb506ff6e4ac8333c8ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUEJV4RZ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR2iUb6S13KkCHY3j2sJp%2Bphaw%2Fko2FGMCh33nGp7gFAiAGvnetn4CPTGSobhavFkQPCKrMfQ%2BndD1r%2Bv65%2FecokiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6QMhHaN7JrDlLJq4KtwDScuCYf1K0naQUKGjjL6U2csTGqczItyExJ4Dr70Z4iOw%2FsfSyUcyiw756cELbco2r0x62VFQr6CXnXxFFJK7Z7Q2yjHLGosy3hHoQ4nHDw4FEI1E1%2FnrWKLiPeo63TXbiH%2BHhP5%2B%2FBzFLhG3rtwRLl99PkS6LVyEX2vALRzLcFAsb0ugpA%2F8cVDZVjIgp3oFJisqI6PjrjDaGnejfcKaPjM%2BJ2a8Ptmx8K7%2F1B7hb3xPwKHW2yZnU4TZdms%2FVYgqvPWkishZFw1gHHGlV4Aaj1Uazk%2FDiUOzKLA5FlFxm8jEHfUeutaKgxMAdEtIrzD6LFFNwD3rh6eFLKkDXRibo9AFRKp4wIRPRnin7srklDZXFCiJD%2Fj64psqhFuGQ1HIDYwbb0R32JEMLDzVfPk3x7flsDCoKYpmyZioqG5sT7RUx%2FYwV0BB2LXo0a9K5xj%2FF7txfMXxWFQA7pypY7PQoUNARKUnmop1NBhWxoFOuInf%2BBf8988HWMBPFk1lqT6frympOUNnXrrTylYxZRwewrub6nFjP4IF%2BD7%2BmKsg2nFNgYFA5DxMq%2Fg%2FbkiUd8fDQKBShD8mXNSzmPNjVHSqBlR4VbTKJ4i3CuScJBSH3lYsLalM2isMIC19Ztcw1d%2Bq0wY6pgGmRiX81ljgXBN5QjHwa9EwA7W71S5mldKkqpGKMaz2OTwU486Y%2F2p5CALt6cUG5riWzru8Jfho8C0LOWQFbdmjiQ6yxchyZFBqpcT2BGDlFE7SEbyQoM5mtl1h0bZBvRgFg8KXoetd%2BRpUqwWlfmDOLu5RXS2D1kWSN2X9XdnFwAqrQVMXKM8BLWN3rujJRxCBy%2BeeXNcqqIxiFRC0JN4ILqukBEYh&X-Amz-Signature=13e4cefb1e8f649509de681ffe8211f01ab96770e5b9fee8069be491eaf0406d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUEJV4RZ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR2iUb6S13KkCHY3j2sJp%2Bphaw%2Fko2FGMCh33nGp7gFAiAGvnetn4CPTGSobhavFkQPCKrMfQ%2BndD1r%2Bv65%2FecokiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6QMhHaN7JrDlLJq4KtwDScuCYf1K0naQUKGjjL6U2csTGqczItyExJ4Dr70Z4iOw%2FsfSyUcyiw756cELbco2r0x62VFQr6CXnXxFFJK7Z7Q2yjHLGosy3hHoQ4nHDw4FEI1E1%2FnrWKLiPeo63TXbiH%2BHhP5%2B%2FBzFLhG3rtwRLl99PkS6LVyEX2vALRzLcFAsb0ugpA%2F8cVDZVjIgp3oFJisqI6PjrjDaGnejfcKaPjM%2BJ2a8Ptmx8K7%2F1B7hb3xPwKHW2yZnU4TZdms%2FVYgqvPWkishZFw1gHHGlV4Aaj1Uazk%2FDiUOzKLA5FlFxm8jEHfUeutaKgxMAdEtIrzD6LFFNwD3rh6eFLKkDXRibo9AFRKp4wIRPRnin7srklDZXFCiJD%2Fj64psqhFuGQ1HIDYwbb0R32JEMLDzVfPk3x7flsDCoKYpmyZioqG5sT7RUx%2FYwV0BB2LXo0a9K5xj%2FF7txfMXxWFQA7pypY7PQoUNARKUnmop1NBhWxoFOuInf%2BBf8988HWMBPFk1lqT6frympOUNnXrrTylYxZRwewrub6nFjP4IF%2BD7%2BmKsg2nFNgYFA5DxMq%2Fg%2FbkiUd8fDQKBShD8mXNSzmPNjVHSqBlR4VbTKJ4i3CuScJBSH3lYsLalM2isMIC19Ztcw1d%2Bq0wY6pgGmRiX81ljgXBN5QjHwa9EwA7W71S5mldKkqpGKMaz2OTwU486Y%2F2p5CALt6cUG5riWzru8Jfho8C0LOWQFbdmjiQ6yxchyZFBqpcT2BGDlFE7SEbyQoM5mtl1h0bZBvRgFg8KXoetd%2BRpUqwWlfmDOLu5RXS2D1kWSN2X9XdnFwAqrQVMXKM8BLWN3rujJRxCBy%2BeeXNcqqIxiFRC0JN4ILqukBEYh&X-Amz-Signature=8bbac4216b065964f090055d6537f3180ef63c327af92c415bd1ac2a3b9a063c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUEJV4RZ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR2iUb6S13KkCHY3j2sJp%2Bphaw%2Fko2FGMCh33nGp7gFAiAGvnetn4CPTGSobhavFkQPCKrMfQ%2BndD1r%2Bv65%2FecokiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6QMhHaN7JrDlLJq4KtwDScuCYf1K0naQUKGjjL6U2csTGqczItyExJ4Dr70Z4iOw%2FsfSyUcyiw756cELbco2r0x62VFQr6CXnXxFFJK7Z7Q2yjHLGosy3hHoQ4nHDw4FEI1E1%2FnrWKLiPeo63TXbiH%2BHhP5%2B%2FBzFLhG3rtwRLl99PkS6LVyEX2vALRzLcFAsb0ugpA%2F8cVDZVjIgp3oFJisqI6PjrjDaGnejfcKaPjM%2BJ2a8Ptmx8K7%2F1B7hb3xPwKHW2yZnU4TZdms%2FVYgqvPWkishZFw1gHHGlV4Aaj1Uazk%2FDiUOzKLA5FlFxm8jEHfUeutaKgxMAdEtIrzD6LFFNwD3rh6eFLKkDXRibo9AFRKp4wIRPRnin7srklDZXFCiJD%2Fj64psqhFuGQ1HIDYwbb0R32JEMLDzVfPk3x7flsDCoKYpmyZioqG5sT7RUx%2FYwV0BB2LXo0a9K5xj%2FF7txfMXxWFQA7pypY7PQoUNARKUnmop1NBhWxoFOuInf%2BBf8988HWMBPFk1lqT6frympOUNnXrrTylYxZRwewrub6nFjP4IF%2BD7%2BmKsg2nFNgYFA5DxMq%2Fg%2FbkiUd8fDQKBShD8mXNSzmPNjVHSqBlR4VbTKJ4i3CuScJBSH3lYsLalM2isMIC19Ztcw1d%2Bq0wY6pgGmRiX81ljgXBN5QjHwa9EwA7W71S5mldKkqpGKMaz2OTwU486Y%2F2p5CALt6cUG5riWzru8Jfho8C0LOWQFbdmjiQ6yxchyZFBqpcT2BGDlFE7SEbyQoM5mtl1h0bZBvRgFg8KXoetd%2BRpUqwWlfmDOLu5RXS2D1kWSN2X9XdnFwAqrQVMXKM8BLWN3rujJRxCBy%2BeeXNcqqIxiFRC0JN4ILqukBEYh&X-Amz-Signature=7a799ef03db3800879baeab99ab4b95ba9fde364fd0e906af1599c2c6f35fea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUEJV4RZ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR2iUb6S13KkCHY3j2sJp%2Bphaw%2Fko2FGMCh33nGp7gFAiAGvnetn4CPTGSobhavFkQPCKrMfQ%2BndD1r%2Bv65%2FecokiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6QMhHaN7JrDlLJq4KtwDScuCYf1K0naQUKGjjL6U2csTGqczItyExJ4Dr70Z4iOw%2FsfSyUcyiw756cELbco2r0x62VFQr6CXnXxFFJK7Z7Q2yjHLGosy3hHoQ4nHDw4FEI1E1%2FnrWKLiPeo63TXbiH%2BHhP5%2B%2FBzFLhG3rtwRLl99PkS6LVyEX2vALRzLcFAsb0ugpA%2F8cVDZVjIgp3oFJisqI6PjrjDaGnejfcKaPjM%2BJ2a8Ptmx8K7%2F1B7hb3xPwKHW2yZnU4TZdms%2FVYgqvPWkishZFw1gHHGlV4Aaj1Uazk%2FDiUOzKLA5FlFxm8jEHfUeutaKgxMAdEtIrzD6LFFNwD3rh6eFLKkDXRibo9AFRKp4wIRPRnin7srklDZXFCiJD%2Fj64psqhFuGQ1HIDYwbb0R32JEMLDzVfPk3x7flsDCoKYpmyZioqG5sT7RUx%2FYwV0BB2LXo0a9K5xj%2FF7txfMXxWFQA7pypY7PQoUNARKUnmop1NBhWxoFOuInf%2BBf8988HWMBPFk1lqT6frympOUNnXrrTylYxZRwewrub6nFjP4IF%2BD7%2BmKsg2nFNgYFA5DxMq%2Fg%2FbkiUd8fDQKBShD8mXNSzmPNjVHSqBlR4VbTKJ4i3CuScJBSH3lYsLalM2isMIC19Ztcw1d%2Bq0wY6pgGmRiX81ljgXBN5QjHwa9EwA7W71S5mldKkqpGKMaz2OTwU486Y%2F2p5CALt6cUG5riWzru8Jfho8C0LOWQFbdmjiQ6yxchyZFBqpcT2BGDlFE7SEbyQoM5mtl1h0bZBvRgFg8KXoetd%2BRpUqwWlfmDOLu5RXS2D1kWSN2X9XdnFwAqrQVMXKM8BLWN3rujJRxCBy%2BeeXNcqqIxiFRC0JN4ILqukBEYh&X-Amz-Signature=eb9eb212f661df449d798ae25c2f9c89e6bd1dbbe38bbeffe54c0c61bfb77449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUEJV4RZ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR2iUb6S13KkCHY3j2sJp%2Bphaw%2Fko2FGMCh33nGp7gFAiAGvnetn4CPTGSobhavFkQPCKrMfQ%2BndD1r%2Bv65%2FecokiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6QMhHaN7JrDlLJq4KtwDScuCYf1K0naQUKGjjL6U2csTGqczItyExJ4Dr70Z4iOw%2FsfSyUcyiw756cELbco2r0x62VFQr6CXnXxFFJK7Z7Q2yjHLGosy3hHoQ4nHDw4FEI1E1%2FnrWKLiPeo63TXbiH%2BHhP5%2B%2FBzFLhG3rtwRLl99PkS6LVyEX2vALRzLcFAsb0ugpA%2F8cVDZVjIgp3oFJisqI6PjrjDaGnejfcKaPjM%2BJ2a8Ptmx8K7%2F1B7hb3xPwKHW2yZnU4TZdms%2FVYgqvPWkishZFw1gHHGlV4Aaj1Uazk%2FDiUOzKLA5FlFxm8jEHfUeutaKgxMAdEtIrzD6LFFNwD3rh6eFLKkDXRibo9AFRKp4wIRPRnin7srklDZXFCiJD%2Fj64psqhFuGQ1HIDYwbb0R32JEMLDzVfPk3x7flsDCoKYpmyZioqG5sT7RUx%2FYwV0BB2LXo0a9K5xj%2FF7txfMXxWFQA7pypY7PQoUNARKUnmop1NBhWxoFOuInf%2BBf8988HWMBPFk1lqT6frympOUNnXrrTylYxZRwewrub6nFjP4IF%2BD7%2BmKsg2nFNgYFA5DxMq%2Fg%2FbkiUd8fDQKBShD8mXNSzmPNjVHSqBlR4VbTKJ4i3CuScJBSH3lYsLalM2isMIC19Ztcw1d%2Bq0wY6pgGmRiX81ljgXBN5QjHwa9EwA7W71S5mldKkqpGKMaz2OTwU486Y%2F2p5CALt6cUG5riWzru8Jfho8C0LOWQFbdmjiQ6yxchyZFBqpcT2BGDlFE7SEbyQoM5mtl1h0bZBvRgFg8KXoetd%2BRpUqwWlfmDOLu5RXS2D1kWSN2X9XdnFwAqrQVMXKM8BLWN3rujJRxCBy%2BeeXNcqqIxiFRC0JN4ILqukBEYh&X-Amz-Signature=092ce390d6d6a7990016f90e55938d8e578b16bdc130ef57a21e4ddefb185774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


