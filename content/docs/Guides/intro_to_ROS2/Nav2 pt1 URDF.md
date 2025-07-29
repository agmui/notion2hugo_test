---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-28T21:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-28T21:43:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYWSW3NA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAJjLKbIvlE998hisnbbtIeBh4Twvvw82D7J5bh1Y%2BOFAiEAm%2Fj8lRfzBmx5FyVWPjRxJLCMrbuGDb%2Fu4Bb21d9L31EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5KfeDkK8I5LGRQMSrcA9dPsBkFhHn2%2FqZvUaHb89PmO65SQY8JVhuXup8jMcdqiajy0uiSGijtNDGUZcnidy31q30OB23%2B4kjoC3J%2BnP6d8RxDhfwpRiWjYTFEHukho%2FBkkEM9GXByrhAt%2Bpk8D7zNWRJ9Ezo%2B1qZVVE0nAbbPYIdO1EkJjefsNYUV%2BMqgZTY2wePKb8VMSF%2FZfAYmugyNQ%2BIrDLAhabdegsU%2BflZf9oEK3hW1gd7U%2B24%2FjSO%2FJHI%2FxVPL1QPOETtL6YwKS9lDl1EP66FiwZSsFB07%2FcPKa4XUQPnzwBQ59ktxBEbXUllvw1%2F%2BZro3EDthLPADZQphSNQtzX%2FJ7hV3RxP5EP8AU8z66lTcG75zl3Mf%2BS9VmNg9QGPgKKKZDyfRqO3D7biMeYm97tatBgEOSNxbApee84yxof3u5Yr%2BceZ6RpBoZwSjPbkbs3MaV9v6OKSguCN4ICiB9qLVjlcALxV%2BnTp48OojrOs21Hqx7tUWnoWj1uvaWuAzuxZ9XdDzwTItyi0CM98WD0KbgbKZarx8f6zMiOHeRpY6Kx5yIvavB%2BVL77EcoV8%2BfCEpDgqP0gin6trkkHylwSsx4jRt%2FeP%2FVZIel1K4huVLW%2BtL5epBZyneZnpYiAIXIhD6RCUrMKDNoMQGOqUBMyIHScTCyP3Ul1gxc4aqEludH0tZxbbmfeCUoj79RTS9XWWH%2BRP88e4NNzUeMZGDDZJj9gsg2eUrus58QrzeSELj8qN3RqdC8uWtWl2yi%2F8rczIWygvzGzYVfPspk1a%2FroM3wpygYt2CXuVxudsUICNm7oy7BEQ9tL25u2HLLNsrktY3UCx6UXk6OzEM93Kwe8gxlLAgnPbQuaNAwRrojo6RoBGU&X-Amz-Signature=bf081c9ab138e8abc973e0b107a813f781ad563a01e5ef55cb951c1ddf05eecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYWSW3NA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAJjLKbIvlE998hisnbbtIeBh4Twvvw82D7J5bh1Y%2BOFAiEAm%2Fj8lRfzBmx5FyVWPjRxJLCMrbuGDb%2Fu4Bb21d9L31EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5KfeDkK8I5LGRQMSrcA9dPsBkFhHn2%2FqZvUaHb89PmO65SQY8JVhuXup8jMcdqiajy0uiSGijtNDGUZcnidy31q30OB23%2B4kjoC3J%2BnP6d8RxDhfwpRiWjYTFEHukho%2FBkkEM9GXByrhAt%2Bpk8D7zNWRJ9Ezo%2B1qZVVE0nAbbPYIdO1EkJjefsNYUV%2BMqgZTY2wePKb8VMSF%2FZfAYmugyNQ%2BIrDLAhabdegsU%2BflZf9oEK3hW1gd7U%2B24%2FjSO%2FJHI%2FxVPL1QPOETtL6YwKS9lDl1EP66FiwZSsFB07%2FcPKa4XUQPnzwBQ59ktxBEbXUllvw1%2F%2BZro3EDthLPADZQphSNQtzX%2FJ7hV3RxP5EP8AU8z66lTcG75zl3Mf%2BS9VmNg9QGPgKKKZDyfRqO3D7biMeYm97tatBgEOSNxbApee84yxof3u5Yr%2BceZ6RpBoZwSjPbkbs3MaV9v6OKSguCN4ICiB9qLVjlcALxV%2BnTp48OojrOs21Hqx7tUWnoWj1uvaWuAzuxZ9XdDzwTItyi0CM98WD0KbgbKZarx8f6zMiOHeRpY6Kx5yIvavB%2BVL77EcoV8%2BfCEpDgqP0gin6trkkHylwSsx4jRt%2FeP%2FVZIel1K4huVLW%2BtL5epBZyneZnpYiAIXIhD6RCUrMKDNoMQGOqUBMyIHScTCyP3Ul1gxc4aqEludH0tZxbbmfeCUoj79RTS9XWWH%2BRP88e4NNzUeMZGDDZJj9gsg2eUrus58QrzeSELj8qN3RqdC8uWtWl2yi%2F8rczIWygvzGzYVfPspk1a%2FroM3wpygYt2CXuVxudsUICNm7oy7BEQ9tL25u2HLLNsrktY3UCx6UXk6OzEM93Kwe8gxlLAgnPbQuaNAwRrojo6RoBGU&X-Amz-Signature=781d8937ebc1e970b5e06cdfb25ea30ffb26558fbfd345dce827aec47f04e29e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYWSW3NA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAJjLKbIvlE998hisnbbtIeBh4Twvvw82D7J5bh1Y%2BOFAiEAm%2Fj8lRfzBmx5FyVWPjRxJLCMrbuGDb%2Fu4Bb21d9L31EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5KfeDkK8I5LGRQMSrcA9dPsBkFhHn2%2FqZvUaHb89PmO65SQY8JVhuXup8jMcdqiajy0uiSGijtNDGUZcnidy31q30OB23%2B4kjoC3J%2BnP6d8RxDhfwpRiWjYTFEHukho%2FBkkEM9GXByrhAt%2Bpk8D7zNWRJ9Ezo%2B1qZVVE0nAbbPYIdO1EkJjefsNYUV%2BMqgZTY2wePKb8VMSF%2FZfAYmugyNQ%2BIrDLAhabdegsU%2BflZf9oEK3hW1gd7U%2B24%2FjSO%2FJHI%2FxVPL1QPOETtL6YwKS9lDl1EP66FiwZSsFB07%2FcPKa4XUQPnzwBQ59ktxBEbXUllvw1%2F%2BZro3EDthLPADZQphSNQtzX%2FJ7hV3RxP5EP8AU8z66lTcG75zl3Mf%2BS9VmNg9QGPgKKKZDyfRqO3D7biMeYm97tatBgEOSNxbApee84yxof3u5Yr%2BceZ6RpBoZwSjPbkbs3MaV9v6OKSguCN4ICiB9qLVjlcALxV%2BnTp48OojrOs21Hqx7tUWnoWj1uvaWuAzuxZ9XdDzwTItyi0CM98WD0KbgbKZarx8f6zMiOHeRpY6Kx5yIvavB%2BVL77EcoV8%2BfCEpDgqP0gin6trkkHylwSsx4jRt%2FeP%2FVZIel1K4huVLW%2BtL5epBZyneZnpYiAIXIhD6RCUrMKDNoMQGOqUBMyIHScTCyP3Ul1gxc4aqEludH0tZxbbmfeCUoj79RTS9XWWH%2BRP88e4NNzUeMZGDDZJj9gsg2eUrus58QrzeSELj8qN3RqdC8uWtWl2yi%2F8rczIWygvzGzYVfPspk1a%2FroM3wpygYt2CXuVxudsUICNm7oy7BEQ9tL25u2HLLNsrktY3UCx6UXk6OzEM93Kwe8gxlLAgnPbQuaNAwRrojo6RoBGU&X-Amz-Signature=998e49b274f1c67a089d16f4f644d17b240c301e3209e983dc3638c28fa96bf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYWSW3NA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAJjLKbIvlE998hisnbbtIeBh4Twvvw82D7J5bh1Y%2BOFAiEAm%2Fj8lRfzBmx5FyVWPjRxJLCMrbuGDb%2Fu4Bb21d9L31EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5KfeDkK8I5LGRQMSrcA9dPsBkFhHn2%2FqZvUaHb89PmO65SQY8JVhuXup8jMcdqiajy0uiSGijtNDGUZcnidy31q30OB23%2B4kjoC3J%2BnP6d8RxDhfwpRiWjYTFEHukho%2FBkkEM9GXByrhAt%2Bpk8D7zNWRJ9Ezo%2B1qZVVE0nAbbPYIdO1EkJjefsNYUV%2BMqgZTY2wePKb8VMSF%2FZfAYmugyNQ%2BIrDLAhabdegsU%2BflZf9oEK3hW1gd7U%2B24%2FjSO%2FJHI%2FxVPL1QPOETtL6YwKS9lDl1EP66FiwZSsFB07%2FcPKa4XUQPnzwBQ59ktxBEbXUllvw1%2F%2BZro3EDthLPADZQphSNQtzX%2FJ7hV3RxP5EP8AU8z66lTcG75zl3Mf%2BS9VmNg9QGPgKKKZDyfRqO3D7biMeYm97tatBgEOSNxbApee84yxof3u5Yr%2BceZ6RpBoZwSjPbkbs3MaV9v6OKSguCN4ICiB9qLVjlcALxV%2BnTp48OojrOs21Hqx7tUWnoWj1uvaWuAzuxZ9XdDzwTItyi0CM98WD0KbgbKZarx8f6zMiOHeRpY6Kx5yIvavB%2BVL77EcoV8%2BfCEpDgqP0gin6trkkHylwSsx4jRt%2FeP%2FVZIel1K4huVLW%2BtL5epBZyneZnpYiAIXIhD6RCUrMKDNoMQGOqUBMyIHScTCyP3Ul1gxc4aqEludH0tZxbbmfeCUoj79RTS9XWWH%2BRP88e4NNzUeMZGDDZJj9gsg2eUrus58QrzeSELj8qN3RqdC8uWtWl2yi%2F8rczIWygvzGzYVfPspk1a%2FroM3wpygYt2CXuVxudsUICNm7oy7BEQ9tL25u2HLLNsrktY3UCx6UXk6OzEM93Kwe8gxlLAgnPbQuaNAwRrojo6RoBGU&X-Amz-Signature=4f94d0d839f1ed64f08c17a900695d4dd2a47140232e708174df2277857ec79c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYWSW3NA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAJjLKbIvlE998hisnbbtIeBh4Twvvw82D7J5bh1Y%2BOFAiEAm%2Fj8lRfzBmx5FyVWPjRxJLCMrbuGDb%2Fu4Bb21d9L31EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5KfeDkK8I5LGRQMSrcA9dPsBkFhHn2%2FqZvUaHb89PmO65SQY8JVhuXup8jMcdqiajy0uiSGijtNDGUZcnidy31q30OB23%2B4kjoC3J%2BnP6d8RxDhfwpRiWjYTFEHukho%2FBkkEM9GXByrhAt%2Bpk8D7zNWRJ9Ezo%2B1qZVVE0nAbbPYIdO1EkJjefsNYUV%2BMqgZTY2wePKb8VMSF%2FZfAYmugyNQ%2BIrDLAhabdegsU%2BflZf9oEK3hW1gd7U%2B24%2FjSO%2FJHI%2FxVPL1QPOETtL6YwKS9lDl1EP66FiwZSsFB07%2FcPKa4XUQPnzwBQ59ktxBEbXUllvw1%2F%2BZro3EDthLPADZQphSNQtzX%2FJ7hV3RxP5EP8AU8z66lTcG75zl3Mf%2BS9VmNg9QGPgKKKZDyfRqO3D7biMeYm97tatBgEOSNxbApee84yxof3u5Yr%2BceZ6RpBoZwSjPbkbs3MaV9v6OKSguCN4ICiB9qLVjlcALxV%2BnTp48OojrOs21Hqx7tUWnoWj1uvaWuAzuxZ9XdDzwTItyi0CM98WD0KbgbKZarx8f6zMiOHeRpY6Kx5yIvavB%2BVL77EcoV8%2BfCEpDgqP0gin6trkkHylwSsx4jRt%2FeP%2FVZIel1K4huVLW%2BtL5epBZyneZnpYiAIXIhD6RCUrMKDNoMQGOqUBMyIHScTCyP3Ul1gxc4aqEludH0tZxbbmfeCUoj79RTS9XWWH%2BRP88e4NNzUeMZGDDZJj9gsg2eUrus58QrzeSELj8qN3RqdC8uWtWl2yi%2F8rczIWygvzGzYVfPspk1a%2FroM3wpygYt2CXuVxudsUICNm7oy7BEQ9tL25u2HLLNsrktY3UCx6UXk6OzEM93Kwe8gxlLAgnPbQuaNAwRrojo6RoBGU&X-Amz-Signature=ed3652bb2d09081d3327a1aa63e026fac12b73926c85f6aeb52a79de1a732f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYWSW3NA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAJjLKbIvlE998hisnbbtIeBh4Twvvw82D7J5bh1Y%2BOFAiEAm%2Fj8lRfzBmx5FyVWPjRxJLCMrbuGDb%2Fu4Bb21d9L31EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5KfeDkK8I5LGRQMSrcA9dPsBkFhHn2%2FqZvUaHb89PmO65SQY8JVhuXup8jMcdqiajy0uiSGijtNDGUZcnidy31q30OB23%2B4kjoC3J%2BnP6d8RxDhfwpRiWjYTFEHukho%2FBkkEM9GXByrhAt%2Bpk8D7zNWRJ9Ezo%2B1qZVVE0nAbbPYIdO1EkJjefsNYUV%2BMqgZTY2wePKb8VMSF%2FZfAYmugyNQ%2BIrDLAhabdegsU%2BflZf9oEK3hW1gd7U%2B24%2FjSO%2FJHI%2FxVPL1QPOETtL6YwKS9lDl1EP66FiwZSsFB07%2FcPKa4XUQPnzwBQ59ktxBEbXUllvw1%2F%2BZro3EDthLPADZQphSNQtzX%2FJ7hV3RxP5EP8AU8z66lTcG75zl3Mf%2BS9VmNg9QGPgKKKZDyfRqO3D7biMeYm97tatBgEOSNxbApee84yxof3u5Yr%2BceZ6RpBoZwSjPbkbs3MaV9v6OKSguCN4ICiB9qLVjlcALxV%2BnTp48OojrOs21Hqx7tUWnoWj1uvaWuAzuxZ9XdDzwTItyi0CM98WD0KbgbKZarx8f6zMiOHeRpY6Kx5yIvavB%2BVL77EcoV8%2BfCEpDgqP0gin6trkkHylwSsx4jRt%2FeP%2FVZIel1K4huVLW%2BtL5epBZyneZnpYiAIXIhD6RCUrMKDNoMQGOqUBMyIHScTCyP3Ul1gxc4aqEludH0tZxbbmfeCUoj79RTS9XWWH%2BRP88e4NNzUeMZGDDZJj9gsg2eUrus58QrzeSELj8qN3RqdC8uWtWl2yi%2F8rczIWygvzGzYVfPspk1a%2FroM3wpygYt2CXuVxudsUICNm7oy7BEQ9tL25u2HLLNsrktY3UCx6UXk6OzEM93Kwe8gxlLAgnPbQuaNAwRrojo6RoBGU&X-Amz-Signature=3be593470f4cf2a3ddd1f1c702221bb945a67cb68799bb33d1a28bbe8f10cf3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYWSW3NA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAJjLKbIvlE998hisnbbtIeBh4Twvvw82D7J5bh1Y%2BOFAiEAm%2Fj8lRfzBmx5FyVWPjRxJLCMrbuGDb%2Fu4Bb21d9L31EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5KfeDkK8I5LGRQMSrcA9dPsBkFhHn2%2FqZvUaHb89PmO65SQY8JVhuXup8jMcdqiajy0uiSGijtNDGUZcnidy31q30OB23%2B4kjoC3J%2BnP6d8RxDhfwpRiWjYTFEHukho%2FBkkEM9GXByrhAt%2Bpk8D7zNWRJ9Ezo%2B1qZVVE0nAbbPYIdO1EkJjefsNYUV%2BMqgZTY2wePKb8VMSF%2FZfAYmugyNQ%2BIrDLAhabdegsU%2BflZf9oEK3hW1gd7U%2B24%2FjSO%2FJHI%2FxVPL1QPOETtL6YwKS9lDl1EP66FiwZSsFB07%2FcPKa4XUQPnzwBQ59ktxBEbXUllvw1%2F%2BZro3EDthLPADZQphSNQtzX%2FJ7hV3RxP5EP8AU8z66lTcG75zl3Mf%2BS9VmNg9QGPgKKKZDyfRqO3D7biMeYm97tatBgEOSNxbApee84yxof3u5Yr%2BceZ6RpBoZwSjPbkbs3MaV9v6OKSguCN4ICiB9qLVjlcALxV%2BnTp48OojrOs21Hqx7tUWnoWj1uvaWuAzuxZ9XdDzwTItyi0CM98WD0KbgbKZarx8f6zMiOHeRpY6Kx5yIvavB%2BVL77EcoV8%2BfCEpDgqP0gin6trkkHylwSsx4jRt%2FeP%2FVZIel1K4huVLW%2BtL5epBZyneZnpYiAIXIhD6RCUrMKDNoMQGOqUBMyIHScTCyP3Ul1gxc4aqEludH0tZxbbmfeCUoj79RTS9XWWH%2BRP88e4NNzUeMZGDDZJj9gsg2eUrus58QrzeSELj8qN3RqdC8uWtWl2yi%2F8rczIWygvzGzYVfPspk1a%2FroM3wpygYt2CXuVxudsUICNm7oy7BEQ9tL25u2HLLNsrktY3UCx6UXk6OzEM93Kwe8gxlLAgnPbQuaNAwRrojo6RoBGU&X-Amz-Signature=7c0fb9cebf1149251fc0b5bd986281be805b2425329830386c71c75f135035a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYWSW3NA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAJjLKbIvlE998hisnbbtIeBh4Twvvw82D7J5bh1Y%2BOFAiEAm%2Fj8lRfzBmx5FyVWPjRxJLCMrbuGDb%2Fu4Bb21d9L31EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5KfeDkK8I5LGRQMSrcA9dPsBkFhHn2%2FqZvUaHb89PmO65SQY8JVhuXup8jMcdqiajy0uiSGijtNDGUZcnidy31q30OB23%2B4kjoC3J%2BnP6d8RxDhfwpRiWjYTFEHukho%2FBkkEM9GXByrhAt%2Bpk8D7zNWRJ9Ezo%2B1qZVVE0nAbbPYIdO1EkJjefsNYUV%2BMqgZTY2wePKb8VMSF%2FZfAYmugyNQ%2BIrDLAhabdegsU%2BflZf9oEK3hW1gd7U%2B24%2FjSO%2FJHI%2FxVPL1QPOETtL6YwKS9lDl1EP66FiwZSsFB07%2FcPKa4XUQPnzwBQ59ktxBEbXUllvw1%2F%2BZro3EDthLPADZQphSNQtzX%2FJ7hV3RxP5EP8AU8z66lTcG75zl3Mf%2BS9VmNg9QGPgKKKZDyfRqO3D7biMeYm97tatBgEOSNxbApee84yxof3u5Yr%2BceZ6RpBoZwSjPbkbs3MaV9v6OKSguCN4ICiB9qLVjlcALxV%2BnTp48OojrOs21Hqx7tUWnoWj1uvaWuAzuxZ9XdDzwTItyi0CM98WD0KbgbKZarx8f6zMiOHeRpY6Kx5yIvavB%2BVL77EcoV8%2BfCEpDgqP0gin6trkkHylwSsx4jRt%2FeP%2FVZIel1K4huVLW%2BtL5epBZyneZnpYiAIXIhD6RCUrMKDNoMQGOqUBMyIHScTCyP3Ul1gxc4aqEludH0tZxbbmfeCUoj79RTS9XWWH%2BRP88e4NNzUeMZGDDZJj9gsg2eUrus58QrzeSELj8qN3RqdC8uWtWl2yi%2F8rczIWygvzGzYVfPspk1a%2FroM3wpygYt2CXuVxudsUICNm7oy7BEQ9tL25u2HLLNsrktY3UCx6UXk6OzEM93Kwe8gxlLAgnPbQuaNAwRrojo6RoBGU&X-Amz-Signature=a54279088768a82209a4c3dc5f9dabb93609ec87a3c87263956421c6160eef1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYWSW3NA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAJjLKbIvlE998hisnbbtIeBh4Twvvw82D7J5bh1Y%2BOFAiEAm%2Fj8lRfzBmx5FyVWPjRxJLCMrbuGDb%2Fu4Bb21d9L31EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5KfeDkK8I5LGRQMSrcA9dPsBkFhHn2%2FqZvUaHb89PmO65SQY8JVhuXup8jMcdqiajy0uiSGijtNDGUZcnidy31q30OB23%2B4kjoC3J%2BnP6d8RxDhfwpRiWjYTFEHukho%2FBkkEM9GXByrhAt%2Bpk8D7zNWRJ9Ezo%2B1qZVVE0nAbbPYIdO1EkJjefsNYUV%2BMqgZTY2wePKb8VMSF%2FZfAYmugyNQ%2BIrDLAhabdegsU%2BflZf9oEK3hW1gd7U%2B24%2FjSO%2FJHI%2FxVPL1QPOETtL6YwKS9lDl1EP66FiwZSsFB07%2FcPKa4XUQPnzwBQ59ktxBEbXUllvw1%2F%2BZro3EDthLPADZQphSNQtzX%2FJ7hV3RxP5EP8AU8z66lTcG75zl3Mf%2BS9VmNg9QGPgKKKZDyfRqO3D7biMeYm97tatBgEOSNxbApee84yxof3u5Yr%2BceZ6RpBoZwSjPbkbs3MaV9v6OKSguCN4ICiB9qLVjlcALxV%2BnTp48OojrOs21Hqx7tUWnoWj1uvaWuAzuxZ9XdDzwTItyi0CM98WD0KbgbKZarx8f6zMiOHeRpY6Kx5yIvavB%2BVL77EcoV8%2BfCEpDgqP0gin6trkkHylwSsx4jRt%2FeP%2FVZIel1K4huVLW%2BtL5epBZyneZnpYiAIXIhD6RCUrMKDNoMQGOqUBMyIHScTCyP3Ul1gxc4aqEludH0tZxbbmfeCUoj79RTS9XWWH%2BRP88e4NNzUeMZGDDZJj9gsg2eUrus58QrzeSELj8qN3RqdC8uWtWl2yi%2F8rczIWygvzGzYVfPspk1a%2FroM3wpygYt2CXuVxudsUICNm7oy7BEQ9tL25u2HLLNsrktY3UCx6UXk6OzEM93Kwe8gxlLAgnPbQuaNAwRrojo6RoBGU&X-Amz-Signature=78bc112ad25ba41c7c1401a81984eba6d9e471f9b38503db66f6f1245261e7da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYWSW3NA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAJjLKbIvlE998hisnbbtIeBh4Twvvw82D7J5bh1Y%2BOFAiEAm%2Fj8lRfzBmx5FyVWPjRxJLCMrbuGDb%2Fu4Bb21d9L31EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5KfeDkK8I5LGRQMSrcA9dPsBkFhHn2%2FqZvUaHb89PmO65SQY8JVhuXup8jMcdqiajy0uiSGijtNDGUZcnidy31q30OB23%2B4kjoC3J%2BnP6d8RxDhfwpRiWjYTFEHukho%2FBkkEM9GXByrhAt%2Bpk8D7zNWRJ9Ezo%2B1qZVVE0nAbbPYIdO1EkJjefsNYUV%2BMqgZTY2wePKb8VMSF%2FZfAYmugyNQ%2BIrDLAhabdegsU%2BflZf9oEK3hW1gd7U%2B24%2FjSO%2FJHI%2FxVPL1QPOETtL6YwKS9lDl1EP66FiwZSsFB07%2FcPKa4XUQPnzwBQ59ktxBEbXUllvw1%2F%2BZro3EDthLPADZQphSNQtzX%2FJ7hV3RxP5EP8AU8z66lTcG75zl3Mf%2BS9VmNg9QGPgKKKZDyfRqO3D7biMeYm97tatBgEOSNxbApee84yxof3u5Yr%2BceZ6RpBoZwSjPbkbs3MaV9v6OKSguCN4ICiB9qLVjlcALxV%2BnTp48OojrOs21Hqx7tUWnoWj1uvaWuAzuxZ9XdDzwTItyi0CM98WD0KbgbKZarx8f6zMiOHeRpY6Kx5yIvavB%2BVL77EcoV8%2BfCEpDgqP0gin6trkkHylwSsx4jRt%2FeP%2FVZIel1K4huVLW%2BtL5epBZyneZnpYiAIXIhD6RCUrMKDNoMQGOqUBMyIHScTCyP3Ul1gxc4aqEludH0tZxbbmfeCUoj79RTS9XWWH%2BRP88e4NNzUeMZGDDZJj9gsg2eUrus58QrzeSELj8qN3RqdC8uWtWl2yi%2F8rczIWygvzGzYVfPspk1a%2FroM3wpygYt2CXuVxudsUICNm7oy7BEQ9tL25u2HLLNsrktY3UCx6UXk6OzEM93Kwe8gxlLAgnPbQuaNAwRrojo6RoBGU&X-Amz-Signature=3bbe8cddd876762d878765255546e695b96a9c9ff63cd262043ed475aa8194ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYWSW3NA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAJjLKbIvlE998hisnbbtIeBh4Twvvw82D7J5bh1Y%2BOFAiEAm%2Fj8lRfzBmx5FyVWPjRxJLCMrbuGDb%2Fu4Bb21d9L31EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5KfeDkK8I5LGRQMSrcA9dPsBkFhHn2%2FqZvUaHb89PmO65SQY8JVhuXup8jMcdqiajy0uiSGijtNDGUZcnidy31q30OB23%2B4kjoC3J%2BnP6d8RxDhfwpRiWjYTFEHukho%2FBkkEM9GXByrhAt%2Bpk8D7zNWRJ9Ezo%2B1qZVVE0nAbbPYIdO1EkJjefsNYUV%2BMqgZTY2wePKb8VMSF%2FZfAYmugyNQ%2BIrDLAhabdegsU%2BflZf9oEK3hW1gd7U%2B24%2FjSO%2FJHI%2FxVPL1QPOETtL6YwKS9lDl1EP66FiwZSsFB07%2FcPKa4XUQPnzwBQ59ktxBEbXUllvw1%2F%2BZro3EDthLPADZQphSNQtzX%2FJ7hV3RxP5EP8AU8z66lTcG75zl3Mf%2BS9VmNg9QGPgKKKZDyfRqO3D7biMeYm97tatBgEOSNxbApee84yxof3u5Yr%2BceZ6RpBoZwSjPbkbs3MaV9v6OKSguCN4ICiB9qLVjlcALxV%2BnTp48OojrOs21Hqx7tUWnoWj1uvaWuAzuxZ9XdDzwTItyi0CM98WD0KbgbKZarx8f6zMiOHeRpY6Kx5yIvavB%2BVL77EcoV8%2BfCEpDgqP0gin6trkkHylwSsx4jRt%2FeP%2FVZIel1K4huVLW%2BtL5epBZyneZnpYiAIXIhD6RCUrMKDNoMQGOqUBMyIHScTCyP3Ul1gxc4aqEludH0tZxbbmfeCUoj79RTS9XWWH%2BRP88e4NNzUeMZGDDZJj9gsg2eUrus58QrzeSELj8qN3RqdC8uWtWl2yi%2F8rczIWygvzGzYVfPspk1a%2FroM3wpygYt2CXuVxudsUICNm7oy7BEQ9tL25u2HLLNsrktY3UCx6UXk6OzEM93Kwe8gxlLAgnPbQuaNAwRrojo6RoBGU&X-Amz-Signature=c84c16cf9457639c4e71b2807504bd82e4f378cc56ca38e4fcb4457e23e96ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYWSW3NA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAJjLKbIvlE998hisnbbtIeBh4Twvvw82D7J5bh1Y%2BOFAiEAm%2Fj8lRfzBmx5FyVWPjRxJLCMrbuGDb%2Fu4Bb21d9L31EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5KfeDkK8I5LGRQMSrcA9dPsBkFhHn2%2FqZvUaHb89PmO65SQY8JVhuXup8jMcdqiajy0uiSGijtNDGUZcnidy31q30OB23%2B4kjoC3J%2BnP6d8RxDhfwpRiWjYTFEHukho%2FBkkEM9GXByrhAt%2Bpk8D7zNWRJ9Ezo%2B1qZVVE0nAbbPYIdO1EkJjefsNYUV%2BMqgZTY2wePKb8VMSF%2FZfAYmugyNQ%2BIrDLAhabdegsU%2BflZf9oEK3hW1gd7U%2B24%2FjSO%2FJHI%2FxVPL1QPOETtL6YwKS9lDl1EP66FiwZSsFB07%2FcPKa4XUQPnzwBQ59ktxBEbXUllvw1%2F%2BZro3EDthLPADZQphSNQtzX%2FJ7hV3RxP5EP8AU8z66lTcG75zl3Mf%2BS9VmNg9QGPgKKKZDyfRqO3D7biMeYm97tatBgEOSNxbApee84yxof3u5Yr%2BceZ6RpBoZwSjPbkbs3MaV9v6OKSguCN4ICiB9qLVjlcALxV%2BnTp48OojrOs21Hqx7tUWnoWj1uvaWuAzuxZ9XdDzwTItyi0CM98WD0KbgbKZarx8f6zMiOHeRpY6Kx5yIvavB%2BVL77EcoV8%2BfCEpDgqP0gin6trkkHylwSsx4jRt%2FeP%2FVZIel1K4huVLW%2BtL5epBZyneZnpYiAIXIhD6RCUrMKDNoMQGOqUBMyIHScTCyP3Ul1gxc4aqEludH0tZxbbmfeCUoj79RTS9XWWH%2BRP88e4NNzUeMZGDDZJj9gsg2eUrus58QrzeSELj8qN3RqdC8uWtWl2yi%2F8rczIWygvzGzYVfPspk1a%2FroM3wpygYt2CXuVxudsUICNm7oy7BEQ9tL25u2HLLNsrktY3UCx6UXk6OzEM93Kwe8gxlLAgnPbQuaNAwRrojo6RoBGU&X-Amz-Signature=a0adf811df22edebc8c4d9b6dedf4fe5e621a1454f5f17907edee54c9c5e4d2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYWSW3NA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAJjLKbIvlE998hisnbbtIeBh4Twvvw82D7J5bh1Y%2BOFAiEAm%2Fj8lRfzBmx5FyVWPjRxJLCMrbuGDb%2Fu4Bb21d9L31EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5KfeDkK8I5LGRQMSrcA9dPsBkFhHn2%2FqZvUaHb89PmO65SQY8JVhuXup8jMcdqiajy0uiSGijtNDGUZcnidy31q30OB23%2B4kjoC3J%2BnP6d8RxDhfwpRiWjYTFEHukho%2FBkkEM9GXByrhAt%2Bpk8D7zNWRJ9Ezo%2B1qZVVE0nAbbPYIdO1EkJjefsNYUV%2BMqgZTY2wePKb8VMSF%2FZfAYmugyNQ%2BIrDLAhabdegsU%2BflZf9oEK3hW1gd7U%2B24%2FjSO%2FJHI%2FxVPL1QPOETtL6YwKS9lDl1EP66FiwZSsFB07%2FcPKa4XUQPnzwBQ59ktxBEbXUllvw1%2F%2BZro3EDthLPADZQphSNQtzX%2FJ7hV3RxP5EP8AU8z66lTcG75zl3Mf%2BS9VmNg9QGPgKKKZDyfRqO3D7biMeYm97tatBgEOSNxbApee84yxof3u5Yr%2BceZ6RpBoZwSjPbkbs3MaV9v6OKSguCN4ICiB9qLVjlcALxV%2BnTp48OojrOs21Hqx7tUWnoWj1uvaWuAzuxZ9XdDzwTItyi0CM98WD0KbgbKZarx8f6zMiOHeRpY6Kx5yIvavB%2BVL77EcoV8%2BfCEpDgqP0gin6trkkHylwSsx4jRt%2FeP%2FVZIel1K4huVLW%2BtL5epBZyneZnpYiAIXIhD6RCUrMKDNoMQGOqUBMyIHScTCyP3Ul1gxc4aqEludH0tZxbbmfeCUoj79RTS9XWWH%2BRP88e4NNzUeMZGDDZJj9gsg2eUrus58QrzeSELj8qN3RqdC8uWtWl2yi%2F8rczIWygvzGzYVfPspk1a%2FroM3wpygYt2CXuVxudsUICNm7oy7BEQ9tL25u2HLLNsrktY3UCx6UXk6OzEM93Kwe8gxlLAgnPbQuaNAwRrojo6RoBGU&X-Amz-Signature=c221197ab95a72bd4b442d60ce8e981489e99be519ca87a1386d667e0f71ac8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYWSW3NA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAJjLKbIvlE998hisnbbtIeBh4Twvvw82D7J5bh1Y%2BOFAiEAm%2Fj8lRfzBmx5FyVWPjRxJLCMrbuGDb%2Fu4Bb21d9L31EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5KfeDkK8I5LGRQMSrcA9dPsBkFhHn2%2FqZvUaHb89PmO65SQY8JVhuXup8jMcdqiajy0uiSGijtNDGUZcnidy31q30OB23%2B4kjoC3J%2BnP6d8RxDhfwpRiWjYTFEHukho%2FBkkEM9GXByrhAt%2Bpk8D7zNWRJ9Ezo%2B1qZVVE0nAbbPYIdO1EkJjefsNYUV%2BMqgZTY2wePKb8VMSF%2FZfAYmugyNQ%2BIrDLAhabdegsU%2BflZf9oEK3hW1gd7U%2B24%2FjSO%2FJHI%2FxVPL1QPOETtL6YwKS9lDl1EP66FiwZSsFB07%2FcPKa4XUQPnzwBQ59ktxBEbXUllvw1%2F%2BZro3EDthLPADZQphSNQtzX%2FJ7hV3RxP5EP8AU8z66lTcG75zl3Mf%2BS9VmNg9QGPgKKKZDyfRqO3D7biMeYm97tatBgEOSNxbApee84yxof3u5Yr%2BceZ6RpBoZwSjPbkbs3MaV9v6OKSguCN4ICiB9qLVjlcALxV%2BnTp48OojrOs21Hqx7tUWnoWj1uvaWuAzuxZ9XdDzwTItyi0CM98WD0KbgbKZarx8f6zMiOHeRpY6Kx5yIvavB%2BVL77EcoV8%2BfCEpDgqP0gin6trkkHylwSsx4jRt%2FeP%2FVZIel1K4huVLW%2BtL5epBZyneZnpYiAIXIhD6RCUrMKDNoMQGOqUBMyIHScTCyP3Ul1gxc4aqEludH0tZxbbmfeCUoj79RTS9XWWH%2BRP88e4NNzUeMZGDDZJj9gsg2eUrus58QrzeSELj8qN3RqdC8uWtWl2yi%2F8rczIWygvzGzYVfPspk1a%2FroM3wpygYt2CXuVxudsUICNm7oy7BEQ9tL25u2HLLNsrktY3UCx6UXk6OzEM93Kwe8gxlLAgnPbQuaNAwRrojo6RoBGU&X-Amz-Signature=670cb93bc73adecc36682bd2c4bb7c26f44657bdc4dfed926f8100161625ad4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3VIGNRV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCID98Zbu1vi7k5kZteOWYKpX9o4UOapqyWwMaSuvXcDsRAiEAhjkigIsnsha12gdEFmqtFQs9UW0RfH6DpKJo8fdttTQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZI3UdvMM4OSs4k%2BCrcA5EkRGj8D4l45gGT7ULJutdKCNL7dg%2FXHgViETIhdcFE2Uaq%2Bou7ceGZc7yzMw1WQXZwXTFGg4UAaERxKXBw5nq0sByY7hqe1R9MqGfSnVUU2uVySMXOz57eVFT2jJDdEXnNEJsFtd%2BAUuISmyB2eOPrjgAHWC8bwx7cHeo0X%2B6rf0EveOWThmldMz7ozPEd6MeLulIYDnzRPCeM%2FtHMeBLXtXHAd2dsmR9%2FCy7oLCVxJg97puKN9f6KJ3rv9j%2FfwytbWEe%2FkRxLtyCeIse6JYYlvTRoytet7%2FWYWp3FgyECw9fK5HeLEbRFnBDvkd%2B1Jtu6N0FVbUKhHOHAi0xeIPX90x5oErEn7lPq1%2BhuSzkn7WcZpxgULYmbXyTDBseWSXJZ8xeA5XUKsrtGEZzCRomXxub81qDViFkv7y5bfQJL1OD6cEQhapKX75WPy%2Fth9R4%2FN0bV3ckoKgWEFr30kAjyVdd2AyG4RSwd%2BTJYtIb8tJPfPBGpgR9wDGJ5%2FC9P1hO3W2kgO4D%2FO%2BOXq%2BF4LQ%2Bl8BvQX4gChtKp0JDhb7fGjKpkJr2TrY0ntMWRGBTa7FX0f8dJbFzprU4Ro0PoJiJiJuRckeWIZH4D9LEsv%2B6ny6HRS6brsLGhQqbDMJDNoMQGOqUBJsEIFtnLLEWK52hysjtwlHYwQLnBOv7qnRnRcSD3A8MCZwFMe%2F38D8kU0yw0z3yD%2FqB53C4JehezKC%2BcQTfXwiLueVU1jYXaj5mkUtU0Xk43rhJRWZ7aL%2FrwLLl0Tvb%2FxnFUefj1%2Ble1RprFVdEqci5cfbU6apwBrgh4xJ8dTSBegemsVD2%2BT7vjDjqdWzxJydcEcQ%2B7n%2BGDLEB6JzIrL0ILWv4K&X-Amz-Signature=10d936459d4057c58cf5293b44cbf306a1f0b5a4b63516acf65c49b254859831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3VIGNRV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCID98Zbu1vi7k5kZteOWYKpX9o4UOapqyWwMaSuvXcDsRAiEAhjkigIsnsha12gdEFmqtFQs9UW0RfH6DpKJo8fdttTQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZI3UdvMM4OSs4k%2BCrcA5EkRGj8D4l45gGT7ULJutdKCNL7dg%2FXHgViETIhdcFE2Uaq%2Bou7ceGZc7yzMw1WQXZwXTFGg4UAaERxKXBw5nq0sByY7hqe1R9MqGfSnVUU2uVySMXOz57eVFT2jJDdEXnNEJsFtd%2BAUuISmyB2eOPrjgAHWC8bwx7cHeo0X%2B6rf0EveOWThmldMz7ozPEd6MeLulIYDnzRPCeM%2FtHMeBLXtXHAd2dsmR9%2FCy7oLCVxJg97puKN9f6KJ3rv9j%2FfwytbWEe%2FkRxLtyCeIse6JYYlvTRoytet7%2FWYWp3FgyECw9fK5HeLEbRFnBDvkd%2B1Jtu6N0FVbUKhHOHAi0xeIPX90x5oErEn7lPq1%2BhuSzkn7WcZpxgULYmbXyTDBseWSXJZ8xeA5XUKsrtGEZzCRomXxub81qDViFkv7y5bfQJL1OD6cEQhapKX75WPy%2Fth9R4%2FN0bV3ckoKgWEFr30kAjyVdd2AyG4RSwd%2BTJYtIb8tJPfPBGpgR9wDGJ5%2FC9P1hO3W2kgO4D%2FO%2BOXq%2BF4LQ%2Bl8BvQX4gChtKp0JDhb7fGjKpkJr2TrY0ntMWRGBTa7FX0f8dJbFzprU4Ro0PoJiJiJuRckeWIZH4D9LEsv%2B6ny6HRS6brsLGhQqbDMJDNoMQGOqUBJsEIFtnLLEWK52hysjtwlHYwQLnBOv7qnRnRcSD3A8MCZwFMe%2F38D8kU0yw0z3yD%2FqB53C4JehezKC%2BcQTfXwiLueVU1jYXaj5mkUtU0Xk43rhJRWZ7aL%2FrwLLl0Tvb%2FxnFUefj1%2Ble1RprFVdEqci5cfbU6apwBrgh4xJ8dTSBegemsVD2%2BT7vjDjqdWzxJydcEcQ%2B7n%2BGDLEB6JzIrL0ILWv4K&X-Amz-Signature=6379e8d50f748b8473d425d0ff60c846108b2e8479b33207289a39181f24501b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
      <summary>What is in this launch file?</summary>
      TODO:
  </details>

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

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3VIGNRV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCID98Zbu1vi7k5kZteOWYKpX9o4UOapqyWwMaSuvXcDsRAiEAhjkigIsnsha12gdEFmqtFQs9UW0RfH6DpKJo8fdttTQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZI3UdvMM4OSs4k%2BCrcA5EkRGj8D4l45gGT7ULJutdKCNL7dg%2FXHgViETIhdcFE2Uaq%2Bou7ceGZc7yzMw1WQXZwXTFGg4UAaERxKXBw5nq0sByY7hqe1R9MqGfSnVUU2uVySMXOz57eVFT2jJDdEXnNEJsFtd%2BAUuISmyB2eOPrjgAHWC8bwx7cHeo0X%2B6rf0EveOWThmldMz7ozPEd6MeLulIYDnzRPCeM%2FtHMeBLXtXHAd2dsmR9%2FCy7oLCVxJg97puKN9f6KJ3rv9j%2FfwytbWEe%2FkRxLtyCeIse6JYYlvTRoytet7%2FWYWp3FgyECw9fK5HeLEbRFnBDvkd%2B1Jtu6N0FVbUKhHOHAi0xeIPX90x5oErEn7lPq1%2BhuSzkn7WcZpxgULYmbXyTDBseWSXJZ8xeA5XUKsrtGEZzCRomXxub81qDViFkv7y5bfQJL1OD6cEQhapKX75WPy%2Fth9R4%2FN0bV3ckoKgWEFr30kAjyVdd2AyG4RSwd%2BTJYtIb8tJPfPBGpgR9wDGJ5%2FC9P1hO3W2kgO4D%2FO%2BOXq%2BF4LQ%2Bl8BvQX4gChtKp0JDhb7fGjKpkJr2TrY0ntMWRGBTa7FX0f8dJbFzprU4Ro0PoJiJiJuRckeWIZH4D9LEsv%2B6ny6HRS6brsLGhQqbDMJDNoMQGOqUBJsEIFtnLLEWK52hysjtwlHYwQLnBOv7qnRnRcSD3A8MCZwFMe%2F38D8kU0yw0z3yD%2FqB53C4JehezKC%2BcQTfXwiLueVU1jYXaj5mkUtU0Xk43rhJRWZ7aL%2FrwLLl0Tvb%2FxnFUefj1%2Ble1RprFVdEqci5cfbU6apwBrgh4xJ8dTSBegemsVD2%2BT7vjDjqdWzxJydcEcQ%2B7n%2BGDLEB6JzIrL0ILWv4K&X-Amz-Signature=07e2461fb53802afcad7ee4cbba798a5018ec558708aa68c5de3f6b420395413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3VIGNRV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCID98Zbu1vi7k5kZteOWYKpX9o4UOapqyWwMaSuvXcDsRAiEAhjkigIsnsha12gdEFmqtFQs9UW0RfH6DpKJo8fdttTQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZI3UdvMM4OSs4k%2BCrcA5EkRGj8D4l45gGT7ULJutdKCNL7dg%2FXHgViETIhdcFE2Uaq%2Bou7ceGZc7yzMw1WQXZwXTFGg4UAaERxKXBw5nq0sByY7hqe1R9MqGfSnVUU2uVySMXOz57eVFT2jJDdEXnNEJsFtd%2BAUuISmyB2eOPrjgAHWC8bwx7cHeo0X%2B6rf0EveOWThmldMz7ozPEd6MeLulIYDnzRPCeM%2FtHMeBLXtXHAd2dsmR9%2FCy7oLCVxJg97puKN9f6KJ3rv9j%2FfwytbWEe%2FkRxLtyCeIse6JYYlvTRoytet7%2FWYWp3FgyECw9fK5HeLEbRFnBDvkd%2B1Jtu6N0FVbUKhHOHAi0xeIPX90x5oErEn7lPq1%2BhuSzkn7WcZpxgULYmbXyTDBseWSXJZ8xeA5XUKsrtGEZzCRomXxub81qDViFkv7y5bfQJL1OD6cEQhapKX75WPy%2Fth9R4%2FN0bV3ckoKgWEFr30kAjyVdd2AyG4RSwd%2BTJYtIb8tJPfPBGpgR9wDGJ5%2FC9P1hO3W2kgO4D%2FO%2BOXq%2BF4LQ%2Bl8BvQX4gChtKp0JDhb7fGjKpkJr2TrY0ntMWRGBTa7FX0f8dJbFzprU4Ro0PoJiJiJuRckeWIZH4D9LEsv%2B6ny6HRS6brsLGhQqbDMJDNoMQGOqUBJsEIFtnLLEWK52hysjtwlHYwQLnBOv7qnRnRcSD3A8MCZwFMe%2F38D8kU0yw0z3yD%2FqB53C4JehezKC%2BcQTfXwiLueVU1jYXaj5mkUtU0Xk43rhJRWZ7aL%2FrwLLl0Tvb%2FxnFUefj1%2Ble1RprFVdEqci5cfbU6apwBrgh4xJ8dTSBegemsVD2%2BT7vjDjqdWzxJydcEcQ%2B7n%2BGDLEB6JzIrL0ILWv4K&X-Amz-Signature=17a542d3cd2721abb35cd167217eb8f3a407a119c589b8a03d6348a2272178fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3VIGNRV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCID98Zbu1vi7k5kZteOWYKpX9o4UOapqyWwMaSuvXcDsRAiEAhjkigIsnsha12gdEFmqtFQs9UW0RfH6DpKJo8fdttTQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZI3UdvMM4OSs4k%2BCrcA5EkRGj8D4l45gGT7ULJutdKCNL7dg%2FXHgViETIhdcFE2Uaq%2Bou7ceGZc7yzMw1WQXZwXTFGg4UAaERxKXBw5nq0sByY7hqe1R9MqGfSnVUU2uVySMXOz57eVFT2jJDdEXnNEJsFtd%2BAUuISmyB2eOPrjgAHWC8bwx7cHeo0X%2B6rf0EveOWThmldMz7ozPEd6MeLulIYDnzRPCeM%2FtHMeBLXtXHAd2dsmR9%2FCy7oLCVxJg97puKN9f6KJ3rv9j%2FfwytbWEe%2FkRxLtyCeIse6JYYlvTRoytet7%2FWYWp3FgyECw9fK5HeLEbRFnBDvkd%2B1Jtu6N0FVbUKhHOHAi0xeIPX90x5oErEn7lPq1%2BhuSzkn7WcZpxgULYmbXyTDBseWSXJZ8xeA5XUKsrtGEZzCRomXxub81qDViFkv7y5bfQJL1OD6cEQhapKX75WPy%2Fth9R4%2FN0bV3ckoKgWEFr30kAjyVdd2AyG4RSwd%2BTJYtIb8tJPfPBGpgR9wDGJ5%2FC9P1hO3W2kgO4D%2FO%2BOXq%2BF4LQ%2Bl8BvQX4gChtKp0JDhb7fGjKpkJr2TrY0ntMWRGBTa7FX0f8dJbFzprU4Ro0PoJiJiJuRckeWIZH4D9LEsv%2B6ny6HRS6brsLGhQqbDMJDNoMQGOqUBJsEIFtnLLEWK52hysjtwlHYwQLnBOv7qnRnRcSD3A8MCZwFMe%2F38D8kU0yw0z3yD%2FqB53C4JehezKC%2BcQTfXwiLueVU1jYXaj5mkUtU0Xk43rhJRWZ7aL%2FrwLLl0Tvb%2FxnFUefj1%2Ble1RprFVdEqci5cfbU6apwBrgh4xJ8dTSBegemsVD2%2BT7vjDjqdWzxJydcEcQ%2B7n%2BGDLEB6JzIrL0ILWv4K&X-Amz-Signature=f5c6d8f511b45addef0b079e50643389c61209897c7caaf8bb7911a50f60c7ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3VIGNRV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCID98Zbu1vi7k5kZteOWYKpX9o4UOapqyWwMaSuvXcDsRAiEAhjkigIsnsha12gdEFmqtFQs9UW0RfH6DpKJo8fdttTQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZI3UdvMM4OSs4k%2BCrcA5EkRGj8D4l45gGT7ULJutdKCNL7dg%2FXHgViETIhdcFE2Uaq%2Bou7ceGZc7yzMw1WQXZwXTFGg4UAaERxKXBw5nq0sByY7hqe1R9MqGfSnVUU2uVySMXOz57eVFT2jJDdEXnNEJsFtd%2BAUuISmyB2eOPrjgAHWC8bwx7cHeo0X%2B6rf0EveOWThmldMz7ozPEd6MeLulIYDnzRPCeM%2FtHMeBLXtXHAd2dsmR9%2FCy7oLCVxJg97puKN9f6KJ3rv9j%2FfwytbWEe%2FkRxLtyCeIse6JYYlvTRoytet7%2FWYWp3FgyECw9fK5HeLEbRFnBDvkd%2B1Jtu6N0FVbUKhHOHAi0xeIPX90x5oErEn7lPq1%2BhuSzkn7WcZpxgULYmbXyTDBseWSXJZ8xeA5XUKsrtGEZzCRomXxub81qDViFkv7y5bfQJL1OD6cEQhapKX75WPy%2Fth9R4%2FN0bV3ckoKgWEFr30kAjyVdd2AyG4RSwd%2BTJYtIb8tJPfPBGpgR9wDGJ5%2FC9P1hO3W2kgO4D%2FO%2BOXq%2BF4LQ%2Bl8BvQX4gChtKp0JDhb7fGjKpkJr2TrY0ntMWRGBTa7FX0f8dJbFzprU4Ro0PoJiJiJuRckeWIZH4D9LEsv%2B6ny6HRS6brsLGhQqbDMJDNoMQGOqUBJsEIFtnLLEWK52hysjtwlHYwQLnBOv7qnRnRcSD3A8MCZwFMe%2F38D8kU0yw0z3yD%2FqB53C4JehezKC%2BcQTfXwiLueVU1jYXaj5mkUtU0Xk43rhJRWZ7aL%2FrwLLl0Tvb%2FxnFUefj1%2Ble1RprFVdEqci5cfbU6apwBrgh4xJ8dTSBegemsVD2%2BT7vjDjqdWzxJydcEcQ%2B7n%2BGDLEB6JzIrL0ILWv4K&X-Amz-Signature=42b46ceea0d4f0a9240ee77eb09b6604e08959f4f7140ca52a83c8a318b9f354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
