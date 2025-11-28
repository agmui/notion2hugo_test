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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEOT5YJ%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4FpOzfc2%2FindOmpK0gu7%2F%2Ft1zt7vYmiEf8X9pjM0uQAiAykHYxSvQoBYG31pf5qzXouCaS463sKYZqSY74pSWKUSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRXh%2F7TKdcEEfLDNTKtwDXmyZPazLd%2BsaCen8v7EUVm5jFLzV8%2FhtoiIwGDKVnjG5MYSZKsCcoSk1sGJtD51iCZ9VgoKiZHhp%2BrkhSw12GDyuUBeybtsnh6lcgbV7pGQsdhzYftAOACEyH4NQU8Lfmqfa%2FRoE1wgJpQqFr33g8cJt%2FY58MYQ9EPoTiRebfnTy5KwWCzERnUnUfwTI6N%2BU7ShuYpR4gbVMqYXKxnxlFYyXo0P0n3li%2BtO3KgxNAqgEvqAgGKmtigpKOastq2pH%2FhwEzN6onQ7jpxTwrAyO%2F9aXKhQJhGTePe2GWvNRCGB8C05LhKkWUZsotvgP9JUtxTHqhvh4PA5zXBL%2FjVUmTtId%2FgDayFOvu503x9QATB%2BYhs33n8fDgTrTk677JzeGcjacTOR%2FzPU73r75A3tZWebpN4gXdkIXV2Wd7sc4i0FM%2F8DqF7uSD%2FP3SnA2ndjEDzmD3jtrqwBYiYewdFmLutX0truXERpbzb8u%2BP0x%2FYMWibRdWUjsqHnsCgetpzFBeUZ5J0w7e5UWcUrP9Xljn9fa0rAMlHJILRAKqIM7d3lyqof39NHK9aPmxJKAuX81KpQ%2FJ1R%2F2oNdSF2%2BQTzJqVNqKnm7TGMl5Ad7wbqRfrjqlVUE2BxnvoRFtTUwsNaiyQY6pgF%2FNJZLgRnWXfJ1rr8HBNilJufbmxBu6G2oIK6ywG7hO5hCvnrQhKFsqKUx8waKVr3Bx2C3UhyDUtxvjz3HnM3ZuVRQIdjcyem%2B6IfgCSzGrRwF7TsGfvt80Poga%2B2SCPXW83jvHUfY%2BfJKgN5QTAHFiN2gtXqFAQySCw2JGj%2BUHqhcJ8juSb0QG5q%2BufYTGcpihYIye%2BIfKA4lFeZV2hjdNXYAfB2P&X-Amz-Signature=b5104d6b8a69ea4250e99040dc78dfe47ff11432a487de868ad281a9c53b6d90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEOT5YJ%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4FpOzfc2%2FindOmpK0gu7%2F%2Ft1zt7vYmiEf8X9pjM0uQAiAykHYxSvQoBYG31pf5qzXouCaS463sKYZqSY74pSWKUSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRXh%2F7TKdcEEfLDNTKtwDXmyZPazLd%2BsaCen8v7EUVm5jFLzV8%2FhtoiIwGDKVnjG5MYSZKsCcoSk1sGJtD51iCZ9VgoKiZHhp%2BrkhSw12GDyuUBeybtsnh6lcgbV7pGQsdhzYftAOACEyH4NQU8Lfmqfa%2FRoE1wgJpQqFr33g8cJt%2FY58MYQ9EPoTiRebfnTy5KwWCzERnUnUfwTI6N%2BU7ShuYpR4gbVMqYXKxnxlFYyXo0P0n3li%2BtO3KgxNAqgEvqAgGKmtigpKOastq2pH%2FhwEzN6onQ7jpxTwrAyO%2F9aXKhQJhGTePe2GWvNRCGB8C05LhKkWUZsotvgP9JUtxTHqhvh4PA5zXBL%2FjVUmTtId%2FgDayFOvu503x9QATB%2BYhs33n8fDgTrTk677JzeGcjacTOR%2FzPU73r75A3tZWebpN4gXdkIXV2Wd7sc4i0FM%2F8DqF7uSD%2FP3SnA2ndjEDzmD3jtrqwBYiYewdFmLutX0truXERpbzb8u%2BP0x%2FYMWibRdWUjsqHnsCgetpzFBeUZ5J0w7e5UWcUrP9Xljn9fa0rAMlHJILRAKqIM7d3lyqof39NHK9aPmxJKAuX81KpQ%2FJ1R%2F2oNdSF2%2BQTzJqVNqKnm7TGMl5Ad7wbqRfrjqlVUE2BxnvoRFtTUwsNaiyQY6pgF%2FNJZLgRnWXfJ1rr8HBNilJufbmxBu6G2oIK6ywG7hO5hCvnrQhKFsqKUx8waKVr3Bx2C3UhyDUtxvjz3HnM3ZuVRQIdjcyem%2B6IfgCSzGrRwF7TsGfvt80Poga%2B2SCPXW83jvHUfY%2BfJKgN5QTAHFiN2gtXqFAQySCw2JGj%2BUHqhcJ8juSb0QG5q%2BufYTGcpihYIye%2BIfKA4lFeZV2hjdNXYAfB2P&X-Amz-Signature=5895577aa60fb06f6b52f0cc02b5542816d0e1ffdc840503bdf20bad50771fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEOT5YJ%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4FpOzfc2%2FindOmpK0gu7%2F%2Ft1zt7vYmiEf8X9pjM0uQAiAykHYxSvQoBYG31pf5qzXouCaS463sKYZqSY74pSWKUSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRXh%2F7TKdcEEfLDNTKtwDXmyZPazLd%2BsaCen8v7EUVm5jFLzV8%2FhtoiIwGDKVnjG5MYSZKsCcoSk1sGJtD51iCZ9VgoKiZHhp%2BrkhSw12GDyuUBeybtsnh6lcgbV7pGQsdhzYftAOACEyH4NQU8Lfmqfa%2FRoE1wgJpQqFr33g8cJt%2FY58MYQ9EPoTiRebfnTy5KwWCzERnUnUfwTI6N%2BU7ShuYpR4gbVMqYXKxnxlFYyXo0P0n3li%2BtO3KgxNAqgEvqAgGKmtigpKOastq2pH%2FhwEzN6onQ7jpxTwrAyO%2F9aXKhQJhGTePe2GWvNRCGB8C05LhKkWUZsotvgP9JUtxTHqhvh4PA5zXBL%2FjVUmTtId%2FgDayFOvu503x9QATB%2BYhs33n8fDgTrTk677JzeGcjacTOR%2FzPU73r75A3tZWebpN4gXdkIXV2Wd7sc4i0FM%2F8DqF7uSD%2FP3SnA2ndjEDzmD3jtrqwBYiYewdFmLutX0truXERpbzb8u%2BP0x%2FYMWibRdWUjsqHnsCgetpzFBeUZ5J0w7e5UWcUrP9Xljn9fa0rAMlHJILRAKqIM7d3lyqof39NHK9aPmxJKAuX81KpQ%2FJ1R%2F2oNdSF2%2BQTzJqVNqKnm7TGMl5Ad7wbqRfrjqlVUE2BxnvoRFtTUwsNaiyQY6pgF%2FNJZLgRnWXfJ1rr8HBNilJufbmxBu6G2oIK6ywG7hO5hCvnrQhKFsqKUx8waKVr3Bx2C3UhyDUtxvjz3HnM3ZuVRQIdjcyem%2B6IfgCSzGrRwF7TsGfvt80Poga%2B2SCPXW83jvHUfY%2BfJKgN5QTAHFiN2gtXqFAQySCw2JGj%2BUHqhcJ8juSb0QG5q%2BufYTGcpihYIye%2BIfKA4lFeZV2hjdNXYAfB2P&X-Amz-Signature=a7b6665ea5a63ac04f2c0e287913d461160cc42fc79f07b0f0dd166f28538f49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEOT5YJ%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4FpOzfc2%2FindOmpK0gu7%2F%2Ft1zt7vYmiEf8X9pjM0uQAiAykHYxSvQoBYG31pf5qzXouCaS463sKYZqSY74pSWKUSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRXh%2F7TKdcEEfLDNTKtwDXmyZPazLd%2BsaCen8v7EUVm5jFLzV8%2FhtoiIwGDKVnjG5MYSZKsCcoSk1sGJtD51iCZ9VgoKiZHhp%2BrkhSw12GDyuUBeybtsnh6lcgbV7pGQsdhzYftAOACEyH4NQU8Lfmqfa%2FRoE1wgJpQqFr33g8cJt%2FY58MYQ9EPoTiRebfnTy5KwWCzERnUnUfwTI6N%2BU7ShuYpR4gbVMqYXKxnxlFYyXo0P0n3li%2BtO3KgxNAqgEvqAgGKmtigpKOastq2pH%2FhwEzN6onQ7jpxTwrAyO%2F9aXKhQJhGTePe2GWvNRCGB8C05LhKkWUZsotvgP9JUtxTHqhvh4PA5zXBL%2FjVUmTtId%2FgDayFOvu503x9QATB%2BYhs33n8fDgTrTk677JzeGcjacTOR%2FzPU73r75A3tZWebpN4gXdkIXV2Wd7sc4i0FM%2F8DqF7uSD%2FP3SnA2ndjEDzmD3jtrqwBYiYewdFmLutX0truXERpbzb8u%2BP0x%2FYMWibRdWUjsqHnsCgetpzFBeUZ5J0w7e5UWcUrP9Xljn9fa0rAMlHJILRAKqIM7d3lyqof39NHK9aPmxJKAuX81KpQ%2FJ1R%2F2oNdSF2%2BQTzJqVNqKnm7TGMl5Ad7wbqRfrjqlVUE2BxnvoRFtTUwsNaiyQY6pgF%2FNJZLgRnWXfJ1rr8HBNilJufbmxBu6G2oIK6ywG7hO5hCvnrQhKFsqKUx8waKVr3Bx2C3UhyDUtxvjz3HnM3ZuVRQIdjcyem%2B6IfgCSzGrRwF7TsGfvt80Poga%2B2SCPXW83jvHUfY%2BfJKgN5QTAHFiN2gtXqFAQySCw2JGj%2BUHqhcJ8juSb0QG5q%2BufYTGcpihYIye%2BIfKA4lFeZV2hjdNXYAfB2P&X-Amz-Signature=110ce6f8b48ba12a6f44ee12dde849b9b7ae6d00da13a17be7d56c018bf16648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEOT5YJ%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4FpOzfc2%2FindOmpK0gu7%2F%2Ft1zt7vYmiEf8X9pjM0uQAiAykHYxSvQoBYG31pf5qzXouCaS463sKYZqSY74pSWKUSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRXh%2F7TKdcEEfLDNTKtwDXmyZPazLd%2BsaCen8v7EUVm5jFLzV8%2FhtoiIwGDKVnjG5MYSZKsCcoSk1sGJtD51iCZ9VgoKiZHhp%2BrkhSw12GDyuUBeybtsnh6lcgbV7pGQsdhzYftAOACEyH4NQU8Lfmqfa%2FRoE1wgJpQqFr33g8cJt%2FY58MYQ9EPoTiRebfnTy5KwWCzERnUnUfwTI6N%2BU7ShuYpR4gbVMqYXKxnxlFYyXo0P0n3li%2BtO3KgxNAqgEvqAgGKmtigpKOastq2pH%2FhwEzN6onQ7jpxTwrAyO%2F9aXKhQJhGTePe2GWvNRCGB8C05LhKkWUZsotvgP9JUtxTHqhvh4PA5zXBL%2FjVUmTtId%2FgDayFOvu503x9QATB%2BYhs33n8fDgTrTk677JzeGcjacTOR%2FzPU73r75A3tZWebpN4gXdkIXV2Wd7sc4i0FM%2F8DqF7uSD%2FP3SnA2ndjEDzmD3jtrqwBYiYewdFmLutX0truXERpbzb8u%2BP0x%2FYMWibRdWUjsqHnsCgetpzFBeUZ5J0w7e5UWcUrP9Xljn9fa0rAMlHJILRAKqIM7d3lyqof39NHK9aPmxJKAuX81KpQ%2FJ1R%2F2oNdSF2%2BQTzJqVNqKnm7TGMl5Ad7wbqRfrjqlVUE2BxnvoRFtTUwsNaiyQY6pgF%2FNJZLgRnWXfJ1rr8HBNilJufbmxBu6G2oIK6ywG7hO5hCvnrQhKFsqKUx8waKVr3Bx2C3UhyDUtxvjz3HnM3ZuVRQIdjcyem%2B6IfgCSzGrRwF7TsGfvt80Poga%2B2SCPXW83jvHUfY%2BfJKgN5QTAHFiN2gtXqFAQySCw2JGj%2BUHqhcJ8juSb0QG5q%2BufYTGcpihYIye%2BIfKA4lFeZV2hjdNXYAfB2P&X-Amz-Signature=37f6d409f604502034cf989edf56060bd0269b956930f6c17aa7d3b2860ac15e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEOT5YJ%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4FpOzfc2%2FindOmpK0gu7%2F%2Ft1zt7vYmiEf8X9pjM0uQAiAykHYxSvQoBYG31pf5qzXouCaS463sKYZqSY74pSWKUSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRXh%2F7TKdcEEfLDNTKtwDXmyZPazLd%2BsaCen8v7EUVm5jFLzV8%2FhtoiIwGDKVnjG5MYSZKsCcoSk1sGJtD51iCZ9VgoKiZHhp%2BrkhSw12GDyuUBeybtsnh6lcgbV7pGQsdhzYftAOACEyH4NQU8Lfmqfa%2FRoE1wgJpQqFr33g8cJt%2FY58MYQ9EPoTiRebfnTy5KwWCzERnUnUfwTI6N%2BU7ShuYpR4gbVMqYXKxnxlFYyXo0P0n3li%2BtO3KgxNAqgEvqAgGKmtigpKOastq2pH%2FhwEzN6onQ7jpxTwrAyO%2F9aXKhQJhGTePe2GWvNRCGB8C05LhKkWUZsotvgP9JUtxTHqhvh4PA5zXBL%2FjVUmTtId%2FgDayFOvu503x9QATB%2BYhs33n8fDgTrTk677JzeGcjacTOR%2FzPU73r75A3tZWebpN4gXdkIXV2Wd7sc4i0FM%2F8DqF7uSD%2FP3SnA2ndjEDzmD3jtrqwBYiYewdFmLutX0truXERpbzb8u%2BP0x%2FYMWibRdWUjsqHnsCgetpzFBeUZ5J0w7e5UWcUrP9Xljn9fa0rAMlHJILRAKqIM7d3lyqof39NHK9aPmxJKAuX81KpQ%2FJ1R%2F2oNdSF2%2BQTzJqVNqKnm7TGMl5Ad7wbqRfrjqlVUE2BxnvoRFtTUwsNaiyQY6pgF%2FNJZLgRnWXfJ1rr8HBNilJufbmxBu6G2oIK6ywG7hO5hCvnrQhKFsqKUx8waKVr3Bx2C3UhyDUtxvjz3HnM3ZuVRQIdjcyem%2B6IfgCSzGrRwF7TsGfvt80Poga%2B2SCPXW83jvHUfY%2BfJKgN5QTAHFiN2gtXqFAQySCw2JGj%2BUHqhcJ8juSb0QG5q%2BufYTGcpihYIye%2BIfKA4lFeZV2hjdNXYAfB2P&X-Amz-Signature=dce7acf18334250c6209eaf5a4caa041530e9d4702a5dfbdf22d03efc88ca8be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEOT5YJ%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4FpOzfc2%2FindOmpK0gu7%2F%2Ft1zt7vYmiEf8X9pjM0uQAiAykHYxSvQoBYG31pf5qzXouCaS463sKYZqSY74pSWKUSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRXh%2F7TKdcEEfLDNTKtwDXmyZPazLd%2BsaCen8v7EUVm5jFLzV8%2FhtoiIwGDKVnjG5MYSZKsCcoSk1sGJtD51iCZ9VgoKiZHhp%2BrkhSw12GDyuUBeybtsnh6lcgbV7pGQsdhzYftAOACEyH4NQU8Lfmqfa%2FRoE1wgJpQqFr33g8cJt%2FY58MYQ9EPoTiRebfnTy5KwWCzERnUnUfwTI6N%2BU7ShuYpR4gbVMqYXKxnxlFYyXo0P0n3li%2BtO3KgxNAqgEvqAgGKmtigpKOastq2pH%2FhwEzN6onQ7jpxTwrAyO%2F9aXKhQJhGTePe2GWvNRCGB8C05LhKkWUZsotvgP9JUtxTHqhvh4PA5zXBL%2FjVUmTtId%2FgDayFOvu503x9QATB%2BYhs33n8fDgTrTk677JzeGcjacTOR%2FzPU73r75A3tZWebpN4gXdkIXV2Wd7sc4i0FM%2F8DqF7uSD%2FP3SnA2ndjEDzmD3jtrqwBYiYewdFmLutX0truXERpbzb8u%2BP0x%2FYMWibRdWUjsqHnsCgetpzFBeUZ5J0w7e5UWcUrP9Xljn9fa0rAMlHJILRAKqIM7d3lyqof39NHK9aPmxJKAuX81KpQ%2FJ1R%2F2oNdSF2%2BQTzJqVNqKnm7TGMl5Ad7wbqRfrjqlVUE2BxnvoRFtTUwsNaiyQY6pgF%2FNJZLgRnWXfJ1rr8HBNilJufbmxBu6G2oIK6ywG7hO5hCvnrQhKFsqKUx8waKVr3Bx2C3UhyDUtxvjz3HnM3ZuVRQIdjcyem%2B6IfgCSzGrRwF7TsGfvt80Poga%2B2SCPXW83jvHUfY%2BfJKgN5QTAHFiN2gtXqFAQySCw2JGj%2BUHqhcJ8juSb0QG5q%2BufYTGcpihYIye%2BIfKA4lFeZV2hjdNXYAfB2P&X-Amz-Signature=c40b49b6056d3dcd15726109125421762953e3d80ffc93377aaf4b03e2bc95b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEOT5YJ%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4FpOzfc2%2FindOmpK0gu7%2F%2Ft1zt7vYmiEf8X9pjM0uQAiAykHYxSvQoBYG31pf5qzXouCaS463sKYZqSY74pSWKUSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRXh%2F7TKdcEEfLDNTKtwDXmyZPazLd%2BsaCen8v7EUVm5jFLzV8%2FhtoiIwGDKVnjG5MYSZKsCcoSk1sGJtD51iCZ9VgoKiZHhp%2BrkhSw12GDyuUBeybtsnh6lcgbV7pGQsdhzYftAOACEyH4NQU8Lfmqfa%2FRoE1wgJpQqFr33g8cJt%2FY58MYQ9EPoTiRebfnTy5KwWCzERnUnUfwTI6N%2BU7ShuYpR4gbVMqYXKxnxlFYyXo0P0n3li%2BtO3KgxNAqgEvqAgGKmtigpKOastq2pH%2FhwEzN6onQ7jpxTwrAyO%2F9aXKhQJhGTePe2GWvNRCGB8C05LhKkWUZsotvgP9JUtxTHqhvh4PA5zXBL%2FjVUmTtId%2FgDayFOvu503x9QATB%2BYhs33n8fDgTrTk677JzeGcjacTOR%2FzPU73r75A3tZWebpN4gXdkIXV2Wd7sc4i0FM%2F8DqF7uSD%2FP3SnA2ndjEDzmD3jtrqwBYiYewdFmLutX0truXERpbzb8u%2BP0x%2FYMWibRdWUjsqHnsCgetpzFBeUZ5J0w7e5UWcUrP9Xljn9fa0rAMlHJILRAKqIM7d3lyqof39NHK9aPmxJKAuX81KpQ%2FJ1R%2F2oNdSF2%2BQTzJqVNqKnm7TGMl5Ad7wbqRfrjqlVUE2BxnvoRFtTUwsNaiyQY6pgF%2FNJZLgRnWXfJ1rr8HBNilJufbmxBu6G2oIK6ywG7hO5hCvnrQhKFsqKUx8waKVr3Bx2C3UhyDUtxvjz3HnM3ZuVRQIdjcyem%2B6IfgCSzGrRwF7TsGfvt80Poga%2B2SCPXW83jvHUfY%2BfJKgN5QTAHFiN2gtXqFAQySCw2JGj%2BUHqhcJ8juSb0QG5q%2BufYTGcpihYIye%2BIfKA4lFeZV2hjdNXYAfB2P&X-Amz-Signature=0b6a670af0162104129a8fd402836ac2067b2ecffc19aa84adce9fe1a6cb4cea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEOT5YJ%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4FpOzfc2%2FindOmpK0gu7%2F%2Ft1zt7vYmiEf8X9pjM0uQAiAykHYxSvQoBYG31pf5qzXouCaS463sKYZqSY74pSWKUSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRXh%2F7TKdcEEfLDNTKtwDXmyZPazLd%2BsaCen8v7EUVm5jFLzV8%2FhtoiIwGDKVnjG5MYSZKsCcoSk1sGJtD51iCZ9VgoKiZHhp%2BrkhSw12GDyuUBeybtsnh6lcgbV7pGQsdhzYftAOACEyH4NQU8Lfmqfa%2FRoE1wgJpQqFr33g8cJt%2FY58MYQ9EPoTiRebfnTy5KwWCzERnUnUfwTI6N%2BU7ShuYpR4gbVMqYXKxnxlFYyXo0P0n3li%2BtO3KgxNAqgEvqAgGKmtigpKOastq2pH%2FhwEzN6onQ7jpxTwrAyO%2F9aXKhQJhGTePe2GWvNRCGB8C05LhKkWUZsotvgP9JUtxTHqhvh4PA5zXBL%2FjVUmTtId%2FgDayFOvu503x9QATB%2BYhs33n8fDgTrTk677JzeGcjacTOR%2FzPU73r75A3tZWebpN4gXdkIXV2Wd7sc4i0FM%2F8DqF7uSD%2FP3SnA2ndjEDzmD3jtrqwBYiYewdFmLutX0truXERpbzb8u%2BP0x%2FYMWibRdWUjsqHnsCgetpzFBeUZ5J0w7e5UWcUrP9Xljn9fa0rAMlHJILRAKqIM7d3lyqof39NHK9aPmxJKAuX81KpQ%2FJ1R%2F2oNdSF2%2BQTzJqVNqKnm7TGMl5Ad7wbqRfrjqlVUE2BxnvoRFtTUwsNaiyQY6pgF%2FNJZLgRnWXfJ1rr8HBNilJufbmxBu6G2oIK6ywG7hO5hCvnrQhKFsqKUx8waKVr3Bx2C3UhyDUtxvjz3HnM3ZuVRQIdjcyem%2B6IfgCSzGrRwF7TsGfvt80Poga%2B2SCPXW83jvHUfY%2BfJKgN5QTAHFiN2gtXqFAQySCw2JGj%2BUHqhcJ8juSb0QG5q%2BufYTGcpihYIye%2BIfKA4lFeZV2hjdNXYAfB2P&X-Amz-Signature=97b627d3f58df357ffa2266d2df3c60fb7a3791b03d3e3cc33dae9f11cc4266d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEOT5YJ%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4FpOzfc2%2FindOmpK0gu7%2F%2Ft1zt7vYmiEf8X9pjM0uQAiAykHYxSvQoBYG31pf5qzXouCaS463sKYZqSY74pSWKUSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRXh%2F7TKdcEEfLDNTKtwDXmyZPazLd%2BsaCen8v7EUVm5jFLzV8%2FhtoiIwGDKVnjG5MYSZKsCcoSk1sGJtD51iCZ9VgoKiZHhp%2BrkhSw12GDyuUBeybtsnh6lcgbV7pGQsdhzYftAOACEyH4NQU8Lfmqfa%2FRoE1wgJpQqFr33g8cJt%2FY58MYQ9EPoTiRebfnTy5KwWCzERnUnUfwTI6N%2BU7ShuYpR4gbVMqYXKxnxlFYyXo0P0n3li%2BtO3KgxNAqgEvqAgGKmtigpKOastq2pH%2FhwEzN6onQ7jpxTwrAyO%2F9aXKhQJhGTePe2GWvNRCGB8C05LhKkWUZsotvgP9JUtxTHqhvh4PA5zXBL%2FjVUmTtId%2FgDayFOvu503x9QATB%2BYhs33n8fDgTrTk677JzeGcjacTOR%2FzPU73r75A3tZWebpN4gXdkIXV2Wd7sc4i0FM%2F8DqF7uSD%2FP3SnA2ndjEDzmD3jtrqwBYiYewdFmLutX0truXERpbzb8u%2BP0x%2FYMWibRdWUjsqHnsCgetpzFBeUZ5J0w7e5UWcUrP9Xljn9fa0rAMlHJILRAKqIM7d3lyqof39NHK9aPmxJKAuX81KpQ%2FJ1R%2F2oNdSF2%2BQTzJqVNqKnm7TGMl5Ad7wbqRfrjqlVUE2BxnvoRFtTUwsNaiyQY6pgF%2FNJZLgRnWXfJ1rr8HBNilJufbmxBu6G2oIK6ywG7hO5hCvnrQhKFsqKUx8waKVr3Bx2C3UhyDUtxvjz3HnM3ZuVRQIdjcyem%2B6IfgCSzGrRwF7TsGfvt80Poga%2B2SCPXW83jvHUfY%2BfJKgN5QTAHFiN2gtXqFAQySCw2JGj%2BUHqhcJ8juSb0QG5q%2BufYTGcpihYIye%2BIfKA4lFeZV2hjdNXYAfB2P&X-Amz-Signature=2b25f6b7c8f44ad98d79a93f50762e2eda3946114b2802a4cd8e9111a64e4acc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C7BHXA5%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDllIuRjLmCxzmb8LDEbXnM9M2Vb2eikjX54VarCWZPKAIhAKeniLrzKQH10nz9Lpnu4hU4gdng%2FEob%2Bq9J49PPyP0BKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg6DqGsSa9Opipf%2Fkq3AMBjihtba4gXLWbHIrI6n3mky3NCix1W84TlVOkfkTYauI9xep4HVIIGzc%2BFLCL9WC%2BKGKsbYpvZf0x8%2ByhI4sWwlj2AhDV329Fiby41h1jCoxNTenuj9bL%2BRM28XFUDqHMMeTeXw4J0HqTX0pqwK%2BcRTrPOLwvBbS7wVKkk2IhbbqoHDM3bnXcWP%2F1N8d5PmPa86lTk%2BWvciRemca6bBQI8I6vc2mC7i3I5k55in9LJZar1lLnfne8v21%2FP2Mbyc46wsNmciE4PjBwCSehtkXuqE2IR4zwq3zSrpQx7UL7A6RjiGEDvdxMpiRDAQRtQbUcJ3DgkEB%2BDrFm9hUn%2BdNfXodeD6IAWKMOGVpmk4lkwMEH3ITmBR5zIqWjZkRjMJNghhmugaTsxxsQ2auvjtIV4iAKftu7H7OREpZz3cl441Taex23WhTJixHDRUjl8e0qs2J%2F5BftCtKDx1v0EykSaBwBlzaGnhFlDwkC%2BN2gEjQnVhvFjeBiQol1T3Jykc27IC4YObfFGB0mxKBJjdVBRfag1Jq3G6BMtQjZQwifUfSMvqf8JKaMEB%2F5PeCTwUoQS%2B%2F7UjgLJKuRDX2WIsHKhRxmbV%2BwQQrWQbHKJKc2tWNYRkbdyF%2BUg7VNhDC%2F06LJBjqkAT0yNc8Yw%2FhG9BpAsiV37ZRT4I6brfs5etRv2PK%2BOXYrkKy3Bu%2B5Z81Gq0nxlZMe52bOKe5Uyv1xWCpfYPBrqDipwq%2FxqMQv00StQloplY20U%2F8aHiBkeLaA4%2BMY5pDWh4QikxOQEXxZ%2Fh4iPhbLta%2BMtPT4cypg2avWetkbFDVRhpiLMj8qp7P%2FeVl2FE1odUMlu2TLY958QkHYA4MRER0McboX&X-Amz-Signature=f7975cd3cebc31a71ea44dbb660a9ebba96e53b2157f749fc2c1b7a167ff2677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4WVXAIK%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3jErGEs1gkwKVTh%2FAGd12fzdCHWv%2FHvPfefvffEcceAiBkWYw%2FXzPDqVn%2FiqtGAgp28UaZ5atQA8wPMzCCGX4xbSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkIlx4iNKw000%2F0v%2FKtwDk7ryWTsAvMEZN74u2XeFC98FR0RGnPAPUjTiWPvxIq0zE%2FtqrU2Yyi3G53%2Fss3uLhsoQzxh8V15Q0gRE8TtlGyeNxRPzaPBMadkLvdSmXgUaiPF4NOGD75%2F8P%2BUYXCDdC1pnB2VUvAaPnVSEwbs2HV6Y5RFA5F0TIld4BPJ%2BjZOIrkajrvQgH2mFWzsuHdcDwvG2mCX4dHqnhBx13F4UuJIKADYWb7sbGymFRaX%2Bw6%2Bib2qNsfxUshuamrTktw4MV7XeOxBkQ%2F9U1ZKwGQYz2bRimr0efGZm81BLTVXUzDSaNoXwVW5n6f77A2TWqZKgNIVCSYqyUN5aQUDwcvoIOvMSMOTJx4InN8raSG5K0ZZIyVpSX4tBFVGKLMSk1%2FHKrnyPyFWijYEJ0e75h6HG1D0bvxteSFeg%2FE2i99omMHVXRiEVDezhzczNzzNtAFvhnzBhh%2BU4uMRU95VH3l8UP8TBE%2FQu2oJ77iDVxh%2FiwByxKDG2aVxvuwBzXd3A21Ncs7aELCpH72BDcpFUG6ShcXo09074RY%2FGRop8qttlYYmQjU9uiUy7%2FTEcKDu6aL4CkYed2HtVoRdoQj%2FXUUm8na%2BD0scorI8yHMQ%2BGU0tyVpvItb1UailKRZAGKsw%2BdSiyQY6pgFWMtYmKnQ7OlsFKJ7Y2PDwC8wnFq7TLeKBx6TTr6q4Bat1y1q8W3W1sOHxiyj4p6%2BBrJdVl0eURBZjR8V0zM1o6iyW61xz4TQ4A7L%2BMVDrVMbcqEISxO9FNr4ds5ATdTnLHZPvjsGqmyiT0e52tCFz4cB1LBcgQucuh%2B4ses3a6Gay7frzFp7DAtx2XFh8Z82%2FVG7FjXtonkPpLp4BrVwY%2FfeHLmiV&X-Amz-Signature=b38b19d22b87d7fde11debe754382120228c8d096dee5ff198dcd77f5bee560c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XH6WSBP%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwWKjLD66rSAHjr4grDouHPkwkrdaTIJ%2BR7fixaHabzAIhALGZtGQz%2B56%2Br7HEQ09me79LGVixgk8X1rxyIv7wCtCKKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmRFHvsIRlefLSmYQq3AP%2FcSRXLhV4afNx%2FubNWPPK1oMHEgOpOF6X2QLT1aR4IKJNxTc03UAjHaVVAWX1viAln3Z2mmmm2o5ThjJkhtpg0AkWb4Lw%2Bkuv1qj%2BHqAjAz41uf1PrxsPBr2dBzTvLz6NpgqTcCa6YHcqmZ8bklzJa1o8gSrGksZB%2BQ9a5L4%2FB3%2FFo1XDqv%2FtUB4Z7YWZLLomlzD0VY9eqPneg5Z8pxxsE837jx73U%2B9rbmEKVqIK6HRWJGKY0Co0XmEfPsu18hGcvqAL7UviQr6ablDvsfL8NH1XmLQ3cP8bLjynvDa4sQ8L1XTdMYHXytDCcY3N61ZW0Irp4v11Wr%2Bg%2BYIOzEcbFDa0%2FP%2BIesBmhVcXz%2F%2BNyfqXBHAHm5etq7r5uTgSk9I3fqBSlOgWMj4cxKHlN5XduB0aYbSJYB8j%2B7IkkSG%2FYb9T4DtFNOsP%2BnTzBmk6BnuWsW%2BUYcucd2vozfiJGMPQJS85oO9StOjChoS9gAuJ0flJvtDNDpS7bcJShSaZGEzpAvjFVRHlzHctLJPagATXgO8MHyy%2Fa5nZ1sSBV2Rz8nDK8WZ5Q2OPWWxNziJ1JWZDmHHciU9588E9a%2FnveDOqwrdXMU6I0HeeoAG2YjlNJau9titsdvK%2BBaqdJTDa8aLJBjqkASRaI5jV8PvgFs%2BWbeNfdftEwLcNuChOT0BqPxxBlKd8Mr8WRz9ZGpdxopCBuR8GlE6Dmy%2Bi5vuEQbDrnJ2ZvIZtxLFRKWHLRPYvwPW5qAiM5XrA52EkAp2UHRupKNFOPATIczdM%2BVmrIfmGpKOCnattJfRXkeFeSZ4MQDU7YPrdS8K4v0sb4TCoxs7EhzLue66jydbfnGWDP48PRbGf476VUCiE&X-Amz-Signature=d80e3cc56466bb2644933ac132b746bddf9ba27d7cd20f1e9df6cb19b3c1417b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEOT5YJ%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4FpOzfc2%2FindOmpK0gu7%2F%2Ft1zt7vYmiEf8X9pjM0uQAiAykHYxSvQoBYG31pf5qzXouCaS463sKYZqSY74pSWKUSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRXh%2F7TKdcEEfLDNTKtwDXmyZPazLd%2BsaCen8v7EUVm5jFLzV8%2FhtoiIwGDKVnjG5MYSZKsCcoSk1sGJtD51iCZ9VgoKiZHhp%2BrkhSw12GDyuUBeybtsnh6lcgbV7pGQsdhzYftAOACEyH4NQU8Lfmqfa%2FRoE1wgJpQqFr33g8cJt%2FY58MYQ9EPoTiRebfnTy5KwWCzERnUnUfwTI6N%2BU7ShuYpR4gbVMqYXKxnxlFYyXo0P0n3li%2BtO3KgxNAqgEvqAgGKmtigpKOastq2pH%2FhwEzN6onQ7jpxTwrAyO%2F9aXKhQJhGTePe2GWvNRCGB8C05LhKkWUZsotvgP9JUtxTHqhvh4PA5zXBL%2FjVUmTtId%2FgDayFOvu503x9QATB%2BYhs33n8fDgTrTk677JzeGcjacTOR%2FzPU73r75A3tZWebpN4gXdkIXV2Wd7sc4i0FM%2F8DqF7uSD%2FP3SnA2ndjEDzmD3jtrqwBYiYewdFmLutX0truXERpbzb8u%2BP0x%2FYMWibRdWUjsqHnsCgetpzFBeUZ5J0w7e5UWcUrP9Xljn9fa0rAMlHJILRAKqIM7d3lyqof39NHK9aPmxJKAuX81KpQ%2FJ1R%2F2oNdSF2%2BQTzJqVNqKnm7TGMl5Ad7wbqRfrjqlVUE2BxnvoRFtTUwsNaiyQY6pgF%2FNJZLgRnWXfJ1rr8HBNilJufbmxBu6G2oIK6ywG7hO5hCvnrQhKFsqKUx8waKVr3Bx2C3UhyDUtxvjz3HnM3ZuVRQIdjcyem%2B6IfgCSzGrRwF7TsGfvt80Poga%2B2SCPXW83jvHUfY%2BfJKgN5QTAHFiN2gtXqFAQySCw2JGj%2BUHqhcJ8juSb0QG5q%2BufYTGcpihYIye%2BIfKA4lFeZV2hjdNXYAfB2P&X-Amz-Signature=7ac328858d6de6dc5aff03a8597ff8322753d410e4be2f96f5b09874bee8efa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V4ORE42%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqfQk2NmJLqVyBYrMSHA2EVXdcd4wjpGrBC82cXkZvfAiEA89PYXFas6TN5HyunvRA%2BICEiiMCMOHIzvYpEc1S4EusqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1D8HOakFMZ2JVuRyrcAy6ykPdGKQZGPGp7XkdepM7yjjTIzGRPOuPIqY65IVK1fgL6SRCQ%2FIFtvlfOIca2ZSiVeljwLkfQU8AGcNVGQGVUCnF1wuqR14sFLFgm3PrpwPA2QnoFOK3XUuX9I8vLB27Mg%2FhRXjznUjU2vWI7dRSbyUtyLNQGUqMUFEwRhfMvk34B%2BbgRNp68tFAmqWBhhRW8tDuUVF83ZVs%2FsfNz9nMVP%2Ff9Ml13FP7O0med0RxYJAyLm%2Fq0fawllrHoGNrZfGHM53%2FgeldnKiB82UfZ9pA8H4N1fC5oi3JB16MWqY9T8WI9mC3n8E7zvslofoJ90mWoXI38J%2FAkH3SaQlRNGCsYvf4JSMZOVpGKUwk7BZZ5kq8sc0m%2FPphKmOjlGUH5b3my6QANikEKnG3jkIlcZas79wVFeB1e7PRrfUxuu3jbZhXhmSuKEWUTcZ6lU8I2qe9nLyoVEYz2A5I9YGSmCpg9pTzF1wK1ocjT0QvqMQcBRhGeBjU%2Bjkmm15Ef%2Bh7SlS%2BvtfyYesEaBNuCNS9JjDnhU7ed%2Ba%2FUQqYlm1vSzkp2IR%2FxaFOiw0rtSebHuVAA5AW3yieSaSfKpXmyHYYBPEFjj%2F1ypqkLZPRQHviHeRWRDdBcHDHfLQiCXVbNMKTfoskGOqUB5XxqVQB45EiycEGk9AabP%2FlR3Xe2Cssp8HRi6y7lqxVUwvEoLrsjypMeTjuW5rNc7I3AeVXikpUgnq01NH%2F2lMS6gGAsczu0GCtV0UtaCodiqcUH7pGtLz6khxW4fvMWDvm18RyUO2W2jL20Ndb%2BUkCJBayzkcb3ui2hDcbFSCeE99RMHc%2FlRiH84S91sWVYS5tv5pe%2FPz13zPHbUmaG%2BLwoxa9G&X-Amz-Signature=34e2e8544a1fa91169757498dba57aca2dcda6ec113eafda5078852e254d89c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEOT5YJ%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4FpOzfc2%2FindOmpK0gu7%2F%2Ft1zt7vYmiEf8X9pjM0uQAiAykHYxSvQoBYG31pf5qzXouCaS463sKYZqSY74pSWKUSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRXh%2F7TKdcEEfLDNTKtwDXmyZPazLd%2BsaCen8v7EUVm5jFLzV8%2FhtoiIwGDKVnjG5MYSZKsCcoSk1sGJtD51iCZ9VgoKiZHhp%2BrkhSw12GDyuUBeybtsnh6lcgbV7pGQsdhzYftAOACEyH4NQU8Lfmqfa%2FRoE1wgJpQqFr33g8cJt%2FY58MYQ9EPoTiRebfnTy5KwWCzERnUnUfwTI6N%2BU7ShuYpR4gbVMqYXKxnxlFYyXo0P0n3li%2BtO3KgxNAqgEvqAgGKmtigpKOastq2pH%2FhwEzN6onQ7jpxTwrAyO%2F9aXKhQJhGTePe2GWvNRCGB8C05LhKkWUZsotvgP9JUtxTHqhvh4PA5zXBL%2FjVUmTtId%2FgDayFOvu503x9QATB%2BYhs33n8fDgTrTk677JzeGcjacTOR%2FzPU73r75A3tZWebpN4gXdkIXV2Wd7sc4i0FM%2F8DqF7uSD%2FP3SnA2ndjEDzmD3jtrqwBYiYewdFmLutX0truXERpbzb8u%2BP0x%2FYMWibRdWUjsqHnsCgetpzFBeUZ5J0w7e5UWcUrP9Xljn9fa0rAMlHJILRAKqIM7d3lyqof39NHK9aPmxJKAuX81KpQ%2FJ1R%2F2oNdSF2%2BQTzJqVNqKnm7TGMl5Ad7wbqRfrjqlVUE2BxnvoRFtTUwsNaiyQY6pgF%2FNJZLgRnWXfJ1rr8HBNilJufbmxBu6G2oIK6ywG7hO5hCvnrQhKFsqKUx8waKVr3Bx2C3UhyDUtxvjz3HnM3ZuVRQIdjcyem%2B6IfgCSzGrRwF7TsGfvt80Poga%2B2SCPXW83jvHUfY%2BfJKgN5QTAHFiN2gtXqFAQySCw2JGj%2BUHqhcJ8juSb0QG5q%2BufYTGcpihYIye%2BIfKA4lFeZV2hjdNXYAfB2P&X-Amz-Signature=bec4ec693acd99ec3d63d3a1a2a55860d06c17257935baeba0579e292a1f7a77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJWYDQS%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdQKSNaAi3%2Fuaq0iGSeojyWTGeDAT7g4dFrNggaIaJ1QIhAM5qZM4Rq9bM8iO5zKhasPcDmWJ%2BIAUohKz8CaiMsC7%2FKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQZve%2BnWgXDwCVLRQq3ANfJ7CBc60o9ukdDnMEaeHGMbKD7coAv0vGrDkj8qwYjaKnFiRIItjrWnHZwdvLq5OaGYPfVXC9TCr5FjaRmLIG34cEgzX7c9Qta8%2FCH3BqBKLQoS9Zb6gNb8XXx1NvT3oDbwx6pbW5M7QCQFqpfMUaiS1AZ0C%2B7xIAzirkqtUwxf%2FiwW7ClPeukiQ9x2m1e4DJcaVWv8AGQkqUu7dnfHXNesHF1nAmm4I3tv2JIsEMCk0OG9of%2F1gQDlr755w4aVU7ek41dR3XPd7rwirNUsyATmQg%2BMTbZHTPC2HbJ17yzFpNWeFigC9V9xPFxGibFQv3YiJH50Bp6h8WZD62x5AG6Rpyh0BP8SpzGEV6B5yVYVikc8NgL%2BzI1z8I%2Bvg3nuWSXN6e8IgoEqqO8i3a2QxJfIAWkC2dBEAMPxpoSnvMKBisLZGDFtUnYcWLMGTfCYOQIMbrzTt6WdvbDCFJFo%2FKlCVh4SOFm7atCO5bWp%2FaCDn1%2FzCnkdXaazuJxhymV00Zg3DvOLSRZxGnX0RH8GCqYzRNGCqXPrnGqf4c2w19KUAw%2Bm7NISytWQccoFR95wrqolWREl209sBxZ144iqIrv4n8DPlDLWYjPeaPa5qt0rwI%2FAKz%2By%2BlSTeNMjDa7qLJBjqkAePqpJfbsw%2FTgTt9Lrvcu3H%2F%2BAfUaDcvOncbHCQmrChX5I5T4HAsbb1Z8J5A3Iz7MY%2BP6jv%2BvF1KRt5TZvY%2F3col0b0lHqaohMS1VxwB01SeryLOdJ4%2FX%2BQwGF8YC84RNgrr%2BuR5P66%2BBT6yQW55Jkqif0t%2BYUoSzamArs3hMlpOX3tKqsK2EpSVNZGVlzmRrnjVG%2Fuz7JoFgiXH%2FcIN4aknoEms&X-Amz-Signature=1344124d69820dc92232b9ca0bbac6900e7dd144f7761ec0b61c3b24150c3dcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEOT5YJ%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4FpOzfc2%2FindOmpK0gu7%2F%2Ft1zt7vYmiEf8X9pjM0uQAiAykHYxSvQoBYG31pf5qzXouCaS463sKYZqSY74pSWKUSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRXh%2F7TKdcEEfLDNTKtwDXmyZPazLd%2BsaCen8v7EUVm5jFLzV8%2FhtoiIwGDKVnjG5MYSZKsCcoSk1sGJtD51iCZ9VgoKiZHhp%2BrkhSw12GDyuUBeybtsnh6lcgbV7pGQsdhzYftAOACEyH4NQU8Lfmqfa%2FRoE1wgJpQqFr33g8cJt%2FY58MYQ9EPoTiRebfnTy5KwWCzERnUnUfwTI6N%2BU7ShuYpR4gbVMqYXKxnxlFYyXo0P0n3li%2BtO3KgxNAqgEvqAgGKmtigpKOastq2pH%2FhwEzN6onQ7jpxTwrAyO%2F9aXKhQJhGTePe2GWvNRCGB8C05LhKkWUZsotvgP9JUtxTHqhvh4PA5zXBL%2FjVUmTtId%2FgDayFOvu503x9QATB%2BYhs33n8fDgTrTk677JzeGcjacTOR%2FzPU73r75A3tZWebpN4gXdkIXV2Wd7sc4i0FM%2F8DqF7uSD%2FP3SnA2ndjEDzmD3jtrqwBYiYewdFmLutX0truXERpbzb8u%2BP0x%2FYMWibRdWUjsqHnsCgetpzFBeUZ5J0w7e5UWcUrP9Xljn9fa0rAMlHJILRAKqIM7d3lyqof39NHK9aPmxJKAuX81KpQ%2FJ1R%2F2oNdSF2%2BQTzJqVNqKnm7TGMl5Ad7wbqRfrjqlVUE2BxnvoRFtTUwsNaiyQY6pgF%2FNJZLgRnWXfJ1rr8HBNilJufbmxBu6G2oIK6ywG7hO5hCvnrQhKFsqKUx8waKVr3Bx2C3UhyDUtxvjz3HnM3ZuVRQIdjcyem%2B6IfgCSzGrRwF7TsGfvt80Poga%2B2SCPXW83jvHUfY%2BfJKgN5QTAHFiN2gtXqFAQySCw2JGj%2BUHqhcJ8juSb0QG5q%2BufYTGcpihYIye%2BIfKA4lFeZV2hjdNXYAfB2P&X-Amz-Signature=81eeb040de44ef7f40b53dab754cc988bdc43b4a7f0b0ffb46ad358020da3999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PXXYGCM%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXpPwZP7RXbSSqwpOuiII6npfCr9TzNt39YZ5B3E%2FNBgIhAJKnTouG%2BUFe5EDRHQ5%2B7GQu2gj4TJQhq7oE3Ewb9bgVKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHXCjgwQfzVpyF87Iq3AMPJispptt5WDnnkzluDNmMpRZMkT290s0ZhS1q6sS9YQ8PHAW11pGNCtrYwGEQkuF8L05j%2B0cYDQArPfH7zfPZ5sm8TniySEtrqLCYToJOiqopZSU0VAifX6RSPCuEvfay4rby5Nz4kokmEDLtcp9lVNLWCE3xmO%2BR6b19qLirucMcfdP4oQQeRCoLLmL3tPeEt1JO7RdnJlgl9djdq9tE1C7iDCOvkwa%2FRD8Yzh1slOC89bD9TULbndGDYbtHngbW6v3UXG1KHqgFC9qRkyh1igHh4STXCy0yhKDMxC3gxxMgYSldtKa%2B4qwDGjqtTr1iNsITV%2Fd%2FOS308CGuJDG3LWFazP1lMeLRylTu%2FfM0rlCNgW7eafIilqsYpWfaImLJ6B5SY3EKHM2r2WyyCccv8U3hKOdI3lavy%2FeBRHompFOalo0HIpvc9xJsgTpDAmUUvPrYH1jzzJQDl3ckqNkpH6t096%2FtuZLqVIDWNFzwoFldP2LU2O0iTiX6bvsvKmkE%2FXxyYODXjhUDUiCvypA3XoXv%2B1vOkkvLs%2BbQ22KTJrugNt1AkzQEL6JFT1WI0qkdZGe4oj6VUUxKlUQ%2Bx0ecGWmZvAAEq2%2Bw%2Fx0J0vvAZM7bykxykNmc4KLuoDDPzqPJBjqkAWisDnTJ16i8DgeMhQ4IQw6Vi6VMB5sOtKaFeu62BWC4nx8De0twxRyZUTYXCpFBh7Jj5e6Q6CSCuVry11%2Frqvhbmdjsf9cUzELyzXtQHaYZmRqcXRp06fUSQ%2FfQR5ZKfpfMUAG0wkMsbQTbksuJBiH2bzoi2VV9X54kQWlBSbVZ17yiJkfl07eav6gb5p9aPWW3HC89ZzQ0Oh8j6mxQuP0fmULN&X-Amz-Signature=4ba89077b4532431b5689ad71f839cbef691f06517a6963a7e75cfa231f3348d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEOT5YJ%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4FpOzfc2%2FindOmpK0gu7%2F%2Ft1zt7vYmiEf8X9pjM0uQAiAykHYxSvQoBYG31pf5qzXouCaS463sKYZqSY74pSWKUSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRXh%2F7TKdcEEfLDNTKtwDXmyZPazLd%2BsaCen8v7EUVm5jFLzV8%2FhtoiIwGDKVnjG5MYSZKsCcoSk1sGJtD51iCZ9VgoKiZHhp%2BrkhSw12GDyuUBeybtsnh6lcgbV7pGQsdhzYftAOACEyH4NQU8Lfmqfa%2FRoE1wgJpQqFr33g8cJt%2FY58MYQ9EPoTiRebfnTy5KwWCzERnUnUfwTI6N%2BU7ShuYpR4gbVMqYXKxnxlFYyXo0P0n3li%2BtO3KgxNAqgEvqAgGKmtigpKOastq2pH%2FhwEzN6onQ7jpxTwrAyO%2F9aXKhQJhGTePe2GWvNRCGB8C05LhKkWUZsotvgP9JUtxTHqhvh4PA5zXBL%2FjVUmTtId%2FgDayFOvu503x9QATB%2BYhs33n8fDgTrTk677JzeGcjacTOR%2FzPU73r75A3tZWebpN4gXdkIXV2Wd7sc4i0FM%2F8DqF7uSD%2FP3SnA2ndjEDzmD3jtrqwBYiYewdFmLutX0truXERpbzb8u%2BP0x%2FYMWibRdWUjsqHnsCgetpzFBeUZ5J0w7e5UWcUrP9Xljn9fa0rAMlHJILRAKqIM7d3lyqof39NHK9aPmxJKAuX81KpQ%2FJ1R%2F2oNdSF2%2BQTzJqVNqKnm7TGMl5Ad7wbqRfrjqlVUE2BxnvoRFtTUwsNaiyQY6pgF%2FNJZLgRnWXfJ1rr8HBNilJufbmxBu6G2oIK6ywG7hO5hCvnrQhKFsqKUx8waKVr3Bx2C3UhyDUtxvjz3HnM3ZuVRQIdjcyem%2B6IfgCSzGrRwF7TsGfvt80Poga%2B2SCPXW83jvHUfY%2BfJKgN5QTAHFiN2gtXqFAQySCw2JGj%2BUHqhcJ8juSb0QG5q%2BufYTGcpihYIye%2BIfKA4lFeZV2hjdNXYAfB2P&X-Amz-Signature=d74213f65ed69136d2639c7deb63043293c5fa31179aa50a1d4fdef440f52cfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBZMAO73%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkOuP%2Fd%2B6xgT2Ogc%2FTxoun0YLP81d5HmoJstZI5KIgyAiEAyFkTQWtrhFat%2BWKCXtgHbyOLNOKfLZY%2BEzbxDfNpjVgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqRJBtz2OlaAu4rRCrcA2aYStrL1kBcM6%2F%2BxPG3k45HrMLGTg9p0KfA85OnNo0w7iGfzQnKPC5sQC7JO2QD%2FWzM96oDQn%2B85uodOjPItvaL3KFO9vt82%2Fjf9I1ukbqw5h7Zk9txTyPff6dpLI5U0A1zYksHUzeHNqrmecos%2Fz44VeVbddz906QNdvtvtZ2rBFEMiYTkcyDerPyNamdUCL485v%2FVzqiYEd9NQymej%2B4PQJCCteklfPfnrImO4E7%2FAmIUczQYir8%2BH%2BXkDqi59jLLtYBc6l8TpdPptUb6dhdMw3oefzi5oXqTrfwO3Fbm4Y7i0vjOt8TVrMB7GS3JpPpMNtF9qK1KxoBfdxt4mLN6yzKe6OXaG3RpwaBC%2BphPRPHx5tNfjGLfI8%2B36KB72dfg2eWx7XiBSEnSU6SNMZ0JiTOsAtSH%2B7oLRvzq3On966bT8%2FHf1imhUTkGD7MaJ95wzXSFrNLm6G6VQl5GAk8tM7KxYkOwst%2BYKRRhYqMPncDtOXLPNnTCp5kZn3pU1q9csJBAjFi2BH%2BZUR%2FYZ0V9ibnRL87CvzOE9IXoypx2o45780pGsMRJNrelMkM8ubr5c%2BGMY7%2BoFx6PdLf5kU4ezYMgHlP4lznmcslPxpB7EdcPIfInhG2UzSalMJT6oskGOqUBT2yriS5CXcCtLcsjlx%2BftlaD5IA3iyks8IrsCSeeYzv5wvV%2F%2FN5rugiXGt53RDVOP81AAwfZXst3wRu9OJg8g11r4YbgUeQiJ8aPgvTM7bYTUUJm%2FMCp3nxgmF3B153rcTbJKXsyS40M%2BBnEJUx0s36SP8C%2F8r6JnGwZTMorKYZbXorUv4PuAdA8e1FtmYMUYo90DJpNWpqW5E8wjLBz8w%2FllYxa&X-Amz-Signature=26b9d290af0d4a743ec1475feb86750369c9579a954d2593e7c7e6e436bd9ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEOT5YJ%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4FpOzfc2%2FindOmpK0gu7%2F%2Ft1zt7vYmiEf8X9pjM0uQAiAykHYxSvQoBYG31pf5qzXouCaS463sKYZqSY74pSWKUSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRXh%2F7TKdcEEfLDNTKtwDXmyZPazLd%2BsaCen8v7EUVm5jFLzV8%2FhtoiIwGDKVnjG5MYSZKsCcoSk1sGJtD51iCZ9VgoKiZHhp%2BrkhSw12GDyuUBeybtsnh6lcgbV7pGQsdhzYftAOACEyH4NQU8Lfmqfa%2FRoE1wgJpQqFr33g8cJt%2FY58MYQ9EPoTiRebfnTy5KwWCzERnUnUfwTI6N%2BU7ShuYpR4gbVMqYXKxnxlFYyXo0P0n3li%2BtO3KgxNAqgEvqAgGKmtigpKOastq2pH%2FhwEzN6onQ7jpxTwrAyO%2F9aXKhQJhGTePe2GWvNRCGB8C05LhKkWUZsotvgP9JUtxTHqhvh4PA5zXBL%2FjVUmTtId%2FgDayFOvu503x9QATB%2BYhs33n8fDgTrTk677JzeGcjacTOR%2FzPU73r75A3tZWebpN4gXdkIXV2Wd7sc4i0FM%2F8DqF7uSD%2FP3SnA2ndjEDzmD3jtrqwBYiYewdFmLutX0truXERpbzb8u%2BP0x%2FYMWibRdWUjsqHnsCgetpzFBeUZ5J0w7e5UWcUrP9Xljn9fa0rAMlHJILRAKqIM7d3lyqof39NHK9aPmxJKAuX81KpQ%2FJ1R%2F2oNdSF2%2BQTzJqVNqKnm7TGMl5Ad7wbqRfrjqlVUE2BxnvoRFtTUwsNaiyQY6pgF%2FNJZLgRnWXfJ1rr8HBNilJufbmxBu6G2oIK6ywG7hO5hCvnrQhKFsqKUx8waKVr3Bx2C3UhyDUtxvjz3HnM3ZuVRQIdjcyem%2B6IfgCSzGrRwF7TsGfvt80Poga%2B2SCPXW83jvHUfY%2BfJKgN5QTAHFiN2gtXqFAQySCw2JGj%2BUHqhcJ8juSb0QG5q%2BufYTGcpihYIye%2BIfKA4lFeZV2hjdNXYAfB2P&X-Amz-Signature=8921ca829a84dfcda27c44b51f67ace012c3d0d2e46bc96d0ed7e0c1bf1cc443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFTN2ZJJ%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFOv3Sqxfjxn%2FcvRrkUwP04j%2FCJNw9n50xHs%2Fc2NvmowIhAKNFa3rLs26PNyFjhDWlcYNQIzRjZcdtIUrHepR2iQVcKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE5B6bMniPIxaiyFQq3AMVB63U%2Bcc4o2QSlOzodEhqm%2FA4%2FCDZKVVI7Vhjvhs%2FyNMSurWZkIwwyvBs4uR6CZ8wI7a5icTqC9F9UtMHFmewBbrLH6qvsCiAt55qCUcFjdRnpWTqIn50hbufVTs4nMCfYVCMpsTfxgK2LSIDiT3QtmIRIq%2BsrelSz5wokKQpOW1xIveVTKyIAuGZIKR9%2B9lUmHYPYC3UpYhLXaDISkNk6N5OrqdDyvbNz2%2BNeFnJVlc9WzUW0YZ1%2FhoUCpOUXi5p15IeWJpr39gDpX5FKHj0%2BL5yvZ3dXvSb3AF4O9w2bqIE2G%2F2%2F1AtZayiSq8S3hoVDQf8lb85PZpmMlJaThwfveeOev%2Fm7FRtoie%2B41CdR6a1vIGek0DxvGTNPL7IEGrzKgL%2F62SXbLebc52xArRkIuyH6NzUtHZ2uaTEHtYLcGt0ai8TQal6iY7zyVmr20s0gqIQFwJUhZ4xVRaeDcKVDSz5hgWXih8FIRH3a%2BuRgQXYtpLv%2FQ06MpWPlp4NPpjx8XfXfgntSFwsTEHN6aynqNyFiSQTYniMHxcmxFmCqgOVe%2B8bX2Ns3qAJ7vd4ZaZyH5z1yJvP6LRgOcLAZmrnR9IKbFfUxCrAdI5Jjx51wn1zkuDJoJ6z3Ndf8TDpp6PJBjqkAdKuqHkebhaxj6E9U8WS98Ss7BCxNdarZ57NRdtkZ7EJEEL%2FLZKZkFW8vQAcQfRPlVDhrQci3RlSvA66t2rNnv5XZtIzecdDmcwAOzfaonQtKV9uuJhH6MKPQRus7bIOc5KRna%2FijoV1Tv6C2xYCVxpVNJZODJAspMsLz8pDbkMU2FQBhZQTkIO0XYnlvQJX438Xt7OVwlS3vUGgENQi2C4wa9ki&X-Amz-Signature=938b156fc731db5b2b58665407f9f23fae42d159fc40205563d637d35794f06a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYFXWO5E%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEPT%2FPiLWBmAYW9Z2whJ4g0tWAB3fwwxYGOjkav05nGwIgQzdunKpSGjR9Sy685ont55KhNhYxNZSd4eDU1uRpW%2B0qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORRMnxz5MuJi7OSOircAyeeIkWaX9EBPqtR%2FeHd5uUxKx9T0W5EdFe4cjftmvJjFsuluxu06WleQYK6vtO98%2BMWphPT68ocbpGQeuMTJuRq9na9hD0tEyxTHMzk2P5WChGsYlgG45Z4hCyp72vTVY3WlPH166lednhRsCeywROuBFEUTkidI0S2aueQU6JHXSLoRX16dcthr1e5cQfnrAIWGPMd4bXN26SMVMsBGJISqw%2B%2BScz2XM%2BOMk%2Fm5joyYKn7q%2FIn8fA4gehaumFc343kdXboMIrDLBJD%2ByfYvNx0rZ%2FIE3UVupZupJmEY2IArGVfBEib4clNDHwzZdGWmQlOlLAMPieNKedL%2F6PU74vn28XimkJ4iyl5wLRZapVhNimb2Xko7tlIXjZSBUm5HKjlfqR7Y76XAmq80wO8YeYIgwexZqF0QYvkZ4aGm6bjSDC9EbI9tSIMvrNNR0gH8rH7pUB7Ho2Z9kqRJR2Ip7dxL6iVy4tIixpxhWnCaSo3zjId0VIFkCXtIvn%2BK4kg0ixW9nvo4k%2FXJyjTn6CCBwAPG7ssfgYpBIkZtcW0b%2FoputlhzrJMosBnwWSj%2B%2FFCvPEG5RwpdTzrAJrq1Nf8ftADW2L7NtvsofhwNwtmOtHbxNM0bqLyRo6RbX2nMKzQoskGOqUB7Pw6cXTZx%2BP6jcvOuiaRggSp0wz5dMmcdrRQWC4wJ65rT3yqCiXs6MAfRkREFDExmSFSi6%2FMdJKGEsdFfVjm3zEBiUULuFyUAwlL1fpR81ouBlSGi8RocqrtquoqQA3iHrAnJi2dbS016T9Uwx8IsyyhGDu4TMKKrc31Z4a015N2X3GBWM91onJ%2FBYw9PtiQEr%2BKw2B14O3L%2F3R0MwBaVTtgssXZ&X-Amz-Signature=5a27c861ebe5667154364792e05908741bc5b8b31de3fc9dd0c8b38c8d5a64d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2VLNUNF%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu%2FJ3h9niup%2BobnEDd66N%2BhVv40WX5YzM2qWFRR0o%2B1AIhANCYU3BeX0r4HTI87yc8itAMlc0tfK8zm9kQ5qBcjs%2FnKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyla311XUMegfOhrQYq3AMvK%2FFSrZwX5CKL72%2BP4j3KBp2vWQ3oYqrnZx5USW%2F4CtQM9PNkerFXTz5pXnJk6JI%2FyOXUU6me9EsAGpJddsxPPcYLOLRmycAfUZnAjehCCHNYnesg1Y0bnrVX7qsuDy8NExnqzSG1LP0iOhF6b96JQHMq7ruO9kl5EmmirldeHHr604JDrzJXWCuCBbUpEN5%2FOs3JjeBV9Wh6P98DoYQZSA7f7kNsQGpQ9WQ37IgC6tpjbbkZiSUKSbLrkkw3wG5Gw4eZ0G3EORg%2FHZV0vRzW9tvED0v3xuVIguTef9RYG6frv9GjQQVchEj2u9xjCAX8g6zE85mzuy%2BvIh%2Fo%2BakpiFaB1uEGh8wQmtbhSVs6mNtihYiNOq69g51fQrBqbqQ803rqVEe8B8B9ZKAxnWhmJuWNAxUqFPrlipbXurXBe6pyDcAbBgclG5earxfGpDG7BsUSRH7wCg6Di4QkNJQNef%2BgMnXcsQQt5nTDoRgfFnTJuNQWz%2BKstLVvozt2Y%2FZN6J7zova9q%2FNAJqhgL2hjmpkgn4cuO9fBF0Dxp7Ylm9TMih6FAGucUzaBY0zrzvOG6eyjLR6rcEyN0vVyMq%2FLT1jjfrSo7LThlQ9ZYO95l4tYNZGwW%2B2DXq4UPzDRz6LJBjqkAfCdmAC9vued%2F0eOGymSdMXlN1lOq5SgAETKxM4Br35bLq8zzaZ5SL%2FwnDDJl0v77lq9DuFlbZHxkqUw3gLGjaoZi%2FLi5W1huDWy93Ccy4HcO2r7mkQ5Ki7o6u6Y0Y39bofb7UgPSBoFVdPGBV8e%2FVUqRNr3xKWpG9%2BCoU%2FwAncSswLkmVE0Wrn%2FKJmbzZBu3Q2l%2BDsykRzHsYB7NEOM2mZSMKc0&X-Amz-Signature=5f5204ee7818f9458c902710b3516186349e5c2e2a44228930f2e2cb3a42ff78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEOT5YJ%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4FpOzfc2%2FindOmpK0gu7%2F%2Ft1zt7vYmiEf8X9pjM0uQAiAykHYxSvQoBYG31pf5qzXouCaS463sKYZqSY74pSWKUSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRXh%2F7TKdcEEfLDNTKtwDXmyZPazLd%2BsaCen8v7EUVm5jFLzV8%2FhtoiIwGDKVnjG5MYSZKsCcoSk1sGJtD51iCZ9VgoKiZHhp%2BrkhSw12GDyuUBeybtsnh6lcgbV7pGQsdhzYftAOACEyH4NQU8Lfmqfa%2FRoE1wgJpQqFr33g8cJt%2FY58MYQ9EPoTiRebfnTy5KwWCzERnUnUfwTI6N%2BU7ShuYpR4gbVMqYXKxnxlFYyXo0P0n3li%2BtO3KgxNAqgEvqAgGKmtigpKOastq2pH%2FhwEzN6onQ7jpxTwrAyO%2F9aXKhQJhGTePe2GWvNRCGB8C05LhKkWUZsotvgP9JUtxTHqhvh4PA5zXBL%2FjVUmTtId%2FgDayFOvu503x9QATB%2BYhs33n8fDgTrTk677JzeGcjacTOR%2FzPU73r75A3tZWebpN4gXdkIXV2Wd7sc4i0FM%2F8DqF7uSD%2FP3SnA2ndjEDzmD3jtrqwBYiYewdFmLutX0truXERpbzb8u%2BP0x%2FYMWibRdWUjsqHnsCgetpzFBeUZ5J0w7e5UWcUrP9Xljn9fa0rAMlHJILRAKqIM7d3lyqof39NHK9aPmxJKAuX81KpQ%2FJ1R%2F2oNdSF2%2BQTzJqVNqKnm7TGMl5Ad7wbqRfrjqlVUE2BxnvoRFtTUwsNaiyQY6pgF%2FNJZLgRnWXfJ1rr8HBNilJufbmxBu6G2oIK6ywG7hO5hCvnrQhKFsqKUx8waKVr3Bx2C3UhyDUtxvjz3HnM3ZuVRQIdjcyem%2B6IfgCSzGrRwF7TsGfvt80Poga%2B2SCPXW83jvHUfY%2BfJKgN5QTAHFiN2gtXqFAQySCw2JGj%2BUHqhcJ8juSb0QG5q%2BufYTGcpihYIye%2BIfKA4lFeZV2hjdNXYAfB2P&X-Amz-Signature=0d9b1f6b93136db02d6e8c7b38709e68e9ef9293216a802b97f7f7e0ae4355dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEOT5YJ%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4FpOzfc2%2FindOmpK0gu7%2F%2Ft1zt7vYmiEf8X9pjM0uQAiAykHYxSvQoBYG31pf5qzXouCaS463sKYZqSY74pSWKUSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRXh%2F7TKdcEEfLDNTKtwDXmyZPazLd%2BsaCen8v7EUVm5jFLzV8%2FhtoiIwGDKVnjG5MYSZKsCcoSk1sGJtD51iCZ9VgoKiZHhp%2BrkhSw12GDyuUBeybtsnh6lcgbV7pGQsdhzYftAOACEyH4NQU8Lfmqfa%2FRoE1wgJpQqFr33g8cJt%2FY58MYQ9EPoTiRebfnTy5KwWCzERnUnUfwTI6N%2BU7ShuYpR4gbVMqYXKxnxlFYyXo0P0n3li%2BtO3KgxNAqgEvqAgGKmtigpKOastq2pH%2FhwEzN6onQ7jpxTwrAyO%2F9aXKhQJhGTePe2GWvNRCGB8C05LhKkWUZsotvgP9JUtxTHqhvh4PA5zXBL%2FjVUmTtId%2FgDayFOvu503x9QATB%2BYhs33n8fDgTrTk677JzeGcjacTOR%2FzPU73r75A3tZWebpN4gXdkIXV2Wd7sc4i0FM%2F8DqF7uSD%2FP3SnA2ndjEDzmD3jtrqwBYiYewdFmLutX0truXERpbzb8u%2BP0x%2FYMWibRdWUjsqHnsCgetpzFBeUZ5J0w7e5UWcUrP9Xljn9fa0rAMlHJILRAKqIM7d3lyqof39NHK9aPmxJKAuX81KpQ%2FJ1R%2F2oNdSF2%2BQTzJqVNqKnm7TGMl5Ad7wbqRfrjqlVUE2BxnvoRFtTUwsNaiyQY6pgF%2FNJZLgRnWXfJ1rr8HBNilJufbmxBu6G2oIK6ywG7hO5hCvnrQhKFsqKUx8waKVr3Bx2C3UhyDUtxvjz3HnM3ZuVRQIdjcyem%2B6IfgCSzGrRwF7TsGfvt80Poga%2B2SCPXW83jvHUfY%2BfJKgN5QTAHFiN2gtXqFAQySCw2JGj%2BUHqhcJ8juSb0QG5q%2BufYTGcpihYIye%2BIfKA4lFeZV2hjdNXYAfB2P&X-Amz-Signature=21f157e989894e9669a8821e0c6dc48195c34d4ba8fdeda80dc5b6d6db742f0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBX3P27D%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbgvSVJoCJOFj%2FarfxAb%2Fg2qXZXFbcteGExVw9w9A26AIgI5fSit8HRp1siQAfzImL1MY9zbeOFAeAS7myAjlns2MqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINk7P8AODenddVQRyrcA7Dp%2B7WQ0iW7MLfgWMyq%2B8Se4Wh%2F7xIxq5HjgbKWeiKgc6s%2Fabp7HfY5s3POvhNIC7kDjwvqfMiBrD3rbj%2Fej8t86zUuaGL2Ir6YdPoqwnk8LA5hy0D7aIiyvji0ryNXeCL70PSFPQDmb6E78N%2FVqbwuxjcS2xbGFVWEv8qtVTlZgocM7jrtG%2BEDe1nkSeJRvERaKx%2B0enVPOvj1aP9%2BApjSPcoqIUQdFC3mvqoYHn%2F2wNECsUBJFGp3d%2B%2BsO%2BoyXMbVn72d9HvBZKjMGYZKxiiHdCp9ZmSq5H%2BIwHwTOsO69neDZUCg%2BL4ZQrpVta7nnyD1UXVYv09Eucw8lUYZ91LXvErmKzDA%2F1rWZAg8%2FQpgbeJThrQbhCyHPTNQxXek5MLYu%2B7vmjqWoWcrphNaVKlobq%2FcBRAd6nm6fXvTFBuIS%2B%2BRPGrFN7DLoHKJhgF801%2FVLAHmoqK1%2Bu7cgyZQdN0b7n4OvRgy%2Fu98PjuMzzzMJiXU0ConUGBTMGpVeqTL0Dnm3UcU24LgB28La8CMa88YBWbjuwiJGhcr8YnxnCMqViOOGs6V2l9NeMyRxVQzo7nIgGWEhPDnhpC2wMmzeRZQTVzrBSgQwpO0gQyRWd3IxXtdHzbjtRanHMdqMLfzoskGOqUBdj91IJudVhNYg1u5C1d9QfF2ksOSNEq8nKtSG6FJ0H92N6hysFlzhyII%2FY8DlolS5OPDOa8JAdzCdxtxbOj8QwhCnfAxNlllT0oW555O50oQoth%2B2WEDvDgcSOoI%2FBDTk9J%2FtEMh7Zf7O8rjD2Tyk%2B5RLmAKDiWjViqvUxf73Lny9kbbB%2Bil319HPXtsovkiZe7%2FvKNvhFguShmu8vYqN4a4V3F%2F&X-Amz-Signature=09adf700c00713f4cce416ce1b700a1dfd2b7cd5765a28e4dc105f686398128d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBX3P27D%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbgvSVJoCJOFj%2FarfxAb%2Fg2qXZXFbcteGExVw9w9A26AIgI5fSit8HRp1siQAfzImL1MY9zbeOFAeAS7myAjlns2MqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINk7P8AODenddVQRyrcA7Dp%2B7WQ0iW7MLfgWMyq%2B8Se4Wh%2F7xIxq5HjgbKWeiKgc6s%2Fabp7HfY5s3POvhNIC7kDjwvqfMiBrD3rbj%2Fej8t86zUuaGL2Ir6YdPoqwnk8LA5hy0D7aIiyvji0ryNXeCL70PSFPQDmb6E78N%2FVqbwuxjcS2xbGFVWEv8qtVTlZgocM7jrtG%2BEDe1nkSeJRvERaKx%2B0enVPOvj1aP9%2BApjSPcoqIUQdFC3mvqoYHn%2F2wNECsUBJFGp3d%2B%2BsO%2BoyXMbVn72d9HvBZKjMGYZKxiiHdCp9ZmSq5H%2BIwHwTOsO69neDZUCg%2BL4ZQrpVta7nnyD1UXVYv09Eucw8lUYZ91LXvErmKzDA%2F1rWZAg8%2FQpgbeJThrQbhCyHPTNQxXek5MLYu%2B7vmjqWoWcrphNaVKlobq%2FcBRAd6nm6fXvTFBuIS%2B%2BRPGrFN7DLoHKJhgF801%2FVLAHmoqK1%2Bu7cgyZQdN0b7n4OvRgy%2Fu98PjuMzzzMJiXU0ConUGBTMGpVeqTL0Dnm3UcU24LgB28La8CMa88YBWbjuwiJGhcr8YnxnCMqViOOGs6V2l9NeMyRxVQzo7nIgGWEhPDnhpC2wMmzeRZQTVzrBSgQwpO0gQyRWd3IxXtdHzbjtRanHMdqMLfzoskGOqUBdj91IJudVhNYg1u5C1d9QfF2ksOSNEq8nKtSG6FJ0H92N6hysFlzhyII%2FY8DlolS5OPDOa8JAdzCdxtxbOj8QwhCnfAxNlllT0oW555O50oQoth%2B2WEDvDgcSOoI%2FBDTk9J%2FtEMh7Zf7O8rjD2Tyk%2B5RLmAKDiWjViqvUxf73Lny9kbbB%2Bil319HPXtsovkiZe7%2FvKNvhFguShmu8vYqN4a4V3F%2F&X-Amz-Signature=c91f98073c686368fcc7b722804e94cac7c733ff213cc0366b5b9a89481e24fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBX3P27D%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbgvSVJoCJOFj%2FarfxAb%2Fg2qXZXFbcteGExVw9w9A26AIgI5fSit8HRp1siQAfzImL1MY9zbeOFAeAS7myAjlns2MqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINk7P8AODenddVQRyrcA7Dp%2B7WQ0iW7MLfgWMyq%2B8Se4Wh%2F7xIxq5HjgbKWeiKgc6s%2Fabp7HfY5s3POvhNIC7kDjwvqfMiBrD3rbj%2Fej8t86zUuaGL2Ir6YdPoqwnk8LA5hy0D7aIiyvji0ryNXeCL70PSFPQDmb6E78N%2FVqbwuxjcS2xbGFVWEv8qtVTlZgocM7jrtG%2BEDe1nkSeJRvERaKx%2B0enVPOvj1aP9%2BApjSPcoqIUQdFC3mvqoYHn%2F2wNECsUBJFGp3d%2B%2BsO%2BoyXMbVn72d9HvBZKjMGYZKxiiHdCp9ZmSq5H%2BIwHwTOsO69neDZUCg%2BL4ZQrpVta7nnyD1UXVYv09Eucw8lUYZ91LXvErmKzDA%2F1rWZAg8%2FQpgbeJThrQbhCyHPTNQxXek5MLYu%2B7vmjqWoWcrphNaVKlobq%2FcBRAd6nm6fXvTFBuIS%2B%2BRPGrFN7DLoHKJhgF801%2FVLAHmoqK1%2Bu7cgyZQdN0b7n4OvRgy%2Fu98PjuMzzzMJiXU0ConUGBTMGpVeqTL0Dnm3UcU24LgB28La8CMa88YBWbjuwiJGhcr8YnxnCMqViOOGs6V2l9NeMyRxVQzo7nIgGWEhPDnhpC2wMmzeRZQTVzrBSgQwpO0gQyRWd3IxXtdHzbjtRanHMdqMLfzoskGOqUBdj91IJudVhNYg1u5C1d9QfF2ksOSNEq8nKtSG6FJ0H92N6hysFlzhyII%2FY8DlolS5OPDOa8JAdzCdxtxbOj8QwhCnfAxNlllT0oW555O50oQoth%2B2WEDvDgcSOoI%2FBDTk9J%2FtEMh7Zf7O8rjD2Tyk%2B5RLmAKDiWjViqvUxf73Lny9kbbB%2Bil319HPXtsovkiZe7%2FvKNvhFguShmu8vYqN4a4V3F%2F&X-Amz-Signature=3c6a060fa0b4d7daf6136f7b8a824d60c8acac30ccc88636f90f9864c1f89223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBX3P27D%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbgvSVJoCJOFj%2FarfxAb%2Fg2qXZXFbcteGExVw9w9A26AIgI5fSit8HRp1siQAfzImL1MY9zbeOFAeAS7myAjlns2MqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINk7P8AODenddVQRyrcA7Dp%2B7WQ0iW7MLfgWMyq%2B8Se4Wh%2F7xIxq5HjgbKWeiKgc6s%2Fabp7HfY5s3POvhNIC7kDjwvqfMiBrD3rbj%2Fej8t86zUuaGL2Ir6YdPoqwnk8LA5hy0D7aIiyvji0ryNXeCL70PSFPQDmb6E78N%2FVqbwuxjcS2xbGFVWEv8qtVTlZgocM7jrtG%2BEDe1nkSeJRvERaKx%2B0enVPOvj1aP9%2BApjSPcoqIUQdFC3mvqoYHn%2F2wNECsUBJFGp3d%2B%2BsO%2BoyXMbVn72d9HvBZKjMGYZKxiiHdCp9ZmSq5H%2BIwHwTOsO69neDZUCg%2BL4ZQrpVta7nnyD1UXVYv09Eucw8lUYZ91LXvErmKzDA%2F1rWZAg8%2FQpgbeJThrQbhCyHPTNQxXek5MLYu%2B7vmjqWoWcrphNaVKlobq%2FcBRAd6nm6fXvTFBuIS%2B%2BRPGrFN7DLoHKJhgF801%2FVLAHmoqK1%2Bu7cgyZQdN0b7n4OvRgy%2Fu98PjuMzzzMJiXU0ConUGBTMGpVeqTL0Dnm3UcU24LgB28La8CMa88YBWbjuwiJGhcr8YnxnCMqViOOGs6V2l9NeMyRxVQzo7nIgGWEhPDnhpC2wMmzeRZQTVzrBSgQwpO0gQyRWd3IxXtdHzbjtRanHMdqMLfzoskGOqUBdj91IJudVhNYg1u5C1d9QfF2ksOSNEq8nKtSG6FJ0H92N6hysFlzhyII%2FY8DlolS5OPDOa8JAdzCdxtxbOj8QwhCnfAxNlllT0oW555O50oQoth%2B2WEDvDgcSOoI%2FBDTk9J%2FtEMh7Zf7O8rjD2Tyk%2B5RLmAKDiWjViqvUxf73Lny9kbbB%2Bil319HPXtsovkiZe7%2FvKNvhFguShmu8vYqN4a4V3F%2F&X-Amz-Signature=edd69e89a121e65bc9a409156602a6158e152abf95c1994e474e721354cdd77e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2VATBG3%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvnUSXeTLNxRpo5QeAAM%2Fwp1uGE5pnY0TOOcnFuFXRrAiAzINlndNjBh2979ZXruMOvI%2FoFxHq2ugoAR04PNUDcgCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRPTyxhruhS0%2FKWoPKtwDoVm0hZqgNjsghxcotGFBkgmmHssjsG%2B3%2F358Hwuu6K4AkDC3IluONqjzkBZTKDbwTOwq6nzASFP5kdgJs6ftdWVoUvcE3DuKeCWy%2Bbd1xMZauyteB%2FVzEtkrdVdCLAscUSM2dVV3SNbwcMpvBwXrQk%2B2j0oiL69Y9BCZIHSy0wuKdEAZLAb9ORo6oQAGoLINbwRIhEK%2FYWzf0xlI3dz8cXEQXOJb%2BtdZ0IMMPk6KrojUidDbozwycYVBtMieKcgDRguP1QxfMuFfGYWVoLN7LLNIukxpOG3qs6CyheUknC1gmidVZ7AaVbnvoo4W7fcRA1tqh0%2B0FeF8A8bKzUIwMXd1htTDgtYZC2Ul9QeN%2Fo0DpPKk4iyd3y%2FxL0mtpHyDzCRYurYD1ncUfUt8bN2yJ31nw0EJkMKy4qXNRUHbTPlBA0%2B7gilyrtWVW3MksbwDIfIhlqeclOVPQvhZuzlr%2Fh4RGoJSzGwRFknF%2FvKXtbvVlw7hRMpDIe%2BvMpRhKuqAwjJUCxuuPxLpIXAyD20CCUzACpTrckRYlpanuxn%2FjlbMdjA2UWoRS3f9FGNQI2lYkf9PjB90Od0EE889Z%2FeyuyeN%2BrwK4t2Fmo0GaKGVTcGAToDObEBQvSy9UQwwzYCjyQY6pgGi6W%2FVkXyiBDMc9%2BbIr0eM8uV3H3TDTq3%2FPPPysWbrx6MJ1d1XSKPIv4Qqh54LXrPyulS2h7GD1JigRDp9Wg7q%2BQXit7N1zgrLjQqZ9bNYdOTwDkGTxbRJbIOCITR8QovR4Qv2eNehD%2FeKFiLgkCkRbPEMfDxnycsS%2BRqMxYxKUir3OnVHihaqoTBeC0LG4DxLBTlNQKg1PvM3LwaE14rTm3Migxx3&X-Amz-Signature=318a32bc2ab679e869726cd554f99a5047637b20c6b30250df23c36e1899ef3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBX3P27D%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbgvSVJoCJOFj%2FarfxAb%2Fg2qXZXFbcteGExVw9w9A26AIgI5fSit8HRp1siQAfzImL1MY9zbeOFAeAS7myAjlns2MqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINk7P8AODenddVQRyrcA7Dp%2B7WQ0iW7MLfgWMyq%2B8Se4Wh%2F7xIxq5HjgbKWeiKgc6s%2Fabp7HfY5s3POvhNIC7kDjwvqfMiBrD3rbj%2Fej8t86zUuaGL2Ir6YdPoqwnk8LA5hy0D7aIiyvji0ryNXeCL70PSFPQDmb6E78N%2FVqbwuxjcS2xbGFVWEv8qtVTlZgocM7jrtG%2BEDe1nkSeJRvERaKx%2B0enVPOvj1aP9%2BApjSPcoqIUQdFC3mvqoYHn%2F2wNECsUBJFGp3d%2B%2BsO%2BoyXMbVn72d9HvBZKjMGYZKxiiHdCp9ZmSq5H%2BIwHwTOsO69neDZUCg%2BL4ZQrpVta7nnyD1UXVYv09Eucw8lUYZ91LXvErmKzDA%2F1rWZAg8%2FQpgbeJThrQbhCyHPTNQxXek5MLYu%2B7vmjqWoWcrphNaVKlobq%2FcBRAd6nm6fXvTFBuIS%2B%2BRPGrFN7DLoHKJhgF801%2FVLAHmoqK1%2Bu7cgyZQdN0b7n4OvRgy%2Fu98PjuMzzzMJiXU0ConUGBTMGpVeqTL0Dnm3UcU24LgB28La8CMa88YBWbjuwiJGhcr8YnxnCMqViOOGs6V2l9NeMyRxVQzo7nIgGWEhPDnhpC2wMmzeRZQTVzrBSgQwpO0gQyRWd3IxXtdHzbjtRanHMdqMLfzoskGOqUBdj91IJudVhNYg1u5C1d9QfF2ksOSNEq8nKtSG6FJ0H92N6hysFlzhyII%2FY8DlolS5OPDOa8JAdzCdxtxbOj8QwhCnfAxNlllT0oW555O50oQoth%2B2WEDvDgcSOoI%2FBDTk9J%2FtEMh7Zf7O8rjD2Tyk%2B5RLmAKDiWjViqvUxf73Lny9kbbB%2Bil319HPXtsovkiZe7%2FvKNvhFguShmu8vYqN4a4V3F%2F&X-Amz-Signature=9f36227131a3a94260d4fd09c96491f27f332c630800e78953a0b8615645f7a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBX3P27D%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbgvSVJoCJOFj%2FarfxAb%2Fg2qXZXFbcteGExVw9w9A26AIgI5fSit8HRp1siQAfzImL1MY9zbeOFAeAS7myAjlns2MqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINk7P8AODenddVQRyrcA7Dp%2B7WQ0iW7MLfgWMyq%2B8Se4Wh%2F7xIxq5HjgbKWeiKgc6s%2Fabp7HfY5s3POvhNIC7kDjwvqfMiBrD3rbj%2Fej8t86zUuaGL2Ir6YdPoqwnk8LA5hy0D7aIiyvji0ryNXeCL70PSFPQDmb6E78N%2FVqbwuxjcS2xbGFVWEv8qtVTlZgocM7jrtG%2BEDe1nkSeJRvERaKx%2B0enVPOvj1aP9%2BApjSPcoqIUQdFC3mvqoYHn%2F2wNECsUBJFGp3d%2B%2BsO%2BoyXMbVn72d9HvBZKjMGYZKxiiHdCp9ZmSq5H%2BIwHwTOsO69neDZUCg%2BL4ZQrpVta7nnyD1UXVYv09Eucw8lUYZ91LXvErmKzDA%2F1rWZAg8%2FQpgbeJThrQbhCyHPTNQxXek5MLYu%2B7vmjqWoWcrphNaVKlobq%2FcBRAd6nm6fXvTFBuIS%2B%2BRPGrFN7DLoHKJhgF801%2FVLAHmoqK1%2Bu7cgyZQdN0b7n4OvRgy%2Fu98PjuMzzzMJiXU0ConUGBTMGpVeqTL0Dnm3UcU24LgB28La8CMa88YBWbjuwiJGhcr8YnxnCMqViOOGs6V2l9NeMyRxVQzo7nIgGWEhPDnhpC2wMmzeRZQTVzrBSgQwpO0gQyRWd3IxXtdHzbjtRanHMdqMLfzoskGOqUBdj91IJudVhNYg1u5C1d9QfF2ksOSNEq8nKtSG6FJ0H92N6hysFlzhyII%2FY8DlolS5OPDOa8JAdzCdxtxbOj8QwhCnfAxNlllT0oW555O50oQoth%2B2WEDvDgcSOoI%2FBDTk9J%2FtEMh7Zf7O8rjD2Tyk%2B5RLmAKDiWjViqvUxf73Lny9kbbB%2Bil319HPXtsovkiZe7%2FvKNvhFguShmu8vYqN4a4V3F%2F&X-Amz-Signature=fd6185e9fec0529e87d2dd6d5b83858f456d4901d18e2414671a73222b6e8f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBX3P27D%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbgvSVJoCJOFj%2FarfxAb%2Fg2qXZXFbcteGExVw9w9A26AIgI5fSit8HRp1siQAfzImL1MY9zbeOFAeAS7myAjlns2MqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINk7P8AODenddVQRyrcA7Dp%2B7WQ0iW7MLfgWMyq%2B8Se4Wh%2F7xIxq5HjgbKWeiKgc6s%2Fabp7HfY5s3POvhNIC7kDjwvqfMiBrD3rbj%2Fej8t86zUuaGL2Ir6YdPoqwnk8LA5hy0D7aIiyvji0ryNXeCL70PSFPQDmb6E78N%2FVqbwuxjcS2xbGFVWEv8qtVTlZgocM7jrtG%2BEDe1nkSeJRvERaKx%2B0enVPOvj1aP9%2BApjSPcoqIUQdFC3mvqoYHn%2F2wNECsUBJFGp3d%2B%2BsO%2BoyXMbVn72d9HvBZKjMGYZKxiiHdCp9ZmSq5H%2BIwHwTOsO69neDZUCg%2BL4ZQrpVta7nnyD1UXVYv09Eucw8lUYZ91LXvErmKzDA%2F1rWZAg8%2FQpgbeJThrQbhCyHPTNQxXek5MLYu%2B7vmjqWoWcrphNaVKlobq%2FcBRAd6nm6fXvTFBuIS%2B%2BRPGrFN7DLoHKJhgF801%2FVLAHmoqK1%2Bu7cgyZQdN0b7n4OvRgy%2Fu98PjuMzzzMJiXU0ConUGBTMGpVeqTL0Dnm3UcU24LgB28La8CMa88YBWbjuwiJGhcr8YnxnCMqViOOGs6V2l9NeMyRxVQzo7nIgGWEhPDnhpC2wMmzeRZQTVzrBSgQwpO0gQyRWd3IxXtdHzbjtRanHMdqMLfzoskGOqUBdj91IJudVhNYg1u5C1d9QfF2ksOSNEq8nKtSG6FJ0H92N6hysFlzhyII%2FY8DlolS5OPDOa8JAdzCdxtxbOj8QwhCnfAxNlllT0oW555O50oQoth%2B2WEDvDgcSOoI%2FBDTk9J%2FtEMh7Zf7O8rjD2Tyk%2B5RLmAKDiWjViqvUxf73Lny9kbbB%2Bil319HPXtsovkiZe7%2FvKNvhFguShmu8vYqN4a4V3F%2F&X-Amz-Signature=3c6a060fa0b4d7daf6136f7b8a824d60c8acac30ccc88636f90f9864c1f89223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBX3P27D%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbgvSVJoCJOFj%2FarfxAb%2Fg2qXZXFbcteGExVw9w9A26AIgI5fSit8HRp1siQAfzImL1MY9zbeOFAeAS7myAjlns2MqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINk7P8AODenddVQRyrcA7Dp%2B7WQ0iW7MLfgWMyq%2B8Se4Wh%2F7xIxq5HjgbKWeiKgc6s%2Fabp7HfY5s3POvhNIC7kDjwvqfMiBrD3rbj%2Fej8t86zUuaGL2Ir6YdPoqwnk8LA5hy0D7aIiyvji0ryNXeCL70PSFPQDmb6E78N%2FVqbwuxjcS2xbGFVWEv8qtVTlZgocM7jrtG%2BEDe1nkSeJRvERaKx%2B0enVPOvj1aP9%2BApjSPcoqIUQdFC3mvqoYHn%2F2wNECsUBJFGp3d%2B%2BsO%2BoyXMbVn72d9HvBZKjMGYZKxiiHdCp9ZmSq5H%2BIwHwTOsO69neDZUCg%2BL4ZQrpVta7nnyD1UXVYv09Eucw8lUYZ91LXvErmKzDA%2F1rWZAg8%2FQpgbeJThrQbhCyHPTNQxXek5MLYu%2B7vmjqWoWcrphNaVKlobq%2FcBRAd6nm6fXvTFBuIS%2B%2BRPGrFN7DLoHKJhgF801%2FVLAHmoqK1%2Bu7cgyZQdN0b7n4OvRgy%2Fu98PjuMzzzMJiXU0ConUGBTMGpVeqTL0Dnm3UcU24LgB28La8CMa88YBWbjuwiJGhcr8YnxnCMqViOOGs6V2l9NeMyRxVQzo7nIgGWEhPDnhpC2wMmzeRZQTVzrBSgQwpO0gQyRWd3IxXtdHzbjtRanHMdqMLfzoskGOqUBdj91IJudVhNYg1u5C1d9QfF2ksOSNEq8nKtSG6FJ0H92N6hysFlzhyII%2FY8DlolS5OPDOa8JAdzCdxtxbOj8QwhCnfAxNlllT0oW555O50oQoth%2B2WEDvDgcSOoI%2FBDTk9J%2FtEMh7Zf7O8rjD2Tyk%2B5RLmAKDiWjViqvUxf73Lny9kbbB%2Bil319HPXtsovkiZe7%2FvKNvhFguShmu8vYqN4a4V3F%2F&X-Amz-Signature=3ff2845812f5ac6a742d4ce13ab809dacf7da2ce5a0dff48c5ddc5c245b37989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBX3P27D%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbgvSVJoCJOFj%2FarfxAb%2Fg2qXZXFbcteGExVw9w9A26AIgI5fSit8HRp1siQAfzImL1MY9zbeOFAeAS7myAjlns2MqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINk7P8AODenddVQRyrcA7Dp%2B7WQ0iW7MLfgWMyq%2B8Se4Wh%2F7xIxq5HjgbKWeiKgc6s%2Fabp7HfY5s3POvhNIC7kDjwvqfMiBrD3rbj%2Fej8t86zUuaGL2Ir6YdPoqwnk8LA5hy0D7aIiyvji0ryNXeCL70PSFPQDmb6E78N%2FVqbwuxjcS2xbGFVWEv8qtVTlZgocM7jrtG%2BEDe1nkSeJRvERaKx%2B0enVPOvj1aP9%2BApjSPcoqIUQdFC3mvqoYHn%2F2wNECsUBJFGp3d%2B%2BsO%2BoyXMbVn72d9HvBZKjMGYZKxiiHdCp9ZmSq5H%2BIwHwTOsO69neDZUCg%2BL4ZQrpVta7nnyD1UXVYv09Eucw8lUYZ91LXvErmKzDA%2F1rWZAg8%2FQpgbeJThrQbhCyHPTNQxXek5MLYu%2B7vmjqWoWcrphNaVKlobq%2FcBRAd6nm6fXvTFBuIS%2B%2BRPGrFN7DLoHKJhgF801%2FVLAHmoqK1%2Bu7cgyZQdN0b7n4OvRgy%2Fu98PjuMzzzMJiXU0ConUGBTMGpVeqTL0Dnm3UcU24LgB28La8CMa88YBWbjuwiJGhcr8YnxnCMqViOOGs6V2l9NeMyRxVQzo7nIgGWEhPDnhpC2wMmzeRZQTVzrBSgQwpO0gQyRWd3IxXtdHzbjtRanHMdqMLfzoskGOqUBdj91IJudVhNYg1u5C1d9QfF2ksOSNEq8nKtSG6FJ0H92N6hysFlzhyII%2FY8DlolS5OPDOa8JAdzCdxtxbOj8QwhCnfAxNlllT0oW555O50oQoth%2B2WEDvDgcSOoI%2FBDTk9J%2FtEMh7Zf7O8rjD2Tyk%2B5RLmAKDiWjViqvUxf73Lny9kbbB%2Bil319HPXtsovkiZe7%2FvKNvhFguShmu8vYqN4a4V3F%2F&X-Amz-Signature=5be07a9086b72d2e4386b0bf618fa544559cc2ddc89c75f6eebd677809ebbf06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBX3P27D%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbgvSVJoCJOFj%2FarfxAb%2Fg2qXZXFbcteGExVw9w9A26AIgI5fSit8HRp1siQAfzImL1MY9zbeOFAeAS7myAjlns2MqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINk7P8AODenddVQRyrcA7Dp%2B7WQ0iW7MLfgWMyq%2B8Se4Wh%2F7xIxq5HjgbKWeiKgc6s%2Fabp7HfY5s3POvhNIC7kDjwvqfMiBrD3rbj%2Fej8t86zUuaGL2Ir6YdPoqwnk8LA5hy0D7aIiyvji0ryNXeCL70PSFPQDmb6E78N%2FVqbwuxjcS2xbGFVWEv8qtVTlZgocM7jrtG%2BEDe1nkSeJRvERaKx%2B0enVPOvj1aP9%2BApjSPcoqIUQdFC3mvqoYHn%2F2wNECsUBJFGp3d%2B%2BsO%2BoyXMbVn72d9HvBZKjMGYZKxiiHdCp9ZmSq5H%2BIwHwTOsO69neDZUCg%2BL4ZQrpVta7nnyD1UXVYv09Eucw8lUYZ91LXvErmKzDA%2F1rWZAg8%2FQpgbeJThrQbhCyHPTNQxXek5MLYu%2B7vmjqWoWcrphNaVKlobq%2FcBRAd6nm6fXvTFBuIS%2B%2BRPGrFN7DLoHKJhgF801%2FVLAHmoqK1%2Bu7cgyZQdN0b7n4OvRgy%2Fu98PjuMzzzMJiXU0ConUGBTMGpVeqTL0Dnm3UcU24LgB28La8CMa88YBWbjuwiJGhcr8YnxnCMqViOOGs6V2l9NeMyRxVQzo7nIgGWEhPDnhpC2wMmzeRZQTVzrBSgQwpO0gQyRWd3IxXtdHzbjtRanHMdqMLfzoskGOqUBdj91IJudVhNYg1u5C1d9QfF2ksOSNEq8nKtSG6FJ0H92N6hysFlzhyII%2FY8DlolS5OPDOa8JAdzCdxtxbOj8QwhCnfAxNlllT0oW555O50oQoth%2B2WEDvDgcSOoI%2FBDTk9J%2FtEMh7Zf7O8rjD2Tyk%2B5RLmAKDiWjViqvUxf73Lny9kbbB%2Bil319HPXtsovkiZe7%2FvKNvhFguShmu8vYqN4a4V3F%2F&X-Amz-Signature=644f6cff28bdac5e417a3faef0923d33814ed15732c4648d1698d87af495c6f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


