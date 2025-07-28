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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GYU64VO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEIhDX4mHYgxsN%2F3ik4rKgI7MLMmGDk4HenuAMvOn%2FZoAiEAgvdrn7KBxmi1vmjHf0usOQ41SSPp2QrAC32G3dPzCskqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyndqtVO9Q72GjxDCrcA6R%2FPbTHgtnRjWnohbOYCB1BAvZSQ3d4Ycp%2F0J1cOSMieK%2FzjpqgySUigbyShm9jzYpX2jMyzSLwtiE%2B0nCiamR1xZ9AHDU1EtHtgjisYX6kopRf2NAkrakvLE2JwZwZNaDCIwwBdixa%2FgUz11we846VJoRk4bon1pILqwEGftqG1AIN%2BYN09GobNEMXFv4cVFU2LhvQ51an8EsVEeTorTBd%2FdrY3vGlY7CBXXOpz8%2BMdh%2Fgwz%2F5LlR8Bh9ecmoh1Kf3c9Gt0WSRLA6%2FEUzGuBao2n%2F08GD99BExMUDwkjE776FYuT%2BE66GHiXpwvldCuAJQ1quz5%2BpS6NpiHFsO7YCloLogk6IEs3jGO19SizlXU7kfCRgmp7IxVNj4gEwr9f9yiA%2FvWI2sIsM0bgXiRqjXnypLfI7boJk0%2BhahC8PKeQ%2Fk1qPv5QnOmVS4n3dJMgPnqgI2TsqdxUlxIHnJCIpgKssu%2BH2qby%2F9K8TWAfCgQYaaMJaSGdrcb6sK%2FyCkUlBxl9I0O1xEvF5D9Mlsv4Ssw1y4thEaj6JypJyijLK4ICkFarxU%2BCfEeRHwXCwxFiOJdKGIs2XY%2BWmssDuVnIvqlnQoN931l9GouArhGOl6GmDZxK6G91rRFdhuMOizncQGOqUBkJBxXj7%2BEby3%2BtZM%2B1L26ri414M4cYt90sgntlbcglpiimuwrWHHEyhTlFCwl4mnbsOJWsWSPPsd%2BsGbEkEs9OU28TAHb29pjiCN4VJZoSjYg1wYQHLtTA68t6xpnSmNUCLw8BkjaHxBMAfrzdIMJ6HiAghtMCGURwOlU6BFyb1wF5BE4CgKsN%2FqpKU%2BDz1Snd9AjmD0aC3j188O420y1XVVA99l&X-Amz-Signature=ab44224fe295dbd8fbc46a11fdc96921b90b18d6878919dac768f9f916867343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GYU64VO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEIhDX4mHYgxsN%2F3ik4rKgI7MLMmGDk4HenuAMvOn%2FZoAiEAgvdrn7KBxmi1vmjHf0usOQ41SSPp2QrAC32G3dPzCskqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyndqtVO9Q72GjxDCrcA6R%2FPbTHgtnRjWnohbOYCB1BAvZSQ3d4Ycp%2F0J1cOSMieK%2FzjpqgySUigbyShm9jzYpX2jMyzSLwtiE%2B0nCiamR1xZ9AHDU1EtHtgjisYX6kopRf2NAkrakvLE2JwZwZNaDCIwwBdixa%2FgUz11we846VJoRk4bon1pILqwEGftqG1AIN%2BYN09GobNEMXFv4cVFU2LhvQ51an8EsVEeTorTBd%2FdrY3vGlY7CBXXOpz8%2BMdh%2Fgwz%2F5LlR8Bh9ecmoh1Kf3c9Gt0WSRLA6%2FEUzGuBao2n%2F08GD99BExMUDwkjE776FYuT%2BE66GHiXpwvldCuAJQ1quz5%2BpS6NpiHFsO7YCloLogk6IEs3jGO19SizlXU7kfCRgmp7IxVNj4gEwr9f9yiA%2FvWI2sIsM0bgXiRqjXnypLfI7boJk0%2BhahC8PKeQ%2Fk1qPv5QnOmVS4n3dJMgPnqgI2TsqdxUlxIHnJCIpgKssu%2BH2qby%2F9K8TWAfCgQYaaMJaSGdrcb6sK%2FyCkUlBxl9I0O1xEvF5D9Mlsv4Ssw1y4thEaj6JypJyijLK4ICkFarxU%2BCfEeRHwXCwxFiOJdKGIs2XY%2BWmssDuVnIvqlnQoN931l9GouArhGOl6GmDZxK6G91rRFdhuMOizncQGOqUBkJBxXj7%2BEby3%2BtZM%2B1L26ri414M4cYt90sgntlbcglpiimuwrWHHEyhTlFCwl4mnbsOJWsWSPPsd%2BsGbEkEs9OU28TAHb29pjiCN4VJZoSjYg1wYQHLtTA68t6xpnSmNUCLw8BkjaHxBMAfrzdIMJ6HiAghtMCGURwOlU6BFyb1wF5BE4CgKsN%2FqpKU%2BDz1Snd9AjmD0aC3j188O420y1XVVA99l&X-Amz-Signature=c374f6b6fd81fc58f0021e249fc97789e20649193c979a32c8ffe6ce11381093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GYU64VO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEIhDX4mHYgxsN%2F3ik4rKgI7MLMmGDk4HenuAMvOn%2FZoAiEAgvdrn7KBxmi1vmjHf0usOQ41SSPp2QrAC32G3dPzCskqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyndqtVO9Q72GjxDCrcA6R%2FPbTHgtnRjWnohbOYCB1BAvZSQ3d4Ycp%2F0J1cOSMieK%2FzjpqgySUigbyShm9jzYpX2jMyzSLwtiE%2B0nCiamR1xZ9AHDU1EtHtgjisYX6kopRf2NAkrakvLE2JwZwZNaDCIwwBdixa%2FgUz11we846VJoRk4bon1pILqwEGftqG1AIN%2BYN09GobNEMXFv4cVFU2LhvQ51an8EsVEeTorTBd%2FdrY3vGlY7CBXXOpz8%2BMdh%2Fgwz%2F5LlR8Bh9ecmoh1Kf3c9Gt0WSRLA6%2FEUzGuBao2n%2F08GD99BExMUDwkjE776FYuT%2BE66GHiXpwvldCuAJQ1quz5%2BpS6NpiHFsO7YCloLogk6IEs3jGO19SizlXU7kfCRgmp7IxVNj4gEwr9f9yiA%2FvWI2sIsM0bgXiRqjXnypLfI7boJk0%2BhahC8PKeQ%2Fk1qPv5QnOmVS4n3dJMgPnqgI2TsqdxUlxIHnJCIpgKssu%2BH2qby%2F9K8TWAfCgQYaaMJaSGdrcb6sK%2FyCkUlBxl9I0O1xEvF5D9Mlsv4Ssw1y4thEaj6JypJyijLK4ICkFarxU%2BCfEeRHwXCwxFiOJdKGIs2XY%2BWmssDuVnIvqlnQoN931l9GouArhGOl6GmDZxK6G91rRFdhuMOizncQGOqUBkJBxXj7%2BEby3%2BtZM%2B1L26ri414M4cYt90sgntlbcglpiimuwrWHHEyhTlFCwl4mnbsOJWsWSPPsd%2BsGbEkEs9OU28TAHb29pjiCN4VJZoSjYg1wYQHLtTA68t6xpnSmNUCLw8BkjaHxBMAfrzdIMJ6HiAghtMCGURwOlU6BFyb1wF5BE4CgKsN%2FqpKU%2BDz1Snd9AjmD0aC3j188O420y1XVVA99l&X-Amz-Signature=1ad6db7fadda44196853334c47fb488b12eba51ffa1de0927ff4c3ffd1960ed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GYU64VO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEIhDX4mHYgxsN%2F3ik4rKgI7MLMmGDk4HenuAMvOn%2FZoAiEAgvdrn7KBxmi1vmjHf0usOQ41SSPp2QrAC32G3dPzCskqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyndqtVO9Q72GjxDCrcA6R%2FPbTHgtnRjWnohbOYCB1BAvZSQ3d4Ycp%2F0J1cOSMieK%2FzjpqgySUigbyShm9jzYpX2jMyzSLwtiE%2B0nCiamR1xZ9AHDU1EtHtgjisYX6kopRf2NAkrakvLE2JwZwZNaDCIwwBdixa%2FgUz11we846VJoRk4bon1pILqwEGftqG1AIN%2BYN09GobNEMXFv4cVFU2LhvQ51an8EsVEeTorTBd%2FdrY3vGlY7CBXXOpz8%2BMdh%2Fgwz%2F5LlR8Bh9ecmoh1Kf3c9Gt0WSRLA6%2FEUzGuBao2n%2F08GD99BExMUDwkjE776FYuT%2BE66GHiXpwvldCuAJQ1quz5%2BpS6NpiHFsO7YCloLogk6IEs3jGO19SizlXU7kfCRgmp7IxVNj4gEwr9f9yiA%2FvWI2sIsM0bgXiRqjXnypLfI7boJk0%2BhahC8PKeQ%2Fk1qPv5QnOmVS4n3dJMgPnqgI2TsqdxUlxIHnJCIpgKssu%2BH2qby%2F9K8TWAfCgQYaaMJaSGdrcb6sK%2FyCkUlBxl9I0O1xEvF5D9Mlsv4Ssw1y4thEaj6JypJyijLK4ICkFarxU%2BCfEeRHwXCwxFiOJdKGIs2XY%2BWmssDuVnIvqlnQoN931l9GouArhGOl6GmDZxK6G91rRFdhuMOizncQGOqUBkJBxXj7%2BEby3%2BtZM%2B1L26ri414M4cYt90sgntlbcglpiimuwrWHHEyhTlFCwl4mnbsOJWsWSPPsd%2BsGbEkEs9OU28TAHb29pjiCN4VJZoSjYg1wYQHLtTA68t6xpnSmNUCLw8BkjaHxBMAfrzdIMJ6HiAghtMCGURwOlU6BFyb1wF5BE4CgKsN%2FqpKU%2BDz1Snd9AjmD0aC3j188O420y1XVVA99l&X-Amz-Signature=f8b77a1eb49ecdb34fafe2e1d5184f5b59ef4b7f2a09bc8cda3e2d3b10d0cb53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GYU64VO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEIhDX4mHYgxsN%2F3ik4rKgI7MLMmGDk4HenuAMvOn%2FZoAiEAgvdrn7KBxmi1vmjHf0usOQ41SSPp2QrAC32G3dPzCskqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyndqtVO9Q72GjxDCrcA6R%2FPbTHgtnRjWnohbOYCB1BAvZSQ3d4Ycp%2F0J1cOSMieK%2FzjpqgySUigbyShm9jzYpX2jMyzSLwtiE%2B0nCiamR1xZ9AHDU1EtHtgjisYX6kopRf2NAkrakvLE2JwZwZNaDCIwwBdixa%2FgUz11we846VJoRk4bon1pILqwEGftqG1AIN%2BYN09GobNEMXFv4cVFU2LhvQ51an8EsVEeTorTBd%2FdrY3vGlY7CBXXOpz8%2BMdh%2Fgwz%2F5LlR8Bh9ecmoh1Kf3c9Gt0WSRLA6%2FEUzGuBao2n%2F08GD99BExMUDwkjE776FYuT%2BE66GHiXpwvldCuAJQ1quz5%2BpS6NpiHFsO7YCloLogk6IEs3jGO19SizlXU7kfCRgmp7IxVNj4gEwr9f9yiA%2FvWI2sIsM0bgXiRqjXnypLfI7boJk0%2BhahC8PKeQ%2Fk1qPv5QnOmVS4n3dJMgPnqgI2TsqdxUlxIHnJCIpgKssu%2BH2qby%2F9K8TWAfCgQYaaMJaSGdrcb6sK%2FyCkUlBxl9I0O1xEvF5D9Mlsv4Ssw1y4thEaj6JypJyijLK4ICkFarxU%2BCfEeRHwXCwxFiOJdKGIs2XY%2BWmssDuVnIvqlnQoN931l9GouArhGOl6GmDZxK6G91rRFdhuMOizncQGOqUBkJBxXj7%2BEby3%2BtZM%2B1L26ri414M4cYt90sgntlbcglpiimuwrWHHEyhTlFCwl4mnbsOJWsWSPPsd%2BsGbEkEs9OU28TAHb29pjiCN4VJZoSjYg1wYQHLtTA68t6xpnSmNUCLw8BkjaHxBMAfrzdIMJ6HiAghtMCGURwOlU6BFyb1wF5BE4CgKsN%2FqpKU%2BDz1Snd9AjmD0aC3j188O420y1XVVA99l&X-Amz-Signature=ddbe9a5563ee33fa90f9d387a00eaf35f4f301ff847e30915438a1a5951cd96c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GYU64VO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEIhDX4mHYgxsN%2F3ik4rKgI7MLMmGDk4HenuAMvOn%2FZoAiEAgvdrn7KBxmi1vmjHf0usOQ41SSPp2QrAC32G3dPzCskqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyndqtVO9Q72GjxDCrcA6R%2FPbTHgtnRjWnohbOYCB1BAvZSQ3d4Ycp%2F0J1cOSMieK%2FzjpqgySUigbyShm9jzYpX2jMyzSLwtiE%2B0nCiamR1xZ9AHDU1EtHtgjisYX6kopRf2NAkrakvLE2JwZwZNaDCIwwBdixa%2FgUz11we846VJoRk4bon1pILqwEGftqG1AIN%2BYN09GobNEMXFv4cVFU2LhvQ51an8EsVEeTorTBd%2FdrY3vGlY7CBXXOpz8%2BMdh%2Fgwz%2F5LlR8Bh9ecmoh1Kf3c9Gt0WSRLA6%2FEUzGuBao2n%2F08GD99BExMUDwkjE776FYuT%2BE66GHiXpwvldCuAJQ1quz5%2BpS6NpiHFsO7YCloLogk6IEs3jGO19SizlXU7kfCRgmp7IxVNj4gEwr9f9yiA%2FvWI2sIsM0bgXiRqjXnypLfI7boJk0%2BhahC8PKeQ%2Fk1qPv5QnOmVS4n3dJMgPnqgI2TsqdxUlxIHnJCIpgKssu%2BH2qby%2F9K8TWAfCgQYaaMJaSGdrcb6sK%2FyCkUlBxl9I0O1xEvF5D9Mlsv4Ssw1y4thEaj6JypJyijLK4ICkFarxU%2BCfEeRHwXCwxFiOJdKGIs2XY%2BWmssDuVnIvqlnQoN931l9GouArhGOl6GmDZxK6G91rRFdhuMOizncQGOqUBkJBxXj7%2BEby3%2BtZM%2B1L26ri414M4cYt90sgntlbcglpiimuwrWHHEyhTlFCwl4mnbsOJWsWSPPsd%2BsGbEkEs9OU28TAHb29pjiCN4VJZoSjYg1wYQHLtTA68t6xpnSmNUCLw8BkjaHxBMAfrzdIMJ6HiAghtMCGURwOlU6BFyb1wF5BE4CgKsN%2FqpKU%2BDz1Snd9AjmD0aC3j188O420y1XVVA99l&X-Amz-Signature=17b407529e2bbe647578e436a1837b92748f7483376822224e0412d1e30c994d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GYU64VO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEIhDX4mHYgxsN%2F3ik4rKgI7MLMmGDk4HenuAMvOn%2FZoAiEAgvdrn7KBxmi1vmjHf0usOQ41SSPp2QrAC32G3dPzCskqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyndqtVO9Q72GjxDCrcA6R%2FPbTHgtnRjWnohbOYCB1BAvZSQ3d4Ycp%2F0J1cOSMieK%2FzjpqgySUigbyShm9jzYpX2jMyzSLwtiE%2B0nCiamR1xZ9AHDU1EtHtgjisYX6kopRf2NAkrakvLE2JwZwZNaDCIwwBdixa%2FgUz11we846VJoRk4bon1pILqwEGftqG1AIN%2BYN09GobNEMXFv4cVFU2LhvQ51an8EsVEeTorTBd%2FdrY3vGlY7CBXXOpz8%2BMdh%2Fgwz%2F5LlR8Bh9ecmoh1Kf3c9Gt0WSRLA6%2FEUzGuBao2n%2F08GD99BExMUDwkjE776FYuT%2BE66GHiXpwvldCuAJQ1quz5%2BpS6NpiHFsO7YCloLogk6IEs3jGO19SizlXU7kfCRgmp7IxVNj4gEwr9f9yiA%2FvWI2sIsM0bgXiRqjXnypLfI7boJk0%2BhahC8PKeQ%2Fk1qPv5QnOmVS4n3dJMgPnqgI2TsqdxUlxIHnJCIpgKssu%2BH2qby%2F9K8TWAfCgQYaaMJaSGdrcb6sK%2FyCkUlBxl9I0O1xEvF5D9Mlsv4Ssw1y4thEaj6JypJyijLK4ICkFarxU%2BCfEeRHwXCwxFiOJdKGIs2XY%2BWmssDuVnIvqlnQoN931l9GouArhGOl6GmDZxK6G91rRFdhuMOizncQGOqUBkJBxXj7%2BEby3%2BtZM%2B1L26ri414M4cYt90sgntlbcglpiimuwrWHHEyhTlFCwl4mnbsOJWsWSPPsd%2BsGbEkEs9OU28TAHb29pjiCN4VJZoSjYg1wYQHLtTA68t6xpnSmNUCLw8BkjaHxBMAfrzdIMJ6HiAghtMCGURwOlU6BFyb1wF5BE4CgKsN%2FqpKU%2BDz1Snd9AjmD0aC3j188O420y1XVVA99l&X-Amz-Signature=2f7c5d8d523d7003fbae94717b955015034958c19a7ec4433398b53280b0a970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GYU64VO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEIhDX4mHYgxsN%2F3ik4rKgI7MLMmGDk4HenuAMvOn%2FZoAiEAgvdrn7KBxmi1vmjHf0usOQ41SSPp2QrAC32G3dPzCskqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyndqtVO9Q72GjxDCrcA6R%2FPbTHgtnRjWnohbOYCB1BAvZSQ3d4Ycp%2F0J1cOSMieK%2FzjpqgySUigbyShm9jzYpX2jMyzSLwtiE%2B0nCiamR1xZ9AHDU1EtHtgjisYX6kopRf2NAkrakvLE2JwZwZNaDCIwwBdixa%2FgUz11we846VJoRk4bon1pILqwEGftqG1AIN%2BYN09GobNEMXFv4cVFU2LhvQ51an8EsVEeTorTBd%2FdrY3vGlY7CBXXOpz8%2BMdh%2Fgwz%2F5LlR8Bh9ecmoh1Kf3c9Gt0WSRLA6%2FEUzGuBao2n%2F08GD99BExMUDwkjE776FYuT%2BE66GHiXpwvldCuAJQ1quz5%2BpS6NpiHFsO7YCloLogk6IEs3jGO19SizlXU7kfCRgmp7IxVNj4gEwr9f9yiA%2FvWI2sIsM0bgXiRqjXnypLfI7boJk0%2BhahC8PKeQ%2Fk1qPv5QnOmVS4n3dJMgPnqgI2TsqdxUlxIHnJCIpgKssu%2BH2qby%2F9K8TWAfCgQYaaMJaSGdrcb6sK%2FyCkUlBxl9I0O1xEvF5D9Mlsv4Ssw1y4thEaj6JypJyijLK4ICkFarxU%2BCfEeRHwXCwxFiOJdKGIs2XY%2BWmssDuVnIvqlnQoN931l9GouArhGOl6GmDZxK6G91rRFdhuMOizncQGOqUBkJBxXj7%2BEby3%2BtZM%2B1L26ri414M4cYt90sgntlbcglpiimuwrWHHEyhTlFCwl4mnbsOJWsWSPPsd%2BsGbEkEs9OU28TAHb29pjiCN4VJZoSjYg1wYQHLtTA68t6xpnSmNUCLw8BkjaHxBMAfrzdIMJ6HiAghtMCGURwOlU6BFyb1wF5BE4CgKsN%2FqpKU%2BDz1Snd9AjmD0aC3j188O420y1XVVA99l&X-Amz-Signature=91bc16f6beb0895554495b824a336325bef929fa40e9bdc0e1fbf6481b814dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GYU64VO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEIhDX4mHYgxsN%2F3ik4rKgI7MLMmGDk4HenuAMvOn%2FZoAiEAgvdrn7KBxmi1vmjHf0usOQ41SSPp2QrAC32G3dPzCskqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyndqtVO9Q72GjxDCrcA6R%2FPbTHgtnRjWnohbOYCB1BAvZSQ3d4Ycp%2F0J1cOSMieK%2FzjpqgySUigbyShm9jzYpX2jMyzSLwtiE%2B0nCiamR1xZ9AHDU1EtHtgjisYX6kopRf2NAkrakvLE2JwZwZNaDCIwwBdixa%2FgUz11we846VJoRk4bon1pILqwEGftqG1AIN%2BYN09GobNEMXFv4cVFU2LhvQ51an8EsVEeTorTBd%2FdrY3vGlY7CBXXOpz8%2BMdh%2Fgwz%2F5LlR8Bh9ecmoh1Kf3c9Gt0WSRLA6%2FEUzGuBao2n%2F08GD99BExMUDwkjE776FYuT%2BE66GHiXpwvldCuAJQ1quz5%2BpS6NpiHFsO7YCloLogk6IEs3jGO19SizlXU7kfCRgmp7IxVNj4gEwr9f9yiA%2FvWI2sIsM0bgXiRqjXnypLfI7boJk0%2BhahC8PKeQ%2Fk1qPv5QnOmVS4n3dJMgPnqgI2TsqdxUlxIHnJCIpgKssu%2BH2qby%2F9K8TWAfCgQYaaMJaSGdrcb6sK%2FyCkUlBxl9I0O1xEvF5D9Mlsv4Ssw1y4thEaj6JypJyijLK4ICkFarxU%2BCfEeRHwXCwxFiOJdKGIs2XY%2BWmssDuVnIvqlnQoN931l9GouArhGOl6GmDZxK6G91rRFdhuMOizncQGOqUBkJBxXj7%2BEby3%2BtZM%2B1L26ri414M4cYt90sgntlbcglpiimuwrWHHEyhTlFCwl4mnbsOJWsWSPPsd%2BsGbEkEs9OU28TAHb29pjiCN4VJZoSjYg1wYQHLtTA68t6xpnSmNUCLw8BkjaHxBMAfrzdIMJ6HiAghtMCGURwOlU6BFyb1wF5BE4CgKsN%2FqpKU%2BDz1Snd9AjmD0aC3j188O420y1XVVA99l&X-Amz-Signature=d05146bd376600d907cd065f14fe37ac4a2ac53e7b8d7981d20b20ebbcab2dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GYU64VO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEIhDX4mHYgxsN%2F3ik4rKgI7MLMmGDk4HenuAMvOn%2FZoAiEAgvdrn7KBxmi1vmjHf0usOQ41SSPp2QrAC32G3dPzCskqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyndqtVO9Q72GjxDCrcA6R%2FPbTHgtnRjWnohbOYCB1BAvZSQ3d4Ycp%2F0J1cOSMieK%2FzjpqgySUigbyShm9jzYpX2jMyzSLwtiE%2B0nCiamR1xZ9AHDU1EtHtgjisYX6kopRf2NAkrakvLE2JwZwZNaDCIwwBdixa%2FgUz11we846VJoRk4bon1pILqwEGftqG1AIN%2BYN09GobNEMXFv4cVFU2LhvQ51an8EsVEeTorTBd%2FdrY3vGlY7CBXXOpz8%2BMdh%2Fgwz%2F5LlR8Bh9ecmoh1Kf3c9Gt0WSRLA6%2FEUzGuBao2n%2F08GD99BExMUDwkjE776FYuT%2BE66GHiXpwvldCuAJQ1quz5%2BpS6NpiHFsO7YCloLogk6IEs3jGO19SizlXU7kfCRgmp7IxVNj4gEwr9f9yiA%2FvWI2sIsM0bgXiRqjXnypLfI7boJk0%2BhahC8PKeQ%2Fk1qPv5QnOmVS4n3dJMgPnqgI2TsqdxUlxIHnJCIpgKssu%2BH2qby%2F9K8TWAfCgQYaaMJaSGdrcb6sK%2FyCkUlBxl9I0O1xEvF5D9Mlsv4Ssw1y4thEaj6JypJyijLK4ICkFarxU%2BCfEeRHwXCwxFiOJdKGIs2XY%2BWmssDuVnIvqlnQoN931l9GouArhGOl6GmDZxK6G91rRFdhuMOizncQGOqUBkJBxXj7%2BEby3%2BtZM%2B1L26ri414M4cYt90sgntlbcglpiimuwrWHHEyhTlFCwl4mnbsOJWsWSPPsd%2BsGbEkEs9OU28TAHb29pjiCN4VJZoSjYg1wYQHLtTA68t6xpnSmNUCLw8BkjaHxBMAfrzdIMJ6HiAghtMCGURwOlU6BFyb1wF5BE4CgKsN%2FqpKU%2BDz1Snd9AjmD0aC3j188O420y1XVVA99l&X-Amz-Signature=15d5c78b87d1903da6842b5bff77cc8535940b85a94b8aa4b7dde0b5a6f41654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GYU64VO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEIhDX4mHYgxsN%2F3ik4rKgI7MLMmGDk4HenuAMvOn%2FZoAiEAgvdrn7KBxmi1vmjHf0usOQ41SSPp2QrAC32G3dPzCskqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyndqtVO9Q72GjxDCrcA6R%2FPbTHgtnRjWnohbOYCB1BAvZSQ3d4Ycp%2F0J1cOSMieK%2FzjpqgySUigbyShm9jzYpX2jMyzSLwtiE%2B0nCiamR1xZ9AHDU1EtHtgjisYX6kopRf2NAkrakvLE2JwZwZNaDCIwwBdixa%2FgUz11we846VJoRk4bon1pILqwEGftqG1AIN%2BYN09GobNEMXFv4cVFU2LhvQ51an8EsVEeTorTBd%2FdrY3vGlY7CBXXOpz8%2BMdh%2Fgwz%2F5LlR8Bh9ecmoh1Kf3c9Gt0WSRLA6%2FEUzGuBao2n%2F08GD99BExMUDwkjE776FYuT%2BE66GHiXpwvldCuAJQ1quz5%2BpS6NpiHFsO7YCloLogk6IEs3jGO19SizlXU7kfCRgmp7IxVNj4gEwr9f9yiA%2FvWI2sIsM0bgXiRqjXnypLfI7boJk0%2BhahC8PKeQ%2Fk1qPv5QnOmVS4n3dJMgPnqgI2TsqdxUlxIHnJCIpgKssu%2BH2qby%2F9K8TWAfCgQYaaMJaSGdrcb6sK%2FyCkUlBxl9I0O1xEvF5D9Mlsv4Ssw1y4thEaj6JypJyijLK4ICkFarxU%2BCfEeRHwXCwxFiOJdKGIs2XY%2BWmssDuVnIvqlnQoN931l9GouArhGOl6GmDZxK6G91rRFdhuMOizncQGOqUBkJBxXj7%2BEby3%2BtZM%2B1L26ri414M4cYt90sgntlbcglpiimuwrWHHEyhTlFCwl4mnbsOJWsWSPPsd%2BsGbEkEs9OU28TAHb29pjiCN4VJZoSjYg1wYQHLtTA68t6xpnSmNUCLw8BkjaHxBMAfrzdIMJ6HiAghtMCGURwOlU6BFyb1wF5BE4CgKsN%2FqpKU%2BDz1Snd9AjmD0aC3j188O420y1XVVA99l&X-Amz-Signature=5a0fa94078049a1987d14ce91af8fd53b2dc8b7a1199b2e5b7d34a51c013cc19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GYU64VO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEIhDX4mHYgxsN%2F3ik4rKgI7MLMmGDk4HenuAMvOn%2FZoAiEAgvdrn7KBxmi1vmjHf0usOQ41SSPp2QrAC32G3dPzCskqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyndqtVO9Q72GjxDCrcA6R%2FPbTHgtnRjWnohbOYCB1BAvZSQ3d4Ycp%2F0J1cOSMieK%2FzjpqgySUigbyShm9jzYpX2jMyzSLwtiE%2B0nCiamR1xZ9AHDU1EtHtgjisYX6kopRf2NAkrakvLE2JwZwZNaDCIwwBdixa%2FgUz11we846VJoRk4bon1pILqwEGftqG1AIN%2BYN09GobNEMXFv4cVFU2LhvQ51an8EsVEeTorTBd%2FdrY3vGlY7CBXXOpz8%2BMdh%2Fgwz%2F5LlR8Bh9ecmoh1Kf3c9Gt0WSRLA6%2FEUzGuBao2n%2F08GD99BExMUDwkjE776FYuT%2BE66GHiXpwvldCuAJQ1quz5%2BpS6NpiHFsO7YCloLogk6IEs3jGO19SizlXU7kfCRgmp7IxVNj4gEwr9f9yiA%2FvWI2sIsM0bgXiRqjXnypLfI7boJk0%2BhahC8PKeQ%2Fk1qPv5QnOmVS4n3dJMgPnqgI2TsqdxUlxIHnJCIpgKssu%2BH2qby%2F9K8TWAfCgQYaaMJaSGdrcb6sK%2FyCkUlBxl9I0O1xEvF5D9Mlsv4Ssw1y4thEaj6JypJyijLK4ICkFarxU%2BCfEeRHwXCwxFiOJdKGIs2XY%2BWmssDuVnIvqlnQoN931l9GouArhGOl6GmDZxK6G91rRFdhuMOizncQGOqUBkJBxXj7%2BEby3%2BtZM%2B1L26ri414M4cYt90sgntlbcglpiimuwrWHHEyhTlFCwl4mnbsOJWsWSPPsd%2BsGbEkEs9OU28TAHb29pjiCN4VJZoSjYg1wYQHLtTA68t6xpnSmNUCLw8BkjaHxBMAfrzdIMJ6HiAghtMCGURwOlU6BFyb1wF5BE4CgKsN%2FqpKU%2BDz1Snd9AjmD0aC3j188O420y1XVVA99l&X-Amz-Signature=b441317782d601d219c302a97d6bc0044f7e5246e460ba40e75897035657e8da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GYU64VO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEIhDX4mHYgxsN%2F3ik4rKgI7MLMmGDk4HenuAMvOn%2FZoAiEAgvdrn7KBxmi1vmjHf0usOQ41SSPp2QrAC32G3dPzCskqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyndqtVO9Q72GjxDCrcA6R%2FPbTHgtnRjWnohbOYCB1BAvZSQ3d4Ycp%2F0J1cOSMieK%2FzjpqgySUigbyShm9jzYpX2jMyzSLwtiE%2B0nCiamR1xZ9AHDU1EtHtgjisYX6kopRf2NAkrakvLE2JwZwZNaDCIwwBdixa%2FgUz11we846VJoRk4bon1pILqwEGftqG1AIN%2BYN09GobNEMXFv4cVFU2LhvQ51an8EsVEeTorTBd%2FdrY3vGlY7CBXXOpz8%2BMdh%2Fgwz%2F5LlR8Bh9ecmoh1Kf3c9Gt0WSRLA6%2FEUzGuBao2n%2F08GD99BExMUDwkjE776FYuT%2BE66GHiXpwvldCuAJQ1quz5%2BpS6NpiHFsO7YCloLogk6IEs3jGO19SizlXU7kfCRgmp7IxVNj4gEwr9f9yiA%2FvWI2sIsM0bgXiRqjXnypLfI7boJk0%2BhahC8PKeQ%2Fk1qPv5QnOmVS4n3dJMgPnqgI2TsqdxUlxIHnJCIpgKssu%2BH2qby%2F9K8TWAfCgQYaaMJaSGdrcb6sK%2FyCkUlBxl9I0O1xEvF5D9Mlsv4Ssw1y4thEaj6JypJyijLK4ICkFarxU%2BCfEeRHwXCwxFiOJdKGIs2XY%2BWmssDuVnIvqlnQoN931l9GouArhGOl6GmDZxK6G91rRFdhuMOizncQGOqUBkJBxXj7%2BEby3%2BtZM%2B1L26ri414M4cYt90sgntlbcglpiimuwrWHHEyhTlFCwl4mnbsOJWsWSPPsd%2BsGbEkEs9OU28TAHb29pjiCN4VJZoSjYg1wYQHLtTA68t6xpnSmNUCLw8BkjaHxBMAfrzdIMJ6HiAghtMCGURwOlU6BFyb1wF5BE4CgKsN%2FqpKU%2BDz1Snd9AjmD0aC3j188O420y1XVVA99l&X-Amz-Signature=b92bbad16f950f2ba3d3fdfb4fb655be223f344b93b6217535374376ddb5d695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GYU64VO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEIhDX4mHYgxsN%2F3ik4rKgI7MLMmGDk4HenuAMvOn%2FZoAiEAgvdrn7KBxmi1vmjHf0usOQ41SSPp2QrAC32G3dPzCskqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyndqtVO9Q72GjxDCrcA6R%2FPbTHgtnRjWnohbOYCB1BAvZSQ3d4Ycp%2F0J1cOSMieK%2FzjpqgySUigbyShm9jzYpX2jMyzSLwtiE%2B0nCiamR1xZ9AHDU1EtHtgjisYX6kopRf2NAkrakvLE2JwZwZNaDCIwwBdixa%2FgUz11we846VJoRk4bon1pILqwEGftqG1AIN%2BYN09GobNEMXFv4cVFU2LhvQ51an8EsVEeTorTBd%2FdrY3vGlY7CBXXOpz8%2BMdh%2Fgwz%2F5LlR8Bh9ecmoh1Kf3c9Gt0WSRLA6%2FEUzGuBao2n%2F08GD99BExMUDwkjE776FYuT%2BE66GHiXpwvldCuAJQ1quz5%2BpS6NpiHFsO7YCloLogk6IEs3jGO19SizlXU7kfCRgmp7IxVNj4gEwr9f9yiA%2FvWI2sIsM0bgXiRqjXnypLfI7boJk0%2BhahC8PKeQ%2Fk1qPv5QnOmVS4n3dJMgPnqgI2TsqdxUlxIHnJCIpgKssu%2BH2qby%2F9K8TWAfCgQYaaMJaSGdrcb6sK%2FyCkUlBxl9I0O1xEvF5D9Mlsv4Ssw1y4thEaj6JypJyijLK4ICkFarxU%2BCfEeRHwXCwxFiOJdKGIs2XY%2BWmssDuVnIvqlnQoN931l9GouArhGOl6GmDZxK6G91rRFdhuMOizncQGOqUBkJBxXj7%2BEby3%2BtZM%2B1L26ri414M4cYt90sgntlbcglpiimuwrWHHEyhTlFCwl4mnbsOJWsWSPPsd%2BsGbEkEs9OU28TAHb29pjiCN4VJZoSjYg1wYQHLtTA68t6xpnSmNUCLw8BkjaHxBMAfrzdIMJ6HiAghtMCGURwOlU6BFyb1wF5BE4CgKsN%2FqpKU%2BDz1Snd9AjmD0aC3j188O420y1XVVA99l&X-Amz-Signature=6b744843d41118fa6ceafddb1bbc35c6544021744d4110e4a73440ac5fe2b6dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFH2DWE4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHIEDxur4FNMJJO%2FkQL9%2Bf1EZwHmfl%2Fll83Iihl90UX%2BAiA1u%2FiuaSiALyfnI5SCp3r3j1LCXJIlr4ag3a%2Bsk8IMviqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9iD8r4%2FWMgQLNbdfKtwDqnb32ZwC0nomrFs4W%2Bokze%2BjjG23kBqMv0Pb%2FBpOGndvyrnPXH1q27vd%2Fy76ClW2auOVnXcrvSesGH7MKWWeIbmrgOD4%2FmPpIgrTL3mfijlhLokcBZnMXmFRSrlvIV%2FbTz%2BYLCk4wBU6Dd9AhoxA0zxxSRSD%2Bt3rsgu7DsCGWwrnJzF3ce7%2B3D9w8pw%2BLISa34j%2BEoOTuFYNa2JhOuxdRJ7QkWK%2Fw7kkatrcR1rvNmSW9Z0uoVAvPnFQWNCAILoJQGXmAK0O7JjTaVrF7LEBkmOHMhdcRSVn6XdKhEhPJ7vslkGQyQpBq9TEUPAspK3%2FKHHttEjkcbzA1I9QCZ6bhCb8GVVknzvkTQ8qAJshAniInhS2n8UqVZXKQ%2Ffb2bRfB8rWHbXOepmo3FLV3HmqKeOPMAOgn8X4K49rXYrn5qlVeh5foY%2BYWr3PnGsZqRCDVCHK0pe%2BqLAr90AuDmLSCCWU7qmG%2B8lZSmFM0ijdLhwHMFSxivOomdo%2BtdsUBMpE%2B89bfJU53VG5g8lLlIUmm6gLloU4JcTp2SXbERsgIIqo34TbENrdAGptGECMagsKvBIxoqujFybvkZRYJG9a0jwha7OHP8q8%2FSs7DtcJJOc2nlD4dLu9DQDHeLgwkbSdxAY6pgGWYeIYoaFbqBbQD7zIjwCMY7hkUGN0ujuDaWbiANCzpV6G1TSizN3DvkteO%2B4LKVvptI%2FUiQ5XRQTEuB2ED%2B7NVRy%2FPPS%2BF6ZD01Sz9cxlHCjJ4%2BKJczI77JbwG8aQC5XZ6wZHAf1rUh8auFyAj9wNyYV9RTifVrHkbVYepRZmEHtin6pd76UPl6VpWj2uA9K95a3rMhksn827Y%2FQRz9UioGqZRGra&X-Amz-Signature=c382bdd2602e727a0747d30024145a832f469c7d95101dc757721899b5ca9797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFH2DWE4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHIEDxur4FNMJJO%2FkQL9%2Bf1EZwHmfl%2Fll83Iihl90UX%2BAiA1u%2FiuaSiALyfnI5SCp3r3j1LCXJIlr4ag3a%2Bsk8IMviqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9iD8r4%2FWMgQLNbdfKtwDqnb32ZwC0nomrFs4W%2Bokze%2BjjG23kBqMv0Pb%2FBpOGndvyrnPXH1q27vd%2Fy76ClW2auOVnXcrvSesGH7MKWWeIbmrgOD4%2FmPpIgrTL3mfijlhLokcBZnMXmFRSrlvIV%2FbTz%2BYLCk4wBU6Dd9AhoxA0zxxSRSD%2Bt3rsgu7DsCGWwrnJzF3ce7%2B3D9w8pw%2BLISa34j%2BEoOTuFYNa2JhOuxdRJ7QkWK%2Fw7kkatrcR1rvNmSW9Z0uoVAvPnFQWNCAILoJQGXmAK0O7JjTaVrF7LEBkmOHMhdcRSVn6XdKhEhPJ7vslkGQyQpBq9TEUPAspK3%2FKHHttEjkcbzA1I9QCZ6bhCb8GVVknzvkTQ8qAJshAniInhS2n8UqVZXKQ%2Ffb2bRfB8rWHbXOepmo3FLV3HmqKeOPMAOgn8X4K49rXYrn5qlVeh5foY%2BYWr3PnGsZqRCDVCHK0pe%2BqLAr90AuDmLSCCWU7qmG%2B8lZSmFM0ijdLhwHMFSxivOomdo%2BtdsUBMpE%2B89bfJU53VG5g8lLlIUmm6gLloU4JcTp2SXbERsgIIqo34TbENrdAGptGECMagsKvBIxoqujFybvkZRYJG9a0jwha7OHP8q8%2FSs7DtcJJOc2nlD4dLu9DQDHeLgwkbSdxAY6pgGWYeIYoaFbqBbQD7zIjwCMY7hkUGN0ujuDaWbiANCzpV6G1TSizN3DvkteO%2B4LKVvptI%2FUiQ5XRQTEuB2ED%2B7NVRy%2FPPS%2BF6ZD01Sz9cxlHCjJ4%2BKJczI77JbwG8aQC5XZ6wZHAf1rUh8auFyAj9wNyYV9RTifVrHkbVYepRZmEHtin6pd76UPl6VpWj2uA9K95a3rMhksn827Y%2FQRz9UioGqZRGra&X-Amz-Signature=5eeb4136ef426050952b6bd597cba02bde2997ad787f8a823b46ad76118e6d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFH2DWE4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHIEDxur4FNMJJO%2FkQL9%2Bf1EZwHmfl%2Fll83Iihl90UX%2BAiA1u%2FiuaSiALyfnI5SCp3r3j1LCXJIlr4ag3a%2Bsk8IMviqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9iD8r4%2FWMgQLNbdfKtwDqnb32ZwC0nomrFs4W%2Bokze%2BjjG23kBqMv0Pb%2FBpOGndvyrnPXH1q27vd%2Fy76ClW2auOVnXcrvSesGH7MKWWeIbmrgOD4%2FmPpIgrTL3mfijlhLokcBZnMXmFRSrlvIV%2FbTz%2BYLCk4wBU6Dd9AhoxA0zxxSRSD%2Bt3rsgu7DsCGWwrnJzF3ce7%2B3D9w8pw%2BLISa34j%2BEoOTuFYNa2JhOuxdRJ7QkWK%2Fw7kkatrcR1rvNmSW9Z0uoVAvPnFQWNCAILoJQGXmAK0O7JjTaVrF7LEBkmOHMhdcRSVn6XdKhEhPJ7vslkGQyQpBq9TEUPAspK3%2FKHHttEjkcbzA1I9QCZ6bhCb8GVVknzvkTQ8qAJshAniInhS2n8UqVZXKQ%2Ffb2bRfB8rWHbXOepmo3FLV3HmqKeOPMAOgn8X4K49rXYrn5qlVeh5foY%2BYWr3PnGsZqRCDVCHK0pe%2BqLAr90AuDmLSCCWU7qmG%2B8lZSmFM0ijdLhwHMFSxivOomdo%2BtdsUBMpE%2B89bfJU53VG5g8lLlIUmm6gLloU4JcTp2SXbERsgIIqo34TbENrdAGptGECMagsKvBIxoqujFybvkZRYJG9a0jwha7OHP8q8%2FSs7DtcJJOc2nlD4dLu9DQDHeLgwkbSdxAY6pgGWYeIYoaFbqBbQD7zIjwCMY7hkUGN0ujuDaWbiANCzpV6G1TSizN3DvkteO%2B4LKVvptI%2FUiQ5XRQTEuB2ED%2B7NVRy%2FPPS%2BF6ZD01Sz9cxlHCjJ4%2BKJczI77JbwG8aQC5XZ6wZHAf1rUh8auFyAj9wNyYV9RTifVrHkbVYepRZmEHtin6pd76UPl6VpWj2uA9K95a3rMhksn827Y%2FQRz9UioGqZRGra&X-Amz-Signature=0808e693171f66cb32d741466d9794a2f520a9757f5c738bb9811be58c04ba55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFH2DWE4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHIEDxur4FNMJJO%2FkQL9%2Bf1EZwHmfl%2Fll83Iihl90UX%2BAiA1u%2FiuaSiALyfnI5SCp3r3j1LCXJIlr4ag3a%2Bsk8IMviqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9iD8r4%2FWMgQLNbdfKtwDqnb32ZwC0nomrFs4W%2Bokze%2BjjG23kBqMv0Pb%2FBpOGndvyrnPXH1q27vd%2Fy76ClW2auOVnXcrvSesGH7MKWWeIbmrgOD4%2FmPpIgrTL3mfijlhLokcBZnMXmFRSrlvIV%2FbTz%2BYLCk4wBU6Dd9AhoxA0zxxSRSD%2Bt3rsgu7DsCGWwrnJzF3ce7%2B3D9w8pw%2BLISa34j%2BEoOTuFYNa2JhOuxdRJ7QkWK%2Fw7kkatrcR1rvNmSW9Z0uoVAvPnFQWNCAILoJQGXmAK0O7JjTaVrF7LEBkmOHMhdcRSVn6XdKhEhPJ7vslkGQyQpBq9TEUPAspK3%2FKHHttEjkcbzA1I9QCZ6bhCb8GVVknzvkTQ8qAJshAniInhS2n8UqVZXKQ%2Ffb2bRfB8rWHbXOepmo3FLV3HmqKeOPMAOgn8X4K49rXYrn5qlVeh5foY%2BYWr3PnGsZqRCDVCHK0pe%2BqLAr90AuDmLSCCWU7qmG%2B8lZSmFM0ijdLhwHMFSxivOomdo%2BtdsUBMpE%2B89bfJU53VG5g8lLlIUmm6gLloU4JcTp2SXbERsgIIqo34TbENrdAGptGECMagsKvBIxoqujFybvkZRYJG9a0jwha7OHP8q8%2FSs7DtcJJOc2nlD4dLu9DQDHeLgwkbSdxAY6pgGWYeIYoaFbqBbQD7zIjwCMY7hkUGN0ujuDaWbiANCzpV6G1TSizN3DvkteO%2B4LKVvptI%2FUiQ5XRQTEuB2ED%2B7NVRy%2FPPS%2BF6ZD01Sz9cxlHCjJ4%2BKJczI77JbwG8aQC5XZ6wZHAf1rUh8auFyAj9wNyYV9RTifVrHkbVYepRZmEHtin6pd76UPl6VpWj2uA9K95a3rMhksn827Y%2FQRz9UioGqZRGra&X-Amz-Signature=e51f17c947485557225b93fdbfbf175ce15cd56736dab43f7dc481a6585f2bfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFH2DWE4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHIEDxur4FNMJJO%2FkQL9%2Bf1EZwHmfl%2Fll83Iihl90UX%2BAiA1u%2FiuaSiALyfnI5SCp3r3j1LCXJIlr4ag3a%2Bsk8IMviqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9iD8r4%2FWMgQLNbdfKtwDqnb32ZwC0nomrFs4W%2Bokze%2BjjG23kBqMv0Pb%2FBpOGndvyrnPXH1q27vd%2Fy76ClW2auOVnXcrvSesGH7MKWWeIbmrgOD4%2FmPpIgrTL3mfijlhLokcBZnMXmFRSrlvIV%2FbTz%2BYLCk4wBU6Dd9AhoxA0zxxSRSD%2Bt3rsgu7DsCGWwrnJzF3ce7%2B3D9w8pw%2BLISa34j%2BEoOTuFYNa2JhOuxdRJ7QkWK%2Fw7kkatrcR1rvNmSW9Z0uoVAvPnFQWNCAILoJQGXmAK0O7JjTaVrF7LEBkmOHMhdcRSVn6XdKhEhPJ7vslkGQyQpBq9TEUPAspK3%2FKHHttEjkcbzA1I9QCZ6bhCb8GVVknzvkTQ8qAJshAniInhS2n8UqVZXKQ%2Ffb2bRfB8rWHbXOepmo3FLV3HmqKeOPMAOgn8X4K49rXYrn5qlVeh5foY%2BYWr3PnGsZqRCDVCHK0pe%2BqLAr90AuDmLSCCWU7qmG%2B8lZSmFM0ijdLhwHMFSxivOomdo%2BtdsUBMpE%2B89bfJU53VG5g8lLlIUmm6gLloU4JcTp2SXbERsgIIqo34TbENrdAGptGECMagsKvBIxoqujFybvkZRYJG9a0jwha7OHP8q8%2FSs7DtcJJOc2nlD4dLu9DQDHeLgwkbSdxAY6pgGWYeIYoaFbqBbQD7zIjwCMY7hkUGN0ujuDaWbiANCzpV6G1TSizN3DvkteO%2B4LKVvptI%2FUiQ5XRQTEuB2ED%2B7NVRy%2FPPS%2BF6ZD01Sz9cxlHCjJ4%2BKJczI77JbwG8aQC5XZ6wZHAf1rUh8auFyAj9wNyYV9RTifVrHkbVYepRZmEHtin6pd76UPl6VpWj2uA9K95a3rMhksn827Y%2FQRz9UioGqZRGra&X-Amz-Signature=3d54ea1019e6190ad7efd60dd41819498d76eb0df7104d2ee1976a0cacad26d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFH2DWE4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHIEDxur4FNMJJO%2FkQL9%2Bf1EZwHmfl%2Fll83Iihl90UX%2BAiA1u%2FiuaSiALyfnI5SCp3r3j1LCXJIlr4ag3a%2Bsk8IMviqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9iD8r4%2FWMgQLNbdfKtwDqnb32ZwC0nomrFs4W%2Bokze%2BjjG23kBqMv0Pb%2FBpOGndvyrnPXH1q27vd%2Fy76ClW2auOVnXcrvSesGH7MKWWeIbmrgOD4%2FmPpIgrTL3mfijlhLokcBZnMXmFRSrlvIV%2FbTz%2BYLCk4wBU6Dd9AhoxA0zxxSRSD%2Bt3rsgu7DsCGWwrnJzF3ce7%2B3D9w8pw%2BLISa34j%2BEoOTuFYNa2JhOuxdRJ7QkWK%2Fw7kkatrcR1rvNmSW9Z0uoVAvPnFQWNCAILoJQGXmAK0O7JjTaVrF7LEBkmOHMhdcRSVn6XdKhEhPJ7vslkGQyQpBq9TEUPAspK3%2FKHHttEjkcbzA1I9QCZ6bhCb8GVVknzvkTQ8qAJshAniInhS2n8UqVZXKQ%2Ffb2bRfB8rWHbXOepmo3FLV3HmqKeOPMAOgn8X4K49rXYrn5qlVeh5foY%2BYWr3PnGsZqRCDVCHK0pe%2BqLAr90AuDmLSCCWU7qmG%2B8lZSmFM0ijdLhwHMFSxivOomdo%2BtdsUBMpE%2B89bfJU53VG5g8lLlIUmm6gLloU4JcTp2SXbERsgIIqo34TbENrdAGptGECMagsKvBIxoqujFybvkZRYJG9a0jwha7OHP8q8%2FSs7DtcJJOc2nlD4dLu9DQDHeLgwkbSdxAY6pgGWYeIYoaFbqBbQD7zIjwCMY7hkUGN0ujuDaWbiANCzpV6G1TSizN3DvkteO%2B4LKVvptI%2FUiQ5XRQTEuB2ED%2B7NVRy%2FPPS%2BF6ZD01Sz9cxlHCjJ4%2BKJczI77JbwG8aQC5XZ6wZHAf1rUh8auFyAj9wNyYV9RTifVrHkbVYepRZmEHtin6pd76UPl6VpWj2uA9K95a3rMhksn827Y%2FQRz9UioGqZRGra&X-Amz-Signature=30d26ceebaf649aad3db7b359030e1cbfc1869088bf8099638068d55f77a7e8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
