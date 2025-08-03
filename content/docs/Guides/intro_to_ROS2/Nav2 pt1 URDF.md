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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5Q3C25%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEPTa0njKuG1yHT2R321eFbDEbdU%2B%2Bt2Qsysnt8IdUXAiBw7P8JJDKGaQTUx%2BrdB0WlmU4PvnU4MCKmHRRA%2F%2FEm%2Fir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM8a264An%2FlRqi6uezKtwD1NQBTqMZzTGj5ElS8cpfc11Vu%2BonRWVR3WUS1mrUIBGbjpi7J6M4L3asyoooNVDTTSqrV%2BA8u8P59nqpg3lVPE1ehEAM4uT9WQWHtIx1rZe%2BCgN7bNSeh6oy5xfN3D6DmbGxrOHIAkYsv9bQ0oVDlgS8eCaa6ZdntWfDmkWRdxKsUaAnDCRG1ke32n6tjw9XgXkPqWsXY2%2FyMX3hv8gUlIbKyHv88z2C7fCI4nJ6H4bp2Q%2BY%2BPYMR5yVgNoH7Y5psVlnbbAlssQoZVF0yCaPTX2f9KivamyT0tbUv5QSIb5GpnXM8DlbEsSCKxxATFbgJ55eKsBTxHH59de%2B%2B0LDanHN4oZoTNMxM3mDIewCcOmE0IlxQajLp6Eoul7hKhbCLEbz8hf12OfMEzkpxch4sakpLFli%2FMK3iOGQLSkcIpfRisbZKOyImQCuek0ZRtJlGeS%2BBr%2FjttWMOUo%2Fr9lrLbP3YekhWDcGnYxwwBvjs0DgIoH8v2HIEmRAJJC84EVkuTFC0KrVq9ZlEy0rJkP43NhLPVQxEp7kHl0MXKk26beiiukKNiX5AVYHYgTKZn%2Fy3m1HpqOIsio0ZzxXSS16czX0HhuBV%2F%2BhE9xSS%2FAKMsaoTLvyFiegR4VfUIAwwKK7xAY6pgFYvk8SHVs4dXgRz9YJjJ%2FpmMb7fSFa4bDsrWOAGKysUSSOq92UU4GOAeUfynU5duGT8ivvAAxU5Yngb23Xy8%2BhVvoSlQGY6c%2Fs8H0kGEyoUk3ftcUiTezhUgJPN6veSnG8YrMeJCNavVMwNRqkvFv0ET%2F49EYamS05W2Axm83mNwUPqWdGhzLZC7we2PDYhajdblBMGMr7V3E06jpzfzcDf%2BzQFmfA&X-Amz-Signature=f28f8ea9300dc1212b0d9c4e87d6aac837f8640ff2cfa2f6cae84840d72d4829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5Q3C25%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEPTa0njKuG1yHT2R321eFbDEbdU%2B%2Bt2Qsysnt8IdUXAiBw7P8JJDKGaQTUx%2BrdB0WlmU4PvnU4MCKmHRRA%2F%2FEm%2Fir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM8a264An%2FlRqi6uezKtwD1NQBTqMZzTGj5ElS8cpfc11Vu%2BonRWVR3WUS1mrUIBGbjpi7J6M4L3asyoooNVDTTSqrV%2BA8u8P59nqpg3lVPE1ehEAM4uT9WQWHtIx1rZe%2BCgN7bNSeh6oy5xfN3D6DmbGxrOHIAkYsv9bQ0oVDlgS8eCaa6ZdntWfDmkWRdxKsUaAnDCRG1ke32n6tjw9XgXkPqWsXY2%2FyMX3hv8gUlIbKyHv88z2C7fCI4nJ6H4bp2Q%2BY%2BPYMR5yVgNoH7Y5psVlnbbAlssQoZVF0yCaPTX2f9KivamyT0tbUv5QSIb5GpnXM8DlbEsSCKxxATFbgJ55eKsBTxHH59de%2B%2B0LDanHN4oZoTNMxM3mDIewCcOmE0IlxQajLp6Eoul7hKhbCLEbz8hf12OfMEzkpxch4sakpLFli%2FMK3iOGQLSkcIpfRisbZKOyImQCuek0ZRtJlGeS%2BBr%2FjttWMOUo%2Fr9lrLbP3YekhWDcGnYxwwBvjs0DgIoH8v2HIEmRAJJC84EVkuTFC0KrVq9ZlEy0rJkP43NhLPVQxEp7kHl0MXKk26beiiukKNiX5AVYHYgTKZn%2Fy3m1HpqOIsio0ZzxXSS16czX0HhuBV%2F%2BhE9xSS%2FAKMsaoTLvyFiegR4VfUIAwwKK7xAY6pgFYvk8SHVs4dXgRz9YJjJ%2FpmMb7fSFa4bDsrWOAGKysUSSOq92UU4GOAeUfynU5duGT8ivvAAxU5Yngb23Xy8%2BhVvoSlQGY6c%2Fs8H0kGEyoUk3ftcUiTezhUgJPN6veSnG8YrMeJCNavVMwNRqkvFv0ET%2F49EYamS05W2Axm83mNwUPqWdGhzLZC7we2PDYhajdblBMGMr7V3E06jpzfzcDf%2BzQFmfA&X-Amz-Signature=66974b2e9bb1535c97267b553def4ddcd6e64b097325070ebb3c130a34446a4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5Q3C25%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEPTa0njKuG1yHT2R321eFbDEbdU%2B%2Bt2Qsysnt8IdUXAiBw7P8JJDKGaQTUx%2BrdB0WlmU4PvnU4MCKmHRRA%2F%2FEm%2Fir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM8a264An%2FlRqi6uezKtwD1NQBTqMZzTGj5ElS8cpfc11Vu%2BonRWVR3WUS1mrUIBGbjpi7J6M4L3asyoooNVDTTSqrV%2BA8u8P59nqpg3lVPE1ehEAM4uT9WQWHtIx1rZe%2BCgN7bNSeh6oy5xfN3D6DmbGxrOHIAkYsv9bQ0oVDlgS8eCaa6ZdntWfDmkWRdxKsUaAnDCRG1ke32n6tjw9XgXkPqWsXY2%2FyMX3hv8gUlIbKyHv88z2C7fCI4nJ6H4bp2Q%2BY%2BPYMR5yVgNoH7Y5psVlnbbAlssQoZVF0yCaPTX2f9KivamyT0tbUv5QSIb5GpnXM8DlbEsSCKxxATFbgJ55eKsBTxHH59de%2B%2B0LDanHN4oZoTNMxM3mDIewCcOmE0IlxQajLp6Eoul7hKhbCLEbz8hf12OfMEzkpxch4sakpLFli%2FMK3iOGQLSkcIpfRisbZKOyImQCuek0ZRtJlGeS%2BBr%2FjttWMOUo%2Fr9lrLbP3YekhWDcGnYxwwBvjs0DgIoH8v2HIEmRAJJC84EVkuTFC0KrVq9ZlEy0rJkP43NhLPVQxEp7kHl0MXKk26beiiukKNiX5AVYHYgTKZn%2Fy3m1HpqOIsio0ZzxXSS16czX0HhuBV%2F%2BhE9xSS%2FAKMsaoTLvyFiegR4VfUIAwwKK7xAY6pgFYvk8SHVs4dXgRz9YJjJ%2FpmMb7fSFa4bDsrWOAGKysUSSOq92UU4GOAeUfynU5duGT8ivvAAxU5Yngb23Xy8%2BhVvoSlQGY6c%2Fs8H0kGEyoUk3ftcUiTezhUgJPN6veSnG8YrMeJCNavVMwNRqkvFv0ET%2F49EYamS05W2Axm83mNwUPqWdGhzLZC7we2PDYhajdblBMGMr7V3E06jpzfzcDf%2BzQFmfA&X-Amz-Signature=1a274f9aac47e3e83474576847aff47064f5cf45cb8bd2041e2a65ed4a91d811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5Q3C25%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEPTa0njKuG1yHT2R321eFbDEbdU%2B%2Bt2Qsysnt8IdUXAiBw7P8JJDKGaQTUx%2BrdB0WlmU4PvnU4MCKmHRRA%2F%2FEm%2Fir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM8a264An%2FlRqi6uezKtwD1NQBTqMZzTGj5ElS8cpfc11Vu%2BonRWVR3WUS1mrUIBGbjpi7J6M4L3asyoooNVDTTSqrV%2BA8u8P59nqpg3lVPE1ehEAM4uT9WQWHtIx1rZe%2BCgN7bNSeh6oy5xfN3D6DmbGxrOHIAkYsv9bQ0oVDlgS8eCaa6ZdntWfDmkWRdxKsUaAnDCRG1ke32n6tjw9XgXkPqWsXY2%2FyMX3hv8gUlIbKyHv88z2C7fCI4nJ6H4bp2Q%2BY%2BPYMR5yVgNoH7Y5psVlnbbAlssQoZVF0yCaPTX2f9KivamyT0tbUv5QSIb5GpnXM8DlbEsSCKxxATFbgJ55eKsBTxHH59de%2B%2B0LDanHN4oZoTNMxM3mDIewCcOmE0IlxQajLp6Eoul7hKhbCLEbz8hf12OfMEzkpxch4sakpLFli%2FMK3iOGQLSkcIpfRisbZKOyImQCuek0ZRtJlGeS%2BBr%2FjttWMOUo%2Fr9lrLbP3YekhWDcGnYxwwBvjs0DgIoH8v2HIEmRAJJC84EVkuTFC0KrVq9ZlEy0rJkP43NhLPVQxEp7kHl0MXKk26beiiukKNiX5AVYHYgTKZn%2Fy3m1HpqOIsio0ZzxXSS16czX0HhuBV%2F%2BhE9xSS%2FAKMsaoTLvyFiegR4VfUIAwwKK7xAY6pgFYvk8SHVs4dXgRz9YJjJ%2FpmMb7fSFa4bDsrWOAGKysUSSOq92UU4GOAeUfynU5duGT8ivvAAxU5Yngb23Xy8%2BhVvoSlQGY6c%2Fs8H0kGEyoUk3ftcUiTezhUgJPN6veSnG8YrMeJCNavVMwNRqkvFv0ET%2F49EYamS05W2Axm83mNwUPqWdGhzLZC7we2PDYhajdblBMGMr7V3E06jpzfzcDf%2BzQFmfA&X-Amz-Signature=b70a42ed2d81819eedda8f442f77ae81e730ebf277d0e7bdca83fc25f77e4e96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5Q3C25%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEPTa0njKuG1yHT2R321eFbDEbdU%2B%2Bt2Qsysnt8IdUXAiBw7P8JJDKGaQTUx%2BrdB0WlmU4PvnU4MCKmHRRA%2F%2FEm%2Fir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM8a264An%2FlRqi6uezKtwD1NQBTqMZzTGj5ElS8cpfc11Vu%2BonRWVR3WUS1mrUIBGbjpi7J6M4L3asyoooNVDTTSqrV%2BA8u8P59nqpg3lVPE1ehEAM4uT9WQWHtIx1rZe%2BCgN7bNSeh6oy5xfN3D6DmbGxrOHIAkYsv9bQ0oVDlgS8eCaa6ZdntWfDmkWRdxKsUaAnDCRG1ke32n6tjw9XgXkPqWsXY2%2FyMX3hv8gUlIbKyHv88z2C7fCI4nJ6H4bp2Q%2BY%2BPYMR5yVgNoH7Y5psVlnbbAlssQoZVF0yCaPTX2f9KivamyT0tbUv5QSIb5GpnXM8DlbEsSCKxxATFbgJ55eKsBTxHH59de%2B%2B0LDanHN4oZoTNMxM3mDIewCcOmE0IlxQajLp6Eoul7hKhbCLEbz8hf12OfMEzkpxch4sakpLFli%2FMK3iOGQLSkcIpfRisbZKOyImQCuek0ZRtJlGeS%2BBr%2FjttWMOUo%2Fr9lrLbP3YekhWDcGnYxwwBvjs0DgIoH8v2HIEmRAJJC84EVkuTFC0KrVq9ZlEy0rJkP43NhLPVQxEp7kHl0MXKk26beiiukKNiX5AVYHYgTKZn%2Fy3m1HpqOIsio0ZzxXSS16czX0HhuBV%2F%2BhE9xSS%2FAKMsaoTLvyFiegR4VfUIAwwKK7xAY6pgFYvk8SHVs4dXgRz9YJjJ%2FpmMb7fSFa4bDsrWOAGKysUSSOq92UU4GOAeUfynU5duGT8ivvAAxU5Yngb23Xy8%2BhVvoSlQGY6c%2Fs8H0kGEyoUk3ftcUiTezhUgJPN6veSnG8YrMeJCNavVMwNRqkvFv0ET%2F49EYamS05W2Axm83mNwUPqWdGhzLZC7we2PDYhajdblBMGMr7V3E06jpzfzcDf%2BzQFmfA&X-Amz-Signature=f80af3700fc18cd26b71dc3af921e72c2b536fade8636c195771b42e395e0e0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5Q3C25%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEPTa0njKuG1yHT2R321eFbDEbdU%2B%2Bt2Qsysnt8IdUXAiBw7P8JJDKGaQTUx%2BrdB0WlmU4PvnU4MCKmHRRA%2F%2FEm%2Fir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM8a264An%2FlRqi6uezKtwD1NQBTqMZzTGj5ElS8cpfc11Vu%2BonRWVR3WUS1mrUIBGbjpi7J6M4L3asyoooNVDTTSqrV%2BA8u8P59nqpg3lVPE1ehEAM4uT9WQWHtIx1rZe%2BCgN7bNSeh6oy5xfN3D6DmbGxrOHIAkYsv9bQ0oVDlgS8eCaa6ZdntWfDmkWRdxKsUaAnDCRG1ke32n6tjw9XgXkPqWsXY2%2FyMX3hv8gUlIbKyHv88z2C7fCI4nJ6H4bp2Q%2BY%2BPYMR5yVgNoH7Y5psVlnbbAlssQoZVF0yCaPTX2f9KivamyT0tbUv5QSIb5GpnXM8DlbEsSCKxxATFbgJ55eKsBTxHH59de%2B%2B0LDanHN4oZoTNMxM3mDIewCcOmE0IlxQajLp6Eoul7hKhbCLEbz8hf12OfMEzkpxch4sakpLFli%2FMK3iOGQLSkcIpfRisbZKOyImQCuek0ZRtJlGeS%2BBr%2FjttWMOUo%2Fr9lrLbP3YekhWDcGnYxwwBvjs0DgIoH8v2HIEmRAJJC84EVkuTFC0KrVq9ZlEy0rJkP43NhLPVQxEp7kHl0MXKk26beiiukKNiX5AVYHYgTKZn%2Fy3m1HpqOIsio0ZzxXSS16czX0HhuBV%2F%2BhE9xSS%2FAKMsaoTLvyFiegR4VfUIAwwKK7xAY6pgFYvk8SHVs4dXgRz9YJjJ%2FpmMb7fSFa4bDsrWOAGKysUSSOq92UU4GOAeUfynU5duGT8ivvAAxU5Yngb23Xy8%2BhVvoSlQGY6c%2Fs8H0kGEyoUk3ftcUiTezhUgJPN6veSnG8YrMeJCNavVMwNRqkvFv0ET%2F49EYamS05W2Axm83mNwUPqWdGhzLZC7we2PDYhajdblBMGMr7V3E06jpzfzcDf%2BzQFmfA&X-Amz-Signature=b02925d967803e2598e4e258b3b17fde98371c141e9f3f2d5d812dd8b7895c19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5Q3C25%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEPTa0njKuG1yHT2R321eFbDEbdU%2B%2Bt2Qsysnt8IdUXAiBw7P8JJDKGaQTUx%2BrdB0WlmU4PvnU4MCKmHRRA%2F%2FEm%2Fir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM8a264An%2FlRqi6uezKtwD1NQBTqMZzTGj5ElS8cpfc11Vu%2BonRWVR3WUS1mrUIBGbjpi7J6M4L3asyoooNVDTTSqrV%2BA8u8P59nqpg3lVPE1ehEAM4uT9WQWHtIx1rZe%2BCgN7bNSeh6oy5xfN3D6DmbGxrOHIAkYsv9bQ0oVDlgS8eCaa6ZdntWfDmkWRdxKsUaAnDCRG1ke32n6tjw9XgXkPqWsXY2%2FyMX3hv8gUlIbKyHv88z2C7fCI4nJ6H4bp2Q%2BY%2BPYMR5yVgNoH7Y5psVlnbbAlssQoZVF0yCaPTX2f9KivamyT0tbUv5QSIb5GpnXM8DlbEsSCKxxATFbgJ55eKsBTxHH59de%2B%2B0LDanHN4oZoTNMxM3mDIewCcOmE0IlxQajLp6Eoul7hKhbCLEbz8hf12OfMEzkpxch4sakpLFli%2FMK3iOGQLSkcIpfRisbZKOyImQCuek0ZRtJlGeS%2BBr%2FjttWMOUo%2Fr9lrLbP3YekhWDcGnYxwwBvjs0DgIoH8v2HIEmRAJJC84EVkuTFC0KrVq9ZlEy0rJkP43NhLPVQxEp7kHl0MXKk26beiiukKNiX5AVYHYgTKZn%2Fy3m1HpqOIsio0ZzxXSS16czX0HhuBV%2F%2BhE9xSS%2FAKMsaoTLvyFiegR4VfUIAwwKK7xAY6pgFYvk8SHVs4dXgRz9YJjJ%2FpmMb7fSFa4bDsrWOAGKysUSSOq92UU4GOAeUfynU5duGT8ivvAAxU5Yngb23Xy8%2BhVvoSlQGY6c%2Fs8H0kGEyoUk3ftcUiTezhUgJPN6veSnG8YrMeJCNavVMwNRqkvFv0ET%2F49EYamS05W2Axm83mNwUPqWdGhzLZC7we2PDYhajdblBMGMr7V3E06jpzfzcDf%2BzQFmfA&X-Amz-Signature=0cad030cebaf08554479f4603376295eae241d521969eb5b462076269f5a3927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5Q3C25%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEPTa0njKuG1yHT2R321eFbDEbdU%2B%2Bt2Qsysnt8IdUXAiBw7P8JJDKGaQTUx%2BrdB0WlmU4PvnU4MCKmHRRA%2F%2FEm%2Fir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM8a264An%2FlRqi6uezKtwD1NQBTqMZzTGj5ElS8cpfc11Vu%2BonRWVR3WUS1mrUIBGbjpi7J6M4L3asyoooNVDTTSqrV%2BA8u8P59nqpg3lVPE1ehEAM4uT9WQWHtIx1rZe%2BCgN7bNSeh6oy5xfN3D6DmbGxrOHIAkYsv9bQ0oVDlgS8eCaa6ZdntWfDmkWRdxKsUaAnDCRG1ke32n6tjw9XgXkPqWsXY2%2FyMX3hv8gUlIbKyHv88z2C7fCI4nJ6H4bp2Q%2BY%2BPYMR5yVgNoH7Y5psVlnbbAlssQoZVF0yCaPTX2f9KivamyT0tbUv5QSIb5GpnXM8DlbEsSCKxxATFbgJ55eKsBTxHH59de%2B%2B0LDanHN4oZoTNMxM3mDIewCcOmE0IlxQajLp6Eoul7hKhbCLEbz8hf12OfMEzkpxch4sakpLFli%2FMK3iOGQLSkcIpfRisbZKOyImQCuek0ZRtJlGeS%2BBr%2FjttWMOUo%2Fr9lrLbP3YekhWDcGnYxwwBvjs0DgIoH8v2HIEmRAJJC84EVkuTFC0KrVq9ZlEy0rJkP43NhLPVQxEp7kHl0MXKk26beiiukKNiX5AVYHYgTKZn%2Fy3m1HpqOIsio0ZzxXSS16czX0HhuBV%2F%2BhE9xSS%2FAKMsaoTLvyFiegR4VfUIAwwKK7xAY6pgFYvk8SHVs4dXgRz9YJjJ%2FpmMb7fSFa4bDsrWOAGKysUSSOq92UU4GOAeUfynU5duGT8ivvAAxU5Yngb23Xy8%2BhVvoSlQGY6c%2Fs8H0kGEyoUk3ftcUiTezhUgJPN6veSnG8YrMeJCNavVMwNRqkvFv0ET%2F49EYamS05W2Axm83mNwUPqWdGhzLZC7we2PDYhajdblBMGMr7V3E06jpzfzcDf%2BzQFmfA&X-Amz-Signature=e4155ab384c42683187aceef3978d3249b72e096cc1440d15fb040b519195f2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5Q3C25%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEPTa0njKuG1yHT2R321eFbDEbdU%2B%2Bt2Qsysnt8IdUXAiBw7P8JJDKGaQTUx%2BrdB0WlmU4PvnU4MCKmHRRA%2F%2FEm%2Fir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM8a264An%2FlRqi6uezKtwD1NQBTqMZzTGj5ElS8cpfc11Vu%2BonRWVR3WUS1mrUIBGbjpi7J6M4L3asyoooNVDTTSqrV%2BA8u8P59nqpg3lVPE1ehEAM4uT9WQWHtIx1rZe%2BCgN7bNSeh6oy5xfN3D6DmbGxrOHIAkYsv9bQ0oVDlgS8eCaa6ZdntWfDmkWRdxKsUaAnDCRG1ke32n6tjw9XgXkPqWsXY2%2FyMX3hv8gUlIbKyHv88z2C7fCI4nJ6H4bp2Q%2BY%2BPYMR5yVgNoH7Y5psVlnbbAlssQoZVF0yCaPTX2f9KivamyT0tbUv5QSIb5GpnXM8DlbEsSCKxxATFbgJ55eKsBTxHH59de%2B%2B0LDanHN4oZoTNMxM3mDIewCcOmE0IlxQajLp6Eoul7hKhbCLEbz8hf12OfMEzkpxch4sakpLFli%2FMK3iOGQLSkcIpfRisbZKOyImQCuek0ZRtJlGeS%2BBr%2FjttWMOUo%2Fr9lrLbP3YekhWDcGnYxwwBvjs0DgIoH8v2HIEmRAJJC84EVkuTFC0KrVq9ZlEy0rJkP43NhLPVQxEp7kHl0MXKk26beiiukKNiX5AVYHYgTKZn%2Fy3m1HpqOIsio0ZzxXSS16czX0HhuBV%2F%2BhE9xSS%2FAKMsaoTLvyFiegR4VfUIAwwKK7xAY6pgFYvk8SHVs4dXgRz9YJjJ%2FpmMb7fSFa4bDsrWOAGKysUSSOq92UU4GOAeUfynU5duGT8ivvAAxU5Yngb23Xy8%2BhVvoSlQGY6c%2Fs8H0kGEyoUk3ftcUiTezhUgJPN6veSnG8YrMeJCNavVMwNRqkvFv0ET%2F49EYamS05W2Axm83mNwUPqWdGhzLZC7we2PDYhajdblBMGMr7V3E06jpzfzcDf%2BzQFmfA&X-Amz-Signature=df21840e15d377af03973c6c40affe1adbfb07a68493bd70785b81d989085c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5Q3C25%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEPTa0njKuG1yHT2R321eFbDEbdU%2B%2Bt2Qsysnt8IdUXAiBw7P8JJDKGaQTUx%2BrdB0WlmU4PvnU4MCKmHRRA%2F%2FEm%2Fir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM8a264An%2FlRqi6uezKtwD1NQBTqMZzTGj5ElS8cpfc11Vu%2BonRWVR3WUS1mrUIBGbjpi7J6M4L3asyoooNVDTTSqrV%2BA8u8P59nqpg3lVPE1ehEAM4uT9WQWHtIx1rZe%2BCgN7bNSeh6oy5xfN3D6DmbGxrOHIAkYsv9bQ0oVDlgS8eCaa6ZdntWfDmkWRdxKsUaAnDCRG1ke32n6tjw9XgXkPqWsXY2%2FyMX3hv8gUlIbKyHv88z2C7fCI4nJ6H4bp2Q%2BY%2BPYMR5yVgNoH7Y5psVlnbbAlssQoZVF0yCaPTX2f9KivamyT0tbUv5QSIb5GpnXM8DlbEsSCKxxATFbgJ55eKsBTxHH59de%2B%2B0LDanHN4oZoTNMxM3mDIewCcOmE0IlxQajLp6Eoul7hKhbCLEbz8hf12OfMEzkpxch4sakpLFli%2FMK3iOGQLSkcIpfRisbZKOyImQCuek0ZRtJlGeS%2BBr%2FjttWMOUo%2Fr9lrLbP3YekhWDcGnYxwwBvjs0DgIoH8v2HIEmRAJJC84EVkuTFC0KrVq9ZlEy0rJkP43NhLPVQxEp7kHl0MXKk26beiiukKNiX5AVYHYgTKZn%2Fy3m1HpqOIsio0ZzxXSS16czX0HhuBV%2F%2BhE9xSS%2FAKMsaoTLvyFiegR4VfUIAwwKK7xAY6pgFYvk8SHVs4dXgRz9YJjJ%2FpmMb7fSFa4bDsrWOAGKysUSSOq92UU4GOAeUfynU5duGT8ivvAAxU5Yngb23Xy8%2BhVvoSlQGY6c%2Fs8H0kGEyoUk3ftcUiTezhUgJPN6veSnG8YrMeJCNavVMwNRqkvFv0ET%2F49EYamS05W2Axm83mNwUPqWdGhzLZC7we2PDYhajdblBMGMr7V3E06jpzfzcDf%2BzQFmfA&X-Amz-Signature=43558096ad9d3f609bdc44d2912903dfd5c709706754aef3a26fb3c57e6e8081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEPJW65F%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5cRTDy73tDNJ9GWyRe0%2BwU4bg0S8ZjzbzK%2F9owTUNqQIgTtuDW2yUkSsin3Xv%2B0t%2BF287L8XmJEKQQoQFKm%2BcnZIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOjodo6%2B3IfSdkM6zyrcA7TYAPqPYiyEWAFvXA4tHC3o5M5K4Ys9oU2C74sVlMCE6XwT0qfSzy9HmdjXaG0aj62KGRm2DqvmgPbXARi%2BvnFnD%2BZtJowq%2BCKGxiK8bcLmuWcCwasUP5pfQFj%2B3FEPn1ry0iyElyDwB6GVzWO4d0q0e4p7cskxSOm35kQXrwgHr%2FBza7Lpqwn6wZPmA0Ps8ZnqRtnECA0BjT76tUzPwi3SZEs42d1XwduFbx1XRUYJpbRU32BffzueNjKSPVJ8bOXZlVCNWYGTkE44FAWBnRNcpA2bk1iYMVz1p2qvb7lP%2FCQY3lxMNImeslUWziicbTqxzTPLHpXVHM0uMMJaY9rONO4r2Huv2X7TSw0VShXUI6i1PkjTNea24sYDwg%2Bf0H98rtKQytjTvWpcjsBDfe1zZXjhfXrKCSk9oc68836kgY7HAhw8%2BL5nYZ4FsCkhkvvtIyalNGo0Odid8P0UjgZa1EqPjTxvSJqG%2BLZZtZ87Wg0%2Bmz9HM%2FsRhLWYsinPX742QM0aNEaivJ51uQ%2FfG2kPbIwjRmUm6DK5LmmatqYbOaibvcFaHN40VT2Fo7K%2FAG6Bxt4hn9HhVfJD9%2BnhDgyvY%2BJJUmH3oS7b4oh1k7N5N%2BE9XsH%2B7yTPBJdpMJ2mu8QGOqUBIL%2FKBsFKIuy7WfQDeLsLGLbOHWFgRh1uFPndnJoB6iI1Sana%2FqVHHhrzXp%2FEMn5mQOidOYU5ZGiaLdLhA3FUW46cMDDGb3imdBAztiX%2Fii1apvi37RS4%2FY29yL5jKt0dP%2B88VWyYPqH0PlwjrdUX4TyUha4SLTHDjt8nfGS7fbQPHgVv6piy1qw0qD9%2FOn8QEDUCH43PQavrwkdtjf%2FcZjY9GI1H&X-Amz-Signature=34e848537ce88874b61b502986f0a9f9c8ac2903bb8fbb0f66f676c5fd17c345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2RBEOKY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXebQKXCZ9UqKrxmLg6By1XxdlpnQ8vSDuSr0jYTtv5AIhANsGGQ6HlhlouHp2%2FQEgYTVzo75i6wib8sruzB86VBl2Kv8DCCQQABoMNjM3NDIzMTgzODA1IgyR4hfGti4ERfnfwL4q3AMPZ1COU%2FzUFP%2FszYRxgZp98XNUKwiAKI4h6HkUrmLU9sZ0toCBw0POVmmszTD3hYtPahJ7ajZgUA6y1X1I0jVx4vL0BQaWmiX8MeLMf6QEyKd0BqgLe45ElC4qwi6UbFTAJetHzXeM3p%2FXfPTmdNuv90jZ2oHRVTmkQrGxup%2Bjv0XEil%2FAHZXYVPceFbAfSfGFLmETqnKcmAdTy%2Fs%2BEmlSC4mp6J8oOAFcpCFziQJqUN%2Bo0iPVtqn2VuRVN7fUCs7LzXJgnuI2iOU%2FSfesyy9NUwP9J0nRhZdLgKuAf3Z9Jrp9Tk1A1%2BdQNXxIm53Pqu6%2B4lYz8QH8DMHuGtwQKAIfJ6xH88iE7sHEnDiOKAJUQszg76Z0t14M5WGCmg1kgpN1ARKKPu07jUdIadf6WDzqP0xU%2BjYynGsWcizVEt2CowOEkuFGU8PFWtVN%2Fu57meVS4b8oNzgiUsQgQEDYQ26rb12%2Fqy7pik52RwukaAefYRYBaJjPUnw1%2FJjrtRJgkSWWWE%2Bqqa7hHJ8PTHamOaeeQwQVPa1y2FrcZHJBCvtBoDySEmuJIiaZNz1Rwhtml9AfPrBHkcJB25vxCLhqi2OjS%2FQsH4WM%2BsZQzrqq5BsrCZoXxHzoNljwFV7F3DClm7vEBjqkARFghAds%2FhIxDt%2F5JYzruYV4mEnU50%2BoTNVqQZYHb2qQPlwoxCvKMNqqBPJVpsquBdTmxf%2FMXrcfbdcqm4O2TetvHCALcxOTYSJkC2AwdRcSX6sDxtpTZEaB6Rx2FgRR4t%2BcqkXWtnj5EB4BoYMdsgh3wSuC7nY5mMd8EKfSGKpXVFs0Yh%2BD%2Fz8UNCgvvk95xKl%2BhZC%2FvS5xBRExunC955ld45rb&X-Amz-Signature=08c54f90bb9d074caad743fb47d79ebe3bf95e2a810ede158d844d0db7c338ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRSYKLZZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH0LWYKA9CuN5GxbyQCTaiA6mfKU7qgR6VGyA8Ivn2N4CIFkKL%2F1oc5dFPPjepms3UjRKqQhMVYzzCsyuNywGoTUyKv8DCCQQABoMNjM3NDIzMTgzODA1IgyEcy4PMsCpRaE0xG0q3ANdfHfU%2Ft6UmwgOnrJJ7SNhTczy2gC0XXeQDqjVPL3NDqTT8o12V4lPPPPuUNmzCym6xAENj2SvhQF7VtTVm7fQjorreVE6yJ4aZ37cxom27cOlAqTQ0%2BDwo8%2BkPd1%2FIaf5sUAz9X0nib9y0ixBJHhjpxX%2Fg8lE7%2F7mTcvDjn7kQIINOUk4%2FTkMdsqQ%2FWLucGSpl6SiL%2Fwtf%2BLCGPW3z8aMp1I67uJ2MS8NzjmxkDPA1l%2FslFi%2FMOjtU93R6gxlE%2FHXfojYAsFACpiDo4bk%2Brc44c3e2jZh5K9wo27iGojplWdp5xMNaOM0zalyHQuM%2Bk%2B2968qRSWo9NsmNSm2Cwpkg2SSv0v8lb%2BQfY1V5An1INtaND1Kp0aCxAoCiqHGr5Qq0dgzROlaryk%2FWSuXVvujznhhUCLC8LR%2Bb6foYjR%2BULmPE4ynB4hRc77DauLsUzj%2F8YMZXBlv8gyU%2FwGU0V7zViBF99F6DY%2FH17BHVSKPFYd%2Bjit5tcpU%2FlV23lduGF7sW3Uy%2BDhhc0APHec%2Fq4wLKa%2BdbCMy%2FWQ9Y%2B%2FEbf9FKZh13bSX5tGCI5JfzA4cefZgfZcVHrvX6a9meuIyGI9ANrgJaPcZcQCmEd4ivxODMR9Bd8UuNEnjDExn8jDqpbvEBjqnASYE87ipbuhBQgJcqvIo%2B4n229LaLSbDTM3JAX7y%2Bn9DOB9uCx00w32KufQEi9Cnri%2F8Z4jke6JvsovrBChz9rKV%2BVc%2Fk%2BeonPiGKh5AkJIo6%2BudSq1fNGplzyDrIEpQwttvfrUcLUy2sFetVlgWdGvIiuCEZUklMG9VZQ4LSCXuCr7CAtlwr4ubQPDJFwXA%2FjipLNzzZ61QAdgU4CvjJklFXvPu8di%2F&X-Amz-Signature=9e8f52acddc28897388678362a657825fed785cb6282ee5aab9fb802fcc24c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5Q3C25%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEPTa0njKuG1yHT2R321eFbDEbdU%2B%2Bt2Qsysnt8IdUXAiBw7P8JJDKGaQTUx%2BrdB0WlmU4PvnU4MCKmHRRA%2F%2FEm%2Fir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM8a264An%2FlRqi6uezKtwD1NQBTqMZzTGj5ElS8cpfc11Vu%2BonRWVR3WUS1mrUIBGbjpi7J6M4L3asyoooNVDTTSqrV%2BA8u8P59nqpg3lVPE1ehEAM4uT9WQWHtIx1rZe%2BCgN7bNSeh6oy5xfN3D6DmbGxrOHIAkYsv9bQ0oVDlgS8eCaa6ZdntWfDmkWRdxKsUaAnDCRG1ke32n6tjw9XgXkPqWsXY2%2FyMX3hv8gUlIbKyHv88z2C7fCI4nJ6H4bp2Q%2BY%2BPYMR5yVgNoH7Y5psVlnbbAlssQoZVF0yCaPTX2f9KivamyT0tbUv5QSIb5GpnXM8DlbEsSCKxxATFbgJ55eKsBTxHH59de%2B%2B0LDanHN4oZoTNMxM3mDIewCcOmE0IlxQajLp6Eoul7hKhbCLEbz8hf12OfMEzkpxch4sakpLFli%2FMK3iOGQLSkcIpfRisbZKOyImQCuek0ZRtJlGeS%2BBr%2FjttWMOUo%2Fr9lrLbP3YekhWDcGnYxwwBvjs0DgIoH8v2HIEmRAJJC84EVkuTFC0KrVq9ZlEy0rJkP43NhLPVQxEp7kHl0MXKk26beiiukKNiX5AVYHYgTKZn%2Fy3m1HpqOIsio0ZzxXSS16czX0HhuBV%2F%2BhE9xSS%2FAKMsaoTLvyFiegR4VfUIAwwKK7xAY6pgFYvk8SHVs4dXgRz9YJjJ%2FpmMb7fSFa4bDsrWOAGKysUSSOq92UU4GOAeUfynU5duGT8ivvAAxU5Yngb23Xy8%2BhVvoSlQGY6c%2Fs8H0kGEyoUk3ftcUiTezhUgJPN6veSnG8YrMeJCNavVMwNRqkvFv0ET%2F49EYamS05W2Axm83mNwUPqWdGhzLZC7we2PDYhajdblBMGMr7V3E06jpzfzcDf%2BzQFmfA&X-Amz-Signature=b6c2f307123410220a445e270166044792b8705c6a35e091d6897692aa6c8802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466765HYYT7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxpNqJXA8%2BdzZm%2F2mI61xBdYhebKDgvBrYUAWncD6nagIgfXYM17CJWBAZDRPGxKnQfg6WrRrWyL1eZWdKJ6sZVscq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLmzdrJRQjxYIStq0ircA1oXqXHPtpiIKlNka1t5vYctp9xp%2BZIfza%2BzsK3%2FsAifaO41n%2B9RUqT1bSOflq4CBapmUMt6%2B6xe3uG3CFBpwRBF1rqJS8ZmeLxCm%2FypGdTLh51jLhcGdmFErpK6F%2Bsk9keJpCG2vT0XS3%2B03GxJmBrShB%2BqFQGk%2Fn17trlcrv5mILWTQJhfVafQhEHeaMqwKKwmvPjFFbUVEZMP%2FStxBxTEwxkyNM%2Fl13oL1HbECYi2AjO5ZuayYtJ62FLHeW%2BIeCl9RVjNH0XoNwBBcvNYAAOjSl0gOGwMQbsudibg9ZFDGsvmEGE%2FCc0KwHR0j15R96BcNhH0G22Ev4ilScbinVVAzFI9KF%2FCh%2FxP3QxH8uanuhnsLcxdSbGxsgsZ6VGEdNIxeHocZVzspf63O7iZ6VCudjaXxvT75438EGO6tmaupdI2476Wt9Z%2BVUyrJGbDHpqoJinofWRBsEEzkIv2asGOhtCH1vLLpzNRRvPW8FHDPVkZOnlcbJ6eg%2BQxQoghDTdcF7YypVyL59ScZ8cMBeAkqPI6XeYRuZ2yErC4A8x4FwrKYjwY6t3BAP6igVcdGLd36DpiLXKutqAXycSvX3UDZSLNo%2FcGco1zdLpIAYClr7OofAeOpdKwxQQjMI6iu8QGOqUBZJ6DMvdeOEmZ5F1K2W94E6nDzqQhR46BovoLB%2Fh6TnVap9L9AuvbKFoUAZrI5ly%2FkZ3laLqWHbS3JSmv7fLfYQ8b1BkBBKStmV6FPPRU4ByuCjiyM2%2BKoiIfRnC8M0CRA3FAHzMWyqshD2gmS35DkSjJfu5lp4f5n41iQCj8FO6DLBD8fQINH7HpPrCyRytxuFhi0TdVx175ZTs7%2FI0twjavD2dG&X-Amz-Signature=9613911332aa73321fba65fe09c8858eebec24ef87ed7f5d7117157ac448fa7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5Q3C25%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEPTa0njKuG1yHT2R321eFbDEbdU%2B%2Bt2Qsysnt8IdUXAiBw7P8JJDKGaQTUx%2BrdB0WlmU4PvnU4MCKmHRRA%2F%2FEm%2Fir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM8a264An%2FlRqi6uezKtwD1NQBTqMZzTGj5ElS8cpfc11Vu%2BonRWVR3WUS1mrUIBGbjpi7J6M4L3asyoooNVDTTSqrV%2BA8u8P59nqpg3lVPE1ehEAM4uT9WQWHtIx1rZe%2BCgN7bNSeh6oy5xfN3D6DmbGxrOHIAkYsv9bQ0oVDlgS8eCaa6ZdntWfDmkWRdxKsUaAnDCRG1ke32n6tjw9XgXkPqWsXY2%2FyMX3hv8gUlIbKyHv88z2C7fCI4nJ6H4bp2Q%2BY%2BPYMR5yVgNoH7Y5psVlnbbAlssQoZVF0yCaPTX2f9KivamyT0tbUv5QSIb5GpnXM8DlbEsSCKxxATFbgJ55eKsBTxHH59de%2B%2B0LDanHN4oZoTNMxM3mDIewCcOmE0IlxQajLp6Eoul7hKhbCLEbz8hf12OfMEzkpxch4sakpLFli%2FMK3iOGQLSkcIpfRisbZKOyImQCuek0ZRtJlGeS%2BBr%2FjttWMOUo%2Fr9lrLbP3YekhWDcGnYxwwBvjs0DgIoH8v2HIEmRAJJC84EVkuTFC0KrVq9ZlEy0rJkP43NhLPVQxEp7kHl0MXKk26beiiukKNiX5AVYHYgTKZn%2Fy3m1HpqOIsio0ZzxXSS16czX0HhuBV%2F%2BhE9xSS%2FAKMsaoTLvyFiegR4VfUIAwwKK7xAY6pgFYvk8SHVs4dXgRz9YJjJ%2FpmMb7fSFa4bDsrWOAGKysUSSOq92UU4GOAeUfynU5duGT8ivvAAxU5Yngb23Xy8%2BhVvoSlQGY6c%2Fs8H0kGEyoUk3ftcUiTezhUgJPN6veSnG8YrMeJCNavVMwNRqkvFv0ET%2F49EYamS05W2Axm83mNwUPqWdGhzLZC7we2PDYhajdblBMGMr7V3E06jpzfzcDf%2BzQFmfA&X-Amz-Signature=d114672b637ce4a8c40c7f544f8ad77eec6357e94f65c318bd98a1fdb3413b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSYKU6DG%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrEEy3K8qlBO2kdb1Usfvf4GXgkpRKjYoHgscLnQSvfwIhAKCprmqzC4%2FDT6oEVRiy8gFhG9frf%2BlE8Xp6aGKDLRgUKv8DCCQQABoMNjM3NDIzMTgzODA1IgxBFvhPxDOdGbFA7LYq3AP4WxRjD5Z90kr0ZHjPhmZm2UE1ltRyt%2FHwwLtvX8xFCk8ICTwZY32zeHIUacqyn8H423GuT73ccDYL9yABrvKi1E2FMAo%2FP6Hivg%2FWCBeb%2BR1GvSxxSViVeePq3b9wZmXC%2BRsRc10Gw3rDSw7iWN%2F3hopVFbyvoI9ySXbD0pGXrkWIEOlRCL9pK0JIZttg%2B2v2p7d9p5NM0V1uCeIVAcXgjcK42qb84AxyTT1ClQxogdjSzCAmnej7QI9m3tDV6OJB6Krp0x9XYTDE3mz%2FDjBTF8Y105rJCWEiC94HXV%2BsHH0OfG15Gm9hbqsvw5kcBNrJ7hQITb%2F6ALgI5Jh%2Fej8q%2FmzRoLZO8qog30XN6%2B5OUlI%2BSQJNyL4QN%2FI3dMLbyP3oDZ%2BCp62WEP7c%2Bf%2Fsqy4FkztwWjtY5%2FhnpJ1ffCCbPea%2F9k4QGeMEx3fTnAduswGdlHgxeFAzeZbAJISmIrwZuTVeJhTzBP8bkXYJSindYp1c%2B8kdoTos%2BKkpdQtA6%2FzN9lGMbPUTt9AWSrE24Uje%2BTEg%2Fe1VBX7VPFKK4Mlw5BBj09l%2BAz5ztZWqaw8im5xCZyu2ELjmB4TGGh1ct6GutpTjKEo1MtTQxjBwWluxy0l%2FXgMuBUgMoCTmaTC%2Bo7vEBjqkASrW4DCAsMfGMR3mNz6BuKYjS7vNTVBdTbNaZ7%2FnjHPLM7ZVndYlJsEDPjDMFQko2lRscLJ1jebi01m4Ln0NbVrSVuwUA6sCxmAJgfdFpBr4gNlhzpqALPHr1buNfsKglDPGZT%2FERFoF04Dv5Tt0ZsuNkZ8ZeJybpXoe2d%2BZ%2BC%2BfToIg3GevWKdx9PQQ0N6aiKHKLNTy8KobPLw%2BUwR25FeP1C5P&X-Amz-Signature=c58421ed6bc6828da8fa3dba5af1edd444eb27850fff5b1226766bfefd15b1e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5Q3C25%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEPTa0njKuG1yHT2R321eFbDEbdU%2B%2Bt2Qsysnt8IdUXAiBw7P8JJDKGaQTUx%2BrdB0WlmU4PvnU4MCKmHRRA%2F%2FEm%2Fir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM8a264An%2FlRqi6uezKtwD1NQBTqMZzTGj5ElS8cpfc11Vu%2BonRWVR3WUS1mrUIBGbjpi7J6M4L3asyoooNVDTTSqrV%2BA8u8P59nqpg3lVPE1ehEAM4uT9WQWHtIx1rZe%2BCgN7bNSeh6oy5xfN3D6DmbGxrOHIAkYsv9bQ0oVDlgS8eCaa6ZdntWfDmkWRdxKsUaAnDCRG1ke32n6tjw9XgXkPqWsXY2%2FyMX3hv8gUlIbKyHv88z2C7fCI4nJ6H4bp2Q%2BY%2BPYMR5yVgNoH7Y5psVlnbbAlssQoZVF0yCaPTX2f9KivamyT0tbUv5QSIb5GpnXM8DlbEsSCKxxATFbgJ55eKsBTxHH59de%2B%2B0LDanHN4oZoTNMxM3mDIewCcOmE0IlxQajLp6Eoul7hKhbCLEbz8hf12OfMEzkpxch4sakpLFli%2FMK3iOGQLSkcIpfRisbZKOyImQCuek0ZRtJlGeS%2BBr%2FjttWMOUo%2Fr9lrLbP3YekhWDcGnYxwwBvjs0DgIoH8v2HIEmRAJJC84EVkuTFC0KrVq9ZlEy0rJkP43NhLPVQxEp7kHl0MXKk26beiiukKNiX5AVYHYgTKZn%2Fy3m1HpqOIsio0ZzxXSS16czX0HhuBV%2F%2BhE9xSS%2FAKMsaoTLvyFiegR4VfUIAwwKK7xAY6pgFYvk8SHVs4dXgRz9YJjJ%2FpmMb7fSFa4bDsrWOAGKysUSSOq92UU4GOAeUfynU5duGT8ivvAAxU5Yngb23Xy8%2BhVvoSlQGY6c%2Fs8H0kGEyoUk3ftcUiTezhUgJPN6veSnG8YrMeJCNavVMwNRqkvFv0ET%2F49EYamS05W2Axm83mNwUPqWdGhzLZC7we2PDYhajdblBMGMr7V3E06jpzfzcDf%2BzQFmfA&X-Amz-Signature=448b41095c785aea394eb3213ef7491b2364a50af265b3ddb65e3736746cfd5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPRG3YE3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo9mFMfECNo8okEJCIL9s4u0eQdTclq92gdr2%2F2WMlvwIgW12sdYI%2BzKBVAwFVX4t5hXsb%2FaUo9HkjcrvW1dvmYU0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDL1g8O7K9b2qsf3muCrcA1d45decgk1vA5tKTaig%2FvDoBnKVjBSkaPS9Z4SoMz8vIi%2FSUuCWf7NZ6MQ6jrx3VvojtRaEsgY0K%2BkO0yxuwNfDpGCPhXZ65DgiVs8XQyASOCoy6xYum1p25h%2BL9zZKj0sHbKFdRBR%2Flht%2FFllrrbXWHW1qbmldFpHue76IPwe%2F4Z6f1n%2B6iAwFh1mExIVmjQNPdKnZBGJkqw3K6B29EJouwwtRK8DROxSD%2BLHdQO8yF70iPOGH2y8njHlZY8JXr8jvDiOLVHhJ8l%2BkXdRX84qJWS3Y6oJJipBpKWTfvUdwA0a9FOROvcXu8n%2Boy3CEgz77PdeZJcP7pN%2BYVrXb9CDYnxjIGkcC8auViSBjiDoDx189Cv6yo0Y4YFR2LLI0k4qo0k9bx68HVeddD8TtM3qFNnL7fSSZoIfCrCgPBDPuVzTCN5vPPMx0Y%2FBKxRLIxZi%2FnYS9F0peqmWkbNFNO4h2L2jB2UrVHE2aPyckQU2SR8ukfIMy76yUN4io2QzqXem8AKTo7A3XQyPDXbWYw9ehpjIyZLoF7UYgGugLh7Z3i%2FobfYdIaaSyMKAZ6wVx%2FtxEcPAqm89To6O7qCd9dseMoOvA3aJNgreQbpXEkIe7Pk9m7H2lSt5xcnzOMKaju8QGOqUBOGOhbDH8ow7gwQ6pLWg%2B3NpiZBBTZNlpB4G5yJPJ0%2Fr6xpq1hOVGFMTDX8ZduksH2MzdHexHZsMVq2KdNm4pwnpFaZ0EKbfngrkIcklgASP4iDP743hwstKwpu2xHLoFT6RdlN9B53qxaH20ircbVRpJmKbon56FU36TTl%2FqBRS5uhNBjt6zovIO0163vL%2BjyqZbcsb%2FgaXmhAf1lqz3zox41hvW&X-Amz-Signature=cf4f914e73010121b43bc863b1f943ad321cf80c18dbc847c8d7ad60e2d90d54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5Q3C25%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEPTa0njKuG1yHT2R321eFbDEbdU%2B%2Bt2Qsysnt8IdUXAiBw7P8JJDKGaQTUx%2BrdB0WlmU4PvnU4MCKmHRRA%2F%2FEm%2Fir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM8a264An%2FlRqi6uezKtwD1NQBTqMZzTGj5ElS8cpfc11Vu%2BonRWVR3WUS1mrUIBGbjpi7J6M4L3asyoooNVDTTSqrV%2BA8u8P59nqpg3lVPE1ehEAM4uT9WQWHtIx1rZe%2BCgN7bNSeh6oy5xfN3D6DmbGxrOHIAkYsv9bQ0oVDlgS8eCaa6ZdntWfDmkWRdxKsUaAnDCRG1ke32n6tjw9XgXkPqWsXY2%2FyMX3hv8gUlIbKyHv88z2C7fCI4nJ6H4bp2Q%2BY%2BPYMR5yVgNoH7Y5psVlnbbAlssQoZVF0yCaPTX2f9KivamyT0tbUv5QSIb5GpnXM8DlbEsSCKxxATFbgJ55eKsBTxHH59de%2B%2B0LDanHN4oZoTNMxM3mDIewCcOmE0IlxQajLp6Eoul7hKhbCLEbz8hf12OfMEzkpxch4sakpLFli%2FMK3iOGQLSkcIpfRisbZKOyImQCuek0ZRtJlGeS%2BBr%2FjttWMOUo%2Fr9lrLbP3YekhWDcGnYxwwBvjs0DgIoH8v2HIEmRAJJC84EVkuTFC0KrVq9ZlEy0rJkP43NhLPVQxEp7kHl0MXKk26beiiukKNiX5AVYHYgTKZn%2Fy3m1HpqOIsio0ZzxXSS16czX0HhuBV%2F%2BhE9xSS%2FAKMsaoTLvyFiegR4VfUIAwwKK7xAY6pgFYvk8SHVs4dXgRz9YJjJ%2FpmMb7fSFa4bDsrWOAGKysUSSOq92UU4GOAeUfynU5duGT8ivvAAxU5Yngb23Xy8%2BhVvoSlQGY6c%2Fs8H0kGEyoUk3ftcUiTezhUgJPN6veSnG8YrMeJCNavVMwNRqkvFv0ET%2F49EYamS05W2Axm83mNwUPqWdGhzLZC7we2PDYhajdblBMGMr7V3E06jpzfzcDf%2BzQFmfA&X-Amz-Signature=6bf6f8173b382da98cab06809f9595eb8accae32235478db312a0713c8a1731f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQFX5EBA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi%2BTNV9JM0abg9ZZSmqnvPkbtZzmjUgatlDqPxmM2fzwIhALZv%2B2%2Fw1g1OLXq4kgHE6DluzQxgwPPjLJeJi1oLcnJhKv8DCCQQABoMNjM3NDIzMTgzODA1Igw%2FDTnlIxPC4xlDXg8q3AMPEQdJukg%2FV1NtN%2B2GpoDz0MUSNpTgMXHHmZdWj112K4%2BTPjx8rF1R5zttRF7aSnTIIXdycsT9gmYrQXFKWDyQm6rnvgZvVSXixeIoosuIp4YM1jxq1bpEdKJ7rIz6wMYmcUVnUY%2FyxFy52qstK%2FVFxP4kepxHqhrHmcGnQ59MIU%2BXtVCMQrMsGTz4U7FKF7TcJbDTbL0C7SRN7E%2BPanpH%2BboTi81VSn5%2Bvk%2BSh4OlDnPpvtoPtLIQhxzkb8J6E%2BiroiODFKduomlKuTDG3pymiRCPbMafgslijx8E%2BHwizCI%2BzigJfb66JWtXuGfZTqhe2OQklXcJMWS343wLLYOrFbl58qX6h33DtkBVx1n9lb5ymKFe8Jk9qG0HD2WokkWQuar5vafKCAFGGGoy0pKYX4Ihimx5RRG779ASueDXu7uD%2BPWSLoxEIMv%2FhhxerDbNcUlvbQrqLAgqSIWm%2B4G4pGA3BROYhpbYqQoklDSwRxi9HPyn9QhYSqEpHpGhF2cszoVZgWUsJnRPC7lJlqGaU2XajTVn%2Ft1SgsO%2F%2F1BOthkclLq4T0mHCsFo%2BmbBgu6axdWOEYU3KYT1pVFmhjZwPDa42GV3XiauE6YXV5nfIwj4JFBkdRD1w93IDjDlobvEBjqkARHYOnkyTRD%2BEq0%2BrLx%2BLL0CnVqebCgywDcTOGZVdMiw90iZMuVgxsQwtaRmBoCQqRfoSjwNMlpw10PdB1mbyCzmQ13mzJSQ1fo4VVNhG0YISjNcp4C4UayQvywHw%2FSqd1sUURR7%2FSible4c2FiIPi8aqhfiXjfCP%2Ftktr7x%2FX0LSzdT4jupSu9UoupXJ9%2FRyqfAgsitZToNFdmqmHS%2BQ7U%2Ffx1c&X-Amz-Signature=982f5ab674128c4dc01145a5dc169ea1dffd407ee45b9873b6f9229b9dc3f452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAWZJ3TZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDG%2BuV8GaLXoPwDCktwEAuRF5Ebxn5rWrZ6LEHNqPzmRAiEA4nP9fhWXuaFeEd5xCirLiIM5cA3%2BCqaGcHYxl1CBKgkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIcoaCrFLXs%2BCSjVCyrcAxhvG5yud97qM8P2WBfC3EQ6xYa6qJb4TZg78e7yz2tgp8pOW3Jo02976UddvY2LCI9NtEWrgc%2Fgblswj1qi5h5PwhPy2xqHkuclQS%2BOeBnLYUOt83Erew60hSZwNeMyUwb%2BK45v%2FEglm6sygBXueTAaBLsYzKmnLUOqjzbr13sZhtGilmooTT5AsY4YpevRN6tpPEgVzDG48%2BYnpT3q7pvV9kjB20wCERsjHpi9RbIh1IGfp6jLbigodVSRk07fNwrsDRufbsFjvTC7oVjFjo6MhyjkMU9arQhs4yY9krkZ6j4pV9h0Kfup2P%2BMMwanA%2Fq%2BxvPMZrWJpPUR8PWfQPyiGcUY37ITZD812N45N62APXZxhpcL1sg6jYficUcf90ZHgKCNZqYMat1QwfmP3A%2BiXxU0e65J3QSijPjVQSUV0bA%2BnL2cJzGCRudKduDZoSWbdn4Km1VGNbk8nvNodm629lGHU6b7jdS%2FVR9WWC2ae10ai1BzimaY7%2FiQC7zo%2B3c2CqwfnS6lkKnrDYwOZUGFCaRxEj%2FB4hmGFdv9ZKo%2FA66QknPeYraoBagBHe0sbTr%2FSq4VPi%2FdnpFq1eJp0RJY5o8nvIG4%2BhFS6k1GaGznOditGl8bUdkcTHuYMJahu8QGOqUBD80EDAmqX7ivfDP3byOizCSUVz7KCKoip4%2BuG21EsPMM5kZjtZ0VsOxQ4hu%2F0X6g25yGKcyaWnYqHniGk6w7dZ8JYOogtPn%2BLTiaYFoy0oVo4xXicixhdw161Qz9Zc2Z4d7sLFCfucdGzz23rSOIJOZ75MQt1%2FDxYQqml%2FtZTDFHAsmepcDUkssLG0%2B5bIcZ%2FDCvi2yEde9UGnHIIK2tuRRCiM4X&X-Amz-Signature=c4c08450dd90e463d979a2e8e25930fe8dd94d32f247210a62a635a778150cd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GCZL3M2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCnuxzBhvshK3vVxsoQD%2FMrleHWtOjPjUZnEiVJHp4VgIgf%2FW9rYiUE6KgddvE9qhmu89PK7T98hd4tFx3y5lrMpIq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPrnuEInFePJAl63iSrcA8yveAFV0l65qQDQcNhjh7%2FHym%2FgycIp%2BorUIStsSG5Od4eXxmUl28ag1aC6dCdKP5Jajp3M7HjUTxNxZrzcn3BjQ9tNNjsx%2FHoJj3Y73yMP%2Fd6V9odMaRsZEB2cUHJy4U0sNRHAZhG6dFJ2jZXxEpdKfBibUyoFWhUiTaG4twxIZziFbOdaM%2F0m8wFpx3%2FSU6B4uU5m%2BA3MAP6Rvv%2FaUGP2TDcae4KrpBg%2BOaZYzPgW5kRP9KAOMkm0tfDs8fiqirgsWGT5d6n5nzBe9YpynxnWXtCmO6b3mfyXcf1kMeE7nyZMamkorLpIShLlDnGlV5%2FMe9W4Ws0wcBXJJX2a19npXeu3DRqVr14mcOU0kEDh9oLR64oFcaPpUyvdDv7F2wFBKL2ms75Zk%2FqPMX3cRRMtCjC15Vf1EHQzTuhZnBcNsuB%2BLqdeGuQJXbdFKn2zmt951cZoy9%2BxL2zTVu1RPK14bVVNm9N52ejbX67%2FpnJu2yCwrAI6BKtycVikN9%2Bw1Uvozcg8MAZVrFZneIuyNjWDpyMUiBDm1E4TwxtvBg82szlnOtzwEmwgg7hne2lbSzzAeetkxVRY%2Bb3nEZjZ4uTKSi%2Fx6mwOe4TDhgnQ6KFaZsL4ONT9x6qOpUNyMKCiu8QGOqUBQVHylAH1c8oeFH3jvdqI2aGzK4FmWSsyRB%2FodS6FD96yVgxpZpNRFXQEROKNpkQ%2FtdR9HoZNm3fM7r5saQveHxAB1fmPcNLkWj2%2FiuDKkTdSlSbAHHCqXkJn9fxWwe%2BgDpYAuwsGLKMbKdjR8kJarsKkGwTncm6y41SXZqLmZSxI4Xzwo3ow06l4WXSKq3eYra0WYsUNC82d%2BcD9l9aftpwDSklq&X-Amz-Signature=f17b0bebc0872da732a8c92acebdc39a4aeae496ec6628c05a88f96b5b65f933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDZN2P2R%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdenTsa%2Fnir%2FWrOogOqsVKzXxVgX40goVzGr1JKiUmUAiAE0H8sulOdvb0dJtSj0Ey7iSRlZg1NCv8QxRqLHeW4Sir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMVGk4aeZkQ5JVPwfRKtwDnKmmiDuUhfagvGTgJa9gUMWC7kR%2BcvGMRQrOs3AyMEHz%2BuLWqh%2BfwHzqV9LpHVt7abUNEidkIEuWii%2B45Tgv9NIzKMKkUyX%2Fdy4NGwujoKOp6rd5rNzDdniQdaH4z%2Bc7Uvo3CSbMkAxZJ0A0nKYllysllXPIeTlP5NxLQNFi5D8gzAVsoRJBM7%2Bb8RjkroayU0l%2BiCSTlm0khXQeRtHbNz5s6HZqBL9bmv0D5gSYpuX%2BQBZFpLFRhJP8riRRKbneMBMk7%2BlhmMbj0XfTB9c2zwy0zu6wdueQzAaNQxD0QGJamdDRQEB7v2attRThzHfN46tahRB86aaY7KVkdVRwMsuWbiirM3Ub5pqoxPVQi76iQVdqow4ouRvcw%2FpBoJEm2MQDOyB%2FMwPzGu%2BbG50LmfQw455OMonVMWrukR8uNx01VanODmTEa8jMEDDQ7QJlvJPytecn7%2FNqBskQcKbTb%2Fed%2FlF%2F%2FSM7KEyKtMRC5Ka8LOq3NyHbDprT%2FR83uhKu1OPlBhy623KQAFe40LeRT%2FRxclkYI8qAPu%2BkHlNMgGybY8lYEdlQQV1awtnRLyMiWU4Bo7r%2FA2LtbuHlXcbXcZY9vkI3z9Xn1PHsrR8o6rBR4hk89mvKfIbsvfIw8py7xAY6pgHDvg4NfoPaUItnoxMAKSPjqr%2BgaFLNDICLMXr4kfByPiQtmD8F4M9LAlG%2BX%2BfpfgWDZ0hyBEor%2BubOj2i02UvDu%2Bf9eCJLKvVbt2fw7aB7imNEl8IAR7VKcMIX4RGpkahCttc%2F%2BrKjbg2YWsJkgTbY868iDMrDQrrHKXXZN1vLqkjA8TdAy8lYJJND314UJciGcw11djwGY9hUMVgIUfT7er%2Bhq0lN&X-Amz-Signature=2469b420972e0cdaba5d77ed9758cf607561e46b615d6c07dfdaded22d600798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CK6HVLJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERuk2K3tZ%2BonKh1Xuu6mkM%2F2E9eIBsLhKMfJxvhLCJLAiEA1g6OPiHCAGybDjjwgd2wUXEYblvlLsQ2filMZglJqCkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDP8TWLILJe1Ve%2BjGQCrcA6LBqRu8%2F%2Bfe9eUr3ECtvlRkBWDEw5uWpLH%2FV5CoLeUBv4jShIbERO4KZZvZDhmS2B%2Fd0PhrDXX0oZi9Jv2XSfq7tNoae7srEWj41llP%2Fwu238laFHAYoOctPmpny1P7Aw1UGhMtjwGaS8BSe1iUq7K0FjyEVjFhBWkNtfiAUMln9%2FsoI%2BCjw2SYLAdzNRgsMC8jhvNT%2FOq6PWFxZr%2F0DoSJPwSuXEUhqyD9sle6euFmCpCi4b53nDdLveRfWAzVnOQ5Ou6R7RY9gUVcZL2cWt8K3IFMA3PCxuPFdrkvtm5nGQcDPNpKO4UpP8Od1s39Qgvj%2B6kub7eOB0SX956hfJXFBRfEZWtiPNsDlMu35doJIEeSsrdvVBXNC4Qe%2FOYME6db070it8GR0gs8dI6C%2FhUXk9kAijYgkIOL3PiIl6Mrnj2GE1fc6O61A2hwQYoHC%2B4C4JN03HMr2CjveQ4nVELeYIxYFVmFiODvPB04pevBA20lU6lTJUXAuELJLindjVvB52QrhxiWn7ozS3%2BXX8uaZpqau%2BHIeQnQjUAThXnEGln1CWCpdHSoWZWG6gacQKt6wokqClDKBXNgZqpiDk8Z4F642FxkE%2B27GPIDvi6nl%2Fws6lgM7gu9C%2B7qMPKcu8QGOqUB1kYVWknAOztXU6Xzx0%2FWVwEYIcl6c%2BZpj3KXmJsqooB1dco6%2FBRXXuAMuNWReqPzI00Rr%2FKWV1S0mDwNv%2FhrDKUX4RLsZRgw%2FzE7IfnUaLX4ScgIbxWCpF4o9G8XP6HrrGmkzANbcIPgFNHUOHpTGQjpiFM3Ua7C7MvjVaV%2FKUcf16lF2BXpblVZWVyU2Ah4iu7EGtiu3OTDSvz8TBHfNCVQTmbb&X-Amz-Signature=dcafd70951b40ab0bcda533b4a062625ebb7f7666e6a44c668935d00527c4c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5Q3C25%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEPTa0njKuG1yHT2R321eFbDEbdU%2B%2Bt2Qsysnt8IdUXAiBw7P8JJDKGaQTUx%2BrdB0WlmU4PvnU4MCKmHRRA%2F%2FEm%2Fir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM8a264An%2FlRqi6uezKtwD1NQBTqMZzTGj5ElS8cpfc11Vu%2BonRWVR3WUS1mrUIBGbjpi7J6M4L3asyoooNVDTTSqrV%2BA8u8P59nqpg3lVPE1ehEAM4uT9WQWHtIx1rZe%2BCgN7bNSeh6oy5xfN3D6DmbGxrOHIAkYsv9bQ0oVDlgS8eCaa6ZdntWfDmkWRdxKsUaAnDCRG1ke32n6tjw9XgXkPqWsXY2%2FyMX3hv8gUlIbKyHv88z2C7fCI4nJ6H4bp2Q%2BY%2BPYMR5yVgNoH7Y5psVlnbbAlssQoZVF0yCaPTX2f9KivamyT0tbUv5QSIb5GpnXM8DlbEsSCKxxATFbgJ55eKsBTxHH59de%2B%2B0LDanHN4oZoTNMxM3mDIewCcOmE0IlxQajLp6Eoul7hKhbCLEbz8hf12OfMEzkpxch4sakpLFli%2FMK3iOGQLSkcIpfRisbZKOyImQCuek0ZRtJlGeS%2BBr%2FjttWMOUo%2Fr9lrLbP3YekhWDcGnYxwwBvjs0DgIoH8v2HIEmRAJJC84EVkuTFC0KrVq9ZlEy0rJkP43NhLPVQxEp7kHl0MXKk26beiiukKNiX5AVYHYgTKZn%2Fy3m1HpqOIsio0ZzxXSS16czX0HhuBV%2F%2BhE9xSS%2FAKMsaoTLvyFiegR4VfUIAwwKK7xAY6pgFYvk8SHVs4dXgRz9YJjJ%2FpmMb7fSFa4bDsrWOAGKysUSSOq92UU4GOAeUfynU5duGT8ivvAAxU5Yngb23Xy8%2BhVvoSlQGY6c%2Fs8H0kGEyoUk3ftcUiTezhUgJPN6veSnG8YrMeJCNavVMwNRqkvFv0ET%2F49EYamS05W2Axm83mNwUPqWdGhzLZC7we2PDYhajdblBMGMr7V3E06jpzfzcDf%2BzQFmfA&X-Amz-Signature=a6e9ab5d1959d8feba0829bfcd568c4469766cbf4c54abf7da02d5108ae9863a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5Q3C25%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHEPTa0njKuG1yHT2R321eFbDEbdU%2B%2Bt2Qsysnt8IdUXAiBw7P8JJDKGaQTUx%2BrdB0WlmU4PvnU4MCKmHRRA%2F%2FEm%2Fir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM8a264An%2FlRqi6uezKtwD1NQBTqMZzTGj5ElS8cpfc11Vu%2BonRWVR3WUS1mrUIBGbjpi7J6M4L3asyoooNVDTTSqrV%2BA8u8P59nqpg3lVPE1ehEAM4uT9WQWHtIx1rZe%2BCgN7bNSeh6oy5xfN3D6DmbGxrOHIAkYsv9bQ0oVDlgS8eCaa6ZdntWfDmkWRdxKsUaAnDCRG1ke32n6tjw9XgXkPqWsXY2%2FyMX3hv8gUlIbKyHv88z2C7fCI4nJ6H4bp2Q%2BY%2BPYMR5yVgNoH7Y5psVlnbbAlssQoZVF0yCaPTX2f9KivamyT0tbUv5QSIb5GpnXM8DlbEsSCKxxATFbgJ55eKsBTxHH59de%2B%2B0LDanHN4oZoTNMxM3mDIewCcOmE0IlxQajLp6Eoul7hKhbCLEbz8hf12OfMEzkpxch4sakpLFli%2FMK3iOGQLSkcIpfRisbZKOyImQCuek0ZRtJlGeS%2BBr%2FjttWMOUo%2Fr9lrLbP3YekhWDcGnYxwwBvjs0DgIoH8v2HIEmRAJJC84EVkuTFC0KrVq9ZlEy0rJkP43NhLPVQxEp7kHl0MXKk26beiiukKNiX5AVYHYgTKZn%2Fy3m1HpqOIsio0ZzxXSS16czX0HhuBV%2F%2BhE9xSS%2FAKMsaoTLvyFiegR4VfUIAwwKK7xAY6pgFYvk8SHVs4dXgRz9YJjJ%2FpmMb7fSFa4bDsrWOAGKysUSSOq92UU4GOAeUfynU5duGT8ivvAAxU5Yngb23Xy8%2BhVvoSlQGY6c%2Fs8H0kGEyoUk3ftcUiTezhUgJPN6veSnG8YrMeJCNavVMwNRqkvFv0ET%2F49EYamS05W2Axm83mNwUPqWdGhzLZC7we2PDYhajdblBMGMr7V3E06jpzfzcDf%2BzQFmfA&X-Amz-Signature=66d32e6fc6b2aac20f558e726729bfe247044d183937cba8d1403ff230f77140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236EPFAU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh%2BqtS8hNKLhjn08%2Bdj1pH0PX8%2FPur%2BEahqvgxdMMF5QIgUh6azJmNf0QXPb6y%2FuwuP80SsVYStXb0vzpN34fNTfoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPlIOOpXO1ejQpztWCrcA6v5xPybbrNDXzJVxRm1YH8a3XinnH7LC4R%2Bg%2Bahk4R0kbEH676w5ImWUJJ0ZeirG5eL3dHBZN3c06B8fcrOQZK1oc%2FHn2qTK9DwzmwWtjZdnZ1fXJmoa9tti8NyG54rdj7cf1ffZ53oFyn3W017f2GiG9I1PSNeiDaW7da03Iym4uZlqzZHQLqW5cfy6lbnAvj5yNBwV4I4mTYD7ITvDsH1n%2F8hIuHukBTSL8YeiTF0egfSxtSnXne2qx6LH16%2BukuJ3JeJG%2BBlRg%2BgM5W9ZNIujkFiSpB2Lq4mO%2FqePbc2BqSN0C2Ys0aWOSbRJAFftb7OU1iijf7DWYp%2BK5Lvf8HXPcwmbopkWBr7zHq6%2FmQxNXpRO8qx0QWBBUMFtGwmDfrOcvh%2B%2B1c%2FZyYSZQ72aeOfF6XSLwDxSn6zsP%2F2DCruz1rFoSFM3ZVHFKGpFST9VamYr%2BttnbTFxtCSfhbfrRr3XrrtW4DVkc2o2WbQip1ZmhCmGgsNdZ0EfquTSdKol0MBwqOxC7UKGiEWjlvXBuyO7SzhPj%2BRAOkv0RZL9l9evlmyPxLmngwZiBDVaTO4Jfh0TTzxYByLv12owNdpD7%2Fre5EyNhghqGt1SFI5m0sVh6QgKTo1TZPvTpvPMLCiu8QGOqUBOqM780wFD%2BwPqIH217P785BwH1ETeDRsciJ0%2BdG7Wca4Wk7zE1aeTGJIIRr4GFXrzTqYJZR1rAlS4%2FEEaVMbobPtuxbjsb%2Ff3F%2F8KsRs4wdVcLDOEiixlI7IOSZILtEhgfgwod39X4%2BUQ1jW%2FYPZomn9uplJIgQ%2BxoPfPOXVytBo434RdX0klahKbKJ3qIUZl8%2FkSsjSPFI4NwUR4fbBtEPlT7Fl&X-Amz-Signature=e8717261669a1a61f74a21c6ba4f5e1644ee7098c110753bb6b6216bc7f3f789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236EPFAU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh%2BqtS8hNKLhjn08%2Bdj1pH0PX8%2FPur%2BEahqvgxdMMF5QIgUh6azJmNf0QXPb6y%2FuwuP80SsVYStXb0vzpN34fNTfoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPlIOOpXO1ejQpztWCrcA6v5xPybbrNDXzJVxRm1YH8a3XinnH7LC4R%2Bg%2Bahk4R0kbEH676w5ImWUJJ0ZeirG5eL3dHBZN3c06B8fcrOQZK1oc%2FHn2qTK9DwzmwWtjZdnZ1fXJmoa9tti8NyG54rdj7cf1ffZ53oFyn3W017f2GiG9I1PSNeiDaW7da03Iym4uZlqzZHQLqW5cfy6lbnAvj5yNBwV4I4mTYD7ITvDsH1n%2F8hIuHukBTSL8YeiTF0egfSxtSnXne2qx6LH16%2BukuJ3JeJG%2BBlRg%2BgM5W9ZNIujkFiSpB2Lq4mO%2FqePbc2BqSN0C2Ys0aWOSbRJAFftb7OU1iijf7DWYp%2BK5Lvf8HXPcwmbopkWBr7zHq6%2FmQxNXpRO8qx0QWBBUMFtGwmDfrOcvh%2B%2B1c%2FZyYSZQ72aeOfF6XSLwDxSn6zsP%2F2DCruz1rFoSFM3ZVHFKGpFST9VamYr%2BttnbTFxtCSfhbfrRr3XrrtW4DVkc2o2WbQip1ZmhCmGgsNdZ0EfquTSdKol0MBwqOxC7UKGiEWjlvXBuyO7SzhPj%2BRAOkv0RZL9l9evlmyPxLmngwZiBDVaTO4Jfh0TTzxYByLv12owNdpD7%2Fre5EyNhghqGt1SFI5m0sVh6QgKTo1TZPvTpvPMLCiu8QGOqUBOqM780wFD%2BwPqIH217P785BwH1ETeDRsciJ0%2BdG7Wca4Wk7zE1aeTGJIIRr4GFXrzTqYJZR1rAlS4%2FEEaVMbobPtuxbjsb%2Ff3F%2F8KsRs4wdVcLDOEiixlI7IOSZILtEhgfgwod39X4%2BUQ1jW%2FYPZomn9uplJIgQ%2BxoPfPOXVytBo434RdX0klahKbKJ3qIUZl8%2FkSsjSPFI4NwUR4fbBtEPlT7Fl&X-Amz-Signature=7e0d3035126c87720f58a3d2e2efe21dc397bbaff6d47aeb7bbd9981d61ac965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236EPFAU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh%2BqtS8hNKLhjn08%2Bdj1pH0PX8%2FPur%2BEahqvgxdMMF5QIgUh6azJmNf0QXPb6y%2FuwuP80SsVYStXb0vzpN34fNTfoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPlIOOpXO1ejQpztWCrcA6v5xPybbrNDXzJVxRm1YH8a3XinnH7LC4R%2Bg%2Bahk4R0kbEH676w5ImWUJJ0ZeirG5eL3dHBZN3c06B8fcrOQZK1oc%2FHn2qTK9DwzmwWtjZdnZ1fXJmoa9tti8NyG54rdj7cf1ffZ53oFyn3W017f2GiG9I1PSNeiDaW7da03Iym4uZlqzZHQLqW5cfy6lbnAvj5yNBwV4I4mTYD7ITvDsH1n%2F8hIuHukBTSL8YeiTF0egfSxtSnXne2qx6LH16%2BukuJ3JeJG%2BBlRg%2BgM5W9ZNIujkFiSpB2Lq4mO%2FqePbc2BqSN0C2Ys0aWOSbRJAFftb7OU1iijf7DWYp%2BK5Lvf8HXPcwmbopkWBr7zHq6%2FmQxNXpRO8qx0QWBBUMFtGwmDfrOcvh%2B%2B1c%2FZyYSZQ72aeOfF6XSLwDxSn6zsP%2F2DCruz1rFoSFM3ZVHFKGpFST9VamYr%2BttnbTFxtCSfhbfrRr3XrrtW4DVkc2o2WbQip1ZmhCmGgsNdZ0EfquTSdKol0MBwqOxC7UKGiEWjlvXBuyO7SzhPj%2BRAOkv0RZL9l9evlmyPxLmngwZiBDVaTO4Jfh0TTzxYByLv12owNdpD7%2Fre5EyNhghqGt1SFI5m0sVh6QgKTo1TZPvTpvPMLCiu8QGOqUBOqM780wFD%2BwPqIH217P785BwH1ETeDRsciJ0%2BdG7Wca4Wk7zE1aeTGJIIRr4GFXrzTqYJZR1rAlS4%2FEEaVMbobPtuxbjsb%2Ff3F%2F8KsRs4wdVcLDOEiixlI7IOSZILtEhgfgwod39X4%2BUQ1jW%2FYPZomn9uplJIgQ%2BxoPfPOXVytBo434RdX0klahKbKJ3qIUZl8%2FkSsjSPFI4NwUR4fbBtEPlT7Fl&X-Amz-Signature=e5fdaedaadd4ec93017f6b0b0f587aec7e715a1a9d234c68424ca10674344146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236EPFAU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh%2BqtS8hNKLhjn08%2Bdj1pH0PX8%2FPur%2BEahqvgxdMMF5QIgUh6azJmNf0QXPb6y%2FuwuP80SsVYStXb0vzpN34fNTfoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPlIOOpXO1ejQpztWCrcA6v5xPybbrNDXzJVxRm1YH8a3XinnH7LC4R%2Bg%2Bahk4R0kbEH676w5ImWUJJ0ZeirG5eL3dHBZN3c06B8fcrOQZK1oc%2FHn2qTK9DwzmwWtjZdnZ1fXJmoa9tti8NyG54rdj7cf1ffZ53oFyn3W017f2GiG9I1PSNeiDaW7da03Iym4uZlqzZHQLqW5cfy6lbnAvj5yNBwV4I4mTYD7ITvDsH1n%2F8hIuHukBTSL8YeiTF0egfSxtSnXne2qx6LH16%2BukuJ3JeJG%2BBlRg%2BgM5W9ZNIujkFiSpB2Lq4mO%2FqePbc2BqSN0C2Ys0aWOSbRJAFftb7OU1iijf7DWYp%2BK5Lvf8HXPcwmbopkWBr7zHq6%2FmQxNXpRO8qx0QWBBUMFtGwmDfrOcvh%2B%2B1c%2FZyYSZQ72aeOfF6XSLwDxSn6zsP%2F2DCruz1rFoSFM3ZVHFKGpFST9VamYr%2BttnbTFxtCSfhbfrRr3XrrtW4DVkc2o2WbQip1ZmhCmGgsNdZ0EfquTSdKol0MBwqOxC7UKGiEWjlvXBuyO7SzhPj%2BRAOkv0RZL9l9evlmyPxLmngwZiBDVaTO4Jfh0TTzxYByLv12owNdpD7%2Fre5EyNhghqGt1SFI5m0sVh6QgKTo1TZPvTpvPMLCiu8QGOqUBOqM780wFD%2BwPqIH217P785BwH1ETeDRsciJ0%2BdG7Wca4Wk7zE1aeTGJIIRr4GFXrzTqYJZR1rAlS4%2FEEaVMbobPtuxbjsb%2Ff3F%2F8KsRs4wdVcLDOEiixlI7IOSZILtEhgfgwod39X4%2BUQ1jW%2FYPZomn9uplJIgQ%2BxoPfPOXVytBo434RdX0klahKbKJ3qIUZl8%2FkSsjSPFI4NwUR4fbBtEPlT7Fl&X-Amz-Signature=dedbd24004ef1915dd4593cd58f3283ea28a4e2ca825def784c4c0af394761ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236EPFAU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh%2BqtS8hNKLhjn08%2Bdj1pH0PX8%2FPur%2BEahqvgxdMMF5QIgUh6azJmNf0QXPb6y%2FuwuP80SsVYStXb0vzpN34fNTfoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPlIOOpXO1ejQpztWCrcA6v5xPybbrNDXzJVxRm1YH8a3XinnH7LC4R%2Bg%2Bahk4R0kbEH676w5ImWUJJ0ZeirG5eL3dHBZN3c06B8fcrOQZK1oc%2FHn2qTK9DwzmwWtjZdnZ1fXJmoa9tti8NyG54rdj7cf1ffZ53oFyn3W017f2GiG9I1PSNeiDaW7da03Iym4uZlqzZHQLqW5cfy6lbnAvj5yNBwV4I4mTYD7ITvDsH1n%2F8hIuHukBTSL8YeiTF0egfSxtSnXne2qx6LH16%2BukuJ3JeJG%2BBlRg%2BgM5W9ZNIujkFiSpB2Lq4mO%2FqePbc2BqSN0C2Ys0aWOSbRJAFftb7OU1iijf7DWYp%2BK5Lvf8HXPcwmbopkWBr7zHq6%2FmQxNXpRO8qx0QWBBUMFtGwmDfrOcvh%2B%2B1c%2FZyYSZQ72aeOfF6XSLwDxSn6zsP%2F2DCruz1rFoSFM3ZVHFKGpFST9VamYr%2BttnbTFxtCSfhbfrRr3XrrtW4DVkc2o2WbQip1ZmhCmGgsNdZ0EfquTSdKol0MBwqOxC7UKGiEWjlvXBuyO7SzhPj%2BRAOkv0RZL9l9evlmyPxLmngwZiBDVaTO4Jfh0TTzxYByLv12owNdpD7%2Fre5EyNhghqGt1SFI5m0sVh6QgKTo1TZPvTpvPMLCiu8QGOqUBOqM780wFD%2BwPqIH217P785BwH1ETeDRsciJ0%2BdG7Wca4Wk7zE1aeTGJIIRr4GFXrzTqYJZR1rAlS4%2FEEaVMbobPtuxbjsb%2Ff3F%2F8KsRs4wdVcLDOEiixlI7IOSZILtEhgfgwod39X4%2BUQ1jW%2FYPZomn9uplJIgQ%2BxoPfPOXVytBo434RdX0klahKbKJ3qIUZl8%2FkSsjSPFI4NwUR4fbBtEPlT7Fl&X-Amz-Signature=df99c12a1715dcfbfb73d43d2ac2121fb317c58323e4a6276b64a5619116b4ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236EPFAU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh%2BqtS8hNKLhjn08%2Bdj1pH0PX8%2FPur%2BEahqvgxdMMF5QIgUh6azJmNf0QXPb6y%2FuwuP80SsVYStXb0vzpN34fNTfoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPlIOOpXO1ejQpztWCrcA6v5xPybbrNDXzJVxRm1YH8a3XinnH7LC4R%2Bg%2Bahk4R0kbEH676w5ImWUJJ0ZeirG5eL3dHBZN3c06B8fcrOQZK1oc%2FHn2qTK9DwzmwWtjZdnZ1fXJmoa9tti8NyG54rdj7cf1ffZ53oFyn3W017f2GiG9I1PSNeiDaW7da03Iym4uZlqzZHQLqW5cfy6lbnAvj5yNBwV4I4mTYD7ITvDsH1n%2F8hIuHukBTSL8YeiTF0egfSxtSnXne2qx6LH16%2BukuJ3JeJG%2BBlRg%2BgM5W9ZNIujkFiSpB2Lq4mO%2FqePbc2BqSN0C2Ys0aWOSbRJAFftb7OU1iijf7DWYp%2BK5Lvf8HXPcwmbopkWBr7zHq6%2FmQxNXpRO8qx0QWBBUMFtGwmDfrOcvh%2B%2B1c%2FZyYSZQ72aeOfF6XSLwDxSn6zsP%2F2DCruz1rFoSFM3ZVHFKGpFST9VamYr%2BttnbTFxtCSfhbfrRr3XrrtW4DVkc2o2WbQip1ZmhCmGgsNdZ0EfquTSdKol0MBwqOxC7UKGiEWjlvXBuyO7SzhPj%2BRAOkv0RZL9l9evlmyPxLmngwZiBDVaTO4Jfh0TTzxYByLv12owNdpD7%2Fre5EyNhghqGt1SFI5m0sVh6QgKTo1TZPvTpvPMLCiu8QGOqUBOqM780wFD%2BwPqIH217P785BwH1ETeDRsciJ0%2BdG7Wca4Wk7zE1aeTGJIIRr4GFXrzTqYJZR1rAlS4%2FEEaVMbobPtuxbjsb%2Ff3F%2F8KsRs4wdVcLDOEiixlI7IOSZILtEhgfgwod39X4%2BUQ1jW%2FYPZomn9uplJIgQ%2BxoPfPOXVytBo434RdX0klahKbKJ3qIUZl8%2FkSsjSPFI4NwUR4fbBtEPlT7Fl&X-Amz-Signature=d8e05fb7858abdbbc0ccafa33e890834646075cbba651981d444d4a376b183a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236EPFAU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh%2BqtS8hNKLhjn08%2Bdj1pH0PX8%2FPur%2BEahqvgxdMMF5QIgUh6azJmNf0QXPb6y%2FuwuP80SsVYStXb0vzpN34fNTfoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPlIOOpXO1ejQpztWCrcA6v5xPybbrNDXzJVxRm1YH8a3XinnH7LC4R%2Bg%2Bahk4R0kbEH676w5ImWUJJ0ZeirG5eL3dHBZN3c06B8fcrOQZK1oc%2FHn2qTK9DwzmwWtjZdnZ1fXJmoa9tti8NyG54rdj7cf1ffZ53oFyn3W017f2GiG9I1PSNeiDaW7da03Iym4uZlqzZHQLqW5cfy6lbnAvj5yNBwV4I4mTYD7ITvDsH1n%2F8hIuHukBTSL8YeiTF0egfSxtSnXne2qx6LH16%2BukuJ3JeJG%2BBlRg%2BgM5W9ZNIujkFiSpB2Lq4mO%2FqePbc2BqSN0C2Ys0aWOSbRJAFftb7OU1iijf7DWYp%2BK5Lvf8HXPcwmbopkWBr7zHq6%2FmQxNXpRO8qx0QWBBUMFtGwmDfrOcvh%2B%2B1c%2FZyYSZQ72aeOfF6XSLwDxSn6zsP%2F2DCruz1rFoSFM3ZVHFKGpFST9VamYr%2BttnbTFxtCSfhbfrRr3XrrtW4DVkc2o2WbQip1ZmhCmGgsNdZ0EfquTSdKol0MBwqOxC7UKGiEWjlvXBuyO7SzhPj%2BRAOkv0RZL9l9evlmyPxLmngwZiBDVaTO4Jfh0TTzxYByLv12owNdpD7%2Fre5EyNhghqGt1SFI5m0sVh6QgKTo1TZPvTpvPMLCiu8QGOqUBOqM780wFD%2BwPqIH217P785BwH1ETeDRsciJ0%2BdG7Wca4Wk7zE1aeTGJIIRr4GFXrzTqYJZR1rAlS4%2FEEaVMbobPtuxbjsb%2Ff3F%2F8KsRs4wdVcLDOEiixlI7IOSZILtEhgfgwod39X4%2BUQ1jW%2FYPZomn9uplJIgQ%2BxoPfPOXVytBo434RdX0klahKbKJ3qIUZl8%2FkSsjSPFI4NwUR4fbBtEPlT7Fl&X-Amz-Signature=e5fdaedaadd4ec93017f6b0b0f587aec7e715a1a9d234c68424ca10674344146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236EPFAU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh%2BqtS8hNKLhjn08%2Bdj1pH0PX8%2FPur%2BEahqvgxdMMF5QIgUh6azJmNf0QXPb6y%2FuwuP80SsVYStXb0vzpN34fNTfoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPlIOOpXO1ejQpztWCrcA6v5xPybbrNDXzJVxRm1YH8a3XinnH7LC4R%2Bg%2Bahk4R0kbEH676w5ImWUJJ0ZeirG5eL3dHBZN3c06B8fcrOQZK1oc%2FHn2qTK9DwzmwWtjZdnZ1fXJmoa9tti8NyG54rdj7cf1ffZ53oFyn3W017f2GiG9I1PSNeiDaW7da03Iym4uZlqzZHQLqW5cfy6lbnAvj5yNBwV4I4mTYD7ITvDsH1n%2F8hIuHukBTSL8YeiTF0egfSxtSnXne2qx6LH16%2BukuJ3JeJG%2BBlRg%2BgM5W9ZNIujkFiSpB2Lq4mO%2FqePbc2BqSN0C2Ys0aWOSbRJAFftb7OU1iijf7DWYp%2BK5Lvf8HXPcwmbopkWBr7zHq6%2FmQxNXpRO8qx0QWBBUMFtGwmDfrOcvh%2B%2B1c%2FZyYSZQ72aeOfF6XSLwDxSn6zsP%2F2DCruz1rFoSFM3ZVHFKGpFST9VamYr%2BttnbTFxtCSfhbfrRr3XrrtW4DVkc2o2WbQip1ZmhCmGgsNdZ0EfquTSdKol0MBwqOxC7UKGiEWjlvXBuyO7SzhPj%2BRAOkv0RZL9l9evlmyPxLmngwZiBDVaTO4Jfh0TTzxYByLv12owNdpD7%2Fre5EyNhghqGt1SFI5m0sVh6QgKTo1TZPvTpvPMLCiu8QGOqUBOqM780wFD%2BwPqIH217P785BwH1ETeDRsciJ0%2BdG7Wca4Wk7zE1aeTGJIIRr4GFXrzTqYJZR1rAlS4%2FEEaVMbobPtuxbjsb%2Ff3F%2F8KsRs4wdVcLDOEiixlI7IOSZILtEhgfgwod39X4%2BUQ1jW%2FYPZomn9uplJIgQ%2BxoPfPOXVytBo434RdX0klahKbKJ3qIUZl8%2FkSsjSPFI4NwUR4fbBtEPlT7Fl&X-Amz-Signature=87349ad131c1e84247b12d493eae39375e702911314771f1b0e8b1fed87f32b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236EPFAU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh%2BqtS8hNKLhjn08%2Bdj1pH0PX8%2FPur%2BEahqvgxdMMF5QIgUh6azJmNf0QXPb6y%2FuwuP80SsVYStXb0vzpN34fNTfoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPlIOOpXO1ejQpztWCrcA6v5xPybbrNDXzJVxRm1YH8a3XinnH7LC4R%2Bg%2Bahk4R0kbEH676w5ImWUJJ0ZeirG5eL3dHBZN3c06B8fcrOQZK1oc%2FHn2qTK9DwzmwWtjZdnZ1fXJmoa9tti8NyG54rdj7cf1ffZ53oFyn3W017f2GiG9I1PSNeiDaW7da03Iym4uZlqzZHQLqW5cfy6lbnAvj5yNBwV4I4mTYD7ITvDsH1n%2F8hIuHukBTSL8YeiTF0egfSxtSnXne2qx6LH16%2BukuJ3JeJG%2BBlRg%2BgM5W9ZNIujkFiSpB2Lq4mO%2FqePbc2BqSN0C2Ys0aWOSbRJAFftb7OU1iijf7DWYp%2BK5Lvf8HXPcwmbopkWBr7zHq6%2FmQxNXpRO8qx0QWBBUMFtGwmDfrOcvh%2B%2B1c%2FZyYSZQ72aeOfF6XSLwDxSn6zsP%2F2DCruz1rFoSFM3ZVHFKGpFST9VamYr%2BttnbTFxtCSfhbfrRr3XrrtW4DVkc2o2WbQip1ZmhCmGgsNdZ0EfquTSdKol0MBwqOxC7UKGiEWjlvXBuyO7SzhPj%2BRAOkv0RZL9l9evlmyPxLmngwZiBDVaTO4Jfh0TTzxYByLv12owNdpD7%2Fre5EyNhghqGt1SFI5m0sVh6QgKTo1TZPvTpvPMLCiu8QGOqUBOqM780wFD%2BwPqIH217P785BwH1ETeDRsciJ0%2BdG7Wca4Wk7zE1aeTGJIIRr4GFXrzTqYJZR1rAlS4%2FEEaVMbobPtuxbjsb%2Ff3F%2F8KsRs4wdVcLDOEiixlI7IOSZILtEhgfgwod39X4%2BUQ1jW%2FYPZomn9uplJIgQ%2BxoPfPOXVytBo434RdX0klahKbKJ3qIUZl8%2FkSsjSPFI4NwUR4fbBtEPlT7Fl&X-Amz-Signature=344df410f1ac5e9ecbf16d048197aa87ad575418fadf32493ce2a08ff5a7bb97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236EPFAU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh%2BqtS8hNKLhjn08%2Bdj1pH0PX8%2FPur%2BEahqvgxdMMF5QIgUh6azJmNf0QXPb6y%2FuwuP80SsVYStXb0vzpN34fNTfoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDPlIOOpXO1ejQpztWCrcA6v5xPybbrNDXzJVxRm1YH8a3XinnH7LC4R%2Bg%2Bahk4R0kbEH676w5ImWUJJ0ZeirG5eL3dHBZN3c06B8fcrOQZK1oc%2FHn2qTK9DwzmwWtjZdnZ1fXJmoa9tti8NyG54rdj7cf1ffZ53oFyn3W017f2GiG9I1PSNeiDaW7da03Iym4uZlqzZHQLqW5cfy6lbnAvj5yNBwV4I4mTYD7ITvDsH1n%2F8hIuHukBTSL8YeiTF0egfSxtSnXne2qx6LH16%2BukuJ3JeJG%2BBlRg%2BgM5W9ZNIujkFiSpB2Lq4mO%2FqePbc2BqSN0C2Ys0aWOSbRJAFftb7OU1iijf7DWYp%2BK5Lvf8HXPcwmbopkWBr7zHq6%2FmQxNXpRO8qx0QWBBUMFtGwmDfrOcvh%2B%2B1c%2FZyYSZQ72aeOfF6XSLwDxSn6zsP%2F2DCruz1rFoSFM3ZVHFKGpFST9VamYr%2BttnbTFxtCSfhbfrRr3XrrtW4DVkc2o2WbQip1ZmhCmGgsNdZ0EfquTSdKol0MBwqOxC7UKGiEWjlvXBuyO7SzhPj%2BRAOkv0RZL9l9evlmyPxLmngwZiBDVaTO4Jfh0TTzxYByLv12owNdpD7%2Fre5EyNhghqGt1SFI5m0sVh6QgKTo1TZPvTpvPMLCiu8QGOqUBOqM780wFD%2BwPqIH217P785BwH1ETeDRsciJ0%2BdG7Wca4Wk7zE1aeTGJIIRr4GFXrzTqYJZR1rAlS4%2FEEaVMbobPtuxbjsb%2Ff3F%2F8KsRs4wdVcLDOEiixlI7IOSZILtEhgfgwod39X4%2BUQ1jW%2FYPZomn9uplJIgQ%2BxoPfPOXVytBo434RdX0klahKbKJ3qIUZl8%2FkSsjSPFI4NwUR4fbBtEPlT7Fl&X-Amz-Signature=da260112c8764b171557ed09329f92601771cb044d78d778bb10fc6735b54799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
