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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AMPL2R3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBDztrfx7tASy6%2FT3n5XhI9154R4psR9NdeJXooGuyEmAiEAiKzc1FMoNbT%2Fqf1DRTd%2FFjuYXRrIyLk19t2ukscKh9Yq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJUxUaOfcU5NUH5QVyrcA%2FGWdXiARShe5uvoq5OHvY7SnyvRkGzocpmVDWO9I6%2Frs%2FHcu6zdlX1KmqJSyKHrI5ReYc6X0zPxRMpT0Cp4%2F67HYqR80%2BOXrZOg47tlD53kYXQOpKoolWOcplZTE0jkX0PQIRFWZKWKlftsWkeu%2BAQMZ%2Fn4wjXkk8QIa58g3zZtyGjhovXWy70%2BKlzAnPQYtKi7Wgu9zTCMbNpjlyVcpjkEiYVAhUiK%2Fu%2F9tFLEJMLnYd5HAy92kI1TPgliQYTOAdWl6Iy4SAwMyjvcNTxS%2F%2FDYl8ZQR4CwTzlBi9s49Ebn3HjsTQz9F%2F96nglTh2fHfDjVqrunkEAjgKq7D%2F1fT6bzBfyHomrToFrfy8fBHkMLPIjt450M4mF5JfZ1233%2F%2BGwdeHfE7MJDHLXJhZV5QpPJYr6jYBcou5aenH8un9P9vCFRAw0sxvv%2BOqxbud%2BhX766lolTM5HjRUNZgZQw7%2F4eYQFMu1hAnRdOesOleLhPp8gUWtNS9u3%2Bg5Y%2BIxCCdX2R6lRBQJXfI3ODX2WrZ%2BGWYt%2FXAJBnK2pTjGTwHBTzny9Ajol2MhXEjK3gPYIAmWS4BU%2BKu%2FIkvn%2FstkX4fNB0s%2FwXU6%2FOILPCteftXxzBDex%2F%2FORSNBSgbu%2FVMKjhjcQGOqUBce3L1AJemBEqJ5KhLd2jA46JSFKG%2FeGnor1LCwNu%2FnXzfs2eMfuvaedH64vfFzxxvVglP%2BD7Ml0X0AnlM51JMpFbX%2BNYTvi0USiY4ObxRvZ%2F8eSqUyUSDkMtZsA1je%2Fb6AyklxE23BV55MXxMFtC%2F%2B0JPPUzcj5sBP2zrOxqkSqDM4Hb3uRsijl%2BTEwS0viKDe70rGOszt9hBuJ81F1zt1C3KnEf&X-Amz-Signature=0cba0c9588dad551eb0761577e83f8fe9009c87a497c5ae00e782032fc72b95e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AMPL2R3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBDztrfx7tASy6%2FT3n5XhI9154R4psR9NdeJXooGuyEmAiEAiKzc1FMoNbT%2Fqf1DRTd%2FFjuYXRrIyLk19t2ukscKh9Yq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJUxUaOfcU5NUH5QVyrcA%2FGWdXiARShe5uvoq5OHvY7SnyvRkGzocpmVDWO9I6%2Frs%2FHcu6zdlX1KmqJSyKHrI5ReYc6X0zPxRMpT0Cp4%2F67HYqR80%2BOXrZOg47tlD53kYXQOpKoolWOcplZTE0jkX0PQIRFWZKWKlftsWkeu%2BAQMZ%2Fn4wjXkk8QIa58g3zZtyGjhovXWy70%2BKlzAnPQYtKi7Wgu9zTCMbNpjlyVcpjkEiYVAhUiK%2Fu%2F9tFLEJMLnYd5HAy92kI1TPgliQYTOAdWl6Iy4SAwMyjvcNTxS%2F%2FDYl8ZQR4CwTzlBi9s49Ebn3HjsTQz9F%2F96nglTh2fHfDjVqrunkEAjgKq7D%2F1fT6bzBfyHomrToFrfy8fBHkMLPIjt450M4mF5JfZ1233%2F%2BGwdeHfE7MJDHLXJhZV5QpPJYr6jYBcou5aenH8un9P9vCFRAw0sxvv%2BOqxbud%2BhX766lolTM5HjRUNZgZQw7%2F4eYQFMu1hAnRdOesOleLhPp8gUWtNS9u3%2Bg5Y%2BIxCCdX2R6lRBQJXfI3ODX2WrZ%2BGWYt%2FXAJBnK2pTjGTwHBTzny9Ajol2MhXEjK3gPYIAmWS4BU%2BKu%2FIkvn%2FstkX4fNB0s%2FwXU6%2FOILPCteftXxzBDex%2F%2FORSNBSgbu%2FVMKjhjcQGOqUBce3L1AJemBEqJ5KhLd2jA46JSFKG%2FeGnor1LCwNu%2FnXzfs2eMfuvaedH64vfFzxxvVglP%2BD7Ml0X0AnlM51JMpFbX%2BNYTvi0USiY4ObxRvZ%2F8eSqUyUSDkMtZsA1je%2Fb6AyklxE23BV55MXxMFtC%2F%2B0JPPUzcj5sBP2zrOxqkSqDM4Hb3uRsijl%2BTEwS0viKDe70rGOszt9hBuJ81F1zt1C3KnEf&X-Amz-Signature=9e9817780728a256c1b48610bbc274ae0557177ebaad3066986467e23a58626f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AMPL2R3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBDztrfx7tASy6%2FT3n5XhI9154R4psR9NdeJXooGuyEmAiEAiKzc1FMoNbT%2Fqf1DRTd%2FFjuYXRrIyLk19t2ukscKh9Yq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJUxUaOfcU5NUH5QVyrcA%2FGWdXiARShe5uvoq5OHvY7SnyvRkGzocpmVDWO9I6%2Frs%2FHcu6zdlX1KmqJSyKHrI5ReYc6X0zPxRMpT0Cp4%2F67HYqR80%2BOXrZOg47tlD53kYXQOpKoolWOcplZTE0jkX0PQIRFWZKWKlftsWkeu%2BAQMZ%2Fn4wjXkk8QIa58g3zZtyGjhovXWy70%2BKlzAnPQYtKi7Wgu9zTCMbNpjlyVcpjkEiYVAhUiK%2Fu%2F9tFLEJMLnYd5HAy92kI1TPgliQYTOAdWl6Iy4SAwMyjvcNTxS%2F%2FDYl8ZQR4CwTzlBi9s49Ebn3HjsTQz9F%2F96nglTh2fHfDjVqrunkEAjgKq7D%2F1fT6bzBfyHomrToFrfy8fBHkMLPIjt450M4mF5JfZ1233%2F%2BGwdeHfE7MJDHLXJhZV5QpPJYr6jYBcou5aenH8un9P9vCFRAw0sxvv%2BOqxbud%2BhX766lolTM5HjRUNZgZQw7%2F4eYQFMu1hAnRdOesOleLhPp8gUWtNS9u3%2Bg5Y%2BIxCCdX2R6lRBQJXfI3ODX2WrZ%2BGWYt%2FXAJBnK2pTjGTwHBTzny9Ajol2MhXEjK3gPYIAmWS4BU%2BKu%2FIkvn%2FstkX4fNB0s%2FwXU6%2FOILPCteftXxzBDex%2F%2FORSNBSgbu%2FVMKjhjcQGOqUBce3L1AJemBEqJ5KhLd2jA46JSFKG%2FeGnor1LCwNu%2FnXzfs2eMfuvaedH64vfFzxxvVglP%2BD7Ml0X0AnlM51JMpFbX%2BNYTvi0USiY4ObxRvZ%2F8eSqUyUSDkMtZsA1je%2Fb6AyklxE23BV55MXxMFtC%2F%2B0JPPUzcj5sBP2zrOxqkSqDM4Hb3uRsijl%2BTEwS0viKDe70rGOszt9hBuJ81F1zt1C3KnEf&X-Amz-Signature=b96fd6bc410fc73041b3c57a462f4a4cfd535251c49ce5d095041a0f94499957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AMPL2R3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBDztrfx7tASy6%2FT3n5XhI9154R4psR9NdeJXooGuyEmAiEAiKzc1FMoNbT%2Fqf1DRTd%2FFjuYXRrIyLk19t2ukscKh9Yq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJUxUaOfcU5NUH5QVyrcA%2FGWdXiARShe5uvoq5OHvY7SnyvRkGzocpmVDWO9I6%2Frs%2FHcu6zdlX1KmqJSyKHrI5ReYc6X0zPxRMpT0Cp4%2F67HYqR80%2BOXrZOg47tlD53kYXQOpKoolWOcplZTE0jkX0PQIRFWZKWKlftsWkeu%2BAQMZ%2Fn4wjXkk8QIa58g3zZtyGjhovXWy70%2BKlzAnPQYtKi7Wgu9zTCMbNpjlyVcpjkEiYVAhUiK%2Fu%2F9tFLEJMLnYd5HAy92kI1TPgliQYTOAdWl6Iy4SAwMyjvcNTxS%2F%2FDYl8ZQR4CwTzlBi9s49Ebn3HjsTQz9F%2F96nglTh2fHfDjVqrunkEAjgKq7D%2F1fT6bzBfyHomrToFrfy8fBHkMLPIjt450M4mF5JfZ1233%2F%2BGwdeHfE7MJDHLXJhZV5QpPJYr6jYBcou5aenH8un9P9vCFRAw0sxvv%2BOqxbud%2BhX766lolTM5HjRUNZgZQw7%2F4eYQFMu1hAnRdOesOleLhPp8gUWtNS9u3%2Bg5Y%2BIxCCdX2R6lRBQJXfI3ODX2WrZ%2BGWYt%2FXAJBnK2pTjGTwHBTzny9Ajol2MhXEjK3gPYIAmWS4BU%2BKu%2FIkvn%2FstkX4fNB0s%2FwXU6%2FOILPCteftXxzBDex%2F%2FORSNBSgbu%2FVMKjhjcQGOqUBce3L1AJemBEqJ5KhLd2jA46JSFKG%2FeGnor1LCwNu%2FnXzfs2eMfuvaedH64vfFzxxvVglP%2BD7Ml0X0AnlM51JMpFbX%2BNYTvi0USiY4ObxRvZ%2F8eSqUyUSDkMtZsA1je%2Fb6AyklxE23BV55MXxMFtC%2F%2B0JPPUzcj5sBP2zrOxqkSqDM4Hb3uRsijl%2BTEwS0viKDe70rGOszt9hBuJ81F1zt1C3KnEf&X-Amz-Signature=8473714ab2bfa04e3d14732014f26a7fd7f41dc7e2ffa83c1e4135337ae8d598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AMPL2R3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBDztrfx7tASy6%2FT3n5XhI9154R4psR9NdeJXooGuyEmAiEAiKzc1FMoNbT%2Fqf1DRTd%2FFjuYXRrIyLk19t2ukscKh9Yq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJUxUaOfcU5NUH5QVyrcA%2FGWdXiARShe5uvoq5OHvY7SnyvRkGzocpmVDWO9I6%2Frs%2FHcu6zdlX1KmqJSyKHrI5ReYc6X0zPxRMpT0Cp4%2F67HYqR80%2BOXrZOg47tlD53kYXQOpKoolWOcplZTE0jkX0PQIRFWZKWKlftsWkeu%2BAQMZ%2Fn4wjXkk8QIa58g3zZtyGjhovXWy70%2BKlzAnPQYtKi7Wgu9zTCMbNpjlyVcpjkEiYVAhUiK%2Fu%2F9tFLEJMLnYd5HAy92kI1TPgliQYTOAdWl6Iy4SAwMyjvcNTxS%2F%2FDYl8ZQR4CwTzlBi9s49Ebn3HjsTQz9F%2F96nglTh2fHfDjVqrunkEAjgKq7D%2F1fT6bzBfyHomrToFrfy8fBHkMLPIjt450M4mF5JfZ1233%2F%2BGwdeHfE7MJDHLXJhZV5QpPJYr6jYBcou5aenH8un9P9vCFRAw0sxvv%2BOqxbud%2BhX766lolTM5HjRUNZgZQw7%2F4eYQFMu1hAnRdOesOleLhPp8gUWtNS9u3%2Bg5Y%2BIxCCdX2R6lRBQJXfI3ODX2WrZ%2BGWYt%2FXAJBnK2pTjGTwHBTzny9Ajol2MhXEjK3gPYIAmWS4BU%2BKu%2FIkvn%2FstkX4fNB0s%2FwXU6%2FOILPCteftXxzBDex%2F%2FORSNBSgbu%2FVMKjhjcQGOqUBce3L1AJemBEqJ5KhLd2jA46JSFKG%2FeGnor1LCwNu%2FnXzfs2eMfuvaedH64vfFzxxvVglP%2BD7Ml0X0AnlM51JMpFbX%2BNYTvi0USiY4ObxRvZ%2F8eSqUyUSDkMtZsA1je%2Fb6AyklxE23BV55MXxMFtC%2F%2B0JPPUzcj5sBP2zrOxqkSqDM4Hb3uRsijl%2BTEwS0viKDe70rGOszt9hBuJ81F1zt1C3KnEf&X-Amz-Signature=6ffc362e14ed652314114bfed0cdc82cfa3b6311d3c29e0db4bf144fdee5a109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AMPL2R3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBDztrfx7tASy6%2FT3n5XhI9154R4psR9NdeJXooGuyEmAiEAiKzc1FMoNbT%2Fqf1DRTd%2FFjuYXRrIyLk19t2ukscKh9Yq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJUxUaOfcU5NUH5QVyrcA%2FGWdXiARShe5uvoq5OHvY7SnyvRkGzocpmVDWO9I6%2Frs%2FHcu6zdlX1KmqJSyKHrI5ReYc6X0zPxRMpT0Cp4%2F67HYqR80%2BOXrZOg47tlD53kYXQOpKoolWOcplZTE0jkX0PQIRFWZKWKlftsWkeu%2BAQMZ%2Fn4wjXkk8QIa58g3zZtyGjhovXWy70%2BKlzAnPQYtKi7Wgu9zTCMbNpjlyVcpjkEiYVAhUiK%2Fu%2F9tFLEJMLnYd5HAy92kI1TPgliQYTOAdWl6Iy4SAwMyjvcNTxS%2F%2FDYl8ZQR4CwTzlBi9s49Ebn3HjsTQz9F%2F96nglTh2fHfDjVqrunkEAjgKq7D%2F1fT6bzBfyHomrToFrfy8fBHkMLPIjt450M4mF5JfZ1233%2F%2BGwdeHfE7MJDHLXJhZV5QpPJYr6jYBcou5aenH8un9P9vCFRAw0sxvv%2BOqxbud%2BhX766lolTM5HjRUNZgZQw7%2F4eYQFMu1hAnRdOesOleLhPp8gUWtNS9u3%2Bg5Y%2BIxCCdX2R6lRBQJXfI3ODX2WrZ%2BGWYt%2FXAJBnK2pTjGTwHBTzny9Ajol2MhXEjK3gPYIAmWS4BU%2BKu%2FIkvn%2FstkX4fNB0s%2FwXU6%2FOILPCteftXxzBDex%2F%2FORSNBSgbu%2FVMKjhjcQGOqUBce3L1AJemBEqJ5KhLd2jA46JSFKG%2FeGnor1LCwNu%2FnXzfs2eMfuvaedH64vfFzxxvVglP%2BD7Ml0X0AnlM51JMpFbX%2BNYTvi0USiY4ObxRvZ%2F8eSqUyUSDkMtZsA1je%2Fb6AyklxE23BV55MXxMFtC%2F%2B0JPPUzcj5sBP2zrOxqkSqDM4Hb3uRsijl%2BTEwS0viKDe70rGOszt9hBuJ81F1zt1C3KnEf&X-Amz-Signature=0566ea17f419f390195ee5be9497441fe8bd8a97b22e07fd279150d9d8f81d50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AMPL2R3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBDztrfx7tASy6%2FT3n5XhI9154R4psR9NdeJXooGuyEmAiEAiKzc1FMoNbT%2Fqf1DRTd%2FFjuYXRrIyLk19t2ukscKh9Yq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJUxUaOfcU5NUH5QVyrcA%2FGWdXiARShe5uvoq5OHvY7SnyvRkGzocpmVDWO9I6%2Frs%2FHcu6zdlX1KmqJSyKHrI5ReYc6X0zPxRMpT0Cp4%2F67HYqR80%2BOXrZOg47tlD53kYXQOpKoolWOcplZTE0jkX0PQIRFWZKWKlftsWkeu%2BAQMZ%2Fn4wjXkk8QIa58g3zZtyGjhovXWy70%2BKlzAnPQYtKi7Wgu9zTCMbNpjlyVcpjkEiYVAhUiK%2Fu%2F9tFLEJMLnYd5HAy92kI1TPgliQYTOAdWl6Iy4SAwMyjvcNTxS%2F%2FDYl8ZQR4CwTzlBi9s49Ebn3HjsTQz9F%2F96nglTh2fHfDjVqrunkEAjgKq7D%2F1fT6bzBfyHomrToFrfy8fBHkMLPIjt450M4mF5JfZ1233%2F%2BGwdeHfE7MJDHLXJhZV5QpPJYr6jYBcou5aenH8un9P9vCFRAw0sxvv%2BOqxbud%2BhX766lolTM5HjRUNZgZQw7%2F4eYQFMu1hAnRdOesOleLhPp8gUWtNS9u3%2Bg5Y%2BIxCCdX2R6lRBQJXfI3ODX2WrZ%2BGWYt%2FXAJBnK2pTjGTwHBTzny9Ajol2MhXEjK3gPYIAmWS4BU%2BKu%2FIkvn%2FstkX4fNB0s%2FwXU6%2FOILPCteftXxzBDex%2F%2FORSNBSgbu%2FVMKjhjcQGOqUBce3L1AJemBEqJ5KhLd2jA46JSFKG%2FeGnor1LCwNu%2FnXzfs2eMfuvaedH64vfFzxxvVglP%2BD7Ml0X0AnlM51JMpFbX%2BNYTvi0USiY4ObxRvZ%2F8eSqUyUSDkMtZsA1je%2Fb6AyklxE23BV55MXxMFtC%2F%2B0JPPUzcj5sBP2zrOxqkSqDM4Hb3uRsijl%2BTEwS0viKDe70rGOszt9hBuJ81F1zt1C3KnEf&X-Amz-Signature=f93054c08277b096696cafbfd3979bca8371495a286064c5bd89e589a984def9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AMPL2R3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBDztrfx7tASy6%2FT3n5XhI9154R4psR9NdeJXooGuyEmAiEAiKzc1FMoNbT%2Fqf1DRTd%2FFjuYXRrIyLk19t2ukscKh9Yq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJUxUaOfcU5NUH5QVyrcA%2FGWdXiARShe5uvoq5OHvY7SnyvRkGzocpmVDWO9I6%2Frs%2FHcu6zdlX1KmqJSyKHrI5ReYc6X0zPxRMpT0Cp4%2F67HYqR80%2BOXrZOg47tlD53kYXQOpKoolWOcplZTE0jkX0PQIRFWZKWKlftsWkeu%2BAQMZ%2Fn4wjXkk8QIa58g3zZtyGjhovXWy70%2BKlzAnPQYtKi7Wgu9zTCMbNpjlyVcpjkEiYVAhUiK%2Fu%2F9tFLEJMLnYd5HAy92kI1TPgliQYTOAdWl6Iy4SAwMyjvcNTxS%2F%2FDYl8ZQR4CwTzlBi9s49Ebn3HjsTQz9F%2F96nglTh2fHfDjVqrunkEAjgKq7D%2F1fT6bzBfyHomrToFrfy8fBHkMLPIjt450M4mF5JfZ1233%2F%2BGwdeHfE7MJDHLXJhZV5QpPJYr6jYBcou5aenH8un9P9vCFRAw0sxvv%2BOqxbud%2BhX766lolTM5HjRUNZgZQw7%2F4eYQFMu1hAnRdOesOleLhPp8gUWtNS9u3%2Bg5Y%2BIxCCdX2R6lRBQJXfI3ODX2WrZ%2BGWYt%2FXAJBnK2pTjGTwHBTzny9Ajol2MhXEjK3gPYIAmWS4BU%2BKu%2FIkvn%2FstkX4fNB0s%2FwXU6%2FOILPCteftXxzBDex%2F%2FORSNBSgbu%2FVMKjhjcQGOqUBce3L1AJemBEqJ5KhLd2jA46JSFKG%2FeGnor1LCwNu%2FnXzfs2eMfuvaedH64vfFzxxvVglP%2BD7Ml0X0AnlM51JMpFbX%2BNYTvi0USiY4ObxRvZ%2F8eSqUyUSDkMtZsA1je%2Fb6AyklxE23BV55MXxMFtC%2F%2B0JPPUzcj5sBP2zrOxqkSqDM4Hb3uRsijl%2BTEwS0viKDe70rGOszt9hBuJ81F1zt1C3KnEf&X-Amz-Signature=e6001aa79e00ce4e9f4d0120d99535fa724d6384428c643ff407296b3b29a9d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AMPL2R3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBDztrfx7tASy6%2FT3n5XhI9154R4psR9NdeJXooGuyEmAiEAiKzc1FMoNbT%2Fqf1DRTd%2FFjuYXRrIyLk19t2ukscKh9Yq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJUxUaOfcU5NUH5QVyrcA%2FGWdXiARShe5uvoq5OHvY7SnyvRkGzocpmVDWO9I6%2Frs%2FHcu6zdlX1KmqJSyKHrI5ReYc6X0zPxRMpT0Cp4%2F67HYqR80%2BOXrZOg47tlD53kYXQOpKoolWOcplZTE0jkX0PQIRFWZKWKlftsWkeu%2BAQMZ%2Fn4wjXkk8QIa58g3zZtyGjhovXWy70%2BKlzAnPQYtKi7Wgu9zTCMbNpjlyVcpjkEiYVAhUiK%2Fu%2F9tFLEJMLnYd5HAy92kI1TPgliQYTOAdWl6Iy4SAwMyjvcNTxS%2F%2FDYl8ZQR4CwTzlBi9s49Ebn3HjsTQz9F%2F96nglTh2fHfDjVqrunkEAjgKq7D%2F1fT6bzBfyHomrToFrfy8fBHkMLPIjt450M4mF5JfZ1233%2F%2BGwdeHfE7MJDHLXJhZV5QpPJYr6jYBcou5aenH8un9P9vCFRAw0sxvv%2BOqxbud%2BhX766lolTM5HjRUNZgZQw7%2F4eYQFMu1hAnRdOesOleLhPp8gUWtNS9u3%2Bg5Y%2BIxCCdX2R6lRBQJXfI3ODX2WrZ%2BGWYt%2FXAJBnK2pTjGTwHBTzny9Ajol2MhXEjK3gPYIAmWS4BU%2BKu%2FIkvn%2FstkX4fNB0s%2FwXU6%2FOILPCteftXxzBDex%2F%2FORSNBSgbu%2FVMKjhjcQGOqUBce3L1AJemBEqJ5KhLd2jA46JSFKG%2FeGnor1LCwNu%2FnXzfs2eMfuvaedH64vfFzxxvVglP%2BD7Ml0X0AnlM51JMpFbX%2BNYTvi0USiY4ObxRvZ%2F8eSqUyUSDkMtZsA1je%2Fb6AyklxE23BV55MXxMFtC%2F%2B0JPPUzcj5sBP2zrOxqkSqDM4Hb3uRsijl%2BTEwS0viKDe70rGOszt9hBuJ81F1zt1C3KnEf&X-Amz-Signature=8051bcd3ffaf1c7a1fbb1bd370205eaa23e69f033375d44bcd0a00219a78715d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AMPL2R3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBDztrfx7tASy6%2FT3n5XhI9154R4psR9NdeJXooGuyEmAiEAiKzc1FMoNbT%2Fqf1DRTd%2FFjuYXRrIyLk19t2ukscKh9Yq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJUxUaOfcU5NUH5QVyrcA%2FGWdXiARShe5uvoq5OHvY7SnyvRkGzocpmVDWO9I6%2Frs%2FHcu6zdlX1KmqJSyKHrI5ReYc6X0zPxRMpT0Cp4%2F67HYqR80%2BOXrZOg47tlD53kYXQOpKoolWOcplZTE0jkX0PQIRFWZKWKlftsWkeu%2BAQMZ%2Fn4wjXkk8QIa58g3zZtyGjhovXWy70%2BKlzAnPQYtKi7Wgu9zTCMbNpjlyVcpjkEiYVAhUiK%2Fu%2F9tFLEJMLnYd5HAy92kI1TPgliQYTOAdWl6Iy4SAwMyjvcNTxS%2F%2FDYl8ZQR4CwTzlBi9s49Ebn3HjsTQz9F%2F96nglTh2fHfDjVqrunkEAjgKq7D%2F1fT6bzBfyHomrToFrfy8fBHkMLPIjt450M4mF5JfZ1233%2F%2BGwdeHfE7MJDHLXJhZV5QpPJYr6jYBcou5aenH8un9P9vCFRAw0sxvv%2BOqxbud%2BhX766lolTM5HjRUNZgZQw7%2F4eYQFMu1hAnRdOesOleLhPp8gUWtNS9u3%2Bg5Y%2BIxCCdX2R6lRBQJXfI3ODX2WrZ%2BGWYt%2FXAJBnK2pTjGTwHBTzny9Ajol2MhXEjK3gPYIAmWS4BU%2BKu%2FIkvn%2FstkX4fNB0s%2FwXU6%2FOILPCteftXxzBDex%2F%2FORSNBSgbu%2FVMKjhjcQGOqUBce3L1AJemBEqJ5KhLd2jA46JSFKG%2FeGnor1LCwNu%2FnXzfs2eMfuvaedH64vfFzxxvVglP%2BD7Ml0X0AnlM51JMpFbX%2BNYTvi0USiY4ObxRvZ%2F8eSqUyUSDkMtZsA1je%2Fb6AyklxE23BV55MXxMFtC%2F%2B0JPPUzcj5sBP2zrOxqkSqDM4Hb3uRsijl%2BTEwS0viKDe70rGOszt9hBuJ81F1zt1C3KnEf&X-Amz-Signature=d85d9df15e39fa3c8201965f52cb51d544bb34fe971a55854a99f1cd7fa8ab61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AMPL2R3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBDztrfx7tASy6%2FT3n5XhI9154R4psR9NdeJXooGuyEmAiEAiKzc1FMoNbT%2Fqf1DRTd%2FFjuYXRrIyLk19t2ukscKh9Yq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJUxUaOfcU5NUH5QVyrcA%2FGWdXiARShe5uvoq5OHvY7SnyvRkGzocpmVDWO9I6%2Frs%2FHcu6zdlX1KmqJSyKHrI5ReYc6X0zPxRMpT0Cp4%2F67HYqR80%2BOXrZOg47tlD53kYXQOpKoolWOcplZTE0jkX0PQIRFWZKWKlftsWkeu%2BAQMZ%2Fn4wjXkk8QIa58g3zZtyGjhovXWy70%2BKlzAnPQYtKi7Wgu9zTCMbNpjlyVcpjkEiYVAhUiK%2Fu%2F9tFLEJMLnYd5HAy92kI1TPgliQYTOAdWl6Iy4SAwMyjvcNTxS%2F%2FDYl8ZQR4CwTzlBi9s49Ebn3HjsTQz9F%2F96nglTh2fHfDjVqrunkEAjgKq7D%2F1fT6bzBfyHomrToFrfy8fBHkMLPIjt450M4mF5JfZ1233%2F%2BGwdeHfE7MJDHLXJhZV5QpPJYr6jYBcou5aenH8un9P9vCFRAw0sxvv%2BOqxbud%2BhX766lolTM5HjRUNZgZQw7%2F4eYQFMu1hAnRdOesOleLhPp8gUWtNS9u3%2Bg5Y%2BIxCCdX2R6lRBQJXfI3ODX2WrZ%2BGWYt%2FXAJBnK2pTjGTwHBTzny9Ajol2MhXEjK3gPYIAmWS4BU%2BKu%2FIkvn%2FstkX4fNB0s%2FwXU6%2FOILPCteftXxzBDex%2F%2FORSNBSgbu%2FVMKjhjcQGOqUBce3L1AJemBEqJ5KhLd2jA46JSFKG%2FeGnor1LCwNu%2FnXzfs2eMfuvaedH64vfFzxxvVglP%2BD7Ml0X0AnlM51JMpFbX%2BNYTvi0USiY4ObxRvZ%2F8eSqUyUSDkMtZsA1je%2Fb6AyklxE23BV55MXxMFtC%2F%2B0JPPUzcj5sBP2zrOxqkSqDM4Hb3uRsijl%2BTEwS0viKDe70rGOszt9hBuJ81F1zt1C3KnEf&X-Amz-Signature=093c7a5d876e9b87514c4246841d71558cc08218711dc63bab441f7c1f35c6eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AMPL2R3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBDztrfx7tASy6%2FT3n5XhI9154R4psR9NdeJXooGuyEmAiEAiKzc1FMoNbT%2Fqf1DRTd%2FFjuYXRrIyLk19t2ukscKh9Yq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJUxUaOfcU5NUH5QVyrcA%2FGWdXiARShe5uvoq5OHvY7SnyvRkGzocpmVDWO9I6%2Frs%2FHcu6zdlX1KmqJSyKHrI5ReYc6X0zPxRMpT0Cp4%2F67HYqR80%2BOXrZOg47tlD53kYXQOpKoolWOcplZTE0jkX0PQIRFWZKWKlftsWkeu%2BAQMZ%2Fn4wjXkk8QIa58g3zZtyGjhovXWy70%2BKlzAnPQYtKi7Wgu9zTCMbNpjlyVcpjkEiYVAhUiK%2Fu%2F9tFLEJMLnYd5HAy92kI1TPgliQYTOAdWl6Iy4SAwMyjvcNTxS%2F%2FDYl8ZQR4CwTzlBi9s49Ebn3HjsTQz9F%2F96nglTh2fHfDjVqrunkEAjgKq7D%2F1fT6bzBfyHomrToFrfy8fBHkMLPIjt450M4mF5JfZ1233%2F%2BGwdeHfE7MJDHLXJhZV5QpPJYr6jYBcou5aenH8un9P9vCFRAw0sxvv%2BOqxbud%2BhX766lolTM5HjRUNZgZQw7%2F4eYQFMu1hAnRdOesOleLhPp8gUWtNS9u3%2Bg5Y%2BIxCCdX2R6lRBQJXfI3ODX2WrZ%2BGWYt%2FXAJBnK2pTjGTwHBTzny9Ajol2MhXEjK3gPYIAmWS4BU%2BKu%2FIkvn%2FstkX4fNB0s%2FwXU6%2FOILPCteftXxzBDex%2F%2FORSNBSgbu%2FVMKjhjcQGOqUBce3L1AJemBEqJ5KhLd2jA46JSFKG%2FeGnor1LCwNu%2FnXzfs2eMfuvaedH64vfFzxxvVglP%2BD7Ml0X0AnlM51JMpFbX%2BNYTvi0USiY4ObxRvZ%2F8eSqUyUSDkMtZsA1je%2Fb6AyklxE23BV55MXxMFtC%2F%2B0JPPUzcj5sBP2zrOxqkSqDM4Hb3uRsijl%2BTEwS0viKDe70rGOszt9hBuJ81F1zt1C3KnEf&X-Amz-Signature=c2e312f52db066f5a989caaf498e120a72869c3ba97bc73bb11ca231170139aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AMPL2R3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBDztrfx7tASy6%2FT3n5XhI9154R4psR9NdeJXooGuyEmAiEAiKzc1FMoNbT%2Fqf1DRTd%2FFjuYXRrIyLk19t2ukscKh9Yq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJUxUaOfcU5NUH5QVyrcA%2FGWdXiARShe5uvoq5OHvY7SnyvRkGzocpmVDWO9I6%2Frs%2FHcu6zdlX1KmqJSyKHrI5ReYc6X0zPxRMpT0Cp4%2F67HYqR80%2BOXrZOg47tlD53kYXQOpKoolWOcplZTE0jkX0PQIRFWZKWKlftsWkeu%2BAQMZ%2Fn4wjXkk8QIa58g3zZtyGjhovXWy70%2BKlzAnPQYtKi7Wgu9zTCMbNpjlyVcpjkEiYVAhUiK%2Fu%2F9tFLEJMLnYd5HAy92kI1TPgliQYTOAdWl6Iy4SAwMyjvcNTxS%2F%2FDYl8ZQR4CwTzlBi9s49Ebn3HjsTQz9F%2F96nglTh2fHfDjVqrunkEAjgKq7D%2F1fT6bzBfyHomrToFrfy8fBHkMLPIjt450M4mF5JfZ1233%2F%2BGwdeHfE7MJDHLXJhZV5QpPJYr6jYBcou5aenH8un9P9vCFRAw0sxvv%2BOqxbud%2BhX766lolTM5HjRUNZgZQw7%2F4eYQFMu1hAnRdOesOleLhPp8gUWtNS9u3%2Bg5Y%2BIxCCdX2R6lRBQJXfI3ODX2WrZ%2BGWYt%2FXAJBnK2pTjGTwHBTzny9Ajol2MhXEjK3gPYIAmWS4BU%2BKu%2FIkvn%2FstkX4fNB0s%2FwXU6%2FOILPCteftXxzBDex%2F%2FORSNBSgbu%2FVMKjhjcQGOqUBce3L1AJemBEqJ5KhLd2jA46JSFKG%2FeGnor1LCwNu%2FnXzfs2eMfuvaedH64vfFzxxvVglP%2BD7Ml0X0AnlM51JMpFbX%2BNYTvi0USiY4ObxRvZ%2F8eSqUyUSDkMtZsA1je%2Fb6AyklxE23BV55MXxMFtC%2F%2B0JPPUzcj5sBP2zrOxqkSqDM4Hb3uRsijl%2BTEwS0viKDe70rGOszt9hBuJ81F1zt1C3KnEf&X-Amz-Signature=515922773e8e183df8561524e9b7ce8ba8fcd55dae187cc1ea907730b825bfa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AMPL2R3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBDztrfx7tASy6%2FT3n5XhI9154R4psR9NdeJXooGuyEmAiEAiKzc1FMoNbT%2Fqf1DRTd%2FFjuYXRrIyLk19t2ukscKh9Yq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJUxUaOfcU5NUH5QVyrcA%2FGWdXiARShe5uvoq5OHvY7SnyvRkGzocpmVDWO9I6%2Frs%2FHcu6zdlX1KmqJSyKHrI5ReYc6X0zPxRMpT0Cp4%2F67HYqR80%2BOXrZOg47tlD53kYXQOpKoolWOcplZTE0jkX0PQIRFWZKWKlftsWkeu%2BAQMZ%2Fn4wjXkk8QIa58g3zZtyGjhovXWy70%2BKlzAnPQYtKi7Wgu9zTCMbNpjlyVcpjkEiYVAhUiK%2Fu%2F9tFLEJMLnYd5HAy92kI1TPgliQYTOAdWl6Iy4SAwMyjvcNTxS%2F%2FDYl8ZQR4CwTzlBi9s49Ebn3HjsTQz9F%2F96nglTh2fHfDjVqrunkEAjgKq7D%2F1fT6bzBfyHomrToFrfy8fBHkMLPIjt450M4mF5JfZ1233%2F%2BGwdeHfE7MJDHLXJhZV5QpPJYr6jYBcou5aenH8un9P9vCFRAw0sxvv%2BOqxbud%2BhX766lolTM5HjRUNZgZQw7%2F4eYQFMu1hAnRdOesOleLhPp8gUWtNS9u3%2Bg5Y%2BIxCCdX2R6lRBQJXfI3ODX2WrZ%2BGWYt%2FXAJBnK2pTjGTwHBTzny9Ajol2MhXEjK3gPYIAmWS4BU%2BKu%2FIkvn%2FstkX4fNB0s%2FwXU6%2FOILPCteftXxzBDex%2F%2FORSNBSgbu%2FVMKjhjcQGOqUBce3L1AJemBEqJ5KhLd2jA46JSFKG%2FeGnor1LCwNu%2FnXzfs2eMfuvaedH64vfFzxxvVglP%2BD7Ml0X0AnlM51JMpFbX%2BNYTvi0USiY4ObxRvZ%2F8eSqUyUSDkMtZsA1je%2Fb6AyklxE23BV55MXxMFtC%2F%2B0JPPUzcj5sBP2zrOxqkSqDM4Hb3uRsijl%2BTEwS0viKDe70rGOszt9hBuJ81F1zt1C3KnEf&X-Amz-Signature=73eabb3dcd9ee9ab116257d06118eea868a01b9bc34aeda66d80df45ea27e68e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTKEN7VT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIH1w6GI9gZj4evFr9SNBD7g27cfWLWYDbbRJAsf5Ugp%2BAiBVJVgQx4fxanIXaq3Fz0WjMaQ2Awl%2Fh3%2BHKpZK8SHXGir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM7tIyPZMNfp4daXxcKtwDsgjx%2BOdfI%2FisnFinyIAl%2BUuuLopFeIqYBq05XvrgqKt7EUCRctfxBT00xGTHDubP16%2FaHhzl6XCg%2Bo00xJjY56nvMOhlA6TdlID6KkRZFX0WNwvAQ5c5OhssZ%2Buf4TmPiApomcKiNafncuR10iTuC2KmB0hpbFC2qfnkJcqQNXU3jW93piuERiX44ENZ2zkCZFT58van93FiH70L5Iqjr7rpgRW9tqrFH3l9eU7lAw3twbG1tcLsIgm3Dl6WbQ5tMrXiIn%2BzNu3B4s2GxtL1P9q6j4lLilpZgJzZS9q6a%2FptOpObfKKJlWsM4fXrAb2FhCVIHgu8c4eeR5ouIKRuncMTlYXcQXbJAmpAAHpcVeSfUVpkGxaG8bMLeHF3ShECmVIwE9%2F5RF0zuwE4Mwq1JUC8PKp5pPnLZkXbC1rCOKNUpeB1mI2E%2B8p3RthQ1ChULeglZdRKuW5qcNehVY1%2BlXkC4DxvKpHcmMySqcfHp9ymV%2FRqGdTNH%2FX9JNOTijGT%2B36iUa5RzyLdxNuQRaXqAoQCIJQAx4Hc3OzOTogSb5ax0j2gUGmxmNWupOH1R2BGohLKcLKyMAm6WsDp32LoiguoVkv70snpkP%2BlN7ZEmqQSPfbkVYEmTNJMb5Qw7uGNxAY6pgHAK1FBC%2BS0LfBEoTY3TDVwHBITUKGzpGnjesgtlXZA58FMiCMN%2BPd3BRObax29ztF6tFKCE2mRctwB%2F%2F9NddradSYbIcJ4FHC86NlAxgQDd3D5XZeExR9qgOBXqvtqoXu%2BO6nOEsTKtJz%2Fqx94MEyHbh6xMgRc8Ag1FfNbKkd6CVK8PGVp8vxWCyCjc%2BKY5zNfKUxwqyVgIA%2ByaoJ7ZHsemqIWRUCn&X-Amz-Signature=112d069506aa1cd24d29bb8174784ab80891279f34ea9f41acbb03b70a68e781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTKEN7VT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIH1w6GI9gZj4evFr9SNBD7g27cfWLWYDbbRJAsf5Ugp%2BAiBVJVgQx4fxanIXaq3Fz0WjMaQ2Awl%2Fh3%2BHKpZK8SHXGir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM7tIyPZMNfp4daXxcKtwDsgjx%2BOdfI%2FisnFinyIAl%2BUuuLopFeIqYBq05XvrgqKt7EUCRctfxBT00xGTHDubP16%2FaHhzl6XCg%2Bo00xJjY56nvMOhlA6TdlID6KkRZFX0WNwvAQ5c5OhssZ%2Buf4TmPiApomcKiNafncuR10iTuC2KmB0hpbFC2qfnkJcqQNXU3jW93piuERiX44ENZ2zkCZFT58van93FiH70L5Iqjr7rpgRW9tqrFH3l9eU7lAw3twbG1tcLsIgm3Dl6WbQ5tMrXiIn%2BzNu3B4s2GxtL1P9q6j4lLilpZgJzZS9q6a%2FptOpObfKKJlWsM4fXrAb2FhCVIHgu8c4eeR5ouIKRuncMTlYXcQXbJAmpAAHpcVeSfUVpkGxaG8bMLeHF3ShECmVIwE9%2F5RF0zuwE4Mwq1JUC8PKp5pPnLZkXbC1rCOKNUpeB1mI2E%2B8p3RthQ1ChULeglZdRKuW5qcNehVY1%2BlXkC4DxvKpHcmMySqcfHp9ymV%2FRqGdTNH%2FX9JNOTijGT%2B36iUa5RzyLdxNuQRaXqAoQCIJQAx4Hc3OzOTogSb5ax0j2gUGmxmNWupOH1R2BGohLKcLKyMAm6WsDp32LoiguoVkv70snpkP%2BlN7ZEmqQSPfbkVYEmTNJMb5Qw7uGNxAY6pgHAK1FBC%2BS0LfBEoTY3TDVwHBITUKGzpGnjesgtlXZA58FMiCMN%2BPd3BRObax29ztF6tFKCE2mRctwB%2F%2F9NddradSYbIcJ4FHC86NlAxgQDd3D5XZeExR9qgOBXqvtqoXu%2BO6nOEsTKtJz%2Fqx94MEyHbh6xMgRc8Ag1FfNbKkd6CVK8PGVp8vxWCyCjc%2BKY5zNfKUxwqyVgIA%2ByaoJ7ZHsemqIWRUCn&X-Amz-Signature=712f251f5de5a322c0b6f6aa60a775c541e2e2cc45db09eb42c0a2e880c1b31c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTKEN7VT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIH1w6GI9gZj4evFr9SNBD7g27cfWLWYDbbRJAsf5Ugp%2BAiBVJVgQx4fxanIXaq3Fz0WjMaQ2Awl%2Fh3%2BHKpZK8SHXGir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM7tIyPZMNfp4daXxcKtwDsgjx%2BOdfI%2FisnFinyIAl%2BUuuLopFeIqYBq05XvrgqKt7EUCRctfxBT00xGTHDubP16%2FaHhzl6XCg%2Bo00xJjY56nvMOhlA6TdlID6KkRZFX0WNwvAQ5c5OhssZ%2Buf4TmPiApomcKiNafncuR10iTuC2KmB0hpbFC2qfnkJcqQNXU3jW93piuERiX44ENZ2zkCZFT58van93FiH70L5Iqjr7rpgRW9tqrFH3l9eU7lAw3twbG1tcLsIgm3Dl6WbQ5tMrXiIn%2BzNu3B4s2GxtL1P9q6j4lLilpZgJzZS9q6a%2FptOpObfKKJlWsM4fXrAb2FhCVIHgu8c4eeR5ouIKRuncMTlYXcQXbJAmpAAHpcVeSfUVpkGxaG8bMLeHF3ShECmVIwE9%2F5RF0zuwE4Mwq1JUC8PKp5pPnLZkXbC1rCOKNUpeB1mI2E%2B8p3RthQ1ChULeglZdRKuW5qcNehVY1%2BlXkC4DxvKpHcmMySqcfHp9ymV%2FRqGdTNH%2FX9JNOTijGT%2B36iUa5RzyLdxNuQRaXqAoQCIJQAx4Hc3OzOTogSb5ax0j2gUGmxmNWupOH1R2BGohLKcLKyMAm6WsDp32LoiguoVkv70snpkP%2BlN7ZEmqQSPfbkVYEmTNJMb5Qw7uGNxAY6pgHAK1FBC%2BS0LfBEoTY3TDVwHBITUKGzpGnjesgtlXZA58FMiCMN%2BPd3BRObax29ztF6tFKCE2mRctwB%2F%2F9NddradSYbIcJ4FHC86NlAxgQDd3D5XZeExR9qgOBXqvtqoXu%2BO6nOEsTKtJz%2Fqx94MEyHbh6xMgRc8Ag1FfNbKkd6CVK8PGVp8vxWCyCjc%2BKY5zNfKUxwqyVgIA%2ByaoJ7ZHsemqIWRUCn&X-Amz-Signature=a5a64bece86ef8fa860e46231fd0bf9f4b172f428720033ad81c13765015fd09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTKEN7VT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIH1w6GI9gZj4evFr9SNBD7g27cfWLWYDbbRJAsf5Ugp%2BAiBVJVgQx4fxanIXaq3Fz0WjMaQ2Awl%2Fh3%2BHKpZK8SHXGir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM7tIyPZMNfp4daXxcKtwDsgjx%2BOdfI%2FisnFinyIAl%2BUuuLopFeIqYBq05XvrgqKt7EUCRctfxBT00xGTHDubP16%2FaHhzl6XCg%2Bo00xJjY56nvMOhlA6TdlID6KkRZFX0WNwvAQ5c5OhssZ%2Buf4TmPiApomcKiNafncuR10iTuC2KmB0hpbFC2qfnkJcqQNXU3jW93piuERiX44ENZ2zkCZFT58van93FiH70L5Iqjr7rpgRW9tqrFH3l9eU7lAw3twbG1tcLsIgm3Dl6WbQ5tMrXiIn%2BzNu3B4s2GxtL1P9q6j4lLilpZgJzZS9q6a%2FptOpObfKKJlWsM4fXrAb2FhCVIHgu8c4eeR5ouIKRuncMTlYXcQXbJAmpAAHpcVeSfUVpkGxaG8bMLeHF3ShECmVIwE9%2F5RF0zuwE4Mwq1JUC8PKp5pPnLZkXbC1rCOKNUpeB1mI2E%2B8p3RthQ1ChULeglZdRKuW5qcNehVY1%2BlXkC4DxvKpHcmMySqcfHp9ymV%2FRqGdTNH%2FX9JNOTijGT%2B36iUa5RzyLdxNuQRaXqAoQCIJQAx4Hc3OzOTogSb5ax0j2gUGmxmNWupOH1R2BGohLKcLKyMAm6WsDp32LoiguoVkv70snpkP%2BlN7ZEmqQSPfbkVYEmTNJMb5Qw7uGNxAY6pgHAK1FBC%2BS0LfBEoTY3TDVwHBITUKGzpGnjesgtlXZA58FMiCMN%2BPd3BRObax29ztF6tFKCE2mRctwB%2F%2F9NddradSYbIcJ4FHC86NlAxgQDd3D5XZeExR9qgOBXqvtqoXu%2BO6nOEsTKtJz%2Fqx94MEyHbh6xMgRc8Ag1FfNbKkd6CVK8PGVp8vxWCyCjc%2BKY5zNfKUxwqyVgIA%2ByaoJ7ZHsemqIWRUCn&X-Amz-Signature=b0809af711b0212be90219c8cc0263883ac303495e6b59e56ad38c925451d87f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTKEN7VT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIH1w6GI9gZj4evFr9SNBD7g27cfWLWYDbbRJAsf5Ugp%2BAiBVJVgQx4fxanIXaq3Fz0WjMaQ2Awl%2Fh3%2BHKpZK8SHXGir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM7tIyPZMNfp4daXxcKtwDsgjx%2BOdfI%2FisnFinyIAl%2BUuuLopFeIqYBq05XvrgqKt7EUCRctfxBT00xGTHDubP16%2FaHhzl6XCg%2Bo00xJjY56nvMOhlA6TdlID6KkRZFX0WNwvAQ5c5OhssZ%2Buf4TmPiApomcKiNafncuR10iTuC2KmB0hpbFC2qfnkJcqQNXU3jW93piuERiX44ENZ2zkCZFT58van93FiH70L5Iqjr7rpgRW9tqrFH3l9eU7lAw3twbG1tcLsIgm3Dl6WbQ5tMrXiIn%2BzNu3B4s2GxtL1P9q6j4lLilpZgJzZS9q6a%2FptOpObfKKJlWsM4fXrAb2FhCVIHgu8c4eeR5ouIKRuncMTlYXcQXbJAmpAAHpcVeSfUVpkGxaG8bMLeHF3ShECmVIwE9%2F5RF0zuwE4Mwq1JUC8PKp5pPnLZkXbC1rCOKNUpeB1mI2E%2B8p3RthQ1ChULeglZdRKuW5qcNehVY1%2BlXkC4DxvKpHcmMySqcfHp9ymV%2FRqGdTNH%2FX9JNOTijGT%2B36iUa5RzyLdxNuQRaXqAoQCIJQAx4Hc3OzOTogSb5ax0j2gUGmxmNWupOH1R2BGohLKcLKyMAm6WsDp32LoiguoVkv70snpkP%2BlN7ZEmqQSPfbkVYEmTNJMb5Qw7uGNxAY6pgHAK1FBC%2BS0LfBEoTY3TDVwHBITUKGzpGnjesgtlXZA58FMiCMN%2BPd3BRObax29ztF6tFKCE2mRctwB%2F%2F9NddradSYbIcJ4FHC86NlAxgQDd3D5XZeExR9qgOBXqvtqoXu%2BO6nOEsTKtJz%2Fqx94MEyHbh6xMgRc8Ag1FfNbKkd6CVK8PGVp8vxWCyCjc%2BKY5zNfKUxwqyVgIA%2ByaoJ7ZHsemqIWRUCn&X-Amz-Signature=38b3b2d6736c79fb11c7e3d42023536ed6b4448da588782d7341f4a4d1dbff48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTKEN7VT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIH1w6GI9gZj4evFr9SNBD7g27cfWLWYDbbRJAsf5Ugp%2BAiBVJVgQx4fxanIXaq3Fz0WjMaQ2Awl%2Fh3%2BHKpZK8SHXGir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM7tIyPZMNfp4daXxcKtwDsgjx%2BOdfI%2FisnFinyIAl%2BUuuLopFeIqYBq05XvrgqKt7EUCRctfxBT00xGTHDubP16%2FaHhzl6XCg%2Bo00xJjY56nvMOhlA6TdlID6KkRZFX0WNwvAQ5c5OhssZ%2Buf4TmPiApomcKiNafncuR10iTuC2KmB0hpbFC2qfnkJcqQNXU3jW93piuERiX44ENZ2zkCZFT58van93FiH70L5Iqjr7rpgRW9tqrFH3l9eU7lAw3twbG1tcLsIgm3Dl6WbQ5tMrXiIn%2BzNu3B4s2GxtL1P9q6j4lLilpZgJzZS9q6a%2FptOpObfKKJlWsM4fXrAb2FhCVIHgu8c4eeR5ouIKRuncMTlYXcQXbJAmpAAHpcVeSfUVpkGxaG8bMLeHF3ShECmVIwE9%2F5RF0zuwE4Mwq1JUC8PKp5pPnLZkXbC1rCOKNUpeB1mI2E%2B8p3RthQ1ChULeglZdRKuW5qcNehVY1%2BlXkC4DxvKpHcmMySqcfHp9ymV%2FRqGdTNH%2FX9JNOTijGT%2B36iUa5RzyLdxNuQRaXqAoQCIJQAx4Hc3OzOTogSb5ax0j2gUGmxmNWupOH1R2BGohLKcLKyMAm6WsDp32LoiguoVkv70snpkP%2BlN7ZEmqQSPfbkVYEmTNJMb5Qw7uGNxAY6pgHAK1FBC%2BS0LfBEoTY3TDVwHBITUKGzpGnjesgtlXZA58FMiCMN%2BPd3BRObax29ztF6tFKCE2mRctwB%2F%2F9NddradSYbIcJ4FHC86NlAxgQDd3D5XZeExR9qgOBXqvtqoXu%2BO6nOEsTKtJz%2Fqx94MEyHbh6xMgRc8Ag1FfNbKkd6CVK8PGVp8vxWCyCjc%2BKY5zNfKUxwqyVgIA%2ByaoJ7ZHsemqIWRUCn&X-Amz-Signature=bcd1412dcd4a085e50ae1e082d93e4a231a8bfcb40879ea93212f41480e4227a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
