---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T23:33:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T23:33:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF77V6GF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC%2B72zoHAAcD5O3SJhv9S19XNxA5gC30NkRKojhreGNTQIgMtS7ugP0KythNLkQp%2FFMe6fBMirdQ35ghkx5NN%2F16xUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBHWHQJ78k4cIG7NSyrcA%2BEunOv7HPujAam%2FxzNDs6iPIr7t5nabfdVXGooMp9RHdGGV4xfKtvNt6RUwrMai7WF8i6zdiD8UxVwqBiAyZa2BVufFTFqL8soebOHZloEQLTnl3FOMkAOJyDpy%2BVwKMXTwAEB1DpBQwwWVVSRUaKVkRh63VZgFd0q8%2FADsxjucLuOcw3f9tQEUDvWmuc6AuuKi5EQcFA6aM98EvVTPK3gPjO%2BQDeap%2FbTAVemODSZg53OHGAmwFH4GAVhZl11eSqNt9sBj6sNQYu7wMzNN1iHO9KDvhDlW2dy8z2hqn55soF8UG526iLmw3COHwgT8DeN%2FmJLmtdQWUD81JjA2PDpPhJNmWyqA%2FfA3JQ4wYFEdzQifBaG8VuwRKD4vksIiSVdLFmqK9YxvwdZbymWmqO8OPrLSBz0pR8KaNdvIJJmd3goG4sgVxcbxMdEVYcRopOJPhsQV03H%2BtVyv2lIHer9CV2PxcEhnzzs%2Blea7GwUlpaG9lT6iSLaJE9dpHSKPxG3zDWL0tcPa62QZ735SOL%2BHadlk8S6knB4ZRi1uv4fHnspA6bU3jxoCjMxH28bbkZmMPQV5olIYgVObAIFW4GXtVjO6nJx2jHbabDV19c7irX7wX5qnBuk%2ByRaZMKPikcQGOqUBiCyjLnW6CodgP851vQZL%2F39oyee3GNwMEtfzQ%2FGE6nEy3musIeO%2FZnHOe%2BYYVdiexb91WNd38hiv8qEhM6P3AUs3G98Cyeg%2FElxiEv%2B6uqL7eLvaZcg0H5odbvlQBXd%2FRkxYwkDEa72lJ6oa4LI%2BQpdOmQ38BK8mPCKJBnjyM7FKMKuIXUOSJFNsWPpbkLZ0CB%2BojZE%2BeEN2c5H1Ceii8Byv7j%2Bs&X-Amz-Signature=2962c525fb1e7fb3e12460ddaaad5795470e82fd8cbc8915fa6baa1d2b4ce9e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF77V6GF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC%2B72zoHAAcD5O3SJhv9S19XNxA5gC30NkRKojhreGNTQIgMtS7ugP0KythNLkQp%2FFMe6fBMirdQ35ghkx5NN%2F16xUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBHWHQJ78k4cIG7NSyrcA%2BEunOv7HPujAam%2FxzNDs6iPIr7t5nabfdVXGooMp9RHdGGV4xfKtvNt6RUwrMai7WF8i6zdiD8UxVwqBiAyZa2BVufFTFqL8soebOHZloEQLTnl3FOMkAOJyDpy%2BVwKMXTwAEB1DpBQwwWVVSRUaKVkRh63VZgFd0q8%2FADsxjucLuOcw3f9tQEUDvWmuc6AuuKi5EQcFA6aM98EvVTPK3gPjO%2BQDeap%2FbTAVemODSZg53OHGAmwFH4GAVhZl11eSqNt9sBj6sNQYu7wMzNN1iHO9KDvhDlW2dy8z2hqn55soF8UG526iLmw3COHwgT8DeN%2FmJLmtdQWUD81JjA2PDpPhJNmWyqA%2FfA3JQ4wYFEdzQifBaG8VuwRKD4vksIiSVdLFmqK9YxvwdZbymWmqO8OPrLSBz0pR8KaNdvIJJmd3goG4sgVxcbxMdEVYcRopOJPhsQV03H%2BtVyv2lIHer9CV2PxcEhnzzs%2Blea7GwUlpaG9lT6iSLaJE9dpHSKPxG3zDWL0tcPa62QZ735SOL%2BHadlk8S6knB4ZRi1uv4fHnspA6bU3jxoCjMxH28bbkZmMPQV5olIYgVObAIFW4GXtVjO6nJx2jHbabDV19c7irX7wX5qnBuk%2ByRaZMKPikcQGOqUBiCyjLnW6CodgP851vQZL%2F39oyee3GNwMEtfzQ%2FGE6nEy3musIeO%2FZnHOe%2BYYVdiexb91WNd38hiv8qEhM6P3AUs3G98Cyeg%2FElxiEv%2B6uqL7eLvaZcg0H5odbvlQBXd%2FRkxYwkDEa72lJ6oa4LI%2BQpdOmQ38BK8mPCKJBnjyM7FKMKuIXUOSJFNsWPpbkLZ0CB%2BojZE%2BeEN2c5H1Ceii8Byv7j%2Bs&X-Amz-Signature=c9a243c09e17a8af49f28cec8aa1f3bfeb4047715217692190becca0425cea54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF77V6GF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC%2B72zoHAAcD5O3SJhv9S19XNxA5gC30NkRKojhreGNTQIgMtS7ugP0KythNLkQp%2FFMe6fBMirdQ35ghkx5NN%2F16xUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBHWHQJ78k4cIG7NSyrcA%2BEunOv7HPujAam%2FxzNDs6iPIr7t5nabfdVXGooMp9RHdGGV4xfKtvNt6RUwrMai7WF8i6zdiD8UxVwqBiAyZa2BVufFTFqL8soebOHZloEQLTnl3FOMkAOJyDpy%2BVwKMXTwAEB1DpBQwwWVVSRUaKVkRh63VZgFd0q8%2FADsxjucLuOcw3f9tQEUDvWmuc6AuuKi5EQcFA6aM98EvVTPK3gPjO%2BQDeap%2FbTAVemODSZg53OHGAmwFH4GAVhZl11eSqNt9sBj6sNQYu7wMzNN1iHO9KDvhDlW2dy8z2hqn55soF8UG526iLmw3COHwgT8DeN%2FmJLmtdQWUD81JjA2PDpPhJNmWyqA%2FfA3JQ4wYFEdzQifBaG8VuwRKD4vksIiSVdLFmqK9YxvwdZbymWmqO8OPrLSBz0pR8KaNdvIJJmd3goG4sgVxcbxMdEVYcRopOJPhsQV03H%2BtVyv2lIHer9CV2PxcEhnzzs%2Blea7GwUlpaG9lT6iSLaJE9dpHSKPxG3zDWL0tcPa62QZ735SOL%2BHadlk8S6knB4ZRi1uv4fHnspA6bU3jxoCjMxH28bbkZmMPQV5olIYgVObAIFW4GXtVjO6nJx2jHbabDV19c7irX7wX5qnBuk%2ByRaZMKPikcQGOqUBiCyjLnW6CodgP851vQZL%2F39oyee3GNwMEtfzQ%2FGE6nEy3musIeO%2FZnHOe%2BYYVdiexb91WNd38hiv8qEhM6P3AUs3G98Cyeg%2FElxiEv%2B6uqL7eLvaZcg0H5odbvlQBXd%2FRkxYwkDEa72lJ6oa4LI%2BQpdOmQ38BK8mPCKJBnjyM7FKMKuIXUOSJFNsWPpbkLZ0CB%2BojZE%2BeEN2c5H1Ceii8Byv7j%2Bs&X-Amz-Signature=9b387c3f1420a406a5016cffb6da4d72a539aaeb1300b48eda724719ca71d37a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF77V6GF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC%2B72zoHAAcD5O3SJhv9S19XNxA5gC30NkRKojhreGNTQIgMtS7ugP0KythNLkQp%2FFMe6fBMirdQ35ghkx5NN%2F16xUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBHWHQJ78k4cIG7NSyrcA%2BEunOv7HPujAam%2FxzNDs6iPIr7t5nabfdVXGooMp9RHdGGV4xfKtvNt6RUwrMai7WF8i6zdiD8UxVwqBiAyZa2BVufFTFqL8soebOHZloEQLTnl3FOMkAOJyDpy%2BVwKMXTwAEB1DpBQwwWVVSRUaKVkRh63VZgFd0q8%2FADsxjucLuOcw3f9tQEUDvWmuc6AuuKi5EQcFA6aM98EvVTPK3gPjO%2BQDeap%2FbTAVemODSZg53OHGAmwFH4GAVhZl11eSqNt9sBj6sNQYu7wMzNN1iHO9KDvhDlW2dy8z2hqn55soF8UG526iLmw3COHwgT8DeN%2FmJLmtdQWUD81JjA2PDpPhJNmWyqA%2FfA3JQ4wYFEdzQifBaG8VuwRKD4vksIiSVdLFmqK9YxvwdZbymWmqO8OPrLSBz0pR8KaNdvIJJmd3goG4sgVxcbxMdEVYcRopOJPhsQV03H%2BtVyv2lIHer9CV2PxcEhnzzs%2Blea7GwUlpaG9lT6iSLaJE9dpHSKPxG3zDWL0tcPa62QZ735SOL%2BHadlk8S6knB4ZRi1uv4fHnspA6bU3jxoCjMxH28bbkZmMPQV5olIYgVObAIFW4GXtVjO6nJx2jHbabDV19c7irX7wX5qnBuk%2ByRaZMKPikcQGOqUBiCyjLnW6CodgP851vQZL%2F39oyee3GNwMEtfzQ%2FGE6nEy3musIeO%2FZnHOe%2BYYVdiexb91WNd38hiv8qEhM6P3AUs3G98Cyeg%2FElxiEv%2B6uqL7eLvaZcg0H5odbvlQBXd%2FRkxYwkDEa72lJ6oa4LI%2BQpdOmQ38BK8mPCKJBnjyM7FKMKuIXUOSJFNsWPpbkLZ0CB%2BojZE%2BeEN2c5H1Ceii8Byv7j%2Bs&X-Amz-Signature=1582035c8515352b36525a114672724a906b96dd519eceb6090233ffff6f9eb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF77V6GF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC%2B72zoHAAcD5O3SJhv9S19XNxA5gC30NkRKojhreGNTQIgMtS7ugP0KythNLkQp%2FFMe6fBMirdQ35ghkx5NN%2F16xUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBHWHQJ78k4cIG7NSyrcA%2BEunOv7HPujAam%2FxzNDs6iPIr7t5nabfdVXGooMp9RHdGGV4xfKtvNt6RUwrMai7WF8i6zdiD8UxVwqBiAyZa2BVufFTFqL8soebOHZloEQLTnl3FOMkAOJyDpy%2BVwKMXTwAEB1DpBQwwWVVSRUaKVkRh63VZgFd0q8%2FADsxjucLuOcw3f9tQEUDvWmuc6AuuKi5EQcFA6aM98EvVTPK3gPjO%2BQDeap%2FbTAVemODSZg53OHGAmwFH4GAVhZl11eSqNt9sBj6sNQYu7wMzNN1iHO9KDvhDlW2dy8z2hqn55soF8UG526iLmw3COHwgT8DeN%2FmJLmtdQWUD81JjA2PDpPhJNmWyqA%2FfA3JQ4wYFEdzQifBaG8VuwRKD4vksIiSVdLFmqK9YxvwdZbymWmqO8OPrLSBz0pR8KaNdvIJJmd3goG4sgVxcbxMdEVYcRopOJPhsQV03H%2BtVyv2lIHer9CV2PxcEhnzzs%2Blea7GwUlpaG9lT6iSLaJE9dpHSKPxG3zDWL0tcPa62QZ735SOL%2BHadlk8S6knB4ZRi1uv4fHnspA6bU3jxoCjMxH28bbkZmMPQV5olIYgVObAIFW4GXtVjO6nJx2jHbabDV19c7irX7wX5qnBuk%2ByRaZMKPikcQGOqUBiCyjLnW6CodgP851vQZL%2F39oyee3GNwMEtfzQ%2FGE6nEy3musIeO%2FZnHOe%2BYYVdiexb91WNd38hiv8qEhM6P3AUs3G98Cyeg%2FElxiEv%2B6uqL7eLvaZcg0H5odbvlQBXd%2FRkxYwkDEa72lJ6oa4LI%2BQpdOmQ38BK8mPCKJBnjyM7FKMKuIXUOSJFNsWPpbkLZ0CB%2BojZE%2BeEN2c5H1Ceii8Byv7j%2Bs&X-Amz-Signature=656a86dfd87a112dfdca0d82dd7ade31be3cef37d64c44d0f9c807e2a65032bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF77V6GF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC%2B72zoHAAcD5O3SJhv9S19XNxA5gC30NkRKojhreGNTQIgMtS7ugP0KythNLkQp%2FFMe6fBMirdQ35ghkx5NN%2F16xUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBHWHQJ78k4cIG7NSyrcA%2BEunOv7HPujAam%2FxzNDs6iPIr7t5nabfdVXGooMp9RHdGGV4xfKtvNt6RUwrMai7WF8i6zdiD8UxVwqBiAyZa2BVufFTFqL8soebOHZloEQLTnl3FOMkAOJyDpy%2BVwKMXTwAEB1DpBQwwWVVSRUaKVkRh63VZgFd0q8%2FADsxjucLuOcw3f9tQEUDvWmuc6AuuKi5EQcFA6aM98EvVTPK3gPjO%2BQDeap%2FbTAVemODSZg53OHGAmwFH4GAVhZl11eSqNt9sBj6sNQYu7wMzNN1iHO9KDvhDlW2dy8z2hqn55soF8UG526iLmw3COHwgT8DeN%2FmJLmtdQWUD81JjA2PDpPhJNmWyqA%2FfA3JQ4wYFEdzQifBaG8VuwRKD4vksIiSVdLFmqK9YxvwdZbymWmqO8OPrLSBz0pR8KaNdvIJJmd3goG4sgVxcbxMdEVYcRopOJPhsQV03H%2BtVyv2lIHer9CV2PxcEhnzzs%2Blea7GwUlpaG9lT6iSLaJE9dpHSKPxG3zDWL0tcPa62QZ735SOL%2BHadlk8S6knB4ZRi1uv4fHnspA6bU3jxoCjMxH28bbkZmMPQV5olIYgVObAIFW4GXtVjO6nJx2jHbabDV19c7irX7wX5qnBuk%2ByRaZMKPikcQGOqUBiCyjLnW6CodgP851vQZL%2F39oyee3GNwMEtfzQ%2FGE6nEy3musIeO%2FZnHOe%2BYYVdiexb91WNd38hiv8qEhM6P3AUs3G98Cyeg%2FElxiEv%2B6uqL7eLvaZcg0H5odbvlQBXd%2FRkxYwkDEa72lJ6oa4LI%2BQpdOmQ38BK8mPCKJBnjyM7FKMKuIXUOSJFNsWPpbkLZ0CB%2BojZE%2BeEN2c5H1Ceii8Byv7j%2Bs&X-Amz-Signature=5e58bd29da4980b89e8b830308fb1602a3f7f9eb69f6a2ae0b2c3a3562a71963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF77V6GF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC%2B72zoHAAcD5O3SJhv9S19XNxA5gC30NkRKojhreGNTQIgMtS7ugP0KythNLkQp%2FFMe6fBMirdQ35ghkx5NN%2F16xUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBHWHQJ78k4cIG7NSyrcA%2BEunOv7HPujAam%2FxzNDs6iPIr7t5nabfdVXGooMp9RHdGGV4xfKtvNt6RUwrMai7WF8i6zdiD8UxVwqBiAyZa2BVufFTFqL8soebOHZloEQLTnl3FOMkAOJyDpy%2BVwKMXTwAEB1DpBQwwWVVSRUaKVkRh63VZgFd0q8%2FADsxjucLuOcw3f9tQEUDvWmuc6AuuKi5EQcFA6aM98EvVTPK3gPjO%2BQDeap%2FbTAVemODSZg53OHGAmwFH4GAVhZl11eSqNt9sBj6sNQYu7wMzNN1iHO9KDvhDlW2dy8z2hqn55soF8UG526iLmw3COHwgT8DeN%2FmJLmtdQWUD81JjA2PDpPhJNmWyqA%2FfA3JQ4wYFEdzQifBaG8VuwRKD4vksIiSVdLFmqK9YxvwdZbymWmqO8OPrLSBz0pR8KaNdvIJJmd3goG4sgVxcbxMdEVYcRopOJPhsQV03H%2BtVyv2lIHer9CV2PxcEhnzzs%2Blea7GwUlpaG9lT6iSLaJE9dpHSKPxG3zDWL0tcPa62QZ735SOL%2BHadlk8S6knB4ZRi1uv4fHnspA6bU3jxoCjMxH28bbkZmMPQV5olIYgVObAIFW4GXtVjO6nJx2jHbabDV19c7irX7wX5qnBuk%2ByRaZMKPikcQGOqUBiCyjLnW6CodgP851vQZL%2F39oyee3GNwMEtfzQ%2FGE6nEy3musIeO%2FZnHOe%2BYYVdiexb91WNd38hiv8qEhM6P3AUs3G98Cyeg%2FElxiEv%2B6uqL7eLvaZcg0H5odbvlQBXd%2FRkxYwkDEa72lJ6oa4LI%2BQpdOmQ38BK8mPCKJBnjyM7FKMKuIXUOSJFNsWPpbkLZ0CB%2BojZE%2BeEN2c5H1Ceii8Byv7j%2Bs&X-Amz-Signature=7757fccc1bbc9e224413ac7bbd5498ea9bdcf0567f957be865c5cb023c4b65b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF77V6GF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC%2B72zoHAAcD5O3SJhv9S19XNxA5gC30NkRKojhreGNTQIgMtS7ugP0KythNLkQp%2FFMe6fBMirdQ35ghkx5NN%2F16xUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBHWHQJ78k4cIG7NSyrcA%2BEunOv7HPujAam%2FxzNDs6iPIr7t5nabfdVXGooMp9RHdGGV4xfKtvNt6RUwrMai7WF8i6zdiD8UxVwqBiAyZa2BVufFTFqL8soebOHZloEQLTnl3FOMkAOJyDpy%2BVwKMXTwAEB1DpBQwwWVVSRUaKVkRh63VZgFd0q8%2FADsxjucLuOcw3f9tQEUDvWmuc6AuuKi5EQcFA6aM98EvVTPK3gPjO%2BQDeap%2FbTAVemODSZg53OHGAmwFH4GAVhZl11eSqNt9sBj6sNQYu7wMzNN1iHO9KDvhDlW2dy8z2hqn55soF8UG526iLmw3COHwgT8DeN%2FmJLmtdQWUD81JjA2PDpPhJNmWyqA%2FfA3JQ4wYFEdzQifBaG8VuwRKD4vksIiSVdLFmqK9YxvwdZbymWmqO8OPrLSBz0pR8KaNdvIJJmd3goG4sgVxcbxMdEVYcRopOJPhsQV03H%2BtVyv2lIHer9CV2PxcEhnzzs%2Blea7GwUlpaG9lT6iSLaJE9dpHSKPxG3zDWL0tcPa62QZ735SOL%2BHadlk8S6knB4ZRi1uv4fHnspA6bU3jxoCjMxH28bbkZmMPQV5olIYgVObAIFW4GXtVjO6nJx2jHbabDV19c7irX7wX5qnBuk%2ByRaZMKPikcQGOqUBiCyjLnW6CodgP851vQZL%2F39oyee3GNwMEtfzQ%2FGE6nEy3musIeO%2FZnHOe%2BYYVdiexb91WNd38hiv8qEhM6P3AUs3G98Cyeg%2FElxiEv%2B6uqL7eLvaZcg0H5odbvlQBXd%2FRkxYwkDEa72lJ6oa4LI%2BQpdOmQ38BK8mPCKJBnjyM7FKMKuIXUOSJFNsWPpbkLZ0CB%2BojZE%2BeEN2c5H1Ceii8Byv7j%2Bs&X-Amz-Signature=03b9c0987fb5f116f9d8697834e762123eac290613eb4eb7cb140a45f4aa3510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF77V6GF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC%2B72zoHAAcD5O3SJhv9S19XNxA5gC30NkRKojhreGNTQIgMtS7ugP0KythNLkQp%2FFMe6fBMirdQ35ghkx5NN%2F16xUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBHWHQJ78k4cIG7NSyrcA%2BEunOv7HPujAam%2FxzNDs6iPIr7t5nabfdVXGooMp9RHdGGV4xfKtvNt6RUwrMai7WF8i6zdiD8UxVwqBiAyZa2BVufFTFqL8soebOHZloEQLTnl3FOMkAOJyDpy%2BVwKMXTwAEB1DpBQwwWVVSRUaKVkRh63VZgFd0q8%2FADsxjucLuOcw3f9tQEUDvWmuc6AuuKi5EQcFA6aM98EvVTPK3gPjO%2BQDeap%2FbTAVemODSZg53OHGAmwFH4GAVhZl11eSqNt9sBj6sNQYu7wMzNN1iHO9KDvhDlW2dy8z2hqn55soF8UG526iLmw3COHwgT8DeN%2FmJLmtdQWUD81JjA2PDpPhJNmWyqA%2FfA3JQ4wYFEdzQifBaG8VuwRKD4vksIiSVdLFmqK9YxvwdZbymWmqO8OPrLSBz0pR8KaNdvIJJmd3goG4sgVxcbxMdEVYcRopOJPhsQV03H%2BtVyv2lIHer9CV2PxcEhnzzs%2Blea7GwUlpaG9lT6iSLaJE9dpHSKPxG3zDWL0tcPa62QZ735SOL%2BHadlk8S6knB4ZRi1uv4fHnspA6bU3jxoCjMxH28bbkZmMPQV5olIYgVObAIFW4GXtVjO6nJx2jHbabDV19c7irX7wX5qnBuk%2ByRaZMKPikcQGOqUBiCyjLnW6CodgP851vQZL%2F39oyee3GNwMEtfzQ%2FGE6nEy3musIeO%2FZnHOe%2BYYVdiexb91WNd38hiv8qEhM6P3AUs3G98Cyeg%2FElxiEv%2B6uqL7eLvaZcg0H5odbvlQBXd%2FRkxYwkDEa72lJ6oa4LI%2BQpdOmQ38BK8mPCKJBnjyM7FKMKuIXUOSJFNsWPpbkLZ0CB%2BojZE%2BeEN2c5H1Ceii8Byv7j%2Bs&X-Amz-Signature=ea32a476bfc4b004c1e323ac21690883024d6d96e1ea17b87e35bba3a04bd993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF77V6GF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC%2B72zoHAAcD5O3SJhv9S19XNxA5gC30NkRKojhreGNTQIgMtS7ugP0KythNLkQp%2FFMe6fBMirdQ35ghkx5NN%2F16xUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBHWHQJ78k4cIG7NSyrcA%2BEunOv7HPujAam%2FxzNDs6iPIr7t5nabfdVXGooMp9RHdGGV4xfKtvNt6RUwrMai7WF8i6zdiD8UxVwqBiAyZa2BVufFTFqL8soebOHZloEQLTnl3FOMkAOJyDpy%2BVwKMXTwAEB1DpBQwwWVVSRUaKVkRh63VZgFd0q8%2FADsxjucLuOcw3f9tQEUDvWmuc6AuuKi5EQcFA6aM98EvVTPK3gPjO%2BQDeap%2FbTAVemODSZg53OHGAmwFH4GAVhZl11eSqNt9sBj6sNQYu7wMzNN1iHO9KDvhDlW2dy8z2hqn55soF8UG526iLmw3COHwgT8DeN%2FmJLmtdQWUD81JjA2PDpPhJNmWyqA%2FfA3JQ4wYFEdzQifBaG8VuwRKD4vksIiSVdLFmqK9YxvwdZbymWmqO8OPrLSBz0pR8KaNdvIJJmd3goG4sgVxcbxMdEVYcRopOJPhsQV03H%2BtVyv2lIHer9CV2PxcEhnzzs%2Blea7GwUlpaG9lT6iSLaJE9dpHSKPxG3zDWL0tcPa62QZ735SOL%2BHadlk8S6knB4ZRi1uv4fHnspA6bU3jxoCjMxH28bbkZmMPQV5olIYgVObAIFW4GXtVjO6nJx2jHbabDV19c7irX7wX5qnBuk%2ByRaZMKPikcQGOqUBiCyjLnW6CodgP851vQZL%2F39oyee3GNwMEtfzQ%2FGE6nEy3musIeO%2FZnHOe%2BYYVdiexb91WNd38hiv8qEhM6P3AUs3G98Cyeg%2FElxiEv%2B6uqL7eLvaZcg0H5odbvlQBXd%2FRkxYwkDEa72lJ6oa4LI%2BQpdOmQ38BK8mPCKJBnjyM7FKMKuIXUOSJFNsWPpbkLZ0CB%2BojZE%2BeEN2c5H1Ceii8Byv7j%2Bs&X-Amz-Signature=4619647e794b586e8dfe8a6ea85a5e3d1e6cb909464bb509f4626f470bc8e21f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF77V6GF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC%2B72zoHAAcD5O3SJhv9S19XNxA5gC30NkRKojhreGNTQIgMtS7ugP0KythNLkQp%2FFMe6fBMirdQ35ghkx5NN%2F16xUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBHWHQJ78k4cIG7NSyrcA%2BEunOv7HPujAam%2FxzNDs6iPIr7t5nabfdVXGooMp9RHdGGV4xfKtvNt6RUwrMai7WF8i6zdiD8UxVwqBiAyZa2BVufFTFqL8soebOHZloEQLTnl3FOMkAOJyDpy%2BVwKMXTwAEB1DpBQwwWVVSRUaKVkRh63VZgFd0q8%2FADsxjucLuOcw3f9tQEUDvWmuc6AuuKi5EQcFA6aM98EvVTPK3gPjO%2BQDeap%2FbTAVemODSZg53OHGAmwFH4GAVhZl11eSqNt9sBj6sNQYu7wMzNN1iHO9KDvhDlW2dy8z2hqn55soF8UG526iLmw3COHwgT8DeN%2FmJLmtdQWUD81JjA2PDpPhJNmWyqA%2FfA3JQ4wYFEdzQifBaG8VuwRKD4vksIiSVdLFmqK9YxvwdZbymWmqO8OPrLSBz0pR8KaNdvIJJmd3goG4sgVxcbxMdEVYcRopOJPhsQV03H%2BtVyv2lIHer9CV2PxcEhnzzs%2Blea7GwUlpaG9lT6iSLaJE9dpHSKPxG3zDWL0tcPa62QZ735SOL%2BHadlk8S6knB4ZRi1uv4fHnspA6bU3jxoCjMxH28bbkZmMPQV5olIYgVObAIFW4GXtVjO6nJx2jHbabDV19c7irX7wX5qnBuk%2ByRaZMKPikcQGOqUBiCyjLnW6CodgP851vQZL%2F39oyee3GNwMEtfzQ%2FGE6nEy3musIeO%2FZnHOe%2BYYVdiexb91WNd38hiv8qEhM6P3AUs3G98Cyeg%2FElxiEv%2B6uqL7eLvaZcg0H5odbvlQBXd%2FRkxYwkDEa72lJ6oa4LI%2BQpdOmQ38BK8mPCKJBnjyM7FKMKuIXUOSJFNsWPpbkLZ0CB%2BojZE%2BeEN2c5H1Ceii8Byv7j%2Bs&X-Amz-Signature=e039dcbab4c58bc7c273aafb473c48d8c8f34b9aca75a8d2cf80ef3289dcccee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF77V6GF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC%2B72zoHAAcD5O3SJhv9S19XNxA5gC30NkRKojhreGNTQIgMtS7ugP0KythNLkQp%2FFMe6fBMirdQ35ghkx5NN%2F16xUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBHWHQJ78k4cIG7NSyrcA%2BEunOv7HPujAam%2FxzNDs6iPIr7t5nabfdVXGooMp9RHdGGV4xfKtvNt6RUwrMai7WF8i6zdiD8UxVwqBiAyZa2BVufFTFqL8soebOHZloEQLTnl3FOMkAOJyDpy%2BVwKMXTwAEB1DpBQwwWVVSRUaKVkRh63VZgFd0q8%2FADsxjucLuOcw3f9tQEUDvWmuc6AuuKi5EQcFA6aM98EvVTPK3gPjO%2BQDeap%2FbTAVemODSZg53OHGAmwFH4GAVhZl11eSqNt9sBj6sNQYu7wMzNN1iHO9KDvhDlW2dy8z2hqn55soF8UG526iLmw3COHwgT8DeN%2FmJLmtdQWUD81JjA2PDpPhJNmWyqA%2FfA3JQ4wYFEdzQifBaG8VuwRKD4vksIiSVdLFmqK9YxvwdZbymWmqO8OPrLSBz0pR8KaNdvIJJmd3goG4sgVxcbxMdEVYcRopOJPhsQV03H%2BtVyv2lIHer9CV2PxcEhnzzs%2Blea7GwUlpaG9lT6iSLaJE9dpHSKPxG3zDWL0tcPa62QZ735SOL%2BHadlk8S6knB4ZRi1uv4fHnspA6bU3jxoCjMxH28bbkZmMPQV5olIYgVObAIFW4GXtVjO6nJx2jHbabDV19c7irX7wX5qnBuk%2ByRaZMKPikcQGOqUBiCyjLnW6CodgP851vQZL%2F39oyee3GNwMEtfzQ%2FGE6nEy3musIeO%2FZnHOe%2BYYVdiexb91WNd38hiv8qEhM6P3AUs3G98Cyeg%2FElxiEv%2B6uqL7eLvaZcg0H5odbvlQBXd%2FRkxYwkDEa72lJ6oa4LI%2BQpdOmQ38BK8mPCKJBnjyM7FKMKuIXUOSJFNsWPpbkLZ0CB%2BojZE%2BeEN2c5H1Ceii8Byv7j%2Bs&X-Amz-Signature=0d80d82105a8e65dc3cec4ba9f547386002378f4b26baa71b534a74fb55498c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF77V6GF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC%2B72zoHAAcD5O3SJhv9S19XNxA5gC30NkRKojhreGNTQIgMtS7ugP0KythNLkQp%2FFMe6fBMirdQ35ghkx5NN%2F16xUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBHWHQJ78k4cIG7NSyrcA%2BEunOv7HPujAam%2FxzNDs6iPIr7t5nabfdVXGooMp9RHdGGV4xfKtvNt6RUwrMai7WF8i6zdiD8UxVwqBiAyZa2BVufFTFqL8soebOHZloEQLTnl3FOMkAOJyDpy%2BVwKMXTwAEB1DpBQwwWVVSRUaKVkRh63VZgFd0q8%2FADsxjucLuOcw3f9tQEUDvWmuc6AuuKi5EQcFA6aM98EvVTPK3gPjO%2BQDeap%2FbTAVemODSZg53OHGAmwFH4GAVhZl11eSqNt9sBj6sNQYu7wMzNN1iHO9KDvhDlW2dy8z2hqn55soF8UG526iLmw3COHwgT8DeN%2FmJLmtdQWUD81JjA2PDpPhJNmWyqA%2FfA3JQ4wYFEdzQifBaG8VuwRKD4vksIiSVdLFmqK9YxvwdZbymWmqO8OPrLSBz0pR8KaNdvIJJmd3goG4sgVxcbxMdEVYcRopOJPhsQV03H%2BtVyv2lIHer9CV2PxcEhnzzs%2Blea7GwUlpaG9lT6iSLaJE9dpHSKPxG3zDWL0tcPa62QZ735SOL%2BHadlk8S6knB4ZRi1uv4fHnspA6bU3jxoCjMxH28bbkZmMPQV5olIYgVObAIFW4GXtVjO6nJx2jHbabDV19c7irX7wX5qnBuk%2ByRaZMKPikcQGOqUBiCyjLnW6CodgP851vQZL%2F39oyee3GNwMEtfzQ%2FGE6nEy3musIeO%2FZnHOe%2BYYVdiexb91WNd38hiv8qEhM6P3AUs3G98Cyeg%2FElxiEv%2B6uqL7eLvaZcg0H5odbvlQBXd%2FRkxYwkDEa72lJ6oa4LI%2BQpdOmQ38BK8mPCKJBnjyM7FKMKuIXUOSJFNsWPpbkLZ0CB%2BojZE%2BeEN2c5H1Ceii8Byv7j%2Bs&X-Amz-Signature=931a5def7fa175ea4af3bff62d75a30b8a2362ee0e67cddc74fe0eac0bafa919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF77V6GF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC%2B72zoHAAcD5O3SJhv9S19XNxA5gC30NkRKojhreGNTQIgMtS7ugP0KythNLkQp%2FFMe6fBMirdQ35ghkx5NN%2F16xUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBHWHQJ78k4cIG7NSyrcA%2BEunOv7HPujAam%2FxzNDs6iPIr7t5nabfdVXGooMp9RHdGGV4xfKtvNt6RUwrMai7WF8i6zdiD8UxVwqBiAyZa2BVufFTFqL8soebOHZloEQLTnl3FOMkAOJyDpy%2BVwKMXTwAEB1DpBQwwWVVSRUaKVkRh63VZgFd0q8%2FADsxjucLuOcw3f9tQEUDvWmuc6AuuKi5EQcFA6aM98EvVTPK3gPjO%2BQDeap%2FbTAVemODSZg53OHGAmwFH4GAVhZl11eSqNt9sBj6sNQYu7wMzNN1iHO9KDvhDlW2dy8z2hqn55soF8UG526iLmw3COHwgT8DeN%2FmJLmtdQWUD81JjA2PDpPhJNmWyqA%2FfA3JQ4wYFEdzQifBaG8VuwRKD4vksIiSVdLFmqK9YxvwdZbymWmqO8OPrLSBz0pR8KaNdvIJJmd3goG4sgVxcbxMdEVYcRopOJPhsQV03H%2BtVyv2lIHer9CV2PxcEhnzzs%2Blea7GwUlpaG9lT6iSLaJE9dpHSKPxG3zDWL0tcPa62QZ735SOL%2BHadlk8S6knB4ZRi1uv4fHnspA6bU3jxoCjMxH28bbkZmMPQV5olIYgVObAIFW4GXtVjO6nJx2jHbabDV19c7irX7wX5qnBuk%2ByRaZMKPikcQGOqUBiCyjLnW6CodgP851vQZL%2F39oyee3GNwMEtfzQ%2FGE6nEy3musIeO%2FZnHOe%2BYYVdiexb91WNd38hiv8qEhM6P3AUs3G98Cyeg%2FElxiEv%2B6uqL7eLvaZcg0H5odbvlQBXd%2FRkxYwkDEa72lJ6oa4LI%2BQpdOmQ38BK8mPCKJBnjyM7FKMKuIXUOSJFNsWPpbkLZ0CB%2BojZE%2BeEN2c5H1Ceii8Byv7j%2Bs&X-Amz-Signature=716ac2f55473879df9bcc8fb2a174c87c03dab2d8319f7f3fc0977f336cd7dfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSL75GE%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCHzx%2FaZ5huckM2ktBaLO9yZnmA3FfwBVp6%2FyvHiekyDoCIQCrQUBxpGlTe65faeYn9y0KIPGBOdoctG%2BsrK%2BeKR019yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMbBAQPn1BMaJGKmc%2BKtwDEukR9JgbOgX6nZWI3OkXi64ZPhc0KDU%2Bt9IaV%2BpF2KsKptR7wKk7HoGXR%2BRnv3N6Y8dqCRQIPnHtIbs8Bud05hi4qzX%2B0uxRasQSEFOaNzzTJ%2FxVNjwgri9PE4xL5wFFcghiuLzMGTeAo%2BZ2oTg%2BvabKjFyLH56etBultdi%2B4iHR1yqO4I0VIzG9eszhDATgkreqxTU47NhrEXQGSrtjrLMU0V35CWNQWlla6P9Ybc5KSrgtvxT5t3BK9G%2FNP56YRqPNU46KHA7z219KvNNyknp%2FTSx1FwuKeEFqhUECMZrWKe9mTbVKW5Smm1u4AOPPDynwRnGPCUmlnpeELDmUzEipSFsanih8KOyblxrJ2bAVNTmKeZWJibgJ6Wxdi%2Fl53qpN6UBU2lNlI7jJBaswK7wwdCc3MOowYhsa3tXm3EScT1td0RFwkWMYwOcX7kPjz8stPjYBV4q4L5OmSncuPoRmt8MLG3mP28deKgoFV3RJjzvkeoqTtMT5saqPWNZ52zjLm8b5FM8LxYksRMNMImJXzk2AD%2FWdg6osVaM1k4RuqTVRGRUT2lLHTzy7bFjzPCll9MACc1Z7L7JCO0mXLCISVcn7P2Oj0vg%2Fg7RReH3zD%2FSrfg3KBeQHV9Ewp%2BKRxAY6pgGFNkXKzh6jPfl5sX%2BA5Ja483DVHHoQAJyOh9%2FTH6q2AHKg3l4R05IdHzjZ%2FHFyqncvg%2Bg5J6fbTILYhqm47kG0hHAuB7KST0XuRm8nLRP%2FyL6fNRtbffrwV9StMuSH9UX8LG%2ByAPWE7XaMZfDkQlFGRcLEciF8kSHSAegnBz4iAmAAqkfXXyretpRQjFDMLXf1TPh%2FBEXEmHm7ecWIDSK1rcOr%2BpZk&X-Amz-Signature=c6e8d0e2b929656d3b87b452c7b8ed793fd7d8c44d7aafbbd9ac96a56e463140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSL75GE%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCHzx%2FaZ5huckM2ktBaLO9yZnmA3FfwBVp6%2FyvHiekyDoCIQCrQUBxpGlTe65faeYn9y0KIPGBOdoctG%2BsrK%2BeKR019yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMbBAQPn1BMaJGKmc%2BKtwDEukR9JgbOgX6nZWI3OkXi64ZPhc0KDU%2Bt9IaV%2BpF2KsKptR7wKk7HoGXR%2BRnv3N6Y8dqCRQIPnHtIbs8Bud05hi4qzX%2B0uxRasQSEFOaNzzTJ%2FxVNjwgri9PE4xL5wFFcghiuLzMGTeAo%2BZ2oTg%2BvabKjFyLH56etBultdi%2B4iHR1yqO4I0VIzG9eszhDATgkreqxTU47NhrEXQGSrtjrLMU0V35CWNQWlla6P9Ybc5KSrgtvxT5t3BK9G%2FNP56YRqPNU46KHA7z219KvNNyknp%2FTSx1FwuKeEFqhUECMZrWKe9mTbVKW5Smm1u4AOPPDynwRnGPCUmlnpeELDmUzEipSFsanih8KOyblxrJ2bAVNTmKeZWJibgJ6Wxdi%2Fl53qpN6UBU2lNlI7jJBaswK7wwdCc3MOowYhsa3tXm3EScT1td0RFwkWMYwOcX7kPjz8stPjYBV4q4L5OmSncuPoRmt8MLG3mP28deKgoFV3RJjzvkeoqTtMT5saqPWNZ52zjLm8b5FM8LxYksRMNMImJXzk2AD%2FWdg6osVaM1k4RuqTVRGRUT2lLHTzy7bFjzPCll9MACc1Z7L7JCO0mXLCISVcn7P2Oj0vg%2Fg7RReH3zD%2FSrfg3KBeQHV9Ewp%2BKRxAY6pgGFNkXKzh6jPfl5sX%2BA5Ja483DVHHoQAJyOh9%2FTH6q2AHKg3l4R05IdHzjZ%2FHFyqncvg%2Bg5J6fbTILYhqm47kG0hHAuB7KST0XuRm8nLRP%2FyL6fNRtbffrwV9StMuSH9UX8LG%2ByAPWE7XaMZfDkQlFGRcLEciF8kSHSAegnBz4iAmAAqkfXXyretpRQjFDMLXf1TPh%2FBEXEmHm7ecWIDSK1rcOr%2BpZk&X-Amz-Signature=acb9682bebcbf2684ec6c180eaa4e96a15b521eaea213eebae7b1a975a273d67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSL75GE%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCHzx%2FaZ5huckM2ktBaLO9yZnmA3FfwBVp6%2FyvHiekyDoCIQCrQUBxpGlTe65faeYn9y0KIPGBOdoctG%2BsrK%2BeKR019yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMbBAQPn1BMaJGKmc%2BKtwDEukR9JgbOgX6nZWI3OkXi64ZPhc0KDU%2Bt9IaV%2BpF2KsKptR7wKk7HoGXR%2BRnv3N6Y8dqCRQIPnHtIbs8Bud05hi4qzX%2B0uxRasQSEFOaNzzTJ%2FxVNjwgri9PE4xL5wFFcghiuLzMGTeAo%2BZ2oTg%2BvabKjFyLH56etBultdi%2B4iHR1yqO4I0VIzG9eszhDATgkreqxTU47NhrEXQGSrtjrLMU0V35CWNQWlla6P9Ybc5KSrgtvxT5t3BK9G%2FNP56YRqPNU46KHA7z219KvNNyknp%2FTSx1FwuKeEFqhUECMZrWKe9mTbVKW5Smm1u4AOPPDynwRnGPCUmlnpeELDmUzEipSFsanih8KOyblxrJ2bAVNTmKeZWJibgJ6Wxdi%2Fl53qpN6UBU2lNlI7jJBaswK7wwdCc3MOowYhsa3tXm3EScT1td0RFwkWMYwOcX7kPjz8stPjYBV4q4L5OmSncuPoRmt8MLG3mP28deKgoFV3RJjzvkeoqTtMT5saqPWNZ52zjLm8b5FM8LxYksRMNMImJXzk2AD%2FWdg6osVaM1k4RuqTVRGRUT2lLHTzy7bFjzPCll9MACc1Z7L7JCO0mXLCISVcn7P2Oj0vg%2Fg7RReH3zD%2FSrfg3KBeQHV9Ewp%2BKRxAY6pgGFNkXKzh6jPfl5sX%2BA5Ja483DVHHoQAJyOh9%2FTH6q2AHKg3l4R05IdHzjZ%2FHFyqncvg%2Bg5J6fbTILYhqm47kG0hHAuB7KST0XuRm8nLRP%2FyL6fNRtbffrwV9StMuSH9UX8LG%2ByAPWE7XaMZfDkQlFGRcLEciF8kSHSAegnBz4iAmAAqkfXXyretpRQjFDMLXf1TPh%2FBEXEmHm7ecWIDSK1rcOr%2BpZk&X-Amz-Signature=c5ce65882343e3177869596d1ed65f85e8886e7354cc0e81e3335985c667a1a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSL75GE%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCHzx%2FaZ5huckM2ktBaLO9yZnmA3FfwBVp6%2FyvHiekyDoCIQCrQUBxpGlTe65faeYn9y0KIPGBOdoctG%2BsrK%2BeKR019yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMbBAQPn1BMaJGKmc%2BKtwDEukR9JgbOgX6nZWI3OkXi64ZPhc0KDU%2Bt9IaV%2BpF2KsKptR7wKk7HoGXR%2BRnv3N6Y8dqCRQIPnHtIbs8Bud05hi4qzX%2B0uxRasQSEFOaNzzTJ%2FxVNjwgri9PE4xL5wFFcghiuLzMGTeAo%2BZ2oTg%2BvabKjFyLH56etBultdi%2B4iHR1yqO4I0VIzG9eszhDATgkreqxTU47NhrEXQGSrtjrLMU0V35CWNQWlla6P9Ybc5KSrgtvxT5t3BK9G%2FNP56YRqPNU46KHA7z219KvNNyknp%2FTSx1FwuKeEFqhUECMZrWKe9mTbVKW5Smm1u4AOPPDynwRnGPCUmlnpeELDmUzEipSFsanih8KOyblxrJ2bAVNTmKeZWJibgJ6Wxdi%2Fl53qpN6UBU2lNlI7jJBaswK7wwdCc3MOowYhsa3tXm3EScT1td0RFwkWMYwOcX7kPjz8stPjYBV4q4L5OmSncuPoRmt8MLG3mP28deKgoFV3RJjzvkeoqTtMT5saqPWNZ52zjLm8b5FM8LxYksRMNMImJXzk2AD%2FWdg6osVaM1k4RuqTVRGRUT2lLHTzy7bFjzPCll9MACc1Z7L7JCO0mXLCISVcn7P2Oj0vg%2Fg7RReH3zD%2FSrfg3KBeQHV9Ewp%2BKRxAY6pgGFNkXKzh6jPfl5sX%2BA5Ja483DVHHoQAJyOh9%2FTH6q2AHKg3l4R05IdHzjZ%2FHFyqncvg%2Bg5J6fbTILYhqm47kG0hHAuB7KST0XuRm8nLRP%2FyL6fNRtbffrwV9StMuSH9UX8LG%2ByAPWE7XaMZfDkQlFGRcLEciF8kSHSAegnBz4iAmAAqkfXXyretpRQjFDMLXf1TPh%2FBEXEmHm7ecWIDSK1rcOr%2BpZk&X-Amz-Signature=2cf4b3650c3e52015e43c4d5292ce8d7e722a42b18cebbe3f49dba3a103b140e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSL75GE%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCHzx%2FaZ5huckM2ktBaLO9yZnmA3FfwBVp6%2FyvHiekyDoCIQCrQUBxpGlTe65faeYn9y0KIPGBOdoctG%2BsrK%2BeKR019yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMbBAQPn1BMaJGKmc%2BKtwDEukR9JgbOgX6nZWI3OkXi64ZPhc0KDU%2Bt9IaV%2BpF2KsKptR7wKk7HoGXR%2BRnv3N6Y8dqCRQIPnHtIbs8Bud05hi4qzX%2B0uxRasQSEFOaNzzTJ%2FxVNjwgri9PE4xL5wFFcghiuLzMGTeAo%2BZ2oTg%2BvabKjFyLH56etBultdi%2B4iHR1yqO4I0VIzG9eszhDATgkreqxTU47NhrEXQGSrtjrLMU0V35CWNQWlla6P9Ybc5KSrgtvxT5t3BK9G%2FNP56YRqPNU46KHA7z219KvNNyknp%2FTSx1FwuKeEFqhUECMZrWKe9mTbVKW5Smm1u4AOPPDynwRnGPCUmlnpeELDmUzEipSFsanih8KOyblxrJ2bAVNTmKeZWJibgJ6Wxdi%2Fl53qpN6UBU2lNlI7jJBaswK7wwdCc3MOowYhsa3tXm3EScT1td0RFwkWMYwOcX7kPjz8stPjYBV4q4L5OmSncuPoRmt8MLG3mP28deKgoFV3RJjzvkeoqTtMT5saqPWNZ52zjLm8b5FM8LxYksRMNMImJXzk2AD%2FWdg6osVaM1k4RuqTVRGRUT2lLHTzy7bFjzPCll9MACc1Z7L7JCO0mXLCISVcn7P2Oj0vg%2Fg7RReH3zD%2FSrfg3KBeQHV9Ewp%2BKRxAY6pgGFNkXKzh6jPfl5sX%2BA5Ja483DVHHoQAJyOh9%2FTH6q2AHKg3l4R05IdHzjZ%2FHFyqncvg%2Bg5J6fbTILYhqm47kG0hHAuB7KST0XuRm8nLRP%2FyL6fNRtbffrwV9StMuSH9UX8LG%2ByAPWE7XaMZfDkQlFGRcLEciF8kSHSAegnBz4iAmAAqkfXXyretpRQjFDMLXf1TPh%2FBEXEmHm7ecWIDSK1rcOr%2BpZk&X-Amz-Signature=bbd8d1efb103f9b8312f7258679f566a71380ffa01e9fff4f6aa904445591f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSL75GE%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCHzx%2FaZ5huckM2ktBaLO9yZnmA3FfwBVp6%2FyvHiekyDoCIQCrQUBxpGlTe65faeYn9y0KIPGBOdoctG%2BsrK%2BeKR019yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMbBAQPn1BMaJGKmc%2BKtwDEukR9JgbOgX6nZWI3OkXi64ZPhc0KDU%2Bt9IaV%2BpF2KsKptR7wKk7HoGXR%2BRnv3N6Y8dqCRQIPnHtIbs8Bud05hi4qzX%2B0uxRasQSEFOaNzzTJ%2FxVNjwgri9PE4xL5wFFcghiuLzMGTeAo%2BZ2oTg%2BvabKjFyLH56etBultdi%2B4iHR1yqO4I0VIzG9eszhDATgkreqxTU47NhrEXQGSrtjrLMU0V35CWNQWlla6P9Ybc5KSrgtvxT5t3BK9G%2FNP56YRqPNU46KHA7z219KvNNyknp%2FTSx1FwuKeEFqhUECMZrWKe9mTbVKW5Smm1u4AOPPDynwRnGPCUmlnpeELDmUzEipSFsanih8KOyblxrJ2bAVNTmKeZWJibgJ6Wxdi%2Fl53qpN6UBU2lNlI7jJBaswK7wwdCc3MOowYhsa3tXm3EScT1td0RFwkWMYwOcX7kPjz8stPjYBV4q4L5OmSncuPoRmt8MLG3mP28deKgoFV3RJjzvkeoqTtMT5saqPWNZ52zjLm8b5FM8LxYksRMNMImJXzk2AD%2FWdg6osVaM1k4RuqTVRGRUT2lLHTzy7bFjzPCll9MACc1Z7L7JCO0mXLCISVcn7P2Oj0vg%2Fg7RReH3zD%2FSrfg3KBeQHV9Ewp%2BKRxAY6pgGFNkXKzh6jPfl5sX%2BA5Ja483DVHHoQAJyOh9%2FTH6q2AHKg3l4R05IdHzjZ%2FHFyqncvg%2Bg5J6fbTILYhqm47kG0hHAuB7KST0XuRm8nLRP%2FyL6fNRtbffrwV9StMuSH9UX8LG%2ByAPWE7XaMZfDkQlFGRcLEciF8kSHSAegnBz4iAmAAqkfXXyretpRQjFDMLXf1TPh%2FBEXEmHm7ecWIDSK1rcOr%2BpZk&X-Amz-Signature=f2c2b60eed4442eed242ffbfa51a325874724b842f07505358ba4a7d83d0850a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
