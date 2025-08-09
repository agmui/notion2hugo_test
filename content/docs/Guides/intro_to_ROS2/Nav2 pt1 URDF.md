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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5FDJEKG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtbx%2FXX8ifBdcp7ojMhokOG0nmS9bJuDljK1RbcgA1wAiEAt%2FqpSvf1hFSgTenS8qsOr8EiYUnuz2cXi%2F2678kGaIIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE7s84sCHFNLBfgOyrcA%2BibCVDn3NLb25AgreVOgp9X2OJ1FZ%2BkRpPhfSXUWWyH5nRdN%2BcBw9jflrZz2bR3sqhAhl8GvVN8X7GP9a98ZxMPMCEzzp9cCh98GPwjcVaysrTSeT8OuwUejUOaMW43SlmHGly4a82y01YDeBQgL1lj0oKXzm5X9oRuoTYRa6pIKWhAZHMCq5ggD3SipniVzP1JOl1XLgFKahYUprtbx8XWgvLsC5hlNT3x0OsqiB9fyKvVir7fRkqEnxk%2BJJ1xC8p%2F9qa7rW1RRGeYE8qA5OQa9qCHmNucg%2FB%2F7ODVR542lM6wuRAbAQRiU4GvRoxDQZ4aLkE62uFwpXcMb%2BxKTLFuNAK3%2FNxkYFcE%2BfSLeU5u5%2FmGp4PAa6%2Fi62voM0zWnI6kTy6iNfCS6HER9RaZLzhbqDmaE5cpXG2sUltcz8cXDrlONoE%2FMEGvG%2BqTeCZLJmuGqFyGz4iJ5PKvFiAMfvGpDKWqS1imsWPVHr%2F8ypZ%2Bln3AFdylCyWZCjFshJaVgHqFkjv1xaOx4ikrGJjlqXrjdaJk3g9ZizEP7blJu4rkLmK0%2Fy1ieh12v7607t0uAT7mhmN6QnTgMY8wIUXkyWSkwxbtoTp4mYsbVefD7tMAuydQBky55p8%2BB9IJMPbp3MQGOqUBK433HlBkQV7D%2FwzP1mrrjdNEXd168F25%2F0CRlZjiJxTi77W2cKU2Ta9g7tQyG2P8FP82k1GABECV44IWYNnIUcX7cgnotHjjAo6qfb871fg0kIc5ldBoFf5pf7qml7oPXZZXnJEEQu69L7tLlSKcx1tTPYCHfEFJEoN2xgpxtvCJuYHyLwzLZ3qtMLC48GTgB%2FIsyWNVB0fxUtcj9wBenFD%2F0qvk&X-Amz-Signature=f7ecd7bf75d16a3dc403fc323c57528b5afeddce6193db04729e874f70bb211d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5FDJEKG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtbx%2FXX8ifBdcp7ojMhokOG0nmS9bJuDljK1RbcgA1wAiEAt%2FqpSvf1hFSgTenS8qsOr8EiYUnuz2cXi%2F2678kGaIIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE7s84sCHFNLBfgOyrcA%2BibCVDn3NLb25AgreVOgp9X2OJ1FZ%2BkRpPhfSXUWWyH5nRdN%2BcBw9jflrZz2bR3sqhAhl8GvVN8X7GP9a98ZxMPMCEzzp9cCh98GPwjcVaysrTSeT8OuwUejUOaMW43SlmHGly4a82y01YDeBQgL1lj0oKXzm5X9oRuoTYRa6pIKWhAZHMCq5ggD3SipniVzP1JOl1XLgFKahYUprtbx8XWgvLsC5hlNT3x0OsqiB9fyKvVir7fRkqEnxk%2BJJ1xC8p%2F9qa7rW1RRGeYE8qA5OQa9qCHmNucg%2FB%2F7ODVR542lM6wuRAbAQRiU4GvRoxDQZ4aLkE62uFwpXcMb%2BxKTLFuNAK3%2FNxkYFcE%2BfSLeU5u5%2FmGp4PAa6%2Fi62voM0zWnI6kTy6iNfCS6HER9RaZLzhbqDmaE5cpXG2sUltcz8cXDrlONoE%2FMEGvG%2BqTeCZLJmuGqFyGz4iJ5PKvFiAMfvGpDKWqS1imsWPVHr%2F8ypZ%2Bln3AFdylCyWZCjFshJaVgHqFkjv1xaOx4ikrGJjlqXrjdaJk3g9ZizEP7blJu4rkLmK0%2Fy1ieh12v7607t0uAT7mhmN6QnTgMY8wIUXkyWSkwxbtoTp4mYsbVefD7tMAuydQBky55p8%2BB9IJMPbp3MQGOqUBK433HlBkQV7D%2FwzP1mrrjdNEXd168F25%2F0CRlZjiJxTi77W2cKU2Ta9g7tQyG2P8FP82k1GABECV44IWYNnIUcX7cgnotHjjAo6qfb871fg0kIc5ldBoFf5pf7qml7oPXZZXnJEEQu69L7tLlSKcx1tTPYCHfEFJEoN2xgpxtvCJuYHyLwzLZ3qtMLC48GTgB%2FIsyWNVB0fxUtcj9wBenFD%2F0qvk&X-Amz-Signature=9f3fa4a3e084aa3e3ccdd3b53798e076371c39e26eb23c8ac6a0a08f66deb95b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5FDJEKG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtbx%2FXX8ifBdcp7ojMhokOG0nmS9bJuDljK1RbcgA1wAiEAt%2FqpSvf1hFSgTenS8qsOr8EiYUnuz2cXi%2F2678kGaIIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE7s84sCHFNLBfgOyrcA%2BibCVDn3NLb25AgreVOgp9X2OJ1FZ%2BkRpPhfSXUWWyH5nRdN%2BcBw9jflrZz2bR3sqhAhl8GvVN8X7GP9a98ZxMPMCEzzp9cCh98GPwjcVaysrTSeT8OuwUejUOaMW43SlmHGly4a82y01YDeBQgL1lj0oKXzm5X9oRuoTYRa6pIKWhAZHMCq5ggD3SipniVzP1JOl1XLgFKahYUprtbx8XWgvLsC5hlNT3x0OsqiB9fyKvVir7fRkqEnxk%2BJJ1xC8p%2F9qa7rW1RRGeYE8qA5OQa9qCHmNucg%2FB%2F7ODVR542lM6wuRAbAQRiU4GvRoxDQZ4aLkE62uFwpXcMb%2BxKTLFuNAK3%2FNxkYFcE%2BfSLeU5u5%2FmGp4PAa6%2Fi62voM0zWnI6kTy6iNfCS6HER9RaZLzhbqDmaE5cpXG2sUltcz8cXDrlONoE%2FMEGvG%2BqTeCZLJmuGqFyGz4iJ5PKvFiAMfvGpDKWqS1imsWPVHr%2F8ypZ%2Bln3AFdylCyWZCjFshJaVgHqFkjv1xaOx4ikrGJjlqXrjdaJk3g9ZizEP7blJu4rkLmK0%2Fy1ieh12v7607t0uAT7mhmN6QnTgMY8wIUXkyWSkwxbtoTp4mYsbVefD7tMAuydQBky55p8%2BB9IJMPbp3MQGOqUBK433HlBkQV7D%2FwzP1mrrjdNEXd168F25%2F0CRlZjiJxTi77W2cKU2Ta9g7tQyG2P8FP82k1GABECV44IWYNnIUcX7cgnotHjjAo6qfb871fg0kIc5ldBoFf5pf7qml7oPXZZXnJEEQu69L7tLlSKcx1tTPYCHfEFJEoN2xgpxtvCJuYHyLwzLZ3qtMLC48GTgB%2FIsyWNVB0fxUtcj9wBenFD%2F0qvk&X-Amz-Signature=c49c22f7c593bf4845eefd1f5b35f44cfc6e11cb52115ef124b561f6bb53895b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5FDJEKG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtbx%2FXX8ifBdcp7ojMhokOG0nmS9bJuDljK1RbcgA1wAiEAt%2FqpSvf1hFSgTenS8qsOr8EiYUnuz2cXi%2F2678kGaIIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE7s84sCHFNLBfgOyrcA%2BibCVDn3NLb25AgreVOgp9X2OJ1FZ%2BkRpPhfSXUWWyH5nRdN%2BcBw9jflrZz2bR3sqhAhl8GvVN8X7GP9a98ZxMPMCEzzp9cCh98GPwjcVaysrTSeT8OuwUejUOaMW43SlmHGly4a82y01YDeBQgL1lj0oKXzm5X9oRuoTYRa6pIKWhAZHMCq5ggD3SipniVzP1JOl1XLgFKahYUprtbx8XWgvLsC5hlNT3x0OsqiB9fyKvVir7fRkqEnxk%2BJJ1xC8p%2F9qa7rW1RRGeYE8qA5OQa9qCHmNucg%2FB%2F7ODVR542lM6wuRAbAQRiU4GvRoxDQZ4aLkE62uFwpXcMb%2BxKTLFuNAK3%2FNxkYFcE%2BfSLeU5u5%2FmGp4PAa6%2Fi62voM0zWnI6kTy6iNfCS6HER9RaZLzhbqDmaE5cpXG2sUltcz8cXDrlONoE%2FMEGvG%2BqTeCZLJmuGqFyGz4iJ5PKvFiAMfvGpDKWqS1imsWPVHr%2F8ypZ%2Bln3AFdylCyWZCjFshJaVgHqFkjv1xaOx4ikrGJjlqXrjdaJk3g9ZizEP7blJu4rkLmK0%2Fy1ieh12v7607t0uAT7mhmN6QnTgMY8wIUXkyWSkwxbtoTp4mYsbVefD7tMAuydQBky55p8%2BB9IJMPbp3MQGOqUBK433HlBkQV7D%2FwzP1mrrjdNEXd168F25%2F0CRlZjiJxTi77W2cKU2Ta9g7tQyG2P8FP82k1GABECV44IWYNnIUcX7cgnotHjjAo6qfb871fg0kIc5ldBoFf5pf7qml7oPXZZXnJEEQu69L7tLlSKcx1tTPYCHfEFJEoN2xgpxtvCJuYHyLwzLZ3qtMLC48GTgB%2FIsyWNVB0fxUtcj9wBenFD%2F0qvk&X-Amz-Signature=0605efb7ce875c833445d1f22aafe735b579d7e788edd4f237f0457047a966ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5FDJEKG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtbx%2FXX8ifBdcp7ojMhokOG0nmS9bJuDljK1RbcgA1wAiEAt%2FqpSvf1hFSgTenS8qsOr8EiYUnuz2cXi%2F2678kGaIIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE7s84sCHFNLBfgOyrcA%2BibCVDn3NLb25AgreVOgp9X2OJ1FZ%2BkRpPhfSXUWWyH5nRdN%2BcBw9jflrZz2bR3sqhAhl8GvVN8X7GP9a98ZxMPMCEzzp9cCh98GPwjcVaysrTSeT8OuwUejUOaMW43SlmHGly4a82y01YDeBQgL1lj0oKXzm5X9oRuoTYRa6pIKWhAZHMCq5ggD3SipniVzP1JOl1XLgFKahYUprtbx8XWgvLsC5hlNT3x0OsqiB9fyKvVir7fRkqEnxk%2BJJ1xC8p%2F9qa7rW1RRGeYE8qA5OQa9qCHmNucg%2FB%2F7ODVR542lM6wuRAbAQRiU4GvRoxDQZ4aLkE62uFwpXcMb%2BxKTLFuNAK3%2FNxkYFcE%2BfSLeU5u5%2FmGp4PAa6%2Fi62voM0zWnI6kTy6iNfCS6HER9RaZLzhbqDmaE5cpXG2sUltcz8cXDrlONoE%2FMEGvG%2BqTeCZLJmuGqFyGz4iJ5PKvFiAMfvGpDKWqS1imsWPVHr%2F8ypZ%2Bln3AFdylCyWZCjFshJaVgHqFkjv1xaOx4ikrGJjlqXrjdaJk3g9ZizEP7blJu4rkLmK0%2Fy1ieh12v7607t0uAT7mhmN6QnTgMY8wIUXkyWSkwxbtoTp4mYsbVefD7tMAuydQBky55p8%2BB9IJMPbp3MQGOqUBK433HlBkQV7D%2FwzP1mrrjdNEXd168F25%2F0CRlZjiJxTi77W2cKU2Ta9g7tQyG2P8FP82k1GABECV44IWYNnIUcX7cgnotHjjAo6qfb871fg0kIc5ldBoFf5pf7qml7oPXZZXnJEEQu69L7tLlSKcx1tTPYCHfEFJEoN2xgpxtvCJuYHyLwzLZ3qtMLC48GTgB%2FIsyWNVB0fxUtcj9wBenFD%2F0qvk&X-Amz-Signature=d1750404bdd2bd01cc88f076660c875ecf1812059d4e0ead3365b2224d60308f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5FDJEKG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtbx%2FXX8ifBdcp7ojMhokOG0nmS9bJuDljK1RbcgA1wAiEAt%2FqpSvf1hFSgTenS8qsOr8EiYUnuz2cXi%2F2678kGaIIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE7s84sCHFNLBfgOyrcA%2BibCVDn3NLb25AgreVOgp9X2OJ1FZ%2BkRpPhfSXUWWyH5nRdN%2BcBw9jflrZz2bR3sqhAhl8GvVN8X7GP9a98ZxMPMCEzzp9cCh98GPwjcVaysrTSeT8OuwUejUOaMW43SlmHGly4a82y01YDeBQgL1lj0oKXzm5X9oRuoTYRa6pIKWhAZHMCq5ggD3SipniVzP1JOl1XLgFKahYUprtbx8XWgvLsC5hlNT3x0OsqiB9fyKvVir7fRkqEnxk%2BJJ1xC8p%2F9qa7rW1RRGeYE8qA5OQa9qCHmNucg%2FB%2F7ODVR542lM6wuRAbAQRiU4GvRoxDQZ4aLkE62uFwpXcMb%2BxKTLFuNAK3%2FNxkYFcE%2BfSLeU5u5%2FmGp4PAa6%2Fi62voM0zWnI6kTy6iNfCS6HER9RaZLzhbqDmaE5cpXG2sUltcz8cXDrlONoE%2FMEGvG%2BqTeCZLJmuGqFyGz4iJ5PKvFiAMfvGpDKWqS1imsWPVHr%2F8ypZ%2Bln3AFdylCyWZCjFshJaVgHqFkjv1xaOx4ikrGJjlqXrjdaJk3g9ZizEP7blJu4rkLmK0%2Fy1ieh12v7607t0uAT7mhmN6QnTgMY8wIUXkyWSkwxbtoTp4mYsbVefD7tMAuydQBky55p8%2BB9IJMPbp3MQGOqUBK433HlBkQV7D%2FwzP1mrrjdNEXd168F25%2F0CRlZjiJxTi77W2cKU2Ta9g7tQyG2P8FP82k1GABECV44IWYNnIUcX7cgnotHjjAo6qfb871fg0kIc5ldBoFf5pf7qml7oPXZZXnJEEQu69L7tLlSKcx1tTPYCHfEFJEoN2xgpxtvCJuYHyLwzLZ3qtMLC48GTgB%2FIsyWNVB0fxUtcj9wBenFD%2F0qvk&X-Amz-Signature=0839046baf3a95e1b5e451517211a7cd9510fe5a792abb61bf06123c8a877d40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5FDJEKG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtbx%2FXX8ifBdcp7ojMhokOG0nmS9bJuDljK1RbcgA1wAiEAt%2FqpSvf1hFSgTenS8qsOr8EiYUnuz2cXi%2F2678kGaIIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE7s84sCHFNLBfgOyrcA%2BibCVDn3NLb25AgreVOgp9X2OJ1FZ%2BkRpPhfSXUWWyH5nRdN%2BcBw9jflrZz2bR3sqhAhl8GvVN8X7GP9a98ZxMPMCEzzp9cCh98GPwjcVaysrTSeT8OuwUejUOaMW43SlmHGly4a82y01YDeBQgL1lj0oKXzm5X9oRuoTYRa6pIKWhAZHMCq5ggD3SipniVzP1JOl1XLgFKahYUprtbx8XWgvLsC5hlNT3x0OsqiB9fyKvVir7fRkqEnxk%2BJJ1xC8p%2F9qa7rW1RRGeYE8qA5OQa9qCHmNucg%2FB%2F7ODVR542lM6wuRAbAQRiU4GvRoxDQZ4aLkE62uFwpXcMb%2BxKTLFuNAK3%2FNxkYFcE%2BfSLeU5u5%2FmGp4PAa6%2Fi62voM0zWnI6kTy6iNfCS6HER9RaZLzhbqDmaE5cpXG2sUltcz8cXDrlONoE%2FMEGvG%2BqTeCZLJmuGqFyGz4iJ5PKvFiAMfvGpDKWqS1imsWPVHr%2F8ypZ%2Bln3AFdylCyWZCjFshJaVgHqFkjv1xaOx4ikrGJjlqXrjdaJk3g9ZizEP7blJu4rkLmK0%2Fy1ieh12v7607t0uAT7mhmN6QnTgMY8wIUXkyWSkwxbtoTp4mYsbVefD7tMAuydQBky55p8%2BB9IJMPbp3MQGOqUBK433HlBkQV7D%2FwzP1mrrjdNEXd168F25%2F0CRlZjiJxTi77W2cKU2Ta9g7tQyG2P8FP82k1GABECV44IWYNnIUcX7cgnotHjjAo6qfb871fg0kIc5ldBoFf5pf7qml7oPXZZXnJEEQu69L7tLlSKcx1tTPYCHfEFJEoN2xgpxtvCJuYHyLwzLZ3qtMLC48GTgB%2FIsyWNVB0fxUtcj9wBenFD%2F0qvk&X-Amz-Signature=384e07ee83667f5b1809255e2d3a77e07092f0c76c4bbd87996e90dd65ea1695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5FDJEKG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtbx%2FXX8ifBdcp7ojMhokOG0nmS9bJuDljK1RbcgA1wAiEAt%2FqpSvf1hFSgTenS8qsOr8EiYUnuz2cXi%2F2678kGaIIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE7s84sCHFNLBfgOyrcA%2BibCVDn3NLb25AgreVOgp9X2OJ1FZ%2BkRpPhfSXUWWyH5nRdN%2BcBw9jflrZz2bR3sqhAhl8GvVN8X7GP9a98ZxMPMCEzzp9cCh98GPwjcVaysrTSeT8OuwUejUOaMW43SlmHGly4a82y01YDeBQgL1lj0oKXzm5X9oRuoTYRa6pIKWhAZHMCq5ggD3SipniVzP1JOl1XLgFKahYUprtbx8XWgvLsC5hlNT3x0OsqiB9fyKvVir7fRkqEnxk%2BJJ1xC8p%2F9qa7rW1RRGeYE8qA5OQa9qCHmNucg%2FB%2F7ODVR542lM6wuRAbAQRiU4GvRoxDQZ4aLkE62uFwpXcMb%2BxKTLFuNAK3%2FNxkYFcE%2BfSLeU5u5%2FmGp4PAa6%2Fi62voM0zWnI6kTy6iNfCS6HER9RaZLzhbqDmaE5cpXG2sUltcz8cXDrlONoE%2FMEGvG%2BqTeCZLJmuGqFyGz4iJ5PKvFiAMfvGpDKWqS1imsWPVHr%2F8ypZ%2Bln3AFdylCyWZCjFshJaVgHqFkjv1xaOx4ikrGJjlqXrjdaJk3g9ZizEP7blJu4rkLmK0%2Fy1ieh12v7607t0uAT7mhmN6QnTgMY8wIUXkyWSkwxbtoTp4mYsbVefD7tMAuydQBky55p8%2BB9IJMPbp3MQGOqUBK433HlBkQV7D%2FwzP1mrrjdNEXd168F25%2F0CRlZjiJxTi77W2cKU2Ta9g7tQyG2P8FP82k1GABECV44IWYNnIUcX7cgnotHjjAo6qfb871fg0kIc5ldBoFf5pf7qml7oPXZZXnJEEQu69L7tLlSKcx1tTPYCHfEFJEoN2xgpxtvCJuYHyLwzLZ3qtMLC48GTgB%2FIsyWNVB0fxUtcj9wBenFD%2F0qvk&X-Amz-Signature=6f2c65c19b70657f3328c06374562c5a8cbbedd0064047d788829a9d640ae683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5FDJEKG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtbx%2FXX8ifBdcp7ojMhokOG0nmS9bJuDljK1RbcgA1wAiEAt%2FqpSvf1hFSgTenS8qsOr8EiYUnuz2cXi%2F2678kGaIIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE7s84sCHFNLBfgOyrcA%2BibCVDn3NLb25AgreVOgp9X2OJ1FZ%2BkRpPhfSXUWWyH5nRdN%2BcBw9jflrZz2bR3sqhAhl8GvVN8X7GP9a98ZxMPMCEzzp9cCh98GPwjcVaysrTSeT8OuwUejUOaMW43SlmHGly4a82y01YDeBQgL1lj0oKXzm5X9oRuoTYRa6pIKWhAZHMCq5ggD3SipniVzP1JOl1XLgFKahYUprtbx8XWgvLsC5hlNT3x0OsqiB9fyKvVir7fRkqEnxk%2BJJ1xC8p%2F9qa7rW1RRGeYE8qA5OQa9qCHmNucg%2FB%2F7ODVR542lM6wuRAbAQRiU4GvRoxDQZ4aLkE62uFwpXcMb%2BxKTLFuNAK3%2FNxkYFcE%2BfSLeU5u5%2FmGp4PAa6%2Fi62voM0zWnI6kTy6iNfCS6HER9RaZLzhbqDmaE5cpXG2sUltcz8cXDrlONoE%2FMEGvG%2BqTeCZLJmuGqFyGz4iJ5PKvFiAMfvGpDKWqS1imsWPVHr%2F8ypZ%2Bln3AFdylCyWZCjFshJaVgHqFkjv1xaOx4ikrGJjlqXrjdaJk3g9ZizEP7blJu4rkLmK0%2Fy1ieh12v7607t0uAT7mhmN6QnTgMY8wIUXkyWSkwxbtoTp4mYsbVefD7tMAuydQBky55p8%2BB9IJMPbp3MQGOqUBK433HlBkQV7D%2FwzP1mrrjdNEXd168F25%2F0CRlZjiJxTi77W2cKU2Ta9g7tQyG2P8FP82k1GABECV44IWYNnIUcX7cgnotHjjAo6qfb871fg0kIc5ldBoFf5pf7qml7oPXZZXnJEEQu69L7tLlSKcx1tTPYCHfEFJEoN2xgpxtvCJuYHyLwzLZ3qtMLC48GTgB%2FIsyWNVB0fxUtcj9wBenFD%2F0qvk&X-Amz-Signature=02555b89677cda3132336c5bb6ce13c1bc1049020dab9fedad0ababba91eda5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5FDJEKG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtbx%2FXX8ifBdcp7ojMhokOG0nmS9bJuDljK1RbcgA1wAiEAt%2FqpSvf1hFSgTenS8qsOr8EiYUnuz2cXi%2F2678kGaIIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE7s84sCHFNLBfgOyrcA%2BibCVDn3NLb25AgreVOgp9X2OJ1FZ%2BkRpPhfSXUWWyH5nRdN%2BcBw9jflrZz2bR3sqhAhl8GvVN8X7GP9a98ZxMPMCEzzp9cCh98GPwjcVaysrTSeT8OuwUejUOaMW43SlmHGly4a82y01YDeBQgL1lj0oKXzm5X9oRuoTYRa6pIKWhAZHMCq5ggD3SipniVzP1JOl1XLgFKahYUprtbx8XWgvLsC5hlNT3x0OsqiB9fyKvVir7fRkqEnxk%2BJJ1xC8p%2F9qa7rW1RRGeYE8qA5OQa9qCHmNucg%2FB%2F7ODVR542lM6wuRAbAQRiU4GvRoxDQZ4aLkE62uFwpXcMb%2BxKTLFuNAK3%2FNxkYFcE%2BfSLeU5u5%2FmGp4PAa6%2Fi62voM0zWnI6kTy6iNfCS6HER9RaZLzhbqDmaE5cpXG2sUltcz8cXDrlONoE%2FMEGvG%2BqTeCZLJmuGqFyGz4iJ5PKvFiAMfvGpDKWqS1imsWPVHr%2F8ypZ%2Bln3AFdylCyWZCjFshJaVgHqFkjv1xaOx4ikrGJjlqXrjdaJk3g9ZizEP7blJu4rkLmK0%2Fy1ieh12v7607t0uAT7mhmN6QnTgMY8wIUXkyWSkwxbtoTp4mYsbVefD7tMAuydQBky55p8%2BB9IJMPbp3MQGOqUBK433HlBkQV7D%2FwzP1mrrjdNEXd168F25%2F0CRlZjiJxTi77W2cKU2Ta9g7tQyG2P8FP82k1GABECV44IWYNnIUcX7cgnotHjjAo6qfb871fg0kIc5ldBoFf5pf7qml7oPXZZXnJEEQu69L7tLlSKcx1tTPYCHfEFJEoN2xgpxtvCJuYHyLwzLZ3qtMLC48GTgB%2FIsyWNVB0fxUtcj9wBenFD%2F0qvk&X-Amz-Signature=68d3eecff4704a4a6d97f1757ceffa555536d3e26eb156cb5305df78b40f283f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BDPZFGS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChIQqGbz6efRJ50KJfdxj2fJyfxsukzEGCsNcos1AyOwIgEVl%2FWVCsu253%2FXp4q2q1QNxrnPKf7GSZYCxVRwYkTNkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BZsjUVYIf491vd9CrcAywFtUV1lShJV5MSoKC1%2BH9txE1B2A7iUdl6AqD6inv10dqc9TiNDUw3MQub%2F%2B%2BPL23VCtfDrYqm42L2yTIl1qRLwjE3G36XakJiP0JZx6E9Lde6hwSAY9TlrdATSA5hyNEbVhJcBJ48Wmm5QdB150VVEDtH69%2BdfrJN%2FApj2G3WUKZDgX7wV0IVZby4nZDm6ZQAP9ucnflMr7tjxK%2BlaCpUXns1Q7xXByO00xSxH0xOJUc0dUCOU8LGVaYtG62KybaulLDLKwMJ1EwmZ8OCgeXpveF67tRJJy9%2BShDudfUWRfvxXmN0IwE1sjSRH%2Bvb3lBl0j18e%2FOhiDGepAoOy%2FMro0eDPWHLz8b5vakLIXf%2Fn46kQ%2Fy7aokRavSFz4yeGu6UX3g4cwmoX%2B5pchAi8pMqhD7hd20f9yG5aEfYGu%2B1kVl4Mufdh4y9kBXhuoWMA6Z6CtZTi4lzv1SFA%2B6IHRCB0LqpKaXnvcf%2Bby8jseYTcdk7l7NUE2Y4qKTmBjk94dSWu9mnn2IwFRz2thsTSjmiOY063V6HpgzxBCbqsX4MquSMP6gwmP0kVduF9u4nXi4V4MbeRBR%2FeWS%2BA0wv7NepH07e4rv5QLOYCYKiorMc9O0AVS3otxsQEAonMIDh3MQGOqUBgGdX3QjxSeUB9L4g8WTCPTdPED1j8wUcnYaRrZ8wzec%2F12Ro%2FD8DfKgO5gU1NgZvWWhTimvI8xe0oOQcw2L4OOTm9Cx7hd8ObUeWLHQGBQwf6D%2FLL4Zs%2BtrLZqPZKAw1Yc0MI38L5DX%2FT4blmm9fkb7q7TexZEs%2BhvcrMnOqWP%2B62mnUt%2Bn%2Fzy%2BxbsmhVvn44SLu3TiqlBkL6WeN33DGfThJKQdJ&X-Amz-Signature=6a88a352db8d2df5cda5c32db97d2f26be9f9622e076a45834b2048cea1aa3c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6YZQU47%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLVF1C%2BTlATGdDqZCr%2BnNedvASg9FWz5lU5PZ6NRCS%2FQIhAPu04KZOCt%2Fzw3Kz1c0bveXQASx4nj6eh8KHufZDBzZiKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmKx6bWZZOXzakMnYq3AOf1DtwcstqQloYsO%2FY9bFcs0aXpm%2FLifTWgr6PNfOlOPrzAlyKaFV3DeBeaK5Ty%2FX88yQNHg2cUcL7lpBDRz88TBmH6MJPp6XQZ88YfH2vJM137quLjeJkXiCdAKUETYQBhZNVNXKdxL8tznqtisj4nZz5A9yTYMmWeYEDhdPkbW4X6Jo9yIEN6CD1ezQw3j9uYuRPGryCUCjvf4m3GGxE60VTvPL7p%2Ff%2BvkScnIEdNebNR7wh2dRL1BwfGW2O8%2BYdXhEy%2FU9wLIPYZTfaTFTRNvBO8BdORfsGQZvDyiLhTlpw6dfab5A7zZwqveZ8HneM%2FuWrfDtFrhYfXYYOgXrUJt43eTFCP87McdYEP3kNxTThRchNUnKdEMujp4hH8d8WMWFV%2BUsp9luG%2Fgazj2YCD%2F8iSgh4K%2FhpxBWkVivOrbMHFAGrvLYGyxrrv%2F2twSYFXqKV5EEYCkuRJ62VPoVWE%2FIq3gTq1%2Fpetj7kh0PINTonPenGb1T0Ei0WxpMb%2FDXAJLfnkSV1uJyQObUL8yKshu2iYMLTdjvvxP25zlnJMV8fUXlfQWj8%2BuEvZxM72tDrwsEgs8R%2BsVCmmF7NXrhjwuY2Z7Z1K5q8IDmpoRBQRXchXhIhtnoaRHExyzCh6tzEBjqkAeqAwpLrTwNb9QrvMy%2BtBgrtQOkN%2FyA3VWDPx%2BvGzRzroqVA6DmuFm1HKy8HEeipW%2BSxKOJ01zR5gD83j7h6du%2Fx4m2Qv%2B%2BBAHp6T7NTxQGa07CAc1LPbN4W1oQ1kdXW169E%2FXLm9RzPRmVWqsd5UAxv68%2BXEgDewwgJDW%2Br6bPQqMhRxHeE7OQG3NQAW%2BwmAGotg8TlSJkKwhe0DJ552UpRTOF7&X-Amz-Signature=7b37512bd2e0b5468d7bb4258b2fc312f3f0924e525c778a51cd2c8c0fe96471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626UABUNA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FTHA56mpcW7mqH%2Fo6c2JElwLamAt4u%2Bu92XeAxwo2%2FQIhANMSgl95uZ9uzlZN77ekWz3p5OAYx3M7QWP4CKOCoPEcKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqpVhNC55zXf0VLdIq3AOUOhA%2B9yrUV0zEfONz0N9r%2FXrTgKM0jfnKI9AFTTVNcMWHkUQIsjrsrLFSuzqcu5kb0%2FbPA5QLpdJE%2FHGMPJmKEQfASNw7rfxemaWPhDYhAs6PSAwG%2Fwq%2BicqlfP%2FwSespV8nWBgx52RflqoJUfb4YbwADpq9n6w%2Ft1k77dtovpUY%2B2VpJrAd09Ti%2Fy1lFY7yDos9eP2VlLkxIqH7TJxxKZFvFMSvp6y4BM9IglfCZ%2B5qn3jCECQuyjExwvg%2BY0JfSEQaIE0hxjBIoIriJ6Z1G2xCAPEPt6Iy62R1h0FK6S0sN3aQKaErzX9lefvGkm0C36xqww3jvhGCADxqlu2oefBD6Pmrk0IQu2GXjVO5S0vyYDsNcNHzE%2Fr1XADaad1AAVDXDvuHZ12k744c4pEyVCE681Qztffi8L06fm0uxRDJkMa12s74X2RHwJz5R7YD3vf%2FYymBMCsH%2FOtP%2F%2FNxmmfA27birZ56BYBoZrJ7VbpGHmVl2NhCnQPUbREdyLD6JdesyPE1qs7J%2FdYygA3aPrOM3r%2F5BrEfH8S84jUgL32J6WMZo9tJXdkVML9HOz6CfErDcWYfqsNLhaLqSpgXW%2F7kVvcLkKguh7ef0AqpIniEtMwV39NyjoAzm%2FzDY5tzEBjqkAYftFffI%2FG2QNnvsm3KFBZ3lu0OnmOQzG49HlGbt3PfKII3zcJBUTaaoghdLjmYxq3IPEV9Aa4TzCFzNtWoz4R2gTcgCcJN1%2FIAE7KM7Mj8%2B8Nbier2kOTtFNnQqTmm7OUEvrzMXgdTtHjhRfLzabRu8tBivZZlXIDC7vs0YCV%2B7xm1dvMRBz7a1ee7yrODrj3arblRIYY4Ot05Bf224c5m%2FrbSo&X-Amz-Signature=dac2ec94f0d14a824d9507c47930793e8ac8c7bfbed0cd72cb3d296012180401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5FDJEKG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtbx%2FXX8ifBdcp7ojMhokOG0nmS9bJuDljK1RbcgA1wAiEAt%2FqpSvf1hFSgTenS8qsOr8EiYUnuz2cXi%2F2678kGaIIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE7s84sCHFNLBfgOyrcA%2BibCVDn3NLb25AgreVOgp9X2OJ1FZ%2BkRpPhfSXUWWyH5nRdN%2BcBw9jflrZz2bR3sqhAhl8GvVN8X7GP9a98ZxMPMCEzzp9cCh98GPwjcVaysrTSeT8OuwUejUOaMW43SlmHGly4a82y01YDeBQgL1lj0oKXzm5X9oRuoTYRa6pIKWhAZHMCq5ggD3SipniVzP1JOl1XLgFKahYUprtbx8XWgvLsC5hlNT3x0OsqiB9fyKvVir7fRkqEnxk%2BJJ1xC8p%2F9qa7rW1RRGeYE8qA5OQa9qCHmNucg%2FB%2F7ODVR542lM6wuRAbAQRiU4GvRoxDQZ4aLkE62uFwpXcMb%2BxKTLFuNAK3%2FNxkYFcE%2BfSLeU5u5%2FmGp4PAa6%2Fi62voM0zWnI6kTy6iNfCS6HER9RaZLzhbqDmaE5cpXG2sUltcz8cXDrlONoE%2FMEGvG%2BqTeCZLJmuGqFyGz4iJ5PKvFiAMfvGpDKWqS1imsWPVHr%2F8ypZ%2Bln3AFdylCyWZCjFshJaVgHqFkjv1xaOx4ikrGJjlqXrjdaJk3g9ZizEP7blJu4rkLmK0%2Fy1ieh12v7607t0uAT7mhmN6QnTgMY8wIUXkyWSkwxbtoTp4mYsbVefD7tMAuydQBky55p8%2BB9IJMPbp3MQGOqUBK433HlBkQV7D%2FwzP1mrrjdNEXd168F25%2F0CRlZjiJxTi77W2cKU2Ta9g7tQyG2P8FP82k1GABECV44IWYNnIUcX7cgnotHjjAo6qfb871fg0kIc5ldBoFf5pf7qml7oPXZZXnJEEQu69L7tLlSKcx1tTPYCHfEFJEoN2xgpxtvCJuYHyLwzLZ3qtMLC48GTgB%2FIsyWNVB0fxUtcj9wBenFD%2F0qvk&X-Amz-Signature=b01c07463753008a6dbcc7aeeb16eceab49323dec2c352d9ad08dbd3887bd7de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJMXIB7H%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2Fz82IP3ZZOv4wayEydmZO7LctYLxWZJjNNa83RyIgGAiEAgC%2FIEJ6XWbYpwwasi2PQl%2F5Q6OYkJdtqd%2FC7tNPqXZMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKetLX5QzzaUq4B1UyrcAyF5u5NXWmckh5UPs6BeCYaIOFPDi0TXfo0Y%2BbAAXxqqnpNcG3dLjJKWuF7cole2oySnZR6%2Bi6npaU8LUukQlbxVYl3tDhebnltVIKxGvKWId2tLkdDtGIiieGo%2Bz39fy1na7Rz%2FYLmrH8YvB1VrlcgBbBwUOLbbuQy8SS4W%2B%2FcxuPY9WO2JOkIOT%2FWxCYMfGAnnRmsKCu64dXFRakCa9EQ0F2SKQRMXgBZIhMcwbrhcqZp%2Fjl2AZTzIdd2S4c16OtKs1QEOqQLHQYLklTV%2Bu8FG0v%2BgmoZ6xz7eKywIWCtEO1NwYjQFKaklVjlkjEBQ5nc7FFJgnJqYX27U5G8yPg0JlZx1Jn7XlWhnpOfjnol%2BsjCGhX%2FWrzIP%2BdwTaXDwhRbygqV4MdMb1NgKAXVndor%2BlOPYqtkgkm7ottXqr7YI1SeDdWIRBwznNHxcuxjn5j6HVGxGHuE%2BGRDrSjeKaiYq6z3pi%2B6y%2BkaRvELjFFAUKQ6wX3E73ZuHuZ72iVqhecSvOldg2w50qOaViuOsQAzYDf8bGpWf5%2BaWZpAqgku6UEpHRVThqZ5sMalOXKUKSHCf1gGc24SfZajY0Tk0J5GY%2BTBr7jKgiPGqyy5L4TbXPtvRRwXVLzlHT0rPMJXg3MQGOqUBK260g3E5Rq4Xcpctr3BEtoi50BD4%2FzcTbmBVbYtlyG5ivPcPat8QYsXjARGnwHLEnVTzDS58ysK8X%2FgILRCZPsu%2BSzBGjl8tdrPdQTExqTaubzTCsWgKlkZR62CMyOQjM%2FlGXtkFOzjmS0kVVY7UUecG%2Fcyi9wUiWZBdIwxiDv7T1aJWhdtyz%2Bn2BRXuYiO5jxBnelXzRAOhtMdgm8cLCDm58Fuc&X-Amz-Signature=affa83549f93c8f713382e75b5867165b0fde27c4894355ca5c8152f2d1717d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5FDJEKG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtbx%2FXX8ifBdcp7ojMhokOG0nmS9bJuDljK1RbcgA1wAiEAt%2FqpSvf1hFSgTenS8qsOr8EiYUnuz2cXi%2F2678kGaIIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE7s84sCHFNLBfgOyrcA%2BibCVDn3NLb25AgreVOgp9X2OJ1FZ%2BkRpPhfSXUWWyH5nRdN%2BcBw9jflrZz2bR3sqhAhl8GvVN8X7GP9a98ZxMPMCEzzp9cCh98GPwjcVaysrTSeT8OuwUejUOaMW43SlmHGly4a82y01YDeBQgL1lj0oKXzm5X9oRuoTYRa6pIKWhAZHMCq5ggD3SipniVzP1JOl1XLgFKahYUprtbx8XWgvLsC5hlNT3x0OsqiB9fyKvVir7fRkqEnxk%2BJJ1xC8p%2F9qa7rW1RRGeYE8qA5OQa9qCHmNucg%2FB%2F7ODVR542lM6wuRAbAQRiU4GvRoxDQZ4aLkE62uFwpXcMb%2BxKTLFuNAK3%2FNxkYFcE%2BfSLeU5u5%2FmGp4PAa6%2Fi62voM0zWnI6kTy6iNfCS6HER9RaZLzhbqDmaE5cpXG2sUltcz8cXDrlONoE%2FMEGvG%2BqTeCZLJmuGqFyGz4iJ5PKvFiAMfvGpDKWqS1imsWPVHr%2F8ypZ%2Bln3AFdylCyWZCjFshJaVgHqFkjv1xaOx4ikrGJjlqXrjdaJk3g9ZizEP7blJu4rkLmK0%2Fy1ieh12v7607t0uAT7mhmN6QnTgMY8wIUXkyWSkwxbtoTp4mYsbVefD7tMAuydQBky55p8%2BB9IJMPbp3MQGOqUBK433HlBkQV7D%2FwzP1mrrjdNEXd168F25%2F0CRlZjiJxTi77W2cKU2Ta9g7tQyG2P8FP82k1GABECV44IWYNnIUcX7cgnotHjjAo6qfb871fg0kIc5ldBoFf5pf7qml7oPXZZXnJEEQu69L7tLlSKcx1tTPYCHfEFJEoN2xgpxtvCJuYHyLwzLZ3qtMLC48GTgB%2FIsyWNVB0fxUtcj9wBenFD%2F0qvk&X-Amz-Signature=7737be9558cbcf5db37a2d33324cf9784a1c2b3e7c0a49d9c04705ba889867a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H7L2OXK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGNQHpXyh%2Fq3koVy1ckp1gb5U%2Bq5alpqgjZ%2By0FUSSfwIgaULTwaDlsnKY1woTh%2B3jkXIryTXZ7huzckRvjYEhGigqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkf2ucNXvi0oV2CjircA89fCpGkMLaSwNYDVijXzNyFkecoM%2FQeaF3ww0klhzWKMMEojnmhRRZxL5mR2mrrZGxbbLgp92poGNQR526ZLUbdztCFRtNwCpMxrxSHh6E4gO4MlBIug4%2BVTxQMkuM04br%2BZQzDSI45iFgDEwalRJFoCV7ZGg5wvo6NvMB1pp7RI6CWHMshgdvhK0NzN1ErRQfs9vOBQi1uEn%2Fk4ShuCT0Q01QWCxmF%2BKTAZp58Xdh63ng8SThcS68DYEpIaHUSi6txSSxkFCpIx0nIjZc6tIJ2F43GZN39k67OVftUuspf9bgOWmbIIcldpB%2FvakGmBsbe478wuVtjaZQavtRNcJxQ%2FNvoP8DwmncbbB9eMk%2FH5TaAKIwtwLya5IDt8%2FXYvNwIWaTbZ5U3pfznqCfi0D53%2FApDAvGeGqgqMJao3vJgwyfQg%2F7Dr%2F5swcU14iuHZE%2BMIy2RyFuXgK5Pl%2BsTsHMxELuX4WBlfq7h7l4Na1kDMFXcGCSjOPHuU%2FEJd%2BNEMjiYWzLpkiENIl4XkWJdkx8VjngBsfq2hy9COTSAarAkRPNu8Fbjmuo4BuRvH%2FRMB%2FQdhNY47rQQMdcQeqq0%2BdlKuuN6LOwQ6kIHFYnjWo9lmHCJh4U0NOawAaqdMKvq3MQGOqUB3ayjexidz79zBa83NZF1UIgJYQbLDW1LXn9TlBeAAANj0MB2o6uFpiP9NNMjS0wjsSVwh%2BSKqGz3VwuSRgoP6EhQzxumRTfHzh1MjFfyiUZ4HTFfFQPd%2FcE6wrSS7thMSr%2BCdPl2MXIdG4qWVdZbGO%2Fq%2F%2BhdvOZv%2FpcaiZMuJNCN%2BttIgelYprXoE0al6kvDKtL0XubFAEAuJoQilfvB%2BGX7rgQK&X-Amz-Signature=7c90cfbbcf4d2af999610c3f69ebe2eceeb06fea39a197789a07981449b6d790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5FDJEKG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtbx%2FXX8ifBdcp7ojMhokOG0nmS9bJuDljK1RbcgA1wAiEAt%2FqpSvf1hFSgTenS8qsOr8EiYUnuz2cXi%2F2678kGaIIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE7s84sCHFNLBfgOyrcA%2BibCVDn3NLb25AgreVOgp9X2OJ1FZ%2BkRpPhfSXUWWyH5nRdN%2BcBw9jflrZz2bR3sqhAhl8GvVN8X7GP9a98ZxMPMCEzzp9cCh98GPwjcVaysrTSeT8OuwUejUOaMW43SlmHGly4a82y01YDeBQgL1lj0oKXzm5X9oRuoTYRa6pIKWhAZHMCq5ggD3SipniVzP1JOl1XLgFKahYUprtbx8XWgvLsC5hlNT3x0OsqiB9fyKvVir7fRkqEnxk%2BJJ1xC8p%2F9qa7rW1RRGeYE8qA5OQa9qCHmNucg%2FB%2F7ODVR542lM6wuRAbAQRiU4GvRoxDQZ4aLkE62uFwpXcMb%2BxKTLFuNAK3%2FNxkYFcE%2BfSLeU5u5%2FmGp4PAa6%2Fi62voM0zWnI6kTy6iNfCS6HER9RaZLzhbqDmaE5cpXG2sUltcz8cXDrlONoE%2FMEGvG%2BqTeCZLJmuGqFyGz4iJ5PKvFiAMfvGpDKWqS1imsWPVHr%2F8ypZ%2Bln3AFdylCyWZCjFshJaVgHqFkjv1xaOx4ikrGJjlqXrjdaJk3g9ZizEP7blJu4rkLmK0%2Fy1ieh12v7607t0uAT7mhmN6QnTgMY8wIUXkyWSkwxbtoTp4mYsbVefD7tMAuydQBky55p8%2BB9IJMPbp3MQGOqUBK433HlBkQV7D%2FwzP1mrrjdNEXd168F25%2F0CRlZjiJxTi77W2cKU2Ta9g7tQyG2P8FP82k1GABECV44IWYNnIUcX7cgnotHjjAo6qfb871fg0kIc5ldBoFf5pf7qml7oPXZZXnJEEQu69L7tLlSKcx1tTPYCHfEFJEoN2xgpxtvCJuYHyLwzLZ3qtMLC48GTgB%2FIsyWNVB0fxUtcj9wBenFD%2F0qvk&X-Amz-Signature=7771bb43898b3b37e043c2535617d6c32316a05c9c3a24569449746dc8de2419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR4JQT5D%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWPbnKXtD69tWnLOpdM5SG8aLDs5mYKxgQAMZcFCZTKAIhAL%2BlUYM%2Bs0XhKIJtA9Qx%2Bah2jtd91jqGfIfDNIOTJmW5KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKxsz3vZvqLN%2BxsTIq3AMGzEKPeE1%2FZKq1vAxZgUA7Rq0BNBgIhwcbHgCIFgk0d8qadWM0%2FWe2s4GbMYjN1Ijy8pYDuXNmv5y5D%2F7xw5c8PI25AcEyBwquYwe9vgEZ2prTZtlwLH7WzSvaYVNSq2apd5s1q2aS73dtI5ba1AOlmBtosl1ZGzSWHRo03uAZ1Z4%2BW8rvH6nYIZAfBUi9%2BfBxfG47FTvOVA9yqkMVCqytLeyALFHFTdcc4oK0pd0EniapCb0kUfYJdrZp2VePdMIF628mqR1364Ej549p0p2hM50egnzVTjGyviq0qIv2y64UsV9acl2HuwiFqs%2BMEe%2BHKPHJiCt67gswEm3JRBdVt3J6byMm2oY3J8GoWbT%2FJmlYbhpPKn21i%2BBKBQBdkMzX53RDywQ8wNapCD6SDMHOguu8k%2FiCcf7TSJRXq3jWEGuqMA7nUO%2B3BEk1B1j1kqDwoN0qQqGNjfnFJ51%2B5NPAU5njdYqY6%2FCwSigyTtzPF4SxPBTybLOS1TU1AoqwLHKsbPUn0tGzoayEUPd6PrT%2FhztjdfE4VCxz%2B7cNp9HcvwIfW6XYzsWMTYjGWwdwTyNBYZ%2BdOxt991pXiPYHppEEtVxnAlxKPc0W3d5dn9ayaaFClyK%2FQoBB8YCxOzCr5NzEBjqkAQrQ1YPrGjyalogqrVuZ4IdApTiezpqW7prT%2B%2BCfw9jZMBKNAo2p7omg08vep5IXzls%2BJGml2%2B9yP6Yb5hGeSB%2BrP262eI2QSpiS6vXEz8e1y8rTW0B1cilBbJxPdxHZoMYwUCDQAVutEGL85vOgz%2BrudWfpWQ0L8ebBspdPvpJJY1UeJCuCg8XCeAM4Fc5EHPe96qaHAJ99CaffYmwmAhT4Xa7T&X-Amz-Signature=46e678ef786e0892f5c204e727a118b6aa462cfacee0f81eb97a0fafd0ff85c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5FDJEKG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtbx%2FXX8ifBdcp7ojMhokOG0nmS9bJuDljK1RbcgA1wAiEAt%2FqpSvf1hFSgTenS8qsOr8EiYUnuz2cXi%2F2678kGaIIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE7s84sCHFNLBfgOyrcA%2BibCVDn3NLb25AgreVOgp9X2OJ1FZ%2BkRpPhfSXUWWyH5nRdN%2BcBw9jflrZz2bR3sqhAhl8GvVN8X7GP9a98ZxMPMCEzzp9cCh98GPwjcVaysrTSeT8OuwUejUOaMW43SlmHGly4a82y01YDeBQgL1lj0oKXzm5X9oRuoTYRa6pIKWhAZHMCq5ggD3SipniVzP1JOl1XLgFKahYUprtbx8XWgvLsC5hlNT3x0OsqiB9fyKvVir7fRkqEnxk%2BJJ1xC8p%2F9qa7rW1RRGeYE8qA5OQa9qCHmNucg%2FB%2F7ODVR542lM6wuRAbAQRiU4GvRoxDQZ4aLkE62uFwpXcMb%2BxKTLFuNAK3%2FNxkYFcE%2BfSLeU5u5%2FmGp4PAa6%2Fi62voM0zWnI6kTy6iNfCS6HER9RaZLzhbqDmaE5cpXG2sUltcz8cXDrlONoE%2FMEGvG%2BqTeCZLJmuGqFyGz4iJ5PKvFiAMfvGpDKWqS1imsWPVHr%2F8ypZ%2Bln3AFdylCyWZCjFshJaVgHqFkjv1xaOx4ikrGJjlqXrjdaJk3g9ZizEP7blJu4rkLmK0%2Fy1ieh12v7607t0uAT7mhmN6QnTgMY8wIUXkyWSkwxbtoTp4mYsbVefD7tMAuydQBky55p8%2BB9IJMPbp3MQGOqUBK433HlBkQV7D%2FwzP1mrrjdNEXd168F25%2F0CRlZjiJxTi77W2cKU2Ta9g7tQyG2P8FP82k1GABECV44IWYNnIUcX7cgnotHjjAo6qfb871fg0kIc5ldBoFf5pf7qml7oPXZZXnJEEQu69L7tLlSKcx1tTPYCHfEFJEoN2xgpxtvCJuYHyLwzLZ3qtMLC48GTgB%2FIsyWNVB0fxUtcj9wBenFD%2F0qvk&X-Amz-Signature=abb6fbe6f562f1272ebe67b85c0496b03cbdb25744d84dec04b8396b4abd58be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNAEARTN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNyBuYt3joRG6buYY8Y642SKE4QB%2BVW1Avh%2FrmdCB88AiBt7NJgl%2BSwfcWS2iBECjgyVbm08ZUnm8YL%2BVZeW6yL0yqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvKKnMK5Sv1xXvKSAKtwDnwKwGhGEzu4tHx4nVuPYajZgk31jYa3rAg%2BS7XdEXNsPlSjjOGH3F2d7Umk5uodeN%2B4Uid0FRak17%2FDxVKSV0xrEjFtUfim%2BgwACIE%2B4Uw%2FA68onmxC9UQVYWE7hvQVmaFPVRTi72nW%2B1hdVfiIp7ybfFGlSY7APPoMq%2BmK2P4c7%2F78mT3ki%2Bia%2FeEoasJuHnn5UNpl0V4QMU2W9KJbXMNkPc7DjGzXgeT%2FGj5KvubwiPeAJOSf5RSj9cH8QNK5%2FOzDEeki8m7uPEjAhPqzkEyqab0aZLh%2F%2Bohy3MwRAoizmY9jPCm7GgFMspNTWy3ZzTgMBMwYHHkHpAmcffgii0YnHtP2vQH2uOlyTiPtuSRXbOH9h5EUaCwumGR3j%2FvVG%2BQYsapPsz%2FcSC7sQh2pcJIfHvF1Yl%2FijCjJVyCUOMeC2w4zMhPUEdRJda33rU2h2FfCOASYtHdGz4TTmk2rwnx2uIUzqzv4fgAqIrmYSlEAUnUrMSWIeA7Z25ftNUlWHFGAOP056JBFlNn5UVpJ%2BTZJXmH4%2FsP2Rv3P6rmC6s5w%2FlUr1tClQv%2BIH96r273PZ96NooW99VYIHDBDxi7HXRoltjjJgjEA%2Fu3JF3%2BW6MSzmUbqo8mZJ31iIcIEw3%2BjcxAY6pgFj1uwc9ZqJqhtGoUVP8Kt7GgGkSXjObQoG0fQuwKhndgmZ1QfFsEqR8dYbi9khpb2DvvyOs2ZCqbr5y3G26%2BCpekknKx19GlaXMae9skdVt3XuitjrWqzqNRh4AcPj3D809MU3nv3HrqYKisRTWRVoudt9LDY%2B1k9YJ8WXKfowV3hUJ5F2%2FangNor%2Bh5apDU6OD84I17acfD3t%2FacTcLeNUhHxvyA0&X-Amz-Signature=06093528a622909417e47d4825040aff1362bf621292084a4057302d0d1aac8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNPH6ZHI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK7FWp2iwFhBeS%2FWTfJB7glqR04NpAgacSYI8z4wbGrQIgHe%2Be3cav4fIUypwl4NiRNovr%2BGB45cxb6j8%2FeEXvyzoqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJy1ZpOW3cBQyZSJircA9WeNMBeQHTliI01FfSwO0wbMW9nu46GfqBTnkoOt7DqKwl2x1S6o%2Fr1ClP7LnIB4PHWycpTywTnq3WS8vH2OLIuEedypCg4FqrWREHXP865RHVtjzejJuGzZ02iVBZI%2BTTE6j%2BRz1f5jQtXpfiTSWqTDP03qUUmBcyIqiLRZkcw8Pf6979vWO3RW4TXedkfKw1tLEZv2qB0MtihIB6s5H9CAc0Z%2B6BnTPtnSLm5tsPUvJqolfSaMFmC1fgyhHRifKZwFdf5M%2Bd%2BIqECMP%2BcGR53rV3lNVZG3TnmsZkpHfRKqxFCJ4F2Ko8iLmYwD8hMd8XK9nL51aExbAW2jm6bNEeQheBQRgwtKlKxnJQCP%2BalH5DkqftKQMMz%2FlCDah71AKBHBecf1igaqZu4D1AQPm1lVSgoTiU%2BXvE%2BXJHBB0nY169q%2F%2B6E2UkMzoKG%2FeUUgCFqJzwWMpMWe%2F%2FEHCTAuyhoHCCZeHXiIWhukgZ6GfS8B9s%2Fq9XWFH%2BpeEEOlwU6J6sUZEjYdwioYsAd0BLJ5B6BC24rxyhvdMSYQ8oLwgOexalh6gu1y8fjKyDYXCm%2FzBi3DAlJ199u6BQ4gnzJvr1B8wcBHxKhLWV4e4r9TBwcVV%2BAVunYysHDK2c8MKbq3MQGOqUBko1XELlMHa%2Fn1XLsoEprefiSUQs166zaXvsibL%2BUFAR%2FE8bN5Ivh84vEgNvhmQX%2B2ZdR33sXvh2KtDldqJ6S8s7YQob0fm2nyn5th0Skb%2FTvXC3v5c32Uf8Uv%2Fd1ixB%2BXnQOP7wnJMXOzVs6rG4fYVH%2Buk5KqVzcMK5dJ9R7eVl4pI2CASzx%2F8JAmqDOVonHncLuPFua5yB3Zxjuv48%2BUyEFrRd9&X-Amz-Signature=47cf5788d59505488dce08d3573110647270b7867f29aa5dd2955b62a9ebde0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KH2X3UD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4M8Rvx9c39nhvN4SqL4g8AAHdZ2kjDLgytV1tYRwlkwIgYhRMCjCbRbZEZs7it3FlbPf0tayL9zMMIuf5zJSsSfAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSDvThLaIlAfcCWvircA9e%2FdYZJAwi%2FgWCP4smkMuS9lcAjkuAQhr6WW643swdhHblzFHpTQZZacM97xGh1NZfzxCGaRhHw3%2BtH5ATY37NzltEuHL9SSI2c666kDuJL8UfaTVqQrTSzVSlhy3EAtuGXwFLPAbvszxBj2SEro96a%2BzshRJwX0Ht9ooGMiPNib25OgCQsCXK7c5D6wLy70ndbsRWlxxNo%2F3yYS2IhAbmB8LgJXZKPFxfuzcUZ6N9nmK6JWtVgsXtwC1LFWebwyhhGu2NVnFcG9d%2BUn9OaSMtoBkcpf%2FYyWDKTxD%2FqJfZP7SbBULe6qfhto3aaw8Gb3cjDXNkmsxzlcFrw31XnxYPOdm5mGMycLGX4tJzaAZMWhj0VvwL9tTBs7tyUORJFJDbIr63tBhfRU%2FvAcvRuYjhvdEpAF4oFLyJf9kYbos97Kak692fYxvilcqC1arLJ0%2FK%2BAp78VD%2BRHpjwg2A6qwEwRfKPt9YpBTwuSP7NambOO4C4pVhRZyRKIpbNfYPevrgHpAW%2Fylxa%2Bji7DseRvacQ3IbaxLM5UauX8ZsD6RWkeesyZTkuLNsk2p8lYeTcArraQoxeiAnPsrUX8stkeiWAMOnya%2FrDReEEYf3RaiIntoDAP9d%2FuCzJbUZeMNTh3MQGOqUBKjYyvz%2FWEAgimDKlRUUulZdGVQqI0FYFhWEQxczK0eiNFUmNgyR94uzA9Fl0EfLEMEQm98uNXMX%2BNeKfI%2F%2FbVCNF%2Br8XDLHH8QW3o6yuffUS7zoSqzS%2BHvXq7StOsPV9rpo3j30g%2BGfQzBmlq%2BynBIxbC%2Bw7CK6qzdkfzgiVpS0%2B7YLmK7flPBLTfk3G9OGI4nLyH6y6FnT4Gr229MDgm%2F74hd7m&X-Amz-Signature=f68c8f273b113383e1b815d7d1c98e11625934e921e8f37b570e6ab310b0ee92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VFZZ4GH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsgqH%2FxE4vMUmilmOr07wIKV8RSmiNWnFON1USjcUDmAIhALrclCZZWliYLBN0U9C%2BuipSY8ge5CBkkuyPDQLoWsjZKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuPSQaN9DAXIcgf7Qq3AMp5srb5gXeFxic60DsB5%2F9%2FwmPzv9bkRSYzVQtfzPbH1Lr3uBSBEu6K8RShMqGlXI1v8ZRd2ePZveF1JvaSFLJOflz%2BMBU%2B2RiwRfFZt1ocFC6CSrGMbzR0mU2rq%2FZtZWZngBnclZLnr9xvarbvpaYxng1wmAKsvHFYNAtZuGV0GL0BBuCrsKahU1moNfyehAd9NowVEz4zwD7yit8jJp2VPyPs4sh5fMHyaMWsDGlbyUE0ZGb%2FqFM0nszYbBWuvyAmafi1f89VvEE2sLEw%2Fs9Qa0UMWLr%2FxPo8dpCC7NYukrp9sCmDQ%2B3jVa3%2BY1We%2FpAclg39DeFO9WdIkqlUXcT9hwnuiU93XTDLohxDX5Xy7nll5bCFL8P8xMC9EUaPxaG95r3S74euDiUEdgvoTzRinn6qkj9n095Wu2iT8AT7Eu17%2FvH4AwwUIfSYSNZCRUftnZNRfqILhq8Zf8kF5PPQnYD8S3UAhEDb5bXy6XazfyNEdSCHv66ehcWDGq%2F8hN8G5w3HQWsq3OWWkaQUonIb3q1PGjSogKDm3AARthEL1bRFELnSdEwDdSNaJcN%2BtR07uOTqSq9BNF8WdljFtpI2Q9FYAWWy9uOXUUNrqo7iFB3rK6Dw44ChKunIzDQ4tzEBjqkAVM6TbTt3WVd5l9gUnyFB4CeVdR2qYLqhjO3faCYeaJghclrpojv5hV4y2RyHQJ9M6IbuSKC11bUiVcVClflo3xO3OAT589VZsNOW4DxEPk37N1dDE94cldj5Jt1CAZ4ao5Kj3dh9N9PkXewk8Lzi%2B0qcrdz66eNTRsRpCDHliW7ExIsPkIFzW31U2xnIX9rt5KhESuins3g5eDEjHQdQQR1ACRp&X-Amz-Signature=233535fdefec71f094d9be1d769663d557c91ce570fd026f6a30a4cbf320333f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK3TDM7K%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FNeIQydj9NYFQGAEX5%2FhhSnaJoi%2BN6nigB5aXYRZ9IAiAbs05haewYkHT021n8P9xqn36GP9g1ZFOsJn91EoFEjyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN0WVumaxCkvNpfHZKtwD16V07KGhniaUalLgh%2By%2FDnaVOL8NA7%2Fw7odJmX3vVnQWpQ0i%2Btu3sjJbr48%2FdB%2FPvNu5cyhH76Gw2bZ1ebNMSWDk6sDtkmJZYSsVS5nq83guusEPKtepo%2FzE1Lh1kfyl02hpFqMTX6sN5c5NzDT9S%2FqOX6MGRPLOFhY7%2Bn%2BnsK4i71hhXhxVuKcBKPzVGhOhsB%2FHQq5xWqcAS6VX4VzBkYf7Zb2rMkWePFLpUEzpqr0GWlxevTwmCE4SesXmxryFa2%2FnOHjLbnl%2F3mQeYNMRarUN%2BMToiUOp09ZsVp2Wmm%2BbbmPXpBTqlXyvqEd2CsHVq%2BLSys45ZgaGslJYKMPyBk4WgftftNBdfTv%2BxRA9vAsy8vNHzyLNa%2Ba6oqk5KK8MSpwdgbUiURCAajREuaPvFMYDkatSfmIfI6XC85vRZweGd1Pg%2BGJUkJB82d1%2F46wBfEhz1h36U%2FA8OuA5qoaJt6B83Eb2ARxIK3VDESrkHNLU5T%2FnuYBB%2B3IUdFUEe8M8n7G8vFwU6FAwIUptO825bqhSIFlUP8qIKAVOfxSimTWMhMXixTYQXY2%2BfPEf9mFEg%2B%2Fr7NLDG83P1EIS5DY%2F%2BRD8%2Fabd7b78U1iZAoF6AkZLAo%2FdCYh8Q5QIsHYwoejcxAY6pgFllsmrSc9ls9azx%2BdHVVzMmOkSmXcGITmR7za40YGCeqFWhYsAqE1rHpMgcOdDR4qUTwIsAP4aqX%2BXBSkm6QfPWL7koJAKsdqoMQpHAHYhFz2pU3P0Nz31k0LkrEdwsoKTTO3IQSv0Z8UQoChbZ2zFmz0PW7eF9iH4sYW8O1dYuFEWmSJK1QUvqc2x7g1cqiHagYSc3ZbkzYNevf6p%2BqSmTeOKwlt2&X-Amz-Signature=e9c08c2492aabaa1a76d2b4af339819fbe7392f7843c9f4b1580ae747a3ef35c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5FDJEKG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtbx%2FXX8ifBdcp7ojMhokOG0nmS9bJuDljK1RbcgA1wAiEAt%2FqpSvf1hFSgTenS8qsOr8EiYUnuz2cXi%2F2678kGaIIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE7s84sCHFNLBfgOyrcA%2BibCVDn3NLb25AgreVOgp9X2OJ1FZ%2BkRpPhfSXUWWyH5nRdN%2BcBw9jflrZz2bR3sqhAhl8GvVN8X7GP9a98ZxMPMCEzzp9cCh98GPwjcVaysrTSeT8OuwUejUOaMW43SlmHGly4a82y01YDeBQgL1lj0oKXzm5X9oRuoTYRa6pIKWhAZHMCq5ggD3SipniVzP1JOl1XLgFKahYUprtbx8XWgvLsC5hlNT3x0OsqiB9fyKvVir7fRkqEnxk%2BJJ1xC8p%2F9qa7rW1RRGeYE8qA5OQa9qCHmNucg%2FB%2F7ODVR542lM6wuRAbAQRiU4GvRoxDQZ4aLkE62uFwpXcMb%2BxKTLFuNAK3%2FNxkYFcE%2BfSLeU5u5%2FmGp4PAa6%2Fi62voM0zWnI6kTy6iNfCS6HER9RaZLzhbqDmaE5cpXG2sUltcz8cXDrlONoE%2FMEGvG%2BqTeCZLJmuGqFyGz4iJ5PKvFiAMfvGpDKWqS1imsWPVHr%2F8ypZ%2Bln3AFdylCyWZCjFshJaVgHqFkjv1xaOx4ikrGJjlqXrjdaJk3g9ZizEP7blJu4rkLmK0%2Fy1ieh12v7607t0uAT7mhmN6QnTgMY8wIUXkyWSkwxbtoTp4mYsbVefD7tMAuydQBky55p8%2BB9IJMPbp3MQGOqUBK433HlBkQV7D%2FwzP1mrrjdNEXd168F25%2F0CRlZjiJxTi77W2cKU2Ta9g7tQyG2P8FP82k1GABECV44IWYNnIUcX7cgnotHjjAo6qfb871fg0kIc5ldBoFf5pf7qml7oPXZZXnJEEQu69L7tLlSKcx1tTPYCHfEFJEoN2xgpxtvCJuYHyLwzLZ3qtMLC48GTgB%2FIsyWNVB0fxUtcj9wBenFD%2F0qvk&X-Amz-Signature=5a1f5275bcf8ef2cc96797d4784842a2d577310a52de0106add938cbb7bca71e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5FDJEKG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtbx%2FXX8ifBdcp7ojMhokOG0nmS9bJuDljK1RbcgA1wAiEAt%2FqpSvf1hFSgTenS8qsOr8EiYUnuz2cXi%2F2678kGaIIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE7s84sCHFNLBfgOyrcA%2BibCVDn3NLb25AgreVOgp9X2OJ1FZ%2BkRpPhfSXUWWyH5nRdN%2BcBw9jflrZz2bR3sqhAhl8GvVN8X7GP9a98ZxMPMCEzzp9cCh98GPwjcVaysrTSeT8OuwUejUOaMW43SlmHGly4a82y01YDeBQgL1lj0oKXzm5X9oRuoTYRa6pIKWhAZHMCq5ggD3SipniVzP1JOl1XLgFKahYUprtbx8XWgvLsC5hlNT3x0OsqiB9fyKvVir7fRkqEnxk%2BJJ1xC8p%2F9qa7rW1RRGeYE8qA5OQa9qCHmNucg%2FB%2F7ODVR542lM6wuRAbAQRiU4GvRoxDQZ4aLkE62uFwpXcMb%2BxKTLFuNAK3%2FNxkYFcE%2BfSLeU5u5%2FmGp4PAa6%2Fi62voM0zWnI6kTy6iNfCS6HER9RaZLzhbqDmaE5cpXG2sUltcz8cXDrlONoE%2FMEGvG%2BqTeCZLJmuGqFyGz4iJ5PKvFiAMfvGpDKWqS1imsWPVHr%2F8ypZ%2Bln3AFdylCyWZCjFshJaVgHqFkjv1xaOx4ikrGJjlqXrjdaJk3g9ZizEP7blJu4rkLmK0%2Fy1ieh12v7607t0uAT7mhmN6QnTgMY8wIUXkyWSkwxbtoTp4mYsbVefD7tMAuydQBky55p8%2BB9IJMPbp3MQGOqUBK433HlBkQV7D%2FwzP1mrrjdNEXd168F25%2F0CRlZjiJxTi77W2cKU2Ta9g7tQyG2P8FP82k1GABECV44IWYNnIUcX7cgnotHjjAo6qfb871fg0kIc5ldBoFf5pf7qml7oPXZZXnJEEQu69L7tLlSKcx1tTPYCHfEFJEoN2xgpxtvCJuYHyLwzLZ3qtMLC48GTgB%2FIsyWNVB0fxUtcj9wBenFD%2F0qvk&X-Amz-Signature=e64b03a8fa689b8ca513c0792ea28b3982b3df11c7aa97abe65ab380b24e690e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCSG5FM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoHGF2gUirBzyIUr%2B%2FANMP%2Fn7seBwOVnj12vrDusKAWAiEAnkKuXP9sU1Ryeq1mA3AjrsSDr%2BSAsB8crRuBGWpo5%2FIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4MBda9b1opJjmFpyrcAxwqzL9KUaEONu1PJm7GqyVoZ8iV4D6yC58WhOGxwdJdfrgLroiHbEQJ%2BmBElVwo%2Byv3wGeXpHK%2FW6AiNyW32BEseoNCBjS1kroxq0QjW930V117KT2rbOHWDygAnWUtUqwHTT9sXPMX78sdfrCpBxOmsjqHcpwza1dzZjCAfsuHV%2FO8ff%2Fqc%2FaNIOOpMNct3YLSO1S6X7fo8Ucw2MWdF77CGJBOTTRlx7zgLVsPPDbUpe2sdBpU4bUSgNercFwEsE4xTcTUSx9yWobuaolNdSkzo8uQuazZqdC%2BuURovX%2FTrR2N4pf3E1Xrl0V1%2BTlQ%2FDOeFCM2Unrw9DAV2s2IRioMwlCtJYWn85AhmsH3OrYR9HVcA6O5ddUWdDE53h%2F8eJNmJSwoWe%2BU5mK0W0KEQjaenzG3S0lfql8uaW6zD8P5wjbif8idYGFg%2B9IxZzOcIVblZHKcd7EKB7IHJ5QZ67QDKfWTB7v5YIerPsMJ6AgkZJjfx6HBG0l9x1UQfW7WTsQhwuwELAitR3fKy%2F8peywJRKyD2t7New0iOfW2WhvleaU7H887CfYXdmFzpaDdbBZlRNi6BtdpYZALjg6LUKB7tkGGf43yWfSGdnUqEPZcpGiAcDMHwHNYzK3ZMIDr3MQGOqUBu7%2B2c4QRqlPTVBnODK5LPA5U%2Bt39lH6S5gddSOA55xLB80JblwSTYywQt2fsixYcIwYhyiTiMtnwo19j5i5AjVcbp14g5Gr9TdhwW13V8vTKD2IA3V1gEJscoo%2Fnhd0ZjwYuOCh7ffO0U879d3VlJywGbe9AjLUloz2nWGcLQ3eQNU%2FQXChd%2FV71o9nRQ5WcrEtc6f9iplCPeZaxnC9Zb9nGvxP2&X-Amz-Signature=fe3c636b61652f23f73ea258c877460b2619708e971b559be13f5351780bbec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCSG5FM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoHGF2gUirBzyIUr%2B%2FANMP%2Fn7seBwOVnj12vrDusKAWAiEAnkKuXP9sU1Ryeq1mA3AjrsSDr%2BSAsB8crRuBGWpo5%2FIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4MBda9b1opJjmFpyrcAxwqzL9KUaEONu1PJm7GqyVoZ8iV4D6yC58WhOGxwdJdfrgLroiHbEQJ%2BmBElVwo%2Byv3wGeXpHK%2FW6AiNyW32BEseoNCBjS1kroxq0QjW930V117KT2rbOHWDygAnWUtUqwHTT9sXPMX78sdfrCpBxOmsjqHcpwza1dzZjCAfsuHV%2FO8ff%2Fqc%2FaNIOOpMNct3YLSO1S6X7fo8Ucw2MWdF77CGJBOTTRlx7zgLVsPPDbUpe2sdBpU4bUSgNercFwEsE4xTcTUSx9yWobuaolNdSkzo8uQuazZqdC%2BuURovX%2FTrR2N4pf3E1Xrl0V1%2BTlQ%2FDOeFCM2Unrw9DAV2s2IRioMwlCtJYWn85AhmsH3OrYR9HVcA6O5ddUWdDE53h%2F8eJNmJSwoWe%2BU5mK0W0KEQjaenzG3S0lfql8uaW6zD8P5wjbif8idYGFg%2B9IxZzOcIVblZHKcd7EKB7IHJ5QZ67QDKfWTB7v5YIerPsMJ6AgkZJjfx6HBG0l9x1UQfW7WTsQhwuwELAitR3fKy%2F8peywJRKyD2t7New0iOfW2WhvleaU7H887CfYXdmFzpaDdbBZlRNi6BtdpYZALjg6LUKB7tkGGf43yWfSGdnUqEPZcpGiAcDMHwHNYzK3ZMIDr3MQGOqUBu7%2B2c4QRqlPTVBnODK5LPA5U%2Bt39lH6S5gddSOA55xLB80JblwSTYywQt2fsixYcIwYhyiTiMtnwo19j5i5AjVcbp14g5Gr9TdhwW13V8vTKD2IA3V1gEJscoo%2Fnhd0ZjwYuOCh7ffO0U879d3VlJywGbe9AjLUloz2nWGcLQ3eQNU%2FQXChd%2FV71o9nRQ5WcrEtc6f9iplCPeZaxnC9Zb9nGvxP2&X-Amz-Signature=c0cb6b1b560caf1b0e30c848a38f107bdfc01326d8c5723971302b4ecbee1cf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCSG5FM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoHGF2gUirBzyIUr%2B%2FANMP%2Fn7seBwOVnj12vrDusKAWAiEAnkKuXP9sU1Ryeq1mA3AjrsSDr%2BSAsB8crRuBGWpo5%2FIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4MBda9b1opJjmFpyrcAxwqzL9KUaEONu1PJm7GqyVoZ8iV4D6yC58WhOGxwdJdfrgLroiHbEQJ%2BmBElVwo%2Byv3wGeXpHK%2FW6AiNyW32BEseoNCBjS1kroxq0QjW930V117KT2rbOHWDygAnWUtUqwHTT9sXPMX78sdfrCpBxOmsjqHcpwza1dzZjCAfsuHV%2FO8ff%2Fqc%2FaNIOOpMNct3YLSO1S6X7fo8Ucw2MWdF77CGJBOTTRlx7zgLVsPPDbUpe2sdBpU4bUSgNercFwEsE4xTcTUSx9yWobuaolNdSkzo8uQuazZqdC%2BuURovX%2FTrR2N4pf3E1Xrl0V1%2BTlQ%2FDOeFCM2Unrw9DAV2s2IRioMwlCtJYWn85AhmsH3OrYR9HVcA6O5ddUWdDE53h%2F8eJNmJSwoWe%2BU5mK0W0KEQjaenzG3S0lfql8uaW6zD8P5wjbif8idYGFg%2B9IxZzOcIVblZHKcd7EKB7IHJ5QZ67QDKfWTB7v5YIerPsMJ6AgkZJjfx6HBG0l9x1UQfW7WTsQhwuwELAitR3fKy%2F8peywJRKyD2t7New0iOfW2WhvleaU7H887CfYXdmFzpaDdbBZlRNi6BtdpYZALjg6LUKB7tkGGf43yWfSGdnUqEPZcpGiAcDMHwHNYzK3ZMIDr3MQGOqUBu7%2B2c4QRqlPTVBnODK5LPA5U%2Bt39lH6S5gddSOA55xLB80JblwSTYywQt2fsixYcIwYhyiTiMtnwo19j5i5AjVcbp14g5Gr9TdhwW13V8vTKD2IA3V1gEJscoo%2Fnhd0ZjwYuOCh7ffO0U879d3VlJywGbe9AjLUloz2nWGcLQ3eQNU%2FQXChd%2FV71o9nRQ5WcrEtc6f9iplCPeZaxnC9Zb9nGvxP2&X-Amz-Signature=51f8244052d7a7ce71e841de3d9065d462da8bed98789e9d9beeb0c76234ae98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCSG5FM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoHGF2gUirBzyIUr%2B%2FANMP%2Fn7seBwOVnj12vrDusKAWAiEAnkKuXP9sU1Ryeq1mA3AjrsSDr%2BSAsB8crRuBGWpo5%2FIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4MBda9b1opJjmFpyrcAxwqzL9KUaEONu1PJm7GqyVoZ8iV4D6yC58WhOGxwdJdfrgLroiHbEQJ%2BmBElVwo%2Byv3wGeXpHK%2FW6AiNyW32BEseoNCBjS1kroxq0QjW930V117KT2rbOHWDygAnWUtUqwHTT9sXPMX78sdfrCpBxOmsjqHcpwza1dzZjCAfsuHV%2FO8ff%2Fqc%2FaNIOOpMNct3YLSO1S6X7fo8Ucw2MWdF77CGJBOTTRlx7zgLVsPPDbUpe2sdBpU4bUSgNercFwEsE4xTcTUSx9yWobuaolNdSkzo8uQuazZqdC%2BuURovX%2FTrR2N4pf3E1Xrl0V1%2BTlQ%2FDOeFCM2Unrw9DAV2s2IRioMwlCtJYWn85AhmsH3OrYR9HVcA6O5ddUWdDE53h%2F8eJNmJSwoWe%2BU5mK0W0KEQjaenzG3S0lfql8uaW6zD8P5wjbif8idYGFg%2B9IxZzOcIVblZHKcd7EKB7IHJ5QZ67QDKfWTB7v5YIerPsMJ6AgkZJjfx6HBG0l9x1UQfW7WTsQhwuwELAitR3fKy%2F8peywJRKyD2t7New0iOfW2WhvleaU7H887CfYXdmFzpaDdbBZlRNi6BtdpYZALjg6LUKB7tkGGf43yWfSGdnUqEPZcpGiAcDMHwHNYzK3ZMIDr3MQGOqUBu7%2B2c4QRqlPTVBnODK5LPA5U%2Bt39lH6S5gddSOA55xLB80JblwSTYywQt2fsixYcIwYhyiTiMtnwo19j5i5AjVcbp14g5Gr9TdhwW13V8vTKD2IA3V1gEJscoo%2Fnhd0ZjwYuOCh7ffO0U879d3VlJywGbe9AjLUloz2nWGcLQ3eQNU%2FQXChd%2FV71o9nRQ5WcrEtc6f9iplCPeZaxnC9Zb9nGvxP2&X-Amz-Signature=872583e87b57d6243bb2d826040eebcdbdc5686acaf6aa0a8a1d30676e824d81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCSG5FM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoHGF2gUirBzyIUr%2B%2FANMP%2Fn7seBwOVnj12vrDusKAWAiEAnkKuXP9sU1Ryeq1mA3AjrsSDr%2BSAsB8crRuBGWpo5%2FIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4MBda9b1opJjmFpyrcAxwqzL9KUaEONu1PJm7GqyVoZ8iV4D6yC58WhOGxwdJdfrgLroiHbEQJ%2BmBElVwo%2Byv3wGeXpHK%2FW6AiNyW32BEseoNCBjS1kroxq0QjW930V117KT2rbOHWDygAnWUtUqwHTT9sXPMX78sdfrCpBxOmsjqHcpwza1dzZjCAfsuHV%2FO8ff%2Fqc%2FaNIOOpMNct3YLSO1S6X7fo8Ucw2MWdF77CGJBOTTRlx7zgLVsPPDbUpe2sdBpU4bUSgNercFwEsE4xTcTUSx9yWobuaolNdSkzo8uQuazZqdC%2BuURovX%2FTrR2N4pf3E1Xrl0V1%2BTlQ%2FDOeFCM2Unrw9DAV2s2IRioMwlCtJYWn85AhmsH3OrYR9HVcA6O5ddUWdDE53h%2F8eJNmJSwoWe%2BU5mK0W0KEQjaenzG3S0lfql8uaW6zD8P5wjbif8idYGFg%2B9IxZzOcIVblZHKcd7EKB7IHJ5QZ67QDKfWTB7v5YIerPsMJ6AgkZJjfx6HBG0l9x1UQfW7WTsQhwuwELAitR3fKy%2F8peywJRKyD2t7New0iOfW2WhvleaU7H887CfYXdmFzpaDdbBZlRNi6BtdpYZALjg6LUKB7tkGGf43yWfSGdnUqEPZcpGiAcDMHwHNYzK3ZMIDr3MQGOqUBu7%2B2c4QRqlPTVBnODK5LPA5U%2Bt39lH6S5gddSOA55xLB80JblwSTYywQt2fsixYcIwYhyiTiMtnwo19j5i5AjVcbp14g5Gr9TdhwW13V8vTKD2IA3V1gEJscoo%2Fnhd0ZjwYuOCh7ffO0U879d3VlJywGbe9AjLUloz2nWGcLQ3eQNU%2FQXChd%2FV71o9nRQ5WcrEtc6f9iplCPeZaxnC9Zb9nGvxP2&X-Amz-Signature=0d716edf313d1d3843a3a63042eef5a8adc995c5f32d843acc2a343b24dbc25c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCSG5FM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoHGF2gUirBzyIUr%2B%2FANMP%2Fn7seBwOVnj12vrDusKAWAiEAnkKuXP9sU1Ryeq1mA3AjrsSDr%2BSAsB8crRuBGWpo5%2FIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4MBda9b1opJjmFpyrcAxwqzL9KUaEONu1PJm7GqyVoZ8iV4D6yC58WhOGxwdJdfrgLroiHbEQJ%2BmBElVwo%2Byv3wGeXpHK%2FW6AiNyW32BEseoNCBjS1kroxq0QjW930V117KT2rbOHWDygAnWUtUqwHTT9sXPMX78sdfrCpBxOmsjqHcpwza1dzZjCAfsuHV%2FO8ff%2Fqc%2FaNIOOpMNct3YLSO1S6X7fo8Ucw2MWdF77CGJBOTTRlx7zgLVsPPDbUpe2sdBpU4bUSgNercFwEsE4xTcTUSx9yWobuaolNdSkzo8uQuazZqdC%2BuURovX%2FTrR2N4pf3E1Xrl0V1%2BTlQ%2FDOeFCM2Unrw9DAV2s2IRioMwlCtJYWn85AhmsH3OrYR9HVcA6O5ddUWdDE53h%2F8eJNmJSwoWe%2BU5mK0W0KEQjaenzG3S0lfql8uaW6zD8P5wjbif8idYGFg%2B9IxZzOcIVblZHKcd7EKB7IHJ5QZ67QDKfWTB7v5YIerPsMJ6AgkZJjfx6HBG0l9x1UQfW7WTsQhwuwELAitR3fKy%2F8peywJRKyD2t7New0iOfW2WhvleaU7H887CfYXdmFzpaDdbBZlRNi6BtdpYZALjg6LUKB7tkGGf43yWfSGdnUqEPZcpGiAcDMHwHNYzK3ZMIDr3MQGOqUBu7%2B2c4QRqlPTVBnODK5LPA5U%2Bt39lH6S5gddSOA55xLB80JblwSTYywQt2fsixYcIwYhyiTiMtnwo19j5i5AjVcbp14g5Gr9TdhwW13V8vTKD2IA3V1gEJscoo%2Fnhd0ZjwYuOCh7ffO0U879d3VlJywGbe9AjLUloz2nWGcLQ3eQNU%2FQXChd%2FV71o9nRQ5WcrEtc6f9iplCPeZaxnC9Zb9nGvxP2&X-Amz-Signature=e6ce3dc9c66518fcfba0a6f6878aa6c9d005bd6f2f6e50d287f2097a5f61fbb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCSG5FM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoHGF2gUirBzyIUr%2B%2FANMP%2Fn7seBwOVnj12vrDusKAWAiEAnkKuXP9sU1Ryeq1mA3AjrsSDr%2BSAsB8crRuBGWpo5%2FIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4MBda9b1opJjmFpyrcAxwqzL9KUaEONu1PJm7GqyVoZ8iV4D6yC58WhOGxwdJdfrgLroiHbEQJ%2BmBElVwo%2Byv3wGeXpHK%2FW6AiNyW32BEseoNCBjS1kroxq0QjW930V117KT2rbOHWDygAnWUtUqwHTT9sXPMX78sdfrCpBxOmsjqHcpwza1dzZjCAfsuHV%2FO8ff%2Fqc%2FaNIOOpMNct3YLSO1S6X7fo8Ucw2MWdF77CGJBOTTRlx7zgLVsPPDbUpe2sdBpU4bUSgNercFwEsE4xTcTUSx9yWobuaolNdSkzo8uQuazZqdC%2BuURovX%2FTrR2N4pf3E1Xrl0V1%2BTlQ%2FDOeFCM2Unrw9DAV2s2IRioMwlCtJYWn85AhmsH3OrYR9HVcA6O5ddUWdDE53h%2F8eJNmJSwoWe%2BU5mK0W0KEQjaenzG3S0lfql8uaW6zD8P5wjbif8idYGFg%2B9IxZzOcIVblZHKcd7EKB7IHJ5QZ67QDKfWTB7v5YIerPsMJ6AgkZJjfx6HBG0l9x1UQfW7WTsQhwuwELAitR3fKy%2F8peywJRKyD2t7New0iOfW2WhvleaU7H887CfYXdmFzpaDdbBZlRNi6BtdpYZALjg6LUKB7tkGGf43yWfSGdnUqEPZcpGiAcDMHwHNYzK3ZMIDr3MQGOqUBu7%2B2c4QRqlPTVBnODK5LPA5U%2Bt39lH6S5gddSOA55xLB80JblwSTYywQt2fsixYcIwYhyiTiMtnwo19j5i5AjVcbp14g5Gr9TdhwW13V8vTKD2IA3V1gEJscoo%2Fnhd0ZjwYuOCh7ffO0U879d3VlJywGbe9AjLUloz2nWGcLQ3eQNU%2FQXChd%2FV71o9nRQ5WcrEtc6f9iplCPeZaxnC9Zb9nGvxP2&X-Amz-Signature=51f8244052d7a7ce71e841de3d9065d462da8bed98789e9d9beeb0c76234ae98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCSG5FM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoHGF2gUirBzyIUr%2B%2FANMP%2Fn7seBwOVnj12vrDusKAWAiEAnkKuXP9sU1Ryeq1mA3AjrsSDr%2BSAsB8crRuBGWpo5%2FIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4MBda9b1opJjmFpyrcAxwqzL9KUaEONu1PJm7GqyVoZ8iV4D6yC58WhOGxwdJdfrgLroiHbEQJ%2BmBElVwo%2Byv3wGeXpHK%2FW6AiNyW32BEseoNCBjS1kroxq0QjW930V117KT2rbOHWDygAnWUtUqwHTT9sXPMX78sdfrCpBxOmsjqHcpwza1dzZjCAfsuHV%2FO8ff%2Fqc%2FaNIOOpMNct3YLSO1S6X7fo8Ucw2MWdF77CGJBOTTRlx7zgLVsPPDbUpe2sdBpU4bUSgNercFwEsE4xTcTUSx9yWobuaolNdSkzo8uQuazZqdC%2BuURovX%2FTrR2N4pf3E1Xrl0V1%2BTlQ%2FDOeFCM2Unrw9DAV2s2IRioMwlCtJYWn85AhmsH3OrYR9HVcA6O5ddUWdDE53h%2F8eJNmJSwoWe%2BU5mK0W0KEQjaenzG3S0lfql8uaW6zD8P5wjbif8idYGFg%2B9IxZzOcIVblZHKcd7EKB7IHJ5QZ67QDKfWTB7v5YIerPsMJ6AgkZJjfx6HBG0l9x1UQfW7WTsQhwuwELAitR3fKy%2F8peywJRKyD2t7New0iOfW2WhvleaU7H887CfYXdmFzpaDdbBZlRNi6BtdpYZALjg6LUKB7tkGGf43yWfSGdnUqEPZcpGiAcDMHwHNYzK3ZMIDr3MQGOqUBu7%2B2c4QRqlPTVBnODK5LPA5U%2Bt39lH6S5gddSOA55xLB80JblwSTYywQt2fsixYcIwYhyiTiMtnwo19j5i5AjVcbp14g5Gr9TdhwW13V8vTKD2IA3V1gEJscoo%2Fnhd0ZjwYuOCh7ffO0U879d3VlJywGbe9AjLUloz2nWGcLQ3eQNU%2FQXChd%2FV71o9nRQ5WcrEtc6f9iplCPeZaxnC9Zb9nGvxP2&X-Amz-Signature=17e8f27e959dedca730428a6d234d035485ed63285576d5680c90e4723f7be12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCSG5FM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoHGF2gUirBzyIUr%2B%2FANMP%2Fn7seBwOVnj12vrDusKAWAiEAnkKuXP9sU1Ryeq1mA3AjrsSDr%2BSAsB8crRuBGWpo5%2FIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4MBda9b1opJjmFpyrcAxwqzL9KUaEONu1PJm7GqyVoZ8iV4D6yC58WhOGxwdJdfrgLroiHbEQJ%2BmBElVwo%2Byv3wGeXpHK%2FW6AiNyW32BEseoNCBjS1kroxq0QjW930V117KT2rbOHWDygAnWUtUqwHTT9sXPMX78sdfrCpBxOmsjqHcpwza1dzZjCAfsuHV%2FO8ff%2Fqc%2FaNIOOpMNct3YLSO1S6X7fo8Ucw2MWdF77CGJBOTTRlx7zgLVsPPDbUpe2sdBpU4bUSgNercFwEsE4xTcTUSx9yWobuaolNdSkzo8uQuazZqdC%2BuURovX%2FTrR2N4pf3E1Xrl0V1%2BTlQ%2FDOeFCM2Unrw9DAV2s2IRioMwlCtJYWn85AhmsH3OrYR9HVcA6O5ddUWdDE53h%2F8eJNmJSwoWe%2BU5mK0W0KEQjaenzG3S0lfql8uaW6zD8P5wjbif8idYGFg%2B9IxZzOcIVblZHKcd7EKB7IHJ5QZ67QDKfWTB7v5YIerPsMJ6AgkZJjfx6HBG0l9x1UQfW7WTsQhwuwELAitR3fKy%2F8peywJRKyD2t7New0iOfW2WhvleaU7H887CfYXdmFzpaDdbBZlRNi6BtdpYZALjg6LUKB7tkGGf43yWfSGdnUqEPZcpGiAcDMHwHNYzK3ZMIDr3MQGOqUBu7%2B2c4QRqlPTVBnODK5LPA5U%2Bt39lH6S5gddSOA55xLB80JblwSTYywQt2fsixYcIwYhyiTiMtnwo19j5i5AjVcbp14g5Gr9TdhwW13V8vTKD2IA3V1gEJscoo%2Fnhd0ZjwYuOCh7ffO0U879d3VlJywGbe9AjLUloz2nWGcLQ3eQNU%2FQXChd%2FV71o9nRQ5WcrEtc6f9iplCPeZaxnC9Zb9nGvxP2&X-Amz-Signature=24bd00dce3d92cae0ef3bec2ec89021b0e22422c032667533447d13510584f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCSG5FM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDoHGF2gUirBzyIUr%2B%2FANMP%2Fn7seBwOVnj12vrDusKAWAiEAnkKuXP9sU1Ryeq1mA3AjrsSDr%2BSAsB8crRuBGWpo5%2FIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4MBda9b1opJjmFpyrcAxwqzL9KUaEONu1PJm7GqyVoZ8iV4D6yC58WhOGxwdJdfrgLroiHbEQJ%2BmBElVwo%2Byv3wGeXpHK%2FW6AiNyW32BEseoNCBjS1kroxq0QjW930V117KT2rbOHWDygAnWUtUqwHTT9sXPMX78sdfrCpBxOmsjqHcpwza1dzZjCAfsuHV%2FO8ff%2Fqc%2FaNIOOpMNct3YLSO1S6X7fo8Ucw2MWdF77CGJBOTTRlx7zgLVsPPDbUpe2sdBpU4bUSgNercFwEsE4xTcTUSx9yWobuaolNdSkzo8uQuazZqdC%2BuURovX%2FTrR2N4pf3E1Xrl0V1%2BTlQ%2FDOeFCM2Unrw9DAV2s2IRioMwlCtJYWn85AhmsH3OrYR9HVcA6O5ddUWdDE53h%2F8eJNmJSwoWe%2BU5mK0W0KEQjaenzG3S0lfql8uaW6zD8P5wjbif8idYGFg%2B9IxZzOcIVblZHKcd7EKB7IHJ5QZ67QDKfWTB7v5YIerPsMJ6AgkZJjfx6HBG0l9x1UQfW7WTsQhwuwELAitR3fKy%2F8peywJRKyD2t7New0iOfW2WhvleaU7H887CfYXdmFzpaDdbBZlRNi6BtdpYZALjg6LUKB7tkGGf43yWfSGdnUqEPZcpGiAcDMHwHNYzK3ZMIDr3MQGOqUBu7%2B2c4QRqlPTVBnODK5LPA5U%2Bt39lH6S5gddSOA55xLB80JblwSTYywQt2fsixYcIwYhyiTiMtnwo19j5i5AjVcbp14g5Gr9TdhwW13V8vTKD2IA3V1gEJscoo%2Fnhd0ZjwYuOCh7ffO0U879d3VlJywGbe9AjLUloz2nWGcLQ3eQNU%2FQXChd%2FV71o9nRQ5WcrEtc6f9iplCPeZaxnC9Zb9nGvxP2&X-Amz-Signature=289d38e5a38521ece7f786bd26dfcadaf7e2588e9b8a9246e05fe733a30228ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
