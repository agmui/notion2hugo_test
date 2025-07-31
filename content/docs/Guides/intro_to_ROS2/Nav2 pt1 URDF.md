---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-30T10:15:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-30T10:15:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Q42BAM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsA4jq%2FGdfhwnEVV%2FdGRRucpZ3E5l6jRYV4rdZMaq%2B6AiBy4F2esvE4RGcymi4lkCLOzsaEjhjI9p5uLWWQJ3JfKiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPXLS1IUShZpLwnAyKtwDXs%2FruADnOH7EKKz5NMNCLurS44qhYcfsCWdHmMhzpWvAXBvF2dQs3635xmeADfB9UftbG%2FqGsV%2BA8gHBjPwwpuAd%2FuZmGb%2B5wdq2V4Hq41EI%2Fak1z4qtcZ7ZQ9lNMwO4viOXwbl6fFM%2BX5T7bqgd4yz1Ooxih7xC%2BgdXWMusJWDDkzrwDDy4YHyje3RegMpAt8pza0d9S3Uq9ovlQS3g7WKD3c8sqtBc5gDOqxmF4iUmiJU6IuNA%2FqDN%2Fkp1UToRkCr2VDpss7kEQ21JRjNFMHz4SZJxePn%2FT3tapHb5sf090mwYWWZ%2BfXd%2FyfrqzGT3XIv3Xm0OXAz6lWdYzPDkqkeeh3StWd197b4ikwAKeAxiZqPUICNTeTJt9Mvmbr6%2BLFOEkONrwq8ARdoVpqiMmPX%2FsmvJWbjutlKVd2pgnrgR7GJ%2BNM1yMvZFIo%2BdYhjMIUDlwodG%2FyBfQ%2FPEwUyoPDGdkWuLlHUr%2BZX0iMRlcverAq%2BUO6J5Ltjww5RVLM58nVPKWrmzXZgGPfIEI1sXFNfn5hTm%2FEPN2DtU8DAtJjKTznahHAyDwzQnGBUUFjvUacQI1JTZSsW8wD3hco75KTGQ58nK2%2FIixJUXmZwiwxjmzhQbpON2ASmO4JAwnJGuxAY6pgF91JxATxXiGZOyKM62D5NAK0kt%2BsE9Ju59wDs96JDE8xVDzxtZXqiKQ06Kn%2Bz8U2fgSR5%2BmyjDhZPOhZw57SLImZVuNaJtWnNE3w8tnS9GSsw0FCaGD4G03I8B1NuA%2BHxinmQhxXq578WPqgSApQffCBID1WPbLjlYeXW2%2FqRLmg3sG7D5aL1OFIykqHnTRba4zFcFs6K%2ByBZAT0HUOxV%2FJifTyP8%2F&X-Amz-Signature=1f07a4d4ecc81b8ceab68393a4faa014af34a5f2e3df588366967457c109c799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Q42BAM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsA4jq%2FGdfhwnEVV%2FdGRRucpZ3E5l6jRYV4rdZMaq%2B6AiBy4F2esvE4RGcymi4lkCLOzsaEjhjI9p5uLWWQJ3JfKiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPXLS1IUShZpLwnAyKtwDXs%2FruADnOH7EKKz5NMNCLurS44qhYcfsCWdHmMhzpWvAXBvF2dQs3635xmeADfB9UftbG%2FqGsV%2BA8gHBjPwwpuAd%2FuZmGb%2B5wdq2V4Hq41EI%2Fak1z4qtcZ7ZQ9lNMwO4viOXwbl6fFM%2BX5T7bqgd4yz1Ooxih7xC%2BgdXWMusJWDDkzrwDDy4YHyje3RegMpAt8pza0d9S3Uq9ovlQS3g7WKD3c8sqtBc5gDOqxmF4iUmiJU6IuNA%2FqDN%2Fkp1UToRkCr2VDpss7kEQ21JRjNFMHz4SZJxePn%2FT3tapHb5sf090mwYWWZ%2BfXd%2FyfrqzGT3XIv3Xm0OXAz6lWdYzPDkqkeeh3StWd197b4ikwAKeAxiZqPUICNTeTJt9Mvmbr6%2BLFOEkONrwq8ARdoVpqiMmPX%2FsmvJWbjutlKVd2pgnrgR7GJ%2BNM1yMvZFIo%2BdYhjMIUDlwodG%2FyBfQ%2FPEwUyoPDGdkWuLlHUr%2BZX0iMRlcverAq%2BUO6J5Ltjww5RVLM58nVPKWrmzXZgGPfIEI1sXFNfn5hTm%2FEPN2DtU8DAtJjKTznahHAyDwzQnGBUUFjvUacQI1JTZSsW8wD3hco75KTGQ58nK2%2FIixJUXmZwiwxjmzhQbpON2ASmO4JAwnJGuxAY6pgF91JxATxXiGZOyKM62D5NAK0kt%2BsE9Ju59wDs96JDE8xVDzxtZXqiKQ06Kn%2Bz8U2fgSR5%2BmyjDhZPOhZw57SLImZVuNaJtWnNE3w8tnS9GSsw0FCaGD4G03I8B1NuA%2BHxinmQhxXq578WPqgSApQffCBID1WPbLjlYeXW2%2FqRLmg3sG7D5aL1OFIykqHnTRba4zFcFs6K%2ByBZAT0HUOxV%2FJifTyP8%2F&X-Amz-Signature=6876cd600c681c20a67b2a8a85ed9d5095830f00b88b5be1af3812ce557004fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Q42BAM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsA4jq%2FGdfhwnEVV%2FdGRRucpZ3E5l6jRYV4rdZMaq%2B6AiBy4F2esvE4RGcymi4lkCLOzsaEjhjI9p5uLWWQJ3JfKiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPXLS1IUShZpLwnAyKtwDXs%2FruADnOH7EKKz5NMNCLurS44qhYcfsCWdHmMhzpWvAXBvF2dQs3635xmeADfB9UftbG%2FqGsV%2BA8gHBjPwwpuAd%2FuZmGb%2B5wdq2V4Hq41EI%2Fak1z4qtcZ7ZQ9lNMwO4viOXwbl6fFM%2BX5T7bqgd4yz1Ooxih7xC%2BgdXWMusJWDDkzrwDDy4YHyje3RegMpAt8pza0d9S3Uq9ovlQS3g7WKD3c8sqtBc5gDOqxmF4iUmiJU6IuNA%2FqDN%2Fkp1UToRkCr2VDpss7kEQ21JRjNFMHz4SZJxePn%2FT3tapHb5sf090mwYWWZ%2BfXd%2FyfrqzGT3XIv3Xm0OXAz6lWdYzPDkqkeeh3StWd197b4ikwAKeAxiZqPUICNTeTJt9Mvmbr6%2BLFOEkONrwq8ARdoVpqiMmPX%2FsmvJWbjutlKVd2pgnrgR7GJ%2BNM1yMvZFIo%2BdYhjMIUDlwodG%2FyBfQ%2FPEwUyoPDGdkWuLlHUr%2BZX0iMRlcverAq%2BUO6J5Ltjww5RVLM58nVPKWrmzXZgGPfIEI1sXFNfn5hTm%2FEPN2DtU8DAtJjKTznahHAyDwzQnGBUUFjvUacQI1JTZSsW8wD3hco75KTGQ58nK2%2FIixJUXmZwiwxjmzhQbpON2ASmO4JAwnJGuxAY6pgF91JxATxXiGZOyKM62D5NAK0kt%2BsE9Ju59wDs96JDE8xVDzxtZXqiKQ06Kn%2Bz8U2fgSR5%2BmyjDhZPOhZw57SLImZVuNaJtWnNE3w8tnS9GSsw0FCaGD4G03I8B1NuA%2BHxinmQhxXq578WPqgSApQffCBID1WPbLjlYeXW2%2FqRLmg3sG7D5aL1OFIykqHnTRba4zFcFs6K%2ByBZAT0HUOxV%2FJifTyP8%2F&X-Amz-Signature=db68d8d2a26137477af9366a20a203659272087bffd709a67e05cc2176ffb2a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Q42BAM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsA4jq%2FGdfhwnEVV%2FdGRRucpZ3E5l6jRYV4rdZMaq%2B6AiBy4F2esvE4RGcymi4lkCLOzsaEjhjI9p5uLWWQJ3JfKiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPXLS1IUShZpLwnAyKtwDXs%2FruADnOH7EKKz5NMNCLurS44qhYcfsCWdHmMhzpWvAXBvF2dQs3635xmeADfB9UftbG%2FqGsV%2BA8gHBjPwwpuAd%2FuZmGb%2B5wdq2V4Hq41EI%2Fak1z4qtcZ7ZQ9lNMwO4viOXwbl6fFM%2BX5T7bqgd4yz1Ooxih7xC%2BgdXWMusJWDDkzrwDDy4YHyje3RegMpAt8pza0d9S3Uq9ovlQS3g7WKD3c8sqtBc5gDOqxmF4iUmiJU6IuNA%2FqDN%2Fkp1UToRkCr2VDpss7kEQ21JRjNFMHz4SZJxePn%2FT3tapHb5sf090mwYWWZ%2BfXd%2FyfrqzGT3XIv3Xm0OXAz6lWdYzPDkqkeeh3StWd197b4ikwAKeAxiZqPUICNTeTJt9Mvmbr6%2BLFOEkONrwq8ARdoVpqiMmPX%2FsmvJWbjutlKVd2pgnrgR7GJ%2BNM1yMvZFIo%2BdYhjMIUDlwodG%2FyBfQ%2FPEwUyoPDGdkWuLlHUr%2BZX0iMRlcverAq%2BUO6J5Ltjww5RVLM58nVPKWrmzXZgGPfIEI1sXFNfn5hTm%2FEPN2DtU8DAtJjKTznahHAyDwzQnGBUUFjvUacQI1JTZSsW8wD3hco75KTGQ58nK2%2FIixJUXmZwiwxjmzhQbpON2ASmO4JAwnJGuxAY6pgF91JxATxXiGZOyKM62D5NAK0kt%2BsE9Ju59wDs96JDE8xVDzxtZXqiKQ06Kn%2Bz8U2fgSR5%2BmyjDhZPOhZw57SLImZVuNaJtWnNE3w8tnS9GSsw0FCaGD4G03I8B1NuA%2BHxinmQhxXq578WPqgSApQffCBID1WPbLjlYeXW2%2FqRLmg3sG7D5aL1OFIykqHnTRba4zFcFs6K%2ByBZAT0HUOxV%2FJifTyP8%2F&X-Amz-Signature=62ffef6ff84d32760debfc1f935b99e75374ed8cb8877b7b1609fad87a051183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Q42BAM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsA4jq%2FGdfhwnEVV%2FdGRRucpZ3E5l6jRYV4rdZMaq%2B6AiBy4F2esvE4RGcymi4lkCLOzsaEjhjI9p5uLWWQJ3JfKiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPXLS1IUShZpLwnAyKtwDXs%2FruADnOH7EKKz5NMNCLurS44qhYcfsCWdHmMhzpWvAXBvF2dQs3635xmeADfB9UftbG%2FqGsV%2BA8gHBjPwwpuAd%2FuZmGb%2B5wdq2V4Hq41EI%2Fak1z4qtcZ7ZQ9lNMwO4viOXwbl6fFM%2BX5T7bqgd4yz1Ooxih7xC%2BgdXWMusJWDDkzrwDDy4YHyje3RegMpAt8pza0d9S3Uq9ovlQS3g7WKD3c8sqtBc5gDOqxmF4iUmiJU6IuNA%2FqDN%2Fkp1UToRkCr2VDpss7kEQ21JRjNFMHz4SZJxePn%2FT3tapHb5sf090mwYWWZ%2BfXd%2FyfrqzGT3XIv3Xm0OXAz6lWdYzPDkqkeeh3StWd197b4ikwAKeAxiZqPUICNTeTJt9Mvmbr6%2BLFOEkONrwq8ARdoVpqiMmPX%2FsmvJWbjutlKVd2pgnrgR7GJ%2BNM1yMvZFIo%2BdYhjMIUDlwodG%2FyBfQ%2FPEwUyoPDGdkWuLlHUr%2BZX0iMRlcverAq%2BUO6J5Ltjww5RVLM58nVPKWrmzXZgGPfIEI1sXFNfn5hTm%2FEPN2DtU8DAtJjKTznahHAyDwzQnGBUUFjvUacQI1JTZSsW8wD3hco75KTGQ58nK2%2FIixJUXmZwiwxjmzhQbpON2ASmO4JAwnJGuxAY6pgF91JxATxXiGZOyKM62D5NAK0kt%2BsE9Ju59wDs96JDE8xVDzxtZXqiKQ06Kn%2Bz8U2fgSR5%2BmyjDhZPOhZw57SLImZVuNaJtWnNE3w8tnS9GSsw0FCaGD4G03I8B1NuA%2BHxinmQhxXq578WPqgSApQffCBID1WPbLjlYeXW2%2FqRLmg3sG7D5aL1OFIykqHnTRba4zFcFs6K%2ByBZAT0HUOxV%2FJifTyP8%2F&X-Amz-Signature=d4008884546c88ca8b58ef8efa670fc6601969b3b72b56701cc9674606306beb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Q42BAM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsA4jq%2FGdfhwnEVV%2FdGRRucpZ3E5l6jRYV4rdZMaq%2B6AiBy4F2esvE4RGcymi4lkCLOzsaEjhjI9p5uLWWQJ3JfKiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPXLS1IUShZpLwnAyKtwDXs%2FruADnOH7EKKz5NMNCLurS44qhYcfsCWdHmMhzpWvAXBvF2dQs3635xmeADfB9UftbG%2FqGsV%2BA8gHBjPwwpuAd%2FuZmGb%2B5wdq2V4Hq41EI%2Fak1z4qtcZ7ZQ9lNMwO4viOXwbl6fFM%2BX5T7bqgd4yz1Ooxih7xC%2BgdXWMusJWDDkzrwDDy4YHyje3RegMpAt8pza0d9S3Uq9ovlQS3g7WKD3c8sqtBc5gDOqxmF4iUmiJU6IuNA%2FqDN%2Fkp1UToRkCr2VDpss7kEQ21JRjNFMHz4SZJxePn%2FT3tapHb5sf090mwYWWZ%2BfXd%2FyfrqzGT3XIv3Xm0OXAz6lWdYzPDkqkeeh3StWd197b4ikwAKeAxiZqPUICNTeTJt9Mvmbr6%2BLFOEkONrwq8ARdoVpqiMmPX%2FsmvJWbjutlKVd2pgnrgR7GJ%2BNM1yMvZFIo%2BdYhjMIUDlwodG%2FyBfQ%2FPEwUyoPDGdkWuLlHUr%2BZX0iMRlcverAq%2BUO6J5Ltjww5RVLM58nVPKWrmzXZgGPfIEI1sXFNfn5hTm%2FEPN2DtU8DAtJjKTznahHAyDwzQnGBUUFjvUacQI1JTZSsW8wD3hco75KTGQ58nK2%2FIixJUXmZwiwxjmzhQbpON2ASmO4JAwnJGuxAY6pgF91JxATxXiGZOyKM62D5NAK0kt%2BsE9Ju59wDs96JDE8xVDzxtZXqiKQ06Kn%2Bz8U2fgSR5%2BmyjDhZPOhZw57SLImZVuNaJtWnNE3w8tnS9GSsw0FCaGD4G03I8B1NuA%2BHxinmQhxXq578WPqgSApQffCBID1WPbLjlYeXW2%2FqRLmg3sG7D5aL1OFIykqHnTRba4zFcFs6K%2ByBZAT0HUOxV%2FJifTyP8%2F&X-Amz-Signature=3dd50f1236c44789ade917c8d30f30ede2d782898b168d324858057720b6b78d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Q42BAM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsA4jq%2FGdfhwnEVV%2FdGRRucpZ3E5l6jRYV4rdZMaq%2B6AiBy4F2esvE4RGcymi4lkCLOzsaEjhjI9p5uLWWQJ3JfKiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPXLS1IUShZpLwnAyKtwDXs%2FruADnOH7EKKz5NMNCLurS44qhYcfsCWdHmMhzpWvAXBvF2dQs3635xmeADfB9UftbG%2FqGsV%2BA8gHBjPwwpuAd%2FuZmGb%2B5wdq2V4Hq41EI%2Fak1z4qtcZ7ZQ9lNMwO4viOXwbl6fFM%2BX5T7bqgd4yz1Ooxih7xC%2BgdXWMusJWDDkzrwDDy4YHyje3RegMpAt8pza0d9S3Uq9ovlQS3g7WKD3c8sqtBc5gDOqxmF4iUmiJU6IuNA%2FqDN%2Fkp1UToRkCr2VDpss7kEQ21JRjNFMHz4SZJxePn%2FT3tapHb5sf090mwYWWZ%2BfXd%2FyfrqzGT3XIv3Xm0OXAz6lWdYzPDkqkeeh3StWd197b4ikwAKeAxiZqPUICNTeTJt9Mvmbr6%2BLFOEkONrwq8ARdoVpqiMmPX%2FsmvJWbjutlKVd2pgnrgR7GJ%2BNM1yMvZFIo%2BdYhjMIUDlwodG%2FyBfQ%2FPEwUyoPDGdkWuLlHUr%2BZX0iMRlcverAq%2BUO6J5Ltjww5RVLM58nVPKWrmzXZgGPfIEI1sXFNfn5hTm%2FEPN2DtU8DAtJjKTznahHAyDwzQnGBUUFjvUacQI1JTZSsW8wD3hco75KTGQ58nK2%2FIixJUXmZwiwxjmzhQbpON2ASmO4JAwnJGuxAY6pgF91JxATxXiGZOyKM62D5NAK0kt%2BsE9Ju59wDs96JDE8xVDzxtZXqiKQ06Kn%2Bz8U2fgSR5%2BmyjDhZPOhZw57SLImZVuNaJtWnNE3w8tnS9GSsw0FCaGD4G03I8B1NuA%2BHxinmQhxXq578WPqgSApQffCBID1WPbLjlYeXW2%2FqRLmg3sG7D5aL1OFIykqHnTRba4zFcFs6K%2ByBZAT0HUOxV%2FJifTyP8%2F&X-Amz-Signature=08a37dd0fd85347c4f2f55859385c39c6a7ce799963cb5ef1089746e3da14803&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Q42BAM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsA4jq%2FGdfhwnEVV%2FdGRRucpZ3E5l6jRYV4rdZMaq%2B6AiBy4F2esvE4RGcymi4lkCLOzsaEjhjI9p5uLWWQJ3JfKiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPXLS1IUShZpLwnAyKtwDXs%2FruADnOH7EKKz5NMNCLurS44qhYcfsCWdHmMhzpWvAXBvF2dQs3635xmeADfB9UftbG%2FqGsV%2BA8gHBjPwwpuAd%2FuZmGb%2B5wdq2V4Hq41EI%2Fak1z4qtcZ7ZQ9lNMwO4viOXwbl6fFM%2BX5T7bqgd4yz1Ooxih7xC%2BgdXWMusJWDDkzrwDDy4YHyje3RegMpAt8pza0d9S3Uq9ovlQS3g7WKD3c8sqtBc5gDOqxmF4iUmiJU6IuNA%2FqDN%2Fkp1UToRkCr2VDpss7kEQ21JRjNFMHz4SZJxePn%2FT3tapHb5sf090mwYWWZ%2BfXd%2FyfrqzGT3XIv3Xm0OXAz6lWdYzPDkqkeeh3StWd197b4ikwAKeAxiZqPUICNTeTJt9Mvmbr6%2BLFOEkONrwq8ARdoVpqiMmPX%2FsmvJWbjutlKVd2pgnrgR7GJ%2BNM1yMvZFIo%2BdYhjMIUDlwodG%2FyBfQ%2FPEwUyoPDGdkWuLlHUr%2BZX0iMRlcverAq%2BUO6J5Ltjww5RVLM58nVPKWrmzXZgGPfIEI1sXFNfn5hTm%2FEPN2DtU8DAtJjKTznahHAyDwzQnGBUUFjvUacQI1JTZSsW8wD3hco75KTGQ58nK2%2FIixJUXmZwiwxjmzhQbpON2ASmO4JAwnJGuxAY6pgF91JxATxXiGZOyKM62D5NAK0kt%2BsE9Ju59wDs96JDE8xVDzxtZXqiKQ06Kn%2Bz8U2fgSR5%2BmyjDhZPOhZw57SLImZVuNaJtWnNE3w8tnS9GSsw0FCaGD4G03I8B1NuA%2BHxinmQhxXq578WPqgSApQffCBID1WPbLjlYeXW2%2FqRLmg3sG7D5aL1OFIykqHnTRba4zFcFs6K%2ByBZAT0HUOxV%2FJifTyP8%2F&X-Amz-Signature=7a77eeb11a802ff6d3b278598af79a89a0165bffb56d853362124a2f9aef8b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Q42BAM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsA4jq%2FGdfhwnEVV%2FdGRRucpZ3E5l6jRYV4rdZMaq%2B6AiBy4F2esvE4RGcymi4lkCLOzsaEjhjI9p5uLWWQJ3JfKiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPXLS1IUShZpLwnAyKtwDXs%2FruADnOH7EKKz5NMNCLurS44qhYcfsCWdHmMhzpWvAXBvF2dQs3635xmeADfB9UftbG%2FqGsV%2BA8gHBjPwwpuAd%2FuZmGb%2B5wdq2V4Hq41EI%2Fak1z4qtcZ7ZQ9lNMwO4viOXwbl6fFM%2BX5T7bqgd4yz1Ooxih7xC%2BgdXWMusJWDDkzrwDDy4YHyje3RegMpAt8pza0d9S3Uq9ovlQS3g7WKD3c8sqtBc5gDOqxmF4iUmiJU6IuNA%2FqDN%2Fkp1UToRkCr2VDpss7kEQ21JRjNFMHz4SZJxePn%2FT3tapHb5sf090mwYWWZ%2BfXd%2FyfrqzGT3XIv3Xm0OXAz6lWdYzPDkqkeeh3StWd197b4ikwAKeAxiZqPUICNTeTJt9Mvmbr6%2BLFOEkONrwq8ARdoVpqiMmPX%2FsmvJWbjutlKVd2pgnrgR7GJ%2BNM1yMvZFIo%2BdYhjMIUDlwodG%2FyBfQ%2FPEwUyoPDGdkWuLlHUr%2BZX0iMRlcverAq%2BUO6J5Ltjww5RVLM58nVPKWrmzXZgGPfIEI1sXFNfn5hTm%2FEPN2DtU8DAtJjKTznahHAyDwzQnGBUUFjvUacQI1JTZSsW8wD3hco75KTGQ58nK2%2FIixJUXmZwiwxjmzhQbpON2ASmO4JAwnJGuxAY6pgF91JxATxXiGZOyKM62D5NAK0kt%2BsE9Ju59wDs96JDE8xVDzxtZXqiKQ06Kn%2Bz8U2fgSR5%2BmyjDhZPOhZw57SLImZVuNaJtWnNE3w8tnS9GSsw0FCaGD4G03I8B1NuA%2BHxinmQhxXq578WPqgSApQffCBID1WPbLjlYeXW2%2FqRLmg3sG7D5aL1OFIykqHnTRba4zFcFs6K%2ByBZAT0HUOxV%2FJifTyP8%2F&X-Amz-Signature=b5c0fc95881a798c629f48e9b889ebbd7c3788de4f004afc1094edc47dfdf967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Q42BAM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsA4jq%2FGdfhwnEVV%2FdGRRucpZ3E5l6jRYV4rdZMaq%2B6AiBy4F2esvE4RGcymi4lkCLOzsaEjhjI9p5uLWWQJ3JfKiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPXLS1IUShZpLwnAyKtwDXs%2FruADnOH7EKKz5NMNCLurS44qhYcfsCWdHmMhzpWvAXBvF2dQs3635xmeADfB9UftbG%2FqGsV%2BA8gHBjPwwpuAd%2FuZmGb%2B5wdq2V4Hq41EI%2Fak1z4qtcZ7ZQ9lNMwO4viOXwbl6fFM%2BX5T7bqgd4yz1Ooxih7xC%2BgdXWMusJWDDkzrwDDy4YHyje3RegMpAt8pza0d9S3Uq9ovlQS3g7WKD3c8sqtBc5gDOqxmF4iUmiJU6IuNA%2FqDN%2Fkp1UToRkCr2VDpss7kEQ21JRjNFMHz4SZJxePn%2FT3tapHb5sf090mwYWWZ%2BfXd%2FyfrqzGT3XIv3Xm0OXAz6lWdYzPDkqkeeh3StWd197b4ikwAKeAxiZqPUICNTeTJt9Mvmbr6%2BLFOEkONrwq8ARdoVpqiMmPX%2FsmvJWbjutlKVd2pgnrgR7GJ%2BNM1yMvZFIo%2BdYhjMIUDlwodG%2FyBfQ%2FPEwUyoPDGdkWuLlHUr%2BZX0iMRlcverAq%2BUO6J5Ltjww5RVLM58nVPKWrmzXZgGPfIEI1sXFNfn5hTm%2FEPN2DtU8DAtJjKTznahHAyDwzQnGBUUFjvUacQI1JTZSsW8wD3hco75KTGQ58nK2%2FIixJUXmZwiwxjmzhQbpON2ASmO4JAwnJGuxAY6pgF91JxATxXiGZOyKM62D5NAK0kt%2BsE9Ju59wDs96JDE8xVDzxtZXqiKQ06Kn%2Bz8U2fgSR5%2BmyjDhZPOhZw57SLImZVuNaJtWnNE3w8tnS9GSsw0FCaGD4G03I8B1NuA%2BHxinmQhxXq578WPqgSApQffCBID1WPbLjlYeXW2%2FqRLmg3sG7D5aL1OFIykqHnTRba4zFcFs6K%2ByBZAT0HUOxV%2FJifTyP8%2F&X-Amz-Signature=20e02aa5ac70fb189202a602974c46467d3110b3efbe134a0b879bb641817715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

Types of blocks in URDF:

- robot
- vars/Properties
- macros
- link:
	- visual
		- geometry
		- material
	- collision
		- origin
		- geometry
		- friction
	- inertial
- joint:
	- parent
	- child
	- origin

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Q42BAM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsA4jq%2FGdfhwnEVV%2FdGRRucpZ3E5l6jRYV4rdZMaq%2B6AiBy4F2esvE4RGcymi4lkCLOzsaEjhjI9p5uLWWQJ3JfKiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPXLS1IUShZpLwnAyKtwDXs%2FruADnOH7EKKz5NMNCLurS44qhYcfsCWdHmMhzpWvAXBvF2dQs3635xmeADfB9UftbG%2FqGsV%2BA8gHBjPwwpuAd%2FuZmGb%2B5wdq2V4Hq41EI%2Fak1z4qtcZ7ZQ9lNMwO4viOXwbl6fFM%2BX5T7bqgd4yz1Ooxih7xC%2BgdXWMusJWDDkzrwDDy4YHyje3RegMpAt8pza0d9S3Uq9ovlQS3g7WKD3c8sqtBc5gDOqxmF4iUmiJU6IuNA%2FqDN%2Fkp1UToRkCr2VDpss7kEQ21JRjNFMHz4SZJxePn%2FT3tapHb5sf090mwYWWZ%2BfXd%2FyfrqzGT3XIv3Xm0OXAz6lWdYzPDkqkeeh3StWd197b4ikwAKeAxiZqPUICNTeTJt9Mvmbr6%2BLFOEkONrwq8ARdoVpqiMmPX%2FsmvJWbjutlKVd2pgnrgR7GJ%2BNM1yMvZFIo%2BdYhjMIUDlwodG%2FyBfQ%2FPEwUyoPDGdkWuLlHUr%2BZX0iMRlcverAq%2BUO6J5Ltjww5RVLM58nVPKWrmzXZgGPfIEI1sXFNfn5hTm%2FEPN2DtU8DAtJjKTznahHAyDwzQnGBUUFjvUacQI1JTZSsW8wD3hco75KTGQ58nK2%2FIixJUXmZwiwxjmzhQbpON2ASmO4JAwnJGuxAY6pgF91JxATxXiGZOyKM62D5NAK0kt%2BsE9Ju59wDs96JDE8xVDzxtZXqiKQ06Kn%2Bz8U2fgSR5%2BmyjDhZPOhZw57SLImZVuNaJtWnNE3w8tnS9GSsw0FCaGD4G03I8B1NuA%2BHxinmQhxXq578WPqgSApQffCBID1WPbLjlYeXW2%2FqRLmg3sG7D5aL1OFIykqHnTRba4zFcFs6K%2ByBZAT0HUOxV%2FJifTyP8%2F&X-Amz-Signature=0edb272135b5a6f84ee2910d80083b8b29232d46c4f60564d67ce6b347597b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Q42BAM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsA4jq%2FGdfhwnEVV%2FdGRRucpZ3E5l6jRYV4rdZMaq%2B6AiBy4F2esvE4RGcymi4lkCLOzsaEjhjI9p5uLWWQJ3JfKiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPXLS1IUShZpLwnAyKtwDXs%2FruADnOH7EKKz5NMNCLurS44qhYcfsCWdHmMhzpWvAXBvF2dQs3635xmeADfB9UftbG%2FqGsV%2BA8gHBjPwwpuAd%2FuZmGb%2B5wdq2V4Hq41EI%2Fak1z4qtcZ7ZQ9lNMwO4viOXwbl6fFM%2BX5T7bqgd4yz1Ooxih7xC%2BgdXWMusJWDDkzrwDDy4YHyje3RegMpAt8pza0d9S3Uq9ovlQS3g7WKD3c8sqtBc5gDOqxmF4iUmiJU6IuNA%2FqDN%2Fkp1UToRkCr2VDpss7kEQ21JRjNFMHz4SZJxePn%2FT3tapHb5sf090mwYWWZ%2BfXd%2FyfrqzGT3XIv3Xm0OXAz6lWdYzPDkqkeeh3StWd197b4ikwAKeAxiZqPUICNTeTJt9Mvmbr6%2BLFOEkONrwq8ARdoVpqiMmPX%2FsmvJWbjutlKVd2pgnrgR7GJ%2BNM1yMvZFIo%2BdYhjMIUDlwodG%2FyBfQ%2FPEwUyoPDGdkWuLlHUr%2BZX0iMRlcverAq%2BUO6J5Ltjww5RVLM58nVPKWrmzXZgGPfIEI1sXFNfn5hTm%2FEPN2DtU8DAtJjKTznahHAyDwzQnGBUUFjvUacQI1JTZSsW8wD3hco75KTGQ58nK2%2FIixJUXmZwiwxjmzhQbpON2ASmO4JAwnJGuxAY6pgF91JxATxXiGZOyKM62D5NAK0kt%2BsE9Ju59wDs96JDE8xVDzxtZXqiKQ06Kn%2Bz8U2fgSR5%2BmyjDhZPOhZw57SLImZVuNaJtWnNE3w8tnS9GSsw0FCaGD4G03I8B1NuA%2BHxinmQhxXq578WPqgSApQffCBID1WPbLjlYeXW2%2FqRLmg3sG7D5aL1OFIykqHnTRba4zFcFs6K%2ByBZAT0HUOxV%2FJifTyP8%2F&X-Amz-Signature=1268f9cea693fd0703e5933464539619dbe5a0924c917c6e10331898b2e84de8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6Q42BAM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsA4jq%2FGdfhwnEVV%2FdGRRucpZ3E5l6jRYV4rdZMaq%2B6AiBy4F2esvE4RGcymi4lkCLOzsaEjhjI9p5uLWWQJ3JfKiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPXLS1IUShZpLwnAyKtwDXs%2FruADnOH7EKKz5NMNCLurS44qhYcfsCWdHmMhzpWvAXBvF2dQs3635xmeADfB9UftbG%2FqGsV%2BA8gHBjPwwpuAd%2FuZmGb%2B5wdq2V4Hq41EI%2Fak1z4qtcZ7ZQ9lNMwO4viOXwbl6fFM%2BX5T7bqgd4yz1Ooxih7xC%2BgdXWMusJWDDkzrwDDy4YHyje3RegMpAt8pza0d9S3Uq9ovlQS3g7WKD3c8sqtBc5gDOqxmF4iUmiJU6IuNA%2FqDN%2Fkp1UToRkCr2VDpss7kEQ21JRjNFMHz4SZJxePn%2FT3tapHb5sf090mwYWWZ%2BfXd%2FyfrqzGT3XIv3Xm0OXAz6lWdYzPDkqkeeh3StWd197b4ikwAKeAxiZqPUICNTeTJt9Mvmbr6%2BLFOEkONrwq8ARdoVpqiMmPX%2FsmvJWbjutlKVd2pgnrgR7GJ%2BNM1yMvZFIo%2BdYhjMIUDlwodG%2FyBfQ%2FPEwUyoPDGdkWuLlHUr%2BZX0iMRlcverAq%2BUO6J5Ltjww5RVLM58nVPKWrmzXZgGPfIEI1sXFNfn5hTm%2FEPN2DtU8DAtJjKTznahHAyDwzQnGBUUFjvUacQI1JTZSsW8wD3hco75KTGQ58nK2%2FIixJUXmZwiwxjmzhQbpON2ASmO4JAwnJGuxAY6pgF91JxATxXiGZOyKM62D5NAK0kt%2BsE9Ju59wDs96JDE8xVDzxtZXqiKQ06Kn%2Bz8U2fgSR5%2BmyjDhZPOhZw57SLImZVuNaJtWnNE3w8tnS9GSsw0FCaGD4G03I8B1NuA%2BHxinmQhxXq578WPqgSApQffCBID1WPbLjlYeXW2%2FqRLmg3sG7D5aL1OFIykqHnTRba4zFcFs6K%2ByBZAT0HUOxV%2FJifTyP8%2F&X-Amz-Signature=0e087c80e1bcf9103a942969bd9017f5a0153f99f694be581e587f093764a4cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W55IOPJX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf2RzS3AvkQGiYcm%2BF7ntwxbU9G8C0PXAO7D8qO7lh3wIgbOdJV3V9AQVD6OnnExTvSm%2BoAceoRgpLFnfIe7iEYZQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BVAv5HI%2FBcjG42uSrcA1iGqoh3WZoftT8Bz3aDzLiGmOER%2BmOPHOJ5c2oD4D57dF9JmasWmpF04I1eZ%2BaQFqBhP5dXeGnV%2FQ2fZzeQsnpYXmuTpwP2o%2FNoZIp3dnJNFWE4hYINp0OYd0XuFrc3usnup71wSrsjVNjiaDVeZO4n9bYdLA7C61v64ByEj%2FN6%2BBqcv%2FnDUdj3rRtSQX3TtfARhA9zG9dZIFb%2FfQso9qKkCWj0IIM4toQY46ncJYxlI%2Fk8sr9529l%2BOwmaRAAycoZSlSbESVFZlBZmJq7DVq1rV7Kdmu7hlZKVT0iRBfDIoO7ZYH95QWRFci7XNyY%2Bvz52DaXRTj9djeMFv6BQQEloBtdjQqRKgjJEXLvllhiakYV0MMnBUKPRceSVuCvEQceaYfOkoPmGgLTk0VMOB96%2BudH74z2aOhfytH524g%2F5XdcRLHShtUp8xFCrXU%2FbGtWQnCekhiae5jC5OKi4uU008EazdRtLp%2BGrSGopsHOfmkC1Vd2G8aF%2FGeWZ9xPxD%2F%2Fxd08AHg8eHqNn0r2qUCQalEG6NqEBOYlq4GOewKjR%2FNOURcDXOv%2FfbqU1RZkJcORilBv9GkolzHH%2FoZZSz6TjM66HtpNJ5R6xX%2BvyWTcBJKUJytrAKCZn724YMPyQrsQGOqUBD%2BR7qyHMxaT%2F%2BjPXOgGEdxMmq%2BF9QC%2BUxRqvK4wFfV93N4l7fQ6zZ91NtPp4sLDCsXibuehmw7H9uKEcMI0qfxVUK7PPgHBtB5jWcFzxPHBzE004yWRaflvPOdW7BScftxhU1MuffGBhq6JckqOglmtQbZv49zb0VOyWtnpQHyFa2wVtgc8XBfkKESZNvOe5A2crUqyzvAvNvZL6ncBvMVMh06xl&X-Amz-Signature=e98e66ffd2bdd1661cde04e03d710c3d1ccdfbd263fc61479967587abfd9a20c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W55IOPJX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf2RzS3AvkQGiYcm%2BF7ntwxbU9G8C0PXAO7D8qO7lh3wIgbOdJV3V9AQVD6OnnExTvSm%2BoAceoRgpLFnfIe7iEYZQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BVAv5HI%2FBcjG42uSrcA1iGqoh3WZoftT8Bz3aDzLiGmOER%2BmOPHOJ5c2oD4D57dF9JmasWmpF04I1eZ%2BaQFqBhP5dXeGnV%2FQ2fZzeQsnpYXmuTpwP2o%2FNoZIp3dnJNFWE4hYINp0OYd0XuFrc3usnup71wSrsjVNjiaDVeZO4n9bYdLA7C61v64ByEj%2FN6%2BBqcv%2FnDUdj3rRtSQX3TtfARhA9zG9dZIFb%2FfQso9qKkCWj0IIM4toQY46ncJYxlI%2Fk8sr9529l%2BOwmaRAAycoZSlSbESVFZlBZmJq7DVq1rV7Kdmu7hlZKVT0iRBfDIoO7ZYH95QWRFci7XNyY%2Bvz52DaXRTj9djeMFv6BQQEloBtdjQqRKgjJEXLvllhiakYV0MMnBUKPRceSVuCvEQceaYfOkoPmGgLTk0VMOB96%2BudH74z2aOhfytH524g%2F5XdcRLHShtUp8xFCrXU%2FbGtWQnCekhiae5jC5OKi4uU008EazdRtLp%2BGrSGopsHOfmkC1Vd2G8aF%2FGeWZ9xPxD%2F%2Fxd08AHg8eHqNn0r2qUCQalEG6NqEBOYlq4GOewKjR%2FNOURcDXOv%2FfbqU1RZkJcORilBv9GkolzHH%2FoZZSz6TjM66HtpNJ5R6xX%2BvyWTcBJKUJytrAKCZn724YMPyQrsQGOqUBD%2BR7qyHMxaT%2F%2BjPXOgGEdxMmq%2BF9QC%2BUxRqvK4wFfV93N4l7fQ6zZ91NtPp4sLDCsXibuehmw7H9uKEcMI0qfxVUK7PPgHBtB5jWcFzxPHBzE004yWRaflvPOdW7BScftxhU1MuffGBhq6JckqOglmtQbZv49zb0VOyWtnpQHyFa2wVtgc8XBfkKESZNvOe5A2crUqyzvAvNvZL6ncBvMVMh06xl&X-Amz-Signature=28f3e50207baa60101bd2e6528348352cfa3d33fc8da194975cbd5476d22900a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W55IOPJX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf2RzS3AvkQGiYcm%2BF7ntwxbU9G8C0PXAO7D8qO7lh3wIgbOdJV3V9AQVD6OnnExTvSm%2BoAceoRgpLFnfIe7iEYZQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BVAv5HI%2FBcjG42uSrcA1iGqoh3WZoftT8Bz3aDzLiGmOER%2BmOPHOJ5c2oD4D57dF9JmasWmpF04I1eZ%2BaQFqBhP5dXeGnV%2FQ2fZzeQsnpYXmuTpwP2o%2FNoZIp3dnJNFWE4hYINp0OYd0XuFrc3usnup71wSrsjVNjiaDVeZO4n9bYdLA7C61v64ByEj%2FN6%2BBqcv%2FnDUdj3rRtSQX3TtfARhA9zG9dZIFb%2FfQso9qKkCWj0IIM4toQY46ncJYxlI%2Fk8sr9529l%2BOwmaRAAycoZSlSbESVFZlBZmJq7DVq1rV7Kdmu7hlZKVT0iRBfDIoO7ZYH95QWRFci7XNyY%2Bvz52DaXRTj9djeMFv6BQQEloBtdjQqRKgjJEXLvllhiakYV0MMnBUKPRceSVuCvEQceaYfOkoPmGgLTk0VMOB96%2BudH74z2aOhfytH524g%2F5XdcRLHShtUp8xFCrXU%2FbGtWQnCekhiae5jC5OKi4uU008EazdRtLp%2BGrSGopsHOfmkC1Vd2G8aF%2FGeWZ9xPxD%2F%2Fxd08AHg8eHqNn0r2qUCQalEG6NqEBOYlq4GOewKjR%2FNOURcDXOv%2FfbqU1RZkJcORilBv9GkolzHH%2FoZZSz6TjM66HtpNJ5R6xX%2BvyWTcBJKUJytrAKCZn724YMPyQrsQGOqUBD%2BR7qyHMxaT%2F%2BjPXOgGEdxMmq%2BF9QC%2BUxRqvK4wFfV93N4l7fQ6zZ91NtPp4sLDCsXibuehmw7H9uKEcMI0qfxVUK7PPgHBtB5jWcFzxPHBzE004yWRaflvPOdW7BScftxhU1MuffGBhq6JckqOglmtQbZv49zb0VOyWtnpQHyFa2wVtgc8XBfkKESZNvOe5A2crUqyzvAvNvZL6ncBvMVMh06xl&X-Amz-Signature=f35cb93c62366e22178a5f4bca44833decf56862cb6082a1af1134597257cb43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W55IOPJX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf2RzS3AvkQGiYcm%2BF7ntwxbU9G8C0PXAO7D8qO7lh3wIgbOdJV3V9AQVD6OnnExTvSm%2BoAceoRgpLFnfIe7iEYZQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BVAv5HI%2FBcjG42uSrcA1iGqoh3WZoftT8Bz3aDzLiGmOER%2BmOPHOJ5c2oD4D57dF9JmasWmpF04I1eZ%2BaQFqBhP5dXeGnV%2FQ2fZzeQsnpYXmuTpwP2o%2FNoZIp3dnJNFWE4hYINp0OYd0XuFrc3usnup71wSrsjVNjiaDVeZO4n9bYdLA7C61v64ByEj%2FN6%2BBqcv%2FnDUdj3rRtSQX3TtfARhA9zG9dZIFb%2FfQso9qKkCWj0IIM4toQY46ncJYxlI%2Fk8sr9529l%2BOwmaRAAycoZSlSbESVFZlBZmJq7DVq1rV7Kdmu7hlZKVT0iRBfDIoO7ZYH95QWRFci7XNyY%2Bvz52DaXRTj9djeMFv6BQQEloBtdjQqRKgjJEXLvllhiakYV0MMnBUKPRceSVuCvEQceaYfOkoPmGgLTk0VMOB96%2BudH74z2aOhfytH524g%2F5XdcRLHShtUp8xFCrXU%2FbGtWQnCekhiae5jC5OKi4uU008EazdRtLp%2BGrSGopsHOfmkC1Vd2G8aF%2FGeWZ9xPxD%2F%2Fxd08AHg8eHqNn0r2qUCQalEG6NqEBOYlq4GOewKjR%2FNOURcDXOv%2FfbqU1RZkJcORilBv9GkolzHH%2FoZZSz6TjM66HtpNJ5R6xX%2BvyWTcBJKUJytrAKCZn724YMPyQrsQGOqUBD%2BR7qyHMxaT%2F%2BjPXOgGEdxMmq%2BF9QC%2BUxRqvK4wFfV93N4l7fQ6zZ91NtPp4sLDCsXibuehmw7H9uKEcMI0qfxVUK7PPgHBtB5jWcFzxPHBzE004yWRaflvPOdW7BScftxhU1MuffGBhq6JckqOglmtQbZv49zb0VOyWtnpQHyFa2wVtgc8XBfkKESZNvOe5A2crUqyzvAvNvZL6ncBvMVMh06xl&X-Amz-Signature=7fd68511df71475081f978daa18e7209f4887425bdb7f12afe04ca765ceb4606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W55IOPJX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf2RzS3AvkQGiYcm%2BF7ntwxbU9G8C0PXAO7D8qO7lh3wIgbOdJV3V9AQVD6OnnExTvSm%2BoAceoRgpLFnfIe7iEYZQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BVAv5HI%2FBcjG42uSrcA1iGqoh3WZoftT8Bz3aDzLiGmOER%2BmOPHOJ5c2oD4D57dF9JmasWmpF04I1eZ%2BaQFqBhP5dXeGnV%2FQ2fZzeQsnpYXmuTpwP2o%2FNoZIp3dnJNFWE4hYINp0OYd0XuFrc3usnup71wSrsjVNjiaDVeZO4n9bYdLA7C61v64ByEj%2FN6%2BBqcv%2FnDUdj3rRtSQX3TtfARhA9zG9dZIFb%2FfQso9qKkCWj0IIM4toQY46ncJYxlI%2Fk8sr9529l%2BOwmaRAAycoZSlSbESVFZlBZmJq7DVq1rV7Kdmu7hlZKVT0iRBfDIoO7ZYH95QWRFci7XNyY%2Bvz52DaXRTj9djeMFv6BQQEloBtdjQqRKgjJEXLvllhiakYV0MMnBUKPRceSVuCvEQceaYfOkoPmGgLTk0VMOB96%2BudH74z2aOhfytH524g%2F5XdcRLHShtUp8xFCrXU%2FbGtWQnCekhiae5jC5OKi4uU008EazdRtLp%2BGrSGopsHOfmkC1Vd2G8aF%2FGeWZ9xPxD%2F%2Fxd08AHg8eHqNn0r2qUCQalEG6NqEBOYlq4GOewKjR%2FNOURcDXOv%2FfbqU1RZkJcORilBv9GkolzHH%2FoZZSz6TjM66HtpNJ5R6xX%2BvyWTcBJKUJytrAKCZn724YMPyQrsQGOqUBD%2BR7qyHMxaT%2F%2BjPXOgGEdxMmq%2BF9QC%2BUxRqvK4wFfV93N4l7fQ6zZ91NtPp4sLDCsXibuehmw7H9uKEcMI0qfxVUK7PPgHBtB5jWcFzxPHBzE004yWRaflvPOdW7BScftxhU1MuffGBhq6JckqOglmtQbZv49zb0VOyWtnpQHyFa2wVtgc8XBfkKESZNvOe5A2crUqyzvAvNvZL6ncBvMVMh06xl&X-Amz-Signature=a111d000842a8a78be575e08cceb3db3b971095d823ecea579d0edbd4af63000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W55IOPJX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf2RzS3AvkQGiYcm%2BF7ntwxbU9G8C0PXAO7D8qO7lh3wIgbOdJV3V9AQVD6OnnExTvSm%2BoAceoRgpLFnfIe7iEYZQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BVAv5HI%2FBcjG42uSrcA1iGqoh3WZoftT8Bz3aDzLiGmOER%2BmOPHOJ5c2oD4D57dF9JmasWmpF04I1eZ%2BaQFqBhP5dXeGnV%2FQ2fZzeQsnpYXmuTpwP2o%2FNoZIp3dnJNFWE4hYINp0OYd0XuFrc3usnup71wSrsjVNjiaDVeZO4n9bYdLA7C61v64ByEj%2FN6%2BBqcv%2FnDUdj3rRtSQX3TtfARhA9zG9dZIFb%2FfQso9qKkCWj0IIM4toQY46ncJYxlI%2Fk8sr9529l%2BOwmaRAAycoZSlSbESVFZlBZmJq7DVq1rV7Kdmu7hlZKVT0iRBfDIoO7ZYH95QWRFci7XNyY%2Bvz52DaXRTj9djeMFv6BQQEloBtdjQqRKgjJEXLvllhiakYV0MMnBUKPRceSVuCvEQceaYfOkoPmGgLTk0VMOB96%2BudH74z2aOhfytH524g%2F5XdcRLHShtUp8xFCrXU%2FbGtWQnCekhiae5jC5OKi4uU008EazdRtLp%2BGrSGopsHOfmkC1Vd2G8aF%2FGeWZ9xPxD%2F%2Fxd08AHg8eHqNn0r2qUCQalEG6NqEBOYlq4GOewKjR%2FNOURcDXOv%2FfbqU1RZkJcORilBv9GkolzHH%2FoZZSz6TjM66HtpNJ5R6xX%2BvyWTcBJKUJytrAKCZn724YMPyQrsQGOqUBD%2BR7qyHMxaT%2F%2BjPXOgGEdxMmq%2BF9QC%2BUxRqvK4wFfV93N4l7fQ6zZ91NtPp4sLDCsXibuehmw7H9uKEcMI0qfxVUK7PPgHBtB5jWcFzxPHBzE004yWRaflvPOdW7BScftxhU1MuffGBhq6JckqOglmtQbZv49zb0VOyWtnpQHyFa2wVtgc8XBfkKESZNvOe5A2crUqyzvAvNvZL6ncBvMVMh06xl&X-Amz-Signature=361092d0aebf41fd629340cffb280a034eef88d9444b7387eddcbf7f6adc4152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W55IOPJX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf2RzS3AvkQGiYcm%2BF7ntwxbU9G8C0PXAO7D8qO7lh3wIgbOdJV3V9AQVD6OnnExTvSm%2BoAceoRgpLFnfIe7iEYZQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BVAv5HI%2FBcjG42uSrcA1iGqoh3WZoftT8Bz3aDzLiGmOER%2BmOPHOJ5c2oD4D57dF9JmasWmpF04I1eZ%2BaQFqBhP5dXeGnV%2FQ2fZzeQsnpYXmuTpwP2o%2FNoZIp3dnJNFWE4hYINp0OYd0XuFrc3usnup71wSrsjVNjiaDVeZO4n9bYdLA7C61v64ByEj%2FN6%2BBqcv%2FnDUdj3rRtSQX3TtfARhA9zG9dZIFb%2FfQso9qKkCWj0IIM4toQY46ncJYxlI%2Fk8sr9529l%2BOwmaRAAycoZSlSbESVFZlBZmJq7DVq1rV7Kdmu7hlZKVT0iRBfDIoO7ZYH95QWRFci7XNyY%2Bvz52DaXRTj9djeMFv6BQQEloBtdjQqRKgjJEXLvllhiakYV0MMnBUKPRceSVuCvEQceaYfOkoPmGgLTk0VMOB96%2BudH74z2aOhfytH524g%2F5XdcRLHShtUp8xFCrXU%2FbGtWQnCekhiae5jC5OKi4uU008EazdRtLp%2BGrSGopsHOfmkC1Vd2G8aF%2FGeWZ9xPxD%2F%2Fxd08AHg8eHqNn0r2qUCQalEG6NqEBOYlq4GOewKjR%2FNOURcDXOv%2FfbqU1RZkJcORilBv9GkolzHH%2FoZZSz6TjM66HtpNJ5R6xX%2BvyWTcBJKUJytrAKCZn724YMPyQrsQGOqUBD%2BR7qyHMxaT%2F%2BjPXOgGEdxMmq%2BF9QC%2BUxRqvK4wFfV93N4l7fQ6zZ91NtPp4sLDCsXibuehmw7H9uKEcMI0qfxVUK7PPgHBtB5jWcFzxPHBzE004yWRaflvPOdW7BScftxhU1MuffGBhq6JckqOglmtQbZv49zb0VOyWtnpQHyFa2wVtgc8XBfkKESZNvOe5A2crUqyzvAvNvZL6ncBvMVMh06xl&X-Amz-Signature=3cea188d07bf67e62056d0a39612367bc3d6b6e9e16616ab3b4b412a742860ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
