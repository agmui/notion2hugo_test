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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GSZZXSX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5gxw2swHcLNSZqb%2FYFYG1c1xXkVFP6czXroFuMqbDZAIgJdNA2mTxAMSgdeERdnmndILMAoB6%2BOmnEBBkofw7qaAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAk%2BWrJ5lAwYX9qZ3SrcA7D4637WctSYInyWz02ZdRkieyJ19sVRAGXy5NnzJtqxpXSsxS%2FNk%2BPmwN2jC3qy%2FH8QhiEGb2yGtcNLSXZFWsMpN5h%2Fy8lOlKVsXUBO0EOag1c7stNoAmin9tISqVAXq%2FJyMsSgq03IPgIcPD0%2BTQx6pqEzLdHbk5ORQGkfaK%2F0OguHkfXm9b37HaYSdhSgGAvgO3nr%2BXgdkdmEbDnFfby%2FHnDLss9clVXpHAlTkosRJMjRxtcz5VaZraISnfG0jgsvT%2FHQGl0t6P76mGjECGdP5Xe4ElraJoMIhVESC1lDkuDZOCKTaUBJgxMoFbBj5V8iTNrb3mu9hkKMpHbs0oGbb24kGuRQoaZtngUuydAY%2FLmYWPRYuEGwvUfvLamfx2rUradvfHn86%2FmYqhLAmISqIGoCz8FaDsIHOX8Mdxi%2FIwRqO9zE6KALK%2F80aC5nd7KFGBMM3MlcEJx2LazJBgnOWI7F6w7ieeHh9Vxvm6WDrIf65wWByVYe%2F1ihptNNF9di9CeNCpv2QV2zqvohfr4k1f%2BUyQaDPEe0jafUN37air7peuady6uW284HxsFrWEKBIgxR4LU8Ekl31acbKpNwKg85bp7JPVAyBmPOZGg0d%2FsmUCFSO4ObzU2QMJqlqsQGOqUBMu8s8vnFrwF75jgPDfOGwPzgcGQuinZT9AXOY9f90pH%2BX10K%2Bo%2BR%2BRHS9Vin98J1Gjf%2BBiHrKaWM15Z2IMRX28o76n5VSr9vpu%2BQmst0leqQUNWfg%2FqF7czibcEiSbYnyyPre93VuAURFxQmRNte6ZG0npconlXHutgdEafBJyL0jfTnEk8UsN4eVA8LbBDuZOwMI96rsOIGw4ZkgqzVuMFFM85E&X-Amz-Signature=a41e851f02b20e206f59d386be4375371f17ebf988ee7a8f58cbdd0f4a4fa946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GSZZXSX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5gxw2swHcLNSZqb%2FYFYG1c1xXkVFP6czXroFuMqbDZAIgJdNA2mTxAMSgdeERdnmndILMAoB6%2BOmnEBBkofw7qaAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAk%2BWrJ5lAwYX9qZ3SrcA7D4637WctSYInyWz02ZdRkieyJ19sVRAGXy5NnzJtqxpXSsxS%2FNk%2BPmwN2jC3qy%2FH8QhiEGb2yGtcNLSXZFWsMpN5h%2Fy8lOlKVsXUBO0EOag1c7stNoAmin9tISqVAXq%2FJyMsSgq03IPgIcPD0%2BTQx6pqEzLdHbk5ORQGkfaK%2F0OguHkfXm9b37HaYSdhSgGAvgO3nr%2BXgdkdmEbDnFfby%2FHnDLss9clVXpHAlTkosRJMjRxtcz5VaZraISnfG0jgsvT%2FHQGl0t6P76mGjECGdP5Xe4ElraJoMIhVESC1lDkuDZOCKTaUBJgxMoFbBj5V8iTNrb3mu9hkKMpHbs0oGbb24kGuRQoaZtngUuydAY%2FLmYWPRYuEGwvUfvLamfx2rUradvfHn86%2FmYqhLAmISqIGoCz8FaDsIHOX8Mdxi%2FIwRqO9zE6KALK%2F80aC5nd7KFGBMM3MlcEJx2LazJBgnOWI7F6w7ieeHh9Vxvm6WDrIf65wWByVYe%2F1ihptNNF9di9CeNCpv2QV2zqvohfr4k1f%2BUyQaDPEe0jafUN37air7peuady6uW284HxsFrWEKBIgxR4LU8Ekl31acbKpNwKg85bp7JPVAyBmPOZGg0d%2FsmUCFSO4ObzU2QMJqlqsQGOqUBMu8s8vnFrwF75jgPDfOGwPzgcGQuinZT9AXOY9f90pH%2BX10K%2Bo%2BR%2BRHS9Vin98J1Gjf%2BBiHrKaWM15Z2IMRX28o76n5VSr9vpu%2BQmst0leqQUNWfg%2FqF7czibcEiSbYnyyPre93VuAURFxQmRNte6ZG0npconlXHutgdEafBJyL0jfTnEk8UsN4eVA8LbBDuZOwMI96rsOIGw4ZkgqzVuMFFM85E&X-Amz-Signature=e229ccf18f1811f34c4bda485b0dfcb584e15008e88f7b2b67491a6b737daa6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GSZZXSX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5gxw2swHcLNSZqb%2FYFYG1c1xXkVFP6czXroFuMqbDZAIgJdNA2mTxAMSgdeERdnmndILMAoB6%2BOmnEBBkofw7qaAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAk%2BWrJ5lAwYX9qZ3SrcA7D4637WctSYInyWz02ZdRkieyJ19sVRAGXy5NnzJtqxpXSsxS%2FNk%2BPmwN2jC3qy%2FH8QhiEGb2yGtcNLSXZFWsMpN5h%2Fy8lOlKVsXUBO0EOag1c7stNoAmin9tISqVAXq%2FJyMsSgq03IPgIcPD0%2BTQx6pqEzLdHbk5ORQGkfaK%2F0OguHkfXm9b37HaYSdhSgGAvgO3nr%2BXgdkdmEbDnFfby%2FHnDLss9clVXpHAlTkosRJMjRxtcz5VaZraISnfG0jgsvT%2FHQGl0t6P76mGjECGdP5Xe4ElraJoMIhVESC1lDkuDZOCKTaUBJgxMoFbBj5V8iTNrb3mu9hkKMpHbs0oGbb24kGuRQoaZtngUuydAY%2FLmYWPRYuEGwvUfvLamfx2rUradvfHn86%2FmYqhLAmISqIGoCz8FaDsIHOX8Mdxi%2FIwRqO9zE6KALK%2F80aC5nd7KFGBMM3MlcEJx2LazJBgnOWI7F6w7ieeHh9Vxvm6WDrIf65wWByVYe%2F1ihptNNF9di9CeNCpv2QV2zqvohfr4k1f%2BUyQaDPEe0jafUN37air7peuady6uW284HxsFrWEKBIgxR4LU8Ekl31acbKpNwKg85bp7JPVAyBmPOZGg0d%2FsmUCFSO4ObzU2QMJqlqsQGOqUBMu8s8vnFrwF75jgPDfOGwPzgcGQuinZT9AXOY9f90pH%2BX10K%2Bo%2BR%2BRHS9Vin98J1Gjf%2BBiHrKaWM15Z2IMRX28o76n5VSr9vpu%2BQmst0leqQUNWfg%2FqF7czibcEiSbYnyyPre93VuAURFxQmRNte6ZG0npconlXHutgdEafBJyL0jfTnEk8UsN4eVA8LbBDuZOwMI96rsOIGw4ZkgqzVuMFFM85E&X-Amz-Signature=03cd4f67598aa6464ad4af1e13056dc6fda02852efba01b8728f20af63b8a38f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GSZZXSX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5gxw2swHcLNSZqb%2FYFYG1c1xXkVFP6czXroFuMqbDZAIgJdNA2mTxAMSgdeERdnmndILMAoB6%2BOmnEBBkofw7qaAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAk%2BWrJ5lAwYX9qZ3SrcA7D4637WctSYInyWz02ZdRkieyJ19sVRAGXy5NnzJtqxpXSsxS%2FNk%2BPmwN2jC3qy%2FH8QhiEGb2yGtcNLSXZFWsMpN5h%2Fy8lOlKVsXUBO0EOag1c7stNoAmin9tISqVAXq%2FJyMsSgq03IPgIcPD0%2BTQx6pqEzLdHbk5ORQGkfaK%2F0OguHkfXm9b37HaYSdhSgGAvgO3nr%2BXgdkdmEbDnFfby%2FHnDLss9clVXpHAlTkosRJMjRxtcz5VaZraISnfG0jgsvT%2FHQGl0t6P76mGjECGdP5Xe4ElraJoMIhVESC1lDkuDZOCKTaUBJgxMoFbBj5V8iTNrb3mu9hkKMpHbs0oGbb24kGuRQoaZtngUuydAY%2FLmYWPRYuEGwvUfvLamfx2rUradvfHn86%2FmYqhLAmISqIGoCz8FaDsIHOX8Mdxi%2FIwRqO9zE6KALK%2F80aC5nd7KFGBMM3MlcEJx2LazJBgnOWI7F6w7ieeHh9Vxvm6WDrIf65wWByVYe%2F1ihptNNF9di9CeNCpv2QV2zqvohfr4k1f%2BUyQaDPEe0jafUN37air7peuady6uW284HxsFrWEKBIgxR4LU8Ekl31acbKpNwKg85bp7JPVAyBmPOZGg0d%2FsmUCFSO4ObzU2QMJqlqsQGOqUBMu8s8vnFrwF75jgPDfOGwPzgcGQuinZT9AXOY9f90pH%2BX10K%2Bo%2BR%2BRHS9Vin98J1Gjf%2BBiHrKaWM15Z2IMRX28o76n5VSr9vpu%2BQmst0leqQUNWfg%2FqF7czibcEiSbYnyyPre93VuAURFxQmRNte6ZG0npconlXHutgdEafBJyL0jfTnEk8UsN4eVA8LbBDuZOwMI96rsOIGw4ZkgqzVuMFFM85E&X-Amz-Signature=2fab72f354d9f0bb3328fd45add729c1a542da0ca58c627e0db54ceeb310fcc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GSZZXSX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5gxw2swHcLNSZqb%2FYFYG1c1xXkVFP6czXroFuMqbDZAIgJdNA2mTxAMSgdeERdnmndILMAoB6%2BOmnEBBkofw7qaAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAk%2BWrJ5lAwYX9qZ3SrcA7D4637WctSYInyWz02ZdRkieyJ19sVRAGXy5NnzJtqxpXSsxS%2FNk%2BPmwN2jC3qy%2FH8QhiEGb2yGtcNLSXZFWsMpN5h%2Fy8lOlKVsXUBO0EOag1c7stNoAmin9tISqVAXq%2FJyMsSgq03IPgIcPD0%2BTQx6pqEzLdHbk5ORQGkfaK%2F0OguHkfXm9b37HaYSdhSgGAvgO3nr%2BXgdkdmEbDnFfby%2FHnDLss9clVXpHAlTkosRJMjRxtcz5VaZraISnfG0jgsvT%2FHQGl0t6P76mGjECGdP5Xe4ElraJoMIhVESC1lDkuDZOCKTaUBJgxMoFbBj5V8iTNrb3mu9hkKMpHbs0oGbb24kGuRQoaZtngUuydAY%2FLmYWPRYuEGwvUfvLamfx2rUradvfHn86%2FmYqhLAmISqIGoCz8FaDsIHOX8Mdxi%2FIwRqO9zE6KALK%2F80aC5nd7KFGBMM3MlcEJx2LazJBgnOWI7F6w7ieeHh9Vxvm6WDrIf65wWByVYe%2F1ihptNNF9di9CeNCpv2QV2zqvohfr4k1f%2BUyQaDPEe0jafUN37air7peuady6uW284HxsFrWEKBIgxR4LU8Ekl31acbKpNwKg85bp7JPVAyBmPOZGg0d%2FsmUCFSO4ObzU2QMJqlqsQGOqUBMu8s8vnFrwF75jgPDfOGwPzgcGQuinZT9AXOY9f90pH%2BX10K%2Bo%2BR%2BRHS9Vin98J1Gjf%2BBiHrKaWM15Z2IMRX28o76n5VSr9vpu%2BQmst0leqQUNWfg%2FqF7czibcEiSbYnyyPre93VuAURFxQmRNte6ZG0npconlXHutgdEafBJyL0jfTnEk8UsN4eVA8LbBDuZOwMI96rsOIGw4ZkgqzVuMFFM85E&X-Amz-Signature=9189c17b6ff6f36cd8b1e4c25a56e404c075bb7a86a62e4a8d5cae01a886e644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GSZZXSX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5gxw2swHcLNSZqb%2FYFYG1c1xXkVFP6czXroFuMqbDZAIgJdNA2mTxAMSgdeERdnmndILMAoB6%2BOmnEBBkofw7qaAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAk%2BWrJ5lAwYX9qZ3SrcA7D4637WctSYInyWz02ZdRkieyJ19sVRAGXy5NnzJtqxpXSsxS%2FNk%2BPmwN2jC3qy%2FH8QhiEGb2yGtcNLSXZFWsMpN5h%2Fy8lOlKVsXUBO0EOag1c7stNoAmin9tISqVAXq%2FJyMsSgq03IPgIcPD0%2BTQx6pqEzLdHbk5ORQGkfaK%2F0OguHkfXm9b37HaYSdhSgGAvgO3nr%2BXgdkdmEbDnFfby%2FHnDLss9clVXpHAlTkosRJMjRxtcz5VaZraISnfG0jgsvT%2FHQGl0t6P76mGjECGdP5Xe4ElraJoMIhVESC1lDkuDZOCKTaUBJgxMoFbBj5V8iTNrb3mu9hkKMpHbs0oGbb24kGuRQoaZtngUuydAY%2FLmYWPRYuEGwvUfvLamfx2rUradvfHn86%2FmYqhLAmISqIGoCz8FaDsIHOX8Mdxi%2FIwRqO9zE6KALK%2F80aC5nd7KFGBMM3MlcEJx2LazJBgnOWI7F6w7ieeHh9Vxvm6WDrIf65wWByVYe%2F1ihptNNF9di9CeNCpv2QV2zqvohfr4k1f%2BUyQaDPEe0jafUN37air7peuady6uW284HxsFrWEKBIgxR4LU8Ekl31acbKpNwKg85bp7JPVAyBmPOZGg0d%2FsmUCFSO4ObzU2QMJqlqsQGOqUBMu8s8vnFrwF75jgPDfOGwPzgcGQuinZT9AXOY9f90pH%2BX10K%2Bo%2BR%2BRHS9Vin98J1Gjf%2BBiHrKaWM15Z2IMRX28o76n5VSr9vpu%2BQmst0leqQUNWfg%2FqF7czibcEiSbYnyyPre93VuAURFxQmRNte6ZG0npconlXHutgdEafBJyL0jfTnEk8UsN4eVA8LbBDuZOwMI96rsOIGw4ZkgqzVuMFFM85E&X-Amz-Signature=b8942564cdf7ca6322c1467732ba14ab70de3918b76c6c0f8dd50d6e22046651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GSZZXSX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5gxw2swHcLNSZqb%2FYFYG1c1xXkVFP6czXroFuMqbDZAIgJdNA2mTxAMSgdeERdnmndILMAoB6%2BOmnEBBkofw7qaAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAk%2BWrJ5lAwYX9qZ3SrcA7D4637WctSYInyWz02ZdRkieyJ19sVRAGXy5NnzJtqxpXSsxS%2FNk%2BPmwN2jC3qy%2FH8QhiEGb2yGtcNLSXZFWsMpN5h%2Fy8lOlKVsXUBO0EOag1c7stNoAmin9tISqVAXq%2FJyMsSgq03IPgIcPD0%2BTQx6pqEzLdHbk5ORQGkfaK%2F0OguHkfXm9b37HaYSdhSgGAvgO3nr%2BXgdkdmEbDnFfby%2FHnDLss9clVXpHAlTkosRJMjRxtcz5VaZraISnfG0jgsvT%2FHQGl0t6P76mGjECGdP5Xe4ElraJoMIhVESC1lDkuDZOCKTaUBJgxMoFbBj5V8iTNrb3mu9hkKMpHbs0oGbb24kGuRQoaZtngUuydAY%2FLmYWPRYuEGwvUfvLamfx2rUradvfHn86%2FmYqhLAmISqIGoCz8FaDsIHOX8Mdxi%2FIwRqO9zE6KALK%2F80aC5nd7KFGBMM3MlcEJx2LazJBgnOWI7F6w7ieeHh9Vxvm6WDrIf65wWByVYe%2F1ihptNNF9di9CeNCpv2QV2zqvohfr4k1f%2BUyQaDPEe0jafUN37air7peuady6uW284HxsFrWEKBIgxR4LU8Ekl31acbKpNwKg85bp7JPVAyBmPOZGg0d%2FsmUCFSO4ObzU2QMJqlqsQGOqUBMu8s8vnFrwF75jgPDfOGwPzgcGQuinZT9AXOY9f90pH%2BX10K%2Bo%2BR%2BRHS9Vin98J1Gjf%2BBiHrKaWM15Z2IMRX28o76n5VSr9vpu%2BQmst0leqQUNWfg%2FqF7czibcEiSbYnyyPre93VuAURFxQmRNte6ZG0npconlXHutgdEafBJyL0jfTnEk8UsN4eVA8LbBDuZOwMI96rsOIGw4ZkgqzVuMFFM85E&X-Amz-Signature=46966d453f26db8d5b9bc6c906b1eed7c1ee523807b9fc1f20ce8e50d7c47e55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GSZZXSX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5gxw2swHcLNSZqb%2FYFYG1c1xXkVFP6czXroFuMqbDZAIgJdNA2mTxAMSgdeERdnmndILMAoB6%2BOmnEBBkofw7qaAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAk%2BWrJ5lAwYX9qZ3SrcA7D4637WctSYInyWz02ZdRkieyJ19sVRAGXy5NnzJtqxpXSsxS%2FNk%2BPmwN2jC3qy%2FH8QhiEGb2yGtcNLSXZFWsMpN5h%2Fy8lOlKVsXUBO0EOag1c7stNoAmin9tISqVAXq%2FJyMsSgq03IPgIcPD0%2BTQx6pqEzLdHbk5ORQGkfaK%2F0OguHkfXm9b37HaYSdhSgGAvgO3nr%2BXgdkdmEbDnFfby%2FHnDLss9clVXpHAlTkosRJMjRxtcz5VaZraISnfG0jgsvT%2FHQGl0t6P76mGjECGdP5Xe4ElraJoMIhVESC1lDkuDZOCKTaUBJgxMoFbBj5V8iTNrb3mu9hkKMpHbs0oGbb24kGuRQoaZtngUuydAY%2FLmYWPRYuEGwvUfvLamfx2rUradvfHn86%2FmYqhLAmISqIGoCz8FaDsIHOX8Mdxi%2FIwRqO9zE6KALK%2F80aC5nd7KFGBMM3MlcEJx2LazJBgnOWI7F6w7ieeHh9Vxvm6WDrIf65wWByVYe%2F1ihptNNF9di9CeNCpv2QV2zqvohfr4k1f%2BUyQaDPEe0jafUN37air7peuady6uW284HxsFrWEKBIgxR4LU8Ekl31acbKpNwKg85bp7JPVAyBmPOZGg0d%2FsmUCFSO4ObzU2QMJqlqsQGOqUBMu8s8vnFrwF75jgPDfOGwPzgcGQuinZT9AXOY9f90pH%2BX10K%2Bo%2BR%2BRHS9Vin98J1Gjf%2BBiHrKaWM15Z2IMRX28o76n5VSr9vpu%2BQmst0leqQUNWfg%2FqF7czibcEiSbYnyyPre93VuAURFxQmRNte6ZG0npconlXHutgdEafBJyL0jfTnEk8UsN4eVA8LbBDuZOwMI96rsOIGw4ZkgqzVuMFFM85E&X-Amz-Signature=6e9dc767a8ff94b4685d8fc7f2209e3ef4ba33b04b62920c9aa427a1d5171bd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GSZZXSX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5gxw2swHcLNSZqb%2FYFYG1c1xXkVFP6czXroFuMqbDZAIgJdNA2mTxAMSgdeERdnmndILMAoB6%2BOmnEBBkofw7qaAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAk%2BWrJ5lAwYX9qZ3SrcA7D4637WctSYInyWz02ZdRkieyJ19sVRAGXy5NnzJtqxpXSsxS%2FNk%2BPmwN2jC3qy%2FH8QhiEGb2yGtcNLSXZFWsMpN5h%2Fy8lOlKVsXUBO0EOag1c7stNoAmin9tISqVAXq%2FJyMsSgq03IPgIcPD0%2BTQx6pqEzLdHbk5ORQGkfaK%2F0OguHkfXm9b37HaYSdhSgGAvgO3nr%2BXgdkdmEbDnFfby%2FHnDLss9clVXpHAlTkosRJMjRxtcz5VaZraISnfG0jgsvT%2FHQGl0t6P76mGjECGdP5Xe4ElraJoMIhVESC1lDkuDZOCKTaUBJgxMoFbBj5V8iTNrb3mu9hkKMpHbs0oGbb24kGuRQoaZtngUuydAY%2FLmYWPRYuEGwvUfvLamfx2rUradvfHn86%2FmYqhLAmISqIGoCz8FaDsIHOX8Mdxi%2FIwRqO9zE6KALK%2F80aC5nd7KFGBMM3MlcEJx2LazJBgnOWI7F6w7ieeHh9Vxvm6WDrIf65wWByVYe%2F1ihptNNF9di9CeNCpv2QV2zqvohfr4k1f%2BUyQaDPEe0jafUN37air7peuady6uW284HxsFrWEKBIgxR4LU8Ekl31acbKpNwKg85bp7JPVAyBmPOZGg0d%2FsmUCFSO4ObzU2QMJqlqsQGOqUBMu8s8vnFrwF75jgPDfOGwPzgcGQuinZT9AXOY9f90pH%2BX10K%2Bo%2BR%2BRHS9Vin98J1Gjf%2BBiHrKaWM15Z2IMRX28o76n5VSr9vpu%2BQmst0leqQUNWfg%2FqF7czibcEiSbYnyyPre93VuAURFxQmRNte6ZG0npconlXHutgdEafBJyL0jfTnEk8UsN4eVA8LbBDuZOwMI96rsOIGw4ZkgqzVuMFFM85E&X-Amz-Signature=c88b3ec50972c31f7c4ea09e86895e1abcf04bd1eb30e294c1a475756e69af3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GSZZXSX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5gxw2swHcLNSZqb%2FYFYG1c1xXkVFP6czXroFuMqbDZAIgJdNA2mTxAMSgdeERdnmndILMAoB6%2BOmnEBBkofw7qaAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAk%2BWrJ5lAwYX9qZ3SrcA7D4637WctSYInyWz02ZdRkieyJ19sVRAGXy5NnzJtqxpXSsxS%2FNk%2BPmwN2jC3qy%2FH8QhiEGb2yGtcNLSXZFWsMpN5h%2Fy8lOlKVsXUBO0EOag1c7stNoAmin9tISqVAXq%2FJyMsSgq03IPgIcPD0%2BTQx6pqEzLdHbk5ORQGkfaK%2F0OguHkfXm9b37HaYSdhSgGAvgO3nr%2BXgdkdmEbDnFfby%2FHnDLss9clVXpHAlTkosRJMjRxtcz5VaZraISnfG0jgsvT%2FHQGl0t6P76mGjECGdP5Xe4ElraJoMIhVESC1lDkuDZOCKTaUBJgxMoFbBj5V8iTNrb3mu9hkKMpHbs0oGbb24kGuRQoaZtngUuydAY%2FLmYWPRYuEGwvUfvLamfx2rUradvfHn86%2FmYqhLAmISqIGoCz8FaDsIHOX8Mdxi%2FIwRqO9zE6KALK%2F80aC5nd7KFGBMM3MlcEJx2LazJBgnOWI7F6w7ieeHh9Vxvm6WDrIf65wWByVYe%2F1ihptNNF9di9CeNCpv2QV2zqvohfr4k1f%2BUyQaDPEe0jafUN37air7peuady6uW284HxsFrWEKBIgxR4LU8Ekl31acbKpNwKg85bp7JPVAyBmPOZGg0d%2FsmUCFSO4ObzU2QMJqlqsQGOqUBMu8s8vnFrwF75jgPDfOGwPzgcGQuinZT9AXOY9f90pH%2BX10K%2Bo%2BR%2BRHS9Vin98J1Gjf%2BBiHrKaWM15Z2IMRX28o76n5VSr9vpu%2BQmst0leqQUNWfg%2FqF7czibcEiSbYnyyPre93VuAURFxQmRNte6ZG0npconlXHutgdEafBJyL0jfTnEk8UsN4eVA8LbBDuZOwMI96rsOIGw4ZkgqzVuMFFM85E&X-Amz-Signature=ac7e0cf53ebc968376846fcca1f24e5ceb24b48bdc35fdcb09b568c0a0699584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GSZZXSX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5gxw2swHcLNSZqb%2FYFYG1c1xXkVFP6czXroFuMqbDZAIgJdNA2mTxAMSgdeERdnmndILMAoB6%2BOmnEBBkofw7qaAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAk%2BWrJ5lAwYX9qZ3SrcA7D4637WctSYInyWz02ZdRkieyJ19sVRAGXy5NnzJtqxpXSsxS%2FNk%2BPmwN2jC3qy%2FH8QhiEGb2yGtcNLSXZFWsMpN5h%2Fy8lOlKVsXUBO0EOag1c7stNoAmin9tISqVAXq%2FJyMsSgq03IPgIcPD0%2BTQx6pqEzLdHbk5ORQGkfaK%2F0OguHkfXm9b37HaYSdhSgGAvgO3nr%2BXgdkdmEbDnFfby%2FHnDLss9clVXpHAlTkosRJMjRxtcz5VaZraISnfG0jgsvT%2FHQGl0t6P76mGjECGdP5Xe4ElraJoMIhVESC1lDkuDZOCKTaUBJgxMoFbBj5V8iTNrb3mu9hkKMpHbs0oGbb24kGuRQoaZtngUuydAY%2FLmYWPRYuEGwvUfvLamfx2rUradvfHn86%2FmYqhLAmISqIGoCz8FaDsIHOX8Mdxi%2FIwRqO9zE6KALK%2F80aC5nd7KFGBMM3MlcEJx2LazJBgnOWI7F6w7ieeHh9Vxvm6WDrIf65wWByVYe%2F1ihptNNF9di9CeNCpv2QV2zqvohfr4k1f%2BUyQaDPEe0jafUN37air7peuady6uW284HxsFrWEKBIgxR4LU8Ekl31acbKpNwKg85bp7JPVAyBmPOZGg0d%2FsmUCFSO4ObzU2QMJqlqsQGOqUBMu8s8vnFrwF75jgPDfOGwPzgcGQuinZT9AXOY9f90pH%2BX10K%2Bo%2BR%2BRHS9Vin98J1Gjf%2BBiHrKaWM15Z2IMRX28o76n5VSr9vpu%2BQmst0leqQUNWfg%2FqF7czibcEiSbYnyyPre93VuAURFxQmRNte6ZG0npconlXHutgdEafBJyL0jfTnEk8UsN4eVA8LbBDuZOwMI96rsOIGw4ZkgqzVuMFFM85E&X-Amz-Signature=379057807acd78920388e28b3cba892aa422dce787b1d774aaaf4335fc06a956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GSZZXSX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5gxw2swHcLNSZqb%2FYFYG1c1xXkVFP6czXroFuMqbDZAIgJdNA2mTxAMSgdeERdnmndILMAoB6%2BOmnEBBkofw7qaAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAk%2BWrJ5lAwYX9qZ3SrcA7D4637WctSYInyWz02ZdRkieyJ19sVRAGXy5NnzJtqxpXSsxS%2FNk%2BPmwN2jC3qy%2FH8QhiEGb2yGtcNLSXZFWsMpN5h%2Fy8lOlKVsXUBO0EOag1c7stNoAmin9tISqVAXq%2FJyMsSgq03IPgIcPD0%2BTQx6pqEzLdHbk5ORQGkfaK%2F0OguHkfXm9b37HaYSdhSgGAvgO3nr%2BXgdkdmEbDnFfby%2FHnDLss9clVXpHAlTkosRJMjRxtcz5VaZraISnfG0jgsvT%2FHQGl0t6P76mGjECGdP5Xe4ElraJoMIhVESC1lDkuDZOCKTaUBJgxMoFbBj5V8iTNrb3mu9hkKMpHbs0oGbb24kGuRQoaZtngUuydAY%2FLmYWPRYuEGwvUfvLamfx2rUradvfHn86%2FmYqhLAmISqIGoCz8FaDsIHOX8Mdxi%2FIwRqO9zE6KALK%2F80aC5nd7KFGBMM3MlcEJx2LazJBgnOWI7F6w7ieeHh9Vxvm6WDrIf65wWByVYe%2F1ihptNNF9di9CeNCpv2QV2zqvohfr4k1f%2BUyQaDPEe0jafUN37air7peuady6uW284HxsFrWEKBIgxR4LU8Ekl31acbKpNwKg85bp7JPVAyBmPOZGg0d%2FsmUCFSO4ObzU2QMJqlqsQGOqUBMu8s8vnFrwF75jgPDfOGwPzgcGQuinZT9AXOY9f90pH%2BX10K%2Bo%2BR%2BRHS9Vin98J1Gjf%2BBiHrKaWM15Z2IMRX28o76n5VSr9vpu%2BQmst0leqQUNWfg%2FqF7czibcEiSbYnyyPre93VuAURFxQmRNte6ZG0npconlXHutgdEafBJyL0jfTnEk8UsN4eVA8LbBDuZOwMI96rsOIGw4ZkgqzVuMFFM85E&X-Amz-Signature=8e41e8649734de2b97b58f7c8ea30a4a0200f0d41a72f7d1c4bcb0adb7ced288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GSZZXSX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5gxw2swHcLNSZqb%2FYFYG1c1xXkVFP6czXroFuMqbDZAIgJdNA2mTxAMSgdeERdnmndILMAoB6%2BOmnEBBkofw7qaAqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAk%2BWrJ5lAwYX9qZ3SrcA7D4637WctSYInyWz02ZdRkieyJ19sVRAGXy5NnzJtqxpXSsxS%2FNk%2BPmwN2jC3qy%2FH8QhiEGb2yGtcNLSXZFWsMpN5h%2Fy8lOlKVsXUBO0EOag1c7stNoAmin9tISqVAXq%2FJyMsSgq03IPgIcPD0%2BTQx6pqEzLdHbk5ORQGkfaK%2F0OguHkfXm9b37HaYSdhSgGAvgO3nr%2BXgdkdmEbDnFfby%2FHnDLss9clVXpHAlTkosRJMjRxtcz5VaZraISnfG0jgsvT%2FHQGl0t6P76mGjECGdP5Xe4ElraJoMIhVESC1lDkuDZOCKTaUBJgxMoFbBj5V8iTNrb3mu9hkKMpHbs0oGbb24kGuRQoaZtngUuydAY%2FLmYWPRYuEGwvUfvLamfx2rUradvfHn86%2FmYqhLAmISqIGoCz8FaDsIHOX8Mdxi%2FIwRqO9zE6KALK%2F80aC5nd7KFGBMM3MlcEJx2LazJBgnOWI7F6w7ieeHh9Vxvm6WDrIf65wWByVYe%2F1ihptNNF9di9CeNCpv2QV2zqvohfr4k1f%2BUyQaDPEe0jafUN37air7peuady6uW284HxsFrWEKBIgxR4LU8Ekl31acbKpNwKg85bp7JPVAyBmPOZGg0d%2FsmUCFSO4ObzU2QMJqlqsQGOqUBMu8s8vnFrwF75jgPDfOGwPzgcGQuinZT9AXOY9f90pH%2BX10K%2Bo%2BR%2BRHS9Vin98J1Gjf%2BBiHrKaWM15Z2IMRX28o76n5VSr9vpu%2BQmst0leqQUNWfg%2FqF7czibcEiSbYnyyPre93VuAURFxQmRNte6ZG0npconlXHutgdEafBJyL0jfTnEk8UsN4eVA8LbBDuZOwMI96rsOIGw4ZkgqzVuMFFM85E&X-Amz-Signature=c93539e6b657be5a614ca3d19bb17268a374b4aab81c62315535009d18147708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUNJK6MG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6gTsiht1TBBoGBJqDIoVS4QV1cfliTM7zi%2FfN%2B%2FMyQwIhAJljfk9IqYcMSCwXyrLf3G891wQemSFVFCpj%2FDaAY2aCKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9yhRhYIKSM6aBwksq3APY%2Bt2w0cKtkrHCLQe5smelWYroH1wwx8RL%2Fut%2ByxUgN%2FkytAy27yQ4WjlhYEVdwdUiKbSGDE3Qu5uQIdUTvAmlRoV1u4x4lZ9VJVGuajQHAvHtpVPXY69i1B3nSKKFTeztuv03ppw3ygfiCMgn2HkfPFfrgNVmJSCmuvxSgLlX0dVb3acH52PA5wScHwUMYgYtBzzFldoFSMOZitxBbQfME3aQ%2FxYszGGDIWzJ0E6tb6x1GrAVRzyqmYe3tn4MVlTekSMx3Br1TSqDVICGcTUeMop5VX3JuhU0O25cqL12LGvhzN%2BAWnmWJn92YQ%2Bx2vk8PexQpDEmvcLj6QR8G02K1oA6538Ka9Sh%2BBoSXUo8Fn%2FbzoJ%2Fo66zvQCy0lQwg4SnWHK78jYKoHXubJOmiF%2BkAMO4B0uTO3f5dkA1IueEaj21Bqn2YOOpyz%2F6MPW3xw5lTo8EoLBMP6Z4aKkxkTEwtZbFF7kEGcV%2FLB4b8FCIaRaAVzfzQegHOsJH6PkM%2Bf8frs5sRJlA2WSyc%2BDpN%2BQU%2FZtTsKputay3zSS%2BbVwxsgEmvLIDDljQfQrMNRf8FxRhi8zEISTmfT0crAA%2Bb9aysqK3RWTwh%2FC3Y7DzP7ObOeXOiG9RNaMZ%2Byv73zCAo6rEBjqkAZb37BpbLn%2B8jKfHBUozdcLiRe3pmNWvzT7gywIX7f6Tqu9NS8AyYGPEGdWhclrbXHkm9HdoYmVllzVpbwBknYmU3Y5ub4H5qrVtF726Zz4A6Ocv8Q4CnBYbmMssl3mVSrUJ%2FNtKPPbGh%2FKmb4rTMK5ApXfGLtZASsd3sSlxG%2B9VRXC0nC4G%2FzhhNGMxBVau2Gr1HGZyPfUkhkRn8vgfJeFUO0Ik&X-Amz-Signature=da0eee6ce0a1a3196c4025cb1074f167192c09a8ee416818b4ab4fa115a02c2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUNJK6MG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6gTsiht1TBBoGBJqDIoVS4QV1cfliTM7zi%2FfN%2B%2FMyQwIhAJljfk9IqYcMSCwXyrLf3G891wQemSFVFCpj%2FDaAY2aCKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9yhRhYIKSM6aBwksq3APY%2Bt2w0cKtkrHCLQe5smelWYroH1wwx8RL%2Fut%2ByxUgN%2FkytAy27yQ4WjlhYEVdwdUiKbSGDE3Qu5uQIdUTvAmlRoV1u4x4lZ9VJVGuajQHAvHtpVPXY69i1B3nSKKFTeztuv03ppw3ygfiCMgn2HkfPFfrgNVmJSCmuvxSgLlX0dVb3acH52PA5wScHwUMYgYtBzzFldoFSMOZitxBbQfME3aQ%2FxYszGGDIWzJ0E6tb6x1GrAVRzyqmYe3tn4MVlTekSMx3Br1TSqDVICGcTUeMop5VX3JuhU0O25cqL12LGvhzN%2BAWnmWJn92YQ%2Bx2vk8PexQpDEmvcLj6QR8G02K1oA6538Ka9Sh%2BBoSXUo8Fn%2FbzoJ%2Fo66zvQCy0lQwg4SnWHK78jYKoHXubJOmiF%2BkAMO4B0uTO3f5dkA1IueEaj21Bqn2YOOpyz%2F6MPW3xw5lTo8EoLBMP6Z4aKkxkTEwtZbFF7kEGcV%2FLB4b8FCIaRaAVzfzQegHOsJH6PkM%2Bf8frs5sRJlA2WSyc%2BDpN%2BQU%2FZtTsKputay3zSS%2BbVwxsgEmvLIDDljQfQrMNRf8FxRhi8zEISTmfT0crAA%2Bb9aysqK3RWTwh%2FC3Y7DzP7ObOeXOiG9RNaMZ%2Byv73zCAo6rEBjqkAZb37BpbLn%2B8jKfHBUozdcLiRe3pmNWvzT7gywIX7f6Tqu9NS8AyYGPEGdWhclrbXHkm9HdoYmVllzVpbwBknYmU3Y5ub4H5qrVtF726Zz4A6Ocv8Q4CnBYbmMssl3mVSrUJ%2FNtKPPbGh%2FKmb4rTMK5ApXfGLtZASsd3sSlxG%2B9VRXC0nC4G%2FzhhNGMxBVau2Gr1HGZyPfUkhkRn8vgfJeFUO0Ik&X-Amz-Signature=6656d6cb0794257c5ad119c27e8920cb88ff77121d0d2f2f2e719a7757718966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUNJK6MG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6gTsiht1TBBoGBJqDIoVS4QV1cfliTM7zi%2FfN%2B%2FMyQwIhAJljfk9IqYcMSCwXyrLf3G891wQemSFVFCpj%2FDaAY2aCKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9yhRhYIKSM6aBwksq3APY%2Bt2w0cKtkrHCLQe5smelWYroH1wwx8RL%2Fut%2ByxUgN%2FkytAy27yQ4WjlhYEVdwdUiKbSGDE3Qu5uQIdUTvAmlRoV1u4x4lZ9VJVGuajQHAvHtpVPXY69i1B3nSKKFTeztuv03ppw3ygfiCMgn2HkfPFfrgNVmJSCmuvxSgLlX0dVb3acH52PA5wScHwUMYgYtBzzFldoFSMOZitxBbQfME3aQ%2FxYszGGDIWzJ0E6tb6x1GrAVRzyqmYe3tn4MVlTekSMx3Br1TSqDVICGcTUeMop5VX3JuhU0O25cqL12LGvhzN%2BAWnmWJn92YQ%2Bx2vk8PexQpDEmvcLj6QR8G02K1oA6538Ka9Sh%2BBoSXUo8Fn%2FbzoJ%2Fo66zvQCy0lQwg4SnWHK78jYKoHXubJOmiF%2BkAMO4B0uTO3f5dkA1IueEaj21Bqn2YOOpyz%2F6MPW3xw5lTo8EoLBMP6Z4aKkxkTEwtZbFF7kEGcV%2FLB4b8FCIaRaAVzfzQegHOsJH6PkM%2Bf8frs5sRJlA2WSyc%2BDpN%2BQU%2FZtTsKputay3zSS%2BbVwxsgEmvLIDDljQfQrMNRf8FxRhi8zEISTmfT0crAA%2Bb9aysqK3RWTwh%2FC3Y7DzP7ObOeXOiG9RNaMZ%2Byv73zCAo6rEBjqkAZb37BpbLn%2B8jKfHBUozdcLiRe3pmNWvzT7gywIX7f6Tqu9NS8AyYGPEGdWhclrbXHkm9HdoYmVllzVpbwBknYmU3Y5ub4H5qrVtF726Zz4A6Ocv8Q4CnBYbmMssl3mVSrUJ%2FNtKPPbGh%2FKmb4rTMK5ApXfGLtZASsd3sSlxG%2B9VRXC0nC4G%2FzhhNGMxBVau2Gr1HGZyPfUkhkRn8vgfJeFUO0Ik&X-Amz-Signature=9015a32f85565d1487bdbd436e6eb8917aef0a239ffeb0669f16455e14c838ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUNJK6MG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6gTsiht1TBBoGBJqDIoVS4QV1cfliTM7zi%2FfN%2B%2FMyQwIhAJljfk9IqYcMSCwXyrLf3G891wQemSFVFCpj%2FDaAY2aCKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9yhRhYIKSM6aBwksq3APY%2Bt2w0cKtkrHCLQe5smelWYroH1wwx8RL%2Fut%2ByxUgN%2FkytAy27yQ4WjlhYEVdwdUiKbSGDE3Qu5uQIdUTvAmlRoV1u4x4lZ9VJVGuajQHAvHtpVPXY69i1B3nSKKFTeztuv03ppw3ygfiCMgn2HkfPFfrgNVmJSCmuvxSgLlX0dVb3acH52PA5wScHwUMYgYtBzzFldoFSMOZitxBbQfME3aQ%2FxYszGGDIWzJ0E6tb6x1GrAVRzyqmYe3tn4MVlTekSMx3Br1TSqDVICGcTUeMop5VX3JuhU0O25cqL12LGvhzN%2BAWnmWJn92YQ%2Bx2vk8PexQpDEmvcLj6QR8G02K1oA6538Ka9Sh%2BBoSXUo8Fn%2FbzoJ%2Fo66zvQCy0lQwg4SnWHK78jYKoHXubJOmiF%2BkAMO4B0uTO3f5dkA1IueEaj21Bqn2YOOpyz%2F6MPW3xw5lTo8EoLBMP6Z4aKkxkTEwtZbFF7kEGcV%2FLB4b8FCIaRaAVzfzQegHOsJH6PkM%2Bf8frs5sRJlA2WSyc%2BDpN%2BQU%2FZtTsKputay3zSS%2BbVwxsgEmvLIDDljQfQrMNRf8FxRhi8zEISTmfT0crAA%2Bb9aysqK3RWTwh%2FC3Y7DzP7ObOeXOiG9RNaMZ%2Byv73zCAo6rEBjqkAZb37BpbLn%2B8jKfHBUozdcLiRe3pmNWvzT7gywIX7f6Tqu9NS8AyYGPEGdWhclrbXHkm9HdoYmVllzVpbwBknYmU3Y5ub4H5qrVtF726Zz4A6Ocv8Q4CnBYbmMssl3mVSrUJ%2FNtKPPbGh%2FKmb4rTMK5ApXfGLtZASsd3sSlxG%2B9VRXC0nC4G%2FzhhNGMxBVau2Gr1HGZyPfUkhkRn8vgfJeFUO0Ik&X-Amz-Signature=d2eae0cc355b3a792fafce6300f3dcb68335dec5dfe6779c09f17384a12aca30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUNJK6MG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6gTsiht1TBBoGBJqDIoVS4QV1cfliTM7zi%2FfN%2B%2FMyQwIhAJljfk9IqYcMSCwXyrLf3G891wQemSFVFCpj%2FDaAY2aCKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9yhRhYIKSM6aBwksq3APY%2Bt2w0cKtkrHCLQe5smelWYroH1wwx8RL%2Fut%2ByxUgN%2FkytAy27yQ4WjlhYEVdwdUiKbSGDE3Qu5uQIdUTvAmlRoV1u4x4lZ9VJVGuajQHAvHtpVPXY69i1B3nSKKFTeztuv03ppw3ygfiCMgn2HkfPFfrgNVmJSCmuvxSgLlX0dVb3acH52PA5wScHwUMYgYtBzzFldoFSMOZitxBbQfME3aQ%2FxYszGGDIWzJ0E6tb6x1GrAVRzyqmYe3tn4MVlTekSMx3Br1TSqDVICGcTUeMop5VX3JuhU0O25cqL12LGvhzN%2BAWnmWJn92YQ%2Bx2vk8PexQpDEmvcLj6QR8G02K1oA6538Ka9Sh%2BBoSXUo8Fn%2FbzoJ%2Fo66zvQCy0lQwg4SnWHK78jYKoHXubJOmiF%2BkAMO4B0uTO3f5dkA1IueEaj21Bqn2YOOpyz%2F6MPW3xw5lTo8EoLBMP6Z4aKkxkTEwtZbFF7kEGcV%2FLB4b8FCIaRaAVzfzQegHOsJH6PkM%2Bf8frs5sRJlA2WSyc%2BDpN%2BQU%2FZtTsKputay3zSS%2BbVwxsgEmvLIDDljQfQrMNRf8FxRhi8zEISTmfT0crAA%2Bb9aysqK3RWTwh%2FC3Y7DzP7ObOeXOiG9RNaMZ%2Byv73zCAo6rEBjqkAZb37BpbLn%2B8jKfHBUozdcLiRe3pmNWvzT7gywIX7f6Tqu9NS8AyYGPEGdWhclrbXHkm9HdoYmVllzVpbwBknYmU3Y5ub4H5qrVtF726Zz4A6Ocv8Q4CnBYbmMssl3mVSrUJ%2FNtKPPbGh%2FKmb4rTMK5ApXfGLtZASsd3sSlxG%2B9VRXC0nC4G%2FzhhNGMxBVau2Gr1HGZyPfUkhkRn8vgfJeFUO0Ik&X-Amz-Signature=307486e713d0684c98463d0396b05622274512532e1c43757ed823df5eed9f58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUNJK6MG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6gTsiht1TBBoGBJqDIoVS4QV1cfliTM7zi%2FfN%2B%2FMyQwIhAJljfk9IqYcMSCwXyrLf3G891wQemSFVFCpj%2FDaAY2aCKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9yhRhYIKSM6aBwksq3APY%2Bt2w0cKtkrHCLQe5smelWYroH1wwx8RL%2Fut%2ByxUgN%2FkytAy27yQ4WjlhYEVdwdUiKbSGDE3Qu5uQIdUTvAmlRoV1u4x4lZ9VJVGuajQHAvHtpVPXY69i1B3nSKKFTeztuv03ppw3ygfiCMgn2HkfPFfrgNVmJSCmuvxSgLlX0dVb3acH52PA5wScHwUMYgYtBzzFldoFSMOZitxBbQfME3aQ%2FxYszGGDIWzJ0E6tb6x1GrAVRzyqmYe3tn4MVlTekSMx3Br1TSqDVICGcTUeMop5VX3JuhU0O25cqL12LGvhzN%2BAWnmWJn92YQ%2Bx2vk8PexQpDEmvcLj6QR8G02K1oA6538Ka9Sh%2BBoSXUo8Fn%2FbzoJ%2Fo66zvQCy0lQwg4SnWHK78jYKoHXubJOmiF%2BkAMO4B0uTO3f5dkA1IueEaj21Bqn2YOOpyz%2F6MPW3xw5lTo8EoLBMP6Z4aKkxkTEwtZbFF7kEGcV%2FLB4b8FCIaRaAVzfzQegHOsJH6PkM%2Bf8frs5sRJlA2WSyc%2BDpN%2BQU%2FZtTsKputay3zSS%2BbVwxsgEmvLIDDljQfQrMNRf8FxRhi8zEISTmfT0crAA%2Bb9aysqK3RWTwh%2FC3Y7DzP7ObOeXOiG9RNaMZ%2Byv73zCAo6rEBjqkAZb37BpbLn%2B8jKfHBUozdcLiRe3pmNWvzT7gywIX7f6Tqu9NS8AyYGPEGdWhclrbXHkm9HdoYmVllzVpbwBknYmU3Y5ub4H5qrVtF726Zz4A6Ocv8Q4CnBYbmMssl3mVSrUJ%2FNtKPPbGh%2FKmb4rTMK5ApXfGLtZASsd3sSlxG%2B9VRXC0nC4G%2FzhhNGMxBVau2Gr1HGZyPfUkhkRn8vgfJeFUO0Ik&X-Amz-Signature=8208fcb0c3ea8d7249edc9fe1562c2235d6a4382388df7db5db2c3abc8619e5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUNJK6MG%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6gTsiht1TBBoGBJqDIoVS4QV1cfliTM7zi%2FfN%2B%2FMyQwIhAJljfk9IqYcMSCwXyrLf3G891wQemSFVFCpj%2FDaAY2aCKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9yhRhYIKSM6aBwksq3APY%2Bt2w0cKtkrHCLQe5smelWYroH1wwx8RL%2Fut%2ByxUgN%2FkytAy27yQ4WjlhYEVdwdUiKbSGDE3Qu5uQIdUTvAmlRoV1u4x4lZ9VJVGuajQHAvHtpVPXY69i1B3nSKKFTeztuv03ppw3ygfiCMgn2HkfPFfrgNVmJSCmuvxSgLlX0dVb3acH52PA5wScHwUMYgYtBzzFldoFSMOZitxBbQfME3aQ%2FxYszGGDIWzJ0E6tb6x1GrAVRzyqmYe3tn4MVlTekSMx3Br1TSqDVICGcTUeMop5VX3JuhU0O25cqL12LGvhzN%2BAWnmWJn92YQ%2Bx2vk8PexQpDEmvcLj6QR8G02K1oA6538Ka9Sh%2BBoSXUo8Fn%2FbzoJ%2Fo66zvQCy0lQwg4SnWHK78jYKoHXubJOmiF%2BkAMO4B0uTO3f5dkA1IueEaj21Bqn2YOOpyz%2F6MPW3xw5lTo8EoLBMP6Z4aKkxkTEwtZbFF7kEGcV%2FLB4b8FCIaRaAVzfzQegHOsJH6PkM%2Bf8frs5sRJlA2WSyc%2BDpN%2BQU%2FZtTsKputay3zSS%2BbVwxsgEmvLIDDljQfQrMNRf8FxRhi8zEISTmfT0crAA%2Bb9aysqK3RWTwh%2FC3Y7DzP7ObOeXOiG9RNaMZ%2Byv73zCAo6rEBjqkAZb37BpbLn%2B8jKfHBUozdcLiRe3pmNWvzT7gywIX7f6Tqu9NS8AyYGPEGdWhclrbXHkm9HdoYmVllzVpbwBknYmU3Y5ub4H5qrVtF726Zz4A6Ocv8Q4CnBYbmMssl3mVSrUJ%2FNtKPPbGh%2FKmb4rTMK5ApXfGLtZASsd3sSlxG%2B9VRXC0nC4G%2FzhhNGMxBVau2Gr1HGZyPfUkhkRn8vgfJeFUO0Ik&X-Amz-Signature=07f7e085fe850bafea37b26b68aed7de00bad8375078e6aca96c0f38b9e33fa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
