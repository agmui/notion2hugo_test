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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUP3MF26%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhltdmsVMozefxgNlGKuRsAkc9uAr%2FgN%2BddjGVJrcfuAiBLK7rhYHgc5pM2vnvvywPfhZdlgVMXNs0ItdjerNBL2yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv%2FJeTx%2BtZGbXMmzZKtwDy7JfFcR5bo1RiuB44xgsfM9cPU5zwW277pe14bYUEtrMCz1cMxZvN%2F3Soj6gHLIlXWBl9OadaTiGTgnDdqBtShFR84MOamjGAmJ02Z3RaDKMIqnXc%2FVDpr0h7KBzV0dMaMS0dIQ4c2%2BxeoboJ9faF3ECHHW8FtqikmwgfDFkosJvsTmJd5f0JfVUinlFn5puwQoNjfRwUBoGJcCrBnmkMYhKBo3XnTcpRlGC7H2P6YQcbKHqhpdJNfYXZbS0xbyiKLFvf9Vd160uUgEOVXtCUgeNsO%2FcrwTpFQFinBPm32GAt%2FLON5lJcOggMZNDZOCI2k0Fxyn7voJCoYf7MUzYloyHXb%2FoQ7Twxqk0Ko5ZvhCLOmjfB%2FEpybb6rjOIx51fh4GQXfxcoHaGluL9jVMVzdwsW9wRpkFkwSjKDrPpDhccHkFZ7tgyzwj3s%2BYe1PoqxsUGhDV9dtEhTsyIe7jhUzXEqwAQ8DV2pQbToSWHpP3iNuqitP7FtlzjaEWYT8%2Fguc1TXYgtJTnnSh9U4ub9kNLw%2Fc2j6qLG6hrUR%2Bll53C5XBXct20AytMqNMPWmxE47eqXW5eSMIyw3OVDsTvRZX0JzzH1SVSTJb5KL2JPXPumGGKErTZ8pSXNCPUw9L68xAY6pgGt8mCWpo7R0zofG1FewTJiCGDaCN7inUMXij4McroSeAeRf%2FdgpWBayRFlDU1ls9ZNqSNA8ayZ7bcLTm5v7kXovoeWGa6p5wwCLmf1mXQLIpfCGyd2%2FXM%2FsTNGL4HzyP0X%2FAdt1H5Icdlp79rE4mWEgJi28Ljd3vILEdaGRZlOxV1irIuN2ywc3pdGRLCcReUfFSDmwkU7Mp5FEBLop20Ln4xpKTdy&X-Amz-Signature=c028fd97bdc3ae4310dcaf0a52c7e0e995b38ca76e1eaf21ceb5a8bc61e697c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUP3MF26%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhltdmsVMozefxgNlGKuRsAkc9uAr%2FgN%2BddjGVJrcfuAiBLK7rhYHgc5pM2vnvvywPfhZdlgVMXNs0ItdjerNBL2yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv%2FJeTx%2BtZGbXMmzZKtwDy7JfFcR5bo1RiuB44xgsfM9cPU5zwW277pe14bYUEtrMCz1cMxZvN%2F3Soj6gHLIlXWBl9OadaTiGTgnDdqBtShFR84MOamjGAmJ02Z3RaDKMIqnXc%2FVDpr0h7KBzV0dMaMS0dIQ4c2%2BxeoboJ9faF3ECHHW8FtqikmwgfDFkosJvsTmJd5f0JfVUinlFn5puwQoNjfRwUBoGJcCrBnmkMYhKBo3XnTcpRlGC7H2P6YQcbKHqhpdJNfYXZbS0xbyiKLFvf9Vd160uUgEOVXtCUgeNsO%2FcrwTpFQFinBPm32GAt%2FLON5lJcOggMZNDZOCI2k0Fxyn7voJCoYf7MUzYloyHXb%2FoQ7Twxqk0Ko5ZvhCLOmjfB%2FEpybb6rjOIx51fh4GQXfxcoHaGluL9jVMVzdwsW9wRpkFkwSjKDrPpDhccHkFZ7tgyzwj3s%2BYe1PoqxsUGhDV9dtEhTsyIe7jhUzXEqwAQ8DV2pQbToSWHpP3iNuqitP7FtlzjaEWYT8%2Fguc1TXYgtJTnnSh9U4ub9kNLw%2Fc2j6qLG6hrUR%2Bll53C5XBXct20AytMqNMPWmxE47eqXW5eSMIyw3OVDsTvRZX0JzzH1SVSTJb5KL2JPXPumGGKErTZ8pSXNCPUw9L68xAY6pgGt8mCWpo7R0zofG1FewTJiCGDaCN7inUMXij4McroSeAeRf%2FdgpWBayRFlDU1ls9ZNqSNA8ayZ7bcLTm5v7kXovoeWGa6p5wwCLmf1mXQLIpfCGyd2%2FXM%2FsTNGL4HzyP0X%2FAdt1H5Icdlp79rE4mWEgJi28Ljd3vILEdaGRZlOxV1irIuN2ywc3pdGRLCcReUfFSDmwkU7Mp5FEBLop20Ln4xpKTdy&X-Amz-Signature=e48dc01bb6cfe04a3a4cfc8f73c615af7a62513c55552e08207a2e842a6fd879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUP3MF26%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhltdmsVMozefxgNlGKuRsAkc9uAr%2FgN%2BddjGVJrcfuAiBLK7rhYHgc5pM2vnvvywPfhZdlgVMXNs0ItdjerNBL2yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv%2FJeTx%2BtZGbXMmzZKtwDy7JfFcR5bo1RiuB44xgsfM9cPU5zwW277pe14bYUEtrMCz1cMxZvN%2F3Soj6gHLIlXWBl9OadaTiGTgnDdqBtShFR84MOamjGAmJ02Z3RaDKMIqnXc%2FVDpr0h7KBzV0dMaMS0dIQ4c2%2BxeoboJ9faF3ECHHW8FtqikmwgfDFkosJvsTmJd5f0JfVUinlFn5puwQoNjfRwUBoGJcCrBnmkMYhKBo3XnTcpRlGC7H2P6YQcbKHqhpdJNfYXZbS0xbyiKLFvf9Vd160uUgEOVXtCUgeNsO%2FcrwTpFQFinBPm32GAt%2FLON5lJcOggMZNDZOCI2k0Fxyn7voJCoYf7MUzYloyHXb%2FoQ7Twxqk0Ko5ZvhCLOmjfB%2FEpybb6rjOIx51fh4GQXfxcoHaGluL9jVMVzdwsW9wRpkFkwSjKDrPpDhccHkFZ7tgyzwj3s%2BYe1PoqxsUGhDV9dtEhTsyIe7jhUzXEqwAQ8DV2pQbToSWHpP3iNuqitP7FtlzjaEWYT8%2Fguc1TXYgtJTnnSh9U4ub9kNLw%2Fc2j6qLG6hrUR%2Bll53C5XBXct20AytMqNMPWmxE47eqXW5eSMIyw3OVDsTvRZX0JzzH1SVSTJb5KL2JPXPumGGKErTZ8pSXNCPUw9L68xAY6pgGt8mCWpo7R0zofG1FewTJiCGDaCN7inUMXij4McroSeAeRf%2FdgpWBayRFlDU1ls9ZNqSNA8ayZ7bcLTm5v7kXovoeWGa6p5wwCLmf1mXQLIpfCGyd2%2FXM%2FsTNGL4HzyP0X%2FAdt1H5Icdlp79rE4mWEgJi28Ljd3vILEdaGRZlOxV1irIuN2ywc3pdGRLCcReUfFSDmwkU7Mp5FEBLop20Ln4xpKTdy&X-Amz-Signature=ff0d7052631888e91209af3137fd513d226cabc81b58dc396bc65496653fb1c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUP3MF26%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhltdmsVMozefxgNlGKuRsAkc9uAr%2FgN%2BddjGVJrcfuAiBLK7rhYHgc5pM2vnvvywPfhZdlgVMXNs0ItdjerNBL2yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv%2FJeTx%2BtZGbXMmzZKtwDy7JfFcR5bo1RiuB44xgsfM9cPU5zwW277pe14bYUEtrMCz1cMxZvN%2F3Soj6gHLIlXWBl9OadaTiGTgnDdqBtShFR84MOamjGAmJ02Z3RaDKMIqnXc%2FVDpr0h7KBzV0dMaMS0dIQ4c2%2BxeoboJ9faF3ECHHW8FtqikmwgfDFkosJvsTmJd5f0JfVUinlFn5puwQoNjfRwUBoGJcCrBnmkMYhKBo3XnTcpRlGC7H2P6YQcbKHqhpdJNfYXZbS0xbyiKLFvf9Vd160uUgEOVXtCUgeNsO%2FcrwTpFQFinBPm32GAt%2FLON5lJcOggMZNDZOCI2k0Fxyn7voJCoYf7MUzYloyHXb%2FoQ7Twxqk0Ko5ZvhCLOmjfB%2FEpybb6rjOIx51fh4GQXfxcoHaGluL9jVMVzdwsW9wRpkFkwSjKDrPpDhccHkFZ7tgyzwj3s%2BYe1PoqxsUGhDV9dtEhTsyIe7jhUzXEqwAQ8DV2pQbToSWHpP3iNuqitP7FtlzjaEWYT8%2Fguc1TXYgtJTnnSh9U4ub9kNLw%2Fc2j6qLG6hrUR%2Bll53C5XBXct20AytMqNMPWmxE47eqXW5eSMIyw3OVDsTvRZX0JzzH1SVSTJb5KL2JPXPumGGKErTZ8pSXNCPUw9L68xAY6pgGt8mCWpo7R0zofG1FewTJiCGDaCN7inUMXij4McroSeAeRf%2FdgpWBayRFlDU1ls9ZNqSNA8ayZ7bcLTm5v7kXovoeWGa6p5wwCLmf1mXQLIpfCGyd2%2FXM%2FsTNGL4HzyP0X%2FAdt1H5Icdlp79rE4mWEgJi28Ljd3vILEdaGRZlOxV1irIuN2ywc3pdGRLCcReUfFSDmwkU7Mp5FEBLop20Ln4xpKTdy&X-Amz-Signature=efee7f362ecf584f28d708b765e9b86f1b1394ad593200ff53adaf5ef8271e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUP3MF26%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhltdmsVMozefxgNlGKuRsAkc9uAr%2FgN%2BddjGVJrcfuAiBLK7rhYHgc5pM2vnvvywPfhZdlgVMXNs0ItdjerNBL2yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv%2FJeTx%2BtZGbXMmzZKtwDy7JfFcR5bo1RiuB44xgsfM9cPU5zwW277pe14bYUEtrMCz1cMxZvN%2F3Soj6gHLIlXWBl9OadaTiGTgnDdqBtShFR84MOamjGAmJ02Z3RaDKMIqnXc%2FVDpr0h7KBzV0dMaMS0dIQ4c2%2BxeoboJ9faF3ECHHW8FtqikmwgfDFkosJvsTmJd5f0JfVUinlFn5puwQoNjfRwUBoGJcCrBnmkMYhKBo3XnTcpRlGC7H2P6YQcbKHqhpdJNfYXZbS0xbyiKLFvf9Vd160uUgEOVXtCUgeNsO%2FcrwTpFQFinBPm32GAt%2FLON5lJcOggMZNDZOCI2k0Fxyn7voJCoYf7MUzYloyHXb%2FoQ7Twxqk0Ko5ZvhCLOmjfB%2FEpybb6rjOIx51fh4GQXfxcoHaGluL9jVMVzdwsW9wRpkFkwSjKDrPpDhccHkFZ7tgyzwj3s%2BYe1PoqxsUGhDV9dtEhTsyIe7jhUzXEqwAQ8DV2pQbToSWHpP3iNuqitP7FtlzjaEWYT8%2Fguc1TXYgtJTnnSh9U4ub9kNLw%2Fc2j6qLG6hrUR%2Bll53C5XBXct20AytMqNMPWmxE47eqXW5eSMIyw3OVDsTvRZX0JzzH1SVSTJb5KL2JPXPumGGKErTZ8pSXNCPUw9L68xAY6pgGt8mCWpo7R0zofG1FewTJiCGDaCN7inUMXij4McroSeAeRf%2FdgpWBayRFlDU1ls9ZNqSNA8ayZ7bcLTm5v7kXovoeWGa6p5wwCLmf1mXQLIpfCGyd2%2FXM%2FsTNGL4HzyP0X%2FAdt1H5Icdlp79rE4mWEgJi28Ljd3vILEdaGRZlOxV1irIuN2ywc3pdGRLCcReUfFSDmwkU7Mp5FEBLop20Ln4xpKTdy&X-Amz-Signature=0bc07b954c50bb5b289de8dd975477d20d64a2f31545221428ab91a5cfa04c6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUP3MF26%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhltdmsVMozefxgNlGKuRsAkc9uAr%2FgN%2BddjGVJrcfuAiBLK7rhYHgc5pM2vnvvywPfhZdlgVMXNs0ItdjerNBL2yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv%2FJeTx%2BtZGbXMmzZKtwDy7JfFcR5bo1RiuB44xgsfM9cPU5zwW277pe14bYUEtrMCz1cMxZvN%2F3Soj6gHLIlXWBl9OadaTiGTgnDdqBtShFR84MOamjGAmJ02Z3RaDKMIqnXc%2FVDpr0h7KBzV0dMaMS0dIQ4c2%2BxeoboJ9faF3ECHHW8FtqikmwgfDFkosJvsTmJd5f0JfVUinlFn5puwQoNjfRwUBoGJcCrBnmkMYhKBo3XnTcpRlGC7H2P6YQcbKHqhpdJNfYXZbS0xbyiKLFvf9Vd160uUgEOVXtCUgeNsO%2FcrwTpFQFinBPm32GAt%2FLON5lJcOggMZNDZOCI2k0Fxyn7voJCoYf7MUzYloyHXb%2FoQ7Twxqk0Ko5ZvhCLOmjfB%2FEpybb6rjOIx51fh4GQXfxcoHaGluL9jVMVzdwsW9wRpkFkwSjKDrPpDhccHkFZ7tgyzwj3s%2BYe1PoqxsUGhDV9dtEhTsyIe7jhUzXEqwAQ8DV2pQbToSWHpP3iNuqitP7FtlzjaEWYT8%2Fguc1TXYgtJTnnSh9U4ub9kNLw%2Fc2j6qLG6hrUR%2Bll53C5XBXct20AytMqNMPWmxE47eqXW5eSMIyw3OVDsTvRZX0JzzH1SVSTJb5KL2JPXPumGGKErTZ8pSXNCPUw9L68xAY6pgGt8mCWpo7R0zofG1FewTJiCGDaCN7inUMXij4McroSeAeRf%2FdgpWBayRFlDU1ls9ZNqSNA8ayZ7bcLTm5v7kXovoeWGa6p5wwCLmf1mXQLIpfCGyd2%2FXM%2FsTNGL4HzyP0X%2FAdt1H5Icdlp79rE4mWEgJi28Ljd3vILEdaGRZlOxV1irIuN2ywc3pdGRLCcReUfFSDmwkU7Mp5FEBLop20Ln4xpKTdy&X-Amz-Signature=2dfbb9ccb5b49b7fb1bf1a09425626e3ca912f555782a5d8993d220380c5e0a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUP3MF26%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhltdmsVMozefxgNlGKuRsAkc9uAr%2FgN%2BddjGVJrcfuAiBLK7rhYHgc5pM2vnvvywPfhZdlgVMXNs0ItdjerNBL2yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv%2FJeTx%2BtZGbXMmzZKtwDy7JfFcR5bo1RiuB44xgsfM9cPU5zwW277pe14bYUEtrMCz1cMxZvN%2F3Soj6gHLIlXWBl9OadaTiGTgnDdqBtShFR84MOamjGAmJ02Z3RaDKMIqnXc%2FVDpr0h7KBzV0dMaMS0dIQ4c2%2BxeoboJ9faF3ECHHW8FtqikmwgfDFkosJvsTmJd5f0JfVUinlFn5puwQoNjfRwUBoGJcCrBnmkMYhKBo3XnTcpRlGC7H2P6YQcbKHqhpdJNfYXZbS0xbyiKLFvf9Vd160uUgEOVXtCUgeNsO%2FcrwTpFQFinBPm32GAt%2FLON5lJcOggMZNDZOCI2k0Fxyn7voJCoYf7MUzYloyHXb%2FoQ7Twxqk0Ko5ZvhCLOmjfB%2FEpybb6rjOIx51fh4GQXfxcoHaGluL9jVMVzdwsW9wRpkFkwSjKDrPpDhccHkFZ7tgyzwj3s%2BYe1PoqxsUGhDV9dtEhTsyIe7jhUzXEqwAQ8DV2pQbToSWHpP3iNuqitP7FtlzjaEWYT8%2Fguc1TXYgtJTnnSh9U4ub9kNLw%2Fc2j6qLG6hrUR%2Bll53C5XBXct20AytMqNMPWmxE47eqXW5eSMIyw3OVDsTvRZX0JzzH1SVSTJb5KL2JPXPumGGKErTZ8pSXNCPUw9L68xAY6pgGt8mCWpo7R0zofG1FewTJiCGDaCN7inUMXij4McroSeAeRf%2FdgpWBayRFlDU1ls9ZNqSNA8ayZ7bcLTm5v7kXovoeWGa6p5wwCLmf1mXQLIpfCGyd2%2FXM%2FsTNGL4HzyP0X%2FAdt1H5Icdlp79rE4mWEgJi28Ljd3vILEdaGRZlOxV1irIuN2ywc3pdGRLCcReUfFSDmwkU7Mp5FEBLop20Ln4xpKTdy&X-Amz-Signature=18a674af87580f9a6949109dc94843d5e085d22ba5d4dbf3fcdc4d3468e0dfa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUP3MF26%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhltdmsVMozefxgNlGKuRsAkc9uAr%2FgN%2BddjGVJrcfuAiBLK7rhYHgc5pM2vnvvywPfhZdlgVMXNs0ItdjerNBL2yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv%2FJeTx%2BtZGbXMmzZKtwDy7JfFcR5bo1RiuB44xgsfM9cPU5zwW277pe14bYUEtrMCz1cMxZvN%2F3Soj6gHLIlXWBl9OadaTiGTgnDdqBtShFR84MOamjGAmJ02Z3RaDKMIqnXc%2FVDpr0h7KBzV0dMaMS0dIQ4c2%2BxeoboJ9faF3ECHHW8FtqikmwgfDFkosJvsTmJd5f0JfVUinlFn5puwQoNjfRwUBoGJcCrBnmkMYhKBo3XnTcpRlGC7H2P6YQcbKHqhpdJNfYXZbS0xbyiKLFvf9Vd160uUgEOVXtCUgeNsO%2FcrwTpFQFinBPm32GAt%2FLON5lJcOggMZNDZOCI2k0Fxyn7voJCoYf7MUzYloyHXb%2FoQ7Twxqk0Ko5ZvhCLOmjfB%2FEpybb6rjOIx51fh4GQXfxcoHaGluL9jVMVzdwsW9wRpkFkwSjKDrPpDhccHkFZ7tgyzwj3s%2BYe1PoqxsUGhDV9dtEhTsyIe7jhUzXEqwAQ8DV2pQbToSWHpP3iNuqitP7FtlzjaEWYT8%2Fguc1TXYgtJTnnSh9U4ub9kNLw%2Fc2j6qLG6hrUR%2Bll53C5XBXct20AytMqNMPWmxE47eqXW5eSMIyw3OVDsTvRZX0JzzH1SVSTJb5KL2JPXPumGGKErTZ8pSXNCPUw9L68xAY6pgGt8mCWpo7R0zofG1FewTJiCGDaCN7inUMXij4McroSeAeRf%2FdgpWBayRFlDU1ls9ZNqSNA8ayZ7bcLTm5v7kXovoeWGa6p5wwCLmf1mXQLIpfCGyd2%2FXM%2FsTNGL4HzyP0X%2FAdt1H5Icdlp79rE4mWEgJi28Ljd3vILEdaGRZlOxV1irIuN2ywc3pdGRLCcReUfFSDmwkU7Mp5FEBLop20Ln4xpKTdy&X-Amz-Signature=a793b8132ac84bd2677d4d7a61a49b6475bee478db5cf8b0519b223739171c6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUP3MF26%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhltdmsVMozefxgNlGKuRsAkc9uAr%2FgN%2BddjGVJrcfuAiBLK7rhYHgc5pM2vnvvywPfhZdlgVMXNs0ItdjerNBL2yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv%2FJeTx%2BtZGbXMmzZKtwDy7JfFcR5bo1RiuB44xgsfM9cPU5zwW277pe14bYUEtrMCz1cMxZvN%2F3Soj6gHLIlXWBl9OadaTiGTgnDdqBtShFR84MOamjGAmJ02Z3RaDKMIqnXc%2FVDpr0h7KBzV0dMaMS0dIQ4c2%2BxeoboJ9faF3ECHHW8FtqikmwgfDFkosJvsTmJd5f0JfVUinlFn5puwQoNjfRwUBoGJcCrBnmkMYhKBo3XnTcpRlGC7H2P6YQcbKHqhpdJNfYXZbS0xbyiKLFvf9Vd160uUgEOVXtCUgeNsO%2FcrwTpFQFinBPm32GAt%2FLON5lJcOggMZNDZOCI2k0Fxyn7voJCoYf7MUzYloyHXb%2FoQ7Twxqk0Ko5ZvhCLOmjfB%2FEpybb6rjOIx51fh4GQXfxcoHaGluL9jVMVzdwsW9wRpkFkwSjKDrPpDhccHkFZ7tgyzwj3s%2BYe1PoqxsUGhDV9dtEhTsyIe7jhUzXEqwAQ8DV2pQbToSWHpP3iNuqitP7FtlzjaEWYT8%2Fguc1TXYgtJTnnSh9U4ub9kNLw%2Fc2j6qLG6hrUR%2Bll53C5XBXct20AytMqNMPWmxE47eqXW5eSMIyw3OVDsTvRZX0JzzH1SVSTJb5KL2JPXPumGGKErTZ8pSXNCPUw9L68xAY6pgGt8mCWpo7R0zofG1FewTJiCGDaCN7inUMXij4McroSeAeRf%2FdgpWBayRFlDU1ls9ZNqSNA8ayZ7bcLTm5v7kXovoeWGa6p5wwCLmf1mXQLIpfCGyd2%2FXM%2FsTNGL4HzyP0X%2FAdt1H5Icdlp79rE4mWEgJi28Ljd3vILEdaGRZlOxV1irIuN2ywc3pdGRLCcReUfFSDmwkU7Mp5FEBLop20Ln4xpKTdy&X-Amz-Signature=3393a71b95fc07288517b0161a387071957ca638415d75e2e84f644c480eca99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUP3MF26%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhltdmsVMozefxgNlGKuRsAkc9uAr%2FgN%2BddjGVJrcfuAiBLK7rhYHgc5pM2vnvvywPfhZdlgVMXNs0ItdjerNBL2yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv%2FJeTx%2BtZGbXMmzZKtwDy7JfFcR5bo1RiuB44xgsfM9cPU5zwW277pe14bYUEtrMCz1cMxZvN%2F3Soj6gHLIlXWBl9OadaTiGTgnDdqBtShFR84MOamjGAmJ02Z3RaDKMIqnXc%2FVDpr0h7KBzV0dMaMS0dIQ4c2%2BxeoboJ9faF3ECHHW8FtqikmwgfDFkosJvsTmJd5f0JfVUinlFn5puwQoNjfRwUBoGJcCrBnmkMYhKBo3XnTcpRlGC7H2P6YQcbKHqhpdJNfYXZbS0xbyiKLFvf9Vd160uUgEOVXtCUgeNsO%2FcrwTpFQFinBPm32GAt%2FLON5lJcOggMZNDZOCI2k0Fxyn7voJCoYf7MUzYloyHXb%2FoQ7Twxqk0Ko5ZvhCLOmjfB%2FEpybb6rjOIx51fh4GQXfxcoHaGluL9jVMVzdwsW9wRpkFkwSjKDrPpDhccHkFZ7tgyzwj3s%2BYe1PoqxsUGhDV9dtEhTsyIe7jhUzXEqwAQ8DV2pQbToSWHpP3iNuqitP7FtlzjaEWYT8%2Fguc1TXYgtJTnnSh9U4ub9kNLw%2Fc2j6qLG6hrUR%2Bll53C5XBXct20AytMqNMPWmxE47eqXW5eSMIyw3OVDsTvRZX0JzzH1SVSTJb5KL2JPXPumGGKErTZ8pSXNCPUw9L68xAY6pgGt8mCWpo7R0zofG1FewTJiCGDaCN7inUMXij4McroSeAeRf%2FdgpWBayRFlDU1ls9ZNqSNA8ayZ7bcLTm5v7kXovoeWGa6p5wwCLmf1mXQLIpfCGyd2%2FXM%2FsTNGL4HzyP0X%2FAdt1H5Icdlp79rE4mWEgJi28Ljd3vILEdaGRZlOxV1irIuN2ywc3pdGRLCcReUfFSDmwkU7Mp5FEBLop20Ln4xpKTdy&X-Amz-Signature=bd63b8bad9a54cf263777394a35971e381c68e4ba94495df7970390ce81e887e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UATDOQL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYia0fs34QVhA1wl5WuyfjNEaTeApQGOJgFdUhe%2BQKWQIgGcd6vt5Yn2kMhz1wP83Cr5IeSyYLg53xac6kV%2BNF0mkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEnvxQ3MHcHXWugSUCrcA%2B%2F7XY8qkQ06vw4Gbir5Mskq7MI8JwRKwarId4t%2BrdpVki7gXxe9ANu%2FXB9SE2qO8oTosgT%2FrhfoqFrezfh1GC9wO2kAEqVqibIN4YyisSY5tt29PD1VD8C3%2F6QxhZVgKIB6MQWAlxUzV6W5zMyL%2BLkEZRSTNFOXmivaDdVzCqUy9beEban4tUSMAeZ0xJUhz2NymRtywLU%2BbT5osIC3hfloPmsXrcdsq7ACqliC5HPSVMK%2FEHgf%2FH2bMnGb7Icwiass%2Fz1uqeNyIC%2F%2BwsW3KRlRbSM%2FF%2F6fNsiC%2BZiK%2FHH6tit3Mua%2FWxZEKI4%2FE6lB5akMW7dog1Xi60UvOy%2FLsVFmc6Xj6blGNfzz4mkhd0Y0%2BZjB%2BwSUI5x4pY9qr7tR%2FRj2SsoKwjWNm%2Bw9%2BXtq9LHoypp9YBoGhbQ4ytn%2BwkRfPejnph9NWSodb5N%2FhccUrvD6UWMBqHi2qCQFTj0RlLw9qURRL3nomegzmFaJgOiQJQq3d6PLi%2FPWrc0u7Ck%2FHm97vQ4vEaxWiUsKLzLTuG%2BFWZdc9jmPKQ3p%2B2jyaAKdI76WQsYUF2OI9cGwjy1bTnaJVv2CLwdAazgNJkX%2FZRw34n1AceP6Vx0681AmmMHUC2UBapJsfrTAcZNQMLbFvMQGOqUBcfB9v3gI6HcT4WQmkJR4KdAsLwtovJIdKxrHZe7cjYhRdddY8HBYiAcu6%2FlIzlvdNMSGKiYuU5Hzkdy2ckq6ak1uyAlLJuRiRS7Y8iliD9nvKXUpDiuur9WV3sDoV50vEvk5DoUytpGNTDA79CpMQUzVuVh6uK3mcdjt4Jo%2FXIcbo4hZfmejOBarw8W3iHt9StFZUa5Rh1caN3yjGyM3noqrIPfa&X-Amz-Signature=54df5760b95e85d5967c297e43c3fefd67d7527aec631d8fb84c9a6fd485af87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SZKJN2N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHBOFYvSkx0KRJqVjqg4l9FlitUiOC0m8M%2BohCOdNijAIhAL%2FMAm713f9O57UKw5tqo%2F01M7TnxBVkk8iUas9LY2WNKv8DCCoQABoMNjM3NDIzMTgzODA1Igzrtm4WWheM2UqXAIUq3APQXhJpMRpyumkv55eHZvBJCi7%2BWmtvWNmSIHXW5sBIo8MdwMDfQCwVfNR9mzEAmvBrCb75etfWLAbm22Pul1uhK7BGcYwOey3Y%2F8jmpYS%2BHMfN3IEkSKfvFq48U0eXxL9b61LcCvJjfbgmYi%2FSwZwzKn3BjxfITKzS17vGiL0VlYU%2B2peZiP97RhQ4BL8gvcbUywBTZGq8RArWy6JwDg6eXxUIsx%2FnOTgj9MpEABNRxWslmCXRmhTS6goY%2FkR0YIVn0TBaI9aNwvKwDDLDirmqTHX2eea0YbJ6silMV46B%2B731KwBDjnQtu3AVieRWx8Mk2Oxt%2Fi%2BE%2FRwvmLfGUvpY8Omb9I7vVo4puiWuSG2NIV6HjoSelTvnRxDeOHG0Pa5lz%2FcTi4vQGzIvzDhfvXgxsczmhMd27BDCFb9c9AohK6u71RtYFoyUcVvDmLv%2FpoIIju9cHpDG1iWsCEQRsSJ1r70Q3qGNLKpT6of%2B3BCgnm6Cf%2BpkxWWqJcsQWnaYlMatRrTI5DbAL3KEN2mECX4DouybgSrjoGOzYZt8%2F2N8pO4YKA6zw0iYcfEKnUym3QRK5kztGmrO2UO2%2F58OPVV90yySQxGOD8jo63K0JfGga6YNUVixzakSBVxxbDCHvbzEBjqkAW8CgX44bsGrrx%2Bxs4Rlqu3nOoBnYXpKtUWr1WRdvNFd3xE8zcENIHv%2B9mYlKYyDnvt2jRBl5IGLRg%2F8lWsAGAZSWiQI7tMXwZWTe%2Fvj7rSgzxl%2FnU8rNOc3eqJINj68tKqdvNWABW8PSGYixOgas%2BxYEC1zbLjKD4gOUrpvDZE1OK4p786lHF%2FuqOifZ8ealham05RG%2BqQBxkO8PRfKKTUkwgVN&X-Amz-Signature=67578bfe7f9b13f4e8726e135af95c48e4c9c70154cf603474041085f9bb50d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4W2TTTS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdDkCAzM1ixlEgcD9aQlk6Z9sy934z0714hN%2Bxbr%2BRcQIgZUHqpy834edAL4UFQs8BNERiPGaF98aG3hefaT07T1kq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEoXG6PN0wiO3yVHJircA6jugIZtDzr6jVMOfi5Le7QTKIUexfETbR5ajudvDx8%2FC7iuNlKOXnNFU2CGKQGbm92TLZC8AjlWRcvJw9F%2FmHxEkNuHuJ1hO4TvozC9%2BogyVEzKHoUHtGtnzerLWcKhaHXZEKLJlQUt2ZzBLrbqSfIetPcR%2BBNE0EblEZtWW7%2FdBKUoWvxyX1mFiXMmo5OX1LmJl4qu4SbkEW0aEBezS8prIQFhV%2BOW2LcI4m2iEmSMtq8RN%2Fz7GwmUQfc2qg6Z%2FNdblIfrlw9tp%2FNvj4ec5PWmpktPAttpI54wCTHItHdOHnxuTxgX4%2Bo7635X4QAjRZ7y11TwVx1ODrhOAvcG6Iw8kVogxw4cM%2FxMjRfPuGKkrWRq3bPOFD3I4%2F83OeP1rE%2FZ34yzIxv8I%2F623C4ebA249Nw%2FCfEj0fcA%2FGbZZ6nyxXk6%2FMi6f%2FN9DxIxhcB8J1URNwYMU1EjSVxXUMB2ihi3a8kcmKyNoO%2BQoWfhW9%2FIdfUGYd%2FihnEmkSGqd71ITTVU2hC0Y9KC9mgL3dgtoUHUQlpdlzAy%2BaZtjKb4pSyfyZDNBzV7LwDXdAdrLyKOQOekmQJJ5%2BH5oePHm3Srmq%2Bsqstvlp%2BiRUqpIebhE2bY8Fb7eGhYJnQsGhsBMObMvMQGOqUB6oyysEetnuqoFUuYV8RElh%2FegeghED10%2FOyOyooDlfFFckSn82o3Zrhfd2kHEMHvI4lW25Qw813jRmb%2FhKsV75QfCvZ1sF7oY3n%2Fajyzh43YLvy0H4EmlhaeyXFc48kBboGwj51trRaMB5v7eSAfZuKvUXMFvTa8g2In3LYgkg%2F62AGbSAayUsDYk0%2FPeyhEszZ8Lk6QSzYTkfWkB9dr3Ykv6kZT&X-Amz-Signature=4e8b858fd77060d09507e81b7240a51639cbaff4cb7734e01a36ac783d2e3522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUP3MF26%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhltdmsVMozefxgNlGKuRsAkc9uAr%2FgN%2BddjGVJrcfuAiBLK7rhYHgc5pM2vnvvywPfhZdlgVMXNs0ItdjerNBL2yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv%2FJeTx%2BtZGbXMmzZKtwDy7JfFcR5bo1RiuB44xgsfM9cPU5zwW277pe14bYUEtrMCz1cMxZvN%2F3Soj6gHLIlXWBl9OadaTiGTgnDdqBtShFR84MOamjGAmJ02Z3RaDKMIqnXc%2FVDpr0h7KBzV0dMaMS0dIQ4c2%2BxeoboJ9faF3ECHHW8FtqikmwgfDFkosJvsTmJd5f0JfVUinlFn5puwQoNjfRwUBoGJcCrBnmkMYhKBo3XnTcpRlGC7H2P6YQcbKHqhpdJNfYXZbS0xbyiKLFvf9Vd160uUgEOVXtCUgeNsO%2FcrwTpFQFinBPm32GAt%2FLON5lJcOggMZNDZOCI2k0Fxyn7voJCoYf7MUzYloyHXb%2FoQ7Twxqk0Ko5ZvhCLOmjfB%2FEpybb6rjOIx51fh4GQXfxcoHaGluL9jVMVzdwsW9wRpkFkwSjKDrPpDhccHkFZ7tgyzwj3s%2BYe1PoqxsUGhDV9dtEhTsyIe7jhUzXEqwAQ8DV2pQbToSWHpP3iNuqitP7FtlzjaEWYT8%2Fguc1TXYgtJTnnSh9U4ub9kNLw%2Fc2j6qLG6hrUR%2Bll53C5XBXct20AytMqNMPWmxE47eqXW5eSMIyw3OVDsTvRZX0JzzH1SVSTJb5KL2JPXPumGGKErTZ8pSXNCPUw9L68xAY6pgGt8mCWpo7R0zofG1FewTJiCGDaCN7inUMXij4McroSeAeRf%2FdgpWBayRFlDU1ls9ZNqSNA8ayZ7bcLTm5v7kXovoeWGa6p5wwCLmf1mXQLIpfCGyd2%2FXM%2FsTNGL4HzyP0X%2FAdt1H5Icdlp79rE4mWEgJi28Ljd3vILEdaGRZlOxV1irIuN2ywc3pdGRLCcReUfFSDmwkU7Mp5FEBLop20Ln4xpKTdy&X-Amz-Signature=f775782f3c195fb507bb27d301b08f499953a1ea277109252fbb70d18ab1b802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BEZYHJM%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDru6M5oO5PG7Yp3V6WvjelpsYs%2BjoXG%2FVGFCmrtN4qzAiEA8dkeZ97ljNTJe5E%2F66%2BkfmxfTynT4GUQBV2dj%2FkAubMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJTTeTewH%2FdehrlKkSrcA0MeSQXNipisifjNGjK9Ejq2FA%2BPGyDUPuC5iWuMcxPfrCcocrsr5Yn7EhMD1l99jZNHrBAyvjE1HWQGIKXtREgQSv13el4QN8%2FeTz7BMbzyjhjyypaf9TkX5onNl2kMrhceUrjonvjiNSsBYUyNge2SaM6kW5rdHS1eXdG3UgoY3ttd6%2BcA9kyFJxr4qwk6xAvwyuYCm%2FHq9PvWmEzwHDXE0foJhmgqSF%2BtzswHFtB9OlKhI0DwsMyMAgsomPaNl3OmY1ihNb1YKDmaDeQxXDIVSQJlQV%2FMrYx18Wm7xpRiWKuU3Yt7HxSV%2BXCG1AfwaCbhkjO9OUnWkAE9MWWt0QaamJOKnEwgc21RVxtAv28dm5RRTuCxYvUz%2BI%2B9bgTzMh4wd68ar6AcDTVnlCzHmWif2xNP5a%2FDkbMi0MxgVWF3a9IImurjxUTRCia5SiWuSQ7nbgKAt%2FTPEWoPQ1rBULqMd1wBTaTL1VkFUMC6WDAugCPye%2F5gf16l9v5hdjI4tWRBwoT2LMC0ydaKDmkHSXM7Ldc2HKWm%2FFsWgPBTbwmAoFCH%2BCfCKnqOLNevp75hG4oEXVbQf6WAHHrhwtycq5doaZf%2B89DvIVa6X8xEuzMvozx9A0hDyv3OX2i8MLnHvMQGOqUBApjtlEbMjAfxvnGVyInmLQz%2FEahGZ7kp4yNJdW6IENgl9MQXD9P6xVWEPfwdI1ji7GleNdoobPuw3x8cnPFxShnUD%2BJ8eTmaLwNZ8DXVb9Mcd6wN9Rz4U4zOY8%2BHWNPSsRqUTeZVCeI6kfswo5f50uxtgitIbujzzwc2F4NPDGhVLlx7Q2hLgxB94jhRVZrgq79JjvFm2NHCTj41S8tozqgFXTLN&X-Amz-Signature=dede699d00055a634c46ff5158e44b7f65da3fbb209ec5535e80f0ef682b1ba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUP3MF26%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhltdmsVMozefxgNlGKuRsAkc9uAr%2FgN%2BddjGVJrcfuAiBLK7rhYHgc5pM2vnvvywPfhZdlgVMXNs0ItdjerNBL2yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv%2FJeTx%2BtZGbXMmzZKtwDy7JfFcR5bo1RiuB44xgsfM9cPU5zwW277pe14bYUEtrMCz1cMxZvN%2F3Soj6gHLIlXWBl9OadaTiGTgnDdqBtShFR84MOamjGAmJ02Z3RaDKMIqnXc%2FVDpr0h7KBzV0dMaMS0dIQ4c2%2BxeoboJ9faF3ECHHW8FtqikmwgfDFkosJvsTmJd5f0JfVUinlFn5puwQoNjfRwUBoGJcCrBnmkMYhKBo3XnTcpRlGC7H2P6YQcbKHqhpdJNfYXZbS0xbyiKLFvf9Vd160uUgEOVXtCUgeNsO%2FcrwTpFQFinBPm32GAt%2FLON5lJcOggMZNDZOCI2k0Fxyn7voJCoYf7MUzYloyHXb%2FoQ7Twxqk0Ko5ZvhCLOmjfB%2FEpybb6rjOIx51fh4GQXfxcoHaGluL9jVMVzdwsW9wRpkFkwSjKDrPpDhccHkFZ7tgyzwj3s%2BYe1PoqxsUGhDV9dtEhTsyIe7jhUzXEqwAQ8DV2pQbToSWHpP3iNuqitP7FtlzjaEWYT8%2Fguc1TXYgtJTnnSh9U4ub9kNLw%2Fc2j6qLG6hrUR%2Bll53C5XBXct20AytMqNMPWmxE47eqXW5eSMIyw3OVDsTvRZX0JzzH1SVSTJb5KL2JPXPumGGKErTZ8pSXNCPUw9L68xAY6pgGt8mCWpo7R0zofG1FewTJiCGDaCN7inUMXij4McroSeAeRf%2FdgpWBayRFlDU1ls9ZNqSNA8ayZ7bcLTm5v7kXovoeWGa6p5wwCLmf1mXQLIpfCGyd2%2FXM%2FsTNGL4HzyP0X%2FAdt1H5Icdlp79rE4mWEgJi28Ljd3vILEdaGRZlOxV1irIuN2ywc3pdGRLCcReUfFSDmwkU7Mp5FEBLop20Ln4xpKTdy&X-Amz-Signature=01208c886132fe62b62ef818a0f6395c54b04de8299e55011188e50d2ef3bfac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIFBASDU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC5myIkIU4a8ucXzaXEdS%2BdNcEYiF0XJ3jYbTUYR%2B1kQIgXNBqIqjEPmD3T%2FwPtEkQMJKC2%2B1oFMdz0tcs2vA1yXoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCANC6gOcYeQ36Mb3SrcA0%2FfsHnjuk2reXrppyNzX%2BK72hssu8FHbVJDTj8B34%2F%2FQOgXSpYGo1G4BxY94m7vjjT6ykcjn6RafxMg%2B6EteE1laLtGrtpSCADNjCzwc9mlDvvErNxImBYNStESlxNsYsBpjhuImf2yb3g1gy%2FpeVTeQ7ppyaTQhNx%2BB6BaMOgCqV6oO1ygmzzp02vhYN2ZHFd5hN0VF8rn%2Bz52Nlzo4H8lS3bx2vN2oRz1NQHiv%2FosJxnEGIqJuOzGe915%2B5N4yW9frwGear5%2FJb2VZjP8IT8jy6VRNrk0uqjtN3dUFYeMWH5UGgDN9wTh78V2kfuMuLkRtSdLqQjc8y0cCHG8dTjK6lC5U%2BuVFcmcLhTXuDGrPLX1ESS49ubyWu%2B%2BxltcwVeVq10W%2Bb4l%2Fd8VPKL0sTSWWLcbH1CmyP5uWsyMWVoY%2F3yLy3vAjKir5ozNJ5khX1NwkgUt6dPIYX9tlL0eOVlP5zTH0xwsLh3VnGj6cmDKe%2FM9Gw2AKHWpO0yd5q%2BkPF75%2BVotgXZXgGh4afDSHb3Dliw4kDMa11HRh3lH7KZejGjju4%2FgeW09UB6nZpV0%2Bcpdj2LF6AvJSHs7mfU2tu6wAcbOvCYUdjREAzobAoYiC9VelseYaM5CjKPSMJrDvMQGOqUBjQVtpgnyhyZw%2BZBjO%2FTHyMpyTDY17ZKMI5vefxthBineA%2FHV90GUBgih5ZtPaphuoUwTKnkQIV4OR2Yiq7NEnUMm1XKbu3vUEXJMtf%2BUwd4Mhu0jcBgisNEW0uPDFXg0oiel73qmQ8HfKGxzGJ687VDo%2F2w1llV1yLtXowrHl3p4%2FEP9Z0ZwAwnXL09tIGuPxlWnK5KChT%2BvFxlowXWxh6VOh0DQ&X-Amz-Signature=059238341b892bec9828009dd27ca2fdc658a2aefa1d84f13a7afca1b4f21781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUP3MF26%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhltdmsVMozefxgNlGKuRsAkc9uAr%2FgN%2BddjGVJrcfuAiBLK7rhYHgc5pM2vnvvywPfhZdlgVMXNs0ItdjerNBL2yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv%2FJeTx%2BtZGbXMmzZKtwDy7JfFcR5bo1RiuB44xgsfM9cPU5zwW277pe14bYUEtrMCz1cMxZvN%2F3Soj6gHLIlXWBl9OadaTiGTgnDdqBtShFR84MOamjGAmJ02Z3RaDKMIqnXc%2FVDpr0h7KBzV0dMaMS0dIQ4c2%2BxeoboJ9faF3ECHHW8FtqikmwgfDFkosJvsTmJd5f0JfVUinlFn5puwQoNjfRwUBoGJcCrBnmkMYhKBo3XnTcpRlGC7H2P6YQcbKHqhpdJNfYXZbS0xbyiKLFvf9Vd160uUgEOVXtCUgeNsO%2FcrwTpFQFinBPm32GAt%2FLON5lJcOggMZNDZOCI2k0Fxyn7voJCoYf7MUzYloyHXb%2FoQ7Twxqk0Ko5ZvhCLOmjfB%2FEpybb6rjOIx51fh4GQXfxcoHaGluL9jVMVzdwsW9wRpkFkwSjKDrPpDhccHkFZ7tgyzwj3s%2BYe1PoqxsUGhDV9dtEhTsyIe7jhUzXEqwAQ8DV2pQbToSWHpP3iNuqitP7FtlzjaEWYT8%2Fguc1TXYgtJTnnSh9U4ub9kNLw%2Fc2j6qLG6hrUR%2Bll53C5XBXct20AytMqNMPWmxE47eqXW5eSMIyw3OVDsTvRZX0JzzH1SVSTJb5KL2JPXPumGGKErTZ8pSXNCPUw9L68xAY6pgGt8mCWpo7R0zofG1FewTJiCGDaCN7inUMXij4McroSeAeRf%2FdgpWBayRFlDU1ls9ZNqSNA8ayZ7bcLTm5v7kXovoeWGa6p5wwCLmf1mXQLIpfCGyd2%2FXM%2FsTNGL4HzyP0X%2FAdt1H5Icdlp79rE4mWEgJi28Ljd3vILEdaGRZlOxV1irIuN2ywc3pdGRLCcReUfFSDmwkU7Mp5FEBLop20Ln4xpKTdy&X-Amz-Signature=1b78378d43f39bb7ab50e6a4c76f72a904fff65d8a399728a2d0439fcc29bdd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EQMVPHH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOlMDj40AJTL4z3cz5FuicFhcTaoHhl14NJt8ojrRArgIhANNY42Hh2lKmxphUO0zLs9iCwyePQHy4bjxHTmIXCWkiKv8DCCoQABoMNjM3NDIzMTgzODA1Igy7NJKBAkzHCl6eTXkq3AOwEhmcC1032Npo9Jm2HoxNiNvgjxdfq0NC5yNyPEOC1J5NzmjiOFDD5yOGHadAVYpRpNXy4EbLq444redp11prZNhjakx3n29XRFiMFjBZ0HWhb9hWkrfjNR1jndMdsH3WPklf5cC%2B3K%2B%2F8WBvL90%2B3NA1gQorfyjAQ%2FzKG%2F65yFEhAsY3syfTM4yYFBn4LX2nBDc39kmp0OunnxEik6n7zsoUra7HpGQvEAbMS%2BgPLz4A8E9qxcoPY%2Fqng4TxDLWyF0fmwQ9SEGB2RteS8uK%2FrKnhuRMfCx6bjRK%2B3gj7K%2FGKKBKTAfn4WZ7NNGGIb1inLmZxOumUwmVGxmibGi9giUvzKgGBT2Dz27ViYWUz2Y7c5zb3g149N8%2FXNkM%2Bs%2Bt%2FLizN%2FSfri7Ya%2BOsbdAaKcFPRHxlYvMi9%2B8F1NdEUJBKQg2MWDT1%2FHvZRAksskk4zhAacFL1VqzI116md5kGMoNSfVx3ZeJlR0bzqjeuIy8IWPxgcnjvfmNzWedC5%2BTQmBvkxPSD%2BsjwH%2BVyHbNb51XD1qrpJHWPoUhh5deNeSFFl0wslyeQBMK9V%2FbsJAAc1IgJT1pVhnVtArWac0We0vRzfF0uVvPB57biQAu6lfG3dFcIcoZZROrD8YzDkxbzEBjqkAWAWXzXmnyZrRA98oTP1XzTXYCjXa6xg%2BHTioXZz89iDHAQRagqkO60x8SaCJ9y1OQrkjbQbEUqjsLKcNFxILOAUUiBbWdnDBIb8u8y0HEizeYls%2BJvtvwnpLX8u0uxwGovxLZqkvE7HGKFMZ2pnpdvdCmLKAigkOqhCl3UEAp75ufoGwDopKkYn5Vbotl%2Fb1a1rmaAyCxNzgjNqeRNWY6RrxT0n&X-Amz-Signature=81c54759ad5b786a015505be5a644f8008c6010bdaf9c1ec176c69dcd8733e4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUP3MF26%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhltdmsVMozefxgNlGKuRsAkc9uAr%2FgN%2BddjGVJrcfuAiBLK7rhYHgc5pM2vnvvywPfhZdlgVMXNs0ItdjerNBL2yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv%2FJeTx%2BtZGbXMmzZKtwDy7JfFcR5bo1RiuB44xgsfM9cPU5zwW277pe14bYUEtrMCz1cMxZvN%2F3Soj6gHLIlXWBl9OadaTiGTgnDdqBtShFR84MOamjGAmJ02Z3RaDKMIqnXc%2FVDpr0h7KBzV0dMaMS0dIQ4c2%2BxeoboJ9faF3ECHHW8FtqikmwgfDFkosJvsTmJd5f0JfVUinlFn5puwQoNjfRwUBoGJcCrBnmkMYhKBo3XnTcpRlGC7H2P6YQcbKHqhpdJNfYXZbS0xbyiKLFvf9Vd160uUgEOVXtCUgeNsO%2FcrwTpFQFinBPm32GAt%2FLON5lJcOggMZNDZOCI2k0Fxyn7voJCoYf7MUzYloyHXb%2FoQ7Twxqk0Ko5ZvhCLOmjfB%2FEpybb6rjOIx51fh4GQXfxcoHaGluL9jVMVzdwsW9wRpkFkwSjKDrPpDhccHkFZ7tgyzwj3s%2BYe1PoqxsUGhDV9dtEhTsyIe7jhUzXEqwAQ8DV2pQbToSWHpP3iNuqitP7FtlzjaEWYT8%2Fguc1TXYgtJTnnSh9U4ub9kNLw%2Fc2j6qLG6hrUR%2Bll53C5XBXct20AytMqNMPWmxE47eqXW5eSMIyw3OVDsTvRZX0JzzH1SVSTJb5KL2JPXPumGGKErTZ8pSXNCPUw9L68xAY6pgGt8mCWpo7R0zofG1FewTJiCGDaCN7inUMXij4McroSeAeRf%2FdgpWBayRFlDU1ls9ZNqSNA8ayZ7bcLTm5v7kXovoeWGa6p5wwCLmf1mXQLIpfCGyd2%2FXM%2FsTNGL4HzyP0X%2FAdt1H5Icdlp79rE4mWEgJi28Ljd3vILEdaGRZlOxV1irIuN2ywc3pdGRLCcReUfFSDmwkU7Mp5FEBLop20Ln4xpKTdy&X-Amz-Signature=644e06895b768ee6be8e8051a3f3e3f68f560e1a8e464a709da6bc51152eb831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634M4LFNN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T101021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHd%2FZyBppKWx%2BBQJoe2fX2HwxEUe6OITWRryiwmEgGQ%2BAiEAs%2Bi3PrgR%2FzZ1j6OzW%2FqtzgZiWbiFSaXP5zq%2BvLjkwjcq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOJgz3rfnRqa%2BDZZvircA1VsZxk873Xjd82%2F%2Bwl9ePqniOfAj%2FziAlUWr%2FQl23NdHwjhTCHF9fj3lcq3WeiGH7O%2FI4KnCtlLXSCaJ1raS2Mykj2W71PiW6dby9sGYUFsue%2FlgysY8V7XEdVR6VK4W5Ca3xAgjucTwTL25wCwx5PTgv9loUVCz6xUy4stgImW%2FAaoh7W%2FIhU%2F33Uznz478ndhDqiBxQXeOnisrcX4DYCXtaFNwJhwiOy%2BJTgdx1o%2BJkB%2F%2FLa50DqgkO2UH7Q01SsfgFBTpvlr5TMp%2F9ooiD%2FVdiFObzyRLY%2FaQftKgCNz%2FKy7KUyCpRHau9w4s1VvLEcyo%2FTay7H07GF46lCjvhHh8nBwjeO5GPOK2fkHxKkLQEsNLX9mgbxFq7cwbVDbh29n44UticUbd6PKioBOJPbx2tSJLdKkbhIOV3RwwNotsUQJ1IsY88Pg9eKmUlZoxdcpLT6eTseyRbi2udjZtPXKsfmbER93%2FdXb8Y2u2KfYvY5CWsmZAKQOD2c2ygvkjnJy%2BDpMUtNbcNRcKQf9GlItFMlE%2BEJ267tSjU5D6X0%2F3hKPbo%2B9kLh7gJd2w4eIuhcblFVRzANCyNFf5jBQS6M11JKK2qXF26xjRDbfbDR4GsS2YGsuZgLr28wtMPG4vMQGOqUBVb6MwUsTl%2F8bWCuHdo1JIZ93ixKV%2FxT8qEw%2F7jkQGovh8nj4iuG2ym41WEbq4KrronJejXTW5ZC6Ez6kvmh0i4OCQiMQq%2BVLC3kS1s82RuwrE5FC2AubfwsZ0%2FixxT8g6jzGWRtG1bSSnTB3kTC4DAeTD2ZEFhhn%2FC8ibVK3EodsJ0vG8i1K7YmY1uCEdu7WkCuV3tdJx%2Fdeb9f3thhj%2B1X5ZhvS&X-Amz-Signature=4e9e8381e23386da12169697b6395f94024f4cc12b694fc96953c19aa5054854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXGLF4CQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T101025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICriekJYZ1TfvuZR%2FTfYx3LwrBOtd9XCwtvgzvvsS%2FR0AiB7irXyMlbVriBRaNk2YH0H294vcaXLBGJO3dsekzeadyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMXq5Ss%2Fe0xVYy99RwKtwDptcuv9Bicqe7%2B1d8eGXA%2FGFWQB2gQe2tVE%2FNJ05chm5Yl%2F4SBg%2Bmppd8k4fGobn5x739mcguKcljQbWLhJ2tM6ZcJUZXioDHieugxZOfS0pQgy9ofKOWmihqm0gDVxdR3ShyeF1hSZ7kUhlIotXCXddci9xaS0KN7LgpP%2Bc8qVEgmwgX9E1lQklPwLwMXbyrE%2FZBVmzjBs%2BgYkT4V%2FbPnu3txOvU7X0YVGxI%2BNFL9227Wko%2BPeznZ4gUgPcxpcj78R%2FZ993%2FzYEdzoZQZDxCvcIP45QRcKPhVDduJy3Tw1iBs1wYnCCrNx18hlpCe1o2fCoWWyi3KdMMnbk9YkZjAIdAOjbDld%2F5nYT%2FTJ3VmpWWcbR%2Ba2asW%2FteYwYe5GaDV0cGDzBba%2BVSW3SPTUKVz6qu%2B%2FiOsXnXYHeXiISxt%2FkW9UVYSQ4yaSB6LkzUylNaFdYfMu5tm7EQoLF2XaApZ5dXm1RrLxA0SSn3ScZNMzO9WYKbncuqEmrxLbXDPsielP2fK1EUprT5H3VRbJ0NjgQvBvnqoFKA6zrraEZoFuhIyY7LXTL3UDOGTuv3HFjw3qdI3buLx445mlVC%2F%2BG%2B3UPjg%2FrH%2FZio%2BXzO6SHO%2B%2BI4wlbE6SVycby6H2Uw9L68xAY6pgGfuUGHVlEbFkSa%2BaPbzfFm7HyLmtxpjlwd5k9bXcTHTTMdZ2a8e%2FpQdCeKhv13944hh1UX70BG0mjmPg28QDLyN%2BlBREpI6yFDw%2Bz5arGvcOlJHkSLV%2FS8KU%2BrMUeCqAPxepQfkzalewuj11JcX7rbPD%2BWBTb1CBQ1h24qJrtYhF3M27bASGYNaLu7SU7UXd2YeL3qldswPFJGqdiD1MAk5ejcypCn&X-Amz-Signature=b446d97ecafc67fa934eb4f899e3412382cd981d4c31c900bfc0b6ee84f6be20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SZKJN2N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T101026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHBOFYvSkx0KRJqVjqg4l9FlitUiOC0m8M%2BohCOdNijAIhAL%2FMAm713f9O57UKw5tqo%2F01M7TnxBVkk8iUas9LY2WNKv8DCCoQABoMNjM3NDIzMTgzODA1Igzrtm4WWheM2UqXAIUq3APQXhJpMRpyumkv55eHZvBJCi7%2BWmtvWNmSIHXW5sBIo8MdwMDfQCwVfNR9mzEAmvBrCb75etfWLAbm22Pul1uhK7BGcYwOey3Y%2F8jmpYS%2BHMfN3IEkSKfvFq48U0eXxL9b61LcCvJjfbgmYi%2FSwZwzKn3BjxfITKzS17vGiL0VlYU%2B2peZiP97RhQ4BL8gvcbUywBTZGq8RArWy6JwDg6eXxUIsx%2FnOTgj9MpEABNRxWslmCXRmhTS6goY%2FkR0YIVn0TBaI9aNwvKwDDLDirmqTHX2eea0YbJ6silMV46B%2B731KwBDjnQtu3AVieRWx8Mk2Oxt%2Fi%2BE%2FRwvmLfGUvpY8Omb9I7vVo4puiWuSG2NIV6HjoSelTvnRxDeOHG0Pa5lz%2FcTi4vQGzIvzDhfvXgxsczmhMd27BDCFb9c9AohK6u71RtYFoyUcVvDmLv%2FpoIIju9cHpDG1iWsCEQRsSJ1r70Q3qGNLKpT6of%2B3BCgnm6Cf%2BpkxWWqJcsQWnaYlMatRrTI5DbAL3KEN2mECX4DouybgSrjoGOzYZt8%2F2N8pO4YKA6zw0iYcfEKnUym3QRK5kztGmrO2UO2%2F58OPVV90yySQxGOD8jo63K0JfGga6YNUVixzakSBVxxbDCHvbzEBjqkAW8CgX44bsGrrx%2Bxs4Rlqu3nOoBnYXpKtUWr1WRdvNFd3xE8zcENIHv%2B9mYlKYyDnvt2jRBl5IGLRg%2F8lWsAGAZSWiQI7tMXwZWTe%2Fvj7rSgzxl%2FnU8rNOc3eqJINj68tKqdvNWABW8PSGYixOgas%2BxYEC1zbLjKD4gOUrpvDZE1OK4p786lHF%2FuqOifZ8ealham05RG%2BqQBxkO8PRfKKTUkwgVN&X-Amz-Signature=10865cac78fd904ae44028b73c76d101a8ffbec0be3417714b60a7eda8c2504e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EJ3W6IO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T101027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl6twd4GeYS8N3x4pjZU8Y93l1UJzteUrOGB4COzwf8AIhANFa7hZ07A9o4H9Lv3FDWe8Acic2kAww9o2bpkKy1IEkKv8DCCoQABoMNjM3NDIzMTgzODA1Igx3bqLMK4SpB3LZ5v4q3AO2bIQudpJNU68lIqj6VbSR31mnfic88naGbbJUKVQWpD%2Fcj0MZkj0NboBjrwOmpvUNvbkFBGHM4VwJR0XcLEWpjS6nkJ8qVRjgNOV6onMcpUzb0Q7hxTrt2c4Po0zXwhF%2FfSOuUkRbG3ShrqkvzptjBNZYnbG7Dh1AemICjL8u7CDJgHrtpKpUV%2Bp89CaQ%2BKU1NA55366RjsxVIgB0%2B85g%2BghotrzHIM60oKSXikjGqZzvyYhNP2SXzoX8wgXGJoeb7br8elLpEjFDNryw8WYVvfdfNX1wru0l66%2FQ151915p73P03FBpfcOHugszp9GzFX0ZBt0kMG5P6XuKwdRwEX5f2CjfkRTI2PAi6FDrBNyNaW6oPTXgO5HwQwrMUUXDaekl6s8b1wv%2BBOeegbebLs5GRD4rCYw%2FvAsx4mGoXFdhwmhyo0URluHrAAEvjTSlXJV0Z%2Fu%2F0z8z%2Byo70v%2B7s5QAOj3UF9Wfommq80%2BUGjS58Hkh7r0M6FVhtDkz42ko7TuF7ChJL6EdoxA42zwM0WPzohTXSAGrU%2BDmhJNH5EFT5GadG%2B4uszIbiL1TnZZuJWgbUrWC5p7nxY7%2BVkjxg7Pr6JJ6mazRfn9fDhd5vYPo04c9NaR7tcFg7%2FzCRwLzEBjqkAScWDcmJ5jdlmBqMn3jmrR6YybpD3UtmME6vHctvfXj6mTXMA%2B7MjV2RP8p6mDbF8qfcuuXge2tGaOD7f%2B60A58MSCoehN6GtfooI99MqZPBndhSbOGCFW6SSx51rN7iLxvvJtL7UoGSqEdSxS9O12FYFmqyeuhPOlBw8nEcvpIF1eSvG2H2LOgQz0NwJKAhtf%2F2OPfkcTOJpSEFW6wU8NQKchpN&X-Amz-Signature=6b7d9b4ba0c1bb28bb0803733c5c0220acccef815002d1128e0da5fe47c36775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQGRATTQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFWtfydqAs7%2F%2BXNlLdSkxN1Q5NwxEFZVZoUQWI1JAXvAIhAIEwrH62p3fP1Naw5NOPq9vt1o7yIWg5Jv7FC2lLAzdDKv8DCCoQABoMNjM3NDIzMTgzODA1IgytmQOM3g7NzxJDfH4q3AOWNfhk4ccqa3gmhe5bTxAc%2FXpyOJ6sSVdxgMkfs5zF3xB2iBmZF5wze1KzMIlBdZ5gq2NsIrHJpqklUdcKbV1l8dZntTPh%2BKeBaILX7yWjN6SHmx%2FIrBwGne%2Bq2n8vrwotWB9nkwEWmlK2fDnYkPtenvddkY29FI211JByR%2FEV4J%2B6zFNo7ukpsKGNHs3f5%2B%2B4BtuUt%2B1y5ht%2BBWfp%2BpCzSlQomGPm5Y%2FfxmUK27rriCvxeGmKF%2FMvPu6TnIpwvenOWAkeg89cBGeljl5bEauOtJMxKRgCDG%2BCHg63ujrNPOk1JOGJSTtx6JqG5dDuN0anFofgbLAjg2sioJB1kgBWnA0ySKp2OjCXtarqpRpBKUYfX8%2B8kWwTTSO5kN%2B8pqNVa%2FTFaGr5eJ7%2FFXz4NaaWrMg3QiQkm4cyGfpBch11%2FT1WAnyAAYzE39GpBVp7yGWuoq3fTuvjZB0uqykFLrDSjvzyu4Vnvy3qAfZrGbFDCmgqTjdVE6eLHvgddvwYbNuKr6qbIlLtCfHYcQlfTQIneUecrpi%2BDiGD1EbbNU6Hlf%2FifNSL99o5%2FWvg5GAIHSIV6BO6iA9Qy5RM04bUhErUH8a5e%2BwZuvUAewUaNyIYxRUdxwWNukwQ2epyIjCCxrzEBjqkAXh%2BiKWNDLQPu%2BH%2BkTb6%2FdySFwV6eMDoXKQxO%2Fb12UjP8gZgeqvkeTXVWNN5yCCCelLY9pm1Osf2QYbi6RTlEfvdVf0DNMLL4G7p7ybaQP5Ah2vBr0eL2XFwMVKTlgnB%2BxSM7Ybr%2Fent7Q%2B7uC7%2BvHuk3OjvUZAKEqHFK6g4Fx4Mqm6nmdUY8V1eFGpySg3tO3YI58Qys1PHFDPtObxaPnC%2BmrmJ&X-Amz-Signature=94cd92004abcaf292ce4a3b8bf9bf0dca9a98cb6efb0afa2abdc8c82ce3ddc51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUP3MF26%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhltdmsVMozefxgNlGKuRsAkc9uAr%2FgN%2BddjGVJrcfuAiBLK7rhYHgc5pM2vnvvywPfhZdlgVMXNs0ItdjerNBL2yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv%2FJeTx%2BtZGbXMmzZKtwDy7JfFcR5bo1RiuB44xgsfM9cPU5zwW277pe14bYUEtrMCz1cMxZvN%2F3Soj6gHLIlXWBl9OadaTiGTgnDdqBtShFR84MOamjGAmJ02Z3RaDKMIqnXc%2FVDpr0h7KBzV0dMaMS0dIQ4c2%2BxeoboJ9faF3ECHHW8FtqikmwgfDFkosJvsTmJd5f0JfVUinlFn5puwQoNjfRwUBoGJcCrBnmkMYhKBo3XnTcpRlGC7H2P6YQcbKHqhpdJNfYXZbS0xbyiKLFvf9Vd160uUgEOVXtCUgeNsO%2FcrwTpFQFinBPm32GAt%2FLON5lJcOggMZNDZOCI2k0Fxyn7voJCoYf7MUzYloyHXb%2FoQ7Twxqk0Ko5ZvhCLOmjfB%2FEpybb6rjOIx51fh4GQXfxcoHaGluL9jVMVzdwsW9wRpkFkwSjKDrPpDhccHkFZ7tgyzwj3s%2BYe1PoqxsUGhDV9dtEhTsyIe7jhUzXEqwAQ8DV2pQbToSWHpP3iNuqitP7FtlzjaEWYT8%2Fguc1TXYgtJTnnSh9U4ub9kNLw%2Fc2j6qLG6hrUR%2Bll53C5XBXct20AytMqNMPWmxE47eqXW5eSMIyw3OVDsTvRZX0JzzH1SVSTJb5KL2JPXPumGGKErTZ8pSXNCPUw9L68xAY6pgGt8mCWpo7R0zofG1FewTJiCGDaCN7inUMXij4McroSeAeRf%2FdgpWBayRFlDU1ls9ZNqSNA8ayZ7bcLTm5v7kXovoeWGa6p5wwCLmf1mXQLIpfCGyd2%2FXM%2FsTNGL4HzyP0X%2FAdt1H5Icdlp79rE4mWEgJi28Ljd3vILEdaGRZlOxV1irIuN2ywc3pdGRLCcReUfFSDmwkU7Mp5FEBLop20Ln4xpKTdy&X-Amz-Signature=fd57b9f2495abda541fd841c0636a7aa32f163f426d359802f6f4a68a295e3d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUP3MF26%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhltdmsVMozefxgNlGKuRsAkc9uAr%2FgN%2BddjGVJrcfuAiBLK7rhYHgc5pM2vnvvywPfhZdlgVMXNs0ItdjerNBL2yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMv%2FJeTx%2BtZGbXMmzZKtwDy7JfFcR5bo1RiuB44xgsfM9cPU5zwW277pe14bYUEtrMCz1cMxZvN%2F3Soj6gHLIlXWBl9OadaTiGTgnDdqBtShFR84MOamjGAmJ02Z3RaDKMIqnXc%2FVDpr0h7KBzV0dMaMS0dIQ4c2%2BxeoboJ9faF3ECHHW8FtqikmwgfDFkosJvsTmJd5f0JfVUinlFn5puwQoNjfRwUBoGJcCrBnmkMYhKBo3XnTcpRlGC7H2P6YQcbKHqhpdJNfYXZbS0xbyiKLFvf9Vd160uUgEOVXtCUgeNsO%2FcrwTpFQFinBPm32GAt%2FLON5lJcOggMZNDZOCI2k0Fxyn7voJCoYf7MUzYloyHXb%2FoQ7Twxqk0Ko5ZvhCLOmjfB%2FEpybb6rjOIx51fh4GQXfxcoHaGluL9jVMVzdwsW9wRpkFkwSjKDrPpDhccHkFZ7tgyzwj3s%2BYe1PoqxsUGhDV9dtEhTsyIe7jhUzXEqwAQ8DV2pQbToSWHpP3iNuqitP7FtlzjaEWYT8%2Fguc1TXYgtJTnnSh9U4ub9kNLw%2Fc2j6qLG6hrUR%2Bll53C5XBXct20AytMqNMPWmxE47eqXW5eSMIyw3OVDsTvRZX0JzzH1SVSTJb5KL2JPXPumGGKErTZ8pSXNCPUw9L68xAY6pgGt8mCWpo7R0zofG1FewTJiCGDaCN7inUMXij4McroSeAeRf%2FdgpWBayRFlDU1ls9ZNqSNA8ayZ7bcLTm5v7kXovoeWGa6p5wwCLmf1mXQLIpfCGyd2%2FXM%2FsTNGL4HzyP0X%2FAdt1H5Icdlp79rE4mWEgJi28Ljd3vILEdaGRZlOxV1irIuN2ywc3pdGRLCcReUfFSDmwkU7Mp5FEBLop20Ln4xpKTdy&X-Amz-Signature=c974ce940e62797d06d797374eeb7d8372f352284061e2c746b3e963d5644844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOGKFST%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEh%2BDjS0roSopzrtIe0WmDWoTHgAk1ZfT19qgp0HYqjrAiAgnWPocqomYxVKyWd8TaACO10%2FHUpYE2kLKUlOFLPhLyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMJKAOP8T3M1rMD7FhKtwDkizy7AdUULbmU%2FN9VED4PCwMPDfS2aWNsCUstRliW3Lgkhg577qlDku1b%2BgGXEsQTWY4Gu3uD%2FK34c7WFXy1b%2BXenyHtRQUr6XiZ192vw87hfdLU42xSOjw5vzyUoQLethhmSbm07hjuvOFfRjJmT53EaWzoOGum0Cxbj3Llri2koBBmo73epmenuUlnUxIQ4UFzkhJNXxzwJxdtqIBkAwrqy4I4ysst%2FDxIAwV3KVXmuxUBR7wEyleKLqmjaB3Zh7cU%2Fl8WUvyIaL%2B9EKNQRoNOQCxx485A6T%2F1kZjDsFqUI6clBr23J5Wx0TYPcpgZCqGTL4LbNFCko3wSxlz5gYA5qCzhn%2FV%2BL%2BBnQdioNp6yz60wcdOK%2FGA6qsVDsbwDVeTWwFApiu6QoB%2F9FZttKLvmpNgM5E2ctxc4vY%2BRoR7l7ezsVZGRyD9Du8IS719ElrOxWvLZdoNtJBLc2JrY59tVgckyIq0Hc2z8myM3sTVC9UR%2BecVq759bQw4aQbRPB1amTYm1qdxLjJSxWtqKOhoNVBeFbFecXIgMns8x1HR5Sv%2B3h0%2BOhSx6cUMKscPYHVM1qnboKTJ8%2FeOtEFawg2xgan7K3kFjr3ks30jGsGBzfjsuOvudP9xMLfww8bi8xAY6pgGF%2B0Roo5%2B%2FanoWl8u2xHQGH9rlGb7wBes27TtOEnKu6goBtnCRDoL3xvUtsFQe%2FCGI63KbkRS28SnnANWUsLslfp13xFMCvCdcflpuiwkbHEff9kLSrerIiZta0MBlibPd69Y08KCemS4d%2BAekJC6wk2Nl6W%2Buel5cQHmv6qLM4eqz45r0gToV26BZT7KRE5Pmi%2Bef9lzRtwrADJp1UHSw2b8KFZ2E&X-Amz-Signature=8b90cba9447e7bf0c40882eef7294fee5912e08dcbb3a89363fe550160a6aa84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOGKFST%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEh%2BDjS0roSopzrtIe0WmDWoTHgAk1ZfT19qgp0HYqjrAiAgnWPocqomYxVKyWd8TaACO10%2FHUpYE2kLKUlOFLPhLyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMJKAOP8T3M1rMD7FhKtwDkizy7AdUULbmU%2FN9VED4PCwMPDfS2aWNsCUstRliW3Lgkhg577qlDku1b%2BgGXEsQTWY4Gu3uD%2FK34c7WFXy1b%2BXenyHtRQUr6XiZ192vw87hfdLU42xSOjw5vzyUoQLethhmSbm07hjuvOFfRjJmT53EaWzoOGum0Cxbj3Llri2koBBmo73epmenuUlnUxIQ4UFzkhJNXxzwJxdtqIBkAwrqy4I4ysst%2FDxIAwV3KVXmuxUBR7wEyleKLqmjaB3Zh7cU%2Fl8WUvyIaL%2B9EKNQRoNOQCxx485A6T%2F1kZjDsFqUI6clBr23J5Wx0TYPcpgZCqGTL4LbNFCko3wSxlz5gYA5qCzhn%2FV%2BL%2BBnQdioNp6yz60wcdOK%2FGA6qsVDsbwDVeTWwFApiu6QoB%2F9FZttKLvmpNgM5E2ctxc4vY%2BRoR7l7ezsVZGRyD9Du8IS719ElrOxWvLZdoNtJBLc2JrY59tVgckyIq0Hc2z8myM3sTVC9UR%2BecVq759bQw4aQbRPB1amTYm1qdxLjJSxWtqKOhoNVBeFbFecXIgMns8x1HR5Sv%2B3h0%2BOhSx6cUMKscPYHVM1qnboKTJ8%2FeOtEFawg2xgan7K3kFjr3ks30jGsGBzfjsuOvudP9xMLfww8bi8xAY6pgGF%2B0Roo5%2B%2FanoWl8u2xHQGH9rlGb7wBes27TtOEnKu6goBtnCRDoL3xvUtsFQe%2FCGI63KbkRS28SnnANWUsLslfp13xFMCvCdcflpuiwkbHEff9kLSrerIiZta0MBlibPd69Y08KCemS4d%2BAekJC6wk2Nl6W%2Buel5cQHmv6qLM4eqz45r0gToV26BZT7KRE5Pmi%2Bef9lzRtwrADJp1UHSw2b8KFZ2E&X-Amz-Signature=0ddf0f295bb6ff1158108a12bc0c10f3c13f154a9c6548c465f2d8ac64373b54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOGKFST%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEh%2BDjS0roSopzrtIe0WmDWoTHgAk1ZfT19qgp0HYqjrAiAgnWPocqomYxVKyWd8TaACO10%2FHUpYE2kLKUlOFLPhLyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMJKAOP8T3M1rMD7FhKtwDkizy7AdUULbmU%2FN9VED4PCwMPDfS2aWNsCUstRliW3Lgkhg577qlDku1b%2BgGXEsQTWY4Gu3uD%2FK34c7WFXy1b%2BXenyHtRQUr6XiZ192vw87hfdLU42xSOjw5vzyUoQLethhmSbm07hjuvOFfRjJmT53EaWzoOGum0Cxbj3Llri2koBBmo73epmenuUlnUxIQ4UFzkhJNXxzwJxdtqIBkAwrqy4I4ysst%2FDxIAwV3KVXmuxUBR7wEyleKLqmjaB3Zh7cU%2Fl8WUvyIaL%2B9EKNQRoNOQCxx485A6T%2F1kZjDsFqUI6clBr23J5Wx0TYPcpgZCqGTL4LbNFCko3wSxlz5gYA5qCzhn%2FV%2BL%2BBnQdioNp6yz60wcdOK%2FGA6qsVDsbwDVeTWwFApiu6QoB%2F9FZttKLvmpNgM5E2ctxc4vY%2BRoR7l7ezsVZGRyD9Du8IS719ElrOxWvLZdoNtJBLc2JrY59tVgckyIq0Hc2z8myM3sTVC9UR%2BecVq759bQw4aQbRPB1amTYm1qdxLjJSxWtqKOhoNVBeFbFecXIgMns8x1HR5Sv%2B3h0%2BOhSx6cUMKscPYHVM1qnboKTJ8%2FeOtEFawg2xgan7K3kFjr3ks30jGsGBzfjsuOvudP9xMLfww8bi8xAY6pgGF%2B0Roo5%2B%2FanoWl8u2xHQGH9rlGb7wBes27TtOEnKu6goBtnCRDoL3xvUtsFQe%2FCGI63KbkRS28SnnANWUsLslfp13xFMCvCdcflpuiwkbHEff9kLSrerIiZta0MBlibPd69Y08KCemS4d%2BAekJC6wk2Nl6W%2Buel5cQHmv6qLM4eqz45r0gToV26BZT7KRE5Pmi%2Bef9lzRtwrADJp1UHSw2b8KFZ2E&X-Amz-Signature=e235f8974953a324645b87747d9379a626a1823a1352a6782cc5d2c5fad4f234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOGKFST%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEh%2BDjS0roSopzrtIe0WmDWoTHgAk1ZfT19qgp0HYqjrAiAgnWPocqomYxVKyWd8TaACO10%2FHUpYE2kLKUlOFLPhLyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMJKAOP8T3M1rMD7FhKtwDkizy7AdUULbmU%2FN9VED4PCwMPDfS2aWNsCUstRliW3Lgkhg577qlDku1b%2BgGXEsQTWY4Gu3uD%2FK34c7WFXy1b%2BXenyHtRQUr6XiZ192vw87hfdLU42xSOjw5vzyUoQLethhmSbm07hjuvOFfRjJmT53EaWzoOGum0Cxbj3Llri2koBBmo73epmenuUlnUxIQ4UFzkhJNXxzwJxdtqIBkAwrqy4I4ysst%2FDxIAwV3KVXmuxUBR7wEyleKLqmjaB3Zh7cU%2Fl8WUvyIaL%2B9EKNQRoNOQCxx485A6T%2F1kZjDsFqUI6clBr23J5Wx0TYPcpgZCqGTL4LbNFCko3wSxlz5gYA5qCzhn%2FV%2BL%2BBnQdioNp6yz60wcdOK%2FGA6qsVDsbwDVeTWwFApiu6QoB%2F9FZttKLvmpNgM5E2ctxc4vY%2BRoR7l7ezsVZGRyD9Du8IS719ElrOxWvLZdoNtJBLc2JrY59tVgckyIq0Hc2z8myM3sTVC9UR%2BecVq759bQw4aQbRPB1amTYm1qdxLjJSxWtqKOhoNVBeFbFecXIgMns8x1HR5Sv%2B3h0%2BOhSx6cUMKscPYHVM1qnboKTJ8%2FeOtEFawg2xgan7K3kFjr3ks30jGsGBzfjsuOvudP9xMLfww8bi8xAY6pgGF%2B0Roo5%2B%2FanoWl8u2xHQGH9rlGb7wBes27TtOEnKu6goBtnCRDoL3xvUtsFQe%2FCGI63KbkRS28SnnANWUsLslfp13xFMCvCdcflpuiwkbHEff9kLSrerIiZta0MBlibPd69Y08KCemS4d%2BAekJC6wk2Nl6W%2Buel5cQHmv6qLM4eqz45r0gToV26BZT7KRE5Pmi%2Bef9lzRtwrADJp1UHSw2b8KFZ2E&X-Amz-Signature=18a199391afbeaab097be549c9305e3a80939eba20b46e158711727ece0d0f16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOGKFST%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEh%2BDjS0roSopzrtIe0WmDWoTHgAk1ZfT19qgp0HYqjrAiAgnWPocqomYxVKyWd8TaACO10%2FHUpYE2kLKUlOFLPhLyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMJKAOP8T3M1rMD7FhKtwDkizy7AdUULbmU%2FN9VED4PCwMPDfS2aWNsCUstRliW3Lgkhg577qlDku1b%2BgGXEsQTWY4Gu3uD%2FK34c7WFXy1b%2BXenyHtRQUr6XiZ192vw87hfdLU42xSOjw5vzyUoQLethhmSbm07hjuvOFfRjJmT53EaWzoOGum0Cxbj3Llri2koBBmo73epmenuUlnUxIQ4UFzkhJNXxzwJxdtqIBkAwrqy4I4ysst%2FDxIAwV3KVXmuxUBR7wEyleKLqmjaB3Zh7cU%2Fl8WUvyIaL%2B9EKNQRoNOQCxx485A6T%2F1kZjDsFqUI6clBr23J5Wx0TYPcpgZCqGTL4LbNFCko3wSxlz5gYA5qCzhn%2FV%2BL%2BBnQdioNp6yz60wcdOK%2FGA6qsVDsbwDVeTWwFApiu6QoB%2F9FZttKLvmpNgM5E2ctxc4vY%2BRoR7l7ezsVZGRyD9Du8IS719ElrOxWvLZdoNtJBLc2JrY59tVgckyIq0Hc2z8myM3sTVC9UR%2BecVq759bQw4aQbRPB1amTYm1qdxLjJSxWtqKOhoNVBeFbFecXIgMns8x1HR5Sv%2B3h0%2BOhSx6cUMKscPYHVM1qnboKTJ8%2FeOtEFawg2xgan7K3kFjr3ks30jGsGBzfjsuOvudP9xMLfww8bi8xAY6pgGF%2B0Roo5%2B%2FanoWl8u2xHQGH9rlGb7wBes27TtOEnKu6goBtnCRDoL3xvUtsFQe%2FCGI63KbkRS28SnnANWUsLslfp13xFMCvCdcflpuiwkbHEff9kLSrerIiZta0MBlibPd69Y08KCemS4d%2BAekJC6wk2Nl6W%2Buel5cQHmv6qLM4eqz45r0gToV26BZT7KRE5Pmi%2Bef9lzRtwrADJp1UHSw2b8KFZ2E&X-Amz-Signature=845df9bc981e56cfbc077ef4fe7868f176924661e15d063a111616397d0be87a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOGKFST%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEh%2BDjS0roSopzrtIe0WmDWoTHgAk1ZfT19qgp0HYqjrAiAgnWPocqomYxVKyWd8TaACO10%2FHUpYE2kLKUlOFLPhLyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMJKAOP8T3M1rMD7FhKtwDkizy7AdUULbmU%2FN9VED4PCwMPDfS2aWNsCUstRliW3Lgkhg577qlDku1b%2BgGXEsQTWY4Gu3uD%2FK34c7WFXy1b%2BXenyHtRQUr6XiZ192vw87hfdLU42xSOjw5vzyUoQLethhmSbm07hjuvOFfRjJmT53EaWzoOGum0Cxbj3Llri2koBBmo73epmenuUlnUxIQ4UFzkhJNXxzwJxdtqIBkAwrqy4I4ysst%2FDxIAwV3KVXmuxUBR7wEyleKLqmjaB3Zh7cU%2Fl8WUvyIaL%2B9EKNQRoNOQCxx485A6T%2F1kZjDsFqUI6clBr23J5Wx0TYPcpgZCqGTL4LbNFCko3wSxlz5gYA5qCzhn%2FV%2BL%2BBnQdioNp6yz60wcdOK%2FGA6qsVDsbwDVeTWwFApiu6QoB%2F9FZttKLvmpNgM5E2ctxc4vY%2BRoR7l7ezsVZGRyD9Du8IS719ElrOxWvLZdoNtJBLc2JrY59tVgckyIq0Hc2z8myM3sTVC9UR%2BecVq759bQw4aQbRPB1amTYm1qdxLjJSxWtqKOhoNVBeFbFecXIgMns8x1HR5Sv%2B3h0%2BOhSx6cUMKscPYHVM1qnboKTJ8%2FeOtEFawg2xgan7K3kFjr3ks30jGsGBzfjsuOvudP9xMLfww8bi8xAY6pgGF%2B0Roo5%2B%2FanoWl8u2xHQGH9rlGb7wBes27TtOEnKu6goBtnCRDoL3xvUtsFQe%2FCGI63KbkRS28SnnANWUsLslfp13xFMCvCdcflpuiwkbHEff9kLSrerIiZta0MBlibPd69Y08KCemS4d%2BAekJC6wk2Nl6W%2Buel5cQHmv6qLM4eqz45r0gToV26BZT7KRE5Pmi%2Bef9lzRtwrADJp1UHSw2b8KFZ2E&X-Amz-Signature=2235faa4f225c7a3e5326a99e669edc63e185f7495c4168655373bfa9e8fc062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOGKFST%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEh%2BDjS0roSopzrtIe0WmDWoTHgAk1ZfT19qgp0HYqjrAiAgnWPocqomYxVKyWd8TaACO10%2FHUpYE2kLKUlOFLPhLyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMJKAOP8T3M1rMD7FhKtwDkizy7AdUULbmU%2FN9VED4PCwMPDfS2aWNsCUstRliW3Lgkhg577qlDku1b%2BgGXEsQTWY4Gu3uD%2FK34c7WFXy1b%2BXenyHtRQUr6XiZ192vw87hfdLU42xSOjw5vzyUoQLethhmSbm07hjuvOFfRjJmT53EaWzoOGum0Cxbj3Llri2koBBmo73epmenuUlnUxIQ4UFzkhJNXxzwJxdtqIBkAwrqy4I4ysst%2FDxIAwV3KVXmuxUBR7wEyleKLqmjaB3Zh7cU%2Fl8WUvyIaL%2B9EKNQRoNOQCxx485A6T%2F1kZjDsFqUI6clBr23J5Wx0TYPcpgZCqGTL4LbNFCko3wSxlz5gYA5qCzhn%2FV%2BL%2BBnQdioNp6yz60wcdOK%2FGA6qsVDsbwDVeTWwFApiu6QoB%2F9FZttKLvmpNgM5E2ctxc4vY%2BRoR7l7ezsVZGRyD9Du8IS719ElrOxWvLZdoNtJBLc2JrY59tVgckyIq0Hc2z8myM3sTVC9UR%2BecVq759bQw4aQbRPB1amTYm1qdxLjJSxWtqKOhoNVBeFbFecXIgMns8x1HR5Sv%2B3h0%2BOhSx6cUMKscPYHVM1qnboKTJ8%2FeOtEFawg2xgan7K3kFjr3ks30jGsGBzfjsuOvudP9xMLfww8bi8xAY6pgGF%2B0Roo5%2B%2FanoWl8u2xHQGH9rlGb7wBes27TtOEnKu6goBtnCRDoL3xvUtsFQe%2FCGI63KbkRS28SnnANWUsLslfp13xFMCvCdcflpuiwkbHEff9kLSrerIiZta0MBlibPd69Y08KCemS4d%2BAekJC6wk2Nl6W%2Buel5cQHmv6qLM4eqz45r0gToV26BZT7KRE5Pmi%2Bef9lzRtwrADJp1UHSw2b8KFZ2E&X-Amz-Signature=e235f8974953a324645b87747d9379a626a1823a1352a6782cc5d2c5fad4f234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOGKFST%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEh%2BDjS0roSopzrtIe0WmDWoTHgAk1ZfT19qgp0HYqjrAiAgnWPocqomYxVKyWd8TaACO10%2FHUpYE2kLKUlOFLPhLyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMJKAOP8T3M1rMD7FhKtwDkizy7AdUULbmU%2FN9VED4PCwMPDfS2aWNsCUstRliW3Lgkhg577qlDku1b%2BgGXEsQTWY4Gu3uD%2FK34c7WFXy1b%2BXenyHtRQUr6XiZ192vw87hfdLU42xSOjw5vzyUoQLethhmSbm07hjuvOFfRjJmT53EaWzoOGum0Cxbj3Llri2koBBmo73epmenuUlnUxIQ4UFzkhJNXxzwJxdtqIBkAwrqy4I4ysst%2FDxIAwV3KVXmuxUBR7wEyleKLqmjaB3Zh7cU%2Fl8WUvyIaL%2B9EKNQRoNOQCxx485A6T%2F1kZjDsFqUI6clBr23J5Wx0TYPcpgZCqGTL4LbNFCko3wSxlz5gYA5qCzhn%2FV%2BL%2BBnQdioNp6yz60wcdOK%2FGA6qsVDsbwDVeTWwFApiu6QoB%2F9FZttKLvmpNgM5E2ctxc4vY%2BRoR7l7ezsVZGRyD9Du8IS719ElrOxWvLZdoNtJBLc2JrY59tVgckyIq0Hc2z8myM3sTVC9UR%2BecVq759bQw4aQbRPB1amTYm1qdxLjJSxWtqKOhoNVBeFbFecXIgMns8x1HR5Sv%2B3h0%2BOhSx6cUMKscPYHVM1qnboKTJ8%2FeOtEFawg2xgan7K3kFjr3ks30jGsGBzfjsuOvudP9xMLfww8bi8xAY6pgGF%2B0Roo5%2B%2FanoWl8u2xHQGH9rlGb7wBes27TtOEnKu6goBtnCRDoL3xvUtsFQe%2FCGI63KbkRS28SnnANWUsLslfp13xFMCvCdcflpuiwkbHEff9kLSrerIiZta0MBlibPd69Y08KCemS4d%2BAekJC6wk2Nl6W%2Buel5cQHmv6qLM4eqz45r0gToV26BZT7KRE5Pmi%2Bef9lzRtwrADJp1UHSw2b8KFZ2E&X-Amz-Signature=b97685b7806c8290ff68f902edfe2c236088fd40b0de1caafe539c99c80c36c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOGKFST%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEh%2BDjS0roSopzrtIe0WmDWoTHgAk1ZfT19qgp0HYqjrAiAgnWPocqomYxVKyWd8TaACO10%2FHUpYE2kLKUlOFLPhLyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMJKAOP8T3M1rMD7FhKtwDkizy7AdUULbmU%2FN9VED4PCwMPDfS2aWNsCUstRliW3Lgkhg577qlDku1b%2BgGXEsQTWY4Gu3uD%2FK34c7WFXy1b%2BXenyHtRQUr6XiZ192vw87hfdLU42xSOjw5vzyUoQLethhmSbm07hjuvOFfRjJmT53EaWzoOGum0Cxbj3Llri2koBBmo73epmenuUlnUxIQ4UFzkhJNXxzwJxdtqIBkAwrqy4I4ysst%2FDxIAwV3KVXmuxUBR7wEyleKLqmjaB3Zh7cU%2Fl8WUvyIaL%2B9EKNQRoNOQCxx485A6T%2F1kZjDsFqUI6clBr23J5Wx0TYPcpgZCqGTL4LbNFCko3wSxlz5gYA5qCzhn%2FV%2BL%2BBnQdioNp6yz60wcdOK%2FGA6qsVDsbwDVeTWwFApiu6QoB%2F9FZttKLvmpNgM5E2ctxc4vY%2BRoR7l7ezsVZGRyD9Du8IS719ElrOxWvLZdoNtJBLc2JrY59tVgckyIq0Hc2z8myM3sTVC9UR%2BecVq759bQw4aQbRPB1amTYm1qdxLjJSxWtqKOhoNVBeFbFecXIgMns8x1HR5Sv%2B3h0%2BOhSx6cUMKscPYHVM1qnboKTJ8%2FeOtEFawg2xgan7K3kFjr3ks30jGsGBzfjsuOvudP9xMLfww8bi8xAY6pgGF%2B0Roo5%2B%2FanoWl8u2xHQGH9rlGb7wBes27TtOEnKu6goBtnCRDoL3xvUtsFQe%2FCGI63KbkRS28SnnANWUsLslfp13xFMCvCdcflpuiwkbHEff9kLSrerIiZta0MBlibPd69Y08KCemS4d%2BAekJC6wk2Nl6W%2Buel5cQHmv6qLM4eqz45r0gToV26BZT7KRE5Pmi%2Bef9lzRtwrADJp1UHSw2b8KFZ2E&X-Amz-Signature=b07fc196fc8fe0bc7f98eb334db66f078a55d04cab45e2acbb4b32dcc8bf9eef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOGKFST%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEh%2BDjS0roSopzrtIe0WmDWoTHgAk1ZfT19qgp0HYqjrAiAgnWPocqomYxVKyWd8TaACO10%2FHUpYE2kLKUlOFLPhLyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMJKAOP8T3M1rMD7FhKtwDkizy7AdUULbmU%2FN9VED4PCwMPDfS2aWNsCUstRliW3Lgkhg577qlDku1b%2BgGXEsQTWY4Gu3uD%2FK34c7WFXy1b%2BXenyHtRQUr6XiZ192vw87hfdLU42xSOjw5vzyUoQLethhmSbm07hjuvOFfRjJmT53EaWzoOGum0Cxbj3Llri2koBBmo73epmenuUlnUxIQ4UFzkhJNXxzwJxdtqIBkAwrqy4I4ysst%2FDxIAwV3KVXmuxUBR7wEyleKLqmjaB3Zh7cU%2Fl8WUvyIaL%2B9EKNQRoNOQCxx485A6T%2F1kZjDsFqUI6clBr23J5Wx0TYPcpgZCqGTL4LbNFCko3wSxlz5gYA5qCzhn%2FV%2BL%2BBnQdioNp6yz60wcdOK%2FGA6qsVDsbwDVeTWwFApiu6QoB%2F9FZttKLvmpNgM5E2ctxc4vY%2BRoR7l7ezsVZGRyD9Du8IS719ElrOxWvLZdoNtJBLc2JrY59tVgckyIq0Hc2z8myM3sTVC9UR%2BecVq759bQw4aQbRPB1amTYm1qdxLjJSxWtqKOhoNVBeFbFecXIgMns8x1HR5Sv%2B3h0%2BOhSx6cUMKscPYHVM1qnboKTJ8%2FeOtEFawg2xgan7K3kFjr3ks30jGsGBzfjsuOvudP9xMLfww8bi8xAY6pgGF%2B0Roo5%2B%2FanoWl8u2xHQGH9rlGb7wBes27TtOEnKu6goBtnCRDoL3xvUtsFQe%2FCGI63KbkRS28SnnANWUsLslfp13xFMCvCdcflpuiwkbHEff9kLSrerIiZta0MBlibPd69Y08KCemS4d%2BAekJC6wk2Nl6W%2Buel5cQHmv6qLM4eqz45r0gToV26BZT7KRE5Pmi%2Bef9lzRtwrADJp1UHSw2b8KFZ2E&X-Amz-Signature=161a82b4ff07d1fe732d37731e59fcaad7931b83536d006c4215b1c11ffe3894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
