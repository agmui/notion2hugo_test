---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T23:33:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T23:33:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCOG5JO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIATcmYwt6QgbzFtUKADCXge8kXkoNfdzhUYuvbxEof%2FzAiAI5f7aYZ%2FUusYiDIYoeAp9byz7UHF0kzjDrMwwXC%2FeoCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMet9Qx1xmy9xTLIYQKtwDf6JTxu8UsIY6TrD9cvBLIZg5RfPuuKbcZ0xbEof%2BHV1sTtVKtr%2Feer1m782HgzdfPipaeQ1aW7pS3Wb2XxJlpncQYRWvkn5oMuOiVS0d%2FQnzgpiKEj0xudxTrriNhZWC6Xq5fI96JqDRuRs2bRKOGdgLsHNSOVR6tJ1CMJt2DfBD2j1vPSzoxZl0ga9IPctAwne7GMEAco5%2Bg4fXAw2rtwaOyWxUhNUEZCPeWEC0gx8NN4da0%2Bjv00hTg54fRKzHePmPh6B9z%2BWoFfTfivaN3cW30t%2FMvg8DKcPqEjuXWZKfuzXTfsKrDwHFxrzFa6Z6s3lfm33vVoIs3XBi2dO3eUjKegcCQOzeweu9%2FiA%2B9%2FQd0mkJPT0J3sDmvAsMcwnJhADxH2XbshxCYhJRMLL%2Bj7EM4UMJ6P98C2laODtu%2BM232pW5rG370a%2BC%2FuQ%2B0HDyc%2BtYk%2BooIvfvtycTeQRwFQxybBoZ45zDH0AcNC8PBIrXbClUqtXVEkjH2oXqiq%2BeYAowYi2Ykxw8VYGglgGZx%2Bb8BZlutwzYJUzt0wiEUTFfBs8R5YApCIzzTLTDJtQu4l7qYTrst9yZwHi%2FOcMFK85do%2BEjpw%2FWZstjxl39qC7dINnAlRrul0omRiowrv%2BUxAY6pgGmqWxOXgzyJC%2FS8MKOSmniu%2B30gal5sj5q6gaFJUiJAtd%2FIIHIiE%2BpuyDeqETtyuaEO8bXW665GkiNNab3MGoFUUanASTGmcDh%2FXOAnLb%2FCElstYXoX7qq2pgfzxHaHlbTU8VHBk1K6zXAdDEWFmAuZMSYbnwrIFSxdCEG5oT26oM7yXcZFsEpJiEIO9R8p2vlLX8C9TyU9dPrmHSixxE7GUmLoOEM&X-Amz-Signature=c3ef913d825ec1ecd3bf719f9600b41eaaa6dcfa5820d121a16adcd36bc0cdc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCOG5JO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIATcmYwt6QgbzFtUKADCXge8kXkoNfdzhUYuvbxEof%2FzAiAI5f7aYZ%2FUusYiDIYoeAp9byz7UHF0kzjDrMwwXC%2FeoCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMet9Qx1xmy9xTLIYQKtwDf6JTxu8UsIY6TrD9cvBLIZg5RfPuuKbcZ0xbEof%2BHV1sTtVKtr%2Feer1m782HgzdfPipaeQ1aW7pS3Wb2XxJlpncQYRWvkn5oMuOiVS0d%2FQnzgpiKEj0xudxTrriNhZWC6Xq5fI96JqDRuRs2bRKOGdgLsHNSOVR6tJ1CMJt2DfBD2j1vPSzoxZl0ga9IPctAwne7GMEAco5%2Bg4fXAw2rtwaOyWxUhNUEZCPeWEC0gx8NN4da0%2Bjv00hTg54fRKzHePmPh6B9z%2BWoFfTfivaN3cW30t%2FMvg8DKcPqEjuXWZKfuzXTfsKrDwHFxrzFa6Z6s3lfm33vVoIs3XBi2dO3eUjKegcCQOzeweu9%2FiA%2B9%2FQd0mkJPT0J3sDmvAsMcwnJhADxH2XbshxCYhJRMLL%2Bj7EM4UMJ6P98C2laODtu%2BM232pW5rG370a%2BC%2FuQ%2B0HDyc%2BtYk%2BooIvfvtycTeQRwFQxybBoZ45zDH0AcNC8PBIrXbClUqtXVEkjH2oXqiq%2BeYAowYi2Ykxw8VYGglgGZx%2Bb8BZlutwzYJUzt0wiEUTFfBs8R5YApCIzzTLTDJtQu4l7qYTrst9yZwHi%2FOcMFK85do%2BEjpw%2FWZstjxl39qC7dINnAlRrul0omRiowrv%2BUxAY6pgGmqWxOXgzyJC%2FS8MKOSmniu%2B30gal5sj5q6gaFJUiJAtd%2FIIHIiE%2BpuyDeqETtyuaEO8bXW665GkiNNab3MGoFUUanASTGmcDh%2FXOAnLb%2FCElstYXoX7qq2pgfzxHaHlbTU8VHBk1K6zXAdDEWFmAuZMSYbnwrIFSxdCEG5oT26oM7yXcZFsEpJiEIO9R8p2vlLX8C9TyU9dPrmHSixxE7GUmLoOEM&X-Amz-Signature=758e5aa1f94c1224ecc522cf162629a4310e577ee6b749cde25228bec6371ca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCOG5JO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIATcmYwt6QgbzFtUKADCXge8kXkoNfdzhUYuvbxEof%2FzAiAI5f7aYZ%2FUusYiDIYoeAp9byz7UHF0kzjDrMwwXC%2FeoCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMet9Qx1xmy9xTLIYQKtwDf6JTxu8UsIY6TrD9cvBLIZg5RfPuuKbcZ0xbEof%2BHV1sTtVKtr%2Feer1m782HgzdfPipaeQ1aW7pS3Wb2XxJlpncQYRWvkn5oMuOiVS0d%2FQnzgpiKEj0xudxTrriNhZWC6Xq5fI96JqDRuRs2bRKOGdgLsHNSOVR6tJ1CMJt2DfBD2j1vPSzoxZl0ga9IPctAwne7GMEAco5%2Bg4fXAw2rtwaOyWxUhNUEZCPeWEC0gx8NN4da0%2Bjv00hTg54fRKzHePmPh6B9z%2BWoFfTfivaN3cW30t%2FMvg8DKcPqEjuXWZKfuzXTfsKrDwHFxrzFa6Z6s3lfm33vVoIs3XBi2dO3eUjKegcCQOzeweu9%2FiA%2B9%2FQd0mkJPT0J3sDmvAsMcwnJhADxH2XbshxCYhJRMLL%2Bj7EM4UMJ6P98C2laODtu%2BM232pW5rG370a%2BC%2FuQ%2B0HDyc%2BtYk%2BooIvfvtycTeQRwFQxybBoZ45zDH0AcNC8PBIrXbClUqtXVEkjH2oXqiq%2BeYAowYi2Ykxw8VYGglgGZx%2Bb8BZlutwzYJUzt0wiEUTFfBs8R5YApCIzzTLTDJtQu4l7qYTrst9yZwHi%2FOcMFK85do%2BEjpw%2FWZstjxl39qC7dINnAlRrul0omRiowrv%2BUxAY6pgGmqWxOXgzyJC%2FS8MKOSmniu%2B30gal5sj5q6gaFJUiJAtd%2FIIHIiE%2BpuyDeqETtyuaEO8bXW665GkiNNab3MGoFUUanASTGmcDh%2FXOAnLb%2FCElstYXoX7qq2pgfzxHaHlbTU8VHBk1K6zXAdDEWFmAuZMSYbnwrIFSxdCEG5oT26oM7yXcZFsEpJiEIO9R8p2vlLX8C9TyU9dPrmHSixxE7GUmLoOEM&X-Amz-Signature=d518bcf94dd06d4e5454896b9a2c008b3f78c661e936c042cd654682cbff86cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCOG5JO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIATcmYwt6QgbzFtUKADCXge8kXkoNfdzhUYuvbxEof%2FzAiAI5f7aYZ%2FUusYiDIYoeAp9byz7UHF0kzjDrMwwXC%2FeoCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMet9Qx1xmy9xTLIYQKtwDf6JTxu8UsIY6TrD9cvBLIZg5RfPuuKbcZ0xbEof%2BHV1sTtVKtr%2Feer1m782HgzdfPipaeQ1aW7pS3Wb2XxJlpncQYRWvkn5oMuOiVS0d%2FQnzgpiKEj0xudxTrriNhZWC6Xq5fI96JqDRuRs2bRKOGdgLsHNSOVR6tJ1CMJt2DfBD2j1vPSzoxZl0ga9IPctAwne7GMEAco5%2Bg4fXAw2rtwaOyWxUhNUEZCPeWEC0gx8NN4da0%2Bjv00hTg54fRKzHePmPh6B9z%2BWoFfTfivaN3cW30t%2FMvg8DKcPqEjuXWZKfuzXTfsKrDwHFxrzFa6Z6s3lfm33vVoIs3XBi2dO3eUjKegcCQOzeweu9%2FiA%2B9%2FQd0mkJPT0J3sDmvAsMcwnJhADxH2XbshxCYhJRMLL%2Bj7EM4UMJ6P98C2laODtu%2BM232pW5rG370a%2BC%2FuQ%2B0HDyc%2BtYk%2BooIvfvtycTeQRwFQxybBoZ45zDH0AcNC8PBIrXbClUqtXVEkjH2oXqiq%2BeYAowYi2Ykxw8VYGglgGZx%2Bb8BZlutwzYJUzt0wiEUTFfBs8R5YApCIzzTLTDJtQu4l7qYTrst9yZwHi%2FOcMFK85do%2BEjpw%2FWZstjxl39qC7dINnAlRrul0omRiowrv%2BUxAY6pgGmqWxOXgzyJC%2FS8MKOSmniu%2B30gal5sj5q6gaFJUiJAtd%2FIIHIiE%2BpuyDeqETtyuaEO8bXW665GkiNNab3MGoFUUanASTGmcDh%2FXOAnLb%2FCElstYXoX7qq2pgfzxHaHlbTU8VHBk1K6zXAdDEWFmAuZMSYbnwrIFSxdCEG5oT26oM7yXcZFsEpJiEIO9R8p2vlLX8C9TyU9dPrmHSixxE7GUmLoOEM&X-Amz-Signature=9fdf3799551ca490e25a69c47656d89d9b5c7218ea0262dd97d6e92fddfdfe7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCOG5JO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIATcmYwt6QgbzFtUKADCXge8kXkoNfdzhUYuvbxEof%2FzAiAI5f7aYZ%2FUusYiDIYoeAp9byz7UHF0kzjDrMwwXC%2FeoCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMet9Qx1xmy9xTLIYQKtwDf6JTxu8UsIY6TrD9cvBLIZg5RfPuuKbcZ0xbEof%2BHV1sTtVKtr%2Feer1m782HgzdfPipaeQ1aW7pS3Wb2XxJlpncQYRWvkn5oMuOiVS0d%2FQnzgpiKEj0xudxTrriNhZWC6Xq5fI96JqDRuRs2bRKOGdgLsHNSOVR6tJ1CMJt2DfBD2j1vPSzoxZl0ga9IPctAwne7GMEAco5%2Bg4fXAw2rtwaOyWxUhNUEZCPeWEC0gx8NN4da0%2Bjv00hTg54fRKzHePmPh6B9z%2BWoFfTfivaN3cW30t%2FMvg8DKcPqEjuXWZKfuzXTfsKrDwHFxrzFa6Z6s3lfm33vVoIs3XBi2dO3eUjKegcCQOzeweu9%2FiA%2B9%2FQd0mkJPT0J3sDmvAsMcwnJhADxH2XbshxCYhJRMLL%2Bj7EM4UMJ6P98C2laODtu%2BM232pW5rG370a%2BC%2FuQ%2B0HDyc%2BtYk%2BooIvfvtycTeQRwFQxybBoZ45zDH0AcNC8PBIrXbClUqtXVEkjH2oXqiq%2BeYAowYi2Ykxw8VYGglgGZx%2Bb8BZlutwzYJUzt0wiEUTFfBs8R5YApCIzzTLTDJtQu4l7qYTrst9yZwHi%2FOcMFK85do%2BEjpw%2FWZstjxl39qC7dINnAlRrul0omRiowrv%2BUxAY6pgGmqWxOXgzyJC%2FS8MKOSmniu%2B30gal5sj5q6gaFJUiJAtd%2FIIHIiE%2BpuyDeqETtyuaEO8bXW665GkiNNab3MGoFUUanASTGmcDh%2FXOAnLb%2FCElstYXoX7qq2pgfzxHaHlbTU8VHBk1K6zXAdDEWFmAuZMSYbnwrIFSxdCEG5oT26oM7yXcZFsEpJiEIO9R8p2vlLX8C9TyU9dPrmHSixxE7GUmLoOEM&X-Amz-Signature=56422fd27fdce5fbce35fe71b2437a407d4dde90746ce057d4ac5bd0d7baad18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCOG5JO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIATcmYwt6QgbzFtUKADCXge8kXkoNfdzhUYuvbxEof%2FzAiAI5f7aYZ%2FUusYiDIYoeAp9byz7UHF0kzjDrMwwXC%2FeoCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMet9Qx1xmy9xTLIYQKtwDf6JTxu8UsIY6TrD9cvBLIZg5RfPuuKbcZ0xbEof%2BHV1sTtVKtr%2Feer1m782HgzdfPipaeQ1aW7pS3Wb2XxJlpncQYRWvkn5oMuOiVS0d%2FQnzgpiKEj0xudxTrriNhZWC6Xq5fI96JqDRuRs2bRKOGdgLsHNSOVR6tJ1CMJt2DfBD2j1vPSzoxZl0ga9IPctAwne7GMEAco5%2Bg4fXAw2rtwaOyWxUhNUEZCPeWEC0gx8NN4da0%2Bjv00hTg54fRKzHePmPh6B9z%2BWoFfTfivaN3cW30t%2FMvg8DKcPqEjuXWZKfuzXTfsKrDwHFxrzFa6Z6s3lfm33vVoIs3XBi2dO3eUjKegcCQOzeweu9%2FiA%2B9%2FQd0mkJPT0J3sDmvAsMcwnJhADxH2XbshxCYhJRMLL%2Bj7EM4UMJ6P98C2laODtu%2BM232pW5rG370a%2BC%2FuQ%2B0HDyc%2BtYk%2BooIvfvtycTeQRwFQxybBoZ45zDH0AcNC8PBIrXbClUqtXVEkjH2oXqiq%2BeYAowYi2Ykxw8VYGglgGZx%2Bb8BZlutwzYJUzt0wiEUTFfBs8R5YApCIzzTLTDJtQu4l7qYTrst9yZwHi%2FOcMFK85do%2BEjpw%2FWZstjxl39qC7dINnAlRrul0omRiowrv%2BUxAY6pgGmqWxOXgzyJC%2FS8MKOSmniu%2B30gal5sj5q6gaFJUiJAtd%2FIIHIiE%2BpuyDeqETtyuaEO8bXW665GkiNNab3MGoFUUanASTGmcDh%2FXOAnLb%2FCElstYXoX7qq2pgfzxHaHlbTU8VHBk1K6zXAdDEWFmAuZMSYbnwrIFSxdCEG5oT26oM7yXcZFsEpJiEIO9R8p2vlLX8C9TyU9dPrmHSixxE7GUmLoOEM&X-Amz-Signature=89a92755d35cdd8a21b747b8a9ff42b2f7d8b4656fa008080ec1acbb532dc911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCOG5JO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIATcmYwt6QgbzFtUKADCXge8kXkoNfdzhUYuvbxEof%2FzAiAI5f7aYZ%2FUusYiDIYoeAp9byz7UHF0kzjDrMwwXC%2FeoCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMet9Qx1xmy9xTLIYQKtwDf6JTxu8UsIY6TrD9cvBLIZg5RfPuuKbcZ0xbEof%2BHV1sTtVKtr%2Feer1m782HgzdfPipaeQ1aW7pS3Wb2XxJlpncQYRWvkn5oMuOiVS0d%2FQnzgpiKEj0xudxTrriNhZWC6Xq5fI96JqDRuRs2bRKOGdgLsHNSOVR6tJ1CMJt2DfBD2j1vPSzoxZl0ga9IPctAwne7GMEAco5%2Bg4fXAw2rtwaOyWxUhNUEZCPeWEC0gx8NN4da0%2Bjv00hTg54fRKzHePmPh6B9z%2BWoFfTfivaN3cW30t%2FMvg8DKcPqEjuXWZKfuzXTfsKrDwHFxrzFa6Z6s3lfm33vVoIs3XBi2dO3eUjKegcCQOzeweu9%2FiA%2B9%2FQd0mkJPT0J3sDmvAsMcwnJhADxH2XbshxCYhJRMLL%2Bj7EM4UMJ6P98C2laODtu%2BM232pW5rG370a%2BC%2FuQ%2B0HDyc%2BtYk%2BooIvfvtycTeQRwFQxybBoZ45zDH0AcNC8PBIrXbClUqtXVEkjH2oXqiq%2BeYAowYi2Ykxw8VYGglgGZx%2Bb8BZlutwzYJUzt0wiEUTFfBs8R5YApCIzzTLTDJtQu4l7qYTrst9yZwHi%2FOcMFK85do%2BEjpw%2FWZstjxl39qC7dINnAlRrul0omRiowrv%2BUxAY6pgGmqWxOXgzyJC%2FS8MKOSmniu%2B30gal5sj5q6gaFJUiJAtd%2FIIHIiE%2BpuyDeqETtyuaEO8bXW665GkiNNab3MGoFUUanASTGmcDh%2FXOAnLb%2FCElstYXoX7qq2pgfzxHaHlbTU8VHBk1K6zXAdDEWFmAuZMSYbnwrIFSxdCEG5oT26oM7yXcZFsEpJiEIO9R8p2vlLX8C9TyU9dPrmHSixxE7GUmLoOEM&X-Amz-Signature=c328ce22dd141f71ed9dde94b3c6ae0c8faaf7880f40cfaf14a82c4fff401125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCOG5JO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIATcmYwt6QgbzFtUKADCXge8kXkoNfdzhUYuvbxEof%2FzAiAI5f7aYZ%2FUusYiDIYoeAp9byz7UHF0kzjDrMwwXC%2FeoCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMet9Qx1xmy9xTLIYQKtwDf6JTxu8UsIY6TrD9cvBLIZg5RfPuuKbcZ0xbEof%2BHV1sTtVKtr%2Feer1m782HgzdfPipaeQ1aW7pS3Wb2XxJlpncQYRWvkn5oMuOiVS0d%2FQnzgpiKEj0xudxTrriNhZWC6Xq5fI96JqDRuRs2bRKOGdgLsHNSOVR6tJ1CMJt2DfBD2j1vPSzoxZl0ga9IPctAwne7GMEAco5%2Bg4fXAw2rtwaOyWxUhNUEZCPeWEC0gx8NN4da0%2Bjv00hTg54fRKzHePmPh6B9z%2BWoFfTfivaN3cW30t%2FMvg8DKcPqEjuXWZKfuzXTfsKrDwHFxrzFa6Z6s3lfm33vVoIs3XBi2dO3eUjKegcCQOzeweu9%2FiA%2B9%2FQd0mkJPT0J3sDmvAsMcwnJhADxH2XbshxCYhJRMLL%2Bj7EM4UMJ6P98C2laODtu%2BM232pW5rG370a%2BC%2FuQ%2B0HDyc%2BtYk%2BooIvfvtycTeQRwFQxybBoZ45zDH0AcNC8PBIrXbClUqtXVEkjH2oXqiq%2BeYAowYi2Ykxw8VYGglgGZx%2Bb8BZlutwzYJUzt0wiEUTFfBs8R5YApCIzzTLTDJtQu4l7qYTrst9yZwHi%2FOcMFK85do%2BEjpw%2FWZstjxl39qC7dINnAlRrul0omRiowrv%2BUxAY6pgGmqWxOXgzyJC%2FS8MKOSmniu%2B30gal5sj5q6gaFJUiJAtd%2FIIHIiE%2BpuyDeqETtyuaEO8bXW665GkiNNab3MGoFUUanASTGmcDh%2FXOAnLb%2FCElstYXoX7qq2pgfzxHaHlbTU8VHBk1K6zXAdDEWFmAuZMSYbnwrIFSxdCEG5oT26oM7yXcZFsEpJiEIO9R8p2vlLX8C9TyU9dPrmHSixxE7GUmLoOEM&X-Amz-Signature=31df4b5fa76b77d0c46fb2c7bed615aea4b531feab285edf493e3483cd3bebd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCOG5JO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIATcmYwt6QgbzFtUKADCXge8kXkoNfdzhUYuvbxEof%2FzAiAI5f7aYZ%2FUusYiDIYoeAp9byz7UHF0kzjDrMwwXC%2FeoCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMet9Qx1xmy9xTLIYQKtwDf6JTxu8UsIY6TrD9cvBLIZg5RfPuuKbcZ0xbEof%2BHV1sTtVKtr%2Feer1m782HgzdfPipaeQ1aW7pS3Wb2XxJlpncQYRWvkn5oMuOiVS0d%2FQnzgpiKEj0xudxTrriNhZWC6Xq5fI96JqDRuRs2bRKOGdgLsHNSOVR6tJ1CMJt2DfBD2j1vPSzoxZl0ga9IPctAwne7GMEAco5%2Bg4fXAw2rtwaOyWxUhNUEZCPeWEC0gx8NN4da0%2Bjv00hTg54fRKzHePmPh6B9z%2BWoFfTfivaN3cW30t%2FMvg8DKcPqEjuXWZKfuzXTfsKrDwHFxrzFa6Z6s3lfm33vVoIs3XBi2dO3eUjKegcCQOzeweu9%2FiA%2B9%2FQd0mkJPT0J3sDmvAsMcwnJhADxH2XbshxCYhJRMLL%2Bj7EM4UMJ6P98C2laODtu%2BM232pW5rG370a%2BC%2FuQ%2B0HDyc%2BtYk%2BooIvfvtycTeQRwFQxybBoZ45zDH0AcNC8PBIrXbClUqtXVEkjH2oXqiq%2BeYAowYi2Ykxw8VYGglgGZx%2Bb8BZlutwzYJUzt0wiEUTFfBs8R5YApCIzzTLTDJtQu4l7qYTrst9yZwHi%2FOcMFK85do%2BEjpw%2FWZstjxl39qC7dINnAlRrul0omRiowrv%2BUxAY6pgGmqWxOXgzyJC%2FS8MKOSmniu%2B30gal5sj5q6gaFJUiJAtd%2FIIHIiE%2BpuyDeqETtyuaEO8bXW665GkiNNab3MGoFUUanASTGmcDh%2FXOAnLb%2FCElstYXoX7qq2pgfzxHaHlbTU8VHBk1K6zXAdDEWFmAuZMSYbnwrIFSxdCEG5oT26oM7yXcZFsEpJiEIO9R8p2vlLX8C9TyU9dPrmHSixxE7GUmLoOEM&X-Amz-Signature=a81f6c03b019d3f0caaaad35b8589220b99ed53aa228d19eadab650414cbf4d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCOG5JO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIATcmYwt6QgbzFtUKADCXge8kXkoNfdzhUYuvbxEof%2FzAiAI5f7aYZ%2FUusYiDIYoeAp9byz7UHF0kzjDrMwwXC%2FeoCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMet9Qx1xmy9xTLIYQKtwDf6JTxu8UsIY6TrD9cvBLIZg5RfPuuKbcZ0xbEof%2BHV1sTtVKtr%2Feer1m782HgzdfPipaeQ1aW7pS3Wb2XxJlpncQYRWvkn5oMuOiVS0d%2FQnzgpiKEj0xudxTrriNhZWC6Xq5fI96JqDRuRs2bRKOGdgLsHNSOVR6tJ1CMJt2DfBD2j1vPSzoxZl0ga9IPctAwne7GMEAco5%2Bg4fXAw2rtwaOyWxUhNUEZCPeWEC0gx8NN4da0%2Bjv00hTg54fRKzHePmPh6B9z%2BWoFfTfivaN3cW30t%2FMvg8DKcPqEjuXWZKfuzXTfsKrDwHFxrzFa6Z6s3lfm33vVoIs3XBi2dO3eUjKegcCQOzeweu9%2FiA%2B9%2FQd0mkJPT0J3sDmvAsMcwnJhADxH2XbshxCYhJRMLL%2Bj7EM4UMJ6P98C2laODtu%2BM232pW5rG370a%2BC%2FuQ%2B0HDyc%2BtYk%2BooIvfvtycTeQRwFQxybBoZ45zDH0AcNC8PBIrXbClUqtXVEkjH2oXqiq%2BeYAowYi2Ykxw8VYGglgGZx%2Bb8BZlutwzYJUzt0wiEUTFfBs8R5YApCIzzTLTDJtQu4l7qYTrst9yZwHi%2FOcMFK85do%2BEjpw%2FWZstjxl39qC7dINnAlRrul0omRiowrv%2BUxAY6pgGmqWxOXgzyJC%2FS8MKOSmniu%2B30gal5sj5q6gaFJUiJAtd%2FIIHIiE%2BpuyDeqETtyuaEO8bXW665GkiNNab3MGoFUUanASTGmcDh%2FXOAnLb%2FCElstYXoX7qq2pgfzxHaHlbTU8VHBk1K6zXAdDEWFmAuZMSYbnwrIFSxdCEG5oT26oM7yXcZFsEpJiEIO9R8p2vlLX8C9TyU9dPrmHSixxE7GUmLoOEM&X-Amz-Signature=2629c98cf170771aad7413cb9cf85aeb09b81641c6c1bbbdae1c7a660cf0ac6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

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
      
      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
      </collision>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCOG5JO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIATcmYwt6QgbzFtUKADCXge8kXkoNfdzhUYuvbxEof%2FzAiAI5f7aYZ%2FUusYiDIYoeAp9byz7UHF0kzjDrMwwXC%2FeoCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMet9Qx1xmy9xTLIYQKtwDf6JTxu8UsIY6TrD9cvBLIZg5RfPuuKbcZ0xbEof%2BHV1sTtVKtr%2Feer1m782HgzdfPipaeQ1aW7pS3Wb2XxJlpncQYRWvkn5oMuOiVS0d%2FQnzgpiKEj0xudxTrriNhZWC6Xq5fI96JqDRuRs2bRKOGdgLsHNSOVR6tJ1CMJt2DfBD2j1vPSzoxZl0ga9IPctAwne7GMEAco5%2Bg4fXAw2rtwaOyWxUhNUEZCPeWEC0gx8NN4da0%2Bjv00hTg54fRKzHePmPh6B9z%2BWoFfTfivaN3cW30t%2FMvg8DKcPqEjuXWZKfuzXTfsKrDwHFxrzFa6Z6s3lfm33vVoIs3XBi2dO3eUjKegcCQOzeweu9%2FiA%2B9%2FQd0mkJPT0J3sDmvAsMcwnJhADxH2XbshxCYhJRMLL%2Bj7EM4UMJ6P98C2laODtu%2BM232pW5rG370a%2BC%2FuQ%2B0HDyc%2BtYk%2BooIvfvtycTeQRwFQxybBoZ45zDH0AcNC8PBIrXbClUqtXVEkjH2oXqiq%2BeYAowYi2Ykxw8VYGglgGZx%2Bb8BZlutwzYJUzt0wiEUTFfBs8R5YApCIzzTLTDJtQu4l7qYTrst9yZwHi%2FOcMFK85do%2BEjpw%2FWZstjxl39qC7dINnAlRrul0omRiowrv%2BUxAY6pgGmqWxOXgzyJC%2FS8MKOSmniu%2B30gal5sj5q6gaFJUiJAtd%2FIIHIiE%2BpuyDeqETtyuaEO8bXW665GkiNNab3MGoFUUanASTGmcDh%2FXOAnLb%2FCElstYXoX7qq2pgfzxHaHlbTU8VHBk1K6zXAdDEWFmAuZMSYbnwrIFSxdCEG5oT26oM7yXcZFsEpJiEIO9R8p2vlLX8C9TyU9dPrmHSixxE7GUmLoOEM&X-Amz-Signature=42cdbe89f525de91c8365c2803f115416e7a14afc2f703cd00b6bd48cf6b5e96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCOG5JO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIATcmYwt6QgbzFtUKADCXge8kXkoNfdzhUYuvbxEof%2FzAiAI5f7aYZ%2FUusYiDIYoeAp9byz7UHF0kzjDrMwwXC%2FeoCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMet9Qx1xmy9xTLIYQKtwDf6JTxu8UsIY6TrD9cvBLIZg5RfPuuKbcZ0xbEof%2BHV1sTtVKtr%2Feer1m782HgzdfPipaeQ1aW7pS3Wb2XxJlpncQYRWvkn5oMuOiVS0d%2FQnzgpiKEj0xudxTrriNhZWC6Xq5fI96JqDRuRs2bRKOGdgLsHNSOVR6tJ1CMJt2DfBD2j1vPSzoxZl0ga9IPctAwne7GMEAco5%2Bg4fXAw2rtwaOyWxUhNUEZCPeWEC0gx8NN4da0%2Bjv00hTg54fRKzHePmPh6B9z%2BWoFfTfivaN3cW30t%2FMvg8DKcPqEjuXWZKfuzXTfsKrDwHFxrzFa6Z6s3lfm33vVoIs3XBi2dO3eUjKegcCQOzeweu9%2FiA%2B9%2FQd0mkJPT0J3sDmvAsMcwnJhADxH2XbshxCYhJRMLL%2Bj7EM4UMJ6P98C2laODtu%2BM232pW5rG370a%2BC%2FuQ%2B0HDyc%2BtYk%2BooIvfvtycTeQRwFQxybBoZ45zDH0AcNC8PBIrXbClUqtXVEkjH2oXqiq%2BeYAowYi2Ykxw8VYGglgGZx%2Bb8BZlutwzYJUzt0wiEUTFfBs8R5YApCIzzTLTDJtQu4l7qYTrst9yZwHi%2FOcMFK85do%2BEjpw%2FWZstjxl39qC7dINnAlRrul0omRiowrv%2BUxAY6pgGmqWxOXgzyJC%2FS8MKOSmniu%2B30gal5sj5q6gaFJUiJAtd%2FIIHIiE%2BpuyDeqETtyuaEO8bXW665GkiNNab3MGoFUUanASTGmcDh%2FXOAnLb%2FCElstYXoX7qq2pgfzxHaHlbTU8VHBk1K6zXAdDEWFmAuZMSYbnwrIFSxdCEG5oT26oM7yXcZFsEpJiEIO9R8p2vlLX8C9TyU9dPrmHSixxE7GUmLoOEM&X-Amz-Signature=a4c2f2d02543c6dd54ae0c1309815e25968d0fda7de8431804286d2193cf8c58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCOG5JO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIATcmYwt6QgbzFtUKADCXge8kXkoNfdzhUYuvbxEof%2FzAiAI5f7aYZ%2FUusYiDIYoeAp9byz7UHF0kzjDrMwwXC%2FeoCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMet9Qx1xmy9xTLIYQKtwDf6JTxu8UsIY6TrD9cvBLIZg5RfPuuKbcZ0xbEof%2BHV1sTtVKtr%2Feer1m782HgzdfPipaeQ1aW7pS3Wb2XxJlpncQYRWvkn5oMuOiVS0d%2FQnzgpiKEj0xudxTrriNhZWC6Xq5fI96JqDRuRs2bRKOGdgLsHNSOVR6tJ1CMJt2DfBD2j1vPSzoxZl0ga9IPctAwne7GMEAco5%2Bg4fXAw2rtwaOyWxUhNUEZCPeWEC0gx8NN4da0%2Bjv00hTg54fRKzHePmPh6B9z%2BWoFfTfivaN3cW30t%2FMvg8DKcPqEjuXWZKfuzXTfsKrDwHFxrzFa6Z6s3lfm33vVoIs3XBi2dO3eUjKegcCQOzeweu9%2FiA%2B9%2FQd0mkJPT0J3sDmvAsMcwnJhADxH2XbshxCYhJRMLL%2Bj7EM4UMJ6P98C2laODtu%2BM232pW5rG370a%2BC%2FuQ%2B0HDyc%2BtYk%2BooIvfvtycTeQRwFQxybBoZ45zDH0AcNC8PBIrXbClUqtXVEkjH2oXqiq%2BeYAowYi2Ykxw8VYGglgGZx%2Bb8BZlutwzYJUzt0wiEUTFfBs8R5YApCIzzTLTDJtQu4l7qYTrst9yZwHi%2FOcMFK85do%2BEjpw%2FWZstjxl39qC7dINnAlRrul0omRiowrv%2BUxAY6pgGmqWxOXgzyJC%2FS8MKOSmniu%2B30gal5sj5q6gaFJUiJAtd%2FIIHIiE%2BpuyDeqETtyuaEO8bXW665GkiNNab3MGoFUUanASTGmcDh%2FXOAnLb%2FCElstYXoX7qq2pgfzxHaHlbTU8VHBk1K6zXAdDEWFmAuZMSYbnwrIFSxdCEG5oT26oM7yXcZFsEpJiEIO9R8p2vlLX8C9TyU9dPrmHSixxE7GUmLoOEM&X-Amz-Signature=0d1dc1a6df51a7c2ca84bc67f3409c9a25d5de7eadd6e208f98fcdd87b88e5c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCOG5JO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIATcmYwt6QgbzFtUKADCXge8kXkoNfdzhUYuvbxEof%2FzAiAI5f7aYZ%2FUusYiDIYoeAp9byz7UHF0kzjDrMwwXC%2FeoCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMet9Qx1xmy9xTLIYQKtwDf6JTxu8UsIY6TrD9cvBLIZg5RfPuuKbcZ0xbEof%2BHV1sTtVKtr%2Feer1m782HgzdfPipaeQ1aW7pS3Wb2XxJlpncQYRWvkn5oMuOiVS0d%2FQnzgpiKEj0xudxTrriNhZWC6Xq5fI96JqDRuRs2bRKOGdgLsHNSOVR6tJ1CMJt2DfBD2j1vPSzoxZl0ga9IPctAwne7GMEAco5%2Bg4fXAw2rtwaOyWxUhNUEZCPeWEC0gx8NN4da0%2Bjv00hTg54fRKzHePmPh6B9z%2BWoFfTfivaN3cW30t%2FMvg8DKcPqEjuXWZKfuzXTfsKrDwHFxrzFa6Z6s3lfm33vVoIs3XBi2dO3eUjKegcCQOzeweu9%2FiA%2B9%2FQd0mkJPT0J3sDmvAsMcwnJhADxH2XbshxCYhJRMLL%2Bj7EM4UMJ6P98C2laODtu%2BM232pW5rG370a%2BC%2FuQ%2B0HDyc%2BtYk%2BooIvfvtycTeQRwFQxybBoZ45zDH0AcNC8PBIrXbClUqtXVEkjH2oXqiq%2BeYAowYi2Ykxw8VYGglgGZx%2Bb8BZlutwzYJUzt0wiEUTFfBs8R5YApCIzzTLTDJtQu4l7qYTrst9yZwHi%2FOcMFK85do%2BEjpw%2FWZstjxl39qC7dINnAlRrul0omRiowrv%2BUxAY6pgGmqWxOXgzyJC%2FS8MKOSmniu%2B30gal5sj5q6gaFJUiJAtd%2FIIHIiE%2BpuyDeqETtyuaEO8bXW665GkiNNab3MGoFUUanASTGmcDh%2FXOAnLb%2FCElstYXoX7qq2pgfzxHaHlbTU8VHBk1K6zXAdDEWFmAuZMSYbnwrIFSxdCEG5oT26oM7yXcZFsEpJiEIO9R8p2vlLX8C9TyU9dPrmHSixxE7GUmLoOEM&X-Amz-Signature=9b4f52589b4a6eff40cedd609d5097dd89750f23008d6c7d1820451f38c99d48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW3VMLYJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCWbhoBmZ2Soi%2F4xphkEjOH6vKstF%2Fj04LuLmo%2Fi4qLEgIhAJk6WyXGx6s08OCXHQzqJIDwi8e3G6NNpYECNsEG74B0Kv8DCGYQABoMNjM3NDIzMTgzODA1IgzvA8ROZljlYjKft0Aq3AMBi8mFPjCel341yVTTLdk1a53snYlWUotb%2BsqFcM3Ce8chjv%2BWpq9G3uFLnTuAhzB4Z25XFseYbrBOqBRQZNhgpteA%2BnKaZneHrGAokUp2ggX5xbM5zPYGV84ExwFx%2F1uXAivzM2wf1zG1WwVYxQiUdOW6RjHakF%2BO8DTjV6wKgJx16EEoUpsL0QkToXnq5HU0BDeyADSoiI2b%2FQexpZmvrZxYc1l%2FzkWgAmxoSwMeaQRzSt8RcyL41PLsny533RnN%2B42g0mPrEBc%2FAqfe%2Fn8%2By4%2F%2FvBVKpM2LgDhV1Q0uzkxxgEkEgi0quNH7FWOyeDYQiPohZI7fwkr%2FANF2YmJcmBsgcabL6P9%2FD%2F4m0nQtBTIaS%2FRN2dML18AjhX4uttE3IOAxbP%2BK2IghNwh65Dpxr95kyjaYg3qI%2BxS1keWcwuJjGsGU0Wrr1DJ9iY51D7fud36%2BSk2xoRve38JYgj3MbsNrd5XCxDfJ4Qz3t0S6y0I8rDSK8tf%2FsW9dXAPHDYVzD5cSS2RhED62xFRW177Z%2FWYUq3nPGrEvm9YsMmoO4p0SbXCT9Zw1YPAzdscLcBqmdDuYNITZCp%2BcnMRA8iEVTsGFahoxeeUmG%2BHm%2BIcRhY1Jc6n3LM8jnnxjDzDv%2FpTEBjqkAdk2VlXN3kBpgA252169AXxN93tUJ%2BJmOwShe1ZDRrk1uq%2F2gLxJd%2FLpisAhkQwJyJZlOWjj0xKiHdjODyQHSHF3s5Bfh3taLhxDewG5bTKwi6esp%2BN5eHIi%2BBv0TORc35jjV%2FT%2B%2FhcZe8HikCpEBSm7AM76qjjrSvPE2yaff8CohwJCe7yzg6QMzT6PYqduJbzkV6eUGIYA2K5eFWigYs4%2BSHoI&X-Amz-Signature=7a1d5b8f32d630f6f0704afd3b1cc0f4ddc6800c2a970c2e31694936466bba6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW3VMLYJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCWbhoBmZ2Soi%2F4xphkEjOH6vKstF%2Fj04LuLmo%2Fi4qLEgIhAJk6WyXGx6s08OCXHQzqJIDwi8e3G6NNpYECNsEG74B0Kv8DCGYQABoMNjM3NDIzMTgzODA1IgzvA8ROZljlYjKft0Aq3AMBi8mFPjCel341yVTTLdk1a53snYlWUotb%2BsqFcM3Ce8chjv%2BWpq9G3uFLnTuAhzB4Z25XFseYbrBOqBRQZNhgpteA%2BnKaZneHrGAokUp2ggX5xbM5zPYGV84ExwFx%2F1uXAivzM2wf1zG1WwVYxQiUdOW6RjHakF%2BO8DTjV6wKgJx16EEoUpsL0QkToXnq5HU0BDeyADSoiI2b%2FQexpZmvrZxYc1l%2FzkWgAmxoSwMeaQRzSt8RcyL41PLsny533RnN%2B42g0mPrEBc%2FAqfe%2Fn8%2By4%2F%2FvBVKpM2LgDhV1Q0uzkxxgEkEgi0quNH7FWOyeDYQiPohZI7fwkr%2FANF2YmJcmBsgcabL6P9%2FD%2F4m0nQtBTIaS%2FRN2dML18AjhX4uttE3IOAxbP%2BK2IghNwh65Dpxr95kyjaYg3qI%2BxS1keWcwuJjGsGU0Wrr1DJ9iY51D7fud36%2BSk2xoRve38JYgj3MbsNrd5XCxDfJ4Qz3t0S6y0I8rDSK8tf%2FsW9dXAPHDYVzD5cSS2RhED62xFRW177Z%2FWYUq3nPGrEvm9YsMmoO4p0SbXCT9Zw1YPAzdscLcBqmdDuYNITZCp%2BcnMRA8iEVTsGFahoxeeUmG%2BHm%2BIcRhY1Jc6n3LM8jnnxjDzDv%2FpTEBjqkAdk2VlXN3kBpgA252169AXxN93tUJ%2BJmOwShe1ZDRrk1uq%2F2gLxJd%2FLpisAhkQwJyJZlOWjj0xKiHdjODyQHSHF3s5Bfh3taLhxDewG5bTKwi6esp%2BN5eHIi%2BBv0TORc35jjV%2FT%2B%2FhcZe8HikCpEBSm7AM76qjjrSvPE2yaff8CohwJCe7yzg6QMzT6PYqduJbzkV6eUGIYA2K5eFWigYs4%2BSHoI&X-Amz-Signature=669b2cdd9de2339033d0129c9209f2fb0bb06cf270bbccab851820eca4a889be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW3VMLYJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCWbhoBmZ2Soi%2F4xphkEjOH6vKstF%2Fj04LuLmo%2Fi4qLEgIhAJk6WyXGx6s08OCXHQzqJIDwi8e3G6NNpYECNsEG74B0Kv8DCGYQABoMNjM3NDIzMTgzODA1IgzvA8ROZljlYjKft0Aq3AMBi8mFPjCel341yVTTLdk1a53snYlWUotb%2BsqFcM3Ce8chjv%2BWpq9G3uFLnTuAhzB4Z25XFseYbrBOqBRQZNhgpteA%2BnKaZneHrGAokUp2ggX5xbM5zPYGV84ExwFx%2F1uXAivzM2wf1zG1WwVYxQiUdOW6RjHakF%2BO8DTjV6wKgJx16EEoUpsL0QkToXnq5HU0BDeyADSoiI2b%2FQexpZmvrZxYc1l%2FzkWgAmxoSwMeaQRzSt8RcyL41PLsny533RnN%2B42g0mPrEBc%2FAqfe%2Fn8%2By4%2F%2FvBVKpM2LgDhV1Q0uzkxxgEkEgi0quNH7FWOyeDYQiPohZI7fwkr%2FANF2YmJcmBsgcabL6P9%2FD%2F4m0nQtBTIaS%2FRN2dML18AjhX4uttE3IOAxbP%2BK2IghNwh65Dpxr95kyjaYg3qI%2BxS1keWcwuJjGsGU0Wrr1DJ9iY51D7fud36%2BSk2xoRve38JYgj3MbsNrd5XCxDfJ4Qz3t0S6y0I8rDSK8tf%2FsW9dXAPHDYVzD5cSS2RhED62xFRW177Z%2FWYUq3nPGrEvm9YsMmoO4p0SbXCT9Zw1YPAzdscLcBqmdDuYNITZCp%2BcnMRA8iEVTsGFahoxeeUmG%2BHm%2BIcRhY1Jc6n3LM8jnnxjDzDv%2FpTEBjqkAdk2VlXN3kBpgA252169AXxN93tUJ%2BJmOwShe1ZDRrk1uq%2F2gLxJd%2FLpisAhkQwJyJZlOWjj0xKiHdjODyQHSHF3s5Bfh3taLhxDewG5bTKwi6esp%2BN5eHIi%2BBv0TORc35jjV%2FT%2B%2FhcZe8HikCpEBSm7AM76qjjrSvPE2yaff8CohwJCe7yzg6QMzT6PYqduJbzkV6eUGIYA2K5eFWigYs4%2BSHoI&X-Amz-Signature=c88e3822bae9d9cc5251c768610562643fc86701203a63034bff30f357f0ff9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW3VMLYJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCWbhoBmZ2Soi%2F4xphkEjOH6vKstF%2Fj04LuLmo%2Fi4qLEgIhAJk6WyXGx6s08OCXHQzqJIDwi8e3G6NNpYECNsEG74B0Kv8DCGYQABoMNjM3NDIzMTgzODA1IgzvA8ROZljlYjKft0Aq3AMBi8mFPjCel341yVTTLdk1a53snYlWUotb%2BsqFcM3Ce8chjv%2BWpq9G3uFLnTuAhzB4Z25XFseYbrBOqBRQZNhgpteA%2BnKaZneHrGAokUp2ggX5xbM5zPYGV84ExwFx%2F1uXAivzM2wf1zG1WwVYxQiUdOW6RjHakF%2BO8DTjV6wKgJx16EEoUpsL0QkToXnq5HU0BDeyADSoiI2b%2FQexpZmvrZxYc1l%2FzkWgAmxoSwMeaQRzSt8RcyL41PLsny533RnN%2B42g0mPrEBc%2FAqfe%2Fn8%2By4%2F%2FvBVKpM2LgDhV1Q0uzkxxgEkEgi0quNH7FWOyeDYQiPohZI7fwkr%2FANF2YmJcmBsgcabL6P9%2FD%2F4m0nQtBTIaS%2FRN2dML18AjhX4uttE3IOAxbP%2BK2IghNwh65Dpxr95kyjaYg3qI%2BxS1keWcwuJjGsGU0Wrr1DJ9iY51D7fud36%2BSk2xoRve38JYgj3MbsNrd5XCxDfJ4Qz3t0S6y0I8rDSK8tf%2FsW9dXAPHDYVzD5cSS2RhED62xFRW177Z%2FWYUq3nPGrEvm9YsMmoO4p0SbXCT9Zw1YPAzdscLcBqmdDuYNITZCp%2BcnMRA8iEVTsGFahoxeeUmG%2BHm%2BIcRhY1Jc6n3LM8jnnxjDzDv%2FpTEBjqkAdk2VlXN3kBpgA252169AXxN93tUJ%2BJmOwShe1ZDRrk1uq%2F2gLxJd%2FLpisAhkQwJyJZlOWjj0xKiHdjODyQHSHF3s5Bfh3taLhxDewG5bTKwi6esp%2BN5eHIi%2BBv0TORc35jjV%2FT%2B%2FhcZe8HikCpEBSm7AM76qjjrSvPE2yaff8CohwJCe7yzg6QMzT6PYqduJbzkV6eUGIYA2K5eFWigYs4%2BSHoI&X-Amz-Signature=1e160ea44e3ca99de05b7ccf7a70981d36c3b76858c62f9e7cf0162d112006d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW3VMLYJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCWbhoBmZ2Soi%2F4xphkEjOH6vKstF%2Fj04LuLmo%2Fi4qLEgIhAJk6WyXGx6s08OCXHQzqJIDwi8e3G6NNpYECNsEG74B0Kv8DCGYQABoMNjM3NDIzMTgzODA1IgzvA8ROZljlYjKft0Aq3AMBi8mFPjCel341yVTTLdk1a53snYlWUotb%2BsqFcM3Ce8chjv%2BWpq9G3uFLnTuAhzB4Z25XFseYbrBOqBRQZNhgpteA%2BnKaZneHrGAokUp2ggX5xbM5zPYGV84ExwFx%2F1uXAivzM2wf1zG1WwVYxQiUdOW6RjHakF%2BO8DTjV6wKgJx16EEoUpsL0QkToXnq5HU0BDeyADSoiI2b%2FQexpZmvrZxYc1l%2FzkWgAmxoSwMeaQRzSt8RcyL41PLsny533RnN%2B42g0mPrEBc%2FAqfe%2Fn8%2By4%2F%2FvBVKpM2LgDhV1Q0uzkxxgEkEgi0quNH7FWOyeDYQiPohZI7fwkr%2FANF2YmJcmBsgcabL6P9%2FD%2F4m0nQtBTIaS%2FRN2dML18AjhX4uttE3IOAxbP%2BK2IghNwh65Dpxr95kyjaYg3qI%2BxS1keWcwuJjGsGU0Wrr1DJ9iY51D7fud36%2BSk2xoRve38JYgj3MbsNrd5XCxDfJ4Qz3t0S6y0I8rDSK8tf%2FsW9dXAPHDYVzD5cSS2RhED62xFRW177Z%2FWYUq3nPGrEvm9YsMmoO4p0SbXCT9Zw1YPAzdscLcBqmdDuYNITZCp%2BcnMRA8iEVTsGFahoxeeUmG%2BHm%2BIcRhY1Jc6n3LM8jnnxjDzDv%2FpTEBjqkAdk2VlXN3kBpgA252169AXxN93tUJ%2BJmOwShe1ZDRrk1uq%2F2gLxJd%2FLpisAhkQwJyJZlOWjj0xKiHdjODyQHSHF3s5Bfh3taLhxDewG5bTKwi6esp%2BN5eHIi%2BBv0TORc35jjV%2FT%2B%2FhcZe8HikCpEBSm7AM76qjjrSvPE2yaff8CohwJCe7yzg6QMzT6PYqduJbzkV6eUGIYA2K5eFWigYs4%2BSHoI&X-Amz-Signature=f05f68582ec8049cbb27573cfe7ac148ee95b36b91ee6fda4096c510b570923e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW3VMLYJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCWbhoBmZ2Soi%2F4xphkEjOH6vKstF%2Fj04LuLmo%2Fi4qLEgIhAJk6WyXGx6s08OCXHQzqJIDwi8e3G6NNpYECNsEG74B0Kv8DCGYQABoMNjM3NDIzMTgzODA1IgzvA8ROZljlYjKft0Aq3AMBi8mFPjCel341yVTTLdk1a53snYlWUotb%2BsqFcM3Ce8chjv%2BWpq9G3uFLnTuAhzB4Z25XFseYbrBOqBRQZNhgpteA%2BnKaZneHrGAokUp2ggX5xbM5zPYGV84ExwFx%2F1uXAivzM2wf1zG1WwVYxQiUdOW6RjHakF%2BO8DTjV6wKgJx16EEoUpsL0QkToXnq5HU0BDeyADSoiI2b%2FQexpZmvrZxYc1l%2FzkWgAmxoSwMeaQRzSt8RcyL41PLsny533RnN%2B42g0mPrEBc%2FAqfe%2Fn8%2By4%2F%2FvBVKpM2LgDhV1Q0uzkxxgEkEgi0quNH7FWOyeDYQiPohZI7fwkr%2FANF2YmJcmBsgcabL6P9%2FD%2F4m0nQtBTIaS%2FRN2dML18AjhX4uttE3IOAxbP%2BK2IghNwh65Dpxr95kyjaYg3qI%2BxS1keWcwuJjGsGU0Wrr1DJ9iY51D7fud36%2BSk2xoRve38JYgj3MbsNrd5XCxDfJ4Qz3t0S6y0I8rDSK8tf%2FsW9dXAPHDYVzD5cSS2RhED62xFRW177Z%2FWYUq3nPGrEvm9YsMmoO4p0SbXCT9Zw1YPAzdscLcBqmdDuYNITZCp%2BcnMRA8iEVTsGFahoxeeUmG%2BHm%2BIcRhY1Jc6n3LM8jnnxjDzDv%2FpTEBjqkAdk2VlXN3kBpgA252169AXxN93tUJ%2BJmOwShe1ZDRrk1uq%2F2gLxJd%2FLpisAhkQwJyJZlOWjj0xKiHdjODyQHSHF3s5Bfh3taLhxDewG5bTKwi6esp%2BN5eHIi%2BBv0TORc35jjV%2FT%2B%2FhcZe8HikCpEBSm7AM76qjjrSvPE2yaff8CohwJCe7yzg6QMzT6PYqduJbzkV6eUGIYA2K5eFWigYs4%2BSHoI&X-Amz-Signature=733e7c35a52152c1f800fa83212d84f2d17af68f0fd9f4b93c0414d3adc73b5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
