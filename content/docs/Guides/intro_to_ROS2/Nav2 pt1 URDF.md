---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-01T02:02:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-01T02:02:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUAMKZMD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOM%2BTjqWkcopM8qhBHDJ1cAGlSqaIsxGJZnspx32LpXAiEAt2oZ7nz1ncQ%2BBr%2BA680DXjw4nVgzcMNz%2Bj82GyAkeIkqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWqRsiwyCaeVbXQhyrcA4XIRzSqGr5OfS2IFUl%2BW12%2FmoKjDMKOSpZC7TAoQZm2yH5r5ay%2BbXOl32aGtvqEdzW5tSMuqSERGsSjkwpONQCumvKbLb3FbzQfhrTIOLG%2FHnOp4MEEAZBqxpGitDundyDIxFptxytw05HXvsj1AteHynKVB2qyeNK6A9Qn8a43lyqXBGj8ZerMS3SVi2iQk2AdHW1S6VSrGNdfllrMBm49sxnvupDkLzq%2BiP8bBSGN%2FXWkmUjIRDJPe6VXzrBdKuOBFwvZfJmZfODnOzVz81Zp6kc7OlUlUKJ0umWqDgRBj2QisLj3SzOhM5QcEaJSuzJRv67eC5ucS%2FnXePytV1kYqQW%2BiQl9BKptIJyV5Ei0SgQNjT%2F75Plkcil0IZJnYeC6fwWeCfmQHgaWq2WtzR%2FmL8FD7yUgzzFbp1x0ANFBtwDeqi3MmrZ4o1GtHr9UNtsJfh3fdqyTl85sZRNeyKMmlcfwDpTBcS%2B2UscS4%2BzzTjoVbp7h%2B1xo5e1XE5axONQyjCcB0B%2BJMHeSThZ%2Brbq9i7jv6XP2Dqq6G7i7uEn0kN1DG2PmKnRJR5%2BFQTQ8%2Fx6aIyK65%2FyI10OHXM2MdEmWws18h8B1sxDDJczPQ5IMUdt%2BgH%2BM58EHS0BbMJKcscQGOqUBjq9aXtz8Du8DRlCRWCPIQxyk6mZnfwlOogQjsy5IP0mSHg8Vhado5PnrpLkEZHY%2B3wiDsqeGxxMkYTDFQ1ApWDzs2GgBk3GML3Ce1tv0U%2BJcbEilX%2F1brURzSxfP4o4lcaCqZlUcr1i8OBRlcnPiIhYD8UbIhClEJnAwNrvoWEAWg6ZBD9wWfaDnXPGj4lpFBSEYN2RN3Y9x%2BUXWfGZz2A8B4iKM&X-Amz-Signature=034dd2b8204855a27a5984ad5ef6e1134696c9b3e07902c5c06cc36cabafe2bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUAMKZMD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOM%2BTjqWkcopM8qhBHDJ1cAGlSqaIsxGJZnspx32LpXAiEAt2oZ7nz1ncQ%2BBr%2BA680DXjw4nVgzcMNz%2Bj82GyAkeIkqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWqRsiwyCaeVbXQhyrcA4XIRzSqGr5OfS2IFUl%2BW12%2FmoKjDMKOSpZC7TAoQZm2yH5r5ay%2BbXOl32aGtvqEdzW5tSMuqSERGsSjkwpONQCumvKbLb3FbzQfhrTIOLG%2FHnOp4MEEAZBqxpGitDundyDIxFptxytw05HXvsj1AteHynKVB2qyeNK6A9Qn8a43lyqXBGj8ZerMS3SVi2iQk2AdHW1S6VSrGNdfllrMBm49sxnvupDkLzq%2BiP8bBSGN%2FXWkmUjIRDJPe6VXzrBdKuOBFwvZfJmZfODnOzVz81Zp6kc7OlUlUKJ0umWqDgRBj2QisLj3SzOhM5QcEaJSuzJRv67eC5ucS%2FnXePytV1kYqQW%2BiQl9BKptIJyV5Ei0SgQNjT%2F75Plkcil0IZJnYeC6fwWeCfmQHgaWq2WtzR%2FmL8FD7yUgzzFbp1x0ANFBtwDeqi3MmrZ4o1GtHr9UNtsJfh3fdqyTl85sZRNeyKMmlcfwDpTBcS%2B2UscS4%2BzzTjoVbp7h%2B1xo5e1XE5axONQyjCcB0B%2BJMHeSThZ%2Brbq9i7jv6XP2Dqq6G7i7uEn0kN1DG2PmKnRJR5%2BFQTQ8%2Fx6aIyK65%2FyI10OHXM2MdEmWws18h8B1sxDDJczPQ5IMUdt%2BgH%2BM58EHS0BbMJKcscQGOqUBjq9aXtz8Du8DRlCRWCPIQxyk6mZnfwlOogQjsy5IP0mSHg8Vhado5PnrpLkEZHY%2B3wiDsqeGxxMkYTDFQ1ApWDzs2GgBk3GML3Ce1tv0U%2BJcbEilX%2F1brURzSxfP4o4lcaCqZlUcr1i8OBRlcnPiIhYD8UbIhClEJnAwNrvoWEAWg6ZBD9wWfaDnXPGj4lpFBSEYN2RN3Y9x%2BUXWfGZz2A8B4iKM&X-Amz-Signature=fc1f9c60b6827f37e267cbd451f1be75e3333ba36fa3d77166b30a60a8ddc636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUAMKZMD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOM%2BTjqWkcopM8qhBHDJ1cAGlSqaIsxGJZnspx32LpXAiEAt2oZ7nz1ncQ%2BBr%2BA680DXjw4nVgzcMNz%2Bj82GyAkeIkqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWqRsiwyCaeVbXQhyrcA4XIRzSqGr5OfS2IFUl%2BW12%2FmoKjDMKOSpZC7TAoQZm2yH5r5ay%2BbXOl32aGtvqEdzW5tSMuqSERGsSjkwpONQCumvKbLb3FbzQfhrTIOLG%2FHnOp4MEEAZBqxpGitDundyDIxFptxytw05HXvsj1AteHynKVB2qyeNK6A9Qn8a43lyqXBGj8ZerMS3SVi2iQk2AdHW1S6VSrGNdfllrMBm49sxnvupDkLzq%2BiP8bBSGN%2FXWkmUjIRDJPe6VXzrBdKuOBFwvZfJmZfODnOzVz81Zp6kc7OlUlUKJ0umWqDgRBj2QisLj3SzOhM5QcEaJSuzJRv67eC5ucS%2FnXePytV1kYqQW%2BiQl9BKptIJyV5Ei0SgQNjT%2F75Plkcil0IZJnYeC6fwWeCfmQHgaWq2WtzR%2FmL8FD7yUgzzFbp1x0ANFBtwDeqi3MmrZ4o1GtHr9UNtsJfh3fdqyTl85sZRNeyKMmlcfwDpTBcS%2B2UscS4%2BzzTjoVbp7h%2B1xo5e1XE5axONQyjCcB0B%2BJMHeSThZ%2Brbq9i7jv6XP2Dqq6G7i7uEn0kN1DG2PmKnRJR5%2BFQTQ8%2Fx6aIyK65%2FyI10OHXM2MdEmWws18h8B1sxDDJczPQ5IMUdt%2BgH%2BM58EHS0BbMJKcscQGOqUBjq9aXtz8Du8DRlCRWCPIQxyk6mZnfwlOogQjsy5IP0mSHg8Vhado5PnrpLkEZHY%2B3wiDsqeGxxMkYTDFQ1ApWDzs2GgBk3GML3Ce1tv0U%2BJcbEilX%2F1brURzSxfP4o4lcaCqZlUcr1i8OBRlcnPiIhYD8UbIhClEJnAwNrvoWEAWg6ZBD9wWfaDnXPGj4lpFBSEYN2RN3Y9x%2BUXWfGZz2A8B4iKM&X-Amz-Signature=5f5dd7faa83f4f17f662b03fb3027a842b9ecf76126e17e45e1e6667b08098ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUAMKZMD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOM%2BTjqWkcopM8qhBHDJ1cAGlSqaIsxGJZnspx32LpXAiEAt2oZ7nz1ncQ%2BBr%2BA680DXjw4nVgzcMNz%2Bj82GyAkeIkqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWqRsiwyCaeVbXQhyrcA4XIRzSqGr5OfS2IFUl%2BW12%2FmoKjDMKOSpZC7TAoQZm2yH5r5ay%2BbXOl32aGtvqEdzW5tSMuqSERGsSjkwpONQCumvKbLb3FbzQfhrTIOLG%2FHnOp4MEEAZBqxpGitDundyDIxFptxytw05HXvsj1AteHynKVB2qyeNK6A9Qn8a43lyqXBGj8ZerMS3SVi2iQk2AdHW1S6VSrGNdfllrMBm49sxnvupDkLzq%2BiP8bBSGN%2FXWkmUjIRDJPe6VXzrBdKuOBFwvZfJmZfODnOzVz81Zp6kc7OlUlUKJ0umWqDgRBj2QisLj3SzOhM5QcEaJSuzJRv67eC5ucS%2FnXePytV1kYqQW%2BiQl9BKptIJyV5Ei0SgQNjT%2F75Plkcil0IZJnYeC6fwWeCfmQHgaWq2WtzR%2FmL8FD7yUgzzFbp1x0ANFBtwDeqi3MmrZ4o1GtHr9UNtsJfh3fdqyTl85sZRNeyKMmlcfwDpTBcS%2B2UscS4%2BzzTjoVbp7h%2B1xo5e1XE5axONQyjCcB0B%2BJMHeSThZ%2Brbq9i7jv6XP2Dqq6G7i7uEn0kN1DG2PmKnRJR5%2BFQTQ8%2Fx6aIyK65%2FyI10OHXM2MdEmWws18h8B1sxDDJczPQ5IMUdt%2BgH%2BM58EHS0BbMJKcscQGOqUBjq9aXtz8Du8DRlCRWCPIQxyk6mZnfwlOogQjsy5IP0mSHg8Vhado5PnrpLkEZHY%2B3wiDsqeGxxMkYTDFQ1ApWDzs2GgBk3GML3Ce1tv0U%2BJcbEilX%2F1brURzSxfP4o4lcaCqZlUcr1i8OBRlcnPiIhYD8UbIhClEJnAwNrvoWEAWg6ZBD9wWfaDnXPGj4lpFBSEYN2RN3Y9x%2BUXWfGZz2A8B4iKM&X-Amz-Signature=c1076ef23ec5dea9994a037b3e8a09791053629e1b7c635fe917105d003a9dba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUAMKZMD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOM%2BTjqWkcopM8qhBHDJ1cAGlSqaIsxGJZnspx32LpXAiEAt2oZ7nz1ncQ%2BBr%2BA680DXjw4nVgzcMNz%2Bj82GyAkeIkqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWqRsiwyCaeVbXQhyrcA4XIRzSqGr5OfS2IFUl%2BW12%2FmoKjDMKOSpZC7TAoQZm2yH5r5ay%2BbXOl32aGtvqEdzW5tSMuqSERGsSjkwpONQCumvKbLb3FbzQfhrTIOLG%2FHnOp4MEEAZBqxpGitDundyDIxFptxytw05HXvsj1AteHynKVB2qyeNK6A9Qn8a43lyqXBGj8ZerMS3SVi2iQk2AdHW1S6VSrGNdfllrMBm49sxnvupDkLzq%2BiP8bBSGN%2FXWkmUjIRDJPe6VXzrBdKuOBFwvZfJmZfODnOzVz81Zp6kc7OlUlUKJ0umWqDgRBj2QisLj3SzOhM5QcEaJSuzJRv67eC5ucS%2FnXePytV1kYqQW%2BiQl9BKptIJyV5Ei0SgQNjT%2F75Plkcil0IZJnYeC6fwWeCfmQHgaWq2WtzR%2FmL8FD7yUgzzFbp1x0ANFBtwDeqi3MmrZ4o1GtHr9UNtsJfh3fdqyTl85sZRNeyKMmlcfwDpTBcS%2B2UscS4%2BzzTjoVbp7h%2B1xo5e1XE5axONQyjCcB0B%2BJMHeSThZ%2Brbq9i7jv6XP2Dqq6G7i7uEn0kN1DG2PmKnRJR5%2BFQTQ8%2Fx6aIyK65%2FyI10OHXM2MdEmWws18h8B1sxDDJczPQ5IMUdt%2BgH%2BM58EHS0BbMJKcscQGOqUBjq9aXtz8Du8DRlCRWCPIQxyk6mZnfwlOogQjsy5IP0mSHg8Vhado5PnrpLkEZHY%2B3wiDsqeGxxMkYTDFQ1ApWDzs2GgBk3GML3Ce1tv0U%2BJcbEilX%2F1brURzSxfP4o4lcaCqZlUcr1i8OBRlcnPiIhYD8UbIhClEJnAwNrvoWEAWg6ZBD9wWfaDnXPGj4lpFBSEYN2RN3Y9x%2BUXWfGZz2A8B4iKM&X-Amz-Signature=992ffa725d6fd252a976ce66109115a12f6be95616da50d00e5d5ef055037c01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUAMKZMD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOM%2BTjqWkcopM8qhBHDJ1cAGlSqaIsxGJZnspx32LpXAiEAt2oZ7nz1ncQ%2BBr%2BA680DXjw4nVgzcMNz%2Bj82GyAkeIkqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWqRsiwyCaeVbXQhyrcA4XIRzSqGr5OfS2IFUl%2BW12%2FmoKjDMKOSpZC7TAoQZm2yH5r5ay%2BbXOl32aGtvqEdzW5tSMuqSERGsSjkwpONQCumvKbLb3FbzQfhrTIOLG%2FHnOp4MEEAZBqxpGitDundyDIxFptxytw05HXvsj1AteHynKVB2qyeNK6A9Qn8a43lyqXBGj8ZerMS3SVi2iQk2AdHW1S6VSrGNdfllrMBm49sxnvupDkLzq%2BiP8bBSGN%2FXWkmUjIRDJPe6VXzrBdKuOBFwvZfJmZfODnOzVz81Zp6kc7OlUlUKJ0umWqDgRBj2QisLj3SzOhM5QcEaJSuzJRv67eC5ucS%2FnXePytV1kYqQW%2BiQl9BKptIJyV5Ei0SgQNjT%2F75Plkcil0IZJnYeC6fwWeCfmQHgaWq2WtzR%2FmL8FD7yUgzzFbp1x0ANFBtwDeqi3MmrZ4o1GtHr9UNtsJfh3fdqyTl85sZRNeyKMmlcfwDpTBcS%2B2UscS4%2BzzTjoVbp7h%2B1xo5e1XE5axONQyjCcB0B%2BJMHeSThZ%2Brbq9i7jv6XP2Dqq6G7i7uEn0kN1DG2PmKnRJR5%2BFQTQ8%2Fx6aIyK65%2FyI10OHXM2MdEmWws18h8B1sxDDJczPQ5IMUdt%2BgH%2BM58EHS0BbMJKcscQGOqUBjq9aXtz8Du8DRlCRWCPIQxyk6mZnfwlOogQjsy5IP0mSHg8Vhado5PnrpLkEZHY%2B3wiDsqeGxxMkYTDFQ1ApWDzs2GgBk3GML3Ce1tv0U%2BJcbEilX%2F1brURzSxfP4o4lcaCqZlUcr1i8OBRlcnPiIhYD8UbIhClEJnAwNrvoWEAWg6ZBD9wWfaDnXPGj4lpFBSEYN2RN3Y9x%2BUXWfGZz2A8B4iKM&X-Amz-Signature=aa89b7a8fdacfd2550011a7f618126a55e251c4e68761bfc2d24d623a13c463c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUAMKZMD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOM%2BTjqWkcopM8qhBHDJ1cAGlSqaIsxGJZnspx32LpXAiEAt2oZ7nz1ncQ%2BBr%2BA680DXjw4nVgzcMNz%2Bj82GyAkeIkqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWqRsiwyCaeVbXQhyrcA4XIRzSqGr5OfS2IFUl%2BW12%2FmoKjDMKOSpZC7TAoQZm2yH5r5ay%2BbXOl32aGtvqEdzW5tSMuqSERGsSjkwpONQCumvKbLb3FbzQfhrTIOLG%2FHnOp4MEEAZBqxpGitDundyDIxFptxytw05HXvsj1AteHynKVB2qyeNK6A9Qn8a43lyqXBGj8ZerMS3SVi2iQk2AdHW1S6VSrGNdfllrMBm49sxnvupDkLzq%2BiP8bBSGN%2FXWkmUjIRDJPe6VXzrBdKuOBFwvZfJmZfODnOzVz81Zp6kc7OlUlUKJ0umWqDgRBj2QisLj3SzOhM5QcEaJSuzJRv67eC5ucS%2FnXePytV1kYqQW%2BiQl9BKptIJyV5Ei0SgQNjT%2F75Plkcil0IZJnYeC6fwWeCfmQHgaWq2WtzR%2FmL8FD7yUgzzFbp1x0ANFBtwDeqi3MmrZ4o1GtHr9UNtsJfh3fdqyTl85sZRNeyKMmlcfwDpTBcS%2B2UscS4%2BzzTjoVbp7h%2B1xo5e1XE5axONQyjCcB0B%2BJMHeSThZ%2Brbq9i7jv6XP2Dqq6G7i7uEn0kN1DG2PmKnRJR5%2BFQTQ8%2Fx6aIyK65%2FyI10OHXM2MdEmWws18h8B1sxDDJczPQ5IMUdt%2BgH%2BM58EHS0BbMJKcscQGOqUBjq9aXtz8Du8DRlCRWCPIQxyk6mZnfwlOogQjsy5IP0mSHg8Vhado5PnrpLkEZHY%2B3wiDsqeGxxMkYTDFQ1ApWDzs2GgBk3GML3Ce1tv0U%2BJcbEilX%2F1brURzSxfP4o4lcaCqZlUcr1i8OBRlcnPiIhYD8UbIhClEJnAwNrvoWEAWg6ZBD9wWfaDnXPGj4lpFBSEYN2RN3Y9x%2BUXWfGZz2A8B4iKM&X-Amz-Signature=5e119b6846523c5f1ccfd2508cfabf553134675efef156f279dc20a259c39bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUAMKZMD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOM%2BTjqWkcopM8qhBHDJ1cAGlSqaIsxGJZnspx32LpXAiEAt2oZ7nz1ncQ%2BBr%2BA680DXjw4nVgzcMNz%2Bj82GyAkeIkqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWqRsiwyCaeVbXQhyrcA4XIRzSqGr5OfS2IFUl%2BW12%2FmoKjDMKOSpZC7TAoQZm2yH5r5ay%2BbXOl32aGtvqEdzW5tSMuqSERGsSjkwpONQCumvKbLb3FbzQfhrTIOLG%2FHnOp4MEEAZBqxpGitDundyDIxFptxytw05HXvsj1AteHynKVB2qyeNK6A9Qn8a43lyqXBGj8ZerMS3SVi2iQk2AdHW1S6VSrGNdfllrMBm49sxnvupDkLzq%2BiP8bBSGN%2FXWkmUjIRDJPe6VXzrBdKuOBFwvZfJmZfODnOzVz81Zp6kc7OlUlUKJ0umWqDgRBj2QisLj3SzOhM5QcEaJSuzJRv67eC5ucS%2FnXePytV1kYqQW%2BiQl9BKptIJyV5Ei0SgQNjT%2F75Plkcil0IZJnYeC6fwWeCfmQHgaWq2WtzR%2FmL8FD7yUgzzFbp1x0ANFBtwDeqi3MmrZ4o1GtHr9UNtsJfh3fdqyTl85sZRNeyKMmlcfwDpTBcS%2B2UscS4%2BzzTjoVbp7h%2B1xo5e1XE5axONQyjCcB0B%2BJMHeSThZ%2Brbq9i7jv6XP2Dqq6G7i7uEn0kN1DG2PmKnRJR5%2BFQTQ8%2Fx6aIyK65%2FyI10OHXM2MdEmWws18h8B1sxDDJczPQ5IMUdt%2BgH%2BM58EHS0BbMJKcscQGOqUBjq9aXtz8Du8DRlCRWCPIQxyk6mZnfwlOogQjsy5IP0mSHg8Vhado5PnrpLkEZHY%2B3wiDsqeGxxMkYTDFQ1ApWDzs2GgBk3GML3Ce1tv0U%2BJcbEilX%2F1brURzSxfP4o4lcaCqZlUcr1i8OBRlcnPiIhYD8UbIhClEJnAwNrvoWEAWg6ZBD9wWfaDnXPGj4lpFBSEYN2RN3Y9x%2BUXWfGZz2A8B4iKM&X-Amz-Signature=93566b0cd1bc2769b1b60088eb04ac2de5e1036601e37b4c83748bed9347d29a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUAMKZMD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOM%2BTjqWkcopM8qhBHDJ1cAGlSqaIsxGJZnspx32LpXAiEAt2oZ7nz1ncQ%2BBr%2BA680DXjw4nVgzcMNz%2Bj82GyAkeIkqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWqRsiwyCaeVbXQhyrcA4XIRzSqGr5OfS2IFUl%2BW12%2FmoKjDMKOSpZC7TAoQZm2yH5r5ay%2BbXOl32aGtvqEdzW5tSMuqSERGsSjkwpONQCumvKbLb3FbzQfhrTIOLG%2FHnOp4MEEAZBqxpGitDundyDIxFptxytw05HXvsj1AteHynKVB2qyeNK6A9Qn8a43lyqXBGj8ZerMS3SVi2iQk2AdHW1S6VSrGNdfllrMBm49sxnvupDkLzq%2BiP8bBSGN%2FXWkmUjIRDJPe6VXzrBdKuOBFwvZfJmZfODnOzVz81Zp6kc7OlUlUKJ0umWqDgRBj2QisLj3SzOhM5QcEaJSuzJRv67eC5ucS%2FnXePytV1kYqQW%2BiQl9BKptIJyV5Ei0SgQNjT%2F75Plkcil0IZJnYeC6fwWeCfmQHgaWq2WtzR%2FmL8FD7yUgzzFbp1x0ANFBtwDeqi3MmrZ4o1GtHr9UNtsJfh3fdqyTl85sZRNeyKMmlcfwDpTBcS%2B2UscS4%2BzzTjoVbp7h%2B1xo5e1XE5axONQyjCcB0B%2BJMHeSThZ%2Brbq9i7jv6XP2Dqq6G7i7uEn0kN1DG2PmKnRJR5%2BFQTQ8%2Fx6aIyK65%2FyI10OHXM2MdEmWws18h8B1sxDDJczPQ5IMUdt%2BgH%2BM58EHS0BbMJKcscQGOqUBjq9aXtz8Du8DRlCRWCPIQxyk6mZnfwlOogQjsy5IP0mSHg8Vhado5PnrpLkEZHY%2B3wiDsqeGxxMkYTDFQ1ApWDzs2GgBk3GML3Ce1tv0U%2BJcbEilX%2F1brURzSxfP4o4lcaCqZlUcr1i8OBRlcnPiIhYD8UbIhClEJnAwNrvoWEAWg6ZBD9wWfaDnXPGj4lpFBSEYN2RN3Y9x%2BUXWfGZz2A8B4iKM&X-Amz-Signature=1e9d5f67f099428df0cb85a09a75b05dec3b87963f1ffdf0ce4fefaf9a7c7943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUAMKZMD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOM%2BTjqWkcopM8qhBHDJ1cAGlSqaIsxGJZnspx32LpXAiEAt2oZ7nz1ncQ%2BBr%2BA680DXjw4nVgzcMNz%2Bj82GyAkeIkqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWqRsiwyCaeVbXQhyrcA4XIRzSqGr5OfS2IFUl%2BW12%2FmoKjDMKOSpZC7TAoQZm2yH5r5ay%2BbXOl32aGtvqEdzW5tSMuqSERGsSjkwpONQCumvKbLb3FbzQfhrTIOLG%2FHnOp4MEEAZBqxpGitDundyDIxFptxytw05HXvsj1AteHynKVB2qyeNK6A9Qn8a43lyqXBGj8ZerMS3SVi2iQk2AdHW1S6VSrGNdfllrMBm49sxnvupDkLzq%2BiP8bBSGN%2FXWkmUjIRDJPe6VXzrBdKuOBFwvZfJmZfODnOzVz81Zp6kc7OlUlUKJ0umWqDgRBj2QisLj3SzOhM5QcEaJSuzJRv67eC5ucS%2FnXePytV1kYqQW%2BiQl9BKptIJyV5Ei0SgQNjT%2F75Plkcil0IZJnYeC6fwWeCfmQHgaWq2WtzR%2FmL8FD7yUgzzFbp1x0ANFBtwDeqi3MmrZ4o1GtHr9UNtsJfh3fdqyTl85sZRNeyKMmlcfwDpTBcS%2B2UscS4%2BzzTjoVbp7h%2B1xo5e1XE5axONQyjCcB0B%2BJMHeSThZ%2Brbq9i7jv6XP2Dqq6G7i7uEn0kN1DG2PmKnRJR5%2BFQTQ8%2Fx6aIyK65%2FyI10OHXM2MdEmWws18h8B1sxDDJczPQ5IMUdt%2BgH%2BM58EHS0BbMJKcscQGOqUBjq9aXtz8Du8DRlCRWCPIQxyk6mZnfwlOogQjsy5IP0mSHg8Vhado5PnrpLkEZHY%2B3wiDsqeGxxMkYTDFQ1ApWDzs2GgBk3GML3Ce1tv0U%2BJcbEilX%2F1brURzSxfP4o4lcaCqZlUcr1i8OBRlcnPiIhYD8UbIhClEJnAwNrvoWEAWg6ZBD9wWfaDnXPGj4lpFBSEYN2RN3Y9x%2BUXWfGZz2A8B4iKM&X-Amz-Signature=94012dada3bc21e542530a390b80e93ed42dd65ee0eda5447ef79c559f649ec3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

Types of blocks in URDF:

- robot
- vars/Properties
- macros
	- inertial
		- origin
		- mass
		- inertia
- link:
	- visual
		- geometry
			- box
			- cylinder
			- sphere
		- material
			- color
	- collision
		- ~~origin~~
		- geometry
		- friction
	- xacro:box_inertia
	- xacro:cylinder_inertia
	- xacro:sphere_inertia
- joint:
	- parent
	- child
	- ~~origin~~
- xacro:wheel

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
        <surface><friction><ode>
          <mu>1.0</mu>
          <mu2>1.0</mu2>
          <fdir1>1 0 0</fdir1>
        </ode></friction></surface>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUAMKZMD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOM%2BTjqWkcopM8qhBHDJ1cAGlSqaIsxGJZnspx32LpXAiEAt2oZ7nz1ncQ%2BBr%2BA680DXjw4nVgzcMNz%2Bj82GyAkeIkqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWqRsiwyCaeVbXQhyrcA4XIRzSqGr5OfS2IFUl%2BW12%2FmoKjDMKOSpZC7TAoQZm2yH5r5ay%2BbXOl32aGtvqEdzW5tSMuqSERGsSjkwpONQCumvKbLb3FbzQfhrTIOLG%2FHnOp4MEEAZBqxpGitDundyDIxFptxytw05HXvsj1AteHynKVB2qyeNK6A9Qn8a43lyqXBGj8ZerMS3SVi2iQk2AdHW1S6VSrGNdfllrMBm49sxnvupDkLzq%2BiP8bBSGN%2FXWkmUjIRDJPe6VXzrBdKuOBFwvZfJmZfODnOzVz81Zp6kc7OlUlUKJ0umWqDgRBj2QisLj3SzOhM5QcEaJSuzJRv67eC5ucS%2FnXePytV1kYqQW%2BiQl9BKptIJyV5Ei0SgQNjT%2F75Plkcil0IZJnYeC6fwWeCfmQHgaWq2WtzR%2FmL8FD7yUgzzFbp1x0ANFBtwDeqi3MmrZ4o1GtHr9UNtsJfh3fdqyTl85sZRNeyKMmlcfwDpTBcS%2B2UscS4%2BzzTjoVbp7h%2B1xo5e1XE5axONQyjCcB0B%2BJMHeSThZ%2Brbq9i7jv6XP2Dqq6G7i7uEn0kN1DG2PmKnRJR5%2BFQTQ8%2Fx6aIyK65%2FyI10OHXM2MdEmWws18h8B1sxDDJczPQ5IMUdt%2BgH%2BM58EHS0BbMJKcscQGOqUBjq9aXtz8Du8DRlCRWCPIQxyk6mZnfwlOogQjsy5IP0mSHg8Vhado5PnrpLkEZHY%2B3wiDsqeGxxMkYTDFQ1ApWDzs2GgBk3GML3Ce1tv0U%2BJcbEilX%2F1brURzSxfP4o4lcaCqZlUcr1i8OBRlcnPiIhYD8UbIhClEJnAwNrvoWEAWg6ZBD9wWfaDnXPGj4lpFBSEYN2RN3Y9x%2BUXWfGZz2A8B4iKM&X-Amz-Signature=4a077b89963689645f6fea858a6b01cfbe957a6e400052478b71890881c21b8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUAMKZMD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOM%2BTjqWkcopM8qhBHDJ1cAGlSqaIsxGJZnspx32LpXAiEAt2oZ7nz1ncQ%2BBr%2BA680DXjw4nVgzcMNz%2Bj82GyAkeIkqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWqRsiwyCaeVbXQhyrcA4XIRzSqGr5OfS2IFUl%2BW12%2FmoKjDMKOSpZC7TAoQZm2yH5r5ay%2BbXOl32aGtvqEdzW5tSMuqSERGsSjkwpONQCumvKbLb3FbzQfhrTIOLG%2FHnOp4MEEAZBqxpGitDundyDIxFptxytw05HXvsj1AteHynKVB2qyeNK6A9Qn8a43lyqXBGj8ZerMS3SVi2iQk2AdHW1S6VSrGNdfllrMBm49sxnvupDkLzq%2BiP8bBSGN%2FXWkmUjIRDJPe6VXzrBdKuOBFwvZfJmZfODnOzVz81Zp6kc7OlUlUKJ0umWqDgRBj2QisLj3SzOhM5QcEaJSuzJRv67eC5ucS%2FnXePytV1kYqQW%2BiQl9BKptIJyV5Ei0SgQNjT%2F75Plkcil0IZJnYeC6fwWeCfmQHgaWq2WtzR%2FmL8FD7yUgzzFbp1x0ANFBtwDeqi3MmrZ4o1GtHr9UNtsJfh3fdqyTl85sZRNeyKMmlcfwDpTBcS%2B2UscS4%2BzzTjoVbp7h%2B1xo5e1XE5axONQyjCcB0B%2BJMHeSThZ%2Brbq9i7jv6XP2Dqq6G7i7uEn0kN1DG2PmKnRJR5%2BFQTQ8%2Fx6aIyK65%2FyI10OHXM2MdEmWws18h8B1sxDDJczPQ5IMUdt%2BgH%2BM58EHS0BbMJKcscQGOqUBjq9aXtz8Du8DRlCRWCPIQxyk6mZnfwlOogQjsy5IP0mSHg8Vhado5PnrpLkEZHY%2B3wiDsqeGxxMkYTDFQ1ApWDzs2GgBk3GML3Ce1tv0U%2BJcbEilX%2F1brURzSxfP4o4lcaCqZlUcr1i8OBRlcnPiIhYD8UbIhClEJnAwNrvoWEAWg6ZBD9wWfaDnXPGj4lpFBSEYN2RN3Y9x%2BUXWfGZz2A8B4iKM&X-Amz-Signature=6aa709de31689baa31458e28a8a87d377a82189c1d3481cb01927251a5784898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUAMKZMD%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOM%2BTjqWkcopM8qhBHDJ1cAGlSqaIsxGJZnspx32LpXAiEAt2oZ7nz1ncQ%2BBr%2BA680DXjw4nVgzcMNz%2Bj82GyAkeIkqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWqRsiwyCaeVbXQhyrcA4XIRzSqGr5OfS2IFUl%2BW12%2FmoKjDMKOSpZC7TAoQZm2yH5r5ay%2BbXOl32aGtvqEdzW5tSMuqSERGsSjkwpONQCumvKbLb3FbzQfhrTIOLG%2FHnOp4MEEAZBqxpGitDundyDIxFptxytw05HXvsj1AteHynKVB2qyeNK6A9Qn8a43lyqXBGj8ZerMS3SVi2iQk2AdHW1S6VSrGNdfllrMBm49sxnvupDkLzq%2BiP8bBSGN%2FXWkmUjIRDJPe6VXzrBdKuOBFwvZfJmZfODnOzVz81Zp6kc7OlUlUKJ0umWqDgRBj2QisLj3SzOhM5QcEaJSuzJRv67eC5ucS%2FnXePytV1kYqQW%2BiQl9BKptIJyV5Ei0SgQNjT%2F75Plkcil0IZJnYeC6fwWeCfmQHgaWq2WtzR%2FmL8FD7yUgzzFbp1x0ANFBtwDeqi3MmrZ4o1GtHr9UNtsJfh3fdqyTl85sZRNeyKMmlcfwDpTBcS%2B2UscS4%2BzzTjoVbp7h%2B1xo5e1XE5axONQyjCcB0B%2BJMHeSThZ%2Brbq9i7jv6XP2Dqq6G7i7uEn0kN1DG2PmKnRJR5%2BFQTQ8%2Fx6aIyK65%2FyI10OHXM2MdEmWws18h8B1sxDDJczPQ5IMUdt%2BgH%2BM58EHS0BbMJKcscQGOqUBjq9aXtz8Du8DRlCRWCPIQxyk6mZnfwlOogQjsy5IP0mSHg8Vhado5PnrpLkEZHY%2B3wiDsqeGxxMkYTDFQ1ApWDzs2GgBk3GML3Ce1tv0U%2BJcbEilX%2F1brURzSxfP4o4lcaCqZlUcr1i8OBRlcnPiIhYD8UbIhClEJnAwNrvoWEAWg6ZBD9wWfaDnXPGj4lpFBSEYN2RN3Y9x%2BUXWfGZz2A8B4iKM&X-Amz-Signature=fa10c1f16578c236ef7c7323671ef87cea300523aed4a19aa93b1d1cc8bb96e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPIGGFXW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkYeo87OYsbOZ78x1PeX0RPunWeIJbnHM2WpFo3vi%2BtQIhAIlDRTuB2akfRV0xd6FGRO%2B6rRSkkf3lz%2FDlVm9pmaUYKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNCRSMnxnzz%2BbCVm8q3AO2RnCR1xu84WbgaTzGqQB1XZnUz1yeKocUGaO7L%2BCDpANAsogNgD3MRiyDYGbNR1ss7vSDxQZkNLfPjgq0imxTw0nwRVs7LoMztc%2Fh0iVIU5rr1zwudk6mp29q9HCI9anbfkjN1R4lCcRQxHN8eDKa3moacbaS38T1Dn6cr2I45yR25mogvC3olXgupQUqMRCDGFFgfJp7NDAkuLv3dOWoB2mIJTTLoCziLmA91ZiZGM4DEefxRklIw6QVCFKh2aZYCf0bCOdPGPLwb9ki%2BATHeOxr6%2BqKsowQ536D9NSH%2BwP7jYjQi%2FvToGmrLcYzDKDNb2VcssaQGzUD9hpHdEjnfbvmwgdKxfWmhmsPIFR%2B75GDVA1HItK%2Bi3P3cDozdILKdTbIf77agN11nRZ%2BbA9mUZQ4IIYpm7VN1x%2B4cJzGhoJ4RrtVXPTudJ9gHSOBy9Fk1l%2BEYcroT6vtn72VBbCdyrEpvDAmtMaXBlixsTLk9yRa%2BIj8p2SUsf0OHm8U3AbqFAY%2BgUkEApfDYDIUN8QZakRXA3neDJ4SANKxGhk1yn8B6e9hDUpvQGUJFzmC3MB4ZGGiCUydCknGAF%2FpQqGIfAhyX4lqbBHQBviLffhxn%2FpDF7kPEmnyzV6GSjDlm7HEBjqkAV5Lp6lavs43Vyg6ZY9JjDhDr3hkENp33y6IhnOzcpTuIUB%2FtlXCm6PTxRC%2BE5N0gt9SUc%2B4avif3Qvf7WKVVTsiaSE4HuzOvj%2B5CoaN9h9AcM6%2BOv1YrQRyYqes5Q0%2Bhe6pVBXK7uh5mI%2FIifgS3VU6UTKn7Svaf0cFxhsmmUjrouX9blHhcAN6R6%2Bj%2BP4%2Fa0GAWr8bz816K0bbaZjs2mC4VaCa&X-Amz-Signature=6df0e00dce8e195ca4ce5dac20e21e5bb696032bd4ace430d9dd73cb5821b487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPIGGFXW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkYeo87OYsbOZ78x1PeX0RPunWeIJbnHM2WpFo3vi%2BtQIhAIlDRTuB2akfRV0xd6FGRO%2B6rRSkkf3lz%2FDlVm9pmaUYKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNCRSMnxnzz%2BbCVm8q3AO2RnCR1xu84WbgaTzGqQB1XZnUz1yeKocUGaO7L%2BCDpANAsogNgD3MRiyDYGbNR1ss7vSDxQZkNLfPjgq0imxTw0nwRVs7LoMztc%2Fh0iVIU5rr1zwudk6mp29q9HCI9anbfkjN1R4lCcRQxHN8eDKa3moacbaS38T1Dn6cr2I45yR25mogvC3olXgupQUqMRCDGFFgfJp7NDAkuLv3dOWoB2mIJTTLoCziLmA91ZiZGM4DEefxRklIw6QVCFKh2aZYCf0bCOdPGPLwb9ki%2BATHeOxr6%2BqKsowQ536D9NSH%2BwP7jYjQi%2FvToGmrLcYzDKDNb2VcssaQGzUD9hpHdEjnfbvmwgdKxfWmhmsPIFR%2B75GDVA1HItK%2Bi3P3cDozdILKdTbIf77agN11nRZ%2BbA9mUZQ4IIYpm7VN1x%2B4cJzGhoJ4RrtVXPTudJ9gHSOBy9Fk1l%2BEYcroT6vtn72VBbCdyrEpvDAmtMaXBlixsTLk9yRa%2BIj8p2SUsf0OHm8U3AbqFAY%2BgUkEApfDYDIUN8QZakRXA3neDJ4SANKxGhk1yn8B6e9hDUpvQGUJFzmC3MB4ZGGiCUydCknGAF%2FpQqGIfAhyX4lqbBHQBviLffhxn%2FpDF7kPEmnyzV6GSjDlm7HEBjqkAV5Lp6lavs43Vyg6ZY9JjDhDr3hkENp33y6IhnOzcpTuIUB%2FtlXCm6PTxRC%2BE5N0gt9SUc%2B4avif3Qvf7WKVVTsiaSE4HuzOvj%2B5CoaN9h9AcM6%2BOv1YrQRyYqes5Q0%2Bhe6pVBXK7uh5mI%2FIifgS3VU6UTKn7Svaf0cFxhsmmUjrouX9blHhcAN6R6%2Bj%2BP4%2Fa0GAWr8bz816K0bbaZjs2mC4VaCa&X-Amz-Signature=a52c469a3ed1982cbe068c5c01aabbc96dc3f163487037dfdda8099b24705c4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPIGGFXW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkYeo87OYsbOZ78x1PeX0RPunWeIJbnHM2WpFo3vi%2BtQIhAIlDRTuB2akfRV0xd6FGRO%2B6rRSkkf3lz%2FDlVm9pmaUYKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNCRSMnxnzz%2BbCVm8q3AO2RnCR1xu84WbgaTzGqQB1XZnUz1yeKocUGaO7L%2BCDpANAsogNgD3MRiyDYGbNR1ss7vSDxQZkNLfPjgq0imxTw0nwRVs7LoMztc%2Fh0iVIU5rr1zwudk6mp29q9HCI9anbfkjN1R4lCcRQxHN8eDKa3moacbaS38T1Dn6cr2I45yR25mogvC3olXgupQUqMRCDGFFgfJp7NDAkuLv3dOWoB2mIJTTLoCziLmA91ZiZGM4DEefxRklIw6QVCFKh2aZYCf0bCOdPGPLwb9ki%2BATHeOxr6%2BqKsowQ536D9NSH%2BwP7jYjQi%2FvToGmrLcYzDKDNb2VcssaQGzUD9hpHdEjnfbvmwgdKxfWmhmsPIFR%2B75GDVA1HItK%2Bi3P3cDozdILKdTbIf77agN11nRZ%2BbA9mUZQ4IIYpm7VN1x%2B4cJzGhoJ4RrtVXPTudJ9gHSOBy9Fk1l%2BEYcroT6vtn72VBbCdyrEpvDAmtMaXBlixsTLk9yRa%2BIj8p2SUsf0OHm8U3AbqFAY%2BgUkEApfDYDIUN8QZakRXA3neDJ4SANKxGhk1yn8B6e9hDUpvQGUJFzmC3MB4ZGGiCUydCknGAF%2FpQqGIfAhyX4lqbBHQBviLffhxn%2FpDF7kPEmnyzV6GSjDlm7HEBjqkAV5Lp6lavs43Vyg6ZY9JjDhDr3hkENp33y6IhnOzcpTuIUB%2FtlXCm6PTxRC%2BE5N0gt9SUc%2B4avif3Qvf7WKVVTsiaSE4HuzOvj%2B5CoaN9h9AcM6%2BOv1YrQRyYqes5Q0%2Bhe6pVBXK7uh5mI%2FIifgS3VU6UTKn7Svaf0cFxhsmmUjrouX9blHhcAN6R6%2Bj%2BP4%2Fa0GAWr8bz816K0bbaZjs2mC4VaCa&X-Amz-Signature=7d3a7ca45741abf7c60217079a675842f9532b7dd4a741d49780e11cc3fab2c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPIGGFXW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkYeo87OYsbOZ78x1PeX0RPunWeIJbnHM2WpFo3vi%2BtQIhAIlDRTuB2akfRV0xd6FGRO%2B6rRSkkf3lz%2FDlVm9pmaUYKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNCRSMnxnzz%2BbCVm8q3AO2RnCR1xu84WbgaTzGqQB1XZnUz1yeKocUGaO7L%2BCDpANAsogNgD3MRiyDYGbNR1ss7vSDxQZkNLfPjgq0imxTw0nwRVs7LoMztc%2Fh0iVIU5rr1zwudk6mp29q9HCI9anbfkjN1R4lCcRQxHN8eDKa3moacbaS38T1Dn6cr2I45yR25mogvC3olXgupQUqMRCDGFFgfJp7NDAkuLv3dOWoB2mIJTTLoCziLmA91ZiZGM4DEefxRklIw6QVCFKh2aZYCf0bCOdPGPLwb9ki%2BATHeOxr6%2BqKsowQ536D9NSH%2BwP7jYjQi%2FvToGmrLcYzDKDNb2VcssaQGzUD9hpHdEjnfbvmwgdKxfWmhmsPIFR%2B75GDVA1HItK%2Bi3P3cDozdILKdTbIf77agN11nRZ%2BbA9mUZQ4IIYpm7VN1x%2B4cJzGhoJ4RrtVXPTudJ9gHSOBy9Fk1l%2BEYcroT6vtn72VBbCdyrEpvDAmtMaXBlixsTLk9yRa%2BIj8p2SUsf0OHm8U3AbqFAY%2BgUkEApfDYDIUN8QZakRXA3neDJ4SANKxGhk1yn8B6e9hDUpvQGUJFzmC3MB4ZGGiCUydCknGAF%2FpQqGIfAhyX4lqbBHQBviLffhxn%2FpDF7kPEmnyzV6GSjDlm7HEBjqkAV5Lp6lavs43Vyg6ZY9JjDhDr3hkENp33y6IhnOzcpTuIUB%2FtlXCm6PTxRC%2BE5N0gt9SUc%2B4avif3Qvf7WKVVTsiaSE4HuzOvj%2B5CoaN9h9AcM6%2BOv1YrQRyYqes5Q0%2Bhe6pVBXK7uh5mI%2FIifgS3VU6UTKn7Svaf0cFxhsmmUjrouX9blHhcAN6R6%2Bj%2BP4%2Fa0GAWr8bz816K0bbaZjs2mC4VaCa&X-Amz-Signature=846fbcc773fee87efb6914b2c588782f97a0868fcdad7117962fc7fd942cf9f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPIGGFXW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkYeo87OYsbOZ78x1PeX0RPunWeIJbnHM2WpFo3vi%2BtQIhAIlDRTuB2akfRV0xd6FGRO%2B6rRSkkf3lz%2FDlVm9pmaUYKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNCRSMnxnzz%2BbCVm8q3AO2RnCR1xu84WbgaTzGqQB1XZnUz1yeKocUGaO7L%2BCDpANAsogNgD3MRiyDYGbNR1ss7vSDxQZkNLfPjgq0imxTw0nwRVs7LoMztc%2Fh0iVIU5rr1zwudk6mp29q9HCI9anbfkjN1R4lCcRQxHN8eDKa3moacbaS38T1Dn6cr2I45yR25mogvC3olXgupQUqMRCDGFFgfJp7NDAkuLv3dOWoB2mIJTTLoCziLmA91ZiZGM4DEefxRklIw6QVCFKh2aZYCf0bCOdPGPLwb9ki%2BATHeOxr6%2BqKsowQ536D9NSH%2BwP7jYjQi%2FvToGmrLcYzDKDNb2VcssaQGzUD9hpHdEjnfbvmwgdKxfWmhmsPIFR%2B75GDVA1HItK%2Bi3P3cDozdILKdTbIf77agN11nRZ%2BbA9mUZQ4IIYpm7VN1x%2B4cJzGhoJ4RrtVXPTudJ9gHSOBy9Fk1l%2BEYcroT6vtn72VBbCdyrEpvDAmtMaXBlixsTLk9yRa%2BIj8p2SUsf0OHm8U3AbqFAY%2BgUkEApfDYDIUN8QZakRXA3neDJ4SANKxGhk1yn8B6e9hDUpvQGUJFzmC3MB4ZGGiCUydCknGAF%2FpQqGIfAhyX4lqbBHQBviLffhxn%2FpDF7kPEmnyzV6GSjDlm7HEBjqkAV5Lp6lavs43Vyg6ZY9JjDhDr3hkENp33y6IhnOzcpTuIUB%2FtlXCm6PTxRC%2BE5N0gt9SUc%2B4avif3Qvf7WKVVTsiaSE4HuzOvj%2B5CoaN9h9AcM6%2BOv1YrQRyYqes5Q0%2Bhe6pVBXK7uh5mI%2FIifgS3VU6UTKn7Svaf0cFxhsmmUjrouX9blHhcAN6R6%2Bj%2BP4%2Fa0GAWr8bz816K0bbaZjs2mC4VaCa&X-Amz-Signature=dd9d956a72e1808c9294ad2289919599ea80ec187678896115a085990a453d22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPIGGFXW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkYeo87OYsbOZ78x1PeX0RPunWeIJbnHM2WpFo3vi%2BtQIhAIlDRTuB2akfRV0xd6FGRO%2B6rRSkkf3lz%2FDlVm9pmaUYKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNCRSMnxnzz%2BbCVm8q3AO2RnCR1xu84WbgaTzGqQB1XZnUz1yeKocUGaO7L%2BCDpANAsogNgD3MRiyDYGbNR1ss7vSDxQZkNLfPjgq0imxTw0nwRVs7LoMztc%2Fh0iVIU5rr1zwudk6mp29q9HCI9anbfkjN1R4lCcRQxHN8eDKa3moacbaS38T1Dn6cr2I45yR25mogvC3olXgupQUqMRCDGFFgfJp7NDAkuLv3dOWoB2mIJTTLoCziLmA91ZiZGM4DEefxRklIw6QVCFKh2aZYCf0bCOdPGPLwb9ki%2BATHeOxr6%2BqKsowQ536D9NSH%2BwP7jYjQi%2FvToGmrLcYzDKDNb2VcssaQGzUD9hpHdEjnfbvmwgdKxfWmhmsPIFR%2B75GDVA1HItK%2Bi3P3cDozdILKdTbIf77agN11nRZ%2BbA9mUZQ4IIYpm7VN1x%2B4cJzGhoJ4RrtVXPTudJ9gHSOBy9Fk1l%2BEYcroT6vtn72VBbCdyrEpvDAmtMaXBlixsTLk9yRa%2BIj8p2SUsf0OHm8U3AbqFAY%2BgUkEApfDYDIUN8QZakRXA3neDJ4SANKxGhk1yn8B6e9hDUpvQGUJFzmC3MB4ZGGiCUydCknGAF%2FpQqGIfAhyX4lqbBHQBviLffhxn%2FpDF7kPEmnyzV6GSjDlm7HEBjqkAV5Lp6lavs43Vyg6ZY9JjDhDr3hkENp33y6IhnOzcpTuIUB%2FtlXCm6PTxRC%2BE5N0gt9SUc%2B4avif3Qvf7WKVVTsiaSE4HuzOvj%2B5CoaN9h9AcM6%2BOv1YrQRyYqes5Q0%2Bhe6pVBXK7uh5mI%2FIifgS3VU6UTKn7Svaf0cFxhsmmUjrouX9blHhcAN6R6%2Bj%2BP4%2Fa0GAWr8bz816K0bbaZjs2mC4VaCa&X-Amz-Signature=9bb21fb2bf8b0907315853a06030f596f59a65711da372f90f15dc97a6d26e3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPIGGFXW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkYeo87OYsbOZ78x1PeX0RPunWeIJbnHM2WpFo3vi%2BtQIhAIlDRTuB2akfRV0xd6FGRO%2B6rRSkkf3lz%2FDlVm9pmaUYKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNCRSMnxnzz%2BbCVm8q3AO2RnCR1xu84WbgaTzGqQB1XZnUz1yeKocUGaO7L%2BCDpANAsogNgD3MRiyDYGbNR1ss7vSDxQZkNLfPjgq0imxTw0nwRVs7LoMztc%2Fh0iVIU5rr1zwudk6mp29q9HCI9anbfkjN1R4lCcRQxHN8eDKa3moacbaS38T1Dn6cr2I45yR25mogvC3olXgupQUqMRCDGFFgfJp7NDAkuLv3dOWoB2mIJTTLoCziLmA91ZiZGM4DEefxRklIw6QVCFKh2aZYCf0bCOdPGPLwb9ki%2BATHeOxr6%2BqKsowQ536D9NSH%2BwP7jYjQi%2FvToGmrLcYzDKDNb2VcssaQGzUD9hpHdEjnfbvmwgdKxfWmhmsPIFR%2B75GDVA1HItK%2Bi3P3cDozdILKdTbIf77agN11nRZ%2BbA9mUZQ4IIYpm7VN1x%2B4cJzGhoJ4RrtVXPTudJ9gHSOBy9Fk1l%2BEYcroT6vtn72VBbCdyrEpvDAmtMaXBlixsTLk9yRa%2BIj8p2SUsf0OHm8U3AbqFAY%2BgUkEApfDYDIUN8QZakRXA3neDJ4SANKxGhk1yn8B6e9hDUpvQGUJFzmC3MB4ZGGiCUydCknGAF%2FpQqGIfAhyX4lqbBHQBviLffhxn%2FpDF7kPEmnyzV6GSjDlm7HEBjqkAV5Lp6lavs43Vyg6ZY9JjDhDr3hkENp33y6IhnOzcpTuIUB%2FtlXCm6PTxRC%2BE5N0gt9SUc%2B4avif3Qvf7WKVVTsiaSE4HuzOvj%2B5CoaN9h9AcM6%2BOv1YrQRyYqes5Q0%2Bhe6pVBXK7uh5mI%2FIifgS3VU6UTKn7Svaf0cFxhsmmUjrouX9blHhcAN6R6%2Bj%2BP4%2Fa0GAWr8bz816K0bbaZjs2mC4VaCa&X-Amz-Signature=3350938412bbe6406506e94c65a278d47785e78379d21a0c84c5c65c2f09b216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
