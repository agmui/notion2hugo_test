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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQATZLD6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDFUQViSAoXJhKuZcRKhIFa3ugeTHyhejMLUrwpFsXNaQIgATjNEiQ%2BAVDuG0JB4UB8S7wdUwFmOfaV2JHwNlSXzMwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB%2BrJEW7GMTCs8Pu2CrcAz37%2B5T7VW5TVZ1XGPYiv4BhQSMKRAOlMQgEacZtKfklTOIaDfauwKqUzgig0wYW5t%2BWtUY2soRfSbW8okCxWNgNbMqszMBA7blxNbtqC6mrVxDCUYZ54NqKFH1C7Kh%2BbWAv3JwUFPG3c9JxL%2BKj7PQVF5LBBU%2B95Z1XM3hD0PaZs4CnmfCZTaOM2D3CCVCnuuvfaa7mT9kTM5Oq8hHnq%2BshISNi%2BCAYXyOIEHpjZOJIa5RdqXxlCxe0H9cdaXHSefiMrEZCAGxwxn66JXDCn%2FyF2U8MOy5hGorOEX6k8fBcKitWHGo%2BO%2F6SgJLobV0sgrGEaPFXY3ImQkdLP7K8MTXEXmXspMeDGBvM7s5x9N7JlWmSkSt5bUhwUNaE%2BhA9WgYELILL6lzIBobHN%2BCHM6BVqoyuElz4Gf%2Fk10git3JdV4PKyfkbTlOvQc6kMnGK3C%2FmBChkMCb9D6w19azBWO4ht5aUQR0ORCPixkrWoBBntzz2zCisnBQvxOYFQ1TZIYj6ReGtNrWVy8bt%2FVnPmsf1OoIQDnIMl9d5EcWvGuMSn8NK5EVf1aWesY6zhPpnEFke2xZ8lj256sYPK%2FsmCDU6gMK8A3RxZJS4SeEhHXBZOtIQZIUf0g%2FBFpa0MN%2F3gMUGOqUB5JqJrNweMhUbWZBvUi8pJcXG7oZHDVgwof0fBDddhkQ9%2B3Bu4c3AUufii5873TT9JeVzFEg8DOCZtGhh8nVeQIiIKxg3QXqUDINBOn3OgNvxsb1Ia%2BSLfXO4waO3%2FWt7TEa4%2BVDEwMlatKMCMDi%2FhKXi41eoIlpbV8tx7T%2BRWoH0RYom99iyyz%2BXC3quw%2BlNl7TAkeT5gBB4zmsHlD8pvmO9bNn9&X-Amz-Signature=f54a31ef6c11cbeb83be6a8d99e348f243f090ffa0cf1497e4352a2627f5aad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQATZLD6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDFUQViSAoXJhKuZcRKhIFa3ugeTHyhejMLUrwpFsXNaQIgATjNEiQ%2BAVDuG0JB4UB8S7wdUwFmOfaV2JHwNlSXzMwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB%2BrJEW7GMTCs8Pu2CrcAz37%2B5T7VW5TVZ1XGPYiv4BhQSMKRAOlMQgEacZtKfklTOIaDfauwKqUzgig0wYW5t%2BWtUY2soRfSbW8okCxWNgNbMqszMBA7blxNbtqC6mrVxDCUYZ54NqKFH1C7Kh%2BbWAv3JwUFPG3c9JxL%2BKj7PQVF5LBBU%2B95Z1XM3hD0PaZs4CnmfCZTaOM2D3CCVCnuuvfaa7mT9kTM5Oq8hHnq%2BshISNi%2BCAYXyOIEHpjZOJIa5RdqXxlCxe0H9cdaXHSefiMrEZCAGxwxn66JXDCn%2FyF2U8MOy5hGorOEX6k8fBcKitWHGo%2BO%2F6SgJLobV0sgrGEaPFXY3ImQkdLP7K8MTXEXmXspMeDGBvM7s5x9N7JlWmSkSt5bUhwUNaE%2BhA9WgYELILL6lzIBobHN%2BCHM6BVqoyuElz4Gf%2Fk10git3JdV4PKyfkbTlOvQc6kMnGK3C%2FmBChkMCb9D6w19azBWO4ht5aUQR0ORCPixkrWoBBntzz2zCisnBQvxOYFQ1TZIYj6ReGtNrWVy8bt%2FVnPmsf1OoIQDnIMl9d5EcWvGuMSn8NK5EVf1aWesY6zhPpnEFke2xZ8lj256sYPK%2FsmCDU6gMK8A3RxZJS4SeEhHXBZOtIQZIUf0g%2FBFpa0MN%2F3gMUGOqUB5JqJrNweMhUbWZBvUi8pJcXG7oZHDVgwof0fBDddhkQ9%2B3Bu4c3AUufii5873TT9JeVzFEg8DOCZtGhh8nVeQIiIKxg3QXqUDINBOn3OgNvxsb1Ia%2BSLfXO4waO3%2FWt7TEa4%2BVDEwMlatKMCMDi%2FhKXi41eoIlpbV8tx7T%2BRWoH0RYom99iyyz%2BXC3quw%2BlNl7TAkeT5gBB4zmsHlD8pvmO9bNn9&X-Amz-Signature=f6af673575b449067db8b9dcb1b11283feacd91156ebc6aac8213673b4fb28c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQATZLD6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDFUQViSAoXJhKuZcRKhIFa3ugeTHyhejMLUrwpFsXNaQIgATjNEiQ%2BAVDuG0JB4UB8S7wdUwFmOfaV2JHwNlSXzMwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB%2BrJEW7GMTCs8Pu2CrcAz37%2B5T7VW5TVZ1XGPYiv4BhQSMKRAOlMQgEacZtKfklTOIaDfauwKqUzgig0wYW5t%2BWtUY2soRfSbW8okCxWNgNbMqszMBA7blxNbtqC6mrVxDCUYZ54NqKFH1C7Kh%2BbWAv3JwUFPG3c9JxL%2BKj7PQVF5LBBU%2B95Z1XM3hD0PaZs4CnmfCZTaOM2D3CCVCnuuvfaa7mT9kTM5Oq8hHnq%2BshISNi%2BCAYXyOIEHpjZOJIa5RdqXxlCxe0H9cdaXHSefiMrEZCAGxwxn66JXDCn%2FyF2U8MOy5hGorOEX6k8fBcKitWHGo%2BO%2F6SgJLobV0sgrGEaPFXY3ImQkdLP7K8MTXEXmXspMeDGBvM7s5x9N7JlWmSkSt5bUhwUNaE%2BhA9WgYELILL6lzIBobHN%2BCHM6BVqoyuElz4Gf%2Fk10git3JdV4PKyfkbTlOvQc6kMnGK3C%2FmBChkMCb9D6w19azBWO4ht5aUQR0ORCPixkrWoBBntzz2zCisnBQvxOYFQ1TZIYj6ReGtNrWVy8bt%2FVnPmsf1OoIQDnIMl9d5EcWvGuMSn8NK5EVf1aWesY6zhPpnEFke2xZ8lj256sYPK%2FsmCDU6gMK8A3RxZJS4SeEhHXBZOtIQZIUf0g%2FBFpa0MN%2F3gMUGOqUB5JqJrNweMhUbWZBvUi8pJcXG7oZHDVgwof0fBDddhkQ9%2B3Bu4c3AUufii5873TT9JeVzFEg8DOCZtGhh8nVeQIiIKxg3QXqUDINBOn3OgNvxsb1Ia%2BSLfXO4waO3%2FWt7TEa4%2BVDEwMlatKMCMDi%2FhKXi41eoIlpbV8tx7T%2BRWoH0RYom99iyyz%2BXC3quw%2BlNl7TAkeT5gBB4zmsHlD8pvmO9bNn9&X-Amz-Signature=bd6f4e06b1215c8d6c67defcfe85bf3d6f58b634764f245eb79686e7ce86679c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQATZLD6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDFUQViSAoXJhKuZcRKhIFa3ugeTHyhejMLUrwpFsXNaQIgATjNEiQ%2BAVDuG0JB4UB8S7wdUwFmOfaV2JHwNlSXzMwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB%2BrJEW7GMTCs8Pu2CrcAz37%2B5T7VW5TVZ1XGPYiv4BhQSMKRAOlMQgEacZtKfklTOIaDfauwKqUzgig0wYW5t%2BWtUY2soRfSbW8okCxWNgNbMqszMBA7blxNbtqC6mrVxDCUYZ54NqKFH1C7Kh%2BbWAv3JwUFPG3c9JxL%2BKj7PQVF5LBBU%2B95Z1XM3hD0PaZs4CnmfCZTaOM2D3CCVCnuuvfaa7mT9kTM5Oq8hHnq%2BshISNi%2BCAYXyOIEHpjZOJIa5RdqXxlCxe0H9cdaXHSefiMrEZCAGxwxn66JXDCn%2FyF2U8MOy5hGorOEX6k8fBcKitWHGo%2BO%2F6SgJLobV0sgrGEaPFXY3ImQkdLP7K8MTXEXmXspMeDGBvM7s5x9N7JlWmSkSt5bUhwUNaE%2BhA9WgYELILL6lzIBobHN%2BCHM6BVqoyuElz4Gf%2Fk10git3JdV4PKyfkbTlOvQc6kMnGK3C%2FmBChkMCb9D6w19azBWO4ht5aUQR0ORCPixkrWoBBntzz2zCisnBQvxOYFQ1TZIYj6ReGtNrWVy8bt%2FVnPmsf1OoIQDnIMl9d5EcWvGuMSn8NK5EVf1aWesY6zhPpnEFke2xZ8lj256sYPK%2FsmCDU6gMK8A3RxZJS4SeEhHXBZOtIQZIUf0g%2FBFpa0MN%2F3gMUGOqUB5JqJrNweMhUbWZBvUi8pJcXG7oZHDVgwof0fBDddhkQ9%2B3Bu4c3AUufii5873TT9JeVzFEg8DOCZtGhh8nVeQIiIKxg3QXqUDINBOn3OgNvxsb1Ia%2BSLfXO4waO3%2FWt7TEa4%2BVDEwMlatKMCMDi%2FhKXi41eoIlpbV8tx7T%2BRWoH0RYom99iyyz%2BXC3quw%2BlNl7TAkeT5gBB4zmsHlD8pvmO9bNn9&X-Amz-Signature=501813de29219b723c673454e304ad22b9fdcbcca05c0c218dc0941b1147047a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQATZLD6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDFUQViSAoXJhKuZcRKhIFa3ugeTHyhejMLUrwpFsXNaQIgATjNEiQ%2BAVDuG0JB4UB8S7wdUwFmOfaV2JHwNlSXzMwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB%2BrJEW7GMTCs8Pu2CrcAz37%2B5T7VW5TVZ1XGPYiv4BhQSMKRAOlMQgEacZtKfklTOIaDfauwKqUzgig0wYW5t%2BWtUY2soRfSbW8okCxWNgNbMqszMBA7blxNbtqC6mrVxDCUYZ54NqKFH1C7Kh%2BbWAv3JwUFPG3c9JxL%2BKj7PQVF5LBBU%2B95Z1XM3hD0PaZs4CnmfCZTaOM2D3CCVCnuuvfaa7mT9kTM5Oq8hHnq%2BshISNi%2BCAYXyOIEHpjZOJIa5RdqXxlCxe0H9cdaXHSefiMrEZCAGxwxn66JXDCn%2FyF2U8MOy5hGorOEX6k8fBcKitWHGo%2BO%2F6SgJLobV0sgrGEaPFXY3ImQkdLP7K8MTXEXmXspMeDGBvM7s5x9N7JlWmSkSt5bUhwUNaE%2BhA9WgYELILL6lzIBobHN%2BCHM6BVqoyuElz4Gf%2Fk10git3JdV4PKyfkbTlOvQc6kMnGK3C%2FmBChkMCb9D6w19azBWO4ht5aUQR0ORCPixkrWoBBntzz2zCisnBQvxOYFQ1TZIYj6ReGtNrWVy8bt%2FVnPmsf1OoIQDnIMl9d5EcWvGuMSn8NK5EVf1aWesY6zhPpnEFke2xZ8lj256sYPK%2FsmCDU6gMK8A3RxZJS4SeEhHXBZOtIQZIUf0g%2FBFpa0MN%2F3gMUGOqUB5JqJrNweMhUbWZBvUi8pJcXG7oZHDVgwof0fBDddhkQ9%2B3Bu4c3AUufii5873TT9JeVzFEg8DOCZtGhh8nVeQIiIKxg3QXqUDINBOn3OgNvxsb1Ia%2BSLfXO4waO3%2FWt7TEa4%2BVDEwMlatKMCMDi%2FhKXi41eoIlpbV8tx7T%2BRWoH0RYom99iyyz%2BXC3quw%2BlNl7TAkeT5gBB4zmsHlD8pvmO9bNn9&X-Amz-Signature=75c02d191d9ef53b7fa3c18d4673e15499c0bc1f68388863cd35f0e3c4356996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQATZLD6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDFUQViSAoXJhKuZcRKhIFa3ugeTHyhejMLUrwpFsXNaQIgATjNEiQ%2BAVDuG0JB4UB8S7wdUwFmOfaV2JHwNlSXzMwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB%2BrJEW7GMTCs8Pu2CrcAz37%2B5T7VW5TVZ1XGPYiv4BhQSMKRAOlMQgEacZtKfklTOIaDfauwKqUzgig0wYW5t%2BWtUY2soRfSbW8okCxWNgNbMqszMBA7blxNbtqC6mrVxDCUYZ54NqKFH1C7Kh%2BbWAv3JwUFPG3c9JxL%2BKj7PQVF5LBBU%2B95Z1XM3hD0PaZs4CnmfCZTaOM2D3CCVCnuuvfaa7mT9kTM5Oq8hHnq%2BshISNi%2BCAYXyOIEHpjZOJIa5RdqXxlCxe0H9cdaXHSefiMrEZCAGxwxn66JXDCn%2FyF2U8MOy5hGorOEX6k8fBcKitWHGo%2BO%2F6SgJLobV0sgrGEaPFXY3ImQkdLP7K8MTXEXmXspMeDGBvM7s5x9N7JlWmSkSt5bUhwUNaE%2BhA9WgYELILL6lzIBobHN%2BCHM6BVqoyuElz4Gf%2Fk10git3JdV4PKyfkbTlOvQc6kMnGK3C%2FmBChkMCb9D6w19azBWO4ht5aUQR0ORCPixkrWoBBntzz2zCisnBQvxOYFQ1TZIYj6ReGtNrWVy8bt%2FVnPmsf1OoIQDnIMl9d5EcWvGuMSn8NK5EVf1aWesY6zhPpnEFke2xZ8lj256sYPK%2FsmCDU6gMK8A3RxZJS4SeEhHXBZOtIQZIUf0g%2FBFpa0MN%2F3gMUGOqUB5JqJrNweMhUbWZBvUi8pJcXG7oZHDVgwof0fBDddhkQ9%2B3Bu4c3AUufii5873TT9JeVzFEg8DOCZtGhh8nVeQIiIKxg3QXqUDINBOn3OgNvxsb1Ia%2BSLfXO4waO3%2FWt7TEa4%2BVDEwMlatKMCMDi%2FhKXi41eoIlpbV8tx7T%2BRWoH0RYom99iyyz%2BXC3quw%2BlNl7TAkeT5gBB4zmsHlD8pvmO9bNn9&X-Amz-Signature=c8e63b89b7eaa359c84c6c1dde4324fb3e80e81a5e330ce90c2bebd9eb4373ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQATZLD6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDFUQViSAoXJhKuZcRKhIFa3ugeTHyhejMLUrwpFsXNaQIgATjNEiQ%2BAVDuG0JB4UB8S7wdUwFmOfaV2JHwNlSXzMwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB%2BrJEW7GMTCs8Pu2CrcAz37%2B5T7VW5TVZ1XGPYiv4BhQSMKRAOlMQgEacZtKfklTOIaDfauwKqUzgig0wYW5t%2BWtUY2soRfSbW8okCxWNgNbMqszMBA7blxNbtqC6mrVxDCUYZ54NqKFH1C7Kh%2BbWAv3JwUFPG3c9JxL%2BKj7PQVF5LBBU%2B95Z1XM3hD0PaZs4CnmfCZTaOM2D3CCVCnuuvfaa7mT9kTM5Oq8hHnq%2BshISNi%2BCAYXyOIEHpjZOJIa5RdqXxlCxe0H9cdaXHSefiMrEZCAGxwxn66JXDCn%2FyF2U8MOy5hGorOEX6k8fBcKitWHGo%2BO%2F6SgJLobV0sgrGEaPFXY3ImQkdLP7K8MTXEXmXspMeDGBvM7s5x9N7JlWmSkSt5bUhwUNaE%2BhA9WgYELILL6lzIBobHN%2BCHM6BVqoyuElz4Gf%2Fk10git3JdV4PKyfkbTlOvQc6kMnGK3C%2FmBChkMCb9D6w19azBWO4ht5aUQR0ORCPixkrWoBBntzz2zCisnBQvxOYFQ1TZIYj6ReGtNrWVy8bt%2FVnPmsf1OoIQDnIMl9d5EcWvGuMSn8NK5EVf1aWesY6zhPpnEFke2xZ8lj256sYPK%2FsmCDU6gMK8A3RxZJS4SeEhHXBZOtIQZIUf0g%2FBFpa0MN%2F3gMUGOqUB5JqJrNweMhUbWZBvUi8pJcXG7oZHDVgwof0fBDddhkQ9%2B3Bu4c3AUufii5873TT9JeVzFEg8DOCZtGhh8nVeQIiIKxg3QXqUDINBOn3OgNvxsb1Ia%2BSLfXO4waO3%2FWt7TEa4%2BVDEwMlatKMCMDi%2FhKXi41eoIlpbV8tx7T%2BRWoH0RYom99iyyz%2BXC3quw%2BlNl7TAkeT5gBB4zmsHlD8pvmO9bNn9&X-Amz-Signature=d78f9a6abe573da561f2e38de63bd1c6aac6802bbc7d2cfaa8bfcd4c6e63b83c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQATZLD6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDFUQViSAoXJhKuZcRKhIFa3ugeTHyhejMLUrwpFsXNaQIgATjNEiQ%2BAVDuG0JB4UB8S7wdUwFmOfaV2JHwNlSXzMwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB%2BrJEW7GMTCs8Pu2CrcAz37%2B5T7VW5TVZ1XGPYiv4BhQSMKRAOlMQgEacZtKfklTOIaDfauwKqUzgig0wYW5t%2BWtUY2soRfSbW8okCxWNgNbMqszMBA7blxNbtqC6mrVxDCUYZ54NqKFH1C7Kh%2BbWAv3JwUFPG3c9JxL%2BKj7PQVF5LBBU%2B95Z1XM3hD0PaZs4CnmfCZTaOM2D3CCVCnuuvfaa7mT9kTM5Oq8hHnq%2BshISNi%2BCAYXyOIEHpjZOJIa5RdqXxlCxe0H9cdaXHSefiMrEZCAGxwxn66JXDCn%2FyF2U8MOy5hGorOEX6k8fBcKitWHGo%2BO%2F6SgJLobV0sgrGEaPFXY3ImQkdLP7K8MTXEXmXspMeDGBvM7s5x9N7JlWmSkSt5bUhwUNaE%2BhA9WgYELILL6lzIBobHN%2BCHM6BVqoyuElz4Gf%2Fk10git3JdV4PKyfkbTlOvQc6kMnGK3C%2FmBChkMCb9D6w19azBWO4ht5aUQR0ORCPixkrWoBBntzz2zCisnBQvxOYFQ1TZIYj6ReGtNrWVy8bt%2FVnPmsf1OoIQDnIMl9d5EcWvGuMSn8NK5EVf1aWesY6zhPpnEFke2xZ8lj256sYPK%2FsmCDU6gMK8A3RxZJS4SeEhHXBZOtIQZIUf0g%2FBFpa0MN%2F3gMUGOqUB5JqJrNweMhUbWZBvUi8pJcXG7oZHDVgwof0fBDddhkQ9%2B3Bu4c3AUufii5873TT9JeVzFEg8DOCZtGhh8nVeQIiIKxg3QXqUDINBOn3OgNvxsb1Ia%2BSLfXO4waO3%2FWt7TEa4%2BVDEwMlatKMCMDi%2FhKXi41eoIlpbV8tx7T%2BRWoH0RYom99iyyz%2BXC3quw%2BlNl7TAkeT5gBB4zmsHlD8pvmO9bNn9&X-Amz-Signature=47f7eafba8d8e51bb9b8987ac74a95d60328b1c0adb961e41baf964edb5ff516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQATZLD6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDFUQViSAoXJhKuZcRKhIFa3ugeTHyhejMLUrwpFsXNaQIgATjNEiQ%2BAVDuG0JB4UB8S7wdUwFmOfaV2JHwNlSXzMwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB%2BrJEW7GMTCs8Pu2CrcAz37%2B5T7VW5TVZ1XGPYiv4BhQSMKRAOlMQgEacZtKfklTOIaDfauwKqUzgig0wYW5t%2BWtUY2soRfSbW8okCxWNgNbMqszMBA7blxNbtqC6mrVxDCUYZ54NqKFH1C7Kh%2BbWAv3JwUFPG3c9JxL%2BKj7PQVF5LBBU%2B95Z1XM3hD0PaZs4CnmfCZTaOM2D3CCVCnuuvfaa7mT9kTM5Oq8hHnq%2BshISNi%2BCAYXyOIEHpjZOJIa5RdqXxlCxe0H9cdaXHSefiMrEZCAGxwxn66JXDCn%2FyF2U8MOy5hGorOEX6k8fBcKitWHGo%2BO%2F6SgJLobV0sgrGEaPFXY3ImQkdLP7K8MTXEXmXspMeDGBvM7s5x9N7JlWmSkSt5bUhwUNaE%2BhA9WgYELILL6lzIBobHN%2BCHM6BVqoyuElz4Gf%2Fk10git3JdV4PKyfkbTlOvQc6kMnGK3C%2FmBChkMCb9D6w19azBWO4ht5aUQR0ORCPixkrWoBBntzz2zCisnBQvxOYFQ1TZIYj6ReGtNrWVy8bt%2FVnPmsf1OoIQDnIMl9d5EcWvGuMSn8NK5EVf1aWesY6zhPpnEFke2xZ8lj256sYPK%2FsmCDU6gMK8A3RxZJS4SeEhHXBZOtIQZIUf0g%2FBFpa0MN%2F3gMUGOqUB5JqJrNweMhUbWZBvUi8pJcXG7oZHDVgwof0fBDddhkQ9%2B3Bu4c3AUufii5873TT9JeVzFEg8DOCZtGhh8nVeQIiIKxg3QXqUDINBOn3OgNvxsb1Ia%2BSLfXO4waO3%2FWt7TEa4%2BVDEwMlatKMCMDi%2FhKXi41eoIlpbV8tx7T%2BRWoH0RYom99iyyz%2BXC3quw%2BlNl7TAkeT5gBB4zmsHlD8pvmO9bNn9&X-Amz-Signature=73116b11957ac57f21c97f424d392bb3977673380f47e4390c8e295a880a9d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQATZLD6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDFUQViSAoXJhKuZcRKhIFa3ugeTHyhejMLUrwpFsXNaQIgATjNEiQ%2BAVDuG0JB4UB8S7wdUwFmOfaV2JHwNlSXzMwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB%2BrJEW7GMTCs8Pu2CrcAz37%2B5T7VW5TVZ1XGPYiv4BhQSMKRAOlMQgEacZtKfklTOIaDfauwKqUzgig0wYW5t%2BWtUY2soRfSbW8okCxWNgNbMqszMBA7blxNbtqC6mrVxDCUYZ54NqKFH1C7Kh%2BbWAv3JwUFPG3c9JxL%2BKj7PQVF5LBBU%2B95Z1XM3hD0PaZs4CnmfCZTaOM2D3CCVCnuuvfaa7mT9kTM5Oq8hHnq%2BshISNi%2BCAYXyOIEHpjZOJIa5RdqXxlCxe0H9cdaXHSefiMrEZCAGxwxn66JXDCn%2FyF2U8MOy5hGorOEX6k8fBcKitWHGo%2BO%2F6SgJLobV0sgrGEaPFXY3ImQkdLP7K8MTXEXmXspMeDGBvM7s5x9N7JlWmSkSt5bUhwUNaE%2BhA9WgYELILL6lzIBobHN%2BCHM6BVqoyuElz4Gf%2Fk10git3JdV4PKyfkbTlOvQc6kMnGK3C%2FmBChkMCb9D6w19azBWO4ht5aUQR0ORCPixkrWoBBntzz2zCisnBQvxOYFQ1TZIYj6ReGtNrWVy8bt%2FVnPmsf1OoIQDnIMl9d5EcWvGuMSn8NK5EVf1aWesY6zhPpnEFke2xZ8lj256sYPK%2FsmCDU6gMK8A3RxZJS4SeEhHXBZOtIQZIUf0g%2FBFpa0MN%2F3gMUGOqUB5JqJrNweMhUbWZBvUi8pJcXG7oZHDVgwof0fBDddhkQ9%2B3Bu4c3AUufii5873TT9JeVzFEg8DOCZtGhh8nVeQIiIKxg3QXqUDINBOn3OgNvxsb1Ia%2BSLfXO4waO3%2FWt7TEa4%2BVDEwMlatKMCMDi%2FhKXi41eoIlpbV8tx7T%2BRWoH0RYom99iyyz%2BXC3quw%2BlNl7TAkeT5gBB4zmsHlD8pvmO9bNn9&X-Amz-Signature=e89b5ea04f248f1ba7eca9417d69ccc9a3a08af37b9eb4ddcdd6d2c921f44276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5TLHSKS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCX8FZvptp%2FSv%2FHBgjhgmFsk6aM8fMNC0xZLzHZPyf9ZwIhANiCKpeVSNbGywwIPkkN8QqU0%2B80pbfzrHxj3eEPiYd8Kv8DCHEQABoMNjM3NDIzMTgzODA1IgzYfaKdzaMBizTzmXwq3AOfXrCL5K9di1oDCtKehmJi7uN%2F2d0Y4ozTJv3XbHH58ysNTjQWgpmTC%2Fi6OzQX%2FhIMKG%2Bj3sCHkW6Ti4Oq2yIAEUZhNkS4M3tnjMAhTA5843GuNbHfYVq9YzxykGgNxCNg5DHeH6IITmSunm7X%2Ba6CJ%2B4CHuy%2BXNivk99RFBubHXEdf5%2FdxaPWLqUjkMcuSforHRlNX8OZE2pkd%2FmnjiE8nNMlUDZd2ris7%2BhT%2BU7Evt3%2FhJZIvDt9qbkcLUdctTNfew9DKyCQU2n7SEtvpsZKaOZD3kIcSLgZFs%2B3tFcNZhucpaKD%2BSIpkwCcvPq%2FMOj18iNRKFtDoR5SJ%2FlkxK0TVNOnkZZZk7ct8sDGQ8LlSBORkSlFIEbAs1DtJ1vlAGpaL8BnmSwZImJb9HVfVntQzzhISFtjec0BwKMcXnjGnoG06hidR95DuoGFGnSwB%2Fxd%2BYZTJpI52WMNbbuUAEJF4mI5RdmP%2FutJ6niRUFPRWhjTUzU17V5bznNoUZBzgctIKE8B5OszGxa8Krg87Hrv0gsz%2FyyqYKjDvkOM9ESdRB8Kx%2FjcJjMLA69ttJpIGXpcB6hUsr5GhsYqpBC5EePJmkMYpx8430aO7I8GNvqjn0hjYuPnzMcuTQRg5TCs%2BIDFBjqkAa8NYtK4SFN%2FMSTML3SzXT0ybeFupY6Mds5B%2FyNCog3a8lJnAJ4%2BS6xaAikm%2FlB%2F6SV00BMwS41268d66obRCiRHVoXSbyqLScgj2AhhqS4Via7EXZZdGYG86pk3VIZ81HRBAjARCZsiLIwZJd4nTOS5ekjRl7KeY%2FZ2hLijoWfjEUX0VXz5jQUYJhBRwaMXMx0q9z9NPcvTZ5x%2BI8l6AMBR9zps&X-Amz-Signature=aae2dcd5386d545d19f0a5b1af93e54b642b096967cb52071444f0825c875b5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OPI6KQH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCyTx2xRkYw%2BEZ2NSiZYqNng8HXMkrvFIsLRN6n3dK8iAIhAO14jhEtECeJUTwmsf87ju1VpG5q4dwJ%2FxGlnAD%2BAoSsKv8DCHEQABoMNjM3NDIzMTgzODA1IgwGHp6jE4f%2BN35psyYq3ANBOPyu4325i15nsKD3dplLJEP%2BgYf22Q0qkksWdMvtdoLT%2B1r6yHL1JweQOB2KFqtqILfWrX3j5GBOtc68ViY%2BvGJZyK8PATpeUelF09wjDAIhua7Clg7SQ7%2FehSuSzC4dcT1FTtzGPyim58yc6DkI%2F1tgbw5ObX1WE1wIFG9r6ISv%2BhcCnTUfYcb3X6uXAJ3Ab2SAN0OhKZCtgua8qqlL8IwxApGhw0UFwiOpOAq%2B5Y%2BrlEqQBR3ieo9Fs2s5VS24yboz7yZMe32MT6d8hnuenFM7qqX07YIR8R8mzEshtToM7Ng6pZ5h93vKHslAlZZKEqhKqlK9uUOZqZPDxAR5tDtrSgYhuGnoh3ucpgS9X2UE%2B3Tj2FMVM521gRlJJ6pQkJoxA2md2z625rs56Vf0iqxw4bSc0Tf8Wlw7Fg2nbxzjRfEPuztKpMd%2Bidyr%2FPmhtM%2Fmz1OVxlQPx90rJzSCAJU88n3qEhHKzKqbDYQMKU4rqGdsG3arVc%2Bqo0%2FxnF%2FclDYn5xs3KPGmYDF7Iz%2B%2Bv4Wp2TtXaCQXMRsOFbj9p%2BMbOIFS9HFEgHCQPbkPWdGZeKpef%2BtyMQfJLWPA3TqzirxZh%2BgVgnE0niK0r4%2BgLwv7IzHX3BjxFoSG4zDi94DFBjqkARSFIgDpsa%2FWd2P6oVYYkr2771LRsgHJECHwnShxlR6gRBWMB%2BktwvsEUvD5M8rHjgdZfCGSo9wDpeY63CXtWSSF0aNeCA5Nlw8IY9Rdw5ilGwdatQZsUc9%2BkH4%2FM7ty0mIIoUp5YoPbP597DnJOZviKU4ry0ose53%2BndX7v4UO4ojsi9RCd1CKVnfaJtWDp8sJGS66itKeTRbg%2BPrlxKk3UiJi9&X-Amz-Signature=a96811cddb80bb5ec968c200b2aa8f0f53df76fe09f619416b41c0b2e39730f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCSAL7FE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIG9bVn1VzTjkXEIFyzxiRSjgosHcSza%2BskBdPKjsMfVAAiBedK%2F2pzGRujBLYRINYAjzvCESDm9V%2Fj%2BEGXpkT1vN%2FSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM0UWqLr6NnuE9Iq0KKtwD9Kr1Oeawnpur2YAH2WAoTHVO%2F%2FfZbYxyx21yhL0ebrSB2RqxOPD2YHDsywQp%2B49tBENPdohzixn7n0j8eK7bWFBtm%2BHLcR7QTrpEjbb5El02abmJ%2FuFtgjZQZG3sOVK8eK6kur%2FWqGnNMxbRsGulEjhiUBhc2Kzijtyp4HYf2HQ4xlFGWV6jb%2BbrQxil55QIiErSXJc5Auo0HjqbVnYp5Kr%2FOh7PaD30fqm2A%2FZaB5SWprAf7UAoQjpiF2UsDTX2931lVC5YuRN0SM9D2CvFv9EpbdmwNwtl6CAhgLRg28oxLsf%2FQ0MKETDAhQL4sx5LF0%2B%2FZ37o6XfekIt3u1vXhXKp3BZuWwfaL27T6DNMcPHKd0FKKWz6sPiKVJVaJGrpcpAoRezjtcXehswsVyGmaCs4lqsLiICl5Uf8exRREllIhXSgskr5ZzrISn7Cfe34Naj%2BG7FNqOPrM%2B484a4OyuiFvTrQ7OK34uPBfYNWpYfzFdfKx9CWgS%2BNpD4eLQOrHrWCu9gURuc%2FOUGY0ve4l0L5AQokyfrFS1N0c9ruEk%2FnnOMlYGVqn9BXPGFyKsijo1Pb8N1Ni1JIAJVZ2yZcwlAK%2Bcvng3%2BoPiPfgISFIn6YydYpvi1zBKkUSzkw5%2FiAxQY6pgG3L%2FHfU2gt5K5s2PTHHWQQBAdWt%2BvEaBwzxbY2K%2BLk%2FLSAxg%2B8wDRr750bcpQdUJUgHTWFEiVOBlcvAv5YtKHtE4xZQlupcWswzn1IQZPCiBfLtz4G24bpF628yYiKhlPRCHyCfE9DhSEVUghytIUp5rHDaNqrDqjHGyAhoBwlwLYZDHspTPGhCIsHR9MVzXnn0iWw5QXyg18xvvRNpQvtcNbZYfSh&X-Amz-Signature=0d54c9b45809948e92f234196cde11d919f6bd639e22210795f5af15e84e0941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQATZLD6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDFUQViSAoXJhKuZcRKhIFa3ugeTHyhejMLUrwpFsXNaQIgATjNEiQ%2BAVDuG0JB4UB8S7wdUwFmOfaV2JHwNlSXzMwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB%2BrJEW7GMTCs8Pu2CrcAz37%2B5T7VW5TVZ1XGPYiv4BhQSMKRAOlMQgEacZtKfklTOIaDfauwKqUzgig0wYW5t%2BWtUY2soRfSbW8okCxWNgNbMqszMBA7blxNbtqC6mrVxDCUYZ54NqKFH1C7Kh%2BbWAv3JwUFPG3c9JxL%2BKj7PQVF5LBBU%2B95Z1XM3hD0PaZs4CnmfCZTaOM2D3CCVCnuuvfaa7mT9kTM5Oq8hHnq%2BshISNi%2BCAYXyOIEHpjZOJIa5RdqXxlCxe0H9cdaXHSefiMrEZCAGxwxn66JXDCn%2FyF2U8MOy5hGorOEX6k8fBcKitWHGo%2BO%2F6SgJLobV0sgrGEaPFXY3ImQkdLP7K8MTXEXmXspMeDGBvM7s5x9N7JlWmSkSt5bUhwUNaE%2BhA9WgYELILL6lzIBobHN%2BCHM6BVqoyuElz4Gf%2Fk10git3JdV4PKyfkbTlOvQc6kMnGK3C%2FmBChkMCb9D6w19azBWO4ht5aUQR0ORCPixkrWoBBntzz2zCisnBQvxOYFQ1TZIYj6ReGtNrWVy8bt%2FVnPmsf1OoIQDnIMl9d5EcWvGuMSn8NK5EVf1aWesY6zhPpnEFke2xZ8lj256sYPK%2FsmCDU6gMK8A3RxZJS4SeEhHXBZOtIQZIUf0g%2FBFpa0MN%2F3gMUGOqUB5JqJrNweMhUbWZBvUi8pJcXG7oZHDVgwof0fBDddhkQ9%2B3Bu4c3AUufii5873TT9JeVzFEg8DOCZtGhh8nVeQIiIKxg3QXqUDINBOn3OgNvxsb1Ia%2BSLfXO4waO3%2FWt7TEa4%2BVDEwMlatKMCMDi%2FhKXi41eoIlpbV8tx7T%2BRWoH0RYom99iyyz%2BXC3quw%2BlNl7TAkeT5gBB4zmsHlD8pvmO9bNn9&X-Amz-Signature=84fa8fe6718460266052c7116f40adea2642e726b51a6c29187a472cd3408b25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624MOEZVN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCFxfuUS5SAAOX6H80lWTq9ajni%2B8iqPe35uOAUoBn%2FlAIgSWGpoSMxpxZzfcEb%2BzzdSP9ZsdOcORD9zKKyy7%2BuvuQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCxNrD99MDUm2JIu%2FSrcA3wNr%2BNMpHbWmZV9eVEcSNgwX9OrXlOhGR%2BYr8GVCK1fuzz6DlOxmUmUULNWyaJu%2BvWm6X7cQXCiEJKh%2BuFCGigR7AFISbcWQmPqu3kXoXvs6uPBKmUQk%2BnUM9mcVs2qMFPQbe5u2lwuOzFydK%2FJY6uRF6PQDdmpvPZiL6THhbJ8xHpD4JG58stM6vMtpkIQei7AVvR75qAMlBIbgPpmHvI8geZ4hOMl4zMJGieztjwBD01H0CX9kXKz22W1Whalb1q24ZY8xPkCJzVXx2iveM0GSJA2CW0L0AWQEN4hSrxRFuzSFuPW43pmTgZJzQk83QpeBlKqDTLGuTD82WBkmG9xypvt%2Fp3qdsfNh%2F41OGiEU5TkKrYmClCgcoEkkiSWNyBNM%2BGSFRlj1glF02S9fibMv1oF%2FKDV07lA3HiSKX8HUxj2cjae8rV970l6u50Nu3tHvbfKEP26DM6jPq7xw1GwHhQEPrgwePdmWezdk%2F8VIcd051eP7biCUkp11m2Vz%2BvwHJtUHmY0Y4%2BI1bXf9h1IpEc%2BdDolaSImfuYHxVQqAFIs221SOMvvag9zCclcAUY4HcYQ7o6Y7%2Fl%2FEKAZzRA%2BqIzKBarnxoL363z3y4qAuTVST4gJwqVZQfxZMKP5gMUGOqUBCCobf5PUPQOcfEY6lPv%2FG9G8WE5LSje4IjG3lxBxwmlTQ02Ve27io3HaXoQB2jLUn6V5Y5QbtH4vo2hCsXl8FVWNIFOKdkO2EU5uQRLHwaWUQ3kHQQicJ1qgOPtNuQcfUwsOYrKKHMgwdTf8jlw2Rywev1xdp9oKHlaVDWAGZXK02C%2B2bPUFjB%2B5q%2BIC0Gy%2FJNDDMkH9DcwHYDCQp7EJkGvgFXnK&X-Amz-Signature=c730cec420675b0a13eacb719d7db7d85acd2e0f5deec2ac43b39eb78fea5208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQATZLD6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDFUQViSAoXJhKuZcRKhIFa3ugeTHyhejMLUrwpFsXNaQIgATjNEiQ%2BAVDuG0JB4UB8S7wdUwFmOfaV2JHwNlSXzMwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB%2BrJEW7GMTCs8Pu2CrcAz37%2B5T7VW5TVZ1XGPYiv4BhQSMKRAOlMQgEacZtKfklTOIaDfauwKqUzgig0wYW5t%2BWtUY2soRfSbW8okCxWNgNbMqszMBA7blxNbtqC6mrVxDCUYZ54NqKFH1C7Kh%2BbWAv3JwUFPG3c9JxL%2BKj7PQVF5LBBU%2B95Z1XM3hD0PaZs4CnmfCZTaOM2D3CCVCnuuvfaa7mT9kTM5Oq8hHnq%2BshISNi%2BCAYXyOIEHpjZOJIa5RdqXxlCxe0H9cdaXHSefiMrEZCAGxwxn66JXDCn%2FyF2U8MOy5hGorOEX6k8fBcKitWHGo%2BO%2F6SgJLobV0sgrGEaPFXY3ImQkdLP7K8MTXEXmXspMeDGBvM7s5x9N7JlWmSkSt5bUhwUNaE%2BhA9WgYELILL6lzIBobHN%2BCHM6BVqoyuElz4Gf%2Fk10git3JdV4PKyfkbTlOvQc6kMnGK3C%2FmBChkMCb9D6w19azBWO4ht5aUQR0ORCPixkrWoBBntzz2zCisnBQvxOYFQ1TZIYj6ReGtNrWVy8bt%2FVnPmsf1OoIQDnIMl9d5EcWvGuMSn8NK5EVf1aWesY6zhPpnEFke2xZ8lj256sYPK%2FsmCDU6gMK8A3RxZJS4SeEhHXBZOtIQZIUf0g%2FBFpa0MN%2F3gMUGOqUB5JqJrNweMhUbWZBvUi8pJcXG7oZHDVgwof0fBDddhkQ9%2B3Bu4c3AUufii5873TT9JeVzFEg8DOCZtGhh8nVeQIiIKxg3QXqUDINBOn3OgNvxsb1Ia%2BSLfXO4waO3%2FWt7TEa4%2BVDEwMlatKMCMDi%2FhKXi41eoIlpbV8tx7T%2BRWoH0RYom99iyyz%2BXC3quw%2BlNl7TAkeT5gBB4zmsHlD8pvmO9bNn9&X-Amz-Signature=15c946d3e46e1eff5c1a7d2a57e51a6fde138064c4985bc301d9f9331a30c13b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6ZA5TPZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGLy5yG97JVFRnUXLBJUqjHelT%2BbMaIjGwwezbJmzGIxAiByGCmOIsAwUFCBbjhETPsoH7vy99Bg7wWDuZ%2Bcia%2FAHCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMwVLkmv6jSIzYcUSiKtwDf4W%2BzrDDDJbbygfxw7chFGzqjbwYO0uSU%2FkF5HRRIMyGqmWbTnXMmrfxwqGtS0Zn%2BlaG8eLN2VGwqgn%2BVJGo%2BqwNHN193%2BgBzpff3beN2gBjoTOtDapI0jwV7M7C8gUdTZ3So%2B0hoMXIeiL4j33OyRPNhxjZyVvQ0RWgTlJcXMIlFwHRsJwT9z%2Bp6iizWbHKoRLb2fraB9O3svwq9uDw2TZqjZNP2FAhgBfIKgGfvuYZpdUDZkEeWjuSvPRnxRvU7qtrn5MWKzY02pXKVv%2BJBNEQwL83F3pZdm0x8Uvrr0TUB8k8F%2FjrF%2FLz2qycSYctkxqXHtKmzObeFwEO9J6FkmSGhNeGMR%2BuTXtBae4M3mcBucw6ZgJDRCvIBpdUYT2UlfifK1TXbS4zUUvopfIkCmpP7n6MLjsiSAv4idvJJr4p5e112%2BN1K2Tb7FIIpG1hH70R5JOM9lG%2BY61TorGIyLqy2LK9ebN0GHLQDHBGS9wkvkGnhQZW3P20IOC5RBMWud88L%2BrFBpd8o0hWlGJwMWj5vUYzEQfOSsgl6fvXByQ2MsPHqliI5ZyhHgnspYYZsfVoekp5gbyZUOll6leY8WeDU4JJ6y4mMJH%2FBAAe1fbfOBQhWVc2P9sjKdUw9PeAxQY6pgF1MDAPUwoWCxYZp46R24iDQY4GVdlFcEnt8O2z2Fiml8K3%2BrVxKi%2Ff9%2BfCcv5otKCTC1gtfzJ7i9sMz%2FRwRNZYvrnT52sycC4RkJ2b27iptsMfHdCn1IPak1KDqSPDWRJSXL3OKpASffkHfWAxn5R2d88qDAVuVw9NQcRNW9NjgShalFQViBKZJ%2FxKI1Al5lj3u9lW8LYLzWiD2%2BLQ79NKdN0vn1rA&X-Amz-Signature=d7629437a22f180dba48d9a938f8edff3de2ec824a7243cf7b6df0a6049f7d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQATZLD6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDFUQViSAoXJhKuZcRKhIFa3ugeTHyhejMLUrwpFsXNaQIgATjNEiQ%2BAVDuG0JB4UB8S7wdUwFmOfaV2JHwNlSXzMwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB%2BrJEW7GMTCs8Pu2CrcAz37%2B5T7VW5TVZ1XGPYiv4BhQSMKRAOlMQgEacZtKfklTOIaDfauwKqUzgig0wYW5t%2BWtUY2soRfSbW8okCxWNgNbMqszMBA7blxNbtqC6mrVxDCUYZ54NqKFH1C7Kh%2BbWAv3JwUFPG3c9JxL%2BKj7PQVF5LBBU%2B95Z1XM3hD0PaZs4CnmfCZTaOM2D3CCVCnuuvfaa7mT9kTM5Oq8hHnq%2BshISNi%2BCAYXyOIEHpjZOJIa5RdqXxlCxe0H9cdaXHSefiMrEZCAGxwxn66JXDCn%2FyF2U8MOy5hGorOEX6k8fBcKitWHGo%2BO%2F6SgJLobV0sgrGEaPFXY3ImQkdLP7K8MTXEXmXspMeDGBvM7s5x9N7JlWmSkSt5bUhwUNaE%2BhA9WgYELILL6lzIBobHN%2BCHM6BVqoyuElz4Gf%2Fk10git3JdV4PKyfkbTlOvQc6kMnGK3C%2FmBChkMCb9D6w19azBWO4ht5aUQR0ORCPixkrWoBBntzz2zCisnBQvxOYFQ1TZIYj6ReGtNrWVy8bt%2FVnPmsf1OoIQDnIMl9d5EcWvGuMSn8NK5EVf1aWesY6zhPpnEFke2xZ8lj256sYPK%2FsmCDU6gMK8A3RxZJS4SeEhHXBZOtIQZIUf0g%2FBFpa0MN%2F3gMUGOqUB5JqJrNweMhUbWZBvUi8pJcXG7oZHDVgwof0fBDddhkQ9%2B3Bu4c3AUufii5873TT9JeVzFEg8DOCZtGhh8nVeQIiIKxg3QXqUDINBOn3OgNvxsb1Ia%2BSLfXO4waO3%2FWt7TEa4%2BVDEwMlatKMCMDi%2FhKXi41eoIlpbV8tx7T%2BRWoH0RYom99iyyz%2BXC3quw%2BlNl7TAkeT5gBB4zmsHlD8pvmO9bNn9&X-Amz-Signature=c087b2042849b928c5f356364ee79e512785df44dab816f07e8d54319828b807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4YHMRE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCAAASglLAd4aISBd978Z6STfHf%2B5g51fmRATrM8ary8wIhAKXbYDP4Ct0%2FnIAVMlkWy3OWfIxCZ9Jx1kr%2BfbG2mjjkKv8DCHEQABoMNjM3NDIzMTgzODA1IgwWxvu85Gwi4SSl37gq3APFd7Q%2BRRIrATeA0aSS9NCXM3F7a3e9FBkT8BBno07xKshjRzt3OJFdYKx4%2BmtTiyljeQNGm4l1f8uTzWmKrYbTNdH04BqgH2AOG0Eu8x8otr1CM%2FhbUY4ddbu1DsohpKwJZwBqaOH8mREJ0ByKSe%2FKZ9WjkhEyK4K%2FAQ5i4PtIQF%2BTOOGCt9yXjDPIS%2FRRaulKjyP8lceZVRoV2JtC9r8Lc3AcW4SQg%2FH7H%2FwdzPe%2FhKt4eHF25VbCSqIGub5nXY2E5t8OQYpgfbV36HERPXBGkWGJkpY5MqREyXSDwFo6a8mCNPuVK5n77gTMqswT57ACVrOoAx5uB%2FRcUNVW9xIAjB6T1K2plaTqMfnGscC7Id21wqEOfgGXmMOgMerOzAAUpu4qXk0RE9tH4Z%2BmzBN32iovvi2u0UE7LRUYsVzfv7LiAL9C06wboovoR7Ky%2FEVF7M7vzXcFWJ1YnwksNf8BupCyfxCFqdAHjCohAD5h3hrdSz5xPcE1qXoW2TtdOD%2BR9LrgbbrQ9CL988FxGSdGpisblhoSza3pbZKaJsv6d0pGggFhGC8Hlb5CroXptckyq8y0QIC%2BJHQ1wtvH1b4X5A2K32QGYH5NWYk%2B4AwvKOtLwBcqEbaQNHhFTDCf%2BIDFBjqkAdaW8MPffN9SsBxWSrR%2BkH9d9BJiUHbqIbXZewr%2Fk5akkWOcfZiPYu4f5L%2FWsLeA3zQdl2FEQdZHic4%2B%2BBcnE%2Fs0ReQ3fz3nnskvzIVnAn8PSx7dlrQTMjS5svPwfC2pRN5ejc4565YeaEQ0G%2BzVHmzyyesK3hRAazFuI0tS2xH8Z9OrwQMuS21uJkPb1ZOkaI%2FZ3%2FAi%2BgYD0nykvFFEnxc4Zk20&X-Amz-Signature=8233b181e7d85f4c920f8f49baf6039cfe943824ffd177fb3dc894c71a5c77e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQATZLD6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDFUQViSAoXJhKuZcRKhIFa3ugeTHyhejMLUrwpFsXNaQIgATjNEiQ%2BAVDuG0JB4UB8S7wdUwFmOfaV2JHwNlSXzMwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB%2BrJEW7GMTCs8Pu2CrcAz37%2B5T7VW5TVZ1XGPYiv4BhQSMKRAOlMQgEacZtKfklTOIaDfauwKqUzgig0wYW5t%2BWtUY2soRfSbW8okCxWNgNbMqszMBA7blxNbtqC6mrVxDCUYZ54NqKFH1C7Kh%2BbWAv3JwUFPG3c9JxL%2BKj7PQVF5LBBU%2B95Z1XM3hD0PaZs4CnmfCZTaOM2D3CCVCnuuvfaa7mT9kTM5Oq8hHnq%2BshISNi%2BCAYXyOIEHpjZOJIa5RdqXxlCxe0H9cdaXHSefiMrEZCAGxwxn66JXDCn%2FyF2U8MOy5hGorOEX6k8fBcKitWHGo%2BO%2F6SgJLobV0sgrGEaPFXY3ImQkdLP7K8MTXEXmXspMeDGBvM7s5x9N7JlWmSkSt5bUhwUNaE%2BhA9WgYELILL6lzIBobHN%2BCHM6BVqoyuElz4Gf%2Fk10git3JdV4PKyfkbTlOvQc6kMnGK3C%2FmBChkMCb9D6w19azBWO4ht5aUQR0ORCPixkrWoBBntzz2zCisnBQvxOYFQ1TZIYj6ReGtNrWVy8bt%2FVnPmsf1OoIQDnIMl9d5EcWvGuMSn8NK5EVf1aWesY6zhPpnEFke2xZ8lj256sYPK%2FsmCDU6gMK8A3RxZJS4SeEhHXBZOtIQZIUf0g%2FBFpa0MN%2F3gMUGOqUB5JqJrNweMhUbWZBvUi8pJcXG7oZHDVgwof0fBDddhkQ9%2B3Bu4c3AUufii5873TT9JeVzFEg8DOCZtGhh8nVeQIiIKxg3QXqUDINBOn3OgNvxsb1Ia%2BSLfXO4waO3%2FWt7TEa4%2BVDEwMlatKMCMDi%2FhKXi41eoIlpbV8tx7T%2BRWoH0RYom99iyyz%2BXC3quw%2BlNl7TAkeT5gBB4zmsHlD8pvmO9bNn9&X-Amz-Signature=381bee161ea0affe73c713e503a3086209529e5d6f7fc434666a5cafcce17ea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P3LJ335%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T091002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEwOgXuCPUwimiktgn8jEisgzy6uUll5q6B0oYergpbNAiBApkhB%2BBHZGKQZ%2BztHs15571KOUF3aDTxZdgmjP98CHyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM4OQiuBymUVocJFeKKtwDlSFkckBE%2Fand8YBatmIRGDv5BuGUJi5eVVEcDFYQ6hdux4sjVUhoKEGyBYTyZc9GkrJfFauKbhaMTIutpEbgtrGz0CXjTuV3b%2FUSnHpl2Cd6TrewCXPQE6VMUszAlG05SCR42wbFZSnpKgXgGFlVbOBKGE%2BWibUGMg0DCjW526%2B5eTZDNdUw1N0uqXveoQH4sxRZC0UmLcvUDGTovGNg2vRqVpsJsITKQLSKLyxgfQA8cz1%2Fg%2Ffl1n5aqO6l40wwmAKQ6ns8AQgP1wlhQDmnN2i4QZPHsU%2BtOrwU%2FZEJL3oAGmJup%2F66Rrbu7PJAC%2FUPfZj0XKjV5rUNPYTVSn7Ej2DkRQEYmMvZbku%2F0Tep05Grpqvrz4jsG8hJMYRptkMmcu06drRNz3DEjTYtvJpX0GdNoCzu%2BerfCafM7Jd79h4RE3FdljD4K%2F2NoE92Dm3TV3V9Y0himLEEg8xEaJ2L9eiocGwmUVkNNt6JPdjBKU8OI78Pd9DL5v8%2BY7Kbznf2QQ1ST5rC0EG8HfsSEx%2FjYjb9Cqmz4maPwST4oXFiYqn%2BqnYZuvruD%2Fu3GtowZzvXQ%2BQuLbOeRNKFGpPJQcd8K3w8y39UqPeFXU%2B7iu3wCY%2BPI5psS0dMwf8k7IEw%2FveAxQY6pgG%2BBbwark9xnrKGQZoDZB9Lfhoqjqa5Im6zL4YXzeGkMHcivUzNaSkcVvo1veK%2BU6SSPYEOrTgpykyRh30xVh1F4LVv1WJT2v8k4z0ocDsgWftC0h07saM1yrfWBMZ%2B9uIkyAFARgbkUnH5kIk%2FrqPvxo0NbFgh6bO23FbjiNCpKvTycRqk7%2FFGmya9R0GLIb9k1O36kbfSsCodXn3qmff4T%2Fxotjye&X-Amz-Signature=04f176b5460a54daaf94139dd05659e48e2ad934659c18367dd3128c002f50f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ECOVZS7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDoTwF5xBA2ZwO0ieRrkhxK%2BW5DIFiPIuWJaI4hCa2LEwIgY59N0cfeqY2p5xVU46dhjdznYw%2FIkb0%2BlaAC%2FHHEWUYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFJg525OXzLzEcWBsircA9gRMVPsD8e8NPRgDgpmGptDsmTfzJnVROJHgHdblSdZer4jTXmh2IsNLlem9cCU2XlR9%2F1rZGLHoxVNQ2ibvopxHidNK%2BcUfgu%2BC3z3Qf0icq4qmk2X8XpCh4nmTR4k50oKboKRZwbmUwtl%2BakbVjl4ml1%2BFFIQqPbabPfdc5lKzm9MNSYz0%2FCJMSv9dTITiM9ebJ7TSzcE9TpMgKmUQWbU04TOr%2B8Lq3rAFu8y%2BgatasS7YjvA03KKTCduv9whTsbAN2selsUl9LmZcOhtLpu9yHbRSEydblF%2FsYFQKruNeyWFxKpMa%2BrvMCtqEaRBBDEShJGg33SRKvv5AE17YGBn3H7uoDL2EJlZkC9ozOS5ariDADHCH827czy8r5nfTNh5el%2Fpfx3QH9n7qjH7mhjow0tI1DvmCeLpVA16dRaLIkXaS3Dr0X%2BJX9AgKNoq2Itxkc8jNvRdjh%2FowsUaBfwehB2fHuzbfHArATQNXT%2BayBcy27tU9HA24Lihmnr5QekF%2FncvaOCDUq%2Fqy3rN%2F3xwD5q64ykVJoc6rBzkRE8jZezSma%2FEU2eWjX5uFZzyN905L1X2LhQU7m5%2Fy%2B0j33VjKlUT62beWpvAND4uhPvaTxss%2F9xhT49o7vqzMOv3gMUGOqUBdbQKg6aV0Q6WQPvIro%2B4zS8gSZyqqgOygnyV1ddVINiXIDrKaHu2Fa0E5xLS07bwIdtafRqdzxM9XCj3n%2BF9lEwA%2FSq0vD6mKaKyq9eeJdy06GVU5r4mfwyEmqCFu6L%2FXoNl2m3EvZHh7VTzLu5UlIpCDFeaYb47adiypCjq%2BJmlhgNHoj%2BeaTc%2FuSEu8TPStBPVtnbcctoO1RMCLr1tUMuJeTeY&X-Amz-Signature=2c5ad0a8056bb80c2d6f7e97e3468a96e71035f9a648d27cccc793fb6c1b4d3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLU3OEXZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T091006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIErdUoWz3ItytCXYNYXnIX0lsOqjp67QfwNxAnVxdz8eAiEAngO1XXsvsjnGnMxK%2B4epSlSMGH%2BoNXWhxjE%2F4o62qi4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOcNlQaeNUDNFr1OmCrcA6oHQcAOlNrkwc%2F%2Fuf52YCEZqEEvVhDZqXzp57EKmW24Vmli%2FDOiYuFpY29CO28Txa1CILrVVZsEmt6vu1UMkaml%2B17m9mXLMYF7xdpND6vQ%2FNU7QyHxqe4KTd1m7k2iexJ0QePxgxanzx3qZFoSzt%2Fph3nbqf%2F1iLLsk8E0AkDYtNPskrg8rTFdOypi6%2B7KBxJ1DyTWIqbZ6AmOqj%2F0N%2BSHKh%2BCeN1DMQansPCjmwBKCrhtbvG%2FQnJtwsgaUoeEBtM4ededtExgakxViz5JV6314%2FTsFwjZ%2BjEpz%2FlDxJbrf0PQTZiirBQT9r5RYAICAx%2FNVNkP77jAxG1jzIYkhZVke9dZpWVe1HjKpnw0zVpQelwAekCJua%2B40SU6%2F8Dfu%2FSgqCF1Lll6dJY%2Fzm8A6DDG13rtst2dWYwxu4t2IsYhC4%2BIjDx5UT4AYmjooZJmQj%2BIOIglnvkdHDAZ3p6m2sYJXl73HtsGE366ctFtWRScpdsfmsqi47espOh0J3tZRunT4lzJOlPdVyBeNeagMuY7HH%2BYxlZGl11kewQhfNA8mr8bNEfcl1KzEOj5AO3uctM6dCvSda5UvsmHB51860fGShmh8g2xL1gzhnZdhl9TVhlqmb9uGcd1jKVRMOH3gMUGOqUBq9%2BeM98lEek01S1KrbRPLcGe5BZe4Sh%2BhK2Q5JWkLi0Nz37uJtvjCGgjXdiYAZ1xW1ZW%2BuamW3zzhKTqHDaJHFGY%2FPc4KfPCX5y%2FhNYx4GA5HHqUSU6WGZfMinRX8RPN6uURPXKXZpABBBtmRNTpQ14X%2BDNhoK1eOZHdH5kJu2V4Bf1eVYMaGCZVSI78e5oNtrUQBZEzcm77UTSj1VPL78NLqC5Y&X-Amz-Signature=ba755ef674be8d9a132edd364fcb7c684d9a6c19e4e4da6f63774a01bc1783dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3TSJU6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T091008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDqKDRJYYQMwODrF0Zcv1aTu9hvdePvSp4UKt2Ki162LwIhAJYf5gZ9Lo6XU9ZNDlRICfRo5nkJTsPhtQs9Ux1Zq9y3Kv8DCHEQABoMNjM3NDIzMTgzODA1IgyJX1K6MJetw4Pkijkq3AP%2FYd41bHO68q069FKYprsymn8jsXUa%2FtwHAUG0cLeMjB6Wepl11Q6Ymqw%2BsQnkFMxlP3VNuEJMXYEo9nQ9WyEyU7VC1H8CBHoW2kQjfN%2Fk03a84KPj%2BsvyReDKJwYQDQHPV6N7VUjI4GRiz6q3zmkDfZntrHnhdTl%2FfMMXN9BYnOub%2BmPso3MVCFyxMAerLfI7QWyXY%2FCyDVqCsXbt4MeS6V6BIzBdFF5O%2BFQqeHEe3PoIkoEW12SrhXcBM5QHk77QYRUPXyPIsWv5nb5TnYUl%2Ba%2FuFR74%2F32qcMTjnmkPRVnCt9gJSxTxu8dK%2Fj8syyoIPz7BIoC2x7KjIY%2F8Jp3PqA1evo0btWQrEUmO9TOeqbDD3LoFLX0qddCNHgDtPa5pWpx4qCksZoep7BqZex6xZQhDlNlHHIRr0TWo8OPiPjngMM%2FUOkHPoCARtm%2FHNZ32g%2BhKnBU%2Fe4YIFeUcZvu%2BjkVLgIGOlxthfq4iyySPx8qZRPLFuCf5icEgwl4B0msHFgxJgw3Sb%2BMgFlhUVB8XUgbHLUC7hP%2BTMjbuz4uXyeF7RLfZsue4Yz%2FNTOQ1ZyBkJv%2BuyI9%2F%2F0Vk%2F9aqWbi432yMTx0OeRxEpKAUoFK6SJe1bgrOj0UGtC%2B1djCH%2BIDFBjqkAeK%2FuyanYGhm5YJM8tKQ6J75bs1kw4NT13ufrhTs0%2FCT9bGL76rBrqvH85tXDiQVwdHnaCa4bBPi5SRmvpfvJK5ju84TB3cK6GUi3mtUYn%2BDjMFrYzh2CMHN6wn9iyxBR2aAVam6sUzrfCmfxSznPfjz7LL%2BZiChoVat6X%2BwEVEleutCk6RMj0SJudo8QkJpobUgbRZaj%2Blj3AXrlUDTWsJxSEaB&X-Amz-Signature=547e654a2ff1719bc2a0fbbc477c52626f87384da53ba48e96827309c74bd757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KFDU5WK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T091015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDEIPJVcgzlyyrDciEfYRJxTtYsiAHuZq11C5PRoqJWcwIhAJG2VgwzysXjjOFRZ74olQgW2aAy0yY2rUGdD4Kzh9g6Kv8DCHEQABoMNjM3NDIzMTgzODA1IgzIU5rfaj3mIr9m%2Bocq3APjdQSpFxXtQuze8xvzpKJ4z3dL2g02HQgk2%2Bj4EvaNG5kmDrxpb%2FHkCaVJa8Frvr8E6E7VzTn5UKbOnRj4MMXhD%2BAQyYgMRcYwLx6ZGA1%2B1PoLUlT7iiRyEEao2nutNFq2zS8XcFQGGqDn4Zpk2RqE%2FjQ5XBQ5lGIK4GxObIwo3o%2FuM%2BldhiB0AJ%2F2c%2FwoLenaK28jVzsqR7CORBYYehrzPueH8DKCsGAPuO%2BEk8sKDdOXfpvlPFk0IgE%2Fbli4PLGEpSC0LPrjd9OCGbE74IE5Q1GsHv16CAtzulan1oerSAOad9rSSpAiSdLGvOuAEhxEDW1M5e1ouiM5G6qyuHkxwWLdTGO8I19LrS2O4Ra%2FUMVOFZb1j08moyPjv8fZs4WJpqeeLBG2tCFzOVZnJdl5WGcJMOv%2BvyPCcLWTPSXsRHlAq6iPzyPPpkfXmTkuOh%2B5St6q84nzx0Xhj66wtnFV%2BhZx6ZZo0ri2QQIto5izk6EFhFCXBUsKzrS5kSe%2F3GlRAnP%2F30T2dmFO41l5V8vnc%2FhMfRRQEWAWHlP8EAaJ5kH8%2FAotqkkkC0N10hla2PVyU1KHqEK54jbg0DYOCBqGDPuuEbgf1xCWkI%2Bq9Ys1m%2FqyJH8Cg5nvazyjjTCs%2BIDFBjqkAbveAmoTbm7NUAQhrvWaYoMba8dAIM6iACFo8EQ371aqAbPyGzPRzGXJkWy5t9qbZdBlWx5SQ88rGK%2F2qdkohK8ZFp6kHx77ITWd2VqN%2FdTpxfSn73zqY0XqFvFdS3dRodjevesaAf24G5hdd%2BDytvqezXhlWUQBGOts%2FmbM8PN%2B30ZcaCuYuKV%2B%2FVgh7jhMzGAA9on%2Bd1cAMfJmEgc8GjGcrs01&X-Amz-Signature=bad22ffeb4c84e07110507b69ec764d8db0b77b77c2d5bcc929e2f3a183b4a36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQATZLD6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDFUQViSAoXJhKuZcRKhIFa3ugeTHyhejMLUrwpFsXNaQIgATjNEiQ%2BAVDuG0JB4UB8S7wdUwFmOfaV2JHwNlSXzMwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB%2BrJEW7GMTCs8Pu2CrcAz37%2B5T7VW5TVZ1XGPYiv4BhQSMKRAOlMQgEacZtKfklTOIaDfauwKqUzgig0wYW5t%2BWtUY2soRfSbW8okCxWNgNbMqszMBA7blxNbtqC6mrVxDCUYZ54NqKFH1C7Kh%2BbWAv3JwUFPG3c9JxL%2BKj7PQVF5LBBU%2B95Z1XM3hD0PaZs4CnmfCZTaOM2D3CCVCnuuvfaa7mT9kTM5Oq8hHnq%2BshISNi%2BCAYXyOIEHpjZOJIa5RdqXxlCxe0H9cdaXHSefiMrEZCAGxwxn66JXDCn%2FyF2U8MOy5hGorOEX6k8fBcKitWHGo%2BO%2F6SgJLobV0sgrGEaPFXY3ImQkdLP7K8MTXEXmXspMeDGBvM7s5x9N7JlWmSkSt5bUhwUNaE%2BhA9WgYELILL6lzIBobHN%2BCHM6BVqoyuElz4Gf%2Fk10git3JdV4PKyfkbTlOvQc6kMnGK3C%2FmBChkMCb9D6w19azBWO4ht5aUQR0ORCPixkrWoBBntzz2zCisnBQvxOYFQ1TZIYj6ReGtNrWVy8bt%2FVnPmsf1OoIQDnIMl9d5EcWvGuMSn8NK5EVf1aWesY6zhPpnEFke2xZ8lj256sYPK%2FsmCDU6gMK8A3RxZJS4SeEhHXBZOtIQZIUf0g%2FBFpa0MN%2F3gMUGOqUB5JqJrNweMhUbWZBvUi8pJcXG7oZHDVgwof0fBDddhkQ9%2B3Bu4c3AUufii5873TT9JeVzFEg8DOCZtGhh8nVeQIiIKxg3QXqUDINBOn3OgNvxsb1Ia%2BSLfXO4waO3%2FWt7TEa4%2BVDEwMlatKMCMDi%2FhKXi41eoIlpbV8tx7T%2BRWoH0RYom99iyyz%2BXC3quw%2BlNl7TAkeT5gBB4zmsHlD8pvmO9bNn9&X-Amz-Signature=1261c2381391f653eb0480e8d760fa03d29c2a002563ca0eb842629ebe3ee745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQATZLD6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDFUQViSAoXJhKuZcRKhIFa3ugeTHyhejMLUrwpFsXNaQIgATjNEiQ%2BAVDuG0JB4UB8S7wdUwFmOfaV2JHwNlSXzMwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB%2BrJEW7GMTCs8Pu2CrcAz37%2B5T7VW5TVZ1XGPYiv4BhQSMKRAOlMQgEacZtKfklTOIaDfauwKqUzgig0wYW5t%2BWtUY2soRfSbW8okCxWNgNbMqszMBA7blxNbtqC6mrVxDCUYZ54NqKFH1C7Kh%2BbWAv3JwUFPG3c9JxL%2BKj7PQVF5LBBU%2B95Z1XM3hD0PaZs4CnmfCZTaOM2D3CCVCnuuvfaa7mT9kTM5Oq8hHnq%2BshISNi%2BCAYXyOIEHpjZOJIa5RdqXxlCxe0H9cdaXHSefiMrEZCAGxwxn66JXDCn%2FyF2U8MOy5hGorOEX6k8fBcKitWHGo%2BO%2F6SgJLobV0sgrGEaPFXY3ImQkdLP7K8MTXEXmXspMeDGBvM7s5x9N7JlWmSkSt5bUhwUNaE%2BhA9WgYELILL6lzIBobHN%2BCHM6BVqoyuElz4Gf%2Fk10git3JdV4PKyfkbTlOvQc6kMnGK3C%2FmBChkMCb9D6w19azBWO4ht5aUQR0ORCPixkrWoBBntzz2zCisnBQvxOYFQ1TZIYj6ReGtNrWVy8bt%2FVnPmsf1OoIQDnIMl9d5EcWvGuMSn8NK5EVf1aWesY6zhPpnEFke2xZ8lj256sYPK%2FsmCDU6gMK8A3RxZJS4SeEhHXBZOtIQZIUf0g%2FBFpa0MN%2F3gMUGOqUB5JqJrNweMhUbWZBvUi8pJcXG7oZHDVgwof0fBDddhkQ9%2B3Bu4c3AUufii5873TT9JeVzFEg8DOCZtGhh8nVeQIiIKxg3QXqUDINBOn3OgNvxsb1Ia%2BSLfXO4waO3%2FWt7TEa4%2BVDEwMlatKMCMDi%2FhKXi41eoIlpbV8tx7T%2BRWoH0RYom99iyyz%2BXC3quw%2BlNl7TAkeT5gBB4zmsHlD8pvmO9bNn9&X-Amz-Signature=fa1593d705ce3348c0267ed0b435ef144f1eb1d2eeb85f7af9c2796049f4320a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJQDHJQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCu0XNu2fk2ac9utfrChm%2B3W9RHQ3M%2B4MAg0B5xELcwVgIhAJ33TeyRfuXPN%2FhCHJI%2B9y%2FAvojUX%2Fry5rzXBRZ%2FgB0iKv8DCHEQABoMNjM3NDIzMTgzODA1Igxe9i9SyRzVMttBOVMq3APK2Sxjfl6rV1bgtwBd3krVXdpcOGhj4%2B7JRyLKklWzKEY4B91yikxdQaJsUcmx%2Fk6cDC%2BDAdmN3OG%2FqYhMNbIrmbgPVNlOszMW%2BrJqq8P8mgkybaaD9lsj8MhCgvTUw%2Bbwy%2F73FfMieoUX%2BwrvU01RVQHUOSjie6hFXpqgPPPu%2B69%2FT9taE6vPNUGeCXEn%2BD3AhIkvTVJFkch5%2FSDulKa2tw89YcHz973ynPc1EVGN139gmE%2FztlkWmTIaCRJ0EGPD8ePe7R6RLcYxdnl0ftspAZJczKEsmovbXGzqs%2FDph%2FaEwqyHRUIbnBramV5efPvGiub%2Bxb3GQtfqU9ykCeePYjkcxmC%2Fjv%2BWgYYC5T805EE4Ac%2Bx8zWi6Jh7dt3p6K7w06HjDIc9TvnnpGMoS2Rkg6aAL2mNWvUPFdjrTffQ97l2vuEaO8RUXQQ8Z4zzSfH6n%2BbQ6QO2bS9pc%2BAXIcf1Lll5nbN5dSMJbU%2BqGF12ToOIdRfODxPbqlZi5dMO3WxpxVgeGJXr2r%2FbUgXY2UcyLK%2Fg9JxgkL%2B5m2HHf1p6JnNqZcP6M54%2Bb2hTi7joVn%2FpPlBAI1qgz1PHTFw5BYiLwzMgshQ6vTEcUK7kGTjLCa%2BiuMDdkZ25ve1WzDCS%2BIDFBjqkAVEwoch3dU5ABeVYQVXzKKC8tc%2FEkNlTX8ox8HL%2FYzcFdIzQkemH8oOE45pVb49Gmk%2BWMRkDJmozYXDSBHAeIgOiKlfSmUE8QFBvZKFy3SHC8Z5pVGon9x3sC6Z5PZDh%2FTzSOGa0E0xfrZqur5qT7SoIsOd9Q7KAETsoVgm2eJu0nsY%2Fox%2FUzYtUo5vxyHF5Lc7Abxexkie3%2Fz2p%2Bwh70%2FjqxgwK&X-Amz-Signature=73318698d834b40bda363414c2945628de6fc989901d241d90f501e497ce9c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJQDHJQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCu0XNu2fk2ac9utfrChm%2B3W9RHQ3M%2B4MAg0B5xELcwVgIhAJ33TeyRfuXPN%2FhCHJI%2B9y%2FAvojUX%2Fry5rzXBRZ%2FgB0iKv8DCHEQABoMNjM3NDIzMTgzODA1Igxe9i9SyRzVMttBOVMq3APK2Sxjfl6rV1bgtwBd3krVXdpcOGhj4%2B7JRyLKklWzKEY4B91yikxdQaJsUcmx%2Fk6cDC%2BDAdmN3OG%2FqYhMNbIrmbgPVNlOszMW%2BrJqq8P8mgkybaaD9lsj8MhCgvTUw%2Bbwy%2F73FfMieoUX%2BwrvU01RVQHUOSjie6hFXpqgPPPu%2B69%2FT9taE6vPNUGeCXEn%2BD3AhIkvTVJFkch5%2FSDulKa2tw89YcHz973ynPc1EVGN139gmE%2FztlkWmTIaCRJ0EGPD8ePe7R6RLcYxdnl0ftspAZJczKEsmovbXGzqs%2FDph%2FaEwqyHRUIbnBramV5efPvGiub%2Bxb3GQtfqU9ykCeePYjkcxmC%2Fjv%2BWgYYC5T805EE4Ac%2Bx8zWi6Jh7dt3p6K7w06HjDIc9TvnnpGMoS2Rkg6aAL2mNWvUPFdjrTffQ97l2vuEaO8RUXQQ8Z4zzSfH6n%2BbQ6QO2bS9pc%2BAXIcf1Lll5nbN5dSMJbU%2BqGF12ToOIdRfODxPbqlZi5dMO3WxpxVgeGJXr2r%2FbUgXY2UcyLK%2Fg9JxgkL%2B5m2HHf1p6JnNqZcP6M54%2Bb2hTi7joVn%2FpPlBAI1qgz1PHTFw5BYiLwzMgshQ6vTEcUK7kGTjLCa%2BiuMDdkZ25ve1WzDCS%2BIDFBjqkAVEwoch3dU5ABeVYQVXzKKC8tc%2FEkNlTX8ox8HL%2FYzcFdIzQkemH8oOE45pVb49Gmk%2BWMRkDJmozYXDSBHAeIgOiKlfSmUE8QFBvZKFy3SHC8Z5pVGon9x3sC6Z5PZDh%2FTzSOGa0E0xfrZqur5qT7SoIsOd9Q7KAETsoVgm2eJu0nsY%2Fox%2FUzYtUo5vxyHF5Lc7Abxexkie3%2Fz2p%2Bwh70%2FjqxgwK&X-Amz-Signature=2530d438800bd04c94d85b5cc762fc3b04186131a19fb68132fe943fe83dabdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJQDHJQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCu0XNu2fk2ac9utfrChm%2B3W9RHQ3M%2B4MAg0B5xELcwVgIhAJ33TeyRfuXPN%2FhCHJI%2B9y%2FAvojUX%2Fry5rzXBRZ%2FgB0iKv8DCHEQABoMNjM3NDIzMTgzODA1Igxe9i9SyRzVMttBOVMq3APK2Sxjfl6rV1bgtwBd3krVXdpcOGhj4%2B7JRyLKklWzKEY4B91yikxdQaJsUcmx%2Fk6cDC%2BDAdmN3OG%2FqYhMNbIrmbgPVNlOszMW%2BrJqq8P8mgkybaaD9lsj8MhCgvTUw%2Bbwy%2F73FfMieoUX%2BwrvU01RVQHUOSjie6hFXpqgPPPu%2B69%2FT9taE6vPNUGeCXEn%2BD3AhIkvTVJFkch5%2FSDulKa2tw89YcHz973ynPc1EVGN139gmE%2FztlkWmTIaCRJ0EGPD8ePe7R6RLcYxdnl0ftspAZJczKEsmovbXGzqs%2FDph%2FaEwqyHRUIbnBramV5efPvGiub%2Bxb3GQtfqU9ykCeePYjkcxmC%2Fjv%2BWgYYC5T805EE4Ac%2Bx8zWi6Jh7dt3p6K7w06HjDIc9TvnnpGMoS2Rkg6aAL2mNWvUPFdjrTffQ97l2vuEaO8RUXQQ8Z4zzSfH6n%2BbQ6QO2bS9pc%2BAXIcf1Lll5nbN5dSMJbU%2BqGF12ToOIdRfODxPbqlZi5dMO3WxpxVgeGJXr2r%2FbUgXY2UcyLK%2Fg9JxgkL%2B5m2HHf1p6JnNqZcP6M54%2Bb2hTi7joVn%2FpPlBAI1qgz1PHTFw5BYiLwzMgshQ6vTEcUK7kGTjLCa%2BiuMDdkZ25ve1WzDCS%2BIDFBjqkAVEwoch3dU5ABeVYQVXzKKC8tc%2FEkNlTX8ox8HL%2FYzcFdIzQkemH8oOE45pVb49Gmk%2BWMRkDJmozYXDSBHAeIgOiKlfSmUE8QFBvZKFy3SHC8Z5pVGon9x3sC6Z5PZDh%2FTzSOGa0E0xfrZqur5qT7SoIsOd9Q7KAETsoVgm2eJu0nsY%2Fox%2FUzYtUo5vxyHF5Lc7Abxexkie3%2Fz2p%2Bwh70%2FjqxgwK&X-Amz-Signature=1af28d97e83e853655190950d5223e34213eabc85b7c4469442985c6b156bf04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJQDHJQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCu0XNu2fk2ac9utfrChm%2B3W9RHQ3M%2B4MAg0B5xELcwVgIhAJ33TeyRfuXPN%2FhCHJI%2B9y%2FAvojUX%2Fry5rzXBRZ%2FgB0iKv8DCHEQABoMNjM3NDIzMTgzODA1Igxe9i9SyRzVMttBOVMq3APK2Sxjfl6rV1bgtwBd3krVXdpcOGhj4%2B7JRyLKklWzKEY4B91yikxdQaJsUcmx%2Fk6cDC%2BDAdmN3OG%2FqYhMNbIrmbgPVNlOszMW%2BrJqq8P8mgkybaaD9lsj8MhCgvTUw%2Bbwy%2F73FfMieoUX%2BwrvU01RVQHUOSjie6hFXpqgPPPu%2B69%2FT9taE6vPNUGeCXEn%2BD3AhIkvTVJFkch5%2FSDulKa2tw89YcHz973ynPc1EVGN139gmE%2FztlkWmTIaCRJ0EGPD8ePe7R6RLcYxdnl0ftspAZJczKEsmovbXGzqs%2FDph%2FaEwqyHRUIbnBramV5efPvGiub%2Bxb3GQtfqU9ykCeePYjkcxmC%2Fjv%2BWgYYC5T805EE4Ac%2Bx8zWi6Jh7dt3p6K7w06HjDIc9TvnnpGMoS2Rkg6aAL2mNWvUPFdjrTffQ97l2vuEaO8RUXQQ8Z4zzSfH6n%2BbQ6QO2bS9pc%2BAXIcf1Lll5nbN5dSMJbU%2BqGF12ToOIdRfODxPbqlZi5dMO3WxpxVgeGJXr2r%2FbUgXY2UcyLK%2Fg9JxgkL%2B5m2HHf1p6JnNqZcP6M54%2Bb2hTi7joVn%2FpPlBAI1qgz1PHTFw5BYiLwzMgshQ6vTEcUK7kGTjLCa%2BiuMDdkZ25ve1WzDCS%2BIDFBjqkAVEwoch3dU5ABeVYQVXzKKC8tc%2FEkNlTX8ox8HL%2FYzcFdIzQkemH8oOE45pVb49Gmk%2BWMRkDJmozYXDSBHAeIgOiKlfSmUE8QFBvZKFy3SHC8Z5pVGon9x3sC6Z5PZDh%2FTzSOGa0E0xfrZqur5qT7SoIsOd9Q7KAETsoVgm2eJu0nsY%2Fox%2FUzYtUo5vxyHF5Lc7Abxexkie3%2Fz2p%2Bwh70%2FjqxgwK&X-Amz-Signature=c6425a683e18e4c781eff6669b1a805c1d721d7845299a14d14af922f354481d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJQDHJQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCu0XNu2fk2ac9utfrChm%2B3W9RHQ3M%2B4MAg0B5xELcwVgIhAJ33TeyRfuXPN%2FhCHJI%2B9y%2FAvojUX%2Fry5rzXBRZ%2FgB0iKv8DCHEQABoMNjM3NDIzMTgzODA1Igxe9i9SyRzVMttBOVMq3APK2Sxjfl6rV1bgtwBd3krVXdpcOGhj4%2B7JRyLKklWzKEY4B91yikxdQaJsUcmx%2Fk6cDC%2BDAdmN3OG%2FqYhMNbIrmbgPVNlOszMW%2BrJqq8P8mgkybaaD9lsj8MhCgvTUw%2Bbwy%2F73FfMieoUX%2BwrvU01RVQHUOSjie6hFXpqgPPPu%2B69%2FT9taE6vPNUGeCXEn%2BD3AhIkvTVJFkch5%2FSDulKa2tw89YcHz973ynPc1EVGN139gmE%2FztlkWmTIaCRJ0EGPD8ePe7R6RLcYxdnl0ftspAZJczKEsmovbXGzqs%2FDph%2FaEwqyHRUIbnBramV5efPvGiub%2Bxb3GQtfqU9ykCeePYjkcxmC%2Fjv%2BWgYYC5T805EE4Ac%2Bx8zWi6Jh7dt3p6K7w06HjDIc9TvnnpGMoS2Rkg6aAL2mNWvUPFdjrTffQ97l2vuEaO8RUXQQ8Z4zzSfH6n%2BbQ6QO2bS9pc%2BAXIcf1Lll5nbN5dSMJbU%2BqGF12ToOIdRfODxPbqlZi5dMO3WxpxVgeGJXr2r%2FbUgXY2UcyLK%2Fg9JxgkL%2B5m2HHf1p6JnNqZcP6M54%2Bb2hTi7joVn%2FpPlBAI1qgz1PHTFw5BYiLwzMgshQ6vTEcUK7kGTjLCa%2BiuMDdkZ25ve1WzDCS%2BIDFBjqkAVEwoch3dU5ABeVYQVXzKKC8tc%2FEkNlTX8ox8HL%2FYzcFdIzQkemH8oOE45pVb49Gmk%2BWMRkDJmozYXDSBHAeIgOiKlfSmUE8QFBvZKFy3SHC8Z5pVGon9x3sC6Z5PZDh%2FTzSOGa0E0xfrZqur5qT7SoIsOd9Q7KAETsoVgm2eJu0nsY%2Fox%2FUzYtUo5vxyHF5Lc7Abxexkie3%2Fz2p%2Bwh70%2FjqxgwK&X-Amz-Signature=b1cab5cb8f109cf214a5a6b463e7d4f7a363b1f425c21129de9c60bbc082cf42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJQDHJQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCu0XNu2fk2ac9utfrChm%2B3W9RHQ3M%2B4MAg0B5xELcwVgIhAJ33TeyRfuXPN%2FhCHJI%2B9y%2FAvojUX%2Fry5rzXBRZ%2FgB0iKv8DCHEQABoMNjM3NDIzMTgzODA1Igxe9i9SyRzVMttBOVMq3APK2Sxjfl6rV1bgtwBd3krVXdpcOGhj4%2B7JRyLKklWzKEY4B91yikxdQaJsUcmx%2Fk6cDC%2BDAdmN3OG%2FqYhMNbIrmbgPVNlOszMW%2BrJqq8P8mgkybaaD9lsj8MhCgvTUw%2Bbwy%2F73FfMieoUX%2BwrvU01RVQHUOSjie6hFXpqgPPPu%2B69%2FT9taE6vPNUGeCXEn%2BD3AhIkvTVJFkch5%2FSDulKa2tw89YcHz973ynPc1EVGN139gmE%2FztlkWmTIaCRJ0EGPD8ePe7R6RLcYxdnl0ftspAZJczKEsmovbXGzqs%2FDph%2FaEwqyHRUIbnBramV5efPvGiub%2Bxb3GQtfqU9ykCeePYjkcxmC%2Fjv%2BWgYYC5T805EE4Ac%2Bx8zWi6Jh7dt3p6K7w06HjDIc9TvnnpGMoS2Rkg6aAL2mNWvUPFdjrTffQ97l2vuEaO8RUXQQ8Z4zzSfH6n%2BbQ6QO2bS9pc%2BAXIcf1Lll5nbN5dSMJbU%2BqGF12ToOIdRfODxPbqlZi5dMO3WxpxVgeGJXr2r%2FbUgXY2UcyLK%2Fg9JxgkL%2B5m2HHf1p6JnNqZcP6M54%2Bb2hTi7joVn%2FpPlBAI1qgz1PHTFw5BYiLwzMgshQ6vTEcUK7kGTjLCa%2BiuMDdkZ25ve1WzDCS%2BIDFBjqkAVEwoch3dU5ABeVYQVXzKKC8tc%2FEkNlTX8ox8HL%2FYzcFdIzQkemH8oOE45pVb49Gmk%2BWMRkDJmozYXDSBHAeIgOiKlfSmUE8QFBvZKFy3SHC8Z5pVGon9x3sC6Z5PZDh%2FTzSOGa0E0xfrZqur5qT7SoIsOd9Q7KAETsoVgm2eJu0nsY%2Fox%2FUzYtUo5vxyHF5Lc7Abxexkie3%2Fz2p%2Bwh70%2FjqxgwK&X-Amz-Signature=7fa5d7322456708b16ef6b9d53617017b0438218ce54bf076e0e0ad1e12755e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJQDHJQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCu0XNu2fk2ac9utfrChm%2B3W9RHQ3M%2B4MAg0B5xELcwVgIhAJ33TeyRfuXPN%2FhCHJI%2B9y%2FAvojUX%2Fry5rzXBRZ%2FgB0iKv8DCHEQABoMNjM3NDIzMTgzODA1Igxe9i9SyRzVMttBOVMq3APK2Sxjfl6rV1bgtwBd3krVXdpcOGhj4%2B7JRyLKklWzKEY4B91yikxdQaJsUcmx%2Fk6cDC%2BDAdmN3OG%2FqYhMNbIrmbgPVNlOszMW%2BrJqq8P8mgkybaaD9lsj8MhCgvTUw%2Bbwy%2F73FfMieoUX%2BwrvU01RVQHUOSjie6hFXpqgPPPu%2B69%2FT9taE6vPNUGeCXEn%2BD3AhIkvTVJFkch5%2FSDulKa2tw89YcHz973ynPc1EVGN139gmE%2FztlkWmTIaCRJ0EGPD8ePe7R6RLcYxdnl0ftspAZJczKEsmovbXGzqs%2FDph%2FaEwqyHRUIbnBramV5efPvGiub%2Bxb3GQtfqU9ykCeePYjkcxmC%2Fjv%2BWgYYC5T805EE4Ac%2Bx8zWi6Jh7dt3p6K7w06HjDIc9TvnnpGMoS2Rkg6aAL2mNWvUPFdjrTffQ97l2vuEaO8RUXQQ8Z4zzSfH6n%2BbQ6QO2bS9pc%2BAXIcf1Lll5nbN5dSMJbU%2BqGF12ToOIdRfODxPbqlZi5dMO3WxpxVgeGJXr2r%2FbUgXY2UcyLK%2Fg9JxgkL%2B5m2HHf1p6JnNqZcP6M54%2Bb2hTi7joVn%2FpPlBAI1qgz1PHTFw5BYiLwzMgshQ6vTEcUK7kGTjLCa%2BiuMDdkZ25ve1WzDCS%2BIDFBjqkAVEwoch3dU5ABeVYQVXzKKC8tc%2FEkNlTX8ox8HL%2FYzcFdIzQkemH8oOE45pVb49Gmk%2BWMRkDJmozYXDSBHAeIgOiKlfSmUE8QFBvZKFy3SHC8Z5pVGon9x3sC6Z5PZDh%2FTzSOGa0E0xfrZqur5qT7SoIsOd9Q7KAETsoVgm2eJu0nsY%2Fox%2FUzYtUo5vxyHF5Lc7Abxexkie3%2Fz2p%2Bwh70%2FjqxgwK&X-Amz-Signature=1af28d97e83e853655190950d5223e34213eabc85b7c4469442985c6b156bf04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJQDHJQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCu0XNu2fk2ac9utfrChm%2B3W9RHQ3M%2B4MAg0B5xELcwVgIhAJ33TeyRfuXPN%2FhCHJI%2B9y%2FAvojUX%2Fry5rzXBRZ%2FgB0iKv8DCHEQABoMNjM3NDIzMTgzODA1Igxe9i9SyRzVMttBOVMq3APK2Sxjfl6rV1bgtwBd3krVXdpcOGhj4%2B7JRyLKklWzKEY4B91yikxdQaJsUcmx%2Fk6cDC%2BDAdmN3OG%2FqYhMNbIrmbgPVNlOszMW%2BrJqq8P8mgkybaaD9lsj8MhCgvTUw%2Bbwy%2F73FfMieoUX%2BwrvU01RVQHUOSjie6hFXpqgPPPu%2B69%2FT9taE6vPNUGeCXEn%2BD3AhIkvTVJFkch5%2FSDulKa2tw89YcHz973ynPc1EVGN139gmE%2FztlkWmTIaCRJ0EGPD8ePe7R6RLcYxdnl0ftspAZJczKEsmovbXGzqs%2FDph%2FaEwqyHRUIbnBramV5efPvGiub%2Bxb3GQtfqU9ykCeePYjkcxmC%2Fjv%2BWgYYC5T805EE4Ac%2Bx8zWi6Jh7dt3p6K7w06HjDIc9TvnnpGMoS2Rkg6aAL2mNWvUPFdjrTffQ97l2vuEaO8RUXQQ8Z4zzSfH6n%2BbQ6QO2bS9pc%2BAXIcf1Lll5nbN5dSMJbU%2BqGF12ToOIdRfODxPbqlZi5dMO3WxpxVgeGJXr2r%2FbUgXY2UcyLK%2Fg9JxgkL%2B5m2HHf1p6JnNqZcP6M54%2Bb2hTi7joVn%2FpPlBAI1qgz1PHTFw5BYiLwzMgshQ6vTEcUK7kGTjLCa%2BiuMDdkZ25ve1WzDCS%2BIDFBjqkAVEwoch3dU5ABeVYQVXzKKC8tc%2FEkNlTX8ox8HL%2FYzcFdIzQkemH8oOE45pVb49Gmk%2BWMRkDJmozYXDSBHAeIgOiKlfSmUE8QFBvZKFy3SHC8Z5pVGon9x3sC6Z5PZDh%2FTzSOGa0E0xfrZqur5qT7SoIsOd9Q7KAETsoVgm2eJu0nsY%2Fox%2FUzYtUo5vxyHF5Lc7Abxexkie3%2Fz2p%2Bwh70%2FjqxgwK&X-Amz-Signature=04972aa2e47400f0fae151c3f0fb062e4988ddbe5617c0cb2acde612dec7a626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJQDHJQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCu0XNu2fk2ac9utfrChm%2B3W9RHQ3M%2B4MAg0B5xELcwVgIhAJ33TeyRfuXPN%2FhCHJI%2B9y%2FAvojUX%2Fry5rzXBRZ%2FgB0iKv8DCHEQABoMNjM3NDIzMTgzODA1Igxe9i9SyRzVMttBOVMq3APK2Sxjfl6rV1bgtwBd3krVXdpcOGhj4%2B7JRyLKklWzKEY4B91yikxdQaJsUcmx%2Fk6cDC%2BDAdmN3OG%2FqYhMNbIrmbgPVNlOszMW%2BrJqq8P8mgkybaaD9lsj8MhCgvTUw%2Bbwy%2F73FfMieoUX%2BwrvU01RVQHUOSjie6hFXpqgPPPu%2B69%2FT9taE6vPNUGeCXEn%2BD3AhIkvTVJFkch5%2FSDulKa2tw89YcHz973ynPc1EVGN139gmE%2FztlkWmTIaCRJ0EGPD8ePe7R6RLcYxdnl0ftspAZJczKEsmovbXGzqs%2FDph%2FaEwqyHRUIbnBramV5efPvGiub%2Bxb3GQtfqU9ykCeePYjkcxmC%2Fjv%2BWgYYC5T805EE4Ac%2Bx8zWi6Jh7dt3p6K7w06HjDIc9TvnnpGMoS2Rkg6aAL2mNWvUPFdjrTffQ97l2vuEaO8RUXQQ8Z4zzSfH6n%2BbQ6QO2bS9pc%2BAXIcf1Lll5nbN5dSMJbU%2BqGF12ToOIdRfODxPbqlZi5dMO3WxpxVgeGJXr2r%2FbUgXY2UcyLK%2Fg9JxgkL%2B5m2HHf1p6JnNqZcP6M54%2Bb2hTi7joVn%2FpPlBAI1qgz1PHTFw5BYiLwzMgshQ6vTEcUK7kGTjLCa%2BiuMDdkZ25ve1WzDCS%2BIDFBjqkAVEwoch3dU5ABeVYQVXzKKC8tc%2FEkNlTX8ox8HL%2FYzcFdIzQkemH8oOE45pVb49Gmk%2BWMRkDJmozYXDSBHAeIgOiKlfSmUE8QFBvZKFy3SHC8Z5pVGon9x3sC6Z5PZDh%2FTzSOGa0E0xfrZqur5qT7SoIsOd9Q7KAETsoVgm2eJu0nsY%2Fox%2FUzYtUo5vxyHF5Lc7Abxexkie3%2Fz2p%2Bwh70%2FjqxgwK&X-Amz-Signature=7b94606386163b035d1e7548b5095c3eafc3c3b7d82700b380c7f4a0bafe823f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJQDHJQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCu0XNu2fk2ac9utfrChm%2B3W9RHQ3M%2B4MAg0B5xELcwVgIhAJ33TeyRfuXPN%2FhCHJI%2B9y%2FAvojUX%2Fry5rzXBRZ%2FgB0iKv8DCHEQABoMNjM3NDIzMTgzODA1Igxe9i9SyRzVMttBOVMq3APK2Sxjfl6rV1bgtwBd3krVXdpcOGhj4%2B7JRyLKklWzKEY4B91yikxdQaJsUcmx%2Fk6cDC%2BDAdmN3OG%2FqYhMNbIrmbgPVNlOszMW%2BrJqq8P8mgkybaaD9lsj8MhCgvTUw%2Bbwy%2F73FfMieoUX%2BwrvU01RVQHUOSjie6hFXpqgPPPu%2B69%2FT9taE6vPNUGeCXEn%2BD3AhIkvTVJFkch5%2FSDulKa2tw89YcHz973ynPc1EVGN139gmE%2FztlkWmTIaCRJ0EGPD8ePe7R6RLcYxdnl0ftspAZJczKEsmovbXGzqs%2FDph%2FaEwqyHRUIbnBramV5efPvGiub%2Bxb3GQtfqU9ykCeePYjkcxmC%2Fjv%2BWgYYC5T805EE4Ac%2Bx8zWi6Jh7dt3p6K7w06HjDIc9TvnnpGMoS2Rkg6aAL2mNWvUPFdjrTffQ97l2vuEaO8RUXQQ8Z4zzSfH6n%2BbQ6QO2bS9pc%2BAXIcf1Lll5nbN5dSMJbU%2BqGF12ToOIdRfODxPbqlZi5dMO3WxpxVgeGJXr2r%2FbUgXY2UcyLK%2Fg9JxgkL%2B5m2HHf1p6JnNqZcP6M54%2Bb2hTi7joVn%2FpPlBAI1qgz1PHTFw5BYiLwzMgshQ6vTEcUK7kGTjLCa%2BiuMDdkZ25ve1WzDCS%2BIDFBjqkAVEwoch3dU5ABeVYQVXzKKC8tc%2FEkNlTX8ox8HL%2FYzcFdIzQkemH8oOE45pVb49Gmk%2BWMRkDJmozYXDSBHAeIgOiKlfSmUE8QFBvZKFy3SHC8Z5pVGon9x3sC6Z5PZDh%2FTzSOGa0E0xfrZqur5qT7SoIsOd9Q7KAETsoVgm2eJu0nsY%2Fox%2FUzYtUo5vxyHF5Lc7Abxexkie3%2Fz2p%2Bwh70%2FjqxgwK&X-Amz-Signature=f533172ed229d78282d6816fd6c4ce26b261acd2f05a20e5dd4dc605c17eb01f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
