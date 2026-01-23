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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPIR4MDI%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIFfjL3cN7NH7yueJiDezQ%2BGX%2FJ7jZ0NXFvg24MhFhVYVAiAecU0rMvapq%2FGIfL%2B35u7BB9x%2BobKn%2Bur%2Fr1VdP1ziEiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmaro9CTMKdH4wL6FKtwD2rlsAA1tBcXzO9zF0%2FxQKcoUigspVfg8G7hae%2BJaYjHmwE5NLPuH3%2BmQ4hv9ZZ2pBGX0igs6l0GPd2qg8DzkzgXkg6guGHt3nNEkS9zB8zozQMaWc0Hr6zFbgVNRllX%2BZf6wK8z0sYDZnV0%2BdzbDT14s8ZQ1ph74ROaqJgPRillLrGnPYiLGddM23pR9Qk7eta1X5nC7ViVt2LRlSkn4%2BiiKekZASWg29qwxr%2FjjjOrhfDk2UAb0dK0d3W25V8w7JZqc3xdqAR64g2%2F%2B2NWVIqXHR6H4GJegjmOm9Zp8QRtUH81%2F2qDKwoiuEWOm%2B7CYzekTSrcU0S3swI4q8Y5qg7fxnzERhJ6SWlv5JCjIV5pgB%2F7ATzlP81lnVqAskf%2F2mSWNvFh%2BH1v0c3CWvTbCkY3aTN205x%2B1OAGpwl%2B18lG%2Bh1MPiaQ1C2%2FaX4Rw0xaTJkum1tr%2FJIExBtMe%2B3TF37MoTDtEt%2BjwHS4UZEmCVkPACHF2zYotbAbzl1c5Dh5GCT%2FZHhi2A%2Fvb3TzCxoG%2F0iz71nW4fF15K4b3sbxNkqMHVhfsKaKjKsk7F9eVadpas7NtQJ2Lvnjpo3VWa0BfHPmrX1lxYtGpRKg40v8sDN74Bqw%2BqamtFWIaA4QwuorLywY6pgEEvU%2BQRHIR13mNSCTpYh7SjO6ukTR09KRuvry9UVY28ZZaV5jqSDoQ%2FDIqFErt4jAh5BwrtHIXEJZi08Hbya5L62AU%2FXLYs3eEAuPgD9xt7KCWtYeSjdfyMNH%2F90Q4ga0samEm1jm5QIL67MT9Zm7Xv37r29YRAha%2BQFCQIqG7vtU4oD9EWEvtfFAa6cuw6nyoJ0DHnTcRL8fJZwtXrKFGmxbtOMfR&X-Amz-Signature=a3cfbc155abc24822fdadf2e39f26bec6a75f9f84828efa3bbc7d4ad4edc4589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPIR4MDI%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIFfjL3cN7NH7yueJiDezQ%2BGX%2FJ7jZ0NXFvg24MhFhVYVAiAecU0rMvapq%2FGIfL%2B35u7BB9x%2BobKn%2Bur%2Fr1VdP1ziEiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmaro9CTMKdH4wL6FKtwD2rlsAA1tBcXzO9zF0%2FxQKcoUigspVfg8G7hae%2BJaYjHmwE5NLPuH3%2BmQ4hv9ZZ2pBGX0igs6l0GPd2qg8DzkzgXkg6guGHt3nNEkS9zB8zozQMaWc0Hr6zFbgVNRllX%2BZf6wK8z0sYDZnV0%2BdzbDT14s8ZQ1ph74ROaqJgPRillLrGnPYiLGddM23pR9Qk7eta1X5nC7ViVt2LRlSkn4%2BiiKekZASWg29qwxr%2FjjjOrhfDk2UAb0dK0d3W25V8w7JZqc3xdqAR64g2%2F%2B2NWVIqXHR6H4GJegjmOm9Zp8QRtUH81%2F2qDKwoiuEWOm%2B7CYzekTSrcU0S3swI4q8Y5qg7fxnzERhJ6SWlv5JCjIV5pgB%2F7ATzlP81lnVqAskf%2F2mSWNvFh%2BH1v0c3CWvTbCkY3aTN205x%2B1OAGpwl%2B18lG%2Bh1MPiaQ1C2%2FaX4Rw0xaTJkum1tr%2FJIExBtMe%2B3TF37MoTDtEt%2BjwHS4UZEmCVkPACHF2zYotbAbzl1c5Dh5GCT%2FZHhi2A%2Fvb3TzCxoG%2F0iz71nW4fF15K4b3sbxNkqMHVhfsKaKjKsk7F9eVadpas7NtQJ2Lvnjpo3VWa0BfHPmrX1lxYtGpRKg40v8sDN74Bqw%2BqamtFWIaA4QwuorLywY6pgEEvU%2BQRHIR13mNSCTpYh7SjO6ukTR09KRuvry9UVY28ZZaV5jqSDoQ%2FDIqFErt4jAh5BwrtHIXEJZi08Hbya5L62AU%2FXLYs3eEAuPgD9xt7KCWtYeSjdfyMNH%2F90Q4ga0samEm1jm5QIL67MT9Zm7Xv37r29YRAha%2BQFCQIqG7vtU4oD9EWEvtfFAa6cuw6nyoJ0DHnTcRL8fJZwtXrKFGmxbtOMfR&X-Amz-Signature=0dc8dda6cdb70cec9522ba0444599030c4867b32a68097aac4c52269e364ddf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPIR4MDI%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIFfjL3cN7NH7yueJiDezQ%2BGX%2FJ7jZ0NXFvg24MhFhVYVAiAecU0rMvapq%2FGIfL%2B35u7BB9x%2BobKn%2Bur%2Fr1VdP1ziEiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmaro9CTMKdH4wL6FKtwD2rlsAA1tBcXzO9zF0%2FxQKcoUigspVfg8G7hae%2BJaYjHmwE5NLPuH3%2BmQ4hv9ZZ2pBGX0igs6l0GPd2qg8DzkzgXkg6guGHt3nNEkS9zB8zozQMaWc0Hr6zFbgVNRllX%2BZf6wK8z0sYDZnV0%2BdzbDT14s8ZQ1ph74ROaqJgPRillLrGnPYiLGddM23pR9Qk7eta1X5nC7ViVt2LRlSkn4%2BiiKekZASWg29qwxr%2FjjjOrhfDk2UAb0dK0d3W25V8w7JZqc3xdqAR64g2%2F%2B2NWVIqXHR6H4GJegjmOm9Zp8QRtUH81%2F2qDKwoiuEWOm%2B7CYzekTSrcU0S3swI4q8Y5qg7fxnzERhJ6SWlv5JCjIV5pgB%2F7ATzlP81lnVqAskf%2F2mSWNvFh%2BH1v0c3CWvTbCkY3aTN205x%2B1OAGpwl%2B18lG%2Bh1MPiaQ1C2%2FaX4Rw0xaTJkum1tr%2FJIExBtMe%2B3TF37MoTDtEt%2BjwHS4UZEmCVkPACHF2zYotbAbzl1c5Dh5GCT%2FZHhi2A%2Fvb3TzCxoG%2F0iz71nW4fF15K4b3sbxNkqMHVhfsKaKjKsk7F9eVadpas7NtQJ2Lvnjpo3VWa0BfHPmrX1lxYtGpRKg40v8sDN74Bqw%2BqamtFWIaA4QwuorLywY6pgEEvU%2BQRHIR13mNSCTpYh7SjO6ukTR09KRuvry9UVY28ZZaV5jqSDoQ%2FDIqFErt4jAh5BwrtHIXEJZi08Hbya5L62AU%2FXLYs3eEAuPgD9xt7KCWtYeSjdfyMNH%2F90Q4ga0samEm1jm5QIL67MT9Zm7Xv37r29YRAha%2BQFCQIqG7vtU4oD9EWEvtfFAa6cuw6nyoJ0DHnTcRL8fJZwtXrKFGmxbtOMfR&X-Amz-Signature=181fbcf229899f9b02f33b90819a0d064c098411f1abc914c0eea42faf5945e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPIR4MDI%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIFfjL3cN7NH7yueJiDezQ%2BGX%2FJ7jZ0NXFvg24MhFhVYVAiAecU0rMvapq%2FGIfL%2B35u7BB9x%2BobKn%2Bur%2Fr1VdP1ziEiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmaro9CTMKdH4wL6FKtwD2rlsAA1tBcXzO9zF0%2FxQKcoUigspVfg8G7hae%2BJaYjHmwE5NLPuH3%2BmQ4hv9ZZ2pBGX0igs6l0GPd2qg8DzkzgXkg6guGHt3nNEkS9zB8zozQMaWc0Hr6zFbgVNRllX%2BZf6wK8z0sYDZnV0%2BdzbDT14s8ZQ1ph74ROaqJgPRillLrGnPYiLGddM23pR9Qk7eta1X5nC7ViVt2LRlSkn4%2BiiKekZASWg29qwxr%2FjjjOrhfDk2UAb0dK0d3W25V8w7JZqc3xdqAR64g2%2F%2B2NWVIqXHR6H4GJegjmOm9Zp8QRtUH81%2F2qDKwoiuEWOm%2B7CYzekTSrcU0S3swI4q8Y5qg7fxnzERhJ6SWlv5JCjIV5pgB%2F7ATzlP81lnVqAskf%2F2mSWNvFh%2BH1v0c3CWvTbCkY3aTN205x%2B1OAGpwl%2B18lG%2Bh1MPiaQ1C2%2FaX4Rw0xaTJkum1tr%2FJIExBtMe%2B3TF37MoTDtEt%2BjwHS4UZEmCVkPACHF2zYotbAbzl1c5Dh5GCT%2FZHhi2A%2Fvb3TzCxoG%2F0iz71nW4fF15K4b3sbxNkqMHVhfsKaKjKsk7F9eVadpas7NtQJ2Lvnjpo3VWa0BfHPmrX1lxYtGpRKg40v8sDN74Bqw%2BqamtFWIaA4QwuorLywY6pgEEvU%2BQRHIR13mNSCTpYh7SjO6ukTR09KRuvry9UVY28ZZaV5jqSDoQ%2FDIqFErt4jAh5BwrtHIXEJZi08Hbya5L62AU%2FXLYs3eEAuPgD9xt7KCWtYeSjdfyMNH%2F90Q4ga0samEm1jm5QIL67MT9Zm7Xv37r29YRAha%2BQFCQIqG7vtU4oD9EWEvtfFAa6cuw6nyoJ0DHnTcRL8fJZwtXrKFGmxbtOMfR&X-Amz-Signature=0d6a26097214779a914512d5d1982abb40e378cb7d6aa236fd2c4547e11220cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPIR4MDI%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIFfjL3cN7NH7yueJiDezQ%2BGX%2FJ7jZ0NXFvg24MhFhVYVAiAecU0rMvapq%2FGIfL%2B35u7BB9x%2BobKn%2Bur%2Fr1VdP1ziEiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmaro9CTMKdH4wL6FKtwD2rlsAA1tBcXzO9zF0%2FxQKcoUigspVfg8G7hae%2BJaYjHmwE5NLPuH3%2BmQ4hv9ZZ2pBGX0igs6l0GPd2qg8DzkzgXkg6guGHt3nNEkS9zB8zozQMaWc0Hr6zFbgVNRllX%2BZf6wK8z0sYDZnV0%2BdzbDT14s8ZQ1ph74ROaqJgPRillLrGnPYiLGddM23pR9Qk7eta1X5nC7ViVt2LRlSkn4%2BiiKekZASWg29qwxr%2FjjjOrhfDk2UAb0dK0d3W25V8w7JZqc3xdqAR64g2%2F%2B2NWVIqXHR6H4GJegjmOm9Zp8QRtUH81%2F2qDKwoiuEWOm%2B7CYzekTSrcU0S3swI4q8Y5qg7fxnzERhJ6SWlv5JCjIV5pgB%2F7ATzlP81lnVqAskf%2F2mSWNvFh%2BH1v0c3CWvTbCkY3aTN205x%2B1OAGpwl%2B18lG%2Bh1MPiaQ1C2%2FaX4Rw0xaTJkum1tr%2FJIExBtMe%2B3TF37MoTDtEt%2BjwHS4UZEmCVkPACHF2zYotbAbzl1c5Dh5GCT%2FZHhi2A%2Fvb3TzCxoG%2F0iz71nW4fF15K4b3sbxNkqMHVhfsKaKjKsk7F9eVadpas7NtQJ2Lvnjpo3VWa0BfHPmrX1lxYtGpRKg40v8sDN74Bqw%2BqamtFWIaA4QwuorLywY6pgEEvU%2BQRHIR13mNSCTpYh7SjO6ukTR09KRuvry9UVY28ZZaV5jqSDoQ%2FDIqFErt4jAh5BwrtHIXEJZi08Hbya5L62AU%2FXLYs3eEAuPgD9xt7KCWtYeSjdfyMNH%2F90Q4ga0samEm1jm5QIL67MT9Zm7Xv37r29YRAha%2BQFCQIqG7vtU4oD9EWEvtfFAa6cuw6nyoJ0DHnTcRL8fJZwtXrKFGmxbtOMfR&X-Amz-Signature=823ba4bd25cb0de600d89862f0ca5fdd5640dd3353264aa1f92664d86d90250b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPIR4MDI%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIFfjL3cN7NH7yueJiDezQ%2BGX%2FJ7jZ0NXFvg24MhFhVYVAiAecU0rMvapq%2FGIfL%2B35u7BB9x%2BobKn%2Bur%2Fr1VdP1ziEiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmaro9CTMKdH4wL6FKtwD2rlsAA1tBcXzO9zF0%2FxQKcoUigspVfg8G7hae%2BJaYjHmwE5NLPuH3%2BmQ4hv9ZZ2pBGX0igs6l0GPd2qg8DzkzgXkg6guGHt3nNEkS9zB8zozQMaWc0Hr6zFbgVNRllX%2BZf6wK8z0sYDZnV0%2BdzbDT14s8ZQ1ph74ROaqJgPRillLrGnPYiLGddM23pR9Qk7eta1X5nC7ViVt2LRlSkn4%2BiiKekZASWg29qwxr%2FjjjOrhfDk2UAb0dK0d3W25V8w7JZqc3xdqAR64g2%2F%2B2NWVIqXHR6H4GJegjmOm9Zp8QRtUH81%2F2qDKwoiuEWOm%2B7CYzekTSrcU0S3swI4q8Y5qg7fxnzERhJ6SWlv5JCjIV5pgB%2F7ATzlP81lnVqAskf%2F2mSWNvFh%2BH1v0c3CWvTbCkY3aTN205x%2B1OAGpwl%2B18lG%2Bh1MPiaQ1C2%2FaX4Rw0xaTJkum1tr%2FJIExBtMe%2B3TF37MoTDtEt%2BjwHS4UZEmCVkPACHF2zYotbAbzl1c5Dh5GCT%2FZHhi2A%2Fvb3TzCxoG%2F0iz71nW4fF15K4b3sbxNkqMHVhfsKaKjKsk7F9eVadpas7NtQJ2Lvnjpo3VWa0BfHPmrX1lxYtGpRKg40v8sDN74Bqw%2BqamtFWIaA4QwuorLywY6pgEEvU%2BQRHIR13mNSCTpYh7SjO6ukTR09KRuvry9UVY28ZZaV5jqSDoQ%2FDIqFErt4jAh5BwrtHIXEJZi08Hbya5L62AU%2FXLYs3eEAuPgD9xt7KCWtYeSjdfyMNH%2F90Q4ga0samEm1jm5QIL67MT9Zm7Xv37r29YRAha%2BQFCQIqG7vtU4oD9EWEvtfFAa6cuw6nyoJ0DHnTcRL8fJZwtXrKFGmxbtOMfR&X-Amz-Signature=796b6741137ce173b727e262f7e4a2a16fe86561b388bbac7cf3dc09853588d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPIR4MDI%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIFfjL3cN7NH7yueJiDezQ%2BGX%2FJ7jZ0NXFvg24MhFhVYVAiAecU0rMvapq%2FGIfL%2B35u7BB9x%2BobKn%2Bur%2Fr1VdP1ziEiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmaro9CTMKdH4wL6FKtwD2rlsAA1tBcXzO9zF0%2FxQKcoUigspVfg8G7hae%2BJaYjHmwE5NLPuH3%2BmQ4hv9ZZ2pBGX0igs6l0GPd2qg8DzkzgXkg6guGHt3nNEkS9zB8zozQMaWc0Hr6zFbgVNRllX%2BZf6wK8z0sYDZnV0%2BdzbDT14s8ZQ1ph74ROaqJgPRillLrGnPYiLGddM23pR9Qk7eta1X5nC7ViVt2LRlSkn4%2BiiKekZASWg29qwxr%2FjjjOrhfDk2UAb0dK0d3W25V8w7JZqc3xdqAR64g2%2F%2B2NWVIqXHR6H4GJegjmOm9Zp8QRtUH81%2F2qDKwoiuEWOm%2B7CYzekTSrcU0S3swI4q8Y5qg7fxnzERhJ6SWlv5JCjIV5pgB%2F7ATzlP81lnVqAskf%2F2mSWNvFh%2BH1v0c3CWvTbCkY3aTN205x%2B1OAGpwl%2B18lG%2Bh1MPiaQ1C2%2FaX4Rw0xaTJkum1tr%2FJIExBtMe%2B3TF37MoTDtEt%2BjwHS4UZEmCVkPACHF2zYotbAbzl1c5Dh5GCT%2FZHhi2A%2Fvb3TzCxoG%2F0iz71nW4fF15K4b3sbxNkqMHVhfsKaKjKsk7F9eVadpas7NtQJ2Lvnjpo3VWa0BfHPmrX1lxYtGpRKg40v8sDN74Bqw%2BqamtFWIaA4QwuorLywY6pgEEvU%2BQRHIR13mNSCTpYh7SjO6ukTR09KRuvry9UVY28ZZaV5jqSDoQ%2FDIqFErt4jAh5BwrtHIXEJZi08Hbya5L62AU%2FXLYs3eEAuPgD9xt7KCWtYeSjdfyMNH%2F90Q4ga0samEm1jm5QIL67MT9Zm7Xv37r29YRAha%2BQFCQIqG7vtU4oD9EWEvtfFAa6cuw6nyoJ0DHnTcRL8fJZwtXrKFGmxbtOMfR&X-Amz-Signature=242f026a8e7fc031f22f21d3d681a3decd28ab0646026737d5e20fb431904ada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPIR4MDI%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIFfjL3cN7NH7yueJiDezQ%2BGX%2FJ7jZ0NXFvg24MhFhVYVAiAecU0rMvapq%2FGIfL%2B35u7BB9x%2BobKn%2Bur%2Fr1VdP1ziEiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmaro9CTMKdH4wL6FKtwD2rlsAA1tBcXzO9zF0%2FxQKcoUigspVfg8G7hae%2BJaYjHmwE5NLPuH3%2BmQ4hv9ZZ2pBGX0igs6l0GPd2qg8DzkzgXkg6guGHt3nNEkS9zB8zozQMaWc0Hr6zFbgVNRllX%2BZf6wK8z0sYDZnV0%2BdzbDT14s8ZQ1ph74ROaqJgPRillLrGnPYiLGddM23pR9Qk7eta1X5nC7ViVt2LRlSkn4%2BiiKekZASWg29qwxr%2FjjjOrhfDk2UAb0dK0d3W25V8w7JZqc3xdqAR64g2%2F%2B2NWVIqXHR6H4GJegjmOm9Zp8QRtUH81%2F2qDKwoiuEWOm%2B7CYzekTSrcU0S3swI4q8Y5qg7fxnzERhJ6SWlv5JCjIV5pgB%2F7ATzlP81lnVqAskf%2F2mSWNvFh%2BH1v0c3CWvTbCkY3aTN205x%2B1OAGpwl%2B18lG%2Bh1MPiaQ1C2%2FaX4Rw0xaTJkum1tr%2FJIExBtMe%2B3TF37MoTDtEt%2BjwHS4UZEmCVkPACHF2zYotbAbzl1c5Dh5GCT%2FZHhi2A%2Fvb3TzCxoG%2F0iz71nW4fF15K4b3sbxNkqMHVhfsKaKjKsk7F9eVadpas7NtQJ2Lvnjpo3VWa0BfHPmrX1lxYtGpRKg40v8sDN74Bqw%2BqamtFWIaA4QwuorLywY6pgEEvU%2BQRHIR13mNSCTpYh7SjO6ukTR09KRuvry9UVY28ZZaV5jqSDoQ%2FDIqFErt4jAh5BwrtHIXEJZi08Hbya5L62AU%2FXLYs3eEAuPgD9xt7KCWtYeSjdfyMNH%2F90Q4ga0samEm1jm5QIL67MT9Zm7Xv37r29YRAha%2BQFCQIqG7vtU4oD9EWEvtfFAa6cuw6nyoJ0DHnTcRL8fJZwtXrKFGmxbtOMfR&X-Amz-Signature=23a3c1b9f3962030124a0aad3d9f520d9ce693cadb5885b4e21a838b1264b54b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPIR4MDI%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIFfjL3cN7NH7yueJiDezQ%2BGX%2FJ7jZ0NXFvg24MhFhVYVAiAecU0rMvapq%2FGIfL%2B35u7BB9x%2BobKn%2Bur%2Fr1VdP1ziEiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmaro9CTMKdH4wL6FKtwD2rlsAA1tBcXzO9zF0%2FxQKcoUigspVfg8G7hae%2BJaYjHmwE5NLPuH3%2BmQ4hv9ZZ2pBGX0igs6l0GPd2qg8DzkzgXkg6guGHt3nNEkS9zB8zozQMaWc0Hr6zFbgVNRllX%2BZf6wK8z0sYDZnV0%2BdzbDT14s8ZQ1ph74ROaqJgPRillLrGnPYiLGddM23pR9Qk7eta1X5nC7ViVt2LRlSkn4%2BiiKekZASWg29qwxr%2FjjjOrhfDk2UAb0dK0d3W25V8w7JZqc3xdqAR64g2%2F%2B2NWVIqXHR6H4GJegjmOm9Zp8QRtUH81%2F2qDKwoiuEWOm%2B7CYzekTSrcU0S3swI4q8Y5qg7fxnzERhJ6SWlv5JCjIV5pgB%2F7ATzlP81lnVqAskf%2F2mSWNvFh%2BH1v0c3CWvTbCkY3aTN205x%2B1OAGpwl%2B18lG%2Bh1MPiaQ1C2%2FaX4Rw0xaTJkum1tr%2FJIExBtMe%2B3TF37MoTDtEt%2BjwHS4UZEmCVkPACHF2zYotbAbzl1c5Dh5GCT%2FZHhi2A%2Fvb3TzCxoG%2F0iz71nW4fF15K4b3sbxNkqMHVhfsKaKjKsk7F9eVadpas7NtQJ2Lvnjpo3VWa0BfHPmrX1lxYtGpRKg40v8sDN74Bqw%2BqamtFWIaA4QwuorLywY6pgEEvU%2BQRHIR13mNSCTpYh7SjO6ukTR09KRuvry9UVY28ZZaV5jqSDoQ%2FDIqFErt4jAh5BwrtHIXEJZi08Hbya5L62AU%2FXLYs3eEAuPgD9xt7KCWtYeSjdfyMNH%2F90Q4ga0samEm1jm5QIL67MT9Zm7Xv37r29YRAha%2BQFCQIqG7vtU4oD9EWEvtfFAa6cuw6nyoJ0DHnTcRL8fJZwtXrKFGmxbtOMfR&X-Amz-Signature=63afc0a17ce3a3e3eaac18cae13de4f1f2a225c72d4ffc94037e36246df6ce97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPIR4MDI%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIFfjL3cN7NH7yueJiDezQ%2BGX%2FJ7jZ0NXFvg24MhFhVYVAiAecU0rMvapq%2FGIfL%2B35u7BB9x%2BobKn%2Bur%2Fr1VdP1ziEiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmaro9CTMKdH4wL6FKtwD2rlsAA1tBcXzO9zF0%2FxQKcoUigspVfg8G7hae%2BJaYjHmwE5NLPuH3%2BmQ4hv9ZZ2pBGX0igs6l0GPd2qg8DzkzgXkg6guGHt3nNEkS9zB8zozQMaWc0Hr6zFbgVNRllX%2BZf6wK8z0sYDZnV0%2BdzbDT14s8ZQ1ph74ROaqJgPRillLrGnPYiLGddM23pR9Qk7eta1X5nC7ViVt2LRlSkn4%2BiiKekZASWg29qwxr%2FjjjOrhfDk2UAb0dK0d3W25V8w7JZqc3xdqAR64g2%2F%2B2NWVIqXHR6H4GJegjmOm9Zp8QRtUH81%2F2qDKwoiuEWOm%2B7CYzekTSrcU0S3swI4q8Y5qg7fxnzERhJ6SWlv5JCjIV5pgB%2F7ATzlP81lnVqAskf%2F2mSWNvFh%2BH1v0c3CWvTbCkY3aTN205x%2B1OAGpwl%2B18lG%2Bh1MPiaQ1C2%2FaX4Rw0xaTJkum1tr%2FJIExBtMe%2B3TF37MoTDtEt%2BjwHS4UZEmCVkPACHF2zYotbAbzl1c5Dh5GCT%2FZHhi2A%2Fvb3TzCxoG%2F0iz71nW4fF15K4b3sbxNkqMHVhfsKaKjKsk7F9eVadpas7NtQJ2Lvnjpo3VWa0BfHPmrX1lxYtGpRKg40v8sDN74Bqw%2BqamtFWIaA4QwuorLywY6pgEEvU%2BQRHIR13mNSCTpYh7SjO6ukTR09KRuvry9UVY28ZZaV5jqSDoQ%2FDIqFErt4jAh5BwrtHIXEJZi08Hbya5L62AU%2FXLYs3eEAuPgD9xt7KCWtYeSjdfyMNH%2F90Q4ga0samEm1jm5QIL67MT9Zm7Xv37r29YRAha%2BQFCQIqG7vtU4oD9EWEvtfFAa6cuw6nyoJ0DHnTcRL8fJZwtXrKFGmxbtOMfR&X-Amz-Signature=f6c4bcc932015d8833677c42848bafc3cec39e0a6c6cd9e9dee0002dae1ab4bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPTAVGKY%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIA%2FRfdn7UVXA%2FsQ%2F4%2F4ytora0fEyPpThV61uJwkxwC%2FGAiEAqx%2B%2B2vEbH38OY7nTplOEd5m8Qhv0%2FufaFwcc%2BxyNdxcqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhWiEFWDLzcxUDFjircA3l5sHnH25wPyLg0iEYMngDiF0pVRxplRqe7WJeANfnUWFbQMY51yPGjyh25dQ9ksGT8HRNxnTN%2BzoHJA2WMVOgDukCgHOJskGwoZcd%2BxvIV9uKj%2B05aGVhsP3rM6pQq5mhaQq%2F7TtywyQEFZ37ZIrdtK%2F1JFzvWKYYau1EMR55vM5d%2FR15WW4EpYDZ7eFUfy1AMb%2FW3yggMSzzFy9gNeMtbuEjRByb2jqS%2B6%2BKA1nrU8aVrBj%2B4t3PeQr6w6w9MDfDKaTRdtJ%2Bx1JB6trqTvkyzzQMilpzj%2Bat7fZFLs83pGc2b8et3GrAvF3AwB%2FpkeeMzB%2BPkvaQArunvgk%2Fl8UCV8kAhiRgOaGij9irohiWuE3AWv85cNBMezxJO42KXJhIfyfNVBorNZQ7k2TrCOjb9fL2DDOQbgNYj%2FVD8xJteJhegiP0vHcdLepjR%2FxaKmT32Hn5gEuXK5qhT6IBYrFaoJC3Ew4fRZ%2F3dAZxm3cHRYAmNm%2FKY23b9whL27HecKsCzwBuZ35la%2BUZpxliJl2coD%2BryNCVsVFTCKfJm4V2HL8BVg71quYNKGmrQKZAeRUFlmlVQzIJqnS9DsSNZOkShiHLcEbfHuYcC0VOestSjfIcjjLI8yszxOurGMP6Ky8sGOqUBmqCanNCtbKUD6fu8P248LgI28UWmH2y8bhkvFo2bUTG7ZxFQHXfO7W7M0UM2P1N2KNznuZlFF6oodzPGkAGOE%2BTRpp2o0UAG9QyNy%2FJv4xeEKORYN27CXg9ogL25LAjtRePxqsNXTokHiNLXgGjohuOOjhC99szU7SNCkUF2xV4QUVmf6A0DH18xoXbFSCLpVrGKrDih23jHi24%2FMj8NJsQN83gK&X-Amz-Signature=03e55f62527d9a0ba528c9e2c5d330740de1e06b902296bbbf6e8ffca976524f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663NZMFJD%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFF2EG7z%2BroF9zPM8ovvTg1IHXrA6hOBoOxFO50y3IXiAiEA3vgZXPq%2B4qHglFBaJX6Ni2jufeFkc3lsnwqui7oS4NwqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsV84HM%2B1zB1q5qLSrcA5RQfjXyNsqEV3622qFt5ZKnjfKVT4d3qUwFU5elQfKuIEgQumZbLQ%2B%2BZAuR3YSAzUoaKxzPqRkH5j2yMtukwkPtUcEykSxcQERUZUAmmAMYD1xEtvu%2BQd6raQK09UhIGPtnLsHcLUopIlhsEo2dkBSCpBfooP%2Ff8Z4hAtWSendCMIa2qBtdN00uxo2ZdZQJ1DsYZouPKvOgj3MVcB%2BYSLDUwsrEWwuDhQIzroHtzY%2F6i0tvhH1nTRvzrg7MwBRJzaLG4RdPFNo%2BP0JRNDQBRccS2gAc5dO0BcJMVFtAWV%2Fzo6n8%2B3JhfCcT8%2Bnv%2BcOiRfVCb%2FnMLk8WPVf44yhSNBDQ5R0s5lKfqqyEZGxOvZI3o%2Fd7zL2s%2BgvQzP6vxu2fmd5RsD5zqWsR%2B%2F8lIzvVSfKkrOzORCBGuiYJLPXu7L26VYVuhFO2LZAlXpCiY2nr3a3A2Bz1uUp3O0ed1VAWVPlz1AGb4V972yAYnmXYzAhfX1pCCeqWu%2BBR%2FnD8zaTJg9CUi34CQaDWhez%2Fke0QhHQ%2BMvI3EpXOj2dRQJehjUtxrXFMC95pzxVBoTwE6WLvyl7cy1WRQN8N22Vt87FL8kAOUesss0CTHiK3FFzWSbVIZKvrhECrC9atgkJqMLyKy8sGOqUBMwk8Ex0I3iAPnDnPn9dzLly1CkCRiJH0sffXQph5HDiNKFwo7upQtm2qmoAa6ySbj3g0v4h%2FzVK6cWDDtCUGGyKVGQQUybx2JxvFa1%2Bzta7Nwdvgj6elyt18AxErndok239sNdbHdcyjVZMvMi3SVN12XIiJZPuUGMRI5w1ZpeLKuOCA6BLrz9tltzF1RUtLnQnqr8GrUwfeJnrtZf97xxSSdrO4&X-Amz-Signature=dbd89c0c3605867e92da825c96baffbed08747b0f652e0ad0cf332b0fbbabaa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KW2SMDK%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCpyDN6kDwkWF%2BbeJ4eTVh%2F86rQRON%2FvtaOY2OlYWYnWwIgBGOp7L2%2BjbxpeRscuqp7XTPxKcmZhVHBcH3v7Z%2Bo9XQqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJ2M2fWMJJVgk8UqCrcA2zzLd2jSVnu8qvVw7kO70Qlxx2zpVZUBSfhlQ%2FI1O5z9mottid3Un3KRq2WioUG%2Bo0aBvdonAeoVIzX5hKCD%2FPFQ1gRzSx3JVi0gOB3jduXCcxaBy%2FeUZ0fIu%2BZ%2FN4UQwqS7keg2Hp1W2ZoO%2FQBYZ5jghVdwHgzsMAFuUlHttRr2H94gaSqYrY%2BJbQWqVrqEC2xD%2B9ftCup1iGQ3curCgcSUfVTRjeiAyHwTvnYaE%2BixJHGjoFi%2Bz%2BM8wNUUQG4u42lw9MIf9FBCejLi%2FF8avS1qYo8HQw%2FeDpQnohDxgu%2Byx1tlq7r8aG6d1vUb2Ttmm1gvjMttzTowxPIXnFGYk59rV0KY8oPAZbZob6YstS0kxLLHuXtzyeJDaHAixmIDe01EVhIU%2FM5spxyQx0UMcOQxcwvHFKWNPtYldjZJ5ztepUXkI408WvWc2GY%2FDyMP5LInUx6zwVIxSrTl20ZYiYyVVLa00LN64JMBSvIPv1KkpdR%2BozrEicPsI8qoAkOml71tWDw7ohr06v5r3NWmzWj6vuDobO6BmH91ZVCO2ICBxHxkI7teSVJxMkEX5nDvj6qyVVnO9CAdf0Ac6w2SDsgpL5GVecEsc9a7NMI3MGv5rK7WcttsbcZQ%2B3qMJ%2BKy8sGOqUBviCSzPA28AsODwhVC8d1L%2BxfS%2FUhY4V1h0SoC9ZFyYz9gofj6wXnHaWhiIc%2B9U3Rojk1ntUl%2FgvxCZdoz1HxumYTlpHX35krEtcigJosx2chIqhzNd%2FhotxICR5e5lpf%2Byxi3k5kGggVA4esZR%2FCOA424DJ88teLhN0PyZyZ42FPPdFhpSYp1mVzUkRCmhFofwSxl7w3nU7pv4Xg4RnB6IJhnrwE&X-Amz-Signature=f96851744b38616216d483fd749920d5b4236ee51e7f6871f0343950baa885ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPIR4MDI%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIFfjL3cN7NH7yueJiDezQ%2BGX%2FJ7jZ0NXFvg24MhFhVYVAiAecU0rMvapq%2FGIfL%2B35u7BB9x%2BobKn%2Bur%2Fr1VdP1ziEiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmaro9CTMKdH4wL6FKtwD2rlsAA1tBcXzO9zF0%2FxQKcoUigspVfg8G7hae%2BJaYjHmwE5NLPuH3%2BmQ4hv9ZZ2pBGX0igs6l0GPd2qg8DzkzgXkg6guGHt3nNEkS9zB8zozQMaWc0Hr6zFbgVNRllX%2BZf6wK8z0sYDZnV0%2BdzbDT14s8ZQ1ph74ROaqJgPRillLrGnPYiLGddM23pR9Qk7eta1X5nC7ViVt2LRlSkn4%2BiiKekZASWg29qwxr%2FjjjOrhfDk2UAb0dK0d3W25V8w7JZqc3xdqAR64g2%2F%2B2NWVIqXHR6H4GJegjmOm9Zp8QRtUH81%2F2qDKwoiuEWOm%2B7CYzekTSrcU0S3swI4q8Y5qg7fxnzERhJ6SWlv5JCjIV5pgB%2F7ATzlP81lnVqAskf%2F2mSWNvFh%2BH1v0c3CWvTbCkY3aTN205x%2B1OAGpwl%2B18lG%2Bh1MPiaQ1C2%2FaX4Rw0xaTJkum1tr%2FJIExBtMe%2B3TF37MoTDtEt%2BjwHS4UZEmCVkPACHF2zYotbAbzl1c5Dh5GCT%2FZHhi2A%2Fvb3TzCxoG%2F0iz71nW4fF15K4b3sbxNkqMHVhfsKaKjKsk7F9eVadpas7NtQJ2Lvnjpo3VWa0BfHPmrX1lxYtGpRKg40v8sDN74Bqw%2BqamtFWIaA4QwuorLywY6pgEEvU%2BQRHIR13mNSCTpYh7SjO6ukTR09KRuvry9UVY28ZZaV5jqSDoQ%2FDIqFErt4jAh5BwrtHIXEJZi08Hbya5L62AU%2FXLYs3eEAuPgD9xt7KCWtYeSjdfyMNH%2F90Q4ga0samEm1jm5QIL67MT9Zm7Xv37r29YRAha%2BQFCQIqG7vtU4oD9EWEvtfFAa6cuw6nyoJ0DHnTcRL8fJZwtXrKFGmxbtOMfR&X-Amz-Signature=b03cca003f860fac9ad9fc67981a884d09d9d01f96a251f6f530d4c1c2b3c663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PRFS4NQ%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIEaBLH%2BzkZAnpyo9fG3Q%2F4nsTJ7gGm0%2BzxRQE7UunNifAiEAwY3k4nGWF65fOvXSwMZleEmRGo806nKeP60VW9MLlAsqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQijcXdvO9hWVt%2FcCrcA9tPthEFf5%2FcM9DlOSwS2MkG0z7GgG1DNWllgEpU9BfQiifydlludcoarUOm0so7i5O0NbPa3omcF672l2aGBLbIK66xveBy%2BNYjfDQo36L756JCJx7Br4ihpYCm2kVJ9s9ClhVHKDO%2FbVGVibVsJc7K5IFALD35R2tQM0He5uua1uCVeqoeYtLDzrcKx6%2Bv4%2FePzhbQFIbB8VRBAkUboXTGXAwUtlSxlZBh1%2F4goBy6nb5rdzkmszD88ShZnSxS3ORtUMNsZgHkBkoZitH4NeA7rrJwkR4920qexON1ywIoMYL0ZJiLOod%2B82AnqBe22zauQdqV0Ca5e604fHs7aQxKKMfW1qvQpyTqHv%2F86lECCieFN8bEBWI%2FgR9ZV2YGHLTihK0cy3g5BHkAxapQ8RGzkzAC6qTNKOUlbn6b6tt6xqTMiOAT7htWr7BMroD9Sy%2FY4ZzEVZmHj6i6mhdVfwqWzjN0VdUxAe%2BPNF0z6JAkXqLcknIJ08A%2F0iGNL9YukuB6MwMy9joe4vJa46jz2B2Sn08Thk%2BVzgDCkNFh7gH73a%2BbPrpu%2FMKVSITzuS0DLnK%2FlcoVw%2FoNcJZuBByYhPKEi%2B2KyklsPxa45UYiKYumJUGKoeDSHyz%2BT8r0MMOKy8sGOqUB4hGeHWadxOLtpEzBwknPnRHoqyPCjmBJTYN9wTHlkS%2BuCEe225nZX%2F9GvRy3v03lrXrt1Sth5TB3YDz81b%2BJ3Ax2aUDURAruxbmTTXLzkYYAV2bS5YrH8TkJ2TH6P%2F%2BowTplxIFRNCmTYwxLLl6gW9wDuCSpCdrkZsuy%2F3XXYX8pdAY3CwxLgOxaEFsXoA9eryAB6GxeELcNjOv1n1DNVQgYzoSj&X-Amz-Signature=f4f5f07dbea34d60bc6e08dd472937ae3a0082b5d4f72c0f1e0563eb7d5ba91c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPIR4MDI%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIFfjL3cN7NH7yueJiDezQ%2BGX%2FJ7jZ0NXFvg24MhFhVYVAiAecU0rMvapq%2FGIfL%2B35u7BB9x%2BobKn%2Bur%2Fr1VdP1ziEiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmaro9CTMKdH4wL6FKtwD2rlsAA1tBcXzO9zF0%2FxQKcoUigspVfg8G7hae%2BJaYjHmwE5NLPuH3%2BmQ4hv9ZZ2pBGX0igs6l0GPd2qg8DzkzgXkg6guGHt3nNEkS9zB8zozQMaWc0Hr6zFbgVNRllX%2BZf6wK8z0sYDZnV0%2BdzbDT14s8ZQ1ph74ROaqJgPRillLrGnPYiLGddM23pR9Qk7eta1X5nC7ViVt2LRlSkn4%2BiiKekZASWg29qwxr%2FjjjOrhfDk2UAb0dK0d3W25V8w7JZqc3xdqAR64g2%2F%2B2NWVIqXHR6H4GJegjmOm9Zp8QRtUH81%2F2qDKwoiuEWOm%2B7CYzekTSrcU0S3swI4q8Y5qg7fxnzERhJ6SWlv5JCjIV5pgB%2F7ATzlP81lnVqAskf%2F2mSWNvFh%2BH1v0c3CWvTbCkY3aTN205x%2B1OAGpwl%2B18lG%2Bh1MPiaQ1C2%2FaX4Rw0xaTJkum1tr%2FJIExBtMe%2B3TF37MoTDtEt%2BjwHS4UZEmCVkPACHF2zYotbAbzl1c5Dh5GCT%2FZHhi2A%2Fvb3TzCxoG%2F0iz71nW4fF15K4b3sbxNkqMHVhfsKaKjKsk7F9eVadpas7NtQJ2Lvnjpo3VWa0BfHPmrX1lxYtGpRKg40v8sDN74Bqw%2BqamtFWIaA4QwuorLywY6pgEEvU%2BQRHIR13mNSCTpYh7SjO6ukTR09KRuvry9UVY28ZZaV5jqSDoQ%2FDIqFErt4jAh5BwrtHIXEJZi08Hbya5L62AU%2FXLYs3eEAuPgD9xt7KCWtYeSjdfyMNH%2F90Q4ga0samEm1jm5QIL67MT9Zm7Xv37r29YRAha%2BQFCQIqG7vtU4oD9EWEvtfFAa6cuw6nyoJ0DHnTcRL8fJZwtXrKFGmxbtOMfR&X-Amz-Signature=a9a8098826e7b36bfd167ad70e3040fcd56b0911b919552d35d274641f009a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466345AEMBX%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIFtdEUjVqhrGDGFq%2BSE9ll%2FzQTdyF0E4%2FosgpzDFhQ2wAiAYn%2BwgLqmjHTjetzMxG3l2RtkmuvuNsdO2tHoq3MXFYyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BxRiia02XJILADgQKtwDgO6VRnXMbU2s17A%2BBFM0C%2Bv61J%2BgAWR8N84vBkGWW5AWvgsbNBlBEcDJdqRoNeXCPL1XLBw3C%2BKyWm4cYe3EDPO0l2OAbZL8fENz%2BA7eA73sPJXDix5e83yphKDHywYxzAd0avsCpJxljj%2BfvtDimaYw%2Far3eImFM9xx1EGFcsb7eR9rxfGprXujAdUX%2BMukLVpOtSt0Pc54L7Z6lk7ywnh7MI1gXhHiv7TM%2BFNuaHsDHCaQgYyBUZDPFQUKaZLkt4c13e0a1vBpDaeMb4Xet93Gd2MlyhQrGZwa7bfqo%2B6LWADWojoqckFkrLnO3aEBJjIc2sHtBPuge6jAPT8J9JX1y9VEZA8OqONIZUR1SauCybp5U%2BfwpeK4sjZCVtfyd9%2Bg7Xp1Bu%2FA45mzRIQ7nN0lutThjNGzIWEM1PUv2YJssMCu%2FDZJZ171BluN9Rzxg%2F5CtuS7%2BXGR%2FDpE7oXb8xqMaSXPaBRLaa6wh58zvR1F9%2FjhhVN77o7fF0XTjFe2Kz9NXVmVy91WcLd1kcSUayst2oqkswDw%2Beshvr3n2XKpuqGTRIonZOgvpjg0S67ArC3JdZz%2BjHdzuaW9l0%2B1zy9%2Bq9IZbNQcM9sWzyFGNxFiuDS4X%2Fbsl8jUd%2FMw74rLywY6pgEG0OZhe6Y0EU5oKqKbLw%2FG3J7dTNQAKQLKrpWisXABXzlUPIssgSDFcxxWVkTAni5oZ2TOnI3jG7IeinOFwKdlbbDeKrakZAiryZVhrt13yzZnqMgk8%2F%2Bxy7TFiyLSzGRaaI93kuWla49zniADJn9cSJJJBSDVJHSVU6EoGk%2FBNC8R9HyqiaH6YcDjFiqJQMzAR%2FkZqUBf3CGbFvxPVI1HGsLjDtaD&X-Amz-Signature=1c207a5518dde75e4f34d6e2c81719694b3d0aa899f636c752d43b59061c6325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPIR4MDI%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIFfjL3cN7NH7yueJiDezQ%2BGX%2FJ7jZ0NXFvg24MhFhVYVAiAecU0rMvapq%2FGIfL%2B35u7BB9x%2BobKn%2Bur%2Fr1VdP1ziEiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmaro9CTMKdH4wL6FKtwD2rlsAA1tBcXzO9zF0%2FxQKcoUigspVfg8G7hae%2BJaYjHmwE5NLPuH3%2BmQ4hv9ZZ2pBGX0igs6l0GPd2qg8DzkzgXkg6guGHt3nNEkS9zB8zozQMaWc0Hr6zFbgVNRllX%2BZf6wK8z0sYDZnV0%2BdzbDT14s8ZQ1ph74ROaqJgPRillLrGnPYiLGddM23pR9Qk7eta1X5nC7ViVt2LRlSkn4%2BiiKekZASWg29qwxr%2FjjjOrhfDk2UAb0dK0d3W25V8w7JZqc3xdqAR64g2%2F%2B2NWVIqXHR6H4GJegjmOm9Zp8QRtUH81%2F2qDKwoiuEWOm%2B7CYzekTSrcU0S3swI4q8Y5qg7fxnzERhJ6SWlv5JCjIV5pgB%2F7ATzlP81lnVqAskf%2F2mSWNvFh%2BH1v0c3CWvTbCkY3aTN205x%2B1OAGpwl%2B18lG%2Bh1MPiaQ1C2%2FaX4Rw0xaTJkum1tr%2FJIExBtMe%2B3TF37MoTDtEt%2BjwHS4UZEmCVkPACHF2zYotbAbzl1c5Dh5GCT%2FZHhi2A%2Fvb3TzCxoG%2F0iz71nW4fF15K4b3sbxNkqMHVhfsKaKjKsk7F9eVadpas7NtQJ2Lvnjpo3VWa0BfHPmrX1lxYtGpRKg40v8sDN74Bqw%2BqamtFWIaA4QwuorLywY6pgEEvU%2BQRHIR13mNSCTpYh7SjO6ukTR09KRuvry9UVY28ZZaV5jqSDoQ%2FDIqFErt4jAh5BwrtHIXEJZi08Hbya5L62AU%2FXLYs3eEAuPgD9xt7KCWtYeSjdfyMNH%2F90Q4ga0samEm1jm5QIL67MT9Zm7Xv37r29YRAha%2BQFCQIqG7vtU4oD9EWEvtfFAa6cuw6nyoJ0DHnTcRL8fJZwtXrKFGmxbtOMfR&X-Amz-Signature=465f8dfb07cf468f0246bda764c424af0924430689b691e725e5695f22ced7ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOPVMOK7%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDMvUMnkvlmlRhkdN5QvuDR6Ulhi0SphF8Cxg6ilwhUOgIgInXm%2BKIpk1iNWEGvIkl4xrSZq6Fg66NJMUpGBttf2L0qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGA1VtKdowrVYEQ7VSrcA6dMjqsxHvsB5Q5gz%2FgqPIhyWbiL4%2BSuq4zmoz%2Bq%2BMqPCzlO4u2DVdAtk42%2FlgY3gqOYhXxeNV4kkVDER1%2BB61ek3%2BFZpBvx4gF4bf9xjqtSJJAcAXd2n072%2Bu%2FSkLrrubyFlDIbQInZ2up4j1G3guykcMuZbdVxc3SBR8aoGafviJpga3yWC%2BSkH8gj4phs1uheb6Wyf9ONy%2B2Dn860d4Du6jmf3QdBCk8oVbKeIF2SxyNWb49wp5SmXJhIjc1NFVDlwHmUUNQl8aeSOnV1cVmqDLDcjuKVtznoCI%2B680rKMxEnQ66%2FXwuXsMWh%2FNVQPVRJu4Ck%2FiGam2Xs%2FotcUkeAUeckt%2F6muGyNZlKrI%2B7G27TaK%2F2OvkyFHZN%2BHy4Gztd8Spj9rzdhiydFFMLQWkuff0t0U65f1sJkvO3Nlj%2BODreGaYq0ajPLKsY01wOOcIx%2F2YgnvE9SPaBDaYcQK3HsgyXV5jNUyBFRL5WPhaT7nOtE6BCf9aRk0Q2j5kaFd0VxsMzaA%2F%2BetJsIwO5IDonrvJLwcUqX49Xn%2FG8iiuCChYdOXJyQaAnAdX%2FeZWIFrcAOTRgCbz4709rIt%2FXUG2d7dmS1T9sQFh7q4smGDdoRYq9cumeEPqsmPoJwMJqLy8sGOqUBQ%2FEfwcDJv3dUdP64zqCUk2vskqabnrI4xCx4DnTXnPXO9krnaJ2psAoj79f%2BeCOtax7KFsQN2FdXCPhkLvb2jai8mLJ8S555XIpERVxmB7RcPXfsvsVmxxMVwOqSM2cEG1YsFWFFdLDIQRJPbVfAZtL9aqTrqqhCUtR6GdF3MUjelu5NXPt%2F4uKFbjgdCyp5izoHssEat%2B5cj%2BbpTeTAJ%2B8mQ6F%2F&X-Amz-Signature=a6f11c921d245809ddbd560c00e9f788f7dc57ba220a9d7ecd423a80f11f5204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPIR4MDI%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIFfjL3cN7NH7yueJiDezQ%2BGX%2FJ7jZ0NXFvg24MhFhVYVAiAecU0rMvapq%2FGIfL%2B35u7BB9x%2BobKn%2Bur%2Fr1VdP1ziEiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmaro9CTMKdH4wL6FKtwD2rlsAA1tBcXzO9zF0%2FxQKcoUigspVfg8G7hae%2BJaYjHmwE5NLPuH3%2BmQ4hv9ZZ2pBGX0igs6l0GPd2qg8DzkzgXkg6guGHt3nNEkS9zB8zozQMaWc0Hr6zFbgVNRllX%2BZf6wK8z0sYDZnV0%2BdzbDT14s8ZQ1ph74ROaqJgPRillLrGnPYiLGddM23pR9Qk7eta1X5nC7ViVt2LRlSkn4%2BiiKekZASWg29qwxr%2FjjjOrhfDk2UAb0dK0d3W25V8w7JZqc3xdqAR64g2%2F%2B2NWVIqXHR6H4GJegjmOm9Zp8QRtUH81%2F2qDKwoiuEWOm%2B7CYzekTSrcU0S3swI4q8Y5qg7fxnzERhJ6SWlv5JCjIV5pgB%2F7ATzlP81lnVqAskf%2F2mSWNvFh%2BH1v0c3CWvTbCkY3aTN205x%2B1OAGpwl%2B18lG%2Bh1MPiaQ1C2%2FaX4Rw0xaTJkum1tr%2FJIExBtMe%2B3TF37MoTDtEt%2BjwHS4UZEmCVkPACHF2zYotbAbzl1c5Dh5GCT%2FZHhi2A%2Fvb3TzCxoG%2F0iz71nW4fF15K4b3sbxNkqMHVhfsKaKjKsk7F9eVadpas7NtQJ2Lvnjpo3VWa0BfHPmrX1lxYtGpRKg40v8sDN74Bqw%2BqamtFWIaA4QwuorLywY6pgEEvU%2BQRHIR13mNSCTpYh7SjO6ukTR09KRuvry9UVY28ZZaV5jqSDoQ%2FDIqFErt4jAh5BwrtHIXEJZi08Hbya5L62AU%2FXLYs3eEAuPgD9xt7KCWtYeSjdfyMNH%2F90Q4ga0samEm1jm5QIL67MT9Zm7Xv37r29YRAha%2BQFCQIqG7vtU4oD9EWEvtfFAa6cuw6nyoJ0DHnTcRL8fJZwtXrKFGmxbtOMfR&X-Amz-Signature=2d9d88da6b372742b951898f4ab83cf854ebbdd9b810f388805b5955d808f689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCZWKQRP%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDSNh9xqYmqeplL%2FaHWWo3x%2F%2BE4uhAORVxU0pzBhwgLMQIhALcBByuro64fWeFYjyGVvIq3g9aw%2FclS%2Bb0B9Uyk4rpAKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYDz3pSWeM8rvTvOsq3AP2y5irVhzDZWTaQlMvODJzqbnbPYAdYRPMztNH0W9%2F2yEX%2F0VcgU54SycXqtpuw7m5zJFijlzAOf1LuAzgwmQJYm9jp4%2FuWfgiN7jPyEUppGP7aFQdKCrEF6Zpqjo4flmEwacWsddMCejVvv%2F5Z1dbwlpt8nPGhQ8vYOFfylj2ZRJOEsYNvM30wDt6JLM%2FWaL3xFf%2BnIqmMmGfPAPvMP5LPFWmAM7bl7TnSQd432f74fMKBPkur%2Fvc9Gg3i5kPqdj9%2BC%2FJqSRRIUz59%2Bns8pb1Prnq16uzVBUiHdToNvghit1CIdDlR1CMyVPChAq9j9yKYMjCXkviLwXCC6gaWj1RO1cZfraGj4jwRvOWMu6CbdcWwQgd5JOY0rhlY8jZQZBFLnVXq1IBcvLNQ0D4mrzmoqfvD9wNiGtlfvqv6P0aqu%2FI0IJMk%2B797T3XT3mM%2BZWRsOZMcxecmPh7N4CThv3FsEttj7c4HpsJvChO5CzKKqdOINvqU9hSVnN9p4itK%2BI1R4TjmTM09%2F86dZNleTM%2Fy3vWvzPQcownc2lkcDjFJTVpgszEmJXG4hO%2FHjZZKXlTfbSrrT%2BDndRb5jcrNrSGDset8n2Y%2FpTayWeKezxp6FULlS40mitir0F%2BXjDoisvLBjqkATaqIJovJst3HVlqhip1bneYoxEosk%2FzT2UsRWmWzzgrX%2BCQer%2FaDlSycNRBDLEC%2FESoFo0WxkRsWk8jryeyQ%2Bac%2B%2BQ1c8MZ%2BLgVbRYWtK6D%2B9zQmb7f8YvGjKgYh95qIk2Zjv8gG3vvDRQediXqVq4Qo1T04FQADgpvNEpZ%2FDChAtOEh1e1r5gnh503eRzqaH4AnwENV375ywSKZGZKJcwvEymr&X-Amz-Signature=072894a902c0bf059253179cdeca432524798dad08ecb3ac12b8518c13e5cd88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPIR4MDI%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIFfjL3cN7NH7yueJiDezQ%2BGX%2FJ7jZ0NXFvg24MhFhVYVAiAecU0rMvapq%2FGIfL%2B35u7BB9x%2BobKn%2Bur%2Fr1VdP1ziEiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmaro9CTMKdH4wL6FKtwD2rlsAA1tBcXzO9zF0%2FxQKcoUigspVfg8G7hae%2BJaYjHmwE5NLPuH3%2BmQ4hv9ZZ2pBGX0igs6l0GPd2qg8DzkzgXkg6guGHt3nNEkS9zB8zozQMaWc0Hr6zFbgVNRllX%2BZf6wK8z0sYDZnV0%2BdzbDT14s8ZQ1ph74ROaqJgPRillLrGnPYiLGddM23pR9Qk7eta1X5nC7ViVt2LRlSkn4%2BiiKekZASWg29qwxr%2FjjjOrhfDk2UAb0dK0d3W25V8w7JZqc3xdqAR64g2%2F%2B2NWVIqXHR6H4GJegjmOm9Zp8QRtUH81%2F2qDKwoiuEWOm%2B7CYzekTSrcU0S3swI4q8Y5qg7fxnzERhJ6SWlv5JCjIV5pgB%2F7ATzlP81lnVqAskf%2F2mSWNvFh%2BH1v0c3CWvTbCkY3aTN205x%2B1OAGpwl%2B18lG%2Bh1MPiaQ1C2%2FaX4Rw0xaTJkum1tr%2FJIExBtMe%2B3TF37MoTDtEt%2BjwHS4UZEmCVkPACHF2zYotbAbzl1c5Dh5GCT%2FZHhi2A%2Fvb3TzCxoG%2F0iz71nW4fF15K4b3sbxNkqMHVhfsKaKjKsk7F9eVadpas7NtQJ2Lvnjpo3VWa0BfHPmrX1lxYtGpRKg40v8sDN74Bqw%2BqamtFWIaA4QwuorLywY6pgEEvU%2BQRHIR13mNSCTpYh7SjO6ukTR09KRuvry9UVY28ZZaV5jqSDoQ%2FDIqFErt4jAh5BwrtHIXEJZi08Hbya5L62AU%2FXLYs3eEAuPgD9xt7KCWtYeSjdfyMNH%2F90Q4ga0samEm1jm5QIL67MT9Zm7Xv37r29YRAha%2BQFCQIqG7vtU4oD9EWEvtfFAa6cuw6nyoJ0DHnTcRL8fJZwtXrKFGmxbtOMfR&X-Amz-Signature=b3b276454cff95700c3a68851aab320a826f947afc67d4f972669872f344b1fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ5PBMKX%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIDEv%2Bd%2BHCcvvuaGwuKnjxPq8bLHgqyFOj7F18ZizzvBgAiA3Leqkcnd3LzQR0CoMtg0WiME9mArSiI0VAM4c3Rr5wCqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc13r48B3%2BUTDlkGkKtwDtoM%2FQBygqeLuLbtsWwa3PuiHSMaqIB8zSKtXdojgThdTqEfzIuwKcD6GUY0Voj%2FDAjPUlpfdh9oUAUcGQljTH8QejYfTuU8uSf4CH%2BjrSyDTm75LKWwijWOF7eNGRi42oPkbCNM1bMi3mLK4mp8sS%2FNyYGqDq4YYPhMd2OKAyZnwRTibKdXxZFY6Kxhtm2jMlX7jpS7Rf2z1ZJ%2B3MvowWG6UdH1RWPgfvA8WmEioIsG5WHNCwCnREdy6KJ7J6L3I6Ff0ECtFgO4Jg3DAin7TDNWpu8bkpTQoZd9wm3vlFkSMJXlYl6S7%2BNaWyA7%2Fvi3Na1m4B913ReblM3Y9fRE0CtKx68UZz02lZ7R6ccAcw07AfMTnoHFO60OkMB80iaOQxW3tYY2MTcUFzEY15cUVzD4NbugiEJAJ%2FWjg4eumdG9rAEjAQR7mWESvtnPISC5xHBx1ARmHVr6%2FzzKQCNVFY0%2FIiGrCcE19TxQe6IazBjNYaMbRo%2BBf0Z%2FBFikk2GC2s5AytzMOE0a71IA%2BvAlO5Y0AeLw7BfEm3WJd9sPjJSP60XhfGjbi2GY71cR1sLrqon3JfAgNk0BU9FqjSyTKkLjIaQGAzuzAFkg2qyqZaBzJHFkwoCv4cKsiJ3Iw4orLywY6pgHqFnZXiC%2FfkeBBLEijYhprvjBg2O7Wlnh%2BsU%2Fs5dOgKGG9PUY40Vvn3ipZvuV054mL9S0Mpfu9%2Fzjoo7N416g5VOjF1AzZbYyRXW7naql7kF47l1ibt4MeKW3XAB3hb83xFE9jif%2FCyXy45JlMKBwMelixFXS1wIyejLwuzIAQEpaXN8HqGjzSkpTY6UTSyaPfQL0gFG2OQdcnXy3JJzS6Wp9EMYTA&X-Amz-Signature=fd50d08cc6489132ddaabd89906857f61ab4331ae598a5b52fd4c3702118dceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSQAOCRE%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIDsgnGGDfxbyeKw%2FOahTi5Rn4V2oePSIMINbVceTyfb7AiBYPry2Oea1lCHMRGl4pYZV2TXD8AGSZqGMZROEPTce5yqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9vMg8KTkRJdpXpBGKtwDJhlVSrigJSLwxyBzOoE9RtCFd2N1XhhuauransjOf3YDvGlALAhbwFXY4zcBax8XkaSQO4AjaMatbKY6CuTyR%2Fa2l9Lp2vmCehbPGnEORsvPLq0bVzzEzsnRP%2BRNSw50el%2Br5YW%2B4CQGOLrC4L3mubXrQcopbrVbv0j%2BoaRsRSpdHeu29FJCbq4HVCbE8oo9XaseVR%2Bza2maxzk9YZCKN6lJOcf3T9oIw2KwrD%2FwThQnceW27GQIXJeDtbIZJqivfNRH7PqRKuhr45eYL3lK82CepAE%2F%2BElIV46aVtR8xr13xni8ZPulUZFC%2Be5fIuu%2B5GElgd3EvhCpCRVoxcfFKY2ipCCXduZj6EF4V%2Fx5cpObV9g0Iaz0W0YKB5uT9eSqFgywgCx8sNRG8Qp4Peo5ZtAxKl19mVTK4wD0lPy8Q2kN9gMzYtZQBOfJ1GwRLFN%2BPrf6G1oc43HeLaTWCYy3PTEhEPjtzn5FdMrmAwzmh2zLB%2F6bXBa3kW5awOkjkBgJvNVkeAwAAT%2FnEq08hXDvYwfk7iNJztF1tJXktWETCGtgNsEFBHBIWaVKyHOMnozEBJu9MQ9UbZJjzvx8MTZ5T%2Bh7ok3EJHyoHlAzcX1MqPvfo%2BiEN2GISn0Id00wu4rLywY6pgGX4e7BzogXbzfEqbvlgHa%2B%2BI6yc47%2Fvr3n5mL30ksoWgoTMoy8GQZy0NnPrAUMf1swjBlKXoChIdgZ3tqapKe3OVBPqczZfy%2BO04AK5SDZnLy34myn5X9kxbZcuWNZYIJ2sMbGROpW8%2BPtgEvCCgO5zvz3n4YB11w%2FQp2Vn5N4hghK0XAbNbP1uFwRPBYtXqyEHBXLlpW5Nnk29vYxmageEOLt3hGU&X-Amz-Signature=81bad46a88b20d2c89502631ffe72534abe8399ed1ab258540a2d21dff897f2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYIVNNTD%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCahXX41OYBPrlaOdekGJ7uX8hG4nK6lkujzk9EM%2FRd%2FwIgIhnGycWIbhD%2BP6Fvxu2B1ZdQbet%2FDhlxvnUS%2Ba9vs10qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0wD1dK6hoZwnKq2yrcA5tUV52guRFbiR2St4C1zVJuIGWt1UkoIHlChPVo5EYxLhA%2F8ClQY9kjpMKGTAvoRDI0Sk3WQA3N2Fr5vDyuaO7NAR9cZHgnNcMJKA2aEysksCDwlTAM1PsYHuiJ5%2B3CoLbgKnUBffak4b%2F5y9rITD%2BlYLpVbQVGaxYwAWH6wYB5R3faTIfBA%2FnXz4EEe7%2FmDnoqElm8R9S1aEZ2fG2jzPcnv0%2BeyMvbcDeCso0l3nVJGyxFTvytKR15S9BGYCTmwaSvjbF1VGrIbte2FGZKbQ96h%2FQLX56Q%2F%2FXPreAZfCHM6htk%2BW%2FbwjzfbK6t9JosGg8qkqrn3GCkRlQIf9Iso522q%2BiLjoCKMLTJZ919OcxCBscoAyxuvEt4neZE9qEdz8PmZRKQMyfGuMnpuApwmZ%2F5cmS6fjGFDr6A7995dH0CPYXynuLVxyoXjTo1IjkeU%2FXLMu3ZiPskCmx2u5JXu70I9KTFPncmHu%2BcILcVRMVs3NjaBUsZmudkUI67MZrcOZgSQ%2FRoQCMlDkUg2aD6xl61nBbNyQgzUsVJtlDRAr7O1QpnAhVRvFVYIoat5BtoQqP%2BuxAnms2BquWQtO1ZIywdOelYG8IEITTZ7xIuxdECOihamq8jefyOCZVWMMWKy8sGOqUBSgIRekB3Ujn7eEYMCBpE6ylvaEJYEz90goP1UDxz6bRFN2G6LXIgO91YaO1Ckk0YZ7Fpj8jj3jLy%2FQutmo%2BWkIwonqMUMGuoyAkpVn80TSVU9mwRCEjGBehk6deoMDP%2FJCys%2B720Oji4HoGs5QwIGP%2Fj923lMiCrOLjHbf78em%2BsNz1%2BqgRyF4CdIalJZSSoQN1RAgnNnijqr2NrAt5sGy5CB2nK&X-Amz-Signature=113d2e78c19bbc8d8524922fd56b6bbcf8424488f8e4b5d4ae753f94d8ec92cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPIR4MDI%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIFfjL3cN7NH7yueJiDezQ%2BGX%2FJ7jZ0NXFvg24MhFhVYVAiAecU0rMvapq%2FGIfL%2B35u7BB9x%2BobKn%2Bur%2Fr1VdP1ziEiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmaro9CTMKdH4wL6FKtwD2rlsAA1tBcXzO9zF0%2FxQKcoUigspVfg8G7hae%2BJaYjHmwE5NLPuH3%2BmQ4hv9ZZ2pBGX0igs6l0GPd2qg8DzkzgXkg6guGHt3nNEkS9zB8zozQMaWc0Hr6zFbgVNRllX%2BZf6wK8z0sYDZnV0%2BdzbDT14s8ZQ1ph74ROaqJgPRillLrGnPYiLGddM23pR9Qk7eta1X5nC7ViVt2LRlSkn4%2BiiKekZASWg29qwxr%2FjjjOrhfDk2UAb0dK0d3W25V8w7JZqc3xdqAR64g2%2F%2B2NWVIqXHR6H4GJegjmOm9Zp8QRtUH81%2F2qDKwoiuEWOm%2B7CYzekTSrcU0S3swI4q8Y5qg7fxnzERhJ6SWlv5JCjIV5pgB%2F7ATzlP81lnVqAskf%2F2mSWNvFh%2BH1v0c3CWvTbCkY3aTN205x%2B1OAGpwl%2B18lG%2Bh1MPiaQ1C2%2FaX4Rw0xaTJkum1tr%2FJIExBtMe%2B3TF37MoTDtEt%2BjwHS4UZEmCVkPACHF2zYotbAbzl1c5Dh5GCT%2FZHhi2A%2Fvb3TzCxoG%2F0iz71nW4fF15K4b3sbxNkqMHVhfsKaKjKsk7F9eVadpas7NtQJ2Lvnjpo3VWa0BfHPmrX1lxYtGpRKg40v8sDN74Bqw%2BqamtFWIaA4QwuorLywY6pgEEvU%2BQRHIR13mNSCTpYh7SjO6ukTR09KRuvry9UVY28ZZaV5jqSDoQ%2FDIqFErt4jAh5BwrtHIXEJZi08Hbya5L62AU%2FXLYs3eEAuPgD9xt7KCWtYeSjdfyMNH%2F90Q4ga0samEm1jm5QIL67MT9Zm7Xv37r29YRAha%2BQFCQIqG7vtU4oD9EWEvtfFAa6cuw6nyoJ0DHnTcRL8fJZwtXrKFGmxbtOMfR&X-Amz-Signature=b7d34e8a8bfb3a80947c8a0493215ef71836e368a18cc8901cb43b3b52daab1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPIR4MDI%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIFfjL3cN7NH7yueJiDezQ%2BGX%2FJ7jZ0NXFvg24MhFhVYVAiAecU0rMvapq%2FGIfL%2B35u7BB9x%2BobKn%2Bur%2Fr1VdP1ziEiqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmaro9CTMKdH4wL6FKtwD2rlsAA1tBcXzO9zF0%2FxQKcoUigspVfg8G7hae%2BJaYjHmwE5NLPuH3%2BmQ4hv9ZZ2pBGX0igs6l0GPd2qg8DzkzgXkg6guGHt3nNEkS9zB8zozQMaWc0Hr6zFbgVNRllX%2BZf6wK8z0sYDZnV0%2BdzbDT14s8ZQ1ph74ROaqJgPRillLrGnPYiLGddM23pR9Qk7eta1X5nC7ViVt2LRlSkn4%2BiiKekZASWg29qwxr%2FjjjOrhfDk2UAb0dK0d3W25V8w7JZqc3xdqAR64g2%2F%2B2NWVIqXHR6H4GJegjmOm9Zp8QRtUH81%2F2qDKwoiuEWOm%2B7CYzekTSrcU0S3swI4q8Y5qg7fxnzERhJ6SWlv5JCjIV5pgB%2F7ATzlP81lnVqAskf%2F2mSWNvFh%2BH1v0c3CWvTbCkY3aTN205x%2B1OAGpwl%2B18lG%2Bh1MPiaQ1C2%2FaX4Rw0xaTJkum1tr%2FJIExBtMe%2B3TF37MoTDtEt%2BjwHS4UZEmCVkPACHF2zYotbAbzl1c5Dh5GCT%2FZHhi2A%2Fvb3TzCxoG%2F0iz71nW4fF15K4b3sbxNkqMHVhfsKaKjKsk7F9eVadpas7NtQJ2Lvnjpo3VWa0BfHPmrX1lxYtGpRKg40v8sDN74Bqw%2BqamtFWIaA4QwuorLywY6pgEEvU%2BQRHIR13mNSCTpYh7SjO6ukTR09KRuvry9UVY28ZZaV5jqSDoQ%2FDIqFErt4jAh5BwrtHIXEJZi08Hbya5L62AU%2FXLYs3eEAuPgD9xt7KCWtYeSjdfyMNH%2F90Q4ga0samEm1jm5QIL67MT9Zm7Xv37r29YRAha%2BQFCQIqG7vtU4oD9EWEvtfFAa6cuw6nyoJ0DHnTcRL8fJZwtXrKFGmxbtOMfR&X-Amz-Signature=433d990688626e36176111f6d8c5b1247e8c0805baee18d7dd6702aeee024493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHSIM4W%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQD6t1JX3FUpakeRcHHWYkxnFoUfcqhbxyKKvbkqDeccvgIhAIwE0eJgResSpONINFX8yPiQeSMvEtBpWwVytM7IsstwKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNmrbwwIXy0DyLsTIq3AMPnHJ0nqVs9%2Fd6Ufb%2FhZAfVlpBE56WHnTLITCykyd1rx5e%2B%2FQDZT3CW8hii7%2B3kObD%2BmmjeDkm8HlMRhJvMdX0qLIs5%2FdYbcTWwxHZYzty7kyllcir%2FIcYYisVO1jkG4o3OXayfV%2FqjTd4IEhplwHOUAZ5QL54xPzqFt5%2BKNk7BUmPdTocBKN%2B2BdBRj6zT6585DPNtlANiyf%2FidRvZbnQ981%2ByRe9C70TVE%2FvHVVZVTNxWij8xDO1YH4VZEcfWiPOP4lKIbwao7AqykOIqyLwN6GReAOFAoeyxniD1fpsfQFZsyjkOy28rEPF7snB%2BtiYmFYpbYeVzNo3YNCqJspzvaq6fePvVkXqz28dR1AQyae0TDB7qqBqKMXVpANFJaA265z9gdNzcixcWSskuj2soqBQVLUu7qeE9XYmAXUj6TAL9KXX0142mbTGxhkG3%2FJFE%2BQg6x4abECUnQBuy9ncby2M%2B0cslCH3P1jg5eoP6QqeydwpqFMXbLp6OewopG686i%2F5UTORm82L8gnf%2FmA6%2BePQTH85WeXB%2BkUq8WMlE5YAubM0HwFjjdsevMNtyHNcuSGCU8oHRatdJxN2J98pXBO63GqZOu0tAwDPjWyJWLXb74mhd%2BwVy8VB1zDsisvLBjqkAUZmFDdQLK74SXG0jC8ytxUkwG%2BcqSJ3fLGtMjSFRjMEXaZF%2FT72CaoDSG4mziovB%2FeFtFOdOUi%2Bk9HDyNWQ9e616wHx7l36uDThz3mtGU2%2FCJb58hUBgAU%2BId767r1mdZGfCRKMs1OsdAfhnMOwx3ntNE3cod8JnXDaRf%2BSONb4EMwZAVtIvLEcSKB4zQJ%2BO1BDTIo08uyMxKCRq%2BNRh0cpRWLe&X-Amz-Signature=bea22abb164c558b62f1d04cd33023a7db55a229908f5eba8516a3693ff59430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHSIM4W%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQD6t1JX3FUpakeRcHHWYkxnFoUfcqhbxyKKvbkqDeccvgIhAIwE0eJgResSpONINFX8yPiQeSMvEtBpWwVytM7IsstwKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNmrbwwIXy0DyLsTIq3AMPnHJ0nqVs9%2Fd6Ufb%2FhZAfVlpBE56WHnTLITCykyd1rx5e%2B%2FQDZT3CW8hii7%2B3kObD%2BmmjeDkm8HlMRhJvMdX0qLIs5%2FdYbcTWwxHZYzty7kyllcir%2FIcYYisVO1jkG4o3OXayfV%2FqjTd4IEhplwHOUAZ5QL54xPzqFt5%2BKNk7BUmPdTocBKN%2B2BdBRj6zT6585DPNtlANiyf%2FidRvZbnQ981%2ByRe9C70TVE%2FvHVVZVTNxWij8xDO1YH4VZEcfWiPOP4lKIbwao7AqykOIqyLwN6GReAOFAoeyxniD1fpsfQFZsyjkOy28rEPF7snB%2BtiYmFYpbYeVzNo3YNCqJspzvaq6fePvVkXqz28dR1AQyae0TDB7qqBqKMXVpANFJaA265z9gdNzcixcWSskuj2soqBQVLUu7qeE9XYmAXUj6TAL9KXX0142mbTGxhkG3%2FJFE%2BQg6x4abECUnQBuy9ncby2M%2B0cslCH3P1jg5eoP6QqeydwpqFMXbLp6OewopG686i%2F5UTORm82L8gnf%2FmA6%2BePQTH85WeXB%2BkUq8WMlE5YAubM0HwFjjdsevMNtyHNcuSGCU8oHRatdJxN2J98pXBO63GqZOu0tAwDPjWyJWLXb74mhd%2BwVy8VB1zDsisvLBjqkAUZmFDdQLK74SXG0jC8ytxUkwG%2BcqSJ3fLGtMjSFRjMEXaZF%2FT72CaoDSG4mziovB%2FeFtFOdOUi%2Bk9HDyNWQ9e616wHx7l36uDThz3mtGU2%2FCJb58hUBgAU%2BId767r1mdZGfCRKMs1OsdAfhnMOwx3ntNE3cod8JnXDaRf%2BSONb4EMwZAVtIvLEcSKB4zQJ%2BO1BDTIo08uyMxKCRq%2BNRh0cpRWLe&X-Amz-Signature=b3afe6bdce97291218ea67eafa14ce28dedb475354a1b0d2bd6e91c45cc46195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHSIM4W%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQD6t1JX3FUpakeRcHHWYkxnFoUfcqhbxyKKvbkqDeccvgIhAIwE0eJgResSpONINFX8yPiQeSMvEtBpWwVytM7IsstwKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNmrbwwIXy0DyLsTIq3AMPnHJ0nqVs9%2Fd6Ufb%2FhZAfVlpBE56WHnTLITCykyd1rx5e%2B%2FQDZT3CW8hii7%2B3kObD%2BmmjeDkm8HlMRhJvMdX0qLIs5%2FdYbcTWwxHZYzty7kyllcir%2FIcYYisVO1jkG4o3OXayfV%2FqjTd4IEhplwHOUAZ5QL54xPzqFt5%2BKNk7BUmPdTocBKN%2B2BdBRj6zT6585DPNtlANiyf%2FidRvZbnQ981%2ByRe9C70TVE%2FvHVVZVTNxWij8xDO1YH4VZEcfWiPOP4lKIbwao7AqykOIqyLwN6GReAOFAoeyxniD1fpsfQFZsyjkOy28rEPF7snB%2BtiYmFYpbYeVzNo3YNCqJspzvaq6fePvVkXqz28dR1AQyae0TDB7qqBqKMXVpANFJaA265z9gdNzcixcWSskuj2soqBQVLUu7qeE9XYmAXUj6TAL9KXX0142mbTGxhkG3%2FJFE%2BQg6x4abECUnQBuy9ncby2M%2B0cslCH3P1jg5eoP6QqeydwpqFMXbLp6OewopG686i%2F5UTORm82L8gnf%2FmA6%2BePQTH85WeXB%2BkUq8WMlE5YAubM0HwFjjdsevMNtyHNcuSGCU8oHRatdJxN2J98pXBO63GqZOu0tAwDPjWyJWLXb74mhd%2BwVy8VB1zDsisvLBjqkAUZmFDdQLK74SXG0jC8ytxUkwG%2BcqSJ3fLGtMjSFRjMEXaZF%2FT72CaoDSG4mziovB%2FeFtFOdOUi%2Bk9HDyNWQ9e616wHx7l36uDThz3mtGU2%2FCJb58hUBgAU%2BId767r1mdZGfCRKMs1OsdAfhnMOwx3ntNE3cod8JnXDaRf%2BSONb4EMwZAVtIvLEcSKB4zQJ%2BO1BDTIo08uyMxKCRq%2BNRh0cpRWLe&X-Amz-Signature=586f802f4da6e53b3ed801e4ff060f4d4c2ce5215ae152b9465a2f0d58c2f4a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHSIM4W%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQD6t1JX3FUpakeRcHHWYkxnFoUfcqhbxyKKvbkqDeccvgIhAIwE0eJgResSpONINFX8yPiQeSMvEtBpWwVytM7IsstwKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNmrbwwIXy0DyLsTIq3AMPnHJ0nqVs9%2Fd6Ufb%2FhZAfVlpBE56WHnTLITCykyd1rx5e%2B%2FQDZT3CW8hii7%2B3kObD%2BmmjeDkm8HlMRhJvMdX0qLIs5%2FdYbcTWwxHZYzty7kyllcir%2FIcYYisVO1jkG4o3OXayfV%2FqjTd4IEhplwHOUAZ5QL54xPzqFt5%2BKNk7BUmPdTocBKN%2B2BdBRj6zT6585DPNtlANiyf%2FidRvZbnQ981%2ByRe9C70TVE%2FvHVVZVTNxWij8xDO1YH4VZEcfWiPOP4lKIbwao7AqykOIqyLwN6GReAOFAoeyxniD1fpsfQFZsyjkOy28rEPF7snB%2BtiYmFYpbYeVzNo3YNCqJspzvaq6fePvVkXqz28dR1AQyae0TDB7qqBqKMXVpANFJaA265z9gdNzcixcWSskuj2soqBQVLUu7qeE9XYmAXUj6TAL9KXX0142mbTGxhkG3%2FJFE%2BQg6x4abECUnQBuy9ncby2M%2B0cslCH3P1jg5eoP6QqeydwpqFMXbLp6OewopG686i%2F5UTORm82L8gnf%2FmA6%2BePQTH85WeXB%2BkUq8WMlE5YAubM0HwFjjdsevMNtyHNcuSGCU8oHRatdJxN2J98pXBO63GqZOu0tAwDPjWyJWLXb74mhd%2BwVy8VB1zDsisvLBjqkAUZmFDdQLK74SXG0jC8ytxUkwG%2BcqSJ3fLGtMjSFRjMEXaZF%2FT72CaoDSG4mziovB%2FeFtFOdOUi%2Bk9HDyNWQ9e616wHx7l36uDThz3mtGU2%2FCJb58hUBgAU%2BId767r1mdZGfCRKMs1OsdAfhnMOwx3ntNE3cod8JnXDaRf%2BSONb4EMwZAVtIvLEcSKB4zQJ%2BO1BDTIo08uyMxKCRq%2BNRh0cpRWLe&X-Amz-Signature=fa6cfde3a0c7e3557a4af89a2a829d74a87c611273d2e978e20b94bacaa0f8b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVUNZEYV%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIGlDungRmNLC1ZRajJ7b%2FN5Al4rLYrfcxFkcg041tqB%2FAiA%2BjKTIjgtO6afCKHPdYZzVSD74ZHqYqRnNkpnLsVzJxCqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKY5Gbaxv%2B8gLY2sVKtwD7PI7F6aH9QtUf3L353A7In15a55Xw29PmfOyuk5zSpWMczW3O93cl7PPsDTAkmHGpcRkRtV%2B2k4XCb9DHMA2ED5GO76IIt4aPkeghv4F7wX%2FIBo6XSoYhx5f0ZV8GzVzdGnMckAzB%2FeTY6yk8rAArRYoNda7kDJLXkDnvHLR0DjuNjdHTMSFsU4vklh8aOghrRASeCPGtEiwipHfuVOH%2F46Q8D5KKbdKO8%2FDKASsEevLHUD8FTDmPQg7%2FEqkg65%2Bg2N3EDzLu578A0QkCrvyRPcvRbaxdGjd%2Bz1VaWyyevfJuFGJRSULqmRMV0Q6D4RdaMJZdPa4IiQiCO%2BpJaHWMU%2B0FgpotTpngh%2BRg30sREftS2VLAvK4VrNk8siJ%2BDYa0A9AE6MHCZXZPsM40gzsjfS8BqnNJZW0NUWAG6PqrgKkhfJspeHkY4HYZOtHaQldZ6X2bOLjSwHYnLALcKXek7wkJdUWSa9dC6wl19luTCXMf6oWOFLXzNxaEyBfJIbZuSh7Pfj3o5dSeJS9hnddABJKk6CLFKJJlU9nt0uO2Hx6opk%2Fje5XdLj41sN6cdKV9EjOtixJDueC7dUhvK8sowk%2FOGiGezmI0tvn0Xm6SDpiiRltziYCVAbHhPgwrorLywY6pgHDVMh3mRse5jsICO8%2F%2FzmLP4Gc5xzp79zFFtm32e3VIKZG8szYxePVyGq8BGw1cOiHBGbQxDSMnaf%2BqATscvuchOxOX0w%2Bw2fe%2BhGDJJO4CwbHkkvA9SdGm1tyAL64GrfTzECkZL8wW8kjldiYAzmFlE4UMNHZ4t%2FuYvHz7unMjw6pVY3%2BSyz6uRDvUvPM%2B9oJZHVfnEPGUeTkkQVqQF8NRfHE1D4M&X-Amz-Signature=0f02b385d1c7d3d50aa318a9ad7b09cfe26c0b833687fe87294fdaa619dd86af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHSIM4W%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQD6t1JX3FUpakeRcHHWYkxnFoUfcqhbxyKKvbkqDeccvgIhAIwE0eJgResSpONINFX8yPiQeSMvEtBpWwVytM7IsstwKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNmrbwwIXy0DyLsTIq3AMPnHJ0nqVs9%2Fd6Ufb%2FhZAfVlpBE56WHnTLITCykyd1rx5e%2B%2FQDZT3CW8hii7%2B3kObD%2BmmjeDkm8HlMRhJvMdX0qLIs5%2FdYbcTWwxHZYzty7kyllcir%2FIcYYisVO1jkG4o3OXayfV%2FqjTd4IEhplwHOUAZ5QL54xPzqFt5%2BKNk7BUmPdTocBKN%2B2BdBRj6zT6585DPNtlANiyf%2FidRvZbnQ981%2ByRe9C70TVE%2FvHVVZVTNxWij8xDO1YH4VZEcfWiPOP4lKIbwao7AqykOIqyLwN6GReAOFAoeyxniD1fpsfQFZsyjkOy28rEPF7snB%2BtiYmFYpbYeVzNo3YNCqJspzvaq6fePvVkXqz28dR1AQyae0TDB7qqBqKMXVpANFJaA265z9gdNzcixcWSskuj2soqBQVLUu7qeE9XYmAXUj6TAL9KXX0142mbTGxhkG3%2FJFE%2BQg6x4abECUnQBuy9ncby2M%2B0cslCH3P1jg5eoP6QqeydwpqFMXbLp6OewopG686i%2F5UTORm82L8gnf%2FmA6%2BePQTH85WeXB%2BkUq8WMlE5YAubM0HwFjjdsevMNtyHNcuSGCU8oHRatdJxN2J98pXBO63GqZOu0tAwDPjWyJWLXb74mhd%2BwVy8VB1zDsisvLBjqkAUZmFDdQLK74SXG0jC8ytxUkwG%2BcqSJ3fLGtMjSFRjMEXaZF%2FT72CaoDSG4mziovB%2FeFtFOdOUi%2Bk9HDyNWQ9e616wHx7l36uDThz3mtGU2%2FCJb58hUBgAU%2BId767r1mdZGfCRKMs1OsdAfhnMOwx3ntNE3cod8JnXDaRf%2BSONb4EMwZAVtIvLEcSKB4zQJ%2BO1BDTIo08uyMxKCRq%2BNRh0cpRWLe&X-Amz-Signature=29efb2487ef86e9f07b4324f0b29bb94b7e13ea2a949da4902f5ad0d2e15901e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHSIM4W%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQD6t1JX3FUpakeRcHHWYkxnFoUfcqhbxyKKvbkqDeccvgIhAIwE0eJgResSpONINFX8yPiQeSMvEtBpWwVytM7IsstwKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNmrbwwIXy0DyLsTIq3AMPnHJ0nqVs9%2Fd6Ufb%2FhZAfVlpBE56WHnTLITCykyd1rx5e%2B%2FQDZT3CW8hii7%2B3kObD%2BmmjeDkm8HlMRhJvMdX0qLIs5%2FdYbcTWwxHZYzty7kyllcir%2FIcYYisVO1jkG4o3OXayfV%2FqjTd4IEhplwHOUAZ5QL54xPzqFt5%2BKNk7BUmPdTocBKN%2B2BdBRj6zT6585DPNtlANiyf%2FidRvZbnQ981%2ByRe9C70TVE%2FvHVVZVTNxWij8xDO1YH4VZEcfWiPOP4lKIbwao7AqykOIqyLwN6GReAOFAoeyxniD1fpsfQFZsyjkOy28rEPF7snB%2BtiYmFYpbYeVzNo3YNCqJspzvaq6fePvVkXqz28dR1AQyae0TDB7qqBqKMXVpANFJaA265z9gdNzcixcWSskuj2soqBQVLUu7qeE9XYmAXUj6TAL9KXX0142mbTGxhkG3%2FJFE%2BQg6x4abECUnQBuy9ncby2M%2B0cslCH3P1jg5eoP6QqeydwpqFMXbLp6OewopG686i%2F5UTORm82L8gnf%2FmA6%2BePQTH85WeXB%2BkUq8WMlE5YAubM0HwFjjdsevMNtyHNcuSGCU8oHRatdJxN2J98pXBO63GqZOu0tAwDPjWyJWLXb74mhd%2BwVy8VB1zDsisvLBjqkAUZmFDdQLK74SXG0jC8ytxUkwG%2BcqSJ3fLGtMjSFRjMEXaZF%2FT72CaoDSG4mziovB%2FeFtFOdOUi%2Bk9HDyNWQ9e616wHx7l36uDThz3mtGU2%2FCJb58hUBgAU%2BId767r1mdZGfCRKMs1OsdAfhnMOwx3ntNE3cod8JnXDaRf%2BSONb4EMwZAVtIvLEcSKB4zQJ%2BO1BDTIo08uyMxKCRq%2BNRh0cpRWLe&X-Amz-Signature=acb01dd92510d24d4b926b868a7e40f4ded2a0e78d891f31a748937b6a14fcd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHSIM4W%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQD6t1JX3FUpakeRcHHWYkxnFoUfcqhbxyKKvbkqDeccvgIhAIwE0eJgResSpONINFX8yPiQeSMvEtBpWwVytM7IsstwKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNmrbwwIXy0DyLsTIq3AMPnHJ0nqVs9%2Fd6Ufb%2FhZAfVlpBE56WHnTLITCykyd1rx5e%2B%2FQDZT3CW8hii7%2B3kObD%2BmmjeDkm8HlMRhJvMdX0qLIs5%2FdYbcTWwxHZYzty7kyllcir%2FIcYYisVO1jkG4o3OXayfV%2FqjTd4IEhplwHOUAZ5QL54xPzqFt5%2BKNk7BUmPdTocBKN%2B2BdBRj6zT6585DPNtlANiyf%2FidRvZbnQ981%2ByRe9C70TVE%2FvHVVZVTNxWij8xDO1YH4VZEcfWiPOP4lKIbwao7AqykOIqyLwN6GReAOFAoeyxniD1fpsfQFZsyjkOy28rEPF7snB%2BtiYmFYpbYeVzNo3YNCqJspzvaq6fePvVkXqz28dR1AQyae0TDB7qqBqKMXVpANFJaA265z9gdNzcixcWSskuj2soqBQVLUu7qeE9XYmAXUj6TAL9KXX0142mbTGxhkG3%2FJFE%2BQg6x4abECUnQBuy9ncby2M%2B0cslCH3P1jg5eoP6QqeydwpqFMXbLp6OewopG686i%2F5UTORm82L8gnf%2FmA6%2BePQTH85WeXB%2BkUq8WMlE5YAubM0HwFjjdsevMNtyHNcuSGCU8oHRatdJxN2J98pXBO63GqZOu0tAwDPjWyJWLXb74mhd%2BwVy8VB1zDsisvLBjqkAUZmFDdQLK74SXG0jC8ytxUkwG%2BcqSJ3fLGtMjSFRjMEXaZF%2FT72CaoDSG4mziovB%2FeFtFOdOUi%2Bk9HDyNWQ9e616wHx7l36uDThz3mtGU2%2FCJb58hUBgAU%2BId767r1mdZGfCRKMs1OsdAfhnMOwx3ntNE3cod8JnXDaRf%2BSONb4EMwZAVtIvLEcSKB4zQJ%2BO1BDTIo08uyMxKCRq%2BNRh0cpRWLe&X-Amz-Signature=586f802f4da6e53b3ed801e4ff060f4d4c2ce5215ae152b9465a2f0d58c2f4a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHSIM4W%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQD6t1JX3FUpakeRcHHWYkxnFoUfcqhbxyKKvbkqDeccvgIhAIwE0eJgResSpONINFX8yPiQeSMvEtBpWwVytM7IsstwKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNmrbwwIXy0DyLsTIq3AMPnHJ0nqVs9%2Fd6Ufb%2FhZAfVlpBE56WHnTLITCykyd1rx5e%2B%2FQDZT3CW8hii7%2B3kObD%2BmmjeDkm8HlMRhJvMdX0qLIs5%2FdYbcTWwxHZYzty7kyllcir%2FIcYYisVO1jkG4o3OXayfV%2FqjTd4IEhplwHOUAZ5QL54xPzqFt5%2BKNk7BUmPdTocBKN%2B2BdBRj6zT6585DPNtlANiyf%2FidRvZbnQ981%2ByRe9C70TVE%2FvHVVZVTNxWij8xDO1YH4VZEcfWiPOP4lKIbwao7AqykOIqyLwN6GReAOFAoeyxniD1fpsfQFZsyjkOy28rEPF7snB%2BtiYmFYpbYeVzNo3YNCqJspzvaq6fePvVkXqz28dR1AQyae0TDB7qqBqKMXVpANFJaA265z9gdNzcixcWSskuj2soqBQVLUu7qeE9XYmAXUj6TAL9KXX0142mbTGxhkG3%2FJFE%2BQg6x4abECUnQBuy9ncby2M%2B0cslCH3P1jg5eoP6QqeydwpqFMXbLp6OewopG686i%2F5UTORm82L8gnf%2FmA6%2BePQTH85WeXB%2BkUq8WMlE5YAubM0HwFjjdsevMNtyHNcuSGCU8oHRatdJxN2J98pXBO63GqZOu0tAwDPjWyJWLXb74mhd%2BwVy8VB1zDsisvLBjqkAUZmFDdQLK74SXG0jC8ytxUkwG%2BcqSJ3fLGtMjSFRjMEXaZF%2FT72CaoDSG4mziovB%2FeFtFOdOUi%2Bk9HDyNWQ9e616wHx7l36uDThz3mtGU2%2FCJb58hUBgAU%2BId767r1mdZGfCRKMs1OsdAfhnMOwx3ntNE3cod8JnXDaRf%2BSONb4EMwZAVtIvLEcSKB4zQJ%2BO1BDTIo08uyMxKCRq%2BNRh0cpRWLe&X-Amz-Signature=95270a3b8c7353047935795ae795d7922fa7ce50fec083b3de726d76a792bd0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHSIM4W%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQD6t1JX3FUpakeRcHHWYkxnFoUfcqhbxyKKvbkqDeccvgIhAIwE0eJgResSpONINFX8yPiQeSMvEtBpWwVytM7IsstwKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNmrbwwIXy0DyLsTIq3AMPnHJ0nqVs9%2Fd6Ufb%2FhZAfVlpBE56WHnTLITCykyd1rx5e%2B%2FQDZT3CW8hii7%2B3kObD%2BmmjeDkm8HlMRhJvMdX0qLIs5%2FdYbcTWwxHZYzty7kyllcir%2FIcYYisVO1jkG4o3OXayfV%2FqjTd4IEhplwHOUAZ5QL54xPzqFt5%2BKNk7BUmPdTocBKN%2B2BdBRj6zT6585DPNtlANiyf%2FidRvZbnQ981%2ByRe9C70TVE%2FvHVVZVTNxWij8xDO1YH4VZEcfWiPOP4lKIbwao7AqykOIqyLwN6GReAOFAoeyxniD1fpsfQFZsyjkOy28rEPF7snB%2BtiYmFYpbYeVzNo3YNCqJspzvaq6fePvVkXqz28dR1AQyae0TDB7qqBqKMXVpANFJaA265z9gdNzcixcWSskuj2soqBQVLUu7qeE9XYmAXUj6TAL9KXX0142mbTGxhkG3%2FJFE%2BQg6x4abECUnQBuy9ncby2M%2B0cslCH3P1jg5eoP6QqeydwpqFMXbLp6OewopG686i%2F5UTORm82L8gnf%2FmA6%2BePQTH85WeXB%2BkUq8WMlE5YAubM0HwFjjdsevMNtyHNcuSGCU8oHRatdJxN2J98pXBO63GqZOu0tAwDPjWyJWLXb74mhd%2BwVy8VB1zDsisvLBjqkAUZmFDdQLK74SXG0jC8ytxUkwG%2BcqSJ3fLGtMjSFRjMEXaZF%2FT72CaoDSG4mziovB%2FeFtFOdOUi%2Bk9HDyNWQ9e616wHx7l36uDThz3mtGU2%2FCJb58hUBgAU%2BId767r1mdZGfCRKMs1OsdAfhnMOwx3ntNE3cod8JnXDaRf%2BSONb4EMwZAVtIvLEcSKB4zQJ%2BO1BDTIo08uyMxKCRq%2BNRh0cpRWLe&X-Amz-Signature=f4611945b6c9d025b0da979340e99958ce7a88bdcc24c58dee268e7692b87475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHSIM4W%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQD6t1JX3FUpakeRcHHWYkxnFoUfcqhbxyKKvbkqDeccvgIhAIwE0eJgResSpONINFX8yPiQeSMvEtBpWwVytM7IsstwKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNmrbwwIXy0DyLsTIq3AMPnHJ0nqVs9%2Fd6Ufb%2FhZAfVlpBE56WHnTLITCykyd1rx5e%2B%2FQDZT3CW8hii7%2B3kObD%2BmmjeDkm8HlMRhJvMdX0qLIs5%2FdYbcTWwxHZYzty7kyllcir%2FIcYYisVO1jkG4o3OXayfV%2FqjTd4IEhplwHOUAZ5QL54xPzqFt5%2BKNk7BUmPdTocBKN%2B2BdBRj6zT6585DPNtlANiyf%2FidRvZbnQ981%2ByRe9C70TVE%2FvHVVZVTNxWij8xDO1YH4VZEcfWiPOP4lKIbwao7AqykOIqyLwN6GReAOFAoeyxniD1fpsfQFZsyjkOy28rEPF7snB%2BtiYmFYpbYeVzNo3YNCqJspzvaq6fePvVkXqz28dR1AQyae0TDB7qqBqKMXVpANFJaA265z9gdNzcixcWSskuj2soqBQVLUu7qeE9XYmAXUj6TAL9KXX0142mbTGxhkG3%2FJFE%2BQg6x4abECUnQBuy9ncby2M%2B0cslCH3P1jg5eoP6QqeydwpqFMXbLp6OewopG686i%2F5UTORm82L8gnf%2FmA6%2BePQTH85WeXB%2BkUq8WMlE5YAubM0HwFjjdsevMNtyHNcuSGCU8oHRatdJxN2J98pXBO63GqZOu0tAwDPjWyJWLXb74mhd%2BwVy8VB1zDsisvLBjqkAUZmFDdQLK74SXG0jC8ytxUkwG%2BcqSJ3fLGtMjSFRjMEXaZF%2FT72CaoDSG4mziovB%2FeFtFOdOUi%2Bk9HDyNWQ9e616wHx7l36uDThz3mtGU2%2FCJb58hUBgAU%2BId767r1mdZGfCRKMs1OsdAfhnMOwx3ntNE3cod8JnXDaRf%2BSONb4EMwZAVtIvLEcSKB4zQJ%2BO1BDTIo08uyMxKCRq%2BNRh0cpRWLe&X-Amz-Signature=b5011e4271c97ad477e8fde8c9e090dff5b71daeb1af06da16b71e7ab22ea692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


