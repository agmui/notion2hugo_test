---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T01:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T01:34:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGZWX2L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCOaKPv54XNcpjmlG020GqsFzIDnD2pAzp3lRX40CP6pwIgJ1Y2ZA7PlUEa3fH0IsX%2FsxU5mWTsy0K82HCsSlf%2FBWAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAQZ1rqhjoKcoLZ5yCrcA8WnG5mo5P5xDkn53QQXG04s6mqoB0thvEKxv2zFijFN4gnODx%2BRA2ApR5Fhk9mLOkkvq8jq3TAzURzmjSPCM4Zwr7hi2WwxdYFu%2FPkuAELt64MIjjRRTvhNaezKZrnStJwcLWllH0s2Puxq4WhsRLQjDmAdK%2BadcZ5D6KHm8kHzBl2WCRpcx0Y96JGJTEkCmmr%2BrWUmFnMo51RsXMuzrDbhw936wGLyxnGpy6Q%2BLH%2FCwxnpJ6PqJWxSfASHrz5b35XlQGSFfa8BqTGoXDiqYXTtkXrEA0GVLS8OehYCbDd5xghMOouxgN36x8cRbrSRZtrWY%2BE1LXzza9oOePiGQNynI0R7z7f6%2FnmYzR5m5mRLIkdsRkCiv3iO5iRHj4K7ZdnkjiZohCg2FJ%2FPiWuqZmVeMoInxFsmo9GxcIiQG8jKzMXbVO9W%2BsjmeXjLf2XfkoXzxgvgzk6dezB9Z4lk544%2F256NCtQNJFGgXYkuVFNb%2FpB%2FwWFNqr8pR92LWvnrdidN9jIZFvpRKSRmwmfrCKHt9ZzaxmCJZUf4keLgR4t83%2FBvBhGI%2B5JDrTSTEfdq5sXc%2F8xAZHdmk9BRL4fOar8m4RAKpd%2BxO8QMBe7Q9G5IzV8GsXaqCFyxAxxWMObXisQGOqUBvyuKK1XIbaQMVKnRb3ht%2BQcUIZDtSWRGGI5J%2FjkMFYKil9O5aPp7Emu7XJ4NBDeVYoIjDIkzduFEj4Gm0mn09TM6SV78LwXS2%2BzYImWtDEUcL%2FTOTHaHs77SVnZy6dW4nYEbJVrbi5qzfM%2FwVaJj64uw5uU%2BXfl0PtKW%2BHJ6j%2F2PhPqjJyOmO70jtjc8%2Bi6Bmq2pRWh9nC9Nhrd6AjC72l%2Fqaxjl&X-Amz-Signature=db5a7e7a307ce8c1f62a013a32a9095675d519720c0b9ce01b3f67d70a2ad05c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGZWX2L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCOaKPv54XNcpjmlG020GqsFzIDnD2pAzp3lRX40CP6pwIgJ1Y2ZA7PlUEa3fH0IsX%2FsxU5mWTsy0K82HCsSlf%2FBWAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAQZ1rqhjoKcoLZ5yCrcA8WnG5mo5P5xDkn53QQXG04s6mqoB0thvEKxv2zFijFN4gnODx%2BRA2ApR5Fhk9mLOkkvq8jq3TAzURzmjSPCM4Zwr7hi2WwxdYFu%2FPkuAELt64MIjjRRTvhNaezKZrnStJwcLWllH0s2Puxq4WhsRLQjDmAdK%2BadcZ5D6KHm8kHzBl2WCRpcx0Y96JGJTEkCmmr%2BrWUmFnMo51RsXMuzrDbhw936wGLyxnGpy6Q%2BLH%2FCwxnpJ6PqJWxSfASHrz5b35XlQGSFfa8BqTGoXDiqYXTtkXrEA0GVLS8OehYCbDd5xghMOouxgN36x8cRbrSRZtrWY%2BE1LXzza9oOePiGQNynI0R7z7f6%2FnmYzR5m5mRLIkdsRkCiv3iO5iRHj4K7ZdnkjiZohCg2FJ%2FPiWuqZmVeMoInxFsmo9GxcIiQG8jKzMXbVO9W%2BsjmeXjLf2XfkoXzxgvgzk6dezB9Z4lk544%2F256NCtQNJFGgXYkuVFNb%2FpB%2FwWFNqr8pR92LWvnrdidN9jIZFvpRKSRmwmfrCKHt9ZzaxmCJZUf4keLgR4t83%2FBvBhGI%2B5JDrTSTEfdq5sXc%2F8xAZHdmk9BRL4fOar8m4RAKpd%2BxO8QMBe7Q9G5IzV8GsXaqCFyxAxxWMObXisQGOqUBvyuKK1XIbaQMVKnRb3ht%2BQcUIZDtSWRGGI5J%2FjkMFYKil9O5aPp7Emu7XJ4NBDeVYoIjDIkzduFEj4Gm0mn09TM6SV78LwXS2%2BzYImWtDEUcL%2FTOTHaHs77SVnZy6dW4nYEbJVrbi5qzfM%2FwVaJj64uw5uU%2BXfl0PtKW%2BHJ6j%2F2PhPqjJyOmO70jtjc8%2Bi6Bmq2pRWh9nC9Nhrd6AjC72l%2Fqaxjl&X-Amz-Signature=d68b0cc3cf1c40fb7e7adf672d50381e7bf4a1742bd17933e5f08edb64e319cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly highly HIGHLY recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGZWX2L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCOaKPv54XNcpjmlG020GqsFzIDnD2pAzp3lRX40CP6pwIgJ1Y2ZA7PlUEa3fH0IsX%2FsxU5mWTsy0K82HCsSlf%2FBWAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAQZ1rqhjoKcoLZ5yCrcA8WnG5mo5P5xDkn53QQXG04s6mqoB0thvEKxv2zFijFN4gnODx%2BRA2ApR5Fhk9mLOkkvq8jq3TAzURzmjSPCM4Zwr7hi2WwxdYFu%2FPkuAELt64MIjjRRTvhNaezKZrnStJwcLWllH0s2Puxq4WhsRLQjDmAdK%2BadcZ5D6KHm8kHzBl2WCRpcx0Y96JGJTEkCmmr%2BrWUmFnMo51RsXMuzrDbhw936wGLyxnGpy6Q%2BLH%2FCwxnpJ6PqJWxSfASHrz5b35XlQGSFfa8BqTGoXDiqYXTtkXrEA0GVLS8OehYCbDd5xghMOouxgN36x8cRbrSRZtrWY%2BE1LXzza9oOePiGQNynI0R7z7f6%2FnmYzR5m5mRLIkdsRkCiv3iO5iRHj4K7ZdnkjiZohCg2FJ%2FPiWuqZmVeMoInxFsmo9GxcIiQG8jKzMXbVO9W%2BsjmeXjLf2XfkoXzxgvgzk6dezB9Z4lk544%2F256NCtQNJFGgXYkuVFNb%2FpB%2FwWFNqr8pR92LWvnrdidN9jIZFvpRKSRmwmfrCKHt9ZzaxmCJZUf4keLgR4t83%2FBvBhGI%2B5JDrTSTEfdq5sXc%2F8xAZHdmk9BRL4fOar8m4RAKpd%2BxO8QMBe7Q9G5IzV8GsXaqCFyxAxxWMObXisQGOqUBvyuKK1XIbaQMVKnRb3ht%2BQcUIZDtSWRGGI5J%2FjkMFYKil9O5aPp7Emu7XJ4NBDeVYoIjDIkzduFEj4Gm0mn09TM6SV78LwXS2%2BzYImWtDEUcL%2FTOTHaHs77SVnZy6dW4nYEbJVrbi5qzfM%2FwVaJj64uw5uU%2BXfl0PtKW%2BHJ6j%2F2PhPqjJyOmO70jtjc8%2Bi6Bmq2pRWh9nC9Nhrd6AjC72l%2Fqaxjl&X-Amz-Signature=7f3e63a15a52c85f32fb4c658f825fe4b306d5553b7221ef9d1f50defa5a4d13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are many reasons for this because

- keeps all your code in one place
- You don’t need a monitor, mouse, and keyboard to connect to your Raspberry Pi
- Your laptop is much much faster than your Raspberry Pi so debugging is faster
- Once you are done developing on your laptop all you have to do is copy all the files over to the Pi and Docker will automatically make it work

{{% /alert %}}

## creating workspace + package

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

If you are doing the Dev container setup put these at the bottom of your `Dockerfile`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGZWX2L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCOaKPv54XNcpjmlG020GqsFzIDnD2pAzp3lRX40CP6pwIgJ1Y2ZA7PlUEa3fH0IsX%2FsxU5mWTsy0K82HCsSlf%2FBWAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAQZ1rqhjoKcoLZ5yCrcA8WnG5mo5P5xDkn53QQXG04s6mqoB0thvEKxv2zFijFN4gnODx%2BRA2ApR5Fhk9mLOkkvq8jq3TAzURzmjSPCM4Zwr7hi2WwxdYFu%2FPkuAELt64MIjjRRTvhNaezKZrnStJwcLWllH0s2Puxq4WhsRLQjDmAdK%2BadcZ5D6KHm8kHzBl2WCRpcx0Y96JGJTEkCmmr%2BrWUmFnMo51RsXMuzrDbhw936wGLyxnGpy6Q%2BLH%2FCwxnpJ6PqJWxSfASHrz5b35XlQGSFfa8BqTGoXDiqYXTtkXrEA0GVLS8OehYCbDd5xghMOouxgN36x8cRbrSRZtrWY%2BE1LXzza9oOePiGQNynI0R7z7f6%2FnmYzR5m5mRLIkdsRkCiv3iO5iRHj4K7ZdnkjiZohCg2FJ%2FPiWuqZmVeMoInxFsmo9GxcIiQG8jKzMXbVO9W%2BsjmeXjLf2XfkoXzxgvgzk6dezB9Z4lk544%2F256NCtQNJFGgXYkuVFNb%2FpB%2FwWFNqr8pR92LWvnrdidN9jIZFvpRKSRmwmfrCKHt9ZzaxmCJZUf4keLgR4t83%2FBvBhGI%2B5JDrTSTEfdq5sXc%2F8xAZHdmk9BRL4fOar8m4RAKpd%2BxO8QMBe7Q9G5IzV8GsXaqCFyxAxxWMObXisQGOqUBvyuKK1XIbaQMVKnRb3ht%2BQcUIZDtSWRGGI5J%2FjkMFYKil9O5aPp7Emu7XJ4NBDeVYoIjDIkzduFEj4Gm0mn09TM6SV78LwXS2%2BzYImWtDEUcL%2FTOTHaHs77SVnZy6dW4nYEbJVrbi5qzfM%2FwVaJj64uw5uU%2BXfl0PtKW%2BHJ6j%2F2PhPqjJyOmO70jtjc8%2Bi6Bmq2pRWh9nC9Nhrd6AjC72l%2Fqaxjl&X-Amz-Signature=24709e9bff7dad709c539ceb10e365ffd53c22d6a244734db9121ab8fb10cc8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGZWX2L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCOaKPv54XNcpjmlG020GqsFzIDnD2pAzp3lRX40CP6pwIgJ1Y2ZA7PlUEa3fH0IsX%2FsxU5mWTsy0K82HCsSlf%2FBWAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAQZ1rqhjoKcoLZ5yCrcA8WnG5mo5P5xDkn53QQXG04s6mqoB0thvEKxv2zFijFN4gnODx%2BRA2ApR5Fhk9mLOkkvq8jq3TAzURzmjSPCM4Zwr7hi2WwxdYFu%2FPkuAELt64MIjjRRTvhNaezKZrnStJwcLWllH0s2Puxq4WhsRLQjDmAdK%2BadcZ5D6KHm8kHzBl2WCRpcx0Y96JGJTEkCmmr%2BrWUmFnMo51RsXMuzrDbhw936wGLyxnGpy6Q%2BLH%2FCwxnpJ6PqJWxSfASHrz5b35XlQGSFfa8BqTGoXDiqYXTtkXrEA0GVLS8OehYCbDd5xghMOouxgN36x8cRbrSRZtrWY%2BE1LXzza9oOePiGQNynI0R7z7f6%2FnmYzR5m5mRLIkdsRkCiv3iO5iRHj4K7ZdnkjiZohCg2FJ%2FPiWuqZmVeMoInxFsmo9GxcIiQG8jKzMXbVO9W%2BsjmeXjLf2XfkoXzxgvgzk6dezB9Z4lk544%2F256NCtQNJFGgXYkuVFNb%2FpB%2FwWFNqr8pR92LWvnrdidN9jIZFvpRKSRmwmfrCKHt9ZzaxmCJZUf4keLgR4t83%2FBvBhGI%2B5JDrTSTEfdq5sXc%2F8xAZHdmk9BRL4fOar8m4RAKpd%2BxO8QMBe7Q9G5IzV8GsXaqCFyxAxxWMObXisQGOqUBvyuKK1XIbaQMVKnRb3ht%2BQcUIZDtSWRGGI5J%2FjkMFYKil9O5aPp7Emu7XJ4NBDeVYoIjDIkzduFEj4Gm0mn09TM6SV78LwXS2%2BzYImWtDEUcL%2FTOTHaHs77SVnZy6dW4nYEbJVrbi5qzfM%2FwVaJj64uw5uU%2BXfl0PtKW%2BHJ6j%2F2PhPqjJyOmO70jtjc8%2Bi6Bmq2pRWh9nC9Nhrd6AjC72l%2Fqaxjl&X-Amz-Signature=05e6959254b53b5234ff53302d9fbf58c05f06314bfd1d04e4ad854b07591bc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGZWX2L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCOaKPv54XNcpjmlG020GqsFzIDnD2pAzp3lRX40CP6pwIgJ1Y2ZA7PlUEa3fH0IsX%2FsxU5mWTsy0K82HCsSlf%2FBWAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAQZ1rqhjoKcoLZ5yCrcA8WnG5mo5P5xDkn53QQXG04s6mqoB0thvEKxv2zFijFN4gnODx%2BRA2ApR5Fhk9mLOkkvq8jq3TAzURzmjSPCM4Zwr7hi2WwxdYFu%2FPkuAELt64MIjjRRTvhNaezKZrnStJwcLWllH0s2Puxq4WhsRLQjDmAdK%2BadcZ5D6KHm8kHzBl2WCRpcx0Y96JGJTEkCmmr%2BrWUmFnMo51RsXMuzrDbhw936wGLyxnGpy6Q%2BLH%2FCwxnpJ6PqJWxSfASHrz5b35XlQGSFfa8BqTGoXDiqYXTtkXrEA0GVLS8OehYCbDd5xghMOouxgN36x8cRbrSRZtrWY%2BE1LXzza9oOePiGQNynI0R7z7f6%2FnmYzR5m5mRLIkdsRkCiv3iO5iRHj4K7ZdnkjiZohCg2FJ%2FPiWuqZmVeMoInxFsmo9GxcIiQG8jKzMXbVO9W%2BsjmeXjLf2XfkoXzxgvgzk6dezB9Z4lk544%2F256NCtQNJFGgXYkuVFNb%2FpB%2FwWFNqr8pR92LWvnrdidN9jIZFvpRKSRmwmfrCKHt9ZzaxmCJZUf4keLgR4t83%2FBvBhGI%2B5JDrTSTEfdq5sXc%2F8xAZHdmk9BRL4fOar8m4RAKpd%2BxO8QMBe7Q9G5IzV8GsXaqCFyxAxxWMObXisQGOqUBvyuKK1XIbaQMVKnRb3ht%2BQcUIZDtSWRGGI5J%2FjkMFYKil9O5aPp7Emu7XJ4NBDeVYoIjDIkzduFEj4Gm0mn09TM6SV78LwXS2%2BzYImWtDEUcL%2FTOTHaHs77SVnZy6dW4nYEbJVrbi5qzfM%2FwVaJj64uw5uU%2BXfl0PtKW%2BHJ6j%2F2PhPqjJyOmO70jtjc8%2Bi6Bmq2pRWh9nC9Nhrd6AjC72l%2Fqaxjl&X-Amz-Signature=e0d65dfece5643d57b30788f4b8dfd0307b5ab1c79d5a2e56b340a070b391b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGZWX2L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCOaKPv54XNcpjmlG020GqsFzIDnD2pAzp3lRX40CP6pwIgJ1Y2ZA7PlUEa3fH0IsX%2FsxU5mWTsy0K82HCsSlf%2FBWAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAQZ1rqhjoKcoLZ5yCrcA8WnG5mo5P5xDkn53QQXG04s6mqoB0thvEKxv2zFijFN4gnODx%2BRA2ApR5Fhk9mLOkkvq8jq3TAzURzmjSPCM4Zwr7hi2WwxdYFu%2FPkuAELt64MIjjRRTvhNaezKZrnStJwcLWllH0s2Puxq4WhsRLQjDmAdK%2BadcZ5D6KHm8kHzBl2WCRpcx0Y96JGJTEkCmmr%2BrWUmFnMo51RsXMuzrDbhw936wGLyxnGpy6Q%2BLH%2FCwxnpJ6PqJWxSfASHrz5b35XlQGSFfa8BqTGoXDiqYXTtkXrEA0GVLS8OehYCbDd5xghMOouxgN36x8cRbrSRZtrWY%2BE1LXzza9oOePiGQNynI0R7z7f6%2FnmYzR5m5mRLIkdsRkCiv3iO5iRHj4K7ZdnkjiZohCg2FJ%2FPiWuqZmVeMoInxFsmo9GxcIiQG8jKzMXbVO9W%2BsjmeXjLf2XfkoXzxgvgzk6dezB9Z4lk544%2F256NCtQNJFGgXYkuVFNb%2FpB%2FwWFNqr8pR92LWvnrdidN9jIZFvpRKSRmwmfrCKHt9ZzaxmCJZUf4keLgR4t83%2FBvBhGI%2B5JDrTSTEfdq5sXc%2F8xAZHdmk9BRL4fOar8m4RAKpd%2BxO8QMBe7Q9G5IzV8GsXaqCFyxAxxWMObXisQGOqUBvyuKK1XIbaQMVKnRb3ht%2BQcUIZDtSWRGGI5J%2FjkMFYKil9O5aPp7Emu7XJ4NBDeVYoIjDIkzduFEj4Gm0mn09TM6SV78LwXS2%2BzYImWtDEUcL%2FTOTHaHs77SVnZy6dW4nYEbJVrbi5qzfM%2FwVaJj64uw5uU%2BXfl0PtKW%2BHJ6j%2F2PhPqjJyOmO70jtjc8%2Bi6Bmq2pRWh9nC9Nhrd6AjC72l%2Fqaxjl&X-Amz-Signature=dea29372b22d801b3b0c40a57c6ff61c5fc5ebd2bd6d366c574bc76bb9ac8750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

make a folder in `mbot_pkg` called description and a file called `mbot_description.urdf`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGZWX2L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCOaKPv54XNcpjmlG020GqsFzIDnD2pAzp3lRX40CP6pwIgJ1Y2ZA7PlUEa3fH0IsX%2FsxU5mWTsy0K82HCsSlf%2FBWAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAQZ1rqhjoKcoLZ5yCrcA8WnG5mo5P5xDkn53QQXG04s6mqoB0thvEKxv2zFijFN4gnODx%2BRA2ApR5Fhk9mLOkkvq8jq3TAzURzmjSPCM4Zwr7hi2WwxdYFu%2FPkuAELt64MIjjRRTvhNaezKZrnStJwcLWllH0s2Puxq4WhsRLQjDmAdK%2BadcZ5D6KHm8kHzBl2WCRpcx0Y96JGJTEkCmmr%2BrWUmFnMo51RsXMuzrDbhw936wGLyxnGpy6Q%2BLH%2FCwxnpJ6PqJWxSfASHrz5b35XlQGSFfa8BqTGoXDiqYXTtkXrEA0GVLS8OehYCbDd5xghMOouxgN36x8cRbrSRZtrWY%2BE1LXzza9oOePiGQNynI0R7z7f6%2FnmYzR5m5mRLIkdsRkCiv3iO5iRHj4K7ZdnkjiZohCg2FJ%2FPiWuqZmVeMoInxFsmo9GxcIiQG8jKzMXbVO9W%2BsjmeXjLf2XfkoXzxgvgzk6dezB9Z4lk544%2F256NCtQNJFGgXYkuVFNb%2FpB%2FwWFNqr8pR92LWvnrdidN9jIZFvpRKSRmwmfrCKHt9ZzaxmCJZUf4keLgR4t83%2FBvBhGI%2B5JDrTSTEfdq5sXc%2F8xAZHdmk9BRL4fOar8m4RAKpd%2BxO8QMBe7Q9G5IzV8GsXaqCFyxAxxWMObXisQGOqUBvyuKK1XIbaQMVKnRb3ht%2BQcUIZDtSWRGGI5J%2FjkMFYKil9O5aPp7Emu7XJ4NBDeVYoIjDIkzduFEj4Gm0mn09TM6SV78LwXS2%2BzYImWtDEUcL%2FTOTHaHs77SVnZy6dW4nYEbJVrbi5qzfM%2FwVaJj64uw5uU%2BXfl0PtKW%2BHJ6j%2F2PhPqjJyOmO70jtjc8%2Bi6Bmq2pRWh9nC9Nhrd6AjC72l%2Fqaxjl&X-Amz-Signature=b402e2ebe9764940c38f121b7aaa73fe30aa68631540599a10cad8e93628b107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGZWX2L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCOaKPv54XNcpjmlG020GqsFzIDnD2pAzp3lRX40CP6pwIgJ1Y2ZA7PlUEa3fH0IsX%2FsxU5mWTsy0K82HCsSlf%2FBWAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAQZ1rqhjoKcoLZ5yCrcA8WnG5mo5P5xDkn53QQXG04s6mqoB0thvEKxv2zFijFN4gnODx%2BRA2ApR5Fhk9mLOkkvq8jq3TAzURzmjSPCM4Zwr7hi2WwxdYFu%2FPkuAELt64MIjjRRTvhNaezKZrnStJwcLWllH0s2Puxq4WhsRLQjDmAdK%2BadcZ5D6KHm8kHzBl2WCRpcx0Y96JGJTEkCmmr%2BrWUmFnMo51RsXMuzrDbhw936wGLyxnGpy6Q%2BLH%2FCwxnpJ6PqJWxSfASHrz5b35XlQGSFfa8BqTGoXDiqYXTtkXrEA0GVLS8OehYCbDd5xghMOouxgN36x8cRbrSRZtrWY%2BE1LXzza9oOePiGQNynI0R7z7f6%2FnmYzR5m5mRLIkdsRkCiv3iO5iRHj4K7ZdnkjiZohCg2FJ%2FPiWuqZmVeMoInxFsmo9GxcIiQG8jKzMXbVO9W%2BsjmeXjLf2XfkoXzxgvgzk6dezB9Z4lk544%2F256NCtQNJFGgXYkuVFNb%2FpB%2FwWFNqr8pR92LWvnrdidN9jIZFvpRKSRmwmfrCKHt9ZzaxmCJZUf4keLgR4t83%2FBvBhGI%2B5JDrTSTEfdq5sXc%2F8xAZHdmk9BRL4fOar8m4RAKpd%2BxO8QMBe7Q9G5IzV8GsXaqCFyxAxxWMObXisQGOqUBvyuKK1XIbaQMVKnRb3ht%2BQcUIZDtSWRGGI5J%2FjkMFYKil9O5aPp7Emu7XJ4NBDeVYoIjDIkzduFEj4Gm0mn09TM6SV78LwXS2%2BzYImWtDEUcL%2FTOTHaHs77SVnZy6dW4nYEbJVrbi5qzfM%2FwVaJj64uw5uU%2BXfl0PtKW%2BHJ6j%2F2PhPqjJyOmO70jtjc8%2Bi6Bmq2pRWh9nC9Nhrd6AjC72l%2Fqaxjl&X-Amz-Signature=93efcc15d08c9d54befb7af65a7df16adb2cf27e6ff9f5737fc77d787020e807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGZWX2L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCOaKPv54XNcpjmlG020GqsFzIDnD2pAzp3lRX40CP6pwIgJ1Y2ZA7PlUEa3fH0IsX%2FsxU5mWTsy0K82HCsSlf%2FBWAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAQZ1rqhjoKcoLZ5yCrcA8WnG5mo5P5xDkn53QQXG04s6mqoB0thvEKxv2zFijFN4gnODx%2BRA2ApR5Fhk9mLOkkvq8jq3TAzURzmjSPCM4Zwr7hi2WwxdYFu%2FPkuAELt64MIjjRRTvhNaezKZrnStJwcLWllH0s2Puxq4WhsRLQjDmAdK%2BadcZ5D6KHm8kHzBl2WCRpcx0Y96JGJTEkCmmr%2BrWUmFnMo51RsXMuzrDbhw936wGLyxnGpy6Q%2BLH%2FCwxnpJ6PqJWxSfASHrz5b35XlQGSFfa8BqTGoXDiqYXTtkXrEA0GVLS8OehYCbDd5xghMOouxgN36x8cRbrSRZtrWY%2BE1LXzza9oOePiGQNynI0R7z7f6%2FnmYzR5m5mRLIkdsRkCiv3iO5iRHj4K7ZdnkjiZohCg2FJ%2FPiWuqZmVeMoInxFsmo9GxcIiQG8jKzMXbVO9W%2BsjmeXjLf2XfkoXzxgvgzk6dezB9Z4lk544%2F256NCtQNJFGgXYkuVFNb%2FpB%2FwWFNqr8pR92LWvnrdidN9jIZFvpRKSRmwmfrCKHt9ZzaxmCJZUf4keLgR4t83%2FBvBhGI%2B5JDrTSTEfdq5sXc%2F8xAZHdmk9BRL4fOar8m4RAKpd%2BxO8QMBe7Q9G5IzV8GsXaqCFyxAxxWMObXisQGOqUBvyuKK1XIbaQMVKnRb3ht%2BQcUIZDtSWRGGI5J%2FjkMFYKil9O5aPp7Emu7XJ4NBDeVYoIjDIkzduFEj4Gm0mn09TM6SV78LwXS2%2BzYImWtDEUcL%2FTOTHaHs77SVnZy6dW4nYEbJVrbi5qzfM%2FwVaJj64uw5uU%2BXfl0PtKW%2BHJ6j%2F2PhPqjJyOmO70jtjc8%2Bi6Bmq2pRWh9nC9Nhrd6AjC72l%2Fqaxjl&X-Amz-Signature=1ef117a254fb31f2b93eb282c35e7f696892a0294aa11e7e192f8be08fff6310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGZWX2L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCOaKPv54XNcpjmlG020GqsFzIDnD2pAzp3lRX40CP6pwIgJ1Y2ZA7PlUEa3fH0IsX%2FsxU5mWTsy0K82HCsSlf%2FBWAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAQZ1rqhjoKcoLZ5yCrcA8WnG5mo5P5xDkn53QQXG04s6mqoB0thvEKxv2zFijFN4gnODx%2BRA2ApR5Fhk9mLOkkvq8jq3TAzURzmjSPCM4Zwr7hi2WwxdYFu%2FPkuAELt64MIjjRRTvhNaezKZrnStJwcLWllH0s2Puxq4WhsRLQjDmAdK%2BadcZ5D6KHm8kHzBl2WCRpcx0Y96JGJTEkCmmr%2BrWUmFnMo51RsXMuzrDbhw936wGLyxnGpy6Q%2BLH%2FCwxnpJ6PqJWxSfASHrz5b35XlQGSFfa8BqTGoXDiqYXTtkXrEA0GVLS8OehYCbDd5xghMOouxgN36x8cRbrSRZtrWY%2BE1LXzza9oOePiGQNynI0R7z7f6%2FnmYzR5m5mRLIkdsRkCiv3iO5iRHj4K7ZdnkjiZohCg2FJ%2FPiWuqZmVeMoInxFsmo9GxcIiQG8jKzMXbVO9W%2BsjmeXjLf2XfkoXzxgvgzk6dezB9Z4lk544%2F256NCtQNJFGgXYkuVFNb%2FpB%2FwWFNqr8pR92LWvnrdidN9jIZFvpRKSRmwmfrCKHt9ZzaxmCJZUf4keLgR4t83%2FBvBhGI%2B5JDrTSTEfdq5sXc%2F8xAZHdmk9BRL4fOar8m4RAKpd%2BxO8QMBe7Q9G5IzV8GsXaqCFyxAxxWMObXisQGOqUBvyuKK1XIbaQMVKnRb3ht%2BQcUIZDtSWRGGI5J%2FjkMFYKil9O5aPp7Emu7XJ4NBDeVYoIjDIkzduFEj4Gm0mn09TM6SV78LwXS2%2BzYImWtDEUcL%2FTOTHaHs77SVnZy6dW4nYEbJVrbi5qzfM%2FwVaJj64uw5uU%2BXfl0PtKW%2BHJ6j%2F2PhPqjJyOmO70jtjc8%2Bi6Bmq2pRWh9nC9Nhrd6AjC72l%2Fqaxjl&X-Amz-Signature=1357357bcab14bd11e0058c7cf976b3543edc69f29d5c45f28c62ae932d57c7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`joint`**_**`_`**_**`state_publisher_gui`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGZWX2L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCOaKPv54XNcpjmlG020GqsFzIDnD2pAzp3lRX40CP6pwIgJ1Y2ZA7PlUEa3fH0IsX%2FsxU5mWTsy0K82HCsSlf%2FBWAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAQZ1rqhjoKcoLZ5yCrcA8WnG5mo5P5xDkn53QQXG04s6mqoB0thvEKxv2zFijFN4gnODx%2BRA2ApR5Fhk9mLOkkvq8jq3TAzURzmjSPCM4Zwr7hi2WwxdYFu%2FPkuAELt64MIjjRRTvhNaezKZrnStJwcLWllH0s2Puxq4WhsRLQjDmAdK%2BadcZ5D6KHm8kHzBl2WCRpcx0Y96JGJTEkCmmr%2BrWUmFnMo51RsXMuzrDbhw936wGLyxnGpy6Q%2BLH%2FCwxnpJ6PqJWxSfASHrz5b35XlQGSFfa8BqTGoXDiqYXTtkXrEA0GVLS8OehYCbDd5xghMOouxgN36x8cRbrSRZtrWY%2BE1LXzza9oOePiGQNynI0R7z7f6%2FnmYzR5m5mRLIkdsRkCiv3iO5iRHj4K7ZdnkjiZohCg2FJ%2FPiWuqZmVeMoInxFsmo9GxcIiQG8jKzMXbVO9W%2BsjmeXjLf2XfkoXzxgvgzk6dezB9Z4lk544%2F256NCtQNJFGgXYkuVFNb%2FpB%2FwWFNqr8pR92LWvnrdidN9jIZFvpRKSRmwmfrCKHt9ZzaxmCJZUf4keLgR4t83%2FBvBhGI%2B5JDrTSTEfdq5sXc%2F8xAZHdmk9BRL4fOar8m4RAKpd%2BxO8QMBe7Q9G5IzV8GsXaqCFyxAxxWMObXisQGOqUBvyuKK1XIbaQMVKnRb3ht%2BQcUIZDtSWRGGI5J%2FjkMFYKil9O5aPp7Emu7XJ4NBDeVYoIjDIkzduFEj4Gm0mn09TM6SV78LwXS2%2BzYImWtDEUcL%2FTOTHaHs77SVnZy6dW4nYEbJVrbi5qzfM%2FwVaJj64uw5uU%2BXfl0PtKW%2BHJ6j%2F2PhPqjJyOmO70jtjc8%2Bi6Bmq2pRWh9nC9Nhrd6AjC72l%2Fqaxjl&X-Amz-Signature=58caffd9abcc254ca600d7ef73ad3cae5b99b591c59c03eb0dd359e1bc7b5495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGZWX2L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCOaKPv54XNcpjmlG020GqsFzIDnD2pAzp3lRX40CP6pwIgJ1Y2ZA7PlUEa3fH0IsX%2FsxU5mWTsy0K82HCsSlf%2FBWAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAQZ1rqhjoKcoLZ5yCrcA8WnG5mo5P5xDkn53QQXG04s6mqoB0thvEKxv2zFijFN4gnODx%2BRA2ApR5Fhk9mLOkkvq8jq3TAzURzmjSPCM4Zwr7hi2WwxdYFu%2FPkuAELt64MIjjRRTvhNaezKZrnStJwcLWllH0s2Puxq4WhsRLQjDmAdK%2BadcZ5D6KHm8kHzBl2WCRpcx0Y96JGJTEkCmmr%2BrWUmFnMo51RsXMuzrDbhw936wGLyxnGpy6Q%2BLH%2FCwxnpJ6PqJWxSfASHrz5b35XlQGSFfa8BqTGoXDiqYXTtkXrEA0GVLS8OehYCbDd5xghMOouxgN36x8cRbrSRZtrWY%2BE1LXzza9oOePiGQNynI0R7z7f6%2FnmYzR5m5mRLIkdsRkCiv3iO5iRHj4K7ZdnkjiZohCg2FJ%2FPiWuqZmVeMoInxFsmo9GxcIiQG8jKzMXbVO9W%2BsjmeXjLf2XfkoXzxgvgzk6dezB9Z4lk544%2F256NCtQNJFGgXYkuVFNb%2FpB%2FwWFNqr8pR92LWvnrdidN9jIZFvpRKSRmwmfrCKHt9ZzaxmCJZUf4keLgR4t83%2FBvBhGI%2B5JDrTSTEfdq5sXc%2F8xAZHdmk9BRL4fOar8m4RAKpd%2BxO8QMBe7Q9G5IzV8GsXaqCFyxAxxWMObXisQGOqUBvyuKK1XIbaQMVKnRb3ht%2BQcUIZDtSWRGGI5J%2FjkMFYKil9O5aPp7Emu7XJ4NBDeVYoIjDIkzduFEj4Gm0mn09TM6SV78LwXS2%2BzYImWtDEUcL%2FTOTHaHs77SVnZy6dW4nYEbJVrbi5qzfM%2FwVaJj64uw5uU%2BXfl0PtKW%2BHJ6j%2F2PhPqjJyOmO70jtjc8%2Bi6Bmq2pRWh9nC9Nhrd6AjC72l%2Fqaxjl&X-Amz-Signature=6c4d2de2027709803e8ccdc0f44c2d7b9e8781ec04a60c2107d212fee9f4a509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGZWX2L%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCOaKPv54XNcpjmlG020GqsFzIDnD2pAzp3lRX40CP6pwIgJ1Y2ZA7PlUEa3fH0IsX%2FsxU5mWTsy0K82HCsSlf%2FBWAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDAQZ1rqhjoKcoLZ5yCrcA8WnG5mo5P5xDkn53QQXG04s6mqoB0thvEKxv2zFijFN4gnODx%2BRA2ApR5Fhk9mLOkkvq8jq3TAzURzmjSPCM4Zwr7hi2WwxdYFu%2FPkuAELt64MIjjRRTvhNaezKZrnStJwcLWllH0s2Puxq4WhsRLQjDmAdK%2BadcZ5D6KHm8kHzBl2WCRpcx0Y96JGJTEkCmmr%2BrWUmFnMo51RsXMuzrDbhw936wGLyxnGpy6Q%2BLH%2FCwxnpJ6PqJWxSfASHrz5b35XlQGSFfa8BqTGoXDiqYXTtkXrEA0GVLS8OehYCbDd5xghMOouxgN36x8cRbrSRZtrWY%2BE1LXzza9oOePiGQNynI0R7z7f6%2FnmYzR5m5mRLIkdsRkCiv3iO5iRHj4K7ZdnkjiZohCg2FJ%2FPiWuqZmVeMoInxFsmo9GxcIiQG8jKzMXbVO9W%2BsjmeXjLf2XfkoXzxgvgzk6dezB9Z4lk544%2F256NCtQNJFGgXYkuVFNb%2FpB%2FwWFNqr8pR92LWvnrdidN9jIZFvpRKSRmwmfrCKHt9ZzaxmCJZUf4keLgR4t83%2FBvBhGI%2B5JDrTSTEfdq5sXc%2F8xAZHdmk9BRL4fOar8m4RAKpd%2BxO8QMBe7Q9G5IzV8GsXaqCFyxAxxWMObXisQGOqUBvyuKK1XIbaQMVKnRb3ht%2BQcUIZDtSWRGGI5J%2FjkMFYKil9O5aPp7Emu7XJ4NBDeVYoIjDIkzduFEj4Gm0mn09TM6SV78LwXS2%2BzYImWtDEUcL%2FTOTHaHs77SVnZy6dW4nYEbJVrbi5qzfM%2FwVaJj64uw5uU%2BXfl0PtKW%2BHJ6j%2F2PhPqjJyOmO70jtjc8%2Bi6Bmq2pRWh9nC9Nhrd6AjC72l%2Fqaxjl&X-Amz-Signature=198f72c2fad94381ad2b3bad0f587c81c4b22e3b775185f67acd36997b4ad3e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCPNI6H%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD97UI2xk9KY368yqcQmYWwLBoCrwWAmqKC3j0iVeRdgAIhAPm18Mt%2FDP6Kp4cE84rR2SzIK%2FKXtL08d0j03ltw%2FEJlKv8DCDcQABoMNjM3NDIzMTgzODA1Igz5olsEfOU5QeugHuQq3APEhv2lieY8XInBzfGXSSBR6dOwN5OYdTHLA1tg4NM0ZqGXH6juramoRMaZcVmXA7%2FHFj9nV6Zit%2FS6RVo0ZGjoW9Ri2LCaN4oefYP07JRbJLmogs%2FZ195CHaV4%2B0qqC2JXalnWoFd6o0mRLYI6y9yuWQOHFoA3vzxIq4exzyS6QxNvjDTo59OIle2%2Fnr2qiZ5CGgj5AcNq7iOIjr%2Fz8CsuaL4mBPb9HOCRddS8xV0GJeZ%2B%2BW4i3YoNRgExMccBzW1ra4hNikCo21FkfKtjbDn0oP7ovzMB%2Fjr029lYwmvff1UHbQvcbfIA79Fu3Ri7PYP4yjPOUjXBJ6plAxGxpqEVV4e53kf0WCK%2FQoib4AI6j3omXJ9WX9ggIxJPP8p%2Bbn%2BbP7UNhdPh%2F6Ih%2Ft4UBilJW4F3TXv8oQfXF5gcGGFOhuvUYDEQIsMpWQJLXf1PifOLAdXKpWp0ORQcPyTD6Xt%2F4I7EWyDig6J49LI1G8jn3%2FFNXori%2FizjN2OCTBe8nnRLJ9oU76%2FCBAgxEJSJ%2BKAVEXuBdmR3Qf7erkVyHswBT3NdYpmz56JymELGmrQ1Hrt%2FZTdsqcmd51GsGdFKy55LrUTOFLdnQc6A8HxcAFA1FjSBGBkdWpOA7TSu0jCH2IrEBjqkAfmgTFVCMYXKF50dbhyRcA%2FO4OGZlsg945A8QPmCeo39%2FHS717MQRSZUaMH6IjRZDIT3z8YCIVOQlb8ERgHtz0oAhE3tpEtloQAez4d%2BFLDGIe97gOzwl4hStT3S37prJsPj9OKiOw43obie6q7mDnQwLzM3yPA3d9k4FunPtimhEC51J%2BtCCvTUBw3cLd2lsWNNl5W%2Bi1MD3HHSchbiSnDPKHlx&X-Amz-Signature=62f29c49573b254d2fc824a27dc68656de413f06322a75e3b8a8992596d4dbca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCPNI6H%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD97UI2xk9KY368yqcQmYWwLBoCrwWAmqKC3j0iVeRdgAIhAPm18Mt%2FDP6Kp4cE84rR2SzIK%2FKXtL08d0j03ltw%2FEJlKv8DCDcQABoMNjM3NDIzMTgzODA1Igz5olsEfOU5QeugHuQq3APEhv2lieY8XInBzfGXSSBR6dOwN5OYdTHLA1tg4NM0ZqGXH6juramoRMaZcVmXA7%2FHFj9nV6Zit%2FS6RVo0ZGjoW9Ri2LCaN4oefYP07JRbJLmogs%2FZ195CHaV4%2B0qqC2JXalnWoFd6o0mRLYI6y9yuWQOHFoA3vzxIq4exzyS6QxNvjDTo59OIle2%2Fnr2qiZ5CGgj5AcNq7iOIjr%2Fz8CsuaL4mBPb9HOCRddS8xV0GJeZ%2B%2BW4i3YoNRgExMccBzW1ra4hNikCo21FkfKtjbDn0oP7ovzMB%2Fjr029lYwmvff1UHbQvcbfIA79Fu3Ri7PYP4yjPOUjXBJ6plAxGxpqEVV4e53kf0WCK%2FQoib4AI6j3omXJ9WX9ggIxJPP8p%2Bbn%2BbP7UNhdPh%2F6Ih%2Ft4UBilJW4F3TXv8oQfXF5gcGGFOhuvUYDEQIsMpWQJLXf1PifOLAdXKpWp0ORQcPyTD6Xt%2F4I7EWyDig6J49LI1G8jn3%2FFNXori%2FizjN2OCTBe8nnRLJ9oU76%2FCBAgxEJSJ%2BKAVEXuBdmR3Qf7erkVyHswBT3NdYpmz56JymELGmrQ1Hrt%2FZTdsqcmd51GsGdFKy55LrUTOFLdnQc6A8HxcAFA1FjSBGBkdWpOA7TSu0jCH2IrEBjqkAfmgTFVCMYXKF50dbhyRcA%2FO4OGZlsg945A8QPmCeo39%2FHS717MQRSZUaMH6IjRZDIT3z8YCIVOQlb8ERgHtz0oAhE3tpEtloQAez4d%2BFLDGIe97gOzwl4hStT3S37prJsPj9OKiOw43obie6q7mDnQwLzM3yPA3d9k4FunPtimhEC51J%2BtCCvTUBw3cLd2lsWNNl5W%2Bi1MD3HHSchbiSnDPKHlx&X-Amz-Signature=5881f1f6b9a798241188b09cdbfa8ea2d16df537a0aecd8206500d8205808fce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## launch file

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

## add new files to `setup.py` 

if we add new files types to the package we need to update the `setup.py` and rebuild

```python

from setuptools import find_packages, setup
import os
from glob import glob

files = []
for full_filepath in glob('**/*.*', recursive=True):
    filepath = os.path.split(full_filepath)
    if filepath[0] != '':
        result = (os.path.join('share', package_name, filepath[0]), [full_filepath])
        files.append(result)

package_name = 'mbot_pkg'

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

**run:**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCPNI6H%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD97UI2xk9KY368yqcQmYWwLBoCrwWAmqKC3j0iVeRdgAIhAPm18Mt%2FDP6Kp4cE84rR2SzIK%2FKXtL08d0j03ltw%2FEJlKv8DCDcQABoMNjM3NDIzMTgzODA1Igz5olsEfOU5QeugHuQq3APEhv2lieY8XInBzfGXSSBR6dOwN5OYdTHLA1tg4NM0ZqGXH6juramoRMaZcVmXA7%2FHFj9nV6Zit%2FS6RVo0ZGjoW9Ri2LCaN4oefYP07JRbJLmogs%2FZ195CHaV4%2B0qqC2JXalnWoFd6o0mRLYI6y9yuWQOHFoA3vzxIq4exzyS6QxNvjDTo59OIle2%2Fnr2qiZ5CGgj5AcNq7iOIjr%2Fz8CsuaL4mBPb9HOCRddS8xV0GJeZ%2B%2BW4i3YoNRgExMccBzW1ra4hNikCo21FkfKtjbDn0oP7ovzMB%2Fjr029lYwmvff1UHbQvcbfIA79Fu3Ri7PYP4yjPOUjXBJ6plAxGxpqEVV4e53kf0WCK%2FQoib4AI6j3omXJ9WX9ggIxJPP8p%2Bbn%2BbP7UNhdPh%2F6Ih%2Ft4UBilJW4F3TXv8oQfXF5gcGGFOhuvUYDEQIsMpWQJLXf1PifOLAdXKpWp0ORQcPyTD6Xt%2F4I7EWyDig6J49LI1G8jn3%2FFNXori%2FizjN2OCTBe8nnRLJ9oU76%2FCBAgxEJSJ%2BKAVEXuBdmR3Qf7erkVyHswBT3NdYpmz56JymELGmrQ1Hrt%2FZTdsqcmd51GsGdFKy55LrUTOFLdnQc6A8HxcAFA1FjSBGBkdWpOA7TSu0jCH2IrEBjqkAfmgTFVCMYXKF50dbhyRcA%2FO4OGZlsg945A8QPmCeo39%2FHS717MQRSZUaMH6IjRZDIT3z8YCIVOQlb8ERgHtz0oAhE3tpEtloQAez4d%2BFLDGIe97gOzwl4hStT3S37prJsPj9OKiOw43obie6q7mDnQwLzM3yPA3d9k4FunPtimhEC51J%2BtCCvTUBw3cLd2lsWNNl5W%2Bi1MD3HHSchbiSnDPKHlx&X-Amz-Signature=2bb753a3e692ad7997f79d854f64c8f8c7183a4e13002552880b263546dec987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running

In a new terminal tab while `rviz` is still open run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCPNI6H%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD97UI2xk9KY368yqcQmYWwLBoCrwWAmqKC3j0iVeRdgAIhAPm18Mt%2FDP6Kp4cE84rR2SzIK%2FKXtL08d0j03ltw%2FEJlKv8DCDcQABoMNjM3NDIzMTgzODA1Igz5olsEfOU5QeugHuQq3APEhv2lieY8XInBzfGXSSBR6dOwN5OYdTHLA1tg4NM0ZqGXH6juramoRMaZcVmXA7%2FHFj9nV6Zit%2FS6RVo0ZGjoW9Ri2LCaN4oefYP07JRbJLmogs%2FZ195CHaV4%2B0qqC2JXalnWoFd6o0mRLYI6y9yuWQOHFoA3vzxIq4exzyS6QxNvjDTo59OIle2%2Fnr2qiZ5CGgj5AcNq7iOIjr%2Fz8CsuaL4mBPb9HOCRddS8xV0GJeZ%2B%2BW4i3YoNRgExMccBzW1ra4hNikCo21FkfKtjbDn0oP7ovzMB%2Fjr029lYwmvff1UHbQvcbfIA79Fu3Ri7PYP4yjPOUjXBJ6plAxGxpqEVV4e53kf0WCK%2FQoib4AI6j3omXJ9WX9ggIxJPP8p%2Bbn%2BbP7UNhdPh%2F6Ih%2Ft4UBilJW4F3TXv8oQfXF5gcGGFOhuvUYDEQIsMpWQJLXf1PifOLAdXKpWp0ORQcPyTD6Xt%2F4I7EWyDig6J49LI1G8jn3%2FFNXori%2FizjN2OCTBe8nnRLJ9oU76%2FCBAgxEJSJ%2BKAVEXuBdmR3Qf7erkVyHswBT3NdYpmz56JymELGmrQ1Hrt%2FZTdsqcmd51GsGdFKy55LrUTOFLdnQc6A8HxcAFA1FjSBGBkdWpOA7TSu0jCH2IrEBjqkAfmgTFVCMYXKF50dbhyRcA%2FO4OGZlsg945A8QPmCeo39%2FHS717MQRSZUaMH6IjRZDIT3z8YCIVOQlb8ERgHtz0oAhE3tpEtloQAez4d%2BFLDGIe97gOzwl4hStT3S37prJsPj9OKiOw43obie6q7mDnQwLzM3yPA3d9k4FunPtimhEC51J%2BtCCvTUBw3cLd2lsWNNl5W%2Bi1MD3HHSchbiSnDPKHlx&X-Amz-Signature=889eab97f432e43bc114d7106222ce880f6a659f03fd3f9ee3608fd48570f649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCPNI6H%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD97UI2xk9KY368yqcQmYWwLBoCrwWAmqKC3j0iVeRdgAIhAPm18Mt%2FDP6Kp4cE84rR2SzIK%2FKXtL08d0j03ltw%2FEJlKv8DCDcQABoMNjM3NDIzMTgzODA1Igz5olsEfOU5QeugHuQq3APEhv2lieY8XInBzfGXSSBR6dOwN5OYdTHLA1tg4NM0ZqGXH6juramoRMaZcVmXA7%2FHFj9nV6Zit%2FS6RVo0ZGjoW9Ri2LCaN4oefYP07JRbJLmogs%2FZ195CHaV4%2B0qqC2JXalnWoFd6o0mRLYI6y9yuWQOHFoA3vzxIq4exzyS6QxNvjDTo59OIle2%2Fnr2qiZ5CGgj5AcNq7iOIjr%2Fz8CsuaL4mBPb9HOCRddS8xV0GJeZ%2B%2BW4i3YoNRgExMccBzW1ra4hNikCo21FkfKtjbDn0oP7ovzMB%2Fjr029lYwmvff1UHbQvcbfIA79Fu3Ri7PYP4yjPOUjXBJ6plAxGxpqEVV4e53kf0WCK%2FQoib4AI6j3omXJ9WX9ggIxJPP8p%2Bbn%2BbP7UNhdPh%2F6Ih%2Ft4UBilJW4F3TXv8oQfXF5gcGGFOhuvUYDEQIsMpWQJLXf1PifOLAdXKpWp0ORQcPyTD6Xt%2F4I7EWyDig6J49LI1G8jn3%2FFNXori%2FizjN2OCTBe8nnRLJ9oU76%2FCBAgxEJSJ%2BKAVEXuBdmR3Qf7erkVyHswBT3NdYpmz56JymELGmrQ1Hrt%2FZTdsqcmd51GsGdFKy55LrUTOFLdnQc6A8HxcAFA1FjSBGBkdWpOA7TSu0jCH2IrEBjqkAfmgTFVCMYXKF50dbhyRcA%2FO4OGZlsg945A8QPmCeo39%2FHS717MQRSZUaMH6IjRZDIT3z8YCIVOQlb8ERgHtz0oAhE3tpEtloQAez4d%2BFLDGIe97gOzwl4hStT3S37prJsPj9OKiOw43obie6q7mDnQwLzM3yPA3d9k4FunPtimhEC51J%2BtCCvTUBw3cLd2lsWNNl5W%2Bi1MD3HHSchbiSnDPKHlx&X-Amz-Signature=65c42e9354bb8e503da188cb830f9f40fa40c9cd1db1e48e878a7069a2494fd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCPNI6H%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD97UI2xk9KY368yqcQmYWwLBoCrwWAmqKC3j0iVeRdgAIhAPm18Mt%2FDP6Kp4cE84rR2SzIK%2FKXtL08d0j03ltw%2FEJlKv8DCDcQABoMNjM3NDIzMTgzODA1Igz5olsEfOU5QeugHuQq3APEhv2lieY8XInBzfGXSSBR6dOwN5OYdTHLA1tg4NM0ZqGXH6juramoRMaZcVmXA7%2FHFj9nV6Zit%2FS6RVo0ZGjoW9Ri2LCaN4oefYP07JRbJLmogs%2FZ195CHaV4%2B0qqC2JXalnWoFd6o0mRLYI6y9yuWQOHFoA3vzxIq4exzyS6QxNvjDTo59OIle2%2Fnr2qiZ5CGgj5AcNq7iOIjr%2Fz8CsuaL4mBPb9HOCRddS8xV0GJeZ%2B%2BW4i3YoNRgExMccBzW1ra4hNikCo21FkfKtjbDn0oP7ovzMB%2Fjr029lYwmvff1UHbQvcbfIA79Fu3Ri7PYP4yjPOUjXBJ6plAxGxpqEVV4e53kf0WCK%2FQoib4AI6j3omXJ9WX9ggIxJPP8p%2Bbn%2BbP7UNhdPh%2F6Ih%2Ft4UBilJW4F3TXv8oQfXF5gcGGFOhuvUYDEQIsMpWQJLXf1PifOLAdXKpWp0ORQcPyTD6Xt%2F4I7EWyDig6J49LI1G8jn3%2FFNXori%2FizjN2OCTBe8nnRLJ9oU76%2FCBAgxEJSJ%2BKAVEXuBdmR3Qf7erkVyHswBT3NdYpmz56JymELGmrQ1Hrt%2FZTdsqcmd51GsGdFKy55LrUTOFLdnQc6A8HxcAFA1FjSBGBkdWpOA7TSu0jCH2IrEBjqkAfmgTFVCMYXKF50dbhyRcA%2FO4OGZlsg945A8QPmCeo39%2FHS717MQRSZUaMH6IjRZDIT3z8YCIVOQlb8ERgHtz0oAhE3tpEtloQAez4d%2BFLDGIe97gOzwl4hStT3S37prJsPj9OKiOw43obie6q7mDnQwLzM3yPA3d9k4FunPtimhEC51J%2BtCCvTUBw3cLd2lsWNNl5W%2Bi1MD3HHSchbiSnDPKHlx&X-Amz-Signature=38f538df12b8181e79c8fc93fd819d2f1a893a18f47b91c26e361b3cb53b89ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
