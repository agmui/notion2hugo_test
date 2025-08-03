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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RWNR47A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbL7iJTViCgJf6cIq%2Bo3GUP3WMrLKs2lrsTyrV5Al67AiBGreMIDCzuJHEwaLj5KpI1JpO9u9ykJerbRC0pcjjocCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMYTMLD9deWYLxf9sVKtwDX%2BJxaQeet5toz1Os8dV6fn5uNSLP79NwPPJoyCfkWpyY%2BFBFIBuKoeTECzOpQmslKrdwjgqHKbMmgsI%2FlFuql9ZZzWUTnsQpTGWVijdUm54JJFFMF2bnVktiIKxdBg1gsPJsdjHF2PTxRlHU0lvoAjktOo3f6azuavh9h8IEnz5V6rVv%2F0aXyMLgXZooSSydGjZ%2BAndxRsmb4Nj6C4UgTCHO4N%2FJWvV8cjeQpbzXmDDNvs2NoeVbzwrfKZy5%2Fqiok8RsszuMRsLojOdwjItk%2FZ858W23SFyz%2FFudCUIMHFYDWDMIGSHasSS7w59BZ8o6dgSCr58qX5issXpgLt5%2B5g6Rby91BYYPZJv9SbX0oVycwG6PDGL0S2OMGklRpm2PmVtrUzgTdDzKof9MP%2BmVNK6s%2BC5r2p2Re%2BIFpE87w2r3Rn02%2Brql107Y0P57vv4rZhiDyCC36ZdfzvfcY%2Bildf0INIUZZ2aBGj7ECiTL3UtY%2B2X90iAV2%2FBPq0G5MXZqZ3NnYEPUZMWJie%2BZCvtkH1YOz9H5Lm5pshHV7vjJYIAiEqUx5Mm4rS%2Fb5pkoj3frVkThYluxVnpSjLU%2BqjHOiU7Puii2eakUaFtwhiKPhgj9izBw9JMKz9Mm7mAwuNm%2BxAY6pgEv6wfn%2BL9hRZ9oHlvnnJjl%2FzziUZZJz0nexOWkYxOALon2nomcG8YMxoEpQPDk%2B%2FVdrM9V3ByZh9E3MRMWLXSa2NkvrQKkZkFlhZGSiBK18kD3scciUkFG9t2Z2Q0s9a1%2BETYnaWlT4Etf68MYbxylhNCfky8UYbczkbXQbi%2FnBtpPBexZAEvKHWFkEApLwJ4ChnLToUlgrAEEX7V4PrdnVmWXeofE&X-Amz-Signature=b5cef92f39f08e6c7906294748c5ed2a4b0a6a92ce33b59025699f65892ccb20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RWNR47A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbL7iJTViCgJf6cIq%2Bo3GUP3WMrLKs2lrsTyrV5Al67AiBGreMIDCzuJHEwaLj5KpI1JpO9u9ykJerbRC0pcjjocCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMYTMLD9deWYLxf9sVKtwDX%2BJxaQeet5toz1Os8dV6fn5uNSLP79NwPPJoyCfkWpyY%2BFBFIBuKoeTECzOpQmslKrdwjgqHKbMmgsI%2FlFuql9ZZzWUTnsQpTGWVijdUm54JJFFMF2bnVktiIKxdBg1gsPJsdjHF2PTxRlHU0lvoAjktOo3f6azuavh9h8IEnz5V6rVv%2F0aXyMLgXZooSSydGjZ%2BAndxRsmb4Nj6C4UgTCHO4N%2FJWvV8cjeQpbzXmDDNvs2NoeVbzwrfKZy5%2Fqiok8RsszuMRsLojOdwjItk%2FZ858W23SFyz%2FFudCUIMHFYDWDMIGSHasSS7w59BZ8o6dgSCr58qX5issXpgLt5%2B5g6Rby91BYYPZJv9SbX0oVycwG6PDGL0S2OMGklRpm2PmVtrUzgTdDzKof9MP%2BmVNK6s%2BC5r2p2Re%2BIFpE87w2r3Rn02%2Brql107Y0P57vv4rZhiDyCC36ZdfzvfcY%2Bildf0INIUZZ2aBGj7ECiTL3UtY%2B2X90iAV2%2FBPq0G5MXZqZ3NnYEPUZMWJie%2BZCvtkH1YOz9H5Lm5pshHV7vjJYIAiEqUx5Mm4rS%2Fb5pkoj3frVkThYluxVnpSjLU%2BqjHOiU7Puii2eakUaFtwhiKPhgj9izBw9JMKz9Mm7mAwuNm%2BxAY6pgEv6wfn%2BL9hRZ9oHlvnnJjl%2FzziUZZJz0nexOWkYxOALon2nomcG8YMxoEpQPDk%2B%2FVdrM9V3ByZh9E3MRMWLXSa2NkvrQKkZkFlhZGSiBK18kD3scciUkFG9t2Z2Q0s9a1%2BETYnaWlT4Etf68MYbxylhNCfky8UYbczkbXQbi%2FnBtpPBexZAEvKHWFkEApLwJ4ChnLToUlgrAEEX7V4PrdnVmWXeofE&X-Amz-Signature=8ea2729cc42dc613ebe231138d5f6350ac3222b08bd6cfcf2b70538cc877a262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RWNR47A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbL7iJTViCgJf6cIq%2Bo3GUP3WMrLKs2lrsTyrV5Al67AiBGreMIDCzuJHEwaLj5KpI1JpO9u9ykJerbRC0pcjjocCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMYTMLD9deWYLxf9sVKtwDX%2BJxaQeet5toz1Os8dV6fn5uNSLP79NwPPJoyCfkWpyY%2BFBFIBuKoeTECzOpQmslKrdwjgqHKbMmgsI%2FlFuql9ZZzWUTnsQpTGWVijdUm54JJFFMF2bnVktiIKxdBg1gsPJsdjHF2PTxRlHU0lvoAjktOo3f6azuavh9h8IEnz5V6rVv%2F0aXyMLgXZooSSydGjZ%2BAndxRsmb4Nj6C4UgTCHO4N%2FJWvV8cjeQpbzXmDDNvs2NoeVbzwrfKZy5%2Fqiok8RsszuMRsLojOdwjItk%2FZ858W23SFyz%2FFudCUIMHFYDWDMIGSHasSS7w59BZ8o6dgSCr58qX5issXpgLt5%2B5g6Rby91BYYPZJv9SbX0oVycwG6PDGL0S2OMGklRpm2PmVtrUzgTdDzKof9MP%2BmVNK6s%2BC5r2p2Re%2BIFpE87w2r3Rn02%2Brql107Y0P57vv4rZhiDyCC36ZdfzvfcY%2Bildf0INIUZZ2aBGj7ECiTL3UtY%2B2X90iAV2%2FBPq0G5MXZqZ3NnYEPUZMWJie%2BZCvtkH1YOz9H5Lm5pshHV7vjJYIAiEqUx5Mm4rS%2Fb5pkoj3frVkThYluxVnpSjLU%2BqjHOiU7Puii2eakUaFtwhiKPhgj9izBw9JMKz9Mm7mAwuNm%2BxAY6pgEv6wfn%2BL9hRZ9oHlvnnJjl%2FzziUZZJz0nexOWkYxOALon2nomcG8YMxoEpQPDk%2B%2FVdrM9V3ByZh9E3MRMWLXSa2NkvrQKkZkFlhZGSiBK18kD3scciUkFG9t2Z2Q0s9a1%2BETYnaWlT4Etf68MYbxylhNCfky8UYbczkbXQbi%2FnBtpPBexZAEvKHWFkEApLwJ4ChnLToUlgrAEEX7V4PrdnVmWXeofE&X-Amz-Signature=9d0ffdd337438fc3e7a90745fcbcfb5350179c770a4eebd6a37c83915c90a3f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RWNR47A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbL7iJTViCgJf6cIq%2Bo3GUP3WMrLKs2lrsTyrV5Al67AiBGreMIDCzuJHEwaLj5KpI1JpO9u9ykJerbRC0pcjjocCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMYTMLD9deWYLxf9sVKtwDX%2BJxaQeet5toz1Os8dV6fn5uNSLP79NwPPJoyCfkWpyY%2BFBFIBuKoeTECzOpQmslKrdwjgqHKbMmgsI%2FlFuql9ZZzWUTnsQpTGWVijdUm54JJFFMF2bnVktiIKxdBg1gsPJsdjHF2PTxRlHU0lvoAjktOo3f6azuavh9h8IEnz5V6rVv%2F0aXyMLgXZooSSydGjZ%2BAndxRsmb4Nj6C4UgTCHO4N%2FJWvV8cjeQpbzXmDDNvs2NoeVbzwrfKZy5%2Fqiok8RsszuMRsLojOdwjItk%2FZ858W23SFyz%2FFudCUIMHFYDWDMIGSHasSS7w59BZ8o6dgSCr58qX5issXpgLt5%2B5g6Rby91BYYPZJv9SbX0oVycwG6PDGL0S2OMGklRpm2PmVtrUzgTdDzKof9MP%2BmVNK6s%2BC5r2p2Re%2BIFpE87w2r3Rn02%2Brql107Y0P57vv4rZhiDyCC36ZdfzvfcY%2Bildf0INIUZZ2aBGj7ECiTL3UtY%2B2X90iAV2%2FBPq0G5MXZqZ3NnYEPUZMWJie%2BZCvtkH1YOz9H5Lm5pshHV7vjJYIAiEqUx5Mm4rS%2Fb5pkoj3frVkThYluxVnpSjLU%2BqjHOiU7Puii2eakUaFtwhiKPhgj9izBw9JMKz9Mm7mAwuNm%2BxAY6pgEv6wfn%2BL9hRZ9oHlvnnJjl%2FzziUZZJz0nexOWkYxOALon2nomcG8YMxoEpQPDk%2B%2FVdrM9V3ByZh9E3MRMWLXSa2NkvrQKkZkFlhZGSiBK18kD3scciUkFG9t2Z2Q0s9a1%2BETYnaWlT4Etf68MYbxylhNCfky8UYbczkbXQbi%2FnBtpPBexZAEvKHWFkEApLwJ4ChnLToUlgrAEEX7V4PrdnVmWXeofE&X-Amz-Signature=4b2bd1b5fd0a0a16ed31cfef34ba3e352f9d8cfb791b6c3617955e5e5df5db50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RWNR47A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbL7iJTViCgJf6cIq%2Bo3GUP3WMrLKs2lrsTyrV5Al67AiBGreMIDCzuJHEwaLj5KpI1JpO9u9ykJerbRC0pcjjocCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMYTMLD9deWYLxf9sVKtwDX%2BJxaQeet5toz1Os8dV6fn5uNSLP79NwPPJoyCfkWpyY%2BFBFIBuKoeTECzOpQmslKrdwjgqHKbMmgsI%2FlFuql9ZZzWUTnsQpTGWVijdUm54JJFFMF2bnVktiIKxdBg1gsPJsdjHF2PTxRlHU0lvoAjktOo3f6azuavh9h8IEnz5V6rVv%2F0aXyMLgXZooSSydGjZ%2BAndxRsmb4Nj6C4UgTCHO4N%2FJWvV8cjeQpbzXmDDNvs2NoeVbzwrfKZy5%2Fqiok8RsszuMRsLojOdwjItk%2FZ858W23SFyz%2FFudCUIMHFYDWDMIGSHasSS7w59BZ8o6dgSCr58qX5issXpgLt5%2B5g6Rby91BYYPZJv9SbX0oVycwG6PDGL0S2OMGklRpm2PmVtrUzgTdDzKof9MP%2BmVNK6s%2BC5r2p2Re%2BIFpE87w2r3Rn02%2Brql107Y0P57vv4rZhiDyCC36ZdfzvfcY%2Bildf0INIUZZ2aBGj7ECiTL3UtY%2B2X90iAV2%2FBPq0G5MXZqZ3NnYEPUZMWJie%2BZCvtkH1YOz9H5Lm5pshHV7vjJYIAiEqUx5Mm4rS%2Fb5pkoj3frVkThYluxVnpSjLU%2BqjHOiU7Puii2eakUaFtwhiKPhgj9izBw9JMKz9Mm7mAwuNm%2BxAY6pgEv6wfn%2BL9hRZ9oHlvnnJjl%2FzziUZZJz0nexOWkYxOALon2nomcG8YMxoEpQPDk%2B%2FVdrM9V3ByZh9E3MRMWLXSa2NkvrQKkZkFlhZGSiBK18kD3scciUkFG9t2Z2Q0s9a1%2BETYnaWlT4Etf68MYbxylhNCfky8UYbczkbXQbi%2FnBtpPBexZAEvKHWFkEApLwJ4ChnLToUlgrAEEX7V4PrdnVmWXeofE&X-Amz-Signature=7db09d21c484e3718e42e0ea8434a720f6cfdc0cc95f42bbeb0751f8185ed7ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RWNR47A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbL7iJTViCgJf6cIq%2Bo3GUP3WMrLKs2lrsTyrV5Al67AiBGreMIDCzuJHEwaLj5KpI1JpO9u9ykJerbRC0pcjjocCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMYTMLD9deWYLxf9sVKtwDX%2BJxaQeet5toz1Os8dV6fn5uNSLP79NwPPJoyCfkWpyY%2BFBFIBuKoeTECzOpQmslKrdwjgqHKbMmgsI%2FlFuql9ZZzWUTnsQpTGWVijdUm54JJFFMF2bnVktiIKxdBg1gsPJsdjHF2PTxRlHU0lvoAjktOo3f6azuavh9h8IEnz5V6rVv%2F0aXyMLgXZooSSydGjZ%2BAndxRsmb4Nj6C4UgTCHO4N%2FJWvV8cjeQpbzXmDDNvs2NoeVbzwrfKZy5%2Fqiok8RsszuMRsLojOdwjItk%2FZ858W23SFyz%2FFudCUIMHFYDWDMIGSHasSS7w59BZ8o6dgSCr58qX5issXpgLt5%2B5g6Rby91BYYPZJv9SbX0oVycwG6PDGL0S2OMGklRpm2PmVtrUzgTdDzKof9MP%2BmVNK6s%2BC5r2p2Re%2BIFpE87w2r3Rn02%2Brql107Y0P57vv4rZhiDyCC36ZdfzvfcY%2Bildf0INIUZZ2aBGj7ECiTL3UtY%2B2X90iAV2%2FBPq0G5MXZqZ3NnYEPUZMWJie%2BZCvtkH1YOz9H5Lm5pshHV7vjJYIAiEqUx5Mm4rS%2Fb5pkoj3frVkThYluxVnpSjLU%2BqjHOiU7Puii2eakUaFtwhiKPhgj9izBw9JMKz9Mm7mAwuNm%2BxAY6pgEv6wfn%2BL9hRZ9oHlvnnJjl%2FzziUZZJz0nexOWkYxOALon2nomcG8YMxoEpQPDk%2B%2FVdrM9V3ByZh9E3MRMWLXSa2NkvrQKkZkFlhZGSiBK18kD3scciUkFG9t2Z2Q0s9a1%2BETYnaWlT4Etf68MYbxylhNCfky8UYbczkbXQbi%2FnBtpPBexZAEvKHWFkEApLwJ4ChnLToUlgrAEEX7V4PrdnVmWXeofE&X-Amz-Signature=18aa09720842f78a628441eae80af7e1018e59c88fb5bfd3864824e7349f8a78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RWNR47A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbL7iJTViCgJf6cIq%2Bo3GUP3WMrLKs2lrsTyrV5Al67AiBGreMIDCzuJHEwaLj5KpI1JpO9u9ykJerbRC0pcjjocCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMYTMLD9deWYLxf9sVKtwDX%2BJxaQeet5toz1Os8dV6fn5uNSLP79NwPPJoyCfkWpyY%2BFBFIBuKoeTECzOpQmslKrdwjgqHKbMmgsI%2FlFuql9ZZzWUTnsQpTGWVijdUm54JJFFMF2bnVktiIKxdBg1gsPJsdjHF2PTxRlHU0lvoAjktOo3f6azuavh9h8IEnz5V6rVv%2F0aXyMLgXZooSSydGjZ%2BAndxRsmb4Nj6C4UgTCHO4N%2FJWvV8cjeQpbzXmDDNvs2NoeVbzwrfKZy5%2Fqiok8RsszuMRsLojOdwjItk%2FZ858W23SFyz%2FFudCUIMHFYDWDMIGSHasSS7w59BZ8o6dgSCr58qX5issXpgLt5%2B5g6Rby91BYYPZJv9SbX0oVycwG6PDGL0S2OMGklRpm2PmVtrUzgTdDzKof9MP%2BmVNK6s%2BC5r2p2Re%2BIFpE87w2r3Rn02%2Brql107Y0P57vv4rZhiDyCC36ZdfzvfcY%2Bildf0INIUZZ2aBGj7ECiTL3UtY%2B2X90iAV2%2FBPq0G5MXZqZ3NnYEPUZMWJie%2BZCvtkH1YOz9H5Lm5pshHV7vjJYIAiEqUx5Mm4rS%2Fb5pkoj3frVkThYluxVnpSjLU%2BqjHOiU7Puii2eakUaFtwhiKPhgj9izBw9JMKz9Mm7mAwuNm%2BxAY6pgEv6wfn%2BL9hRZ9oHlvnnJjl%2FzziUZZJz0nexOWkYxOALon2nomcG8YMxoEpQPDk%2B%2FVdrM9V3ByZh9E3MRMWLXSa2NkvrQKkZkFlhZGSiBK18kD3scciUkFG9t2Z2Q0s9a1%2BETYnaWlT4Etf68MYbxylhNCfky8UYbczkbXQbi%2FnBtpPBexZAEvKHWFkEApLwJ4ChnLToUlgrAEEX7V4PrdnVmWXeofE&X-Amz-Signature=529751f8764b8188a8dffd811192819a5625455d3acf3b40877b0c593535bd65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RWNR47A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbL7iJTViCgJf6cIq%2Bo3GUP3WMrLKs2lrsTyrV5Al67AiBGreMIDCzuJHEwaLj5KpI1JpO9u9ykJerbRC0pcjjocCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMYTMLD9deWYLxf9sVKtwDX%2BJxaQeet5toz1Os8dV6fn5uNSLP79NwPPJoyCfkWpyY%2BFBFIBuKoeTECzOpQmslKrdwjgqHKbMmgsI%2FlFuql9ZZzWUTnsQpTGWVijdUm54JJFFMF2bnVktiIKxdBg1gsPJsdjHF2PTxRlHU0lvoAjktOo3f6azuavh9h8IEnz5V6rVv%2F0aXyMLgXZooSSydGjZ%2BAndxRsmb4Nj6C4UgTCHO4N%2FJWvV8cjeQpbzXmDDNvs2NoeVbzwrfKZy5%2Fqiok8RsszuMRsLojOdwjItk%2FZ858W23SFyz%2FFudCUIMHFYDWDMIGSHasSS7w59BZ8o6dgSCr58qX5issXpgLt5%2B5g6Rby91BYYPZJv9SbX0oVycwG6PDGL0S2OMGklRpm2PmVtrUzgTdDzKof9MP%2BmVNK6s%2BC5r2p2Re%2BIFpE87w2r3Rn02%2Brql107Y0P57vv4rZhiDyCC36ZdfzvfcY%2Bildf0INIUZZ2aBGj7ECiTL3UtY%2B2X90iAV2%2FBPq0G5MXZqZ3NnYEPUZMWJie%2BZCvtkH1YOz9H5Lm5pshHV7vjJYIAiEqUx5Mm4rS%2Fb5pkoj3frVkThYluxVnpSjLU%2BqjHOiU7Puii2eakUaFtwhiKPhgj9izBw9JMKz9Mm7mAwuNm%2BxAY6pgEv6wfn%2BL9hRZ9oHlvnnJjl%2FzziUZZJz0nexOWkYxOALon2nomcG8YMxoEpQPDk%2B%2FVdrM9V3ByZh9E3MRMWLXSa2NkvrQKkZkFlhZGSiBK18kD3scciUkFG9t2Z2Q0s9a1%2BETYnaWlT4Etf68MYbxylhNCfky8UYbczkbXQbi%2FnBtpPBexZAEvKHWFkEApLwJ4ChnLToUlgrAEEX7V4PrdnVmWXeofE&X-Amz-Signature=afc2dffdd6ad299eef17a4d4f78a8d628d0778657b58d869c1fa707705412236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RWNR47A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbL7iJTViCgJf6cIq%2Bo3GUP3WMrLKs2lrsTyrV5Al67AiBGreMIDCzuJHEwaLj5KpI1JpO9u9ykJerbRC0pcjjocCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMYTMLD9deWYLxf9sVKtwDX%2BJxaQeet5toz1Os8dV6fn5uNSLP79NwPPJoyCfkWpyY%2BFBFIBuKoeTECzOpQmslKrdwjgqHKbMmgsI%2FlFuql9ZZzWUTnsQpTGWVijdUm54JJFFMF2bnVktiIKxdBg1gsPJsdjHF2PTxRlHU0lvoAjktOo3f6azuavh9h8IEnz5V6rVv%2F0aXyMLgXZooSSydGjZ%2BAndxRsmb4Nj6C4UgTCHO4N%2FJWvV8cjeQpbzXmDDNvs2NoeVbzwrfKZy5%2Fqiok8RsszuMRsLojOdwjItk%2FZ858W23SFyz%2FFudCUIMHFYDWDMIGSHasSS7w59BZ8o6dgSCr58qX5issXpgLt5%2B5g6Rby91BYYPZJv9SbX0oVycwG6PDGL0S2OMGklRpm2PmVtrUzgTdDzKof9MP%2BmVNK6s%2BC5r2p2Re%2BIFpE87w2r3Rn02%2Brql107Y0P57vv4rZhiDyCC36ZdfzvfcY%2Bildf0INIUZZ2aBGj7ECiTL3UtY%2B2X90iAV2%2FBPq0G5MXZqZ3NnYEPUZMWJie%2BZCvtkH1YOz9H5Lm5pshHV7vjJYIAiEqUx5Mm4rS%2Fb5pkoj3frVkThYluxVnpSjLU%2BqjHOiU7Puii2eakUaFtwhiKPhgj9izBw9JMKz9Mm7mAwuNm%2BxAY6pgEv6wfn%2BL9hRZ9oHlvnnJjl%2FzziUZZJz0nexOWkYxOALon2nomcG8YMxoEpQPDk%2B%2FVdrM9V3ByZh9E3MRMWLXSa2NkvrQKkZkFlhZGSiBK18kD3scciUkFG9t2Z2Q0s9a1%2BETYnaWlT4Etf68MYbxylhNCfky8UYbczkbXQbi%2FnBtpPBexZAEvKHWFkEApLwJ4ChnLToUlgrAEEX7V4PrdnVmWXeofE&X-Amz-Signature=abd8ccc7ae82a31aee99c46677743cffae0af4a19408911c955cd2fe9e43edb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RWNR47A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbL7iJTViCgJf6cIq%2Bo3GUP3WMrLKs2lrsTyrV5Al67AiBGreMIDCzuJHEwaLj5KpI1JpO9u9ykJerbRC0pcjjocCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMYTMLD9deWYLxf9sVKtwDX%2BJxaQeet5toz1Os8dV6fn5uNSLP79NwPPJoyCfkWpyY%2BFBFIBuKoeTECzOpQmslKrdwjgqHKbMmgsI%2FlFuql9ZZzWUTnsQpTGWVijdUm54JJFFMF2bnVktiIKxdBg1gsPJsdjHF2PTxRlHU0lvoAjktOo3f6azuavh9h8IEnz5V6rVv%2F0aXyMLgXZooSSydGjZ%2BAndxRsmb4Nj6C4UgTCHO4N%2FJWvV8cjeQpbzXmDDNvs2NoeVbzwrfKZy5%2Fqiok8RsszuMRsLojOdwjItk%2FZ858W23SFyz%2FFudCUIMHFYDWDMIGSHasSS7w59BZ8o6dgSCr58qX5issXpgLt5%2B5g6Rby91BYYPZJv9SbX0oVycwG6PDGL0S2OMGklRpm2PmVtrUzgTdDzKof9MP%2BmVNK6s%2BC5r2p2Re%2BIFpE87w2r3Rn02%2Brql107Y0P57vv4rZhiDyCC36ZdfzvfcY%2Bildf0INIUZZ2aBGj7ECiTL3UtY%2B2X90iAV2%2FBPq0G5MXZqZ3NnYEPUZMWJie%2BZCvtkH1YOz9H5Lm5pshHV7vjJYIAiEqUx5Mm4rS%2Fb5pkoj3frVkThYluxVnpSjLU%2BqjHOiU7Puii2eakUaFtwhiKPhgj9izBw9JMKz9Mm7mAwuNm%2BxAY6pgEv6wfn%2BL9hRZ9oHlvnnJjl%2FzziUZZJz0nexOWkYxOALon2nomcG8YMxoEpQPDk%2B%2FVdrM9V3ByZh9E3MRMWLXSa2NkvrQKkZkFlhZGSiBK18kD3scciUkFG9t2Z2Q0s9a1%2BETYnaWlT4Etf68MYbxylhNCfky8UYbczkbXQbi%2FnBtpPBexZAEvKHWFkEApLwJ4ChnLToUlgrAEEX7V4PrdnVmWXeofE&X-Amz-Signature=63065b11e2d8a254f9c75ef010cc60f5eaf23b0fcfbdd429d2921c531d6583e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YYVJJQX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T221004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUgsRX3p1K70JfPpixVwt3rztOQo0zCRx8koUnRJd%2FCAiAXY9alBC4Xo4JMAZgtGZ%2FaMX9ycFPADg7DobPT9Izl5yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM7fK84V816gWwOuHJKtwDzIro1KwI9Vmi94pQ2J7ahyGYY7UDlcp8mHQrMv%2BcvQ8BAdDVquie2CY7YbyRBCPzb9yoOa7evdIV7Q2hlpH6mhkC0kzSprg0cPaLR5cHBA5WVIn4pT7z29%2BOx9CzLogUwffL6KLsXl%2FvaUPWWVldzwWZ6n4WohMQA0qz9696Mvq1RturzpzsC%2FJ83E0UyvrxwUfGl2RCo7Y5vApMX%2F%2BduWC18ZVUmR3gm%2Bm29AzhUSnNv4T17U9D0lrmqLMic1jsC3TqawP1EAo3EWySwbZ723AgkAgJDiodP%2Fm3CG%2BtmnVPv1iL1QRPnfylhU%2BOKTyP92pbGYUY7A%2FwvngU4YALTtq300O%2BBFVyuPRDNdxm5lwGIoYysMhGTJzkZ8Bwu0yiF8j64FQbx4EwUZraKbqN1%2F3Hcnw959DXudbFEs%2BS%2BlTDeW2jDfw9LD1WlGVrHmZyRgWGqx4gC3419KUBCLw4OGShKXlJRH%2FO9%2Bbqp%2BTFsZ19YuWS0I1JptWghrAXrT22N5hLa2oqDIHiWcgviYXPFzhFdgUgmGPbszEYXteeXCD5dJg2qBFTOVwzyH5bDyMEXEMOqIHvBxr%2BmEu180LG1A1srXJUXIjKycFD3R%2FYTNDpF4gzufxfgurL7AQw29m%2BxAY6pgEb0D1tozl6W0DV%2FUH%2BTp3WddlgG4VQknvkcZsUYLAllNHNzJ1UHnn78llsx4r7rIaJP0bhy44L1vxD4fRpGMkd5pXGLwZ0h5IthJJiyKHngDKD%2FZ8ZL6yXnh3xfAd3D8lYt5MVKGhaVujf9K%2Bwy%2Bpzc2f9v1WLbHX7wbtjbyBZ7KRzEoxLCavQ33LhSZi5Y9LmdyYQrT%2Fg7iqTyGvFcznENfZ8Py2o&X-Amz-Signature=14f40f71182cf8688822fba611bcbe4a8c0100589bcd4e23e75a58d8c14bfab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STIEMHAD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T221006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElY%2F9e3ZlVkv4lqTXyVe0MUIsS2%2B3jm8HJbLYTs1I6vAiA41%2FeGYeDqjgT6OTjQ6r9N%2BekMd8DvjllW0Ul0TOnZvyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMkQnXg2Q4o069Sa%2BsKtwD%2FEyFTrL%2Fe8SJ8HaVBPie%2B3BP49LPAzN097%2Bvo4K6uzRzefD%2Bd%2FQnMaez95APEmQMz4i7EYbm9vKkbgK%2BrBLPb%2BjOemIjer2qFUHsRvCkNpZkzXI5dGu2woRYCtGQUjqTGXH9VnpRmOMtHHeMRaO1NADrgioW9tZeyQZ7dZ8MR3qavrLWSZ%2F%2BHLWX%2B0hyruXjgAO1KvZpjLdloQwElEShqk2XzMU53wttA1eoxe%2FMBkhGsZpXJ6sxNk6gWSHfMnpXZwZpY4axZF3svoePg3QAOGEwogjZ2g1U1Y26F%2BhUjr1jSOMRIDQkZUFBSBsah65Ft87c5cQU625R%2FJUf1pja8ClmDXkg4BBIxc5T41rxE9q7n0WOTdlYaqMPI%2Fg5Dhm56Uc6MpMkH2MmIbpcov0qdNMTUxzJ%2BI%2BQ6QIw3iY%2FnUr7cEJtEq5oC%2FoIipufRO7QvSDz9b6oA2rJGTuk38fc0vCEp2knK3sHK59YQ91gfeWLdlWVZdM3%2Fn71etFK%2BR0b2G6J6m%2FKmIhL7IkP2gca130H9YX950Akq4wyG8%2FhmFYlbYryBZrAM0fAU4Mxky5g06agTxFyoiriF4dNBJ%2BLqs0RltSPRf%2F7iO%2BkR5Qm98cu9VtOr96jIxSfcKgwuNm%2BxAY6pgEgD%2FhwDg%2FVZDAzZge44JYvqI568OjO6Xdo0A%2BtOe3lQ77SbAvBoncl3zPnhncvjGbF9DnWPhYYS4ouci7tFCLSC8s9fm7FZhQE5SXD5lH3na3YdRVzc2h8PdsfDdnJyQiLuULxgsIpXQpQ%2Fle4JZyWOoo8u5Nmzdvv5pf%2BQS6w6gJkH2gbmgLgnBWAUCMnSY925hmza27ZV1XkHcK1MNxyO59hMFYV&X-Amz-Signature=52cdfb85067446e63e832f5971ef6f43ee041ffc7421cf4cfca423308c9b7f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVCYSONF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T221009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPUhxkO88ku1gylGlb43Ty9B5xpDv8LwI6Pzhwfv7AmQIgY3PDvKmeVTMwB7VznX5PgmvAaYSSph%2BY8o6pttfdJ6Yq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFwh6VwJQCjkDVk9CSrcA7yM3kbcs%2FMxLXHF2MwWPl0y91Pi1tol5dMmkr35JfPQUxXAESZoNbmJrnxa0oJWs4MSCt7Cad9xI2237BbnVcEcK4GAuK0OvwdhoQ1frqppElj3ZGQpRXInF1cC%2B8yUz8wOUGVT%2Fkbg2xweXMD6L4CX4QkU3ullQ0Cx5E9KVZSYcAbgWcnX7vxviidOojOy%2BjW%2BHNrmXBFjJuwMueDGaI3oLSAoVHii5jDW%2BpOnWu7H%2FUk3pIrnAYVByGV143FReLn2Hded4a1Jjt3LmSj4ezbDKV0p8TWDwxaD2mNGwQ1IpD29BVYxZsigvolarw%2FYtZPE%2BAh4KYqTv9SUw%2B7sI0I%2FU8SBWBRnBjoK1aK486wCjfsqGpoBIZWMxA28J3Dkb7WfYbKCkFmKdtfBcSgvg9qn0UBtmAzpgEUZmBHzVyJsNNOuRSs1iYs23bESVKwoah1%2BxRkx6qQNaVMzrBTQBmr5meAw039G%2FJcqvnb2TNG4uuKfrg6gflUAMZXyNPKuFlp6Q%2Fahbexem38kQ0WaHSvzTyol9ikLfEneyVmiZLb9mbRECzl9HwDeoq1Qu%2B6YlFqL1WvRnJ%2BbGGy27CrwMpDmX9I8r2qa%2Ba2inTcV1wM1aHuU8UqGQYWjQITUMOvZvsQGOqUBvTvQPpiyqghBEtoH4bShjujeS09WOKc1ZEyxCtSExJd9DwRRg%2B%2FvHvswb%2FO8ZbTPrfnOi4uXpc0Z3UMTJuc8Z08hxXbiecbEsUVu8RrAKC%2F%2BTOPDHp9vYQ9ZiLPWOJ%2BzrFYUY6aUHfKE%2F%2FdOdwvyRpd7ZkWr8eP5wUcAV1ESp90L23KlHZbsot%2BE9mkaDrpwPsT0oSuxz6TP%2BTOOtBkLXTY%2FmTc1&X-Amz-Signature=bc6d3809b7ddf0665c5f336e2a76bb0bc7049309d40e8a93ea63710048826411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RWNR47A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbL7iJTViCgJf6cIq%2Bo3GUP3WMrLKs2lrsTyrV5Al67AiBGreMIDCzuJHEwaLj5KpI1JpO9u9ykJerbRC0pcjjocCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMYTMLD9deWYLxf9sVKtwDX%2BJxaQeet5toz1Os8dV6fn5uNSLP79NwPPJoyCfkWpyY%2BFBFIBuKoeTECzOpQmslKrdwjgqHKbMmgsI%2FlFuql9ZZzWUTnsQpTGWVijdUm54JJFFMF2bnVktiIKxdBg1gsPJsdjHF2PTxRlHU0lvoAjktOo3f6azuavh9h8IEnz5V6rVv%2F0aXyMLgXZooSSydGjZ%2BAndxRsmb4Nj6C4UgTCHO4N%2FJWvV8cjeQpbzXmDDNvs2NoeVbzwrfKZy5%2Fqiok8RsszuMRsLojOdwjItk%2FZ858W23SFyz%2FFudCUIMHFYDWDMIGSHasSS7w59BZ8o6dgSCr58qX5issXpgLt5%2B5g6Rby91BYYPZJv9SbX0oVycwG6PDGL0S2OMGklRpm2PmVtrUzgTdDzKof9MP%2BmVNK6s%2BC5r2p2Re%2BIFpE87w2r3Rn02%2Brql107Y0P57vv4rZhiDyCC36ZdfzvfcY%2Bildf0INIUZZ2aBGj7ECiTL3UtY%2B2X90iAV2%2FBPq0G5MXZqZ3NnYEPUZMWJie%2BZCvtkH1YOz9H5Lm5pshHV7vjJYIAiEqUx5Mm4rS%2Fb5pkoj3frVkThYluxVnpSjLU%2BqjHOiU7Puii2eakUaFtwhiKPhgj9izBw9JMKz9Mm7mAwuNm%2BxAY6pgEv6wfn%2BL9hRZ9oHlvnnJjl%2FzziUZZJz0nexOWkYxOALon2nomcG8YMxoEpQPDk%2B%2FVdrM9V3ByZh9E3MRMWLXSa2NkvrQKkZkFlhZGSiBK18kD3scciUkFG9t2Z2Q0s9a1%2BETYnaWlT4Etf68MYbxylhNCfky8UYbczkbXQbi%2FnBtpPBexZAEvKHWFkEApLwJ4ChnLToUlgrAEEX7V4PrdnVmWXeofE&X-Amz-Signature=6cfdc40b409aba06317bba07e64dddd7b3d9e7b65e0d1d53126e4904c647b1c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHHA4ESU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T221011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3ET0TC7Exx6lBQhxcugmOgdU4TaSQkIEyMNZOAkzCZAiEAuZCPJOsBYYZTMJK2XO7iSeOXzEcpGdHdagI%2F94wREh8q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBvWF1Tc1dXiOU0SeSrcAyEAY4fAhsYAH5fspVB%2BQ1u6%2BFt7%2B2UKu1wBMMeGH5zoDjA%2FE2%2FvZJxzzhsJ9ixn%2Blz%2FA6OefW4Zsctp0jND%2BSPLSDF3lPSFnPTonrH48p75SnANMwAGSugCLAF%2Bvmup8KfrkbLv0%2B4z3m%2FZbhW9BDqj7R88Ia3ENt4QJ4vVQMyZ4mvW1zcnlIhUITNtzjm4zZLqf7stuzhsM08WOJqIZb%2FGOA5ZKsb7hXy9IQenDowtpCt3fLYlvcbag07J9aiVErgiRxVHXg72nt5vXiFZW%2FgfANOXZPzRzvUvY%2BUUIqaLKiI7O3KL3dXUiJDj1zmv55fV5SE7tH31hlpivxLMfS73vcafJqdkuWXwyI7athmQlvy0KCmOlSvi4MoR8I0zlgRYsIxdo8FKe9cnHqUkBUNLaIt7elCoAlhf1ZfqzjsNolj7eIOYw6alRm%2B7BmZSwuGsCEU1Tu1iEeknB%2Bg1l8uXNMI%2FU5ir3PQ9jKEBS7cF%2FJJZEYa05C9NQgWSAcj6%2BaPYF5iOor9cEPpXlhlGWwG8MsmoQONwedKhLvzR9f1ibpjO1lFu3ydv1jnhVFS6ymm%2B1uRJ0s%2BunNPWazo8EVxMYfPNst2dkIGa5zUAVEBw3P%2BM2w3zFlx8X1m8MMDZvsQGOqUBqIJ%2ByYfeh8%2B05ptLBtXdc5%2FIF9JX%2BQ%2B8gcLA7RZZIM47gYL8w3n0H%2Fj1jhf%2FstBKxU0vYPRE94BaDPL6aAO2261dk%2F%2B6v6Cw9B1kanXxnWVWGtbhJxuvmSr4sR1jHpmjyUQh5O5ec%2Br8yXVWKnv6cAPKqJ1qLYH29TgwT11YgjP2MOUAOHPjIi0VlaZ2rnCYVt2lDol3sCoXSnU%2FRgqdKaZ15fc%2F&X-Amz-Signature=e3a3f0578a621d4bf0c352c8281efa1281b54e01f21b6c7cbdc02d4f0cd102d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RWNR47A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbL7iJTViCgJf6cIq%2Bo3GUP3WMrLKs2lrsTyrV5Al67AiBGreMIDCzuJHEwaLj5KpI1JpO9u9ykJerbRC0pcjjocCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMYTMLD9deWYLxf9sVKtwDX%2BJxaQeet5toz1Os8dV6fn5uNSLP79NwPPJoyCfkWpyY%2BFBFIBuKoeTECzOpQmslKrdwjgqHKbMmgsI%2FlFuql9ZZzWUTnsQpTGWVijdUm54JJFFMF2bnVktiIKxdBg1gsPJsdjHF2PTxRlHU0lvoAjktOo3f6azuavh9h8IEnz5V6rVv%2F0aXyMLgXZooSSydGjZ%2BAndxRsmb4Nj6C4UgTCHO4N%2FJWvV8cjeQpbzXmDDNvs2NoeVbzwrfKZy5%2Fqiok8RsszuMRsLojOdwjItk%2FZ858W23SFyz%2FFudCUIMHFYDWDMIGSHasSS7w59BZ8o6dgSCr58qX5issXpgLt5%2B5g6Rby91BYYPZJv9SbX0oVycwG6PDGL0S2OMGklRpm2PmVtrUzgTdDzKof9MP%2BmVNK6s%2BC5r2p2Re%2BIFpE87w2r3Rn02%2Brql107Y0P57vv4rZhiDyCC36ZdfzvfcY%2Bildf0INIUZZ2aBGj7ECiTL3UtY%2B2X90iAV2%2FBPq0G5MXZqZ3NnYEPUZMWJie%2BZCvtkH1YOz9H5Lm5pshHV7vjJYIAiEqUx5Mm4rS%2Fb5pkoj3frVkThYluxVnpSjLU%2BqjHOiU7Puii2eakUaFtwhiKPhgj9izBw9JMKz9Mm7mAwuNm%2BxAY6pgEv6wfn%2BL9hRZ9oHlvnnJjl%2FzziUZZJz0nexOWkYxOALon2nomcG8YMxoEpQPDk%2B%2FVdrM9V3ByZh9E3MRMWLXSa2NkvrQKkZkFlhZGSiBK18kD3scciUkFG9t2Z2Q0s9a1%2BETYnaWlT4Etf68MYbxylhNCfky8UYbczkbXQbi%2FnBtpPBexZAEvKHWFkEApLwJ4ChnLToUlgrAEEX7V4PrdnVmWXeofE&X-Amz-Signature=f1f0a220f5a62c68144bfddc04c1f1fbdeaa72db1a5fdcc5146097b3e7e1826d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VALYMISS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T221019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdnbU7qQu9%2FIMHpCCdxfYCPic4n%2FvHDcOgKdXO5dNicAIgA%2Fl0xy9g35lsVUfM%2Fbh80aV3sA5nyCCLLgUpGZJhARkq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGblpkMoV34ijjOojCrcA1P1TSyZsvNEmPV1HoTf3qku6H8Gmb%2Fy%2BZVqwGI6b1ZPf45slYL6HXINPfBHEKoe361IbwR%2F%2FsJlRpviG5VAHtIE4lL9WHAbik69186X2uZBPoPl30L2BIYjw%2Bi2JS8JwTCU0dYUVh9GVOrOr4VNfRNnPxFF3wA%2FmFwWqPvEnY5iEFPdxIP8za%2BviDbvMBb963Ms0dM6WFo3UrAPwijUmK7daZ158qWzTE3OfHnwe3YGV3tnmNbyT%2BGP29TXKaI7TEFLK3uk%2FrJHaM1gCRHza4FnAthjtasIBMBIXqm%2FpMjGO8PevhuybY8B66voWCUVj9RUzt6d1yDZU7ztm52qzVHLW3s9%2BjEzrplJyWNJt4vUrGqs5t6vYgpBAKrmUMYLQ%2FDw3TmuXvF1DSXDl69Q%2Bv1GxMAyH72fefI4kmqBJl1I3JLBJLl3v%2BPLsMk4PZZ7KiVDJ0DlD0MPD8NVHowy1fvH8xXs5piaTvPLdpEJeEH4olVQHo2l%2BHnOJhf1h%2F7CiijTia%2BagwaOTU4yhGb2sK3J%2FXn9tByfQlA9CR4mGSlB%2BkCd46MQftLg98Dx8tzn9rLxyBAvMqBDSrCstO3WC6H4%2Bb%2FA%2BARhzPfXy53yqtRveJXcQw%2BCKUW%2FkbI0MIfZvsQGOqUBR8rdDKYmt46CmqByRs9fgs66KUZbnMreDo0KuaSj1iINW1E0pSyDiGE7pim95JtRIaI6XzR6DzuOLWQRdMDEM4zDHU2sJPAATZQK2Tt9XhyhTwSeZRYFPeJrqq14dMzl3ALu8kJJnqRQ09LTrVJ9ildHpWQqAuGdYO0pToBPJIPbBaxud5ojsVUKhCY1osPHbHZ%2B1MWjVOwN7uKLLv3qdyEYdhwh&X-Amz-Signature=236bbdccea51a5ea264eba995f2a552a99d4d7c00d8ebc19982fdf70d9ba3309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RWNR47A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbL7iJTViCgJf6cIq%2Bo3GUP3WMrLKs2lrsTyrV5Al67AiBGreMIDCzuJHEwaLj5KpI1JpO9u9ykJerbRC0pcjjocCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMYTMLD9deWYLxf9sVKtwDX%2BJxaQeet5toz1Os8dV6fn5uNSLP79NwPPJoyCfkWpyY%2BFBFIBuKoeTECzOpQmslKrdwjgqHKbMmgsI%2FlFuql9ZZzWUTnsQpTGWVijdUm54JJFFMF2bnVktiIKxdBg1gsPJsdjHF2PTxRlHU0lvoAjktOo3f6azuavh9h8IEnz5V6rVv%2F0aXyMLgXZooSSydGjZ%2BAndxRsmb4Nj6C4UgTCHO4N%2FJWvV8cjeQpbzXmDDNvs2NoeVbzwrfKZy5%2Fqiok8RsszuMRsLojOdwjItk%2FZ858W23SFyz%2FFudCUIMHFYDWDMIGSHasSS7w59BZ8o6dgSCr58qX5issXpgLt5%2B5g6Rby91BYYPZJv9SbX0oVycwG6PDGL0S2OMGklRpm2PmVtrUzgTdDzKof9MP%2BmVNK6s%2BC5r2p2Re%2BIFpE87w2r3Rn02%2Brql107Y0P57vv4rZhiDyCC36ZdfzvfcY%2Bildf0INIUZZ2aBGj7ECiTL3UtY%2B2X90iAV2%2FBPq0G5MXZqZ3NnYEPUZMWJie%2BZCvtkH1YOz9H5Lm5pshHV7vjJYIAiEqUx5Mm4rS%2Fb5pkoj3frVkThYluxVnpSjLU%2BqjHOiU7Puii2eakUaFtwhiKPhgj9izBw9JMKz9Mm7mAwuNm%2BxAY6pgEv6wfn%2BL9hRZ9oHlvnnJjl%2FzziUZZJz0nexOWkYxOALon2nomcG8YMxoEpQPDk%2B%2FVdrM9V3ByZh9E3MRMWLXSa2NkvrQKkZkFlhZGSiBK18kD3scciUkFG9t2Z2Q0s9a1%2BETYnaWlT4Etf68MYbxylhNCfky8UYbczkbXQbi%2FnBtpPBexZAEvKHWFkEApLwJ4ChnLToUlgrAEEX7V4PrdnVmWXeofE&X-Amz-Signature=45e59e0b6e83fccf699b733dc4fd90811af961d3e41c21ee6f7fb1bd2e4af179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU67XZSJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T221027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQXPVGWI8LqMG3yqFB3s7Vbvfv5F%2BY8VM1LUn5b5kvvAiEA%2FYZlOI22UqLUB2wOE5u6Jl92NmoxyJqmCshckVN5bfYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOxh4WY0upZOc%2B5cmSrcA6LzRgsdtUt%2FRA95gwHKSOmq%2BGqw%2BPbliDYtF6gd%2BCJPBWJ1N7E%2Bmnnj6gXBmTCuNVqDGsT9KEJKkHy%2FZ3T6VezRqguJoi68owhej%2FPoR3IeMXM%2FZuRekRQDmcg2BpxXKuOZyaNu24LZyh%2BjXDN8wEcbgfIr36KxZjztRDRVtoa3phmPv0zRJJk9pDi6K1hzPzP%2B3Ua5ARf3UzpT029nZuriUiXvyDJ7ZDqkPz3TpvitV1FC9aE769m82rkX0lpz69jEFXsKWj8plj7N2ynfQReSxy5wisYuD2c804rehD90LjbH5zRDbRiKoDb%2BVDB9I1D%2Fda15UFbQlZdil0mZ6nVER%2BeaMP6yNopCzTZiVojyxFZAH8CjeItPZyoyo7SGdO2C%2Fxj%2FwMLU8Onc4QKAI35eEOZMY%2F3hLLZNcLQXIJPClvF2bqwsTeIdRGo7hunzPKym81KRKhzNfU%2FuM9vt901ypkUTtBe%2BQYCl%2FtdQ8qDlxcvOfDHvnFeROx0PHzmdR70LXz3dCQseQ%2FcWUdHIP6rPjMfNltR7ofiKmh1bgw721rTEk%2BBTvl5hvxp1%2Bhz%2F7ZTjL7S3kInbSC4Kwr%2F8%2Fu1WTwrHnPyqD8WweU5Omx4NwKyVr827aF6FZ07cMP7ZvsQGOqUBzzIZ2eyMEpwx4Ui%2Fa3MOVA9aYbq8KVsLO05zbqYK%2FyYb15u0ThzvKs6%2BBKLOSBVE%2FLKjhbtdIm2k4Y7vE4zSCHD0WmKeNkBZN24Aug4spmPD%2FyhxSQxhnXbkETj7AJVrWUc%2BtUPl5%2BgiZ4iUfHhAUNLKle1XHhHQpzjc9yXZ5MM6NIGRcdRrJOTjBaON8L%2FtTyvj9pFlIg6%2BoHEXC2iulQNLAgJk&X-Amz-Signature=834fc2c3ea45738278f55ade221fdd5a282072aea99c28382478be8de21b7b4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RWNR47A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbL7iJTViCgJf6cIq%2Bo3GUP3WMrLKs2lrsTyrV5Al67AiBGreMIDCzuJHEwaLj5KpI1JpO9u9ykJerbRC0pcjjocCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMYTMLD9deWYLxf9sVKtwDX%2BJxaQeet5toz1Os8dV6fn5uNSLP79NwPPJoyCfkWpyY%2BFBFIBuKoeTECzOpQmslKrdwjgqHKbMmgsI%2FlFuql9ZZzWUTnsQpTGWVijdUm54JJFFMF2bnVktiIKxdBg1gsPJsdjHF2PTxRlHU0lvoAjktOo3f6azuavh9h8IEnz5V6rVv%2F0aXyMLgXZooSSydGjZ%2BAndxRsmb4Nj6C4UgTCHO4N%2FJWvV8cjeQpbzXmDDNvs2NoeVbzwrfKZy5%2Fqiok8RsszuMRsLojOdwjItk%2FZ858W23SFyz%2FFudCUIMHFYDWDMIGSHasSS7w59BZ8o6dgSCr58qX5issXpgLt5%2B5g6Rby91BYYPZJv9SbX0oVycwG6PDGL0S2OMGklRpm2PmVtrUzgTdDzKof9MP%2BmVNK6s%2BC5r2p2Re%2BIFpE87w2r3Rn02%2Brql107Y0P57vv4rZhiDyCC36ZdfzvfcY%2Bildf0INIUZZ2aBGj7ECiTL3UtY%2B2X90iAV2%2FBPq0G5MXZqZ3NnYEPUZMWJie%2BZCvtkH1YOz9H5Lm5pshHV7vjJYIAiEqUx5Mm4rS%2Fb5pkoj3frVkThYluxVnpSjLU%2BqjHOiU7Puii2eakUaFtwhiKPhgj9izBw9JMKz9Mm7mAwuNm%2BxAY6pgEv6wfn%2BL9hRZ9oHlvnnJjl%2FzziUZZJz0nexOWkYxOALon2nomcG8YMxoEpQPDk%2B%2FVdrM9V3ByZh9E3MRMWLXSa2NkvrQKkZkFlhZGSiBK18kD3scciUkFG9t2Z2Q0s9a1%2BETYnaWlT4Etf68MYbxylhNCfky8UYbczkbXQbi%2FnBtpPBexZAEvKHWFkEApLwJ4ChnLToUlgrAEEX7V4PrdnVmWXeofE&X-Amz-Signature=9ea56e393dcfcb0e3a118a8c2e642b8f37e8808865eb5bba5b14dcd28fdda205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RSM5ISG%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T221033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrnoNdicEEiw5Cyp1H6X7HUYZNzFenet65QbKFLV2XiAiBYdJkYCKvurcn7eQ114MDNtyBxHNhdRyKDPeLVcmVolir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMCspxjjANoBHF9qnmKtwDSFPCu98BovFHSfhC8JQGC33NdWI7Iqm%2BB9FxsTj51tTW53sASvNYwCOylJtCCMJVz6M6QLKwXgfXfdDpIZGzlRQDzi3zURMao2Gok0qRW%2B3p2o4%2FwX8B3X4ELhLaJQvw%2Fa7s6nm3CrEqEy15Js155v8yKq%2BBknNYsII60vj8R5GQ8sq9Y%2FmsY4TuYkjJSI%2F%2B0ghq5QQlcAXpA%2FoXwwoDNjTNyQv%2BlueXUw4oE%2Fr3kXxlr8FZJsnv0NkNNIFXwiMMXedIuMroKYitiMSAVyh7jkAoItmtqaUwgXMYRPdKCjWkFbLKQ8yi5rd%2Fhabfqf0xmMBXlzJooZP4L%2BkOlMKfhbwcGUPfU3xN7n4ImhrDcoVCBfh1Cei6SR3ptBs62FiGKd2Cs5ieFehzYWibThvO%2B0px1ZiGB4bqzqTCYXL0IE%2BO4j391g7nHimQtZdutsaBCDrNRNZfLD%2FRdH5vnl0NxsICDrpetj9eUuWs2S6DE0FJTgXxrkMmESnIAwEerMNxULr4Cf%2BkfQFESGJkvCigLVxFhqCcBqJg5CYM%2BgMuyg%2FXeKk9wXfDwEfG4zswjRoaJzsuF%2BhYCgS3xvxM36knCYn%2FT8nElUycrC6OcmrrPvC4d%2FkwjOuBcdizo6Awm9m%2BxAY6pgGU3WcFTotOt8r8gaXBKQ%2FHy%2Fi7vcQDIMWGese1EfS4O78MwXl8sU9WzECGcr84YwjWtn37htZS%2FnU0Rx7GGYFAk3A3jYJti%2FIg0iD0Js96KLhLT3CzLf21nPpLL%2B9wpHROtFXgV0GOfm8x7EGa%2F%2B1UDxkFgL%2FPEkldlBaj3d4EWdlYDOekHWClx%2B7O797bIFXhGubFXlSKaCsfSsID9PP0TcmMq1lV&X-Amz-Signature=9f8dc1ee5fd273a0006fd1adba7b1dec91971f095e599a0a341576855d759930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q56UBJFD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T221034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAUDUg8W%2FB7bM9zs8fgLQCSmpB1L51FMCGZHXSZN4uDAiEA3omOhcKprbrxQ2T9bikUDkQfT0iEwugk5FbTd13W%2FuQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDM9pgxlKMGxpciuuTircA%2F0j13Ysj664Y42rzLbDx%2F1jJ2uBDt16gursmSUCyY4PAufXhslL7LHvAUb4ic7%2FFEsYKOwVmMaEz8f9G2lfLD3rg7kYVWJo2LVBdBRFbQvbR3jHOZrAj%2FZ%2BEu5NmGfwD4nWjIvxI26GcErvTb4WjPfYWcksPPJr3wEOvvT4nCbIJWDnnOnyNiyqPHmREi3CtYatQ0I8tGkwHnDp8X3BKt6MNhjLkIKR4jZFZhUZkibZc1%2F5tsIho62GDYPFOoq1UWVtq91Bj67yFykCwtIcC5qloxw2Dn%2BHIta%2FNuLqO4sigfO0%2F4UuQ7WAaTuzUpuGQtEDKgEfkrGf0qsqrKEzs4kw9PNEhLJ8eEdDzwR9DOhuiNeXlRXLJU3A8SqjYDoPBjIbjhTr0splrSuv873uw%2FWHZSXbhNXRjXHvgmfYfDi1JwMJ4XDjrEAFwhMCg8Cq%2BI1SBHKXKcS850WC94uHAdDvgDvcqXxl9E%2FC9Iti86Dw8htsuiYArorMFiEx6301umK8cUo5kl8PZ%2Fe5vn%2FUkBhDI6%2FL%2BKuEuTxTFkxfwbZKaFSyuH1zJh5TlWJ9AiWhsDV9TMlgSg74heAj0LmFZWK14ESkx0iuKbp2kiKZLjvcSBml9wFxF1sE%2BMUgMIXZvsQGOqUBPl9bql2pZK9H%2Btd%2FOjs6KHqD9j3M7WulPahmwFYluSD6iO1DGfAJoGwI2mp%2BqXUYtSqu1DBxN87ivZqtnmGEO5m%2F3rxhLZw6DS3dnPh9nhe4kmkxgBK6GdNObm9EqPb%2BRA%2F2wcIZHlvgmUyT%2BsFeCLpThbeo0eBL%2F3wLeOPWdKzMRNbZtZ7caEC3bmGLaVKzzvAYdAG4oaKTB%2F7%2F2Bw2qGkf8ABi&X-Amz-Signature=141f801d00dd739a822710c39af19f38ab0fe9e4d222cd285481539fc4ece316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUEXHP3C%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T221036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICB328SW4B02levshA99XJ9QpElv1rP7fbW44otzuRFMAiEA7DNBbYCcMf5TtuImvQVKEaol%2FcVmlMSyl%2FoTNivgYJAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAR8gVAFbdRhcXkBIircA0N6S%2FPPQlC3N9lMGUlJ8Vl%2B0nIvZ8N%2BE1rXohyjXDvo3mA4ftPFLwNFt5CXQjWBiDf1IiXNn5fLolUzVwuZDTea3DgleuRfZ2RK7Ek%2FJtrMOUgKkR3MVbuEnwCIgqrBqyn2qtivEnDWNj5h71hVUyH6cMUG55zD1fMmU%2FUHhPPu2k6YA33pT%2BlfP%2FV9Qgu%2FCAkKpSMsvUAoYA1Xc3gEYEGX8glWVwBsDcUaKiBNpM30HdPqfJTuGdZawl67f6SJtYk6h7llkA1xovKXYujJg8a7g1ovmt6wd3Bfw5UQa09VOwl4raCG%2FTeVjswv7nY03qjgEjc4oMC7A9AvaFZfMn8Tq9Zme4uYzd%2BI%2FhJVG%2BNadgDJkzQUOaRmP32BsUlTfo%2FVvMOCFn7dU6eFDfQhbaK3jF3le5rtNSTWssVPE4rfs4GGDHasenw4hHwYr2CGQTBK5EHPXzhgGvdz0vVYVX2UIgKmhTjTTxehYex55M5ZgBE0kiKWffJ8%2FNDm32eSkT8vERssfxJNIghcQIZxTcSr%2B1EkoGp8JTvMLJpJAhpYZkCRriUVWA7mXsJGwE4xN39fpA%2F1JmGf0pRn9bvPIwnAPeALLlXOqPQjcbu%2BpqkcRBBvcCTR8jkusoiJMIjZvsQGOqUB2ketel2CArsMEyGTA5vKhhflKgfNbs6EXQW%2BWD9ZmcznYZmhZXJUDPbYiybzC60JJ17JoOI9hDtMs3d84cSmA327AvgCODWsKx0yVre0h8LVZdaz9gyVvLHQzs4u%2BA2tR82TzdE0EaQubnrlLaLrG155QHGraKnfIMlAumaInyoiRt661BTRjAt76B6CDovIdBaB%2BsrvYe9YtN3I3moUu8iMmPvr&X-Amz-Signature=0cd2b6cf2021950fc1693f075451da89c842f072c00a2af82c3336e7fc91f85a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH7HK6YT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T221037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDY7DEY2j5so4Qf1IfBSLyzWFbp5YXheTpfnDNmAbDHKgIgccnVhaY%2FDAxgobbFy4%2FDMgYuyy7Ooqghih9WitTkFrQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAWUt53yenDGPEeLEyrcA4P50B%2BXY19h0b60MD%2FonCqba6dpZjpgYVa7gG6O6hYyUZRH0AN48kfHFOgmuwC5N%2FAU%2BfxR1OC4XuUQbMT6JEuOl3vThJRTs6p1LUspT6%2FTt30Dfwh%2F%2BsfMRF6zs6On14YtsLHKzsqU%2BfKsvf0KXyBpiQ8Pu%2Flu5jwAtDFNqmlfQRkOP%2Bjg6CZLaishWyxQBXkaKEaNQ3SnGUESGbUWVsANfenPeRLF7BIGq%2Bg%2FEh9xPMWPHjb0VZX3sdNsCeqED8i0ZSypnJY%2Fkg1GY%2B2SsBHpilk9xFTPMIOsyLZqkCeYfITsFQ4jJQadZZEG1JxbezrXmRaJRuaqbs%2F%2FfxyptDh%2F377N6%2BeA0XvDlc6u2jtckVRQPzoTMt%2F6whfECDmsBkWP%2BMQlQ%2BJH0TXCejJc6zR8yxE%2FVgPdgRrdUxI2Vfx1HrvKL%2Frx734Kp9WTrOnucwMScmaulwtVE3YFJAU9owLyneW7O4%2BNlpwZgY4R9cVg95w5DjOPWRT9KfzvQ%2BVYnr9nzb39mFhbH8TXmH6xC4vSM6kmXZtJPqP2%2BlvPUbIktnWifE2LeQ871%2FKOuJS4xg6z6aVbo%2Bj2DiUVAYSGzIFjk%2FpLz3R1UdSnk0a0pihg6wfLUgmNxJVEU3IwMMLZvsQGOqUBT6H%2BHqv2gvl3DKS%2F7%2F7757NRyF3ZN9nY6XzLjtEEU53uhyzaWjHcYejuBM4fV7a0lMbCD7BJmYLcNTQfwAcCkvu10uqq%2BzZlYP%2BEg4LhMuE9pvgy%2BWkWHSJFDQQIGJH7FXVXus%2BeMHqhHA5rzoGtgbKxeCSS5nC%2FgYylN0IpFuQjKmvYqkQtVg8oQ%2BxLJjUesfvMN4JsfhPKdhgJiIfCSLoBluop&X-Amz-Signature=e49a777b7b660ec9590da5a23057cb3e6685a6b202df95befac622bb9a5791b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z5X6VQW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T221040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FnnnUTT%2F9Cjox5Wlb3NLr55%2F02mNqLjBOoqeiBvMuGAiEAyBspIYm413mTcCD64F81XdG7EzyHqhz%2B9Eq1DEVZu9Aq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNBhruTynAIYAXy%2B8ircA4hCuO7fzbBR2JEQ1swzm3iTj%2BUMtlDq4P6fQMGpqjA%2BoR1M%2FL8llZVl0YAEatFPHXhLTLv4E4IcZgGXRRr%2FX1zMSYX2E46MuL7HjTatC6s%2BgYUmXXyHVO9i7y0r%2FathyIc4cRnzo%2FlI6AlP08n56NfPY9oRIqpmtC5UroNCKcAWeZ0u6hRzyJSoq4amKGVULDkHCDhUdzTKzRepKBdbqSspQo%2BWagmZwV%2FJna2saY6Ltmz2fUGr%2Bttgiw%2BbV1ZntAlQpGgko18f1i3TPQ8%2F0FDKBcY%2FzVaOEdawNOGWBzWK%2BqnHb3ym%2BKPaaqzPYr5Ih1awZque6OvJEdtBQZHGohYmh8RGFmkSqLNqNIo5rlcuRF4XzjVg1dvXAKyzuutK8h8%2FukkMGsTb2WPRqVbSUrRD45uh1sYa9oDdJ2VnprcBo9v%2FP40482IjEWk8vDLm75Y%2FBukYhk4ZOW3omnnEeGW%2FsP5KsbPu6dDgZGD59HDbhNHw2jovchALWv%2FzTU0fKXF3pHGp1YvyI62Trc6x9Vud7zcNJ6tYJNoaDMfmmvWwnYPIit0lTRvmA%2BkhYrSbDlRJsoL52XTLu8t10%2Fw6V0y0opTQKU61gjWrfnfysPeArh78HmbaAYXS50bfMIHavsQGOqUBpNpp%2F1UM9Cq2Ol7i9T7lhixw%2BRlLszEX6txZN6yO3TDpjTBU5WeG%2BsgR9SUQBigDLNOTZ6znaxnjtZj7dsMs98OuLxHOscyyqVdf6GnSzAaiXQNGC53BFjRMDii%2FlVtwSmvfKZN%2FsR83cjcTk%2FuxJKz3Yt4MYbJpRcm2%2FeWhH1pqFRzCRAuPnSNFTUE8wKqPbHYYdi%2BT5IYVn3YzxPe%2Fiupf0zw7&X-Amz-Signature=7cfc788d73d2e53e55a9bf8b3ddaac29e15ef897dfa944cc1cd5a9f0ee35ee18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RWNR47A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbL7iJTViCgJf6cIq%2Bo3GUP3WMrLKs2lrsTyrV5Al67AiBGreMIDCzuJHEwaLj5KpI1JpO9u9ykJerbRC0pcjjocCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMYTMLD9deWYLxf9sVKtwDX%2BJxaQeet5toz1Os8dV6fn5uNSLP79NwPPJoyCfkWpyY%2BFBFIBuKoeTECzOpQmslKrdwjgqHKbMmgsI%2FlFuql9ZZzWUTnsQpTGWVijdUm54JJFFMF2bnVktiIKxdBg1gsPJsdjHF2PTxRlHU0lvoAjktOo3f6azuavh9h8IEnz5V6rVv%2F0aXyMLgXZooSSydGjZ%2BAndxRsmb4Nj6C4UgTCHO4N%2FJWvV8cjeQpbzXmDDNvs2NoeVbzwrfKZy5%2Fqiok8RsszuMRsLojOdwjItk%2FZ858W23SFyz%2FFudCUIMHFYDWDMIGSHasSS7w59BZ8o6dgSCr58qX5issXpgLt5%2B5g6Rby91BYYPZJv9SbX0oVycwG6PDGL0S2OMGklRpm2PmVtrUzgTdDzKof9MP%2BmVNK6s%2BC5r2p2Re%2BIFpE87w2r3Rn02%2Brql107Y0P57vv4rZhiDyCC36ZdfzvfcY%2Bildf0INIUZZ2aBGj7ECiTL3UtY%2B2X90iAV2%2FBPq0G5MXZqZ3NnYEPUZMWJie%2BZCvtkH1YOz9H5Lm5pshHV7vjJYIAiEqUx5Mm4rS%2Fb5pkoj3frVkThYluxVnpSjLU%2BqjHOiU7Puii2eakUaFtwhiKPhgj9izBw9JMKz9Mm7mAwuNm%2BxAY6pgEv6wfn%2BL9hRZ9oHlvnnJjl%2FzziUZZJz0nexOWkYxOALon2nomcG8YMxoEpQPDk%2B%2FVdrM9V3ByZh9E3MRMWLXSa2NkvrQKkZkFlhZGSiBK18kD3scciUkFG9t2Z2Q0s9a1%2BETYnaWlT4Etf68MYbxylhNCfky8UYbczkbXQbi%2FnBtpPBexZAEvKHWFkEApLwJ4ChnLToUlgrAEEX7V4PrdnVmWXeofE&X-Amz-Signature=d176ffa2749a93e132e56c4e2bce82e8300be18364a435d00824b129d9c8c004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RWNR47A%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbL7iJTViCgJf6cIq%2Bo3GUP3WMrLKs2lrsTyrV5Al67AiBGreMIDCzuJHEwaLj5KpI1JpO9u9ykJerbRC0pcjjocCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMYTMLD9deWYLxf9sVKtwDX%2BJxaQeet5toz1Os8dV6fn5uNSLP79NwPPJoyCfkWpyY%2BFBFIBuKoeTECzOpQmslKrdwjgqHKbMmgsI%2FlFuql9ZZzWUTnsQpTGWVijdUm54JJFFMF2bnVktiIKxdBg1gsPJsdjHF2PTxRlHU0lvoAjktOo3f6azuavh9h8IEnz5V6rVv%2F0aXyMLgXZooSSydGjZ%2BAndxRsmb4Nj6C4UgTCHO4N%2FJWvV8cjeQpbzXmDDNvs2NoeVbzwrfKZy5%2Fqiok8RsszuMRsLojOdwjItk%2FZ858W23SFyz%2FFudCUIMHFYDWDMIGSHasSS7w59BZ8o6dgSCr58qX5issXpgLt5%2B5g6Rby91BYYPZJv9SbX0oVycwG6PDGL0S2OMGklRpm2PmVtrUzgTdDzKof9MP%2BmVNK6s%2BC5r2p2Re%2BIFpE87w2r3Rn02%2Brql107Y0P57vv4rZhiDyCC36ZdfzvfcY%2Bildf0INIUZZ2aBGj7ECiTL3UtY%2B2X90iAV2%2FBPq0G5MXZqZ3NnYEPUZMWJie%2BZCvtkH1YOz9H5Lm5pshHV7vjJYIAiEqUx5Mm4rS%2Fb5pkoj3frVkThYluxVnpSjLU%2BqjHOiU7Puii2eakUaFtwhiKPhgj9izBw9JMKz9Mm7mAwuNm%2BxAY6pgEv6wfn%2BL9hRZ9oHlvnnJjl%2FzziUZZJz0nexOWkYxOALon2nomcG8YMxoEpQPDk%2B%2FVdrM9V3ByZh9E3MRMWLXSa2NkvrQKkZkFlhZGSiBK18kD3scciUkFG9t2Z2Q0s9a1%2BETYnaWlT4Etf68MYbxylhNCfky8UYbczkbXQbi%2FnBtpPBexZAEvKHWFkEApLwJ4ChnLToUlgrAEEX7V4PrdnVmWXeofE&X-Amz-Signature=de339925607afa7a8d5d27ca0b7213890c7cd53bc94aefc465e80e84b0003976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R46OH2RA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDxyLvMtfGa7ltyxZfjrAyWK9pX4J0EqSFSsTa6ccltAiAnJE2lpsTp9ngMvHNYF3%2Bcvid8lnhLbh82MHj%2FY5yLVir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMRkVmP2olIZ3ZOzNNKtwDfrHc5IPOsK49RPKsUCNqm4g03T%2B6gIbeiYtFDhowWCCicO476iWONEGnZB58I0cK4jovfMCRHj0Otu0cpTGXPegjfbah39K82BeEinzQqdGBmNA6wo%2FVIAC%2FAQkgM3C6svsWwuUFh5SxrRiBhiiEMk3YTXb%2BZPuYgiAdTxpDTJZVTLKri0TXf8ZxtR7YTpqrIYR5m%2Fg2UxRy5jA7LTlTcd8uhZMUDPiS%2By4RnU8tmGdyEWCqWTviej1NvojO7grAbtWwrrGExmoSd94SF9TuP5VxRxLNuRgrdRhaj9PimetJUuiorz9vLja7TxQa6UmoxSVEmmPz1GoD%2Fj%2FY1qLkq%2FqyUw8QbDdqj6ysi3quzqM26a3V7VExrKhZHuOIYDyzlpB5KWIyOp2V34lJQ195FXsbtM%2FM2PIqfFLJr%2BqVC3%2B6c5gvIx3r6bAOeZAM1GJqApYO4GL6IXJhkO9ZG4apZ6hRZ%2Fvi1YEE5ISycwD9zm8979cGn1A6qCWgbgi1mBKoQbxJpdS5XowDJ5W0BFQesWPmCrqyJnFxxmxO8c%2BVkSsO37nGR%2Faq4JVXOdA479i1ae2IZy6LjJnhIUbhxZIZx%2FMiebbZmeZ10nBymQ7MN4IprjgF5AMBqWNL128ww9m%2BxAY6pgFxDTZck35KfcdZzFe7vVSuaYQ6mZP6U%2BhLH%2B0Db%2B%2FwttQhPEQA1%2BAFfWIH%2FaWeX17whuAIOibpWPVS06ucwDsqkSFtyJyojAfvCjU%2FKMTbigPhIRtJBo5Pod%2Fr0J1jvohQwkPSMxri%2B%2FJ20P5bx3fJ5HBkfHqNBcQdIyFu4KfeZMdtybzLElKQDfMoSPL5xXir2FbuCkHC82HIy8RylEZO4duESAyd&X-Amz-Signature=772efd6df3582b2298b20e3468e324a46a95342e755ff4e1f9ce0f548c3a933a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R46OH2RA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDxyLvMtfGa7ltyxZfjrAyWK9pX4J0EqSFSsTa6ccltAiAnJE2lpsTp9ngMvHNYF3%2Bcvid8lnhLbh82MHj%2FY5yLVir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMRkVmP2olIZ3ZOzNNKtwDfrHc5IPOsK49RPKsUCNqm4g03T%2B6gIbeiYtFDhowWCCicO476iWONEGnZB58I0cK4jovfMCRHj0Otu0cpTGXPegjfbah39K82BeEinzQqdGBmNA6wo%2FVIAC%2FAQkgM3C6svsWwuUFh5SxrRiBhiiEMk3YTXb%2BZPuYgiAdTxpDTJZVTLKri0TXf8ZxtR7YTpqrIYR5m%2Fg2UxRy5jA7LTlTcd8uhZMUDPiS%2By4RnU8tmGdyEWCqWTviej1NvojO7grAbtWwrrGExmoSd94SF9TuP5VxRxLNuRgrdRhaj9PimetJUuiorz9vLja7TxQa6UmoxSVEmmPz1GoD%2Fj%2FY1qLkq%2FqyUw8QbDdqj6ysi3quzqM26a3V7VExrKhZHuOIYDyzlpB5KWIyOp2V34lJQ195FXsbtM%2FM2PIqfFLJr%2BqVC3%2B6c5gvIx3r6bAOeZAM1GJqApYO4GL6IXJhkO9ZG4apZ6hRZ%2Fvi1YEE5ISycwD9zm8979cGn1A6qCWgbgi1mBKoQbxJpdS5XowDJ5W0BFQesWPmCrqyJnFxxmxO8c%2BVkSsO37nGR%2Faq4JVXOdA479i1ae2IZy6LjJnhIUbhxZIZx%2FMiebbZmeZ10nBymQ7MN4IprjgF5AMBqWNL128ww9m%2BxAY6pgFxDTZck35KfcdZzFe7vVSuaYQ6mZP6U%2BhLH%2B0Db%2B%2FwttQhPEQA1%2BAFfWIH%2FaWeX17whuAIOibpWPVS06ucwDsqkSFtyJyojAfvCjU%2FKMTbigPhIRtJBo5Pod%2Fr0J1jvohQwkPSMxri%2B%2FJ20P5bx3fJ5HBkfHqNBcQdIyFu4KfeZMdtybzLElKQDfMoSPL5xXir2FbuCkHC82HIy8RylEZO4duESAyd&X-Amz-Signature=6ba6b721b33d424d073e8441a881a428a407917183f8061f4633b87699bdcb8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R46OH2RA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDxyLvMtfGa7ltyxZfjrAyWK9pX4J0EqSFSsTa6ccltAiAnJE2lpsTp9ngMvHNYF3%2Bcvid8lnhLbh82MHj%2FY5yLVir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMRkVmP2olIZ3ZOzNNKtwDfrHc5IPOsK49RPKsUCNqm4g03T%2B6gIbeiYtFDhowWCCicO476iWONEGnZB58I0cK4jovfMCRHj0Otu0cpTGXPegjfbah39K82BeEinzQqdGBmNA6wo%2FVIAC%2FAQkgM3C6svsWwuUFh5SxrRiBhiiEMk3YTXb%2BZPuYgiAdTxpDTJZVTLKri0TXf8ZxtR7YTpqrIYR5m%2Fg2UxRy5jA7LTlTcd8uhZMUDPiS%2By4RnU8tmGdyEWCqWTviej1NvojO7grAbtWwrrGExmoSd94SF9TuP5VxRxLNuRgrdRhaj9PimetJUuiorz9vLja7TxQa6UmoxSVEmmPz1GoD%2Fj%2FY1qLkq%2FqyUw8QbDdqj6ysi3quzqM26a3V7VExrKhZHuOIYDyzlpB5KWIyOp2V34lJQ195FXsbtM%2FM2PIqfFLJr%2BqVC3%2B6c5gvIx3r6bAOeZAM1GJqApYO4GL6IXJhkO9ZG4apZ6hRZ%2Fvi1YEE5ISycwD9zm8979cGn1A6qCWgbgi1mBKoQbxJpdS5XowDJ5W0BFQesWPmCrqyJnFxxmxO8c%2BVkSsO37nGR%2Faq4JVXOdA479i1ae2IZy6LjJnhIUbhxZIZx%2FMiebbZmeZ10nBymQ7MN4IprjgF5AMBqWNL128ww9m%2BxAY6pgFxDTZck35KfcdZzFe7vVSuaYQ6mZP6U%2BhLH%2B0Db%2B%2FwttQhPEQA1%2BAFfWIH%2FaWeX17whuAIOibpWPVS06ucwDsqkSFtyJyojAfvCjU%2FKMTbigPhIRtJBo5Pod%2Fr0J1jvohQwkPSMxri%2B%2FJ20P5bx3fJ5HBkfHqNBcQdIyFu4KfeZMdtybzLElKQDfMoSPL5xXir2FbuCkHC82HIy8RylEZO4duESAyd&X-Amz-Signature=8258446bb5a36402713b6c3d4c41ee0b0a6f2e8b8ba4ca97cd34aa08ed0958ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R46OH2RA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDxyLvMtfGa7ltyxZfjrAyWK9pX4J0EqSFSsTa6ccltAiAnJE2lpsTp9ngMvHNYF3%2Bcvid8lnhLbh82MHj%2FY5yLVir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMRkVmP2olIZ3ZOzNNKtwDfrHc5IPOsK49RPKsUCNqm4g03T%2B6gIbeiYtFDhowWCCicO476iWONEGnZB58I0cK4jovfMCRHj0Otu0cpTGXPegjfbah39K82BeEinzQqdGBmNA6wo%2FVIAC%2FAQkgM3C6svsWwuUFh5SxrRiBhiiEMk3YTXb%2BZPuYgiAdTxpDTJZVTLKri0TXf8ZxtR7YTpqrIYR5m%2Fg2UxRy5jA7LTlTcd8uhZMUDPiS%2By4RnU8tmGdyEWCqWTviej1NvojO7grAbtWwrrGExmoSd94SF9TuP5VxRxLNuRgrdRhaj9PimetJUuiorz9vLja7TxQa6UmoxSVEmmPz1GoD%2Fj%2FY1qLkq%2FqyUw8QbDdqj6ysi3quzqM26a3V7VExrKhZHuOIYDyzlpB5KWIyOp2V34lJQ195FXsbtM%2FM2PIqfFLJr%2BqVC3%2B6c5gvIx3r6bAOeZAM1GJqApYO4GL6IXJhkO9ZG4apZ6hRZ%2Fvi1YEE5ISycwD9zm8979cGn1A6qCWgbgi1mBKoQbxJpdS5XowDJ5W0BFQesWPmCrqyJnFxxmxO8c%2BVkSsO37nGR%2Faq4JVXOdA479i1ae2IZy6LjJnhIUbhxZIZx%2FMiebbZmeZ10nBymQ7MN4IprjgF5AMBqWNL128ww9m%2BxAY6pgFxDTZck35KfcdZzFe7vVSuaYQ6mZP6U%2BhLH%2B0Db%2B%2FwttQhPEQA1%2BAFfWIH%2FaWeX17whuAIOibpWPVS06ucwDsqkSFtyJyojAfvCjU%2FKMTbigPhIRtJBo5Pod%2Fr0J1jvohQwkPSMxri%2B%2FJ20P5bx3fJ5HBkfHqNBcQdIyFu4KfeZMdtybzLElKQDfMoSPL5xXir2FbuCkHC82HIy8RylEZO4duESAyd&X-Amz-Signature=c19110c646b4addbdafd288583580c1e61eb0c8bd70ca69bbe87ceb0009b3e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R46OH2RA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDxyLvMtfGa7ltyxZfjrAyWK9pX4J0EqSFSsTa6ccltAiAnJE2lpsTp9ngMvHNYF3%2Bcvid8lnhLbh82MHj%2FY5yLVir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMRkVmP2olIZ3ZOzNNKtwDfrHc5IPOsK49RPKsUCNqm4g03T%2B6gIbeiYtFDhowWCCicO476iWONEGnZB58I0cK4jovfMCRHj0Otu0cpTGXPegjfbah39K82BeEinzQqdGBmNA6wo%2FVIAC%2FAQkgM3C6svsWwuUFh5SxrRiBhiiEMk3YTXb%2BZPuYgiAdTxpDTJZVTLKri0TXf8ZxtR7YTpqrIYR5m%2Fg2UxRy5jA7LTlTcd8uhZMUDPiS%2By4RnU8tmGdyEWCqWTviej1NvojO7grAbtWwrrGExmoSd94SF9TuP5VxRxLNuRgrdRhaj9PimetJUuiorz9vLja7TxQa6UmoxSVEmmPz1GoD%2Fj%2FY1qLkq%2FqyUw8QbDdqj6ysi3quzqM26a3V7VExrKhZHuOIYDyzlpB5KWIyOp2V34lJQ195FXsbtM%2FM2PIqfFLJr%2BqVC3%2B6c5gvIx3r6bAOeZAM1GJqApYO4GL6IXJhkO9ZG4apZ6hRZ%2Fvi1YEE5ISycwD9zm8979cGn1A6qCWgbgi1mBKoQbxJpdS5XowDJ5W0BFQesWPmCrqyJnFxxmxO8c%2BVkSsO37nGR%2Faq4JVXOdA479i1ae2IZy6LjJnhIUbhxZIZx%2FMiebbZmeZ10nBymQ7MN4IprjgF5AMBqWNL128ww9m%2BxAY6pgFxDTZck35KfcdZzFe7vVSuaYQ6mZP6U%2BhLH%2B0Db%2B%2FwttQhPEQA1%2BAFfWIH%2FaWeX17whuAIOibpWPVS06ucwDsqkSFtyJyojAfvCjU%2FKMTbigPhIRtJBo5Pod%2Fr0J1jvohQwkPSMxri%2B%2FJ20P5bx3fJ5HBkfHqNBcQdIyFu4KfeZMdtybzLElKQDfMoSPL5xXir2FbuCkHC82HIy8RylEZO4duESAyd&X-Amz-Signature=bca47f8aaaccd05cf6950f2c8fb2c304e7ea4489669a61fa7143552d50a44aa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R46OH2RA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDxyLvMtfGa7ltyxZfjrAyWK9pX4J0EqSFSsTa6ccltAiAnJE2lpsTp9ngMvHNYF3%2Bcvid8lnhLbh82MHj%2FY5yLVir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMRkVmP2olIZ3ZOzNNKtwDfrHc5IPOsK49RPKsUCNqm4g03T%2B6gIbeiYtFDhowWCCicO476iWONEGnZB58I0cK4jovfMCRHj0Otu0cpTGXPegjfbah39K82BeEinzQqdGBmNA6wo%2FVIAC%2FAQkgM3C6svsWwuUFh5SxrRiBhiiEMk3YTXb%2BZPuYgiAdTxpDTJZVTLKri0TXf8ZxtR7YTpqrIYR5m%2Fg2UxRy5jA7LTlTcd8uhZMUDPiS%2By4RnU8tmGdyEWCqWTviej1NvojO7grAbtWwrrGExmoSd94SF9TuP5VxRxLNuRgrdRhaj9PimetJUuiorz9vLja7TxQa6UmoxSVEmmPz1GoD%2Fj%2FY1qLkq%2FqyUw8QbDdqj6ysi3quzqM26a3V7VExrKhZHuOIYDyzlpB5KWIyOp2V34lJQ195FXsbtM%2FM2PIqfFLJr%2BqVC3%2B6c5gvIx3r6bAOeZAM1GJqApYO4GL6IXJhkO9ZG4apZ6hRZ%2Fvi1YEE5ISycwD9zm8979cGn1A6qCWgbgi1mBKoQbxJpdS5XowDJ5W0BFQesWPmCrqyJnFxxmxO8c%2BVkSsO37nGR%2Faq4JVXOdA479i1ae2IZy6LjJnhIUbhxZIZx%2FMiebbZmeZ10nBymQ7MN4IprjgF5AMBqWNL128ww9m%2BxAY6pgFxDTZck35KfcdZzFe7vVSuaYQ6mZP6U%2BhLH%2B0Db%2B%2FwttQhPEQA1%2BAFfWIH%2FaWeX17whuAIOibpWPVS06ucwDsqkSFtyJyojAfvCjU%2FKMTbigPhIRtJBo5Pod%2Fr0J1jvohQwkPSMxri%2B%2FJ20P5bx3fJ5HBkfHqNBcQdIyFu4KfeZMdtybzLElKQDfMoSPL5xXir2FbuCkHC82HIy8RylEZO4duESAyd&X-Amz-Signature=e9fe6f3bd23f98ec894add5a40c059a1998e6f0f83bb5a3bb58e416d1bef5dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R46OH2RA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDxyLvMtfGa7ltyxZfjrAyWK9pX4J0EqSFSsTa6ccltAiAnJE2lpsTp9ngMvHNYF3%2Bcvid8lnhLbh82MHj%2FY5yLVir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMRkVmP2olIZ3ZOzNNKtwDfrHc5IPOsK49RPKsUCNqm4g03T%2B6gIbeiYtFDhowWCCicO476iWONEGnZB58I0cK4jovfMCRHj0Otu0cpTGXPegjfbah39K82BeEinzQqdGBmNA6wo%2FVIAC%2FAQkgM3C6svsWwuUFh5SxrRiBhiiEMk3YTXb%2BZPuYgiAdTxpDTJZVTLKri0TXf8ZxtR7YTpqrIYR5m%2Fg2UxRy5jA7LTlTcd8uhZMUDPiS%2By4RnU8tmGdyEWCqWTviej1NvojO7grAbtWwrrGExmoSd94SF9TuP5VxRxLNuRgrdRhaj9PimetJUuiorz9vLja7TxQa6UmoxSVEmmPz1GoD%2Fj%2FY1qLkq%2FqyUw8QbDdqj6ysi3quzqM26a3V7VExrKhZHuOIYDyzlpB5KWIyOp2V34lJQ195FXsbtM%2FM2PIqfFLJr%2BqVC3%2B6c5gvIx3r6bAOeZAM1GJqApYO4GL6IXJhkO9ZG4apZ6hRZ%2Fvi1YEE5ISycwD9zm8979cGn1A6qCWgbgi1mBKoQbxJpdS5XowDJ5W0BFQesWPmCrqyJnFxxmxO8c%2BVkSsO37nGR%2Faq4JVXOdA479i1ae2IZy6LjJnhIUbhxZIZx%2FMiebbZmeZ10nBymQ7MN4IprjgF5AMBqWNL128ww9m%2BxAY6pgFxDTZck35KfcdZzFe7vVSuaYQ6mZP6U%2BhLH%2B0Db%2B%2FwttQhPEQA1%2BAFfWIH%2FaWeX17whuAIOibpWPVS06ucwDsqkSFtyJyojAfvCjU%2FKMTbigPhIRtJBo5Pod%2Fr0J1jvohQwkPSMxri%2B%2FJ20P5bx3fJ5HBkfHqNBcQdIyFu4KfeZMdtybzLElKQDfMoSPL5xXir2FbuCkHC82HIy8RylEZO4duESAyd&X-Amz-Signature=8258446bb5a36402713b6c3d4c41ee0b0a6f2e8b8ba4ca97cd34aa08ed0958ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R46OH2RA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDxyLvMtfGa7ltyxZfjrAyWK9pX4J0EqSFSsTa6ccltAiAnJE2lpsTp9ngMvHNYF3%2Bcvid8lnhLbh82MHj%2FY5yLVir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMRkVmP2olIZ3ZOzNNKtwDfrHc5IPOsK49RPKsUCNqm4g03T%2B6gIbeiYtFDhowWCCicO476iWONEGnZB58I0cK4jovfMCRHj0Otu0cpTGXPegjfbah39K82BeEinzQqdGBmNA6wo%2FVIAC%2FAQkgM3C6svsWwuUFh5SxrRiBhiiEMk3YTXb%2BZPuYgiAdTxpDTJZVTLKri0TXf8ZxtR7YTpqrIYR5m%2Fg2UxRy5jA7LTlTcd8uhZMUDPiS%2By4RnU8tmGdyEWCqWTviej1NvojO7grAbtWwrrGExmoSd94SF9TuP5VxRxLNuRgrdRhaj9PimetJUuiorz9vLja7TxQa6UmoxSVEmmPz1GoD%2Fj%2FY1qLkq%2FqyUw8QbDdqj6ysi3quzqM26a3V7VExrKhZHuOIYDyzlpB5KWIyOp2V34lJQ195FXsbtM%2FM2PIqfFLJr%2BqVC3%2B6c5gvIx3r6bAOeZAM1GJqApYO4GL6IXJhkO9ZG4apZ6hRZ%2Fvi1YEE5ISycwD9zm8979cGn1A6qCWgbgi1mBKoQbxJpdS5XowDJ5W0BFQesWPmCrqyJnFxxmxO8c%2BVkSsO37nGR%2Faq4JVXOdA479i1ae2IZy6LjJnhIUbhxZIZx%2FMiebbZmeZ10nBymQ7MN4IprjgF5AMBqWNL128ww9m%2BxAY6pgFxDTZck35KfcdZzFe7vVSuaYQ6mZP6U%2BhLH%2B0Db%2B%2FwttQhPEQA1%2BAFfWIH%2FaWeX17whuAIOibpWPVS06ucwDsqkSFtyJyojAfvCjU%2FKMTbigPhIRtJBo5Pod%2Fr0J1jvohQwkPSMxri%2B%2FJ20P5bx3fJ5HBkfHqNBcQdIyFu4KfeZMdtybzLElKQDfMoSPL5xXir2FbuCkHC82HIy8RylEZO4duESAyd&X-Amz-Signature=bfb4ae5e523fa2fadd1027a8504790633a1e838b5a1c788812af6e8831be74f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R46OH2RA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDxyLvMtfGa7ltyxZfjrAyWK9pX4J0EqSFSsTa6ccltAiAnJE2lpsTp9ngMvHNYF3%2Bcvid8lnhLbh82MHj%2FY5yLVir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMRkVmP2olIZ3ZOzNNKtwDfrHc5IPOsK49RPKsUCNqm4g03T%2B6gIbeiYtFDhowWCCicO476iWONEGnZB58I0cK4jovfMCRHj0Otu0cpTGXPegjfbah39K82BeEinzQqdGBmNA6wo%2FVIAC%2FAQkgM3C6svsWwuUFh5SxrRiBhiiEMk3YTXb%2BZPuYgiAdTxpDTJZVTLKri0TXf8ZxtR7YTpqrIYR5m%2Fg2UxRy5jA7LTlTcd8uhZMUDPiS%2By4RnU8tmGdyEWCqWTviej1NvojO7grAbtWwrrGExmoSd94SF9TuP5VxRxLNuRgrdRhaj9PimetJUuiorz9vLja7TxQa6UmoxSVEmmPz1GoD%2Fj%2FY1qLkq%2FqyUw8QbDdqj6ysi3quzqM26a3V7VExrKhZHuOIYDyzlpB5KWIyOp2V34lJQ195FXsbtM%2FM2PIqfFLJr%2BqVC3%2B6c5gvIx3r6bAOeZAM1GJqApYO4GL6IXJhkO9ZG4apZ6hRZ%2Fvi1YEE5ISycwD9zm8979cGn1A6qCWgbgi1mBKoQbxJpdS5XowDJ5W0BFQesWPmCrqyJnFxxmxO8c%2BVkSsO37nGR%2Faq4JVXOdA479i1ae2IZy6LjJnhIUbhxZIZx%2FMiebbZmeZ10nBymQ7MN4IprjgF5AMBqWNL128ww9m%2BxAY6pgFxDTZck35KfcdZzFe7vVSuaYQ6mZP6U%2BhLH%2B0Db%2B%2FwttQhPEQA1%2BAFfWIH%2FaWeX17whuAIOibpWPVS06ucwDsqkSFtyJyojAfvCjU%2FKMTbigPhIRtJBo5Pod%2Fr0J1jvohQwkPSMxri%2B%2FJ20P5bx3fJ5HBkfHqNBcQdIyFu4KfeZMdtybzLElKQDfMoSPL5xXir2FbuCkHC82HIy8RylEZO4duESAyd&X-Amz-Signature=dca89b7226fbc0205b5db7391cc1181f3a7ca16b7928f17af4ee694e835d49eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R46OH2RA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDxyLvMtfGa7ltyxZfjrAyWK9pX4J0EqSFSsTa6ccltAiAnJE2lpsTp9ngMvHNYF3%2Bcvid8lnhLbh82MHj%2FY5yLVir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMRkVmP2olIZ3ZOzNNKtwDfrHc5IPOsK49RPKsUCNqm4g03T%2B6gIbeiYtFDhowWCCicO476iWONEGnZB58I0cK4jovfMCRHj0Otu0cpTGXPegjfbah39K82BeEinzQqdGBmNA6wo%2FVIAC%2FAQkgM3C6svsWwuUFh5SxrRiBhiiEMk3YTXb%2BZPuYgiAdTxpDTJZVTLKri0TXf8ZxtR7YTpqrIYR5m%2Fg2UxRy5jA7LTlTcd8uhZMUDPiS%2By4RnU8tmGdyEWCqWTviej1NvojO7grAbtWwrrGExmoSd94SF9TuP5VxRxLNuRgrdRhaj9PimetJUuiorz9vLja7TxQa6UmoxSVEmmPz1GoD%2Fj%2FY1qLkq%2FqyUw8QbDdqj6ysi3quzqM26a3V7VExrKhZHuOIYDyzlpB5KWIyOp2V34lJQ195FXsbtM%2FM2PIqfFLJr%2BqVC3%2B6c5gvIx3r6bAOeZAM1GJqApYO4GL6IXJhkO9ZG4apZ6hRZ%2Fvi1YEE5ISycwD9zm8979cGn1A6qCWgbgi1mBKoQbxJpdS5XowDJ5W0BFQesWPmCrqyJnFxxmxO8c%2BVkSsO37nGR%2Faq4JVXOdA479i1ae2IZy6LjJnhIUbhxZIZx%2FMiebbZmeZ10nBymQ7MN4IprjgF5AMBqWNL128ww9m%2BxAY6pgFxDTZck35KfcdZzFe7vVSuaYQ6mZP6U%2BhLH%2B0Db%2B%2FwttQhPEQA1%2BAFfWIH%2FaWeX17whuAIOibpWPVS06ucwDsqkSFtyJyojAfvCjU%2FKMTbigPhIRtJBo5Pod%2Fr0J1jvohQwkPSMxri%2B%2FJ20P5bx3fJ5HBkfHqNBcQdIyFu4KfeZMdtybzLElKQDfMoSPL5xXir2FbuCkHC82HIy8RylEZO4duESAyd&X-Amz-Signature=c5d5344308c0224769e0913e8c5f971316535eda5248589aad3a2a35508a7b07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
