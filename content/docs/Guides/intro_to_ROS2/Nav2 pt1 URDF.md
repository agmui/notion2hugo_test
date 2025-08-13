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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I4PJH3G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnxWLL%2Bmbx1deBZRnTjlMckuNr6Gmww4sFWJLlu1mvjAiBUWqzIOE1fBgIfs3hKxKjn2Jiek%2BpBCgY%2BYhWzGBbGnyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMbzpQfEaoQBivds7mKtwDmLo1RwAHKeuYoJ3F6LpL%2BPpKFrBZi9E%2FnsC5R7APCaul9Fb8%2FaV93bXFNaAYqxvrVmjgKu2FuIkSck12OWIAydai9IM3YpXT9ojGnH7JuiVVD8UVF0A5QwUDzt59K7wbFIJcLdZRwRApGL7pvAkWJFAqEHQLD4SLQ2oS4Xc2JVwnFIYqX15%2Fgn%2F9NEfHjt7csKQQHO6YT0PxA0%2Fh6bu5YuJs5scA%2BCjcbBPH%2FzK6L0sP8vc9tx61c802sa8SAQoWXSYdPNdOv6fMkCSEZIwPEjsDVGXZsV8Un6JmT1iBZM9UDPy1%2BMs2x%2Fx7F2hJ9Lj1zlK%2Fd7GCalKDXZL2PYXqafMy3DDD5F%2F6yqDRATIel63iL40XRJb1jNTG71z9OQ32xzPPksLBRORr8Y%2FTtQ4glg0LkkU8YT5G9trU7XnaSSSuJP9YWv8abPrpjxhz6iaGwFRrznECAW0LwSDa%2FcAR4sMSwV90BWoE%2B%2BjuuTmZJOIZ7%2BKkiqX4gemkZm9AcyExErRViu6SVOnIFBk8h86S168ofPO80kBwtUIqJs7PuM3HbUd1l%2BxRZXSr48qX30gNkQeZdFweR0ULN6rI6sdD6xUC4ysIw%2BEpRzY948YuXb7BL5Jq4puU4Lv4sFww%2FOjxxAY6pgF2h%2BoAxTgu26Mi1w279eC0%2FcVLOrKdiKFBbksBXXtaLrUluNa0p4IgUfwgqQB0S5vc9aj9yIp8AqPZxO%2FdBYuOvwzd%2BfZRgzzA3h9SnSPhfTYAFmnmWGMsho8fgydIvjv1QZKPLLXK8%2FXeiEKFyBCxDMc5D3NJZpQko0kkkhwCCKsSWM5CDt0hVnoz5lRbWXOLi3sBsv%2Bp8wTuc4YDLUj%2BnmhD%2F%2BK9&X-Amz-Signature=d08afb5d6b69df12fdd3def3b849ebe5af978fadd9a38537da41e7b632cdad82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I4PJH3G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnxWLL%2Bmbx1deBZRnTjlMckuNr6Gmww4sFWJLlu1mvjAiBUWqzIOE1fBgIfs3hKxKjn2Jiek%2BpBCgY%2BYhWzGBbGnyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMbzpQfEaoQBivds7mKtwDmLo1RwAHKeuYoJ3F6LpL%2BPpKFrBZi9E%2FnsC5R7APCaul9Fb8%2FaV93bXFNaAYqxvrVmjgKu2FuIkSck12OWIAydai9IM3YpXT9ojGnH7JuiVVD8UVF0A5QwUDzt59K7wbFIJcLdZRwRApGL7pvAkWJFAqEHQLD4SLQ2oS4Xc2JVwnFIYqX15%2Fgn%2F9NEfHjt7csKQQHO6YT0PxA0%2Fh6bu5YuJs5scA%2BCjcbBPH%2FzK6L0sP8vc9tx61c802sa8SAQoWXSYdPNdOv6fMkCSEZIwPEjsDVGXZsV8Un6JmT1iBZM9UDPy1%2BMs2x%2Fx7F2hJ9Lj1zlK%2Fd7GCalKDXZL2PYXqafMy3DDD5F%2F6yqDRATIel63iL40XRJb1jNTG71z9OQ32xzPPksLBRORr8Y%2FTtQ4glg0LkkU8YT5G9trU7XnaSSSuJP9YWv8abPrpjxhz6iaGwFRrznECAW0LwSDa%2FcAR4sMSwV90BWoE%2B%2BjuuTmZJOIZ7%2BKkiqX4gemkZm9AcyExErRViu6SVOnIFBk8h86S168ofPO80kBwtUIqJs7PuM3HbUd1l%2BxRZXSr48qX30gNkQeZdFweR0ULN6rI6sdD6xUC4ysIw%2BEpRzY948YuXb7BL5Jq4puU4Lv4sFww%2FOjxxAY6pgF2h%2BoAxTgu26Mi1w279eC0%2FcVLOrKdiKFBbksBXXtaLrUluNa0p4IgUfwgqQB0S5vc9aj9yIp8AqPZxO%2FdBYuOvwzd%2BfZRgzzA3h9SnSPhfTYAFmnmWGMsho8fgydIvjv1QZKPLLXK8%2FXeiEKFyBCxDMc5D3NJZpQko0kkkhwCCKsSWM5CDt0hVnoz5lRbWXOLi3sBsv%2Bp8wTuc4YDLUj%2BnmhD%2F%2BK9&X-Amz-Signature=2308f426d2a89ee6b7f4e3df708197163d44b1524bfea4439f322add7890ad67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I4PJH3G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnxWLL%2Bmbx1deBZRnTjlMckuNr6Gmww4sFWJLlu1mvjAiBUWqzIOE1fBgIfs3hKxKjn2Jiek%2BpBCgY%2BYhWzGBbGnyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMbzpQfEaoQBivds7mKtwDmLo1RwAHKeuYoJ3F6LpL%2BPpKFrBZi9E%2FnsC5R7APCaul9Fb8%2FaV93bXFNaAYqxvrVmjgKu2FuIkSck12OWIAydai9IM3YpXT9ojGnH7JuiVVD8UVF0A5QwUDzt59K7wbFIJcLdZRwRApGL7pvAkWJFAqEHQLD4SLQ2oS4Xc2JVwnFIYqX15%2Fgn%2F9NEfHjt7csKQQHO6YT0PxA0%2Fh6bu5YuJs5scA%2BCjcbBPH%2FzK6L0sP8vc9tx61c802sa8SAQoWXSYdPNdOv6fMkCSEZIwPEjsDVGXZsV8Un6JmT1iBZM9UDPy1%2BMs2x%2Fx7F2hJ9Lj1zlK%2Fd7GCalKDXZL2PYXqafMy3DDD5F%2F6yqDRATIel63iL40XRJb1jNTG71z9OQ32xzPPksLBRORr8Y%2FTtQ4glg0LkkU8YT5G9trU7XnaSSSuJP9YWv8abPrpjxhz6iaGwFRrznECAW0LwSDa%2FcAR4sMSwV90BWoE%2B%2BjuuTmZJOIZ7%2BKkiqX4gemkZm9AcyExErRViu6SVOnIFBk8h86S168ofPO80kBwtUIqJs7PuM3HbUd1l%2BxRZXSr48qX30gNkQeZdFweR0ULN6rI6sdD6xUC4ysIw%2BEpRzY948YuXb7BL5Jq4puU4Lv4sFww%2FOjxxAY6pgF2h%2BoAxTgu26Mi1w279eC0%2FcVLOrKdiKFBbksBXXtaLrUluNa0p4IgUfwgqQB0S5vc9aj9yIp8AqPZxO%2FdBYuOvwzd%2BfZRgzzA3h9SnSPhfTYAFmnmWGMsho8fgydIvjv1QZKPLLXK8%2FXeiEKFyBCxDMc5D3NJZpQko0kkkhwCCKsSWM5CDt0hVnoz5lRbWXOLi3sBsv%2Bp8wTuc4YDLUj%2BnmhD%2F%2BK9&X-Amz-Signature=28f62bd6510cc5f52a91809b99de891d26b116ea78daeea40f9c712fd43a57b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I4PJH3G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnxWLL%2Bmbx1deBZRnTjlMckuNr6Gmww4sFWJLlu1mvjAiBUWqzIOE1fBgIfs3hKxKjn2Jiek%2BpBCgY%2BYhWzGBbGnyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMbzpQfEaoQBivds7mKtwDmLo1RwAHKeuYoJ3F6LpL%2BPpKFrBZi9E%2FnsC5R7APCaul9Fb8%2FaV93bXFNaAYqxvrVmjgKu2FuIkSck12OWIAydai9IM3YpXT9ojGnH7JuiVVD8UVF0A5QwUDzt59K7wbFIJcLdZRwRApGL7pvAkWJFAqEHQLD4SLQ2oS4Xc2JVwnFIYqX15%2Fgn%2F9NEfHjt7csKQQHO6YT0PxA0%2Fh6bu5YuJs5scA%2BCjcbBPH%2FzK6L0sP8vc9tx61c802sa8SAQoWXSYdPNdOv6fMkCSEZIwPEjsDVGXZsV8Un6JmT1iBZM9UDPy1%2BMs2x%2Fx7F2hJ9Lj1zlK%2Fd7GCalKDXZL2PYXqafMy3DDD5F%2F6yqDRATIel63iL40XRJb1jNTG71z9OQ32xzPPksLBRORr8Y%2FTtQ4glg0LkkU8YT5G9trU7XnaSSSuJP9YWv8abPrpjxhz6iaGwFRrznECAW0LwSDa%2FcAR4sMSwV90BWoE%2B%2BjuuTmZJOIZ7%2BKkiqX4gemkZm9AcyExErRViu6SVOnIFBk8h86S168ofPO80kBwtUIqJs7PuM3HbUd1l%2BxRZXSr48qX30gNkQeZdFweR0ULN6rI6sdD6xUC4ysIw%2BEpRzY948YuXb7BL5Jq4puU4Lv4sFww%2FOjxxAY6pgF2h%2BoAxTgu26Mi1w279eC0%2FcVLOrKdiKFBbksBXXtaLrUluNa0p4IgUfwgqQB0S5vc9aj9yIp8AqPZxO%2FdBYuOvwzd%2BfZRgzzA3h9SnSPhfTYAFmnmWGMsho8fgydIvjv1QZKPLLXK8%2FXeiEKFyBCxDMc5D3NJZpQko0kkkhwCCKsSWM5CDt0hVnoz5lRbWXOLi3sBsv%2Bp8wTuc4YDLUj%2BnmhD%2F%2BK9&X-Amz-Signature=73bc1f9853f8fe4ddb3ecd63e420cc274effbda1559b16af080e1b876092f297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I4PJH3G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnxWLL%2Bmbx1deBZRnTjlMckuNr6Gmww4sFWJLlu1mvjAiBUWqzIOE1fBgIfs3hKxKjn2Jiek%2BpBCgY%2BYhWzGBbGnyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMbzpQfEaoQBivds7mKtwDmLo1RwAHKeuYoJ3F6LpL%2BPpKFrBZi9E%2FnsC5R7APCaul9Fb8%2FaV93bXFNaAYqxvrVmjgKu2FuIkSck12OWIAydai9IM3YpXT9ojGnH7JuiVVD8UVF0A5QwUDzt59K7wbFIJcLdZRwRApGL7pvAkWJFAqEHQLD4SLQ2oS4Xc2JVwnFIYqX15%2Fgn%2F9NEfHjt7csKQQHO6YT0PxA0%2Fh6bu5YuJs5scA%2BCjcbBPH%2FzK6L0sP8vc9tx61c802sa8SAQoWXSYdPNdOv6fMkCSEZIwPEjsDVGXZsV8Un6JmT1iBZM9UDPy1%2BMs2x%2Fx7F2hJ9Lj1zlK%2Fd7GCalKDXZL2PYXqafMy3DDD5F%2F6yqDRATIel63iL40XRJb1jNTG71z9OQ32xzPPksLBRORr8Y%2FTtQ4glg0LkkU8YT5G9trU7XnaSSSuJP9YWv8abPrpjxhz6iaGwFRrznECAW0LwSDa%2FcAR4sMSwV90BWoE%2B%2BjuuTmZJOIZ7%2BKkiqX4gemkZm9AcyExErRViu6SVOnIFBk8h86S168ofPO80kBwtUIqJs7PuM3HbUd1l%2BxRZXSr48qX30gNkQeZdFweR0ULN6rI6sdD6xUC4ysIw%2BEpRzY948YuXb7BL5Jq4puU4Lv4sFww%2FOjxxAY6pgF2h%2BoAxTgu26Mi1w279eC0%2FcVLOrKdiKFBbksBXXtaLrUluNa0p4IgUfwgqQB0S5vc9aj9yIp8AqPZxO%2FdBYuOvwzd%2BfZRgzzA3h9SnSPhfTYAFmnmWGMsho8fgydIvjv1QZKPLLXK8%2FXeiEKFyBCxDMc5D3NJZpQko0kkkhwCCKsSWM5CDt0hVnoz5lRbWXOLi3sBsv%2Bp8wTuc4YDLUj%2BnmhD%2F%2BK9&X-Amz-Signature=3992e36a3f41ff50969136281b84de699be7132ef5f3a5b80b64840e92235d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I4PJH3G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnxWLL%2Bmbx1deBZRnTjlMckuNr6Gmww4sFWJLlu1mvjAiBUWqzIOE1fBgIfs3hKxKjn2Jiek%2BpBCgY%2BYhWzGBbGnyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMbzpQfEaoQBivds7mKtwDmLo1RwAHKeuYoJ3F6LpL%2BPpKFrBZi9E%2FnsC5R7APCaul9Fb8%2FaV93bXFNaAYqxvrVmjgKu2FuIkSck12OWIAydai9IM3YpXT9ojGnH7JuiVVD8UVF0A5QwUDzt59K7wbFIJcLdZRwRApGL7pvAkWJFAqEHQLD4SLQ2oS4Xc2JVwnFIYqX15%2Fgn%2F9NEfHjt7csKQQHO6YT0PxA0%2Fh6bu5YuJs5scA%2BCjcbBPH%2FzK6L0sP8vc9tx61c802sa8SAQoWXSYdPNdOv6fMkCSEZIwPEjsDVGXZsV8Un6JmT1iBZM9UDPy1%2BMs2x%2Fx7F2hJ9Lj1zlK%2Fd7GCalKDXZL2PYXqafMy3DDD5F%2F6yqDRATIel63iL40XRJb1jNTG71z9OQ32xzPPksLBRORr8Y%2FTtQ4glg0LkkU8YT5G9trU7XnaSSSuJP9YWv8abPrpjxhz6iaGwFRrznECAW0LwSDa%2FcAR4sMSwV90BWoE%2B%2BjuuTmZJOIZ7%2BKkiqX4gemkZm9AcyExErRViu6SVOnIFBk8h86S168ofPO80kBwtUIqJs7PuM3HbUd1l%2BxRZXSr48qX30gNkQeZdFweR0ULN6rI6sdD6xUC4ysIw%2BEpRzY948YuXb7BL5Jq4puU4Lv4sFww%2FOjxxAY6pgF2h%2BoAxTgu26Mi1w279eC0%2FcVLOrKdiKFBbksBXXtaLrUluNa0p4IgUfwgqQB0S5vc9aj9yIp8AqPZxO%2FdBYuOvwzd%2BfZRgzzA3h9SnSPhfTYAFmnmWGMsho8fgydIvjv1QZKPLLXK8%2FXeiEKFyBCxDMc5D3NJZpQko0kkkhwCCKsSWM5CDt0hVnoz5lRbWXOLi3sBsv%2Bp8wTuc4YDLUj%2BnmhD%2F%2BK9&X-Amz-Signature=179818c9dcc8029ecd0218bd4c41c6bfc2d8ed42607871d58bca6d7b85572449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I4PJH3G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnxWLL%2Bmbx1deBZRnTjlMckuNr6Gmww4sFWJLlu1mvjAiBUWqzIOE1fBgIfs3hKxKjn2Jiek%2BpBCgY%2BYhWzGBbGnyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMbzpQfEaoQBivds7mKtwDmLo1RwAHKeuYoJ3F6LpL%2BPpKFrBZi9E%2FnsC5R7APCaul9Fb8%2FaV93bXFNaAYqxvrVmjgKu2FuIkSck12OWIAydai9IM3YpXT9ojGnH7JuiVVD8UVF0A5QwUDzt59K7wbFIJcLdZRwRApGL7pvAkWJFAqEHQLD4SLQ2oS4Xc2JVwnFIYqX15%2Fgn%2F9NEfHjt7csKQQHO6YT0PxA0%2Fh6bu5YuJs5scA%2BCjcbBPH%2FzK6L0sP8vc9tx61c802sa8SAQoWXSYdPNdOv6fMkCSEZIwPEjsDVGXZsV8Un6JmT1iBZM9UDPy1%2BMs2x%2Fx7F2hJ9Lj1zlK%2Fd7GCalKDXZL2PYXqafMy3DDD5F%2F6yqDRATIel63iL40XRJb1jNTG71z9OQ32xzPPksLBRORr8Y%2FTtQ4glg0LkkU8YT5G9trU7XnaSSSuJP9YWv8abPrpjxhz6iaGwFRrznECAW0LwSDa%2FcAR4sMSwV90BWoE%2B%2BjuuTmZJOIZ7%2BKkiqX4gemkZm9AcyExErRViu6SVOnIFBk8h86S168ofPO80kBwtUIqJs7PuM3HbUd1l%2BxRZXSr48qX30gNkQeZdFweR0ULN6rI6sdD6xUC4ysIw%2BEpRzY948YuXb7BL5Jq4puU4Lv4sFww%2FOjxxAY6pgF2h%2BoAxTgu26Mi1w279eC0%2FcVLOrKdiKFBbksBXXtaLrUluNa0p4IgUfwgqQB0S5vc9aj9yIp8AqPZxO%2FdBYuOvwzd%2BfZRgzzA3h9SnSPhfTYAFmnmWGMsho8fgydIvjv1QZKPLLXK8%2FXeiEKFyBCxDMc5D3NJZpQko0kkkhwCCKsSWM5CDt0hVnoz5lRbWXOLi3sBsv%2Bp8wTuc4YDLUj%2BnmhD%2F%2BK9&X-Amz-Signature=cead2e652bfc3d2417226b65e4a023b178a61dc82fe5db7756af91932fba28e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I4PJH3G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnxWLL%2Bmbx1deBZRnTjlMckuNr6Gmww4sFWJLlu1mvjAiBUWqzIOE1fBgIfs3hKxKjn2Jiek%2BpBCgY%2BYhWzGBbGnyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMbzpQfEaoQBivds7mKtwDmLo1RwAHKeuYoJ3F6LpL%2BPpKFrBZi9E%2FnsC5R7APCaul9Fb8%2FaV93bXFNaAYqxvrVmjgKu2FuIkSck12OWIAydai9IM3YpXT9ojGnH7JuiVVD8UVF0A5QwUDzt59K7wbFIJcLdZRwRApGL7pvAkWJFAqEHQLD4SLQ2oS4Xc2JVwnFIYqX15%2Fgn%2F9NEfHjt7csKQQHO6YT0PxA0%2Fh6bu5YuJs5scA%2BCjcbBPH%2FzK6L0sP8vc9tx61c802sa8SAQoWXSYdPNdOv6fMkCSEZIwPEjsDVGXZsV8Un6JmT1iBZM9UDPy1%2BMs2x%2Fx7F2hJ9Lj1zlK%2Fd7GCalKDXZL2PYXqafMy3DDD5F%2F6yqDRATIel63iL40XRJb1jNTG71z9OQ32xzPPksLBRORr8Y%2FTtQ4glg0LkkU8YT5G9trU7XnaSSSuJP9YWv8abPrpjxhz6iaGwFRrznECAW0LwSDa%2FcAR4sMSwV90BWoE%2B%2BjuuTmZJOIZ7%2BKkiqX4gemkZm9AcyExErRViu6SVOnIFBk8h86S168ofPO80kBwtUIqJs7PuM3HbUd1l%2BxRZXSr48qX30gNkQeZdFweR0ULN6rI6sdD6xUC4ysIw%2BEpRzY948YuXb7BL5Jq4puU4Lv4sFww%2FOjxxAY6pgF2h%2BoAxTgu26Mi1w279eC0%2FcVLOrKdiKFBbksBXXtaLrUluNa0p4IgUfwgqQB0S5vc9aj9yIp8AqPZxO%2FdBYuOvwzd%2BfZRgzzA3h9SnSPhfTYAFmnmWGMsho8fgydIvjv1QZKPLLXK8%2FXeiEKFyBCxDMc5D3NJZpQko0kkkhwCCKsSWM5CDt0hVnoz5lRbWXOLi3sBsv%2Bp8wTuc4YDLUj%2BnmhD%2F%2BK9&X-Amz-Signature=a37c1306732c83e2b6bb3c642b2904d147a958bf31b97df58d75bae7d65a2460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I4PJH3G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnxWLL%2Bmbx1deBZRnTjlMckuNr6Gmww4sFWJLlu1mvjAiBUWqzIOE1fBgIfs3hKxKjn2Jiek%2BpBCgY%2BYhWzGBbGnyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMbzpQfEaoQBivds7mKtwDmLo1RwAHKeuYoJ3F6LpL%2BPpKFrBZi9E%2FnsC5R7APCaul9Fb8%2FaV93bXFNaAYqxvrVmjgKu2FuIkSck12OWIAydai9IM3YpXT9ojGnH7JuiVVD8UVF0A5QwUDzt59K7wbFIJcLdZRwRApGL7pvAkWJFAqEHQLD4SLQ2oS4Xc2JVwnFIYqX15%2Fgn%2F9NEfHjt7csKQQHO6YT0PxA0%2Fh6bu5YuJs5scA%2BCjcbBPH%2FzK6L0sP8vc9tx61c802sa8SAQoWXSYdPNdOv6fMkCSEZIwPEjsDVGXZsV8Un6JmT1iBZM9UDPy1%2BMs2x%2Fx7F2hJ9Lj1zlK%2Fd7GCalKDXZL2PYXqafMy3DDD5F%2F6yqDRATIel63iL40XRJb1jNTG71z9OQ32xzPPksLBRORr8Y%2FTtQ4glg0LkkU8YT5G9trU7XnaSSSuJP9YWv8abPrpjxhz6iaGwFRrznECAW0LwSDa%2FcAR4sMSwV90BWoE%2B%2BjuuTmZJOIZ7%2BKkiqX4gemkZm9AcyExErRViu6SVOnIFBk8h86S168ofPO80kBwtUIqJs7PuM3HbUd1l%2BxRZXSr48qX30gNkQeZdFweR0ULN6rI6sdD6xUC4ysIw%2BEpRzY948YuXb7BL5Jq4puU4Lv4sFww%2FOjxxAY6pgF2h%2BoAxTgu26Mi1w279eC0%2FcVLOrKdiKFBbksBXXtaLrUluNa0p4IgUfwgqQB0S5vc9aj9yIp8AqPZxO%2FdBYuOvwzd%2BfZRgzzA3h9SnSPhfTYAFmnmWGMsho8fgydIvjv1QZKPLLXK8%2FXeiEKFyBCxDMc5D3NJZpQko0kkkhwCCKsSWM5CDt0hVnoz5lRbWXOLi3sBsv%2Bp8wTuc4YDLUj%2BnmhD%2F%2BK9&X-Amz-Signature=c24d9c0089f0cd16ee9c775ed413b3554d654b97961adbab4fb4e7992ff0c4a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I4PJH3G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnxWLL%2Bmbx1deBZRnTjlMckuNr6Gmww4sFWJLlu1mvjAiBUWqzIOE1fBgIfs3hKxKjn2Jiek%2BpBCgY%2BYhWzGBbGnyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMbzpQfEaoQBivds7mKtwDmLo1RwAHKeuYoJ3F6LpL%2BPpKFrBZi9E%2FnsC5R7APCaul9Fb8%2FaV93bXFNaAYqxvrVmjgKu2FuIkSck12OWIAydai9IM3YpXT9ojGnH7JuiVVD8UVF0A5QwUDzt59K7wbFIJcLdZRwRApGL7pvAkWJFAqEHQLD4SLQ2oS4Xc2JVwnFIYqX15%2Fgn%2F9NEfHjt7csKQQHO6YT0PxA0%2Fh6bu5YuJs5scA%2BCjcbBPH%2FzK6L0sP8vc9tx61c802sa8SAQoWXSYdPNdOv6fMkCSEZIwPEjsDVGXZsV8Un6JmT1iBZM9UDPy1%2BMs2x%2Fx7F2hJ9Lj1zlK%2Fd7GCalKDXZL2PYXqafMy3DDD5F%2F6yqDRATIel63iL40XRJb1jNTG71z9OQ32xzPPksLBRORr8Y%2FTtQ4glg0LkkU8YT5G9trU7XnaSSSuJP9YWv8abPrpjxhz6iaGwFRrznECAW0LwSDa%2FcAR4sMSwV90BWoE%2B%2BjuuTmZJOIZ7%2BKkiqX4gemkZm9AcyExErRViu6SVOnIFBk8h86S168ofPO80kBwtUIqJs7PuM3HbUd1l%2BxRZXSr48qX30gNkQeZdFweR0ULN6rI6sdD6xUC4ysIw%2BEpRzY948YuXb7BL5Jq4puU4Lv4sFww%2FOjxxAY6pgF2h%2BoAxTgu26Mi1w279eC0%2FcVLOrKdiKFBbksBXXtaLrUluNa0p4IgUfwgqQB0S5vc9aj9yIp8AqPZxO%2FdBYuOvwzd%2BfZRgzzA3h9SnSPhfTYAFmnmWGMsho8fgydIvjv1QZKPLLXK8%2FXeiEKFyBCxDMc5D3NJZpQko0kkkhwCCKsSWM5CDt0hVnoz5lRbWXOLi3sBsv%2Bp8wTuc4YDLUj%2BnmhD%2F%2BK9&X-Amz-Signature=c87fc4d5cdc16607ea79e957123f2c9eb7b0026d1ed76c45aa8f64a76dbb8a8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGRPDUKV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbzeXkKQaE1X6gyppTjyeehdIISAX6IxdfappqIYa4ggIgFPy0ei2pWx9XJ8pU6Zq%2FglcLt8sfjpzSslvxqhtGQwAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDxt9R9QCMMfQmHreSrcA0nZwMObm%2BY883GVhbicsGPSLNeYpxU%2Fy5rCiKRISkfrp49rr9KtT0BNH1dKbTtHTILK5DbOuHLHjjcSZAcpwbksHIzZ4dagG1SUh%2BnIQ%2BAV6vlG%2FdxlvtYNT8Cw%2FcoHVfIWHObjecMekSCz2EH2wogonYLS0vMfDkw5ERZS1cyAaaPCnKVpyt1dxWFTxGY0WgkVbgCPSbf67myJGmODXjvNZIqvn%2FUPRaeU0oGwUJ%2FoE6Nx45BLd6%2B1yV3CLz2gXt%2F%2BD7EhHxIYVEz%2Fzji5cbRLoRIh%2BwsHJtYwKls5sOAksPRbmryid2PIGz%2BpqpVpGtX2CQ1ccypOQ95Nfr8zV0nD5Mv8rJ0jRFqiEjch7Qx559%2FN4xxgNX0ev5Fitvu%2FAd%2B0NkLJCb1Zj7PfP1F6QxdV3Zc4xXRSKGxiwCqXjA9pq1VAJsrSiAfg1jF5eV5t9uE5cBf%2FD44GzPqqBHFQ3NOnymIlq1ClqVcUz233TqQxu8xV7Fyik%2F8r91zfuqEU9gPF1KrzVlxnIXDK8xc33Pb6DiQLiMdAFg7DTmR%2FP0u6Mf91PrEQs1DV0yL8yVAD6UboEWjn94SoaxSFoN0bVNo%2BEr8YOAuE48zfd9EO8Z8c0XbcZ7lEMhbUdtvQMO3o8cQGOqUBlqWZqL24wLY%2F4xy%2BPbn%2FxCqUJgM2jxjIZvtfYvIzk%2BulAfsdnz1EH56OQBa7tkDfDsvkLlls4Vt%2FVMd5f1ClO0cR4i8g4fBGfKpbzkCz8WCGOS9ruwevPTOWulP7nGEGcgdgGAcm790t6xw8FYf4MtX1AtXOoEWcb6DGEPkB3b%2BMZfDFR7vwTNzJrjeJSd1htUDzkn1N4lXITOK4XuHJbvmRKk6v&X-Amz-Signature=7164e47380147ae287739a16890b3a66d329f6bb70676c00fa70b158aba3336d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP5O4AU4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2F8i8B7o6DDZhpWUIcUzMEE8nukrDhfEo0sAL8D%2BQTAAiEAitFbZehyyiiy3P90Hfz2fzvZ1MQLrn5DvVycQOrG0eAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDBqcbtLwqFBmYq6iQyrcA%2BUB0OxchS33FX%2B22W1fjhvJCttM2M0qXlS4jqPVKXJmWyx1yx6y7igy3gBteoD8IBb6SM0%2BuQpjOkmPGzgBb3xhAU%2BPkTYDLZAdEZHYrFDYGmsAchpIYrW9%2FeyF1Xk8TMobk8uHKIHfJa0d1dkHhBZkOgTcXdyZQscy9DLrPsZDYLX221INdnQJzClcP3CYz3l7P32C%2BWx1HFuEd0ZysrFFy5WXXLKR3a6I6tbwv6Kq8E5YwYlSQounvgwfq2yxUrwb521YIKXrFPqI40i9XzvRBec6IuUEuWEm7XhdudpxfNKJHh1TfoIDdlGtbNv4id0%2FdgqrPJocPBbJbQWmuYeBM0Xpc447DYRHEN71wJyr4kF9GJgURUHXjhyfo%2FerAKbahrywaAecmcsHyDm9T%2FZT6%2FbR3hJgmqHCLtEwTg7LPfcnb%2FD8fk4%2BlsbEp6Ag5AZCg8jAYxVXP6oc5KmFc8HTaPFV8U9m13Af7dMajNxjl0AWqnicwRQdj1DU9eh4QC8tTNSngrzs4zMpmh4eEtmO3wcLFXuZuTCBnq1R63q%2BgyKN%2BAg3Ap7%2FUgJQig5mIVl9XrS%2FC6YZ9izZrghLuu4ooGcFXlEazuGCdPKlseQJgWXypYhBSOkE4ZKlMLDp8cQGOqUBjr0AyesCDjW8zWQEScHxx%2FhuxuZotxXhkzBs0cJ3zQLjPYWm5dD3QejL4ZwzO6mRwvHwxkwhoileDj6evm8susk7JyCgmP%2BHehiZ8DNSA1LpUdpVV4bY8tedtCFu%2BHJALf909uqegOvOMNz9h2%2Ff8ZHqSzX9x7gWv3qQY2E%2B7sR0jPqPcbBpc9wVG7fpiqYu6MuV8jgY3cjSUxE8bs44BgsLg7zj&X-Amz-Signature=f7d289e3b122fdc8e0c9094bdfe3d036370a32c37f60145d298e8ff596ed5cc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HAWOLWG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKq4iA8mrv%2F7oBs3XKBN97xKhFTz0ZbicX7JNkK%2Bw%2BWAiEAxEb9hW36ugKt8Px3w78lSzlTMA2Wp8v%2BrrDbRGqsuCMq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLaBXYCnjrGLR%2FuJsSrcA7p%2B%2FUmeislt9jSAgM0uhtuQJdGIslzb9mdJ8c4PQEPjU0hQFR5zOursQ6W1o86u2nULMaoZKaglQDKT6%2B1aeSIHWVYYlSSp4sKVj%2Fb2i7AAm8AO7S2RdVKSTmTJWHN3wAba2iGb6FwTiVMLT6chZxbBlL36V7WLmrRMwd%2F%2FZ0VB8Bf8FqD6XL0acJ8x1sb%2FQHJF89xkXE6RK%2BkKCWKCXr0sB3jtpAPDjp0St9e01ll93VSI%2BeTv2%2F6QHr6lattqnQK6AseqwI9xfPoE18bSv55yo8xr8brAVf86kbWMCtf%2FiJgP96JV6dfsWC2CWKgYYlQcu4oX1BZPp0LnRI7ZMG9K%2Fzrm76QnmKH20Ud1E0tWhe%2BKBLqzCpJWjrEpNoB1IqQSLejn1YAaM4iAuiJkAf8KDSyuObZZMXSRHQ0p3sxkutit9SSdA6AqUyvGOO1lDJo9aRRXhIdv590zbRt%2BjIUfvhqMi%2BK%2FtQzP4uC5sE8M3dSxptonuMOHhv9N7A8CNszv1FQgXprrqVp0rNQ53UivXCF%2FkSd3mpMXeXBP08oZJ%2BGkhAW4N3ho6oABm0%2FEj2y6ucOozUrvK2oO0AbE6IJboxS2pZu613AJNvNe0YtQa5BKba2TFH71OyJJMJ%2Fp8cQGOqUBjydwUfljI2mDMbaBoyPBYaOwXI1PonknELBf8cbmWmJ9tRFRr2gmH2VTIvk%2BsUdOYTJSTN%2BelXDocl0GodcJbDPGk8%2F%2BmAEir1XEY4VAcNH6hZnbmp3OygwPanvHt7Oe9kuGrsle47DJAr0zXi8PMMk%2BLcaY%2FOwwrh%2FE9iktnQuqSFFWqqr7VjqqTVxRZ8515%2BvMtkoXmMqPJV%2FMj32XECYy2N62&X-Amz-Signature=ee13e06308a0e29069c21e2d3fab7d2b6b2a22c1d076cfa6c56e1c29ed8fc2fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I4PJH3G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnxWLL%2Bmbx1deBZRnTjlMckuNr6Gmww4sFWJLlu1mvjAiBUWqzIOE1fBgIfs3hKxKjn2Jiek%2BpBCgY%2BYhWzGBbGnyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMbzpQfEaoQBivds7mKtwDmLo1RwAHKeuYoJ3F6LpL%2BPpKFrBZi9E%2FnsC5R7APCaul9Fb8%2FaV93bXFNaAYqxvrVmjgKu2FuIkSck12OWIAydai9IM3YpXT9ojGnH7JuiVVD8UVF0A5QwUDzt59K7wbFIJcLdZRwRApGL7pvAkWJFAqEHQLD4SLQ2oS4Xc2JVwnFIYqX15%2Fgn%2F9NEfHjt7csKQQHO6YT0PxA0%2Fh6bu5YuJs5scA%2BCjcbBPH%2FzK6L0sP8vc9tx61c802sa8SAQoWXSYdPNdOv6fMkCSEZIwPEjsDVGXZsV8Un6JmT1iBZM9UDPy1%2BMs2x%2Fx7F2hJ9Lj1zlK%2Fd7GCalKDXZL2PYXqafMy3DDD5F%2F6yqDRATIel63iL40XRJb1jNTG71z9OQ32xzPPksLBRORr8Y%2FTtQ4glg0LkkU8YT5G9trU7XnaSSSuJP9YWv8abPrpjxhz6iaGwFRrznECAW0LwSDa%2FcAR4sMSwV90BWoE%2B%2BjuuTmZJOIZ7%2BKkiqX4gemkZm9AcyExErRViu6SVOnIFBk8h86S168ofPO80kBwtUIqJs7PuM3HbUd1l%2BxRZXSr48qX30gNkQeZdFweR0ULN6rI6sdD6xUC4ysIw%2BEpRzY948YuXb7BL5Jq4puU4Lv4sFww%2FOjxxAY6pgF2h%2BoAxTgu26Mi1w279eC0%2FcVLOrKdiKFBbksBXXtaLrUluNa0p4IgUfwgqQB0S5vc9aj9yIp8AqPZxO%2FdBYuOvwzd%2BfZRgzzA3h9SnSPhfTYAFmnmWGMsho8fgydIvjv1QZKPLLXK8%2FXeiEKFyBCxDMc5D3NJZpQko0kkkhwCCKsSWM5CDt0hVnoz5lRbWXOLi3sBsv%2Bp8wTuc4YDLUj%2BnmhD%2F%2BK9&X-Amz-Signature=2bb0ce08c225ce3734bc22c05d5fa7d2091b5e43b064aa1ba3d35c8aa1190f8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647R2B2J3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzRohKPSHp7mllzdmFBBfRChUll3R9aKcyJoJt2DAU8wIhAJJ8dDfDuG%2FfNysIMjKDb%2FoOwuhmfCEPCcwY2vImYkevKv8DCCwQABoMNjM3NDIzMTgzODA1IgxSIsOsJwnT68VZDkYq3AN3xgQIVdbrdcX5qUHVMFI7eB2WEjiWbq1knWn7AsHorcanldccZT3V%2By4t7xLwQ5W7zMEk4Bzu3GZK2%2BIRNSt1wmuV%2BoHpKng606UeNsxQxLMl348V3yyIzml3AWswbDIwN9IYM34fGVRjyxwzKc%2FVI5BuBfC5oF7vtvTAh5FM8iodpqwDkJ8cXwjEEXWt1pjqwK9D%2FFCP5CjQyuZewxIxhaJNqAlw4FQ4YhZHjp3eeG8pYkFfLhnJz%2B9QQXjzGyz3f50gpVhYi%2BYKgYxZVbEmmLz8Wcc9bDyCSa6uhd6bN7WUe0IaBrG2QtLE7PR%2FkbAxfY8BM%2FSTUQPbw52i0dS6V6AaRSICivj2dJD7eMDneNegK91tr%2Bxg%2FlizU%2FVLMNnQgM1Vt0d5mAggfuEbshMGXwIjhfVKsGGDHaQ0opmKXbNdHraYActq2iPWsrlEgptjinXEGlPzbkl%2BHM4Hxj1fNJDR%2FVff8HztnXKJyC2tRiZiY38MF4bWRxF4TS4oRztftI3RTl3FpToesKD%2FYlyBWVpKLqa1BFYe4%2FXLVQdrrWCeUsqWvSVRzxk8%2B9GHCZdU4S%2Futkx8dXGtFU9udbyYCqvAfZQWBO6FCfYRU%2B9iaWS%2FQkfjulDaLI%2BLITCL6fHEBjqkATtEOi4nuJLYIvZVkwdLmoGlq3Z3COUZrdw9pJu6rzJBn%2B1zXpv0goHyoKoHwU0j25Qby00mwwR3Hh9gxw%2BQZ8UXAB9nYAQWS3tSELIjjeUM54MnCdb%2B0rTQCXhQaawdVzd%2BBlFzxBWL7NdBzhxzcQcrwScVJRMQzw5NiR2CC1e79e0o8glZfPgWxHagGfbvAW900YF%2F80yIKsjojZNtmhONVS1O&X-Amz-Signature=160fd5128b116547b8f1d25f5b9f33c969870a99f7caf01b534eb03c5b797df2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I4PJH3G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnxWLL%2Bmbx1deBZRnTjlMckuNr6Gmww4sFWJLlu1mvjAiBUWqzIOE1fBgIfs3hKxKjn2Jiek%2BpBCgY%2BYhWzGBbGnyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMbzpQfEaoQBivds7mKtwDmLo1RwAHKeuYoJ3F6LpL%2BPpKFrBZi9E%2FnsC5R7APCaul9Fb8%2FaV93bXFNaAYqxvrVmjgKu2FuIkSck12OWIAydai9IM3YpXT9ojGnH7JuiVVD8UVF0A5QwUDzt59K7wbFIJcLdZRwRApGL7pvAkWJFAqEHQLD4SLQ2oS4Xc2JVwnFIYqX15%2Fgn%2F9NEfHjt7csKQQHO6YT0PxA0%2Fh6bu5YuJs5scA%2BCjcbBPH%2FzK6L0sP8vc9tx61c802sa8SAQoWXSYdPNdOv6fMkCSEZIwPEjsDVGXZsV8Un6JmT1iBZM9UDPy1%2BMs2x%2Fx7F2hJ9Lj1zlK%2Fd7GCalKDXZL2PYXqafMy3DDD5F%2F6yqDRATIel63iL40XRJb1jNTG71z9OQ32xzPPksLBRORr8Y%2FTtQ4glg0LkkU8YT5G9trU7XnaSSSuJP9YWv8abPrpjxhz6iaGwFRrznECAW0LwSDa%2FcAR4sMSwV90BWoE%2B%2BjuuTmZJOIZ7%2BKkiqX4gemkZm9AcyExErRViu6SVOnIFBk8h86S168ofPO80kBwtUIqJs7PuM3HbUd1l%2BxRZXSr48qX30gNkQeZdFweR0ULN6rI6sdD6xUC4ysIw%2BEpRzY948YuXb7BL5Jq4puU4Lv4sFww%2FOjxxAY6pgF2h%2BoAxTgu26Mi1w279eC0%2FcVLOrKdiKFBbksBXXtaLrUluNa0p4IgUfwgqQB0S5vc9aj9yIp8AqPZxO%2FdBYuOvwzd%2BfZRgzzA3h9SnSPhfTYAFmnmWGMsho8fgydIvjv1QZKPLLXK8%2FXeiEKFyBCxDMc5D3NJZpQko0kkkhwCCKsSWM5CDt0hVnoz5lRbWXOLi3sBsv%2Bp8wTuc4YDLUj%2BnmhD%2F%2BK9&X-Amz-Signature=fb5553d7a36cc4c65d0ab9354c0355ff188a8a45178a5f9526984240b4293978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D5QESHS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2jmrVWxYsNeWcpuw%2BZ%2FzMzF7spEUG6nenmnpe83cSLAiEApC6yf%2BCRB%2BDjzsxYiajhnt3ufg9NsL75TD5tVNGiIjcq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLOAi3AawFEybI4CrCrcA%2Bxml1BVghHrdG6Gt0wxsx19s%2B6LJcVSaYHIO4NRRg%2BVe1tuGzPYID4%2BUneEc29zsmvNsgeiPd0m2A3lYAXn%2FTb3MKXXY1tT4At0OzwZX4LBLiCnbQhvhNThHqqEKlglODFymVOnANZYZF%2FGE4QiSkLL930SfI1V7vdffxaf5gbFDA2B7%2FFyOfdY6RcpIzyDHgPxXC1JhvU5vUTCImK2zB5M9cqqpWmxGvZdcD%2FWYRdc9ESNUgwf1DyhoG40ny9dQr5BCD8DtSHMg45TXjgLE2kkVcXXRZOg7K0Jxca%2FVOe2WdNuJ3zz2gYM7fYT6aHcNf8H0e0Wp0j%2F%2B0Qx9XV1SQ7Hyz8pg71gbGRcQ8FJcH8P2O1WN9ZZlHk9bie4V6Otf2J9R%2BDZOF%2FEWaOnlmpnf8hhK9wZv6Fw3TjnjMSSbvfVc8WlnsZ04W8GXqVcqrsfwq0ebHHaZL%2Fn6aM4h73CIfdAhVKTQx%2FvGwxFB0dol5uud4CGIaBwAw2nf5dj7Z30qIWN59bPNlwJJBuwlMmk%2FCH3mcZ7Caj0SyN%2Bsk90xF%2ByHMlBcG%2B5G9RIrJ%2BYNZBc2pa8Iv93APT6uO4Ch4Va5IjmJ5Pgiy2QjOkuDKu%2F0K7tDSAVu1%2FegQ7oknpUMIbp8cQGOqUBclegOyZUYUXJ1Ab5lzHDx7ulXh24a8PxRK%2B%2Fhk5Vx1KoA2Q%2F%2F4G7kjVQN4YwL74K%2BH0LlMFwVec8PpGojSzTulGpVWh6XQa8UYAzunRZLq%2BlhUdmOcjigPiicSH%2BwQmcJqFD%2F%2Fe4wYZyJ39HZUGxMmebYnJTV3tPMAtNBqv3xdlpg2m2G03%2BWNEk%2FAhqxlM5QNvchk79ihS1oq9MtTsmlgWIvd7P&X-Amz-Signature=4aa967e912a0315a62972e10cb6be7fce14138cbeefad468247552d4582d6e64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I4PJH3G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnxWLL%2Bmbx1deBZRnTjlMckuNr6Gmww4sFWJLlu1mvjAiBUWqzIOE1fBgIfs3hKxKjn2Jiek%2BpBCgY%2BYhWzGBbGnyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMbzpQfEaoQBivds7mKtwDmLo1RwAHKeuYoJ3F6LpL%2BPpKFrBZi9E%2FnsC5R7APCaul9Fb8%2FaV93bXFNaAYqxvrVmjgKu2FuIkSck12OWIAydai9IM3YpXT9ojGnH7JuiVVD8UVF0A5QwUDzt59K7wbFIJcLdZRwRApGL7pvAkWJFAqEHQLD4SLQ2oS4Xc2JVwnFIYqX15%2Fgn%2F9NEfHjt7csKQQHO6YT0PxA0%2Fh6bu5YuJs5scA%2BCjcbBPH%2FzK6L0sP8vc9tx61c802sa8SAQoWXSYdPNdOv6fMkCSEZIwPEjsDVGXZsV8Un6JmT1iBZM9UDPy1%2BMs2x%2Fx7F2hJ9Lj1zlK%2Fd7GCalKDXZL2PYXqafMy3DDD5F%2F6yqDRATIel63iL40XRJb1jNTG71z9OQ32xzPPksLBRORr8Y%2FTtQ4glg0LkkU8YT5G9trU7XnaSSSuJP9YWv8abPrpjxhz6iaGwFRrznECAW0LwSDa%2FcAR4sMSwV90BWoE%2B%2BjuuTmZJOIZ7%2BKkiqX4gemkZm9AcyExErRViu6SVOnIFBk8h86S168ofPO80kBwtUIqJs7PuM3HbUd1l%2BxRZXSr48qX30gNkQeZdFweR0ULN6rI6sdD6xUC4ysIw%2BEpRzY948YuXb7BL5Jq4puU4Lv4sFww%2FOjxxAY6pgF2h%2BoAxTgu26Mi1w279eC0%2FcVLOrKdiKFBbksBXXtaLrUluNa0p4IgUfwgqQB0S5vc9aj9yIp8AqPZxO%2FdBYuOvwzd%2BfZRgzzA3h9SnSPhfTYAFmnmWGMsho8fgydIvjv1QZKPLLXK8%2FXeiEKFyBCxDMc5D3NJZpQko0kkkhwCCKsSWM5CDt0hVnoz5lRbWXOLi3sBsv%2Bp8wTuc4YDLUj%2BnmhD%2F%2BK9&X-Amz-Signature=a4ef457b3944888028cc6d9ca5c538b408cd1f2e65c040afdf649a41cd56464c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677PLAKJC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMPdeu5qayX3HUpPVkorlWinBzLCAvyiTUp2dw5RpcQQIgB84IQRh2vswHYGCWPIZSvxnMRhtXVIsHWO7lRSpy0K8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMaeKhRK5GFMOClgaircA5YEHC0OU19l%2Bz9ab8hvGVNP%2FDGAt%2FXCZfpj05vRic65ROi5KnEfqbUcjKaGhK61iEbd8NkRvqFrvtKyJ4p8nwdaJZO5XQi7hmQdvpDus58Fz2WYjxOw5N3TYv%2B6td7dHfL38AxiF%2BVOell1sIKFYpc7EXJflXJtySuNDWdRwxVpCPzqH%2B8hOXZ38tb9ZuU2R3O%2FOSVEbLhQ76oMVJG1JfznvuXUweE%2Fhxkn%2BZJnDCBU%2FPTumZSxrUKk79vDNbd%2F9dE9BxchVGwIx4%2Fal%2F2seux6%2FBoNP1BlxsyQ3PiZoUUWCsoFmoi1QiWq0lIut5rd%2FUiC166x3hqMpfvSAFhhul8neyRDK3WE5bnW2%2BKGK14d4KM4WU4x%2FYIs6hWWSDFatZI3q8OPPFQgZLYHH%2BxUyn%2FehPYSpytr1npujio1AR5oC788ZU6Fq4lZcCPBwyXjiK6a1XFnXlxc377tDmxY%2FD3uUIiAcZXgPrbPMBitE4AiGXUdCzPjLSxm%2Fia4jnR4M4njljVIQQT0wShSHXj48znB2q0Z6wIMYrKYTdb485iHcSt7f3SKduhe5h5I71UhPMkTeNHHjau5VUAsP4ai04j2uiqh3%2BV38ttf9o4Jo%2BrIbDXq2WCyCZh3xD37MP3p8cQGOqUB0Yz3lZYfx6zsA0FQLQassO7D%2Fg5XOP6LNMj4YP92BlS9WEJH64wgIldRxImWMIqscLERfqsr0o4KfSuhYKnUvwLLh63Ucm8TlOwk3GDWtC2ktN5I18VoeFIGNPf6wYqLZSnfzEdWPKpeABNrV60ZTz5%2Bv6%2B7UjVMO%2BKxLomKIeBphc6Dez1iIjL9pfWWoYgleK3VOZ1jMtHbi%2FRaRYGUlXKuIpzk&X-Amz-Signature=c87b773fab01a895358fce800780518b1f7cda02074c0f47f8a81815f940c318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I4PJH3G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnxWLL%2Bmbx1deBZRnTjlMckuNr6Gmww4sFWJLlu1mvjAiBUWqzIOE1fBgIfs3hKxKjn2Jiek%2BpBCgY%2BYhWzGBbGnyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMbzpQfEaoQBivds7mKtwDmLo1RwAHKeuYoJ3F6LpL%2BPpKFrBZi9E%2FnsC5R7APCaul9Fb8%2FaV93bXFNaAYqxvrVmjgKu2FuIkSck12OWIAydai9IM3YpXT9ojGnH7JuiVVD8UVF0A5QwUDzt59K7wbFIJcLdZRwRApGL7pvAkWJFAqEHQLD4SLQ2oS4Xc2JVwnFIYqX15%2Fgn%2F9NEfHjt7csKQQHO6YT0PxA0%2Fh6bu5YuJs5scA%2BCjcbBPH%2FzK6L0sP8vc9tx61c802sa8SAQoWXSYdPNdOv6fMkCSEZIwPEjsDVGXZsV8Un6JmT1iBZM9UDPy1%2BMs2x%2Fx7F2hJ9Lj1zlK%2Fd7GCalKDXZL2PYXqafMy3DDD5F%2F6yqDRATIel63iL40XRJb1jNTG71z9OQ32xzPPksLBRORr8Y%2FTtQ4glg0LkkU8YT5G9trU7XnaSSSuJP9YWv8abPrpjxhz6iaGwFRrznECAW0LwSDa%2FcAR4sMSwV90BWoE%2B%2BjuuTmZJOIZ7%2BKkiqX4gemkZm9AcyExErRViu6SVOnIFBk8h86S168ofPO80kBwtUIqJs7PuM3HbUd1l%2BxRZXSr48qX30gNkQeZdFweR0ULN6rI6sdD6xUC4ysIw%2BEpRzY948YuXb7BL5Jq4puU4Lv4sFww%2FOjxxAY6pgF2h%2BoAxTgu26Mi1w279eC0%2FcVLOrKdiKFBbksBXXtaLrUluNa0p4IgUfwgqQB0S5vc9aj9yIp8AqPZxO%2FdBYuOvwzd%2BfZRgzzA3h9SnSPhfTYAFmnmWGMsho8fgydIvjv1QZKPLLXK8%2FXeiEKFyBCxDMc5D3NJZpQko0kkkhwCCKsSWM5CDt0hVnoz5lRbWXOLi3sBsv%2Bp8wTuc4YDLUj%2BnmhD%2F%2BK9&X-Amz-Signature=f17e5027b72f98af4c49306d748601a8b352800803decafba14bbde7050fba33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U73VXA6B%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BujYudhfxVQm6A4NwMlnIicy2dbiQgpqXJill3HvhqAiEAks7%2B72jhWaRG8p7azmXBxe6enthMgSSj0R6l888JZsMq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDO6eBuTS4HolpxXvryrcA6g2NBQcXmTKD1Mu424bNAKvQaoyqqrEwo4kEKZnk5OuOvhl6UomebGdNrLPHwhYIgnbUNqcGdsLjlyugMJ5ZHQb54pbzZ%2BkyAh%2FOmAsTHcNJrHTWC85v%2F05j78gI3Sw0%2FtsY8YnDUzC2jyOPupy7Iq0HqCbJrMZRGaUWFiAMKw4vW7EtaRNSrm9BFzJFitQT%2Fk6CETEPg3nWBMUHRXsaDukNi2TUbicJ%2BcjbKxCd%2F4D47s6iwdBkKGGqfrcYRIhqutUyMaTXrc2rkn0orSbsHbv%2Bwy2aAsEY9SLDuL3l6CcYdlgS7qwKYg25DLJxXHzEhkx6MSDw1ynh2Nn2RQr0bTIndeuy%2BLOQB5MX0AgDrsp5njZNbgZTrQLVUFTviwwQiijulto0NS2xi%2BCKJrpHXM4O3PhB9yGfIkpFqwz2bmVg%2FylY4URZRyBww93c%2BS8fs7SCULYPkcFvot4fNcfbrwr0%2FZ1L3fKK97ivM%2FlzUKbZrae%2FfILCmLOARhJ3L28K50fSab9IiyLRv4bCiT5oaHAujyHvdRo2HT5AsPeXu%2B3s9ETVN6p1Hj%2BEzKUDM7SHfB7u8u0Gm0GcNZEmJqr1e0fKhgCyMPI3AmruE0fhE7z2tzWAtySbRWxXPjoMI3p8cQGOqUBRU97DArm2t8IunNMxM8vvF8P2%2B%2BTjNd0us%2BhfxPKM8rKCDJ2uzojlS%2FdaeA6xKikfdDsbycJ%2FMCH9TK4rdCzqVjQPWyAvait%2F9mrTrr4FPaQBYEXAvVIyI2pP%2FSvmGYiEdqeSu0CtM56YeFpLwUaxHBQ7pjRrRvpJ9hphDyZMuESmuOIWZc0IME4lG9NpKCxaQfHAgL2PV920IRLJLs05ll%2FwlwS&X-Amz-Signature=e8125f2ddc31b2d6803025fb4538bd3e1bc941190bbdd3cac4ac0b158812bec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYNUUGZE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpEkahO8hrAktTyF5UZeUrEJpI5LwLhTLRsZX7Gl9PDwIhALk3i1%2BUe1oeCtPdrTVyP9tlYafYor1Tf7ShExdXC4u%2BKv8DCCwQABoMNjM3NDIzMTgzODA1IgyU1uHFB8jd8J51l48q3AOI7cb5Xn4L5E8DqVMilmcW1x3OeQLD5PN1IXOKjq1XdI6ZTK29Q%2FoQFf1DIUFIgnt6u1Vqj3Lq013YA5dkc91EG1sSro90gOmuVk9nmZKRg0jjhDr2TgwWjnG9x3jNFRS1klY1IIk7HU4SVcslk1sG31jMek5oYRm6%2FGrTwTHjwLPYvTw2EIxz6wpz6hAc4%2FYHhA17oWSKLBCu0cEdFYT8GfzKQ9GbnWGVtFvilaffHiPm%2FX24ECLDMDj5ixGaezHBhEovpNndoHyxh2lnJaYMHC4J95d3Iokfh8ELU1CaszmcKihM9F%2B%2BB7HQigMk56%2BBzgOToBFVu330WZnLV7y%2B3Np7FzFG%2F%2FzEWPoc7%2BpmQIpKMjihw3QOyRfx%2Fzx8mQVmxFPc7uu477rcx7sy8jAtfG5rcviRIEqk%2FlHnPoGK%2Fkpq6ti3ArLxc7Rrl8cvl20zmXZqWUXKamildp8ioGcEd6q2mOaSbuWXUu1k6YRvaYtpBuN6RRZwGcrBUE59jjaqiVWm10FobUOySaaw0ftPuXXfgyJhVXwU5qKM3TvNyFZ8xKLqdKku4awBDgkTDhDjUFFKdd5zZJ1XmCgLSbEpCUtOWTF5Z6c8CXiNN9QvVW2oX5KzZAdONS9qHDDG6vHEBjqkAVPermoAaEVO8TzAJkjFos5ULtVPIT7MEci9MO%2FPcUolGpdmTMG7OMCMBDLhaevE923I%2FAN%2F67pOw20p%2By0sh9w4eGn8K3sO2hh8PN0u5naQm4YxkE%2BhVJZtc13%2BX5f3wuPLa7Cq690ZyirvKnBMwjlpbVaziVnplNyC0a%2FXilRZSTPMlsvbBHjTZRotwncVDol7Cec6MQWIts1zwSJJPGxQ881q&X-Amz-Signature=7115e5a407bdd6aca4ebee94d8e4fc1ec7fdf9e767b17aee69d2e0e3425b8a33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HVOADCS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQQatbk0AiScpZuoSTilNGEjpVylTgKgM6jsy%2FucyXoAiBNFvSsWkEa%2B3PnACFX%2FTQg0IjJpeHeLigbnnSlIB35hyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMwh61ZY1FFgjGBxayKtwDMTHnrnHYS0Tkl4nngA6RQmuFRxjv1kNSFJ6RFB3R9V%2Fw3HHeu6P9WQmNggxu5Of5mKBzzHxv8edAxjEMsUe1rOPiJTc%2ByMSmdVry2XMJZvxlybrAprTDejm2OWPeDLpszI2zeUVoRG%2BgaY3waCUCG4VPHjgCULSgyZvHw6KqbWvNB78XAvzHi32UTQwXBhF2Mlu4iule59pO5nIgq45IquCsd%2FPO%2FGwOFBNboFa%2F2pkpCtYtq%2FguR4T5ShWJSFryVGpJ%2F6CVlVbBuQLUYlMrE5omPcncIRSla2LRfb3wuDRztysZorGs62JqzaSPGm%2BAN1GMkcjLAVEkkXZ0Mcbem5Ad3mrO1%2BnVHgst6L68hHVoWZEUkPKIL%2FREVsuMu%2BR0PpmPIrAMizZO6PndCxL%2BjpOMzTsIo4lIYH7adoFdxE16uhXC03oEdbOEJj1oinCaJJVXT0kzZicx4Z1Now%2BMaOZPFd1ajMkNT8DMKdhanktUOmdpA3JBfHCwN7heyYIQZvsj%2BW%2FJItnAQ5xgVRZ%2BcW923D%2BwOosJv%2FPWMCeXnC8YDKqlOt5Djys5JgcB9sD8RFdE2joaK6BL8s9y1fm2gg%2Bpf9B5Miam7LtbK4eMPzp9WYWEzxbdItgqDZAwlurxxAY6pgF3QbPbMf6qd%2B%2BUc62fa5r4toazZ9jWv1IE%2FAO7KKPzKU8aTfMpZ9X65CAUnCJttLg4Ixv1wAqpPAKYaJ%2BvL%2BEMfrBoHORkzhKHEUXIj5a7%2BxM%2F1IQkB8T7LFda3Tn3ip7e7%2FQNAEWaL6%2F%2BMCuAREcJxEYWZv7gwC5FSeIa3jHCjVrnqJyTHvLtHuGD4xCnYQuiRODuBnf%2FoDTmmFtFteGUQTj%2FmId3&X-Amz-Signature=89530dfa06570e2001a6ba86cd3919e77af246e81398c2870e6a88abb7ba25a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZUNU3VD%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPNHawFCFdeJuQwPABB3uV0WXc%2F9Scsjn%2Fhu1Z3cMkJAiEAxfZVq8731EDT4whDsZcJC%2F5L6vG54DukeEo0KnnN2kkq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDniDxca3HbrILZDYircAygOccmjuIxTHDPxQ4h1rAOPTSd3BIiXeA4eD8Ge6Ix%2FuM7W7Q7ZwE2QoNCSLtYhC3hcOMhs5GTTmFiM2ixXOrmt%2Bua5C%2FUGUk1d0KJwZah50iHqc0sg%2BarqJio3UsKWYpdNXUTlKLEuP63yWW6OUf4lXfxTQG4ge5g7LZ27r6KfVP2a5wzkTwnUNt4NsTjyfASmyre5LzddeOA42gBcc%2Bl3QjQz6mUKM5DPga%2FaLU5wuzXbLLoatC%2Bv1tfRprlY%2FXMc2xmbfu1Vcgk%2BTdnJ9oLgSULwc74sbVFfYTjXrUZ7pb6ND%2B5wjpR0hJWSg%2BHKto1e5r2dHAqpWSKmYQG%2BDFmRExOHu8EDZcK62uIEbZpCyWbiglw%2BQSty0OeY1xCqd8SOJYkQMsuy%2BrQD8fmO%2FhF321UcowkLrHNf%2Fr%2BlyOLg1I6Wy0c6wR4WNQwJ5gluZHAf6JLHlXIgVw6kW4I09nkoVGn%2FP3mIx%2F4gqj2qAp3Eu%2BknmSmFglKjpD93yo%2BIkJiUw29TUia7p8eArBjthdiHo8u9EQ4MqY%2BD9vsV9QOs4J5flVi6eurTNTms1iWyD1BDCeLxCWlkDyTERzVkKwD7xfjQdL3wYgBiwu4CxqWiG%2F17Gx%2B%2B7CyT73PHMM%2Fp8cQGOqUBdkdusGTUp%2F4fj3lZZTJewW1fomOara1f2VYmdHEryT8MfQYGLjwJtKFe34mMtCvYhrr2l23Qj2ljMZcs7xP%2BKFwR%2FAPm1D9CC7wXsG4gxuZvfsMzMWb0xBiq8r%2FGvSAFlf8rCb1bJ9OM%2FF80xkUe7o42aTAn9ihkuA1j50EfRe0F6rxPQFN9haHwv%2BsZ8JpKUxuzdOv284cIG0v7OYApe9Va9KeA&X-Amz-Signature=1807550a68e00dc8f0254f0ba14a15eed4ef3e72c07f55ccc2d1b4af7e450804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX5HZDGT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVbYNmGvEBBcaH0la7C%2BD0b4r5yLSBaKPYbsIq0lOhOAiAoHn1oFm0sZGwNGY3Qi8Pv5pMoquLfVzXYIxb3yxVEvir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM00mxuSiLzs7wtgGoKtwDtibx9GIofJxeegP0Uh3SHHLNmB4U%2Fa3J%2B45d16P3I2cGDm0vHli6%2BfQUr3hDSFej%2FWNWtU%2B1s5ZZx7Rv2DXInGjL1crJJwnyC977iGKHZjBKcuNjl850Hj%2BNr2c9%2BFR7xyD5E%2B3IDHhrkVc2SRV7T412qHZbxGcz2iNlgL3XiQB0I1VzyHZVeBdssPW5SLksRuqJSdLdI0EQoGk0O5F3mw7eIt%2Bc6gj5t0FGWqf1UBzKlhOKNRPp8XZEKL3AtbJG4qfDkJQ4PmGz65GL6MpYSgTDHTrXukjsnQ7x7qJevAlI67lh%2BRHNb0EGGg%2B9ZAf1aMyw7ENxp2la83smcl7rosmSUB1mI4PMoVUnMiq556b3BEXt%2Bxqdy87e7DU63y1KZacX%2FHrzT7a2UduRHrc4wi0Y8h6H8eLsntJA7qAzpwYWCZ5V%2FRdGqunbqVXODCplzzoeZ0yDultN%2BoKSPXCttltPFF5EYdp1L44u%2BNnQLzGjCr%2Bdjj3%2BkGrKvH7fzcH%2Fb5LL2A5Ht2O8kXAt5A19rWlz%2B7wT2qHQvaG4TlSUjmblBLaotm%2FS%2BmkrQuMKSowgyB3ktShRrxVkqOF7TVXphhrwVqYOcYHFX02UD%2FaxW1k4ykpGuirjFp8CsK4ww%2BnxxAY6pgG%2BIiUeLhoEttlRnkJA%2BgtmEZJxy0CE7pP%2FpDtXXWYlaOt9YgFsFZwKO4EyWvNVPnCGfTtzSCgFzBxOVt5CN7Ap5i8VimH1gwA8avH%2F8SDWoyQ8N7ecLGw9Sfy5NiTKfb2pHx7O5sZQnFUtXB6kt1Sd%2FeEUNVElAO%2BFiQ1pmqTvexrEuQDIQbU2OimEAqUwe2ERbq4XV%2B0XGzy00mXHWBdzMMXimcO3&X-Amz-Signature=58b9746b4410bacb8430f6fc76b013c5966ca807c32c056380960dd462e9a9a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I4PJH3G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnxWLL%2Bmbx1deBZRnTjlMckuNr6Gmww4sFWJLlu1mvjAiBUWqzIOE1fBgIfs3hKxKjn2Jiek%2BpBCgY%2BYhWzGBbGnyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMbzpQfEaoQBivds7mKtwDmLo1RwAHKeuYoJ3F6LpL%2BPpKFrBZi9E%2FnsC5R7APCaul9Fb8%2FaV93bXFNaAYqxvrVmjgKu2FuIkSck12OWIAydai9IM3YpXT9ojGnH7JuiVVD8UVF0A5QwUDzt59K7wbFIJcLdZRwRApGL7pvAkWJFAqEHQLD4SLQ2oS4Xc2JVwnFIYqX15%2Fgn%2F9NEfHjt7csKQQHO6YT0PxA0%2Fh6bu5YuJs5scA%2BCjcbBPH%2FzK6L0sP8vc9tx61c802sa8SAQoWXSYdPNdOv6fMkCSEZIwPEjsDVGXZsV8Un6JmT1iBZM9UDPy1%2BMs2x%2Fx7F2hJ9Lj1zlK%2Fd7GCalKDXZL2PYXqafMy3DDD5F%2F6yqDRATIel63iL40XRJb1jNTG71z9OQ32xzPPksLBRORr8Y%2FTtQ4glg0LkkU8YT5G9trU7XnaSSSuJP9YWv8abPrpjxhz6iaGwFRrznECAW0LwSDa%2FcAR4sMSwV90BWoE%2B%2BjuuTmZJOIZ7%2BKkiqX4gemkZm9AcyExErRViu6SVOnIFBk8h86S168ofPO80kBwtUIqJs7PuM3HbUd1l%2BxRZXSr48qX30gNkQeZdFweR0ULN6rI6sdD6xUC4ysIw%2BEpRzY948YuXb7BL5Jq4puU4Lv4sFww%2FOjxxAY6pgF2h%2BoAxTgu26Mi1w279eC0%2FcVLOrKdiKFBbksBXXtaLrUluNa0p4IgUfwgqQB0S5vc9aj9yIp8AqPZxO%2FdBYuOvwzd%2BfZRgzzA3h9SnSPhfTYAFmnmWGMsho8fgydIvjv1QZKPLLXK8%2FXeiEKFyBCxDMc5D3NJZpQko0kkkhwCCKsSWM5CDt0hVnoz5lRbWXOLi3sBsv%2Bp8wTuc4YDLUj%2BnmhD%2F%2BK9&X-Amz-Signature=64093b916325da06df3a5dac48746c4a2663011003c117f86d9e49cee4ee7301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I4PJH3G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnxWLL%2Bmbx1deBZRnTjlMckuNr6Gmww4sFWJLlu1mvjAiBUWqzIOE1fBgIfs3hKxKjn2Jiek%2BpBCgY%2BYhWzGBbGnyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMbzpQfEaoQBivds7mKtwDmLo1RwAHKeuYoJ3F6LpL%2BPpKFrBZi9E%2FnsC5R7APCaul9Fb8%2FaV93bXFNaAYqxvrVmjgKu2FuIkSck12OWIAydai9IM3YpXT9ojGnH7JuiVVD8UVF0A5QwUDzt59K7wbFIJcLdZRwRApGL7pvAkWJFAqEHQLD4SLQ2oS4Xc2JVwnFIYqX15%2Fgn%2F9NEfHjt7csKQQHO6YT0PxA0%2Fh6bu5YuJs5scA%2BCjcbBPH%2FzK6L0sP8vc9tx61c802sa8SAQoWXSYdPNdOv6fMkCSEZIwPEjsDVGXZsV8Un6JmT1iBZM9UDPy1%2BMs2x%2Fx7F2hJ9Lj1zlK%2Fd7GCalKDXZL2PYXqafMy3DDD5F%2F6yqDRATIel63iL40XRJb1jNTG71z9OQ32xzPPksLBRORr8Y%2FTtQ4glg0LkkU8YT5G9trU7XnaSSSuJP9YWv8abPrpjxhz6iaGwFRrznECAW0LwSDa%2FcAR4sMSwV90BWoE%2B%2BjuuTmZJOIZ7%2BKkiqX4gemkZm9AcyExErRViu6SVOnIFBk8h86S168ofPO80kBwtUIqJs7PuM3HbUd1l%2BxRZXSr48qX30gNkQeZdFweR0ULN6rI6sdD6xUC4ysIw%2BEpRzY948YuXb7BL5Jq4puU4Lv4sFww%2FOjxxAY6pgF2h%2BoAxTgu26Mi1w279eC0%2FcVLOrKdiKFBbksBXXtaLrUluNa0p4IgUfwgqQB0S5vc9aj9yIp8AqPZxO%2FdBYuOvwzd%2BfZRgzzA3h9SnSPhfTYAFmnmWGMsho8fgydIvjv1QZKPLLXK8%2FXeiEKFyBCxDMc5D3NJZpQko0kkkhwCCKsSWM5CDt0hVnoz5lRbWXOLi3sBsv%2Bp8wTuc4YDLUj%2BnmhD%2F%2BK9&X-Amz-Signature=9031de21caaef2db6ce9b6a0c8a2cb07ad74877f0e3e3ca9e2527227e31bbab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EM23DOF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuvxTMLLxDJxxazGNjtsdJiCxL60hGHnlU1oRr8a5gQAiEAkbjswWhoD9wmhqKp5y6AUUeJS7N194don9YTfabwuycq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFGpKNtt4KJp3UZGaCrcA2fA9J3YE2piJFf67OA2ueqdNFditzdUSXUqEOVuAzEDF3LjPjy%2Ffh%2BJnRUdpN96LbjxxIkk6obUk%2FZb%2FPPx%2BhR2VCoakqlCodOH9lqbwG6Qd%2FmwpYMdHTntAmvtajZTB%2BunQq%2FuFrdgfc91vUUXe7TATDIWQkcMyH786%2Fj50XTRDWYYb6OhHXwoSixI6vzhAa5%2F5E2PqqSSvyLCtotQDMLnMuiKNWmTW2cY5F4wEFz%2B0bmFGB2NbFr4qwWp7FPSGYHCYrak2jD27u3l%2B52fDy%2Fn25ipJ1JUf4X%2BTjYMJ5Vbmf6kUl90WnHGF%2B9u24t1Wx0resUyvXqbxQWE%2FGieIV0yAN8TM0ADAWmIQZiTvhDrgLKvqee4warx%2BwVBiA0xXIo90dvOmjCY5HFT%2Buh6oxRZjAuw87w1g6jszyjXOgAq343VzyA%2Fxc1K3CZxLgsTcrbTznxTy0cFtEPeRK5Dy0gmG31IBO0ObnRqBnIgQDGUOO5x0ymb2nFOHuaUYAx%2Bxgel3P2eaTm5YC5nF1XaZMfrYV7PDEUSl1a8CzcAcGwHmZA70MzxF6%2BjihZpVSsCvlNdr3LsGqD51IUs8ZWCBgeM3HtVyZn8VKLr%2FOO1wYVkxS2hB24Fv%2BPDtRNmMO3o8cQGOqUBrQO9ZMRoWw5wIa%2BzKKcefKxiZcM3dB7iCRZSe0UvHSp3EYn2lnhKA8f5S8%2B69sUbwp2%2Bah0Y8hj1SgTsveLVRZ6ZIsSAOceNGEspm%2FCfvLvHqT%2F1uOYK5CNfMI2qQH4iGXPLTjb8TF2lrPWX%2FKKDtMK1goYXR3WgT4Y4LfTzGw0714c7%2B0isBdzjO%2FkWcJ0eOFYAKwon5bqzUjBwf3zTciW0lO9s&X-Amz-Signature=cdb03be961c9c26a558b16ec5c59e3bc0754b1f6089fa78bfcb5cee2c845b37a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EM23DOF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuvxTMLLxDJxxazGNjtsdJiCxL60hGHnlU1oRr8a5gQAiEAkbjswWhoD9wmhqKp5y6AUUeJS7N194don9YTfabwuycq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFGpKNtt4KJp3UZGaCrcA2fA9J3YE2piJFf67OA2ueqdNFditzdUSXUqEOVuAzEDF3LjPjy%2Ffh%2BJnRUdpN96LbjxxIkk6obUk%2FZb%2FPPx%2BhR2VCoakqlCodOH9lqbwG6Qd%2FmwpYMdHTntAmvtajZTB%2BunQq%2FuFrdgfc91vUUXe7TATDIWQkcMyH786%2Fj50XTRDWYYb6OhHXwoSixI6vzhAa5%2F5E2PqqSSvyLCtotQDMLnMuiKNWmTW2cY5F4wEFz%2B0bmFGB2NbFr4qwWp7FPSGYHCYrak2jD27u3l%2B52fDy%2Fn25ipJ1JUf4X%2BTjYMJ5Vbmf6kUl90WnHGF%2B9u24t1Wx0resUyvXqbxQWE%2FGieIV0yAN8TM0ADAWmIQZiTvhDrgLKvqee4warx%2BwVBiA0xXIo90dvOmjCY5HFT%2Buh6oxRZjAuw87w1g6jszyjXOgAq343VzyA%2Fxc1K3CZxLgsTcrbTznxTy0cFtEPeRK5Dy0gmG31IBO0ObnRqBnIgQDGUOO5x0ymb2nFOHuaUYAx%2Bxgel3P2eaTm5YC5nF1XaZMfrYV7PDEUSl1a8CzcAcGwHmZA70MzxF6%2BjihZpVSsCvlNdr3LsGqD51IUs8ZWCBgeM3HtVyZn8VKLr%2FOO1wYVkxS2hB24Fv%2BPDtRNmMO3o8cQGOqUBrQO9ZMRoWw5wIa%2BzKKcefKxiZcM3dB7iCRZSe0UvHSp3EYn2lnhKA8f5S8%2B69sUbwp2%2Bah0Y8hj1SgTsveLVRZ6ZIsSAOceNGEspm%2FCfvLvHqT%2F1uOYK5CNfMI2qQH4iGXPLTjb8TF2lrPWX%2FKKDtMK1goYXR3WgT4Y4LfTzGw0714c7%2B0isBdzjO%2FkWcJ0eOFYAKwon5bqzUjBwf3zTciW0lO9s&X-Amz-Signature=5ad04c91b26034c9507151462e0f9e1de11b628cca2373ab06c75cd553e5f47a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EM23DOF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuvxTMLLxDJxxazGNjtsdJiCxL60hGHnlU1oRr8a5gQAiEAkbjswWhoD9wmhqKp5y6AUUeJS7N194don9YTfabwuycq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFGpKNtt4KJp3UZGaCrcA2fA9J3YE2piJFf67OA2ueqdNFditzdUSXUqEOVuAzEDF3LjPjy%2Ffh%2BJnRUdpN96LbjxxIkk6obUk%2FZb%2FPPx%2BhR2VCoakqlCodOH9lqbwG6Qd%2FmwpYMdHTntAmvtajZTB%2BunQq%2FuFrdgfc91vUUXe7TATDIWQkcMyH786%2Fj50XTRDWYYb6OhHXwoSixI6vzhAa5%2F5E2PqqSSvyLCtotQDMLnMuiKNWmTW2cY5F4wEFz%2B0bmFGB2NbFr4qwWp7FPSGYHCYrak2jD27u3l%2B52fDy%2Fn25ipJ1JUf4X%2BTjYMJ5Vbmf6kUl90WnHGF%2B9u24t1Wx0resUyvXqbxQWE%2FGieIV0yAN8TM0ADAWmIQZiTvhDrgLKvqee4warx%2BwVBiA0xXIo90dvOmjCY5HFT%2Buh6oxRZjAuw87w1g6jszyjXOgAq343VzyA%2Fxc1K3CZxLgsTcrbTznxTy0cFtEPeRK5Dy0gmG31IBO0ObnRqBnIgQDGUOO5x0ymb2nFOHuaUYAx%2Bxgel3P2eaTm5YC5nF1XaZMfrYV7PDEUSl1a8CzcAcGwHmZA70MzxF6%2BjihZpVSsCvlNdr3LsGqD51IUs8ZWCBgeM3HtVyZn8VKLr%2FOO1wYVkxS2hB24Fv%2BPDtRNmMO3o8cQGOqUBrQO9ZMRoWw5wIa%2BzKKcefKxiZcM3dB7iCRZSe0UvHSp3EYn2lnhKA8f5S8%2B69sUbwp2%2Bah0Y8hj1SgTsveLVRZ6ZIsSAOceNGEspm%2FCfvLvHqT%2F1uOYK5CNfMI2qQH4iGXPLTjb8TF2lrPWX%2FKKDtMK1goYXR3WgT4Y4LfTzGw0714c7%2B0isBdzjO%2FkWcJ0eOFYAKwon5bqzUjBwf3zTciW0lO9s&X-Amz-Signature=51d08a7779708b33cd2b2b809a8cce8d7838737cdfa1385b041a7bfe647274ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EM23DOF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuvxTMLLxDJxxazGNjtsdJiCxL60hGHnlU1oRr8a5gQAiEAkbjswWhoD9wmhqKp5y6AUUeJS7N194don9YTfabwuycq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFGpKNtt4KJp3UZGaCrcA2fA9J3YE2piJFf67OA2ueqdNFditzdUSXUqEOVuAzEDF3LjPjy%2Ffh%2BJnRUdpN96LbjxxIkk6obUk%2FZb%2FPPx%2BhR2VCoakqlCodOH9lqbwG6Qd%2FmwpYMdHTntAmvtajZTB%2BunQq%2FuFrdgfc91vUUXe7TATDIWQkcMyH786%2Fj50XTRDWYYb6OhHXwoSixI6vzhAa5%2F5E2PqqSSvyLCtotQDMLnMuiKNWmTW2cY5F4wEFz%2B0bmFGB2NbFr4qwWp7FPSGYHCYrak2jD27u3l%2B52fDy%2Fn25ipJ1JUf4X%2BTjYMJ5Vbmf6kUl90WnHGF%2B9u24t1Wx0resUyvXqbxQWE%2FGieIV0yAN8TM0ADAWmIQZiTvhDrgLKvqee4warx%2BwVBiA0xXIo90dvOmjCY5HFT%2Buh6oxRZjAuw87w1g6jszyjXOgAq343VzyA%2Fxc1K3CZxLgsTcrbTznxTy0cFtEPeRK5Dy0gmG31IBO0ObnRqBnIgQDGUOO5x0ymb2nFOHuaUYAx%2Bxgel3P2eaTm5YC5nF1XaZMfrYV7PDEUSl1a8CzcAcGwHmZA70MzxF6%2BjihZpVSsCvlNdr3LsGqD51IUs8ZWCBgeM3HtVyZn8VKLr%2FOO1wYVkxS2hB24Fv%2BPDtRNmMO3o8cQGOqUBrQO9ZMRoWw5wIa%2BzKKcefKxiZcM3dB7iCRZSe0UvHSp3EYn2lnhKA8f5S8%2B69sUbwp2%2Bah0Y8hj1SgTsveLVRZ6ZIsSAOceNGEspm%2FCfvLvHqT%2F1uOYK5CNfMI2qQH4iGXPLTjb8TF2lrPWX%2FKKDtMK1goYXR3WgT4Y4LfTzGw0714c7%2B0isBdzjO%2FkWcJ0eOFYAKwon5bqzUjBwf3zTciW0lO9s&X-Amz-Signature=4fe179dcecec7afd6c17f124e222e329b058a8e38103f2e88ac636e64182aa65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EM23DOF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuvxTMLLxDJxxazGNjtsdJiCxL60hGHnlU1oRr8a5gQAiEAkbjswWhoD9wmhqKp5y6AUUeJS7N194don9YTfabwuycq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFGpKNtt4KJp3UZGaCrcA2fA9J3YE2piJFf67OA2ueqdNFditzdUSXUqEOVuAzEDF3LjPjy%2Ffh%2BJnRUdpN96LbjxxIkk6obUk%2FZb%2FPPx%2BhR2VCoakqlCodOH9lqbwG6Qd%2FmwpYMdHTntAmvtajZTB%2BunQq%2FuFrdgfc91vUUXe7TATDIWQkcMyH786%2Fj50XTRDWYYb6OhHXwoSixI6vzhAa5%2F5E2PqqSSvyLCtotQDMLnMuiKNWmTW2cY5F4wEFz%2B0bmFGB2NbFr4qwWp7FPSGYHCYrak2jD27u3l%2B52fDy%2Fn25ipJ1JUf4X%2BTjYMJ5Vbmf6kUl90WnHGF%2B9u24t1Wx0resUyvXqbxQWE%2FGieIV0yAN8TM0ADAWmIQZiTvhDrgLKvqee4warx%2BwVBiA0xXIo90dvOmjCY5HFT%2Buh6oxRZjAuw87w1g6jszyjXOgAq343VzyA%2Fxc1K3CZxLgsTcrbTznxTy0cFtEPeRK5Dy0gmG31IBO0ObnRqBnIgQDGUOO5x0ymb2nFOHuaUYAx%2Bxgel3P2eaTm5YC5nF1XaZMfrYV7PDEUSl1a8CzcAcGwHmZA70MzxF6%2BjihZpVSsCvlNdr3LsGqD51IUs8ZWCBgeM3HtVyZn8VKLr%2FOO1wYVkxS2hB24Fv%2BPDtRNmMO3o8cQGOqUBrQO9ZMRoWw5wIa%2BzKKcefKxiZcM3dB7iCRZSe0UvHSp3EYn2lnhKA8f5S8%2B69sUbwp2%2Bah0Y8hj1SgTsveLVRZ6ZIsSAOceNGEspm%2FCfvLvHqT%2F1uOYK5CNfMI2qQH4iGXPLTjb8TF2lrPWX%2FKKDtMK1goYXR3WgT4Y4LfTzGw0714c7%2B0isBdzjO%2FkWcJ0eOFYAKwon5bqzUjBwf3zTciW0lO9s&X-Amz-Signature=e6f12b5f6653ff1e61f461d8c10c42b8526999751e1b0ac1e7adace88a38b445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EM23DOF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuvxTMLLxDJxxazGNjtsdJiCxL60hGHnlU1oRr8a5gQAiEAkbjswWhoD9wmhqKp5y6AUUeJS7N194don9YTfabwuycq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFGpKNtt4KJp3UZGaCrcA2fA9J3YE2piJFf67OA2ueqdNFditzdUSXUqEOVuAzEDF3LjPjy%2Ffh%2BJnRUdpN96LbjxxIkk6obUk%2FZb%2FPPx%2BhR2VCoakqlCodOH9lqbwG6Qd%2FmwpYMdHTntAmvtajZTB%2BunQq%2FuFrdgfc91vUUXe7TATDIWQkcMyH786%2Fj50XTRDWYYb6OhHXwoSixI6vzhAa5%2F5E2PqqSSvyLCtotQDMLnMuiKNWmTW2cY5F4wEFz%2B0bmFGB2NbFr4qwWp7FPSGYHCYrak2jD27u3l%2B52fDy%2Fn25ipJ1JUf4X%2BTjYMJ5Vbmf6kUl90WnHGF%2B9u24t1Wx0resUyvXqbxQWE%2FGieIV0yAN8TM0ADAWmIQZiTvhDrgLKvqee4warx%2BwVBiA0xXIo90dvOmjCY5HFT%2Buh6oxRZjAuw87w1g6jszyjXOgAq343VzyA%2Fxc1K3CZxLgsTcrbTznxTy0cFtEPeRK5Dy0gmG31IBO0ObnRqBnIgQDGUOO5x0ymb2nFOHuaUYAx%2Bxgel3P2eaTm5YC5nF1XaZMfrYV7PDEUSl1a8CzcAcGwHmZA70MzxF6%2BjihZpVSsCvlNdr3LsGqD51IUs8ZWCBgeM3HtVyZn8VKLr%2FOO1wYVkxS2hB24Fv%2BPDtRNmMO3o8cQGOqUBrQO9ZMRoWw5wIa%2BzKKcefKxiZcM3dB7iCRZSe0UvHSp3EYn2lnhKA8f5S8%2B69sUbwp2%2Bah0Y8hj1SgTsveLVRZ6ZIsSAOceNGEspm%2FCfvLvHqT%2F1uOYK5CNfMI2qQH4iGXPLTjb8TF2lrPWX%2FKKDtMK1goYXR3WgT4Y4LfTzGw0714c7%2B0isBdzjO%2FkWcJ0eOFYAKwon5bqzUjBwf3zTciW0lO9s&X-Amz-Signature=cd5f5ed45ad2083d8056d611da28518033d0d031a30b30737fc0d2d7914549e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EM23DOF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuvxTMLLxDJxxazGNjtsdJiCxL60hGHnlU1oRr8a5gQAiEAkbjswWhoD9wmhqKp5y6AUUeJS7N194don9YTfabwuycq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFGpKNtt4KJp3UZGaCrcA2fA9J3YE2piJFf67OA2ueqdNFditzdUSXUqEOVuAzEDF3LjPjy%2Ffh%2BJnRUdpN96LbjxxIkk6obUk%2FZb%2FPPx%2BhR2VCoakqlCodOH9lqbwG6Qd%2FmwpYMdHTntAmvtajZTB%2BunQq%2FuFrdgfc91vUUXe7TATDIWQkcMyH786%2Fj50XTRDWYYb6OhHXwoSixI6vzhAa5%2F5E2PqqSSvyLCtotQDMLnMuiKNWmTW2cY5F4wEFz%2B0bmFGB2NbFr4qwWp7FPSGYHCYrak2jD27u3l%2B52fDy%2Fn25ipJ1JUf4X%2BTjYMJ5Vbmf6kUl90WnHGF%2B9u24t1Wx0resUyvXqbxQWE%2FGieIV0yAN8TM0ADAWmIQZiTvhDrgLKvqee4warx%2BwVBiA0xXIo90dvOmjCY5HFT%2Buh6oxRZjAuw87w1g6jszyjXOgAq343VzyA%2Fxc1K3CZxLgsTcrbTznxTy0cFtEPeRK5Dy0gmG31IBO0ObnRqBnIgQDGUOO5x0ymb2nFOHuaUYAx%2Bxgel3P2eaTm5YC5nF1XaZMfrYV7PDEUSl1a8CzcAcGwHmZA70MzxF6%2BjihZpVSsCvlNdr3LsGqD51IUs8ZWCBgeM3HtVyZn8VKLr%2FOO1wYVkxS2hB24Fv%2BPDtRNmMO3o8cQGOqUBrQO9ZMRoWw5wIa%2BzKKcefKxiZcM3dB7iCRZSe0UvHSp3EYn2lnhKA8f5S8%2B69sUbwp2%2Bah0Y8hj1SgTsveLVRZ6ZIsSAOceNGEspm%2FCfvLvHqT%2F1uOYK5CNfMI2qQH4iGXPLTjb8TF2lrPWX%2FKKDtMK1goYXR3WgT4Y4LfTzGw0714c7%2B0isBdzjO%2FkWcJ0eOFYAKwon5bqzUjBwf3zTciW0lO9s&X-Amz-Signature=c60c23e1344ed9f634247e84ae68dfc744fade2afb188297e3ab69bb7ada3617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EM23DOF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuvxTMLLxDJxxazGNjtsdJiCxL60hGHnlU1oRr8a5gQAiEAkbjswWhoD9wmhqKp5y6AUUeJS7N194don9YTfabwuycq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFGpKNtt4KJp3UZGaCrcA2fA9J3YE2piJFf67OA2ueqdNFditzdUSXUqEOVuAzEDF3LjPjy%2Ffh%2BJnRUdpN96LbjxxIkk6obUk%2FZb%2FPPx%2BhR2VCoakqlCodOH9lqbwG6Qd%2FmwpYMdHTntAmvtajZTB%2BunQq%2FuFrdgfc91vUUXe7TATDIWQkcMyH786%2Fj50XTRDWYYb6OhHXwoSixI6vzhAa5%2F5E2PqqSSvyLCtotQDMLnMuiKNWmTW2cY5F4wEFz%2B0bmFGB2NbFr4qwWp7FPSGYHCYrak2jD27u3l%2B52fDy%2Fn25ipJ1JUf4X%2BTjYMJ5Vbmf6kUl90WnHGF%2B9u24t1Wx0resUyvXqbxQWE%2FGieIV0yAN8TM0ADAWmIQZiTvhDrgLKvqee4warx%2BwVBiA0xXIo90dvOmjCY5HFT%2Buh6oxRZjAuw87w1g6jszyjXOgAq343VzyA%2Fxc1K3CZxLgsTcrbTznxTy0cFtEPeRK5Dy0gmG31IBO0ObnRqBnIgQDGUOO5x0ymb2nFOHuaUYAx%2Bxgel3P2eaTm5YC5nF1XaZMfrYV7PDEUSl1a8CzcAcGwHmZA70MzxF6%2BjihZpVSsCvlNdr3LsGqD51IUs8ZWCBgeM3HtVyZn8VKLr%2FOO1wYVkxS2hB24Fv%2BPDtRNmMO3o8cQGOqUBrQO9ZMRoWw5wIa%2BzKKcefKxiZcM3dB7iCRZSe0UvHSp3EYn2lnhKA8f5S8%2B69sUbwp2%2Bah0Y8hj1SgTsveLVRZ6ZIsSAOceNGEspm%2FCfvLvHqT%2F1uOYK5CNfMI2qQH4iGXPLTjb8TF2lrPWX%2FKKDtMK1goYXR3WgT4Y4LfTzGw0714c7%2B0isBdzjO%2FkWcJ0eOFYAKwon5bqzUjBwf3zTciW0lO9s&X-Amz-Signature=ab2ecb8ef2ae1cf0d2c4fabfa4ddab08f8107d6418e285808653ed204176fe62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EM23DOF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuvxTMLLxDJxxazGNjtsdJiCxL60hGHnlU1oRr8a5gQAiEAkbjswWhoD9wmhqKp5y6AUUeJS7N194don9YTfabwuycq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFGpKNtt4KJp3UZGaCrcA2fA9J3YE2piJFf67OA2ueqdNFditzdUSXUqEOVuAzEDF3LjPjy%2Ffh%2BJnRUdpN96LbjxxIkk6obUk%2FZb%2FPPx%2BhR2VCoakqlCodOH9lqbwG6Qd%2FmwpYMdHTntAmvtajZTB%2BunQq%2FuFrdgfc91vUUXe7TATDIWQkcMyH786%2Fj50XTRDWYYb6OhHXwoSixI6vzhAa5%2F5E2PqqSSvyLCtotQDMLnMuiKNWmTW2cY5F4wEFz%2B0bmFGB2NbFr4qwWp7FPSGYHCYrak2jD27u3l%2B52fDy%2Fn25ipJ1JUf4X%2BTjYMJ5Vbmf6kUl90WnHGF%2B9u24t1Wx0resUyvXqbxQWE%2FGieIV0yAN8TM0ADAWmIQZiTvhDrgLKvqee4warx%2BwVBiA0xXIo90dvOmjCY5HFT%2Buh6oxRZjAuw87w1g6jszyjXOgAq343VzyA%2Fxc1K3CZxLgsTcrbTznxTy0cFtEPeRK5Dy0gmG31IBO0ObnRqBnIgQDGUOO5x0ymb2nFOHuaUYAx%2Bxgel3P2eaTm5YC5nF1XaZMfrYV7PDEUSl1a8CzcAcGwHmZA70MzxF6%2BjihZpVSsCvlNdr3LsGqD51IUs8ZWCBgeM3HtVyZn8VKLr%2FOO1wYVkxS2hB24Fv%2BPDtRNmMO3o8cQGOqUBrQO9ZMRoWw5wIa%2BzKKcefKxiZcM3dB7iCRZSe0UvHSp3EYn2lnhKA8f5S8%2B69sUbwp2%2Bah0Y8hj1SgTsveLVRZ6ZIsSAOceNGEspm%2FCfvLvHqT%2F1uOYK5CNfMI2qQH4iGXPLTjb8TF2lrPWX%2FKKDtMK1goYXR3WgT4Y4LfTzGw0714c7%2B0isBdzjO%2FkWcJ0eOFYAKwon5bqzUjBwf3zTciW0lO9s&X-Amz-Signature=ef46541a6e2df3f6e8daf989ac40bbbf240877bd3d1c3785be46ba5af06be573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EM23DOF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuvxTMLLxDJxxazGNjtsdJiCxL60hGHnlU1oRr8a5gQAiEAkbjswWhoD9wmhqKp5y6AUUeJS7N194don9YTfabwuycq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFGpKNtt4KJp3UZGaCrcA2fA9J3YE2piJFf67OA2ueqdNFditzdUSXUqEOVuAzEDF3LjPjy%2Ffh%2BJnRUdpN96LbjxxIkk6obUk%2FZb%2FPPx%2BhR2VCoakqlCodOH9lqbwG6Qd%2FmwpYMdHTntAmvtajZTB%2BunQq%2FuFrdgfc91vUUXe7TATDIWQkcMyH786%2Fj50XTRDWYYb6OhHXwoSixI6vzhAa5%2F5E2PqqSSvyLCtotQDMLnMuiKNWmTW2cY5F4wEFz%2B0bmFGB2NbFr4qwWp7FPSGYHCYrak2jD27u3l%2B52fDy%2Fn25ipJ1JUf4X%2BTjYMJ5Vbmf6kUl90WnHGF%2B9u24t1Wx0resUyvXqbxQWE%2FGieIV0yAN8TM0ADAWmIQZiTvhDrgLKvqee4warx%2BwVBiA0xXIo90dvOmjCY5HFT%2Buh6oxRZjAuw87w1g6jszyjXOgAq343VzyA%2Fxc1K3CZxLgsTcrbTznxTy0cFtEPeRK5Dy0gmG31IBO0ObnRqBnIgQDGUOO5x0ymb2nFOHuaUYAx%2Bxgel3P2eaTm5YC5nF1XaZMfrYV7PDEUSl1a8CzcAcGwHmZA70MzxF6%2BjihZpVSsCvlNdr3LsGqD51IUs8ZWCBgeM3HtVyZn8VKLr%2FOO1wYVkxS2hB24Fv%2BPDtRNmMO3o8cQGOqUBrQO9ZMRoWw5wIa%2BzKKcefKxiZcM3dB7iCRZSe0UvHSp3EYn2lnhKA8f5S8%2B69sUbwp2%2Bah0Y8hj1SgTsveLVRZ6ZIsSAOceNGEspm%2FCfvLvHqT%2F1uOYK5CNfMI2qQH4iGXPLTjb8TF2lrPWX%2FKKDtMK1goYXR3WgT4Y4LfTzGw0714c7%2B0isBdzjO%2FkWcJ0eOFYAKwon5bqzUjBwf3zTciW0lO9s&X-Amz-Signature=875db7e1133cf9de1af6746effdb213c37924d0cc9f2532aa860fa38f574a61c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
