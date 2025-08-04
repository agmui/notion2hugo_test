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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXV5SP5H%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDsfPeUXGe9hYIvmxoYuIrcbT%2B3OA6YjOH4n9ERu%2BbEUwIgcrFoDwO9goVbNNL1MqOfrJ%2Fay70ss2r3E%2BlgPoZ4QWYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDx8onVR%2B%2BupyGz3QSrcA9E%2B6DD3%2BT9gBaNZhk3u2%2Bt2xxpSx9k7MGtFi3pnGT5gFIwgGMI51vVka6uOPAX89%2Bu8v0jxXwaEKlSMbCBKYZtzmlZoiRwLDSb4Ka7SHfwFn9AqaYbsgK0GNcQeyOpPzsfDAjFDCcWF4ntaLRAyps7mUhCwejKST9WWQ0LMX3Uh6b6v90o9Vc1oCGdoihkxHZ6w2SaHee4JFlhus0QjrKNIGHcfdo0nBDlsL%2Fr038kvCBiWv2sgUVOwTBXaZZttgeU3jkmdnUr7QeSvsK75iibpgTsdfZ7daNuveN4rdLHa%2BgRKrFRKwzk8Z6K5iCMKwsrWPE9KM1STkFpvFpqcgbG1n5bdYJXeIRcBgS2f2jAX4lfE2zt5js6Pfa9jAI%2Bt6dbRUvrvf4gX9jMZ%2BDUDz0z%2BfXUgKLaLOsfkNzAtab1OppL9e7OXZQlj%2F1APhZleUFL4oqU9nEyHU%2Bo3DT6brWOBqCJCz0JlML2R5H0xSJXsn5XiBCl%2FqjjEZ%2FQBrN%2BjuMGtOL9OSTgP0eWFgp0Q0FeGk%2FW7pRyf%2FvS2Tj9XrP%2BCXEAcB7TQch2rPTw%2BNjDjcS15bNCvRVoD%2FFLF28KkWBsVHA7kLz%2FiCbtzctF1%2BIrXLcVV94L8JWeaRVaoMK6CwsQGOqUBdU6Qy%2F%2BveBRJ5nbw7wHI%2FnKOTrMGBhFugmSbx48oNkjeBDPyX%2B54JqYhgLMjZ%2FsK90dSX1JdYWpdwnaPYIjt8MNByEHIhFsLG%2F9c9hxUF0FQplHzY4ORPu7QdM%2FOruU1V83uFQxFnwzLv8B4%2Bp7QpBV%2FUlXGoh6gh0LE5xQX29ea1wXYdtGEdPToVoIObreqqlqGxN8CtCzqbuB4APTPWvUbmVmZ&X-Amz-Signature=512fe81c5a1e0f44e607cdb5f8ad0f935633616cdf29777ee7d3bfb53f635ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXV5SP5H%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDsfPeUXGe9hYIvmxoYuIrcbT%2B3OA6YjOH4n9ERu%2BbEUwIgcrFoDwO9goVbNNL1MqOfrJ%2Fay70ss2r3E%2BlgPoZ4QWYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDx8onVR%2B%2BupyGz3QSrcA9E%2B6DD3%2BT9gBaNZhk3u2%2Bt2xxpSx9k7MGtFi3pnGT5gFIwgGMI51vVka6uOPAX89%2Bu8v0jxXwaEKlSMbCBKYZtzmlZoiRwLDSb4Ka7SHfwFn9AqaYbsgK0GNcQeyOpPzsfDAjFDCcWF4ntaLRAyps7mUhCwejKST9WWQ0LMX3Uh6b6v90o9Vc1oCGdoihkxHZ6w2SaHee4JFlhus0QjrKNIGHcfdo0nBDlsL%2Fr038kvCBiWv2sgUVOwTBXaZZttgeU3jkmdnUr7QeSvsK75iibpgTsdfZ7daNuveN4rdLHa%2BgRKrFRKwzk8Z6K5iCMKwsrWPE9KM1STkFpvFpqcgbG1n5bdYJXeIRcBgS2f2jAX4lfE2zt5js6Pfa9jAI%2Bt6dbRUvrvf4gX9jMZ%2BDUDz0z%2BfXUgKLaLOsfkNzAtab1OppL9e7OXZQlj%2F1APhZleUFL4oqU9nEyHU%2Bo3DT6brWOBqCJCz0JlML2R5H0xSJXsn5XiBCl%2FqjjEZ%2FQBrN%2BjuMGtOL9OSTgP0eWFgp0Q0FeGk%2FW7pRyf%2FvS2Tj9XrP%2BCXEAcB7TQch2rPTw%2BNjDjcS15bNCvRVoD%2FFLF28KkWBsVHA7kLz%2FiCbtzctF1%2BIrXLcVV94L8JWeaRVaoMK6CwsQGOqUBdU6Qy%2F%2BveBRJ5nbw7wHI%2FnKOTrMGBhFugmSbx48oNkjeBDPyX%2B54JqYhgLMjZ%2FsK90dSX1JdYWpdwnaPYIjt8MNByEHIhFsLG%2F9c9hxUF0FQplHzY4ORPu7QdM%2FOruU1V83uFQxFnwzLv8B4%2Bp7QpBV%2FUlXGoh6gh0LE5xQX29ea1wXYdtGEdPToVoIObreqqlqGxN8CtCzqbuB4APTPWvUbmVmZ&X-Amz-Signature=9af1022d35d0600ad9e57500f09bf78dd1bb8345d471b0a8fbd2ab92afe9b46e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXV5SP5H%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDsfPeUXGe9hYIvmxoYuIrcbT%2B3OA6YjOH4n9ERu%2BbEUwIgcrFoDwO9goVbNNL1MqOfrJ%2Fay70ss2r3E%2BlgPoZ4QWYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDx8onVR%2B%2BupyGz3QSrcA9E%2B6DD3%2BT9gBaNZhk3u2%2Bt2xxpSx9k7MGtFi3pnGT5gFIwgGMI51vVka6uOPAX89%2Bu8v0jxXwaEKlSMbCBKYZtzmlZoiRwLDSb4Ka7SHfwFn9AqaYbsgK0GNcQeyOpPzsfDAjFDCcWF4ntaLRAyps7mUhCwejKST9WWQ0LMX3Uh6b6v90o9Vc1oCGdoihkxHZ6w2SaHee4JFlhus0QjrKNIGHcfdo0nBDlsL%2Fr038kvCBiWv2sgUVOwTBXaZZttgeU3jkmdnUr7QeSvsK75iibpgTsdfZ7daNuveN4rdLHa%2BgRKrFRKwzk8Z6K5iCMKwsrWPE9KM1STkFpvFpqcgbG1n5bdYJXeIRcBgS2f2jAX4lfE2zt5js6Pfa9jAI%2Bt6dbRUvrvf4gX9jMZ%2BDUDz0z%2BfXUgKLaLOsfkNzAtab1OppL9e7OXZQlj%2F1APhZleUFL4oqU9nEyHU%2Bo3DT6brWOBqCJCz0JlML2R5H0xSJXsn5XiBCl%2FqjjEZ%2FQBrN%2BjuMGtOL9OSTgP0eWFgp0Q0FeGk%2FW7pRyf%2FvS2Tj9XrP%2BCXEAcB7TQch2rPTw%2BNjDjcS15bNCvRVoD%2FFLF28KkWBsVHA7kLz%2FiCbtzctF1%2BIrXLcVV94L8JWeaRVaoMK6CwsQGOqUBdU6Qy%2F%2BveBRJ5nbw7wHI%2FnKOTrMGBhFugmSbx48oNkjeBDPyX%2B54JqYhgLMjZ%2FsK90dSX1JdYWpdwnaPYIjt8MNByEHIhFsLG%2F9c9hxUF0FQplHzY4ORPu7QdM%2FOruU1V83uFQxFnwzLv8B4%2Bp7QpBV%2FUlXGoh6gh0LE5xQX29ea1wXYdtGEdPToVoIObreqqlqGxN8CtCzqbuB4APTPWvUbmVmZ&X-Amz-Signature=852de415c2980a4553607899f8602887f7f035ab076a31624dc6c301742c482d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXV5SP5H%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDsfPeUXGe9hYIvmxoYuIrcbT%2B3OA6YjOH4n9ERu%2BbEUwIgcrFoDwO9goVbNNL1MqOfrJ%2Fay70ss2r3E%2BlgPoZ4QWYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDx8onVR%2B%2BupyGz3QSrcA9E%2B6DD3%2BT9gBaNZhk3u2%2Bt2xxpSx9k7MGtFi3pnGT5gFIwgGMI51vVka6uOPAX89%2Bu8v0jxXwaEKlSMbCBKYZtzmlZoiRwLDSb4Ka7SHfwFn9AqaYbsgK0GNcQeyOpPzsfDAjFDCcWF4ntaLRAyps7mUhCwejKST9WWQ0LMX3Uh6b6v90o9Vc1oCGdoihkxHZ6w2SaHee4JFlhus0QjrKNIGHcfdo0nBDlsL%2Fr038kvCBiWv2sgUVOwTBXaZZttgeU3jkmdnUr7QeSvsK75iibpgTsdfZ7daNuveN4rdLHa%2BgRKrFRKwzk8Z6K5iCMKwsrWPE9KM1STkFpvFpqcgbG1n5bdYJXeIRcBgS2f2jAX4lfE2zt5js6Pfa9jAI%2Bt6dbRUvrvf4gX9jMZ%2BDUDz0z%2BfXUgKLaLOsfkNzAtab1OppL9e7OXZQlj%2F1APhZleUFL4oqU9nEyHU%2Bo3DT6brWOBqCJCz0JlML2R5H0xSJXsn5XiBCl%2FqjjEZ%2FQBrN%2BjuMGtOL9OSTgP0eWFgp0Q0FeGk%2FW7pRyf%2FvS2Tj9XrP%2BCXEAcB7TQch2rPTw%2BNjDjcS15bNCvRVoD%2FFLF28KkWBsVHA7kLz%2FiCbtzctF1%2BIrXLcVV94L8JWeaRVaoMK6CwsQGOqUBdU6Qy%2F%2BveBRJ5nbw7wHI%2FnKOTrMGBhFugmSbx48oNkjeBDPyX%2B54JqYhgLMjZ%2FsK90dSX1JdYWpdwnaPYIjt8MNByEHIhFsLG%2F9c9hxUF0FQplHzY4ORPu7QdM%2FOruU1V83uFQxFnwzLv8B4%2Bp7QpBV%2FUlXGoh6gh0LE5xQX29ea1wXYdtGEdPToVoIObreqqlqGxN8CtCzqbuB4APTPWvUbmVmZ&X-Amz-Signature=a3828fd75543cc6cd81e958820be9b163f175bce2d343f6c45ad7efe0630709d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXV5SP5H%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDsfPeUXGe9hYIvmxoYuIrcbT%2B3OA6YjOH4n9ERu%2BbEUwIgcrFoDwO9goVbNNL1MqOfrJ%2Fay70ss2r3E%2BlgPoZ4QWYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDx8onVR%2B%2BupyGz3QSrcA9E%2B6DD3%2BT9gBaNZhk3u2%2Bt2xxpSx9k7MGtFi3pnGT5gFIwgGMI51vVka6uOPAX89%2Bu8v0jxXwaEKlSMbCBKYZtzmlZoiRwLDSb4Ka7SHfwFn9AqaYbsgK0GNcQeyOpPzsfDAjFDCcWF4ntaLRAyps7mUhCwejKST9WWQ0LMX3Uh6b6v90o9Vc1oCGdoihkxHZ6w2SaHee4JFlhus0QjrKNIGHcfdo0nBDlsL%2Fr038kvCBiWv2sgUVOwTBXaZZttgeU3jkmdnUr7QeSvsK75iibpgTsdfZ7daNuveN4rdLHa%2BgRKrFRKwzk8Z6K5iCMKwsrWPE9KM1STkFpvFpqcgbG1n5bdYJXeIRcBgS2f2jAX4lfE2zt5js6Pfa9jAI%2Bt6dbRUvrvf4gX9jMZ%2BDUDz0z%2BfXUgKLaLOsfkNzAtab1OppL9e7OXZQlj%2F1APhZleUFL4oqU9nEyHU%2Bo3DT6brWOBqCJCz0JlML2R5H0xSJXsn5XiBCl%2FqjjEZ%2FQBrN%2BjuMGtOL9OSTgP0eWFgp0Q0FeGk%2FW7pRyf%2FvS2Tj9XrP%2BCXEAcB7TQch2rPTw%2BNjDjcS15bNCvRVoD%2FFLF28KkWBsVHA7kLz%2FiCbtzctF1%2BIrXLcVV94L8JWeaRVaoMK6CwsQGOqUBdU6Qy%2F%2BveBRJ5nbw7wHI%2FnKOTrMGBhFugmSbx48oNkjeBDPyX%2B54JqYhgLMjZ%2FsK90dSX1JdYWpdwnaPYIjt8MNByEHIhFsLG%2F9c9hxUF0FQplHzY4ORPu7QdM%2FOruU1V83uFQxFnwzLv8B4%2Bp7QpBV%2FUlXGoh6gh0LE5xQX29ea1wXYdtGEdPToVoIObreqqlqGxN8CtCzqbuB4APTPWvUbmVmZ&X-Amz-Signature=06b42419cc2d8e43b1852c03ee7279e66f2b996a1397e83f3974b443780b5457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXV5SP5H%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDsfPeUXGe9hYIvmxoYuIrcbT%2B3OA6YjOH4n9ERu%2BbEUwIgcrFoDwO9goVbNNL1MqOfrJ%2Fay70ss2r3E%2BlgPoZ4QWYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDx8onVR%2B%2BupyGz3QSrcA9E%2B6DD3%2BT9gBaNZhk3u2%2Bt2xxpSx9k7MGtFi3pnGT5gFIwgGMI51vVka6uOPAX89%2Bu8v0jxXwaEKlSMbCBKYZtzmlZoiRwLDSb4Ka7SHfwFn9AqaYbsgK0GNcQeyOpPzsfDAjFDCcWF4ntaLRAyps7mUhCwejKST9WWQ0LMX3Uh6b6v90o9Vc1oCGdoihkxHZ6w2SaHee4JFlhus0QjrKNIGHcfdo0nBDlsL%2Fr038kvCBiWv2sgUVOwTBXaZZttgeU3jkmdnUr7QeSvsK75iibpgTsdfZ7daNuveN4rdLHa%2BgRKrFRKwzk8Z6K5iCMKwsrWPE9KM1STkFpvFpqcgbG1n5bdYJXeIRcBgS2f2jAX4lfE2zt5js6Pfa9jAI%2Bt6dbRUvrvf4gX9jMZ%2BDUDz0z%2BfXUgKLaLOsfkNzAtab1OppL9e7OXZQlj%2F1APhZleUFL4oqU9nEyHU%2Bo3DT6brWOBqCJCz0JlML2R5H0xSJXsn5XiBCl%2FqjjEZ%2FQBrN%2BjuMGtOL9OSTgP0eWFgp0Q0FeGk%2FW7pRyf%2FvS2Tj9XrP%2BCXEAcB7TQch2rPTw%2BNjDjcS15bNCvRVoD%2FFLF28KkWBsVHA7kLz%2FiCbtzctF1%2BIrXLcVV94L8JWeaRVaoMK6CwsQGOqUBdU6Qy%2F%2BveBRJ5nbw7wHI%2FnKOTrMGBhFugmSbx48oNkjeBDPyX%2B54JqYhgLMjZ%2FsK90dSX1JdYWpdwnaPYIjt8MNByEHIhFsLG%2F9c9hxUF0FQplHzY4ORPu7QdM%2FOruU1V83uFQxFnwzLv8B4%2Bp7QpBV%2FUlXGoh6gh0LE5xQX29ea1wXYdtGEdPToVoIObreqqlqGxN8CtCzqbuB4APTPWvUbmVmZ&X-Amz-Signature=6b76dd63faa8644de116a075f8c1ee4ad66f190de06e868e87f47e23ca8152e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXV5SP5H%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDsfPeUXGe9hYIvmxoYuIrcbT%2B3OA6YjOH4n9ERu%2BbEUwIgcrFoDwO9goVbNNL1MqOfrJ%2Fay70ss2r3E%2BlgPoZ4QWYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDx8onVR%2B%2BupyGz3QSrcA9E%2B6DD3%2BT9gBaNZhk3u2%2Bt2xxpSx9k7MGtFi3pnGT5gFIwgGMI51vVka6uOPAX89%2Bu8v0jxXwaEKlSMbCBKYZtzmlZoiRwLDSb4Ka7SHfwFn9AqaYbsgK0GNcQeyOpPzsfDAjFDCcWF4ntaLRAyps7mUhCwejKST9WWQ0LMX3Uh6b6v90o9Vc1oCGdoihkxHZ6w2SaHee4JFlhus0QjrKNIGHcfdo0nBDlsL%2Fr038kvCBiWv2sgUVOwTBXaZZttgeU3jkmdnUr7QeSvsK75iibpgTsdfZ7daNuveN4rdLHa%2BgRKrFRKwzk8Z6K5iCMKwsrWPE9KM1STkFpvFpqcgbG1n5bdYJXeIRcBgS2f2jAX4lfE2zt5js6Pfa9jAI%2Bt6dbRUvrvf4gX9jMZ%2BDUDz0z%2BfXUgKLaLOsfkNzAtab1OppL9e7OXZQlj%2F1APhZleUFL4oqU9nEyHU%2Bo3DT6brWOBqCJCz0JlML2R5H0xSJXsn5XiBCl%2FqjjEZ%2FQBrN%2BjuMGtOL9OSTgP0eWFgp0Q0FeGk%2FW7pRyf%2FvS2Tj9XrP%2BCXEAcB7TQch2rPTw%2BNjDjcS15bNCvRVoD%2FFLF28KkWBsVHA7kLz%2FiCbtzctF1%2BIrXLcVV94L8JWeaRVaoMK6CwsQGOqUBdU6Qy%2F%2BveBRJ5nbw7wHI%2FnKOTrMGBhFugmSbx48oNkjeBDPyX%2B54JqYhgLMjZ%2FsK90dSX1JdYWpdwnaPYIjt8MNByEHIhFsLG%2F9c9hxUF0FQplHzY4ORPu7QdM%2FOruU1V83uFQxFnwzLv8B4%2Bp7QpBV%2FUlXGoh6gh0LE5xQX29ea1wXYdtGEdPToVoIObreqqlqGxN8CtCzqbuB4APTPWvUbmVmZ&X-Amz-Signature=3d2ed3e8d1f0b00a5ac6e5c88ccbc249ea7919f43781ffea2a56dbc5d0f1098f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXV5SP5H%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDsfPeUXGe9hYIvmxoYuIrcbT%2B3OA6YjOH4n9ERu%2BbEUwIgcrFoDwO9goVbNNL1MqOfrJ%2Fay70ss2r3E%2BlgPoZ4QWYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDx8onVR%2B%2BupyGz3QSrcA9E%2B6DD3%2BT9gBaNZhk3u2%2Bt2xxpSx9k7MGtFi3pnGT5gFIwgGMI51vVka6uOPAX89%2Bu8v0jxXwaEKlSMbCBKYZtzmlZoiRwLDSb4Ka7SHfwFn9AqaYbsgK0GNcQeyOpPzsfDAjFDCcWF4ntaLRAyps7mUhCwejKST9WWQ0LMX3Uh6b6v90o9Vc1oCGdoihkxHZ6w2SaHee4JFlhus0QjrKNIGHcfdo0nBDlsL%2Fr038kvCBiWv2sgUVOwTBXaZZttgeU3jkmdnUr7QeSvsK75iibpgTsdfZ7daNuveN4rdLHa%2BgRKrFRKwzk8Z6K5iCMKwsrWPE9KM1STkFpvFpqcgbG1n5bdYJXeIRcBgS2f2jAX4lfE2zt5js6Pfa9jAI%2Bt6dbRUvrvf4gX9jMZ%2BDUDz0z%2BfXUgKLaLOsfkNzAtab1OppL9e7OXZQlj%2F1APhZleUFL4oqU9nEyHU%2Bo3DT6brWOBqCJCz0JlML2R5H0xSJXsn5XiBCl%2FqjjEZ%2FQBrN%2BjuMGtOL9OSTgP0eWFgp0Q0FeGk%2FW7pRyf%2FvS2Tj9XrP%2BCXEAcB7TQch2rPTw%2BNjDjcS15bNCvRVoD%2FFLF28KkWBsVHA7kLz%2FiCbtzctF1%2BIrXLcVV94L8JWeaRVaoMK6CwsQGOqUBdU6Qy%2F%2BveBRJ5nbw7wHI%2FnKOTrMGBhFugmSbx48oNkjeBDPyX%2B54JqYhgLMjZ%2FsK90dSX1JdYWpdwnaPYIjt8MNByEHIhFsLG%2F9c9hxUF0FQplHzY4ORPu7QdM%2FOruU1V83uFQxFnwzLv8B4%2Bp7QpBV%2FUlXGoh6gh0LE5xQX29ea1wXYdtGEdPToVoIObreqqlqGxN8CtCzqbuB4APTPWvUbmVmZ&X-Amz-Signature=896e6f57b8ed9fd9cc73b3a1d06a21806964a9ef8a8fca41e0ea78f0999a7609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXV5SP5H%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDsfPeUXGe9hYIvmxoYuIrcbT%2B3OA6YjOH4n9ERu%2BbEUwIgcrFoDwO9goVbNNL1MqOfrJ%2Fay70ss2r3E%2BlgPoZ4QWYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDx8onVR%2B%2BupyGz3QSrcA9E%2B6DD3%2BT9gBaNZhk3u2%2Bt2xxpSx9k7MGtFi3pnGT5gFIwgGMI51vVka6uOPAX89%2Bu8v0jxXwaEKlSMbCBKYZtzmlZoiRwLDSb4Ka7SHfwFn9AqaYbsgK0GNcQeyOpPzsfDAjFDCcWF4ntaLRAyps7mUhCwejKST9WWQ0LMX3Uh6b6v90o9Vc1oCGdoihkxHZ6w2SaHee4JFlhus0QjrKNIGHcfdo0nBDlsL%2Fr038kvCBiWv2sgUVOwTBXaZZttgeU3jkmdnUr7QeSvsK75iibpgTsdfZ7daNuveN4rdLHa%2BgRKrFRKwzk8Z6K5iCMKwsrWPE9KM1STkFpvFpqcgbG1n5bdYJXeIRcBgS2f2jAX4lfE2zt5js6Pfa9jAI%2Bt6dbRUvrvf4gX9jMZ%2BDUDz0z%2BfXUgKLaLOsfkNzAtab1OppL9e7OXZQlj%2F1APhZleUFL4oqU9nEyHU%2Bo3DT6brWOBqCJCz0JlML2R5H0xSJXsn5XiBCl%2FqjjEZ%2FQBrN%2BjuMGtOL9OSTgP0eWFgp0Q0FeGk%2FW7pRyf%2FvS2Tj9XrP%2BCXEAcB7TQch2rPTw%2BNjDjcS15bNCvRVoD%2FFLF28KkWBsVHA7kLz%2FiCbtzctF1%2BIrXLcVV94L8JWeaRVaoMK6CwsQGOqUBdU6Qy%2F%2BveBRJ5nbw7wHI%2FnKOTrMGBhFugmSbx48oNkjeBDPyX%2B54JqYhgLMjZ%2FsK90dSX1JdYWpdwnaPYIjt8MNByEHIhFsLG%2F9c9hxUF0FQplHzY4ORPu7QdM%2FOruU1V83uFQxFnwzLv8B4%2Bp7QpBV%2FUlXGoh6gh0LE5xQX29ea1wXYdtGEdPToVoIObreqqlqGxN8CtCzqbuB4APTPWvUbmVmZ&X-Amz-Signature=385c6670909b67316c375ff339a87ea9bcb86cf84da83a3275d5c2517db26ffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXV5SP5H%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDsfPeUXGe9hYIvmxoYuIrcbT%2B3OA6YjOH4n9ERu%2BbEUwIgcrFoDwO9goVbNNL1MqOfrJ%2Fay70ss2r3E%2BlgPoZ4QWYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDx8onVR%2B%2BupyGz3QSrcA9E%2B6DD3%2BT9gBaNZhk3u2%2Bt2xxpSx9k7MGtFi3pnGT5gFIwgGMI51vVka6uOPAX89%2Bu8v0jxXwaEKlSMbCBKYZtzmlZoiRwLDSb4Ka7SHfwFn9AqaYbsgK0GNcQeyOpPzsfDAjFDCcWF4ntaLRAyps7mUhCwejKST9WWQ0LMX3Uh6b6v90o9Vc1oCGdoihkxHZ6w2SaHee4JFlhus0QjrKNIGHcfdo0nBDlsL%2Fr038kvCBiWv2sgUVOwTBXaZZttgeU3jkmdnUr7QeSvsK75iibpgTsdfZ7daNuveN4rdLHa%2BgRKrFRKwzk8Z6K5iCMKwsrWPE9KM1STkFpvFpqcgbG1n5bdYJXeIRcBgS2f2jAX4lfE2zt5js6Pfa9jAI%2Bt6dbRUvrvf4gX9jMZ%2BDUDz0z%2BfXUgKLaLOsfkNzAtab1OppL9e7OXZQlj%2F1APhZleUFL4oqU9nEyHU%2Bo3DT6brWOBqCJCz0JlML2R5H0xSJXsn5XiBCl%2FqjjEZ%2FQBrN%2BjuMGtOL9OSTgP0eWFgp0Q0FeGk%2FW7pRyf%2FvS2Tj9XrP%2BCXEAcB7TQch2rPTw%2BNjDjcS15bNCvRVoD%2FFLF28KkWBsVHA7kLz%2FiCbtzctF1%2BIrXLcVV94L8JWeaRVaoMK6CwsQGOqUBdU6Qy%2F%2BveBRJ5nbw7wHI%2FnKOTrMGBhFugmSbx48oNkjeBDPyX%2B54JqYhgLMjZ%2FsK90dSX1JdYWpdwnaPYIjt8MNByEHIhFsLG%2F9c9hxUF0FQplHzY4ORPu7QdM%2FOruU1V83uFQxFnwzLv8B4%2Bp7QpBV%2FUlXGoh6gh0LE5xQX29ea1wXYdtGEdPToVoIObreqqlqGxN8CtCzqbuB4APTPWvUbmVmZ&X-Amz-Signature=af9a40c595ebb924ee5ee674008941b65feb67cb545d7c59ff78f304f5d5156b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654FCF74J%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDF376qbxDhZkRMAiB6BZjjU3taNtMXOrF3OM0GhzetZgIhAMuGzmC97GY9Ca5xM5uwhZYHbFY%2FUbLRjONd1P4V4u9fKv8DCEMQABoMNjM3NDIzMTgzODA1IgyKOgwTGlF05WMdsoEq3AOTUT6XvZwsv%2FC0AlkgT5IppRKQVZSgThYkP6Az%2FAqtjeeWsnKJE%2FWezO2JVUdFfNJcw3FTgjl8vi0TfiFs0aevD3V1AG9qsL2coj4HyrNi24fIGk%2BBORmanHjI8AzM%2FCch4G5Ua9H%2FEhn9xt20af4lJEsYG5WbkxMivRzZRCPe143K5nAWdJPnraqa%2BHOzo38pNZ4X57lWZHwxxZcmwW5WiDuMHYh0M34pazEwfM7pmzF%2FyGx%2BNcacDqUBWwBgPPlbVTZLJGVTXmlcuAPFMKe8PpZd3wUxz%2BUZJCkERyaxiYX9sdjdWGRF%2FB1MRyTyZg81toif%2FhmOgwwN4XMJBbvf9cZc%2FOxYT2GOZJWyXmHSCj8WiHRFW4oxNS%2FWNYmcZf2xehiYK1q%2FfYJl0Ys5qkDBW4UTqiX6lCgFQP7QnHZxH8CUYSNSGKFVNwftiR2cuiZEKZC72RKjYnWW1gF%2BkKFR5zoA%2B3%2BF1KWaNzkuvorr5Falo3WTLVKaUEvss3t3Edsg2gK0Dng8sDb9TUQhq0b4lAWG3v%2FfMd0IYZrxA%2Fj7l2HCJwn0kmPAIsmO9LNydx71tGGk0a2AvXxo%2FbxmpnnlbvFhf9bwNWlm3nxH02BD7m7HCRocfI9DVh3%2B2TDxgcLEBjqkAfVHjRkycrSElJP3Uc5jpDrOChn1w%2BnpUeWeSGecMbYgpKd82z6D3qr3kZp9dUNBvNcm7drNHYe5juGKJrZkKTSH0h8l3pWq%2FIFiVNDMUl7yJ4OJqBMFTt6qnz5ZeSICJ8XbrCadjaJ7No7aadnawf4Yo0ggfMKDtJ33AIVg5gdsEpp7BiD3n4yRbwf%2Bn%2FxZm26H0YDOGoa0uVrV7Ld7UBVAzlQG&X-Amz-Signature=0a12705d79b550c1b229552b41e028b5e6ab7cc1c9f1c4fc214bde2f766a778f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBPV6ONU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIHx9207zT%2B6%2F4%2BHqDmIBN0eaQXIAr6VEl0Wev76CimNWAiEA1fvGyY1K6v8pba6lfk%2FlfcjGlvaNsOUP27inYpPYbHcq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDP9NuQg8Hupkp6xkyircAyJlqVaZAupZoffPvBlBKAphLxJIHL3w4EehP9cdQAEz2yXigQnMi09azkocJ0PI4hvjv%2F%2FfQNXjS72cMtMla7dVXplXO2KQeiSPSuwx5O6RaisRYX3EMDSjxakjmVqG6mA6fQ%2FDeHgouMpSuQuwtFgg3RDgXFlYieoIzJJaQ3p1kmhHYv4OVm84rfjYQANDPaq7f4hIFTRW113GEmzZ%2BM4Cg0qAVGeKvHTFap9aSNGdxU0Z574gor%2B%2BuorlGUcpux7%2FVAXe4pG7JrTgfz4V%2FEnJ9Lji9kLAHPezcCSMYnBPEIbfluN0TAlEw%2BFGGSnXtBkp7GLfSvjiaeuwmfZ7ae%2BQAr3pL3oyVQYmt7qBp9DOPkefV5MIJHW%2FnQyMQYEs4mTQqhYcHbh2dr3DGIJh7PEvPMy7j006NFT8pBkKgILlGiLzlQCHP7A1mk9LhAXkVTa0i%2Fo7ICTQSIRN9x%2F4LAfG5%2BDHHvwZ7m22Fr%2FJA%2Ffeqlah4u%2B%2FLE30cnz%2B%2Bz%2FC6y2DYZIqNbIThzkWqOsnnOqNKvtvlid4sfO5eZTwWtgh%2FsGntYiboJyaFzu3obPMHNGafdtlnnTffGVOigwN0z9wMX0fGL3pk2nBxtmpPnzloInveP5kaqTFLj7YMPqAwsQGOqUBNFmSvhJF19WtsLDRYvDSd1Ke2%2F67sUj7hnmdZJS4kSNqAUlHhVz4Sz%2FSQLUSLkmT2DIV21g0%2FBG2zapTgFXzJ2seYW%2BSZ8Ul3RSbe8jI383hFymfV31kxBNHIGrVdjjnMVajrT4kSKlYq9%2F1NXr8iOeVCGUEZKHFs392UyZjxnhGnfnXo6%2F7CwtlgYNntCp%2BrrF2RsrzH3soPKc%2FfYVXdGz3KLly&X-Amz-Signature=853f6223a374856d54d47e632035981986ea5dd90947dd8ccf814946dbd4dddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E4FLFYG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDiE5FyEUI8PepY0AlM0NeywVcfXH3hjJXAw9a7roWLfQIhALJaZtvMr5WF0G4VeXjjDEcJgut9Eh4tEFWYjPeFYgrdKv8DCEMQABoMNjM3NDIzMTgzODA1IgwSJkeu3FISWX0Qu8Mq3AO99qfO2grazAf6tdc11a6YEJJjBmXZrVUE9I6lVwqsJzb1pVG6lO8sxUd%2FSjax8IQl2NN7W15524BP5vLHtfV7lpC%2FJ3o8ULEtoHSqNlxlOfxNEAE4Lvu9SB%2BR2QESP0htR59AMVSvIi%2FPRkmf356YixAIL8DSrqwBE5Q8Hd7t%2F4fbPl21WzHBisCYtQ9skYNuzXezGj3KUOkxNQRmNbN2wmX7JFW5gZd5k0o1lJm7H67AWwzECQal911aKZYnc%2BrYKjXcdGbC%2BIZxnf0OAUSKH3e7zM9igxGss2KGUhz1UMMTam8JpD5Xi46JlT9bSCoke22kB83oq4RMf6DS9m5xdqmCuSnxQCicl8yvPr3MMjt4ExjNsqR3jICT%2Fkt2G8R58ydqfN8hMCQgrqxA74v5qno6GgSZrE0jUeaY19sSpjFQjGj6clVMLB7iz2uaZYudnGycKL2gupUv94HQQLKVx1z1d%2FAbsjaZJpc%2BH4OXBVgsLZdsuoAsX68edoGi9PEsphx2Dy4k83ssXIdHpevfF06x2Zqlq0gqPHjW6DUjhqIJ22QPRs4KOhoHwWh3eaEXzHAYBsURkkIK7RtkUErU%2BGj%2FFNrF67sQVPS2jhU7dDP3zV41GndABJSEwDCNgcLEBjqkAfTNkoiH7Y2dCE1NGFWjae4bEPJcT3Kfa3C3qjKiFFvFngev49lzup50DCSyV4u%2Bg02Ddnwo4SQAhM3a%2F9dCjcj%2B1Dy%2BoZG2U1UpFB205mpuHcrb5lH1p3%2FFAIwx991L1akXcTnjCuD7%2B4%2BaLTh6kurmpU9z0a9u%2FkzmPPzKTIDTANdksLJ1%2BOBnI1gAron4ECGwqWea67v9LKJK5K9WtLy%2FDP%2Bh&X-Amz-Signature=29f4053db1a945ff542739dc9e7e0468fec14ede1679445dffd5684c43028357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXV5SP5H%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDsfPeUXGe9hYIvmxoYuIrcbT%2B3OA6YjOH4n9ERu%2BbEUwIgcrFoDwO9goVbNNL1MqOfrJ%2Fay70ss2r3E%2BlgPoZ4QWYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDx8onVR%2B%2BupyGz3QSrcA9E%2B6DD3%2BT9gBaNZhk3u2%2Bt2xxpSx9k7MGtFi3pnGT5gFIwgGMI51vVka6uOPAX89%2Bu8v0jxXwaEKlSMbCBKYZtzmlZoiRwLDSb4Ka7SHfwFn9AqaYbsgK0GNcQeyOpPzsfDAjFDCcWF4ntaLRAyps7mUhCwejKST9WWQ0LMX3Uh6b6v90o9Vc1oCGdoihkxHZ6w2SaHee4JFlhus0QjrKNIGHcfdo0nBDlsL%2Fr038kvCBiWv2sgUVOwTBXaZZttgeU3jkmdnUr7QeSvsK75iibpgTsdfZ7daNuveN4rdLHa%2BgRKrFRKwzk8Z6K5iCMKwsrWPE9KM1STkFpvFpqcgbG1n5bdYJXeIRcBgS2f2jAX4lfE2zt5js6Pfa9jAI%2Bt6dbRUvrvf4gX9jMZ%2BDUDz0z%2BfXUgKLaLOsfkNzAtab1OppL9e7OXZQlj%2F1APhZleUFL4oqU9nEyHU%2Bo3DT6brWOBqCJCz0JlML2R5H0xSJXsn5XiBCl%2FqjjEZ%2FQBrN%2BjuMGtOL9OSTgP0eWFgp0Q0FeGk%2FW7pRyf%2FvS2Tj9XrP%2BCXEAcB7TQch2rPTw%2BNjDjcS15bNCvRVoD%2FFLF28KkWBsVHA7kLz%2FiCbtzctF1%2BIrXLcVV94L8JWeaRVaoMK6CwsQGOqUBdU6Qy%2F%2BveBRJ5nbw7wHI%2FnKOTrMGBhFugmSbx48oNkjeBDPyX%2B54JqYhgLMjZ%2FsK90dSX1JdYWpdwnaPYIjt8MNByEHIhFsLG%2F9c9hxUF0FQplHzY4ORPu7QdM%2FOruU1V83uFQxFnwzLv8B4%2Bp7QpBV%2FUlXGoh6gh0LE5xQX29ea1wXYdtGEdPToVoIObreqqlqGxN8CtCzqbuB4APTPWvUbmVmZ&X-Amz-Signature=1d58b64b00a6efb65954f1f0294bebe4f60ffe397437ab45a4c6762f2757e285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG7556RT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCNM15VxpDAr29wg%2BF%2Bhuo7wA%2FXkTtOSQZ40uiHr5yJXAIhAPfJo%2F7tZSK0BgmitTb%2FkhedvVfS%2B0xTzKBfB6r5OqzeKv8DCEMQABoMNjM3NDIzMTgzODA1Igyt2ium267%2FxpXK%2FOIq3AMdXacTqvPsQvtcLFCET%2Bbs0udJFq9Whz138LOtbcoiVB5mRplMToaBqOfsu2HIy0531ecj36a3oRiFbfu58Ba2c26soSClK0lVfnmsPNguPKEPrvYP8aI8lPV8kxQeXrw%2F4zVxHJbmpmf5S7XjUgytktwPxg5DDKAxywdhqXVM6rEpPM09Mrx9OcRGDjZpP1HUr62PLXU8swgzQshmneBr6uFnNb2Nkmgu78qOAaro%2BAyyQRTP8ISAvfqJW0FfKS23SADeX8l%2BJOEviWCXnOUG0TAiGbsXKkv0d6XPu%2FcNplgOaxfUgN6Ubia2SeuVLlYztY9hpBuErbCYE%2F3IrNw%2B1pXvlXb2NeJqUAT7Xw%2F24zaHiCRrCzPUD6t%2BokdiY6dnURn32DMyZPVz7ykjsGeQFzEs7MnW0PYn6f6%2FrARdXk%2F8fzEDulvSjOvgW9%2BI4KB2Ub%2FyjullXpUOrN%2BncE7ajQtQUp7vLmzueQ4DXGD4e%2FODuikIHwjAfdWVOgAMF3j7ddcZdQUeiOTWcABaS%2Fk1EUito7GgaI3YEJwe2H0eJN%2BpD9DxIA%2FtxIm%2FyY%2FxFxCYh%2BOJ8VvuK2AGKWXkPQOE4KHfBKL6g4Pl71fH0jV0ICfJgyHHq6JO9RK7MTCEgcLEBjqkAWaGhu5Yb4lPw7pyxHzR7zJ0HmRlSkTXFZ%2BvjdltvqKSo5yFuzzkkdGDSGQXkNr%2By5imOZiGp9%2BY%2Bj6JdXn1ap0ZCPlpftECazw1c8XOfOPs3%2BLS%2FXR7XBRXg%2F0OiWjzhE23v1FJAEcrS5XeynGrsBWG5L8vPDIib8F6ZwTZpYr2MYWw95s7EOlxHKQhzAi1Lwbq2eIJC0om5L8KgjPE92JrtKaF&X-Amz-Signature=61ee475c2ed6dfdce5164a86b58d2227b5f53be50d7bf43c69d88d9b51478360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXV5SP5H%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDsfPeUXGe9hYIvmxoYuIrcbT%2B3OA6YjOH4n9ERu%2BbEUwIgcrFoDwO9goVbNNL1MqOfrJ%2Fay70ss2r3E%2BlgPoZ4QWYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDx8onVR%2B%2BupyGz3QSrcA9E%2B6DD3%2BT9gBaNZhk3u2%2Bt2xxpSx9k7MGtFi3pnGT5gFIwgGMI51vVka6uOPAX89%2Bu8v0jxXwaEKlSMbCBKYZtzmlZoiRwLDSb4Ka7SHfwFn9AqaYbsgK0GNcQeyOpPzsfDAjFDCcWF4ntaLRAyps7mUhCwejKST9WWQ0LMX3Uh6b6v90o9Vc1oCGdoihkxHZ6w2SaHee4JFlhus0QjrKNIGHcfdo0nBDlsL%2Fr038kvCBiWv2sgUVOwTBXaZZttgeU3jkmdnUr7QeSvsK75iibpgTsdfZ7daNuveN4rdLHa%2BgRKrFRKwzk8Z6K5iCMKwsrWPE9KM1STkFpvFpqcgbG1n5bdYJXeIRcBgS2f2jAX4lfE2zt5js6Pfa9jAI%2Bt6dbRUvrvf4gX9jMZ%2BDUDz0z%2BfXUgKLaLOsfkNzAtab1OppL9e7OXZQlj%2F1APhZleUFL4oqU9nEyHU%2Bo3DT6brWOBqCJCz0JlML2R5H0xSJXsn5XiBCl%2FqjjEZ%2FQBrN%2BjuMGtOL9OSTgP0eWFgp0Q0FeGk%2FW7pRyf%2FvS2Tj9XrP%2BCXEAcB7TQch2rPTw%2BNjDjcS15bNCvRVoD%2FFLF28KkWBsVHA7kLz%2FiCbtzctF1%2BIrXLcVV94L8JWeaRVaoMK6CwsQGOqUBdU6Qy%2F%2BveBRJ5nbw7wHI%2FnKOTrMGBhFugmSbx48oNkjeBDPyX%2B54JqYhgLMjZ%2FsK90dSX1JdYWpdwnaPYIjt8MNByEHIhFsLG%2F9c9hxUF0FQplHzY4ORPu7QdM%2FOruU1V83uFQxFnwzLv8B4%2Bp7QpBV%2FUlXGoh6gh0LE5xQX29ea1wXYdtGEdPToVoIObreqqlqGxN8CtCzqbuB4APTPWvUbmVmZ&X-Amz-Signature=543a590036e60f631a349f049d3eea17790d685c6d7ca8809b134fd02867e9d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDYUYI7X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIF9p9ywT%2BY2kPciYSQS%2BJHkHCFZdgGXq3ZU21wXwACu9AiA9YzjOYLGShFRf5WScCrpLeXn8foqQeGs7lYXzUjApUyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMndWvkXJFqNiSnyL2KtwDkcE5kF9ktPy%2BaAJ4MS0wa%2FF7LoQjRW8m5Yu4eMupOSETvMU%2FfK0XgDtF%2F%2F69AjMwMQSdXorHIicsKNNja5EJr6oR%2FPZ8hZpXHGS4jwdx%2FUV1aW4v582uVLzV0qugDghC99MfOsJR989DpevUWU%2FB2QvRylMpGaiPtbt3928%2BJgh189VDGE9Yz1I660kvrwqwBr7A4mf5P3nSEsznCo%2BwGVV0FueRHU5t%2FMSKW1JdbzEQ94Y%2FbC%2BllbP5yrbDlUhSPRZ%2BhWzGm%2FIu2KXxAjpu8sVIqy4BwrdaaaeZLV0cn%2BT4O9qB4BU7ERqntyABgROPDm4xFkwknxWHWMoVJQ27dsKqw8t8U4zRyECdUWrAc%2BaxRW9JFta51DUGIrXROWSau%2BWw1h2hu3KIGlX6URwGTAYnTI1N24%2BOYlotno7z0WLV4zwBbABlhDSbWMNojiIqxAO%2BKMl4fngyMU9ViRUbDm7PzsDq%2B%2BjDSoWpFyYZMNhMJ74tp0wSsrRGZ8wbVUmlNT4cCyQqVWqJxGLgGTqf9XsK8%2F5PP3zw%2FsRWP%2FtEYQPcGHdWYL0VC%2BTSu0k2m5xb0XWfAN4bhQfoPYFF3g%2BhhOSx4vauUyq2b3K4Z%2FI3B7oDEsyhaSV9JyOvOPEwqoLCxAY6pgFpLTO%2B5X6B%2Br17CYYR%2BtcRpoyk7LQULHs%2BD8BbjTx42AaMfSfJQamU3%2BE2u2UKKIuN1m6P3NtpwIJIjsCysumti%2BBhEv4yhZ2vSo9adesQ%2BrmLVBU2Jf4RZjis7M0v%2FegYC2%2F0%2BYHcPP8xv9oSewo7g9IEBHGo0g3bvd05e2XA%2BkE7MAVWTq6bvYBu64GEqxgO3ZL59M0j8iqjsHv9%2FDrHYhL5o5KI&X-Amz-Signature=8d67f80b06f3743a4ba7a020e11c8605cbcac7b2b9919cea16da34bbada21b5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXV5SP5H%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDsfPeUXGe9hYIvmxoYuIrcbT%2B3OA6YjOH4n9ERu%2BbEUwIgcrFoDwO9goVbNNL1MqOfrJ%2Fay70ss2r3E%2BlgPoZ4QWYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDx8onVR%2B%2BupyGz3QSrcA9E%2B6DD3%2BT9gBaNZhk3u2%2Bt2xxpSx9k7MGtFi3pnGT5gFIwgGMI51vVka6uOPAX89%2Bu8v0jxXwaEKlSMbCBKYZtzmlZoiRwLDSb4Ka7SHfwFn9AqaYbsgK0GNcQeyOpPzsfDAjFDCcWF4ntaLRAyps7mUhCwejKST9WWQ0LMX3Uh6b6v90o9Vc1oCGdoihkxHZ6w2SaHee4JFlhus0QjrKNIGHcfdo0nBDlsL%2Fr038kvCBiWv2sgUVOwTBXaZZttgeU3jkmdnUr7QeSvsK75iibpgTsdfZ7daNuveN4rdLHa%2BgRKrFRKwzk8Z6K5iCMKwsrWPE9KM1STkFpvFpqcgbG1n5bdYJXeIRcBgS2f2jAX4lfE2zt5js6Pfa9jAI%2Bt6dbRUvrvf4gX9jMZ%2BDUDz0z%2BfXUgKLaLOsfkNzAtab1OppL9e7OXZQlj%2F1APhZleUFL4oqU9nEyHU%2Bo3DT6brWOBqCJCz0JlML2R5H0xSJXsn5XiBCl%2FqjjEZ%2FQBrN%2BjuMGtOL9OSTgP0eWFgp0Q0FeGk%2FW7pRyf%2FvS2Tj9XrP%2BCXEAcB7TQch2rPTw%2BNjDjcS15bNCvRVoD%2FFLF28KkWBsVHA7kLz%2FiCbtzctF1%2BIrXLcVV94L8JWeaRVaoMK6CwsQGOqUBdU6Qy%2F%2BveBRJ5nbw7wHI%2FnKOTrMGBhFugmSbx48oNkjeBDPyX%2B54JqYhgLMjZ%2FsK90dSX1JdYWpdwnaPYIjt8MNByEHIhFsLG%2F9c9hxUF0FQplHzY4ORPu7QdM%2FOruU1V83uFQxFnwzLv8B4%2Bp7QpBV%2FUlXGoh6gh0LE5xQX29ea1wXYdtGEdPToVoIObreqqlqGxN8CtCzqbuB4APTPWvUbmVmZ&X-Amz-Signature=215e474452d55030fb0748f966cb21817408cfb3e7495c5a724b1925bbcc0a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7HYWO7D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCFVnXcK0MOxOW%2FLHsypXFck8gqtzJ4GH2NrPv7GimL%2BwIhANmd8cwyHLQuBiGYBmQInTgZGIj0pam0wCLvxADrVNnnKv8DCEMQABoMNjM3NDIzMTgzODA1Igy7Tdui8rcbrkH1XQQq3AOsvoBkQFS1WGzBOOnqnPc%2F4Yu7xSFzCwZlUy1F%2Fu50QsX8xR0oc%2B3weFzoY1Q0HnzqSWSy2tsHAJv0ytMn9OqP0R3hKTtMZooF%2FkxioPmfi4hX37E6Jye4EwZuNenbbgxlx309Za%2FtdcAHfN28052V9952N1eOfQYNfftwfKcqc8LQG2RvfqQN7nM2sodXdH%2FGsAr1XFHC37mxdOmM1gjD%2BMEFHMV37oR4HaanCfhn%2BmSJIdDRPBEGY3I5Gc9jncouq5p%2Fyf%2F4v91jNDrlHnmsWZk143iTi9quy8XxYt5DMpLWNi%2FwlrYGDuA4QuhaVzRYTod5uY80FWcZyMuKkw%2BJzfmELcoh2cHpH%2Bo8z30gfFNKVHB6OVnVDmS46Y4zyo020KvS%2FwUyEO8n5wHpWIBYkb49Q2TNKyHJSillbkYZkJyQxHSjerGmep0hnJ%2BFCBKpgqgRkxVyBkdHfsE7dOylw4wGaLhylVEppiZ%2FSdbWjsSVA9RNZq%2BLZSuVJ8ZE9m76bG37w2IXu7Lm2fDYRDLEkAvVgPRKMzuaENa%2BgXzvg%2BVuuSq1Rv33kchNJvGH8fNWg38bjnMLnwD%2Bm5S0YRRgaG5e1XEUI%2Fh4Ku3uuf3Wevnn9JSVcsAsaG7BBjCJgcLEBjqkAbBqJcfpCPUPnKbGCUiAmf4UaFHlibFaSco%2Bm1sKC4tINYuF%2FCqT6MWBiuqbfuNXXf4eChr780uQIzSpkkT9zCqMkQJHhQguTWv8hHL0%2FZwVA%2B%2BQat1y4gZWFVCdwb6gqGrj4dXPUv%2FmTqIxxuqiNik%2FnH4LkmZhPv82h4%2Ffo1zu%2BqlGe84auE4Hv2vhs9J%2B6HmAFbVSfuelg3cjxuk3hO05mfVi&X-Amz-Signature=f1541f39851b57c350912d1b01abb10c0df1a691cf91fcbb6996a751edb35d3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXV5SP5H%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDsfPeUXGe9hYIvmxoYuIrcbT%2B3OA6YjOH4n9ERu%2BbEUwIgcrFoDwO9goVbNNL1MqOfrJ%2Fay70ss2r3E%2BlgPoZ4QWYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDx8onVR%2B%2BupyGz3QSrcA9E%2B6DD3%2BT9gBaNZhk3u2%2Bt2xxpSx9k7MGtFi3pnGT5gFIwgGMI51vVka6uOPAX89%2Bu8v0jxXwaEKlSMbCBKYZtzmlZoiRwLDSb4Ka7SHfwFn9AqaYbsgK0GNcQeyOpPzsfDAjFDCcWF4ntaLRAyps7mUhCwejKST9WWQ0LMX3Uh6b6v90o9Vc1oCGdoihkxHZ6w2SaHee4JFlhus0QjrKNIGHcfdo0nBDlsL%2Fr038kvCBiWv2sgUVOwTBXaZZttgeU3jkmdnUr7QeSvsK75iibpgTsdfZ7daNuveN4rdLHa%2BgRKrFRKwzk8Z6K5iCMKwsrWPE9KM1STkFpvFpqcgbG1n5bdYJXeIRcBgS2f2jAX4lfE2zt5js6Pfa9jAI%2Bt6dbRUvrvf4gX9jMZ%2BDUDz0z%2BfXUgKLaLOsfkNzAtab1OppL9e7OXZQlj%2F1APhZleUFL4oqU9nEyHU%2Bo3DT6brWOBqCJCz0JlML2R5H0xSJXsn5XiBCl%2FqjjEZ%2FQBrN%2BjuMGtOL9OSTgP0eWFgp0Q0FeGk%2FW7pRyf%2FvS2Tj9XrP%2BCXEAcB7TQch2rPTw%2BNjDjcS15bNCvRVoD%2FFLF28KkWBsVHA7kLz%2FiCbtzctF1%2BIrXLcVV94L8JWeaRVaoMK6CwsQGOqUBdU6Qy%2F%2BveBRJ5nbw7wHI%2FnKOTrMGBhFugmSbx48oNkjeBDPyX%2B54JqYhgLMjZ%2FsK90dSX1JdYWpdwnaPYIjt8MNByEHIhFsLG%2F9c9hxUF0FQplHzY4ORPu7QdM%2FOruU1V83uFQxFnwzLv8B4%2Bp7QpBV%2FUlXGoh6gh0LE5xQX29ea1wXYdtGEdPToVoIObreqqlqGxN8CtCzqbuB4APTPWvUbmVmZ&X-Amz-Signature=cfc14302b5b38324b4eef270c541fc6acaaaed112ca52002cb1e25707b667fd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654EAXBXS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD9XA2CIi1Vg7v66X3TNoZcN3rHDewYnBq92SZiTrJYOgIhAOyxziGa8XsB%2BDxWu7AVW7I8SQicNnE3p3x0qyj4Ti9RKv8DCEMQABoMNjM3NDIzMTgzODA1IgwKmqaLQu6IVHlmwEcq3APzv0MFphvXoEOT8goYa2TycBT%2Bm1NXjO3i5KmIyKnFKKgS3cCQpscvet5PXtb9xUGKDPQM6aQfEUoq6uUlBh%2BiqKArx5CwxyJ9b%2FWcWJ5o1a2VX2mitxSPa%2FFz0nwZAo02tafY0W0Uls8yuFZOFSD9TJ2AAon1YnkoAEaYQDjvk%2F%2BYUto1H8wkJ%2BpMh%2FeT9YYLs0JmAk44H%2FKtBThlMhL0l%2BHUiP38Rm9cFvDmDRGKmtkn7Yt3NfvNHSmAruJvX5XEkyQeeowBbLCAj8Be9oHpqohbvG%2BGG1hjh%2B7t6ZwKbZ%2FSsiUQR7tDd%2BVzzk99GO8nFWq696Mhy92JyULZ8V6bwSf7LX%2BeWwf0sw3cl0Y3hNvKLFVD2N0uqzFe8kzlX1%2FpobQ5R9oj04tzeCaq8kTZZDrxnJtALCErWtsdIChSQLAyTn2c6Ym39UmShYElQb7ksSca8NGRAZkI0tNZeDwA%2FNTX2Jqgd01UJ8%2FrvQhpYo5CB4QLJXMhQmEP0dK6jyhU1%2F%2FmsLBlkh6XjMy3HEUAjXWlO52ppPNmY3SPwVGQmuV9VRKG%2BB4cEIkgHeytWa0AJ8Vx2vmUzML3naV8TPrQbSbAIFqZvXB4NoAsl64tbioTMVLwccxdCuTcDTCYgsLEBjqkAbhSmgGRqy77YS6lwocX439KRPT9lTqf77%2B2FUVc1Yex8mB8nkkTRT4r4nYBcchJqO3Gi8OO7Tq1tKx9S4X8JnU%2Fz%2BtHolg33CNX6JSw7N6%2FHVwCWYle2Z5zAdbPT7D%2B8G9JW5Z%2BbTMaz%2BgPNBaIbaGjRcgj%2FdWDgQuC8qbzq3OUWQXLOrvw51jjo%2FLYI3u4ZSDZmgnabcH8%2FogGjIfn2NSQvXCs&X-Amz-Signature=51be5ceb52932fec12436a94b58a64871fe7847e0cc000ac9d20ed4212ed0705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV3BIX76%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDVzcp2FXWn3CU%2BR4KE0lO8AS8%2FhzGknYxS66Exi5EYLAIhAJb0FkkjLc7uFDu8x77tmudnzqXmeQWxz2kasFQjww3OKv8DCEMQABoMNjM3NDIzMTgzODA1IgwaIonIvnfKL4bmXV4q3APCtrTDpSrqup9%2FSswASzMQLMIwROB9n46cVdu172UM0ccKTELJHVGp8XgSFqfhVoxAv05X32eodE%2BUe4N491nuDEqlW0PnaJ6bjE4aNQoopsybAKkVNmo9n74UPlYML04yAMVXbKnXvo8fSKVpmzRvLZ%2BHDd2PWHEN6QJbWlkun8IdfHG6u4Mm4atHWHdvXZYLmQmBcqxJcZb6RtfoRq7TeiSqYi6OjYzZAfuLtF2uVH2PvnHMyA8wJ9TKWKV83KfI0YE5O0yx%2F7R%2F9izRwHwvpiZpjp3LTmaJnz0v4tLIF7LZ4Ac9Uk%2BK4QIruId3kANsIHyfzEVv6ctTAC%2BclKB5CNSlZYUOPlboJwiyHDy6dAaabpQSxq0Ub2R%2F1Hw6NN%2F9Vg2jB887798y46ZGF7a4ufBvoVZeFkxhECNvOEN6DECIo471nvbylrvaunnK%2Fl4y84vRzkg55gGQpVwSbIPLHEqK%2Bvy4RC1tvl0SNigPdJh0T1EAO0I9r2sQB9eUEGr5NC2JvfcDAoK9zGDspwaJRB0JsaqMdrue3i6Aww4cD8yiwIC00BSN0DfMRdkbM8w9FxP%2BKIC0wmTRMetY5QLGIz75O%2F9k9Fi8FZ5usY434Te4e%2FV9iuRoouYEUjCNgcLEBjqkASfzmAQtX1vUl9%2F9FxV9Qvkyc7s6KRzo3Bu5tqJSJL%2F9hS7EUhuQVNNRN6FvaB%2BOKYhg%2FAiNrMLQz1xlNrrnN4EmRWV4EqUSFV%2FXH1NQjsOtsDfGPbYnLUsttQKx5MpXMPYcp5NAW1%2FtETV8vXm0KeugzHmP250XGOUXa4DMEnws5fPi2Cv1j%2F1rLRxYiy4SdCgv0%2FhHw%2Fk5t8BUxyqDbeieGXUT&X-Amz-Signature=f4416973460b51019bcada7846f29191d08f96e8edccf0a09ac13b843f84b1fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJDVU7LO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEoc18AdC5qQq%2BFigD0KmZSoAeLAeqaEczkvVBjP%2FGY%2FAiEArvqptAj418M5LRv1B4F%2FY71EVeu%2BkG2ow5WV1ZD%2B0Hcq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDiO0lyEjEI4YwWNpircAwgzOUlzje0gESUGRvLfgUYn5HIo6M5HhNwCNSJ3Jd4yY3%2BzULxWY4LcT1ab3dV3%2BQf2Xqmc8CXwAfd15McPAw8EXgSIdjVOdHRoiqstXu3xpMMky2YBBhLVmS9fwbSLoJpbYUIljozYzwdohhuaCUuGJuZsSL5acvo3WZuZiKlJr8iJmGRznMSzvp25qSxwkKh%2FXFdqOAY%2BEAYjo23%2BUYAESkK697HT%2Bi%2BU9odasWi93QQbScFiA3hYeXwx%2Fgl5QEUL8TgjH3yzfxR1ylALZmo%2BcAcWA7VPZQbq51u95XfdplXO7%2F0fVU3LY9g0FGJ1Tv9HUPrAXwV%2B3WXEtMyoRAnhHGCYG1Ky7yvZuhvWhCpAw17WLkXiM3FQX9VL9eGjIhuwcwH97DGStT4ePnNsj02PoPrYa0dw4BrZiJaA2egkHO5mpZ%2FsOoLrSEl6S5GpkZIKnkpSfp%2FgtB5B1JGl8fbALlHyzJXS5Ds1IZRSd4LzMwaMJsrpy1XPBIVH%2BUmjaf6oZfHGh8QJPff4bQCB7SkPOjlkHRpx%2FCh7s%2Fthi5gpfUTGdps%2FWRwkizEmsern1IHOaMsN80mJwHdSdqX9WnTPK7lbMp3cBcdDdMi3Uu5mZLNGVxPEaIb6NLIHMK6CwsQGOqUBJnC3ddSa%2F9%2F8Ql5MFg0MH9Ws23OP97i3YA7xb%2FDf5FZwjiT2SATAVBk81CVj24ii2g38BgyaqZ0X6X%2FirbQ%2BZsdLQDjCm2CDCRasFSf34csRkzYSsLGXY9tYLOq2wEA1JesrpzS5kiHnVOolfkDG%2BP9ZlLjmJlWqDaeISYiL6SjKSiYJRcaZybUHkViznNWoWku%2BeYq31h%2BbUqRLdubENUN2WVP8&X-Amz-Signature=386596c3abbc0f8dc522b9c4c6843e2b93704c9750f943bf0a53e9faec258975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7O4KY3C%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDwwLNY5hQV%2BS4hv7mkFTG0SHqiRz%2FkULk8pNSU6MrPygIgLyb7ufrioaZtFDmCziAA51ZPLy%2BN8c75Lkr8CeGOxYgq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDJ6aF5K%2BPiskIhuq8CrcA9fE8NaB0itWWmv%2FV63xqRfraEKjo9MaY2wzbHqoJbx5elWVDVW7VgmQloE%2Fgll2hdDa2G9q90nQCf68dWI4h2JM0dhJ3Wp5YG%2BaGPpppNrsD3ECkozf4ExqwDPfw8b28nWHIZYb28XkxnOkcheee49GavpJRNdmDu6Tos2bIiHFh5TDRGLj0P1mXxs6mAhSew%2BIkbXywgytCh88iA8ZTtRg07wnpKqyH9At%2FJbgVv2V05Y11WX12C1PSK%2Fv1dJUCVJzCszezVM%2FV0xjPnmzWjI4W2HVITWhqRoFSt2rA3sFSgHqDgbLWdE4jHO%2FVeEKpmnXUz2N7be0x8BSd7OWtZcCIiP9IE%2Brc602JLHjXUkYHGv3h0DIm9%2Bv25k6pMS5c6dV24ibe9ggEg5rZg3%2BygR3dXyGZRShAdnfQ%2Bxj01NZ8KRly1ZZ4GWwT%2BE5a6ZCYwAxaEBpnmp0VwaAn7v7E9xk%2BvuBF%2BFZHpqga6Bdx8NkBDxpUQOugV13Dw1YqMfrQQlNM86G8C11LBJFA80liJXc9o%2BaMhkmBzPvd6m0X9sGJxPCDjyL1OiVsaPj9XIR%2BvxgXH73YjFhQMYWNYmwuxs%2B5oyH0BFMpjr9vIqgRPUgIodYe1eazGrdkTgsMIaCwsQGOqUBCvJ4wtl0kfbp2TezCIunF870xAC54l6AQujomqpoQYU5cfpcFfDvPfIwOcBtEiBwu2DbNMm%2FvaIXNPOeB5uYlUY84gXMv0lfjIiGds5jIhoTStg8gla6z8MtA6ivQW2F27h84MBmWE1CNlSQ4OW713gPv8eYDTV7YOtg2%2F1LMHYQQdkqTGphv0WSKF5brxpc96E1QxCxPcVue3ihkCYj4Qdb9FAt&X-Amz-Signature=8675a3b8711b4b7349cca593f5908ec848d45a67ce659675cd2c78bf9b09956c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SA5VYAD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIEQMP2kmG%2F5vjRMXfRadiAictvcp4Ef%2BQBNbAgwdHKD2AiAfhi9pNO5iRCAxqnSjn7aFZOXq54G9a%2BD76YtBjsVJxir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMykCji6Pz6DuOMMyZKtwDIVwaPBv5Op3c9uQLXSf5rqudfLQVpi4Pt8utDMjVD5kKt%2FQdUCaoVA6p3m55n%2BhCvU72ARE%2B2%2BEnRyvOruIJChrykvdT85cLQ7VP5RpAfA4jl4MCLiG8qQX6ogflqvgpQizH0vPX%2BeuI7gf1xCWYFOQSPyLtaAMRuuWDXz9twHG6aqd%2BeI%2BrLMWyTMqWSaSeYNH2ojqTrkBkMIurKydAI2rksal%2Ft5M8DZjWFSjFoujjptY7vpqNxBTjhz3DwFV3Q7iq3GCHjVaWDNnzm81mNo7VsnkUw1pfnTvzQ%2FKxO2MPWCR2T%2F2sX8OkaTK43jFj6yLBs5yQxt5PxJwjOJD3EjcbZ0sQezXxNvaUbZdLiSol8Vx%2B7otzz5G78uo9GmKONtVwKhQ4BTFTPNJZLLqVkdxOxRUAt%2Bxbb52TsNZkyK%2BaqJalGlwbeDWk4nrcDw6ZLGz35lpxbGa7f9Scmh39hlYt8dJXXUMW0iT1Py1xGEOWNpElbMebPKjFsp%2BuiWJXLyI88oRdRx%2FRA3QbtxnncHMFni%2F8afSEEEHD%2F9sLh5xmlG5Ww1hYBQJYokgvTjVajabBvsgNdfcjKD3wtrYf1y0LbrKwD4s6q4S81hTD8ZDkOVXWo7w2n27BCWkw94DCxAY6pgFe9pnq2QVS9%2FcO2H1VVypDmwJCKDobjovUUlinNhduSGryCRaqYv8HCt71utpHt8GakjQXXKOEH0KefHzC9Yp2pYZDlbT6tq0zePHOjUtRaZa65ql32%2FYVUmgfjKf%2B%2B5OE1wToldfEJ2u4BSSdhm4S5sOclzyVQzmyHizOg6xdkIfKFUldkPD7%2BSlb2xVQaSSNfbJf51%2F%2FH178dxRaJYXm2XD8B8%2Fz&X-Amz-Signature=8d34445f9fa4ec40c7490f6047770fafafd5288a6ec45ff7f1463256792d3c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXV5SP5H%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDsfPeUXGe9hYIvmxoYuIrcbT%2B3OA6YjOH4n9ERu%2BbEUwIgcrFoDwO9goVbNNL1MqOfrJ%2Fay70ss2r3E%2BlgPoZ4QWYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDx8onVR%2B%2BupyGz3QSrcA9E%2B6DD3%2BT9gBaNZhk3u2%2Bt2xxpSx9k7MGtFi3pnGT5gFIwgGMI51vVka6uOPAX89%2Bu8v0jxXwaEKlSMbCBKYZtzmlZoiRwLDSb4Ka7SHfwFn9AqaYbsgK0GNcQeyOpPzsfDAjFDCcWF4ntaLRAyps7mUhCwejKST9WWQ0LMX3Uh6b6v90o9Vc1oCGdoihkxHZ6w2SaHee4JFlhus0QjrKNIGHcfdo0nBDlsL%2Fr038kvCBiWv2sgUVOwTBXaZZttgeU3jkmdnUr7QeSvsK75iibpgTsdfZ7daNuveN4rdLHa%2BgRKrFRKwzk8Z6K5iCMKwsrWPE9KM1STkFpvFpqcgbG1n5bdYJXeIRcBgS2f2jAX4lfE2zt5js6Pfa9jAI%2Bt6dbRUvrvf4gX9jMZ%2BDUDz0z%2BfXUgKLaLOsfkNzAtab1OppL9e7OXZQlj%2F1APhZleUFL4oqU9nEyHU%2Bo3DT6brWOBqCJCz0JlML2R5H0xSJXsn5XiBCl%2FqjjEZ%2FQBrN%2BjuMGtOL9OSTgP0eWFgp0Q0FeGk%2FW7pRyf%2FvS2Tj9XrP%2BCXEAcB7TQch2rPTw%2BNjDjcS15bNCvRVoD%2FFLF28KkWBsVHA7kLz%2FiCbtzctF1%2BIrXLcVV94L8JWeaRVaoMK6CwsQGOqUBdU6Qy%2F%2BveBRJ5nbw7wHI%2FnKOTrMGBhFugmSbx48oNkjeBDPyX%2B54JqYhgLMjZ%2FsK90dSX1JdYWpdwnaPYIjt8MNByEHIhFsLG%2F9c9hxUF0FQplHzY4ORPu7QdM%2FOruU1V83uFQxFnwzLv8B4%2Bp7QpBV%2FUlXGoh6gh0LE5xQX29ea1wXYdtGEdPToVoIObreqqlqGxN8CtCzqbuB4APTPWvUbmVmZ&X-Amz-Signature=c5d44567654a82a4c5d733e05ad315bcc289d5b1947dfd7963d7e5464aa36bb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXV5SP5H%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDsfPeUXGe9hYIvmxoYuIrcbT%2B3OA6YjOH4n9ERu%2BbEUwIgcrFoDwO9goVbNNL1MqOfrJ%2Fay70ss2r3E%2BlgPoZ4QWYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDx8onVR%2B%2BupyGz3QSrcA9E%2B6DD3%2BT9gBaNZhk3u2%2Bt2xxpSx9k7MGtFi3pnGT5gFIwgGMI51vVka6uOPAX89%2Bu8v0jxXwaEKlSMbCBKYZtzmlZoiRwLDSb4Ka7SHfwFn9AqaYbsgK0GNcQeyOpPzsfDAjFDCcWF4ntaLRAyps7mUhCwejKST9WWQ0LMX3Uh6b6v90o9Vc1oCGdoihkxHZ6w2SaHee4JFlhus0QjrKNIGHcfdo0nBDlsL%2Fr038kvCBiWv2sgUVOwTBXaZZttgeU3jkmdnUr7QeSvsK75iibpgTsdfZ7daNuveN4rdLHa%2BgRKrFRKwzk8Z6K5iCMKwsrWPE9KM1STkFpvFpqcgbG1n5bdYJXeIRcBgS2f2jAX4lfE2zt5js6Pfa9jAI%2Bt6dbRUvrvf4gX9jMZ%2BDUDz0z%2BfXUgKLaLOsfkNzAtab1OppL9e7OXZQlj%2F1APhZleUFL4oqU9nEyHU%2Bo3DT6brWOBqCJCz0JlML2R5H0xSJXsn5XiBCl%2FqjjEZ%2FQBrN%2BjuMGtOL9OSTgP0eWFgp0Q0FeGk%2FW7pRyf%2FvS2Tj9XrP%2BCXEAcB7TQch2rPTw%2BNjDjcS15bNCvRVoD%2FFLF28KkWBsVHA7kLz%2FiCbtzctF1%2BIrXLcVV94L8JWeaRVaoMK6CwsQGOqUBdU6Qy%2F%2BveBRJ5nbw7wHI%2FnKOTrMGBhFugmSbx48oNkjeBDPyX%2B54JqYhgLMjZ%2FsK90dSX1JdYWpdwnaPYIjt8MNByEHIhFsLG%2F9c9hxUF0FQplHzY4ORPu7QdM%2FOruU1V83uFQxFnwzLv8B4%2Bp7QpBV%2FUlXGoh6gh0LE5xQX29ea1wXYdtGEdPToVoIObreqqlqGxN8CtCzqbuB4APTPWvUbmVmZ&X-Amz-Signature=0f4f37373d21dd50def1b98ad5258d9170f80390b02bef2c070470c1a7ccedcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZPYJQG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIA1NY10490q43H4GDYwVGxpzwrmNFAgLKrXOZSP0iSLsAiEApXJ8WomYz5pDwASZRF1jkcfHibBG1YThJd2IALbUqKYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDNS0GmhN%2FSaE2yEjYyrcA%2BR9nlV0ARcp7Wf%2FHIUFQUU9BBOAW2Klwr7ZFXAfAaqBgsM%2F%2F8g1lVr%2FZSkrPhxL8uPdhIGyvbDmHNpNRALjgcg%2FuP5S46dfYc9rCDAYImXkD8GaxPgTS9Q%2BHpiTa3UzVRT7Sk9BjMrXEcoKdRajehtMvgKyG5wM%2ByxhuG%2Bbbpd3Bzjdd7R6e5VLOgX9GK31dynYd0M7UY9TiuqUiW30OYx56IPFY%2BwPbGbi8gp874aTjiOwuYvshvNGP16q4TSP34fg3ET%2B0Io2XqxmoFQH6PomYWuMkwijulJdWNUkqmwVJfYnsFwWrXPGj3BdU%2F263NBQi98%2BArNnH2yCSeifubqVLLAvZYjP5BU5MCBQf3PP47A6%2BRb13RwhGHa0PtZL6mWMXj2lv4xfD4S6FgQEPYxCE%2FCXbDhgALEP%2FLQSqP%2BZ5C7wJ6ncmgjioCGQGRNpYXBLGkT3Hs4%2FS%2FVxHGc2fvm%2BPZ4rQWvEVnObRMCXdYz2HvcH%2F1bl4byTe0kwExtKKb2sjKtrmdAWjvky%2F15lQsrHb3w9LuZ%2Fdl%2BRtILmb2myZAxTyS8ExxZqbSLNhi5IVdLgYrdmJNHKTdng31R19iBLJuyYqoZsYN2VASevv%2F7KxYQypyjeI6YlFavNMPyAwsQGOqUBkP809RLrmXwQd3pkOa%2B8WRMuV8d1s8L6N2qt2KSw%2BzgK6j4KfmJxOoAI%2FxEZBmW5SFIgfILJKnF5Xytu%2F4cXcpbsmb%2FwfxJmXHubqhZwLLu%2Fz%2Ff5fHDfANM9XUWmf6d0Oez0JiMjAhBhhVqCEWVngyVjO97fyYDikNkWQlXcick8%2FDs6F7kiVZ5arjMaNFVW5eaI9ORJEDKTdTOCggrP3Ibb4HNB&X-Amz-Signature=147205adaf7b0d013656580e2419967d536459fe1e8d7d07e9867fc1b6e24d08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZPYJQG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIA1NY10490q43H4GDYwVGxpzwrmNFAgLKrXOZSP0iSLsAiEApXJ8WomYz5pDwASZRF1jkcfHibBG1YThJd2IALbUqKYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDNS0GmhN%2FSaE2yEjYyrcA%2BR9nlV0ARcp7Wf%2FHIUFQUU9BBOAW2Klwr7ZFXAfAaqBgsM%2F%2F8g1lVr%2FZSkrPhxL8uPdhIGyvbDmHNpNRALjgcg%2FuP5S46dfYc9rCDAYImXkD8GaxPgTS9Q%2BHpiTa3UzVRT7Sk9BjMrXEcoKdRajehtMvgKyG5wM%2ByxhuG%2Bbbpd3Bzjdd7R6e5VLOgX9GK31dynYd0M7UY9TiuqUiW30OYx56IPFY%2BwPbGbi8gp874aTjiOwuYvshvNGP16q4TSP34fg3ET%2B0Io2XqxmoFQH6PomYWuMkwijulJdWNUkqmwVJfYnsFwWrXPGj3BdU%2F263NBQi98%2BArNnH2yCSeifubqVLLAvZYjP5BU5MCBQf3PP47A6%2BRb13RwhGHa0PtZL6mWMXj2lv4xfD4S6FgQEPYxCE%2FCXbDhgALEP%2FLQSqP%2BZ5C7wJ6ncmgjioCGQGRNpYXBLGkT3Hs4%2FS%2FVxHGc2fvm%2BPZ4rQWvEVnObRMCXdYz2HvcH%2F1bl4byTe0kwExtKKb2sjKtrmdAWjvky%2F15lQsrHb3w9LuZ%2Fdl%2BRtILmb2myZAxTyS8ExxZqbSLNhi5IVdLgYrdmJNHKTdng31R19iBLJuyYqoZsYN2VASevv%2F7KxYQypyjeI6YlFavNMPyAwsQGOqUBkP809RLrmXwQd3pkOa%2B8WRMuV8d1s8L6N2qt2KSw%2BzgK6j4KfmJxOoAI%2FxEZBmW5SFIgfILJKnF5Xytu%2F4cXcpbsmb%2FwfxJmXHubqhZwLLu%2Fz%2Ff5fHDfANM9XUWmf6d0Oez0JiMjAhBhhVqCEWVngyVjO97fyYDikNkWQlXcick8%2FDs6F7kiVZ5arjMaNFVW5eaI9ORJEDKTdTOCggrP3Ibb4HNB&X-Amz-Signature=348719b23555bc75174e6892e68d3d022ccd56569b4c4d112e74f0deab8dd41b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZPYJQG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIA1NY10490q43H4GDYwVGxpzwrmNFAgLKrXOZSP0iSLsAiEApXJ8WomYz5pDwASZRF1jkcfHibBG1YThJd2IALbUqKYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDNS0GmhN%2FSaE2yEjYyrcA%2BR9nlV0ARcp7Wf%2FHIUFQUU9BBOAW2Klwr7ZFXAfAaqBgsM%2F%2F8g1lVr%2FZSkrPhxL8uPdhIGyvbDmHNpNRALjgcg%2FuP5S46dfYc9rCDAYImXkD8GaxPgTS9Q%2BHpiTa3UzVRT7Sk9BjMrXEcoKdRajehtMvgKyG5wM%2ByxhuG%2Bbbpd3Bzjdd7R6e5VLOgX9GK31dynYd0M7UY9TiuqUiW30OYx56IPFY%2BwPbGbi8gp874aTjiOwuYvshvNGP16q4TSP34fg3ET%2B0Io2XqxmoFQH6PomYWuMkwijulJdWNUkqmwVJfYnsFwWrXPGj3BdU%2F263NBQi98%2BArNnH2yCSeifubqVLLAvZYjP5BU5MCBQf3PP47A6%2BRb13RwhGHa0PtZL6mWMXj2lv4xfD4S6FgQEPYxCE%2FCXbDhgALEP%2FLQSqP%2BZ5C7wJ6ncmgjioCGQGRNpYXBLGkT3Hs4%2FS%2FVxHGc2fvm%2BPZ4rQWvEVnObRMCXdYz2HvcH%2F1bl4byTe0kwExtKKb2sjKtrmdAWjvky%2F15lQsrHb3w9LuZ%2Fdl%2BRtILmb2myZAxTyS8ExxZqbSLNhi5IVdLgYrdmJNHKTdng31R19iBLJuyYqoZsYN2VASevv%2F7KxYQypyjeI6YlFavNMPyAwsQGOqUBkP809RLrmXwQd3pkOa%2B8WRMuV8d1s8L6N2qt2KSw%2BzgK6j4KfmJxOoAI%2FxEZBmW5SFIgfILJKnF5Xytu%2F4cXcpbsmb%2FwfxJmXHubqhZwLLu%2Fz%2Ff5fHDfANM9XUWmf6d0Oez0JiMjAhBhhVqCEWVngyVjO97fyYDikNkWQlXcick8%2FDs6F7kiVZ5arjMaNFVW5eaI9ORJEDKTdTOCggrP3Ibb4HNB&X-Amz-Signature=983716396dae265a3cde1a530c38d2091a38117dcc1358463abd5d410eaed9db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZPYJQG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIA1NY10490q43H4GDYwVGxpzwrmNFAgLKrXOZSP0iSLsAiEApXJ8WomYz5pDwASZRF1jkcfHibBG1YThJd2IALbUqKYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDNS0GmhN%2FSaE2yEjYyrcA%2BR9nlV0ARcp7Wf%2FHIUFQUU9BBOAW2Klwr7ZFXAfAaqBgsM%2F%2F8g1lVr%2FZSkrPhxL8uPdhIGyvbDmHNpNRALjgcg%2FuP5S46dfYc9rCDAYImXkD8GaxPgTS9Q%2BHpiTa3UzVRT7Sk9BjMrXEcoKdRajehtMvgKyG5wM%2ByxhuG%2Bbbpd3Bzjdd7R6e5VLOgX9GK31dynYd0M7UY9TiuqUiW30OYx56IPFY%2BwPbGbi8gp874aTjiOwuYvshvNGP16q4TSP34fg3ET%2B0Io2XqxmoFQH6PomYWuMkwijulJdWNUkqmwVJfYnsFwWrXPGj3BdU%2F263NBQi98%2BArNnH2yCSeifubqVLLAvZYjP5BU5MCBQf3PP47A6%2BRb13RwhGHa0PtZL6mWMXj2lv4xfD4S6FgQEPYxCE%2FCXbDhgALEP%2FLQSqP%2BZ5C7wJ6ncmgjioCGQGRNpYXBLGkT3Hs4%2FS%2FVxHGc2fvm%2BPZ4rQWvEVnObRMCXdYz2HvcH%2F1bl4byTe0kwExtKKb2sjKtrmdAWjvky%2F15lQsrHb3w9LuZ%2Fdl%2BRtILmb2myZAxTyS8ExxZqbSLNhi5IVdLgYrdmJNHKTdng31R19iBLJuyYqoZsYN2VASevv%2F7KxYQypyjeI6YlFavNMPyAwsQGOqUBkP809RLrmXwQd3pkOa%2B8WRMuV8d1s8L6N2qt2KSw%2BzgK6j4KfmJxOoAI%2FxEZBmW5SFIgfILJKnF5Xytu%2F4cXcpbsmb%2FwfxJmXHubqhZwLLu%2Fz%2Ff5fHDfANM9XUWmf6d0Oez0JiMjAhBhhVqCEWVngyVjO97fyYDikNkWQlXcick8%2FDs6F7kiVZ5arjMaNFVW5eaI9ORJEDKTdTOCggrP3Ibb4HNB&X-Amz-Signature=e375d8bb34b60caf22f8015ed6d8b66ad11e0d3836b2e5b02568d8e2ded39e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZPYJQG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIA1NY10490q43H4GDYwVGxpzwrmNFAgLKrXOZSP0iSLsAiEApXJ8WomYz5pDwASZRF1jkcfHibBG1YThJd2IALbUqKYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDNS0GmhN%2FSaE2yEjYyrcA%2BR9nlV0ARcp7Wf%2FHIUFQUU9BBOAW2Klwr7ZFXAfAaqBgsM%2F%2F8g1lVr%2FZSkrPhxL8uPdhIGyvbDmHNpNRALjgcg%2FuP5S46dfYc9rCDAYImXkD8GaxPgTS9Q%2BHpiTa3UzVRT7Sk9BjMrXEcoKdRajehtMvgKyG5wM%2ByxhuG%2Bbbpd3Bzjdd7R6e5VLOgX9GK31dynYd0M7UY9TiuqUiW30OYx56IPFY%2BwPbGbi8gp874aTjiOwuYvshvNGP16q4TSP34fg3ET%2B0Io2XqxmoFQH6PomYWuMkwijulJdWNUkqmwVJfYnsFwWrXPGj3BdU%2F263NBQi98%2BArNnH2yCSeifubqVLLAvZYjP5BU5MCBQf3PP47A6%2BRb13RwhGHa0PtZL6mWMXj2lv4xfD4S6FgQEPYxCE%2FCXbDhgALEP%2FLQSqP%2BZ5C7wJ6ncmgjioCGQGRNpYXBLGkT3Hs4%2FS%2FVxHGc2fvm%2BPZ4rQWvEVnObRMCXdYz2HvcH%2F1bl4byTe0kwExtKKb2sjKtrmdAWjvky%2F15lQsrHb3w9LuZ%2Fdl%2BRtILmb2myZAxTyS8ExxZqbSLNhi5IVdLgYrdmJNHKTdng31R19iBLJuyYqoZsYN2VASevv%2F7KxYQypyjeI6YlFavNMPyAwsQGOqUBkP809RLrmXwQd3pkOa%2B8WRMuV8d1s8L6N2qt2KSw%2BzgK6j4KfmJxOoAI%2FxEZBmW5SFIgfILJKnF5Xytu%2F4cXcpbsmb%2FwfxJmXHubqhZwLLu%2Fz%2Ff5fHDfANM9XUWmf6d0Oez0JiMjAhBhhVqCEWVngyVjO97fyYDikNkWQlXcick8%2FDs6F7kiVZ5arjMaNFVW5eaI9ORJEDKTdTOCggrP3Ibb4HNB&X-Amz-Signature=bd9ef687431156acbe7cb4de6d91eef4eb9a46734b2490ed1199e5f6e93fb693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZPYJQG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIA1NY10490q43H4GDYwVGxpzwrmNFAgLKrXOZSP0iSLsAiEApXJ8WomYz5pDwASZRF1jkcfHibBG1YThJd2IALbUqKYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDNS0GmhN%2FSaE2yEjYyrcA%2BR9nlV0ARcp7Wf%2FHIUFQUU9BBOAW2Klwr7ZFXAfAaqBgsM%2F%2F8g1lVr%2FZSkrPhxL8uPdhIGyvbDmHNpNRALjgcg%2FuP5S46dfYc9rCDAYImXkD8GaxPgTS9Q%2BHpiTa3UzVRT7Sk9BjMrXEcoKdRajehtMvgKyG5wM%2ByxhuG%2Bbbpd3Bzjdd7R6e5VLOgX9GK31dynYd0M7UY9TiuqUiW30OYx56IPFY%2BwPbGbi8gp874aTjiOwuYvshvNGP16q4TSP34fg3ET%2B0Io2XqxmoFQH6PomYWuMkwijulJdWNUkqmwVJfYnsFwWrXPGj3BdU%2F263NBQi98%2BArNnH2yCSeifubqVLLAvZYjP5BU5MCBQf3PP47A6%2BRb13RwhGHa0PtZL6mWMXj2lv4xfD4S6FgQEPYxCE%2FCXbDhgALEP%2FLQSqP%2BZ5C7wJ6ncmgjioCGQGRNpYXBLGkT3Hs4%2FS%2FVxHGc2fvm%2BPZ4rQWvEVnObRMCXdYz2HvcH%2F1bl4byTe0kwExtKKb2sjKtrmdAWjvky%2F15lQsrHb3w9LuZ%2Fdl%2BRtILmb2myZAxTyS8ExxZqbSLNhi5IVdLgYrdmJNHKTdng31R19iBLJuyYqoZsYN2VASevv%2F7KxYQypyjeI6YlFavNMPyAwsQGOqUBkP809RLrmXwQd3pkOa%2B8WRMuV8d1s8L6N2qt2KSw%2BzgK6j4KfmJxOoAI%2FxEZBmW5SFIgfILJKnF5Xytu%2F4cXcpbsmb%2FwfxJmXHubqhZwLLu%2Fz%2Ff5fHDfANM9XUWmf6d0Oez0JiMjAhBhhVqCEWVngyVjO97fyYDikNkWQlXcick8%2FDs6F7kiVZ5arjMaNFVW5eaI9ORJEDKTdTOCggrP3Ibb4HNB&X-Amz-Signature=1ace87ed2efe4677dff15c2e40bae2c33f8de2d3996b508f750f1e36774acef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZPYJQG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIA1NY10490q43H4GDYwVGxpzwrmNFAgLKrXOZSP0iSLsAiEApXJ8WomYz5pDwASZRF1jkcfHibBG1YThJd2IALbUqKYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDNS0GmhN%2FSaE2yEjYyrcA%2BR9nlV0ARcp7Wf%2FHIUFQUU9BBOAW2Klwr7ZFXAfAaqBgsM%2F%2F8g1lVr%2FZSkrPhxL8uPdhIGyvbDmHNpNRALjgcg%2FuP5S46dfYc9rCDAYImXkD8GaxPgTS9Q%2BHpiTa3UzVRT7Sk9BjMrXEcoKdRajehtMvgKyG5wM%2ByxhuG%2Bbbpd3Bzjdd7R6e5VLOgX9GK31dynYd0M7UY9TiuqUiW30OYx56IPFY%2BwPbGbi8gp874aTjiOwuYvshvNGP16q4TSP34fg3ET%2B0Io2XqxmoFQH6PomYWuMkwijulJdWNUkqmwVJfYnsFwWrXPGj3BdU%2F263NBQi98%2BArNnH2yCSeifubqVLLAvZYjP5BU5MCBQf3PP47A6%2BRb13RwhGHa0PtZL6mWMXj2lv4xfD4S6FgQEPYxCE%2FCXbDhgALEP%2FLQSqP%2BZ5C7wJ6ncmgjioCGQGRNpYXBLGkT3Hs4%2FS%2FVxHGc2fvm%2BPZ4rQWvEVnObRMCXdYz2HvcH%2F1bl4byTe0kwExtKKb2sjKtrmdAWjvky%2F15lQsrHb3w9LuZ%2Fdl%2BRtILmb2myZAxTyS8ExxZqbSLNhi5IVdLgYrdmJNHKTdng31R19iBLJuyYqoZsYN2VASevv%2F7KxYQypyjeI6YlFavNMPyAwsQGOqUBkP809RLrmXwQd3pkOa%2B8WRMuV8d1s8L6N2qt2KSw%2BzgK6j4KfmJxOoAI%2FxEZBmW5SFIgfILJKnF5Xytu%2F4cXcpbsmb%2FwfxJmXHubqhZwLLu%2Fz%2Ff5fHDfANM9XUWmf6d0Oez0JiMjAhBhhVqCEWVngyVjO97fyYDikNkWQlXcick8%2FDs6F7kiVZ5arjMaNFVW5eaI9ORJEDKTdTOCggrP3Ibb4HNB&X-Amz-Signature=983716396dae265a3cde1a530c38d2091a38117dcc1358463abd5d410eaed9db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZPYJQG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIA1NY10490q43H4GDYwVGxpzwrmNFAgLKrXOZSP0iSLsAiEApXJ8WomYz5pDwASZRF1jkcfHibBG1YThJd2IALbUqKYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDNS0GmhN%2FSaE2yEjYyrcA%2BR9nlV0ARcp7Wf%2FHIUFQUU9BBOAW2Klwr7ZFXAfAaqBgsM%2F%2F8g1lVr%2FZSkrPhxL8uPdhIGyvbDmHNpNRALjgcg%2FuP5S46dfYc9rCDAYImXkD8GaxPgTS9Q%2BHpiTa3UzVRT7Sk9BjMrXEcoKdRajehtMvgKyG5wM%2ByxhuG%2Bbbpd3Bzjdd7R6e5VLOgX9GK31dynYd0M7UY9TiuqUiW30OYx56IPFY%2BwPbGbi8gp874aTjiOwuYvshvNGP16q4TSP34fg3ET%2B0Io2XqxmoFQH6PomYWuMkwijulJdWNUkqmwVJfYnsFwWrXPGj3BdU%2F263NBQi98%2BArNnH2yCSeifubqVLLAvZYjP5BU5MCBQf3PP47A6%2BRb13RwhGHa0PtZL6mWMXj2lv4xfD4S6FgQEPYxCE%2FCXbDhgALEP%2FLQSqP%2BZ5C7wJ6ncmgjioCGQGRNpYXBLGkT3Hs4%2FS%2FVxHGc2fvm%2BPZ4rQWvEVnObRMCXdYz2HvcH%2F1bl4byTe0kwExtKKb2sjKtrmdAWjvky%2F15lQsrHb3w9LuZ%2Fdl%2BRtILmb2myZAxTyS8ExxZqbSLNhi5IVdLgYrdmJNHKTdng31R19iBLJuyYqoZsYN2VASevv%2F7KxYQypyjeI6YlFavNMPyAwsQGOqUBkP809RLrmXwQd3pkOa%2B8WRMuV8d1s8L6N2qt2KSw%2BzgK6j4KfmJxOoAI%2FxEZBmW5SFIgfILJKnF5Xytu%2F4cXcpbsmb%2FwfxJmXHubqhZwLLu%2Fz%2Ff5fHDfANM9XUWmf6d0Oez0JiMjAhBhhVqCEWVngyVjO97fyYDikNkWQlXcick8%2FDs6F7kiVZ5arjMaNFVW5eaI9ORJEDKTdTOCggrP3Ibb4HNB&X-Amz-Signature=3eb6680a01e03eb7757755189ad598010946fe60c9dc9fcb652a6d05f8ce9f99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZPYJQG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIA1NY10490q43H4GDYwVGxpzwrmNFAgLKrXOZSP0iSLsAiEApXJ8WomYz5pDwASZRF1jkcfHibBG1YThJd2IALbUqKYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDNS0GmhN%2FSaE2yEjYyrcA%2BR9nlV0ARcp7Wf%2FHIUFQUU9BBOAW2Klwr7ZFXAfAaqBgsM%2F%2F8g1lVr%2FZSkrPhxL8uPdhIGyvbDmHNpNRALjgcg%2FuP5S46dfYc9rCDAYImXkD8GaxPgTS9Q%2BHpiTa3UzVRT7Sk9BjMrXEcoKdRajehtMvgKyG5wM%2ByxhuG%2Bbbpd3Bzjdd7R6e5VLOgX9GK31dynYd0M7UY9TiuqUiW30OYx56IPFY%2BwPbGbi8gp874aTjiOwuYvshvNGP16q4TSP34fg3ET%2B0Io2XqxmoFQH6PomYWuMkwijulJdWNUkqmwVJfYnsFwWrXPGj3BdU%2F263NBQi98%2BArNnH2yCSeifubqVLLAvZYjP5BU5MCBQf3PP47A6%2BRb13RwhGHa0PtZL6mWMXj2lv4xfD4S6FgQEPYxCE%2FCXbDhgALEP%2FLQSqP%2BZ5C7wJ6ncmgjioCGQGRNpYXBLGkT3Hs4%2FS%2FVxHGc2fvm%2BPZ4rQWvEVnObRMCXdYz2HvcH%2F1bl4byTe0kwExtKKb2sjKtrmdAWjvky%2F15lQsrHb3w9LuZ%2Fdl%2BRtILmb2myZAxTyS8ExxZqbSLNhi5IVdLgYrdmJNHKTdng31R19iBLJuyYqoZsYN2VASevv%2F7KxYQypyjeI6YlFavNMPyAwsQGOqUBkP809RLrmXwQd3pkOa%2B8WRMuV8d1s8L6N2qt2KSw%2BzgK6j4KfmJxOoAI%2FxEZBmW5SFIgfILJKnF5Xytu%2F4cXcpbsmb%2FwfxJmXHubqhZwLLu%2Fz%2Ff5fHDfANM9XUWmf6d0Oez0JiMjAhBhhVqCEWVngyVjO97fyYDikNkWQlXcick8%2FDs6F7kiVZ5arjMaNFVW5eaI9ORJEDKTdTOCggrP3Ibb4HNB&X-Amz-Signature=c2e563535596f58ecaedcc89e69b8c8a782cbde3dfb03d384e28bdee145796f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AZPYJQG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIA1NY10490q43H4GDYwVGxpzwrmNFAgLKrXOZSP0iSLsAiEApXJ8WomYz5pDwASZRF1jkcfHibBG1YThJd2IALbUqKYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDNS0GmhN%2FSaE2yEjYyrcA%2BR9nlV0ARcp7Wf%2FHIUFQUU9BBOAW2Klwr7ZFXAfAaqBgsM%2F%2F8g1lVr%2FZSkrPhxL8uPdhIGyvbDmHNpNRALjgcg%2FuP5S46dfYc9rCDAYImXkD8GaxPgTS9Q%2BHpiTa3UzVRT7Sk9BjMrXEcoKdRajehtMvgKyG5wM%2ByxhuG%2Bbbpd3Bzjdd7R6e5VLOgX9GK31dynYd0M7UY9TiuqUiW30OYx56IPFY%2BwPbGbi8gp874aTjiOwuYvshvNGP16q4TSP34fg3ET%2B0Io2XqxmoFQH6PomYWuMkwijulJdWNUkqmwVJfYnsFwWrXPGj3BdU%2F263NBQi98%2BArNnH2yCSeifubqVLLAvZYjP5BU5MCBQf3PP47A6%2BRb13RwhGHa0PtZL6mWMXj2lv4xfD4S6FgQEPYxCE%2FCXbDhgALEP%2FLQSqP%2BZ5C7wJ6ncmgjioCGQGRNpYXBLGkT3Hs4%2FS%2FVxHGc2fvm%2BPZ4rQWvEVnObRMCXdYz2HvcH%2F1bl4byTe0kwExtKKb2sjKtrmdAWjvky%2F15lQsrHb3w9LuZ%2Fdl%2BRtILmb2myZAxTyS8ExxZqbSLNhi5IVdLgYrdmJNHKTdng31R19iBLJuyYqoZsYN2VASevv%2F7KxYQypyjeI6YlFavNMPyAwsQGOqUBkP809RLrmXwQd3pkOa%2B8WRMuV8d1s8L6N2qt2KSw%2BzgK6j4KfmJxOoAI%2FxEZBmW5SFIgfILJKnF5Xytu%2F4cXcpbsmb%2FwfxJmXHubqhZwLLu%2Fz%2Ff5fHDfANM9XUWmf6d0Oez0JiMjAhBhhVqCEWVngyVjO97fyYDikNkWQlXcick8%2FDs6F7kiVZ5arjMaNFVW5eaI9ORJEDKTdTOCggrP3Ibb4HNB&X-Amz-Signature=84078d0aedccf11911223c6afe252fa5be62834231472c430134f916efd444d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
