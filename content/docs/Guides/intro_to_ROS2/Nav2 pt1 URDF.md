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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB3I6QBT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbg%2B1h5AdngiAugYctSkoLvb4%2B4PSeS9GpVFLWdlLjZwIhALVMyCQ8ejMqEcKY8JE2h2X9FK27mNU0BomFOXLLlfWfKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWQJ0INXe5o2NuPyUq3AMUjC5vfCZR5jUdVLaLdAJyGrU0CB7jYNDab8H9Ykx5Kcm9KT%2F0I1%2BVGPKVA2fwnCAwtZmHubB2I9ic4M2NlayQsggsXtehft%2FpBEzTa3Z2qtMgOyCKT3jDXS%2FwG9zW0hvubjxWmsiM5jQKoRfYd156HJc99px2Snivubb1ZjNtmeZdjvEk72ZSEEh4jmDXK194rhZGn9qvxEvZLAzWJbgJiIPcclES9GmQTT9vY01g3%2FO1fT4XsvJEQfggJ2iCk%2FbvVXcCJgGABrSnMlKCT56nKiJX8InazkeHKULsvySQ4QboGW63IiHy1JmdR8yy%2BKPCvTZVqX3Ph9yOr0zBuRWttoEX01qijVcB9M7VjtGY1eDvnzcSITSEDEO%2Bui1WBuyVZPxSNABgeD5qx3ytyAB8mSfvn5eAhEcVqAH0NWx9IpmXeOHIQcM8rGX6xQzlRRaRWdpOFDtx91Xyv727p4ny%2BRil325lNJncAQEfI%2Bd0r9XIlQHPTWl2w4A02EDYJ5Iq7DO%2F4%2BFf5vlfrL1ZVn8UjaLc69bv611k4IeedBJHiN0BwoslOnNa7EnKoaFZnaR%2F5BAJ%2FnLNdjoMpjr0NqF1hrPM%2FVE%2FObzFxtXbyso5fREBG6D07bvkivhbeTD%2FoqjEBjqkAca1X6CkjqDqh5yNtmvcn5KkliEMNwHBxLUxrtiIyZQLDu27gtFhejvVLW1ZjAbQ7h6qzAmOBCMJyZ6c6swMc29yDVbYNaN5nskZ335AwZLNynfF1WyqlVBAzhXtW10iFhRXMA2nktgDpqQ1HBkRuMrxUEze0ePu7KuekLIpxKRGnC%2BtFOg6YBR3cTJ7qMLDKUl9mkfuWcz1lwqBh9FJVPnqPEz9&X-Amz-Signature=90d85d6f900255d29b8fb2daab3d665199734cfed1632c0a0aa2c16a630f02a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB3I6QBT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbg%2B1h5AdngiAugYctSkoLvb4%2B4PSeS9GpVFLWdlLjZwIhALVMyCQ8ejMqEcKY8JE2h2X9FK27mNU0BomFOXLLlfWfKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWQJ0INXe5o2NuPyUq3AMUjC5vfCZR5jUdVLaLdAJyGrU0CB7jYNDab8H9Ykx5Kcm9KT%2F0I1%2BVGPKVA2fwnCAwtZmHubB2I9ic4M2NlayQsggsXtehft%2FpBEzTa3Z2qtMgOyCKT3jDXS%2FwG9zW0hvubjxWmsiM5jQKoRfYd156HJc99px2Snivubb1ZjNtmeZdjvEk72ZSEEh4jmDXK194rhZGn9qvxEvZLAzWJbgJiIPcclES9GmQTT9vY01g3%2FO1fT4XsvJEQfggJ2iCk%2FbvVXcCJgGABrSnMlKCT56nKiJX8InazkeHKULsvySQ4QboGW63IiHy1JmdR8yy%2BKPCvTZVqX3Ph9yOr0zBuRWttoEX01qijVcB9M7VjtGY1eDvnzcSITSEDEO%2Bui1WBuyVZPxSNABgeD5qx3ytyAB8mSfvn5eAhEcVqAH0NWx9IpmXeOHIQcM8rGX6xQzlRRaRWdpOFDtx91Xyv727p4ny%2BRil325lNJncAQEfI%2Bd0r9XIlQHPTWl2w4A02EDYJ5Iq7DO%2F4%2BFf5vlfrL1ZVn8UjaLc69bv611k4IeedBJHiN0BwoslOnNa7EnKoaFZnaR%2F5BAJ%2FnLNdjoMpjr0NqF1hrPM%2FVE%2FObzFxtXbyso5fREBG6D07bvkivhbeTD%2FoqjEBjqkAca1X6CkjqDqh5yNtmvcn5KkliEMNwHBxLUxrtiIyZQLDu27gtFhejvVLW1ZjAbQ7h6qzAmOBCMJyZ6c6swMc29yDVbYNaN5nskZ335AwZLNynfF1WyqlVBAzhXtW10iFhRXMA2nktgDpqQ1HBkRuMrxUEze0ePu7KuekLIpxKRGnC%2BtFOg6YBR3cTJ7qMLDKUl9mkfuWcz1lwqBh9FJVPnqPEz9&X-Amz-Signature=4d7d23a87c9c24bc9d096cc04dcabed17e7b20cdc133c94996f59e80bf4858d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB3I6QBT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbg%2B1h5AdngiAugYctSkoLvb4%2B4PSeS9GpVFLWdlLjZwIhALVMyCQ8ejMqEcKY8JE2h2X9FK27mNU0BomFOXLLlfWfKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWQJ0INXe5o2NuPyUq3AMUjC5vfCZR5jUdVLaLdAJyGrU0CB7jYNDab8H9Ykx5Kcm9KT%2F0I1%2BVGPKVA2fwnCAwtZmHubB2I9ic4M2NlayQsggsXtehft%2FpBEzTa3Z2qtMgOyCKT3jDXS%2FwG9zW0hvubjxWmsiM5jQKoRfYd156HJc99px2Snivubb1ZjNtmeZdjvEk72ZSEEh4jmDXK194rhZGn9qvxEvZLAzWJbgJiIPcclES9GmQTT9vY01g3%2FO1fT4XsvJEQfggJ2iCk%2FbvVXcCJgGABrSnMlKCT56nKiJX8InazkeHKULsvySQ4QboGW63IiHy1JmdR8yy%2BKPCvTZVqX3Ph9yOr0zBuRWttoEX01qijVcB9M7VjtGY1eDvnzcSITSEDEO%2Bui1WBuyVZPxSNABgeD5qx3ytyAB8mSfvn5eAhEcVqAH0NWx9IpmXeOHIQcM8rGX6xQzlRRaRWdpOFDtx91Xyv727p4ny%2BRil325lNJncAQEfI%2Bd0r9XIlQHPTWl2w4A02EDYJ5Iq7DO%2F4%2BFf5vlfrL1ZVn8UjaLc69bv611k4IeedBJHiN0BwoslOnNa7EnKoaFZnaR%2F5BAJ%2FnLNdjoMpjr0NqF1hrPM%2FVE%2FObzFxtXbyso5fREBG6D07bvkivhbeTD%2FoqjEBjqkAca1X6CkjqDqh5yNtmvcn5KkliEMNwHBxLUxrtiIyZQLDu27gtFhejvVLW1ZjAbQ7h6qzAmOBCMJyZ6c6swMc29yDVbYNaN5nskZ335AwZLNynfF1WyqlVBAzhXtW10iFhRXMA2nktgDpqQ1HBkRuMrxUEze0ePu7KuekLIpxKRGnC%2BtFOg6YBR3cTJ7qMLDKUl9mkfuWcz1lwqBh9FJVPnqPEz9&X-Amz-Signature=3cfeed5fba7e36e5fbba9fa923c9f217d98f1288126627b8bd33f6262103ce4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB3I6QBT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbg%2B1h5AdngiAugYctSkoLvb4%2B4PSeS9GpVFLWdlLjZwIhALVMyCQ8ejMqEcKY8JE2h2X9FK27mNU0BomFOXLLlfWfKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWQJ0INXe5o2NuPyUq3AMUjC5vfCZR5jUdVLaLdAJyGrU0CB7jYNDab8H9Ykx5Kcm9KT%2F0I1%2BVGPKVA2fwnCAwtZmHubB2I9ic4M2NlayQsggsXtehft%2FpBEzTa3Z2qtMgOyCKT3jDXS%2FwG9zW0hvubjxWmsiM5jQKoRfYd156HJc99px2Snivubb1ZjNtmeZdjvEk72ZSEEh4jmDXK194rhZGn9qvxEvZLAzWJbgJiIPcclES9GmQTT9vY01g3%2FO1fT4XsvJEQfggJ2iCk%2FbvVXcCJgGABrSnMlKCT56nKiJX8InazkeHKULsvySQ4QboGW63IiHy1JmdR8yy%2BKPCvTZVqX3Ph9yOr0zBuRWttoEX01qijVcB9M7VjtGY1eDvnzcSITSEDEO%2Bui1WBuyVZPxSNABgeD5qx3ytyAB8mSfvn5eAhEcVqAH0NWx9IpmXeOHIQcM8rGX6xQzlRRaRWdpOFDtx91Xyv727p4ny%2BRil325lNJncAQEfI%2Bd0r9XIlQHPTWl2w4A02EDYJ5Iq7DO%2F4%2BFf5vlfrL1ZVn8UjaLc69bv611k4IeedBJHiN0BwoslOnNa7EnKoaFZnaR%2F5BAJ%2FnLNdjoMpjr0NqF1hrPM%2FVE%2FObzFxtXbyso5fREBG6D07bvkivhbeTD%2FoqjEBjqkAca1X6CkjqDqh5yNtmvcn5KkliEMNwHBxLUxrtiIyZQLDu27gtFhejvVLW1ZjAbQ7h6qzAmOBCMJyZ6c6swMc29yDVbYNaN5nskZ335AwZLNynfF1WyqlVBAzhXtW10iFhRXMA2nktgDpqQ1HBkRuMrxUEze0ePu7KuekLIpxKRGnC%2BtFOg6YBR3cTJ7qMLDKUl9mkfuWcz1lwqBh9FJVPnqPEz9&X-Amz-Signature=e88945a5a54be0bd7ca59f1e14aba097374f41c0c44a69b807e759168225c779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB3I6QBT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbg%2B1h5AdngiAugYctSkoLvb4%2B4PSeS9GpVFLWdlLjZwIhALVMyCQ8ejMqEcKY8JE2h2X9FK27mNU0BomFOXLLlfWfKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWQJ0INXe5o2NuPyUq3AMUjC5vfCZR5jUdVLaLdAJyGrU0CB7jYNDab8H9Ykx5Kcm9KT%2F0I1%2BVGPKVA2fwnCAwtZmHubB2I9ic4M2NlayQsggsXtehft%2FpBEzTa3Z2qtMgOyCKT3jDXS%2FwG9zW0hvubjxWmsiM5jQKoRfYd156HJc99px2Snivubb1ZjNtmeZdjvEk72ZSEEh4jmDXK194rhZGn9qvxEvZLAzWJbgJiIPcclES9GmQTT9vY01g3%2FO1fT4XsvJEQfggJ2iCk%2FbvVXcCJgGABrSnMlKCT56nKiJX8InazkeHKULsvySQ4QboGW63IiHy1JmdR8yy%2BKPCvTZVqX3Ph9yOr0zBuRWttoEX01qijVcB9M7VjtGY1eDvnzcSITSEDEO%2Bui1WBuyVZPxSNABgeD5qx3ytyAB8mSfvn5eAhEcVqAH0NWx9IpmXeOHIQcM8rGX6xQzlRRaRWdpOFDtx91Xyv727p4ny%2BRil325lNJncAQEfI%2Bd0r9XIlQHPTWl2w4A02EDYJ5Iq7DO%2F4%2BFf5vlfrL1ZVn8UjaLc69bv611k4IeedBJHiN0BwoslOnNa7EnKoaFZnaR%2F5BAJ%2FnLNdjoMpjr0NqF1hrPM%2FVE%2FObzFxtXbyso5fREBG6D07bvkivhbeTD%2FoqjEBjqkAca1X6CkjqDqh5yNtmvcn5KkliEMNwHBxLUxrtiIyZQLDu27gtFhejvVLW1ZjAbQ7h6qzAmOBCMJyZ6c6swMc29yDVbYNaN5nskZ335AwZLNynfF1WyqlVBAzhXtW10iFhRXMA2nktgDpqQ1HBkRuMrxUEze0ePu7KuekLIpxKRGnC%2BtFOg6YBR3cTJ7qMLDKUl9mkfuWcz1lwqBh9FJVPnqPEz9&X-Amz-Signature=398f6dfbb2b55480228b23031fdef01116587a6c772c09ba585e1b0986e70779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB3I6QBT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbg%2B1h5AdngiAugYctSkoLvb4%2B4PSeS9GpVFLWdlLjZwIhALVMyCQ8ejMqEcKY8JE2h2X9FK27mNU0BomFOXLLlfWfKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWQJ0INXe5o2NuPyUq3AMUjC5vfCZR5jUdVLaLdAJyGrU0CB7jYNDab8H9Ykx5Kcm9KT%2F0I1%2BVGPKVA2fwnCAwtZmHubB2I9ic4M2NlayQsggsXtehft%2FpBEzTa3Z2qtMgOyCKT3jDXS%2FwG9zW0hvubjxWmsiM5jQKoRfYd156HJc99px2Snivubb1ZjNtmeZdjvEk72ZSEEh4jmDXK194rhZGn9qvxEvZLAzWJbgJiIPcclES9GmQTT9vY01g3%2FO1fT4XsvJEQfggJ2iCk%2FbvVXcCJgGABrSnMlKCT56nKiJX8InazkeHKULsvySQ4QboGW63IiHy1JmdR8yy%2BKPCvTZVqX3Ph9yOr0zBuRWttoEX01qijVcB9M7VjtGY1eDvnzcSITSEDEO%2Bui1WBuyVZPxSNABgeD5qx3ytyAB8mSfvn5eAhEcVqAH0NWx9IpmXeOHIQcM8rGX6xQzlRRaRWdpOFDtx91Xyv727p4ny%2BRil325lNJncAQEfI%2Bd0r9XIlQHPTWl2w4A02EDYJ5Iq7DO%2F4%2BFf5vlfrL1ZVn8UjaLc69bv611k4IeedBJHiN0BwoslOnNa7EnKoaFZnaR%2F5BAJ%2FnLNdjoMpjr0NqF1hrPM%2FVE%2FObzFxtXbyso5fREBG6D07bvkivhbeTD%2FoqjEBjqkAca1X6CkjqDqh5yNtmvcn5KkliEMNwHBxLUxrtiIyZQLDu27gtFhejvVLW1ZjAbQ7h6qzAmOBCMJyZ6c6swMc29yDVbYNaN5nskZ335AwZLNynfF1WyqlVBAzhXtW10iFhRXMA2nktgDpqQ1HBkRuMrxUEze0ePu7KuekLIpxKRGnC%2BtFOg6YBR3cTJ7qMLDKUl9mkfuWcz1lwqBh9FJVPnqPEz9&X-Amz-Signature=f0bdd2ece4b7f146034399186b27113e1be7d337210edcb5f167b9623453d6da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB3I6QBT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbg%2B1h5AdngiAugYctSkoLvb4%2B4PSeS9GpVFLWdlLjZwIhALVMyCQ8ejMqEcKY8JE2h2X9FK27mNU0BomFOXLLlfWfKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWQJ0INXe5o2NuPyUq3AMUjC5vfCZR5jUdVLaLdAJyGrU0CB7jYNDab8H9Ykx5Kcm9KT%2F0I1%2BVGPKVA2fwnCAwtZmHubB2I9ic4M2NlayQsggsXtehft%2FpBEzTa3Z2qtMgOyCKT3jDXS%2FwG9zW0hvubjxWmsiM5jQKoRfYd156HJc99px2Snivubb1ZjNtmeZdjvEk72ZSEEh4jmDXK194rhZGn9qvxEvZLAzWJbgJiIPcclES9GmQTT9vY01g3%2FO1fT4XsvJEQfggJ2iCk%2FbvVXcCJgGABrSnMlKCT56nKiJX8InazkeHKULsvySQ4QboGW63IiHy1JmdR8yy%2BKPCvTZVqX3Ph9yOr0zBuRWttoEX01qijVcB9M7VjtGY1eDvnzcSITSEDEO%2Bui1WBuyVZPxSNABgeD5qx3ytyAB8mSfvn5eAhEcVqAH0NWx9IpmXeOHIQcM8rGX6xQzlRRaRWdpOFDtx91Xyv727p4ny%2BRil325lNJncAQEfI%2Bd0r9XIlQHPTWl2w4A02EDYJ5Iq7DO%2F4%2BFf5vlfrL1ZVn8UjaLc69bv611k4IeedBJHiN0BwoslOnNa7EnKoaFZnaR%2F5BAJ%2FnLNdjoMpjr0NqF1hrPM%2FVE%2FObzFxtXbyso5fREBG6D07bvkivhbeTD%2FoqjEBjqkAca1X6CkjqDqh5yNtmvcn5KkliEMNwHBxLUxrtiIyZQLDu27gtFhejvVLW1ZjAbQ7h6qzAmOBCMJyZ6c6swMc29yDVbYNaN5nskZ335AwZLNynfF1WyqlVBAzhXtW10iFhRXMA2nktgDpqQ1HBkRuMrxUEze0ePu7KuekLIpxKRGnC%2BtFOg6YBR3cTJ7qMLDKUl9mkfuWcz1lwqBh9FJVPnqPEz9&X-Amz-Signature=c143c3a14cde654be9c37c950eefaecd27213f64c7da9b7646aee4f5e23d5122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB3I6QBT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbg%2B1h5AdngiAugYctSkoLvb4%2B4PSeS9GpVFLWdlLjZwIhALVMyCQ8ejMqEcKY8JE2h2X9FK27mNU0BomFOXLLlfWfKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWQJ0INXe5o2NuPyUq3AMUjC5vfCZR5jUdVLaLdAJyGrU0CB7jYNDab8H9Ykx5Kcm9KT%2F0I1%2BVGPKVA2fwnCAwtZmHubB2I9ic4M2NlayQsggsXtehft%2FpBEzTa3Z2qtMgOyCKT3jDXS%2FwG9zW0hvubjxWmsiM5jQKoRfYd156HJc99px2Snivubb1ZjNtmeZdjvEk72ZSEEh4jmDXK194rhZGn9qvxEvZLAzWJbgJiIPcclES9GmQTT9vY01g3%2FO1fT4XsvJEQfggJ2iCk%2FbvVXcCJgGABrSnMlKCT56nKiJX8InazkeHKULsvySQ4QboGW63IiHy1JmdR8yy%2BKPCvTZVqX3Ph9yOr0zBuRWttoEX01qijVcB9M7VjtGY1eDvnzcSITSEDEO%2Bui1WBuyVZPxSNABgeD5qx3ytyAB8mSfvn5eAhEcVqAH0NWx9IpmXeOHIQcM8rGX6xQzlRRaRWdpOFDtx91Xyv727p4ny%2BRil325lNJncAQEfI%2Bd0r9XIlQHPTWl2w4A02EDYJ5Iq7DO%2F4%2BFf5vlfrL1ZVn8UjaLc69bv611k4IeedBJHiN0BwoslOnNa7EnKoaFZnaR%2F5BAJ%2FnLNdjoMpjr0NqF1hrPM%2FVE%2FObzFxtXbyso5fREBG6D07bvkivhbeTD%2FoqjEBjqkAca1X6CkjqDqh5yNtmvcn5KkliEMNwHBxLUxrtiIyZQLDu27gtFhejvVLW1ZjAbQ7h6qzAmOBCMJyZ6c6swMc29yDVbYNaN5nskZ335AwZLNynfF1WyqlVBAzhXtW10iFhRXMA2nktgDpqQ1HBkRuMrxUEze0ePu7KuekLIpxKRGnC%2BtFOg6YBR3cTJ7qMLDKUl9mkfuWcz1lwqBh9FJVPnqPEz9&X-Amz-Signature=f4a4b43afb05d56e66c44b4ae68e9d5d7fbf24adc16524c5ac01d7e27cebbca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB3I6QBT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbg%2B1h5AdngiAugYctSkoLvb4%2B4PSeS9GpVFLWdlLjZwIhALVMyCQ8ejMqEcKY8JE2h2X9FK27mNU0BomFOXLLlfWfKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWQJ0INXe5o2NuPyUq3AMUjC5vfCZR5jUdVLaLdAJyGrU0CB7jYNDab8H9Ykx5Kcm9KT%2F0I1%2BVGPKVA2fwnCAwtZmHubB2I9ic4M2NlayQsggsXtehft%2FpBEzTa3Z2qtMgOyCKT3jDXS%2FwG9zW0hvubjxWmsiM5jQKoRfYd156HJc99px2Snivubb1ZjNtmeZdjvEk72ZSEEh4jmDXK194rhZGn9qvxEvZLAzWJbgJiIPcclES9GmQTT9vY01g3%2FO1fT4XsvJEQfggJ2iCk%2FbvVXcCJgGABrSnMlKCT56nKiJX8InazkeHKULsvySQ4QboGW63IiHy1JmdR8yy%2BKPCvTZVqX3Ph9yOr0zBuRWttoEX01qijVcB9M7VjtGY1eDvnzcSITSEDEO%2Bui1WBuyVZPxSNABgeD5qx3ytyAB8mSfvn5eAhEcVqAH0NWx9IpmXeOHIQcM8rGX6xQzlRRaRWdpOFDtx91Xyv727p4ny%2BRil325lNJncAQEfI%2Bd0r9XIlQHPTWl2w4A02EDYJ5Iq7DO%2F4%2BFf5vlfrL1ZVn8UjaLc69bv611k4IeedBJHiN0BwoslOnNa7EnKoaFZnaR%2F5BAJ%2FnLNdjoMpjr0NqF1hrPM%2FVE%2FObzFxtXbyso5fREBG6D07bvkivhbeTD%2FoqjEBjqkAca1X6CkjqDqh5yNtmvcn5KkliEMNwHBxLUxrtiIyZQLDu27gtFhejvVLW1ZjAbQ7h6qzAmOBCMJyZ6c6swMc29yDVbYNaN5nskZ335AwZLNynfF1WyqlVBAzhXtW10iFhRXMA2nktgDpqQ1HBkRuMrxUEze0ePu7KuekLIpxKRGnC%2BtFOg6YBR3cTJ7qMLDKUl9mkfuWcz1lwqBh9FJVPnqPEz9&X-Amz-Signature=1d7b92eb26cfdc94fc4e82448672cd3047cdda90304aa55a25a162e5cd39c915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB3I6QBT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbg%2B1h5AdngiAugYctSkoLvb4%2B4PSeS9GpVFLWdlLjZwIhALVMyCQ8ejMqEcKY8JE2h2X9FK27mNU0BomFOXLLlfWfKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWQJ0INXe5o2NuPyUq3AMUjC5vfCZR5jUdVLaLdAJyGrU0CB7jYNDab8H9Ykx5Kcm9KT%2F0I1%2BVGPKVA2fwnCAwtZmHubB2I9ic4M2NlayQsggsXtehft%2FpBEzTa3Z2qtMgOyCKT3jDXS%2FwG9zW0hvubjxWmsiM5jQKoRfYd156HJc99px2Snivubb1ZjNtmeZdjvEk72ZSEEh4jmDXK194rhZGn9qvxEvZLAzWJbgJiIPcclES9GmQTT9vY01g3%2FO1fT4XsvJEQfggJ2iCk%2FbvVXcCJgGABrSnMlKCT56nKiJX8InazkeHKULsvySQ4QboGW63IiHy1JmdR8yy%2BKPCvTZVqX3Ph9yOr0zBuRWttoEX01qijVcB9M7VjtGY1eDvnzcSITSEDEO%2Bui1WBuyVZPxSNABgeD5qx3ytyAB8mSfvn5eAhEcVqAH0NWx9IpmXeOHIQcM8rGX6xQzlRRaRWdpOFDtx91Xyv727p4ny%2BRil325lNJncAQEfI%2Bd0r9XIlQHPTWl2w4A02EDYJ5Iq7DO%2F4%2BFf5vlfrL1ZVn8UjaLc69bv611k4IeedBJHiN0BwoslOnNa7EnKoaFZnaR%2F5BAJ%2FnLNdjoMpjr0NqF1hrPM%2FVE%2FObzFxtXbyso5fREBG6D07bvkivhbeTD%2FoqjEBjqkAca1X6CkjqDqh5yNtmvcn5KkliEMNwHBxLUxrtiIyZQLDu27gtFhejvVLW1ZjAbQ7h6qzAmOBCMJyZ6c6swMc29yDVbYNaN5nskZ335AwZLNynfF1WyqlVBAzhXtW10iFhRXMA2nktgDpqQ1HBkRuMrxUEze0ePu7KuekLIpxKRGnC%2BtFOg6YBR3cTJ7qMLDKUl9mkfuWcz1lwqBh9FJVPnqPEz9&X-Amz-Signature=84e4dabf069acca1e4f86fb1d018707e7f42f6b5f163a122620d847ce96dddbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB3I6QBT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbg%2B1h5AdngiAugYctSkoLvb4%2B4PSeS9GpVFLWdlLjZwIhALVMyCQ8ejMqEcKY8JE2h2X9FK27mNU0BomFOXLLlfWfKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWQJ0INXe5o2NuPyUq3AMUjC5vfCZR5jUdVLaLdAJyGrU0CB7jYNDab8H9Ykx5Kcm9KT%2F0I1%2BVGPKVA2fwnCAwtZmHubB2I9ic4M2NlayQsggsXtehft%2FpBEzTa3Z2qtMgOyCKT3jDXS%2FwG9zW0hvubjxWmsiM5jQKoRfYd156HJc99px2Snivubb1ZjNtmeZdjvEk72ZSEEh4jmDXK194rhZGn9qvxEvZLAzWJbgJiIPcclES9GmQTT9vY01g3%2FO1fT4XsvJEQfggJ2iCk%2FbvVXcCJgGABrSnMlKCT56nKiJX8InazkeHKULsvySQ4QboGW63IiHy1JmdR8yy%2BKPCvTZVqX3Ph9yOr0zBuRWttoEX01qijVcB9M7VjtGY1eDvnzcSITSEDEO%2Bui1WBuyVZPxSNABgeD5qx3ytyAB8mSfvn5eAhEcVqAH0NWx9IpmXeOHIQcM8rGX6xQzlRRaRWdpOFDtx91Xyv727p4ny%2BRil325lNJncAQEfI%2Bd0r9XIlQHPTWl2w4A02EDYJ5Iq7DO%2F4%2BFf5vlfrL1ZVn8UjaLc69bv611k4IeedBJHiN0BwoslOnNa7EnKoaFZnaR%2F5BAJ%2FnLNdjoMpjr0NqF1hrPM%2FVE%2FObzFxtXbyso5fREBG6D07bvkivhbeTD%2FoqjEBjqkAca1X6CkjqDqh5yNtmvcn5KkliEMNwHBxLUxrtiIyZQLDu27gtFhejvVLW1ZjAbQ7h6qzAmOBCMJyZ6c6swMc29yDVbYNaN5nskZ335AwZLNynfF1WyqlVBAzhXtW10iFhRXMA2nktgDpqQ1HBkRuMrxUEze0ePu7KuekLIpxKRGnC%2BtFOg6YBR3cTJ7qMLDKUl9mkfuWcz1lwqBh9FJVPnqPEz9&X-Amz-Signature=a0a52a3c7b47d8dbf1776e54ebb5cca38052aad218f4faf235bbb3fc70701e10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB3I6QBT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbg%2B1h5AdngiAugYctSkoLvb4%2B4PSeS9GpVFLWdlLjZwIhALVMyCQ8ejMqEcKY8JE2h2X9FK27mNU0BomFOXLLlfWfKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWQJ0INXe5o2NuPyUq3AMUjC5vfCZR5jUdVLaLdAJyGrU0CB7jYNDab8H9Ykx5Kcm9KT%2F0I1%2BVGPKVA2fwnCAwtZmHubB2I9ic4M2NlayQsggsXtehft%2FpBEzTa3Z2qtMgOyCKT3jDXS%2FwG9zW0hvubjxWmsiM5jQKoRfYd156HJc99px2Snivubb1ZjNtmeZdjvEk72ZSEEh4jmDXK194rhZGn9qvxEvZLAzWJbgJiIPcclES9GmQTT9vY01g3%2FO1fT4XsvJEQfggJ2iCk%2FbvVXcCJgGABrSnMlKCT56nKiJX8InazkeHKULsvySQ4QboGW63IiHy1JmdR8yy%2BKPCvTZVqX3Ph9yOr0zBuRWttoEX01qijVcB9M7VjtGY1eDvnzcSITSEDEO%2Bui1WBuyVZPxSNABgeD5qx3ytyAB8mSfvn5eAhEcVqAH0NWx9IpmXeOHIQcM8rGX6xQzlRRaRWdpOFDtx91Xyv727p4ny%2BRil325lNJncAQEfI%2Bd0r9XIlQHPTWl2w4A02EDYJ5Iq7DO%2F4%2BFf5vlfrL1ZVn8UjaLc69bv611k4IeedBJHiN0BwoslOnNa7EnKoaFZnaR%2F5BAJ%2FnLNdjoMpjr0NqF1hrPM%2FVE%2FObzFxtXbyso5fREBG6D07bvkivhbeTD%2FoqjEBjqkAca1X6CkjqDqh5yNtmvcn5KkliEMNwHBxLUxrtiIyZQLDu27gtFhejvVLW1ZjAbQ7h6qzAmOBCMJyZ6c6swMc29yDVbYNaN5nskZ335AwZLNynfF1WyqlVBAzhXtW10iFhRXMA2nktgDpqQ1HBkRuMrxUEze0ePu7KuekLIpxKRGnC%2BtFOg6YBR3cTJ7qMLDKUl9mkfuWcz1lwqBh9FJVPnqPEz9&X-Amz-Signature=d9915c874aaf8c53ab444f0f4651a2f77f87d49645bee16ec0fd795317f55632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB3I6QBT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbg%2B1h5AdngiAugYctSkoLvb4%2B4PSeS9GpVFLWdlLjZwIhALVMyCQ8ejMqEcKY8JE2h2X9FK27mNU0BomFOXLLlfWfKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWQJ0INXe5o2NuPyUq3AMUjC5vfCZR5jUdVLaLdAJyGrU0CB7jYNDab8H9Ykx5Kcm9KT%2F0I1%2BVGPKVA2fwnCAwtZmHubB2I9ic4M2NlayQsggsXtehft%2FpBEzTa3Z2qtMgOyCKT3jDXS%2FwG9zW0hvubjxWmsiM5jQKoRfYd156HJc99px2Snivubb1ZjNtmeZdjvEk72ZSEEh4jmDXK194rhZGn9qvxEvZLAzWJbgJiIPcclES9GmQTT9vY01g3%2FO1fT4XsvJEQfggJ2iCk%2FbvVXcCJgGABrSnMlKCT56nKiJX8InazkeHKULsvySQ4QboGW63IiHy1JmdR8yy%2BKPCvTZVqX3Ph9yOr0zBuRWttoEX01qijVcB9M7VjtGY1eDvnzcSITSEDEO%2Bui1WBuyVZPxSNABgeD5qx3ytyAB8mSfvn5eAhEcVqAH0NWx9IpmXeOHIQcM8rGX6xQzlRRaRWdpOFDtx91Xyv727p4ny%2BRil325lNJncAQEfI%2Bd0r9XIlQHPTWl2w4A02EDYJ5Iq7DO%2F4%2BFf5vlfrL1ZVn8UjaLc69bv611k4IeedBJHiN0BwoslOnNa7EnKoaFZnaR%2F5BAJ%2FnLNdjoMpjr0NqF1hrPM%2FVE%2FObzFxtXbyso5fREBG6D07bvkivhbeTD%2FoqjEBjqkAca1X6CkjqDqh5yNtmvcn5KkliEMNwHBxLUxrtiIyZQLDu27gtFhejvVLW1ZjAbQ7h6qzAmOBCMJyZ6c6swMc29yDVbYNaN5nskZ335AwZLNynfF1WyqlVBAzhXtW10iFhRXMA2nktgDpqQ1HBkRuMrxUEze0ePu7KuekLIpxKRGnC%2BtFOg6YBR3cTJ7qMLDKUl9mkfuWcz1lwqBh9FJVPnqPEz9&X-Amz-Signature=3e181a43795806523018c6dc1cf11ff062300c5e4098a0e35b51a49bba8712bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNUSNBZE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDd0SSUDqU437wVOGU%2BXrcV4N8u9X33eLImlo5rcwdOKAiEAqSz0cc45IfxMyZXydMaTWuf%2FD8RHNj%2FlWWf%2BnlEY1GYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEf%2F0877GBqrlCnI0CrcA1i4AzJtROCH7lpWqqq9cFwEgj1IkSraHk0N6vtDIK1XA1c2x9zm8FI2d1UmTS4sZh1oO9k3tBSM2P7qob64uyjDa%2F7MdTBDiJpZL%2BkRqAP4%2FZ5fmLH9TsDOr8wpyLurekJOOwARpT6EmC1bN%2FQpngcrGzxzL8nQgmj%2BOZVcNUSMcf5m1AIZ%2BmdWZ8VEHu5t7RttNrGGhZdZGtP7V3R2ImvhtGvuUSxLxUZklBolT9yDNRcY6wFfbNxtzGR60CwkV5tyW%2B0%2FeguOA0xdsVdfTEZrTsMNonABUEsWpbi6Kw5IB5QW51djIooVwgUpAxRBVW59TvHPX5ofCK9EYGeTTwiT8Aq12zj9WeHLbDEoTBZh2LOJy8kt53XCUMZOgEirnxI%2BQrbca3x6b5KyOmmDeo1748lATkARXBRiiGFgPoqL0DJDn%2FQ02AdJhSKMzNnh5so6kV51Cz%2By4gNreyLOsGmu%2B1T4T%2FGGucPZYM5j4RSP7f7bj1GHf3VwvIfI4aXB%2Btf2BP%2FE8xlspYcELlx9sNK2Dh%2BekrAMq%2F4iMpe%2FEk%2Fx%2FDnpBdPuqPweWnu5butOO%2B9Enkyvips510p%2FBu3hWX1zHwCRZ4vioBFUPCqzXN2ovO2j8a60%2BdJbKry%2BMPeiqMQGOqUBsVlSqmK%2B12CfFqIXwEIy5mBBv5JUJtMNlil8KdACTarhQBxvAvrd%2F7Eb1cyf7ptVzmbdIU4wtGjs7TR8%2B4QwsyppsTs%2BMgucKpdXe4syR%2FonbDcUnY0aOh53J7KOa6R6KUZupFpRhuKIUNSPzmwPvGok8lxymW6%2F6k22v%2FmY9JCPiki31%2BUEsfS1IQZD3asGW9s9Czv6fRIMrFaD5x3quGkSrShL&X-Amz-Signature=34efceaf2d4a65d32f45890860628856f8708d1cc400ca1fe13ce9f96e4e7a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNUSNBZE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDd0SSUDqU437wVOGU%2BXrcV4N8u9X33eLImlo5rcwdOKAiEAqSz0cc45IfxMyZXydMaTWuf%2FD8RHNj%2FlWWf%2BnlEY1GYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEf%2F0877GBqrlCnI0CrcA1i4AzJtROCH7lpWqqq9cFwEgj1IkSraHk0N6vtDIK1XA1c2x9zm8FI2d1UmTS4sZh1oO9k3tBSM2P7qob64uyjDa%2F7MdTBDiJpZL%2BkRqAP4%2FZ5fmLH9TsDOr8wpyLurekJOOwARpT6EmC1bN%2FQpngcrGzxzL8nQgmj%2BOZVcNUSMcf5m1AIZ%2BmdWZ8VEHu5t7RttNrGGhZdZGtP7V3R2ImvhtGvuUSxLxUZklBolT9yDNRcY6wFfbNxtzGR60CwkV5tyW%2B0%2FeguOA0xdsVdfTEZrTsMNonABUEsWpbi6Kw5IB5QW51djIooVwgUpAxRBVW59TvHPX5ofCK9EYGeTTwiT8Aq12zj9WeHLbDEoTBZh2LOJy8kt53XCUMZOgEirnxI%2BQrbca3x6b5KyOmmDeo1748lATkARXBRiiGFgPoqL0DJDn%2FQ02AdJhSKMzNnh5so6kV51Cz%2By4gNreyLOsGmu%2B1T4T%2FGGucPZYM5j4RSP7f7bj1GHf3VwvIfI4aXB%2Btf2BP%2FE8xlspYcELlx9sNK2Dh%2BekrAMq%2F4iMpe%2FEk%2Fx%2FDnpBdPuqPweWnu5butOO%2B9Enkyvips510p%2FBu3hWX1zHwCRZ4vioBFUPCqzXN2ovO2j8a60%2BdJbKry%2BMPeiqMQGOqUBsVlSqmK%2B12CfFqIXwEIy5mBBv5JUJtMNlil8KdACTarhQBxvAvrd%2F7Eb1cyf7ptVzmbdIU4wtGjs7TR8%2B4QwsyppsTs%2BMgucKpdXe4syR%2FonbDcUnY0aOh53J7KOa6R6KUZupFpRhuKIUNSPzmwPvGok8lxymW6%2F6k22v%2FmY9JCPiki31%2BUEsfS1IQZD3asGW9s9Czv6fRIMrFaD5x3quGkSrShL&X-Amz-Signature=d6e727fd4665555b0eb1c2e8440aeb7370bfce297b7152fe3a3d89be6cda5d8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNUSNBZE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDd0SSUDqU437wVOGU%2BXrcV4N8u9X33eLImlo5rcwdOKAiEAqSz0cc45IfxMyZXydMaTWuf%2FD8RHNj%2FlWWf%2BnlEY1GYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEf%2F0877GBqrlCnI0CrcA1i4AzJtROCH7lpWqqq9cFwEgj1IkSraHk0N6vtDIK1XA1c2x9zm8FI2d1UmTS4sZh1oO9k3tBSM2P7qob64uyjDa%2F7MdTBDiJpZL%2BkRqAP4%2FZ5fmLH9TsDOr8wpyLurekJOOwARpT6EmC1bN%2FQpngcrGzxzL8nQgmj%2BOZVcNUSMcf5m1AIZ%2BmdWZ8VEHu5t7RttNrGGhZdZGtP7V3R2ImvhtGvuUSxLxUZklBolT9yDNRcY6wFfbNxtzGR60CwkV5tyW%2B0%2FeguOA0xdsVdfTEZrTsMNonABUEsWpbi6Kw5IB5QW51djIooVwgUpAxRBVW59TvHPX5ofCK9EYGeTTwiT8Aq12zj9WeHLbDEoTBZh2LOJy8kt53XCUMZOgEirnxI%2BQrbca3x6b5KyOmmDeo1748lATkARXBRiiGFgPoqL0DJDn%2FQ02AdJhSKMzNnh5so6kV51Cz%2By4gNreyLOsGmu%2B1T4T%2FGGucPZYM5j4RSP7f7bj1GHf3VwvIfI4aXB%2Btf2BP%2FE8xlspYcELlx9sNK2Dh%2BekrAMq%2F4iMpe%2FEk%2Fx%2FDnpBdPuqPweWnu5butOO%2B9Enkyvips510p%2FBu3hWX1zHwCRZ4vioBFUPCqzXN2ovO2j8a60%2BdJbKry%2BMPeiqMQGOqUBsVlSqmK%2B12CfFqIXwEIy5mBBv5JUJtMNlil8KdACTarhQBxvAvrd%2F7Eb1cyf7ptVzmbdIU4wtGjs7TR8%2B4QwsyppsTs%2BMgucKpdXe4syR%2FonbDcUnY0aOh53J7KOa6R6KUZupFpRhuKIUNSPzmwPvGok8lxymW6%2F6k22v%2FmY9JCPiki31%2BUEsfS1IQZD3asGW9s9Czv6fRIMrFaD5x3quGkSrShL&X-Amz-Signature=e565f1df885bb5eaa38cd1edb580bc1225ad877103a7c922efbf7189b94f056d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNUSNBZE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDd0SSUDqU437wVOGU%2BXrcV4N8u9X33eLImlo5rcwdOKAiEAqSz0cc45IfxMyZXydMaTWuf%2FD8RHNj%2FlWWf%2BnlEY1GYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEf%2F0877GBqrlCnI0CrcA1i4AzJtROCH7lpWqqq9cFwEgj1IkSraHk0N6vtDIK1XA1c2x9zm8FI2d1UmTS4sZh1oO9k3tBSM2P7qob64uyjDa%2F7MdTBDiJpZL%2BkRqAP4%2FZ5fmLH9TsDOr8wpyLurekJOOwARpT6EmC1bN%2FQpngcrGzxzL8nQgmj%2BOZVcNUSMcf5m1AIZ%2BmdWZ8VEHu5t7RttNrGGhZdZGtP7V3R2ImvhtGvuUSxLxUZklBolT9yDNRcY6wFfbNxtzGR60CwkV5tyW%2B0%2FeguOA0xdsVdfTEZrTsMNonABUEsWpbi6Kw5IB5QW51djIooVwgUpAxRBVW59TvHPX5ofCK9EYGeTTwiT8Aq12zj9WeHLbDEoTBZh2LOJy8kt53XCUMZOgEirnxI%2BQrbca3x6b5KyOmmDeo1748lATkARXBRiiGFgPoqL0DJDn%2FQ02AdJhSKMzNnh5so6kV51Cz%2By4gNreyLOsGmu%2B1T4T%2FGGucPZYM5j4RSP7f7bj1GHf3VwvIfI4aXB%2Btf2BP%2FE8xlspYcELlx9sNK2Dh%2BekrAMq%2F4iMpe%2FEk%2Fx%2FDnpBdPuqPweWnu5butOO%2B9Enkyvips510p%2FBu3hWX1zHwCRZ4vioBFUPCqzXN2ovO2j8a60%2BdJbKry%2BMPeiqMQGOqUBsVlSqmK%2B12CfFqIXwEIy5mBBv5JUJtMNlil8KdACTarhQBxvAvrd%2F7Eb1cyf7ptVzmbdIU4wtGjs7TR8%2B4QwsyppsTs%2BMgucKpdXe4syR%2FonbDcUnY0aOh53J7KOa6R6KUZupFpRhuKIUNSPzmwPvGok8lxymW6%2F6k22v%2FmY9JCPiki31%2BUEsfS1IQZD3asGW9s9Czv6fRIMrFaD5x3quGkSrShL&X-Amz-Signature=3ab52911011c8069abb8a911ce20e045c0842b6333c870db6bbe936a7133f86e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNUSNBZE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDd0SSUDqU437wVOGU%2BXrcV4N8u9X33eLImlo5rcwdOKAiEAqSz0cc45IfxMyZXydMaTWuf%2FD8RHNj%2FlWWf%2BnlEY1GYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEf%2F0877GBqrlCnI0CrcA1i4AzJtROCH7lpWqqq9cFwEgj1IkSraHk0N6vtDIK1XA1c2x9zm8FI2d1UmTS4sZh1oO9k3tBSM2P7qob64uyjDa%2F7MdTBDiJpZL%2BkRqAP4%2FZ5fmLH9TsDOr8wpyLurekJOOwARpT6EmC1bN%2FQpngcrGzxzL8nQgmj%2BOZVcNUSMcf5m1AIZ%2BmdWZ8VEHu5t7RttNrGGhZdZGtP7V3R2ImvhtGvuUSxLxUZklBolT9yDNRcY6wFfbNxtzGR60CwkV5tyW%2B0%2FeguOA0xdsVdfTEZrTsMNonABUEsWpbi6Kw5IB5QW51djIooVwgUpAxRBVW59TvHPX5ofCK9EYGeTTwiT8Aq12zj9WeHLbDEoTBZh2LOJy8kt53XCUMZOgEirnxI%2BQrbca3x6b5KyOmmDeo1748lATkARXBRiiGFgPoqL0DJDn%2FQ02AdJhSKMzNnh5so6kV51Cz%2By4gNreyLOsGmu%2B1T4T%2FGGucPZYM5j4RSP7f7bj1GHf3VwvIfI4aXB%2Btf2BP%2FE8xlspYcELlx9sNK2Dh%2BekrAMq%2F4iMpe%2FEk%2Fx%2FDnpBdPuqPweWnu5butOO%2B9Enkyvips510p%2FBu3hWX1zHwCRZ4vioBFUPCqzXN2ovO2j8a60%2BdJbKry%2BMPeiqMQGOqUBsVlSqmK%2B12CfFqIXwEIy5mBBv5JUJtMNlil8KdACTarhQBxvAvrd%2F7Eb1cyf7ptVzmbdIU4wtGjs7TR8%2B4QwsyppsTs%2BMgucKpdXe4syR%2FonbDcUnY0aOh53J7KOa6R6KUZupFpRhuKIUNSPzmwPvGok8lxymW6%2F6k22v%2FmY9JCPiki31%2BUEsfS1IQZD3asGW9s9Czv6fRIMrFaD5x3quGkSrShL&X-Amz-Signature=37f899011bc22b05226071087a4815ee82e5803c7b7990aa39477dadcfd8232b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNUSNBZE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDd0SSUDqU437wVOGU%2BXrcV4N8u9X33eLImlo5rcwdOKAiEAqSz0cc45IfxMyZXydMaTWuf%2FD8RHNj%2FlWWf%2BnlEY1GYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEf%2F0877GBqrlCnI0CrcA1i4AzJtROCH7lpWqqq9cFwEgj1IkSraHk0N6vtDIK1XA1c2x9zm8FI2d1UmTS4sZh1oO9k3tBSM2P7qob64uyjDa%2F7MdTBDiJpZL%2BkRqAP4%2FZ5fmLH9TsDOr8wpyLurekJOOwARpT6EmC1bN%2FQpngcrGzxzL8nQgmj%2BOZVcNUSMcf5m1AIZ%2BmdWZ8VEHu5t7RttNrGGhZdZGtP7V3R2ImvhtGvuUSxLxUZklBolT9yDNRcY6wFfbNxtzGR60CwkV5tyW%2B0%2FeguOA0xdsVdfTEZrTsMNonABUEsWpbi6Kw5IB5QW51djIooVwgUpAxRBVW59TvHPX5ofCK9EYGeTTwiT8Aq12zj9WeHLbDEoTBZh2LOJy8kt53XCUMZOgEirnxI%2BQrbca3x6b5KyOmmDeo1748lATkARXBRiiGFgPoqL0DJDn%2FQ02AdJhSKMzNnh5so6kV51Cz%2By4gNreyLOsGmu%2B1T4T%2FGGucPZYM5j4RSP7f7bj1GHf3VwvIfI4aXB%2Btf2BP%2FE8xlspYcELlx9sNK2Dh%2BekrAMq%2F4iMpe%2FEk%2Fx%2FDnpBdPuqPweWnu5butOO%2B9Enkyvips510p%2FBu3hWX1zHwCRZ4vioBFUPCqzXN2ovO2j8a60%2BdJbKry%2BMPeiqMQGOqUBsVlSqmK%2B12CfFqIXwEIy5mBBv5JUJtMNlil8KdACTarhQBxvAvrd%2F7Eb1cyf7ptVzmbdIU4wtGjs7TR8%2B4QwsyppsTs%2BMgucKpdXe4syR%2FonbDcUnY0aOh53J7KOa6R6KUZupFpRhuKIUNSPzmwPvGok8lxymW6%2F6k22v%2FmY9JCPiki31%2BUEsfS1IQZD3asGW9s9Czv6fRIMrFaD5x3quGkSrShL&X-Amz-Signature=f1365d2e65adbfb3b244beb354293d9a85a4dab0a8c9835cad61de5d05388520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNUSNBZE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDd0SSUDqU437wVOGU%2BXrcV4N8u9X33eLImlo5rcwdOKAiEAqSz0cc45IfxMyZXydMaTWuf%2FD8RHNj%2FlWWf%2BnlEY1GYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEf%2F0877GBqrlCnI0CrcA1i4AzJtROCH7lpWqqq9cFwEgj1IkSraHk0N6vtDIK1XA1c2x9zm8FI2d1UmTS4sZh1oO9k3tBSM2P7qob64uyjDa%2F7MdTBDiJpZL%2BkRqAP4%2FZ5fmLH9TsDOr8wpyLurekJOOwARpT6EmC1bN%2FQpngcrGzxzL8nQgmj%2BOZVcNUSMcf5m1AIZ%2BmdWZ8VEHu5t7RttNrGGhZdZGtP7V3R2ImvhtGvuUSxLxUZklBolT9yDNRcY6wFfbNxtzGR60CwkV5tyW%2B0%2FeguOA0xdsVdfTEZrTsMNonABUEsWpbi6Kw5IB5QW51djIooVwgUpAxRBVW59TvHPX5ofCK9EYGeTTwiT8Aq12zj9WeHLbDEoTBZh2LOJy8kt53XCUMZOgEirnxI%2BQrbca3x6b5KyOmmDeo1748lATkARXBRiiGFgPoqL0DJDn%2FQ02AdJhSKMzNnh5so6kV51Cz%2By4gNreyLOsGmu%2B1T4T%2FGGucPZYM5j4RSP7f7bj1GHf3VwvIfI4aXB%2Btf2BP%2FE8xlspYcELlx9sNK2Dh%2BekrAMq%2F4iMpe%2FEk%2Fx%2FDnpBdPuqPweWnu5butOO%2B9Enkyvips510p%2FBu3hWX1zHwCRZ4vioBFUPCqzXN2ovO2j8a60%2BdJbKry%2BMPeiqMQGOqUBsVlSqmK%2B12CfFqIXwEIy5mBBv5JUJtMNlil8KdACTarhQBxvAvrd%2F7Eb1cyf7ptVzmbdIU4wtGjs7TR8%2B4QwsyppsTs%2BMgucKpdXe4syR%2FonbDcUnY0aOh53J7KOa6R6KUZupFpRhuKIUNSPzmwPvGok8lxymW6%2F6k22v%2FmY9JCPiki31%2BUEsfS1IQZD3asGW9s9Czv6fRIMrFaD5x3quGkSrShL&X-Amz-Signature=33c0ae19f4d6e4c4ed68178fdc535da1d30e8cb0485e90b0a07e15967f7a5c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
