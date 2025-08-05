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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU36475%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDT1XLvTPqk%2F1repB9ksgZNV5RVOEn%2BYHDSsqAMmX8EEQIgTzfO2Se%2FXq1Ea6lRJbVsS%2BLhjJmFKhR0jtPlEWrWn3Aq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKr4S3So11qTFqCMcCrcAy3TxNoLRI%2BzNNKCxZGUYc%2BW8G7gWtnYbvzmdGXXD4K5xQkIxhlng20GCfHR1%2FGs3YcR50Dx%2FQZ3WxhKy2%2BqZkY7CfEy4c1Hc3mRi%2BA3uZfIgyoXcxYFlHQTFU5r3k%2F7dcil%2FUlVlDkiWHYLWS%2FSZZq60ODMBMHYXw%2FH8ZsgtnShBFpr6tt%2FYLIde2xrYpkGBKFlaiQ5s8d%2BTy8ahPJmm9J2lX3mpm8Vrb7y65jpKfC3Z4FpzXU1ZaOSgyCp6tiyUybshkDErZ4%2BooK2r3bY8z13foPrNJuJw06h3up%2F%2Fl09P8fuN0PzqHqeEbLwRUGaEkkzSQ4a1%2FTVPhPXe1e4U%2BB6aod9WOcrQYrzEkLquJCAKljPhyEuomCVDFVKp1T1zyj%2F3lkdhlpjklycjLFJ0FNebfn%2BZbSoVLeijuPx1712sMRlWVPwaRbzY%2FtTHB1K0AHWTB77vP0U5uTauFiuWwgeWsdu1Ysi%2Fv63w2VON1KMyOIl0OOEI2hbowf%2F6Q2TCCkVGqjBK2wPUWEER%2FzyhFsjCNVEZ9q0rX%2FjccUfosKi3%2BfuMorcFdcA2%2FL%2FsE2dP35b8tyE858%2Ft4J0DzQ8qGX1x8msoMCcZUYod89lEiFNvh6HdnBx2vbGUNoTMKbaxsQGOqUBfqOYfG3xyagTlJsOqaDPkWqUJqsHgEij%2FMvoRbSluR2rDi0%2FJetxitzzuDJjow39muYMfNQvEC6Ipq%2BPSbg0knlvK4V0W3ZBg64noO4WZsPw8%2FqDhiOd27fQ7SlQ7s6BEZ1NbcZ6GvsqTUeg0p6DrAzNz3R%2BRKVRPtgTlcOUwoTNsNHt9bS%2BdzgeD5Gq6nApHihit55fNr5eQ5LC8PSR6N9QWVp%2F&X-Amz-Signature=909a3ddd6652b99d147c75d0eedcb2461bdc947576101c631fb226c8dd0bc40e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU36475%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDT1XLvTPqk%2F1repB9ksgZNV5RVOEn%2BYHDSsqAMmX8EEQIgTzfO2Se%2FXq1Ea6lRJbVsS%2BLhjJmFKhR0jtPlEWrWn3Aq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKr4S3So11qTFqCMcCrcAy3TxNoLRI%2BzNNKCxZGUYc%2BW8G7gWtnYbvzmdGXXD4K5xQkIxhlng20GCfHR1%2FGs3YcR50Dx%2FQZ3WxhKy2%2BqZkY7CfEy4c1Hc3mRi%2BA3uZfIgyoXcxYFlHQTFU5r3k%2F7dcil%2FUlVlDkiWHYLWS%2FSZZq60ODMBMHYXw%2FH8ZsgtnShBFpr6tt%2FYLIde2xrYpkGBKFlaiQ5s8d%2BTy8ahPJmm9J2lX3mpm8Vrb7y65jpKfC3Z4FpzXU1ZaOSgyCp6tiyUybshkDErZ4%2BooK2r3bY8z13foPrNJuJw06h3up%2F%2Fl09P8fuN0PzqHqeEbLwRUGaEkkzSQ4a1%2FTVPhPXe1e4U%2BB6aod9WOcrQYrzEkLquJCAKljPhyEuomCVDFVKp1T1zyj%2F3lkdhlpjklycjLFJ0FNebfn%2BZbSoVLeijuPx1712sMRlWVPwaRbzY%2FtTHB1K0AHWTB77vP0U5uTauFiuWwgeWsdu1Ysi%2Fv63w2VON1KMyOIl0OOEI2hbowf%2F6Q2TCCkVGqjBK2wPUWEER%2FzyhFsjCNVEZ9q0rX%2FjccUfosKi3%2BfuMorcFdcA2%2FL%2FsE2dP35b8tyE858%2Ft4J0DzQ8qGX1x8msoMCcZUYod89lEiFNvh6HdnBx2vbGUNoTMKbaxsQGOqUBfqOYfG3xyagTlJsOqaDPkWqUJqsHgEij%2FMvoRbSluR2rDi0%2FJetxitzzuDJjow39muYMfNQvEC6Ipq%2BPSbg0knlvK4V0W3ZBg64noO4WZsPw8%2FqDhiOd27fQ7SlQ7s6BEZ1NbcZ6GvsqTUeg0p6DrAzNz3R%2BRKVRPtgTlcOUwoTNsNHt9bS%2BdzgeD5Gq6nApHihit55fNr5eQ5LC8PSR6N9QWVp%2F&X-Amz-Signature=d4d0c82d957e412f491789cac3dbd0ec9165fa58f1e7e5591093a200ca32c07e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU36475%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDT1XLvTPqk%2F1repB9ksgZNV5RVOEn%2BYHDSsqAMmX8EEQIgTzfO2Se%2FXq1Ea6lRJbVsS%2BLhjJmFKhR0jtPlEWrWn3Aq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKr4S3So11qTFqCMcCrcAy3TxNoLRI%2BzNNKCxZGUYc%2BW8G7gWtnYbvzmdGXXD4K5xQkIxhlng20GCfHR1%2FGs3YcR50Dx%2FQZ3WxhKy2%2BqZkY7CfEy4c1Hc3mRi%2BA3uZfIgyoXcxYFlHQTFU5r3k%2F7dcil%2FUlVlDkiWHYLWS%2FSZZq60ODMBMHYXw%2FH8ZsgtnShBFpr6tt%2FYLIde2xrYpkGBKFlaiQ5s8d%2BTy8ahPJmm9J2lX3mpm8Vrb7y65jpKfC3Z4FpzXU1ZaOSgyCp6tiyUybshkDErZ4%2BooK2r3bY8z13foPrNJuJw06h3up%2F%2Fl09P8fuN0PzqHqeEbLwRUGaEkkzSQ4a1%2FTVPhPXe1e4U%2BB6aod9WOcrQYrzEkLquJCAKljPhyEuomCVDFVKp1T1zyj%2F3lkdhlpjklycjLFJ0FNebfn%2BZbSoVLeijuPx1712sMRlWVPwaRbzY%2FtTHB1K0AHWTB77vP0U5uTauFiuWwgeWsdu1Ysi%2Fv63w2VON1KMyOIl0OOEI2hbowf%2F6Q2TCCkVGqjBK2wPUWEER%2FzyhFsjCNVEZ9q0rX%2FjccUfosKi3%2BfuMorcFdcA2%2FL%2FsE2dP35b8tyE858%2Ft4J0DzQ8qGX1x8msoMCcZUYod89lEiFNvh6HdnBx2vbGUNoTMKbaxsQGOqUBfqOYfG3xyagTlJsOqaDPkWqUJqsHgEij%2FMvoRbSluR2rDi0%2FJetxitzzuDJjow39muYMfNQvEC6Ipq%2BPSbg0knlvK4V0W3ZBg64noO4WZsPw8%2FqDhiOd27fQ7SlQ7s6BEZ1NbcZ6GvsqTUeg0p6DrAzNz3R%2BRKVRPtgTlcOUwoTNsNHt9bS%2BdzgeD5Gq6nApHihit55fNr5eQ5LC8PSR6N9QWVp%2F&X-Amz-Signature=51174a33d0ee1d187e532ad16146fad14bb3817031e6a09fe51191cb1e49ccdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU36475%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDT1XLvTPqk%2F1repB9ksgZNV5RVOEn%2BYHDSsqAMmX8EEQIgTzfO2Se%2FXq1Ea6lRJbVsS%2BLhjJmFKhR0jtPlEWrWn3Aq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKr4S3So11qTFqCMcCrcAy3TxNoLRI%2BzNNKCxZGUYc%2BW8G7gWtnYbvzmdGXXD4K5xQkIxhlng20GCfHR1%2FGs3YcR50Dx%2FQZ3WxhKy2%2BqZkY7CfEy4c1Hc3mRi%2BA3uZfIgyoXcxYFlHQTFU5r3k%2F7dcil%2FUlVlDkiWHYLWS%2FSZZq60ODMBMHYXw%2FH8ZsgtnShBFpr6tt%2FYLIde2xrYpkGBKFlaiQ5s8d%2BTy8ahPJmm9J2lX3mpm8Vrb7y65jpKfC3Z4FpzXU1ZaOSgyCp6tiyUybshkDErZ4%2BooK2r3bY8z13foPrNJuJw06h3up%2F%2Fl09P8fuN0PzqHqeEbLwRUGaEkkzSQ4a1%2FTVPhPXe1e4U%2BB6aod9WOcrQYrzEkLquJCAKljPhyEuomCVDFVKp1T1zyj%2F3lkdhlpjklycjLFJ0FNebfn%2BZbSoVLeijuPx1712sMRlWVPwaRbzY%2FtTHB1K0AHWTB77vP0U5uTauFiuWwgeWsdu1Ysi%2Fv63w2VON1KMyOIl0OOEI2hbowf%2F6Q2TCCkVGqjBK2wPUWEER%2FzyhFsjCNVEZ9q0rX%2FjccUfosKi3%2BfuMorcFdcA2%2FL%2FsE2dP35b8tyE858%2Ft4J0DzQ8qGX1x8msoMCcZUYod89lEiFNvh6HdnBx2vbGUNoTMKbaxsQGOqUBfqOYfG3xyagTlJsOqaDPkWqUJqsHgEij%2FMvoRbSluR2rDi0%2FJetxitzzuDJjow39muYMfNQvEC6Ipq%2BPSbg0knlvK4V0W3ZBg64noO4WZsPw8%2FqDhiOd27fQ7SlQ7s6BEZ1NbcZ6GvsqTUeg0p6DrAzNz3R%2BRKVRPtgTlcOUwoTNsNHt9bS%2BdzgeD5Gq6nApHihit55fNr5eQ5LC8PSR6N9QWVp%2F&X-Amz-Signature=d652cdfc1c6148388f2a5c85aa5561e1ed25e339f52b6734ef51f86a78a4b5d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU36475%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDT1XLvTPqk%2F1repB9ksgZNV5RVOEn%2BYHDSsqAMmX8EEQIgTzfO2Se%2FXq1Ea6lRJbVsS%2BLhjJmFKhR0jtPlEWrWn3Aq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKr4S3So11qTFqCMcCrcAy3TxNoLRI%2BzNNKCxZGUYc%2BW8G7gWtnYbvzmdGXXD4K5xQkIxhlng20GCfHR1%2FGs3YcR50Dx%2FQZ3WxhKy2%2BqZkY7CfEy4c1Hc3mRi%2BA3uZfIgyoXcxYFlHQTFU5r3k%2F7dcil%2FUlVlDkiWHYLWS%2FSZZq60ODMBMHYXw%2FH8ZsgtnShBFpr6tt%2FYLIde2xrYpkGBKFlaiQ5s8d%2BTy8ahPJmm9J2lX3mpm8Vrb7y65jpKfC3Z4FpzXU1ZaOSgyCp6tiyUybshkDErZ4%2BooK2r3bY8z13foPrNJuJw06h3up%2F%2Fl09P8fuN0PzqHqeEbLwRUGaEkkzSQ4a1%2FTVPhPXe1e4U%2BB6aod9WOcrQYrzEkLquJCAKljPhyEuomCVDFVKp1T1zyj%2F3lkdhlpjklycjLFJ0FNebfn%2BZbSoVLeijuPx1712sMRlWVPwaRbzY%2FtTHB1K0AHWTB77vP0U5uTauFiuWwgeWsdu1Ysi%2Fv63w2VON1KMyOIl0OOEI2hbowf%2F6Q2TCCkVGqjBK2wPUWEER%2FzyhFsjCNVEZ9q0rX%2FjccUfosKi3%2BfuMorcFdcA2%2FL%2FsE2dP35b8tyE858%2Ft4J0DzQ8qGX1x8msoMCcZUYod89lEiFNvh6HdnBx2vbGUNoTMKbaxsQGOqUBfqOYfG3xyagTlJsOqaDPkWqUJqsHgEij%2FMvoRbSluR2rDi0%2FJetxitzzuDJjow39muYMfNQvEC6Ipq%2BPSbg0knlvK4V0W3ZBg64noO4WZsPw8%2FqDhiOd27fQ7SlQ7s6BEZ1NbcZ6GvsqTUeg0p6DrAzNz3R%2BRKVRPtgTlcOUwoTNsNHt9bS%2BdzgeD5Gq6nApHihit55fNr5eQ5LC8PSR6N9QWVp%2F&X-Amz-Signature=c1377683121335148e76ad5cf84ef2b665dc7fe5be7315e013ca3153f84fc6a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU36475%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDT1XLvTPqk%2F1repB9ksgZNV5RVOEn%2BYHDSsqAMmX8EEQIgTzfO2Se%2FXq1Ea6lRJbVsS%2BLhjJmFKhR0jtPlEWrWn3Aq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKr4S3So11qTFqCMcCrcAy3TxNoLRI%2BzNNKCxZGUYc%2BW8G7gWtnYbvzmdGXXD4K5xQkIxhlng20GCfHR1%2FGs3YcR50Dx%2FQZ3WxhKy2%2BqZkY7CfEy4c1Hc3mRi%2BA3uZfIgyoXcxYFlHQTFU5r3k%2F7dcil%2FUlVlDkiWHYLWS%2FSZZq60ODMBMHYXw%2FH8ZsgtnShBFpr6tt%2FYLIde2xrYpkGBKFlaiQ5s8d%2BTy8ahPJmm9J2lX3mpm8Vrb7y65jpKfC3Z4FpzXU1ZaOSgyCp6tiyUybshkDErZ4%2BooK2r3bY8z13foPrNJuJw06h3up%2F%2Fl09P8fuN0PzqHqeEbLwRUGaEkkzSQ4a1%2FTVPhPXe1e4U%2BB6aod9WOcrQYrzEkLquJCAKljPhyEuomCVDFVKp1T1zyj%2F3lkdhlpjklycjLFJ0FNebfn%2BZbSoVLeijuPx1712sMRlWVPwaRbzY%2FtTHB1K0AHWTB77vP0U5uTauFiuWwgeWsdu1Ysi%2Fv63w2VON1KMyOIl0OOEI2hbowf%2F6Q2TCCkVGqjBK2wPUWEER%2FzyhFsjCNVEZ9q0rX%2FjccUfosKi3%2BfuMorcFdcA2%2FL%2FsE2dP35b8tyE858%2Ft4J0DzQ8qGX1x8msoMCcZUYod89lEiFNvh6HdnBx2vbGUNoTMKbaxsQGOqUBfqOYfG3xyagTlJsOqaDPkWqUJqsHgEij%2FMvoRbSluR2rDi0%2FJetxitzzuDJjow39muYMfNQvEC6Ipq%2BPSbg0knlvK4V0W3ZBg64noO4WZsPw8%2FqDhiOd27fQ7SlQ7s6BEZ1NbcZ6GvsqTUeg0p6DrAzNz3R%2BRKVRPtgTlcOUwoTNsNHt9bS%2BdzgeD5Gq6nApHihit55fNr5eQ5LC8PSR6N9QWVp%2F&X-Amz-Signature=044e2bd0a8f4c72de987dde635eb7a2534ba0f232b864666779879842e0eb2a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU36475%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDT1XLvTPqk%2F1repB9ksgZNV5RVOEn%2BYHDSsqAMmX8EEQIgTzfO2Se%2FXq1Ea6lRJbVsS%2BLhjJmFKhR0jtPlEWrWn3Aq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKr4S3So11qTFqCMcCrcAy3TxNoLRI%2BzNNKCxZGUYc%2BW8G7gWtnYbvzmdGXXD4K5xQkIxhlng20GCfHR1%2FGs3YcR50Dx%2FQZ3WxhKy2%2BqZkY7CfEy4c1Hc3mRi%2BA3uZfIgyoXcxYFlHQTFU5r3k%2F7dcil%2FUlVlDkiWHYLWS%2FSZZq60ODMBMHYXw%2FH8ZsgtnShBFpr6tt%2FYLIde2xrYpkGBKFlaiQ5s8d%2BTy8ahPJmm9J2lX3mpm8Vrb7y65jpKfC3Z4FpzXU1ZaOSgyCp6tiyUybshkDErZ4%2BooK2r3bY8z13foPrNJuJw06h3up%2F%2Fl09P8fuN0PzqHqeEbLwRUGaEkkzSQ4a1%2FTVPhPXe1e4U%2BB6aod9WOcrQYrzEkLquJCAKljPhyEuomCVDFVKp1T1zyj%2F3lkdhlpjklycjLFJ0FNebfn%2BZbSoVLeijuPx1712sMRlWVPwaRbzY%2FtTHB1K0AHWTB77vP0U5uTauFiuWwgeWsdu1Ysi%2Fv63w2VON1KMyOIl0OOEI2hbowf%2F6Q2TCCkVGqjBK2wPUWEER%2FzyhFsjCNVEZ9q0rX%2FjccUfosKi3%2BfuMorcFdcA2%2FL%2FsE2dP35b8tyE858%2Ft4J0DzQ8qGX1x8msoMCcZUYod89lEiFNvh6HdnBx2vbGUNoTMKbaxsQGOqUBfqOYfG3xyagTlJsOqaDPkWqUJqsHgEij%2FMvoRbSluR2rDi0%2FJetxitzzuDJjow39muYMfNQvEC6Ipq%2BPSbg0knlvK4V0W3ZBg64noO4WZsPw8%2FqDhiOd27fQ7SlQ7s6BEZ1NbcZ6GvsqTUeg0p6DrAzNz3R%2BRKVRPtgTlcOUwoTNsNHt9bS%2BdzgeD5Gq6nApHihit55fNr5eQ5LC8PSR6N9QWVp%2F&X-Amz-Signature=dcf62f2595aef0134b868a1b3232b96b34d7195c87320bd48456f978f7e47833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU36475%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDT1XLvTPqk%2F1repB9ksgZNV5RVOEn%2BYHDSsqAMmX8EEQIgTzfO2Se%2FXq1Ea6lRJbVsS%2BLhjJmFKhR0jtPlEWrWn3Aq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKr4S3So11qTFqCMcCrcAy3TxNoLRI%2BzNNKCxZGUYc%2BW8G7gWtnYbvzmdGXXD4K5xQkIxhlng20GCfHR1%2FGs3YcR50Dx%2FQZ3WxhKy2%2BqZkY7CfEy4c1Hc3mRi%2BA3uZfIgyoXcxYFlHQTFU5r3k%2F7dcil%2FUlVlDkiWHYLWS%2FSZZq60ODMBMHYXw%2FH8ZsgtnShBFpr6tt%2FYLIde2xrYpkGBKFlaiQ5s8d%2BTy8ahPJmm9J2lX3mpm8Vrb7y65jpKfC3Z4FpzXU1ZaOSgyCp6tiyUybshkDErZ4%2BooK2r3bY8z13foPrNJuJw06h3up%2F%2Fl09P8fuN0PzqHqeEbLwRUGaEkkzSQ4a1%2FTVPhPXe1e4U%2BB6aod9WOcrQYrzEkLquJCAKljPhyEuomCVDFVKp1T1zyj%2F3lkdhlpjklycjLFJ0FNebfn%2BZbSoVLeijuPx1712sMRlWVPwaRbzY%2FtTHB1K0AHWTB77vP0U5uTauFiuWwgeWsdu1Ysi%2Fv63w2VON1KMyOIl0OOEI2hbowf%2F6Q2TCCkVGqjBK2wPUWEER%2FzyhFsjCNVEZ9q0rX%2FjccUfosKi3%2BfuMorcFdcA2%2FL%2FsE2dP35b8tyE858%2Ft4J0DzQ8qGX1x8msoMCcZUYod89lEiFNvh6HdnBx2vbGUNoTMKbaxsQGOqUBfqOYfG3xyagTlJsOqaDPkWqUJqsHgEij%2FMvoRbSluR2rDi0%2FJetxitzzuDJjow39muYMfNQvEC6Ipq%2BPSbg0knlvK4V0W3ZBg64noO4WZsPw8%2FqDhiOd27fQ7SlQ7s6BEZ1NbcZ6GvsqTUeg0p6DrAzNz3R%2BRKVRPtgTlcOUwoTNsNHt9bS%2BdzgeD5Gq6nApHihit55fNr5eQ5LC8PSR6N9QWVp%2F&X-Amz-Signature=7755b97429c3fb647b9dd2ee5a65b62754b8a83a96217ec132899d611a315447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU36475%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDT1XLvTPqk%2F1repB9ksgZNV5RVOEn%2BYHDSsqAMmX8EEQIgTzfO2Se%2FXq1Ea6lRJbVsS%2BLhjJmFKhR0jtPlEWrWn3Aq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKr4S3So11qTFqCMcCrcAy3TxNoLRI%2BzNNKCxZGUYc%2BW8G7gWtnYbvzmdGXXD4K5xQkIxhlng20GCfHR1%2FGs3YcR50Dx%2FQZ3WxhKy2%2BqZkY7CfEy4c1Hc3mRi%2BA3uZfIgyoXcxYFlHQTFU5r3k%2F7dcil%2FUlVlDkiWHYLWS%2FSZZq60ODMBMHYXw%2FH8ZsgtnShBFpr6tt%2FYLIde2xrYpkGBKFlaiQ5s8d%2BTy8ahPJmm9J2lX3mpm8Vrb7y65jpKfC3Z4FpzXU1ZaOSgyCp6tiyUybshkDErZ4%2BooK2r3bY8z13foPrNJuJw06h3up%2F%2Fl09P8fuN0PzqHqeEbLwRUGaEkkzSQ4a1%2FTVPhPXe1e4U%2BB6aod9WOcrQYrzEkLquJCAKljPhyEuomCVDFVKp1T1zyj%2F3lkdhlpjklycjLFJ0FNebfn%2BZbSoVLeijuPx1712sMRlWVPwaRbzY%2FtTHB1K0AHWTB77vP0U5uTauFiuWwgeWsdu1Ysi%2Fv63w2VON1KMyOIl0OOEI2hbowf%2F6Q2TCCkVGqjBK2wPUWEER%2FzyhFsjCNVEZ9q0rX%2FjccUfosKi3%2BfuMorcFdcA2%2FL%2FsE2dP35b8tyE858%2Ft4J0DzQ8qGX1x8msoMCcZUYod89lEiFNvh6HdnBx2vbGUNoTMKbaxsQGOqUBfqOYfG3xyagTlJsOqaDPkWqUJqsHgEij%2FMvoRbSluR2rDi0%2FJetxitzzuDJjow39muYMfNQvEC6Ipq%2BPSbg0knlvK4V0W3ZBg64noO4WZsPw8%2FqDhiOd27fQ7SlQ7s6BEZ1NbcZ6GvsqTUeg0p6DrAzNz3R%2BRKVRPtgTlcOUwoTNsNHt9bS%2BdzgeD5Gq6nApHihit55fNr5eQ5LC8PSR6N9QWVp%2F&X-Amz-Signature=3b1bb26e50a040048a34437ed7533777f01ef449fc01db3a9f49ea1e29aed2ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU36475%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDT1XLvTPqk%2F1repB9ksgZNV5RVOEn%2BYHDSsqAMmX8EEQIgTzfO2Se%2FXq1Ea6lRJbVsS%2BLhjJmFKhR0jtPlEWrWn3Aq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKr4S3So11qTFqCMcCrcAy3TxNoLRI%2BzNNKCxZGUYc%2BW8G7gWtnYbvzmdGXXD4K5xQkIxhlng20GCfHR1%2FGs3YcR50Dx%2FQZ3WxhKy2%2BqZkY7CfEy4c1Hc3mRi%2BA3uZfIgyoXcxYFlHQTFU5r3k%2F7dcil%2FUlVlDkiWHYLWS%2FSZZq60ODMBMHYXw%2FH8ZsgtnShBFpr6tt%2FYLIde2xrYpkGBKFlaiQ5s8d%2BTy8ahPJmm9J2lX3mpm8Vrb7y65jpKfC3Z4FpzXU1ZaOSgyCp6tiyUybshkDErZ4%2BooK2r3bY8z13foPrNJuJw06h3up%2F%2Fl09P8fuN0PzqHqeEbLwRUGaEkkzSQ4a1%2FTVPhPXe1e4U%2BB6aod9WOcrQYrzEkLquJCAKljPhyEuomCVDFVKp1T1zyj%2F3lkdhlpjklycjLFJ0FNebfn%2BZbSoVLeijuPx1712sMRlWVPwaRbzY%2FtTHB1K0AHWTB77vP0U5uTauFiuWwgeWsdu1Ysi%2Fv63w2VON1KMyOIl0OOEI2hbowf%2F6Q2TCCkVGqjBK2wPUWEER%2FzyhFsjCNVEZ9q0rX%2FjccUfosKi3%2BfuMorcFdcA2%2FL%2FsE2dP35b8tyE858%2Ft4J0DzQ8qGX1x8msoMCcZUYod89lEiFNvh6HdnBx2vbGUNoTMKbaxsQGOqUBfqOYfG3xyagTlJsOqaDPkWqUJqsHgEij%2FMvoRbSluR2rDi0%2FJetxitzzuDJjow39muYMfNQvEC6Ipq%2BPSbg0knlvK4V0W3ZBg64noO4WZsPw8%2FqDhiOd27fQ7SlQ7s6BEZ1NbcZ6GvsqTUeg0p6DrAzNz3R%2BRKVRPtgTlcOUwoTNsNHt9bS%2BdzgeD5Gq6nApHihit55fNr5eQ5LC8PSR6N9QWVp%2F&X-Amz-Signature=f635d941df1d21579e2f49c6237cc744c370b560c9fb22a9d1e75b6364ba0596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J7NWHFP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDRi5GK0Lp6Zh1mWppgwO4hoY7aOkIfYy8NCy6ikVwoIwIgNqAfA3HwJOB%2BRdgk9I3PF9eZOKvPh3dqqqtaYJlbKwMq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDP7tvCCGPxo6QPCL%2FircAzD9AXHIz%2FpOCdv2TF8GzLbiF5RhfYgqAFXSkHt11j%2FdHVtrU5aQ7AYlSWsI9GGEG8eMm62V00UG7zlAzq%2FulQbI6B4HiYLBxIYiRaeYLSPjQVoU9jZC8NAwv9bVhKxxM1Fg9oaNs%2F6me8dHUZKlYBDWKYe9oi7WXKRL%2FQ6lkfB5DiSfI69VgzQqBk%2FYi52SbXQj%2FSIVkEAYQOEezKqmh0gOhO0VpEhpCX2Q8ir30fhNkEsWo3b%2BgkYEnnNNVtbZyJIvQ8qc9kxOyJelGVu1NKdPNgoSgRtKGJYz09R26jhheGCr%2BR4YdO%2F1lWZtDESVUqgGml3%2BsF4pindVCS%2FEUjgB2QKkNMvjZWBarRl2GV8qCP76Qb2Ze2x5khLqJd%2Ff5nVDUyTGNUdRos6pj8PAaMc77Trsny4w9LtMdDN8yoEq0fRt7Ngv6XCGVA2w8yXqtfsFhWNiv3%2BnuzURDeegcuqyglj3k%2BdKQuzcTmoZe9lWhpKKedcUzlpDZmlI%2BurRdPj78bmJL2X04L5DHzE96ZU44c7HKOiz3HKPx1wNIL0iDhPBTiWbLkZc79gYyLE6kp2OncDO333YJBDnhVcYT5qgEM0E6mxFkShr%2BYAG9QPdYIIpljSSesI2VDkiMOzZxsQGOqUBlLZMV6yJzCV61ekxkmpTh8ztoSjAY%2BeJVFBl%2Bf%2B%2BwcJXHrCMSKikR2JsL%2BAmBFlzUi2tf8xihb5Pfw2peSh18B80QS8KKiaiZFEIR8etRg8VhCwNXrtkjGqKBqo6aY%2BvX9S6ZAiTJqhw7%2BseK6bQgh0udfBqiUszCQoyAs96SpEfJfKlwKAtZf4BSNHQ%2BOoImL5oAKJp82kqJPFYhKlLBE3K6Rxd&X-Amz-Signature=991d94ac82fc193c820142276f2aeba8e074a6ee9907f909160d7ae54aae35a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJVRK26Y%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGBlRY%2FgqQ79czyvqm%2BH4pwHiiWCbaSIaEOPQsbBlbXPAiBH20sRym%2Fl8x1Hh48i2fXWfy0IG0yOqSKfETqLodvGtSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMXgPVJbvjgUazrtQFKtwDOGQHpGNHVRzPmIoF5sjBDtZSbH7yDRm0C7165hXbxaDS55SP1QPXC8XVoadFQs8OVPn6dHnXl%2BmYfGQBsNklD9H%2BAKCAmE2akt1MVLYn2ep337tcb3mhvu8Sf7dobQoQFSqy0niWfl%2By90O34I6ML%2BZSm912mfA%2BmqRi2HBe%2B235xsZUD%2Bv7x7XLrFKZuqdgn1K7kr76RkxhL36thJq5ZAtwAAsFz8Fg4qx0bkYKUSPimxGNVRlrf5rLgeYgPUfTSSFUs0oH9PjRvyuFmCwZNqOsJ4r0%2BKwPyUfH9VCdyJUrMcURdQMnBhrCEIrJHNo4vc1RhazSayfx2AhrL0hTxjPBVUyD3031I2cfOaP0dTPXbVjjxkCJvicB6x8WV0p7fYQAjKzePz%2F%2FfLM8TV%2FZexjoQoA5tRW3fLy4UjaipPdmqB0JIqyBwOx8qR%2Fde%2B4VKnfHjOZ4hT03EiwB4h2o3S6C8P%2B61myRidTF3wu49jIOsYqOj3sRPtoixzyyp0utiR0czopmR7xREzUZnA%2FamI%2BVsnQ1G9bFrNotlFNWafqxJb56xgvbSwe8DzARla6DTEAoMKmJRqXViSLodCt3jIxO%2FDYKiREQCHGAtuCb%2BE9t0EMb9pYCGL35rk8w29nGxAY6pgELTEpyp3QVnewzkcHAFilAomrH1zdWeolg9stkzdcSSiT6tHueyeBzamF1PuveRyMtJoNt41Y6Mby6MZYqjKxOJvb8dUq9ixReCc%2FiC7GIY7BOslHOG%2BvNcrCBvfTeMudXfVcyRV3NkRNU5IcAZNKUbJith9iJB6AcNddmqCwKshyj3RfC6babpPzYWwZXCd7W%2BzjIP5ISK7lfscyd1tYZc4T9mNWE&X-Amz-Signature=3b7e9d97e6f771edb1a7ac929090348a365f3d9f49bc1389ee5f84aa85954750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AIOBSRG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEJ0It26b6Y03u6nboSYU0PZu0ffoSnM%2Ft2ZWcJdZzIgAiEA6Tvb3mRDzeKygOiRKmQm6IpzpKZ85EsrD56da8lJjt0q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFrjZMS28u%2F0dM09FSrcAy%2F%2FVqvMt9NiCseLhUeiMBqoQa5NPPO0IROnUIok9RomjtA9AoYkxWTn1c4ZcDGTwMwpQ8J8QpkuhNQjews0sfY7%2FqSQ6zKnjRyP5%2BHTKDeBWDfO8dv%2B8mmTizukbBbLbYpXJnlJ2Cetc2qhnpxnpnms08ZJ0iaICgCYWMOymRWT8lzVhbXRc3iPNXrCxFq%2FWqVbvYVBK5vtCZdVnpWXGR2kr2n97fDLSYeOqpUuzJh%2FmaOBDfXSxfeijYuMUi%2FgjXkTL5QmCvO%2BMVKI733HsRlBvf8BS7ux87lXWeBXQB09DNxyCi8kUZpREfP%2F5DKfWV8Hb7R7m0%2Bz5AfSdQxVrVm5Fc4debIdhlfUTSueB5LMHPD2YVMivPhXd%2FM8PNLyfQ26cAfC406A42dwABdhpMeKRKHGDWpX9ib1OEb2vFweCUzxhQDO0YvLzyn%2F6OBYgTkPcVEZCy05Rvarx3oXnntGgOcDHPAB5ldQXNvuZmgnnfpctpUTicXTxH%2B28No7qlGVoN%2B0ilSHrHuqri05yrKdw9s4ZnDzmCVl6hm6B8yJvBHaJWgBPh0kzL7kg5KD%2FPDdJfCaQifeZ4eKqxh0a6RS6ZXxbZppfcmC8bh6qtXwvQ89u4OlcUIjom4BMP3axsQGOqUBxgIAF4FZ4XzgZ1Ri0G6uoGlJrs9W3Up%2FAfcHkyV5X05pZF9%2Fb4zTCDbPu6oSxnKcJkDBPGw8iscjuTdgCIMhL6ojDbHGVC4%2B8GNf8XNDjc4n1Iv1WTWWG6NvXjokfDmP7t4SSmb1Kklm2ocjz7uPg4SXan0xYiSLtcrYj%2FEWgYYnfVIL0YqqAdR3jvo98pTksd%2FxjT8GIfU4pN%2Bbsa6XB4JuGN7Z&X-Amz-Signature=5624c8bc37a5f15186b376b03bd680c1708ba11c1b6472992c5a5c2f7ed0aae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU36475%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDT1XLvTPqk%2F1repB9ksgZNV5RVOEn%2BYHDSsqAMmX8EEQIgTzfO2Se%2FXq1Ea6lRJbVsS%2BLhjJmFKhR0jtPlEWrWn3Aq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKr4S3So11qTFqCMcCrcAy3TxNoLRI%2BzNNKCxZGUYc%2BW8G7gWtnYbvzmdGXXD4K5xQkIxhlng20GCfHR1%2FGs3YcR50Dx%2FQZ3WxhKy2%2BqZkY7CfEy4c1Hc3mRi%2BA3uZfIgyoXcxYFlHQTFU5r3k%2F7dcil%2FUlVlDkiWHYLWS%2FSZZq60ODMBMHYXw%2FH8ZsgtnShBFpr6tt%2FYLIde2xrYpkGBKFlaiQ5s8d%2BTy8ahPJmm9J2lX3mpm8Vrb7y65jpKfC3Z4FpzXU1ZaOSgyCp6tiyUybshkDErZ4%2BooK2r3bY8z13foPrNJuJw06h3up%2F%2Fl09P8fuN0PzqHqeEbLwRUGaEkkzSQ4a1%2FTVPhPXe1e4U%2BB6aod9WOcrQYrzEkLquJCAKljPhyEuomCVDFVKp1T1zyj%2F3lkdhlpjklycjLFJ0FNebfn%2BZbSoVLeijuPx1712sMRlWVPwaRbzY%2FtTHB1K0AHWTB77vP0U5uTauFiuWwgeWsdu1Ysi%2Fv63w2VON1KMyOIl0OOEI2hbowf%2F6Q2TCCkVGqjBK2wPUWEER%2FzyhFsjCNVEZ9q0rX%2FjccUfosKi3%2BfuMorcFdcA2%2FL%2FsE2dP35b8tyE858%2Ft4J0DzQ8qGX1x8msoMCcZUYod89lEiFNvh6HdnBx2vbGUNoTMKbaxsQGOqUBfqOYfG3xyagTlJsOqaDPkWqUJqsHgEij%2FMvoRbSluR2rDi0%2FJetxitzzuDJjow39muYMfNQvEC6Ipq%2BPSbg0knlvK4V0W3ZBg64noO4WZsPw8%2FqDhiOd27fQ7SlQ7s6BEZ1NbcZ6GvsqTUeg0p6DrAzNz3R%2BRKVRPtgTlcOUwoTNsNHt9bS%2BdzgeD5Gq6nApHihit55fNr5eQ5LC8PSR6N9QWVp%2F&X-Amz-Signature=bb2a85146529e2154e1d5a651c01116a1e24db1ab935d188a9a3a03e89e247e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQZWMZ4Z%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBoYyLyVNIdX%2FDJEuj47Gaf30FHPbK1vbu2%2BMcgYdrLRAiEAslOS%2BcE%2FOsA5Q53VDS5E82%2F8w%2B3%2BSQfH4WinTYO0EvMq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDBUvTk9UtYndw%2FB39SrcA0Gu%2FbVu4MPFCaEY8ho8gQqsfVrz4mOsp0yZVLk6VmG%2FO%2Bhjtzqj8zh6jnjuSW%2BDJZfOaMqFY%2BkO6ITMse0PlUrIGzdIk7ik4BYb5BB1KlGHpY%2FM%2B9i06tnwGTeHB3JRMyNV4rVRDmpecH%2FGYtfuTPshbwSi7AIrcmRruqQeQGlAcJznRNFYKd2VDbvqfWrHx8fpJdvi0XlEzQNfe%2F%2Bl5FuGKJ0goEQkjAXz8InOwZJEUMWsL1D9fOQY%2BOXnb2n%2Fw2g0F1hZMXZL7JkGbr%2Ba9k%2B3Kfie6KzJwkz9HFfgHLtuK6yczsJi5IrtX2cXPPquRuyOS2opj4vNV8Dw9naxXLsr%2Bf9Yc5qpL7tpAwkT%2FUM9UkYpxY9mBUe%2BarFMP18ECw1VQfDn4H5dJ2Lg2mFmtSrgPf0q2sIl8oF10w%2FiBfLdLZmqqe8bZZUzeuiHwHjIyN3VA%2Fa%2F1aOgV2kMHZHL4Vwai%2FzWQZTziWpMC1ZazYz28m5uWi8xmETeiY2u8p3Wlg6xbuZuLylxsQj8x%2FTtBDyRCNtxypd2LL5GL0HHjmbRzajLoo5Kl9%2BE3tUNh%2F7szFVdJXYEsYxQaAUiqNrQq3x%2BAQv2GO7Ha2iP5nKAriMZ%2FGaE3rm7At%2BegeLRMP%2FZxsQGOqUBnLcjNKqu4Zti1UNDCnZFI6nyxEHQSE7TwYlEsoVJVtLQPorOr3A3vkwz5a6%2FdAq%2FQGtDqTctR97GvWyR2gHzLhtbMRwOsp%2F63Sc1CYU0h3w6gcvO%2F%2F4S4pdFi4fKeGqRGUjKoy0IQyQbz0ABxaQh9VBxLGsHFrtgeFk3mLQn2G9WzG0fMpEj3MA%2BMLVoPK4qQM%2BbdLIbaaq5VW8EgSJ68A6phJx6&X-Amz-Signature=dc2195970c74a413b8346e25d4b95b541c92fc46597b5caa75ab3ac417d5a448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU36475%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDT1XLvTPqk%2F1repB9ksgZNV5RVOEn%2BYHDSsqAMmX8EEQIgTzfO2Se%2FXq1Ea6lRJbVsS%2BLhjJmFKhR0jtPlEWrWn3Aq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKr4S3So11qTFqCMcCrcAy3TxNoLRI%2BzNNKCxZGUYc%2BW8G7gWtnYbvzmdGXXD4K5xQkIxhlng20GCfHR1%2FGs3YcR50Dx%2FQZ3WxhKy2%2BqZkY7CfEy4c1Hc3mRi%2BA3uZfIgyoXcxYFlHQTFU5r3k%2F7dcil%2FUlVlDkiWHYLWS%2FSZZq60ODMBMHYXw%2FH8ZsgtnShBFpr6tt%2FYLIde2xrYpkGBKFlaiQ5s8d%2BTy8ahPJmm9J2lX3mpm8Vrb7y65jpKfC3Z4FpzXU1ZaOSgyCp6tiyUybshkDErZ4%2BooK2r3bY8z13foPrNJuJw06h3up%2F%2Fl09P8fuN0PzqHqeEbLwRUGaEkkzSQ4a1%2FTVPhPXe1e4U%2BB6aod9WOcrQYrzEkLquJCAKljPhyEuomCVDFVKp1T1zyj%2F3lkdhlpjklycjLFJ0FNebfn%2BZbSoVLeijuPx1712sMRlWVPwaRbzY%2FtTHB1K0AHWTB77vP0U5uTauFiuWwgeWsdu1Ysi%2Fv63w2VON1KMyOIl0OOEI2hbowf%2F6Q2TCCkVGqjBK2wPUWEER%2FzyhFsjCNVEZ9q0rX%2FjccUfosKi3%2BfuMorcFdcA2%2FL%2FsE2dP35b8tyE858%2Ft4J0DzQ8qGX1x8msoMCcZUYod89lEiFNvh6HdnBx2vbGUNoTMKbaxsQGOqUBfqOYfG3xyagTlJsOqaDPkWqUJqsHgEij%2FMvoRbSluR2rDi0%2FJetxitzzuDJjow39muYMfNQvEC6Ipq%2BPSbg0knlvK4V0W3ZBg64noO4WZsPw8%2FqDhiOd27fQ7SlQ7s6BEZ1NbcZ6GvsqTUeg0p6DrAzNz3R%2BRKVRPtgTlcOUwoTNsNHt9bS%2BdzgeD5Gq6nApHihit55fNr5eQ5LC8PSR6N9QWVp%2F&X-Amz-Signature=38f3c45a348b1d8256091c0d3b9e843f32e85cda64b5d94f90efd3f756c56bc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4XWWF5V%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIA3ueF2SyyJ%2B3Bih9B9kNIPJDSvd867PCM8jt8o38ZLtAiAcs10Tk538G2g8Wxt2RVjh%2FFQNTBe3orsY8xwsS8no3ir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM%2BNPafuTMgXEAPtvXKtwDuLzkIsKV1w3xqELyfOsdGNhGosUoL1Ym31ExfqE3v0XODKVaC5sMSuen73vlr3ZafUHFKGdKkko23tg3EROHncIKsNLbzhVmRuyknow4FD9k2AMU6bap7nGOm6VDDqqw2zBcpXF7gGcFw1WBqiSOXH2EbrJpiWxnVA2Gw4G%2FAB%2FD12I3GCEkaCg7nX9CL3qEUXA%2F%2BewMnYIuj7WbZEXgeD2m%2FWFhIVKrT%2FJCFWY2FGDFmmzmjIoj3JBJ3VGbeVsrUDX48NplA6azCP%2BFZejpFVDdpaavcjEi%2FPn2BqvRB6ugZhTeET1kufGfLzkYqBj%2FSXy2LrMAqmsAgf0qZNc78zPuHkGmj38KRi4Cw9UWCncrNr%2FF%2BQntTxjfehz7bk0qV2DCLvr6qRNLCywpOF4zX%2BI844OdEl5BzegFZ0AdDX9K4oy28P%2BjVwyZ5kkp6s235RnLsMWVPkORt3nQCC6WymNSO0bum09BGrPfugjNXFoq0lgbSBG8SGDFGNk7eXJgLKNWPcBRDCdxL0rf1Mi8FZMNTGZHTW%2BPFUSoID3%2Fx7Kfbrgf1DzoebMjnpBE4cvBYOruBj5s4sfDr2q0Kircb50Xw73KZE9ptGSbKg%2FDtabqY8VPBHDoN%2BPB0rYwr9vGxAY6pgFEdAGOMgFXbZqq8kk4yxr9FYe5wNiFUnpl7mUgJ3ExXA6sbTMJAsc56F1sGTqIPQtD9SEF4YuRMX8van1boK%2FXGu2ArzrpRioW8rA1IlwMiqok7yszduP%2FKd4tZ3UVyrC1SWtpA%2FIcGqt9SzdCK15Ave8lwYKGTdPF%2BTDgKs09uNJN4ZF9SEW9mIAAF1gqEbos01d1ZgLuD9aWjyIjeb%2BpJ8kPWrK6&X-Amz-Signature=69133045146cb2b9e2f93f51b598f3e66f2d53276e49c8b262f4e11c07b96c39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU36475%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDT1XLvTPqk%2F1repB9ksgZNV5RVOEn%2BYHDSsqAMmX8EEQIgTzfO2Se%2FXq1Ea6lRJbVsS%2BLhjJmFKhR0jtPlEWrWn3Aq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKr4S3So11qTFqCMcCrcAy3TxNoLRI%2BzNNKCxZGUYc%2BW8G7gWtnYbvzmdGXXD4K5xQkIxhlng20GCfHR1%2FGs3YcR50Dx%2FQZ3WxhKy2%2BqZkY7CfEy4c1Hc3mRi%2BA3uZfIgyoXcxYFlHQTFU5r3k%2F7dcil%2FUlVlDkiWHYLWS%2FSZZq60ODMBMHYXw%2FH8ZsgtnShBFpr6tt%2FYLIde2xrYpkGBKFlaiQ5s8d%2BTy8ahPJmm9J2lX3mpm8Vrb7y65jpKfC3Z4FpzXU1ZaOSgyCp6tiyUybshkDErZ4%2BooK2r3bY8z13foPrNJuJw06h3up%2F%2Fl09P8fuN0PzqHqeEbLwRUGaEkkzSQ4a1%2FTVPhPXe1e4U%2BB6aod9WOcrQYrzEkLquJCAKljPhyEuomCVDFVKp1T1zyj%2F3lkdhlpjklycjLFJ0FNebfn%2BZbSoVLeijuPx1712sMRlWVPwaRbzY%2FtTHB1K0AHWTB77vP0U5uTauFiuWwgeWsdu1Ysi%2Fv63w2VON1KMyOIl0OOEI2hbowf%2F6Q2TCCkVGqjBK2wPUWEER%2FzyhFsjCNVEZ9q0rX%2FjccUfosKi3%2BfuMorcFdcA2%2FL%2FsE2dP35b8tyE858%2Ft4J0DzQ8qGX1x8msoMCcZUYod89lEiFNvh6HdnBx2vbGUNoTMKbaxsQGOqUBfqOYfG3xyagTlJsOqaDPkWqUJqsHgEij%2FMvoRbSluR2rDi0%2FJetxitzzuDJjow39muYMfNQvEC6Ipq%2BPSbg0knlvK4V0W3ZBg64noO4WZsPw8%2FqDhiOd27fQ7SlQ7s6BEZ1NbcZ6GvsqTUeg0p6DrAzNz3R%2BRKVRPtgTlcOUwoTNsNHt9bS%2BdzgeD5Gq6nApHihit55fNr5eQ5LC8PSR6N9QWVp%2F&X-Amz-Signature=e093f9e7a91ba7f369570db3b41708e7a3e89ba9f3aa08f7df07ec1f2482221e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PDBKDEW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQC8UXjf%2BwFsCuU5R1NVKJaks5xI8XeG27n7stkuu9E4uAIhAK7OQkBl4aoiZOFj6Ss4KJ4syXxl2csaXl1UNfaj5UbtKv8DCFgQABoMNjM3NDIzMTgzODA1Igx%2Bh2PPu9rT0IW6wSoq3AO2ca%2BynmDzwADRRqHqlPtJYQYEOLwMiGWPExKWpm0K%2FRS1TD8ZgwWcjuxiv%2BQEsPueFTiwWWcZUWGcZZ7mSECxAbYsp80afdlXo7HzX7q%2FiqgOff6o1BThKVMlh1HM6%2F4%2BFP5S%2BA5x9PeVJn9h1mgtXxoz3ae4PVTD2AKY%2FHA5MFDvXzcfavFbq%2BOkJd8h831YQGqQcS%2Ba3bltZPhPLYK%2ByBNa72z8TkC3SmQEOsQBxkyN2GwKSSWO%2BNa%2BaRjXvP4NctXSj7VcKsUN8Xft2pso%2Bmm1TT43Tcd400mQch9Yz8kokiyeho4gz0Ttj087tgQV5zCSd%2BQN9EWv2f7qOHuVcux%2FSYL7TTG%2F9V56XKXUN8a8yfwDO8ZpiC0U%2FtfYjKBT5Ld%2B8OIM2i67%2BgJx4zQ%2BZ3nMcc3xv4svNGY4ZTT8me%2FEG3PdsuoKKNtureysPHzr3q3WKXfj4zDNXwAKfBMtfCMfrYfvGq%2BkBiLbZen6jlJ2geyzGHuMYYWIuCtMUc8gQMUXBtrnk4iP7AkrNWf8qsWzB9IWYmeAUsFdXysCxL5EFyC%2FClLvEL79OXKu7MPJVTJhm%2BEVzAu%2FiOXCs7XBY4ZAWG7V%2F857CPEsuvZlTBmCmKanVW0LS7%2BHCTDr2cbEBjqkAUL9X6pPQAplOyLDSWtEnjjND3dUunQDcGeSKB5hziF%2BrpqScAqtGt6nHqJYtLB4xP2EisrFbB1RvI03dN5IpeH9PGUxiRvt9WsLjJxZJIYcQMkXvpKScLuVX4acWdpHGi8gJGFx4FHxJRRpXe77K7pKhODohyU6OZ%2FHi%2FC%2FbXjTcYg6KbT4qF%2B%2FHcnkGvNHIULseVx9qodGQ4%2BJutJp7%2FIb7MBP&X-Amz-Signature=ff8b8de672c156baf2aaf5bceb9af42a7cd1db9dce929426301114fef4d45a9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU36475%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDT1XLvTPqk%2F1repB9ksgZNV5RVOEn%2BYHDSsqAMmX8EEQIgTzfO2Se%2FXq1Ea6lRJbVsS%2BLhjJmFKhR0jtPlEWrWn3Aq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKr4S3So11qTFqCMcCrcAy3TxNoLRI%2BzNNKCxZGUYc%2BW8G7gWtnYbvzmdGXXD4K5xQkIxhlng20GCfHR1%2FGs3YcR50Dx%2FQZ3WxhKy2%2BqZkY7CfEy4c1Hc3mRi%2BA3uZfIgyoXcxYFlHQTFU5r3k%2F7dcil%2FUlVlDkiWHYLWS%2FSZZq60ODMBMHYXw%2FH8ZsgtnShBFpr6tt%2FYLIde2xrYpkGBKFlaiQ5s8d%2BTy8ahPJmm9J2lX3mpm8Vrb7y65jpKfC3Z4FpzXU1ZaOSgyCp6tiyUybshkDErZ4%2BooK2r3bY8z13foPrNJuJw06h3up%2F%2Fl09P8fuN0PzqHqeEbLwRUGaEkkzSQ4a1%2FTVPhPXe1e4U%2BB6aod9WOcrQYrzEkLquJCAKljPhyEuomCVDFVKp1T1zyj%2F3lkdhlpjklycjLFJ0FNebfn%2BZbSoVLeijuPx1712sMRlWVPwaRbzY%2FtTHB1K0AHWTB77vP0U5uTauFiuWwgeWsdu1Ysi%2Fv63w2VON1KMyOIl0OOEI2hbowf%2F6Q2TCCkVGqjBK2wPUWEER%2FzyhFsjCNVEZ9q0rX%2FjccUfosKi3%2BfuMorcFdcA2%2FL%2FsE2dP35b8tyE858%2Ft4J0DzQ8qGX1x8msoMCcZUYod89lEiFNvh6HdnBx2vbGUNoTMKbaxsQGOqUBfqOYfG3xyagTlJsOqaDPkWqUJqsHgEij%2FMvoRbSluR2rDi0%2FJetxitzzuDJjow39muYMfNQvEC6Ipq%2BPSbg0knlvK4V0W3ZBg64noO4WZsPw8%2FqDhiOd27fQ7SlQ7s6BEZ1NbcZ6GvsqTUeg0p6DrAzNz3R%2BRKVRPtgTlcOUwoTNsNHt9bS%2BdzgeD5Gq6nApHihit55fNr5eQ5LC8PSR6N9QWVp%2F&X-Amz-Signature=eeac9cb6833e575792db93ff30efb89e08281ce9df9477855fa6f466bbbd00e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUFM6WET%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGjJPReTCONKFar18elgaZYl12pOv%2FG9Z152isyLmHcOAiEA9oQKojRPt%2BKAiOa1XxGaSryazjbX0uga63094swzQZMq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDK%2FZ1I2QZi1MAYBjwSrcA7Hxbh9bSPn%2FAOmbU3BKqR8V%2FNXvXhGJzAP6PKdqqybshJ3dkZqWEbZ%2B%2FJ2Cer9fojqL6lmRGaS98ePgQ6NvV5hRK5W%2FJDVtthGt50K1gbq8m0CXrwhOMFFGIiBpf7u0fcO%2FPT4DoIh6FOLGCsJq%2BVKinVLrhjPpcBTi%2FXe1x99y6p5sfMWqSHeOBEiwtIGBhCGQg3jF0TLx%2B3WFJ2p0NkOYCm5ioaz5vU7Bnt5uYY%2BnOHAu80OsK9DIsDGDs6QyXqjA2aq%2Bxp9R9NZK%2FnOCoc53WxNfQWNdhuFUna0aJfWZ0oIITuSNAgvcAmqZg1qicJd8fJ6rTl3APNg9%2B4Fm5TNoV0GXptKTsXwaeiZETD5OPGpT4x6oitX%2F%2FaN8MYqKEMbMAI9vxQalL4Hd%2BhK%2ByqZbesaY1yUXFwqziQTCa3CmisJNOuD38vBEMpFvSmAFN3qByJYqjaCf2aCZH0HjpHDMGJE9nuPYeID76oZwi2v8nFNvqQlnSwTyq%2BZQ%2B8T%2B%2Bj0%2FG1QfzI%2FprtUQJc3IF%2FRWqXVS0H%2BTaUB32jL0lin4Spp%2FKH9kZgZoT2dsSDb38K%2Bx0iJKWiLtAEd1uvRZshhY82z%2FnID1QEWHHb8rskRQzAxfFFkAuQCI%2F%2BLDMIjcxsQGOqUBqr3d3kax7%2BEk%2FZSbkwl2tNfgplaoqy0CsriJ15sze5viLHkdi0HeB4FC%2BdIJI2pokikcXJr5ZYStA0mtZ%2FAVbk6HYyac0CYbuS%2Fn%2BM3uqZg6BWFmt4Yx9bdut4%2FluYj8eCUXxC5pGp1sxFdHhzLy4oPQebo67ei1FYDx6l%2FNKwaxAOm8YhErxQhYJg%2FO1vOnKDjGKm2DcDac02i%2FXIydP4zAVnhB&X-Amz-Signature=e8a8667c1b01867f21aee78d1f5b56d0386180159c238edffbe05c818cae5072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HETSSAL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDb7b6i6zHP%2BcrXAmnTIptm6ve2IDp%2Ft4XpZkGmBa2H1AIhAN0P%2BamMM6g0WND1tMqHCH1Vqwg0ZMHzxrpltwGEMUvWKv8DCFgQABoMNjM3NDIzMTgzODA1IgyvGIeAhlyExvUF7GQq3AODcAL%2BYyzYOtIRHWTScZlSDzAxfSqT%2BySq%2Ft46JORFxEW0rDGYn3LYXJIhokTHxPN84L5huZHr8%2BK3sslDr6RFdALh2EgvrqGaZdDxCwS2EREWVhhrHqHGLNNPvAq0zP2mvd%2FOXBtQrwwr%2B3N4RriIkJVzeqndemaryqG8kqGim5CDBbK94QTTb8REwD1G2FomLXvHy6ihtnZmTjDTcEwAUUTOo6YK81%2FiC3v9tOORbuVAjCIBT%2Fh%2BtX2hHMLR0QKN5CxmGrarY0izJ1k0h70LGfYOzTVbpl5uK33REg6K1eYGvpMDM2w7Gxc4g3g4p7Gg4rNItclY%2BsDzZRzjIci0x%2BigCPcP3E19LsSLu54ygaArnXXU22NDP3fhlG3B9G5fLfvBN3s%2BlGvJpj%2FB2wXuxnZdf9xl4q3H69buXzGbPjaQ0sWZs1JupKm2pfRu4IN0mznPyG%2FE0OLedF7zu8yqoNxKENksPZuTbTZldV5d53ja6e22pC8t9zl9t1xRfbF2RBb8m5PK0lFgSxpO%2FlqoBYUSXVP7QsGwgBvfcuQZNjYXCYd9OsVu%2FXT5aAzhr5B2mv2U8VPuDA6u2YEQwSG%2B36%2B6JcYBEoOy5rVYkI63asbzM%2BMG4P3CfKlzeDD12sbEBjqkATa%2BLU2aISY8y01XTxKtrX2v6GoMbGYLObywZYnrMFQ8ofSDjFPTDSzEcT5JG9WPdWWJKvGzGTJzl6exraSAoKC8KCyR39xNDRDpNShkXJpPU3aSYa5I9S6bhBf6gmL0xlpnBrdflUz2DDixoHA8MwhJNZS7cx3essCeqI0Tsxlr2XPyE17W02UwpxwD7r49HiWGICOYeISKoRcf%2FTYy0g7bznOS&X-Amz-Signature=86f98124f43f09e930d355a66759b2ef893f779b6dae74b73570d5e658b1c39f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3EXSJ2S%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIFnWbsnsOgZJ%2FzTMnwxNB5Mmf4DXFiOjGDbHgowvyaPwAiBA0kadIYL3DPJKq%2BTOxPepyJfSLhuLPlM0bHSRjBZTFSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMnTxxIZK7r9pfhCZEKtwDYE1vkpPB%2F%2FNyWDNxIOvVgoV3DkGEbBo1XlqD7jjG02ZNBtVsffwnhNA21vXvoL21rtuDEg%2BFu9I%2FladS6TK6fseHm1FJn3sBGiBpeBTPPAsLakZhTk8yqdpbQC91SMwwecEmGwQoLLh3r32qP568MITKj4wt%2FNOzqg9IvllTFw5dCJzWmFWjiPpbtnIdsHbynCmdmX5%2Fn6ejveFtInj2C2UbXE%2BqsKXDCfS%2B5ZXFLnBG2eyxmlK4bQGwdheOMg%2B%2FM5uv6m7k2qgZ2dYyehZjHKIgeJxNbLua8U4vFiNPjZBVHwxcG%2Bqs5UrjUvMo5MriyS6D6hq48ncUTM8Pj38ByCdwAcYlYz0EEz84kAcyYCqWsg0LtPIQmR7nf5cpm20UWrXJ57h%2BYcc7nY1TZjUP5nY4WHgnqKxUnicfu9ukITMwUuwi8qh%2Fy5Yjn%2FC8ChbzabZFuV%2Fh4nimE%2FFDVLnGcxYpQZwU5st9JXMkr3QEbmr%2BCv1o4VCeUGSJNsbN3vNz9GuZq2%2FjLwoBdueHYxsRraluQuy2aoudofHNyC9LVNMNc6xpjr6r%2BrvLIHalaRn%2BnW2FgvzCuVJe%2FHlxgfh%2FQ5hWwpdqjoAgvs3nwejH6quUq025wd%2BHMXAEJPAw89rGxAY6pgHuBHyncI0h0PrTiU8xhH08sI1%2FVdXjsifOFu0EYfDerPKHbyonnK6x03EsJH4GU27VnVCuASjzoqnwBu26fHyIAjUGor%2By3LvcduW3iNydP5nGl3XQ2HMo6wEqC3kMjWuDOezxndEGYG5PVE4cB7%2FYWtXsojYScr%2Fy1d9jJ%2BAiamI1UwDmw2zFgqveMAqy%2Bq16q5TJI39i82ia0dDQii1HY3giCiKI&X-Amz-Signature=14ba2f8a32dce0ff3be292fb909089fd3b23cd426b2ebc5211546b0582e5f94e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVCYQURO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCCuguZGaapDw2OxymrVX0nglyPbOcRU37v0pe0IOCY8AIhAM%2FzKehPng9xRntOmsyrVJ3Wau82256jAvwS%2FxMpBt5tKv8DCFgQABoMNjM3NDIzMTgzODA1Igz6JQUHjEm6mXDs3foq3AMl0tz1XcGmfVR0D6423UhuiRwipltv2JS4uVtlG1nD4CreXM7Mx%2BwD98JwffDkNMTc1FWzc4TfPHjg%2F82pW8iVk%2FI8NY%2BsiHpLP3PgFaFc5SXti7ZIonJHI7CGYUp790RqN8QZyeueFxwovsmfAQM5kU8smf0coI%2FgD%2Fgy5mvNxyX6YT8Wwq0H%2FxopM1rg%2Bm3o0sznZwgBWTZjXGry0fTX3r8xYxJOLzgBTLZ7CRbOaGeee6Ht%2BkBVIGa4cO4xqYcGPefru7wUurYmpB5jV1jCG1V3KVmEM1lWDtF%2FEX855OQTdhImkgjA2kWFtcgzj%2Bu8XPVBobew%2Bia68pstebIo%2BwnPbXpjYkT%2B57IERrm60Fv8wO6YluMKlxmCf5KT6IUfLEB%2FXwZFuULoyyMt3W5I8yEgrd8ogVN%2FCKYzi5WVQw0QjM1ZuHQfh2RxtrQbdn3Z3iNFka4I5Zc7KPC6npzIZ8553zFb35OZ85Oa9x5MSuZAZmTjhaL9vc8a5gwYuoI14O2fnoDLu6qnxAXrKsV344r7lKef6qHS6Pj60Vb8J9f0aqp5Z%2B%2BsF9Ym%2FDRScW3%2Be4NfIgwgFnFBadpoBrxyqsz5x19aNynuYB7QpEHTTARQEqpTkX9VhDp9IjDz2cbEBjqkAczo2SI3J5snVA19d1PZrIkkzBzaQa%2Ft9kO01pkIGU3ZVqZ0iDr%2FZoxinBqcYx9n%2Fik6bAUT8Pn%2BB6KbTy7bYB9kAgHke2ctpcXaUxVkQsbfNjYCoHI9iXgi2wqMhSETtxxyN50lugwDSKq45nGBARt23Ky%2FsuUmBZGY5nywn3laeLmh50jrr8enWOe6JE0VbG7gNNNRejAmbcw8J%2Fw5FRWHO1ij&X-Amz-Signature=4b78b129998a14b4f1e580d9d479ab5429a7e529cd3d58875a96081e2fe2abf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H76QLVR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCJkOTFXc%2BBZT1Wx8WjbmPRofjscnJ2W0Sn%2BNX80906JQIhAI%2F6DbJdbSDttospLxsAFdv2UGXHMzX1Rqvm6N4HJP06Kv8DCFgQABoMNjM3NDIzMTgzODA1IgxEBwYfzcoPH0fh%2FCUq3AMmU3nSVK3V2GmUVvpgMKPu4iVgIGqGOYKMxF0lfsKrY2fPXbK%2FTrewAgg%2FNVc121%2BZSx9NjwffOdtx%2BLZx6CCPL6BsdXLUjUfCy8yDe8KySvPWoQN0DtwmqgwWpV6V%2B98yL8HROLsx0miyeJgBI7Xc7rv%2FsehagRzdO%2Fgt6ib0RyqY5BVaxXYlZYwbV3iRohzUrXLWOXeaOJIFQqT9JbFTU77WAgVplLn%2FAVI9yERNLaCUqUAi%2FtavJyQoyTjYYVzL7pkeSW%2B4JmNjGCmPcBh5Qn04OphyI5Kd5vhmF%2FLAoL2x45ockrrv8mMeRFSyN2ndS7EvkjGCb%2Fg37VY%2B68rW7yhyW7TBVc%2Ff33B3qHgWVcQ5%2FXITH3PnJfOnDd9nKk%2FTW2idUdDoRyQMlyWkJvGQtgyGUCpRuutOJnYYu%2Feq1AlJTicgmjGOBdFEbSdFaRKBc1bn%2FIaxcdj4ke750V5Q%2FvQUheTExWYwjC1D7w6tFRpmKvmz5I1qfn67zSuCMAVz686PnaJWMiECoWDKI9d7hZKxdV6FL0sT%2BK5Wxt2VehMwY964YA938p0CrISoedLUI9FjoAWplrpdHxfw77ipZYZkrtI%2FKjGkzESclr6N%2FXbsd4kmq%2FYTti2V6zDO2sbEBjqkAc5C1Y2IseOojJIzFlmRTFvnEq%2FnK%2FKoOu6HKwa24YQ2auk14DYp8pTB%2BJyarjCtla5LqN%2Bjacidqs6Y3CAmFJWlgZodTeamjr9e9omhXU6GVUXCTw%2BNr5hwedaoWpXC23K3GClr6Rz%2FTkqEoMzuMxmI%2BoP7gVm4KDeMnwD%2FOAc0oPaLABL1tuPV3VOJbaqK7W4gz8ywSfhNq%2BhUvTD9BCquQY94&X-Amz-Signature=a0dd91d0adc966c5eed6ae05e73d78b190dec9184647f51ddf14b8ec59f70486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU36475%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDT1XLvTPqk%2F1repB9ksgZNV5RVOEn%2BYHDSsqAMmX8EEQIgTzfO2Se%2FXq1Ea6lRJbVsS%2BLhjJmFKhR0jtPlEWrWn3Aq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKr4S3So11qTFqCMcCrcAy3TxNoLRI%2BzNNKCxZGUYc%2BW8G7gWtnYbvzmdGXXD4K5xQkIxhlng20GCfHR1%2FGs3YcR50Dx%2FQZ3WxhKy2%2BqZkY7CfEy4c1Hc3mRi%2BA3uZfIgyoXcxYFlHQTFU5r3k%2F7dcil%2FUlVlDkiWHYLWS%2FSZZq60ODMBMHYXw%2FH8ZsgtnShBFpr6tt%2FYLIde2xrYpkGBKFlaiQ5s8d%2BTy8ahPJmm9J2lX3mpm8Vrb7y65jpKfC3Z4FpzXU1ZaOSgyCp6tiyUybshkDErZ4%2BooK2r3bY8z13foPrNJuJw06h3up%2F%2Fl09P8fuN0PzqHqeEbLwRUGaEkkzSQ4a1%2FTVPhPXe1e4U%2BB6aod9WOcrQYrzEkLquJCAKljPhyEuomCVDFVKp1T1zyj%2F3lkdhlpjklycjLFJ0FNebfn%2BZbSoVLeijuPx1712sMRlWVPwaRbzY%2FtTHB1K0AHWTB77vP0U5uTauFiuWwgeWsdu1Ysi%2Fv63w2VON1KMyOIl0OOEI2hbowf%2F6Q2TCCkVGqjBK2wPUWEER%2FzyhFsjCNVEZ9q0rX%2FjccUfosKi3%2BfuMorcFdcA2%2FL%2FsE2dP35b8tyE858%2Ft4J0DzQ8qGX1x8msoMCcZUYod89lEiFNvh6HdnBx2vbGUNoTMKbaxsQGOqUBfqOYfG3xyagTlJsOqaDPkWqUJqsHgEij%2FMvoRbSluR2rDi0%2FJetxitzzuDJjow39muYMfNQvEC6Ipq%2BPSbg0knlvK4V0W3ZBg64noO4WZsPw8%2FqDhiOd27fQ7SlQ7s6BEZ1NbcZ6GvsqTUeg0p6DrAzNz3R%2BRKVRPtgTlcOUwoTNsNHt9bS%2BdzgeD5Gq6nApHihit55fNr5eQ5LC8PSR6N9QWVp%2F&X-Amz-Signature=b37694c0b140d3b36dbd44ee9b878e9a873d02abe43ce52beb00cb949935d64f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MU36475%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDT1XLvTPqk%2F1repB9ksgZNV5RVOEn%2BYHDSsqAMmX8EEQIgTzfO2Se%2FXq1Ea6lRJbVsS%2BLhjJmFKhR0jtPlEWrWn3Aq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKr4S3So11qTFqCMcCrcAy3TxNoLRI%2BzNNKCxZGUYc%2BW8G7gWtnYbvzmdGXXD4K5xQkIxhlng20GCfHR1%2FGs3YcR50Dx%2FQZ3WxhKy2%2BqZkY7CfEy4c1Hc3mRi%2BA3uZfIgyoXcxYFlHQTFU5r3k%2F7dcil%2FUlVlDkiWHYLWS%2FSZZq60ODMBMHYXw%2FH8ZsgtnShBFpr6tt%2FYLIde2xrYpkGBKFlaiQ5s8d%2BTy8ahPJmm9J2lX3mpm8Vrb7y65jpKfC3Z4FpzXU1ZaOSgyCp6tiyUybshkDErZ4%2BooK2r3bY8z13foPrNJuJw06h3up%2F%2Fl09P8fuN0PzqHqeEbLwRUGaEkkzSQ4a1%2FTVPhPXe1e4U%2BB6aod9WOcrQYrzEkLquJCAKljPhyEuomCVDFVKp1T1zyj%2F3lkdhlpjklycjLFJ0FNebfn%2BZbSoVLeijuPx1712sMRlWVPwaRbzY%2FtTHB1K0AHWTB77vP0U5uTauFiuWwgeWsdu1Ysi%2Fv63w2VON1KMyOIl0OOEI2hbowf%2F6Q2TCCkVGqjBK2wPUWEER%2FzyhFsjCNVEZ9q0rX%2FjccUfosKi3%2BfuMorcFdcA2%2FL%2FsE2dP35b8tyE858%2Ft4J0DzQ8qGX1x8msoMCcZUYod89lEiFNvh6HdnBx2vbGUNoTMKbaxsQGOqUBfqOYfG3xyagTlJsOqaDPkWqUJqsHgEij%2FMvoRbSluR2rDi0%2FJetxitzzuDJjow39muYMfNQvEC6Ipq%2BPSbg0knlvK4V0W3ZBg64noO4WZsPw8%2FqDhiOd27fQ7SlQ7s6BEZ1NbcZ6GvsqTUeg0p6DrAzNz3R%2BRKVRPtgTlcOUwoTNsNHt9bS%2BdzgeD5Gq6nApHihit55fNr5eQ5LC8PSR6N9QWVp%2F&X-Amz-Signature=b908022f5fe86484a16fa69379fc97469891bee9371f29b87adebdc6f7070498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J4YDTVO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIELQPOkxDF67Yc%2FW%2F%2BUjZdUj4SaMtql%2BuQbWjvo9c4uWAiBhPnhn7lnR0fzkK%2Be8MMBHYAugHWIpGkqx5CaWTDlJlCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMLq79TLSKzR%2Fsj7zzKtwD7cUsNrXOMVTWiq7wG%2FT7Lmrckug24lDxqYZJlQmEaGvY0riPky0Q0u6aThPgeqw3N%2FWARTMAneUShjbJMGaAXVTfXNZ2B0mu9K6VpzDOdOBU2AvajwvZdZ86X%2FsCLYYjirnoRUTWiN%2Bp4%2FZ9320iXWJUC6J9ShYS41VtSzV0g%2FgH9wDTeWOn5xUzuGhTz7W%2F1b%2FISXXpCW8%2BwT5ciyqbzd9BqsjGfmWTdcbv0Mvm2ZDidweUgecMTcFowUxZa4bQQmcRVDrTBFsQ9LNJU7oluqNGwlts1Wkoql%2B0r%2FY5FpqEBqRMvvBt518C3fMu5NLNfq05zyo9ipS3HOGGLtQaMmS13D9uR4hEe5EfYa7V7xjuKmEGYFjigPxgTBYxVFyYNFXnAa5czhiAx9BZVg7W2%2BryYPjzB09C9vtMmaissScWKsI7FsARWriaw5v%2BNsrSjT04V6%2FAtmVq3%2FnuA6FEWGBi%2Fn8%2FBpGueOAd2GgwmHAGAqi0i62FYil9X8tqleFP6zjtCnWiZLgxXRYof8BBmWSOyTJ60dtm8QfKxmue9BUknD28hd1b9DJbfRSbs6JKLIuioc4mMC5YOvPV4jwuDdRRsp6ESjhRLR%2BWK3w0MPLbe1K1Kqe7FzdPbgMwmdrGxAY6pgFmtEsN3ywe0ENDO%2Ff6I9JQ7%2B6p%2Brj9Pymwp4Db7pa%2B5EMm9umaMAC2F99vad%2BZFl5dZNRm3%2FRZ0N1aqzl%2By7H%2BVMjgX6WAnOKmjqUe8JRRjQnRCp%2BKQiQHzyk3FJw96lmzMj7Vi8sxRTQ%2BNFawaWw1UAfwVVFBIcyXs44SttpussjoBaim0ISASpe%2FMNSB4ZtP%2FEFAARNd5quENf2XFA9zcLrJE3OB&X-Amz-Signature=c7c37e565537435f527f5f7e226e36490a6763ef7b70b07e966760b1c4af33e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J4YDTVO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIELQPOkxDF67Yc%2FW%2F%2BUjZdUj4SaMtql%2BuQbWjvo9c4uWAiBhPnhn7lnR0fzkK%2Be8MMBHYAugHWIpGkqx5CaWTDlJlCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMLq79TLSKzR%2Fsj7zzKtwD7cUsNrXOMVTWiq7wG%2FT7Lmrckug24lDxqYZJlQmEaGvY0riPky0Q0u6aThPgeqw3N%2FWARTMAneUShjbJMGaAXVTfXNZ2B0mu9K6VpzDOdOBU2AvajwvZdZ86X%2FsCLYYjirnoRUTWiN%2Bp4%2FZ9320iXWJUC6J9ShYS41VtSzV0g%2FgH9wDTeWOn5xUzuGhTz7W%2F1b%2FISXXpCW8%2BwT5ciyqbzd9BqsjGfmWTdcbv0Mvm2ZDidweUgecMTcFowUxZa4bQQmcRVDrTBFsQ9LNJU7oluqNGwlts1Wkoql%2B0r%2FY5FpqEBqRMvvBt518C3fMu5NLNfq05zyo9ipS3HOGGLtQaMmS13D9uR4hEe5EfYa7V7xjuKmEGYFjigPxgTBYxVFyYNFXnAa5czhiAx9BZVg7W2%2BryYPjzB09C9vtMmaissScWKsI7FsARWriaw5v%2BNsrSjT04V6%2FAtmVq3%2FnuA6FEWGBi%2Fn8%2FBpGueOAd2GgwmHAGAqi0i62FYil9X8tqleFP6zjtCnWiZLgxXRYof8BBmWSOyTJ60dtm8QfKxmue9BUknD28hd1b9DJbfRSbs6JKLIuioc4mMC5YOvPV4jwuDdRRsp6ESjhRLR%2BWK3w0MPLbe1K1Kqe7FzdPbgMwmdrGxAY6pgFmtEsN3ywe0ENDO%2Ff6I9JQ7%2B6p%2Brj9Pymwp4Db7pa%2B5EMm9umaMAC2F99vad%2BZFl5dZNRm3%2FRZ0N1aqzl%2By7H%2BVMjgX6WAnOKmjqUe8JRRjQnRCp%2BKQiQHzyk3FJw96lmzMj7Vi8sxRTQ%2BNFawaWw1UAfwVVFBIcyXs44SttpussjoBaim0ISASpe%2FMNSB4ZtP%2FEFAARNd5quENf2XFA9zcLrJE3OB&X-Amz-Signature=a639bc9086c6ed04558a527fa90521f2d67f4ce3d9e31a4a303cf4982693f06f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J4YDTVO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIELQPOkxDF67Yc%2FW%2F%2BUjZdUj4SaMtql%2BuQbWjvo9c4uWAiBhPnhn7lnR0fzkK%2Be8MMBHYAugHWIpGkqx5CaWTDlJlCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMLq79TLSKzR%2Fsj7zzKtwD7cUsNrXOMVTWiq7wG%2FT7Lmrckug24lDxqYZJlQmEaGvY0riPky0Q0u6aThPgeqw3N%2FWARTMAneUShjbJMGaAXVTfXNZ2B0mu9K6VpzDOdOBU2AvajwvZdZ86X%2FsCLYYjirnoRUTWiN%2Bp4%2FZ9320iXWJUC6J9ShYS41VtSzV0g%2FgH9wDTeWOn5xUzuGhTz7W%2F1b%2FISXXpCW8%2BwT5ciyqbzd9BqsjGfmWTdcbv0Mvm2ZDidweUgecMTcFowUxZa4bQQmcRVDrTBFsQ9LNJU7oluqNGwlts1Wkoql%2B0r%2FY5FpqEBqRMvvBt518C3fMu5NLNfq05zyo9ipS3HOGGLtQaMmS13D9uR4hEe5EfYa7V7xjuKmEGYFjigPxgTBYxVFyYNFXnAa5czhiAx9BZVg7W2%2BryYPjzB09C9vtMmaissScWKsI7FsARWriaw5v%2BNsrSjT04V6%2FAtmVq3%2FnuA6FEWGBi%2Fn8%2FBpGueOAd2GgwmHAGAqi0i62FYil9X8tqleFP6zjtCnWiZLgxXRYof8BBmWSOyTJ60dtm8QfKxmue9BUknD28hd1b9DJbfRSbs6JKLIuioc4mMC5YOvPV4jwuDdRRsp6ESjhRLR%2BWK3w0MPLbe1K1Kqe7FzdPbgMwmdrGxAY6pgFmtEsN3ywe0ENDO%2Ff6I9JQ7%2B6p%2Brj9Pymwp4Db7pa%2B5EMm9umaMAC2F99vad%2BZFl5dZNRm3%2FRZ0N1aqzl%2By7H%2BVMjgX6WAnOKmjqUe8JRRjQnRCp%2BKQiQHzyk3FJw96lmzMj7Vi8sxRTQ%2BNFawaWw1UAfwVVFBIcyXs44SttpussjoBaim0ISASpe%2FMNSB4ZtP%2FEFAARNd5quENf2XFA9zcLrJE3OB&X-Amz-Signature=bb8ddab56bedde51f6f17a9b65ace7339be8ae698719061bf68a9ce7a3373bac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J4YDTVO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIELQPOkxDF67Yc%2FW%2F%2BUjZdUj4SaMtql%2BuQbWjvo9c4uWAiBhPnhn7lnR0fzkK%2Be8MMBHYAugHWIpGkqx5CaWTDlJlCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMLq79TLSKzR%2Fsj7zzKtwD7cUsNrXOMVTWiq7wG%2FT7Lmrckug24lDxqYZJlQmEaGvY0riPky0Q0u6aThPgeqw3N%2FWARTMAneUShjbJMGaAXVTfXNZ2B0mu9K6VpzDOdOBU2AvajwvZdZ86X%2FsCLYYjirnoRUTWiN%2Bp4%2FZ9320iXWJUC6J9ShYS41VtSzV0g%2FgH9wDTeWOn5xUzuGhTz7W%2F1b%2FISXXpCW8%2BwT5ciyqbzd9BqsjGfmWTdcbv0Mvm2ZDidweUgecMTcFowUxZa4bQQmcRVDrTBFsQ9LNJU7oluqNGwlts1Wkoql%2B0r%2FY5FpqEBqRMvvBt518C3fMu5NLNfq05zyo9ipS3HOGGLtQaMmS13D9uR4hEe5EfYa7V7xjuKmEGYFjigPxgTBYxVFyYNFXnAa5czhiAx9BZVg7W2%2BryYPjzB09C9vtMmaissScWKsI7FsARWriaw5v%2BNsrSjT04V6%2FAtmVq3%2FnuA6FEWGBi%2Fn8%2FBpGueOAd2GgwmHAGAqi0i62FYil9X8tqleFP6zjtCnWiZLgxXRYof8BBmWSOyTJ60dtm8QfKxmue9BUknD28hd1b9DJbfRSbs6JKLIuioc4mMC5YOvPV4jwuDdRRsp6ESjhRLR%2BWK3w0MPLbe1K1Kqe7FzdPbgMwmdrGxAY6pgFmtEsN3ywe0ENDO%2Ff6I9JQ7%2B6p%2Brj9Pymwp4Db7pa%2B5EMm9umaMAC2F99vad%2BZFl5dZNRm3%2FRZ0N1aqzl%2By7H%2BVMjgX6WAnOKmjqUe8JRRjQnRCp%2BKQiQHzyk3FJw96lmzMj7Vi8sxRTQ%2BNFawaWw1UAfwVVFBIcyXs44SttpussjoBaim0ISASpe%2FMNSB4ZtP%2FEFAARNd5quENf2XFA9zcLrJE3OB&X-Amz-Signature=7efc995f6ef0cffbb12a445a079e6ef103ec64b7e15b6fec159ffd8789dd6513&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J4YDTVO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIELQPOkxDF67Yc%2FW%2F%2BUjZdUj4SaMtql%2BuQbWjvo9c4uWAiBhPnhn7lnR0fzkK%2Be8MMBHYAugHWIpGkqx5CaWTDlJlCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMLq79TLSKzR%2Fsj7zzKtwD7cUsNrXOMVTWiq7wG%2FT7Lmrckug24lDxqYZJlQmEaGvY0riPky0Q0u6aThPgeqw3N%2FWARTMAneUShjbJMGaAXVTfXNZ2B0mu9K6VpzDOdOBU2AvajwvZdZ86X%2FsCLYYjirnoRUTWiN%2Bp4%2FZ9320iXWJUC6J9ShYS41VtSzV0g%2FgH9wDTeWOn5xUzuGhTz7W%2F1b%2FISXXpCW8%2BwT5ciyqbzd9BqsjGfmWTdcbv0Mvm2ZDidweUgecMTcFowUxZa4bQQmcRVDrTBFsQ9LNJU7oluqNGwlts1Wkoql%2B0r%2FY5FpqEBqRMvvBt518C3fMu5NLNfq05zyo9ipS3HOGGLtQaMmS13D9uR4hEe5EfYa7V7xjuKmEGYFjigPxgTBYxVFyYNFXnAa5czhiAx9BZVg7W2%2BryYPjzB09C9vtMmaissScWKsI7FsARWriaw5v%2BNsrSjT04V6%2FAtmVq3%2FnuA6FEWGBi%2Fn8%2FBpGueOAd2GgwmHAGAqi0i62FYil9X8tqleFP6zjtCnWiZLgxXRYof8BBmWSOyTJ60dtm8QfKxmue9BUknD28hd1b9DJbfRSbs6JKLIuioc4mMC5YOvPV4jwuDdRRsp6ESjhRLR%2BWK3w0MPLbe1K1Kqe7FzdPbgMwmdrGxAY6pgFmtEsN3ywe0ENDO%2Ff6I9JQ7%2B6p%2Brj9Pymwp4Db7pa%2B5EMm9umaMAC2F99vad%2BZFl5dZNRm3%2FRZ0N1aqzl%2By7H%2BVMjgX6WAnOKmjqUe8JRRjQnRCp%2BKQiQHzyk3FJw96lmzMj7Vi8sxRTQ%2BNFawaWw1UAfwVVFBIcyXs44SttpussjoBaim0ISASpe%2FMNSB4ZtP%2FEFAARNd5quENf2XFA9zcLrJE3OB&X-Amz-Signature=6759fda6b8c6d1545804cd36458f4a1eaf60b7d27772f98c07f5bbf643915368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J4YDTVO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIELQPOkxDF67Yc%2FW%2F%2BUjZdUj4SaMtql%2BuQbWjvo9c4uWAiBhPnhn7lnR0fzkK%2Be8MMBHYAugHWIpGkqx5CaWTDlJlCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMLq79TLSKzR%2Fsj7zzKtwD7cUsNrXOMVTWiq7wG%2FT7Lmrckug24lDxqYZJlQmEaGvY0riPky0Q0u6aThPgeqw3N%2FWARTMAneUShjbJMGaAXVTfXNZ2B0mu9K6VpzDOdOBU2AvajwvZdZ86X%2FsCLYYjirnoRUTWiN%2Bp4%2FZ9320iXWJUC6J9ShYS41VtSzV0g%2FgH9wDTeWOn5xUzuGhTz7W%2F1b%2FISXXpCW8%2BwT5ciyqbzd9BqsjGfmWTdcbv0Mvm2ZDidweUgecMTcFowUxZa4bQQmcRVDrTBFsQ9LNJU7oluqNGwlts1Wkoql%2B0r%2FY5FpqEBqRMvvBt518C3fMu5NLNfq05zyo9ipS3HOGGLtQaMmS13D9uR4hEe5EfYa7V7xjuKmEGYFjigPxgTBYxVFyYNFXnAa5czhiAx9BZVg7W2%2BryYPjzB09C9vtMmaissScWKsI7FsARWriaw5v%2BNsrSjT04V6%2FAtmVq3%2FnuA6FEWGBi%2Fn8%2FBpGueOAd2GgwmHAGAqi0i62FYil9X8tqleFP6zjtCnWiZLgxXRYof8BBmWSOyTJ60dtm8QfKxmue9BUknD28hd1b9DJbfRSbs6JKLIuioc4mMC5YOvPV4jwuDdRRsp6ESjhRLR%2BWK3w0MPLbe1K1Kqe7FzdPbgMwmdrGxAY6pgFmtEsN3ywe0ENDO%2Ff6I9JQ7%2B6p%2Brj9Pymwp4Db7pa%2B5EMm9umaMAC2F99vad%2BZFl5dZNRm3%2FRZ0N1aqzl%2By7H%2BVMjgX6WAnOKmjqUe8JRRjQnRCp%2BKQiQHzyk3FJw96lmzMj7Vi8sxRTQ%2BNFawaWw1UAfwVVFBIcyXs44SttpussjoBaim0ISASpe%2FMNSB4ZtP%2FEFAARNd5quENf2XFA9zcLrJE3OB&X-Amz-Signature=5eeb5cfbb8edf9076f48cca641329b47cb3d85c0dd6a440732d475d2a770ea93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J4YDTVO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIELQPOkxDF67Yc%2FW%2F%2BUjZdUj4SaMtql%2BuQbWjvo9c4uWAiBhPnhn7lnR0fzkK%2Be8MMBHYAugHWIpGkqx5CaWTDlJlCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMLq79TLSKzR%2Fsj7zzKtwD7cUsNrXOMVTWiq7wG%2FT7Lmrckug24lDxqYZJlQmEaGvY0riPky0Q0u6aThPgeqw3N%2FWARTMAneUShjbJMGaAXVTfXNZ2B0mu9K6VpzDOdOBU2AvajwvZdZ86X%2FsCLYYjirnoRUTWiN%2Bp4%2FZ9320iXWJUC6J9ShYS41VtSzV0g%2FgH9wDTeWOn5xUzuGhTz7W%2F1b%2FISXXpCW8%2BwT5ciyqbzd9BqsjGfmWTdcbv0Mvm2ZDidweUgecMTcFowUxZa4bQQmcRVDrTBFsQ9LNJU7oluqNGwlts1Wkoql%2B0r%2FY5FpqEBqRMvvBt518C3fMu5NLNfq05zyo9ipS3HOGGLtQaMmS13D9uR4hEe5EfYa7V7xjuKmEGYFjigPxgTBYxVFyYNFXnAa5czhiAx9BZVg7W2%2BryYPjzB09C9vtMmaissScWKsI7FsARWriaw5v%2BNsrSjT04V6%2FAtmVq3%2FnuA6FEWGBi%2Fn8%2FBpGueOAd2GgwmHAGAqi0i62FYil9X8tqleFP6zjtCnWiZLgxXRYof8BBmWSOyTJ60dtm8QfKxmue9BUknD28hd1b9DJbfRSbs6JKLIuioc4mMC5YOvPV4jwuDdRRsp6ESjhRLR%2BWK3w0MPLbe1K1Kqe7FzdPbgMwmdrGxAY6pgFmtEsN3ywe0ENDO%2Ff6I9JQ7%2B6p%2Brj9Pymwp4Db7pa%2B5EMm9umaMAC2F99vad%2BZFl5dZNRm3%2FRZ0N1aqzl%2By7H%2BVMjgX6WAnOKmjqUe8JRRjQnRCp%2BKQiQHzyk3FJw96lmzMj7Vi8sxRTQ%2BNFawaWw1UAfwVVFBIcyXs44SttpussjoBaim0ISASpe%2FMNSB4ZtP%2FEFAARNd5quENf2XFA9zcLrJE3OB&X-Amz-Signature=bb8ddab56bedde51f6f17a9b65ace7339be8ae698719061bf68a9ce7a3373bac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J4YDTVO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIELQPOkxDF67Yc%2FW%2F%2BUjZdUj4SaMtql%2BuQbWjvo9c4uWAiBhPnhn7lnR0fzkK%2Be8MMBHYAugHWIpGkqx5CaWTDlJlCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMLq79TLSKzR%2Fsj7zzKtwD7cUsNrXOMVTWiq7wG%2FT7Lmrckug24lDxqYZJlQmEaGvY0riPky0Q0u6aThPgeqw3N%2FWARTMAneUShjbJMGaAXVTfXNZ2B0mu9K6VpzDOdOBU2AvajwvZdZ86X%2FsCLYYjirnoRUTWiN%2Bp4%2FZ9320iXWJUC6J9ShYS41VtSzV0g%2FgH9wDTeWOn5xUzuGhTz7W%2F1b%2FISXXpCW8%2BwT5ciyqbzd9BqsjGfmWTdcbv0Mvm2ZDidweUgecMTcFowUxZa4bQQmcRVDrTBFsQ9LNJU7oluqNGwlts1Wkoql%2B0r%2FY5FpqEBqRMvvBt518C3fMu5NLNfq05zyo9ipS3HOGGLtQaMmS13D9uR4hEe5EfYa7V7xjuKmEGYFjigPxgTBYxVFyYNFXnAa5czhiAx9BZVg7W2%2BryYPjzB09C9vtMmaissScWKsI7FsARWriaw5v%2BNsrSjT04V6%2FAtmVq3%2FnuA6FEWGBi%2Fn8%2FBpGueOAd2GgwmHAGAqi0i62FYil9X8tqleFP6zjtCnWiZLgxXRYof8BBmWSOyTJ60dtm8QfKxmue9BUknD28hd1b9DJbfRSbs6JKLIuioc4mMC5YOvPV4jwuDdRRsp6ESjhRLR%2BWK3w0MPLbe1K1Kqe7FzdPbgMwmdrGxAY6pgFmtEsN3ywe0ENDO%2Ff6I9JQ7%2B6p%2Brj9Pymwp4Db7pa%2B5EMm9umaMAC2F99vad%2BZFl5dZNRm3%2FRZ0N1aqzl%2By7H%2BVMjgX6WAnOKmjqUe8JRRjQnRCp%2BKQiQHzyk3FJw96lmzMj7Vi8sxRTQ%2BNFawaWw1UAfwVVFBIcyXs44SttpussjoBaim0ISASpe%2FMNSB4ZtP%2FEFAARNd5quENf2XFA9zcLrJE3OB&X-Amz-Signature=eb629b8e1bba9c9dc474042b0e3206a42fb69f8da4b9f5154e38a188df09eba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J4YDTVO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIELQPOkxDF67Yc%2FW%2F%2BUjZdUj4SaMtql%2BuQbWjvo9c4uWAiBhPnhn7lnR0fzkK%2Be8MMBHYAugHWIpGkqx5CaWTDlJlCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMLq79TLSKzR%2Fsj7zzKtwD7cUsNrXOMVTWiq7wG%2FT7Lmrckug24lDxqYZJlQmEaGvY0riPky0Q0u6aThPgeqw3N%2FWARTMAneUShjbJMGaAXVTfXNZ2B0mu9K6VpzDOdOBU2AvajwvZdZ86X%2FsCLYYjirnoRUTWiN%2Bp4%2FZ9320iXWJUC6J9ShYS41VtSzV0g%2FgH9wDTeWOn5xUzuGhTz7W%2F1b%2FISXXpCW8%2BwT5ciyqbzd9BqsjGfmWTdcbv0Mvm2ZDidweUgecMTcFowUxZa4bQQmcRVDrTBFsQ9LNJU7oluqNGwlts1Wkoql%2B0r%2FY5FpqEBqRMvvBt518C3fMu5NLNfq05zyo9ipS3HOGGLtQaMmS13D9uR4hEe5EfYa7V7xjuKmEGYFjigPxgTBYxVFyYNFXnAa5czhiAx9BZVg7W2%2BryYPjzB09C9vtMmaissScWKsI7FsARWriaw5v%2BNsrSjT04V6%2FAtmVq3%2FnuA6FEWGBi%2Fn8%2FBpGueOAd2GgwmHAGAqi0i62FYil9X8tqleFP6zjtCnWiZLgxXRYof8BBmWSOyTJ60dtm8QfKxmue9BUknD28hd1b9DJbfRSbs6JKLIuioc4mMC5YOvPV4jwuDdRRsp6ESjhRLR%2BWK3w0MPLbe1K1Kqe7FzdPbgMwmdrGxAY6pgFmtEsN3ywe0ENDO%2Ff6I9JQ7%2B6p%2Brj9Pymwp4Db7pa%2B5EMm9umaMAC2F99vad%2BZFl5dZNRm3%2FRZ0N1aqzl%2By7H%2BVMjgX6WAnOKmjqUe8JRRjQnRCp%2BKQiQHzyk3FJw96lmzMj7Vi8sxRTQ%2BNFawaWw1UAfwVVFBIcyXs44SttpussjoBaim0ISASpe%2FMNSB4ZtP%2FEFAARNd5quENf2XFA9zcLrJE3OB&X-Amz-Signature=b20c6e5e1dc69d89864c426ad35b463d96a3e258aeb6a41fafdeda12cbe61ee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J4YDTVO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T071654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIELQPOkxDF67Yc%2FW%2F%2BUjZdUj4SaMtql%2BuQbWjvo9c4uWAiBhPnhn7lnR0fzkK%2Be8MMBHYAugHWIpGkqx5CaWTDlJlCr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMLq79TLSKzR%2Fsj7zzKtwD7cUsNrXOMVTWiq7wG%2FT7Lmrckug24lDxqYZJlQmEaGvY0riPky0Q0u6aThPgeqw3N%2FWARTMAneUShjbJMGaAXVTfXNZ2B0mu9K6VpzDOdOBU2AvajwvZdZ86X%2FsCLYYjirnoRUTWiN%2Bp4%2FZ9320iXWJUC6J9ShYS41VtSzV0g%2FgH9wDTeWOn5xUzuGhTz7W%2F1b%2FISXXpCW8%2BwT5ciyqbzd9BqsjGfmWTdcbv0Mvm2ZDidweUgecMTcFowUxZa4bQQmcRVDrTBFsQ9LNJU7oluqNGwlts1Wkoql%2B0r%2FY5FpqEBqRMvvBt518C3fMu5NLNfq05zyo9ipS3HOGGLtQaMmS13D9uR4hEe5EfYa7V7xjuKmEGYFjigPxgTBYxVFyYNFXnAa5czhiAx9BZVg7W2%2BryYPjzB09C9vtMmaissScWKsI7FsARWriaw5v%2BNsrSjT04V6%2FAtmVq3%2FnuA6FEWGBi%2Fn8%2FBpGueOAd2GgwmHAGAqi0i62FYil9X8tqleFP6zjtCnWiZLgxXRYof8BBmWSOyTJ60dtm8QfKxmue9BUknD28hd1b9DJbfRSbs6JKLIuioc4mMC5YOvPV4jwuDdRRsp6ESjhRLR%2BWK3w0MPLbe1K1Kqe7FzdPbgMwmdrGxAY6pgFmtEsN3ywe0ENDO%2Ff6I9JQ7%2B6p%2Brj9Pymwp4Db7pa%2B5EMm9umaMAC2F99vad%2BZFl5dZNRm3%2FRZ0N1aqzl%2By7H%2BVMjgX6WAnOKmjqUe8JRRjQnRCp%2BKQiQHzyk3FJw96lmzMj7Vi8sxRTQ%2BNFawaWw1UAfwVVFBIcyXs44SttpussjoBaim0ISASpe%2FMNSB4ZtP%2FEFAARNd5quENf2XFA9zcLrJE3OB&X-Amz-Signature=a534a0f5346103cc9fb7037d1db690a1d5160c72f77c2533bfa45dd8601a3694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
