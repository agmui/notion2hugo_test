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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MPAALN%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpRIJJZK2UCLXic6az2uagMFLelC85ao%2Fc2pECND3ByQIgRqnRMIY32Yl9HGkF%2FikiuHIHPOqUF5aenAqWX76GsOMqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfnwt558Yrq%2FMWufCrcA4U3oVPcJ7sTY2vWIJYf78MNs4uI1XlFbitxXqQa%2F2FWKmN5BU4ORrDen4jrkKgDSkZIvwn59%2FxXm%2FZdgcA1LMzCGaqOeFv3MxJrBAKzDJrX2CoecO%2BthtCGsyyLOn19qcCPJ0fkLsxN49eZumt%2BREvoOn2OVvwGRKL%2FdMjZ7lhDcmglDsvt0KeHZZpqC95ju6OYwglKG7jTnxBFBzY1So1etoz%2F8yqv6fHQg4BlCHZe8CB%2Bgv4FMud1NXErLGWHMi6pmkjjViI6A9dOTAs2%2F%2BwXMSHKquW94tHA38nVHI4L1W3Xu6uJyZWfy0by1LbcndsVERJp6TVjZ9O6w8Al4HTdrDSsYyv2my1QO3a%2Bxe3YRzgwfQbYGTgFTnbEnfC8FziLoHhpCM%2FxkaI33rjMvZq%2BquseqrrmDRHE9k8bINchdKBCqxjwx2ngKt6ZL4aqP%2FwEqRVU1iQaiLWyoIklVkismvNS61kAQ6bUqH3q4RzUfmbMVBotPcl5ao2%2BBW0NmZ098zqkrVt%2Fcrql%2BCkBev0TkbKKsx7lezvCfHGQFrzoZ19frc559wfp3BbHNAR1L%2FoXkwowHfYL1P5YSZ0C42lmPdF5GcNtMDFJzseM0RsJJ5828NZ2EcTOlUvhMJvIksoGOqUBmg5hgNNP54UIxRNvpTw0EbnNPeFLgYVu8eUPtyQpcHB6z228%2FWQ6zPXzdgLWR36tRhKd6%2FvHbmnfl8aJyA%2F7K%2BfU4tu4NZTB5miepbXBFhDe%2FzvExeIXLM16WtcEHqO%2FGv2mXFXlIyVT3Qcp14mruolUx%2FtStSVhAIpw6LB5SqU75ydiaUoZujcznfZJ4N5tokKWYFF9D12mzqX2K01chXKmOD9P&X-Amz-Signature=2f144df72cf3f9f70a1c1bd35d8c86d7dbd4d4261574fd23645d62a2c2ec6ac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MPAALN%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpRIJJZK2UCLXic6az2uagMFLelC85ao%2Fc2pECND3ByQIgRqnRMIY32Yl9HGkF%2FikiuHIHPOqUF5aenAqWX76GsOMqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfnwt558Yrq%2FMWufCrcA4U3oVPcJ7sTY2vWIJYf78MNs4uI1XlFbitxXqQa%2F2FWKmN5BU4ORrDen4jrkKgDSkZIvwn59%2FxXm%2FZdgcA1LMzCGaqOeFv3MxJrBAKzDJrX2CoecO%2BthtCGsyyLOn19qcCPJ0fkLsxN49eZumt%2BREvoOn2OVvwGRKL%2FdMjZ7lhDcmglDsvt0KeHZZpqC95ju6OYwglKG7jTnxBFBzY1So1etoz%2F8yqv6fHQg4BlCHZe8CB%2Bgv4FMud1NXErLGWHMi6pmkjjViI6A9dOTAs2%2F%2BwXMSHKquW94tHA38nVHI4L1W3Xu6uJyZWfy0by1LbcndsVERJp6TVjZ9O6w8Al4HTdrDSsYyv2my1QO3a%2Bxe3YRzgwfQbYGTgFTnbEnfC8FziLoHhpCM%2FxkaI33rjMvZq%2BquseqrrmDRHE9k8bINchdKBCqxjwx2ngKt6ZL4aqP%2FwEqRVU1iQaiLWyoIklVkismvNS61kAQ6bUqH3q4RzUfmbMVBotPcl5ao2%2BBW0NmZ098zqkrVt%2Fcrql%2BCkBev0TkbKKsx7lezvCfHGQFrzoZ19frc559wfp3BbHNAR1L%2FoXkwowHfYL1P5YSZ0C42lmPdF5GcNtMDFJzseM0RsJJ5828NZ2EcTOlUvhMJvIksoGOqUBmg5hgNNP54UIxRNvpTw0EbnNPeFLgYVu8eUPtyQpcHB6z228%2FWQ6zPXzdgLWR36tRhKd6%2FvHbmnfl8aJyA%2F7K%2BfU4tu4NZTB5miepbXBFhDe%2FzvExeIXLM16WtcEHqO%2FGv2mXFXlIyVT3Qcp14mruolUx%2FtStSVhAIpw6LB5SqU75ydiaUoZujcznfZJ4N5tokKWYFF9D12mzqX2K01chXKmOD9P&X-Amz-Signature=cb2282f38574c6c07ce7d2a098d958b349e23bbba76175730d8c94fb5f47aa1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MPAALN%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpRIJJZK2UCLXic6az2uagMFLelC85ao%2Fc2pECND3ByQIgRqnRMIY32Yl9HGkF%2FikiuHIHPOqUF5aenAqWX76GsOMqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfnwt558Yrq%2FMWufCrcA4U3oVPcJ7sTY2vWIJYf78MNs4uI1XlFbitxXqQa%2F2FWKmN5BU4ORrDen4jrkKgDSkZIvwn59%2FxXm%2FZdgcA1LMzCGaqOeFv3MxJrBAKzDJrX2CoecO%2BthtCGsyyLOn19qcCPJ0fkLsxN49eZumt%2BREvoOn2OVvwGRKL%2FdMjZ7lhDcmglDsvt0KeHZZpqC95ju6OYwglKG7jTnxBFBzY1So1etoz%2F8yqv6fHQg4BlCHZe8CB%2Bgv4FMud1NXErLGWHMi6pmkjjViI6A9dOTAs2%2F%2BwXMSHKquW94tHA38nVHI4L1W3Xu6uJyZWfy0by1LbcndsVERJp6TVjZ9O6w8Al4HTdrDSsYyv2my1QO3a%2Bxe3YRzgwfQbYGTgFTnbEnfC8FziLoHhpCM%2FxkaI33rjMvZq%2BquseqrrmDRHE9k8bINchdKBCqxjwx2ngKt6ZL4aqP%2FwEqRVU1iQaiLWyoIklVkismvNS61kAQ6bUqH3q4RzUfmbMVBotPcl5ao2%2BBW0NmZ098zqkrVt%2Fcrql%2BCkBev0TkbKKsx7lezvCfHGQFrzoZ19frc559wfp3BbHNAR1L%2FoXkwowHfYL1P5YSZ0C42lmPdF5GcNtMDFJzseM0RsJJ5828NZ2EcTOlUvhMJvIksoGOqUBmg5hgNNP54UIxRNvpTw0EbnNPeFLgYVu8eUPtyQpcHB6z228%2FWQ6zPXzdgLWR36tRhKd6%2FvHbmnfl8aJyA%2F7K%2BfU4tu4NZTB5miepbXBFhDe%2FzvExeIXLM16WtcEHqO%2FGv2mXFXlIyVT3Qcp14mruolUx%2FtStSVhAIpw6LB5SqU75ydiaUoZujcznfZJ4N5tokKWYFF9D12mzqX2K01chXKmOD9P&X-Amz-Signature=56819f55cd907dca39fc50d23af37e4957ec78e0544e473754246eb521da3a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MPAALN%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpRIJJZK2UCLXic6az2uagMFLelC85ao%2Fc2pECND3ByQIgRqnRMIY32Yl9HGkF%2FikiuHIHPOqUF5aenAqWX76GsOMqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfnwt558Yrq%2FMWufCrcA4U3oVPcJ7sTY2vWIJYf78MNs4uI1XlFbitxXqQa%2F2FWKmN5BU4ORrDen4jrkKgDSkZIvwn59%2FxXm%2FZdgcA1LMzCGaqOeFv3MxJrBAKzDJrX2CoecO%2BthtCGsyyLOn19qcCPJ0fkLsxN49eZumt%2BREvoOn2OVvwGRKL%2FdMjZ7lhDcmglDsvt0KeHZZpqC95ju6OYwglKG7jTnxBFBzY1So1etoz%2F8yqv6fHQg4BlCHZe8CB%2Bgv4FMud1NXErLGWHMi6pmkjjViI6A9dOTAs2%2F%2BwXMSHKquW94tHA38nVHI4L1W3Xu6uJyZWfy0by1LbcndsVERJp6TVjZ9O6w8Al4HTdrDSsYyv2my1QO3a%2Bxe3YRzgwfQbYGTgFTnbEnfC8FziLoHhpCM%2FxkaI33rjMvZq%2BquseqrrmDRHE9k8bINchdKBCqxjwx2ngKt6ZL4aqP%2FwEqRVU1iQaiLWyoIklVkismvNS61kAQ6bUqH3q4RzUfmbMVBotPcl5ao2%2BBW0NmZ098zqkrVt%2Fcrql%2BCkBev0TkbKKsx7lezvCfHGQFrzoZ19frc559wfp3BbHNAR1L%2FoXkwowHfYL1P5YSZ0C42lmPdF5GcNtMDFJzseM0RsJJ5828NZ2EcTOlUvhMJvIksoGOqUBmg5hgNNP54UIxRNvpTw0EbnNPeFLgYVu8eUPtyQpcHB6z228%2FWQ6zPXzdgLWR36tRhKd6%2FvHbmnfl8aJyA%2F7K%2BfU4tu4NZTB5miepbXBFhDe%2FzvExeIXLM16WtcEHqO%2FGv2mXFXlIyVT3Qcp14mruolUx%2FtStSVhAIpw6LB5SqU75ydiaUoZujcznfZJ4N5tokKWYFF9D12mzqX2K01chXKmOD9P&X-Amz-Signature=fb6224409b559a91884bfb23f38c0a69a8e598a94e904176f7c120eaf3d28f39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MPAALN%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpRIJJZK2UCLXic6az2uagMFLelC85ao%2Fc2pECND3ByQIgRqnRMIY32Yl9HGkF%2FikiuHIHPOqUF5aenAqWX76GsOMqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfnwt558Yrq%2FMWufCrcA4U3oVPcJ7sTY2vWIJYf78MNs4uI1XlFbitxXqQa%2F2FWKmN5BU4ORrDen4jrkKgDSkZIvwn59%2FxXm%2FZdgcA1LMzCGaqOeFv3MxJrBAKzDJrX2CoecO%2BthtCGsyyLOn19qcCPJ0fkLsxN49eZumt%2BREvoOn2OVvwGRKL%2FdMjZ7lhDcmglDsvt0KeHZZpqC95ju6OYwglKG7jTnxBFBzY1So1etoz%2F8yqv6fHQg4BlCHZe8CB%2Bgv4FMud1NXErLGWHMi6pmkjjViI6A9dOTAs2%2F%2BwXMSHKquW94tHA38nVHI4L1W3Xu6uJyZWfy0by1LbcndsVERJp6TVjZ9O6w8Al4HTdrDSsYyv2my1QO3a%2Bxe3YRzgwfQbYGTgFTnbEnfC8FziLoHhpCM%2FxkaI33rjMvZq%2BquseqrrmDRHE9k8bINchdKBCqxjwx2ngKt6ZL4aqP%2FwEqRVU1iQaiLWyoIklVkismvNS61kAQ6bUqH3q4RzUfmbMVBotPcl5ao2%2BBW0NmZ098zqkrVt%2Fcrql%2BCkBev0TkbKKsx7lezvCfHGQFrzoZ19frc559wfp3BbHNAR1L%2FoXkwowHfYL1P5YSZ0C42lmPdF5GcNtMDFJzseM0RsJJ5828NZ2EcTOlUvhMJvIksoGOqUBmg5hgNNP54UIxRNvpTw0EbnNPeFLgYVu8eUPtyQpcHB6z228%2FWQ6zPXzdgLWR36tRhKd6%2FvHbmnfl8aJyA%2F7K%2BfU4tu4NZTB5miepbXBFhDe%2FzvExeIXLM16WtcEHqO%2FGv2mXFXlIyVT3Qcp14mruolUx%2FtStSVhAIpw6LB5SqU75ydiaUoZujcznfZJ4N5tokKWYFF9D12mzqX2K01chXKmOD9P&X-Amz-Signature=087726641849ba00c39fe4a71b393059b36fbbf0715fded8e6dd5a65f003a202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MPAALN%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpRIJJZK2UCLXic6az2uagMFLelC85ao%2Fc2pECND3ByQIgRqnRMIY32Yl9HGkF%2FikiuHIHPOqUF5aenAqWX76GsOMqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfnwt558Yrq%2FMWufCrcA4U3oVPcJ7sTY2vWIJYf78MNs4uI1XlFbitxXqQa%2F2FWKmN5BU4ORrDen4jrkKgDSkZIvwn59%2FxXm%2FZdgcA1LMzCGaqOeFv3MxJrBAKzDJrX2CoecO%2BthtCGsyyLOn19qcCPJ0fkLsxN49eZumt%2BREvoOn2OVvwGRKL%2FdMjZ7lhDcmglDsvt0KeHZZpqC95ju6OYwglKG7jTnxBFBzY1So1etoz%2F8yqv6fHQg4BlCHZe8CB%2Bgv4FMud1NXErLGWHMi6pmkjjViI6A9dOTAs2%2F%2BwXMSHKquW94tHA38nVHI4L1W3Xu6uJyZWfy0by1LbcndsVERJp6TVjZ9O6w8Al4HTdrDSsYyv2my1QO3a%2Bxe3YRzgwfQbYGTgFTnbEnfC8FziLoHhpCM%2FxkaI33rjMvZq%2BquseqrrmDRHE9k8bINchdKBCqxjwx2ngKt6ZL4aqP%2FwEqRVU1iQaiLWyoIklVkismvNS61kAQ6bUqH3q4RzUfmbMVBotPcl5ao2%2BBW0NmZ098zqkrVt%2Fcrql%2BCkBev0TkbKKsx7lezvCfHGQFrzoZ19frc559wfp3BbHNAR1L%2FoXkwowHfYL1P5YSZ0C42lmPdF5GcNtMDFJzseM0RsJJ5828NZ2EcTOlUvhMJvIksoGOqUBmg5hgNNP54UIxRNvpTw0EbnNPeFLgYVu8eUPtyQpcHB6z228%2FWQ6zPXzdgLWR36tRhKd6%2FvHbmnfl8aJyA%2F7K%2BfU4tu4NZTB5miepbXBFhDe%2FzvExeIXLM16WtcEHqO%2FGv2mXFXlIyVT3Qcp14mruolUx%2FtStSVhAIpw6LB5SqU75ydiaUoZujcznfZJ4N5tokKWYFF9D12mzqX2K01chXKmOD9P&X-Amz-Signature=9569c9b9cc5409731291cd6d6c27cbd0bf529026ec156471f87a93aed3c011a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MPAALN%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpRIJJZK2UCLXic6az2uagMFLelC85ao%2Fc2pECND3ByQIgRqnRMIY32Yl9HGkF%2FikiuHIHPOqUF5aenAqWX76GsOMqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfnwt558Yrq%2FMWufCrcA4U3oVPcJ7sTY2vWIJYf78MNs4uI1XlFbitxXqQa%2F2FWKmN5BU4ORrDen4jrkKgDSkZIvwn59%2FxXm%2FZdgcA1LMzCGaqOeFv3MxJrBAKzDJrX2CoecO%2BthtCGsyyLOn19qcCPJ0fkLsxN49eZumt%2BREvoOn2OVvwGRKL%2FdMjZ7lhDcmglDsvt0KeHZZpqC95ju6OYwglKG7jTnxBFBzY1So1etoz%2F8yqv6fHQg4BlCHZe8CB%2Bgv4FMud1NXErLGWHMi6pmkjjViI6A9dOTAs2%2F%2BwXMSHKquW94tHA38nVHI4L1W3Xu6uJyZWfy0by1LbcndsVERJp6TVjZ9O6w8Al4HTdrDSsYyv2my1QO3a%2Bxe3YRzgwfQbYGTgFTnbEnfC8FziLoHhpCM%2FxkaI33rjMvZq%2BquseqrrmDRHE9k8bINchdKBCqxjwx2ngKt6ZL4aqP%2FwEqRVU1iQaiLWyoIklVkismvNS61kAQ6bUqH3q4RzUfmbMVBotPcl5ao2%2BBW0NmZ098zqkrVt%2Fcrql%2BCkBev0TkbKKsx7lezvCfHGQFrzoZ19frc559wfp3BbHNAR1L%2FoXkwowHfYL1P5YSZ0C42lmPdF5GcNtMDFJzseM0RsJJ5828NZ2EcTOlUvhMJvIksoGOqUBmg5hgNNP54UIxRNvpTw0EbnNPeFLgYVu8eUPtyQpcHB6z228%2FWQ6zPXzdgLWR36tRhKd6%2FvHbmnfl8aJyA%2F7K%2BfU4tu4NZTB5miepbXBFhDe%2FzvExeIXLM16WtcEHqO%2FGv2mXFXlIyVT3Qcp14mruolUx%2FtStSVhAIpw6LB5SqU75ydiaUoZujcznfZJ4N5tokKWYFF9D12mzqX2K01chXKmOD9P&X-Amz-Signature=ab06c0365992004de32538bbf9958cef0f8571ba5d39b8ac346380be3d5b0f41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MPAALN%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpRIJJZK2UCLXic6az2uagMFLelC85ao%2Fc2pECND3ByQIgRqnRMIY32Yl9HGkF%2FikiuHIHPOqUF5aenAqWX76GsOMqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfnwt558Yrq%2FMWufCrcA4U3oVPcJ7sTY2vWIJYf78MNs4uI1XlFbitxXqQa%2F2FWKmN5BU4ORrDen4jrkKgDSkZIvwn59%2FxXm%2FZdgcA1LMzCGaqOeFv3MxJrBAKzDJrX2CoecO%2BthtCGsyyLOn19qcCPJ0fkLsxN49eZumt%2BREvoOn2OVvwGRKL%2FdMjZ7lhDcmglDsvt0KeHZZpqC95ju6OYwglKG7jTnxBFBzY1So1etoz%2F8yqv6fHQg4BlCHZe8CB%2Bgv4FMud1NXErLGWHMi6pmkjjViI6A9dOTAs2%2F%2BwXMSHKquW94tHA38nVHI4L1W3Xu6uJyZWfy0by1LbcndsVERJp6TVjZ9O6w8Al4HTdrDSsYyv2my1QO3a%2Bxe3YRzgwfQbYGTgFTnbEnfC8FziLoHhpCM%2FxkaI33rjMvZq%2BquseqrrmDRHE9k8bINchdKBCqxjwx2ngKt6ZL4aqP%2FwEqRVU1iQaiLWyoIklVkismvNS61kAQ6bUqH3q4RzUfmbMVBotPcl5ao2%2BBW0NmZ098zqkrVt%2Fcrql%2BCkBev0TkbKKsx7lezvCfHGQFrzoZ19frc559wfp3BbHNAR1L%2FoXkwowHfYL1P5YSZ0C42lmPdF5GcNtMDFJzseM0RsJJ5828NZ2EcTOlUvhMJvIksoGOqUBmg5hgNNP54UIxRNvpTw0EbnNPeFLgYVu8eUPtyQpcHB6z228%2FWQ6zPXzdgLWR36tRhKd6%2FvHbmnfl8aJyA%2F7K%2BfU4tu4NZTB5miepbXBFhDe%2FzvExeIXLM16WtcEHqO%2FGv2mXFXlIyVT3Qcp14mruolUx%2FtStSVhAIpw6LB5SqU75ydiaUoZujcznfZJ4N5tokKWYFF9D12mzqX2K01chXKmOD9P&X-Amz-Signature=fed3bdcfc840f19bf6b21aa3306d8acd6932941cc7e4c10cf36e400fd1c7bfea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MPAALN%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpRIJJZK2UCLXic6az2uagMFLelC85ao%2Fc2pECND3ByQIgRqnRMIY32Yl9HGkF%2FikiuHIHPOqUF5aenAqWX76GsOMqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfnwt558Yrq%2FMWufCrcA4U3oVPcJ7sTY2vWIJYf78MNs4uI1XlFbitxXqQa%2F2FWKmN5BU4ORrDen4jrkKgDSkZIvwn59%2FxXm%2FZdgcA1LMzCGaqOeFv3MxJrBAKzDJrX2CoecO%2BthtCGsyyLOn19qcCPJ0fkLsxN49eZumt%2BREvoOn2OVvwGRKL%2FdMjZ7lhDcmglDsvt0KeHZZpqC95ju6OYwglKG7jTnxBFBzY1So1etoz%2F8yqv6fHQg4BlCHZe8CB%2Bgv4FMud1NXErLGWHMi6pmkjjViI6A9dOTAs2%2F%2BwXMSHKquW94tHA38nVHI4L1W3Xu6uJyZWfy0by1LbcndsVERJp6TVjZ9O6w8Al4HTdrDSsYyv2my1QO3a%2Bxe3YRzgwfQbYGTgFTnbEnfC8FziLoHhpCM%2FxkaI33rjMvZq%2BquseqrrmDRHE9k8bINchdKBCqxjwx2ngKt6ZL4aqP%2FwEqRVU1iQaiLWyoIklVkismvNS61kAQ6bUqH3q4RzUfmbMVBotPcl5ao2%2BBW0NmZ098zqkrVt%2Fcrql%2BCkBev0TkbKKsx7lezvCfHGQFrzoZ19frc559wfp3BbHNAR1L%2FoXkwowHfYL1P5YSZ0C42lmPdF5GcNtMDFJzseM0RsJJ5828NZ2EcTOlUvhMJvIksoGOqUBmg5hgNNP54UIxRNvpTw0EbnNPeFLgYVu8eUPtyQpcHB6z228%2FWQ6zPXzdgLWR36tRhKd6%2FvHbmnfl8aJyA%2F7K%2BfU4tu4NZTB5miepbXBFhDe%2FzvExeIXLM16WtcEHqO%2FGv2mXFXlIyVT3Qcp14mruolUx%2FtStSVhAIpw6LB5SqU75ydiaUoZujcznfZJ4N5tokKWYFF9D12mzqX2K01chXKmOD9P&X-Amz-Signature=6d6344fddfb4ba0dd848c12d91fb1f5719e5eb54b2f9f155f14927467f0bb2bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MPAALN%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpRIJJZK2UCLXic6az2uagMFLelC85ao%2Fc2pECND3ByQIgRqnRMIY32Yl9HGkF%2FikiuHIHPOqUF5aenAqWX76GsOMqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfnwt558Yrq%2FMWufCrcA4U3oVPcJ7sTY2vWIJYf78MNs4uI1XlFbitxXqQa%2F2FWKmN5BU4ORrDen4jrkKgDSkZIvwn59%2FxXm%2FZdgcA1LMzCGaqOeFv3MxJrBAKzDJrX2CoecO%2BthtCGsyyLOn19qcCPJ0fkLsxN49eZumt%2BREvoOn2OVvwGRKL%2FdMjZ7lhDcmglDsvt0KeHZZpqC95ju6OYwglKG7jTnxBFBzY1So1etoz%2F8yqv6fHQg4BlCHZe8CB%2Bgv4FMud1NXErLGWHMi6pmkjjViI6A9dOTAs2%2F%2BwXMSHKquW94tHA38nVHI4L1W3Xu6uJyZWfy0by1LbcndsVERJp6TVjZ9O6w8Al4HTdrDSsYyv2my1QO3a%2Bxe3YRzgwfQbYGTgFTnbEnfC8FziLoHhpCM%2FxkaI33rjMvZq%2BquseqrrmDRHE9k8bINchdKBCqxjwx2ngKt6ZL4aqP%2FwEqRVU1iQaiLWyoIklVkismvNS61kAQ6bUqH3q4RzUfmbMVBotPcl5ao2%2BBW0NmZ098zqkrVt%2Fcrql%2BCkBev0TkbKKsx7lezvCfHGQFrzoZ19frc559wfp3BbHNAR1L%2FoXkwowHfYL1P5YSZ0C42lmPdF5GcNtMDFJzseM0RsJJ5828NZ2EcTOlUvhMJvIksoGOqUBmg5hgNNP54UIxRNvpTw0EbnNPeFLgYVu8eUPtyQpcHB6z228%2FWQ6zPXzdgLWR36tRhKd6%2FvHbmnfl8aJyA%2F7K%2BfU4tu4NZTB5miepbXBFhDe%2FzvExeIXLM16WtcEHqO%2FGv2mXFXlIyVT3Qcp14mruolUx%2FtStSVhAIpw6LB5SqU75ydiaUoZujcznfZJ4N5tokKWYFF9D12mzqX2K01chXKmOD9P&X-Amz-Signature=f0cc4d819954454f5ba865619888c9d1c5991bc53ec98f731bc275d6a9fbf8c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBPASTHN%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK1o9nvRbXY0Skw4AMa73oQyq4PNHH5y09%2B608rH%2FxJwIhAKuCK40F1tLP1SDyazcmCrJgy%2Bekl580hZwadrEQlGVTKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsYyner3DJZBPMHAkq3ANWYd6BwAtzyCT0JCYyk88xuoiE%2FlLIoKdSjnEvS%2FIA3kG%2B%2BnY%2FVRXwBxDJNBdLzWaoVHCYjLAndXUDwIkRh1rIn3Ur1ZrOWZydc6RlJKWj1gNjMkiZjnu35%2B8JiRq6aFlL6QhIk%2Ba%2BNlPqffX30nMFC4qVc9S8y%2BaN43wNDypqnP3ah%2FvRmsld2e0UGZy%2BM0JO5F%2Be1eoMeskojak8dz3cheNAmqA9y35rU8AlVvOWIShK3ismW42cV1IMHclADL1NpmiHnlu8shOB8nqUcs16lt%2BST8ft%2Fi2IbYutAAjlBfXd8i7UU0UFHJ%2Fv5lxpuQjnxPoq%2FPNFrVpSv33WqmfhsmQ9gO4r27wNMpXCDlURHLN%2FqlxSvq%2BGRTIrUYdrhcRDqNo77oErSQfai7efcf%2F4P1NulFfFBYTPBXQWyDuqopP%2BlyRCcpcRaVP3e7fhfjng96S%2ForjRAEmwOCXF15HE%2FUa0TsFV6%2F75ssdig8ibex12Ww5OfkLdtFvcyPst8ZOIuNjYt8fFFEepEJ8dEqRRiXDUXGWS%2BpKudp0tSKfD6KlkD7Uy76Hz7tXRRPJWKm3Agu0Z7OaDklBHrqnhPLr8OBBXr0ezt2VPA31Vg816Tj3%2BF%2FKm13app1y6tjD%2Bx5LKBjqkAfs3W6izovrQvUc6RjWPcHvDELCt%2FIKrvs8ZaaWIRJefotMSN5%2BVcqWSDIINcp1dA9gSwkYxOYZoEqdwlY2APvnpCALwDiWDhOM8GAtL99Mbf3rq9l620f5aybhgeFAbYwv4hb4bnJ%2FH8QK8sZD00Ae5JF%2BO%2BKjxvxRZChZR%2BCVVTchzfMaf7H64vAiczlDFWrSFKmbWWfc72yxga9gESpyPyFRE&X-Amz-Signature=f0780af1c683ba072179fd3de31fa23aa33e541a00864f22601c45119413b5e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRMFMKJP%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIjVLySuGA8Z4%2Fvyk%2Bbm8P7HhaW6xEec3M5hyMTBboDAiApnr57DKpYBTygokTyBqaIyDfcpJ9fsfHEHqMV7T0GoyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA0Y2wLSQdubPmDd3KtwDeMK5PAqmnmZ3RReU%2FHPWByCcApP%2B1DZqrhYhXIqCVQcnQJSEyT8c1xx%2F5324zCR1nXMNAn6sGpLWAkqw%2B8Wxzg47rsN%2F2FCEBOCwAbQsqg%2BwUrQUKHO6gR2f5hxvMTUbm%2BXWw31XNM%2F4OzTQZ6ZSSDcvAt30TJedW%2FP7rGtIpGrw5ZhwNs5BcVvabkHLn5dRi%2FY2ftCI5ZINMlQObXJjpKSs4JTsOuG%2Bfcf3HpZaow5uL%2BoblWKVem5irWSA9oUT2f9rBucdl4Ap1mb1%2B6TtO2jYlyg3xljLQCoDAuuqpQ7jHeucQpxOVi7lqgjlNKu5keE%2FXD7%2BICo6Y2X8nAuv5cvYW4oXwVG5b5ta9cZ2hz8hI8KXVRkV1HvODtM0ssf7g4Hpfpv1gYsuhu8dKj9Ng7PrwFu29WWE0FJG%2Bm887T2qeRiNR6qTtpO2YzZreXlfzUo8Xk1dUQgcAubKW6Z9l4Y040vWOmtLEoLdOGAqYRoVpRlqPX8ON3sQz2LLHJMO74rLBCwcftfcIrI%2BcxVbtqlAf5b8BLZfrkdUQ4RO1qa7DjDX13%2FCigw4L97pyFvgMhIjQXc4aP2quGRhws8FLQV4pAEK6d8tCBtNq26MQQTKBYKn6ubCZbfmNcww%2BsaSygY6pgFHCHWbI8hNEpBGe9om6Rou3f%2BIF1Jil%2F6lJGXVvwULjbHn3lW1FAfH2t%2Bpa%2FDEndLK%2BG6YP88iNbS6ntUvaoRshAz%2BbX0cTEBho6Pc8VPgZKPymvj7KTs7H303AdNyhCdFZ8ZESq8ZmUXGgaKGS7n0rNP6Eml2dnhItauULzmfbbASiffYDFykQs%2F5JeR%2FYhHPSF7v3dag%2BrEbURrsPAk3ny6yOJwx&X-Amz-Signature=ff705c09611b56beb6ce3402cb86b7f8343f21028d2af967c27af9d070ce4350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673E34JLY%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkwU%2FAqzCOhfW2cauhN4qi7xXV%2Fb3J6kWD0FfhRndgKwIgGkLizdTIQhP3S5wPzuyJ1nlSMVYgUUichiJp77bgPdMqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMAnMtoA%2BnO05yq4CrcA3wX%2BBo0Qm%2Bp7HlpVA0cGJmSx597fj4l6c0kUmbivPJEDNJ%2BcMwx9ZrZbYCOuGaVBhuyI40C2FSOgbGVgnA%2Bru6zFqWXxk9o3GnQJapeCdQ2ubGc3yC5QdjROg8EWSbPrriKvxYVWXIOxOMvzAOqwOtmACt3KlzyFGAyywBqOQe%2BwcqrN0G12scKSINXF19lGebUdyO3anc69jOOO7Y2XPJon0hA1b8aIUS1Kt%2Bv1E%2FytkeTJqJlH4ko45BB3MeC1mHpvzjufChP7IwfPFVXhbeVDN8gIm0AOPaczjUW5E%2F8F1VlkZXWZQpNsqJMP1usz8iynJqRzXxy2k4SRt8ka75h1003CqKahTvrmG9MgB8AusR%2Bmhpzq%2Bm3SgLZwEpezuKgjlVHNE%2FadWNTjEzglAy2z2YJWEetY4cbkR8ayU48eNqVZYteelb2QTolJhNJr5uFXyZy%2Fv7gDc8lnEVhZ7%2BoXwLm2qtAYHGpNWTKaZ8AXVMDB20I0cIiw8IzTdkh%2Fs%2Fr4skETDw%2BBAoBis6Um8wlFYGKcUNY%2Bu0gNRXXRzlnIKLUiKsVX5hpY%2F1M3%2Bq1A36m9uofhEEp4kkYuf24RGoOCr%2Bd9bvVaRFCYqaW3ae%2B6mFABOai3UpZDndNMLnIksoGOqUBmjRmHUp%2BaC3uy2dHaGPRWEqwoH2itoPosQiOWs%2BbH7JP45snbuK22WqGw6PAYlT1gCajGvWXgvyUMLBXGoXFw%2BusL2TixftqV0b%2F7gkQ2oF3URvNjo7m8ForpTtwc0WfslD5mVZ2FugkMvVBiE4Nv1%2Fq1ylUdJpUbDuNtP1AFqsTNYtgLM1T9vvpCQeRQpjuAGeczQem7Mf0mAHEdmL%2BjLW3QlpI&X-Amz-Signature=f04a1a993ebc5c50e09d5e3e7d9bb1122705c5f12248736121b5159375d9d0a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MPAALN%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpRIJJZK2UCLXic6az2uagMFLelC85ao%2Fc2pECND3ByQIgRqnRMIY32Yl9HGkF%2FikiuHIHPOqUF5aenAqWX76GsOMqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfnwt558Yrq%2FMWufCrcA4U3oVPcJ7sTY2vWIJYf78MNs4uI1XlFbitxXqQa%2F2FWKmN5BU4ORrDen4jrkKgDSkZIvwn59%2FxXm%2FZdgcA1LMzCGaqOeFv3MxJrBAKzDJrX2CoecO%2BthtCGsyyLOn19qcCPJ0fkLsxN49eZumt%2BREvoOn2OVvwGRKL%2FdMjZ7lhDcmglDsvt0KeHZZpqC95ju6OYwglKG7jTnxBFBzY1So1etoz%2F8yqv6fHQg4BlCHZe8CB%2Bgv4FMud1NXErLGWHMi6pmkjjViI6A9dOTAs2%2F%2BwXMSHKquW94tHA38nVHI4L1W3Xu6uJyZWfy0by1LbcndsVERJp6TVjZ9O6w8Al4HTdrDSsYyv2my1QO3a%2Bxe3YRzgwfQbYGTgFTnbEnfC8FziLoHhpCM%2FxkaI33rjMvZq%2BquseqrrmDRHE9k8bINchdKBCqxjwx2ngKt6ZL4aqP%2FwEqRVU1iQaiLWyoIklVkismvNS61kAQ6bUqH3q4RzUfmbMVBotPcl5ao2%2BBW0NmZ098zqkrVt%2Fcrql%2BCkBev0TkbKKsx7lezvCfHGQFrzoZ19frc559wfp3BbHNAR1L%2FoXkwowHfYL1P5YSZ0C42lmPdF5GcNtMDFJzseM0RsJJ5828NZ2EcTOlUvhMJvIksoGOqUBmg5hgNNP54UIxRNvpTw0EbnNPeFLgYVu8eUPtyQpcHB6z228%2FWQ6zPXzdgLWR36tRhKd6%2FvHbmnfl8aJyA%2F7K%2BfU4tu4NZTB5miepbXBFhDe%2FzvExeIXLM16WtcEHqO%2FGv2mXFXlIyVT3Qcp14mruolUx%2FtStSVhAIpw6LB5SqU75ydiaUoZujcznfZJ4N5tokKWYFF9D12mzqX2K01chXKmOD9P&X-Amz-Signature=f80c86a16ff6684ffd89fc3484479857c85763818bd78a09d410430968269a7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBTMOOKN%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFfw1GUN0Dl1BZa4UlGFGY0UtHJJ%2F2ip5KUX%2FCt3m0uQIhAIrhaoydHXw2yf2yEstOcdsX7a8jZIfhQUqRiRQ6MQIlKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDk%2BtOPP8eT8eSQIsq3AOOxXamn%2BvgCML2ibJBJ4Lf5xLEAVb2x6xoNAKD76eC7zCNVk29GmmYiUET84ZOdmxOU%2Btx4NSzrmaMyLjOxpNiflgRjTSOKXJv5Lk0VxV7nkMgvuf4poI3ejWJoYUBXc7%2BW5%2BfVhBHstW8aB413z2CzymTRvQR4Kouk4veKG%2Fe0hsmyCqcO%2F7WlnfaLQmLjCfmu4vM4qgy8a8Kzu%2BHd0dzCA6%2F%2FacUNZzKc1YtrD%2BabDiMTqkiu7%2F4X7w5vECcX9nEo5vUXg4LpThBR3rqSz04lrSIP8nzjyhyVQ6lTxEHyJ1mW86%2BBMcen7jbrIpwg4E1BBBvj6aLS28xGCsBPt3sNYnrCRtHFn8PVIvwTB1x2U%2B1rWrHag33QpT7G0V%2Fk9jePOqZi5lUuByZmBt3DgjUa9QD3Eu5%2BYOn4oMmE%2FTcR71Pj1c3ceAiQdPIqe9O0dhcYHRavqUATkT0HNB83XOJefncG78NQ9%2FusWD78xbdUS88w5eHwN06ZYi9kF%2FtmoC5TnaOKptpXh7%2FmoBU4d24wqzpr8%2BCC47HkfdUcRGIVj4xvBgemiaPocg5wGKjW5VNHayicp1FD%2B41IDXuy04hrUSF4urXXvzCDOdDKZkEdUh9uPZYx2GhQwpO4DDWx5LKBjqkAc5HzvJb271niP4%2Fj%2BLEOhxHAgUWbqV0%2BnrV4pCXQfSpzdPwzeUN80mipbRD6kuvkZRggP6HIlxtOE0dtEvHEd4XrmHl4uMTmxr0kdm4O02Ydahu1PJPhGojMdRbw5DWWEguJo0kurRbUHX13xarbZroSNnVnq%2BbiQWzzY0nrsjuzzCOzsiwfTPcFhMxLSPJm40ZTcfWHHyN4lyA%2Bmhx5UqcI1wm&X-Amz-Signature=cfd041255aa42e8b5fe39b5bec7f124265185eb97e3cc69add078023eed3da19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MPAALN%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpRIJJZK2UCLXic6az2uagMFLelC85ao%2Fc2pECND3ByQIgRqnRMIY32Yl9HGkF%2FikiuHIHPOqUF5aenAqWX76GsOMqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfnwt558Yrq%2FMWufCrcA4U3oVPcJ7sTY2vWIJYf78MNs4uI1XlFbitxXqQa%2F2FWKmN5BU4ORrDen4jrkKgDSkZIvwn59%2FxXm%2FZdgcA1LMzCGaqOeFv3MxJrBAKzDJrX2CoecO%2BthtCGsyyLOn19qcCPJ0fkLsxN49eZumt%2BREvoOn2OVvwGRKL%2FdMjZ7lhDcmglDsvt0KeHZZpqC95ju6OYwglKG7jTnxBFBzY1So1etoz%2F8yqv6fHQg4BlCHZe8CB%2Bgv4FMud1NXErLGWHMi6pmkjjViI6A9dOTAs2%2F%2BwXMSHKquW94tHA38nVHI4L1W3Xu6uJyZWfy0by1LbcndsVERJp6TVjZ9O6w8Al4HTdrDSsYyv2my1QO3a%2Bxe3YRzgwfQbYGTgFTnbEnfC8FziLoHhpCM%2FxkaI33rjMvZq%2BquseqrrmDRHE9k8bINchdKBCqxjwx2ngKt6ZL4aqP%2FwEqRVU1iQaiLWyoIklVkismvNS61kAQ6bUqH3q4RzUfmbMVBotPcl5ao2%2BBW0NmZ098zqkrVt%2Fcrql%2BCkBev0TkbKKsx7lezvCfHGQFrzoZ19frc559wfp3BbHNAR1L%2FoXkwowHfYL1P5YSZ0C42lmPdF5GcNtMDFJzseM0RsJJ5828NZ2EcTOlUvhMJvIksoGOqUBmg5hgNNP54UIxRNvpTw0EbnNPeFLgYVu8eUPtyQpcHB6z228%2FWQ6zPXzdgLWR36tRhKd6%2FvHbmnfl8aJyA%2F7K%2BfU4tu4NZTB5miepbXBFhDe%2FzvExeIXLM16WtcEHqO%2FGv2mXFXlIyVT3Qcp14mruolUx%2FtStSVhAIpw6LB5SqU75ydiaUoZujcznfZJ4N5tokKWYFF9D12mzqX2K01chXKmOD9P&X-Amz-Signature=c9e6cfe4ed723e7bf9464c70c9367cc6a71f53ab8902a914933880990c8f42de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NWUNFVV%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1R34y7uTAHxVdS66Zs4UTOJKAC%2FCrNBZq4paU0bAyNAiEA71zazkrIbfxseTcvQZfcF0CKD7lSELiyzqLovuOusFgqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMwBEVfpZLQ8noFAircAwALpsPySXF9%2F8XqVWMPPR7Zaj0t0lNjFa%2FKM8bKB%2BQKluttu82V%2BSmCbb0Is3q57i8zFbOKf3Jf%2F5ySsRGTNsjO94Tv5zGHfOfn0UunK5nS0cnoHSXsyxVBmk3Qm8%2F8yz2qSPoSodN%2F1pkrff8kDK23pAShAK3gXS4XFw8jftZtngYFoq01nzGsmayikWhopM6guhMrAw0Cct9Ttx43fYV6hZ9YHdqnsnuC8DG45J9u6pZQRSt4Amzye3G8blkyUWqmkFwca51gJ7f3T8eHIAISSRJ6LBbHh9PMFweGEUCr0nFHCgVuafAm57arY2HAsquFtEPTRYnFaWy0EMeS0jP29ilOmAf95TjbGPjyASf%2FvlRXJyF8BUsLtuteKsLaHKZcbL3rsZUM%2BiF1%2FTdnkHtwmtstLGwQk%2FMwpbBS5HME4eYEb7ZvcAqQI5utO02BSEdwhzbVIUI0XLWPpP7OawHev401NvYW%2B4lKUIR%2B7XlhOHe0PPdEDK80J5xi1K1I4KP8NNIM1nwYUwOeTn%2BvD0Zmy%2BQqdUO98Ms9YzmJ8a%2FtvqoQQTHniIU35rt%2FpXbzckNyRLWZrkBw7dVxtSy4V%2BeOalXnREeSlV3fl4wJ3e6CJs6sC3%2Brkkfkg47ZMM%2FHksoGOqUBU6CP7K258pcUuoRYhvrumOk3KVIr%2FpQ6Y%2Fye4Rrl5EJC04YgEFvlLazTdFswzldqxMbqBf6kti7y1UHXT004qzuLY%2FbJwNHEjNQrAcBXVXhRJm%2FEjt8CVkuip%2FZXc0NmOexP9RbSeBL9g2XuY4K%2BaQuCN6bakMonuKj1FpV8eYrl60lqTzvqAV%2B%2BjmIJU%2BpeReOiwS838%2B%2Bi3mWqHWwVaspl1aKC&X-Amz-Signature=e8e46da18c13ec90164600b599505b63a3c7fd098fbaa3cca015c440308b76e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MPAALN%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpRIJJZK2UCLXic6az2uagMFLelC85ao%2Fc2pECND3ByQIgRqnRMIY32Yl9HGkF%2FikiuHIHPOqUF5aenAqWX76GsOMqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfnwt558Yrq%2FMWufCrcA4U3oVPcJ7sTY2vWIJYf78MNs4uI1XlFbitxXqQa%2F2FWKmN5BU4ORrDen4jrkKgDSkZIvwn59%2FxXm%2FZdgcA1LMzCGaqOeFv3MxJrBAKzDJrX2CoecO%2BthtCGsyyLOn19qcCPJ0fkLsxN49eZumt%2BREvoOn2OVvwGRKL%2FdMjZ7lhDcmglDsvt0KeHZZpqC95ju6OYwglKG7jTnxBFBzY1So1etoz%2F8yqv6fHQg4BlCHZe8CB%2Bgv4FMud1NXErLGWHMi6pmkjjViI6A9dOTAs2%2F%2BwXMSHKquW94tHA38nVHI4L1W3Xu6uJyZWfy0by1LbcndsVERJp6TVjZ9O6w8Al4HTdrDSsYyv2my1QO3a%2Bxe3YRzgwfQbYGTgFTnbEnfC8FziLoHhpCM%2FxkaI33rjMvZq%2BquseqrrmDRHE9k8bINchdKBCqxjwx2ngKt6ZL4aqP%2FwEqRVU1iQaiLWyoIklVkismvNS61kAQ6bUqH3q4RzUfmbMVBotPcl5ao2%2BBW0NmZ098zqkrVt%2Fcrql%2BCkBev0TkbKKsx7lezvCfHGQFrzoZ19frc559wfp3BbHNAR1L%2FoXkwowHfYL1P5YSZ0C42lmPdF5GcNtMDFJzseM0RsJJ5828NZ2EcTOlUvhMJvIksoGOqUBmg5hgNNP54UIxRNvpTw0EbnNPeFLgYVu8eUPtyQpcHB6z228%2FWQ6zPXzdgLWR36tRhKd6%2FvHbmnfl8aJyA%2F7K%2BfU4tu4NZTB5miepbXBFhDe%2FzvExeIXLM16WtcEHqO%2FGv2mXFXlIyVT3Qcp14mruolUx%2FtStSVhAIpw6LB5SqU75ydiaUoZujcznfZJ4N5tokKWYFF9D12mzqX2K01chXKmOD9P&X-Amz-Signature=0a49c1081709c34c0158a20b26a04581051dcff61f98050318a223756c8795cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UYO6QQH%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGu1hDnUjmFIhLRfUDUEaNfefM4E8dmUZd5H%2Fxn9TMi9AiEAx%2BwGXoDEFpi4nhlDQfdRRByYzs6PM8TITNQ4ygXp6jcqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtd0unrWOyFCyY2QCrcA%2B12ZBp4nrq1uCpC2yRBqZk4a2BQ1%2FZwqq%2Fob9IOsLGsyiw6o4WyZlJaCutQCiZKUhFw10EC6xCV3L94z1pTTvvpFz0%2Bpss6pmHbpgSkK0iYFRvVeyZ4PS52BHfDrzTj37xwzYw2f5x8%2FglHNJFYdBrdW4RRVr0y5Dn0itrYIdL64AZhr%2BDp4A47qdxxi58WHhpyVCUUO8p%2B5auzZ%2FNgzEUllu4X41avqH%2FoM2VokzcRTOr1Sks%2Ff5hzHVuzSqE0KBEsDa8E7E%2F2QIyLZz38EPrRQwK%2Fmge6igGYETlKS5VDE1E%2Fwz2URX1slBDBleKPZP7sCrFEHG%2BNrKCUToHmxB6izSy2eV%2B3vF%2B2qLAPyG49tKRDyCZInxxxzIA0vzO8ZWlAaS8hJqcOAFP5gKUCwX7i6tlwG1bF8q58V6wC28I4NK44jg8uyARnC6OHHGn96NUIQndVfEcWLQv7WsC%2Bj0tJf8ymSToa5tsvA0VdKfPhNxsEO9sVp7O7g2WWoPH9xTcDAUA7K%2Ba6ieQOPrZW609hrdEJypLF%2FnZarOegGaCCzheiJTq0wS0sNlBM8%2BD6xWf469eGzYgcOE7DCGZxQDxa9K703bQiCS8klbGLqz%2FyZ1b2G%2FioM67Wx1ODMMTIksoGOqUBiPPUQy%2FHOaH%2Fha%2F3%2FLeWvKiVNfyShxmR%2FXczbXCGcJP16ZJYANj4O7Hj1FJriSn4NBLPNegYYB17tkGTFRgz%2FOgobyT0DqHq%2F1liB5Y0YDp%2FkvMrlKR8h7WY0fIWd0kmpvgtSRq9K2ZtVIyluNhNtlVuiiJSGpckJJn9HwZiQaoVDfCeZxRfnxbMW1CLOE3IuObUO8lpto3PG%2Bzb8sI2N0kW6JAp&X-Amz-Signature=ef9c0d24147ae6ddd39cd4351b2c6fd5dec37723333f50757f449c97b0a29508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MPAALN%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpRIJJZK2UCLXic6az2uagMFLelC85ao%2Fc2pECND3ByQIgRqnRMIY32Yl9HGkF%2FikiuHIHPOqUF5aenAqWX76GsOMqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfnwt558Yrq%2FMWufCrcA4U3oVPcJ7sTY2vWIJYf78MNs4uI1XlFbitxXqQa%2F2FWKmN5BU4ORrDen4jrkKgDSkZIvwn59%2FxXm%2FZdgcA1LMzCGaqOeFv3MxJrBAKzDJrX2CoecO%2BthtCGsyyLOn19qcCPJ0fkLsxN49eZumt%2BREvoOn2OVvwGRKL%2FdMjZ7lhDcmglDsvt0KeHZZpqC95ju6OYwglKG7jTnxBFBzY1So1etoz%2F8yqv6fHQg4BlCHZe8CB%2Bgv4FMud1NXErLGWHMi6pmkjjViI6A9dOTAs2%2F%2BwXMSHKquW94tHA38nVHI4L1W3Xu6uJyZWfy0by1LbcndsVERJp6TVjZ9O6w8Al4HTdrDSsYyv2my1QO3a%2Bxe3YRzgwfQbYGTgFTnbEnfC8FziLoHhpCM%2FxkaI33rjMvZq%2BquseqrrmDRHE9k8bINchdKBCqxjwx2ngKt6ZL4aqP%2FwEqRVU1iQaiLWyoIklVkismvNS61kAQ6bUqH3q4RzUfmbMVBotPcl5ao2%2BBW0NmZ098zqkrVt%2Fcrql%2BCkBev0TkbKKsx7lezvCfHGQFrzoZ19frc559wfp3BbHNAR1L%2FoXkwowHfYL1P5YSZ0C42lmPdF5GcNtMDFJzseM0RsJJ5828NZ2EcTOlUvhMJvIksoGOqUBmg5hgNNP54UIxRNvpTw0EbnNPeFLgYVu8eUPtyQpcHB6z228%2FWQ6zPXzdgLWR36tRhKd6%2FvHbmnfl8aJyA%2F7K%2BfU4tu4NZTB5miepbXBFhDe%2FzvExeIXLM16WtcEHqO%2FGv2mXFXlIyVT3Qcp14mruolUx%2FtStSVhAIpw6LB5SqU75ydiaUoZujcznfZJ4N5tokKWYFF9D12mzqX2K01chXKmOD9P&X-Amz-Signature=3fd96107a48f7c1df202a141a8b1a0e66e6549b517406a9aa21d90d9200d81c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRMQXCQX%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrK7Laytrlu0LYPunpIPJj7poWEOgm%2FM8uxLAQENk3CAiAEoqdRZEagaQVj7HMJiUY80cnDD6Uf%2FrAuryfPZAbNpyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV0a2PYZDbXNy6ZkuKtwDsSC2aazI%2FzyZstubPvw95RyrDC5BTI2UeWps%2BIWjPbjV7alnOPMByi8PdiBe4BM7SDfp5zu8hTM5U5J0abSJiMY41brdifKqKud3WlMhQnhcUwWCVT8HLqAIyRLn4GH1jwwS71x2OXVUr2W5HyxWwttr2fYP8gvXLIsVk7sfFvEX5A%2BPBEdvHViezRoay97NKO3nJzOWn3kclUSgkmdvzArvDyU1QM2VRWnfktOoZKu17J%2Fe0zRtxG%2ByP0xw%2FcJhAI1nC4SJQDYmnjyQI3FgnFnbFEGrjAaOPS4DGciOcEaPNBrR9wVozJcIwXfttXNavZ%2B2UnThjxtEwKhT3wA8aQ0n0jPv3LGH3UBg%2FyvnbJiyGQNKXeEDFnLil%2F1TfOJPkdRZ8vb9MGNaS%2BWjiT%2F%2F1MgDOG7ig4364aPl9dR8e04P7zvJ1yJV521IhNV5WaU6zwYTBVuIRZGGXQzozljE%2BDgZEh2aPyMZI9UScaLOym%2BIbzlFKRyYZVZ8WjcPfc9zUxA5OqSpQ7WxgeLj1omOFRyOzPjhfxw6GVZLUwhvhqLaIl2cTjlZIEfIQiUjfgHNaFCcbVz0O6DLccPhHcP4JStDmzNOyDkPCdsprdpBT411OIS61wTuuvh6ZYAwvMeSygY6pgGuqo0vG5W98o3hKydFpot68fBasQO4I0KJdqiwXVmbvb4p8VcHh3Hy7pKw%2F3w2zOYm8YF1Q7w3T3tcFZCFkFUl6hnUzztCRhqiurOE8%2FogCj7d4wZPUFHvuGPwW4nRnv3G954s7JzaXOm0HO5C9j6Ejgjw9ekZYAi7ApCNDoYj9oyJO0xyzpdbF9akFXw0QLHTL2Q6t2xymCGBQc71RpJFr5uVwKfa&X-Amz-Signature=ef4f5a97a676ccebd6c95c90c0cb1be1b9de3ee4b8bf3dce1497471bf2bc9de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MPAALN%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpRIJJZK2UCLXic6az2uagMFLelC85ao%2Fc2pECND3ByQIgRqnRMIY32Yl9HGkF%2FikiuHIHPOqUF5aenAqWX76GsOMqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfnwt558Yrq%2FMWufCrcA4U3oVPcJ7sTY2vWIJYf78MNs4uI1XlFbitxXqQa%2F2FWKmN5BU4ORrDen4jrkKgDSkZIvwn59%2FxXm%2FZdgcA1LMzCGaqOeFv3MxJrBAKzDJrX2CoecO%2BthtCGsyyLOn19qcCPJ0fkLsxN49eZumt%2BREvoOn2OVvwGRKL%2FdMjZ7lhDcmglDsvt0KeHZZpqC95ju6OYwglKG7jTnxBFBzY1So1etoz%2F8yqv6fHQg4BlCHZe8CB%2Bgv4FMud1NXErLGWHMi6pmkjjViI6A9dOTAs2%2F%2BwXMSHKquW94tHA38nVHI4L1W3Xu6uJyZWfy0by1LbcndsVERJp6TVjZ9O6w8Al4HTdrDSsYyv2my1QO3a%2Bxe3YRzgwfQbYGTgFTnbEnfC8FziLoHhpCM%2FxkaI33rjMvZq%2BquseqrrmDRHE9k8bINchdKBCqxjwx2ngKt6ZL4aqP%2FwEqRVU1iQaiLWyoIklVkismvNS61kAQ6bUqH3q4RzUfmbMVBotPcl5ao2%2BBW0NmZ098zqkrVt%2Fcrql%2BCkBev0TkbKKsx7lezvCfHGQFrzoZ19frc559wfp3BbHNAR1L%2FoXkwowHfYL1P5YSZ0C42lmPdF5GcNtMDFJzseM0RsJJ5828NZ2EcTOlUvhMJvIksoGOqUBmg5hgNNP54UIxRNvpTw0EbnNPeFLgYVu8eUPtyQpcHB6z228%2FWQ6zPXzdgLWR36tRhKd6%2FvHbmnfl8aJyA%2F7K%2BfU4tu4NZTB5miepbXBFhDe%2FzvExeIXLM16WtcEHqO%2FGv2mXFXlIyVT3Qcp14mruolUx%2FtStSVhAIpw6LB5SqU75ydiaUoZujcznfZJ4N5tokKWYFF9D12mzqX2K01chXKmOD9P&X-Amz-Signature=b5acf2a2bc2894d67922bc0853f69856613f438ae98a70e7950e9997ed63853c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L7CBPU7%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhNZ5dtSoXjGVVBLUXwGAOMwg2m2Lk8UI2qCbPmqjmxQIhAK4F9Js2KG6NC8azDPaT9AlHJYFkFw4%2BI2aiNFBQ5ZYyKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzl5%2BCSRMru%2Fc94%2Bzcq3AMNbcgftVEfqIH9UewIPDyTwL%2B1qqhEiDEAsGlplSL89HJ2y5pR7fa7EaLy6ZMTYR20zyA25jAeYFAg09f1AxDurgftyXMSHw0BYL9PH4zFsRI5HzcMTyWyfn%2BPc5EpKeaTa%2FiESN9wvl9fdNMrfKIOFpZDCZiYVRKTMzz6NFdjifTq2FVhgIl6ont1gKl35tlehQyxxlf1AVaSz3dqEuFbB3ZkabsbN%2BdgdXWqyjpc4mKulo8jowcFi65o8pIsA0iSomvoBB%2BmvtR7T5Ds8KKEL%2Bow29o8AXsB8kGSN6BWa4mmIRlcbClZ%2FTb5J0iefrqHu7Vpqvlq8h3etoCaDvgBlAaCG32f%2FNDP%2Fwq7jL31KWPoC3%2F18FE8dQD7WwqJevQ%2BZ6UKLQCcQXgZQip0p2d%2F1UwKMQTfPguD55BQu6LB6TK8YAl2RpschYePWAX79uJEhtqxW8bqQ3kGPoH%2BD04m4FYMsMemv1Gd15yh2CvvIYPVNDx8cMIZ3dFDLxHpptK8SORr9Mqp%2FlS4NCGhOI5JFBYZVVcW9fzKRZzOF6yNJJl6Dv6Gh3ecf5lekrQH5A%2Bpre8R19nT%2F3VguI8ffHf77kGCD03qnF5mf65kEXQrxO8L%2B%2BaDHem3vhcC%2FTCBx5LKBjqkAcivwg7X5yy50wXL6IVHb8ovN%2BEP0hlnHpNl3Tpdrvct52MzCuB4ngBhye3mtlE2CX%2F9vD%2BMGIV4QIWtK4NpzqOW1C3SzHy3Q7BdA7yZ1CCQwIlItVmrxGZib7Ku4bSw0%2BifBdHBFUEJ6mrC1ZVX%2FJe%2FkWELAgsZ6CZ4j3nnFahLg4xDTXUuG5jPzZ6HdM9WZnw%2Bej6C5kArim2%2BUbYVrowKY%2B4y&X-Amz-Signature=e09cca2d8a77ce60e8df363827fbc5687ca33c4ca1d8f780d1a6be36a7fdc06b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNRYLUP4%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPEcFrRACFcUVeCoMWjX87bPp71okm7GAuYD5b9cep9gIgJXSZ71E27PjEnLwee5cHx3KiFM9dqyTGohBO0FbTgVEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBWEz96En%2B%2BIKJ8kSrcA0pUmuvvylkeLrc8ew6r10u6qldjkQZkyLkQHHoUhxMKySuVDlLK3azRaN5ahC%2FLXLLtfLHZr%2FIY8is04s31K0aJSgf6q%2B5iu3vnKUHv9fbjXnm%2FAd%2Bavf9yzSNswleLyCHmCW%2Foh2j49D9djvSf8AeMXvYZQIlf9SA4jzbkc4jwdzMWxzaJtCBsIzYBqupqo52eLTdz0xQOrYVWJB3QxiNbhD20QoPyQq52WKFU%2Bdb3hZNkDv9ZPcNpZAVXfjsZFrN42a3uBR62mCgBsgzatK2crbEP43ZbJesRKgAEnGqeGgLqBguEmyuHIBg%2BQdAR0tSiK0XbIAtkFZfKFgKZBU0C1JrN0Bso6o1WTCDNUkhznwPCcipH6daKe4fDPJ3Wj8rE588O5cBAQaZgdpW7OwbRDjzZuZiR2NUhdHiojVuzTc3Mtdq7PD9f1BtkLs0nn6QrPs0W8frdGSSq7WZ%2Fp3O1sAKN%2Fmv44ZxOzOLkZS5lAzRWPh8zvecI1uRa%2Bn37KS0WyiQfr6%2FWMChX8wAXnTuV9cegJbK9nWAKr%2B2kRawTd5E%2BQRhWVLgHibrTP8STYUCxQyhmYbDUGyEVGTBuzD%2BIn7AcPzWbuVKMokxJm7zXcWjOUwOJayTiKawFMJDIksoGOqUBJL8S3URjaN0g0jjkp1%2FQ7jTqi2%2FE2OyS%2FMRBdwLXF97jIJAM%2B8IiE1DILyXm2xuYOep8pXV5GfvUnTwuyUhwcQbIHwMXxzWeNZFIQaX6hGxHui8d8X%2FL72xEL0mcP4SwwgjuWTcW8Aj8BsiRrnOLaszZoaF0K9MiwpFehpZX%2FtPWvUl9KJiQIrNIphDxgU1DP%2Bx4h4GhdH8APwWhxU48hjZvaCXI&X-Amz-Signature=7e7e9214d695a6b8ce89a82d80c6ad4144b93bff0706cdfcf668b8c12e0c78d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDENAMDJ%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxjr4RTSNFJ9M6hr6rCHhNoWqViQyUf%2BpYmXxrlkDu2AiEA1dld83i2lrxe18tO4qFBeSt8OdkyzL%2BNETt0JkV9yKoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCpJsmcvatvgroY%2FzCrcA9CzjFmsiPZV6sC4whnzSXFuGMnMOTert0NMteXhumL%2FSUYrv%2BE%2BgOe80wMJFuRWIAZ1qP3WF4CojKJtYjwxSHPlSGDOOWXmOpsiIIbDP4cozc%2FBQbhDSHWuR%2BEUbuFXjLmmMUws9x8l1DKUdJoAkHpAk02rFGgrmR4AQdFRQEUYjJ9%2B5%2BY%2FP9YQllp3Vc4ELLqKv88TX%2BQna1seZwcconKn2Wd6x7GKwCtEjnDEm558QejiEiOsdqAfPfYIdLaXDGENrOPMTPa2MN2lhnQGaJuAJ7FfkS0VRy1Luf1bqB%2Btya9nc6xr8TZA9hax%2FtG0A6ZG2ZN%2BDrV2ORda%2B7xF8f9WPz04KnPZvo%2BKaWAC8sB%2FRIVWlBjN%2B4mttNjbEvwMfs55eDxYMG0A91hk84pgdquCffZfrZUgMEmZMstJWGlevFvW3g7RCnnHYQyKPLOIG65Fd7s9AqL5oioqCYBRgbX8ZNW3OhagIXcbcRhFW7xeB17imA2UiiQI6HQpSmc5kIlQi1qIX0rrUoHKQbopwPCSqiiR4FuDi69TgjFdkMQqCbTvwrAVb9gSs68qEUFCtOiIqBw3yrgHMkmPhz7xNmLc3F55gUo7d4PMcG9fA4J0eLthKt%2FjySzo9imyMI3IksoGOqUBIj7gQvI7Om0ddc6nAMXwOGqQ%2FiE6abU7H9vhGPpSnsgkk%2B%2FQvstQBdP9KdwMq16jf%2BRn9UKaVS68x55vxqBJyuqzMYakJ9%2B6BFhsrG9AiDuuN1PlXvhbvk8pSQbWAnnuce6eHS3ojj1Ceq6KRjhsNOGcu9370CfQVSccckVUskwnlvz5bjpJERcgW%2FozKus7AyFN4zNdi%2FCG9MJ%2BJTT6ojjZ%2FjGW&X-Amz-Signature=a54ba2d3dc5db252bccb881e4cdf171baf0a41aa5f6e5471dd6c79c7a6675749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MPAALN%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpRIJJZK2UCLXic6az2uagMFLelC85ao%2Fc2pECND3ByQIgRqnRMIY32Yl9HGkF%2FikiuHIHPOqUF5aenAqWX76GsOMqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfnwt558Yrq%2FMWufCrcA4U3oVPcJ7sTY2vWIJYf78MNs4uI1XlFbitxXqQa%2F2FWKmN5BU4ORrDen4jrkKgDSkZIvwn59%2FxXm%2FZdgcA1LMzCGaqOeFv3MxJrBAKzDJrX2CoecO%2BthtCGsyyLOn19qcCPJ0fkLsxN49eZumt%2BREvoOn2OVvwGRKL%2FdMjZ7lhDcmglDsvt0KeHZZpqC95ju6OYwglKG7jTnxBFBzY1So1etoz%2F8yqv6fHQg4BlCHZe8CB%2Bgv4FMud1NXErLGWHMi6pmkjjViI6A9dOTAs2%2F%2BwXMSHKquW94tHA38nVHI4L1W3Xu6uJyZWfy0by1LbcndsVERJp6TVjZ9O6w8Al4HTdrDSsYyv2my1QO3a%2Bxe3YRzgwfQbYGTgFTnbEnfC8FziLoHhpCM%2FxkaI33rjMvZq%2BquseqrrmDRHE9k8bINchdKBCqxjwx2ngKt6ZL4aqP%2FwEqRVU1iQaiLWyoIklVkismvNS61kAQ6bUqH3q4RzUfmbMVBotPcl5ao2%2BBW0NmZ098zqkrVt%2Fcrql%2BCkBev0TkbKKsx7lezvCfHGQFrzoZ19frc559wfp3BbHNAR1L%2FoXkwowHfYL1P5YSZ0C42lmPdF5GcNtMDFJzseM0RsJJ5828NZ2EcTOlUvhMJvIksoGOqUBmg5hgNNP54UIxRNvpTw0EbnNPeFLgYVu8eUPtyQpcHB6z228%2FWQ6zPXzdgLWR36tRhKd6%2FvHbmnfl8aJyA%2F7K%2BfU4tu4NZTB5miepbXBFhDe%2FzvExeIXLM16WtcEHqO%2FGv2mXFXlIyVT3Qcp14mruolUx%2FtStSVhAIpw6LB5SqU75ydiaUoZujcznfZJ4N5tokKWYFF9D12mzqX2K01chXKmOD9P&X-Amz-Signature=e3c29acbdf25c1dec0c4f5d73874e46768c222061105a062bd0ba99950813e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MPAALN%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpRIJJZK2UCLXic6az2uagMFLelC85ao%2Fc2pECND3ByQIgRqnRMIY32Yl9HGkF%2FikiuHIHPOqUF5aenAqWX76GsOMqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfnwt558Yrq%2FMWufCrcA4U3oVPcJ7sTY2vWIJYf78MNs4uI1XlFbitxXqQa%2F2FWKmN5BU4ORrDen4jrkKgDSkZIvwn59%2FxXm%2FZdgcA1LMzCGaqOeFv3MxJrBAKzDJrX2CoecO%2BthtCGsyyLOn19qcCPJ0fkLsxN49eZumt%2BREvoOn2OVvwGRKL%2FdMjZ7lhDcmglDsvt0KeHZZpqC95ju6OYwglKG7jTnxBFBzY1So1etoz%2F8yqv6fHQg4BlCHZe8CB%2Bgv4FMud1NXErLGWHMi6pmkjjViI6A9dOTAs2%2F%2BwXMSHKquW94tHA38nVHI4L1W3Xu6uJyZWfy0by1LbcndsVERJp6TVjZ9O6w8Al4HTdrDSsYyv2my1QO3a%2Bxe3YRzgwfQbYGTgFTnbEnfC8FziLoHhpCM%2FxkaI33rjMvZq%2BquseqrrmDRHE9k8bINchdKBCqxjwx2ngKt6ZL4aqP%2FwEqRVU1iQaiLWyoIklVkismvNS61kAQ6bUqH3q4RzUfmbMVBotPcl5ao2%2BBW0NmZ098zqkrVt%2Fcrql%2BCkBev0TkbKKsx7lezvCfHGQFrzoZ19frc559wfp3BbHNAR1L%2FoXkwowHfYL1P5YSZ0C42lmPdF5GcNtMDFJzseM0RsJJ5828NZ2EcTOlUvhMJvIksoGOqUBmg5hgNNP54UIxRNvpTw0EbnNPeFLgYVu8eUPtyQpcHB6z228%2FWQ6zPXzdgLWR36tRhKd6%2FvHbmnfl8aJyA%2F7K%2BfU4tu4NZTB5miepbXBFhDe%2FzvExeIXLM16WtcEHqO%2FGv2mXFXlIyVT3Qcp14mruolUx%2FtStSVhAIpw6LB5SqU75ydiaUoZujcznfZJ4N5tokKWYFF9D12mzqX2K01chXKmOD9P&X-Amz-Signature=df7d6c6fdd73041a4e987c3e382f282d7c610311f47b6e21df566bcd441287ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDU4VP6Q%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYPRG1j%2B9ExY5UaLFko1IDzgtB9K3LATPMqxSVSBkVjAiAapqrQr1yH6nzRV3krLJ%2FJzMNkYzejVTKi4lKsx3GuZSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSr%2FVkjpCWASRHPlYKtwD3oMsJyHk2JnJI%2FHU9zFqj647dt1CV48i7QYNewCY%2B4u7oS%2FzuqBtbs%2FcJlA%2BYEZx6Gejfqank0SkYlFqqT2a5TeT8FOx9MzvyKv3bSE9qyMQCqXORPg1c4bo%2FhCenmWLhVQqbPmGe0Rl1l22AJLlk5VJdgk5lE2M77jtSAcLLzbZvCB4oClAmdQFuQU3Z7zK7mJSbqHXNzfvBo30z4%2Fe2UdyZVlDvlVxhIyMcd5pwyNZa1WxmY6BY9QIEpsA6DdXCOv2MUMMncn%2BVZNJWUISmuPfMR0OSFHP6tXdT7jvOF3qgIagKCFrAw8fPUfXaLnnW%2B7GAMMLpfvKvozE5Av%2BBir4Dz%2FdDe0qk9juamJySKGQ9pxaeD%2F2hJqSs4ZShv%2FeFPmVh9yGCmwBkgLx46%2Fb3GCNh7okkAWAJ6zyxpCm6Xgu0bSMD8fKfYxdLJnNuCU46v9M5JvnYGXVv9UYCCxJr4y877XFVy%2BMWobPLFHaTSv0gW7MZYPzqlkHldtkXSev3B7eQGVVvCXeTLYRCClstVujauEYODuIuI9jUHSQN%2Fb9%2F0Lfd%2FJiD4eHkeijmW1tdSBYCAnFj%2BdrtdESQfzW96ciw7vNLCG8hli2vjVS5inOvTvkxjgFWw6YpoYw9MeSygY6pgGqQi3aQLjtftzJ%2BflWBkr5GVpLTlqi0BRQFUcPmV7g9RUhWsF10zPeqN10CfjW%2BWtF40IOajuo7f%2FweJm%2FRd86PI9O6kgXiwvFPINHE2%2BVG%2BeV8YYrVN8Nhc%2FL6UwzzkMn4ifVi8u4%2FoosmEe%2FdJTv%2FWhSZ6D%2FJU9%2F3nHGsw77CVacCu%2B8kvSdcdXKrhNPHGN2bXjGwp4I8ZzrgwH4D%2BOJLT%2B1v4ij&X-Amz-Signature=545acbd1ce9cc838e9d14fe58cd5306850d43f4415deae11383b771505f8e1e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDU4VP6Q%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYPRG1j%2B9ExY5UaLFko1IDzgtB9K3LATPMqxSVSBkVjAiAapqrQr1yH6nzRV3krLJ%2FJzMNkYzejVTKi4lKsx3GuZSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSr%2FVkjpCWASRHPlYKtwD3oMsJyHk2JnJI%2FHU9zFqj647dt1CV48i7QYNewCY%2B4u7oS%2FzuqBtbs%2FcJlA%2BYEZx6Gejfqank0SkYlFqqT2a5TeT8FOx9MzvyKv3bSE9qyMQCqXORPg1c4bo%2FhCenmWLhVQqbPmGe0Rl1l22AJLlk5VJdgk5lE2M77jtSAcLLzbZvCB4oClAmdQFuQU3Z7zK7mJSbqHXNzfvBo30z4%2Fe2UdyZVlDvlVxhIyMcd5pwyNZa1WxmY6BY9QIEpsA6DdXCOv2MUMMncn%2BVZNJWUISmuPfMR0OSFHP6tXdT7jvOF3qgIagKCFrAw8fPUfXaLnnW%2B7GAMMLpfvKvozE5Av%2BBir4Dz%2FdDe0qk9juamJySKGQ9pxaeD%2F2hJqSs4ZShv%2FeFPmVh9yGCmwBkgLx46%2Fb3GCNh7okkAWAJ6zyxpCm6Xgu0bSMD8fKfYxdLJnNuCU46v9M5JvnYGXVv9UYCCxJr4y877XFVy%2BMWobPLFHaTSv0gW7MZYPzqlkHldtkXSev3B7eQGVVvCXeTLYRCClstVujauEYODuIuI9jUHSQN%2Fb9%2F0Lfd%2FJiD4eHkeijmW1tdSBYCAnFj%2BdrtdESQfzW96ciw7vNLCG8hli2vjVS5inOvTvkxjgFWw6YpoYw9MeSygY6pgGqQi3aQLjtftzJ%2BflWBkr5GVpLTlqi0BRQFUcPmV7g9RUhWsF10zPeqN10CfjW%2BWtF40IOajuo7f%2FweJm%2FRd86PI9O6kgXiwvFPINHE2%2BVG%2BeV8YYrVN8Nhc%2FL6UwzzkMn4ifVi8u4%2FoosmEe%2FdJTv%2FWhSZ6D%2FJU9%2F3nHGsw77CVacCu%2B8kvSdcdXKrhNPHGN2bXjGwp4I8ZzrgwH4D%2BOJLT%2B1v4ij&X-Amz-Signature=08557c43c7239e6f53448ca18393a0d4079c820d4cff9a65e268070d11c34b84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDU4VP6Q%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYPRG1j%2B9ExY5UaLFko1IDzgtB9K3LATPMqxSVSBkVjAiAapqrQr1yH6nzRV3krLJ%2FJzMNkYzejVTKi4lKsx3GuZSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSr%2FVkjpCWASRHPlYKtwD3oMsJyHk2JnJI%2FHU9zFqj647dt1CV48i7QYNewCY%2B4u7oS%2FzuqBtbs%2FcJlA%2BYEZx6Gejfqank0SkYlFqqT2a5TeT8FOx9MzvyKv3bSE9qyMQCqXORPg1c4bo%2FhCenmWLhVQqbPmGe0Rl1l22AJLlk5VJdgk5lE2M77jtSAcLLzbZvCB4oClAmdQFuQU3Z7zK7mJSbqHXNzfvBo30z4%2Fe2UdyZVlDvlVxhIyMcd5pwyNZa1WxmY6BY9QIEpsA6DdXCOv2MUMMncn%2BVZNJWUISmuPfMR0OSFHP6tXdT7jvOF3qgIagKCFrAw8fPUfXaLnnW%2B7GAMMLpfvKvozE5Av%2BBir4Dz%2FdDe0qk9juamJySKGQ9pxaeD%2F2hJqSs4ZShv%2FeFPmVh9yGCmwBkgLx46%2Fb3GCNh7okkAWAJ6zyxpCm6Xgu0bSMD8fKfYxdLJnNuCU46v9M5JvnYGXVv9UYCCxJr4y877XFVy%2BMWobPLFHaTSv0gW7MZYPzqlkHldtkXSev3B7eQGVVvCXeTLYRCClstVujauEYODuIuI9jUHSQN%2Fb9%2F0Lfd%2FJiD4eHkeijmW1tdSBYCAnFj%2BdrtdESQfzW96ciw7vNLCG8hli2vjVS5inOvTvkxjgFWw6YpoYw9MeSygY6pgGqQi3aQLjtftzJ%2BflWBkr5GVpLTlqi0BRQFUcPmV7g9RUhWsF10zPeqN10CfjW%2BWtF40IOajuo7f%2FweJm%2FRd86PI9O6kgXiwvFPINHE2%2BVG%2BeV8YYrVN8Nhc%2FL6UwzzkMn4ifVi8u4%2FoosmEe%2FdJTv%2FWhSZ6D%2FJU9%2F3nHGsw77CVacCu%2B8kvSdcdXKrhNPHGN2bXjGwp4I8ZzrgwH4D%2BOJLT%2B1v4ij&X-Amz-Signature=d1a6fa65bd05610c84b29e9454a61c2f4968a14a2e1fa6a88c1dee325622afd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDU4VP6Q%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYPRG1j%2B9ExY5UaLFko1IDzgtB9K3LATPMqxSVSBkVjAiAapqrQr1yH6nzRV3krLJ%2FJzMNkYzejVTKi4lKsx3GuZSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSr%2FVkjpCWASRHPlYKtwD3oMsJyHk2JnJI%2FHU9zFqj647dt1CV48i7QYNewCY%2B4u7oS%2FzuqBtbs%2FcJlA%2BYEZx6Gejfqank0SkYlFqqT2a5TeT8FOx9MzvyKv3bSE9qyMQCqXORPg1c4bo%2FhCenmWLhVQqbPmGe0Rl1l22AJLlk5VJdgk5lE2M77jtSAcLLzbZvCB4oClAmdQFuQU3Z7zK7mJSbqHXNzfvBo30z4%2Fe2UdyZVlDvlVxhIyMcd5pwyNZa1WxmY6BY9QIEpsA6DdXCOv2MUMMncn%2BVZNJWUISmuPfMR0OSFHP6tXdT7jvOF3qgIagKCFrAw8fPUfXaLnnW%2B7GAMMLpfvKvozE5Av%2BBir4Dz%2FdDe0qk9juamJySKGQ9pxaeD%2F2hJqSs4ZShv%2FeFPmVh9yGCmwBkgLx46%2Fb3GCNh7okkAWAJ6zyxpCm6Xgu0bSMD8fKfYxdLJnNuCU46v9M5JvnYGXVv9UYCCxJr4y877XFVy%2BMWobPLFHaTSv0gW7MZYPzqlkHldtkXSev3B7eQGVVvCXeTLYRCClstVujauEYODuIuI9jUHSQN%2Fb9%2F0Lfd%2FJiD4eHkeijmW1tdSBYCAnFj%2BdrtdESQfzW96ciw7vNLCG8hli2vjVS5inOvTvkxjgFWw6YpoYw9MeSygY6pgGqQi3aQLjtftzJ%2BflWBkr5GVpLTlqi0BRQFUcPmV7g9RUhWsF10zPeqN10CfjW%2BWtF40IOajuo7f%2FweJm%2FRd86PI9O6kgXiwvFPINHE2%2BVG%2BeV8YYrVN8Nhc%2FL6UwzzkMn4ifVi8u4%2FoosmEe%2FdJTv%2FWhSZ6D%2FJU9%2F3nHGsw77CVacCu%2B8kvSdcdXKrhNPHGN2bXjGwp4I8ZzrgwH4D%2BOJLT%2B1v4ij&X-Amz-Signature=8432542fed5fcdeb9303ed830544de4d293892ac39367bc28d265f8174b6516b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JZQGU3D%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHG%2B5%2F5pTMruxHNo4pPkNFMLtmCs%2F6%2Fox5r05JrmegxAiEAlGOpgjaGFRZvn975GrF0Uhhh%2BXngmlbILNVcbf5NdWoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM6qR8hfIbcHyAqQircA%2BS6v8nSxlVK%2Be68W2bJNCyhrEBBwIhyvx2f0x%2B%2BFmLYSgQfoUx%2F3W2fiELlO8KeykffSAQWy25jJg1I9XwE4%2FJK7FBB8%2FVb69Z0Nxnl2%2FBPn7RF3Asu2j2d7bj2hGGu13LBf5SGm%2BPqFNzsBfrWGDUTBlVuYEmKtxWw2XxbpEing1gw8DLZh6SI9QPG806YsUYEWrlxiObegQH%2BBzjX68tcf%2B2mtT7E5UNFIii1STiGbNznqJyuKUDLKtkhpXcqhTHqJassXyEkfEiGkSK0AYFry24RaIjDNeCybiTH9phYjPyqDiDdDBS%2BGeEyeJpaHM9vOkOpQpDSbwLh%2FIfjco%2FE1gAv5C6TPijvOlCKk%2Bdvb8184CNcJPFiJW3WkUVbYuqqX%2F3XrhI3GLWnmhJjKRTWu5BobV4lppHG1PVZcp9OhylHAMwycOJ91QtDU%2BR%2FzMa4ccxuyz5u3BhAezhJm7JB8yWvEG%2B999J1HJu4r39PQkoCycic4kWGvVaxf52AeU3J09FbU29VFTNR0LT9a3eHVzK%2BJb1cVODQBEiz2Pl0kRn%2BiBHNSXf2sXyyOcPhiWgJ%2BwhqX8iDYHNWTIyWjE1sHPElBi52qwLTzdXwKew6mEDb4San4uAilk34MKPIksoGOqUBgMIPe6f1NiT5BTUrw%2BgiUbvc6ZnmG4PLF1CFuPUk4DHpSp0Du96miH5H5SbgUMfEqDcUZkkT12PIOUsC4FU4JM%2FSNz7QshxV8%2FSNCZCfmm0kxXAIwecT3unwxGkTGdjSdsqIS%2FVTY%2Bu9qEgXafpnPtWNab4oRb7TghTUpVC1ktbMGsPElVQwlD0ttDr%2BCRAHh%2BAk0eKDo2npdPcCzptIQXOdesLd&X-Amz-Signature=ab7ad2fd37e6749e8b637f41df9def3f09d80a627f102776dc12b2bc7556472e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDU4VP6Q%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYPRG1j%2B9ExY5UaLFko1IDzgtB9K3LATPMqxSVSBkVjAiAapqrQr1yH6nzRV3krLJ%2FJzMNkYzejVTKi4lKsx3GuZSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSr%2FVkjpCWASRHPlYKtwD3oMsJyHk2JnJI%2FHU9zFqj647dt1CV48i7QYNewCY%2B4u7oS%2FzuqBtbs%2FcJlA%2BYEZx6Gejfqank0SkYlFqqT2a5TeT8FOx9MzvyKv3bSE9qyMQCqXORPg1c4bo%2FhCenmWLhVQqbPmGe0Rl1l22AJLlk5VJdgk5lE2M77jtSAcLLzbZvCB4oClAmdQFuQU3Z7zK7mJSbqHXNzfvBo30z4%2Fe2UdyZVlDvlVxhIyMcd5pwyNZa1WxmY6BY9QIEpsA6DdXCOv2MUMMncn%2BVZNJWUISmuPfMR0OSFHP6tXdT7jvOF3qgIagKCFrAw8fPUfXaLnnW%2B7GAMMLpfvKvozE5Av%2BBir4Dz%2FdDe0qk9juamJySKGQ9pxaeD%2F2hJqSs4ZShv%2FeFPmVh9yGCmwBkgLx46%2Fb3GCNh7okkAWAJ6zyxpCm6Xgu0bSMD8fKfYxdLJnNuCU46v9M5JvnYGXVv9UYCCxJr4y877XFVy%2BMWobPLFHaTSv0gW7MZYPzqlkHldtkXSev3B7eQGVVvCXeTLYRCClstVujauEYODuIuI9jUHSQN%2Fb9%2F0Lfd%2FJiD4eHkeijmW1tdSBYCAnFj%2BdrtdESQfzW96ciw7vNLCG8hli2vjVS5inOvTvkxjgFWw6YpoYw9MeSygY6pgGqQi3aQLjtftzJ%2BflWBkr5GVpLTlqi0BRQFUcPmV7g9RUhWsF10zPeqN10CfjW%2BWtF40IOajuo7f%2FweJm%2FRd86PI9O6kgXiwvFPINHE2%2BVG%2BeV8YYrVN8Nhc%2FL6UwzzkMn4ifVi8u4%2FoosmEe%2FdJTv%2FWhSZ6D%2FJU9%2F3nHGsw77CVacCu%2B8kvSdcdXKrhNPHGN2bXjGwp4I8ZzrgwH4D%2BOJLT%2B1v4ij&X-Amz-Signature=4e3320fdfbbbaad328799a9dbeabe34f90343275d91d2015614ecbe01fa82818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDU4VP6Q%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYPRG1j%2B9ExY5UaLFko1IDzgtB9K3LATPMqxSVSBkVjAiAapqrQr1yH6nzRV3krLJ%2FJzMNkYzejVTKi4lKsx3GuZSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSr%2FVkjpCWASRHPlYKtwD3oMsJyHk2JnJI%2FHU9zFqj647dt1CV48i7QYNewCY%2B4u7oS%2FzuqBtbs%2FcJlA%2BYEZx6Gejfqank0SkYlFqqT2a5TeT8FOx9MzvyKv3bSE9qyMQCqXORPg1c4bo%2FhCenmWLhVQqbPmGe0Rl1l22AJLlk5VJdgk5lE2M77jtSAcLLzbZvCB4oClAmdQFuQU3Z7zK7mJSbqHXNzfvBo30z4%2Fe2UdyZVlDvlVxhIyMcd5pwyNZa1WxmY6BY9QIEpsA6DdXCOv2MUMMncn%2BVZNJWUISmuPfMR0OSFHP6tXdT7jvOF3qgIagKCFrAw8fPUfXaLnnW%2B7GAMMLpfvKvozE5Av%2BBir4Dz%2FdDe0qk9juamJySKGQ9pxaeD%2F2hJqSs4ZShv%2FeFPmVh9yGCmwBkgLx46%2Fb3GCNh7okkAWAJ6zyxpCm6Xgu0bSMD8fKfYxdLJnNuCU46v9M5JvnYGXVv9UYCCxJr4y877XFVy%2BMWobPLFHaTSv0gW7MZYPzqlkHldtkXSev3B7eQGVVvCXeTLYRCClstVujauEYODuIuI9jUHSQN%2Fb9%2F0Lfd%2FJiD4eHkeijmW1tdSBYCAnFj%2BdrtdESQfzW96ciw7vNLCG8hli2vjVS5inOvTvkxjgFWw6YpoYw9MeSygY6pgGqQi3aQLjtftzJ%2BflWBkr5GVpLTlqi0BRQFUcPmV7g9RUhWsF10zPeqN10CfjW%2BWtF40IOajuo7f%2FweJm%2FRd86PI9O6kgXiwvFPINHE2%2BVG%2BeV8YYrVN8Nhc%2FL6UwzzkMn4ifVi8u4%2FoosmEe%2FdJTv%2FWhSZ6D%2FJU9%2F3nHGsw77CVacCu%2B8kvSdcdXKrhNPHGN2bXjGwp4I8ZzrgwH4D%2BOJLT%2B1v4ij&X-Amz-Signature=c83197425f3618fbeeb5dbd92376cde6d4094cd6a8c652bde998ec8124559e8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDU4VP6Q%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYPRG1j%2B9ExY5UaLFko1IDzgtB9K3LATPMqxSVSBkVjAiAapqrQr1yH6nzRV3krLJ%2FJzMNkYzejVTKi4lKsx3GuZSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSr%2FVkjpCWASRHPlYKtwD3oMsJyHk2JnJI%2FHU9zFqj647dt1CV48i7QYNewCY%2B4u7oS%2FzuqBtbs%2FcJlA%2BYEZx6Gejfqank0SkYlFqqT2a5TeT8FOx9MzvyKv3bSE9qyMQCqXORPg1c4bo%2FhCenmWLhVQqbPmGe0Rl1l22AJLlk5VJdgk5lE2M77jtSAcLLzbZvCB4oClAmdQFuQU3Z7zK7mJSbqHXNzfvBo30z4%2Fe2UdyZVlDvlVxhIyMcd5pwyNZa1WxmY6BY9QIEpsA6DdXCOv2MUMMncn%2BVZNJWUISmuPfMR0OSFHP6tXdT7jvOF3qgIagKCFrAw8fPUfXaLnnW%2B7GAMMLpfvKvozE5Av%2BBir4Dz%2FdDe0qk9juamJySKGQ9pxaeD%2F2hJqSs4ZShv%2FeFPmVh9yGCmwBkgLx46%2Fb3GCNh7okkAWAJ6zyxpCm6Xgu0bSMD8fKfYxdLJnNuCU46v9M5JvnYGXVv9UYCCxJr4y877XFVy%2BMWobPLFHaTSv0gW7MZYPzqlkHldtkXSev3B7eQGVVvCXeTLYRCClstVujauEYODuIuI9jUHSQN%2Fb9%2F0Lfd%2FJiD4eHkeijmW1tdSBYCAnFj%2BdrtdESQfzW96ciw7vNLCG8hli2vjVS5inOvTvkxjgFWw6YpoYw9MeSygY6pgGqQi3aQLjtftzJ%2BflWBkr5GVpLTlqi0BRQFUcPmV7g9RUhWsF10zPeqN10CfjW%2BWtF40IOajuo7f%2FweJm%2FRd86PI9O6kgXiwvFPINHE2%2BVG%2BeV8YYrVN8Nhc%2FL6UwzzkMn4ifVi8u4%2FoosmEe%2FdJTv%2FWhSZ6D%2FJU9%2F3nHGsw77CVacCu%2B8kvSdcdXKrhNPHGN2bXjGwp4I8ZzrgwH4D%2BOJLT%2B1v4ij&X-Amz-Signature=d1a6fa65bd05610c84b29e9454a61c2f4968a14a2e1fa6a88c1dee325622afd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDU4VP6Q%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYPRG1j%2B9ExY5UaLFko1IDzgtB9K3LATPMqxSVSBkVjAiAapqrQr1yH6nzRV3krLJ%2FJzMNkYzejVTKi4lKsx3GuZSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSr%2FVkjpCWASRHPlYKtwD3oMsJyHk2JnJI%2FHU9zFqj647dt1CV48i7QYNewCY%2B4u7oS%2FzuqBtbs%2FcJlA%2BYEZx6Gejfqank0SkYlFqqT2a5TeT8FOx9MzvyKv3bSE9qyMQCqXORPg1c4bo%2FhCenmWLhVQqbPmGe0Rl1l22AJLlk5VJdgk5lE2M77jtSAcLLzbZvCB4oClAmdQFuQU3Z7zK7mJSbqHXNzfvBo30z4%2Fe2UdyZVlDvlVxhIyMcd5pwyNZa1WxmY6BY9QIEpsA6DdXCOv2MUMMncn%2BVZNJWUISmuPfMR0OSFHP6tXdT7jvOF3qgIagKCFrAw8fPUfXaLnnW%2B7GAMMLpfvKvozE5Av%2BBir4Dz%2FdDe0qk9juamJySKGQ9pxaeD%2F2hJqSs4ZShv%2FeFPmVh9yGCmwBkgLx46%2Fb3GCNh7okkAWAJ6zyxpCm6Xgu0bSMD8fKfYxdLJnNuCU46v9M5JvnYGXVv9UYCCxJr4y877XFVy%2BMWobPLFHaTSv0gW7MZYPzqlkHldtkXSev3B7eQGVVvCXeTLYRCClstVujauEYODuIuI9jUHSQN%2Fb9%2F0Lfd%2FJiD4eHkeijmW1tdSBYCAnFj%2BdrtdESQfzW96ciw7vNLCG8hli2vjVS5inOvTvkxjgFWw6YpoYw9MeSygY6pgGqQi3aQLjtftzJ%2BflWBkr5GVpLTlqi0BRQFUcPmV7g9RUhWsF10zPeqN10CfjW%2BWtF40IOajuo7f%2FweJm%2FRd86PI9O6kgXiwvFPINHE2%2BVG%2BeV8YYrVN8Nhc%2FL6UwzzkMn4ifVi8u4%2FoosmEe%2FdJTv%2FWhSZ6D%2FJU9%2F3nHGsw77CVacCu%2B8kvSdcdXKrhNPHGN2bXjGwp4I8ZzrgwH4D%2BOJLT%2B1v4ij&X-Amz-Signature=86173120808c4c503a1654b16fef5996f3eb063faf1c77c04bdb284b01aa4be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDU4VP6Q%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYPRG1j%2B9ExY5UaLFko1IDzgtB9K3LATPMqxSVSBkVjAiAapqrQr1yH6nzRV3krLJ%2FJzMNkYzejVTKi4lKsx3GuZSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSr%2FVkjpCWASRHPlYKtwD3oMsJyHk2JnJI%2FHU9zFqj647dt1CV48i7QYNewCY%2B4u7oS%2FzuqBtbs%2FcJlA%2BYEZx6Gejfqank0SkYlFqqT2a5TeT8FOx9MzvyKv3bSE9qyMQCqXORPg1c4bo%2FhCenmWLhVQqbPmGe0Rl1l22AJLlk5VJdgk5lE2M77jtSAcLLzbZvCB4oClAmdQFuQU3Z7zK7mJSbqHXNzfvBo30z4%2Fe2UdyZVlDvlVxhIyMcd5pwyNZa1WxmY6BY9QIEpsA6DdXCOv2MUMMncn%2BVZNJWUISmuPfMR0OSFHP6tXdT7jvOF3qgIagKCFrAw8fPUfXaLnnW%2B7GAMMLpfvKvozE5Av%2BBir4Dz%2FdDe0qk9juamJySKGQ9pxaeD%2F2hJqSs4ZShv%2FeFPmVh9yGCmwBkgLx46%2Fb3GCNh7okkAWAJ6zyxpCm6Xgu0bSMD8fKfYxdLJnNuCU46v9M5JvnYGXVv9UYCCxJr4y877XFVy%2BMWobPLFHaTSv0gW7MZYPzqlkHldtkXSev3B7eQGVVvCXeTLYRCClstVujauEYODuIuI9jUHSQN%2Fb9%2F0Lfd%2FJiD4eHkeijmW1tdSBYCAnFj%2BdrtdESQfzW96ciw7vNLCG8hli2vjVS5inOvTvkxjgFWw6YpoYw9MeSygY6pgGqQi3aQLjtftzJ%2BflWBkr5GVpLTlqi0BRQFUcPmV7g9RUhWsF10zPeqN10CfjW%2BWtF40IOajuo7f%2FweJm%2FRd86PI9O6kgXiwvFPINHE2%2BVG%2BeV8YYrVN8Nhc%2FL6UwzzkMn4ifVi8u4%2FoosmEe%2FdJTv%2FWhSZ6D%2FJU9%2F3nHGsw77CVacCu%2B8kvSdcdXKrhNPHGN2bXjGwp4I8ZzrgwH4D%2BOJLT%2B1v4ij&X-Amz-Signature=897742cfd77e7e065176c309924746581aa4b17297dc7c6f2016d90707ad5001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDU4VP6Q%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYPRG1j%2B9ExY5UaLFko1IDzgtB9K3LATPMqxSVSBkVjAiAapqrQr1yH6nzRV3krLJ%2FJzMNkYzejVTKi4lKsx3GuZSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSr%2FVkjpCWASRHPlYKtwD3oMsJyHk2JnJI%2FHU9zFqj647dt1CV48i7QYNewCY%2B4u7oS%2FzuqBtbs%2FcJlA%2BYEZx6Gejfqank0SkYlFqqT2a5TeT8FOx9MzvyKv3bSE9qyMQCqXORPg1c4bo%2FhCenmWLhVQqbPmGe0Rl1l22AJLlk5VJdgk5lE2M77jtSAcLLzbZvCB4oClAmdQFuQU3Z7zK7mJSbqHXNzfvBo30z4%2Fe2UdyZVlDvlVxhIyMcd5pwyNZa1WxmY6BY9QIEpsA6DdXCOv2MUMMncn%2BVZNJWUISmuPfMR0OSFHP6tXdT7jvOF3qgIagKCFrAw8fPUfXaLnnW%2B7GAMMLpfvKvozE5Av%2BBir4Dz%2FdDe0qk9juamJySKGQ9pxaeD%2F2hJqSs4ZShv%2FeFPmVh9yGCmwBkgLx46%2Fb3GCNh7okkAWAJ6zyxpCm6Xgu0bSMD8fKfYxdLJnNuCU46v9M5JvnYGXVv9UYCCxJr4y877XFVy%2BMWobPLFHaTSv0gW7MZYPzqlkHldtkXSev3B7eQGVVvCXeTLYRCClstVujauEYODuIuI9jUHSQN%2Fb9%2F0Lfd%2FJiD4eHkeijmW1tdSBYCAnFj%2BdrtdESQfzW96ciw7vNLCG8hli2vjVS5inOvTvkxjgFWw6YpoYw9MeSygY6pgGqQi3aQLjtftzJ%2BflWBkr5GVpLTlqi0BRQFUcPmV7g9RUhWsF10zPeqN10CfjW%2BWtF40IOajuo7f%2FweJm%2FRd86PI9O6kgXiwvFPINHE2%2BVG%2BeV8YYrVN8Nhc%2FL6UwzzkMn4ifVi8u4%2FoosmEe%2FdJTv%2FWhSZ6D%2FJU9%2F3nHGsw77CVacCu%2B8kvSdcdXKrhNPHGN2bXjGwp4I8ZzrgwH4D%2BOJLT%2B1v4ij&X-Amz-Signature=d014478c7095609fdd2781a66b322fbc22eec86b5a526943d842ef40e4ed3b2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


