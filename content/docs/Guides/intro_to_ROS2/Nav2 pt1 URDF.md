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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USRKVGWF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICCR%2BCo1bz4KZIJzF7lrTUWStLSodfciTYz9YzivCZZXAiEA%2FMSxThXzklQzf8YPXDpwe8OFRfu1kM9EcX0PnpEneyUq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDIctOT52mLEFmTl8ECrcA5COEAq6lfIJQ0gmKyssxcmXMcJN66NFSnVsSW9BRz4T64Pnje%2BoPfc5ngBbFNCP83cwTX7teOreJ92UljuHQ0w57F%2BK7bSRmn2fbn8%2BNpo17zgIjTViVBxIi7REk5uspvbTOK4Yx3VRUJPBXM39kZP2040Xdq0X1qbG0aUbZscGOBFsBaP0cqs%2Fk49v%2Bi43vAXzFyQlUQdXktxJESIpQzdyiaqJ6NXvj%2FHbboQF5cQ%2BSV6oKQYzDEQtJ%2FAClj%2FDBkBkjH%2FXteIFfX5cLbASXHc2WoTzwX5t7pOSve%2BZrb%2FV1Y4JKTsBJ1a8cxdSBrFAHIPHGZtq6hqtpEwBlitp8gDNZ5QPLrUCBdFOE3Me4HHsvARdm5BP4GjvLk5srvAVW%2F1cvfAMd%2F11LofmsrfZQE41MUeH2KguamVsQoaswH00S8Czpi%2FKY0lAkIdO9sFJF0mUppjmzZYswg8REzQyhcn6oeY5MvRZQdYJxcavBMWUcfVZ5%2BVCLzvK7tz1pd0So2j57AC7R1cPpnB%2FJrQ1vQ3z0%2BZKLHS4p4iqib9XoSCgoIqZss%2FEqglRsR49VO9SAr1iKQQEtGFWRZoov50lDyjZo9%2FO7quyE%2B1jyt1pmPyj6scr8LoejBjiWUmPMPW6nNIGOqUBArnF46UljaoqB%2B%2BCv1cN948xWrMi37uvJpJaZ681XSHcP4xtqf%2BoOvgNRz3pe1vvbOqrzfluPPXHJM8vxraWEih26uhbnOBohMgVB7bbd9wRGzenTm%2Faja%2BLLPWnKy7BLsnSuVz4veKXe2tmIOVa2b%2BaIWkMPzydrh6%2BhEL4O%2FjjeYg4CCkhMGYIKGGYAcmdKo2Or8zI23RX%2BKu8bbsOtvWNROzY&X-Amz-Signature=96adfc8a6263cdfe32a6fb430ef0e432199c8968db782ecd5332be3b72b4a363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USRKVGWF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICCR%2BCo1bz4KZIJzF7lrTUWStLSodfciTYz9YzivCZZXAiEA%2FMSxThXzklQzf8YPXDpwe8OFRfu1kM9EcX0PnpEneyUq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDIctOT52mLEFmTl8ECrcA5COEAq6lfIJQ0gmKyssxcmXMcJN66NFSnVsSW9BRz4T64Pnje%2BoPfc5ngBbFNCP83cwTX7teOreJ92UljuHQ0w57F%2BK7bSRmn2fbn8%2BNpo17zgIjTViVBxIi7REk5uspvbTOK4Yx3VRUJPBXM39kZP2040Xdq0X1qbG0aUbZscGOBFsBaP0cqs%2Fk49v%2Bi43vAXzFyQlUQdXktxJESIpQzdyiaqJ6NXvj%2FHbboQF5cQ%2BSV6oKQYzDEQtJ%2FAClj%2FDBkBkjH%2FXteIFfX5cLbASXHc2WoTzwX5t7pOSve%2BZrb%2FV1Y4JKTsBJ1a8cxdSBrFAHIPHGZtq6hqtpEwBlitp8gDNZ5QPLrUCBdFOE3Me4HHsvARdm5BP4GjvLk5srvAVW%2F1cvfAMd%2F11LofmsrfZQE41MUeH2KguamVsQoaswH00S8Czpi%2FKY0lAkIdO9sFJF0mUppjmzZYswg8REzQyhcn6oeY5MvRZQdYJxcavBMWUcfVZ5%2BVCLzvK7tz1pd0So2j57AC7R1cPpnB%2FJrQ1vQ3z0%2BZKLHS4p4iqib9XoSCgoIqZss%2FEqglRsR49VO9SAr1iKQQEtGFWRZoov50lDyjZo9%2FO7quyE%2B1jyt1pmPyj6scr8LoejBjiWUmPMPW6nNIGOqUBArnF46UljaoqB%2B%2BCv1cN948xWrMi37uvJpJaZ681XSHcP4xtqf%2BoOvgNRz3pe1vvbOqrzfluPPXHJM8vxraWEih26uhbnOBohMgVB7bbd9wRGzenTm%2Faja%2BLLPWnKy7BLsnSuVz4veKXe2tmIOVa2b%2BaIWkMPzydrh6%2BhEL4O%2FjjeYg4CCkhMGYIKGGYAcmdKo2Or8zI23RX%2BKu8bbsOtvWNROzY&X-Amz-Signature=19fdf9d32beb421bab615a3cc0c937a45466d2bf78780dc6b3b48b3a4a6097a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USRKVGWF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICCR%2BCo1bz4KZIJzF7lrTUWStLSodfciTYz9YzivCZZXAiEA%2FMSxThXzklQzf8YPXDpwe8OFRfu1kM9EcX0PnpEneyUq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDIctOT52mLEFmTl8ECrcA5COEAq6lfIJQ0gmKyssxcmXMcJN66NFSnVsSW9BRz4T64Pnje%2BoPfc5ngBbFNCP83cwTX7teOreJ92UljuHQ0w57F%2BK7bSRmn2fbn8%2BNpo17zgIjTViVBxIi7REk5uspvbTOK4Yx3VRUJPBXM39kZP2040Xdq0X1qbG0aUbZscGOBFsBaP0cqs%2Fk49v%2Bi43vAXzFyQlUQdXktxJESIpQzdyiaqJ6NXvj%2FHbboQF5cQ%2BSV6oKQYzDEQtJ%2FAClj%2FDBkBkjH%2FXteIFfX5cLbASXHc2WoTzwX5t7pOSve%2BZrb%2FV1Y4JKTsBJ1a8cxdSBrFAHIPHGZtq6hqtpEwBlitp8gDNZ5QPLrUCBdFOE3Me4HHsvARdm5BP4GjvLk5srvAVW%2F1cvfAMd%2F11LofmsrfZQE41MUeH2KguamVsQoaswH00S8Czpi%2FKY0lAkIdO9sFJF0mUppjmzZYswg8REzQyhcn6oeY5MvRZQdYJxcavBMWUcfVZ5%2BVCLzvK7tz1pd0So2j57AC7R1cPpnB%2FJrQ1vQ3z0%2BZKLHS4p4iqib9XoSCgoIqZss%2FEqglRsR49VO9SAr1iKQQEtGFWRZoov50lDyjZo9%2FO7quyE%2B1jyt1pmPyj6scr8LoejBjiWUmPMPW6nNIGOqUBArnF46UljaoqB%2B%2BCv1cN948xWrMi37uvJpJaZ681XSHcP4xtqf%2BoOvgNRz3pe1vvbOqrzfluPPXHJM8vxraWEih26uhbnOBohMgVB7bbd9wRGzenTm%2Faja%2BLLPWnKy7BLsnSuVz4veKXe2tmIOVa2b%2BaIWkMPzydrh6%2BhEL4O%2FjjeYg4CCkhMGYIKGGYAcmdKo2Or8zI23RX%2BKu8bbsOtvWNROzY&X-Amz-Signature=c87b5736f49a6dd2a1184f18a73ee84110b12bc69c2136eca4eb6759fee63a69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USRKVGWF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICCR%2BCo1bz4KZIJzF7lrTUWStLSodfciTYz9YzivCZZXAiEA%2FMSxThXzklQzf8YPXDpwe8OFRfu1kM9EcX0PnpEneyUq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDIctOT52mLEFmTl8ECrcA5COEAq6lfIJQ0gmKyssxcmXMcJN66NFSnVsSW9BRz4T64Pnje%2BoPfc5ngBbFNCP83cwTX7teOreJ92UljuHQ0w57F%2BK7bSRmn2fbn8%2BNpo17zgIjTViVBxIi7REk5uspvbTOK4Yx3VRUJPBXM39kZP2040Xdq0X1qbG0aUbZscGOBFsBaP0cqs%2Fk49v%2Bi43vAXzFyQlUQdXktxJESIpQzdyiaqJ6NXvj%2FHbboQF5cQ%2BSV6oKQYzDEQtJ%2FAClj%2FDBkBkjH%2FXteIFfX5cLbASXHc2WoTzwX5t7pOSve%2BZrb%2FV1Y4JKTsBJ1a8cxdSBrFAHIPHGZtq6hqtpEwBlitp8gDNZ5QPLrUCBdFOE3Me4HHsvARdm5BP4GjvLk5srvAVW%2F1cvfAMd%2F11LofmsrfZQE41MUeH2KguamVsQoaswH00S8Czpi%2FKY0lAkIdO9sFJF0mUppjmzZYswg8REzQyhcn6oeY5MvRZQdYJxcavBMWUcfVZ5%2BVCLzvK7tz1pd0So2j57AC7R1cPpnB%2FJrQ1vQ3z0%2BZKLHS4p4iqib9XoSCgoIqZss%2FEqglRsR49VO9SAr1iKQQEtGFWRZoov50lDyjZo9%2FO7quyE%2B1jyt1pmPyj6scr8LoejBjiWUmPMPW6nNIGOqUBArnF46UljaoqB%2B%2BCv1cN948xWrMi37uvJpJaZ681XSHcP4xtqf%2BoOvgNRz3pe1vvbOqrzfluPPXHJM8vxraWEih26uhbnOBohMgVB7bbd9wRGzenTm%2Faja%2BLLPWnKy7BLsnSuVz4veKXe2tmIOVa2b%2BaIWkMPzydrh6%2BhEL4O%2FjjeYg4CCkhMGYIKGGYAcmdKo2Or8zI23RX%2BKu8bbsOtvWNROzY&X-Amz-Signature=3bafabb9150705a48b76c5b04daed02e3c30de54318032d65afaf8aceaa80954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USRKVGWF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICCR%2BCo1bz4KZIJzF7lrTUWStLSodfciTYz9YzivCZZXAiEA%2FMSxThXzklQzf8YPXDpwe8OFRfu1kM9EcX0PnpEneyUq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDIctOT52mLEFmTl8ECrcA5COEAq6lfIJQ0gmKyssxcmXMcJN66NFSnVsSW9BRz4T64Pnje%2BoPfc5ngBbFNCP83cwTX7teOreJ92UljuHQ0w57F%2BK7bSRmn2fbn8%2BNpo17zgIjTViVBxIi7REk5uspvbTOK4Yx3VRUJPBXM39kZP2040Xdq0X1qbG0aUbZscGOBFsBaP0cqs%2Fk49v%2Bi43vAXzFyQlUQdXktxJESIpQzdyiaqJ6NXvj%2FHbboQF5cQ%2BSV6oKQYzDEQtJ%2FAClj%2FDBkBkjH%2FXteIFfX5cLbASXHc2WoTzwX5t7pOSve%2BZrb%2FV1Y4JKTsBJ1a8cxdSBrFAHIPHGZtq6hqtpEwBlitp8gDNZ5QPLrUCBdFOE3Me4HHsvARdm5BP4GjvLk5srvAVW%2F1cvfAMd%2F11LofmsrfZQE41MUeH2KguamVsQoaswH00S8Czpi%2FKY0lAkIdO9sFJF0mUppjmzZYswg8REzQyhcn6oeY5MvRZQdYJxcavBMWUcfVZ5%2BVCLzvK7tz1pd0So2j57AC7R1cPpnB%2FJrQ1vQ3z0%2BZKLHS4p4iqib9XoSCgoIqZss%2FEqglRsR49VO9SAr1iKQQEtGFWRZoov50lDyjZo9%2FO7quyE%2B1jyt1pmPyj6scr8LoejBjiWUmPMPW6nNIGOqUBArnF46UljaoqB%2B%2BCv1cN948xWrMi37uvJpJaZ681XSHcP4xtqf%2BoOvgNRz3pe1vvbOqrzfluPPXHJM8vxraWEih26uhbnOBohMgVB7bbd9wRGzenTm%2Faja%2BLLPWnKy7BLsnSuVz4veKXe2tmIOVa2b%2BaIWkMPzydrh6%2BhEL4O%2FjjeYg4CCkhMGYIKGGYAcmdKo2Or8zI23RX%2BKu8bbsOtvWNROzY&X-Amz-Signature=2009e9e4a004673aa3a1ac6ae43e37e55330ffb9b6fb0dbac8189ff0a14cbe70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USRKVGWF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICCR%2BCo1bz4KZIJzF7lrTUWStLSodfciTYz9YzivCZZXAiEA%2FMSxThXzklQzf8YPXDpwe8OFRfu1kM9EcX0PnpEneyUq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDIctOT52mLEFmTl8ECrcA5COEAq6lfIJQ0gmKyssxcmXMcJN66NFSnVsSW9BRz4T64Pnje%2BoPfc5ngBbFNCP83cwTX7teOreJ92UljuHQ0w57F%2BK7bSRmn2fbn8%2BNpo17zgIjTViVBxIi7REk5uspvbTOK4Yx3VRUJPBXM39kZP2040Xdq0X1qbG0aUbZscGOBFsBaP0cqs%2Fk49v%2Bi43vAXzFyQlUQdXktxJESIpQzdyiaqJ6NXvj%2FHbboQF5cQ%2BSV6oKQYzDEQtJ%2FAClj%2FDBkBkjH%2FXteIFfX5cLbASXHc2WoTzwX5t7pOSve%2BZrb%2FV1Y4JKTsBJ1a8cxdSBrFAHIPHGZtq6hqtpEwBlitp8gDNZ5QPLrUCBdFOE3Me4HHsvARdm5BP4GjvLk5srvAVW%2F1cvfAMd%2F11LofmsrfZQE41MUeH2KguamVsQoaswH00S8Czpi%2FKY0lAkIdO9sFJF0mUppjmzZYswg8REzQyhcn6oeY5MvRZQdYJxcavBMWUcfVZ5%2BVCLzvK7tz1pd0So2j57AC7R1cPpnB%2FJrQ1vQ3z0%2BZKLHS4p4iqib9XoSCgoIqZss%2FEqglRsR49VO9SAr1iKQQEtGFWRZoov50lDyjZo9%2FO7quyE%2B1jyt1pmPyj6scr8LoejBjiWUmPMPW6nNIGOqUBArnF46UljaoqB%2B%2BCv1cN948xWrMi37uvJpJaZ681XSHcP4xtqf%2BoOvgNRz3pe1vvbOqrzfluPPXHJM8vxraWEih26uhbnOBohMgVB7bbd9wRGzenTm%2Faja%2BLLPWnKy7BLsnSuVz4veKXe2tmIOVa2b%2BaIWkMPzydrh6%2BhEL4O%2FjjeYg4CCkhMGYIKGGYAcmdKo2Or8zI23RX%2BKu8bbsOtvWNROzY&X-Amz-Signature=eb7d424f5ebb25a4fa8f2464a183fbcfdf5e9ebaddb9cf5953ebd8ea4b6bde90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USRKVGWF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICCR%2BCo1bz4KZIJzF7lrTUWStLSodfciTYz9YzivCZZXAiEA%2FMSxThXzklQzf8YPXDpwe8OFRfu1kM9EcX0PnpEneyUq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDIctOT52mLEFmTl8ECrcA5COEAq6lfIJQ0gmKyssxcmXMcJN66NFSnVsSW9BRz4T64Pnje%2BoPfc5ngBbFNCP83cwTX7teOreJ92UljuHQ0w57F%2BK7bSRmn2fbn8%2BNpo17zgIjTViVBxIi7REk5uspvbTOK4Yx3VRUJPBXM39kZP2040Xdq0X1qbG0aUbZscGOBFsBaP0cqs%2Fk49v%2Bi43vAXzFyQlUQdXktxJESIpQzdyiaqJ6NXvj%2FHbboQF5cQ%2BSV6oKQYzDEQtJ%2FAClj%2FDBkBkjH%2FXteIFfX5cLbASXHc2WoTzwX5t7pOSve%2BZrb%2FV1Y4JKTsBJ1a8cxdSBrFAHIPHGZtq6hqtpEwBlitp8gDNZ5QPLrUCBdFOE3Me4HHsvARdm5BP4GjvLk5srvAVW%2F1cvfAMd%2F11LofmsrfZQE41MUeH2KguamVsQoaswH00S8Czpi%2FKY0lAkIdO9sFJF0mUppjmzZYswg8REzQyhcn6oeY5MvRZQdYJxcavBMWUcfVZ5%2BVCLzvK7tz1pd0So2j57AC7R1cPpnB%2FJrQ1vQ3z0%2BZKLHS4p4iqib9XoSCgoIqZss%2FEqglRsR49VO9SAr1iKQQEtGFWRZoov50lDyjZo9%2FO7quyE%2B1jyt1pmPyj6scr8LoejBjiWUmPMPW6nNIGOqUBArnF46UljaoqB%2B%2BCv1cN948xWrMi37uvJpJaZ681XSHcP4xtqf%2BoOvgNRz3pe1vvbOqrzfluPPXHJM8vxraWEih26uhbnOBohMgVB7bbd9wRGzenTm%2Faja%2BLLPWnKy7BLsnSuVz4veKXe2tmIOVa2b%2BaIWkMPzydrh6%2BhEL4O%2FjjeYg4CCkhMGYIKGGYAcmdKo2Or8zI23RX%2BKu8bbsOtvWNROzY&X-Amz-Signature=21635d2e9786b4b69f43f58a7cd536237c04c74542261ed0c82d1cea5760ca75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USRKVGWF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICCR%2BCo1bz4KZIJzF7lrTUWStLSodfciTYz9YzivCZZXAiEA%2FMSxThXzklQzf8YPXDpwe8OFRfu1kM9EcX0PnpEneyUq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDIctOT52mLEFmTl8ECrcA5COEAq6lfIJQ0gmKyssxcmXMcJN66NFSnVsSW9BRz4T64Pnje%2BoPfc5ngBbFNCP83cwTX7teOreJ92UljuHQ0w57F%2BK7bSRmn2fbn8%2BNpo17zgIjTViVBxIi7REk5uspvbTOK4Yx3VRUJPBXM39kZP2040Xdq0X1qbG0aUbZscGOBFsBaP0cqs%2Fk49v%2Bi43vAXzFyQlUQdXktxJESIpQzdyiaqJ6NXvj%2FHbboQF5cQ%2BSV6oKQYzDEQtJ%2FAClj%2FDBkBkjH%2FXteIFfX5cLbASXHc2WoTzwX5t7pOSve%2BZrb%2FV1Y4JKTsBJ1a8cxdSBrFAHIPHGZtq6hqtpEwBlitp8gDNZ5QPLrUCBdFOE3Me4HHsvARdm5BP4GjvLk5srvAVW%2F1cvfAMd%2F11LofmsrfZQE41MUeH2KguamVsQoaswH00S8Czpi%2FKY0lAkIdO9sFJF0mUppjmzZYswg8REzQyhcn6oeY5MvRZQdYJxcavBMWUcfVZ5%2BVCLzvK7tz1pd0So2j57AC7R1cPpnB%2FJrQ1vQ3z0%2BZKLHS4p4iqib9XoSCgoIqZss%2FEqglRsR49VO9SAr1iKQQEtGFWRZoov50lDyjZo9%2FO7quyE%2B1jyt1pmPyj6scr8LoejBjiWUmPMPW6nNIGOqUBArnF46UljaoqB%2B%2BCv1cN948xWrMi37uvJpJaZ681XSHcP4xtqf%2BoOvgNRz3pe1vvbOqrzfluPPXHJM8vxraWEih26uhbnOBohMgVB7bbd9wRGzenTm%2Faja%2BLLPWnKy7BLsnSuVz4veKXe2tmIOVa2b%2BaIWkMPzydrh6%2BhEL4O%2FjjeYg4CCkhMGYIKGGYAcmdKo2Or8zI23RX%2BKu8bbsOtvWNROzY&X-Amz-Signature=ac0a1b1833efff7473aa8d8d1f42cc7c02ec3f238c34d96b77c4a8ba1136795f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USRKVGWF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICCR%2BCo1bz4KZIJzF7lrTUWStLSodfciTYz9YzivCZZXAiEA%2FMSxThXzklQzf8YPXDpwe8OFRfu1kM9EcX0PnpEneyUq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDIctOT52mLEFmTl8ECrcA5COEAq6lfIJQ0gmKyssxcmXMcJN66NFSnVsSW9BRz4T64Pnje%2BoPfc5ngBbFNCP83cwTX7teOreJ92UljuHQ0w57F%2BK7bSRmn2fbn8%2BNpo17zgIjTViVBxIi7REk5uspvbTOK4Yx3VRUJPBXM39kZP2040Xdq0X1qbG0aUbZscGOBFsBaP0cqs%2Fk49v%2Bi43vAXzFyQlUQdXktxJESIpQzdyiaqJ6NXvj%2FHbboQF5cQ%2BSV6oKQYzDEQtJ%2FAClj%2FDBkBkjH%2FXteIFfX5cLbASXHc2WoTzwX5t7pOSve%2BZrb%2FV1Y4JKTsBJ1a8cxdSBrFAHIPHGZtq6hqtpEwBlitp8gDNZ5QPLrUCBdFOE3Me4HHsvARdm5BP4GjvLk5srvAVW%2F1cvfAMd%2F11LofmsrfZQE41MUeH2KguamVsQoaswH00S8Czpi%2FKY0lAkIdO9sFJF0mUppjmzZYswg8REzQyhcn6oeY5MvRZQdYJxcavBMWUcfVZ5%2BVCLzvK7tz1pd0So2j57AC7R1cPpnB%2FJrQ1vQ3z0%2BZKLHS4p4iqib9XoSCgoIqZss%2FEqglRsR49VO9SAr1iKQQEtGFWRZoov50lDyjZo9%2FO7quyE%2B1jyt1pmPyj6scr8LoejBjiWUmPMPW6nNIGOqUBArnF46UljaoqB%2B%2BCv1cN948xWrMi37uvJpJaZ681XSHcP4xtqf%2BoOvgNRz3pe1vvbOqrzfluPPXHJM8vxraWEih26uhbnOBohMgVB7bbd9wRGzenTm%2Faja%2BLLPWnKy7BLsnSuVz4veKXe2tmIOVa2b%2BaIWkMPzydrh6%2BhEL4O%2FjjeYg4CCkhMGYIKGGYAcmdKo2Or8zI23RX%2BKu8bbsOtvWNROzY&X-Amz-Signature=e888c771f6751355c4a36a6632a822df1d255b215c5fc04f45a1f8229a22437d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USRKVGWF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICCR%2BCo1bz4KZIJzF7lrTUWStLSodfciTYz9YzivCZZXAiEA%2FMSxThXzklQzf8YPXDpwe8OFRfu1kM9EcX0PnpEneyUq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDIctOT52mLEFmTl8ECrcA5COEAq6lfIJQ0gmKyssxcmXMcJN66NFSnVsSW9BRz4T64Pnje%2BoPfc5ngBbFNCP83cwTX7teOreJ92UljuHQ0w57F%2BK7bSRmn2fbn8%2BNpo17zgIjTViVBxIi7REk5uspvbTOK4Yx3VRUJPBXM39kZP2040Xdq0X1qbG0aUbZscGOBFsBaP0cqs%2Fk49v%2Bi43vAXzFyQlUQdXktxJESIpQzdyiaqJ6NXvj%2FHbboQF5cQ%2BSV6oKQYzDEQtJ%2FAClj%2FDBkBkjH%2FXteIFfX5cLbASXHc2WoTzwX5t7pOSve%2BZrb%2FV1Y4JKTsBJ1a8cxdSBrFAHIPHGZtq6hqtpEwBlitp8gDNZ5QPLrUCBdFOE3Me4HHsvARdm5BP4GjvLk5srvAVW%2F1cvfAMd%2F11LofmsrfZQE41MUeH2KguamVsQoaswH00S8Czpi%2FKY0lAkIdO9sFJF0mUppjmzZYswg8REzQyhcn6oeY5MvRZQdYJxcavBMWUcfVZ5%2BVCLzvK7tz1pd0So2j57AC7R1cPpnB%2FJrQ1vQ3z0%2BZKLHS4p4iqib9XoSCgoIqZss%2FEqglRsR49VO9SAr1iKQQEtGFWRZoov50lDyjZo9%2FO7quyE%2B1jyt1pmPyj6scr8LoejBjiWUmPMPW6nNIGOqUBArnF46UljaoqB%2B%2BCv1cN948xWrMi37uvJpJaZ681XSHcP4xtqf%2BoOvgNRz3pe1vvbOqrzfluPPXHJM8vxraWEih26uhbnOBohMgVB7bbd9wRGzenTm%2Faja%2BLLPWnKy7BLsnSuVz4veKXe2tmIOVa2b%2BaIWkMPzydrh6%2BhEL4O%2FjjeYg4CCkhMGYIKGGYAcmdKo2Or8zI23RX%2BKu8bbsOtvWNROzY&X-Amz-Signature=f666e00961abebe4dcd23d6ae643bc1d00a91eabd83c3505906abbcf338e5522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U66EF7PI%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIH7IUjbl23IDR7QlGytD95LyP4XD9EaHidDRk6J3e9EtAiBd%2BfF%2FAiD1jaaAlI6ev76HwcX3xmMPj%2BKreirUiaiOTCr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMknpjsySxd0C0Ww09KtwDHCFatY%2FW7t4hB73cVCYNZCRpzR5gDd0Rg6g40ZKAfZ7lSJCuwMFSEhDTnHroQ%2FHBJwd33ZuCxzYEVsp8m90USd5362HufJqFL9PfyRDFuTE9Z6WBTvjYObUDkAc1kXbvVh%2BwbtuUbCInRf7k65rhq26Qo9sOeKj0uMWItD030NRHbUMBGkSXfCAbkPh%2FBAakgl9qvbXAkAg5zh4ggwGoYPbRi4xNmdiUX7WVqXc7vAa28kLZxFeOTJHaFWU9bSFCxAgi7vlusIhTXQKPC2471%2BNjcXWuM6jWdJOx%2BZ%2B9fD%2BgaosA4IT6JPsXHQFKvDOUk5TYi9UNX0GkKd7lMZu9jrSkK7K%2B1Sdz10Tb90%2FxfE7J9pDeJHjac4wYc8n3NSUfQqBc6hvdy6FyYmUKViJkkxFrEvVwJwT9RUQJbKg1%2BCShIAn2FnaX%2FAHK1Okh%2BJIjadyTEZjgLYSLYvrirmXhogBy%2FR8o716HOpmuuedXgAPcGvdFd9Qz07SXViv%2BNUrUTeqjyq%2BcS2yslg%2B%2Fm3z3vf4G14PbT0tGCLLV2L5dj4E6uQ5pkeGxU6WUBywnEJP7SfySZl3WLRa42WIhBGMABUbzXdh%2Bq%2FCcx5vGdwshh1QkEr31I%2BjnHnwwFukwzrmc0gY6pgFEMF4h0de6qSLHqhYLFcI8wf7RM%2BD3sSrfiXBR6U5lkc5H1oB%2BNYZ65pw91wDGCdZUd3JGIOp%2Bf5TV1pfNkdojZX%2FIsHCkGeLz1ivmmzFDl3ytbgmOe5nbxCyPHEhs2jR0qZNgGgvKiuNlQovNgAjKuLvZBtqp7kRWLq9C8wulOi%2BXqWyHxR3Q7ALSV3vQIWKzcmy2U5tfbMSpTkiz883Y2V4qkbko&X-Amz-Signature=101f12eca0c4e47ac6f12024abab923240865702648731e694a0e198a13e8d3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MBIJRK5%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIGbGaeSPSUu3g3ePsJAsS5yOo9oHApCy%2BAyqHtsweRrlAiEAuRqpdPj5XUoXwfLXKDG0Z%2FjYYx1SSlQF67zQxLX4jBUq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDJ0A23xF0%2FkzcqcwsSrcA%2BPO%2FL4sAnrjslqrTHAZpMm4e3OE0NUrC7OMMDPN9bZL7fPtM0fsA9rkb9bFMmOk7M6GPnog3uVFT1pytUvCW1gOFoW141Y%2BAblKb6wDyXosNhdazWsSH33iNfO%2F9vRp1c%2Bd9P7hepR1Z4HNhSMK8ajr4Pf%2FDIdQC9KNUZROSKpSlocJxB8Ohdeb8iEyq0FhKQZ8i3SuESifrSV9CPrryuFNYrADkHsSy24lt5xrFLTutpPDEh9kskraN2CpwJ0qU3JbquLUluk8xENxzkEtJOa4emKrjzjNyxImspSkdB7SCDSRIpmf62oJOXQOA4zBFBRWSKopMfPKm6%2BUICfFqF0oz1e8hkZ5E7sYERzjxL7%2B0AoJep4C%2BzEOir8yIjX3hQVRWQoVpKt4hmyruGSrX5R9OuhYuu1j56223eIkz8l9yRq6e4PV0FaGZ%2FmtbYJdjlvZJyRekERdVliGsjt6IOT0IfZsOskYK0UBK9v9TSYxcyOfMKX8OlF3cxs4ejCAFYvtM5d24eOHvMwyhRJUYCN2ERvTUAtHKHtEbERT4coD%2FV5HCAXTqWtXSxpMeO11diShkeO7X9fT8iUS4xegtJh0jyTZVqu6StyidgmVqE7s%2Fbs1fBKkHRt1Cgx9MMG6nNIGOqUBXEWP6vmQjDuqUh49yw3mZtePOH4apqDabls5BWlUegSNvDjus8TK5wHgSAV%2BH5UiwkfZ8WwtFPfxv5GiNul6mEPQpEcxztG40VmneexolpKSEXTVebfqnWFtTeadgM7U%2BZzgMY3xQ5ozA%2BcSuE6MegP3OoF8fceVk%2FPG40ten07J4Lc%2FGpt%2BRWZgvNBuasU8KoW5%2F7N6vxG7xEXCR3ORIaqxbKMm&X-Amz-Signature=64ce8d60dba2be7aecb05e846f10f67a9d2a1704088607e6ab64ff97059a2023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UYCMXEI%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDrlsBE%2FXYypW7tlJl6ey8s673waGZLl%2FMbs2M%2F3c%2BWPAIgKmDKJX%2BeXV2HxsnUgpQM97o4KBM6bC7xAxIWQjut9T0q%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDO8A1ggaSQ0AzmxcVircAzHE%2Bc8oB9Fnm3A5GoLc%2F2sIJ1rlBJ3LTHO0A9d1HzT3toOfjltQTk36CFfZToQYlJrYUKxJm83fThOcK7rLGrLVv4qvBCzK3QwvAuK0ZM%2BwE3JjypVtcjLY6aat79gCNs1JE79unIRTtPM1MjfnTj%2Bnkq4wK4c9fcnv394v8WDziHeNAgZVgBWf9036U84E1slKs14HAOJw0nLmvMjLZR%2Bf416kfjpcEwMGXaN9RXKyePllU4MYXjwWBYB8ufAwusMpcEUEMAuN64l5%2FoOT9G2PbUo5lmz7xxrnYnxDe0tbTn4scFL8dOj4SVLgUb%2Fl4W6krO%2BpgminVfO9DJvfuxj%2B4iYmbz1%2BzUjSD%2FuUTxJnWirD7b3tDGRJHR0pq5a28h6t6uvOitGwyJfCVBn0S5NOTehC%2FZPTfpYrcG3bqSjSWp0kGBO8WtOgF1k0IPAgsF36ux4F3qgCRRPQgOYBKTt4gl275iiB%2BE3B%2FIH1l%2BQuN1iigS3FYmCuy4dguzqIwNu5MuF21kKV5H1ILlwBoTpeTAWbU2RfckZ8QHwUa5vwm13P%2B7NjblD7EhugeBVazBCZ3G7BH2cpkuo8aq5vsgii0N3zNcYJlqCrDIz2Nro1WMoNKtTqEnDgTJO8MLK8nNIGOqUBpkxwom0SJGYJbc5LqIROYY%2BERXJW5zVAVWPEo%2FmoVG1nYeZeGyU0Jf%2F4fL0nSBDWhZc0xYtXbtGw%2F%2FasZYUMckNuTHpvo1N2OfoACgRrAeicCHIxC8ERhf33ZPwoK%2FllG0J5VmzEnKjh8jSzy5UQj%2BGJI%2FguQs%2Bx%2F37UaHtWSvohZyPJ%2BXJV8h0N2dNMwGbA5x1EFNQ32819znEZdQPtIkj9JzEl&X-Amz-Signature=28006c0fdd1946c7c30d03e59961b0d0ffa4cbe48d191fe673f159ab09fea61a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USRKVGWF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICCR%2BCo1bz4KZIJzF7lrTUWStLSodfciTYz9YzivCZZXAiEA%2FMSxThXzklQzf8YPXDpwe8OFRfu1kM9EcX0PnpEneyUq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDIctOT52mLEFmTl8ECrcA5COEAq6lfIJQ0gmKyssxcmXMcJN66NFSnVsSW9BRz4T64Pnje%2BoPfc5ngBbFNCP83cwTX7teOreJ92UljuHQ0w57F%2BK7bSRmn2fbn8%2BNpo17zgIjTViVBxIi7REk5uspvbTOK4Yx3VRUJPBXM39kZP2040Xdq0X1qbG0aUbZscGOBFsBaP0cqs%2Fk49v%2Bi43vAXzFyQlUQdXktxJESIpQzdyiaqJ6NXvj%2FHbboQF5cQ%2BSV6oKQYzDEQtJ%2FAClj%2FDBkBkjH%2FXteIFfX5cLbASXHc2WoTzwX5t7pOSve%2BZrb%2FV1Y4JKTsBJ1a8cxdSBrFAHIPHGZtq6hqtpEwBlitp8gDNZ5QPLrUCBdFOE3Me4HHsvARdm5BP4GjvLk5srvAVW%2F1cvfAMd%2F11LofmsrfZQE41MUeH2KguamVsQoaswH00S8Czpi%2FKY0lAkIdO9sFJF0mUppjmzZYswg8REzQyhcn6oeY5MvRZQdYJxcavBMWUcfVZ5%2BVCLzvK7tz1pd0So2j57AC7R1cPpnB%2FJrQ1vQ3z0%2BZKLHS4p4iqib9XoSCgoIqZss%2FEqglRsR49VO9SAr1iKQQEtGFWRZoov50lDyjZo9%2FO7quyE%2B1jyt1pmPyj6scr8LoejBjiWUmPMPW6nNIGOqUBArnF46UljaoqB%2B%2BCv1cN948xWrMi37uvJpJaZ681XSHcP4xtqf%2BoOvgNRz3pe1vvbOqrzfluPPXHJM8vxraWEih26uhbnOBohMgVB7bbd9wRGzenTm%2Faja%2BLLPWnKy7BLsnSuVz4veKXe2tmIOVa2b%2BaIWkMPzydrh6%2BhEL4O%2FjjeYg4CCkhMGYIKGGYAcmdKo2Or8zI23RX%2BKu8bbsOtvWNROzY&X-Amz-Signature=d89ae9729f5e33aeec10f7468423bbb8f0fc857b45b8eb87cdf1185117eec300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2CGW4W5%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDDMd84k45Er0iHMVSR3wNqXNU4iD8RU%2FLSdqdnJa1F4wIhAPWA2UnFfz4TRtROANAwm%2Fc%2BGfeweRupfqCO2XedTnKKKv8DCAQQABoMNjM3NDIzMTgzODA1IgwUaYoeQtjXA5mzX%2FEq3AOQ6EDbYBLd1DgGICs3LxF7LPjbYuTi5J3RAMJAilDpBPgBRrnxPWyvuXFHYazLGuRspG21ALd0lbrWsiBP1%2FInjwa5xEuhMicRfIJU%2Bspap3xTkEK5s5t9U%2FghFUWhZI7pxE42WtdBe%2FVBiqaBVCTOhwX20lwLJPpN2yZIuRt6oj2RlHcdUEzSQXdqC80yMLE%2FgLeXEcNQl1Gp5S9mDoUUJgQGXESS7WoUICkr6sBKtSgsMtAHu3FguPy6jCviRMxRKOtarroVExY0HmS3gy2oNq5jpoCbOndOwxB5NNhqc5Dcn3sqrnrysuvUsJyeZHolads%2FFFzjfoLEEHXtPiPFbM4BUqTNFMG9pPZQvMQUuzphlykhYZiDH7pfdriNYWxFurIlRUZ3r2ZmOAeNPNk59ei8%2FDoehU6VqGcQ8aTGdc55msx4S%2BsS2z3A8i3JRXOoVQZXtSQvJM6HmLX89HHS%2FfG0D3wYx%2BX05%2FNXVRZSeiHi%2B22owbEN6TbS430%2Bpv7g87vRaBXDgk%2BLYmhIbFmG8giN7DJR17GAd0fF19THz3LPTa95TbDnMYszh5qBL%2FX1MM5q0XkwPbEo4SIoROKQqT7fuXRJTH7oVVokfQL5SSlRBfKJ4cdBkHY8BjCcvJzSBjqkAbn3heVfDqL7XpNbSnlGYKxPp0EQ5iFF3UiSclEjPxcfQp3qq6Ye%2Bn3nCojvDJY%2BV1%2FeP8ki3fuu3PXbsJVd1lPcK%2B9Sp6zMG%2F6%2BN4tx3aET74Hmro2K0T1ud5c2JaEHm9zEu%2Fm5QUEhohznHIFLRR6X8qvKdHaCqyP%2FMfRaA3u9V3RnS0hd3F%2BaKIDEAd24b%2B1%2BVVBfIiHYQTUIaKD%2F8%2BXaEGwA&X-Amz-Signature=4b6cb010390bd87c2f805e02bbb058c76b7b121da3583c78bbb431aaa4e13e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USRKVGWF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICCR%2BCo1bz4KZIJzF7lrTUWStLSodfciTYz9YzivCZZXAiEA%2FMSxThXzklQzf8YPXDpwe8OFRfu1kM9EcX0PnpEneyUq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDIctOT52mLEFmTl8ECrcA5COEAq6lfIJQ0gmKyssxcmXMcJN66NFSnVsSW9BRz4T64Pnje%2BoPfc5ngBbFNCP83cwTX7teOreJ92UljuHQ0w57F%2BK7bSRmn2fbn8%2BNpo17zgIjTViVBxIi7REk5uspvbTOK4Yx3VRUJPBXM39kZP2040Xdq0X1qbG0aUbZscGOBFsBaP0cqs%2Fk49v%2Bi43vAXzFyQlUQdXktxJESIpQzdyiaqJ6NXvj%2FHbboQF5cQ%2BSV6oKQYzDEQtJ%2FAClj%2FDBkBkjH%2FXteIFfX5cLbASXHc2WoTzwX5t7pOSve%2BZrb%2FV1Y4JKTsBJ1a8cxdSBrFAHIPHGZtq6hqtpEwBlitp8gDNZ5QPLrUCBdFOE3Me4HHsvARdm5BP4GjvLk5srvAVW%2F1cvfAMd%2F11LofmsrfZQE41MUeH2KguamVsQoaswH00S8Czpi%2FKY0lAkIdO9sFJF0mUppjmzZYswg8REzQyhcn6oeY5MvRZQdYJxcavBMWUcfVZ5%2BVCLzvK7tz1pd0So2j57AC7R1cPpnB%2FJrQ1vQ3z0%2BZKLHS4p4iqib9XoSCgoIqZss%2FEqglRsR49VO9SAr1iKQQEtGFWRZoov50lDyjZo9%2FO7quyE%2B1jyt1pmPyj6scr8LoejBjiWUmPMPW6nNIGOqUBArnF46UljaoqB%2B%2BCv1cN948xWrMi37uvJpJaZ681XSHcP4xtqf%2BoOvgNRz3pe1vvbOqrzfluPPXHJM8vxraWEih26uhbnOBohMgVB7bbd9wRGzenTm%2Faja%2BLLPWnKy7BLsnSuVz4veKXe2tmIOVa2b%2BaIWkMPzydrh6%2BhEL4O%2FjjeYg4CCkhMGYIKGGYAcmdKo2Or8zI23RX%2BKu8bbsOtvWNROzY&X-Amz-Signature=ab6e020a11bb94a3bcd6d772c0735acd2e740571b3db27b6dba9c043e851dd56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665L4JM5T%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCeRUt4sT0lEspOsyaQc5c0%2BDT6ZNqXhJ9Y7377YmkZ0wIhAL4UOK4TYt11uwvL%2B8tGpbTUiiR0Khkbd2UFJpL%2Baoy0Kv8DCAMQABoMNjM3NDIzMTgzODA1IgyGs%2FMUogR8q0N%2BP7wq3AOPU2lV3ezlM2O4hgShJX%2BCarXZEFX8QiAixHX%2FpFqLv5rWCGvTM%2Bn9yJq2MDYWM4NXO8Ux6lUfxa8vURTVgu9%2Fyhdkc2RvNk4hHzT0edvIY1rlydzwXSg%2FXLzuWjwQLdYydSFxC3RTSkQ%2F6IJR0XiRGwVyNtfNxwI6HSsw1UbdoY0Io9K7QbRcS5fSgf8MaH8dC8Kg6A5ipEF8pAJWMhu7FoNsgCSs%2BIDQf6aE%2FrerYCxxXOx6SGo6jcso09hyNLWbzStSlB1ZZ6DZV8LbQJTQqH2tZ6JWo%2FWho%2BQqbFCb0GbbKPzTGid80V2uHP5icUw%2BUV%2FxFrfxwsVl8HXhXFxx2giQ4l0EFzTqvp6wkepG2mWJAhlEhzf60FR6AwNnl%2BhgTVA7nCWKzOTZHSH7ep%2F094Cn0Rff2NtroCJZJDBgB9Oaz5s2pdHEZcmAZ%2F3EAfa7h2qyiPuMf20EooGOEr5GnULN9gwY0QQjmyCTEBPcllIfKpaFgRT6J2oIFC%2FRDmwhg250f25Hr0dW3F80NZQb99H79sHo%2BNucTnfs7BBCEY%2F5VzOKZULGf6Y4EB9Nl87GHTlChiMHMynRv5mvL83Zaw09QfGb0Tus2%2BSkGCwblbzAyFxz%2FwldJW8AhDDduZzSBjqkAeLchTq0Q2sBk7BPnhcYiOdGn9MxzMoP3uPS09PUrmQvw2uH%2BFUoyH%2BoXbZROS0X8xYKk%2BjNvzL7uhc02FPJ0zgWFDTr730Ja%2BRpE4qOA6%2BoTaAvJ0V76YPvfVrpx6AVaEoWTaEFsieaWFbniMg6u66QwzKzEhMag2rOpA6fZakJ4fQM03VXqs7FvUatuV2bl6RuJFObO2vEvw40WNNwiceHhiQ4&X-Amz-Signature=ce8ad22e77a5436c647c9dcd5173da5ca0c54563c9e84c4d0f65f2bff1acdabf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USRKVGWF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICCR%2BCo1bz4KZIJzF7lrTUWStLSodfciTYz9YzivCZZXAiEA%2FMSxThXzklQzf8YPXDpwe8OFRfu1kM9EcX0PnpEneyUq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDIctOT52mLEFmTl8ECrcA5COEAq6lfIJQ0gmKyssxcmXMcJN66NFSnVsSW9BRz4T64Pnje%2BoPfc5ngBbFNCP83cwTX7teOreJ92UljuHQ0w57F%2BK7bSRmn2fbn8%2BNpo17zgIjTViVBxIi7REk5uspvbTOK4Yx3VRUJPBXM39kZP2040Xdq0X1qbG0aUbZscGOBFsBaP0cqs%2Fk49v%2Bi43vAXzFyQlUQdXktxJESIpQzdyiaqJ6NXvj%2FHbboQF5cQ%2BSV6oKQYzDEQtJ%2FAClj%2FDBkBkjH%2FXteIFfX5cLbASXHc2WoTzwX5t7pOSve%2BZrb%2FV1Y4JKTsBJ1a8cxdSBrFAHIPHGZtq6hqtpEwBlitp8gDNZ5QPLrUCBdFOE3Me4HHsvARdm5BP4GjvLk5srvAVW%2F1cvfAMd%2F11LofmsrfZQE41MUeH2KguamVsQoaswH00S8Czpi%2FKY0lAkIdO9sFJF0mUppjmzZYswg8REzQyhcn6oeY5MvRZQdYJxcavBMWUcfVZ5%2BVCLzvK7tz1pd0So2j57AC7R1cPpnB%2FJrQ1vQ3z0%2BZKLHS4p4iqib9XoSCgoIqZss%2FEqglRsR49VO9SAr1iKQQEtGFWRZoov50lDyjZo9%2FO7quyE%2B1jyt1pmPyj6scr8LoejBjiWUmPMPW6nNIGOqUBArnF46UljaoqB%2B%2BCv1cN948xWrMi37uvJpJaZ681XSHcP4xtqf%2BoOvgNRz3pe1vvbOqrzfluPPXHJM8vxraWEih26uhbnOBohMgVB7bbd9wRGzenTm%2Faja%2BLLPWnKy7BLsnSuVz4veKXe2tmIOVa2b%2BaIWkMPzydrh6%2BhEL4O%2FjjeYg4CCkhMGYIKGGYAcmdKo2Or8zI23RX%2BKu8bbsOtvWNROzY&X-Amz-Signature=f88a1c6ae808286b089151d426b0116f298a72a1af6e5ea248c033fc36d373e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLIU7B6M%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFt%2FsHAcUfwZnR0qGU7cQTVlZYhlwTO0Bk%2Bl7Mco4svlAiEAkZT0OCQZL%2B5EC6%2Bppp3HaEBGYGjVYs9ZKgZEAfBffBcq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDFE64EHRSQ32hoocTCrcA8sleoy63REabK6ys%2FAX3iJjaO%2F9dXdXsVftHCezntNsdWApt455Sub4S4smzSp0MfS4Wtx1RFmrvlctRUKfjktjcj5SHdZV8oKBlDbi5zkyzRQGaosemxXpbSJXlO8nWSrs%2Fsn1lJHr1sauf6UO1IQa%2BykW67qqQhQ9JhdmFoeKcizrBIJpa5DfJ1AIpayUHvd6XL3KUQKSYtBpCCqJIZxV6V3X2nR5ZCtG4%2FNlEj%2BT1QXZP73VjpQCm1Wwpxb83PCYIiQo%2Bj5lkqN2xrXfGcy%2B2af1TTS6b%2BallZwqsvs59ZLGCFWLHdNczJyLnHmQB%2FYXItQuhhjkwoQY0t1048NHerwa7SZBiIETL3%2B8Poo7oLARV79znITEW1azRi3CZj8KmehWm2p%2FZIp6ccwFV6ypxpYSHHABc9s7SJByHMvwZ8onGKR4FTt5QKmNNVVIe5SM4yGfukWBd9bcP4UXlYqD0Gl8g4AOmfSyzn5z36seelKu9Nz1DFG4IRX6W88uqXb1qgCFaLcXhSLBI8R34hZdripAAkaSKS2nHb%2FXOh%2BhCQX5qnYmpkUNtl6%2FXEZ3s7NkLAkvQbtXQUMfW%2B264mqe1E2mK49B6vqYGg%2FloUnq%2F6zzRYqC%2BJ1h4eN7MLm7nNIGOqUB6ehZyj%2BrXKFLkvNHYHTSxlvnyxUp3LxB3BrelkmHAgtq30rcQFmelygOOfUWvovIW%2FqU1xIbg2gHxQSnF3d5PSZJXMan1uyd7vQ%2BWgFqozAx7lOOuQCcK7Kbpi6ZSCWiyLhWZhftEhUO3zi1EavjDpwJ3IPrnu7FqhMju79mC77GSNFIuMLKjaECCiE6f0Lr1wUWyTLOljPQcebmrcTyhAxKG%2BCp&X-Amz-Signature=473bef697379c57c4c4de1818918536d29cb1e7bde7348828ef986bdda19ef0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USRKVGWF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICCR%2BCo1bz4KZIJzF7lrTUWStLSodfciTYz9YzivCZZXAiEA%2FMSxThXzklQzf8YPXDpwe8OFRfu1kM9EcX0PnpEneyUq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDIctOT52mLEFmTl8ECrcA5COEAq6lfIJQ0gmKyssxcmXMcJN66NFSnVsSW9BRz4T64Pnje%2BoPfc5ngBbFNCP83cwTX7teOreJ92UljuHQ0w57F%2BK7bSRmn2fbn8%2BNpo17zgIjTViVBxIi7REk5uspvbTOK4Yx3VRUJPBXM39kZP2040Xdq0X1qbG0aUbZscGOBFsBaP0cqs%2Fk49v%2Bi43vAXzFyQlUQdXktxJESIpQzdyiaqJ6NXvj%2FHbboQF5cQ%2BSV6oKQYzDEQtJ%2FAClj%2FDBkBkjH%2FXteIFfX5cLbASXHc2WoTzwX5t7pOSve%2BZrb%2FV1Y4JKTsBJ1a8cxdSBrFAHIPHGZtq6hqtpEwBlitp8gDNZ5QPLrUCBdFOE3Me4HHsvARdm5BP4GjvLk5srvAVW%2F1cvfAMd%2F11LofmsrfZQE41MUeH2KguamVsQoaswH00S8Czpi%2FKY0lAkIdO9sFJF0mUppjmzZYswg8REzQyhcn6oeY5MvRZQdYJxcavBMWUcfVZ5%2BVCLzvK7tz1pd0So2j57AC7R1cPpnB%2FJrQ1vQ3z0%2BZKLHS4p4iqib9XoSCgoIqZss%2FEqglRsR49VO9SAr1iKQQEtGFWRZoov50lDyjZo9%2FO7quyE%2B1jyt1pmPyj6scr8LoejBjiWUmPMPW6nNIGOqUBArnF46UljaoqB%2B%2BCv1cN948xWrMi37uvJpJaZ681XSHcP4xtqf%2BoOvgNRz3pe1vvbOqrzfluPPXHJM8vxraWEih26uhbnOBohMgVB7bbd9wRGzenTm%2Faja%2BLLPWnKy7BLsnSuVz4veKXe2tmIOVa2b%2BaIWkMPzydrh6%2BhEL4O%2FjjeYg4CCkhMGYIKGGYAcmdKo2Or8zI23RX%2BKu8bbsOtvWNROzY&X-Amz-Signature=c8ec1c64f76ce295d156fa9dd052254f381ca49101f7aa18a11919751e2edd3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIZMS3AE%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQD84cqMa4RUnns739DNPPj8KYqAqeDXVZd9gMAgobnK8gIgcVQOMJFWuaNPLNgw%2F7vFBKbR5V5vUaGrWZc211h9wJ8q%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDDcT5gz290LK0Bqp2SrcA1zBpZDD9nYVuZXnm3hn1cO36BIxh%2F2bnSQ8hcDE8u%2BwLSm8vLYRUOioNkUbHBU4J7d3HT0MAFCP2WwGq76yLuaN%2FYc7qPw9AJ7Sb7flfshzkrXXe4zpoa2RF0YNVH2ZeeBNfvKDUQjpSxS%2FgnaGrQgWjBdCPYkEXk%2FF0ukKFcBYU9yNxPirK3qFlaCzASxgdy%2BZ1KMrsiUIVAiyRgFMEI5lheksN6CtlKbaPw6YdyoBIFcaBT4n91BKsbUg1dsc5kXeh4ykOgzQEX51cvIfQlrhiay4lqGm5ghQFjo7zpKAuPQraXWB6maw7G44y86%2Bjvw7WvWh4oUcoPmys1bApYMr17CZNuH2UrOobSpBKGfYF%2FhRcYHzyyCEHxLXUin%2FG%2FSragBcUCXQvvcIvF1fyajP6ua2j1fiArDa0aVmooWQpxCXy8zeao5XQaMYQNqIpUW5NWDAk%2B3ScbK3gIBrAClTS7IUCsHQwcDQOj%2FE8NY7joon1kUHpCDc%2F8tmLY8UwuXnuYMPFtF1Bv87q66p0M8DyyxqpLlAZG0q%2BFulmfFxxunQjFLHoxi%2FP6qoI3I7FQQyh8Zgk%2F%2BlxqCd0GeQJOaJAX9gdPXZihzuraGHAI7ceUispnFDHqkOvtKdMNG5nNIGOqUBT%2FQYhvjeA%2BodLb5tOc44aiNXMmOt049O7MRpdUQDfbX1jS%2B2kNLG3SrWEHGIo3wE3ERMg%2Bvb7JwI1jBKXEsJ%2FMkQ9kYTB1VsqEMdP66zkxMRBIBpAFbhHA3szQHk2bMkIxnqMWs8sB4Jo0sW0ZGAWoxI77nLX2QYqnmZ2KZxWFl2Q%2FXDVx9YMHUYIc6ThiODet6u%2BOeiV3Boxq6JGAPCZrEHWEZn&X-Amz-Signature=6195569c855fc59b43a912db913d5435762a64421e93d8d763227f0056238445&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USRKVGWF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICCR%2BCo1bz4KZIJzF7lrTUWStLSodfciTYz9YzivCZZXAiEA%2FMSxThXzklQzf8YPXDpwe8OFRfu1kM9EcX0PnpEneyUq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDIctOT52mLEFmTl8ECrcA5COEAq6lfIJQ0gmKyssxcmXMcJN66NFSnVsSW9BRz4T64Pnje%2BoPfc5ngBbFNCP83cwTX7teOreJ92UljuHQ0w57F%2BK7bSRmn2fbn8%2BNpo17zgIjTViVBxIi7REk5uspvbTOK4Yx3VRUJPBXM39kZP2040Xdq0X1qbG0aUbZscGOBFsBaP0cqs%2Fk49v%2Bi43vAXzFyQlUQdXktxJESIpQzdyiaqJ6NXvj%2FHbboQF5cQ%2BSV6oKQYzDEQtJ%2FAClj%2FDBkBkjH%2FXteIFfX5cLbASXHc2WoTzwX5t7pOSve%2BZrb%2FV1Y4JKTsBJ1a8cxdSBrFAHIPHGZtq6hqtpEwBlitp8gDNZ5QPLrUCBdFOE3Me4HHsvARdm5BP4GjvLk5srvAVW%2F1cvfAMd%2F11LofmsrfZQE41MUeH2KguamVsQoaswH00S8Czpi%2FKY0lAkIdO9sFJF0mUppjmzZYswg8REzQyhcn6oeY5MvRZQdYJxcavBMWUcfVZ5%2BVCLzvK7tz1pd0So2j57AC7R1cPpnB%2FJrQ1vQ3z0%2BZKLHS4p4iqib9XoSCgoIqZss%2FEqglRsR49VO9SAr1iKQQEtGFWRZoov50lDyjZo9%2FO7quyE%2B1jyt1pmPyj6scr8LoejBjiWUmPMPW6nNIGOqUBArnF46UljaoqB%2B%2BCv1cN948xWrMi37uvJpJaZ681XSHcP4xtqf%2BoOvgNRz3pe1vvbOqrzfluPPXHJM8vxraWEih26uhbnOBohMgVB7bbd9wRGzenTm%2Faja%2BLLPWnKy7BLsnSuVz4veKXe2tmIOVa2b%2BaIWkMPzydrh6%2BhEL4O%2FjjeYg4CCkhMGYIKGGYAcmdKo2Or8zI23RX%2BKu8bbsOtvWNROzY&X-Amz-Signature=2ed3fbfa46dd7eb2c28f265e6c664f9ca7c50a538ddbce8e400b9514adddebbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVKAFR6S%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIE0pkbfkYofIpcPvvpoXFLTVd1VIaYRAi20JmiTPt5GwAiAgQBWwrU4S3WkpQUD%2F9bYSkehILNe%2By8jR7pt6Bel8Qir%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMWv6R7HLUe6aHQrPGKtwDSDnGVOG0clZAnG3mS%2FSBsPAblaNYq1hld%2FXEBJCl9EOvY%2FqVD45F7p0OJSu5MErBJxE5JZUGvexoM71lgem2XYSrC1cLzWkMppamIparjpm1r5TtLZWM4MO8iIMP4uzwwZM%2BbTv6RRvNK%2Bc8jySFUvAFXQjLa7JD%2BSa8pW%2FvVGJNRNyBuT0ZVzvG%2FMn9HbeXmjD07u2yzJ%2B3LX9x%2BAGMSzL8V5Dxy0THfUc3U9DPn%2BveHxuszJ57kSTeQ0TLclLzjbLDFBq2H0dEFSxaW57yRUT2hwC7qtOsMKWg2szC%2BaGmJtlI9fXtJY06VaZ4k0ePE29iNOIEq4l6sAqJX6nFjPDgEmmDH2JErNjJnh%2BcFpEg0VEPfGQO2WEefpuKR1U6D80pEAaaRN%2FkK3ykfqMTVnbRITuqMkjOVqRXgJUKUtXwzGGukG457CmHcFcwQPIyWNoA0tEwCVvrEnM5pkQ2o4ruz8rzdrQzEexDMvRDyFRSn2bCdncMkJ35Nqr0r7iPPUorma1gbD9b5Nf%2Bbpm%2BuSdg6%2BX%2F6DzkC%2B3Vj0%2B2Z4Tvzr8pOaOwcr83tlJo3t3UNorYKrr7X0BXCrWZVNTVMSLE7spq77iXr7yRzqoTpQU2RG4hbn%2B665E0utUwsbqc0gY6pgHNylzqiqeuqxEBW80qL47UNLOW0uKwz7PfC4ai5SJX4p4VTBvNnh53CGvSAOFafsFTQdyAU%2B%2BcpNG8Moy1zMEzqpQheeIXucu3qcrv83kCTYFJLRp3h8jJfV4BIz2Q6EslMdHpgDfEvnXNeotiux9cTUzGcsBBqFefzJ8R3CRSxHVGa3lMrrVYaeVzt4XTbzZdeNRfyDYXnc2I8n4OstCY0yeShO7l&X-Amz-Signature=bbcb4029224b26a2a3f30a139d904d867cb529371c123fb82303a370bf631a2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMAC2IDQ%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDtgSMyEQfgsRAK95y58EW6X6yzQzT35VUGfObNix02hQIhAPVHfbeeY4Hn%2FGTR%2F9mTXNrSHHQxPxZGZVuNUoLSoHLbKv8DCAMQABoMNjM3NDIzMTgzODA1IgzcPeoRT%2F0b93cHXE4q3AN%2BzvVAaz0Brg6Rf%2B2x%2FCJpbodcQLmTRzpUQXOZeKiFKnxBfYMRcM5Y1LSJ2%2FKBTU4SvPFIbftwGUAaFh91yijlbopJVhsYMgT59ITvIj0rt070OsGO7t4kOuPNk7%2B6BXdE8LQ8u8E7PnkomX1YGd8LNMmZDk0gvFCEmPz6Q2SCsqKouqMOy1Nh9HBa8udhQrUWoEHGVQ7h8hFDYq0Ve0RxXynrZ2zdvear9sYNMpSSpuIkxMiikOFcs4cOuBQcYXgxerKQZ0A2Gik8XdzT97LsGxhjwTSUgk8kUxhfZzztSo0nc%2FyZYrgolg42T5WpIMgifKvPhfGj2vFTEDgofLY6vmcftUsnUpICJtBx%2Fp2D%2FWAoQziSaRsBu7fFTgvgzj8E7Wq11goq%2FPZqYdRg%2BCeS1nwNLwz4RptBRu6zxlod8n9qkb81M7YUuQ%2BA3Uj1h20mPAYpAlH435%2BduU99TYVbOPR6W4M0B9bkjOscMfb6IgcVDvG0BigK3lq%2FiRPDSsgWgWakN0tzFoFenAVwsEnMwwNXhO%2B%2F0ltVUD3HHeOGdz%2Bdv%2FUefF4K7aC4QklvSDIcwOEmu0PFnsrcB1fFq1IJnV5sl59Eoz%2FDTz1AH3HiUnuzJ0Vi2rg06wx2KjD1uZzSBjqkAZJY4mZ0cntMiLsh5%2FVtU8H64tvhIRUM1kNrLU1eJpR3F6W7LU6XO1rJQ9f%2BRGCFFywJa9haV8psE46akt1FH9knPfhkAstBM9A%2F7JSpOb%2B2%2FKuIh0r44U4sUsRn2Ha4p2nst%2BML%2B0fQxx2pBRY%2BhP5mjS%2FGWSYuKqry4xKsorujiXl8RfPfx109TnJVeF9iLErijbglckNjMfQa0fB0DERN3cRa&X-Amz-Signature=b0e87969edf5bcfca30a616f08d8ec9d8c394f712c507f7ccb27fb18818d162b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GCVQ6LF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCc75ohVlSp5VoEABci2y7K%2B1L6BddBPmaq3VualeAi8AIgb%2Bi13POgn7nXpFPNEeO8Bqi3zEH7ZMkFwe%2FAGoMzpNIq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDJfd7Q6vb5hr1MQSTSrcA8aa1YmWcUtKINjg%2BluDvxWIecel3GT2as0r4QBEkbZj5rMP%2Fkt3b8sCble8mRa9C1d%2FqdFIt8URa%2FJp0287P640sevDDs2%2BxNRY%2BeVMJIc4cBHSZ7FZzMigkgXed%2Fff1QXFUrsvS2ero0%2BVU35geqqyImbyDe6daIxCIz5n0OV79vF7oz09Gzy0O7RwXcep%2F22Z3dO71bzE3h0bnV6cM5VeYjl62xTrUdo8gCxXf%2BBd2FC6wR4x6QV%2FAZpq3K14J%2BYPAnsog0ObiRNFRlep0zwoufAN1jBG%2Fu9YRAWQ8nYeGtqnhSjAHTH7p4QrkMVrJDxiY7of4Ley4TSyZJM9Zn3%2B%2BEbReuxekafpGYb2WCZC2BBwSgPTH71BGRi1vqei9agbwUhTEDQvKYwsMsBOf2GFeC5k8d6EMA3iWZ%2BXwT51NJnPLFgObP439nozxFoGoMAx%2BtJo3w4GjTtie%2Fq7Qp8o%2B7I%2FQXhUnW1AjzWCwW%2BGjyWnUic3JZXDhdeyr8%2BoiN8AWE%2BvTZ%2FDK5XlvQE5%2BXs5Z9ksfxWuz4ybRR2N%2BnacZ8BsFwlOdxD%2BSzTDAWQGoCRwhP6JTGBVaQlzZVZvnf3ToxIsJK0WIQfPHiT7cpRMGZGkDLBfNaA6lNyiMM%2B6nNIGOqUBN7HIvfQMlzUv2czor4O6Fo%2FuJznISeaFLegljWpUs87oLvz6lUfx3NS0J6oriPrb965AiP9eKk1QjHkz4VI5JvEfR3OydqDKWhuh0yz10lb039KNonsrQbDtjelqI85Rz6e2MOQR3xJl8D6nP5C%2B1Ehnk0BnXvlJaFng0aunN5AHtrD4NNXi7XH5ORpf3CFAG0%2FBtYCJlVDFlvNP5%2BvobIjbXzSO&X-Amz-Signature=69901520a85a4cbf372bd6d9b71e1852ad65944bde316df50f7f2d8e26739a7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USRKVGWF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICCR%2BCo1bz4KZIJzF7lrTUWStLSodfciTYz9YzivCZZXAiEA%2FMSxThXzklQzf8YPXDpwe8OFRfu1kM9EcX0PnpEneyUq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDIctOT52mLEFmTl8ECrcA5COEAq6lfIJQ0gmKyssxcmXMcJN66NFSnVsSW9BRz4T64Pnje%2BoPfc5ngBbFNCP83cwTX7teOreJ92UljuHQ0w57F%2BK7bSRmn2fbn8%2BNpo17zgIjTViVBxIi7REk5uspvbTOK4Yx3VRUJPBXM39kZP2040Xdq0X1qbG0aUbZscGOBFsBaP0cqs%2Fk49v%2Bi43vAXzFyQlUQdXktxJESIpQzdyiaqJ6NXvj%2FHbboQF5cQ%2BSV6oKQYzDEQtJ%2FAClj%2FDBkBkjH%2FXteIFfX5cLbASXHc2WoTzwX5t7pOSve%2BZrb%2FV1Y4JKTsBJ1a8cxdSBrFAHIPHGZtq6hqtpEwBlitp8gDNZ5QPLrUCBdFOE3Me4HHsvARdm5BP4GjvLk5srvAVW%2F1cvfAMd%2F11LofmsrfZQE41MUeH2KguamVsQoaswH00S8Czpi%2FKY0lAkIdO9sFJF0mUppjmzZYswg8REzQyhcn6oeY5MvRZQdYJxcavBMWUcfVZ5%2BVCLzvK7tz1pd0So2j57AC7R1cPpnB%2FJrQ1vQ3z0%2BZKLHS4p4iqib9XoSCgoIqZss%2FEqglRsR49VO9SAr1iKQQEtGFWRZoov50lDyjZo9%2FO7quyE%2B1jyt1pmPyj6scr8LoejBjiWUmPMPW6nNIGOqUBArnF46UljaoqB%2B%2BCv1cN948xWrMi37uvJpJaZ681XSHcP4xtqf%2BoOvgNRz3pe1vvbOqrzfluPPXHJM8vxraWEih26uhbnOBohMgVB7bbd9wRGzenTm%2Faja%2BLLPWnKy7BLsnSuVz4veKXe2tmIOVa2b%2BaIWkMPzydrh6%2BhEL4O%2FjjeYg4CCkhMGYIKGGYAcmdKo2Or8zI23RX%2BKu8bbsOtvWNROzY&X-Amz-Signature=8cfd9796edb5c3ad187c7717b22c8704f952beba83aa7863c7936fe4a2807146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USRKVGWF%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICCR%2BCo1bz4KZIJzF7lrTUWStLSodfciTYz9YzivCZZXAiEA%2FMSxThXzklQzf8YPXDpwe8OFRfu1kM9EcX0PnpEneyUq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDIctOT52mLEFmTl8ECrcA5COEAq6lfIJQ0gmKyssxcmXMcJN66NFSnVsSW9BRz4T64Pnje%2BoPfc5ngBbFNCP83cwTX7teOreJ92UljuHQ0w57F%2BK7bSRmn2fbn8%2BNpo17zgIjTViVBxIi7REk5uspvbTOK4Yx3VRUJPBXM39kZP2040Xdq0X1qbG0aUbZscGOBFsBaP0cqs%2Fk49v%2Bi43vAXzFyQlUQdXktxJESIpQzdyiaqJ6NXvj%2FHbboQF5cQ%2BSV6oKQYzDEQtJ%2FAClj%2FDBkBkjH%2FXteIFfX5cLbASXHc2WoTzwX5t7pOSve%2BZrb%2FV1Y4JKTsBJ1a8cxdSBrFAHIPHGZtq6hqtpEwBlitp8gDNZ5QPLrUCBdFOE3Me4HHsvARdm5BP4GjvLk5srvAVW%2F1cvfAMd%2F11LofmsrfZQE41MUeH2KguamVsQoaswH00S8Czpi%2FKY0lAkIdO9sFJF0mUppjmzZYswg8REzQyhcn6oeY5MvRZQdYJxcavBMWUcfVZ5%2BVCLzvK7tz1pd0So2j57AC7R1cPpnB%2FJrQ1vQ3z0%2BZKLHS4p4iqib9XoSCgoIqZss%2FEqglRsR49VO9SAr1iKQQEtGFWRZoov50lDyjZo9%2FO7quyE%2B1jyt1pmPyj6scr8LoejBjiWUmPMPW6nNIGOqUBArnF46UljaoqB%2B%2BCv1cN948xWrMi37uvJpJaZ681XSHcP4xtqf%2BoOvgNRz3pe1vvbOqrzfluPPXHJM8vxraWEih26uhbnOBohMgVB7bbd9wRGzenTm%2Faja%2BLLPWnKy7BLsnSuVz4veKXe2tmIOVa2b%2BaIWkMPzydrh6%2BhEL4O%2FjjeYg4CCkhMGYIKGGYAcmdKo2Or8zI23RX%2BKu8bbsOtvWNROzY&X-Amz-Signature=41a2db07d6317abae5bc07099aabea41e2a8aab4898ea4c4e85a6c253a3100a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UZL6AHB%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCc9keyE%2FBLR2phmpxgVl0ay6RmZ4eUzbiL0nUC2NGkSwIgWtEojmDL0Z15KMJfH%2BqHen%2BRQjiaS0EmX9VJA7eB9vQq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDDwMr3ZIkIEAXivg2ircA%2BNDxLELTQXA4y%2FKdpb8oIFbsOBmlqfMb5oao52X0OVMQ%2FVLz0jDStsjiiF1GC748MgKchUUOBf0YETe4DbIoCA0%2BVYC%2BgAJL1M%2F5gGLppJpVW9XDfY%2BBtcDaAALF5mFVP%2BaqqWF5%2Bq3TrvCkAQsQmgbMHpHpAc5LDIEuqHEHDRVuU2KAMNTlzKUfWFS1AjIpK8l7eiaHQdk5mj7PudJ6wI03lOptD4Ms3orWL%2FuyaDLth%2BW9A4evVTV2STEAzv3SB0YH93OomKPqoQSWY8CSyluVBtb7XaI5JBk8V%2BMLSY4STMBnt4ZdmpMqKIbW%2BEhf8liRoa26u38zE1hjJK%2FEjw9uEmjSCBcgnofOme%2BSJa00hvSTtBLhRoCPA3AleomT%2Fz0Sj4Ynzj%2Fzyr1IpCbmwDJuzJHGMZbELIUqa7eMyzyH6jvIpLZYQL0LvvnPYBTmuLNhVMabfK2DouZC5N0xvwNv9Cqtdx0z2wPUt71oy0VCzh%2BKBH83pLg%2FEfsVzpbnsJZAUSpdwbpYFm%2F%2F3bZzLMr0BoHexsioo4qmU1imzGX1ozLp%2F9r5D8Yh%2FVVFI8%2FxnNuWpM1VDrqBdEAbIdeR1oh4OI51nF%2FTEF8yeaufWfMFTGNa%2B4%2FdSGiumPNMJ25nNIGOqUBpahoUuhR4HhC1u7mdY%2BSFzTpIZLas7LUab454M5v%2Fz%2B7bMB4Bu%2BcIutZWRdY9h7cRyHKAaSrPKOiGss0hi00tRUbbLAXvQM1vBRre5gK%2FBirtk1ivKu64VWDvzBlRwWCubJbLJfjmrDfMrQ0T3EWYSlNFChIIchc44HzhPy9%2BMx%2ByvRfSniqFJH6exAQR0drT%2Bmy0EmiBIzC7pBknrW%2BjgHJOk0u&X-Amz-Signature=091dd1931156ba7ba2df0e0f0bc0baccfac471a82f2587392d9ba2599073f298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UZL6AHB%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCc9keyE%2FBLR2phmpxgVl0ay6RmZ4eUzbiL0nUC2NGkSwIgWtEojmDL0Z15KMJfH%2BqHen%2BRQjiaS0EmX9VJA7eB9vQq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDDwMr3ZIkIEAXivg2ircA%2BNDxLELTQXA4y%2FKdpb8oIFbsOBmlqfMb5oao52X0OVMQ%2FVLz0jDStsjiiF1GC748MgKchUUOBf0YETe4DbIoCA0%2BVYC%2BgAJL1M%2F5gGLppJpVW9XDfY%2BBtcDaAALF5mFVP%2BaqqWF5%2Bq3TrvCkAQsQmgbMHpHpAc5LDIEuqHEHDRVuU2KAMNTlzKUfWFS1AjIpK8l7eiaHQdk5mj7PudJ6wI03lOptD4Ms3orWL%2FuyaDLth%2BW9A4evVTV2STEAzv3SB0YH93OomKPqoQSWY8CSyluVBtb7XaI5JBk8V%2BMLSY4STMBnt4ZdmpMqKIbW%2BEhf8liRoa26u38zE1hjJK%2FEjw9uEmjSCBcgnofOme%2BSJa00hvSTtBLhRoCPA3AleomT%2Fz0Sj4Ynzj%2Fzyr1IpCbmwDJuzJHGMZbELIUqa7eMyzyH6jvIpLZYQL0LvvnPYBTmuLNhVMabfK2DouZC5N0xvwNv9Cqtdx0z2wPUt71oy0VCzh%2BKBH83pLg%2FEfsVzpbnsJZAUSpdwbpYFm%2F%2F3bZzLMr0BoHexsioo4qmU1imzGX1ozLp%2F9r5D8Yh%2FVVFI8%2FxnNuWpM1VDrqBdEAbIdeR1oh4OI51nF%2FTEF8yeaufWfMFTGNa%2B4%2FdSGiumPNMJ25nNIGOqUBpahoUuhR4HhC1u7mdY%2BSFzTpIZLas7LUab454M5v%2Fz%2B7bMB4Bu%2BcIutZWRdY9h7cRyHKAaSrPKOiGss0hi00tRUbbLAXvQM1vBRre5gK%2FBirtk1ivKu64VWDvzBlRwWCubJbLJfjmrDfMrQ0T3EWYSlNFChIIchc44HzhPy9%2BMx%2ByvRfSniqFJH6exAQR0drT%2Bmy0EmiBIzC7pBknrW%2BjgHJOk0u&X-Amz-Signature=96e2561bb0e5856dbc02875d9a2238fc0bcff7bec740d773a0aca1cafa40e9bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UZL6AHB%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCc9keyE%2FBLR2phmpxgVl0ay6RmZ4eUzbiL0nUC2NGkSwIgWtEojmDL0Z15KMJfH%2BqHen%2BRQjiaS0EmX9VJA7eB9vQq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDDwMr3ZIkIEAXivg2ircA%2BNDxLELTQXA4y%2FKdpb8oIFbsOBmlqfMb5oao52X0OVMQ%2FVLz0jDStsjiiF1GC748MgKchUUOBf0YETe4DbIoCA0%2BVYC%2BgAJL1M%2F5gGLppJpVW9XDfY%2BBtcDaAALF5mFVP%2BaqqWF5%2Bq3TrvCkAQsQmgbMHpHpAc5LDIEuqHEHDRVuU2KAMNTlzKUfWFS1AjIpK8l7eiaHQdk5mj7PudJ6wI03lOptD4Ms3orWL%2FuyaDLth%2BW9A4evVTV2STEAzv3SB0YH93OomKPqoQSWY8CSyluVBtb7XaI5JBk8V%2BMLSY4STMBnt4ZdmpMqKIbW%2BEhf8liRoa26u38zE1hjJK%2FEjw9uEmjSCBcgnofOme%2BSJa00hvSTtBLhRoCPA3AleomT%2Fz0Sj4Ynzj%2Fzyr1IpCbmwDJuzJHGMZbELIUqa7eMyzyH6jvIpLZYQL0LvvnPYBTmuLNhVMabfK2DouZC5N0xvwNv9Cqtdx0z2wPUt71oy0VCzh%2BKBH83pLg%2FEfsVzpbnsJZAUSpdwbpYFm%2F%2F3bZzLMr0BoHexsioo4qmU1imzGX1ozLp%2F9r5D8Yh%2FVVFI8%2FxnNuWpM1VDrqBdEAbIdeR1oh4OI51nF%2FTEF8yeaufWfMFTGNa%2B4%2FdSGiumPNMJ25nNIGOqUBpahoUuhR4HhC1u7mdY%2BSFzTpIZLas7LUab454M5v%2Fz%2B7bMB4Bu%2BcIutZWRdY9h7cRyHKAaSrPKOiGss0hi00tRUbbLAXvQM1vBRre5gK%2FBirtk1ivKu64VWDvzBlRwWCubJbLJfjmrDfMrQ0T3EWYSlNFChIIchc44HzhPy9%2BMx%2ByvRfSniqFJH6exAQR0drT%2Bmy0EmiBIzC7pBknrW%2BjgHJOk0u&X-Amz-Signature=a65de5a3a878efb271336b4bf686fea4fc93cd787db377ab471ab245c94ecbc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UZL6AHB%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCc9keyE%2FBLR2phmpxgVl0ay6RmZ4eUzbiL0nUC2NGkSwIgWtEojmDL0Z15KMJfH%2BqHen%2BRQjiaS0EmX9VJA7eB9vQq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDDwMr3ZIkIEAXivg2ircA%2BNDxLELTQXA4y%2FKdpb8oIFbsOBmlqfMb5oao52X0OVMQ%2FVLz0jDStsjiiF1GC748MgKchUUOBf0YETe4DbIoCA0%2BVYC%2BgAJL1M%2F5gGLppJpVW9XDfY%2BBtcDaAALF5mFVP%2BaqqWF5%2Bq3TrvCkAQsQmgbMHpHpAc5LDIEuqHEHDRVuU2KAMNTlzKUfWFS1AjIpK8l7eiaHQdk5mj7PudJ6wI03lOptD4Ms3orWL%2FuyaDLth%2BW9A4evVTV2STEAzv3SB0YH93OomKPqoQSWY8CSyluVBtb7XaI5JBk8V%2BMLSY4STMBnt4ZdmpMqKIbW%2BEhf8liRoa26u38zE1hjJK%2FEjw9uEmjSCBcgnofOme%2BSJa00hvSTtBLhRoCPA3AleomT%2Fz0Sj4Ynzj%2Fzyr1IpCbmwDJuzJHGMZbELIUqa7eMyzyH6jvIpLZYQL0LvvnPYBTmuLNhVMabfK2DouZC5N0xvwNv9Cqtdx0z2wPUt71oy0VCzh%2BKBH83pLg%2FEfsVzpbnsJZAUSpdwbpYFm%2F%2F3bZzLMr0BoHexsioo4qmU1imzGX1ozLp%2F9r5D8Yh%2FVVFI8%2FxnNuWpM1VDrqBdEAbIdeR1oh4OI51nF%2FTEF8yeaufWfMFTGNa%2B4%2FdSGiumPNMJ25nNIGOqUBpahoUuhR4HhC1u7mdY%2BSFzTpIZLas7LUab454M5v%2Fz%2B7bMB4Bu%2BcIutZWRdY9h7cRyHKAaSrPKOiGss0hi00tRUbbLAXvQM1vBRre5gK%2FBirtk1ivKu64VWDvzBlRwWCubJbLJfjmrDfMrQ0T3EWYSlNFChIIchc44HzhPy9%2BMx%2ByvRfSniqFJH6exAQR0drT%2Bmy0EmiBIzC7pBknrW%2BjgHJOk0u&X-Amz-Signature=4f43d47f21b5389228c9b29121223aebec7c1a477730e9a48013f59f8e5377e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3MPILR%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIGLLkMMDUj0BKg%2FMXqxqTdVBXGquHXJWubk2X2xawgVrAiEAlMOm1YpENoj%2FC4nRQb9WATzmxG85GDUnFfNQGRWF3FEq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDLjsvCv7KMW3Q%2FqM4ircA%2BXGPMC9HAnIFwP0DsKPIxNorz6SIlTg7H%2BOTgiBZd%2BalAW8dnplPhrUDbsPnEw0ufFSEFuW5Yf5sdsnYp%2BN4aTmBSszv3sG0UFbF4SGtNRQe8FoV1ezBcEmJnmBfDTGnIc70NVBIhket%2BUQLSsHGWB3fW6%2FKdopKCypg6w91N3izPMZlREzLjwux0y2vDqs%2BusbXY%2FuxpbSXw5Lez%2FcZb9z%2BKhthhYUbayOJjy5wGdh2DOvXgmZjvIqvPhcfnKmmXZ4Ug6pm6dgJ0kNVOX%2F5QkV5PFPxqaMaOlVVdkr9k1GCY4fHfamrCK3NaLDAb0a1DZAnKBIWkW56CVLg0RbJO%2FgH8FCU%2FpZ4ufxA9Wa7EkGci%2F7x7y5qbiEni4uF9UpvkMBtPdNt7LZwxn7j8r%2F%2BFI2mdEn650qH%2BMY%2F8ftx1xUQd8E5OFx8k6uLugiSYL8v3MZUxZs7saJIwdSAM47PNm%2F7%2FoX45k42RbDHOY6StPl4jAG7tu5RsY5er4VazMyrggUl5ow7MfEhcF2Keto%2Fj4vlWvlm5AgJ5dfiS2ZPDN1vWg3V1ZySrln2xPbaCQ83MoqamDTX8ey%2BLvWTwYppMx6qP0O%2FkU3Ts8Y9OJCJjH6%2Bv9NF8PlW4fPgDc%2BMLq5nNIGOqUB0CrfKdQ8sWyCq5WJ8By7RP%2BOJJ572YazAMPkSZdMm0MVVymw7tE8IZB%2F7SMRC95Jis43DTKHd8m9UAqvs6TdefRy36%2BgYuqsj8g%2BBrMco2wd%2BweWn6EoAn46lgesm611OqG22uj7G1KojUuBFXxiX9n5KTWgaZlKATIzDzPZFPWpiECtL2sM7EMoIwOHDnu53UM47GCWZRYvW%2F3mAPyR2UmxotHT&X-Amz-Signature=418c884fce6a93c12b006d3659305e6f0e30270f7636cc6cb647477e59a749b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UZL6AHB%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCc9keyE%2FBLR2phmpxgVl0ay6RmZ4eUzbiL0nUC2NGkSwIgWtEojmDL0Z15KMJfH%2BqHen%2BRQjiaS0EmX9VJA7eB9vQq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDDwMr3ZIkIEAXivg2ircA%2BNDxLELTQXA4y%2FKdpb8oIFbsOBmlqfMb5oao52X0OVMQ%2FVLz0jDStsjiiF1GC748MgKchUUOBf0YETe4DbIoCA0%2BVYC%2BgAJL1M%2F5gGLppJpVW9XDfY%2BBtcDaAALF5mFVP%2BaqqWF5%2Bq3TrvCkAQsQmgbMHpHpAc5LDIEuqHEHDRVuU2KAMNTlzKUfWFS1AjIpK8l7eiaHQdk5mj7PudJ6wI03lOptD4Ms3orWL%2FuyaDLth%2BW9A4evVTV2STEAzv3SB0YH93OomKPqoQSWY8CSyluVBtb7XaI5JBk8V%2BMLSY4STMBnt4ZdmpMqKIbW%2BEhf8liRoa26u38zE1hjJK%2FEjw9uEmjSCBcgnofOme%2BSJa00hvSTtBLhRoCPA3AleomT%2Fz0Sj4Ynzj%2Fzyr1IpCbmwDJuzJHGMZbELIUqa7eMyzyH6jvIpLZYQL0LvvnPYBTmuLNhVMabfK2DouZC5N0xvwNv9Cqtdx0z2wPUt71oy0VCzh%2BKBH83pLg%2FEfsVzpbnsJZAUSpdwbpYFm%2F%2F3bZzLMr0BoHexsioo4qmU1imzGX1ozLp%2F9r5D8Yh%2FVVFI8%2FxnNuWpM1VDrqBdEAbIdeR1oh4OI51nF%2FTEF8yeaufWfMFTGNa%2B4%2FdSGiumPNMJ25nNIGOqUBpahoUuhR4HhC1u7mdY%2BSFzTpIZLas7LUab454M5v%2Fz%2B7bMB4Bu%2BcIutZWRdY9h7cRyHKAaSrPKOiGss0hi00tRUbbLAXvQM1vBRre5gK%2FBirtk1ivKu64VWDvzBlRwWCubJbLJfjmrDfMrQ0T3EWYSlNFChIIchc44HzhPy9%2BMx%2ByvRfSniqFJH6exAQR0drT%2Bmy0EmiBIzC7pBknrW%2BjgHJOk0u&X-Amz-Signature=17afc82005ad79c3510b4d707e0b503c566f12d0648b0f50451f469523734942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UZL6AHB%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCc9keyE%2FBLR2phmpxgVl0ay6RmZ4eUzbiL0nUC2NGkSwIgWtEojmDL0Z15KMJfH%2BqHen%2BRQjiaS0EmX9VJA7eB9vQq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDDwMr3ZIkIEAXivg2ircA%2BNDxLELTQXA4y%2FKdpb8oIFbsOBmlqfMb5oao52X0OVMQ%2FVLz0jDStsjiiF1GC748MgKchUUOBf0YETe4DbIoCA0%2BVYC%2BgAJL1M%2F5gGLppJpVW9XDfY%2BBtcDaAALF5mFVP%2BaqqWF5%2Bq3TrvCkAQsQmgbMHpHpAc5LDIEuqHEHDRVuU2KAMNTlzKUfWFS1AjIpK8l7eiaHQdk5mj7PudJ6wI03lOptD4Ms3orWL%2FuyaDLth%2BW9A4evVTV2STEAzv3SB0YH93OomKPqoQSWY8CSyluVBtb7XaI5JBk8V%2BMLSY4STMBnt4ZdmpMqKIbW%2BEhf8liRoa26u38zE1hjJK%2FEjw9uEmjSCBcgnofOme%2BSJa00hvSTtBLhRoCPA3AleomT%2Fz0Sj4Ynzj%2Fzyr1IpCbmwDJuzJHGMZbELIUqa7eMyzyH6jvIpLZYQL0LvvnPYBTmuLNhVMabfK2DouZC5N0xvwNv9Cqtdx0z2wPUt71oy0VCzh%2BKBH83pLg%2FEfsVzpbnsJZAUSpdwbpYFm%2F%2F3bZzLMr0BoHexsioo4qmU1imzGX1ozLp%2F9r5D8Yh%2FVVFI8%2FxnNuWpM1VDrqBdEAbIdeR1oh4OI51nF%2FTEF8yeaufWfMFTGNa%2B4%2FdSGiumPNMJ25nNIGOqUBpahoUuhR4HhC1u7mdY%2BSFzTpIZLas7LUab454M5v%2Fz%2B7bMB4Bu%2BcIutZWRdY9h7cRyHKAaSrPKOiGss0hi00tRUbbLAXvQM1vBRre5gK%2FBirtk1ivKu64VWDvzBlRwWCubJbLJfjmrDfMrQ0T3EWYSlNFChIIchc44HzhPy9%2BMx%2ByvRfSniqFJH6exAQR0drT%2Bmy0EmiBIzC7pBknrW%2BjgHJOk0u&X-Amz-Signature=3e69fe81ff88ad57d2ee6ca0da0a6684081ad2c9bd5d4a002a058540d9822c29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UZL6AHB%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCc9keyE%2FBLR2phmpxgVl0ay6RmZ4eUzbiL0nUC2NGkSwIgWtEojmDL0Z15KMJfH%2BqHen%2BRQjiaS0EmX9VJA7eB9vQq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDDwMr3ZIkIEAXivg2ircA%2BNDxLELTQXA4y%2FKdpb8oIFbsOBmlqfMb5oao52X0OVMQ%2FVLz0jDStsjiiF1GC748MgKchUUOBf0YETe4DbIoCA0%2BVYC%2BgAJL1M%2F5gGLppJpVW9XDfY%2BBtcDaAALF5mFVP%2BaqqWF5%2Bq3TrvCkAQsQmgbMHpHpAc5LDIEuqHEHDRVuU2KAMNTlzKUfWFS1AjIpK8l7eiaHQdk5mj7PudJ6wI03lOptD4Ms3orWL%2FuyaDLth%2BW9A4evVTV2STEAzv3SB0YH93OomKPqoQSWY8CSyluVBtb7XaI5JBk8V%2BMLSY4STMBnt4ZdmpMqKIbW%2BEhf8liRoa26u38zE1hjJK%2FEjw9uEmjSCBcgnofOme%2BSJa00hvSTtBLhRoCPA3AleomT%2Fz0Sj4Ynzj%2Fzyr1IpCbmwDJuzJHGMZbELIUqa7eMyzyH6jvIpLZYQL0LvvnPYBTmuLNhVMabfK2DouZC5N0xvwNv9Cqtdx0z2wPUt71oy0VCzh%2BKBH83pLg%2FEfsVzpbnsJZAUSpdwbpYFm%2F%2F3bZzLMr0BoHexsioo4qmU1imzGX1ozLp%2F9r5D8Yh%2FVVFI8%2FxnNuWpM1VDrqBdEAbIdeR1oh4OI51nF%2FTEF8yeaufWfMFTGNa%2B4%2FdSGiumPNMJ25nNIGOqUBpahoUuhR4HhC1u7mdY%2BSFzTpIZLas7LUab454M5v%2Fz%2B7bMB4Bu%2BcIutZWRdY9h7cRyHKAaSrPKOiGss0hi00tRUbbLAXvQM1vBRre5gK%2FBirtk1ivKu64VWDvzBlRwWCubJbLJfjmrDfMrQ0T3EWYSlNFChIIchc44HzhPy9%2BMx%2ByvRfSniqFJH6exAQR0drT%2Bmy0EmiBIzC7pBknrW%2BjgHJOk0u&X-Amz-Signature=a65de5a3a878efb271336b4bf686fea4fc93cd787db377ab471ab245c94ecbc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UZL6AHB%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCc9keyE%2FBLR2phmpxgVl0ay6RmZ4eUzbiL0nUC2NGkSwIgWtEojmDL0Z15KMJfH%2BqHen%2BRQjiaS0EmX9VJA7eB9vQq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDDwMr3ZIkIEAXivg2ircA%2BNDxLELTQXA4y%2FKdpb8oIFbsOBmlqfMb5oao52X0OVMQ%2FVLz0jDStsjiiF1GC748MgKchUUOBf0YETe4DbIoCA0%2BVYC%2BgAJL1M%2F5gGLppJpVW9XDfY%2BBtcDaAALF5mFVP%2BaqqWF5%2Bq3TrvCkAQsQmgbMHpHpAc5LDIEuqHEHDRVuU2KAMNTlzKUfWFS1AjIpK8l7eiaHQdk5mj7PudJ6wI03lOptD4Ms3orWL%2FuyaDLth%2BW9A4evVTV2STEAzv3SB0YH93OomKPqoQSWY8CSyluVBtb7XaI5JBk8V%2BMLSY4STMBnt4ZdmpMqKIbW%2BEhf8liRoa26u38zE1hjJK%2FEjw9uEmjSCBcgnofOme%2BSJa00hvSTtBLhRoCPA3AleomT%2Fz0Sj4Ynzj%2Fzyr1IpCbmwDJuzJHGMZbELIUqa7eMyzyH6jvIpLZYQL0LvvnPYBTmuLNhVMabfK2DouZC5N0xvwNv9Cqtdx0z2wPUt71oy0VCzh%2BKBH83pLg%2FEfsVzpbnsJZAUSpdwbpYFm%2F%2F3bZzLMr0BoHexsioo4qmU1imzGX1ozLp%2F9r5D8Yh%2FVVFI8%2FxnNuWpM1VDrqBdEAbIdeR1oh4OI51nF%2FTEF8yeaufWfMFTGNa%2B4%2FdSGiumPNMJ25nNIGOqUBpahoUuhR4HhC1u7mdY%2BSFzTpIZLas7LUab454M5v%2Fz%2B7bMB4Bu%2BcIutZWRdY9h7cRyHKAaSrPKOiGss0hi00tRUbbLAXvQM1vBRre5gK%2FBirtk1ivKu64VWDvzBlRwWCubJbLJfjmrDfMrQ0T3EWYSlNFChIIchc44HzhPy9%2BMx%2ByvRfSniqFJH6exAQR0drT%2Bmy0EmiBIzC7pBknrW%2BjgHJOk0u&X-Amz-Signature=c196a816bb1d6daf7b49a2301515623486f53730186455f1aa9023268b95a705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UZL6AHB%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCc9keyE%2FBLR2phmpxgVl0ay6RmZ4eUzbiL0nUC2NGkSwIgWtEojmDL0Z15KMJfH%2BqHen%2BRQjiaS0EmX9VJA7eB9vQq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDDwMr3ZIkIEAXivg2ircA%2BNDxLELTQXA4y%2FKdpb8oIFbsOBmlqfMb5oao52X0OVMQ%2FVLz0jDStsjiiF1GC748MgKchUUOBf0YETe4DbIoCA0%2BVYC%2BgAJL1M%2F5gGLppJpVW9XDfY%2BBtcDaAALF5mFVP%2BaqqWF5%2Bq3TrvCkAQsQmgbMHpHpAc5LDIEuqHEHDRVuU2KAMNTlzKUfWFS1AjIpK8l7eiaHQdk5mj7PudJ6wI03lOptD4Ms3orWL%2FuyaDLth%2BW9A4evVTV2STEAzv3SB0YH93OomKPqoQSWY8CSyluVBtb7XaI5JBk8V%2BMLSY4STMBnt4ZdmpMqKIbW%2BEhf8liRoa26u38zE1hjJK%2FEjw9uEmjSCBcgnofOme%2BSJa00hvSTtBLhRoCPA3AleomT%2Fz0Sj4Ynzj%2Fzyr1IpCbmwDJuzJHGMZbELIUqa7eMyzyH6jvIpLZYQL0LvvnPYBTmuLNhVMabfK2DouZC5N0xvwNv9Cqtdx0z2wPUt71oy0VCzh%2BKBH83pLg%2FEfsVzpbnsJZAUSpdwbpYFm%2F%2F3bZzLMr0BoHexsioo4qmU1imzGX1ozLp%2F9r5D8Yh%2FVVFI8%2FxnNuWpM1VDrqBdEAbIdeR1oh4OI51nF%2FTEF8yeaufWfMFTGNa%2B4%2FdSGiumPNMJ25nNIGOqUBpahoUuhR4HhC1u7mdY%2BSFzTpIZLas7LUab454M5v%2Fz%2B7bMB4Bu%2BcIutZWRdY9h7cRyHKAaSrPKOiGss0hi00tRUbbLAXvQM1vBRre5gK%2FBirtk1ivKu64VWDvzBlRwWCubJbLJfjmrDfMrQ0T3EWYSlNFChIIchc44HzhPy9%2BMx%2ByvRfSniqFJH6exAQR0drT%2Bmy0EmiBIzC7pBknrW%2BjgHJOk0u&X-Amz-Signature=a9995ea73215ce4df31d289219f81bedbef757accca2747c4f5a0b813f724e91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UZL6AHB%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCc9keyE%2FBLR2phmpxgVl0ay6RmZ4eUzbiL0nUC2NGkSwIgWtEojmDL0Z15KMJfH%2BqHen%2BRQjiaS0EmX9VJA7eB9vQq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDDwMr3ZIkIEAXivg2ircA%2BNDxLELTQXA4y%2FKdpb8oIFbsOBmlqfMb5oao52X0OVMQ%2FVLz0jDStsjiiF1GC748MgKchUUOBf0YETe4DbIoCA0%2BVYC%2BgAJL1M%2F5gGLppJpVW9XDfY%2BBtcDaAALF5mFVP%2BaqqWF5%2Bq3TrvCkAQsQmgbMHpHpAc5LDIEuqHEHDRVuU2KAMNTlzKUfWFS1AjIpK8l7eiaHQdk5mj7PudJ6wI03lOptD4Ms3orWL%2FuyaDLth%2BW9A4evVTV2STEAzv3SB0YH93OomKPqoQSWY8CSyluVBtb7XaI5JBk8V%2BMLSY4STMBnt4ZdmpMqKIbW%2BEhf8liRoa26u38zE1hjJK%2FEjw9uEmjSCBcgnofOme%2BSJa00hvSTtBLhRoCPA3AleomT%2Fz0Sj4Ynzj%2Fzyr1IpCbmwDJuzJHGMZbELIUqa7eMyzyH6jvIpLZYQL0LvvnPYBTmuLNhVMabfK2DouZC5N0xvwNv9Cqtdx0z2wPUt71oy0VCzh%2BKBH83pLg%2FEfsVzpbnsJZAUSpdwbpYFm%2F%2F3bZzLMr0BoHexsioo4qmU1imzGX1ozLp%2F9r5D8Yh%2FVVFI8%2FxnNuWpM1VDrqBdEAbIdeR1oh4OI51nF%2FTEF8yeaufWfMFTGNa%2B4%2FdSGiumPNMJ25nNIGOqUBpahoUuhR4HhC1u7mdY%2BSFzTpIZLas7LUab454M5v%2Fz%2B7bMB4Bu%2BcIutZWRdY9h7cRyHKAaSrPKOiGss0hi00tRUbbLAXvQM1vBRre5gK%2FBirtk1ivKu64VWDvzBlRwWCubJbLJfjmrDfMrQ0T3EWYSlNFChIIchc44HzhPy9%2BMx%2ByvRfSniqFJH6exAQR0drT%2Bmy0EmiBIzC7pBknrW%2BjgHJOk0u&X-Amz-Signature=c7f1d3308bac7b1da2af0145a06664e78a0873e78b71069e3f818a81b217c99f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


