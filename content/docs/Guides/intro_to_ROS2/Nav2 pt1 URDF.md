---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-16T17:51:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-16T17:51:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SCZLEU%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDVhTPc8LMFwI9hvJ%2Bwh38vmm%2Bl1oEp5LOOwfYtcA6%2FEAiEAjaSCcNkqHXdvFQwfztkbHBhyMNI%2FXbJ%2FF3NgW%2B2GkG4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Idysq1uptL%2BN2QircA6rZD5WeAAs7hq0wjUSSXxj4p0q1zJFZiDJhiCAyJozxxytBOeQlLquKpXvrQ6nZ0rahlo2eycGDHH3kuX1OMrAL8f56Zq3CIx7RVM3I%2BGbmWXR7zXduTZL4dpNd2nGDStKvaIfmZK8%2BXZzRwWVNNOlyNwPvGy28Lk5yiT6zRhnZ1TqrmebTBdQPnZmhHajK6Mv9lw6BAhSXmbiVMLhLZOZLmZG%2F2VNIbySCtytAIaKLmVxFJhdD5%2FwhViegvI%2BKxI2s3Vd4I7yDcqtGI9YjRhC%2F4MNTwan0kkxivJ3LXmgjyPEFRr%2F7OYxYN14lg6cULH1xmCQunj4dH0gNv8I7r%2FhQwF%2BjVCq0eIoWkEPTgqEZ9xMyLz3%2B3wsdb789fUZo9Zu2qBj5JRFpBFkfdPUejWtsjsgsm7eYCPSv7AR18Eqb%2BFSyUniMR8vT3YR1jQIdBMI2tsnsilt7xOXkoIA2wfCh6UmZE%2FdGbiR9FL%2FDWRqajYFyVmIM4CaKDaofIUalo2RDA%2F%2BnyEeHcec0VD7xQsDCOwcAURLdNSJiuHHv7N4iZmXo4g56NNnrGa%2BFUnurz8nAfzlr0jujO%2BT9zy21ZTbcMs3Urrn%2FVdhYXUzMtcu3%2F5I8Bq%2B0gTfpp28SMP%2FqicUGOqUBy1CdzlYOOvnDUWYM7mzwhH%2BdF5212%2BtSLUQJEgG3OS5nEid7khGx48yuTxMnKPrZ87jH0aRbf9zgEHvw2%2BKudDyQF482BcmmjWuxfZenyrIrd25E9rmHBWuktjN8J%2FztXmCMyPRVrgztEJVvA4QqCboQCUdSgRVIBRHFYOsPxa3z%2Be7HVBP2bzPX1TODH8MaC9J5F4x9yfmjwKUlDg7GkZwUgrEu&X-Amz-Signature=5a0e7b0cdd1e44b8058020cae3c277ea88394bfd8a442d307ed126da449d5ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SCZLEU%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDVhTPc8LMFwI9hvJ%2Bwh38vmm%2Bl1oEp5LOOwfYtcA6%2FEAiEAjaSCcNkqHXdvFQwfztkbHBhyMNI%2FXbJ%2FF3NgW%2B2GkG4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Idysq1uptL%2BN2QircA6rZD5WeAAs7hq0wjUSSXxj4p0q1zJFZiDJhiCAyJozxxytBOeQlLquKpXvrQ6nZ0rahlo2eycGDHH3kuX1OMrAL8f56Zq3CIx7RVM3I%2BGbmWXR7zXduTZL4dpNd2nGDStKvaIfmZK8%2BXZzRwWVNNOlyNwPvGy28Lk5yiT6zRhnZ1TqrmebTBdQPnZmhHajK6Mv9lw6BAhSXmbiVMLhLZOZLmZG%2F2VNIbySCtytAIaKLmVxFJhdD5%2FwhViegvI%2BKxI2s3Vd4I7yDcqtGI9YjRhC%2F4MNTwan0kkxivJ3LXmgjyPEFRr%2F7OYxYN14lg6cULH1xmCQunj4dH0gNv8I7r%2FhQwF%2BjVCq0eIoWkEPTgqEZ9xMyLz3%2B3wsdb789fUZo9Zu2qBj5JRFpBFkfdPUejWtsjsgsm7eYCPSv7AR18Eqb%2BFSyUniMR8vT3YR1jQIdBMI2tsnsilt7xOXkoIA2wfCh6UmZE%2FdGbiR9FL%2FDWRqajYFyVmIM4CaKDaofIUalo2RDA%2F%2BnyEeHcec0VD7xQsDCOwcAURLdNSJiuHHv7N4iZmXo4g56NNnrGa%2BFUnurz8nAfzlr0jujO%2BT9zy21ZTbcMs3Urrn%2FVdhYXUzMtcu3%2F5I8Bq%2B0gTfpp28SMP%2FqicUGOqUBy1CdzlYOOvnDUWYM7mzwhH%2BdF5212%2BtSLUQJEgG3OS5nEid7khGx48yuTxMnKPrZ87jH0aRbf9zgEHvw2%2BKudDyQF482BcmmjWuxfZenyrIrd25E9rmHBWuktjN8J%2FztXmCMyPRVrgztEJVvA4QqCboQCUdSgRVIBRHFYOsPxa3z%2Be7HVBP2bzPX1TODH8MaC9J5F4x9yfmjwKUlDg7GkZwUgrEu&X-Amz-Signature=423d13b12f50381968a3625c3bbf6ad49c126f496184071e5b6799aac0b3fd3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SCZLEU%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDVhTPc8LMFwI9hvJ%2Bwh38vmm%2Bl1oEp5LOOwfYtcA6%2FEAiEAjaSCcNkqHXdvFQwfztkbHBhyMNI%2FXbJ%2FF3NgW%2B2GkG4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Idysq1uptL%2BN2QircA6rZD5WeAAs7hq0wjUSSXxj4p0q1zJFZiDJhiCAyJozxxytBOeQlLquKpXvrQ6nZ0rahlo2eycGDHH3kuX1OMrAL8f56Zq3CIx7RVM3I%2BGbmWXR7zXduTZL4dpNd2nGDStKvaIfmZK8%2BXZzRwWVNNOlyNwPvGy28Lk5yiT6zRhnZ1TqrmebTBdQPnZmhHajK6Mv9lw6BAhSXmbiVMLhLZOZLmZG%2F2VNIbySCtytAIaKLmVxFJhdD5%2FwhViegvI%2BKxI2s3Vd4I7yDcqtGI9YjRhC%2F4MNTwan0kkxivJ3LXmgjyPEFRr%2F7OYxYN14lg6cULH1xmCQunj4dH0gNv8I7r%2FhQwF%2BjVCq0eIoWkEPTgqEZ9xMyLz3%2B3wsdb789fUZo9Zu2qBj5JRFpBFkfdPUejWtsjsgsm7eYCPSv7AR18Eqb%2BFSyUniMR8vT3YR1jQIdBMI2tsnsilt7xOXkoIA2wfCh6UmZE%2FdGbiR9FL%2FDWRqajYFyVmIM4CaKDaofIUalo2RDA%2F%2BnyEeHcec0VD7xQsDCOwcAURLdNSJiuHHv7N4iZmXo4g56NNnrGa%2BFUnurz8nAfzlr0jujO%2BT9zy21ZTbcMs3Urrn%2FVdhYXUzMtcu3%2F5I8Bq%2B0gTfpp28SMP%2FqicUGOqUBy1CdzlYOOvnDUWYM7mzwhH%2BdF5212%2BtSLUQJEgG3OS5nEid7khGx48yuTxMnKPrZ87jH0aRbf9zgEHvw2%2BKudDyQF482BcmmjWuxfZenyrIrd25E9rmHBWuktjN8J%2FztXmCMyPRVrgztEJVvA4QqCboQCUdSgRVIBRHFYOsPxa3z%2Be7HVBP2bzPX1TODH8MaC9J5F4x9yfmjwKUlDg7GkZwUgrEu&X-Amz-Signature=2b2e833646d9bce0e280c4a506049d90181e04fa327eb6bade12fdf87d2f9b73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SCZLEU%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDVhTPc8LMFwI9hvJ%2Bwh38vmm%2Bl1oEp5LOOwfYtcA6%2FEAiEAjaSCcNkqHXdvFQwfztkbHBhyMNI%2FXbJ%2FF3NgW%2B2GkG4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Idysq1uptL%2BN2QircA6rZD5WeAAs7hq0wjUSSXxj4p0q1zJFZiDJhiCAyJozxxytBOeQlLquKpXvrQ6nZ0rahlo2eycGDHH3kuX1OMrAL8f56Zq3CIx7RVM3I%2BGbmWXR7zXduTZL4dpNd2nGDStKvaIfmZK8%2BXZzRwWVNNOlyNwPvGy28Lk5yiT6zRhnZ1TqrmebTBdQPnZmhHajK6Mv9lw6BAhSXmbiVMLhLZOZLmZG%2F2VNIbySCtytAIaKLmVxFJhdD5%2FwhViegvI%2BKxI2s3Vd4I7yDcqtGI9YjRhC%2F4MNTwan0kkxivJ3LXmgjyPEFRr%2F7OYxYN14lg6cULH1xmCQunj4dH0gNv8I7r%2FhQwF%2BjVCq0eIoWkEPTgqEZ9xMyLz3%2B3wsdb789fUZo9Zu2qBj5JRFpBFkfdPUejWtsjsgsm7eYCPSv7AR18Eqb%2BFSyUniMR8vT3YR1jQIdBMI2tsnsilt7xOXkoIA2wfCh6UmZE%2FdGbiR9FL%2FDWRqajYFyVmIM4CaKDaofIUalo2RDA%2F%2BnyEeHcec0VD7xQsDCOwcAURLdNSJiuHHv7N4iZmXo4g56NNnrGa%2BFUnurz8nAfzlr0jujO%2BT9zy21ZTbcMs3Urrn%2FVdhYXUzMtcu3%2F5I8Bq%2B0gTfpp28SMP%2FqicUGOqUBy1CdzlYOOvnDUWYM7mzwhH%2BdF5212%2BtSLUQJEgG3OS5nEid7khGx48yuTxMnKPrZ87jH0aRbf9zgEHvw2%2BKudDyQF482BcmmjWuxfZenyrIrd25E9rmHBWuktjN8J%2FztXmCMyPRVrgztEJVvA4QqCboQCUdSgRVIBRHFYOsPxa3z%2Be7HVBP2bzPX1TODH8MaC9J5F4x9yfmjwKUlDg7GkZwUgrEu&X-Amz-Signature=6c78af67c9fca7671ae4fd09342a1bd94c329e0593303dd663e95281c54f033a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SCZLEU%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDVhTPc8LMFwI9hvJ%2Bwh38vmm%2Bl1oEp5LOOwfYtcA6%2FEAiEAjaSCcNkqHXdvFQwfztkbHBhyMNI%2FXbJ%2FF3NgW%2B2GkG4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Idysq1uptL%2BN2QircA6rZD5WeAAs7hq0wjUSSXxj4p0q1zJFZiDJhiCAyJozxxytBOeQlLquKpXvrQ6nZ0rahlo2eycGDHH3kuX1OMrAL8f56Zq3CIx7RVM3I%2BGbmWXR7zXduTZL4dpNd2nGDStKvaIfmZK8%2BXZzRwWVNNOlyNwPvGy28Lk5yiT6zRhnZ1TqrmebTBdQPnZmhHajK6Mv9lw6BAhSXmbiVMLhLZOZLmZG%2F2VNIbySCtytAIaKLmVxFJhdD5%2FwhViegvI%2BKxI2s3Vd4I7yDcqtGI9YjRhC%2F4MNTwan0kkxivJ3LXmgjyPEFRr%2F7OYxYN14lg6cULH1xmCQunj4dH0gNv8I7r%2FhQwF%2BjVCq0eIoWkEPTgqEZ9xMyLz3%2B3wsdb789fUZo9Zu2qBj5JRFpBFkfdPUejWtsjsgsm7eYCPSv7AR18Eqb%2BFSyUniMR8vT3YR1jQIdBMI2tsnsilt7xOXkoIA2wfCh6UmZE%2FdGbiR9FL%2FDWRqajYFyVmIM4CaKDaofIUalo2RDA%2F%2BnyEeHcec0VD7xQsDCOwcAURLdNSJiuHHv7N4iZmXo4g56NNnrGa%2BFUnurz8nAfzlr0jujO%2BT9zy21ZTbcMs3Urrn%2FVdhYXUzMtcu3%2F5I8Bq%2B0gTfpp28SMP%2FqicUGOqUBy1CdzlYOOvnDUWYM7mzwhH%2BdF5212%2BtSLUQJEgG3OS5nEid7khGx48yuTxMnKPrZ87jH0aRbf9zgEHvw2%2BKudDyQF482BcmmjWuxfZenyrIrd25E9rmHBWuktjN8J%2FztXmCMyPRVrgztEJVvA4QqCboQCUdSgRVIBRHFYOsPxa3z%2Be7HVBP2bzPX1TODH8MaC9J5F4x9yfmjwKUlDg7GkZwUgrEu&X-Amz-Signature=cf251cd52e10e1ad0debb5904989d7aaa5ed99414ab180da361bbad9d4d4fd04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SCZLEU%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDVhTPc8LMFwI9hvJ%2Bwh38vmm%2Bl1oEp5LOOwfYtcA6%2FEAiEAjaSCcNkqHXdvFQwfztkbHBhyMNI%2FXbJ%2FF3NgW%2B2GkG4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Idysq1uptL%2BN2QircA6rZD5WeAAs7hq0wjUSSXxj4p0q1zJFZiDJhiCAyJozxxytBOeQlLquKpXvrQ6nZ0rahlo2eycGDHH3kuX1OMrAL8f56Zq3CIx7RVM3I%2BGbmWXR7zXduTZL4dpNd2nGDStKvaIfmZK8%2BXZzRwWVNNOlyNwPvGy28Lk5yiT6zRhnZ1TqrmebTBdQPnZmhHajK6Mv9lw6BAhSXmbiVMLhLZOZLmZG%2F2VNIbySCtytAIaKLmVxFJhdD5%2FwhViegvI%2BKxI2s3Vd4I7yDcqtGI9YjRhC%2F4MNTwan0kkxivJ3LXmgjyPEFRr%2F7OYxYN14lg6cULH1xmCQunj4dH0gNv8I7r%2FhQwF%2BjVCq0eIoWkEPTgqEZ9xMyLz3%2B3wsdb789fUZo9Zu2qBj5JRFpBFkfdPUejWtsjsgsm7eYCPSv7AR18Eqb%2BFSyUniMR8vT3YR1jQIdBMI2tsnsilt7xOXkoIA2wfCh6UmZE%2FdGbiR9FL%2FDWRqajYFyVmIM4CaKDaofIUalo2RDA%2F%2BnyEeHcec0VD7xQsDCOwcAURLdNSJiuHHv7N4iZmXo4g56NNnrGa%2BFUnurz8nAfzlr0jujO%2BT9zy21ZTbcMs3Urrn%2FVdhYXUzMtcu3%2F5I8Bq%2B0gTfpp28SMP%2FqicUGOqUBy1CdzlYOOvnDUWYM7mzwhH%2BdF5212%2BtSLUQJEgG3OS5nEid7khGx48yuTxMnKPrZ87jH0aRbf9zgEHvw2%2BKudDyQF482BcmmjWuxfZenyrIrd25E9rmHBWuktjN8J%2FztXmCMyPRVrgztEJVvA4QqCboQCUdSgRVIBRHFYOsPxa3z%2Be7HVBP2bzPX1TODH8MaC9J5F4x9yfmjwKUlDg7GkZwUgrEu&X-Amz-Signature=6974ab746a7e093f6dc564cec7607e0dddecd15ce9d612745d14233b7ab316d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SCZLEU%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDVhTPc8LMFwI9hvJ%2Bwh38vmm%2Bl1oEp5LOOwfYtcA6%2FEAiEAjaSCcNkqHXdvFQwfztkbHBhyMNI%2FXbJ%2FF3NgW%2B2GkG4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Idysq1uptL%2BN2QircA6rZD5WeAAs7hq0wjUSSXxj4p0q1zJFZiDJhiCAyJozxxytBOeQlLquKpXvrQ6nZ0rahlo2eycGDHH3kuX1OMrAL8f56Zq3CIx7RVM3I%2BGbmWXR7zXduTZL4dpNd2nGDStKvaIfmZK8%2BXZzRwWVNNOlyNwPvGy28Lk5yiT6zRhnZ1TqrmebTBdQPnZmhHajK6Mv9lw6BAhSXmbiVMLhLZOZLmZG%2F2VNIbySCtytAIaKLmVxFJhdD5%2FwhViegvI%2BKxI2s3Vd4I7yDcqtGI9YjRhC%2F4MNTwan0kkxivJ3LXmgjyPEFRr%2F7OYxYN14lg6cULH1xmCQunj4dH0gNv8I7r%2FhQwF%2BjVCq0eIoWkEPTgqEZ9xMyLz3%2B3wsdb789fUZo9Zu2qBj5JRFpBFkfdPUejWtsjsgsm7eYCPSv7AR18Eqb%2BFSyUniMR8vT3YR1jQIdBMI2tsnsilt7xOXkoIA2wfCh6UmZE%2FdGbiR9FL%2FDWRqajYFyVmIM4CaKDaofIUalo2RDA%2F%2BnyEeHcec0VD7xQsDCOwcAURLdNSJiuHHv7N4iZmXo4g56NNnrGa%2BFUnurz8nAfzlr0jujO%2BT9zy21ZTbcMs3Urrn%2FVdhYXUzMtcu3%2F5I8Bq%2B0gTfpp28SMP%2FqicUGOqUBy1CdzlYOOvnDUWYM7mzwhH%2BdF5212%2BtSLUQJEgG3OS5nEid7khGx48yuTxMnKPrZ87jH0aRbf9zgEHvw2%2BKudDyQF482BcmmjWuxfZenyrIrd25E9rmHBWuktjN8J%2FztXmCMyPRVrgztEJVvA4QqCboQCUdSgRVIBRHFYOsPxa3z%2Be7HVBP2bzPX1TODH8MaC9J5F4x9yfmjwKUlDg7GkZwUgrEu&X-Amz-Signature=9345adbf790f469e20aaa68f234f6f3a7cc46e0f8120d2d4f1e10e53311f3ceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SCZLEU%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDVhTPc8LMFwI9hvJ%2Bwh38vmm%2Bl1oEp5LOOwfYtcA6%2FEAiEAjaSCcNkqHXdvFQwfztkbHBhyMNI%2FXbJ%2FF3NgW%2B2GkG4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Idysq1uptL%2BN2QircA6rZD5WeAAs7hq0wjUSSXxj4p0q1zJFZiDJhiCAyJozxxytBOeQlLquKpXvrQ6nZ0rahlo2eycGDHH3kuX1OMrAL8f56Zq3CIx7RVM3I%2BGbmWXR7zXduTZL4dpNd2nGDStKvaIfmZK8%2BXZzRwWVNNOlyNwPvGy28Lk5yiT6zRhnZ1TqrmebTBdQPnZmhHajK6Mv9lw6BAhSXmbiVMLhLZOZLmZG%2F2VNIbySCtytAIaKLmVxFJhdD5%2FwhViegvI%2BKxI2s3Vd4I7yDcqtGI9YjRhC%2F4MNTwan0kkxivJ3LXmgjyPEFRr%2F7OYxYN14lg6cULH1xmCQunj4dH0gNv8I7r%2FhQwF%2BjVCq0eIoWkEPTgqEZ9xMyLz3%2B3wsdb789fUZo9Zu2qBj5JRFpBFkfdPUejWtsjsgsm7eYCPSv7AR18Eqb%2BFSyUniMR8vT3YR1jQIdBMI2tsnsilt7xOXkoIA2wfCh6UmZE%2FdGbiR9FL%2FDWRqajYFyVmIM4CaKDaofIUalo2RDA%2F%2BnyEeHcec0VD7xQsDCOwcAURLdNSJiuHHv7N4iZmXo4g56NNnrGa%2BFUnurz8nAfzlr0jujO%2BT9zy21ZTbcMs3Urrn%2FVdhYXUzMtcu3%2F5I8Bq%2B0gTfpp28SMP%2FqicUGOqUBy1CdzlYOOvnDUWYM7mzwhH%2BdF5212%2BtSLUQJEgG3OS5nEid7khGx48yuTxMnKPrZ87jH0aRbf9zgEHvw2%2BKudDyQF482BcmmjWuxfZenyrIrd25E9rmHBWuktjN8J%2FztXmCMyPRVrgztEJVvA4QqCboQCUdSgRVIBRHFYOsPxa3z%2Be7HVBP2bzPX1TODH8MaC9J5F4x9yfmjwKUlDg7GkZwUgrEu&X-Amz-Signature=98c088a13ef882e9a3711abd1ecc4571a13b74cb9d68fba8b5c537a343082d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SCZLEU%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDVhTPc8LMFwI9hvJ%2Bwh38vmm%2Bl1oEp5LOOwfYtcA6%2FEAiEAjaSCcNkqHXdvFQwfztkbHBhyMNI%2FXbJ%2FF3NgW%2B2GkG4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Idysq1uptL%2BN2QircA6rZD5WeAAs7hq0wjUSSXxj4p0q1zJFZiDJhiCAyJozxxytBOeQlLquKpXvrQ6nZ0rahlo2eycGDHH3kuX1OMrAL8f56Zq3CIx7RVM3I%2BGbmWXR7zXduTZL4dpNd2nGDStKvaIfmZK8%2BXZzRwWVNNOlyNwPvGy28Lk5yiT6zRhnZ1TqrmebTBdQPnZmhHajK6Mv9lw6BAhSXmbiVMLhLZOZLmZG%2F2VNIbySCtytAIaKLmVxFJhdD5%2FwhViegvI%2BKxI2s3Vd4I7yDcqtGI9YjRhC%2F4MNTwan0kkxivJ3LXmgjyPEFRr%2F7OYxYN14lg6cULH1xmCQunj4dH0gNv8I7r%2FhQwF%2BjVCq0eIoWkEPTgqEZ9xMyLz3%2B3wsdb789fUZo9Zu2qBj5JRFpBFkfdPUejWtsjsgsm7eYCPSv7AR18Eqb%2BFSyUniMR8vT3YR1jQIdBMI2tsnsilt7xOXkoIA2wfCh6UmZE%2FdGbiR9FL%2FDWRqajYFyVmIM4CaKDaofIUalo2RDA%2F%2BnyEeHcec0VD7xQsDCOwcAURLdNSJiuHHv7N4iZmXo4g56NNnrGa%2BFUnurz8nAfzlr0jujO%2BT9zy21ZTbcMs3Urrn%2FVdhYXUzMtcu3%2F5I8Bq%2B0gTfpp28SMP%2FqicUGOqUBy1CdzlYOOvnDUWYM7mzwhH%2BdF5212%2BtSLUQJEgG3OS5nEid7khGx48yuTxMnKPrZ87jH0aRbf9zgEHvw2%2BKudDyQF482BcmmjWuxfZenyrIrd25E9rmHBWuktjN8J%2FztXmCMyPRVrgztEJVvA4QqCboQCUdSgRVIBRHFYOsPxa3z%2Be7HVBP2bzPX1TODH8MaC9J5F4x9yfmjwKUlDg7GkZwUgrEu&X-Amz-Signature=4a77a4aebb6ad5ce4e68fba1e89d258a756ab69e0aeabac960bc5f369c0e850f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SCZLEU%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDVhTPc8LMFwI9hvJ%2Bwh38vmm%2Bl1oEp5LOOwfYtcA6%2FEAiEAjaSCcNkqHXdvFQwfztkbHBhyMNI%2FXbJ%2FF3NgW%2B2GkG4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Idysq1uptL%2BN2QircA6rZD5WeAAs7hq0wjUSSXxj4p0q1zJFZiDJhiCAyJozxxytBOeQlLquKpXvrQ6nZ0rahlo2eycGDHH3kuX1OMrAL8f56Zq3CIx7RVM3I%2BGbmWXR7zXduTZL4dpNd2nGDStKvaIfmZK8%2BXZzRwWVNNOlyNwPvGy28Lk5yiT6zRhnZ1TqrmebTBdQPnZmhHajK6Mv9lw6BAhSXmbiVMLhLZOZLmZG%2F2VNIbySCtytAIaKLmVxFJhdD5%2FwhViegvI%2BKxI2s3Vd4I7yDcqtGI9YjRhC%2F4MNTwan0kkxivJ3LXmgjyPEFRr%2F7OYxYN14lg6cULH1xmCQunj4dH0gNv8I7r%2FhQwF%2BjVCq0eIoWkEPTgqEZ9xMyLz3%2B3wsdb789fUZo9Zu2qBj5JRFpBFkfdPUejWtsjsgsm7eYCPSv7AR18Eqb%2BFSyUniMR8vT3YR1jQIdBMI2tsnsilt7xOXkoIA2wfCh6UmZE%2FdGbiR9FL%2FDWRqajYFyVmIM4CaKDaofIUalo2RDA%2F%2BnyEeHcec0VD7xQsDCOwcAURLdNSJiuHHv7N4iZmXo4g56NNnrGa%2BFUnurz8nAfzlr0jujO%2BT9zy21ZTbcMs3Urrn%2FVdhYXUzMtcu3%2F5I8Bq%2B0gTfpp28SMP%2FqicUGOqUBy1CdzlYOOvnDUWYM7mzwhH%2BdF5212%2BtSLUQJEgG3OS5nEid7khGx48yuTxMnKPrZ87jH0aRbf9zgEHvw2%2BKudDyQF482BcmmjWuxfZenyrIrd25E9rmHBWuktjN8J%2FztXmCMyPRVrgztEJVvA4QqCboQCUdSgRVIBRHFYOsPxa3z%2Be7HVBP2bzPX1TODH8MaC9J5F4x9yfmjwKUlDg7GkZwUgrEu&X-Amz-Signature=17e4c67133974233c7ee150777533e5bd468de830c768d80a02556eea246ff74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYQHVA6M%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIGs%2F%2Bq%2BdlR3lWw9rliLwLtXZcesViiPUJZi9EH7jor39AiB7UEpDZ60psGqUQUmnLOPLJJDmIHqqomwTWxF2xvDr9iqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa0BP%2F28%2FRVFuj3YQKtwDNWHOISBSS%2FVWMRJCFONQvipwrJf0XBZ9XZf%2BMTyDM9jOy9XdqXi0Jn7nVAh5ooJcny0KzSG8IpBviEHWBnJiVgcSe3yRvCwFpj0cAk8%2B7oBON3DHhlxeeUJoBFvRsqXqWJuWyMRy%2Fu8%2Fc1EP8ZKVHxhjA5b3kLQdKawbpWHWjuFd9H%2FvdB30aOlWLKaBNc8ypS9faBgcKRp2nCmuEDtSTYNDfHn5PM1%2BXEsImRMmtgBY1%2BZJlgyYOxgHjbAfFV3GUsHhplozPm6wnul15FPxWPNnld6xADxGuGCEqpw9YadQltwf85lqM2Ufp%2BglG7Jw5hBzDXqtpeaP%2BgC1JKLgMBibdBdCWZfB%2FV3xIbkDR9QpGVxubwVZUCEZaDln%2BdhRld%2FDC%2FvB4XWMZYh4ysCGrekHNEavU6CdepII2VBahRKAY49AoI%2FNyLbFT33i1BpnNQhE%2BPWZh0bJz%2FMHx28sV44n5FLp1PrEhRhH8W54KUIB%2FBO9oVsX9s3UYxIIO%2BQkJjvfrV4RES5KnuYPX0XqB%2B9uuKmObbfVTPmQlcUHlES%2B%2FJwuuiNRquEPv9iwlW2i9ooZZ7ZAlpWUsDaCcQSJNAJ9GKY3WDFttrskYXK5MvhXFA0XkbQQmszpU4gwz%2BuJxQY6pgFcLOIXQ%2B947N2Nfl9MoCdYJvy6udDgLfSsQxyjehhvq%2B43sESrapL%2BCyoeOOVi%2FcZuKj2%2B%2BgOXyiInwCwvkSqqXmsiyz1L8ejMa7uoZEAuJHIMg1JU86VpYzwwlilV8oOEcjhLXoSue6ZjIuzj8LFkvJd29StG62%2B4Png6m%2F3hGuov08GVrry10C36Y0v0%2BSl4cVkCRB1BVcZh0EyvAo%2B%2FjF1JDdjI&X-Amz-Signature=f1267d6f1002878db9d341885d3fcb0cf7fb2a5abb3970d226b60e2cc4cb1fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XQ7WXK3%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T015002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDd9OBq8Akvp9%2FH5Xn8ikFUteXtk2qIrS0e0z0xuvCKrAIhAM4utyrLvDx%2BmfJpbIyW1l90qzsawFSwxlOt4yL6vqmKKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFrkfKfbuFOFbRafkq3APxsBvW%2F4dCwv8LxXNaJ4XAzJhulsJTDkj572X%2F%2BG%2FDeB3c%2FerpXsgBmMt6FuRAj2mS30kdpy4BhJAP%2FR6G7qRYKZn6nmNCk4OeN%2FR5nfDUlFmqJiCQ0e1vnUjpJsIj3vftrXNiz%2FZzyGMuMBfYLIfWnH9qRSIrC%2BfBurvqo1poIEmkEUWCXPfqE41i4yVCr2RX9GVapZNEoJDnoXuZ%2F%2FR%2F9mnzw9aMJRzS5fxAnOHrrN27fQavYQ9mr0z5RuSBxDmHOS82eqdifiYqks2f7npAfpor1gdiiCI6rejTUufQ6fL9srtPruYalphWTtsXjzrRSPBWo2mgXW%2BU7WUeFiORqXB%2B4UuGF5cBdeHZPnUrs7KeYeUfmQ3ApbAsOL%2F%2F0liGsJ%2B6f7bYDY6ukT18x19I7VH97BPTJSpxxqBja5aaSoq%2FUzxtfg2z%2FJ7h8ohDO6OJ2c8m8X8XuTOpWYDktohrf66M69jutEZY6e4gqLmfSV7lPCcXrJnV%2Bz8zsYrXYE9Q4dcP4ehyauRX1nh5nMjKw8jk0N%2BWRpgWS3d9ITCD0D3iNmR4fAFdAzOtGJI6MJuhSCoifevO7QcSRClZMMlGonsCuNeU7L4fx8OI5wQWAxchACzRzaKnsKih7jDk6onFBjqkAVxMtxhumbVPVqcFUFusxJG1ptZlKD4XxIkjCqZR0Lv1mqHREgAgwYmb72UPLVatAqbOOwrY4Gksdg9BhsV1oltejgnng7x9j8cYgG055%2F%2FWjh2naTpfQ5rxPhp1SQAgYEg82sRKmVbjLxkco%2BZS91MVh%2F7W%2Ffg%2BgrI6M0cluxn8J9dk1hX%2FvsZM76%2BDqP%2BnidwozgCgDhdZp0oXvvFmJ41dUxRD&X-Amz-Signature=26720e641939f947abc3c9a270647fc6d8f4948dad355bd6da1afac6bcd97ada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BTF4BDR%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T015006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCEWd3UTpL6R2ykDPcBInr2amflyuwyi%2FGzTrIpxRKmDQIgMJDIgUGlBzEAmxV6ZzXAPsA0zzpoLj%2BDzhyYMTAhPaoqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoSvZmvrqlFVvxHGyrcAxD%2FnnnatEPrI0IwQ7n1lWzVoBYxcWguxmong7znVtWroZfYKVJrbHRt2qZnjK8pdrlUuwSUQPQjtLQU5SaTQb6QEKWiRiONgu08OIZdBkmk81DXG8vVQ4bvT%2FXhaF%2BRq4mr2zJZ5Vfz9jAVYUNcn3VkdRBspwfdrvzcFLY9yx0d3EXflQ8e25g8deZqqbVQ4SQNBvkg6uqHIZh%2BZdSAmAHksvCkuPRW20FygG9ns1HaUspXIR9ejIKxKyvrwI2YaOJYwySV3ZAEZBRT0M8FIIwibFMfsDmhYkfmzq8gtYzggG4Y8KUMoqBK9e%2Bqk2MJksPU3%2Be5RJjYubyOLCXiUGFFfqfdyzj%2BhMFmvgDIgoETnBGIhpaWBeLfkxsMiP5NA3tH82xE%2Bz4y7FXcUsWe%2FgJm8hv7%2FbXxmWroGCiojGrLNIKVH7%2B6XBy14lxkvSLq7wPXPWEhEADn81dvKf162YY6sju8cl%2BDmja9MgJxKCRc4S1%2BVonar5rAumNhWEaDmSw39ugmFtMGX1QablfnIwbWcNjGqueRqGPCQbV16OFkQAn8PZ39xJZ03%2BtNf25RbvlvzOLlpHXxvijOOPA2IUgqdvio8IvlqLlLalj72DZC2kjqFR09bnJvdLyKMLnqicUGOqUBJ4%2FtPrSNi6%2FYDdX1rDeRmRuhslKjx2gMbapzEghO5c0mFa2Xr1pTsliU9OIaAZDptYLduugFzMwbsVA5noUcgLn0jSoGjwDWVcI5Iq24Te4bYev9yIHLBdsIkvf%2FvQf3Kcj6MA9UGkMXlBKp49zIaPNJxN9QWKYISiSVKHLr2QzKwKi5xit62CTCu106DaO8d1iklQ9KLM7zjsmWa0iVm0jLK853&X-Amz-Signature=f96edd936bccbaea5ebb806cde3448a84b3a07ec5faa8ca997442b81cc4940db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SCZLEU%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDVhTPc8LMFwI9hvJ%2Bwh38vmm%2Bl1oEp5LOOwfYtcA6%2FEAiEAjaSCcNkqHXdvFQwfztkbHBhyMNI%2FXbJ%2FF3NgW%2B2GkG4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Idysq1uptL%2BN2QircA6rZD5WeAAs7hq0wjUSSXxj4p0q1zJFZiDJhiCAyJozxxytBOeQlLquKpXvrQ6nZ0rahlo2eycGDHH3kuX1OMrAL8f56Zq3CIx7RVM3I%2BGbmWXR7zXduTZL4dpNd2nGDStKvaIfmZK8%2BXZzRwWVNNOlyNwPvGy28Lk5yiT6zRhnZ1TqrmebTBdQPnZmhHajK6Mv9lw6BAhSXmbiVMLhLZOZLmZG%2F2VNIbySCtytAIaKLmVxFJhdD5%2FwhViegvI%2BKxI2s3Vd4I7yDcqtGI9YjRhC%2F4MNTwan0kkxivJ3LXmgjyPEFRr%2F7OYxYN14lg6cULH1xmCQunj4dH0gNv8I7r%2FhQwF%2BjVCq0eIoWkEPTgqEZ9xMyLz3%2B3wsdb789fUZo9Zu2qBj5JRFpBFkfdPUejWtsjsgsm7eYCPSv7AR18Eqb%2BFSyUniMR8vT3YR1jQIdBMI2tsnsilt7xOXkoIA2wfCh6UmZE%2FdGbiR9FL%2FDWRqajYFyVmIM4CaKDaofIUalo2RDA%2F%2BnyEeHcec0VD7xQsDCOwcAURLdNSJiuHHv7N4iZmXo4g56NNnrGa%2BFUnurz8nAfzlr0jujO%2BT9zy21ZTbcMs3Urrn%2FVdhYXUzMtcu3%2F5I8Bq%2B0gTfpp28SMP%2FqicUGOqUBy1CdzlYOOvnDUWYM7mzwhH%2BdF5212%2BtSLUQJEgG3OS5nEid7khGx48yuTxMnKPrZ87jH0aRbf9zgEHvw2%2BKudDyQF482BcmmjWuxfZenyrIrd25E9rmHBWuktjN8J%2FztXmCMyPRVrgztEJVvA4QqCboQCUdSgRVIBRHFYOsPxa3z%2Be7HVBP2bzPX1TODH8MaC9J5F4x9yfmjwKUlDg7GkZwUgrEu&X-Amz-Signature=efbf4d0d412676d223f90436c0614c01be0985afa9382ec538c995f2c07f1647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRLLVS6R%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T015009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDlrjyv%2BbIupLpBDlUbTb3COLseav6F4EwGn7EQuzpamwIhAJ0I3%2BKm%2FWtQLJJ2pyr5HP6LnkFt92BT0whbAYV2mThXKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOoL7pmA3YGQ%2Fc2Hkq3AOQYZ7nerH%2BBAZZz1%2B%2F9y4WcsDTAptBDR%2BXeOxn8FVhUJgHBs5pKFS5JmFX1fADB5zJcXKELhkTdGLLao97tTpv8koD4dK%2BI66DDlLpQqmhh%2FCa3iRBzUMPWz9CaH2jHHKHOeYmgeOGiA4zmUuDW9rNA1frUECDtogYbnBQHfh9L%2Bg0AdQSXtaTrVYiBrR2f%2Fm4o%2FUfA2lKGkz7cnNLUQWRtMoJMUufpRR5%2F9GvLU2l83PoRMeUp0DZ9a8BCA5rSfNR3agN1Ox0qPG8isD2qymy%2BY4omBMYsQjAFFHfDMJSh4YkQO3lMkQDWz3A77StnGqlNwz01v4GEuIafYvmo2yoy%2FND4pHZhqtRLPQsysGXDoBrRrGsKL8cLd9LPaoJM%2B0a98Wdd7CZg6rkc%2BCibiDkSq2G%2B6QIPJQwhzZqr68cAL0GEUEUwGafZFmRGFZFOCz84MBVsVhWHcJXhs1Q9ONMnIVylK%2FE63gVd0IVmO4xMvU%2BQrn4jz%2Ba1vBcXeDrIGPpzt5X3xKK4mcD77dZ%2F7DaYRAuU5liP6PdVn2CJuG1kPeG7hvX6woc3ujXp6UREfHP2xgngL26WrPUtP1w%2BydD1yb4Ufn4%2FJCMxqHmCYaSWu%2Fsdxe6O%2FQWqzMSijCx64nFBjqkAZWmuxatu%2BSnoVV9v4prKQ6gIkgn4e1b6g22QJ8gI7VH4IHqkt06oT%2Fjc9KHB0Y1zVQCu4eaTNwqMS5tGaSCUH782umsk%2FIw7uDx8rctfsk%2BYagsg405bvHWhidqcrGKNq4l0aXT2WNnwRK1Jz5r0qoa5PFzhx0zfhy3spN5W7PHKz7se2yY0K2YVOPaynjtClQKGh%2BxGYV0UtuYkqcy97aYnMFV&X-Amz-Signature=f74f5d43bad92669297d7ed884fbd7da305c25cdb025f71fec0e4cb7f7678d46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SCZLEU%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDVhTPc8LMFwI9hvJ%2Bwh38vmm%2Bl1oEp5LOOwfYtcA6%2FEAiEAjaSCcNkqHXdvFQwfztkbHBhyMNI%2FXbJ%2FF3NgW%2B2GkG4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Idysq1uptL%2BN2QircA6rZD5WeAAs7hq0wjUSSXxj4p0q1zJFZiDJhiCAyJozxxytBOeQlLquKpXvrQ6nZ0rahlo2eycGDHH3kuX1OMrAL8f56Zq3CIx7RVM3I%2BGbmWXR7zXduTZL4dpNd2nGDStKvaIfmZK8%2BXZzRwWVNNOlyNwPvGy28Lk5yiT6zRhnZ1TqrmebTBdQPnZmhHajK6Mv9lw6BAhSXmbiVMLhLZOZLmZG%2F2VNIbySCtytAIaKLmVxFJhdD5%2FwhViegvI%2BKxI2s3Vd4I7yDcqtGI9YjRhC%2F4MNTwan0kkxivJ3LXmgjyPEFRr%2F7OYxYN14lg6cULH1xmCQunj4dH0gNv8I7r%2FhQwF%2BjVCq0eIoWkEPTgqEZ9xMyLz3%2B3wsdb789fUZo9Zu2qBj5JRFpBFkfdPUejWtsjsgsm7eYCPSv7AR18Eqb%2BFSyUniMR8vT3YR1jQIdBMI2tsnsilt7xOXkoIA2wfCh6UmZE%2FdGbiR9FL%2FDWRqajYFyVmIM4CaKDaofIUalo2RDA%2F%2BnyEeHcec0VD7xQsDCOwcAURLdNSJiuHHv7N4iZmXo4g56NNnrGa%2BFUnurz8nAfzlr0jujO%2BT9zy21ZTbcMs3Urrn%2FVdhYXUzMtcu3%2F5I8Bq%2B0gTfpp28SMP%2FqicUGOqUBy1CdzlYOOvnDUWYM7mzwhH%2BdF5212%2BtSLUQJEgG3OS5nEid7khGx48yuTxMnKPrZ87jH0aRbf9zgEHvw2%2BKudDyQF482BcmmjWuxfZenyrIrd25E9rmHBWuktjN8J%2FztXmCMyPRVrgztEJVvA4QqCboQCUdSgRVIBRHFYOsPxa3z%2Be7HVBP2bzPX1TODH8MaC9J5F4x9yfmjwKUlDg7GkZwUgrEu&X-Amz-Signature=890a54c9a72d6377844c0393cd7f50f515fce9e7a905fdb0de06b5ecbe676699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E65ZTU3%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T015010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIAVmOgyFVpclp5Z12A%2FMCS9oGNnD7ZAdsJoiI6hjuwSvAiEAhuv1zadIGo%2F4y5MvWkDg3OoStOuxT1K6IXbT%2BoCcJLIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrKgxFk9PRQOtVXAircA9pMjEY1ra5qOdv9Fx586vyoEqfkNfcQbc3nzOwwmQiAHgduMawy4ANONVaedA1sOaomtBYPcK99isKr%2FkJhvyeQ%2FhSVJRAM09h8OWCctBVW8ileqx1cf13M0yI9iI6ejmqEMj4R4Dxhf%2B9hNJweZhpi3WwHAtKfpsrnAPlZWtAiNXpou5rMayhLmWY6fYSMmoVrHS3HQ5KBO55cQ4%2BAR5LN0rI2UcQRdY2JDDxjh2MB5St%2Fr7PvnW4Fbxc5FZYNXbwCpyJQFivb2z0pKpLKSCufMOcNtpbx2621DX2WpL8l8sJo9A95qZDJWBJMHd%2FwmrjsX08vyETep1futYS%2Bhm2sZrregu1w7Nb6oHwywcEiaA1WSS46Nc%2B6JnVrvtBWz3cgQSz8x6JqZrkNXsfbjo5m%2FvS9AeWuvooHwIjjMeGuVgh4PMqJkyOVknZWCwYgr1jIKaZmQzkzErIMSxdGnnDPSwrWgIkQMH8ZfeF16vOvLBbQEykmqMs9yPjNZ%2BS8arw55WB%2FMWxvuna13uc2ludAZebRvek5D%2FdU%2FSZ6kfDSGTwejMM2OhsahzG9pxzehwqUCbYBtCuCaxcyAzAytksj3z%2F5egvG72ic9nVuzmQ55nUr7uBRRvzgQfkCMM%2FricUGOqUB22Ml6Gg8swm073CH%2FbuBJ5mP4r34kFauVS9cgxbdRDRley5c0Hjaqp1r%2Bs%2BRVcnlflMao9vDNeMyDqPhorvcpwDOz9f3uRijbvYX28A6HtnuAJj2ovvA9k0QuXQrv2%2ByYgc98g5GB4Qg227NjMQ5%2F%2FIDEXwux1nqUWZKiC86HU96NIfxj1A%2FkI6sTBoGBRnx50ieuE8o6tYdq7bkxZWkRZ2qw3N2&X-Amz-Signature=454b82880f1680872f0fdcfda264409c7b2569c2c2b263d14336b5ac77324b71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SCZLEU%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDVhTPc8LMFwI9hvJ%2Bwh38vmm%2Bl1oEp5LOOwfYtcA6%2FEAiEAjaSCcNkqHXdvFQwfztkbHBhyMNI%2FXbJ%2FF3NgW%2B2GkG4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Idysq1uptL%2BN2QircA6rZD5WeAAs7hq0wjUSSXxj4p0q1zJFZiDJhiCAyJozxxytBOeQlLquKpXvrQ6nZ0rahlo2eycGDHH3kuX1OMrAL8f56Zq3CIx7RVM3I%2BGbmWXR7zXduTZL4dpNd2nGDStKvaIfmZK8%2BXZzRwWVNNOlyNwPvGy28Lk5yiT6zRhnZ1TqrmebTBdQPnZmhHajK6Mv9lw6BAhSXmbiVMLhLZOZLmZG%2F2VNIbySCtytAIaKLmVxFJhdD5%2FwhViegvI%2BKxI2s3Vd4I7yDcqtGI9YjRhC%2F4MNTwan0kkxivJ3LXmgjyPEFRr%2F7OYxYN14lg6cULH1xmCQunj4dH0gNv8I7r%2FhQwF%2BjVCq0eIoWkEPTgqEZ9xMyLz3%2B3wsdb789fUZo9Zu2qBj5JRFpBFkfdPUejWtsjsgsm7eYCPSv7AR18Eqb%2BFSyUniMR8vT3YR1jQIdBMI2tsnsilt7xOXkoIA2wfCh6UmZE%2FdGbiR9FL%2FDWRqajYFyVmIM4CaKDaofIUalo2RDA%2F%2BnyEeHcec0VD7xQsDCOwcAURLdNSJiuHHv7N4iZmXo4g56NNnrGa%2BFUnurz8nAfzlr0jujO%2BT9zy21ZTbcMs3Urrn%2FVdhYXUzMtcu3%2F5I8Bq%2B0gTfpp28SMP%2FqicUGOqUBy1CdzlYOOvnDUWYM7mzwhH%2BdF5212%2BtSLUQJEgG3OS5nEid7khGx48yuTxMnKPrZ87jH0aRbf9zgEHvw2%2BKudDyQF482BcmmjWuxfZenyrIrd25E9rmHBWuktjN8J%2FztXmCMyPRVrgztEJVvA4QqCboQCUdSgRVIBRHFYOsPxa3z%2Be7HVBP2bzPX1TODH8MaC9J5F4x9yfmjwKUlDg7GkZwUgrEu&X-Amz-Signature=c78cc4a0004bae6fee48a83de5bec71c533467a8e8dc443e35b00e3e03428550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZWSVEHE%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T015013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIEQblVT3gXp27kKYA3VklTpzn4WdQfgdrpID13XgfAxGAiEAjzKZQ7Z%2FrzFZ7Ch2l1mwLn7cunmXNylaWwWHOdmiO6oqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPK1w8p5wsChyITZlCrcAytwYrea4xqtz2YVyGRY2kGcErSkkU2jLC4t8qBGmaqVSnD%2FmzrJwavaURP231wHmcWuCNxQrKUx8CuLj3XgwUD13LCFc95d1s5PfW77Id1%2BOVh0bgYAChHVGzy643HVZhmNi4H7zi6aWzC0qpGZu7G6%2FLq0%2BgbyzPoqpZn9RcN%2BljpAHywLQQaZJdSbvuDBwI8%2F4WQqM4NWs3DKsYovSLuzmMzdqDvWLGyx1hgMbRU%2BRPYd3rR2xy3JMnVGYIpFMGcJf6Vo76aUM2XqGVxb8j3EYapUKF1T2y8dGcE%2BVe3k0ptc26Ft1dk8u6F4wCZa6pAFRkc4JJCogIG10211l7%2FELQkWzFa6XWNBCtBLLRpmjIpk6ujjLvIIqnvyYMo0lHrs6irq8Ldlgb1ULxXDt4%2Bi5i3xP3lOicEsgomawlEOgQ6zIeE6TfBrBclcOs4HbF0YfLM8pSsiU5HeUmx5D4dkOc%2BmNE5ifaHOSUXLyiNylz42E8iLeZh4EXGj%2FINl1aTC0B41oZRCMuaUaC4VPUr2KeiuqmwOqvLiSBprA4%2F4OX36wc9zIdHcqcinXvtDH2PE00YN6WEkZuOvuCVwqm1DWw10AE81mHcJqwjImrw3kK4SO6tqdu5e0SS9MP%2FqicUGOqUB%2FYv9HnPszGE%2FpqJ%2FFs%2F4yHgXa4IUvaJpcOE7CQqKYRo3jYuRTzrX%2FwBPjNLH3dqYIXWuFFZ94RQ9JhELS%2BVf4MbaSjvZj%2FsVE3s7KHWGL12veiSFgSqSYD19v6DFouLrBl2wqa7R7RbwTnQiFToaWVf48OIDUM7kePBrNncoZ7ytvZTkjaTnbxGjhrnc85Zub%2BCNsG4kFcEhlnZNBsetgMxwi5AT&X-Amz-Signature=5fbfeb35b525e34704cefcc09daea67a9b65e264366a1fc5654e6ff032eb21d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SCZLEU%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDVhTPc8LMFwI9hvJ%2Bwh38vmm%2Bl1oEp5LOOwfYtcA6%2FEAiEAjaSCcNkqHXdvFQwfztkbHBhyMNI%2FXbJ%2FF3NgW%2B2GkG4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Idysq1uptL%2BN2QircA6rZD5WeAAs7hq0wjUSSXxj4p0q1zJFZiDJhiCAyJozxxytBOeQlLquKpXvrQ6nZ0rahlo2eycGDHH3kuX1OMrAL8f56Zq3CIx7RVM3I%2BGbmWXR7zXduTZL4dpNd2nGDStKvaIfmZK8%2BXZzRwWVNNOlyNwPvGy28Lk5yiT6zRhnZ1TqrmebTBdQPnZmhHajK6Mv9lw6BAhSXmbiVMLhLZOZLmZG%2F2VNIbySCtytAIaKLmVxFJhdD5%2FwhViegvI%2BKxI2s3Vd4I7yDcqtGI9YjRhC%2F4MNTwan0kkxivJ3LXmgjyPEFRr%2F7OYxYN14lg6cULH1xmCQunj4dH0gNv8I7r%2FhQwF%2BjVCq0eIoWkEPTgqEZ9xMyLz3%2B3wsdb789fUZo9Zu2qBj5JRFpBFkfdPUejWtsjsgsm7eYCPSv7AR18Eqb%2BFSyUniMR8vT3YR1jQIdBMI2tsnsilt7xOXkoIA2wfCh6UmZE%2FdGbiR9FL%2FDWRqajYFyVmIM4CaKDaofIUalo2RDA%2F%2BnyEeHcec0VD7xQsDCOwcAURLdNSJiuHHv7N4iZmXo4g56NNnrGa%2BFUnurz8nAfzlr0jujO%2BT9zy21ZTbcMs3Urrn%2FVdhYXUzMtcu3%2F5I8Bq%2B0gTfpp28SMP%2FqicUGOqUBy1CdzlYOOvnDUWYM7mzwhH%2BdF5212%2BtSLUQJEgG3OS5nEid7khGx48yuTxMnKPrZ87jH0aRbf9zgEHvw2%2BKudDyQF482BcmmjWuxfZenyrIrd25E9rmHBWuktjN8J%2FztXmCMyPRVrgztEJVvA4QqCboQCUdSgRVIBRHFYOsPxa3z%2Be7HVBP2bzPX1TODH8MaC9J5F4x9yfmjwKUlDg7GkZwUgrEu&X-Amz-Signature=9d3fc2727417d123440e02d220c0a5411874888147856bf1fab9a3bef6dcb30e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZBRV7NZ%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T015015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDEbOJJ8PT4Z1mcdPJuB4Cv5X5syXqM1YRhrmJnmK8VxAiEAtFtiPwl9D133fGA%2BViwZBS84Gr0eH2Fj5%2B9MC1YD6cEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLScfB1TAoxHJ4aG2ircA41bSV09wiinOd7naZmA%2FHqstqbZTFod6CoUpoVW5Zb3l6axh%2FuTmfXne7LwJq8nKfGo%2FTHvlBGw2ap45GM0mqHVYmxIcSlxVabMAeoJmvr1Rkb4E7fRH2mA4s23pD3nFSVn5cMcMFbyNa%2Brv1wBR7IMZQzJ8zQao51b0Hp7Yq%2Ffuzx22pu88sjUTkhvoVGz5DiordfkIeoq25Sr8TeNHIwaiaAdixYGaUSlJTM0S9Cbns0w8OzbFwBIr2GOH7WBBSX6572bt4Qi9gIAy36W7%2B31FKeC7eiVeX%2FVPQHYqyoNRu4eQtBgz5mWGEFMguF2mlLsU%2BZ7KZib9ROwIaEpZzoiu7mIbV5PJR%2BxaqPN1AOCoLXmBE2XA%2F%2BfgbDQAlNCciM2xDGGjR3pIpWCljvwkIvknGufP%2Bzg%2FzHex73OD47KO3eaK1rLB6Nv34SnrGl2hQlViCHq0H8u7KiUoRlNgVaDMjt%2Bk%2FM%2B5f%2FL7nMHMVuWUek6pqxGzM%2BhEOt3bHL3eM93hiB2R7xppE%2B90Su3lcRaeJQ3E0EgDHcFosKi%2Bn6y2oomp%2FBI5jqEBHGDy2Djjjhdv%2FG3nF7B2HTl7skvQIS8%2FzQ%2FWSYdcM0YwrgT9JQALPirTt8QWcLQFMbFMLTqicUGOqUBfL5ksmpn6kMvepmp2Dm1EN%2BRFkdfe0phn6lEY1o28xCRnfi4R4cPHgfkfC09%2FsUQmmI7KS0BkFNDdvoqEENEMMtN%2FlFZHrWfMTq72wW8Y8Fp2hGKGvTIwkVt3wPJJ6EJbmoaB8EW%2BHZJ5THseQzGDwc7WVVErKwMD6F3Q3KjsNkJccPoI3mx9OJZS2JaapTjVYurrrT%2BvXGKobdrHzDx1s1OPlGC&X-Amz-Signature=a2eafa6026573bb18c7dacc985e8bb96d8679ed0de48ba5cf4c50487f4b1f4f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SCZLEU%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDVhTPc8LMFwI9hvJ%2Bwh38vmm%2Bl1oEp5LOOwfYtcA6%2FEAiEAjaSCcNkqHXdvFQwfztkbHBhyMNI%2FXbJ%2FF3NgW%2B2GkG4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Idysq1uptL%2BN2QircA6rZD5WeAAs7hq0wjUSSXxj4p0q1zJFZiDJhiCAyJozxxytBOeQlLquKpXvrQ6nZ0rahlo2eycGDHH3kuX1OMrAL8f56Zq3CIx7RVM3I%2BGbmWXR7zXduTZL4dpNd2nGDStKvaIfmZK8%2BXZzRwWVNNOlyNwPvGy28Lk5yiT6zRhnZ1TqrmebTBdQPnZmhHajK6Mv9lw6BAhSXmbiVMLhLZOZLmZG%2F2VNIbySCtytAIaKLmVxFJhdD5%2FwhViegvI%2BKxI2s3Vd4I7yDcqtGI9YjRhC%2F4MNTwan0kkxivJ3LXmgjyPEFRr%2F7OYxYN14lg6cULH1xmCQunj4dH0gNv8I7r%2FhQwF%2BjVCq0eIoWkEPTgqEZ9xMyLz3%2B3wsdb789fUZo9Zu2qBj5JRFpBFkfdPUejWtsjsgsm7eYCPSv7AR18Eqb%2BFSyUniMR8vT3YR1jQIdBMI2tsnsilt7xOXkoIA2wfCh6UmZE%2FdGbiR9FL%2FDWRqajYFyVmIM4CaKDaofIUalo2RDA%2F%2BnyEeHcec0VD7xQsDCOwcAURLdNSJiuHHv7N4iZmXo4g56NNnrGa%2BFUnurz8nAfzlr0jujO%2BT9zy21ZTbcMs3Urrn%2FVdhYXUzMtcu3%2F5I8Bq%2B0gTfpp28SMP%2FqicUGOqUBy1CdzlYOOvnDUWYM7mzwhH%2BdF5212%2BtSLUQJEgG3OS5nEid7khGx48yuTxMnKPrZ87jH0aRbf9zgEHvw2%2BKudDyQF482BcmmjWuxfZenyrIrd25E9rmHBWuktjN8J%2FztXmCMyPRVrgztEJVvA4QqCboQCUdSgRVIBRHFYOsPxa3z%2Be7HVBP2bzPX1TODH8MaC9J5F4x9yfmjwKUlDg7GkZwUgrEu&X-Amz-Signature=e0af7d0b2bc5c4371f0dcbe47ec83c343db203dff3a68c5e0a5e6d09dc5e2c16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQI3F7PC%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T015018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIAMDB8rfZEwkpSDcN0IlgWv3PndtCuGq7HGAni3I%2BzQBAiBSraOJhSY40z9YY4ckGjmJEloresk1Bs5%2FYrXieqHVQCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLQRHiraTdHLVPRMCKtwDoXtV5ft%2FxeSkRVzF%2B%2Bt%2BLh8OgkzupzCviymanuHD8NUT5zHqHfLNS5SuWTcomZ%2BPK0Dtaj%2FfTPMheOBCJ%2BnjYAMggvvGMwL0c4m8nHbwhYqE0BOWSA13l%2FkU9fsQGfmfUVKasoHHzYaYbMYliRrHN1Is3L6LQ6T1K6gn13OQt7RC44Z6pCU9M3Uqf9l0D1mhpPzqOmx0%2B5bpFfXswtY2xAnE3o7jUae7JxTdPI3xuUgV6uOJ%2B73LX%2BjKnWvq7DvVXtrjqels1f5JUhgZ%2Fz37CTue6PE7Gz2PVKOM4pb0NVulOFlNuJPdrPR2rm01QZEM3lO6VkxzwllUXUSeLpFaHRx5fBidJPWfRQ2X9vOguPfjymnVQpQEPN68Y1s9ldkqHRbHRcMYUoUP7G863D5xjjc1iKGaWP3c5NV4zO6t%2Fr%2FueWlFa0scsY%2FxzoQVmS1uz%2FEpKTxLr%2BeztPEfe%2F%2BYkn1kNPhGS9UKHX4ss5iKpx1lto73wjLyL47EAKm87xlJxIePdH3oRt5GIXGA%2Bi3Lxy0P0Ycc9JAKp%2FPw2vAhjGnKC2v9XqnInzVTZ7YxvGUGpz9WE6ZatIEilfKmjePPkTvWP3rv3hRPK8VFOrhyfG7pV2FVoCPMAjuOdngwheuJxQY6pgEP4f9q9czAWBtIfdI7fyfLGqBHmiZ82uq6DdK5PQw3TeslyXDDUag5aAbW5rSZkpj7S9mpSCznzZ9xCc1MzkMyLVcEH26bYafTozMpLOvlLuK5i8eSLZsAh0CtfHJFnlusGPKrEzC%2FrbGAbR1Ey6uh5lcbw9JZ6CbPoaRon5jRTZRpaVyGv%2BnrwULN%2FznAt%2F7%2FFWtYGVtFVzEMTQI7PL%2FcphS%2BFTu4&X-Amz-Signature=085013acdf5ff82689218577740c1bf6fe2a7a606caaee0bf9d8d8dd1472636d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6CMLW5F%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T015019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDvUz1TPfH3l7vmx7cKChBpKjwMva8JrLs39JeZnB5HNgIhAOK675VH%2FkcRPrpQeEZE0KsJ68ww%2FNDfdvKgkOt3f9FXKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhSJJaOuRETgMOHUMq3AN0FpzqI8N4UObll66SG1qLDfxOQb1glKq4G49LOJNktOJpyBwjw7EKFXsPXd7rsJW%2BdZ9WHMbZVA0g9HJ9v8sSDlQAEtUod5gNEJlzutXRZmcYutLnAWB63o8qjWPvFOa3ZqZEL6pkftrpnGHMvZAbn8TgK8uMiA13X1kLcj0TaSgqR93jy8DO%2B88Fvwf%2FGKON44JtU6F6FdDl%2BFiuE09udDKxshjotcKCmIQwVOXqATvGqP8iBdnYb25vg7075L5%2FCc4q4Tivqpmpnlu%2FlcCyogsgBKbI%2BFbd7AiOs9izZj%2F%2BwtngDjf76%2Ftv%2Fy5r74v%2BAFT9cNueG7cYSprCRKOpJJkB4cJkrSL0W4Av9VRBYQfy36ccsJOrlyK1DF7SsmPvui5n1cWARaXR7dCL34APVwy2oQOm6Vv%2Br9RSRlC01IKORa0Zt7R0SSmqmcjddabDISWpvhLQ0hbRTKg4bYmi8aL%2BbFurL3HeQnMMo4TS7vx81FwShAqlHJCWoGIJ7VdJUhx7W2lVlr1r26TPwX6Ooi%2BnKEs7Aktz9q6Gk5odAZF28FP%2FONsSz0adgh0jm%2Be6tV7Cb9KHMvO0QugJpKRSSGkjtV6PLCwYws00WHSNwCpZWvYKm15M8KoCgDD%2B64nFBjqkAfnrkfzzZiWr1d0jQsbq1epXUW9RlKDak%2FyBzjPfeHNYEpbJVJidz%2FLlaYDriwFtcUxx7OsZ7bwVT%2FT9A3%2F%2FbK7cqlK44UhG7JZVqpWHvvdvypngi8luXcwWN57wPH8ez6rIYFnfuT37hRoMRlpicwiMFOHSeKSZuiPD1WdYJsux6nUmlJguFJ9sw7HqV4aI4ZrwZDkDHAWeaBr7SfIWbeWz9N5z&X-Amz-Signature=be3a43de23366b09cb0d1d31222f666b63a9f78293a3127b9fcda83cd93e83cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAH7J26X%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T015021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIFevRwj1u4aF2EHrkY8tnzNM3oGME%2FP8t8tec2ZuErjSAiBye6P%2Bg3RC%2FwX0Lg4kg0%2B6plif6A4AY0liic4BAQaP8iqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxcgoqAz7ZmsPvui5KtwD5U2mEOtgZcRSi1O%2FN4Q%2Fk9tjAxJMeP2p9rGObsSul%2BnOCC%2FsZmPbiYb2JYDahLJEgegfiWu6AMdr1w6Y8LNs1lHRt2VXioOWb%2FHTBc%2BkG3xHIxKSnUiiFTFh1WvkCTj07pZO0pDKBhEZppamuJp2IW0C5UIUJ25wIUcDdZwdS4ODphzmfBR2Uy0wim7k6YdAd1sA%2FTg7IRczJBDB8kb%2BrmbcDRHGzRYw1dby4i6Q336w7N0VZzlRjWlMs5Ho68hh2YeYNRPqof8qYmoAN4UEcBa0Gv4KTImKXQXXqXGGHZqBn9%2BrGg4ENaufQ80c8IKS8lHL6Ys91R8oEKFXNDaUU1ESeSlrFpDLp49HMSB3BZde66rIXEcYnAc%2FvglD4nQJdy9ulhhp76GaF8i6mVznlBYvw38aRDVXYerQcz8JsZI9Sw8vgLJQjXcXQAL%2B2GOI1VPhEumeyHJ1JeCQRSz0SQJ9culpJu2nzjZcxzwik1tz506UmLgcEOcCfo%2BRV7agI9vfDPT7wO0Wh9oRSrWYmeR0%2FSlswihfWJfHFBQ9DXB3YD%2FE1N617LMMJDM980msepoymvRLcnMY0TMRYFo81MymW%2B%2FuBRgSmjT8CgXCQSSzbNrBECHlV0kJ2F0wouqJxQY6pgF894OUQ4lNVJvCdnbgmSCXLPGSXjJQwcM57mCPERNjS%2FH9p65OkARtcMd5HC40AVCZvZk2Otg9Bzylw4ManUzSuHTgU9nDtjVUV5yApOlAQrTTjUu3wBruHSS7RH7alZt9%2FHJFXD0xd%2BGWOXVgH%2FJLk5WzW%2F1RdZcn5c%2F%2F%2Fd%2FHMlMFOIPl%2Bz%2Feek6q8tTdjtqpb6m0ryMDD7zKSlj%2BEAVTTb3HYqTT&X-Amz-Signature=017b82724c9ecbd20ad18f0ab7f432611a061d2cb5ce843f5d797e42594a557a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SCZLEU%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDVhTPc8LMFwI9hvJ%2Bwh38vmm%2Bl1oEp5LOOwfYtcA6%2FEAiEAjaSCcNkqHXdvFQwfztkbHBhyMNI%2FXbJ%2FF3NgW%2B2GkG4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Idysq1uptL%2BN2QircA6rZD5WeAAs7hq0wjUSSXxj4p0q1zJFZiDJhiCAyJozxxytBOeQlLquKpXvrQ6nZ0rahlo2eycGDHH3kuX1OMrAL8f56Zq3CIx7RVM3I%2BGbmWXR7zXduTZL4dpNd2nGDStKvaIfmZK8%2BXZzRwWVNNOlyNwPvGy28Lk5yiT6zRhnZ1TqrmebTBdQPnZmhHajK6Mv9lw6BAhSXmbiVMLhLZOZLmZG%2F2VNIbySCtytAIaKLmVxFJhdD5%2FwhViegvI%2BKxI2s3Vd4I7yDcqtGI9YjRhC%2F4MNTwan0kkxivJ3LXmgjyPEFRr%2F7OYxYN14lg6cULH1xmCQunj4dH0gNv8I7r%2FhQwF%2BjVCq0eIoWkEPTgqEZ9xMyLz3%2B3wsdb789fUZo9Zu2qBj5JRFpBFkfdPUejWtsjsgsm7eYCPSv7AR18Eqb%2BFSyUniMR8vT3YR1jQIdBMI2tsnsilt7xOXkoIA2wfCh6UmZE%2FdGbiR9FL%2FDWRqajYFyVmIM4CaKDaofIUalo2RDA%2F%2BnyEeHcec0VD7xQsDCOwcAURLdNSJiuHHv7N4iZmXo4g56NNnrGa%2BFUnurz8nAfzlr0jujO%2BT9zy21ZTbcMs3Urrn%2FVdhYXUzMtcu3%2F5I8Bq%2B0gTfpp28SMP%2FqicUGOqUBy1CdzlYOOvnDUWYM7mzwhH%2BdF5212%2BtSLUQJEgG3OS5nEid7khGx48yuTxMnKPrZ87jH0aRbf9zgEHvw2%2BKudDyQF482BcmmjWuxfZenyrIrd25E9rmHBWuktjN8J%2FztXmCMyPRVrgztEJVvA4QqCboQCUdSgRVIBRHFYOsPxa3z%2Be7HVBP2bzPX1TODH8MaC9J5F4x9yfmjwKUlDg7GkZwUgrEu&X-Amz-Signature=ba1a32f2ebc62d282f3cebede812599e877006988525fb03035f71831ae3dc03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SCZLEU%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDVhTPc8LMFwI9hvJ%2Bwh38vmm%2Bl1oEp5LOOwfYtcA6%2FEAiEAjaSCcNkqHXdvFQwfztkbHBhyMNI%2FXbJ%2FF3NgW%2B2GkG4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2Idysq1uptL%2BN2QircA6rZD5WeAAs7hq0wjUSSXxj4p0q1zJFZiDJhiCAyJozxxytBOeQlLquKpXvrQ6nZ0rahlo2eycGDHH3kuX1OMrAL8f56Zq3CIx7RVM3I%2BGbmWXR7zXduTZL4dpNd2nGDStKvaIfmZK8%2BXZzRwWVNNOlyNwPvGy28Lk5yiT6zRhnZ1TqrmebTBdQPnZmhHajK6Mv9lw6BAhSXmbiVMLhLZOZLmZG%2F2VNIbySCtytAIaKLmVxFJhdD5%2FwhViegvI%2BKxI2s3Vd4I7yDcqtGI9YjRhC%2F4MNTwan0kkxivJ3LXmgjyPEFRr%2F7OYxYN14lg6cULH1xmCQunj4dH0gNv8I7r%2FhQwF%2BjVCq0eIoWkEPTgqEZ9xMyLz3%2B3wsdb789fUZo9Zu2qBj5JRFpBFkfdPUejWtsjsgsm7eYCPSv7AR18Eqb%2BFSyUniMR8vT3YR1jQIdBMI2tsnsilt7xOXkoIA2wfCh6UmZE%2FdGbiR9FL%2FDWRqajYFyVmIM4CaKDaofIUalo2RDA%2F%2BnyEeHcec0VD7xQsDCOwcAURLdNSJiuHHv7N4iZmXo4g56NNnrGa%2BFUnurz8nAfzlr0jujO%2BT9zy21ZTbcMs3Urrn%2FVdhYXUzMtcu3%2F5I8Bq%2B0gTfpp28SMP%2FqicUGOqUBy1CdzlYOOvnDUWYM7mzwhH%2BdF5212%2BtSLUQJEgG3OS5nEid7khGx48yuTxMnKPrZ87jH0aRbf9zgEHvw2%2BKudDyQF482BcmmjWuxfZenyrIrd25E9rmHBWuktjN8J%2FztXmCMyPRVrgztEJVvA4QqCboQCUdSgRVIBRHFYOsPxa3z%2Be7HVBP2bzPX1TODH8MaC9J5F4x9yfmjwKUlDg7GkZwUgrEu&X-Amz-Signature=3d6360d6a0e876ecbe8d0c20f4f329feebeb8bea75f0ee436295dfdc85352e16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMSB3P7%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCsKV50%2Fw83YWMfeLaHZZy3ZRA3qL2Ht9nFa0PstIxCgQIgGLCggoUleUESarlIAXagdQ9hKMNjxJZnRORMtuhgZbEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrCHCDCNGcwzJe%2FWyrcA8IXOAT%2FKjIKMmAF9e4qcegTMohpnr%2Fp66Z6wzpM%2BVPz3KJR7Li9tFvwSQpKQRTuAHFlzErLxRlRZjruaDjpNVCK3ybrECobkYGc9%2FBjdgjpr1ItS4Fhx6qHThdI%2FP70NOvbYisuWc7DEjYNv7VrVILebijrVdWBd6BDqCw1B19%2Fx9IGOuycm4sjxRgKEVIU2bQJ%2BLBZdyUyWGpF4neDlHscDA81CJw%2BHS9WIxebfDeblHiNYHJG1y6D4xVcyEtMesmQtRiT%2BKMZ%2B4LcetfUB6fRxcKV9nLkDSw%2BQI2MB27Kk3kkl24aKN8I15WBEvKqje%2FDeAometdOqHlY0fnZPeMhiQatkjVl0TTKiFG%2FJX1eg%2FX6AoAwzusimLFg2iGE86JsOWvhr6G1ZX51Sj%2BmdOvmS82WLkmY0Cqz2TYtG5ZLjpvSI2m%2FW40RzvLGVXYM%2BBWJXmfjGX4rzf4lWJ%2FM64cRNwwTCWwb64md0Yh9di2f5yPLiLkfZ8FrESImmGJWUoT7hNdSHvvH0KnWnugMDprOnp5MNeq3n%2FS70buaz%2BqTTaRdrbHHYkmGLgHSqSYP1Mn8%2Fv1LMjNHOsCVDVNjloiioBxec8QlIEU8nfvD5Ijfp%2Bg8RNZ%2FoEKlqwhuMPnqicUGOqUBNDhEjON4Uis9lp6XgT1gosPhfgFSjvjTJuGhuMxjBBMS8uT23IMxowcTG%2BjaO4BgWn9bKlGECJnjx6BHWCN1%2BXwSSJNFnJkk2JoD%2BqLOhdCHf9wNqVj8Zz2ZgBCnaSAdXTwb%2FjqTB7sFnvWDrc5Z1ejU3J%2BZXa%2F5nd8%2FrMxqQLk7XeumBUlC6pYf4bYhsNPHEH135GLIij%2BY%2FVWDQg25Z26xhQwj&X-Amz-Signature=eb7dd0644f5934ba30f3f8a074798ef540f1850d61f104f076e04b3bf5dfa83b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMSB3P7%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCsKV50%2Fw83YWMfeLaHZZy3ZRA3qL2Ht9nFa0PstIxCgQIgGLCggoUleUESarlIAXagdQ9hKMNjxJZnRORMtuhgZbEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrCHCDCNGcwzJe%2FWyrcA8IXOAT%2FKjIKMmAF9e4qcegTMohpnr%2Fp66Z6wzpM%2BVPz3KJR7Li9tFvwSQpKQRTuAHFlzErLxRlRZjruaDjpNVCK3ybrECobkYGc9%2FBjdgjpr1ItS4Fhx6qHThdI%2FP70NOvbYisuWc7DEjYNv7VrVILebijrVdWBd6BDqCw1B19%2Fx9IGOuycm4sjxRgKEVIU2bQJ%2BLBZdyUyWGpF4neDlHscDA81CJw%2BHS9WIxebfDeblHiNYHJG1y6D4xVcyEtMesmQtRiT%2BKMZ%2B4LcetfUB6fRxcKV9nLkDSw%2BQI2MB27Kk3kkl24aKN8I15WBEvKqje%2FDeAometdOqHlY0fnZPeMhiQatkjVl0TTKiFG%2FJX1eg%2FX6AoAwzusimLFg2iGE86JsOWvhr6G1ZX51Sj%2BmdOvmS82WLkmY0Cqz2TYtG5ZLjpvSI2m%2FW40RzvLGVXYM%2BBWJXmfjGX4rzf4lWJ%2FM64cRNwwTCWwb64md0Yh9di2f5yPLiLkfZ8FrESImmGJWUoT7hNdSHvvH0KnWnugMDprOnp5MNeq3n%2FS70buaz%2BqTTaRdrbHHYkmGLgHSqSYP1Mn8%2Fv1LMjNHOsCVDVNjloiioBxec8QlIEU8nfvD5Ijfp%2Bg8RNZ%2FoEKlqwhuMPnqicUGOqUBNDhEjON4Uis9lp6XgT1gosPhfgFSjvjTJuGhuMxjBBMS8uT23IMxowcTG%2BjaO4BgWn9bKlGECJnjx6BHWCN1%2BXwSSJNFnJkk2JoD%2BqLOhdCHf9wNqVj8Zz2ZgBCnaSAdXTwb%2FjqTB7sFnvWDrc5Z1ejU3J%2BZXa%2F5nd8%2FrMxqQLk7XeumBUlC6pYf4bYhsNPHEH135GLIij%2BY%2FVWDQg25Z26xhQwj&X-Amz-Signature=51e65e7f4d239cd84066e9d1808d1802a92403a2351f774f08448c9cfc441b2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMSB3P7%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCsKV50%2Fw83YWMfeLaHZZy3ZRA3qL2Ht9nFa0PstIxCgQIgGLCggoUleUESarlIAXagdQ9hKMNjxJZnRORMtuhgZbEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrCHCDCNGcwzJe%2FWyrcA8IXOAT%2FKjIKMmAF9e4qcegTMohpnr%2Fp66Z6wzpM%2BVPz3KJR7Li9tFvwSQpKQRTuAHFlzErLxRlRZjruaDjpNVCK3ybrECobkYGc9%2FBjdgjpr1ItS4Fhx6qHThdI%2FP70NOvbYisuWc7DEjYNv7VrVILebijrVdWBd6BDqCw1B19%2Fx9IGOuycm4sjxRgKEVIU2bQJ%2BLBZdyUyWGpF4neDlHscDA81CJw%2BHS9WIxebfDeblHiNYHJG1y6D4xVcyEtMesmQtRiT%2BKMZ%2B4LcetfUB6fRxcKV9nLkDSw%2BQI2MB27Kk3kkl24aKN8I15WBEvKqje%2FDeAometdOqHlY0fnZPeMhiQatkjVl0TTKiFG%2FJX1eg%2FX6AoAwzusimLFg2iGE86JsOWvhr6G1ZX51Sj%2BmdOvmS82WLkmY0Cqz2TYtG5ZLjpvSI2m%2FW40RzvLGVXYM%2BBWJXmfjGX4rzf4lWJ%2FM64cRNwwTCWwb64md0Yh9di2f5yPLiLkfZ8FrESImmGJWUoT7hNdSHvvH0KnWnugMDprOnp5MNeq3n%2FS70buaz%2BqTTaRdrbHHYkmGLgHSqSYP1Mn8%2Fv1LMjNHOsCVDVNjloiioBxec8QlIEU8nfvD5Ijfp%2Bg8RNZ%2FoEKlqwhuMPnqicUGOqUBNDhEjON4Uis9lp6XgT1gosPhfgFSjvjTJuGhuMxjBBMS8uT23IMxowcTG%2BjaO4BgWn9bKlGECJnjx6BHWCN1%2BXwSSJNFnJkk2JoD%2BqLOhdCHf9wNqVj8Zz2ZgBCnaSAdXTwb%2FjqTB7sFnvWDrc5Z1ejU3J%2BZXa%2F5nd8%2FrMxqQLk7XeumBUlC6pYf4bYhsNPHEH135GLIij%2BY%2FVWDQg25Z26xhQwj&X-Amz-Signature=d4bb48cc96293376e17e1fe5ed7e78c4a9f64d9cec6f40088584dee785239934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMSB3P7%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCsKV50%2Fw83YWMfeLaHZZy3ZRA3qL2Ht9nFa0PstIxCgQIgGLCggoUleUESarlIAXagdQ9hKMNjxJZnRORMtuhgZbEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrCHCDCNGcwzJe%2FWyrcA8IXOAT%2FKjIKMmAF9e4qcegTMohpnr%2Fp66Z6wzpM%2BVPz3KJR7Li9tFvwSQpKQRTuAHFlzErLxRlRZjruaDjpNVCK3ybrECobkYGc9%2FBjdgjpr1ItS4Fhx6qHThdI%2FP70NOvbYisuWc7DEjYNv7VrVILebijrVdWBd6BDqCw1B19%2Fx9IGOuycm4sjxRgKEVIU2bQJ%2BLBZdyUyWGpF4neDlHscDA81CJw%2BHS9WIxebfDeblHiNYHJG1y6D4xVcyEtMesmQtRiT%2BKMZ%2B4LcetfUB6fRxcKV9nLkDSw%2BQI2MB27Kk3kkl24aKN8I15WBEvKqje%2FDeAometdOqHlY0fnZPeMhiQatkjVl0TTKiFG%2FJX1eg%2FX6AoAwzusimLFg2iGE86JsOWvhr6G1ZX51Sj%2BmdOvmS82WLkmY0Cqz2TYtG5ZLjpvSI2m%2FW40RzvLGVXYM%2BBWJXmfjGX4rzf4lWJ%2FM64cRNwwTCWwb64md0Yh9di2f5yPLiLkfZ8FrESImmGJWUoT7hNdSHvvH0KnWnugMDprOnp5MNeq3n%2FS70buaz%2BqTTaRdrbHHYkmGLgHSqSYP1Mn8%2Fv1LMjNHOsCVDVNjloiioBxec8QlIEU8nfvD5Ijfp%2Bg8RNZ%2FoEKlqwhuMPnqicUGOqUBNDhEjON4Uis9lp6XgT1gosPhfgFSjvjTJuGhuMxjBBMS8uT23IMxowcTG%2BjaO4BgWn9bKlGECJnjx6BHWCN1%2BXwSSJNFnJkk2JoD%2BqLOhdCHf9wNqVj8Zz2ZgBCnaSAdXTwb%2FjqTB7sFnvWDrc5Z1ejU3J%2BZXa%2F5nd8%2FrMxqQLk7XeumBUlC6pYf4bYhsNPHEH135GLIij%2BY%2FVWDQg25Z26xhQwj&X-Amz-Signature=5a1f8113953c2472c537dc58899d2515c82c01566deb21c5259242ff3b25c574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XGVPBGH%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T015028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIEn9F1iMvYnmtHFHjH7Vwtmf0uciMKaJEdYGCIwPfsWnAiAtaV%2Fhs0A06SjvgZY3TMlciploiQj5EGpTh4zayq8lgyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr36eXRZ6UBL%2FwDohKtwDBn1JSFZF2UPLMRSx6jp2AkhujcGgupIXQkDIq27XBN%2B6ZqAzSOLrltS6tzcHEAmh5cto75M2YJ6l4aSeUZs7PNwGZu1Sd%2BhUK1Tcgu3px3VdvC%2BIr7wu8ZuKnqEyK9fYcggvqZixJM%2FYoOrbkUp1GoB9%2BgnAxpwbvx%2BOBC3VlqXYgE8wCrJkxmNhyy2EGio6fzYZVtJ5ae1gJI0%2B6A0hqdiv86PH%2Bzij1OkHUxQNPgzFErjrtSBLLI6uMY1WY47%2Fh1oOcSmirARcxS1hLHH%2BFBdS1GzswMhqwbCf1jN5DGcCyB6QeasO2oYl20ecaygwSvzaMvIEjPMAsFOl99h2UpWmN26sG7oWokPjRHx9v9NXyql5fdG6e4qlfxuVNnnksaHIvH5Nf1%2FsfWrcDeu9YXhSvO6PnZTTrFirHRP12Zywj6a%2Bjmdd5dJBCd%2FmnFzB7ImwjJJB9vN%2FNJecW6nT58%2BHqYrCLIGDLF8zbyCuTTH6pomiyiwE7am%2B6c1aP4M%2F6N4DrzYh8GCoxvATbzlXpATQZYvLPnLRDi26qVySEC1mTN0et3MJB3i5SmYGRKFIUiyPS4%2BePpyg6fgj%2BWnEKEjR7otIMLD8bvyA7KLYkKj8ZmSxi77tebNE7x8w1%2BqJxQY6pgEgdHSr9PpRTY0eLatkMU9XQ925dZmyoo0H4cr9ElqX9LRjE4ycbP4Aoo1307wi6E5W5SZVIi5fehEpmMrq5DaYw%2F%2B3%2B5EqE3j3PSa%2FgiPRjsUDkvEZ8pG3xTxDzDIHEIJdrG%2BLQQggU0%2FTfK%2BP23Xs0ommjtbSRAZCoQ1nlPaTMXEx7S%2BZSwUafIwzAIqcXqwRS0%2FEKP6nFRXeDiTP2tUgywhktFU7&X-Amz-Signature=adad3b611a6458452ca45374cfa13bf81e8b85a3fa42c19efe231edea0fc392f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMSB3P7%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCsKV50%2Fw83YWMfeLaHZZy3ZRA3qL2Ht9nFa0PstIxCgQIgGLCggoUleUESarlIAXagdQ9hKMNjxJZnRORMtuhgZbEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrCHCDCNGcwzJe%2FWyrcA8IXOAT%2FKjIKMmAF9e4qcegTMohpnr%2Fp66Z6wzpM%2BVPz3KJR7Li9tFvwSQpKQRTuAHFlzErLxRlRZjruaDjpNVCK3ybrECobkYGc9%2FBjdgjpr1ItS4Fhx6qHThdI%2FP70NOvbYisuWc7DEjYNv7VrVILebijrVdWBd6BDqCw1B19%2Fx9IGOuycm4sjxRgKEVIU2bQJ%2BLBZdyUyWGpF4neDlHscDA81CJw%2BHS9WIxebfDeblHiNYHJG1y6D4xVcyEtMesmQtRiT%2BKMZ%2B4LcetfUB6fRxcKV9nLkDSw%2BQI2MB27Kk3kkl24aKN8I15WBEvKqje%2FDeAometdOqHlY0fnZPeMhiQatkjVl0TTKiFG%2FJX1eg%2FX6AoAwzusimLFg2iGE86JsOWvhr6G1ZX51Sj%2BmdOvmS82WLkmY0Cqz2TYtG5ZLjpvSI2m%2FW40RzvLGVXYM%2BBWJXmfjGX4rzf4lWJ%2FM64cRNwwTCWwb64md0Yh9di2f5yPLiLkfZ8FrESImmGJWUoT7hNdSHvvH0KnWnugMDprOnp5MNeq3n%2FS70buaz%2BqTTaRdrbHHYkmGLgHSqSYP1Mn8%2Fv1LMjNHOsCVDVNjloiioBxec8QlIEU8nfvD5Ijfp%2Bg8RNZ%2FoEKlqwhuMPnqicUGOqUBNDhEjON4Uis9lp6XgT1gosPhfgFSjvjTJuGhuMxjBBMS8uT23IMxowcTG%2BjaO4BgWn9bKlGECJnjx6BHWCN1%2BXwSSJNFnJkk2JoD%2BqLOhdCHf9wNqVj8Zz2ZgBCnaSAdXTwb%2FjqTB7sFnvWDrc5Z1ejU3J%2BZXa%2F5nd8%2FrMxqQLk7XeumBUlC6pYf4bYhsNPHEH135GLIij%2BY%2FVWDQg25Z26xhQwj&X-Amz-Signature=8ec05e7ddc0c5fb109a953ea1dcd758ca754122aed199cd5961ac588577a6c89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMSB3P7%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCsKV50%2Fw83YWMfeLaHZZy3ZRA3qL2Ht9nFa0PstIxCgQIgGLCggoUleUESarlIAXagdQ9hKMNjxJZnRORMtuhgZbEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrCHCDCNGcwzJe%2FWyrcA8IXOAT%2FKjIKMmAF9e4qcegTMohpnr%2Fp66Z6wzpM%2BVPz3KJR7Li9tFvwSQpKQRTuAHFlzErLxRlRZjruaDjpNVCK3ybrECobkYGc9%2FBjdgjpr1ItS4Fhx6qHThdI%2FP70NOvbYisuWc7DEjYNv7VrVILebijrVdWBd6BDqCw1B19%2Fx9IGOuycm4sjxRgKEVIU2bQJ%2BLBZdyUyWGpF4neDlHscDA81CJw%2BHS9WIxebfDeblHiNYHJG1y6D4xVcyEtMesmQtRiT%2BKMZ%2B4LcetfUB6fRxcKV9nLkDSw%2BQI2MB27Kk3kkl24aKN8I15WBEvKqje%2FDeAometdOqHlY0fnZPeMhiQatkjVl0TTKiFG%2FJX1eg%2FX6AoAwzusimLFg2iGE86JsOWvhr6G1ZX51Sj%2BmdOvmS82WLkmY0Cqz2TYtG5ZLjpvSI2m%2FW40RzvLGVXYM%2BBWJXmfjGX4rzf4lWJ%2FM64cRNwwTCWwb64md0Yh9di2f5yPLiLkfZ8FrESImmGJWUoT7hNdSHvvH0KnWnugMDprOnp5MNeq3n%2FS70buaz%2BqTTaRdrbHHYkmGLgHSqSYP1Mn8%2Fv1LMjNHOsCVDVNjloiioBxec8QlIEU8nfvD5Ijfp%2Bg8RNZ%2FoEKlqwhuMPnqicUGOqUBNDhEjON4Uis9lp6XgT1gosPhfgFSjvjTJuGhuMxjBBMS8uT23IMxowcTG%2BjaO4BgWn9bKlGECJnjx6BHWCN1%2BXwSSJNFnJkk2JoD%2BqLOhdCHf9wNqVj8Zz2ZgBCnaSAdXTwb%2FjqTB7sFnvWDrc5Z1ejU3J%2BZXa%2F5nd8%2FrMxqQLk7XeumBUlC6pYf4bYhsNPHEH135GLIij%2BY%2FVWDQg25Z26xhQwj&X-Amz-Signature=74ee977033f9b3cce5f9e70923e765f766c6f0ea5bc5a61859b8f9f92e3bc5f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMSB3P7%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCsKV50%2Fw83YWMfeLaHZZy3ZRA3qL2Ht9nFa0PstIxCgQIgGLCggoUleUESarlIAXagdQ9hKMNjxJZnRORMtuhgZbEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrCHCDCNGcwzJe%2FWyrcA8IXOAT%2FKjIKMmAF9e4qcegTMohpnr%2Fp66Z6wzpM%2BVPz3KJR7Li9tFvwSQpKQRTuAHFlzErLxRlRZjruaDjpNVCK3ybrECobkYGc9%2FBjdgjpr1ItS4Fhx6qHThdI%2FP70NOvbYisuWc7DEjYNv7VrVILebijrVdWBd6BDqCw1B19%2Fx9IGOuycm4sjxRgKEVIU2bQJ%2BLBZdyUyWGpF4neDlHscDA81CJw%2BHS9WIxebfDeblHiNYHJG1y6D4xVcyEtMesmQtRiT%2BKMZ%2B4LcetfUB6fRxcKV9nLkDSw%2BQI2MB27Kk3kkl24aKN8I15WBEvKqje%2FDeAometdOqHlY0fnZPeMhiQatkjVl0TTKiFG%2FJX1eg%2FX6AoAwzusimLFg2iGE86JsOWvhr6G1ZX51Sj%2BmdOvmS82WLkmY0Cqz2TYtG5ZLjpvSI2m%2FW40RzvLGVXYM%2BBWJXmfjGX4rzf4lWJ%2FM64cRNwwTCWwb64md0Yh9di2f5yPLiLkfZ8FrESImmGJWUoT7hNdSHvvH0KnWnugMDprOnp5MNeq3n%2FS70buaz%2BqTTaRdrbHHYkmGLgHSqSYP1Mn8%2Fv1LMjNHOsCVDVNjloiioBxec8QlIEU8nfvD5Ijfp%2Bg8RNZ%2FoEKlqwhuMPnqicUGOqUBNDhEjON4Uis9lp6XgT1gosPhfgFSjvjTJuGhuMxjBBMS8uT23IMxowcTG%2BjaO4BgWn9bKlGECJnjx6BHWCN1%2BXwSSJNFnJkk2JoD%2BqLOhdCHf9wNqVj8Zz2ZgBCnaSAdXTwb%2FjqTB7sFnvWDrc5Z1ejU3J%2BZXa%2F5nd8%2FrMxqQLk7XeumBUlC6pYf4bYhsNPHEH135GLIij%2BY%2FVWDQg25Z26xhQwj&X-Amz-Signature=d4bb48cc96293376e17e1fe5ed7e78c4a9f64d9cec6f40088584dee785239934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMSB3P7%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCsKV50%2Fw83YWMfeLaHZZy3ZRA3qL2Ht9nFa0PstIxCgQIgGLCggoUleUESarlIAXagdQ9hKMNjxJZnRORMtuhgZbEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrCHCDCNGcwzJe%2FWyrcA8IXOAT%2FKjIKMmAF9e4qcegTMohpnr%2Fp66Z6wzpM%2BVPz3KJR7Li9tFvwSQpKQRTuAHFlzErLxRlRZjruaDjpNVCK3ybrECobkYGc9%2FBjdgjpr1ItS4Fhx6qHThdI%2FP70NOvbYisuWc7DEjYNv7VrVILebijrVdWBd6BDqCw1B19%2Fx9IGOuycm4sjxRgKEVIU2bQJ%2BLBZdyUyWGpF4neDlHscDA81CJw%2BHS9WIxebfDeblHiNYHJG1y6D4xVcyEtMesmQtRiT%2BKMZ%2B4LcetfUB6fRxcKV9nLkDSw%2BQI2MB27Kk3kkl24aKN8I15WBEvKqje%2FDeAometdOqHlY0fnZPeMhiQatkjVl0TTKiFG%2FJX1eg%2FX6AoAwzusimLFg2iGE86JsOWvhr6G1ZX51Sj%2BmdOvmS82WLkmY0Cqz2TYtG5ZLjpvSI2m%2FW40RzvLGVXYM%2BBWJXmfjGX4rzf4lWJ%2FM64cRNwwTCWwb64md0Yh9di2f5yPLiLkfZ8FrESImmGJWUoT7hNdSHvvH0KnWnugMDprOnp5MNeq3n%2FS70buaz%2BqTTaRdrbHHYkmGLgHSqSYP1Mn8%2Fv1LMjNHOsCVDVNjloiioBxec8QlIEU8nfvD5Ijfp%2Bg8RNZ%2FoEKlqwhuMPnqicUGOqUBNDhEjON4Uis9lp6XgT1gosPhfgFSjvjTJuGhuMxjBBMS8uT23IMxowcTG%2BjaO4BgWn9bKlGECJnjx6BHWCN1%2BXwSSJNFnJkk2JoD%2BqLOhdCHf9wNqVj8Zz2ZgBCnaSAdXTwb%2FjqTB7sFnvWDrc5Z1ejU3J%2BZXa%2F5nd8%2FrMxqQLk7XeumBUlC6pYf4bYhsNPHEH135GLIij%2BY%2FVWDQg25Z26xhQwj&X-Amz-Signature=9ab6130417d309f1be65fe98f8669957761ff3c8506b2846c80373c15a1bc028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMSB3P7%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCsKV50%2Fw83YWMfeLaHZZy3ZRA3qL2Ht9nFa0PstIxCgQIgGLCggoUleUESarlIAXagdQ9hKMNjxJZnRORMtuhgZbEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrCHCDCNGcwzJe%2FWyrcA8IXOAT%2FKjIKMmAF9e4qcegTMohpnr%2Fp66Z6wzpM%2BVPz3KJR7Li9tFvwSQpKQRTuAHFlzErLxRlRZjruaDjpNVCK3ybrECobkYGc9%2FBjdgjpr1ItS4Fhx6qHThdI%2FP70NOvbYisuWc7DEjYNv7VrVILebijrVdWBd6BDqCw1B19%2Fx9IGOuycm4sjxRgKEVIU2bQJ%2BLBZdyUyWGpF4neDlHscDA81CJw%2BHS9WIxebfDeblHiNYHJG1y6D4xVcyEtMesmQtRiT%2BKMZ%2B4LcetfUB6fRxcKV9nLkDSw%2BQI2MB27Kk3kkl24aKN8I15WBEvKqje%2FDeAometdOqHlY0fnZPeMhiQatkjVl0TTKiFG%2FJX1eg%2FX6AoAwzusimLFg2iGE86JsOWvhr6G1ZX51Sj%2BmdOvmS82WLkmY0Cqz2TYtG5ZLjpvSI2m%2FW40RzvLGVXYM%2BBWJXmfjGX4rzf4lWJ%2FM64cRNwwTCWwb64md0Yh9di2f5yPLiLkfZ8FrESImmGJWUoT7hNdSHvvH0KnWnugMDprOnp5MNeq3n%2FS70buaz%2BqTTaRdrbHHYkmGLgHSqSYP1Mn8%2Fv1LMjNHOsCVDVNjloiioBxec8QlIEU8nfvD5Ijfp%2Bg8RNZ%2FoEKlqwhuMPnqicUGOqUBNDhEjON4Uis9lp6XgT1gosPhfgFSjvjTJuGhuMxjBBMS8uT23IMxowcTG%2BjaO4BgWn9bKlGECJnjx6BHWCN1%2BXwSSJNFnJkk2JoD%2BqLOhdCHf9wNqVj8Zz2ZgBCnaSAdXTwb%2FjqTB7sFnvWDrc5Z1ejU3J%2BZXa%2F5nd8%2FrMxqQLk7XeumBUlC6pYf4bYhsNPHEH135GLIij%2BY%2FVWDQg25Z26xhQwj&X-Amz-Signature=dae3af751408df20fb49f92e7abcbec7b873241b87d01fa9436a7658165b0c08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DMSB3P7%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCsKV50%2Fw83YWMfeLaHZZy3ZRA3qL2Ht9nFa0PstIxCgQIgGLCggoUleUESarlIAXagdQ9hKMNjxJZnRORMtuhgZbEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrCHCDCNGcwzJe%2FWyrcA8IXOAT%2FKjIKMmAF9e4qcegTMohpnr%2Fp66Z6wzpM%2BVPz3KJR7Li9tFvwSQpKQRTuAHFlzErLxRlRZjruaDjpNVCK3ybrECobkYGc9%2FBjdgjpr1ItS4Fhx6qHThdI%2FP70NOvbYisuWc7DEjYNv7VrVILebijrVdWBd6BDqCw1B19%2Fx9IGOuycm4sjxRgKEVIU2bQJ%2BLBZdyUyWGpF4neDlHscDA81CJw%2BHS9WIxebfDeblHiNYHJG1y6D4xVcyEtMesmQtRiT%2BKMZ%2B4LcetfUB6fRxcKV9nLkDSw%2BQI2MB27Kk3kkl24aKN8I15WBEvKqje%2FDeAometdOqHlY0fnZPeMhiQatkjVl0TTKiFG%2FJX1eg%2FX6AoAwzusimLFg2iGE86JsOWvhr6G1ZX51Sj%2BmdOvmS82WLkmY0Cqz2TYtG5ZLjpvSI2m%2FW40RzvLGVXYM%2BBWJXmfjGX4rzf4lWJ%2FM64cRNwwTCWwb64md0Yh9di2f5yPLiLkfZ8FrESImmGJWUoT7hNdSHvvH0KnWnugMDprOnp5MNeq3n%2FS70buaz%2BqTTaRdrbHHYkmGLgHSqSYP1Mn8%2Fv1LMjNHOsCVDVNjloiioBxec8QlIEU8nfvD5Ijfp%2Bg8RNZ%2FoEKlqwhuMPnqicUGOqUBNDhEjON4Uis9lp6XgT1gosPhfgFSjvjTJuGhuMxjBBMS8uT23IMxowcTG%2BjaO4BgWn9bKlGECJnjx6BHWCN1%2BXwSSJNFnJkk2JoD%2BqLOhdCHf9wNqVj8Zz2ZgBCnaSAdXTwb%2FjqTB7sFnvWDrc5Z1ejU3J%2BZXa%2F5nd8%2FrMxqQLk7XeumBUlC6pYf4bYhsNPHEH135GLIij%2BY%2FVWDQg25Z26xhQwj&X-Amz-Signature=55237d54886f93f9012b63e29557696ca2a138e52de042fcbb765e4788e17fdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


