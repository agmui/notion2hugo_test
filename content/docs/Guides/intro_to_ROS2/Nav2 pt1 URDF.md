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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQIGB5L7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDM5MxBEkS3gV0I5RmXEIghsfegvY6KrP7kFwgKLfZ9pAiEAiq1gseWyufLM9g66qzVKbv2u3U0LbqW3In5AYUdF6v4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM9of1Id9nZegsDuHCrcAzGgatxLl6FLIha3CZMzG9HNrHpfFOoVSi2OSB6yrQ6hF1wmI33YOggnOeGegmqiU15ZUf9Ue1MjZDqKv2BfFAJ%2FmDzHnTvNBcjuET4AseFYo02%2BcGE7gIOjUc7hFdwKBdezI7OGba3DaDGdNxVJ4u6blJMmfMNwDE9XNou5V1ayYaafY86O9WR4mxvCeWXU47DA6Ff8yiyfKbxpBfj7aouTBvNAKJpWA2RuRLhhcBJIsz%2BQfVEIDUCtT7REs6FL3K1St1bI69lI1eVUj0rMycmofQQ9fMTttPq2avjkuLHYwFTfQPwlxwPBPblp3zw69oe21G1om5a%2Fm%2BCJFs%2FXmYn%2Fi28VHaQy4XHFJhWMm759XdVL1XO1gAAy4N0%2BZYgdnjHAb5i%2F79oGskzVLggkpfG3O5vwPIqqq1PlxwXLKCNh13djwKlssbzdlwx%2F44aLrS3f3DlWqSfbsLj9HTotYZ3PzbgSb60wBs7TK2Lt%2FtT9DupxinUmdg4%2Bi4HZTKXA4SxI9A%2Bd%2BtdEFs%2B4tRxH%2Ba67NhhpdjeHkZQXfRT4OeR%2FL2Z7C%2BaDq%2BAvnjxTyIO7i7chTIYplNdPdcM6iF%2FDVPkjdaaY3ot59Dwi%2FxTj1%2FkINm7EyXhs%2Bx%2BWYEuxMKr5w8QGOqUBBSpkc397Gg7dAetWJu0GoKYDITFAQ9Vixw2djeh%2FAro7CNO1E0y4YvlX8rJG77wTXqBrG%2B8NDFg4rgWd8BoSBZ3ZU3NZm%2B5B8EU2WvEVEhvrFGUAUucd1cO5XarkqW0CqkmqMi7IF%2BFWvusp5QRQ9Qxb8UGN0PLYEV1Vbtuy0bMh%2BgoEcjvOHBOKubMWvaXATs5HyXCO24IZEyPsIdMdeFGakRdt&X-Amz-Signature=9465d45fcf7e50a03adf48b8846247b2fe573e14f29d54018e99f1b144b46a90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQIGB5L7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDM5MxBEkS3gV0I5RmXEIghsfegvY6KrP7kFwgKLfZ9pAiEAiq1gseWyufLM9g66qzVKbv2u3U0LbqW3In5AYUdF6v4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM9of1Id9nZegsDuHCrcAzGgatxLl6FLIha3CZMzG9HNrHpfFOoVSi2OSB6yrQ6hF1wmI33YOggnOeGegmqiU15ZUf9Ue1MjZDqKv2BfFAJ%2FmDzHnTvNBcjuET4AseFYo02%2BcGE7gIOjUc7hFdwKBdezI7OGba3DaDGdNxVJ4u6blJMmfMNwDE9XNou5V1ayYaafY86O9WR4mxvCeWXU47DA6Ff8yiyfKbxpBfj7aouTBvNAKJpWA2RuRLhhcBJIsz%2BQfVEIDUCtT7REs6FL3K1St1bI69lI1eVUj0rMycmofQQ9fMTttPq2avjkuLHYwFTfQPwlxwPBPblp3zw69oe21G1om5a%2Fm%2BCJFs%2FXmYn%2Fi28VHaQy4XHFJhWMm759XdVL1XO1gAAy4N0%2BZYgdnjHAb5i%2F79oGskzVLggkpfG3O5vwPIqqq1PlxwXLKCNh13djwKlssbzdlwx%2F44aLrS3f3DlWqSfbsLj9HTotYZ3PzbgSb60wBs7TK2Lt%2FtT9DupxinUmdg4%2Bi4HZTKXA4SxI9A%2Bd%2BtdEFs%2B4tRxH%2Ba67NhhpdjeHkZQXfRT4OeR%2FL2Z7C%2BaDq%2BAvnjxTyIO7i7chTIYplNdPdcM6iF%2FDVPkjdaaY3ot59Dwi%2FxTj1%2FkINm7EyXhs%2Bx%2BWYEuxMKr5w8QGOqUBBSpkc397Gg7dAetWJu0GoKYDITFAQ9Vixw2djeh%2FAro7CNO1E0y4YvlX8rJG77wTXqBrG%2B8NDFg4rgWd8BoSBZ3ZU3NZm%2B5B8EU2WvEVEhvrFGUAUucd1cO5XarkqW0CqkmqMi7IF%2BFWvusp5QRQ9Qxb8UGN0PLYEV1Vbtuy0bMh%2BgoEcjvOHBOKubMWvaXATs5HyXCO24IZEyPsIdMdeFGakRdt&X-Amz-Signature=d0bbee6820956bdd4a08738833a31ca6c3e5a4d03887977da3c5c6a89adcf7cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQIGB5L7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDM5MxBEkS3gV0I5RmXEIghsfegvY6KrP7kFwgKLfZ9pAiEAiq1gseWyufLM9g66qzVKbv2u3U0LbqW3In5AYUdF6v4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM9of1Id9nZegsDuHCrcAzGgatxLl6FLIha3CZMzG9HNrHpfFOoVSi2OSB6yrQ6hF1wmI33YOggnOeGegmqiU15ZUf9Ue1MjZDqKv2BfFAJ%2FmDzHnTvNBcjuET4AseFYo02%2BcGE7gIOjUc7hFdwKBdezI7OGba3DaDGdNxVJ4u6blJMmfMNwDE9XNou5V1ayYaafY86O9WR4mxvCeWXU47DA6Ff8yiyfKbxpBfj7aouTBvNAKJpWA2RuRLhhcBJIsz%2BQfVEIDUCtT7REs6FL3K1St1bI69lI1eVUj0rMycmofQQ9fMTttPq2avjkuLHYwFTfQPwlxwPBPblp3zw69oe21G1om5a%2Fm%2BCJFs%2FXmYn%2Fi28VHaQy4XHFJhWMm759XdVL1XO1gAAy4N0%2BZYgdnjHAb5i%2F79oGskzVLggkpfG3O5vwPIqqq1PlxwXLKCNh13djwKlssbzdlwx%2F44aLrS3f3DlWqSfbsLj9HTotYZ3PzbgSb60wBs7TK2Lt%2FtT9DupxinUmdg4%2Bi4HZTKXA4SxI9A%2Bd%2BtdEFs%2B4tRxH%2Ba67NhhpdjeHkZQXfRT4OeR%2FL2Z7C%2BaDq%2BAvnjxTyIO7i7chTIYplNdPdcM6iF%2FDVPkjdaaY3ot59Dwi%2FxTj1%2FkINm7EyXhs%2Bx%2BWYEuxMKr5w8QGOqUBBSpkc397Gg7dAetWJu0GoKYDITFAQ9Vixw2djeh%2FAro7CNO1E0y4YvlX8rJG77wTXqBrG%2B8NDFg4rgWd8BoSBZ3ZU3NZm%2B5B8EU2WvEVEhvrFGUAUucd1cO5XarkqW0CqkmqMi7IF%2BFWvusp5QRQ9Qxb8UGN0PLYEV1Vbtuy0bMh%2BgoEcjvOHBOKubMWvaXATs5HyXCO24IZEyPsIdMdeFGakRdt&X-Amz-Signature=ba4f0e8b30234116902cec0e02b364e1ee6213d8106b3073d58824c4ac85616d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQIGB5L7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDM5MxBEkS3gV0I5RmXEIghsfegvY6KrP7kFwgKLfZ9pAiEAiq1gseWyufLM9g66qzVKbv2u3U0LbqW3In5AYUdF6v4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM9of1Id9nZegsDuHCrcAzGgatxLl6FLIha3CZMzG9HNrHpfFOoVSi2OSB6yrQ6hF1wmI33YOggnOeGegmqiU15ZUf9Ue1MjZDqKv2BfFAJ%2FmDzHnTvNBcjuET4AseFYo02%2BcGE7gIOjUc7hFdwKBdezI7OGba3DaDGdNxVJ4u6blJMmfMNwDE9XNou5V1ayYaafY86O9WR4mxvCeWXU47DA6Ff8yiyfKbxpBfj7aouTBvNAKJpWA2RuRLhhcBJIsz%2BQfVEIDUCtT7REs6FL3K1St1bI69lI1eVUj0rMycmofQQ9fMTttPq2avjkuLHYwFTfQPwlxwPBPblp3zw69oe21G1om5a%2Fm%2BCJFs%2FXmYn%2Fi28VHaQy4XHFJhWMm759XdVL1XO1gAAy4N0%2BZYgdnjHAb5i%2F79oGskzVLggkpfG3O5vwPIqqq1PlxwXLKCNh13djwKlssbzdlwx%2F44aLrS3f3DlWqSfbsLj9HTotYZ3PzbgSb60wBs7TK2Lt%2FtT9DupxinUmdg4%2Bi4HZTKXA4SxI9A%2Bd%2BtdEFs%2B4tRxH%2Ba67NhhpdjeHkZQXfRT4OeR%2FL2Z7C%2BaDq%2BAvnjxTyIO7i7chTIYplNdPdcM6iF%2FDVPkjdaaY3ot59Dwi%2FxTj1%2FkINm7EyXhs%2Bx%2BWYEuxMKr5w8QGOqUBBSpkc397Gg7dAetWJu0GoKYDITFAQ9Vixw2djeh%2FAro7CNO1E0y4YvlX8rJG77wTXqBrG%2B8NDFg4rgWd8BoSBZ3ZU3NZm%2B5B8EU2WvEVEhvrFGUAUucd1cO5XarkqW0CqkmqMi7IF%2BFWvusp5QRQ9Qxb8UGN0PLYEV1Vbtuy0bMh%2BgoEcjvOHBOKubMWvaXATs5HyXCO24IZEyPsIdMdeFGakRdt&X-Amz-Signature=adf0412a5726a777c8cbf35ddc809b1185f21e085b61a69efaaabe289ed738f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQIGB5L7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDM5MxBEkS3gV0I5RmXEIghsfegvY6KrP7kFwgKLfZ9pAiEAiq1gseWyufLM9g66qzVKbv2u3U0LbqW3In5AYUdF6v4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM9of1Id9nZegsDuHCrcAzGgatxLl6FLIha3CZMzG9HNrHpfFOoVSi2OSB6yrQ6hF1wmI33YOggnOeGegmqiU15ZUf9Ue1MjZDqKv2BfFAJ%2FmDzHnTvNBcjuET4AseFYo02%2BcGE7gIOjUc7hFdwKBdezI7OGba3DaDGdNxVJ4u6blJMmfMNwDE9XNou5V1ayYaafY86O9WR4mxvCeWXU47DA6Ff8yiyfKbxpBfj7aouTBvNAKJpWA2RuRLhhcBJIsz%2BQfVEIDUCtT7REs6FL3K1St1bI69lI1eVUj0rMycmofQQ9fMTttPq2avjkuLHYwFTfQPwlxwPBPblp3zw69oe21G1om5a%2Fm%2BCJFs%2FXmYn%2Fi28VHaQy4XHFJhWMm759XdVL1XO1gAAy4N0%2BZYgdnjHAb5i%2F79oGskzVLggkpfG3O5vwPIqqq1PlxwXLKCNh13djwKlssbzdlwx%2F44aLrS3f3DlWqSfbsLj9HTotYZ3PzbgSb60wBs7TK2Lt%2FtT9DupxinUmdg4%2Bi4HZTKXA4SxI9A%2Bd%2BtdEFs%2B4tRxH%2Ba67NhhpdjeHkZQXfRT4OeR%2FL2Z7C%2BaDq%2BAvnjxTyIO7i7chTIYplNdPdcM6iF%2FDVPkjdaaY3ot59Dwi%2FxTj1%2FkINm7EyXhs%2Bx%2BWYEuxMKr5w8QGOqUBBSpkc397Gg7dAetWJu0GoKYDITFAQ9Vixw2djeh%2FAro7CNO1E0y4YvlX8rJG77wTXqBrG%2B8NDFg4rgWd8BoSBZ3ZU3NZm%2B5B8EU2WvEVEhvrFGUAUucd1cO5XarkqW0CqkmqMi7IF%2BFWvusp5QRQ9Qxb8UGN0PLYEV1Vbtuy0bMh%2BgoEcjvOHBOKubMWvaXATs5HyXCO24IZEyPsIdMdeFGakRdt&X-Amz-Signature=b2ed8e79347f5a239703833d7ed1cb2660bcd8ddc84a6862a6c9038c1976446b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQIGB5L7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDM5MxBEkS3gV0I5RmXEIghsfegvY6KrP7kFwgKLfZ9pAiEAiq1gseWyufLM9g66qzVKbv2u3U0LbqW3In5AYUdF6v4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM9of1Id9nZegsDuHCrcAzGgatxLl6FLIha3CZMzG9HNrHpfFOoVSi2OSB6yrQ6hF1wmI33YOggnOeGegmqiU15ZUf9Ue1MjZDqKv2BfFAJ%2FmDzHnTvNBcjuET4AseFYo02%2BcGE7gIOjUc7hFdwKBdezI7OGba3DaDGdNxVJ4u6blJMmfMNwDE9XNou5V1ayYaafY86O9WR4mxvCeWXU47DA6Ff8yiyfKbxpBfj7aouTBvNAKJpWA2RuRLhhcBJIsz%2BQfVEIDUCtT7REs6FL3K1St1bI69lI1eVUj0rMycmofQQ9fMTttPq2avjkuLHYwFTfQPwlxwPBPblp3zw69oe21G1om5a%2Fm%2BCJFs%2FXmYn%2Fi28VHaQy4XHFJhWMm759XdVL1XO1gAAy4N0%2BZYgdnjHAb5i%2F79oGskzVLggkpfG3O5vwPIqqq1PlxwXLKCNh13djwKlssbzdlwx%2F44aLrS3f3DlWqSfbsLj9HTotYZ3PzbgSb60wBs7TK2Lt%2FtT9DupxinUmdg4%2Bi4HZTKXA4SxI9A%2Bd%2BtdEFs%2B4tRxH%2Ba67NhhpdjeHkZQXfRT4OeR%2FL2Z7C%2BaDq%2BAvnjxTyIO7i7chTIYplNdPdcM6iF%2FDVPkjdaaY3ot59Dwi%2FxTj1%2FkINm7EyXhs%2Bx%2BWYEuxMKr5w8QGOqUBBSpkc397Gg7dAetWJu0GoKYDITFAQ9Vixw2djeh%2FAro7CNO1E0y4YvlX8rJG77wTXqBrG%2B8NDFg4rgWd8BoSBZ3ZU3NZm%2B5B8EU2WvEVEhvrFGUAUucd1cO5XarkqW0CqkmqMi7IF%2BFWvusp5QRQ9Qxb8UGN0PLYEV1Vbtuy0bMh%2BgoEcjvOHBOKubMWvaXATs5HyXCO24IZEyPsIdMdeFGakRdt&X-Amz-Signature=cc067e26cb504f27a5c0af4beab0b591b5c3e1c3c0f19cc59dc78722239b4ac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQIGB5L7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDM5MxBEkS3gV0I5RmXEIghsfegvY6KrP7kFwgKLfZ9pAiEAiq1gseWyufLM9g66qzVKbv2u3U0LbqW3In5AYUdF6v4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM9of1Id9nZegsDuHCrcAzGgatxLl6FLIha3CZMzG9HNrHpfFOoVSi2OSB6yrQ6hF1wmI33YOggnOeGegmqiU15ZUf9Ue1MjZDqKv2BfFAJ%2FmDzHnTvNBcjuET4AseFYo02%2BcGE7gIOjUc7hFdwKBdezI7OGba3DaDGdNxVJ4u6blJMmfMNwDE9XNou5V1ayYaafY86O9WR4mxvCeWXU47DA6Ff8yiyfKbxpBfj7aouTBvNAKJpWA2RuRLhhcBJIsz%2BQfVEIDUCtT7REs6FL3K1St1bI69lI1eVUj0rMycmofQQ9fMTttPq2avjkuLHYwFTfQPwlxwPBPblp3zw69oe21G1om5a%2Fm%2BCJFs%2FXmYn%2Fi28VHaQy4XHFJhWMm759XdVL1XO1gAAy4N0%2BZYgdnjHAb5i%2F79oGskzVLggkpfG3O5vwPIqqq1PlxwXLKCNh13djwKlssbzdlwx%2F44aLrS3f3DlWqSfbsLj9HTotYZ3PzbgSb60wBs7TK2Lt%2FtT9DupxinUmdg4%2Bi4HZTKXA4SxI9A%2Bd%2BtdEFs%2B4tRxH%2Ba67NhhpdjeHkZQXfRT4OeR%2FL2Z7C%2BaDq%2BAvnjxTyIO7i7chTIYplNdPdcM6iF%2FDVPkjdaaY3ot59Dwi%2FxTj1%2FkINm7EyXhs%2Bx%2BWYEuxMKr5w8QGOqUBBSpkc397Gg7dAetWJu0GoKYDITFAQ9Vixw2djeh%2FAro7CNO1E0y4YvlX8rJG77wTXqBrG%2B8NDFg4rgWd8BoSBZ3ZU3NZm%2B5B8EU2WvEVEhvrFGUAUucd1cO5XarkqW0CqkmqMi7IF%2BFWvusp5QRQ9Qxb8UGN0PLYEV1Vbtuy0bMh%2BgoEcjvOHBOKubMWvaXATs5HyXCO24IZEyPsIdMdeFGakRdt&X-Amz-Signature=25ea28311c32d8a5a769155bdd4ee97a6f0a6534269a150863426da84a51e104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQIGB5L7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDM5MxBEkS3gV0I5RmXEIghsfegvY6KrP7kFwgKLfZ9pAiEAiq1gseWyufLM9g66qzVKbv2u3U0LbqW3In5AYUdF6v4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM9of1Id9nZegsDuHCrcAzGgatxLl6FLIha3CZMzG9HNrHpfFOoVSi2OSB6yrQ6hF1wmI33YOggnOeGegmqiU15ZUf9Ue1MjZDqKv2BfFAJ%2FmDzHnTvNBcjuET4AseFYo02%2BcGE7gIOjUc7hFdwKBdezI7OGba3DaDGdNxVJ4u6blJMmfMNwDE9XNou5V1ayYaafY86O9WR4mxvCeWXU47DA6Ff8yiyfKbxpBfj7aouTBvNAKJpWA2RuRLhhcBJIsz%2BQfVEIDUCtT7REs6FL3K1St1bI69lI1eVUj0rMycmofQQ9fMTttPq2avjkuLHYwFTfQPwlxwPBPblp3zw69oe21G1om5a%2Fm%2BCJFs%2FXmYn%2Fi28VHaQy4XHFJhWMm759XdVL1XO1gAAy4N0%2BZYgdnjHAb5i%2F79oGskzVLggkpfG3O5vwPIqqq1PlxwXLKCNh13djwKlssbzdlwx%2F44aLrS3f3DlWqSfbsLj9HTotYZ3PzbgSb60wBs7TK2Lt%2FtT9DupxinUmdg4%2Bi4HZTKXA4SxI9A%2Bd%2BtdEFs%2B4tRxH%2Ba67NhhpdjeHkZQXfRT4OeR%2FL2Z7C%2BaDq%2BAvnjxTyIO7i7chTIYplNdPdcM6iF%2FDVPkjdaaY3ot59Dwi%2FxTj1%2FkINm7EyXhs%2Bx%2BWYEuxMKr5w8QGOqUBBSpkc397Gg7dAetWJu0GoKYDITFAQ9Vixw2djeh%2FAro7CNO1E0y4YvlX8rJG77wTXqBrG%2B8NDFg4rgWd8BoSBZ3ZU3NZm%2B5B8EU2WvEVEhvrFGUAUucd1cO5XarkqW0CqkmqMi7IF%2BFWvusp5QRQ9Qxb8UGN0PLYEV1Vbtuy0bMh%2BgoEcjvOHBOKubMWvaXATs5HyXCO24IZEyPsIdMdeFGakRdt&X-Amz-Signature=dc95a0a7cff01e5101d1c4fe4628ef6b37e553d9d74073c72020bd69c5f94498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQIGB5L7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDM5MxBEkS3gV0I5RmXEIghsfegvY6KrP7kFwgKLfZ9pAiEAiq1gseWyufLM9g66qzVKbv2u3U0LbqW3In5AYUdF6v4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM9of1Id9nZegsDuHCrcAzGgatxLl6FLIha3CZMzG9HNrHpfFOoVSi2OSB6yrQ6hF1wmI33YOggnOeGegmqiU15ZUf9Ue1MjZDqKv2BfFAJ%2FmDzHnTvNBcjuET4AseFYo02%2BcGE7gIOjUc7hFdwKBdezI7OGba3DaDGdNxVJ4u6blJMmfMNwDE9XNou5V1ayYaafY86O9WR4mxvCeWXU47DA6Ff8yiyfKbxpBfj7aouTBvNAKJpWA2RuRLhhcBJIsz%2BQfVEIDUCtT7REs6FL3K1St1bI69lI1eVUj0rMycmofQQ9fMTttPq2avjkuLHYwFTfQPwlxwPBPblp3zw69oe21G1om5a%2Fm%2BCJFs%2FXmYn%2Fi28VHaQy4XHFJhWMm759XdVL1XO1gAAy4N0%2BZYgdnjHAb5i%2F79oGskzVLggkpfG3O5vwPIqqq1PlxwXLKCNh13djwKlssbzdlwx%2F44aLrS3f3DlWqSfbsLj9HTotYZ3PzbgSb60wBs7TK2Lt%2FtT9DupxinUmdg4%2Bi4HZTKXA4SxI9A%2Bd%2BtdEFs%2B4tRxH%2Ba67NhhpdjeHkZQXfRT4OeR%2FL2Z7C%2BaDq%2BAvnjxTyIO7i7chTIYplNdPdcM6iF%2FDVPkjdaaY3ot59Dwi%2FxTj1%2FkINm7EyXhs%2Bx%2BWYEuxMKr5w8QGOqUBBSpkc397Gg7dAetWJu0GoKYDITFAQ9Vixw2djeh%2FAro7CNO1E0y4YvlX8rJG77wTXqBrG%2B8NDFg4rgWd8BoSBZ3ZU3NZm%2B5B8EU2WvEVEhvrFGUAUucd1cO5XarkqW0CqkmqMi7IF%2BFWvusp5QRQ9Qxb8UGN0PLYEV1Vbtuy0bMh%2BgoEcjvOHBOKubMWvaXATs5HyXCO24IZEyPsIdMdeFGakRdt&X-Amz-Signature=e0857527e6c926288a3540cc35c77d15d66ee5172cb9c50079021625946cd59e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQIGB5L7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDM5MxBEkS3gV0I5RmXEIghsfegvY6KrP7kFwgKLfZ9pAiEAiq1gseWyufLM9g66qzVKbv2u3U0LbqW3In5AYUdF6v4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM9of1Id9nZegsDuHCrcAzGgatxLl6FLIha3CZMzG9HNrHpfFOoVSi2OSB6yrQ6hF1wmI33YOggnOeGegmqiU15ZUf9Ue1MjZDqKv2BfFAJ%2FmDzHnTvNBcjuET4AseFYo02%2BcGE7gIOjUc7hFdwKBdezI7OGba3DaDGdNxVJ4u6blJMmfMNwDE9XNou5V1ayYaafY86O9WR4mxvCeWXU47DA6Ff8yiyfKbxpBfj7aouTBvNAKJpWA2RuRLhhcBJIsz%2BQfVEIDUCtT7REs6FL3K1St1bI69lI1eVUj0rMycmofQQ9fMTttPq2avjkuLHYwFTfQPwlxwPBPblp3zw69oe21G1om5a%2Fm%2BCJFs%2FXmYn%2Fi28VHaQy4XHFJhWMm759XdVL1XO1gAAy4N0%2BZYgdnjHAb5i%2F79oGskzVLggkpfG3O5vwPIqqq1PlxwXLKCNh13djwKlssbzdlwx%2F44aLrS3f3DlWqSfbsLj9HTotYZ3PzbgSb60wBs7TK2Lt%2FtT9DupxinUmdg4%2Bi4HZTKXA4SxI9A%2Bd%2BtdEFs%2B4tRxH%2Ba67NhhpdjeHkZQXfRT4OeR%2FL2Z7C%2BaDq%2BAvnjxTyIO7i7chTIYplNdPdcM6iF%2FDVPkjdaaY3ot59Dwi%2FxTj1%2FkINm7EyXhs%2Bx%2BWYEuxMKr5w8QGOqUBBSpkc397Gg7dAetWJu0GoKYDITFAQ9Vixw2djeh%2FAro7CNO1E0y4YvlX8rJG77wTXqBrG%2B8NDFg4rgWd8BoSBZ3ZU3NZm%2B5B8EU2WvEVEhvrFGUAUucd1cO5XarkqW0CqkmqMi7IF%2BFWvusp5QRQ9Qxb8UGN0PLYEV1Vbtuy0bMh%2BgoEcjvOHBOKubMWvaXATs5HyXCO24IZEyPsIdMdeFGakRdt&X-Amz-Signature=9a7c19a5093281b9a204323c908181e3adbf6c04776654e7ccfb7f322b50f038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHZMAB65%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDnqY7NuBexdxluG0NbewOFqK4JNp3IK0fM99mHxkADLAIhALz6hShoi8lgmce35q0193l05kKqaHqQL0Uw13xs6%2F%2BwKv8DCEwQABoMNjM3NDIzMTgzODA1IgyzkshdGDSWR%2FFoEEkq3AMg22FOsfB9fUxiY8aXWj0aR7yaucSEDxQRU2tSERMcINWp5Hgtx6xPjsTxvAuBfjLpQ4O4Si8So7m8B4zKKbu4UwmE%2FaFf8xiRQCdyjCR3m8YtjKCNqtxnbmwJ%2FeMKDe46MvmPhKvucIIkb94dTVsPMgZAhVKCaM4R7sDpientNvk21Xm4o1gSHV3cVG9IzCj5PK4dGHobi1e3B0Bryp6v7CLOkperpHJgH6ArD2b%2BApi9Hoe5rJ9CBU5piMo0zHP79V%2BYMKPPtk7Jnu48KNZURTBAPURfVQi4bBNR2j0t8iXxeHDlRdvoQ0mgwE%2BxU4RthSHRXBiL%2Fe%2BJLG73MHz5Cy%2B0jzQs2%2B%2FDe2qpaVRAWP8TcKiWoNEpeHqdD%2Br05QS6ERfsfSi1dGVPJqpaZd75kd8rNQFMPUUfFxtC9MNfvJG5p7l9euGryr%2B7Q0sNrPEpiT6LYOLK1Fq1wJsvNOWTuqbBwYhgPiRiqsaSpUzacxTxZA%2Fce9I5f7xX6NljlbOc6Cp2zUtByVnysPeLLCPH9bfiXIeNMWIp%2BoZ%2B4d4sFz7HF6%2FHiWXDfXMvuoKy3QkU1uew%2BVhyJbIyzEiMCZIpWCW26LQvQ7ui2s%2BE%2BJbmr6rUE74g4%2FK9ZpCiKTCr%2BcPEBjqkAVrvXnKZXe5dLnJ%2BjPQmjuU9ESVRHfvqJbaH4JoOOapvBQ8zwp82P2IZlsE%2FUSC7QEwIdGy1qc8dRGrgo3ETSIeyazN3oeQ3rQf1b8WyuCCcfyMlKlkrMNZwLX5pZq3IGP%2BQTjToXUUeVTo%2B%2FRy0ad0HgrmfkyAB9otQsHPcG6qNX%2BIeaBeS5eLeLXqDytIwRhn%2Fl0l%2BnyqGhcKUvoxokK6kx0Ct&X-Amz-Signature=f5143eb04152632a4d3e5000fc0270362199216028d2385ee8bc609a05c797c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZSZD4XI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQC72X4jUuBUnp1rMD1tMb9kx7hgMAyU1R%2FoKVQ7HKmNwwIhAP9BtBDWGgqAShcyYYaBCFVHVTK31HpuvbDCrlCJK%2Fv0Kv8DCEwQABoMNjM3NDIzMTgzODA1IgzDGfpv7CW7wL%2BSEjwq3AOlB4GTXC6bAdGXHIui2sofa0%2BLVt%2BcCfS05lBA2lzSJMJKDUNCm7Y8WIBuNcdMftia%2BUmO23FSGzJEznz65B5oUMQVnqyinVnSTsc9YoZsvFunocA9JgI9mQ1qJaZOJEDIw1l3N9H4EzCwC4pxTsRSYfEW1fUTa9M3eYaVBRMco85lBVriO1uD3dcm%2FnVMZNcWqJJcvx2C7yjYhUtM6KOMAF%2Bw5Mwq6%2BGaNG6PFYlKF6%2FUgj%2BjD0j5U5bLo3kI5e%2Fnb0yJ9iYEYiZAeoT4kuQV3tjXOBOOiE8x4fDcVCi9F7TFcjXbK72MscUI0MthEhrCOjXPTTsDm1LNedZTKZwLMfsrlhx5qIa7bh7%2Bf7P767Iy%2FPfAviqB36nreHAdfqthk9CgANGS9ZIV8RG9Qy6CBI5U6t6CSlx7LTbmcp0HrLozvBr%2Bao9XPhqrsIvMDRpsAIrBd3zHhwDrimD%2BAdmzYIpyC3IeuSrgyTZjDLVU3Pu6aD9nPgByDmXcbjHLD8lLZTPsOxLc59ncLHS0oiH9myN%2FFaL7Sc0eFuOyUXrq1NL8YQfzl3ZVzuoJVcBch5blKOh0ZOTCM%2BXk66OQbXC2sznxW1AgaVvNbfp55BeTiEsGwZLV4ygmFzfGrjCc%2BcPEBjqkAUo8ZpdkVFGzJwF8MOeWy6EoWxAyrff5MxKnLZPcXiV2FAeaoHJuvnN663NBFrxMZOx89F1eFV6Cunj%2FcZ%2B2sFjNEvG4YrSDCU90G8NHkEdUlKTbBjVkekj0MIBdD8x7chl%2BmH%2BNXQX4rMn%2B9r4dviPsGyW7hxc0E5%2Bq4w00mNIxXZ1TpJ5hXlAGioZGyM6pdaiS6ZlFvAJFRrNVNVrYe0upYxmc&X-Amz-Signature=b3fbb2de63e02e875d0851a816038a6b8850aed21f9e9576f1f02a99fb78b117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QU3HONG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDhRfcMKjyIMT4MLxKsX27cA%2BuhHtX6xfDYInZCBdwMjQIhAL9BFUJqKgioNzjsbcjnCRov1T1HsKvufYn6HCRLaBpEKv8DCEwQABoMNjM3NDIzMTgzODA1IgyUGczjZy4Put5Fn9gq3ANPQ6s1sfFrPBV7e5t2XQwuZEbscRI9PlePTHRD%2BOMKrCoF4SIMDGb1TLYOQHNPMZ7iycOwuJR%2FRJ7YlC52Ag6%2Fvy11LFJuIUvQ9H12d%2FxbQUQ7ycheZtENjoQrb8P3zzHvzzuiHv669bWj%2FwNuKfBMMzJ8DdCnfsL8XuDDjAKpW2uIWolPKH2mifXb0R64fauj%2B%2FUyX0Cc8y%2F3k4UGs9iKgLLIuiW56N2EwEZio3UAF8UlUviISvZVPfINMbRFpgFq0kjNVOfySZYwIWIpFhAmxoTLjk1erqE80taS8ZYEnCNjMbHZMFmfh0TpjXfnPD6ukpNWLkUsBHltvV8z0xOxMMbp561lOunO3R%2BwcGG2d2P1BSZrmlJfDaMT95t1BVTFz8i4Bjr921XAlnUdU3hlbut5su5XceHkmeZ%2FMrMra5qBpgnuuf8kAuUnYBD%2B2Ps8atfngzTB0BtKyrl%2BM1c2%2BJVTuxfJogB45%2FgaT76uwpY0gYBPK66lcSf5Q%2BO8VA6utNz3vE%2BRiVA0rF%2FyEzXvVjrr%2FEP%2BxX4kG35jy2lJwqw6f%2Bt921gO%2BRTTMwmw9Qm2KauWocXw6tHjZ2DALIH58%2FjSAHkp5J4BPWm77OrThm9R92niNo0%2Fl8HG3DCd%2BcPEBjqkAWUX%2Bipz892pt3TVXLOFGgmTti02pDuHAnkyAatOtGo%2BxkvWABiRVa7IFc%2FMCr6qkq5TVgH%2BWTRwVgeQbv%2Ft9FmA0GDdstKOFAqbWQxiDSdmTueD0PyJohky%2FmGrs2WD4KvxBk%2B6QXxKR4BZbGMFSyoNMa518eGGVdvedOw0NGq6owRqcaianof%2FGDOdN0t%2Fusc0zXHW2cB1kUk5GcESVTSuvl1R&X-Amz-Signature=04c2fb1c19558e359d19d8615ad6ca19967a3f6253a3c62cb49ba0c40ebd3361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQIGB5L7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDM5MxBEkS3gV0I5RmXEIghsfegvY6KrP7kFwgKLfZ9pAiEAiq1gseWyufLM9g66qzVKbv2u3U0LbqW3In5AYUdF6v4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM9of1Id9nZegsDuHCrcAzGgatxLl6FLIha3CZMzG9HNrHpfFOoVSi2OSB6yrQ6hF1wmI33YOggnOeGegmqiU15ZUf9Ue1MjZDqKv2BfFAJ%2FmDzHnTvNBcjuET4AseFYo02%2BcGE7gIOjUc7hFdwKBdezI7OGba3DaDGdNxVJ4u6blJMmfMNwDE9XNou5V1ayYaafY86O9WR4mxvCeWXU47DA6Ff8yiyfKbxpBfj7aouTBvNAKJpWA2RuRLhhcBJIsz%2BQfVEIDUCtT7REs6FL3K1St1bI69lI1eVUj0rMycmofQQ9fMTttPq2avjkuLHYwFTfQPwlxwPBPblp3zw69oe21G1om5a%2Fm%2BCJFs%2FXmYn%2Fi28VHaQy4XHFJhWMm759XdVL1XO1gAAy4N0%2BZYgdnjHAb5i%2F79oGskzVLggkpfG3O5vwPIqqq1PlxwXLKCNh13djwKlssbzdlwx%2F44aLrS3f3DlWqSfbsLj9HTotYZ3PzbgSb60wBs7TK2Lt%2FtT9DupxinUmdg4%2Bi4HZTKXA4SxI9A%2Bd%2BtdEFs%2B4tRxH%2Ba67NhhpdjeHkZQXfRT4OeR%2FL2Z7C%2BaDq%2BAvnjxTyIO7i7chTIYplNdPdcM6iF%2FDVPkjdaaY3ot59Dwi%2FxTj1%2FkINm7EyXhs%2Bx%2BWYEuxMKr5w8QGOqUBBSpkc397Gg7dAetWJu0GoKYDITFAQ9Vixw2djeh%2FAro7CNO1E0y4YvlX8rJG77wTXqBrG%2B8NDFg4rgWd8BoSBZ3ZU3NZm%2B5B8EU2WvEVEhvrFGUAUucd1cO5XarkqW0CqkmqMi7IF%2BFWvusp5QRQ9Qxb8UGN0PLYEV1Vbtuy0bMh%2BgoEcjvOHBOKubMWvaXATs5HyXCO24IZEyPsIdMdeFGakRdt&X-Amz-Signature=c73bb1cd37760cf4e6d910a54ffe4cd6da1b375e6d639884b3b126de24ddda69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ7AMNAA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQD305OOO12XD%2Fb1u7tVbN2twkF%2FU1QP1CT9wuAYmhEbQAIgZjIr76iliLa9oEwlFnnGXcSmwdDXA8wYjeZtEKYsqzIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGeU42K%2B2GACXG9N%2BCrcAywNhB%2FXtlRy26xDCjf33jUnQzTgvOM0pRgwEHBIQ7RSQFrkHy%2BFITKtutCf%2BS9CU7PwZ0zlZAOTZIA6mLbmPbT11%2Bb%2BqJIPvI5NWsisN%2BI8hOj9zs6Klk%2FBuI90HL94rq0%2BddOF0QgINS%2Fbu4POUaghKzT%2B%2BlNbpHz8W7AsH3aLSozvnBMxmbKPCtvOPjew2oI2Ku2KzdiMtGaxTWkzBe6%2B5s9NxSIVD9BCXlOT1fEd74qYcI6PmRyjh93cnBY5TZmv9kwSVrDTVWEwIqsvhRxXHvcVot6qIV4Jz34a8l%2BA%2Bd%2Bb4PY%2FxZtqKaBUsUgbzFkfshuRjdjo0PKeOgUkz0XlV0%2FCkSlmkT%2Bf%2F4q2dNUrx536YwuQkRwowJFlNWMCNyuVtECvMsgpLjjCjsjteu6W3X0utv4%2B1qWc1DkVPdd1aRTdvB5xrK1Td9XgDQu2wk%2BwZTMvmN3cR60uRupGqP7tJWeXILYY%2FcVQ9c9ssLO7%2BW2orQPs7NkapbaJDhHb%2F4NLhjBWACs9UyA321F%2F3Y2amaG8%2BUfNwnDS%2BIYGNg%2Fbp88clNs%2BFmEWpHask9t%2BC%2F1G9bR9%2FA3c2ugfF7kvlY0P3AnPwqec67Jx9dwGUiL1WGrbwqnq37UgIzlvML35w8QGOqUBhy4XjF1tGHzC%2FOIfZPFLejydYhIM6kH2y33FdOXaLotlXj6pvzFjAjobq7kcyz28igIQWrptff8cGTeDBsnB456Fw9rlEaCCUtFV9cxoWvqpCLWuxoyWRaF2XKRW3CMbXoEFaIuEb9vJN9uqNxzVug9kFIAkHVuUiCnW3GvQ%2B%2BGpgFLBz12oq3Odjwm28M1Lv7C%2BAFzLTlXi1PFyiBY%2FsawBvcWe&X-Amz-Signature=7f8864d04a5b3581f6738549ade310748cd42e44a30247c6e24bf27a9eae2704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQIGB5L7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDM5MxBEkS3gV0I5RmXEIghsfegvY6KrP7kFwgKLfZ9pAiEAiq1gseWyufLM9g66qzVKbv2u3U0LbqW3In5AYUdF6v4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM9of1Id9nZegsDuHCrcAzGgatxLl6FLIha3CZMzG9HNrHpfFOoVSi2OSB6yrQ6hF1wmI33YOggnOeGegmqiU15ZUf9Ue1MjZDqKv2BfFAJ%2FmDzHnTvNBcjuET4AseFYo02%2BcGE7gIOjUc7hFdwKBdezI7OGba3DaDGdNxVJ4u6blJMmfMNwDE9XNou5V1ayYaafY86O9WR4mxvCeWXU47DA6Ff8yiyfKbxpBfj7aouTBvNAKJpWA2RuRLhhcBJIsz%2BQfVEIDUCtT7REs6FL3K1St1bI69lI1eVUj0rMycmofQQ9fMTttPq2avjkuLHYwFTfQPwlxwPBPblp3zw69oe21G1om5a%2Fm%2BCJFs%2FXmYn%2Fi28VHaQy4XHFJhWMm759XdVL1XO1gAAy4N0%2BZYgdnjHAb5i%2F79oGskzVLggkpfG3O5vwPIqqq1PlxwXLKCNh13djwKlssbzdlwx%2F44aLrS3f3DlWqSfbsLj9HTotYZ3PzbgSb60wBs7TK2Lt%2FtT9DupxinUmdg4%2Bi4HZTKXA4SxI9A%2Bd%2BtdEFs%2B4tRxH%2Ba67NhhpdjeHkZQXfRT4OeR%2FL2Z7C%2BaDq%2BAvnjxTyIO7i7chTIYplNdPdcM6iF%2FDVPkjdaaY3ot59Dwi%2FxTj1%2FkINm7EyXhs%2Bx%2BWYEuxMKr5w8QGOqUBBSpkc397Gg7dAetWJu0GoKYDITFAQ9Vixw2djeh%2FAro7CNO1E0y4YvlX8rJG77wTXqBrG%2B8NDFg4rgWd8BoSBZ3ZU3NZm%2B5B8EU2WvEVEhvrFGUAUucd1cO5XarkqW0CqkmqMi7IF%2BFWvusp5QRQ9Qxb8UGN0PLYEV1Vbtuy0bMh%2BgoEcjvOHBOKubMWvaXATs5HyXCO24IZEyPsIdMdeFGakRdt&X-Amz-Signature=ce6d0379ec955326ef373da4948a80d70bb5a39ff5b9332e4f99c0fbfa4b14b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SED5I3VD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDg%2FK%2BbyCPFMXUwP0gsaCfM%2FIAXDrTVtg4pneCxDY3XdgIgdayI8iR2M3943cRr7LZv7eGDXsDILKuOOFeXJrj67qEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLqsc%2BOAMpgg8wvDLircA77O7q4bsa9EKDFudOF8iNcauNVBRMsGo75p7npHnANMvywrQkDcOBGfpLMKgD7sAAUsjFCCywk3bIltxlla0s%2FNkIJkHMcTw7OYwet%2F81w%2BHSVc53401zecKQDIGUwmkDxcEH%2BY47xyO%2BD9%2FA8PSej7wNhgSQtJpCEmP3Gl5fvyGM%2B5rOInGcyCVID8Zi%2FYtXqfo%2BRWM%2FRVPdALDfsSkDetswKsQ7uZ0eOjKk3FVWMgh4uA6ZJt1vtC9mZu8Kt5y4PK9nWMsUad8MAIvytbUpdBIDKv4P5MzUsKzqhI1CGnpVXGK4BPdW6raSFXDRqaX%2FjtrxEYD4O6RFW5ScBeM8VRJXY3KSVi4b3doA8a6IkYfHJGfzvZiiyIIDDHeXgNUhW5hn1pgiLJFLS7UswSGnxFClQKlYwJYdQpVv%2Foo5kbge9B%2BlfxoyWZECBTwAT4%2FtZ9Bw4mJwnJof%2BrSbjC%2BR8Xy4%2FLHcH2qsu0FBMdLYwdOTvYi07kQPOjkGn4SM6HaTrs8BPhBkKMmNw56qtkW2OR58br4LMWmXv3P6RWBzsH%2B7VU0RCnjELy5U5C5uorWH0SBcFIjgKZVHTiPqvajLZ8jGdAktIAH2WSonpmbiew7trr3yH3mqIGPPr3MPr4w8QGOqUBnYB%2BHKrsw4K5I4Zar89fvpRiG3ByYMCQ90ICRxpn96nWZEJiUAS3uxCWt3LNH%2FUL3uZI5RPQeinp5fnXhA3Vn%2BHmXqiQI5O7YDLGh7%2Bi78uwu3QyFJDL8S5MCL5sSh5Wbh7VybW5NQD0gnNCxm6a8ccxrhZR1gopU08Foh2h3JYsepNazH20RplqgeRhnG0Q001nXwyLRdnr%2FVIv6g7a%2Bd0Q27c5&X-Amz-Signature=260d79715993e2f9fb864e9934bf3fe62750aee6d022c1a1b7d8d14e37815118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQIGB5L7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDM5MxBEkS3gV0I5RmXEIghsfegvY6KrP7kFwgKLfZ9pAiEAiq1gseWyufLM9g66qzVKbv2u3U0LbqW3In5AYUdF6v4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM9of1Id9nZegsDuHCrcAzGgatxLl6FLIha3CZMzG9HNrHpfFOoVSi2OSB6yrQ6hF1wmI33YOggnOeGegmqiU15ZUf9Ue1MjZDqKv2BfFAJ%2FmDzHnTvNBcjuET4AseFYo02%2BcGE7gIOjUc7hFdwKBdezI7OGba3DaDGdNxVJ4u6blJMmfMNwDE9XNou5V1ayYaafY86O9WR4mxvCeWXU47DA6Ff8yiyfKbxpBfj7aouTBvNAKJpWA2RuRLhhcBJIsz%2BQfVEIDUCtT7REs6FL3K1St1bI69lI1eVUj0rMycmofQQ9fMTttPq2avjkuLHYwFTfQPwlxwPBPblp3zw69oe21G1om5a%2Fm%2BCJFs%2FXmYn%2Fi28VHaQy4XHFJhWMm759XdVL1XO1gAAy4N0%2BZYgdnjHAb5i%2F79oGskzVLggkpfG3O5vwPIqqq1PlxwXLKCNh13djwKlssbzdlwx%2F44aLrS3f3DlWqSfbsLj9HTotYZ3PzbgSb60wBs7TK2Lt%2FtT9DupxinUmdg4%2Bi4HZTKXA4SxI9A%2Bd%2BtdEFs%2B4tRxH%2Ba67NhhpdjeHkZQXfRT4OeR%2FL2Z7C%2BaDq%2BAvnjxTyIO7i7chTIYplNdPdcM6iF%2FDVPkjdaaY3ot59Dwi%2FxTj1%2FkINm7EyXhs%2Bx%2BWYEuxMKr5w8QGOqUBBSpkc397Gg7dAetWJu0GoKYDITFAQ9Vixw2djeh%2FAro7CNO1E0y4YvlX8rJG77wTXqBrG%2B8NDFg4rgWd8BoSBZ3ZU3NZm%2B5B8EU2WvEVEhvrFGUAUucd1cO5XarkqW0CqkmqMi7IF%2BFWvusp5QRQ9Qxb8UGN0PLYEV1Vbtuy0bMh%2BgoEcjvOHBOKubMWvaXATs5HyXCO24IZEyPsIdMdeFGakRdt&X-Amz-Signature=d054738bd2fed8d45402c23c0a91416b500636d1393412c11a0d62d8be24c0bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJC4ILS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIFTJPJqCEC0ouX%2F3BqqsP%2BMQdqV0yyWzyfWEN22hKbmBAiEA%2BTNlAlnsC8z1xU5A%2FBBeDfXxBPUTrDP8Ml9RGWVtvBgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAm2TVcY%2B7YIE%2F2uvCrcA3wbjFqbjsODkzadNQpm8qKKsTU3R4lkfRzSkaDzDxR6iPzA6EgL88PnqKFk1kDazsy3sGqj2v1c2Jc46GYWSd0sEdo%2FpO4fag1b6OXtxLMqmRmqg58n%2F293%2FP4Qrqh1vExzHM5TXmUbz2EqCkkJD3tmqMRa8W9LhsASpuyxexIm2ISnbmiLzMRM800kNYoLQgUsAmBDgmzgzQzM0tvMc4LwbZDy3QtHWn8S8R2fXVcng%2BIlexTWvKXIqXS4%2BqElgf4pz2zr%2Fao4GMmvdOMwMelRJjWFu10G4Vlsm%2B4n1ZLXILXi9ejTKKQ8dzQmCN57e3fq9zZyAk5%2B60ihBY%2Fmf6yspDKYYzD9PlvSXayYA%2Fm3f3MkZnRt%2FwM8HAr3tvi0rPHah%2FsOYL5yDZADYUYFjqb2xhCfB9SlxxgIAjpCdz1Wxv70Uh1UtxgqfQr7whNUUOsgpdOHY93PC18nOFvLFUbmQqqGfeK9%2BEjsqGwPnXG1c%2FrkVc6uFfqfNNG7Ya%2FBEBcig1PemU0uHnqH%2FQhtDw5hNmeygJxp%2BLY98%2FaiX%2FwkngfTKsYGJbJynmYFDIx39EjI%2BCdF%2FRsj6cHRYDyycKtF5acuJR1IgvTj59%2FhJ%2FD4r98BZ%2B%2FpcCSaoxCsMIT5w8QGOqUBmpDYU11eppPFPU6xUY5%2B0hpR4pooWYlUqA46qCVHr141G0pMFwaEpV%2FX%2FoFqHGyJ0mYIlgGQQK6sE0pDA7UDmnGk%2FhmPJCFaICkhGpeAe6Qu6Rr9ygqHskkIeewEUg7VzbX231767Qw%2FBqgUjHq8N0l7hByVDci5J85gF6lWPzLZ1xQpkbgxP3%2BzQIUzMyRuJmBY8Bo%2FY8RAk1M6Mmffk9Db%2FYDh&X-Amz-Signature=bf78d755cec8dc580b53aac0d877fb832609ba28472796b3b82cef1be969fef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQIGB5L7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDM5MxBEkS3gV0I5RmXEIghsfegvY6KrP7kFwgKLfZ9pAiEAiq1gseWyufLM9g66qzVKbv2u3U0LbqW3In5AYUdF6v4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM9of1Id9nZegsDuHCrcAzGgatxLl6FLIha3CZMzG9HNrHpfFOoVSi2OSB6yrQ6hF1wmI33YOggnOeGegmqiU15ZUf9Ue1MjZDqKv2BfFAJ%2FmDzHnTvNBcjuET4AseFYo02%2BcGE7gIOjUc7hFdwKBdezI7OGba3DaDGdNxVJ4u6blJMmfMNwDE9XNou5V1ayYaafY86O9WR4mxvCeWXU47DA6Ff8yiyfKbxpBfj7aouTBvNAKJpWA2RuRLhhcBJIsz%2BQfVEIDUCtT7REs6FL3K1St1bI69lI1eVUj0rMycmofQQ9fMTttPq2avjkuLHYwFTfQPwlxwPBPblp3zw69oe21G1om5a%2Fm%2BCJFs%2FXmYn%2Fi28VHaQy4XHFJhWMm759XdVL1XO1gAAy4N0%2BZYgdnjHAb5i%2F79oGskzVLggkpfG3O5vwPIqqq1PlxwXLKCNh13djwKlssbzdlwx%2F44aLrS3f3DlWqSfbsLj9HTotYZ3PzbgSb60wBs7TK2Lt%2FtT9DupxinUmdg4%2Bi4HZTKXA4SxI9A%2Bd%2BtdEFs%2B4tRxH%2Ba67NhhpdjeHkZQXfRT4OeR%2FL2Z7C%2BaDq%2BAvnjxTyIO7i7chTIYplNdPdcM6iF%2FDVPkjdaaY3ot59Dwi%2FxTj1%2FkINm7EyXhs%2Bx%2BWYEuxMKr5w8QGOqUBBSpkc397Gg7dAetWJu0GoKYDITFAQ9Vixw2djeh%2FAro7CNO1E0y4YvlX8rJG77wTXqBrG%2B8NDFg4rgWd8BoSBZ3ZU3NZm%2B5B8EU2WvEVEhvrFGUAUucd1cO5XarkqW0CqkmqMi7IF%2BFWvusp5QRQ9Qxb8UGN0PLYEV1Vbtuy0bMh%2BgoEcjvOHBOKubMWvaXATs5HyXCO24IZEyPsIdMdeFGakRdt&X-Amz-Signature=bb870b0a0158ccd9104ed7b06df63a704eef2f2ff1f137cf858a7cf90849b860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ3YSM26%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCBFHdByKWdTWTGVRQxlAYoHPJKUo%2F80FEsy7JT5GkmOAIgVBjJD3I%2Fialsu8gqa%2BLEv7R8R5R1jWycMKE1y6nBHWIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDCuy9x2ddkJAVjUi2CrcA8SQKP1e0RCnrI1Nr0KenZhBZ0Md%2FJvxbDcgJhFxxuFDOpE0%2BzyD%2FKuUCcR08SnWFX3kY9t6X8WYvIgN1O1bD1AfwNKmVA14rrsXtzV%2BCFCi6mO5j7aqWXeitzxadEZ%2FKhypdLlos0vj9iVkaCSFCT5cFKarMrpstmPj54%2FViZfS3cUH279I0Brad4vBOgRj5UiwdxksuUrUJeUREcEdTMVmbyw9zP8MxkoNCSLRtyElidzVkkZk5Hutk%2B0h4mUr0XsEtzqiYEAhkNkBMe%2FHkc49RfFqAqh4rbh%2BgirUt4hur2Cl3GdvfHRNTvZtom8My%2FCskWLqFIbUy2xLxK8GKUAI8yyoOvA%2BMg7fxnWKwe%2BBkaXHXYjjq2IxkMAyg41GYC43xl4sh1gC%2Bi8FPgXCMTT2Xi4PuuP%2B3OPL7MYbMBrxa1BoqXOxf29kteQAWUTpJ%2FDeQQOHGYHtRmHQLMBjRftzZ3yczfaN9tabRRSwb%2BiX%2B4V6H%2B8DOPWqpRYt0%2FFuoWSRlRWUBn2MX92%2F77yDzhDlj%2BO%2FSSwmKPFFlvuZfEb2%2BS0QrmFVHzRef7pSBPdLBvHzcxOXLLHA87DK0SORV9MbvkIIgO3%2Bl%2FXtRJzuKydqIPKGbOu6zJswO6sJMNr4w8QGOqUBsrb1cKFGCW%2FB8LT8PXhc82gi3XTDGEKFVNSiQdGVqLpE2ximzbKMASgtkDc6nrbNDrGOxVx13uh2BY%2FUf05wOeOMCV74vnAoWoN7aDHf6gWF8gunZPOQHG1Qh2zbjvic3Ncn5WYjIhQkl3n3mHle%2Fsn3kLad1jrqmjjTkqorFMm%2BKFNbITSkv2j3%2FFO0paPJV450fZzB%2Be1luIRbTbf1H1sVZ117&X-Amz-Signature=32957e3524893b19a2123f1ed1956f6c4a37301ac026c1cef286c4675334a6ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EFJNXQB%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC7%2FLtz9SnZeDjK24vJe%2Bf0oD%2FouzuILhEbgcp1catH4wIgJcEz6WB4lgjkD6PToClPpyh7J6bQJefhN32dQrjyMVUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLpqqRETWHEojzveiSrcA1CTAHzg9Ewlb%2FYJ2GSkA8BqP0TwBJB9JcSDyf8ndRtQ0leNMpdVi3P4p2eMU040IX0vwPMcQ%2FmxHdHqIgjJ56jiXioR14V6F1nK4m%2BWL36HEvbfPlgTtxaKO%2F0p5xPLxDDCb%2BEW56rJbc67QlFw%2BTEL9zLmcS%2BCvhLRLwAKSsb%2FsKjr%2FddUKch2qu9IFDsi0cbS%2BiarMq3u5g7WYsl3LP1%2BzPhfJYvm9vaXj%2FpPRcqCTV0IE4bGtuSHvwcO2mZOWLDKjp8hnDMufw0tNKCxcNsIToW4zp0AbCgQeeGS2g1K7yhH9s38h%2FLGSZ00yWGK7ee09aw3Zf8Vcoh2TQBFX%2BbLRwnIAtj8ugBZYb7AO6GrN1mKg5UfE%2FCJwqktgMfsnCJfyLOt1dyMkwEjXy%2Fx8iS2ZbmSkuAvyQkZAdpGgnKQWHLAOe37nGe2jLiRoidiA1QX9PP2LdHGlPvvz0dSTHFhoqgttkffyeuaFIoTy2Bp%2BNGdsg%2BxnTz%2B9pucJcZ5fYErrnrhV%2FJ34H%2B%2BPPnn25BXNkCIkgUpcyzSensgaLiNjErF4b4hDPeV4%2Bv7pe1JOTVMXpwk%2BQvYJWjPHj7t7LJ3wjIthFDiCf%2BLDqILjj%2BSHOu2Tl4hcmkXfLiBMND4w8QGOqUBwavDJvwUZfa7jExHg7FW3XnHNARPseLV8hT4%2FfBP%2FABWsnyuY4YKx8IIMWwIZXLkotl8cgPlpXMCBNSJwy4RWKBY%2FrZxS%2Buxtw6d2pOzCzBoJNtfBa3aS8EtOQRRwGrNqowMaOQ2SSlBg439R5tisADvr01k9mMNOrSV3kkKItet1hDFRXNqPN2fFwrCT8e%2FItFXarZqKyYkYkr194nqzbEEFfmP&X-Amz-Signature=1ea0267c47694fea8caa7ca54339db7dcb9c6d040714fb35d1e332350a0869dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXWBVP34%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIHu%2BWu0edMbmAJj7pzgxjgGQjuFbjwwkedJko6Fi4kupAiEAl3uatYhXXhaXtmEJSU83a%2FFlMnhahLVYSBMBal6ARGcq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHTrtreylhMVSOdNdSrcA98ecUuvWV4nrtnM8Ch9eBerK%2FRiQGk4ChNFFdcrYaN3eIQpAoauVOC0oh3SjH0nYTOJoI9WeUtQ%2BAx%2FtagLgUH2QcZ%2BLHRGqwhLhyq4ERFC4i97361PDcreK8%2BcF5ni%2BUBwTRfeVNkBvZHdMS%2FFqQ7GN%2BRDIBkD%2FE6WBWCMvlWlsPZgC5oApFtSpIlC1mhikJfpL%2BZzsX8kZuTPpeDP2FezWMDc1KoXVVHQpaGuZtiygsHYNOPfGzo3IiueCmKGt7LpXMxQPAawf10ndNjzRaAbvDx6DqMuJ6UyeamGA3Matc5JTTS25JkFzxe%2FfwTZ82OZtiXVJOL6g0hpeWq%2FhK74PMgQC7XbDbOISlkweaFotq5D4kQ8bIt0qO9YN2KXL3uSUGeI7EodlIcCD7wrJCABPzlh1RDc0Jv9xFlq%2B4VfEeT1nTnXT%2FBDLpiXdAV4hBSB2z7sF8%2FbNkSg8RqZPoLC5viJH95Bdq9ooEmw0FGlFXDgaW2kQHzOXIBN58OkKkXTyLsEkUuTu6ilOkdHOxBSe5OK4QWmkWrX%2FcZnhrqL1RJxDWs7GwaiWxCRp2T6EGeXevTqo2H8R7pBX8n5uh%2BlxZgaHHca4uv56z88ut8rKRkVZaHNTiPLlEUuMMz4w8QGOqUBtmUxLvS5vcLCbQQhXR4W7HR6MzzGfx8s4PjAupRNvS1kE%2FanaPHJGwd14AHUipAtG4BLFzSeHJanHaqOiGO%2BNrRtWjFmAqU1QPL4Z1yokgFVFyKkxiWoAlsrJ8BDJ0pwnU7MZNgQC3ssaKKJVBCHrMcsxdNLjJx1YDW1jH4c72RN7bNVG45PSNRPVi5idgYfuzV%2FJEXTM3SY3cuQNqXbVDI5vGFV&X-Amz-Signature=6ecbc5ede9ad746046349fc1041c6c6a268a8415d253fe457bc7a850491dcc97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OSBKPJ2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIDebRzQduya%2B4PUr3P%2FZvQUx2uTKbqFcBmucr3cppVQOAiADrN%2BzhatzxDcskxtPkh8wVG2tsK%2BV40fbzqzS9WygmSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM59xQM3z2r7rohTYmKtwDdlRVlV0mGAyxGWGM%2FHM6LuA36%2F4m%2FXjrplpjZeKrRI%2FZOTajRSGHBfG2N0Jbyk2VzHqXtSC%2FcvtwGubbvImU9vYXDt%2FwF6UwrwWiSgVbNtPTcqcgw15Lb0peY2BPzwHx32Jhfbj6v0tO9G0FEV5j0sha9I572v32NJN9XAVgicYXmFqMd27u1JIWXvaIlEKHh8hxAgyYhprrTRZXAnC%2Fw2y4XZQToA49SQ1%2FdtbjpZW6zQzDS2kf5vusHXaIyxXq8VJj2VSfRa83MmTIqf1W2jdZeb%2FPBBrxWise2htIuB%2FJrdegwqN5hzlwgb3%2FVc6bSk5E0Ejfxdm2BjzkPkY31dtz1uxg3H2roBNjP4Dz2bgR6uvwNoYLEbNIHeaMg6J0wRBLL2noTDyiWn0lIzPfZ%2FwMtBIHA36UEVueJc3q3m3SQA10lPp26bD%2FkX2BOd8OTlCli4iygX4Z8EUc6rZ8V%2FrfyoPchKYzBeqMcdSfxdOTJmPwDssR%2FNe3bJN0EdTacNYAyxZKFqkjm0HJn5XpGnuViQ544ozjk6sV9EoxZNEoBdfp48nAno7hPsomtryJ7Ptf9e4D32rfEw%2F1Owej6xvVyDgMJfLmsoy6qQLMdT2tF14vvOMlA%2BieZ3MwrfnDxAY6pgHqEMG33YWdSEE6K%2FhPdgL4HUsgd%2F6KEmaAb1eKXB1imH0JCukedIVq6ept%2BMHWtqpdLF%2BEIvQVy1%2FdklogfSBD7aRc4T83HvIf%2F4f8%2BtOEc8tp9ey0sCO7nAdQZgiIPUUxynrOZRorVtLp%2FHekFXYCUFR8TFJgXf5GpR9zPNoeAFmhpyfX5MWVNRRlV5jezyK1Cz2rMoIM15kmHSL6ZCg%2BP6f%2FpqR3&X-Amz-Signature=60d65ee6b155b9b274dfcab5362843305f7c9c7e9e5b543a70a90d9be84f8588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRT3GUGI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDWjIe41rOG5dm%2Bv7hEQg9sl4xQCBTQcRsJG0z1ilFeIwIgAq1WYp4WTEo7GC5WjXF%2BBAu%2FIcSUpdiRNprDHzOn2SEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDG16%2Fk5VFXtqeeBMmyrcAyHPH9KMtjtnDvp1rx9%2BjWp6mgp34EbPUQLC7M3OIYApytpIj9TZzCY2NKj3SLp5pI7FRObvC%2FRFU1Gt8m4sSQ%2Fw3SJ0v3%2FVlMX4hM5feRCUgGBUZh2m99e6VFWS%2F8lYYbqt5tIgmAap8UpMUBsgzYvttBi8ZIk1V0ztwc52svJ4ao6MFMJHMyUxej0V8tLGJzSYGxjYHdJ6xXJS5N6%2BFHGrEJinGyAplY1QA49zJXNsStvdKZzqSOhG58A6XFrkOUb0OdV2djQx%2BOmQWsrzP%2B6kBmaeI5wYwIgbgSgQHO0P0mU5RpWLxBYs6ZSSTjGK2CnHIKEMTXR0CRCsfnL6rvCLLbI3AaQHR4cfNOkyF6YCq%2BbLLaYR8Gl1Unl5Jf7am48N1vNbHJUdq3nhCBqtrklEkl4mzZqT1gSD1fevTDK6YBiSHoIu0JdxFhmvZEKf4i8Ksr%2FgB%2BwFP13iIaI4BWRU%2FEuvYaf6%2F%2BZEPxvXirdTFCV9Lb3a2y3mMIQoqQ69KNu8OrBXugnvdz1vYpojbZ%2BODvA49k9yG%2FZ3gHY6V8G5MdoYXozN1bE3%2FT%2BzJTAOx35lRkGJHsxUxUq2Ye%2Fxz2CX8VEpEpH4xaS3woM4e3AeXDQSBKRRr8G56HXVMKz5w8QGOqUB0Vjm%2FdesiRgXE6rEEoeshrgI6F0k6fjZoYoKG8PjycfcykCoGgjWBd69K0JspUOaZofj%2F5tkYrCSIWpuXfwkYBrqeluf%2BzXh0Z1EQ%2BNuiowwWg5CdWHXHuC7hF0P7c7612JJL9qOpdSpaOEowsLIisKlrDjFlmu9aW3sX%2FdzM%2F%2B3FzK6YU7Am0wLW8XFEGnWpg%2FcavBgDjcxC%2FTbW0PhuYYdrKOP&X-Amz-Signature=6362c2c5eafde5a84b262279fbb018babf94e9595cdf64f03dbe9a90eee33c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQIGB5L7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDM5MxBEkS3gV0I5RmXEIghsfegvY6KrP7kFwgKLfZ9pAiEAiq1gseWyufLM9g66qzVKbv2u3U0LbqW3In5AYUdF6v4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM9of1Id9nZegsDuHCrcAzGgatxLl6FLIha3CZMzG9HNrHpfFOoVSi2OSB6yrQ6hF1wmI33YOggnOeGegmqiU15ZUf9Ue1MjZDqKv2BfFAJ%2FmDzHnTvNBcjuET4AseFYo02%2BcGE7gIOjUc7hFdwKBdezI7OGba3DaDGdNxVJ4u6blJMmfMNwDE9XNou5V1ayYaafY86O9WR4mxvCeWXU47DA6Ff8yiyfKbxpBfj7aouTBvNAKJpWA2RuRLhhcBJIsz%2BQfVEIDUCtT7REs6FL3K1St1bI69lI1eVUj0rMycmofQQ9fMTttPq2avjkuLHYwFTfQPwlxwPBPblp3zw69oe21G1om5a%2Fm%2BCJFs%2FXmYn%2Fi28VHaQy4XHFJhWMm759XdVL1XO1gAAy4N0%2BZYgdnjHAb5i%2F79oGskzVLggkpfG3O5vwPIqqq1PlxwXLKCNh13djwKlssbzdlwx%2F44aLrS3f3DlWqSfbsLj9HTotYZ3PzbgSb60wBs7TK2Lt%2FtT9DupxinUmdg4%2Bi4HZTKXA4SxI9A%2Bd%2BtdEFs%2B4tRxH%2Ba67NhhpdjeHkZQXfRT4OeR%2FL2Z7C%2BaDq%2BAvnjxTyIO7i7chTIYplNdPdcM6iF%2FDVPkjdaaY3ot59Dwi%2FxTj1%2FkINm7EyXhs%2Bx%2BWYEuxMKr5w8QGOqUBBSpkc397Gg7dAetWJu0GoKYDITFAQ9Vixw2djeh%2FAro7CNO1E0y4YvlX8rJG77wTXqBrG%2B8NDFg4rgWd8BoSBZ3ZU3NZm%2B5B8EU2WvEVEhvrFGUAUucd1cO5XarkqW0CqkmqMi7IF%2BFWvusp5QRQ9Qxb8UGN0PLYEV1Vbtuy0bMh%2BgoEcjvOHBOKubMWvaXATs5HyXCO24IZEyPsIdMdeFGakRdt&X-Amz-Signature=e8705e8ef3f1e81f689c03c8e03199ddd94ebec39e7c9e47f8e79e0b143820e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQIGB5L7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDM5MxBEkS3gV0I5RmXEIghsfegvY6KrP7kFwgKLfZ9pAiEAiq1gseWyufLM9g66qzVKbv2u3U0LbqW3In5AYUdF6v4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDM9of1Id9nZegsDuHCrcAzGgatxLl6FLIha3CZMzG9HNrHpfFOoVSi2OSB6yrQ6hF1wmI33YOggnOeGegmqiU15ZUf9Ue1MjZDqKv2BfFAJ%2FmDzHnTvNBcjuET4AseFYo02%2BcGE7gIOjUc7hFdwKBdezI7OGba3DaDGdNxVJ4u6blJMmfMNwDE9XNou5V1ayYaafY86O9WR4mxvCeWXU47DA6Ff8yiyfKbxpBfj7aouTBvNAKJpWA2RuRLhhcBJIsz%2BQfVEIDUCtT7REs6FL3K1St1bI69lI1eVUj0rMycmofQQ9fMTttPq2avjkuLHYwFTfQPwlxwPBPblp3zw69oe21G1om5a%2Fm%2BCJFs%2FXmYn%2Fi28VHaQy4XHFJhWMm759XdVL1XO1gAAy4N0%2BZYgdnjHAb5i%2F79oGskzVLggkpfG3O5vwPIqqq1PlxwXLKCNh13djwKlssbzdlwx%2F44aLrS3f3DlWqSfbsLj9HTotYZ3PzbgSb60wBs7TK2Lt%2FtT9DupxinUmdg4%2Bi4HZTKXA4SxI9A%2Bd%2BtdEFs%2B4tRxH%2Ba67NhhpdjeHkZQXfRT4OeR%2FL2Z7C%2BaDq%2BAvnjxTyIO7i7chTIYplNdPdcM6iF%2FDVPkjdaaY3ot59Dwi%2FxTj1%2FkINm7EyXhs%2Bx%2BWYEuxMKr5w8QGOqUBBSpkc397Gg7dAetWJu0GoKYDITFAQ9Vixw2djeh%2FAro7CNO1E0y4YvlX8rJG77wTXqBrG%2B8NDFg4rgWd8BoSBZ3ZU3NZm%2B5B8EU2WvEVEhvrFGUAUucd1cO5XarkqW0CqkmqMi7IF%2BFWvusp5QRQ9Qxb8UGN0PLYEV1Vbtuy0bMh%2BgoEcjvOHBOKubMWvaXATs5HyXCO24IZEyPsIdMdeFGakRdt&X-Amz-Signature=5eaafbddd89dd23c3db930cebedb731e501e5697af15a995953b727690a19635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2527JSG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDRRawmWYj18Q4vW%2F57LQuc682PTWlMNhJhETydRrlDWAIgGgLh%2FplZBeC29we3in%2BwIqGdOTTrXY0Jkdi28y6srbYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDD4%2FM4dIGKzh%2BufAFCrcA7ynA8VPxRBtzvGQof6qm6X48cK%2B5EOnp0%2FOukAB6USPCY23UZ57ABEyN8LHjVLQBP3ZRl75pwiSRwnmDkBCP%2FGddrbhiaB8doz2fUn%2BF0b4YJsslPSWvf%2F9z94LAn3TfXwL%2FN454UZ%2FRccClbjWAno5LgttCSNQHLjEuh5DL0zZfT0A%2Fq2p0ILUWy8jHKX3h3AyESELyy9RwPhclM1ZNM6jrw8OhiyHhxLuqTCloJT0x%2FO41Jxw8q2b7%2F4BGXveOjL7MNDIMSWwOA2jIDf4%2BaBC6e5%2BDe%2Ff3Ua2LFoNwTjyKrMsfk44i%2FVdJ%2BP2MKWTL71UxYgbkn8fg%2FyUcxCde1Jc5kQhGU5zjPcPyxNjOoJShz90BP0Q3R1qtA3886BvZ9vRWDonF9VCzrjpwKKLbjzenHcV7%2FQODq27yyRAmaq9WNZRIQGS8iopUCKjGcCVEsiukt6MWcSDXbtEUyira8L4xF%2BxKNLG5DyCk8cer3arkDCr0Vtg%2FJA4j5nJ%2BY%2BThOfvi3g6n8gH9xCpWkyWW7dfBl%2Bp1t%2F6SPO8faUVAaCGyKEnTrgFgGhHCKFqcEhQyXxbNShc60UFQYDJTNz4co4ftSp91kX6M3Hx9y6Hd5zPGrfJffMDnaFNSL43MM%2F4w8QGOqUBs3B%2B%2FgedcUS%2FG36auNRKYQtcVV0RVus3m5Bbey4GVyiG3pdvz9Se5pafQxTGzpvYUQm7KMnUbqBfojd4QbJP07X8wksmRtAm0jn2tXvW%2F10AI38g%2FMePJ0zR2I56oDaCZdRjAezhwPwd1gyo1QYAP3kRKWXGaQIc1Sj8rY3RkUegoO0wP5Ebjdh9oJv40XjZNIVaBvnZmsNKKuKrN46OE3ByX52Q&X-Amz-Signature=01a1bee654ca925016c988a2ae1a812fb7a69a62577102c07a593f7016f32253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2527JSG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDRRawmWYj18Q4vW%2F57LQuc682PTWlMNhJhETydRrlDWAIgGgLh%2FplZBeC29we3in%2BwIqGdOTTrXY0Jkdi28y6srbYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDD4%2FM4dIGKzh%2BufAFCrcA7ynA8VPxRBtzvGQof6qm6X48cK%2B5EOnp0%2FOukAB6USPCY23UZ57ABEyN8LHjVLQBP3ZRl75pwiSRwnmDkBCP%2FGddrbhiaB8doz2fUn%2BF0b4YJsslPSWvf%2F9z94LAn3TfXwL%2FN454UZ%2FRccClbjWAno5LgttCSNQHLjEuh5DL0zZfT0A%2Fq2p0ILUWy8jHKX3h3AyESELyy9RwPhclM1ZNM6jrw8OhiyHhxLuqTCloJT0x%2FO41Jxw8q2b7%2F4BGXveOjL7MNDIMSWwOA2jIDf4%2BaBC6e5%2BDe%2Ff3Ua2LFoNwTjyKrMsfk44i%2FVdJ%2BP2MKWTL71UxYgbkn8fg%2FyUcxCde1Jc5kQhGU5zjPcPyxNjOoJShz90BP0Q3R1qtA3886BvZ9vRWDonF9VCzrjpwKKLbjzenHcV7%2FQODq27yyRAmaq9WNZRIQGS8iopUCKjGcCVEsiukt6MWcSDXbtEUyira8L4xF%2BxKNLG5DyCk8cer3arkDCr0Vtg%2FJA4j5nJ%2BY%2BThOfvi3g6n8gH9xCpWkyWW7dfBl%2Bp1t%2F6SPO8faUVAaCGyKEnTrgFgGhHCKFqcEhQyXxbNShc60UFQYDJTNz4co4ftSp91kX6M3Hx9y6Hd5zPGrfJffMDnaFNSL43MM%2F4w8QGOqUBs3B%2B%2FgedcUS%2FG36auNRKYQtcVV0RVus3m5Bbey4GVyiG3pdvz9Se5pafQxTGzpvYUQm7KMnUbqBfojd4QbJP07X8wksmRtAm0jn2tXvW%2F10AI38g%2FMePJ0zR2I56oDaCZdRjAezhwPwd1gyo1QYAP3kRKWXGaQIc1Sj8rY3RkUegoO0wP5Ebjdh9oJv40XjZNIVaBvnZmsNKKuKrN46OE3ByX52Q&X-Amz-Signature=bdbcc9b8ed3035b1670b2a45637d3e12a727cb19ea4d6afb96bb48be2505a72a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2527JSG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDRRawmWYj18Q4vW%2F57LQuc682PTWlMNhJhETydRrlDWAIgGgLh%2FplZBeC29we3in%2BwIqGdOTTrXY0Jkdi28y6srbYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDD4%2FM4dIGKzh%2BufAFCrcA7ynA8VPxRBtzvGQof6qm6X48cK%2B5EOnp0%2FOukAB6USPCY23UZ57ABEyN8LHjVLQBP3ZRl75pwiSRwnmDkBCP%2FGddrbhiaB8doz2fUn%2BF0b4YJsslPSWvf%2F9z94LAn3TfXwL%2FN454UZ%2FRccClbjWAno5LgttCSNQHLjEuh5DL0zZfT0A%2Fq2p0ILUWy8jHKX3h3AyESELyy9RwPhclM1ZNM6jrw8OhiyHhxLuqTCloJT0x%2FO41Jxw8q2b7%2F4BGXveOjL7MNDIMSWwOA2jIDf4%2BaBC6e5%2BDe%2Ff3Ua2LFoNwTjyKrMsfk44i%2FVdJ%2BP2MKWTL71UxYgbkn8fg%2FyUcxCde1Jc5kQhGU5zjPcPyxNjOoJShz90BP0Q3R1qtA3886BvZ9vRWDonF9VCzrjpwKKLbjzenHcV7%2FQODq27yyRAmaq9WNZRIQGS8iopUCKjGcCVEsiukt6MWcSDXbtEUyira8L4xF%2BxKNLG5DyCk8cer3arkDCr0Vtg%2FJA4j5nJ%2BY%2BThOfvi3g6n8gH9xCpWkyWW7dfBl%2Bp1t%2F6SPO8faUVAaCGyKEnTrgFgGhHCKFqcEhQyXxbNShc60UFQYDJTNz4co4ftSp91kX6M3Hx9y6Hd5zPGrfJffMDnaFNSL43MM%2F4w8QGOqUBs3B%2B%2FgedcUS%2FG36auNRKYQtcVV0RVus3m5Bbey4GVyiG3pdvz9Se5pafQxTGzpvYUQm7KMnUbqBfojd4QbJP07X8wksmRtAm0jn2tXvW%2F10AI38g%2FMePJ0zR2I56oDaCZdRjAezhwPwd1gyo1QYAP3kRKWXGaQIc1Sj8rY3RkUegoO0wP5Ebjdh9oJv40XjZNIVaBvnZmsNKKuKrN46OE3ByX52Q&X-Amz-Signature=927b19dbfc55576593a857d87c1e93cf8d81f12c9a56c5275c62200fc1971b6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2527JSG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDRRawmWYj18Q4vW%2F57LQuc682PTWlMNhJhETydRrlDWAIgGgLh%2FplZBeC29we3in%2BwIqGdOTTrXY0Jkdi28y6srbYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDD4%2FM4dIGKzh%2BufAFCrcA7ynA8VPxRBtzvGQof6qm6X48cK%2B5EOnp0%2FOukAB6USPCY23UZ57ABEyN8LHjVLQBP3ZRl75pwiSRwnmDkBCP%2FGddrbhiaB8doz2fUn%2BF0b4YJsslPSWvf%2F9z94LAn3TfXwL%2FN454UZ%2FRccClbjWAno5LgttCSNQHLjEuh5DL0zZfT0A%2Fq2p0ILUWy8jHKX3h3AyESELyy9RwPhclM1ZNM6jrw8OhiyHhxLuqTCloJT0x%2FO41Jxw8q2b7%2F4BGXveOjL7MNDIMSWwOA2jIDf4%2BaBC6e5%2BDe%2Ff3Ua2LFoNwTjyKrMsfk44i%2FVdJ%2BP2MKWTL71UxYgbkn8fg%2FyUcxCde1Jc5kQhGU5zjPcPyxNjOoJShz90BP0Q3R1qtA3886BvZ9vRWDonF9VCzrjpwKKLbjzenHcV7%2FQODq27yyRAmaq9WNZRIQGS8iopUCKjGcCVEsiukt6MWcSDXbtEUyira8L4xF%2BxKNLG5DyCk8cer3arkDCr0Vtg%2FJA4j5nJ%2BY%2BThOfvi3g6n8gH9xCpWkyWW7dfBl%2Bp1t%2F6SPO8faUVAaCGyKEnTrgFgGhHCKFqcEhQyXxbNShc60UFQYDJTNz4co4ftSp91kX6M3Hx9y6Hd5zPGrfJffMDnaFNSL43MM%2F4w8QGOqUBs3B%2B%2FgedcUS%2FG36auNRKYQtcVV0RVus3m5Bbey4GVyiG3pdvz9Se5pafQxTGzpvYUQm7KMnUbqBfojd4QbJP07X8wksmRtAm0jn2tXvW%2F10AI38g%2FMePJ0zR2I56oDaCZdRjAezhwPwd1gyo1QYAP3kRKWXGaQIc1Sj8rY3RkUegoO0wP5Ebjdh9oJv40XjZNIVaBvnZmsNKKuKrN46OE3ByX52Q&X-Amz-Signature=2cf708010e5cc5cc9f766fe20e4b7793271ee88b69835b4faf89f94884999640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2527JSG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDRRawmWYj18Q4vW%2F57LQuc682PTWlMNhJhETydRrlDWAIgGgLh%2FplZBeC29we3in%2BwIqGdOTTrXY0Jkdi28y6srbYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDD4%2FM4dIGKzh%2BufAFCrcA7ynA8VPxRBtzvGQof6qm6X48cK%2B5EOnp0%2FOukAB6USPCY23UZ57ABEyN8LHjVLQBP3ZRl75pwiSRwnmDkBCP%2FGddrbhiaB8doz2fUn%2BF0b4YJsslPSWvf%2F9z94LAn3TfXwL%2FN454UZ%2FRccClbjWAno5LgttCSNQHLjEuh5DL0zZfT0A%2Fq2p0ILUWy8jHKX3h3AyESELyy9RwPhclM1ZNM6jrw8OhiyHhxLuqTCloJT0x%2FO41Jxw8q2b7%2F4BGXveOjL7MNDIMSWwOA2jIDf4%2BaBC6e5%2BDe%2Ff3Ua2LFoNwTjyKrMsfk44i%2FVdJ%2BP2MKWTL71UxYgbkn8fg%2FyUcxCde1Jc5kQhGU5zjPcPyxNjOoJShz90BP0Q3R1qtA3886BvZ9vRWDonF9VCzrjpwKKLbjzenHcV7%2FQODq27yyRAmaq9WNZRIQGS8iopUCKjGcCVEsiukt6MWcSDXbtEUyira8L4xF%2BxKNLG5DyCk8cer3arkDCr0Vtg%2FJA4j5nJ%2BY%2BThOfvi3g6n8gH9xCpWkyWW7dfBl%2Bp1t%2F6SPO8faUVAaCGyKEnTrgFgGhHCKFqcEhQyXxbNShc60UFQYDJTNz4co4ftSp91kX6M3Hx9y6Hd5zPGrfJffMDnaFNSL43MM%2F4w8QGOqUBs3B%2B%2FgedcUS%2FG36auNRKYQtcVV0RVus3m5Bbey4GVyiG3pdvz9Se5pafQxTGzpvYUQm7KMnUbqBfojd4QbJP07X8wksmRtAm0jn2tXvW%2F10AI38g%2FMePJ0zR2I56oDaCZdRjAezhwPwd1gyo1QYAP3kRKWXGaQIc1Sj8rY3RkUegoO0wP5Ebjdh9oJv40XjZNIVaBvnZmsNKKuKrN46OE3ByX52Q&X-Amz-Signature=393dd2af9034378fdc1cb43b1d1a13bec11a549c467128677c9b1baa21309f07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2527JSG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDRRawmWYj18Q4vW%2F57LQuc682PTWlMNhJhETydRrlDWAIgGgLh%2FplZBeC29we3in%2BwIqGdOTTrXY0Jkdi28y6srbYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDD4%2FM4dIGKzh%2BufAFCrcA7ynA8VPxRBtzvGQof6qm6X48cK%2B5EOnp0%2FOukAB6USPCY23UZ57ABEyN8LHjVLQBP3ZRl75pwiSRwnmDkBCP%2FGddrbhiaB8doz2fUn%2BF0b4YJsslPSWvf%2F9z94LAn3TfXwL%2FN454UZ%2FRccClbjWAno5LgttCSNQHLjEuh5DL0zZfT0A%2Fq2p0ILUWy8jHKX3h3AyESELyy9RwPhclM1ZNM6jrw8OhiyHhxLuqTCloJT0x%2FO41Jxw8q2b7%2F4BGXveOjL7MNDIMSWwOA2jIDf4%2BaBC6e5%2BDe%2Ff3Ua2LFoNwTjyKrMsfk44i%2FVdJ%2BP2MKWTL71UxYgbkn8fg%2FyUcxCde1Jc5kQhGU5zjPcPyxNjOoJShz90BP0Q3R1qtA3886BvZ9vRWDonF9VCzrjpwKKLbjzenHcV7%2FQODq27yyRAmaq9WNZRIQGS8iopUCKjGcCVEsiukt6MWcSDXbtEUyira8L4xF%2BxKNLG5DyCk8cer3arkDCr0Vtg%2FJA4j5nJ%2BY%2BThOfvi3g6n8gH9xCpWkyWW7dfBl%2Bp1t%2F6SPO8faUVAaCGyKEnTrgFgGhHCKFqcEhQyXxbNShc60UFQYDJTNz4co4ftSp91kX6M3Hx9y6Hd5zPGrfJffMDnaFNSL43MM%2F4w8QGOqUBs3B%2B%2FgedcUS%2FG36auNRKYQtcVV0RVus3m5Bbey4GVyiG3pdvz9Se5pafQxTGzpvYUQm7KMnUbqBfojd4QbJP07X8wksmRtAm0jn2tXvW%2F10AI38g%2FMePJ0zR2I56oDaCZdRjAezhwPwd1gyo1QYAP3kRKWXGaQIc1Sj8rY3RkUegoO0wP5Ebjdh9oJv40XjZNIVaBvnZmsNKKuKrN46OE3ByX52Q&X-Amz-Signature=c2c9d822cb4cf22052aa1819661640166e7234ebf9811064eb1f039fa0c52be0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2527JSG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDRRawmWYj18Q4vW%2F57LQuc682PTWlMNhJhETydRrlDWAIgGgLh%2FplZBeC29we3in%2BwIqGdOTTrXY0Jkdi28y6srbYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDD4%2FM4dIGKzh%2BufAFCrcA7ynA8VPxRBtzvGQof6qm6X48cK%2B5EOnp0%2FOukAB6USPCY23UZ57ABEyN8LHjVLQBP3ZRl75pwiSRwnmDkBCP%2FGddrbhiaB8doz2fUn%2BF0b4YJsslPSWvf%2F9z94LAn3TfXwL%2FN454UZ%2FRccClbjWAno5LgttCSNQHLjEuh5DL0zZfT0A%2Fq2p0ILUWy8jHKX3h3AyESELyy9RwPhclM1ZNM6jrw8OhiyHhxLuqTCloJT0x%2FO41Jxw8q2b7%2F4BGXveOjL7MNDIMSWwOA2jIDf4%2BaBC6e5%2BDe%2Ff3Ua2LFoNwTjyKrMsfk44i%2FVdJ%2BP2MKWTL71UxYgbkn8fg%2FyUcxCde1Jc5kQhGU5zjPcPyxNjOoJShz90BP0Q3R1qtA3886BvZ9vRWDonF9VCzrjpwKKLbjzenHcV7%2FQODq27yyRAmaq9WNZRIQGS8iopUCKjGcCVEsiukt6MWcSDXbtEUyira8L4xF%2BxKNLG5DyCk8cer3arkDCr0Vtg%2FJA4j5nJ%2BY%2BThOfvi3g6n8gH9xCpWkyWW7dfBl%2Bp1t%2F6SPO8faUVAaCGyKEnTrgFgGhHCKFqcEhQyXxbNShc60UFQYDJTNz4co4ftSp91kX6M3Hx9y6Hd5zPGrfJffMDnaFNSL43MM%2F4w8QGOqUBs3B%2B%2FgedcUS%2FG36auNRKYQtcVV0RVus3m5Bbey4GVyiG3pdvz9Se5pafQxTGzpvYUQm7KMnUbqBfojd4QbJP07X8wksmRtAm0jn2tXvW%2F10AI38g%2FMePJ0zR2I56oDaCZdRjAezhwPwd1gyo1QYAP3kRKWXGaQIc1Sj8rY3RkUegoO0wP5Ebjdh9oJv40XjZNIVaBvnZmsNKKuKrN46OE3ByX52Q&X-Amz-Signature=927b19dbfc55576593a857d87c1e93cf8d81f12c9a56c5275c62200fc1971b6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2527JSG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDRRawmWYj18Q4vW%2F57LQuc682PTWlMNhJhETydRrlDWAIgGgLh%2FplZBeC29we3in%2BwIqGdOTTrXY0Jkdi28y6srbYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDD4%2FM4dIGKzh%2BufAFCrcA7ynA8VPxRBtzvGQof6qm6X48cK%2B5EOnp0%2FOukAB6USPCY23UZ57ABEyN8LHjVLQBP3ZRl75pwiSRwnmDkBCP%2FGddrbhiaB8doz2fUn%2BF0b4YJsslPSWvf%2F9z94LAn3TfXwL%2FN454UZ%2FRccClbjWAno5LgttCSNQHLjEuh5DL0zZfT0A%2Fq2p0ILUWy8jHKX3h3AyESELyy9RwPhclM1ZNM6jrw8OhiyHhxLuqTCloJT0x%2FO41Jxw8q2b7%2F4BGXveOjL7MNDIMSWwOA2jIDf4%2BaBC6e5%2BDe%2Ff3Ua2LFoNwTjyKrMsfk44i%2FVdJ%2BP2MKWTL71UxYgbkn8fg%2FyUcxCde1Jc5kQhGU5zjPcPyxNjOoJShz90BP0Q3R1qtA3886BvZ9vRWDonF9VCzrjpwKKLbjzenHcV7%2FQODq27yyRAmaq9WNZRIQGS8iopUCKjGcCVEsiukt6MWcSDXbtEUyira8L4xF%2BxKNLG5DyCk8cer3arkDCr0Vtg%2FJA4j5nJ%2BY%2BThOfvi3g6n8gH9xCpWkyWW7dfBl%2Bp1t%2F6SPO8faUVAaCGyKEnTrgFgGhHCKFqcEhQyXxbNShc60UFQYDJTNz4co4ftSp91kX6M3Hx9y6Hd5zPGrfJffMDnaFNSL43MM%2F4w8QGOqUBs3B%2B%2FgedcUS%2FG36auNRKYQtcVV0RVus3m5Bbey4GVyiG3pdvz9Se5pafQxTGzpvYUQm7KMnUbqBfojd4QbJP07X8wksmRtAm0jn2tXvW%2F10AI38g%2FMePJ0zR2I56oDaCZdRjAezhwPwd1gyo1QYAP3kRKWXGaQIc1Sj8rY3RkUegoO0wP5Ebjdh9oJv40XjZNIVaBvnZmsNKKuKrN46OE3ByX52Q&X-Amz-Signature=bd0d70acb233f84ff5474ba57039b35397dd7bb5964c2e3261caeaec13caafa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2527JSG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDRRawmWYj18Q4vW%2F57LQuc682PTWlMNhJhETydRrlDWAIgGgLh%2FplZBeC29we3in%2BwIqGdOTTrXY0Jkdi28y6srbYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDD4%2FM4dIGKzh%2BufAFCrcA7ynA8VPxRBtzvGQof6qm6X48cK%2B5EOnp0%2FOukAB6USPCY23UZ57ABEyN8LHjVLQBP3ZRl75pwiSRwnmDkBCP%2FGddrbhiaB8doz2fUn%2BF0b4YJsslPSWvf%2F9z94LAn3TfXwL%2FN454UZ%2FRccClbjWAno5LgttCSNQHLjEuh5DL0zZfT0A%2Fq2p0ILUWy8jHKX3h3AyESELyy9RwPhclM1ZNM6jrw8OhiyHhxLuqTCloJT0x%2FO41Jxw8q2b7%2F4BGXveOjL7MNDIMSWwOA2jIDf4%2BaBC6e5%2BDe%2Ff3Ua2LFoNwTjyKrMsfk44i%2FVdJ%2BP2MKWTL71UxYgbkn8fg%2FyUcxCde1Jc5kQhGU5zjPcPyxNjOoJShz90BP0Q3R1qtA3886BvZ9vRWDonF9VCzrjpwKKLbjzenHcV7%2FQODq27yyRAmaq9WNZRIQGS8iopUCKjGcCVEsiukt6MWcSDXbtEUyira8L4xF%2BxKNLG5DyCk8cer3arkDCr0Vtg%2FJA4j5nJ%2BY%2BThOfvi3g6n8gH9xCpWkyWW7dfBl%2Bp1t%2F6SPO8faUVAaCGyKEnTrgFgGhHCKFqcEhQyXxbNShc60UFQYDJTNz4co4ftSp91kX6M3Hx9y6Hd5zPGrfJffMDnaFNSL43MM%2F4w8QGOqUBs3B%2B%2FgedcUS%2FG36auNRKYQtcVV0RVus3m5Bbey4GVyiG3pdvz9Se5pafQxTGzpvYUQm7KMnUbqBfojd4QbJP07X8wksmRtAm0jn2tXvW%2F10AI38g%2FMePJ0zR2I56oDaCZdRjAezhwPwd1gyo1QYAP3kRKWXGaQIc1Sj8rY3RkUegoO0wP5Ebjdh9oJv40XjZNIVaBvnZmsNKKuKrN46OE3ByX52Q&X-Amz-Signature=2c4a8c9ee8d95459c5ca64946f5975bd2b5d15c2dc209e2169aa02551163f7a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2527JSG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDRRawmWYj18Q4vW%2F57LQuc682PTWlMNhJhETydRrlDWAIgGgLh%2FplZBeC29we3in%2BwIqGdOTTrXY0Jkdi28y6srbYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDD4%2FM4dIGKzh%2BufAFCrcA7ynA8VPxRBtzvGQof6qm6X48cK%2B5EOnp0%2FOukAB6USPCY23UZ57ABEyN8LHjVLQBP3ZRl75pwiSRwnmDkBCP%2FGddrbhiaB8doz2fUn%2BF0b4YJsslPSWvf%2F9z94LAn3TfXwL%2FN454UZ%2FRccClbjWAno5LgttCSNQHLjEuh5DL0zZfT0A%2Fq2p0ILUWy8jHKX3h3AyESELyy9RwPhclM1ZNM6jrw8OhiyHhxLuqTCloJT0x%2FO41Jxw8q2b7%2F4BGXveOjL7MNDIMSWwOA2jIDf4%2BaBC6e5%2BDe%2Ff3Ua2LFoNwTjyKrMsfk44i%2FVdJ%2BP2MKWTL71UxYgbkn8fg%2FyUcxCde1Jc5kQhGU5zjPcPyxNjOoJShz90BP0Q3R1qtA3886BvZ9vRWDonF9VCzrjpwKKLbjzenHcV7%2FQODq27yyRAmaq9WNZRIQGS8iopUCKjGcCVEsiukt6MWcSDXbtEUyira8L4xF%2BxKNLG5DyCk8cer3arkDCr0Vtg%2FJA4j5nJ%2BY%2BThOfvi3g6n8gH9xCpWkyWW7dfBl%2Bp1t%2F6SPO8faUVAaCGyKEnTrgFgGhHCKFqcEhQyXxbNShc60UFQYDJTNz4co4ftSp91kX6M3Hx9y6Hd5zPGrfJffMDnaFNSL43MM%2F4w8QGOqUBs3B%2B%2FgedcUS%2FG36auNRKYQtcVV0RVus3m5Bbey4GVyiG3pdvz9Se5pafQxTGzpvYUQm7KMnUbqBfojd4QbJP07X8wksmRtAm0jn2tXvW%2F10AI38g%2FMePJ0zR2I56oDaCZdRjAezhwPwd1gyo1QYAP3kRKWXGaQIc1Sj8rY3RkUegoO0wP5Ebjdh9oJv40XjZNIVaBvnZmsNKKuKrN46OE3ByX52Q&X-Amz-Signature=e209c7a7fc213cd72261346ca263454032b50e70c3cc974a692fa81f19380a35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
