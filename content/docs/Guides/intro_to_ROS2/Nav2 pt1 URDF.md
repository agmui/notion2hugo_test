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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UBXALBX%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICufEzL8EC75cBK2s%2B5D%2FmmUDzm9nQRnmphC%2F%2FUTtCFjAiALxPqmF2MxeeY52VqPdx0CzZP3fKuYzRQFu37I3fN%2FcCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHxHUyy%2Bej6iwkbLhKtwDwEwCEPOUCLUWSPUKad73Qn6dzbdLmvlTOFhWcRogXxJT%2FRfpMJpzV5v8nvYcdczjsADCcdvuRcLsWbTr1yQ5KBoD5yvzvp%2BGsDgW8jaXnI5z5C5c7tNh3Mc%2B6AiAm90QGpUQxI4fCvBz4Jg54F%2B5GUiNuh5pmWDScZdRqnuPfkDuDfYVgQnHc1y2P9iStdJgPRIebkT1AabO9hA1EMOZg7qOnmvVQomfbNtEqKe8j7qGZRs2gxmYULFsZuS8%2FULso%2FJWXJ4llXbeZOyfYLqnRlkngfhppgcXKIy%2B2v9%2BZfEuvvxlzNTGK%2BGyWlLt2V%2BVd55DrOVDc%2F4eonSRf54kqH0ZjS%2FSnlpb%2FhJdrLS%2B1AsD7scg2CK7mgkibhuSOKYhXy%2FoMKpcMTou6b2BQFxOEHBUTnddFuJUB2rL0gElOLCygNuMaUxpgsFHXI1J%2BabyPwtGCtacYLpmMlNGkdXY%2FWSYd2z%2B2Mqvml0BxBWRfJmSdTvHcm%2F2t0WAC4fx14Vyq9s1FTbwmSaPoOs%2F56Cj8oqyi87ght0Z8%2FrLlChpuNXLaiGyhMwPaI4SExgPp%2B7ZkhqlhcOf55HsA9jcbK7RfKx0rp9E3NeswFftAKnO4ZswyOPwu5x9gkcxhRUw4MCY0QY6pgEt4i8W%2FZknrQL9ObzQMSAfFCFvsnmv92MaqdrxDBeovQExp6R3OGya0fgcerL23rTy1AB34oGPvs8hmDN7Xw0zuDc%2Fl0gwYxWRBPxepEVNiT%2Bb61vBHnCyhyGj65qRsbh3J8WNDIs7d9dNOoD12F4fhL8Io83Q8Me24ya28NWrZ4CsWiJNq4nZBTgOfvNFL2u9Z1dmcR6T1JsUQK%2BftJO0vXmq8ltZ&X-Amz-Signature=a6c27df59cc07e2723df51b39f2de09d7cb5eca8f8c1fc3327adeb7ac9001cc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UBXALBX%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICufEzL8EC75cBK2s%2B5D%2FmmUDzm9nQRnmphC%2F%2FUTtCFjAiALxPqmF2MxeeY52VqPdx0CzZP3fKuYzRQFu37I3fN%2FcCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHxHUyy%2Bej6iwkbLhKtwDwEwCEPOUCLUWSPUKad73Qn6dzbdLmvlTOFhWcRogXxJT%2FRfpMJpzV5v8nvYcdczjsADCcdvuRcLsWbTr1yQ5KBoD5yvzvp%2BGsDgW8jaXnI5z5C5c7tNh3Mc%2B6AiAm90QGpUQxI4fCvBz4Jg54F%2B5GUiNuh5pmWDScZdRqnuPfkDuDfYVgQnHc1y2P9iStdJgPRIebkT1AabO9hA1EMOZg7qOnmvVQomfbNtEqKe8j7qGZRs2gxmYULFsZuS8%2FULso%2FJWXJ4llXbeZOyfYLqnRlkngfhppgcXKIy%2B2v9%2BZfEuvvxlzNTGK%2BGyWlLt2V%2BVd55DrOVDc%2F4eonSRf54kqH0ZjS%2FSnlpb%2FhJdrLS%2B1AsD7scg2CK7mgkibhuSOKYhXy%2FoMKpcMTou6b2BQFxOEHBUTnddFuJUB2rL0gElOLCygNuMaUxpgsFHXI1J%2BabyPwtGCtacYLpmMlNGkdXY%2FWSYd2z%2B2Mqvml0BxBWRfJmSdTvHcm%2F2t0WAC4fx14Vyq9s1FTbwmSaPoOs%2F56Cj8oqyi87ght0Z8%2FrLlChpuNXLaiGyhMwPaI4SExgPp%2B7ZkhqlhcOf55HsA9jcbK7RfKx0rp9E3NeswFftAKnO4ZswyOPwu5x9gkcxhRUw4MCY0QY6pgEt4i8W%2FZknrQL9ObzQMSAfFCFvsnmv92MaqdrxDBeovQExp6R3OGya0fgcerL23rTy1AB34oGPvs8hmDN7Xw0zuDc%2Fl0gwYxWRBPxepEVNiT%2Bb61vBHnCyhyGj65qRsbh3J8WNDIs7d9dNOoD12F4fhL8Io83Q8Me24ya28NWrZ4CsWiJNq4nZBTgOfvNFL2u9Z1dmcR6T1JsUQK%2BftJO0vXmq8ltZ&X-Amz-Signature=e826e9d9ae5e863864aa4f8f8aa41b932370014be10f954737e5e5a9d4a83e5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UBXALBX%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICufEzL8EC75cBK2s%2B5D%2FmmUDzm9nQRnmphC%2F%2FUTtCFjAiALxPqmF2MxeeY52VqPdx0CzZP3fKuYzRQFu37I3fN%2FcCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHxHUyy%2Bej6iwkbLhKtwDwEwCEPOUCLUWSPUKad73Qn6dzbdLmvlTOFhWcRogXxJT%2FRfpMJpzV5v8nvYcdczjsADCcdvuRcLsWbTr1yQ5KBoD5yvzvp%2BGsDgW8jaXnI5z5C5c7tNh3Mc%2B6AiAm90QGpUQxI4fCvBz4Jg54F%2B5GUiNuh5pmWDScZdRqnuPfkDuDfYVgQnHc1y2P9iStdJgPRIebkT1AabO9hA1EMOZg7qOnmvVQomfbNtEqKe8j7qGZRs2gxmYULFsZuS8%2FULso%2FJWXJ4llXbeZOyfYLqnRlkngfhppgcXKIy%2B2v9%2BZfEuvvxlzNTGK%2BGyWlLt2V%2BVd55DrOVDc%2F4eonSRf54kqH0ZjS%2FSnlpb%2FhJdrLS%2B1AsD7scg2CK7mgkibhuSOKYhXy%2FoMKpcMTou6b2BQFxOEHBUTnddFuJUB2rL0gElOLCygNuMaUxpgsFHXI1J%2BabyPwtGCtacYLpmMlNGkdXY%2FWSYd2z%2B2Mqvml0BxBWRfJmSdTvHcm%2F2t0WAC4fx14Vyq9s1FTbwmSaPoOs%2F56Cj8oqyi87ght0Z8%2FrLlChpuNXLaiGyhMwPaI4SExgPp%2B7ZkhqlhcOf55HsA9jcbK7RfKx0rp9E3NeswFftAKnO4ZswyOPwu5x9gkcxhRUw4MCY0QY6pgEt4i8W%2FZknrQL9ObzQMSAfFCFvsnmv92MaqdrxDBeovQExp6R3OGya0fgcerL23rTy1AB34oGPvs8hmDN7Xw0zuDc%2Fl0gwYxWRBPxepEVNiT%2Bb61vBHnCyhyGj65qRsbh3J8WNDIs7d9dNOoD12F4fhL8Io83Q8Me24ya28NWrZ4CsWiJNq4nZBTgOfvNFL2u9Z1dmcR6T1JsUQK%2BftJO0vXmq8ltZ&X-Amz-Signature=5287160ee6bfe3a8442db72cbde43bca60a304974f61904f68bd1f31e5cdc3ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UBXALBX%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICufEzL8EC75cBK2s%2B5D%2FmmUDzm9nQRnmphC%2F%2FUTtCFjAiALxPqmF2MxeeY52VqPdx0CzZP3fKuYzRQFu37I3fN%2FcCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHxHUyy%2Bej6iwkbLhKtwDwEwCEPOUCLUWSPUKad73Qn6dzbdLmvlTOFhWcRogXxJT%2FRfpMJpzV5v8nvYcdczjsADCcdvuRcLsWbTr1yQ5KBoD5yvzvp%2BGsDgW8jaXnI5z5C5c7tNh3Mc%2B6AiAm90QGpUQxI4fCvBz4Jg54F%2B5GUiNuh5pmWDScZdRqnuPfkDuDfYVgQnHc1y2P9iStdJgPRIebkT1AabO9hA1EMOZg7qOnmvVQomfbNtEqKe8j7qGZRs2gxmYULFsZuS8%2FULso%2FJWXJ4llXbeZOyfYLqnRlkngfhppgcXKIy%2B2v9%2BZfEuvvxlzNTGK%2BGyWlLt2V%2BVd55DrOVDc%2F4eonSRf54kqH0ZjS%2FSnlpb%2FhJdrLS%2B1AsD7scg2CK7mgkibhuSOKYhXy%2FoMKpcMTou6b2BQFxOEHBUTnddFuJUB2rL0gElOLCygNuMaUxpgsFHXI1J%2BabyPwtGCtacYLpmMlNGkdXY%2FWSYd2z%2B2Mqvml0BxBWRfJmSdTvHcm%2F2t0WAC4fx14Vyq9s1FTbwmSaPoOs%2F56Cj8oqyi87ght0Z8%2FrLlChpuNXLaiGyhMwPaI4SExgPp%2B7ZkhqlhcOf55HsA9jcbK7RfKx0rp9E3NeswFftAKnO4ZswyOPwu5x9gkcxhRUw4MCY0QY6pgEt4i8W%2FZknrQL9ObzQMSAfFCFvsnmv92MaqdrxDBeovQExp6R3OGya0fgcerL23rTy1AB34oGPvs8hmDN7Xw0zuDc%2Fl0gwYxWRBPxepEVNiT%2Bb61vBHnCyhyGj65qRsbh3J8WNDIs7d9dNOoD12F4fhL8Io83Q8Me24ya28NWrZ4CsWiJNq4nZBTgOfvNFL2u9Z1dmcR6T1JsUQK%2BftJO0vXmq8ltZ&X-Amz-Signature=e5263bc81628614dc3900893e3b10a415ca57235d98407da4e1364e0b6259c71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UBXALBX%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICufEzL8EC75cBK2s%2B5D%2FmmUDzm9nQRnmphC%2F%2FUTtCFjAiALxPqmF2MxeeY52VqPdx0CzZP3fKuYzRQFu37I3fN%2FcCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHxHUyy%2Bej6iwkbLhKtwDwEwCEPOUCLUWSPUKad73Qn6dzbdLmvlTOFhWcRogXxJT%2FRfpMJpzV5v8nvYcdczjsADCcdvuRcLsWbTr1yQ5KBoD5yvzvp%2BGsDgW8jaXnI5z5C5c7tNh3Mc%2B6AiAm90QGpUQxI4fCvBz4Jg54F%2B5GUiNuh5pmWDScZdRqnuPfkDuDfYVgQnHc1y2P9iStdJgPRIebkT1AabO9hA1EMOZg7qOnmvVQomfbNtEqKe8j7qGZRs2gxmYULFsZuS8%2FULso%2FJWXJ4llXbeZOyfYLqnRlkngfhppgcXKIy%2B2v9%2BZfEuvvxlzNTGK%2BGyWlLt2V%2BVd55DrOVDc%2F4eonSRf54kqH0ZjS%2FSnlpb%2FhJdrLS%2B1AsD7scg2CK7mgkibhuSOKYhXy%2FoMKpcMTou6b2BQFxOEHBUTnddFuJUB2rL0gElOLCygNuMaUxpgsFHXI1J%2BabyPwtGCtacYLpmMlNGkdXY%2FWSYd2z%2B2Mqvml0BxBWRfJmSdTvHcm%2F2t0WAC4fx14Vyq9s1FTbwmSaPoOs%2F56Cj8oqyi87ght0Z8%2FrLlChpuNXLaiGyhMwPaI4SExgPp%2B7ZkhqlhcOf55HsA9jcbK7RfKx0rp9E3NeswFftAKnO4ZswyOPwu5x9gkcxhRUw4MCY0QY6pgEt4i8W%2FZknrQL9ObzQMSAfFCFvsnmv92MaqdrxDBeovQExp6R3OGya0fgcerL23rTy1AB34oGPvs8hmDN7Xw0zuDc%2Fl0gwYxWRBPxepEVNiT%2Bb61vBHnCyhyGj65qRsbh3J8WNDIs7d9dNOoD12F4fhL8Io83Q8Me24ya28NWrZ4CsWiJNq4nZBTgOfvNFL2u9Z1dmcR6T1JsUQK%2BftJO0vXmq8ltZ&X-Amz-Signature=8f6d6a658195ffddbab78354b49338d627bbd5ca71d3d7625acaa201a8fe9395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UBXALBX%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICufEzL8EC75cBK2s%2B5D%2FmmUDzm9nQRnmphC%2F%2FUTtCFjAiALxPqmF2MxeeY52VqPdx0CzZP3fKuYzRQFu37I3fN%2FcCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHxHUyy%2Bej6iwkbLhKtwDwEwCEPOUCLUWSPUKad73Qn6dzbdLmvlTOFhWcRogXxJT%2FRfpMJpzV5v8nvYcdczjsADCcdvuRcLsWbTr1yQ5KBoD5yvzvp%2BGsDgW8jaXnI5z5C5c7tNh3Mc%2B6AiAm90QGpUQxI4fCvBz4Jg54F%2B5GUiNuh5pmWDScZdRqnuPfkDuDfYVgQnHc1y2P9iStdJgPRIebkT1AabO9hA1EMOZg7qOnmvVQomfbNtEqKe8j7qGZRs2gxmYULFsZuS8%2FULso%2FJWXJ4llXbeZOyfYLqnRlkngfhppgcXKIy%2B2v9%2BZfEuvvxlzNTGK%2BGyWlLt2V%2BVd55DrOVDc%2F4eonSRf54kqH0ZjS%2FSnlpb%2FhJdrLS%2B1AsD7scg2CK7mgkibhuSOKYhXy%2FoMKpcMTou6b2BQFxOEHBUTnddFuJUB2rL0gElOLCygNuMaUxpgsFHXI1J%2BabyPwtGCtacYLpmMlNGkdXY%2FWSYd2z%2B2Mqvml0BxBWRfJmSdTvHcm%2F2t0WAC4fx14Vyq9s1FTbwmSaPoOs%2F56Cj8oqyi87ght0Z8%2FrLlChpuNXLaiGyhMwPaI4SExgPp%2B7ZkhqlhcOf55HsA9jcbK7RfKx0rp9E3NeswFftAKnO4ZswyOPwu5x9gkcxhRUw4MCY0QY6pgEt4i8W%2FZknrQL9ObzQMSAfFCFvsnmv92MaqdrxDBeovQExp6R3OGya0fgcerL23rTy1AB34oGPvs8hmDN7Xw0zuDc%2Fl0gwYxWRBPxepEVNiT%2Bb61vBHnCyhyGj65qRsbh3J8WNDIs7d9dNOoD12F4fhL8Io83Q8Me24ya28NWrZ4CsWiJNq4nZBTgOfvNFL2u9Z1dmcR6T1JsUQK%2BftJO0vXmq8ltZ&X-Amz-Signature=7118d33945455a2e20c51e4d5a87a6ef67ffae36234207a8846b0d160c90ac19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UBXALBX%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICufEzL8EC75cBK2s%2B5D%2FmmUDzm9nQRnmphC%2F%2FUTtCFjAiALxPqmF2MxeeY52VqPdx0CzZP3fKuYzRQFu37I3fN%2FcCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHxHUyy%2Bej6iwkbLhKtwDwEwCEPOUCLUWSPUKad73Qn6dzbdLmvlTOFhWcRogXxJT%2FRfpMJpzV5v8nvYcdczjsADCcdvuRcLsWbTr1yQ5KBoD5yvzvp%2BGsDgW8jaXnI5z5C5c7tNh3Mc%2B6AiAm90QGpUQxI4fCvBz4Jg54F%2B5GUiNuh5pmWDScZdRqnuPfkDuDfYVgQnHc1y2P9iStdJgPRIebkT1AabO9hA1EMOZg7qOnmvVQomfbNtEqKe8j7qGZRs2gxmYULFsZuS8%2FULso%2FJWXJ4llXbeZOyfYLqnRlkngfhppgcXKIy%2B2v9%2BZfEuvvxlzNTGK%2BGyWlLt2V%2BVd55DrOVDc%2F4eonSRf54kqH0ZjS%2FSnlpb%2FhJdrLS%2B1AsD7scg2CK7mgkibhuSOKYhXy%2FoMKpcMTou6b2BQFxOEHBUTnddFuJUB2rL0gElOLCygNuMaUxpgsFHXI1J%2BabyPwtGCtacYLpmMlNGkdXY%2FWSYd2z%2B2Mqvml0BxBWRfJmSdTvHcm%2F2t0WAC4fx14Vyq9s1FTbwmSaPoOs%2F56Cj8oqyi87ght0Z8%2FrLlChpuNXLaiGyhMwPaI4SExgPp%2B7ZkhqlhcOf55HsA9jcbK7RfKx0rp9E3NeswFftAKnO4ZswyOPwu5x9gkcxhRUw4MCY0QY6pgEt4i8W%2FZknrQL9ObzQMSAfFCFvsnmv92MaqdrxDBeovQExp6R3OGya0fgcerL23rTy1AB34oGPvs8hmDN7Xw0zuDc%2Fl0gwYxWRBPxepEVNiT%2Bb61vBHnCyhyGj65qRsbh3J8WNDIs7d9dNOoD12F4fhL8Io83Q8Me24ya28NWrZ4CsWiJNq4nZBTgOfvNFL2u9Z1dmcR6T1JsUQK%2BftJO0vXmq8ltZ&X-Amz-Signature=68c02d37b160149dfa9b7f0e23edaa14df30e3c9e20f8fdbf4f88382ff05f24e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UBXALBX%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICufEzL8EC75cBK2s%2B5D%2FmmUDzm9nQRnmphC%2F%2FUTtCFjAiALxPqmF2MxeeY52VqPdx0CzZP3fKuYzRQFu37I3fN%2FcCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHxHUyy%2Bej6iwkbLhKtwDwEwCEPOUCLUWSPUKad73Qn6dzbdLmvlTOFhWcRogXxJT%2FRfpMJpzV5v8nvYcdczjsADCcdvuRcLsWbTr1yQ5KBoD5yvzvp%2BGsDgW8jaXnI5z5C5c7tNh3Mc%2B6AiAm90QGpUQxI4fCvBz4Jg54F%2B5GUiNuh5pmWDScZdRqnuPfkDuDfYVgQnHc1y2P9iStdJgPRIebkT1AabO9hA1EMOZg7qOnmvVQomfbNtEqKe8j7qGZRs2gxmYULFsZuS8%2FULso%2FJWXJ4llXbeZOyfYLqnRlkngfhppgcXKIy%2B2v9%2BZfEuvvxlzNTGK%2BGyWlLt2V%2BVd55DrOVDc%2F4eonSRf54kqH0ZjS%2FSnlpb%2FhJdrLS%2B1AsD7scg2CK7mgkibhuSOKYhXy%2FoMKpcMTou6b2BQFxOEHBUTnddFuJUB2rL0gElOLCygNuMaUxpgsFHXI1J%2BabyPwtGCtacYLpmMlNGkdXY%2FWSYd2z%2B2Mqvml0BxBWRfJmSdTvHcm%2F2t0WAC4fx14Vyq9s1FTbwmSaPoOs%2F56Cj8oqyi87ght0Z8%2FrLlChpuNXLaiGyhMwPaI4SExgPp%2B7ZkhqlhcOf55HsA9jcbK7RfKx0rp9E3NeswFftAKnO4ZswyOPwu5x9gkcxhRUw4MCY0QY6pgEt4i8W%2FZknrQL9ObzQMSAfFCFvsnmv92MaqdrxDBeovQExp6R3OGya0fgcerL23rTy1AB34oGPvs8hmDN7Xw0zuDc%2Fl0gwYxWRBPxepEVNiT%2Bb61vBHnCyhyGj65qRsbh3J8WNDIs7d9dNOoD12F4fhL8Io83Q8Me24ya28NWrZ4CsWiJNq4nZBTgOfvNFL2u9Z1dmcR6T1JsUQK%2BftJO0vXmq8ltZ&X-Amz-Signature=f30d59c99f4febd32077edb7b9160deeb0d51cb48f147c5e3542d9664e3dcd15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UBXALBX%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICufEzL8EC75cBK2s%2B5D%2FmmUDzm9nQRnmphC%2F%2FUTtCFjAiALxPqmF2MxeeY52VqPdx0CzZP3fKuYzRQFu37I3fN%2FcCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHxHUyy%2Bej6iwkbLhKtwDwEwCEPOUCLUWSPUKad73Qn6dzbdLmvlTOFhWcRogXxJT%2FRfpMJpzV5v8nvYcdczjsADCcdvuRcLsWbTr1yQ5KBoD5yvzvp%2BGsDgW8jaXnI5z5C5c7tNh3Mc%2B6AiAm90QGpUQxI4fCvBz4Jg54F%2B5GUiNuh5pmWDScZdRqnuPfkDuDfYVgQnHc1y2P9iStdJgPRIebkT1AabO9hA1EMOZg7qOnmvVQomfbNtEqKe8j7qGZRs2gxmYULFsZuS8%2FULso%2FJWXJ4llXbeZOyfYLqnRlkngfhppgcXKIy%2B2v9%2BZfEuvvxlzNTGK%2BGyWlLt2V%2BVd55DrOVDc%2F4eonSRf54kqH0ZjS%2FSnlpb%2FhJdrLS%2B1AsD7scg2CK7mgkibhuSOKYhXy%2FoMKpcMTou6b2BQFxOEHBUTnddFuJUB2rL0gElOLCygNuMaUxpgsFHXI1J%2BabyPwtGCtacYLpmMlNGkdXY%2FWSYd2z%2B2Mqvml0BxBWRfJmSdTvHcm%2F2t0WAC4fx14Vyq9s1FTbwmSaPoOs%2F56Cj8oqyi87ght0Z8%2FrLlChpuNXLaiGyhMwPaI4SExgPp%2B7ZkhqlhcOf55HsA9jcbK7RfKx0rp9E3NeswFftAKnO4ZswyOPwu5x9gkcxhRUw4MCY0QY6pgEt4i8W%2FZknrQL9ObzQMSAfFCFvsnmv92MaqdrxDBeovQExp6R3OGya0fgcerL23rTy1AB34oGPvs8hmDN7Xw0zuDc%2Fl0gwYxWRBPxepEVNiT%2Bb61vBHnCyhyGj65qRsbh3J8WNDIs7d9dNOoD12F4fhL8Io83Q8Me24ya28NWrZ4CsWiJNq4nZBTgOfvNFL2u9Z1dmcR6T1JsUQK%2BftJO0vXmq8ltZ&X-Amz-Signature=2181336a252e20a3fd88bf8bb081d2e73cd224a54028f503b51d8542b0c06f22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UBXALBX%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICufEzL8EC75cBK2s%2B5D%2FmmUDzm9nQRnmphC%2F%2FUTtCFjAiALxPqmF2MxeeY52VqPdx0CzZP3fKuYzRQFu37I3fN%2FcCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHxHUyy%2Bej6iwkbLhKtwDwEwCEPOUCLUWSPUKad73Qn6dzbdLmvlTOFhWcRogXxJT%2FRfpMJpzV5v8nvYcdczjsADCcdvuRcLsWbTr1yQ5KBoD5yvzvp%2BGsDgW8jaXnI5z5C5c7tNh3Mc%2B6AiAm90QGpUQxI4fCvBz4Jg54F%2B5GUiNuh5pmWDScZdRqnuPfkDuDfYVgQnHc1y2P9iStdJgPRIebkT1AabO9hA1EMOZg7qOnmvVQomfbNtEqKe8j7qGZRs2gxmYULFsZuS8%2FULso%2FJWXJ4llXbeZOyfYLqnRlkngfhppgcXKIy%2B2v9%2BZfEuvvxlzNTGK%2BGyWlLt2V%2BVd55DrOVDc%2F4eonSRf54kqH0ZjS%2FSnlpb%2FhJdrLS%2B1AsD7scg2CK7mgkibhuSOKYhXy%2FoMKpcMTou6b2BQFxOEHBUTnddFuJUB2rL0gElOLCygNuMaUxpgsFHXI1J%2BabyPwtGCtacYLpmMlNGkdXY%2FWSYd2z%2B2Mqvml0BxBWRfJmSdTvHcm%2F2t0WAC4fx14Vyq9s1FTbwmSaPoOs%2F56Cj8oqyi87ght0Z8%2FrLlChpuNXLaiGyhMwPaI4SExgPp%2B7ZkhqlhcOf55HsA9jcbK7RfKx0rp9E3NeswFftAKnO4ZswyOPwu5x9gkcxhRUw4MCY0QY6pgEt4i8W%2FZknrQL9ObzQMSAfFCFvsnmv92MaqdrxDBeovQExp6R3OGya0fgcerL23rTy1AB34oGPvs8hmDN7Xw0zuDc%2Fl0gwYxWRBPxepEVNiT%2Bb61vBHnCyhyGj65qRsbh3J8WNDIs7d9dNOoD12F4fhL8Io83Q8Me24ya28NWrZ4CsWiJNq4nZBTgOfvNFL2u9Z1dmcR6T1JsUQK%2BftJO0vXmq8ltZ&X-Amz-Signature=14a5dda70ee8acd60d56c5f6844b1266902a456b5e4c6f2a1fd682a33e7de398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDX4SM4S%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFW3rlf638c3lGNuR2ZlnvJOugvpknyJqL8m3tbeiOXLAiEAltNelXSiGrr8Zka2a3g25gX%2FToBgzZeGBRUUbrEndkQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaSD3BqgWPEBo2L%2FCrcAyhq75FRBcKBH%2FqD%2BJHdzuWlorziUa9Lek9Co%2FG9tOsdpnODj91WcShuOXMZjjTd1EPYuO0jwVmf8g1qUONo%2BBoBdXEwVbZEnSG7RfxS1cE83g0fRfuCDYPXxTGemCYsGHsIZElo65fm0B0%2B8y0DId4vnsqhXwkz1HdoAfl45YIbvfD4oaVBXaL72fEy%2B0DLI%2BcbVRj1%2FV7pHjbMuKybrtAfr5H%2BAGch%2BgOdyZaWfhVPVRO8ZLA9jsFngViG1qiYiKvpbZ%2BWXxCw6u12ZqyS%2FTvYZPeHeEasIa3tG9cTi7mr5uGI7nlo0xU0SyxX3oX6ih1s%2FCvAC8y%2B1dg%2BtJqkvOpMmLZLHaFHDz17v%2F79d3Mk6ESoBfMfTSzIkVg6y5BgfVfwNIdYaOUd4t%2FO%2FMVQx5%2BSCN1eYKBNtwCo3ihrog84iZ%2Bal5wfOgsGWcQm4srkCmN7bDNYpMvCJNY6fiN0mmofQ%2FUlUb71Y7v3LPQcHDddfDkHE5Y%2B%2FMWvbNmGu4fToRRnUDSrywxXq47xYmffWt%2FPGQZB%2FDmtHwVf6kRgG4WRhYOEUkPwKX0nZiNG75m7ISGYDjn4Hr8ka%2BmtnEfgo%2BKWOTxOHh%2FtOxqZ72zTP%2BkuFpSpuIeuyEjdDwZAMIbAmNEGOqUB0DfQqotT8nWSUvstOO2pka5x5JabLjsZQY1%2FDPWMZrq2HEs0E6JCBHq6g%2FXasce7Fc0X4doDQE1%2B7peIIBik2yEPKjhFkR92Y23q3MabOYCoS276L91SCLYCezdxc09Q%2B5Cgf%2BsfVwEPl2dvi8rCvodDwrff%2FLbWF2RYGxU8f%2BKf3hkus%2Bcv4vmRzc9moU%2FSNbQieFhAxHIkn%2Fp0v%2Bt4VQKNr9lh&X-Amz-Signature=70355cfb40116b83e46d0f53800927144c945a7b7ec70d20ed8fd5fb2d0ee71a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKCPODZ%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID70MBffeyQ5oABI7B%2B0VfREBZM%2Fh1iXVKMFoxXJi9WAAiAE77Geemxb0T5fF%2BLHfulXOQRuv9rK9AL%2BAvsF1wI2JiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bxfy07nmvPi9H%2Bp8KtwDx1vMA9SlLvz3wa2XhmCcTXgUVuBI4sjORjOhGhMCQtTZXauv5JPaluF0UfO9DoT9%2Bqz6ePNCdGK6ZwEPLPAYVykCdSdIkVWyhvf1VQoYHUDYMYPff7DiQQOr3vb7IRCmzJAXyeiujigZ3G7qxbAJyHzSaLduu178HSIfJ3EPJvGwCbGawv%2BBiYIqs%2B3dSPgQKICumpbnyjSJXcRO9cfcrptt8BF65mApcf6VJ1gmeJPdsdg%2BnOhO7vz4efmphyRB8s89uUyeHLVa%2BUR%2F9AqIo%2Bc5CwoGVXr10xXcCNVOFu13gb%2FY8HDcoIVa5A%2BCaxCbLgBTa8HmtydO%2Bxx6SU5hovsUetsg1XyXu%2BcW7SoKLjUYethS%2BcrGiHKgpFvIZBobQDSBrmfRBacceeMZbNKI7jvokLCR5rwQIJCqQIrdYLDxy0hTz4JdwdpXXFKZuyKJMSjO8xIeLZiZkdB0Me%2B1Q6WcXFH%2BYtt0M%2FfvKH2dyqh46%2FWRrwotvhghEYwnuoOaWNWSDKgWp%2BxFxsyIY0rweObBRlIyzWhvN05RAiDMoriIxdE45W93doVRP2r0WNJ3rtHRnnhd16BFSh3bIM2VIBdwb3pfYt%2FP3BTk6Yn1YUvOxRmcLAFMC9Ee8L0w3sCY0QY6pgHVzgzwlwL1p5KI%2FNt4%2BVTTit7Z4JTTK%2BkuaUqMQfDTq3ZeTkS7N6TOz8%2BpS95XOsIktqzAY90JEYJDLxzZY%2F9cyunubFxdaqUop9wpWVavIdlBpDmkh5hl%2BfYZ9%2BjcyNzt93IKZwNi9dJe1x7MGZWzaBQHt0oRvbXChXnHp8dFgDfxS0KDTj1Djp4yqZtcTcP%2B380HbylZr9THQnIW18ulu%2BfKFzFW&X-Amz-Signature=20eec78993e900fc59ace0f9f59ae5ca8f26cc7ff6ca847dd3a64a70747cf3ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXCPOQG3%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8l4BeSUdXZMBTp%2BgGEa74mGQW0dJYAsNH9aewwgtqWAIgOIzXg5FN8jg6PUQ2YsKmvXkvCNLKNXM51AHSXSWgnuQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgjBrz%2FKGIXKlQtsCrcA7DZMnHZcZ4TYkzTkBPP3qXaOLt2Cg92vidLEerCz3CgbimTooQLqslTx0pIiut39sihIov68wBsl%2BMhyuPBHe4vCy2t2bjx7X6a0ba%2FDWfC56JfXJ6daQjrTueOn9%2BFHr5SAa7E26Xg3ejqHkq8isHfXSH2m3yZHRXPsmqTUWiWHcgbDlJEv6YHwLoteN1df8ZgsqYPXSnkkf6%2B%2B4KFn5hdfKTcpGgBpTe4WdZkm%2BcK0DKXwSCw6fiZPYySq%2FN%2FB717Zn8J8jrJS4O51xaVqt0%2FykYoMhp%2B0wf%2FWLEtrV8xTDC%2FyaycWgGgf9dsf%2FqSVssRqkMNSYAm58aT2KTUC69Mv7dgE5d8KoyirvGPTN7AAZaqfyCLqvYWFdkUfkOVqoOWeD6JU6gacklz2NC3BasJy69fpoPe49Dk%2Fd9rH8r5Rqrfoj4rS2IB9FuxVNXwkMUdm%2FRejtOXRk%2FdJNnZi7bBoNjHFH1fX1X07eL2yTokqWskUD1Bf5VQ2LdMGf1zvioBUfNho9VqpvDwuinv1RJYStW4Z8ap5bjDEYNW8agNxsOn11aOP51J5YphyiwhSWJUCq8Wtg3iq2uKf2sKGxC4MJ0DxEy4mUhB4I46CRnubW1eXqu4gKuuX4zXMIzCmNEGOqUBGrPZ79bSzyRP%2FOzqZTIX%2BpEsjpvEDHgHIqql4r3RElqL3qrU3She%2Bu%2BdhlzbEf%2BSvSV2UPFXwsQ3ZcPaG8Bjzr73%2Bf%2FhvNbXiwtHQ9hLxCBOLG%2FJDrByQvuii7Bb3e9V7Q4mLcg%2F1%2BC7hgu0jNQjIykGXdiD%2BGZaHFk2jOnMBIllFMPfLeLLfXrqYxOVVX%2F2Hw8Jf%2BbuGyGvhv0waJG0%2FWrKCVgb&X-Amz-Signature=b20fa531d7d17a97c08e373c650bac480c01a797b9f625df8eee6b89dde2361c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UBXALBX%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICufEzL8EC75cBK2s%2B5D%2FmmUDzm9nQRnmphC%2F%2FUTtCFjAiALxPqmF2MxeeY52VqPdx0CzZP3fKuYzRQFu37I3fN%2FcCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHxHUyy%2Bej6iwkbLhKtwDwEwCEPOUCLUWSPUKad73Qn6dzbdLmvlTOFhWcRogXxJT%2FRfpMJpzV5v8nvYcdczjsADCcdvuRcLsWbTr1yQ5KBoD5yvzvp%2BGsDgW8jaXnI5z5C5c7tNh3Mc%2B6AiAm90QGpUQxI4fCvBz4Jg54F%2B5GUiNuh5pmWDScZdRqnuPfkDuDfYVgQnHc1y2P9iStdJgPRIebkT1AabO9hA1EMOZg7qOnmvVQomfbNtEqKe8j7qGZRs2gxmYULFsZuS8%2FULso%2FJWXJ4llXbeZOyfYLqnRlkngfhppgcXKIy%2B2v9%2BZfEuvvxlzNTGK%2BGyWlLt2V%2BVd55DrOVDc%2F4eonSRf54kqH0ZjS%2FSnlpb%2FhJdrLS%2B1AsD7scg2CK7mgkibhuSOKYhXy%2FoMKpcMTou6b2BQFxOEHBUTnddFuJUB2rL0gElOLCygNuMaUxpgsFHXI1J%2BabyPwtGCtacYLpmMlNGkdXY%2FWSYd2z%2B2Mqvml0BxBWRfJmSdTvHcm%2F2t0WAC4fx14Vyq9s1FTbwmSaPoOs%2F56Cj8oqyi87ght0Z8%2FrLlChpuNXLaiGyhMwPaI4SExgPp%2B7ZkhqlhcOf55HsA9jcbK7RfKx0rp9E3NeswFftAKnO4ZswyOPwu5x9gkcxhRUw4MCY0QY6pgEt4i8W%2FZknrQL9ObzQMSAfFCFvsnmv92MaqdrxDBeovQExp6R3OGya0fgcerL23rTy1AB34oGPvs8hmDN7Xw0zuDc%2Fl0gwYxWRBPxepEVNiT%2Bb61vBHnCyhyGj65qRsbh3J8WNDIs7d9dNOoD12F4fhL8Io83Q8Me24ya28NWrZ4CsWiJNq4nZBTgOfvNFL2u9Z1dmcR6T1JsUQK%2BftJO0vXmq8ltZ&X-Amz-Signature=b688de4a83b7412cf8b0d81b7529da72ac1836e7e9f613dcc944161a47e51d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTO2FK7%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANDersNUoRp2EkgTY3LgFQ53kkHoqpVa2gmgh1WlcWnAiEAttP0idz%2F3PyyUQyE7GP9ZFJ5J40SqhI3%2BpoMMkAi1ZYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHT41L44kfqbuT705SrcA8SnLa1iGzGtyq4UKQvXX7vCHSmpJgiIGCQe4jd0Lyl%2BXmT34WV9HfrCvMfMIcoUp3xs4lv2rhm8H%2F3PENKrz%2FnlGR5JzIQSLwhcCHE62ojOWzxaSOjdZVIvf%2BX57K1gs4iordQEsFHROFhvwBi4%2Fa%2BDMBZRlpYhur2IKS9I5czeM6vvpjR2DEdZyrvJgVd6dc3vQVOmRxTVwpJ3PO1BbfvNDclho%2BpVNfL392%2FQz8AU%2BMBQOztSa1tTozS1elWMpCHZgNOBZcF3cqJMDoC%2FY2Tyks4scCuNRJ026Fu7K8Mm4pgdLtBdg1NkxX2qBmif8MeMDd3N8PX4vUO%2FbcvSNGMW70ATXl4lUHUfc9egM4A%2F99165sgInzFSQ4cgtlqiW6u%2FpjPU1%2B7x83%2BU63UxKwzJ2UtFNWwCg3T0k0L8ZS0HxoeQeEnL4z81A%2Ff0KpJNrKfYUToOFr908je4QNX%2F4g9BhXz5SywXcklgVhHGM2LrVkyCrxEeio0DdFbwgEGSshI2WXvpO%2F8xgvvWcC%2B3HguSdY08GKhjq46NHB5bbKqyl%2Fk2CM5A7OnjaXcUzjPf2hu2XfqT8rhJYqTWs%2F4XlmTNFOM6KTjPCPVPrAeoVJl22m2FJ04tZJC6ajB7MMC%2FmNEGOqUB%2BrsAvOyed%2FnvTQQxaILGTO4YoECjxJShK17RSK2HXmFZYnbG%2BqxjmCbFtRZzt1KlEVZAMvXCLNPZ4sClLqUGCYkcSKD5DDh%2B6mQh%2FA%2FDqYtmCwu%2B3G5eDLhsta8752aNrZ7eXSsoBMM6YVzVVxqaf4c%2BaeCcNerqv3sCl4vIOpvr8CFwLAEH3VkaPzuBQlt%2BSCCHcCS1a2QxEtI3BL%2F8qVt%2BzN3D&X-Amz-Signature=0bc9f24dafe8fcbb198a243264d0e75d8b51e06d4002c454a7fc9dbc833d635b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UBXALBX%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICufEzL8EC75cBK2s%2B5D%2FmmUDzm9nQRnmphC%2F%2FUTtCFjAiALxPqmF2MxeeY52VqPdx0CzZP3fKuYzRQFu37I3fN%2FcCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHxHUyy%2Bej6iwkbLhKtwDwEwCEPOUCLUWSPUKad73Qn6dzbdLmvlTOFhWcRogXxJT%2FRfpMJpzV5v8nvYcdczjsADCcdvuRcLsWbTr1yQ5KBoD5yvzvp%2BGsDgW8jaXnI5z5C5c7tNh3Mc%2B6AiAm90QGpUQxI4fCvBz4Jg54F%2B5GUiNuh5pmWDScZdRqnuPfkDuDfYVgQnHc1y2P9iStdJgPRIebkT1AabO9hA1EMOZg7qOnmvVQomfbNtEqKe8j7qGZRs2gxmYULFsZuS8%2FULso%2FJWXJ4llXbeZOyfYLqnRlkngfhppgcXKIy%2B2v9%2BZfEuvvxlzNTGK%2BGyWlLt2V%2BVd55DrOVDc%2F4eonSRf54kqH0ZjS%2FSnlpb%2FhJdrLS%2B1AsD7scg2CK7mgkibhuSOKYhXy%2FoMKpcMTou6b2BQFxOEHBUTnddFuJUB2rL0gElOLCygNuMaUxpgsFHXI1J%2BabyPwtGCtacYLpmMlNGkdXY%2FWSYd2z%2B2Mqvml0BxBWRfJmSdTvHcm%2F2t0WAC4fx14Vyq9s1FTbwmSaPoOs%2F56Cj8oqyi87ght0Z8%2FrLlChpuNXLaiGyhMwPaI4SExgPp%2B7ZkhqlhcOf55HsA9jcbK7RfKx0rp9E3NeswFftAKnO4ZswyOPwu5x9gkcxhRUw4MCY0QY6pgEt4i8W%2FZknrQL9ObzQMSAfFCFvsnmv92MaqdrxDBeovQExp6R3OGya0fgcerL23rTy1AB34oGPvs8hmDN7Xw0zuDc%2Fl0gwYxWRBPxepEVNiT%2Bb61vBHnCyhyGj65qRsbh3J8WNDIs7d9dNOoD12F4fhL8Io83Q8Me24ya28NWrZ4CsWiJNq4nZBTgOfvNFL2u9Z1dmcR6T1JsUQK%2BftJO0vXmq8ltZ&X-Amz-Signature=c97007f4972400ece81c16d52b3031b82fb41a603d6890bd5f699756a674ead5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STFHRZYZ%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5vP7NEQ5peEIdYyRyO0JBxUxwOJr2QqWuq9xsU0EUdAiEA1DCzadNpttdu%2FwUFOYIFqFFzSneQ%2FioujH8ps04%2BtCoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvlz%2FalCv%2BguLeRMyrcA0tQoYzcRZIR7LVeSnJLwrMEqyUlBLur%2Bhw5MAH51tOSHktoPODaB3WnOK0mwtQOnm%2FxWMykZZG31mtqT3NSRwOLVA%2B8eyF9vZtm6s0ig2MHwavG0Vp2BeZdDRWNbQlRtDl0K3Dh7bCPSVCY1ur54RdrYSyYtKCuA3YIBkwqiGFuTQqzHNrwd4%2F%2Btgc3mUQVSGmStYQYxHG7M3iM%2FTWU9ccSFzyYRLk1Avq4IgdexWo8IjFrvwVYimvB0d1RRVH5SnJbRzlcNXFR7Of6EuK%2FbYTMplnBewzrAXkZTQ%2B9r%2FSuvJKU3pJImz1gcBZlDRqf7M%2BE22p%2FD64J6NgZDgdSG3wDPtWmWBRTh5cKRv5BmS7hz1e54MR8VDAEj0m1Jd0QYch8eYWhaTujun5vZYedxUpRhb2aOZ%2B1Q4Z0WC1GI60RNJiBHjm8ralYoFllDo%2BK4v0vdUcGODXiBnJHN47J%2Bw8HWHuAIoek6mLTey56osPfgpFEQ%2FWIJaAN0dNQtHwyvQUInj5nESTiXrOCLUwOcLQJn3JU2i6m0jbrVVH5OuC7YWGy%2B8cEv99pF58biw78e2p0BAqMaW53uBmAT7h9JeqdX%2F0rIStNR3rQtW3Ye2NwI8H3MbYsJCPUh7dcMOq%2FmNEGOqUBewmVaimtGUUE40Um27pVM2067fA9kJ17qNvLiuxYEi0UmZisOfc9yC%2BeD6jy7Z8L3aDdpi%2FdEutfRr2e7%2BtTtcEOascMlzAUgrfqO%2F6fvRLuhc9oFN3R8VAXr5EXK82dVqBAGGA%2BMjMyKl4T73ulFvLeRuiO6lmsTXif4Sd5vY9PBM8%2FU4Omj9H7AhrAYLYi6%2BVqlOESUkPV5ohylpJ97alEZRUl&X-Amz-Signature=ceefd03779d3e0792c0d797108188dd5dcb4e0657c86e584d2c0a08f33ed16a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UBXALBX%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICufEzL8EC75cBK2s%2B5D%2FmmUDzm9nQRnmphC%2F%2FUTtCFjAiALxPqmF2MxeeY52VqPdx0CzZP3fKuYzRQFu37I3fN%2FcCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHxHUyy%2Bej6iwkbLhKtwDwEwCEPOUCLUWSPUKad73Qn6dzbdLmvlTOFhWcRogXxJT%2FRfpMJpzV5v8nvYcdczjsADCcdvuRcLsWbTr1yQ5KBoD5yvzvp%2BGsDgW8jaXnI5z5C5c7tNh3Mc%2B6AiAm90QGpUQxI4fCvBz4Jg54F%2B5GUiNuh5pmWDScZdRqnuPfkDuDfYVgQnHc1y2P9iStdJgPRIebkT1AabO9hA1EMOZg7qOnmvVQomfbNtEqKe8j7qGZRs2gxmYULFsZuS8%2FULso%2FJWXJ4llXbeZOyfYLqnRlkngfhppgcXKIy%2B2v9%2BZfEuvvxlzNTGK%2BGyWlLt2V%2BVd55DrOVDc%2F4eonSRf54kqH0ZjS%2FSnlpb%2FhJdrLS%2B1AsD7scg2CK7mgkibhuSOKYhXy%2FoMKpcMTou6b2BQFxOEHBUTnddFuJUB2rL0gElOLCygNuMaUxpgsFHXI1J%2BabyPwtGCtacYLpmMlNGkdXY%2FWSYd2z%2B2Mqvml0BxBWRfJmSdTvHcm%2F2t0WAC4fx14Vyq9s1FTbwmSaPoOs%2F56Cj8oqyi87ght0Z8%2FrLlChpuNXLaiGyhMwPaI4SExgPp%2B7ZkhqlhcOf55HsA9jcbK7RfKx0rp9E3NeswFftAKnO4ZswyOPwu5x9gkcxhRUw4MCY0QY6pgEt4i8W%2FZknrQL9ObzQMSAfFCFvsnmv92MaqdrxDBeovQExp6R3OGya0fgcerL23rTy1AB34oGPvs8hmDN7Xw0zuDc%2Fl0gwYxWRBPxepEVNiT%2Bb61vBHnCyhyGj65qRsbh3J8WNDIs7d9dNOoD12F4fhL8Io83Q8Me24ya28NWrZ4CsWiJNq4nZBTgOfvNFL2u9Z1dmcR6T1JsUQK%2BftJO0vXmq8ltZ&X-Amz-Signature=d620cb6cbaa7f08afd7e8d81e3fb1b70927a552cc921e19e06b40cfb334c69b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3Q5AGEO%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqvMqjr3fc%2BxxSnjyBK6Y1fKtSWgtVvkb8xq9MAjpWUQIgEL8Z6c3DaI0q1TSzwInN%2Fu0i0cWSP2MYoE%2BlI0y3eXQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfIzZ3RlXF5%2FL0%2FiSrcA3RIb3YVDVwtTOB73JJ7dKMWvgtML3rNmNbd9AMYNCqOjDst2n4qMy%2BjKnXyDtud0aGi%2F9EAPLKXebjyE%2B%2BoSYTSw4I8tMDTwTkSkJrfcHCRmq5m530%2Bp6h5okPx6iVh9%2BEYe4U4RQzZJ6kqZ0rtKy04gp4XLzYWaXpaUvZMcL69IGjAJTpweYzPuhZIrZUo6vnCVRDfHbVLHOtGB7FGCak9oiLQ2LYWqKgQ3L%2FXBwtlUr%2FWwrbCWJ0jTRTeM7sFFmXhUrmJ4qD%2BDmdzoXcgiImcVjUd%2BjeIjHhh5RAO2dZHPYySlOiA9fDGE6qmP7IP2ch%2B4E9ieXbROCfFL1acJ6JlmvK4Fx7iFp6vvM8KSAdbbxYHwrCvy0oStaIMz1nCC324R16OcdxJN0Evl2gRA9xHGZJXcMwktJKZSA0REeXjLvh%2BlK%2BVp2%2BIVtMh6v0A3E7KOvu5NCw1RBCAPzGnq%2FStlcDMgEjBqeE56krSZSkGGgBQKRs%2FXYwd0LNBsI%2FPGCagJ3TLmEJJsbC2mbeDa6Gn%2BpY8y9OTu5qQZJIxLGlGV9fnPrXuDn%2F5UO8UP5J2N0kkIrugEbcIfW0pptnkGKiYsm5L%2FMB%2Fa8bdWwIMV7wx%2FPrQE%2Ft3Rzt%2FQKrfMMf2mNEGOqUBEfHfaQxtciQiO69MhRWMLfn17UrghGNyQTkZ1afrMe5BR5hr2d%2F9Z1QPD9Ws3Ejyog0y21JjU8r8IfwbU6hG12pvKzLS0uOMvHUQebFO5rIuKwuUOk7pn73np%2BiX%2F420i9hc2rG5OpH%2BEXkq1la9ZeBrq88Q7ZkaPtoFRw5DkenzOJ%2FCJ2hZOo6UqrMsxTtamnnyWAtXzSEsi5%2Biqw3747aKshFd&X-Amz-Signature=28cb39f342d1eade3bcf9387102f71dae8fba1d49dedf2acfc23825f87fd38d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UBXALBX%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICufEzL8EC75cBK2s%2B5D%2FmmUDzm9nQRnmphC%2F%2FUTtCFjAiALxPqmF2MxeeY52VqPdx0CzZP3fKuYzRQFu37I3fN%2FcCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHxHUyy%2Bej6iwkbLhKtwDwEwCEPOUCLUWSPUKad73Qn6dzbdLmvlTOFhWcRogXxJT%2FRfpMJpzV5v8nvYcdczjsADCcdvuRcLsWbTr1yQ5KBoD5yvzvp%2BGsDgW8jaXnI5z5C5c7tNh3Mc%2B6AiAm90QGpUQxI4fCvBz4Jg54F%2B5GUiNuh5pmWDScZdRqnuPfkDuDfYVgQnHc1y2P9iStdJgPRIebkT1AabO9hA1EMOZg7qOnmvVQomfbNtEqKe8j7qGZRs2gxmYULFsZuS8%2FULso%2FJWXJ4llXbeZOyfYLqnRlkngfhppgcXKIy%2B2v9%2BZfEuvvxlzNTGK%2BGyWlLt2V%2BVd55DrOVDc%2F4eonSRf54kqH0ZjS%2FSnlpb%2FhJdrLS%2B1AsD7scg2CK7mgkibhuSOKYhXy%2FoMKpcMTou6b2BQFxOEHBUTnddFuJUB2rL0gElOLCygNuMaUxpgsFHXI1J%2BabyPwtGCtacYLpmMlNGkdXY%2FWSYd2z%2B2Mqvml0BxBWRfJmSdTvHcm%2F2t0WAC4fx14Vyq9s1FTbwmSaPoOs%2F56Cj8oqyi87ght0Z8%2FrLlChpuNXLaiGyhMwPaI4SExgPp%2B7ZkhqlhcOf55HsA9jcbK7RfKx0rp9E3NeswFftAKnO4ZswyOPwu5x9gkcxhRUw4MCY0QY6pgEt4i8W%2FZknrQL9ObzQMSAfFCFvsnmv92MaqdrxDBeovQExp6R3OGya0fgcerL23rTy1AB34oGPvs8hmDN7Xw0zuDc%2Fl0gwYxWRBPxepEVNiT%2Bb61vBHnCyhyGj65qRsbh3J8WNDIs7d9dNOoD12F4fhL8Io83Q8Me24ya28NWrZ4CsWiJNq4nZBTgOfvNFL2u9Z1dmcR6T1JsUQK%2BftJO0vXmq8ltZ&X-Amz-Signature=3e66775af489a359b7f0ff79c866f61fdff5caee570044ba00136e7e9560956b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC3VJSEI%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA58ecaPTbUeBB75d65Fi5afaz8xT7xoodi4hVwAAYgQIhAMZUEBSEJAiuw7lHunOkscaA4yjYS%2BiyYeAhWgmc1BTfKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxH8es%2F6qKB21IkkScq3AMGxVTvJBqKMfniUw5D3i7Wtmb4jA3aeoV6iPvLhHBmq7SVM4pdF1OieqBVqwKrvz%2BRohYNlJs21%2F716jcweqGB8fBu04L8IQ4QZ%2FGkeKjlVco8z5Y7f4pWVlvjEfdJ8VHtv9rYyvSWz0UNM2R1cphuotikUl78EmUQ7G77c2pN8mj3VVC3CSnufkPMtuhPlJATnutWY%2B8o5mVlLp5NXtRNjT6GsuFODIl8bKJNCVvuduJmvvJ3jXjpR9KdF2GqphA1BWi%2Bye4yeNsIdwFSBqsbXOQDv4SgFPGta4a%2BTv2cVPp4hyWzmvFgtJ55FKVESYp6vX%2Fk2CP4wlfVTCRzCf0tHpZxb0PD00%2FDZdoMkWdCz3bOXUj29dN7gMoCMBQ4GdiMD3OXtYwxWBQ8pq4C27yy%2Bdq%2FjWPagSt6G9%2BJcvXEoEXy7uhK68ig3j%2B%2F2PjEwhT4HslY%2BAMgnpvr%2BGBsDDxhFF%2FTuy8x1z4Q7zdIEPBBhnx94L1lEtniU%2FSaNBxWLt03K8hGTfhY1bDawXsUw2szJXTvfBm2n3JlYGCWRHyzB6CzDLTohnLBUB%2BnFp%2Fh1da9crdRIMngKmcrFzFDLXIGR6YsxVApiskgZAMZFyjdspvKaM8dCcETLT93qjCfv5jRBjqkAWQnW93ouIUKmstHAUsNLHPcsxFzKztdAjCjQIiZlVuFUSWgkvj%2Fvr2d1EDFhGU7NPrYJ6iWX%2F3c7fzceSOITg8dQv1WDQ3KjQDy5FYPPN62mdr5GV2DxNQDzTRA8kPUhJynwvduvgKIlqikMWDmaBibJppj4UQTAvDhgmFBVi952x5FIKGrifdi6%2Bim2z0pO3ciLsIKJcgBiXZOuPApnW4gIeIR&X-Amz-Signature=efc306cffb17b5186495f9593396c16def69a0d41c5792ea45664dd406811b4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UBXALBX%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICufEzL8EC75cBK2s%2B5D%2FmmUDzm9nQRnmphC%2F%2FUTtCFjAiALxPqmF2MxeeY52VqPdx0CzZP3fKuYzRQFu37I3fN%2FcCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHxHUyy%2Bej6iwkbLhKtwDwEwCEPOUCLUWSPUKad73Qn6dzbdLmvlTOFhWcRogXxJT%2FRfpMJpzV5v8nvYcdczjsADCcdvuRcLsWbTr1yQ5KBoD5yvzvp%2BGsDgW8jaXnI5z5C5c7tNh3Mc%2B6AiAm90QGpUQxI4fCvBz4Jg54F%2B5GUiNuh5pmWDScZdRqnuPfkDuDfYVgQnHc1y2P9iStdJgPRIebkT1AabO9hA1EMOZg7qOnmvVQomfbNtEqKe8j7qGZRs2gxmYULFsZuS8%2FULso%2FJWXJ4llXbeZOyfYLqnRlkngfhppgcXKIy%2B2v9%2BZfEuvvxlzNTGK%2BGyWlLt2V%2BVd55DrOVDc%2F4eonSRf54kqH0ZjS%2FSnlpb%2FhJdrLS%2B1AsD7scg2CK7mgkibhuSOKYhXy%2FoMKpcMTou6b2BQFxOEHBUTnddFuJUB2rL0gElOLCygNuMaUxpgsFHXI1J%2BabyPwtGCtacYLpmMlNGkdXY%2FWSYd2z%2B2Mqvml0BxBWRfJmSdTvHcm%2F2t0WAC4fx14Vyq9s1FTbwmSaPoOs%2F56Cj8oqyi87ght0Z8%2FrLlChpuNXLaiGyhMwPaI4SExgPp%2B7ZkhqlhcOf55HsA9jcbK7RfKx0rp9E3NeswFftAKnO4ZswyOPwu5x9gkcxhRUw4MCY0QY6pgEt4i8W%2FZknrQL9ObzQMSAfFCFvsnmv92MaqdrxDBeovQExp6R3OGya0fgcerL23rTy1AB34oGPvs8hmDN7Xw0zuDc%2Fl0gwYxWRBPxepEVNiT%2Bb61vBHnCyhyGj65qRsbh3J8WNDIs7d9dNOoD12F4fhL8Io83Q8Me24ya28NWrZ4CsWiJNq4nZBTgOfvNFL2u9Z1dmcR6T1JsUQK%2BftJO0vXmq8ltZ&X-Amz-Signature=0f264713901709f680f7b7518bea5b053aea856a491d0f725d7463b3744838b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDK2DX45%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRIhuPpQPgwysf6I7Fef4Jif09UZHDh1E9ZOYwmfKxqAiBZGqn40HjctdqEsNBhhgrj4PZrNtflR2kLkWiTz7wmvSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTJcOwAOeyjlcHYJrKtwDL4M5iiu2KewFaRyPlfbjeIyB8r0EFARNbr82zxXVoJhJohTMbxGk1fmXvcvvoKyecc9%2Fw4HZUfBoWJsS8ErG%2F53BNCYLConJj1pDocHxbAuPv5ba89BRofqc%2BO%2Bw0h3LcTTB5FRjhDY2Bx2xaUF6yDAhq10WwzxgN1c4tqJBsSXY4W0xyezimTA0RO8IPsWMrFoBY9akT1R8IjQwq%2B2EpsALMPRnma8p%2Bel1sPOvvHt8tmuPisLj43mJmrVgqU4IrnOwaXyFMkKzxM12pzXn%2BF1TJI51mlNrz%2Bo%2BiwJgSRo9x40%2Buy50KaJbEn1feUJcpelElBqkrkJjI8n7rVcUBZn3PUENihvID3SYArhQzVTHMHMMsT%2BHckN5RcaexFD0G3iF0ae%2F%2FVAbEM%2BsmISYUOqYz%2FfzaqkNfMWzwB%2BHtpia5FhIbVKWoRp6Cs9Hqcau7xDabPjNi1xaauiHj5NlIhXZ4PdKuE5gGQ%2FTW%2BEDch2cRq20ltXlyxv2EXkcE%2B%2FCxObOQpCfGtyk%2B7PSCsWfUe7mncv%2BwGKHFdKk034YWIHDBCd1owwiDrIb2opbmw96Xx1xssOic%2FF1hg4h%2BE8FcuDd7wsEoiwOrMVH37eO0nFcKi7M7WXqBOh3XB4w%2BL%2BY0QY6pgH8yyWURa8vJfp8RHhEcedeTLJ%2FLWxtDP1S1%2BLWaD8eSletQPHeUOkcjFIETp88PJYc3AQKxaqkRj%2FQzv6e8HXeyVzLxJ7ONf5zmcjo4camuYY26kd5EVeGpxkjDjNgmkppBo72K%2BsSPCG2UkcsvqDZ48BqA1oxP9ysL6JX7TaN%2BHXhUcejyMSxL9awgfHEC1DL7O6F4ikSxmmFcojicfTFgPPOpx5c&X-Amz-Signature=0aa765dd971261c8328b011b582dde3f07b5fcc001ebf8650c8b2cd1e12cce02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ5TNZKE%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnkNQhw0L%2BmnbogAd4kvNoHLUrgvM%2FJAFgIKF9IKJ8pAiEAnfcQjnKKH4wAyClrossccbJ%2FMPyrPo5TVXMhiZ7NGfEqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXKEiKnzOzoP0O%2BjircA0ZrzJLXl%2FuWkFMKXkV3TVNdC28xJgLnuAUsdKbQDtF0gRURNIH5%2FK2kOH0VzZjUXLZW3cq6lSUEopP0736%2BvH4oTvYsvzCmBCgL9rxeKGEbMqceULkvANgQpQuhDTx9kPJyDtQhjPyPkQpD9%2BGanJTKzLdH%2FhnYAq3CBX9HAVbitI9KSL5dzXwSYdo1ZhSu9Bnj5hcK6xloZt4NVpcE9rX1huEeo8hzsor%2F%2ByA48a8U%2FxIFxKcNU3sfgE9Jm0c6Y5eTb2EwXhKXX%2FGFjEHbQq6B9F4WCFDdx7OgcCzyatBRDzvBFdVjiKiaLwAgeGKmKqjRD4M1RJeD5w%2BKfjtnhQm4tUXxNXbcjQb%2BUxhCNAYSC0gAZKGJbWb53ocdRfWj6BT0APj79dxQJPp58iy3GuPNiw83xkmC0swi9%2F11oIrTDoC24EeGAhrSi%2FSD73eY9HA2dYZxg4K02pFxB5TgASCYFqhVEupvonYYRh1LDyWtnwFR9bcqZJvnVDw%2BKMBGIQdXi%2FG423PVvLxHu1sdLhwtzU1At3Xr2BrjDNdGLlkp7KpLCD7Qmf1EB4C6yPZ8YhcVlJcZl8NqNyFikfP8DTPSlqdPSbaZ3%2F%2FzFmKsxySWtdfNFBctuui3LU%2FiMOm%2FmNEGOqUBAN58YRFeNjIguo9r4MwkPw%2Fws7iBrjg86u3kOnY2TCUhxzOI11bLasQf6dNMzHVhPRfaYgKwuodKix7FvYWc%2BTNGSWB8gJUo0QXh8wPeSlA4iUJmJ75JrVdTKn0ubXCGCjj4axQ56lk5qnH7Bd3Id9sfmvfye1QGEDCMXl7oUAmVlZe4WVSGZISQm5BGV9W3CyDqDS0i9pyloac36pjp07laXvhB&X-Amz-Signature=6f34102d9548c5bcd951adfe133e5f4ff916b8801693b9abbebcf0c8c108c2dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DTORJ3C%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Fs5FD33uUwGD8oZHmZXvki%2FO1zf7B6JodtiEuAmfAdAIgJp%2Fhci8dooKTYpL6HVoSWFtG0moIQcJs1mTolvm56hIqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIvbJid0G5PGKGciWircAwUJVlcsG1IAGfPxv9XihE5ALTeEcVyPIO1vFVZ0VAnCcLLwaEtUH3BGOOfmw0RmgR4guFKahY4aE9Zc8Yo1ftMFJvGgQU%2BS88f3ilFZRuVkgXgJxM7%2Bbtfl%2F9vFjv2FzXkzbVPeqPnThn8ADNjx8%2Fq%2B7wgWjtVFChOJuoueUTykvHhfq8mSnihVM4fMVirRxn0umgk3K0EHdjKoLUYfvAHFDDPO44QRiNik9E%2FN1KpX%2FuyN2EZSfohGAsYnhGpsH8osIo8yjZ4tO1qFhCRaiAyW99w7VtFZW4yOLJ%2F%2BNIVYWhWWXLbLfxWCTWSDUWo2T8%2B6vEDNLkjyvlalUrBSYABGhC3CeHgWI8tai5LqFTURHoCqrwrgjuDIB4pJdjd7%2BcFnKmzuRCPcap6E8KVFa8SeoJxx5bRejKZC6vYgsf2fAHECA54vmzmiefX3A7elj39QQdt%2BAajeDRPWUvqrXwCglwXZ64%2FSxA9g%2BQuJUxFw5rJDRAg8dmeWGRjEAElf9WeQ4yWhE%2F5EL1eqn3k4Teq9y2LI5O3rnnq1X0K3%2FqjCqwNhQb9to731lvPb6i4gi0KSzTLTZFPGX56FcEM%2ByXTa0SNlWYWIYw2eEvGWbAIfyc0oIOzWEyS3nTb6MKbAmNEGOqUB41Cr8O60yazdHfqSLw1p2pNxFVppbWk9DeZ4sshkoboS1aILBy%2BOJUTP5%2BXIuaHbSMVKGYobEjYBc4rE%2FsF2rFXja1XPQ29pyp9WfBv%2BXWQRnR%2FwvYcbUZACdlOCRQTZjOwpSgnpdlC5GQUxYwqz%2FLij3aBel%2FrAc0NCkEwVWJzq2J3pj0CZ4WrsmytpGLXVmplh%2FVEjpFej%2BCkyrJagFLe6HwkI&X-Amz-Signature=4782a65a6a729fea4d5056f294fe04997ed9f3c11b89dd6efe27c1fdc45e0464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UBXALBX%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICufEzL8EC75cBK2s%2B5D%2FmmUDzm9nQRnmphC%2F%2FUTtCFjAiALxPqmF2MxeeY52VqPdx0CzZP3fKuYzRQFu37I3fN%2FcCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHxHUyy%2Bej6iwkbLhKtwDwEwCEPOUCLUWSPUKad73Qn6dzbdLmvlTOFhWcRogXxJT%2FRfpMJpzV5v8nvYcdczjsADCcdvuRcLsWbTr1yQ5KBoD5yvzvp%2BGsDgW8jaXnI5z5C5c7tNh3Mc%2B6AiAm90QGpUQxI4fCvBz4Jg54F%2B5GUiNuh5pmWDScZdRqnuPfkDuDfYVgQnHc1y2P9iStdJgPRIebkT1AabO9hA1EMOZg7qOnmvVQomfbNtEqKe8j7qGZRs2gxmYULFsZuS8%2FULso%2FJWXJ4llXbeZOyfYLqnRlkngfhppgcXKIy%2B2v9%2BZfEuvvxlzNTGK%2BGyWlLt2V%2BVd55DrOVDc%2F4eonSRf54kqH0ZjS%2FSnlpb%2FhJdrLS%2B1AsD7scg2CK7mgkibhuSOKYhXy%2FoMKpcMTou6b2BQFxOEHBUTnddFuJUB2rL0gElOLCygNuMaUxpgsFHXI1J%2BabyPwtGCtacYLpmMlNGkdXY%2FWSYd2z%2B2Mqvml0BxBWRfJmSdTvHcm%2F2t0WAC4fx14Vyq9s1FTbwmSaPoOs%2F56Cj8oqyi87ght0Z8%2FrLlChpuNXLaiGyhMwPaI4SExgPp%2B7ZkhqlhcOf55HsA9jcbK7RfKx0rp9E3NeswFftAKnO4ZswyOPwu5x9gkcxhRUw4MCY0QY6pgEt4i8W%2FZknrQL9ObzQMSAfFCFvsnmv92MaqdrxDBeovQExp6R3OGya0fgcerL23rTy1AB34oGPvs8hmDN7Xw0zuDc%2Fl0gwYxWRBPxepEVNiT%2Bb61vBHnCyhyGj65qRsbh3J8WNDIs7d9dNOoD12F4fhL8Io83Q8Me24ya28NWrZ4CsWiJNq4nZBTgOfvNFL2u9Z1dmcR6T1JsUQK%2BftJO0vXmq8ltZ&X-Amz-Signature=c2669ae9ca2b18e590f885d6c0e6e73f2e84e5375d70d1b1396a58632c47b0a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UBXALBX%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICufEzL8EC75cBK2s%2B5D%2FmmUDzm9nQRnmphC%2F%2FUTtCFjAiALxPqmF2MxeeY52VqPdx0CzZP3fKuYzRQFu37I3fN%2FcCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHxHUyy%2Bej6iwkbLhKtwDwEwCEPOUCLUWSPUKad73Qn6dzbdLmvlTOFhWcRogXxJT%2FRfpMJpzV5v8nvYcdczjsADCcdvuRcLsWbTr1yQ5KBoD5yvzvp%2BGsDgW8jaXnI5z5C5c7tNh3Mc%2B6AiAm90QGpUQxI4fCvBz4Jg54F%2B5GUiNuh5pmWDScZdRqnuPfkDuDfYVgQnHc1y2P9iStdJgPRIebkT1AabO9hA1EMOZg7qOnmvVQomfbNtEqKe8j7qGZRs2gxmYULFsZuS8%2FULso%2FJWXJ4llXbeZOyfYLqnRlkngfhppgcXKIy%2B2v9%2BZfEuvvxlzNTGK%2BGyWlLt2V%2BVd55DrOVDc%2F4eonSRf54kqH0ZjS%2FSnlpb%2FhJdrLS%2B1AsD7scg2CK7mgkibhuSOKYhXy%2FoMKpcMTou6b2BQFxOEHBUTnddFuJUB2rL0gElOLCygNuMaUxpgsFHXI1J%2BabyPwtGCtacYLpmMlNGkdXY%2FWSYd2z%2B2Mqvml0BxBWRfJmSdTvHcm%2F2t0WAC4fx14Vyq9s1FTbwmSaPoOs%2F56Cj8oqyi87ght0Z8%2FrLlChpuNXLaiGyhMwPaI4SExgPp%2B7ZkhqlhcOf55HsA9jcbK7RfKx0rp9E3NeswFftAKnO4ZswyOPwu5x9gkcxhRUw4MCY0QY6pgEt4i8W%2FZknrQL9ObzQMSAfFCFvsnmv92MaqdrxDBeovQExp6R3OGya0fgcerL23rTy1AB34oGPvs8hmDN7Xw0zuDc%2Fl0gwYxWRBPxepEVNiT%2Bb61vBHnCyhyGj65qRsbh3J8WNDIs7d9dNOoD12F4fhL8Io83Q8Me24ya28NWrZ4CsWiJNq4nZBTgOfvNFL2u9Z1dmcR6T1JsUQK%2BftJO0vXmq8ltZ&X-Amz-Signature=33cc6b64105902f7fd2124f48c990284797de6f9cfd6490b3512f97dd348b8a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44MKZWM%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAPiF9wAu46%2FP2bZmhPlfpNW80VBez1Kh9m4izFLgyxAiBhjFWqwOv9IAYB6YHglHHDBRsxJOEKEvgWZW%2FtZQvWDSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuGbGZfijaEoKdmOkKtwDr7pK56DLT1LOabM8p8KXNW%2F03WNjoObzDyTsuyPvuERD0hbYJgwRJDspQnGmDs35BgOQlYtewSaddGH3kUNtFNlaswTeJNJMs2bMxaNi%2FLfmIm3AUL%2FjGB2zdDScTSsGNQcQJU5M8eI41W3x%2BRsmJy9KJTAq2GTVQmHecca%2B1oO5ZQBkM6l8ubsi3j%2FyKIxqjZHarsolcJbRXejWwuKAzWS%2BgVJ0kRcJBHZIhUtZjRN9ZsAt7xraoCKb2XyyeHYfpQUWls5muFbVAP0h0xyipLawIkIwg%2F07%2FEtDMgrvvVg%2BWN9%2BThYPYZL3%2F2i8xPzQB6trAig9PhdmtCdU%2FB7bBpZNuWtKmt1J9oWF1pgKmIk%2FePdpPwYtXNmeNmHkxEbCdEKMq9EcMpYSTTXcVK2QUpmrS9UrGZVEqeT17Q5qC5HjxAX0dBvsr%2FdaKrV0JNxzj1UmIUxoQouHXMicLpWOVgVu%2F72t9xWS%2Fvo9OCqTl38cotxcxOiDndvrSt1UIB9FURYvdr3LDq1Ms4bW5%2BBqVXGKLN37YRrAWmnJbH1Ktik4h9ryraA1EcXgKerDC3Z%2BE6qA%2BgK%2FrSPhjf72%2BhY01DjY%2B2fZwD40slyrZSL63lTglim6On4iLj3r5GMwjr%2BY0QY6pgFU85KO3KjgMAD6VXKvxak6fij%2FxPK1MOKzw5%2BGOzyONWbEg8gHvQ2h45Ow9v6HkmKN%2FH%2FPv4B5RPG%2B274h4vaeDJtt7uaL3nXPJPOATfjS1Eyf76LGKNJ2nP4RCG667PONt01hKS5cQ6IGGpjOitbPcK50PTPkrxEVdHzwqMzi6BGWHM8%2Bbx9dBpp6MEGdjIqiER0AoLKyvNff200WS1fpwPmdCRYe&X-Amz-Signature=670d33c2648a2f186ad87384b5b4a5fa5d082202dd3d762c8784eb6586ce15ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44MKZWM%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAPiF9wAu46%2FP2bZmhPlfpNW80VBez1Kh9m4izFLgyxAiBhjFWqwOv9IAYB6YHglHHDBRsxJOEKEvgWZW%2FtZQvWDSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuGbGZfijaEoKdmOkKtwDr7pK56DLT1LOabM8p8KXNW%2F03WNjoObzDyTsuyPvuERD0hbYJgwRJDspQnGmDs35BgOQlYtewSaddGH3kUNtFNlaswTeJNJMs2bMxaNi%2FLfmIm3AUL%2FjGB2zdDScTSsGNQcQJU5M8eI41W3x%2BRsmJy9KJTAq2GTVQmHecca%2B1oO5ZQBkM6l8ubsi3j%2FyKIxqjZHarsolcJbRXejWwuKAzWS%2BgVJ0kRcJBHZIhUtZjRN9ZsAt7xraoCKb2XyyeHYfpQUWls5muFbVAP0h0xyipLawIkIwg%2F07%2FEtDMgrvvVg%2BWN9%2BThYPYZL3%2F2i8xPzQB6trAig9PhdmtCdU%2FB7bBpZNuWtKmt1J9oWF1pgKmIk%2FePdpPwYtXNmeNmHkxEbCdEKMq9EcMpYSTTXcVK2QUpmrS9UrGZVEqeT17Q5qC5HjxAX0dBvsr%2FdaKrV0JNxzj1UmIUxoQouHXMicLpWOVgVu%2F72t9xWS%2Fvo9OCqTl38cotxcxOiDndvrSt1UIB9FURYvdr3LDq1Ms4bW5%2BBqVXGKLN37YRrAWmnJbH1Ktik4h9ryraA1EcXgKerDC3Z%2BE6qA%2BgK%2FrSPhjf72%2BhY01DjY%2B2fZwD40slyrZSL63lTglim6On4iLj3r5GMwjr%2BY0QY6pgFU85KO3KjgMAD6VXKvxak6fij%2FxPK1MOKzw5%2BGOzyONWbEg8gHvQ2h45Ow9v6HkmKN%2FH%2FPv4B5RPG%2B274h4vaeDJtt7uaL3nXPJPOATfjS1Eyf76LGKNJ2nP4RCG667PONt01hKS5cQ6IGGpjOitbPcK50PTPkrxEVdHzwqMzi6BGWHM8%2Bbx9dBpp6MEGdjIqiER0AoLKyvNff200WS1fpwPmdCRYe&X-Amz-Signature=22ab70c813830e6789b85a3098a0d36c5f9b2d8fbe0893625ac4a440d7637577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44MKZWM%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAPiF9wAu46%2FP2bZmhPlfpNW80VBez1Kh9m4izFLgyxAiBhjFWqwOv9IAYB6YHglHHDBRsxJOEKEvgWZW%2FtZQvWDSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuGbGZfijaEoKdmOkKtwDr7pK56DLT1LOabM8p8KXNW%2F03WNjoObzDyTsuyPvuERD0hbYJgwRJDspQnGmDs35BgOQlYtewSaddGH3kUNtFNlaswTeJNJMs2bMxaNi%2FLfmIm3AUL%2FjGB2zdDScTSsGNQcQJU5M8eI41W3x%2BRsmJy9KJTAq2GTVQmHecca%2B1oO5ZQBkM6l8ubsi3j%2FyKIxqjZHarsolcJbRXejWwuKAzWS%2BgVJ0kRcJBHZIhUtZjRN9ZsAt7xraoCKb2XyyeHYfpQUWls5muFbVAP0h0xyipLawIkIwg%2F07%2FEtDMgrvvVg%2BWN9%2BThYPYZL3%2F2i8xPzQB6trAig9PhdmtCdU%2FB7bBpZNuWtKmt1J9oWF1pgKmIk%2FePdpPwYtXNmeNmHkxEbCdEKMq9EcMpYSTTXcVK2QUpmrS9UrGZVEqeT17Q5qC5HjxAX0dBvsr%2FdaKrV0JNxzj1UmIUxoQouHXMicLpWOVgVu%2F72t9xWS%2Fvo9OCqTl38cotxcxOiDndvrSt1UIB9FURYvdr3LDq1Ms4bW5%2BBqVXGKLN37YRrAWmnJbH1Ktik4h9ryraA1EcXgKerDC3Z%2BE6qA%2BgK%2FrSPhjf72%2BhY01DjY%2B2fZwD40slyrZSL63lTglim6On4iLj3r5GMwjr%2BY0QY6pgFU85KO3KjgMAD6VXKvxak6fij%2FxPK1MOKzw5%2BGOzyONWbEg8gHvQ2h45Ow9v6HkmKN%2FH%2FPv4B5RPG%2B274h4vaeDJtt7uaL3nXPJPOATfjS1Eyf76LGKNJ2nP4RCG667PONt01hKS5cQ6IGGpjOitbPcK50PTPkrxEVdHzwqMzi6BGWHM8%2Bbx9dBpp6MEGdjIqiER0AoLKyvNff200WS1fpwPmdCRYe&X-Amz-Signature=3222089c6ec15b5476be178b38d34ec6c2a40a4d468e9dec1e983c2dfbfb12db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44MKZWM%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAPiF9wAu46%2FP2bZmhPlfpNW80VBez1Kh9m4izFLgyxAiBhjFWqwOv9IAYB6YHglHHDBRsxJOEKEvgWZW%2FtZQvWDSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuGbGZfijaEoKdmOkKtwDr7pK56DLT1LOabM8p8KXNW%2F03WNjoObzDyTsuyPvuERD0hbYJgwRJDspQnGmDs35BgOQlYtewSaddGH3kUNtFNlaswTeJNJMs2bMxaNi%2FLfmIm3AUL%2FjGB2zdDScTSsGNQcQJU5M8eI41W3x%2BRsmJy9KJTAq2GTVQmHecca%2B1oO5ZQBkM6l8ubsi3j%2FyKIxqjZHarsolcJbRXejWwuKAzWS%2BgVJ0kRcJBHZIhUtZjRN9ZsAt7xraoCKb2XyyeHYfpQUWls5muFbVAP0h0xyipLawIkIwg%2F07%2FEtDMgrvvVg%2BWN9%2BThYPYZL3%2F2i8xPzQB6trAig9PhdmtCdU%2FB7bBpZNuWtKmt1J9oWF1pgKmIk%2FePdpPwYtXNmeNmHkxEbCdEKMq9EcMpYSTTXcVK2QUpmrS9UrGZVEqeT17Q5qC5HjxAX0dBvsr%2FdaKrV0JNxzj1UmIUxoQouHXMicLpWOVgVu%2F72t9xWS%2Fvo9OCqTl38cotxcxOiDndvrSt1UIB9FURYvdr3LDq1Ms4bW5%2BBqVXGKLN37YRrAWmnJbH1Ktik4h9ryraA1EcXgKerDC3Z%2BE6qA%2BgK%2FrSPhjf72%2BhY01DjY%2B2fZwD40slyrZSL63lTglim6On4iLj3r5GMwjr%2BY0QY6pgFU85KO3KjgMAD6VXKvxak6fij%2FxPK1MOKzw5%2BGOzyONWbEg8gHvQ2h45Ow9v6HkmKN%2FH%2FPv4B5RPG%2B274h4vaeDJtt7uaL3nXPJPOATfjS1Eyf76LGKNJ2nP4RCG667PONt01hKS5cQ6IGGpjOitbPcK50PTPkrxEVdHzwqMzi6BGWHM8%2Bbx9dBpp6MEGdjIqiER0AoLKyvNff200WS1fpwPmdCRYe&X-Amz-Signature=da7144e0f27c211eaf6341d39648ad77ce46fb182badb23c196dbe72c298629e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466527VB752%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ8FYdAtFU%2FLuIOamu0U6RGXFZixB%2FkM%2FMgRXUwHcpbQIhAPqsl7o5VuykkmOUL%2BpHZYOq%2BmNpgaBhwVxZRNYNX%2Bh0KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1NM8HvoySfH4k78oq3APhDRkr6m8vhUqN8Wvt7AWULMuxetbAYTWYplm9mEk%2F1doG1yQisvGsSQatBlvJZgSAn%2FRPpXeHKq8r33sK0BtbGe9QQTN3QxL6S47VmYNnjQUnOG%2BvSLdeZP0Xz9ZINXmqXW4XZqkwqAiFcr9GjwQJ6VEzJVXS1ujPKCPYig5VjCo3%2FBac9pQGUuAXzRHHddC8qnr6RbK7bAbIv1KpnQ9KSO3d5bWcFejvKLlxzCYGX3rGzlrUhaaWxarBSUAfDtYmUJX4XVqppUO7%2Fi%2FTUy4m9NxHvDbpjwLgsvR52IZ0Yr5tehDvf1B6GFE9a7%2FJTQmYyfD%2FYgfiDVag47yUjMcSI0sg53a4cWsJs8%2F4Ubc13Dl9Yb8AbqNGILKLu2HVewkqTYZi98yv5KlHLe1Mg0KttEdBN6MmMK0UpW7THJu%2FK9%2FZpMJpvt5FMuBCF9xUYEyyRD51P2wGap9ltlhIKsOFlDc2CoTvnroKVjd%2B8zPrAWmo5qllWjFsfNtQFcSLNvUx0ccwxahdnUQU3wTl%2FXw3whKYeIGIgmJwuu90S04%2BP%2BCJD67TDDFEZggrF5AOKyg827B42U%2B9ArobP4J8MfWufUgnnMhc5AGE3tiOfePFJ%2FyW%2BI42P%2BpeBLs1UTChwJjRBjqkAVIwJFPpTxhEeCtNvEPf3EIe43V%2BFIOWARu%2F8u%2F2JpQbaXcnLU86M3AXELp2mCf3m4xvVYSoFKCgV0IE%2Fldtdj5TgeanU%2B1eQVqNGcXDnalw9HwgD6UIcwIA3EfxyfOtOU2dskvF73P4WfKssiZp5MQqMauWl1wuiinimYVv3T9CYCMXoHmNw%2BLKAAY9g7v8s4beLLUerPWYWB%2FiFLXccI5aLMaH&X-Amz-Signature=f066632d40bca6fb7699a62ed5ee629bf4e2d666206abf240e26df02346f61b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44MKZWM%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAPiF9wAu46%2FP2bZmhPlfpNW80VBez1Kh9m4izFLgyxAiBhjFWqwOv9IAYB6YHglHHDBRsxJOEKEvgWZW%2FtZQvWDSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuGbGZfijaEoKdmOkKtwDr7pK56DLT1LOabM8p8KXNW%2F03WNjoObzDyTsuyPvuERD0hbYJgwRJDspQnGmDs35BgOQlYtewSaddGH3kUNtFNlaswTeJNJMs2bMxaNi%2FLfmIm3AUL%2FjGB2zdDScTSsGNQcQJU5M8eI41W3x%2BRsmJy9KJTAq2GTVQmHecca%2B1oO5ZQBkM6l8ubsi3j%2FyKIxqjZHarsolcJbRXejWwuKAzWS%2BgVJ0kRcJBHZIhUtZjRN9ZsAt7xraoCKb2XyyeHYfpQUWls5muFbVAP0h0xyipLawIkIwg%2F07%2FEtDMgrvvVg%2BWN9%2BThYPYZL3%2F2i8xPzQB6trAig9PhdmtCdU%2FB7bBpZNuWtKmt1J9oWF1pgKmIk%2FePdpPwYtXNmeNmHkxEbCdEKMq9EcMpYSTTXcVK2QUpmrS9UrGZVEqeT17Q5qC5HjxAX0dBvsr%2FdaKrV0JNxzj1UmIUxoQouHXMicLpWOVgVu%2F72t9xWS%2Fvo9OCqTl38cotxcxOiDndvrSt1UIB9FURYvdr3LDq1Ms4bW5%2BBqVXGKLN37YRrAWmnJbH1Ktik4h9ryraA1EcXgKerDC3Z%2BE6qA%2BgK%2FrSPhjf72%2BhY01DjY%2B2fZwD40slyrZSL63lTglim6On4iLj3r5GMwjr%2BY0QY6pgFU85KO3KjgMAD6VXKvxak6fij%2FxPK1MOKzw5%2BGOzyONWbEg8gHvQ2h45Ow9v6HkmKN%2FH%2FPv4B5RPG%2B274h4vaeDJtt7uaL3nXPJPOATfjS1Eyf76LGKNJ2nP4RCG667PONt01hKS5cQ6IGGpjOitbPcK50PTPkrxEVdHzwqMzi6BGWHM8%2Bbx9dBpp6MEGdjIqiER0AoLKyvNff200WS1fpwPmdCRYe&X-Amz-Signature=64d76e19c85ceca088402c22dbef992bc68ab063d1fa0c6b05c0755cf2752942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44MKZWM%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAPiF9wAu46%2FP2bZmhPlfpNW80VBez1Kh9m4izFLgyxAiBhjFWqwOv9IAYB6YHglHHDBRsxJOEKEvgWZW%2FtZQvWDSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuGbGZfijaEoKdmOkKtwDr7pK56DLT1LOabM8p8KXNW%2F03WNjoObzDyTsuyPvuERD0hbYJgwRJDspQnGmDs35BgOQlYtewSaddGH3kUNtFNlaswTeJNJMs2bMxaNi%2FLfmIm3AUL%2FjGB2zdDScTSsGNQcQJU5M8eI41W3x%2BRsmJy9KJTAq2GTVQmHecca%2B1oO5ZQBkM6l8ubsi3j%2FyKIxqjZHarsolcJbRXejWwuKAzWS%2BgVJ0kRcJBHZIhUtZjRN9ZsAt7xraoCKb2XyyeHYfpQUWls5muFbVAP0h0xyipLawIkIwg%2F07%2FEtDMgrvvVg%2BWN9%2BThYPYZL3%2F2i8xPzQB6trAig9PhdmtCdU%2FB7bBpZNuWtKmt1J9oWF1pgKmIk%2FePdpPwYtXNmeNmHkxEbCdEKMq9EcMpYSTTXcVK2QUpmrS9UrGZVEqeT17Q5qC5HjxAX0dBvsr%2FdaKrV0JNxzj1UmIUxoQouHXMicLpWOVgVu%2F72t9xWS%2Fvo9OCqTl38cotxcxOiDndvrSt1UIB9FURYvdr3LDq1Ms4bW5%2BBqVXGKLN37YRrAWmnJbH1Ktik4h9ryraA1EcXgKerDC3Z%2BE6qA%2BgK%2FrSPhjf72%2BhY01DjY%2B2fZwD40slyrZSL63lTglim6On4iLj3r5GMwjr%2BY0QY6pgFU85KO3KjgMAD6VXKvxak6fij%2FxPK1MOKzw5%2BGOzyONWbEg8gHvQ2h45Ow9v6HkmKN%2FH%2FPv4B5RPG%2B274h4vaeDJtt7uaL3nXPJPOATfjS1Eyf76LGKNJ2nP4RCG667PONt01hKS5cQ6IGGpjOitbPcK50PTPkrxEVdHzwqMzi6BGWHM8%2Bbx9dBpp6MEGdjIqiER0AoLKyvNff200WS1fpwPmdCRYe&X-Amz-Signature=4bfa026fd61cd4ff804852da521fcf1f88eb5d4e19cad4a57847f5f9f3293910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44MKZWM%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAPiF9wAu46%2FP2bZmhPlfpNW80VBez1Kh9m4izFLgyxAiBhjFWqwOv9IAYB6YHglHHDBRsxJOEKEvgWZW%2FtZQvWDSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuGbGZfijaEoKdmOkKtwDr7pK56DLT1LOabM8p8KXNW%2F03WNjoObzDyTsuyPvuERD0hbYJgwRJDspQnGmDs35BgOQlYtewSaddGH3kUNtFNlaswTeJNJMs2bMxaNi%2FLfmIm3AUL%2FjGB2zdDScTSsGNQcQJU5M8eI41W3x%2BRsmJy9KJTAq2GTVQmHecca%2B1oO5ZQBkM6l8ubsi3j%2FyKIxqjZHarsolcJbRXejWwuKAzWS%2BgVJ0kRcJBHZIhUtZjRN9ZsAt7xraoCKb2XyyeHYfpQUWls5muFbVAP0h0xyipLawIkIwg%2F07%2FEtDMgrvvVg%2BWN9%2BThYPYZL3%2F2i8xPzQB6trAig9PhdmtCdU%2FB7bBpZNuWtKmt1J9oWF1pgKmIk%2FePdpPwYtXNmeNmHkxEbCdEKMq9EcMpYSTTXcVK2QUpmrS9UrGZVEqeT17Q5qC5HjxAX0dBvsr%2FdaKrV0JNxzj1UmIUxoQouHXMicLpWOVgVu%2F72t9xWS%2Fvo9OCqTl38cotxcxOiDndvrSt1UIB9FURYvdr3LDq1Ms4bW5%2BBqVXGKLN37YRrAWmnJbH1Ktik4h9ryraA1EcXgKerDC3Z%2BE6qA%2BgK%2FrSPhjf72%2BhY01DjY%2B2fZwD40slyrZSL63lTglim6On4iLj3r5GMwjr%2BY0QY6pgFU85KO3KjgMAD6VXKvxak6fij%2FxPK1MOKzw5%2BGOzyONWbEg8gHvQ2h45Ow9v6HkmKN%2FH%2FPv4B5RPG%2B274h4vaeDJtt7uaL3nXPJPOATfjS1Eyf76LGKNJ2nP4RCG667PONt01hKS5cQ6IGGpjOitbPcK50PTPkrxEVdHzwqMzi6BGWHM8%2Bbx9dBpp6MEGdjIqiER0AoLKyvNff200WS1fpwPmdCRYe&X-Amz-Signature=351ebdf066b1d7971bc7a72903ab4fcb89b59feafe1bf2b9c585b337a4bd0db7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44MKZWM%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAPiF9wAu46%2FP2bZmhPlfpNW80VBez1Kh9m4izFLgyxAiBhjFWqwOv9IAYB6YHglHHDBRsxJOEKEvgWZW%2FtZQvWDSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuGbGZfijaEoKdmOkKtwDr7pK56DLT1LOabM8p8KXNW%2F03WNjoObzDyTsuyPvuERD0hbYJgwRJDspQnGmDs35BgOQlYtewSaddGH3kUNtFNlaswTeJNJMs2bMxaNi%2FLfmIm3AUL%2FjGB2zdDScTSsGNQcQJU5M8eI41W3x%2BRsmJy9KJTAq2GTVQmHecca%2B1oO5ZQBkM6l8ubsi3j%2FyKIxqjZHarsolcJbRXejWwuKAzWS%2BgVJ0kRcJBHZIhUtZjRN9ZsAt7xraoCKb2XyyeHYfpQUWls5muFbVAP0h0xyipLawIkIwg%2F07%2FEtDMgrvvVg%2BWN9%2BThYPYZL3%2F2i8xPzQB6trAig9PhdmtCdU%2FB7bBpZNuWtKmt1J9oWF1pgKmIk%2FePdpPwYtXNmeNmHkxEbCdEKMq9EcMpYSTTXcVK2QUpmrS9UrGZVEqeT17Q5qC5HjxAX0dBvsr%2FdaKrV0JNxzj1UmIUxoQouHXMicLpWOVgVu%2F72t9xWS%2Fvo9OCqTl38cotxcxOiDndvrSt1UIB9FURYvdr3LDq1Ms4bW5%2BBqVXGKLN37YRrAWmnJbH1Ktik4h9ryraA1EcXgKerDC3Z%2BE6qA%2BgK%2FrSPhjf72%2BhY01DjY%2B2fZwD40slyrZSL63lTglim6On4iLj3r5GMwjr%2BY0QY6pgFU85KO3KjgMAD6VXKvxak6fij%2FxPK1MOKzw5%2BGOzyONWbEg8gHvQ2h45Ow9v6HkmKN%2FH%2FPv4B5RPG%2B274h4vaeDJtt7uaL3nXPJPOATfjS1Eyf76LGKNJ2nP4RCG667PONt01hKS5cQ6IGGpjOitbPcK50PTPkrxEVdHzwqMzi6BGWHM8%2Bbx9dBpp6MEGdjIqiER0AoLKyvNff200WS1fpwPmdCRYe&X-Amz-Signature=45702b845dd147ead1feaed3881e330ddd3870ceef3a5a879f910c27273937e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44MKZWM%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAPiF9wAu46%2FP2bZmhPlfpNW80VBez1Kh9m4izFLgyxAiBhjFWqwOv9IAYB6YHglHHDBRsxJOEKEvgWZW%2FtZQvWDSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuGbGZfijaEoKdmOkKtwDr7pK56DLT1LOabM8p8KXNW%2F03WNjoObzDyTsuyPvuERD0hbYJgwRJDspQnGmDs35BgOQlYtewSaddGH3kUNtFNlaswTeJNJMs2bMxaNi%2FLfmIm3AUL%2FjGB2zdDScTSsGNQcQJU5M8eI41W3x%2BRsmJy9KJTAq2GTVQmHecca%2B1oO5ZQBkM6l8ubsi3j%2FyKIxqjZHarsolcJbRXejWwuKAzWS%2BgVJ0kRcJBHZIhUtZjRN9ZsAt7xraoCKb2XyyeHYfpQUWls5muFbVAP0h0xyipLawIkIwg%2F07%2FEtDMgrvvVg%2BWN9%2BThYPYZL3%2F2i8xPzQB6trAig9PhdmtCdU%2FB7bBpZNuWtKmt1J9oWF1pgKmIk%2FePdpPwYtXNmeNmHkxEbCdEKMq9EcMpYSTTXcVK2QUpmrS9UrGZVEqeT17Q5qC5HjxAX0dBvsr%2FdaKrV0JNxzj1UmIUxoQouHXMicLpWOVgVu%2F72t9xWS%2Fvo9OCqTl38cotxcxOiDndvrSt1UIB9FURYvdr3LDq1Ms4bW5%2BBqVXGKLN37YRrAWmnJbH1Ktik4h9ryraA1EcXgKerDC3Z%2BE6qA%2BgK%2FrSPhjf72%2BhY01DjY%2B2fZwD40slyrZSL63lTglim6On4iLj3r5GMwjr%2BY0QY6pgFU85KO3KjgMAD6VXKvxak6fij%2FxPK1MOKzw5%2BGOzyONWbEg8gHvQ2h45Ow9v6HkmKN%2FH%2FPv4B5RPG%2B274h4vaeDJtt7uaL3nXPJPOATfjS1Eyf76LGKNJ2nP4RCG667PONt01hKS5cQ6IGGpjOitbPcK50PTPkrxEVdHzwqMzi6BGWHM8%2Bbx9dBpp6MEGdjIqiER0AoLKyvNff200WS1fpwPmdCRYe&X-Amz-Signature=a9922aa893c626160c2a6221cdd53d3c52d8009eaeba470e340289affe4ada3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44MKZWM%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAPiF9wAu46%2FP2bZmhPlfpNW80VBez1Kh9m4izFLgyxAiBhjFWqwOv9IAYB6YHglHHDBRsxJOEKEvgWZW%2FtZQvWDSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuGbGZfijaEoKdmOkKtwDr7pK56DLT1LOabM8p8KXNW%2F03WNjoObzDyTsuyPvuERD0hbYJgwRJDspQnGmDs35BgOQlYtewSaddGH3kUNtFNlaswTeJNJMs2bMxaNi%2FLfmIm3AUL%2FjGB2zdDScTSsGNQcQJU5M8eI41W3x%2BRsmJy9KJTAq2GTVQmHecca%2B1oO5ZQBkM6l8ubsi3j%2FyKIxqjZHarsolcJbRXejWwuKAzWS%2BgVJ0kRcJBHZIhUtZjRN9ZsAt7xraoCKb2XyyeHYfpQUWls5muFbVAP0h0xyipLawIkIwg%2F07%2FEtDMgrvvVg%2BWN9%2BThYPYZL3%2F2i8xPzQB6trAig9PhdmtCdU%2FB7bBpZNuWtKmt1J9oWF1pgKmIk%2FePdpPwYtXNmeNmHkxEbCdEKMq9EcMpYSTTXcVK2QUpmrS9UrGZVEqeT17Q5qC5HjxAX0dBvsr%2FdaKrV0JNxzj1UmIUxoQouHXMicLpWOVgVu%2F72t9xWS%2Fvo9OCqTl38cotxcxOiDndvrSt1UIB9FURYvdr3LDq1Ms4bW5%2BBqVXGKLN37YRrAWmnJbH1Ktik4h9ryraA1EcXgKerDC3Z%2BE6qA%2BgK%2FrSPhjf72%2BhY01DjY%2B2fZwD40slyrZSL63lTglim6On4iLj3r5GMwjr%2BY0QY6pgFU85KO3KjgMAD6VXKvxak6fij%2FxPK1MOKzw5%2BGOzyONWbEg8gHvQ2h45Ow9v6HkmKN%2FH%2FPv4B5RPG%2B274h4vaeDJtt7uaL3nXPJPOATfjS1Eyf76LGKNJ2nP4RCG667PONt01hKS5cQ6IGGpjOitbPcK50PTPkrxEVdHzwqMzi6BGWHM8%2Bbx9dBpp6MEGdjIqiER0AoLKyvNff200WS1fpwPmdCRYe&X-Amz-Signature=9f83764c83443ddf93574cc0b7e5a847f8374968d53f3ec6f14ffcab0e7316da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


