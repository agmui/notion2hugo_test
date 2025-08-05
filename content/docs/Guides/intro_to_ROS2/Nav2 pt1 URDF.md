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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUX42BF7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCb60YnSm9IqMmsExrsFXCZizpPsOuvsEUEGuwQQO3E%2FwIhALhFLHEt7Khi%2BINvJiIUMP65VQ43rROBN3LGHQvhBqdeKv8DCFAQABoMNjM3NDIzMTgzODA1IgxEFDkoJaagu5Fs8r4q3ANDj1YvHtCLoTbOUlS%2F%2BV6%2F%2BgJ0glfiXuK8FoKzRpCl4e4uuZjnyP3kROKFgj2md6wDQwZX5DhKvZONQlzp2gxCRJeiNJsphHP%2F4aqbIsY%2FB%2FRVWzCJOqb5PZAHnrhdvT9XfMSqaCTxUwlhlSMX0Be5AUw14E29W0TDGDRCz6vTOxzp2LorLQZaahkfu%2BFqDnUGTxCGXAon4jAXpI6T8zSih52oXwnUT5oBgB1usQm8sBuP%2FqAGQdgIBs4FP7NKyanrGWoUC%2F63fZNEk5HDAm7H2d%2BEwHfDuHDtfVfR1d3J5DwtgQhX%2Bg6%2Bq1AtHbvyNS3H4D2n9kehXDJPS6hOMFgkE11q6fn%2BdEofdaeoxTPRqL0r%2BpEg7cn90F8ZrML9lGtaxJEQVXUc0BmjfzFTBhhB7FgsoXG7OyrGebSlEwShUHKHBY3da0Ay1A7UkA5QZDDdVP9htGicw7ORkXS2kO0bjDU%2FDn8CD8N0R80PZB0emosY7g%2FWn4e5GwdU40Y%2BFsMhfBpgSz9GoT2EK68%2Fv1LMi1UVvbL%2FV51QrLydPT58CysvPwIkNF%2BmkHZWgMVm4ROb6sXRIpJn2SwxMqyuoPjh42nLNhD5hkZWkTkhdqERJoM%2FFPiYiMBMoWr0IjCW9MTEBjqkAb8NDnS0k3DRi%2BSrM6pvcOaSRpm%2FFaPlXojXBaCiljEi8tg0qQ%2F%2FvMWAluuQJJZmu4r4uRnQ9YLIVwR48scRkyedRyYs7UrCKbKrPTgCMnJTrUveFHNAJJmKixHl6qd3iU7qmucebE8%2B2Q3PF8Edg1aLaWnt2gM3xlDXPN0bu0GY5TMykUxFsdAfMwm7JwUxy8d74osuCzTWkk7N73ljmpjZLSpu&X-Amz-Signature=b40b9d747f37aea8f2cce1535e601725eec4c3e8be8c198e544a52c4a0a7884e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUX42BF7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCb60YnSm9IqMmsExrsFXCZizpPsOuvsEUEGuwQQO3E%2FwIhALhFLHEt7Khi%2BINvJiIUMP65VQ43rROBN3LGHQvhBqdeKv8DCFAQABoMNjM3NDIzMTgzODA1IgxEFDkoJaagu5Fs8r4q3ANDj1YvHtCLoTbOUlS%2F%2BV6%2F%2BgJ0glfiXuK8FoKzRpCl4e4uuZjnyP3kROKFgj2md6wDQwZX5DhKvZONQlzp2gxCRJeiNJsphHP%2F4aqbIsY%2FB%2FRVWzCJOqb5PZAHnrhdvT9XfMSqaCTxUwlhlSMX0Be5AUw14E29W0TDGDRCz6vTOxzp2LorLQZaahkfu%2BFqDnUGTxCGXAon4jAXpI6T8zSih52oXwnUT5oBgB1usQm8sBuP%2FqAGQdgIBs4FP7NKyanrGWoUC%2F63fZNEk5HDAm7H2d%2BEwHfDuHDtfVfR1d3J5DwtgQhX%2Bg6%2Bq1AtHbvyNS3H4D2n9kehXDJPS6hOMFgkE11q6fn%2BdEofdaeoxTPRqL0r%2BpEg7cn90F8ZrML9lGtaxJEQVXUc0BmjfzFTBhhB7FgsoXG7OyrGebSlEwShUHKHBY3da0Ay1A7UkA5QZDDdVP9htGicw7ORkXS2kO0bjDU%2FDn8CD8N0R80PZB0emosY7g%2FWn4e5GwdU40Y%2BFsMhfBpgSz9GoT2EK68%2Fv1LMi1UVvbL%2FV51QrLydPT58CysvPwIkNF%2BmkHZWgMVm4ROb6sXRIpJn2SwxMqyuoPjh42nLNhD5hkZWkTkhdqERJoM%2FFPiYiMBMoWr0IjCW9MTEBjqkAb8NDnS0k3DRi%2BSrM6pvcOaSRpm%2FFaPlXojXBaCiljEi8tg0qQ%2F%2FvMWAluuQJJZmu4r4uRnQ9YLIVwR48scRkyedRyYs7UrCKbKrPTgCMnJTrUveFHNAJJmKixHl6qd3iU7qmucebE8%2B2Q3PF8Edg1aLaWnt2gM3xlDXPN0bu0GY5TMykUxFsdAfMwm7JwUxy8d74osuCzTWkk7N73ljmpjZLSpu&X-Amz-Signature=9496ae58e49a98e5e2a4a7eda4f298cb2ebde98dda2a8f6fd9669fa9ba4778d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUX42BF7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCb60YnSm9IqMmsExrsFXCZizpPsOuvsEUEGuwQQO3E%2FwIhALhFLHEt7Khi%2BINvJiIUMP65VQ43rROBN3LGHQvhBqdeKv8DCFAQABoMNjM3NDIzMTgzODA1IgxEFDkoJaagu5Fs8r4q3ANDj1YvHtCLoTbOUlS%2F%2BV6%2F%2BgJ0glfiXuK8FoKzRpCl4e4uuZjnyP3kROKFgj2md6wDQwZX5DhKvZONQlzp2gxCRJeiNJsphHP%2F4aqbIsY%2FB%2FRVWzCJOqb5PZAHnrhdvT9XfMSqaCTxUwlhlSMX0Be5AUw14E29W0TDGDRCz6vTOxzp2LorLQZaahkfu%2BFqDnUGTxCGXAon4jAXpI6T8zSih52oXwnUT5oBgB1usQm8sBuP%2FqAGQdgIBs4FP7NKyanrGWoUC%2F63fZNEk5HDAm7H2d%2BEwHfDuHDtfVfR1d3J5DwtgQhX%2Bg6%2Bq1AtHbvyNS3H4D2n9kehXDJPS6hOMFgkE11q6fn%2BdEofdaeoxTPRqL0r%2BpEg7cn90F8ZrML9lGtaxJEQVXUc0BmjfzFTBhhB7FgsoXG7OyrGebSlEwShUHKHBY3da0Ay1A7UkA5QZDDdVP9htGicw7ORkXS2kO0bjDU%2FDn8CD8N0R80PZB0emosY7g%2FWn4e5GwdU40Y%2BFsMhfBpgSz9GoT2EK68%2Fv1LMi1UVvbL%2FV51QrLydPT58CysvPwIkNF%2BmkHZWgMVm4ROb6sXRIpJn2SwxMqyuoPjh42nLNhD5hkZWkTkhdqERJoM%2FFPiYiMBMoWr0IjCW9MTEBjqkAb8NDnS0k3DRi%2BSrM6pvcOaSRpm%2FFaPlXojXBaCiljEi8tg0qQ%2F%2FvMWAluuQJJZmu4r4uRnQ9YLIVwR48scRkyedRyYs7UrCKbKrPTgCMnJTrUveFHNAJJmKixHl6qd3iU7qmucebE8%2B2Q3PF8Edg1aLaWnt2gM3xlDXPN0bu0GY5TMykUxFsdAfMwm7JwUxy8d74osuCzTWkk7N73ljmpjZLSpu&X-Amz-Signature=0be2e15f1edb232ad7958f0b7ba5099226e8264f64e2328d6588d139052f53dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUX42BF7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCb60YnSm9IqMmsExrsFXCZizpPsOuvsEUEGuwQQO3E%2FwIhALhFLHEt7Khi%2BINvJiIUMP65VQ43rROBN3LGHQvhBqdeKv8DCFAQABoMNjM3NDIzMTgzODA1IgxEFDkoJaagu5Fs8r4q3ANDj1YvHtCLoTbOUlS%2F%2BV6%2F%2BgJ0glfiXuK8FoKzRpCl4e4uuZjnyP3kROKFgj2md6wDQwZX5DhKvZONQlzp2gxCRJeiNJsphHP%2F4aqbIsY%2FB%2FRVWzCJOqb5PZAHnrhdvT9XfMSqaCTxUwlhlSMX0Be5AUw14E29W0TDGDRCz6vTOxzp2LorLQZaahkfu%2BFqDnUGTxCGXAon4jAXpI6T8zSih52oXwnUT5oBgB1usQm8sBuP%2FqAGQdgIBs4FP7NKyanrGWoUC%2F63fZNEk5HDAm7H2d%2BEwHfDuHDtfVfR1d3J5DwtgQhX%2Bg6%2Bq1AtHbvyNS3H4D2n9kehXDJPS6hOMFgkE11q6fn%2BdEofdaeoxTPRqL0r%2BpEg7cn90F8ZrML9lGtaxJEQVXUc0BmjfzFTBhhB7FgsoXG7OyrGebSlEwShUHKHBY3da0Ay1A7UkA5QZDDdVP9htGicw7ORkXS2kO0bjDU%2FDn8CD8N0R80PZB0emosY7g%2FWn4e5GwdU40Y%2BFsMhfBpgSz9GoT2EK68%2Fv1LMi1UVvbL%2FV51QrLydPT58CysvPwIkNF%2BmkHZWgMVm4ROb6sXRIpJn2SwxMqyuoPjh42nLNhD5hkZWkTkhdqERJoM%2FFPiYiMBMoWr0IjCW9MTEBjqkAb8NDnS0k3DRi%2BSrM6pvcOaSRpm%2FFaPlXojXBaCiljEi8tg0qQ%2F%2FvMWAluuQJJZmu4r4uRnQ9YLIVwR48scRkyedRyYs7UrCKbKrPTgCMnJTrUveFHNAJJmKixHl6qd3iU7qmucebE8%2B2Q3PF8Edg1aLaWnt2gM3xlDXPN0bu0GY5TMykUxFsdAfMwm7JwUxy8d74osuCzTWkk7N73ljmpjZLSpu&X-Amz-Signature=3783a84ba83e3da815162f218a641bf47c18fb8afa2715cbcc83a19ac33a795d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUX42BF7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCb60YnSm9IqMmsExrsFXCZizpPsOuvsEUEGuwQQO3E%2FwIhALhFLHEt7Khi%2BINvJiIUMP65VQ43rROBN3LGHQvhBqdeKv8DCFAQABoMNjM3NDIzMTgzODA1IgxEFDkoJaagu5Fs8r4q3ANDj1YvHtCLoTbOUlS%2F%2BV6%2F%2BgJ0glfiXuK8FoKzRpCl4e4uuZjnyP3kROKFgj2md6wDQwZX5DhKvZONQlzp2gxCRJeiNJsphHP%2F4aqbIsY%2FB%2FRVWzCJOqb5PZAHnrhdvT9XfMSqaCTxUwlhlSMX0Be5AUw14E29W0TDGDRCz6vTOxzp2LorLQZaahkfu%2BFqDnUGTxCGXAon4jAXpI6T8zSih52oXwnUT5oBgB1usQm8sBuP%2FqAGQdgIBs4FP7NKyanrGWoUC%2F63fZNEk5HDAm7H2d%2BEwHfDuHDtfVfR1d3J5DwtgQhX%2Bg6%2Bq1AtHbvyNS3H4D2n9kehXDJPS6hOMFgkE11q6fn%2BdEofdaeoxTPRqL0r%2BpEg7cn90F8ZrML9lGtaxJEQVXUc0BmjfzFTBhhB7FgsoXG7OyrGebSlEwShUHKHBY3da0Ay1A7UkA5QZDDdVP9htGicw7ORkXS2kO0bjDU%2FDn8CD8N0R80PZB0emosY7g%2FWn4e5GwdU40Y%2BFsMhfBpgSz9GoT2EK68%2Fv1LMi1UVvbL%2FV51QrLydPT58CysvPwIkNF%2BmkHZWgMVm4ROb6sXRIpJn2SwxMqyuoPjh42nLNhD5hkZWkTkhdqERJoM%2FFPiYiMBMoWr0IjCW9MTEBjqkAb8NDnS0k3DRi%2BSrM6pvcOaSRpm%2FFaPlXojXBaCiljEi8tg0qQ%2F%2FvMWAluuQJJZmu4r4uRnQ9YLIVwR48scRkyedRyYs7UrCKbKrPTgCMnJTrUveFHNAJJmKixHl6qd3iU7qmucebE8%2B2Q3PF8Edg1aLaWnt2gM3xlDXPN0bu0GY5TMykUxFsdAfMwm7JwUxy8d74osuCzTWkk7N73ljmpjZLSpu&X-Amz-Signature=35afbbb661f398066d0dc4a3f9a76fb2734ea9a3a8bf6123a7b3335e5851d4ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUX42BF7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCb60YnSm9IqMmsExrsFXCZizpPsOuvsEUEGuwQQO3E%2FwIhALhFLHEt7Khi%2BINvJiIUMP65VQ43rROBN3LGHQvhBqdeKv8DCFAQABoMNjM3NDIzMTgzODA1IgxEFDkoJaagu5Fs8r4q3ANDj1YvHtCLoTbOUlS%2F%2BV6%2F%2BgJ0glfiXuK8FoKzRpCl4e4uuZjnyP3kROKFgj2md6wDQwZX5DhKvZONQlzp2gxCRJeiNJsphHP%2F4aqbIsY%2FB%2FRVWzCJOqb5PZAHnrhdvT9XfMSqaCTxUwlhlSMX0Be5AUw14E29W0TDGDRCz6vTOxzp2LorLQZaahkfu%2BFqDnUGTxCGXAon4jAXpI6T8zSih52oXwnUT5oBgB1usQm8sBuP%2FqAGQdgIBs4FP7NKyanrGWoUC%2F63fZNEk5HDAm7H2d%2BEwHfDuHDtfVfR1d3J5DwtgQhX%2Bg6%2Bq1AtHbvyNS3H4D2n9kehXDJPS6hOMFgkE11q6fn%2BdEofdaeoxTPRqL0r%2BpEg7cn90F8ZrML9lGtaxJEQVXUc0BmjfzFTBhhB7FgsoXG7OyrGebSlEwShUHKHBY3da0Ay1A7UkA5QZDDdVP9htGicw7ORkXS2kO0bjDU%2FDn8CD8N0R80PZB0emosY7g%2FWn4e5GwdU40Y%2BFsMhfBpgSz9GoT2EK68%2Fv1LMi1UVvbL%2FV51QrLydPT58CysvPwIkNF%2BmkHZWgMVm4ROb6sXRIpJn2SwxMqyuoPjh42nLNhD5hkZWkTkhdqERJoM%2FFPiYiMBMoWr0IjCW9MTEBjqkAb8NDnS0k3DRi%2BSrM6pvcOaSRpm%2FFaPlXojXBaCiljEi8tg0qQ%2F%2FvMWAluuQJJZmu4r4uRnQ9YLIVwR48scRkyedRyYs7UrCKbKrPTgCMnJTrUveFHNAJJmKixHl6qd3iU7qmucebE8%2B2Q3PF8Edg1aLaWnt2gM3xlDXPN0bu0GY5TMykUxFsdAfMwm7JwUxy8d74osuCzTWkk7N73ljmpjZLSpu&X-Amz-Signature=3deaeb261a7b669823c196506e9ac73885d1cd92b31706ddf51b50d84734703a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUX42BF7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCb60YnSm9IqMmsExrsFXCZizpPsOuvsEUEGuwQQO3E%2FwIhALhFLHEt7Khi%2BINvJiIUMP65VQ43rROBN3LGHQvhBqdeKv8DCFAQABoMNjM3NDIzMTgzODA1IgxEFDkoJaagu5Fs8r4q3ANDj1YvHtCLoTbOUlS%2F%2BV6%2F%2BgJ0glfiXuK8FoKzRpCl4e4uuZjnyP3kROKFgj2md6wDQwZX5DhKvZONQlzp2gxCRJeiNJsphHP%2F4aqbIsY%2FB%2FRVWzCJOqb5PZAHnrhdvT9XfMSqaCTxUwlhlSMX0Be5AUw14E29W0TDGDRCz6vTOxzp2LorLQZaahkfu%2BFqDnUGTxCGXAon4jAXpI6T8zSih52oXwnUT5oBgB1usQm8sBuP%2FqAGQdgIBs4FP7NKyanrGWoUC%2F63fZNEk5HDAm7H2d%2BEwHfDuHDtfVfR1d3J5DwtgQhX%2Bg6%2Bq1AtHbvyNS3H4D2n9kehXDJPS6hOMFgkE11q6fn%2BdEofdaeoxTPRqL0r%2BpEg7cn90F8ZrML9lGtaxJEQVXUc0BmjfzFTBhhB7FgsoXG7OyrGebSlEwShUHKHBY3da0Ay1A7UkA5QZDDdVP9htGicw7ORkXS2kO0bjDU%2FDn8CD8N0R80PZB0emosY7g%2FWn4e5GwdU40Y%2BFsMhfBpgSz9GoT2EK68%2Fv1LMi1UVvbL%2FV51QrLydPT58CysvPwIkNF%2BmkHZWgMVm4ROb6sXRIpJn2SwxMqyuoPjh42nLNhD5hkZWkTkhdqERJoM%2FFPiYiMBMoWr0IjCW9MTEBjqkAb8NDnS0k3DRi%2BSrM6pvcOaSRpm%2FFaPlXojXBaCiljEi8tg0qQ%2F%2FvMWAluuQJJZmu4r4uRnQ9YLIVwR48scRkyedRyYs7UrCKbKrPTgCMnJTrUveFHNAJJmKixHl6qd3iU7qmucebE8%2B2Q3PF8Edg1aLaWnt2gM3xlDXPN0bu0GY5TMykUxFsdAfMwm7JwUxy8d74osuCzTWkk7N73ljmpjZLSpu&X-Amz-Signature=e2a16fbec8f96c1034f3526d15249de4ee5b79d9063245cebf3394450a1b5d13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUX42BF7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCb60YnSm9IqMmsExrsFXCZizpPsOuvsEUEGuwQQO3E%2FwIhALhFLHEt7Khi%2BINvJiIUMP65VQ43rROBN3LGHQvhBqdeKv8DCFAQABoMNjM3NDIzMTgzODA1IgxEFDkoJaagu5Fs8r4q3ANDj1YvHtCLoTbOUlS%2F%2BV6%2F%2BgJ0glfiXuK8FoKzRpCl4e4uuZjnyP3kROKFgj2md6wDQwZX5DhKvZONQlzp2gxCRJeiNJsphHP%2F4aqbIsY%2FB%2FRVWzCJOqb5PZAHnrhdvT9XfMSqaCTxUwlhlSMX0Be5AUw14E29W0TDGDRCz6vTOxzp2LorLQZaahkfu%2BFqDnUGTxCGXAon4jAXpI6T8zSih52oXwnUT5oBgB1usQm8sBuP%2FqAGQdgIBs4FP7NKyanrGWoUC%2F63fZNEk5HDAm7H2d%2BEwHfDuHDtfVfR1d3J5DwtgQhX%2Bg6%2Bq1AtHbvyNS3H4D2n9kehXDJPS6hOMFgkE11q6fn%2BdEofdaeoxTPRqL0r%2BpEg7cn90F8ZrML9lGtaxJEQVXUc0BmjfzFTBhhB7FgsoXG7OyrGebSlEwShUHKHBY3da0Ay1A7UkA5QZDDdVP9htGicw7ORkXS2kO0bjDU%2FDn8CD8N0R80PZB0emosY7g%2FWn4e5GwdU40Y%2BFsMhfBpgSz9GoT2EK68%2Fv1LMi1UVvbL%2FV51QrLydPT58CysvPwIkNF%2BmkHZWgMVm4ROb6sXRIpJn2SwxMqyuoPjh42nLNhD5hkZWkTkhdqERJoM%2FFPiYiMBMoWr0IjCW9MTEBjqkAb8NDnS0k3DRi%2BSrM6pvcOaSRpm%2FFaPlXojXBaCiljEi8tg0qQ%2F%2FvMWAluuQJJZmu4r4uRnQ9YLIVwR48scRkyedRyYs7UrCKbKrPTgCMnJTrUveFHNAJJmKixHl6qd3iU7qmucebE8%2B2Q3PF8Edg1aLaWnt2gM3xlDXPN0bu0GY5TMykUxFsdAfMwm7JwUxy8d74osuCzTWkk7N73ljmpjZLSpu&X-Amz-Signature=d2b990edc2d5bb2527c9076507f1c70c3da14ea917617b09a665a3c2482a86a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUX42BF7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCb60YnSm9IqMmsExrsFXCZizpPsOuvsEUEGuwQQO3E%2FwIhALhFLHEt7Khi%2BINvJiIUMP65VQ43rROBN3LGHQvhBqdeKv8DCFAQABoMNjM3NDIzMTgzODA1IgxEFDkoJaagu5Fs8r4q3ANDj1YvHtCLoTbOUlS%2F%2BV6%2F%2BgJ0glfiXuK8FoKzRpCl4e4uuZjnyP3kROKFgj2md6wDQwZX5DhKvZONQlzp2gxCRJeiNJsphHP%2F4aqbIsY%2FB%2FRVWzCJOqb5PZAHnrhdvT9XfMSqaCTxUwlhlSMX0Be5AUw14E29W0TDGDRCz6vTOxzp2LorLQZaahkfu%2BFqDnUGTxCGXAon4jAXpI6T8zSih52oXwnUT5oBgB1usQm8sBuP%2FqAGQdgIBs4FP7NKyanrGWoUC%2F63fZNEk5HDAm7H2d%2BEwHfDuHDtfVfR1d3J5DwtgQhX%2Bg6%2Bq1AtHbvyNS3H4D2n9kehXDJPS6hOMFgkE11q6fn%2BdEofdaeoxTPRqL0r%2BpEg7cn90F8ZrML9lGtaxJEQVXUc0BmjfzFTBhhB7FgsoXG7OyrGebSlEwShUHKHBY3da0Ay1A7UkA5QZDDdVP9htGicw7ORkXS2kO0bjDU%2FDn8CD8N0R80PZB0emosY7g%2FWn4e5GwdU40Y%2BFsMhfBpgSz9GoT2EK68%2Fv1LMi1UVvbL%2FV51QrLydPT58CysvPwIkNF%2BmkHZWgMVm4ROb6sXRIpJn2SwxMqyuoPjh42nLNhD5hkZWkTkhdqERJoM%2FFPiYiMBMoWr0IjCW9MTEBjqkAb8NDnS0k3DRi%2BSrM6pvcOaSRpm%2FFaPlXojXBaCiljEi8tg0qQ%2F%2FvMWAluuQJJZmu4r4uRnQ9YLIVwR48scRkyedRyYs7UrCKbKrPTgCMnJTrUveFHNAJJmKixHl6qd3iU7qmucebE8%2B2Q3PF8Edg1aLaWnt2gM3xlDXPN0bu0GY5TMykUxFsdAfMwm7JwUxy8d74osuCzTWkk7N73ljmpjZLSpu&X-Amz-Signature=29f0e2b69361a3403f4357ddddb858f73e53cee24b8a2e5d3d1ddbe90f85240d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUX42BF7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCb60YnSm9IqMmsExrsFXCZizpPsOuvsEUEGuwQQO3E%2FwIhALhFLHEt7Khi%2BINvJiIUMP65VQ43rROBN3LGHQvhBqdeKv8DCFAQABoMNjM3NDIzMTgzODA1IgxEFDkoJaagu5Fs8r4q3ANDj1YvHtCLoTbOUlS%2F%2BV6%2F%2BgJ0glfiXuK8FoKzRpCl4e4uuZjnyP3kROKFgj2md6wDQwZX5DhKvZONQlzp2gxCRJeiNJsphHP%2F4aqbIsY%2FB%2FRVWzCJOqb5PZAHnrhdvT9XfMSqaCTxUwlhlSMX0Be5AUw14E29W0TDGDRCz6vTOxzp2LorLQZaahkfu%2BFqDnUGTxCGXAon4jAXpI6T8zSih52oXwnUT5oBgB1usQm8sBuP%2FqAGQdgIBs4FP7NKyanrGWoUC%2F63fZNEk5HDAm7H2d%2BEwHfDuHDtfVfR1d3J5DwtgQhX%2Bg6%2Bq1AtHbvyNS3H4D2n9kehXDJPS6hOMFgkE11q6fn%2BdEofdaeoxTPRqL0r%2BpEg7cn90F8ZrML9lGtaxJEQVXUc0BmjfzFTBhhB7FgsoXG7OyrGebSlEwShUHKHBY3da0Ay1A7UkA5QZDDdVP9htGicw7ORkXS2kO0bjDU%2FDn8CD8N0R80PZB0emosY7g%2FWn4e5GwdU40Y%2BFsMhfBpgSz9GoT2EK68%2Fv1LMi1UVvbL%2FV51QrLydPT58CysvPwIkNF%2BmkHZWgMVm4ROb6sXRIpJn2SwxMqyuoPjh42nLNhD5hkZWkTkhdqERJoM%2FFPiYiMBMoWr0IjCW9MTEBjqkAb8NDnS0k3DRi%2BSrM6pvcOaSRpm%2FFaPlXojXBaCiljEi8tg0qQ%2F%2FvMWAluuQJJZmu4r4uRnQ9YLIVwR48scRkyedRyYs7UrCKbKrPTgCMnJTrUveFHNAJJmKixHl6qd3iU7qmucebE8%2B2Q3PF8Edg1aLaWnt2gM3xlDXPN0bu0GY5TMykUxFsdAfMwm7JwUxy8d74osuCzTWkk7N73ljmpjZLSpu&X-Amz-Signature=2a556c37e1d4e8bccf8a33ee8f6fc83396d7662e318c02643bc2fcf425750785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWI46XBK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDRrpEH%2B5kpvL%2BX8My90PwjIDitRd1GWFKoIZKb5izB1gIgMA3PpjffeC4yzAksz5Svmvmiu81Jgy%2BtiBuKKMIr364q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDGfNvIPOs4%2FD9UOpxircA8s%2FMWX3rOJhwjXd3WGrt51jgt%2FH33YHlcXFCYGrfH08HioLveB0KhLo8Imp4WZnfTGTjUM4QaLwqNTuTSoEyEUbinBjfStgrlau4MhaGojqn7OzkjeUqff4bxe3odBWfAkPtqFABf3TWKXPJmr3gfo7DisSCiPxOjj0tn%2FVi54nLeyHFn4hwnDePQ7QsjWj7ieSht2Fc9UnfyfHI1cHj02o4dW0gn6FDkZK0PwyCTodjv%2BQ9QHnf9zgOYNmUMiQGS%2B4LiJt%2Fqzzr8Fy0oGnzGcrHc1G1l9R7oCTPE3hHpsjHdV0uhakYcceikIkzfy8rOaSfOlV%2FuBSgwLUoHHCwzVUABmjR88qxfpstgDHgqMV4vi5N%2Faw%2B5Lylztc3U5MF3tsiQXt%2BeoS4b72bWwGYfzkv8VRoxHhOlPfoWvb2Yc62uU3zIf8S9wYDk9sZexRPYkBAVgXAhqqJe%2FXhPxSwsGM%2BrKKayNiUgfyZAMHQEPdGZhSxkvyD2%2Fzj3YxCeZ2OX3UUxPxtPbLhCOmZxgh5IqbYe8XP2ayVYmSAPCQTv6b2YCK0%2FS7mOffMGi2I68F96NGueA2KbBrr8j9n1zsweDQG9Tk%2F8jghAHcq5Cypj1TKNuUx6Qh%2BKMik7pWMI30xMQGOqUBlOrDhAONi7uakRmne%2FUcGW4xB5gjXEOi4dEI1NCfNb5mkncwXLHKURljKhWhroTuR5k4s79I%2FzSmU8ex6Rl1bhpffqRSUe7%2BkEjNIWWxvgcVOEkGqEKdlgaaFBNOFvG%2FMXi40VIfptFgK6RQNVbZR%2B6I5%2FWvdt92lHhHXc32Yba6ZdsGbyaEIFgzIL%2BGDgYBbpI0WWp%2Bh9gGRpD9SOXmLdbTYGg3&X-Amz-Signature=1cdddb81a84829f228c432ebfa0b074b3fe4a4d1265700b9e35fcb02bde373d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR7UKNNJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCrcxfDimdrRubKRvrqAL2fxuM95CYx0c55ouxW8tY4TAIhAPCokkBKQL88Rc6dfWVIFKhKqTWekc7kACvUDaIc8bEgKv8DCFAQABoMNjM3NDIzMTgzODA1IgwmZ44a8sbv5GV3Itkq3AOPEm0jYq7C8aglAOR1vnu7Rw7Y5%2Bm67X0TpKvCLfx3y38BIXd7ttz6LZygl57M%2FkidWNZlhb1edqTgEen8VdeoxDBCH%2B%2FrEeVCGMR97%2FWtbSzh8BXC2OPGzUD5yWbDPbj8xyHSKWT0aWz%2Fvi07AugGtTwuJVng06Wf0qKp78PJSai50b7dMMDrN3OMeBx3AUOVvln9%2BF0HEHA%2BfFmJGJToE4XOu%2FMV1GKouXZc%2BjJg1p6CUj53YM2zByzJqpoB6LaI4QBleoL1ZFqAMnM6WG8Jtdp%2F3mYzF45LG%2B1mWkGF8GfwVsrwxq6ihWkXUR%2Bd5xeoYiGgn4ww6hkax2J13o3DE1jcrLNnr9mqulmX47ZAogVTjckOaNwKjArdff1l92c5JBXcXLrgLaNs80jNlEzw1keIz4WCs0m663pPAk%2BiKwH7kzYEmyw9QJ56HoimHF4kNzOp6u8BnX6YvHtVE4f2hqD5ZNkwpEaixygYsZ4SBJWy%2FIc2dRWipFobnY8g%2FaRGMW7AyrgNDKOh6rec51ybD1oFMbATd0AZmsfslzyBUL1V%2FHk2i1%2FT0cliN8tGouKt%2FOcWXD7V%2Fjh9OrPIN3hGRSRalu71Q1Ko2RMlVjlRQE0cLPuCOKUrID06njDi9MTEBjqkAejB6%2FlZE%2FCppouruHLeAPxQrqJHCoUAviakUerYIGUJZ4S4RHkjWj%2FWxFGhD%2BfDaR5sBL0r615FrHQeKa8ZlqNjOvqKUVUh8ZzBkefE7Kr2g9SulgtmF0UOcEzHLR%2B4C0I8jo0jAwdm%2BlANllfmtD7Tpu1oxKRGwSmdqRWPmJdTJQuoZFv9dBehAPf0t%2BIciFm4ZcbOYGoVyUxFnlvG%2BnXT6eWT&X-Amz-Signature=6ad4cc044ff6b434f9be340cc4651831a91889c4723feed2994d04c59e2116a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RQSGNEZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHqmoyxfAqUeK1%2FrPy3tNrfXB3tce72J3WSvG5P2d7OwAiEAzkKX%2Fgwm6vhLd8zvltSJLJwrzpyPfu93Wgrw2TKI1y4q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDD%2FQn5LhSMFoeuDPPSrcA0vE9t4O41B1Xn5S0TmsFcCpri6814fz6xOhQPXxlnANEEr5zhnFSBrrsIbEYq974npcmg%2BWU3Cu6NU%2BKlehO3SS22LvVMouHQ%2FpWxFhohngwOztUxufcKw8S2LOHGwRJqfJWsCNSW7usTVuPUij89ew1WEYWiQXV%2BoP0oPzhGdUh8cUaIRzVvf9iSSSQDKWqTVYIoVA02iIqz4cfUi3NKS1qrfgiST7nUAKk0uzhhgD4j5hKreCztuTfTS%2FVaanjwA6WziccdL%2B880YRBl00z6jNlub3HImiU4%2B6R7KSc3%2B3xMl6XqyHjccZjX%2BYH999ug8599RgnMScjgQIZGL1J5oLVON03FxznCp%2FaosW%2FYqP5cR4zYbiLpzdGuSbIfVKsd5VIWN4RAKLvRsjLI1v1%2FF1NatNuwIlmRMNI8mRBBLDK898VNutlU7zA8umguSRfh6cGAYZbD8r6OIv3eIyW8tLH%2BQkWeKhHY35Tm1itjBcWE9YCYBYoVKKWrmy7HJ60ImFixr4cRhHgHSP7Kis0Q1ifmXFOXfCmn8Fre397SzkG71H%2F0sDZa293ToDPSAIbU9%2FXfyQTbsn8jHt8bcOgxWIISk3OUivYYnVCezQ%2FCyNV%2BcsMceNOChNRDyMJ70xMQGOqUB1O7aQMTeXLZMcOYuApmNrI5Oma32m7MtM3LTySkbgQOTllmCogeYnRzpyX%2B14vGrkcgRyFubQ6EIR%2F%2F7%2BuCL3gdPedJiaZxImSVyNhKEx%2Fb0VKxQq28y5bs%2FQ7UnyuXWS8LyFcq6yAnb%2BWZs4bDdNfPNHhWCQRbw9%2Bkd2%2Bi7kcU46%2F3c%2Bi9GXELPZREsSAuGyeUwh%2F6gcDtxdqALrFVhozpYSEMJ&X-Amz-Signature=daaf219a442de8d2635b1776825b8a8ed84785d1fd79e7c3558aa15c0b9c08d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUX42BF7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCb60YnSm9IqMmsExrsFXCZizpPsOuvsEUEGuwQQO3E%2FwIhALhFLHEt7Khi%2BINvJiIUMP65VQ43rROBN3LGHQvhBqdeKv8DCFAQABoMNjM3NDIzMTgzODA1IgxEFDkoJaagu5Fs8r4q3ANDj1YvHtCLoTbOUlS%2F%2BV6%2F%2BgJ0glfiXuK8FoKzRpCl4e4uuZjnyP3kROKFgj2md6wDQwZX5DhKvZONQlzp2gxCRJeiNJsphHP%2F4aqbIsY%2FB%2FRVWzCJOqb5PZAHnrhdvT9XfMSqaCTxUwlhlSMX0Be5AUw14E29W0TDGDRCz6vTOxzp2LorLQZaahkfu%2BFqDnUGTxCGXAon4jAXpI6T8zSih52oXwnUT5oBgB1usQm8sBuP%2FqAGQdgIBs4FP7NKyanrGWoUC%2F63fZNEk5HDAm7H2d%2BEwHfDuHDtfVfR1d3J5DwtgQhX%2Bg6%2Bq1AtHbvyNS3H4D2n9kehXDJPS6hOMFgkE11q6fn%2BdEofdaeoxTPRqL0r%2BpEg7cn90F8ZrML9lGtaxJEQVXUc0BmjfzFTBhhB7FgsoXG7OyrGebSlEwShUHKHBY3da0Ay1A7UkA5QZDDdVP9htGicw7ORkXS2kO0bjDU%2FDn8CD8N0R80PZB0emosY7g%2FWn4e5GwdU40Y%2BFsMhfBpgSz9GoT2EK68%2Fv1LMi1UVvbL%2FV51QrLydPT58CysvPwIkNF%2BmkHZWgMVm4ROb6sXRIpJn2SwxMqyuoPjh42nLNhD5hkZWkTkhdqERJoM%2FFPiYiMBMoWr0IjCW9MTEBjqkAb8NDnS0k3DRi%2BSrM6pvcOaSRpm%2FFaPlXojXBaCiljEi8tg0qQ%2F%2FvMWAluuQJJZmu4r4uRnQ9YLIVwR48scRkyedRyYs7UrCKbKrPTgCMnJTrUveFHNAJJmKixHl6qd3iU7qmucebE8%2B2Q3PF8Edg1aLaWnt2gM3xlDXPN0bu0GY5TMykUxFsdAfMwm7JwUxy8d74osuCzTWkk7N73ljmpjZLSpu&X-Amz-Signature=e870a32f904d0a7e718e3541d25d63b5b884a662852f40811d5f882b77bce544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEZORGVM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDlHp6BNYwLzc1qr3HKwm9qe92nnlAYGByLd7Ep%2F1EIggIgJrwuWH3O7CLeyj7rvv3TWxt%2FXUkIVJfJkDlQT2n0maoq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDCg8gYSJxdyzJzXPcyrcAw12A5EcvRhjnjS%2F9JOXkRFN1pcnaTzTalkkBXlt5WxRViRdSmdRIflvSaZ9PF2%2FF33XE41Iduk9trk99hshE9TIBArOmEZKIk%2BcsfDf6WkSWlfQ1oI4q4eHtwNwsu6m4qpkU3s2fE2570s7BvvDq8iRZI%2BNhMyUQ2897A8O6dayb0Pbvox5Clb2g8xuviB3x%2Bh001bp8O1RoaAbScTSzA3%2FFd9gykEoK7%2F2kplMGnTgRp%2B0zlNGHo2AP74QAZsheuzEV90ixTqRlfmUUYUrXN0oLFpw%2BeQF0MD%2BC3wu6qyOErHwiy3MQmi4MLnDzULEXbT6gNYTMkUWk02e0I%2FvRDrMzHkFXDTjviNyhtQ9bSFooDrnf4jgZR9vPwpMMp6ZnrAM6c8MN%2B05jzWbRAx%2B4GV3pG7ichHLA4b%2BhDIa8cPMWZHsXVdZCFyN0QYnCeGr9vbEUjjBDStgj1W4KLoAPsA3y0BT3I9mOIvqatenPruPpd0Cy0T1G9L1RDxpBXWSakjp3s%2FY7hTzJczvLXvdUDS9qBndEeOECNHd0Dj3WiHAkTXycUCfJk1vn8Khdg0iuiG6aEh1MXnQpdrMETn28uJkJW4OXVJRVs7%2BuXC74GzOlVU4edDJZJTyr7zmMPfzxMQGOqUBdjNuOXZY0YPs5Rmq5nLflqkDpajJDyOev0pslHVV%2B4PGGt7Kw7GBDtFPZ4rGKj4ollfT7n2%2BmujoLU5kc7gNfB9ZWwxfmIGbS8XhBbe4Xes1fjCXLtdWCn6scBUFw1hfZXItk1cVN8shjQC9nF%2FLjcT3%2BP5VzMTB77vhuIm%2FGVWOfqlvSjtHA1RRm1%2B1Tww3ViEty6VFb%2Fx%2FT%2Bi%2BZTfjqht%2F6hkY&X-Amz-Signature=00c308d767b45b98a74749759fbf59957c87ac9f44572e1ac3db423cea3419aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUX42BF7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCb60YnSm9IqMmsExrsFXCZizpPsOuvsEUEGuwQQO3E%2FwIhALhFLHEt7Khi%2BINvJiIUMP65VQ43rROBN3LGHQvhBqdeKv8DCFAQABoMNjM3NDIzMTgzODA1IgxEFDkoJaagu5Fs8r4q3ANDj1YvHtCLoTbOUlS%2F%2BV6%2F%2BgJ0glfiXuK8FoKzRpCl4e4uuZjnyP3kROKFgj2md6wDQwZX5DhKvZONQlzp2gxCRJeiNJsphHP%2F4aqbIsY%2FB%2FRVWzCJOqb5PZAHnrhdvT9XfMSqaCTxUwlhlSMX0Be5AUw14E29W0TDGDRCz6vTOxzp2LorLQZaahkfu%2BFqDnUGTxCGXAon4jAXpI6T8zSih52oXwnUT5oBgB1usQm8sBuP%2FqAGQdgIBs4FP7NKyanrGWoUC%2F63fZNEk5HDAm7H2d%2BEwHfDuHDtfVfR1d3J5DwtgQhX%2Bg6%2Bq1AtHbvyNS3H4D2n9kehXDJPS6hOMFgkE11q6fn%2BdEofdaeoxTPRqL0r%2BpEg7cn90F8ZrML9lGtaxJEQVXUc0BmjfzFTBhhB7FgsoXG7OyrGebSlEwShUHKHBY3da0Ay1A7UkA5QZDDdVP9htGicw7ORkXS2kO0bjDU%2FDn8CD8N0R80PZB0emosY7g%2FWn4e5GwdU40Y%2BFsMhfBpgSz9GoT2EK68%2Fv1LMi1UVvbL%2FV51QrLydPT58CysvPwIkNF%2BmkHZWgMVm4ROb6sXRIpJn2SwxMqyuoPjh42nLNhD5hkZWkTkhdqERJoM%2FFPiYiMBMoWr0IjCW9MTEBjqkAb8NDnS0k3DRi%2BSrM6pvcOaSRpm%2FFaPlXojXBaCiljEi8tg0qQ%2F%2FvMWAluuQJJZmu4r4uRnQ9YLIVwR48scRkyedRyYs7UrCKbKrPTgCMnJTrUveFHNAJJmKixHl6qd3iU7qmucebE8%2B2Q3PF8Edg1aLaWnt2gM3xlDXPN0bu0GY5TMykUxFsdAfMwm7JwUxy8d74osuCzTWkk7N73ljmpjZLSpu&X-Amz-Signature=fcb8d4b72ef4ca9ca8016b623fee2e7d9ccc52e0b26cd1d3ce706ff9c1179683&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGJ4FKIA%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIFhpmt%2FCZcXho1tZ%2FQjtT%2FBx%2BDOhQ1sB%2BoL8hus9QYUiAiA5HkSUw6bVt0CPOpAtIrbfYfVWpOmBH02WuCrFSpVFiSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMVcpA%2F8PAKGNCWRdOKtwDajq2Xj5TkAHvuvBabKr2UgfHqQCeS09U%2BSYA7w3dZ6HjLT%2BhcZ2W1M6z%2FsPsxCO3UB8Ubrf2KX9vE%2FY6W9l2wnbO%2BqRUhJMds%2BPz495IHL0o36JKjMm8R1LU%2F3sXTB1csGTt%2FLScIzsz53sp8lA39qJFOxVEoZfL8RCzCP29ZcFc5WOr1hpXOfdbEmikZA1p0rVjyiaSdeQwj8tVAIQ9QuemKoki9tA0fZcS1ow4DpR5yBD3Ijy07vNulVYm2dYlOu3F57ogWUNOK%2BFgwJlC2irv6V0ed9ErdY9YB3UQX7TuCKsoYZQ16tC1LRuWJ3tYABoGxXVyibolqGJUgZriPo7y5BjTwhiS62oRsoTp8BWv1eaAECZC2K0PVCdrn57LyMcjFZSIx798jaoNJbBYKIAfcEbhHYXVghORBPzQBIF1fsFlGeyh3MJhPPRzQ4mWEePMCcAyu6yBKe3C%2BgUiZo7WvvOPLgCs9tozecWW1cCyAadsWOn3MtJURKpEKzHbSwF6pjznF71cRJbDWlUuKU4vmOTOyyKQ751hms6LgvMbFWyDwNpIYO%2FkwYj9ji6q%2FBfM8KdntUsLacpy01ne8kNFUUp6a545CAbPxJo8BjWk3ZUR1LuVNYl03QgwgPTExAY6pgGDuR1HykK0wdt66Mozr3gg6IAnEtkey82o3p89%2B4UxkZYEiGbDU2dq9LsF1zA0S5J5DC3BfgkALvmuiV30iKl%2Fyd205hXsnVFTL6ZvWct7XWNJEe60IFoB%2FSzp25mDyLF0zOcmqk9TiMr0KnZ63bQI1uBBymaNi4JHBoYmEJwNZ9C7f%2BJLSoTOxJeee8Oz5ElHdfXalncfu1t%2BwHjUaF%2B1tfQgMo%2BA&X-Amz-Signature=41167a1181b07c5329c425ceb4d5e873e42af8a40ac9fd5118b317f86900e146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUX42BF7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCb60YnSm9IqMmsExrsFXCZizpPsOuvsEUEGuwQQO3E%2FwIhALhFLHEt7Khi%2BINvJiIUMP65VQ43rROBN3LGHQvhBqdeKv8DCFAQABoMNjM3NDIzMTgzODA1IgxEFDkoJaagu5Fs8r4q3ANDj1YvHtCLoTbOUlS%2F%2BV6%2F%2BgJ0glfiXuK8FoKzRpCl4e4uuZjnyP3kROKFgj2md6wDQwZX5DhKvZONQlzp2gxCRJeiNJsphHP%2F4aqbIsY%2FB%2FRVWzCJOqb5PZAHnrhdvT9XfMSqaCTxUwlhlSMX0Be5AUw14E29W0TDGDRCz6vTOxzp2LorLQZaahkfu%2BFqDnUGTxCGXAon4jAXpI6T8zSih52oXwnUT5oBgB1usQm8sBuP%2FqAGQdgIBs4FP7NKyanrGWoUC%2F63fZNEk5HDAm7H2d%2BEwHfDuHDtfVfR1d3J5DwtgQhX%2Bg6%2Bq1AtHbvyNS3H4D2n9kehXDJPS6hOMFgkE11q6fn%2BdEofdaeoxTPRqL0r%2BpEg7cn90F8ZrML9lGtaxJEQVXUc0BmjfzFTBhhB7FgsoXG7OyrGebSlEwShUHKHBY3da0Ay1A7UkA5QZDDdVP9htGicw7ORkXS2kO0bjDU%2FDn8CD8N0R80PZB0emosY7g%2FWn4e5GwdU40Y%2BFsMhfBpgSz9GoT2EK68%2Fv1LMi1UVvbL%2FV51QrLydPT58CysvPwIkNF%2BmkHZWgMVm4ROb6sXRIpJn2SwxMqyuoPjh42nLNhD5hkZWkTkhdqERJoM%2FFPiYiMBMoWr0IjCW9MTEBjqkAb8NDnS0k3DRi%2BSrM6pvcOaSRpm%2FFaPlXojXBaCiljEi8tg0qQ%2F%2FvMWAluuQJJZmu4r4uRnQ9YLIVwR48scRkyedRyYs7UrCKbKrPTgCMnJTrUveFHNAJJmKixHl6qd3iU7qmucebE8%2B2Q3PF8Edg1aLaWnt2gM3xlDXPN0bu0GY5TMykUxFsdAfMwm7JwUxy8d74osuCzTWkk7N73ljmpjZLSpu&X-Amz-Signature=54eeb420d9703ff551d842a0537fce9c880ae367dab87897b334dab10b165320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHKOW2QF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIGZlvx8iaUUxHnVmDvi4eTqG2pLvCi6cqGzg0SXnsNa0AiAr2COEIljdQ3y4D8kazLUnys9qAM6TxWa2IP9NGe1p9ir%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMpkGaNJEuWhrUZ7sqKtwDAKDW%2BtQk4m6mlBiJDyxGC5pDskcw5K9iguTlUdxHQ4QuvPFxg9YG%2BNWA30nwVGVE5a7kBugmUuEQ05TeSX3gD4cSm2EJfIzP8naxQN%2F0NedIjIr7HePnTJG%2FrAUnOMY2wUnSe4aBkjaz1SNYEMAriOboqF7is1synLLsi1jFlPgI4y5jhL2gAr0k2R95zUw8eARPx5efaG9MEiw34%2BF%2FzoqPZGvrB%2B2EXI%2B5sWOqQ1DBffwLD7zmt72slj5wXEe0JTqRwJ4wYBt9y8gpwriykAnh9y4tQ0gpCsBrnSWnsUgjcCWGmCHExQlg%2B7%2B7rKRTK017%2BhNDAuCo3%2BmuN0niIjD7PGp%2F%2BaCbuu2bxJy2IvlP66mDOeYjUlyoYEnqS2kuN9fA9IQYWCap1Q2w0jwJH%2F755IAZMfTsrHxBa1RhpwKnMDSn70TaM4cLLjKbZ%2FbNlk8FsCey9OStcF17R7AIbTbPR14luPxuIHtmEtKNIlTz2V%2B6zOVzbkLtinYo4DCI93MrsiSMvR4sc1uq%2FAmO2%2Bp6EkmnN8qK2ODZH21VyelgMb0k4yq9JmkdY%2FGZZUtDS7ojTJeUHmzoKoskaPRtFHY24qqbpLpq%2FRYF7xAav474myDbbkl5QbZ9i7Iw7PPExAY6pgG2EIJoJwTbC9KlTpxsfz38mP0tgQTccBhmVtnTmQIZFa4tx80zqCoF9%2FIV3SowxeJpTKCp6m8GuUj2a8rIwUziEEZz982oCk9MoR2OOoT1NbtQjSWhgNdVoJ3yToVnLf%2BWzr3xD6TQSpVqYABUnbcuStqQKXSi7R9Y49iVhIMf%2FUXagjpzCIECgi4zwsoBG77aQIj34x3QFcfiBPSZ1zftEU1YH2rx&X-Amz-Signature=ae3d01c10f4d05dfe3bd4fe72dfcd3c8ffd6a15b75b10081815e39f4698b153b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUX42BF7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCb60YnSm9IqMmsExrsFXCZizpPsOuvsEUEGuwQQO3E%2FwIhALhFLHEt7Khi%2BINvJiIUMP65VQ43rROBN3LGHQvhBqdeKv8DCFAQABoMNjM3NDIzMTgzODA1IgxEFDkoJaagu5Fs8r4q3ANDj1YvHtCLoTbOUlS%2F%2BV6%2F%2BgJ0glfiXuK8FoKzRpCl4e4uuZjnyP3kROKFgj2md6wDQwZX5DhKvZONQlzp2gxCRJeiNJsphHP%2F4aqbIsY%2FB%2FRVWzCJOqb5PZAHnrhdvT9XfMSqaCTxUwlhlSMX0Be5AUw14E29W0TDGDRCz6vTOxzp2LorLQZaahkfu%2BFqDnUGTxCGXAon4jAXpI6T8zSih52oXwnUT5oBgB1usQm8sBuP%2FqAGQdgIBs4FP7NKyanrGWoUC%2F63fZNEk5HDAm7H2d%2BEwHfDuHDtfVfR1d3J5DwtgQhX%2Bg6%2Bq1AtHbvyNS3H4D2n9kehXDJPS6hOMFgkE11q6fn%2BdEofdaeoxTPRqL0r%2BpEg7cn90F8ZrML9lGtaxJEQVXUc0BmjfzFTBhhB7FgsoXG7OyrGebSlEwShUHKHBY3da0Ay1A7UkA5QZDDdVP9htGicw7ORkXS2kO0bjDU%2FDn8CD8N0R80PZB0emosY7g%2FWn4e5GwdU40Y%2BFsMhfBpgSz9GoT2EK68%2Fv1LMi1UVvbL%2FV51QrLydPT58CysvPwIkNF%2BmkHZWgMVm4ROb6sXRIpJn2SwxMqyuoPjh42nLNhD5hkZWkTkhdqERJoM%2FFPiYiMBMoWr0IjCW9MTEBjqkAb8NDnS0k3DRi%2BSrM6pvcOaSRpm%2FFaPlXojXBaCiljEi8tg0qQ%2F%2FvMWAluuQJJZmu4r4uRnQ9YLIVwR48scRkyedRyYs7UrCKbKrPTgCMnJTrUveFHNAJJmKixHl6qd3iU7qmucebE8%2B2Q3PF8Edg1aLaWnt2gM3xlDXPN0bu0GY5TMykUxFsdAfMwm7JwUxy8d74osuCzTWkk7N73ljmpjZLSpu&X-Amz-Signature=eab862efbaa495ef1aed145a5670ee0aefef5274d30e86e8d89394a99416afa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A4QB74G%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDIiHo3bSNdjwU30ktAmFClaxBYH7WcX5roKGDbk5ycFAiEA3cOQju7H5E2pbJf9W02yIGvHaybhqq56A%2FEBgjEUGq4q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDO46JbBCUNTzy%2B2asircAzMs2uiL2GDe%2BRd1wcSGIT%2BTZj%2By7RfxVYtLaFTyHNmMpQUwj5eBoBuSYtH%2BAam6V8Uf1vSR9A0XbLi5K6deQ4vDx9l53QULpcPz5%2Fd81so8%2B3mS1pEdXkoXvWwMtEQjM3qLIEq1rgDP0VO6x7FTrBrf%2BAWTezyPn11aNssQ2cnXmAW20utvrmiVFV1L8g4Jf50UbPLKBsTDIU93m%2Bc2yonwFWIqjJ%2FWIpTCQK1m1CnYK5ugDl5NATWIvcGhS3UEtisXHQJ1te%2BopgmkhCiujpT0J5n7ETl%2FHCJwBzwtmqOXt9JN5Q3ZtzYVsQXrzz38vNqLxsc1jHPvxBt1LkwFJeYrh%2BzRG1GufLnBaABA%2F0qR32jLoeQKpej3YWAuOkaCxOf1s6jjokaM9qVAGOxCwW7BmC7fDYR7BaiaDGpC2MNTGd6oF8IpNkq%2BXDtfn%2BtsB%2BwwleZW9lNAwk70AG24VqyPn94zk2SqkScXcln6Ucnfq3npAXeQTaeFG9B5%2B4GueqjdDgGNWCR0%2Fn8ZZ%2BI%2BKeEhtfeltb%2FiLCZNO%2Bh50z7ZpR9vy1Y%2F9AcRFzdZlTrqaXT7vVapNAvqVoZaGRJ7gtvwC2tU3qMBaVv%2FBPo9dzxodC7OE2WVu02hKv%2BSMIL0xMQGOqUB5AvW3GLjPxf67vyv0gKx2%2FJ0uDqNlz3iqKD8FNKnK%2FErHRYgU0FavbK7yojbhEb9ZoVuh%2FJZsy3rFRgqaBX%2BZt4RnKEx%2Bq8ruYhtaz2LTQS1LNksPXZSzoSgt64GwxqFOnKB5fgUy%2F0N7lPsDz%2BPyLH2RtHi%2Fe3u3KHIShTRigVabhe2S5FJhc6LpyJa%2B%2FIYPCZO5rxpi2v7%2FEShUWXOj0Tcs1Ne&X-Amz-Signature=f5bacd5df1f3061c5f91fa6e3903b440df10514050e3407426ae2ac6164e7081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IQBWJRX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDx9Tg3PI4L7z3dKWmsBDTkKbQ%2FL%2B5OTWJvHCDs83LhmAIgTQYk9Q4kCWAZ2EEPgc61CDU8v36pELEphYec%2FHTvAVMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMZ8LR9XaAZ0X%2ByrsircA6g5RuKWmIA2FvKke1WA8VDsXS9O20m%2BXrRl0QCqwTJ%2BIuCT4xGQKdAuWLBsnKSc8vY6kA0mYQTGNBHqW3j3GZeVlnBmiNWmcw6ZNHaoyyehi6HIQmvJlJroBofv9J2Gjv%2BVwKoJ9qfSM2QeGa206Wtpwp%2FEjm1aSlXVjjWvrO5nSDx%2FyWhYynodebRQytA%2FXjgExlw96azIGa1xXTnGccEiLdbkBdwDVsyshOidFlsIcawlMh6DaCPFuYJtY44y%2BePS4IFc%2BzdvXQdYxMIF16XHexaBRxFhNfGeZjEGHBdzPCpSJWT6SpUrPxK1l219HpQAJUv21n4PvjdpViCeMGWwyMA5pW04I1crr06RxOGDVX%2FkPUCMw0XC%2FydVrE8iY73Dikt%2FtbAg0KldTUAXU4LUa%2FryDYbkF2gUdvg3XmK8xxpyouNJiHN3DVr8kYibZyQONfv8jyNWUKO0489sjGtpIyBHEquMPDzsxlUbO4yQJ1G9pquktvHtcicgxawNCc8CpjTuD09bd9v3Kcui8NsevQoPbxaw%2Fpolfh2dvMoPrgjYCZV2eUQhm%2FqBmT8Unk5%2BQa7lswmRcBVERSDaPi07nob0iH7aDxgBa%2F5h1kaYaJAAfUY4Q2xY2f1QMKr5xMQGOqUBfVhjxeh0yBnbkRAC6jx3N8%2Bw04eytHWuAV%2BuH9xjgvj1sHoyujBM25yG7m3OdCu%2BGwAGrujtbvyTDrwsr8gWpzLOdxoX9yxT25CCxK%2FIEVKzwv6yCcW2J%2BaWpVBUDbw1cx5OjC71Lak%2FpRoO%2BKin1p1Ee%2FDAOiaH7uiWeAf8ZRfc6oT3i6qMV9zODaqnb8sziUE8jn0sSwZfw%2BWgGx7MkbdwJdCf&X-Amz-Signature=e72bbef1e19082fd1d870dddc91cbf251f81d7486aeea74592655c92245f2094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HBG53UA%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQC%2B80t5QgCBVkUh5KeeOCV6ZGQEk4jjPQskoGbJDzw%2FzAIhANiuYF4eLxxyLcWRpzoOZOa14DPhGHV2eVSnAEfIVVGcKv8DCFAQABoMNjM3NDIzMTgzODA1Igy9jDheUMu%2BNn%2FkusEq3AP%2Bfo9hfTYmkbwnVVQNPygSwph75bcQg5tGsMMCMroBjo%2FshCeaqZJqDqOLlpecd8vQS8Q3GiB3bGLcd838T%2FJSBKbfuk5TA456cSd5c5517eNdXkOnG0LLoHlXFLB4Y8JyTvj0HWkh%2BNFXurmFb0Uwo8ZQ5blTzit%2Fan3SyB7bBwPN3fPSbMNg8jFvGNSOy6tcjxQGAb%2BKTkH1vLz3Rht6tfzuMCX7RXYd%2BQGgqpYlP8poeV%2FU6T31ulFXyiNM3dTOtsPiqaN5LGLPo65ShMMgX0cb%2FJ%2BOXppZe757u3aO6sqqa%2FyqpDnRWUC7KCtz9kjThjJS7%2FIKhjfest4Rksw2TSYhBM5VZDvG%2BJj%2F2FsBtL6QlIl%2Bjpsumtu%2FUTNqsYD0odGmoEeY%2Bgsb4OLx%2FEH7VOpbOecyaqhqVm5VX03auAkn5JjRM2Cpb2tnCljfnqp9l1aBh58atLQgJpC0Yx%2B4ASaZsvFk1O9PTgBlSeaOzBPMk7PNyqqbe8V%2FWz1pE0OQWvbQQFLlhdO0hSLSXmJQoOUMZ1MLuNiCU5rauNGRsQmFBAkm2Ttmz%2FsDDveoYHBFlyZEB8vXvH3g3rYENPwRBI2iWBi7YDtjDjXryeCueqd%2BMGypeb3tOwJI2TCM9MTEBjqkAV9xg9IS2S4Ajlu1QJL4JDEyA9beVUBdf5UhCyFCbbWwfA6aqUaZv3H4xYcncyrKQ8imlju3OSMBy6kD6yQgZjM1poFKkQLEahkD55CDNLE9i7%2Fc%2FunjXQXB0%2BQihUgSWgLTNePzjJ6zFuQH%2BbVFWj0yUaJfFA0HxV%2BG7V6IzfLjxqBdJN8XMBeBzkBc%2Bp2U5HLyRhSJGuPDLcDt%2B1a6tQVKgljV&X-Amz-Signature=804b9656a2101fd8e5fa193338459c061024d4ebb6210efa29761eae4ff858ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7AUW6SD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHgn3TJrySeQVXdQwNpeAvSkLH%2FxKxWWRozEJMv5ODCgAiBkEHY6sHv7W63pyNvoAtnmW%2FjLvezqZtUn4MC99Nv58yr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMyFjvSJX%2ByBIeussAKtwDdpoVkFOO2M7bi%2B77OHYz3bq16%2F6h8ZuFzlKB4J98g13xUSc75R%2BiCOdDhfBTalpp0NWLxNO69NTNLKQ6H0UIjrQ5zwjD4lDmKQIZ1Jm2eHKDz2l97KocEjaWFNZHjEwcRARSMgvvsgi9NPkY0clzhMoe46BR%2FQJR0wOjIIbYDTsSFzgOCM9sN9WzvDDdeCHKNEdeeV2tN6cY4xdXme7FcfqfqaiJMZcOx9gObp2c75gSAA%2FVQbJnA7mm6ZtJo2KHFzq8wbGxHa8akEXmK8iL5%2BKHFjJmigHd0fFWzv6jHLBHU7XHvSOwN%2FJ8yPYLBlLgOfCAQkQqWvo4IqnctpdytGrZCzlLoxHdn4Enhxx8qsdRhNFFQgur7PmkaM9pFM1bh4GpEsYwBP1CFKU0b85aZlxYRQTSXp%2BXpSzAech2LQ4DtYYN61VM%2F8RR%2BL6IcX45BEvHlZZHrihi8F7FjcALQdcTyDAFGoALRbFgqx9i9t1L7M7%2BdT97qe6eSFDmswtlKkF%2BKxObQZ45xqOw4lnsIn3OIiHyMRm6pnvcRVrdNSmFxEjmJJF6BfoTr1bgRLI0Rh%2FYUwroZsGSjYBfwE8nXLX6HA0BO84LViWTHvVA8koV1emPYGvizOXW5dww7vPExAY6pgH0xh%2FquDZoCjOBZaAStOxiW2m5r9FmKTBBNS669g8ANRt8TlS%2Fs%2FsdkXiUvNKbvy25lG4%2BYSPZKMgVO%2B8o0oLY43OTQXRwB6ufcfDs3MGIaVURlKNneIpq0NCmnJoZxs7xY5jnj5CExsTbbk57XVNGjMr%2F4GoCmjFBeZQS2tDoA%2Bsr%2BIULlz1kUxsvpFGbQ%2Bt6UhOU1GscHv0Yb4NDnL28BJNn2fEL&X-Amz-Signature=553c2b223580bf1e45f6e631e20f766f5845b976dd98a81743d5b9268e8e6304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3VGDVFU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIAKcUpsB78p1EdjTOwd7JeWa%2BksW2fNDHFLj3WGchVkdAiEAxUGToanz3rgnC1DMgTVGwBZdefm0UlFZugvQl%2FP4miYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDG96%2FGwMY7BSFLulQyrcA1G0uRxt0Ly26HZFU9zPxvHaJiWWtWu9iMMb9vY8XPcoroWwVzTN%2BKYP9SOPsDyF1tNsBCKSgnYofzoIYTUzuBDfxMwtsicN%2BRdaYb5HHiuXTwWZyisy%2FL0WuYPydqI1WrlrHFucnGOk6skq95UG1uxGCSdQlY0pd%2FMeiranG8MZSWR5CAaGnf%2FKODJOlCWOovBO4vnpqqy7nuOF69zGZLmnK23e4K1JiQON2j%2FJg%2FgHHa29GN%2FKF7NPZwW905d2X2IUFzwON%2BXLY2FkrTPJhdTWkoqx3MYXGXtYBwZLR4rII74iW%2FkqXxng4yPSWU1PWxLhAjlU%2BGLRlBB%2FGpCZpnzWwVgXjAf2Nr%2F9gBEvDaXc%2BtnIze6%2FB6zymC0C%2Bl8hOykWzKCFZqdqTX%2FLf3YtOgmvN5pfANezw%2BZjrzSZpPuMtxkLEfBbMtKPWQ8DSyLsCk4yIwd5lfrFp6IhGc0U49TR5WPR02SkzklOowdCyjGpLcdDkkSRsfxJbXMhT9d4mn6FwR%2B6wCU1%2BdZAxGSnyd2rMRRrrVnTDfnEzJgH8IYmTHmMTQuMZzGpErc%2BKKMUaF8%2BlqXQsqTAchsTmulQYAjyh8X4bSj5hf8sdTLMf93Ik9FFX%2FJMASHSqpEDMPXzxMQGOqUBFxLcR%2BKOZzy4g%2FRNvfwlx3b1HgoGvXM%2BVbOpjkNx%2Bxc7Lw%2BKB4eane4LEHRxn3t1Qab%2Fd12%2BtnFmie2r9Fr5l13lkGA56ceuWm%2Bkz%2FA2ECCgv9BABUmBX2wfSoAVXATuErL2bh2v57gxapl3dYNwtEZ%2BwL%2FXi5UHlQrw1wLxRHATvug7w1n2AQHWmAOLDq41ruyF2GWFC5D0WbXi095V1SObBPZk&X-Amz-Signature=e4753c7186a482cadcc92ee4298fcd8ba9fc577f6797c2d6b8e50a7d4d8307b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUX42BF7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCb60YnSm9IqMmsExrsFXCZizpPsOuvsEUEGuwQQO3E%2FwIhALhFLHEt7Khi%2BINvJiIUMP65VQ43rROBN3LGHQvhBqdeKv8DCFAQABoMNjM3NDIzMTgzODA1IgxEFDkoJaagu5Fs8r4q3ANDj1YvHtCLoTbOUlS%2F%2BV6%2F%2BgJ0glfiXuK8FoKzRpCl4e4uuZjnyP3kROKFgj2md6wDQwZX5DhKvZONQlzp2gxCRJeiNJsphHP%2F4aqbIsY%2FB%2FRVWzCJOqb5PZAHnrhdvT9XfMSqaCTxUwlhlSMX0Be5AUw14E29W0TDGDRCz6vTOxzp2LorLQZaahkfu%2BFqDnUGTxCGXAon4jAXpI6T8zSih52oXwnUT5oBgB1usQm8sBuP%2FqAGQdgIBs4FP7NKyanrGWoUC%2F63fZNEk5HDAm7H2d%2BEwHfDuHDtfVfR1d3J5DwtgQhX%2Bg6%2Bq1AtHbvyNS3H4D2n9kehXDJPS6hOMFgkE11q6fn%2BdEofdaeoxTPRqL0r%2BpEg7cn90F8ZrML9lGtaxJEQVXUc0BmjfzFTBhhB7FgsoXG7OyrGebSlEwShUHKHBY3da0Ay1A7UkA5QZDDdVP9htGicw7ORkXS2kO0bjDU%2FDn8CD8N0R80PZB0emosY7g%2FWn4e5GwdU40Y%2BFsMhfBpgSz9GoT2EK68%2Fv1LMi1UVvbL%2FV51QrLydPT58CysvPwIkNF%2BmkHZWgMVm4ROb6sXRIpJn2SwxMqyuoPjh42nLNhD5hkZWkTkhdqERJoM%2FFPiYiMBMoWr0IjCW9MTEBjqkAb8NDnS0k3DRi%2BSrM6pvcOaSRpm%2FFaPlXojXBaCiljEi8tg0qQ%2F%2FvMWAluuQJJZmu4r4uRnQ9YLIVwR48scRkyedRyYs7UrCKbKrPTgCMnJTrUveFHNAJJmKixHl6qd3iU7qmucebE8%2B2Q3PF8Edg1aLaWnt2gM3xlDXPN0bu0GY5TMykUxFsdAfMwm7JwUxy8d74osuCzTWkk7N73ljmpjZLSpu&X-Amz-Signature=b5b0bc10a536f4871d0dfa8aeaea9cc404e71685979b3a4530daf8d195e68ec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUX42BF7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCb60YnSm9IqMmsExrsFXCZizpPsOuvsEUEGuwQQO3E%2FwIhALhFLHEt7Khi%2BINvJiIUMP65VQ43rROBN3LGHQvhBqdeKv8DCFAQABoMNjM3NDIzMTgzODA1IgxEFDkoJaagu5Fs8r4q3ANDj1YvHtCLoTbOUlS%2F%2BV6%2F%2BgJ0glfiXuK8FoKzRpCl4e4uuZjnyP3kROKFgj2md6wDQwZX5DhKvZONQlzp2gxCRJeiNJsphHP%2F4aqbIsY%2FB%2FRVWzCJOqb5PZAHnrhdvT9XfMSqaCTxUwlhlSMX0Be5AUw14E29W0TDGDRCz6vTOxzp2LorLQZaahkfu%2BFqDnUGTxCGXAon4jAXpI6T8zSih52oXwnUT5oBgB1usQm8sBuP%2FqAGQdgIBs4FP7NKyanrGWoUC%2F63fZNEk5HDAm7H2d%2BEwHfDuHDtfVfR1d3J5DwtgQhX%2Bg6%2Bq1AtHbvyNS3H4D2n9kehXDJPS6hOMFgkE11q6fn%2BdEofdaeoxTPRqL0r%2BpEg7cn90F8ZrML9lGtaxJEQVXUc0BmjfzFTBhhB7FgsoXG7OyrGebSlEwShUHKHBY3da0Ay1A7UkA5QZDDdVP9htGicw7ORkXS2kO0bjDU%2FDn8CD8N0R80PZB0emosY7g%2FWn4e5GwdU40Y%2BFsMhfBpgSz9GoT2EK68%2Fv1LMi1UVvbL%2FV51QrLydPT58CysvPwIkNF%2BmkHZWgMVm4ROb6sXRIpJn2SwxMqyuoPjh42nLNhD5hkZWkTkhdqERJoM%2FFPiYiMBMoWr0IjCW9MTEBjqkAb8NDnS0k3DRi%2BSrM6pvcOaSRpm%2FFaPlXojXBaCiljEi8tg0qQ%2F%2FvMWAluuQJJZmu4r4uRnQ9YLIVwR48scRkyedRyYs7UrCKbKrPTgCMnJTrUveFHNAJJmKixHl6qd3iU7qmucebE8%2B2Q3PF8Edg1aLaWnt2gM3xlDXPN0bu0GY5TMykUxFsdAfMwm7JwUxy8d74osuCzTWkk7N73ljmpjZLSpu&X-Amz-Signature=68ce37bc1211226ef5cc836a978981efac6c8fe2b12195a84d2604c78de96f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUN2GLL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHmX5DReSLCVDAB4OSoCXUQ1aF7%2BlcWcPCiSOLTR8QL0AiBBepUnFGd3fuNTpB7NJMchuDix7Me9MzCKIKdoEwzzRCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMTsU4pVbHp8BSHwwrKtwDDVNw6TdBmf3rtLku4ZtzT5560HYm5LodiMIQPrVKshKrEKNpi5klEYOp4MVZ2YmElEUBnKT9BYdBIt1FxesEVeHx4%2FSCU6r3MVs4aHmokg%2B4A1VuyEYYstEriEOWNE8ERsKEDGPUUs0R8R7ENkhNyFdI3DwPdXXlYTNXS0p7BOx83v5I8riObYAJMfzBPWqyNr2VDVmTx4RF0oBPlK6JHPe%2FfolzqAi8z%2Fprli6VfXszK9lVx1NEWxIiLWdXcMSMQ%2BI5e2s0aFpvnvX8cKphcL7QwLCnKkgktH8AS7yQaxLV%2Bc8c%2BB%2FWcjahCBjLBiVhffbsUsziXtGApjTDOE%2F5tmUeRDLgRDws46Rgs17xjdYJ%2BnwDfzOKMuwRsU%2Fvhoc9xJdlA0C1t3B76y8nSfQ5zIN7SUPYqrOS%2Fu1QfJoYjin03Q1%2BOgTiyk00FDWOyqifmzxJjqCyINaeDGq8jCppvfixnwC9MChT60XExF0BWwkVHo4UtsXnB8nEuTTD55x%2B%2FRHDdNyw4%2F1m45TsetGgvoliQIMTO%2BSFTRZTBqhA1OIDUKEJKzVqOzpkOqdeacnhH9IgmwLJ4dLCigyxf9aI8YvmPdKEtj7VXpU4DXbx779LwKTNpTEGlqCzN30woPTExAY6pgFu%2Fzm%2FeuxghB0RW%2FMOUdqeJo9TBM9lKyvos0szDj2S1mEEX9I%2BnS4zZNrox0w6ynoJrwTAdSwkgpW0nmJpOWoSbSeivCbjc%2FXCp69lG36P95wrvMnKg8E7%2BoP8T7ToZZD15uPVswry%2FHQq8nua%2BHkpBAy0JM8QW5qjDikcRvKHOMMXYPxIzW%2FuTvXH59XwYF3rSuVg06W9I4cqRvC42D7%2FVqrc%2BzT9&X-Amz-Signature=411ab4ea90f76fa889725271c4649621345fc0907bd1d29b7c0ed8ccf81a4988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUN2GLL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHmX5DReSLCVDAB4OSoCXUQ1aF7%2BlcWcPCiSOLTR8QL0AiBBepUnFGd3fuNTpB7NJMchuDix7Me9MzCKIKdoEwzzRCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMTsU4pVbHp8BSHwwrKtwDDVNw6TdBmf3rtLku4ZtzT5560HYm5LodiMIQPrVKshKrEKNpi5klEYOp4MVZ2YmElEUBnKT9BYdBIt1FxesEVeHx4%2FSCU6r3MVs4aHmokg%2B4A1VuyEYYstEriEOWNE8ERsKEDGPUUs0R8R7ENkhNyFdI3DwPdXXlYTNXS0p7BOx83v5I8riObYAJMfzBPWqyNr2VDVmTx4RF0oBPlK6JHPe%2FfolzqAi8z%2Fprli6VfXszK9lVx1NEWxIiLWdXcMSMQ%2BI5e2s0aFpvnvX8cKphcL7QwLCnKkgktH8AS7yQaxLV%2Bc8c%2BB%2FWcjahCBjLBiVhffbsUsziXtGApjTDOE%2F5tmUeRDLgRDws46Rgs17xjdYJ%2BnwDfzOKMuwRsU%2Fvhoc9xJdlA0C1t3B76y8nSfQ5zIN7SUPYqrOS%2Fu1QfJoYjin03Q1%2BOgTiyk00FDWOyqifmzxJjqCyINaeDGq8jCppvfixnwC9MChT60XExF0BWwkVHo4UtsXnB8nEuTTD55x%2B%2FRHDdNyw4%2F1m45TsetGgvoliQIMTO%2BSFTRZTBqhA1OIDUKEJKzVqOzpkOqdeacnhH9IgmwLJ4dLCigyxf9aI8YvmPdKEtj7VXpU4DXbx779LwKTNpTEGlqCzN30woPTExAY6pgFu%2Fzm%2FeuxghB0RW%2FMOUdqeJo9TBM9lKyvos0szDj2S1mEEX9I%2BnS4zZNrox0w6ynoJrwTAdSwkgpW0nmJpOWoSbSeivCbjc%2FXCp69lG36P95wrvMnKg8E7%2BoP8T7ToZZD15uPVswry%2FHQq8nua%2BHkpBAy0JM8QW5qjDikcRvKHOMMXYPxIzW%2FuTvXH59XwYF3rSuVg06W9I4cqRvC42D7%2FVqrc%2BzT9&X-Amz-Signature=449ccbfc6bcb81412f7abdb3bed6900c3eff1293e16622ec3ae1fe5c2e773d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUN2GLL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHmX5DReSLCVDAB4OSoCXUQ1aF7%2BlcWcPCiSOLTR8QL0AiBBepUnFGd3fuNTpB7NJMchuDix7Me9MzCKIKdoEwzzRCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMTsU4pVbHp8BSHwwrKtwDDVNw6TdBmf3rtLku4ZtzT5560HYm5LodiMIQPrVKshKrEKNpi5klEYOp4MVZ2YmElEUBnKT9BYdBIt1FxesEVeHx4%2FSCU6r3MVs4aHmokg%2B4A1VuyEYYstEriEOWNE8ERsKEDGPUUs0R8R7ENkhNyFdI3DwPdXXlYTNXS0p7BOx83v5I8riObYAJMfzBPWqyNr2VDVmTx4RF0oBPlK6JHPe%2FfolzqAi8z%2Fprli6VfXszK9lVx1NEWxIiLWdXcMSMQ%2BI5e2s0aFpvnvX8cKphcL7QwLCnKkgktH8AS7yQaxLV%2Bc8c%2BB%2FWcjahCBjLBiVhffbsUsziXtGApjTDOE%2F5tmUeRDLgRDws46Rgs17xjdYJ%2BnwDfzOKMuwRsU%2Fvhoc9xJdlA0C1t3B76y8nSfQ5zIN7SUPYqrOS%2Fu1QfJoYjin03Q1%2BOgTiyk00FDWOyqifmzxJjqCyINaeDGq8jCppvfixnwC9MChT60XExF0BWwkVHo4UtsXnB8nEuTTD55x%2B%2FRHDdNyw4%2F1m45TsetGgvoliQIMTO%2BSFTRZTBqhA1OIDUKEJKzVqOzpkOqdeacnhH9IgmwLJ4dLCigyxf9aI8YvmPdKEtj7VXpU4DXbx779LwKTNpTEGlqCzN30woPTExAY6pgFu%2Fzm%2FeuxghB0RW%2FMOUdqeJo9TBM9lKyvos0szDj2S1mEEX9I%2BnS4zZNrox0w6ynoJrwTAdSwkgpW0nmJpOWoSbSeivCbjc%2FXCp69lG36P95wrvMnKg8E7%2BoP8T7ToZZD15uPVswry%2FHQq8nua%2BHkpBAy0JM8QW5qjDikcRvKHOMMXYPxIzW%2FuTvXH59XwYF3rSuVg06W9I4cqRvC42D7%2FVqrc%2BzT9&X-Amz-Signature=639e6184cd798d68b00ab1b1ab50bc3e956053aa43b2f9f36a4b88efe1826f1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUN2GLL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHmX5DReSLCVDAB4OSoCXUQ1aF7%2BlcWcPCiSOLTR8QL0AiBBepUnFGd3fuNTpB7NJMchuDix7Me9MzCKIKdoEwzzRCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMTsU4pVbHp8BSHwwrKtwDDVNw6TdBmf3rtLku4ZtzT5560HYm5LodiMIQPrVKshKrEKNpi5klEYOp4MVZ2YmElEUBnKT9BYdBIt1FxesEVeHx4%2FSCU6r3MVs4aHmokg%2B4A1VuyEYYstEriEOWNE8ERsKEDGPUUs0R8R7ENkhNyFdI3DwPdXXlYTNXS0p7BOx83v5I8riObYAJMfzBPWqyNr2VDVmTx4RF0oBPlK6JHPe%2FfolzqAi8z%2Fprli6VfXszK9lVx1NEWxIiLWdXcMSMQ%2BI5e2s0aFpvnvX8cKphcL7QwLCnKkgktH8AS7yQaxLV%2Bc8c%2BB%2FWcjahCBjLBiVhffbsUsziXtGApjTDOE%2F5tmUeRDLgRDws46Rgs17xjdYJ%2BnwDfzOKMuwRsU%2Fvhoc9xJdlA0C1t3B76y8nSfQ5zIN7SUPYqrOS%2Fu1QfJoYjin03Q1%2BOgTiyk00FDWOyqifmzxJjqCyINaeDGq8jCppvfixnwC9MChT60XExF0BWwkVHo4UtsXnB8nEuTTD55x%2B%2FRHDdNyw4%2F1m45TsetGgvoliQIMTO%2BSFTRZTBqhA1OIDUKEJKzVqOzpkOqdeacnhH9IgmwLJ4dLCigyxf9aI8YvmPdKEtj7VXpU4DXbx779LwKTNpTEGlqCzN30woPTExAY6pgFu%2Fzm%2FeuxghB0RW%2FMOUdqeJo9TBM9lKyvos0szDj2S1mEEX9I%2BnS4zZNrox0w6ynoJrwTAdSwkgpW0nmJpOWoSbSeivCbjc%2FXCp69lG36P95wrvMnKg8E7%2BoP8T7ToZZD15uPVswry%2FHQq8nua%2BHkpBAy0JM8QW5qjDikcRvKHOMMXYPxIzW%2FuTvXH59XwYF3rSuVg06W9I4cqRvC42D7%2FVqrc%2BzT9&X-Amz-Signature=90621518a43cb3fa1ddd8112ad5b33c19a13cdd63b7ba64b8e87fae17f487760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUN2GLL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHmX5DReSLCVDAB4OSoCXUQ1aF7%2BlcWcPCiSOLTR8QL0AiBBepUnFGd3fuNTpB7NJMchuDix7Me9MzCKIKdoEwzzRCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMTsU4pVbHp8BSHwwrKtwDDVNw6TdBmf3rtLku4ZtzT5560HYm5LodiMIQPrVKshKrEKNpi5klEYOp4MVZ2YmElEUBnKT9BYdBIt1FxesEVeHx4%2FSCU6r3MVs4aHmokg%2B4A1VuyEYYstEriEOWNE8ERsKEDGPUUs0R8R7ENkhNyFdI3DwPdXXlYTNXS0p7BOx83v5I8riObYAJMfzBPWqyNr2VDVmTx4RF0oBPlK6JHPe%2FfolzqAi8z%2Fprli6VfXszK9lVx1NEWxIiLWdXcMSMQ%2BI5e2s0aFpvnvX8cKphcL7QwLCnKkgktH8AS7yQaxLV%2Bc8c%2BB%2FWcjahCBjLBiVhffbsUsziXtGApjTDOE%2F5tmUeRDLgRDws46Rgs17xjdYJ%2BnwDfzOKMuwRsU%2Fvhoc9xJdlA0C1t3B76y8nSfQ5zIN7SUPYqrOS%2Fu1QfJoYjin03Q1%2BOgTiyk00FDWOyqifmzxJjqCyINaeDGq8jCppvfixnwC9MChT60XExF0BWwkVHo4UtsXnB8nEuTTD55x%2B%2FRHDdNyw4%2F1m45TsetGgvoliQIMTO%2BSFTRZTBqhA1OIDUKEJKzVqOzpkOqdeacnhH9IgmwLJ4dLCigyxf9aI8YvmPdKEtj7VXpU4DXbx779LwKTNpTEGlqCzN30woPTExAY6pgFu%2Fzm%2FeuxghB0RW%2FMOUdqeJo9TBM9lKyvos0szDj2S1mEEX9I%2BnS4zZNrox0w6ynoJrwTAdSwkgpW0nmJpOWoSbSeivCbjc%2FXCp69lG36P95wrvMnKg8E7%2BoP8T7ToZZD15uPVswry%2FHQq8nua%2BHkpBAy0JM8QW5qjDikcRvKHOMMXYPxIzW%2FuTvXH59XwYF3rSuVg06W9I4cqRvC42D7%2FVqrc%2BzT9&X-Amz-Signature=376153bfce7eed4dc21b04e03a0a25ac40b88fa7bd8b35f225a603fcbc441baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUN2GLL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHmX5DReSLCVDAB4OSoCXUQ1aF7%2BlcWcPCiSOLTR8QL0AiBBepUnFGd3fuNTpB7NJMchuDix7Me9MzCKIKdoEwzzRCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMTsU4pVbHp8BSHwwrKtwDDVNw6TdBmf3rtLku4ZtzT5560HYm5LodiMIQPrVKshKrEKNpi5klEYOp4MVZ2YmElEUBnKT9BYdBIt1FxesEVeHx4%2FSCU6r3MVs4aHmokg%2B4A1VuyEYYstEriEOWNE8ERsKEDGPUUs0R8R7ENkhNyFdI3DwPdXXlYTNXS0p7BOx83v5I8riObYAJMfzBPWqyNr2VDVmTx4RF0oBPlK6JHPe%2FfolzqAi8z%2Fprli6VfXszK9lVx1NEWxIiLWdXcMSMQ%2BI5e2s0aFpvnvX8cKphcL7QwLCnKkgktH8AS7yQaxLV%2Bc8c%2BB%2FWcjahCBjLBiVhffbsUsziXtGApjTDOE%2F5tmUeRDLgRDws46Rgs17xjdYJ%2BnwDfzOKMuwRsU%2Fvhoc9xJdlA0C1t3B76y8nSfQ5zIN7SUPYqrOS%2Fu1QfJoYjin03Q1%2BOgTiyk00FDWOyqifmzxJjqCyINaeDGq8jCppvfixnwC9MChT60XExF0BWwkVHo4UtsXnB8nEuTTD55x%2B%2FRHDdNyw4%2F1m45TsetGgvoliQIMTO%2BSFTRZTBqhA1OIDUKEJKzVqOzpkOqdeacnhH9IgmwLJ4dLCigyxf9aI8YvmPdKEtj7VXpU4DXbx779LwKTNpTEGlqCzN30woPTExAY6pgFu%2Fzm%2FeuxghB0RW%2FMOUdqeJo9TBM9lKyvos0szDj2S1mEEX9I%2BnS4zZNrox0w6ynoJrwTAdSwkgpW0nmJpOWoSbSeivCbjc%2FXCp69lG36P95wrvMnKg8E7%2BoP8T7ToZZD15uPVswry%2FHQq8nua%2BHkpBAy0JM8QW5qjDikcRvKHOMMXYPxIzW%2FuTvXH59XwYF3rSuVg06W9I4cqRvC42D7%2FVqrc%2BzT9&X-Amz-Signature=29e338dbd3a57b010339c180a9963449e9d16de7120c468476e343c4bf80606c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUN2GLL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHmX5DReSLCVDAB4OSoCXUQ1aF7%2BlcWcPCiSOLTR8QL0AiBBepUnFGd3fuNTpB7NJMchuDix7Me9MzCKIKdoEwzzRCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMTsU4pVbHp8BSHwwrKtwDDVNw6TdBmf3rtLku4ZtzT5560HYm5LodiMIQPrVKshKrEKNpi5klEYOp4MVZ2YmElEUBnKT9BYdBIt1FxesEVeHx4%2FSCU6r3MVs4aHmokg%2B4A1VuyEYYstEriEOWNE8ERsKEDGPUUs0R8R7ENkhNyFdI3DwPdXXlYTNXS0p7BOx83v5I8riObYAJMfzBPWqyNr2VDVmTx4RF0oBPlK6JHPe%2FfolzqAi8z%2Fprli6VfXszK9lVx1NEWxIiLWdXcMSMQ%2BI5e2s0aFpvnvX8cKphcL7QwLCnKkgktH8AS7yQaxLV%2Bc8c%2BB%2FWcjahCBjLBiVhffbsUsziXtGApjTDOE%2F5tmUeRDLgRDws46Rgs17xjdYJ%2BnwDfzOKMuwRsU%2Fvhoc9xJdlA0C1t3B76y8nSfQ5zIN7SUPYqrOS%2Fu1QfJoYjin03Q1%2BOgTiyk00FDWOyqifmzxJjqCyINaeDGq8jCppvfixnwC9MChT60XExF0BWwkVHo4UtsXnB8nEuTTD55x%2B%2FRHDdNyw4%2F1m45TsetGgvoliQIMTO%2BSFTRZTBqhA1OIDUKEJKzVqOzpkOqdeacnhH9IgmwLJ4dLCigyxf9aI8YvmPdKEtj7VXpU4DXbx779LwKTNpTEGlqCzN30woPTExAY6pgFu%2Fzm%2FeuxghB0RW%2FMOUdqeJo9TBM9lKyvos0szDj2S1mEEX9I%2BnS4zZNrox0w6ynoJrwTAdSwkgpW0nmJpOWoSbSeivCbjc%2FXCp69lG36P95wrvMnKg8E7%2BoP8T7ToZZD15uPVswry%2FHQq8nua%2BHkpBAy0JM8QW5qjDikcRvKHOMMXYPxIzW%2FuTvXH59XwYF3rSuVg06W9I4cqRvC42D7%2FVqrc%2BzT9&X-Amz-Signature=639e6184cd798d68b00ab1b1ab50bc3e956053aa43b2f9f36a4b88efe1826f1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUN2GLL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHmX5DReSLCVDAB4OSoCXUQ1aF7%2BlcWcPCiSOLTR8QL0AiBBepUnFGd3fuNTpB7NJMchuDix7Me9MzCKIKdoEwzzRCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMTsU4pVbHp8BSHwwrKtwDDVNw6TdBmf3rtLku4ZtzT5560HYm5LodiMIQPrVKshKrEKNpi5klEYOp4MVZ2YmElEUBnKT9BYdBIt1FxesEVeHx4%2FSCU6r3MVs4aHmokg%2B4A1VuyEYYstEriEOWNE8ERsKEDGPUUs0R8R7ENkhNyFdI3DwPdXXlYTNXS0p7BOx83v5I8riObYAJMfzBPWqyNr2VDVmTx4RF0oBPlK6JHPe%2FfolzqAi8z%2Fprli6VfXszK9lVx1NEWxIiLWdXcMSMQ%2BI5e2s0aFpvnvX8cKphcL7QwLCnKkgktH8AS7yQaxLV%2Bc8c%2BB%2FWcjahCBjLBiVhffbsUsziXtGApjTDOE%2F5tmUeRDLgRDws46Rgs17xjdYJ%2BnwDfzOKMuwRsU%2Fvhoc9xJdlA0C1t3B76y8nSfQ5zIN7SUPYqrOS%2Fu1QfJoYjin03Q1%2BOgTiyk00FDWOyqifmzxJjqCyINaeDGq8jCppvfixnwC9MChT60XExF0BWwkVHo4UtsXnB8nEuTTD55x%2B%2FRHDdNyw4%2F1m45TsetGgvoliQIMTO%2BSFTRZTBqhA1OIDUKEJKzVqOzpkOqdeacnhH9IgmwLJ4dLCigyxf9aI8YvmPdKEtj7VXpU4DXbx779LwKTNpTEGlqCzN30woPTExAY6pgFu%2Fzm%2FeuxghB0RW%2FMOUdqeJo9TBM9lKyvos0szDj2S1mEEX9I%2BnS4zZNrox0w6ynoJrwTAdSwkgpW0nmJpOWoSbSeivCbjc%2FXCp69lG36P95wrvMnKg8E7%2BoP8T7ToZZD15uPVswry%2FHQq8nua%2BHkpBAy0JM8QW5qjDikcRvKHOMMXYPxIzW%2FuTvXH59XwYF3rSuVg06W9I4cqRvC42D7%2FVqrc%2BzT9&X-Amz-Signature=4d0459128287c377dd22e97163766318cd981977b9b623e8c3597b3aee2ff47a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUN2GLL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHmX5DReSLCVDAB4OSoCXUQ1aF7%2BlcWcPCiSOLTR8QL0AiBBepUnFGd3fuNTpB7NJMchuDix7Me9MzCKIKdoEwzzRCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMTsU4pVbHp8BSHwwrKtwDDVNw6TdBmf3rtLku4ZtzT5560HYm5LodiMIQPrVKshKrEKNpi5klEYOp4MVZ2YmElEUBnKT9BYdBIt1FxesEVeHx4%2FSCU6r3MVs4aHmokg%2B4A1VuyEYYstEriEOWNE8ERsKEDGPUUs0R8R7ENkhNyFdI3DwPdXXlYTNXS0p7BOx83v5I8riObYAJMfzBPWqyNr2VDVmTx4RF0oBPlK6JHPe%2FfolzqAi8z%2Fprli6VfXszK9lVx1NEWxIiLWdXcMSMQ%2BI5e2s0aFpvnvX8cKphcL7QwLCnKkgktH8AS7yQaxLV%2Bc8c%2BB%2FWcjahCBjLBiVhffbsUsziXtGApjTDOE%2F5tmUeRDLgRDws46Rgs17xjdYJ%2BnwDfzOKMuwRsU%2Fvhoc9xJdlA0C1t3B76y8nSfQ5zIN7SUPYqrOS%2Fu1QfJoYjin03Q1%2BOgTiyk00FDWOyqifmzxJjqCyINaeDGq8jCppvfixnwC9MChT60XExF0BWwkVHo4UtsXnB8nEuTTD55x%2B%2FRHDdNyw4%2F1m45TsetGgvoliQIMTO%2BSFTRZTBqhA1OIDUKEJKzVqOzpkOqdeacnhH9IgmwLJ4dLCigyxf9aI8YvmPdKEtj7VXpU4DXbx779LwKTNpTEGlqCzN30woPTExAY6pgFu%2Fzm%2FeuxghB0RW%2FMOUdqeJo9TBM9lKyvos0szDj2S1mEEX9I%2BnS4zZNrox0w6ynoJrwTAdSwkgpW0nmJpOWoSbSeivCbjc%2FXCp69lG36P95wrvMnKg8E7%2BoP8T7ToZZD15uPVswry%2FHQq8nua%2BHkpBAy0JM8QW5qjDikcRvKHOMMXYPxIzW%2FuTvXH59XwYF3rSuVg06W9I4cqRvC42D7%2FVqrc%2BzT9&X-Amz-Signature=2f245a1d566abfba8fd0d6ff0f4c86df66a4d8a1cba82cf2ebf6cbb77255a734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUN2GLL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHmX5DReSLCVDAB4OSoCXUQ1aF7%2BlcWcPCiSOLTR8QL0AiBBepUnFGd3fuNTpB7NJMchuDix7Me9MzCKIKdoEwzzRCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMTsU4pVbHp8BSHwwrKtwDDVNw6TdBmf3rtLku4ZtzT5560HYm5LodiMIQPrVKshKrEKNpi5klEYOp4MVZ2YmElEUBnKT9BYdBIt1FxesEVeHx4%2FSCU6r3MVs4aHmokg%2B4A1VuyEYYstEriEOWNE8ERsKEDGPUUs0R8R7ENkhNyFdI3DwPdXXlYTNXS0p7BOx83v5I8riObYAJMfzBPWqyNr2VDVmTx4RF0oBPlK6JHPe%2FfolzqAi8z%2Fprli6VfXszK9lVx1NEWxIiLWdXcMSMQ%2BI5e2s0aFpvnvX8cKphcL7QwLCnKkgktH8AS7yQaxLV%2Bc8c%2BB%2FWcjahCBjLBiVhffbsUsziXtGApjTDOE%2F5tmUeRDLgRDws46Rgs17xjdYJ%2BnwDfzOKMuwRsU%2Fvhoc9xJdlA0C1t3B76y8nSfQ5zIN7SUPYqrOS%2Fu1QfJoYjin03Q1%2BOgTiyk00FDWOyqifmzxJjqCyINaeDGq8jCppvfixnwC9MChT60XExF0BWwkVHo4UtsXnB8nEuTTD55x%2B%2FRHDdNyw4%2F1m45TsetGgvoliQIMTO%2BSFTRZTBqhA1OIDUKEJKzVqOzpkOqdeacnhH9IgmwLJ4dLCigyxf9aI8YvmPdKEtj7VXpU4DXbx779LwKTNpTEGlqCzN30woPTExAY6pgFu%2Fzm%2FeuxghB0RW%2FMOUdqeJo9TBM9lKyvos0szDj2S1mEEX9I%2BnS4zZNrox0w6ynoJrwTAdSwkgpW0nmJpOWoSbSeivCbjc%2FXCp69lG36P95wrvMnKg8E7%2BoP8T7ToZZD15uPVswry%2FHQq8nua%2BHkpBAy0JM8QW5qjDikcRvKHOMMXYPxIzW%2FuTvXH59XwYF3rSuVg06W9I4cqRvC42D7%2FVqrc%2BzT9&X-Amz-Signature=b19f8f079912d019b5d8019332b826b7c31d461c33f0f89ba36cdec30d764c06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
