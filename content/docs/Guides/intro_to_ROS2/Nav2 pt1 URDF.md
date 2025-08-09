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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCEORKWK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmMeSF4Ctp5Z5ACUQrwz9ROtpEakN6BNbTzyB9e3UOwAiEA3rmk43jJMad4GKIa0atykl9H3KcXsXiKiTh%2Bw7J2gjMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIap76CIfcCvbGR1CrcAysL%2BaM3kgsfzm%2F3qC1pUBo6VjoIX2D3pG%2Bln1%2BWWlSTkcUO7LhNfOKodUB%2BO2Y5udUJfXGovjd0kCWpjuNZDBmmxhfCBi7Be7f3itRTHa%2Fxt7N9VM3%2F1d8uv3YgwZPYwcKw7Bfllr07AxqwP13SMThBesV84YUB92L%2B7eNfBxFxumhOkqRxV11H5zanBpqqHJH9ziC8FRnMIFwGmqbwc%2FbOch50KEMFNdNuGl2sbCv4qVJmvw2UZU3qipyZuFz0oPVHfk%2FR%2BjXvo4aad%2BWYlusgovjFsQRGN4uFQiZn6QX7OkEWY89N2eVZ37GUt5V%2FshDcNzz1H4NLlHLd%2B%2FdwukWPOxiQDRLNSfDUs63T7pY64LMYZG%2Fwx7fiLKMGynqBH9U9RuYUhArWlK%2FsnG8n5FuMSbp66uKBFWRBOpRdjrYFeRLocKbbFPKscatacQtaPNX0rt0s6DpAo4wLVf6o9WDxgQj2%2BtTbl3GtXWr%2FqqhFF6PrVGDnemRXWGRzmOKJCRSXsS9HeMcgo2zrSWTz%2BZsj4tZTACAwAXbxLxsY%2BdkZE5kU130dnGvyPLpcGH4N%2Fd5b%2FB8KpccmDeuzu1ddgPQ%2BOLwJQHUcHf4oeB6S19rrG34%2BxjWGiGGzbLU8MKvk3MQGOqUBy7icnaeA5pteGIZoJY67o9sWIuld%2Fvmqsep8SteylN0RIitt8Qm9Pu%2B3y88qQrUlZo133gf2nKy%2BQivNwj0Z%2FY5CRXZQkRlZoreLlUkNgSEgCVMVJSXZBw2CpjZwODRM2q63oJkfMIIyjl2%2B5MYzRhtv65MeoWsSkOALiC8V6gg4p5gZrHIYadAdgQH0pfqfmElN5Q1mOMrbPExqhCW3NxGuJydq&X-Amz-Signature=2f9ddf530ded8080cde4d882508b01895e4fb468c97383dc50367400da425876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCEORKWK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmMeSF4Ctp5Z5ACUQrwz9ROtpEakN6BNbTzyB9e3UOwAiEA3rmk43jJMad4GKIa0atykl9H3KcXsXiKiTh%2Bw7J2gjMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIap76CIfcCvbGR1CrcAysL%2BaM3kgsfzm%2F3qC1pUBo6VjoIX2D3pG%2Bln1%2BWWlSTkcUO7LhNfOKodUB%2BO2Y5udUJfXGovjd0kCWpjuNZDBmmxhfCBi7Be7f3itRTHa%2Fxt7N9VM3%2F1d8uv3YgwZPYwcKw7Bfllr07AxqwP13SMThBesV84YUB92L%2B7eNfBxFxumhOkqRxV11H5zanBpqqHJH9ziC8FRnMIFwGmqbwc%2FbOch50KEMFNdNuGl2sbCv4qVJmvw2UZU3qipyZuFz0oPVHfk%2FR%2BjXvo4aad%2BWYlusgovjFsQRGN4uFQiZn6QX7OkEWY89N2eVZ37GUt5V%2FshDcNzz1H4NLlHLd%2B%2FdwukWPOxiQDRLNSfDUs63T7pY64LMYZG%2Fwx7fiLKMGynqBH9U9RuYUhArWlK%2FsnG8n5FuMSbp66uKBFWRBOpRdjrYFeRLocKbbFPKscatacQtaPNX0rt0s6DpAo4wLVf6o9WDxgQj2%2BtTbl3GtXWr%2FqqhFF6PrVGDnemRXWGRzmOKJCRSXsS9HeMcgo2zrSWTz%2BZsj4tZTACAwAXbxLxsY%2BdkZE5kU130dnGvyPLpcGH4N%2Fd5b%2FB8KpccmDeuzu1ddgPQ%2BOLwJQHUcHf4oeB6S19rrG34%2BxjWGiGGzbLU8MKvk3MQGOqUBy7icnaeA5pteGIZoJY67o9sWIuld%2Fvmqsep8SteylN0RIitt8Qm9Pu%2B3y88qQrUlZo133gf2nKy%2BQivNwj0Z%2FY5CRXZQkRlZoreLlUkNgSEgCVMVJSXZBw2CpjZwODRM2q63oJkfMIIyjl2%2B5MYzRhtv65MeoWsSkOALiC8V6gg4p5gZrHIYadAdgQH0pfqfmElN5Q1mOMrbPExqhCW3NxGuJydq&X-Amz-Signature=32b4c6770cd98a83bdcd6d6c63d84a381d9ce39562aff6efba7486c2ee6ea12a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCEORKWK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmMeSF4Ctp5Z5ACUQrwz9ROtpEakN6BNbTzyB9e3UOwAiEA3rmk43jJMad4GKIa0atykl9H3KcXsXiKiTh%2Bw7J2gjMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIap76CIfcCvbGR1CrcAysL%2BaM3kgsfzm%2F3qC1pUBo6VjoIX2D3pG%2Bln1%2BWWlSTkcUO7LhNfOKodUB%2BO2Y5udUJfXGovjd0kCWpjuNZDBmmxhfCBi7Be7f3itRTHa%2Fxt7N9VM3%2F1d8uv3YgwZPYwcKw7Bfllr07AxqwP13SMThBesV84YUB92L%2B7eNfBxFxumhOkqRxV11H5zanBpqqHJH9ziC8FRnMIFwGmqbwc%2FbOch50KEMFNdNuGl2sbCv4qVJmvw2UZU3qipyZuFz0oPVHfk%2FR%2BjXvo4aad%2BWYlusgovjFsQRGN4uFQiZn6QX7OkEWY89N2eVZ37GUt5V%2FshDcNzz1H4NLlHLd%2B%2FdwukWPOxiQDRLNSfDUs63T7pY64LMYZG%2Fwx7fiLKMGynqBH9U9RuYUhArWlK%2FsnG8n5FuMSbp66uKBFWRBOpRdjrYFeRLocKbbFPKscatacQtaPNX0rt0s6DpAo4wLVf6o9WDxgQj2%2BtTbl3GtXWr%2FqqhFF6PrVGDnemRXWGRzmOKJCRSXsS9HeMcgo2zrSWTz%2BZsj4tZTACAwAXbxLxsY%2BdkZE5kU130dnGvyPLpcGH4N%2Fd5b%2FB8KpccmDeuzu1ddgPQ%2BOLwJQHUcHf4oeB6S19rrG34%2BxjWGiGGzbLU8MKvk3MQGOqUBy7icnaeA5pteGIZoJY67o9sWIuld%2Fvmqsep8SteylN0RIitt8Qm9Pu%2B3y88qQrUlZo133gf2nKy%2BQivNwj0Z%2FY5CRXZQkRlZoreLlUkNgSEgCVMVJSXZBw2CpjZwODRM2q63oJkfMIIyjl2%2B5MYzRhtv65MeoWsSkOALiC8V6gg4p5gZrHIYadAdgQH0pfqfmElN5Q1mOMrbPExqhCW3NxGuJydq&X-Amz-Signature=b4c5c9afbf99dda73a147cbe122e576b8839cc2103b78743985bbf6567adee4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCEORKWK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmMeSF4Ctp5Z5ACUQrwz9ROtpEakN6BNbTzyB9e3UOwAiEA3rmk43jJMad4GKIa0atykl9H3KcXsXiKiTh%2Bw7J2gjMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIap76CIfcCvbGR1CrcAysL%2BaM3kgsfzm%2F3qC1pUBo6VjoIX2D3pG%2Bln1%2BWWlSTkcUO7LhNfOKodUB%2BO2Y5udUJfXGovjd0kCWpjuNZDBmmxhfCBi7Be7f3itRTHa%2Fxt7N9VM3%2F1d8uv3YgwZPYwcKw7Bfllr07AxqwP13SMThBesV84YUB92L%2B7eNfBxFxumhOkqRxV11H5zanBpqqHJH9ziC8FRnMIFwGmqbwc%2FbOch50KEMFNdNuGl2sbCv4qVJmvw2UZU3qipyZuFz0oPVHfk%2FR%2BjXvo4aad%2BWYlusgovjFsQRGN4uFQiZn6QX7OkEWY89N2eVZ37GUt5V%2FshDcNzz1H4NLlHLd%2B%2FdwukWPOxiQDRLNSfDUs63T7pY64LMYZG%2Fwx7fiLKMGynqBH9U9RuYUhArWlK%2FsnG8n5FuMSbp66uKBFWRBOpRdjrYFeRLocKbbFPKscatacQtaPNX0rt0s6DpAo4wLVf6o9WDxgQj2%2BtTbl3GtXWr%2FqqhFF6PrVGDnemRXWGRzmOKJCRSXsS9HeMcgo2zrSWTz%2BZsj4tZTACAwAXbxLxsY%2BdkZE5kU130dnGvyPLpcGH4N%2Fd5b%2FB8KpccmDeuzu1ddgPQ%2BOLwJQHUcHf4oeB6S19rrG34%2BxjWGiGGzbLU8MKvk3MQGOqUBy7icnaeA5pteGIZoJY67o9sWIuld%2Fvmqsep8SteylN0RIitt8Qm9Pu%2B3y88qQrUlZo133gf2nKy%2BQivNwj0Z%2FY5CRXZQkRlZoreLlUkNgSEgCVMVJSXZBw2CpjZwODRM2q63oJkfMIIyjl2%2B5MYzRhtv65MeoWsSkOALiC8V6gg4p5gZrHIYadAdgQH0pfqfmElN5Q1mOMrbPExqhCW3NxGuJydq&X-Amz-Signature=3312394d73cbd3b67abe352364a7127dfde7cea01307358935ba5ce46e8ca394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCEORKWK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmMeSF4Ctp5Z5ACUQrwz9ROtpEakN6BNbTzyB9e3UOwAiEA3rmk43jJMad4GKIa0atykl9H3KcXsXiKiTh%2Bw7J2gjMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIap76CIfcCvbGR1CrcAysL%2BaM3kgsfzm%2F3qC1pUBo6VjoIX2D3pG%2Bln1%2BWWlSTkcUO7LhNfOKodUB%2BO2Y5udUJfXGovjd0kCWpjuNZDBmmxhfCBi7Be7f3itRTHa%2Fxt7N9VM3%2F1d8uv3YgwZPYwcKw7Bfllr07AxqwP13SMThBesV84YUB92L%2B7eNfBxFxumhOkqRxV11H5zanBpqqHJH9ziC8FRnMIFwGmqbwc%2FbOch50KEMFNdNuGl2sbCv4qVJmvw2UZU3qipyZuFz0oPVHfk%2FR%2BjXvo4aad%2BWYlusgovjFsQRGN4uFQiZn6QX7OkEWY89N2eVZ37GUt5V%2FshDcNzz1H4NLlHLd%2B%2FdwukWPOxiQDRLNSfDUs63T7pY64LMYZG%2Fwx7fiLKMGynqBH9U9RuYUhArWlK%2FsnG8n5FuMSbp66uKBFWRBOpRdjrYFeRLocKbbFPKscatacQtaPNX0rt0s6DpAo4wLVf6o9WDxgQj2%2BtTbl3GtXWr%2FqqhFF6PrVGDnemRXWGRzmOKJCRSXsS9HeMcgo2zrSWTz%2BZsj4tZTACAwAXbxLxsY%2BdkZE5kU130dnGvyPLpcGH4N%2Fd5b%2FB8KpccmDeuzu1ddgPQ%2BOLwJQHUcHf4oeB6S19rrG34%2BxjWGiGGzbLU8MKvk3MQGOqUBy7icnaeA5pteGIZoJY67o9sWIuld%2Fvmqsep8SteylN0RIitt8Qm9Pu%2B3y88qQrUlZo133gf2nKy%2BQivNwj0Z%2FY5CRXZQkRlZoreLlUkNgSEgCVMVJSXZBw2CpjZwODRM2q63oJkfMIIyjl2%2B5MYzRhtv65MeoWsSkOALiC8V6gg4p5gZrHIYadAdgQH0pfqfmElN5Q1mOMrbPExqhCW3NxGuJydq&X-Amz-Signature=40bf29e078be3f6672b7742679a47ac6d76bd5e49d318aee2f93b3fe3cbe5ed4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCEORKWK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmMeSF4Ctp5Z5ACUQrwz9ROtpEakN6BNbTzyB9e3UOwAiEA3rmk43jJMad4GKIa0atykl9H3KcXsXiKiTh%2Bw7J2gjMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIap76CIfcCvbGR1CrcAysL%2BaM3kgsfzm%2F3qC1pUBo6VjoIX2D3pG%2Bln1%2BWWlSTkcUO7LhNfOKodUB%2BO2Y5udUJfXGovjd0kCWpjuNZDBmmxhfCBi7Be7f3itRTHa%2Fxt7N9VM3%2F1d8uv3YgwZPYwcKw7Bfllr07AxqwP13SMThBesV84YUB92L%2B7eNfBxFxumhOkqRxV11H5zanBpqqHJH9ziC8FRnMIFwGmqbwc%2FbOch50KEMFNdNuGl2sbCv4qVJmvw2UZU3qipyZuFz0oPVHfk%2FR%2BjXvo4aad%2BWYlusgovjFsQRGN4uFQiZn6QX7OkEWY89N2eVZ37GUt5V%2FshDcNzz1H4NLlHLd%2B%2FdwukWPOxiQDRLNSfDUs63T7pY64LMYZG%2Fwx7fiLKMGynqBH9U9RuYUhArWlK%2FsnG8n5FuMSbp66uKBFWRBOpRdjrYFeRLocKbbFPKscatacQtaPNX0rt0s6DpAo4wLVf6o9WDxgQj2%2BtTbl3GtXWr%2FqqhFF6PrVGDnemRXWGRzmOKJCRSXsS9HeMcgo2zrSWTz%2BZsj4tZTACAwAXbxLxsY%2BdkZE5kU130dnGvyPLpcGH4N%2Fd5b%2FB8KpccmDeuzu1ddgPQ%2BOLwJQHUcHf4oeB6S19rrG34%2BxjWGiGGzbLU8MKvk3MQGOqUBy7icnaeA5pteGIZoJY67o9sWIuld%2Fvmqsep8SteylN0RIitt8Qm9Pu%2B3y88qQrUlZo133gf2nKy%2BQivNwj0Z%2FY5CRXZQkRlZoreLlUkNgSEgCVMVJSXZBw2CpjZwODRM2q63oJkfMIIyjl2%2B5MYzRhtv65MeoWsSkOALiC8V6gg4p5gZrHIYadAdgQH0pfqfmElN5Q1mOMrbPExqhCW3NxGuJydq&X-Amz-Signature=220c5c0221ca0d05f527b6edf39cf92038d51a674be10d43b574ce5b982b3879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCEORKWK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmMeSF4Ctp5Z5ACUQrwz9ROtpEakN6BNbTzyB9e3UOwAiEA3rmk43jJMad4GKIa0atykl9H3KcXsXiKiTh%2Bw7J2gjMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIap76CIfcCvbGR1CrcAysL%2BaM3kgsfzm%2F3qC1pUBo6VjoIX2D3pG%2Bln1%2BWWlSTkcUO7LhNfOKodUB%2BO2Y5udUJfXGovjd0kCWpjuNZDBmmxhfCBi7Be7f3itRTHa%2Fxt7N9VM3%2F1d8uv3YgwZPYwcKw7Bfllr07AxqwP13SMThBesV84YUB92L%2B7eNfBxFxumhOkqRxV11H5zanBpqqHJH9ziC8FRnMIFwGmqbwc%2FbOch50KEMFNdNuGl2sbCv4qVJmvw2UZU3qipyZuFz0oPVHfk%2FR%2BjXvo4aad%2BWYlusgovjFsQRGN4uFQiZn6QX7OkEWY89N2eVZ37GUt5V%2FshDcNzz1H4NLlHLd%2B%2FdwukWPOxiQDRLNSfDUs63T7pY64LMYZG%2Fwx7fiLKMGynqBH9U9RuYUhArWlK%2FsnG8n5FuMSbp66uKBFWRBOpRdjrYFeRLocKbbFPKscatacQtaPNX0rt0s6DpAo4wLVf6o9WDxgQj2%2BtTbl3GtXWr%2FqqhFF6PrVGDnemRXWGRzmOKJCRSXsS9HeMcgo2zrSWTz%2BZsj4tZTACAwAXbxLxsY%2BdkZE5kU130dnGvyPLpcGH4N%2Fd5b%2FB8KpccmDeuzu1ddgPQ%2BOLwJQHUcHf4oeB6S19rrG34%2BxjWGiGGzbLU8MKvk3MQGOqUBy7icnaeA5pteGIZoJY67o9sWIuld%2Fvmqsep8SteylN0RIitt8Qm9Pu%2B3y88qQrUlZo133gf2nKy%2BQivNwj0Z%2FY5CRXZQkRlZoreLlUkNgSEgCVMVJSXZBw2CpjZwODRM2q63oJkfMIIyjl2%2B5MYzRhtv65MeoWsSkOALiC8V6gg4p5gZrHIYadAdgQH0pfqfmElN5Q1mOMrbPExqhCW3NxGuJydq&X-Amz-Signature=5c4161a162c83dc86e558528d735ee25fd24915805de2a488add480e7cfe48bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCEORKWK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmMeSF4Ctp5Z5ACUQrwz9ROtpEakN6BNbTzyB9e3UOwAiEA3rmk43jJMad4GKIa0atykl9H3KcXsXiKiTh%2Bw7J2gjMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIap76CIfcCvbGR1CrcAysL%2BaM3kgsfzm%2F3qC1pUBo6VjoIX2D3pG%2Bln1%2BWWlSTkcUO7LhNfOKodUB%2BO2Y5udUJfXGovjd0kCWpjuNZDBmmxhfCBi7Be7f3itRTHa%2Fxt7N9VM3%2F1d8uv3YgwZPYwcKw7Bfllr07AxqwP13SMThBesV84YUB92L%2B7eNfBxFxumhOkqRxV11H5zanBpqqHJH9ziC8FRnMIFwGmqbwc%2FbOch50KEMFNdNuGl2sbCv4qVJmvw2UZU3qipyZuFz0oPVHfk%2FR%2BjXvo4aad%2BWYlusgovjFsQRGN4uFQiZn6QX7OkEWY89N2eVZ37GUt5V%2FshDcNzz1H4NLlHLd%2B%2FdwukWPOxiQDRLNSfDUs63T7pY64LMYZG%2Fwx7fiLKMGynqBH9U9RuYUhArWlK%2FsnG8n5FuMSbp66uKBFWRBOpRdjrYFeRLocKbbFPKscatacQtaPNX0rt0s6DpAo4wLVf6o9WDxgQj2%2BtTbl3GtXWr%2FqqhFF6PrVGDnemRXWGRzmOKJCRSXsS9HeMcgo2zrSWTz%2BZsj4tZTACAwAXbxLxsY%2BdkZE5kU130dnGvyPLpcGH4N%2Fd5b%2FB8KpccmDeuzu1ddgPQ%2BOLwJQHUcHf4oeB6S19rrG34%2BxjWGiGGzbLU8MKvk3MQGOqUBy7icnaeA5pteGIZoJY67o9sWIuld%2Fvmqsep8SteylN0RIitt8Qm9Pu%2B3y88qQrUlZo133gf2nKy%2BQivNwj0Z%2FY5CRXZQkRlZoreLlUkNgSEgCVMVJSXZBw2CpjZwODRM2q63oJkfMIIyjl2%2B5MYzRhtv65MeoWsSkOALiC8V6gg4p5gZrHIYadAdgQH0pfqfmElN5Q1mOMrbPExqhCW3NxGuJydq&X-Amz-Signature=fe77076c82e729c2d768016a381a9610635416f78d1eecc5bcf9ac8c6483551b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCEORKWK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmMeSF4Ctp5Z5ACUQrwz9ROtpEakN6BNbTzyB9e3UOwAiEA3rmk43jJMad4GKIa0atykl9H3KcXsXiKiTh%2Bw7J2gjMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIap76CIfcCvbGR1CrcAysL%2BaM3kgsfzm%2F3qC1pUBo6VjoIX2D3pG%2Bln1%2BWWlSTkcUO7LhNfOKodUB%2BO2Y5udUJfXGovjd0kCWpjuNZDBmmxhfCBi7Be7f3itRTHa%2Fxt7N9VM3%2F1d8uv3YgwZPYwcKw7Bfllr07AxqwP13SMThBesV84YUB92L%2B7eNfBxFxumhOkqRxV11H5zanBpqqHJH9ziC8FRnMIFwGmqbwc%2FbOch50KEMFNdNuGl2sbCv4qVJmvw2UZU3qipyZuFz0oPVHfk%2FR%2BjXvo4aad%2BWYlusgovjFsQRGN4uFQiZn6QX7OkEWY89N2eVZ37GUt5V%2FshDcNzz1H4NLlHLd%2B%2FdwukWPOxiQDRLNSfDUs63T7pY64LMYZG%2Fwx7fiLKMGynqBH9U9RuYUhArWlK%2FsnG8n5FuMSbp66uKBFWRBOpRdjrYFeRLocKbbFPKscatacQtaPNX0rt0s6DpAo4wLVf6o9WDxgQj2%2BtTbl3GtXWr%2FqqhFF6PrVGDnemRXWGRzmOKJCRSXsS9HeMcgo2zrSWTz%2BZsj4tZTACAwAXbxLxsY%2BdkZE5kU130dnGvyPLpcGH4N%2Fd5b%2FB8KpccmDeuzu1ddgPQ%2BOLwJQHUcHf4oeB6S19rrG34%2BxjWGiGGzbLU8MKvk3MQGOqUBy7icnaeA5pteGIZoJY67o9sWIuld%2Fvmqsep8SteylN0RIitt8Qm9Pu%2B3y88qQrUlZo133gf2nKy%2BQivNwj0Z%2FY5CRXZQkRlZoreLlUkNgSEgCVMVJSXZBw2CpjZwODRM2q63oJkfMIIyjl2%2B5MYzRhtv65MeoWsSkOALiC8V6gg4p5gZrHIYadAdgQH0pfqfmElN5Q1mOMrbPExqhCW3NxGuJydq&X-Amz-Signature=0d50e4fca45d0a283dfd285e79b0b142019b3565b35a81443d42218852aa129b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCEORKWK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmMeSF4Ctp5Z5ACUQrwz9ROtpEakN6BNbTzyB9e3UOwAiEA3rmk43jJMad4GKIa0atykl9H3KcXsXiKiTh%2Bw7J2gjMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIap76CIfcCvbGR1CrcAysL%2BaM3kgsfzm%2F3qC1pUBo6VjoIX2D3pG%2Bln1%2BWWlSTkcUO7LhNfOKodUB%2BO2Y5udUJfXGovjd0kCWpjuNZDBmmxhfCBi7Be7f3itRTHa%2Fxt7N9VM3%2F1d8uv3YgwZPYwcKw7Bfllr07AxqwP13SMThBesV84YUB92L%2B7eNfBxFxumhOkqRxV11H5zanBpqqHJH9ziC8FRnMIFwGmqbwc%2FbOch50KEMFNdNuGl2sbCv4qVJmvw2UZU3qipyZuFz0oPVHfk%2FR%2BjXvo4aad%2BWYlusgovjFsQRGN4uFQiZn6QX7OkEWY89N2eVZ37GUt5V%2FshDcNzz1H4NLlHLd%2B%2FdwukWPOxiQDRLNSfDUs63T7pY64LMYZG%2Fwx7fiLKMGynqBH9U9RuYUhArWlK%2FsnG8n5FuMSbp66uKBFWRBOpRdjrYFeRLocKbbFPKscatacQtaPNX0rt0s6DpAo4wLVf6o9WDxgQj2%2BtTbl3GtXWr%2FqqhFF6PrVGDnemRXWGRzmOKJCRSXsS9HeMcgo2zrSWTz%2BZsj4tZTACAwAXbxLxsY%2BdkZE5kU130dnGvyPLpcGH4N%2Fd5b%2FB8KpccmDeuzu1ddgPQ%2BOLwJQHUcHf4oeB6S19rrG34%2BxjWGiGGzbLU8MKvk3MQGOqUBy7icnaeA5pteGIZoJY67o9sWIuld%2Fvmqsep8SteylN0RIitt8Qm9Pu%2B3y88qQrUlZo133gf2nKy%2BQivNwj0Z%2FY5CRXZQkRlZoreLlUkNgSEgCVMVJSXZBw2CpjZwODRM2q63oJkfMIIyjl2%2B5MYzRhtv65MeoWsSkOALiC8V6gg4p5gZrHIYadAdgQH0pfqfmElN5Q1mOMrbPExqhCW3NxGuJydq&X-Amz-Signature=5257813ae2d4085264641a8ef65145232034f02793647fb44abc94e92ca276c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4LVDZX2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgHypknX0TBHvMkPaDRK%2BDOGHYNfpw6iiML3gj6%2BTbwAiEAmLXkIZrHLpuKXjs8gHMbT8lpYpPszmh%2FVI5nQ2vev6UqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4RkwtOjQTNLtBgVCrcA0dAFW0AiX2Xqcgnqd8maDxiMqwmd%2FncQabRF3xwT1lumv0gkwiP2%2B7fuDjNTa%2BF1m%2FLMK0zNU5me9zZMJW%2FaYzKdKJS6i1FdxJJ1s9mHax77CMOII5QclgNisQKfgtRLcNZK3O5mqsAy1ws9sA5Yh%2FR3ht7mzKhZBp6mXUGDtJgQxfj74p6N6z1QvhFVuaD%2BoMDhZdicW9DWzGw4t91aZYntxg0WPnKRD2RlipGXO4Wa27dmqUntiLCewu%2FtTAZSgsXTM9bv7XkdAqo7NMgRBv4Iy4kMz0EUoU3%2FnSEkwBcYGh18ebMxdISODbbLxGxHIYMVDu0rXBOfKDJ4VYE1DDsoQUKlg6mLJDunk8peIImOA0t%2Bgo53OLpUNorZO%2FM%2FLj2YMmz7od6XNg%2BmOEJdR7XyoNeHKgykkh5Ay%2FmREp31tFoOuUVFNKQaFrINggskXeSqcbCnSPy3top5%2FPRan3AIe2F13datNru0FUkwZWgpMrqq7uUu7Nj0ImNXjjGRaV5nUej9cLv2c74%2B07CkMsWXqZe7lu6jWUg%2BWR5rpftn9QeVxuD8s72BXy90Q%2BGDxce%2Fb7NVMTE%2BySi4KBF%2BRU673ufuJAj1yKMPq6jLoLQ7m6XobNktHQig%2B3zMMzo3MQGOqUBjEUEXj5WFUm1upDKh0JvzedPHGCt%2BeVdQxpLZ%2B0IWaS%2F%2By8mP5ew%2F6U5z10Y%2BSDnx7y3eWbVghEebU4AJlTQliMtQata%2FGwB9PoqB9IM9nYtmkH9VKIXIgaCqqkPGG1SvK8xJhsUXDl%2FiWPiL4muSvCf40uqmbpLadZ%2Bh2Xo%2FaQ9WtEi7AXI1FakabSnCi48SDEyTZaF4P9%2B7dbXfDVH3qMUAuqG&X-Amz-Signature=c8a9ec76c8adec5439aa4e55aaa5fb0211d9aeff4ab926c616c6480d7bf62b2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USIMRJGG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLYQQGfuXxc6M9ISYKD4%2FXAFEvAk8k9F%2FHbihZLda97AiAXL3Hww1SV4Kvy0xHWwuTiSpLSs%2BwzI4RxTWe7F7FsgiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXcoijKf1W%2BueQ7BKKtwD9CsFOyBfuD02V1B%2Bswk4WAGtCtmqHw39SnlifaKQGzsTw2qXIN%2BwgvPITGQF5ilIPJ3uT%2FxpI%2BrgPEF28mH3u2LNg4jGtB7CRVo32JiEjqv6cXAfOXPHvtgJDVsqTLvQvGKoIBP3YYaKAzBEZK48hcZfTcg4ziapkD46%2BuGysTj45aPguFdTwhW4oOhvjDN5fAgH4s2Vq2PwvJOtzB2qFQcOYR2q64PowPB%2BYXfgGGCUIeQ9D5vhtDfqZ%2BIT8r0BUqwozdYZVdS6mqxU66XHDrY4y5szAWqmeOdFF%2FcosbMfB4Bt5KkCY3okPHfoTfq2GeT2l5zj94ImK8B%2FtGaZ29VqgBIuSFQ76RcOpU%2BrhKEs2iBqcaDFlCnqUE6i6Fz87j43Le%2BVgEvMtBlcOgJbMpGpnmoI7K0Vk8qBZiPA09IvcKLB0gg%2FZw3wdyWD2rZMDZrTuVEHWo0Z%2FR2tw0kwGfcFaGmTxkiP79foUCsVgvH1if18VrWg6NP3QbZ3uXCEdaMC4uMmYu%2BmFJfV1e3PvEtLmwur3T%2FkliJ8N0DOJrjEFOaq4KUlM0xZ3QDlLyRQupnq7WQHctVJBrkIgQH4ML%2BKF22X6FtOjb%2FiIHfBIEGGvUGydEVicWM4YX0w0OPcxAY6pgE%2BKc3PjzSKTOWe396fdDaazV02pHiJdWn7ijelLq2zd8sDyqDosTjVTVnd5JPKnWm7xowdmf0ALYbc2Gxu9DIqepg9yo3vChfkeHQEvVwVhovbcQdV0j8JFPhG35dTy9pQTKRMNBbdVFi22%2BI3bF2YsaBw63LhpdqdWGR01J2%2FisvoaLSQCBncTbX%2F7jvRQ6VSs142T4dM0h8eUjoYlidrgdf%2Bq9i2&X-Amz-Signature=a7309c5da74ad846935ccecd060f79654d6b3fa65d6e594bbef2d42fe503a82b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQOZT5AZ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiXyA24hWdSPJifW5CZsaL4P5iQb6NgIlgAX6k2TZ2IgIhANF3jNhoRAUcImEIb38peVQ4FQOr1RpgUwMSUOfXGkp6KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPJzzUW8NMwXD4qJ8q3AOEwVkGp%2F0JrZxCsuNNLB%2F%2FaJIIbO8xMbT9yom0RjJk5JoZoCpDUY2QsOKMUy%2BX%2BOyYe2%2FT1fNuwLyxtE2apa5fFaBI7VI0cBv5G7Y895PqnHJcZknfYpCsKuqbszJuHYWcydHNbpnOuiGz4ryj9AF6Uswtbmuc0m224%2FydppF4xvPimY0IuzkoR%2BHXUOTKOP31vIHYdSjG80P3I3yJDOYv%2Fbi%2FDz8gIygZhaCUxA9BZ%2Fe4leKXrbligxzFSt7KYjumxBcdfcIBzVYH2SS%2BXz2A1MVyK%2BoMvE9tkcuRXFTrIJh7bvcYLbKRjwsWgtObMISk4OEdqF5FXFo7F6dz2RZQybG7vf%2FLKFk9ehd3gLAbLpCEH7I9IrxUhho5ADc29U2jvL3z0DBmc5MxV8kkMJpWPtsJ2vB8QcO9KCBp44ugk1e44UetRQJKdT%2FT32SgA1uIfoj0DTsfX5CI6J1yfg90aCWZSWWbtDt7EJXYmMZtA6qR5JsVf15bX8dQQKfF8HuJw45f8UHqcOXstIJig05VVI2p4yZbHb85Xa%2B9q%2Ff%2B555Stf2udLe%2Fw%2F4MiLgzqdqYco8xao2JA0i1fRLxsNui%2FfLWx84GqEgzi5eZu2I%2Fha%2BPoHfJ7iBcqyReCTCW49zEBjqkAfkh7Nb1ShZsbck9TiFGAS8Twg7l6Jo30F5Qm3qYI4u1DX1%2FaiqBPpSGBRbFa%2FzPJX%2FvQh32RGyfwd4MDbLtelJq%2BRygQ8QxjDgywFHqOgYTriPUczMNG9DKt666xu5SB%2BIQ9eoayuN04dvKuhJNa1x%2BKy%2BOVwzhcm2D%2BkAOudlwJRttsT0v3%2BEJm4RSRfz1XdBG7qNxbjamGxXnJqXYkp7mtWjA&X-Amz-Signature=d7fd57954f93546291ee6577eb9bf453f41b27ea6d8f48b5caacd810d64bf4e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCEORKWK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmMeSF4Ctp5Z5ACUQrwz9ROtpEakN6BNbTzyB9e3UOwAiEA3rmk43jJMad4GKIa0atykl9H3KcXsXiKiTh%2Bw7J2gjMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIap76CIfcCvbGR1CrcAysL%2BaM3kgsfzm%2F3qC1pUBo6VjoIX2D3pG%2Bln1%2BWWlSTkcUO7LhNfOKodUB%2BO2Y5udUJfXGovjd0kCWpjuNZDBmmxhfCBi7Be7f3itRTHa%2Fxt7N9VM3%2F1d8uv3YgwZPYwcKw7Bfllr07AxqwP13SMThBesV84YUB92L%2B7eNfBxFxumhOkqRxV11H5zanBpqqHJH9ziC8FRnMIFwGmqbwc%2FbOch50KEMFNdNuGl2sbCv4qVJmvw2UZU3qipyZuFz0oPVHfk%2FR%2BjXvo4aad%2BWYlusgovjFsQRGN4uFQiZn6QX7OkEWY89N2eVZ37GUt5V%2FshDcNzz1H4NLlHLd%2B%2FdwukWPOxiQDRLNSfDUs63T7pY64LMYZG%2Fwx7fiLKMGynqBH9U9RuYUhArWlK%2FsnG8n5FuMSbp66uKBFWRBOpRdjrYFeRLocKbbFPKscatacQtaPNX0rt0s6DpAo4wLVf6o9WDxgQj2%2BtTbl3GtXWr%2FqqhFF6PrVGDnemRXWGRzmOKJCRSXsS9HeMcgo2zrSWTz%2BZsj4tZTACAwAXbxLxsY%2BdkZE5kU130dnGvyPLpcGH4N%2Fd5b%2FB8KpccmDeuzu1ddgPQ%2BOLwJQHUcHf4oeB6S19rrG34%2BxjWGiGGzbLU8MKvk3MQGOqUBy7icnaeA5pteGIZoJY67o9sWIuld%2Fvmqsep8SteylN0RIitt8Qm9Pu%2B3y88qQrUlZo133gf2nKy%2BQivNwj0Z%2FY5CRXZQkRlZoreLlUkNgSEgCVMVJSXZBw2CpjZwODRM2q63oJkfMIIyjl2%2B5MYzRhtv65MeoWsSkOALiC8V6gg4p5gZrHIYadAdgQH0pfqfmElN5Q1mOMrbPExqhCW3NxGuJydq&X-Amz-Signature=fd497bb88f7e8bf6baba04d5e5b3ef42952e13d3196042a5f0fc5e5b8113fb90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U63Y65E5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FVjGUpOClB6%2Bv5WOipXSNBYq1aEtY8gx%2B%2FETluFghnAiEAyT56Emw6UPbbc04X%2BepY%2Bo%2BBTaTIu0LXyDA%2BYtuzIk4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhUnmApclB0xJydiyrcA1o8EQuRPOJoDbubWfhriyevgkpHIEEHhmT4X4h1BUevckRgggKwneCyTHt2UAB5x1xiGyszXmpJhqYU7fmNGplt96ulShZC9oYFn5lAE04cP4pdtyvffFSZDam9tqvFMoVv0Cte%2BMEZEChOcapzAW6DdgyHZwvYGnQnaxL2dsHhbTQ6ztY%2Fo%2FgdWkEhv0sS%2Bm7Jzw3YK1o3TOhjRiaVvvxP1LQYp%2B5%2Ff7wM0T5FD07JpzSMm3%2FkScs9XnFqIX1QfgYZoq9rApLol9EaIlgBfQ%2F%2BBB%2FG6ZERgFGeTO5CWIh4WXgRagRq9QCrsd8nqDjk1a%2FaxZqBPWdj6YF0AbKplwaFsZlu7OMcbMeVS2KVlgYDWiIvX%2BVcRYabR%2FlLAhSsUUNti4a7tKXfebYF2oeelHpcCcZDEqmZTH7obEgtNVCRXCz2OxbV43hU4yH4AzU3pI1caYPhiKG%2FRQMdAPlMTFc1sPmdOnssA%2Br5jzgzIONXUe5GljLsDPros2f1U9HnfTFVR9gOawa77byRk2MAdxPFaNYpGdnf%2BJiVsiejnyE1ySVDDNJ%2BVDwXG4XHsCx4%2FXnuSvIFtu18EWZuhiu9ETkpZKOKPJGe7cAeqEyex2VVWIQR3nEeEuGGe8eqMN%2Fg3MQGOqUBboAkpge0zZBVVeBhsco7ntorEw92b8brgbavSmbaZYzY7OrFccyevXz9aqV7hgo9qNZ1XCrgGnDxSpUyZJSfdy4sPF2yS97OjlhGPviDBmvHAYpPQj1MdoZ1FhrobnkrTr1fkcODDWGk5%2BaQVRld766ut5JHmGYb78WcdW6z3Du5aKAfs3qym%2BSmHF31jwsIhSzO1TrkR2ZySC1jRLNY45UVGBPd&X-Amz-Signature=f85e5af5dfcc240db40783f52ba7a1723e08cd2dfdfe18c98e67fc3d45f54027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCEORKWK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmMeSF4Ctp5Z5ACUQrwz9ROtpEakN6BNbTzyB9e3UOwAiEA3rmk43jJMad4GKIa0atykl9H3KcXsXiKiTh%2Bw7J2gjMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIap76CIfcCvbGR1CrcAysL%2BaM3kgsfzm%2F3qC1pUBo6VjoIX2D3pG%2Bln1%2BWWlSTkcUO7LhNfOKodUB%2BO2Y5udUJfXGovjd0kCWpjuNZDBmmxhfCBi7Be7f3itRTHa%2Fxt7N9VM3%2F1d8uv3YgwZPYwcKw7Bfllr07AxqwP13SMThBesV84YUB92L%2B7eNfBxFxumhOkqRxV11H5zanBpqqHJH9ziC8FRnMIFwGmqbwc%2FbOch50KEMFNdNuGl2sbCv4qVJmvw2UZU3qipyZuFz0oPVHfk%2FR%2BjXvo4aad%2BWYlusgovjFsQRGN4uFQiZn6QX7OkEWY89N2eVZ37GUt5V%2FshDcNzz1H4NLlHLd%2B%2FdwukWPOxiQDRLNSfDUs63T7pY64LMYZG%2Fwx7fiLKMGynqBH9U9RuYUhArWlK%2FsnG8n5FuMSbp66uKBFWRBOpRdjrYFeRLocKbbFPKscatacQtaPNX0rt0s6DpAo4wLVf6o9WDxgQj2%2BtTbl3GtXWr%2FqqhFF6PrVGDnemRXWGRzmOKJCRSXsS9HeMcgo2zrSWTz%2BZsj4tZTACAwAXbxLxsY%2BdkZE5kU130dnGvyPLpcGH4N%2Fd5b%2FB8KpccmDeuzu1ddgPQ%2BOLwJQHUcHf4oeB6S19rrG34%2BxjWGiGGzbLU8MKvk3MQGOqUBy7icnaeA5pteGIZoJY67o9sWIuld%2Fvmqsep8SteylN0RIitt8Qm9Pu%2B3y88qQrUlZo133gf2nKy%2BQivNwj0Z%2FY5CRXZQkRlZoreLlUkNgSEgCVMVJSXZBw2CpjZwODRM2q63oJkfMIIyjl2%2B5MYzRhtv65MeoWsSkOALiC8V6gg4p5gZrHIYadAdgQH0pfqfmElN5Q1mOMrbPExqhCW3NxGuJydq&X-Amz-Signature=cc2f3d3b695c8149b2d458c01638d52f5ac9a75f5f6586c5f1b19296b8340bd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2BBMHEY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDErvU%2FpODhXn5knvXWlFcG4Bi0kg%2BVWgteBh51l6P%2BWAIhAPNXErOXdR%2BeFVKsewXkEeEbKQxuOom0jcpoI0CW%2F1i%2FKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwu0q%2BHdQPqeh6N97Aq3APzV993RQ45HDRp1ZNn8TggMp1m0ZA86kJBGUwOya7hjNudx84zwFDWcyUvfB4B14MUbi%2FO%2BOugcItTdVZJ8AWyjNJh0SDFlH64N9FREJEqHnUWoenQBmA%2FkLAyRr4ZGvKuMrJ%2FM0kwa%2BtyQF%2FKzL0PejAg0bBWchNp1HCDFcDdVSK4Pp59wrcuF1th3bGXEtT6tS0KIaCXvg0SFmUQXWC2yALJig338Gk7I9n6jFtpEF2oyF7WV1v8wz2BCsRsUt5c3HHTsP20G8JFpDYHMVh4wE4umWJwXDX0UXyU1R1vZVDBDcS%2BFgxSktFnkYuEHgDE4%2B7G89cwdb3FQWr9P0lI4dT0KWBQw%2BFXYr7AFRa8H7J9dtJmc%2FkEit8iq6v14JMgmQI3ZxQ9uXvlyJE%2FMr8JXX5zd3pF4ET%2FUkkc49YY3W69TG9kFID7RHNE2cIZDyNllDyDCpm0TSnVAZGt3Dfbx5PZVe6aXqTwJ7IbMXDNz6IN7DsjxRvIFYRxve4blLh1X5h4DKMKqhB0zUV%2FdvZIFeTW0Ro5rG6U1KaGJ6I4MPiVDuV1hbIOEo%2B%2BJarNeWA8v4gX90c9G8MTQcIuikHIbHFBe%2B8XCjYBIGuncY9guDFDQ06vVKkl0N8nDTCV4NzEBjqkAbKdNaMFe6%2FRh8c2ntvqoZUJ8rL9sCzIKQ%2B1HWdJEi0JHEucF9rXMCQOpsjeYDDxxNZjWckSuDHRkO3lAecz7Gu%2FrSpSMSCW4oRKQbjexo0NVcw9aDZXP%2BH9QohCTRCXygBsg7wXAz6t8al9GyivHf%2BAGFLbl793AkGf6xX8mX%2FVJKbi3MfcDvt31cTBR8nr43W2Ipgqw5NxId51HGP2y%2FaIGqgv&X-Amz-Signature=86f162d8535ccb767958d1c78ab7adf2a296b40a6365bd16ff3853aaacf2e56d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCEORKWK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmMeSF4Ctp5Z5ACUQrwz9ROtpEakN6BNbTzyB9e3UOwAiEA3rmk43jJMad4GKIa0atykl9H3KcXsXiKiTh%2Bw7J2gjMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIap76CIfcCvbGR1CrcAysL%2BaM3kgsfzm%2F3qC1pUBo6VjoIX2D3pG%2Bln1%2BWWlSTkcUO7LhNfOKodUB%2BO2Y5udUJfXGovjd0kCWpjuNZDBmmxhfCBi7Be7f3itRTHa%2Fxt7N9VM3%2F1d8uv3YgwZPYwcKw7Bfllr07AxqwP13SMThBesV84YUB92L%2B7eNfBxFxumhOkqRxV11H5zanBpqqHJH9ziC8FRnMIFwGmqbwc%2FbOch50KEMFNdNuGl2sbCv4qVJmvw2UZU3qipyZuFz0oPVHfk%2FR%2BjXvo4aad%2BWYlusgovjFsQRGN4uFQiZn6QX7OkEWY89N2eVZ37GUt5V%2FshDcNzz1H4NLlHLd%2B%2FdwukWPOxiQDRLNSfDUs63T7pY64LMYZG%2Fwx7fiLKMGynqBH9U9RuYUhArWlK%2FsnG8n5FuMSbp66uKBFWRBOpRdjrYFeRLocKbbFPKscatacQtaPNX0rt0s6DpAo4wLVf6o9WDxgQj2%2BtTbl3GtXWr%2FqqhFF6PrVGDnemRXWGRzmOKJCRSXsS9HeMcgo2zrSWTz%2BZsj4tZTACAwAXbxLxsY%2BdkZE5kU130dnGvyPLpcGH4N%2Fd5b%2FB8KpccmDeuzu1ddgPQ%2BOLwJQHUcHf4oeB6S19rrG34%2BxjWGiGGzbLU8MKvk3MQGOqUBy7icnaeA5pteGIZoJY67o9sWIuld%2Fvmqsep8SteylN0RIitt8Qm9Pu%2B3y88qQrUlZo133gf2nKy%2BQivNwj0Z%2FY5CRXZQkRlZoreLlUkNgSEgCVMVJSXZBw2CpjZwODRM2q63oJkfMIIyjl2%2B5MYzRhtv65MeoWsSkOALiC8V6gg4p5gZrHIYadAdgQH0pfqfmElN5Q1mOMrbPExqhCW3NxGuJydq&X-Amz-Signature=c7ced5fc6f01735b31d99658e5bf5b4f0543548b334402346144a331972592f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEOM6M7F%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BVqq901Mj%2BAZTOSQk6YX5%2FHk4NmlAuh2WbOYvuUFdtAiASXBzWvuytWNr6Y7Iph9MD3TtO%2Fi9ECadVAIRzQqlcoCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWENHE3OUrv%2BdamGlKtwDI%2FwnWADPUVVXE0WjkJg3t68a6iekSNOFazi5zUU7NLiXVCBEcxzqyh1DBTthYAxOepX7Ghik1uV0OF%2BzDEWqcRizPNAGWz4vxLiEQg7SDBLDBHkUuDCK4N7cn2F0LdAelSucQGGzwL7AZ3wgAEQuoPIzSA9Uu9pY8LSaZq3zNIaxUCbpEy1sWR9EiaJnc6AAvyRv6b0iGdDiPRMoWB9Rrab%2BuQLaq0LN7qg38k831qh5%2FlRwqKVig%2FDbDYMPiDQUIRiGTcUJryS3cEvb390ax1f9t7%2FJthSdgzuLZJgORm1rJaIXIb%2FQtTcQhCdNXuLCTv%2FBK0UvUeE6fGKuM9GqRiUqKUls9YU2mOrzTHdyqOcvrDyaTQYlVGXB1SLgIEhNgqX3cUjzm1H3LBdR7mgZob1KDtZudzwWhjUY8dZa66UaACfSV65RAXAVRW6coq1MlIOpUREGcWg3yvhsgSg2RVI5ombEEXVz1WWDSf1yYuR7JfU2bfxXlWfMJJSMArTHsk4%2FsxMveB4gAFapGj10LB3C3%2FjtSQmpJw%2FXKShshYjbU1CBXxq5Dq6GYs%2FnaWvaozFblAaEsCd6wZC7b%2FpdioTCmt2zxlBCW8MT4BdFN9VivJ1KcP6%2ForsdfWQwpuncxAY6pgFwzIttoUsJ9l%2FqY2p3rTGUYQMxGJJc1Jok84ODiFVdyb%2Bvw7X%2BcOT77Bqjzl%2FqhMfcLbv2p4SRMrRhXuVU7B7MtNTYAPUvQinBFo14MF%2BhnNtYTNfYqhclC2XYmqmvZJI%2BL3jo2eFVAI2oFD%2Fy3L8W3p9Y3s3IAzqi7CwUjn43jwu0pxBkMGKnsDHJOB54%2BJJg%2BqbaDxdl57ToQKeXucg%2B0xGG%2BS1I&X-Amz-Signature=6ab8c9227346c929236f7b93825b51bd1a201a1cedd99a66e7925a9d09085071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCEORKWK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmMeSF4Ctp5Z5ACUQrwz9ROtpEakN6BNbTzyB9e3UOwAiEA3rmk43jJMad4GKIa0atykl9H3KcXsXiKiTh%2Bw7J2gjMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIap76CIfcCvbGR1CrcAysL%2BaM3kgsfzm%2F3qC1pUBo6VjoIX2D3pG%2Bln1%2BWWlSTkcUO7LhNfOKodUB%2BO2Y5udUJfXGovjd0kCWpjuNZDBmmxhfCBi7Be7f3itRTHa%2Fxt7N9VM3%2F1d8uv3YgwZPYwcKw7Bfllr07AxqwP13SMThBesV84YUB92L%2B7eNfBxFxumhOkqRxV11H5zanBpqqHJH9ziC8FRnMIFwGmqbwc%2FbOch50KEMFNdNuGl2sbCv4qVJmvw2UZU3qipyZuFz0oPVHfk%2FR%2BjXvo4aad%2BWYlusgovjFsQRGN4uFQiZn6QX7OkEWY89N2eVZ37GUt5V%2FshDcNzz1H4NLlHLd%2B%2FdwukWPOxiQDRLNSfDUs63T7pY64LMYZG%2Fwx7fiLKMGynqBH9U9RuYUhArWlK%2FsnG8n5FuMSbp66uKBFWRBOpRdjrYFeRLocKbbFPKscatacQtaPNX0rt0s6DpAo4wLVf6o9WDxgQj2%2BtTbl3GtXWr%2FqqhFF6PrVGDnemRXWGRzmOKJCRSXsS9HeMcgo2zrSWTz%2BZsj4tZTACAwAXbxLxsY%2BdkZE5kU130dnGvyPLpcGH4N%2Fd5b%2FB8KpccmDeuzu1ddgPQ%2BOLwJQHUcHf4oeB6S19rrG34%2BxjWGiGGzbLU8MKvk3MQGOqUBy7icnaeA5pteGIZoJY67o9sWIuld%2Fvmqsep8SteylN0RIitt8Qm9Pu%2B3y88qQrUlZo133gf2nKy%2BQivNwj0Z%2FY5CRXZQkRlZoreLlUkNgSEgCVMVJSXZBw2CpjZwODRM2q63oJkfMIIyjl2%2B5MYzRhtv65MeoWsSkOALiC8V6gg4p5gZrHIYadAdgQH0pfqfmElN5Q1mOMrbPExqhCW3NxGuJydq&X-Amz-Signature=17f7229147b1f370ca8a1eb6d01bf58e457da41eeb80c752e5f0d0cf82fdc2e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNXHC3PS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkUc895NOpdbUfyPngdNLiIBe%2B%2FapIXsxbOCan4m8c8wIgPecLxVh2nQFsiJSs2zfdLVyB7NFxVkmcIBzf6y0S6rMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKscV07sCtDmGWsOmyrcAyvgVvJ%2BmN19E3jprKHp%2F5cJ8lhKB28MRmMOzNSGuWidpDzSnOS7fGcUwlC0gPKsQiBj3PRBThjH09mQiPxqU81W7B4pYgfOIEC3PHsg4WYjRnH%2BLeQixh0W8zs5eSP5yY6Ap6FlzJBAy5h5BWEpOanvtWWKK58Hx548E3tSlTKFOr0pp7%2BSAKVQjk3GhzeVI%2BardX4VlhBABMqKqznT6FQ%2FrWanzIDqUKygrPA1NWWxeM7SA%2FXojRIQlJiOyJ7rAvCvmMMXTcLRzWHEPbzB4kg%2FlOfOSpCLiVAeSBXAV9JAWaw%2BquP3iZAYb6UjdVlUnYUFOqiAr1tQZ96Ze%2FwuujdkCd8FXfblVgkmFvG7GxYtRnUEvTT%2FELO5shKARAgqyvnvJZTrrQGnnTNJea8g8zcMJEZOnBDSWaYaDqMpThqS7A%2FD6e%2BCImRapIS0fyp6dFoWjPrnSQA739eNg6r9fkTJQDU4wr9jaYmXADj3P%2BBWG8yKqTNJqZZlPZCbQ8sihF9QFM1dHWRpIZ6DhIkwCahDCU5dmeJbfQ0fos03nbeou5wbKptwA8U%2FBT9zyBFg8H%2Fm565HT20lybWfuAAL6xYZu%2B60BZf2OPeEwkxk%2FFRU1z9RwdprAStYRV9JMNfl3MQGOqUBax%2FCIIdwT9loXau2Y8qvbgn8CaFzlupa392mpym1To1KeS3uIQ1MR3VFwKf6epV098B%2BR1ZdJaQklAsFtkhAN4mpRAC45LAYJPkc%2FmVdielDAgMqn2C5rGJKjDVjvx1rHQXLV7ffz%2FuLKie48rj5qPj08nrW59cZKn727qRBmajEQdGp53jnDn6niSqDXeNt%2Buxoydxa7Nlb7V9bhJjv%2BtKPdCeG&X-Amz-Signature=cc1bfa10fcfd32bdf3d720342a8753839dd679cf5c1b53062f664cb74d75bd9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYZQRGWI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA64xxerfRfIiPUuCr0M%2FgktJwxPk2TjXGSnPvWINc2dAiAj0Uj6rzcgZXpHX%2FaO0woYRgHZGa%2Bc1oDFais8MpMRlyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHchrrSwOe2DR08AwKtwDJL%2Bg7YIVTLpdm7JNVXb6edpDooTEBrWHYQNW8Edci2vGWiJne%2Bje5DcitfYps425LTpQHtKcPLh1dCkk43apujmbWN5MZ3G9hTE4tu3ZVn9yfoWiKkqILiHwZl5s1G6XwdCGWiSv%2F9ibKtepEOZYM5i6o0mEU1FpRrf5GB31pn3DNHfPablZh%2F2JhOoV%2FmXkXC%2FZ3OSoAyFWcvCqqBeqzZ6JKHliWl3uVhi7TCC4AxzAf%2FCN1Z%2Fh5A6SNdnT3gvqOqg4oYnZCfs%2BcShV68VC5Sw9YXkSAhFJYh87FGshisMvII%2FcxCo2gQusEWpQXkqOYJIZrG5thBqlyh691dME2dQCbkzjnmc07jwemBD02waOS1IQIxTYgy9aQBdIVzUbJBs40gFv4krnRtZ%2F8N97G7ELcZhgYB%2B1bYMUgZhbrhVHQKGrQVvMQHvFrhFXt9h3me7JAx8HK71Cl0vb1QvYmTp3ff9MQDbSYvbAQYgjuzagVBPnOI9IjMqxf2WaNU9tEXxbPCmPxJYnULJHpeus8BeXyjWG9VdCmDWM3Gx7msrmJRDImGvjA3o9BuaZmeqr36FBXjrVUTHcvkP1e9Yi2q8yDFPXGlgS1qRjxi%2Bx%2BBpgnJCsKqk2AP%2FcE38wyOXcxAY6pgExtopBoZ5UTZi6c4KrUVoBjUIfyKkUQr5G%2FRCkgM9EfRXv%2BvIb9ASwULgG16F3a4aZi5TxqY8spRJ8L3d9hu70jDArEmU%2BPTIZzzYcrMTsMGPy4W7sFtQO5UM5w0tDwlwWgv2X92YSfVThzzWpWbVQ49DmLXmtyie8zb0TeEj9r3UZtNap19d8pJ9ViZWGiAgrf4Jd6ArcRscIneB1NVtVjaORu5UO&X-Amz-Signature=bdf142cfe2f7050a45df0c6f5c76194e1b138a8c996aad4a0f2db11dffc05a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNXHC3PS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkUc895NOpdbUfyPngdNLiIBe%2B%2FapIXsxbOCan4m8c8wIgPecLxVh2nQFsiJSs2zfdLVyB7NFxVkmcIBzf6y0S6rMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKscV07sCtDmGWsOmyrcAyvgVvJ%2BmN19E3jprKHp%2F5cJ8lhKB28MRmMOzNSGuWidpDzSnOS7fGcUwlC0gPKsQiBj3PRBThjH09mQiPxqU81W7B4pYgfOIEC3PHsg4WYjRnH%2BLeQixh0W8zs5eSP5yY6Ap6FlzJBAy5h5BWEpOanvtWWKK58Hx548E3tSlTKFOr0pp7%2BSAKVQjk3GhzeVI%2BardX4VlhBABMqKqznT6FQ%2FrWanzIDqUKygrPA1NWWxeM7SA%2FXojRIQlJiOyJ7rAvCvmMMXTcLRzWHEPbzB4kg%2FlOfOSpCLiVAeSBXAV9JAWaw%2BquP3iZAYb6UjdVlUnYUFOqiAr1tQZ96Ze%2FwuujdkCd8FXfblVgkmFvG7GxYtRnUEvTT%2FELO5shKARAgqyvnvJZTrrQGnnTNJea8g8zcMJEZOnBDSWaYaDqMpThqS7A%2FD6e%2BCImRapIS0fyp6dFoWjPrnSQA739eNg6r9fkTJQDU4wr9jaYmXADj3P%2BBWG8yKqTNJqZZlPZCbQ8sihF9QFM1dHWRpIZ6DhIkwCahDCU5dmeJbfQ0fos03nbeou5wbKptwA8U%2FBT9zyBFg8H%2Fm565HT20lybWfuAAL6xYZu%2B60BZf2OPeEwkxk%2FFRU1z9RwdprAStYRV9JMNfl3MQGOqUBax%2FCIIdwT9loXau2Y8qvbgn8CaFzlupa392mpym1To1KeS3uIQ1MR3VFwKf6epV098B%2BR1ZdJaQklAsFtkhAN4mpRAC45LAYJPkc%2FmVdielDAgMqn2C5rGJKjDVjvx1rHQXLV7ffz%2FuLKie48rj5qPj08nrW59cZKn727qRBmajEQdGp53jnDn6niSqDXeNt%2Buxoydxa7Nlb7V9bhJjv%2BtKPdCeG&X-Amz-Signature=e097d48ac17c980fb9096308512f87dc50dad1cd024c44a0b4ceec8669913807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVNMU7XG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQuYPqruQ3qQXnXNLKBGHbuTFc5pZwCw8dd3L%2Fbehw4AIgGhhS92%2BxhCiT1stun25%2FUIKIBcEP0g14R0qE9h0kIQgqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJAoBtcIw7BD6%2FTTeyrcA6k%2BlN%2BT%2FFqZLLDmuUGAhss%2FcYL6bvZ1rlzY0PXa%2BMSHiJqSVrMJcLFmjfV0%2FyQ%2FcxxkJck3MY%2BmuHAdZWRxsmqh76Ssh944q38%2FPANEFdEbq9bHSdrGeteoUMrL%2BJXQXMvopqTPEq9XWjCInLEV8DGC0AcmT15dExuXWyNXue4xE2LPUtKS%2BpP9r82dXqnTBVL0m04EXxsbFIBxBAA4I%2F714nAc6Mci%2Fu3eCd%2BAGfZzSwHRPLUTcs%2F%2BLjg5FGYz11n1byD3%2FBFToFoR6hJ7Uzc%2F0cVZVyBCzcXea6%2FduSsfMmEUPNyxVF50%2FDn8nBrTv61AJQoqdLCmpgy7ko%2B0NKPTrHwHhVP5SOOk%2FL2h0Qrz%2BydpObgff3u0onkkw%2BxnoV0SD%2B6EZkLmVLun6tdMZMNkPjZ0otChKkaKK%2Fg8um0TKNLtN352bfR0dLcPNMHncGgD7Es4UQx2FzP%2FKXVMAvgCi%2FMkJgG2f8UGwPQIAFzKd7%2F%2B3XW3fBbdvMCXHFm%2FHv5%2FsDHkl2CTtlI5XcLdz%2F0xnzK4vkVfB0z6%2F8%2F4RDMLezFKNRW6rtdO9LsVVhYW1p1A4c9%2B33SUIMzp7pyy7wovN1PY4tUJ3l7HbUGh%2F6J8BPbv3zJ7o1ydWiIqMILk3MQGOqUBfj2bxkEZWsz4abHTM%2FZeVQWzW2TkxxwuJ4YiKf3BPiW9n3lz4AuQU%2FoChSMxHdXM45EDcG58FVJVHlqEPtWQwFsoNao0hZ6CnMuCN0IWuM321jI1d4FoVhwcrOvdNOTYWQlY1kol2ntyqCwKfXuwqouX3J2A%2BJLrPlWmJBM6hCHL2Cq6St1zXQgj17260yQMIy%2BbboKktLQFZvuM%2FPZ6tgqLFBuV&X-Amz-Signature=fda0a237e2374433ff239a82ffde17571d156d7125ffd2aabd66b32c773225c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BPZBYMI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWt8Q3RE9WoWLgv86QRG6ucdemTkUb05i6bb3Vq5qLkAiEA1%2BlUlpd48IvCTZ0%2FDYokKUKzpxb9yXQ2k9hpJyvgdqYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjE0XWADUHWehla5ircA6c1asXXlcgfBstA%2BmWhd%2B%2B0oPM%2BMOY%2FRauy2D0dQbJVlpsKrusgv6%2Fz9kSLNOfilDTztCs%2FjH4uk%2Bj7VrE6DzfmcUOrdJCeINQSLbiM7rYgFPMfv%2FJhJNgHSUWwWvFo7jnDRd917XC8ZolQKM5PiTtV6nv7zHO7tUbWxcjTi0sz95gs634qAeDDoiu8sjsb3FV2ooy0XQk5bDnr4LvhF%2B2qSOfC1tp1vRd6VQqtk83sBh9Gtq%2FkZ7xbhCnEZyqaaSamFLp3xt0tbYo9R2dkISGmuS%2FRykMGQVcVO%2FPIhpy1%2BfMffkjAzrwbVmVWdrldMih0HXAxH2vm1jx92hTZoIOHGaPbDjDfZNUuaTdGhHndFiD6T9%2Bkp6eRWzHZBhRUtEQp05hVKfuCMBmvvXs0Qw5SLc7MpxQcriYUe33Zh7QyHqzDsuL8ilxcHmRGCM8VBctxKeEPndR2tOQFdzL7mTpwDe1NBcxnXsRTkT1ZAIoMIwBcBNTsQNjvY46KSDoeqHAfgUY2J4F%2BuCEM8tQ81ugx5ByV%2FhF1XB%2BWXtMOifAvK%2BKEqCyS2XrOhcnmQL6nkDGBtNQPCpPj5bkBp8qT3Y%2BpsDPdyra5JTMPWcyyIEOThqwAa6LAEsQssbKeMJbj3MQGOqUBsqGdAGTWvrQfx8i8tARNuWT4Oj5VD96F2HLU4mHq3TBFLIeFXzJRjPKPHdknC6jRJwnO2cdXIEjklxX%2BgaIYuEHZ8P8EXjDrUdMrl6yvI04IcajEOUMM0h%2B55u5Q8MLPk0uLqru6gcDN6hkBZKCQFvlFNFyY5Ch7yanieuwHbZN7p37ivluVWnIDAMQKgWiOmxiARChkZv2BiXNOiDoJSX%2FqQDQb&X-Amz-Signature=aaa3e6bc67f071cd4ac7eda87c771fb92cc5b401dcfcc8cd2b18c7d9912d0f97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCEORKWK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmMeSF4Ctp5Z5ACUQrwz9ROtpEakN6BNbTzyB9e3UOwAiEA3rmk43jJMad4GKIa0atykl9H3KcXsXiKiTh%2Bw7J2gjMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIap76CIfcCvbGR1CrcAysL%2BaM3kgsfzm%2F3qC1pUBo6VjoIX2D3pG%2Bln1%2BWWlSTkcUO7LhNfOKodUB%2BO2Y5udUJfXGovjd0kCWpjuNZDBmmxhfCBi7Be7f3itRTHa%2Fxt7N9VM3%2F1d8uv3YgwZPYwcKw7Bfllr07AxqwP13SMThBesV84YUB92L%2B7eNfBxFxumhOkqRxV11H5zanBpqqHJH9ziC8FRnMIFwGmqbwc%2FbOch50KEMFNdNuGl2sbCv4qVJmvw2UZU3qipyZuFz0oPVHfk%2FR%2BjXvo4aad%2BWYlusgovjFsQRGN4uFQiZn6QX7OkEWY89N2eVZ37GUt5V%2FshDcNzz1H4NLlHLd%2B%2FdwukWPOxiQDRLNSfDUs63T7pY64LMYZG%2Fwx7fiLKMGynqBH9U9RuYUhArWlK%2FsnG8n5FuMSbp66uKBFWRBOpRdjrYFeRLocKbbFPKscatacQtaPNX0rt0s6DpAo4wLVf6o9WDxgQj2%2BtTbl3GtXWr%2FqqhFF6PrVGDnemRXWGRzmOKJCRSXsS9HeMcgo2zrSWTz%2BZsj4tZTACAwAXbxLxsY%2BdkZE5kU130dnGvyPLpcGH4N%2Fd5b%2FB8KpccmDeuzu1ddgPQ%2BOLwJQHUcHf4oeB6S19rrG34%2BxjWGiGGzbLU8MKvk3MQGOqUBy7icnaeA5pteGIZoJY67o9sWIuld%2Fvmqsep8SteylN0RIitt8Qm9Pu%2B3y88qQrUlZo133gf2nKy%2BQivNwj0Z%2FY5CRXZQkRlZoreLlUkNgSEgCVMVJSXZBw2CpjZwODRM2q63oJkfMIIyjl2%2B5MYzRhtv65MeoWsSkOALiC8V6gg4p5gZrHIYadAdgQH0pfqfmElN5Q1mOMrbPExqhCW3NxGuJydq&X-Amz-Signature=1fe8c4712f91cc67a1c8a332b0798ce04948625655ccd9d5eee6b87460f4bf57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCEORKWK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmMeSF4Ctp5Z5ACUQrwz9ROtpEakN6BNbTzyB9e3UOwAiEA3rmk43jJMad4GKIa0atykl9H3KcXsXiKiTh%2Bw7J2gjMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIap76CIfcCvbGR1CrcAysL%2BaM3kgsfzm%2F3qC1pUBo6VjoIX2D3pG%2Bln1%2BWWlSTkcUO7LhNfOKodUB%2BO2Y5udUJfXGovjd0kCWpjuNZDBmmxhfCBi7Be7f3itRTHa%2Fxt7N9VM3%2F1d8uv3YgwZPYwcKw7Bfllr07AxqwP13SMThBesV84YUB92L%2B7eNfBxFxumhOkqRxV11H5zanBpqqHJH9ziC8FRnMIFwGmqbwc%2FbOch50KEMFNdNuGl2sbCv4qVJmvw2UZU3qipyZuFz0oPVHfk%2FR%2BjXvo4aad%2BWYlusgovjFsQRGN4uFQiZn6QX7OkEWY89N2eVZ37GUt5V%2FshDcNzz1H4NLlHLd%2B%2FdwukWPOxiQDRLNSfDUs63T7pY64LMYZG%2Fwx7fiLKMGynqBH9U9RuYUhArWlK%2FsnG8n5FuMSbp66uKBFWRBOpRdjrYFeRLocKbbFPKscatacQtaPNX0rt0s6DpAo4wLVf6o9WDxgQj2%2BtTbl3GtXWr%2FqqhFF6PrVGDnemRXWGRzmOKJCRSXsS9HeMcgo2zrSWTz%2BZsj4tZTACAwAXbxLxsY%2BdkZE5kU130dnGvyPLpcGH4N%2Fd5b%2FB8KpccmDeuzu1ddgPQ%2BOLwJQHUcHf4oeB6S19rrG34%2BxjWGiGGzbLU8MKvk3MQGOqUBy7icnaeA5pteGIZoJY67o9sWIuld%2Fvmqsep8SteylN0RIitt8Qm9Pu%2B3y88qQrUlZo133gf2nKy%2BQivNwj0Z%2FY5CRXZQkRlZoreLlUkNgSEgCVMVJSXZBw2CpjZwODRM2q63oJkfMIIyjl2%2B5MYzRhtv65MeoWsSkOALiC8V6gg4p5gZrHIYadAdgQH0pfqfmElN5Q1mOMrbPExqhCW3NxGuJydq&X-Amz-Signature=93dfb193ec9ed062be946f046d573a5e1504dbb9a66a807fcf408b55ad7614b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJRFYAII%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh2i4sZaJaYwd6RcZb%2BF77uPOhYNqIUvZWEmJtwPamVAIhAMt0Z79%2BsBqzVaSVOT2EAJa4g1TTkdOFWlc7EdsYpNUVKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3IHwQhQIpcTse5Y4q3AORLuyNPtxI0%2FWs1vngNYgX9jnWvOaVaQJLq%2BbnxidDKji9%2F638VSQgNW2eGsJHVq6fdZPieaF2hDS0UXj6H0un6oDUUFrObMBfqGJx110EPjt23jFuob0l4%2FwIHQkWkV2cyNABUY8tpRwJ0PxqACI802o%2BxKboxDW%2BsyReQElGQG2R4A9FtG4wrN7%2BUgl2l4Gj65GUYzAfVdV6Pon7AD2NbrCmNV%2BDsuc%2BJOUOpGk03sslFtPLJd4anFNuDq3G67LQgm16Mh6ZZgldoxk4UqrSjnAl9TikbuJqu9c%2FwLeU%2FUa3sV2s9ta93qQDF1SlngJ1DoVqJHDxXyGsPFjlUdDpz%2FM0rhnynbvBQxp8GLJrcf2cmGviIpzi6QpidXIM6J2hXndQO%2FdgrCvJnQfAUReWfV5cHEoGIe6v2pxspgX2Kv8Hk%2Fei6%2Fce2HeLqO2AQoKSJq94wQbXBMn1dDHJmwsFAWYgxJ3DGkYtbvz7tmpzudFghQFnVEG%2FHYqR3H1Oxl%2Bq1oFxGwV1UcZITayiktrfA96kekU1qsAz%2FU5Af9Tl7Bejy5SBexHM8TCbJ672kXJIuKMwfTne%2BICJqJgBSB26cPifsk125KILT46nzAoP8Nk2MhdCuqL7tk3zvTDX5dzEBjqkAVAJmnZBlk%2BCJh1UCNMAVQSGFkSVNPXmuPplQEn7UJIF6kRF7BtWhqxk%2BBL1bXERwGOgP0SljLiQdZqy0RfvphN4AjS2AKjufcY95OJM0xnnSLBasOYT5RNVMe6VTEMeqr1coAydj%2FAfqUx8fuyqErgAeV02JQZWmRWO7gSiU3a9IeKL9H%2B8EtFS7dK1zV5IyMajRhXAosKtZnycPSHQnaR0vosC&X-Amz-Signature=396f70a46e2df645564636d7dc19daf24c7e2913a987d6e215332d3deb7b06d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJRFYAII%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh2i4sZaJaYwd6RcZb%2BF77uPOhYNqIUvZWEmJtwPamVAIhAMt0Z79%2BsBqzVaSVOT2EAJa4g1TTkdOFWlc7EdsYpNUVKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3IHwQhQIpcTse5Y4q3AORLuyNPtxI0%2FWs1vngNYgX9jnWvOaVaQJLq%2BbnxidDKji9%2F638VSQgNW2eGsJHVq6fdZPieaF2hDS0UXj6H0un6oDUUFrObMBfqGJx110EPjt23jFuob0l4%2FwIHQkWkV2cyNABUY8tpRwJ0PxqACI802o%2BxKboxDW%2BsyReQElGQG2R4A9FtG4wrN7%2BUgl2l4Gj65GUYzAfVdV6Pon7AD2NbrCmNV%2BDsuc%2BJOUOpGk03sslFtPLJd4anFNuDq3G67LQgm16Mh6ZZgldoxk4UqrSjnAl9TikbuJqu9c%2FwLeU%2FUa3sV2s9ta93qQDF1SlngJ1DoVqJHDxXyGsPFjlUdDpz%2FM0rhnynbvBQxp8GLJrcf2cmGviIpzi6QpidXIM6J2hXndQO%2FdgrCvJnQfAUReWfV5cHEoGIe6v2pxspgX2Kv8Hk%2Fei6%2Fce2HeLqO2AQoKSJq94wQbXBMn1dDHJmwsFAWYgxJ3DGkYtbvz7tmpzudFghQFnVEG%2FHYqR3H1Oxl%2Bq1oFxGwV1UcZITayiktrfA96kekU1qsAz%2FU5Af9Tl7Bejy5SBexHM8TCbJ672kXJIuKMwfTne%2BICJqJgBSB26cPifsk125KILT46nzAoP8Nk2MhdCuqL7tk3zvTDX5dzEBjqkAVAJmnZBlk%2BCJh1UCNMAVQSGFkSVNPXmuPplQEn7UJIF6kRF7BtWhqxk%2BBL1bXERwGOgP0SljLiQdZqy0RfvphN4AjS2AKjufcY95OJM0xnnSLBasOYT5RNVMe6VTEMeqr1coAydj%2FAfqUx8fuyqErgAeV02JQZWmRWO7gSiU3a9IeKL9H%2B8EtFS7dK1zV5IyMajRhXAosKtZnycPSHQnaR0vosC&X-Amz-Signature=c9228997ac89a0b0b1059c820cbe3fdf63faa134b3a9dda87dce4641e07a32a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJRFYAII%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh2i4sZaJaYwd6RcZb%2BF77uPOhYNqIUvZWEmJtwPamVAIhAMt0Z79%2BsBqzVaSVOT2EAJa4g1TTkdOFWlc7EdsYpNUVKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3IHwQhQIpcTse5Y4q3AORLuyNPtxI0%2FWs1vngNYgX9jnWvOaVaQJLq%2BbnxidDKji9%2F638VSQgNW2eGsJHVq6fdZPieaF2hDS0UXj6H0un6oDUUFrObMBfqGJx110EPjt23jFuob0l4%2FwIHQkWkV2cyNABUY8tpRwJ0PxqACI802o%2BxKboxDW%2BsyReQElGQG2R4A9FtG4wrN7%2BUgl2l4Gj65GUYzAfVdV6Pon7AD2NbrCmNV%2BDsuc%2BJOUOpGk03sslFtPLJd4anFNuDq3G67LQgm16Mh6ZZgldoxk4UqrSjnAl9TikbuJqu9c%2FwLeU%2FUa3sV2s9ta93qQDF1SlngJ1DoVqJHDxXyGsPFjlUdDpz%2FM0rhnynbvBQxp8GLJrcf2cmGviIpzi6QpidXIM6J2hXndQO%2FdgrCvJnQfAUReWfV5cHEoGIe6v2pxspgX2Kv8Hk%2Fei6%2Fce2HeLqO2AQoKSJq94wQbXBMn1dDHJmwsFAWYgxJ3DGkYtbvz7tmpzudFghQFnVEG%2FHYqR3H1Oxl%2Bq1oFxGwV1UcZITayiktrfA96kekU1qsAz%2FU5Af9Tl7Bejy5SBexHM8TCbJ672kXJIuKMwfTne%2BICJqJgBSB26cPifsk125KILT46nzAoP8Nk2MhdCuqL7tk3zvTDX5dzEBjqkAVAJmnZBlk%2BCJh1UCNMAVQSGFkSVNPXmuPplQEn7UJIF6kRF7BtWhqxk%2BBL1bXERwGOgP0SljLiQdZqy0RfvphN4AjS2AKjufcY95OJM0xnnSLBasOYT5RNVMe6VTEMeqr1coAydj%2FAfqUx8fuyqErgAeV02JQZWmRWO7gSiU3a9IeKL9H%2B8EtFS7dK1zV5IyMajRhXAosKtZnycPSHQnaR0vosC&X-Amz-Signature=23a90fe2145772b348c18cb198cfa710687b13d749018e0a137b2b9cca41b2f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJRFYAII%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh2i4sZaJaYwd6RcZb%2BF77uPOhYNqIUvZWEmJtwPamVAIhAMt0Z79%2BsBqzVaSVOT2EAJa4g1TTkdOFWlc7EdsYpNUVKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3IHwQhQIpcTse5Y4q3AORLuyNPtxI0%2FWs1vngNYgX9jnWvOaVaQJLq%2BbnxidDKji9%2F638VSQgNW2eGsJHVq6fdZPieaF2hDS0UXj6H0un6oDUUFrObMBfqGJx110EPjt23jFuob0l4%2FwIHQkWkV2cyNABUY8tpRwJ0PxqACI802o%2BxKboxDW%2BsyReQElGQG2R4A9FtG4wrN7%2BUgl2l4Gj65GUYzAfVdV6Pon7AD2NbrCmNV%2BDsuc%2BJOUOpGk03sslFtPLJd4anFNuDq3G67LQgm16Mh6ZZgldoxk4UqrSjnAl9TikbuJqu9c%2FwLeU%2FUa3sV2s9ta93qQDF1SlngJ1DoVqJHDxXyGsPFjlUdDpz%2FM0rhnynbvBQxp8GLJrcf2cmGviIpzi6QpidXIM6J2hXndQO%2FdgrCvJnQfAUReWfV5cHEoGIe6v2pxspgX2Kv8Hk%2Fei6%2Fce2HeLqO2AQoKSJq94wQbXBMn1dDHJmwsFAWYgxJ3DGkYtbvz7tmpzudFghQFnVEG%2FHYqR3H1Oxl%2Bq1oFxGwV1UcZITayiktrfA96kekU1qsAz%2FU5Af9Tl7Bejy5SBexHM8TCbJ672kXJIuKMwfTne%2BICJqJgBSB26cPifsk125KILT46nzAoP8Nk2MhdCuqL7tk3zvTDX5dzEBjqkAVAJmnZBlk%2BCJh1UCNMAVQSGFkSVNPXmuPplQEn7UJIF6kRF7BtWhqxk%2BBL1bXERwGOgP0SljLiQdZqy0RfvphN4AjS2AKjufcY95OJM0xnnSLBasOYT5RNVMe6VTEMeqr1coAydj%2FAfqUx8fuyqErgAeV02JQZWmRWO7gSiU3a9IeKL9H%2B8EtFS7dK1zV5IyMajRhXAosKtZnycPSHQnaR0vosC&X-Amz-Signature=ec066b334c4f85ca956a073d709f999bb641322b385de0b4f40079de45a0682f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJRFYAII%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh2i4sZaJaYwd6RcZb%2BF77uPOhYNqIUvZWEmJtwPamVAIhAMt0Z79%2BsBqzVaSVOT2EAJa4g1TTkdOFWlc7EdsYpNUVKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3IHwQhQIpcTse5Y4q3AORLuyNPtxI0%2FWs1vngNYgX9jnWvOaVaQJLq%2BbnxidDKji9%2F638VSQgNW2eGsJHVq6fdZPieaF2hDS0UXj6H0un6oDUUFrObMBfqGJx110EPjt23jFuob0l4%2FwIHQkWkV2cyNABUY8tpRwJ0PxqACI802o%2BxKboxDW%2BsyReQElGQG2R4A9FtG4wrN7%2BUgl2l4Gj65GUYzAfVdV6Pon7AD2NbrCmNV%2BDsuc%2BJOUOpGk03sslFtPLJd4anFNuDq3G67LQgm16Mh6ZZgldoxk4UqrSjnAl9TikbuJqu9c%2FwLeU%2FUa3sV2s9ta93qQDF1SlngJ1DoVqJHDxXyGsPFjlUdDpz%2FM0rhnynbvBQxp8GLJrcf2cmGviIpzi6QpidXIM6J2hXndQO%2FdgrCvJnQfAUReWfV5cHEoGIe6v2pxspgX2Kv8Hk%2Fei6%2Fce2HeLqO2AQoKSJq94wQbXBMn1dDHJmwsFAWYgxJ3DGkYtbvz7tmpzudFghQFnVEG%2FHYqR3H1Oxl%2Bq1oFxGwV1UcZITayiktrfA96kekU1qsAz%2FU5Af9Tl7Bejy5SBexHM8TCbJ672kXJIuKMwfTne%2BICJqJgBSB26cPifsk125KILT46nzAoP8Nk2MhdCuqL7tk3zvTDX5dzEBjqkAVAJmnZBlk%2BCJh1UCNMAVQSGFkSVNPXmuPplQEn7UJIF6kRF7BtWhqxk%2BBL1bXERwGOgP0SljLiQdZqy0RfvphN4AjS2AKjufcY95OJM0xnnSLBasOYT5RNVMe6VTEMeqr1coAydj%2FAfqUx8fuyqErgAeV02JQZWmRWO7gSiU3a9IeKL9H%2B8EtFS7dK1zV5IyMajRhXAosKtZnycPSHQnaR0vosC&X-Amz-Signature=1f5a67ad85b5b670dbac9a7e6fc0c6cf564bcd5cab6e20ad0d224be256f375d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJRFYAII%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh2i4sZaJaYwd6RcZb%2BF77uPOhYNqIUvZWEmJtwPamVAIhAMt0Z79%2BsBqzVaSVOT2EAJa4g1TTkdOFWlc7EdsYpNUVKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3IHwQhQIpcTse5Y4q3AORLuyNPtxI0%2FWs1vngNYgX9jnWvOaVaQJLq%2BbnxidDKji9%2F638VSQgNW2eGsJHVq6fdZPieaF2hDS0UXj6H0un6oDUUFrObMBfqGJx110EPjt23jFuob0l4%2FwIHQkWkV2cyNABUY8tpRwJ0PxqACI802o%2BxKboxDW%2BsyReQElGQG2R4A9FtG4wrN7%2BUgl2l4Gj65GUYzAfVdV6Pon7AD2NbrCmNV%2BDsuc%2BJOUOpGk03sslFtPLJd4anFNuDq3G67LQgm16Mh6ZZgldoxk4UqrSjnAl9TikbuJqu9c%2FwLeU%2FUa3sV2s9ta93qQDF1SlngJ1DoVqJHDxXyGsPFjlUdDpz%2FM0rhnynbvBQxp8GLJrcf2cmGviIpzi6QpidXIM6J2hXndQO%2FdgrCvJnQfAUReWfV5cHEoGIe6v2pxspgX2Kv8Hk%2Fei6%2Fce2HeLqO2AQoKSJq94wQbXBMn1dDHJmwsFAWYgxJ3DGkYtbvz7tmpzudFghQFnVEG%2FHYqR3H1Oxl%2Bq1oFxGwV1UcZITayiktrfA96kekU1qsAz%2FU5Af9Tl7Bejy5SBexHM8TCbJ672kXJIuKMwfTne%2BICJqJgBSB26cPifsk125KILT46nzAoP8Nk2MhdCuqL7tk3zvTDX5dzEBjqkAVAJmnZBlk%2BCJh1UCNMAVQSGFkSVNPXmuPplQEn7UJIF6kRF7BtWhqxk%2BBL1bXERwGOgP0SljLiQdZqy0RfvphN4AjS2AKjufcY95OJM0xnnSLBasOYT5RNVMe6VTEMeqr1coAydj%2FAfqUx8fuyqErgAeV02JQZWmRWO7gSiU3a9IeKL9H%2B8EtFS7dK1zV5IyMajRhXAosKtZnycPSHQnaR0vosC&X-Amz-Signature=520b6e74a71e3497e24e496d8d53394ab37f3d0109f4696050ac252956f00e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJRFYAII%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh2i4sZaJaYwd6RcZb%2BF77uPOhYNqIUvZWEmJtwPamVAIhAMt0Z79%2BsBqzVaSVOT2EAJa4g1TTkdOFWlc7EdsYpNUVKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3IHwQhQIpcTse5Y4q3AORLuyNPtxI0%2FWs1vngNYgX9jnWvOaVaQJLq%2BbnxidDKji9%2F638VSQgNW2eGsJHVq6fdZPieaF2hDS0UXj6H0un6oDUUFrObMBfqGJx110EPjt23jFuob0l4%2FwIHQkWkV2cyNABUY8tpRwJ0PxqACI802o%2BxKboxDW%2BsyReQElGQG2R4A9FtG4wrN7%2BUgl2l4Gj65GUYzAfVdV6Pon7AD2NbrCmNV%2BDsuc%2BJOUOpGk03sslFtPLJd4anFNuDq3G67LQgm16Mh6ZZgldoxk4UqrSjnAl9TikbuJqu9c%2FwLeU%2FUa3sV2s9ta93qQDF1SlngJ1DoVqJHDxXyGsPFjlUdDpz%2FM0rhnynbvBQxp8GLJrcf2cmGviIpzi6QpidXIM6J2hXndQO%2FdgrCvJnQfAUReWfV5cHEoGIe6v2pxspgX2Kv8Hk%2Fei6%2Fce2HeLqO2AQoKSJq94wQbXBMn1dDHJmwsFAWYgxJ3DGkYtbvz7tmpzudFghQFnVEG%2FHYqR3H1Oxl%2Bq1oFxGwV1UcZITayiktrfA96kekU1qsAz%2FU5Af9Tl7Bejy5SBexHM8TCbJ672kXJIuKMwfTne%2BICJqJgBSB26cPifsk125KILT46nzAoP8Nk2MhdCuqL7tk3zvTDX5dzEBjqkAVAJmnZBlk%2BCJh1UCNMAVQSGFkSVNPXmuPplQEn7UJIF6kRF7BtWhqxk%2BBL1bXERwGOgP0SljLiQdZqy0RfvphN4AjS2AKjufcY95OJM0xnnSLBasOYT5RNVMe6VTEMeqr1coAydj%2FAfqUx8fuyqErgAeV02JQZWmRWO7gSiU3a9IeKL9H%2B8EtFS7dK1zV5IyMajRhXAosKtZnycPSHQnaR0vosC&X-Amz-Signature=23a90fe2145772b348c18cb198cfa710687b13d749018e0a137b2b9cca41b2f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJRFYAII%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh2i4sZaJaYwd6RcZb%2BF77uPOhYNqIUvZWEmJtwPamVAIhAMt0Z79%2BsBqzVaSVOT2EAJa4g1TTkdOFWlc7EdsYpNUVKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3IHwQhQIpcTse5Y4q3AORLuyNPtxI0%2FWs1vngNYgX9jnWvOaVaQJLq%2BbnxidDKji9%2F638VSQgNW2eGsJHVq6fdZPieaF2hDS0UXj6H0un6oDUUFrObMBfqGJx110EPjt23jFuob0l4%2FwIHQkWkV2cyNABUY8tpRwJ0PxqACI802o%2BxKboxDW%2BsyReQElGQG2R4A9FtG4wrN7%2BUgl2l4Gj65GUYzAfVdV6Pon7AD2NbrCmNV%2BDsuc%2BJOUOpGk03sslFtPLJd4anFNuDq3G67LQgm16Mh6ZZgldoxk4UqrSjnAl9TikbuJqu9c%2FwLeU%2FUa3sV2s9ta93qQDF1SlngJ1DoVqJHDxXyGsPFjlUdDpz%2FM0rhnynbvBQxp8GLJrcf2cmGviIpzi6QpidXIM6J2hXndQO%2FdgrCvJnQfAUReWfV5cHEoGIe6v2pxspgX2Kv8Hk%2Fei6%2Fce2HeLqO2AQoKSJq94wQbXBMn1dDHJmwsFAWYgxJ3DGkYtbvz7tmpzudFghQFnVEG%2FHYqR3H1Oxl%2Bq1oFxGwV1UcZITayiktrfA96kekU1qsAz%2FU5Af9Tl7Bejy5SBexHM8TCbJ672kXJIuKMwfTne%2BICJqJgBSB26cPifsk125KILT46nzAoP8Nk2MhdCuqL7tk3zvTDX5dzEBjqkAVAJmnZBlk%2BCJh1UCNMAVQSGFkSVNPXmuPplQEn7UJIF6kRF7BtWhqxk%2BBL1bXERwGOgP0SljLiQdZqy0RfvphN4AjS2AKjufcY95OJM0xnnSLBasOYT5RNVMe6VTEMeqr1coAydj%2FAfqUx8fuyqErgAeV02JQZWmRWO7gSiU3a9IeKL9H%2B8EtFS7dK1zV5IyMajRhXAosKtZnycPSHQnaR0vosC&X-Amz-Signature=4bb7c5f551737dc03ae9dec80bcd542f10f3b94f0adc7ad24bb9e09f2253d017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJRFYAII%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh2i4sZaJaYwd6RcZb%2BF77uPOhYNqIUvZWEmJtwPamVAIhAMt0Z79%2BsBqzVaSVOT2EAJa4g1TTkdOFWlc7EdsYpNUVKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3IHwQhQIpcTse5Y4q3AORLuyNPtxI0%2FWs1vngNYgX9jnWvOaVaQJLq%2BbnxidDKji9%2F638VSQgNW2eGsJHVq6fdZPieaF2hDS0UXj6H0un6oDUUFrObMBfqGJx110EPjt23jFuob0l4%2FwIHQkWkV2cyNABUY8tpRwJ0PxqACI802o%2BxKboxDW%2BsyReQElGQG2R4A9FtG4wrN7%2BUgl2l4Gj65GUYzAfVdV6Pon7AD2NbrCmNV%2BDsuc%2BJOUOpGk03sslFtPLJd4anFNuDq3G67LQgm16Mh6ZZgldoxk4UqrSjnAl9TikbuJqu9c%2FwLeU%2FUa3sV2s9ta93qQDF1SlngJ1DoVqJHDxXyGsPFjlUdDpz%2FM0rhnynbvBQxp8GLJrcf2cmGviIpzi6QpidXIM6J2hXndQO%2FdgrCvJnQfAUReWfV5cHEoGIe6v2pxspgX2Kv8Hk%2Fei6%2Fce2HeLqO2AQoKSJq94wQbXBMn1dDHJmwsFAWYgxJ3DGkYtbvz7tmpzudFghQFnVEG%2FHYqR3H1Oxl%2Bq1oFxGwV1UcZITayiktrfA96kekU1qsAz%2FU5Af9Tl7Bejy5SBexHM8TCbJ672kXJIuKMwfTne%2BICJqJgBSB26cPifsk125KILT46nzAoP8Nk2MhdCuqL7tk3zvTDX5dzEBjqkAVAJmnZBlk%2BCJh1UCNMAVQSGFkSVNPXmuPplQEn7UJIF6kRF7BtWhqxk%2BBL1bXERwGOgP0SljLiQdZqy0RfvphN4AjS2AKjufcY95OJM0xnnSLBasOYT5RNVMe6VTEMeqr1coAydj%2FAfqUx8fuyqErgAeV02JQZWmRWO7gSiU3a9IeKL9H%2B8EtFS7dK1zV5IyMajRhXAosKtZnycPSHQnaR0vosC&X-Amz-Signature=f93ac166c6b5adc6530d5168a78b6425b2d5f4c40c246e849f1021e6a7d7063f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJRFYAII%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh2i4sZaJaYwd6RcZb%2BF77uPOhYNqIUvZWEmJtwPamVAIhAMt0Z79%2BsBqzVaSVOT2EAJa4g1TTkdOFWlc7EdsYpNUVKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3IHwQhQIpcTse5Y4q3AORLuyNPtxI0%2FWs1vngNYgX9jnWvOaVaQJLq%2BbnxidDKji9%2F638VSQgNW2eGsJHVq6fdZPieaF2hDS0UXj6H0un6oDUUFrObMBfqGJx110EPjt23jFuob0l4%2FwIHQkWkV2cyNABUY8tpRwJ0PxqACI802o%2BxKboxDW%2BsyReQElGQG2R4A9FtG4wrN7%2BUgl2l4Gj65GUYzAfVdV6Pon7AD2NbrCmNV%2BDsuc%2BJOUOpGk03sslFtPLJd4anFNuDq3G67LQgm16Mh6ZZgldoxk4UqrSjnAl9TikbuJqu9c%2FwLeU%2FUa3sV2s9ta93qQDF1SlngJ1DoVqJHDxXyGsPFjlUdDpz%2FM0rhnynbvBQxp8GLJrcf2cmGviIpzi6QpidXIM6J2hXndQO%2FdgrCvJnQfAUReWfV5cHEoGIe6v2pxspgX2Kv8Hk%2Fei6%2Fce2HeLqO2AQoKSJq94wQbXBMn1dDHJmwsFAWYgxJ3DGkYtbvz7tmpzudFghQFnVEG%2FHYqR3H1Oxl%2Bq1oFxGwV1UcZITayiktrfA96kekU1qsAz%2FU5Af9Tl7Bejy5SBexHM8TCbJ672kXJIuKMwfTne%2BICJqJgBSB26cPifsk125KILT46nzAoP8Nk2MhdCuqL7tk3zvTDX5dzEBjqkAVAJmnZBlk%2BCJh1UCNMAVQSGFkSVNPXmuPplQEn7UJIF6kRF7BtWhqxk%2BBL1bXERwGOgP0SljLiQdZqy0RfvphN4AjS2AKjufcY95OJM0xnnSLBasOYT5RNVMe6VTEMeqr1coAydj%2FAfqUx8fuyqErgAeV02JQZWmRWO7gSiU3a9IeKL9H%2B8EtFS7dK1zV5IyMajRhXAosKtZnycPSHQnaR0vosC&X-Amz-Signature=5cd7bbafd511876a73df75800509cf05833dde9aa1749b40ab4da94f61d1747e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
