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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YG7A2VJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgm%2B1v%2Fcbu2wnynAR6LDphLLRTSsXkMItO0NQTo8ZYXQIhAP2eGjxQbNtXOXZyc8IZsHKbLKB3f2K7JYhxfOszS1CsKv8DCDMQABoMNjM3NDIzMTgzODA1Igz2Bo6xbR%2FcsE%2B59AUq3ANzrXhM2pb%2BUyMEH21cgwlaaqvFZ5BMlQyCNmsNN8tdBL%2FNoePWdwailFTMHAaY7hkZHfpt9SOpvOfQ%2BftqQN8PsNfmJr20kT6Ek4LkEOhJHwUakIzwGJ8hYfcwA%2B%2B6iNun2NCppZhQKrmipaooi23wvMECA0M2K3gkxFjWDjsM7ivXM7YXCQVdGcu324sT9VBI6tWNgJep6ca0LPLBrt8NXLbqI6KBb60LBeoT8Rfahlyt%2F%2BAoKqInc8JHp2Od3gn40mN0lIFRe3V2G0T%2Bp6pQI1VKPVL%2FRn6yFY6%2FRXZRaoZYhAYsVm5mNIG0M1Ei%2BRl0jWl2lgNtC5hZg4b2HBf7GI%2BQ%2FLSWYPufq%2F8obmiBvAx5lGMLE8H18TQpiOvvojGAQpb%2Br0rb6ywEQcB2PWZgDd9PZRFy4ASgqqlq%2B7pJSuokMp7NZas1JboauKHfz9GvDlGVyyWZ5YrDUpPJDH3lHvne5Z3PhSf%2BXgcB2Ezo4JxnEzfzeyyUZzmz18FvUJV8RaK%2FgrZevF6fXq4utLwAjw30iOt%2Fcgp2R%2Fb80Gv3m3aHPGt1J8bM5q%2Bo1nZE69RCt3jBqrfihTRbefu8cKC10E3x42nE3O6Cw6kEHYjzAi86KMcd2gx0FqRXkDDyn%2FPEBjqkAfcEk0ktrlSbvLRIbu40ENkA%2B95jP2A6vqXqNkYN6Q%2FI0KBUws09QxlIDQpMIAWWlbNlYwTIN3NFnJcPqStvUC%2Frg2vJ3nn1om5Fmase5us2%2ByHbGL2mlyuuBgeAjOOlZ2GV5q6JtbFlX9XQJFvpceGJaKQEn9V%2BAXQU18MkmYvceyDPsLpGiM6d7m3ZIueoQkw9WSlXqZauHb2soP3vnV5%2FU6bt&X-Amz-Signature=417a3bf44bdc98a1b1ea2b6575548314ebbb83e166ae868e28308fd4a39a95e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YG7A2VJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgm%2B1v%2Fcbu2wnynAR6LDphLLRTSsXkMItO0NQTo8ZYXQIhAP2eGjxQbNtXOXZyc8IZsHKbLKB3f2K7JYhxfOszS1CsKv8DCDMQABoMNjM3NDIzMTgzODA1Igz2Bo6xbR%2FcsE%2B59AUq3ANzrXhM2pb%2BUyMEH21cgwlaaqvFZ5BMlQyCNmsNN8tdBL%2FNoePWdwailFTMHAaY7hkZHfpt9SOpvOfQ%2BftqQN8PsNfmJr20kT6Ek4LkEOhJHwUakIzwGJ8hYfcwA%2B%2B6iNun2NCppZhQKrmipaooi23wvMECA0M2K3gkxFjWDjsM7ivXM7YXCQVdGcu324sT9VBI6tWNgJep6ca0LPLBrt8NXLbqI6KBb60LBeoT8Rfahlyt%2F%2BAoKqInc8JHp2Od3gn40mN0lIFRe3V2G0T%2Bp6pQI1VKPVL%2FRn6yFY6%2FRXZRaoZYhAYsVm5mNIG0M1Ei%2BRl0jWl2lgNtC5hZg4b2HBf7GI%2BQ%2FLSWYPufq%2F8obmiBvAx5lGMLE8H18TQpiOvvojGAQpb%2Br0rb6ywEQcB2PWZgDd9PZRFy4ASgqqlq%2B7pJSuokMp7NZas1JboauKHfz9GvDlGVyyWZ5YrDUpPJDH3lHvne5Z3PhSf%2BXgcB2Ezo4JxnEzfzeyyUZzmz18FvUJV8RaK%2FgrZevF6fXq4utLwAjw30iOt%2Fcgp2R%2Fb80Gv3m3aHPGt1J8bM5q%2Bo1nZE69RCt3jBqrfihTRbefu8cKC10E3x42nE3O6Cw6kEHYjzAi86KMcd2gx0FqRXkDDyn%2FPEBjqkAfcEk0ktrlSbvLRIbu40ENkA%2B95jP2A6vqXqNkYN6Q%2FI0KBUws09QxlIDQpMIAWWlbNlYwTIN3NFnJcPqStvUC%2Frg2vJ3nn1om5Fmase5us2%2ByHbGL2mlyuuBgeAjOOlZ2GV5q6JtbFlX9XQJFvpceGJaKQEn9V%2BAXQU18MkmYvceyDPsLpGiM6d7m3ZIueoQkw9WSlXqZauHb2soP3vnV5%2FU6bt&X-Amz-Signature=768b42337a86cd642f7012e99fbe111974260256f7a2f4be8980f19b2c588503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YG7A2VJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgm%2B1v%2Fcbu2wnynAR6LDphLLRTSsXkMItO0NQTo8ZYXQIhAP2eGjxQbNtXOXZyc8IZsHKbLKB3f2K7JYhxfOszS1CsKv8DCDMQABoMNjM3NDIzMTgzODA1Igz2Bo6xbR%2FcsE%2B59AUq3ANzrXhM2pb%2BUyMEH21cgwlaaqvFZ5BMlQyCNmsNN8tdBL%2FNoePWdwailFTMHAaY7hkZHfpt9SOpvOfQ%2BftqQN8PsNfmJr20kT6Ek4LkEOhJHwUakIzwGJ8hYfcwA%2B%2B6iNun2NCppZhQKrmipaooi23wvMECA0M2K3gkxFjWDjsM7ivXM7YXCQVdGcu324sT9VBI6tWNgJep6ca0LPLBrt8NXLbqI6KBb60LBeoT8Rfahlyt%2F%2BAoKqInc8JHp2Od3gn40mN0lIFRe3V2G0T%2Bp6pQI1VKPVL%2FRn6yFY6%2FRXZRaoZYhAYsVm5mNIG0M1Ei%2BRl0jWl2lgNtC5hZg4b2HBf7GI%2BQ%2FLSWYPufq%2F8obmiBvAx5lGMLE8H18TQpiOvvojGAQpb%2Br0rb6ywEQcB2PWZgDd9PZRFy4ASgqqlq%2B7pJSuokMp7NZas1JboauKHfz9GvDlGVyyWZ5YrDUpPJDH3lHvne5Z3PhSf%2BXgcB2Ezo4JxnEzfzeyyUZzmz18FvUJV8RaK%2FgrZevF6fXq4utLwAjw30iOt%2Fcgp2R%2Fb80Gv3m3aHPGt1J8bM5q%2Bo1nZE69RCt3jBqrfihTRbefu8cKC10E3x42nE3O6Cw6kEHYjzAi86KMcd2gx0FqRXkDDyn%2FPEBjqkAfcEk0ktrlSbvLRIbu40ENkA%2B95jP2A6vqXqNkYN6Q%2FI0KBUws09QxlIDQpMIAWWlbNlYwTIN3NFnJcPqStvUC%2Frg2vJ3nn1om5Fmase5us2%2ByHbGL2mlyuuBgeAjOOlZ2GV5q6JtbFlX9XQJFvpceGJaKQEn9V%2BAXQU18MkmYvceyDPsLpGiM6d7m3ZIueoQkw9WSlXqZauHb2soP3vnV5%2FU6bt&X-Amz-Signature=2e09757dafed831287dfa184b39bec5b3c8bea8c4c190cb03843c84e0e66638b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YG7A2VJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgm%2B1v%2Fcbu2wnynAR6LDphLLRTSsXkMItO0NQTo8ZYXQIhAP2eGjxQbNtXOXZyc8IZsHKbLKB3f2K7JYhxfOszS1CsKv8DCDMQABoMNjM3NDIzMTgzODA1Igz2Bo6xbR%2FcsE%2B59AUq3ANzrXhM2pb%2BUyMEH21cgwlaaqvFZ5BMlQyCNmsNN8tdBL%2FNoePWdwailFTMHAaY7hkZHfpt9SOpvOfQ%2BftqQN8PsNfmJr20kT6Ek4LkEOhJHwUakIzwGJ8hYfcwA%2B%2B6iNun2NCppZhQKrmipaooi23wvMECA0M2K3gkxFjWDjsM7ivXM7YXCQVdGcu324sT9VBI6tWNgJep6ca0LPLBrt8NXLbqI6KBb60LBeoT8Rfahlyt%2F%2BAoKqInc8JHp2Od3gn40mN0lIFRe3V2G0T%2Bp6pQI1VKPVL%2FRn6yFY6%2FRXZRaoZYhAYsVm5mNIG0M1Ei%2BRl0jWl2lgNtC5hZg4b2HBf7GI%2BQ%2FLSWYPufq%2F8obmiBvAx5lGMLE8H18TQpiOvvojGAQpb%2Br0rb6ywEQcB2PWZgDd9PZRFy4ASgqqlq%2B7pJSuokMp7NZas1JboauKHfz9GvDlGVyyWZ5YrDUpPJDH3lHvne5Z3PhSf%2BXgcB2Ezo4JxnEzfzeyyUZzmz18FvUJV8RaK%2FgrZevF6fXq4utLwAjw30iOt%2Fcgp2R%2Fb80Gv3m3aHPGt1J8bM5q%2Bo1nZE69RCt3jBqrfihTRbefu8cKC10E3x42nE3O6Cw6kEHYjzAi86KMcd2gx0FqRXkDDyn%2FPEBjqkAfcEk0ktrlSbvLRIbu40ENkA%2B95jP2A6vqXqNkYN6Q%2FI0KBUws09QxlIDQpMIAWWlbNlYwTIN3NFnJcPqStvUC%2Frg2vJ3nn1om5Fmase5us2%2ByHbGL2mlyuuBgeAjOOlZ2GV5q6JtbFlX9XQJFvpceGJaKQEn9V%2BAXQU18MkmYvceyDPsLpGiM6d7m3ZIueoQkw9WSlXqZauHb2soP3vnV5%2FU6bt&X-Amz-Signature=a431b349485c7771174aa09f32843b8ad1ca24cce939d0906ea7721f507c0be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YG7A2VJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgm%2B1v%2Fcbu2wnynAR6LDphLLRTSsXkMItO0NQTo8ZYXQIhAP2eGjxQbNtXOXZyc8IZsHKbLKB3f2K7JYhxfOszS1CsKv8DCDMQABoMNjM3NDIzMTgzODA1Igz2Bo6xbR%2FcsE%2B59AUq3ANzrXhM2pb%2BUyMEH21cgwlaaqvFZ5BMlQyCNmsNN8tdBL%2FNoePWdwailFTMHAaY7hkZHfpt9SOpvOfQ%2BftqQN8PsNfmJr20kT6Ek4LkEOhJHwUakIzwGJ8hYfcwA%2B%2B6iNun2NCppZhQKrmipaooi23wvMECA0M2K3gkxFjWDjsM7ivXM7YXCQVdGcu324sT9VBI6tWNgJep6ca0LPLBrt8NXLbqI6KBb60LBeoT8Rfahlyt%2F%2BAoKqInc8JHp2Od3gn40mN0lIFRe3V2G0T%2Bp6pQI1VKPVL%2FRn6yFY6%2FRXZRaoZYhAYsVm5mNIG0M1Ei%2BRl0jWl2lgNtC5hZg4b2HBf7GI%2BQ%2FLSWYPufq%2F8obmiBvAx5lGMLE8H18TQpiOvvojGAQpb%2Br0rb6ywEQcB2PWZgDd9PZRFy4ASgqqlq%2B7pJSuokMp7NZas1JboauKHfz9GvDlGVyyWZ5YrDUpPJDH3lHvne5Z3PhSf%2BXgcB2Ezo4JxnEzfzeyyUZzmz18FvUJV8RaK%2FgrZevF6fXq4utLwAjw30iOt%2Fcgp2R%2Fb80Gv3m3aHPGt1J8bM5q%2Bo1nZE69RCt3jBqrfihTRbefu8cKC10E3x42nE3O6Cw6kEHYjzAi86KMcd2gx0FqRXkDDyn%2FPEBjqkAfcEk0ktrlSbvLRIbu40ENkA%2B95jP2A6vqXqNkYN6Q%2FI0KBUws09QxlIDQpMIAWWlbNlYwTIN3NFnJcPqStvUC%2Frg2vJ3nn1om5Fmase5us2%2ByHbGL2mlyuuBgeAjOOlZ2GV5q6JtbFlX9XQJFvpceGJaKQEn9V%2BAXQU18MkmYvceyDPsLpGiM6d7m3ZIueoQkw9WSlXqZauHb2soP3vnV5%2FU6bt&X-Amz-Signature=19d0f6adf31bd442531c0db894d2e7bb26519851a04f8f2712c92917918747b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YG7A2VJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgm%2B1v%2Fcbu2wnynAR6LDphLLRTSsXkMItO0NQTo8ZYXQIhAP2eGjxQbNtXOXZyc8IZsHKbLKB3f2K7JYhxfOszS1CsKv8DCDMQABoMNjM3NDIzMTgzODA1Igz2Bo6xbR%2FcsE%2B59AUq3ANzrXhM2pb%2BUyMEH21cgwlaaqvFZ5BMlQyCNmsNN8tdBL%2FNoePWdwailFTMHAaY7hkZHfpt9SOpvOfQ%2BftqQN8PsNfmJr20kT6Ek4LkEOhJHwUakIzwGJ8hYfcwA%2B%2B6iNun2NCppZhQKrmipaooi23wvMECA0M2K3gkxFjWDjsM7ivXM7YXCQVdGcu324sT9VBI6tWNgJep6ca0LPLBrt8NXLbqI6KBb60LBeoT8Rfahlyt%2F%2BAoKqInc8JHp2Od3gn40mN0lIFRe3V2G0T%2Bp6pQI1VKPVL%2FRn6yFY6%2FRXZRaoZYhAYsVm5mNIG0M1Ei%2BRl0jWl2lgNtC5hZg4b2HBf7GI%2BQ%2FLSWYPufq%2F8obmiBvAx5lGMLE8H18TQpiOvvojGAQpb%2Br0rb6ywEQcB2PWZgDd9PZRFy4ASgqqlq%2B7pJSuokMp7NZas1JboauKHfz9GvDlGVyyWZ5YrDUpPJDH3lHvne5Z3PhSf%2BXgcB2Ezo4JxnEzfzeyyUZzmz18FvUJV8RaK%2FgrZevF6fXq4utLwAjw30iOt%2Fcgp2R%2Fb80Gv3m3aHPGt1J8bM5q%2Bo1nZE69RCt3jBqrfihTRbefu8cKC10E3x42nE3O6Cw6kEHYjzAi86KMcd2gx0FqRXkDDyn%2FPEBjqkAfcEk0ktrlSbvLRIbu40ENkA%2B95jP2A6vqXqNkYN6Q%2FI0KBUws09QxlIDQpMIAWWlbNlYwTIN3NFnJcPqStvUC%2Frg2vJ3nn1om5Fmase5us2%2ByHbGL2mlyuuBgeAjOOlZ2GV5q6JtbFlX9XQJFvpceGJaKQEn9V%2BAXQU18MkmYvceyDPsLpGiM6d7m3ZIueoQkw9WSlXqZauHb2soP3vnV5%2FU6bt&X-Amz-Signature=9db4a9c2455806223aae40089547290191944abf5822701b3393539f2fb21590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YG7A2VJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgm%2B1v%2Fcbu2wnynAR6LDphLLRTSsXkMItO0NQTo8ZYXQIhAP2eGjxQbNtXOXZyc8IZsHKbLKB3f2K7JYhxfOszS1CsKv8DCDMQABoMNjM3NDIzMTgzODA1Igz2Bo6xbR%2FcsE%2B59AUq3ANzrXhM2pb%2BUyMEH21cgwlaaqvFZ5BMlQyCNmsNN8tdBL%2FNoePWdwailFTMHAaY7hkZHfpt9SOpvOfQ%2BftqQN8PsNfmJr20kT6Ek4LkEOhJHwUakIzwGJ8hYfcwA%2B%2B6iNun2NCppZhQKrmipaooi23wvMECA0M2K3gkxFjWDjsM7ivXM7YXCQVdGcu324sT9VBI6tWNgJep6ca0LPLBrt8NXLbqI6KBb60LBeoT8Rfahlyt%2F%2BAoKqInc8JHp2Od3gn40mN0lIFRe3V2G0T%2Bp6pQI1VKPVL%2FRn6yFY6%2FRXZRaoZYhAYsVm5mNIG0M1Ei%2BRl0jWl2lgNtC5hZg4b2HBf7GI%2BQ%2FLSWYPufq%2F8obmiBvAx5lGMLE8H18TQpiOvvojGAQpb%2Br0rb6ywEQcB2PWZgDd9PZRFy4ASgqqlq%2B7pJSuokMp7NZas1JboauKHfz9GvDlGVyyWZ5YrDUpPJDH3lHvne5Z3PhSf%2BXgcB2Ezo4JxnEzfzeyyUZzmz18FvUJV8RaK%2FgrZevF6fXq4utLwAjw30iOt%2Fcgp2R%2Fb80Gv3m3aHPGt1J8bM5q%2Bo1nZE69RCt3jBqrfihTRbefu8cKC10E3x42nE3O6Cw6kEHYjzAi86KMcd2gx0FqRXkDDyn%2FPEBjqkAfcEk0ktrlSbvLRIbu40ENkA%2B95jP2A6vqXqNkYN6Q%2FI0KBUws09QxlIDQpMIAWWlbNlYwTIN3NFnJcPqStvUC%2Frg2vJ3nn1om5Fmase5us2%2ByHbGL2mlyuuBgeAjOOlZ2GV5q6JtbFlX9XQJFvpceGJaKQEn9V%2BAXQU18MkmYvceyDPsLpGiM6d7m3ZIueoQkw9WSlXqZauHb2soP3vnV5%2FU6bt&X-Amz-Signature=8692a237617f36a1ab7f6bb7e58d6e32e1d20628e7c7c6ec0b30d6b24f662435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YG7A2VJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgm%2B1v%2Fcbu2wnynAR6LDphLLRTSsXkMItO0NQTo8ZYXQIhAP2eGjxQbNtXOXZyc8IZsHKbLKB3f2K7JYhxfOszS1CsKv8DCDMQABoMNjM3NDIzMTgzODA1Igz2Bo6xbR%2FcsE%2B59AUq3ANzrXhM2pb%2BUyMEH21cgwlaaqvFZ5BMlQyCNmsNN8tdBL%2FNoePWdwailFTMHAaY7hkZHfpt9SOpvOfQ%2BftqQN8PsNfmJr20kT6Ek4LkEOhJHwUakIzwGJ8hYfcwA%2B%2B6iNun2NCppZhQKrmipaooi23wvMECA0M2K3gkxFjWDjsM7ivXM7YXCQVdGcu324sT9VBI6tWNgJep6ca0LPLBrt8NXLbqI6KBb60LBeoT8Rfahlyt%2F%2BAoKqInc8JHp2Od3gn40mN0lIFRe3V2G0T%2Bp6pQI1VKPVL%2FRn6yFY6%2FRXZRaoZYhAYsVm5mNIG0M1Ei%2BRl0jWl2lgNtC5hZg4b2HBf7GI%2BQ%2FLSWYPufq%2F8obmiBvAx5lGMLE8H18TQpiOvvojGAQpb%2Br0rb6ywEQcB2PWZgDd9PZRFy4ASgqqlq%2B7pJSuokMp7NZas1JboauKHfz9GvDlGVyyWZ5YrDUpPJDH3lHvne5Z3PhSf%2BXgcB2Ezo4JxnEzfzeyyUZzmz18FvUJV8RaK%2FgrZevF6fXq4utLwAjw30iOt%2Fcgp2R%2Fb80Gv3m3aHPGt1J8bM5q%2Bo1nZE69RCt3jBqrfihTRbefu8cKC10E3x42nE3O6Cw6kEHYjzAi86KMcd2gx0FqRXkDDyn%2FPEBjqkAfcEk0ktrlSbvLRIbu40ENkA%2B95jP2A6vqXqNkYN6Q%2FI0KBUws09QxlIDQpMIAWWlbNlYwTIN3NFnJcPqStvUC%2Frg2vJ3nn1om5Fmase5us2%2ByHbGL2mlyuuBgeAjOOlZ2GV5q6JtbFlX9XQJFvpceGJaKQEn9V%2BAXQU18MkmYvceyDPsLpGiM6d7m3ZIueoQkw9WSlXqZauHb2soP3vnV5%2FU6bt&X-Amz-Signature=a27e8509211dee1dece006f6eb6952aacbbb68d4d16336e716ebf33b4cdbe53f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YG7A2VJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgm%2B1v%2Fcbu2wnynAR6LDphLLRTSsXkMItO0NQTo8ZYXQIhAP2eGjxQbNtXOXZyc8IZsHKbLKB3f2K7JYhxfOszS1CsKv8DCDMQABoMNjM3NDIzMTgzODA1Igz2Bo6xbR%2FcsE%2B59AUq3ANzrXhM2pb%2BUyMEH21cgwlaaqvFZ5BMlQyCNmsNN8tdBL%2FNoePWdwailFTMHAaY7hkZHfpt9SOpvOfQ%2BftqQN8PsNfmJr20kT6Ek4LkEOhJHwUakIzwGJ8hYfcwA%2B%2B6iNun2NCppZhQKrmipaooi23wvMECA0M2K3gkxFjWDjsM7ivXM7YXCQVdGcu324sT9VBI6tWNgJep6ca0LPLBrt8NXLbqI6KBb60LBeoT8Rfahlyt%2F%2BAoKqInc8JHp2Od3gn40mN0lIFRe3V2G0T%2Bp6pQI1VKPVL%2FRn6yFY6%2FRXZRaoZYhAYsVm5mNIG0M1Ei%2BRl0jWl2lgNtC5hZg4b2HBf7GI%2BQ%2FLSWYPufq%2F8obmiBvAx5lGMLE8H18TQpiOvvojGAQpb%2Br0rb6ywEQcB2PWZgDd9PZRFy4ASgqqlq%2B7pJSuokMp7NZas1JboauKHfz9GvDlGVyyWZ5YrDUpPJDH3lHvne5Z3PhSf%2BXgcB2Ezo4JxnEzfzeyyUZzmz18FvUJV8RaK%2FgrZevF6fXq4utLwAjw30iOt%2Fcgp2R%2Fb80Gv3m3aHPGt1J8bM5q%2Bo1nZE69RCt3jBqrfihTRbefu8cKC10E3x42nE3O6Cw6kEHYjzAi86KMcd2gx0FqRXkDDyn%2FPEBjqkAfcEk0ktrlSbvLRIbu40ENkA%2B95jP2A6vqXqNkYN6Q%2FI0KBUws09QxlIDQpMIAWWlbNlYwTIN3NFnJcPqStvUC%2Frg2vJ3nn1om5Fmase5us2%2ByHbGL2mlyuuBgeAjOOlZ2GV5q6JtbFlX9XQJFvpceGJaKQEn9V%2BAXQU18MkmYvceyDPsLpGiM6d7m3ZIueoQkw9WSlXqZauHb2soP3vnV5%2FU6bt&X-Amz-Signature=dafec1dc3deb565e846f6daf09085863e78c9788057b0649a1b702181a666ffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YG7A2VJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgm%2B1v%2Fcbu2wnynAR6LDphLLRTSsXkMItO0NQTo8ZYXQIhAP2eGjxQbNtXOXZyc8IZsHKbLKB3f2K7JYhxfOszS1CsKv8DCDMQABoMNjM3NDIzMTgzODA1Igz2Bo6xbR%2FcsE%2B59AUq3ANzrXhM2pb%2BUyMEH21cgwlaaqvFZ5BMlQyCNmsNN8tdBL%2FNoePWdwailFTMHAaY7hkZHfpt9SOpvOfQ%2BftqQN8PsNfmJr20kT6Ek4LkEOhJHwUakIzwGJ8hYfcwA%2B%2B6iNun2NCppZhQKrmipaooi23wvMECA0M2K3gkxFjWDjsM7ivXM7YXCQVdGcu324sT9VBI6tWNgJep6ca0LPLBrt8NXLbqI6KBb60LBeoT8Rfahlyt%2F%2BAoKqInc8JHp2Od3gn40mN0lIFRe3V2G0T%2Bp6pQI1VKPVL%2FRn6yFY6%2FRXZRaoZYhAYsVm5mNIG0M1Ei%2BRl0jWl2lgNtC5hZg4b2HBf7GI%2BQ%2FLSWYPufq%2F8obmiBvAx5lGMLE8H18TQpiOvvojGAQpb%2Br0rb6ywEQcB2PWZgDd9PZRFy4ASgqqlq%2B7pJSuokMp7NZas1JboauKHfz9GvDlGVyyWZ5YrDUpPJDH3lHvne5Z3PhSf%2BXgcB2Ezo4JxnEzfzeyyUZzmz18FvUJV8RaK%2FgrZevF6fXq4utLwAjw30iOt%2Fcgp2R%2Fb80Gv3m3aHPGt1J8bM5q%2Bo1nZE69RCt3jBqrfihTRbefu8cKC10E3x42nE3O6Cw6kEHYjzAi86KMcd2gx0FqRXkDDyn%2FPEBjqkAfcEk0ktrlSbvLRIbu40ENkA%2B95jP2A6vqXqNkYN6Q%2FI0KBUws09QxlIDQpMIAWWlbNlYwTIN3NFnJcPqStvUC%2Frg2vJ3nn1om5Fmase5us2%2ByHbGL2mlyuuBgeAjOOlZ2GV5q6JtbFlX9XQJFvpceGJaKQEn9V%2BAXQU18MkmYvceyDPsLpGiM6d7m3ZIueoQkw9WSlXqZauHb2soP3vnV5%2FU6bt&X-Amz-Signature=7fdd6c5ca8718506b1a227ae39761c33b41bebe1e12f92091f3bd665af35e74d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HBWWR72%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVYALhL3kkaj6OqQ8GsqEpob6diRbjFy7cG3L6zgq2KwIhAPIflYUfYvJ4saWDO16shumTV5P2lpN6QolcVSlKdXauKv8DCDMQABoMNjM3NDIzMTgzODA1IgwMyXTPbHGAm%2BEShEQq3ANe0TqwlFuA54zO%2Fj2DqOwXdsWoIk4Cnhx1jTMopHvvvWv60qMv46X6xl6EERY9I2Dkc14JF4%2Boh5VgArLpoGpiLhArYRiWjR%2FEhGwvm22zJRThMJB5gN%2Ftv%2Fj3YN2YnNjF4SYtDqT0d7tbflHlxs83mlKAeiVun57YJA1T%2B%2FEyD1mtDuO0KxvrftAt85V7Pe1%2Fa2vyhBH60BoNYmYRj7C2mmCGwvTCjzEUH%2BdjeJhJaghGwRpTPkVP6vlwYIjfLX6AfNe9bvSUCuwKJ3ldlOghwtB1KW5mLKevgjzhlzXIjz8RxTFMlV3Pw1FheZKh3HRd%2FEF340BqNW9FVqCiPMhFoCXAVo%2FyBH1EEBZvZXO2YQo1xuwGIAMiyBajcTFaCUqyCZRCBhY7bJhg21ERzyzTAJsE9EqrJAN%2F9lLOz1DBs8edkdp%2F2ob2lzdb2lyGXznGz05H07r818bAXAPQOl65HtsbuJgcwlI%2B3wcHnDgqTlRtjnQfk0cTgE5tBrIEWugin5NE7%2BRqv2sRHe0y9TBOBNaqLzWkYbEDnQ9vGtIXlS0OQY6Rr7vpMoiBb%2FwJ7yUHSDAMmDtzzLGkAodFROjCyffPdZ0hf3grWjHChnsfnuzrZtt%2FEuwGRC1onDDNoPPEBjqkAc5hLMPekyY1UVVcspgOm8TZZjaZG69Ku%2FecggVtauKfSR14%2FW3eUlmdPYhRB%2Ffzxb7FO8qFQ3lWpVxhu1uKz7qlHTRXIv0Lu0Fb%2B9BvPT5GFECrqVNb7Eegbf9QD7REnkHG5HxG7CV70vxxodKkaXMsz4R7ZijX0uFqyKQwcSaLlfAvIbEo0V6sxuN7MZflmOnsLqfgZr6tt1C5URxV0q66YMMW&X-Amz-Signature=10ef7060d627f18cc21d82921cf6692a71360a93e8c2924ce79a9dc51bbddfb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IJYM743%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtD9d90HaiDinuC9FfHxlZhAc8ZtrIjmPwO08%2BkENWjwIgOzT4MNKWzNLo5Ho%2FUr1v1ngRcFEiKCpzs0dkGKnNzAcq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDB201DuDSZ4I2nlbtCrcA3GcZAaHL8AddKcDFJb57lH1M2oYvyQrc7lEcy346qoi%2FR1poG6Q6xNJgF%2BaZo4QmZNpc79NT8y4RQI9XQrJQx7AfgeQbbZdf7HnuWk65R9h4MMFrxxGKDr4W%2F6q1EoSp8okdzCFsEyimmwbQy55h5%2FPngN89rTSg7n%2Bp1mR%2BozEirqrnsaR4nPzEMYkLcay%2BURn3CRnGQBDrEYqAV52FGydn1J3Wr4XUEPT5xipSzbslzGHKM2zGM3ypBwM6Lg%2FCB%2FmUEols36zIc83v54GY%2FxL6dbPfSsHLijeCZMZyhVQbXe5gmucVudgWAtmIDlqeCWNozHqyvz2QbtmIXbfm49h%2F%2FZFMhiVtl%2F3tgDxYWyIenfyf2i%2FF2NWlm6gfJ0yImELwNdHWNGkoKHimjK%2FcND2CS33i9qWTdsFqUAR%2BbIJE6Fjh32KHAhikSZsXdnG40hUZ%2FRuemiANWiT6Yscu0crLe5L9wax%2FKk2FOQVApOBzViTUyf4c5CqE12UzaKogbVWdWbkDAWx6XVNRiFApQqbyY4qBl4XrLPeIhPzoeoke0XB1xEchCLV7j2vPHbzNd4fLYaXuY2k7ewa%2F7peFFLEJkLS5XVijDyKyyhVchjUQU3O6Rderke1XKX8MNuf88QGOqUBrZNEwCncPQgSSEcu1pip5fMFIF6DUjueYPNI6G%2BrqnkdznqEb%2BSBD8Gt%2FlA2yxiSdhBt0B7OFbZ9G6xwFGmgFAkprUT1aui%2FkEraJIpBM2c6UBPIY1gdy7ulAo1ETWklR2sD%2FUaEztSD6ptwFwmo6TkqyQ5ktVLsij7k7%2Fuv7%2F0GLMwB3QtHIgVKG%2Bn3yRJgC%2Bv12uD0UHIncJRMwSJ3QrkYGWpC&X-Amz-Signature=b25df8cfcaeb37f152b1fff2d2e70ecee80453488f999ef773103272ea5bb2f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RATFEBG3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNH6ZkuDax5TesPsGI4on%2BrCfOhcW5gPc5k905qle7CwIgAaZPvR4agmfO0fHXk%2B8FF8XmjgtDA0gYHgRM5%2B11d54q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHOZ23AFoMoKLF7o2CrcA85a2PWRi8HK3d%2FVSbQENnsfCPKjTAfRftRv%2F8GftSDn3fk%2Fl1nQI4FMAcW40AQn0luUcDVLDMr%2FhD1hkErfjNv1WHAIbAAVs3FKhaAzECTpR8xxkoWSHg5EI1FObt29FZYzPmtE6EvTlGuYcLufyo4A8mGFevlYOaf9beDgwZbxW5joOn%2FwRkwdS0Y3IY%2B8tpZ%2BCZRMpHHkFDIoLuASrXFw3KLTnv71%2BQ4YzMIYQ9TNb9EBmOp0vU45Ctk2eDRXNQ2yTbMhsClbCFJxKqnpAVu8d0R35vTGpUnzoNFUQ8ziIEhobHUiSLN69emBx9bo7n7JTTVtMHQKnVE8PDnsm%2B4oVlksxgiR7OcaKwkmA23GcRATESstL1GvzcSAMt%2FxJIPEz4WGGrxPlb8laWQAAGPOj%2Bc2M2MsM%2BjaErSAjhGZhhoBC9jcAO0DpS5jV%2BpzYBAONdzh8gIwGzfP%2BvFeiHyCYm1JjD9dz%2BjMuUcGsYQp%2F%2BKHAFu%2FZ1qAGFGIN7qe3D9k2nR8P%2Bb95ibYdreNNUtreGgCF7KHMiA3zOYcEsOPJvO6ud5DxY6Bb%2B1qf1HVlvdcEDhzaJT%2BfRS3oryiSSkDWVmHPxROBEE6nfQKtNi4ANZXhEXwORsIz5iRMPKf88QGOqUBJgltQxqRBa5880tfk4q4TQrADbdOMPe7l4keUIz9Xy%2FWBIDr64bSqz6qfMcTB%2BqCwprgREcMEKAhUsRReFGwP1SiTdSD1uPjS%2BnTC6XImkBJ%2B%2FcewxZkus7C%2FTNUumAsPoKqtkPObGmUTBCy7Rhh5pt7C9Yqq4PVCEbKr84r1mj9KKrI%2B8hzm%2BV3Z3ZFQ8b%2FU6FYc0FYDWGwGRkw7IdF2miEvhqM&X-Amz-Signature=2eabcf03eea0032a0308e3e1e6ae77f6387d3f8f8d90ef1885b97c533b6d57fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YG7A2VJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgm%2B1v%2Fcbu2wnynAR6LDphLLRTSsXkMItO0NQTo8ZYXQIhAP2eGjxQbNtXOXZyc8IZsHKbLKB3f2K7JYhxfOszS1CsKv8DCDMQABoMNjM3NDIzMTgzODA1Igz2Bo6xbR%2FcsE%2B59AUq3ANzrXhM2pb%2BUyMEH21cgwlaaqvFZ5BMlQyCNmsNN8tdBL%2FNoePWdwailFTMHAaY7hkZHfpt9SOpvOfQ%2BftqQN8PsNfmJr20kT6Ek4LkEOhJHwUakIzwGJ8hYfcwA%2B%2B6iNun2NCppZhQKrmipaooi23wvMECA0M2K3gkxFjWDjsM7ivXM7YXCQVdGcu324sT9VBI6tWNgJep6ca0LPLBrt8NXLbqI6KBb60LBeoT8Rfahlyt%2F%2BAoKqInc8JHp2Od3gn40mN0lIFRe3V2G0T%2Bp6pQI1VKPVL%2FRn6yFY6%2FRXZRaoZYhAYsVm5mNIG0M1Ei%2BRl0jWl2lgNtC5hZg4b2HBf7GI%2BQ%2FLSWYPufq%2F8obmiBvAx5lGMLE8H18TQpiOvvojGAQpb%2Br0rb6ywEQcB2PWZgDd9PZRFy4ASgqqlq%2B7pJSuokMp7NZas1JboauKHfz9GvDlGVyyWZ5YrDUpPJDH3lHvne5Z3PhSf%2BXgcB2Ezo4JxnEzfzeyyUZzmz18FvUJV8RaK%2FgrZevF6fXq4utLwAjw30iOt%2Fcgp2R%2Fb80Gv3m3aHPGt1J8bM5q%2Bo1nZE69RCt3jBqrfihTRbefu8cKC10E3x42nE3O6Cw6kEHYjzAi86KMcd2gx0FqRXkDDyn%2FPEBjqkAfcEk0ktrlSbvLRIbu40ENkA%2B95jP2A6vqXqNkYN6Q%2FI0KBUws09QxlIDQpMIAWWlbNlYwTIN3NFnJcPqStvUC%2Frg2vJ3nn1om5Fmase5us2%2ByHbGL2mlyuuBgeAjOOlZ2GV5q6JtbFlX9XQJFvpceGJaKQEn9V%2BAXQU18MkmYvceyDPsLpGiM6d7m3ZIueoQkw9WSlXqZauHb2soP3vnV5%2FU6bt&X-Amz-Signature=d6f34c66bd6e80c05dd321880fdf3ef0f770d467a8c8ca456d1ffc87b8c654f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626FGNXWC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpVpX%2F7VLfmhZmazxBpOqIdY6kJ42qJzQbESJqFRqepAiAlzZC4meeYYpr899N%2BQpL580CNxGaHwWFyIxbX%2FB2ltyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMcAUtz8JhDi0hUynYKtwDadH%2BGUHjR09Eh3UAL4T%2FbkAvPqppl2GAPql0AlqB6z0QlQuWDOeJV7cUOZY98gsP%2FgocDCobrUnVWU4SQVFtC7Vo%2Fg0G9fixyO3k3oZcqakUQOl%2FGZ8o4mEoZfVipb84SCLokzUxAtNDm%2BhvJ1FVvgLEmuHy%2BEWH5ypALbnf%2BUUzgjymPQXb8StXrIKr3PRoRU1%2FfOpp3Tmc8iprMXoX615rGX7aX9BAXs%2FbTbjwd7Lf%2BWt1rc0J63JFl2c8GBCw2kxnNpeffqkE7pq2ktVHZbHxCLJ5a9fCck92GV0HdqyFaOcWzxSJr8%2BGC%2BxCsfMU6ldXy0RioPP62izJTAyHc4tO5xc9sLSurhZYBTJg1xIHdNmYtbnLGn5d9Ha6xzdHktsuY4vCeuLc61KJrF3nLB5yvfzqUw49tyFUnToD2czF7NFjfTkmb9knwnQOY1k67tjdB6gYyxFouTIw9l0RlZmdN%2Fzin5fq3yW7HmooyQ%2BLPDdA011TBinDx4V3TvzPJjhRMLOYbJa2rB6UcYO9IqDoAFR8dSjuXdO72fqbu3BLzHGCHIVqYbD2RX7uDn1uXdeE3nuIWKPa9LHm2Xmstqn40p9odp9rsnx6zzHB64EWfzombXc1aziJCRswz5%2FzxAY6pgF9Xxcf3d9yfNKSKfJ7OvE9FWXU%2F9JO8zkvpplzg8z5QwBrKg9GnC1aQ651qdTql4Oa8rX1JtWXtIKYNiU6dIFQM9yXy2GeGJ9%2FgaaSB6lvTT0e7sfKOpZqjOGkSpxeat6285z8YG%2BhLTWmW%2FNuzuRScfDUtP2sUgwvWTBwUYtSpopR2CBrHhhtwiIRvKVRJ%2Fbg%2BJzJTP%2FrLuiTfI7wBs8%2BHtqoXZPe&X-Amz-Signature=dbfd12d4c0de544f28cb63c6f73dad003f0b341833c6c8c806ce3e5e1b167b31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YG7A2VJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgm%2B1v%2Fcbu2wnynAR6LDphLLRTSsXkMItO0NQTo8ZYXQIhAP2eGjxQbNtXOXZyc8IZsHKbLKB3f2K7JYhxfOszS1CsKv8DCDMQABoMNjM3NDIzMTgzODA1Igz2Bo6xbR%2FcsE%2B59AUq3ANzrXhM2pb%2BUyMEH21cgwlaaqvFZ5BMlQyCNmsNN8tdBL%2FNoePWdwailFTMHAaY7hkZHfpt9SOpvOfQ%2BftqQN8PsNfmJr20kT6Ek4LkEOhJHwUakIzwGJ8hYfcwA%2B%2B6iNun2NCppZhQKrmipaooi23wvMECA0M2K3gkxFjWDjsM7ivXM7YXCQVdGcu324sT9VBI6tWNgJep6ca0LPLBrt8NXLbqI6KBb60LBeoT8Rfahlyt%2F%2BAoKqInc8JHp2Od3gn40mN0lIFRe3V2G0T%2Bp6pQI1VKPVL%2FRn6yFY6%2FRXZRaoZYhAYsVm5mNIG0M1Ei%2BRl0jWl2lgNtC5hZg4b2HBf7GI%2BQ%2FLSWYPufq%2F8obmiBvAx5lGMLE8H18TQpiOvvojGAQpb%2Br0rb6ywEQcB2PWZgDd9PZRFy4ASgqqlq%2B7pJSuokMp7NZas1JboauKHfz9GvDlGVyyWZ5YrDUpPJDH3lHvne5Z3PhSf%2BXgcB2Ezo4JxnEzfzeyyUZzmz18FvUJV8RaK%2FgrZevF6fXq4utLwAjw30iOt%2Fcgp2R%2Fb80Gv3m3aHPGt1J8bM5q%2Bo1nZE69RCt3jBqrfihTRbefu8cKC10E3x42nE3O6Cw6kEHYjzAi86KMcd2gx0FqRXkDDyn%2FPEBjqkAfcEk0ktrlSbvLRIbu40ENkA%2B95jP2A6vqXqNkYN6Q%2FI0KBUws09QxlIDQpMIAWWlbNlYwTIN3NFnJcPqStvUC%2Frg2vJ3nn1om5Fmase5us2%2ByHbGL2mlyuuBgeAjOOlZ2GV5q6JtbFlX9XQJFvpceGJaKQEn9V%2BAXQU18MkmYvceyDPsLpGiM6d7m3ZIueoQkw9WSlXqZauHb2soP3vnV5%2FU6bt&X-Amz-Signature=40415114c41b6ded785f909b482ea2277cc7b5d41aa09d7062b3587402c0b38b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMIWH6M3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM9AAYYZTH8Do2%2FzP72rXVo7kQuazJXyH5tUFn%2BK7DEwIgC3CVAZtndnLl4dujAXxW319dKBKQcuVS8B3g%2FkfKq%2F8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDOxzGsq%2FLB67rNViWircA1KT%2BN0vhrKfsAz351nUmkr28ufMTdAkUwE9b7yiovyKJja%2Buz9tpyw3dCqAWIhzzs651Zh7XAHdJqxmCSeVv7NRqmloOeUgN4saGa83VQwvP5VtQl92Rr8U02kyT1PuAm20aZhAcLgVgAhqEg49RSFHPCkBUc11VuWRnNksA%2BQ2ZAeimqwA%2FmthmWMovzfBH3HGFhodG54m%2F4qyzH1ioLcSxgTbY%2B2OdXnjbomdp39gzTaqVeJlXdOoYCa9D8rDh3Sfnzs0kGrLSnuu5uI15r4MHmxV227h%2FETmgSv1DPFjcKt0Xjy5SeRrWTOBfgakTZ%2B7I0e%2FfGh1UVa%2BJiQSN%2F4%2FhlC0f1ZA5%2FEq5%2F81t%2FspQT8V7Rtbw3clyY1ozz0mNLAuwgNpB6%2BQLX8OxK7Vuv2mL3gkzQGrsyWZfOlpb1st7A9pt%2BDuMNiuWQIzaYcWyK5sdplUmkUBtyhEVNVnbPxTb3qKQP8PJm%2FgMH7Bs7WCQ83RbpwpSsWiHpbcdQVZEBzqa9hIjIAHOZif27iDNY9ULGTGFGo2WxX%2F0j1gHDRHLFOrJzAHtHzuJQcfwnvAbPDtpWNK9KgPT9McFuQVy2oWVEK7inpY%2BP1%2F8xWt9QIOQEmtD5441CtF4WirMLCg88QGOqUBhShHIKslaC0%2FOgmUKRLKH6JF%2FWOiLDeFYIIjrVr73jJf7aK%2FnZrtNgd9PT42GuggDv%2BZqSc%2BtoAEvnSo0shCQWz%2Bn2r1qZMnY%2FDrsIqhWPe4yJH7LAOrNZahwZ9zkNDtGH10V8OoxXlul1UElDdf8O735qS%2F6KNhrLrHDB9KuRu17joYldkjMiTnnUOGoCfQ96woNJofXCET%2FTD%2BQGFDO7OD13xI&X-Amz-Signature=08f128dd5f51297091135c41042cffd00f72f8a586df10933a4879a1ea5e6f9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YG7A2VJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgm%2B1v%2Fcbu2wnynAR6LDphLLRTSsXkMItO0NQTo8ZYXQIhAP2eGjxQbNtXOXZyc8IZsHKbLKB3f2K7JYhxfOszS1CsKv8DCDMQABoMNjM3NDIzMTgzODA1Igz2Bo6xbR%2FcsE%2B59AUq3ANzrXhM2pb%2BUyMEH21cgwlaaqvFZ5BMlQyCNmsNN8tdBL%2FNoePWdwailFTMHAaY7hkZHfpt9SOpvOfQ%2BftqQN8PsNfmJr20kT6Ek4LkEOhJHwUakIzwGJ8hYfcwA%2B%2B6iNun2NCppZhQKrmipaooi23wvMECA0M2K3gkxFjWDjsM7ivXM7YXCQVdGcu324sT9VBI6tWNgJep6ca0LPLBrt8NXLbqI6KBb60LBeoT8Rfahlyt%2F%2BAoKqInc8JHp2Od3gn40mN0lIFRe3V2G0T%2Bp6pQI1VKPVL%2FRn6yFY6%2FRXZRaoZYhAYsVm5mNIG0M1Ei%2BRl0jWl2lgNtC5hZg4b2HBf7GI%2BQ%2FLSWYPufq%2F8obmiBvAx5lGMLE8H18TQpiOvvojGAQpb%2Br0rb6ywEQcB2PWZgDd9PZRFy4ASgqqlq%2B7pJSuokMp7NZas1JboauKHfz9GvDlGVyyWZ5YrDUpPJDH3lHvne5Z3PhSf%2BXgcB2Ezo4JxnEzfzeyyUZzmz18FvUJV8RaK%2FgrZevF6fXq4utLwAjw30iOt%2Fcgp2R%2Fb80Gv3m3aHPGt1J8bM5q%2Bo1nZE69RCt3jBqrfihTRbefu8cKC10E3x42nE3O6Cw6kEHYjzAi86KMcd2gx0FqRXkDDyn%2FPEBjqkAfcEk0ktrlSbvLRIbu40ENkA%2B95jP2A6vqXqNkYN6Q%2FI0KBUws09QxlIDQpMIAWWlbNlYwTIN3NFnJcPqStvUC%2Frg2vJ3nn1om5Fmase5us2%2ByHbGL2mlyuuBgeAjOOlZ2GV5q6JtbFlX9XQJFvpceGJaKQEn9V%2BAXQU18MkmYvceyDPsLpGiM6d7m3ZIueoQkw9WSlXqZauHb2soP3vnV5%2FU6bt&X-Amz-Signature=f5717bb98199e50a1f7f8e56d27eec2041f1e3faf122f299a7e786111dd0c05a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XZLJISU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjPcBTvA3%2FeF2iTTNgmsJeB5QEnOOpD0GwPC1mqK68IAiEArLqBiIJmli4bwAtN%2BVb1YyjwCQinBypPyFhEicPARZQq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMBwnMTFTK6B0zbpCircAyq3eehQKaRe0zyKTlYxnM2pTkXLhzYfuXtxwnKJOBq9ox8UsLABjKhLQL6azzkjMf0FijgGlA1O9vTXR9kf8ek9U4ZZKjTRfAgN4gtIBNnN5VvUpxN3u77aMw%2Fc2KKRLe7y7YR1LjTgox7sWb3qO8Jndx4nDsJi6IdAvtan0Wl5ppIDjldAhsE362r%2BzjjnULOHUBD%2FbP%2FktivnlfHEqc73uO0imA3pXHQ18iWK5nAvbm8KoEhsy9%2FHB434deClOOXxJsxiuSYha8m6dag6%2FCrJBqgoi7EAXbW2juh1jdFwxagJRt%2BOv2v%2BM0SnRmnlvQFTiK9r5Mz8b1DSKnFbAarUPlfKpI2pX8%2FmRlYqcpWj7bsdV2%2BUY3ylgLN5JlVy6R1MAasJtLKK6NNC%2Bilnx7MUd73z5BcOVpHRhpQzwdgfj7x%2BUbfwjU4r5Ee0Oqbqglr4l7EcsrBoumWLmh6ecgJNV9tFt2yV0exAfhu3ZTD0S29wGAamlACkHm%2FhzlWaZE5vpRHFU2GIgHDs%2BAuRbqNw8FrfCR2XlvUIfQrx0H%2BSUmzCjiJWNT54jUMqVF7Q848S6Se2w4pdQ27%2F0E1WS04cG0uLTIZ5CdJcNxVqMCgPZj6NnSSOjBxTGkJaMP2f88QGOqUBec%2FxUg%2Fp7V8sICXNy0OHb%2Bk%2BBuIHSYD2Ue99BCCSAYuokWvtfIugbofSrm%2FBhSodQ6ODp8SgFMqgojm8jBGOGwUHpA%2BNWjKhComfWkhwc2yATtBOBws3KqGAgrPdmzWuJR3T54oXRGsVHaPgCinak08X%2Fh%2Fd9ugFoUrn7gjdy4q1XA2ai9yudhf0QmIXwRguuCx2WjC8eDdE4zEzSdQwokveLOFb&X-Amz-Signature=82ce43aae405ece2da453cda13df15925e817554724fbc7ade0e6c16e3e95f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YG7A2VJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgm%2B1v%2Fcbu2wnynAR6LDphLLRTSsXkMItO0NQTo8ZYXQIhAP2eGjxQbNtXOXZyc8IZsHKbLKB3f2K7JYhxfOszS1CsKv8DCDMQABoMNjM3NDIzMTgzODA1Igz2Bo6xbR%2FcsE%2B59AUq3ANzrXhM2pb%2BUyMEH21cgwlaaqvFZ5BMlQyCNmsNN8tdBL%2FNoePWdwailFTMHAaY7hkZHfpt9SOpvOfQ%2BftqQN8PsNfmJr20kT6Ek4LkEOhJHwUakIzwGJ8hYfcwA%2B%2B6iNun2NCppZhQKrmipaooi23wvMECA0M2K3gkxFjWDjsM7ivXM7YXCQVdGcu324sT9VBI6tWNgJep6ca0LPLBrt8NXLbqI6KBb60LBeoT8Rfahlyt%2F%2BAoKqInc8JHp2Od3gn40mN0lIFRe3V2G0T%2Bp6pQI1VKPVL%2FRn6yFY6%2FRXZRaoZYhAYsVm5mNIG0M1Ei%2BRl0jWl2lgNtC5hZg4b2HBf7GI%2BQ%2FLSWYPufq%2F8obmiBvAx5lGMLE8H18TQpiOvvojGAQpb%2Br0rb6ywEQcB2PWZgDd9PZRFy4ASgqqlq%2B7pJSuokMp7NZas1JboauKHfz9GvDlGVyyWZ5YrDUpPJDH3lHvne5Z3PhSf%2BXgcB2Ezo4JxnEzfzeyyUZzmz18FvUJV8RaK%2FgrZevF6fXq4utLwAjw30iOt%2Fcgp2R%2Fb80Gv3m3aHPGt1J8bM5q%2Bo1nZE69RCt3jBqrfihTRbefu8cKC10E3x42nE3O6Cw6kEHYjzAi86KMcd2gx0FqRXkDDyn%2FPEBjqkAfcEk0ktrlSbvLRIbu40ENkA%2B95jP2A6vqXqNkYN6Q%2FI0KBUws09QxlIDQpMIAWWlbNlYwTIN3NFnJcPqStvUC%2Frg2vJ3nn1om5Fmase5us2%2ByHbGL2mlyuuBgeAjOOlZ2GV5q6JtbFlX9XQJFvpceGJaKQEn9V%2BAXQU18MkmYvceyDPsLpGiM6d7m3ZIueoQkw9WSlXqZauHb2soP3vnV5%2FU6bt&X-Amz-Signature=55b561b4de6316a7a0ade5006ace939ac6c7bd35ab16ab6e18a87347edcd47c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YT3A6FV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBthw%2B3a2gZpbXcNWIHp0DYES8NnCepaH2Q0g2oIFE9AAiAuQtzvvmhNAaV6JRDWBEQb8R8VL2Y9AMGtc4JSgUaY8Sr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMMMKpxq9p5JL9qDRRKtwDT%2FR1iuUAUXCNlflXlDbozCmEmL0beisDgZc2IYFAYng3%2BLxbELlHe39jY9gpDkVOFjmOqQ0cAbgsuuhBpHOa4n0GLG%2Fx621LLyWoY7jnKzAe%2B6X2Gp%2BK%2BaRMc0aJyjxVgxAktQJLR6TRtNnzts6uVegCGWo4bFOY7TAqc15Gkd4QS40XJ9dD59pVGkXdoS92pXfiIHnOPzacp2MaFzmqryFqKC2YNAvDrg17NlYZ2wEvDWjI%2F%2BNmmKa7NYvt5BE7mIcAgz3Q33IHZn6iu%2BVd8fPzds4L1tu0kdRe9jJESbGz52sVkVy18R8MSrjYnPJbIFbZe8rv6ozFgL%2F7%2FHSFiuIDoEzhTG1QXEW8ZK4GPVBs3%2B1BYr0ZMPvWS4TKascQrjkwz7BDuGkcq6sglJeDxwShEX9KD9fcreID9n4j0VPt19jHmqGhKq1B%2FnabHc1X4n0cbPik93QxaZyrdFaCZ2NbiGznVqK%2FGD7Vmq5lwoMKSU29bHdJtHvsBiDlr072TtDfr%2FFihxgthBjAFFlcSKmePTQakFKT6H31j9g5p9xPJabPR3gbMDVLc88H2s7%2BsMWtSI%2BzJAY%2BappJt2aG%2Fj6blUs%2FyBTgFZDS98BHp6ibyXnHelyVaUl7bqAwiqDzxAY6pgH1gSm7M1D4GaRjwG26kkG8dyPEAbSSVzKug6RF7krGlwVUP0FzJZQjfE2wNtqkrPmp40ai9hfpVlK1nloCxCnQuotqALMXCGIuvBf9s6iY1%2Fntr0XE8%2BaRfBHE1vxmN49V%2FKNn1zLyFBC0CKzE8ewdW9gBhLW3%2FJ%2FZ5kE2iBqECeA7WZpwAz0Pbi%2FpPgpMD7gKU1iuIceWFhoB7X9t0X%2BxwS2ZJghx&X-Amz-Signature=57a0b5e20f4111e560a57b6e03f6a690fc1e201dce1625487a67b235028662a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EOWVWU7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbiD84%2B1ija5fVZL4VbdN9rB7BG4M8XmSS%2BOhBv0EFvAiAb30gS0w2qpzIdAmTxIMsZFCyAO5FRasfLzVPZHeSrgir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMcogJGM0eMsqR4%2F2iKtwDCk2kyWR8j2JZrPmeOggVDAwPScbAuOjU9W7aAjlqS32%2FjBYVE363UigJWyYJB9%2BCQ86byWrSEPQauuKpSntciJEzADGcX5pqUlZM%2Fp%2FSMhrQ5YXmFrv%2F3TKqQiRxcX4OTz7IMLzhYa9tJGapEuHiqQ6HJ%2BC7y4jQ0uw%2F3lgzm20EDdcQfHjgEAmxSy8gX6o%2FXRbMH8%2FbOpA01sK%2FYFEh1cBb0J%2Bd6L95eojz3rk0yMYIFFG6kqxZMm5%2BJ8161LklB%2FdXkdhXOgcLdVvWFjiueeTfHuoZPzFHiRYDcUvCqNKgJ4nJkejlu4yw2Ax%2FRLHntpfh8iftu%2BgFjL44R8DPg%2B805QC5tb%2FPXBSrzxj6NTDdEZgf0uLEWo9V1Z%2BsnGCMcOPWme95berVj9e1vh72wD6j05zB1WDz6VXmqyxheWXObPOzvSJzcgD5QJUbx2CesrGLQb%2Ft7AvQYey9g1czhoyzehnITATXWR1EE74Sdn%2FTIsrIaqq3UiUB4lCKOTjuxfc%2BBe%2BSx5SU3QbvVdbsEO6963Oysp5uD4AYIGs%2FfCrI7e0A2wOqA8Vg9UFRukFqxzse8A62frg44kQHhsbumT0xBkrrcQKOym%2BZ30lUKhQl%2FM7E4POiZH5REBsw05%2FzxAY6pgFbg366hcdH%2B8xXJ4UhtUEGXftbB%2FvoCfCpUMNNUKoOzRxgKMSTATx%2B5sxr%2BZJQTZS0xUvgnrnwyrbSjzyfWuPjzosMlqpyrwAi3AlVePxiqa%2BmTjEQKJtN1rUPOBimP0XJWWqVT6SFctbc50Qk%2BDDXAIyaKcANTIRkAMcUEFjSzlm0XfizvgXVinjbQsQ4rWuhJP%2FpZf3RHAvV7QzdefdZHXCcNwm4&X-Amz-Signature=f8529e1b1942f2ba228f8f10fbd6ada4006fc5b18b5e83f35e8d6f5435cf0545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y67C7KE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7vcEl1HOBwRgXasJrRWLuJpL%2Fb%2FTOuFyNWT7hnHVK1AiEA4HNsTmQJcpp3%2B1%2BS40PhUmJKf0qqeNmp1EbiXSu3Fv0q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDInJ02t0mHAxsLhC2yrcAyCGuH184VFSitFztSklXMKt8N6Kv5zLOYLQBQqX2nL5klL2XkBYGeWej4jNU%2Fu79srhiRFizjM4N%2F62nFJXQITgH5B1NhLvkuBcjEKIk15eWxe0V%2B06kfhZjyaqMnih7QW%2BVt%2BLCvFZArm%2Bxy8hx3SOT4LAyugZUsHiCwD8GkKX9uFCIZVZyejaA2VpMcoFcsTdWjgJtuzomuh9REzuSwxBa3hLz3PVApwzrAhkq%2Br0PvQoetr3ulukWVfGbLzIbyEpYBbhkBaEbQkbCxHEmGEjhPmKXju9ekcDX7JbR79IU%2BYhmReFo1gwMmnV%2B%2BsmfnyZc3mI%2BjLJBk8RpnRw4wquGsq%2BqXHNIEDwGhKjreK9vJDvpsM1%2FxC359%2BbmA%2FcIpGeqa%2BwrMmkeSa1xoH9xyzu2vl%2Bx82AdRW1cymUCw1TqDICdu9Tfv2%2F%2FdumCE6V0Qova9D03p3y1qGv%2BxMiEKAwrPG2qumphog5vyTCZ2dc1Ip2LZlo%2BLI0ydN6kAVlSnoMnECQdlOjOdVY93NMNlSQRvjkmvxLv8iAXnGZtovwJMaKpqPIkDd3vBstsOvUWtHWWwJsCH8CTYJwXHL3xfbnZPHim7mDWscwgfV%2FES4j01gj0H99FYImng8bMKSg88QGOqUBYMFlSesopCO5ZVgvObZvWQLuW%2FxulOl6mKRcF2NGjzWvYZ9vQG9a%2BQTC%2B0ucXRXFsGII0ifJ7DETmTHIhc3eL0f80BqONdQWi8Zc47g8LUi4vDuIZmAAUK2zHxxmKJgL9uLVQRMg1L%2FUczNkOx5z7KKPflSMaIJvm4d0RmCoTTmt72tscsEOWcn1zV3duXSGkdRB2iv7JvKMGVvLbKgOSucQr8Gs&X-Amz-Signature=03dd8386ccd1cc8402efa31c80c01bf683223a040ffbd7472293e61764995c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XALLYQ3A%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDggCfVrznIStBOcJKmHT5eU%2BZZRN0u3uq2LZBRQHop4AiEA03jh0frZ%2BauqUOsPa%2FjK1%2BpR2vcqrgaSLYExg7LTVA8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMQL62rGtYNe8BPawCrcA4iysQxfEfFT00hAq9B2VmvQiQD2ujZGY8%2FfZqrItf8%2FCS36RTADM6MyumEKyiUCqv1hXqrnGi%2BMO3YTxR4FdVQWqeur49xUwB6PBwkkSo%2B6AXGauarT87mkS6zw44HCynEqafPi9ONdfen7bhDoMNjtqf0HwPN3I8kXLPnuTjF4eiDJNEuarqlOrBdfa6R0kKrt2aXZFlkQfGpqxYEv6zCTklkH7fjkLYBXmORo9c5E32iQJOn23lZcvdqMCoJioEVz%2FyZHQMHrqeKrynU9%2FYBbPaOsPYZVMzaLtagLSTtDgsa2DvooSFItLcmXp1VcdQzop%2BCuH%2Fq5kY6xASCD%2FpL9CBBjCPwS5uNZ7%2B1PtDYvHWdI5JhTH9nHtv5gWDAFNLu6e2o0Qilk2qGYTk7YxhIXyL8vrord6%2B642GjL3Yd7rbHVR%2FHIBvKYytB8s7%2F3HmOycYvb68Kr79liwKKc49CSS7wseaWapoA25WKXfGAQx%2Btu6GLI0dSMKSCQymMA%2FuiZ7Q2mol8Aw0X%2F7cw3pJi4XkMGF%2F0vipYZcgrLxQdQzoft9pAK4%2Ff1aHbbWg%2BZnQ9PkEvdYZb%2Fw5Hju3VIZMenMYl327fxZ9Ga9gmXmojk12ygVpy5AZpp3KNzMM2g88QGOqUBEy%2FPmZ50mjUudCEVmN30xFV7mgEKW2MpzVAjSZ5A2U4p5mvGAfK9KU9VdGzQHKEYpKDIS5%2BbsT75Hc%2BrWDnfKEOwW2WB80h8rTumGK%2BXgwmgIRCgRCnNSqfQzgbsduzs5g3qydj0PLcdmkpkO8srQD6i8o5UeS3D%2BHyEmNiovAtsOWt7ryvgwMLTsbRLUprFu1GWuqpx0QPMOOpgZsv94QL4WmXG&X-Amz-Signature=5e9cf91db27790acc97ef8f2417fe220003b71ecb869421c01415eb76974a7b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3WQWNAP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo6xkCZ6urAh2%2FzZo36qnyEz5qA3Qlizz5sSjmZsHg%2FQIhAM9Klfq1uL7warm5vjyJkdj2xEoyHyuHShxZ3cdE1bngKv8DCDMQABoMNjM3NDIzMTgzODA1IgwwpgqRFus59qDCsIwq3AMwFCK7G59heZD%2BGyhbcWTpzANWX85ypSwgVfTa4z7BA24VNHWKWeNlUPS4CrBbJQD7430K7u2AycSAnKEWzr2%2FERxXCcAlFZrgdRdVAFKMjU0DeTy1me%2FGcbZhaLXmeeVGKAUhZgPEQzgqbzQNNWUwy%2FmlgkbrUlvBR1XTzEgjH3851%2BPa0JvvpsX6jT39gGRqcDP5LwlL3wmXyhxtRdQI9tuSt%2FhFTdK0izH88tKHNA%2Ft1qpYa0THZJcja8UO3MUxWKAcDjzptY%2BohzI7ccVg2VDj%2BnWlmUeQjIbV3YI8ZZWeOIFz0Ko3810NFw6PcQWE9GC0VEdAKeHkgGBFN%2BJEldM%2F7keNIfA7Jm91C8iFPNLyOX2%2BsX0DPws17DgYqh2p0E1de9xgwI3zQ47%2FyOUOaHf4UZ5yszie%2BCgJRGtvvBYjXwlXgiWSNYl6d0rXi4EEmAIKTtTL1X07WGfvUGUG%2FvGsD%2B8XB2JXkh5f2lOFfmLyYPe3uJGmrXxvWlfogSj6kJIWS46zPLy%2BLc09aGvfJnEfa7IYha%2BG2OXaTaLccXNBDufNjyLE693%2B%2B0NzQajQ%2BSRoJ5%2By5M2ZZU5RAMIeYoBYZbIpwsu%2BYCHcWd7MVKZfBrK%2Bck67wZbmxjCgoPPEBjqkATntpouPQFfwbJAUmAtRWTjtS8SPMt2yf7tzmVOdb3QMxHkImNTAtJOtVNjUnAcctJHKOyO4yNZr4xrkHtbBoCHZIPQB%2FEDHOZhZuHTFVyxnr8GEe7X%2BUjBFHFMcTtSQUNKDRD%2FREqKPa1jbfOIlG4G8kn1vsRJR1BkJTPLf7uKdAEG4%2BBIeCwAdCyRpYPiCkSryf%2FF0DDePqvqBsQZfGV8JgMpU&X-Amz-Signature=47ba08f745ff54012ca3b6557e338d344c0ef2254bbd45e5b87b3d2887356140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YG7A2VJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgm%2B1v%2Fcbu2wnynAR6LDphLLRTSsXkMItO0NQTo8ZYXQIhAP2eGjxQbNtXOXZyc8IZsHKbLKB3f2K7JYhxfOszS1CsKv8DCDMQABoMNjM3NDIzMTgzODA1Igz2Bo6xbR%2FcsE%2B59AUq3ANzrXhM2pb%2BUyMEH21cgwlaaqvFZ5BMlQyCNmsNN8tdBL%2FNoePWdwailFTMHAaY7hkZHfpt9SOpvOfQ%2BftqQN8PsNfmJr20kT6Ek4LkEOhJHwUakIzwGJ8hYfcwA%2B%2B6iNun2NCppZhQKrmipaooi23wvMECA0M2K3gkxFjWDjsM7ivXM7YXCQVdGcu324sT9VBI6tWNgJep6ca0LPLBrt8NXLbqI6KBb60LBeoT8Rfahlyt%2F%2BAoKqInc8JHp2Od3gn40mN0lIFRe3V2G0T%2Bp6pQI1VKPVL%2FRn6yFY6%2FRXZRaoZYhAYsVm5mNIG0M1Ei%2BRl0jWl2lgNtC5hZg4b2HBf7GI%2BQ%2FLSWYPufq%2F8obmiBvAx5lGMLE8H18TQpiOvvojGAQpb%2Br0rb6ywEQcB2PWZgDd9PZRFy4ASgqqlq%2B7pJSuokMp7NZas1JboauKHfz9GvDlGVyyWZ5YrDUpPJDH3lHvne5Z3PhSf%2BXgcB2Ezo4JxnEzfzeyyUZzmz18FvUJV8RaK%2FgrZevF6fXq4utLwAjw30iOt%2Fcgp2R%2Fb80Gv3m3aHPGt1J8bM5q%2Bo1nZE69RCt3jBqrfihTRbefu8cKC10E3x42nE3O6Cw6kEHYjzAi86KMcd2gx0FqRXkDDyn%2FPEBjqkAfcEk0ktrlSbvLRIbu40ENkA%2B95jP2A6vqXqNkYN6Q%2FI0KBUws09QxlIDQpMIAWWlbNlYwTIN3NFnJcPqStvUC%2Frg2vJ3nn1om5Fmase5us2%2ByHbGL2mlyuuBgeAjOOlZ2GV5q6JtbFlX9XQJFvpceGJaKQEn9V%2BAXQU18MkmYvceyDPsLpGiM6d7m3ZIueoQkw9WSlXqZauHb2soP3vnV5%2FU6bt&X-Amz-Signature=8e4bc739c40e46e9d20ac9d58be885a0557d9ea9ffc3a819e8075500afef9462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YG7A2VJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgm%2B1v%2Fcbu2wnynAR6LDphLLRTSsXkMItO0NQTo8ZYXQIhAP2eGjxQbNtXOXZyc8IZsHKbLKB3f2K7JYhxfOszS1CsKv8DCDMQABoMNjM3NDIzMTgzODA1Igz2Bo6xbR%2FcsE%2B59AUq3ANzrXhM2pb%2BUyMEH21cgwlaaqvFZ5BMlQyCNmsNN8tdBL%2FNoePWdwailFTMHAaY7hkZHfpt9SOpvOfQ%2BftqQN8PsNfmJr20kT6Ek4LkEOhJHwUakIzwGJ8hYfcwA%2B%2B6iNun2NCppZhQKrmipaooi23wvMECA0M2K3gkxFjWDjsM7ivXM7YXCQVdGcu324sT9VBI6tWNgJep6ca0LPLBrt8NXLbqI6KBb60LBeoT8Rfahlyt%2F%2BAoKqInc8JHp2Od3gn40mN0lIFRe3V2G0T%2Bp6pQI1VKPVL%2FRn6yFY6%2FRXZRaoZYhAYsVm5mNIG0M1Ei%2BRl0jWl2lgNtC5hZg4b2HBf7GI%2BQ%2FLSWYPufq%2F8obmiBvAx5lGMLE8H18TQpiOvvojGAQpb%2Br0rb6ywEQcB2PWZgDd9PZRFy4ASgqqlq%2B7pJSuokMp7NZas1JboauKHfz9GvDlGVyyWZ5YrDUpPJDH3lHvne5Z3PhSf%2BXgcB2Ezo4JxnEzfzeyyUZzmz18FvUJV8RaK%2FgrZevF6fXq4utLwAjw30iOt%2Fcgp2R%2Fb80Gv3m3aHPGt1J8bM5q%2Bo1nZE69RCt3jBqrfihTRbefu8cKC10E3x42nE3O6Cw6kEHYjzAi86KMcd2gx0FqRXkDDyn%2FPEBjqkAfcEk0ktrlSbvLRIbu40ENkA%2B95jP2A6vqXqNkYN6Q%2FI0KBUws09QxlIDQpMIAWWlbNlYwTIN3NFnJcPqStvUC%2Frg2vJ3nn1om5Fmase5us2%2ByHbGL2mlyuuBgeAjOOlZ2GV5q6JtbFlX9XQJFvpceGJaKQEn9V%2BAXQU18MkmYvceyDPsLpGiM6d7m3ZIueoQkw9WSlXqZauHb2soP3vnV5%2FU6bt&X-Amz-Signature=23f06ee153a87ae815472bc425697213e27214d41c5b527db91684a001853232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIR4VR6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcpNctUtUqqyRkgWNvKwZlwAkds3ZvN19csSyerZzWVAiEArfiaIvoV4yKVZQtc15Rw6NLjoS2goGwzdVoayvHMs%2BYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMWYVnHBN1tAPsEM0ircAwj391sH6T3SrewnBsqwC0ZHohMXb%2B%2FXPQYi1Hg1Q7YaZacxAmO%2B8vG6KiyxZgx1azTGP3zXFVwkkxXS%2By1ITqrL%2B%2FDwvQ4SD%2B7Dr0SeTB%2BmqwvdxBnaBbrxd59eq0wMXtLCTTDbJvHaoNQ0BUIp0EVhKbjkegJYkErDVE5jwfE%2BlD3s045%2Ba8tVB7HYgyV190Ffx6nZ%2BV4Zzl1eCcYsnN5uB3KSXcFR9W6PEiDHVFvRmwDY8A46MgLmuw9CFIAFYk%2F4Qd8y6KQForfq4fwi6VzUj9GoXvFYGJbWCgD7Sj2kRsLMqQLUoS0gKnvWP5Zwk3tg0H2OCyO8SEh2TqjIuCcNBBK3M6%2BfXW4vmTjy9jJuxHJB7APAo3VT%2F5SxzbJcwntSTwjqiV6qcp776SYQzSesyE0Dopg7Z5b087DYIigcNs7k8ZabS7LMgCwPpZqZ%2Fkf87CZy9et%2BurP8P74NNvbKI9wU5mNi9aqIqN5enNlVEeE%2BPCWIy%2BfWWB%2BdMJYEHDWK6%2FI1PrzSci9gvMvr84eMchYZBpDW2biep9g2zUxA%2Bmn1UYLWvfmW94qFEk0dRqEUv4e8FkZvnl3jzmcxY3wkhWPUwV%2BmoxxHVNDfHVt2ch0P18jp8PLYcPDIMNOf88QGOqUBa6h%2F5ejlST%2BxNFFfz%2BJBkbfphcPbZltawoCkGlAfAcrmIQGQI8rGdKGXQ2QX2FV%2BJ1PsTmhN8C4zhm02tk2a3zDjSkJ%2BayhE0BqMnxvOuaXBBbYjbtnSTunVKdNA82JfRpVmbMlyls46dirA7YRDpG0b3Iu2Y4mvWDzRGE3GBYm4MBOBJacP4MbBjd63fWsXuzPdqej0ffi45g7zDBUBZ%2BeFAPOo&X-Amz-Signature=c7ffeedc908397a70c6a899147edea1145c65d0d4adf07bfe44fbe5c2d4adb59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIR4VR6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcpNctUtUqqyRkgWNvKwZlwAkds3ZvN19csSyerZzWVAiEArfiaIvoV4yKVZQtc15Rw6NLjoS2goGwzdVoayvHMs%2BYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMWYVnHBN1tAPsEM0ircAwj391sH6T3SrewnBsqwC0ZHohMXb%2B%2FXPQYi1Hg1Q7YaZacxAmO%2B8vG6KiyxZgx1azTGP3zXFVwkkxXS%2By1ITqrL%2B%2FDwvQ4SD%2B7Dr0SeTB%2BmqwvdxBnaBbrxd59eq0wMXtLCTTDbJvHaoNQ0BUIp0EVhKbjkegJYkErDVE5jwfE%2BlD3s045%2Ba8tVB7HYgyV190Ffx6nZ%2BV4Zzl1eCcYsnN5uB3KSXcFR9W6PEiDHVFvRmwDY8A46MgLmuw9CFIAFYk%2F4Qd8y6KQForfq4fwi6VzUj9GoXvFYGJbWCgD7Sj2kRsLMqQLUoS0gKnvWP5Zwk3tg0H2OCyO8SEh2TqjIuCcNBBK3M6%2BfXW4vmTjy9jJuxHJB7APAo3VT%2F5SxzbJcwntSTwjqiV6qcp776SYQzSesyE0Dopg7Z5b087DYIigcNs7k8ZabS7LMgCwPpZqZ%2Fkf87CZy9et%2BurP8P74NNvbKI9wU5mNi9aqIqN5enNlVEeE%2BPCWIy%2BfWWB%2BdMJYEHDWK6%2FI1PrzSci9gvMvr84eMchYZBpDW2biep9g2zUxA%2Bmn1UYLWvfmW94qFEk0dRqEUv4e8FkZvnl3jzmcxY3wkhWPUwV%2BmoxxHVNDfHVt2ch0P18jp8PLYcPDIMNOf88QGOqUBa6h%2F5ejlST%2BxNFFfz%2BJBkbfphcPbZltawoCkGlAfAcrmIQGQI8rGdKGXQ2QX2FV%2BJ1PsTmhN8C4zhm02tk2a3zDjSkJ%2BayhE0BqMnxvOuaXBBbYjbtnSTunVKdNA82JfRpVmbMlyls46dirA7YRDpG0b3Iu2Y4mvWDzRGE3GBYm4MBOBJacP4MbBjd63fWsXuzPdqej0ffi45g7zDBUBZ%2BeFAPOo&X-Amz-Signature=92c14e5424a2b61a55a3f5013fecb5dc3ebd6ffc79befb4836e5e6dcf3bed273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIR4VR6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcpNctUtUqqyRkgWNvKwZlwAkds3ZvN19csSyerZzWVAiEArfiaIvoV4yKVZQtc15Rw6NLjoS2goGwzdVoayvHMs%2BYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMWYVnHBN1tAPsEM0ircAwj391sH6T3SrewnBsqwC0ZHohMXb%2B%2FXPQYi1Hg1Q7YaZacxAmO%2B8vG6KiyxZgx1azTGP3zXFVwkkxXS%2By1ITqrL%2B%2FDwvQ4SD%2B7Dr0SeTB%2BmqwvdxBnaBbrxd59eq0wMXtLCTTDbJvHaoNQ0BUIp0EVhKbjkegJYkErDVE5jwfE%2BlD3s045%2Ba8tVB7HYgyV190Ffx6nZ%2BV4Zzl1eCcYsnN5uB3KSXcFR9W6PEiDHVFvRmwDY8A46MgLmuw9CFIAFYk%2F4Qd8y6KQForfq4fwi6VzUj9GoXvFYGJbWCgD7Sj2kRsLMqQLUoS0gKnvWP5Zwk3tg0H2OCyO8SEh2TqjIuCcNBBK3M6%2BfXW4vmTjy9jJuxHJB7APAo3VT%2F5SxzbJcwntSTwjqiV6qcp776SYQzSesyE0Dopg7Z5b087DYIigcNs7k8ZabS7LMgCwPpZqZ%2Fkf87CZy9et%2BurP8P74NNvbKI9wU5mNi9aqIqN5enNlVEeE%2BPCWIy%2BfWWB%2BdMJYEHDWK6%2FI1PrzSci9gvMvr84eMchYZBpDW2biep9g2zUxA%2Bmn1UYLWvfmW94qFEk0dRqEUv4e8FkZvnl3jzmcxY3wkhWPUwV%2BmoxxHVNDfHVt2ch0P18jp8PLYcPDIMNOf88QGOqUBa6h%2F5ejlST%2BxNFFfz%2BJBkbfphcPbZltawoCkGlAfAcrmIQGQI8rGdKGXQ2QX2FV%2BJ1PsTmhN8C4zhm02tk2a3zDjSkJ%2BayhE0BqMnxvOuaXBBbYjbtnSTunVKdNA82JfRpVmbMlyls46dirA7YRDpG0b3Iu2Y4mvWDzRGE3GBYm4MBOBJacP4MbBjd63fWsXuzPdqej0ffi45g7zDBUBZ%2BeFAPOo&X-Amz-Signature=d8b1e0bfd4e9a7522c887c1f38648eb6990a0d18b297809e0465429651bb0727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIR4VR6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcpNctUtUqqyRkgWNvKwZlwAkds3ZvN19csSyerZzWVAiEArfiaIvoV4yKVZQtc15Rw6NLjoS2goGwzdVoayvHMs%2BYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMWYVnHBN1tAPsEM0ircAwj391sH6T3SrewnBsqwC0ZHohMXb%2B%2FXPQYi1Hg1Q7YaZacxAmO%2B8vG6KiyxZgx1azTGP3zXFVwkkxXS%2By1ITqrL%2B%2FDwvQ4SD%2B7Dr0SeTB%2BmqwvdxBnaBbrxd59eq0wMXtLCTTDbJvHaoNQ0BUIp0EVhKbjkegJYkErDVE5jwfE%2BlD3s045%2Ba8tVB7HYgyV190Ffx6nZ%2BV4Zzl1eCcYsnN5uB3KSXcFR9W6PEiDHVFvRmwDY8A46MgLmuw9CFIAFYk%2F4Qd8y6KQForfq4fwi6VzUj9GoXvFYGJbWCgD7Sj2kRsLMqQLUoS0gKnvWP5Zwk3tg0H2OCyO8SEh2TqjIuCcNBBK3M6%2BfXW4vmTjy9jJuxHJB7APAo3VT%2F5SxzbJcwntSTwjqiV6qcp776SYQzSesyE0Dopg7Z5b087DYIigcNs7k8ZabS7LMgCwPpZqZ%2Fkf87CZy9et%2BurP8P74NNvbKI9wU5mNi9aqIqN5enNlVEeE%2BPCWIy%2BfWWB%2BdMJYEHDWK6%2FI1PrzSci9gvMvr84eMchYZBpDW2biep9g2zUxA%2Bmn1UYLWvfmW94qFEk0dRqEUv4e8FkZvnl3jzmcxY3wkhWPUwV%2BmoxxHVNDfHVt2ch0P18jp8PLYcPDIMNOf88QGOqUBa6h%2F5ejlST%2BxNFFfz%2BJBkbfphcPbZltawoCkGlAfAcrmIQGQI8rGdKGXQ2QX2FV%2BJ1PsTmhN8C4zhm02tk2a3zDjSkJ%2BayhE0BqMnxvOuaXBBbYjbtnSTunVKdNA82JfRpVmbMlyls46dirA7YRDpG0b3Iu2Y4mvWDzRGE3GBYm4MBOBJacP4MbBjd63fWsXuzPdqej0ffi45g7zDBUBZ%2BeFAPOo&X-Amz-Signature=f19098f7f245d873a1b903743791c399a8ff500d5965e72f3181403a57ff5990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIR4VR6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcpNctUtUqqyRkgWNvKwZlwAkds3ZvN19csSyerZzWVAiEArfiaIvoV4yKVZQtc15Rw6NLjoS2goGwzdVoayvHMs%2BYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMWYVnHBN1tAPsEM0ircAwj391sH6T3SrewnBsqwC0ZHohMXb%2B%2FXPQYi1Hg1Q7YaZacxAmO%2B8vG6KiyxZgx1azTGP3zXFVwkkxXS%2By1ITqrL%2B%2FDwvQ4SD%2B7Dr0SeTB%2BmqwvdxBnaBbrxd59eq0wMXtLCTTDbJvHaoNQ0BUIp0EVhKbjkegJYkErDVE5jwfE%2BlD3s045%2Ba8tVB7HYgyV190Ffx6nZ%2BV4Zzl1eCcYsnN5uB3KSXcFR9W6PEiDHVFvRmwDY8A46MgLmuw9CFIAFYk%2F4Qd8y6KQForfq4fwi6VzUj9GoXvFYGJbWCgD7Sj2kRsLMqQLUoS0gKnvWP5Zwk3tg0H2OCyO8SEh2TqjIuCcNBBK3M6%2BfXW4vmTjy9jJuxHJB7APAo3VT%2F5SxzbJcwntSTwjqiV6qcp776SYQzSesyE0Dopg7Z5b087DYIigcNs7k8ZabS7LMgCwPpZqZ%2Fkf87CZy9et%2BurP8P74NNvbKI9wU5mNi9aqIqN5enNlVEeE%2BPCWIy%2BfWWB%2BdMJYEHDWK6%2FI1PrzSci9gvMvr84eMchYZBpDW2biep9g2zUxA%2Bmn1UYLWvfmW94qFEk0dRqEUv4e8FkZvnl3jzmcxY3wkhWPUwV%2BmoxxHVNDfHVt2ch0P18jp8PLYcPDIMNOf88QGOqUBa6h%2F5ejlST%2BxNFFfz%2BJBkbfphcPbZltawoCkGlAfAcrmIQGQI8rGdKGXQ2QX2FV%2BJ1PsTmhN8C4zhm02tk2a3zDjSkJ%2BayhE0BqMnxvOuaXBBbYjbtnSTunVKdNA82JfRpVmbMlyls46dirA7YRDpG0b3Iu2Y4mvWDzRGE3GBYm4MBOBJacP4MbBjd63fWsXuzPdqej0ffi45g7zDBUBZ%2BeFAPOo&X-Amz-Signature=1bbd6292bab45041618e8c7e9e34f09502cdae15274eb87cde4c7ac865e48f94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIR4VR6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcpNctUtUqqyRkgWNvKwZlwAkds3ZvN19csSyerZzWVAiEArfiaIvoV4yKVZQtc15Rw6NLjoS2goGwzdVoayvHMs%2BYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMWYVnHBN1tAPsEM0ircAwj391sH6T3SrewnBsqwC0ZHohMXb%2B%2FXPQYi1Hg1Q7YaZacxAmO%2B8vG6KiyxZgx1azTGP3zXFVwkkxXS%2By1ITqrL%2B%2FDwvQ4SD%2B7Dr0SeTB%2BmqwvdxBnaBbrxd59eq0wMXtLCTTDbJvHaoNQ0BUIp0EVhKbjkegJYkErDVE5jwfE%2BlD3s045%2Ba8tVB7HYgyV190Ffx6nZ%2BV4Zzl1eCcYsnN5uB3KSXcFR9W6PEiDHVFvRmwDY8A46MgLmuw9CFIAFYk%2F4Qd8y6KQForfq4fwi6VzUj9GoXvFYGJbWCgD7Sj2kRsLMqQLUoS0gKnvWP5Zwk3tg0H2OCyO8SEh2TqjIuCcNBBK3M6%2BfXW4vmTjy9jJuxHJB7APAo3VT%2F5SxzbJcwntSTwjqiV6qcp776SYQzSesyE0Dopg7Z5b087DYIigcNs7k8ZabS7LMgCwPpZqZ%2Fkf87CZy9et%2BurP8P74NNvbKI9wU5mNi9aqIqN5enNlVEeE%2BPCWIy%2BfWWB%2BdMJYEHDWK6%2FI1PrzSci9gvMvr84eMchYZBpDW2biep9g2zUxA%2Bmn1UYLWvfmW94qFEk0dRqEUv4e8FkZvnl3jzmcxY3wkhWPUwV%2BmoxxHVNDfHVt2ch0P18jp8PLYcPDIMNOf88QGOqUBa6h%2F5ejlST%2BxNFFfz%2BJBkbfphcPbZltawoCkGlAfAcrmIQGQI8rGdKGXQ2QX2FV%2BJ1PsTmhN8C4zhm02tk2a3zDjSkJ%2BayhE0BqMnxvOuaXBBbYjbtnSTunVKdNA82JfRpVmbMlyls46dirA7YRDpG0b3Iu2Y4mvWDzRGE3GBYm4MBOBJacP4MbBjd63fWsXuzPdqej0ffi45g7zDBUBZ%2BeFAPOo&X-Amz-Signature=df6c6249a2742611bb10b5205497e0bf18afad6b487d00be15fc8af310f56efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIR4VR6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcpNctUtUqqyRkgWNvKwZlwAkds3ZvN19csSyerZzWVAiEArfiaIvoV4yKVZQtc15Rw6NLjoS2goGwzdVoayvHMs%2BYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMWYVnHBN1tAPsEM0ircAwj391sH6T3SrewnBsqwC0ZHohMXb%2B%2FXPQYi1Hg1Q7YaZacxAmO%2B8vG6KiyxZgx1azTGP3zXFVwkkxXS%2By1ITqrL%2B%2FDwvQ4SD%2B7Dr0SeTB%2BmqwvdxBnaBbrxd59eq0wMXtLCTTDbJvHaoNQ0BUIp0EVhKbjkegJYkErDVE5jwfE%2BlD3s045%2Ba8tVB7HYgyV190Ffx6nZ%2BV4Zzl1eCcYsnN5uB3KSXcFR9W6PEiDHVFvRmwDY8A46MgLmuw9CFIAFYk%2F4Qd8y6KQForfq4fwi6VzUj9GoXvFYGJbWCgD7Sj2kRsLMqQLUoS0gKnvWP5Zwk3tg0H2OCyO8SEh2TqjIuCcNBBK3M6%2BfXW4vmTjy9jJuxHJB7APAo3VT%2F5SxzbJcwntSTwjqiV6qcp776SYQzSesyE0Dopg7Z5b087DYIigcNs7k8ZabS7LMgCwPpZqZ%2Fkf87CZy9et%2BurP8P74NNvbKI9wU5mNi9aqIqN5enNlVEeE%2BPCWIy%2BfWWB%2BdMJYEHDWK6%2FI1PrzSci9gvMvr84eMchYZBpDW2biep9g2zUxA%2Bmn1UYLWvfmW94qFEk0dRqEUv4e8FkZvnl3jzmcxY3wkhWPUwV%2BmoxxHVNDfHVt2ch0P18jp8PLYcPDIMNOf88QGOqUBa6h%2F5ejlST%2BxNFFfz%2BJBkbfphcPbZltawoCkGlAfAcrmIQGQI8rGdKGXQ2QX2FV%2BJ1PsTmhN8C4zhm02tk2a3zDjSkJ%2BayhE0BqMnxvOuaXBBbYjbtnSTunVKdNA82JfRpVmbMlyls46dirA7YRDpG0b3Iu2Y4mvWDzRGE3GBYm4MBOBJacP4MbBjd63fWsXuzPdqej0ffi45g7zDBUBZ%2BeFAPOo&X-Amz-Signature=57d7449008f5db1d854484dbb732797af0d939b82d4d352ec0890335bf2521ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIR4VR6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcpNctUtUqqyRkgWNvKwZlwAkds3ZvN19csSyerZzWVAiEArfiaIvoV4yKVZQtc15Rw6NLjoS2goGwzdVoayvHMs%2BYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMWYVnHBN1tAPsEM0ircAwj391sH6T3SrewnBsqwC0ZHohMXb%2B%2FXPQYi1Hg1Q7YaZacxAmO%2B8vG6KiyxZgx1azTGP3zXFVwkkxXS%2By1ITqrL%2B%2FDwvQ4SD%2B7Dr0SeTB%2BmqwvdxBnaBbrxd59eq0wMXtLCTTDbJvHaoNQ0BUIp0EVhKbjkegJYkErDVE5jwfE%2BlD3s045%2Ba8tVB7HYgyV190Ffx6nZ%2BV4Zzl1eCcYsnN5uB3KSXcFR9W6PEiDHVFvRmwDY8A46MgLmuw9CFIAFYk%2F4Qd8y6KQForfq4fwi6VzUj9GoXvFYGJbWCgD7Sj2kRsLMqQLUoS0gKnvWP5Zwk3tg0H2OCyO8SEh2TqjIuCcNBBK3M6%2BfXW4vmTjy9jJuxHJB7APAo3VT%2F5SxzbJcwntSTwjqiV6qcp776SYQzSesyE0Dopg7Z5b087DYIigcNs7k8ZabS7LMgCwPpZqZ%2Fkf87CZy9et%2BurP8P74NNvbKI9wU5mNi9aqIqN5enNlVEeE%2BPCWIy%2BfWWB%2BdMJYEHDWK6%2FI1PrzSci9gvMvr84eMchYZBpDW2biep9g2zUxA%2Bmn1UYLWvfmW94qFEk0dRqEUv4e8FkZvnl3jzmcxY3wkhWPUwV%2BmoxxHVNDfHVt2ch0P18jp8PLYcPDIMNOf88QGOqUBa6h%2F5ejlST%2BxNFFfz%2BJBkbfphcPbZltawoCkGlAfAcrmIQGQI8rGdKGXQ2QX2FV%2BJ1PsTmhN8C4zhm02tk2a3zDjSkJ%2BayhE0BqMnxvOuaXBBbYjbtnSTunVKdNA82JfRpVmbMlyls46dirA7YRDpG0b3Iu2Y4mvWDzRGE3GBYm4MBOBJacP4MbBjd63fWsXuzPdqej0ffi45g7zDBUBZ%2BeFAPOo&X-Amz-Signature=d1c0e85747fede936f25a9fe53400f9af507bc32b8777d9979b26e4c7d981e35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIR4VR6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcpNctUtUqqyRkgWNvKwZlwAkds3ZvN19csSyerZzWVAiEArfiaIvoV4yKVZQtc15Rw6NLjoS2goGwzdVoayvHMs%2BYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMWYVnHBN1tAPsEM0ircAwj391sH6T3SrewnBsqwC0ZHohMXb%2B%2FXPQYi1Hg1Q7YaZacxAmO%2B8vG6KiyxZgx1azTGP3zXFVwkkxXS%2By1ITqrL%2B%2FDwvQ4SD%2B7Dr0SeTB%2BmqwvdxBnaBbrxd59eq0wMXtLCTTDbJvHaoNQ0BUIp0EVhKbjkegJYkErDVE5jwfE%2BlD3s045%2Ba8tVB7HYgyV190Ffx6nZ%2BV4Zzl1eCcYsnN5uB3KSXcFR9W6PEiDHVFvRmwDY8A46MgLmuw9CFIAFYk%2F4Qd8y6KQForfq4fwi6VzUj9GoXvFYGJbWCgD7Sj2kRsLMqQLUoS0gKnvWP5Zwk3tg0H2OCyO8SEh2TqjIuCcNBBK3M6%2BfXW4vmTjy9jJuxHJB7APAo3VT%2F5SxzbJcwntSTwjqiV6qcp776SYQzSesyE0Dopg7Z5b087DYIigcNs7k8ZabS7LMgCwPpZqZ%2Fkf87CZy9et%2BurP8P74NNvbKI9wU5mNi9aqIqN5enNlVEeE%2BPCWIy%2BfWWB%2BdMJYEHDWK6%2FI1PrzSci9gvMvr84eMchYZBpDW2biep9g2zUxA%2Bmn1UYLWvfmW94qFEk0dRqEUv4e8FkZvnl3jzmcxY3wkhWPUwV%2BmoxxHVNDfHVt2ch0P18jp8PLYcPDIMNOf88QGOqUBa6h%2F5ejlST%2BxNFFfz%2BJBkbfphcPbZltawoCkGlAfAcrmIQGQI8rGdKGXQ2QX2FV%2BJ1PsTmhN8C4zhm02tk2a3zDjSkJ%2BayhE0BqMnxvOuaXBBbYjbtnSTunVKdNA82JfRpVmbMlyls46dirA7YRDpG0b3Iu2Y4mvWDzRGE3GBYm4MBOBJacP4MbBjd63fWsXuzPdqej0ffi45g7zDBUBZ%2BeFAPOo&X-Amz-Signature=a20748b596b9f468a24ba6a3de3432288cef670c77321d04c559cf7145344639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIR4VR6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcpNctUtUqqyRkgWNvKwZlwAkds3ZvN19csSyerZzWVAiEArfiaIvoV4yKVZQtc15Rw6NLjoS2goGwzdVoayvHMs%2BYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMWYVnHBN1tAPsEM0ircAwj391sH6T3SrewnBsqwC0ZHohMXb%2B%2FXPQYi1Hg1Q7YaZacxAmO%2B8vG6KiyxZgx1azTGP3zXFVwkkxXS%2By1ITqrL%2B%2FDwvQ4SD%2B7Dr0SeTB%2BmqwvdxBnaBbrxd59eq0wMXtLCTTDbJvHaoNQ0BUIp0EVhKbjkegJYkErDVE5jwfE%2BlD3s045%2Ba8tVB7HYgyV190Ffx6nZ%2BV4Zzl1eCcYsnN5uB3KSXcFR9W6PEiDHVFvRmwDY8A46MgLmuw9CFIAFYk%2F4Qd8y6KQForfq4fwi6VzUj9GoXvFYGJbWCgD7Sj2kRsLMqQLUoS0gKnvWP5Zwk3tg0H2OCyO8SEh2TqjIuCcNBBK3M6%2BfXW4vmTjy9jJuxHJB7APAo3VT%2F5SxzbJcwntSTwjqiV6qcp776SYQzSesyE0Dopg7Z5b087DYIigcNs7k8ZabS7LMgCwPpZqZ%2Fkf87CZy9et%2BurP8P74NNvbKI9wU5mNi9aqIqN5enNlVEeE%2BPCWIy%2BfWWB%2BdMJYEHDWK6%2FI1PrzSci9gvMvr84eMchYZBpDW2biep9g2zUxA%2Bmn1UYLWvfmW94qFEk0dRqEUv4e8FkZvnl3jzmcxY3wkhWPUwV%2BmoxxHVNDfHVt2ch0P18jp8PLYcPDIMNOf88QGOqUBa6h%2F5ejlST%2BxNFFfz%2BJBkbfphcPbZltawoCkGlAfAcrmIQGQI8rGdKGXQ2QX2FV%2BJ1PsTmhN8C4zhm02tk2a3zDjSkJ%2BayhE0BqMnxvOuaXBBbYjbtnSTunVKdNA82JfRpVmbMlyls46dirA7YRDpG0b3Iu2Y4mvWDzRGE3GBYm4MBOBJacP4MbBjd63fWsXuzPdqej0ffi45g7zDBUBZ%2BeFAPOo&X-Amz-Signature=27c90bbb48be7e10d0e2bdd64ff4d6f2fc076953d9f499766796b8cf580bc2dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
