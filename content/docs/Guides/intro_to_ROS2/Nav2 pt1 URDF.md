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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THD6A2TX%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmgVO0umJVITcbGe%2FqkxboESPZFm4gG5lVbAXDPcjZwQIgG4MlwWyMNv0si9aj98YESlg4zpER%2FgFKxsAWY3mkJPEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOWY%2BpflIBnTY%2BlPECrcA0sh4SCqzOPVHBDWy2xQ0sgJGVvvIKQNXFJoaRZU2ev%2FwxMq%2Fyo4TZ%2FzuSQA1Ls4jJJptsMqUyuFWSvKdZMb%2FNilC55bezaOZK7nx1IT7vqQrtUVi45ooPBlmmq2bik4RuC6jEMmPcaESPXmo7ZbrgVE37oAwYMlKscGjPQQQZKPvGlq29MmE%2BxGRMu6PIHUnsWyhMpQldgg9O8c05kAuuHIo%2Fwr8NW6ddWi%2FiJ49NZQzwFapYCos7PwjNmYwghrQ2uP%2Bnl562tuYXMQgb6bHVr%2FI%2FIKqJAqv5pmRdWY4S0rAoi1dLT7uj6M%2FERiEAJDNvkT%2F5kZz%2BWmVwp6%2BSe9yudeiXmaKwW4Xqp4uksYfGLhH4bHGafAS4qhlYbHzD7USyy8pPxBxVqKhiJnxaai7IkOCsTIVdFDou7LZBePDEaOI2VRxR1JgWvoLkD1dn2NqQrX903%2FyHrx1V4bH%2Fxy7QHMgh%2FWWsgckV%2FO%2F82KmdzSxcvsl1redD4q4BO5ZKjy5jIMY7Y5ZQotplpW5N6W2LN%2FKaZuUwoA13Y1YwHdYjpEsh1D4XBIxZhmHYWZ4r21L2NREswto0c%2F2MW4%2FJF94JKk5aEWehekGXWmr7arE0B%2BxKbVORjWy0nd%2BAIBMM6J2cUGOqUBb9Z%2Bqn3PlVTB8UkfU4BxpCvmG0FFs7UoDp3WQXlwoAhzYFM5JITuU0NZzWGtxF27gL5%2FqpS1iSSow%2BvCtzE9DnrwsS1AZMK%2Bi4D0dVa%2Fpi%2BTn%2FMLPWskHsub2z50uvuYV%2FACJEfhftfKRFvKEljrM7x3ofSfc8YGBoB0yG72irWhYpKioBB%2BKeRDgGyXhFpgD2kMLARXEa5mauc5gVBQV6cvc6en&X-Amz-Signature=fb384eb477f0d6b1710e7702925b2372403049d945c5ac09d69fc1d03ca305b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THD6A2TX%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmgVO0umJVITcbGe%2FqkxboESPZFm4gG5lVbAXDPcjZwQIgG4MlwWyMNv0si9aj98YESlg4zpER%2FgFKxsAWY3mkJPEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOWY%2BpflIBnTY%2BlPECrcA0sh4SCqzOPVHBDWy2xQ0sgJGVvvIKQNXFJoaRZU2ev%2FwxMq%2Fyo4TZ%2FzuSQA1Ls4jJJptsMqUyuFWSvKdZMb%2FNilC55bezaOZK7nx1IT7vqQrtUVi45ooPBlmmq2bik4RuC6jEMmPcaESPXmo7ZbrgVE37oAwYMlKscGjPQQQZKPvGlq29MmE%2BxGRMu6PIHUnsWyhMpQldgg9O8c05kAuuHIo%2Fwr8NW6ddWi%2FiJ49NZQzwFapYCos7PwjNmYwghrQ2uP%2Bnl562tuYXMQgb6bHVr%2FI%2FIKqJAqv5pmRdWY4S0rAoi1dLT7uj6M%2FERiEAJDNvkT%2F5kZz%2BWmVwp6%2BSe9yudeiXmaKwW4Xqp4uksYfGLhH4bHGafAS4qhlYbHzD7USyy8pPxBxVqKhiJnxaai7IkOCsTIVdFDou7LZBePDEaOI2VRxR1JgWvoLkD1dn2NqQrX903%2FyHrx1V4bH%2Fxy7QHMgh%2FWWsgckV%2FO%2F82KmdzSxcvsl1redD4q4BO5ZKjy5jIMY7Y5ZQotplpW5N6W2LN%2FKaZuUwoA13Y1YwHdYjpEsh1D4XBIxZhmHYWZ4r21L2NREswto0c%2F2MW4%2FJF94JKk5aEWehekGXWmr7arE0B%2BxKbVORjWy0nd%2BAIBMM6J2cUGOqUBb9Z%2Bqn3PlVTB8UkfU4BxpCvmG0FFs7UoDp3WQXlwoAhzYFM5JITuU0NZzWGtxF27gL5%2FqpS1iSSow%2BvCtzE9DnrwsS1AZMK%2Bi4D0dVa%2Fpi%2BTn%2FMLPWskHsub2z50uvuYV%2FACJEfhftfKRFvKEljrM7x3ofSfc8YGBoB0yG72irWhYpKioBB%2BKeRDgGyXhFpgD2kMLARXEa5mauc5gVBQV6cvc6en&X-Amz-Signature=3a1eceb3e77a1326a472912d5e8c833b48dff64c1a087f4375a4682ccc592fa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THD6A2TX%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmgVO0umJVITcbGe%2FqkxboESPZFm4gG5lVbAXDPcjZwQIgG4MlwWyMNv0si9aj98YESlg4zpER%2FgFKxsAWY3mkJPEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOWY%2BpflIBnTY%2BlPECrcA0sh4SCqzOPVHBDWy2xQ0sgJGVvvIKQNXFJoaRZU2ev%2FwxMq%2Fyo4TZ%2FzuSQA1Ls4jJJptsMqUyuFWSvKdZMb%2FNilC55bezaOZK7nx1IT7vqQrtUVi45ooPBlmmq2bik4RuC6jEMmPcaESPXmo7ZbrgVE37oAwYMlKscGjPQQQZKPvGlq29MmE%2BxGRMu6PIHUnsWyhMpQldgg9O8c05kAuuHIo%2Fwr8NW6ddWi%2FiJ49NZQzwFapYCos7PwjNmYwghrQ2uP%2Bnl562tuYXMQgb6bHVr%2FI%2FIKqJAqv5pmRdWY4S0rAoi1dLT7uj6M%2FERiEAJDNvkT%2F5kZz%2BWmVwp6%2BSe9yudeiXmaKwW4Xqp4uksYfGLhH4bHGafAS4qhlYbHzD7USyy8pPxBxVqKhiJnxaai7IkOCsTIVdFDou7LZBePDEaOI2VRxR1JgWvoLkD1dn2NqQrX903%2FyHrx1V4bH%2Fxy7QHMgh%2FWWsgckV%2FO%2F82KmdzSxcvsl1redD4q4BO5ZKjy5jIMY7Y5ZQotplpW5N6W2LN%2FKaZuUwoA13Y1YwHdYjpEsh1D4XBIxZhmHYWZ4r21L2NREswto0c%2F2MW4%2FJF94JKk5aEWehekGXWmr7arE0B%2BxKbVORjWy0nd%2BAIBMM6J2cUGOqUBb9Z%2Bqn3PlVTB8UkfU4BxpCvmG0FFs7UoDp3WQXlwoAhzYFM5JITuU0NZzWGtxF27gL5%2FqpS1iSSow%2BvCtzE9DnrwsS1AZMK%2Bi4D0dVa%2Fpi%2BTn%2FMLPWskHsub2z50uvuYV%2FACJEfhftfKRFvKEljrM7x3ofSfc8YGBoB0yG72irWhYpKioBB%2BKeRDgGyXhFpgD2kMLARXEa5mauc5gVBQV6cvc6en&X-Amz-Signature=b0dd97954a221dc5c1f39611264a5cd6dbd9cdd90454d2e6cd9b2a34337f4116&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THD6A2TX%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmgVO0umJVITcbGe%2FqkxboESPZFm4gG5lVbAXDPcjZwQIgG4MlwWyMNv0si9aj98YESlg4zpER%2FgFKxsAWY3mkJPEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOWY%2BpflIBnTY%2BlPECrcA0sh4SCqzOPVHBDWy2xQ0sgJGVvvIKQNXFJoaRZU2ev%2FwxMq%2Fyo4TZ%2FzuSQA1Ls4jJJptsMqUyuFWSvKdZMb%2FNilC55bezaOZK7nx1IT7vqQrtUVi45ooPBlmmq2bik4RuC6jEMmPcaESPXmo7ZbrgVE37oAwYMlKscGjPQQQZKPvGlq29MmE%2BxGRMu6PIHUnsWyhMpQldgg9O8c05kAuuHIo%2Fwr8NW6ddWi%2FiJ49NZQzwFapYCos7PwjNmYwghrQ2uP%2Bnl562tuYXMQgb6bHVr%2FI%2FIKqJAqv5pmRdWY4S0rAoi1dLT7uj6M%2FERiEAJDNvkT%2F5kZz%2BWmVwp6%2BSe9yudeiXmaKwW4Xqp4uksYfGLhH4bHGafAS4qhlYbHzD7USyy8pPxBxVqKhiJnxaai7IkOCsTIVdFDou7LZBePDEaOI2VRxR1JgWvoLkD1dn2NqQrX903%2FyHrx1V4bH%2Fxy7QHMgh%2FWWsgckV%2FO%2F82KmdzSxcvsl1redD4q4BO5ZKjy5jIMY7Y5ZQotplpW5N6W2LN%2FKaZuUwoA13Y1YwHdYjpEsh1D4XBIxZhmHYWZ4r21L2NREswto0c%2F2MW4%2FJF94JKk5aEWehekGXWmr7arE0B%2BxKbVORjWy0nd%2BAIBMM6J2cUGOqUBb9Z%2Bqn3PlVTB8UkfU4BxpCvmG0FFs7UoDp3WQXlwoAhzYFM5JITuU0NZzWGtxF27gL5%2FqpS1iSSow%2BvCtzE9DnrwsS1AZMK%2Bi4D0dVa%2Fpi%2BTn%2FMLPWskHsub2z50uvuYV%2FACJEfhftfKRFvKEljrM7x3ofSfc8YGBoB0yG72irWhYpKioBB%2BKeRDgGyXhFpgD2kMLARXEa5mauc5gVBQV6cvc6en&X-Amz-Signature=bf2af61a180811de3acfbc22fd94a7333f2eef1b0d6347b3b8b9a76cb74b6073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THD6A2TX%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmgVO0umJVITcbGe%2FqkxboESPZFm4gG5lVbAXDPcjZwQIgG4MlwWyMNv0si9aj98YESlg4zpER%2FgFKxsAWY3mkJPEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOWY%2BpflIBnTY%2BlPECrcA0sh4SCqzOPVHBDWy2xQ0sgJGVvvIKQNXFJoaRZU2ev%2FwxMq%2Fyo4TZ%2FzuSQA1Ls4jJJptsMqUyuFWSvKdZMb%2FNilC55bezaOZK7nx1IT7vqQrtUVi45ooPBlmmq2bik4RuC6jEMmPcaESPXmo7ZbrgVE37oAwYMlKscGjPQQQZKPvGlq29MmE%2BxGRMu6PIHUnsWyhMpQldgg9O8c05kAuuHIo%2Fwr8NW6ddWi%2FiJ49NZQzwFapYCos7PwjNmYwghrQ2uP%2Bnl562tuYXMQgb6bHVr%2FI%2FIKqJAqv5pmRdWY4S0rAoi1dLT7uj6M%2FERiEAJDNvkT%2F5kZz%2BWmVwp6%2BSe9yudeiXmaKwW4Xqp4uksYfGLhH4bHGafAS4qhlYbHzD7USyy8pPxBxVqKhiJnxaai7IkOCsTIVdFDou7LZBePDEaOI2VRxR1JgWvoLkD1dn2NqQrX903%2FyHrx1V4bH%2Fxy7QHMgh%2FWWsgckV%2FO%2F82KmdzSxcvsl1redD4q4BO5ZKjy5jIMY7Y5ZQotplpW5N6W2LN%2FKaZuUwoA13Y1YwHdYjpEsh1D4XBIxZhmHYWZ4r21L2NREswto0c%2F2MW4%2FJF94JKk5aEWehekGXWmr7arE0B%2BxKbVORjWy0nd%2BAIBMM6J2cUGOqUBb9Z%2Bqn3PlVTB8UkfU4BxpCvmG0FFs7UoDp3WQXlwoAhzYFM5JITuU0NZzWGtxF27gL5%2FqpS1iSSow%2BvCtzE9DnrwsS1AZMK%2Bi4D0dVa%2Fpi%2BTn%2FMLPWskHsub2z50uvuYV%2FACJEfhftfKRFvKEljrM7x3ofSfc8YGBoB0yG72irWhYpKioBB%2BKeRDgGyXhFpgD2kMLARXEa5mauc5gVBQV6cvc6en&X-Amz-Signature=f7d790a89ad3d5195f70b517c1ebf89c24f176586a772a5dddd14dfed77fc4bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THD6A2TX%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmgVO0umJVITcbGe%2FqkxboESPZFm4gG5lVbAXDPcjZwQIgG4MlwWyMNv0si9aj98YESlg4zpER%2FgFKxsAWY3mkJPEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOWY%2BpflIBnTY%2BlPECrcA0sh4SCqzOPVHBDWy2xQ0sgJGVvvIKQNXFJoaRZU2ev%2FwxMq%2Fyo4TZ%2FzuSQA1Ls4jJJptsMqUyuFWSvKdZMb%2FNilC55bezaOZK7nx1IT7vqQrtUVi45ooPBlmmq2bik4RuC6jEMmPcaESPXmo7ZbrgVE37oAwYMlKscGjPQQQZKPvGlq29MmE%2BxGRMu6PIHUnsWyhMpQldgg9O8c05kAuuHIo%2Fwr8NW6ddWi%2FiJ49NZQzwFapYCos7PwjNmYwghrQ2uP%2Bnl562tuYXMQgb6bHVr%2FI%2FIKqJAqv5pmRdWY4S0rAoi1dLT7uj6M%2FERiEAJDNvkT%2F5kZz%2BWmVwp6%2BSe9yudeiXmaKwW4Xqp4uksYfGLhH4bHGafAS4qhlYbHzD7USyy8pPxBxVqKhiJnxaai7IkOCsTIVdFDou7LZBePDEaOI2VRxR1JgWvoLkD1dn2NqQrX903%2FyHrx1V4bH%2Fxy7QHMgh%2FWWsgckV%2FO%2F82KmdzSxcvsl1redD4q4BO5ZKjy5jIMY7Y5ZQotplpW5N6W2LN%2FKaZuUwoA13Y1YwHdYjpEsh1D4XBIxZhmHYWZ4r21L2NREswto0c%2F2MW4%2FJF94JKk5aEWehekGXWmr7arE0B%2BxKbVORjWy0nd%2BAIBMM6J2cUGOqUBb9Z%2Bqn3PlVTB8UkfU4BxpCvmG0FFs7UoDp3WQXlwoAhzYFM5JITuU0NZzWGtxF27gL5%2FqpS1iSSow%2BvCtzE9DnrwsS1AZMK%2Bi4D0dVa%2Fpi%2BTn%2FMLPWskHsub2z50uvuYV%2FACJEfhftfKRFvKEljrM7x3ofSfc8YGBoB0yG72irWhYpKioBB%2BKeRDgGyXhFpgD2kMLARXEa5mauc5gVBQV6cvc6en&X-Amz-Signature=69abda056f83afd947201bf6d1a977a40f702b4d5d32924250c981e232684e26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THD6A2TX%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmgVO0umJVITcbGe%2FqkxboESPZFm4gG5lVbAXDPcjZwQIgG4MlwWyMNv0si9aj98YESlg4zpER%2FgFKxsAWY3mkJPEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOWY%2BpflIBnTY%2BlPECrcA0sh4SCqzOPVHBDWy2xQ0sgJGVvvIKQNXFJoaRZU2ev%2FwxMq%2Fyo4TZ%2FzuSQA1Ls4jJJptsMqUyuFWSvKdZMb%2FNilC55bezaOZK7nx1IT7vqQrtUVi45ooPBlmmq2bik4RuC6jEMmPcaESPXmo7ZbrgVE37oAwYMlKscGjPQQQZKPvGlq29MmE%2BxGRMu6PIHUnsWyhMpQldgg9O8c05kAuuHIo%2Fwr8NW6ddWi%2FiJ49NZQzwFapYCos7PwjNmYwghrQ2uP%2Bnl562tuYXMQgb6bHVr%2FI%2FIKqJAqv5pmRdWY4S0rAoi1dLT7uj6M%2FERiEAJDNvkT%2F5kZz%2BWmVwp6%2BSe9yudeiXmaKwW4Xqp4uksYfGLhH4bHGafAS4qhlYbHzD7USyy8pPxBxVqKhiJnxaai7IkOCsTIVdFDou7LZBePDEaOI2VRxR1JgWvoLkD1dn2NqQrX903%2FyHrx1V4bH%2Fxy7QHMgh%2FWWsgckV%2FO%2F82KmdzSxcvsl1redD4q4BO5ZKjy5jIMY7Y5ZQotplpW5N6W2LN%2FKaZuUwoA13Y1YwHdYjpEsh1D4XBIxZhmHYWZ4r21L2NREswto0c%2F2MW4%2FJF94JKk5aEWehekGXWmr7arE0B%2BxKbVORjWy0nd%2BAIBMM6J2cUGOqUBb9Z%2Bqn3PlVTB8UkfU4BxpCvmG0FFs7UoDp3WQXlwoAhzYFM5JITuU0NZzWGtxF27gL5%2FqpS1iSSow%2BvCtzE9DnrwsS1AZMK%2Bi4D0dVa%2Fpi%2BTn%2FMLPWskHsub2z50uvuYV%2FACJEfhftfKRFvKEljrM7x3ofSfc8YGBoB0yG72irWhYpKioBB%2BKeRDgGyXhFpgD2kMLARXEa5mauc5gVBQV6cvc6en&X-Amz-Signature=54f0d2670273ace149ff2e7ab977e7e37d80c924df731554fa22b9b60cd26f7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THD6A2TX%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmgVO0umJVITcbGe%2FqkxboESPZFm4gG5lVbAXDPcjZwQIgG4MlwWyMNv0si9aj98YESlg4zpER%2FgFKxsAWY3mkJPEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOWY%2BpflIBnTY%2BlPECrcA0sh4SCqzOPVHBDWy2xQ0sgJGVvvIKQNXFJoaRZU2ev%2FwxMq%2Fyo4TZ%2FzuSQA1Ls4jJJptsMqUyuFWSvKdZMb%2FNilC55bezaOZK7nx1IT7vqQrtUVi45ooPBlmmq2bik4RuC6jEMmPcaESPXmo7ZbrgVE37oAwYMlKscGjPQQQZKPvGlq29MmE%2BxGRMu6PIHUnsWyhMpQldgg9O8c05kAuuHIo%2Fwr8NW6ddWi%2FiJ49NZQzwFapYCos7PwjNmYwghrQ2uP%2Bnl562tuYXMQgb6bHVr%2FI%2FIKqJAqv5pmRdWY4S0rAoi1dLT7uj6M%2FERiEAJDNvkT%2F5kZz%2BWmVwp6%2BSe9yudeiXmaKwW4Xqp4uksYfGLhH4bHGafAS4qhlYbHzD7USyy8pPxBxVqKhiJnxaai7IkOCsTIVdFDou7LZBePDEaOI2VRxR1JgWvoLkD1dn2NqQrX903%2FyHrx1V4bH%2Fxy7QHMgh%2FWWsgckV%2FO%2F82KmdzSxcvsl1redD4q4BO5ZKjy5jIMY7Y5ZQotplpW5N6W2LN%2FKaZuUwoA13Y1YwHdYjpEsh1D4XBIxZhmHYWZ4r21L2NREswto0c%2F2MW4%2FJF94JKk5aEWehekGXWmr7arE0B%2BxKbVORjWy0nd%2BAIBMM6J2cUGOqUBb9Z%2Bqn3PlVTB8UkfU4BxpCvmG0FFs7UoDp3WQXlwoAhzYFM5JITuU0NZzWGtxF27gL5%2FqpS1iSSow%2BvCtzE9DnrwsS1AZMK%2Bi4D0dVa%2Fpi%2BTn%2FMLPWskHsub2z50uvuYV%2FACJEfhftfKRFvKEljrM7x3ofSfc8YGBoB0yG72irWhYpKioBB%2BKeRDgGyXhFpgD2kMLARXEa5mauc5gVBQV6cvc6en&X-Amz-Signature=e8949cd3f9566b69b66e33b1d6a2a4be467bbbeeb4b3787efb80fd2eccde9363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THD6A2TX%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmgVO0umJVITcbGe%2FqkxboESPZFm4gG5lVbAXDPcjZwQIgG4MlwWyMNv0si9aj98YESlg4zpER%2FgFKxsAWY3mkJPEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOWY%2BpflIBnTY%2BlPECrcA0sh4SCqzOPVHBDWy2xQ0sgJGVvvIKQNXFJoaRZU2ev%2FwxMq%2Fyo4TZ%2FzuSQA1Ls4jJJptsMqUyuFWSvKdZMb%2FNilC55bezaOZK7nx1IT7vqQrtUVi45ooPBlmmq2bik4RuC6jEMmPcaESPXmo7ZbrgVE37oAwYMlKscGjPQQQZKPvGlq29MmE%2BxGRMu6PIHUnsWyhMpQldgg9O8c05kAuuHIo%2Fwr8NW6ddWi%2FiJ49NZQzwFapYCos7PwjNmYwghrQ2uP%2Bnl562tuYXMQgb6bHVr%2FI%2FIKqJAqv5pmRdWY4S0rAoi1dLT7uj6M%2FERiEAJDNvkT%2F5kZz%2BWmVwp6%2BSe9yudeiXmaKwW4Xqp4uksYfGLhH4bHGafAS4qhlYbHzD7USyy8pPxBxVqKhiJnxaai7IkOCsTIVdFDou7LZBePDEaOI2VRxR1JgWvoLkD1dn2NqQrX903%2FyHrx1V4bH%2Fxy7QHMgh%2FWWsgckV%2FO%2F82KmdzSxcvsl1redD4q4BO5ZKjy5jIMY7Y5ZQotplpW5N6W2LN%2FKaZuUwoA13Y1YwHdYjpEsh1D4XBIxZhmHYWZ4r21L2NREswto0c%2F2MW4%2FJF94JKk5aEWehekGXWmr7arE0B%2BxKbVORjWy0nd%2BAIBMM6J2cUGOqUBb9Z%2Bqn3PlVTB8UkfU4BxpCvmG0FFs7UoDp3WQXlwoAhzYFM5JITuU0NZzWGtxF27gL5%2FqpS1iSSow%2BvCtzE9DnrwsS1AZMK%2Bi4D0dVa%2Fpi%2BTn%2FMLPWskHsub2z50uvuYV%2FACJEfhftfKRFvKEljrM7x3ofSfc8YGBoB0yG72irWhYpKioBB%2BKeRDgGyXhFpgD2kMLARXEa5mauc5gVBQV6cvc6en&X-Amz-Signature=7f9889f2581676b29dd9f6df8ec2a6df4faff1b168dac7b509d5f807c2366ed7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THD6A2TX%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmgVO0umJVITcbGe%2FqkxboESPZFm4gG5lVbAXDPcjZwQIgG4MlwWyMNv0si9aj98YESlg4zpER%2FgFKxsAWY3mkJPEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOWY%2BpflIBnTY%2BlPECrcA0sh4SCqzOPVHBDWy2xQ0sgJGVvvIKQNXFJoaRZU2ev%2FwxMq%2Fyo4TZ%2FzuSQA1Ls4jJJptsMqUyuFWSvKdZMb%2FNilC55bezaOZK7nx1IT7vqQrtUVi45ooPBlmmq2bik4RuC6jEMmPcaESPXmo7ZbrgVE37oAwYMlKscGjPQQQZKPvGlq29MmE%2BxGRMu6PIHUnsWyhMpQldgg9O8c05kAuuHIo%2Fwr8NW6ddWi%2FiJ49NZQzwFapYCos7PwjNmYwghrQ2uP%2Bnl562tuYXMQgb6bHVr%2FI%2FIKqJAqv5pmRdWY4S0rAoi1dLT7uj6M%2FERiEAJDNvkT%2F5kZz%2BWmVwp6%2BSe9yudeiXmaKwW4Xqp4uksYfGLhH4bHGafAS4qhlYbHzD7USyy8pPxBxVqKhiJnxaai7IkOCsTIVdFDou7LZBePDEaOI2VRxR1JgWvoLkD1dn2NqQrX903%2FyHrx1V4bH%2Fxy7QHMgh%2FWWsgckV%2FO%2F82KmdzSxcvsl1redD4q4BO5ZKjy5jIMY7Y5ZQotplpW5N6W2LN%2FKaZuUwoA13Y1YwHdYjpEsh1D4XBIxZhmHYWZ4r21L2NREswto0c%2F2MW4%2FJF94JKk5aEWehekGXWmr7arE0B%2BxKbVORjWy0nd%2BAIBMM6J2cUGOqUBb9Z%2Bqn3PlVTB8UkfU4BxpCvmG0FFs7UoDp3WQXlwoAhzYFM5JITuU0NZzWGtxF27gL5%2FqpS1iSSow%2BvCtzE9DnrwsS1AZMK%2Bi4D0dVa%2Fpi%2BTn%2FMLPWskHsub2z50uvuYV%2FACJEfhftfKRFvKEljrM7x3ofSfc8YGBoB0yG72irWhYpKioBB%2BKeRDgGyXhFpgD2kMLARXEa5mauc5gVBQV6cvc6en&X-Amz-Signature=3e5e4b81ec1f4aa200ab1a83b327588780d931ec3f0120f031542f0edaa00495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXRZPCUE%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGxyx8Pd%2Bjm%2FP4TB3YAruckmQQw9HQzzVpPZkVpGO7tAiBRi%2FkIN%2B39GlH63Rnnaq6lUBOUpaHZrLENvcDD9e5qxSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMTbaGaIBO3jYpixyoKtwDvNE0nQZVe8sFQXSIGcaGpy3qaVLMcajD2oGHd4M5%2Fqz7VcTjvXKO2mgbYbrINOHnSCsxM7HlG4Kc6yZpGH0A2sBlPN4YENO4VTmsIE7GJZ%2Fx8q1sgAhMC5EYEWVuo3OPWrOtVzRU6K%2FralTTClcNVefGGn9lz5ooKPMLZ9eOs4dbLsQkCInN6vAMU8UxBzVtPPwtzuwJjORoZS4FDDxsY%2FDOv8jjv7nSDGX%2Btrkv5EgcK3cVug2NRLJechi5cIHPqYD0DQ%2BmLiiV%2FDDbZ1tILGIdnjC3Rr5KNqHKaAbc6%2Bat0TeiAfncxHIjiW71jq66BwwUCv3Ij3tj9pWxy2bNIM0RBM9KAXRB%2Fn8gkY8rsB9%2BlE3EoSm7QWS9bLaTGa4lAZHF2aFuGx5Os4dn4H3w%2BJEYJJ88I6EfbZaUoXI52HiWTYemLf0gvfXacJtCI6zkIZrzFT8WieqiypDzkRraIrXY1ESOB12tGx48Vrm9FUW%2Bhl2fYjqxyYndGwDSaUebybA7i1Lo%2B%2F%2BtO0jT1GKpgbIEBklckRU1tOimivTVooN5tnIPcaKAKBR0xFWxY3c9%2FkzOmMpiu3GTZRqhZok1B1LC1mSJOCBaQcAtl98dWjjT8LNfEi1deLhHus4w5InZxQY6pgFHYmk%2B7wjCBfp%2FNEAdFsw6yV3%2B9rZFdh70tdhOkAaXbpvntfrAhGm9vHj6DO%2B0Sg%2F9RWCbohFD5hx4kicRKEerbjPiX7%2F6ygFJoV5TfhP1VIsGOoNlg42PvcboTFO7h%2B7%2FfEIttVkOFROi6AonZWmuJK%2FpIksXdzDthRsoJK%2FCaDjd6xxn564VM1e3AvIN2f2mZiXmfoqQVfJFHm16jGtrpy8pR7Tl&X-Amz-Signature=c99669ac8219c640094fba000b1538e943179d75ab3c6f811381d54f8e81ed37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNRLQYRY%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS2ekAhMTGf9bqVMIzJZATzpt%2FxFAs0IbBC8EAEQsR4QIgPg5FcfVSe0x7B0vuCRKf6zPdfKlEpqPqXs5yntnN9NIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHrwr37uTvTMeRR8DircA3XlKMTKUsDPMQU0%2FGCf9TFWr9uxlFRrCatWyyIt8ZNgZt%2BFg9qBnKKAYG%2FRMBtQmkMWuqIXiPGXG1MHc3miHeAYFpj0LsebQ5MJrsS8ogS10RdZZXqgbGTKykFYiz80NABlyG2WnuD3YM%2BHCZ3ddbFGbu0Z3KGIA5ALFl7YxE%2BNaiJD3sS09awIs1rxaIipZa2vrjvfwe%2F2AYciKgwTe4zYFEegA19rAKYhIRDEDWYTYpGtuT4rFhwhOAeYk2seG1TldGU8BCi9AJ9meEpaeeYzM8f1Apl5qPGe%2BMFZs43CAW0gaJGKuW13ljHZZ44xa0rNwRLpv9fV0a%2BTVQXNCPRY8oM%2BIyY%2BHK4hM2yZJVpxkSl97JnTtporQLi%2FAi1r16rZrQseOMimqkMIh829t%2FELUcuNthxTFsKyLQIR%2FYqV5C3w2ONsTncCvRnR8eP0EPwWbtPrUCEo6XA1CCX%2FyATDQeTn5VxOXYDkwAWWs9GCfygSHHXenN7E3Uwisd2Fmd0vK%2FwMn2umByrbat5NFEQaogZRFr8dM%2BW9PJ4%2B6OrpJCQXzTjK4iu%2Fd%2F3GckgTcU%2BUj%2Bxr%2BONyx6QLlr%2BqKCyJ%2F8NXwoGZWLy%2BWNHuzXMZ8UQGe0yvHIHbWettMIeJ2cUGOqUB0TJpnsy19HG%2FHKy6ZZA5t%2BNZWM33CeKxmh04bcaZTJR7IfOmfpq5YeleoqUrwN1qeR%2BQT2WI78VzFulk68MUQpX6qGCT4PclW364SbrSQpemVs9eA9nVoGX7tvlGq6bjJmKUheeQPa%2FwIkwfFI3oJkcc%2B7AwusrBS9NPL1TdABKxBGYxlbaOAgP6DpC6wmmBdYXwOlBy%2BUnQGVIlRY0wVh9cLpE9&X-Amz-Signature=01714213190e51ac1e7f955a7f15c738657784c3f82d3498225072037ebbf86d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466744YG7AP%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFi8OSe6nW7fe0NqYj%2BQRXQt3BCBMd96PFVkrlmlJsKAIhAJblUIz10tRxmSUHwlUi%2FTfCBcBNeSkwi%2BQHH8YlKEBZKv8DCCIQABoMNjM3NDIzMTgzODA1IgwMkRNiKB1T2H2Y57cq3APtTffVCrTLzmxvSfZsB1ZvrYPnOAvMnxrGFw7H1OEQ71iJ3Cfi0V19TnC7d0FhNZ5XMLeWjuYCs087D%2FaioEmm746r73Fvm2KwEaZ8pwdZr7pntAmsr6ulf1n%2BgknuNRPq4FYC6NFJXmUOiT4dY5KA5%2Buz8ieYtOop%2BkgbbxwSXveK4sPv%2B7ud1G9FjmgEMqB0KOEAl4xtnXb7dOMXw3kFefsKLf%2F1LRlCAt6SbdV1MFa4oLgEs9qtcM43DyWQ5zyAEa1PTiMg3agAfFZXommFxvQAUh3b2OAboxdJj%2F95V1sCSJ8EtoJwdOQFWfNR0A17F%2BENZR2JKAFBCklhVS9TITtNlDFODcamh7vzc3MRov%2BqyyozzRL7%2FbbIQ0sqsDumsUs%2FZuft1FhLoaJjyVfCs%2FX8KkHhjJFXFRwBwO9UahwbI0EBvoHV3ddwKRwFigv4YaajgOTUrBJyYI9QVRV6oRTvQ1d5ch93rlVEhzOUEYUjweahm5IC1cOMn6Bb9QNq1NjZiNwcx2O%2BZiRhdX50sOW82XOiKS%2FShW0YOnHQJl4PEm9RzvE38d%2BiRqpEOu937fejVQttFPPWzZxKJyNOU%2FLLQS4O1BXT%2FxUVgQLjgKOBlx97uOIQCLeDNDCqi9nFBjqkAbxb9TDWOjd%2BRevZwixAVeNm3GZo3mz%2FqTjCegrqbq8lkPUFiMo3ZQnSZLIX7PUQ0K2YL9ejmcNRRGQr1qI38gchdzTD7afLsgCWTeKDs2gnPIazfMzBbA4Hz6VGSxZb5H9oAErVnwtbyQdEHK%2FJwQl9m%2BwqcE5N7l7WGc70moF376Ilt4lk0OHbFzSwwyQtWrCwuaNqncIFOmOvBrqU8y%2BSafGM&X-Amz-Signature=f79640bbd34a51d847e795987869335161807729cdb1db53262550759cccfe1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THD6A2TX%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmgVO0umJVITcbGe%2FqkxboESPZFm4gG5lVbAXDPcjZwQIgG4MlwWyMNv0si9aj98YESlg4zpER%2FgFKxsAWY3mkJPEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOWY%2BpflIBnTY%2BlPECrcA0sh4SCqzOPVHBDWy2xQ0sgJGVvvIKQNXFJoaRZU2ev%2FwxMq%2Fyo4TZ%2FzuSQA1Ls4jJJptsMqUyuFWSvKdZMb%2FNilC55bezaOZK7nx1IT7vqQrtUVi45ooPBlmmq2bik4RuC6jEMmPcaESPXmo7ZbrgVE37oAwYMlKscGjPQQQZKPvGlq29MmE%2BxGRMu6PIHUnsWyhMpQldgg9O8c05kAuuHIo%2Fwr8NW6ddWi%2FiJ49NZQzwFapYCos7PwjNmYwghrQ2uP%2Bnl562tuYXMQgb6bHVr%2FI%2FIKqJAqv5pmRdWY4S0rAoi1dLT7uj6M%2FERiEAJDNvkT%2F5kZz%2BWmVwp6%2BSe9yudeiXmaKwW4Xqp4uksYfGLhH4bHGafAS4qhlYbHzD7USyy8pPxBxVqKhiJnxaai7IkOCsTIVdFDou7LZBePDEaOI2VRxR1JgWvoLkD1dn2NqQrX903%2FyHrx1V4bH%2Fxy7QHMgh%2FWWsgckV%2FO%2F82KmdzSxcvsl1redD4q4BO5ZKjy5jIMY7Y5ZQotplpW5N6W2LN%2FKaZuUwoA13Y1YwHdYjpEsh1D4XBIxZhmHYWZ4r21L2NREswto0c%2F2MW4%2FJF94JKk5aEWehekGXWmr7arE0B%2BxKbVORjWy0nd%2BAIBMM6J2cUGOqUBb9Z%2Bqn3PlVTB8UkfU4BxpCvmG0FFs7UoDp3WQXlwoAhzYFM5JITuU0NZzWGtxF27gL5%2FqpS1iSSow%2BvCtzE9DnrwsS1AZMK%2Bi4D0dVa%2Fpi%2BTn%2FMLPWskHsub2z50uvuYV%2FACJEfhftfKRFvKEljrM7x3ofSfc8YGBoB0yG72irWhYpKioBB%2BKeRDgGyXhFpgD2kMLARXEa5mauc5gVBQV6cvc6en&X-Amz-Signature=77a02cbe51f3baba5689feff6ee84effe1c39fce5aab761c45e8f67f91c6bb0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDIK6M2D%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAcW%2BkViNF6M%2BtyOumarVvDcuCcjjWPaTS35zSHHBbqSAiEAvrl7PrrnPelKm8fAtrgvEbtlFCOLtkEY3W5c1y2O2Egq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDD2fLhgFAKKGJMIp%2BSrcA2d5551Aes7aFMRwiDluVVrDHDoRakb2Ke2RpIZmJIKJz2pPJ7KqSvm7T7zpnRdxaGfYKNTod0acfSR%2Flhgc57aFjQflCAUQ3vmt3BzW3FQ8vjLVqJ0WGcdnO4oRpt1tXHuXVv36QyraNYNdAsNYc8zrN8pl5uva0ViH5a9PiQORUewoR5SV78UqxFjvF%2FsohyFZM84AOlPWLwfLAk8SNYGb50cw4yj957AtfLPQgL8TEu3XaSakLbkJi7pCttakAb2zRB1XCEdke45C0%2BJZiJXkiKukzGJ19BiX6%2FMFReKJTIGMzs%2BPwhmc2xPaUwbJVNfEGUX2gWvwotQniVTKgdkZx1JODi2abiqMgFX3fn73Q13ogVtMkqgaWAC3a1JK6uhkYTb3jVynB%2BUcUtLXlPN17D2BSlC03J7Nxi6RswvHerSzQ4Re0I5CghHE80iadOqwxzKLbf7d%2BMVVULYN13BHr3EC7VmQdnX7lsLGzwYZXq8KvDwa9ThOmja79J3dT2Q3RwDLJ87vaW7wd52EGuXSKI6My4kLJYe9aginsQOlC%2FmYS4NTMFt5LReMqqOqe0PIs8ZIBxRc2azYltAJd5sWeAvSSat5DnfU4AMc3fBbOx7%2FdIaVopDvnY2lMJmK2cUGOqUBi2gfcQMbUBs80ZYfxP1N7xn6SHuzAPehvuOsKUca53rPhmUhIOMrcukc1GNyWCHt09jy4foXskc2R7qaz9kUN%2Bp5CgRn%2FVaHc%2F5YdtepBs9yJvYrgpvFhHsBvENLW47ENmJMqGwiHVklQJtYRQkc3XIx4nk6h%2BjVg1zrErpgfLOv%2FcRdxJjA9Y%2B%2FuZEbQpfOYvYg7fOFusoERctheSRpcpHp3vtf&X-Amz-Signature=24164eb7ddb5f94c39fc11a70a84ab877b681a819316a289414c2b6e7fb4b2b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THD6A2TX%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmgVO0umJVITcbGe%2FqkxboESPZFm4gG5lVbAXDPcjZwQIgG4MlwWyMNv0si9aj98YESlg4zpER%2FgFKxsAWY3mkJPEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOWY%2BpflIBnTY%2BlPECrcA0sh4SCqzOPVHBDWy2xQ0sgJGVvvIKQNXFJoaRZU2ev%2FwxMq%2Fyo4TZ%2FzuSQA1Ls4jJJptsMqUyuFWSvKdZMb%2FNilC55bezaOZK7nx1IT7vqQrtUVi45ooPBlmmq2bik4RuC6jEMmPcaESPXmo7ZbrgVE37oAwYMlKscGjPQQQZKPvGlq29MmE%2BxGRMu6PIHUnsWyhMpQldgg9O8c05kAuuHIo%2Fwr8NW6ddWi%2FiJ49NZQzwFapYCos7PwjNmYwghrQ2uP%2Bnl562tuYXMQgb6bHVr%2FI%2FIKqJAqv5pmRdWY4S0rAoi1dLT7uj6M%2FERiEAJDNvkT%2F5kZz%2BWmVwp6%2BSe9yudeiXmaKwW4Xqp4uksYfGLhH4bHGafAS4qhlYbHzD7USyy8pPxBxVqKhiJnxaai7IkOCsTIVdFDou7LZBePDEaOI2VRxR1JgWvoLkD1dn2NqQrX903%2FyHrx1V4bH%2Fxy7QHMgh%2FWWsgckV%2FO%2F82KmdzSxcvsl1redD4q4BO5ZKjy5jIMY7Y5ZQotplpW5N6W2LN%2FKaZuUwoA13Y1YwHdYjpEsh1D4XBIxZhmHYWZ4r21L2NREswto0c%2F2MW4%2FJF94JKk5aEWehekGXWmr7arE0B%2BxKbVORjWy0nd%2BAIBMM6J2cUGOqUBb9Z%2Bqn3PlVTB8UkfU4BxpCvmG0FFs7UoDp3WQXlwoAhzYFM5JITuU0NZzWGtxF27gL5%2FqpS1iSSow%2BvCtzE9DnrwsS1AZMK%2Bi4D0dVa%2Fpi%2BTn%2FMLPWskHsub2z50uvuYV%2FACJEfhftfKRFvKEljrM7x3ofSfc8YGBoB0yG72irWhYpKioBB%2BKeRDgGyXhFpgD2kMLARXEa5mauc5gVBQV6cvc6en&X-Amz-Signature=e83da2977dac1bdd57904be7a9c15cc88528aac5ae46120d9621beac711c4309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHJGLJAE%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMDYBP3BK8DbVJL7%2BXZKCYnRs5n1g9QASWj1ZuswiVKAiB2EV73hVuNHcGh2cFMbnK34mqiCTV1i5u4zC19nxgiNSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMvSP47DxPzCecv%2FkzKtwDr6Od%2BaJIcbxOU%2F%2FwsC2r5FKPjskskYDZIdame0R8QhGvpKsXUzvBjHhXv75M%2FtkUTNFwkj%2B7aKuUnpwzfxwdga%2BNTaq8w8RZFpP6ASsbEGiQE0ZvKq6WY9pdGYQAk2JKROxuCTujCIMKiyPWPboCYkpY%2FfIW4Wdq1xmDMYUJMCHrNFpy2cQmHgKaQKgxMpgoUcU6BYfq6m9zybKveywWGyuJpIZZj3BepzpO0xglp8E6zzh%2Fq9WtE3bWJFWoQ1h9W%2FXYgRzAI5kZrvGUAry%2Fe6%2BeEMQ1E2BRWQ%2B3o%2BmnAvPgDKs3O3KetTdoukh5woFydef7%2FjXQWZUPsf%2F2vgJhOnm2PCSrdTNqe%2BgxxV3Jvhyuz6yUgHUI1UmyIEs1AqXm9V9BOnZasZQLCJT80v4KXtvVCHTHZyYdZUes80H1Dqfe7k2rH8u3pCTFtRICw%2BacnE06VPAvUuRvvLqFL1B5YUzSgclsP9hco%2F%2B0kyy%2BGGnKPTlUZNQeBaABi905jdxkAgXpY464RkX8v24MTMlBwCR8AAG0GD%2BNubdTzrAKe2tiKUg%2BtT50%2F73sqoyv8qaBayvnvGx00qQ7oAkdNawBuru0smKBP1hxk84I11KfWe7DgT%2FU5wqGV2ATH3Qw9IrZxQY6pgFpjpqgLxzEaxQLRiu3%2BMlmMdPNua8DmPU3Yfs1CEEC1rrHeKJc66t9i4WTXfMqe6%2Fe%2FIa%2F54TVl7Mwh2lWWhz0YEqd1Pc38iqm6AIfyJi%2BvaMArUTehvnY5l8Z%2BrMVADU4XA4zRVdCvdCwkWxsUDw3WWdgqPHPMst6iI%2BgsvnF8TT4Qe2SLp0NMz3AL4AoHx8nuemX4eJ4UUA8Cb%2BdQzCXrg9hdel%2B&X-Amz-Signature=080df8e4eb266a2fb928600b99c8772a4f69cff18473e03cf5c2baec51d9b932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THD6A2TX%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmgVO0umJVITcbGe%2FqkxboESPZFm4gG5lVbAXDPcjZwQIgG4MlwWyMNv0si9aj98YESlg4zpER%2FgFKxsAWY3mkJPEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOWY%2BpflIBnTY%2BlPECrcA0sh4SCqzOPVHBDWy2xQ0sgJGVvvIKQNXFJoaRZU2ev%2FwxMq%2Fyo4TZ%2FzuSQA1Ls4jJJptsMqUyuFWSvKdZMb%2FNilC55bezaOZK7nx1IT7vqQrtUVi45ooPBlmmq2bik4RuC6jEMmPcaESPXmo7ZbrgVE37oAwYMlKscGjPQQQZKPvGlq29MmE%2BxGRMu6PIHUnsWyhMpQldgg9O8c05kAuuHIo%2Fwr8NW6ddWi%2FiJ49NZQzwFapYCos7PwjNmYwghrQ2uP%2Bnl562tuYXMQgb6bHVr%2FI%2FIKqJAqv5pmRdWY4S0rAoi1dLT7uj6M%2FERiEAJDNvkT%2F5kZz%2BWmVwp6%2BSe9yudeiXmaKwW4Xqp4uksYfGLhH4bHGafAS4qhlYbHzD7USyy8pPxBxVqKhiJnxaai7IkOCsTIVdFDou7LZBePDEaOI2VRxR1JgWvoLkD1dn2NqQrX903%2FyHrx1V4bH%2Fxy7QHMgh%2FWWsgckV%2FO%2F82KmdzSxcvsl1redD4q4BO5ZKjy5jIMY7Y5ZQotplpW5N6W2LN%2FKaZuUwoA13Y1YwHdYjpEsh1D4XBIxZhmHYWZ4r21L2NREswto0c%2F2MW4%2FJF94JKk5aEWehekGXWmr7arE0B%2BxKbVORjWy0nd%2BAIBMM6J2cUGOqUBb9Z%2Bqn3PlVTB8UkfU4BxpCvmG0FFs7UoDp3WQXlwoAhzYFM5JITuU0NZzWGtxF27gL5%2FqpS1iSSow%2BvCtzE9DnrwsS1AZMK%2Bi4D0dVa%2Fpi%2BTn%2FMLPWskHsub2z50uvuYV%2FACJEfhftfKRFvKEljrM7x3ofSfc8YGBoB0yG72irWhYpKioBB%2BKeRDgGyXhFpgD2kMLARXEa5mauc5gVBQV6cvc6en&X-Amz-Signature=62e5ba38a31f576d51e79532281ff63d24fd5c5f1d44b79a009db3bba34e51e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2Z5FG66%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUilYVl%2BfnPL9fKLxcAF07Zcq1kaR0t5tqa%2BiWb3ypwAiAGaFZdZPcIVd360eJAmBmiwk6%2BRMTQgtO4FwhxH5KuRCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMpHZLsfjMzwNxj6X0KtwDwBwq7upZWLPCjljZSdEBKMHdXIabVc2t%2FcqenvkDqb7HhFMS3Geup4MwnUrBbMSW3lFQHF1Iba7MULPRza6x3WSqcx4z%2Bh7s3PCRGVcPVyv7UpGEICIQxGr9qoxL%2FEaK2FRaIV%2Fk%2BcM24nN3b7BOt2mq2mt6EBnvRNkUJlGt7Q34Ry9xUAvOqYV%2BVoKfOZ2%2FbRikj8bFpXEM4pHQM1zssiuueomtjFpVrt7znM%2FHMh%2Fmk3dZ9egoOJyQufAtzb2yo06IO69p916U9QatoZb0aWoaGj6rrH39QRNCq%2B1zKr6zQWDIfHVpR9qFOXSXwAKUAYY2Qbo7V2e9%2BlHlefVHK0jmPXBwc46fQnmnVotIDgh7PTFyKUHAe%2F9HmPga3ahDBfO15RLc%2FlGJQGetAtO0EefkT%2FmZ38JkdDMdNGP98U2RsUEHv79mtzuaRWaw%2F%2FS16aMRqGsx5lYwoPYBy%2F8Ve0IYbItZCk6rQ6VTis6gKoXuQUeBqzIOEnKU%2FcZjbNk%2BtGDJTZKZaXyUwfvws70s0hEihetoFahrhvKCiRdStWUumVGh7ge%2Fh7XYPLTcdXY8kjQiUSNkIqtx2zNW56vcfnyUjT1hvOFm%2FiZ%2Bv7RvJK0XYlsWtS2R%2BLCgMJEwjYvZxQY6pgGpCn9rj3a4waFWnv1aWqIxtSqmBgZQzl9azPj6dURILdPqz9De8LmK9UpvqK4IVyIUGHcbYh8WI6esAexTpRUMXNBslhOvvdwMDkpoE18vHh6tZ2wBs5tG%2BLAcPGkmLrlgq0GKKpxVavoU1fY2KtWOSs4clVoguLgMBjQFPz1hJLD9yUsoAyg%2BLPfYoq3cz1ZhMu25QXybwHOVA7sTadcV3GeC6qZo&X-Amz-Signature=777f60b959f38540fb1f8e6935a10728adf927f34f72ef02d562b8016ac57c55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THD6A2TX%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmgVO0umJVITcbGe%2FqkxboESPZFm4gG5lVbAXDPcjZwQIgG4MlwWyMNv0si9aj98YESlg4zpER%2FgFKxsAWY3mkJPEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOWY%2BpflIBnTY%2BlPECrcA0sh4SCqzOPVHBDWy2xQ0sgJGVvvIKQNXFJoaRZU2ev%2FwxMq%2Fyo4TZ%2FzuSQA1Ls4jJJptsMqUyuFWSvKdZMb%2FNilC55bezaOZK7nx1IT7vqQrtUVi45ooPBlmmq2bik4RuC6jEMmPcaESPXmo7ZbrgVE37oAwYMlKscGjPQQQZKPvGlq29MmE%2BxGRMu6PIHUnsWyhMpQldgg9O8c05kAuuHIo%2Fwr8NW6ddWi%2FiJ49NZQzwFapYCos7PwjNmYwghrQ2uP%2Bnl562tuYXMQgb6bHVr%2FI%2FIKqJAqv5pmRdWY4S0rAoi1dLT7uj6M%2FERiEAJDNvkT%2F5kZz%2BWmVwp6%2BSe9yudeiXmaKwW4Xqp4uksYfGLhH4bHGafAS4qhlYbHzD7USyy8pPxBxVqKhiJnxaai7IkOCsTIVdFDou7LZBePDEaOI2VRxR1JgWvoLkD1dn2NqQrX903%2FyHrx1V4bH%2Fxy7QHMgh%2FWWsgckV%2FO%2F82KmdzSxcvsl1redD4q4BO5ZKjy5jIMY7Y5ZQotplpW5N6W2LN%2FKaZuUwoA13Y1YwHdYjpEsh1D4XBIxZhmHYWZ4r21L2NREswto0c%2F2MW4%2FJF94JKk5aEWehekGXWmr7arE0B%2BxKbVORjWy0nd%2BAIBMM6J2cUGOqUBb9Z%2Bqn3PlVTB8UkfU4BxpCvmG0FFs7UoDp3WQXlwoAhzYFM5JITuU0NZzWGtxF27gL5%2FqpS1iSSow%2BvCtzE9DnrwsS1AZMK%2Bi4D0dVa%2Fpi%2BTn%2FMLPWskHsub2z50uvuYV%2FACJEfhftfKRFvKEljrM7x3ofSfc8YGBoB0yG72irWhYpKioBB%2BKeRDgGyXhFpgD2kMLARXEa5mauc5gVBQV6cvc6en&X-Amz-Signature=e838b622117067e993ea22434e22cabe1cce9ac71862b152bf148e5b667362e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF73FHVC%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU5s4Y00BFZ5EsHKrJKA0VotfQMczYV%2BA%2FDy4sqa73rgIgcT1X4s0DJ5aZHkYsLNVSHAWoiTk%2F2i2%2FENYgTjR%2Fnagq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDNncSIB9z9PG2sgImircA%2Fv9hRN42opNcXcaKLogbreJD%2BK0LQrc7LWEEjZXb28Oz5tUncW6nLZnYLpBMfTnj%2FRyHmW7a6MWTAvUxwFwBeMFb%2Fzbds8yveJjhyl4jzff%2BP1f5khNOzFqY7%2FU2Kz8qeqilePzKZFSneH1gjeoAhkn51pvyyo5aaQGfoxEMiNP4Ni8PGfzzcsaIxUtqyD5kGRSuvZS7f%2FfAR%2Fv1ugDdqYTHNG27Fi668XKTvQSSN53cNF3M1BeB4DYpxKcBc0NNNK41JPylO08VexXeBIrkiIGoslzr1KduJ2CUK7aN0VBhnSCCIxTEKyu2IGZd4XIvZSNGMh0duXW28B%2FOdW1VBuPtS6VUd84rx2EPZD3rcdzxib2cmnzOng8lMERrzO2TXsaNfOi12ihcGv2z0x9ynAoD3146%2B%2Fedihra5SfpJUvtccZhzaWyRpuks8naWZen6glGAYjVOPDdRZ1Y5SVDJkk2xLrcl3UcHmug1Q5KuytcmnT%2B%2FZsa8fVjoeFtrgQ%2BgYob%2FyifiWUMTN%2Bvcqtw5%2B%2Bv5W5sN5anum7hal7sipbbgPwK6MzTSeTOkmqdnWhEerSPuL9cJEWNR9qHYVJPTw8Z%2FQEmVlTtRqlZmAFJqWp5WoCthJH3F89i79CMOGJ2cUGOqUBn1Jl8wZ5OJwzqRK0G738v5HQFu8di3ZgSa6QY%2BvaXHL2VHq%2BR4MTUD37MGO1LjDwIOScm%2B%2F2UUn5LecvtseHWB1%2BhvFACmOEcwc1JxG0YbRlpm8ywvtO8cwf14%2Bsl6waazehX1eFZ2wC%2Br8DFYpjKKSeOilRz2lRYLKlWye3UxxJSHjvfmFUSSDOR7PW0JvkJGtsiTC4fCJWeVRY4mw6uT8gjWXY&X-Amz-Signature=da4d75740906d88930282a75a011f4740f34491fddc93b949f3944623784bfbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THD6A2TX%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmgVO0umJVITcbGe%2FqkxboESPZFm4gG5lVbAXDPcjZwQIgG4MlwWyMNv0si9aj98YESlg4zpER%2FgFKxsAWY3mkJPEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOWY%2BpflIBnTY%2BlPECrcA0sh4SCqzOPVHBDWy2xQ0sgJGVvvIKQNXFJoaRZU2ev%2FwxMq%2Fyo4TZ%2FzuSQA1Ls4jJJptsMqUyuFWSvKdZMb%2FNilC55bezaOZK7nx1IT7vqQrtUVi45ooPBlmmq2bik4RuC6jEMmPcaESPXmo7ZbrgVE37oAwYMlKscGjPQQQZKPvGlq29MmE%2BxGRMu6PIHUnsWyhMpQldgg9O8c05kAuuHIo%2Fwr8NW6ddWi%2FiJ49NZQzwFapYCos7PwjNmYwghrQ2uP%2Bnl562tuYXMQgb6bHVr%2FI%2FIKqJAqv5pmRdWY4S0rAoi1dLT7uj6M%2FERiEAJDNvkT%2F5kZz%2BWmVwp6%2BSe9yudeiXmaKwW4Xqp4uksYfGLhH4bHGafAS4qhlYbHzD7USyy8pPxBxVqKhiJnxaai7IkOCsTIVdFDou7LZBePDEaOI2VRxR1JgWvoLkD1dn2NqQrX903%2FyHrx1V4bH%2Fxy7QHMgh%2FWWsgckV%2FO%2F82KmdzSxcvsl1redD4q4BO5ZKjy5jIMY7Y5ZQotplpW5N6W2LN%2FKaZuUwoA13Y1YwHdYjpEsh1D4XBIxZhmHYWZ4r21L2NREswto0c%2F2MW4%2FJF94JKk5aEWehekGXWmr7arE0B%2BxKbVORjWy0nd%2BAIBMM6J2cUGOqUBb9Z%2Bqn3PlVTB8UkfU4BxpCvmG0FFs7UoDp3WQXlwoAhzYFM5JITuU0NZzWGtxF27gL5%2FqpS1iSSow%2BvCtzE9DnrwsS1AZMK%2Bi4D0dVa%2Fpi%2BTn%2FMLPWskHsub2z50uvuYV%2FACJEfhftfKRFvKEljrM7x3ofSfc8YGBoB0yG72irWhYpKioBB%2BKeRDgGyXhFpgD2kMLARXEa5mauc5gVBQV6cvc6en&X-Amz-Signature=6da9b09c6db097f871cf806b54a2183ce20960d3a425459b6251fd8b4f38a9e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UUJACYB%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzW4808ghwaWRoDQYjupCD3bXGCb5g2ihQ%2BDkLi4RAkAiEAvj0nG%2BxtBd87GEdvVgNBGlXzbulVy6BLT8Z7LhxR2Loq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDPwk9AGODH9sqtUadSrcA%2BykwfP99iNHjAEwPISVJzd%2BuBFRlEuwrVmFi3vDEs0He4%2Fug4BKOWVtrRlWPvR8sTcv8kHiSgNSwNNzF0EpghhkiW8Gyb1HhCZVnvFgB5nYaxchptbla6DB1adVjw6hlB05d1z0%2FkePG2B4i96Y3lTzs5ltZgrCktugTwsseNbBOLjkL3CVTQD8rnww67SHJ2b1gjKXkaG4V77U1cTdihhXC05Z50KJ5tPHhx5XL7O72C8eJpCXF4BL7zaSEAxvPQu8TyrjtI1%2BDRBA7Hif7GmZ%2B4h81Rd6W0I2fTiKe4ZTMXgH7EXYspbivghZQDIKWUH0qxfgJATM4sgdVyrKlLI6uB0D%2FMxmgtnCIxnnRtYl36foF4ONTcpVEtrYYCscKESp1RJpdomyYE9v7K8xSgvjEUIBFpYIFxYDeHY11mrHpYzDW6t95J0qxrh1UeI3iQgYp0u%2Bmg3oB99itYfgmwhQoGkvkKqXAeVo%2FAcOI0Zq1HMQ8%2Fs6CTTXjcNkn%2BoO4CTu%2B%2FJgKDMA8B1dRVrp5dPpD7nvRzFVvAB6SnaFK4qw%2FBAZgcUYny9LjMFejxHq2u4JZ1XuL9x9wA9cdqjzJErjWuse3ubvONFqnexCB5Mwh5KKIcrgARW2tr%2FWMPqK2cUGOqUBnFH5erGs8Y8WGW40Qh2GS1FC3cpstggrOuKkIyq%2BUrfNGYL1ozDgloNITyj7vnxBcoYWlGq1wHNyVuXnU8I6u7MNLD1NmUwGDDNfKMinHx9rjJDA09huOkq4MbCm2DOzedSgEn6NSF0LT2l9zsFKB5lILbr%2FGonu0UXd0LzTnglzCe7p36f46dwW2t4aYocemEtV1Y8g8eegf6oYAuUszmSZ0DCD&X-Amz-Signature=000d29a352821ea8127ad7da5b78edfbf53ba39134513bba2813697687b1522a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF26A22G%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9CeiJE7W08OgGMJ6gH%2Fkg7XM1rrg%2BFrMrRME05lLywAIhAI6qTZiaA%2FZm2MiYrH%2F7n9GHZnm3BAIMpNsOy7ZERqifKv8DCCIQABoMNjM3NDIzMTgzODA1Igxn8JyClz7WmGMCJWQq3AMADHciVhyE2WTUSdjydjfT8OdG2sovNdjP3zriYtS%2BGs0IffWa6o6H5DvnRASZ1Vz54wpI7UnD5zIBnHQ6jh0kyCWSCJITiDokBYW2f0u49s%2F1uiHLqRmOnvVsHnXsWDs3bAfjRwqtknUUXrqUk%2BLVgGx9DzaLhyjDQJ3tlvBdJSSvCCjr98UM8JD6xUbSUZJ1Y6l3nFpqwX8kStiVYLdw173F8dAVUo9BoxfAPCw554hWjWYX5SmqGC%2B%2FifD548PQDL%2BKhz47be6st%2B9bz2rPNFMpEtlktz5fI3LrMlcggimkS8TDPQGGnLCi%2F7JsTe6SWDmOERfDYZBdEDvkBORD9XnUGB4W9irhARt7702bhC1T6oyFZMBotsNLAcbmHSVdxoR%2BbUZlAwAGlJ2ZZYA1jUr16GPhCTeOodE28nQ2kNSJMv122l0wDXNfllYcYftTbRJrMyfXm78yBQIjDnIcEgRjEzK7TlzSEQSxFqxNeE1nmku134Z41kgqnZrewcWvqFe6FOIuD47hfkGAHuUOAch5Jn1T69bMw%2FE7GCYq5Wf%2BpZhFKWtzMTmnkt5qAst3QSlHw9jERgYJWWvUzEP7gKfeEoAO9WXtKCAla0eRqz6cAUFTDUja8X%2B32TDiidnFBjqkAV%2BSHkGXUoBSPhHJmturuJQNJJ0z8JtCmblMiMOSGQGxFpChi4GiH6T3yrHdI8CRJzocS7dMcuFxbepo8bDNF0gruUzB%2F78FRCdiPBvNQYk9jJSuJZEu0OohhxI8%2B6cvWleaYybCWuj1a%2FOOWjP0usiSUPmiBIwgHKb8y8wdTgbRu%2BPTx6SglZeH4l15smhTY5nROymUXKFPMsQbj4%2BTT7YFd%2FUW&X-Amz-Signature=d039650eddcb23d9f9b3b811aec00d68e23581da1ed32df6c58a70c4cf487a23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJJJOR6L%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqgklWUX21V99Mp50lK8osenaqARNwHI4hWmjZdh8EVAIhALHHcauRFZv95uLEsBDqGFwy%2FsDswMeSOWhJWKonPWtKKv8DCCIQABoMNjM3NDIzMTgzODA1IgzeLDJ9NH%2FVyqcXgXsq3ANobi%2Fig1OeZjupFDoLkL242dghE6uW4yk94SOr%2B94rMAl9DkFOYlFcSQyqCrJbwjkVv2%2Bjdzh8rBmnpOOSR%2BhQ5lCvbz0FBUYvFKUIii4ONTzF%2BYFrWSMxvYVAxZ8MkCOzP5WsrHWr5f029fTpIgpd85opVLK7P%2FH1ZtTnPJ32AChGlirJby7bUcsclRzfrwh7V4ngv%2FKrrCEsaOyT%2Fr%2FNLZQsCmGJVC2D%2Fa4nw7ACZuS%2BgMnvvyaNF0WNswgCVj0Da7W0t8%2FDHAanFEpI1Mj3bjdbLEHoBC1JMko6ULhOOiBST%2FnFM4TEIarBh1JAG1aDkcf0zGY8lmkkdGULU7fui9pK2Quos4o8SB2VcL8e66iG1bi35DiE3CyfE3ezcZGofqFAzgkygim72rhub4l9Yyc0A7cXYAngUV27vLQQCBtuXbedvxeWMPoOpzbxoub9oEBWDGG7hKioZB3%2B2IDPmwIFKLj9hrOSn%2BF53ATBaiCdPwH1Pampqkg57xi4tq0N4jXGDRKCNRAT%2FunncLGmA7DlRDu7%2BJw0O63WJLXOlFfr%2BUGMyUO4S1dPLXTOg2Bx3xpS4jrR4wpcm96TCALf7C7Os6kwfDhAcVZmSaHiV6iP8XZRPvUv2uY7IDCKi9nFBjqkAezA2pnoceZz%2BOi%2Bv3mB3NXVWJI%2BWKFeweArYhEzULgqD14wAwnBlzt%2FOREXbRC6LNdY5mnaUphdP3whBS6IHTZX%2BdCCzUShO5kGH44G7e%2B4y8WEOiV8THxP8b4zrlwecXWThN1s3%2FDVT2DyDXd8HCQfvoYNI7IP4Qe%2BfvK6HyV8MFag1Z5f8mAZCOIMiKZXJIIMUZo1p8kO5nXoIX42vmSwgH%2Fq&X-Amz-Signature=002caf95c479770b2b62fcbc6fc8e3e01f20e9e95a61d97a468f61a57a654a8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THD6A2TX%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmgVO0umJVITcbGe%2FqkxboESPZFm4gG5lVbAXDPcjZwQIgG4MlwWyMNv0si9aj98YESlg4zpER%2FgFKxsAWY3mkJPEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOWY%2BpflIBnTY%2BlPECrcA0sh4SCqzOPVHBDWy2xQ0sgJGVvvIKQNXFJoaRZU2ev%2FwxMq%2Fyo4TZ%2FzuSQA1Ls4jJJptsMqUyuFWSvKdZMb%2FNilC55bezaOZK7nx1IT7vqQrtUVi45ooPBlmmq2bik4RuC6jEMmPcaESPXmo7ZbrgVE37oAwYMlKscGjPQQQZKPvGlq29MmE%2BxGRMu6PIHUnsWyhMpQldgg9O8c05kAuuHIo%2Fwr8NW6ddWi%2FiJ49NZQzwFapYCos7PwjNmYwghrQ2uP%2Bnl562tuYXMQgb6bHVr%2FI%2FIKqJAqv5pmRdWY4S0rAoi1dLT7uj6M%2FERiEAJDNvkT%2F5kZz%2BWmVwp6%2BSe9yudeiXmaKwW4Xqp4uksYfGLhH4bHGafAS4qhlYbHzD7USyy8pPxBxVqKhiJnxaai7IkOCsTIVdFDou7LZBePDEaOI2VRxR1JgWvoLkD1dn2NqQrX903%2FyHrx1V4bH%2Fxy7QHMgh%2FWWsgckV%2FO%2F82KmdzSxcvsl1redD4q4BO5ZKjy5jIMY7Y5ZQotplpW5N6W2LN%2FKaZuUwoA13Y1YwHdYjpEsh1D4XBIxZhmHYWZ4r21L2NREswto0c%2F2MW4%2FJF94JKk5aEWehekGXWmr7arE0B%2BxKbVORjWy0nd%2BAIBMM6J2cUGOqUBb9Z%2Bqn3PlVTB8UkfU4BxpCvmG0FFs7UoDp3WQXlwoAhzYFM5JITuU0NZzWGtxF27gL5%2FqpS1iSSow%2BvCtzE9DnrwsS1AZMK%2Bi4D0dVa%2Fpi%2BTn%2FMLPWskHsub2z50uvuYV%2FACJEfhftfKRFvKEljrM7x3ofSfc8YGBoB0yG72irWhYpKioBB%2BKeRDgGyXhFpgD2kMLARXEa5mauc5gVBQV6cvc6en&X-Amz-Signature=4beb136824920f2898c8688ee08fdcaec251d2cd3aa13362f903b4c769aa5011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THD6A2TX%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmgVO0umJVITcbGe%2FqkxboESPZFm4gG5lVbAXDPcjZwQIgG4MlwWyMNv0si9aj98YESlg4zpER%2FgFKxsAWY3mkJPEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOWY%2BpflIBnTY%2BlPECrcA0sh4SCqzOPVHBDWy2xQ0sgJGVvvIKQNXFJoaRZU2ev%2FwxMq%2Fyo4TZ%2FzuSQA1Ls4jJJptsMqUyuFWSvKdZMb%2FNilC55bezaOZK7nx1IT7vqQrtUVi45ooPBlmmq2bik4RuC6jEMmPcaESPXmo7ZbrgVE37oAwYMlKscGjPQQQZKPvGlq29MmE%2BxGRMu6PIHUnsWyhMpQldgg9O8c05kAuuHIo%2Fwr8NW6ddWi%2FiJ49NZQzwFapYCos7PwjNmYwghrQ2uP%2Bnl562tuYXMQgb6bHVr%2FI%2FIKqJAqv5pmRdWY4S0rAoi1dLT7uj6M%2FERiEAJDNvkT%2F5kZz%2BWmVwp6%2BSe9yudeiXmaKwW4Xqp4uksYfGLhH4bHGafAS4qhlYbHzD7USyy8pPxBxVqKhiJnxaai7IkOCsTIVdFDou7LZBePDEaOI2VRxR1JgWvoLkD1dn2NqQrX903%2FyHrx1V4bH%2Fxy7QHMgh%2FWWsgckV%2FO%2F82KmdzSxcvsl1redD4q4BO5ZKjy5jIMY7Y5ZQotplpW5N6W2LN%2FKaZuUwoA13Y1YwHdYjpEsh1D4XBIxZhmHYWZ4r21L2NREswto0c%2F2MW4%2FJF94JKk5aEWehekGXWmr7arE0B%2BxKbVORjWy0nd%2BAIBMM6J2cUGOqUBb9Z%2Bqn3PlVTB8UkfU4BxpCvmG0FFs7UoDp3WQXlwoAhzYFM5JITuU0NZzWGtxF27gL5%2FqpS1iSSow%2BvCtzE9DnrwsS1AZMK%2Bi4D0dVa%2Fpi%2BTn%2FMLPWskHsub2z50uvuYV%2FACJEfhftfKRFvKEljrM7x3ofSfc8YGBoB0yG72irWhYpKioBB%2BKeRDgGyXhFpgD2kMLARXEa5mauc5gVBQV6cvc6en&X-Amz-Signature=cc5f04dcbbcdf8ed315f4ef48dd61eb8368d268bae8c5b6983ee9a5c5d1d2a5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWBRQVY%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ0y8Vr0VI7D9ay99zlmJsUrNQ9qoJ0CqYAPlaV%2BlRuAiEAqKeujJBaZXAPwl%2BIAF20zj73ruPpVm9az9xvsVCQ4S0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDColdJMfo%2BJtW6DPqyrcA0CAppk61mte1DIQsF9WFZ6goAjpHOH8swsHU4r6Mg%2BPOA1GZRU3ZD4FJ0QITx8IP%2ByqU%2B3nehMqa1VLkWtuZZUjzCrMN7Ckj3gpkfZc%2FHOKfnK%2FVdKIzm86AmDPcHLpjWuM1%2BbtVWymNSD3en1Baebv%2FnDBR3Qnhhd%2FZuXd9qhfNonQSE5rIsfiUW%2BvD9K36yjKpjNDuuB4x7iwC8F2lM67sVpQ4UYqZsjLHuU%2BGj%2ByUwR2YDmAEMMbxH2AgztIR1jCuCSIkQMbT2jzgcgjgvcjb6taU1ZK1GLdiOvD0SlaT6hDpL2%2Bp3EtP566%2BcvULimuVOoZHyuY34jHE%2F%2Bj%2B4JoAMoiwMVScddErzopAawAoM%2B%2BqKgpK3cvXF1SuZRpBHybac148kwEtyh3%2FOo%2BZg4exBehBcFCX6%2BWnBpPW49G6K9ixeNu2FSOYj7lQpx50st8gRLD5AuX2ruRxzKdhbFOvLOo21m803h5WoUvJpt0bBErlRMjHMxcrtChSs1rdzlPr39936xeLUZpq3gqOKNsWKHjb8R%2FGUJA7l0ValXo7KRapjR66avxr%2FxzzbW%2BMkKXpTHklj%2BLMU8PrQDne%2B4lzE%2FPZTAOv166h3OuIfDW5dGQvy620MTZiPf%2BMMmK2cUGOqUB9DUbRDvKnFAj3DrMedh37FYrEMKYBDJzV0JK5Y6LlmT84WI7%2BZuON07%2FY9xpGD%2Bdd5auyEMzUkHUU4QCWgWFChHeYrIXuA3pJGmnMmU1aRfgsS37ERfv%2BWW4IqOEN7g8Y2LDUx9CNRor8TUZcdztjPCeO3SanK5T2A7Rsz%2FtBe98H814L5i3QjjT0T8v%2FOs%2BunBot37NuHmjHkblbjOpDuBFPKbR&X-Amz-Signature=b7585b118c110dbac49ca9f28b872074babf624079baad38e4ae5448c8a76d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWBRQVY%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ0y8Vr0VI7D9ay99zlmJsUrNQ9qoJ0CqYAPlaV%2BlRuAiEAqKeujJBaZXAPwl%2BIAF20zj73ruPpVm9az9xvsVCQ4S0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDColdJMfo%2BJtW6DPqyrcA0CAppk61mte1DIQsF9WFZ6goAjpHOH8swsHU4r6Mg%2BPOA1GZRU3ZD4FJ0QITx8IP%2ByqU%2B3nehMqa1VLkWtuZZUjzCrMN7Ckj3gpkfZc%2FHOKfnK%2FVdKIzm86AmDPcHLpjWuM1%2BbtVWymNSD3en1Baebv%2FnDBR3Qnhhd%2FZuXd9qhfNonQSE5rIsfiUW%2BvD9K36yjKpjNDuuB4x7iwC8F2lM67sVpQ4UYqZsjLHuU%2BGj%2ByUwR2YDmAEMMbxH2AgztIR1jCuCSIkQMbT2jzgcgjgvcjb6taU1ZK1GLdiOvD0SlaT6hDpL2%2Bp3EtP566%2BcvULimuVOoZHyuY34jHE%2F%2Bj%2B4JoAMoiwMVScddErzopAawAoM%2B%2BqKgpK3cvXF1SuZRpBHybac148kwEtyh3%2FOo%2BZg4exBehBcFCX6%2BWnBpPW49G6K9ixeNu2FSOYj7lQpx50st8gRLD5AuX2ruRxzKdhbFOvLOo21m803h5WoUvJpt0bBErlRMjHMxcrtChSs1rdzlPr39936xeLUZpq3gqOKNsWKHjb8R%2FGUJA7l0ValXo7KRapjR66avxr%2FxzzbW%2BMkKXpTHklj%2BLMU8PrQDne%2B4lzE%2FPZTAOv166h3OuIfDW5dGQvy620MTZiPf%2BMMmK2cUGOqUB9DUbRDvKnFAj3DrMedh37FYrEMKYBDJzV0JK5Y6LlmT84WI7%2BZuON07%2FY9xpGD%2Bdd5auyEMzUkHUU4QCWgWFChHeYrIXuA3pJGmnMmU1aRfgsS37ERfv%2BWW4IqOEN7g8Y2LDUx9CNRor8TUZcdztjPCeO3SanK5T2A7Rsz%2FtBe98H814L5i3QjjT0T8v%2FOs%2BunBot37NuHmjHkblbjOpDuBFPKbR&X-Amz-Signature=bb811e1f3754b2249bf40b197d798e10d55d3207a8d1cbc5f318b92530cb23d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWBRQVY%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ0y8Vr0VI7D9ay99zlmJsUrNQ9qoJ0CqYAPlaV%2BlRuAiEAqKeujJBaZXAPwl%2BIAF20zj73ruPpVm9az9xvsVCQ4S0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDColdJMfo%2BJtW6DPqyrcA0CAppk61mte1DIQsF9WFZ6goAjpHOH8swsHU4r6Mg%2BPOA1GZRU3ZD4FJ0QITx8IP%2ByqU%2B3nehMqa1VLkWtuZZUjzCrMN7Ckj3gpkfZc%2FHOKfnK%2FVdKIzm86AmDPcHLpjWuM1%2BbtVWymNSD3en1Baebv%2FnDBR3Qnhhd%2FZuXd9qhfNonQSE5rIsfiUW%2BvD9K36yjKpjNDuuB4x7iwC8F2lM67sVpQ4UYqZsjLHuU%2BGj%2ByUwR2YDmAEMMbxH2AgztIR1jCuCSIkQMbT2jzgcgjgvcjb6taU1ZK1GLdiOvD0SlaT6hDpL2%2Bp3EtP566%2BcvULimuVOoZHyuY34jHE%2F%2Bj%2B4JoAMoiwMVScddErzopAawAoM%2B%2BqKgpK3cvXF1SuZRpBHybac148kwEtyh3%2FOo%2BZg4exBehBcFCX6%2BWnBpPW49G6K9ixeNu2FSOYj7lQpx50st8gRLD5AuX2ruRxzKdhbFOvLOo21m803h5WoUvJpt0bBErlRMjHMxcrtChSs1rdzlPr39936xeLUZpq3gqOKNsWKHjb8R%2FGUJA7l0ValXo7KRapjR66avxr%2FxzzbW%2BMkKXpTHklj%2BLMU8PrQDne%2B4lzE%2FPZTAOv166h3OuIfDW5dGQvy620MTZiPf%2BMMmK2cUGOqUB9DUbRDvKnFAj3DrMedh37FYrEMKYBDJzV0JK5Y6LlmT84WI7%2BZuON07%2FY9xpGD%2Bdd5auyEMzUkHUU4QCWgWFChHeYrIXuA3pJGmnMmU1aRfgsS37ERfv%2BWW4IqOEN7g8Y2LDUx9CNRor8TUZcdztjPCeO3SanK5T2A7Rsz%2FtBe98H814L5i3QjjT0T8v%2FOs%2BunBot37NuHmjHkblbjOpDuBFPKbR&X-Amz-Signature=8a88b65d0eb3c5e15c026c1b9726d1cab4750dc8fe50db37fe97a17d2768857f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWBRQVY%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ0y8Vr0VI7D9ay99zlmJsUrNQ9qoJ0CqYAPlaV%2BlRuAiEAqKeujJBaZXAPwl%2BIAF20zj73ruPpVm9az9xvsVCQ4S0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDColdJMfo%2BJtW6DPqyrcA0CAppk61mte1DIQsF9WFZ6goAjpHOH8swsHU4r6Mg%2BPOA1GZRU3ZD4FJ0QITx8IP%2ByqU%2B3nehMqa1VLkWtuZZUjzCrMN7Ckj3gpkfZc%2FHOKfnK%2FVdKIzm86AmDPcHLpjWuM1%2BbtVWymNSD3en1Baebv%2FnDBR3Qnhhd%2FZuXd9qhfNonQSE5rIsfiUW%2BvD9K36yjKpjNDuuB4x7iwC8F2lM67sVpQ4UYqZsjLHuU%2BGj%2ByUwR2YDmAEMMbxH2AgztIR1jCuCSIkQMbT2jzgcgjgvcjb6taU1ZK1GLdiOvD0SlaT6hDpL2%2Bp3EtP566%2BcvULimuVOoZHyuY34jHE%2F%2Bj%2B4JoAMoiwMVScddErzopAawAoM%2B%2BqKgpK3cvXF1SuZRpBHybac148kwEtyh3%2FOo%2BZg4exBehBcFCX6%2BWnBpPW49G6K9ixeNu2FSOYj7lQpx50st8gRLD5AuX2ruRxzKdhbFOvLOo21m803h5WoUvJpt0bBErlRMjHMxcrtChSs1rdzlPr39936xeLUZpq3gqOKNsWKHjb8R%2FGUJA7l0ValXo7KRapjR66avxr%2FxzzbW%2BMkKXpTHklj%2BLMU8PrQDne%2B4lzE%2FPZTAOv166h3OuIfDW5dGQvy620MTZiPf%2BMMmK2cUGOqUB9DUbRDvKnFAj3DrMedh37FYrEMKYBDJzV0JK5Y6LlmT84WI7%2BZuON07%2FY9xpGD%2Bdd5auyEMzUkHUU4QCWgWFChHeYrIXuA3pJGmnMmU1aRfgsS37ERfv%2BWW4IqOEN7g8Y2LDUx9CNRor8TUZcdztjPCeO3SanK5T2A7Rsz%2FtBe98H814L5i3QjjT0T8v%2FOs%2BunBot37NuHmjHkblbjOpDuBFPKbR&X-Amz-Signature=d3abea96dec30caa024a4206e66c605bc988b81ad801f48a0a2f382d6b7e6538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6FDFCS%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzFexlvoF1Qa4LIVMew%2FNX9UqGoJLRRduCjRXc7FbZbAIgMHS1vk6%2FOgcZ3wzMeTx%2Fzcv5V22WTh3WxYDMXEewvKIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHYyPhjPit3R3YzDJircA5DnkkKFytnp2i62zWMYNO9nDgKp%2FgFS3QN4pQnTmx4p7IOa3ZqUuGsKScIQ5ZbAWXjrLBrlukK9t35AXXxjqruibrGYy6ahqMpAtIO8a%2BZkQvHYoT9jAN1ZHrCLxNmqtVu0DjpwXtoxu3OMDCN9qDnxuM860Ev4pPLUGJu9CjDUk7nAlGzwVBwMwCPue74PAdgCMu7Rb%2Btgd09LPg7AG5rtzITKlzczF9zZjUq3MnF0hKWbBWTuEAINHqC4Ou77Bs6EyL%2FDP1mKessDpgvVWIOLyPqXriPVloyDA6EUXVp%2BryUnlZ0Y9vaSKjojhm229xi%2FrUg69WOCdtzegnvOpq0NO7ZCD%2BO63D80%2FVmSGKVR3psqR2bo%2F4cJp7DDL%2FtN9cvWZPqKGFQpA9T29cAnbErIHzyKzizlG1Wk8hOVMuK191gEl%2FLfCB%2FF6ZteKW8TmrcY%2FfupWTugdNkDRshRWwt2NXwsLoVRR3oEbbvbbjelS%2BfwPpaqPqXjcND9ATEtr4ooa58VoT%2B3m3YP6Z%2BYXRLXHF07Mgb%2Fj14kJDcP9WkudIqlun5O0KtQQBns5NjW5R0IwGPGEUBL2%2FAbM432FM4HfZ%2F3rl4KsD0frNS%2BqgbC1xWwTFAvZ96G7vHnMPeK2cUGOqUB5t9PSE23tS2Fxa7984YoyWo%2BOmIA8AqHKSIIhuv%2Brvt%2B5i%2FHCPWQKOb6O9Luqo8PpMflMIRyLC6zXyDsU22aJedp%2FqrHFqTTwiets8ehfR5URyHYwJkxAphSDQOMYvZyWBKVoNOBSmRctiNZvzCO%2Fcjlo%2FbOvJC%2FU6tgwcMeYbCBfNqimOnRCbcduyoJxilO5eGtUAXMzOHEUSs69smfHFKN1HfJ&X-Amz-Signature=5ee21f9a603304fa5e91af237070869d21e5805a79acfa86ff0bb0315049dafd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWBRQVY%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ0y8Vr0VI7D9ay99zlmJsUrNQ9qoJ0CqYAPlaV%2BlRuAiEAqKeujJBaZXAPwl%2BIAF20zj73ruPpVm9az9xvsVCQ4S0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDColdJMfo%2BJtW6DPqyrcA0CAppk61mte1DIQsF9WFZ6goAjpHOH8swsHU4r6Mg%2BPOA1GZRU3ZD4FJ0QITx8IP%2ByqU%2B3nehMqa1VLkWtuZZUjzCrMN7Ckj3gpkfZc%2FHOKfnK%2FVdKIzm86AmDPcHLpjWuM1%2BbtVWymNSD3en1Baebv%2FnDBR3Qnhhd%2FZuXd9qhfNonQSE5rIsfiUW%2BvD9K36yjKpjNDuuB4x7iwC8F2lM67sVpQ4UYqZsjLHuU%2BGj%2ByUwR2YDmAEMMbxH2AgztIR1jCuCSIkQMbT2jzgcgjgvcjb6taU1ZK1GLdiOvD0SlaT6hDpL2%2Bp3EtP566%2BcvULimuVOoZHyuY34jHE%2F%2Bj%2B4JoAMoiwMVScddErzopAawAoM%2B%2BqKgpK3cvXF1SuZRpBHybac148kwEtyh3%2FOo%2BZg4exBehBcFCX6%2BWnBpPW49G6K9ixeNu2FSOYj7lQpx50st8gRLD5AuX2ruRxzKdhbFOvLOo21m803h5WoUvJpt0bBErlRMjHMxcrtChSs1rdzlPr39936xeLUZpq3gqOKNsWKHjb8R%2FGUJA7l0ValXo7KRapjR66avxr%2FxzzbW%2BMkKXpTHklj%2BLMU8PrQDne%2B4lzE%2FPZTAOv166h3OuIfDW5dGQvy620MTZiPf%2BMMmK2cUGOqUB9DUbRDvKnFAj3DrMedh37FYrEMKYBDJzV0JK5Y6LlmT84WI7%2BZuON07%2FY9xpGD%2Bdd5auyEMzUkHUU4QCWgWFChHeYrIXuA3pJGmnMmU1aRfgsS37ERfv%2BWW4IqOEN7g8Y2LDUx9CNRor8TUZcdztjPCeO3SanK5T2A7Rsz%2FtBe98H814L5i3QjjT0T8v%2FOs%2BunBot37NuHmjHkblbjOpDuBFPKbR&X-Amz-Signature=7d92abf745a8730ae8cd3068aab89dd9d970b8f614501cf54c4b707c1c9830f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWBRQVY%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ0y8Vr0VI7D9ay99zlmJsUrNQ9qoJ0CqYAPlaV%2BlRuAiEAqKeujJBaZXAPwl%2BIAF20zj73ruPpVm9az9xvsVCQ4S0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDColdJMfo%2BJtW6DPqyrcA0CAppk61mte1DIQsF9WFZ6goAjpHOH8swsHU4r6Mg%2BPOA1GZRU3ZD4FJ0QITx8IP%2ByqU%2B3nehMqa1VLkWtuZZUjzCrMN7Ckj3gpkfZc%2FHOKfnK%2FVdKIzm86AmDPcHLpjWuM1%2BbtVWymNSD3en1Baebv%2FnDBR3Qnhhd%2FZuXd9qhfNonQSE5rIsfiUW%2BvD9K36yjKpjNDuuB4x7iwC8F2lM67sVpQ4UYqZsjLHuU%2BGj%2ByUwR2YDmAEMMbxH2AgztIR1jCuCSIkQMbT2jzgcgjgvcjb6taU1ZK1GLdiOvD0SlaT6hDpL2%2Bp3EtP566%2BcvULimuVOoZHyuY34jHE%2F%2Bj%2B4JoAMoiwMVScddErzopAawAoM%2B%2BqKgpK3cvXF1SuZRpBHybac148kwEtyh3%2FOo%2BZg4exBehBcFCX6%2BWnBpPW49G6K9ixeNu2FSOYj7lQpx50st8gRLD5AuX2ruRxzKdhbFOvLOo21m803h5WoUvJpt0bBErlRMjHMxcrtChSs1rdzlPr39936xeLUZpq3gqOKNsWKHjb8R%2FGUJA7l0ValXo7KRapjR66avxr%2FxzzbW%2BMkKXpTHklj%2BLMU8PrQDne%2B4lzE%2FPZTAOv166h3OuIfDW5dGQvy620MTZiPf%2BMMmK2cUGOqUB9DUbRDvKnFAj3DrMedh37FYrEMKYBDJzV0JK5Y6LlmT84WI7%2BZuON07%2FY9xpGD%2Bdd5auyEMzUkHUU4QCWgWFChHeYrIXuA3pJGmnMmU1aRfgsS37ERfv%2BWW4IqOEN7g8Y2LDUx9CNRor8TUZcdztjPCeO3SanK5T2A7Rsz%2FtBe98H814L5i3QjjT0T8v%2FOs%2BunBot37NuHmjHkblbjOpDuBFPKbR&X-Amz-Signature=305e952d1647d0d085d88edaa79618301215dd2307a87de5a53e7797a3ada5d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWBRQVY%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ0y8Vr0VI7D9ay99zlmJsUrNQ9qoJ0CqYAPlaV%2BlRuAiEAqKeujJBaZXAPwl%2BIAF20zj73ruPpVm9az9xvsVCQ4S0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDColdJMfo%2BJtW6DPqyrcA0CAppk61mte1DIQsF9WFZ6goAjpHOH8swsHU4r6Mg%2BPOA1GZRU3ZD4FJ0QITx8IP%2ByqU%2B3nehMqa1VLkWtuZZUjzCrMN7Ckj3gpkfZc%2FHOKfnK%2FVdKIzm86AmDPcHLpjWuM1%2BbtVWymNSD3en1Baebv%2FnDBR3Qnhhd%2FZuXd9qhfNonQSE5rIsfiUW%2BvD9K36yjKpjNDuuB4x7iwC8F2lM67sVpQ4UYqZsjLHuU%2BGj%2ByUwR2YDmAEMMbxH2AgztIR1jCuCSIkQMbT2jzgcgjgvcjb6taU1ZK1GLdiOvD0SlaT6hDpL2%2Bp3EtP566%2BcvULimuVOoZHyuY34jHE%2F%2Bj%2B4JoAMoiwMVScddErzopAawAoM%2B%2BqKgpK3cvXF1SuZRpBHybac148kwEtyh3%2FOo%2BZg4exBehBcFCX6%2BWnBpPW49G6K9ixeNu2FSOYj7lQpx50st8gRLD5AuX2ruRxzKdhbFOvLOo21m803h5WoUvJpt0bBErlRMjHMxcrtChSs1rdzlPr39936xeLUZpq3gqOKNsWKHjb8R%2FGUJA7l0ValXo7KRapjR66avxr%2FxzzbW%2BMkKXpTHklj%2BLMU8PrQDne%2B4lzE%2FPZTAOv166h3OuIfDW5dGQvy620MTZiPf%2BMMmK2cUGOqUB9DUbRDvKnFAj3DrMedh37FYrEMKYBDJzV0JK5Y6LlmT84WI7%2BZuON07%2FY9xpGD%2Bdd5auyEMzUkHUU4QCWgWFChHeYrIXuA3pJGmnMmU1aRfgsS37ERfv%2BWW4IqOEN7g8Y2LDUx9CNRor8TUZcdztjPCeO3SanK5T2A7Rsz%2FtBe98H814L5i3QjjT0T8v%2FOs%2BunBot37NuHmjHkblbjOpDuBFPKbR&X-Amz-Signature=8a88b65d0eb3c5e15c026c1b9726d1cab4750dc8fe50db37fe97a17d2768857f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWBRQVY%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ0y8Vr0VI7D9ay99zlmJsUrNQ9qoJ0CqYAPlaV%2BlRuAiEAqKeujJBaZXAPwl%2BIAF20zj73ruPpVm9az9xvsVCQ4S0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDColdJMfo%2BJtW6DPqyrcA0CAppk61mte1DIQsF9WFZ6goAjpHOH8swsHU4r6Mg%2BPOA1GZRU3ZD4FJ0QITx8IP%2ByqU%2B3nehMqa1VLkWtuZZUjzCrMN7Ckj3gpkfZc%2FHOKfnK%2FVdKIzm86AmDPcHLpjWuM1%2BbtVWymNSD3en1Baebv%2FnDBR3Qnhhd%2FZuXd9qhfNonQSE5rIsfiUW%2BvD9K36yjKpjNDuuB4x7iwC8F2lM67sVpQ4UYqZsjLHuU%2BGj%2ByUwR2YDmAEMMbxH2AgztIR1jCuCSIkQMbT2jzgcgjgvcjb6taU1ZK1GLdiOvD0SlaT6hDpL2%2Bp3EtP566%2BcvULimuVOoZHyuY34jHE%2F%2Bj%2B4JoAMoiwMVScddErzopAawAoM%2B%2BqKgpK3cvXF1SuZRpBHybac148kwEtyh3%2FOo%2BZg4exBehBcFCX6%2BWnBpPW49G6K9ixeNu2FSOYj7lQpx50st8gRLD5AuX2ruRxzKdhbFOvLOo21m803h5WoUvJpt0bBErlRMjHMxcrtChSs1rdzlPr39936xeLUZpq3gqOKNsWKHjb8R%2FGUJA7l0ValXo7KRapjR66avxr%2FxzzbW%2BMkKXpTHklj%2BLMU8PrQDne%2B4lzE%2FPZTAOv166h3OuIfDW5dGQvy620MTZiPf%2BMMmK2cUGOqUB9DUbRDvKnFAj3DrMedh37FYrEMKYBDJzV0JK5Y6LlmT84WI7%2BZuON07%2FY9xpGD%2Bdd5auyEMzUkHUU4QCWgWFChHeYrIXuA3pJGmnMmU1aRfgsS37ERfv%2BWW4IqOEN7g8Y2LDUx9CNRor8TUZcdztjPCeO3SanK5T2A7Rsz%2FtBe98H814L5i3QjjT0T8v%2FOs%2BunBot37NuHmjHkblbjOpDuBFPKbR&X-Amz-Signature=c45316be402023c7856d63a7ffb893fae825ddf4d02ba544bee76d936bf6d56f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWBRQVY%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ0y8Vr0VI7D9ay99zlmJsUrNQ9qoJ0CqYAPlaV%2BlRuAiEAqKeujJBaZXAPwl%2BIAF20zj73ruPpVm9az9xvsVCQ4S0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDColdJMfo%2BJtW6DPqyrcA0CAppk61mte1DIQsF9WFZ6goAjpHOH8swsHU4r6Mg%2BPOA1GZRU3ZD4FJ0QITx8IP%2ByqU%2B3nehMqa1VLkWtuZZUjzCrMN7Ckj3gpkfZc%2FHOKfnK%2FVdKIzm86AmDPcHLpjWuM1%2BbtVWymNSD3en1Baebv%2FnDBR3Qnhhd%2FZuXd9qhfNonQSE5rIsfiUW%2BvD9K36yjKpjNDuuB4x7iwC8F2lM67sVpQ4UYqZsjLHuU%2BGj%2ByUwR2YDmAEMMbxH2AgztIR1jCuCSIkQMbT2jzgcgjgvcjb6taU1ZK1GLdiOvD0SlaT6hDpL2%2Bp3EtP566%2BcvULimuVOoZHyuY34jHE%2F%2Bj%2B4JoAMoiwMVScddErzopAawAoM%2B%2BqKgpK3cvXF1SuZRpBHybac148kwEtyh3%2FOo%2BZg4exBehBcFCX6%2BWnBpPW49G6K9ixeNu2FSOYj7lQpx50st8gRLD5AuX2ruRxzKdhbFOvLOo21m803h5WoUvJpt0bBErlRMjHMxcrtChSs1rdzlPr39936xeLUZpq3gqOKNsWKHjb8R%2FGUJA7l0ValXo7KRapjR66avxr%2FxzzbW%2BMkKXpTHklj%2BLMU8PrQDne%2B4lzE%2FPZTAOv166h3OuIfDW5dGQvy620MTZiPf%2BMMmK2cUGOqUB9DUbRDvKnFAj3DrMedh37FYrEMKYBDJzV0JK5Y6LlmT84WI7%2BZuON07%2FY9xpGD%2Bdd5auyEMzUkHUU4QCWgWFChHeYrIXuA3pJGmnMmU1aRfgsS37ERfv%2BWW4IqOEN7g8Y2LDUx9CNRor8TUZcdztjPCeO3SanK5T2A7Rsz%2FtBe98H814L5i3QjjT0T8v%2FOs%2BunBot37NuHmjHkblbjOpDuBFPKbR&X-Amz-Signature=7f3e8bedf12ed9119a2a36bba5e9f8730af6139909451d343d9222eb1fdcc0a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWBRQVY%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ0y8Vr0VI7D9ay99zlmJsUrNQ9qoJ0CqYAPlaV%2BlRuAiEAqKeujJBaZXAPwl%2BIAF20zj73ruPpVm9az9xvsVCQ4S0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDColdJMfo%2BJtW6DPqyrcA0CAppk61mte1DIQsF9WFZ6goAjpHOH8swsHU4r6Mg%2BPOA1GZRU3ZD4FJ0QITx8IP%2ByqU%2B3nehMqa1VLkWtuZZUjzCrMN7Ckj3gpkfZc%2FHOKfnK%2FVdKIzm86AmDPcHLpjWuM1%2BbtVWymNSD3en1Baebv%2FnDBR3Qnhhd%2FZuXd9qhfNonQSE5rIsfiUW%2BvD9K36yjKpjNDuuB4x7iwC8F2lM67sVpQ4UYqZsjLHuU%2BGj%2ByUwR2YDmAEMMbxH2AgztIR1jCuCSIkQMbT2jzgcgjgvcjb6taU1ZK1GLdiOvD0SlaT6hDpL2%2Bp3EtP566%2BcvULimuVOoZHyuY34jHE%2F%2Bj%2B4JoAMoiwMVScddErzopAawAoM%2B%2BqKgpK3cvXF1SuZRpBHybac148kwEtyh3%2FOo%2BZg4exBehBcFCX6%2BWnBpPW49G6K9ixeNu2FSOYj7lQpx50st8gRLD5AuX2ruRxzKdhbFOvLOo21m803h5WoUvJpt0bBErlRMjHMxcrtChSs1rdzlPr39936xeLUZpq3gqOKNsWKHjb8R%2FGUJA7l0ValXo7KRapjR66avxr%2FxzzbW%2BMkKXpTHklj%2BLMU8PrQDne%2B4lzE%2FPZTAOv166h3OuIfDW5dGQvy620MTZiPf%2BMMmK2cUGOqUB9DUbRDvKnFAj3DrMedh37FYrEMKYBDJzV0JK5Y6LlmT84WI7%2BZuON07%2FY9xpGD%2Bdd5auyEMzUkHUU4QCWgWFChHeYrIXuA3pJGmnMmU1aRfgsS37ERfv%2BWW4IqOEN7g8Y2LDUx9CNRor8TUZcdztjPCeO3SanK5T2A7Rsz%2FtBe98H814L5i3QjjT0T8v%2FOs%2BunBot37NuHmjHkblbjOpDuBFPKbR&X-Amz-Signature=6235e8c976fc061be90e8207867b630a1e714a3c8b599527263e30f718798300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


