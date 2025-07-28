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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMLEADF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDaZm%2FGpiB7Gdi%2FfNG6ZoDFvWiX%2Bk6l8gVLtarBr5kOUwIgRVDoCZin%2BZWbO8uQEUP8uZLGKAQlF9lpVsjJmK0mPS4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIFJuq48gXeTPor3yrcA2S2BnqhS%2FYRlu708HJLHsYAzlV%2Fw9dzfhFMNpQo9XoK%2B4PAP%2B34HTO2hstJyFAQf5oIe8t4XGfJtGqxf%2BWb5j5MYREt6J63OaoL1N4yQbmPMf61MUWo%2BHUzb%2FwlPdKUH2IpXBjhTU34s0%2FR0j8SOIFxl9lhAq9SMH3pRsEs8Du416lyScMC0c%2BePnTJV1LMagwhkFJkim1f%2BEdxkG%2BflbAIBImUfjB%2FNIEKVzpH%2FLZCSgu7FMOFHTOpHmtILhuddhCuwPwLyWkNrx0HBXszfOCHzaQP4O4o2OXEibABU0C93YEb0sWTNcp%2B0PnLLWWv6zX8oY0HsYGcUknmLkGPNxPnQXrnIT1qXJetq6Va6M3fENsLeagqTsUdxMosZUI9iDsq2xZmk0X9vYRjRy9YsT8m1RYOJ7cbg0q1G4ILHohtz26s7DOfnecLp5RzwM9TaN1sKa2Z4PMTQ1Zh7k8rdRgmJ9V6GQE1w1Wgpy9rpsnju9hUa9Bn88x2vCA%2BrJqYKfEVqNFi%2BD2AkTO3a1G2jS%2FZ%2BZRTuOwb1pusHuVMwNnLZ7ji75SPaQzHEadvNDpNilVIw7NvnYuaOraKQbRKAgMYnTrfGxdyE5LfbnXT9I9ov%2BahVZUOr0PeBY8GMKKNncQGOqUBgXBGq9%2B%2BSKEuCYovVMrdm4H9YucdjMPbYhxLwUo9x4Mk7FG0NPsidJaoZAuQOME%2F%2BmmnVGu40SvF%2FdC1PBcqi6lGOry%2BXyzY8F7kAlactddG9akTuyNBS43DxZv2oAkkLQdxMpTlSHl%2BCnDGOtbt7PvwhZ4DZf3o9qgkV6w0UsTZfem0LH5ySGKBjTm7bo7JNdnqsTd84MyOwC9WLyjx8fb7%2B3Og&X-Amz-Signature=961e1a29fdcd756654689b189d1263212a42f6cb9c2c033bc20cdb8e10054a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMLEADF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDaZm%2FGpiB7Gdi%2FfNG6ZoDFvWiX%2Bk6l8gVLtarBr5kOUwIgRVDoCZin%2BZWbO8uQEUP8uZLGKAQlF9lpVsjJmK0mPS4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIFJuq48gXeTPor3yrcA2S2BnqhS%2FYRlu708HJLHsYAzlV%2Fw9dzfhFMNpQo9XoK%2B4PAP%2B34HTO2hstJyFAQf5oIe8t4XGfJtGqxf%2BWb5j5MYREt6J63OaoL1N4yQbmPMf61MUWo%2BHUzb%2FwlPdKUH2IpXBjhTU34s0%2FR0j8SOIFxl9lhAq9SMH3pRsEs8Du416lyScMC0c%2BePnTJV1LMagwhkFJkim1f%2BEdxkG%2BflbAIBImUfjB%2FNIEKVzpH%2FLZCSgu7FMOFHTOpHmtILhuddhCuwPwLyWkNrx0HBXszfOCHzaQP4O4o2OXEibABU0C93YEb0sWTNcp%2B0PnLLWWv6zX8oY0HsYGcUknmLkGPNxPnQXrnIT1qXJetq6Va6M3fENsLeagqTsUdxMosZUI9iDsq2xZmk0X9vYRjRy9YsT8m1RYOJ7cbg0q1G4ILHohtz26s7DOfnecLp5RzwM9TaN1sKa2Z4PMTQ1Zh7k8rdRgmJ9V6GQE1w1Wgpy9rpsnju9hUa9Bn88x2vCA%2BrJqYKfEVqNFi%2BD2AkTO3a1G2jS%2FZ%2BZRTuOwb1pusHuVMwNnLZ7ji75SPaQzHEadvNDpNilVIw7NvnYuaOraKQbRKAgMYnTrfGxdyE5LfbnXT9I9ov%2BahVZUOr0PeBY8GMKKNncQGOqUBgXBGq9%2B%2BSKEuCYovVMrdm4H9YucdjMPbYhxLwUo9x4Mk7FG0NPsidJaoZAuQOME%2F%2BmmnVGu40SvF%2FdC1PBcqi6lGOry%2BXyzY8F7kAlactddG9akTuyNBS43DxZv2oAkkLQdxMpTlSHl%2BCnDGOtbt7PvwhZ4DZf3o9qgkV6w0UsTZfem0LH5ySGKBjTm7bo7JNdnqsTd84MyOwC9WLyjx8fb7%2B3Og&X-Amz-Signature=748714ecf87200e1a6d3c06f2d06eab0860af7001374322f49206fafcb93a222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMLEADF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDaZm%2FGpiB7Gdi%2FfNG6ZoDFvWiX%2Bk6l8gVLtarBr5kOUwIgRVDoCZin%2BZWbO8uQEUP8uZLGKAQlF9lpVsjJmK0mPS4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIFJuq48gXeTPor3yrcA2S2BnqhS%2FYRlu708HJLHsYAzlV%2Fw9dzfhFMNpQo9XoK%2B4PAP%2B34HTO2hstJyFAQf5oIe8t4XGfJtGqxf%2BWb5j5MYREt6J63OaoL1N4yQbmPMf61MUWo%2BHUzb%2FwlPdKUH2IpXBjhTU34s0%2FR0j8SOIFxl9lhAq9SMH3pRsEs8Du416lyScMC0c%2BePnTJV1LMagwhkFJkim1f%2BEdxkG%2BflbAIBImUfjB%2FNIEKVzpH%2FLZCSgu7FMOFHTOpHmtILhuddhCuwPwLyWkNrx0HBXszfOCHzaQP4O4o2OXEibABU0C93YEb0sWTNcp%2B0PnLLWWv6zX8oY0HsYGcUknmLkGPNxPnQXrnIT1qXJetq6Va6M3fENsLeagqTsUdxMosZUI9iDsq2xZmk0X9vYRjRy9YsT8m1RYOJ7cbg0q1G4ILHohtz26s7DOfnecLp5RzwM9TaN1sKa2Z4PMTQ1Zh7k8rdRgmJ9V6GQE1w1Wgpy9rpsnju9hUa9Bn88x2vCA%2BrJqYKfEVqNFi%2BD2AkTO3a1G2jS%2FZ%2BZRTuOwb1pusHuVMwNnLZ7ji75SPaQzHEadvNDpNilVIw7NvnYuaOraKQbRKAgMYnTrfGxdyE5LfbnXT9I9ov%2BahVZUOr0PeBY8GMKKNncQGOqUBgXBGq9%2B%2BSKEuCYovVMrdm4H9YucdjMPbYhxLwUo9x4Mk7FG0NPsidJaoZAuQOME%2F%2BmmnVGu40SvF%2FdC1PBcqi6lGOry%2BXyzY8F7kAlactddG9akTuyNBS43DxZv2oAkkLQdxMpTlSHl%2BCnDGOtbt7PvwhZ4DZf3o9qgkV6w0UsTZfem0LH5ySGKBjTm7bo7JNdnqsTd84MyOwC9WLyjx8fb7%2B3Og&X-Amz-Signature=311d1553fcdf7b67bfb13281864f188e04f1ec70d46d26983d7f06ba88e4f770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMLEADF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDaZm%2FGpiB7Gdi%2FfNG6ZoDFvWiX%2Bk6l8gVLtarBr5kOUwIgRVDoCZin%2BZWbO8uQEUP8uZLGKAQlF9lpVsjJmK0mPS4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIFJuq48gXeTPor3yrcA2S2BnqhS%2FYRlu708HJLHsYAzlV%2Fw9dzfhFMNpQo9XoK%2B4PAP%2B34HTO2hstJyFAQf5oIe8t4XGfJtGqxf%2BWb5j5MYREt6J63OaoL1N4yQbmPMf61MUWo%2BHUzb%2FwlPdKUH2IpXBjhTU34s0%2FR0j8SOIFxl9lhAq9SMH3pRsEs8Du416lyScMC0c%2BePnTJV1LMagwhkFJkim1f%2BEdxkG%2BflbAIBImUfjB%2FNIEKVzpH%2FLZCSgu7FMOFHTOpHmtILhuddhCuwPwLyWkNrx0HBXszfOCHzaQP4O4o2OXEibABU0C93YEb0sWTNcp%2B0PnLLWWv6zX8oY0HsYGcUknmLkGPNxPnQXrnIT1qXJetq6Va6M3fENsLeagqTsUdxMosZUI9iDsq2xZmk0X9vYRjRy9YsT8m1RYOJ7cbg0q1G4ILHohtz26s7DOfnecLp5RzwM9TaN1sKa2Z4PMTQ1Zh7k8rdRgmJ9V6GQE1w1Wgpy9rpsnju9hUa9Bn88x2vCA%2BrJqYKfEVqNFi%2BD2AkTO3a1G2jS%2FZ%2BZRTuOwb1pusHuVMwNnLZ7ji75SPaQzHEadvNDpNilVIw7NvnYuaOraKQbRKAgMYnTrfGxdyE5LfbnXT9I9ov%2BahVZUOr0PeBY8GMKKNncQGOqUBgXBGq9%2B%2BSKEuCYovVMrdm4H9YucdjMPbYhxLwUo9x4Mk7FG0NPsidJaoZAuQOME%2F%2BmmnVGu40SvF%2FdC1PBcqi6lGOry%2BXyzY8F7kAlactddG9akTuyNBS43DxZv2oAkkLQdxMpTlSHl%2BCnDGOtbt7PvwhZ4DZf3o9qgkV6w0UsTZfem0LH5ySGKBjTm7bo7JNdnqsTd84MyOwC9WLyjx8fb7%2B3Og&X-Amz-Signature=ac108dd0634a476c25d4ae7ec16adbccad41d96ebc438482a2ef151970a2aab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMLEADF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDaZm%2FGpiB7Gdi%2FfNG6ZoDFvWiX%2Bk6l8gVLtarBr5kOUwIgRVDoCZin%2BZWbO8uQEUP8uZLGKAQlF9lpVsjJmK0mPS4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIFJuq48gXeTPor3yrcA2S2BnqhS%2FYRlu708HJLHsYAzlV%2Fw9dzfhFMNpQo9XoK%2B4PAP%2B34HTO2hstJyFAQf5oIe8t4XGfJtGqxf%2BWb5j5MYREt6J63OaoL1N4yQbmPMf61MUWo%2BHUzb%2FwlPdKUH2IpXBjhTU34s0%2FR0j8SOIFxl9lhAq9SMH3pRsEs8Du416lyScMC0c%2BePnTJV1LMagwhkFJkim1f%2BEdxkG%2BflbAIBImUfjB%2FNIEKVzpH%2FLZCSgu7FMOFHTOpHmtILhuddhCuwPwLyWkNrx0HBXszfOCHzaQP4O4o2OXEibABU0C93YEb0sWTNcp%2B0PnLLWWv6zX8oY0HsYGcUknmLkGPNxPnQXrnIT1qXJetq6Va6M3fENsLeagqTsUdxMosZUI9iDsq2xZmk0X9vYRjRy9YsT8m1RYOJ7cbg0q1G4ILHohtz26s7DOfnecLp5RzwM9TaN1sKa2Z4PMTQ1Zh7k8rdRgmJ9V6GQE1w1Wgpy9rpsnju9hUa9Bn88x2vCA%2BrJqYKfEVqNFi%2BD2AkTO3a1G2jS%2FZ%2BZRTuOwb1pusHuVMwNnLZ7ji75SPaQzHEadvNDpNilVIw7NvnYuaOraKQbRKAgMYnTrfGxdyE5LfbnXT9I9ov%2BahVZUOr0PeBY8GMKKNncQGOqUBgXBGq9%2B%2BSKEuCYovVMrdm4H9YucdjMPbYhxLwUo9x4Mk7FG0NPsidJaoZAuQOME%2F%2BmmnVGu40SvF%2FdC1PBcqi6lGOry%2BXyzY8F7kAlactddG9akTuyNBS43DxZv2oAkkLQdxMpTlSHl%2BCnDGOtbt7PvwhZ4DZf3o9qgkV6w0UsTZfem0LH5ySGKBjTm7bo7JNdnqsTd84MyOwC9WLyjx8fb7%2B3Og&X-Amz-Signature=a4e9219ca7f2989ad18bb77afc3396664dd0fe908b6010692bcde9e4697d7288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMLEADF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDaZm%2FGpiB7Gdi%2FfNG6ZoDFvWiX%2Bk6l8gVLtarBr5kOUwIgRVDoCZin%2BZWbO8uQEUP8uZLGKAQlF9lpVsjJmK0mPS4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIFJuq48gXeTPor3yrcA2S2BnqhS%2FYRlu708HJLHsYAzlV%2Fw9dzfhFMNpQo9XoK%2B4PAP%2B34HTO2hstJyFAQf5oIe8t4XGfJtGqxf%2BWb5j5MYREt6J63OaoL1N4yQbmPMf61MUWo%2BHUzb%2FwlPdKUH2IpXBjhTU34s0%2FR0j8SOIFxl9lhAq9SMH3pRsEs8Du416lyScMC0c%2BePnTJV1LMagwhkFJkim1f%2BEdxkG%2BflbAIBImUfjB%2FNIEKVzpH%2FLZCSgu7FMOFHTOpHmtILhuddhCuwPwLyWkNrx0HBXszfOCHzaQP4O4o2OXEibABU0C93YEb0sWTNcp%2B0PnLLWWv6zX8oY0HsYGcUknmLkGPNxPnQXrnIT1qXJetq6Va6M3fENsLeagqTsUdxMosZUI9iDsq2xZmk0X9vYRjRy9YsT8m1RYOJ7cbg0q1G4ILHohtz26s7DOfnecLp5RzwM9TaN1sKa2Z4PMTQ1Zh7k8rdRgmJ9V6GQE1w1Wgpy9rpsnju9hUa9Bn88x2vCA%2BrJqYKfEVqNFi%2BD2AkTO3a1G2jS%2FZ%2BZRTuOwb1pusHuVMwNnLZ7ji75SPaQzHEadvNDpNilVIw7NvnYuaOraKQbRKAgMYnTrfGxdyE5LfbnXT9I9ov%2BahVZUOr0PeBY8GMKKNncQGOqUBgXBGq9%2B%2BSKEuCYovVMrdm4H9YucdjMPbYhxLwUo9x4Mk7FG0NPsidJaoZAuQOME%2F%2BmmnVGu40SvF%2FdC1PBcqi6lGOry%2BXyzY8F7kAlactddG9akTuyNBS43DxZv2oAkkLQdxMpTlSHl%2BCnDGOtbt7PvwhZ4DZf3o9qgkV6w0UsTZfem0LH5ySGKBjTm7bo7JNdnqsTd84MyOwC9WLyjx8fb7%2B3Og&X-Amz-Signature=2ca369bc7e44aa1f0654831c91eedde4d5d6209e99c9f7c9871fc83fc6417b69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMLEADF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDaZm%2FGpiB7Gdi%2FfNG6ZoDFvWiX%2Bk6l8gVLtarBr5kOUwIgRVDoCZin%2BZWbO8uQEUP8uZLGKAQlF9lpVsjJmK0mPS4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIFJuq48gXeTPor3yrcA2S2BnqhS%2FYRlu708HJLHsYAzlV%2Fw9dzfhFMNpQo9XoK%2B4PAP%2B34HTO2hstJyFAQf5oIe8t4XGfJtGqxf%2BWb5j5MYREt6J63OaoL1N4yQbmPMf61MUWo%2BHUzb%2FwlPdKUH2IpXBjhTU34s0%2FR0j8SOIFxl9lhAq9SMH3pRsEs8Du416lyScMC0c%2BePnTJV1LMagwhkFJkim1f%2BEdxkG%2BflbAIBImUfjB%2FNIEKVzpH%2FLZCSgu7FMOFHTOpHmtILhuddhCuwPwLyWkNrx0HBXszfOCHzaQP4O4o2OXEibABU0C93YEb0sWTNcp%2B0PnLLWWv6zX8oY0HsYGcUknmLkGPNxPnQXrnIT1qXJetq6Va6M3fENsLeagqTsUdxMosZUI9iDsq2xZmk0X9vYRjRy9YsT8m1RYOJ7cbg0q1G4ILHohtz26s7DOfnecLp5RzwM9TaN1sKa2Z4PMTQ1Zh7k8rdRgmJ9V6GQE1w1Wgpy9rpsnju9hUa9Bn88x2vCA%2BrJqYKfEVqNFi%2BD2AkTO3a1G2jS%2FZ%2BZRTuOwb1pusHuVMwNnLZ7ji75SPaQzHEadvNDpNilVIw7NvnYuaOraKQbRKAgMYnTrfGxdyE5LfbnXT9I9ov%2BahVZUOr0PeBY8GMKKNncQGOqUBgXBGq9%2B%2BSKEuCYovVMrdm4H9YucdjMPbYhxLwUo9x4Mk7FG0NPsidJaoZAuQOME%2F%2BmmnVGu40SvF%2FdC1PBcqi6lGOry%2BXyzY8F7kAlactddG9akTuyNBS43DxZv2oAkkLQdxMpTlSHl%2BCnDGOtbt7PvwhZ4DZf3o9qgkV6w0UsTZfem0LH5ySGKBjTm7bo7JNdnqsTd84MyOwC9WLyjx8fb7%2B3Og&X-Amz-Signature=d2e51af2626bc604ad0f9798deb1e1c43b0e97d29dab51ed687f9d2adebef647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMLEADF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDaZm%2FGpiB7Gdi%2FfNG6ZoDFvWiX%2Bk6l8gVLtarBr5kOUwIgRVDoCZin%2BZWbO8uQEUP8uZLGKAQlF9lpVsjJmK0mPS4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIFJuq48gXeTPor3yrcA2S2BnqhS%2FYRlu708HJLHsYAzlV%2Fw9dzfhFMNpQo9XoK%2B4PAP%2B34HTO2hstJyFAQf5oIe8t4XGfJtGqxf%2BWb5j5MYREt6J63OaoL1N4yQbmPMf61MUWo%2BHUzb%2FwlPdKUH2IpXBjhTU34s0%2FR0j8SOIFxl9lhAq9SMH3pRsEs8Du416lyScMC0c%2BePnTJV1LMagwhkFJkim1f%2BEdxkG%2BflbAIBImUfjB%2FNIEKVzpH%2FLZCSgu7FMOFHTOpHmtILhuddhCuwPwLyWkNrx0HBXszfOCHzaQP4O4o2OXEibABU0C93YEb0sWTNcp%2B0PnLLWWv6zX8oY0HsYGcUknmLkGPNxPnQXrnIT1qXJetq6Va6M3fENsLeagqTsUdxMosZUI9iDsq2xZmk0X9vYRjRy9YsT8m1RYOJ7cbg0q1G4ILHohtz26s7DOfnecLp5RzwM9TaN1sKa2Z4PMTQ1Zh7k8rdRgmJ9V6GQE1w1Wgpy9rpsnju9hUa9Bn88x2vCA%2BrJqYKfEVqNFi%2BD2AkTO3a1G2jS%2FZ%2BZRTuOwb1pusHuVMwNnLZ7ji75SPaQzHEadvNDpNilVIw7NvnYuaOraKQbRKAgMYnTrfGxdyE5LfbnXT9I9ov%2BahVZUOr0PeBY8GMKKNncQGOqUBgXBGq9%2B%2BSKEuCYovVMrdm4H9YucdjMPbYhxLwUo9x4Mk7FG0NPsidJaoZAuQOME%2F%2BmmnVGu40SvF%2FdC1PBcqi6lGOry%2BXyzY8F7kAlactddG9akTuyNBS43DxZv2oAkkLQdxMpTlSHl%2BCnDGOtbt7PvwhZ4DZf3o9qgkV6w0UsTZfem0LH5ySGKBjTm7bo7JNdnqsTd84MyOwC9WLyjx8fb7%2B3Og&X-Amz-Signature=ed3db873ec153967e1a1680472f1b8049e9141236aa732df38677765c44884e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMLEADF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDaZm%2FGpiB7Gdi%2FfNG6ZoDFvWiX%2Bk6l8gVLtarBr5kOUwIgRVDoCZin%2BZWbO8uQEUP8uZLGKAQlF9lpVsjJmK0mPS4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIFJuq48gXeTPor3yrcA2S2BnqhS%2FYRlu708HJLHsYAzlV%2Fw9dzfhFMNpQo9XoK%2B4PAP%2B34HTO2hstJyFAQf5oIe8t4XGfJtGqxf%2BWb5j5MYREt6J63OaoL1N4yQbmPMf61MUWo%2BHUzb%2FwlPdKUH2IpXBjhTU34s0%2FR0j8SOIFxl9lhAq9SMH3pRsEs8Du416lyScMC0c%2BePnTJV1LMagwhkFJkim1f%2BEdxkG%2BflbAIBImUfjB%2FNIEKVzpH%2FLZCSgu7FMOFHTOpHmtILhuddhCuwPwLyWkNrx0HBXszfOCHzaQP4O4o2OXEibABU0C93YEb0sWTNcp%2B0PnLLWWv6zX8oY0HsYGcUknmLkGPNxPnQXrnIT1qXJetq6Va6M3fENsLeagqTsUdxMosZUI9iDsq2xZmk0X9vYRjRy9YsT8m1RYOJ7cbg0q1G4ILHohtz26s7DOfnecLp5RzwM9TaN1sKa2Z4PMTQ1Zh7k8rdRgmJ9V6GQE1w1Wgpy9rpsnju9hUa9Bn88x2vCA%2BrJqYKfEVqNFi%2BD2AkTO3a1G2jS%2FZ%2BZRTuOwb1pusHuVMwNnLZ7ji75SPaQzHEadvNDpNilVIw7NvnYuaOraKQbRKAgMYnTrfGxdyE5LfbnXT9I9ov%2BahVZUOr0PeBY8GMKKNncQGOqUBgXBGq9%2B%2BSKEuCYovVMrdm4H9YucdjMPbYhxLwUo9x4Mk7FG0NPsidJaoZAuQOME%2F%2BmmnVGu40SvF%2FdC1PBcqi6lGOry%2BXyzY8F7kAlactddG9akTuyNBS43DxZv2oAkkLQdxMpTlSHl%2BCnDGOtbt7PvwhZ4DZf3o9qgkV6w0UsTZfem0LH5ySGKBjTm7bo7JNdnqsTd84MyOwC9WLyjx8fb7%2B3Og&X-Amz-Signature=c4f0ed0abeda936e6376fad4aea9c0c56bf8b8d86f46e3f6bde78af9e7e513c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMLEADF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDaZm%2FGpiB7Gdi%2FfNG6ZoDFvWiX%2Bk6l8gVLtarBr5kOUwIgRVDoCZin%2BZWbO8uQEUP8uZLGKAQlF9lpVsjJmK0mPS4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIFJuq48gXeTPor3yrcA2S2BnqhS%2FYRlu708HJLHsYAzlV%2Fw9dzfhFMNpQo9XoK%2B4PAP%2B34HTO2hstJyFAQf5oIe8t4XGfJtGqxf%2BWb5j5MYREt6J63OaoL1N4yQbmPMf61MUWo%2BHUzb%2FwlPdKUH2IpXBjhTU34s0%2FR0j8SOIFxl9lhAq9SMH3pRsEs8Du416lyScMC0c%2BePnTJV1LMagwhkFJkim1f%2BEdxkG%2BflbAIBImUfjB%2FNIEKVzpH%2FLZCSgu7FMOFHTOpHmtILhuddhCuwPwLyWkNrx0HBXszfOCHzaQP4O4o2OXEibABU0C93YEb0sWTNcp%2B0PnLLWWv6zX8oY0HsYGcUknmLkGPNxPnQXrnIT1qXJetq6Va6M3fENsLeagqTsUdxMosZUI9iDsq2xZmk0X9vYRjRy9YsT8m1RYOJ7cbg0q1G4ILHohtz26s7DOfnecLp5RzwM9TaN1sKa2Z4PMTQ1Zh7k8rdRgmJ9V6GQE1w1Wgpy9rpsnju9hUa9Bn88x2vCA%2BrJqYKfEVqNFi%2BD2AkTO3a1G2jS%2FZ%2BZRTuOwb1pusHuVMwNnLZ7ji75SPaQzHEadvNDpNilVIw7NvnYuaOraKQbRKAgMYnTrfGxdyE5LfbnXT9I9ov%2BahVZUOr0PeBY8GMKKNncQGOqUBgXBGq9%2B%2BSKEuCYovVMrdm4H9YucdjMPbYhxLwUo9x4Mk7FG0NPsidJaoZAuQOME%2F%2BmmnVGu40SvF%2FdC1PBcqi6lGOry%2BXyzY8F7kAlactddG9akTuyNBS43DxZv2oAkkLQdxMpTlSHl%2BCnDGOtbt7PvwhZ4DZf3o9qgkV6w0UsTZfem0LH5ySGKBjTm7bo7JNdnqsTd84MyOwC9WLyjx8fb7%2B3Og&X-Amz-Signature=62268d9707dd3192b66075869787c8aac401af1dbdab27762beaf9d96bdeea48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMLEADF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDaZm%2FGpiB7Gdi%2FfNG6ZoDFvWiX%2Bk6l8gVLtarBr5kOUwIgRVDoCZin%2BZWbO8uQEUP8uZLGKAQlF9lpVsjJmK0mPS4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIFJuq48gXeTPor3yrcA2S2BnqhS%2FYRlu708HJLHsYAzlV%2Fw9dzfhFMNpQo9XoK%2B4PAP%2B34HTO2hstJyFAQf5oIe8t4XGfJtGqxf%2BWb5j5MYREt6J63OaoL1N4yQbmPMf61MUWo%2BHUzb%2FwlPdKUH2IpXBjhTU34s0%2FR0j8SOIFxl9lhAq9SMH3pRsEs8Du416lyScMC0c%2BePnTJV1LMagwhkFJkim1f%2BEdxkG%2BflbAIBImUfjB%2FNIEKVzpH%2FLZCSgu7FMOFHTOpHmtILhuddhCuwPwLyWkNrx0HBXszfOCHzaQP4O4o2OXEibABU0C93YEb0sWTNcp%2B0PnLLWWv6zX8oY0HsYGcUknmLkGPNxPnQXrnIT1qXJetq6Va6M3fENsLeagqTsUdxMosZUI9iDsq2xZmk0X9vYRjRy9YsT8m1RYOJ7cbg0q1G4ILHohtz26s7DOfnecLp5RzwM9TaN1sKa2Z4PMTQ1Zh7k8rdRgmJ9V6GQE1w1Wgpy9rpsnju9hUa9Bn88x2vCA%2BrJqYKfEVqNFi%2BD2AkTO3a1G2jS%2FZ%2BZRTuOwb1pusHuVMwNnLZ7ji75SPaQzHEadvNDpNilVIw7NvnYuaOraKQbRKAgMYnTrfGxdyE5LfbnXT9I9ov%2BahVZUOr0PeBY8GMKKNncQGOqUBgXBGq9%2B%2BSKEuCYovVMrdm4H9YucdjMPbYhxLwUo9x4Mk7FG0NPsidJaoZAuQOME%2F%2BmmnVGu40SvF%2FdC1PBcqi6lGOry%2BXyzY8F7kAlactddG9akTuyNBS43DxZv2oAkkLQdxMpTlSHl%2BCnDGOtbt7PvwhZ4DZf3o9qgkV6w0UsTZfem0LH5ySGKBjTm7bo7JNdnqsTd84MyOwC9WLyjx8fb7%2B3Og&X-Amz-Signature=89f0d21fb57e2f8360e21d868bd347999600e4762bdc26ad373a12c78a660146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMLEADF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDaZm%2FGpiB7Gdi%2FfNG6ZoDFvWiX%2Bk6l8gVLtarBr5kOUwIgRVDoCZin%2BZWbO8uQEUP8uZLGKAQlF9lpVsjJmK0mPS4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIFJuq48gXeTPor3yrcA2S2BnqhS%2FYRlu708HJLHsYAzlV%2Fw9dzfhFMNpQo9XoK%2B4PAP%2B34HTO2hstJyFAQf5oIe8t4XGfJtGqxf%2BWb5j5MYREt6J63OaoL1N4yQbmPMf61MUWo%2BHUzb%2FwlPdKUH2IpXBjhTU34s0%2FR0j8SOIFxl9lhAq9SMH3pRsEs8Du416lyScMC0c%2BePnTJV1LMagwhkFJkim1f%2BEdxkG%2BflbAIBImUfjB%2FNIEKVzpH%2FLZCSgu7FMOFHTOpHmtILhuddhCuwPwLyWkNrx0HBXszfOCHzaQP4O4o2OXEibABU0C93YEb0sWTNcp%2B0PnLLWWv6zX8oY0HsYGcUknmLkGPNxPnQXrnIT1qXJetq6Va6M3fENsLeagqTsUdxMosZUI9iDsq2xZmk0X9vYRjRy9YsT8m1RYOJ7cbg0q1G4ILHohtz26s7DOfnecLp5RzwM9TaN1sKa2Z4PMTQ1Zh7k8rdRgmJ9V6GQE1w1Wgpy9rpsnju9hUa9Bn88x2vCA%2BrJqYKfEVqNFi%2BD2AkTO3a1G2jS%2FZ%2BZRTuOwb1pusHuVMwNnLZ7ji75SPaQzHEadvNDpNilVIw7NvnYuaOraKQbRKAgMYnTrfGxdyE5LfbnXT9I9ov%2BahVZUOr0PeBY8GMKKNncQGOqUBgXBGq9%2B%2BSKEuCYovVMrdm4H9YucdjMPbYhxLwUo9x4Mk7FG0NPsidJaoZAuQOME%2F%2BmmnVGu40SvF%2FdC1PBcqi6lGOry%2BXyzY8F7kAlactddG9akTuyNBS43DxZv2oAkkLQdxMpTlSHl%2BCnDGOtbt7PvwhZ4DZf3o9qgkV6w0UsTZfem0LH5ySGKBjTm7bo7JNdnqsTd84MyOwC9WLyjx8fb7%2B3Og&X-Amz-Signature=f8abcebd8af416cc9b6558d1b8c4dfb2f06e64114a98d2890755cad04fe645c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMLEADF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDaZm%2FGpiB7Gdi%2FfNG6ZoDFvWiX%2Bk6l8gVLtarBr5kOUwIgRVDoCZin%2BZWbO8uQEUP8uZLGKAQlF9lpVsjJmK0mPS4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIFJuq48gXeTPor3yrcA2S2BnqhS%2FYRlu708HJLHsYAzlV%2Fw9dzfhFMNpQo9XoK%2B4PAP%2B34HTO2hstJyFAQf5oIe8t4XGfJtGqxf%2BWb5j5MYREt6J63OaoL1N4yQbmPMf61MUWo%2BHUzb%2FwlPdKUH2IpXBjhTU34s0%2FR0j8SOIFxl9lhAq9SMH3pRsEs8Du416lyScMC0c%2BePnTJV1LMagwhkFJkim1f%2BEdxkG%2BflbAIBImUfjB%2FNIEKVzpH%2FLZCSgu7FMOFHTOpHmtILhuddhCuwPwLyWkNrx0HBXszfOCHzaQP4O4o2OXEibABU0C93YEb0sWTNcp%2B0PnLLWWv6zX8oY0HsYGcUknmLkGPNxPnQXrnIT1qXJetq6Va6M3fENsLeagqTsUdxMosZUI9iDsq2xZmk0X9vYRjRy9YsT8m1RYOJ7cbg0q1G4ILHohtz26s7DOfnecLp5RzwM9TaN1sKa2Z4PMTQ1Zh7k8rdRgmJ9V6GQE1w1Wgpy9rpsnju9hUa9Bn88x2vCA%2BrJqYKfEVqNFi%2BD2AkTO3a1G2jS%2FZ%2BZRTuOwb1pusHuVMwNnLZ7ji75SPaQzHEadvNDpNilVIw7NvnYuaOraKQbRKAgMYnTrfGxdyE5LfbnXT9I9ov%2BahVZUOr0PeBY8GMKKNncQGOqUBgXBGq9%2B%2BSKEuCYovVMrdm4H9YucdjMPbYhxLwUo9x4Mk7FG0NPsidJaoZAuQOME%2F%2BmmnVGu40SvF%2FdC1PBcqi6lGOry%2BXyzY8F7kAlactddG9akTuyNBS43DxZv2oAkkLQdxMpTlSHl%2BCnDGOtbt7PvwhZ4DZf3o9qgkV6w0UsTZfem0LH5ySGKBjTm7bo7JNdnqsTd84MyOwC9WLyjx8fb7%2B3Og&X-Amz-Signature=f998db13f4ee75edcc4c69fc864f247ada7d1c6eea8d3e9351dd9a02ca67b591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMLEADF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDaZm%2FGpiB7Gdi%2FfNG6ZoDFvWiX%2Bk6l8gVLtarBr5kOUwIgRVDoCZin%2BZWbO8uQEUP8uZLGKAQlF9lpVsjJmK0mPS4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIFJuq48gXeTPor3yrcA2S2BnqhS%2FYRlu708HJLHsYAzlV%2Fw9dzfhFMNpQo9XoK%2B4PAP%2B34HTO2hstJyFAQf5oIe8t4XGfJtGqxf%2BWb5j5MYREt6J63OaoL1N4yQbmPMf61MUWo%2BHUzb%2FwlPdKUH2IpXBjhTU34s0%2FR0j8SOIFxl9lhAq9SMH3pRsEs8Du416lyScMC0c%2BePnTJV1LMagwhkFJkim1f%2BEdxkG%2BflbAIBImUfjB%2FNIEKVzpH%2FLZCSgu7FMOFHTOpHmtILhuddhCuwPwLyWkNrx0HBXszfOCHzaQP4O4o2OXEibABU0C93YEb0sWTNcp%2B0PnLLWWv6zX8oY0HsYGcUknmLkGPNxPnQXrnIT1qXJetq6Va6M3fENsLeagqTsUdxMosZUI9iDsq2xZmk0X9vYRjRy9YsT8m1RYOJ7cbg0q1G4ILHohtz26s7DOfnecLp5RzwM9TaN1sKa2Z4PMTQ1Zh7k8rdRgmJ9V6GQE1w1Wgpy9rpsnju9hUa9Bn88x2vCA%2BrJqYKfEVqNFi%2BD2AkTO3a1G2jS%2FZ%2BZRTuOwb1pusHuVMwNnLZ7ji75SPaQzHEadvNDpNilVIw7NvnYuaOraKQbRKAgMYnTrfGxdyE5LfbnXT9I9ov%2BahVZUOr0PeBY8GMKKNncQGOqUBgXBGq9%2B%2BSKEuCYovVMrdm4H9YucdjMPbYhxLwUo9x4Mk7FG0NPsidJaoZAuQOME%2F%2BmmnVGu40SvF%2FdC1PBcqi6lGOry%2BXyzY8F7kAlactddG9akTuyNBS43DxZv2oAkkLQdxMpTlSHl%2BCnDGOtbt7PvwhZ4DZf3o9qgkV6w0UsTZfem0LH5ySGKBjTm7bo7JNdnqsTd84MyOwC9WLyjx8fb7%2B3Og&X-Amz-Signature=5010c9ccd9305c515cc36b19e43510504469c9e1dad88d91b5314267e4647ed7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZPEBBVS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDd1GXiKSV1Hcuntn5tOPgPeCZxrGgET0bKI3jyZrdV6AIhAM3Om2KERsIuXv45NO%2FsHMB4sByUEPQ3cZpO%2Fe%2Fy2AEvKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydopKDI52ycQzsUWMq3AMVI33zR8FIa6IB9qFEwd8i39ScktTFK7ucJRtKAak9xbwBI8kmyRzwE1czBSjhvpVjghdskrKcM%2FFQK3dOWZaCCVuCmroaHBqrhhiSy%2F7SrghyfLml9ZyBu2MYXyrZTs7IoGIgqaycHo9%2FT%2FN0sk52HWHFKUuQKyW57AuU03r00S0ajJmLpbrmhU%2FnPpTrJ%2FvbuZhxpF04qne7rUfMTlBZ6z287JQZUNKeqUEK8BQ794XTNS6tMlm6x59%2FikuRir9rx0xXPcPA605yablhuS9QN3EUSfvHJ2tU07%2B8FQjFiwW3wAjJehBwRNFtfcvRh0uHPjFwWaSfVYoEbB%2F9wSaq7ZgsmxVQyGkE6pwBEByc%2F36AWVKwCP6gad8%2BSl7KxFMnVVDPYp4T0L9w7tZwW0RAzDFfaDXTURXXJv8wKssTMGG6MetRi3iSd2cFpCjBVBfJ5yxQThQz6%2BCmA%2Bwnbu3lxdEZUYGQJMoGtab8FMWTJ5jseh6CoPl93JpeCyfq0iJzEBNV93QnbJx5TZVDSm9eVgSlra3%2BJNJM74pBITVAluY%2FS87yEP16GJiR7VYPrllSiG3LE58CCUXcRmwnl7Y8Q%2Fs5eEsMMGRWbJbWZhaH129Brg3d8dUPxCGrOzDAjZ3EBjqkAeP%2BeB7i8Js4DWfMCtwep%2BgjEWh2hD%2BM9%2B7ftTGAe04Eo0pBsxJ%2BN28Ixn1I0xWfk2suJarK3VDkJwSyP5BUcYSERmBVz%2B8m2ZyWxKsmAdKikMbLWs%2Fizr3Vj0%2F77RYq2Rq8YAmq2N8b6vczjhra87cySQaZNeBqBe6XZoBw2FCTJuhRZx5wo2tJkQOde5aIWgG%2BVpg2uKcpLR4wmeW%2Bosp7ZxM%2B&X-Amz-Signature=cd10e4d95fc928d9099ae6b681bd9a86f6f2e67e8718307d9b4888007c2fa4a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZPEBBVS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDd1GXiKSV1Hcuntn5tOPgPeCZxrGgET0bKI3jyZrdV6AIhAM3Om2KERsIuXv45NO%2FsHMB4sByUEPQ3cZpO%2Fe%2Fy2AEvKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydopKDI52ycQzsUWMq3AMVI33zR8FIa6IB9qFEwd8i39ScktTFK7ucJRtKAak9xbwBI8kmyRzwE1czBSjhvpVjghdskrKcM%2FFQK3dOWZaCCVuCmroaHBqrhhiSy%2F7SrghyfLml9ZyBu2MYXyrZTs7IoGIgqaycHo9%2FT%2FN0sk52HWHFKUuQKyW57AuU03r00S0ajJmLpbrmhU%2FnPpTrJ%2FvbuZhxpF04qne7rUfMTlBZ6z287JQZUNKeqUEK8BQ794XTNS6tMlm6x59%2FikuRir9rx0xXPcPA605yablhuS9QN3EUSfvHJ2tU07%2B8FQjFiwW3wAjJehBwRNFtfcvRh0uHPjFwWaSfVYoEbB%2F9wSaq7ZgsmxVQyGkE6pwBEByc%2F36AWVKwCP6gad8%2BSl7KxFMnVVDPYp4T0L9w7tZwW0RAzDFfaDXTURXXJv8wKssTMGG6MetRi3iSd2cFpCjBVBfJ5yxQThQz6%2BCmA%2Bwnbu3lxdEZUYGQJMoGtab8FMWTJ5jseh6CoPl93JpeCyfq0iJzEBNV93QnbJx5TZVDSm9eVgSlra3%2BJNJM74pBITVAluY%2FS87yEP16GJiR7VYPrllSiG3LE58CCUXcRmwnl7Y8Q%2Fs5eEsMMGRWbJbWZhaH129Brg3d8dUPxCGrOzDAjZ3EBjqkAeP%2BeB7i8Js4DWfMCtwep%2BgjEWh2hD%2BM9%2B7ftTGAe04Eo0pBsxJ%2BN28Ixn1I0xWfk2suJarK3VDkJwSyP5BUcYSERmBVz%2B8m2ZyWxKsmAdKikMbLWs%2Fizr3Vj0%2F77RYq2Rq8YAmq2N8b6vczjhra87cySQaZNeBqBe6XZoBw2FCTJuhRZx5wo2tJkQOde5aIWgG%2BVpg2uKcpLR4wmeW%2Bosp7ZxM%2B&X-Amz-Signature=2ffed270f26bd64fe0e66ae213ee1c5941d88ae8efe7ded169cd303b02736318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZPEBBVS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDd1GXiKSV1Hcuntn5tOPgPeCZxrGgET0bKI3jyZrdV6AIhAM3Om2KERsIuXv45NO%2FsHMB4sByUEPQ3cZpO%2Fe%2Fy2AEvKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydopKDI52ycQzsUWMq3AMVI33zR8FIa6IB9qFEwd8i39ScktTFK7ucJRtKAak9xbwBI8kmyRzwE1czBSjhvpVjghdskrKcM%2FFQK3dOWZaCCVuCmroaHBqrhhiSy%2F7SrghyfLml9ZyBu2MYXyrZTs7IoGIgqaycHo9%2FT%2FN0sk52HWHFKUuQKyW57AuU03r00S0ajJmLpbrmhU%2FnPpTrJ%2FvbuZhxpF04qne7rUfMTlBZ6z287JQZUNKeqUEK8BQ794XTNS6tMlm6x59%2FikuRir9rx0xXPcPA605yablhuS9QN3EUSfvHJ2tU07%2B8FQjFiwW3wAjJehBwRNFtfcvRh0uHPjFwWaSfVYoEbB%2F9wSaq7ZgsmxVQyGkE6pwBEByc%2F36AWVKwCP6gad8%2BSl7KxFMnVVDPYp4T0L9w7tZwW0RAzDFfaDXTURXXJv8wKssTMGG6MetRi3iSd2cFpCjBVBfJ5yxQThQz6%2BCmA%2Bwnbu3lxdEZUYGQJMoGtab8FMWTJ5jseh6CoPl93JpeCyfq0iJzEBNV93QnbJx5TZVDSm9eVgSlra3%2BJNJM74pBITVAluY%2FS87yEP16GJiR7VYPrllSiG3LE58CCUXcRmwnl7Y8Q%2Fs5eEsMMGRWbJbWZhaH129Brg3d8dUPxCGrOzDAjZ3EBjqkAeP%2BeB7i8Js4DWfMCtwep%2BgjEWh2hD%2BM9%2B7ftTGAe04Eo0pBsxJ%2BN28Ixn1I0xWfk2suJarK3VDkJwSyP5BUcYSERmBVz%2B8m2ZyWxKsmAdKikMbLWs%2Fizr3Vj0%2F77RYq2Rq8YAmq2N8b6vczjhra87cySQaZNeBqBe6XZoBw2FCTJuhRZx5wo2tJkQOde5aIWgG%2BVpg2uKcpLR4wmeW%2Bosp7ZxM%2B&X-Amz-Signature=4f494b99f2539ed8e9f0ff57d87d1ae8abc0279c2d3e72818ac035059af3e5b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZPEBBVS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDd1GXiKSV1Hcuntn5tOPgPeCZxrGgET0bKI3jyZrdV6AIhAM3Om2KERsIuXv45NO%2FsHMB4sByUEPQ3cZpO%2Fe%2Fy2AEvKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydopKDI52ycQzsUWMq3AMVI33zR8FIa6IB9qFEwd8i39ScktTFK7ucJRtKAak9xbwBI8kmyRzwE1czBSjhvpVjghdskrKcM%2FFQK3dOWZaCCVuCmroaHBqrhhiSy%2F7SrghyfLml9ZyBu2MYXyrZTs7IoGIgqaycHo9%2FT%2FN0sk52HWHFKUuQKyW57AuU03r00S0ajJmLpbrmhU%2FnPpTrJ%2FvbuZhxpF04qne7rUfMTlBZ6z287JQZUNKeqUEK8BQ794XTNS6tMlm6x59%2FikuRir9rx0xXPcPA605yablhuS9QN3EUSfvHJ2tU07%2B8FQjFiwW3wAjJehBwRNFtfcvRh0uHPjFwWaSfVYoEbB%2F9wSaq7ZgsmxVQyGkE6pwBEByc%2F36AWVKwCP6gad8%2BSl7KxFMnVVDPYp4T0L9w7tZwW0RAzDFfaDXTURXXJv8wKssTMGG6MetRi3iSd2cFpCjBVBfJ5yxQThQz6%2BCmA%2Bwnbu3lxdEZUYGQJMoGtab8FMWTJ5jseh6CoPl93JpeCyfq0iJzEBNV93QnbJx5TZVDSm9eVgSlra3%2BJNJM74pBITVAluY%2FS87yEP16GJiR7VYPrllSiG3LE58CCUXcRmwnl7Y8Q%2Fs5eEsMMGRWbJbWZhaH129Brg3d8dUPxCGrOzDAjZ3EBjqkAeP%2BeB7i8Js4DWfMCtwep%2BgjEWh2hD%2BM9%2B7ftTGAe04Eo0pBsxJ%2BN28Ixn1I0xWfk2suJarK3VDkJwSyP5BUcYSERmBVz%2B8m2ZyWxKsmAdKikMbLWs%2Fizr3Vj0%2F77RYq2Rq8YAmq2N8b6vczjhra87cySQaZNeBqBe6XZoBw2FCTJuhRZx5wo2tJkQOde5aIWgG%2BVpg2uKcpLR4wmeW%2Bosp7ZxM%2B&X-Amz-Signature=aa02d7b306161df735a3f0c14eb682391bf27c48324145ed2e28736ae33f7c4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZPEBBVS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDd1GXiKSV1Hcuntn5tOPgPeCZxrGgET0bKI3jyZrdV6AIhAM3Om2KERsIuXv45NO%2FsHMB4sByUEPQ3cZpO%2Fe%2Fy2AEvKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydopKDI52ycQzsUWMq3AMVI33zR8FIa6IB9qFEwd8i39ScktTFK7ucJRtKAak9xbwBI8kmyRzwE1czBSjhvpVjghdskrKcM%2FFQK3dOWZaCCVuCmroaHBqrhhiSy%2F7SrghyfLml9ZyBu2MYXyrZTs7IoGIgqaycHo9%2FT%2FN0sk52HWHFKUuQKyW57AuU03r00S0ajJmLpbrmhU%2FnPpTrJ%2FvbuZhxpF04qne7rUfMTlBZ6z287JQZUNKeqUEK8BQ794XTNS6tMlm6x59%2FikuRir9rx0xXPcPA605yablhuS9QN3EUSfvHJ2tU07%2B8FQjFiwW3wAjJehBwRNFtfcvRh0uHPjFwWaSfVYoEbB%2F9wSaq7ZgsmxVQyGkE6pwBEByc%2F36AWVKwCP6gad8%2BSl7KxFMnVVDPYp4T0L9w7tZwW0RAzDFfaDXTURXXJv8wKssTMGG6MetRi3iSd2cFpCjBVBfJ5yxQThQz6%2BCmA%2Bwnbu3lxdEZUYGQJMoGtab8FMWTJ5jseh6CoPl93JpeCyfq0iJzEBNV93QnbJx5TZVDSm9eVgSlra3%2BJNJM74pBITVAluY%2FS87yEP16GJiR7VYPrllSiG3LE58CCUXcRmwnl7Y8Q%2Fs5eEsMMGRWbJbWZhaH129Brg3d8dUPxCGrOzDAjZ3EBjqkAeP%2BeB7i8Js4DWfMCtwep%2BgjEWh2hD%2BM9%2B7ftTGAe04Eo0pBsxJ%2BN28Ixn1I0xWfk2suJarK3VDkJwSyP5BUcYSERmBVz%2B8m2ZyWxKsmAdKikMbLWs%2Fizr3Vj0%2F77RYq2Rq8YAmq2N8b6vczjhra87cySQaZNeBqBe6XZoBw2FCTJuhRZx5wo2tJkQOde5aIWgG%2BVpg2uKcpLR4wmeW%2Bosp7ZxM%2B&X-Amz-Signature=4fb9caa8acab2bbc1700a14d86f4dcb5c459acf26bb03f4a600a7dfd8fc50733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZPEBBVS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDd1GXiKSV1Hcuntn5tOPgPeCZxrGgET0bKI3jyZrdV6AIhAM3Om2KERsIuXv45NO%2FsHMB4sByUEPQ3cZpO%2Fe%2Fy2AEvKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydopKDI52ycQzsUWMq3AMVI33zR8FIa6IB9qFEwd8i39ScktTFK7ucJRtKAak9xbwBI8kmyRzwE1czBSjhvpVjghdskrKcM%2FFQK3dOWZaCCVuCmroaHBqrhhiSy%2F7SrghyfLml9ZyBu2MYXyrZTs7IoGIgqaycHo9%2FT%2FN0sk52HWHFKUuQKyW57AuU03r00S0ajJmLpbrmhU%2FnPpTrJ%2FvbuZhxpF04qne7rUfMTlBZ6z287JQZUNKeqUEK8BQ794XTNS6tMlm6x59%2FikuRir9rx0xXPcPA605yablhuS9QN3EUSfvHJ2tU07%2B8FQjFiwW3wAjJehBwRNFtfcvRh0uHPjFwWaSfVYoEbB%2F9wSaq7ZgsmxVQyGkE6pwBEByc%2F36AWVKwCP6gad8%2BSl7KxFMnVVDPYp4T0L9w7tZwW0RAzDFfaDXTURXXJv8wKssTMGG6MetRi3iSd2cFpCjBVBfJ5yxQThQz6%2BCmA%2Bwnbu3lxdEZUYGQJMoGtab8FMWTJ5jseh6CoPl93JpeCyfq0iJzEBNV93QnbJx5TZVDSm9eVgSlra3%2BJNJM74pBITVAluY%2FS87yEP16GJiR7VYPrllSiG3LE58CCUXcRmwnl7Y8Q%2Fs5eEsMMGRWbJbWZhaH129Brg3d8dUPxCGrOzDAjZ3EBjqkAeP%2BeB7i8Js4DWfMCtwep%2BgjEWh2hD%2BM9%2B7ftTGAe04Eo0pBsxJ%2BN28Ixn1I0xWfk2suJarK3VDkJwSyP5BUcYSERmBVz%2B8m2ZyWxKsmAdKikMbLWs%2Fizr3Vj0%2F77RYq2Rq8YAmq2N8b6vczjhra87cySQaZNeBqBe6XZoBw2FCTJuhRZx5wo2tJkQOde5aIWgG%2BVpg2uKcpLR4wmeW%2Bosp7ZxM%2B&X-Amz-Signature=ddf51c7f07094441441d0531376cacb239b259ccfe4f825fdbe4767775b4b6ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
