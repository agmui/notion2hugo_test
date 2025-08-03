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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV2B3ALB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxN4xtVQ0ICmgkn0P7e8z1U%2BxPv5oDPSMm8d6mWOXAVAIhAP0aIoCFUoF3r1Rq8%2F7GM7GRNmmH79Q7P6U1PpcW3Y8kKv8DCB4QABoMNjM3NDIzMTgzODA1IgyhixMM%2Fzetmdc9xO0q3APTtsChBDUZGFzjaO%2FgX%2BaxWB9%2BPSjIPvM%2Ftj%2BnQGcbbN%2Fw5G8%2BhqcLvc%2BxaS4XY%2B5rWYjWkcTeiYClQ40vGO4swA5hRHfKWnEUdMgKV8tdNdBD2jzh2%2F%2FMqgJWNt%2FWBcsFJWaj0XOPDClsBP8H4m7hDhuc9hYAtmQg8MtlmPFpuvaPjHw%2B0E83my%2FyQ9JPpYCrrEbli7GSb22ExJbxgy3ISVoBdV9CWmfNfnf1E%2FbTkYu%2FxiBIQyFFkSLoXLM71WXYajaD6e3sJ4ATAfjpiBhMy5GD71%2FNF3kDlKPSci8TcbobqpR%2BholPCJNgROu6QTa%2Bt7X9FJEvcKktqIu4epEzf%2B9FXZU%2FxSbAm3i0WDMnMrKFjdqC%2FCV8vJYnyvoeGXm4C7BJ8aP7wCm17mfdeNeiZY7ezaWjnA3y5T65DkeqRzycll63a4E5VhgLjKa%2BLrrOcnOskcQEP3KeIzwGqLpi36adMqNdcikgfUBI5fLZYh%2F15VSE3%2F%2B5Fui%2BvWQnb596M%2BXmEuXWmL5I9gsRcPcLR1bCn1852OqEvOfE68zMu4qBFSwQu%2BJ5Q8%2FvraBsn8aRYdmqfGKysp5kFOHxb9PzcgSTphpA308P8bduR5FHdpWXQotrGrOu4nqOmTDCgLrEBjqkAR3s2R3aJ6%2BKnHVjUUwbdU24XnHux3SG8cz3LuHldvKGu9txAxxqPHhnkm8A%2BaV%2Fy7l%2FbKNRSJQnqqYfaOL0kZKoxRmTl1hEGrI9rAzj5RwsNz7Bh2rWuiG5mLVWzmdwS%2FvXLOODswKfAN69qghOWtT7tbcUNfOXZiRuD77lyeMykdwrT7J1C5fMWv6kOahHtBue7jny%2FphZ8MyTXpGi80abWXy3&X-Amz-Signature=122b2b5e2991c5f49d4009004b0d13eec23666db01920861cf97f7b51cabeedc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV2B3ALB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxN4xtVQ0ICmgkn0P7e8z1U%2BxPv5oDPSMm8d6mWOXAVAIhAP0aIoCFUoF3r1Rq8%2F7GM7GRNmmH79Q7P6U1PpcW3Y8kKv8DCB4QABoMNjM3NDIzMTgzODA1IgyhixMM%2Fzetmdc9xO0q3APTtsChBDUZGFzjaO%2FgX%2BaxWB9%2BPSjIPvM%2Ftj%2BnQGcbbN%2Fw5G8%2BhqcLvc%2BxaS4XY%2B5rWYjWkcTeiYClQ40vGO4swA5hRHfKWnEUdMgKV8tdNdBD2jzh2%2F%2FMqgJWNt%2FWBcsFJWaj0XOPDClsBP8H4m7hDhuc9hYAtmQg8MtlmPFpuvaPjHw%2B0E83my%2FyQ9JPpYCrrEbli7GSb22ExJbxgy3ISVoBdV9CWmfNfnf1E%2FbTkYu%2FxiBIQyFFkSLoXLM71WXYajaD6e3sJ4ATAfjpiBhMy5GD71%2FNF3kDlKPSci8TcbobqpR%2BholPCJNgROu6QTa%2Bt7X9FJEvcKktqIu4epEzf%2B9FXZU%2FxSbAm3i0WDMnMrKFjdqC%2FCV8vJYnyvoeGXm4C7BJ8aP7wCm17mfdeNeiZY7ezaWjnA3y5T65DkeqRzycll63a4E5VhgLjKa%2BLrrOcnOskcQEP3KeIzwGqLpi36adMqNdcikgfUBI5fLZYh%2F15VSE3%2F%2B5Fui%2BvWQnb596M%2BXmEuXWmL5I9gsRcPcLR1bCn1852OqEvOfE68zMu4qBFSwQu%2BJ5Q8%2FvraBsn8aRYdmqfGKysp5kFOHxb9PzcgSTphpA308P8bduR5FHdpWXQotrGrOu4nqOmTDCgLrEBjqkAR3s2R3aJ6%2BKnHVjUUwbdU24XnHux3SG8cz3LuHldvKGu9txAxxqPHhnkm8A%2BaV%2Fy7l%2FbKNRSJQnqqYfaOL0kZKoxRmTl1hEGrI9rAzj5RwsNz7Bh2rWuiG5mLVWzmdwS%2FvXLOODswKfAN69qghOWtT7tbcUNfOXZiRuD77lyeMykdwrT7J1C5fMWv6kOahHtBue7jny%2FphZ8MyTXpGi80abWXy3&X-Amz-Signature=aab7a721414e002769ec698f9ae0c1658d1f2ceb20a160e1d9268553ac132d14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV2B3ALB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxN4xtVQ0ICmgkn0P7e8z1U%2BxPv5oDPSMm8d6mWOXAVAIhAP0aIoCFUoF3r1Rq8%2F7GM7GRNmmH79Q7P6U1PpcW3Y8kKv8DCB4QABoMNjM3NDIzMTgzODA1IgyhixMM%2Fzetmdc9xO0q3APTtsChBDUZGFzjaO%2FgX%2BaxWB9%2BPSjIPvM%2Ftj%2BnQGcbbN%2Fw5G8%2BhqcLvc%2BxaS4XY%2B5rWYjWkcTeiYClQ40vGO4swA5hRHfKWnEUdMgKV8tdNdBD2jzh2%2F%2FMqgJWNt%2FWBcsFJWaj0XOPDClsBP8H4m7hDhuc9hYAtmQg8MtlmPFpuvaPjHw%2B0E83my%2FyQ9JPpYCrrEbli7GSb22ExJbxgy3ISVoBdV9CWmfNfnf1E%2FbTkYu%2FxiBIQyFFkSLoXLM71WXYajaD6e3sJ4ATAfjpiBhMy5GD71%2FNF3kDlKPSci8TcbobqpR%2BholPCJNgROu6QTa%2Bt7X9FJEvcKktqIu4epEzf%2B9FXZU%2FxSbAm3i0WDMnMrKFjdqC%2FCV8vJYnyvoeGXm4C7BJ8aP7wCm17mfdeNeiZY7ezaWjnA3y5T65DkeqRzycll63a4E5VhgLjKa%2BLrrOcnOskcQEP3KeIzwGqLpi36adMqNdcikgfUBI5fLZYh%2F15VSE3%2F%2B5Fui%2BvWQnb596M%2BXmEuXWmL5I9gsRcPcLR1bCn1852OqEvOfE68zMu4qBFSwQu%2BJ5Q8%2FvraBsn8aRYdmqfGKysp5kFOHxb9PzcgSTphpA308P8bduR5FHdpWXQotrGrOu4nqOmTDCgLrEBjqkAR3s2R3aJ6%2BKnHVjUUwbdU24XnHux3SG8cz3LuHldvKGu9txAxxqPHhnkm8A%2BaV%2Fy7l%2FbKNRSJQnqqYfaOL0kZKoxRmTl1hEGrI9rAzj5RwsNz7Bh2rWuiG5mLVWzmdwS%2FvXLOODswKfAN69qghOWtT7tbcUNfOXZiRuD77lyeMykdwrT7J1C5fMWv6kOahHtBue7jny%2FphZ8MyTXpGi80abWXy3&X-Amz-Signature=baa848e6d234002e71147a5a0b91eadf7da79518001fba2d17983f266cea6419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV2B3ALB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxN4xtVQ0ICmgkn0P7e8z1U%2BxPv5oDPSMm8d6mWOXAVAIhAP0aIoCFUoF3r1Rq8%2F7GM7GRNmmH79Q7P6U1PpcW3Y8kKv8DCB4QABoMNjM3NDIzMTgzODA1IgyhixMM%2Fzetmdc9xO0q3APTtsChBDUZGFzjaO%2FgX%2BaxWB9%2BPSjIPvM%2Ftj%2BnQGcbbN%2Fw5G8%2BhqcLvc%2BxaS4XY%2B5rWYjWkcTeiYClQ40vGO4swA5hRHfKWnEUdMgKV8tdNdBD2jzh2%2F%2FMqgJWNt%2FWBcsFJWaj0XOPDClsBP8H4m7hDhuc9hYAtmQg8MtlmPFpuvaPjHw%2B0E83my%2FyQ9JPpYCrrEbli7GSb22ExJbxgy3ISVoBdV9CWmfNfnf1E%2FbTkYu%2FxiBIQyFFkSLoXLM71WXYajaD6e3sJ4ATAfjpiBhMy5GD71%2FNF3kDlKPSci8TcbobqpR%2BholPCJNgROu6QTa%2Bt7X9FJEvcKktqIu4epEzf%2B9FXZU%2FxSbAm3i0WDMnMrKFjdqC%2FCV8vJYnyvoeGXm4C7BJ8aP7wCm17mfdeNeiZY7ezaWjnA3y5T65DkeqRzycll63a4E5VhgLjKa%2BLrrOcnOskcQEP3KeIzwGqLpi36adMqNdcikgfUBI5fLZYh%2F15VSE3%2F%2B5Fui%2BvWQnb596M%2BXmEuXWmL5I9gsRcPcLR1bCn1852OqEvOfE68zMu4qBFSwQu%2BJ5Q8%2FvraBsn8aRYdmqfGKysp5kFOHxb9PzcgSTphpA308P8bduR5FHdpWXQotrGrOu4nqOmTDCgLrEBjqkAR3s2R3aJ6%2BKnHVjUUwbdU24XnHux3SG8cz3LuHldvKGu9txAxxqPHhnkm8A%2BaV%2Fy7l%2FbKNRSJQnqqYfaOL0kZKoxRmTl1hEGrI9rAzj5RwsNz7Bh2rWuiG5mLVWzmdwS%2FvXLOODswKfAN69qghOWtT7tbcUNfOXZiRuD77lyeMykdwrT7J1C5fMWv6kOahHtBue7jny%2FphZ8MyTXpGi80abWXy3&X-Amz-Signature=6b93a81eb5f5100e3d4dae83d47628730595d2a809c28a0437ab9783e621574a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV2B3ALB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxN4xtVQ0ICmgkn0P7e8z1U%2BxPv5oDPSMm8d6mWOXAVAIhAP0aIoCFUoF3r1Rq8%2F7GM7GRNmmH79Q7P6U1PpcW3Y8kKv8DCB4QABoMNjM3NDIzMTgzODA1IgyhixMM%2Fzetmdc9xO0q3APTtsChBDUZGFzjaO%2FgX%2BaxWB9%2BPSjIPvM%2Ftj%2BnQGcbbN%2Fw5G8%2BhqcLvc%2BxaS4XY%2B5rWYjWkcTeiYClQ40vGO4swA5hRHfKWnEUdMgKV8tdNdBD2jzh2%2F%2FMqgJWNt%2FWBcsFJWaj0XOPDClsBP8H4m7hDhuc9hYAtmQg8MtlmPFpuvaPjHw%2B0E83my%2FyQ9JPpYCrrEbli7GSb22ExJbxgy3ISVoBdV9CWmfNfnf1E%2FbTkYu%2FxiBIQyFFkSLoXLM71WXYajaD6e3sJ4ATAfjpiBhMy5GD71%2FNF3kDlKPSci8TcbobqpR%2BholPCJNgROu6QTa%2Bt7X9FJEvcKktqIu4epEzf%2B9FXZU%2FxSbAm3i0WDMnMrKFjdqC%2FCV8vJYnyvoeGXm4C7BJ8aP7wCm17mfdeNeiZY7ezaWjnA3y5T65DkeqRzycll63a4E5VhgLjKa%2BLrrOcnOskcQEP3KeIzwGqLpi36adMqNdcikgfUBI5fLZYh%2F15VSE3%2F%2B5Fui%2BvWQnb596M%2BXmEuXWmL5I9gsRcPcLR1bCn1852OqEvOfE68zMu4qBFSwQu%2BJ5Q8%2FvraBsn8aRYdmqfGKysp5kFOHxb9PzcgSTphpA308P8bduR5FHdpWXQotrGrOu4nqOmTDCgLrEBjqkAR3s2R3aJ6%2BKnHVjUUwbdU24XnHux3SG8cz3LuHldvKGu9txAxxqPHhnkm8A%2BaV%2Fy7l%2FbKNRSJQnqqYfaOL0kZKoxRmTl1hEGrI9rAzj5RwsNz7Bh2rWuiG5mLVWzmdwS%2FvXLOODswKfAN69qghOWtT7tbcUNfOXZiRuD77lyeMykdwrT7J1C5fMWv6kOahHtBue7jny%2FphZ8MyTXpGi80abWXy3&X-Amz-Signature=b87bf2ce79dc5114d919b41357930534beac3326b6ff16aab7d74325e6bdadd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV2B3ALB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxN4xtVQ0ICmgkn0P7e8z1U%2BxPv5oDPSMm8d6mWOXAVAIhAP0aIoCFUoF3r1Rq8%2F7GM7GRNmmH79Q7P6U1PpcW3Y8kKv8DCB4QABoMNjM3NDIzMTgzODA1IgyhixMM%2Fzetmdc9xO0q3APTtsChBDUZGFzjaO%2FgX%2BaxWB9%2BPSjIPvM%2Ftj%2BnQGcbbN%2Fw5G8%2BhqcLvc%2BxaS4XY%2B5rWYjWkcTeiYClQ40vGO4swA5hRHfKWnEUdMgKV8tdNdBD2jzh2%2F%2FMqgJWNt%2FWBcsFJWaj0XOPDClsBP8H4m7hDhuc9hYAtmQg8MtlmPFpuvaPjHw%2B0E83my%2FyQ9JPpYCrrEbli7GSb22ExJbxgy3ISVoBdV9CWmfNfnf1E%2FbTkYu%2FxiBIQyFFkSLoXLM71WXYajaD6e3sJ4ATAfjpiBhMy5GD71%2FNF3kDlKPSci8TcbobqpR%2BholPCJNgROu6QTa%2Bt7X9FJEvcKktqIu4epEzf%2B9FXZU%2FxSbAm3i0WDMnMrKFjdqC%2FCV8vJYnyvoeGXm4C7BJ8aP7wCm17mfdeNeiZY7ezaWjnA3y5T65DkeqRzycll63a4E5VhgLjKa%2BLrrOcnOskcQEP3KeIzwGqLpi36adMqNdcikgfUBI5fLZYh%2F15VSE3%2F%2B5Fui%2BvWQnb596M%2BXmEuXWmL5I9gsRcPcLR1bCn1852OqEvOfE68zMu4qBFSwQu%2BJ5Q8%2FvraBsn8aRYdmqfGKysp5kFOHxb9PzcgSTphpA308P8bduR5FHdpWXQotrGrOu4nqOmTDCgLrEBjqkAR3s2R3aJ6%2BKnHVjUUwbdU24XnHux3SG8cz3LuHldvKGu9txAxxqPHhnkm8A%2BaV%2Fy7l%2FbKNRSJQnqqYfaOL0kZKoxRmTl1hEGrI9rAzj5RwsNz7Bh2rWuiG5mLVWzmdwS%2FvXLOODswKfAN69qghOWtT7tbcUNfOXZiRuD77lyeMykdwrT7J1C5fMWv6kOahHtBue7jny%2FphZ8MyTXpGi80abWXy3&X-Amz-Signature=f2bf6b68283456e34ccdaa0ea6e4b605b9f2a67c8f2139cb545a183f80939f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV2B3ALB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxN4xtVQ0ICmgkn0P7e8z1U%2BxPv5oDPSMm8d6mWOXAVAIhAP0aIoCFUoF3r1Rq8%2F7GM7GRNmmH79Q7P6U1PpcW3Y8kKv8DCB4QABoMNjM3NDIzMTgzODA1IgyhixMM%2Fzetmdc9xO0q3APTtsChBDUZGFzjaO%2FgX%2BaxWB9%2BPSjIPvM%2Ftj%2BnQGcbbN%2Fw5G8%2BhqcLvc%2BxaS4XY%2B5rWYjWkcTeiYClQ40vGO4swA5hRHfKWnEUdMgKV8tdNdBD2jzh2%2F%2FMqgJWNt%2FWBcsFJWaj0XOPDClsBP8H4m7hDhuc9hYAtmQg8MtlmPFpuvaPjHw%2B0E83my%2FyQ9JPpYCrrEbli7GSb22ExJbxgy3ISVoBdV9CWmfNfnf1E%2FbTkYu%2FxiBIQyFFkSLoXLM71WXYajaD6e3sJ4ATAfjpiBhMy5GD71%2FNF3kDlKPSci8TcbobqpR%2BholPCJNgROu6QTa%2Bt7X9FJEvcKktqIu4epEzf%2B9FXZU%2FxSbAm3i0WDMnMrKFjdqC%2FCV8vJYnyvoeGXm4C7BJ8aP7wCm17mfdeNeiZY7ezaWjnA3y5T65DkeqRzycll63a4E5VhgLjKa%2BLrrOcnOskcQEP3KeIzwGqLpi36adMqNdcikgfUBI5fLZYh%2F15VSE3%2F%2B5Fui%2BvWQnb596M%2BXmEuXWmL5I9gsRcPcLR1bCn1852OqEvOfE68zMu4qBFSwQu%2BJ5Q8%2FvraBsn8aRYdmqfGKysp5kFOHxb9PzcgSTphpA308P8bduR5FHdpWXQotrGrOu4nqOmTDCgLrEBjqkAR3s2R3aJ6%2BKnHVjUUwbdU24XnHux3SG8cz3LuHldvKGu9txAxxqPHhnkm8A%2BaV%2Fy7l%2FbKNRSJQnqqYfaOL0kZKoxRmTl1hEGrI9rAzj5RwsNz7Bh2rWuiG5mLVWzmdwS%2FvXLOODswKfAN69qghOWtT7tbcUNfOXZiRuD77lyeMykdwrT7J1C5fMWv6kOahHtBue7jny%2FphZ8MyTXpGi80abWXy3&X-Amz-Signature=988002b21ea8a82335cd91819599474566519082952ec4b4b11f59a773b52af9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV2B3ALB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxN4xtVQ0ICmgkn0P7e8z1U%2BxPv5oDPSMm8d6mWOXAVAIhAP0aIoCFUoF3r1Rq8%2F7GM7GRNmmH79Q7P6U1PpcW3Y8kKv8DCB4QABoMNjM3NDIzMTgzODA1IgyhixMM%2Fzetmdc9xO0q3APTtsChBDUZGFzjaO%2FgX%2BaxWB9%2BPSjIPvM%2Ftj%2BnQGcbbN%2Fw5G8%2BhqcLvc%2BxaS4XY%2B5rWYjWkcTeiYClQ40vGO4swA5hRHfKWnEUdMgKV8tdNdBD2jzh2%2F%2FMqgJWNt%2FWBcsFJWaj0XOPDClsBP8H4m7hDhuc9hYAtmQg8MtlmPFpuvaPjHw%2B0E83my%2FyQ9JPpYCrrEbli7GSb22ExJbxgy3ISVoBdV9CWmfNfnf1E%2FbTkYu%2FxiBIQyFFkSLoXLM71WXYajaD6e3sJ4ATAfjpiBhMy5GD71%2FNF3kDlKPSci8TcbobqpR%2BholPCJNgROu6QTa%2Bt7X9FJEvcKktqIu4epEzf%2B9FXZU%2FxSbAm3i0WDMnMrKFjdqC%2FCV8vJYnyvoeGXm4C7BJ8aP7wCm17mfdeNeiZY7ezaWjnA3y5T65DkeqRzycll63a4E5VhgLjKa%2BLrrOcnOskcQEP3KeIzwGqLpi36adMqNdcikgfUBI5fLZYh%2F15VSE3%2F%2B5Fui%2BvWQnb596M%2BXmEuXWmL5I9gsRcPcLR1bCn1852OqEvOfE68zMu4qBFSwQu%2BJ5Q8%2FvraBsn8aRYdmqfGKysp5kFOHxb9PzcgSTphpA308P8bduR5FHdpWXQotrGrOu4nqOmTDCgLrEBjqkAR3s2R3aJ6%2BKnHVjUUwbdU24XnHux3SG8cz3LuHldvKGu9txAxxqPHhnkm8A%2BaV%2Fy7l%2FbKNRSJQnqqYfaOL0kZKoxRmTl1hEGrI9rAzj5RwsNz7Bh2rWuiG5mLVWzmdwS%2FvXLOODswKfAN69qghOWtT7tbcUNfOXZiRuD77lyeMykdwrT7J1C5fMWv6kOahHtBue7jny%2FphZ8MyTXpGi80abWXy3&X-Amz-Signature=8e7453a00972eb8453a75b7d1273d53416876a89f668252d1ea26761c6e5ae82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV2B3ALB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxN4xtVQ0ICmgkn0P7e8z1U%2BxPv5oDPSMm8d6mWOXAVAIhAP0aIoCFUoF3r1Rq8%2F7GM7GRNmmH79Q7P6U1PpcW3Y8kKv8DCB4QABoMNjM3NDIzMTgzODA1IgyhixMM%2Fzetmdc9xO0q3APTtsChBDUZGFzjaO%2FgX%2BaxWB9%2BPSjIPvM%2Ftj%2BnQGcbbN%2Fw5G8%2BhqcLvc%2BxaS4XY%2B5rWYjWkcTeiYClQ40vGO4swA5hRHfKWnEUdMgKV8tdNdBD2jzh2%2F%2FMqgJWNt%2FWBcsFJWaj0XOPDClsBP8H4m7hDhuc9hYAtmQg8MtlmPFpuvaPjHw%2B0E83my%2FyQ9JPpYCrrEbli7GSb22ExJbxgy3ISVoBdV9CWmfNfnf1E%2FbTkYu%2FxiBIQyFFkSLoXLM71WXYajaD6e3sJ4ATAfjpiBhMy5GD71%2FNF3kDlKPSci8TcbobqpR%2BholPCJNgROu6QTa%2Bt7X9FJEvcKktqIu4epEzf%2B9FXZU%2FxSbAm3i0WDMnMrKFjdqC%2FCV8vJYnyvoeGXm4C7BJ8aP7wCm17mfdeNeiZY7ezaWjnA3y5T65DkeqRzycll63a4E5VhgLjKa%2BLrrOcnOskcQEP3KeIzwGqLpi36adMqNdcikgfUBI5fLZYh%2F15VSE3%2F%2B5Fui%2BvWQnb596M%2BXmEuXWmL5I9gsRcPcLR1bCn1852OqEvOfE68zMu4qBFSwQu%2BJ5Q8%2FvraBsn8aRYdmqfGKysp5kFOHxb9PzcgSTphpA308P8bduR5FHdpWXQotrGrOu4nqOmTDCgLrEBjqkAR3s2R3aJ6%2BKnHVjUUwbdU24XnHux3SG8cz3LuHldvKGu9txAxxqPHhnkm8A%2BaV%2Fy7l%2FbKNRSJQnqqYfaOL0kZKoxRmTl1hEGrI9rAzj5RwsNz7Bh2rWuiG5mLVWzmdwS%2FvXLOODswKfAN69qghOWtT7tbcUNfOXZiRuD77lyeMykdwrT7J1C5fMWv6kOahHtBue7jny%2FphZ8MyTXpGi80abWXy3&X-Amz-Signature=4713f4fe99309a0b9f4b834b7f107752079c19f903bdf927f84aaa2d48ea4ef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV2B3ALB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxN4xtVQ0ICmgkn0P7e8z1U%2BxPv5oDPSMm8d6mWOXAVAIhAP0aIoCFUoF3r1Rq8%2F7GM7GRNmmH79Q7P6U1PpcW3Y8kKv8DCB4QABoMNjM3NDIzMTgzODA1IgyhixMM%2Fzetmdc9xO0q3APTtsChBDUZGFzjaO%2FgX%2BaxWB9%2BPSjIPvM%2Ftj%2BnQGcbbN%2Fw5G8%2BhqcLvc%2BxaS4XY%2B5rWYjWkcTeiYClQ40vGO4swA5hRHfKWnEUdMgKV8tdNdBD2jzh2%2F%2FMqgJWNt%2FWBcsFJWaj0XOPDClsBP8H4m7hDhuc9hYAtmQg8MtlmPFpuvaPjHw%2B0E83my%2FyQ9JPpYCrrEbli7GSb22ExJbxgy3ISVoBdV9CWmfNfnf1E%2FbTkYu%2FxiBIQyFFkSLoXLM71WXYajaD6e3sJ4ATAfjpiBhMy5GD71%2FNF3kDlKPSci8TcbobqpR%2BholPCJNgROu6QTa%2Bt7X9FJEvcKktqIu4epEzf%2B9FXZU%2FxSbAm3i0WDMnMrKFjdqC%2FCV8vJYnyvoeGXm4C7BJ8aP7wCm17mfdeNeiZY7ezaWjnA3y5T65DkeqRzycll63a4E5VhgLjKa%2BLrrOcnOskcQEP3KeIzwGqLpi36adMqNdcikgfUBI5fLZYh%2F15VSE3%2F%2B5Fui%2BvWQnb596M%2BXmEuXWmL5I9gsRcPcLR1bCn1852OqEvOfE68zMu4qBFSwQu%2BJ5Q8%2FvraBsn8aRYdmqfGKysp5kFOHxb9PzcgSTphpA308P8bduR5FHdpWXQotrGrOu4nqOmTDCgLrEBjqkAR3s2R3aJ6%2BKnHVjUUwbdU24XnHux3SG8cz3LuHldvKGu9txAxxqPHhnkm8A%2BaV%2Fy7l%2FbKNRSJQnqqYfaOL0kZKoxRmTl1hEGrI9rAzj5RwsNz7Bh2rWuiG5mLVWzmdwS%2FvXLOODswKfAN69qghOWtT7tbcUNfOXZiRuD77lyeMykdwrT7J1C5fMWv6kOahHtBue7jny%2FphZ8MyTXpGi80abWXy3&X-Amz-Signature=ca6224b3f0f3515aaec752331fd547dca6d7d2a2d6139ffd81d6bd646bb4fa16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T56B5OJC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQnsGtXY4TdUMhxLbcU3IqpF4ffYXOcnvEjJzi%2BZVEBwIgKcsQgqTBNd7BzLfTEMONTB6Iv6mGdf1GdNHrSiKElHUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDPq%2B9%2F4niSYqygsX6yrcA6SmFAfIQZdj1YaQk9Fu%2FoT2vwBbP8EmiP30S%2B3ZvE7yy4LUFBzkpMjtRAy%2F%2BvuYDfaoXb%2BCiKL8h%2Ft%2BBy0LuKaFSEbrH9sAlHRcazP%2FE0dSB7F0o1nRozUZ1PyYj%2Fbl22vUZF%2BosVFsPv32d2qPwoe7w2kfGP3VmR12HuPE3WZqyz6vcGMoBq%2BoVB98Unw0xThMc5Ie2OItn3xMygRTqiwwf%2B7qCes%2BtwZYAo0YAVElfTS3X7J6n3C62A1CpuoTxyONppLB54xPX3u5SScTfTIiGXvADbgboMsPKTdmbRj7UDwymIF9izJIJIiNvuhqRnfG0slB9OYi7JU5FToZsgLpwtA0iu%2BB0nX6sbPFgEeopa6%2FSqiIw8soEqOph2lOwANGKrHqwyDRPLavR8E4KRH7pCME1pobIrPoehpPhPMTpB%2BKzNKqSYWFXAIR%2F%2Fd4Md07zORaMv86AU0%2F5MZkDnuxMwSTSW%2FSaBoLbN2chLNTwPQXSzLbO1TJHjQhIb3t%2FYYvF7CgvcAHZV2zW3Ynghe%2BH%2FimkOf892jrsWYbxqAWkLQEva6nXzwzdn7Fu84c1T43oXzmJxI64Xp%2Fx5gLlu8lbrx9b3uapxZ0Vv2YAygF8iAsy%2BgPYCjYS0zCMK%2BAusQGOqUBv0FTRTX2M0LfBlJaWcWTuWnPQLMDuaf8wc7CQtq7JY5%2Bdm6g8M2AJUO6JbdzC0UEGIIa7mTPaxd80UFEVsqeL4tDGyxZ1E%2BAZXeq%2BV%2FVFLkedhm4UPPEryuEtZUh2zPojE3JlRSeSTVkiskHn3xDAEUODxx%2FOhFWaNS19X4tQ4TieyILAC1ZVHzdIEEn2t8ngWf9JzMmYAfZdUts8yi1RxD64iDx&X-Amz-Signature=fdb74e70bf052233f988651a40a449629707a87ce9eed1df0e0cfa81316b3ba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBMLAL3J%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC56qswWz5k1Ewyjt424K%2FJYUPo7N50Rg9VE5lBZ7CxxgIgCJ7Tv7Z%2B4WGTzmD4qB05dLI%2FFUC7fvWDyvywJJVOeb8q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKfD0Gna0P82ZJB4tSrcA2KHNwRj%2FyAJGpTjhGgYDklsx2KnPqPRo727dhnLoFJRGJ1nteHFV8n85O1IlumbGlVd86c10CQ3KgE9Dc%2Fjc34byKknTZLJA3i0Ow2st2fa0gME%2B%2FKainHQa9%2FnNVm%2FzEC9bT8RxzznoeiOep0uZdvOKX0JMBSBsjyE344mLWGJf%2BwU6qeEKdyWDVVZ0MO3TjfKgaFDNJEj8LhvKCjhoBn4yGpfNrs%2BsXYpVgyD79iw96e6LOk5BE8cr9DMvqoOTTBMGhImvHK%2BOtzRAWFnLWc8f2zJ2eP6hT9hMAqv818iVzPoPkUKhnQiNDDRJfGhqH%2FYiH1dDU9u5zJZRzmCjd0qGZru5xjo7d9R3xTKpWcfn6lIqY9aV18tBJfHh5%2BY%2FcG3v2OOgbtM6qCIyF0QhWsNw6muyvCxKewydeWwEV8d%2BS0J3XT7kekeySfS%2B75K1EjfadB7TiHXjrUUYJK7CKOynCWecnLL%2BMHW1oAk3WUoNu2L8ycgdwfp3bE%2BXa2tc627%2FgMCGhWYYTgsz0ragI1lXDAoCCbaGFryPE45dbWHrUna4VOvA4NSzCpKuLwpA0RWfY46ibhilSOevCuC6XktQQv9i%2F5Ewa7NbyTGb72W1dOBaDscM73Ni4BOMIyBusQGOqUBhOgn45ttfz4QrHVwO5hfLUkY8y%2BrE5YMv5yWem4QjPuRUdvC4ojV69ZiF9nn9klldvck3LIhGeUhJIWJ1hlh8r%2B9tGSC4fboE72WyMfmPBSwJyGCq%2FF2YxxWA%2FDCov9Fdbzp91hJ5CSATZwzAuipYFLV%2BGbFczh797%2FNG83Lc7cnDxS0eVqXZu5IXOdgR%2BNLPmHR0oogAKjdpNIkg4ILEBrrXjub&X-Amz-Signature=5515a0bb878b7da815ded00b5495c5a82df308d3fe4ddb851377f6577ccac2f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662H3GL6R%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKI7Ye3C15Pjqeg%2FRPLceP9%2FNTrhzuE6ZvzNGwCQNCPAiA%2BDmmYccp1%2BjELPnj%2BD9OOEcK55r%2FJSnbeuE7e8zz1HCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMiBW%2FSSl5E1PRnXRaKtwDh84gVe07%2Fs%2BWGfj%2BpwKE%2BWvfDKZUL5M%2BkRY%2FX7dMhjLNL6HQobyP2Kn1RqyjVAJJ1c9Dj1rzTrTKMlb95jMQgKkGw1cmvpdHYOzVQTDesh9RPIehBAoRnEuktpCuQyTTXPUEQpvDvSqNrofOninrQFUjxnCC3%2BR9uq08lfr9yNJq%2BuNslshIxxFni3UEHuQuSgMti1k3egatZlUbxe9R34qQP4EPD2F54209ojYCTCNsdYPjt%2F28xoWnWPM3hXW%2FsB4wlrLp79oOMZR%2BKntRiwG7EJ2vj%2B9BV%2BjVSQuvIBZA5IWDW63CXtIDhaIREVlQuXKNzF8PsbiNBoM%2BHtBSXuPsK6CS4ynt7CUQC1akzArR6X0D1YCd1X96I58xI9dvPQvYoJSkleAy4BG5Wqwol491bbBe78M1dtU%2BKXW%2BokVvz00adT0mDOKiRyo2siwBOFjyKpFL%2B3vRX6XeH%2BkJ0AGxsh6NyvgBm4bPrwR%2FzPKb7uf5iR9xWjcaTj0nKOi4tt7Y8hj07WeQjwaLuIPEGyw6uqphBMPVVRxXODQdvlhW5uReLSmP4bYKbgn1Kc3uPH6pDIaR1%2B92m6jEjHua6L92RaAv4bZfVVpnEBT6jhpSDLgZI1JFR%2B8X3How2YC6xAY6pgFz5DY3LwsjHOiFKdBnILxMH1y80bFMwqgdguhUuNGRfct%2FH0wja16zt4RLzK4r%2B3Xm91wglMjgJRLuJdfH5h8scgYuhn3K96r9f4Nc%2F7JMbdW8Q99xxZ7WgLK9NzNpdcu3MSyL7l%2FC0Efir%2BZknX%2Fvu72cLI6vmQLmzaOohAy2XPMlbBV0a2Y0SrtjsbouiDLrW9YAJ7Z6UJ1ahGzaC%2B5AjdMyU1au&X-Amz-Signature=3da65c242be50eb69244e6548286a9258a28365679412d531328314f078a4cf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV2B3ALB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxN4xtVQ0ICmgkn0P7e8z1U%2BxPv5oDPSMm8d6mWOXAVAIhAP0aIoCFUoF3r1Rq8%2F7GM7GRNmmH79Q7P6U1PpcW3Y8kKv8DCB4QABoMNjM3NDIzMTgzODA1IgyhixMM%2Fzetmdc9xO0q3APTtsChBDUZGFzjaO%2FgX%2BaxWB9%2BPSjIPvM%2Ftj%2BnQGcbbN%2Fw5G8%2BhqcLvc%2BxaS4XY%2B5rWYjWkcTeiYClQ40vGO4swA5hRHfKWnEUdMgKV8tdNdBD2jzh2%2F%2FMqgJWNt%2FWBcsFJWaj0XOPDClsBP8H4m7hDhuc9hYAtmQg8MtlmPFpuvaPjHw%2B0E83my%2FyQ9JPpYCrrEbli7GSb22ExJbxgy3ISVoBdV9CWmfNfnf1E%2FbTkYu%2FxiBIQyFFkSLoXLM71WXYajaD6e3sJ4ATAfjpiBhMy5GD71%2FNF3kDlKPSci8TcbobqpR%2BholPCJNgROu6QTa%2Bt7X9FJEvcKktqIu4epEzf%2B9FXZU%2FxSbAm3i0WDMnMrKFjdqC%2FCV8vJYnyvoeGXm4C7BJ8aP7wCm17mfdeNeiZY7ezaWjnA3y5T65DkeqRzycll63a4E5VhgLjKa%2BLrrOcnOskcQEP3KeIzwGqLpi36adMqNdcikgfUBI5fLZYh%2F15VSE3%2F%2B5Fui%2BvWQnb596M%2BXmEuXWmL5I9gsRcPcLR1bCn1852OqEvOfE68zMu4qBFSwQu%2BJ5Q8%2FvraBsn8aRYdmqfGKysp5kFOHxb9PzcgSTphpA308P8bduR5FHdpWXQotrGrOu4nqOmTDCgLrEBjqkAR3s2R3aJ6%2BKnHVjUUwbdU24XnHux3SG8cz3LuHldvKGu9txAxxqPHhnkm8A%2BaV%2Fy7l%2FbKNRSJQnqqYfaOL0kZKoxRmTl1hEGrI9rAzj5RwsNz7Bh2rWuiG5mLVWzmdwS%2FvXLOODswKfAN69qghOWtT7tbcUNfOXZiRuD77lyeMykdwrT7J1C5fMWv6kOahHtBue7jny%2FphZ8MyTXpGi80abWXy3&X-Amz-Signature=a82d4b5e4a78c7a2fe67e07a95963ec2040150b09c33c7dd1fd5a4a91b1edb29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKFNVVUY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKe4jp34hsLZBSZCBUd0H8%2FM%2FdbzD33DsmxebIAP5nagIgO%2FSlNPb4HyJUyFMyCyyx8avpXBrUq9%2BCXoSo4DgddG0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDOxyKbGNEJTqUARtgircA6c%2Fd9%2FADzaGn1UujOwKcX5P67YtERDIdBywTnU5xTzkPwOPIiHMdlB%2BxkfoWdCUfF5lbncXqD7f68DJ4780vS%2FQ6vPohcu2eZpEpjZi9yK%2BV9e3zUV717J%2BdM%2F2NejOJysIiIlycq9JWTyhNVSlhR4bpIuNbVU%2BiHCCaK3LCRf%2FrXY7cl4Ni9BAJ1fl7CkfHjmiyIlSwv4sW4uCgAyamTlwt4F5SOEpILgZkzNc1MoD4nDQKLVpM6xvbjIDm%2BEMsEFANT20r1QeUkIm0AyANkM10mDm8vvEWjk4Gr%2FivBsCnDSovzXJ%2F5W5u57DRC5D2Jp7JWdYyLCIXtSQtncLTpyUxwtyd0kUR0Btyb%2Boa9ErqNfhcncu8iHHY58wDcuIPPAYQkpnexGD1oydJR99brFFpqLQAStPszXsCUnIU4l9vuRa%2BIuAGG9fxFLdTeJItnUj6EqwTym%2FS01b7Ep1ftfw7UU%2Buh%2BlcvG1oEUtzC9ojg2JXMNz%2BH1PqAUCyRuonClYQdxDvTX1Yixj1HkC4QYoSEZtb%2B6ffnI6nGVgg3gsE6S5viqqxK8Trj8sA1GaXi2Uhr8lLbCvCOkLVxOao%2F5BOBTi3lUnHTXx89SR%2FMnQ04T%2BH5jH3MmjlNBTMLaAusQGOqUBsdRvnwriUIsOfR4w04Qu1oXrs4AVOgDsUOyh4qaCVbFYupo0wkpegsTotj4WepPSGcb63lccs9bljVP4508frg4W%2BOQsaxv3XjKuv6Ewo%2FgzBHAtVpGj8Ji8m3E63XqunUqXD2un1py%2FeDzyMKkrQPBzahmJ%2BeUu%2BFvWk8pgqkc5jOj2TvXqPSQZc4DR5vILx0jvDVUktyZdRqJI%2BdjzomvtN8Qy&X-Amz-Signature=a4a3b5b06f98d58a8a8683bc5d1beab103fd239dbb61e20363c671c76ca3c779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV2B3ALB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxN4xtVQ0ICmgkn0P7e8z1U%2BxPv5oDPSMm8d6mWOXAVAIhAP0aIoCFUoF3r1Rq8%2F7GM7GRNmmH79Q7P6U1PpcW3Y8kKv8DCB4QABoMNjM3NDIzMTgzODA1IgyhixMM%2Fzetmdc9xO0q3APTtsChBDUZGFzjaO%2FgX%2BaxWB9%2BPSjIPvM%2Ftj%2BnQGcbbN%2Fw5G8%2BhqcLvc%2BxaS4XY%2B5rWYjWkcTeiYClQ40vGO4swA5hRHfKWnEUdMgKV8tdNdBD2jzh2%2F%2FMqgJWNt%2FWBcsFJWaj0XOPDClsBP8H4m7hDhuc9hYAtmQg8MtlmPFpuvaPjHw%2B0E83my%2FyQ9JPpYCrrEbli7GSb22ExJbxgy3ISVoBdV9CWmfNfnf1E%2FbTkYu%2FxiBIQyFFkSLoXLM71WXYajaD6e3sJ4ATAfjpiBhMy5GD71%2FNF3kDlKPSci8TcbobqpR%2BholPCJNgROu6QTa%2Bt7X9FJEvcKktqIu4epEzf%2B9FXZU%2FxSbAm3i0WDMnMrKFjdqC%2FCV8vJYnyvoeGXm4C7BJ8aP7wCm17mfdeNeiZY7ezaWjnA3y5T65DkeqRzycll63a4E5VhgLjKa%2BLrrOcnOskcQEP3KeIzwGqLpi36adMqNdcikgfUBI5fLZYh%2F15VSE3%2F%2B5Fui%2BvWQnb596M%2BXmEuXWmL5I9gsRcPcLR1bCn1852OqEvOfE68zMu4qBFSwQu%2BJ5Q8%2FvraBsn8aRYdmqfGKysp5kFOHxb9PzcgSTphpA308P8bduR5FHdpWXQotrGrOu4nqOmTDCgLrEBjqkAR3s2R3aJ6%2BKnHVjUUwbdU24XnHux3SG8cz3LuHldvKGu9txAxxqPHhnkm8A%2BaV%2Fy7l%2FbKNRSJQnqqYfaOL0kZKoxRmTl1hEGrI9rAzj5RwsNz7Bh2rWuiG5mLVWzmdwS%2FvXLOODswKfAN69qghOWtT7tbcUNfOXZiRuD77lyeMykdwrT7J1C5fMWv6kOahHtBue7jny%2FphZ8MyTXpGi80abWXy3&X-Amz-Signature=098896dddb76469c3a6b06cdc20c5ae200789335d0bca51ef40544db80dd7d42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEEX7CYS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDz5Z6uJLBy15%2FZmTKWJWDSWaqNydUWjpoPSm4o1ltDyAiEAmP2JkgEdrEbEYNBG%2Fgj%2F8G75Tf4xPDrVvw8cBf7qHfMq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDAoqBpNMegYW4%2BQyvircA70mlkWYDC%2BGLlyNGe0gqJefGCghjXfJP7XmKuP9AveALxc6d%2BVDpdvv0J%2BDJ%2BenJJJlmbF93R7IfdcgmHIVw8M9awtadZ0WUtQoeb7ziNg8EB9ep8ThFFBwG4VHy8IO5JkzUdPR2JJpXT1T6pR3HzZQNWPIadkLmk17jTX4CbE07cscLagC%2B3CWFyVGr1Q6h6cV44rJYOHyeQ3XVcdnitelGXEknlR%2FYKrpDdz6bF5zzb26wfZLEEHN%2Bve1P6yEysTB2FuZKtYV14Tk8Pa%2FvDal7Lo%2FE7nBpBJw9Qtc7ZP3Xhu5j1vEvo9h4DYjF8NrZoEertMPEh4ArjPkZ5eGwT8eEAe8qH7pSwqy4RhPDu5DFlfOMuUNAufmVQF4Yr6vlMpy2HIAadnw00t5%2Fw9UoiHs6Bc30%2BoMz%2BIij4oLJD0iJ4Kjj%2BgoWJXbcnZmaX4DHfA%2BGdbBvAXZ0xQJ%2BGifhL6Nv8jaXVL1oHVmwfzdC3x1RzemL7xYKAxWn4EAbBbbvGoWvOLu9DWVnJZ6OSlA2vKkOphuM6LLoPfk%2FizMeQGpkaOKgnLPFjm4Cm7iiYDfcF6e0RCCVKPxldWNysxGEbJDJwViLMycUoDoG%2BhtoJjolnrlBwLUb%2BBVr7%2FCMJ6AusQGOqUB25SZbzqEUgSz1ckZU67HqsNm1344Uvj2fFdxjPD8h%2BYZCSoJgdT0%2FD3FPnPgKwD4la069%2F9iMZE%2FuWeR2XHxCHwuTP0q%2FWGIMafkcp9YnM4kDYDGuk1WRpKO99jYO%2Bffll4u2vz7bliAStMZDrGo3iuqJ4lzT7obPYfdtT2J%2BlfqG3eQMnMJceZv0YnvOaAy%2BbCommXn1aQzgN2sPm%2FnNSviQ33J&X-Amz-Signature=b8fc6af65cc20bd0f34030b0ce048b1c0ea9d2c22b67027dc2eb1389b3050d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV2B3ALB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxN4xtVQ0ICmgkn0P7e8z1U%2BxPv5oDPSMm8d6mWOXAVAIhAP0aIoCFUoF3r1Rq8%2F7GM7GRNmmH79Q7P6U1PpcW3Y8kKv8DCB4QABoMNjM3NDIzMTgzODA1IgyhixMM%2Fzetmdc9xO0q3APTtsChBDUZGFzjaO%2FgX%2BaxWB9%2BPSjIPvM%2Ftj%2BnQGcbbN%2Fw5G8%2BhqcLvc%2BxaS4XY%2B5rWYjWkcTeiYClQ40vGO4swA5hRHfKWnEUdMgKV8tdNdBD2jzh2%2F%2FMqgJWNt%2FWBcsFJWaj0XOPDClsBP8H4m7hDhuc9hYAtmQg8MtlmPFpuvaPjHw%2B0E83my%2FyQ9JPpYCrrEbli7GSb22ExJbxgy3ISVoBdV9CWmfNfnf1E%2FbTkYu%2FxiBIQyFFkSLoXLM71WXYajaD6e3sJ4ATAfjpiBhMy5GD71%2FNF3kDlKPSci8TcbobqpR%2BholPCJNgROu6QTa%2Bt7X9FJEvcKktqIu4epEzf%2B9FXZU%2FxSbAm3i0WDMnMrKFjdqC%2FCV8vJYnyvoeGXm4C7BJ8aP7wCm17mfdeNeiZY7ezaWjnA3y5T65DkeqRzycll63a4E5VhgLjKa%2BLrrOcnOskcQEP3KeIzwGqLpi36adMqNdcikgfUBI5fLZYh%2F15VSE3%2F%2B5Fui%2BvWQnb596M%2BXmEuXWmL5I9gsRcPcLR1bCn1852OqEvOfE68zMu4qBFSwQu%2BJ5Q8%2FvraBsn8aRYdmqfGKysp5kFOHxb9PzcgSTphpA308P8bduR5FHdpWXQotrGrOu4nqOmTDCgLrEBjqkAR3s2R3aJ6%2BKnHVjUUwbdU24XnHux3SG8cz3LuHldvKGu9txAxxqPHhnkm8A%2BaV%2Fy7l%2FbKNRSJQnqqYfaOL0kZKoxRmTl1hEGrI9rAzj5RwsNz7Bh2rWuiG5mLVWzmdwS%2FvXLOODswKfAN69qghOWtT7tbcUNfOXZiRuD77lyeMykdwrT7J1C5fMWv6kOahHtBue7jny%2FphZ8MyTXpGi80abWXy3&X-Amz-Signature=a59834b511a15cf3363133d3d206ee4895a4e49f4e3565b2bf069a68d86f756d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y24DY24W%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdXfUNIYhfneTBfm9GrOvjWDivQYLyy5VdkMi6gG12lAiB72roEssetYLEjpz5l1T9sHyCgWWf5eGSeqiDkyyteFyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMK%2BHoaFGGnMq8DkFrKtwD2CsWDBcf43zZFvdd0oWQC3u%2FXA377B3JN6qQF9I7vRF55QMxSwyODtYhtjugPO4CHhy9TsIYC%2FUwx%2Blm1v0VytdXem2jpqaQRsDt2ew06RaEk6CW%2BndmmlESs2RRXCflXr29y0s32%2F9IMSpgMdcK3PCQNdTs13mqKTwUiztTfYm52MrbCLss1tndZRN2YgiTxQZTyXxZNy5jtVl20MLSwLWD6oEOZn%2FxAuxFLS56QxRJCOhZtIIMOjhFtYLb5dPTwUQfNWf0kJyo62StxN%2F0nIbkAlWErBN%2FB7R%2BAACfWv2%2B0fVXXEloTTPpl40WECwIfb8zLS%2FdNRrCaNwQvBLthK1vTxS3IL%2Fqp9LycByQtmJVfwynP7p3MUY5z4fOlyPxRD715v0Mb0j8KZ557r48kTsugev3YpUb7O2yEiiW6NZ4PRI6kRuFFw8o2JVG2N73Xfrg1uDJJ%2FFfREIMwbwL7Jtwfh5Qtm7XLgdZLJ8Ad%2BbKXeKpApWkBfLF743%2BbW2VMJ%2B3DrvkcfYdNEoAQ%2BR0FQT18D5qY6kNSLzwmCdx571HoTwSj%2BTHKZVPi5BMUdDFsm%2BZlVbyntZlakV0ZpBtYYJWuyRXh4I4qnE3lMx338RoJfe8GAoO%2FTp7aTgwu4C6xAY6pgHc2suTTBHMpLrbfpKAoa2a6bvhDdXx9qgVj6DykvK7DoeZwP8aZv%2BJODnvxrxpQ4t%2FQbocIPoyQ0N%2BImHr1fG7jXfhccf4uQWzfHNF9PmgD1PAkjcWuo5%2BUcD%2BbNGGtktqKudgLr%2FRWBS9q0i867LB1Y8vgKXMnsNFzjZDOqszKLqlN43KkZlC3fEE6hIb2jwg1B%2BuRlad%2F5vwBVwXZ%2FDKdqtpFrk7&X-Amz-Signature=c435687050342a6e4fc8f56bef7ae55dacc1e7569e886e63a2bd9fc4027ff460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV2B3ALB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxN4xtVQ0ICmgkn0P7e8z1U%2BxPv5oDPSMm8d6mWOXAVAIhAP0aIoCFUoF3r1Rq8%2F7GM7GRNmmH79Q7P6U1PpcW3Y8kKv8DCB4QABoMNjM3NDIzMTgzODA1IgyhixMM%2Fzetmdc9xO0q3APTtsChBDUZGFzjaO%2FgX%2BaxWB9%2BPSjIPvM%2Ftj%2BnQGcbbN%2Fw5G8%2BhqcLvc%2BxaS4XY%2B5rWYjWkcTeiYClQ40vGO4swA5hRHfKWnEUdMgKV8tdNdBD2jzh2%2F%2FMqgJWNt%2FWBcsFJWaj0XOPDClsBP8H4m7hDhuc9hYAtmQg8MtlmPFpuvaPjHw%2B0E83my%2FyQ9JPpYCrrEbli7GSb22ExJbxgy3ISVoBdV9CWmfNfnf1E%2FbTkYu%2FxiBIQyFFkSLoXLM71WXYajaD6e3sJ4ATAfjpiBhMy5GD71%2FNF3kDlKPSci8TcbobqpR%2BholPCJNgROu6QTa%2Bt7X9FJEvcKktqIu4epEzf%2B9FXZU%2FxSbAm3i0WDMnMrKFjdqC%2FCV8vJYnyvoeGXm4C7BJ8aP7wCm17mfdeNeiZY7ezaWjnA3y5T65DkeqRzycll63a4E5VhgLjKa%2BLrrOcnOskcQEP3KeIzwGqLpi36adMqNdcikgfUBI5fLZYh%2F15VSE3%2F%2B5Fui%2BvWQnb596M%2BXmEuXWmL5I9gsRcPcLR1bCn1852OqEvOfE68zMu4qBFSwQu%2BJ5Q8%2FvraBsn8aRYdmqfGKysp5kFOHxb9PzcgSTphpA308P8bduR5FHdpWXQotrGrOu4nqOmTDCgLrEBjqkAR3s2R3aJ6%2BKnHVjUUwbdU24XnHux3SG8cz3LuHldvKGu9txAxxqPHhnkm8A%2BaV%2Fy7l%2FbKNRSJQnqqYfaOL0kZKoxRmTl1hEGrI9rAzj5RwsNz7Bh2rWuiG5mLVWzmdwS%2FvXLOODswKfAN69qghOWtT7tbcUNfOXZiRuD77lyeMykdwrT7J1C5fMWv6kOahHtBue7jny%2FphZ8MyTXpGi80abWXy3&X-Amz-Signature=28856466ae745b78a2e9fc9c5b85b31a777918aee5413f8ab18314e2725e10f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VO7XM2W%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFwkU6rTXfxvAbRDr7acHryUGXaO7gs3%2FDGHW94Idd1QIgapRLbY4YFLy8pWcLSTcskxQPxpX0JnRp6G8ubk27BK0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDEIx%2B8JWIFV%2B7EWuZSrcA7TJGKvc1awAKbEnHhmEopZ9wiOw1a41uLl%2FVcd1xIHmHH5hCEwFRe6ZqaK5eIYweMlLD3W1ng8cSvLjfQmibL%2FYpKCBjwpqY51%2BaEHoOas04%2BDFjGImEggtTwGo%2BziLclwSWXSZyAS5vW27Nf%2FAERQEZ5oW%2F4hxFlUEuxEcT%2BWVUcb7SXYn4tfwUjxNS1OVhu0HkIvU%2FvZrplJfErf0Gz52IV1fuv7c9pBW0KARhBGtVq%2F8GQ6wIzCpmlu4xzu8xA2RvdhkZLJvOBUzUQoce2vaI9ikutEUFw9SFKjJUORFgSdAtd8kUhi0ETOaFUZADAAu2rZBX7AAj842kNqKftFG%2BgooIvHAJb%2B6HOe%2FYS8rZagNgsqidRbsWpwvnxW61EMmAsm7rmiNLfZrjmoAFu31vV%2FPyIXl45rPLHoCb6QQ3oo1YpDjXiPh0n%2BJ96WRcxHldf6y9p1oZuILyI4IlZX12t%2FzMOlyzMh3AgL98rXAmOAP4B6%2BXyo2%2BVURzqU3sJa6byl5DYwH%2BMryMnuK0hXt%2FXdkK8kKSwe%2FhUCUqpRhbhnTKESlZe2spuueHsJVIbhCTwQfcXhx%2B7xcw6chVWso7fHxIVVFnqodvuSSaFgphEaT5iwZnod7KS6eMKuAusQGOqUBNZgYHmLFTDqBY3q%2FwPB8FIpAsh9YS2hQu9FSRD5Xd7lUt5Ndu7ZH0nJh5tNKu%2F82aH9O56ykMqi0U8JdtAKrfrelzz8IT1Cz9ytxDS31Qz%2Ffr4NrG69gmfk%2FguT306l0BrFTcp9cHyV6yxnptMtGrE5U0iKTB8VIKJws%2BkhmWI7mN5Tj1o%2FS9429FPRGcI3bRP5JULtnxwPuPRqO03uqlEkl462u&X-Amz-Signature=9238942afa128425d2062159b9a5e55a04443fbaa28c66ecf5f2a90094f0168c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA3JOLCC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZmBWgrZ3Flqg9uSY3E2120C5e8%2BGDe8IBbjY%2F12OvAAiBvjuwaXtRwDvRMWig93N9VPPvXMPoHvZAu5XkXF0uofSr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMqqaE3etRzw29a3vyKtwDtmT9yzRNDWnkDUundx%2BBbGxp3ZgmOl0D9YoyZOnHUEQ2%2BFRNpWmLYS%2B7zPaUSnFDsAXJiAHpie%2Fb9z50uMYhPGp8dmmI4018SngK4qoAHXZ%2FmVj4uIRniq8Ob2MfX9AOnTrrawysFEe0hsJLAsSKnSGBvNORpHhVnaymV3Qy8LUHsmYk842GRlOUhRnJWHPjyjOi%2Fgx9AI02L0rn18AODa%2FQynpv2JcmHR%2Bk8bWr%2F8ISLessud%2Ff1%2FC4g0k%2BPgygtG5YmQF3QxiRYqhAT%2Bqi2R%2BJV5xHfPMR72YiwDN9vXAq2i8Gz2mNfnQUWmxzq0X%2FKlOxWvAyLrIyIcqsk8Xpf3zAFMTcilDvtXCSQTH%2BJnH08bF1Q9H1hU2A8CpfhdpNpZH%2B16TOYMPNdrnhUu12t4S4H2oEoCy9IXXIw7%2FrCc26JgxBH2iy7mghUl1%2B1H23cAfskXwtq8dR0M57DitSWU7VSq8tmIdMZD0tP0GurmVnr0lBBxaKcjbc0kRxUNB8qYdH4m6uR3bxcdi0wz%2BElQb1QgPvWwEUF4VVVvkCtdvj%2B5KGtQJ4Gn3bntb7hAHQ9MyHuKt9awzfqZzf8oGPEDBjWDXZrOCHOVqeJvkYR0Q6LzTWdTeACR04rpYw1oC6xAY6pgFkivNSD9QAY%2FIJLIXTbVXwFMSVPsIgZ6wwZrZMLpD5dNAW8JMAadXee9XuPouoDzar9qm3HDlwQwEhCo4eQLB7%2FNoCFy61bpPfuXZKRrF5JUTJ82Z8DxofIprHZ6Fhw4y4BS6NAV4f7XfEp0pEtL4gby6HOxJvuIC0tfHm0G6iMUqm1nzneQi18eqPFMfVZORRN1tAHGUAB1xnJIUrUg7vJ7DgKCch&X-Amz-Signature=837ac1de1b311cc14b20560d4b8f24cff7f78127ab6355ea632eb6a5ebf0450c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMFMXGI4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtpVa0dFBniL8PDwFrsy998IeR5VLjfJUkx3PUENEhhAiBGNxAbmvD9JjHM7QMWByNQuSDCqojoc%2BL3cuEmWUiNcCr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMpuoDSEdUjRKBPKFXKtwDka98ingnVoGNzxUH%2FVTzGRDu7XujqC%2BpcXpiU%2FrkqtWaY7pBV41dfZUahLKlaCI6TqvtMRYa5tq93SCSI2rnEhCHYCKrK5O1dtv%2B9KJVPdnAT0UHnzOO7eSqPMHLA31IRM4wA0GlsdCdSzgMVOxi1y0Po8QlO1wqkYfqrdxRQ%2BFnpEUBBjihtaVssTk8RRjGbc9Eu1c3BK%2Ft5ePI4V5om7OABBzWAEKqX4i0v2t1%2Fa3mHtXXmSP0%2BR7p0wuqsQ3BkeRqeSziDIqrTKxGUDkKInU42UsNP1fXSbR%2FW0OXmWLolSNpHNPavJb9hYeWAoKI3dnJI3hJtt2kJ90HFViWYsSM9XGGZQbmOtrrlB91xlZfApBqf0HFz4pTX2j9m31392S2ZKY28XSP3iSzodNcioh61NzQmEi2KVMo%2Fe8BwTw5bbYYIHqQ0j4JaHYyByZYlLNMh1BrKQmGO5yvolBHfJ9t7tkVJGgXHaceBaHQ29WKHegxFXBAN4p%2FIRiF4%2FBv6EP%2FeY8PU4O0hKOaXwrg7R7K9ZZo8pUFF2SUYjDl11Yr5uhWId1OFXY9WvWunb1rp4ApuSVc4YCmQd79eFe%2Fsc9q%2ByMb3IPVujhaQIhr71ndagxtzO8zdddc8JAwnoC6xAY6pgET1rN3PRroFVgCVe%2BhEX4K32lKYqovnTgMutIzQ4mfgIZaJ16Tu2MKXQGvrImO3pQeM8C6o%2FpbIDK3LWlyKlKTacWkTCa%2F1MTKtwhmbHYwdPy5T8EIX8MZQSSs9ESapBoMPdK788qvqphqxjhRg5Umr7cIzge9ospuOGBd6D%2BuHn4hOwr5m5qcQMS%2Bj1XoHbvdbrjt5Jj1eiXCZVGi7DxSFXiqQouA&X-Amz-Signature=0f195d3499579dbab99bce3f7ad6bbb1bc70b32727ce8e92ce4c6a43fc7766c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CAH73TG%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZYDVDyuvV5NzuV%2B9yOluMaR%2F0Y3wWF0LAet3TZjE%2BuAiEA0V3ct5dQMWmrEjNOb50WEPB7%2FDEFUy0rtTyMv4%2F9jQ4q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDPMstsoIjQwXLAbyKCrcA7KnzLHYnKRXBP2HUw5K9yJEjuTcnBCwJPQbI3uvdtU97wAEjwBq3PHGpHSZocIOglwtkd%2FrSyujH2viBrUplS6s8clcrr9eU%2BATi4oRp1Qj03H5NpGLptxxwuxSAXWsz8LaLm1womijVt9lhqfkRyFgWb7RI%2BCOD8VitncT1UfRIENoucQf4JtUOemRv11sQd82Ivdq0bYhDIEtuXiAUCAzPiWgouK7McQm8TV%2F2irfsvGUt7ZoXtEynv1jDynzzjSgNjq9eod4H735oO7nBwr1haQ%2BV3rd7hp6NfaUBL0ujqHsDE%2BpRZPB4SqfwE3VrdiZmyR94vBThDjqKboSoSnVqxV9OWzSkbRNqhzi6SvK3WVx9CYUYPdPZEKAIzJacfMniZ9m65pw%2Bq7%2FIqSMKrXD9b6bs3ej%2FJ7IUKgE%2BX%2B9pYjnw7eh5QfoePCPK8EGBXsWr9hZ6ha8gI3uh%2FV28WYWzrI%2FqKKq6NNsLPcqWXgK8t2aT8cCNtQzgupQq806Pl2sydMeYJyhBCWIyiNd%2BrIFT0o28bY94DNYf1d8lltX4OwGR52Vac0fXINYW1B%2B1kLyKdWryhsi5cqZUUWcVNrIxUHWB7%2BHMykCnXBx4gcJsitWPpCjE2NW44m%2BMP2AusQGOqUBaI4LCRpj37uYCySds7D9MVndAYY1ZRxTemiB%2FXksaAdODAqvSYVWTRGanZuQdIzD797Ct8%2Fi2BAkuCVGH0gSquw9diV6I4pZMhIMqF8%2FbobA9Alxvt4fo7vQp1d8p69D%2Bkcz4qyuBpFKc1kL2KCmZvIX8TwfEq2h0xtMOY72ZTR4p8QHlMhX0J2tSa7Hjvf2FbbhBdblURs7cP5hdacCbBTupmSC&X-Amz-Signature=36c3659bb378f0bffc4252666174c0f22922b722dde7b5e4593f398b67c72156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGOKARXQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl9lYnoddHo%2BbTPEXZaqpM1UAebIx%2BoXsffrz7raT5aAIhAOU%2B6JBaldP0D6a6%2FBDlF8ZT8Btv1MCRCWDcrHePjPTXKv8DCB4QABoMNjM3NDIzMTgzODA1IgxCKT4tFHQQbhlMTakq3AOzH6tNpVpMHzNkr%2BWes04GEijDIQh7IaYGdaLpkBPWlsiM4xFQr4C1kksQOuWuh7Y0Hu4ac7PsFcrOVD220QLvcGByQSD0zBE%2FV%2FmexASDiN1nHy6twU2%2FjyXbiS%2FifaxsWIFf%2Fem2EwGipvDoxSkxzuyvY13uiy6%2BriszrLmbrNNwBaL20%2FFQux26zCLNoE0ysdKZJwrrvoy3u3OG1yvLqeZZSiSQI9PlOovtn66y6Q3O0B7XvC1lsMzt87PpXT6C%2FX1NadR0ZQ7vQqw4bAiMu4nSqRFzHg7a4q%2FNBepSRxDRSFPb9ErYj6Fb63bJRw%2Bz7bzzZ2qedPvnhpybCf6fUYlx1jO8kJVNegdWitVvNgjNXfMdNm8lknhv93shZ6pWUGNCpMfMTCOBfjLw1rj9CcemMFztM37oV%2BPFhek4lNzqgeNWNLrg2P1WtRVW8yNzc%2BPyHAYghnVjXiAn1ZAuiZu9OwiltXfg3zuSmv1PCnzDCch8jmIxIzq8%2BCZuJS9EEW%2FYKI4KNxh0pMF8lt1VGpuPYL%2Bj5JDJywGBz86aCESdGcU2b9uH%2BDnnaHCK65%2BleWh%2Fd8WxZnYag9jhHvFsCV7D1vmcFa7v%2Fu22KEsEXsAtI2EZKWcUsVP49TC2gLrEBjqkAZ9Acglaa5JeZj5N1iXJCd5JPYoojJQi4F644hA61WiJxHfKn3DCGTOlgFq69Ve1bNCX1CdceNa8Gz8EHmJ0TrnN0nKSuoPtICpH6qltqL19ATeMAgelv6hyOrvXkUXvKnLHgtCvdKHZOro3o8hFWakjlwT5HPIXtJVXP4LlXmv5RO3vT3dlUUrP0XLb9wq232qPuEN8j6NUzwBnqqhlgz66VlsS&X-Amz-Signature=2dfc96dd0854559cd1575afa64bdaa29f96ede53e095147977e31bfb0eef1375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV2B3ALB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxN4xtVQ0ICmgkn0P7e8z1U%2BxPv5oDPSMm8d6mWOXAVAIhAP0aIoCFUoF3r1Rq8%2F7GM7GRNmmH79Q7P6U1PpcW3Y8kKv8DCB4QABoMNjM3NDIzMTgzODA1IgyhixMM%2Fzetmdc9xO0q3APTtsChBDUZGFzjaO%2FgX%2BaxWB9%2BPSjIPvM%2Ftj%2BnQGcbbN%2Fw5G8%2BhqcLvc%2BxaS4XY%2B5rWYjWkcTeiYClQ40vGO4swA5hRHfKWnEUdMgKV8tdNdBD2jzh2%2F%2FMqgJWNt%2FWBcsFJWaj0XOPDClsBP8H4m7hDhuc9hYAtmQg8MtlmPFpuvaPjHw%2B0E83my%2FyQ9JPpYCrrEbli7GSb22ExJbxgy3ISVoBdV9CWmfNfnf1E%2FbTkYu%2FxiBIQyFFkSLoXLM71WXYajaD6e3sJ4ATAfjpiBhMy5GD71%2FNF3kDlKPSci8TcbobqpR%2BholPCJNgROu6QTa%2Bt7X9FJEvcKktqIu4epEzf%2B9FXZU%2FxSbAm3i0WDMnMrKFjdqC%2FCV8vJYnyvoeGXm4C7BJ8aP7wCm17mfdeNeiZY7ezaWjnA3y5T65DkeqRzycll63a4E5VhgLjKa%2BLrrOcnOskcQEP3KeIzwGqLpi36adMqNdcikgfUBI5fLZYh%2F15VSE3%2F%2B5Fui%2BvWQnb596M%2BXmEuXWmL5I9gsRcPcLR1bCn1852OqEvOfE68zMu4qBFSwQu%2BJ5Q8%2FvraBsn8aRYdmqfGKysp5kFOHxb9PzcgSTphpA308P8bduR5FHdpWXQotrGrOu4nqOmTDCgLrEBjqkAR3s2R3aJ6%2BKnHVjUUwbdU24XnHux3SG8cz3LuHldvKGu9txAxxqPHhnkm8A%2BaV%2Fy7l%2FbKNRSJQnqqYfaOL0kZKoxRmTl1hEGrI9rAzj5RwsNz7Bh2rWuiG5mLVWzmdwS%2FvXLOODswKfAN69qghOWtT7tbcUNfOXZiRuD77lyeMykdwrT7J1C5fMWv6kOahHtBue7jny%2FphZ8MyTXpGi80abWXy3&X-Amz-Signature=93b04caa9310f8f3f85c65f2377ed8e9b202f8163cce4f89313704ad0a281e58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV2B3ALB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxN4xtVQ0ICmgkn0P7e8z1U%2BxPv5oDPSMm8d6mWOXAVAIhAP0aIoCFUoF3r1Rq8%2F7GM7GRNmmH79Q7P6U1PpcW3Y8kKv8DCB4QABoMNjM3NDIzMTgzODA1IgyhixMM%2Fzetmdc9xO0q3APTtsChBDUZGFzjaO%2FgX%2BaxWB9%2BPSjIPvM%2Ftj%2BnQGcbbN%2Fw5G8%2BhqcLvc%2BxaS4XY%2B5rWYjWkcTeiYClQ40vGO4swA5hRHfKWnEUdMgKV8tdNdBD2jzh2%2F%2FMqgJWNt%2FWBcsFJWaj0XOPDClsBP8H4m7hDhuc9hYAtmQg8MtlmPFpuvaPjHw%2B0E83my%2FyQ9JPpYCrrEbli7GSb22ExJbxgy3ISVoBdV9CWmfNfnf1E%2FbTkYu%2FxiBIQyFFkSLoXLM71WXYajaD6e3sJ4ATAfjpiBhMy5GD71%2FNF3kDlKPSci8TcbobqpR%2BholPCJNgROu6QTa%2Bt7X9FJEvcKktqIu4epEzf%2B9FXZU%2FxSbAm3i0WDMnMrKFjdqC%2FCV8vJYnyvoeGXm4C7BJ8aP7wCm17mfdeNeiZY7ezaWjnA3y5T65DkeqRzycll63a4E5VhgLjKa%2BLrrOcnOskcQEP3KeIzwGqLpi36adMqNdcikgfUBI5fLZYh%2F15VSE3%2F%2B5Fui%2BvWQnb596M%2BXmEuXWmL5I9gsRcPcLR1bCn1852OqEvOfE68zMu4qBFSwQu%2BJ5Q8%2FvraBsn8aRYdmqfGKysp5kFOHxb9PzcgSTphpA308P8bduR5FHdpWXQotrGrOu4nqOmTDCgLrEBjqkAR3s2R3aJ6%2BKnHVjUUwbdU24XnHux3SG8cz3LuHldvKGu9txAxxqPHhnkm8A%2BaV%2Fy7l%2FbKNRSJQnqqYfaOL0kZKoxRmTl1hEGrI9rAzj5RwsNz7Bh2rWuiG5mLVWzmdwS%2FvXLOODswKfAN69qghOWtT7tbcUNfOXZiRuD77lyeMykdwrT7J1C5fMWv6kOahHtBue7jny%2FphZ8MyTXpGi80abWXy3&X-Amz-Signature=d0ad85358ad1399a92d0231749d4a0ead895a2a9dfd377b9bbcecc6a318cb35b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573SCUZN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKr2nO%2B7SU43jCcfInpMlqEeeZw4WQT%2FGiNpmLfgXg%2FQIgIzgNlok%2FNfjgZj2pEyuuJ12NtC8jhtrIQfbHkf8MkJIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIMoVj7xtFyB4fohmyrcAzXLN7MqsHZPi2NwxG1DRQohjuS0ubkfcwNf0HtDFPVOG22NKrKOH%2FW2Sk9cYCU6XO5Pw81SD2Dy4bIDjK8XbuEpnbgdmcyaZS4UEj34NEeGkXDY2TYcJdzA9DmeRXvb2iT4UBw15h3tNxPbmnAE83pAn2JkPR2t1ZAONiAQrcFFq9mRGTnoCdCcHhtf58yWqiJ3b4XRKbrUqP5umhh%2Fuh2C2j2AWEYwVwU9se5OCcBYT37v8JL5pUvqY%2B5H1LOvw5KJAoWIUPGMY114mxBHyf%2B8YG0IfTaY84gdwi8iNS3o9BouD%2FWAn%2B3qww4lCrKqN7kRO4VABOclCwI6oECmuGDPY%2FBBeC0jjNucCRP59nrgvaD8mI75Sb9rg6genICqhfczwpl3Yie6SyUXMnmeA6zZaOQ%2FJMnlzUITURmuaMOUMwHm1fM957%2BEqOjndI80%2FRclI3yLIqVOXGtacUoxSLR3aoD%2Bp0ej1MuUev9iWZw3A7RE5sWXO3T9oevxUW29x6%2Bp5cxVfOEblQNe8EgUFlFU0Uzu3LpHq9psYE%2FFIlhZgvDrh7W39o4SHcdbQ0iXKt9Xhh%2BNgUhVGfnP6brCxkHahRH6G5dJ1KiBAfDDZ43aC94me%2B0eMIxoqjnpMIiBusQGOqUBHyqT5EbgoGBHisbSMqVWu9j08UscNaf%2FT0loAeJ9no%2F3kyFvnnggESft9aIETHHNb%2Bd1J8%2FdUfCynJs%2BwVGqVKF3WL7V2zGIJf3vkMPQnFV5VbT0skU3NHJz0Yw8J5XmnhPRLQ%2BQXx3ZBucypE6GupBcfDO1diGQFHp6kmiAXdHzOw%2BgcShVN1njPpKAP8lFWSSKY%2BRIyRiANr7AJ3ZBopXgSeOl&X-Amz-Signature=06bce5dc775cd8261a610d0c5820c3f53f2df846c2c7442cd726b99c5f4378fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573SCUZN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKr2nO%2B7SU43jCcfInpMlqEeeZw4WQT%2FGiNpmLfgXg%2FQIgIzgNlok%2FNfjgZj2pEyuuJ12NtC8jhtrIQfbHkf8MkJIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIMoVj7xtFyB4fohmyrcAzXLN7MqsHZPi2NwxG1DRQohjuS0ubkfcwNf0HtDFPVOG22NKrKOH%2FW2Sk9cYCU6XO5Pw81SD2Dy4bIDjK8XbuEpnbgdmcyaZS4UEj34NEeGkXDY2TYcJdzA9DmeRXvb2iT4UBw15h3tNxPbmnAE83pAn2JkPR2t1ZAONiAQrcFFq9mRGTnoCdCcHhtf58yWqiJ3b4XRKbrUqP5umhh%2Fuh2C2j2AWEYwVwU9se5OCcBYT37v8JL5pUvqY%2B5H1LOvw5KJAoWIUPGMY114mxBHyf%2B8YG0IfTaY84gdwi8iNS3o9BouD%2FWAn%2B3qww4lCrKqN7kRO4VABOclCwI6oECmuGDPY%2FBBeC0jjNucCRP59nrgvaD8mI75Sb9rg6genICqhfczwpl3Yie6SyUXMnmeA6zZaOQ%2FJMnlzUITURmuaMOUMwHm1fM957%2BEqOjndI80%2FRclI3yLIqVOXGtacUoxSLR3aoD%2Bp0ej1MuUev9iWZw3A7RE5sWXO3T9oevxUW29x6%2Bp5cxVfOEblQNe8EgUFlFU0Uzu3LpHq9psYE%2FFIlhZgvDrh7W39o4SHcdbQ0iXKt9Xhh%2BNgUhVGfnP6brCxkHahRH6G5dJ1KiBAfDDZ43aC94me%2B0eMIxoqjnpMIiBusQGOqUBHyqT5EbgoGBHisbSMqVWu9j08UscNaf%2FT0loAeJ9no%2F3kyFvnnggESft9aIETHHNb%2Bd1J8%2FdUfCynJs%2BwVGqVKF3WL7V2zGIJf3vkMPQnFV5VbT0skU3NHJz0Yw8J5XmnhPRLQ%2BQXx3ZBucypE6GupBcfDO1diGQFHp6kmiAXdHzOw%2BgcShVN1njPpKAP8lFWSSKY%2BRIyRiANr7AJ3ZBopXgSeOl&X-Amz-Signature=9a359816aee96bcbddc0269a69c26c692e7f1dab4176312024131788ba159515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573SCUZN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKr2nO%2B7SU43jCcfInpMlqEeeZw4WQT%2FGiNpmLfgXg%2FQIgIzgNlok%2FNfjgZj2pEyuuJ12NtC8jhtrIQfbHkf8MkJIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIMoVj7xtFyB4fohmyrcAzXLN7MqsHZPi2NwxG1DRQohjuS0ubkfcwNf0HtDFPVOG22NKrKOH%2FW2Sk9cYCU6XO5Pw81SD2Dy4bIDjK8XbuEpnbgdmcyaZS4UEj34NEeGkXDY2TYcJdzA9DmeRXvb2iT4UBw15h3tNxPbmnAE83pAn2JkPR2t1ZAONiAQrcFFq9mRGTnoCdCcHhtf58yWqiJ3b4XRKbrUqP5umhh%2Fuh2C2j2AWEYwVwU9se5OCcBYT37v8JL5pUvqY%2B5H1LOvw5KJAoWIUPGMY114mxBHyf%2B8YG0IfTaY84gdwi8iNS3o9BouD%2FWAn%2B3qww4lCrKqN7kRO4VABOclCwI6oECmuGDPY%2FBBeC0jjNucCRP59nrgvaD8mI75Sb9rg6genICqhfczwpl3Yie6SyUXMnmeA6zZaOQ%2FJMnlzUITURmuaMOUMwHm1fM957%2BEqOjndI80%2FRclI3yLIqVOXGtacUoxSLR3aoD%2Bp0ej1MuUev9iWZw3A7RE5sWXO3T9oevxUW29x6%2Bp5cxVfOEblQNe8EgUFlFU0Uzu3LpHq9psYE%2FFIlhZgvDrh7W39o4SHcdbQ0iXKt9Xhh%2BNgUhVGfnP6brCxkHahRH6G5dJ1KiBAfDDZ43aC94me%2B0eMIxoqjnpMIiBusQGOqUBHyqT5EbgoGBHisbSMqVWu9j08UscNaf%2FT0loAeJ9no%2F3kyFvnnggESft9aIETHHNb%2Bd1J8%2FdUfCynJs%2BwVGqVKF3WL7V2zGIJf3vkMPQnFV5VbT0skU3NHJz0Yw8J5XmnhPRLQ%2BQXx3ZBucypE6GupBcfDO1diGQFHp6kmiAXdHzOw%2BgcShVN1njPpKAP8lFWSSKY%2BRIyRiANr7AJ3ZBopXgSeOl&X-Amz-Signature=f52fcdab273ede6b5179f8409acfcc02a3d89a1bff0024c377acf7f1e5f88aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573SCUZN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKr2nO%2B7SU43jCcfInpMlqEeeZw4WQT%2FGiNpmLfgXg%2FQIgIzgNlok%2FNfjgZj2pEyuuJ12NtC8jhtrIQfbHkf8MkJIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIMoVj7xtFyB4fohmyrcAzXLN7MqsHZPi2NwxG1DRQohjuS0ubkfcwNf0HtDFPVOG22NKrKOH%2FW2Sk9cYCU6XO5Pw81SD2Dy4bIDjK8XbuEpnbgdmcyaZS4UEj34NEeGkXDY2TYcJdzA9DmeRXvb2iT4UBw15h3tNxPbmnAE83pAn2JkPR2t1ZAONiAQrcFFq9mRGTnoCdCcHhtf58yWqiJ3b4XRKbrUqP5umhh%2Fuh2C2j2AWEYwVwU9se5OCcBYT37v8JL5pUvqY%2B5H1LOvw5KJAoWIUPGMY114mxBHyf%2B8YG0IfTaY84gdwi8iNS3o9BouD%2FWAn%2B3qww4lCrKqN7kRO4VABOclCwI6oECmuGDPY%2FBBeC0jjNucCRP59nrgvaD8mI75Sb9rg6genICqhfczwpl3Yie6SyUXMnmeA6zZaOQ%2FJMnlzUITURmuaMOUMwHm1fM957%2BEqOjndI80%2FRclI3yLIqVOXGtacUoxSLR3aoD%2Bp0ej1MuUev9iWZw3A7RE5sWXO3T9oevxUW29x6%2Bp5cxVfOEblQNe8EgUFlFU0Uzu3LpHq9psYE%2FFIlhZgvDrh7W39o4SHcdbQ0iXKt9Xhh%2BNgUhVGfnP6brCxkHahRH6G5dJ1KiBAfDDZ43aC94me%2B0eMIxoqjnpMIiBusQGOqUBHyqT5EbgoGBHisbSMqVWu9j08UscNaf%2FT0loAeJ9no%2F3kyFvnnggESft9aIETHHNb%2Bd1J8%2FdUfCynJs%2BwVGqVKF3WL7V2zGIJf3vkMPQnFV5VbT0skU3NHJz0Yw8J5XmnhPRLQ%2BQXx3ZBucypE6GupBcfDO1diGQFHp6kmiAXdHzOw%2BgcShVN1njPpKAP8lFWSSKY%2BRIyRiANr7AJ3ZBopXgSeOl&X-Amz-Signature=daf92422c8cb1202bb4ce0ac6d006a67ae449e3682ae73737533bb4e4d31e80e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573SCUZN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKr2nO%2B7SU43jCcfInpMlqEeeZw4WQT%2FGiNpmLfgXg%2FQIgIzgNlok%2FNfjgZj2pEyuuJ12NtC8jhtrIQfbHkf8MkJIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIMoVj7xtFyB4fohmyrcAzXLN7MqsHZPi2NwxG1DRQohjuS0ubkfcwNf0HtDFPVOG22NKrKOH%2FW2Sk9cYCU6XO5Pw81SD2Dy4bIDjK8XbuEpnbgdmcyaZS4UEj34NEeGkXDY2TYcJdzA9DmeRXvb2iT4UBw15h3tNxPbmnAE83pAn2JkPR2t1ZAONiAQrcFFq9mRGTnoCdCcHhtf58yWqiJ3b4XRKbrUqP5umhh%2Fuh2C2j2AWEYwVwU9se5OCcBYT37v8JL5pUvqY%2B5H1LOvw5KJAoWIUPGMY114mxBHyf%2B8YG0IfTaY84gdwi8iNS3o9BouD%2FWAn%2B3qww4lCrKqN7kRO4VABOclCwI6oECmuGDPY%2FBBeC0jjNucCRP59nrgvaD8mI75Sb9rg6genICqhfczwpl3Yie6SyUXMnmeA6zZaOQ%2FJMnlzUITURmuaMOUMwHm1fM957%2BEqOjndI80%2FRclI3yLIqVOXGtacUoxSLR3aoD%2Bp0ej1MuUev9iWZw3A7RE5sWXO3T9oevxUW29x6%2Bp5cxVfOEblQNe8EgUFlFU0Uzu3LpHq9psYE%2FFIlhZgvDrh7W39o4SHcdbQ0iXKt9Xhh%2BNgUhVGfnP6brCxkHahRH6G5dJ1KiBAfDDZ43aC94me%2B0eMIxoqjnpMIiBusQGOqUBHyqT5EbgoGBHisbSMqVWu9j08UscNaf%2FT0loAeJ9no%2F3kyFvnnggESft9aIETHHNb%2Bd1J8%2FdUfCynJs%2BwVGqVKF3WL7V2zGIJf3vkMPQnFV5VbT0skU3NHJz0Yw8J5XmnhPRLQ%2BQXx3ZBucypE6GupBcfDO1diGQFHp6kmiAXdHzOw%2BgcShVN1njPpKAP8lFWSSKY%2BRIyRiANr7AJ3ZBopXgSeOl&X-Amz-Signature=516d9c42615ac6e7f753679d3edded8295295d058028a3363106f2447d426b4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573SCUZN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKr2nO%2B7SU43jCcfInpMlqEeeZw4WQT%2FGiNpmLfgXg%2FQIgIzgNlok%2FNfjgZj2pEyuuJ12NtC8jhtrIQfbHkf8MkJIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIMoVj7xtFyB4fohmyrcAzXLN7MqsHZPi2NwxG1DRQohjuS0ubkfcwNf0HtDFPVOG22NKrKOH%2FW2Sk9cYCU6XO5Pw81SD2Dy4bIDjK8XbuEpnbgdmcyaZS4UEj34NEeGkXDY2TYcJdzA9DmeRXvb2iT4UBw15h3tNxPbmnAE83pAn2JkPR2t1ZAONiAQrcFFq9mRGTnoCdCcHhtf58yWqiJ3b4XRKbrUqP5umhh%2Fuh2C2j2AWEYwVwU9se5OCcBYT37v8JL5pUvqY%2B5H1LOvw5KJAoWIUPGMY114mxBHyf%2B8YG0IfTaY84gdwi8iNS3o9BouD%2FWAn%2B3qww4lCrKqN7kRO4VABOclCwI6oECmuGDPY%2FBBeC0jjNucCRP59nrgvaD8mI75Sb9rg6genICqhfczwpl3Yie6SyUXMnmeA6zZaOQ%2FJMnlzUITURmuaMOUMwHm1fM957%2BEqOjndI80%2FRclI3yLIqVOXGtacUoxSLR3aoD%2Bp0ej1MuUev9iWZw3A7RE5sWXO3T9oevxUW29x6%2Bp5cxVfOEblQNe8EgUFlFU0Uzu3LpHq9psYE%2FFIlhZgvDrh7W39o4SHcdbQ0iXKt9Xhh%2BNgUhVGfnP6brCxkHahRH6G5dJ1KiBAfDDZ43aC94me%2B0eMIxoqjnpMIiBusQGOqUBHyqT5EbgoGBHisbSMqVWu9j08UscNaf%2FT0loAeJ9no%2F3kyFvnnggESft9aIETHHNb%2Bd1J8%2FdUfCynJs%2BwVGqVKF3WL7V2zGIJf3vkMPQnFV5VbT0skU3NHJz0Yw8J5XmnhPRLQ%2BQXx3ZBucypE6GupBcfDO1diGQFHp6kmiAXdHzOw%2BgcShVN1njPpKAP8lFWSSKY%2BRIyRiANr7AJ3ZBopXgSeOl&X-Amz-Signature=f08901613d5b35c9d8d3b2d84f2c46231a983d0f2456608765e3162cb36b5d05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573SCUZN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKr2nO%2B7SU43jCcfInpMlqEeeZw4WQT%2FGiNpmLfgXg%2FQIgIzgNlok%2FNfjgZj2pEyuuJ12NtC8jhtrIQfbHkf8MkJIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIMoVj7xtFyB4fohmyrcAzXLN7MqsHZPi2NwxG1DRQohjuS0ubkfcwNf0HtDFPVOG22NKrKOH%2FW2Sk9cYCU6XO5Pw81SD2Dy4bIDjK8XbuEpnbgdmcyaZS4UEj34NEeGkXDY2TYcJdzA9DmeRXvb2iT4UBw15h3tNxPbmnAE83pAn2JkPR2t1ZAONiAQrcFFq9mRGTnoCdCcHhtf58yWqiJ3b4XRKbrUqP5umhh%2Fuh2C2j2AWEYwVwU9se5OCcBYT37v8JL5pUvqY%2B5H1LOvw5KJAoWIUPGMY114mxBHyf%2B8YG0IfTaY84gdwi8iNS3o9BouD%2FWAn%2B3qww4lCrKqN7kRO4VABOclCwI6oECmuGDPY%2FBBeC0jjNucCRP59nrgvaD8mI75Sb9rg6genICqhfczwpl3Yie6SyUXMnmeA6zZaOQ%2FJMnlzUITURmuaMOUMwHm1fM957%2BEqOjndI80%2FRclI3yLIqVOXGtacUoxSLR3aoD%2Bp0ej1MuUev9iWZw3A7RE5sWXO3T9oevxUW29x6%2Bp5cxVfOEblQNe8EgUFlFU0Uzu3LpHq9psYE%2FFIlhZgvDrh7W39o4SHcdbQ0iXKt9Xhh%2BNgUhVGfnP6brCxkHahRH6G5dJ1KiBAfDDZ43aC94me%2B0eMIxoqjnpMIiBusQGOqUBHyqT5EbgoGBHisbSMqVWu9j08UscNaf%2FT0loAeJ9no%2F3kyFvnnggESft9aIETHHNb%2Bd1J8%2FdUfCynJs%2BwVGqVKF3WL7V2zGIJf3vkMPQnFV5VbT0skU3NHJz0Yw8J5XmnhPRLQ%2BQXx3ZBucypE6GupBcfDO1diGQFHp6kmiAXdHzOw%2BgcShVN1njPpKAP8lFWSSKY%2BRIyRiANr7AJ3ZBopXgSeOl&X-Amz-Signature=f52fcdab273ede6b5179f8409acfcc02a3d89a1bff0024c377acf7f1e5f88aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573SCUZN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKr2nO%2B7SU43jCcfInpMlqEeeZw4WQT%2FGiNpmLfgXg%2FQIgIzgNlok%2FNfjgZj2pEyuuJ12NtC8jhtrIQfbHkf8MkJIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIMoVj7xtFyB4fohmyrcAzXLN7MqsHZPi2NwxG1DRQohjuS0ubkfcwNf0HtDFPVOG22NKrKOH%2FW2Sk9cYCU6XO5Pw81SD2Dy4bIDjK8XbuEpnbgdmcyaZS4UEj34NEeGkXDY2TYcJdzA9DmeRXvb2iT4UBw15h3tNxPbmnAE83pAn2JkPR2t1ZAONiAQrcFFq9mRGTnoCdCcHhtf58yWqiJ3b4XRKbrUqP5umhh%2Fuh2C2j2AWEYwVwU9se5OCcBYT37v8JL5pUvqY%2B5H1LOvw5KJAoWIUPGMY114mxBHyf%2B8YG0IfTaY84gdwi8iNS3o9BouD%2FWAn%2B3qww4lCrKqN7kRO4VABOclCwI6oECmuGDPY%2FBBeC0jjNucCRP59nrgvaD8mI75Sb9rg6genICqhfczwpl3Yie6SyUXMnmeA6zZaOQ%2FJMnlzUITURmuaMOUMwHm1fM957%2BEqOjndI80%2FRclI3yLIqVOXGtacUoxSLR3aoD%2Bp0ej1MuUev9iWZw3A7RE5sWXO3T9oevxUW29x6%2Bp5cxVfOEblQNe8EgUFlFU0Uzu3LpHq9psYE%2FFIlhZgvDrh7W39o4SHcdbQ0iXKt9Xhh%2BNgUhVGfnP6brCxkHahRH6G5dJ1KiBAfDDZ43aC94me%2B0eMIxoqjnpMIiBusQGOqUBHyqT5EbgoGBHisbSMqVWu9j08UscNaf%2FT0loAeJ9no%2F3kyFvnnggESft9aIETHHNb%2Bd1J8%2FdUfCynJs%2BwVGqVKF3WL7V2zGIJf3vkMPQnFV5VbT0skU3NHJz0Yw8J5XmnhPRLQ%2BQXx3ZBucypE6GupBcfDO1diGQFHp6kmiAXdHzOw%2BgcShVN1njPpKAP8lFWSSKY%2BRIyRiANr7AJ3ZBopXgSeOl&X-Amz-Signature=5cab7a4960911ac70b29bd5c85ba5b4f5f36386efeff6a4ddd89a11403fd57aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573SCUZN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKr2nO%2B7SU43jCcfInpMlqEeeZw4WQT%2FGiNpmLfgXg%2FQIgIzgNlok%2FNfjgZj2pEyuuJ12NtC8jhtrIQfbHkf8MkJIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIMoVj7xtFyB4fohmyrcAzXLN7MqsHZPi2NwxG1DRQohjuS0ubkfcwNf0HtDFPVOG22NKrKOH%2FW2Sk9cYCU6XO5Pw81SD2Dy4bIDjK8XbuEpnbgdmcyaZS4UEj34NEeGkXDY2TYcJdzA9DmeRXvb2iT4UBw15h3tNxPbmnAE83pAn2JkPR2t1ZAONiAQrcFFq9mRGTnoCdCcHhtf58yWqiJ3b4XRKbrUqP5umhh%2Fuh2C2j2AWEYwVwU9se5OCcBYT37v8JL5pUvqY%2B5H1LOvw5KJAoWIUPGMY114mxBHyf%2B8YG0IfTaY84gdwi8iNS3o9BouD%2FWAn%2B3qww4lCrKqN7kRO4VABOclCwI6oECmuGDPY%2FBBeC0jjNucCRP59nrgvaD8mI75Sb9rg6genICqhfczwpl3Yie6SyUXMnmeA6zZaOQ%2FJMnlzUITURmuaMOUMwHm1fM957%2BEqOjndI80%2FRclI3yLIqVOXGtacUoxSLR3aoD%2Bp0ej1MuUev9iWZw3A7RE5sWXO3T9oevxUW29x6%2Bp5cxVfOEblQNe8EgUFlFU0Uzu3LpHq9psYE%2FFIlhZgvDrh7W39o4SHcdbQ0iXKt9Xhh%2BNgUhVGfnP6brCxkHahRH6G5dJ1KiBAfDDZ43aC94me%2B0eMIxoqjnpMIiBusQGOqUBHyqT5EbgoGBHisbSMqVWu9j08UscNaf%2FT0loAeJ9no%2F3kyFvnnggESft9aIETHHNb%2Bd1J8%2FdUfCynJs%2BwVGqVKF3WL7V2zGIJf3vkMPQnFV5VbT0skU3NHJz0Yw8J5XmnhPRLQ%2BQXx3ZBucypE6GupBcfDO1diGQFHp6kmiAXdHzOw%2BgcShVN1njPpKAP8lFWSSKY%2BRIyRiANr7AJ3ZBopXgSeOl&X-Amz-Signature=d4b78448ffe1f3d96b118a46da13cdfcff40f288bdec0278df1fdc53b0772136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573SCUZN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKr2nO%2B7SU43jCcfInpMlqEeeZw4WQT%2FGiNpmLfgXg%2FQIgIzgNlok%2FNfjgZj2pEyuuJ12NtC8jhtrIQfbHkf8MkJIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIMoVj7xtFyB4fohmyrcAzXLN7MqsHZPi2NwxG1DRQohjuS0ubkfcwNf0HtDFPVOG22NKrKOH%2FW2Sk9cYCU6XO5Pw81SD2Dy4bIDjK8XbuEpnbgdmcyaZS4UEj34NEeGkXDY2TYcJdzA9DmeRXvb2iT4UBw15h3tNxPbmnAE83pAn2JkPR2t1ZAONiAQrcFFq9mRGTnoCdCcHhtf58yWqiJ3b4XRKbrUqP5umhh%2Fuh2C2j2AWEYwVwU9se5OCcBYT37v8JL5pUvqY%2B5H1LOvw5KJAoWIUPGMY114mxBHyf%2B8YG0IfTaY84gdwi8iNS3o9BouD%2FWAn%2B3qww4lCrKqN7kRO4VABOclCwI6oECmuGDPY%2FBBeC0jjNucCRP59nrgvaD8mI75Sb9rg6genICqhfczwpl3Yie6SyUXMnmeA6zZaOQ%2FJMnlzUITURmuaMOUMwHm1fM957%2BEqOjndI80%2FRclI3yLIqVOXGtacUoxSLR3aoD%2Bp0ej1MuUev9iWZw3A7RE5sWXO3T9oevxUW29x6%2Bp5cxVfOEblQNe8EgUFlFU0Uzu3LpHq9psYE%2FFIlhZgvDrh7W39o4SHcdbQ0iXKt9Xhh%2BNgUhVGfnP6brCxkHahRH6G5dJ1KiBAfDDZ43aC94me%2B0eMIxoqjnpMIiBusQGOqUBHyqT5EbgoGBHisbSMqVWu9j08UscNaf%2FT0loAeJ9no%2F3kyFvnnggESft9aIETHHNb%2Bd1J8%2FdUfCynJs%2BwVGqVKF3WL7V2zGIJf3vkMPQnFV5VbT0skU3NHJz0Yw8J5XmnhPRLQ%2BQXx3ZBucypE6GupBcfDO1diGQFHp6kmiAXdHzOw%2BgcShVN1njPpKAP8lFWSSKY%2BRIyRiANr7AJ3ZBopXgSeOl&X-Amz-Signature=45a135def9c1b95c79ba81c2e84b13a237d1fa759c352b350398cdb9c4257e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
