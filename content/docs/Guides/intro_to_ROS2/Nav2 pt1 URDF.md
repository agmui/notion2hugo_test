---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T01:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T01:34:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DK7BOYE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC%2BdKjR3HCC8Wh%2BoZXrRD65iWmtZeAf%2B074%2BELKbHXSjwIhAJiqRY%2F20D2Yuc8wy32mUtCYDN5L5Al910%2BXg27UJcdeKv8DCCsQABoMNjM3NDIzMTgzODA1Igy9%2FnJwLm1yBnOU2pMq3AP4kKFzHTumL0ad1FclPcZFCMMTXsN9sPzhXOBrDJGiWDSxqymXs5nNjHXyIrCtzhqOh8vAvpn3mzJDFIV3pyQRCw93ONeBiRY63xTRYQjssu9LM6kQsUmwqgHbIYxxLitSRjJ5reu2ih9TGyNVNU0anmXUIBVvbxArnGkb0k2GinxoNQ%2By8YOs3dHXe26INIVeiTiODQCPqCqysj7qkH1DIVQSoBukz9nvRalSlMQvVG7V6oUxEMzGuVIUu5PxZFKmtnNDtbnpXniGyE5cJG1nge2FZQBMCWEG4ob3b9cPZsTKTainnCrs3sZWQEEtUFw2hKAzT9dlUSWnxmRxC%2BPEzl5SnHqUYqqy7fXw2T7Wcefc6exXZNFi87zmLc5ZIQUICYxJBIUqapxJCdMFO1kbwGrtsUtknxSLjW49LYwHCJFl%2B5cDGSr2x25R%2FvpI67y6Ji0g6KvOT%2FN91v8Cutke8LmEURRUYi2rb97zaysXHEyUNmTZs%2BKqvLD1pF9CPrYWHgLQcS52wSZTs73Ul67FZjyA5LrtYVKh5ZVe14brzFx4sSq3DUbLtT%2BQhUX2yxOJ8QMBrvzCoFyvy0CkJcIeVWLK4VHfTfDJyEkTyTgPlkX1NSFN8eE%2FWfdBETDvj4jEBjqkAf6luSOCp9b4vgI1X7TucawIicNpA69OgVlToCKln%2BKtpVkdBf6zvke3%2BkpMdTVTP%2FneyjBasLQIvDDABgWOf9wKBPoEB5T2tqJOv52bMYKkiZd86IhrTT6w0%2Bj8FMqlVu%2FDTqZdgDzSvWgu36WoBDt%2F5XJiy1jLJiVklAI747WVKgPXAz6x3wyp2ulo5OZv8hmScnasDj%2BVbPK4FkwHvkyPkZKp&X-Amz-Signature=05935e5546696b968ecb97f07a1ced6678c528e3cc0d2cfe92cfef7777b50d73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DK7BOYE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC%2BdKjR3HCC8Wh%2BoZXrRD65iWmtZeAf%2B074%2BELKbHXSjwIhAJiqRY%2F20D2Yuc8wy32mUtCYDN5L5Al910%2BXg27UJcdeKv8DCCsQABoMNjM3NDIzMTgzODA1Igy9%2FnJwLm1yBnOU2pMq3AP4kKFzHTumL0ad1FclPcZFCMMTXsN9sPzhXOBrDJGiWDSxqymXs5nNjHXyIrCtzhqOh8vAvpn3mzJDFIV3pyQRCw93ONeBiRY63xTRYQjssu9LM6kQsUmwqgHbIYxxLitSRjJ5reu2ih9TGyNVNU0anmXUIBVvbxArnGkb0k2GinxoNQ%2By8YOs3dHXe26INIVeiTiODQCPqCqysj7qkH1DIVQSoBukz9nvRalSlMQvVG7V6oUxEMzGuVIUu5PxZFKmtnNDtbnpXniGyE5cJG1nge2FZQBMCWEG4ob3b9cPZsTKTainnCrs3sZWQEEtUFw2hKAzT9dlUSWnxmRxC%2BPEzl5SnHqUYqqy7fXw2T7Wcefc6exXZNFi87zmLc5ZIQUICYxJBIUqapxJCdMFO1kbwGrtsUtknxSLjW49LYwHCJFl%2B5cDGSr2x25R%2FvpI67y6Ji0g6KvOT%2FN91v8Cutke8LmEURRUYi2rb97zaysXHEyUNmTZs%2BKqvLD1pF9CPrYWHgLQcS52wSZTs73Ul67FZjyA5LrtYVKh5ZVe14brzFx4sSq3DUbLtT%2BQhUX2yxOJ8QMBrvzCoFyvy0CkJcIeVWLK4VHfTfDJyEkTyTgPlkX1NSFN8eE%2FWfdBETDvj4jEBjqkAf6luSOCp9b4vgI1X7TucawIicNpA69OgVlToCKln%2BKtpVkdBf6zvke3%2BkpMdTVTP%2FneyjBasLQIvDDABgWOf9wKBPoEB5T2tqJOv52bMYKkiZd86IhrTT6w0%2Bj8FMqlVu%2FDTqZdgDzSvWgu36WoBDt%2F5XJiy1jLJiVklAI747WVKgPXAz6x3wyp2ulo5OZv8hmScnasDj%2BVbPK4FkwHvkyPkZKp&X-Amz-Signature=5718bb5c6c689a187e99371336d5d37fff8566bcc275bc025cb100c0d9972bee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly highly HIGHLY recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DK7BOYE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC%2BdKjR3HCC8Wh%2BoZXrRD65iWmtZeAf%2B074%2BELKbHXSjwIhAJiqRY%2F20D2Yuc8wy32mUtCYDN5L5Al910%2BXg27UJcdeKv8DCCsQABoMNjM3NDIzMTgzODA1Igy9%2FnJwLm1yBnOU2pMq3AP4kKFzHTumL0ad1FclPcZFCMMTXsN9sPzhXOBrDJGiWDSxqymXs5nNjHXyIrCtzhqOh8vAvpn3mzJDFIV3pyQRCw93ONeBiRY63xTRYQjssu9LM6kQsUmwqgHbIYxxLitSRjJ5reu2ih9TGyNVNU0anmXUIBVvbxArnGkb0k2GinxoNQ%2By8YOs3dHXe26INIVeiTiODQCPqCqysj7qkH1DIVQSoBukz9nvRalSlMQvVG7V6oUxEMzGuVIUu5PxZFKmtnNDtbnpXniGyE5cJG1nge2FZQBMCWEG4ob3b9cPZsTKTainnCrs3sZWQEEtUFw2hKAzT9dlUSWnxmRxC%2BPEzl5SnHqUYqqy7fXw2T7Wcefc6exXZNFi87zmLc5ZIQUICYxJBIUqapxJCdMFO1kbwGrtsUtknxSLjW49LYwHCJFl%2B5cDGSr2x25R%2FvpI67y6Ji0g6KvOT%2FN91v8Cutke8LmEURRUYi2rb97zaysXHEyUNmTZs%2BKqvLD1pF9CPrYWHgLQcS52wSZTs73Ul67FZjyA5LrtYVKh5ZVe14brzFx4sSq3DUbLtT%2BQhUX2yxOJ8QMBrvzCoFyvy0CkJcIeVWLK4VHfTfDJyEkTyTgPlkX1NSFN8eE%2FWfdBETDvj4jEBjqkAf6luSOCp9b4vgI1X7TucawIicNpA69OgVlToCKln%2BKtpVkdBf6zvke3%2BkpMdTVTP%2FneyjBasLQIvDDABgWOf9wKBPoEB5T2tqJOv52bMYKkiZd86IhrTT6w0%2Bj8FMqlVu%2FDTqZdgDzSvWgu36WoBDt%2F5XJiy1jLJiVklAI747WVKgPXAz6x3wyp2ulo5OZv8hmScnasDj%2BVbPK4FkwHvkyPkZKp&X-Amz-Signature=48d1402edfc4f1a3a4ae93327f3b4d9d8882330eeb33e1e7be5e7019285cb2b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are many reasons for this because

- keeps all your code in one place
- You don’t need a monitor, mouse, and keyboard to connect to your Raspberry Pi
- Your laptop is much much faster than your Raspberry Pi so debugging is faster
- Once you are done developing on your laptop all you have to do is copy all the files over to the Pi and Docker will automatically make it work

{{% /alert %}}

## creating workspace + package

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

If you are doing the Dev container setup put these at the bottom of your `Dockerfile`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DK7BOYE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC%2BdKjR3HCC8Wh%2BoZXrRD65iWmtZeAf%2B074%2BELKbHXSjwIhAJiqRY%2F20D2Yuc8wy32mUtCYDN5L5Al910%2BXg27UJcdeKv8DCCsQABoMNjM3NDIzMTgzODA1Igy9%2FnJwLm1yBnOU2pMq3AP4kKFzHTumL0ad1FclPcZFCMMTXsN9sPzhXOBrDJGiWDSxqymXs5nNjHXyIrCtzhqOh8vAvpn3mzJDFIV3pyQRCw93ONeBiRY63xTRYQjssu9LM6kQsUmwqgHbIYxxLitSRjJ5reu2ih9TGyNVNU0anmXUIBVvbxArnGkb0k2GinxoNQ%2By8YOs3dHXe26INIVeiTiODQCPqCqysj7qkH1DIVQSoBukz9nvRalSlMQvVG7V6oUxEMzGuVIUu5PxZFKmtnNDtbnpXniGyE5cJG1nge2FZQBMCWEG4ob3b9cPZsTKTainnCrs3sZWQEEtUFw2hKAzT9dlUSWnxmRxC%2BPEzl5SnHqUYqqy7fXw2T7Wcefc6exXZNFi87zmLc5ZIQUICYxJBIUqapxJCdMFO1kbwGrtsUtknxSLjW49LYwHCJFl%2B5cDGSr2x25R%2FvpI67y6Ji0g6KvOT%2FN91v8Cutke8LmEURRUYi2rb97zaysXHEyUNmTZs%2BKqvLD1pF9CPrYWHgLQcS52wSZTs73Ul67FZjyA5LrtYVKh5ZVe14brzFx4sSq3DUbLtT%2BQhUX2yxOJ8QMBrvzCoFyvy0CkJcIeVWLK4VHfTfDJyEkTyTgPlkX1NSFN8eE%2FWfdBETDvj4jEBjqkAf6luSOCp9b4vgI1X7TucawIicNpA69OgVlToCKln%2BKtpVkdBf6zvke3%2BkpMdTVTP%2FneyjBasLQIvDDABgWOf9wKBPoEB5T2tqJOv52bMYKkiZd86IhrTT6w0%2Bj8FMqlVu%2FDTqZdgDzSvWgu36WoBDt%2F5XJiy1jLJiVklAI747WVKgPXAz6x3wyp2ulo5OZv8hmScnasDj%2BVbPK4FkwHvkyPkZKp&X-Amz-Signature=962982e94d199269ea825e26f0461cde023c2184ecfc933dc79f154994fd3d7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DK7BOYE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC%2BdKjR3HCC8Wh%2BoZXrRD65iWmtZeAf%2B074%2BELKbHXSjwIhAJiqRY%2F20D2Yuc8wy32mUtCYDN5L5Al910%2BXg27UJcdeKv8DCCsQABoMNjM3NDIzMTgzODA1Igy9%2FnJwLm1yBnOU2pMq3AP4kKFzHTumL0ad1FclPcZFCMMTXsN9sPzhXOBrDJGiWDSxqymXs5nNjHXyIrCtzhqOh8vAvpn3mzJDFIV3pyQRCw93ONeBiRY63xTRYQjssu9LM6kQsUmwqgHbIYxxLitSRjJ5reu2ih9TGyNVNU0anmXUIBVvbxArnGkb0k2GinxoNQ%2By8YOs3dHXe26INIVeiTiODQCPqCqysj7qkH1DIVQSoBukz9nvRalSlMQvVG7V6oUxEMzGuVIUu5PxZFKmtnNDtbnpXniGyE5cJG1nge2FZQBMCWEG4ob3b9cPZsTKTainnCrs3sZWQEEtUFw2hKAzT9dlUSWnxmRxC%2BPEzl5SnHqUYqqy7fXw2T7Wcefc6exXZNFi87zmLc5ZIQUICYxJBIUqapxJCdMFO1kbwGrtsUtknxSLjW49LYwHCJFl%2B5cDGSr2x25R%2FvpI67y6Ji0g6KvOT%2FN91v8Cutke8LmEURRUYi2rb97zaysXHEyUNmTZs%2BKqvLD1pF9CPrYWHgLQcS52wSZTs73Ul67FZjyA5LrtYVKh5ZVe14brzFx4sSq3DUbLtT%2BQhUX2yxOJ8QMBrvzCoFyvy0CkJcIeVWLK4VHfTfDJyEkTyTgPlkX1NSFN8eE%2FWfdBETDvj4jEBjqkAf6luSOCp9b4vgI1X7TucawIicNpA69OgVlToCKln%2BKtpVkdBf6zvke3%2BkpMdTVTP%2FneyjBasLQIvDDABgWOf9wKBPoEB5T2tqJOv52bMYKkiZd86IhrTT6w0%2Bj8FMqlVu%2FDTqZdgDzSvWgu36WoBDt%2F5XJiy1jLJiVklAI747WVKgPXAz6x3wyp2ulo5OZv8hmScnasDj%2BVbPK4FkwHvkyPkZKp&X-Amz-Signature=9806452a4763ab6d2aa019f660245bb1cfb324a3013ad8d44f76de959550ec62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DK7BOYE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC%2BdKjR3HCC8Wh%2BoZXrRD65iWmtZeAf%2B074%2BELKbHXSjwIhAJiqRY%2F20D2Yuc8wy32mUtCYDN5L5Al910%2BXg27UJcdeKv8DCCsQABoMNjM3NDIzMTgzODA1Igy9%2FnJwLm1yBnOU2pMq3AP4kKFzHTumL0ad1FclPcZFCMMTXsN9sPzhXOBrDJGiWDSxqymXs5nNjHXyIrCtzhqOh8vAvpn3mzJDFIV3pyQRCw93ONeBiRY63xTRYQjssu9LM6kQsUmwqgHbIYxxLitSRjJ5reu2ih9TGyNVNU0anmXUIBVvbxArnGkb0k2GinxoNQ%2By8YOs3dHXe26INIVeiTiODQCPqCqysj7qkH1DIVQSoBukz9nvRalSlMQvVG7V6oUxEMzGuVIUu5PxZFKmtnNDtbnpXniGyE5cJG1nge2FZQBMCWEG4ob3b9cPZsTKTainnCrs3sZWQEEtUFw2hKAzT9dlUSWnxmRxC%2BPEzl5SnHqUYqqy7fXw2T7Wcefc6exXZNFi87zmLc5ZIQUICYxJBIUqapxJCdMFO1kbwGrtsUtknxSLjW49LYwHCJFl%2B5cDGSr2x25R%2FvpI67y6Ji0g6KvOT%2FN91v8Cutke8LmEURRUYi2rb97zaysXHEyUNmTZs%2BKqvLD1pF9CPrYWHgLQcS52wSZTs73Ul67FZjyA5LrtYVKh5ZVe14brzFx4sSq3DUbLtT%2BQhUX2yxOJ8QMBrvzCoFyvy0CkJcIeVWLK4VHfTfDJyEkTyTgPlkX1NSFN8eE%2FWfdBETDvj4jEBjqkAf6luSOCp9b4vgI1X7TucawIicNpA69OgVlToCKln%2BKtpVkdBf6zvke3%2BkpMdTVTP%2FneyjBasLQIvDDABgWOf9wKBPoEB5T2tqJOv52bMYKkiZd86IhrTT6w0%2Bj8FMqlVu%2FDTqZdgDzSvWgu36WoBDt%2F5XJiy1jLJiVklAI747WVKgPXAz6x3wyp2ulo5OZv8hmScnasDj%2BVbPK4FkwHvkyPkZKp&X-Amz-Signature=54117e25ee2457451dfff05a3ae107c329484bac2be3b48c39294f4abdffe055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DK7BOYE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC%2BdKjR3HCC8Wh%2BoZXrRD65iWmtZeAf%2B074%2BELKbHXSjwIhAJiqRY%2F20D2Yuc8wy32mUtCYDN5L5Al910%2BXg27UJcdeKv8DCCsQABoMNjM3NDIzMTgzODA1Igy9%2FnJwLm1yBnOU2pMq3AP4kKFzHTumL0ad1FclPcZFCMMTXsN9sPzhXOBrDJGiWDSxqymXs5nNjHXyIrCtzhqOh8vAvpn3mzJDFIV3pyQRCw93ONeBiRY63xTRYQjssu9LM6kQsUmwqgHbIYxxLitSRjJ5reu2ih9TGyNVNU0anmXUIBVvbxArnGkb0k2GinxoNQ%2By8YOs3dHXe26INIVeiTiODQCPqCqysj7qkH1DIVQSoBukz9nvRalSlMQvVG7V6oUxEMzGuVIUu5PxZFKmtnNDtbnpXniGyE5cJG1nge2FZQBMCWEG4ob3b9cPZsTKTainnCrs3sZWQEEtUFw2hKAzT9dlUSWnxmRxC%2BPEzl5SnHqUYqqy7fXw2T7Wcefc6exXZNFi87zmLc5ZIQUICYxJBIUqapxJCdMFO1kbwGrtsUtknxSLjW49LYwHCJFl%2B5cDGSr2x25R%2FvpI67y6Ji0g6KvOT%2FN91v8Cutke8LmEURRUYi2rb97zaysXHEyUNmTZs%2BKqvLD1pF9CPrYWHgLQcS52wSZTs73Ul67FZjyA5LrtYVKh5ZVe14brzFx4sSq3DUbLtT%2BQhUX2yxOJ8QMBrvzCoFyvy0CkJcIeVWLK4VHfTfDJyEkTyTgPlkX1NSFN8eE%2FWfdBETDvj4jEBjqkAf6luSOCp9b4vgI1X7TucawIicNpA69OgVlToCKln%2BKtpVkdBf6zvke3%2BkpMdTVTP%2FneyjBasLQIvDDABgWOf9wKBPoEB5T2tqJOv52bMYKkiZd86IhrTT6w0%2Bj8FMqlVu%2FDTqZdgDzSvWgu36WoBDt%2F5XJiy1jLJiVklAI747WVKgPXAz6x3wyp2ulo5OZv8hmScnasDj%2BVbPK4FkwHvkyPkZKp&X-Amz-Signature=e55423ee31b7b5410c9abdb64251f355802c31d03173f6610f102b06dfb63494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

make a folder in `mbot_pkg` called description and a file called `mbot_description.urdf`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DK7BOYE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC%2BdKjR3HCC8Wh%2BoZXrRD65iWmtZeAf%2B074%2BELKbHXSjwIhAJiqRY%2F20D2Yuc8wy32mUtCYDN5L5Al910%2BXg27UJcdeKv8DCCsQABoMNjM3NDIzMTgzODA1Igy9%2FnJwLm1yBnOU2pMq3AP4kKFzHTumL0ad1FclPcZFCMMTXsN9sPzhXOBrDJGiWDSxqymXs5nNjHXyIrCtzhqOh8vAvpn3mzJDFIV3pyQRCw93ONeBiRY63xTRYQjssu9LM6kQsUmwqgHbIYxxLitSRjJ5reu2ih9TGyNVNU0anmXUIBVvbxArnGkb0k2GinxoNQ%2By8YOs3dHXe26INIVeiTiODQCPqCqysj7qkH1DIVQSoBukz9nvRalSlMQvVG7V6oUxEMzGuVIUu5PxZFKmtnNDtbnpXniGyE5cJG1nge2FZQBMCWEG4ob3b9cPZsTKTainnCrs3sZWQEEtUFw2hKAzT9dlUSWnxmRxC%2BPEzl5SnHqUYqqy7fXw2T7Wcefc6exXZNFi87zmLc5ZIQUICYxJBIUqapxJCdMFO1kbwGrtsUtknxSLjW49LYwHCJFl%2B5cDGSr2x25R%2FvpI67y6Ji0g6KvOT%2FN91v8Cutke8LmEURRUYi2rb97zaysXHEyUNmTZs%2BKqvLD1pF9CPrYWHgLQcS52wSZTs73Ul67FZjyA5LrtYVKh5ZVe14brzFx4sSq3DUbLtT%2BQhUX2yxOJ8QMBrvzCoFyvy0CkJcIeVWLK4VHfTfDJyEkTyTgPlkX1NSFN8eE%2FWfdBETDvj4jEBjqkAf6luSOCp9b4vgI1X7TucawIicNpA69OgVlToCKln%2BKtpVkdBf6zvke3%2BkpMdTVTP%2FneyjBasLQIvDDABgWOf9wKBPoEB5T2tqJOv52bMYKkiZd86IhrTT6w0%2Bj8FMqlVu%2FDTqZdgDzSvWgu36WoBDt%2F5XJiy1jLJiVklAI747WVKgPXAz6x3wyp2ulo5OZv8hmScnasDj%2BVbPK4FkwHvkyPkZKp&X-Amz-Signature=883fae503fd3e7eb85bc00a82d06abb512196153844763c3100afbcd2cacd5ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DK7BOYE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC%2BdKjR3HCC8Wh%2BoZXrRD65iWmtZeAf%2B074%2BELKbHXSjwIhAJiqRY%2F20D2Yuc8wy32mUtCYDN5L5Al910%2BXg27UJcdeKv8DCCsQABoMNjM3NDIzMTgzODA1Igy9%2FnJwLm1yBnOU2pMq3AP4kKFzHTumL0ad1FclPcZFCMMTXsN9sPzhXOBrDJGiWDSxqymXs5nNjHXyIrCtzhqOh8vAvpn3mzJDFIV3pyQRCw93ONeBiRY63xTRYQjssu9LM6kQsUmwqgHbIYxxLitSRjJ5reu2ih9TGyNVNU0anmXUIBVvbxArnGkb0k2GinxoNQ%2By8YOs3dHXe26INIVeiTiODQCPqCqysj7qkH1DIVQSoBukz9nvRalSlMQvVG7V6oUxEMzGuVIUu5PxZFKmtnNDtbnpXniGyE5cJG1nge2FZQBMCWEG4ob3b9cPZsTKTainnCrs3sZWQEEtUFw2hKAzT9dlUSWnxmRxC%2BPEzl5SnHqUYqqy7fXw2T7Wcefc6exXZNFi87zmLc5ZIQUICYxJBIUqapxJCdMFO1kbwGrtsUtknxSLjW49LYwHCJFl%2B5cDGSr2x25R%2FvpI67y6Ji0g6KvOT%2FN91v8Cutke8LmEURRUYi2rb97zaysXHEyUNmTZs%2BKqvLD1pF9CPrYWHgLQcS52wSZTs73Ul67FZjyA5LrtYVKh5ZVe14brzFx4sSq3DUbLtT%2BQhUX2yxOJ8QMBrvzCoFyvy0CkJcIeVWLK4VHfTfDJyEkTyTgPlkX1NSFN8eE%2FWfdBETDvj4jEBjqkAf6luSOCp9b4vgI1X7TucawIicNpA69OgVlToCKln%2BKtpVkdBf6zvke3%2BkpMdTVTP%2FneyjBasLQIvDDABgWOf9wKBPoEB5T2tqJOv52bMYKkiZd86IhrTT6w0%2Bj8FMqlVu%2FDTqZdgDzSvWgu36WoBDt%2F5XJiy1jLJiVklAI747WVKgPXAz6x3wyp2ulo5OZv8hmScnasDj%2BVbPK4FkwHvkyPkZKp&X-Amz-Signature=b2f5e858dceb2fbc2696d7f0af3bc72ba0ccd67defc6bcab2894f83266075054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DK7BOYE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC%2BdKjR3HCC8Wh%2BoZXrRD65iWmtZeAf%2B074%2BELKbHXSjwIhAJiqRY%2F20D2Yuc8wy32mUtCYDN5L5Al910%2BXg27UJcdeKv8DCCsQABoMNjM3NDIzMTgzODA1Igy9%2FnJwLm1yBnOU2pMq3AP4kKFzHTumL0ad1FclPcZFCMMTXsN9sPzhXOBrDJGiWDSxqymXs5nNjHXyIrCtzhqOh8vAvpn3mzJDFIV3pyQRCw93ONeBiRY63xTRYQjssu9LM6kQsUmwqgHbIYxxLitSRjJ5reu2ih9TGyNVNU0anmXUIBVvbxArnGkb0k2GinxoNQ%2By8YOs3dHXe26INIVeiTiODQCPqCqysj7qkH1DIVQSoBukz9nvRalSlMQvVG7V6oUxEMzGuVIUu5PxZFKmtnNDtbnpXniGyE5cJG1nge2FZQBMCWEG4ob3b9cPZsTKTainnCrs3sZWQEEtUFw2hKAzT9dlUSWnxmRxC%2BPEzl5SnHqUYqqy7fXw2T7Wcefc6exXZNFi87zmLc5ZIQUICYxJBIUqapxJCdMFO1kbwGrtsUtknxSLjW49LYwHCJFl%2B5cDGSr2x25R%2FvpI67y6Ji0g6KvOT%2FN91v8Cutke8LmEURRUYi2rb97zaysXHEyUNmTZs%2BKqvLD1pF9CPrYWHgLQcS52wSZTs73Ul67FZjyA5LrtYVKh5ZVe14brzFx4sSq3DUbLtT%2BQhUX2yxOJ8QMBrvzCoFyvy0CkJcIeVWLK4VHfTfDJyEkTyTgPlkX1NSFN8eE%2FWfdBETDvj4jEBjqkAf6luSOCp9b4vgI1X7TucawIicNpA69OgVlToCKln%2BKtpVkdBf6zvke3%2BkpMdTVTP%2FneyjBasLQIvDDABgWOf9wKBPoEB5T2tqJOv52bMYKkiZd86IhrTT6w0%2Bj8FMqlVu%2FDTqZdgDzSvWgu36WoBDt%2F5XJiy1jLJiVklAI747WVKgPXAz6x3wyp2ulo5OZv8hmScnasDj%2BVbPK4FkwHvkyPkZKp&X-Amz-Signature=505246675d6ff819ca7e24015f5c5fd1ee5c129950aa2738ebddce389870b4b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DK7BOYE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC%2BdKjR3HCC8Wh%2BoZXrRD65iWmtZeAf%2B074%2BELKbHXSjwIhAJiqRY%2F20D2Yuc8wy32mUtCYDN5L5Al910%2BXg27UJcdeKv8DCCsQABoMNjM3NDIzMTgzODA1Igy9%2FnJwLm1yBnOU2pMq3AP4kKFzHTumL0ad1FclPcZFCMMTXsN9sPzhXOBrDJGiWDSxqymXs5nNjHXyIrCtzhqOh8vAvpn3mzJDFIV3pyQRCw93ONeBiRY63xTRYQjssu9LM6kQsUmwqgHbIYxxLitSRjJ5reu2ih9TGyNVNU0anmXUIBVvbxArnGkb0k2GinxoNQ%2By8YOs3dHXe26INIVeiTiODQCPqCqysj7qkH1DIVQSoBukz9nvRalSlMQvVG7V6oUxEMzGuVIUu5PxZFKmtnNDtbnpXniGyE5cJG1nge2FZQBMCWEG4ob3b9cPZsTKTainnCrs3sZWQEEtUFw2hKAzT9dlUSWnxmRxC%2BPEzl5SnHqUYqqy7fXw2T7Wcefc6exXZNFi87zmLc5ZIQUICYxJBIUqapxJCdMFO1kbwGrtsUtknxSLjW49LYwHCJFl%2B5cDGSr2x25R%2FvpI67y6Ji0g6KvOT%2FN91v8Cutke8LmEURRUYi2rb97zaysXHEyUNmTZs%2BKqvLD1pF9CPrYWHgLQcS52wSZTs73Ul67FZjyA5LrtYVKh5ZVe14brzFx4sSq3DUbLtT%2BQhUX2yxOJ8QMBrvzCoFyvy0CkJcIeVWLK4VHfTfDJyEkTyTgPlkX1NSFN8eE%2FWfdBETDvj4jEBjqkAf6luSOCp9b4vgI1X7TucawIicNpA69OgVlToCKln%2BKtpVkdBf6zvke3%2BkpMdTVTP%2FneyjBasLQIvDDABgWOf9wKBPoEB5T2tqJOv52bMYKkiZd86IhrTT6w0%2Bj8FMqlVu%2FDTqZdgDzSvWgu36WoBDt%2F5XJiy1jLJiVklAI747WVKgPXAz6x3wyp2ulo5OZv8hmScnasDj%2BVbPK4FkwHvkyPkZKp&X-Amz-Signature=fcea2400f066c7a462745f7c1407d2a3bc6d87b3470d5ec3bf2a8de1771756f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`joint`**_**`_`**_**`state_publisher_gui`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DK7BOYE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC%2BdKjR3HCC8Wh%2BoZXrRD65iWmtZeAf%2B074%2BELKbHXSjwIhAJiqRY%2F20D2Yuc8wy32mUtCYDN5L5Al910%2BXg27UJcdeKv8DCCsQABoMNjM3NDIzMTgzODA1Igy9%2FnJwLm1yBnOU2pMq3AP4kKFzHTumL0ad1FclPcZFCMMTXsN9sPzhXOBrDJGiWDSxqymXs5nNjHXyIrCtzhqOh8vAvpn3mzJDFIV3pyQRCw93ONeBiRY63xTRYQjssu9LM6kQsUmwqgHbIYxxLitSRjJ5reu2ih9TGyNVNU0anmXUIBVvbxArnGkb0k2GinxoNQ%2By8YOs3dHXe26INIVeiTiODQCPqCqysj7qkH1DIVQSoBukz9nvRalSlMQvVG7V6oUxEMzGuVIUu5PxZFKmtnNDtbnpXniGyE5cJG1nge2FZQBMCWEG4ob3b9cPZsTKTainnCrs3sZWQEEtUFw2hKAzT9dlUSWnxmRxC%2BPEzl5SnHqUYqqy7fXw2T7Wcefc6exXZNFi87zmLc5ZIQUICYxJBIUqapxJCdMFO1kbwGrtsUtknxSLjW49LYwHCJFl%2B5cDGSr2x25R%2FvpI67y6Ji0g6KvOT%2FN91v8Cutke8LmEURRUYi2rb97zaysXHEyUNmTZs%2BKqvLD1pF9CPrYWHgLQcS52wSZTs73Ul67FZjyA5LrtYVKh5ZVe14brzFx4sSq3DUbLtT%2BQhUX2yxOJ8QMBrvzCoFyvy0CkJcIeVWLK4VHfTfDJyEkTyTgPlkX1NSFN8eE%2FWfdBETDvj4jEBjqkAf6luSOCp9b4vgI1X7TucawIicNpA69OgVlToCKln%2BKtpVkdBf6zvke3%2BkpMdTVTP%2FneyjBasLQIvDDABgWOf9wKBPoEB5T2tqJOv52bMYKkiZd86IhrTT6w0%2Bj8FMqlVu%2FDTqZdgDzSvWgu36WoBDt%2F5XJiy1jLJiVklAI747WVKgPXAz6x3wyp2ulo5OZv8hmScnasDj%2BVbPK4FkwHvkyPkZKp&X-Amz-Signature=82e9c417ee9773ccd66094caa9fef9174f5b70087f166ab52fe4ae00b8be395e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DK7BOYE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC%2BdKjR3HCC8Wh%2BoZXrRD65iWmtZeAf%2B074%2BELKbHXSjwIhAJiqRY%2F20D2Yuc8wy32mUtCYDN5L5Al910%2BXg27UJcdeKv8DCCsQABoMNjM3NDIzMTgzODA1Igy9%2FnJwLm1yBnOU2pMq3AP4kKFzHTumL0ad1FclPcZFCMMTXsN9sPzhXOBrDJGiWDSxqymXs5nNjHXyIrCtzhqOh8vAvpn3mzJDFIV3pyQRCw93ONeBiRY63xTRYQjssu9LM6kQsUmwqgHbIYxxLitSRjJ5reu2ih9TGyNVNU0anmXUIBVvbxArnGkb0k2GinxoNQ%2By8YOs3dHXe26INIVeiTiODQCPqCqysj7qkH1DIVQSoBukz9nvRalSlMQvVG7V6oUxEMzGuVIUu5PxZFKmtnNDtbnpXniGyE5cJG1nge2FZQBMCWEG4ob3b9cPZsTKTainnCrs3sZWQEEtUFw2hKAzT9dlUSWnxmRxC%2BPEzl5SnHqUYqqy7fXw2T7Wcefc6exXZNFi87zmLc5ZIQUICYxJBIUqapxJCdMFO1kbwGrtsUtknxSLjW49LYwHCJFl%2B5cDGSr2x25R%2FvpI67y6Ji0g6KvOT%2FN91v8Cutke8LmEURRUYi2rb97zaysXHEyUNmTZs%2BKqvLD1pF9CPrYWHgLQcS52wSZTs73Ul67FZjyA5LrtYVKh5ZVe14brzFx4sSq3DUbLtT%2BQhUX2yxOJ8QMBrvzCoFyvy0CkJcIeVWLK4VHfTfDJyEkTyTgPlkX1NSFN8eE%2FWfdBETDvj4jEBjqkAf6luSOCp9b4vgI1X7TucawIicNpA69OgVlToCKln%2BKtpVkdBf6zvke3%2BkpMdTVTP%2FneyjBasLQIvDDABgWOf9wKBPoEB5T2tqJOv52bMYKkiZd86IhrTT6w0%2Bj8FMqlVu%2FDTqZdgDzSvWgu36WoBDt%2F5XJiy1jLJiVklAI747WVKgPXAz6x3wyp2ulo5OZv8hmScnasDj%2BVbPK4FkwHvkyPkZKp&X-Amz-Signature=14469ca48173ac4d8df70360ccc8ab32867ff2f7eab365ca082e98926d181777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DK7BOYE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC%2BdKjR3HCC8Wh%2BoZXrRD65iWmtZeAf%2B074%2BELKbHXSjwIhAJiqRY%2F20D2Yuc8wy32mUtCYDN5L5Al910%2BXg27UJcdeKv8DCCsQABoMNjM3NDIzMTgzODA1Igy9%2FnJwLm1yBnOU2pMq3AP4kKFzHTumL0ad1FclPcZFCMMTXsN9sPzhXOBrDJGiWDSxqymXs5nNjHXyIrCtzhqOh8vAvpn3mzJDFIV3pyQRCw93ONeBiRY63xTRYQjssu9LM6kQsUmwqgHbIYxxLitSRjJ5reu2ih9TGyNVNU0anmXUIBVvbxArnGkb0k2GinxoNQ%2By8YOs3dHXe26INIVeiTiODQCPqCqysj7qkH1DIVQSoBukz9nvRalSlMQvVG7V6oUxEMzGuVIUu5PxZFKmtnNDtbnpXniGyE5cJG1nge2FZQBMCWEG4ob3b9cPZsTKTainnCrs3sZWQEEtUFw2hKAzT9dlUSWnxmRxC%2BPEzl5SnHqUYqqy7fXw2T7Wcefc6exXZNFi87zmLc5ZIQUICYxJBIUqapxJCdMFO1kbwGrtsUtknxSLjW49LYwHCJFl%2B5cDGSr2x25R%2FvpI67y6Ji0g6KvOT%2FN91v8Cutke8LmEURRUYi2rb97zaysXHEyUNmTZs%2BKqvLD1pF9CPrYWHgLQcS52wSZTs73Ul67FZjyA5LrtYVKh5ZVe14brzFx4sSq3DUbLtT%2BQhUX2yxOJ8QMBrvzCoFyvy0CkJcIeVWLK4VHfTfDJyEkTyTgPlkX1NSFN8eE%2FWfdBETDvj4jEBjqkAf6luSOCp9b4vgI1X7TucawIicNpA69OgVlToCKln%2BKtpVkdBf6zvke3%2BkpMdTVTP%2FneyjBasLQIvDDABgWOf9wKBPoEB5T2tqJOv52bMYKkiZd86IhrTT6w0%2Bj8FMqlVu%2FDTqZdgDzSvWgu36WoBDt%2F5XJiy1jLJiVklAI747WVKgPXAz6x3wyp2ulo5OZv8hmScnasDj%2BVbPK4FkwHvkyPkZKp&X-Amz-Signature=0abd9115ca386d522013ac25ce9e796ac4f63f36214d27a632d335052af4f532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCVMZT4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDXPJayB8gsRbe4E6vvd4k2NDtvenlw1f4sC8JNKVb66wIgGAXa3yPTDf5f5%2Bcfu1fcB%2Fz%2FcqiibBMTDNOZGhJwkjcq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDB5f4bLVHlrBpoX9ESrcA%2BIyorJugBCihPKL6rDV3dsxHbzb1bQ%2FXRnx7Aub%2BzEWKnrMFQ%2BtNhYtWFFXUC0%2F99Wp7jrvFRp%2Be%2FRIsXyzzLj%2BjEktRysnIp%2BuH7EuFdNRGEHUS27kr5OyKM4fHKwfg4mpKP0KNeLn5MhmWb7bLyar90lgZvNQD8X5cst5SemtAxB%2FQA21fnA1VquGhOZmf0d%2FdqwmXNgXPCJnD7RLWSCDZUWIwzpcV8QkVFF3TkB%2F7zV1DKzwSOHLYEUVuS6O%2FtXPYCfoFd0yZzySxjUwNFkhLRW49R93ZIdJNW2pFcGi5nyia6ufnhYUpoko%2BrhG%2BOzGnwbQ9yaWDDEVOn7KvxG0MBjfvuQ3Z%2B5q8rjgTz586izXdjaMv7140OJi4Ye7vgLJoBYgzeZxkg3Whb8vgBq0NFpX9iC8tu2bD%2FD%2FgJUJxvzgKN1evg4CaRpEVdgPgVtOUbZLzexK%2Bc%2FfVe%2Fm9QyC8bFag4gSlAOvwe5Eh86EC9%2BKsQbwFBjlriya3yJNjURjNULpj%2BqOFyik2wBa%2B8h3GUAejE1fFf45iJGhIMgHys%2Fc%2F0LI3vrwx5UZcj6z1Oh%2FF5LyHjD2a%2BU2fZjPE2OMyL%2BApAFD9UGAsZDVHxbHqlBEA9FZrfv477wRMJKPiMQGOqUBQ5GVvbu0shNpKGOYJRoULwcBZl4uu6v%2Fg0BWltgzNdxRYqKsdBkdNa%2Bg1inGX6UdnQ93GPKtaweMmnPhgb%2Fhq%2FdoQVsdsacdwSMPzRDxV5OLI1CioAton60LvapfniACerHPoRvEFlkeCjGvmc9NLMlqSRcAWJ%2FRfQ5bdXsNayp9Y%2FMEwN5XutlFzQhk5T8oTwbs0%2Bqot4Y%2FsYChEjTchBI5m3O9&X-Amz-Signature=7af47419f55566c795632957630c9fb8f2ea68b13852ec9807c6d642d24fd468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCVMZT4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDXPJayB8gsRbe4E6vvd4k2NDtvenlw1f4sC8JNKVb66wIgGAXa3yPTDf5f5%2Bcfu1fcB%2Fz%2FcqiibBMTDNOZGhJwkjcq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDB5f4bLVHlrBpoX9ESrcA%2BIyorJugBCihPKL6rDV3dsxHbzb1bQ%2FXRnx7Aub%2BzEWKnrMFQ%2BtNhYtWFFXUC0%2F99Wp7jrvFRp%2Be%2FRIsXyzzLj%2BjEktRysnIp%2BuH7EuFdNRGEHUS27kr5OyKM4fHKwfg4mpKP0KNeLn5MhmWb7bLyar90lgZvNQD8X5cst5SemtAxB%2FQA21fnA1VquGhOZmf0d%2FdqwmXNgXPCJnD7RLWSCDZUWIwzpcV8QkVFF3TkB%2F7zV1DKzwSOHLYEUVuS6O%2FtXPYCfoFd0yZzySxjUwNFkhLRW49R93ZIdJNW2pFcGi5nyia6ufnhYUpoko%2BrhG%2BOzGnwbQ9yaWDDEVOn7KvxG0MBjfvuQ3Z%2B5q8rjgTz586izXdjaMv7140OJi4Ye7vgLJoBYgzeZxkg3Whb8vgBq0NFpX9iC8tu2bD%2FD%2FgJUJxvzgKN1evg4CaRpEVdgPgVtOUbZLzexK%2Bc%2FfVe%2Fm9QyC8bFag4gSlAOvwe5Eh86EC9%2BKsQbwFBjlriya3yJNjURjNULpj%2BqOFyik2wBa%2B8h3GUAejE1fFf45iJGhIMgHys%2Fc%2F0LI3vrwx5UZcj6z1Oh%2FF5LyHjD2a%2BU2fZjPE2OMyL%2BApAFD9UGAsZDVHxbHqlBEA9FZrfv477wRMJKPiMQGOqUBQ5GVvbu0shNpKGOYJRoULwcBZl4uu6v%2Fg0BWltgzNdxRYqKsdBkdNa%2Bg1inGX6UdnQ93GPKtaweMmnPhgb%2Fhq%2FdoQVsdsacdwSMPzRDxV5OLI1CioAton60LvapfniACerHPoRvEFlkeCjGvmc9NLMlqSRcAWJ%2FRfQ5bdXsNayp9Y%2FMEwN5XutlFzQhk5T8oTwbs0%2Bqot4Y%2FsYChEjTchBI5m3O9&X-Amz-Signature=192acb194047363e18d5fb9d71a273e129fb7efb435216009337c06de9640145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## launch file

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

## add new files to `setup.py` 

if we add new files types to the package we need to update the `setup.py` and rebuild

```python

from setuptools import find_packages, setup
import os
from glob import glob

files = []
for full_filepath in glob('**/*.*', recursive=True):
    filepath = os.path.split(full_filepath)
    if filepath[0] != '':
        result = (os.path.join('share', package_name, filepath[0]), [full_filepath])
        files.append(result)

package_name = 'mbot_pkg'

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

**run:**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCVMZT4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDXPJayB8gsRbe4E6vvd4k2NDtvenlw1f4sC8JNKVb66wIgGAXa3yPTDf5f5%2Bcfu1fcB%2Fz%2FcqiibBMTDNOZGhJwkjcq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDB5f4bLVHlrBpoX9ESrcA%2BIyorJugBCihPKL6rDV3dsxHbzb1bQ%2FXRnx7Aub%2BzEWKnrMFQ%2BtNhYtWFFXUC0%2F99Wp7jrvFRp%2Be%2FRIsXyzzLj%2BjEktRysnIp%2BuH7EuFdNRGEHUS27kr5OyKM4fHKwfg4mpKP0KNeLn5MhmWb7bLyar90lgZvNQD8X5cst5SemtAxB%2FQA21fnA1VquGhOZmf0d%2FdqwmXNgXPCJnD7RLWSCDZUWIwzpcV8QkVFF3TkB%2F7zV1DKzwSOHLYEUVuS6O%2FtXPYCfoFd0yZzySxjUwNFkhLRW49R93ZIdJNW2pFcGi5nyia6ufnhYUpoko%2BrhG%2BOzGnwbQ9yaWDDEVOn7KvxG0MBjfvuQ3Z%2B5q8rjgTz586izXdjaMv7140OJi4Ye7vgLJoBYgzeZxkg3Whb8vgBq0NFpX9iC8tu2bD%2FD%2FgJUJxvzgKN1evg4CaRpEVdgPgVtOUbZLzexK%2Bc%2FfVe%2Fm9QyC8bFag4gSlAOvwe5Eh86EC9%2BKsQbwFBjlriya3yJNjURjNULpj%2BqOFyik2wBa%2B8h3GUAejE1fFf45iJGhIMgHys%2Fc%2F0LI3vrwx5UZcj6z1Oh%2FF5LyHjD2a%2BU2fZjPE2OMyL%2BApAFD9UGAsZDVHxbHqlBEA9FZrfv477wRMJKPiMQGOqUBQ5GVvbu0shNpKGOYJRoULwcBZl4uu6v%2Fg0BWltgzNdxRYqKsdBkdNa%2Bg1inGX6UdnQ93GPKtaweMmnPhgb%2Fhq%2FdoQVsdsacdwSMPzRDxV5OLI1CioAton60LvapfniACerHPoRvEFlkeCjGvmc9NLMlqSRcAWJ%2FRfQ5bdXsNayp9Y%2FMEwN5XutlFzQhk5T8oTwbs0%2Bqot4Y%2FsYChEjTchBI5m3O9&X-Amz-Signature=2897cd488ce7bc2fd9fd64a307614f4b1f75f5e5f7aeaaa4f8aad1c50ea8be00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running

In a new terminal tab while `rviz` is still open run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCVMZT4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDXPJayB8gsRbe4E6vvd4k2NDtvenlw1f4sC8JNKVb66wIgGAXa3yPTDf5f5%2Bcfu1fcB%2Fz%2FcqiibBMTDNOZGhJwkjcq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDB5f4bLVHlrBpoX9ESrcA%2BIyorJugBCihPKL6rDV3dsxHbzb1bQ%2FXRnx7Aub%2BzEWKnrMFQ%2BtNhYtWFFXUC0%2F99Wp7jrvFRp%2Be%2FRIsXyzzLj%2BjEktRysnIp%2BuH7EuFdNRGEHUS27kr5OyKM4fHKwfg4mpKP0KNeLn5MhmWb7bLyar90lgZvNQD8X5cst5SemtAxB%2FQA21fnA1VquGhOZmf0d%2FdqwmXNgXPCJnD7RLWSCDZUWIwzpcV8QkVFF3TkB%2F7zV1DKzwSOHLYEUVuS6O%2FtXPYCfoFd0yZzySxjUwNFkhLRW49R93ZIdJNW2pFcGi5nyia6ufnhYUpoko%2BrhG%2BOzGnwbQ9yaWDDEVOn7KvxG0MBjfvuQ3Z%2B5q8rjgTz586izXdjaMv7140OJi4Ye7vgLJoBYgzeZxkg3Whb8vgBq0NFpX9iC8tu2bD%2FD%2FgJUJxvzgKN1evg4CaRpEVdgPgVtOUbZLzexK%2Bc%2FfVe%2Fm9QyC8bFag4gSlAOvwe5Eh86EC9%2BKsQbwFBjlriya3yJNjURjNULpj%2BqOFyik2wBa%2B8h3GUAejE1fFf45iJGhIMgHys%2Fc%2F0LI3vrwx5UZcj6z1Oh%2FF5LyHjD2a%2BU2fZjPE2OMyL%2BApAFD9UGAsZDVHxbHqlBEA9FZrfv477wRMJKPiMQGOqUBQ5GVvbu0shNpKGOYJRoULwcBZl4uu6v%2Fg0BWltgzNdxRYqKsdBkdNa%2Bg1inGX6UdnQ93GPKtaweMmnPhgb%2Fhq%2FdoQVsdsacdwSMPzRDxV5OLI1CioAton60LvapfniACerHPoRvEFlkeCjGvmc9NLMlqSRcAWJ%2FRfQ5bdXsNayp9Y%2FMEwN5XutlFzQhk5T8oTwbs0%2Bqot4Y%2FsYChEjTchBI5m3O9&X-Amz-Signature=0e10e7a38bd90e3d5038cfb291d56ba4d8a0c2ddf99923e5ffd0790a88e90d73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCVMZT4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDXPJayB8gsRbe4E6vvd4k2NDtvenlw1f4sC8JNKVb66wIgGAXa3yPTDf5f5%2Bcfu1fcB%2Fz%2FcqiibBMTDNOZGhJwkjcq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDB5f4bLVHlrBpoX9ESrcA%2BIyorJugBCihPKL6rDV3dsxHbzb1bQ%2FXRnx7Aub%2BzEWKnrMFQ%2BtNhYtWFFXUC0%2F99Wp7jrvFRp%2Be%2FRIsXyzzLj%2BjEktRysnIp%2BuH7EuFdNRGEHUS27kr5OyKM4fHKwfg4mpKP0KNeLn5MhmWb7bLyar90lgZvNQD8X5cst5SemtAxB%2FQA21fnA1VquGhOZmf0d%2FdqwmXNgXPCJnD7RLWSCDZUWIwzpcV8QkVFF3TkB%2F7zV1DKzwSOHLYEUVuS6O%2FtXPYCfoFd0yZzySxjUwNFkhLRW49R93ZIdJNW2pFcGi5nyia6ufnhYUpoko%2BrhG%2BOzGnwbQ9yaWDDEVOn7KvxG0MBjfvuQ3Z%2B5q8rjgTz586izXdjaMv7140OJi4Ye7vgLJoBYgzeZxkg3Whb8vgBq0NFpX9iC8tu2bD%2FD%2FgJUJxvzgKN1evg4CaRpEVdgPgVtOUbZLzexK%2Bc%2FfVe%2Fm9QyC8bFag4gSlAOvwe5Eh86EC9%2BKsQbwFBjlriya3yJNjURjNULpj%2BqOFyik2wBa%2B8h3GUAejE1fFf45iJGhIMgHys%2Fc%2F0LI3vrwx5UZcj6z1Oh%2FF5LyHjD2a%2BU2fZjPE2OMyL%2BApAFD9UGAsZDVHxbHqlBEA9FZrfv477wRMJKPiMQGOqUBQ5GVvbu0shNpKGOYJRoULwcBZl4uu6v%2Fg0BWltgzNdxRYqKsdBkdNa%2Bg1inGX6UdnQ93GPKtaweMmnPhgb%2Fhq%2FdoQVsdsacdwSMPzRDxV5OLI1CioAton60LvapfniACerHPoRvEFlkeCjGvmc9NLMlqSRcAWJ%2FRfQ5bdXsNayp9Y%2FMEwN5XutlFzQhk5T8oTwbs0%2Bqot4Y%2FsYChEjTchBI5m3O9&X-Amz-Signature=9907f0c7899923daa5197d0e7af287ad638be9c17ee26623cce2b43951489d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCVMZT4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDXPJayB8gsRbe4E6vvd4k2NDtvenlw1f4sC8JNKVb66wIgGAXa3yPTDf5f5%2Bcfu1fcB%2Fz%2FcqiibBMTDNOZGhJwkjcq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDB5f4bLVHlrBpoX9ESrcA%2BIyorJugBCihPKL6rDV3dsxHbzb1bQ%2FXRnx7Aub%2BzEWKnrMFQ%2BtNhYtWFFXUC0%2F99Wp7jrvFRp%2Be%2FRIsXyzzLj%2BjEktRysnIp%2BuH7EuFdNRGEHUS27kr5OyKM4fHKwfg4mpKP0KNeLn5MhmWb7bLyar90lgZvNQD8X5cst5SemtAxB%2FQA21fnA1VquGhOZmf0d%2FdqwmXNgXPCJnD7RLWSCDZUWIwzpcV8QkVFF3TkB%2F7zV1DKzwSOHLYEUVuS6O%2FtXPYCfoFd0yZzySxjUwNFkhLRW49R93ZIdJNW2pFcGi5nyia6ufnhYUpoko%2BrhG%2BOzGnwbQ9yaWDDEVOn7KvxG0MBjfvuQ3Z%2B5q8rjgTz586izXdjaMv7140OJi4Ye7vgLJoBYgzeZxkg3Whb8vgBq0NFpX9iC8tu2bD%2FD%2FgJUJxvzgKN1evg4CaRpEVdgPgVtOUbZLzexK%2Bc%2FfVe%2Fm9QyC8bFag4gSlAOvwe5Eh86EC9%2BKsQbwFBjlriya3yJNjURjNULpj%2BqOFyik2wBa%2B8h3GUAejE1fFf45iJGhIMgHys%2Fc%2F0LI3vrwx5UZcj6z1Oh%2FF5LyHjD2a%2BU2fZjPE2OMyL%2BApAFD9UGAsZDVHxbHqlBEA9FZrfv477wRMJKPiMQGOqUBQ5GVvbu0shNpKGOYJRoULwcBZl4uu6v%2Fg0BWltgzNdxRYqKsdBkdNa%2Bg1inGX6UdnQ93GPKtaweMmnPhgb%2Fhq%2FdoQVsdsacdwSMPzRDxV5OLI1CioAton60LvapfniACerHPoRvEFlkeCjGvmc9NLMlqSRcAWJ%2FRfQ5bdXsNayp9Y%2FMEwN5XutlFzQhk5T8oTwbs0%2Bqot4Y%2FsYChEjTchBI5m3O9&X-Amz-Signature=bf097b7b5b318bba0fc7e9f35b9945c9b4b98d3caa691b56316a5c971194ee37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
