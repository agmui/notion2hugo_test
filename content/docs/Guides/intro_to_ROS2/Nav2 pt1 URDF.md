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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QG7X5MI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFRq61zSLFVGXx60MDykVQlyL%2Bu4PoPg4WUefjqbR16OAiEAkVQbwLYrU6UtXXrxJFQlK%2BbcAOLL5rQJxmmUe7Q%2FDOkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvGSGxtH2X9wBjcNCrcAxDGUlGty127%2BKv0eNH74SL36ef%2FNQGXPTE7F7NCiUZcaQB2xwc5%2F%2Fnqdws3apAT2bONQtOZC0WF3SI5nmEwn0eoX6VrSn3s5nM2cIoA0NxTMP73VXwGRU0k6SpuDvOLJKz3JicwLUYDthgVmp6iY%2ByHohtF7PjSY8Eid8y7C0TMiO%2FkFr%2FN%2BsemzTNFaaF%2BCzxXYxbPp8d5aK1rOf%2BoeCzUuRAnGnS3l2acUyVt%2Bk5LqwvCX5WYvmCvEpdWkYw4CrJN4E6X8LnM3l0GfW3e7MmboAxHasu%2Fae28fBEqPuDYvfZp%2BsiT1pa7q8ZPPFcoQJjYNVwb9gF5cZLnTxbEf7LsxbVNuk%2FtgxuX96BgERpGNHtlNSM1k0DCECCZuYfAv8f7%2BOU5Spbew0azCHOqfCyI6opARkWlAG3t8k0DussDNGSk9xAt9ytG6eMJDffpSMVhROi3%2BoafrW1id4kImDAdm4%2BXrfOVvWZWaZ7ykTMpdBKrYZDTEmRWJxT2cjUYr54p8p66DpYcUQlnuxRY73kuoiDWj2YoQmmIZqeSm7Dz0JsuTYvWf3sfOrp%2B9QJQ%2FH0Gr0ETHKXyx8xf%2BIS9qRR%2FVhllo3v7ek4KOqY6BPRFluohSRilCpVu7U4nMMqC2MQGOqUBwZyFrLYGuKPOdP9Ag3q3JRwnkX%2BWlDkPHEBrX3xgoBXYfFhOfKOi0zOj5OIfcvrgog9rZIxZV7iSB9sxwhUvJyh0wr5u6zILVpufWKO02TNybDdigMP6tiTzlC2anrcwDdpd0sYsL4it4YPUofKfkNx7coO%2BhfVzduP8aVj%2FilYwcd5foqlVl3XeghrgFJQM18rN3dM8CiVFQ%2FKkiGfuR9iizB1p&X-Amz-Signature=301e197b9bf59796eb07a6d56bbc412d97d8014e8bbb3fb9434280c33ee4e213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QG7X5MI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFRq61zSLFVGXx60MDykVQlyL%2Bu4PoPg4WUefjqbR16OAiEAkVQbwLYrU6UtXXrxJFQlK%2BbcAOLL5rQJxmmUe7Q%2FDOkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvGSGxtH2X9wBjcNCrcAxDGUlGty127%2BKv0eNH74SL36ef%2FNQGXPTE7F7NCiUZcaQB2xwc5%2F%2Fnqdws3apAT2bONQtOZC0WF3SI5nmEwn0eoX6VrSn3s5nM2cIoA0NxTMP73VXwGRU0k6SpuDvOLJKz3JicwLUYDthgVmp6iY%2ByHohtF7PjSY8Eid8y7C0TMiO%2FkFr%2FN%2BsemzTNFaaF%2BCzxXYxbPp8d5aK1rOf%2BoeCzUuRAnGnS3l2acUyVt%2Bk5LqwvCX5WYvmCvEpdWkYw4CrJN4E6X8LnM3l0GfW3e7MmboAxHasu%2Fae28fBEqPuDYvfZp%2BsiT1pa7q8ZPPFcoQJjYNVwb9gF5cZLnTxbEf7LsxbVNuk%2FtgxuX96BgERpGNHtlNSM1k0DCECCZuYfAv8f7%2BOU5Spbew0azCHOqfCyI6opARkWlAG3t8k0DussDNGSk9xAt9ytG6eMJDffpSMVhROi3%2BoafrW1id4kImDAdm4%2BXrfOVvWZWaZ7ykTMpdBKrYZDTEmRWJxT2cjUYr54p8p66DpYcUQlnuxRY73kuoiDWj2YoQmmIZqeSm7Dz0JsuTYvWf3sfOrp%2B9QJQ%2FH0Gr0ETHKXyx8xf%2BIS9qRR%2FVhllo3v7ek4KOqY6BPRFluohSRilCpVu7U4nMMqC2MQGOqUBwZyFrLYGuKPOdP9Ag3q3JRwnkX%2BWlDkPHEBrX3xgoBXYfFhOfKOi0zOj5OIfcvrgog9rZIxZV7iSB9sxwhUvJyh0wr5u6zILVpufWKO02TNybDdigMP6tiTzlC2anrcwDdpd0sYsL4it4YPUofKfkNx7coO%2BhfVzduP8aVj%2FilYwcd5foqlVl3XeghrgFJQM18rN3dM8CiVFQ%2FKkiGfuR9iizB1p&X-Amz-Signature=e12ba12547ad2a21bbd4979202bddfb8ad9c7a0da855cab3b0685cdfbfe19e6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QG7X5MI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFRq61zSLFVGXx60MDykVQlyL%2Bu4PoPg4WUefjqbR16OAiEAkVQbwLYrU6UtXXrxJFQlK%2BbcAOLL5rQJxmmUe7Q%2FDOkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvGSGxtH2X9wBjcNCrcAxDGUlGty127%2BKv0eNH74SL36ef%2FNQGXPTE7F7NCiUZcaQB2xwc5%2F%2Fnqdws3apAT2bONQtOZC0WF3SI5nmEwn0eoX6VrSn3s5nM2cIoA0NxTMP73VXwGRU0k6SpuDvOLJKz3JicwLUYDthgVmp6iY%2ByHohtF7PjSY8Eid8y7C0TMiO%2FkFr%2FN%2BsemzTNFaaF%2BCzxXYxbPp8d5aK1rOf%2BoeCzUuRAnGnS3l2acUyVt%2Bk5LqwvCX5WYvmCvEpdWkYw4CrJN4E6X8LnM3l0GfW3e7MmboAxHasu%2Fae28fBEqPuDYvfZp%2BsiT1pa7q8ZPPFcoQJjYNVwb9gF5cZLnTxbEf7LsxbVNuk%2FtgxuX96BgERpGNHtlNSM1k0DCECCZuYfAv8f7%2BOU5Spbew0azCHOqfCyI6opARkWlAG3t8k0DussDNGSk9xAt9ytG6eMJDffpSMVhROi3%2BoafrW1id4kImDAdm4%2BXrfOVvWZWaZ7ykTMpdBKrYZDTEmRWJxT2cjUYr54p8p66DpYcUQlnuxRY73kuoiDWj2YoQmmIZqeSm7Dz0JsuTYvWf3sfOrp%2B9QJQ%2FH0Gr0ETHKXyx8xf%2BIS9qRR%2FVhllo3v7ek4KOqY6BPRFluohSRilCpVu7U4nMMqC2MQGOqUBwZyFrLYGuKPOdP9Ag3q3JRwnkX%2BWlDkPHEBrX3xgoBXYfFhOfKOi0zOj5OIfcvrgog9rZIxZV7iSB9sxwhUvJyh0wr5u6zILVpufWKO02TNybDdigMP6tiTzlC2anrcwDdpd0sYsL4it4YPUofKfkNx7coO%2BhfVzduP8aVj%2FilYwcd5foqlVl3XeghrgFJQM18rN3dM8CiVFQ%2FKkiGfuR9iizB1p&X-Amz-Signature=b9ad6a79da250d93b72b145715deac57d204e63db7a340729a771da4e67ccfc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QG7X5MI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFRq61zSLFVGXx60MDykVQlyL%2Bu4PoPg4WUefjqbR16OAiEAkVQbwLYrU6UtXXrxJFQlK%2BbcAOLL5rQJxmmUe7Q%2FDOkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvGSGxtH2X9wBjcNCrcAxDGUlGty127%2BKv0eNH74SL36ef%2FNQGXPTE7F7NCiUZcaQB2xwc5%2F%2Fnqdws3apAT2bONQtOZC0WF3SI5nmEwn0eoX6VrSn3s5nM2cIoA0NxTMP73VXwGRU0k6SpuDvOLJKz3JicwLUYDthgVmp6iY%2ByHohtF7PjSY8Eid8y7C0TMiO%2FkFr%2FN%2BsemzTNFaaF%2BCzxXYxbPp8d5aK1rOf%2BoeCzUuRAnGnS3l2acUyVt%2Bk5LqwvCX5WYvmCvEpdWkYw4CrJN4E6X8LnM3l0GfW3e7MmboAxHasu%2Fae28fBEqPuDYvfZp%2BsiT1pa7q8ZPPFcoQJjYNVwb9gF5cZLnTxbEf7LsxbVNuk%2FtgxuX96BgERpGNHtlNSM1k0DCECCZuYfAv8f7%2BOU5Spbew0azCHOqfCyI6opARkWlAG3t8k0DussDNGSk9xAt9ytG6eMJDffpSMVhROi3%2BoafrW1id4kImDAdm4%2BXrfOVvWZWaZ7ykTMpdBKrYZDTEmRWJxT2cjUYr54p8p66DpYcUQlnuxRY73kuoiDWj2YoQmmIZqeSm7Dz0JsuTYvWf3sfOrp%2B9QJQ%2FH0Gr0ETHKXyx8xf%2BIS9qRR%2FVhllo3v7ek4KOqY6BPRFluohSRilCpVu7U4nMMqC2MQGOqUBwZyFrLYGuKPOdP9Ag3q3JRwnkX%2BWlDkPHEBrX3xgoBXYfFhOfKOi0zOj5OIfcvrgog9rZIxZV7iSB9sxwhUvJyh0wr5u6zILVpufWKO02TNybDdigMP6tiTzlC2anrcwDdpd0sYsL4it4YPUofKfkNx7coO%2BhfVzduP8aVj%2FilYwcd5foqlVl3XeghrgFJQM18rN3dM8CiVFQ%2FKkiGfuR9iizB1p&X-Amz-Signature=902cf5152ae06737c5e382bd46ea6e9a396883a046e391cf63c47d315a86692d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QG7X5MI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFRq61zSLFVGXx60MDykVQlyL%2Bu4PoPg4WUefjqbR16OAiEAkVQbwLYrU6UtXXrxJFQlK%2BbcAOLL5rQJxmmUe7Q%2FDOkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvGSGxtH2X9wBjcNCrcAxDGUlGty127%2BKv0eNH74SL36ef%2FNQGXPTE7F7NCiUZcaQB2xwc5%2F%2Fnqdws3apAT2bONQtOZC0WF3SI5nmEwn0eoX6VrSn3s5nM2cIoA0NxTMP73VXwGRU0k6SpuDvOLJKz3JicwLUYDthgVmp6iY%2ByHohtF7PjSY8Eid8y7C0TMiO%2FkFr%2FN%2BsemzTNFaaF%2BCzxXYxbPp8d5aK1rOf%2BoeCzUuRAnGnS3l2acUyVt%2Bk5LqwvCX5WYvmCvEpdWkYw4CrJN4E6X8LnM3l0GfW3e7MmboAxHasu%2Fae28fBEqPuDYvfZp%2BsiT1pa7q8ZPPFcoQJjYNVwb9gF5cZLnTxbEf7LsxbVNuk%2FtgxuX96BgERpGNHtlNSM1k0DCECCZuYfAv8f7%2BOU5Spbew0azCHOqfCyI6opARkWlAG3t8k0DussDNGSk9xAt9ytG6eMJDffpSMVhROi3%2BoafrW1id4kImDAdm4%2BXrfOVvWZWaZ7ykTMpdBKrYZDTEmRWJxT2cjUYr54p8p66DpYcUQlnuxRY73kuoiDWj2YoQmmIZqeSm7Dz0JsuTYvWf3sfOrp%2B9QJQ%2FH0Gr0ETHKXyx8xf%2BIS9qRR%2FVhllo3v7ek4KOqY6BPRFluohSRilCpVu7U4nMMqC2MQGOqUBwZyFrLYGuKPOdP9Ag3q3JRwnkX%2BWlDkPHEBrX3xgoBXYfFhOfKOi0zOj5OIfcvrgog9rZIxZV7iSB9sxwhUvJyh0wr5u6zILVpufWKO02TNybDdigMP6tiTzlC2anrcwDdpd0sYsL4it4YPUofKfkNx7coO%2BhfVzduP8aVj%2FilYwcd5foqlVl3XeghrgFJQM18rN3dM8CiVFQ%2FKkiGfuR9iizB1p&X-Amz-Signature=d70c659c6586215c6007603a825c50ed18c054ad0985a984fb601bf192755756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QG7X5MI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFRq61zSLFVGXx60MDykVQlyL%2Bu4PoPg4WUefjqbR16OAiEAkVQbwLYrU6UtXXrxJFQlK%2BbcAOLL5rQJxmmUe7Q%2FDOkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvGSGxtH2X9wBjcNCrcAxDGUlGty127%2BKv0eNH74SL36ef%2FNQGXPTE7F7NCiUZcaQB2xwc5%2F%2Fnqdws3apAT2bONQtOZC0WF3SI5nmEwn0eoX6VrSn3s5nM2cIoA0NxTMP73VXwGRU0k6SpuDvOLJKz3JicwLUYDthgVmp6iY%2ByHohtF7PjSY8Eid8y7C0TMiO%2FkFr%2FN%2BsemzTNFaaF%2BCzxXYxbPp8d5aK1rOf%2BoeCzUuRAnGnS3l2acUyVt%2Bk5LqwvCX5WYvmCvEpdWkYw4CrJN4E6X8LnM3l0GfW3e7MmboAxHasu%2Fae28fBEqPuDYvfZp%2BsiT1pa7q8ZPPFcoQJjYNVwb9gF5cZLnTxbEf7LsxbVNuk%2FtgxuX96BgERpGNHtlNSM1k0DCECCZuYfAv8f7%2BOU5Spbew0azCHOqfCyI6opARkWlAG3t8k0DussDNGSk9xAt9ytG6eMJDffpSMVhROi3%2BoafrW1id4kImDAdm4%2BXrfOVvWZWaZ7ykTMpdBKrYZDTEmRWJxT2cjUYr54p8p66DpYcUQlnuxRY73kuoiDWj2YoQmmIZqeSm7Dz0JsuTYvWf3sfOrp%2B9QJQ%2FH0Gr0ETHKXyx8xf%2BIS9qRR%2FVhllo3v7ek4KOqY6BPRFluohSRilCpVu7U4nMMqC2MQGOqUBwZyFrLYGuKPOdP9Ag3q3JRwnkX%2BWlDkPHEBrX3xgoBXYfFhOfKOi0zOj5OIfcvrgog9rZIxZV7iSB9sxwhUvJyh0wr5u6zILVpufWKO02TNybDdigMP6tiTzlC2anrcwDdpd0sYsL4it4YPUofKfkNx7coO%2BhfVzduP8aVj%2FilYwcd5foqlVl3XeghrgFJQM18rN3dM8CiVFQ%2FKkiGfuR9iizB1p&X-Amz-Signature=8ca902002a31bcbc56474f756b7d16d6bbbad6848b10059aa9867844bc695585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QG7X5MI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFRq61zSLFVGXx60MDykVQlyL%2Bu4PoPg4WUefjqbR16OAiEAkVQbwLYrU6UtXXrxJFQlK%2BbcAOLL5rQJxmmUe7Q%2FDOkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvGSGxtH2X9wBjcNCrcAxDGUlGty127%2BKv0eNH74SL36ef%2FNQGXPTE7F7NCiUZcaQB2xwc5%2F%2Fnqdws3apAT2bONQtOZC0WF3SI5nmEwn0eoX6VrSn3s5nM2cIoA0NxTMP73VXwGRU0k6SpuDvOLJKz3JicwLUYDthgVmp6iY%2ByHohtF7PjSY8Eid8y7C0TMiO%2FkFr%2FN%2BsemzTNFaaF%2BCzxXYxbPp8d5aK1rOf%2BoeCzUuRAnGnS3l2acUyVt%2Bk5LqwvCX5WYvmCvEpdWkYw4CrJN4E6X8LnM3l0GfW3e7MmboAxHasu%2Fae28fBEqPuDYvfZp%2BsiT1pa7q8ZPPFcoQJjYNVwb9gF5cZLnTxbEf7LsxbVNuk%2FtgxuX96BgERpGNHtlNSM1k0DCECCZuYfAv8f7%2BOU5Spbew0azCHOqfCyI6opARkWlAG3t8k0DussDNGSk9xAt9ytG6eMJDffpSMVhROi3%2BoafrW1id4kImDAdm4%2BXrfOVvWZWaZ7ykTMpdBKrYZDTEmRWJxT2cjUYr54p8p66DpYcUQlnuxRY73kuoiDWj2YoQmmIZqeSm7Dz0JsuTYvWf3sfOrp%2B9QJQ%2FH0Gr0ETHKXyx8xf%2BIS9qRR%2FVhllo3v7ek4KOqY6BPRFluohSRilCpVu7U4nMMqC2MQGOqUBwZyFrLYGuKPOdP9Ag3q3JRwnkX%2BWlDkPHEBrX3xgoBXYfFhOfKOi0zOj5OIfcvrgog9rZIxZV7iSB9sxwhUvJyh0wr5u6zILVpufWKO02TNybDdigMP6tiTzlC2anrcwDdpd0sYsL4it4YPUofKfkNx7coO%2BhfVzduP8aVj%2FilYwcd5foqlVl3XeghrgFJQM18rN3dM8CiVFQ%2FKkiGfuR9iizB1p&X-Amz-Signature=618039413cf037210720bb71a6ed30fb2cf87b1e2f69eddfc453846bdbc87786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QG7X5MI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFRq61zSLFVGXx60MDykVQlyL%2Bu4PoPg4WUefjqbR16OAiEAkVQbwLYrU6UtXXrxJFQlK%2BbcAOLL5rQJxmmUe7Q%2FDOkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvGSGxtH2X9wBjcNCrcAxDGUlGty127%2BKv0eNH74SL36ef%2FNQGXPTE7F7NCiUZcaQB2xwc5%2F%2Fnqdws3apAT2bONQtOZC0WF3SI5nmEwn0eoX6VrSn3s5nM2cIoA0NxTMP73VXwGRU0k6SpuDvOLJKz3JicwLUYDthgVmp6iY%2ByHohtF7PjSY8Eid8y7C0TMiO%2FkFr%2FN%2BsemzTNFaaF%2BCzxXYxbPp8d5aK1rOf%2BoeCzUuRAnGnS3l2acUyVt%2Bk5LqwvCX5WYvmCvEpdWkYw4CrJN4E6X8LnM3l0GfW3e7MmboAxHasu%2Fae28fBEqPuDYvfZp%2BsiT1pa7q8ZPPFcoQJjYNVwb9gF5cZLnTxbEf7LsxbVNuk%2FtgxuX96BgERpGNHtlNSM1k0DCECCZuYfAv8f7%2BOU5Spbew0azCHOqfCyI6opARkWlAG3t8k0DussDNGSk9xAt9ytG6eMJDffpSMVhROi3%2BoafrW1id4kImDAdm4%2BXrfOVvWZWaZ7ykTMpdBKrYZDTEmRWJxT2cjUYr54p8p66DpYcUQlnuxRY73kuoiDWj2YoQmmIZqeSm7Dz0JsuTYvWf3sfOrp%2B9QJQ%2FH0Gr0ETHKXyx8xf%2BIS9qRR%2FVhllo3v7ek4KOqY6BPRFluohSRilCpVu7U4nMMqC2MQGOqUBwZyFrLYGuKPOdP9Ag3q3JRwnkX%2BWlDkPHEBrX3xgoBXYfFhOfKOi0zOj5OIfcvrgog9rZIxZV7iSB9sxwhUvJyh0wr5u6zILVpufWKO02TNybDdigMP6tiTzlC2anrcwDdpd0sYsL4it4YPUofKfkNx7coO%2BhfVzduP8aVj%2FilYwcd5foqlVl3XeghrgFJQM18rN3dM8CiVFQ%2FKkiGfuR9iizB1p&X-Amz-Signature=11d40d8fbf72c396a531cc9b937a387c60f40a0b2e6f5d41e92ac1e6714f240b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QG7X5MI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFRq61zSLFVGXx60MDykVQlyL%2Bu4PoPg4WUefjqbR16OAiEAkVQbwLYrU6UtXXrxJFQlK%2BbcAOLL5rQJxmmUe7Q%2FDOkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvGSGxtH2X9wBjcNCrcAxDGUlGty127%2BKv0eNH74SL36ef%2FNQGXPTE7F7NCiUZcaQB2xwc5%2F%2Fnqdws3apAT2bONQtOZC0WF3SI5nmEwn0eoX6VrSn3s5nM2cIoA0NxTMP73VXwGRU0k6SpuDvOLJKz3JicwLUYDthgVmp6iY%2ByHohtF7PjSY8Eid8y7C0TMiO%2FkFr%2FN%2BsemzTNFaaF%2BCzxXYxbPp8d5aK1rOf%2BoeCzUuRAnGnS3l2acUyVt%2Bk5LqwvCX5WYvmCvEpdWkYw4CrJN4E6X8LnM3l0GfW3e7MmboAxHasu%2Fae28fBEqPuDYvfZp%2BsiT1pa7q8ZPPFcoQJjYNVwb9gF5cZLnTxbEf7LsxbVNuk%2FtgxuX96BgERpGNHtlNSM1k0DCECCZuYfAv8f7%2BOU5Spbew0azCHOqfCyI6opARkWlAG3t8k0DussDNGSk9xAt9ytG6eMJDffpSMVhROi3%2BoafrW1id4kImDAdm4%2BXrfOVvWZWaZ7ykTMpdBKrYZDTEmRWJxT2cjUYr54p8p66DpYcUQlnuxRY73kuoiDWj2YoQmmIZqeSm7Dz0JsuTYvWf3sfOrp%2B9QJQ%2FH0Gr0ETHKXyx8xf%2BIS9qRR%2FVhllo3v7ek4KOqY6BPRFluohSRilCpVu7U4nMMqC2MQGOqUBwZyFrLYGuKPOdP9Ag3q3JRwnkX%2BWlDkPHEBrX3xgoBXYfFhOfKOi0zOj5OIfcvrgog9rZIxZV7iSB9sxwhUvJyh0wr5u6zILVpufWKO02TNybDdigMP6tiTzlC2anrcwDdpd0sYsL4it4YPUofKfkNx7coO%2BhfVzduP8aVj%2FilYwcd5foqlVl3XeghrgFJQM18rN3dM8CiVFQ%2FKkiGfuR9iizB1p&X-Amz-Signature=5fd0c6aaa6f81f9f2c6af05e39350a32420edcbe363969d26bd553e696d9dd92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QG7X5MI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFRq61zSLFVGXx60MDykVQlyL%2Bu4PoPg4WUefjqbR16OAiEAkVQbwLYrU6UtXXrxJFQlK%2BbcAOLL5rQJxmmUe7Q%2FDOkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvGSGxtH2X9wBjcNCrcAxDGUlGty127%2BKv0eNH74SL36ef%2FNQGXPTE7F7NCiUZcaQB2xwc5%2F%2Fnqdws3apAT2bONQtOZC0WF3SI5nmEwn0eoX6VrSn3s5nM2cIoA0NxTMP73VXwGRU0k6SpuDvOLJKz3JicwLUYDthgVmp6iY%2ByHohtF7PjSY8Eid8y7C0TMiO%2FkFr%2FN%2BsemzTNFaaF%2BCzxXYxbPp8d5aK1rOf%2BoeCzUuRAnGnS3l2acUyVt%2Bk5LqwvCX5WYvmCvEpdWkYw4CrJN4E6X8LnM3l0GfW3e7MmboAxHasu%2Fae28fBEqPuDYvfZp%2BsiT1pa7q8ZPPFcoQJjYNVwb9gF5cZLnTxbEf7LsxbVNuk%2FtgxuX96BgERpGNHtlNSM1k0DCECCZuYfAv8f7%2BOU5Spbew0azCHOqfCyI6opARkWlAG3t8k0DussDNGSk9xAt9ytG6eMJDffpSMVhROi3%2BoafrW1id4kImDAdm4%2BXrfOVvWZWaZ7ykTMpdBKrYZDTEmRWJxT2cjUYr54p8p66DpYcUQlnuxRY73kuoiDWj2YoQmmIZqeSm7Dz0JsuTYvWf3sfOrp%2B9QJQ%2FH0Gr0ETHKXyx8xf%2BIS9qRR%2FVhllo3v7ek4KOqY6BPRFluohSRilCpVu7U4nMMqC2MQGOqUBwZyFrLYGuKPOdP9Ag3q3JRwnkX%2BWlDkPHEBrX3xgoBXYfFhOfKOi0zOj5OIfcvrgog9rZIxZV7iSB9sxwhUvJyh0wr5u6zILVpufWKO02TNybDdigMP6tiTzlC2anrcwDdpd0sYsL4it4YPUofKfkNx7coO%2BhfVzduP8aVj%2FilYwcd5foqlVl3XeghrgFJQM18rN3dM8CiVFQ%2FKkiGfuR9iizB1p&X-Amz-Signature=df7a22a5acd8a817bf98f32c90992838a54b04976942912c55bad26192b06a6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OP2CLLX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCAfKTLJS39jz%2FtxuXNdovyarU%2FUKmOBusAYRFol0OsYQIgKG5PFUnUP6GHKF7os4BXUImBJt0swx2lz3kLvTcrewUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbnRU720kgaEgl1myrcAwWzAkNm4EtcqoGMQqW85lrJcAqGbyIOdxn%2BQCzhPQipPrR%2FWdmDY6%2FyARADez%2F3kJruxMUC33gd7RpR3Gh%2FOQdOM%2F0urp80JcsFXnaE9tRyrh8tQlfedvo0PGbcqpYjc0BamZ1zckOSaFLP3o6l%2B0YHxMniLRc3UjdA1W6E01j8MiT1SFcre2nYx1Ks4FbU2Piwo63Zu2Pec%2BFOFxByf4cST8H4olv4P1ay6W7yHI%2Bsf%2Bp5p7h7S1HaQRwTWzbF98GxdFkiiN9PILn0jWU9l%2B4m4WW5P0IRcnM2Cfr10Nhj898xpCGKYH8MGcDeARqPS5G5Y6Ccu9%2BnjXMcrCIYfI%2FMcA1EknXLZDumbpGkAADoeETSEzHXaQ%2Blr2PttmQb3aepi1xLMh52GQiFHG0xX%2FHeVFU5ClooMOM%2F%2Bk%2BpxDtnkzknDG9RNH3XEhv8aRrIi5C5bTO189wBjYObxhwJIMJpdB0o%2FM1%2FHHwb1APv05XmSoLvdRq8l7paBI3hIPH0wDqsmjzFCR2VNb7JbuzS5k4F5WNXQtJSh3lbIFeyYMjOw1VU7suAFxc64sbY5H9DqKvtv4FBscuA1IVdnXmKN05VqK8bvhlqKgtSsmN7SxepoJgxkISHqkaaio3dMI2C2MQGOqUBxY%2BDCwGKFbrppN1D3otyJfoHV5ucItZFSHQxBkCnCpqucWu4hAV845k9zPmO6H2c97BEA7uJPac8M%2F%2Fyjx7bg4aTRgR2NSaxuZpsglvuFlgrw7Skpptrk7RGuE6OrJShwMulkn9IgQAVUtjaJFm5HMgidgd9ARoat6uLpegQa7xP%2B%2FrDOmWUpQzN6F7VAnMTjPqruPWKoZ7ZdZtOLvOL63UF7TU5&X-Amz-Signature=ac5961be46239f681c295b6b239f3de744bb1f33f10693693b40897d10c61d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHT65D32%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDeKm%2F4a3aOeHs2Wij84s6dRuf37sHb0idBTNfJUKgP6gIhAPLfpJiinl%2F%2FYfclgruOmYAdm3ENZjV4QIrO%2FSvSKQufKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy64SPYnx792PcB0uoq3AOhg59jqxcBCbxcGb5OefwWWTLgAsM4XDE506%2Fh0bK0gvJVNu5JPeQP4NPi8A9d975qnc7Pa72KRAkzWbV7dE0lqfwNRz%2BQp1Un6VOXu1c412jdCm8pJ0qX2yh0mwjNcNzy55VALH8BvNypApBBNB2IYCeZOvWhxJTew5QZZKwklPAgQSGjgiFrAmVuNpbr8Twg9kXrTQA3ihcFww9ULskmT0qwQcdGLkmMbWs%2BCCn2nTzgB1MRCjl1MxCTugfoNO05P4plU8aELXT25IY2UkuQQf3QUe5SXvbHrssBY%2FYa9nkKVQsIJN%2BieJev%2BfaBhmAsPiLqSQcQ69wi1sqCTFfxCgupq65CXLtecFi70kbw6wUSbqkZI%2FFy84tm9ZHu8ylgZdCaDeGZSntmEED5AmQONPjGC0wlKful0dHXmW0l2GGet0Ueohjd6g1EAceLhalG4pxJLXwgxeW%2Bc%2F6o42b%2BdRmj3%2FE3CJCH1FaAUqhSKNghsnZX3RxgKgaQk0g5ygRmr58CwExKzoTXPXmJil%2BspzheGOA4i7yZpxENLMSJgxft3JIo44bUkNHFB41dOdLR8qyttWsZhV0TPC%2FUPETARKPUFaZjDAmt2ERPvBVmKzwa%2BCebUWI%2BcpMukzDGgtjEBjqkAbNZPbVNV2wuTxsqYoYeZNKCGh%2FY3MxiFcTjnUl%2BTIqPiiL367fjZqiVfPWofEz7goF3jfBnWBAJwAgUNqCrOxiZOfF8IlA6Mlp84rQTM%2FUugm%2FNKuuC7CHgSzxfr7yxHP4qkZiAb3%2BykH9OmdOigripBVzC%2BwdX4Qhkbrup%2BBwSONR9uYOOvlGyICbfDOp%2F3g6xNqongMC%2F7SP1i64QcRexl5MT&X-Amz-Signature=f8c7a1f226b028ed1673af156b9095afbaecade4c2358dad2a95f0376e5b94e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNGESABY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD%2Fq7Jl74p4CUVIaT9TC8YTlsGf%2FHzjg2kMhzCuHAhShAIhANNThsD3i0ZuCQos%2FbGM%2F0vZKl%2FmTDBFrRiXwp4KmPbBKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9%2BLlF1%2FhNpXJnC6wq3ANTT1BjGkKumxm3efA84iSF3apz6foXd7Bq%2FhnMjvR%2F4r9uMHn4%2BsV9bZDdnJdjzdye8a%2BH5IEux5LV9lfHXSYi98Aww5uQqXXMgFc8VR%2FWFKwejeBDLjpcBFOnEhL8d1sUnovRoJsGr1%2Bi0FucORPfrRlVDxSEjVweytzxY2qRlTO46g7RsO3lI7Ev6IAAZRlgY9dok8vdOweSYIKht7knRym83Sb7Az3GAbwVD8TsmkIhL0%2B4yl6Qp4uGKN%2BSw86%2Bb%2FlRbAzeXOEGmtBEelJ3LQj7FwUPESODQJXGxxI2DImB9r2IinlPauVOt4YraRBnX%2FB8JYG0gfkFRDYGC%2BHVZ0Ny0fsxZHPwUumJpuIvtgWZX%2FOR8AdjUFH9zOFCOqCA%2Ffiv4zmGDmjNyW%2BGqCIyGV8Yf8%2BPK1gyROXDvvGEWYq2xwKvkCXXeHWT2pPkqiTJtTqzgee0hDU4UfIrxrr1z9MhmIRqerkCzAIGw95sYOp3zgKlyJWQosmq6zYBO2Xzhl86WgOfBOVu7bx7G6QIqQxFAle4mXAuwuId%2FxVGFSH8qhqtgWMomz8IOugkv5LWI1bBTUiR%2F4wgM8UWJPH5xZriREHILnlh9HaTFDL7vZptb7Hv%2BY0B12Dz9jDAgdjEBjqkAaJOELzOiqBVWKl%2BK%2ByKC4AsvcxGSnABn0g%2BIAhTPzkN%2FxZqUx44xRlJ2QN%2BRZmBoLY9PgAXUPhk0pHEoDV2XIkvd30YSuItAHo4QY73g%2B7UqDp%2BR9Fh0lqyg8vJFoxKW8FxHUVS2bzQbGk2bihMx8AkoOs4%2Fb7ewkWPKDeLP8vCcvuGJ9YOyxTKK2MuO95s2N3To%2BEQJsl0mXrail%2FUiGlulEiq&X-Amz-Signature=5459a2b352d036dc486c838750fd53efb6c59ee1ce2817d86d7cb116b8a6ef44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QG7X5MI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFRq61zSLFVGXx60MDykVQlyL%2Bu4PoPg4WUefjqbR16OAiEAkVQbwLYrU6UtXXrxJFQlK%2BbcAOLL5rQJxmmUe7Q%2FDOkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvGSGxtH2X9wBjcNCrcAxDGUlGty127%2BKv0eNH74SL36ef%2FNQGXPTE7F7NCiUZcaQB2xwc5%2F%2Fnqdws3apAT2bONQtOZC0WF3SI5nmEwn0eoX6VrSn3s5nM2cIoA0NxTMP73VXwGRU0k6SpuDvOLJKz3JicwLUYDthgVmp6iY%2ByHohtF7PjSY8Eid8y7C0TMiO%2FkFr%2FN%2BsemzTNFaaF%2BCzxXYxbPp8d5aK1rOf%2BoeCzUuRAnGnS3l2acUyVt%2Bk5LqwvCX5WYvmCvEpdWkYw4CrJN4E6X8LnM3l0GfW3e7MmboAxHasu%2Fae28fBEqPuDYvfZp%2BsiT1pa7q8ZPPFcoQJjYNVwb9gF5cZLnTxbEf7LsxbVNuk%2FtgxuX96BgERpGNHtlNSM1k0DCECCZuYfAv8f7%2BOU5Spbew0azCHOqfCyI6opARkWlAG3t8k0DussDNGSk9xAt9ytG6eMJDffpSMVhROi3%2BoafrW1id4kImDAdm4%2BXrfOVvWZWaZ7ykTMpdBKrYZDTEmRWJxT2cjUYr54p8p66DpYcUQlnuxRY73kuoiDWj2YoQmmIZqeSm7Dz0JsuTYvWf3sfOrp%2B9QJQ%2FH0Gr0ETHKXyx8xf%2BIS9qRR%2FVhllo3v7ek4KOqY6BPRFluohSRilCpVu7U4nMMqC2MQGOqUBwZyFrLYGuKPOdP9Ag3q3JRwnkX%2BWlDkPHEBrX3xgoBXYfFhOfKOi0zOj5OIfcvrgog9rZIxZV7iSB9sxwhUvJyh0wr5u6zILVpufWKO02TNybDdigMP6tiTzlC2anrcwDdpd0sYsL4it4YPUofKfkNx7coO%2BhfVzduP8aVj%2FilYwcd5foqlVl3XeghrgFJQM18rN3dM8CiVFQ%2FKkiGfuR9iizB1p&X-Amz-Signature=3d73a1cf9d149b405dfb21f137746438995b96c71265b3406039f176766376df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6724KNZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIAag9%2FalOrf6oTeKcmzi6M3tesQ167zCShzedQsnXR6iAiA3w1H%2BPW5mHQDz7sbBG%2FuaJGsx7Z4U99vikHguiZPiHyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmuprgS7pjQ9x0PRJKtwDiE4Ar5piDeMCxIvLwZDbiYbOCkGDY3NYb4a9AMjqVfCxGiugp9tbofDCnGB3YRqBo%2B4l%2BYfvPsBLBUeDP1qDrL2tmmaaZeeSGvdT4THerwfgFNY2s34gMM2Xj20Kw9mqqa0AOQuxMeYIEfr6Cb%2FwxpBnv3hr1XCxdGus0humi0euFjQhwuvolx9MsPuitAwA66f6OHFwmASQzeUlo%2FGmF1KDgJ7TbMYFc0r7dkyW6WwO89ocaUDIUG%2FMIpsFMxuZWbBxyJ5LtsGviHGGLcXbkRopBMv0osYQqa4JbISQUW50AcbXAL9fJDxdzOXqxA6e6khG7e4JO1htOUbXKJSLNbIZcm24ZsS966OmONgv8xDMk2poSmt9BS78DL6KXXCZXd%2FXw7ft%2BxZ2JAeUDYpbqyFsBost9MPwI5rj1IMVdequA8fyODsAEnlit32edlJO4kPeL4bMWixLFGS1%2Brm7d9d6nv1VgNdBWKL1Nn4gLt5lwRB5NevcA4wKpmzZ1gigLDFAeuPHJ0%2Bz05ioBP6zKjgHs1x97IQMIcdCievG4KX2xgd6khk8MxfJhQmnD2Ehi6nmJIL3a1aYNHSsxUum8WtZ0tFhuzPy2VH1PazgKnybmlK9%2BQCMunlf1iEwzIHYxAY6pgETiFQaYN5NBlpQJHVe13lbk%2Fsin8rgpYSgM5mUKFhGI9q02pwfD5s96kuATDavLC1ZFGxISu5VqksmC3cLg4k4w7yshIkhtso8dQVnd1IS3AOKKAOJrrOzVlsgAkBZviaeHa%2F%2FoaFNIsYY0MLJKsCvZZaNpdFLjbrKTmkuzZ8pgsCDcgAZr7Ts4nB8fc86pCiTLqiVzSc0tO18rKA5dhaYsX0sk4QC&X-Amz-Signature=d43b9995d392195101b2586359e5b00327e62c1f610c3e9c48a66ad7828ff9c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QG7X5MI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFRq61zSLFVGXx60MDykVQlyL%2Bu4PoPg4WUefjqbR16OAiEAkVQbwLYrU6UtXXrxJFQlK%2BbcAOLL5rQJxmmUe7Q%2FDOkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvGSGxtH2X9wBjcNCrcAxDGUlGty127%2BKv0eNH74SL36ef%2FNQGXPTE7F7NCiUZcaQB2xwc5%2F%2Fnqdws3apAT2bONQtOZC0WF3SI5nmEwn0eoX6VrSn3s5nM2cIoA0NxTMP73VXwGRU0k6SpuDvOLJKz3JicwLUYDthgVmp6iY%2ByHohtF7PjSY8Eid8y7C0TMiO%2FkFr%2FN%2BsemzTNFaaF%2BCzxXYxbPp8d5aK1rOf%2BoeCzUuRAnGnS3l2acUyVt%2Bk5LqwvCX5WYvmCvEpdWkYw4CrJN4E6X8LnM3l0GfW3e7MmboAxHasu%2Fae28fBEqPuDYvfZp%2BsiT1pa7q8ZPPFcoQJjYNVwb9gF5cZLnTxbEf7LsxbVNuk%2FtgxuX96BgERpGNHtlNSM1k0DCECCZuYfAv8f7%2BOU5Spbew0azCHOqfCyI6opARkWlAG3t8k0DussDNGSk9xAt9ytG6eMJDffpSMVhROi3%2BoafrW1id4kImDAdm4%2BXrfOVvWZWaZ7ykTMpdBKrYZDTEmRWJxT2cjUYr54p8p66DpYcUQlnuxRY73kuoiDWj2YoQmmIZqeSm7Dz0JsuTYvWf3sfOrp%2B9QJQ%2FH0Gr0ETHKXyx8xf%2BIS9qRR%2FVhllo3v7ek4KOqY6BPRFluohSRilCpVu7U4nMMqC2MQGOqUBwZyFrLYGuKPOdP9Ag3q3JRwnkX%2BWlDkPHEBrX3xgoBXYfFhOfKOi0zOj5OIfcvrgog9rZIxZV7iSB9sxwhUvJyh0wr5u6zILVpufWKO02TNybDdigMP6tiTzlC2anrcwDdpd0sYsL4it4YPUofKfkNx7coO%2BhfVzduP8aVj%2FilYwcd5foqlVl3XeghrgFJQM18rN3dM8CiVFQ%2FKkiGfuR9iizB1p&X-Amz-Signature=1e98e1d747b6cb03f61b4eb737643bc85f5af3e3ec9cffb90af43afe2c555e13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDC5CIEA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC9uubunF8hSfQruCK%2BYoVUJd9kxsNAaGpB%2FkcLQdzz5AIhANWlnPuqw4ji0fMqCAybPDmKB6aRRjaoc%2F2qAibupj0MKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxVYlu%2FWnORUkA30Iq3ANtXnnkkAoeXzfBWs95G5af%2F4pnAj64iJCUqUYzVVccIoG0hJSLZ19nyjIEbc23xg86uPo6fHNI5wAmmec2K6SlVGYQXyDsHNBBcQLNa4nfdm3VWIOmnovyB3MOzgTU7%2BTlPw9TVd4v6dLrdal7qeeQoTCZ6AsIpWWz5rcDCQ%2BSlDbu2gn%2FVq1cLqpvc80FkTG9LxN1BceTgb%2B8PyQbHmpHLESkqHm%2FWS%2B1%2F2Gsbv1SURwalFAAZ4h15Z4SBeuRpcQplCXwZRDyLv4CU7jts5EQi65s%2BgWGY48wUvR4KHkVSGBKyglmT8yv%2FvSfQruj0ZDfWbUOEKGB9mZtPmE2JaQl89NMNoGmAswPcDL52uUTsG9SLd%2FUXytN9QQUrkCqZYiMpF1xD0xy7sFXjzZ%2FTXUmSTUZDgt3ywj7SQiIcsenbzDExKyNjba2uFuuIY0Ktf2U%2BKXobmdJvItZ%2F15SvdrFzhbaOcA%2FgV9uwijEJWj0GA5bW4GCB%2FaprGhOlSG0%2BBCdjzQNxQxIfk%2BY8Qe1%2FadRxJpwSM0KC9YGgHcoKLg4%2BsUIjGm9BSpGNczyKHP1yDE7tsqdqqerw8jETkkeee47xeLHHTqIoMCFiwt2KVdIUpuc4byPJs0%2FUUkRIDDggdjEBjqkAZaS9BHjdevdga1pkXBeImafmI7fuxJW9hVsmRjM%2B2H6%2FzavjQKEcuSqgovtf4QU1l1G4Zs6%2FE6BeQH1xoNoobKTwktXFwAFa%2BHOt84VBeyBkvFoeQGr53GvvbYITDZy%2FoUtErTQ7aTX%2BlTHEMSsp64ovCGLYH%2F%2FBXHys9tp91%2Fl3WPlQU1cq6jNjzUCNkxHbnrf%2FrbsZQdYfOtE92IX%2FNY9y5w8&X-Amz-Signature=a6fc9a770ac7cda099055090615e25dc87661e3cfb993dde3919f6e7c084188c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QG7X5MI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFRq61zSLFVGXx60MDykVQlyL%2Bu4PoPg4WUefjqbR16OAiEAkVQbwLYrU6UtXXrxJFQlK%2BbcAOLL5rQJxmmUe7Q%2FDOkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvGSGxtH2X9wBjcNCrcAxDGUlGty127%2BKv0eNH74SL36ef%2FNQGXPTE7F7NCiUZcaQB2xwc5%2F%2Fnqdws3apAT2bONQtOZC0WF3SI5nmEwn0eoX6VrSn3s5nM2cIoA0NxTMP73VXwGRU0k6SpuDvOLJKz3JicwLUYDthgVmp6iY%2ByHohtF7PjSY8Eid8y7C0TMiO%2FkFr%2FN%2BsemzTNFaaF%2BCzxXYxbPp8d5aK1rOf%2BoeCzUuRAnGnS3l2acUyVt%2Bk5LqwvCX5WYvmCvEpdWkYw4CrJN4E6X8LnM3l0GfW3e7MmboAxHasu%2Fae28fBEqPuDYvfZp%2BsiT1pa7q8ZPPFcoQJjYNVwb9gF5cZLnTxbEf7LsxbVNuk%2FtgxuX96BgERpGNHtlNSM1k0DCECCZuYfAv8f7%2BOU5Spbew0azCHOqfCyI6opARkWlAG3t8k0DussDNGSk9xAt9ytG6eMJDffpSMVhROi3%2BoafrW1id4kImDAdm4%2BXrfOVvWZWaZ7ykTMpdBKrYZDTEmRWJxT2cjUYr54p8p66DpYcUQlnuxRY73kuoiDWj2YoQmmIZqeSm7Dz0JsuTYvWf3sfOrp%2B9QJQ%2FH0Gr0ETHKXyx8xf%2BIS9qRR%2FVhllo3v7ek4KOqY6BPRFluohSRilCpVu7U4nMMqC2MQGOqUBwZyFrLYGuKPOdP9Ag3q3JRwnkX%2BWlDkPHEBrX3xgoBXYfFhOfKOi0zOj5OIfcvrgog9rZIxZV7iSB9sxwhUvJyh0wr5u6zILVpufWKO02TNybDdigMP6tiTzlC2anrcwDdpd0sYsL4it4YPUofKfkNx7coO%2BhfVzduP8aVj%2FilYwcd5foqlVl3XeghrgFJQM18rN3dM8CiVFQ%2FKkiGfuR9iizB1p&X-Amz-Signature=b9ebd94a05eb0aee888914943e9b1a95ed13c9e62d9d1e41c8ca94534ba870a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLTTKK54%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEs4VGQrLyepqo2bVeqKPFYopxiqshf5u2dFEK3bzAIVAiAh9GqYhfJqEoNlcskWW3uNSY4xGsCPIvfjquf5r3%2BLUyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo3%2BGi8Ed4MSTQ1hVKtwDvfNWq%2BCI10im%2FweMRWI17g6Tro%2FMCMYCl2EsKyU9%2FeQ8eb0K6qtHvuUj6vOM1iUFcTJ8CGqP6zJ1%2FY8tQ2nfwvTfNXq1CtzRUwNFlDDxM2U0y1ejUspsG7kJvUh6Ua7GqvXF4qffrz4zw888g0AkG5X1Qsd9Nv5wXcSbizTZ%2FoMyzmApiP1sNElxGTdyhZxWlLZZomb%2FnR8%2FRmqYuvZHjKvkzMnPaIN3zldKJuSnIMmxotaYw6FJmKYjNGx1WkW%2FaHNup6FxUFnbnO7ACpOVXIENvb%2F9AZLG%2B%2Fe0r%2ByNjagvWJyLPdKuGjD3m33wBUNko5DTKw36fN0j%2FPABHNMrNeLZn5dLDZVt6WDPTFzGgUCxa%2Fh7zLmuFrvKpukoj1hzjNag0Cvi6WVohWXkFSLP8xt3PIN4IL2Ry1XVffaKNjtXyJMTQWQTSXPkhmXnrqFDJ7uVE7E%2BF%2B6Kgks4B%2B%2FyuPg%2B7klltfstwaPD3zSBIcBkE1kaJDvsMpRk%2BYM%2FvpnR0Ul9dZRf3xPj5V229g72y9oBap21KCl9faCtPEpIH5a%2Bl712CALWa753QI%2BX%2BDIvTk7vbDskRdJZykUhdRsVotJE4OXqtkLIfAajnlttgeA0Gn2pkVCvP5AbOP8wvILYxAY6pgG0kuWypWKEXYCi39w4G%2BNP%2FDUAzLQbAg5RqBG5PRsxT90%2Bd88%2BDatZadh%2BL9brbvZXi691tmT%2BuG9UnihkgIcsl30LHadKw8MoEaXy5paVZaJ0tqoF5eeKnouopEXQJ9RO0JLWfLASUUI0M77WQWqxNP6BhjfQxP%2Bppuq1YA8GLbwcGQAjWRC9UwMMD8BqY5%2FQ0OkeuMLv46CvXnXkHSFXSRGVxJn%2F&X-Amz-Signature=46c3f601f49e2708ec6ce6468bd09d2b8c1a1901e518b55518930746e603ac2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QG7X5MI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFRq61zSLFVGXx60MDykVQlyL%2Bu4PoPg4WUefjqbR16OAiEAkVQbwLYrU6UtXXrxJFQlK%2BbcAOLL5rQJxmmUe7Q%2FDOkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvGSGxtH2X9wBjcNCrcAxDGUlGty127%2BKv0eNH74SL36ef%2FNQGXPTE7F7NCiUZcaQB2xwc5%2F%2Fnqdws3apAT2bONQtOZC0WF3SI5nmEwn0eoX6VrSn3s5nM2cIoA0NxTMP73VXwGRU0k6SpuDvOLJKz3JicwLUYDthgVmp6iY%2ByHohtF7PjSY8Eid8y7C0TMiO%2FkFr%2FN%2BsemzTNFaaF%2BCzxXYxbPp8d5aK1rOf%2BoeCzUuRAnGnS3l2acUyVt%2Bk5LqwvCX5WYvmCvEpdWkYw4CrJN4E6X8LnM3l0GfW3e7MmboAxHasu%2Fae28fBEqPuDYvfZp%2BsiT1pa7q8ZPPFcoQJjYNVwb9gF5cZLnTxbEf7LsxbVNuk%2FtgxuX96BgERpGNHtlNSM1k0DCECCZuYfAv8f7%2BOU5Spbew0azCHOqfCyI6opARkWlAG3t8k0DussDNGSk9xAt9ytG6eMJDffpSMVhROi3%2BoafrW1id4kImDAdm4%2BXrfOVvWZWaZ7ykTMpdBKrYZDTEmRWJxT2cjUYr54p8p66DpYcUQlnuxRY73kuoiDWj2YoQmmIZqeSm7Dz0JsuTYvWf3sfOrp%2B9QJQ%2FH0Gr0ETHKXyx8xf%2BIS9qRR%2FVhllo3v7ek4KOqY6BPRFluohSRilCpVu7U4nMMqC2MQGOqUBwZyFrLYGuKPOdP9Ag3q3JRwnkX%2BWlDkPHEBrX3xgoBXYfFhOfKOi0zOj5OIfcvrgog9rZIxZV7iSB9sxwhUvJyh0wr5u6zILVpufWKO02TNybDdigMP6tiTzlC2anrcwDdpd0sYsL4it4YPUofKfkNx7coO%2BhfVzduP8aVj%2FilYwcd5foqlVl3XeghrgFJQM18rN3dM8CiVFQ%2FKkiGfuR9iizB1p&X-Amz-Signature=95942e692128daa774a30f1ca559edba1d623fa9d6ca451b57b17460012f14dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5HQX3Y%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDbfymcbsknfD14tUipuf9x6OmzJ7dsBP1bUK328n8fsQIhAM6LawDaklIi9fbeLVMOEffStLOLwRfrFglGOSWIgNMxKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4DHXCGop7Asyqi1sq3AOqlVMtifqHxgCvEXDtZhYEOsGF16gCRtgp%2FDQRrlfZEE0FLFrMw8%2FGqc5Z3INn9wonpoO4BqQWl34rasheERdaKEqcPamYCTMfz6qrxTzF8%2BfgPDdHC4XW0ZtvOssZbFxxULbI3bxIWE1LoPAANsUSAoQDwjWZ9P%2BIgj1orzqRX6iPdWVXyTZrsvFpdSiVvNu%2BUMSW%2FSIk6lo3wGSM3EEMHQTVmejYb2J7XAa0c2x54LB1x4fJNtf9baEbdbjmV4F8tngQRl4bHRR27a7YWpGdutk0Yl6sQ08tYYg6ORObUwkoNm5ViZV7gnz03rcUR8egeJ%2BQTji%2FTRx5hddAIb5WxDS1PiVAfbAqMZOHsB%2FnwdMgzBLBQFIhEKqrml5NwwW80VaBRWEmppMEE4eyHe1DfCtCx0UHi77LckvAYsH9e1Lcy6l%2BLmEABnE%2BhfLDEHkDTS%2BZeA32UhFQBmW8xJEUUzeh5COSEl5IbmRlX1WoCEW%2BI8ZzIANprokIHR4ulH2Yue6ddZrLK4Co1ZwHfYXdFL3JMzny7H5AQDo1%2BjN4guIydOcPlrhQPoQwHlB7AuYRwaeoRvcKrnnb1APlA0ez3MtMYyRO%2FumFDsC2z42%2BCQBFEPihnxcSVp1ZzDCxgtjEBjqkAWyVHhLIDpnF2E4m8jO1USymBz9IMU95QjJ5wxJJv9IRwcDeRiyjCnGAexHWOiufWX6kV%2BlH%2F2mJyQP7RbWHxDm7kwKY2gzXXPiEKcH9FDH%2FH8ktb4TC3nDPoGUwt%2Fcoory9FnwD1SQ6du9quJkaK9b7VWCkGVWZxIeLEUgjwhUQ1p3VGQLRw2QT9nzPVmfQ5S9%2BjUZXVVEpDpETfZ7b4U9DCUsK&X-Amz-Signature=a1aaabb134c19925d2e1f15dd37d2271e9d2eadcf7de42c8fae35eaa97078aa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR2SCVVP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCQq16vgGlv76B7FqXsP0BE8tVV%2B36zkecx%2BtlD2rjvNAIhALbyB30K0kvKqF0ePLeGX8NwdFeBQU2mMW7fuoFIdFOKKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzit6gmbAadVvfNLUsq3AOaG6j2FbKhxebg3G9g0O5rhRzPcTyMWGx2v5O2Ij2BomeDPxQhNitkdsRYNrWiwngBgTz8%2BPQlbXgIF9PIC96AdLIu2Qe5qi%2F6JyT8sbGmJY7RvAwbRCFNJTg9rZmL5niI3loU4xYZmriNP%2BMYo8TtTrligGC4c%2FUVc5islMssDotf2eJJtM6tiJkcYjV91Dztkk1Y7lv5WyGupI5jAWagCj%2BrAbaD2JkqXoCJOQkDgcIb%2BprLgeRy9uDfxSQCCZu1%2BywHif8brorbu7E6Lb%2BAnnxqsfndmK00d4iUUfSiz5dWlmub1X892%2BqHFaA9I6roD6%2B0lxUMQER7YTfo%2FqLZqIg4y146oDCramL8P9s%2Fhpm9dHlzmokhtd7BqIQ3%2BElhhGDcmVPaX2A5LjAps4SY5Fz87lpSVYYWfOfGlKy%2FXIpnQI2IW2oldalu7TsinpuNfEzkvc%2BlrwqK1p9DMkc6PCpFM1iXeHbZWPFByp1ARwTWtJbQPXe1Rw51q%2FQib4cupd9JMSfgRPqKniY2QNFabpu%2BCtggLBaKoes9I%2B9G5cAg4W1VgjxsEp6ZsmDzktVBNOWznMpOx4LQHEYGObJX7%2FttcmdY4Z6fsme9m8hzZ20UJzxdfKNOg3HldDDqgdjEBjqkAaubxFQounmPzwqUn0%2Bd2gdYmspRo96sF%2B6ta81Ds2GBh9%2FJ7IUnxG6QGq0wQ%2BCA%2BikrQU56tTAyNfX1rgM3%2FI5R3Z08eeA%2BK3Y9eyGbCS97zH6YHVWx0pXcltcXXuTApxEJ0MEao90zPJqLarAd%2FVtcfA9rhdUVF7zXT9OIAJmtWc4HQIj4nvqSfSZShgiuFzsVHkjxYV8GoDPO4KNrkD8hSvCO&X-Amz-Signature=57819a02dd8d13a2ed5ec32e8c886ec12b4e6bd6dd5ad280a38aa73bdd761112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663PD5IZI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCoeOcf85jjHmRT5buIciP2Mi6Jl2mQxYdzDZgg%2B0tEiAIhAMBMeE0b5I0T88pxFcfRDg8g1%2FgESkaaylK8G6%2FLHT5cKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYNtHZPRn5sdy3Oi8q3ANAx1xEwIHvcdvYuqS88JN6n1m7MapvupA9SVmchBhZC636wbFAbginDjGEKIctR5tnGOIPt778fsYNZw979Y1fBOtk%2F77vER2fw%2F8jrbBJkaSSu8HzXFAwcwPonIBg%2BlHE%2FZn9YLtnmzWHdZkMyGjgyLR701wIuNDpYaqdkYmF%2BRlB2Mlh5UnpFzDaRt6MGVt7MXG503Us42%2F0zLa7ZlAmN%2FfWgiuKGBxd%2FUdjuaeb2hSDjyi3RYD1Pd5t09mOAV%2BAtejRWLg8VXu2Y3c9oOwQRFa7H2SM3T0yZD1FmUxJ37YZIQTodEfmiEr7CRkrGUAg0%2FVgdO9Lg7k%2FvRErtj15u4LGDm6wVeU4DGgAg1VUM9P3MXQrAnDOiM8O%2FADTk0XvqoWi1EFKHF0%2FCjgvYBy3d2baykFBeS8gKu21qdfGNn1BXlZmnD160Mn03%2FX%2F%2BgTUVpm7%2BaXNCMJSmrEmq%2FzD6HIMSbVYU6OAc%2B7NWEgvfjwR6%2FrBO5UMwLpuTZZIi7HbJy9yJJbFd0yf7hVS1LjuT7f%2BIACI78bk1I%2FgeRsJb4j8qjE%2FiPSrh9LtDZf3u4dzMRbR5cwNiP8707ai9zdBhFT4pZLv6%2F7%2BWAWlEeH9w3aKCUT0rxiLn%2B4%2FfjDegdjEBjqkAQev%2FDv7OGEATHP49h2RBKa%2By03qHlMNCv092eEhH1wLyeB%2Bn4D2wPR0ovvepRZw9hUEblZc8zl2ipykg5%2BQZaiZuu5GlpFH7ljEcGhbo75ozvoQujAkSiwbf4h8qDpdKmGKJWdjdtj5MwO5ZcHg4E24PKSgoNQsdgAp2HrAhR6X92rqN54NxQE76XsqMOLFsdq9ZZBrO7UTam%2FWM1wxz1nPk3vu&X-Amz-Signature=8d539d0355feb8b4371b749169dfc23582af78c6caca5ad7fa15ab88de62ac5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5HQX3Y%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDbfymcbsknfD14tUipuf9x6OmzJ7dsBP1bUK328n8fsQIhAM6LawDaklIi9fbeLVMOEffStLOLwRfrFglGOSWIgNMxKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4DHXCGop7Asyqi1sq3AOqlVMtifqHxgCvEXDtZhYEOsGF16gCRtgp%2FDQRrlfZEE0FLFrMw8%2FGqc5Z3INn9wonpoO4BqQWl34rasheERdaKEqcPamYCTMfz6qrxTzF8%2BfgPDdHC4XW0ZtvOssZbFxxULbI3bxIWE1LoPAANsUSAoQDwjWZ9P%2BIgj1orzqRX6iPdWVXyTZrsvFpdSiVvNu%2BUMSW%2FSIk6lo3wGSM3EEMHQTVmejYb2J7XAa0c2x54LB1x4fJNtf9baEbdbjmV4F8tngQRl4bHRR27a7YWpGdutk0Yl6sQ08tYYg6ORObUwkoNm5ViZV7gnz03rcUR8egeJ%2BQTji%2FTRx5hddAIb5WxDS1PiVAfbAqMZOHsB%2FnwdMgzBLBQFIhEKqrml5NwwW80VaBRWEmppMEE4eyHe1DfCtCx0UHi77LckvAYsH9e1Lcy6l%2BLmEABnE%2BhfLDEHkDTS%2BZeA32UhFQBmW8xJEUUzeh5COSEl5IbmRlX1WoCEW%2BI8ZzIANprokIHR4ulH2Yue6ddZrLK4Co1ZwHfYXdFL3JMzny7H5AQDo1%2BjN4guIydOcPlrhQPoQwHlB7AuYRwaeoRvcKrnnb1APlA0ez3MtMYyRO%2FumFDsC2z42%2BCQBFEPihnxcSVp1ZzDCxgtjEBjqkAWyVHhLIDpnF2E4m8jO1USymBz9IMU95QjJ5wxJJv9IRwcDeRiyjCnGAexHWOiufWX6kV%2BlH%2F2mJyQP7RbWHxDm7kwKY2gzXXPiEKcH9FDH%2FH8ktb4TC3nDPoGUwt%2Fcoory9FnwD1SQ6du9quJkaK9b7VWCkGVWZxIeLEUgjwhUQ1p3VGQLRw2QT9nzPVmfQ5S9%2BjUZXVVEpDpETfZ7b4U9DCUsK&X-Amz-Signature=94113bd3b29f446db2214afcb8519d28fa6ff2ef314543ff2fa1d1ded4173260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLHEAKP4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBESXxD5xu4kOy8ZSYeJeZUhDYpLmQoXiik5D4jK7ev7AiEAn6KWT%2B%2Bf5NTNQRMJw%2BYXIDRflN5qL5VR8sVa8j25BkAqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCT5cVG6ANwKoT4%2FyCrcA9%2FmPglypTlBxUJxeQjnLFempzJyrVPsDXuk%2Bml%2B9rpQdJWfmjcsOxMH03LQYgbLz0TaBwj7x8%2FqP42KiOyD1LPZvv2yR2ZYc5uQSiMIvPkqdSHLleALLS05JtWnxVZXPGrJRSJE4CF%2FyRLoXmZH9Jo7%2FOlW68M2qV4FIoycHgZaBL0o3VQfvcuk0Ja7oLm2yev%2FOortPhd%2FEtcgdbGBwG%2FkDZRWE1MFkQKeTUPslRfrNtzZj9wrHMxIsxq7dZpw9MW8pEDKi%2FxEYBQsvigSfbNmmtHZaudIfrJ2A2eQ5IBLyudKgOdlL175Lr3yW%2F1KH0pWLFOt%2Bh1Rwk1YyPNypkKJs9kwal3t34USRnqsVjv6PqxJwbQJXWK2ZJdu8EXHh1HkNHjvyI1svj%2B9jwYHN6zI8FyT7eCUVsGliXGSEuHBFLtFByskWglsOwfgk1nONAmUWe5Dr4eZfPNfrpN1MXAox3DSNAHnyHNSknoZN%2BnZMOjx4j7X599CBXM5eQqLabaMSABSEv3rsM7QoKR5cC%2FMhcL6N4KI8CLTdFXWl7dRLmArvWlnCAULYXwFRTxuDvOoujV7lXfL5gTnNZUiNRRUG18FqKlB52so2rZ%2BFgL5c08x3aTFYNXlf8Q%2FMMOB2MQGOqUBU0Bhp2GNYEiJSiC8gUivtYyXUa0DeZHCyn5l66%2FI1C3PGLAoWdAswEgb98Sum84%2FLgQtKl%2F%2FZ7OKAl%2BrGCmZ%2FH8TxLaV%2FtiTBVnpaFK99yAd6MR%2BLTqnOIItF%2FyJbKlK0q5aA%2BBDyGsjGAwMtYHYwE%2FQHjaLxsEcD%2BKHR8n%2BI1KLQTxWT1a%2BzSIG9j58n7L9U9o3U%2BCyMHRErPDatUApCewx7f6L&X-Amz-Signature=06cd170051d1239d7c2acb16e561ae81e7393bc248443dd9195da9337c0baa13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QG7X5MI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFRq61zSLFVGXx60MDykVQlyL%2Bu4PoPg4WUefjqbR16OAiEAkVQbwLYrU6UtXXrxJFQlK%2BbcAOLL5rQJxmmUe7Q%2FDOkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvGSGxtH2X9wBjcNCrcAxDGUlGty127%2BKv0eNH74SL36ef%2FNQGXPTE7F7NCiUZcaQB2xwc5%2F%2Fnqdws3apAT2bONQtOZC0WF3SI5nmEwn0eoX6VrSn3s5nM2cIoA0NxTMP73VXwGRU0k6SpuDvOLJKz3JicwLUYDthgVmp6iY%2ByHohtF7PjSY8Eid8y7C0TMiO%2FkFr%2FN%2BsemzTNFaaF%2BCzxXYxbPp8d5aK1rOf%2BoeCzUuRAnGnS3l2acUyVt%2Bk5LqwvCX5WYvmCvEpdWkYw4CrJN4E6X8LnM3l0GfW3e7MmboAxHasu%2Fae28fBEqPuDYvfZp%2BsiT1pa7q8ZPPFcoQJjYNVwb9gF5cZLnTxbEf7LsxbVNuk%2FtgxuX96BgERpGNHtlNSM1k0DCECCZuYfAv8f7%2BOU5Spbew0azCHOqfCyI6opARkWlAG3t8k0DussDNGSk9xAt9ytG6eMJDffpSMVhROi3%2BoafrW1id4kImDAdm4%2BXrfOVvWZWaZ7ykTMpdBKrYZDTEmRWJxT2cjUYr54p8p66DpYcUQlnuxRY73kuoiDWj2YoQmmIZqeSm7Dz0JsuTYvWf3sfOrp%2B9QJQ%2FH0Gr0ETHKXyx8xf%2BIS9qRR%2FVhllo3v7ek4KOqY6BPRFluohSRilCpVu7U4nMMqC2MQGOqUBwZyFrLYGuKPOdP9Ag3q3JRwnkX%2BWlDkPHEBrX3xgoBXYfFhOfKOi0zOj5OIfcvrgog9rZIxZV7iSB9sxwhUvJyh0wr5u6zILVpufWKO02TNybDdigMP6tiTzlC2anrcwDdpd0sYsL4it4YPUofKfkNx7coO%2BhfVzduP8aVj%2FilYwcd5foqlVl3XeghrgFJQM18rN3dM8CiVFQ%2FKkiGfuR9iizB1p&X-Amz-Signature=95e8dc8529aafb323c79f7c41bef2b315899c079c5dbdeed3b1a2f8fed5ee2f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QG7X5MI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFRq61zSLFVGXx60MDykVQlyL%2Bu4PoPg4WUefjqbR16OAiEAkVQbwLYrU6UtXXrxJFQlK%2BbcAOLL5rQJxmmUe7Q%2FDOkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvGSGxtH2X9wBjcNCrcAxDGUlGty127%2BKv0eNH74SL36ef%2FNQGXPTE7F7NCiUZcaQB2xwc5%2F%2Fnqdws3apAT2bONQtOZC0WF3SI5nmEwn0eoX6VrSn3s5nM2cIoA0NxTMP73VXwGRU0k6SpuDvOLJKz3JicwLUYDthgVmp6iY%2ByHohtF7PjSY8Eid8y7C0TMiO%2FkFr%2FN%2BsemzTNFaaF%2BCzxXYxbPp8d5aK1rOf%2BoeCzUuRAnGnS3l2acUyVt%2Bk5LqwvCX5WYvmCvEpdWkYw4CrJN4E6X8LnM3l0GfW3e7MmboAxHasu%2Fae28fBEqPuDYvfZp%2BsiT1pa7q8ZPPFcoQJjYNVwb9gF5cZLnTxbEf7LsxbVNuk%2FtgxuX96BgERpGNHtlNSM1k0DCECCZuYfAv8f7%2BOU5Spbew0azCHOqfCyI6opARkWlAG3t8k0DussDNGSk9xAt9ytG6eMJDffpSMVhROi3%2BoafrW1id4kImDAdm4%2BXrfOVvWZWaZ7ykTMpdBKrYZDTEmRWJxT2cjUYr54p8p66DpYcUQlnuxRY73kuoiDWj2YoQmmIZqeSm7Dz0JsuTYvWf3sfOrp%2B9QJQ%2FH0Gr0ETHKXyx8xf%2BIS9qRR%2FVhllo3v7ek4KOqY6BPRFluohSRilCpVu7U4nMMqC2MQGOqUBwZyFrLYGuKPOdP9Ag3q3JRwnkX%2BWlDkPHEBrX3xgoBXYfFhOfKOi0zOj5OIfcvrgog9rZIxZV7iSB9sxwhUvJyh0wr5u6zILVpufWKO02TNybDdigMP6tiTzlC2anrcwDdpd0sYsL4it4YPUofKfkNx7coO%2BhfVzduP8aVj%2FilYwcd5foqlVl3XeghrgFJQM18rN3dM8CiVFQ%2FKkiGfuR9iizB1p&X-Amz-Signature=1069af5fc518211fc96d55bbc978e44d2063054e54797a16d25cddd12e4d2a4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLWVKIZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC6QCX0HU%2F%2Bx3aYRUjK56N%2FXbLV78qazsOyeo1tb0rnUwIhAPuhqOo%2BHHMSJUTaP983zNb2Ui2N0D8Yvv0wJYx0D6OBKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9fWQQJhqwRTSIw38q3AOfOTEaGXZjbpAmLQFNeowOIf1hQEAsu426If1KXSyi67q1FtiNcYUOTuxcWN6FgHCrjS%2Bqs19gf0pVMWAFnvZUCnrX%2BZiKDArglRb0YU3%2B85HUysOiJQ22QkE7rPhYv32xyNtxfG4JbUOQBWWSDOWEEMxOqVxcFVJ0NsHGPSqj4mioiqVD7%2Fvx8qAXL%2BlFy17StjcqgHWToHIui28rT7S%2B%2BOX3w8xJTi%2FsM1VUk8xKzkeB5iQLg6McxEdJ0BElZVikfvnEWD%2BTSaXpN9X10WglXJd0VvLZx8UhMu5Xt17J0uYnUmzGn865kdP9vMf0LNcZLtsCNtJ2ro01lJSYZUMZLwCHcAKKlamTPS9yIkVA6X5EPHULO%2BVSuzAD%2BLAOwEouY6tkfEpFt4StEybj48fFoM5N6trGh4rZiAGCI%2BCVuc4fDfobWzzuagsQCm2%2FsvGOu5Phvteg6Wq7aQHfbIfEIzQOJYmzxGxoBvjFZVPhnwBMSkat3AprTTuN2FenjM5P9oSavAdGFFD%2Bk3J6aVmP241dGy1JB0zt0kRjBr516AAdPVwRrK%2FhbbmUOcEyd2xeR8CWXtkJInmUYwFThvsafh0ncVQPQY8QhD0A0HUrkAps58WIvET0XCV70DDHgtjEBjqkAY7uqLVlEuPLN0jRp6Ya9KanL5LHUzZ10hUC4vcDv5rq1kIo%2Bx7TB7ewzu9lQs%2BKJcuxQBso%2BLIUcW3aUD4yww9ab%2FOZ%2B%2F%2B4Ee2S4Zpdxn1BpRc7rKgA3tFQaBOyvPV0XE6POWr0E24XA75%2Bs1ImueOCYY6hoQQgNFKq98qUm7Q8C6hPf3mQEPHu1gG6x6ez3qCkeYglJiz4ftz4h%2FtKMifQn2XZ&X-Amz-Signature=6b729891afd9c5cb17f0021caf92e82d5d4897b16eca9228baf638305e349b08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLWVKIZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC6QCX0HU%2F%2Bx3aYRUjK56N%2FXbLV78qazsOyeo1tb0rnUwIhAPuhqOo%2BHHMSJUTaP983zNb2Ui2N0D8Yvv0wJYx0D6OBKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9fWQQJhqwRTSIw38q3AOfOTEaGXZjbpAmLQFNeowOIf1hQEAsu426If1KXSyi67q1FtiNcYUOTuxcWN6FgHCrjS%2Bqs19gf0pVMWAFnvZUCnrX%2BZiKDArglRb0YU3%2B85HUysOiJQ22QkE7rPhYv32xyNtxfG4JbUOQBWWSDOWEEMxOqVxcFVJ0NsHGPSqj4mioiqVD7%2Fvx8qAXL%2BlFy17StjcqgHWToHIui28rT7S%2B%2BOX3w8xJTi%2FsM1VUk8xKzkeB5iQLg6McxEdJ0BElZVikfvnEWD%2BTSaXpN9X10WglXJd0VvLZx8UhMu5Xt17J0uYnUmzGn865kdP9vMf0LNcZLtsCNtJ2ro01lJSYZUMZLwCHcAKKlamTPS9yIkVA6X5EPHULO%2BVSuzAD%2BLAOwEouY6tkfEpFt4StEybj48fFoM5N6trGh4rZiAGCI%2BCVuc4fDfobWzzuagsQCm2%2FsvGOu5Phvteg6Wq7aQHfbIfEIzQOJYmzxGxoBvjFZVPhnwBMSkat3AprTTuN2FenjM5P9oSavAdGFFD%2Bk3J6aVmP241dGy1JB0zt0kRjBr516AAdPVwRrK%2FhbbmUOcEyd2xeR8CWXtkJInmUYwFThvsafh0ncVQPQY8QhD0A0HUrkAps58WIvET0XCV70DDHgtjEBjqkAY7uqLVlEuPLN0jRp6Ya9KanL5LHUzZ10hUC4vcDv5rq1kIo%2Bx7TB7ewzu9lQs%2BKJcuxQBso%2BLIUcW3aUD4yww9ab%2FOZ%2B%2F%2B4Ee2S4Zpdxn1BpRc7rKgA3tFQaBOyvPV0XE6POWr0E24XA75%2Bs1ImueOCYY6hoQQgNFKq98qUm7Q8C6hPf3mQEPHu1gG6x6ez3qCkeYglJiz4ftz4h%2FtKMifQn2XZ&X-Amz-Signature=0943ce45215d619703b9b25a1a3a5512071a96aa16b29dfc74812488b1e71ffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLWVKIZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC6QCX0HU%2F%2Bx3aYRUjK56N%2FXbLV78qazsOyeo1tb0rnUwIhAPuhqOo%2BHHMSJUTaP983zNb2Ui2N0D8Yvv0wJYx0D6OBKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9fWQQJhqwRTSIw38q3AOfOTEaGXZjbpAmLQFNeowOIf1hQEAsu426If1KXSyi67q1FtiNcYUOTuxcWN6FgHCrjS%2Bqs19gf0pVMWAFnvZUCnrX%2BZiKDArglRb0YU3%2B85HUysOiJQ22QkE7rPhYv32xyNtxfG4JbUOQBWWSDOWEEMxOqVxcFVJ0NsHGPSqj4mioiqVD7%2Fvx8qAXL%2BlFy17StjcqgHWToHIui28rT7S%2B%2BOX3w8xJTi%2FsM1VUk8xKzkeB5iQLg6McxEdJ0BElZVikfvnEWD%2BTSaXpN9X10WglXJd0VvLZx8UhMu5Xt17J0uYnUmzGn865kdP9vMf0LNcZLtsCNtJ2ro01lJSYZUMZLwCHcAKKlamTPS9yIkVA6X5EPHULO%2BVSuzAD%2BLAOwEouY6tkfEpFt4StEybj48fFoM5N6trGh4rZiAGCI%2BCVuc4fDfobWzzuagsQCm2%2FsvGOu5Phvteg6Wq7aQHfbIfEIzQOJYmzxGxoBvjFZVPhnwBMSkat3AprTTuN2FenjM5P9oSavAdGFFD%2Bk3J6aVmP241dGy1JB0zt0kRjBr516AAdPVwRrK%2FhbbmUOcEyd2xeR8CWXtkJInmUYwFThvsafh0ncVQPQY8QhD0A0HUrkAps58WIvET0XCV70DDHgtjEBjqkAY7uqLVlEuPLN0jRp6Ya9KanL5LHUzZ10hUC4vcDv5rq1kIo%2Bx7TB7ewzu9lQs%2BKJcuxQBso%2BLIUcW3aUD4yww9ab%2FOZ%2B%2F%2B4Ee2S4Zpdxn1BpRc7rKgA3tFQaBOyvPV0XE6POWr0E24XA75%2Bs1ImueOCYY6hoQQgNFKq98qUm7Q8C6hPf3mQEPHu1gG6x6ez3qCkeYglJiz4ftz4h%2FtKMifQn2XZ&X-Amz-Signature=1c58c9e50ebf61cec40de628b4a97705efd7523b005b775c40cee120aba77dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLWVKIZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC6QCX0HU%2F%2Bx3aYRUjK56N%2FXbLV78qazsOyeo1tb0rnUwIhAPuhqOo%2BHHMSJUTaP983zNb2Ui2N0D8Yvv0wJYx0D6OBKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9fWQQJhqwRTSIw38q3AOfOTEaGXZjbpAmLQFNeowOIf1hQEAsu426If1KXSyi67q1FtiNcYUOTuxcWN6FgHCrjS%2Bqs19gf0pVMWAFnvZUCnrX%2BZiKDArglRb0YU3%2B85HUysOiJQ22QkE7rPhYv32xyNtxfG4JbUOQBWWSDOWEEMxOqVxcFVJ0NsHGPSqj4mioiqVD7%2Fvx8qAXL%2BlFy17StjcqgHWToHIui28rT7S%2B%2BOX3w8xJTi%2FsM1VUk8xKzkeB5iQLg6McxEdJ0BElZVikfvnEWD%2BTSaXpN9X10WglXJd0VvLZx8UhMu5Xt17J0uYnUmzGn865kdP9vMf0LNcZLtsCNtJ2ro01lJSYZUMZLwCHcAKKlamTPS9yIkVA6X5EPHULO%2BVSuzAD%2BLAOwEouY6tkfEpFt4StEybj48fFoM5N6trGh4rZiAGCI%2BCVuc4fDfobWzzuagsQCm2%2FsvGOu5Phvteg6Wq7aQHfbIfEIzQOJYmzxGxoBvjFZVPhnwBMSkat3AprTTuN2FenjM5P9oSavAdGFFD%2Bk3J6aVmP241dGy1JB0zt0kRjBr516AAdPVwRrK%2FhbbmUOcEyd2xeR8CWXtkJInmUYwFThvsafh0ncVQPQY8QhD0A0HUrkAps58WIvET0XCV70DDHgtjEBjqkAY7uqLVlEuPLN0jRp6Ya9KanL5LHUzZ10hUC4vcDv5rq1kIo%2Bx7TB7ewzu9lQs%2BKJcuxQBso%2BLIUcW3aUD4yww9ab%2FOZ%2B%2F%2B4Ee2S4Zpdxn1BpRc7rKgA3tFQaBOyvPV0XE6POWr0E24XA75%2Bs1ImueOCYY6hoQQgNFKq98qUm7Q8C6hPf3mQEPHu1gG6x6ez3qCkeYglJiz4ftz4h%2FtKMifQn2XZ&X-Amz-Signature=5cabad4d67dc3159f1e9f7fe4f2e3b3e5e4fc5aff458ea255da36ec2fd041210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLWVKIZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC6QCX0HU%2F%2Bx3aYRUjK56N%2FXbLV78qazsOyeo1tb0rnUwIhAPuhqOo%2BHHMSJUTaP983zNb2Ui2N0D8Yvv0wJYx0D6OBKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9fWQQJhqwRTSIw38q3AOfOTEaGXZjbpAmLQFNeowOIf1hQEAsu426If1KXSyi67q1FtiNcYUOTuxcWN6FgHCrjS%2Bqs19gf0pVMWAFnvZUCnrX%2BZiKDArglRb0YU3%2B85HUysOiJQ22QkE7rPhYv32xyNtxfG4JbUOQBWWSDOWEEMxOqVxcFVJ0NsHGPSqj4mioiqVD7%2Fvx8qAXL%2BlFy17StjcqgHWToHIui28rT7S%2B%2BOX3w8xJTi%2FsM1VUk8xKzkeB5iQLg6McxEdJ0BElZVikfvnEWD%2BTSaXpN9X10WglXJd0VvLZx8UhMu5Xt17J0uYnUmzGn865kdP9vMf0LNcZLtsCNtJ2ro01lJSYZUMZLwCHcAKKlamTPS9yIkVA6X5EPHULO%2BVSuzAD%2BLAOwEouY6tkfEpFt4StEybj48fFoM5N6trGh4rZiAGCI%2BCVuc4fDfobWzzuagsQCm2%2FsvGOu5Phvteg6Wq7aQHfbIfEIzQOJYmzxGxoBvjFZVPhnwBMSkat3AprTTuN2FenjM5P9oSavAdGFFD%2Bk3J6aVmP241dGy1JB0zt0kRjBr516AAdPVwRrK%2FhbbmUOcEyd2xeR8CWXtkJInmUYwFThvsafh0ncVQPQY8QhD0A0HUrkAps58WIvET0XCV70DDHgtjEBjqkAY7uqLVlEuPLN0jRp6Ya9KanL5LHUzZ10hUC4vcDv5rq1kIo%2Bx7TB7ewzu9lQs%2BKJcuxQBso%2BLIUcW3aUD4yww9ab%2FOZ%2B%2F%2B4Ee2S4Zpdxn1BpRc7rKgA3tFQaBOyvPV0XE6POWr0E24XA75%2Bs1ImueOCYY6hoQQgNFKq98qUm7Q8C6hPf3mQEPHu1gG6x6ez3qCkeYglJiz4ftz4h%2FtKMifQn2XZ&X-Amz-Signature=0950c3cbcc5a7b22b61f7b72fe05a5faf0556ef9027f7f1988298f08168ec11b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLWVKIZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC6QCX0HU%2F%2Bx3aYRUjK56N%2FXbLV78qazsOyeo1tb0rnUwIhAPuhqOo%2BHHMSJUTaP983zNb2Ui2N0D8Yvv0wJYx0D6OBKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9fWQQJhqwRTSIw38q3AOfOTEaGXZjbpAmLQFNeowOIf1hQEAsu426If1KXSyi67q1FtiNcYUOTuxcWN6FgHCrjS%2Bqs19gf0pVMWAFnvZUCnrX%2BZiKDArglRb0YU3%2B85HUysOiJQ22QkE7rPhYv32xyNtxfG4JbUOQBWWSDOWEEMxOqVxcFVJ0NsHGPSqj4mioiqVD7%2Fvx8qAXL%2BlFy17StjcqgHWToHIui28rT7S%2B%2BOX3w8xJTi%2FsM1VUk8xKzkeB5iQLg6McxEdJ0BElZVikfvnEWD%2BTSaXpN9X10WglXJd0VvLZx8UhMu5Xt17J0uYnUmzGn865kdP9vMf0LNcZLtsCNtJ2ro01lJSYZUMZLwCHcAKKlamTPS9yIkVA6X5EPHULO%2BVSuzAD%2BLAOwEouY6tkfEpFt4StEybj48fFoM5N6trGh4rZiAGCI%2BCVuc4fDfobWzzuagsQCm2%2FsvGOu5Phvteg6Wq7aQHfbIfEIzQOJYmzxGxoBvjFZVPhnwBMSkat3AprTTuN2FenjM5P9oSavAdGFFD%2Bk3J6aVmP241dGy1JB0zt0kRjBr516AAdPVwRrK%2FhbbmUOcEyd2xeR8CWXtkJInmUYwFThvsafh0ncVQPQY8QhD0A0HUrkAps58WIvET0XCV70DDHgtjEBjqkAY7uqLVlEuPLN0jRp6Ya9KanL5LHUzZ10hUC4vcDv5rq1kIo%2Bx7TB7ewzu9lQs%2BKJcuxQBso%2BLIUcW3aUD4yww9ab%2FOZ%2B%2F%2B4Ee2S4Zpdxn1BpRc7rKgA3tFQaBOyvPV0XE6POWr0E24XA75%2Bs1ImueOCYY6hoQQgNFKq98qUm7Q8C6hPf3mQEPHu1gG6x6ez3qCkeYglJiz4ftz4h%2FtKMifQn2XZ&X-Amz-Signature=e00e979e4102c63e31d1bf92519b7c27b63ea05dd528ffa8faa8cad743abf156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLWVKIZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC6QCX0HU%2F%2Bx3aYRUjK56N%2FXbLV78qazsOyeo1tb0rnUwIhAPuhqOo%2BHHMSJUTaP983zNb2Ui2N0D8Yvv0wJYx0D6OBKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9fWQQJhqwRTSIw38q3AOfOTEaGXZjbpAmLQFNeowOIf1hQEAsu426If1KXSyi67q1FtiNcYUOTuxcWN6FgHCrjS%2Bqs19gf0pVMWAFnvZUCnrX%2BZiKDArglRb0YU3%2B85HUysOiJQ22QkE7rPhYv32xyNtxfG4JbUOQBWWSDOWEEMxOqVxcFVJ0NsHGPSqj4mioiqVD7%2Fvx8qAXL%2BlFy17StjcqgHWToHIui28rT7S%2B%2BOX3w8xJTi%2FsM1VUk8xKzkeB5iQLg6McxEdJ0BElZVikfvnEWD%2BTSaXpN9X10WglXJd0VvLZx8UhMu5Xt17J0uYnUmzGn865kdP9vMf0LNcZLtsCNtJ2ro01lJSYZUMZLwCHcAKKlamTPS9yIkVA6X5EPHULO%2BVSuzAD%2BLAOwEouY6tkfEpFt4StEybj48fFoM5N6trGh4rZiAGCI%2BCVuc4fDfobWzzuagsQCm2%2FsvGOu5Phvteg6Wq7aQHfbIfEIzQOJYmzxGxoBvjFZVPhnwBMSkat3AprTTuN2FenjM5P9oSavAdGFFD%2Bk3J6aVmP241dGy1JB0zt0kRjBr516AAdPVwRrK%2FhbbmUOcEyd2xeR8CWXtkJInmUYwFThvsafh0ncVQPQY8QhD0A0HUrkAps58WIvET0XCV70DDHgtjEBjqkAY7uqLVlEuPLN0jRp6Ya9KanL5LHUzZ10hUC4vcDv5rq1kIo%2Bx7TB7ewzu9lQs%2BKJcuxQBso%2BLIUcW3aUD4yww9ab%2FOZ%2B%2F%2B4Ee2S4Zpdxn1BpRc7rKgA3tFQaBOyvPV0XE6POWr0E24XA75%2Bs1ImueOCYY6hoQQgNFKq98qUm7Q8C6hPf3mQEPHu1gG6x6ez3qCkeYglJiz4ftz4h%2FtKMifQn2XZ&X-Amz-Signature=1c58c9e50ebf61cec40de628b4a97705efd7523b005b775c40cee120aba77dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLWVKIZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC6QCX0HU%2F%2Bx3aYRUjK56N%2FXbLV78qazsOyeo1tb0rnUwIhAPuhqOo%2BHHMSJUTaP983zNb2Ui2N0D8Yvv0wJYx0D6OBKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9fWQQJhqwRTSIw38q3AOfOTEaGXZjbpAmLQFNeowOIf1hQEAsu426If1KXSyi67q1FtiNcYUOTuxcWN6FgHCrjS%2Bqs19gf0pVMWAFnvZUCnrX%2BZiKDArglRb0YU3%2B85HUysOiJQ22QkE7rPhYv32xyNtxfG4JbUOQBWWSDOWEEMxOqVxcFVJ0NsHGPSqj4mioiqVD7%2Fvx8qAXL%2BlFy17StjcqgHWToHIui28rT7S%2B%2BOX3w8xJTi%2FsM1VUk8xKzkeB5iQLg6McxEdJ0BElZVikfvnEWD%2BTSaXpN9X10WglXJd0VvLZx8UhMu5Xt17J0uYnUmzGn865kdP9vMf0LNcZLtsCNtJ2ro01lJSYZUMZLwCHcAKKlamTPS9yIkVA6X5EPHULO%2BVSuzAD%2BLAOwEouY6tkfEpFt4StEybj48fFoM5N6trGh4rZiAGCI%2BCVuc4fDfobWzzuagsQCm2%2FsvGOu5Phvteg6Wq7aQHfbIfEIzQOJYmzxGxoBvjFZVPhnwBMSkat3AprTTuN2FenjM5P9oSavAdGFFD%2Bk3J6aVmP241dGy1JB0zt0kRjBr516AAdPVwRrK%2FhbbmUOcEyd2xeR8CWXtkJInmUYwFThvsafh0ncVQPQY8QhD0A0HUrkAps58WIvET0XCV70DDHgtjEBjqkAY7uqLVlEuPLN0jRp6Ya9KanL5LHUzZ10hUC4vcDv5rq1kIo%2Bx7TB7ewzu9lQs%2BKJcuxQBso%2BLIUcW3aUD4yww9ab%2FOZ%2B%2F%2B4Ee2S4Zpdxn1BpRc7rKgA3tFQaBOyvPV0XE6POWr0E24XA75%2Bs1ImueOCYY6hoQQgNFKq98qUm7Q8C6hPf3mQEPHu1gG6x6ez3qCkeYglJiz4ftz4h%2FtKMifQn2XZ&X-Amz-Signature=878d66eeb1f5fc5322c41a88d74258540285d1b45803ae7caad28ede40d50e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLWVKIZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC6QCX0HU%2F%2Bx3aYRUjK56N%2FXbLV78qazsOyeo1tb0rnUwIhAPuhqOo%2BHHMSJUTaP983zNb2Ui2N0D8Yvv0wJYx0D6OBKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9fWQQJhqwRTSIw38q3AOfOTEaGXZjbpAmLQFNeowOIf1hQEAsu426If1KXSyi67q1FtiNcYUOTuxcWN6FgHCrjS%2Bqs19gf0pVMWAFnvZUCnrX%2BZiKDArglRb0YU3%2B85HUysOiJQ22QkE7rPhYv32xyNtxfG4JbUOQBWWSDOWEEMxOqVxcFVJ0NsHGPSqj4mioiqVD7%2Fvx8qAXL%2BlFy17StjcqgHWToHIui28rT7S%2B%2BOX3w8xJTi%2FsM1VUk8xKzkeB5iQLg6McxEdJ0BElZVikfvnEWD%2BTSaXpN9X10WglXJd0VvLZx8UhMu5Xt17J0uYnUmzGn865kdP9vMf0LNcZLtsCNtJ2ro01lJSYZUMZLwCHcAKKlamTPS9yIkVA6X5EPHULO%2BVSuzAD%2BLAOwEouY6tkfEpFt4StEybj48fFoM5N6trGh4rZiAGCI%2BCVuc4fDfobWzzuagsQCm2%2FsvGOu5Phvteg6Wq7aQHfbIfEIzQOJYmzxGxoBvjFZVPhnwBMSkat3AprTTuN2FenjM5P9oSavAdGFFD%2Bk3J6aVmP241dGy1JB0zt0kRjBr516AAdPVwRrK%2FhbbmUOcEyd2xeR8CWXtkJInmUYwFThvsafh0ncVQPQY8QhD0A0HUrkAps58WIvET0XCV70DDHgtjEBjqkAY7uqLVlEuPLN0jRp6Ya9KanL5LHUzZ10hUC4vcDv5rq1kIo%2Bx7TB7ewzu9lQs%2BKJcuxQBso%2BLIUcW3aUD4yww9ab%2FOZ%2B%2F%2B4Ee2S4Zpdxn1BpRc7rKgA3tFQaBOyvPV0XE6POWr0E24XA75%2Bs1ImueOCYY6hoQQgNFKq98qUm7Q8C6hPf3mQEPHu1gG6x6ez3qCkeYglJiz4ftz4h%2FtKMifQn2XZ&X-Amz-Signature=d65d14b708bd595e1ceef05228d1130367acf181f068414a584e96d761f60b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLWVKIZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC6QCX0HU%2F%2Bx3aYRUjK56N%2FXbLV78qazsOyeo1tb0rnUwIhAPuhqOo%2BHHMSJUTaP983zNb2Ui2N0D8Yvv0wJYx0D6OBKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9fWQQJhqwRTSIw38q3AOfOTEaGXZjbpAmLQFNeowOIf1hQEAsu426If1KXSyi67q1FtiNcYUOTuxcWN6FgHCrjS%2Bqs19gf0pVMWAFnvZUCnrX%2BZiKDArglRb0YU3%2B85HUysOiJQ22QkE7rPhYv32xyNtxfG4JbUOQBWWSDOWEEMxOqVxcFVJ0NsHGPSqj4mioiqVD7%2Fvx8qAXL%2BlFy17StjcqgHWToHIui28rT7S%2B%2BOX3w8xJTi%2FsM1VUk8xKzkeB5iQLg6McxEdJ0BElZVikfvnEWD%2BTSaXpN9X10WglXJd0VvLZx8UhMu5Xt17J0uYnUmzGn865kdP9vMf0LNcZLtsCNtJ2ro01lJSYZUMZLwCHcAKKlamTPS9yIkVA6X5EPHULO%2BVSuzAD%2BLAOwEouY6tkfEpFt4StEybj48fFoM5N6trGh4rZiAGCI%2BCVuc4fDfobWzzuagsQCm2%2FsvGOu5Phvteg6Wq7aQHfbIfEIzQOJYmzxGxoBvjFZVPhnwBMSkat3AprTTuN2FenjM5P9oSavAdGFFD%2Bk3J6aVmP241dGy1JB0zt0kRjBr516AAdPVwRrK%2FhbbmUOcEyd2xeR8CWXtkJInmUYwFThvsafh0ncVQPQY8QhD0A0HUrkAps58WIvET0XCV70DDHgtjEBjqkAY7uqLVlEuPLN0jRp6Ya9KanL5LHUzZ10hUC4vcDv5rq1kIo%2Bx7TB7ewzu9lQs%2BKJcuxQBso%2BLIUcW3aUD4yww9ab%2FOZ%2B%2F%2B4Ee2S4Zpdxn1BpRc7rKgA3tFQaBOyvPV0XE6POWr0E24XA75%2Bs1ImueOCYY6hoQQgNFKq98qUm7Q8C6hPf3mQEPHu1gG6x6ez3qCkeYglJiz4ftz4h%2FtKMifQn2XZ&X-Amz-Signature=e0172906d2996daec05e1c853315d17bf766f4947fe48c67ddd88261661c402a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
