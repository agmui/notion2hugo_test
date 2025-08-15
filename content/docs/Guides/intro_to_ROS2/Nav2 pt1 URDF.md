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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUW7TVG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIF%2Ba8h54dgXAkjuZf8G32qFCP3n%2FNnFtFRPl11Uzh7EIAiAZL7oIc3784YeirSWazIjrUr%2BWVQDy0PcK8kODRYI9tSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM4%2FhFu0%2FZDFYOZNboKtwDWqAazxAxi4BJZvQ02HCgfx2l1%2B8k3EIrkEXVEvi27RNfkkIq%2FkvT8TKBe8WN8zmLxP7eNguPFQ36WeZLRcgdJfqiMuVA75nZSfvEW3W2ToDkJZQoGCrzh%2FJOZUliBcG%2BYQ7%2F0O2P6kyup6wWZh1C2ymMEOGrxoImZ5cfmHBcKH1TL9Mbjjtl8ksbEc5qP7pWgduAHGZKWc9YtgONLQ8E5ZRkNAC5eDrpUebvedbhO1wD2StRRgQX%2BcLXO4Ew3I2L%2FF2T8lZcp1QJ2EJWr3%2FxaCBCFa9ANMkyYc8lP2GKrkCw%2F0g1u%2BhKXKiAxk9YKW02pzqF5MF0v5%2Fc3JX5psUQBZECOvkUS2T%2BR2gPLeacLovFt7jFctxzkSMY4LQIkDQBM%2F7j3PoxBy8o4iAzGS0RbNyaAI4OsHnku3DDjPJbild6iGNdqNtSrqLlwwlxKks%2BV38XzyrbYKLcovV9X%2FjYTpxHgBHDn%2FWPn8ioZtojbrM8bck626Gg7mFIkyR8OT7aiOozVuk8S9nS4gd7%2BoQXwo7A2bm97tXp4qazzTIg1aO7QN35%2FLnWLZNj5PCKHJbroFsirQXg0hgCmUezhpQpi372vzmStnmw4NsvwZ%2B%2F1SMByTbM3KoCVEkEEhUw%2F%2B37xAY6pgG29lBet9OFFNJZt46dReXItBTx%2Bts7rGO09tBFXIXbKZDCLaFyyQ48zuBXkFmAU8h2Gr%2B4RpAau2TmHIkI1rS2Cp5UJcZ9a%2BcaSy4qtTIrZpEshStxw3F9l38WGOHiKW03plSVmXENEI2liVQ8FanRI5ZZWj36pCTom37i%2FCBBb94XZ%2BwlgdvsH79IdRILCA37W3wTyeaH0qv4zHS6YL6rf1pj4WeE&X-Amz-Signature=7d32757d2a248c547e4ad65bbbce42faefb194a34905fdd8a35a1ef1415cb4b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUW7TVG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIF%2Ba8h54dgXAkjuZf8G32qFCP3n%2FNnFtFRPl11Uzh7EIAiAZL7oIc3784YeirSWazIjrUr%2BWVQDy0PcK8kODRYI9tSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM4%2FhFu0%2FZDFYOZNboKtwDWqAazxAxi4BJZvQ02HCgfx2l1%2B8k3EIrkEXVEvi27RNfkkIq%2FkvT8TKBe8WN8zmLxP7eNguPFQ36WeZLRcgdJfqiMuVA75nZSfvEW3W2ToDkJZQoGCrzh%2FJOZUliBcG%2BYQ7%2F0O2P6kyup6wWZh1C2ymMEOGrxoImZ5cfmHBcKH1TL9Mbjjtl8ksbEc5qP7pWgduAHGZKWc9YtgONLQ8E5ZRkNAC5eDrpUebvedbhO1wD2StRRgQX%2BcLXO4Ew3I2L%2FF2T8lZcp1QJ2EJWr3%2FxaCBCFa9ANMkyYc8lP2GKrkCw%2F0g1u%2BhKXKiAxk9YKW02pzqF5MF0v5%2Fc3JX5psUQBZECOvkUS2T%2BR2gPLeacLovFt7jFctxzkSMY4LQIkDQBM%2F7j3PoxBy8o4iAzGS0RbNyaAI4OsHnku3DDjPJbild6iGNdqNtSrqLlwwlxKks%2BV38XzyrbYKLcovV9X%2FjYTpxHgBHDn%2FWPn8ioZtojbrM8bck626Gg7mFIkyR8OT7aiOozVuk8S9nS4gd7%2BoQXwo7A2bm97tXp4qazzTIg1aO7QN35%2FLnWLZNj5PCKHJbroFsirQXg0hgCmUezhpQpi372vzmStnmw4NsvwZ%2B%2F1SMByTbM3KoCVEkEEhUw%2F%2B37xAY6pgG29lBet9OFFNJZt46dReXItBTx%2Bts7rGO09tBFXIXbKZDCLaFyyQ48zuBXkFmAU8h2Gr%2B4RpAau2TmHIkI1rS2Cp5UJcZ9a%2BcaSy4qtTIrZpEshStxw3F9l38WGOHiKW03plSVmXENEI2liVQ8FanRI5ZZWj36pCTom37i%2FCBBb94XZ%2BwlgdvsH79IdRILCA37W3wTyeaH0qv4zHS6YL6rf1pj4WeE&X-Amz-Signature=d19669f04e57a08bf6f3de850c90f385a5b28bd0dcc2f4b22135310a09aa8b97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUW7TVG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIF%2Ba8h54dgXAkjuZf8G32qFCP3n%2FNnFtFRPl11Uzh7EIAiAZL7oIc3784YeirSWazIjrUr%2BWVQDy0PcK8kODRYI9tSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM4%2FhFu0%2FZDFYOZNboKtwDWqAazxAxi4BJZvQ02HCgfx2l1%2B8k3EIrkEXVEvi27RNfkkIq%2FkvT8TKBe8WN8zmLxP7eNguPFQ36WeZLRcgdJfqiMuVA75nZSfvEW3W2ToDkJZQoGCrzh%2FJOZUliBcG%2BYQ7%2F0O2P6kyup6wWZh1C2ymMEOGrxoImZ5cfmHBcKH1TL9Mbjjtl8ksbEc5qP7pWgduAHGZKWc9YtgONLQ8E5ZRkNAC5eDrpUebvedbhO1wD2StRRgQX%2BcLXO4Ew3I2L%2FF2T8lZcp1QJ2EJWr3%2FxaCBCFa9ANMkyYc8lP2GKrkCw%2F0g1u%2BhKXKiAxk9YKW02pzqF5MF0v5%2Fc3JX5psUQBZECOvkUS2T%2BR2gPLeacLovFt7jFctxzkSMY4LQIkDQBM%2F7j3PoxBy8o4iAzGS0RbNyaAI4OsHnku3DDjPJbild6iGNdqNtSrqLlwwlxKks%2BV38XzyrbYKLcovV9X%2FjYTpxHgBHDn%2FWPn8ioZtojbrM8bck626Gg7mFIkyR8OT7aiOozVuk8S9nS4gd7%2BoQXwo7A2bm97tXp4qazzTIg1aO7QN35%2FLnWLZNj5PCKHJbroFsirQXg0hgCmUezhpQpi372vzmStnmw4NsvwZ%2B%2F1SMByTbM3KoCVEkEEhUw%2F%2B37xAY6pgG29lBet9OFFNJZt46dReXItBTx%2Bts7rGO09tBFXIXbKZDCLaFyyQ48zuBXkFmAU8h2Gr%2B4RpAau2TmHIkI1rS2Cp5UJcZ9a%2BcaSy4qtTIrZpEshStxw3F9l38WGOHiKW03plSVmXENEI2liVQ8FanRI5ZZWj36pCTom37i%2FCBBb94XZ%2BwlgdvsH79IdRILCA37W3wTyeaH0qv4zHS6YL6rf1pj4WeE&X-Amz-Signature=155b74ab9f7d10a62cf99831af24bdd89d69f7b5cacb197d786508ea04c9dfcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUW7TVG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIF%2Ba8h54dgXAkjuZf8G32qFCP3n%2FNnFtFRPl11Uzh7EIAiAZL7oIc3784YeirSWazIjrUr%2BWVQDy0PcK8kODRYI9tSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM4%2FhFu0%2FZDFYOZNboKtwDWqAazxAxi4BJZvQ02HCgfx2l1%2B8k3EIrkEXVEvi27RNfkkIq%2FkvT8TKBe8WN8zmLxP7eNguPFQ36WeZLRcgdJfqiMuVA75nZSfvEW3W2ToDkJZQoGCrzh%2FJOZUliBcG%2BYQ7%2F0O2P6kyup6wWZh1C2ymMEOGrxoImZ5cfmHBcKH1TL9Mbjjtl8ksbEc5qP7pWgduAHGZKWc9YtgONLQ8E5ZRkNAC5eDrpUebvedbhO1wD2StRRgQX%2BcLXO4Ew3I2L%2FF2T8lZcp1QJ2EJWr3%2FxaCBCFa9ANMkyYc8lP2GKrkCw%2F0g1u%2BhKXKiAxk9YKW02pzqF5MF0v5%2Fc3JX5psUQBZECOvkUS2T%2BR2gPLeacLovFt7jFctxzkSMY4LQIkDQBM%2F7j3PoxBy8o4iAzGS0RbNyaAI4OsHnku3DDjPJbild6iGNdqNtSrqLlwwlxKks%2BV38XzyrbYKLcovV9X%2FjYTpxHgBHDn%2FWPn8ioZtojbrM8bck626Gg7mFIkyR8OT7aiOozVuk8S9nS4gd7%2BoQXwo7A2bm97tXp4qazzTIg1aO7QN35%2FLnWLZNj5PCKHJbroFsirQXg0hgCmUezhpQpi372vzmStnmw4NsvwZ%2B%2F1SMByTbM3KoCVEkEEhUw%2F%2B37xAY6pgG29lBet9OFFNJZt46dReXItBTx%2Bts7rGO09tBFXIXbKZDCLaFyyQ48zuBXkFmAU8h2Gr%2B4RpAau2TmHIkI1rS2Cp5UJcZ9a%2BcaSy4qtTIrZpEshStxw3F9l38WGOHiKW03plSVmXENEI2liVQ8FanRI5ZZWj36pCTom37i%2FCBBb94XZ%2BwlgdvsH79IdRILCA37W3wTyeaH0qv4zHS6YL6rf1pj4WeE&X-Amz-Signature=53347b060d78590c039af9459eaf1390f40b432656f16ba8fdb93f32981e0e66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUW7TVG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIF%2Ba8h54dgXAkjuZf8G32qFCP3n%2FNnFtFRPl11Uzh7EIAiAZL7oIc3784YeirSWazIjrUr%2BWVQDy0PcK8kODRYI9tSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM4%2FhFu0%2FZDFYOZNboKtwDWqAazxAxi4BJZvQ02HCgfx2l1%2B8k3EIrkEXVEvi27RNfkkIq%2FkvT8TKBe8WN8zmLxP7eNguPFQ36WeZLRcgdJfqiMuVA75nZSfvEW3W2ToDkJZQoGCrzh%2FJOZUliBcG%2BYQ7%2F0O2P6kyup6wWZh1C2ymMEOGrxoImZ5cfmHBcKH1TL9Mbjjtl8ksbEc5qP7pWgduAHGZKWc9YtgONLQ8E5ZRkNAC5eDrpUebvedbhO1wD2StRRgQX%2BcLXO4Ew3I2L%2FF2T8lZcp1QJ2EJWr3%2FxaCBCFa9ANMkyYc8lP2GKrkCw%2F0g1u%2BhKXKiAxk9YKW02pzqF5MF0v5%2Fc3JX5psUQBZECOvkUS2T%2BR2gPLeacLovFt7jFctxzkSMY4LQIkDQBM%2F7j3PoxBy8o4iAzGS0RbNyaAI4OsHnku3DDjPJbild6iGNdqNtSrqLlwwlxKks%2BV38XzyrbYKLcovV9X%2FjYTpxHgBHDn%2FWPn8ioZtojbrM8bck626Gg7mFIkyR8OT7aiOozVuk8S9nS4gd7%2BoQXwo7A2bm97tXp4qazzTIg1aO7QN35%2FLnWLZNj5PCKHJbroFsirQXg0hgCmUezhpQpi372vzmStnmw4NsvwZ%2B%2F1SMByTbM3KoCVEkEEhUw%2F%2B37xAY6pgG29lBet9OFFNJZt46dReXItBTx%2Bts7rGO09tBFXIXbKZDCLaFyyQ48zuBXkFmAU8h2Gr%2B4RpAau2TmHIkI1rS2Cp5UJcZ9a%2BcaSy4qtTIrZpEshStxw3F9l38WGOHiKW03plSVmXENEI2liVQ8FanRI5ZZWj36pCTom37i%2FCBBb94XZ%2BwlgdvsH79IdRILCA37W3wTyeaH0qv4zHS6YL6rf1pj4WeE&X-Amz-Signature=6a20b7e4572c80c4801caf231fd0f18201f2ae55131f79670679f44631da5e13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUW7TVG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIF%2Ba8h54dgXAkjuZf8G32qFCP3n%2FNnFtFRPl11Uzh7EIAiAZL7oIc3784YeirSWazIjrUr%2BWVQDy0PcK8kODRYI9tSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM4%2FhFu0%2FZDFYOZNboKtwDWqAazxAxi4BJZvQ02HCgfx2l1%2B8k3EIrkEXVEvi27RNfkkIq%2FkvT8TKBe8WN8zmLxP7eNguPFQ36WeZLRcgdJfqiMuVA75nZSfvEW3W2ToDkJZQoGCrzh%2FJOZUliBcG%2BYQ7%2F0O2P6kyup6wWZh1C2ymMEOGrxoImZ5cfmHBcKH1TL9Mbjjtl8ksbEc5qP7pWgduAHGZKWc9YtgONLQ8E5ZRkNAC5eDrpUebvedbhO1wD2StRRgQX%2BcLXO4Ew3I2L%2FF2T8lZcp1QJ2EJWr3%2FxaCBCFa9ANMkyYc8lP2GKrkCw%2F0g1u%2BhKXKiAxk9YKW02pzqF5MF0v5%2Fc3JX5psUQBZECOvkUS2T%2BR2gPLeacLovFt7jFctxzkSMY4LQIkDQBM%2F7j3PoxBy8o4iAzGS0RbNyaAI4OsHnku3DDjPJbild6iGNdqNtSrqLlwwlxKks%2BV38XzyrbYKLcovV9X%2FjYTpxHgBHDn%2FWPn8ioZtojbrM8bck626Gg7mFIkyR8OT7aiOozVuk8S9nS4gd7%2BoQXwo7A2bm97tXp4qazzTIg1aO7QN35%2FLnWLZNj5PCKHJbroFsirQXg0hgCmUezhpQpi372vzmStnmw4NsvwZ%2B%2F1SMByTbM3KoCVEkEEhUw%2F%2B37xAY6pgG29lBet9OFFNJZt46dReXItBTx%2Bts7rGO09tBFXIXbKZDCLaFyyQ48zuBXkFmAU8h2Gr%2B4RpAau2TmHIkI1rS2Cp5UJcZ9a%2BcaSy4qtTIrZpEshStxw3F9l38WGOHiKW03plSVmXENEI2liVQ8FanRI5ZZWj36pCTom37i%2FCBBb94XZ%2BwlgdvsH79IdRILCA37W3wTyeaH0qv4zHS6YL6rf1pj4WeE&X-Amz-Signature=9c11272742c630b710441a73812e84e6f3390df409439e7f7f679892b2009f7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUW7TVG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIF%2Ba8h54dgXAkjuZf8G32qFCP3n%2FNnFtFRPl11Uzh7EIAiAZL7oIc3784YeirSWazIjrUr%2BWVQDy0PcK8kODRYI9tSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM4%2FhFu0%2FZDFYOZNboKtwDWqAazxAxi4BJZvQ02HCgfx2l1%2B8k3EIrkEXVEvi27RNfkkIq%2FkvT8TKBe8WN8zmLxP7eNguPFQ36WeZLRcgdJfqiMuVA75nZSfvEW3W2ToDkJZQoGCrzh%2FJOZUliBcG%2BYQ7%2F0O2P6kyup6wWZh1C2ymMEOGrxoImZ5cfmHBcKH1TL9Mbjjtl8ksbEc5qP7pWgduAHGZKWc9YtgONLQ8E5ZRkNAC5eDrpUebvedbhO1wD2StRRgQX%2BcLXO4Ew3I2L%2FF2T8lZcp1QJ2EJWr3%2FxaCBCFa9ANMkyYc8lP2GKrkCw%2F0g1u%2BhKXKiAxk9YKW02pzqF5MF0v5%2Fc3JX5psUQBZECOvkUS2T%2BR2gPLeacLovFt7jFctxzkSMY4LQIkDQBM%2F7j3PoxBy8o4iAzGS0RbNyaAI4OsHnku3DDjPJbild6iGNdqNtSrqLlwwlxKks%2BV38XzyrbYKLcovV9X%2FjYTpxHgBHDn%2FWPn8ioZtojbrM8bck626Gg7mFIkyR8OT7aiOozVuk8S9nS4gd7%2BoQXwo7A2bm97tXp4qazzTIg1aO7QN35%2FLnWLZNj5PCKHJbroFsirQXg0hgCmUezhpQpi372vzmStnmw4NsvwZ%2B%2F1SMByTbM3KoCVEkEEhUw%2F%2B37xAY6pgG29lBet9OFFNJZt46dReXItBTx%2Bts7rGO09tBFXIXbKZDCLaFyyQ48zuBXkFmAU8h2Gr%2B4RpAau2TmHIkI1rS2Cp5UJcZ9a%2BcaSy4qtTIrZpEshStxw3F9l38WGOHiKW03plSVmXENEI2liVQ8FanRI5ZZWj36pCTom37i%2FCBBb94XZ%2BwlgdvsH79IdRILCA37W3wTyeaH0qv4zHS6YL6rf1pj4WeE&X-Amz-Signature=7b2d222b24f3fcdb8f3d7e091cd2fcb1a8818c1789c9c60e069cd57834d950d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUW7TVG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIF%2Ba8h54dgXAkjuZf8G32qFCP3n%2FNnFtFRPl11Uzh7EIAiAZL7oIc3784YeirSWazIjrUr%2BWVQDy0PcK8kODRYI9tSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM4%2FhFu0%2FZDFYOZNboKtwDWqAazxAxi4BJZvQ02HCgfx2l1%2B8k3EIrkEXVEvi27RNfkkIq%2FkvT8TKBe8WN8zmLxP7eNguPFQ36WeZLRcgdJfqiMuVA75nZSfvEW3W2ToDkJZQoGCrzh%2FJOZUliBcG%2BYQ7%2F0O2P6kyup6wWZh1C2ymMEOGrxoImZ5cfmHBcKH1TL9Mbjjtl8ksbEc5qP7pWgduAHGZKWc9YtgONLQ8E5ZRkNAC5eDrpUebvedbhO1wD2StRRgQX%2BcLXO4Ew3I2L%2FF2T8lZcp1QJ2EJWr3%2FxaCBCFa9ANMkyYc8lP2GKrkCw%2F0g1u%2BhKXKiAxk9YKW02pzqF5MF0v5%2Fc3JX5psUQBZECOvkUS2T%2BR2gPLeacLovFt7jFctxzkSMY4LQIkDQBM%2F7j3PoxBy8o4iAzGS0RbNyaAI4OsHnku3DDjPJbild6iGNdqNtSrqLlwwlxKks%2BV38XzyrbYKLcovV9X%2FjYTpxHgBHDn%2FWPn8ioZtojbrM8bck626Gg7mFIkyR8OT7aiOozVuk8S9nS4gd7%2BoQXwo7A2bm97tXp4qazzTIg1aO7QN35%2FLnWLZNj5PCKHJbroFsirQXg0hgCmUezhpQpi372vzmStnmw4NsvwZ%2B%2F1SMByTbM3KoCVEkEEhUw%2F%2B37xAY6pgG29lBet9OFFNJZt46dReXItBTx%2Bts7rGO09tBFXIXbKZDCLaFyyQ48zuBXkFmAU8h2Gr%2B4RpAau2TmHIkI1rS2Cp5UJcZ9a%2BcaSy4qtTIrZpEshStxw3F9l38WGOHiKW03plSVmXENEI2liVQ8FanRI5ZZWj36pCTom37i%2FCBBb94XZ%2BwlgdvsH79IdRILCA37W3wTyeaH0qv4zHS6YL6rf1pj4WeE&X-Amz-Signature=5fe377bf15ce8548b944f6043b6ad04d339b95f9737050ac892dc47f2a0f67c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUW7TVG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIF%2Ba8h54dgXAkjuZf8G32qFCP3n%2FNnFtFRPl11Uzh7EIAiAZL7oIc3784YeirSWazIjrUr%2BWVQDy0PcK8kODRYI9tSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM4%2FhFu0%2FZDFYOZNboKtwDWqAazxAxi4BJZvQ02HCgfx2l1%2B8k3EIrkEXVEvi27RNfkkIq%2FkvT8TKBe8WN8zmLxP7eNguPFQ36WeZLRcgdJfqiMuVA75nZSfvEW3W2ToDkJZQoGCrzh%2FJOZUliBcG%2BYQ7%2F0O2P6kyup6wWZh1C2ymMEOGrxoImZ5cfmHBcKH1TL9Mbjjtl8ksbEc5qP7pWgduAHGZKWc9YtgONLQ8E5ZRkNAC5eDrpUebvedbhO1wD2StRRgQX%2BcLXO4Ew3I2L%2FF2T8lZcp1QJ2EJWr3%2FxaCBCFa9ANMkyYc8lP2GKrkCw%2F0g1u%2BhKXKiAxk9YKW02pzqF5MF0v5%2Fc3JX5psUQBZECOvkUS2T%2BR2gPLeacLovFt7jFctxzkSMY4LQIkDQBM%2F7j3PoxBy8o4iAzGS0RbNyaAI4OsHnku3DDjPJbild6iGNdqNtSrqLlwwlxKks%2BV38XzyrbYKLcovV9X%2FjYTpxHgBHDn%2FWPn8ioZtojbrM8bck626Gg7mFIkyR8OT7aiOozVuk8S9nS4gd7%2BoQXwo7A2bm97tXp4qazzTIg1aO7QN35%2FLnWLZNj5PCKHJbroFsirQXg0hgCmUezhpQpi372vzmStnmw4NsvwZ%2B%2F1SMByTbM3KoCVEkEEhUw%2F%2B37xAY6pgG29lBet9OFFNJZt46dReXItBTx%2Bts7rGO09tBFXIXbKZDCLaFyyQ48zuBXkFmAU8h2Gr%2B4RpAau2TmHIkI1rS2Cp5UJcZ9a%2BcaSy4qtTIrZpEshStxw3F9l38WGOHiKW03plSVmXENEI2liVQ8FanRI5ZZWj36pCTom37i%2FCBBb94XZ%2BwlgdvsH79IdRILCA37W3wTyeaH0qv4zHS6YL6rf1pj4WeE&X-Amz-Signature=a613ab120c06e3998eb16851c246bb3e1daf7043f52beeefcc23cf6bc173921e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUW7TVG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIF%2Ba8h54dgXAkjuZf8G32qFCP3n%2FNnFtFRPl11Uzh7EIAiAZL7oIc3784YeirSWazIjrUr%2BWVQDy0PcK8kODRYI9tSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM4%2FhFu0%2FZDFYOZNboKtwDWqAazxAxi4BJZvQ02HCgfx2l1%2B8k3EIrkEXVEvi27RNfkkIq%2FkvT8TKBe8WN8zmLxP7eNguPFQ36WeZLRcgdJfqiMuVA75nZSfvEW3W2ToDkJZQoGCrzh%2FJOZUliBcG%2BYQ7%2F0O2P6kyup6wWZh1C2ymMEOGrxoImZ5cfmHBcKH1TL9Mbjjtl8ksbEc5qP7pWgduAHGZKWc9YtgONLQ8E5ZRkNAC5eDrpUebvedbhO1wD2StRRgQX%2BcLXO4Ew3I2L%2FF2T8lZcp1QJ2EJWr3%2FxaCBCFa9ANMkyYc8lP2GKrkCw%2F0g1u%2BhKXKiAxk9YKW02pzqF5MF0v5%2Fc3JX5psUQBZECOvkUS2T%2BR2gPLeacLovFt7jFctxzkSMY4LQIkDQBM%2F7j3PoxBy8o4iAzGS0RbNyaAI4OsHnku3DDjPJbild6iGNdqNtSrqLlwwlxKks%2BV38XzyrbYKLcovV9X%2FjYTpxHgBHDn%2FWPn8ioZtojbrM8bck626Gg7mFIkyR8OT7aiOozVuk8S9nS4gd7%2BoQXwo7A2bm97tXp4qazzTIg1aO7QN35%2FLnWLZNj5PCKHJbroFsirQXg0hgCmUezhpQpi372vzmStnmw4NsvwZ%2B%2F1SMByTbM3KoCVEkEEhUw%2F%2B37xAY6pgG29lBet9OFFNJZt46dReXItBTx%2Bts7rGO09tBFXIXbKZDCLaFyyQ48zuBXkFmAU8h2Gr%2B4RpAau2TmHIkI1rS2Cp5UJcZ9a%2BcaSy4qtTIrZpEshStxw3F9l38WGOHiKW03plSVmXENEI2liVQ8FanRI5ZZWj36pCTom37i%2FCBBb94XZ%2BwlgdvsH79IdRILCA37W3wTyeaH0qv4zHS6YL6rf1pj4WeE&X-Amz-Signature=10c21d1aa6beadc52af3c92442b531596a204ac9533d108b7edfa868e7853bd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V27T5ZF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDIPPPkSPsXZnmu8NgEs42cZM6Vk7eS7oUW9MRm1GiLZAIgaPFBMqCnLLjaxNTN91rtdCWCBA%2Bmo92Ryt2t0JY3DG4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCxzSoraZzrBcPSFKyrcAzjaNiEYNcaFiNzstE3l6lLtlhEl7S%2FEikte%2B%2BA5UH8q44KI2b6AeuTdTTyRY0Ox3CH76h1VaZfN4Hf9v1O%2FYq23nw9dHSlIX%2BHUNEj6aJZMViPV0J0%2BUWIlWXOWG5KOsPxD21j3BU6G9c5yRgC%2BXD9jVjnPQPNTQeMg%2F%2FtJAMbmu2Aux7UZaSNWtBF%2BFe0lzH1h2QUz7ptlTrz9kTqbtON3qc%2BYR1PrsKL%2BuzZV1XbTGcrMsp5rMMSgtaLLQyLjjh%2FprjP9dUstIuVYgYFpofM%2By93Vp38dW2KJDfvOxn0EaIhbAHVRemX048VKQSxUwaBeqqKrRvsr8uxKnYy6wuwBl8tnWsNEYDuS15M%2FRoYsuIayQWUPnd9ujqWyIX5%2FIFJHoJjz8ZO2W0NEGSNintWbzUYhC5P0NGdrH3Pw9Zz0iLtZf5h7VqePo%2BPNdeX5N0nZoqmSrhhgNV3GKcRj6ZaDkfSpQNzf7dtMMDH8HGpidQABN7o6%2FSgi5%2Fp1KULDXvulNzjlq%2F%2BE6n4s1DG8X2ZuMK5YOvLMURpEgyvxt6T9snkz3r5AUVE0oo%2FBZrEEwZ18p%2F8uBxr9j0vxtK1B%2B2hGkVQ7abhcqt9s3AMsgC41%2Fsyu8G68pDtvWqI4MI3u%2B8QGOqUB0UYPC4QwP3xZQLpaVG7GozoZUVaOb%2BTkBGbjaMCY8k0UrrrRddt%2FsiMfyiSDujR21Hi44Q2z83b5xoEbWn8BbtxqeFRp9nesCQId2tlnV2c153JSv%2Bd3M2cttMyU9%2BRIkKDB7h0il2ClS%2F4j8%2Fmh%2BWTztd4BZEFzat1oUoX%2B0bu7VLeY4Xz7Zq5Q5NmyfTApXR6tuLlND9lIHBztm%2FvFmRsaxfZC&X-Amz-Signature=567d36add264640953420e7274762c673c3ff69fa89af87cba4af3ffdd73fd0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466765DOE4O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIDEOh6Np%2F3LyRXrzDpFcqDHHEMShf4FT2GSPkErIAtJXAiEA%2F2vxK%2BzA0Gl0RyG1xT%2BOUsmBOmzmgWp5sIyKu33kl30q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMH%2BzizgzeGTDWBJBircAxVggr2apCYbXe14Tjkia736ur7x9l%2FDnKqNccLb722g5tjnCzph6Clza%2BhN0W5IsPtVTnVr6MhSvrLlGpLffVkDCOwCZhVayNVHCxFPiuaI6yolukLlg3jXnGmm3yzOs%2B5I0YeBeXlvbRSoKZmiolgthiEyvhHr%2FWFMKNf4vOmp5Rtv1RySZd2IXziezC0mhjp%2FUGDmENSMaDamghnxnCl8ZKljEuWNeNipJCLhGZzQwlpaKwmfyzcYeMKSanYEaY3p%2F0mwXRNaKjGiR90PLPvqt93Gf%2FTogJwkiE%2B31HjgVyuyccaRNXaaBTY%2BPEc3XUem%2BcqTwsZh%2Fwirv4Af2m9Qi2vzj4MB3nsipsn2gYgqanDOhqVJcsSjKwcNPs3iAfS5L3o8FLDX8CGmQEQeEFl0oIm7MYYOXsaJlxEQUDM4J%2FpW3Jt1qPdtZMtWLfziKkgJRhYBNEisLYblZu%2FbPhx5%2B7hBRm30PtOHCQKEz0wyeV4vaXxPXQ%2BVxxctaZkrSW0VDalumFmqUL0er%2FXR1fhqv92k0Y%2B4ecaSoxwMadIWiaLQKzH5Ohr978F%2BSn84Bxji6aL1iQwbFvhSm9PMxDsS5xystbqkRgLAZqM9WvyuzDtchQiETzN6WrUfMKfv%2B8QGOqUBiLukzMYILMhUmEtpwzVPINnP2hZ8HlGkay6EZZXfrD7VXJEekKNd3hPEVt5Z1FjYx8fZezFcxSTCHhbLxXwbP7Q700n25szf%2B0wwplKM4h0WcdCnWO%2B3qIxZYjIvOaJUqZA4nSwdeqx5E%2FuQHps%2BXMHuoAxWEXSptFTGcTvaIY%2F8LtXyShsiRk7GYZcPhx2%2FRifqIAUMn4kVC735DHLjfE72MgEb&X-Amz-Signature=f4ad7caf329be25cd456082f968e3cedd9a6926bac037a0c1eb4805e26ceb2c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3CLJPPQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCwHityoEbSkDbaiM%2BhAm1WyHEMVJ%2Fh0dGh6MmvMAIW6wIgJKqdybx2BaQa5wbJDWlDmLcCG7BUmioTxsrvQbaa3cIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMwl6BFUkVG6EB%2Bg9SrcA12N26GFk5NWWusiO%2BuVPJiKw1a0yQt3SGqSirL0RuceOD%2B50839%2FTdst%2F6W6agEGETqtjAfwDT2RKbSVEnMK1Auu8orbtIR%2B%2B3bT2dtx8djDCpCRdTfIslzNCZvyvYqtJ%2Fe%2BJSdeg2biGMo5icEY3U0fXWH1v%2F5Nyihg8%2BPoV3c5jBbRoK0X5HMWY1FJoPahSgD1XjTEOXW69Tz9hoXeJgSRKfSqW1Bm1TEORzBhr4bM7wOqgboKa341KP94AOoF5g35nI9W%2Bv4o8TRfpFgq9aAK76QwpwF8pYkON2pSwqhFVqLh8EL8f%2BtSlnJnwgYM9ew9te%2FMqAJZjLGDWkC95kFFLJInpsYM1vQgGS6mlNJ%2BSL0Ja8ekGnJ7OCoIG1tavzGpnWtXTexj1B%2B4ltn0vDEmIghRo4RnKAkZJtc7O8NIsWkO7nWuclqQFwiatLzlaPNfFEUh3i14Fr5SCZJMi0GAD4kuoxLBLDnZ2i5h3ry1vtmYrMdlcD8FAg%2FZnJFdIT%2BOG2CYvzTqSngpJAWZ13RAODYnzqkI46adWq9tpjBuP4E9LwNWaeeBIIXrhIdJ0jQWGwD5m36g9ruGBB1JJCkqwl4UhrfRxsLDlmdPTt%2FkAufV1%2B72mp0QQxdMP3t%2B8QGOqUBWQ91kQRIpHCv1F5nBdoXirsL7g1QGn4BfZ%2BUavgZ6bofrIrMY8GboWdxC1rkqDGMoKE6Vb08D%2F4QUlOzik%2BNKmxUMwyFUYit62rVj23v5qHftf%2FgF5CYQycP%2B1SyLMtaGmtb1GgphAMgqEKT5ONSXty2lQBtOcBwz5H0AEmJLk%2F3N5%2BftzzaFne6whf%2BQsS0H5ss1kOKdBVJ21XTekTraAUMVxsc&X-Amz-Signature=f895dec9a6205eb8e4d5155ba5241ebe583d03d50957d57f97fcb05427abf55b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUW7TVG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIF%2Ba8h54dgXAkjuZf8G32qFCP3n%2FNnFtFRPl11Uzh7EIAiAZL7oIc3784YeirSWazIjrUr%2BWVQDy0PcK8kODRYI9tSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM4%2FhFu0%2FZDFYOZNboKtwDWqAazxAxi4BJZvQ02HCgfx2l1%2B8k3EIrkEXVEvi27RNfkkIq%2FkvT8TKBe8WN8zmLxP7eNguPFQ36WeZLRcgdJfqiMuVA75nZSfvEW3W2ToDkJZQoGCrzh%2FJOZUliBcG%2BYQ7%2F0O2P6kyup6wWZh1C2ymMEOGrxoImZ5cfmHBcKH1TL9Mbjjtl8ksbEc5qP7pWgduAHGZKWc9YtgONLQ8E5ZRkNAC5eDrpUebvedbhO1wD2StRRgQX%2BcLXO4Ew3I2L%2FF2T8lZcp1QJ2EJWr3%2FxaCBCFa9ANMkyYc8lP2GKrkCw%2F0g1u%2BhKXKiAxk9YKW02pzqF5MF0v5%2Fc3JX5psUQBZECOvkUS2T%2BR2gPLeacLovFt7jFctxzkSMY4LQIkDQBM%2F7j3PoxBy8o4iAzGS0RbNyaAI4OsHnku3DDjPJbild6iGNdqNtSrqLlwwlxKks%2BV38XzyrbYKLcovV9X%2FjYTpxHgBHDn%2FWPn8ioZtojbrM8bck626Gg7mFIkyR8OT7aiOozVuk8S9nS4gd7%2BoQXwo7A2bm97tXp4qazzTIg1aO7QN35%2FLnWLZNj5PCKHJbroFsirQXg0hgCmUezhpQpi372vzmStnmw4NsvwZ%2B%2F1SMByTbM3KoCVEkEEhUw%2F%2B37xAY6pgG29lBet9OFFNJZt46dReXItBTx%2Bts7rGO09tBFXIXbKZDCLaFyyQ48zuBXkFmAU8h2Gr%2B4RpAau2TmHIkI1rS2Cp5UJcZ9a%2BcaSy4qtTIrZpEshStxw3F9l38WGOHiKW03plSVmXENEI2liVQ8FanRI5ZZWj36pCTom37i%2FCBBb94XZ%2BwlgdvsH79IdRILCA37W3wTyeaH0qv4zHS6YL6rf1pj4WeE&X-Amz-Signature=8f41e03e6f95f6955faa572707d7e6e0ca49b8805f26e28b5126b89d9d36daf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOYZ5GQ5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDYKMOjyLYZKqYhmwUxLP9zC%2Fvc9%2F4WQ3L1%2FiXARWo%2FNAIhAJaOaKuIzeOkT3ORwCjhk1sx0NlHt7iz2SK%2BJn%2Fzvk6rKv8DCFoQABoMNjM3NDIzMTgzODA1Igx90xLv5QaJr%2Bm27Sgq3AOLZYBZWZ1YO7DghTeNQJkYx5Mm0jeJZmL91FezYYB6aHc7MDpOjRM51K9KgFwUkxGmjUIo4Xq2hoULPOZ2YSmPw0aWBPSBbtZuQtEeUlUzgOO317qr6gbahVvqzwCnle%2B1Jc7mRHoIzjrj%2BKzDCqw6NpX%2BoQBSd3DTrF2gN9R1nK6YzyPBH%2Fo4HtyQZPDwkUWaDJmzJYJgUz5iQpkGdmMDhBtatP3V93Tsot4krnaeneK8GJqNJKZ49%2BpN7TmgyxrWfPJb7BOAIY1m7p1%2FGALz8Dm6MXWy2wgXxjshesC0Q5XLRB%2B1UQSBIhay1mUBpSSqwi4e%2FIKI3BT9bnz1bbsPzl7hLq%2BIjBOyTZq%2FQo7Tzh%2BK2vyS%2BAz7EDsTeGa9KjLJrrNZgzxgBj%2B2safyaLwPe%2FrHgxTryjz3dR8P1usZJExoK2AdGjAGjg1yNYuyBf%2BNmTUoWHnCR7wQ32nnkQgXaYrmFgEi0HXaYyEvFquqsidPpBMG2Is%2FRrJkJEyS6cm%2FYfJwme4%2Bj9ELYNPdCy%2By8Me9qGAZPRf4RUGe7XTidvNgDM7XScEXRFKSqGpOP7hh2j1PZgfOoctaGvz09Hf0iOLqGksiYg022I0VlAyKUMBG5g%2Bw8jwRaRHi%2BzC%2B7vvEBjqkAUu8c%2FNDOIYzdtV6n%2B%2FimfAgR%2F6NH5uC82eQ33EVvDJutlABGVp4dHeEZkK3Pg%2FhPFqaqPaA5s431ifezGPL4n1tT4eBYp9SWaYsOtri9Yee%2BScIQc%2FClO1x8vKvldG4cXMBkt2EW2XrR7KB%2BuuW8KKU5OG3Ez12ze9qC2x4401zXzM09otCYBNnf9DJNJQImkLuyCVCtIxm6MXKzTTaxHE40T%2B5&X-Amz-Signature=bba68aa589cbfd51c6cdcf768a3c49daf4ebb977fbc4abecc29687b4ffdeab35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUW7TVG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIF%2Ba8h54dgXAkjuZf8G32qFCP3n%2FNnFtFRPl11Uzh7EIAiAZL7oIc3784YeirSWazIjrUr%2BWVQDy0PcK8kODRYI9tSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM4%2FhFu0%2FZDFYOZNboKtwDWqAazxAxi4BJZvQ02HCgfx2l1%2B8k3EIrkEXVEvi27RNfkkIq%2FkvT8TKBe8WN8zmLxP7eNguPFQ36WeZLRcgdJfqiMuVA75nZSfvEW3W2ToDkJZQoGCrzh%2FJOZUliBcG%2BYQ7%2F0O2P6kyup6wWZh1C2ymMEOGrxoImZ5cfmHBcKH1TL9Mbjjtl8ksbEc5qP7pWgduAHGZKWc9YtgONLQ8E5ZRkNAC5eDrpUebvedbhO1wD2StRRgQX%2BcLXO4Ew3I2L%2FF2T8lZcp1QJ2EJWr3%2FxaCBCFa9ANMkyYc8lP2GKrkCw%2F0g1u%2BhKXKiAxk9YKW02pzqF5MF0v5%2Fc3JX5psUQBZECOvkUS2T%2BR2gPLeacLovFt7jFctxzkSMY4LQIkDQBM%2F7j3PoxBy8o4iAzGS0RbNyaAI4OsHnku3DDjPJbild6iGNdqNtSrqLlwwlxKks%2BV38XzyrbYKLcovV9X%2FjYTpxHgBHDn%2FWPn8ioZtojbrM8bck626Gg7mFIkyR8OT7aiOozVuk8S9nS4gd7%2BoQXwo7A2bm97tXp4qazzTIg1aO7QN35%2FLnWLZNj5PCKHJbroFsirQXg0hgCmUezhpQpi372vzmStnmw4NsvwZ%2B%2F1SMByTbM3KoCVEkEEhUw%2F%2B37xAY6pgG29lBet9OFFNJZt46dReXItBTx%2Bts7rGO09tBFXIXbKZDCLaFyyQ48zuBXkFmAU8h2Gr%2B4RpAau2TmHIkI1rS2Cp5UJcZ9a%2BcaSy4qtTIrZpEshStxw3F9l38WGOHiKW03plSVmXENEI2liVQ8FanRI5ZZWj36pCTom37i%2FCBBb94XZ%2BwlgdvsH79IdRILCA37W3wTyeaH0qv4zHS6YL6rf1pj4WeE&X-Amz-Signature=831a0d533e85ebdb49c7f113f43ae3f5293fd54a64e4b9f5512177f93983f88a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP44PZFS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIGgOdg8xeFZlTviHvIPv7xHzQjAZu5ILQv4a3kIzdH%2F3AiAkLUH9%2B%2Bjk2yiH041gaaU8C7PAgP6BOHn8HrAlWt2yHSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMcB0N16J%2BZHoZPYYNKtwDBPu%2Bu%2FK%2BunCBfN3INHvnHlIfT7S%2Fpsg9A6US9SuzeNmEL29qS0XUOA3zcQVq3Bwudh1mpeDldXdxCKHpCOtl0DbRIsQqNe%2FkiCAYh04qqX101vvvCV453ENlpqwMuiNQbFrZnoCmol6OEps3kTsb9RaquwHUJ9bbgYAUntiG%2FvJHUildijbRo0lUMwufwzB%2BMbzLZOfHioCCpmrqLTfN6gk2yJLgy05uMoNrW9TCO4enqP%2FCvB15XUtYT8w8CyPy7rorbNwpkEpdOUZmDG8BnIy1ZjBJZ2gq3%2FMWavNfea5ARJ51qgQr9i3qvun0ZVUcgU2RFEFbVzW4JFj9%2BTaJ456Zkw1DfeW%2BxKRLX8hgzgPRd3FRgnefkmuxJrgj6ANTUz0mcByRXn0P6IiGQoAyysl7QLFS%2BeSmpt3TiEXpI2chw6FAyO784XFG01YMdnqZRGtCEZ%2BkqAlsjkwUWPiUiffIkOzk%2BBkuS4MEGvDZhJUPk4vRlWJB2DQIiYdozoGq%2F2mU%2Fl6QHAyb%2F7dQ49lgI5NeVzafXz%2BN7DW%2BXR6JhGUERKmskUZ%2BmqQCVqvQKe6H%2BRKmj6SlyjxF%2ByFVhEC5a4NOfGG3J9zkSglET2cpTBYo6ldKsmsr0ZCiFXYw%2Bu37xAY6pgGep2QYqJCY00%2BuFSi24MD5cZKNfJKI2TnPxXZ5tNhOZtzfoF2C8ulZolamdNeG1kHjWoItJ%2FahbDcvN3hKLVmimFif%2Bx95iDvvOldfeXnyaOdrAQqh7e5FY4fSdzSM9mdf71DGoTn4vj9YesFVZ6ohtSY7MpDlvJyeMC%2BpQ%2FUS0eGz9IkrLBWmyz44wAOCrytNcnNmqEOI%2BRLHY05OjNIbxQY1PHCT&X-Amz-Signature=ac27d621bb067a78d5c5e33f18a29f5c11d05210761e8dfdbb9b5e04b1b8dd5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUW7TVG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIF%2Ba8h54dgXAkjuZf8G32qFCP3n%2FNnFtFRPl11Uzh7EIAiAZL7oIc3784YeirSWazIjrUr%2BWVQDy0PcK8kODRYI9tSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM4%2FhFu0%2FZDFYOZNboKtwDWqAazxAxi4BJZvQ02HCgfx2l1%2B8k3EIrkEXVEvi27RNfkkIq%2FkvT8TKBe8WN8zmLxP7eNguPFQ36WeZLRcgdJfqiMuVA75nZSfvEW3W2ToDkJZQoGCrzh%2FJOZUliBcG%2BYQ7%2F0O2P6kyup6wWZh1C2ymMEOGrxoImZ5cfmHBcKH1TL9Mbjjtl8ksbEc5qP7pWgduAHGZKWc9YtgONLQ8E5ZRkNAC5eDrpUebvedbhO1wD2StRRgQX%2BcLXO4Ew3I2L%2FF2T8lZcp1QJ2EJWr3%2FxaCBCFa9ANMkyYc8lP2GKrkCw%2F0g1u%2BhKXKiAxk9YKW02pzqF5MF0v5%2Fc3JX5psUQBZECOvkUS2T%2BR2gPLeacLovFt7jFctxzkSMY4LQIkDQBM%2F7j3PoxBy8o4iAzGS0RbNyaAI4OsHnku3DDjPJbild6iGNdqNtSrqLlwwlxKks%2BV38XzyrbYKLcovV9X%2FjYTpxHgBHDn%2FWPn8ioZtojbrM8bck626Gg7mFIkyR8OT7aiOozVuk8S9nS4gd7%2BoQXwo7A2bm97tXp4qazzTIg1aO7QN35%2FLnWLZNj5PCKHJbroFsirQXg0hgCmUezhpQpi372vzmStnmw4NsvwZ%2B%2F1SMByTbM3KoCVEkEEhUw%2F%2B37xAY6pgG29lBet9OFFNJZt46dReXItBTx%2Bts7rGO09tBFXIXbKZDCLaFyyQ48zuBXkFmAU8h2Gr%2B4RpAau2TmHIkI1rS2Cp5UJcZ9a%2BcaSy4qtTIrZpEshStxw3F9l38WGOHiKW03plSVmXENEI2liVQ8FanRI5ZZWj36pCTom37i%2FCBBb94XZ%2BwlgdvsH79IdRILCA37W3wTyeaH0qv4zHS6YL6rf1pj4WeE&X-Amz-Signature=92c12475e4feda2c25269f505a078cb0343dc38c5a3f6a6884b75abf497c9c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWL3DH2R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGnB7Bidy5viFmukZLaZUEgKqQNlNVlL1nZO7PwwEcp8AiEA8LWES%2B0fcg3swfnf%2BAJUnI5M7fU%2B8TU%2BmU1r6LEN7Vgq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMOhZUlmvQsvWgaj1CrcA7P73BphhKI6YzrpubUuPMnR7nXj5lttS1dXl7OvI9tqIQ4dP0Ymn3NS6QnaSBayeupxO95AMOhKQp0%2FfjY3peJcH%2BrSuF5aI522Q0zX4eXG6GWaJ0edDKPyHbGgKRvCVCKRnjjsgYBVjRvab6IHdPYiwlNYvNj%2BI89Ga4djVWwkufj1kN8uPBDSYovEB1CDGSNsK6y656Dn8LbWuwNmNYfaipPR9lRR6x%2Fl1qR8jPzq4XsrMXRCy%2FNSDZ69G1eH%2Fp7EtEwWzWJvdRVkwEelysR%2BRCvHCXD2wu%2FkMQj9QlS722mMrbHbFFhXxjBUAn%2FZSKlrJ8MGaftV4pEp6U6kF2gUqKjPX7Hz4gG6ihyWH4dx82Y2WKwV5anqsuByEl7YuagcmjAYyoaIVrzN9Qzz9dFVJ%2FeiRvcdZqf7D8fFUG7mEHvsRmdcBK9%2FmZzQgutX9OovGR%2BXLT%2FimKLQBbahDc0Hrw%2BivVbFCIGTP1q71Qutb8iwfHs68tzzp4yCLTPDrdDaU13SEdCRhyLuRstslW8utUhNlW%2B%2F97w6p42cSaRm6PviamH1ZXNCsGXyn5i7%2FjR4R6uMupDLSLs%2FDn0ErenG04GuqsWskbfkCHNSUPlwLSR%2FVyef%2BEFN5z%2F1MJPu%2B8QGOqUBwlMkZn69zbB%2FTxhA84rgW4NxBJTBm00YYdqljsxHUKa3hUvfi8CaMsHU3qNsrwTMt%2FUPDEBwGSK1eUMFe%2BnRoJkO3VINvvMeyxr9YYXLkVKkIBwTmpVkK3qhK9T77jNqU20QWz32PaW8Cf%2BaA%2BwjQR354hhFFoQWeJcB845WZ0oMWtT1rpWZK%2BG6FrGlEB3FXuOZpxnlkWaQ%2BKan2EY%2B%2Bnruh0fq&X-Amz-Signature=1484cecb5a103e3ec1246fee82f406b2bf2440a23696eccc6b77e8310837fdbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUW7TVG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIF%2Ba8h54dgXAkjuZf8G32qFCP3n%2FNnFtFRPl11Uzh7EIAiAZL7oIc3784YeirSWazIjrUr%2BWVQDy0PcK8kODRYI9tSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM4%2FhFu0%2FZDFYOZNboKtwDWqAazxAxi4BJZvQ02HCgfx2l1%2B8k3EIrkEXVEvi27RNfkkIq%2FkvT8TKBe8WN8zmLxP7eNguPFQ36WeZLRcgdJfqiMuVA75nZSfvEW3W2ToDkJZQoGCrzh%2FJOZUliBcG%2BYQ7%2F0O2P6kyup6wWZh1C2ymMEOGrxoImZ5cfmHBcKH1TL9Mbjjtl8ksbEc5qP7pWgduAHGZKWc9YtgONLQ8E5ZRkNAC5eDrpUebvedbhO1wD2StRRgQX%2BcLXO4Ew3I2L%2FF2T8lZcp1QJ2EJWr3%2FxaCBCFa9ANMkyYc8lP2GKrkCw%2F0g1u%2BhKXKiAxk9YKW02pzqF5MF0v5%2Fc3JX5psUQBZECOvkUS2T%2BR2gPLeacLovFt7jFctxzkSMY4LQIkDQBM%2F7j3PoxBy8o4iAzGS0RbNyaAI4OsHnku3DDjPJbild6iGNdqNtSrqLlwwlxKks%2BV38XzyrbYKLcovV9X%2FjYTpxHgBHDn%2FWPn8ioZtojbrM8bck626Gg7mFIkyR8OT7aiOozVuk8S9nS4gd7%2BoQXwo7A2bm97tXp4qazzTIg1aO7QN35%2FLnWLZNj5PCKHJbroFsirQXg0hgCmUezhpQpi372vzmStnmw4NsvwZ%2B%2F1SMByTbM3KoCVEkEEhUw%2F%2B37xAY6pgG29lBet9OFFNJZt46dReXItBTx%2Bts7rGO09tBFXIXbKZDCLaFyyQ48zuBXkFmAU8h2Gr%2B4RpAau2TmHIkI1rS2Cp5UJcZ9a%2BcaSy4qtTIrZpEshStxw3F9l38WGOHiKW03plSVmXENEI2liVQ8FanRI5ZZWj36pCTom37i%2FCBBb94XZ%2BwlgdvsH79IdRILCA37W3wTyeaH0qv4zHS6YL6rf1pj4WeE&X-Amz-Signature=a19321dda2c49356c965bf24bff38725db7021d494bc1de9679624f06c754b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R64AZSQI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF11fKwoT%2F6z9VbcjZ2MszcBVUNzqA%2B4AY2p654%2FEGwDAiEAsuL%2BF%2F30ol0G6KI8%2FIrz1HfKEYjXEzGw82guTFwUDqAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDH%2FI4vDwmAghiuJdFyrcAyC%2B8%2BQJssHwescEKcuMMZbJ%2B1aZpfJqViCliLiO2D9KupDadN8Sihm5O91p%2BhPyvbOuAeCF5%2BNjOG5M3EqFSVC24CGt5M0bknilI39waOBFbrszhq%2Fd%2Bfx%2FjIZm3Dratz5p9Kt7LFh3%2BnBskxd%2F1EjBVcC5%2BRMz5OFYiwKAXHMla9VBSyb2enDc7%2Bhu3R6R%2FJxtpVr5pEwZgd41pro38YuzrxzcKJusucyasahSupQUGKAAMzK6UyHKAAaiipo9m8JYKumnoo3bwmMRK81MNjSIStj41UuLqB9ClW66yygI%2BkDRPSHt%2Fytv2W3Wax8FJwdwh2I7%2Be0tfr5%2FQl2OTyKFZr%2BgVheO1M9xmzQ%2BSAutBVyDhnRibl4Vgx%2BACT8Tc2iuYvCmDYnkdnUfxdCn98GK0JxkmmZjCLiJh1zO7kPHNumUjyHLhEEZcwn0b%2FAx%2Beb8KHOnU9PHAgrbB5wJNaF9I2jAa8ANjAy7Co7jWh%2B5mjT942m6Wra2Pkg7RJPxtaxb9vtmCdRUkB64%2BImvIqpun3F94%2FICaKFqWiK8yyl%2BUdM11%2F2H6Or9SN1o3qQ4CQRBW3EDrQs5jSRIdiMDAsL6BPPnwoEli%2BiA6Y8Eqz8M7DM7FbtKGZnT6Kp8MPnt%2B8QGOqUBJUqm1w9RlNP1HN1m1PgvxdHrG0tFcBPQTqgqlIcnaOfczZ%2FbnF4zqPk0bwRfhUXEj2KNr68st3PDcFA25d40kxa1%2Fx6fgXdw1QnTfxtPBwdvgOIr46iAjdyNRFZGBCXwiXEXZthfRsp7Ue5RqBL%2B3BWPy0wxegZu2FVlgim%2BqDWEPuW6aEkNHESTXO1pn7xv%2FNr%2FIvEVWBRvoTJGGlcjWjSiogKT&X-Amz-Signature=e09902fdda3e2823337b31726fe9ba75fcf1326560ed69d088cae2070eb92657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665V56CSE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIA4pHSHtVEXsfk82mvXyJDypF1imzn7DP7KRWRCvubHgAiEAorps0TpJKq7U%2BHOcxStTSLGKJNPvuDJD8ggJ5ppL88Eq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDNcOIpz1GaxuCgGtRircA6uS9XpqTc1eQ5ul5bW7oLWI22zpS9fwEai3CXAUjghjzOekE262xAVeVaP6fDaHg2FpdHpLfH%2F5bU5kxFrBOU6R41y4GUQsriYBZ5Aa6bD43LONOrRr9HRnmAKVAtpENax9utqIGZSUe1fIWj%2BCXJH%2By8Jf%2FrqQKYmd5Z0uAkfrsqc631TYeZOAuK%2F06dtiRqL9T9O7ABf2cO2SFshaLF0zmGrREW%2BCfcow5dDzwf7NWushL8Eub2GK3%2BfCwkSIv3Ro0BTUKRB2BO2uZ9hc2k5rwoj4z6V4kpxsjV5EW%2FIeDnXX06lc8HKiyMbKhO1cbXtGFrFnibT8KWs0eu1PaxJ4SPMEo6LMPJm%2FuTcx2OCIE5VVxKNck6SfsWfaLNacQ2Vmtr2zcN7hQADdnK1UHSfOK0dUqwZ30OHJ%2FEo2kIZGZQ%2FGu4ZZxrKEud1FiW5VUyFd%2FiEQbIKqV%2Bj5YTBKPkrVuo%2B8TmpimHHoHh7v1Z2LXs6oYT6Jilsa%2FRzmKIzf3uUfJsM0ne2ohZHQV5l8go%2Be2iK2Uaj6gnWx4Grrl4TBTYu4mtcjawDTaxFcWRZrGaCXQ%2BHu%2Fm3is5mzrDIG7puqe2qaEXkUg7a2Sdz3UhTMJZMwmihk%2BeWzYG7uMNbu%2B8QGOqUBxO3WXtfEQmr6%2FRBL%2Fbow8u9TSZVrQKg0SlksL9a3vP%2FHroP1sBs1QcFRAt%2B7sEKSuBlpu%2B2RlfLWoktanKKjrJjIky1xMjCotQYf2nbAwpPpq7i3kFPuAzM7QaKJwHDnKp2VyMkCCoErQrnov9BLSMrRs5KNoxOhe%2Bhij1qZ1hSOYcwD%2FwOOdsQ7Fsln%2BofBEhJ4hhVq6reQIxo24Ik3Iin7qGwW&X-Amz-Signature=09c282d42d6c533a94b0ea4d9d1d6b8afe31630aae533b718dabff53d1bcc335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAM7EZ5D%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDWz%2Brsi4gJMLUYb4TXQOnt4gvp7IZ5Qwdm9DhPfWi3WAIhAPArz9hIQENMPL8Pna4pFHZMQG5N5w9qU497gZEaKp%2BgKv8DCFoQABoMNjM3NDIzMTgzODA1Igy9lXmeHWYC2BT%2FALYq3APu89ON1zqaIr%2FaHyG2%2Bf2jgDIkl32hSkcSZpWWzdz4zJN5rRv8bqRdjPTDd32IcebdocpKNYqrluplBu%2FvyAV%2F8sETvo49XAkOoMtx0vJfcQ4nDWUmLAgw8Gn%2Frgzedr9HkKhRgwSvK44b8MXYH7zVBDvIYAnKWR1CfIqaZk%2Bd%2FpfUJRmc7Db3j6fga2Q8CJJGN934zxCBehNkpOZ4stLBJ6uFiL3OSf0Y0knLyKL6%2BK3kHQ2kBowtsUiw65tRFrb64laD2cVB84mPgY%2BNjhH7x7q1xbt8SXzDaoABMfyUf%2BM8VW7aB6m4BhHBI6zkCo5WZgnJA3uYOAx6B6%2BMryUtlWkOvAf7QH%2BpyjxW%2FYIZuhR6AMhWywn37zBneLndk5SqPUIgWVRjY1BxMe2GUl3hjA9ecMmzGDzIS4%2F7K%2FVZnMmzXA9ayGOsNxhGbUdwngttsXKsufhzCi7GKN7tYwnXygYaMPQapNb13rWrfmIgBzERXFJ4UqSPzeQ2hUhDkWR0zWSTbOswQ3Y5FxJYIwmlllJX5SPFOX%2Bvo3XonpW7UQ6hSYGNfHJMnL7mO96h4x1UnrUY0GsLYkjDL7%2BIgXtTGNxEt6KOYXGzQnYS7yibVxDpa27mHftWrGCKxjD17vvEBjqkAckknExcY%2FgaJAK%2BQNulLOHw2fhoQfFcziJQr5iHeU6d9iHrowDej%2BRVOG03lxJsMcv4nt%2FDejefSnHjoYMPwN%2BxTQteiQBMYCsQ4%2BdmrfZ6rTKbb28UT3Dia7sfJUsf3M66vf%2FRjf92277Z9E8Qmh3tw6I1foFtGIIdrEZQpb5P%2FL%2FQdr3VG%2Fsh3WpTRdYI6TKBzIuJid35JzX9CHtL6%2BIb2LBY&X-Amz-Signature=49e619200f43ba666d43aa2319fcfa9cf01db2019c38b09d2c7bfdd209e17694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QPYWTVM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCclxjH9bpjXuVPhUHo7E4tTZzMT9q%2FOK%2Bp19%2BNy2K2OwIgYlJ2Qi%2BNKvJJvOU1YRpiJ5M1I7sLCWeCFiwEFE7RNxAq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIab4fHEoVGepiCsuircA0Z0pyPS6bRHNaeg92sSLM0fpyNwLN67HJSUdSS6fviqEH0z9I3a5rOpELQ%2F9VFWeQa2r7FT8kTHh4MEbu1lZi5ttwu1p3L3cZxrKXGkxQp%2FMW%2BIl8%2BDiCpwN9QlnU3yF5PurMbty5TIcuKk4%2B%2BzIxtFl8ei2RWwisllIi6HO915P0cpMl15RdCuG1uCZ9jFO3408405oseZL%2FVK8u7AZDaedagNwSpBl7BwXxjkwa3jY8xzs5MpfEpGArzM2R4ZgCBVDZN%2B%2BmnCPcnAnrA0Nmq%2Fy%2FnwfBrVaExbAvp9Yo2VYikQta2P0mocIGAwAnv82uQXRCmzu4rND3%2F3eAcRTMyQdwjKUO5Lana%2F3Y8KMYqPaNvNMBE7CRg24%2FQ2%2BP5HkzypCIOk63VLrBk8krrzp09aoK5yPuo3bwKzefJZi7XGw7tb2cssIZ%2B3y5PRZl6LmjOKjkjxDVrFHg4UFTn2Yyx8ylGpuxR2jAfsqtx07Vh%2FCmx6f41E4mSAEzhgzTQd6azlt52Y7lYxhaZhVPgWECFZP%2BNaW2Mev8%2BZVF0IpZY67KwKeahWMqfk25hBVq1%2FmfWTAxmhrFKIbYtzhfyiK5PHGzf7JJBMe6UYVwycumz4QvmaeZtfRamo3kFuMJnv%2B8QGOqUBVdit7Qv5e1sXmI1Al%2BsJixuYa6hslDoMSEGGpdNwSFQPrXMFNpUffPa1CYiyN%2Bo8nkEUIPEiMF8QG6Z1ayef4BRFIMClHbBOSfROBc5ncAl90b2DCIQz28IXhwYqGDAbktr8iD6YMqtRiumCVJzSayTZHoU3IMCpYUzsVm3QkOckXDaq5cK2zhqmOBkPX17WhiDqOBL82pyfGp7bYWSF0qQo%2BZbe&X-Amz-Signature=f7c8bd5e326f72ac1831ef579568bf1c2af96027df2b1625a8f2c87c11c7580b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XY2O27R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHIm8fXu8PHazTpXJR9fQH4BOCQXowldeNNmhQoucxB%2FAiEAnqYZ4Sz990kXIkYzJL5O8GkW50RTyS9OrHJsJKo2e94q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJ9w%2FofG0UzWUQSKJCrcA8qYap1bc%2FwWd0vKzmaDWCzgmJ5mY5GuecoxQuDBpWsAQoKQCtsmSoinLsqEq%2Fzncn7lLOzU8KRrY1zAbtQCQtTd4wwRDHgpdQNKzBPNwyzLsnXP4gwLqEllZbx%2BqN5jsYpHiHTC%2FrymTAOIJySOWoxwURJwSPM6v0%2BuLutdAZZqLqZEDLnxp4RleuQmMjw8qn7UUPDhDzU7IkwGbjQno0w5H8QPLtUnlvGomV4XDWCKHRPL5xV4wUskeW1350YSNmmG41VoqJSKNsNHjha6Z3Y3DpfY%2FKWTdWYgDVef0C0KmTrlGBJ5X2uF4wBLdMwT24v4eDvpshLaWG%2BhllPYEwo3BpwrESo2%2BmBJUxWGLcPodSpvs9iYJEbXGWJqkOjqpzRArkofhBEUVA9cyOOk%2FvPHtQiGmXBY1H6YD1QCbiWh8OnP%2FpgfxRvjOK9gjlVlMwqH1z5PITXAOU%2FH9YUouPoTCUKE38Mp93as6mll8YqTFi39%2BhmGQwOxKUAsAgb4yFkGmy9xtrHUTCQMuqAB5e7I%2BX243kOP2YbLR072c79u9WhWduTAY0fF3bpzZ1NbMYE7s5ZjqqERjpuelV5ggQXMiODyPQrTfOhKb%2BofSbpuUFZTet9OEzXn8Hz5MJfu%2B8QGOqUBXDUFfNXvWOytCnWw3wKxTOF6pSYAIaDjLluveh8J9jDkXyJKHXm%2BP%2FwAux6s%2Bd5k%2BXbd%2FbkHt7aho6cSmrFjqctmbt5ySPzfzy82xtw48wpJHpYBD7ucbPJ1v1RhSg2CWjJQBIoWvlKQvF6r%2FCouRTyPBdFTBleKEQheGVJ3XQabj89PWY9k3Fg36%2BI88Lck3U4fFdGPtSZewXFYIr4OQYUCo%2FWX&X-Amz-Signature=9b63083e1d4b4dee49573e79fb33fabf5105c8bbb0531de403c3ee31d2b9a0e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUW7TVG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIF%2Ba8h54dgXAkjuZf8G32qFCP3n%2FNnFtFRPl11Uzh7EIAiAZL7oIc3784YeirSWazIjrUr%2BWVQDy0PcK8kODRYI9tSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM4%2FhFu0%2FZDFYOZNboKtwDWqAazxAxi4BJZvQ02HCgfx2l1%2B8k3EIrkEXVEvi27RNfkkIq%2FkvT8TKBe8WN8zmLxP7eNguPFQ36WeZLRcgdJfqiMuVA75nZSfvEW3W2ToDkJZQoGCrzh%2FJOZUliBcG%2BYQ7%2F0O2P6kyup6wWZh1C2ymMEOGrxoImZ5cfmHBcKH1TL9Mbjjtl8ksbEc5qP7pWgduAHGZKWc9YtgONLQ8E5ZRkNAC5eDrpUebvedbhO1wD2StRRgQX%2BcLXO4Ew3I2L%2FF2T8lZcp1QJ2EJWr3%2FxaCBCFa9ANMkyYc8lP2GKrkCw%2F0g1u%2BhKXKiAxk9YKW02pzqF5MF0v5%2Fc3JX5psUQBZECOvkUS2T%2BR2gPLeacLovFt7jFctxzkSMY4LQIkDQBM%2F7j3PoxBy8o4iAzGS0RbNyaAI4OsHnku3DDjPJbild6iGNdqNtSrqLlwwlxKks%2BV38XzyrbYKLcovV9X%2FjYTpxHgBHDn%2FWPn8ioZtojbrM8bck626Gg7mFIkyR8OT7aiOozVuk8S9nS4gd7%2BoQXwo7A2bm97tXp4qazzTIg1aO7QN35%2FLnWLZNj5PCKHJbroFsirQXg0hgCmUezhpQpi372vzmStnmw4NsvwZ%2B%2F1SMByTbM3KoCVEkEEhUw%2F%2B37xAY6pgG29lBet9OFFNJZt46dReXItBTx%2Bts7rGO09tBFXIXbKZDCLaFyyQ48zuBXkFmAU8h2Gr%2B4RpAau2TmHIkI1rS2Cp5UJcZ9a%2BcaSy4qtTIrZpEshStxw3F9l38WGOHiKW03plSVmXENEI2liVQ8FanRI5ZZWj36pCTom37i%2FCBBb94XZ%2BwlgdvsH79IdRILCA37W3wTyeaH0qv4zHS6YL6rf1pj4WeE&X-Amz-Signature=22fa3162bcdd2a05bf35974dd2b4c523ec6f044cac3c909e2bd3aecc942568d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBUW7TVG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIF%2Ba8h54dgXAkjuZf8G32qFCP3n%2FNnFtFRPl11Uzh7EIAiAZL7oIc3784YeirSWazIjrUr%2BWVQDy0PcK8kODRYI9tSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM4%2FhFu0%2FZDFYOZNboKtwDWqAazxAxi4BJZvQ02HCgfx2l1%2B8k3EIrkEXVEvi27RNfkkIq%2FkvT8TKBe8WN8zmLxP7eNguPFQ36WeZLRcgdJfqiMuVA75nZSfvEW3W2ToDkJZQoGCrzh%2FJOZUliBcG%2BYQ7%2F0O2P6kyup6wWZh1C2ymMEOGrxoImZ5cfmHBcKH1TL9Mbjjtl8ksbEc5qP7pWgduAHGZKWc9YtgONLQ8E5ZRkNAC5eDrpUebvedbhO1wD2StRRgQX%2BcLXO4Ew3I2L%2FF2T8lZcp1QJ2EJWr3%2FxaCBCFa9ANMkyYc8lP2GKrkCw%2F0g1u%2BhKXKiAxk9YKW02pzqF5MF0v5%2Fc3JX5psUQBZECOvkUS2T%2BR2gPLeacLovFt7jFctxzkSMY4LQIkDQBM%2F7j3PoxBy8o4iAzGS0RbNyaAI4OsHnku3DDjPJbild6iGNdqNtSrqLlwwlxKks%2BV38XzyrbYKLcovV9X%2FjYTpxHgBHDn%2FWPn8ioZtojbrM8bck626Gg7mFIkyR8OT7aiOozVuk8S9nS4gd7%2BoQXwo7A2bm97tXp4qazzTIg1aO7QN35%2FLnWLZNj5PCKHJbroFsirQXg0hgCmUezhpQpi372vzmStnmw4NsvwZ%2B%2F1SMByTbM3KoCVEkEEhUw%2F%2B37xAY6pgG29lBet9OFFNJZt46dReXItBTx%2Bts7rGO09tBFXIXbKZDCLaFyyQ48zuBXkFmAU8h2Gr%2B4RpAau2TmHIkI1rS2Cp5UJcZ9a%2BcaSy4qtTIrZpEshStxw3F9l38WGOHiKW03plSVmXENEI2liVQ8FanRI5ZZWj36pCTom37i%2FCBBb94XZ%2BwlgdvsH79IdRILCA37W3wTyeaH0qv4zHS6YL6rf1pj4WeE&X-Amz-Signature=3047c9783535664c42b2ece3a2e34a1085422b102420a8504ddc736d440bcde7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HEPIME%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIDvxqX94xorKQxmfpyFmmwERObs2%2Bh3ETooK9D0CvHAnAiEA219bSFIfI9Eorv9e6pQ7X0%2FPETy68iRUfwnxOEng8K0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPtQhnoPjK0ZrsMQ9SrcA8aQz9Zoc2Qu%2FQqKd0zu0Zvy9BpXEz%2FPK4JuaxVq87mxts%2BmwO2EKQOT4WQDWAD1%2B1GIsQdbcvNIb5%2FdqEgki3EKPqQh33lgRpN%2Bwkmc8BFjjrB820DtIwdsMmDWmkhvb2Tjq48Ho0MG%2BXcKDRcAliokhoU7q6bhMwbF4MAcpwqgCDxiZyzMroae7DIJr%2BXjGko5bK1Im1znCp%2BZT9TCuLT3d9%2B4HN2mCvPLKeOal7fTNdiiwfPRN2iGtb%2F0AWoq7pXT6wVG3ZJHWlWBedg4Ua6KeQk69fOIKF1DAahPdiajitmFkfLIf0C5vdNxOfzeXojTOfn9Hlj5PS3%2FmrC4QUUQMrJZ6SrACEkNpkjh%2FZYXfstOBKj5c6LG6SL%2BhKxvXmaYLBwPNbl5eBmzrAKIGmtpDBJO8B127snAfuLhOew5dTRb7e5cBWB1hGboVBqm9jQdkJkeRSRFpkway9W4MzWV2qO7%2Fi8kCpAdFK4SvuFFvHQ8LWKkEirfwR5S055Om8XImfo6G26X%2B%2Br%2BEHAwo2ng4TweIsi1xZk2rUrbZaf%2BMwBG4%2BCfAueGHnrgjLMoS8xo3NtcWJHrre52GKHwoF6tyo0zAuWXIDZKyEg1pYya140c%2BM0WYZim3yfiMIju%2B8QGOqUB2hXqMSl807bYVwwR3HRCDhJYjh78pxErcvDWDR9Wa77hTCIX8rCO2%2FQB0I50oQsL11ryRYlCOjFrHHiNI%2Fer5o3D8aX5RnCp4aUYNYTjpvD8W4b2StDyUO0ICNxZMtie5dGa4TW4Qn4By4I4qXgGf4XfmShXF4NvaYltf5pRY6dGCcpwlf8gezI2VjAa4n7AyumnWKDDNufWAlq0SA7xNcayFj1l&X-Amz-Signature=707d7f4d9c82dff7217526fce4a584fb009bd179704774fdb28c11b21cd018d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HEPIME%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIDvxqX94xorKQxmfpyFmmwERObs2%2Bh3ETooK9D0CvHAnAiEA219bSFIfI9Eorv9e6pQ7X0%2FPETy68iRUfwnxOEng8K0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPtQhnoPjK0ZrsMQ9SrcA8aQz9Zoc2Qu%2FQqKd0zu0Zvy9BpXEz%2FPK4JuaxVq87mxts%2BmwO2EKQOT4WQDWAD1%2B1GIsQdbcvNIb5%2FdqEgki3EKPqQh33lgRpN%2Bwkmc8BFjjrB820DtIwdsMmDWmkhvb2Tjq48Ho0MG%2BXcKDRcAliokhoU7q6bhMwbF4MAcpwqgCDxiZyzMroae7DIJr%2BXjGko5bK1Im1znCp%2BZT9TCuLT3d9%2B4HN2mCvPLKeOal7fTNdiiwfPRN2iGtb%2F0AWoq7pXT6wVG3ZJHWlWBedg4Ua6KeQk69fOIKF1DAahPdiajitmFkfLIf0C5vdNxOfzeXojTOfn9Hlj5PS3%2FmrC4QUUQMrJZ6SrACEkNpkjh%2FZYXfstOBKj5c6LG6SL%2BhKxvXmaYLBwPNbl5eBmzrAKIGmtpDBJO8B127snAfuLhOew5dTRb7e5cBWB1hGboVBqm9jQdkJkeRSRFpkway9W4MzWV2qO7%2Fi8kCpAdFK4SvuFFvHQ8LWKkEirfwR5S055Om8XImfo6G26X%2B%2Br%2BEHAwo2ng4TweIsi1xZk2rUrbZaf%2BMwBG4%2BCfAueGHnrgjLMoS8xo3NtcWJHrre52GKHwoF6tyo0zAuWXIDZKyEg1pYya140c%2BM0WYZim3yfiMIju%2B8QGOqUB2hXqMSl807bYVwwR3HRCDhJYjh78pxErcvDWDR9Wa77hTCIX8rCO2%2FQB0I50oQsL11ryRYlCOjFrHHiNI%2Fer5o3D8aX5RnCp4aUYNYTjpvD8W4b2StDyUO0ICNxZMtie5dGa4TW4Qn4By4I4qXgGf4XfmShXF4NvaYltf5pRY6dGCcpwlf8gezI2VjAa4n7AyumnWKDDNufWAlq0SA7xNcayFj1l&X-Amz-Signature=9a36536b00a92aa0a81e9d5e5c4c2e60da6ae3bd299fe5244f7cd1f8b7e8b50e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HEPIME%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIDvxqX94xorKQxmfpyFmmwERObs2%2Bh3ETooK9D0CvHAnAiEA219bSFIfI9Eorv9e6pQ7X0%2FPETy68iRUfwnxOEng8K0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPtQhnoPjK0ZrsMQ9SrcA8aQz9Zoc2Qu%2FQqKd0zu0Zvy9BpXEz%2FPK4JuaxVq87mxts%2BmwO2EKQOT4WQDWAD1%2B1GIsQdbcvNIb5%2FdqEgki3EKPqQh33lgRpN%2Bwkmc8BFjjrB820DtIwdsMmDWmkhvb2Tjq48Ho0MG%2BXcKDRcAliokhoU7q6bhMwbF4MAcpwqgCDxiZyzMroae7DIJr%2BXjGko5bK1Im1znCp%2BZT9TCuLT3d9%2B4HN2mCvPLKeOal7fTNdiiwfPRN2iGtb%2F0AWoq7pXT6wVG3ZJHWlWBedg4Ua6KeQk69fOIKF1DAahPdiajitmFkfLIf0C5vdNxOfzeXojTOfn9Hlj5PS3%2FmrC4QUUQMrJZ6SrACEkNpkjh%2FZYXfstOBKj5c6LG6SL%2BhKxvXmaYLBwPNbl5eBmzrAKIGmtpDBJO8B127snAfuLhOew5dTRb7e5cBWB1hGboVBqm9jQdkJkeRSRFpkway9W4MzWV2qO7%2Fi8kCpAdFK4SvuFFvHQ8LWKkEirfwR5S055Om8XImfo6G26X%2B%2Br%2BEHAwo2ng4TweIsi1xZk2rUrbZaf%2BMwBG4%2BCfAueGHnrgjLMoS8xo3NtcWJHrre52GKHwoF6tyo0zAuWXIDZKyEg1pYya140c%2BM0WYZim3yfiMIju%2B8QGOqUB2hXqMSl807bYVwwR3HRCDhJYjh78pxErcvDWDR9Wa77hTCIX8rCO2%2FQB0I50oQsL11ryRYlCOjFrHHiNI%2Fer5o3D8aX5RnCp4aUYNYTjpvD8W4b2StDyUO0ICNxZMtie5dGa4TW4Qn4By4I4qXgGf4XfmShXF4NvaYltf5pRY6dGCcpwlf8gezI2VjAa4n7AyumnWKDDNufWAlq0SA7xNcayFj1l&X-Amz-Signature=c5473954a7670476cb624b46c0d0bd2c216e6cfd3411a8f5016df95a93b0735b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HEPIME%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIDvxqX94xorKQxmfpyFmmwERObs2%2Bh3ETooK9D0CvHAnAiEA219bSFIfI9Eorv9e6pQ7X0%2FPETy68iRUfwnxOEng8K0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPtQhnoPjK0ZrsMQ9SrcA8aQz9Zoc2Qu%2FQqKd0zu0Zvy9BpXEz%2FPK4JuaxVq87mxts%2BmwO2EKQOT4WQDWAD1%2B1GIsQdbcvNIb5%2FdqEgki3EKPqQh33lgRpN%2Bwkmc8BFjjrB820DtIwdsMmDWmkhvb2Tjq48Ho0MG%2BXcKDRcAliokhoU7q6bhMwbF4MAcpwqgCDxiZyzMroae7DIJr%2BXjGko5bK1Im1znCp%2BZT9TCuLT3d9%2B4HN2mCvPLKeOal7fTNdiiwfPRN2iGtb%2F0AWoq7pXT6wVG3ZJHWlWBedg4Ua6KeQk69fOIKF1DAahPdiajitmFkfLIf0C5vdNxOfzeXojTOfn9Hlj5PS3%2FmrC4QUUQMrJZ6SrACEkNpkjh%2FZYXfstOBKj5c6LG6SL%2BhKxvXmaYLBwPNbl5eBmzrAKIGmtpDBJO8B127snAfuLhOew5dTRb7e5cBWB1hGboVBqm9jQdkJkeRSRFpkway9W4MzWV2qO7%2Fi8kCpAdFK4SvuFFvHQ8LWKkEirfwR5S055Om8XImfo6G26X%2B%2Br%2BEHAwo2ng4TweIsi1xZk2rUrbZaf%2BMwBG4%2BCfAueGHnrgjLMoS8xo3NtcWJHrre52GKHwoF6tyo0zAuWXIDZKyEg1pYya140c%2BM0WYZim3yfiMIju%2B8QGOqUB2hXqMSl807bYVwwR3HRCDhJYjh78pxErcvDWDR9Wa77hTCIX8rCO2%2FQB0I50oQsL11ryRYlCOjFrHHiNI%2Fer5o3D8aX5RnCp4aUYNYTjpvD8W4b2StDyUO0ICNxZMtie5dGa4TW4Qn4By4I4qXgGf4XfmShXF4NvaYltf5pRY6dGCcpwlf8gezI2VjAa4n7AyumnWKDDNufWAlq0SA7xNcayFj1l&X-Amz-Signature=6f975ff48b632ba46bd3141f6f4e9722ffe62e168c0985fe045d8e1274d198c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HEPIME%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIDvxqX94xorKQxmfpyFmmwERObs2%2Bh3ETooK9D0CvHAnAiEA219bSFIfI9Eorv9e6pQ7X0%2FPETy68iRUfwnxOEng8K0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPtQhnoPjK0ZrsMQ9SrcA8aQz9Zoc2Qu%2FQqKd0zu0Zvy9BpXEz%2FPK4JuaxVq87mxts%2BmwO2EKQOT4WQDWAD1%2B1GIsQdbcvNIb5%2FdqEgki3EKPqQh33lgRpN%2Bwkmc8BFjjrB820DtIwdsMmDWmkhvb2Tjq48Ho0MG%2BXcKDRcAliokhoU7q6bhMwbF4MAcpwqgCDxiZyzMroae7DIJr%2BXjGko5bK1Im1znCp%2BZT9TCuLT3d9%2B4HN2mCvPLKeOal7fTNdiiwfPRN2iGtb%2F0AWoq7pXT6wVG3ZJHWlWBedg4Ua6KeQk69fOIKF1DAahPdiajitmFkfLIf0C5vdNxOfzeXojTOfn9Hlj5PS3%2FmrC4QUUQMrJZ6SrACEkNpkjh%2FZYXfstOBKj5c6LG6SL%2BhKxvXmaYLBwPNbl5eBmzrAKIGmtpDBJO8B127snAfuLhOew5dTRb7e5cBWB1hGboVBqm9jQdkJkeRSRFpkway9W4MzWV2qO7%2Fi8kCpAdFK4SvuFFvHQ8LWKkEirfwR5S055Om8XImfo6G26X%2B%2Br%2BEHAwo2ng4TweIsi1xZk2rUrbZaf%2BMwBG4%2BCfAueGHnrgjLMoS8xo3NtcWJHrre52GKHwoF6tyo0zAuWXIDZKyEg1pYya140c%2BM0WYZim3yfiMIju%2B8QGOqUB2hXqMSl807bYVwwR3HRCDhJYjh78pxErcvDWDR9Wa77hTCIX8rCO2%2FQB0I50oQsL11ryRYlCOjFrHHiNI%2Fer5o3D8aX5RnCp4aUYNYTjpvD8W4b2StDyUO0ICNxZMtie5dGa4TW4Qn4By4I4qXgGf4XfmShXF4NvaYltf5pRY6dGCcpwlf8gezI2VjAa4n7AyumnWKDDNufWAlq0SA7xNcayFj1l&X-Amz-Signature=c82dd82fde71d8c86908b2a856329095a60bb1a50f904b49215bcf98ca6dd6ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HEPIME%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIDvxqX94xorKQxmfpyFmmwERObs2%2Bh3ETooK9D0CvHAnAiEA219bSFIfI9Eorv9e6pQ7X0%2FPETy68iRUfwnxOEng8K0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPtQhnoPjK0ZrsMQ9SrcA8aQz9Zoc2Qu%2FQqKd0zu0Zvy9BpXEz%2FPK4JuaxVq87mxts%2BmwO2EKQOT4WQDWAD1%2B1GIsQdbcvNIb5%2FdqEgki3EKPqQh33lgRpN%2Bwkmc8BFjjrB820DtIwdsMmDWmkhvb2Tjq48Ho0MG%2BXcKDRcAliokhoU7q6bhMwbF4MAcpwqgCDxiZyzMroae7DIJr%2BXjGko5bK1Im1znCp%2BZT9TCuLT3d9%2B4HN2mCvPLKeOal7fTNdiiwfPRN2iGtb%2F0AWoq7pXT6wVG3ZJHWlWBedg4Ua6KeQk69fOIKF1DAahPdiajitmFkfLIf0C5vdNxOfzeXojTOfn9Hlj5PS3%2FmrC4QUUQMrJZ6SrACEkNpkjh%2FZYXfstOBKj5c6LG6SL%2BhKxvXmaYLBwPNbl5eBmzrAKIGmtpDBJO8B127snAfuLhOew5dTRb7e5cBWB1hGboVBqm9jQdkJkeRSRFpkway9W4MzWV2qO7%2Fi8kCpAdFK4SvuFFvHQ8LWKkEirfwR5S055Om8XImfo6G26X%2B%2Br%2BEHAwo2ng4TweIsi1xZk2rUrbZaf%2BMwBG4%2BCfAueGHnrgjLMoS8xo3NtcWJHrre52GKHwoF6tyo0zAuWXIDZKyEg1pYya140c%2BM0WYZim3yfiMIju%2B8QGOqUB2hXqMSl807bYVwwR3HRCDhJYjh78pxErcvDWDR9Wa77hTCIX8rCO2%2FQB0I50oQsL11ryRYlCOjFrHHiNI%2Fer5o3D8aX5RnCp4aUYNYTjpvD8W4b2StDyUO0ICNxZMtie5dGa4TW4Qn4By4I4qXgGf4XfmShXF4NvaYltf5pRY6dGCcpwlf8gezI2VjAa4n7AyumnWKDDNufWAlq0SA7xNcayFj1l&X-Amz-Signature=f745c59110115ba0c399c4185347083538f09192172da64d5e6074c1d55b42de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HEPIME%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIDvxqX94xorKQxmfpyFmmwERObs2%2Bh3ETooK9D0CvHAnAiEA219bSFIfI9Eorv9e6pQ7X0%2FPETy68iRUfwnxOEng8K0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPtQhnoPjK0ZrsMQ9SrcA8aQz9Zoc2Qu%2FQqKd0zu0Zvy9BpXEz%2FPK4JuaxVq87mxts%2BmwO2EKQOT4WQDWAD1%2B1GIsQdbcvNIb5%2FdqEgki3EKPqQh33lgRpN%2Bwkmc8BFjjrB820DtIwdsMmDWmkhvb2Tjq48Ho0MG%2BXcKDRcAliokhoU7q6bhMwbF4MAcpwqgCDxiZyzMroae7DIJr%2BXjGko5bK1Im1znCp%2BZT9TCuLT3d9%2B4HN2mCvPLKeOal7fTNdiiwfPRN2iGtb%2F0AWoq7pXT6wVG3ZJHWlWBedg4Ua6KeQk69fOIKF1DAahPdiajitmFkfLIf0C5vdNxOfzeXojTOfn9Hlj5PS3%2FmrC4QUUQMrJZ6SrACEkNpkjh%2FZYXfstOBKj5c6LG6SL%2BhKxvXmaYLBwPNbl5eBmzrAKIGmtpDBJO8B127snAfuLhOew5dTRb7e5cBWB1hGboVBqm9jQdkJkeRSRFpkway9W4MzWV2qO7%2Fi8kCpAdFK4SvuFFvHQ8LWKkEirfwR5S055Om8XImfo6G26X%2B%2Br%2BEHAwo2ng4TweIsi1xZk2rUrbZaf%2BMwBG4%2BCfAueGHnrgjLMoS8xo3NtcWJHrre52GKHwoF6tyo0zAuWXIDZKyEg1pYya140c%2BM0WYZim3yfiMIju%2B8QGOqUB2hXqMSl807bYVwwR3HRCDhJYjh78pxErcvDWDR9Wa77hTCIX8rCO2%2FQB0I50oQsL11ryRYlCOjFrHHiNI%2Fer5o3D8aX5RnCp4aUYNYTjpvD8W4b2StDyUO0ICNxZMtie5dGa4TW4Qn4By4I4qXgGf4XfmShXF4NvaYltf5pRY6dGCcpwlf8gezI2VjAa4n7AyumnWKDDNufWAlq0SA7xNcayFj1l&X-Amz-Signature=c5473954a7670476cb624b46c0d0bd2c216e6cfd3411a8f5016df95a93b0735b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HEPIME%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIDvxqX94xorKQxmfpyFmmwERObs2%2Bh3ETooK9D0CvHAnAiEA219bSFIfI9Eorv9e6pQ7X0%2FPETy68iRUfwnxOEng8K0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPtQhnoPjK0ZrsMQ9SrcA8aQz9Zoc2Qu%2FQqKd0zu0Zvy9BpXEz%2FPK4JuaxVq87mxts%2BmwO2EKQOT4WQDWAD1%2B1GIsQdbcvNIb5%2FdqEgki3EKPqQh33lgRpN%2Bwkmc8BFjjrB820DtIwdsMmDWmkhvb2Tjq48Ho0MG%2BXcKDRcAliokhoU7q6bhMwbF4MAcpwqgCDxiZyzMroae7DIJr%2BXjGko5bK1Im1znCp%2BZT9TCuLT3d9%2B4HN2mCvPLKeOal7fTNdiiwfPRN2iGtb%2F0AWoq7pXT6wVG3ZJHWlWBedg4Ua6KeQk69fOIKF1DAahPdiajitmFkfLIf0C5vdNxOfzeXojTOfn9Hlj5PS3%2FmrC4QUUQMrJZ6SrACEkNpkjh%2FZYXfstOBKj5c6LG6SL%2BhKxvXmaYLBwPNbl5eBmzrAKIGmtpDBJO8B127snAfuLhOew5dTRb7e5cBWB1hGboVBqm9jQdkJkeRSRFpkway9W4MzWV2qO7%2Fi8kCpAdFK4SvuFFvHQ8LWKkEirfwR5S055Om8XImfo6G26X%2B%2Br%2BEHAwo2ng4TweIsi1xZk2rUrbZaf%2BMwBG4%2BCfAueGHnrgjLMoS8xo3NtcWJHrre52GKHwoF6tyo0zAuWXIDZKyEg1pYya140c%2BM0WYZim3yfiMIju%2B8QGOqUB2hXqMSl807bYVwwR3HRCDhJYjh78pxErcvDWDR9Wa77hTCIX8rCO2%2FQB0I50oQsL11ryRYlCOjFrHHiNI%2Fer5o3D8aX5RnCp4aUYNYTjpvD8W4b2StDyUO0ICNxZMtie5dGa4TW4Qn4By4I4qXgGf4XfmShXF4NvaYltf5pRY6dGCcpwlf8gezI2VjAa4n7AyumnWKDDNufWAlq0SA7xNcayFj1l&X-Amz-Signature=2263e3d5277b9c9bc4b5e3b6caca99096685506f70de43d810c2e61fc4b4475e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HEPIME%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIDvxqX94xorKQxmfpyFmmwERObs2%2Bh3ETooK9D0CvHAnAiEA219bSFIfI9Eorv9e6pQ7X0%2FPETy68iRUfwnxOEng8K0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPtQhnoPjK0ZrsMQ9SrcA8aQz9Zoc2Qu%2FQqKd0zu0Zvy9BpXEz%2FPK4JuaxVq87mxts%2BmwO2EKQOT4WQDWAD1%2B1GIsQdbcvNIb5%2FdqEgki3EKPqQh33lgRpN%2Bwkmc8BFjjrB820DtIwdsMmDWmkhvb2Tjq48Ho0MG%2BXcKDRcAliokhoU7q6bhMwbF4MAcpwqgCDxiZyzMroae7DIJr%2BXjGko5bK1Im1znCp%2BZT9TCuLT3d9%2B4HN2mCvPLKeOal7fTNdiiwfPRN2iGtb%2F0AWoq7pXT6wVG3ZJHWlWBedg4Ua6KeQk69fOIKF1DAahPdiajitmFkfLIf0C5vdNxOfzeXojTOfn9Hlj5PS3%2FmrC4QUUQMrJZ6SrACEkNpkjh%2FZYXfstOBKj5c6LG6SL%2BhKxvXmaYLBwPNbl5eBmzrAKIGmtpDBJO8B127snAfuLhOew5dTRb7e5cBWB1hGboVBqm9jQdkJkeRSRFpkway9W4MzWV2qO7%2Fi8kCpAdFK4SvuFFvHQ8LWKkEirfwR5S055Om8XImfo6G26X%2B%2Br%2BEHAwo2ng4TweIsi1xZk2rUrbZaf%2BMwBG4%2BCfAueGHnrgjLMoS8xo3NtcWJHrre52GKHwoF6tyo0zAuWXIDZKyEg1pYya140c%2BM0WYZim3yfiMIju%2B8QGOqUB2hXqMSl807bYVwwR3HRCDhJYjh78pxErcvDWDR9Wa77hTCIX8rCO2%2FQB0I50oQsL11ryRYlCOjFrHHiNI%2Fer5o3D8aX5RnCp4aUYNYTjpvD8W4b2StDyUO0ICNxZMtie5dGa4TW4Qn4By4I4qXgGf4XfmShXF4NvaYltf5pRY6dGCcpwlf8gezI2VjAa4n7AyumnWKDDNufWAlq0SA7xNcayFj1l&X-Amz-Signature=eba0eca13122d7529c52da5ae06cbb7448a0f95965dbc75025a3ed28edefe6c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HEPIME%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIDvxqX94xorKQxmfpyFmmwERObs2%2Bh3ETooK9D0CvHAnAiEA219bSFIfI9Eorv9e6pQ7X0%2FPETy68iRUfwnxOEng8K0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDPtQhnoPjK0ZrsMQ9SrcA8aQz9Zoc2Qu%2FQqKd0zu0Zvy9BpXEz%2FPK4JuaxVq87mxts%2BmwO2EKQOT4WQDWAD1%2B1GIsQdbcvNIb5%2FdqEgki3EKPqQh33lgRpN%2Bwkmc8BFjjrB820DtIwdsMmDWmkhvb2Tjq48Ho0MG%2BXcKDRcAliokhoU7q6bhMwbF4MAcpwqgCDxiZyzMroae7DIJr%2BXjGko5bK1Im1znCp%2BZT9TCuLT3d9%2B4HN2mCvPLKeOal7fTNdiiwfPRN2iGtb%2F0AWoq7pXT6wVG3ZJHWlWBedg4Ua6KeQk69fOIKF1DAahPdiajitmFkfLIf0C5vdNxOfzeXojTOfn9Hlj5PS3%2FmrC4QUUQMrJZ6SrACEkNpkjh%2FZYXfstOBKj5c6LG6SL%2BhKxvXmaYLBwPNbl5eBmzrAKIGmtpDBJO8B127snAfuLhOew5dTRb7e5cBWB1hGboVBqm9jQdkJkeRSRFpkway9W4MzWV2qO7%2Fi8kCpAdFK4SvuFFvHQ8LWKkEirfwR5S055Om8XImfo6G26X%2B%2Br%2BEHAwo2ng4TweIsi1xZk2rUrbZaf%2BMwBG4%2BCfAueGHnrgjLMoS8xo3NtcWJHrre52GKHwoF6tyo0zAuWXIDZKyEg1pYya140c%2BM0WYZim3yfiMIju%2B8QGOqUB2hXqMSl807bYVwwR3HRCDhJYjh78pxErcvDWDR9Wa77hTCIX8rCO2%2FQB0I50oQsL11ryRYlCOjFrHHiNI%2Fer5o3D8aX5RnCp4aUYNYTjpvD8W4b2StDyUO0ICNxZMtie5dGa4TW4Qn4By4I4qXgGf4XfmShXF4NvaYltf5pRY6dGCcpwlf8gezI2VjAa4n7AyumnWKDDNufWAlq0SA7xNcayFj1l&X-Amz-Signature=d6e4b0ba81731fa95becc238cbea4e2500abe0998c19c2633e4211ac4695f829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
