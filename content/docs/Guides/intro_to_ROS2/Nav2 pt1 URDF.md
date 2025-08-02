---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-02T01:13:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-02T01:13:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXENNVEM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCplPAe9V0xqypmL41Ns%2BpkqgnkCngMdhR4puGHQCGWkgIgSniHZTnc1ywCHMyRG7%2B%2BfN6ClvQ5ZtKonAqmfnnPBd4qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1cAtv2lXdPmvcP3yrcAxSxkDkJI4Upe6mjjnAhN23ChUhGOQTHasBR7peGyMTRFkyofuUPvQ5gPhG6uL%2B%2FVt8ibAPALXU0YXyZ682OfMrKrGM3xbRPxGs6PYPqQXprLrBR1W8VvVnQweWGc3GmmoFX3xD4GlHiL%2FqpiKZ6mPWdF8D6Dj%2BmKrwOaceclF76kooB21tjPU5XQBFAZPGRPgc3KgpL6ve6dorNf12tiAg4bPUoZ7hm9V%2F5Qs719VWVpKeY5R1Ju0N65tnqOoydtcqLKId8EoajhzbypwC%2BFUZllzqgB4ZYLmU3GmFRbe2eNtjtj4CUpsaqwdjX5%2B0toW2WQdp7%2FEI9p5ouo0VVzIFYc4zQ6%2F%2Fd2mAZWfKkRfU5uxBWR7cVctDTl1pf6infRsEN%2FIlfeedKVrMqYr03vko9rIhV7VNCNb%2F%2FcOb%2BkOxpFtJoaPD%2F%2F64YL8nQkj%2BiQZMTn6hcnziE68%2BRm9UiTfeiid98GGBzbzAODKx2zLxphPM7o0%2Fx7NpSQeCejYT2dFJ0KM6utWVC6V7qJq8zZC81Y%2B2z6r1ska19H8spu%2B2%2Fnz4qVPjIOYQb%2FqhLLTv6XE293uzxluN4RO7MtOuArYN%2FvgGNSt1cnz86RhuhRUUpXfLCv%2BtkK3lFm2NvMNDKtsQGOqUBfDsSpOZzAGPIUw8QxDXcH2kSv%2BdoFZ46rA0N8Lzdb87YKs3BjNMLRz5QcBB0qUAuNJqGZReBdgSykr%2B%2BQzrc2Rhdi6Lr1XtO7gphubflxmhjfTLegP3GEwEVvAZZExfwHG0iAhTecw9UNYHSiwGoJ4hwdg9%2BBIylvgYDzulsjUeQKk43ij%2BPjZHFjG2KJ7%2FX0rCZ0J3Hce5v2aduCq8ptecDo5V3&X-Amz-Signature=7889262863a4b2707198105d1998fc54fcee7512e440a416591b3e84270b50ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXENNVEM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCplPAe9V0xqypmL41Ns%2BpkqgnkCngMdhR4puGHQCGWkgIgSniHZTnc1ywCHMyRG7%2B%2BfN6ClvQ5ZtKonAqmfnnPBd4qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1cAtv2lXdPmvcP3yrcAxSxkDkJI4Upe6mjjnAhN23ChUhGOQTHasBR7peGyMTRFkyofuUPvQ5gPhG6uL%2B%2FVt8ibAPALXU0YXyZ682OfMrKrGM3xbRPxGs6PYPqQXprLrBR1W8VvVnQweWGc3GmmoFX3xD4GlHiL%2FqpiKZ6mPWdF8D6Dj%2BmKrwOaceclF76kooB21tjPU5XQBFAZPGRPgc3KgpL6ve6dorNf12tiAg4bPUoZ7hm9V%2F5Qs719VWVpKeY5R1Ju0N65tnqOoydtcqLKId8EoajhzbypwC%2BFUZllzqgB4ZYLmU3GmFRbe2eNtjtj4CUpsaqwdjX5%2B0toW2WQdp7%2FEI9p5ouo0VVzIFYc4zQ6%2F%2Fd2mAZWfKkRfU5uxBWR7cVctDTl1pf6infRsEN%2FIlfeedKVrMqYr03vko9rIhV7VNCNb%2F%2FcOb%2BkOxpFtJoaPD%2F%2F64YL8nQkj%2BiQZMTn6hcnziE68%2BRm9UiTfeiid98GGBzbzAODKx2zLxphPM7o0%2Fx7NpSQeCejYT2dFJ0KM6utWVC6V7qJq8zZC81Y%2B2z6r1ska19H8spu%2B2%2Fnz4qVPjIOYQb%2FqhLLTv6XE293uzxluN4RO7MtOuArYN%2FvgGNSt1cnz86RhuhRUUpXfLCv%2BtkK3lFm2NvMNDKtsQGOqUBfDsSpOZzAGPIUw8QxDXcH2kSv%2BdoFZ46rA0N8Lzdb87YKs3BjNMLRz5QcBB0qUAuNJqGZReBdgSykr%2B%2BQzrc2Rhdi6Lr1XtO7gphubflxmhjfTLegP3GEwEVvAZZExfwHG0iAhTecw9UNYHSiwGoJ4hwdg9%2BBIylvgYDzulsjUeQKk43ij%2BPjZHFjG2KJ7%2FX0rCZ0J3Hce5v2aduCq8ptecDo5V3&X-Amz-Signature=ae248fcb7848b1457ec759bf1a5be67bd89f652a9616253a78f16a7bb1b071e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXENNVEM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCplPAe9V0xqypmL41Ns%2BpkqgnkCngMdhR4puGHQCGWkgIgSniHZTnc1ywCHMyRG7%2B%2BfN6ClvQ5ZtKonAqmfnnPBd4qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1cAtv2lXdPmvcP3yrcAxSxkDkJI4Upe6mjjnAhN23ChUhGOQTHasBR7peGyMTRFkyofuUPvQ5gPhG6uL%2B%2FVt8ibAPALXU0YXyZ682OfMrKrGM3xbRPxGs6PYPqQXprLrBR1W8VvVnQweWGc3GmmoFX3xD4GlHiL%2FqpiKZ6mPWdF8D6Dj%2BmKrwOaceclF76kooB21tjPU5XQBFAZPGRPgc3KgpL6ve6dorNf12tiAg4bPUoZ7hm9V%2F5Qs719VWVpKeY5R1Ju0N65tnqOoydtcqLKId8EoajhzbypwC%2BFUZllzqgB4ZYLmU3GmFRbe2eNtjtj4CUpsaqwdjX5%2B0toW2WQdp7%2FEI9p5ouo0VVzIFYc4zQ6%2F%2Fd2mAZWfKkRfU5uxBWR7cVctDTl1pf6infRsEN%2FIlfeedKVrMqYr03vko9rIhV7VNCNb%2F%2FcOb%2BkOxpFtJoaPD%2F%2F64YL8nQkj%2BiQZMTn6hcnziE68%2BRm9UiTfeiid98GGBzbzAODKx2zLxphPM7o0%2Fx7NpSQeCejYT2dFJ0KM6utWVC6V7qJq8zZC81Y%2B2z6r1ska19H8spu%2B2%2Fnz4qVPjIOYQb%2FqhLLTv6XE293uzxluN4RO7MtOuArYN%2FvgGNSt1cnz86RhuhRUUpXfLCv%2BtkK3lFm2NvMNDKtsQGOqUBfDsSpOZzAGPIUw8QxDXcH2kSv%2BdoFZ46rA0N8Lzdb87YKs3BjNMLRz5QcBB0qUAuNJqGZReBdgSykr%2B%2BQzrc2Rhdi6Lr1XtO7gphubflxmhjfTLegP3GEwEVvAZZExfwHG0iAhTecw9UNYHSiwGoJ4hwdg9%2BBIylvgYDzulsjUeQKk43ij%2BPjZHFjG2KJ7%2FX0rCZ0J3Hce5v2aduCq8ptecDo5V3&X-Amz-Signature=79deda7355bfffc7915829d4b073450e80b7e4e89d63853ca95cc48c05986c07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXENNVEM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCplPAe9V0xqypmL41Ns%2BpkqgnkCngMdhR4puGHQCGWkgIgSniHZTnc1ywCHMyRG7%2B%2BfN6ClvQ5ZtKonAqmfnnPBd4qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1cAtv2lXdPmvcP3yrcAxSxkDkJI4Upe6mjjnAhN23ChUhGOQTHasBR7peGyMTRFkyofuUPvQ5gPhG6uL%2B%2FVt8ibAPALXU0YXyZ682OfMrKrGM3xbRPxGs6PYPqQXprLrBR1W8VvVnQweWGc3GmmoFX3xD4GlHiL%2FqpiKZ6mPWdF8D6Dj%2BmKrwOaceclF76kooB21tjPU5XQBFAZPGRPgc3KgpL6ve6dorNf12tiAg4bPUoZ7hm9V%2F5Qs719VWVpKeY5R1Ju0N65tnqOoydtcqLKId8EoajhzbypwC%2BFUZllzqgB4ZYLmU3GmFRbe2eNtjtj4CUpsaqwdjX5%2B0toW2WQdp7%2FEI9p5ouo0VVzIFYc4zQ6%2F%2Fd2mAZWfKkRfU5uxBWR7cVctDTl1pf6infRsEN%2FIlfeedKVrMqYr03vko9rIhV7VNCNb%2F%2FcOb%2BkOxpFtJoaPD%2F%2F64YL8nQkj%2BiQZMTn6hcnziE68%2BRm9UiTfeiid98GGBzbzAODKx2zLxphPM7o0%2Fx7NpSQeCejYT2dFJ0KM6utWVC6V7qJq8zZC81Y%2B2z6r1ska19H8spu%2B2%2Fnz4qVPjIOYQb%2FqhLLTv6XE293uzxluN4RO7MtOuArYN%2FvgGNSt1cnz86RhuhRUUpXfLCv%2BtkK3lFm2NvMNDKtsQGOqUBfDsSpOZzAGPIUw8QxDXcH2kSv%2BdoFZ46rA0N8Lzdb87YKs3BjNMLRz5QcBB0qUAuNJqGZReBdgSykr%2B%2BQzrc2Rhdi6Lr1XtO7gphubflxmhjfTLegP3GEwEVvAZZExfwHG0iAhTecw9UNYHSiwGoJ4hwdg9%2BBIylvgYDzulsjUeQKk43ij%2BPjZHFjG2KJ7%2FX0rCZ0J3Hce5v2aduCq8ptecDo5V3&X-Amz-Signature=a59a9457670a9066f251b1a756cfb4e499e5fe70da1451781cd8663f2f22c888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXENNVEM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCplPAe9V0xqypmL41Ns%2BpkqgnkCngMdhR4puGHQCGWkgIgSniHZTnc1ywCHMyRG7%2B%2BfN6ClvQ5ZtKonAqmfnnPBd4qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1cAtv2lXdPmvcP3yrcAxSxkDkJI4Upe6mjjnAhN23ChUhGOQTHasBR7peGyMTRFkyofuUPvQ5gPhG6uL%2B%2FVt8ibAPALXU0YXyZ682OfMrKrGM3xbRPxGs6PYPqQXprLrBR1W8VvVnQweWGc3GmmoFX3xD4GlHiL%2FqpiKZ6mPWdF8D6Dj%2BmKrwOaceclF76kooB21tjPU5XQBFAZPGRPgc3KgpL6ve6dorNf12tiAg4bPUoZ7hm9V%2F5Qs719VWVpKeY5R1Ju0N65tnqOoydtcqLKId8EoajhzbypwC%2BFUZllzqgB4ZYLmU3GmFRbe2eNtjtj4CUpsaqwdjX5%2B0toW2WQdp7%2FEI9p5ouo0VVzIFYc4zQ6%2F%2Fd2mAZWfKkRfU5uxBWR7cVctDTl1pf6infRsEN%2FIlfeedKVrMqYr03vko9rIhV7VNCNb%2F%2FcOb%2BkOxpFtJoaPD%2F%2F64YL8nQkj%2BiQZMTn6hcnziE68%2BRm9UiTfeiid98GGBzbzAODKx2zLxphPM7o0%2Fx7NpSQeCejYT2dFJ0KM6utWVC6V7qJq8zZC81Y%2B2z6r1ska19H8spu%2B2%2Fnz4qVPjIOYQb%2FqhLLTv6XE293uzxluN4RO7MtOuArYN%2FvgGNSt1cnz86RhuhRUUpXfLCv%2BtkK3lFm2NvMNDKtsQGOqUBfDsSpOZzAGPIUw8QxDXcH2kSv%2BdoFZ46rA0N8Lzdb87YKs3BjNMLRz5QcBB0qUAuNJqGZReBdgSykr%2B%2BQzrc2Rhdi6Lr1XtO7gphubflxmhjfTLegP3GEwEVvAZZExfwHG0iAhTecw9UNYHSiwGoJ4hwdg9%2BBIylvgYDzulsjUeQKk43ij%2BPjZHFjG2KJ7%2FX0rCZ0J3Hce5v2aduCq8ptecDo5V3&X-Amz-Signature=9e792ef4f15d75d82ed1c84d14e6214acd9a865cc902fd3b9d516d9cbab01961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXENNVEM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCplPAe9V0xqypmL41Ns%2BpkqgnkCngMdhR4puGHQCGWkgIgSniHZTnc1ywCHMyRG7%2B%2BfN6ClvQ5ZtKonAqmfnnPBd4qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1cAtv2lXdPmvcP3yrcAxSxkDkJI4Upe6mjjnAhN23ChUhGOQTHasBR7peGyMTRFkyofuUPvQ5gPhG6uL%2B%2FVt8ibAPALXU0YXyZ682OfMrKrGM3xbRPxGs6PYPqQXprLrBR1W8VvVnQweWGc3GmmoFX3xD4GlHiL%2FqpiKZ6mPWdF8D6Dj%2BmKrwOaceclF76kooB21tjPU5XQBFAZPGRPgc3KgpL6ve6dorNf12tiAg4bPUoZ7hm9V%2F5Qs719VWVpKeY5R1Ju0N65tnqOoydtcqLKId8EoajhzbypwC%2BFUZllzqgB4ZYLmU3GmFRbe2eNtjtj4CUpsaqwdjX5%2B0toW2WQdp7%2FEI9p5ouo0VVzIFYc4zQ6%2F%2Fd2mAZWfKkRfU5uxBWR7cVctDTl1pf6infRsEN%2FIlfeedKVrMqYr03vko9rIhV7VNCNb%2F%2FcOb%2BkOxpFtJoaPD%2F%2F64YL8nQkj%2BiQZMTn6hcnziE68%2BRm9UiTfeiid98GGBzbzAODKx2zLxphPM7o0%2Fx7NpSQeCejYT2dFJ0KM6utWVC6V7qJq8zZC81Y%2B2z6r1ska19H8spu%2B2%2Fnz4qVPjIOYQb%2FqhLLTv6XE293uzxluN4RO7MtOuArYN%2FvgGNSt1cnz86RhuhRUUpXfLCv%2BtkK3lFm2NvMNDKtsQGOqUBfDsSpOZzAGPIUw8QxDXcH2kSv%2BdoFZ46rA0N8Lzdb87YKs3BjNMLRz5QcBB0qUAuNJqGZReBdgSykr%2B%2BQzrc2Rhdi6Lr1XtO7gphubflxmhjfTLegP3GEwEVvAZZExfwHG0iAhTecw9UNYHSiwGoJ4hwdg9%2BBIylvgYDzulsjUeQKk43ij%2BPjZHFjG2KJ7%2FX0rCZ0J3Hce5v2aduCq8ptecDo5V3&X-Amz-Signature=5044c4be5a67b6a08b45784fbd7144bc5ddfe49a0c6c02d7a460631d5ec03251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXENNVEM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCplPAe9V0xqypmL41Ns%2BpkqgnkCngMdhR4puGHQCGWkgIgSniHZTnc1ywCHMyRG7%2B%2BfN6ClvQ5ZtKonAqmfnnPBd4qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1cAtv2lXdPmvcP3yrcAxSxkDkJI4Upe6mjjnAhN23ChUhGOQTHasBR7peGyMTRFkyofuUPvQ5gPhG6uL%2B%2FVt8ibAPALXU0YXyZ682OfMrKrGM3xbRPxGs6PYPqQXprLrBR1W8VvVnQweWGc3GmmoFX3xD4GlHiL%2FqpiKZ6mPWdF8D6Dj%2BmKrwOaceclF76kooB21tjPU5XQBFAZPGRPgc3KgpL6ve6dorNf12tiAg4bPUoZ7hm9V%2F5Qs719VWVpKeY5R1Ju0N65tnqOoydtcqLKId8EoajhzbypwC%2BFUZllzqgB4ZYLmU3GmFRbe2eNtjtj4CUpsaqwdjX5%2B0toW2WQdp7%2FEI9p5ouo0VVzIFYc4zQ6%2F%2Fd2mAZWfKkRfU5uxBWR7cVctDTl1pf6infRsEN%2FIlfeedKVrMqYr03vko9rIhV7VNCNb%2F%2FcOb%2BkOxpFtJoaPD%2F%2F64YL8nQkj%2BiQZMTn6hcnziE68%2BRm9UiTfeiid98GGBzbzAODKx2zLxphPM7o0%2Fx7NpSQeCejYT2dFJ0KM6utWVC6V7qJq8zZC81Y%2B2z6r1ska19H8spu%2B2%2Fnz4qVPjIOYQb%2FqhLLTv6XE293uzxluN4RO7MtOuArYN%2FvgGNSt1cnz86RhuhRUUpXfLCv%2BtkK3lFm2NvMNDKtsQGOqUBfDsSpOZzAGPIUw8QxDXcH2kSv%2BdoFZ46rA0N8Lzdb87YKs3BjNMLRz5QcBB0qUAuNJqGZReBdgSykr%2B%2BQzrc2Rhdi6Lr1XtO7gphubflxmhjfTLegP3GEwEVvAZZExfwHG0iAhTecw9UNYHSiwGoJ4hwdg9%2BBIylvgYDzulsjUeQKk43ij%2BPjZHFjG2KJ7%2FX0rCZ0J3Hce5v2aduCq8ptecDo5V3&X-Amz-Signature=4b1c35ee40e1c68afcbe2fabcdf71846e69e33016aeffdcc9746371e6c57125c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXENNVEM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCplPAe9V0xqypmL41Ns%2BpkqgnkCngMdhR4puGHQCGWkgIgSniHZTnc1ywCHMyRG7%2B%2BfN6ClvQ5ZtKonAqmfnnPBd4qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1cAtv2lXdPmvcP3yrcAxSxkDkJI4Upe6mjjnAhN23ChUhGOQTHasBR7peGyMTRFkyofuUPvQ5gPhG6uL%2B%2FVt8ibAPALXU0YXyZ682OfMrKrGM3xbRPxGs6PYPqQXprLrBR1W8VvVnQweWGc3GmmoFX3xD4GlHiL%2FqpiKZ6mPWdF8D6Dj%2BmKrwOaceclF76kooB21tjPU5XQBFAZPGRPgc3KgpL6ve6dorNf12tiAg4bPUoZ7hm9V%2F5Qs719VWVpKeY5R1Ju0N65tnqOoydtcqLKId8EoajhzbypwC%2BFUZllzqgB4ZYLmU3GmFRbe2eNtjtj4CUpsaqwdjX5%2B0toW2WQdp7%2FEI9p5ouo0VVzIFYc4zQ6%2F%2Fd2mAZWfKkRfU5uxBWR7cVctDTl1pf6infRsEN%2FIlfeedKVrMqYr03vko9rIhV7VNCNb%2F%2FcOb%2BkOxpFtJoaPD%2F%2F64YL8nQkj%2BiQZMTn6hcnziE68%2BRm9UiTfeiid98GGBzbzAODKx2zLxphPM7o0%2Fx7NpSQeCejYT2dFJ0KM6utWVC6V7qJq8zZC81Y%2B2z6r1ska19H8spu%2B2%2Fnz4qVPjIOYQb%2FqhLLTv6XE293uzxluN4RO7MtOuArYN%2FvgGNSt1cnz86RhuhRUUpXfLCv%2BtkK3lFm2NvMNDKtsQGOqUBfDsSpOZzAGPIUw8QxDXcH2kSv%2BdoFZ46rA0N8Lzdb87YKs3BjNMLRz5QcBB0qUAuNJqGZReBdgSykr%2B%2BQzrc2Rhdi6Lr1XtO7gphubflxmhjfTLegP3GEwEVvAZZExfwHG0iAhTecw9UNYHSiwGoJ4hwdg9%2BBIylvgYDzulsjUeQKk43ij%2BPjZHFjG2KJ7%2FX0rCZ0J3Hce5v2aduCq8ptecDo5V3&X-Amz-Signature=dba7e00d8d68419881f1389658fb2e0900bba949cafcce6bedf40daa562bfbf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXENNVEM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCplPAe9V0xqypmL41Ns%2BpkqgnkCngMdhR4puGHQCGWkgIgSniHZTnc1ywCHMyRG7%2B%2BfN6ClvQ5ZtKonAqmfnnPBd4qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1cAtv2lXdPmvcP3yrcAxSxkDkJI4Upe6mjjnAhN23ChUhGOQTHasBR7peGyMTRFkyofuUPvQ5gPhG6uL%2B%2FVt8ibAPALXU0YXyZ682OfMrKrGM3xbRPxGs6PYPqQXprLrBR1W8VvVnQweWGc3GmmoFX3xD4GlHiL%2FqpiKZ6mPWdF8D6Dj%2BmKrwOaceclF76kooB21tjPU5XQBFAZPGRPgc3KgpL6ve6dorNf12tiAg4bPUoZ7hm9V%2F5Qs719VWVpKeY5R1Ju0N65tnqOoydtcqLKId8EoajhzbypwC%2BFUZllzqgB4ZYLmU3GmFRbe2eNtjtj4CUpsaqwdjX5%2B0toW2WQdp7%2FEI9p5ouo0VVzIFYc4zQ6%2F%2Fd2mAZWfKkRfU5uxBWR7cVctDTl1pf6infRsEN%2FIlfeedKVrMqYr03vko9rIhV7VNCNb%2F%2FcOb%2BkOxpFtJoaPD%2F%2F64YL8nQkj%2BiQZMTn6hcnziE68%2BRm9UiTfeiid98GGBzbzAODKx2zLxphPM7o0%2Fx7NpSQeCejYT2dFJ0KM6utWVC6V7qJq8zZC81Y%2B2z6r1ska19H8spu%2B2%2Fnz4qVPjIOYQb%2FqhLLTv6XE293uzxluN4RO7MtOuArYN%2FvgGNSt1cnz86RhuhRUUpXfLCv%2BtkK3lFm2NvMNDKtsQGOqUBfDsSpOZzAGPIUw8QxDXcH2kSv%2BdoFZ46rA0N8Lzdb87YKs3BjNMLRz5QcBB0qUAuNJqGZReBdgSykr%2B%2BQzrc2Rhdi6Lr1XtO7gphubflxmhjfTLegP3GEwEVvAZZExfwHG0iAhTecw9UNYHSiwGoJ4hwdg9%2BBIylvgYDzulsjUeQKk43ij%2BPjZHFjG2KJ7%2FX0rCZ0J3Hce5v2aduCq8ptecDo5V3&X-Amz-Signature=a1ceb247489d5cffd19b353e83220e253f472029d54de54258e09e7d994e5d9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

TODO: preview of robot we r going make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXENNVEM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCplPAe9V0xqypmL41Ns%2BpkqgnkCngMdhR4puGHQCGWkgIgSniHZTnc1ywCHMyRG7%2B%2BfN6ClvQ5ZtKonAqmfnnPBd4qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1cAtv2lXdPmvcP3yrcAxSxkDkJI4Upe6mjjnAhN23ChUhGOQTHasBR7peGyMTRFkyofuUPvQ5gPhG6uL%2B%2FVt8ibAPALXU0YXyZ682OfMrKrGM3xbRPxGs6PYPqQXprLrBR1W8VvVnQweWGc3GmmoFX3xD4GlHiL%2FqpiKZ6mPWdF8D6Dj%2BmKrwOaceclF76kooB21tjPU5XQBFAZPGRPgc3KgpL6ve6dorNf12tiAg4bPUoZ7hm9V%2F5Qs719VWVpKeY5R1Ju0N65tnqOoydtcqLKId8EoajhzbypwC%2BFUZllzqgB4ZYLmU3GmFRbe2eNtjtj4CUpsaqwdjX5%2B0toW2WQdp7%2FEI9p5ouo0VVzIFYc4zQ6%2F%2Fd2mAZWfKkRfU5uxBWR7cVctDTl1pf6infRsEN%2FIlfeedKVrMqYr03vko9rIhV7VNCNb%2F%2FcOb%2BkOxpFtJoaPD%2F%2F64YL8nQkj%2BiQZMTn6hcnziE68%2BRm9UiTfeiid98GGBzbzAODKx2zLxphPM7o0%2Fx7NpSQeCejYT2dFJ0KM6utWVC6V7qJq8zZC81Y%2B2z6r1ska19H8spu%2B2%2Fnz4qVPjIOYQb%2FqhLLTv6XE293uzxluN4RO7MtOuArYN%2FvgGNSt1cnz86RhuhRUUpXfLCv%2BtkK3lFm2NvMNDKtsQGOqUBfDsSpOZzAGPIUw8QxDXcH2kSv%2BdoFZ46rA0N8Lzdb87YKs3BjNMLRz5QcBB0qUAuNJqGZReBdgSykr%2B%2BQzrc2Rhdi6Lr1XtO7gphubflxmhjfTLegP3GEwEVvAZZExfwHG0iAhTecw9UNYHSiwGoJ4hwdg9%2BBIylvgYDzulsjUeQKk43ij%2BPjZHFjG2KJ7%2FX0rCZ0J3Hce5v2aduCq8ptecDo5V3&X-Amz-Signature=7e0c4c6a04bfbcbe2cd1d05099397ba0bd5184089a5d8b61ff4d261ce6c42f08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

urdf can get complex to look at so I will be putting a “_scratch”_ like equivalent next to each example I put down.

To start must all urdf have these tags:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
**<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">



</robot>**
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIL3AFN7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMf7%2BypRH2V%2FpQ27ntgOTz%2Bregosg6YM0j0l01uINrhAiEA8oMEjG0DosC9EkaUAeP6acVaD8HKPEoy0MtWh7qO8mYqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNttWIKukBT10Dl9NCrcA81LkoC2s7pcogp0bjSGiBgLcZzay%2F%2Fw%2FJizAnD07ae8xzcIXXA7RN7i1AvyqWYvNTUCTOFargp7aAybdCcoftFdaxj30c3%2FsPofc%2BKyrz6La3Hxb0084qemDwvCVKXyFw1ZgVGpBU%2BwCStvEHyA7p1Y%2BE3%2FWlGXerNYr0iujpeaAzoeBDatTA5MPaHSb%2F27JGnfn9GRVFwtm%2BM066HWvhC9cjyDFIr3ar%2Bhgdb1k%2BfOWQsmejJ675d%2FPtnfl5MjlaScyV%2BB3w9StpWNuLWnKWLm8Obxgebco4aD8KtY5Hcnh9mB0cZ2sh%2BfzJkHFTDqDz6xbQwqYKxv%2BCHl3icVhZczNFe4jquxVxwaodZoNFg9JgtiKrOXdYsFkccmlhmPBXUyySTBjBkgl3ReTvjo2lHPA6r1rYqym193XgagU2FqixX5qY6I8K1nZe56ZGv4mEOBJkuF0zqxhQfyhi%2BbzEHfgEMlz5zwYXvaGD5O6Wn1IyPI8U8mxNuHAX1s%2FfjsEw1hLrZw%2BGgrc%2Fv3tonJO6eh9FRDRPLm85ZI8lA%2BgoEO47A98YMvK%2FQ8UQ9RTj5chAhdAxQbGl467yPh6gxq4AJu1nClqwoY%2FT0B%2Bx4pDluEiy6AycktssmuldABMOnKtsQGOqUBPVT0pyjzNeL1%2BYBr%2Fw8cl%2BW4rQqFH2H5Pt9qvit0%2BBXTLu9M3uHZWPAQvVldVx4hPODQvO9MbnMHPhBAbeYhXGGcqKubUd3GH143OdxM9xdM%2BPcyzAu4mb3irivegAbkRXnzWZWcZGWkq5%2FPXVGXVCteIG5YIbE%2BXkp2aWDpJdwE%2Bk8iOUfnRqcQkXOAVOpKIH5DNtfD4VDPU9W22HJLDzcZUMrt&X-Amz-Signature=a0f294b1921e5eba8a63a09aa8b3d0ed4a32f7e1ebf7714cf93faec0723afb28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

All of our code will go in between the `<robot>` tags 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QWANIFD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKQenASVreVJ42RdTJ1uEx17jtvuqxaNDqcTcZ90XDNQIhAO0hAYN83Hpj2Ivcb9p48p1kwNS98IhayChMPPmC3DQQKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlsrhBYFMWrzoo2hIq3APgAU8%2BQTwbazzU9HBouEWrdMy9GnTBeYK3Vl7ujWjDTpZu5PfKWZoLXaeiOCq3mqhrE3t8wlqo2kC2CMLUzMdcbYa6FaHCgb6NG84i3KVDOiqCDHv8z%2FZlCPtHeZzmNB4RdP9FXfYRV%2FEYEqMKYyrEAz1ZTfvBACkVEL1VnqTgeV9GdsEjhERBDIBlZPuxdXioK%2BnoqfZTTP%2Fh2Gb%2FvwL6SYf6R3OLCxmH6DcHhBr%2FQvqjENbomiG7Dwxlrsz2I93j7jjmo7XC4rM7DHUom9l3k6soE9m71%2BoeXRPP4bc1M2TD9RIvMqb7ffnDuszZkGkoeVx7171WV4W%2B9AsZCqs0%2FxWwFjV4bqwmcK83gK3DOrD5y3a6LcrdYTGmw%2BjWFSrhljjeFJDJ6t%2Fy%2F%2BFhzVLrU3zSauue97OB04tyzYWLWc2TddWI%2BoLoJ08wvDVFgw3XHmzK8l%2BkELhXvWSAqmge0fGw2DwdkLcJ5Ig9dkvUh2sNZk%2BLhnKMswiv8ps6I0k1AhuhJ0ku0%2FDzFTk0hZYNNTjXaIZfoaQ2qk%2FnKZpmhpe3Znu0RBVf%2FtipgZC1pGm2jdcF76s7KGiXc%2BuuSCFXgemrrzmkZ5oeCUjzgL6IGkeoty%2BbHBNpN5POHDDpyrbEBjqkAWShp1vODS3IVdQIDMdwrAAQovM7LeZJiKWokIuAZy2hLerRMdlrRd3bj4AGqJfpvoh7C9XgrtDYGSCEzwJJDFUmGyKvQWimw%2Foipt6JWLd0Pyi7refer5XyS3AKPPqW2DCaUTsCfP0pPdr9YXT6Rtyu8xcKfsQ10qsnGxuugL2CnOgrxztK9zxwDW6coEQ8%2FiwJGB%2Fubn6aabbcH11moQpU7iFb&X-Amz-Signature=fe2783cd2cd0b31ca2c0ca1deb988d7cc8507de21a4654d2808b1f6b97102916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

You can think of these as **variables** but in the xacro language

<details>
      <summary>What do the variables represent?</summary>
      TODO:
  </details>

Lets now make a link for the body of the robot

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN3MMDDN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9E9FSenKpZxyLE01WC%2F4bL07utAP6VcdJXxcmq0CK%2FgIhAP%2BwfZeNWJ2i9rP3azOazZoPP8aYs0ZXOSqd%2B8XY5tILKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXJf9kR4BbGMGbiCoq3AMp33R4AnhHaAeCVrwSi%2BuRDWsBc2xn8dfIzyz5tPRU8J%2F2NmYaEULxAqTklGuCKtqhs52MgqKEOc5w3AfxSN%2Fw1pxnUKWV2R7Vb%2FIIyKYSpUoF83qu5paUhxPPFlQt2n%2F6fLq0lgMQhhy1n9mG1y5MeoidfF1rgWQ%2F3npm8wcyPKx0n4%2BYO5OiQwUxU36P3OUUdDNucRSn9WaizrOAu4oMtEMb229hG4tnw%2BP52fW%2BRkxH8Bof8wehu7xS9MNMickLiXk%2BWxKhdRRtt9ay0dQlqBhHaTbTIQ2tWCCl2%2FpYdaji5mwX9G2Kpy4Moji5%2FE4o5dVJWPCdCFtxyl%2F6csjmRxuvKD6JP0iJqb9RZUZ4gfcnDyzD1aMmw3q6Lvv%2FB1DBnoMsJ4roFRwO0NwaVc2%2BABGFbdhg7CChsLV5dV4p%2FIFSeOngREGspxJ32i5dWSMZo9V1LCuQOdhG1EIVMQp5qxSdBvYOwO0KrHdF%2B4ZPO4r3EwpRoZpOW%2B65ZMPqTj5tTafFVX8cku%2F9q2pN4eYi%2B0MowGyKao5GmgvgBftPcnx55jWLhLiMeTfOCkCGVNPgSSLArNT1uXkNpaKQBiFxewmd1kxwp3PAhnEtfcUJvkQKkqAi%2FF05pYFuZjD5yrbEBjqkAQ%2FoVhNN3Aw%2FRer7Hoq1oRCkAOUKbwExp9jqR9CrioqlVZikbE4sjPK%2FAopdXkwq7HP4zklNKv7F2TXRXuop3IBc9D5T4RN4Dr1za6SPLQSLnIpEKzYUZxQzvvaFIazuId%2BtWttkUJxFk67K2MvA%2FKGidXzjvR1bi%2BQWwjJOpj7%2BZH%2F151j%2BeiYyqyM027bttLCACc1rSfuXtazqllGaboTEahpw&X-Amz-Signature=4fcd8c4ef8837053e3ab4f3cab7ab8356265ed1c591b40ce56f6b6afee09a69e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXENNVEM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCplPAe9V0xqypmL41Ns%2BpkqgnkCngMdhR4puGHQCGWkgIgSniHZTnc1ywCHMyRG7%2B%2BfN6ClvQ5ZtKonAqmfnnPBd4qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1cAtv2lXdPmvcP3yrcAxSxkDkJI4Upe6mjjnAhN23ChUhGOQTHasBR7peGyMTRFkyofuUPvQ5gPhG6uL%2B%2FVt8ibAPALXU0YXyZ682OfMrKrGM3xbRPxGs6PYPqQXprLrBR1W8VvVnQweWGc3GmmoFX3xD4GlHiL%2FqpiKZ6mPWdF8D6Dj%2BmKrwOaceclF76kooB21tjPU5XQBFAZPGRPgc3KgpL6ve6dorNf12tiAg4bPUoZ7hm9V%2F5Qs719VWVpKeY5R1Ju0N65tnqOoydtcqLKId8EoajhzbypwC%2BFUZllzqgB4ZYLmU3GmFRbe2eNtjtj4CUpsaqwdjX5%2B0toW2WQdp7%2FEI9p5ouo0VVzIFYc4zQ6%2F%2Fd2mAZWfKkRfU5uxBWR7cVctDTl1pf6infRsEN%2FIlfeedKVrMqYr03vko9rIhV7VNCNb%2F%2FcOb%2BkOxpFtJoaPD%2F%2F64YL8nQkj%2BiQZMTn6hcnziE68%2BRm9UiTfeiid98GGBzbzAODKx2zLxphPM7o0%2Fx7NpSQeCejYT2dFJ0KM6utWVC6V7qJq8zZC81Y%2B2z6r1ska19H8spu%2B2%2Fnz4qVPjIOYQb%2FqhLLTv6XE293uzxluN4RO7MtOuArYN%2FvgGNSt1cnz86RhuhRUUpXfLCv%2BtkK3lFm2NvMNDKtsQGOqUBfDsSpOZzAGPIUw8QxDXcH2kSv%2BdoFZ46rA0N8Lzdb87YKs3BjNMLRz5QcBB0qUAuNJqGZReBdgSykr%2B%2BQzrc2Rhdi6Lr1XtO7gphubflxmhjfTLegP3GEwEVvAZZExfwHG0iAhTecw9UNYHSiwGoJ4hwdg9%2BBIylvgYDzulsjUeQKk43ij%2BPjZHFjG2KJ7%2FX0rCZ0J3Hce5v2aduCq8ptecDo5V3&X-Amz-Signature=88054b612fa7d51492fd6ce1b4c21f71e6cf889e7c875206deec62780c6bd10e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q5LNIRE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuGRkjB9Qp2rpfkJpnON0KAoWgtezxv8DCHu0pzz4DmAiEAzywHoF86bpEHlxxUxsR18LUJjE%2FKdpGXwWau%2FflS4T8qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6CcrV%2FpacTjj9SQyrcA9CAzHepX4ra6%2FBtruTt22JkBXuh9c2CP0GjxFqysY4p4mmYHG9jRv6pW6CXO%2Fq91tdl3BiDNDvU5tVw4Bq2lqXHk32G%2B5nfoNZ2F%2Bgg%2ByVePuIEObzuYIi%2BnRmfb3FGy%2Flk2ja5VIHmMsDGbWT2YfLOVIbinDlYZg%2B%2FPnO1K0fOi2%2FjIJc%2BF%2FGa%2BprcudO6eLerXO2Z6roNllgBPg1u6Sfr7GbLRBYhE5RF6B7iVKalbhgYuz6MUWqHJgyiUzGACrHQ8FgN63I9NH3lGgsaqY9h9QMqbWEpJ2n%2FcsOCq0Y77Te7tXCl2xu6aEEhq9s2mh%2BBT%2FfvkiuT3XUNbyhXJeHaM5FdzCJwaL17Mjbo%2BGnR2duwFNxi0UYtBnJzFS5DfJK7AapE9W9ezEfXRijHVSHk0fSofdVfGaQ62NZzGmdYHVod3PRDn02yev8phVG%2BpDxHeJsZj7ouZJ8M%2FR%2Fcl7k8PkmlkBYB56SdrTN84jmMTMJdRNN6ZdJKmDNR9xrglYXez3yxJ%2FNkOu68YffCjq%2BEX1LbYjTR4lZX8ApNzBefOlxFLr8I6XdNxUvKRJJRJxEekmI87kI5yhS5V3%2FyD5xKXzhGBmUZc0fhksreA%2FAUghLizX9dV5rA%2Fr0MMJzLtsQGOqUBaC5Tf%2FnPt1qZIM0V3t1YQuYocwvfyYvN1jXmSguoxMYPiWqPv%2BfCym2MuNuqWiiSR2VU%2B23C2sIyo92b1EppKwIMIkyKcbLNE0SOdIsQxejQ2EZJAiaENNMN0POS%2Fft2mVk%2BdGzdFyEdnBH9ylOhYzifuGrCLkYcRLcVjTyQ4XoPt9zAMBtT2KuG36ljkgS1H7%2BrVs3OXhEFOiBfHOdcs3le8J%2F9&X-Amz-Signature=293727253c18f88273a2e700f91f8d608b33e6e19a244aa78a41d2072f143ed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXENNVEM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCplPAe9V0xqypmL41Ns%2BpkqgnkCngMdhR4puGHQCGWkgIgSniHZTnc1ywCHMyRG7%2B%2BfN6ClvQ5ZtKonAqmfnnPBd4qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1cAtv2lXdPmvcP3yrcAxSxkDkJI4Upe6mjjnAhN23ChUhGOQTHasBR7peGyMTRFkyofuUPvQ5gPhG6uL%2B%2FVt8ibAPALXU0YXyZ682OfMrKrGM3xbRPxGs6PYPqQXprLrBR1W8VvVnQweWGc3GmmoFX3xD4GlHiL%2FqpiKZ6mPWdF8D6Dj%2BmKrwOaceclF76kooB21tjPU5XQBFAZPGRPgc3KgpL6ve6dorNf12tiAg4bPUoZ7hm9V%2F5Qs719VWVpKeY5R1Ju0N65tnqOoydtcqLKId8EoajhzbypwC%2BFUZllzqgB4ZYLmU3GmFRbe2eNtjtj4CUpsaqwdjX5%2B0toW2WQdp7%2FEI9p5ouo0VVzIFYc4zQ6%2F%2Fd2mAZWfKkRfU5uxBWR7cVctDTl1pf6infRsEN%2FIlfeedKVrMqYr03vko9rIhV7VNCNb%2F%2FcOb%2BkOxpFtJoaPD%2F%2F64YL8nQkj%2BiQZMTn6hcnziE68%2BRm9UiTfeiid98GGBzbzAODKx2zLxphPM7o0%2Fx7NpSQeCejYT2dFJ0KM6utWVC6V7qJq8zZC81Y%2B2z6r1ska19H8spu%2B2%2Fnz4qVPjIOYQb%2FqhLLTv6XE293uzxluN4RO7MtOuArYN%2FvgGNSt1cnz86RhuhRUUpXfLCv%2BtkK3lFm2NvMNDKtsQGOqUBfDsSpOZzAGPIUw8QxDXcH2kSv%2BdoFZ46rA0N8Lzdb87YKs3BjNMLRz5QcBB0qUAuNJqGZReBdgSykr%2B%2BQzrc2Rhdi6Lr1XtO7gphubflxmhjfTLegP3GEwEVvAZZExfwHG0iAhTecw9UNYHSiwGoJ4hwdg9%2BBIylvgYDzulsjUeQKk43ij%2BPjZHFjG2KJ7%2FX0rCZ0J3Hce5v2aduCq8ptecDo5V3&X-Amz-Signature=d2137251b63e3b9eb9ec6289a3167278e58d90a1a1b01d919fccbd2316a745ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQCMUXG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxxzHKyfoZuUuGUg5sdufMmKGGFh8%2B5V4jNKSbwwcPvAiEAj4uglIBrZ13PiZJCCdWndRs1BGXdCh03pK8c%2B4mQKCcqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAs1QOUEJwnxhuKSBircAzyIMq%2B3Ev2IxIuBZ1bCcqK5XSq%2Fo4Gac2%2BlhtA5JvVdkRfE%2FvURf7eblWwgAa8jO2Pg0ZY5J5yqF80yq14sUFKIyy7kRY2OKn1RhssxxSvQ%2Fj%2BwvdLaLgivrr%2Fb%2FMatC3M13BnOqb24KdzLIEUXyg79SPy8keO0om4R73QUwv5ZyBgEkkZXD%2Bv4t5YrKqJVSENq9bBAdX6EKq7%2Breq8fj5Ze7yWZKA4djnTodamhWmROwx3dMQmfHRx2Kt%2B6I86sWGpmOImSDv89T%2FlwIZV7MA3OPHXf%2B0F7j3d3OnlnRX2YKz8m4sblo%2B3TXqcx%2BORqRctLlcXWWPAKSHQqFtGOZi%2F6qJbWR1HS0uXk5rKLMxWfC1SX8DflQm9qEpbCuaHqITjn13w1%2F8gmFkpT%2FcER7USKRMjevq6s%2FP76hB0ZCzmLNWjH3kOB%2B5P6k%2F2LN5mYwICTKEO4CLAtY4nGlitbkd23bUR6nqdoP0uoRrf5LPDRlYnzvH8iMTcQv0uGKlI8esOMIrhH6J%2BPO5JGEMHgsDRV3zR5SNUKFHz6xxJdj1olcRPmZeMrhWApnAMYVvHjiIcu6ol8vumlKYXwwIYVu1aoTyLihpCqT7j2vj6jQ7xsXhMJBymgQxPVIEBMM%2FKtsQGOqUBMC34sZRMWnTQrC4IC0BH4fHXCw%2FSIRnluVzr%2FVUQv4dvq0svSann21p9RVy65fY%2FLKRuc4bYx5Vt5rVWBI%2Fscra7jkXC0QaCVlamNGoGStkyfw7yIfq%2FN99%2BqPUJuqTuoJNIjDZsrKWQrpowJELb4g8csV2YWw%2FNsB6kxkZ3EIMTD2XhQi%2BgSLD4p6NSp3ggPjx%2FeenGA%2Bk%2BWYVFg0FgmdZQodJG&X-Amz-Signature=4fe65e31955db8dbef13d6939c7bffb7d722482847b088fc18217561d4918199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXENNVEM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCplPAe9V0xqypmL41Ns%2BpkqgnkCngMdhR4puGHQCGWkgIgSniHZTnc1ywCHMyRG7%2B%2BfN6ClvQ5ZtKonAqmfnnPBd4qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1cAtv2lXdPmvcP3yrcAxSxkDkJI4Upe6mjjnAhN23ChUhGOQTHasBR7peGyMTRFkyofuUPvQ5gPhG6uL%2B%2FVt8ibAPALXU0YXyZ682OfMrKrGM3xbRPxGs6PYPqQXprLrBR1W8VvVnQweWGc3GmmoFX3xD4GlHiL%2FqpiKZ6mPWdF8D6Dj%2BmKrwOaceclF76kooB21tjPU5XQBFAZPGRPgc3KgpL6ve6dorNf12tiAg4bPUoZ7hm9V%2F5Qs719VWVpKeY5R1Ju0N65tnqOoydtcqLKId8EoajhzbypwC%2BFUZllzqgB4ZYLmU3GmFRbe2eNtjtj4CUpsaqwdjX5%2B0toW2WQdp7%2FEI9p5ouo0VVzIFYc4zQ6%2F%2Fd2mAZWfKkRfU5uxBWR7cVctDTl1pf6infRsEN%2FIlfeedKVrMqYr03vko9rIhV7VNCNb%2F%2FcOb%2BkOxpFtJoaPD%2F%2F64YL8nQkj%2BiQZMTn6hcnziE68%2BRm9UiTfeiid98GGBzbzAODKx2zLxphPM7o0%2Fx7NpSQeCejYT2dFJ0KM6utWVC6V7qJq8zZC81Y%2B2z6r1ska19H8spu%2B2%2Fnz4qVPjIOYQb%2FqhLLTv6XE293uzxluN4RO7MtOuArYN%2FvgGNSt1cnz86RhuhRUUpXfLCv%2BtkK3lFm2NvMNDKtsQGOqUBfDsSpOZzAGPIUw8QxDXcH2kSv%2BdoFZ46rA0N8Lzdb87YKs3BjNMLRz5QcBB0qUAuNJqGZReBdgSykr%2B%2BQzrc2Rhdi6Lr1XtO7gphubflxmhjfTLegP3GEwEVvAZZExfwHG0iAhTecw9UNYHSiwGoJ4hwdg9%2BBIylvgYDzulsjUeQKk43ij%2BPjZHFjG2KJ7%2FX0rCZ0J3Hce5v2aduCq8ptecDo5V3&X-Amz-Signature=31908cba11fe0662ce424c2f4d890d5b37dc992f9a78ebf436aa1cf7a52e4446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IYFEF6U%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtzj%2BCxRR8WemcZ2A2oBUnMcBbJXFdonWNWkucwR%2FW7QIhAOpaGc6%2BXaKMhKFjGNN2Guibo8blJvVrTpX3ygxyAnDGKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlnbK8%2BbQDUTKBIHUq3AMcf%2Fw6Mskl5V1Jx%2BYv0bpKPbjV%2B484tnv4TY24tKkjiuZJGlBYJ6jZIias44So6ieXutzo5RfpN3YjNcuWuZB4aI3Hd6O0WO7cJeGwbaopYF5PNlU6abiZuMRIYTDDP%2Fv5SXvD4c%2FRUU4yQpxrczqhQS%2BdoFmq9VlDSsv3pIKnQCQC1f%2BJQm2UzXK69K%2FwF3c3FDyDyaXhkDCMQuPExYjqWNaaeWa3VJsR%2FaQHmSq8MG%2BEDyKmnJMDhYX7rpY4tWWKjRpaYIUUnjQXiHoOE5Qvo32wEykvCRWHzwCcYtMEy0NktQ5hzLn8jlGqZ6Z5tsiGcyndXhdg2A%2FqqEdanpNlQesmVQSmv3ypnQw6VXI27iPZro%2FiiBzkgCyIITgha8AL08iqeK14mYfy24N7FjdpfTh8HhwkJUbcwZMl6aYZhAj%2BRcxzQXT%2F14XTTSQe5tzACzS6hbAqNn%2FiYW5J4a9DuBZ6txH1oA7uMheczkizgFnOkjpgUnr9AwYO1pmTymSl%2B8JPT4dUK2%2FOJORvv%2BywQI6G9IHc9smBP54FpWrsARmgwFLJoboSQoUYNs87WLgbHz2QO1b9hGeof8SEi4yPEiIdMG15vZdsjYGoPp4asdTGCPLA%2FaAw9TK%2B2DDjyrbEBjqkAc37DRVV1wa9hKFxb%2Bb85gJXOuCB1AM778cd%2BxlM4%2BTPdF%2F1bQOB2gGtDmtFEzfEcfWebUtHfFJfcmZudP44wZKMGFye1cO6VrHMSczllPBirqNXo71xvEgdfHHPsrk9NcdvCS%2FbZmUd8jsO6bPX2Q3zQsNWu9siHnWtlJyugTH1p44uq2GiZxRPxBywuyOrpOJXFJN08X31hrBl9255bkpkaxeW&X-Amz-Signature=06c8d81b0e1ce26793b1a0becbb48af195c6efdc07c8044557281fe9b5f162c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXENNVEM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCplPAe9V0xqypmL41Ns%2BpkqgnkCngMdhR4puGHQCGWkgIgSniHZTnc1ywCHMyRG7%2B%2BfN6ClvQ5ZtKonAqmfnnPBd4qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1cAtv2lXdPmvcP3yrcAxSxkDkJI4Upe6mjjnAhN23ChUhGOQTHasBR7peGyMTRFkyofuUPvQ5gPhG6uL%2B%2FVt8ibAPALXU0YXyZ682OfMrKrGM3xbRPxGs6PYPqQXprLrBR1W8VvVnQweWGc3GmmoFX3xD4GlHiL%2FqpiKZ6mPWdF8D6Dj%2BmKrwOaceclF76kooB21tjPU5XQBFAZPGRPgc3KgpL6ve6dorNf12tiAg4bPUoZ7hm9V%2F5Qs719VWVpKeY5R1Ju0N65tnqOoydtcqLKId8EoajhzbypwC%2BFUZllzqgB4ZYLmU3GmFRbe2eNtjtj4CUpsaqwdjX5%2B0toW2WQdp7%2FEI9p5ouo0VVzIFYc4zQ6%2F%2Fd2mAZWfKkRfU5uxBWR7cVctDTl1pf6infRsEN%2FIlfeedKVrMqYr03vko9rIhV7VNCNb%2F%2FcOb%2BkOxpFtJoaPD%2F%2F64YL8nQkj%2BiQZMTn6hcnziE68%2BRm9UiTfeiid98GGBzbzAODKx2zLxphPM7o0%2Fx7NpSQeCejYT2dFJ0KM6utWVC6V7qJq8zZC81Y%2B2z6r1ska19H8spu%2B2%2Fnz4qVPjIOYQb%2FqhLLTv6XE293uzxluN4RO7MtOuArYN%2FvgGNSt1cnz86RhuhRUUpXfLCv%2BtkK3lFm2NvMNDKtsQGOqUBfDsSpOZzAGPIUw8QxDXcH2kSv%2BdoFZ46rA0N8Lzdb87YKs3BjNMLRz5QcBB0qUAuNJqGZReBdgSykr%2B%2BQzrc2Rhdi6Lr1XtO7gphubflxmhjfTLegP3GEwEVvAZZExfwHG0iAhTecw9UNYHSiwGoJ4hwdg9%2BBIylvgYDzulsjUeQKk43ij%2BPjZHFjG2KJ7%2FX0rCZ0J3Hce5v2aduCq8ptecDo5V3&X-Amz-Signature=dd3c95d31f2e19bd3838a84e61a252e4edfc4509b2efc1c06b24bb9fda448d52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OJ2D3LO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRymvLzy0QPI86xIkkWwNttPSfhnffVj1K0lAGfH1ihAiBEptmcofI8ZeokIvvUp2gnyeqSJ3OadfqCmUKEksnARyqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg%2F2DXEiAHgdqf7YQKtwD28Ls2DmYPpnmTmt4JYMv3u871FuR9Q2rru4QPRFQ2cRsJ%2BQdPVfNi6JZRwRPBF%2BT6wa99weSwE2Zr318mw3IDq7H3q2ka52OC33BsSCkr%2FXpLyeNH32GMxJgrSyT4vjtA%2BSnr8beKcQtWRQj83%2FHVoO0wIJ1RQCdEwP48Gw5CRR84uOZOy97y2sCxLyeIUHm%2FNHb3Nxv9i4BRJ6HRWuurhmLNbh1W8t3LnuSp2hjlqxXBlfHzB%2Bg%2Fzkndbdl06y4pPm4luLiJ51U4PTl46pZbsJeBduyRJg32%2FC9l1EoTmJ7I9kGdrxHrk6yekgcpIlPZDjm%2BlCrNnzPn6tpRVu6GyC9FzwGd7PQDMaKMhh9PrOqgTJt%2BsFhXqmEEtAifixMKGM6Hk8lXR%2BBfE8KB567vvTpjlTJ%2BzE2G36FkpVCK5DwrNgbhkK3EVh9873h4HCOhWlA%2B6bZt27KAGgxK0EeirZ5trk6j37z6d4y643VM2r7JyyX72IGPVLvXJQlqxC7Rw5mItEu4NzXSbAQbCq5zfytnV%2F0zI%2Fv52VCCWtBzyTOvIS55tJ1U%2FAc0rR9aviqUKinEFnJegb4odkhptlkqKkBNjUh%2B0YsIRJ6NQA92i9oi0mZBorNbqIuvpYwncu2xAY6pgGwGI%2BxLUUGt4CDBaI6lFN5pfp4EWpnpU6YBQ%2FP3mb7Ls1JvrXFMmdqkAdXuCRDdRdcLZx1mpN8OEoyOe03OkkBx5M%2FdNo77Fr%2Fwjbv6spoJ5cH5%2FzppfFRuRdYW9cuohtEv2hY2Mtd%2Bv1FQGJmy9l7i%2Fd0k3WR%2FxMq2v2r2G5n4jGx6a2nIwGHvohbPY%2Fb5KVusHTh%2F9vm4oFf%2BFn4wZmQM3xorLwg&X-Amz-Signature=0233ccf12bada5041c744376179055a570dee3ed41f4289d4b2fb842c17ded83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>
  </details>

### Adding Collision and Inertia

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK6OKAF2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcZbG%2ByUEKEGpA7YCYU%2BofFGyxIf%2FVo9JEYBos1kU8JgIhALF0P86KzLF5jmSoPSE3%2B%2B%2B9cLhituAMtDw%2FA%2FiKZN0QKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV%2F%2F9KE%2BKos5C1n4gq3APGzQ79vLfYDzupYhBg3y%2BSp9jUZgZEeq%2FG0sfSdcZvjO0tD3%2BsptVSS7d7LHoeGtC71ADlS5hP88MH7eIezorFKSNpiZ%2F1GQJK0zamS%2B1BzxSp%2FsD%2FmfKTMvRssECFmV4C61YIFcQ1spgWgddUZeRuyOgFDhQN8HnyfpAtq5CVJ45eWrV61NT735KdPGFajVrwPS86HsxfM8dVni37vZA7M9RGqyP0sQSfVK%2F1robNlrdQOpRoCtULhwunzZsBnnR4r%2BH%2FhS01Sb7uMdgfQ3SUz%2BdpUiRPrzcUXp7c9zV9TAQ9CTs9E88Np3TFkZUeo2IpBipDjUYfiAyLRZqddtNTAvjpGIKymw31NSONGyUA2OKq32I4v159YEp39JnH3EdgtxNzjNKCsqKwPK7Ly%2Bq2kOaGu2U7Lhb01yv2bCubVg25Ro%2BZWdPRB8RiPsK6y0KzU8jeIiEpi8hGPsMKtFX6ZPOim0RAUHQiBH8PsQfyey2VHadzizYwCXBfJL0nry4NPdSqPm0WWX249MlXadT%2Fq5aGaF%2FWoqsjEt9WstBhduZ8ZB%2BjIymksh%2FK8GtjjebPxFIPLXtBSoD4AabTMj6ysaml6z39F88lcum1pDldo7FBSkmh5V5UnR2vNjC9yrbEBjqkAa1mW%2B6VSd6uiyHAaYhn7hQbqnnPZ4n%2BYXx3XUkNDeDK6SBmtsNtVjUfP18l2sWZ3Xn8UThe0TcJJyYpfylyolcmKckQT63NfoKBhvqm6KeF00hvfGYpW24QXK54YxFjdjsWC%2BOcLOQQPnrFNZSQ1GswalLdPIM45UB59MThCT%2F6yxU7VbFXaPxeRge%2BEAbPILgTjEV1yvffAvc7uM1vAv2BMRN%2B&X-Amz-Signature=95de8edafac769344ecec1bc842eb33db2be84a960165d3cc01050c698b1139b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

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

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOU4ETAE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGqkoVj9T7NNOHo5C37JBQpHkmfz4RcRB6c9umEWIFiAiBqYvlK2hHcjNokj1XulBrahEtVUGK%2Bn78ZRfzH8v5kUCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCHVJSHpAO3MGu8pyKtwDxrox5NOQSEier7SZ%2BQDbIsH72SCDs4f7oNQR3O4fJ6nG8fAVAXmL9hOijlrcoqZGY0pm8OipsRpPaa4m%2Fklguu%2BUOxNvTvjVJX7MI4JKzX00TiEpZwibQ6NLnW9%2ByPS8aF6LAFK7KAb6sUmXXx7d4pXApr%2B5xMOpkTmPN2YJtaiGU89AqV7zuYGmjW60Sj3gWYRr6uUA1zd5V8vYOpBnw%2F9T4a5RQgJbIYyLm53xKF2NL7qewbDgFfB2jVFb0%2FE4CwXw5pWK2CcXsrxTJhFAjFLq7s843kZQ4vKoUuxBzyYlr2HB4YqbsslG%2FIGmWRdNSZ5MWhG%2F4UIdU12fRIeKiQoNsl58%2FgHnEBEIZYuV4a%2FoJJJ%2Fs76EXgKSsJNsukQVZFzvMBpim5MJzOpLM0LqpojYET92csyPtnIXPCC3GcLi02TN6ATZjuXuB8w8GKErXtMLcKbV6jjexgOomATsuNw39rVM5htlRueCHjlOmeHs36kNNll0yhm9CNyr8J92f18hqzzqaaVUK0Cagj%2F%2FxJisCAT9RpeDUMJcnfXi21PF0xyu2yWck4yTXUG7jW8O6GQZCi2wdq%2B7sLwJj78U86kuMRcoODpXskOIeXyGXYK0waMjFYpkRR1j%2Fsww6sq2xAY6pgE4J1CpCPkkM7HiXV4D%2BzafCLJvkYybzoCz1fUYAbtaC6t%2FpCACBZFBfZx9cgxNwgXi0GXCuUDhZiCokKZ1RRrno54E1X6lF8UeoJlMWhvY1FdoyDZF57sBBoH1wLKcTTISJQB7Rz%2BEGr3mzpllQ26c28aqJzsOzyRwU9E3xLr5lbOVYyHBQ48CbFIvKSU1Hb1iKefa5bjdNi43wRBJCuH86guwmP70&X-Amz-Signature=9202b956a69ac8315aa7cef7492a93673418751b0916759ca9f27a5d116ca6cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MPLQ7Y6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqcALyGw1OKmWu08LZMClV5iEDkVmjegZ%2BX1djviILTAiEAwZ6D6J3F%2FCR%2BtOmln6GGYh4Q9ZN8AES9%2Bheq6qa9D84qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgKG9d3UNdFgndVnircA1rJC%2BlG%2Bm136CpaskyfQmVgQZkgnzfZi2gvqhIu6jYLym9Ud9qjQsVLJ5mbsd5%2BP5cilobgSXNOKBAwc3AODPGkZnux1ghgxsQlK97x4qizEgGKB%2BkTMeDx1H%2BiLWaakBGYf6oXD%2FrPy5AREesHZ3xGsz1CYcvifazd%2B2Gnmq0M95zZVaQBp1Sz21UAjQ3ZmwkcQJWXm8mXSa8FCWxs51tCIdP1l3ykSg1nSYxbrFb9M2hlhpA%2F8bww5O2vLm%2BOk3LOFzMrweuAu%2Bx4FPWFKZ40WCiubBDxYaz0F902tQn4ouVNq645wuVadQB%2FxzpSV10B1ulGwrXtWQdoxXjMvJFws0%2FvpEZnSTSgSs1AH7hj%2BccvS3plhvRYQMIOBp8bn%2BNC3754dHdTwY%2FnZz%2FRcgUmgNxXgTeXsmh6iJmO7zjIXj7UgEQWlqwUFm4NbPcJpXbLSGUVEHe4FN8TJ%2F5R0TKHQwi2lciQWsIVoLxvofeASzKPcwjpmDWr2%2ByLmW02r7xKmiEh%2Bn8yM17okGmZqYFiH%2FbnMMqzliFEnRJ%2FkU4ut8Q1YGz4dSKNMxkLKcQT4MWXY8fEMIdB3px2s4TUclTXEBQNsLZQCG2rF74sdiLzTV7Tbv2xfxKlOhtbMOLKtsQGOqUBUP8%2FsHunlOmKSQmv5IUXMwm3BgHAkbPeMudt%2FMZUyD1ow%2FqSmoZoKeK%2BOqz68L5cLGJPDpU6olfk6ZKAB%2F%2BouYzwW1fXKaaCQ1ur6fgcBYl3ga1%2BMsIFPqTY4exckCcbJoh9kz90svtDybNqRKhgc1EqlznbObUfRghAAGBmV0MKFjNs3q41lDk4Uj35PcnQqYNAly2VqxXXjSzTq4sj3xBo2icc&X-Amz-Signature=03c4e215d9384005b77ee87f710444063d00a08557c9bda96279bdc5976fbc35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNHXCGMS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjDSzbab0npAUdK%2BFxIqhyCncjMHJsqbELRusTDH2KCQIgUZncpv8kv4%2B4H3M14HX5UkUIK%2Bsq6zE%2Fbdf5d2VLBFcqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNStJ0if0ZL9v5jWTyrcA%2FOaE3v00X6bakV118tyDgznG4NFDGgf9sSzBlRd%2FBMHHigX5qK%2BOArrGi%2BHBZroMnbpjRiu%2FZZuDD3k%2B0gKfmYYuLnBpfKe4YYYkt6KreCg2HfEEKVomOWRuzDJxhuyqAicExHr5TlRd%2F4kuXLj4u6T6LpKZBU4nGhBUBMmGLgoas%2FOQKoYuZAyrg7trhp%2FzaayCRj1N7aUpEQchCnoGRcgJCiWU3RyjlluRMtOHRYnFv7cWe7s8K78RFlezbbkVqHzTyddyCg7JWxfSRH93lEhz0KxCiIpY8TxTmCXdMfM%2FntPlrZgRuIFkyIzOAWtDEnxLh0JNcOajU4Phx6XuTifYTmmmAF1r%2F4cYjjQsclVUe%2B84yU1dl6bwK2KobbSw2BU2R3HiXCBH6v9v1jtrvUls68wvb442t91fvpUAYRxkoZ21KJQ3NJrqsjgH0QG4inJcqoXfbO931FuJL337tgS%2FMnUYm5q%2FsbGhOEUPzU3s33j%2FOf1cPxrkRst5okuRF7ZicU15OTqhw3Lz0yePfp3tmZvx%2Fng1gbQbT%2F3TXarfwtA7rDBnDR%2BticjtjGt0kcp1ZIaP3uQ0RbMX4jo4kvOudYrm2im2%2BDyrEqVFqzUbD7S0G7XmodRwPA6MJLLtsQGOqUBOZx6ci9AC1Zkyd0b47xbH2LSLFBRxKSKtore5ML4svByC%2BhTlzAYbUmfiNGW40nABnRZfhRsUCaBYVzaSp1%2FJxXtB2BuxVHKRdd70s4T2rbQvJ5AK7Vc659yPVkrYH%2Bv8qFwApNvEFpQ1Pu7InFpgWk6mV6JnmpaTm%2BQAp3FpkrslmR%2BLkv%2Fiy8kygUqxpzmw0v1dv3zcPHszMpU2xEuFNpDXSYV&X-Amz-Signature=a32423100e01a5bd9b38712878bc116c5894cd256a960bf6347bef07bba16e87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXENNVEM%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCplPAe9V0xqypmL41Ns%2BpkqgnkCngMdhR4puGHQCGWkgIgSniHZTnc1ywCHMyRG7%2B%2BfN6ClvQ5ZtKonAqmfnnPBd4qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1cAtv2lXdPmvcP3yrcAxSxkDkJI4Upe6mjjnAhN23ChUhGOQTHasBR7peGyMTRFkyofuUPvQ5gPhG6uL%2B%2FVt8ibAPALXU0YXyZ682OfMrKrGM3xbRPxGs6PYPqQXprLrBR1W8VvVnQweWGc3GmmoFX3xD4GlHiL%2FqpiKZ6mPWdF8D6Dj%2BmKrwOaceclF76kooB21tjPU5XQBFAZPGRPgc3KgpL6ve6dorNf12tiAg4bPUoZ7hm9V%2F5Qs719VWVpKeY5R1Ju0N65tnqOoydtcqLKId8EoajhzbypwC%2BFUZllzqgB4ZYLmU3GmFRbe2eNtjtj4CUpsaqwdjX5%2B0toW2WQdp7%2FEI9p5ouo0VVzIFYc4zQ6%2F%2Fd2mAZWfKkRfU5uxBWR7cVctDTl1pf6infRsEN%2FIlfeedKVrMqYr03vko9rIhV7VNCNb%2F%2FcOb%2BkOxpFtJoaPD%2F%2F64YL8nQkj%2BiQZMTn6hcnziE68%2BRm9UiTfeiid98GGBzbzAODKx2zLxphPM7o0%2Fx7NpSQeCejYT2dFJ0KM6utWVC6V7qJq8zZC81Y%2B2z6r1ska19H8spu%2B2%2Fnz4qVPjIOYQb%2FqhLLTv6XE293uzxluN4RO7MtOuArYN%2FvgGNSt1cnz86RhuhRUUpXfLCv%2BtkK3lFm2NvMNDKtsQGOqUBfDsSpOZzAGPIUw8QxDXcH2kSv%2BdoFZ46rA0N8Lzdb87YKs3BjNMLRz5QcBB0qUAuNJqGZReBdgSykr%2B%2BQzrc2Rhdi6Lr1XtO7gphubflxmhjfTLegP3GEwEVvAZZExfwHG0iAhTecw9UNYHSiwGoJ4hwdg9%2BBIylvgYDzulsjUeQKk43ij%2BPjZHFjG2KJ7%2FX0rCZ0J3Hce5v2aduCq8ptecDo5V3&X-Amz-Signature=7733f1d9f4e817d4b66ced6718e5e7d65c0efeb77ff183420404c5209193a1b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
	- axis
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4XMXTIN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNu9%2FFXF4Ce882Va7VYRl1PmAzIugrCg6d8RM0O4z29AiAZNyeOcFop0gnu1ir%2BMrTrnrx0Rj%2F8kMyh3oXcOIgy%2BiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8YitAtYusN0Pce%2BNKtwDidNK1P08xUrFj1vaA2vFr8g4ZIg8PrjpKyJkH8Lb6cqgm779uIXeaPiVtyPaNEnRtme8avuZ0Og8M50aGwNSaVfynxdMZ4rzJHYyGSaHU%2FECV1RMg6IQOOIbUWLFrkAIwtGUOh6n7kEx6mwrwY1Jvycc6pkeDW9gzEgqzAtnzNV4wykroQRxVp0UYlK0X4f5KNcD7svmXYD8YBr47ucLCgoke4dFC7M2xBfDsWeUYDqG8WkkVUqhIVDiUG7%2FpuX22p7SwrPCArxnDINtWgYIrU9%2BCil%2FNvHGSNuZugOnI937F%2FgxY0gMRyqFVMl6i61vlCypwMWIhp6a6sXJN8cWABgQQXaMoO%2F3hPU2zD3c9BTUDitYwIhPGzKhS%2FMYitORTqxkxw%2FgaRhi%2Fl1yvLr9K1eN9JxXewkEENSQPDI1YsQnIQICOBCYcC8bLjvBa1Wz2HQ%2B8LwTYoV4eSq%2F3hpaJI6AY4xANWK9H4QNhdjaUpm5nU5gKh27qyhE%2Bjp32XIztd2ujnaMs7BQnRS3dfZF1dGsLopOwVccn6S37ru12wP2o4yqytgcTAMC9p0r6mofgwFqHdCq4BGmNr4oVX0uBK%2BJy%2FaRwTsKe1W3h3HPEZWK7SnSEnqjkvkaTgMwj8u2xAY6pgFAaudaBQsVwc2wQ0vKiF9qMRmy7HdMuHyMIHnUAoYN6oGslEvLQZndh0eitHA77gu48Nl%2FnqXYqiKmYiQ8OBGU%2BC7kf2P8BV1gsNC4%2FdYOxSrOZ6WsD3RhPvIucHSqKm5rgfXwBUI0lsQ4N8tkcm6skH3gSTJgTu%2BnwEgKhAWeFyPze9Ar8pKmw8sYhSqBRQq5W2dowD5tgOn%2F6wHTYK5rUm7vgdGo&X-Amz-Signature=45f65bfd6c14afa10d84b34aaac961c5acf246884ded10a413bae4789951e901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4XMXTIN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNu9%2FFXF4Ce882Va7VYRl1PmAzIugrCg6d8RM0O4z29AiAZNyeOcFop0gnu1ir%2BMrTrnrx0Rj%2F8kMyh3oXcOIgy%2BiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8YitAtYusN0Pce%2BNKtwDidNK1P08xUrFj1vaA2vFr8g4ZIg8PrjpKyJkH8Lb6cqgm779uIXeaPiVtyPaNEnRtme8avuZ0Og8M50aGwNSaVfynxdMZ4rzJHYyGSaHU%2FECV1RMg6IQOOIbUWLFrkAIwtGUOh6n7kEx6mwrwY1Jvycc6pkeDW9gzEgqzAtnzNV4wykroQRxVp0UYlK0X4f5KNcD7svmXYD8YBr47ucLCgoke4dFC7M2xBfDsWeUYDqG8WkkVUqhIVDiUG7%2FpuX22p7SwrPCArxnDINtWgYIrU9%2BCil%2FNvHGSNuZugOnI937F%2FgxY0gMRyqFVMl6i61vlCypwMWIhp6a6sXJN8cWABgQQXaMoO%2F3hPU2zD3c9BTUDitYwIhPGzKhS%2FMYitORTqxkxw%2FgaRhi%2Fl1yvLr9K1eN9JxXewkEENSQPDI1YsQnIQICOBCYcC8bLjvBa1Wz2HQ%2B8LwTYoV4eSq%2F3hpaJI6AY4xANWK9H4QNhdjaUpm5nU5gKh27qyhE%2Bjp32XIztd2ujnaMs7BQnRS3dfZF1dGsLopOwVccn6S37ru12wP2o4yqytgcTAMC9p0r6mofgwFqHdCq4BGmNr4oVX0uBK%2BJy%2FaRwTsKe1W3h3HPEZWK7SnSEnqjkvkaTgMwj8u2xAY6pgFAaudaBQsVwc2wQ0vKiF9qMRmy7HdMuHyMIHnUAoYN6oGslEvLQZndh0eitHA77gu48Nl%2FnqXYqiKmYiQ8OBGU%2BC7kf2P8BV1gsNC4%2FdYOxSrOZ6WsD3RhPvIucHSqKm5rgfXwBUI0lsQ4N8tkcm6skH3gSTJgTu%2BnwEgKhAWeFyPze9Ar8pKmw8sYhSqBRQq5W2dowD5tgOn%2F6wHTYK5rUm7vgdGo&X-Amz-Signature=19c0b66ec54c0fff9e774aa165b3f2eb2ffede562353949f6301747536e8f27f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4XMXTIN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNu9%2FFXF4Ce882Va7VYRl1PmAzIugrCg6d8RM0O4z29AiAZNyeOcFop0gnu1ir%2BMrTrnrx0Rj%2F8kMyh3oXcOIgy%2BiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8YitAtYusN0Pce%2BNKtwDidNK1P08xUrFj1vaA2vFr8g4ZIg8PrjpKyJkH8Lb6cqgm779uIXeaPiVtyPaNEnRtme8avuZ0Og8M50aGwNSaVfynxdMZ4rzJHYyGSaHU%2FECV1RMg6IQOOIbUWLFrkAIwtGUOh6n7kEx6mwrwY1Jvycc6pkeDW9gzEgqzAtnzNV4wykroQRxVp0UYlK0X4f5KNcD7svmXYD8YBr47ucLCgoke4dFC7M2xBfDsWeUYDqG8WkkVUqhIVDiUG7%2FpuX22p7SwrPCArxnDINtWgYIrU9%2BCil%2FNvHGSNuZugOnI937F%2FgxY0gMRyqFVMl6i61vlCypwMWIhp6a6sXJN8cWABgQQXaMoO%2F3hPU2zD3c9BTUDitYwIhPGzKhS%2FMYitORTqxkxw%2FgaRhi%2Fl1yvLr9K1eN9JxXewkEENSQPDI1YsQnIQICOBCYcC8bLjvBa1Wz2HQ%2B8LwTYoV4eSq%2F3hpaJI6AY4xANWK9H4QNhdjaUpm5nU5gKh27qyhE%2Bjp32XIztd2ujnaMs7BQnRS3dfZF1dGsLopOwVccn6S37ru12wP2o4yqytgcTAMC9p0r6mofgwFqHdCq4BGmNr4oVX0uBK%2BJy%2FaRwTsKe1W3h3HPEZWK7SnSEnqjkvkaTgMwj8u2xAY6pgFAaudaBQsVwc2wQ0vKiF9qMRmy7HdMuHyMIHnUAoYN6oGslEvLQZndh0eitHA77gu48Nl%2FnqXYqiKmYiQ8OBGU%2BC7kf2P8BV1gsNC4%2FdYOxSrOZ6WsD3RhPvIucHSqKm5rgfXwBUI0lsQ4N8tkcm6skH3gSTJgTu%2BnwEgKhAWeFyPze9Ar8pKmw8sYhSqBRQq5W2dowD5tgOn%2F6wHTYK5rUm7vgdGo&X-Amz-Signature=e18da5d90052c7e413121e94ad1fe5af6397883b9f72135c7b36045d0cca3e22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4XMXTIN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNu9%2FFXF4Ce882Va7VYRl1PmAzIugrCg6d8RM0O4z29AiAZNyeOcFop0gnu1ir%2BMrTrnrx0Rj%2F8kMyh3oXcOIgy%2BiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8YitAtYusN0Pce%2BNKtwDidNK1P08xUrFj1vaA2vFr8g4ZIg8PrjpKyJkH8Lb6cqgm779uIXeaPiVtyPaNEnRtme8avuZ0Og8M50aGwNSaVfynxdMZ4rzJHYyGSaHU%2FECV1RMg6IQOOIbUWLFrkAIwtGUOh6n7kEx6mwrwY1Jvycc6pkeDW9gzEgqzAtnzNV4wykroQRxVp0UYlK0X4f5KNcD7svmXYD8YBr47ucLCgoke4dFC7M2xBfDsWeUYDqG8WkkVUqhIVDiUG7%2FpuX22p7SwrPCArxnDINtWgYIrU9%2BCil%2FNvHGSNuZugOnI937F%2FgxY0gMRyqFVMl6i61vlCypwMWIhp6a6sXJN8cWABgQQXaMoO%2F3hPU2zD3c9BTUDitYwIhPGzKhS%2FMYitORTqxkxw%2FgaRhi%2Fl1yvLr9K1eN9JxXewkEENSQPDI1YsQnIQICOBCYcC8bLjvBa1Wz2HQ%2B8LwTYoV4eSq%2F3hpaJI6AY4xANWK9H4QNhdjaUpm5nU5gKh27qyhE%2Bjp32XIztd2ujnaMs7BQnRS3dfZF1dGsLopOwVccn6S37ru12wP2o4yqytgcTAMC9p0r6mofgwFqHdCq4BGmNr4oVX0uBK%2BJy%2FaRwTsKe1W3h3HPEZWK7SnSEnqjkvkaTgMwj8u2xAY6pgFAaudaBQsVwc2wQ0vKiF9qMRmy7HdMuHyMIHnUAoYN6oGslEvLQZndh0eitHA77gu48Nl%2FnqXYqiKmYiQ8OBGU%2BC7kf2P8BV1gsNC4%2FdYOxSrOZ6WsD3RhPvIucHSqKm5rgfXwBUI0lsQ4N8tkcm6skH3gSTJgTu%2BnwEgKhAWeFyPze9Ar8pKmw8sYhSqBRQq5W2dowD5tgOn%2F6wHTYK5rUm7vgdGo&X-Amz-Signature=5e4fc245707ac341c42f489e306f508ae5e358946d7bdb8b1d551e2b1b649193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4XMXTIN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNu9%2FFXF4Ce882Va7VYRl1PmAzIugrCg6d8RM0O4z29AiAZNyeOcFop0gnu1ir%2BMrTrnrx0Rj%2F8kMyh3oXcOIgy%2BiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8YitAtYusN0Pce%2BNKtwDidNK1P08xUrFj1vaA2vFr8g4ZIg8PrjpKyJkH8Lb6cqgm779uIXeaPiVtyPaNEnRtme8avuZ0Og8M50aGwNSaVfynxdMZ4rzJHYyGSaHU%2FECV1RMg6IQOOIbUWLFrkAIwtGUOh6n7kEx6mwrwY1Jvycc6pkeDW9gzEgqzAtnzNV4wykroQRxVp0UYlK0X4f5KNcD7svmXYD8YBr47ucLCgoke4dFC7M2xBfDsWeUYDqG8WkkVUqhIVDiUG7%2FpuX22p7SwrPCArxnDINtWgYIrU9%2BCil%2FNvHGSNuZugOnI937F%2FgxY0gMRyqFVMl6i61vlCypwMWIhp6a6sXJN8cWABgQQXaMoO%2F3hPU2zD3c9BTUDitYwIhPGzKhS%2FMYitORTqxkxw%2FgaRhi%2Fl1yvLr9K1eN9JxXewkEENSQPDI1YsQnIQICOBCYcC8bLjvBa1Wz2HQ%2B8LwTYoV4eSq%2F3hpaJI6AY4xANWK9H4QNhdjaUpm5nU5gKh27qyhE%2Bjp32XIztd2ujnaMs7BQnRS3dfZF1dGsLopOwVccn6S37ru12wP2o4yqytgcTAMC9p0r6mofgwFqHdCq4BGmNr4oVX0uBK%2BJy%2FaRwTsKe1W3h3HPEZWK7SnSEnqjkvkaTgMwj8u2xAY6pgFAaudaBQsVwc2wQ0vKiF9qMRmy7HdMuHyMIHnUAoYN6oGslEvLQZndh0eitHA77gu48Nl%2FnqXYqiKmYiQ8OBGU%2BC7kf2P8BV1gsNC4%2FdYOxSrOZ6WsD3RhPvIucHSqKm5rgfXwBUI0lsQ4N8tkcm6skH3gSTJgTu%2BnwEgKhAWeFyPze9Ar8pKmw8sYhSqBRQq5W2dowD5tgOn%2F6wHTYK5rUm7vgdGo&X-Amz-Signature=854d029da777c47ee537f1aba81482209d2739d696551d2ac53c0d830fcb3df9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4XMXTIN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNu9%2FFXF4Ce882Va7VYRl1PmAzIugrCg6d8RM0O4z29AiAZNyeOcFop0gnu1ir%2BMrTrnrx0Rj%2F8kMyh3oXcOIgy%2BiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8YitAtYusN0Pce%2BNKtwDidNK1P08xUrFj1vaA2vFr8g4ZIg8PrjpKyJkH8Lb6cqgm779uIXeaPiVtyPaNEnRtme8avuZ0Og8M50aGwNSaVfynxdMZ4rzJHYyGSaHU%2FECV1RMg6IQOOIbUWLFrkAIwtGUOh6n7kEx6mwrwY1Jvycc6pkeDW9gzEgqzAtnzNV4wykroQRxVp0UYlK0X4f5KNcD7svmXYD8YBr47ucLCgoke4dFC7M2xBfDsWeUYDqG8WkkVUqhIVDiUG7%2FpuX22p7SwrPCArxnDINtWgYIrU9%2BCil%2FNvHGSNuZugOnI937F%2FgxY0gMRyqFVMl6i61vlCypwMWIhp6a6sXJN8cWABgQQXaMoO%2F3hPU2zD3c9BTUDitYwIhPGzKhS%2FMYitORTqxkxw%2FgaRhi%2Fl1yvLr9K1eN9JxXewkEENSQPDI1YsQnIQICOBCYcC8bLjvBa1Wz2HQ%2B8LwTYoV4eSq%2F3hpaJI6AY4xANWK9H4QNhdjaUpm5nU5gKh27qyhE%2Bjp32XIztd2ujnaMs7BQnRS3dfZF1dGsLopOwVccn6S37ru12wP2o4yqytgcTAMC9p0r6mofgwFqHdCq4BGmNr4oVX0uBK%2BJy%2FaRwTsKe1W3h3HPEZWK7SnSEnqjkvkaTgMwj8u2xAY6pgFAaudaBQsVwc2wQ0vKiF9qMRmy7HdMuHyMIHnUAoYN6oGslEvLQZndh0eitHA77gu48Nl%2FnqXYqiKmYiQ8OBGU%2BC7kf2P8BV1gsNC4%2FdYOxSrOZ6WsD3RhPvIucHSqKm5rgfXwBUI0lsQ4N8tkcm6skH3gSTJgTu%2BnwEgKhAWeFyPze9Ar8pKmw8sYhSqBRQq5W2dowD5tgOn%2F6wHTYK5rUm7vgdGo&X-Amz-Signature=45694eef328101f524244d8dcdbeb128c226783ac58202b114531edb0f770095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4XMXTIN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNu9%2FFXF4Ce882Va7VYRl1PmAzIugrCg6d8RM0O4z29AiAZNyeOcFop0gnu1ir%2BMrTrnrx0Rj%2F8kMyh3oXcOIgy%2BiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8YitAtYusN0Pce%2BNKtwDidNK1P08xUrFj1vaA2vFr8g4ZIg8PrjpKyJkH8Lb6cqgm779uIXeaPiVtyPaNEnRtme8avuZ0Og8M50aGwNSaVfynxdMZ4rzJHYyGSaHU%2FECV1RMg6IQOOIbUWLFrkAIwtGUOh6n7kEx6mwrwY1Jvycc6pkeDW9gzEgqzAtnzNV4wykroQRxVp0UYlK0X4f5KNcD7svmXYD8YBr47ucLCgoke4dFC7M2xBfDsWeUYDqG8WkkVUqhIVDiUG7%2FpuX22p7SwrPCArxnDINtWgYIrU9%2BCil%2FNvHGSNuZugOnI937F%2FgxY0gMRyqFVMl6i61vlCypwMWIhp6a6sXJN8cWABgQQXaMoO%2F3hPU2zD3c9BTUDitYwIhPGzKhS%2FMYitORTqxkxw%2FgaRhi%2Fl1yvLr9K1eN9JxXewkEENSQPDI1YsQnIQICOBCYcC8bLjvBa1Wz2HQ%2B8LwTYoV4eSq%2F3hpaJI6AY4xANWK9H4QNhdjaUpm5nU5gKh27qyhE%2Bjp32XIztd2ujnaMs7BQnRS3dfZF1dGsLopOwVccn6S37ru12wP2o4yqytgcTAMC9p0r6mofgwFqHdCq4BGmNr4oVX0uBK%2BJy%2FaRwTsKe1W3h3HPEZWK7SnSEnqjkvkaTgMwj8u2xAY6pgFAaudaBQsVwc2wQ0vKiF9qMRmy7HdMuHyMIHnUAoYN6oGslEvLQZndh0eitHA77gu48Nl%2FnqXYqiKmYiQ8OBGU%2BC7kf2P8BV1gsNC4%2FdYOxSrOZ6WsD3RhPvIucHSqKm5rgfXwBUI0lsQ4N8tkcm6skH3gSTJgTu%2BnwEgKhAWeFyPze9Ar8pKmw8sYhSqBRQq5W2dowD5tgOn%2F6wHTYK5rUm7vgdGo&X-Amz-Signature=9513be74b0647c6d14920dc40b53b6685bd6cd95d6f8b30b2f647ac915b8d3a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4XMXTIN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNu9%2FFXF4Ce882Va7VYRl1PmAzIugrCg6d8RM0O4z29AiAZNyeOcFop0gnu1ir%2BMrTrnrx0Rj%2F8kMyh3oXcOIgy%2BiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8YitAtYusN0Pce%2BNKtwDidNK1P08xUrFj1vaA2vFr8g4ZIg8PrjpKyJkH8Lb6cqgm779uIXeaPiVtyPaNEnRtme8avuZ0Og8M50aGwNSaVfynxdMZ4rzJHYyGSaHU%2FECV1RMg6IQOOIbUWLFrkAIwtGUOh6n7kEx6mwrwY1Jvycc6pkeDW9gzEgqzAtnzNV4wykroQRxVp0UYlK0X4f5KNcD7svmXYD8YBr47ucLCgoke4dFC7M2xBfDsWeUYDqG8WkkVUqhIVDiUG7%2FpuX22p7SwrPCArxnDINtWgYIrU9%2BCil%2FNvHGSNuZugOnI937F%2FgxY0gMRyqFVMl6i61vlCypwMWIhp6a6sXJN8cWABgQQXaMoO%2F3hPU2zD3c9BTUDitYwIhPGzKhS%2FMYitORTqxkxw%2FgaRhi%2Fl1yvLr9K1eN9JxXewkEENSQPDI1YsQnIQICOBCYcC8bLjvBa1Wz2HQ%2B8LwTYoV4eSq%2F3hpaJI6AY4xANWK9H4QNhdjaUpm5nU5gKh27qyhE%2Bjp32XIztd2ujnaMs7BQnRS3dfZF1dGsLopOwVccn6S37ru12wP2o4yqytgcTAMC9p0r6mofgwFqHdCq4BGmNr4oVX0uBK%2BJy%2FaRwTsKe1W3h3HPEZWK7SnSEnqjkvkaTgMwj8u2xAY6pgFAaudaBQsVwc2wQ0vKiF9qMRmy7HdMuHyMIHnUAoYN6oGslEvLQZndh0eitHA77gu48Nl%2FnqXYqiKmYiQ8OBGU%2BC7kf2P8BV1gsNC4%2FdYOxSrOZ6WsD3RhPvIucHSqKm5rgfXwBUI0lsQ4N8tkcm6skH3gSTJgTu%2BnwEgKhAWeFyPze9Ar8pKmw8sYhSqBRQq5W2dowD5tgOn%2F6wHTYK5rUm7vgdGo&X-Amz-Signature=190257fc18c9b26e273656bb27647358d7b46b403946bbedbf07f2f163c0da3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4XMXTIN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNu9%2FFXF4Ce882Va7VYRl1PmAzIugrCg6d8RM0O4z29AiAZNyeOcFop0gnu1ir%2BMrTrnrx0Rj%2F8kMyh3oXcOIgy%2BiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8YitAtYusN0Pce%2BNKtwDidNK1P08xUrFj1vaA2vFr8g4ZIg8PrjpKyJkH8Lb6cqgm779uIXeaPiVtyPaNEnRtme8avuZ0Og8M50aGwNSaVfynxdMZ4rzJHYyGSaHU%2FECV1RMg6IQOOIbUWLFrkAIwtGUOh6n7kEx6mwrwY1Jvycc6pkeDW9gzEgqzAtnzNV4wykroQRxVp0UYlK0X4f5KNcD7svmXYD8YBr47ucLCgoke4dFC7M2xBfDsWeUYDqG8WkkVUqhIVDiUG7%2FpuX22p7SwrPCArxnDINtWgYIrU9%2BCil%2FNvHGSNuZugOnI937F%2FgxY0gMRyqFVMl6i61vlCypwMWIhp6a6sXJN8cWABgQQXaMoO%2F3hPU2zD3c9BTUDitYwIhPGzKhS%2FMYitORTqxkxw%2FgaRhi%2Fl1yvLr9K1eN9JxXewkEENSQPDI1YsQnIQICOBCYcC8bLjvBa1Wz2HQ%2B8LwTYoV4eSq%2F3hpaJI6AY4xANWK9H4QNhdjaUpm5nU5gKh27qyhE%2Bjp32XIztd2ujnaMs7BQnRS3dfZF1dGsLopOwVccn6S37ru12wP2o4yqytgcTAMC9p0r6mofgwFqHdCq4BGmNr4oVX0uBK%2BJy%2FaRwTsKe1W3h3HPEZWK7SnSEnqjkvkaTgMwj8u2xAY6pgFAaudaBQsVwc2wQ0vKiF9qMRmy7HdMuHyMIHnUAoYN6oGslEvLQZndh0eitHA77gu48Nl%2FnqXYqiKmYiQ8OBGU%2BC7kf2P8BV1gsNC4%2FdYOxSrOZ6WsD3RhPvIucHSqKm5rgfXwBUI0lsQ4N8tkcm6skH3gSTJgTu%2BnwEgKhAWeFyPze9Ar8pKmw8sYhSqBRQq5W2dowD5tgOn%2F6wHTYK5rUm7vgdGo&X-Amz-Signature=883358b5411209a7b7b878a83de57ff56b9c937471bb9c447e6d652da1a31236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4XMXTIN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNu9%2FFXF4Ce882Va7VYRl1PmAzIugrCg6d8RM0O4z29AiAZNyeOcFop0gnu1ir%2BMrTrnrx0Rj%2F8kMyh3oXcOIgy%2BiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8YitAtYusN0Pce%2BNKtwDidNK1P08xUrFj1vaA2vFr8g4ZIg8PrjpKyJkH8Lb6cqgm779uIXeaPiVtyPaNEnRtme8avuZ0Og8M50aGwNSaVfynxdMZ4rzJHYyGSaHU%2FECV1RMg6IQOOIbUWLFrkAIwtGUOh6n7kEx6mwrwY1Jvycc6pkeDW9gzEgqzAtnzNV4wykroQRxVp0UYlK0X4f5KNcD7svmXYD8YBr47ucLCgoke4dFC7M2xBfDsWeUYDqG8WkkVUqhIVDiUG7%2FpuX22p7SwrPCArxnDINtWgYIrU9%2BCil%2FNvHGSNuZugOnI937F%2FgxY0gMRyqFVMl6i61vlCypwMWIhp6a6sXJN8cWABgQQXaMoO%2F3hPU2zD3c9BTUDitYwIhPGzKhS%2FMYitORTqxkxw%2FgaRhi%2Fl1yvLr9K1eN9JxXewkEENSQPDI1YsQnIQICOBCYcC8bLjvBa1Wz2HQ%2B8LwTYoV4eSq%2F3hpaJI6AY4xANWK9H4QNhdjaUpm5nU5gKh27qyhE%2Bjp32XIztd2ujnaMs7BQnRS3dfZF1dGsLopOwVccn6S37ru12wP2o4yqytgcTAMC9p0r6mofgwFqHdCq4BGmNr4oVX0uBK%2BJy%2FaRwTsKe1W3h3HPEZWK7SnSEnqjkvkaTgMwj8u2xAY6pgFAaudaBQsVwc2wQ0vKiF9qMRmy7HdMuHyMIHnUAoYN6oGslEvLQZndh0eitHA77gu48Nl%2FnqXYqiKmYiQ8OBGU%2BC7kf2P8BV1gsNC4%2FdYOxSrOZ6WsD3RhPvIucHSqKm5rgfXwBUI0lsQ4N8tkcm6skH3gSTJgTu%2BnwEgKhAWeFyPze9Ar8pKmw8sYhSqBRQq5W2dowD5tgOn%2F6wHTYK5rUm7vgdGo&X-Amz-Signature=7854ddc2e2975c4f649c59509a5afcbe0ac51b6e8400bf3efd3b674ce9de40ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
