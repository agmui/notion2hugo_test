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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEDH67SK%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9gb4HmGewdPWG%2B2mxwmA3XIFhmV45%2F%2BHjiMpLogwwyAiEA5L%2Fb0RBD84ubLjNlkILoBE44YuIr3xgr%2F7Ce9mHTvcUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCxEzb269Ek6FFV2ASrcA1DasrCCO%2F9K6meVMbog4CRRDEDJgtrCNn8znlDHvxOAwPwDFLou84oPkyiUu2LTkITbB%2BiprjsT0Oh97PYassMeH3JrFE0jvxfBnCfNFEr3xvdOJJNvN1ZRidulKQnelM37%2FogUlj5WGe7Vr2lbLaldeqxK%2BMpjGrXib%2BnJEJsX3T5sErEfVsny7%2BFw4xT0%2BTgsl%2B4waCVJVDZwY1S5xKXBcrF8w746v2EnKlHI4Y3OngwWmS9HL4GzXw9pA6TAzedUi64J10QtE49JmpB5L6ZsaAvzfIuWUdQxDIWmZn%2FPb9iPHJaybq3N2QUZ2szdOSVXhGYPFx5%2FXmWjBmSJvFjqeXWNfxt7gSpqYg8fgzfpsP5S9hGFxS6ElVVYlfmX4ERQ0%2FyRECX9dRCnNZNa%2Bwubf2VUwZTXIXE8K8wRIaPsEDQMnp3C9LJ0mnGdn4w8b4FAO65uX50E3XqFZoEgbfEQ%2FtZHqrh%2F0tdIa9HAm2UwtAv7glHaeRE4qrwig8RyjFfaXUcwg3i9YKwxhAZtox4K%2FAhoIp%2BHXwoscvfcYiCAOdmbBU1tctIva1vwNwf0DiIxZXMBXcGEnqv2ymQS%2Bpal7bYmionv4z4JFJpcysekmINgEZa3ZN4b4esEMInw5ccGOqUB1zN4g7a9vQ8oJIj2JxDHcL39hnU9Qv8vM%2BY%2BtRsXGmEYHRVTFVs7IWTpFFB4hvCjdLuhRjYuigJpKm7QSRVxE04vIrh9tm5WfrDFyCvdme%2FtWGHLUjRTrWegbDDRf5aiRrLFJl1YLhyhpoeefVAEl3DhWPl91KMnsp7S%2FZe4QNDfmDsivGn%2FxmDWBMGEmW6WflYAFgSCy4IlibSytAG0zccuRQfS&X-Amz-Signature=cacc72432183904543a34029666fb6b33d71a1573cfd618e81a762a1690f02fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEDH67SK%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9gb4HmGewdPWG%2B2mxwmA3XIFhmV45%2F%2BHjiMpLogwwyAiEA5L%2Fb0RBD84ubLjNlkILoBE44YuIr3xgr%2F7Ce9mHTvcUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCxEzb269Ek6FFV2ASrcA1DasrCCO%2F9K6meVMbog4CRRDEDJgtrCNn8znlDHvxOAwPwDFLou84oPkyiUu2LTkITbB%2BiprjsT0Oh97PYassMeH3JrFE0jvxfBnCfNFEr3xvdOJJNvN1ZRidulKQnelM37%2FogUlj5WGe7Vr2lbLaldeqxK%2BMpjGrXib%2BnJEJsX3T5sErEfVsny7%2BFw4xT0%2BTgsl%2B4waCVJVDZwY1S5xKXBcrF8w746v2EnKlHI4Y3OngwWmS9HL4GzXw9pA6TAzedUi64J10QtE49JmpB5L6ZsaAvzfIuWUdQxDIWmZn%2FPb9iPHJaybq3N2QUZ2szdOSVXhGYPFx5%2FXmWjBmSJvFjqeXWNfxt7gSpqYg8fgzfpsP5S9hGFxS6ElVVYlfmX4ERQ0%2FyRECX9dRCnNZNa%2Bwubf2VUwZTXIXE8K8wRIaPsEDQMnp3C9LJ0mnGdn4w8b4FAO65uX50E3XqFZoEgbfEQ%2FtZHqrh%2F0tdIa9HAm2UwtAv7glHaeRE4qrwig8RyjFfaXUcwg3i9YKwxhAZtox4K%2FAhoIp%2BHXwoscvfcYiCAOdmbBU1tctIva1vwNwf0DiIxZXMBXcGEnqv2ymQS%2Bpal7bYmionv4z4JFJpcysekmINgEZa3ZN4b4esEMInw5ccGOqUB1zN4g7a9vQ8oJIj2JxDHcL39hnU9Qv8vM%2BY%2BtRsXGmEYHRVTFVs7IWTpFFB4hvCjdLuhRjYuigJpKm7QSRVxE04vIrh9tm5WfrDFyCvdme%2FtWGHLUjRTrWegbDDRf5aiRrLFJl1YLhyhpoeefVAEl3DhWPl91KMnsp7S%2FZe4QNDfmDsivGn%2FxmDWBMGEmW6WflYAFgSCy4IlibSytAG0zccuRQfS&X-Amz-Signature=9c643e90955643483619cd54e9a84d5c798f3166961d9d7d8d50eecc22d2e329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEDH67SK%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9gb4HmGewdPWG%2B2mxwmA3XIFhmV45%2F%2BHjiMpLogwwyAiEA5L%2Fb0RBD84ubLjNlkILoBE44YuIr3xgr%2F7Ce9mHTvcUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCxEzb269Ek6FFV2ASrcA1DasrCCO%2F9K6meVMbog4CRRDEDJgtrCNn8znlDHvxOAwPwDFLou84oPkyiUu2LTkITbB%2BiprjsT0Oh97PYassMeH3JrFE0jvxfBnCfNFEr3xvdOJJNvN1ZRidulKQnelM37%2FogUlj5WGe7Vr2lbLaldeqxK%2BMpjGrXib%2BnJEJsX3T5sErEfVsny7%2BFw4xT0%2BTgsl%2B4waCVJVDZwY1S5xKXBcrF8w746v2EnKlHI4Y3OngwWmS9HL4GzXw9pA6TAzedUi64J10QtE49JmpB5L6ZsaAvzfIuWUdQxDIWmZn%2FPb9iPHJaybq3N2QUZ2szdOSVXhGYPFx5%2FXmWjBmSJvFjqeXWNfxt7gSpqYg8fgzfpsP5S9hGFxS6ElVVYlfmX4ERQ0%2FyRECX9dRCnNZNa%2Bwubf2VUwZTXIXE8K8wRIaPsEDQMnp3C9LJ0mnGdn4w8b4FAO65uX50E3XqFZoEgbfEQ%2FtZHqrh%2F0tdIa9HAm2UwtAv7glHaeRE4qrwig8RyjFfaXUcwg3i9YKwxhAZtox4K%2FAhoIp%2BHXwoscvfcYiCAOdmbBU1tctIva1vwNwf0DiIxZXMBXcGEnqv2ymQS%2Bpal7bYmionv4z4JFJpcysekmINgEZa3ZN4b4esEMInw5ccGOqUB1zN4g7a9vQ8oJIj2JxDHcL39hnU9Qv8vM%2BY%2BtRsXGmEYHRVTFVs7IWTpFFB4hvCjdLuhRjYuigJpKm7QSRVxE04vIrh9tm5WfrDFyCvdme%2FtWGHLUjRTrWegbDDRf5aiRrLFJl1YLhyhpoeefVAEl3DhWPl91KMnsp7S%2FZe4QNDfmDsivGn%2FxmDWBMGEmW6WflYAFgSCy4IlibSytAG0zccuRQfS&X-Amz-Signature=720dddfaa24cb421cddce9d8f31a8fee6ea316d4912f2f3165779af916feacf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEDH67SK%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9gb4HmGewdPWG%2B2mxwmA3XIFhmV45%2F%2BHjiMpLogwwyAiEA5L%2Fb0RBD84ubLjNlkILoBE44YuIr3xgr%2F7Ce9mHTvcUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCxEzb269Ek6FFV2ASrcA1DasrCCO%2F9K6meVMbog4CRRDEDJgtrCNn8znlDHvxOAwPwDFLou84oPkyiUu2LTkITbB%2BiprjsT0Oh97PYassMeH3JrFE0jvxfBnCfNFEr3xvdOJJNvN1ZRidulKQnelM37%2FogUlj5WGe7Vr2lbLaldeqxK%2BMpjGrXib%2BnJEJsX3T5sErEfVsny7%2BFw4xT0%2BTgsl%2B4waCVJVDZwY1S5xKXBcrF8w746v2EnKlHI4Y3OngwWmS9HL4GzXw9pA6TAzedUi64J10QtE49JmpB5L6ZsaAvzfIuWUdQxDIWmZn%2FPb9iPHJaybq3N2QUZ2szdOSVXhGYPFx5%2FXmWjBmSJvFjqeXWNfxt7gSpqYg8fgzfpsP5S9hGFxS6ElVVYlfmX4ERQ0%2FyRECX9dRCnNZNa%2Bwubf2VUwZTXIXE8K8wRIaPsEDQMnp3C9LJ0mnGdn4w8b4FAO65uX50E3XqFZoEgbfEQ%2FtZHqrh%2F0tdIa9HAm2UwtAv7glHaeRE4qrwig8RyjFfaXUcwg3i9YKwxhAZtox4K%2FAhoIp%2BHXwoscvfcYiCAOdmbBU1tctIva1vwNwf0DiIxZXMBXcGEnqv2ymQS%2Bpal7bYmionv4z4JFJpcysekmINgEZa3ZN4b4esEMInw5ccGOqUB1zN4g7a9vQ8oJIj2JxDHcL39hnU9Qv8vM%2BY%2BtRsXGmEYHRVTFVs7IWTpFFB4hvCjdLuhRjYuigJpKm7QSRVxE04vIrh9tm5WfrDFyCvdme%2FtWGHLUjRTrWegbDDRf5aiRrLFJl1YLhyhpoeefVAEl3DhWPl91KMnsp7S%2FZe4QNDfmDsivGn%2FxmDWBMGEmW6WflYAFgSCy4IlibSytAG0zccuRQfS&X-Amz-Signature=f3a9e6f6b54b14db5dcf41a4fbb72503398cec2037b64d74df4f9f3b42e362be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEDH67SK%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9gb4HmGewdPWG%2B2mxwmA3XIFhmV45%2F%2BHjiMpLogwwyAiEA5L%2Fb0RBD84ubLjNlkILoBE44YuIr3xgr%2F7Ce9mHTvcUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCxEzb269Ek6FFV2ASrcA1DasrCCO%2F9K6meVMbog4CRRDEDJgtrCNn8znlDHvxOAwPwDFLou84oPkyiUu2LTkITbB%2BiprjsT0Oh97PYassMeH3JrFE0jvxfBnCfNFEr3xvdOJJNvN1ZRidulKQnelM37%2FogUlj5WGe7Vr2lbLaldeqxK%2BMpjGrXib%2BnJEJsX3T5sErEfVsny7%2BFw4xT0%2BTgsl%2B4waCVJVDZwY1S5xKXBcrF8w746v2EnKlHI4Y3OngwWmS9HL4GzXw9pA6TAzedUi64J10QtE49JmpB5L6ZsaAvzfIuWUdQxDIWmZn%2FPb9iPHJaybq3N2QUZ2szdOSVXhGYPFx5%2FXmWjBmSJvFjqeXWNfxt7gSpqYg8fgzfpsP5S9hGFxS6ElVVYlfmX4ERQ0%2FyRECX9dRCnNZNa%2Bwubf2VUwZTXIXE8K8wRIaPsEDQMnp3C9LJ0mnGdn4w8b4FAO65uX50E3XqFZoEgbfEQ%2FtZHqrh%2F0tdIa9HAm2UwtAv7glHaeRE4qrwig8RyjFfaXUcwg3i9YKwxhAZtox4K%2FAhoIp%2BHXwoscvfcYiCAOdmbBU1tctIva1vwNwf0DiIxZXMBXcGEnqv2ymQS%2Bpal7bYmionv4z4JFJpcysekmINgEZa3ZN4b4esEMInw5ccGOqUB1zN4g7a9vQ8oJIj2JxDHcL39hnU9Qv8vM%2BY%2BtRsXGmEYHRVTFVs7IWTpFFB4hvCjdLuhRjYuigJpKm7QSRVxE04vIrh9tm5WfrDFyCvdme%2FtWGHLUjRTrWegbDDRf5aiRrLFJl1YLhyhpoeefVAEl3DhWPl91KMnsp7S%2FZe4QNDfmDsivGn%2FxmDWBMGEmW6WflYAFgSCy4IlibSytAG0zccuRQfS&X-Amz-Signature=932c09ec12b44eeb04e13bf6b1161165bb031e83d81054bdef24b229cc012efe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEDH67SK%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9gb4HmGewdPWG%2B2mxwmA3XIFhmV45%2F%2BHjiMpLogwwyAiEA5L%2Fb0RBD84ubLjNlkILoBE44YuIr3xgr%2F7Ce9mHTvcUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCxEzb269Ek6FFV2ASrcA1DasrCCO%2F9K6meVMbog4CRRDEDJgtrCNn8znlDHvxOAwPwDFLou84oPkyiUu2LTkITbB%2BiprjsT0Oh97PYassMeH3JrFE0jvxfBnCfNFEr3xvdOJJNvN1ZRidulKQnelM37%2FogUlj5WGe7Vr2lbLaldeqxK%2BMpjGrXib%2BnJEJsX3T5sErEfVsny7%2BFw4xT0%2BTgsl%2B4waCVJVDZwY1S5xKXBcrF8w746v2EnKlHI4Y3OngwWmS9HL4GzXw9pA6TAzedUi64J10QtE49JmpB5L6ZsaAvzfIuWUdQxDIWmZn%2FPb9iPHJaybq3N2QUZ2szdOSVXhGYPFx5%2FXmWjBmSJvFjqeXWNfxt7gSpqYg8fgzfpsP5S9hGFxS6ElVVYlfmX4ERQ0%2FyRECX9dRCnNZNa%2Bwubf2VUwZTXIXE8K8wRIaPsEDQMnp3C9LJ0mnGdn4w8b4FAO65uX50E3XqFZoEgbfEQ%2FtZHqrh%2F0tdIa9HAm2UwtAv7glHaeRE4qrwig8RyjFfaXUcwg3i9YKwxhAZtox4K%2FAhoIp%2BHXwoscvfcYiCAOdmbBU1tctIva1vwNwf0DiIxZXMBXcGEnqv2ymQS%2Bpal7bYmionv4z4JFJpcysekmINgEZa3ZN4b4esEMInw5ccGOqUB1zN4g7a9vQ8oJIj2JxDHcL39hnU9Qv8vM%2BY%2BtRsXGmEYHRVTFVs7IWTpFFB4hvCjdLuhRjYuigJpKm7QSRVxE04vIrh9tm5WfrDFyCvdme%2FtWGHLUjRTrWegbDDRf5aiRrLFJl1YLhyhpoeefVAEl3DhWPl91KMnsp7S%2FZe4QNDfmDsivGn%2FxmDWBMGEmW6WflYAFgSCy4IlibSytAG0zccuRQfS&X-Amz-Signature=5cebfef55e45e1f0a360482e7a41b649954d6e0a8570ec630323b626f6b3808e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEDH67SK%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9gb4HmGewdPWG%2B2mxwmA3XIFhmV45%2F%2BHjiMpLogwwyAiEA5L%2Fb0RBD84ubLjNlkILoBE44YuIr3xgr%2F7Ce9mHTvcUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCxEzb269Ek6FFV2ASrcA1DasrCCO%2F9K6meVMbog4CRRDEDJgtrCNn8znlDHvxOAwPwDFLou84oPkyiUu2LTkITbB%2BiprjsT0Oh97PYassMeH3JrFE0jvxfBnCfNFEr3xvdOJJNvN1ZRidulKQnelM37%2FogUlj5WGe7Vr2lbLaldeqxK%2BMpjGrXib%2BnJEJsX3T5sErEfVsny7%2BFw4xT0%2BTgsl%2B4waCVJVDZwY1S5xKXBcrF8w746v2EnKlHI4Y3OngwWmS9HL4GzXw9pA6TAzedUi64J10QtE49JmpB5L6ZsaAvzfIuWUdQxDIWmZn%2FPb9iPHJaybq3N2QUZ2szdOSVXhGYPFx5%2FXmWjBmSJvFjqeXWNfxt7gSpqYg8fgzfpsP5S9hGFxS6ElVVYlfmX4ERQ0%2FyRECX9dRCnNZNa%2Bwubf2VUwZTXIXE8K8wRIaPsEDQMnp3C9LJ0mnGdn4w8b4FAO65uX50E3XqFZoEgbfEQ%2FtZHqrh%2F0tdIa9HAm2UwtAv7glHaeRE4qrwig8RyjFfaXUcwg3i9YKwxhAZtox4K%2FAhoIp%2BHXwoscvfcYiCAOdmbBU1tctIva1vwNwf0DiIxZXMBXcGEnqv2ymQS%2Bpal7bYmionv4z4JFJpcysekmINgEZa3ZN4b4esEMInw5ccGOqUB1zN4g7a9vQ8oJIj2JxDHcL39hnU9Qv8vM%2BY%2BtRsXGmEYHRVTFVs7IWTpFFB4hvCjdLuhRjYuigJpKm7QSRVxE04vIrh9tm5WfrDFyCvdme%2FtWGHLUjRTrWegbDDRf5aiRrLFJl1YLhyhpoeefVAEl3DhWPl91KMnsp7S%2FZe4QNDfmDsivGn%2FxmDWBMGEmW6WflYAFgSCy4IlibSytAG0zccuRQfS&X-Amz-Signature=6c664368452e0207ae262108eb95c74a5fd49c4bebda72d5b234a102a3d506d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEDH67SK%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9gb4HmGewdPWG%2B2mxwmA3XIFhmV45%2F%2BHjiMpLogwwyAiEA5L%2Fb0RBD84ubLjNlkILoBE44YuIr3xgr%2F7Ce9mHTvcUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCxEzb269Ek6FFV2ASrcA1DasrCCO%2F9K6meVMbog4CRRDEDJgtrCNn8znlDHvxOAwPwDFLou84oPkyiUu2LTkITbB%2BiprjsT0Oh97PYassMeH3JrFE0jvxfBnCfNFEr3xvdOJJNvN1ZRidulKQnelM37%2FogUlj5WGe7Vr2lbLaldeqxK%2BMpjGrXib%2BnJEJsX3T5sErEfVsny7%2BFw4xT0%2BTgsl%2B4waCVJVDZwY1S5xKXBcrF8w746v2EnKlHI4Y3OngwWmS9HL4GzXw9pA6TAzedUi64J10QtE49JmpB5L6ZsaAvzfIuWUdQxDIWmZn%2FPb9iPHJaybq3N2QUZ2szdOSVXhGYPFx5%2FXmWjBmSJvFjqeXWNfxt7gSpqYg8fgzfpsP5S9hGFxS6ElVVYlfmX4ERQ0%2FyRECX9dRCnNZNa%2Bwubf2VUwZTXIXE8K8wRIaPsEDQMnp3C9LJ0mnGdn4w8b4FAO65uX50E3XqFZoEgbfEQ%2FtZHqrh%2F0tdIa9HAm2UwtAv7glHaeRE4qrwig8RyjFfaXUcwg3i9YKwxhAZtox4K%2FAhoIp%2BHXwoscvfcYiCAOdmbBU1tctIva1vwNwf0DiIxZXMBXcGEnqv2ymQS%2Bpal7bYmionv4z4JFJpcysekmINgEZa3ZN4b4esEMInw5ccGOqUB1zN4g7a9vQ8oJIj2JxDHcL39hnU9Qv8vM%2BY%2BtRsXGmEYHRVTFVs7IWTpFFB4hvCjdLuhRjYuigJpKm7QSRVxE04vIrh9tm5WfrDFyCvdme%2FtWGHLUjRTrWegbDDRf5aiRrLFJl1YLhyhpoeefVAEl3DhWPl91KMnsp7S%2FZe4QNDfmDsivGn%2FxmDWBMGEmW6WflYAFgSCy4IlibSytAG0zccuRQfS&X-Amz-Signature=c6dadb682d7e06ce6d516b1f4032f8c3e9854ccc18f232677c46783717a5b03e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEDH67SK%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9gb4HmGewdPWG%2B2mxwmA3XIFhmV45%2F%2BHjiMpLogwwyAiEA5L%2Fb0RBD84ubLjNlkILoBE44YuIr3xgr%2F7Ce9mHTvcUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCxEzb269Ek6FFV2ASrcA1DasrCCO%2F9K6meVMbog4CRRDEDJgtrCNn8znlDHvxOAwPwDFLou84oPkyiUu2LTkITbB%2BiprjsT0Oh97PYassMeH3JrFE0jvxfBnCfNFEr3xvdOJJNvN1ZRidulKQnelM37%2FogUlj5WGe7Vr2lbLaldeqxK%2BMpjGrXib%2BnJEJsX3T5sErEfVsny7%2BFw4xT0%2BTgsl%2B4waCVJVDZwY1S5xKXBcrF8w746v2EnKlHI4Y3OngwWmS9HL4GzXw9pA6TAzedUi64J10QtE49JmpB5L6ZsaAvzfIuWUdQxDIWmZn%2FPb9iPHJaybq3N2QUZ2szdOSVXhGYPFx5%2FXmWjBmSJvFjqeXWNfxt7gSpqYg8fgzfpsP5S9hGFxS6ElVVYlfmX4ERQ0%2FyRECX9dRCnNZNa%2Bwubf2VUwZTXIXE8K8wRIaPsEDQMnp3C9LJ0mnGdn4w8b4FAO65uX50E3XqFZoEgbfEQ%2FtZHqrh%2F0tdIa9HAm2UwtAv7glHaeRE4qrwig8RyjFfaXUcwg3i9YKwxhAZtox4K%2FAhoIp%2BHXwoscvfcYiCAOdmbBU1tctIva1vwNwf0DiIxZXMBXcGEnqv2ymQS%2Bpal7bYmionv4z4JFJpcysekmINgEZa3ZN4b4esEMInw5ccGOqUB1zN4g7a9vQ8oJIj2JxDHcL39hnU9Qv8vM%2BY%2BtRsXGmEYHRVTFVs7IWTpFFB4hvCjdLuhRjYuigJpKm7QSRVxE04vIrh9tm5WfrDFyCvdme%2FtWGHLUjRTrWegbDDRf5aiRrLFJl1YLhyhpoeefVAEl3DhWPl91KMnsp7S%2FZe4QNDfmDsivGn%2FxmDWBMGEmW6WflYAFgSCy4IlibSytAG0zccuRQfS&X-Amz-Signature=5bc0ac0ab0ffb2f43ef63a6b88debe9be130d8ea55b690dff7c17686480d75ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEDH67SK%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9gb4HmGewdPWG%2B2mxwmA3XIFhmV45%2F%2BHjiMpLogwwyAiEA5L%2Fb0RBD84ubLjNlkILoBE44YuIr3xgr%2F7Ce9mHTvcUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCxEzb269Ek6FFV2ASrcA1DasrCCO%2F9K6meVMbog4CRRDEDJgtrCNn8znlDHvxOAwPwDFLou84oPkyiUu2LTkITbB%2BiprjsT0Oh97PYassMeH3JrFE0jvxfBnCfNFEr3xvdOJJNvN1ZRidulKQnelM37%2FogUlj5WGe7Vr2lbLaldeqxK%2BMpjGrXib%2BnJEJsX3T5sErEfVsny7%2BFw4xT0%2BTgsl%2B4waCVJVDZwY1S5xKXBcrF8w746v2EnKlHI4Y3OngwWmS9HL4GzXw9pA6TAzedUi64J10QtE49JmpB5L6ZsaAvzfIuWUdQxDIWmZn%2FPb9iPHJaybq3N2QUZ2szdOSVXhGYPFx5%2FXmWjBmSJvFjqeXWNfxt7gSpqYg8fgzfpsP5S9hGFxS6ElVVYlfmX4ERQ0%2FyRECX9dRCnNZNa%2Bwubf2VUwZTXIXE8K8wRIaPsEDQMnp3C9LJ0mnGdn4w8b4FAO65uX50E3XqFZoEgbfEQ%2FtZHqrh%2F0tdIa9HAm2UwtAv7glHaeRE4qrwig8RyjFfaXUcwg3i9YKwxhAZtox4K%2FAhoIp%2BHXwoscvfcYiCAOdmbBU1tctIva1vwNwf0DiIxZXMBXcGEnqv2ymQS%2Bpal7bYmionv4z4JFJpcysekmINgEZa3ZN4b4esEMInw5ccGOqUB1zN4g7a9vQ8oJIj2JxDHcL39hnU9Qv8vM%2BY%2BtRsXGmEYHRVTFVs7IWTpFFB4hvCjdLuhRjYuigJpKm7QSRVxE04vIrh9tm5WfrDFyCvdme%2FtWGHLUjRTrWegbDDRf5aiRrLFJl1YLhyhpoeefVAEl3DhWPl91KMnsp7S%2FZe4QNDfmDsivGn%2FxmDWBMGEmW6WflYAFgSCy4IlibSytAG0zccuRQfS&X-Amz-Signature=08592f63d3dc1c38f0304677ab993ee81b1ffbae562664ae5292d56a6cbd8e9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIE6JESH%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmFO5Egus1lXqkmpXz2w%2BwKrFuK0EI5zd78HFFZEOeoAiBYaSEW%2BqiIXbU9QPp6ZQkaxG2h0tzDNTbfbqLOJdriRCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMJ3u62pV5AbwTuWoOKtwDd8l0UjReLE2KUD8ZOHZpAGqTBG1lFRu9X0m4YsFPrSWNxqqreVeZXSSTXGBA2LN0dxwlQLRofrb07bbSgCkY8jVuQLJAbWMzudESW42LSslReziD4W45EXX3GMrDn509AQmSFv1O7HGStJ%2Fj%2Bba8L19AdidlElQ7iBYOaxBdoP%2BTwavOWfBhneKh2pqwB1ETAulPHsSqUSInch790FTnIcjkTlRTRDSuoABQ9EkfKxQoYIk%2F8WoE3oBtYgQm%2BCvJglN4C5EndzHzs0%2BmC3HB94mF5GEGsF50O9iwrn3WhURJydw7Oq%2F79Hte8qToCr9iD4j2mrvH5pFg00NqTzXMoxfeIsDcf5QKnOhXOOZTb7PCu1GW4VxHfzl%2BhKk%2FTNknGt57vHUq33vdeE%2FHaX4bS%2FpUKxxwkoG9MlBUCgohmUYM3IqlF4lwgl4bjhss%2F2%2FGL2d1MyE3XMDXi7yBNs9a20XlfJnIUqUfWJfyvRMWfZc%2F%2BdQ0tYnhwNX3VDEETHLQcJ7t4wIJFPuTXzbKlmt%2FUvvLeQySFcuPa8kC6usN6OX66nlV6EsgPX30SmYbXGIwXVBckCC%2Ffz3ISrRhxBFVsEZBoBK0Z%2BUFH2m7bqbvHPakAccAbh6UQXzDlCAwwe%2FlxwY6pgGLFDkPLUcObAiTKn30bhcRyN0i2FzgL7kJtb8UKQ5zq%2BZHJFKPxl242tRTsSyOww6vtP9BoGkdsmsEiFHpTRq7bqNKnE5%2BwACiJBfmLhcqeBE6hb1oFPHpxpRQoRKI8inD93rxyXvRE9wTIWjLQNVlveYEuqMqsmrF8SKY6hyQODcjVKTWA9EbRC7M4oadvEHagk1xniPxbSJ3VfWDBjYDnkTwRjyZ&X-Amz-Signature=1f24157d73d538ef62a6971f32852ef6126ca0665ee8f72e5cf65f77412bbaf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ED5EVSB%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhcLN0%2FKymJH59L6gwyrqxMTDGO29Wj7571chKupbdfwIhALs5%2BWW2Zv9OIAksMAATEAI2Xs1RqgtomPFNMUxLFWvKKv8DCDoQABoMNjM3NDIzMTgzODA1IgxlSXjz4kyvrn17CnUq3AOrkkuf%2B9lt3%2BHur1VPddXk%2FVKf0GF1ej5SgxhnQ8QsZO%2F0JFuJHdsa59ZN%2Bfce457CK1mo6EgFDyKVmmhYO%2F9PMFpvVpkZcg5rw0AkyeM5b2gWkqu4RQPeUjnnLKo9wyAXtYyqE9DoxOFwM7hyT0lK7WQQJ6l0eyCtCu4Y2evMM%2BvDQy%2Fotrq9tUAoUKfrgdT7t%2FOWeST%2FjJLULFqK8Da7jlAeoO%2BatJfNGvuB%2F4OVnhElhb9Fdpkxo%2FMN%2F116iKhEolaUt8xaUi5WTDjsiMBksKlcWGcuYbHL59rm%2FmovqAwWRGTH6e31Z02WXX5s6DrkuMEGWQuqtDc4A3Y2wb%2BNpYAkY9v3iNT5O828gKW9R%2FNCPQ6%2FJLH4SUNBXVw42tE%2B4YbXa2JrJ3adZ6szZDbWQqKibAX9k5E7nCfFDje5HAxMnJGpunpyAvx7pWcHUDf%2BCabPjyEpLNkp5THq%2BGyUAdkm0NuUefhafpexD75aOiyXXSeC8jTCzSv9QbKRdSYUu29PErD1wzLRpJO1JBxw1u8FyUOYy247wng47obygti9AJOhP1c7HIOMhxZD9h1eJhkbNkelBS1Bu3Fg4KrXbZ32bo8zxHvkg2bIKRkzaRp8xp5dDXoCfEVkkDDH7%2BXHBjqkAUA5TxPn1%2Ft62qpf977puRmnkEBL%2BCG7ITHkqHKie%2BB5MgY72M1l7cerQeP05T99qD%2B4ohZ2zfFXlTVSEz9wH6ojKytTXnHKArD6knIU3hS2lm%2FF%2BVw5Om2YjNmfGFNmiLQN2X%2BGCgtp9kUduhIHRqhlJLMV6gVy7XYrYYFjH%2FAlGWro11YIyp3RNm0mz1D0pB9GAsvqbzBs7LP%2FxD4fjjI%2FYaj%2B&X-Amz-Signature=ca6346d48c78d0e6957800fe30aed39afb201b2459d268e812e5362461b1e585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PAA5EMI%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnb2emT39%2BknM%2BSHXPrc57yIykt0Q7GZ%2F7RwpOzkyBUAiBHI5qGSzei34962Y4a5nGYKeBNLUcM9kCvBN5ptJx7LSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMU63WdlGaEt4Uwx10KtwD3%2FmxWLrh%2B6Dj43VQcx4vO3K44MqOG30Djq2L76qkRURLa%2BXqcaC%2FMDMWppP1sOlQybceOF%2FOd%2FOGLQNwAVREF10IiL0d2j65k2M9vms7KfqX20a16vq%2FAg490vSRAYe3MM6ZE7igV2R8akAbSVMukQh1OFYulZAF3B%2BMhWVodqadUmfGWYOkZ7n%2FXhfSMQbLB%2FfwzdbWdCfYW2ELbg9Swkl6540xuaWucwyeTCvDoaERFtsPh0qZPimbjBwpLjNRKHae1vQcRZTMdhgurKzSqkjMmSnwmj2QKl5dnkHP9J8ZoKS2QENMA9gBZ9g6d3L2XGP2zVKwM8DFEbM4f%2FX338oi1n6Up2GzNQKJX6kwY70JwajknkEs8I2rAYn9%2FrYbnvhggaVR9g53H4MSJ0HBJnmptLj5IC%2FazXWRksEtug0lUasqKeFbE2SUPGbWrzOZOi19EWVce9AWi63onoqM8%2Fa7bE7vgNqnbqKBmaGgM4dNy52LCJjC8pjQczPK%2BiJOpVS%2FRbNNCEEijYl6vAXCKC%2Bxpgi%2Fnqai%2B4FtqkC2Td7MS2kSdsxmrKTCCYwFdKPo8oo9lQlGtvBG3WAw9Ck9j9hRRGkwzCgPyclvSTKjF%2BKEKdSLG1uE4YnOoYsw6e%2FlxwY6pgHzrvIsdnXBzLEnc%2FcEAnshryxjnzW78Rj%2BBK4ME0vxChLFNIkEhvzzE41ZZi9OltKmiHU8zjBtwBDgm99n4dbGDcXngxKu1frqI2I3BNxvYCaS3YFkWCpFIumGvJQWr3%2FOrl%2FiWr%2FvrMK23onJ%2FzVrYdSS2wD0iyIYhjqX8NdWOkz%2BWjZkNYuSGYOKAjVvIYcSS2nTG%2FZDzXi4N4K4iJK2rAkn8lkp&X-Amz-Signature=3050b4f16ad452c540d2407cfdb141188fcdeffaf772bf5cba1cd7c5be505102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEDH67SK%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9gb4HmGewdPWG%2B2mxwmA3XIFhmV45%2F%2BHjiMpLogwwyAiEA5L%2Fb0RBD84ubLjNlkILoBE44YuIr3xgr%2F7Ce9mHTvcUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCxEzb269Ek6FFV2ASrcA1DasrCCO%2F9K6meVMbog4CRRDEDJgtrCNn8znlDHvxOAwPwDFLou84oPkyiUu2LTkITbB%2BiprjsT0Oh97PYassMeH3JrFE0jvxfBnCfNFEr3xvdOJJNvN1ZRidulKQnelM37%2FogUlj5WGe7Vr2lbLaldeqxK%2BMpjGrXib%2BnJEJsX3T5sErEfVsny7%2BFw4xT0%2BTgsl%2B4waCVJVDZwY1S5xKXBcrF8w746v2EnKlHI4Y3OngwWmS9HL4GzXw9pA6TAzedUi64J10QtE49JmpB5L6ZsaAvzfIuWUdQxDIWmZn%2FPb9iPHJaybq3N2QUZ2szdOSVXhGYPFx5%2FXmWjBmSJvFjqeXWNfxt7gSpqYg8fgzfpsP5S9hGFxS6ElVVYlfmX4ERQ0%2FyRECX9dRCnNZNa%2Bwubf2VUwZTXIXE8K8wRIaPsEDQMnp3C9LJ0mnGdn4w8b4FAO65uX50E3XqFZoEgbfEQ%2FtZHqrh%2F0tdIa9HAm2UwtAv7glHaeRE4qrwig8RyjFfaXUcwg3i9YKwxhAZtox4K%2FAhoIp%2BHXwoscvfcYiCAOdmbBU1tctIva1vwNwf0DiIxZXMBXcGEnqv2ymQS%2Bpal7bYmionv4z4JFJpcysekmINgEZa3ZN4b4esEMInw5ccGOqUB1zN4g7a9vQ8oJIj2JxDHcL39hnU9Qv8vM%2BY%2BtRsXGmEYHRVTFVs7IWTpFFB4hvCjdLuhRjYuigJpKm7QSRVxE04vIrh9tm5WfrDFyCvdme%2FtWGHLUjRTrWegbDDRf5aiRrLFJl1YLhyhpoeefVAEl3DhWPl91KMnsp7S%2FZe4QNDfmDsivGn%2FxmDWBMGEmW6WflYAFgSCy4IlibSytAG0zccuRQfS&X-Amz-Signature=818673e133eab10d490b5d1ece3dc3244ddd305f9209584a14b67da4658e8455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXRER6ZQ%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx%2BWcf9BVNBBtOXsoHIU0UzpQ%2FwzK7rNxwHf8OxkjoWAIgLxS9964UPhPJsnK0sx%2F6gXeHUdZjAQxAkCv6SxP4UmIq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNkgqEPNpA2VpF9BHircA2PP%2BdsiPqoN3y%2FSWy7FtqKYKguMJ9gFhUHLsb1Ho7QY%2FXPGlvhF8NeIcYKrIDOg4%2BH9xMNs7Q24z4vo7i8%2BkA69HfgxNYyJGXFEnbKXtdPPPcn64zJ6TqRrDHXyMpkrYyWhyW4WLxn6QH1%2F7Fxm51HnFAMVjUsp3da%2B5nJ0YK5I6JczA9TYKjnmRhPWDgEe%2FQtIcw%2F7Oaea%2BD%2FEzZoLEsyWzo0wdDokYOomeJI3Qqh8neWsSZIA2RuyFocOS8k4qYErsKCiiF7NSApcLFVV6xbSKLhmmMtCbNA2qjEgm2v%2FB0JYyckiRUKqAh5ex9oW2HHMoKicPczlf9D1ARjmmHJEaFskd0SfDN4Vn9deF9Y0KVNIvCYoJK%2BEteX%2FM95CWH2By%2B7lE6BEBZdbGn2VjA2TiVRh3%2B4QB7gzGntThoDH5EjGMzMbW%2FlcOrb%2FJ7YsXXngQfPzi6%2Fu69L9JaaGldQ7inzx5sZUrvxeuhNjrMscRkh6CKYvTH7yo6nvC3OEL2PdFDLl8b%2FV9LLrVxW6JAsqQ2fqbto3bGFOfiR0NWfBhlPs4dDXaY7j3j7uyoaQf5AAUlHURQbStJpeY3uYoj8EjX2Rlbd0fwrkKLy6Uz0YDPAptkansmAZiaFLMP7w5ccGOqUBKmPLLlWlcsrsABMpIMqarR7xWO0U1KiiCtpm0fOjb1qxKCIVcM%2Bz9WEpQw1OuB8CzO6K7N7niV7Ed1HNpsivapQbLnBER04Q6w0%2FPeuVony1QeaSrjGt2x6E4qJIGx00u8YDtlmdI6LU1mQMWRdzFuAaQgl4ibkdHw%2FT%2F8qUh0UKe1DktcKOO2TaZpOMxZERGU1hGLKCMqQiE%2Bb00dIaXYEfJCkj&X-Amz-Signature=22b00e2c93e9cf367bf2ac21acc176248efd0a90682086da9a2d3dd35c15fc69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEDH67SK%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9gb4HmGewdPWG%2B2mxwmA3XIFhmV45%2F%2BHjiMpLogwwyAiEA5L%2Fb0RBD84ubLjNlkILoBE44YuIr3xgr%2F7Ce9mHTvcUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCxEzb269Ek6FFV2ASrcA1DasrCCO%2F9K6meVMbog4CRRDEDJgtrCNn8znlDHvxOAwPwDFLou84oPkyiUu2LTkITbB%2BiprjsT0Oh97PYassMeH3JrFE0jvxfBnCfNFEr3xvdOJJNvN1ZRidulKQnelM37%2FogUlj5WGe7Vr2lbLaldeqxK%2BMpjGrXib%2BnJEJsX3T5sErEfVsny7%2BFw4xT0%2BTgsl%2B4waCVJVDZwY1S5xKXBcrF8w746v2EnKlHI4Y3OngwWmS9HL4GzXw9pA6TAzedUi64J10QtE49JmpB5L6ZsaAvzfIuWUdQxDIWmZn%2FPb9iPHJaybq3N2QUZ2szdOSVXhGYPFx5%2FXmWjBmSJvFjqeXWNfxt7gSpqYg8fgzfpsP5S9hGFxS6ElVVYlfmX4ERQ0%2FyRECX9dRCnNZNa%2Bwubf2VUwZTXIXE8K8wRIaPsEDQMnp3C9LJ0mnGdn4w8b4FAO65uX50E3XqFZoEgbfEQ%2FtZHqrh%2F0tdIa9HAm2UwtAv7glHaeRE4qrwig8RyjFfaXUcwg3i9YKwxhAZtox4K%2FAhoIp%2BHXwoscvfcYiCAOdmbBU1tctIva1vwNwf0DiIxZXMBXcGEnqv2ymQS%2Bpal7bYmionv4z4JFJpcysekmINgEZa3ZN4b4esEMInw5ccGOqUB1zN4g7a9vQ8oJIj2JxDHcL39hnU9Qv8vM%2BY%2BtRsXGmEYHRVTFVs7IWTpFFB4hvCjdLuhRjYuigJpKm7QSRVxE04vIrh9tm5WfrDFyCvdme%2FtWGHLUjRTrWegbDDRf5aiRrLFJl1YLhyhpoeefVAEl3DhWPl91KMnsp7S%2FZe4QNDfmDsivGn%2FxmDWBMGEmW6WflYAFgSCy4IlibSytAG0zccuRQfS&X-Amz-Signature=9e7a7a3ff426aef70b3e2f8428f79d8a59a3bd59e03b640254652e22a0607ea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUUVORET%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsjaPN7f9R9Z%2FFJ37JaVpaBgUNqj0U2Lok20hgzPbYiQIgFDEJ2m%2FkQxtWtt4iZyoquTwWA%2Bsa1sxDYmidLKTX4MEq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDOWaPZNQ2djRRbvXzircAzbRzsnBTEpiGYQDZnGbtSxdKQhurE3cjDyF3Q0j9I4bJHOAQr2cOM9Z%2FLgHuUJR7H8njOG%2FJUxHbzp8oNKsR%2BAStVgFNRV%2FzIA02%2FquWyPe2qw%2BmGlrJLc8icq4HH89P2mtXX8PSCd6wR38pr1gM6Oh8guvFcSfVI1SJ%2BbO5HAYRe64yJL1uzonZ5ta32w%2FWwmxciJ6Em%2BV5rzqJNtokrXMQEt40ZVsSGn5A4neUcWaFLY6JF%2B1ThoW2ob1kUO4PBk%2BrgF63qb1TRVMXb3PEZWdEMB3mY8pl%2Bo2BMf2x3ZjjtBkjlvNfkIB88%2BZ5bPECeZPEakv1UIVd2CbKerDCK6QiFCQjTR3yVAVRCW4H7kswUzjZ8taE0v3b1TYf%2F%2BoPpKtscFjCUOS33SoRFDLWfcH5oI7HpyvO5LL821Fve8OoT5LoV3r1GmCiBcbu78FiCt0QUZRmG9VZvTQZOehyQbNpeoM8km5p8Z6d3wFwCPPXpbyftC4TmrM27MJxT5rfX9DyNVpzBiHLJu3YJYjbf7vzdfVRDcxSdWUtwXYocuJ9RYumJs7FZ0eZStC3E9%2B7RB3eSqIICdOsoYrKVFaYnyNA9uiJz1vCS9Uy7SQF1BuIPMmYkIKaMBRM9WwMLDx5ccGOqUBwOA%2Bzsii0qmfF55Dd9Guv1DqgMKUBrWJL6eTQMQxSfO2cbs6si%2FuazvnSwWeMgMIaBjjiDI81y3xiVXH8ZnIBSwqbsTACLb%2BojWpkoI34Hk7wKP9Kf3mv2rBmsMBk4yyPBI%2Fvq3pzhE2Yi4mPY0y36kq9QXAs55Zbx9fjUoyACfp6qzyt%2BKEYiR5preIeYvRE6Ob5Fs54bopBnF51IUUgfftDaNd&X-Amz-Signature=0bd176075342b8fa3076ec81ddd316f7d21ebc22a1cefe71ca6efb5d364787ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEDH67SK%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9gb4HmGewdPWG%2B2mxwmA3XIFhmV45%2F%2BHjiMpLogwwyAiEA5L%2Fb0RBD84ubLjNlkILoBE44YuIr3xgr%2F7Ce9mHTvcUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCxEzb269Ek6FFV2ASrcA1DasrCCO%2F9K6meVMbog4CRRDEDJgtrCNn8znlDHvxOAwPwDFLou84oPkyiUu2LTkITbB%2BiprjsT0Oh97PYassMeH3JrFE0jvxfBnCfNFEr3xvdOJJNvN1ZRidulKQnelM37%2FogUlj5WGe7Vr2lbLaldeqxK%2BMpjGrXib%2BnJEJsX3T5sErEfVsny7%2BFw4xT0%2BTgsl%2B4waCVJVDZwY1S5xKXBcrF8w746v2EnKlHI4Y3OngwWmS9HL4GzXw9pA6TAzedUi64J10QtE49JmpB5L6ZsaAvzfIuWUdQxDIWmZn%2FPb9iPHJaybq3N2QUZ2szdOSVXhGYPFx5%2FXmWjBmSJvFjqeXWNfxt7gSpqYg8fgzfpsP5S9hGFxS6ElVVYlfmX4ERQ0%2FyRECX9dRCnNZNa%2Bwubf2VUwZTXIXE8K8wRIaPsEDQMnp3C9LJ0mnGdn4w8b4FAO65uX50E3XqFZoEgbfEQ%2FtZHqrh%2F0tdIa9HAm2UwtAv7glHaeRE4qrwig8RyjFfaXUcwg3i9YKwxhAZtox4K%2FAhoIp%2BHXwoscvfcYiCAOdmbBU1tctIva1vwNwf0DiIxZXMBXcGEnqv2ymQS%2Bpal7bYmionv4z4JFJpcysekmINgEZa3ZN4b4esEMInw5ccGOqUB1zN4g7a9vQ8oJIj2JxDHcL39hnU9Qv8vM%2BY%2BtRsXGmEYHRVTFVs7IWTpFFB4hvCjdLuhRjYuigJpKm7QSRVxE04vIrh9tm5WfrDFyCvdme%2FtWGHLUjRTrWegbDDRf5aiRrLFJl1YLhyhpoeefVAEl3DhWPl91KMnsp7S%2FZe4QNDfmDsivGn%2FxmDWBMGEmW6WflYAFgSCy4IlibSytAG0zccuRQfS&X-Amz-Signature=25eb9b1d3385e545e577ce7ddadcea395d49262a9a6d24321f1542aff047a42a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKUTZEEO%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAoMheetV%2BXt31XcvfhbkQqNsoBdl%2FvFvYP%2B%2BfCYwvEDAiEAo6OpeDx%2FD8Dl0tjTgcY9sx5aDkSGUXYqBCzsnXR8f68q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDJTSHD1iVj9UAi6n3ircA%2Ft1ljrK4sQT3T3ULTgIp3t5xtvBgvtxAKxrVpwDDJ0ti%2BDQ9HPiQwVuKBj3LvAWj2ZNK%2BN0DDiM3u8nqiGieXsI%2BDI8qxWnaFXhwOiuYZOkShY9T84GAmOnZvm4TgyLdX%2BwSfRlP1hTk5HUsK2sTL0Q7ulin0nXjAkQdeLTOyNCrxwCNjuo2ifXeINj6Nn2ecFQTXpM6wfcoqyLZNFlTykVbQ8QVEIhBmtM%2FwJvKPqL0xVPMetVcz2V3kmqf%2F5JsH1xfd6cm4PTKHvIMM03eeIHPEP8%2BYvbMv9%2BBVsEPpJC%2FHpQu4uXJgezNkkSq9N%2ByqyaGaWFC6EpHk4R1bU7n%2F9MEpg8Ku8H1eefiCsB%2BvVFxMtxnDYW2FMUrO6EMPs6kPeyccchCXcsw3zALfi1Hdtw0ojYxqj10NQSreOjlf6N3KBZTKcNWPcGl7Ry5A5sdOiOI8Xs1OEcWea2qk%2BLr5XyGgiC9t6q%2FQvQ5GC7YN%2F0RA7zleaxFIxH2wIQFr2GObWWVIXcbuQ4rsqsUOW13dKLx43zJaPZ6%2FldAf3DHdBarkMwfKe%2BpIX3wNJ7cVcDZpGE4lI%2BJR615%2B9wjLjRWTvYW35bp8SwQe%2F45%2FT1j6RIYLhc5yrND7l8uHPGMLnw5ccGOqUBamgokdOflhnsGxEchqEwzTrNegMHkhKcDogBJLQ16WyNwqJqh7Gryf4t5lGeh%2BIY1DJi1Zd0geLqVQiXbxG1vFhS6rrWYP%2Blv117omGGiptxogiL%2FhTu%2Fe2OBdFvNGBDGWqcK8vHfFk6FrIb6%2FtwN2dQDdVizZDrybgRfR2sXN7ISUPaNrqGPpLAGXM7S0fA0yXHuILg2aQKY3FHyZW64dOW%2BEqA&X-Amz-Signature=64c524e67b52cf7d20bf63dec9344c0754563bebda5faf1f2b40ad419eadff03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEDH67SK%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9gb4HmGewdPWG%2B2mxwmA3XIFhmV45%2F%2BHjiMpLogwwyAiEA5L%2Fb0RBD84ubLjNlkILoBE44YuIr3xgr%2F7Ce9mHTvcUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCxEzb269Ek6FFV2ASrcA1DasrCCO%2F9K6meVMbog4CRRDEDJgtrCNn8znlDHvxOAwPwDFLou84oPkyiUu2LTkITbB%2BiprjsT0Oh97PYassMeH3JrFE0jvxfBnCfNFEr3xvdOJJNvN1ZRidulKQnelM37%2FogUlj5WGe7Vr2lbLaldeqxK%2BMpjGrXib%2BnJEJsX3T5sErEfVsny7%2BFw4xT0%2BTgsl%2B4waCVJVDZwY1S5xKXBcrF8w746v2EnKlHI4Y3OngwWmS9HL4GzXw9pA6TAzedUi64J10QtE49JmpB5L6ZsaAvzfIuWUdQxDIWmZn%2FPb9iPHJaybq3N2QUZ2szdOSVXhGYPFx5%2FXmWjBmSJvFjqeXWNfxt7gSpqYg8fgzfpsP5S9hGFxS6ElVVYlfmX4ERQ0%2FyRECX9dRCnNZNa%2Bwubf2VUwZTXIXE8K8wRIaPsEDQMnp3C9LJ0mnGdn4w8b4FAO65uX50E3XqFZoEgbfEQ%2FtZHqrh%2F0tdIa9HAm2UwtAv7glHaeRE4qrwig8RyjFfaXUcwg3i9YKwxhAZtox4K%2FAhoIp%2BHXwoscvfcYiCAOdmbBU1tctIva1vwNwf0DiIxZXMBXcGEnqv2ymQS%2Bpal7bYmionv4z4JFJpcysekmINgEZa3ZN4b4esEMInw5ccGOqUB1zN4g7a9vQ8oJIj2JxDHcL39hnU9Qv8vM%2BY%2BtRsXGmEYHRVTFVs7IWTpFFB4hvCjdLuhRjYuigJpKm7QSRVxE04vIrh9tm5WfrDFyCvdme%2FtWGHLUjRTrWegbDDRf5aiRrLFJl1YLhyhpoeefVAEl3DhWPl91KMnsp7S%2FZe4QNDfmDsivGn%2FxmDWBMGEmW6WflYAFgSCy4IlibSytAG0zccuRQfS&X-Amz-Signature=72bdb0d9160baa13c66df6e7be5d4a4791315b6292756a9d9c6b3a6fdc2f9f65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7WIWXNH%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdv6baRZztpq1KqAVA2VBCkZKLejRlKxTchU9Qm%2FAX1AIgbLRZnk13VIyQ1baV2Mbzh3Js0BmsbfvmLJsAetIj%2FlIq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDEHb7Dj09DkRnaVDWircAxBUVrsBnscph43nCDI2iU0zwNquxKCyiIXF1UQppaClNUVeLBVdpB%2FYgPKo0ljThPds3jDoBldERaUBco2w3QOw3wiJHK5%2B4QSH6Q7FGMs80W%2FN157A2m1JmTU9ivzn21XY6jmg3LZN%2F%2BIOjMSFs4Qve7A6nbUvn2XANyp6%2BhxkY6M1iKjfeCfIyZ7OMPZMJ55uQ0P0PIFf1A3yqJkK6HgC9eyDFiCadk84nlsN4xliHaDAzczOwCf6M0%2F6h%2FfJ%2FK4wp%2BWuLjBF12EeGT1q4jUXU%2FdbannOj9Z3ZQgLB8%2FJdUbNNtW4nBFQeLOYwal4N4%2FKX2q1VuYR6bWMrW0sXok%2BjhHq%2FeskjUm0Y9x9NByU%2FPyOOB2fU8Kup24neJTdmbqqeGLF%2ByrbzTHjrOcCg5RbfdrLZNLFvkiirio4cmzoyQpTy%2BI8xSRAvcByd8TSvzeZa1xk2byFFRs86tEyKcMWDI6%2BDXWsAiyMqSp9LBdqPm1wfpr2uIKe%2FXyv24FSXUpJRWYXZguoY82aBEyPj7xxyn5EXGXhfcQrq5Wwa5zwIjxAm7gpbjVdhDyX8yaFPq7GfoJdorRfy0SmUU55MLmyvZsnmMWEt8TWOCU6y%2BYvX6S4u7R8h6Jfz1PpMLDx5ccGOqUBm7ugn6TXAfzVFVkPvv5mhGleLqTQ6%2BX5jfSYERpBlirJXuCwPxNihNvatOHSP2e5ItHzBN0uXhnp5z4%2BaC0kDAypNnn8qamzFTXwa9Nlih3MbjqoaZzBvJcu4ISZKD0rt%2BVr6NF4QLE1cjMRe%2FmI57iHAPekBYV7nMrXGecbyGbc7WqOgZ17aaJBJcLL1MIGhxPjKt8JE9HIHJAYMO2nL1enAwsk&X-Amz-Signature=0de89b8558e304e4dda82afee554f2ddef0fd4630ab9812ecdd13892614c27d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEDH67SK%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9gb4HmGewdPWG%2B2mxwmA3XIFhmV45%2F%2BHjiMpLogwwyAiEA5L%2Fb0RBD84ubLjNlkILoBE44YuIr3xgr%2F7Ce9mHTvcUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCxEzb269Ek6FFV2ASrcA1DasrCCO%2F9K6meVMbog4CRRDEDJgtrCNn8znlDHvxOAwPwDFLou84oPkyiUu2LTkITbB%2BiprjsT0Oh97PYassMeH3JrFE0jvxfBnCfNFEr3xvdOJJNvN1ZRidulKQnelM37%2FogUlj5WGe7Vr2lbLaldeqxK%2BMpjGrXib%2BnJEJsX3T5sErEfVsny7%2BFw4xT0%2BTgsl%2B4waCVJVDZwY1S5xKXBcrF8w746v2EnKlHI4Y3OngwWmS9HL4GzXw9pA6TAzedUi64J10QtE49JmpB5L6ZsaAvzfIuWUdQxDIWmZn%2FPb9iPHJaybq3N2QUZ2szdOSVXhGYPFx5%2FXmWjBmSJvFjqeXWNfxt7gSpqYg8fgzfpsP5S9hGFxS6ElVVYlfmX4ERQ0%2FyRECX9dRCnNZNa%2Bwubf2VUwZTXIXE8K8wRIaPsEDQMnp3C9LJ0mnGdn4w8b4FAO65uX50E3XqFZoEgbfEQ%2FtZHqrh%2F0tdIa9HAm2UwtAv7glHaeRE4qrwig8RyjFfaXUcwg3i9YKwxhAZtox4K%2FAhoIp%2BHXwoscvfcYiCAOdmbBU1tctIva1vwNwf0DiIxZXMBXcGEnqv2ymQS%2Bpal7bYmionv4z4JFJpcysekmINgEZa3ZN4b4esEMInw5ccGOqUB1zN4g7a9vQ8oJIj2JxDHcL39hnU9Qv8vM%2BY%2BtRsXGmEYHRVTFVs7IWTpFFB4hvCjdLuhRjYuigJpKm7QSRVxE04vIrh9tm5WfrDFyCvdme%2FtWGHLUjRTrWegbDDRf5aiRrLFJl1YLhyhpoeefVAEl3DhWPl91KMnsp7S%2FZe4QNDfmDsivGn%2FxmDWBMGEmW6WflYAFgSCy4IlibSytAG0zccuRQfS&X-Amz-Signature=6f41c7ceae3a11281266989c8b664b9571f1363bd01df8cf0eb5d36c05fb5962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666YAPDVD%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoMNrQRggG7142%2Fy%2FJqYEG8N4wdCSQ39MgPZz0%2FlJE6AIgHe0TWJyJTahin2rPyEC%2F3YZ%2BMfoAqVKyApmp1SskmTUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLb7GE%2FRsYJ%2BqnhRESrcAxtUQ9zFICe0celJGHymz0tLDGKq1ndnFfKGBt5MFQDR85Us2LuQH773Xo%2B6auWDyQbPQTsftP2wcIiYFSisRKOzYxFeReXFptd%2Fe4iVnukffEcTR3tBXwl%2BjOUvKlp9AtGxGOIgU1EV4cdLV%2FBgsIsLRQuc%2FX3GdzfkY7ZKOJEt%2FDzjZX1Csovvov28C6z9ho9e%2BsouFoH8xPRunT5zbaEdoeIRS1ldbAZrHXjGoVU13hnMaWkp4nkcBZOc9TcGgecnuUATE6cPatgzpwwmxnbliEtlW4g%2BaiMLhFKMRgCXYzZYHWiL6ETzsp6DzS6ppVZfyDpxzPpDVTK1C1i8qeqNlhemWPfKDOw67iVA4jS9KXpqvduHuTuTa0%2BFjBL9K35ceRTzTjNVRefirF29wLxPWAQFzyviVyyVuou20ASOTlGUkrce%2FHCWBJVG9hwfYP9ThR1WxKf0g456mFMa4Z0j767zXUkXdh28YqlHy0b0TywaHtczAVzfjU%2FYR7nCDctg6L5vk9%2FRgu6AcJs55euXydPx243c%2FhMx462moJi%2B%2BN6TnsZByOjLNUJ%2FIOkrS17SfczJ40HEdxklCoHk3Ga7WKhcJBiG6%2FuIhuy7SmZALTI9xPK%2F3%2BnG2R5xMJTv5ccGOqUBFx4JdJ7GqEA86MCghQbD6pDnKCt0LIbPwED8Sg3EJC0DLIQr57H0gsH6gVYiWcbwg1bdYJadjQ0%2B%2BHkpUZ3ijnqKrvm%2BRvZC4LAzKhhG03zBIZEs%2FIRSvfns8gO08m3OnMqy%2FvpmG6HWvEeMRnE2N3oYwCak9NgcacHZGzvQt%2BclD%2B56RHgPFVmosHph8F1ucB2kLnmtvh9WkNI3UVZD4ndG7fUV&X-Amz-Signature=0e989f042064705c32dd2be5a7976d111c2f67acf4d82ac2e8fd1097cda479c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SLGLLR4%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfexDtRSwAtG1ag587oEdj3bpZSLhgR5gmxcCsh3AEGwIgZQ%2BoHClv5LisrEeiQNbmkAzLTd47psHIyrNgJDdPDuQq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDG0QyInRSaxblI%2F4QCrcA7ikdKr0bZY2FIJam7zawLt81QelQylR7ClXK6N%2BMZdh0J5e3CnOa2gxA71QsvEOd9hlgbY2OQa%2Fge1KlrfsjGKnzfrCq4af0o8KssaPcaIkV6sr9lnmI9pi4pfh7lZdegUKBlUaDlPu8pPsk4zjf5ruKJzn4E8yR3T9VphYu%2Bi0JIrj3cKPoAiHlankrkAkXSK9MPkZ6%2BJUlerM3ZGXq%2BEdD5dkt3Q41U3%2FC4VYe56TO0lqVQ9DAyBfjSumWrIWSdJi8iSlA5Va%2BGBHg44I%2FITnLnm3da7RrehK4djFIfQqqcMF%2Box9bXoHK1B6Pm3wM93gOR4rFkTlxbddosO5LmS%2Bbu6H7c3Ltp0chZ2y1p9FM6hThQWSrWjNSfDihT%2FolZf90HFje66leLpI0CDvvWfkU4H%2BtgVUfEMBIh3pWXZSnagUlwZo2COjVrbyaAbi7CFuu5ahA0QsIUY90O6dHFOBvcPIWVy4lVRtB1EUHm7nGu4IvNXpTU4F8SERCXNOTAKCyhhWLoK%2ByobRWb26NZPQahl5ydTX7KtwL9iWZW4HkXKS844HYQK4IjKua%2FJ0O2La3aCFiub9OhmmrS1DcljhAPWr17jlHKWDvzgKhjTa%2BjO7TY8VVd8YstEJMJTw5ccGOqUBM7LXSzbL8%2Bx7s215Y%2FzpWZmhwj5WGRwQMqiDXqlIs%2BI8Pd2Hld7CApL6S9aSQxhXCuIUq%2B77L39tRFQ6myl%2BBfGK6iPh59sx1umO7n3akbGuW4u540KTR7qVCf6Kbv0SQATRuQ3iNBOCZDs8KMKg9Nopf9M4IBrXlsxPRoCI%2F1Teva1NRBVxe5jn2baQ4rWfUrbYgoJRSYFCMaItcWC4lojEQvXx&X-Amz-Signature=a39cd5a1445489b23ae70cdb36fc9a4fb5fa1e09310d0cb33b28a68b2ef16284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653B5Q66E%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyIkwCzwC4TRlykkJ883I0ewsdMInQiJ%2F76ZDAHotn%2BAiEAuYqj902gQI9e%2Bw7eQU3FGenzxIH%2Fc4YZ4pFQ31lutUsq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCD0e7uAbhGf%2Fiy7nSrcA1c3RfUeFXDlbwUzHDnQAG8Fv1Zoxh4leuEkGxbt2K28AF5QjfjIye5RFTV0YJk8hO7CNSn4kTYOykHGMjF9Enhw26BHmvyd0T3Es300e%2BtS1rT6a8ErgYEhvHyUvumH0J%2FdKT6FF6hMSd2A95JRjdaO9LmBDhNzHdgpzHyATd80BTzZQb3IqDgJfUqJcJfdMy8mZrcDQVdYrVJGd6uykXleb2jdSqIS3tHarpYdDpL78avCPxQJzqbnMBzzQOeUQcKdQJYJmaEDV%2BM5N7qfBZoAwi00VrktydZuvyAOixvtA7lFW3vmaMjW7ojrKfohVHQ0RTlBbGkryEY8do%2B0yHFZ1dvESNKNuPddbfMATTy7pz66%2B7X%2BbUauyWuuVPSYHxRXkEyAFnRQoRPY%2FFO6mug7tfgdzKg7tzdDs2YcjYczh2LuffN0r8kuy%2BMP2W%2BKU1v5ps7y7ha7FxK%2F1%2FGqy3E5w7wqgWQbD%2FRDghNkqc1fPsGp0la%2Bsh29SrPBdSNJuAfV7ARkwAwO01Vvpo%2BgK8J5L924utueH0tTY1GDAy1p2VPKcAgZaHYU9%2FHrEa7dEHfM503FNMs7mZq6wlrqwkRkV3vRtRZUIedR7KRLr2j8%2Bzzcx%2BkW%2FjHToe93MJbw5ccGOqUBG%2BBG4i21bavx7Yjyp06sNXJyMmUAeRJaoiggwoBqaUBLu4YfW4np1wOyn4XbhYdIwYHqgazETu5tchL5sQXcQilrwc1I%2FFxTudJlc74hRr9eUM7Sag1hD82SJmuIk4A1tt5ws8XNxqAgT2R9WkskLr%2Fz8a32BfzeitmAV2Og0Mmrtv5%2F0RUxo6Y5k1uG50O7RaWQ%2FDVadciTX8dx%2BpASy5rui8vz&X-Amz-Signature=a32c2f2cd749302cc38c9add448db83b76bdcf68ef55ade8f2719dd66908939a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEDH67SK%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9gb4HmGewdPWG%2B2mxwmA3XIFhmV45%2F%2BHjiMpLogwwyAiEA5L%2Fb0RBD84ubLjNlkILoBE44YuIr3xgr%2F7Ce9mHTvcUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCxEzb269Ek6FFV2ASrcA1DasrCCO%2F9K6meVMbog4CRRDEDJgtrCNn8znlDHvxOAwPwDFLou84oPkyiUu2LTkITbB%2BiprjsT0Oh97PYassMeH3JrFE0jvxfBnCfNFEr3xvdOJJNvN1ZRidulKQnelM37%2FogUlj5WGe7Vr2lbLaldeqxK%2BMpjGrXib%2BnJEJsX3T5sErEfVsny7%2BFw4xT0%2BTgsl%2B4waCVJVDZwY1S5xKXBcrF8w746v2EnKlHI4Y3OngwWmS9HL4GzXw9pA6TAzedUi64J10QtE49JmpB5L6ZsaAvzfIuWUdQxDIWmZn%2FPb9iPHJaybq3N2QUZ2szdOSVXhGYPFx5%2FXmWjBmSJvFjqeXWNfxt7gSpqYg8fgzfpsP5S9hGFxS6ElVVYlfmX4ERQ0%2FyRECX9dRCnNZNa%2Bwubf2VUwZTXIXE8K8wRIaPsEDQMnp3C9LJ0mnGdn4w8b4FAO65uX50E3XqFZoEgbfEQ%2FtZHqrh%2F0tdIa9HAm2UwtAv7glHaeRE4qrwig8RyjFfaXUcwg3i9YKwxhAZtox4K%2FAhoIp%2BHXwoscvfcYiCAOdmbBU1tctIva1vwNwf0DiIxZXMBXcGEnqv2ymQS%2Bpal7bYmionv4z4JFJpcysekmINgEZa3ZN4b4esEMInw5ccGOqUB1zN4g7a9vQ8oJIj2JxDHcL39hnU9Qv8vM%2BY%2BtRsXGmEYHRVTFVs7IWTpFFB4hvCjdLuhRjYuigJpKm7QSRVxE04vIrh9tm5WfrDFyCvdme%2FtWGHLUjRTrWegbDDRf5aiRrLFJl1YLhyhpoeefVAEl3DhWPl91KMnsp7S%2FZe4QNDfmDsivGn%2FxmDWBMGEmW6WflYAFgSCy4IlibSytAG0zccuRQfS&X-Amz-Signature=8fb5db41ecc3a1394594c31c17579a78127a5751c98664d06889fb88e941c2b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEDH67SK%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9gb4HmGewdPWG%2B2mxwmA3XIFhmV45%2F%2BHjiMpLogwwyAiEA5L%2Fb0RBD84ubLjNlkILoBE44YuIr3xgr%2F7Ce9mHTvcUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCxEzb269Ek6FFV2ASrcA1DasrCCO%2F9K6meVMbog4CRRDEDJgtrCNn8znlDHvxOAwPwDFLou84oPkyiUu2LTkITbB%2BiprjsT0Oh97PYassMeH3JrFE0jvxfBnCfNFEr3xvdOJJNvN1ZRidulKQnelM37%2FogUlj5WGe7Vr2lbLaldeqxK%2BMpjGrXib%2BnJEJsX3T5sErEfVsny7%2BFw4xT0%2BTgsl%2B4waCVJVDZwY1S5xKXBcrF8w746v2EnKlHI4Y3OngwWmS9HL4GzXw9pA6TAzedUi64J10QtE49JmpB5L6ZsaAvzfIuWUdQxDIWmZn%2FPb9iPHJaybq3N2QUZ2szdOSVXhGYPFx5%2FXmWjBmSJvFjqeXWNfxt7gSpqYg8fgzfpsP5S9hGFxS6ElVVYlfmX4ERQ0%2FyRECX9dRCnNZNa%2Bwubf2VUwZTXIXE8K8wRIaPsEDQMnp3C9LJ0mnGdn4w8b4FAO65uX50E3XqFZoEgbfEQ%2FtZHqrh%2F0tdIa9HAm2UwtAv7glHaeRE4qrwig8RyjFfaXUcwg3i9YKwxhAZtox4K%2FAhoIp%2BHXwoscvfcYiCAOdmbBU1tctIva1vwNwf0DiIxZXMBXcGEnqv2ymQS%2Bpal7bYmionv4z4JFJpcysekmINgEZa3ZN4b4esEMInw5ccGOqUB1zN4g7a9vQ8oJIj2JxDHcL39hnU9Qv8vM%2BY%2BtRsXGmEYHRVTFVs7IWTpFFB4hvCjdLuhRjYuigJpKm7QSRVxE04vIrh9tm5WfrDFyCvdme%2FtWGHLUjRTrWegbDDRf5aiRrLFJl1YLhyhpoeefVAEl3DhWPl91KMnsp7S%2FZe4QNDfmDsivGn%2FxmDWBMGEmW6WflYAFgSCy4IlibSytAG0zccuRQfS&X-Amz-Signature=70478e63a38b8984b9fbf970aa3d0bc207dd1dd7359d2e84582eee8cb5cb40c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633HGUTP3%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpDDyzpz1QuqbxWKG2Izq3Pfmu6GxTTOnyWgC9V4iS5QIgZrmh%2FAHA4riM7OdoPy39O7ogKJZrZxLRa5ojC6rS4IAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDG2VBYXvL1BcMDnaTSrcA180L5KNydXHNTE3XG3hwZWao3DhqJyuxQ4mRoUhh%2Bpdi4T7hcKvcGBrY0TfjeTpRn8NSOIzNixNevstXNM%2FSjqkfYWUX47QbmQzGspB1Ieh9dWSmdZ8qcS%2FNB2p1P3Cmnfbezox%2FyFiSeOFE4QdnUD%2FiWpq%2ByCTvg2Wr597PegpkNB7%2BvBsGe%2FWyflBYVQa5APzcJunE%2FAKaR1cqkRs%2Fmwp9E4xOp9%2Byyb8yfaFLhfguVPpYUNKAAoCdBcGtTXGWnAHI8DRTruA0BFcx8AghaL3S9rKNaa1PwgeHxnNdAw6CIjgxls%2FbNipgSnJJNvqyPCpcB9I0Mfxh37UoDjerTuuL5h67YmdoeLGrXL3rNWFJ3xbHizMt4o%2Bni69JKwE0q8Ke8%2B%2BoKGo3TPChbxBYln%2Ba8PxOfcos1gefZtY7zw46Iqcfk8wn4FjKMy2Rvr1PPEvBDtlGMOtolSnSRl2Iw01d9MyZlBgBD3DwWrSvcGEXWLi4qatCLezdcugn31UXRDJZptTUQYaQv7OT9NC7y7TTkD%2Bfgi%2FhnKCPZnTYvOToU%2BTleTEU0mgB%2FUenGmsprLhtwfeNGSDv6%2B7dXLfQD5mupyJZFFmlyUvfRvQjynQeTdGHH4eOsFULMvOML%2Fv5ccGOqUBzzIIIKucFoKRXAvrlrJEWFAsCUM6hZSrvcQT0F2tzuBcAzZtB4nZsLTZZgQzBNKVl8rP6YqcNKUkHgW5HWMHJGi51RtFjmwgV6kpqkymbNEkhitVTvsiVG%2F6zNoVEc3WGjzKQhGBFbLsSfDyLMO2QLtm2%2FeGaluuD4YFgr7Rt%2F6ybhfHOln3P5F0HEwkHeGNkvKGJOnSBI2pfgOHF3kqnkWCyKIy&X-Amz-Signature=5b6031a4a007e001b32878a3bf6107b28682db50dc72044911d76d5112d9d401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633HGUTP3%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpDDyzpz1QuqbxWKG2Izq3Pfmu6GxTTOnyWgC9V4iS5QIgZrmh%2FAHA4riM7OdoPy39O7ogKJZrZxLRa5ojC6rS4IAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDG2VBYXvL1BcMDnaTSrcA180L5KNydXHNTE3XG3hwZWao3DhqJyuxQ4mRoUhh%2Bpdi4T7hcKvcGBrY0TfjeTpRn8NSOIzNixNevstXNM%2FSjqkfYWUX47QbmQzGspB1Ieh9dWSmdZ8qcS%2FNB2p1P3Cmnfbezox%2FyFiSeOFE4QdnUD%2FiWpq%2ByCTvg2Wr597PegpkNB7%2BvBsGe%2FWyflBYVQa5APzcJunE%2FAKaR1cqkRs%2Fmwp9E4xOp9%2Byyb8yfaFLhfguVPpYUNKAAoCdBcGtTXGWnAHI8DRTruA0BFcx8AghaL3S9rKNaa1PwgeHxnNdAw6CIjgxls%2FbNipgSnJJNvqyPCpcB9I0Mfxh37UoDjerTuuL5h67YmdoeLGrXL3rNWFJ3xbHizMt4o%2Bni69JKwE0q8Ke8%2B%2BoKGo3TPChbxBYln%2Ba8PxOfcos1gefZtY7zw46Iqcfk8wn4FjKMy2Rvr1PPEvBDtlGMOtolSnSRl2Iw01d9MyZlBgBD3DwWrSvcGEXWLi4qatCLezdcugn31UXRDJZptTUQYaQv7OT9NC7y7TTkD%2Bfgi%2FhnKCPZnTYvOToU%2BTleTEU0mgB%2FUenGmsprLhtwfeNGSDv6%2B7dXLfQD5mupyJZFFmlyUvfRvQjynQeTdGHH4eOsFULMvOML%2Fv5ccGOqUBzzIIIKucFoKRXAvrlrJEWFAsCUM6hZSrvcQT0F2tzuBcAzZtB4nZsLTZZgQzBNKVl8rP6YqcNKUkHgW5HWMHJGi51RtFjmwgV6kpqkymbNEkhitVTvsiVG%2F6zNoVEc3WGjzKQhGBFbLsSfDyLMO2QLtm2%2FeGaluuD4YFgr7Rt%2F6ybhfHOln3P5F0HEwkHeGNkvKGJOnSBI2pfgOHF3kqnkWCyKIy&X-Amz-Signature=65ea8a4a3f35aafac6eb19a613ed3304b2932c3b2c2ede7a979f65103402e907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633HGUTP3%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpDDyzpz1QuqbxWKG2Izq3Pfmu6GxTTOnyWgC9V4iS5QIgZrmh%2FAHA4riM7OdoPy39O7ogKJZrZxLRa5ojC6rS4IAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDG2VBYXvL1BcMDnaTSrcA180L5KNydXHNTE3XG3hwZWao3DhqJyuxQ4mRoUhh%2Bpdi4T7hcKvcGBrY0TfjeTpRn8NSOIzNixNevstXNM%2FSjqkfYWUX47QbmQzGspB1Ieh9dWSmdZ8qcS%2FNB2p1P3Cmnfbezox%2FyFiSeOFE4QdnUD%2FiWpq%2ByCTvg2Wr597PegpkNB7%2BvBsGe%2FWyflBYVQa5APzcJunE%2FAKaR1cqkRs%2Fmwp9E4xOp9%2Byyb8yfaFLhfguVPpYUNKAAoCdBcGtTXGWnAHI8DRTruA0BFcx8AghaL3S9rKNaa1PwgeHxnNdAw6CIjgxls%2FbNipgSnJJNvqyPCpcB9I0Mfxh37UoDjerTuuL5h67YmdoeLGrXL3rNWFJ3xbHizMt4o%2Bni69JKwE0q8Ke8%2B%2BoKGo3TPChbxBYln%2Ba8PxOfcos1gefZtY7zw46Iqcfk8wn4FjKMy2Rvr1PPEvBDtlGMOtolSnSRl2Iw01d9MyZlBgBD3DwWrSvcGEXWLi4qatCLezdcugn31UXRDJZptTUQYaQv7OT9NC7y7TTkD%2Bfgi%2FhnKCPZnTYvOToU%2BTleTEU0mgB%2FUenGmsprLhtwfeNGSDv6%2B7dXLfQD5mupyJZFFmlyUvfRvQjynQeTdGHH4eOsFULMvOML%2Fv5ccGOqUBzzIIIKucFoKRXAvrlrJEWFAsCUM6hZSrvcQT0F2tzuBcAzZtB4nZsLTZZgQzBNKVl8rP6YqcNKUkHgW5HWMHJGi51RtFjmwgV6kpqkymbNEkhitVTvsiVG%2F6zNoVEc3WGjzKQhGBFbLsSfDyLMO2QLtm2%2FeGaluuD4YFgr7Rt%2F6ybhfHOln3P5F0HEwkHeGNkvKGJOnSBI2pfgOHF3kqnkWCyKIy&X-Amz-Signature=8dae9199598f1fa5eef3db85ce2b154b5a5b109f435380824cbe6ece90d86ebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633HGUTP3%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpDDyzpz1QuqbxWKG2Izq3Pfmu6GxTTOnyWgC9V4iS5QIgZrmh%2FAHA4riM7OdoPy39O7ogKJZrZxLRa5ojC6rS4IAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDG2VBYXvL1BcMDnaTSrcA180L5KNydXHNTE3XG3hwZWao3DhqJyuxQ4mRoUhh%2Bpdi4T7hcKvcGBrY0TfjeTpRn8NSOIzNixNevstXNM%2FSjqkfYWUX47QbmQzGspB1Ieh9dWSmdZ8qcS%2FNB2p1P3Cmnfbezox%2FyFiSeOFE4QdnUD%2FiWpq%2ByCTvg2Wr597PegpkNB7%2BvBsGe%2FWyflBYVQa5APzcJunE%2FAKaR1cqkRs%2Fmwp9E4xOp9%2Byyb8yfaFLhfguVPpYUNKAAoCdBcGtTXGWnAHI8DRTruA0BFcx8AghaL3S9rKNaa1PwgeHxnNdAw6CIjgxls%2FbNipgSnJJNvqyPCpcB9I0Mfxh37UoDjerTuuL5h67YmdoeLGrXL3rNWFJ3xbHizMt4o%2Bni69JKwE0q8Ke8%2B%2BoKGo3TPChbxBYln%2Ba8PxOfcos1gefZtY7zw46Iqcfk8wn4FjKMy2Rvr1PPEvBDtlGMOtolSnSRl2Iw01d9MyZlBgBD3DwWrSvcGEXWLi4qatCLezdcugn31UXRDJZptTUQYaQv7OT9NC7y7TTkD%2Bfgi%2FhnKCPZnTYvOToU%2BTleTEU0mgB%2FUenGmsprLhtwfeNGSDv6%2B7dXLfQD5mupyJZFFmlyUvfRvQjynQeTdGHH4eOsFULMvOML%2Fv5ccGOqUBzzIIIKucFoKRXAvrlrJEWFAsCUM6hZSrvcQT0F2tzuBcAzZtB4nZsLTZZgQzBNKVl8rP6YqcNKUkHgW5HWMHJGi51RtFjmwgV6kpqkymbNEkhitVTvsiVG%2F6zNoVEc3WGjzKQhGBFbLsSfDyLMO2QLtm2%2FeGaluuD4YFgr7Rt%2F6ybhfHOln3P5F0HEwkHeGNkvKGJOnSBI2pfgOHF3kqnkWCyKIy&X-Amz-Signature=67ea9e7bd7f5fcb1d441dd710e161abe00006af767459ccf8fb1d245fee58f7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB7JBNNE%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYZn5Ni43VySpiYAEaeT8CKCUtFFm8ObZrKZBHbNFLrgIgMGFMy5OkVDT9cgYSzDQzy%2BCk3AIFMsmmgHKqnI9QVw4q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDPrdZv2uAqzz6lubiircA%2F65WXU2hJbONUBhK7Y0G4PXNC5Gizx3gumzakq%2BtlRxv7LOgrHjgdgHGpKJ0JDMbOhD6p8vhmliCMesivwtpLaI9yLggZC52xFqormcL9mBY7rPuUDwuwLp2szwdj0OcSxNOAtMzUX6pjpk5dQqd5stjNjqTSApWodkk%2FwRIp0y1MFDSaFKZTgBaiGP5P5%2F2advYNhb5JoKI51jbB282PWzArdcjmIqKL6F8V3A2PVs4ItLUBYze1hwnbwcpA%2BWIowxyPty7%2FM45ev26rBe9MQexcUGeuC36TNofvPxlUMqJTNh1pnHZqh35clGLByn8mBYu317R2LgNRE3ZwXup3M0w0Re8DLQrx%2FoIRXdIdmHkCMJf7RwmA%2FgpWJSaC1%2BacaH3a8b%2FRZj9APEnNjYFXTdaTLrBVYVkc95ZOUGG%2BEiGfSjU6NmkM%2BB9dgDWe%2BJdcUWcoVMJNAF5o9XopN4YXabmYJjO3Eq9n04yc1PupSThWkw88g794LMNAzZgR2HepVhL2TgcsQaiqFPTNfRfD86HnvVGnIcxFWrbVvKUsz8oSII7wWy5%2FNmReeeT6BFTBh834LyTkWF6i2dsAtH%2F7JQnXBu2LuU%2FDfoMjWb%2B1e%2B7DkCb%2F3b1aRL37xFMOvv5ccGOqUB90U0bCBxo07K1VVPdA%2BTFLpmHVewZiOepRGrwDfe3diF9Qsc1F6aNIQXSBj094dOi3ESnACS7g9hjrvggz9voKzROclMR3L5iFcLUeTRpCQm7l59wMf7CBdT3wFW6jAUMNGsv%2BBepgjxo20eoeiGpKWDzr%2BDBKmIc5cSiUh8WbmheQX2PYlDMEX%2Fbr2Bhl%2F8aKuY2WV8c%2F7SooBoeRkTvrBPiLXd&X-Amz-Signature=f4f9bd93077b71307a35d25d148f37b705411370a7c63bbc9dbf286e4c0168fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633HGUTP3%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpDDyzpz1QuqbxWKG2Izq3Pfmu6GxTTOnyWgC9V4iS5QIgZrmh%2FAHA4riM7OdoPy39O7ogKJZrZxLRa5ojC6rS4IAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDG2VBYXvL1BcMDnaTSrcA180L5KNydXHNTE3XG3hwZWao3DhqJyuxQ4mRoUhh%2Bpdi4T7hcKvcGBrY0TfjeTpRn8NSOIzNixNevstXNM%2FSjqkfYWUX47QbmQzGspB1Ieh9dWSmdZ8qcS%2FNB2p1P3Cmnfbezox%2FyFiSeOFE4QdnUD%2FiWpq%2ByCTvg2Wr597PegpkNB7%2BvBsGe%2FWyflBYVQa5APzcJunE%2FAKaR1cqkRs%2Fmwp9E4xOp9%2Byyb8yfaFLhfguVPpYUNKAAoCdBcGtTXGWnAHI8DRTruA0BFcx8AghaL3S9rKNaa1PwgeHxnNdAw6CIjgxls%2FbNipgSnJJNvqyPCpcB9I0Mfxh37UoDjerTuuL5h67YmdoeLGrXL3rNWFJ3xbHizMt4o%2Bni69JKwE0q8Ke8%2B%2BoKGo3TPChbxBYln%2Ba8PxOfcos1gefZtY7zw46Iqcfk8wn4FjKMy2Rvr1PPEvBDtlGMOtolSnSRl2Iw01d9MyZlBgBD3DwWrSvcGEXWLi4qatCLezdcugn31UXRDJZptTUQYaQv7OT9NC7y7TTkD%2Bfgi%2FhnKCPZnTYvOToU%2BTleTEU0mgB%2FUenGmsprLhtwfeNGSDv6%2B7dXLfQD5mupyJZFFmlyUvfRvQjynQeTdGHH4eOsFULMvOML%2Fv5ccGOqUBzzIIIKucFoKRXAvrlrJEWFAsCUM6hZSrvcQT0F2tzuBcAzZtB4nZsLTZZgQzBNKVl8rP6YqcNKUkHgW5HWMHJGi51RtFjmwgV6kpqkymbNEkhitVTvsiVG%2F6zNoVEc3WGjzKQhGBFbLsSfDyLMO2QLtm2%2FeGaluuD4YFgr7Rt%2F6ybhfHOln3P5F0HEwkHeGNkvKGJOnSBI2pfgOHF3kqnkWCyKIy&X-Amz-Signature=42cc491b54b340cf09794aff29a8aea19e273499400bc27f3d27b771eb62430b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633HGUTP3%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpDDyzpz1QuqbxWKG2Izq3Pfmu6GxTTOnyWgC9V4iS5QIgZrmh%2FAHA4riM7OdoPy39O7ogKJZrZxLRa5ojC6rS4IAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDG2VBYXvL1BcMDnaTSrcA180L5KNydXHNTE3XG3hwZWao3DhqJyuxQ4mRoUhh%2Bpdi4T7hcKvcGBrY0TfjeTpRn8NSOIzNixNevstXNM%2FSjqkfYWUX47QbmQzGspB1Ieh9dWSmdZ8qcS%2FNB2p1P3Cmnfbezox%2FyFiSeOFE4QdnUD%2FiWpq%2ByCTvg2Wr597PegpkNB7%2BvBsGe%2FWyflBYVQa5APzcJunE%2FAKaR1cqkRs%2Fmwp9E4xOp9%2Byyb8yfaFLhfguVPpYUNKAAoCdBcGtTXGWnAHI8DRTruA0BFcx8AghaL3S9rKNaa1PwgeHxnNdAw6CIjgxls%2FbNipgSnJJNvqyPCpcB9I0Mfxh37UoDjerTuuL5h67YmdoeLGrXL3rNWFJ3xbHizMt4o%2Bni69JKwE0q8Ke8%2B%2BoKGo3TPChbxBYln%2Ba8PxOfcos1gefZtY7zw46Iqcfk8wn4FjKMy2Rvr1PPEvBDtlGMOtolSnSRl2Iw01d9MyZlBgBD3DwWrSvcGEXWLi4qatCLezdcugn31UXRDJZptTUQYaQv7OT9NC7y7TTkD%2Bfgi%2FhnKCPZnTYvOToU%2BTleTEU0mgB%2FUenGmsprLhtwfeNGSDv6%2B7dXLfQD5mupyJZFFmlyUvfRvQjynQeTdGHH4eOsFULMvOML%2Fv5ccGOqUBzzIIIKucFoKRXAvrlrJEWFAsCUM6hZSrvcQT0F2tzuBcAzZtB4nZsLTZZgQzBNKVl8rP6YqcNKUkHgW5HWMHJGi51RtFjmwgV6kpqkymbNEkhitVTvsiVG%2F6zNoVEc3WGjzKQhGBFbLsSfDyLMO2QLtm2%2FeGaluuD4YFgr7Rt%2F6ybhfHOln3P5F0HEwkHeGNkvKGJOnSBI2pfgOHF3kqnkWCyKIy&X-Amz-Signature=987e2b164134e9d07dbde2f47bdb984f609393284ef665014a0f8e6ec4965aa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633HGUTP3%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpDDyzpz1QuqbxWKG2Izq3Pfmu6GxTTOnyWgC9V4iS5QIgZrmh%2FAHA4riM7OdoPy39O7ogKJZrZxLRa5ojC6rS4IAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDG2VBYXvL1BcMDnaTSrcA180L5KNydXHNTE3XG3hwZWao3DhqJyuxQ4mRoUhh%2Bpdi4T7hcKvcGBrY0TfjeTpRn8NSOIzNixNevstXNM%2FSjqkfYWUX47QbmQzGspB1Ieh9dWSmdZ8qcS%2FNB2p1P3Cmnfbezox%2FyFiSeOFE4QdnUD%2FiWpq%2ByCTvg2Wr597PegpkNB7%2BvBsGe%2FWyflBYVQa5APzcJunE%2FAKaR1cqkRs%2Fmwp9E4xOp9%2Byyb8yfaFLhfguVPpYUNKAAoCdBcGtTXGWnAHI8DRTruA0BFcx8AghaL3S9rKNaa1PwgeHxnNdAw6CIjgxls%2FbNipgSnJJNvqyPCpcB9I0Mfxh37UoDjerTuuL5h67YmdoeLGrXL3rNWFJ3xbHizMt4o%2Bni69JKwE0q8Ke8%2B%2BoKGo3TPChbxBYln%2Ba8PxOfcos1gefZtY7zw46Iqcfk8wn4FjKMy2Rvr1PPEvBDtlGMOtolSnSRl2Iw01d9MyZlBgBD3DwWrSvcGEXWLi4qatCLezdcugn31UXRDJZptTUQYaQv7OT9NC7y7TTkD%2Bfgi%2FhnKCPZnTYvOToU%2BTleTEU0mgB%2FUenGmsprLhtwfeNGSDv6%2B7dXLfQD5mupyJZFFmlyUvfRvQjynQeTdGHH4eOsFULMvOML%2Fv5ccGOqUBzzIIIKucFoKRXAvrlrJEWFAsCUM6hZSrvcQT0F2tzuBcAzZtB4nZsLTZZgQzBNKVl8rP6YqcNKUkHgW5HWMHJGi51RtFjmwgV6kpqkymbNEkhitVTvsiVG%2F6zNoVEc3WGjzKQhGBFbLsSfDyLMO2QLtm2%2FeGaluuD4YFgr7Rt%2F6ybhfHOln3P5F0HEwkHeGNkvKGJOnSBI2pfgOHF3kqnkWCyKIy&X-Amz-Signature=8dae9199598f1fa5eef3db85ce2b154b5a5b109f435380824cbe6ece90d86ebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633HGUTP3%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpDDyzpz1QuqbxWKG2Izq3Pfmu6GxTTOnyWgC9V4iS5QIgZrmh%2FAHA4riM7OdoPy39O7ogKJZrZxLRa5ojC6rS4IAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDG2VBYXvL1BcMDnaTSrcA180L5KNydXHNTE3XG3hwZWao3DhqJyuxQ4mRoUhh%2Bpdi4T7hcKvcGBrY0TfjeTpRn8NSOIzNixNevstXNM%2FSjqkfYWUX47QbmQzGspB1Ieh9dWSmdZ8qcS%2FNB2p1P3Cmnfbezox%2FyFiSeOFE4QdnUD%2FiWpq%2ByCTvg2Wr597PegpkNB7%2BvBsGe%2FWyflBYVQa5APzcJunE%2FAKaR1cqkRs%2Fmwp9E4xOp9%2Byyb8yfaFLhfguVPpYUNKAAoCdBcGtTXGWnAHI8DRTruA0BFcx8AghaL3S9rKNaa1PwgeHxnNdAw6CIjgxls%2FbNipgSnJJNvqyPCpcB9I0Mfxh37UoDjerTuuL5h67YmdoeLGrXL3rNWFJ3xbHizMt4o%2Bni69JKwE0q8Ke8%2B%2BoKGo3TPChbxBYln%2Ba8PxOfcos1gefZtY7zw46Iqcfk8wn4FjKMy2Rvr1PPEvBDtlGMOtolSnSRl2Iw01d9MyZlBgBD3DwWrSvcGEXWLi4qatCLezdcugn31UXRDJZptTUQYaQv7OT9NC7y7TTkD%2Bfgi%2FhnKCPZnTYvOToU%2BTleTEU0mgB%2FUenGmsprLhtwfeNGSDv6%2B7dXLfQD5mupyJZFFmlyUvfRvQjynQeTdGHH4eOsFULMvOML%2Fv5ccGOqUBzzIIIKucFoKRXAvrlrJEWFAsCUM6hZSrvcQT0F2tzuBcAzZtB4nZsLTZZgQzBNKVl8rP6YqcNKUkHgW5HWMHJGi51RtFjmwgV6kpqkymbNEkhitVTvsiVG%2F6zNoVEc3WGjzKQhGBFbLsSfDyLMO2QLtm2%2FeGaluuD4YFgr7Rt%2F6ybhfHOln3P5F0HEwkHeGNkvKGJOnSBI2pfgOHF3kqnkWCyKIy&X-Amz-Signature=b1735e0084a3111b6c47b720cf99975fe01f073a87cab762a76c9c8cd9d3d907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633HGUTP3%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpDDyzpz1QuqbxWKG2Izq3Pfmu6GxTTOnyWgC9V4iS5QIgZrmh%2FAHA4riM7OdoPy39O7ogKJZrZxLRa5ojC6rS4IAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDG2VBYXvL1BcMDnaTSrcA180L5KNydXHNTE3XG3hwZWao3DhqJyuxQ4mRoUhh%2Bpdi4T7hcKvcGBrY0TfjeTpRn8NSOIzNixNevstXNM%2FSjqkfYWUX47QbmQzGspB1Ieh9dWSmdZ8qcS%2FNB2p1P3Cmnfbezox%2FyFiSeOFE4QdnUD%2FiWpq%2ByCTvg2Wr597PegpkNB7%2BvBsGe%2FWyflBYVQa5APzcJunE%2FAKaR1cqkRs%2Fmwp9E4xOp9%2Byyb8yfaFLhfguVPpYUNKAAoCdBcGtTXGWnAHI8DRTruA0BFcx8AghaL3S9rKNaa1PwgeHxnNdAw6CIjgxls%2FbNipgSnJJNvqyPCpcB9I0Mfxh37UoDjerTuuL5h67YmdoeLGrXL3rNWFJ3xbHizMt4o%2Bni69JKwE0q8Ke8%2B%2BoKGo3TPChbxBYln%2Ba8PxOfcos1gefZtY7zw46Iqcfk8wn4FjKMy2Rvr1PPEvBDtlGMOtolSnSRl2Iw01d9MyZlBgBD3DwWrSvcGEXWLi4qatCLezdcugn31UXRDJZptTUQYaQv7OT9NC7y7TTkD%2Bfgi%2FhnKCPZnTYvOToU%2BTleTEU0mgB%2FUenGmsprLhtwfeNGSDv6%2B7dXLfQD5mupyJZFFmlyUvfRvQjynQeTdGHH4eOsFULMvOML%2Fv5ccGOqUBzzIIIKucFoKRXAvrlrJEWFAsCUM6hZSrvcQT0F2tzuBcAzZtB4nZsLTZZgQzBNKVl8rP6YqcNKUkHgW5HWMHJGi51RtFjmwgV6kpqkymbNEkhitVTvsiVG%2F6zNoVEc3WGjzKQhGBFbLsSfDyLMO2QLtm2%2FeGaluuD4YFgr7Rt%2F6ybhfHOln3P5F0HEwkHeGNkvKGJOnSBI2pfgOHF3kqnkWCyKIy&X-Amz-Signature=ee9e5bff2f9f7509f1ab5a3b7cfa78f6aef803af336f89bba8c28dc537bf6a82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633HGUTP3%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpDDyzpz1QuqbxWKG2Izq3Pfmu6GxTTOnyWgC9V4iS5QIgZrmh%2FAHA4riM7OdoPy39O7ogKJZrZxLRa5ojC6rS4IAq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDG2VBYXvL1BcMDnaTSrcA180L5KNydXHNTE3XG3hwZWao3DhqJyuxQ4mRoUhh%2Bpdi4T7hcKvcGBrY0TfjeTpRn8NSOIzNixNevstXNM%2FSjqkfYWUX47QbmQzGspB1Ieh9dWSmdZ8qcS%2FNB2p1P3Cmnfbezox%2FyFiSeOFE4QdnUD%2FiWpq%2ByCTvg2Wr597PegpkNB7%2BvBsGe%2FWyflBYVQa5APzcJunE%2FAKaR1cqkRs%2Fmwp9E4xOp9%2Byyb8yfaFLhfguVPpYUNKAAoCdBcGtTXGWnAHI8DRTruA0BFcx8AghaL3S9rKNaa1PwgeHxnNdAw6CIjgxls%2FbNipgSnJJNvqyPCpcB9I0Mfxh37UoDjerTuuL5h67YmdoeLGrXL3rNWFJ3xbHizMt4o%2Bni69JKwE0q8Ke8%2B%2BoKGo3TPChbxBYln%2Ba8PxOfcos1gefZtY7zw46Iqcfk8wn4FjKMy2Rvr1PPEvBDtlGMOtolSnSRl2Iw01d9MyZlBgBD3DwWrSvcGEXWLi4qatCLezdcugn31UXRDJZptTUQYaQv7OT9NC7y7TTkD%2Bfgi%2FhnKCPZnTYvOToU%2BTleTEU0mgB%2FUenGmsprLhtwfeNGSDv6%2B7dXLfQD5mupyJZFFmlyUvfRvQjynQeTdGHH4eOsFULMvOML%2Fv5ccGOqUBzzIIIKucFoKRXAvrlrJEWFAsCUM6hZSrvcQT0F2tzuBcAzZtB4nZsLTZZgQzBNKVl8rP6YqcNKUkHgW5HWMHJGi51RtFjmwgV6kpqkymbNEkhitVTvsiVG%2F6zNoVEc3WGjzKQhGBFbLsSfDyLMO2QLtm2%2FeGaluuD4YFgr7Rt%2F6ybhfHOln3P5F0HEwkHeGNkvKGJOnSBI2pfgOHF3kqnkWCyKIy&X-Amz-Signature=52d294dce642ee4b54badbe6e833d62dbb8541eb66aac586344396b3bb07d42d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


