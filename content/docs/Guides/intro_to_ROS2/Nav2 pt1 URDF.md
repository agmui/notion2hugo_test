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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAN7OEZR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG41WMj73lSAYFyfNjoV8pBjjNf1d7A7OzNdfsIIP%2Fr%2BAiAEP%2Ft2Gu5N4hPy%2B%2BFtH%2Fat%2FU%2BuOrLqiyGnIcUYhmuvHir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM249DWye13QtHfH13KtwDabnVpiSBbiBvQZEKwkysEx73yMQwDHjFd6TY6tAWzNTUBFa7S8bwleXDNsukf4YG%2FJ1sPX6PlQEWhHVWsc0RWou4ile2Dk2uV4E3IierfLsUTwJwujsNs21ZHzhsdpr9SYjOfmV6lBW5vHx7fnbKd30X6dVkIKI1l3v2KQnjiXoO%2B%2BehHnyhV8TxJDa5rZ3avInWBgbLtc%2FhQwgfLsnaEzWG8xSEebd0PJAWCW2wTJ5gB%2BKv2MlArVXDMxUWlkhayIFP7jsW0s41KqXGFXQT4eXAMDS%2BSlLRw2NpxB6DoHwr0fjOJegEohDF6I60Yq1Z%2FsPQWh0HjYZxbeP8sFYK2fIc7a%2FxZYIlc%2FH0D9lpKpXmTEFcU2C%2FCSm7N6081wM4sC7CuOSYftXmIOqDBVTW9FuUisLONWFx7TQMmdaU9WGgja9WCyY3j3AJLD9N7OpQCZabOTmQAoyEU0amns0h6LzGXMeTE%2BJi%2BeEaUcxb29ba2Q9gZLxJw%2BVMGEmXMcfdhC%2B6yu3lzr2kPi6rzsUC3tZuha0Qa%2BrlECbgOAt6o8BaraqLBjkf%2BR7HjIL9w3UKBiU3BtzQU1xrKZwKdKhWHntxd6llYQ1BERN%2BRRm1Yc4jDSdOu2gJof1O4p4wiYbwxAY6pgGt64Z2mesczIyplMB%2BIZ8em5BYl8BGtue8VWmN5CK%2BRMIfR5T1vEKHSnyGa60yQLIvzBx%2BKHkpE2UWu9BqbqPvgCjNZa7XUYu2Ul2KK3o6jWjjuBUHTDoxDEGwk%2Byq2RNeYOypdmmiRx3kXiuvXvpaz3dmuPSJgNO6mqXgld4CTxn49KciaD3Ujgc%2FLZ8ZTF4aNdRd0Xi0%2FURytWemfGaW%2BbXY8E4M&X-Amz-Signature=c8a7bddc1cf689a496c49cc8f8b05bf1aaf26f5d0defd3ddaca4c434bd2992ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAN7OEZR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG41WMj73lSAYFyfNjoV8pBjjNf1d7A7OzNdfsIIP%2Fr%2BAiAEP%2Ft2Gu5N4hPy%2B%2BFtH%2Fat%2FU%2BuOrLqiyGnIcUYhmuvHir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM249DWye13QtHfH13KtwDabnVpiSBbiBvQZEKwkysEx73yMQwDHjFd6TY6tAWzNTUBFa7S8bwleXDNsukf4YG%2FJ1sPX6PlQEWhHVWsc0RWou4ile2Dk2uV4E3IierfLsUTwJwujsNs21ZHzhsdpr9SYjOfmV6lBW5vHx7fnbKd30X6dVkIKI1l3v2KQnjiXoO%2B%2BehHnyhV8TxJDa5rZ3avInWBgbLtc%2FhQwgfLsnaEzWG8xSEebd0PJAWCW2wTJ5gB%2BKv2MlArVXDMxUWlkhayIFP7jsW0s41KqXGFXQT4eXAMDS%2BSlLRw2NpxB6DoHwr0fjOJegEohDF6I60Yq1Z%2FsPQWh0HjYZxbeP8sFYK2fIc7a%2FxZYIlc%2FH0D9lpKpXmTEFcU2C%2FCSm7N6081wM4sC7CuOSYftXmIOqDBVTW9FuUisLONWFx7TQMmdaU9WGgja9WCyY3j3AJLD9N7OpQCZabOTmQAoyEU0amns0h6LzGXMeTE%2BJi%2BeEaUcxb29ba2Q9gZLxJw%2BVMGEmXMcfdhC%2B6yu3lzr2kPi6rzsUC3tZuha0Qa%2BrlECbgOAt6o8BaraqLBjkf%2BR7HjIL9w3UKBiU3BtzQU1xrKZwKdKhWHntxd6llYQ1BERN%2BRRm1Yc4jDSdOu2gJof1O4p4wiYbwxAY6pgGt64Z2mesczIyplMB%2BIZ8em5BYl8BGtue8VWmN5CK%2BRMIfR5T1vEKHSnyGa60yQLIvzBx%2BKHkpE2UWu9BqbqPvgCjNZa7XUYu2Ul2KK3o6jWjjuBUHTDoxDEGwk%2Byq2RNeYOypdmmiRx3kXiuvXvpaz3dmuPSJgNO6mqXgld4CTxn49KciaD3Ujgc%2FLZ8ZTF4aNdRd0Xi0%2FURytWemfGaW%2BbXY8E4M&X-Amz-Signature=0ed7ea849e50fbce085fba39eed92dd0bb27af9f35f6f6332f4a533cc6dcef83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAN7OEZR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG41WMj73lSAYFyfNjoV8pBjjNf1d7A7OzNdfsIIP%2Fr%2BAiAEP%2Ft2Gu5N4hPy%2B%2BFtH%2Fat%2FU%2BuOrLqiyGnIcUYhmuvHir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM249DWye13QtHfH13KtwDabnVpiSBbiBvQZEKwkysEx73yMQwDHjFd6TY6tAWzNTUBFa7S8bwleXDNsukf4YG%2FJ1sPX6PlQEWhHVWsc0RWou4ile2Dk2uV4E3IierfLsUTwJwujsNs21ZHzhsdpr9SYjOfmV6lBW5vHx7fnbKd30X6dVkIKI1l3v2KQnjiXoO%2B%2BehHnyhV8TxJDa5rZ3avInWBgbLtc%2FhQwgfLsnaEzWG8xSEebd0PJAWCW2wTJ5gB%2BKv2MlArVXDMxUWlkhayIFP7jsW0s41KqXGFXQT4eXAMDS%2BSlLRw2NpxB6DoHwr0fjOJegEohDF6I60Yq1Z%2FsPQWh0HjYZxbeP8sFYK2fIc7a%2FxZYIlc%2FH0D9lpKpXmTEFcU2C%2FCSm7N6081wM4sC7CuOSYftXmIOqDBVTW9FuUisLONWFx7TQMmdaU9WGgja9WCyY3j3AJLD9N7OpQCZabOTmQAoyEU0amns0h6LzGXMeTE%2BJi%2BeEaUcxb29ba2Q9gZLxJw%2BVMGEmXMcfdhC%2B6yu3lzr2kPi6rzsUC3tZuha0Qa%2BrlECbgOAt6o8BaraqLBjkf%2BR7HjIL9w3UKBiU3BtzQU1xrKZwKdKhWHntxd6llYQ1BERN%2BRRm1Yc4jDSdOu2gJof1O4p4wiYbwxAY6pgGt64Z2mesczIyplMB%2BIZ8em5BYl8BGtue8VWmN5CK%2BRMIfR5T1vEKHSnyGa60yQLIvzBx%2BKHkpE2UWu9BqbqPvgCjNZa7XUYu2Ul2KK3o6jWjjuBUHTDoxDEGwk%2Byq2RNeYOypdmmiRx3kXiuvXvpaz3dmuPSJgNO6mqXgld4CTxn49KciaD3Ujgc%2FLZ8ZTF4aNdRd0Xi0%2FURytWemfGaW%2BbXY8E4M&X-Amz-Signature=30754b0335ed13184d42fe97a84fbc1659536bd00728639419a43651dbdf6a3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAN7OEZR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG41WMj73lSAYFyfNjoV8pBjjNf1d7A7OzNdfsIIP%2Fr%2BAiAEP%2Ft2Gu5N4hPy%2B%2BFtH%2Fat%2FU%2BuOrLqiyGnIcUYhmuvHir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM249DWye13QtHfH13KtwDabnVpiSBbiBvQZEKwkysEx73yMQwDHjFd6TY6tAWzNTUBFa7S8bwleXDNsukf4YG%2FJ1sPX6PlQEWhHVWsc0RWou4ile2Dk2uV4E3IierfLsUTwJwujsNs21ZHzhsdpr9SYjOfmV6lBW5vHx7fnbKd30X6dVkIKI1l3v2KQnjiXoO%2B%2BehHnyhV8TxJDa5rZ3avInWBgbLtc%2FhQwgfLsnaEzWG8xSEebd0PJAWCW2wTJ5gB%2BKv2MlArVXDMxUWlkhayIFP7jsW0s41KqXGFXQT4eXAMDS%2BSlLRw2NpxB6DoHwr0fjOJegEohDF6I60Yq1Z%2FsPQWh0HjYZxbeP8sFYK2fIc7a%2FxZYIlc%2FH0D9lpKpXmTEFcU2C%2FCSm7N6081wM4sC7CuOSYftXmIOqDBVTW9FuUisLONWFx7TQMmdaU9WGgja9WCyY3j3AJLD9N7OpQCZabOTmQAoyEU0amns0h6LzGXMeTE%2BJi%2BeEaUcxb29ba2Q9gZLxJw%2BVMGEmXMcfdhC%2B6yu3lzr2kPi6rzsUC3tZuha0Qa%2BrlECbgOAt6o8BaraqLBjkf%2BR7HjIL9w3UKBiU3BtzQU1xrKZwKdKhWHntxd6llYQ1BERN%2BRRm1Yc4jDSdOu2gJof1O4p4wiYbwxAY6pgGt64Z2mesczIyplMB%2BIZ8em5BYl8BGtue8VWmN5CK%2BRMIfR5T1vEKHSnyGa60yQLIvzBx%2BKHkpE2UWu9BqbqPvgCjNZa7XUYu2Ul2KK3o6jWjjuBUHTDoxDEGwk%2Byq2RNeYOypdmmiRx3kXiuvXvpaz3dmuPSJgNO6mqXgld4CTxn49KciaD3Ujgc%2FLZ8ZTF4aNdRd0Xi0%2FURytWemfGaW%2BbXY8E4M&X-Amz-Signature=0cdc26ab884ccc7985db0c8174da946fcbfd29c2413fac45a4d5e37d787ba690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAN7OEZR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG41WMj73lSAYFyfNjoV8pBjjNf1d7A7OzNdfsIIP%2Fr%2BAiAEP%2Ft2Gu5N4hPy%2B%2BFtH%2Fat%2FU%2BuOrLqiyGnIcUYhmuvHir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM249DWye13QtHfH13KtwDabnVpiSBbiBvQZEKwkysEx73yMQwDHjFd6TY6tAWzNTUBFa7S8bwleXDNsukf4YG%2FJ1sPX6PlQEWhHVWsc0RWou4ile2Dk2uV4E3IierfLsUTwJwujsNs21ZHzhsdpr9SYjOfmV6lBW5vHx7fnbKd30X6dVkIKI1l3v2KQnjiXoO%2B%2BehHnyhV8TxJDa5rZ3avInWBgbLtc%2FhQwgfLsnaEzWG8xSEebd0PJAWCW2wTJ5gB%2BKv2MlArVXDMxUWlkhayIFP7jsW0s41KqXGFXQT4eXAMDS%2BSlLRw2NpxB6DoHwr0fjOJegEohDF6I60Yq1Z%2FsPQWh0HjYZxbeP8sFYK2fIc7a%2FxZYIlc%2FH0D9lpKpXmTEFcU2C%2FCSm7N6081wM4sC7CuOSYftXmIOqDBVTW9FuUisLONWFx7TQMmdaU9WGgja9WCyY3j3AJLD9N7OpQCZabOTmQAoyEU0amns0h6LzGXMeTE%2BJi%2BeEaUcxb29ba2Q9gZLxJw%2BVMGEmXMcfdhC%2B6yu3lzr2kPi6rzsUC3tZuha0Qa%2BrlECbgOAt6o8BaraqLBjkf%2BR7HjIL9w3UKBiU3BtzQU1xrKZwKdKhWHntxd6llYQ1BERN%2BRRm1Yc4jDSdOu2gJof1O4p4wiYbwxAY6pgGt64Z2mesczIyplMB%2BIZ8em5BYl8BGtue8VWmN5CK%2BRMIfR5T1vEKHSnyGa60yQLIvzBx%2BKHkpE2UWu9BqbqPvgCjNZa7XUYu2Ul2KK3o6jWjjuBUHTDoxDEGwk%2Byq2RNeYOypdmmiRx3kXiuvXvpaz3dmuPSJgNO6mqXgld4CTxn49KciaD3Ujgc%2FLZ8ZTF4aNdRd0Xi0%2FURytWemfGaW%2BbXY8E4M&X-Amz-Signature=292a60b10c2694881c4a2c1d13b9644fd12bdda5e5c0e0f1feb8850d7ea0202f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAN7OEZR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG41WMj73lSAYFyfNjoV8pBjjNf1d7A7OzNdfsIIP%2Fr%2BAiAEP%2Ft2Gu5N4hPy%2B%2BFtH%2Fat%2FU%2BuOrLqiyGnIcUYhmuvHir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM249DWye13QtHfH13KtwDabnVpiSBbiBvQZEKwkysEx73yMQwDHjFd6TY6tAWzNTUBFa7S8bwleXDNsukf4YG%2FJ1sPX6PlQEWhHVWsc0RWou4ile2Dk2uV4E3IierfLsUTwJwujsNs21ZHzhsdpr9SYjOfmV6lBW5vHx7fnbKd30X6dVkIKI1l3v2KQnjiXoO%2B%2BehHnyhV8TxJDa5rZ3avInWBgbLtc%2FhQwgfLsnaEzWG8xSEebd0PJAWCW2wTJ5gB%2BKv2MlArVXDMxUWlkhayIFP7jsW0s41KqXGFXQT4eXAMDS%2BSlLRw2NpxB6DoHwr0fjOJegEohDF6I60Yq1Z%2FsPQWh0HjYZxbeP8sFYK2fIc7a%2FxZYIlc%2FH0D9lpKpXmTEFcU2C%2FCSm7N6081wM4sC7CuOSYftXmIOqDBVTW9FuUisLONWFx7TQMmdaU9WGgja9WCyY3j3AJLD9N7OpQCZabOTmQAoyEU0amns0h6LzGXMeTE%2BJi%2BeEaUcxb29ba2Q9gZLxJw%2BVMGEmXMcfdhC%2B6yu3lzr2kPi6rzsUC3tZuha0Qa%2BrlECbgOAt6o8BaraqLBjkf%2BR7HjIL9w3UKBiU3BtzQU1xrKZwKdKhWHntxd6llYQ1BERN%2BRRm1Yc4jDSdOu2gJof1O4p4wiYbwxAY6pgGt64Z2mesczIyplMB%2BIZ8em5BYl8BGtue8VWmN5CK%2BRMIfR5T1vEKHSnyGa60yQLIvzBx%2BKHkpE2UWu9BqbqPvgCjNZa7XUYu2Ul2KK3o6jWjjuBUHTDoxDEGwk%2Byq2RNeYOypdmmiRx3kXiuvXvpaz3dmuPSJgNO6mqXgld4CTxn49KciaD3Ujgc%2FLZ8ZTF4aNdRd0Xi0%2FURytWemfGaW%2BbXY8E4M&X-Amz-Signature=40539704fb3ed643938346f844d0ea70d70896040e474913eadcd27fbca2e3ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAN7OEZR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG41WMj73lSAYFyfNjoV8pBjjNf1d7A7OzNdfsIIP%2Fr%2BAiAEP%2Ft2Gu5N4hPy%2B%2BFtH%2Fat%2FU%2BuOrLqiyGnIcUYhmuvHir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM249DWye13QtHfH13KtwDabnVpiSBbiBvQZEKwkysEx73yMQwDHjFd6TY6tAWzNTUBFa7S8bwleXDNsukf4YG%2FJ1sPX6PlQEWhHVWsc0RWou4ile2Dk2uV4E3IierfLsUTwJwujsNs21ZHzhsdpr9SYjOfmV6lBW5vHx7fnbKd30X6dVkIKI1l3v2KQnjiXoO%2B%2BehHnyhV8TxJDa5rZ3avInWBgbLtc%2FhQwgfLsnaEzWG8xSEebd0PJAWCW2wTJ5gB%2BKv2MlArVXDMxUWlkhayIFP7jsW0s41KqXGFXQT4eXAMDS%2BSlLRw2NpxB6DoHwr0fjOJegEohDF6I60Yq1Z%2FsPQWh0HjYZxbeP8sFYK2fIc7a%2FxZYIlc%2FH0D9lpKpXmTEFcU2C%2FCSm7N6081wM4sC7CuOSYftXmIOqDBVTW9FuUisLONWFx7TQMmdaU9WGgja9WCyY3j3AJLD9N7OpQCZabOTmQAoyEU0amns0h6LzGXMeTE%2BJi%2BeEaUcxb29ba2Q9gZLxJw%2BVMGEmXMcfdhC%2B6yu3lzr2kPi6rzsUC3tZuha0Qa%2BrlECbgOAt6o8BaraqLBjkf%2BR7HjIL9w3UKBiU3BtzQU1xrKZwKdKhWHntxd6llYQ1BERN%2BRRm1Yc4jDSdOu2gJof1O4p4wiYbwxAY6pgGt64Z2mesczIyplMB%2BIZ8em5BYl8BGtue8VWmN5CK%2BRMIfR5T1vEKHSnyGa60yQLIvzBx%2BKHkpE2UWu9BqbqPvgCjNZa7XUYu2Ul2KK3o6jWjjuBUHTDoxDEGwk%2Byq2RNeYOypdmmiRx3kXiuvXvpaz3dmuPSJgNO6mqXgld4CTxn49KciaD3Ujgc%2FLZ8ZTF4aNdRd0Xi0%2FURytWemfGaW%2BbXY8E4M&X-Amz-Signature=86d4e956b5228e21714d508eb50febfc7a38bf198c58d7e5ca3ed09672330def&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAN7OEZR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG41WMj73lSAYFyfNjoV8pBjjNf1d7A7OzNdfsIIP%2Fr%2BAiAEP%2Ft2Gu5N4hPy%2B%2BFtH%2Fat%2FU%2BuOrLqiyGnIcUYhmuvHir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM249DWye13QtHfH13KtwDabnVpiSBbiBvQZEKwkysEx73yMQwDHjFd6TY6tAWzNTUBFa7S8bwleXDNsukf4YG%2FJ1sPX6PlQEWhHVWsc0RWou4ile2Dk2uV4E3IierfLsUTwJwujsNs21ZHzhsdpr9SYjOfmV6lBW5vHx7fnbKd30X6dVkIKI1l3v2KQnjiXoO%2B%2BehHnyhV8TxJDa5rZ3avInWBgbLtc%2FhQwgfLsnaEzWG8xSEebd0PJAWCW2wTJ5gB%2BKv2MlArVXDMxUWlkhayIFP7jsW0s41KqXGFXQT4eXAMDS%2BSlLRw2NpxB6DoHwr0fjOJegEohDF6I60Yq1Z%2FsPQWh0HjYZxbeP8sFYK2fIc7a%2FxZYIlc%2FH0D9lpKpXmTEFcU2C%2FCSm7N6081wM4sC7CuOSYftXmIOqDBVTW9FuUisLONWFx7TQMmdaU9WGgja9WCyY3j3AJLD9N7OpQCZabOTmQAoyEU0amns0h6LzGXMeTE%2BJi%2BeEaUcxb29ba2Q9gZLxJw%2BVMGEmXMcfdhC%2B6yu3lzr2kPi6rzsUC3tZuha0Qa%2BrlECbgOAt6o8BaraqLBjkf%2BR7HjIL9w3UKBiU3BtzQU1xrKZwKdKhWHntxd6llYQ1BERN%2BRRm1Yc4jDSdOu2gJof1O4p4wiYbwxAY6pgGt64Z2mesczIyplMB%2BIZ8em5BYl8BGtue8VWmN5CK%2BRMIfR5T1vEKHSnyGa60yQLIvzBx%2BKHkpE2UWu9BqbqPvgCjNZa7XUYu2Ul2KK3o6jWjjuBUHTDoxDEGwk%2Byq2RNeYOypdmmiRx3kXiuvXvpaz3dmuPSJgNO6mqXgld4CTxn49KciaD3Ujgc%2FLZ8ZTF4aNdRd0Xi0%2FURytWemfGaW%2BbXY8E4M&X-Amz-Signature=1df2aa62f894c9ae1da56ec733f4b42a7f4746ef5bf20d9abc6d5af7fe9728b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAN7OEZR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG41WMj73lSAYFyfNjoV8pBjjNf1d7A7OzNdfsIIP%2Fr%2BAiAEP%2Ft2Gu5N4hPy%2B%2BFtH%2Fat%2FU%2BuOrLqiyGnIcUYhmuvHir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM249DWye13QtHfH13KtwDabnVpiSBbiBvQZEKwkysEx73yMQwDHjFd6TY6tAWzNTUBFa7S8bwleXDNsukf4YG%2FJ1sPX6PlQEWhHVWsc0RWou4ile2Dk2uV4E3IierfLsUTwJwujsNs21ZHzhsdpr9SYjOfmV6lBW5vHx7fnbKd30X6dVkIKI1l3v2KQnjiXoO%2B%2BehHnyhV8TxJDa5rZ3avInWBgbLtc%2FhQwgfLsnaEzWG8xSEebd0PJAWCW2wTJ5gB%2BKv2MlArVXDMxUWlkhayIFP7jsW0s41KqXGFXQT4eXAMDS%2BSlLRw2NpxB6DoHwr0fjOJegEohDF6I60Yq1Z%2FsPQWh0HjYZxbeP8sFYK2fIc7a%2FxZYIlc%2FH0D9lpKpXmTEFcU2C%2FCSm7N6081wM4sC7CuOSYftXmIOqDBVTW9FuUisLONWFx7TQMmdaU9WGgja9WCyY3j3AJLD9N7OpQCZabOTmQAoyEU0amns0h6LzGXMeTE%2BJi%2BeEaUcxb29ba2Q9gZLxJw%2BVMGEmXMcfdhC%2B6yu3lzr2kPi6rzsUC3tZuha0Qa%2BrlECbgOAt6o8BaraqLBjkf%2BR7HjIL9w3UKBiU3BtzQU1xrKZwKdKhWHntxd6llYQ1BERN%2BRRm1Yc4jDSdOu2gJof1O4p4wiYbwxAY6pgGt64Z2mesczIyplMB%2BIZ8em5BYl8BGtue8VWmN5CK%2BRMIfR5T1vEKHSnyGa60yQLIvzBx%2BKHkpE2UWu9BqbqPvgCjNZa7XUYu2Ul2KK3o6jWjjuBUHTDoxDEGwk%2Byq2RNeYOypdmmiRx3kXiuvXvpaz3dmuPSJgNO6mqXgld4CTxn49KciaD3Ujgc%2FLZ8ZTF4aNdRd0Xi0%2FURytWemfGaW%2BbXY8E4M&X-Amz-Signature=ccbf5dcb16465a7d3f635e60727ef02add6cc526751260372d2072eca2b9da95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAN7OEZR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG41WMj73lSAYFyfNjoV8pBjjNf1d7A7OzNdfsIIP%2Fr%2BAiAEP%2Ft2Gu5N4hPy%2B%2BFtH%2Fat%2FU%2BuOrLqiyGnIcUYhmuvHir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM249DWye13QtHfH13KtwDabnVpiSBbiBvQZEKwkysEx73yMQwDHjFd6TY6tAWzNTUBFa7S8bwleXDNsukf4YG%2FJ1sPX6PlQEWhHVWsc0RWou4ile2Dk2uV4E3IierfLsUTwJwujsNs21ZHzhsdpr9SYjOfmV6lBW5vHx7fnbKd30X6dVkIKI1l3v2KQnjiXoO%2B%2BehHnyhV8TxJDa5rZ3avInWBgbLtc%2FhQwgfLsnaEzWG8xSEebd0PJAWCW2wTJ5gB%2BKv2MlArVXDMxUWlkhayIFP7jsW0s41KqXGFXQT4eXAMDS%2BSlLRw2NpxB6DoHwr0fjOJegEohDF6I60Yq1Z%2FsPQWh0HjYZxbeP8sFYK2fIc7a%2FxZYIlc%2FH0D9lpKpXmTEFcU2C%2FCSm7N6081wM4sC7CuOSYftXmIOqDBVTW9FuUisLONWFx7TQMmdaU9WGgja9WCyY3j3AJLD9N7OpQCZabOTmQAoyEU0amns0h6LzGXMeTE%2BJi%2BeEaUcxb29ba2Q9gZLxJw%2BVMGEmXMcfdhC%2B6yu3lzr2kPi6rzsUC3tZuha0Qa%2BrlECbgOAt6o8BaraqLBjkf%2BR7HjIL9w3UKBiU3BtzQU1xrKZwKdKhWHntxd6llYQ1BERN%2BRRm1Yc4jDSdOu2gJof1O4p4wiYbwxAY6pgGt64Z2mesczIyplMB%2BIZ8em5BYl8BGtue8VWmN5CK%2BRMIfR5T1vEKHSnyGa60yQLIvzBx%2BKHkpE2UWu9BqbqPvgCjNZa7XUYu2Ul2KK3o6jWjjuBUHTDoxDEGwk%2Byq2RNeYOypdmmiRx3kXiuvXvpaz3dmuPSJgNO6mqXgld4CTxn49KciaD3Ujgc%2FLZ8ZTF4aNdRd0Xi0%2FURytWemfGaW%2BbXY8E4M&X-Amz-Signature=ec14491dd0bf3122c8170fd0b83d689681452ed132aa30a6e04b722e605f7e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2UINAV7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLQwP1NpB9bUYmCBVPJVq52lBrizyqR37nIWBYMnpa7QIgDRaFSt103phV4eV9dKJugbwte9yVMyqsaZ1mnKDUD9Yq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDBIMJX6onQjR1PIOECrcA1xE7NquLN4t8CjLAbp7cJPiV6NKVRAhZVTYUhpUFuu4ONdCbwkTY9XfRgbaejG5hkckDI2U9B%2FnZWcbxrAf%2BCLOovlbnoDPdmX5MU4lC1DlGp4iF%2BwyYqV61lplNfQdolwgEQsRplo05n%2BpRfUu4qBplT4wRNrhv6JwVAZSkphSzr%2FofX6%2BXUYSSf3TXBjfIyrBfcfFD7FLYSs1QlyuX1ZexzIgnZcBEmB914lFZUgxGcWUqCo9ViA1ZUl5gym0SKgLz0qQOJYHfQnfHazLnap0zqNtUgZHCRofMdDg38uUmbBbWquAxlGYInDdBCU0ZnllxlDKfRGFO11o%2FJbKh57ZQ%2BSduWCDQFhXoVLBiAu%2BtjN4084%2Fm0SA1yH5bPhUdnVyv7A10WBHfmuIxPan9ag33aUP1OXe5LuhxCo4WL3VocC8X1WTUyupjka6g%2B6it5mOBr5jtNzedJhMFw5%2FIk5l88rrXo%2FeF5o%2Bzpm5ehGg8Tt0ZN7WSw%2B64PoVifqWYC8HP%2F1WCuXbgRjj2JOvgZYVmkrqy1VGZa8qdIoA%2Bp%2FsjDvky1EpFBf7VGVnNsFeen8nh8iJqq8mP76seW%2FCPn6eo7IvfRw%2B9mplC9x803ELXSRrJh6sBwLY4rvvMIqH8MQGOqUBKAx40k%2BXO9daVN9Fg%2BO3NFG6fkh%2FUyjCIGvc1WOPZmaAVnBp1jbTca%2FmZd4YYHK9kniE5jj1uQ1xz6RNfuSLUNEigXiSKmEWkeh6qq9p%2FRdy2Se7xka%2Fj%2BhRfRBpNkmFBWRPYc8bGZjwCAcwxh1lyHfqVl9zir2y3of4xbGlrmUKkXPzfhMuTLzzSyYHj9ftB2TxKv%2FGBVw4x40mHbFKUVKijz20&X-Amz-Signature=3d0b676a415586635938ceaeb188c865bb4a651b2568a07d6e67465defa3aec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FBPV5Z7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIvnyh%2FMJy7zcy0xWOTJUpylVSCr8dsQWg4ZUkAVjTOAIhALjgJtk7a8LchDYleNVKYtgciYU6isLJbLGJYBZzAMuPKv8DCCQQABoMNjM3NDIzMTgzODA1IgyETINw7cCHM2LhbwEq3AOlBcgBqRVkUImTJ4UenRknQqoIuJJcP0365Am%2F8J2m%2F4dNNFKA7Lzsh%2BlPtEwaU1ngSsbDyxlZaVQR4XmbXrbf7sxzZIxx5dboIeHW9%2F81%2F78zdYwPqZ9Ep%2B4ruXeY3lILpEQ7FL9VXkhIkP1%2BhocKE6H9obpH30NnYg%2BOyhR1i%2BRs82ntKi7QSxHjuffWEQXrzai5TgYXE2PqUBuUODc0RtEXhnd3r7%2BCxqyIyDxKGNmwU2I30c6Su0Kg2S44vNhvjdPK67P1X6xdKPMo%2FYGPClKh81wghdx60GT%2FBQZs8xtap9FoWM9y4zE1UqNXuMg4kUXIQq%2BpyT5AZilid%2F3YOB1cj%2FZCVlHdYv4AlX4hPbMHBlYo7MUHtIefqxjABr7ozn7ixDXrF58D6HG6IPS41URwXfIjtPP%2FhGgSnF8sjOF6h1wjEoRAIMOMv9Q5rZoOt2e6Omvnmywjj03%2FyozugiCQ4mISG2RodHb06jWodIVbVShwl3%2BmYPeteu3tj0aPgYkd%2BD87y5e1PEENKaRFjMgRfWA9uBLE%2FyKJpcdGJAtwAdwHoEhOHI1CVvAfO0vWOwVBk4ztIXJxE%2FFgDwZhTCyU3ilMQSH87SLW1dDyUoPDj%2Bnm5BPFoqXPFzDKhvDEBjqkAX4TEDIaHK5kzVxzn%2BaXRwUblZyAknUcL0Uegi51MNrbXYwzhd7idqm095hVTlejgnD1bzbRbGEak14PbopaBBh%2FkOAEdnqhx5fP2qVF018lWXSwrMDhMQhiNYYUyM18%2FDN4MKZ1I8arNwrCIPoX2kMETtU1YdabzHuozruCmkoH1oQN91gjrLtj90GcV3Zzp7S6NAK14tWgroOMu3iJpgIAmGjY&X-Amz-Signature=4a4f4418e794cc95b4e3db726f0b7697053130eaa53188abcb6acff7840e705b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J2Q5BVV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCCX5sxkP9N%2FpANTHFocy0ASyN1aaXN0t%2FMbrbummt5AiEA1USIrvLWc0mn6UXEsgMHps0R51rR%2F%2FDSgl8Yw6n0nVgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDC2FwCpsD60GLwSFjircAzzelPeWyWPpJz9I5zCvOlQXq42O2t7Ln0r%2FnRYcSobH0Ik9pZxxWMsF7Z%2FFFUNDV%2FndqXJhp2hY8ce5ecGB2QXit71GJlXxlNb6mqROQFH3yiy5r1t8GFJrDFIIT41zA7sNBg7ThFoFK3BWpTCP6zKc2mpDwKSYLsZTUUEi6pSwqyMQz8YnzQzhjrioWeFGLea5Cq6bxulnl2Y2VRxSvH6354JOFYEBTk5x4n%2FPUr1AAewI%2Fv%2B2usz%2F7p%2BPsToDgQvpd3E8mnxcvsDdFcs08MLJrgcFKfrP48Ko8roEwOCNiE%2BeJNYQXHI%2FMTU%2Fw7t4BvfZKdcisFNovi56F0MTGkNLC23L2LbqPl32AsQmyRu80dvQENAipJdV8I14PL793CZELGT8v8fd6kIo3Y8DG4qfy%2BLiXuRYByk%2FBWVD7401uXHV0MUel3IapSmlvru4f4icSsnWFTKo86fR5DeBU%2FBEiLBtCzcq%2FsBxsPXXby4yDXWXKGGchzWteA7w6IsOronQsdvxo9UIl7DXXoJl8OIzxot%2B3xHXhXVJZbU4rE8Icj2CRvf5sZq1hhC0yFbVyQh2qPobJXI9%2B24BtXoeNqVjOwPVxZQZRar7VoIPYYmBqogkZcdFgGjhtSC5MJSH8MQGOqUBITeLSJ6ztDWMWk37VGGXSzpunnRTKYhKspd6ht6kFI5EcaDEGASoe8J%2BUwkVAddq%2Bdb2iCW2SuK8JGtr2L9W2hgYmF%2BFSVsSs6jdT0qU8uMaC8ptBJXYn3Bb6tBIoe%2B7NqtMWB%2FnKona%2FwoKIEIq9KMCEBgMRwYgMY8Mbcc1aiKFSDWdN6OkJb5%2Ful5aXol8Xmlvl%2FdWGHAoZNI2%2BLYfipVFTI4M&X-Amz-Signature=635e00870a11d744c8a5022a3e856b8ac67a45af327208012ca3e9017de9e75b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAN7OEZR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG41WMj73lSAYFyfNjoV8pBjjNf1d7A7OzNdfsIIP%2Fr%2BAiAEP%2Ft2Gu5N4hPy%2B%2BFtH%2Fat%2FU%2BuOrLqiyGnIcUYhmuvHir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM249DWye13QtHfH13KtwDabnVpiSBbiBvQZEKwkysEx73yMQwDHjFd6TY6tAWzNTUBFa7S8bwleXDNsukf4YG%2FJ1sPX6PlQEWhHVWsc0RWou4ile2Dk2uV4E3IierfLsUTwJwujsNs21ZHzhsdpr9SYjOfmV6lBW5vHx7fnbKd30X6dVkIKI1l3v2KQnjiXoO%2B%2BehHnyhV8TxJDa5rZ3avInWBgbLtc%2FhQwgfLsnaEzWG8xSEebd0PJAWCW2wTJ5gB%2BKv2MlArVXDMxUWlkhayIFP7jsW0s41KqXGFXQT4eXAMDS%2BSlLRw2NpxB6DoHwr0fjOJegEohDF6I60Yq1Z%2FsPQWh0HjYZxbeP8sFYK2fIc7a%2FxZYIlc%2FH0D9lpKpXmTEFcU2C%2FCSm7N6081wM4sC7CuOSYftXmIOqDBVTW9FuUisLONWFx7TQMmdaU9WGgja9WCyY3j3AJLD9N7OpQCZabOTmQAoyEU0amns0h6LzGXMeTE%2BJi%2BeEaUcxb29ba2Q9gZLxJw%2BVMGEmXMcfdhC%2B6yu3lzr2kPi6rzsUC3tZuha0Qa%2BrlECbgOAt6o8BaraqLBjkf%2BR7HjIL9w3UKBiU3BtzQU1xrKZwKdKhWHntxd6llYQ1BERN%2BRRm1Yc4jDSdOu2gJof1O4p4wiYbwxAY6pgGt64Z2mesczIyplMB%2BIZ8em5BYl8BGtue8VWmN5CK%2BRMIfR5T1vEKHSnyGa60yQLIvzBx%2BKHkpE2UWu9BqbqPvgCjNZa7XUYu2Ul2KK3o6jWjjuBUHTDoxDEGwk%2Byq2RNeYOypdmmiRx3kXiuvXvpaz3dmuPSJgNO6mqXgld4CTxn49KciaD3Ujgc%2FLZ8ZTF4aNdRd0Xi0%2FURytWemfGaW%2BbXY8E4M&X-Amz-Signature=d0e2bff9cbbf1d03162c44a00dd83d3f84ab7af26ade28e913c4a4e976d8e1ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIHP6YQH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4IBUbA42vWYeYxj4Dc%2FGPH%2F9MQXijanGI9FSRf9r6BAiA3HkIDdjil9icxsA3XsEWbtf%2BWPR9x%2BAmuFzuHP0eDTSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMjvD5xLQLM5NtivCrKtwDszEn4VUmok0hDVP6qYYcfSHx8VNWr%2FgV5PFnzs8MItvh331%2Fuc7tf%2B4mVvF7mcMfGLHunXEQjGYT4vQCf1oFBYzU0aAyCiRKERrK4vbQXLC7pltZsA3LO16RQGusMRXSaDV3rgFw1vV2MjeK3dIQdCKpR5mnzwn1V07hYdcBWNUx%2Bq%2F7HcGUXBVxMmNwDtiRuuKbbg4D1p0fgxhjoSN7Gh17i3bcL3M18E3zUKxVn3vZrqFUjpzyjZrg%2Bn8Fgw0lPxlN7Rivph3B4ri9U3K8%2FpoSP42Y%2FV%2FSIQo20Ybe%2F9IkTOeLPcr9y35fq%2BJJKR2WT61j8oqNVNTXLCtgMmxv%2BF5QF6KVuvosYLlCXzHAEmCutu11RYSOjiJnzQ0OsUtHT39IULedxDgTpyY%2FCE708UW%2FyBCReP%2FpLnT3S8Qz44l%2FRR3cV7biT8UVa38PkYjBFf6O2YhBqpFxDabQPAJGn79RzdyPP%2BVPoN%2BNgAeBAxIrLXOhawQ6epKTJOJrZ37j8dJMyeufjPAR77ZB1gNEGAcCSshfj5BPe2jtRmkYh%2FvbupgjAwa%2FdBChI0T1IL2UCzJkNBQVsUHX%2BmCgzVVhj9hzLPYN8bsw4dzlbMKtEZ85q5Mk%2F5RTTZn%2BrpcwgYfwxAY6pgFTtehJ%2FGq8jcBxk4t6NpuPmN9uWlzqmAklXagtpdO%2B5M8IPApa4LiuB6sp02weRRd5eiLKgbyIw5lxrudK8jgBVsikjq5h4Yx0uL381cahvyxqPOlLwajvRxocDSLrWvoLZ4bzgIMm8PmtbUuUqCdzIkS%2Bwbc8UGXJN%2BcH9W%2FOpAYae43Ew%2FrTLad9u%2FVdqzdeGjaOTSrrMxXCsdXao2heRoQJra8z&X-Amz-Signature=13c84f1ddd2bf5be287fbc3059adff4ba31447c1556331220830985214d235bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAN7OEZR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG41WMj73lSAYFyfNjoV8pBjjNf1d7A7OzNdfsIIP%2Fr%2BAiAEP%2Ft2Gu5N4hPy%2B%2BFtH%2Fat%2FU%2BuOrLqiyGnIcUYhmuvHir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM249DWye13QtHfH13KtwDabnVpiSBbiBvQZEKwkysEx73yMQwDHjFd6TY6tAWzNTUBFa7S8bwleXDNsukf4YG%2FJ1sPX6PlQEWhHVWsc0RWou4ile2Dk2uV4E3IierfLsUTwJwujsNs21ZHzhsdpr9SYjOfmV6lBW5vHx7fnbKd30X6dVkIKI1l3v2KQnjiXoO%2B%2BehHnyhV8TxJDa5rZ3avInWBgbLtc%2FhQwgfLsnaEzWG8xSEebd0PJAWCW2wTJ5gB%2BKv2MlArVXDMxUWlkhayIFP7jsW0s41KqXGFXQT4eXAMDS%2BSlLRw2NpxB6DoHwr0fjOJegEohDF6I60Yq1Z%2FsPQWh0HjYZxbeP8sFYK2fIc7a%2FxZYIlc%2FH0D9lpKpXmTEFcU2C%2FCSm7N6081wM4sC7CuOSYftXmIOqDBVTW9FuUisLONWFx7TQMmdaU9WGgja9WCyY3j3AJLD9N7OpQCZabOTmQAoyEU0amns0h6LzGXMeTE%2BJi%2BeEaUcxb29ba2Q9gZLxJw%2BVMGEmXMcfdhC%2B6yu3lzr2kPi6rzsUC3tZuha0Qa%2BrlECbgOAt6o8BaraqLBjkf%2BR7HjIL9w3UKBiU3BtzQU1xrKZwKdKhWHntxd6llYQ1BERN%2BRRm1Yc4jDSdOu2gJof1O4p4wiYbwxAY6pgGt64Z2mesczIyplMB%2BIZ8em5BYl8BGtue8VWmN5CK%2BRMIfR5T1vEKHSnyGa60yQLIvzBx%2BKHkpE2UWu9BqbqPvgCjNZa7XUYu2Ul2KK3o6jWjjuBUHTDoxDEGwk%2Byq2RNeYOypdmmiRx3kXiuvXvpaz3dmuPSJgNO6mqXgld4CTxn49KciaD3Ujgc%2FLZ8ZTF4aNdRd0Xi0%2FURytWemfGaW%2BbXY8E4M&X-Amz-Signature=abd422ebb9facd5143bb02f141e23b2dc7243f10383f00671acaeb92169ce2ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HIFBY3E%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDVTBMjD2lmPQg0l%2FM1lSB2pUrzKTSPbfun%2FqSidXeoTAiA0g875MqAFDv2u7NjOgQPsvtfbZu3pZwsj2Q7RhzX%2FFyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM5Ofk3kuXsVBBRD4FKtwDrBGmnqnGxqwnDyZn96bAO%2BUYVo0R0UUej8wsG7w6kAl%2BamwyE6EML4%2F0zWKk5SLkW2V328obsDSi7BC9rtgTJ8HXiYHhJ7tMyiX8FiMDsWfplbqWYIBcr9kR9OcCcDSeDmiXnulhQ%2F7b93X2QMQusLBtEGo8BjRj3Vr2TfMzjZ%2BsivufnROxmQhYpSDZJZWIHi0kaL0WfdtnaZ%2FbH9uZBhtJrw%2FsFMxqMdPhaYOcKG5JCjUznEHzqrbhB8Fsl2%2BmcSUZKAoApSuaOaULlOs90QzS%2ByvmaZicl%2FIzy3WrqbCeDSHsOHkMrruEundGtjOQSCzMihTnOeK6hM%2B25kYGeKkmL6rV75R5uuXpqZvTZF3vBgkVYBoYUcO0fQEIWgMZV%2BhFdp8hHo85ua%2FBUf3qKTY8hhds5qpjkEnumUsISOJ537VimK6d3X8BdD%2FEdOSPnJHfVloLIFIxDK3c6Ygs5rWno1nJzW%2BVXDgA6WahfQcyVnbiNzPNGUj9GWCSynwBNiXkEJ6i9His25piUMHLQfu5aKdMXMLRyNWyjbARlFEXs7WQztl2xzacuFDTdjImVZZ%2FUafQ2%2FQPiQak9O9kCsPkg2ANYTuisFTE%2FsN4o1l4iLb0gUm04onKsbww9YbwxAY6pgFxPEmKgmd6I81wAOnGLgCOzMRffJuCDSP2ta8o5J7BChHD0%2B3MP%2BXXO4MEm%2B1V1c8IhEeXDsd0dwsvNdjrOKX7xU9Md%2FRtEogRnPgZtcULdtEXVFqByK7C77MkynwUL5BRfrINm6FFBtpoA5%2Fj9DouqOheHyYdST6wQrK3wv32jQrhy9EqPOU7pPOV2eYK%2BDBr9d8oMMTp9HPGg%2BFq3LEbEQw93Io6&X-Amz-Signature=5cdc8ea3e2affe3fc9fae7c1f5dc74ee5bab73975b75fc517ea28a481f8d59e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAN7OEZR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG41WMj73lSAYFyfNjoV8pBjjNf1d7A7OzNdfsIIP%2Fr%2BAiAEP%2Ft2Gu5N4hPy%2B%2BFtH%2Fat%2FU%2BuOrLqiyGnIcUYhmuvHir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM249DWye13QtHfH13KtwDabnVpiSBbiBvQZEKwkysEx73yMQwDHjFd6TY6tAWzNTUBFa7S8bwleXDNsukf4YG%2FJ1sPX6PlQEWhHVWsc0RWou4ile2Dk2uV4E3IierfLsUTwJwujsNs21ZHzhsdpr9SYjOfmV6lBW5vHx7fnbKd30X6dVkIKI1l3v2KQnjiXoO%2B%2BehHnyhV8TxJDa5rZ3avInWBgbLtc%2FhQwgfLsnaEzWG8xSEebd0PJAWCW2wTJ5gB%2BKv2MlArVXDMxUWlkhayIFP7jsW0s41KqXGFXQT4eXAMDS%2BSlLRw2NpxB6DoHwr0fjOJegEohDF6I60Yq1Z%2FsPQWh0HjYZxbeP8sFYK2fIc7a%2FxZYIlc%2FH0D9lpKpXmTEFcU2C%2FCSm7N6081wM4sC7CuOSYftXmIOqDBVTW9FuUisLONWFx7TQMmdaU9WGgja9WCyY3j3AJLD9N7OpQCZabOTmQAoyEU0amns0h6LzGXMeTE%2BJi%2BeEaUcxb29ba2Q9gZLxJw%2BVMGEmXMcfdhC%2B6yu3lzr2kPi6rzsUC3tZuha0Qa%2BrlECbgOAt6o8BaraqLBjkf%2BR7HjIL9w3UKBiU3BtzQU1xrKZwKdKhWHntxd6llYQ1BERN%2BRRm1Yc4jDSdOu2gJof1O4p4wiYbwxAY6pgGt64Z2mesczIyplMB%2BIZ8em5BYl8BGtue8VWmN5CK%2BRMIfR5T1vEKHSnyGa60yQLIvzBx%2BKHkpE2UWu9BqbqPvgCjNZa7XUYu2Ul2KK3o6jWjjuBUHTDoxDEGwk%2Byq2RNeYOypdmmiRx3kXiuvXvpaz3dmuPSJgNO6mqXgld4CTxn49KciaD3Ujgc%2FLZ8ZTF4aNdRd0Xi0%2FURytWemfGaW%2BbXY8E4M&X-Amz-Signature=06f5b6aba0e96232259cc8800b0cc10255225ec4b8a57eb17e2837c791e5c9e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644VVKR7A%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfPb03Hf%2FESYYKoneW8Bn%2F8pgIZO4sHZ0g2vUv0RvwfAiB1qAizIR5XjgXTrBmoxmh239PnvzRUSAUVHMNgv%2BPm3Sr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM7aYQWw0vPEZWIEbMKtwDBW1TklUSLEXlBrZ7EP%2FYdIw6GWMrxKn0BPQ5KYH%2BoJA66QQB46F76s%2BLdgpTIFIwG0E%2FHrTo9pmnCxzVS44Z2v1U%2Bs%2FgyiQFQua2ktPNDAhzQMcIAsLammV5gqQX7vkRiIZKk4E8TgCiMFXLtTG4SMsX%2F8fwnVCWPqdKZnJDk9xAuKTGxD%2FyWea9zxJautBqyCH4YUG%2FKMrZB%2BKtDhlOJRg%2FX4qwh89ryZGp34I%2B%2BAA8HW0AcuBbVzh3ka2U25YQ4Geb56jplUsD2o7h7VArY6bh3cPu2D3%2Bv%2B8qILUmbg5PJyAdineqtRZaDdnwrRC2eEKJKDaOeiJs2pq%2F8ADXYWgl4McpgCiQJrhvNuBdWzPg5iO7Xeciar5PB7PGjtFGZo6A995n3IlLL7zVgdY2ybp68Rd4SdrumVN%2BwvMqGFQU%2Flmtjsyw3U8ala%2FvTmywDF%2Fu2y6AjomPRaRtVfFM2Q6RlJiWpVaG%2BkSSjiDDTdM5B6iHA4ZoBXoJcv65fH3QaQkWDF3dxmovavShQ9p1zCaktRis2NS2t5o2aL0ceEr0DXoVutMCx2O%2F9hy9ca811kmXD%2FysHngEuoVgkL1AC05M8oR4p43l85s%2BsivHj%2FR9HMvaF2RHvocvNQ8wx4bwxAY6pgFUqYPNr5gTiLKz%2BP0F7oUJy9yGNnqrivykzKbfBFtfexopSIv5fAR56T%2BaDl8GdWYVE8Gyd2rYdZHDOFVu2ZOyLjoy0iAndERnI66VQKq4Ga%2FJaPaLz76G4ZjnF8m%2FNrM4r4jpNjQ9VuMMPhikZBro1PsJIclQB3Ia%2FhDbeTD7h8edUchrDjdwX8r29zdALhfId9pyCIrOgeMUuRRMIM0%2Boz9i7rGm&X-Amz-Signature=4864e95c9f05713ac501e1dc493e2585d4e63aecd0a32091754fdd18777ce8dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAN7OEZR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG41WMj73lSAYFyfNjoV8pBjjNf1d7A7OzNdfsIIP%2Fr%2BAiAEP%2Ft2Gu5N4hPy%2B%2BFtH%2Fat%2FU%2BuOrLqiyGnIcUYhmuvHir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM249DWye13QtHfH13KtwDabnVpiSBbiBvQZEKwkysEx73yMQwDHjFd6TY6tAWzNTUBFa7S8bwleXDNsukf4YG%2FJ1sPX6PlQEWhHVWsc0RWou4ile2Dk2uV4E3IierfLsUTwJwujsNs21ZHzhsdpr9SYjOfmV6lBW5vHx7fnbKd30X6dVkIKI1l3v2KQnjiXoO%2B%2BehHnyhV8TxJDa5rZ3avInWBgbLtc%2FhQwgfLsnaEzWG8xSEebd0PJAWCW2wTJ5gB%2BKv2MlArVXDMxUWlkhayIFP7jsW0s41KqXGFXQT4eXAMDS%2BSlLRw2NpxB6DoHwr0fjOJegEohDF6I60Yq1Z%2FsPQWh0HjYZxbeP8sFYK2fIc7a%2FxZYIlc%2FH0D9lpKpXmTEFcU2C%2FCSm7N6081wM4sC7CuOSYftXmIOqDBVTW9FuUisLONWFx7TQMmdaU9WGgja9WCyY3j3AJLD9N7OpQCZabOTmQAoyEU0amns0h6LzGXMeTE%2BJi%2BeEaUcxb29ba2Q9gZLxJw%2BVMGEmXMcfdhC%2B6yu3lzr2kPi6rzsUC3tZuha0Qa%2BrlECbgOAt6o8BaraqLBjkf%2BR7HjIL9w3UKBiU3BtzQU1xrKZwKdKhWHntxd6llYQ1BERN%2BRRm1Yc4jDSdOu2gJof1O4p4wiYbwxAY6pgGt64Z2mesczIyplMB%2BIZ8em5BYl8BGtue8VWmN5CK%2BRMIfR5T1vEKHSnyGa60yQLIvzBx%2BKHkpE2UWu9BqbqPvgCjNZa7XUYu2Ul2KK3o6jWjjuBUHTDoxDEGwk%2Byq2RNeYOypdmmiRx3kXiuvXvpaz3dmuPSJgNO6mqXgld4CTxn49KciaD3Ujgc%2FLZ8ZTF4aNdRd0Xi0%2FURytWemfGaW%2BbXY8E4M&X-Amz-Signature=74d8b8088c66c297b377868716c33bd985f4824d016189ed4ed014aebfd8b517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFJBS3DF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Fq6lSsyTubV%2FoUCR5CeUPMcjdAYz1AzGhYKul3fOKhgIgaymjll%2F8VuRgifaH5ekN7aV4eEDE41GuCX9rksW0jm0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKXSanoyQaldCBTLECrcAwXEhzvTlNuHMfDgP7bc%2Bh9zWEzEHvYkqMa8e9vSzP4gkaSdW5Xbk37ZmV26uJotiJuxIIBZlIc0ZiwMrhKhRiyF%2BnY5ZwCAvkiYsfyMJ2bIdPAu12uinqD%2BwMs%2FlPcNVlZ%2Be%2F3Zr%2BY8ZtEzCjZUipcmYiaV3QBOA%2F1uwG0TncfTg%2Fd%2BglHIlUf4vB9qSRz76ga9EeflsBfyp6J5xlpwyWDz%2BeT2%2BAtIdl2fCeMI%2FhFweNCUR2s5ji6%2BINLmw3RVqwO6IKzDpnp7AgCAm7uB2bz9y8ww8I9vja3nEtByCDDTHxp1%2Bx5L0TTVoA0750Tal48%2FXd4g2a5BfKRsMMDV3IXTltoPzW2wkWWs7rvG0NPpD1FdFLxuodGFWqHSAdqJDbz31LKdpwLpipjR%2BoC7eiKhwY5mfzNIqxylhZGklyU7eVm3O7Hs9EzRPmMzdxv%2BDGKz0H5RGzG2UDV6HOtZQRqp1mYvIAfElKQrYBExt4TTOqXqexTMajQNCwOne0%2BYxh1IZwd8e8dJQlWzxEWKer7BWyqDvLvBvP%2FfGfTpf6oZQ2VeVzjShBlzafDUIsHb54F4jtqONXm7zyxMUqyJCoDkQitL0IW5bvHkn4Q76PN8Y%2FWBGeNGnT0MYklsMLaG8MQGOqUBg6NzZU%2BhQZUGSbhjeKS1zuG8BIfHpJmp%2BKAKNNpps18uvlTvYAu5EmtzAg9UGCEZXj2XOViMxAw757cLXgCQ3O9kKY6N3WihAjR%2FGFyETNQW3ejhmHhr0w5EyQd5B4MenFEX2bdQ7ldB4rtuOp2NmxO3aoFlQ9KwXvCkEcNIy3%2B9toLX61TPdCFBQDKYFe6nROl%2FlSAW%2BCI0HVR2oolLVugsu8Jm&X-Amz-Signature=8be77cda2eaa4e91121bdb9543635e3692ff0590c0cf4baecc305bc01ba6332b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UOXH2BO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHw7I3%2BCxUV5k8arDo%2BFlNxDGmBpKY9xIolRBdSEDdLMAiEAhqR%2B1XOsIdUI3xco8XjoQ6JX4EIhBAhQu29ZMv5Zn8Mq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLmNCCFr8ZmKD%2B28BCrcA6rMFKWi3JXBye9r1d2D9F5X2EQSgcC8uyd9Xcpdn6jmEfks%2BF5BbWzqA4yi3s23SYOIXP0JCEdf7r2hZiccZsxmA%2B0fhcZdJF%2BPpvsNLrojXjPvYV%2BCQRKEtKmTafwM5I5V5APKrGGVitYDSlyRsVg%2BEsYExZVJQvEkM4W7pQBaQ52b8S3eHmcT%2BfRNw0trqPhwedLuQaakoxc1id8OKB%2BeTpMSmV3csqC6Y7y91BRkQ6OnvxzOtHLCJ7NqGmrTGxV%2FYE%2B6pRV8%2FcwkyFkFbtEp%2F1xHgBk%2FbhpJckM4fZKIrCyJw0kj7BFxOUvJd3JZ1gryOQWIgmPoLNqewk0VM9orRvknWenPVxGbRkTZAliWclPMqZIcmt83Qh3uqCgF4P1A%2BhluoFcaSOsRRFgebJxVmxcYo%2Fa9nAdloJ7SnQnQuT6LMZUAdDIr5uYzndFHgFbWmjH5cRc7Z%2BFWEq7TjJ%2FbrQNBPqTStk2DEV1pbOLl2lchUzyyqT0FQrHatLQ7wflDJWOoEMrXF2KmqQolprR2Er7R23Zv9UHCGyDgYIMu5OmvTpW2asGWVwsXZp7PzeE4fGEtmnPPpU88TIjcvVik048Yo%2BqzQgcdIMRiBQrKi5as%2F3D4Iy0VjAqyMMKG8MQGOqUBGEB2sd0JKhPdKspj%2Bmu68esr9SZNORFgOa0jox8JS%2BGBu3Dfwa%2B8Ib%2BO5N7n3InF8SC6Xf9qhR6XqYFTHkLvFQkBDMk855Pt8r6oJbItAfo0%2B8mZWlqMM9zeLoFl4p2Co14LVMAnWqPXCgoBVN%2BnaLxfUf3iRyj50hK3Vnxe3LcUOGApjeTU0%2F6dKKx7CVfqnNSL%2FmEMgso3BQk3yr68hV6%2BIw6f&X-Amz-Signature=9960824021e4fd056dd520da33dfd361f24588368008d5338b2ed8562b4fb4e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXKY6F3N%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgVZrGMytiQNm9864%2Bto7J5FDsB0QIcIMipbOmvWEhRAiEAj7SNC38gVrVFe4tKBCGH6kJjLlQgIyT6cL9%2Fnqp17Hcq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLkEBuzt3VgER5f3SircA%2FfXoDAWjoHKWWr42i%2FY0UMo4gIGJEIdZ93qPTVkiY5pkaFrTMo4YAomzwHAD5EH9Zf%2FASfKGFgkQmHJiZXtgYrFUhWW4%2F17fyF%2BhpZaSReGRTCC5zwhTQLm3XNppio%2FmBrc1%2FNpbNIJaSSHuWuBArrsR8xWl3vqOIr%2BalWikJzun3RnDpPRHHX51EcyCs5WNQu4k2ac%2F13WC2fay2q6mamBw7qPZQ9wt%2BdXQ%2FOGR1Dv9aPiL5sknUmEA7YBc9FEQ08GGTSZCNO1lV0iHA8YKojxfS5KD3bhgKg6EK0az%2FoDCVclu5bhYD3hhycuOpvH2PlvJlYQQga28MMBDsRT1HytfyaKMTzWTnznuRuwfvQ96f5UAjpZ%2FcXCpTb3UhqnF8bqd1bKGJcn%2FttkyTLWL3rA4XBBaitWN0u%2Bbvj4sHAA%2FdIawmAY7wWw9AGyQ4zwvIZ1WCfqScQrdMy05u%2BjKCc%2Bgh2l19xeDoxYzbdOhCRg8ZRFQs2rIQsOE31cyTvbBR8bPQmQoLUYbhomJoyY5qMbX2ZPsc9%2FUUNFZ7h2qLb9O%2F%2B1WhLFxmKt0ekk89k%2BCzYaBx3TsJkCYHe9VLxaiqX0x4Ei1y1pNIDrSY2oHrh7R%2Bi5436kNwTnX5c1MOqF8MQGOqUBWQ62aefGGazrRnafGfK39a91Ml5LSiRnPaqN6Uq7vfQH%2BfGJzoJYhfsd0f%2BiLP6f6HqZAPYSdNwLS8RTMF9EVj1yDXnMvJM%2Fu5%2BOw8ncjMqOZl263%2F4xva2Y9q6xZ5r4nEuz%2FcoEmKJYTux%2FZccxm3DrBnlBQhcywfyZ0Ytfszk6BN4VGKpNEXo62v%2FRlEaY7IFWo6DfwqShVC3GP9wGcqLtSk5S&X-Amz-Signature=8d52846b776d69dd3cba282754c73cbf51483c3db87afbcb2c9b44da4ab7c4e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DORIAOL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4hHcv09vz94FUGQhJV7QVoOtMNGdYEYEIAB4HSxbPBAiB%2BvgcOLtJu0ifpt3cETpF1wJ6VQLIfaWw4QgTsWWGVwSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMkWjp22jLaJry27PeKtwDCx76X8d2lTzob5Znl2zevVHDsmaWufZF7Um2c3081EG8JjrI4tGIPT5JM3Cmvj6mGbUENb94c9NBhnjytxDaIin6yEZ6SWQKa3j%2B0f4R5mlb6EnKxgEDlKJKOL5ObE%2FLaBa2%2F5NJSn1uPLJq8XtoQdMHWmsgOSG0iRixzg0%2FwXZCRWW7uvcBX7D59FNDmv3MQMrt0%2FnDv0iWU1ZVX8cFgYUC0C7oSGH4yf62LdhPDIjfR012DDiwMOz6PFSPg2r6a8UqQHilE%2Fm08ow6iV73MhfZLoFk1drr1q%2FppIP9aEoz3IDtPNAjJsaceEmhFkbQh5CbYWIBdPAPUWmuMt6UmgMQn3p%2B5AvJxyQVGA660gWO0of39dcNfqV8DxATnveFBpb0bDwZ1yeVH5WNGxehWC3c7w369hIMhXO3qMBXaXI9GLSvglpAN3yvGlR%2FLhWzg%2BzibiCpAqC2Fe9qgn5AfjLIFuakuuALxnuLlFjHJAbXA%2BXN929QrwgB6tG1MKE%2BlXfMY7b3XyXgWOXP7Lg8zOgniUIn8wL2VIdTu3WpjT2V3OGN6kFumgI1XTsPIfK1BrPJyr2vQhD3RFBNyv5uU0cX%2FHwcqcBINQVbQChxNs36dVFoNC%2FQO5r4b%2FAw64XwxAY6pgHxI9w8Ye0cS%2BhaMBd4j8Xj5W4TlnIyebF3Vb6te4ajZgIvhuTfDE%2BNT%2Fvazcz1EYwd5PGmuZ1QhPEVa4qDG4EZTkvldW0wP9ILxNo%2FfXcRrA9F6q09hKbLD%2FC69Rao6BAnJxSbpAxY5IwmrRPoWtx6UiorO5tR%2BreSm5b482wHJIc08Yxm1Y%2FC7D%2B2PgvVa6ngWhoPSUzwMVjBwas0KCqkL%2BdV6AL%2F&X-Amz-Signature=16605be3bff53981f93972272ee6ba9d9db97a32286d287da089e1b76ca855e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675L6FVLS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdT0AcjpAD%2FZo%2FLkESdjLDEYC0ZGUmtIOHk62AyUlqswIgL57GB8pquFdKQwIoCfmYf%2FNlkbyuJn6YjaGeWZdCOjAq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOoBFt0f4dmMXAvh%2BCrcA4Ai1jkQvXrn1LS0Hlz5iukjGXiUviTlPpT6xVOZG6whRoLCW8b6w91qT5Q3lsK5A7f%2BDSkG9jUhhYLDPZ6CwqEAO3d%2Ffe6AQIxY%2F59dIU%2BAIL6W97aP8KrKzeaiD9kDZXIzoC4SlQvbHsY8Ot%2Bis2Td1b5xUFx7eOyL3wn%2Ba%2Fai%2BFegUHGweCl6SHk69GeVRiIWlAR2XTeXVXX9lM37hHF2W1osM2zx9DB6g8Xfo%2Fu0iWhgHrn%2Bw2ZKLDufohGBhES9zMmMf0Ibc6FrIhKQe1JeshkHe6snFBrOjYvHRbcclS6ppdq6gyVeXwvTYEuGoaMZXH6q2o6GDaQHJaSMPM2i7mr2VIWn0kescoGr%2FDJsYiFZg4tpWkZlT%2FoNOfJOAcvOGCDgIHSFEfRWtQSpihtz4uX%2FwnVkGC7T5Ox%2FyTfnHN2OPqh2JribXI7RK4czEXVHwa53VqF0u%2BYuD%2FBNO0DlQmKBCiGfcK%2FAz5g4K%2BDyrsypanbzvvBRxei74KW9BW9CqFQFq%2FIXhSg9rNPm9KaxlzeyTrBreUEmckqpwailYBblkD9cAtUlhdovX%2FnziN6NzAnhbfwFtX4urd%2FJ3K%2FfLXZbDvBzVcjM4qCJ2sl3xUM0TFw3zOCQiWKkMKWH8MQGOqUBv63ZZE1IT5tX6fx8L0oGrd9TeGAvyCxx7FxPMZ8ZCWBg9kXouK1WGXI3YWvW1OzUbykCpJGrxGS%2Fj8c8TvHq%2BAzbVcngZtdH6vB8uWQqzLbobiMiEMlNvxwAp55HlWVcNt0fIHS7HvkX3iG2ZeCOzhPa81jY3bGs3zIX9Dy%2FHIH3IExH4ef0%2BQN35p6iFD8EckKtX88EkRUB0eFKOJUszwg%2F%2BQzq&X-Amz-Signature=a5c94811db1df9558a6ed4c734111a27c88db5101c9df459871d7b07c2361b28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAN7OEZR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG41WMj73lSAYFyfNjoV8pBjjNf1d7A7OzNdfsIIP%2Fr%2BAiAEP%2Ft2Gu5N4hPy%2B%2BFtH%2Fat%2FU%2BuOrLqiyGnIcUYhmuvHir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM249DWye13QtHfH13KtwDabnVpiSBbiBvQZEKwkysEx73yMQwDHjFd6TY6tAWzNTUBFa7S8bwleXDNsukf4YG%2FJ1sPX6PlQEWhHVWsc0RWou4ile2Dk2uV4E3IierfLsUTwJwujsNs21ZHzhsdpr9SYjOfmV6lBW5vHx7fnbKd30X6dVkIKI1l3v2KQnjiXoO%2B%2BehHnyhV8TxJDa5rZ3avInWBgbLtc%2FhQwgfLsnaEzWG8xSEebd0PJAWCW2wTJ5gB%2BKv2MlArVXDMxUWlkhayIFP7jsW0s41KqXGFXQT4eXAMDS%2BSlLRw2NpxB6DoHwr0fjOJegEohDF6I60Yq1Z%2FsPQWh0HjYZxbeP8sFYK2fIc7a%2FxZYIlc%2FH0D9lpKpXmTEFcU2C%2FCSm7N6081wM4sC7CuOSYftXmIOqDBVTW9FuUisLONWFx7TQMmdaU9WGgja9WCyY3j3AJLD9N7OpQCZabOTmQAoyEU0amns0h6LzGXMeTE%2BJi%2BeEaUcxb29ba2Q9gZLxJw%2BVMGEmXMcfdhC%2B6yu3lzr2kPi6rzsUC3tZuha0Qa%2BrlECbgOAt6o8BaraqLBjkf%2BR7HjIL9w3UKBiU3BtzQU1xrKZwKdKhWHntxd6llYQ1BERN%2BRRm1Yc4jDSdOu2gJof1O4p4wiYbwxAY6pgGt64Z2mesczIyplMB%2BIZ8em5BYl8BGtue8VWmN5CK%2BRMIfR5T1vEKHSnyGa60yQLIvzBx%2BKHkpE2UWu9BqbqPvgCjNZa7XUYu2Ul2KK3o6jWjjuBUHTDoxDEGwk%2Byq2RNeYOypdmmiRx3kXiuvXvpaz3dmuPSJgNO6mqXgld4CTxn49KciaD3Ujgc%2FLZ8ZTF4aNdRd0Xi0%2FURytWemfGaW%2BbXY8E4M&X-Amz-Signature=bbf739dad788f0fd122f0741e27366aec3cff5ec95095e4ba15c341ffae547e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAN7OEZR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG41WMj73lSAYFyfNjoV8pBjjNf1d7A7OzNdfsIIP%2Fr%2BAiAEP%2Ft2Gu5N4hPy%2B%2BFtH%2Fat%2FU%2BuOrLqiyGnIcUYhmuvHir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM249DWye13QtHfH13KtwDabnVpiSBbiBvQZEKwkysEx73yMQwDHjFd6TY6tAWzNTUBFa7S8bwleXDNsukf4YG%2FJ1sPX6PlQEWhHVWsc0RWou4ile2Dk2uV4E3IierfLsUTwJwujsNs21ZHzhsdpr9SYjOfmV6lBW5vHx7fnbKd30X6dVkIKI1l3v2KQnjiXoO%2B%2BehHnyhV8TxJDa5rZ3avInWBgbLtc%2FhQwgfLsnaEzWG8xSEebd0PJAWCW2wTJ5gB%2BKv2MlArVXDMxUWlkhayIFP7jsW0s41KqXGFXQT4eXAMDS%2BSlLRw2NpxB6DoHwr0fjOJegEohDF6I60Yq1Z%2FsPQWh0HjYZxbeP8sFYK2fIc7a%2FxZYIlc%2FH0D9lpKpXmTEFcU2C%2FCSm7N6081wM4sC7CuOSYftXmIOqDBVTW9FuUisLONWFx7TQMmdaU9WGgja9WCyY3j3AJLD9N7OpQCZabOTmQAoyEU0amns0h6LzGXMeTE%2BJi%2BeEaUcxb29ba2Q9gZLxJw%2BVMGEmXMcfdhC%2B6yu3lzr2kPi6rzsUC3tZuha0Qa%2BrlECbgOAt6o8BaraqLBjkf%2BR7HjIL9w3UKBiU3BtzQU1xrKZwKdKhWHntxd6llYQ1BERN%2BRRm1Yc4jDSdOu2gJof1O4p4wiYbwxAY6pgGt64Z2mesczIyplMB%2BIZ8em5BYl8BGtue8VWmN5CK%2BRMIfR5T1vEKHSnyGa60yQLIvzBx%2BKHkpE2UWu9BqbqPvgCjNZa7XUYu2Ul2KK3o6jWjjuBUHTDoxDEGwk%2Byq2RNeYOypdmmiRx3kXiuvXvpaz3dmuPSJgNO6mqXgld4CTxn49KciaD3Ujgc%2FLZ8ZTF4aNdRd0Xi0%2FURytWemfGaW%2BbXY8E4M&X-Amz-Signature=0d60a067f557b46844409775fb5b4a906413ed3d3f9dbf15ac769eff66e5c190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ODKHUM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICT5eEEUbNxAlOMERtT0qK20MLHU%2FaKnCp90V1nOMYEyAiEA2XaqZdeZFhJWQF6iU9X%2FkCwYwihG6mOAcBpT0ktLo0Uq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDN6%2BE7BxlEnU8PNC2CrcAzGitAXZy8CEql5x6RSLcSdhsOmxD9GkrTLPrAGTAINrM2PlUwLh%2FjDNUee3XC3n4a1%2FI2Qbs2TcaodZYreLXtET9jWZ1NsNbRgN82JkZhz5dZdUQ5PeEZpBBPl%2F4wYgOhkuJuuu9LPlfi%2BatPq%2F9lTSt7aow32x2fFe%2Fv37brysIThJTq0%2Bg9wnmXv5JPGFyL6UWgw9xqnaQUVsracmRIUZyulYwSRiO6lMAPCiP9lDrN8V3Hj5leYFd5Hf4Z6vAWXMKutA%2FuyOocyQzPCckmOKsDUsQTaDdiHPQ%2BITaMt0TO4T3Opk7nQmjMfoeQMOklYgXdhSu5lJ8PcVizG%2BiOc8eyf%2FWVYuHcIErmekBbgEJgKr%2FbJwjZuHMQKdtQ1a77qF2KOKG0xAFDT9oaGKiIoSabYGsURGnKWniQngVSZMyV2RxEBKyIBgSwJT0MahPRF7O1igZCKNJ9gAtAAq%2BPM4zugzd7GY0sfe%2Bi7qzWOTIIU53dKYorJMYKMmwU3f8a4HnFdGNM5on9KygXFZKNSOq081jddWLJFhqUQ8rs0ET2fJuzLxMqnmSqsVR2B7gZodFSkanifsxXggr1CWtSj4i2RlV6yvkhDyB6nXagAU3WmusUAM3uY%2FzFG1MI%2BH8MQGOqUB1GghyCTHZaO7giwd0OdGNRdBSkwffwRhggmwnEFwAQToDbswn4NJQRC%2BO4PVEq7blhtT8t1ZJ%2BRguKHT38J5nJhno1fxiISz18iKpcd%2F6dOPGuPyvZRJJ9bbBqjCPtO9PhyUhDh5B0Fzr0ePv0Ft1DGZjcMXfPV%2FT7Qj8oVVStqUR%2Ff%2FJKh6O4RxKEqOcb1dVoh29BD1gWJfOyyHMK9e0zINkfW6&X-Amz-Signature=4e6dbfec49f67e013b7bd308398738b000979e398706806185bd6025f7c23c17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ODKHUM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICT5eEEUbNxAlOMERtT0qK20MLHU%2FaKnCp90V1nOMYEyAiEA2XaqZdeZFhJWQF6iU9X%2FkCwYwihG6mOAcBpT0ktLo0Uq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDN6%2BE7BxlEnU8PNC2CrcAzGitAXZy8CEql5x6RSLcSdhsOmxD9GkrTLPrAGTAINrM2PlUwLh%2FjDNUee3XC3n4a1%2FI2Qbs2TcaodZYreLXtET9jWZ1NsNbRgN82JkZhz5dZdUQ5PeEZpBBPl%2F4wYgOhkuJuuu9LPlfi%2BatPq%2F9lTSt7aow32x2fFe%2Fv37brysIThJTq0%2Bg9wnmXv5JPGFyL6UWgw9xqnaQUVsracmRIUZyulYwSRiO6lMAPCiP9lDrN8V3Hj5leYFd5Hf4Z6vAWXMKutA%2FuyOocyQzPCckmOKsDUsQTaDdiHPQ%2BITaMt0TO4T3Opk7nQmjMfoeQMOklYgXdhSu5lJ8PcVizG%2BiOc8eyf%2FWVYuHcIErmekBbgEJgKr%2FbJwjZuHMQKdtQ1a77qF2KOKG0xAFDT9oaGKiIoSabYGsURGnKWniQngVSZMyV2RxEBKyIBgSwJT0MahPRF7O1igZCKNJ9gAtAAq%2BPM4zugzd7GY0sfe%2Bi7qzWOTIIU53dKYorJMYKMmwU3f8a4HnFdGNM5on9KygXFZKNSOq081jddWLJFhqUQ8rs0ET2fJuzLxMqnmSqsVR2B7gZodFSkanifsxXggr1CWtSj4i2RlV6yvkhDyB6nXagAU3WmusUAM3uY%2FzFG1MI%2BH8MQGOqUB1GghyCTHZaO7giwd0OdGNRdBSkwffwRhggmwnEFwAQToDbswn4NJQRC%2BO4PVEq7blhtT8t1ZJ%2BRguKHT38J5nJhno1fxiISz18iKpcd%2F6dOPGuPyvZRJJ9bbBqjCPtO9PhyUhDh5B0Fzr0ePv0Ft1DGZjcMXfPV%2FT7Qj8oVVStqUR%2Ff%2FJKh6O4RxKEqOcb1dVoh29BD1gWJfOyyHMK9e0zINkfW6&X-Amz-Signature=02f4ecda1eb0433d1b849357345067f7ff21deb497e0c244ba2f647e2f2e417a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ODKHUM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICT5eEEUbNxAlOMERtT0qK20MLHU%2FaKnCp90V1nOMYEyAiEA2XaqZdeZFhJWQF6iU9X%2FkCwYwihG6mOAcBpT0ktLo0Uq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDN6%2BE7BxlEnU8PNC2CrcAzGitAXZy8CEql5x6RSLcSdhsOmxD9GkrTLPrAGTAINrM2PlUwLh%2FjDNUee3XC3n4a1%2FI2Qbs2TcaodZYreLXtET9jWZ1NsNbRgN82JkZhz5dZdUQ5PeEZpBBPl%2F4wYgOhkuJuuu9LPlfi%2BatPq%2F9lTSt7aow32x2fFe%2Fv37brysIThJTq0%2Bg9wnmXv5JPGFyL6UWgw9xqnaQUVsracmRIUZyulYwSRiO6lMAPCiP9lDrN8V3Hj5leYFd5Hf4Z6vAWXMKutA%2FuyOocyQzPCckmOKsDUsQTaDdiHPQ%2BITaMt0TO4T3Opk7nQmjMfoeQMOklYgXdhSu5lJ8PcVizG%2BiOc8eyf%2FWVYuHcIErmekBbgEJgKr%2FbJwjZuHMQKdtQ1a77qF2KOKG0xAFDT9oaGKiIoSabYGsURGnKWniQngVSZMyV2RxEBKyIBgSwJT0MahPRF7O1igZCKNJ9gAtAAq%2BPM4zugzd7GY0sfe%2Bi7qzWOTIIU53dKYorJMYKMmwU3f8a4HnFdGNM5on9KygXFZKNSOq081jddWLJFhqUQ8rs0ET2fJuzLxMqnmSqsVR2B7gZodFSkanifsxXggr1CWtSj4i2RlV6yvkhDyB6nXagAU3WmusUAM3uY%2FzFG1MI%2BH8MQGOqUB1GghyCTHZaO7giwd0OdGNRdBSkwffwRhggmwnEFwAQToDbswn4NJQRC%2BO4PVEq7blhtT8t1ZJ%2BRguKHT38J5nJhno1fxiISz18iKpcd%2F6dOPGuPyvZRJJ9bbBqjCPtO9PhyUhDh5B0Fzr0ePv0Ft1DGZjcMXfPV%2FT7Qj8oVVStqUR%2Ff%2FJKh6O4RxKEqOcb1dVoh29BD1gWJfOyyHMK9e0zINkfW6&X-Amz-Signature=c73f5a0f02589890a49e60156f015438b759862bbcc1299654b5a8cb597a7cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ODKHUM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICT5eEEUbNxAlOMERtT0qK20MLHU%2FaKnCp90V1nOMYEyAiEA2XaqZdeZFhJWQF6iU9X%2FkCwYwihG6mOAcBpT0ktLo0Uq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDN6%2BE7BxlEnU8PNC2CrcAzGitAXZy8CEql5x6RSLcSdhsOmxD9GkrTLPrAGTAINrM2PlUwLh%2FjDNUee3XC3n4a1%2FI2Qbs2TcaodZYreLXtET9jWZ1NsNbRgN82JkZhz5dZdUQ5PeEZpBBPl%2F4wYgOhkuJuuu9LPlfi%2BatPq%2F9lTSt7aow32x2fFe%2Fv37brysIThJTq0%2Bg9wnmXv5JPGFyL6UWgw9xqnaQUVsracmRIUZyulYwSRiO6lMAPCiP9lDrN8V3Hj5leYFd5Hf4Z6vAWXMKutA%2FuyOocyQzPCckmOKsDUsQTaDdiHPQ%2BITaMt0TO4T3Opk7nQmjMfoeQMOklYgXdhSu5lJ8PcVizG%2BiOc8eyf%2FWVYuHcIErmekBbgEJgKr%2FbJwjZuHMQKdtQ1a77qF2KOKG0xAFDT9oaGKiIoSabYGsURGnKWniQngVSZMyV2RxEBKyIBgSwJT0MahPRF7O1igZCKNJ9gAtAAq%2BPM4zugzd7GY0sfe%2Bi7qzWOTIIU53dKYorJMYKMmwU3f8a4HnFdGNM5on9KygXFZKNSOq081jddWLJFhqUQ8rs0ET2fJuzLxMqnmSqsVR2B7gZodFSkanifsxXggr1CWtSj4i2RlV6yvkhDyB6nXagAU3WmusUAM3uY%2FzFG1MI%2BH8MQGOqUB1GghyCTHZaO7giwd0OdGNRdBSkwffwRhggmwnEFwAQToDbswn4NJQRC%2BO4PVEq7blhtT8t1ZJ%2BRguKHT38J5nJhno1fxiISz18iKpcd%2F6dOPGuPyvZRJJ9bbBqjCPtO9PhyUhDh5B0Fzr0ePv0Ft1DGZjcMXfPV%2FT7Qj8oVVStqUR%2Ff%2FJKh6O4RxKEqOcb1dVoh29BD1gWJfOyyHMK9e0zINkfW6&X-Amz-Signature=92a3e9039a27d17015925916044969a161d34c0439d3e09a9222f8a53b7280dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ODKHUM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICT5eEEUbNxAlOMERtT0qK20MLHU%2FaKnCp90V1nOMYEyAiEA2XaqZdeZFhJWQF6iU9X%2FkCwYwihG6mOAcBpT0ktLo0Uq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDN6%2BE7BxlEnU8PNC2CrcAzGitAXZy8CEql5x6RSLcSdhsOmxD9GkrTLPrAGTAINrM2PlUwLh%2FjDNUee3XC3n4a1%2FI2Qbs2TcaodZYreLXtET9jWZ1NsNbRgN82JkZhz5dZdUQ5PeEZpBBPl%2F4wYgOhkuJuuu9LPlfi%2BatPq%2F9lTSt7aow32x2fFe%2Fv37brysIThJTq0%2Bg9wnmXv5JPGFyL6UWgw9xqnaQUVsracmRIUZyulYwSRiO6lMAPCiP9lDrN8V3Hj5leYFd5Hf4Z6vAWXMKutA%2FuyOocyQzPCckmOKsDUsQTaDdiHPQ%2BITaMt0TO4T3Opk7nQmjMfoeQMOklYgXdhSu5lJ8PcVizG%2BiOc8eyf%2FWVYuHcIErmekBbgEJgKr%2FbJwjZuHMQKdtQ1a77qF2KOKG0xAFDT9oaGKiIoSabYGsURGnKWniQngVSZMyV2RxEBKyIBgSwJT0MahPRF7O1igZCKNJ9gAtAAq%2BPM4zugzd7GY0sfe%2Bi7qzWOTIIU53dKYorJMYKMmwU3f8a4HnFdGNM5on9KygXFZKNSOq081jddWLJFhqUQ8rs0ET2fJuzLxMqnmSqsVR2B7gZodFSkanifsxXggr1CWtSj4i2RlV6yvkhDyB6nXagAU3WmusUAM3uY%2FzFG1MI%2BH8MQGOqUB1GghyCTHZaO7giwd0OdGNRdBSkwffwRhggmwnEFwAQToDbswn4NJQRC%2BO4PVEq7blhtT8t1ZJ%2BRguKHT38J5nJhno1fxiISz18iKpcd%2F6dOPGuPyvZRJJ9bbBqjCPtO9PhyUhDh5B0Fzr0ePv0Ft1DGZjcMXfPV%2FT7Qj8oVVStqUR%2Ff%2FJKh6O4RxKEqOcb1dVoh29BD1gWJfOyyHMK9e0zINkfW6&X-Amz-Signature=2c2e3172714d56d288309dce71bfe7e6182ccca3593c30736616a85c3a6ddd0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ODKHUM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICT5eEEUbNxAlOMERtT0qK20MLHU%2FaKnCp90V1nOMYEyAiEA2XaqZdeZFhJWQF6iU9X%2FkCwYwihG6mOAcBpT0ktLo0Uq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDN6%2BE7BxlEnU8PNC2CrcAzGitAXZy8CEql5x6RSLcSdhsOmxD9GkrTLPrAGTAINrM2PlUwLh%2FjDNUee3XC3n4a1%2FI2Qbs2TcaodZYreLXtET9jWZ1NsNbRgN82JkZhz5dZdUQ5PeEZpBBPl%2F4wYgOhkuJuuu9LPlfi%2BatPq%2F9lTSt7aow32x2fFe%2Fv37brysIThJTq0%2Bg9wnmXv5JPGFyL6UWgw9xqnaQUVsracmRIUZyulYwSRiO6lMAPCiP9lDrN8V3Hj5leYFd5Hf4Z6vAWXMKutA%2FuyOocyQzPCckmOKsDUsQTaDdiHPQ%2BITaMt0TO4T3Opk7nQmjMfoeQMOklYgXdhSu5lJ8PcVizG%2BiOc8eyf%2FWVYuHcIErmekBbgEJgKr%2FbJwjZuHMQKdtQ1a77qF2KOKG0xAFDT9oaGKiIoSabYGsURGnKWniQngVSZMyV2RxEBKyIBgSwJT0MahPRF7O1igZCKNJ9gAtAAq%2BPM4zugzd7GY0sfe%2Bi7qzWOTIIU53dKYorJMYKMmwU3f8a4HnFdGNM5on9KygXFZKNSOq081jddWLJFhqUQ8rs0ET2fJuzLxMqnmSqsVR2B7gZodFSkanifsxXggr1CWtSj4i2RlV6yvkhDyB6nXagAU3WmusUAM3uY%2FzFG1MI%2BH8MQGOqUB1GghyCTHZaO7giwd0OdGNRdBSkwffwRhggmwnEFwAQToDbswn4NJQRC%2BO4PVEq7blhtT8t1ZJ%2BRguKHT38J5nJhno1fxiISz18iKpcd%2F6dOPGuPyvZRJJ9bbBqjCPtO9PhyUhDh5B0Fzr0ePv0Ft1DGZjcMXfPV%2FT7Qj8oVVStqUR%2Ff%2FJKh6O4RxKEqOcb1dVoh29BD1gWJfOyyHMK9e0zINkfW6&X-Amz-Signature=d1943c0190be1541e94af749dc472054deb0e804c2ef5642639bb9ae09d6ef5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ODKHUM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICT5eEEUbNxAlOMERtT0qK20MLHU%2FaKnCp90V1nOMYEyAiEA2XaqZdeZFhJWQF6iU9X%2FkCwYwihG6mOAcBpT0ktLo0Uq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDN6%2BE7BxlEnU8PNC2CrcAzGitAXZy8CEql5x6RSLcSdhsOmxD9GkrTLPrAGTAINrM2PlUwLh%2FjDNUee3XC3n4a1%2FI2Qbs2TcaodZYreLXtET9jWZ1NsNbRgN82JkZhz5dZdUQ5PeEZpBBPl%2F4wYgOhkuJuuu9LPlfi%2BatPq%2F9lTSt7aow32x2fFe%2Fv37brysIThJTq0%2Bg9wnmXv5JPGFyL6UWgw9xqnaQUVsracmRIUZyulYwSRiO6lMAPCiP9lDrN8V3Hj5leYFd5Hf4Z6vAWXMKutA%2FuyOocyQzPCckmOKsDUsQTaDdiHPQ%2BITaMt0TO4T3Opk7nQmjMfoeQMOklYgXdhSu5lJ8PcVizG%2BiOc8eyf%2FWVYuHcIErmekBbgEJgKr%2FbJwjZuHMQKdtQ1a77qF2KOKG0xAFDT9oaGKiIoSabYGsURGnKWniQngVSZMyV2RxEBKyIBgSwJT0MahPRF7O1igZCKNJ9gAtAAq%2BPM4zugzd7GY0sfe%2Bi7qzWOTIIU53dKYorJMYKMmwU3f8a4HnFdGNM5on9KygXFZKNSOq081jddWLJFhqUQ8rs0ET2fJuzLxMqnmSqsVR2B7gZodFSkanifsxXggr1CWtSj4i2RlV6yvkhDyB6nXagAU3WmusUAM3uY%2FzFG1MI%2BH8MQGOqUB1GghyCTHZaO7giwd0OdGNRdBSkwffwRhggmwnEFwAQToDbswn4NJQRC%2BO4PVEq7blhtT8t1ZJ%2BRguKHT38J5nJhno1fxiISz18iKpcd%2F6dOPGuPyvZRJJ9bbBqjCPtO9PhyUhDh5B0Fzr0ePv0Ft1DGZjcMXfPV%2FT7Qj8oVVStqUR%2Ff%2FJKh6O4RxKEqOcb1dVoh29BD1gWJfOyyHMK9e0zINkfW6&X-Amz-Signature=c73f5a0f02589890a49e60156f015438b759862bbcc1299654b5a8cb597a7cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ODKHUM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICT5eEEUbNxAlOMERtT0qK20MLHU%2FaKnCp90V1nOMYEyAiEA2XaqZdeZFhJWQF6iU9X%2FkCwYwihG6mOAcBpT0ktLo0Uq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDN6%2BE7BxlEnU8PNC2CrcAzGitAXZy8CEql5x6RSLcSdhsOmxD9GkrTLPrAGTAINrM2PlUwLh%2FjDNUee3XC3n4a1%2FI2Qbs2TcaodZYreLXtET9jWZ1NsNbRgN82JkZhz5dZdUQ5PeEZpBBPl%2F4wYgOhkuJuuu9LPlfi%2BatPq%2F9lTSt7aow32x2fFe%2Fv37brysIThJTq0%2Bg9wnmXv5JPGFyL6UWgw9xqnaQUVsracmRIUZyulYwSRiO6lMAPCiP9lDrN8V3Hj5leYFd5Hf4Z6vAWXMKutA%2FuyOocyQzPCckmOKsDUsQTaDdiHPQ%2BITaMt0TO4T3Opk7nQmjMfoeQMOklYgXdhSu5lJ8PcVizG%2BiOc8eyf%2FWVYuHcIErmekBbgEJgKr%2FbJwjZuHMQKdtQ1a77qF2KOKG0xAFDT9oaGKiIoSabYGsURGnKWniQngVSZMyV2RxEBKyIBgSwJT0MahPRF7O1igZCKNJ9gAtAAq%2BPM4zugzd7GY0sfe%2Bi7qzWOTIIU53dKYorJMYKMmwU3f8a4HnFdGNM5on9KygXFZKNSOq081jddWLJFhqUQ8rs0ET2fJuzLxMqnmSqsVR2B7gZodFSkanifsxXggr1CWtSj4i2RlV6yvkhDyB6nXagAU3WmusUAM3uY%2FzFG1MI%2BH8MQGOqUB1GghyCTHZaO7giwd0OdGNRdBSkwffwRhggmwnEFwAQToDbswn4NJQRC%2BO4PVEq7blhtT8t1ZJ%2BRguKHT38J5nJhno1fxiISz18iKpcd%2F6dOPGuPyvZRJJ9bbBqjCPtO9PhyUhDh5B0Fzr0ePv0Ft1DGZjcMXfPV%2FT7Qj8oVVStqUR%2Ff%2FJKh6O4RxKEqOcb1dVoh29BD1gWJfOyyHMK9e0zINkfW6&X-Amz-Signature=ce1fa4e86b6cbee12b95226525a049ea3f9431a387741a7fcae62135196be9a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ODKHUM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICT5eEEUbNxAlOMERtT0qK20MLHU%2FaKnCp90V1nOMYEyAiEA2XaqZdeZFhJWQF6iU9X%2FkCwYwihG6mOAcBpT0ktLo0Uq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDN6%2BE7BxlEnU8PNC2CrcAzGitAXZy8CEql5x6RSLcSdhsOmxD9GkrTLPrAGTAINrM2PlUwLh%2FjDNUee3XC3n4a1%2FI2Qbs2TcaodZYreLXtET9jWZ1NsNbRgN82JkZhz5dZdUQ5PeEZpBBPl%2F4wYgOhkuJuuu9LPlfi%2BatPq%2F9lTSt7aow32x2fFe%2Fv37brysIThJTq0%2Bg9wnmXv5JPGFyL6UWgw9xqnaQUVsracmRIUZyulYwSRiO6lMAPCiP9lDrN8V3Hj5leYFd5Hf4Z6vAWXMKutA%2FuyOocyQzPCckmOKsDUsQTaDdiHPQ%2BITaMt0TO4T3Opk7nQmjMfoeQMOklYgXdhSu5lJ8PcVizG%2BiOc8eyf%2FWVYuHcIErmekBbgEJgKr%2FbJwjZuHMQKdtQ1a77qF2KOKG0xAFDT9oaGKiIoSabYGsURGnKWniQngVSZMyV2RxEBKyIBgSwJT0MahPRF7O1igZCKNJ9gAtAAq%2BPM4zugzd7GY0sfe%2Bi7qzWOTIIU53dKYorJMYKMmwU3f8a4HnFdGNM5on9KygXFZKNSOq081jddWLJFhqUQ8rs0ET2fJuzLxMqnmSqsVR2B7gZodFSkanifsxXggr1CWtSj4i2RlV6yvkhDyB6nXagAU3WmusUAM3uY%2FzFG1MI%2BH8MQGOqUB1GghyCTHZaO7giwd0OdGNRdBSkwffwRhggmwnEFwAQToDbswn4NJQRC%2BO4PVEq7blhtT8t1ZJ%2BRguKHT38J5nJhno1fxiISz18iKpcd%2F6dOPGuPyvZRJJ9bbBqjCPtO9PhyUhDh5B0Fzr0ePv0Ft1DGZjcMXfPV%2FT7Qj8oVVStqUR%2Ff%2FJKh6O4RxKEqOcb1dVoh29BD1gWJfOyyHMK9e0zINkfW6&X-Amz-Signature=9f9377614c722b18c98e40624cf1a2a2df86e68d35c45fa825763de10963b211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ODKHUM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICT5eEEUbNxAlOMERtT0qK20MLHU%2FaKnCp90V1nOMYEyAiEA2XaqZdeZFhJWQF6iU9X%2FkCwYwihG6mOAcBpT0ktLo0Uq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDN6%2BE7BxlEnU8PNC2CrcAzGitAXZy8CEql5x6RSLcSdhsOmxD9GkrTLPrAGTAINrM2PlUwLh%2FjDNUee3XC3n4a1%2FI2Qbs2TcaodZYreLXtET9jWZ1NsNbRgN82JkZhz5dZdUQ5PeEZpBBPl%2F4wYgOhkuJuuu9LPlfi%2BatPq%2F9lTSt7aow32x2fFe%2Fv37brysIThJTq0%2Bg9wnmXv5JPGFyL6UWgw9xqnaQUVsracmRIUZyulYwSRiO6lMAPCiP9lDrN8V3Hj5leYFd5Hf4Z6vAWXMKutA%2FuyOocyQzPCckmOKsDUsQTaDdiHPQ%2BITaMt0TO4T3Opk7nQmjMfoeQMOklYgXdhSu5lJ8PcVizG%2BiOc8eyf%2FWVYuHcIErmekBbgEJgKr%2FbJwjZuHMQKdtQ1a77qF2KOKG0xAFDT9oaGKiIoSabYGsURGnKWniQngVSZMyV2RxEBKyIBgSwJT0MahPRF7O1igZCKNJ9gAtAAq%2BPM4zugzd7GY0sfe%2Bi7qzWOTIIU53dKYorJMYKMmwU3f8a4HnFdGNM5on9KygXFZKNSOq081jddWLJFhqUQ8rs0ET2fJuzLxMqnmSqsVR2B7gZodFSkanifsxXggr1CWtSj4i2RlV6yvkhDyB6nXagAU3WmusUAM3uY%2FzFG1MI%2BH8MQGOqUB1GghyCTHZaO7giwd0OdGNRdBSkwffwRhggmwnEFwAQToDbswn4NJQRC%2BO4PVEq7blhtT8t1ZJ%2BRguKHT38J5nJhno1fxiISz18iKpcd%2F6dOPGuPyvZRJJ9bbBqjCPtO9PhyUhDh5B0Fzr0ePv0Ft1DGZjcMXfPV%2FT7Qj8oVVStqUR%2Ff%2FJKh6O4RxKEqOcb1dVoh29BD1gWJfOyyHMK9e0zINkfW6&X-Amz-Signature=3053268f5d4542c1576516f1638fc6cc5e54a63c3a4b12a29705b55e1f3ba7d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
