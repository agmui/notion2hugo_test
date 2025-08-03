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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLSYCCLC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcujbjIBbe7b0GDiGVtnblkx4U3sjzpQ9rr3%2BaN6HJngIhALJwVEORaSYTh7FhCcGPknfQ93HErIQ5%2BYgHxOKlFZ8lKv8DCDQQABoMNjM3NDIzMTgzODA1IgxCy36EsiEUWcEcYkkq3APGJEvmBr%2FjLycS5w8zM5TFmevnkqn34lo6DhqaVI89yWgtgZ%2FB%2F92iEg5j%2BtZuxOM%2BzTqh%2FvI1DOQ656aq3wbB1t10yIpzPgFznhdQJBe7ws4I3XuSIKBlTnKLpoyUjsQpUXoXTgvxtTfYxw15hK%2BTm1lRAQW6DtSgmzR%2FVYgqRZE%2FuC%2Bjt9972OoKVdPyZvgkBkkV6pScvY0CkUYRAkwmy08NOOB%2BrNdYkFrESfe3jfEAAM%2BCvf2TT3hJOvhDGZEb0F49cK5PXqNv9vCzR4q%2F4JmuHeZh3eolWJoq%2FoAVEEPjwaRw1cMuzI15GIkRW5JPx9MitvhtfpzHo4bA486UYcvTbWkSysy7JRkraK4YI1QwaRddz9HLzQfullzLWlsvoFd%2Bz63wY1Tl4%2FNfpOGtakTfcYhe8vV%2BoWNRhRnMGdnZ0W56iRKQQSfhsXyDaHZBN%2F%2Fk72WdX%2FiHDcUpCQfbnb8eBgjgrBfDWq9d%2BnjMrX5fjBeNLk2v0Z42o7sQkU07HmlZeMjxIbzRfVpWv%2FSi%2BORQzTg0wW%2B4dygrYUN6doQ8icOfjTFJLF26l%2BJeWpz%2BxiFImctzlVzonDFFiiZVYH%2BTWNMBjt74bO4vPIbDYH3r1CExcN2gHNF1YDCk2b7EBjqkAXB6BoZpDNKXHqgptSoiVrZBInco7vLqviL403JqfKleh9VZL2IwO8w7IHW2RPoN7RmTQc1huCeHoVE8jmw9uJO%2BbFcE5AmCh5djaUdW3c51QCfSCBXpgFHxE3kAoe%2F6sQSRZphb8QF%2BakIslcaBD3nGIR9CDnOK03SuuIkd1hOnxDmrH3t1DEx35PGyn%2FnzeuRLyC9mczC4W2lMVQ30x62iOWeB&X-Amz-Signature=e4c3e0b90f6a24471f65b7446ac4a7e3de40ce82f4c8c88a48c0ae985fb2c28b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLSYCCLC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcujbjIBbe7b0GDiGVtnblkx4U3sjzpQ9rr3%2BaN6HJngIhALJwVEORaSYTh7FhCcGPknfQ93HErIQ5%2BYgHxOKlFZ8lKv8DCDQQABoMNjM3NDIzMTgzODA1IgxCy36EsiEUWcEcYkkq3APGJEvmBr%2FjLycS5w8zM5TFmevnkqn34lo6DhqaVI89yWgtgZ%2FB%2F92iEg5j%2BtZuxOM%2BzTqh%2FvI1DOQ656aq3wbB1t10yIpzPgFznhdQJBe7ws4I3XuSIKBlTnKLpoyUjsQpUXoXTgvxtTfYxw15hK%2BTm1lRAQW6DtSgmzR%2FVYgqRZE%2FuC%2Bjt9972OoKVdPyZvgkBkkV6pScvY0CkUYRAkwmy08NOOB%2BrNdYkFrESfe3jfEAAM%2BCvf2TT3hJOvhDGZEb0F49cK5PXqNv9vCzR4q%2F4JmuHeZh3eolWJoq%2FoAVEEPjwaRw1cMuzI15GIkRW5JPx9MitvhtfpzHo4bA486UYcvTbWkSysy7JRkraK4YI1QwaRddz9HLzQfullzLWlsvoFd%2Bz63wY1Tl4%2FNfpOGtakTfcYhe8vV%2BoWNRhRnMGdnZ0W56iRKQQSfhsXyDaHZBN%2F%2Fk72WdX%2FiHDcUpCQfbnb8eBgjgrBfDWq9d%2BnjMrX5fjBeNLk2v0Z42o7sQkU07HmlZeMjxIbzRfVpWv%2FSi%2BORQzTg0wW%2B4dygrYUN6doQ8icOfjTFJLF26l%2BJeWpz%2BxiFImctzlVzonDFFiiZVYH%2BTWNMBjt74bO4vPIbDYH3r1CExcN2gHNF1YDCk2b7EBjqkAXB6BoZpDNKXHqgptSoiVrZBInco7vLqviL403JqfKleh9VZL2IwO8w7IHW2RPoN7RmTQc1huCeHoVE8jmw9uJO%2BbFcE5AmCh5djaUdW3c51QCfSCBXpgFHxE3kAoe%2F6sQSRZphb8QF%2BakIslcaBD3nGIR9CDnOK03SuuIkd1hOnxDmrH3t1DEx35PGyn%2FnzeuRLyC9mczC4W2lMVQ30x62iOWeB&X-Amz-Signature=912c735ada1a09b26394c346947616a1427f291f645641d0b8d8c202fed8ba43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLSYCCLC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcujbjIBbe7b0GDiGVtnblkx4U3sjzpQ9rr3%2BaN6HJngIhALJwVEORaSYTh7FhCcGPknfQ93HErIQ5%2BYgHxOKlFZ8lKv8DCDQQABoMNjM3NDIzMTgzODA1IgxCy36EsiEUWcEcYkkq3APGJEvmBr%2FjLycS5w8zM5TFmevnkqn34lo6DhqaVI89yWgtgZ%2FB%2F92iEg5j%2BtZuxOM%2BzTqh%2FvI1DOQ656aq3wbB1t10yIpzPgFznhdQJBe7ws4I3XuSIKBlTnKLpoyUjsQpUXoXTgvxtTfYxw15hK%2BTm1lRAQW6DtSgmzR%2FVYgqRZE%2FuC%2Bjt9972OoKVdPyZvgkBkkV6pScvY0CkUYRAkwmy08NOOB%2BrNdYkFrESfe3jfEAAM%2BCvf2TT3hJOvhDGZEb0F49cK5PXqNv9vCzR4q%2F4JmuHeZh3eolWJoq%2FoAVEEPjwaRw1cMuzI15GIkRW5JPx9MitvhtfpzHo4bA486UYcvTbWkSysy7JRkraK4YI1QwaRddz9HLzQfullzLWlsvoFd%2Bz63wY1Tl4%2FNfpOGtakTfcYhe8vV%2BoWNRhRnMGdnZ0W56iRKQQSfhsXyDaHZBN%2F%2Fk72WdX%2FiHDcUpCQfbnb8eBgjgrBfDWq9d%2BnjMrX5fjBeNLk2v0Z42o7sQkU07HmlZeMjxIbzRfVpWv%2FSi%2BORQzTg0wW%2B4dygrYUN6doQ8icOfjTFJLF26l%2BJeWpz%2BxiFImctzlVzonDFFiiZVYH%2BTWNMBjt74bO4vPIbDYH3r1CExcN2gHNF1YDCk2b7EBjqkAXB6BoZpDNKXHqgptSoiVrZBInco7vLqviL403JqfKleh9VZL2IwO8w7IHW2RPoN7RmTQc1huCeHoVE8jmw9uJO%2BbFcE5AmCh5djaUdW3c51QCfSCBXpgFHxE3kAoe%2F6sQSRZphb8QF%2BakIslcaBD3nGIR9CDnOK03SuuIkd1hOnxDmrH3t1DEx35PGyn%2FnzeuRLyC9mczC4W2lMVQ30x62iOWeB&X-Amz-Signature=94284ff904ffbd4a302b9fb6dd3d375cc017ed0d264da5fc62c2af5d3a9589e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLSYCCLC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcujbjIBbe7b0GDiGVtnblkx4U3sjzpQ9rr3%2BaN6HJngIhALJwVEORaSYTh7FhCcGPknfQ93HErIQ5%2BYgHxOKlFZ8lKv8DCDQQABoMNjM3NDIzMTgzODA1IgxCy36EsiEUWcEcYkkq3APGJEvmBr%2FjLycS5w8zM5TFmevnkqn34lo6DhqaVI89yWgtgZ%2FB%2F92iEg5j%2BtZuxOM%2BzTqh%2FvI1DOQ656aq3wbB1t10yIpzPgFznhdQJBe7ws4I3XuSIKBlTnKLpoyUjsQpUXoXTgvxtTfYxw15hK%2BTm1lRAQW6DtSgmzR%2FVYgqRZE%2FuC%2Bjt9972OoKVdPyZvgkBkkV6pScvY0CkUYRAkwmy08NOOB%2BrNdYkFrESfe3jfEAAM%2BCvf2TT3hJOvhDGZEb0F49cK5PXqNv9vCzR4q%2F4JmuHeZh3eolWJoq%2FoAVEEPjwaRw1cMuzI15GIkRW5JPx9MitvhtfpzHo4bA486UYcvTbWkSysy7JRkraK4YI1QwaRddz9HLzQfullzLWlsvoFd%2Bz63wY1Tl4%2FNfpOGtakTfcYhe8vV%2BoWNRhRnMGdnZ0W56iRKQQSfhsXyDaHZBN%2F%2Fk72WdX%2FiHDcUpCQfbnb8eBgjgrBfDWq9d%2BnjMrX5fjBeNLk2v0Z42o7sQkU07HmlZeMjxIbzRfVpWv%2FSi%2BORQzTg0wW%2B4dygrYUN6doQ8icOfjTFJLF26l%2BJeWpz%2BxiFImctzlVzonDFFiiZVYH%2BTWNMBjt74bO4vPIbDYH3r1CExcN2gHNF1YDCk2b7EBjqkAXB6BoZpDNKXHqgptSoiVrZBInco7vLqviL403JqfKleh9VZL2IwO8w7IHW2RPoN7RmTQc1huCeHoVE8jmw9uJO%2BbFcE5AmCh5djaUdW3c51QCfSCBXpgFHxE3kAoe%2F6sQSRZphb8QF%2BakIslcaBD3nGIR9CDnOK03SuuIkd1hOnxDmrH3t1DEx35PGyn%2FnzeuRLyC9mczC4W2lMVQ30x62iOWeB&X-Amz-Signature=84a1ee09656413a11bca9a6be2330f34ae74bf5c63c7ab2333ee6c980ba79cb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLSYCCLC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcujbjIBbe7b0GDiGVtnblkx4U3sjzpQ9rr3%2BaN6HJngIhALJwVEORaSYTh7FhCcGPknfQ93HErIQ5%2BYgHxOKlFZ8lKv8DCDQQABoMNjM3NDIzMTgzODA1IgxCy36EsiEUWcEcYkkq3APGJEvmBr%2FjLycS5w8zM5TFmevnkqn34lo6DhqaVI89yWgtgZ%2FB%2F92iEg5j%2BtZuxOM%2BzTqh%2FvI1DOQ656aq3wbB1t10yIpzPgFznhdQJBe7ws4I3XuSIKBlTnKLpoyUjsQpUXoXTgvxtTfYxw15hK%2BTm1lRAQW6DtSgmzR%2FVYgqRZE%2FuC%2Bjt9972OoKVdPyZvgkBkkV6pScvY0CkUYRAkwmy08NOOB%2BrNdYkFrESfe3jfEAAM%2BCvf2TT3hJOvhDGZEb0F49cK5PXqNv9vCzR4q%2F4JmuHeZh3eolWJoq%2FoAVEEPjwaRw1cMuzI15GIkRW5JPx9MitvhtfpzHo4bA486UYcvTbWkSysy7JRkraK4YI1QwaRddz9HLzQfullzLWlsvoFd%2Bz63wY1Tl4%2FNfpOGtakTfcYhe8vV%2BoWNRhRnMGdnZ0W56iRKQQSfhsXyDaHZBN%2F%2Fk72WdX%2FiHDcUpCQfbnb8eBgjgrBfDWq9d%2BnjMrX5fjBeNLk2v0Z42o7sQkU07HmlZeMjxIbzRfVpWv%2FSi%2BORQzTg0wW%2B4dygrYUN6doQ8icOfjTFJLF26l%2BJeWpz%2BxiFImctzlVzonDFFiiZVYH%2BTWNMBjt74bO4vPIbDYH3r1CExcN2gHNF1YDCk2b7EBjqkAXB6BoZpDNKXHqgptSoiVrZBInco7vLqviL403JqfKleh9VZL2IwO8w7IHW2RPoN7RmTQc1huCeHoVE8jmw9uJO%2BbFcE5AmCh5djaUdW3c51QCfSCBXpgFHxE3kAoe%2F6sQSRZphb8QF%2BakIslcaBD3nGIR9CDnOK03SuuIkd1hOnxDmrH3t1DEx35PGyn%2FnzeuRLyC9mczC4W2lMVQ30x62iOWeB&X-Amz-Signature=9dd21836e6cb545ae30b375dd2a6f4f8db158b5cba620116937470dec5fdd0e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLSYCCLC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcujbjIBbe7b0GDiGVtnblkx4U3sjzpQ9rr3%2BaN6HJngIhALJwVEORaSYTh7FhCcGPknfQ93HErIQ5%2BYgHxOKlFZ8lKv8DCDQQABoMNjM3NDIzMTgzODA1IgxCy36EsiEUWcEcYkkq3APGJEvmBr%2FjLycS5w8zM5TFmevnkqn34lo6DhqaVI89yWgtgZ%2FB%2F92iEg5j%2BtZuxOM%2BzTqh%2FvI1DOQ656aq3wbB1t10yIpzPgFznhdQJBe7ws4I3XuSIKBlTnKLpoyUjsQpUXoXTgvxtTfYxw15hK%2BTm1lRAQW6DtSgmzR%2FVYgqRZE%2FuC%2Bjt9972OoKVdPyZvgkBkkV6pScvY0CkUYRAkwmy08NOOB%2BrNdYkFrESfe3jfEAAM%2BCvf2TT3hJOvhDGZEb0F49cK5PXqNv9vCzR4q%2F4JmuHeZh3eolWJoq%2FoAVEEPjwaRw1cMuzI15GIkRW5JPx9MitvhtfpzHo4bA486UYcvTbWkSysy7JRkraK4YI1QwaRddz9HLzQfullzLWlsvoFd%2Bz63wY1Tl4%2FNfpOGtakTfcYhe8vV%2BoWNRhRnMGdnZ0W56iRKQQSfhsXyDaHZBN%2F%2Fk72WdX%2FiHDcUpCQfbnb8eBgjgrBfDWq9d%2BnjMrX5fjBeNLk2v0Z42o7sQkU07HmlZeMjxIbzRfVpWv%2FSi%2BORQzTg0wW%2B4dygrYUN6doQ8icOfjTFJLF26l%2BJeWpz%2BxiFImctzlVzonDFFiiZVYH%2BTWNMBjt74bO4vPIbDYH3r1CExcN2gHNF1YDCk2b7EBjqkAXB6BoZpDNKXHqgptSoiVrZBInco7vLqviL403JqfKleh9VZL2IwO8w7IHW2RPoN7RmTQc1huCeHoVE8jmw9uJO%2BbFcE5AmCh5djaUdW3c51QCfSCBXpgFHxE3kAoe%2F6sQSRZphb8QF%2BakIslcaBD3nGIR9CDnOK03SuuIkd1hOnxDmrH3t1DEx35PGyn%2FnzeuRLyC9mczC4W2lMVQ30x62iOWeB&X-Amz-Signature=5102c9487b731bc63b096e26c93be18145c631bb8fbc9e291809b480d4b83164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLSYCCLC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcujbjIBbe7b0GDiGVtnblkx4U3sjzpQ9rr3%2BaN6HJngIhALJwVEORaSYTh7FhCcGPknfQ93HErIQ5%2BYgHxOKlFZ8lKv8DCDQQABoMNjM3NDIzMTgzODA1IgxCy36EsiEUWcEcYkkq3APGJEvmBr%2FjLycS5w8zM5TFmevnkqn34lo6DhqaVI89yWgtgZ%2FB%2F92iEg5j%2BtZuxOM%2BzTqh%2FvI1DOQ656aq3wbB1t10yIpzPgFznhdQJBe7ws4I3XuSIKBlTnKLpoyUjsQpUXoXTgvxtTfYxw15hK%2BTm1lRAQW6DtSgmzR%2FVYgqRZE%2FuC%2Bjt9972OoKVdPyZvgkBkkV6pScvY0CkUYRAkwmy08NOOB%2BrNdYkFrESfe3jfEAAM%2BCvf2TT3hJOvhDGZEb0F49cK5PXqNv9vCzR4q%2F4JmuHeZh3eolWJoq%2FoAVEEPjwaRw1cMuzI15GIkRW5JPx9MitvhtfpzHo4bA486UYcvTbWkSysy7JRkraK4YI1QwaRddz9HLzQfullzLWlsvoFd%2Bz63wY1Tl4%2FNfpOGtakTfcYhe8vV%2BoWNRhRnMGdnZ0W56iRKQQSfhsXyDaHZBN%2F%2Fk72WdX%2FiHDcUpCQfbnb8eBgjgrBfDWq9d%2BnjMrX5fjBeNLk2v0Z42o7sQkU07HmlZeMjxIbzRfVpWv%2FSi%2BORQzTg0wW%2B4dygrYUN6doQ8icOfjTFJLF26l%2BJeWpz%2BxiFImctzlVzonDFFiiZVYH%2BTWNMBjt74bO4vPIbDYH3r1CExcN2gHNF1YDCk2b7EBjqkAXB6BoZpDNKXHqgptSoiVrZBInco7vLqviL403JqfKleh9VZL2IwO8w7IHW2RPoN7RmTQc1huCeHoVE8jmw9uJO%2BbFcE5AmCh5djaUdW3c51QCfSCBXpgFHxE3kAoe%2F6sQSRZphb8QF%2BakIslcaBD3nGIR9CDnOK03SuuIkd1hOnxDmrH3t1DEx35PGyn%2FnzeuRLyC9mczC4W2lMVQ30x62iOWeB&X-Amz-Signature=18f6fa3257dc4da88c291047d81079583a4281905173e6d70708c69f115548a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLSYCCLC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcujbjIBbe7b0GDiGVtnblkx4U3sjzpQ9rr3%2BaN6HJngIhALJwVEORaSYTh7FhCcGPknfQ93HErIQ5%2BYgHxOKlFZ8lKv8DCDQQABoMNjM3NDIzMTgzODA1IgxCy36EsiEUWcEcYkkq3APGJEvmBr%2FjLycS5w8zM5TFmevnkqn34lo6DhqaVI89yWgtgZ%2FB%2F92iEg5j%2BtZuxOM%2BzTqh%2FvI1DOQ656aq3wbB1t10yIpzPgFznhdQJBe7ws4I3XuSIKBlTnKLpoyUjsQpUXoXTgvxtTfYxw15hK%2BTm1lRAQW6DtSgmzR%2FVYgqRZE%2FuC%2Bjt9972OoKVdPyZvgkBkkV6pScvY0CkUYRAkwmy08NOOB%2BrNdYkFrESfe3jfEAAM%2BCvf2TT3hJOvhDGZEb0F49cK5PXqNv9vCzR4q%2F4JmuHeZh3eolWJoq%2FoAVEEPjwaRw1cMuzI15GIkRW5JPx9MitvhtfpzHo4bA486UYcvTbWkSysy7JRkraK4YI1QwaRddz9HLzQfullzLWlsvoFd%2Bz63wY1Tl4%2FNfpOGtakTfcYhe8vV%2BoWNRhRnMGdnZ0W56iRKQQSfhsXyDaHZBN%2F%2Fk72WdX%2FiHDcUpCQfbnb8eBgjgrBfDWq9d%2BnjMrX5fjBeNLk2v0Z42o7sQkU07HmlZeMjxIbzRfVpWv%2FSi%2BORQzTg0wW%2B4dygrYUN6doQ8icOfjTFJLF26l%2BJeWpz%2BxiFImctzlVzonDFFiiZVYH%2BTWNMBjt74bO4vPIbDYH3r1CExcN2gHNF1YDCk2b7EBjqkAXB6BoZpDNKXHqgptSoiVrZBInco7vLqviL403JqfKleh9VZL2IwO8w7IHW2RPoN7RmTQc1huCeHoVE8jmw9uJO%2BbFcE5AmCh5djaUdW3c51QCfSCBXpgFHxE3kAoe%2F6sQSRZphb8QF%2BakIslcaBD3nGIR9CDnOK03SuuIkd1hOnxDmrH3t1DEx35PGyn%2FnzeuRLyC9mczC4W2lMVQ30x62iOWeB&X-Amz-Signature=4497d7700dd13b028ebd1a5daf7b5cc675bbd77bfa3fc528253680b3fc984226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLSYCCLC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcujbjIBbe7b0GDiGVtnblkx4U3sjzpQ9rr3%2BaN6HJngIhALJwVEORaSYTh7FhCcGPknfQ93HErIQ5%2BYgHxOKlFZ8lKv8DCDQQABoMNjM3NDIzMTgzODA1IgxCy36EsiEUWcEcYkkq3APGJEvmBr%2FjLycS5w8zM5TFmevnkqn34lo6DhqaVI89yWgtgZ%2FB%2F92iEg5j%2BtZuxOM%2BzTqh%2FvI1DOQ656aq3wbB1t10yIpzPgFznhdQJBe7ws4I3XuSIKBlTnKLpoyUjsQpUXoXTgvxtTfYxw15hK%2BTm1lRAQW6DtSgmzR%2FVYgqRZE%2FuC%2Bjt9972OoKVdPyZvgkBkkV6pScvY0CkUYRAkwmy08NOOB%2BrNdYkFrESfe3jfEAAM%2BCvf2TT3hJOvhDGZEb0F49cK5PXqNv9vCzR4q%2F4JmuHeZh3eolWJoq%2FoAVEEPjwaRw1cMuzI15GIkRW5JPx9MitvhtfpzHo4bA486UYcvTbWkSysy7JRkraK4YI1QwaRddz9HLzQfullzLWlsvoFd%2Bz63wY1Tl4%2FNfpOGtakTfcYhe8vV%2BoWNRhRnMGdnZ0W56iRKQQSfhsXyDaHZBN%2F%2Fk72WdX%2FiHDcUpCQfbnb8eBgjgrBfDWq9d%2BnjMrX5fjBeNLk2v0Z42o7sQkU07HmlZeMjxIbzRfVpWv%2FSi%2BORQzTg0wW%2B4dygrYUN6doQ8icOfjTFJLF26l%2BJeWpz%2BxiFImctzlVzonDFFiiZVYH%2BTWNMBjt74bO4vPIbDYH3r1CExcN2gHNF1YDCk2b7EBjqkAXB6BoZpDNKXHqgptSoiVrZBInco7vLqviL403JqfKleh9VZL2IwO8w7IHW2RPoN7RmTQc1huCeHoVE8jmw9uJO%2BbFcE5AmCh5djaUdW3c51QCfSCBXpgFHxE3kAoe%2F6sQSRZphb8QF%2BakIslcaBD3nGIR9CDnOK03SuuIkd1hOnxDmrH3t1DEx35PGyn%2FnzeuRLyC9mczC4W2lMVQ30x62iOWeB&X-Amz-Signature=a0023b47b037cc48f0a5997167c72ed7b4368fbe8445ee8f94841f5d9774ef99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLSYCCLC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcujbjIBbe7b0GDiGVtnblkx4U3sjzpQ9rr3%2BaN6HJngIhALJwVEORaSYTh7FhCcGPknfQ93HErIQ5%2BYgHxOKlFZ8lKv8DCDQQABoMNjM3NDIzMTgzODA1IgxCy36EsiEUWcEcYkkq3APGJEvmBr%2FjLycS5w8zM5TFmevnkqn34lo6DhqaVI89yWgtgZ%2FB%2F92iEg5j%2BtZuxOM%2BzTqh%2FvI1DOQ656aq3wbB1t10yIpzPgFznhdQJBe7ws4I3XuSIKBlTnKLpoyUjsQpUXoXTgvxtTfYxw15hK%2BTm1lRAQW6DtSgmzR%2FVYgqRZE%2FuC%2Bjt9972OoKVdPyZvgkBkkV6pScvY0CkUYRAkwmy08NOOB%2BrNdYkFrESfe3jfEAAM%2BCvf2TT3hJOvhDGZEb0F49cK5PXqNv9vCzR4q%2F4JmuHeZh3eolWJoq%2FoAVEEPjwaRw1cMuzI15GIkRW5JPx9MitvhtfpzHo4bA486UYcvTbWkSysy7JRkraK4YI1QwaRddz9HLzQfullzLWlsvoFd%2Bz63wY1Tl4%2FNfpOGtakTfcYhe8vV%2BoWNRhRnMGdnZ0W56iRKQQSfhsXyDaHZBN%2F%2Fk72WdX%2FiHDcUpCQfbnb8eBgjgrBfDWq9d%2BnjMrX5fjBeNLk2v0Z42o7sQkU07HmlZeMjxIbzRfVpWv%2FSi%2BORQzTg0wW%2B4dygrYUN6doQ8icOfjTFJLF26l%2BJeWpz%2BxiFImctzlVzonDFFiiZVYH%2BTWNMBjt74bO4vPIbDYH3r1CExcN2gHNF1YDCk2b7EBjqkAXB6BoZpDNKXHqgptSoiVrZBInco7vLqviL403JqfKleh9VZL2IwO8w7IHW2RPoN7RmTQc1huCeHoVE8jmw9uJO%2BbFcE5AmCh5djaUdW3c51QCfSCBXpgFHxE3kAoe%2F6sQSRZphb8QF%2BakIslcaBD3nGIR9CDnOK03SuuIkd1hOnxDmrH3t1DEx35PGyn%2FnzeuRLyC9mczC4W2lMVQ30x62iOWeB&X-Amz-Signature=bb2cdc6ed304c2bbdd12df8a8610540c5718c114243c379f6439443fe5ec9a1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRKZ4X54%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2S3H33f%2Fjun1LBB4aCmcNRNmPSC0TvnAfj0vJAU4DfAIgNUVKxHEU4kQEFDJaQljUeoWt%2B3VpEzIBKpGqO2Hclpgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFC3OnDTza2wJ1mWXSrcAw76ZPmGbopTsAVW2A5R1%2Bf5CI4l3KYi2jHUQFO7A22exutlf%2FM%2BxhHUwnRyMgYjAFXw23NwGPwFzgVbhMQBy%2BCvyMc4QOKx7vC8LEJow7JCZW9aEbb6Xeo2BJUM1Wunvu%2F6nR6mlMGandtW%2FCGB8OAIDa32S9rV9tQJ91s6Po2911XuO8h3caoFCnnm4lRHyJWh7F24Aa1CleBL1h1JUzDIJ1njLcG9fHfwkO%2B%2F2jA8VIXZG7YfPFo1TzE8kmOV03O3DofX%2B3f%2FNoKUQTzVaQfmaHUxosdqamJjT6bqSbtJRcwbAoB%2BBFigWe%2BjD2nqr7ZUekEMo9PxA3l6tzk1ZJYmbWHvqWwxfxxZRdzFwzYTkcGUNWk%2BEMZOI5y6NKoCWr4uzYu9Tj7oAV2hGG8kHATZRpKk8v3udzdG47RVjPfYUHqC4wfCCSI4VxJ0nleoknqrirgqc6qjXsOQ4hDVnlC1kqyjhPgmyKRJspNw8a5bju49gOiLEvhf2EoIH4CVbI8JkupIGmYXG0Tj%2FGFbYhhluugnXStKK34M65Xw0bVIIzClqB%2FTUulZvFpxAZENxj%2BASc06%2BfLNvoxa9ovcKZnP%2BIS03nLeY9maqAh5921gsFC9hbPJKQ9CUwiMMKPZvsQGOqUBj1JRmJwOd%2BdG7wsygV3XroX7iNMGkuPmkomCt7gcDtkkZb3xt5yHgde9mklJLMg%2By0%2F0XBR5ok6kQLuYbPDBZWuU2PWHuaAh9PDbq1Dvsbq%2F2ZYGnG7MJfjiQnth80xjPnrHhdC6CQz%2F8xjc2Tl9x%2BkvUUy1ie9qUVwCb6c6kPv92Pst4ZEqPsORKRCMJ%2BsSjpYkR2VjdJRB1zLxTvwF3TQfAvGj&X-Amz-Signature=5583de470725063530762c48cfa7a2d35a3d72c4e7d0b9b4e0134b246fdbc508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V75UXSGB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD93xlG9lFeNMsz2N1ITdRURxLMJuFlIsEQDHJO8rLc%2FQIgAUtFnuRRa5ZaV3NcB7bzn%2FtdPvWCz413VcWCTFIrlg0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDO7Ckjcz1t5zl%2FIFoCrcA1WJ8MM6C14UChXiO43IZyBO9vH%2B1A1p9U3dCvuWPwyD45%2BFFq7XWKeWw4B1m%2BmTpaQhynCRA6WcPoQlG1DJnueLsw%2BxHUT1hLY8ciy0Rn6UayYW94O6LrIUC6hH0qHjsSH19o7MuFlMmzf0aKnkeXUWQnNBGt0S7sP1qbrpKUZVV%2BG9bV0sTW7by%2BVIkirCWBOADnw7%2Bko235gg3f6LBHsEyF9m4CjHxcQhozbj8As7JpVEJ1ShmsDojIgJv5IdlIIBUFUePdV1IOjt9Khp05wwNpFdBaV9vmgS6O3j1BfLEP9c0ZXwd16yzLZmCv6nEOeBNy0CC1g26%2Fe6h9NtGiLrYKPTiho%2FdbKbReXUUZuio43RIW%2F9vsJsXpd%2FBQlNXk9LVdbFGoPnrBlpYbHqfr6R6QidymNsB68%2BogC3vVZ%2BaiisMz%2BRtDfa0sZ0vMEnL1b2ND1VUTrAmPL7xosivIA4zU3eoSTuOM51PYNjwK%2FZg67W%2F9IIHyYShZeoZ5OnHK3m4XSG0QpZnQneEXRG6QRaC%2FRmVB8PGFQiIAWur2DorQg9s5xIoc3PlOYeDUKjPI3XrUNllH3ZH6WrZsOpUAuBV4juf%2B1HvM9HTsX8IC1QGlXLxcANIxemRYQlMK7ZvsQGOqUBCckYLDIa2jCf0i50DNZzNfqJM3gqIDVaZlkQT8vXwUMmTCIqOJ9w04KalsPgHIgVgJ%2BFiXEu%2FVYbd2trLgmlj%2BMGzUC24gjMgIBnTucdZTNduEw17fIpPcjbZw30gOrFfXrKp3KeWfgR%2FVwaYNK5%2FT29ZiXjQFEMeQRvhS0BBXONreT07BCPLyEIGEPeFlFto93Q31iHgCsczWkQoFLRzrHsv9XD&X-Amz-Signature=4abf3444101e3ecddd9a3202d094ae3b4e86ab64318a8c3073acc49273cc30e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STFZ2V43%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWsSggZawbU1wiwt7pFScCa8q6wj28MzNteAcZijTHpAiBC89akq0EcTWZugVHmG3eRkg1EGR4VpdnaFnD5nKbKmSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMYNQxflH5PQ%2B%2BgiGOKtwDzw4%2FxN0oXfNuqGDz8jfT24MGBdiwF2qe5NnZ%2BtF1sObQ0r3%2FQyLuEapwI7wd94ND4hUJquBKNO3iORDywxHFDu4aKwfkM79maxFQvTRUmI0iZiw%2FdqyZM9D%2FK63MMMZ%2F6SjPVKEvf7Fi30eTECe9YmzJRCdk0zlWH7qtrCBvHYV5l5fQe%2FDuhKv51vcPPHirFiP2SSoRQ2CKInr2wP6QkAiUaJQz%2FD4eRrtwUKUqDE9aby0uEBCZLTWj9kI4sKtQavfVUwEUdZnH2Iu8KGWw7JMNmjfhzxuqsV%2FS%2FWoPpe97IFO1jIFmD9DT4g7hQCY%2BROIqbINKVVBpRAH08bDpU3iidv3cp8H6beblxQ%2BlTDSZDwsaOgnB7I9ZVwFu%2F7bNrcdJ24pnfUQifMWW2lrmfQw6y%2F2%2B7hSbGu94HhUu49J4fXvHSlKAYpvszFt9z09r2ZIU6cNIFMnhVoLVCot6ol0XKPJ0K7lPzSG7NocXkRTYW5prqT4Z%2FQPHG2khl4VML2uf0oN0bGiLWBMH1p1dNw1bCKb8UsSPxjm0tlxrqJStFwRhjRvCVDiXYfb%2Fw8hd9ocBW7j5NtwpEYPAB00XKKXqBsBMdGyPZOdjg%2FAlaKpUc4UGVYnEtbOrG64w6Nm%2BxAY6pgG%2F%2BiYfA%2BQfKhNx%2B%2B5aOfmaWO9qTw%2F5wB4pmU8VEbcaF%2FQ7Vt%2Ba4xoQieL5tauCvtra8u22AeNzLB6%2BsJE71UibJD41M8MQzwVDjEaOnKKyl6Ni4XZpCK2mSF9OPyUuhaXTBpvlWOKTh6229By%2FTJImfLo5afcJHj%2FfOfTQzQff0nSn0GeC1Ah6kKqPY0i2ySJL6I9pAmqUkc4PeSlo742eCqBLxsGp&X-Amz-Signature=3359e261ea14491cb2c58ec1c323ae57a2e341b20a8aa2013b8eeeae2286348d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLSYCCLC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcujbjIBbe7b0GDiGVtnblkx4U3sjzpQ9rr3%2BaN6HJngIhALJwVEORaSYTh7FhCcGPknfQ93HErIQ5%2BYgHxOKlFZ8lKv8DCDQQABoMNjM3NDIzMTgzODA1IgxCy36EsiEUWcEcYkkq3APGJEvmBr%2FjLycS5w8zM5TFmevnkqn34lo6DhqaVI89yWgtgZ%2FB%2F92iEg5j%2BtZuxOM%2BzTqh%2FvI1DOQ656aq3wbB1t10yIpzPgFznhdQJBe7ws4I3XuSIKBlTnKLpoyUjsQpUXoXTgvxtTfYxw15hK%2BTm1lRAQW6DtSgmzR%2FVYgqRZE%2FuC%2Bjt9972OoKVdPyZvgkBkkV6pScvY0CkUYRAkwmy08NOOB%2BrNdYkFrESfe3jfEAAM%2BCvf2TT3hJOvhDGZEb0F49cK5PXqNv9vCzR4q%2F4JmuHeZh3eolWJoq%2FoAVEEPjwaRw1cMuzI15GIkRW5JPx9MitvhtfpzHo4bA486UYcvTbWkSysy7JRkraK4YI1QwaRddz9HLzQfullzLWlsvoFd%2Bz63wY1Tl4%2FNfpOGtakTfcYhe8vV%2BoWNRhRnMGdnZ0W56iRKQQSfhsXyDaHZBN%2F%2Fk72WdX%2FiHDcUpCQfbnb8eBgjgrBfDWq9d%2BnjMrX5fjBeNLk2v0Z42o7sQkU07HmlZeMjxIbzRfVpWv%2FSi%2BORQzTg0wW%2B4dygrYUN6doQ8icOfjTFJLF26l%2BJeWpz%2BxiFImctzlVzonDFFiiZVYH%2BTWNMBjt74bO4vPIbDYH3r1CExcN2gHNF1YDCk2b7EBjqkAXB6BoZpDNKXHqgptSoiVrZBInco7vLqviL403JqfKleh9VZL2IwO8w7IHW2RPoN7RmTQc1huCeHoVE8jmw9uJO%2BbFcE5AmCh5djaUdW3c51QCfSCBXpgFHxE3kAoe%2F6sQSRZphb8QF%2BakIslcaBD3nGIR9CDnOK03SuuIkd1hOnxDmrH3t1DEx35PGyn%2FnzeuRLyC9mczC4W2lMVQ30x62iOWeB&X-Amz-Signature=def983c024722bbf686a27b2b05369a1df4b6abfcdf9e49a14a9d7a3cf5d8918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R53ZAXCU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzQEGD9s51gWeGZhiYWPKFUTAPHILL%2FZZQngroCw%2BxsAiEA%2BF0iAYeBhNmuzdcU5uSW7XXgeOqzn9Edj16ZVwVIkQQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDETWxuBctgr4oFVkECrcAxo1cBI4gsPw%2BR7fhuFLR7ZfnIzlLM7JiyXjhMY%2Fu6cKwUnoWDEAfvlYMrE6icQD2Mev0rDYBGP0XnfYzQbDws4c1nNvhqZsUILDX1ZlNE%2F7uswbSvaxJIxxdt7aZ8ylo%2BBdVNfT6XE%2BUdSJ1sj2zCrduIM3W%2B5ojNKqLcRfgwTiCxg%2FNsMQXLdMPfxPR0DR9Sw2AvmAODXGwcQJAgMHOXWQUM4m8MVKXua1tsz05VKL%2F9dexaRXtiQ4CBF0MU5aXB5q0DaIJ9yKdFIGtzRbR9A136Flf9d6PlCcEfWMjqZ%2BTKNn8rcZOu7Hhb9BqhjSZwjbnuLap8TPR5PtxkoKr58FkDV7b8NsPfyG7%2BW4ZoZvWUjV1%2FdHQsn9AMS6IEOTBiZlD66R1wS%2BTLtxAGvNl%2F1aXVuw00m1LXCXCkKmbE94Z4JeLLFUJv0McEABGsUZYYVv0Roicb6ocSJ5ZqAd%2FVUORIueXdY5l2Tl8CRsNf%2FL139hBFKyLFRxcnFYhl8OHQGHd3fgUesg0SVWm2h%2FBxH65nBJIYZmo3aZMbyaz%2FNTXmf0xxRVD5JPuQ8RpDuUOaHYQr%2BXrDXYVRqRUQt0B0LcoT9Ib8RfwkLg0u4VTCnbPLQb771ZVnb0TsWUMMDZvsQGOqUB1zAUbLCS686NPHtQ42B%2BniEDCJGGkVqBbTtar%2FrKgV7UmPScEYwghwCGo3s1M4wESpvMenSv3FosIhixlMXSd1aCi7ApVbUnbr44U0d3bH3Uu0RcGQo31hYbdCMG%2FqA6Mb5rjS3D6%2Fk3O%2BumsIVK03ccy56bskED5ZNciX8kgtiTek2K6%2B6F%2FNTZaTonkohUr8RGmlytCnsw3pphcWSOD0Z3dkZU&X-Amz-Signature=2be11baf33d5616236446298a74e2fabafb92f9300775d6951edc1ae4370e916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLSYCCLC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcujbjIBbe7b0GDiGVtnblkx4U3sjzpQ9rr3%2BaN6HJngIhALJwVEORaSYTh7FhCcGPknfQ93HErIQ5%2BYgHxOKlFZ8lKv8DCDQQABoMNjM3NDIzMTgzODA1IgxCy36EsiEUWcEcYkkq3APGJEvmBr%2FjLycS5w8zM5TFmevnkqn34lo6DhqaVI89yWgtgZ%2FB%2F92iEg5j%2BtZuxOM%2BzTqh%2FvI1DOQ656aq3wbB1t10yIpzPgFznhdQJBe7ws4I3XuSIKBlTnKLpoyUjsQpUXoXTgvxtTfYxw15hK%2BTm1lRAQW6DtSgmzR%2FVYgqRZE%2FuC%2Bjt9972OoKVdPyZvgkBkkV6pScvY0CkUYRAkwmy08NOOB%2BrNdYkFrESfe3jfEAAM%2BCvf2TT3hJOvhDGZEb0F49cK5PXqNv9vCzR4q%2F4JmuHeZh3eolWJoq%2FoAVEEPjwaRw1cMuzI15GIkRW5JPx9MitvhtfpzHo4bA486UYcvTbWkSysy7JRkraK4YI1QwaRddz9HLzQfullzLWlsvoFd%2Bz63wY1Tl4%2FNfpOGtakTfcYhe8vV%2BoWNRhRnMGdnZ0W56iRKQQSfhsXyDaHZBN%2F%2Fk72WdX%2FiHDcUpCQfbnb8eBgjgrBfDWq9d%2BnjMrX5fjBeNLk2v0Z42o7sQkU07HmlZeMjxIbzRfVpWv%2FSi%2BORQzTg0wW%2B4dygrYUN6doQ8icOfjTFJLF26l%2BJeWpz%2BxiFImctzlVzonDFFiiZVYH%2BTWNMBjt74bO4vPIbDYH3r1CExcN2gHNF1YDCk2b7EBjqkAXB6BoZpDNKXHqgptSoiVrZBInco7vLqviL403JqfKleh9VZL2IwO8w7IHW2RPoN7RmTQc1huCeHoVE8jmw9uJO%2BbFcE5AmCh5djaUdW3c51QCfSCBXpgFHxE3kAoe%2F6sQSRZphb8QF%2BakIslcaBD3nGIR9CDnOK03SuuIkd1hOnxDmrH3t1DEx35PGyn%2FnzeuRLyC9mczC4W2lMVQ30x62iOWeB&X-Amz-Signature=55ac04d9970101b4b16cc113fd05a13bc2dbbb486371d26c97df33bafcb0035d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4EAGRK4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWacH2089zMv0OvvgEgvKN0aXBmY2XKrBu1M6batXgPQIhAPqWVrcE8EKNIzP4lgv5eJsO%2BLIe1ax2FiUH2loPmDJ%2BKv8DCDQQABoMNjM3NDIzMTgzODA1IgyAbHw%2B3iSf5jyDsnQq3ANk%2BkD3XED1Qr1tkXiYry9GYIPoOJPdGCL%2FRcHPkwycD3JyrFS9n4on%2BzO1kqngYyMboZwQh5JKJHOOSsvdslwkS%2BPmKE976hOavUw7HY8SSCzC%2FzcuRBrCbk46UwOcWMR7vV3Ji5Q%2FurKjgYjxm4Lay%2Bt7qdSImK%2F8hx45ivNDwTnIN3MKvkARK5yB1gFfuaJkAJCLaJTCyHr64NVn4Kw7pcg16%2BrCsjnc9HnwsiRCLEoySCFCSuKr3xSCpH8qP1Ad%2BurSNPfx%2F1kMVpn7DGnbw5rjhBHtE5bymwpmRT0SqbPwASkwu0QPeOuAZUyEFwBDJVdHK%2FPrsHi8glSthFfTDnM364X7KncxGI5fcHy3fyXmMou%2BD94WJAt%2FJGmo6S5UbNGBjAsW0UJoYtlpgRFjeJ5PR7%2FKGY%2FdxZKr3PCLGOzQgtZWeL34KgyLGDhkPtUdTf0h0M2JKYKraGlNYTCrmqDFsNpqJ8OmOenQdHqQrvF7WZCsMEROTRtsu50oaFqPuNSirKvzXBPAU6blf%2F1a6AMildhvvSbS%2BaA7eCwtcW8B4igFe1CMmhE4oVeCQCOX9POUi9vimUzO1Riy%2BBcc0RIh1TH4ymMxF7ebbvx8HvrJTJANl4lpRSeXGDCc2b7EBjqkAdxQfH9phZLCBTqjo0f8xHitHb%2FbvcomeRsa%2BjUAgYNVS4lkJEXD6748SlEQWnq13fGj3Z6fUu2yY8xcH230IS%2FIY9UrHVbgw11m3ziUiYGms136TUGsTy02tKVXPJ6piSKHa9OAFuRvQEXqwIJ4HnuY7UJqOOiDkMzR46gsqcpftyIWwFG89oyc5%2BrdYpNmDw0imJLdRZHQq7Nio3l7WLiHvVU%2B&X-Amz-Signature=e4abbd1d1e7511c7c0d69eb2ee355c1478b14571af5665b9bcfb305320b79abb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLSYCCLC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcujbjIBbe7b0GDiGVtnblkx4U3sjzpQ9rr3%2BaN6HJngIhALJwVEORaSYTh7FhCcGPknfQ93HErIQ5%2BYgHxOKlFZ8lKv8DCDQQABoMNjM3NDIzMTgzODA1IgxCy36EsiEUWcEcYkkq3APGJEvmBr%2FjLycS5w8zM5TFmevnkqn34lo6DhqaVI89yWgtgZ%2FB%2F92iEg5j%2BtZuxOM%2BzTqh%2FvI1DOQ656aq3wbB1t10yIpzPgFznhdQJBe7ws4I3XuSIKBlTnKLpoyUjsQpUXoXTgvxtTfYxw15hK%2BTm1lRAQW6DtSgmzR%2FVYgqRZE%2FuC%2Bjt9972OoKVdPyZvgkBkkV6pScvY0CkUYRAkwmy08NOOB%2BrNdYkFrESfe3jfEAAM%2BCvf2TT3hJOvhDGZEb0F49cK5PXqNv9vCzR4q%2F4JmuHeZh3eolWJoq%2FoAVEEPjwaRw1cMuzI15GIkRW5JPx9MitvhtfpzHo4bA486UYcvTbWkSysy7JRkraK4YI1QwaRddz9HLzQfullzLWlsvoFd%2Bz63wY1Tl4%2FNfpOGtakTfcYhe8vV%2BoWNRhRnMGdnZ0W56iRKQQSfhsXyDaHZBN%2F%2Fk72WdX%2FiHDcUpCQfbnb8eBgjgrBfDWq9d%2BnjMrX5fjBeNLk2v0Z42o7sQkU07HmlZeMjxIbzRfVpWv%2FSi%2BORQzTg0wW%2B4dygrYUN6doQ8icOfjTFJLF26l%2BJeWpz%2BxiFImctzlVzonDFFiiZVYH%2BTWNMBjt74bO4vPIbDYH3r1CExcN2gHNF1YDCk2b7EBjqkAXB6BoZpDNKXHqgptSoiVrZBInco7vLqviL403JqfKleh9VZL2IwO8w7IHW2RPoN7RmTQc1huCeHoVE8jmw9uJO%2BbFcE5AmCh5djaUdW3c51QCfSCBXpgFHxE3kAoe%2F6sQSRZphb8QF%2BakIslcaBD3nGIR9CDnOK03SuuIkd1hOnxDmrH3t1DEx35PGyn%2FnzeuRLyC9mczC4W2lMVQ30x62iOWeB&X-Amz-Signature=00ca7ccdfbdb00c0b6803c3c02dfef55ea63bc53a311208d7b201f7d635b2229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRRDJ3FJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7d4UX9KJ3NN%2FIiUMfp0yIzUfFwHUHtp3Hsa8bHJG4HAIhAJoJ1wOKFNG4nh1ybw4C%2FBpbp3k86zP%2Bivw6yZOOVEXnKv8DCDQQABoMNjM3NDIzMTgzODA1IgzO3h6e8eMYu8TWSEMq3ANamO2MJz5MX0u7PZVLmsu9F3pe0GJyeJv3ZgWXSRDD1ytfDM4k3Pd%2BioRInaFGBwFMCbWeUwP4O3%2Fog%2FAN%2F%2BuWwcqRjvncDamRm%2BikENPk8LPs9%2FyEa7jhLD4yfWIWAmFsfjB7cC9hnEuybtpGP6PiHdYp9hr7TqTu2kKWH%2BhBw8cFf1cLXKqYccQauV5xPeL2m5e8pvywkMD%2BDvPPYbVS70lYbHTEyEDW9bCLRxmZEV9U1Dsy9CciaM%2B09%2Ffg%2BAFlz9rUJQNzmfxb9pJWCEqJHG6KQJtY1cRcxMiP%2FSbL4rRLgf0d%2BGeYRfsKEiv7GmWdMQGrPN%2Bf77%2BqCxEeTYTwTSWj5tLEr3%2FTEew559Lc0QNU%2FfXqk%2BLUtj%2B63rZE7e3%2BavXL6V3UldqLg95y%2FOom7OczxNyTNO3U9ErRCUpUNaX43CuJ7ueNmOzuLA%2BCOJ6gby2q9sifZasvASTnbtJ5MNU4G%2FcxPWZDoxx2nW1Bo6%2BQcEmqAM34bQ8X0kIMqI8%2FoqvQRlMkuDXU%2BACvwRmc2wKnBCnfQOYie2pY4c3yTnieMtglUqC2MdXT4U2Qy1PJYQzCDufd6vF3GVhpJ%2FdONtMyrsO99V6Mig9BzC469MIEhpnUYmodwkFWtzCs2b7EBjqkAQwsntuld%2FlQnIDMpQTsyCgRDob%2FDCxFR4zr7%2BSZbhYITv2BhDLzYbxM1Xcy1ZrIFevdqXchE9K6pBD1N2qDTIA4brfLsLcokhuOLkezgVZT39rbQncPaE%2F5MNrf4%2B8SY3SPvHOV%2FgQYKIcn9m1YKYnRCK67BFuqppVvwpagxHO5K3tc6PDnB2A38UXHbXPWQi9ZGihVOJ6vxGU4pdA%2BbTq%2Bnlux&X-Amz-Signature=a6d7b5865dd6cef9632e7fed50cf790986ddd436f78f684c2759af38ec9faa5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLSYCCLC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcujbjIBbe7b0GDiGVtnblkx4U3sjzpQ9rr3%2BaN6HJngIhALJwVEORaSYTh7FhCcGPknfQ93HErIQ5%2BYgHxOKlFZ8lKv8DCDQQABoMNjM3NDIzMTgzODA1IgxCy36EsiEUWcEcYkkq3APGJEvmBr%2FjLycS5w8zM5TFmevnkqn34lo6DhqaVI89yWgtgZ%2FB%2F92iEg5j%2BtZuxOM%2BzTqh%2FvI1DOQ656aq3wbB1t10yIpzPgFznhdQJBe7ws4I3XuSIKBlTnKLpoyUjsQpUXoXTgvxtTfYxw15hK%2BTm1lRAQW6DtSgmzR%2FVYgqRZE%2FuC%2Bjt9972OoKVdPyZvgkBkkV6pScvY0CkUYRAkwmy08NOOB%2BrNdYkFrESfe3jfEAAM%2BCvf2TT3hJOvhDGZEb0F49cK5PXqNv9vCzR4q%2F4JmuHeZh3eolWJoq%2FoAVEEPjwaRw1cMuzI15GIkRW5JPx9MitvhtfpzHo4bA486UYcvTbWkSysy7JRkraK4YI1QwaRddz9HLzQfullzLWlsvoFd%2Bz63wY1Tl4%2FNfpOGtakTfcYhe8vV%2BoWNRhRnMGdnZ0W56iRKQQSfhsXyDaHZBN%2F%2Fk72WdX%2FiHDcUpCQfbnb8eBgjgrBfDWq9d%2BnjMrX5fjBeNLk2v0Z42o7sQkU07HmlZeMjxIbzRfVpWv%2FSi%2BORQzTg0wW%2B4dygrYUN6doQ8icOfjTFJLF26l%2BJeWpz%2BxiFImctzlVzonDFFiiZVYH%2BTWNMBjt74bO4vPIbDYH3r1CExcN2gHNF1YDCk2b7EBjqkAXB6BoZpDNKXHqgptSoiVrZBInco7vLqviL403JqfKleh9VZL2IwO8w7IHW2RPoN7RmTQc1huCeHoVE8jmw9uJO%2BbFcE5AmCh5djaUdW3c51QCfSCBXpgFHxE3kAoe%2F6sQSRZphb8QF%2BakIslcaBD3nGIR9CDnOK03SuuIkd1hOnxDmrH3t1DEx35PGyn%2FnzeuRLyC9mczC4W2lMVQ30x62iOWeB&X-Amz-Signature=69a4fd0efec737420076166694f9dfab9b25721daabc27d84624cf1000b3419b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J6MBSAT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzy3CiDGfv0QS3RQcjEQ4jIggjjpliloytQIDb916UFgIhAPdF5x8ivrnWWMX8jq8kgxWH%2B8zueKDMi6HzL5VC31BrKv8DCDQQABoMNjM3NDIzMTgzODA1IgxNG2zqeCfucECdyH4q3APPxvYryMRVJ8Kpr7%2BrjIUTRJ24gOBXBba3l0ohJZ1lnYRH5zCuBkTtRA1GFi1i9d8TiUiA0XwvecLicM6zCQHxU7Dopt6pbHC2d5uOFCSsihZmgdqfDsA07YQ8KM2rWFifRvLPjTPXsqi8tisrBvktIGr7yetMFVj1iSDQhPvh4xE%2BrVowcIdgNj0Ln%2F0XHdy8siH2fpYrX%2Bt3nvTHmmHP42prg5pOfY4to6Vj%2FbjYgrP2qa6UWBaFJgMAunVnNKy1zn0GPhWJWWYv2CKHQFLRnB%2FNNKh989R42eC8eBY0CtE6o2mgpjjSrKS8cg0hwgWbE9qYW5eAFFArdP21Xu6mph3GBUFk7jqNmm4we764bkZ2jComyCnkeQ%2FUwVatp7isa0VSiehO%2BeszNbv68igTYN0ZqtzHIoLeI6VpuLh%2FiaGeKVytReOeFApljNCZ6aZ8esJ0bcyt8AezSc1jE1%2B%2FYsOvWy%2FsOeB7gZFOFJ05yI6JreQ475AZi1LOk168qJ%2BiaA1JJmEed83GKGsSPJ2qYoETqxRJC%2BR%2B%2FZ1vA6Qg1veOojGIli5dCMKKKGov6F9ly9JS6WDI86w4S3vZoeNR4JTyso4MVpobG4%2FQfmaidL2ygi55orJdhKrJfDCj2b7EBjqkAWQbUeYAahtQeGcRxY%2BxNl6kXSb%2FD4lz%2FdBd63YxIvAQHL7jXIqb%2FmdCK49iTyKCoZLi2MmCwp3tHHZavqXEo2qPXTN0F%2Bmpl4jEFRfk3tk4%2Bi5ZzbOtUHc%2B7tSHpGELPmiG8Y0CuawPG3prfq8HnNkE4PllohFBtJhhGoXtcDGYvLeKnwiXj33J%2FLY4wXOI6WYcO9bBBkjFrOPRO7HaiTUqSLep&X-Amz-Signature=930fe91cb794b7ca5470bc049b865c67a8e4f629973eaa7b2184dc7eef234125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NDNEP2E%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRhGidcewyISHSjU8tfiM6q58Da59gVZ7hS1ZM23gLdQIhANk1KkmRFMuoNDffQLQ8xpcdL3PRZbCQUCWS3yfXbgwoKv8DCDQQABoMNjM3NDIzMTgzODA1IgymhpEnsrzXHC324dAq3ANd%2FnY%2BWwq3fSXLcOl11HCe6l39VEOAwE%2FX7dPhGra3uyChOTXubhhiNAoF5NO%2BNwwLU1UkTaNx0pn653JvVSE3fbPzqgFURpSympzFOnsFi5%2BScMf32e1DjBsAh%2FLkODF90E4PcglxqPNSOkFEPRiVzXAsT%2F5PJ%2F6bitOvbMGKeb9CMzRSmmiydijH4ZFQ3Pnr673RBpZPEroRVOYzBWfub4%2Br7PPAy2vss4RauJAym2BCouv3VnK0RFRBJ%2FkAGZ22X8p9%2Fx73xgAnv2mbigGv1Z%2FRh1fIk9D0nWZEdBfi31pAKmAqlISGt7WfLPn5ljHaG%2BygHeCskWs850qgk%2BH2FLKjknwJ1Q0YRLikpBNxeX0aIj8pRGXDkHV2QUkmAbTmvj39B4Baxh40SiZItGwtL4UrFNKpZBeGhd6J%2FB5tz%2BGednjRdmH9bBghLvoLtunDLmc5B9MpkMZTsvgVDof8hJe6cQy4zPPM9UbrDD2sVpiVN%2FQa58I0ty9LgXpEx%2F21yRfeCLTkXeEX%2BAqazd8Puktwi4sy0sZwGDHdrsTEzbINj3ZwGTW1j9EQdoYvFcDKpJBHkrFpqSy2hZNqpomn2VZwXzVy9gxaN93S9pQ1LlZURfy6t7fliwNTozDY2b7EBjqkAWwrmvpNiDw2gJsxdy%2BnYS%2BOLbMSzNLi2zX4ZNKv7OaTEzPxglHV2c%2BurLlsGXDJBeLN1W1daahHbEH9XYUJPdfl6nSY9%2FR%2BEOKHnNzd11tCGpwY7nunNzl9izE2op%2FUXfOjNPYVZ8tlO7sBDb%2BfwbUwPid5cygRkvkLRn9AiSF1e0KA2ZeVglMqJj49ZV%2B7AUeB68AeatHrbONfQvMxKKZS1YXp&X-Amz-Signature=cdc177ec4c332287ae2dc1d58dc9614b6cff1ba3606e6a512bcda4f285bbcfeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636YVKIVH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAEa0qZBs3j717xDJZ2s5IiWePS1%2BApncOZZOqAOzEjAIgHA4oYfhOUDKkBwNcg6j60pENrsmWLrcZACTo9N%2FAoHQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDFsqqGIlL5Y09196zyrcA5FV8YPbOTO7IXGYzLfjViGyDyYfVzkqISsJmOLC7U8GvZ1rnZJF27UblAOW8VSzskPpWqUY8ZU8XDTSXR58eDxhRegi%2F6yOAJzxNxRIGoffyzEWrp9P6xIrru7vDxM6j0h%2BrLmeQ%2Bwc76dt5CH6CNXSdafxLTTW1njK%2FKvAwbWlEk6vRPzWosyBK0sNjA4qqafU29fkeyAEcEzT2ZoBb6J%2BXcwZe%2BV2FkauKhvJ8iY9pBQR6bUddh0V32X2rP8JlGiL1LFRCZwDz3S0vlzzT6iG%2BQDqUhNQO%2B5mM7PsTeA4dpxV8ADUnPOG%2BwIyxzm0cWratL82nS1dNdCWJdrFndkOIsawnnYPmGwr5D%2Bk8HDuKsT5uAehky5EjeGfYbBZEzdYYRHukgi%2Fh0TfASSnNa2q0hb8at6fSTax3%2BrHKO4%2F6pogSd1mLE4j6AsCY%2FQh26n8FbRAeSUl28sVZhMmsAw3qo2klhsKRLrQyEUhoG2c1IDbxQX8N6oWj1qIroNAIbQtsOIKdUiRrIVqYG0uuuVLEHBdTsmIer6s76ytM2S0nzaDk6akXLsl%2FzSD8ItlmAuB8VlFsrMInxuklO549R8ieUneN0eC5Yzd0DKi2%2BCsnmjD%2BYbHZg6O1NhoMLnZvsQGOqUB5X%2FQDYQ4o1v4%2Frhmjk8b3s603okKlWtefW35hwasyxFm6hBcH6HvpTYOVIYgq7tm6V4uwvDmrPHfrjGwoGhhMth3dWvwm4Eyl3eJT3%2FDhQLV%2F7HyrgbaxCGoupEXZCM1HgGgqtXVB5E9W60zy%2Fcaev9P6Oe2oBTzkoR%2FRjm3QOz0eYEs1lh9te5Q8nUJ2XLHtelHx%2BCMyrjrrHObyPdIeheuBO65&X-Amz-Signature=f1f36f5513599e638b65392fab44e2312daba9117961d0a3e3a700770103c3a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRDXC3CI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMGcKv6LCRAAgcc6PzYPVAjEWVlSHTW2cEVPte3W0ZMAiBtVzUHF1VHoqIA0UrDtIMeMpZKrOfLDyUGVmgcj9cOMir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMoCapjNsgF3mYRccuKtwDgfhH80dAOwqeAO7THCZOH7cq3YU7w9XpNN3s1Jb5Up9s2hUAlPBQKeFN51bDYj7w7fOY%2BsXjcVmdxxMHUSSjndzIXNi57H3IqLC3GH6v8W7nauNdBQI6Av%2ByAHo5WOTf3hq%2FF8ZyhgGruvoGye%2F%2B494w3S4c%2FdGcEk1gDr4%2BjPmrRFWUv8UmQCHkGOHC2GFUVCYGdXKW7Ioo5xSkflluIZ8vNYl2X%2Bla6COlW%2FqsofMuWf93PGoV10ma5May6DvtAG0E2e25Ur8%2F71u5eHELrbG6y8Idc%2F8No5eq1teUZwz33DLjn%2FBdOJswhjOXPAXuJoWJV4Sma%2FVk6iv%2BXLth6ByKXB07rfcrZgnDNVCz136UMZPwhMSK8DT0Veb6fRMLZz8HBUbCkoxnDUy%2BQHBSc6QZvhi8tBqAWFwC3X938qQUajjv6%2F6BZ0%2BXYvaxQcHAFAQxtbjgSkmh2EC%2FtQHzxS0R1imlYimsm6U2dYQ%2FX9breEORJr7Y7TVmeedoRgrCmZVCr9Uxw4cSvrBx%2Bw7ZW7d6Y%2BKu4kdi%2BxdbtCgSkURI4ZgzbINxQ%2FFmSIRwHhi1AX08ZFPrWPN4jDhDYGnCvaP4LJwjYEAu1Vzfkuzn%2BtaP13mZM3tOlaVBaKswsNm%2BxAY6pgHmDq3XTo2c1d2KeDj631qb2mKAxF1DLWuJzqivIJWRPDQYJZCLqFcmYL0eKsJWWMDferCwvxeR1QENrFngU68H006j0upTHZgaS3Gr%2B7gkA7awmMWYP1UaOkCaS0xJcyEJviYdOND1laqpF0RMfZvFDd0BcY1xiruUaPa%2FI6r9YPKXDofYAoMQpIoVg1cJ41mBIvyiUE5aw9zA25gB0Gba8y6mASqX&X-Amz-Signature=e96fa0e15f6d25708edcfb6a3cc72aa0a6515377555387a491151d5837d47de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AZ5B3AD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5wXYYBi6RvIZwtIjRsY0bi1vOvX5sJKc%2Bu6np4wrGbAIgKeRgZaanvYaMYr%2FVB30Zeb%2FvQL3rKoS72C0HbDzOKfcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAyMc0%2FG7yJIadvICyrcA7agkzzeLD%2BTe%2F%2BU0r7nONxJWkjxqu80dolDE7KCFRRhQTq3bPO97Ni4jgm6B4yD2qsZE1Mgr4znfdLzr%2FXvLenPSIH%2Bt9oB8T0MP%2B54Kd5jbai5Ya9RSKxGcqBLyVBqhK2Aeeu1DvPPeFzM%2Ftz1R9k8IEG9Fmp1MP9Dnf6Y8VeSrRuziAgJbf0Prn%2BkAbL5yoikv1vtKGvjhD7FZSKVBMEtVksRsh4U6MQ9bFvXJFjmxVqDibYqlS4Z5iG83KKRVtljJH1dX46lsOZyF1JqiU1%2F18g3U1w11icKIfj5HsI2qs60LTxynl3%2FH0fMcxGY2UboQMYTguQXYeJ5csnEuQIESsDKX%2B61BJc0f2l8zLLyUcKMM50haFLho3aMAPRN5WQ0yKR%2B4J6UelZZ1iMZiZXtIp%2Bc9iVSp9QF2fpKF6LHQ7X6tm7R5flCoTr1ZZxk0JPuycvcGKzmPTRN81D%2B%2F6yONpFDOl6MikWo%2BdI9k3B70WZlvHPHY17GxTTR7%2BWJ0pmYWPigDKqVhsSiDIYI4bqudH7PmrLZCsZsOdHzAdMPuKpqJxjQJxbSXzS3dTdM8j8L8B1mya0ipEEvf1qHbLdo%2F0yVLfRwgH5Y2ZSvpy7dA6cQ7BAooZXvo8KNMI%2FZvsQGOqUBjyuiZp2Iqu3hFxSWDTl2JD1KFnoLVktvHku7thVOgnP%2FNvwmaRBSnbpBiQ2DU7D0xY9I2oRTRIiKfY1ig1GGcrUI20lvqLNTl%2FagSMP5Qp%2FbGGIZsiszlxXbEwUJ01lMnQDI3PkQQr%2FY%2Bq%2B%2FHg1%2ByJRhBGN0V7AR5b2MWTy6%2FZXVQ7xJO5Ud%2FP%2B5b%2BFhDFUeYfe6zrH0RCgs%2FYhCKW1yY7qRnqsB&X-Amz-Signature=59479425cdcfa0e936da55053f8f7ee4c47bd3f545fe3f6c7de1f5b5c7288896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLSYCCLC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcujbjIBbe7b0GDiGVtnblkx4U3sjzpQ9rr3%2BaN6HJngIhALJwVEORaSYTh7FhCcGPknfQ93HErIQ5%2BYgHxOKlFZ8lKv8DCDQQABoMNjM3NDIzMTgzODA1IgxCy36EsiEUWcEcYkkq3APGJEvmBr%2FjLycS5w8zM5TFmevnkqn34lo6DhqaVI89yWgtgZ%2FB%2F92iEg5j%2BtZuxOM%2BzTqh%2FvI1DOQ656aq3wbB1t10yIpzPgFznhdQJBe7ws4I3XuSIKBlTnKLpoyUjsQpUXoXTgvxtTfYxw15hK%2BTm1lRAQW6DtSgmzR%2FVYgqRZE%2FuC%2Bjt9972OoKVdPyZvgkBkkV6pScvY0CkUYRAkwmy08NOOB%2BrNdYkFrESfe3jfEAAM%2BCvf2TT3hJOvhDGZEb0F49cK5PXqNv9vCzR4q%2F4JmuHeZh3eolWJoq%2FoAVEEPjwaRw1cMuzI15GIkRW5JPx9MitvhtfpzHo4bA486UYcvTbWkSysy7JRkraK4YI1QwaRddz9HLzQfullzLWlsvoFd%2Bz63wY1Tl4%2FNfpOGtakTfcYhe8vV%2BoWNRhRnMGdnZ0W56iRKQQSfhsXyDaHZBN%2F%2Fk72WdX%2FiHDcUpCQfbnb8eBgjgrBfDWq9d%2BnjMrX5fjBeNLk2v0Z42o7sQkU07HmlZeMjxIbzRfVpWv%2FSi%2BORQzTg0wW%2B4dygrYUN6doQ8icOfjTFJLF26l%2BJeWpz%2BxiFImctzlVzonDFFiiZVYH%2BTWNMBjt74bO4vPIbDYH3r1CExcN2gHNF1YDCk2b7EBjqkAXB6BoZpDNKXHqgptSoiVrZBInco7vLqviL403JqfKleh9VZL2IwO8w7IHW2RPoN7RmTQc1huCeHoVE8jmw9uJO%2BbFcE5AmCh5djaUdW3c51QCfSCBXpgFHxE3kAoe%2F6sQSRZphb8QF%2BakIslcaBD3nGIR9CDnOK03SuuIkd1hOnxDmrH3t1DEx35PGyn%2FnzeuRLyC9mczC4W2lMVQ30x62iOWeB&X-Amz-Signature=969cd0bd1e15e6ab86b4ff699a76b6788129139602810e7018842f3a73e766c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLSYCCLC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcujbjIBbe7b0GDiGVtnblkx4U3sjzpQ9rr3%2BaN6HJngIhALJwVEORaSYTh7FhCcGPknfQ93HErIQ5%2BYgHxOKlFZ8lKv8DCDQQABoMNjM3NDIzMTgzODA1IgxCy36EsiEUWcEcYkkq3APGJEvmBr%2FjLycS5w8zM5TFmevnkqn34lo6DhqaVI89yWgtgZ%2FB%2F92iEg5j%2BtZuxOM%2BzTqh%2FvI1DOQ656aq3wbB1t10yIpzPgFznhdQJBe7ws4I3XuSIKBlTnKLpoyUjsQpUXoXTgvxtTfYxw15hK%2BTm1lRAQW6DtSgmzR%2FVYgqRZE%2FuC%2Bjt9972OoKVdPyZvgkBkkV6pScvY0CkUYRAkwmy08NOOB%2BrNdYkFrESfe3jfEAAM%2BCvf2TT3hJOvhDGZEb0F49cK5PXqNv9vCzR4q%2F4JmuHeZh3eolWJoq%2FoAVEEPjwaRw1cMuzI15GIkRW5JPx9MitvhtfpzHo4bA486UYcvTbWkSysy7JRkraK4YI1QwaRddz9HLzQfullzLWlsvoFd%2Bz63wY1Tl4%2FNfpOGtakTfcYhe8vV%2BoWNRhRnMGdnZ0W56iRKQQSfhsXyDaHZBN%2F%2Fk72WdX%2FiHDcUpCQfbnb8eBgjgrBfDWq9d%2BnjMrX5fjBeNLk2v0Z42o7sQkU07HmlZeMjxIbzRfVpWv%2FSi%2BORQzTg0wW%2B4dygrYUN6doQ8icOfjTFJLF26l%2BJeWpz%2BxiFImctzlVzonDFFiiZVYH%2BTWNMBjt74bO4vPIbDYH3r1CExcN2gHNF1YDCk2b7EBjqkAXB6BoZpDNKXHqgptSoiVrZBInco7vLqviL403JqfKleh9VZL2IwO8w7IHW2RPoN7RmTQc1huCeHoVE8jmw9uJO%2BbFcE5AmCh5djaUdW3c51QCfSCBXpgFHxE3kAoe%2F6sQSRZphb8QF%2BakIslcaBD3nGIR9CDnOK03SuuIkd1hOnxDmrH3t1DEx35PGyn%2FnzeuRLyC9mczC4W2lMVQ30x62iOWeB&X-Amz-Signature=2f72588e819fcfbfd70402414c2f0c337fba48ddc419ae70706424ba7c966c24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPU6VUBS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbM8sO3d%2BCFTz2ONu4iPPgjUeYhxib7Aoj0apO%2B9b2HQIgH5mugtGlmxSt44MQovyIVD8MAazPg7qwZxgO76zLm9Mq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNOz6mEG0%2FMssL5mjircAxmZoBnzGjsBi6wLgpAp0q5dwpzDwbz68jET7jLTA%2FHVCZwzO7tutJi7vWs6NQ72m0mpJS%2BXOJX3ahEd1WwbNAahVa%2B5nYVv%2Fz6RNtve96FF5oJhwa2FL%2BWvAIfnL6WMEqCJOSksF7VQu0T3Ibp1O3Rohw1DZb9vnFe31Z6nnKyu3iLLAfuFj%2FxZbeqTm7vsHUp3A6Tz2O4xxnxmpNKeGDI6geiN%2FrQRikhjvxNhyiqmTY1QhLEYkM59LBwhGvlXbHji%2BUxq0yfiO5HnJB9QKN%2FaG1R7Z2T9HW3fBZIn8q5XxMCrd8utiR%2B7MNoSUXPWYOYuVITeN%2Bzwu%2BF92Non0lsx9IRt2aEi78Oc2o9IkVX%2BzlgWJ4bL5K%2B4ykLk73ahOzr5YU6lkxYxRCXk9mIEDaJL9ghzXaVyZDvgOSklE0LGq7XhEaaiPhIx5Sl4MuBahqqFyeywmtngJxDJpMx%2BxDa6%2B0lNuqp2ofgmz5dSJ00kaMz9jMtqTN7kWt7rR9exQ5vPXg2JdWXp82ZeZuduh1ZpUHUicS2oPB7kzDqII%2BAfphOqhjTAB%2FY4bbbum1Z%2FAXtgw7kUwRMIo3ntGuZE8curY66pO3PUjJeGSwp6ShIx2oDFq7FONEPBiQauMP%2FZvsQGOqUB%2FsTsrz3akFyxXU3m9fcRUqJkI9s5NvfjLJahZ%2BiKnr5Ke5IsmU8Y%2Bj9avkXqxXkngppg1R0FgyXSaiX8hTrYuhQuXHWFCazu%2B5C3inBgqS5oX032p%2BC1FasqlFa7CioTiko1FQLKHluw6eenj4mXHB3j1AyhNGKeDg4K5gCvHAUGAWAOiNJ4QDn9w6XYkX4A7IEFaNlnN8ScOIM0m2whXBzoQYWS&X-Amz-Signature=cd4135b5e7e330a466563480dbdb233f73295e22cd7e5f507d553d25115169b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPU6VUBS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbM8sO3d%2BCFTz2ONu4iPPgjUeYhxib7Aoj0apO%2B9b2HQIgH5mugtGlmxSt44MQovyIVD8MAazPg7qwZxgO76zLm9Mq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNOz6mEG0%2FMssL5mjircAxmZoBnzGjsBi6wLgpAp0q5dwpzDwbz68jET7jLTA%2FHVCZwzO7tutJi7vWs6NQ72m0mpJS%2BXOJX3ahEd1WwbNAahVa%2B5nYVv%2Fz6RNtve96FF5oJhwa2FL%2BWvAIfnL6WMEqCJOSksF7VQu0T3Ibp1O3Rohw1DZb9vnFe31Z6nnKyu3iLLAfuFj%2FxZbeqTm7vsHUp3A6Tz2O4xxnxmpNKeGDI6geiN%2FrQRikhjvxNhyiqmTY1QhLEYkM59LBwhGvlXbHji%2BUxq0yfiO5HnJB9QKN%2FaG1R7Z2T9HW3fBZIn8q5XxMCrd8utiR%2B7MNoSUXPWYOYuVITeN%2Bzwu%2BF92Non0lsx9IRt2aEi78Oc2o9IkVX%2BzlgWJ4bL5K%2B4ykLk73ahOzr5YU6lkxYxRCXk9mIEDaJL9ghzXaVyZDvgOSklE0LGq7XhEaaiPhIx5Sl4MuBahqqFyeywmtngJxDJpMx%2BxDa6%2B0lNuqp2ofgmz5dSJ00kaMz9jMtqTN7kWt7rR9exQ5vPXg2JdWXp82ZeZuduh1ZpUHUicS2oPB7kzDqII%2BAfphOqhjTAB%2FY4bbbum1Z%2FAXtgw7kUwRMIo3ntGuZE8curY66pO3PUjJeGSwp6ShIx2oDFq7FONEPBiQauMP%2FZvsQGOqUB%2FsTsrz3akFyxXU3m9fcRUqJkI9s5NvfjLJahZ%2BiKnr5Ke5IsmU8Y%2Bj9avkXqxXkngppg1R0FgyXSaiX8hTrYuhQuXHWFCazu%2B5C3inBgqS5oX032p%2BC1FasqlFa7CioTiko1FQLKHluw6eenj4mXHB3j1AyhNGKeDg4K5gCvHAUGAWAOiNJ4QDn9w6XYkX4A7IEFaNlnN8ScOIM0m2whXBzoQYWS&X-Amz-Signature=bd82d526a15b24e54f340eed3f979f1c90ac57bec6341d6b690e1c0f3815e124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPU6VUBS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbM8sO3d%2BCFTz2ONu4iPPgjUeYhxib7Aoj0apO%2B9b2HQIgH5mugtGlmxSt44MQovyIVD8MAazPg7qwZxgO76zLm9Mq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNOz6mEG0%2FMssL5mjircAxmZoBnzGjsBi6wLgpAp0q5dwpzDwbz68jET7jLTA%2FHVCZwzO7tutJi7vWs6NQ72m0mpJS%2BXOJX3ahEd1WwbNAahVa%2B5nYVv%2Fz6RNtve96FF5oJhwa2FL%2BWvAIfnL6WMEqCJOSksF7VQu0T3Ibp1O3Rohw1DZb9vnFe31Z6nnKyu3iLLAfuFj%2FxZbeqTm7vsHUp3A6Tz2O4xxnxmpNKeGDI6geiN%2FrQRikhjvxNhyiqmTY1QhLEYkM59LBwhGvlXbHji%2BUxq0yfiO5HnJB9QKN%2FaG1R7Z2T9HW3fBZIn8q5XxMCrd8utiR%2B7MNoSUXPWYOYuVITeN%2Bzwu%2BF92Non0lsx9IRt2aEi78Oc2o9IkVX%2BzlgWJ4bL5K%2B4ykLk73ahOzr5YU6lkxYxRCXk9mIEDaJL9ghzXaVyZDvgOSklE0LGq7XhEaaiPhIx5Sl4MuBahqqFyeywmtngJxDJpMx%2BxDa6%2B0lNuqp2ofgmz5dSJ00kaMz9jMtqTN7kWt7rR9exQ5vPXg2JdWXp82ZeZuduh1ZpUHUicS2oPB7kzDqII%2BAfphOqhjTAB%2FY4bbbum1Z%2FAXtgw7kUwRMIo3ntGuZE8curY66pO3PUjJeGSwp6ShIx2oDFq7FONEPBiQauMP%2FZvsQGOqUB%2FsTsrz3akFyxXU3m9fcRUqJkI9s5NvfjLJahZ%2BiKnr5Ke5IsmU8Y%2Bj9avkXqxXkngppg1R0FgyXSaiX8hTrYuhQuXHWFCazu%2B5C3inBgqS5oX032p%2BC1FasqlFa7CioTiko1FQLKHluw6eenj4mXHB3j1AyhNGKeDg4K5gCvHAUGAWAOiNJ4QDn9w6XYkX4A7IEFaNlnN8ScOIM0m2whXBzoQYWS&X-Amz-Signature=f4f8710276fc48eee19d9ae855cf5d59369bc2e6e6013ec01a409052b111d04d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPU6VUBS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbM8sO3d%2BCFTz2ONu4iPPgjUeYhxib7Aoj0apO%2B9b2HQIgH5mugtGlmxSt44MQovyIVD8MAazPg7qwZxgO76zLm9Mq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNOz6mEG0%2FMssL5mjircAxmZoBnzGjsBi6wLgpAp0q5dwpzDwbz68jET7jLTA%2FHVCZwzO7tutJi7vWs6NQ72m0mpJS%2BXOJX3ahEd1WwbNAahVa%2B5nYVv%2Fz6RNtve96FF5oJhwa2FL%2BWvAIfnL6WMEqCJOSksF7VQu0T3Ibp1O3Rohw1DZb9vnFe31Z6nnKyu3iLLAfuFj%2FxZbeqTm7vsHUp3A6Tz2O4xxnxmpNKeGDI6geiN%2FrQRikhjvxNhyiqmTY1QhLEYkM59LBwhGvlXbHji%2BUxq0yfiO5HnJB9QKN%2FaG1R7Z2T9HW3fBZIn8q5XxMCrd8utiR%2B7MNoSUXPWYOYuVITeN%2Bzwu%2BF92Non0lsx9IRt2aEi78Oc2o9IkVX%2BzlgWJ4bL5K%2B4ykLk73ahOzr5YU6lkxYxRCXk9mIEDaJL9ghzXaVyZDvgOSklE0LGq7XhEaaiPhIx5Sl4MuBahqqFyeywmtngJxDJpMx%2BxDa6%2B0lNuqp2ofgmz5dSJ00kaMz9jMtqTN7kWt7rR9exQ5vPXg2JdWXp82ZeZuduh1ZpUHUicS2oPB7kzDqII%2BAfphOqhjTAB%2FY4bbbum1Z%2FAXtgw7kUwRMIo3ntGuZE8curY66pO3PUjJeGSwp6ShIx2oDFq7FONEPBiQauMP%2FZvsQGOqUB%2FsTsrz3akFyxXU3m9fcRUqJkI9s5NvfjLJahZ%2BiKnr5Ke5IsmU8Y%2Bj9avkXqxXkngppg1R0FgyXSaiX8hTrYuhQuXHWFCazu%2B5C3inBgqS5oX032p%2BC1FasqlFa7CioTiko1FQLKHluw6eenj4mXHB3j1AyhNGKeDg4K5gCvHAUGAWAOiNJ4QDn9w6XYkX4A7IEFaNlnN8ScOIM0m2whXBzoQYWS&X-Amz-Signature=f2319246ff74eaff8d32114649af0d0c5189795eb0eb70e12ba876c3b6eddca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPU6VUBS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbM8sO3d%2BCFTz2ONu4iPPgjUeYhxib7Aoj0apO%2B9b2HQIgH5mugtGlmxSt44MQovyIVD8MAazPg7qwZxgO76zLm9Mq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNOz6mEG0%2FMssL5mjircAxmZoBnzGjsBi6wLgpAp0q5dwpzDwbz68jET7jLTA%2FHVCZwzO7tutJi7vWs6NQ72m0mpJS%2BXOJX3ahEd1WwbNAahVa%2B5nYVv%2Fz6RNtve96FF5oJhwa2FL%2BWvAIfnL6WMEqCJOSksF7VQu0T3Ibp1O3Rohw1DZb9vnFe31Z6nnKyu3iLLAfuFj%2FxZbeqTm7vsHUp3A6Tz2O4xxnxmpNKeGDI6geiN%2FrQRikhjvxNhyiqmTY1QhLEYkM59LBwhGvlXbHji%2BUxq0yfiO5HnJB9QKN%2FaG1R7Z2T9HW3fBZIn8q5XxMCrd8utiR%2B7MNoSUXPWYOYuVITeN%2Bzwu%2BF92Non0lsx9IRt2aEi78Oc2o9IkVX%2BzlgWJ4bL5K%2B4ykLk73ahOzr5YU6lkxYxRCXk9mIEDaJL9ghzXaVyZDvgOSklE0LGq7XhEaaiPhIx5Sl4MuBahqqFyeywmtngJxDJpMx%2BxDa6%2B0lNuqp2ofgmz5dSJ00kaMz9jMtqTN7kWt7rR9exQ5vPXg2JdWXp82ZeZuduh1ZpUHUicS2oPB7kzDqII%2BAfphOqhjTAB%2FY4bbbum1Z%2FAXtgw7kUwRMIo3ntGuZE8curY66pO3PUjJeGSwp6ShIx2oDFq7FONEPBiQauMP%2FZvsQGOqUB%2FsTsrz3akFyxXU3m9fcRUqJkI9s5NvfjLJahZ%2BiKnr5Ke5IsmU8Y%2Bj9avkXqxXkngppg1R0FgyXSaiX8hTrYuhQuXHWFCazu%2B5C3inBgqS5oX032p%2BC1FasqlFa7CioTiko1FQLKHluw6eenj4mXHB3j1AyhNGKeDg4K5gCvHAUGAWAOiNJ4QDn9w6XYkX4A7IEFaNlnN8ScOIM0m2whXBzoQYWS&X-Amz-Signature=3fdd54fdf659a617b4ce457e672ce4a31e39ba3892b5d3d15d6400467284ef11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPU6VUBS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbM8sO3d%2BCFTz2ONu4iPPgjUeYhxib7Aoj0apO%2B9b2HQIgH5mugtGlmxSt44MQovyIVD8MAazPg7qwZxgO76zLm9Mq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNOz6mEG0%2FMssL5mjircAxmZoBnzGjsBi6wLgpAp0q5dwpzDwbz68jET7jLTA%2FHVCZwzO7tutJi7vWs6NQ72m0mpJS%2BXOJX3ahEd1WwbNAahVa%2B5nYVv%2Fz6RNtve96FF5oJhwa2FL%2BWvAIfnL6WMEqCJOSksF7VQu0T3Ibp1O3Rohw1DZb9vnFe31Z6nnKyu3iLLAfuFj%2FxZbeqTm7vsHUp3A6Tz2O4xxnxmpNKeGDI6geiN%2FrQRikhjvxNhyiqmTY1QhLEYkM59LBwhGvlXbHji%2BUxq0yfiO5HnJB9QKN%2FaG1R7Z2T9HW3fBZIn8q5XxMCrd8utiR%2B7MNoSUXPWYOYuVITeN%2Bzwu%2BF92Non0lsx9IRt2aEi78Oc2o9IkVX%2BzlgWJ4bL5K%2B4ykLk73ahOzr5YU6lkxYxRCXk9mIEDaJL9ghzXaVyZDvgOSklE0LGq7XhEaaiPhIx5Sl4MuBahqqFyeywmtngJxDJpMx%2BxDa6%2B0lNuqp2ofgmz5dSJ00kaMz9jMtqTN7kWt7rR9exQ5vPXg2JdWXp82ZeZuduh1ZpUHUicS2oPB7kzDqII%2BAfphOqhjTAB%2FY4bbbum1Z%2FAXtgw7kUwRMIo3ntGuZE8curY66pO3PUjJeGSwp6ShIx2oDFq7FONEPBiQauMP%2FZvsQGOqUB%2FsTsrz3akFyxXU3m9fcRUqJkI9s5NvfjLJahZ%2BiKnr5Ke5IsmU8Y%2Bj9avkXqxXkngppg1R0FgyXSaiX8hTrYuhQuXHWFCazu%2B5C3inBgqS5oX032p%2BC1FasqlFa7CioTiko1FQLKHluw6eenj4mXHB3j1AyhNGKeDg4K5gCvHAUGAWAOiNJ4QDn9w6XYkX4A7IEFaNlnN8ScOIM0m2whXBzoQYWS&X-Amz-Signature=3d4114224ebdb99b77dcc8aa14bb9ff9f065115e07e69440e9483d3b52aabd60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPU6VUBS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbM8sO3d%2BCFTz2ONu4iPPgjUeYhxib7Aoj0apO%2B9b2HQIgH5mugtGlmxSt44MQovyIVD8MAazPg7qwZxgO76zLm9Mq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNOz6mEG0%2FMssL5mjircAxmZoBnzGjsBi6wLgpAp0q5dwpzDwbz68jET7jLTA%2FHVCZwzO7tutJi7vWs6NQ72m0mpJS%2BXOJX3ahEd1WwbNAahVa%2B5nYVv%2Fz6RNtve96FF5oJhwa2FL%2BWvAIfnL6WMEqCJOSksF7VQu0T3Ibp1O3Rohw1DZb9vnFe31Z6nnKyu3iLLAfuFj%2FxZbeqTm7vsHUp3A6Tz2O4xxnxmpNKeGDI6geiN%2FrQRikhjvxNhyiqmTY1QhLEYkM59LBwhGvlXbHji%2BUxq0yfiO5HnJB9QKN%2FaG1R7Z2T9HW3fBZIn8q5XxMCrd8utiR%2B7MNoSUXPWYOYuVITeN%2Bzwu%2BF92Non0lsx9IRt2aEi78Oc2o9IkVX%2BzlgWJ4bL5K%2B4ykLk73ahOzr5YU6lkxYxRCXk9mIEDaJL9ghzXaVyZDvgOSklE0LGq7XhEaaiPhIx5Sl4MuBahqqFyeywmtngJxDJpMx%2BxDa6%2B0lNuqp2ofgmz5dSJ00kaMz9jMtqTN7kWt7rR9exQ5vPXg2JdWXp82ZeZuduh1ZpUHUicS2oPB7kzDqII%2BAfphOqhjTAB%2FY4bbbum1Z%2FAXtgw7kUwRMIo3ntGuZE8curY66pO3PUjJeGSwp6ShIx2oDFq7FONEPBiQauMP%2FZvsQGOqUB%2FsTsrz3akFyxXU3m9fcRUqJkI9s5NvfjLJahZ%2BiKnr5Ke5IsmU8Y%2Bj9avkXqxXkngppg1R0FgyXSaiX8hTrYuhQuXHWFCazu%2B5C3inBgqS5oX032p%2BC1FasqlFa7CioTiko1FQLKHluw6eenj4mXHB3j1AyhNGKeDg4K5gCvHAUGAWAOiNJ4QDn9w6XYkX4A7IEFaNlnN8ScOIM0m2whXBzoQYWS&X-Amz-Signature=f4f8710276fc48eee19d9ae855cf5d59369bc2e6e6013ec01a409052b111d04d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPU6VUBS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbM8sO3d%2BCFTz2ONu4iPPgjUeYhxib7Aoj0apO%2B9b2HQIgH5mugtGlmxSt44MQovyIVD8MAazPg7qwZxgO76zLm9Mq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNOz6mEG0%2FMssL5mjircAxmZoBnzGjsBi6wLgpAp0q5dwpzDwbz68jET7jLTA%2FHVCZwzO7tutJi7vWs6NQ72m0mpJS%2BXOJX3ahEd1WwbNAahVa%2B5nYVv%2Fz6RNtve96FF5oJhwa2FL%2BWvAIfnL6WMEqCJOSksF7VQu0T3Ibp1O3Rohw1DZb9vnFe31Z6nnKyu3iLLAfuFj%2FxZbeqTm7vsHUp3A6Tz2O4xxnxmpNKeGDI6geiN%2FrQRikhjvxNhyiqmTY1QhLEYkM59LBwhGvlXbHji%2BUxq0yfiO5HnJB9QKN%2FaG1R7Z2T9HW3fBZIn8q5XxMCrd8utiR%2B7MNoSUXPWYOYuVITeN%2Bzwu%2BF92Non0lsx9IRt2aEi78Oc2o9IkVX%2BzlgWJ4bL5K%2B4ykLk73ahOzr5YU6lkxYxRCXk9mIEDaJL9ghzXaVyZDvgOSklE0LGq7XhEaaiPhIx5Sl4MuBahqqFyeywmtngJxDJpMx%2BxDa6%2B0lNuqp2ofgmz5dSJ00kaMz9jMtqTN7kWt7rR9exQ5vPXg2JdWXp82ZeZuduh1ZpUHUicS2oPB7kzDqII%2BAfphOqhjTAB%2FY4bbbum1Z%2FAXtgw7kUwRMIo3ntGuZE8curY66pO3PUjJeGSwp6ShIx2oDFq7FONEPBiQauMP%2FZvsQGOqUB%2FsTsrz3akFyxXU3m9fcRUqJkI9s5NvfjLJahZ%2BiKnr5Ke5IsmU8Y%2Bj9avkXqxXkngppg1R0FgyXSaiX8hTrYuhQuXHWFCazu%2B5C3inBgqS5oX032p%2BC1FasqlFa7CioTiko1FQLKHluw6eenj4mXHB3j1AyhNGKeDg4K5gCvHAUGAWAOiNJ4QDn9w6XYkX4A7IEFaNlnN8ScOIM0m2whXBzoQYWS&X-Amz-Signature=f37c5b8d0cd35057fe03381260c5cbbe0eb79a34a80680642420c2c97179e1cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPU6VUBS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbM8sO3d%2BCFTz2ONu4iPPgjUeYhxib7Aoj0apO%2B9b2HQIgH5mugtGlmxSt44MQovyIVD8MAazPg7qwZxgO76zLm9Mq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNOz6mEG0%2FMssL5mjircAxmZoBnzGjsBi6wLgpAp0q5dwpzDwbz68jET7jLTA%2FHVCZwzO7tutJi7vWs6NQ72m0mpJS%2BXOJX3ahEd1WwbNAahVa%2B5nYVv%2Fz6RNtve96FF5oJhwa2FL%2BWvAIfnL6WMEqCJOSksF7VQu0T3Ibp1O3Rohw1DZb9vnFe31Z6nnKyu3iLLAfuFj%2FxZbeqTm7vsHUp3A6Tz2O4xxnxmpNKeGDI6geiN%2FrQRikhjvxNhyiqmTY1QhLEYkM59LBwhGvlXbHji%2BUxq0yfiO5HnJB9QKN%2FaG1R7Z2T9HW3fBZIn8q5XxMCrd8utiR%2B7MNoSUXPWYOYuVITeN%2Bzwu%2BF92Non0lsx9IRt2aEi78Oc2o9IkVX%2BzlgWJ4bL5K%2B4ykLk73ahOzr5YU6lkxYxRCXk9mIEDaJL9ghzXaVyZDvgOSklE0LGq7XhEaaiPhIx5Sl4MuBahqqFyeywmtngJxDJpMx%2BxDa6%2B0lNuqp2ofgmz5dSJ00kaMz9jMtqTN7kWt7rR9exQ5vPXg2JdWXp82ZeZuduh1ZpUHUicS2oPB7kzDqII%2BAfphOqhjTAB%2FY4bbbum1Z%2FAXtgw7kUwRMIo3ntGuZE8curY66pO3PUjJeGSwp6ShIx2oDFq7FONEPBiQauMP%2FZvsQGOqUB%2FsTsrz3akFyxXU3m9fcRUqJkI9s5NvfjLJahZ%2BiKnr5Ke5IsmU8Y%2Bj9avkXqxXkngppg1R0FgyXSaiX8hTrYuhQuXHWFCazu%2B5C3inBgqS5oX032p%2BC1FasqlFa7CioTiko1FQLKHluw6eenj4mXHB3j1AyhNGKeDg4K5gCvHAUGAWAOiNJ4QDn9w6XYkX4A7IEFaNlnN8ScOIM0m2whXBzoQYWS&X-Amz-Signature=d906d143c4d35e86788a29d69a5367eaf6e0ee62662f63942f746fb84ae29932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPU6VUBS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbM8sO3d%2BCFTz2ONu4iPPgjUeYhxib7Aoj0apO%2B9b2HQIgH5mugtGlmxSt44MQovyIVD8MAazPg7qwZxgO76zLm9Mq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNOz6mEG0%2FMssL5mjircAxmZoBnzGjsBi6wLgpAp0q5dwpzDwbz68jET7jLTA%2FHVCZwzO7tutJi7vWs6NQ72m0mpJS%2BXOJX3ahEd1WwbNAahVa%2B5nYVv%2Fz6RNtve96FF5oJhwa2FL%2BWvAIfnL6WMEqCJOSksF7VQu0T3Ibp1O3Rohw1DZb9vnFe31Z6nnKyu3iLLAfuFj%2FxZbeqTm7vsHUp3A6Tz2O4xxnxmpNKeGDI6geiN%2FrQRikhjvxNhyiqmTY1QhLEYkM59LBwhGvlXbHji%2BUxq0yfiO5HnJB9QKN%2FaG1R7Z2T9HW3fBZIn8q5XxMCrd8utiR%2B7MNoSUXPWYOYuVITeN%2Bzwu%2BF92Non0lsx9IRt2aEi78Oc2o9IkVX%2BzlgWJ4bL5K%2B4ykLk73ahOzr5YU6lkxYxRCXk9mIEDaJL9ghzXaVyZDvgOSklE0LGq7XhEaaiPhIx5Sl4MuBahqqFyeywmtngJxDJpMx%2BxDa6%2B0lNuqp2ofgmz5dSJ00kaMz9jMtqTN7kWt7rR9exQ5vPXg2JdWXp82ZeZuduh1ZpUHUicS2oPB7kzDqII%2BAfphOqhjTAB%2FY4bbbum1Z%2FAXtgw7kUwRMIo3ntGuZE8curY66pO3PUjJeGSwp6ShIx2oDFq7FONEPBiQauMP%2FZvsQGOqUB%2FsTsrz3akFyxXU3m9fcRUqJkI9s5NvfjLJahZ%2BiKnr5Ke5IsmU8Y%2Bj9avkXqxXkngppg1R0FgyXSaiX8hTrYuhQuXHWFCazu%2B5C3inBgqS5oX032p%2BC1FasqlFa7CioTiko1FQLKHluw6eenj4mXHB3j1AyhNGKeDg4K5gCvHAUGAWAOiNJ4QDn9w6XYkX4A7IEFaNlnN8ScOIM0m2whXBzoQYWS&X-Amz-Signature=620fe0a2765aefec1bd89e4921efc0298da6d64154761daeb3a89b5c07dedba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
