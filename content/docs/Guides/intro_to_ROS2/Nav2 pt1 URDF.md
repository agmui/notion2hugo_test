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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JHXYPE6%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCIqWa0ULb%2BdBIQ86MYSzYOeSgulJ%2FJFdzDjR%2B3Ms7qOgIgO%2BrzLF10eR9CKfD5Tzx1FYnIvlPVCer8jkFSmVLToWMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKuEsWxV1hYKlfvjtircA0ZlpvDvIYWce9ufNc0gsOZ8vvmasNA5xYcGGu5zkBwD%2BTbilanNDgLdSFG0KH2QqIA3sGiog99R3w6JS4psojlY%2Bc966QG5UT0kIoE57XutrCIAx3lfofhRnF8oKuh96wIdglSDmGoQuTkTE%2FSM69uak51Ixo25x%2BlugZIABMupHjj85GVDW%2BJft3L1jKCF67iaGB719sMatOXvIKx7RmeHQ2gIahw9Hu2Jq%2F7QFxeE34fiW9UvCXiXGK5h%2FbR82ZlnxgCs4ijv7SWTow%2By8UdKmHlQ4zEqb8RIxTxqM3wluXR3ChduBfiF5oKgjcYWDsKxgTYC0edVD2EgEGVBMuPTcfXKJNmVzK5YZvhjgx8LPkMvdKWZfw8NXJe0Nff8SuMK%2B55z8XANX4rul1K0funTje6ca8jccWxjr9uoKBaA0sGGFTSUGoSmqGxrGnMgc0i7eeuX4ASZjXsZz41u%2FA1ioG%2FMFC%2FV%2FGsaDRPEEhuLznoUZIBn0DIyt5eMdM%2FkI1Pbc%2FMldmOUSfd7yO8svZ2bQBeVPJHpHOC%2FNdVUFHjr%2FT0wXR5Rus9XD6WVURKiszgKISG%2BoL2zC0mo2SzfPhxhA9w5pVgcLAq5fzAgZLXY%2FKVoFjMDBZ1nX6QgMMrbptIGOqUBHawOMil%2BS5iXN0MClXpFj4vvImEsssCTxfAh7pNqvrmFNzBCIseNEbk03FKR22mnXDrm3v49I%2FGz67f9vZryjzyTO%2B07AHYgZpRau8RM1qXpcN6Rlk1tzWZ6vM6G2SgHpFuxH8c95FKvgeNrdMhptXgUXSQbiJK2KIZGLXEUwvynIEDQUyDHkqals9nrDDm7%2BBgwdMEX8RMNPAtH%2FaGHU5P4fzeH&X-Amz-Signature=d8b2a9cdd487e00e1efb375f50d3c7c57789d3bbe39cec036d0766206e925e1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JHXYPE6%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCIqWa0ULb%2BdBIQ86MYSzYOeSgulJ%2FJFdzDjR%2B3Ms7qOgIgO%2BrzLF10eR9CKfD5Tzx1FYnIvlPVCer8jkFSmVLToWMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKuEsWxV1hYKlfvjtircA0ZlpvDvIYWce9ufNc0gsOZ8vvmasNA5xYcGGu5zkBwD%2BTbilanNDgLdSFG0KH2QqIA3sGiog99R3w6JS4psojlY%2Bc966QG5UT0kIoE57XutrCIAx3lfofhRnF8oKuh96wIdglSDmGoQuTkTE%2FSM69uak51Ixo25x%2BlugZIABMupHjj85GVDW%2BJft3L1jKCF67iaGB719sMatOXvIKx7RmeHQ2gIahw9Hu2Jq%2F7QFxeE34fiW9UvCXiXGK5h%2FbR82ZlnxgCs4ijv7SWTow%2By8UdKmHlQ4zEqb8RIxTxqM3wluXR3ChduBfiF5oKgjcYWDsKxgTYC0edVD2EgEGVBMuPTcfXKJNmVzK5YZvhjgx8LPkMvdKWZfw8NXJe0Nff8SuMK%2B55z8XANX4rul1K0funTje6ca8jccWxjr9uoKBaA0sGGFTSUGoSmqGxrGnMgc0i7eeuX4ASZjXsZz41u%2FA1ioG%2FMFC%2FV%2FGsaDRPEEhuLznoUZIBn0DIyt5eMdM%2FkI1Pbc%2FMldmOUSfd7yO8svZ2bQBeVPJHpHOC%2FNdVUFHjr%2FT0wXR5Rus9XD6WVURKiszgKISG%2BoL2zC0mo2SzfPhxhA9w5pVgcLAq5fzAgZLXY%2FKVoFjMDBZ1nX6QgMMrbptIGOqUBHawOMil%2BS5iXN0MClXpFj4vvImEsssCTxfAh7pNqvrmFNzBCIseNEbk03FKR22mnXDrm3v49I%2FGz67f9vZryjzyTO%2B07AHYgZpRau8RM1qXpcN6Rlk1tzWZ6vM6G2SgHpFuxH8c95FKvgeNrdMhptXgUXSQbiJK2KIZGLXEUwvynIEDQUyDHkqals9nrDDm7%2BBgwdMEX8RMNPAtH%2FaGHU5P4fzeH&X-Amz-Signature=e81fe53c31219039dd39fdb21aa64bd102794db30ad7bcf2209f2ac28c46a038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JHXYPE6%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCIqWa0ULb%2BdBIQ86MYSzYOeSgulJ%2FJFdzDjR%2B3Ms7qOgIgO%2BrzLF10eR9CKfD5Tzx1FYnIvlPVCer8jkFSmVLToWMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKuEsWxV1hYKlfvjtircA0ZlpvDvIYWce9ufNc0gsOZ8vvmasNA5xYcGGu5zkBwD%2BTbilanNDgLdSFG0KH2QqIA3sGiog99R3w6JS4psojlY%2Bc966QG5UT0kIoE57XutrCIAx3lfofhRnF8oKuh96wIdglSDmGoQuTkTE%2FSM69uak51Ixo25x%2BlugZIABMupHjj85GVDW%2BJft3L1jKCF67iaGB719sMatOXvIKx7RmeHQ2gIahw9Hu2Jq%2F7QFxeE34fiW9UvCXiXGK5h%2FbR82ZlnxgCs4ijv7SWTow%2By8UdKmHlQ4zEqb8RIxTxqM3wluXR3ChduBfiF5oKgjcYWDsKxgTYC0edVD2EgEGVBMuPTcfXKJNmVzK5YZvhjgx8LPkMvdKWZfw8NXJe0Nff8SuMK%2B55z8XANX4rul1K0funTje6ca8jccWxjr9uoKBaA0sGGFTSUGoSmqGxrGnMgc0i7eeuX4ASZjXsZz41u%2FA1ioG%2FMFC%2FV%2FGsaDRPEEhuLznoUZIBn0DIyt5eMdM%2FkI1Pbc%2FMldmOUSfd7yO8svZ2bQBeVPJHpHOC%2FNdVUFHjr%2FT0wXR5Rus9XD6WVURKiszgKISG%2BoL2zC0mo2SzfPhxhA9w5pVgcLAq5fzAgZLXY%2FKVoFjMDBZ1nX6QgMMrbptIGOqUBHawOMil%2BS5iXN0MClXpFj4vvImEsssCTxfAh7pNqvrmFNzBCIseNEbk03FKR22mnXDrm3v49I%2FGz67f9vZryjzyTO%2B07AHYgZpRau8RM1qXpcN6Rlk1tzWZ6vM6G2SgHpFuxH8c95FKvgeNrdMhptXgUXSQbiJK2KIZGLXEUwvynIEDQUyDHkqals9nrDDm7%2BBgwdMEX8RMNPAtH%2FaGHU5P4fzeH&X-Amz-Signature=fb505faa23e8260c3a9d2fc0786c6d15446cdc664f929c45ae00c25f0afff1d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JHXYPE6%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCIqWa0ULb%2BdBIQ86MYSzYOeSgulJ%2FJFdzDjR%2B3Ms7qOgIgO%2BrzLF10eR9CKfD5Tzx1FYnIvlPVCer8jkFSmVLToWMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKuEsWxV1hYKlfvjtircA0ZlpvDvIYWce9ufNc0gsOZ8vvmasNA5xYcGGu5zkBwD%2BTbilanNDgLdSFG0KH2QqIA3sGiog99R3w6JS4psojlY%2Bc966QG5UT0kIoE57XutrCIAx3lfofhRnF8oKuh96wIdglSDmGoQuTkTE%2FSM69uak51Ixo25x%2BlugZIABMupHjj85GVDW%2BJft3L1jKCF67iaGB719sMatOXvIKx7RmeHQ2gIahw9Hu2Jq%2F7QFxeE34fiW9UvCXiXGK5h%2FbR82ZlnxgCs4ijv7SWTow%2By8UdKmHlQ4zEqb8RIxTxqM3wluXR3ChduBfiF5oKgjcYWDsKxgTYC0edVD2EgEGVBMuPTcfXKJNmVzK5YZvhjgx8LPkMvdKWZfw8NXJe0Nff8SuMK%2B55z8XANX4rul1K0funTje6ca8jccWxjr9uoKBaA0sGGFTSUGoSmqGxrGnMgc0i7eeuX4ASZjXsZz41u%2FA1ioG%2FMFC%2FV%2FGsaDRPEEhuLznoUZIBn0DIyt5eMdM%2FkI1Pbc%2FMldmOUSfd7yO8svZ2bQBeVPJHpHOC%2FNdVUFHjr%2FT0wXR5Rus9XD6WVURKiszgKISG%2BoL2zC0mo2SzfPhxhA9w5pVgcLAq5fzAgZLXY%2FKVoFjMDBZ1nX6QgMMrbptIGOqUBHawOMil%2BS5iXN0MClXpFj4vvImEsssCTxfAh7pNqvrmFNzBCIseNEbk03FKR22mnXDrm3v49I%2FGz67f9vZryjzyTO%2B07AHYgZpRau8RM1qXpcN6Rlk1tzWZ6vM6G2SgHpFuxH8c95FKvgeNrdMhptXgUXSQbiJK2KIZGLXEUwvynIEDQUyDHkqals9nrDDm7%2BBgwdMEX8RMNPAtH%2FaGHU5P4fzeH&X-Amz-Signature=151ef572ac9bffe120644fe2f027fc9c5167da2e362d12ba670a51f9f86a2426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JHXYPE6%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCIqWa0ULb%2BdBIQ86MYSzYOeSgulJ%2FJFdzDjR%2B3Ms7qOgIgO%2BrzLF10eR9CKfD5Tzx1FYnIvlPVCer8jkFSmVLToWMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKuEsWxV1hYKlfvjtircA0ZlpvDvIYWce9ufNc0gsOZ8vvmasNA5xYcGGu5zkBwD%2BTbilanNDgLdSFG0KH2QqIA3sGiog99R3w6JS4psojlY%2Bc966QG5UT0kIoE57XutrCIAx3lfofhRnF8oKuh96wIdglSDmGoQuTkTE%2FSM69uak51Ixo25x%2BlugZIABMupHjj85GVDW%2BJft3L1jKCF67iaGB719sMatOXvIKx7RmeHQ2gIahw9Hu2Jq%2F7QFxeE34fiW9UvCXiXGK5h%2FbR82ZlnxgCs4ijv7SWTow%2By8UdKmHlQ4zEqb8RIxTxqM3wluXR3ChduBfiF5oKgjcYWDsKxgTYC0edVD2EgEGVBMuPTcfXKJNmVzK5YZvhjgx8LPkMvdKWZfw8NXJe0Nff8SuMK%2B55z8XANX4rul1K0funTje6ca8jccWxjr9uoKBaA0sGGFTSUGoSmqGxrGnMgc0i7eeuX4ASZjXsZz41u%2FA1ioG%2FMFC%2FV%2FGsaDRPEEhuLznoUZIBn0DIyt5eMdM%2FkI1Pbc%2FMldmOUSfd7yO8svZ2bQBeVPJHpHOC%2FNdVUFHjr%2FT0wXR5Rus9XD6WVURKiszgKISG%2BoL2zC0mo2SzfPhxhA9w5pVgcLAq5fzAgZLXY%2FKVoFjMDBZ1nX6QgMMrbptIGOqUBHawOMil%2BS5iXN0MClXpFj4vvImEsssCTxfAh7pNqvrmFNzBCIseNEbk03FKR22mnXDrm3v49I%2FGz67f9vZryjzyTO%2B07AHYgZpRau8RM1qXpcN6Rlk1tzWZ6vM6G2SgHpFuxH8c95FKvgeNrdMhptXgUXSQbiJK2KIZGLXEUwvynIEDQUyDHkqals9nrDDm7%2BBgwdMEX8RMNPAtH%2FaGHU5P4fzeH&X-Amz-Signature=7ca29940c5cb0ca19b67d20cf3db3158d240b77499d65f633b75907c5f63f391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JHXYPE6%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCIqWa0ULb%2BdBIQ86MYSzYOeSgulJ%2FJFdzDjR%2B3Ms7qOgIgO%2BrzLF10eR9CKfD5Tzx1FYnIvlPVCer8jkFSmVLToWMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKuEsWxV1hYKlfvjtircA0ZlpvDvIYWce9ufNc0gsOZ8vvmasNA5xYcGGu5zkBwD%2BTbilanNDgLdSFG0KH2QqIA3sGiog99R3w6JS4psojlY%2Bc966QG5UT0kIoE57XutrCIAx3lfofhRnF8oKuh96wIdglSDmGoQuTkTE%2FSM69uak51Ixo25x%2BlugZIABMupHjj85GVDW%2BJft3L1jKCF67iaGB719sMatOXvIKx7RmeHQ2gIahw9Hu2Jq%2F7QFxeE34fiW9UvCXiXGK5h%2FbR82ZlnxgCs4ijv7SWTow%2By8UdKmHlQ4zEqb8RIxTxqM3wluXR3ChduBfiF5oKgjcYWDsKxgTYC0edVD2EgEGVBMuPTcfXKJNmVzK5YZvhjgx8LPkMvdKWZfw8NXJe0Nff8SuMK%2B55z8XANX4rul1K0funTje6ca8jccWxjr9uoKBaA0sGGFTSUGoSmqGxrGnMgc0i7eeuX4ASZjXsZz41u%2FA1ioG%2FMFC%2FV%2FGsaDRPEEhuLznoUZIBn0DIyt5eMdM%2FkI1Pbc%2FMldmOUSfd7yO8svZ2bQBeVPJHpHOC%2FNdVUFHjr%2FT0wXR5Rus9XD6WVURKiszgKISG%2BoL2zC0mo2SzfPhxhA9w5pVgcLAq5fzAgZLXY%2FKVoFjMDBZ1nX6QgMMrbptIGOqUBHawOMil%2BS5iXN0MClXpFj4vvImEsssCTxfAh7pNqvrmFNzBCIseNEbk03FKR22mnXDrm3v49I%2FGz67f9vZryjzyTO%2B07AHYgZpRau8RM1qXpcN6Rlk1tzWZ6vM6G2SgHpFuxH8c95FKvgeNrdMhptXgUXSQbiJK2KIZGLXEUwvynIEDQUyDHkqals9nrDDm7%2BBgwdMEX8RMNPAtH%2FaGHU5P4fzeH&X-Amz-Signature=ecfb77e534013738f881a5346167285ecdd60a9d14c503e040881122c42456dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JHXYPE6%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCIqWa0ULb%2BdBIQ86MYSzYOeSgulJ%2FJFdzDjR%2B3Ms7qOgIgO%2BrzLF10eR9CKfD5Tzx1FYnIvlPVCer8jkFSmVLToWMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKuEsWxV1hYKlfvjtircA0ZlpvDvIYWce9ufNc0gsOZ8vvmasNA5xYcGGu5zkBwD%2BTbilanNDgLdSFG0KH2QqIA3sGiog99R3w6JS4psojlY%2Bc966QG5UT0kIoE57XutrCIAx3lfofhRnF8oKuh96wIdglSDmGoQuTkTE%2FSM69uak51Ixo25x%2BlugZIABMupHjj85GVDW%2BJft3L1jKCF67iaGB719sMatOXvIKx7RmeHQ2gIahw9Hu2Jq%2F7QFxeE34fiW9UvCXiXGK5h%2FbR82ZlnxgCs4ijv7SWTow%2By8UdKmHlQ4zEqb8RIxTxqM3wluXR3ChduBfiF5oKgjcYWDsKxgTYC0edVD2EgEGVBMuPTcfXKJNmVzK5YZvhjgx8LPkMvdKWZfw8NXJe0Nff8SuMK%2B55z8XANX4rul1K0funTje6ca8jccWxjr9uoKBaA0sGGFTSUGoSmqGxrGnMgc0i7eeuX4ASZjXsZz41u%2FA1ioG%2FMFC%2FV%2FGsaDRPEEhuLznoUZIBn0DIyt5eMdM%2FkI1Pbc%2FMldmOUSfd7yO8svZ2bQBeVPJHpHOC%2FNdVUFHjr%2FT0wXR5Rus9XD6WVURKiszgKISG%2BoL2zC0mo2SzfPhxhA9w5pVgcLAq5fzAgZLXY%2FKVoFjMDBZ1nX6QgMMrbptIGOqUBHawOMil%2BS5iXN0MClXpFj4vvImEsssCTxfAh7pNqvrmFNzBCIseNEbk03FKR22mnXDrm3v49I%2FGz67f9vZryjzyTO%2B07AHYgZpRau8RM1qXpcN6Rlk1tzWZ6vM6G2SgHpFuxH8c95FKvgeNrdMhptXgUXSQbiJK2KIZGLXEUwvynIEDQUyDHkqals9nrDDm7%2BBgwdMEX8RMNPAtH%2FaGHU5P4fzeH&X-Amz-Signature=eea938ffe8834a1e0461915f66357a95a12f2627970157ecd60e71c82b6a00b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JHXYPE6%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCIqWa0ULb%2BdBIQ86MYSzYOeSgulJ%2FJFdzDjR%2B3Ms7qOgIgO%2BrzLF10eR9CKfD5Tzx1FYnIvlPVCer8jkFSmVLToWMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKuEsWxV1hYKlfvjtircA0ZlpvDvIYWce9ufNc0gsOZ8vvmasNA5xYcGGu5zkBwD%2BTbilanNDgLdSFG0KH2QqIA3sGiog99R3w6JS4psojlY%2Bc966QG5UT0kIoE57XutrCIAx3lfofhRnF8oKuh96wIdglSDmGoQuTkTE%2FSM69uak51Ixo25x%2BlugZIABMupHjj85GVDW%2BJft3L1jKCF67iaGB719sMatOXvIKx7RmeHQ2gIahw9Hu2Jq%2F7QFxeE34fiW9UvCXiXGK5h%2FbR82ZlnxgCs4ijv7SWTow%2By8UdKmHlQ4zEqb8RIxTxqM3wluXR3ChduBfiF5oKgjcYWDsKxgTYC0edVD2EgEGVBMuPTcfXKJNmVzK5YZvhjgx8LPkMvdKWZfw8NXJe0Nff8SuMK%2B55z8XANX4rul1K0funTje6ca8jccWxjr9uoKBaA0sGGFTSUGoSmqGxrGnMgc0i7eeuX4ASZjXsZz41u%2FA1ioG%2FMFC%2FV%2FGsaDRPEEhuLznoUZIBn0DIyt5eMdM%2FkI1Pbc%2FMldmOUSfd7yO8svZ2bQBeVPJHpHOC%2FNdVUFHjr%2FT0wXR5Rus9XD6WVURKiszgKISG%2BoL2zC0mo2SzfPhxhA9w5pVgcLAq5fzAgZLXY%2FKVoFjMDBZ1nX6QgMMrbptIGOqUBHawOMil%2BS5iXN0MClXpFj4vvImEsssCTxfAh7pNqvrmFNzBCIseNEbk03FKR22mnXDrm3v49I%2FGz67f9vZryjzyTO%2B07AHYgZpRau8RM1qXpcN6Rlk1tzWZ6vM6G2SgHpFuxH8c95FKvgeNrdMhptXgUXSQbiJK2KIZGLXEUwvynIEDQUyDHkqals9nrDDm7%2BBgwdMEX8RMNPAtH%2FaGHU5P4fzeH&X-Amz-Signature=0441db1919d1cc8bb782225a91eba2de4554fb35e672fd312328702eac2e010f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JHXYPE6%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCIqWa0ULb%2BdBIQ86MYSzYOeSgulJ%2FJFdzDjR%2B3Ms7qOgIgO%2BrzLF10eR9CKfD5Tzx1FYnIvlPVCer8jkFSmVLToWMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKuEsWxV1hYKlfvjtircA0ZlpvDvIYWce9ufNc0gsOZ8vvmasNA5xYcGGu5zkBwD%2BTbilanNDgLdSFG0KH2QqIA3sGiog99R3w6JS4psojlY%2Bc966QG5UT0kIoE57XutrCIAx3lfofhRnF8oKuh96wIdglSDmGoQuTkTE%2FSM69uak51Ixo25x%2BlugZIABMupHjj85GVDW%2BJft3L1jKCF67iaGB719sMatOXvIKx7RmeHQ2gIahw9Hu2Jq%2F7QFxeE34fiW9UvCXiXGK5h%2FbR82ZlnxgCs4ijv7SWTow%2By8UdKmHlQ4zEqb8RIxTxqM3wluXR3ChduBfiF5oKgjcYWDsKxgTYC0edVD2EgEGVBMuPTcfXKJNmVzK5YZvhjgx8LPkMvdKWZfw8NXJe0Nff8SuMK%2B55z8XANX4rul1K0funTje6ca8jccWxjr9uoKBaA0sGGFTSUGoSmqGxrGnMgc0i7eeuX4ASZjXsZz41u%2FA1ioG%2FMFC%2FV%2FGsaDRPEEhuLznoUZIBn0DIyt5eMdM%2FkI1Pbc%2FMldmOUSfd7yO8svZ2bQBeVPJHpHOC%2FNdVUFHjr%2FT0wXR5Rus9XD6WVURKiszgKISG%2BoL2zC0mo2SzfPhxhA9w5pVgcLAq5fzAgZLXY%2FKVoFjMDBZ1nX6QgMMrbptIGOqUBHawOMil%2BS5iXN0MClXpFj4vvImEsssCTxfAh7pNqvrmFNzBCIseNEbk03FKR22mnXDrm3v49I%2FGz67f9vZryjzyTO%2B07AHYgZpRau8RM1qXpcN6Rlk1tzWZ6vM6G2SgHpFuxH8c95FKvgeNrdMhptXgUXSQbiJK2KIZGLXEUwvynIEDQUyDHkqals9nrDDm7%2BBgwdMEX8RMNPAtH%2FaGHU5P4fzeH&X-Amz-Signature=8bc8ff6b44dca18dd36e45cf2c257be7e06d5300427169593cb4be43a2957d89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JHXYPE6%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCIqWa0ULb%2BdBIQ86MYSzYOeSgulJ%2FJFdzDjR%2B3Ms7qOgIgO%2BrzLF10eR9CKfD5Tzx1FYnIvlPVCer8jkFSmVLToWMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKuEsWxV1hYKlfvjtircA0ZlpvDvIYWce9ufNc0gsOZ8vvmasNA5xYcGGu5zkBwD%2BTbilanNDgLdSFG0KH2QqIA3sGiog99R3w6JS4psojlY%2Bc966QG5UT0kIoE57XutrCIAx3lfofhRnF8oKuh96wIdglSDmGoQuTkTE%2FSM69uak51Ixo25x%2BlugZIABMupHjj85GVDW%2BJft3L1jKCF67iaGB719sMatOXvIKx7RmeHQ2gIahw9Hu2Jq%2F7QFxeE34fiW9UvCXiXGK5h%2FbR82ZlnxgCs4ijv7SWTow%2By8UdKmHlQ4zEqb8RIxTxqM3wluXR3ChduBfiF5oKgjcYWDsKxgTYC0edVD2EgEGVBMuPTcfXKJNmVzK5YZvhjgx8LPkMvdKWZfw8NXJe0Nff8SuMK%2B55z8XANX4rul1K0funTje6ca8jccWxjr9uoKBaA0sGGFTSUGoSmqGxrGnMgc0i7eeuX4ASZjXsZz41u%2FA1ioG%2FMFC%2FV%2FGsaDRPEEhuLznoUZIBn0DIyt5eMdM%2FkI1Pbc%2FMldmOUSfd7yO8svZ2bQBeVPJHpHOC%2FNdVUFHjr%2FT0wXR5Rus9XD6WVURKiszgKISG%2BoL2zC0mo2SzfPhxhA9w5pVgcLAq5fzAgZLXY%2FKVoFjMDBZ1nX6QgMMrbptIGOqUBHawOMil%2BS5iXN0MClXpFj4vvImEsssCTxfAh7pNqvrmFNzBCIseNEbk03FKR22mnXDrm3v49I%2FGz67f9vZryjzyTO%2B07AHYgZpRau8RM1qXpcN6Rlk1tzWZ6vM6G2SgHpFuxH8c95FKvgeNrdMhptXgUXSQbiJK2KIZGLXEUwvynIEDQUyDHkqals9nrDDm7%2BBgwdMEX8RMNPAtH%2FaGHU5P4fzeH&X-Amz-Signature=1ffe9ac6759bca277cf072900eef518fa524fb66de299ca224c2339b4dde344e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MPQCNBM%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCICWokCYztZdBt4fyQS%2FRQBAg0oKbE7csN2Kp9NaXDpK8AiArexZJh9T0Wl0slUqYe5BXOBdtkRn%2F9gSoJmogEK0gGyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM61GBlkFPKx5y7%2FXUKtwD8ddqHx6DUoNfLiIafiOXCaCG0fwkV3ldR42o2hXigo4lc%2BLJxPujyuQ%2B5LoNLpRIxNO3ZqaCDOoacEK1DAUSnAglp994jq6rEtAKhD3TCOFSQc%2B2lu6qiw3FJVnN71YE5bs0nxN4QN2Thzsp2skKUxYCLnyjszjE%2Fs8d%2FOaedDmH1MQJR4Wb8mXUg6jfxKYYnbbAul7x1D0cAkuiDj9EHnOx02xdl9fiCgyUb3WMqBizWnogOmSKCGC93UJwQKHhA%2Ff39dVg9rWljW3h7th7Gu2EvXvZhT1BAgAR2XQXXZbZkIUYTEhzNoYm7oQNQAAhaVLwwzVZMx%2BVqbvzNWJ%2B8Kwe1HRlGgH4Vto6qrLElchdWlvjXUHBKQsYZYs0FhYukZGmQSHV3cVWVfn38v34T00%2B8scxbVyhMPAkbD0vsWc%2Bchc%2FG5VAxXrV9oawffdXjwnGD%2B1dImcs1dq7h20W5mG9oHs3MVOCNrEb0ifMSgQY8UFlDC703td6H2OS%2BMy8hySJxrpMehdmgAVO2Q%2F9YmMljtbzJB5KFspyaKoXSoWaN1YdpeHPbKv9umiCiSttcH8qOwX129J6OtBsbrMR3lqYDc3rRFmRkRkPM4FLjZGjS5HvUHcYO8l9U9YwwNmm0gY6pgEUY%2BNgBOQ3IsPQD72qAWopf9ljCSCdQV8lsTcAsJJE7Xwk7kudE6ek4HFo03cQerrwjYqdhKD2TZWxV499zDPRbDFz3wserQNqqwlh6fQBCzfB%2FvRvg8DJq4bMSas2hDGwXUoJLwoz44XwgLHeYd9m%2BPKA6PbmDDV09cIcqECJNkspdSU42zaXfHAhakg2t%2BiVv0xUr11uCRdnSjWlaLEZNi%2BDfFxH&X-Amz-Signature=14b523075c80bfbc6b73d5307328d062b0e11f61d4f096bafdb3c4fed4675c17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYLAWYET%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIE1q5QFBGiObAKlGl9XLpqi4WQ%2F%2F%2BNALAwbRDVAR%2BN%2BeAiBP0%2FulO%2BNZVIxYKrvycTFBGQiDCwDE0T%2Fg4jKyW0y0Jir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMHWjwwO56njzLu9PuKtwDqXam4bzSOrUisV4mBZPjK%2FuvHapl7wT%2FoZhQu0%2FYm2YA1NGTeCVSojUM0v4uo8qiw5kvEDyWthIGddm5hlbzbh97k8H66wOKinQx3UpapKRYZIVqcy%2Fv%2BO2%2FhLtCO3OfyTXw%2BQSPh94TRkqiUihntvFw4QCcFpGd8NJAgo6ySGqI11LdXd9RO2TA0pr9n2O4uQrVBE8hvjH3xxWlIhuBSqXk81%2FwTlrWnpPr%2FxG8hIEN3DvALPdoGAcKA8e6USPqHYV5CNqWVY5z8%2B6P40i7B9ltIQgOTDiD%2FhKZ35IQ8nnFj%2Bq6foKH9ZJJkCeitc%2BCpZxOQrdEPR7dy1nooPW1xnKzh4k9x3fnh0qmZTUg0%2F8rtKb9FDSK13w%2Flkj%2Fb%2B0k%2FnTp3an7KzXNdtk3KoSrjhoCsGWh8vtvTSgtTJT9ONYIUE9YW0eCRHXxWxEz3zgRcsKhTFwJgcMeMhQ%2Fm5qAEQDOR7VqZAZysMPsG7qxqhWpIhK2nkFTbMnXcbcbE1vY7iEioRs%2Fp4twAtZs%2F%2FlRu7zC4vgjwQCNE74Ab83goxPXq%2FZ9LOZcdwgjn7DsLWZ9Qa7wt1atrN18sBgZIrYYrPIKZHdrlqBdA8HF7JGX6S2%2B02pWnIDwYj7U2XUw3Num0gY6pgExjJ1LsgyFckI19qOgPVJS7iEPLpWYRi8%2F8%2F%2Fryre%2BM2AKgtYiUq43ng9Y5tjFxqJm%2BVQch7glPPs2tRSp2EmBIJ9a8onnY7itcPiXfuRLJ3bhSq%2BSsyBy7dW2ol%2BEfp6VoD6e1KMWzgh2AH6MA65Ep%2BJwdMAx%2BWKOIF%2B8rZMlgiFYpTj9xGaw3zUoOf7Wjv3WZ0olWU8EHTxk4fcaRKRRslKVZYR9&X-Amz-Signature=637e489b23614ad9bc71fe5123b118cc99b1cd3f8d48270baae432cfafa34999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GXNYDDT%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDqbRfy6ucQPDxh71perlMAjjLVvsUPqQc%2FX%2FA9%2Bl0e0AIgHlb3oBTwAzhlUPvU%2Bp%2Blnyf%2FFaHrz2v7CZNSukaIYt8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCRcIgSaCu1ngwTacCrcA9ye1y2gWjj1CnTf60X4P4VHR7G%2BMqOW1EP7a62nbNDM%2Bv8CK9gYAWwCvu0fYA%2FD1ZLvO4WRklM2D6O6h3cmxQm1FOPSy0tD9FXUYyh4Y19da0yPqBnk1yUZ9uV8OdS9xSlWPvlNeVoqEo%2Fj53SunnIoXqkKhmq%2FYF2FrmH48u09f32Mf9Pnw7S5AORiEBH%2FVoJRGTrubCbR%2F41dQ3y0E%2BekV509rsw%2BjH%2FLLnKTb7J6KAA4%2FxcHpqTpY4dz77ZwH%2BGqRgsH%2FS3d5StuW79PoU5AWIPim3uwKcN9ZP3Hmpd0X%2BxG5KEFG%2B0b6zFY8HLjE9JVgKN8BaVXNmNB4sLNcUGhuLo410FNCX5O9%2BKZCTLkHRvlxeiNfKLawjfu86S%2BlZ77ugNYm8EjiQiO5%2FCcOgcDelu2igtucmOhXuHUo1XfgFjQXJMrg7S7U%2FC4oXj7PcTvpxG3LX%2BANHyJYCX1n%2BYsAoA9xvyq9EQP9nqkKHOBf39ARDwHlmgOTaDh5pG8rCbOZFzc8OKe94zjsH0F6aOD3%2FmANn%2B3pbPquROhkuW2APq7ML6Ee1pjzjJ22Ya4DyGEqr2i0B%2Fpc%2BtqtwrrnaEOlqvYgPAFjlp1iEc8YxIM5fGjB7pEymixBCS7MNLZptIGOqUBfLjK77OF9AUF9lzd%2BR3%2FIh1KmBHsTCqFOAfImf0XgKxnTioUHOjw753CFCG%2FbbGkVBQiX3vmSVOozZy7tiPMTwN4f2UkhqD0ZLav2djZTqLsz%2BRqB0VhO58LzYlHd0OxTSqtgQ2xpRm0wQA4tf0kvPE3VhQo3fLzsxqIEzcURJzSQVZcACfIS4EiAysTr%2FklLV96Ja4c5kHzD73dR4wnDoMMDhZ0&X-Amz-Signature=c331404cc04df90662a1cb8eaac744767abb00f4043e2697512df8a642955b7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JHXYPE6%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCIqWa0ULb%2BdBIQ86MYSzYOeSgulJ%2FJFdzDjR%2B3Ms7qOgIgO%2BrzLF10eR9CKfD5Tzx1FYnIvlPVCer8jkFSmVLToWMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKuEsWxV1hYKlfvjtircA0ZlpvDvIYWce9ufNc0gsOZ8vvmasNA5xYcGGu5zkBwD%2BTbilanNDgLdSFG0KH2QqIA3sGiog99R3w6JS4psojlY%2Bc966QG5UT0kIoE57XutrCIAx3lfofhRnF8oKuh96wIdglSDmGoQuTkTE%2FSM69uak51Ixo25x%2BlugZIABMupHjj85GVDW%2BJft3L1jKCF67iaGB719sMatOXvIKx7RmeHQ2gIahw9Hu2Jq%2F7QFxeE34fiW9UvCXiXGK5h%2FbR82ZlnxgCs4ijv7SWTow%2By8UdKmHlQ4zEqb8RIxTxqM3wluXR3ChduBfiF5oKgjcYWDsKxgTYC0edVD2EgEGVBMuPTcfXKJNmVzK5YZvhjgx8LPkMvdKWZfw8NXJe0Nff8SuMK%2B55z8XANX4rul1K0funTje6ca8jccWxjr9uoKBaA0sGGFTSUGoSmqGxrGnMgc0i7eeuX4ASZjXsZz41u%2FA1ioG%2FMFC%2FV%2FGsaDRPEEhuLznoUZIBn0DIyt5eMdM%2FkI1Pbc%2FMldmOUSfd7yO8svZ2bQBeVPJHpHOC%2FNdVUFHjr%2FT0wXR5Rus9XD6WVURKiszgKISG%2BoL2zC0mo2SzfPhxhA9w5pVgcLAq5fzAgZLXY%2FKVoFjMDBZ1nX6QgMMrbptIGOqUBHawOMil%2BS5iXN0MClXpFj4vvImEsssCTxfAh7pNqvrmFNzBCIseNEbk03FKR22mnXDrm3v49I%2FGz67f9vZryjzyTO%2B07AHYgZpRau8RM1qXpcN6Rlk1tzWZ6vM6G2SgHpFuxH8c95FKvgeNrdMhptXgUXSQbiJK2KIZGLXEUwvynIEDQUyDHkqals9nrDDm7%2BBgwdMEX8RMNPAtH%2FaGHU5P4fzeH&X-Amz-Signature=fb1c5de08ebb9693297fd447ff0ccafbcd29a7ab15fac8b9a4d8b1c4f428db14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WDGEDDA%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDxSDunA7dbTc78BM0%2F1pil7nBsG79Y1N2gvTBnRfwxTQIhAMrQTnWR1Zf6HzD17tVucX6R7Hk4ylD2hjDn8CWvcBC4Kv8DCDIQABoMNjM3NDIzMTgzODA1Igwf3e07uaPh%2BCiJDCUq3AN7iwhivKxLFoaQw8Cm8%2BC1fCcD%2F9WouGQuvPsXeiTN3w8Tmtx1Q7ArbLgqfVgQ03knQaLd2fl0vO1tP3zn5HZe7fjCm3Alqx7nDY4Jl2gRjFzIMWTfhkdkMxB%2FD%2BFgLXj%2BSUiAxNgAZ7VgiYwtvd1GcUwcaV8dx5KW%2B3Mp7sALUzVEz1YLNljA%2BR2fRqfsUW02N9Y3hpvu6p2FEbJq9ImRGuBh5D7eDKZJbyxqpD19%2Bg61RZpyE5VNLdDg%2BTaJi26gfGd311I8XtLB6nveO5gHuoPMR8I7GucnWyont7mIk0VWyiDN%2FdxsG3kQxsStMM00hNEElZhZH4dW8jqVjKtKW1f16A2xLiW0csYSo%2Fi4j7kBuUWueIjW4A05jpYtE6aYuPf52%2B6BGaHmHgTQ6XLmhQyvCdYPWFTVcHaedWzvLI%2F4SwYLHCXMhlNO1q8RmrEaogjbrv7aEIwFh1DiDIqPaDnifB0OV3BFxsvv9eip%2F765l6BbFi1cTMMKId12GHKcErOGXDRgiu26es4t4u%2BvvV8px2ZLnDRbIRE2AMu2TeMeuOn7V9nDr0zfYgpUEGmbRXMBMTkxzR5th5qot3HPz%2F0APr30GEyOsIdlcNAlO7RMK7MSUMEZHsUMYTDB2abSBjqkAXJsFVWa39HICw9pJbCKMYLQStvNJ8xJJk6oiLuPV6AYnAF7TWeeG4gmSkkNOmTWzPrxbF5QIEl8YGl5N3%2BxTEj7jKRq3QWIWwy4%2FsU%2FgFMNxv8cpmU9qsYs3dN6i3TqJ7%2FTba36wkDz4oUe1yT%2FavrIA5RdBsNBWvbLT%2BNXIuGFR1H2Eb65uyFNiGSRzZtdZVjlQ84iqSitaxXWfLdViCfdhLR8&X-Amz-Signature=d65c44ff5cde34d633f4aad423cd45df330bc1a7e64875ed20a4d29a90724707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JHXYPE6%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCIqWa0ULb%2BdBIQ86MYSzYOeSgulJ%2FJFdzDjR%2B3Ms7qOgIgO%2BrzLF10eR9CKfD5Tzx1FYnIvlPVCer8jkFSmVLToWMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKuEsWxV1hYKlfvjtircA0ZlpvDvIYWce9ufNc0gsOZ8vvmasNA5xYcGGu5zkBwD%2BTbilanNDgLdSFG0KH2QqIA3sGiog99R3w6JS4psojlY%2Bc966QG5UT0kIoE57XutrCIAx3lfofhRnF8oKuh96wIdglSDmGoQuTkTE%2FSM69uak51Ixo25x%2BlugZIABMupHjj85GVDW%2BJft3L1jKCF67iaGB719sMatOXvIKx7RmeHQ2gIahw9Hu2Jq%2F7QFxeE34fiW9UvCXiXGK5h%2FbR82ZlnxgCs4ijv7SWTow%2By8UdKmHlQ4zEqb8RIxTxqM3wluXR3ChduBfiF5oKgjcYWDsKxgTYC0edVD2EgEGVBMuPTcfXKJNmVzK5YZvhjgx8LPkMvdKWZfw8NXJe0Nff8SuMK%2B55z8XANX4rul1K0funTje6ca8jccWxjr9uoKBaA0sGGFTSUGoSmqGxrGnMgc0i7eeuX4ASZjXsZz41u%2FA1ioG%2FMFC%2FV%2FGsaDRPEEhuLznoUZIBn0DIyt5eMdM%2FkI1Pbc%2FMldmOUSfd7yO8svZ2bQBeVPJHpHOC%2FNdVUFHjr%2FT0wXR5Rus9XD6WVURKiszgKISG%2BoL2zC0mo2SzfPhxhA9w5pVgcLAq5fzAgZLXY%2FKVoFjMDBZ1nX6QgMMrbptIGOqUBHawOMil%2BS5iXN0MClXpFj4vvImEsssCTxfAh7pNqvrmFNzBCIseNEbk03FKR22mnXDrm3v49I%2FGz67f9vZryjzyTO%2B07AHYgZpRau8RM1qXpcN6Rlk1tzWZ6vM6G2SgHpFuxH8c95FKvgeNrdMhptXgUXSQbiJK2KIZGLXEUwvynIEDQUyDHkqals9nrDDm7%2BBgwdMEX8RMNPAtH%2FaGHU5P4fzeH&X-Amz-Signature=d63919e0233d099c7e33e1e645ad0ac147331bfeded8e4fbb445f0a8ab059924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGF2Y5QW%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDLJQqUXdqZFKNiK5FwGIEnTe%2B6145lqeOk07vOZ3GuzAiAOLKG3w%2BRUx8tgPirwg5zL7buHvuGUSh%2BwJqyEqIRk7Sr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMBtVzdfkb4qLwTx8bKtwDujF9IfR1uULXaTyj%2BOQM0tqZkv%2BlISDr0QfFwB7lKCiFiG1fsQzh%2FtcK0A7BzlIbpIPUsPlyvLc9i3aEE%2Fs0ogzF0op71auFcY6FcDtbISWTlPN806q%2FyWHCC85gcY%2FvgYqu6rHgqyFkP9TiH8gRxoC0pwpxPgK1XYaaTrUXxXVli%2BMNtleIkIf5cFWs1CWcSe%2FNED2HJzel0TMF9j5eD474dRzRFYr9bevB3UV81F1y38MxxJ3w1KrRDy%2FqN3lgXqJcjhVfHprsPfhCVFaFoyKabuZ%2BwkU9ar4FcYNtg4%2BxsRZfhtS9He76h20FSziy%2FrBfpVioNv2S4Gel8T9scTUYEdWNRV4ZKA1qwiqZqW1Ydou9P6%2BU0hhjDZ%2F8dQze3j1L7CsVa5s7f%2F7xMqTIFaDp4ZP0GjF%2FuFimgD7ZJE1f3nLoohIFHG%2FirvQh3XS2QVP5M%2Bm3jULUlCXtsbrTUl62YNVEmK7TnS9UwbT5DMdA3zQz8aGaMqmBe5QF555M5o2iOmx3RyGHDb2emT%2BgBEuaXCn2qUBzFDiFtE2%2Bu7GHPRv5Y2FRYpnwXH3f%2Fgfi8wzQKs0ByFiDYPMB1UD5DcUfk3EAlwgH8%2BlMT84OPzGyjZH1dmRN3hFq%2Bt4wj9ym0gY6pgEC%2B4%2FNsUdmIlWH9gQ0vVQJuPxmDRBGcylqKIlW2remoqnUvwiuGVRhF1LgdNcgSywzuF8EKWhBJ2xXbA0wE1tThE9ehlKo8Xh5mt8EGvv1fCyrkpNQ%2FDfe12KYv%2BbLMCmCSgVyFtZ3P52s7hNrVcJBVwANUX%2BRqKsdcZldUenO8SvnrknhZ3SrOt0cCkLL54x9PTg%2BGWSBoL9%2BPbRkNwRw6UdtFk12&X-Amz-Signature=421341050d419b033197073b3643ee2b4ec7820413204a3ff1ee8136083df078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JHXYPE6%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCIqWa0ULb%2BdBIQ86MYSzYOeSgulJ%2FJFdzDjR%2B3Ms7qOgIgO%2BrzLF10eR9CKfD5Tzx1FYnIvlPVCer8jkFSmVLToWMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKuEsWxV1hYKlfvjtircA0ZlpvDvIYWce9ufNc0gsOZ8vvmasNA5xYcGGu5zkBwD%2BTbilanNDgLdSFG0KH2QqIA3sGiog99R3w6JS4psojlY%2Bc966QG5UT0kIoE57XutrCIAx3lfofhRnF8oKuh96wIdglSDmGoQuTkTE%2FSM69uak51Ixo25x%2BlugZIABMupHjj85GVDW%2BJft3L1jKCF67iaGB719sMatOXvIKx7RmeHQ2gIahw9Hu2Jq%2F7QFxeE34fiW9UvCXiXGK5h%2FbR82ZlnxgCs4ijv7SWTow%2By8UdKmHlQ4zEqb8RIxTxqM3wluXR3ChduBfiF5oKgjcYWDsKxgTYC0edVD2EgEGVBMuPTcfXKJNmVzK5YZvhjgx8LPkMvdKWZfw8NXJe0Nff8SuMK%2B55z8XANX4rul1K0funTje6ca8jccWxjr9uoKBaA0sGGFTSUGoSmqGxrGnMgc0i7eeuX4ASZjXsZz41u%2FA1ioG%2FMFC%2FV%2FGsaDRPEEhuLznoUZIBn0DIyt5eMdM%2FkI1Pbc%2FMldmOUSfd7yO8svZ2bQBeVPJHpHOC%2FNdVUFHjr%2FT0wXR5Rus9XD6WVURKiszgKISG%2BoL2zC0mo2SzfPhxhA9w5pVgcLAq5fzAgZLXY%2FKVoFjMDBZ1nX6QgMMrbptIGOqUBHawOMil%2BS5iXN0MClXpFj4vvImEsssCTxfAh7pNqvrmFNzBCIseNEbk03FKR22mnXDrm3v49I%2FGz67f9vZryjzyTO%2B07AHYgZpRau8RM1qXpcN6Rlk1tzWZ6vM6G2SgHpFuxH8c95FKvgeNrdMhptXgUXSQbiJK2KIZGLXEUwvynIEDQUyDHkqals9nrDDm7%2BBgwdMEX8RMNPAtH%2FaGHU5P4fzeH&X-Amz-Signature=6586abeb169d53abc599b0dfaae5d8c850866c62eba329ed77c7d5747860d308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XRUGRLK%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDtgSwZOIiDdiymvxhp3ITNH4iMiGq0ItVXcREibVv6KgIhAPyNzBuP%2FlRrZJlh%2FtuC9yiLw5LbVbf80IoyirF1JjoWKv8DCDIQABoMNjM3NDIzMTgzODA1IgyLNBClH4H0gETW6Ywq3AMf8VvF7tezApPs5v1rd1ooyQkrVACKHqAEuaRcLd3iFsXBE%2FsEfXGSYbfsLlKLF%2FCl2XlSPl4vptBxj%2FS1PIFGfrPws04PW3F56CL0Jd%2FBubpHujecy5QAj9fX3jmNGXfEkxiTTB8X6eZItJJl2mfcDFaUpU6D3Qo6DvYZcl5IirNraCZQRcnhIHVsNtXQROENpur9pj9y1VIrA%2FuTFKF%2Fu2SwlQwvcQH1vD0ZSyHSm%2BmgxsO6pTkI3GVTWB3hFz7ZuSxyMY2vr2fLWqDqkNM68Ibu266Hgmvuq6v60lCzYu7jRRI6kQvHUaTdFO88Y1DtjH8Um8VSeB91e7kxKP3siVviTeLE5FwF7hUoEp%2Fb0RYUgPYXF8oVsNWzltsOYm52YLnFGDczlVnmLSaYB0iaQ%2B3kKOO2YRGs%2BhSiYVwVqRPtuRzE3yzSzypvUL1%2Fy1eFkJjnDomVn9U8HIij3X6Gj8ohGPTzApkf9lLvOvUIcJUKy%2Fe%2FSKdSMTupqmq0RE3E02tS0QIAhEvIdqVlHHgXjJyC3kWAgKaqUxa78F8iZ8AjL6v0jpgGZRraB5Te%2FOwAW2vfFRGWLKAQE8Bm%2FnJWdbAU7dfHt3DxRg3gHY%2Bay7oUvXCbLLtuie6%2FijC026bSBjqkAZp8u7YxkjCTeqlop9HzkORTjd9A2E4DSsfWjU5YuzkZFs0Uw%2B6A95g8CAcRXMdJuQm%2BEn0GVGNpQl9vFFh6J%2B9BaxyPuvGC8P%2BIv%2FGmqymrmitaNbgLnR0NmK0oD9HE2T0k1JQXmKm07XEQg6KUTt1GHXhyWoDgN6%2FZR8H4N2PoAl%2BvxB%2FI9eDpg%2FTz%2BHq3Ivq%2F5wJUWsK1BmOe8o%2FtWhUrpYx9&X-Amz-Signature=48c38066c62a1ca37c6587f49b63a41f32d504eed26d6a6178a561f10340de84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JHXYPE6%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCIqWa0ULb%2BdBIQ86MYSzYOeSgulJ%2FJFdzDjR%2B3Ms7qOgIgO%2BrzLF10eR9CKfD5Tzx1FYnIvlPVCer8jkFSmVLToWMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKuEsWxV1hYKlfvjtircA0ZlpvDvIYWce9ufNc0gsOZ8vvmasNA5xYcGGu5zkBwD%2BTbilanNDgLdSFG0KH2QqIA3sGiog99R3w6JS4psojlY%2Bc966QG5UT0kIoE57XutrCIAx3lfofhRnF8oKuh96wIdglSDmGoQuTkTE%2FSM69uak51Ixo25x%2BlugZIABMupHjj85GVDW%2BJft3L1jKCF67iaGB719sMatOXvIKx7RmeHQ2gIahw9Hu2Jq%2F7QFxeE34fiW9UvCXiXGK5h%2FbR82ZlnxgCs4ijv7SWTow%2By8UdKmHlQ4zEqb8RIxTxqM3wluXR3ChduBfiF5oKgjcYWDsKxgTYC0edVD2EgEGVBMuPTcfXKJNmVzK5YZvhjgx8LPkMvdKWZfw8NXJe0Nff8SuMK%2B55z8XANX4rul1K0funTje6ca8jccWxjr9uoKBaA0sGGFTSUGoSmqGxrGnMgc0i7eeuX4ASZjXsZz41u%2FA1ioG%2FMFC%2FV%2FGsaDRPEEhuLznoUZIBn0DIyt5eMdM%2FkI1Pbc%2FMldmOUSfd7yO8svZ2bQBeVPJHpHOC%2FNdVUFHjr%2FT0wXR5Rus9XD6WVURKiszgKISG%2BoL2zC0mo2SzfPhxhA9w5pVgcLAq5fzAgZLXY%2FKVoFjMDBZ1nX6QgMMrbptIGOqUBHawOMil%2BS5iXN0MClXpFj4vvImEsssCTxfAh7pNqvrmFNzBCIseNEbk03FKR22mnXDrm3v49I%2FGz67f9vZryjzyTO%2B07AHYgZpRau8RM1qXpcN6Rlk1tzWZ6vM6G2SgHpFuxH8c95FKvgeNrdMhptXgUXSQbiJK2KIZGLXEUwvynIEDQUyDHkqals9nrDDm7%2BBgwdMEX8RMNPAtH%2FaGHU5P4fzeH&X-Amz-Signature=aec224f04390df03de7d2c94b8cc55f4a6a7025486a5b834e3800b07cde44d91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6RTZCX%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICRIpsC3aIQRucY2O6L5sEbuE%2FKYSi1nKy2PnaK5xKuZAiEAn%2BpbCnDoVL17l6tTPAmQ7CSy3JhMRlWFDmfUZyYZ6Dgq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDNavOWjNnm0%2BFtHxircA1eeBrl31%2FnW0MoVj%2FmVPbhsYsn%2BlxRqTfxqxnkgwuiQBqnW3%2FF1Ddn%2BUJZyDofHmDtsouM3QCkzelGCpQeRJHrgNk70xhV7ZAX84Ie42v%2FiHEX8MpXbRM8iFaXhQuY1yFEA2SBwWlsSkcX3lw%2BuRxbZhUEqPzjvXEI2mGooPab41qNlnZ5i7hQKjDYy%2B1Tu495FhYYo3xgJ6GVsHdBc4SGyBR53LR4iIMP3Qr%2Fvzvv9%2BOD0PPjO%2FQIHGdX08tmgjdBOKS1mdaXhFUWMNfYsAfZI%2FhDqTJP%2FVzTYni4XlLfOrc46yNHdox9pXNv%2Bsp0ZTr44juBF%2Btrmpi%2FErlDCXgfiLH6aL1QR4SvIOEO3XVUfWui%2FtZhb%2BPnWM9GehkGlrZU414c9XB%2FBbp7k9QG1YPePE3iSwB%2BZrNEpyNkMIcursd%2BgakwXRnfM9RamDdWCTQR%2BQBPFczY2bW1i7PaeM2HRjsft5lkvP7GAISvVZ0lbIZ0R8e%2F9f3%2BUKeQAF1sWw0HClAOt50eYOKgDuRALK9qGgDjMQlQuF%2FTCkEYlWD35v6%2FyovmfgVWiN9z5Pl0YMZUKMIBSEOlp0bCLavrTXntInsgrJu2w48VVwSSy4tzkNnAXeGOv1RNvE2tAMPfbptIGOqUB2MEJeVmJlZ75OqPllQ9pwGN7O1k%2FMIXzAd6FV8jEdGko%2BEYaXjGObysHCgcOtLydwuh%2FCFnaLb5oLx3fvQH%2FkMUHH%2BQj8ut%2FmlaQaBjSSKPsbuM8kXb5q2IsGv0KaWnRbDaNfttK3WwHwVrkC935IbUgFpxPSpONHcvFSAP1uvf98ePTon6qRn3KoR7ckDoKvbufNJU3XQLTvVsqSHSWzjjbGSXp&X-Amz-Signature=cf23db7c76eecd71538a31f65c6f7d11f4ebe805650a7405812947fb961b8026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JHXYPE6%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCIqWa0ULb%2BdBIQ86MYSzYOeSgulJ%2FJFdzDjR%2B3Ms7qOgIgO%2BrzLF10eR9CKfD5Tzx1FYnIvlPVCer8jkFSmVLToWMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKuEsWxV1hYKlfvjtircA0ZlpvDvIYWce9ufNc0gsOZ8vvmasNA5xYcGGu5zkBwD%2BTbilanNDgLdSFG0KH2QqIA3sGiog99R3w6JS4psojlY%2Bc966QG5UT0kIoE57XutrCIAx3lfofhRnF8oKuh96wIdglSDmGoQuTkTE%2FSM69uak51Ixo25x%2BlugZIABMupHjj85GVDW%2BJft3L1jKCF67iaGB719sMatOXvIKx7RmeHQ2gIahw9Hu2Jq%2F7QFxeE34fiW9UvCXiXGK5h%2FbR82ZlnxgCs4ijv7SWTow%2By8UdKmHlQ4zEqb8RIxTxqM3wluXR3ChduBfiF5oKgjcYWDsKxgTYC0edVD2EgEGVBMuPTcfXKJNmVzK5YZvhjgx8LPkMvdKWZfw8NXJe0Nff8SuMK%2B55z8XANX4rul1K0funTje6ca8jccWxjr9uoKBaA0sGGFTSUGoSmqGxrGnMgc0i7eeuX4ASZjXsZz41u%2FA1ioG%2FMFC%2FV%2FGsaDRPEEhuLznoUZIBn0DIyt5eMdM%2FkI1Pbc%2FMldmOUSfd7yO8svZ2bQBeVPJHpHOC%2FNdVUFHjr%2FT0wXR5Rus9XD6WVURKiszgKISG%2BoL2zC0mo2SzfPhxhA9w5pVgcLAq5fzAgZLXY%2FKVoFjMDBZ1nX6QgMMrbptIGOqUBHawOMil%2BS5iXN0MClXpFj4vvImEsssCTxfAh7pNqvrmFNzBCIseNEbk03FKR22mnXDrm3v49I%2FGz67f9vZryjzyTO%2B07AHYgZpRau8RM1qXpcN6Rlk1tzWZ6vM6G2SgHpFuxH8c95FKvgeNrdMhptXgUXSQbiJK2KIZGLXEUwvynIEDQUyDHkqals9nrDDm7%2BBgwdMEX8RMNPAtH%2FaGHU5P4fzeH&X-Amz-Signature=4ee45a3ef6fb6cd7b8d4008f6e992ec0a447fe0333873a8ee1a2a870228843c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K4HSM47%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCcDqlS4sBR4jgUQbjqekk61O2%2F8ylLfW8Ipsb1dxTKmwIhAK1swq7nRSEM%2BW6%2Bhw7bkRXZoPXBSzpKu5%2BzkuoKUQJgKv8DCDIQABoMNjM3NDIzMTgzODA1Igz3r%2BeMDL1qd6j%2BIBsq3AMPZrquB2wCBRIpf3PM1MDNIada0kixCGM2fS1DneIruIsvGP5Xw8XalO02Ka98yovqVsrrUcGF6DgoCbApOlQHDH1TKi3jCTxSAKvqH1ZXfKJEwM5kIx5LGUN7ztuiMcyQ2MHKvhXNkQmp3ITXtB4RarZlYs6lrLmD8RFXseHKSLnE7Fhh0v2rChTlUdEmgQIGGmVJBBZ1B%2BZB0BAgx2061Ssecf8yWkw5cZRRytW7jn%2FsrhaguneUTA%2BGwpKOE7pA4yCe%2BViWmvfLidObJEHpmYOC8zxEv%2FEAmppgA4yfxIfaZ2vXVZE0UxywNsj6sjszMfj2uSaR2zYfbw%2BhdnbeR1K8Wi3zjl56lP7Ro3OVnl2SlgMhScwI5pxvwoCAvcz98zWggo8bMV2e44MRSLa5qlqqLUxmeo5DE9ol5ra3uCcgNiOa8egN8AdDDBQMIdV%2BdWN2jE4rO0a8%2BFWO%2FFYxRKzqfMTx6S4MUJhZxJE8DvvK%2F8%2ByP%2BizmZlzDTKPA1HnwUjneqIMvwGX49RdojK6cnfMvVm8BUHXtuz6PytvrIbF8m1qdESDbYUcxHBm5dIP%2Bw8uRHJcbEqb4gGS9pAuJQTF3Of39aV05mKZUM255krD1iqpaVKrElcN8jCn2abSBjqkAcp7uxwgOlTgOg7JGYP8a%2B6SgEC3%2F4nG7h%2FobqZMjLYENzlmbqYwhUEiQycDGHKgSLy4nAu3nbD97%2BScucGUV4pcZUcx5Ejnn34RMxsTLT1Tzu5NeLNOjScICgO%2BZ8ISzFh57VVB0%2Ff2A8cSX1xNOOiQ%2FEpDCPXX1RaG3O7gRv7KcBWJAk1pyowyPsrL6bQRL6RB6t%2Fhv%2FUBIHQVdJ1w0cpuo3f0&X-Amz-Signature=dbec01edc0e242587d5e3b3896494baee967ace94e9a8f4ddc34e51a4d7c3d7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDXJA54V%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD2n7Tll3EotsV5NBzfGcbMM9nwJMSSXzxVGp2nSI0mZwIgWoopNbwrZKNILWi6Q6jGKnEm%2FLaHnmAhb3kyFbgH9e0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGMGcPCrBaMcn3HTpyrcA3x3et%2FGhsoBvHgyrIq5%2FKx%2Bt9xLSYRzI1F6ZAiOOYp9taRWM9HcMCZ5gL60DecVtKKZuodLFZxDbmvBue9V8ApH7eZt00JVZu4cz9lgcM1Mnb8DYFcekeXroG9WLTXAJk6TVmKbgQlGaShY9UraQ%2F7wHBpEXPSXgeSQRZxFMh0yzXfnz6gYUKcdzmZpDk9%2B%2BHtldEg2St2011ym6kvLcR0yosIzRTQCDIYOzFNNYPZeD0cEUUA60H1UVwC1g3gXqFw14hSCRZKIHg5sysuPAFMzIVIPA09U3EmSEDdACYrCLqpXH21Jb3gDNswf2ySWTR%2FmDmT9qDX7HrvDO41U20iU9bLExnpIAXDcYFwHo%2FNYTdlFXhYlyO4ObDup4MZ66Mi47mb1PbZOXWIXkiCsAsYkFZKd%2FxZU5nilKt9mwlAQcn7cVh7kpAAOYVEAIN7iDditPlfA9CtmOyxTJpZr7xEeduHJ2rfNFo6M7sOshgDB9DxZsE%2Fzc8qu2svkRza0NaDzdUXqfmnvV%2FrLcu1v9sTGvy0If7KsRtb4dm%2FdS4xiChtyuYj1J2BoESF9Bvmk%2FCYl3SfvX6YkezN%2FJ5Ey6Xp9KRjU2RLo5tLJYocyO%2F%2FLyyKe4UHH7tin65hEMMrZptIGOqUBCnKgVmvorjSuiUIWPcheLe7%2BcXa18%2Fy33yd4%2BHfSMlbmlobGURaNuk5lITgPRg86Zh5G2dkfa6FSk5Rkk%2FIa2AJ8OPTm%2B90yH7kFSik5fcFHK3n8QRBm2x1Wm9y4BHPMwvZB4GvOOdvh6mDR%2BFZqQ1sQTEeStwOxn39D%2BBrVvvdbOlYqPe1kc6WPRYy9Vp2dVj4HxX2ltbY9BoDppOFOJIvwvaoT&X-Amz-Signature=bbb21130a262df329771c3fe58a25d2867ff6299dd5cc2b659f1e696d8f5e377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYRLASEI%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCOzTmwcRzvCo0uJxjsvFRYC6Oo2DKLoyLucWxztOY3ywIhAKnczmq9B4m3POEEiib9RZFpYQujtiO6OG4mS2cqzN%2FYKv8DCDIQABoMNjM3NDIzMTgzODA1IgxpwUMJPHALVoouvyEq3APTrZ65NgREHrkI%2FkKMzO6t9bC1bFUbZEmM0vMwos2f9XhA4L0mQLJb%2FSKRzcrWaMP9230krxzea6Ft536O6S4zCm7BL6m4fGSrkRIhul8fi4FwjjU%2B1BTV5RSwuAFyElzceyIG9grbAkgTVuO4JgHa2Pc4HSIpdv7ZWrYrtv9Fi1tkEesG05sNnlXmJ8T17i75gC%2Fk7Q6EdSRv7LP0diuMIRsXFmJ8NFBjEYblHVjs4%2BDOkXcRLEwe6cpamu8luj5vGjWCm2ifrorO6DVFSZFSAe6%2BZFTVVtfNvSkyOg2LGH9CKZaEQsevW3aQ6Q0tQ%2FczyLgbqX9yU5QB9uWqhbrof0Y5LnelwpRC1w4YS1xuMcWMtfpso0kBCYSnc%2Bh8WAnaBrPXX7mCmEJL6Z%2B6Piw7YcGp2tG%2FD%2Fi3U4XdVtS0Pt7KN%2F01ZjV5S8VqApaucYP8yVPSvXyXpyxJ9tDJCpxGnfUYTtE%2Fzxfv1WahiR5viqPktWlK%2BW7Dw4gxRDSyw2rsYvDfjJFS1xht5oWTO6jsw%2FGMuZxKzvipPrwCCVZ4cLAij%2FW32gKcTT9aNy%2BtYvu4GJLCLUnGv%2B4paZOVTYRwmksWxlcIKOPDyNgwyInLM1ldev8u7SyCpvFmsjCO2qbSBjqkAemJoT4bRleh%2BAvT9lhGIg6bZrdFznfw5CuO652Ei6vyMXtGfaRtzsl0Ekqkzqz6zIouUsjAhaXIJW%2BClRfCJ3BWUccYCDq%2B8CXU04d8hC1Q6l4jVsNvhhM92pFSpUcynkVoYHIaG2i0ukZArNyYHrq1TCH%2F0Kf1whU6f34DtZR%2F2%2FeiO8hEbsTyKcYMaMN6fzRhZfghSMzsChMicPVDQDPdhTi8&X-Amz-Signature=a69026f36f2d4a96eca8a36b8e0b7ae0eb0e207f70ee386c3a390b173cf85b25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JHXYPE6%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCIqWa0ULb%2BdBIQ86MYSzYOeSgulJ%2FJFdzDjR%2B3Ms7qOgIgO%2BrzLF10eR9CKfD5Tzx1FYnIvlPVCer8jkFSmVLToWMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKuEsWxV1hYKlfvjtircA0ZlpvDvIYWce9ufNc0gsOZ8vvmasNA5xYcGGu5zkBwD%2BTbilanNDgLdSFG0KH2QqIA3sGiog99R3w6JS4psojlY%2Bc966QG5UT0kIoE57XutrCIAx3lfofhRnF8oKuh96wIdglSDmGoQuTkTE%2FSM69uak51Ixo25x%2BlugZIABMupHjj85GVDW%2BJft3L1jKCF67iaGB719sMatOXvIKx7RmeHQ2gIahw9Hu2Jq%2F7QFxeE34fiW9UvCXiXGK5h%2FbR82ZlnxgCs4ijv7SWTow%2By8UdKmHlQ4zEqb8RIxTxqM3wluXR3ChduBfiF5oKgjcYWDsKxgTYC0edVD2EgEGVBMuPTcfXKJNmVzK5YZvhjgx8LPkMvdKWZfw8NXJe0Nff8SuMK%2B55z8XANX4rul1K0funTje6ca8jccWxjr9uoKBaA0sGGFTSUGoSmqGxrGnMgc0i7eeuX4ASZjXsZz41u%2FA1ioG%2FMFC%2FV%2FGsaDRPEEhuLznoUZIBn0DIyt5eMdM%2FkI1Pbc%2FMldmOUSfd7yO8svZ2bQBeVPJHpHOC%2FNdVUFHjr%2FT0wXR5Rus9XD6WVURKiszgKISG%2BoL2zC0mo2SzfPhxhA9w5pVgcLAq5fzAgZLXY%2FKVoFjMDBZ1nX6QgMMrbptIGOqUBHawOMil%2BS5iXN0MClXpFj4vvImEsssCTxfAh7pNqvrmFNzBCIseNEbk03FKR22mnXDrm3v49I%2FGz67f9vZryjzyTO%2B07AHYgZpRau8RM1qXpcN6Rlk1tzWZ6vM6G2SgHpFuxH8c95FKvgeNrdMhptXgUXSQbiJK2KIZGLXEUwvynIEDQUyDHkqals9nrDDm7%2BBgwdMEX8RMNPAtH%2FaGHU5P4fzeH&X-Amz-Signature=6634847a75159a5574afaf8d8122aced9c5a3e10d611e0cea7e22162bd81a4ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JHXYPE6%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCIqWa0ULb%2BdBIQ86MYSzYOeSgulJ%2FJFdzDjR%2B3Ms7qOgIgO%2BrzLF10eR9CKfD5Tzx1FYnIvlPVCer8jkFSmVLToWMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKuEsWxV1hYKlfvjtircA0ZlpvDvIYWce9ufNc0gsOZ8vvmasNA5xYcGGu5zkBwD%2BTbilanNDgLdSFG0KH2QqIA3sGiog99R3w6JS4psojlY%2Bc966QG5UT0kIoE57XutrCIAx3lfofhRnF8oKuh96wIdglSDmGoQuTkTE%2FSM69uak51Ixo25x%2BlugZIABMupHjj85GVDW%2BJft3L1jKCF67iaGB719sMatOXvIKx7RmeHQ2gIahw9Hu2Jq%2F7QFxeE34fiW9UvCXiXGK5h%2FbR82ZlnxgCs4ijv7SWTow%2By8UdKmHlQ4zEqb8RIxTxqM3wluXR3ChduBfiF5oKgjcYWDsKxgTYC0edVD2EgEGVBMuPTcfXKJNmVzK5YZvhjgx8LPkMvdKWZfw8NXJe0Nff8SuMK%2B55z8XANX4rul1K0funTje6ca8jccWxjr9uoKBaA0sGGFTSUGoSmqGxrGnMgc0i7eeuX4ASZjXsZz41u%2FA1ioG%2FMFC%2FV%2FGsaDRPEEhuLznoUZIBn0DIyt5eMdM%2FkI1Pbc%2FMldmOUSfd7yO8svZ2bQBeVPJHpHOC%2FNdVUFHjr%2FT0wXR5Rus9XD6WVURKiszgKISG%2BoL2zC0mo2SzfPhxhA9w5pVgcLAq5fzAgZLXY%2FKVoFjMDBZ1nX6QgMMrbptIGOqUBHawOMil%2BS5iXN0MClXpFj4vvImEsssCTxfAh7pNqvrmFNzBCIseNEbk03FKR22mnXDrm3v49I%2FGz67f9vZryjzyTO%2B07AHYgZpRau8RM1qXpcN6Rlk1tzWZ6vM6G2SgHpFuxH8c95FKvgeNrdMhptXgUXSQbiJK2KIZGLXEUwvynIEDQUyDHkqals9nrDDm7%2BBgwdMEX8RMNPAtH%2FaGHU5P4fzeH&X-Amz-Signature=28f3ea6737cc0fed0b68778bd2cc4588d5d5e6be5bc920b35dba2e9d35f8cbf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPE62M6L%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCio4W1iX1p7QvmdVNbPqe0DnShuEePNyXkdMvkLHhygIgYliHzw%2BFpD9%2BtuI2R7zlNZM3zXANdn0MM%2FKXzHgnyLcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDPsUziPCr5sSQutVTircA8yQZLKV6ljG6IonV6wVn8l5jWgorvsg5lt%2FbOWp1Q3BZgYk3mMK5DpP6nUurhq5vWsh22kXrjrvXMrPjXPqiDT17kGXZGhfJtRPro1RtmYxZryHZ0vQQ%2BBKRZ%2FV2hhFRo5%2BZHnhg5dhqs3Zfff9bKWmQudbQu2BMYPII0hyKcZW4Vvj3WJD2cEJdQw3ADiDXcUgx3UGD0jKep598Oh3hEwYVOUoz8j%2FAMCmZalhDBjHdmQnmDiX1%2F0jc3i73Vb94%2BYOhPQ6S%2FV67zS%2FYyqPQEvZTK46jJ2Y5szGd4TgjEDk5ei3ZKxhHte%2BJ5lOrQifqv22kA%2F9UDenZ5NPbT0o9Ibliq%2Bx2Wi8erxARsqDQRlgMG0GGPCAHV3EQfgGCJx7yf2%2BpNnIbzl3OAlEKX5oe0QspwoAEsEB70oEvc7GDKEJXLg1mcOZ9ybYDbD4uqEymvsGEFW5V%2F%2FNIHsld8sG%2FlLok5Y5yijnGUYJgXL1ZGVE1S5yz9x92D0K6RIhLrtpN7Djtt3YJpyTZ4oSbT%2BGXBzZU1beVxDYdpdFfDjdzKY4Nyyu97Bpp1lrcoQI1tLwAyCvveIrpP6ACf4n%2Fi8alcObdkZCbf6928ytXHy3k2%2FFcXs2sqSa8d4phPaJMLTZptIGOqUBTN1thh4kCIpZG0RLe0g%2FCuVhJ7dvTAud5B2y0hAabsKPYOC%2Foi3B%2Fz%2BHRFXQ4tMvocOul8HnoBtIGxcub6jAQ3p03YA2Q4Otgtxq0zlEKhvhbzRYtcpa2nSR5gzfVNQfhfUybV7RQ7GA%2Bu5pEl%2FM7iZKQxF1Iz0un1K%2FP2vgBy2Opxv7oQJEIE0nBzfSD4cL41y2iBvktttKQWvrTwC03MB%2FsiK%2F&X-Amz-Signature=3cab16152b18a3a38200a2b91e26e7f91b949479135678d70dea943627931ffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPE62M6L%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCio4W1iX1p7QvmdVNbPqe0DnShuEePNyXkdMvkLHhygIgYliHzw%2BFpD9%2BtuI2R7zlNZM3zXANdn0MM%2FKXzHgnyLcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDPsUziPCr5sSQutVTircA8yQZLKV6ljG6IonV6wVn8l5jWgorvsg5lt%2FbOWp1Q3BZgYk3mMK5DpP6nUurhq5vWsh22kXrjrvXMrPjXPqiDT17kGXZGhfJtRPro1RtmYxZryHZ0vQQ%2BBKRZ%2FV2hhFRo5%2BZHnhg5dhqs3Zfff9bKWmQudbQu2BMYPII0hyKcZW4Vvj3WJD2cEJdQw3ADiDXcUgx3UGD0jKep598Oh3hEwYVOUoz8j%2FAMCmZalhDBjHdmQnmDiX1%2F0jc3i73Vb94%2BYOhPQ6S%2FV67zS%2FYyqPQEvZTK46jJ2Y5szGd4TgjEDk5ei3ZKxhHte%2BJ5lOrQifqv22kA%2F9UDenZ5NPbT0o9Ibliq%2Bx2Wi8erxARsqDQRlgMG0GGPCAHV3EQfgGCJx7yf2%2BpNnIbzl3OAlEKX5oe0QspwoAEsEB70oEvc7GDKEJXLg1mcOZ9ybYDbD4uqEymvsGEFW5V%2F%2FNIHsld8sG%2FlLok5Y5yijnGUYJgXL1ZGVE1S5yz9x92D0K6RIhLrtpN7Djtt3YJpyTZ4oSbT%2BGXBzZU1beVxDYdpdFfDjdzKY4Nyyu97Bpp1lrcoQI1tLwAyCvveIrpP6ACf4n%2Fi8alcObdkZCbf6928ytXHy3k2%2FFcXs2sqSa8d4phPaJMLTZptIGOqUBTN1thh4kCIpZG0RLe0g%2FCuVhJ7dvTAud5B2y0hAabsKPYOC%2Foi3B%2Fz%2BHRFXQ4tMvocOul8HnoBtIGxcub6jAQ3p03YA2Q4Otgtxq0zlEKhvhbzRYtcpa2nSR5gzfVNQfhfUybV7RQ7GA%2Bu5pEl%2FM7iZKQxF1Iz0un1K%2FP2vgBy2Opxv7oQJEIE0nBzfSD4cL41y2iBvktttKQWvrTwC03MB%2FsiK%2F&X-Amz-Signature=86a46a492e879d832932d2f27405bc0c9751633ed719fe44044ee8c5b0644c92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPE62M6L%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCio4W1iX1p7QvmdVNbPqe0DnShuEePNyXkdMvkLHhygIgYliHzw%2BFpD9%2BtuI2R7zlNZM3zXANdn0MM%2FKXzHgnyLcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDPsUziPCr5sSQutVTircA8yQZLKV6ljG6IonV6wVn8l5jWgorvsg5lt%2FbOWp1Q3BZgYk3mMK5DpP6nUurhq5vWsh22kXrjrvXMrPjXPqiDT17kGXZGhfJtRPro1RtmYxZryHZ0vQQ%2BBKRZ%2FV2hhFRo5%2BZHnhg5dhqs3Zfff9bKWmQudbQu2BMYPII0hyKcZW4Vvj3WJD2cEJdQw3ADiDXcUgx3UGD0jKep598Oh3hEwYVOUoz8j%2FAMCmZalhDBjHdmQnmDiX1%2F0jc3i73Vb94%2BYOhPQ6S%2FV67zS%2FYyqPQEvZTK46jJ2Y5szGd4TgjEDk5ei3ZKxhHte%2BJ5lOrQifqv22kA%2F9UDenZ5NPbT0o9Ibliq%2Bx2Wi8erxARsqDQRlgMG0GGPCAHV3EQfgGCJx7yf2%2BpNnIbzl3OAlEKX5oe0QspwoAEsEB70oEvc7GDKEJXLg1mcOZ9ybYDbD4uqEymvsGEFW5V%2F%2FNIHsld8sG%2FlLok5Y5yijnGUYJgXL1ZGVE1S5yz9x92D0K6RIhLrtpN7Djtt3YJpyTZ4oSbT%2BGXBzZU1beVxDYdpdFfDjdzKY4Nyyu97Bpp1lrcoQI1tLwAyCvveIrpP6ACf4n%2Fi8alcObdkZCbf6928ytXHy3k2%2FFcXs2sqSa8d4phPaJMLTZptIGOqUBTN1thh4kCIpZG0RLe0g%2FCuVhJ7dvTAud5B2y0hAabsKPYOC%2Foi3B%2Fz%2BHRFXQ4tMvocOul8HnoBtIGxcub6jAQ3p03YA2Q4Otgtxq0zlEKhvhbzRYtcpa2nSR5gzfVNQfhfUybV7RQ7GA%2Bu5pEl%2FM7iZKQxF1Iz0un1K%2FP2vgBy2Opxv7oQJEIE0nBzfSD4cL41y2iBvktttKQWvrTwC03MB%2FsiK%2F&X-Amz-Signature=3afc6ecfddd153ce57883b6ebc17cfc199b7b34d5f8c46c4ed7fd73376e9a4b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPE62M6L%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCio4W1iX1p7QvmdVNbPqe0DnShuEePNyXkdMvkLHhygIgYliHzw%2BFpD9%2BtuI2R7zlNZM3zXANdn0MM%2FKXzHgnyLcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDPsUziPCr5sSQutVTircA8yQZLKV6ljG6IonV6wVn8l5jWgorvsg5lt%2FbOWp1Q3BZgYk3mMK5DpP6nUurhq5vWsh22kXrjrvXMrPjXPqiDT17kGXZGhfJtRPro1RtmYxZryHZ0vQQ%2BBKRZ%2FV2hhFRo5%2BZHnhg5dhqs3Zfff9bKWmQudbQu2BMYPII0hyKcZW4Vvj3WJD2cEJdQw3ADiDXcUgx3UGD0jKep598Oh3hEwYVOUoz8j%2FAMCmZalhDBjHdmQnmDiX1%2F0jc3i73Vb94%2BYOhPQ6S%2FV67zS%2FYyqPQEvZTK46jJ2Y5szGd4TgjEDk5ei3ZKxhHte%2BJ5lOrQifqv22kA%2F9UDenZ5NPbT0o9Ibliq%2Bx2Wi8erxARsqDQRlgMG0GGPCAHV3EQfgGCJx7yf2%2BpNnIbzl3OAlEKX5oe0QspwoAEsEB70oEvc7GDKEJXLg1mcOZ9ybYDbD4uqEymvsGEFW5V%2F%2FNIHsld8sG%2FlLok5Y5yijnGUYJgXL1ZGVE1S5yz9x92D0K6RIhLrtpN7Djtt3YJpyTZ4oSbT%2BGXBzZU1beVxDYdpdFfDjdzKY4Nyyu97Bpp1lrcoQI1tLwAyCvveIrpP6ACf4n%2Fi8alcObdkZCbf6928ytXHy3k2%2FFcXs2sqSa8d4phPaJMLTZptIGOqUBTN1thh4kCIpZG0RLe0g%2FCuVhJ7dvTAud5B2y0hAabsKPYOC%2Foi3B%2Fz%2BHRFXQ4tMvocOul8HnoBtIGxcub6jAQ3p03YA2Q4Otgtxq0zlEKhvhbzRYtcpa2nSR5gzfVNQfhfUybV7RQ7GA%2Bu5pEl%2FM7iZKQxF1Iz0un1K%2FP2vgBy2Opxv7oQJEIE0nBzfSD4cL41y2iBvktttKQWvrTwC03MB%2FsiK%2F&X-Amz-Signature=771c0457d10edd2f736b9dc18a07f3b189d7fb441e3487401c6ba022fdfba44f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWNJZIP6%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDqT1k0wVhFar9k8W6CwwVDf1BozvF50OJ%2FSop8OzovSQIhAN2Wrlx34NDaT%2B6lkd1OGY2i1zYJa8jCv3wnbOr1V6XGKv8DCDIQABoMNjM3NDIzMTgzODA1Igxh8RAlEycMhou5rt0q3ANXr0kSxQ%2BREIShRBUtAfUSTWPEzECOR86OGN%2Bco%2BHg1VFSES%2BSJHJJwpfOOY46mhwTm800ljSvmwjeWgoyilByayos5lzxD8%2B8Qs7FW3vNFX9B7FFj3PZmX4q3GlYd90EKWbm0XhdkysoFWfqmKGthEbIZ7K%2FZfImznpc7iHs0zL%2FIq0GLfS55v4Wh2neB%2BQuQjVPn%2BK%2BWcWcGpeaSnl%2F7LELA38TUzreGKblGEvWrZDRAmIDrPYPyvooWRl%2BFn6yYM5nSSFJPE%2Fso9zrPWFp7DD3jsrA0Imua%2BValAP5VSodVWTByhFJuuwxmjG0m7jkLPvh%2Bdwq%2FnMf0vkr5zPU4PEiDUt%2BzjlFZdfSW4az8F5ln%2BESjFPtO30E%2B7Cm1JI4npjd0c%2F8sXFSl3bsIyPgCKYskkTz3IIKXdBirIx4ND%2FVyP4zjNyuY19nFm%2B2HgLr3iqwOdMmoFajCesOU7oTHDc2%2FXlGAWPnXfv9Aaek7iB57aFz3AV0%2Bn91QsbKTUwY0sz8GNCToLeNlOf6enU4u9ind2aBB9NIf32i09pU2cnCELckPNvseeJdJIoja4edSuvdmgY4KUB92D%2FHtakvMUiQFpHQRggND2LGj6n9QsBfxIyk4dcIV1lP1lzCW2qbSBjqkATkuySW6Ic0o8t9lQ7%2FYvz6ypQaiJN5cSWJtloMziXKk14oFFCgM6Dd%2BBOlJDELH9v7lTHqk5ZDDKVq6f20gCg8K3UK8bpPv6B%2BBYyVC%2Bestrxde7cFmNwznpBBx6Ctp5Nk5Tz2lbbnbRMGkHFZzH%2FVbo5tcPiyinG1yQPEGiZn30NK92j2KgPs6qPXs2OvrlO6YA1I2ueaF0vio3NvNDp8Wu4YY&X-Amz-Signature=ca9f0f36cd92ce9b20b9a0de1a60edcb082807db1207c81233b1143f2100b0e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPE62M6L%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCio4W1iX1p7QvmdVNbPqe0DnShuEePNyXkdMvkLHhygIgYliHzw%2BFpD9%2BtuI2R7zlNZM3zXANdn0MM%2FKXzHgnyLcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDPsUziPCr5sSQutVTircA8yQZLKV6ljG6IonV6wVn8l5jWgorvsg5lt%2FbOWp1Q3BZgYk3mMK5DpP6nUurhq5vWsh22kXrjrvXMrPjXPqiDT17kGXZGhfJtRPro1RtmYxZryHZ0vQQ%2BBKRZ%2FV2hhFRo5%2BZHnhg5dhqs3Zfff9bKWmQudbQu2BMYPII0hyKcZW4Vvj3WJD2cEJdQw3ADiDXcUgx3UGD0jKep598Oh3hEwYVOUoz8j%2FAMCmZalhDBjHdmQnmDiX1%2F0jc3i73Vb94%2BYOhPQ6S%2FV67zS%2FYyqPQEvZTK46jJ2Y5szGd4TgjEDk5ei3ZKxhHte%2BJ5lOrQifqv22kA%2F9UDenZ5NPbT0o9Ibliq%2Bx2Wi8erxARsqDQRlgMG0GGPCAHV3EQfgGCJx7yf2%2BpNnIbzl3OAlEKX5oe0QspwoAEsEB70oEvc7GDKEJXLg1mcOZ9ybYDbD4uqEymvsGEFW5V%2F%2FNIHsld8sG%2FlLok5Y5yijnGUYJgXL1ZGVE1S5yz9x92D0K6RIhLrtpN7Djtt3YJpyTZ4oSbT%2BGXBzZU1beVxDYdpdFfDjdzKY4Nyyu97Bpp1lrcoQI1tLwAyCvveIrpP6ACf4n%2Fi8alcObdkZCbf6928ytXHy3k2%2FFcXs2sqSa8d4phPaJMLTZptIGOqUBTN1thh4kCIpZG0RLe0g%2FCuVhJ7dvTAud5B2y0hAabsKPYOC%2Foi3B%2Fz%2BHRFXQ4tMvocOul8HnoBtIGxcub6jAQ3p03YA2Q4Otgtxq0zlEKhvhbzRYtcpa2nSR5gzfVNQfhfUybV7RQ7GA%2Bu5pEl%2FM7iZKQxF1Iz0un1K%2FP2vgBy2Opxv7oQJEIE0nBzfSD4cL41y2iBvktttKQWvrTwC03MB%2FsiK%2F&X-Amz-Signature=edde8b88705335d945a55109d713225aefece53ea1ceb57d9dace0701bc4fcce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPE62M6L%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCio4W1iX1p7QvmdVNbPqe0DnShuEePNyXkdMvkLHhygIgYliHzw%2BFpD9%2BtuI2R7zlNZM3zXANdn0MM%2FKXzHgnyLcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDPsUziPCr5sSQutVTircA8yQZLKV6ljG6IonV6wVn8l5jWgorvsg5lt%2FbOWp1Q3BZgYk3mMK5DpP6nUurhq5vWsh22kXrjrvXMrPjXPqiDT17kGXZGhfJtRPro1RtmYxZryHZ0vQQ%2BBKRZ%2FV2hhFRo5%2BZHnhg5dhqs3Zfff9bKWmQudbQu2BMYPII0hyKcZW4Vvj3WJD2cEJdQw3ADiDXcUgx3UGD0jKep598Oh3hEwYVOUoz8j%2FAMCmZalhDBjHdmQnmDiX1%2F0jc3i73Vb94%2BYOhPQ6S%2FV67zS%2FYyqPQEvZTK46jJ2Y5szGd4TgjEDk5ei3ZKxhHte%2BJ5lOrQifqv22kA%2F9UDenZ5NPbT0o9Ibliq%2Bx2Wi8erxARsqDQRlgMG0GGPCAHV3EQfgGCJx7yf2%2BpNnIbzl3OAlEKX5oe0QspwoAEsEB70oEvc7GDKEJXLg1mcOZ9ybYDbD4uqEymvsGEFW5V%2F%2FNIHsld8sG%2FlLok5Y5yijnGUYJgXL1ZGVE1S5yz9x92D0K6RIhLrtpN7Djtt3YJpyTZ4oSbT%2BGXBzZU1beVxDYdpdFfDjdzKY4Nyyu97Bpp1lrcoQI1tLwAyCvveIrpP6ACf4n%2Fi8alcObdkZCbf6928ytXHy3k2%2FFcXs2sqSa8d4phPaJMLTZptIGOqUBTN1thh4kCIpZG0RLe0g%2FCuVhJ7dvTAud5B2y0hAabsKPYOC%2Foi3B%2Fz%2BHRFXQ4tMvocOul8HnoBtIGxcub6jAQ3p03YA2Q4Otgtxq0zlEKhvhbzRYtcpa2nSR5gzfVNQfhfUybV7RQ7GA%2Bu5pEl%2FM7iZKQxF1Iz0un1K%2FP2vgBy2Opxv7oQJEIE0nBzfSD4cL41y2iBvktttKQWvrTwC03MB%2FsiK%2F&X-Amz-Signature=4f8fb086a5322ee851c32eadea976982fad4769ece13e12b334c3ecd388567c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPE62M6L%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCio4W1iX1p7QvmdVNbPqe0DnShuEePNyXkdMvkLHhygIgYliHzw%2BFpD9%2BtuI2R7zlNZM3zXANdn0MM%2FKXzHgnyLcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDPsUziPCr5sSQutVTircA8yQZLKV6ljG6IonV6wVn8l5jWgorvsg5lt%2FbOWp1Q3BZgYk3mMK5DpP6nUurhq5vWsh22kXrjrvXMrPjXPqiDT17kGXZGhfJtRPro1RtmYxZryHZ0vQQ%2BBKRZ%2FV2hhFRo5%2BZHnhg5dhqs3Zfff9bKWmQudbQu2BMYPII0hyKcZW4Vvj3WJD2cEJdQw3ADiDXcUgx3UGD0jKep598Oh3hEwYVOUoz8j%2FAMCmZalhDBjHdmQnmDiX1%2F0jc3i73Vb94%2BYOhPQ6S%2FV67zS%2FYyqPQEvZTK46jJ2Y5szGd4TgjEDk5ei3ZKxhHte%2BJ5lOrQifqv22kA%2F9UDenZ5NPbT0o9Ibliq%2Bx2Wi8erxARsqDQRlgMG0GGPCAHV3EQfgGCJx7yf2%2BpNnIbzl3OAlEKX5oe0QspwoAEsEB70oEvc7GDKEJXLg1mcOZ9ybYDbD4uqEymvsGEFW5V%2F%2FNIHsld8sG%2FlLok5Y5yijnGUYJgXL1ZGVE1S5yz9x92D0K6RIhLrtpN7Djtt3YJpyTZ4oSbT%2BGXBzZU1beVxDYdpdFfDjdzKY4Nyyu97Bpp1lrcoQI1tLwAyCvveIrpP6ACf4n%2Fi8alcObdkZCbf6928ytXHy3k2%2FFcXs2sqSa8d4phPaJMLTZptIGOqUBTN1thh4kCIpZG0RLe0g%2FCuVhJ7dvTAud5B2y0hAabsKPYOC%2Foi3B%2Fz%2BHRFXQ4tMvocOul8HnoBtIGxcub6jAQ3p03YA2Q4Otgtxq0zlEKhvhbzRYtcpa2nSR5gzfVNQfhfUybV7RQ7GA%2Bu5pEl%2FM7iZKQxF1Iz0un1K%2FP2vgBy2Opxv7oQJEIE0nBzfSD4cL41y2iBvktttKQWvrTwC03MB%2FsiK%2F&X-Amz-Signature=3afc6ecfddd153ce57883b6ebc17cfc199b7b34d5f8c46c4ed7fd73376e9a4b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPE62M6L%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCio4W1iX1p7QvmdVNbPqe0DnShuEePNyXkdMvkLHhygIgYliHzw%2BFpD9%2BtuI2R7zlNZM3zXANdn0MM%2FKXzHgnyLcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDPsUziPCr5sSQutVTircA8yQZLKV6ljG6IonV6wVn8l5jWgorvsg5lt%2FbOWp1Q3BZgYk3mMK5DpP6nUurhq5vWsh22kXrjrvXMrPjXPqiDT17kGXZGhfJtRPro1RtmYxZryHZ0vQQ%2BBKRZ%2FV2hhFRo5%2BZHnhg5dhqs3Zfff9bKWmQudbQu2BMYPII0hyKcZW4Vvj3WJD2cEJdQw3ADiDXcUgx3UGD0jKep598Oh3hEwYVOUoz8j%2FAMCmZalhDBjHdmQnmDiX1%2F0jc3i73Vb94%2BYOhPQ6S%2FV67zS%2FYyqPQEvZTK46jJ2Y5szGd4TgjEDk5ei3ZKxhHte%2BJ5lOrQifqv22kA%2F9UDenZ5NPbT0o9Ibliq%2Bx2Wi8erxARsqDQRlgMG0GGPCAHV3EQfgGCJx7yf2%2BpNnIbzl3OAlEKX5oe0QspwoAEsEB70oEvc7GDKEJXLg1mcOZ9ybYDbD4uqEymvsGEFW5V%2F%2FNIHsld8sG%2FlLok5Y5yijnGUYJgXL1ZGVE1S5yz9x92D0K6RIhLrtpN7Djtt3YJpyTZ4oSbT%2BGXBzZU1beVxDYdpdFfDjdzKY4Nyyu97Bpp1lrcoQI1tLwAyCvveIrpP6ACf4n%2Fi8alcObdkZCbf6928ytXHy3k2%2FFcXs2sqSa8d4phPaJMLTZptIGOqUBTN1thh4kCIpZG0RLe0g%2FCuVhJ7dvTAud5B2y0hAabsKPYOC%2Foi3B%2Fz%2BHRFXQ4tMvocOul8HnoBtIGxcub6jAQ3p03YA2Q4Otgtxq0zlEKhvhbzRYtcpa2nSR5gzfVNQfhfUybV7RQ7GA%2Bu5pEl%2FM7iZKQxF1Iz0un1K%2FP2vgBy2Opxv7oQJEIE0nBzfSD4cL41y2iBvktttKQWvrTwC03MB%2FsiK%2F&X-Amz-Signature=0312e845f13639a141904715ea632e88c27f4e07594728f6c2ba07f05732d5bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPE62M6L%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCio4W1iX1p7QvmdVNbPqe0DnShuEePNyXkdMvkLHhygIgYliHzw%2BFpD9%2BtuI2R7zlNZM3zXANdn0MM%2FKXzHgnyLcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDPsUziPCr5sSQutVTircA8yQZLKV6ljG6IonV6wVn8l5jWgorvsg5lt%2FbOWp1Q3BZgYk3mMK5DpP6nUurhq5vWsh22kXrjrvXMrPjXPqiDT17kGXZGhfJtRPro1RtmYxZryHZ0vQQ%2BBKRZ%2FV2hhFRo5%2BZHnhg5dhqs3Zfff9bKWmQudbQu2BMYPII0hyKcZW4Vvj3WJD2cEJdQw3ADiDXcUgx3UGD0jKep598Oh3hEwYVOUoz8j%2FAMCmZalhDBjHdmQnmDiX1%2F0jc3i73Vb94%2BYOhPQ6S%2FV67zS%2FYyqPQEvZTK46jJ2Y5szGd4TgjEDk5ei3ZKxhHte%2BJ5lOrQifqv22kA%2F9UDenZ5NPbT0o9Ibliq%2Bx2Wi8erxARsqDQRlgMG0GGPCAHV3EQfgGCJx7yf2%2BpNnIbzl3OAlEKX5oe0QspwoAEsEB70oEvc7GDKEJXLg1mcOZ9ybYDbD4uqEymvsGEFW5V%2F%2FNIHsld8sG%2FlLok5Y5yijnGUYJgXL1ZGVE1S5yz9x92D0K6RIhLrtpN7Djtt3YJpyTZ4oSbT%2BGXBzZU1beVxDYdpdFfDjdzKY4Nyyu97Bpp1lrcoQI1tLwAyCvveIrpP6ACf4n%2Fi8alcObdkZCbf6928ytXHy3k2%2FFcXs2sqSa8d4phPaJMLTZptIGOqUBTN1thh4kCIpZG0RLe0g%2FCuVhJ7dvTAud5B2y0hAabsKPYOC%2Foi3B%2Fz%2BHRFXQ4tMvocOul8HnoBtIGxcub6jAQ3p03YA2Q4Otgtxq0zlEKhvhbzRYtcpa2nSR5gzfVNQfhfUybV7RQ7GA%2Bu5pEl%2FM7iZKQxF1Iz0un1K%2FP2vgBy2Opxv7oQJEIE0nBzfSD4cL41y2iBvktttKQWvrTwC03MB%2FsiK%2F&X-Amz-Signature=006b157a4943ca72eb09dbd61347ad6602516b720664b84ce9a0d43892b370ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPE62M6L%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCio4W1iX1p7QvmdVNbPqe0DnShuEePNyXkdMvkLHhygIgYliHzw%2BFpD9%2BtuI2R7zlNZM3zXANdn0MM%2FKXzHgnyLcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDPsUziPCr5sSQutVTircA8yQZLKV6ljG6IonV6wVn8l5jWgorvsg5lt%2FbOWp1Q3BZgYk3mMK5DpP6nUurhq5vWsh22kXrjrvXMrPjXPqiDT17kGXZGhfJtRPro1RtmYxZryHZ0vQQ%2BBKRZ%2FV2hhFRo5%2BZHnhg5dhqs3Zfff9bKWmQudbQu2BMYPII0hyKcZW4Vvj3WJD2cEJdQw3ADiDXcUgx3UGD0jKep598Oh3hEwYVOUoz8j%2FAMCmZalhDBjHdmQnmDiX1%2F0jc3i73Vb94%2BYOhPQ6S%2FV67zS%2FYyqPQEvZTK46jJ2Y5szGd4TgjEDk5ei3ZKxhHte%2BJ5lOrQifqv22kA%2F9UDenZ5NPbT0o9Ibliq%2Bx2Wi8erxARsqDQRlgMG0GGPCAHV3EQfgGCJx7yf2%2BpNnIbzl3OAlEKX5oe0QspwoAEsEB70oEvc7GDKEJXLg1mcOZ9ybYDbD4uqEymvsGEFW5V%2F%2FNIHsld8sG%2FlLok5Y5yijnGUYJgXL1ZGVE1S5yz9x92D0K6RIhLrtpN7Djtt3YJpyTZ4oSbT%2BGXBzZU1beVxDYdpdFfDjdzKY4Nyyu97Bpp1lrcoQI1tLwAyCvveIrpP6ACf4n%2Fi8alcObdkZCbf6928ytXHy3k2%2FFcXs2sqSa8d4phPaJMLTZptIGOqUBTN1thh4kCIpZG0RLe0g%2FCuVhJ7dvTAud5B2y0hAabsKPYOC%2Foi3B%2Fz%2BHRFXQ4tMvocOul8HnoBtIGxcub6jAQ3p03YA2Q4Otgtxq0zlEKhvhbzRYtcpa2nSR5gzfVNQfhfUybV7RQ7GA%2Bu5pEl%2FM7iZKQxF1Iz0un1K%2FP2vgBy2Opxv7oQJEIE0nBzfSD4cL41y2iBvktttKQWvrTwC03MB%2FsiK%2F&X-Amz-Signature=9a41fc344df83f5be38ae15e4eaa6337ff85880ba063be97266b24c00cdbac47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


