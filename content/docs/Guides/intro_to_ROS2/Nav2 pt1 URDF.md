---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-01T02:02:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-01T02:02:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75MJ6XX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9SC3dDD%2BAiBXLq88HeqiqdjxscW399c0ps%2FizxZr%2FHAiAoRuHcKuFSWcfbUSZCu%2FchX6w%2Fuor9j7H62zRlzWz9kSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlltZSRNzRvPh%2FsiCKtwDOCvhUFANJM%2ByDBvtFiPOIlWMmk3WeQXTRIUHv2KNSs5NiyrBXWRH9XeBivzAsrtFyDXb%2Fl47uNaoN88Qohb7kwZ416mEdJCWtwRCQu%2FUG3xDJGdSjwOBlP2%2BxUNIHIftKvD1QJKAd%2FCPt06MYUo1sBrJRphltA6TFzfVjJD91tmTYgSkpUz0Qt8rVqh1IlEl2tNNyDMQiKcwA1lnWkQxzgkeVKEJEshfcG2jFjsFNYoXBcupNGu6mDXe48rcRC4EYDseLccwt9z%2B5lo2Fp3EIKdIeUYVa223QN8rRWut0knpSvG0vXDIVLznWnfk%2F22C0sZalH9XSzIh47qOfoptfaCOiUhS5RXakICZBZp1HT1QYS3oyO1ZJRW6TSuFLCeG%2BnQKprErpJXYquSZ0LzYJB6ZZSYgWj5VfW1iKWhpJMS8sCPVcXmmOZrlXqfO8qShqplTf65h8VYBOIa4YSwcr2ER4513xZttU1%2Fddi%2FK4sulXmqNihnWBhexUWymqNaHlV%2FQZh6M36AbUGDHZjr%2F7HvrK4fzgZSb5nxmSuShTZgU8F6Q433NinfXBii%2B8o81qEZtVJYub0P4RkrBlCK5j1fE80esaqpj0OpwESkj8fBKWZWvjkrhmpr3FZMw0JGyxAY6pgGblk2oWZzMtYGnuPxMQcwtUidmb9laR93Eptpvj%2BKaudppicPeofsfdKOyiOiMD6EhnrHCfRMMvx5blSl3EfCAaeuY%2BbIifMKa3PQ1MTTWaZEPcM91yqZqVsVAMwc%2FqzHAGwjYgvJYHkO8KIv6ES2MMyn5rTEUpbBShtRQ1aBoOL3LwaRQMUbSNgDwc7svJ6IcXVp3mYF9OFuqtKB3mGBau%2FoOYnQ7&X-Amz-Signature=9d6b56262a9d1fcf3a06b6e5429e2363254f6b4f399fca37da54d55574b57680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75MJ6XX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9SC3dDD%2BAiBXLq88HeqiqdjxscW399c0ps%2FizxZr%2FHAiAoRuHcKuFSWcfbUSZCu%2FchX6w%2Fuor9j7H62zRlzWz9kSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlltZSRNzRvPh%2FsiCKtwDOCvhUFANJM%2ByDBvtFiPOIlWMmk3WeQXTRIUHv2KNSs5NiyrBXWRH9XeBivzAsrtFyDXb%2Fl47uNaoN88Qohb7kwZ416mEdJCWtwRCQu%2FUG3xDJGdSjwOBlP2%2BxUNIHIftKvD1QJKAd%2FCPt06MYUo1sBrJRphltA6TFzfVjJD91tmTYgSkpUz0Qt8rVqh1IlEl2tNNyDMQiKcwA1lnWkQxzgkeVKEJEshfcG2jFjsFNYoXBcupNGu6mDXe48rcRC4EYDseLccwt9z%2B5lo2Fp3EIKdIeUYVa223QN8rRWut0knpSvG0vXDIVLznWnfk%2F22C0sZalH9XSzIh47qOfoptfaCOiUhS5RXakICZBZp1HT1QYS3oyO1ZJRW6TSuFLCeG%2BnQKprErpJXYquSZ0LzYJB6ZZSYgWj5VfW1iKWhpJMS8sCPVcXmmOZrlXqfO8qShqplTf65h8VYBOIa4YSwcr2ER4513xZttU1%2Fddi%2FK4sulXmqNihnWBhexUWymqNaHlV%2FQZh6M36AbUGDHZjr%2F7HvrK4fzgZSb5nxmSuShTZgU8F6Q433NinfXBii%2B8o81qEZtVJYub0P4RkrBlCK5j1fE80esaqpj0OpwESkj8fBKWZWvjkrhmpr3FZMw0JGyxAY6pgGblk2oWZzMtYGnuPxMQcwtUidmb9laR93Eptpvj%2BKaudppicPeofsfdKOyiOiMD6EhnrHCfRMMvx5blSl3EfCAaeuY%2BbIifMKa3PQ1MTTWaZEPcM91yqZqVsVAMwc%2FqzHAGwjYgvJYHkO8KIv6ES2MMyn5rTEUpbBShtRQ1aBoOL3LwaRQMUbSNgDwc7svJ6IcXVp3mYF9OFuqtKB3mGBau%2FoOYnQ7&X-Amz-Signature=4a76440d2319f57e284585b6abde9485bf13ea784f6f67127dcc862389786535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75MJ6XX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9SC3dDD%2BAiBXLq88HeqiqdjxscW399c0ps%2FizxZr%2FHAiAoRuHcKuFSWcfbUSZCu%2FchX6w%2Fuor9j7H62zRlzWz9kSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlltZSRNzRvPh%2FsiCKtwDOCvhUFANJM%2ByDBvtFiPOIlWMmk3WeQXTRIUHv2KNSs5NiyrBXWRH9XeBivzAsrtFyDXb%2Fl47uNaoN88Qohb7kwZ416mEdJCWtwRCQu%2FUG3xDJGdSjwOBlP2%2BxUNIHIftKvD1QJKAd%2FCPt06MYUo1sBrJRphltA6TFzfVjJD91tmTYgSkpUz0Qt8rVqh1IlEl2tNNyDMQiKcwA1lnWkQxzgkeVKEJEshfcG2jFjsFNYoXBcupNGu6mDXe48rcRC4EYDseLccwt9z%2B5lo2Fp3EIKdIeUYVa223QN8rRWut0knpSvG0vXDIVLznWnfk%2F22C0sZalH9XSzIh47qOfoptfaCOiUhS5RXakICZBZp1HT1QYS3oyO1ZJRW6TSuFLCeG%2BnQKprErpJXYquSZ0LzYJB6ZZSYgWj5VfW1iKWhpJMS8sCPVcXmmOZrlXqfO8qShqplTf65h8VYBOIa4YSwcr2ER4513xZttU1%2Fddi%2FK4sulXmqNihnWBhexUWymqNaHlV%2FQZh6M36AbUGDHZjr%2F7HvrK4fzgZSb5nxmSuShTZgU8F6Q433NinfXBii%2B8o81qEZtVJYub0P4RkrBlCK5j1fE80esaqpj0OpwESkj8fBKWZWvjkrhmpr3FZMw0JGyxAY6pgGblk2oWZzMtYGnuPxMQcwtUidmb9laR93Eptpvj%2BKaudppicPeofsfdKOyiOiMD6EhnrHCfRMMvx5blSl3EfCAaeuY%2BbIifMKa3PQ1MTTWaZEPcM91yqZqVsVAMwc%2FqzHAGwjYgvJYHkO8KIv6ES2MMyn5rTEUpbBShtRQ1aBoOL3LwaRQMUbSNgDwc7svJ6IcXVp3mYF9OFuqtKB3mGBau%2FoOYnQ7&X-Amz-Signature=1716e0817da812fdd6498dfb7d73338803d57be5eedc7c0e52eb122cef919e8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75MJ6XX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9SC3dDD%2BAiBXLq88HeqiqdjxscW399c0ps%2FizxZr%2FHAiAoRuHcKuFSWcfbUSZCu%2FchX6w%2Fuor9j7H62zRlzWz9kSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlltZSRNzRvPh%2FsiCKtwDOCvhUFANJM%2ByDBvtFiPOIlWMmk3WeQXTRIUHv2KNSs5NiyrBXWRH9XeBivzAsrtFyDXb%2Fl47uNaoN88Qohb7kwZ416mEdJCWtwRCQu%2FUG3xDJGdSjwOBlP2%2BxUNIHIftKvD1QJKAd%2FCPt06MYUo1sBrJRphltA6TFzfVjJD91tmTYgSkpUz0Qt8rVqh1IlEl2tNNyDMQiKcwA1lnWkQxzgkeVKEJEshfcG2jFjsFNYoXBcupNGu6mDXe48rcRC4EYDseLccwt9z%2B5lo2Fp3EIKdIeUYVa223QN8rRWut0knpSvG0vXDIVLznWnfk%2F22C0sZalH9XSzIh47qOfoptfaCOiUhS5RXakICZBZp1HT1QYS3oyO1ZJRW6TSuFLCeG%2BnQKprErpJXYquSZ0LzYJB6ZZSYgWj5VfW1iKWhpJMS8sCPVcXmmOZrlXqfO8qShqplTf65h8VYBOIa4YSwcr2ER4513xZttU1%2Fddi%2FK4sulXmqNihnWBhexUWymqNaHlV%2FQZh6M36AbUGDHZjr%2F7HvrK4fzgZSb5nxmSuShTZgU8F6Q433NinfXBii%2B8o81qEZtVJYub0P4RkrBlCK5j1fE80esaqpj0OpwESkj8fBKWZWvjkrhmpr3FZMw0JGyxAY6pgGblk2oWZzMtYGnuPxMQcwtUidmb9laR93Eptpvj%2BKaudppicPeofsfdKOyiOiMD6EhnrHCfRMMvx5blSl3EfCAaeuY%2BbIifMKa3PQ1MTTWaZEPcM91yqZqVsVAMwc%2FqzHAGwjYgvJYHkO8KIv6ES2MMyn5rTEUpbBShtRQ1aBoOL3LwaRQMUbSNgDwc7svJ6IcXVp3mYF9OFuqtKB3mGBau%2FoOYnQ7&X-Amz-Signature=74fb842a820836a4e31c5124dac0faf6eeae23510d4f473faa7151c5abab066a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75MJ6XX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9SC3dDD%2BAiBXLq88HeqiqdjxscW399c0ps%2FizxZr%2FHAiAoRuHcKuFSWcfbUSZCu%2FchX6w%2Fuor9j7H62zRlzWz9kSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlltZSRNzRvPh%2FsiCKtwDOCvhUFANJM%2ByDBvtFiPOIlWMmk3WeQXTRIUHv2KNSs5NiyrBXWRH9XeBivzAsrtFyDXb%2Fl47uNaoN88Qohb7kwZ416mEdJCWtwRCQu%2FUG3xDJGdSjwOBlP2%2BxUNIHIftKvD1QJKAd%2FCPt06MYUo1sBrJRphltA6TFzfVjJD91tmTYgSkpUz0Qt8rVqh1IlEl2tNNyDMQiKcwA1lnWkQxzgkeVKEJEshfcG2jFjsFNYoXBcupNGu6mDXe48rcRC4EYDseLccwt9z%2B5lo2Fp3EIKdIeUYVa223QN8rRWut0knpSvG0vXDIVLznWnfk%2F22C0sZalH9XSzIh47qOfoptfaCOiUhS5RXakICZBZp1HT1QYS3oyO1ZJRW6TSuFLCeG%2BnQKprErpJXYquSZ0LzYJB6ZZSYgWj5VfW1iKWhpJMS8sCPVcXmmOZrlXqfO8qShqplTf65h8VYBOIa4YSwcr2ER4513xZttU1%2Fddi%2FK4sulXmqNihnWBhexUWymqNaHlV%2FQZh6M36AbUGDHZjr%2F7HvrK4fzgZSb5nxmSuShTZgU8F6Q433NinfXBii%2B8o81qEZtVJYub0P4RkrBlCK5j1fE80esaqpj0OpwESkj8fBKWZWvjkrhmpr3FZMw0JGyxAY6pgGblk2oWZzMtYGnuPxMQcwtUidmb9laR93Eptpvj%2BKaudppicPeofsfdKOyiOiMD6EhnrHCfRMMvx5blSl3EfCAaeuY%2BbIifMKa3PQ1MTTWaZEPcM91yqZqVsVAMwc%2FqzHAGwjYgvJYHkO8KIv6ES2MMyn5rTEUpbBShtRQ1aBoOL3LwaRQMUbSNgDwc7svJ6IcXVp3mYF9OFuqtKB3mGBau%2FoOYnQ7&X-Amz-Signature=cb1661e5739fb58008f3a1a459b25d4d4cd81e66b028a634819020e814f27696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75MJ6XX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9SC3dDD%2BAiBXLq88HeqiqdjxscW399c0ps%2FizxZr%2FHAiAoRuHcKuFSWcfbUSZCu%2FchX6w%2Fuor9j7H62zRlzWz9kSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlltZSRNzRvPh%2FsiCKtwDOCvhUFANJM%2ByDBvtFiPOIlWMmk3WeQXTRIUHv2KNSs5NiyrBXWRH9XeBivzAsrtFyDXb%2Fl47uNaoN88Qohb7kwZ416mEdJCWtwRCQu%2FUG3xDJGdSjwOBlP2%2BxUNIHIftKvD1QJKAd%2FCPt06MYUo1sBrJRphltA6TFzfVjJD91tmTYgSkpUz0Qt8rVqh1IlEl2tNNyDMQiKcwA1lnWkQxzgkeVKEJEshfcG2jFjsFNYoXBcupNGu6mDXe48rcRC4EYDseLccwt9z%2B5lo2Fp3EIKdIeUYVa223QN8rRWut0knpSvG0vXDIVLznWnfk%2F22C0sZalH9XSzIh47qOfoptfaCOiUhS5RXakICZBZp1HT1QYS3oyO1ZJRW6TSuFLCeG%2BnQKprErpJXYquSZ0LzYJB6ZZSYgWj5VfW1iKWhpJMS8sCPVcXmmOZrlXqfO8qShqplTf65h8VYBOIa4YSwcr2ER4513xZttU1%2Fddi%2FK4sulXmqNihnWBhexUWymqNaHlV%2FQZh6M36AbUGDHZjr%2F7HvrK4fzgZSb5nxmSuShTZgU8F6Q433NinfXBii%2B8o81qEZtVJYub0P4RkrBlCK5j1fE80esaqpj0OpwESkj8fBKWZWvjkrhmpr3FZMw0JGyxAY6pgGblk2oWZzMtYGnuPxMQcwtUidmb9laR93Eptpvj%2BKaudppicPeofsfdKOyiOiMD6EhnrHCfRMMvx5blSl3EfCAaeuY%2BbIifMKa3PQ1MTTWaZEPcM91yqZqVsVAMwc%2FqzHAGwjYgvJYHkO8KIv6ES2MMyn5rTEUpbBShtRQ1aBoOL3LwaRQMUbSNgDwc7svJ6IcXVp3mYF9OFuqtKB3mGBau%2FoOYnQ7&X-Amz-Signature=8afae2f713afd75ebe440ce0f83b2e7b287f85393ae882d19d414f04222f9850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75MJ6XX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9SC3dDD%2BAiBXLq88HeqiqdjxscW399c0ps%2FizxZr%2FHAiAoRuHcKuFSWcfbUSZCu%2FchX6w%2Fuor9j7H62zRlzWz9kSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlltZSRNzRvPh%2FsiCKtwDOCvhUFANJM%2ByDBvtFiPOIlWMmk3WeQXTRIUHv2KNSs5NiyrBXWRH9XeBivzAsrtFyDXb%2Fl47uNaoN88Qohb7kwZ416mEdJCWtwRCQu%2FUG3xDJGdSjwOBlP2%2BxUNIHIftKvD1QJKAd%2FCPt06MYUo1sBrJRphltA6TFzfVjJD91tmTYgSkpUz0Qt8rVqh1IlEl2tNNyDMQiKcwA1lnWkQxzgkeVKEJEshfcG2jFjsFNYoXBcupNGu6mDXe48rcRC4EYDseLccwt9z%2B5lo2Fp3EIKdIeUYVa223QN8rRWut0knpSvG0vXDIVLznWnfk%2F22C0sZalH9XSzIh47qOfoptfaCOiUhS5RXakICZBZp1HT1QYS3oyO1ZJRW6TSuFLCeG%2BnQKprErpJXYquSZ0LzYJB6ZZSYgWj5VfW1iKWhpJMS8sCPVcXmmOZrlXqfO8qShqplTf65h8VYBOIa4YSwcr2ER4513xZttU1%2Fddi%2FK4sulXmqNihnWBhexUWymqNaHlV%2FQZh6M36AbUGDHZjr%2F7HvrK4fzgZSb5nxmSuShTZgU8F6Q433NinfXBii%2B8o81qEZtVJYub0P4RkrBlCK5j1fE80esaqpj0OpwESkj8fBKWZWvjkrhmpr3FZMw0JGyxAY6pgGblk2oWZzMtYGnuPxMQcwtUidmb9laR93Eptpvj%2BKaudppicPeofsfdKOyiOiMD6EhnrHCfRMMvx5blSl3EfCAaeuY%2BbIifMKa3PQ1MTTWaZEPcM91yqZqVsVAMwc%2FqzHAGwjYgvJYHkO8KIv6ES2MMyn5rTEUpbBShtRQ1aBoOL3LwaRQMUbSNgDwc7svJ6IcXVp3mYF9OFuqtKB3mGBau%2FoOYnQ7&X-Amz-Signature=7a42dc9da38b89cf4d019442726ef75633c206410804af78ffef1a0a49ac59f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75MJ6XX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9SC3dDD%2BAiBXLq88HeqiqdjxscW399c0ps%2FizxZr%2FHAiAoRuHcKuFSWcfbUSZCu%2FchX6w%2Fuor9j7H62zRlzWz9kSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlltZSRNzRvPh%2FsiCKtwDOCvhUFANJM%2ByDBvtFiPOIlWMmk3WeQXTRIUHv2KNSs5NiyrBXWRH9XeBivzAsrtFyDXb%2Fl47uNaoN88Qohb7kwZ416mEdJCWtwRCQu%2FUG3xDJGdSjwOBlP2%2BxUNIHIftKvD1QJKAd%2FCPt06MYUo1sBrJRphltA6TFzfVjJD91tmTYgSkpUz0Qt8rVqh1IlEl2tNNyDMQiKcwA1lnWkQxzgkeVKEJEshfcG2jFjsFNYoXBcupNGu6mDXe48rcRC4EYDseLccwt9z%2B5lo2Fp3EIKdIeUYVa223QN8rRWut0knpSvG0vXDIVLznWnfk%2F22C0sZalH9XSzIh47qOfoptfaCOiUhS5RXakICZBZp1HT1QYS3oyO1ZJRW6TSuFLCeG%2BnQKprErpJXYquSZ0LzYJB6ZZSYgWj5VfW1iKWhpJMS8sCPVcXmmOZrlXqfO8qShqplTf65h8VYBOIa4YSwcr2ER4513xZttU1%2Fddi%2FK4sulXmqNihnWBhexUWymqNaHlV%2FQZh6M36AbUGDHZjr%2F7HvrK4fzgZSb5nxmSuShTZgU8F6Q433NinfXBii%2B8o81qEZtVJYub0P4RkrBlCK5j1fE80esaqpj0OpwESkj8fBKWZWvjkrhmpr3FZMw0JGyxAY6pgGblk2oWZzMtYGnuPxMQcwtUidmb9laR93Eptpvj%2BKaudppicPeofsfdKOyiOiMD6EhnrHCfRMMvx5blSl3EfCAaeuY%2BbIifMKa3PQ1MTTWaZEPcM91yqZqVsVAMwc%2FqzHAGwjYgvJYHkO8KIv6ES2MMyn5rTEUpbBShtRQ1aBoOL3LwaRQMUbSNgDwc7svJ6IcXVp3mYF9OFuqtKB3mGBau%2FoOYnQ7&X-Amz-Signature=d696b52a49140eeab536d2eb24d51a0ccbf834ed0455e9ce79c1a11130813614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75MJ6XX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9SC3dDD%2BAiBXLq88HeqiqdjxscW399c0ps%2FizxZr%2FHAiAoRuHcKuFSWcfbUSZCu%2FchX6w%2Fuor9j7H62zRlzWz9kSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlltZSRNzRvPh%2FsiCKtwDOCvhUFANJM%2ByDBvtFiPOIlWMmk3WeQXTRIUHv2KNSs5NiyrBXWRH9XeBivzAsrtFyDXb%2Fl47uNaoN88Qohb7kwZ416mEdJCWtwRCQu%2FUG3xDJGdSjwOBlP2%2BxUNIHIftKvD1QJKAd%2FCPt06MYUo1sBrJRphltA6TFzfVjJD91tmTYgSkpUz0Qt8rVqh1IlEl2tNNyDMQiKcwA1lnWkQxzgkeVKEJEshfcG2jFjsFNYoXBcupNGu6mDXe48rcRC4EYDseLccwt9z%2B5lo2Fp3EIKdIeUYVa223QN8rRWut0knpSvG0vXDIVLznWnfk%2F22C0sZalH9XSzIh47qOfoptfaCOiUhS5RXakICZBZp1HT1QYS3oyO1ZJRW6TSuFLCeG%2BnQKprErpJXYquSZ0LzYJB6ZZSYgWj5VfW1iKWhpJMS8sCPVcXmmOZrlXqfO8qShqplTf65h8VYBOIa4YSwcr2ER4513xZttU1%2Fddi%2FK4sulXmqNihnWBhexUWymqNaHlV%2FQZh6M36AbUGDHZjr%2F7HvrK4fzgZSb5nxmSuShTZgU8F6Q433NinfXBii%2B8o81qEZtVJYub0P4RkrBlCK5j1fE80esaqpj0OpwESkj8fBKWZWvjkrhmpr3FZMw0JGyxAY6pgGblk2oWZzMtYGnuPxMQcwtUidmb9laR93Eptpvj%2BKaudppicPeofsfdKOyiOiMD6EhnrHCfRMMvx5blSl3EfCAaeuY%2BbIifMKa3PQ1MTTWaZEPcM91yqZqVsVAMwc%2FqzHAGwjYgvJYHkO8KIv6ES2MMyn5rTEUpbBShtRQ1aBoOL3LwaRQMUbSNgDwc7svJ6IcXVp3mYF9OFuqtKB3mGBau%2FoOYnQ7&X-Amz-Signature=67227799fd98887eb19bc7f420c7c3fe7bcd9b3cc8cc5dc5df38b8cf9eaa8f67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75MJ6XX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9SC3dDD%2BAiBXLq88HeqiqdjxscW399c0ps%2FizxZr%2FHAiAoRuHcKuFSWcfbUSZCu%2FchX6w%2Fuor9j7H62zRlzWz9kSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlltZSRNzRvPh%2FsiCKtwDOCvhUFANJM%2ByDBvtFiPOIlWMmk3WeQXTRIUHv2KNSs5NiyrBXWRH9XeBivzAsrtFyDXb%2Fl47uNaoN88Qohb7kwZ416mEdJCWtwRCQu%2FUG3xDJGdSjwOBlP2%2BxUNIHIftKvD1QJKAd%2FCPt06MYUo1sBrJRphltA6TFzfVjJD91tmTYgSkpUz0Qt8rVqh1IlEl2tNNyDMQiKcwA1lnWkQxzgkeVKEJEshfcG2jFjsFNYoXBcupNGu6mDXe48rcRC4EYDseLccwt9z%2B5lo2Fp3EIKdIeUYVa223QN8rRWut0knpSvG0vXDIVLznWnfk%2F22C0sZalH9XSzIh47qOfoptfaCOiUhS5RXakICZBZp1HT1QYS3oyO1ZJRW6TSuFLCeG%2BnQKprErpJXYquSZ0LzYJB6ZZSYgWj5VfW1iKWhpJMS8sCPVcXmmOZrlXqfO8qShqplTf65h8VYBOIa4YSwcr2ER4513xZttU1%2Fddi%2FK4sulXmqNihnWBhexUWymqNaHlV%2FQZh6M36AbUGDHZjr%2F7HvrK4fzgZSb5nxmSuShTZgU8F6Q433NinfXBii%2B8o81qEZtVJYub0P4RkrBlCK5j1fE80esaqpj0OpwESkj8fBKWZWvjkrhmpr3FZMw0JGyxAY6pgGblk2oWZzMtYGnuPxMQcwtUidmb9laR93Eptpvj%2BKaudppicPeofsfdKOyiOiMD6EhnrHCfRMMvx5blSl3EfCAaeuY%2BbIifMKa3PQ1MTTWaZEPcM91yqZqVsVAMwc%2FqzHAGwjYgvJYHkO8KIv6ES2MMyn5rTEUpbBShtRQ1aBoOL3LwaRQMUbSNgDwc7svJ6IcXVp3mYF9OFuqtKB3mGBau%2FoOYnQ7&X-Amz-Signature=e05179e45ab7512399179db4bc3718f988edb2ba575ece24764a730388794851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

Types of blocks in URDF:

- robot
- vars/Properties
- macros
	- inertial
		- origin
		- mass
		- inertia
- link:
	- visual
		- geometry
			- box
			- cylinder
			- sphere
		- material
			- color
	- collision
		- ~~origin~~
		- geometry
		- friction
	- xacro:box_inertia
	- xacro:cylinder_inertia
	- xacro:sphere_inertia
- joint:
	- parent
	- child
	- ~~origin~~
- xacro:wheel

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
        <surface><friction><ode>
          <mu>1.0</mu>
          <mu2>1.0</mu2>
          <fdir1>1 0 0</fdir1>
        </ode></friction></surface>
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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75MJ6XX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9SC3dDD%2BAiBXLq88HeqiqdjxscW399c0ps%2FizxZr%2FHAiAoRuHcKuFSWcfbUSZCu%2FchX6w%2Fuor9j7H62zRlzWz9kSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlltZSRNzRvPh%2FsiCKtwDOCvhUFANJM%2ByDBvtFiPOIlWMmk3WeQXTRIUHv2KNSs5NiyrBXWRH9XeBivzAsrtFyDXb%2Fl47uNaoN88Qohb7kwZ416mEdJCWtwRCQu%2FUG3xDJGdSjwOBlP2%2BxUNIHIftKvD1QJKAd%2FCPt06MYUo1sBrJRphltA6TFzfVjJD91tmTYgSkpUz0Qt8rVqh1IlEl2tNNyDMQiKcwA1lnWkQxzgkeVKEJEshfcG2jFjsFNYoXBcupNGu6mDXe48rcRC4EYDseLccwt9z%2B5lo2Fp3EIKdIeUYVa223QN8rRWut0knpSvG0vXDIVLznWnfk%2F22C0sZalH9XSzIh47qOfoptfaCOiUhS5RXakICZBZp1HT1QYS3oyO1ZJRW6TSuFLCeG%2BnQKprErpJXYquSZ0LzYJB6ZZSYgWj5VfW1iKWhpJMS8sCPVcXmmOZrlXqfO8qShqplTf65h8VYBOIa4YSwcr2ER4513xZttU1%2Fddi%2FK4sulXmqNihnWBhexUWymqNaHlV%2FQZh6M36AbUGDHZjr%2F7HvrK4fzgZSb5nxmSuShTZgU8F6Q433NinfXBii%2B8o81qEZtVJYub0P4RkrBlCK5j1fE80esaqpj0OpwESkj8fBKWZWvjkrhmpr3FZMw0JGyxAY6pgGblk2oWZzMtYGnuPxMQcwtUidmb9laR93Eptpvj%2BKaudppicPeofsfdKOyiOiMD6EhnrHCfRMMvx5blSl3EfCAaeuY%2BbIifMKa3PQ1MTTWaZEPcM91yqZqVsVAMwc%2FqzHAGwjYgvJYHkO8KIv6ES2MMyn5rTEUpbBShtRQ1aBoOL3LwaRQMUbSNgDwc7svJ6IcXVp3mYF9OFuqtKB3mGBau%2FoOYnQ7&X-Amz-Signature=3235d0078d6c51e7c4448945dabdcdbcea63a235d90fb1a47f6991662b6903ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75MJ6XX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9SC3dDD%2BAiBXLq88HeqiqdjxscW399c0ps%2FizxZr%2FHAiAoRuHcKuFSWcfbUSZCu%2FchX6w%2Fuor9j7H62zRlzWz9kSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlltZSRNzRvPh%2FsiCKtwDOCvhUFANJM%2ByDBvtFiPOIlWMmk3WeQXTRIUHv2KNSs5NiyrBXWRH9XeBivzAsrtFyDXb%2Fl47uNaoN88Qohb7kwZ416mEdJCWtwRCQu%2FUG3xDJGdSjwOBlP2%2BxUNIHIftKvD1QJKAd%2FCPt06MYUo1sBrJRphltA6TFzfVjJD91tmTYgSkpUz0Qt8rVqh1IlEl2tNNyDMQiKcwA1lnWkQxzgkeVKEJEshfcG2jFjsFNYoXBcupNGu6mDXe48rcRC4EYDseLccwt9z%2B5lo2Fp3EIKdIeUYVa223QN8rRWut0knpSvG0vXDIVLznWnfk%2F22C0sZalH9XSzIh47qOfoptfaCOiUhS5RXakICZBZp1HT1QYS3oyO1ZJRW6TSuFLCeG%2BnQKprErpJXYquSZ0LzYJB6ZZSYgWj5VfW1iKWhpJMS8sCPVcXmmOZrlXqfO8qShqplTf65h8VYBOIa4YSwcr2ER4513xZttU1%2Fddi%2FK4sulXmqNihnWBhexUWymqNaHlV%2FQZh6M36AbUGDHZjr%2F7HvrK4fzgZSb5nxmSuShTZgU8F6Q433NinfXBii%2B8o81qEZtVJYub0P4RkrBlCK5j1fE80esaqpj0OpwESkj8fBKWZWvjkrhmpr3FZMw0JGyxAY6pgGblk2oWZzMtYGnuPxMQcwtUidmb9laR93Eptpvj%2BKaudppicPeofsfdKOyiOiMD6EhnrHCfRMMvx5blSl3EfCAaeuY%2BbIifMKa3PQ1MTTWaZEPcM91yqZqVsVAMwc%2FqzHAGwjYgvJYHkO8KIv6ES2MMyn5rTEUpbBShtRQ1aBoOL3LwaRQMUbSNgDwc7svJ6IcXVp3mYF9OFuqtKB3mGBau%2FoOYnQ7&X-Amz-Signature=e129d21e96e542cf682ded0821e4166ce420a40434c2ae260210f66c02160c02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q75MJ6XX%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9SC3dDD%2BAiBXLq88HeqiqdjxscW399c0ps%2FizxZr%2FHAiAoRuHcKuFSWcfbUSZCu%2FchX6w%2Fuor9j7H62zRlzWz9kSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlltZSRNzRvPh%2FsiCKtwDOCvhUFANJM%2ByDBvtFiPOIlWMmk3WeQXTRIUHv2KNSs5NiyrBXWRH9XeBivzAsrtFyDXb%2Fl47uNaoN88Qohb7kwZ416mEdJCWtwRCQu%2FUG3xDJGdSjwOBlP2%2BxUNIHIftKvD1QJKAd%2FCPt06MYUo1sBrJRphltA6TFzfVjJD91tmTYgSkpUz0Qt8rVqh1IlEl2tNNyDMQiKcwA1lnWkQxzgkeVKEJEshfcG2jFjsFNYoXBcupNGu6mDXe48rcRC4EYDseLccwt9z%2B5lo2Fp3EIKdIeUYVa223QN8rRWut0knpSvG0vXDIVLznWnfk%2F22C0sZalH9XSzIh47qOfoptfaCOiUhS5RXakICZBZp1HT1QYS3oyO1ZJRW6TSuFLCeG%2BnQKprErpJXYquSZ0LzYJB6ZZSYgWj5VfW1iKWhpJMS8sCPVcXmmOZrlXqfO8qShqplTf65h8VYBOIa4YSwcr2ER4513xZttU1%2Fddi%2FK4sulXmqNihnWBhexUWymqNaHlV%2FQZh6M36AbUGDHZjr%2F7HvrK4fzgZSb5nxmSuShTZgU8F6Q433NinfXBii%2B8o81qEZtVJYub0P4RkrBlCK5j1fE80esaqpj0OpwESkj8fBKWZWvjkrhmpr3FZMw0JGyxAY6pgGblk2oWZzMtYGnuPxMQcwtUidmb9laR93Eptpvj%2BKaudppicPeofsfdKOyiOiMD6EhnrHCfRMMvx5blSl3EfCAaeuY%2BbIifMKa3PQ1MTTWaZEPcM91yqZqVsVAMwc%2FqzHAGwjYgvJYHkO8KIv6ES2MMyn5rTEUpbBShtRQ1aBoOL3LwaRQMUbSNgDwc7svJ6IcXVp3mYF9OFuqtKB3mGBau%2FoOYnQ7&X-Amz-Signature=d2d9062063ee2775823f0d45bb5d26b6ecaeb7ab5edfd5e3bef1763a796b0ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XVLAD6F%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWEuv9mrbip0yV04lenJabUFHzlxMoZ9%2BODXnFtwJtoAiEAjnobXWt7u2Cflrd0n7KFK3mOrIsyDZvk6zzsx%2Bj%2BD6IqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfQqw2GsFV%2BEsax%2BCrcA2lRuQfHt4OhzmDNv%2BRjnFEFxxXWqbyU9MYgT9wu8mODolws%2BVdOGQWyA7QVMXbil12tO4nIAUhEntD8jqCApgOQPwlMBWLQ5kGTtBUW0fbKSMoyDR%2FMuM0k0AGowG9JYHXg%2FwNd5TtsuP5cwXaT8Tk9uuzgV4WUVCk31yS7dc%2Fs7rhNpUHy%2Br7gEiMg%2Fm9OQqNWnVubV%2FI5vv97qDvgA0ugqHJSQbRVWHK%2FJ1MU2ROuFhM%2FXFJj0UPVPALOnzfgTljHjlXh3bNVxY%2BV1%2F9bQRBSR2LbJpLlCL3fqr2lAgiDm42yvPPqOs6ny1xizKNnKu5S%2FD2at5L%2Bzn%2BuQS6F4kv8sCk%2BTwYQ%2FtstOrCXSkIypKiwzbvgAD56g6NbOoKaUWYh4C%2FfdKZV9dughsfcCYhGtnX%2F0IfgeDnju6YR1iQNL8GMklAqO7jpya39MGZydfXWvkJ2pV%2FM%2FbtIt7pAxjn8YrT5JD1R7vyKRCsZURhv0pp9cwzEc75JA28CvLnQGixcPuNxCcJRiMsZT4Gh0Pk3G37ZkznDz7kKcGLrX1EFETsy1C%2B1Zoe7zB6eS1jAEIQVLTPaYhdVIU3i3useX6efhswqNpQ5LsJoNw9kzNyCrZ5UcFm%2FKOK3iyhDMOSQssQGOqUBWZaYuH7JJGu9jAn16TzTPv6vkTRWWIOU5YTzjBQQxcP%2B3zsVDdD3rS91vWz8Vf220k8VsTnG0RoCHGvFGvB3Sk0kv4YHziEww6ZJBsAQWKezYnXk3%2FF44l1yqTNCD1Nwl8OnBXMSNzrKwFNxbBD8MYEdwjaImCc6G8UOt5WhBy8C4AtV4%2B%2FNGb9t8WkZ8XHscb9BGOgRtIT0Jls3vjwBAp3X9qAf&X-Amz-Signature=5807b076e2ae6f86be81b2a16e3b3df81dfce0552a4487b962a50e96cb3eba40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XVLAD6F%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWEuv9mrbip0yV04lenJabUFHzlxMoZ9%2BODXnFtwJtoAiEAjnobXWt7u2Cflrd0n7KFK3mOrIsyDZvk6zzsx%2Bj%2BD6IqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfQqw2GsFV%2BEsax%2BCrcA2lRuQfHt4OhzmDNv%2BRjnFEFxxXWqbyU9MYgT9wu8mODolws%2BVdOGQWyA7QVMXbil12tO4nIAUhEntD8jqCApgOQPwlMBWLQ5kGTtBUW0fbKSMoyDR%2FMuM0k0AGowG9JYHXg%2FwNd5TtsuP5cwXaT8Tk9uuzgV4WUVCk31yS7dc%2Fs7rhNpUHy%2Br7gEiMg%2Fm9OQqNWnVubV%2FI5vv97qDvgA0ugqHJSQbRVWHK%2FJ1MU2ROuFhM%2FXFJj0UPVPALOnzfgTljHjlXh3bNVxY%2BV1%2F9bQRBSR2LbJpLlCL3fqr2lAgiDm42yvPPqOs6ny1xizKNnKu5S%2FD2at5L%2Bzn%2BuQS6F4kv8sCk%2BTwYQ%2FtstOrCXSkIypKiwzbvgAD56g6NbOoKaUWYh4C%2FfdKZV9dughsfcCYhGtnX%2F0IfgeDnju6YR1iQNL8GMklAqO7jpya39MGZydfXWvkJ2pV%2FM%2FbtIt7pAxjn8YrT5JD1R7vyKRCsZURhv0pp9cwzEc75JA28CvLnQGixcPuNxCcJRiMsZT4Gh0Pk3G37ZkznDz7kKcGLrX1EFETsy1C%2B1Zoe7zB6eS1jAEIQVLTPaYhdVIU3i3useX6efhswqNpQ5LsJoNw9kzNyCrZ5UcFm%2FKOK3iyhDMOSQssQGOqUBWZaYuH7JJGu9jAn16TzTPv6vkTRWWIOU5YTzjBQQxcP%2B3zsVDdD3rS91vWz8Vf220k8VsTnG0RoCHGvFGvB3Sk0kv4YHziEww6ZJBsAQWKezYnXk3%2FF44l1yqTNCD1Nwl8OnBXMSNzrKwFNxbBD8MYEdwjaImCc6G8UOt5WhBy8C4AtV4%2B%2FNGb9t8WkZ8XHscb9BGOgRtIT0Jls3vjwBAp3X9qAf&X-Amz-Signature=d63fd30bcaa9d21365b36d69a02538729e64d9bc0737bc56d746bf338549c083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XVLAD6F%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWEuv9mrbip0yV04lenJabUFHzlxMoZ9%2BODXnFtwJtoAiEAjnobXWt7u2Cflrd0n7KFK3mOrIsyDZvk6zzsx%2Bj%2BD6IqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfQqw2GsFV%2BEsax%2BCrcA2lRuQfHt4OhzmDNv%2BRjnFEFxxXWqbyU9MYgT9wu8mODolws%2BVdOGQWyA7QVMXbil12tO4nIAUhEntD8jqCApgOQPwlMBWLQ5kGTtBUW0fbKSMoyDR%2FMuM0k0AGowG9JYHXg%2FwNd5TtsuP5cwXaT8Tk9uuzgV4WUVCk31yS7dc%2Fs7rhNpUHy%2Br7gEiMg%2Fm9OQqNWnVubV%2FI5vv97qDvgA0ugqHJSQbRVWHK%2FJ1MU2ROuFhM%2FXFJj0UPVPALOnzfgTljHjlXh3bNVxY%2BV1%2F9bQRBSR2LbJpLlCL3fqr2lAgiDm42yvPPqOs6ny1xizKNnKu5S%2FD2at5L%2Bzn%2BuQS6F4kv8sCk%2BTwYQ%2FtstOrCXSkIypKiwzbvgAD56g6NbOoKaUWYh4C%2FfdKZV9dughsfcCYhGtnX%2F0IfgeDnju6YR1iQNL8GMklAqO7jpya39MGZydfXWvkJ2pV%2FM%2FbtIt7pAxjn8YrT5JD1R7vyKRCsZURhv0pp9cwzEc75JA28CvLnQGixcPuNxCcJRiMsZT4Gh0Pk3G37ZkznDz7kKcGLrX1EFETsy1C%2B1Zoe7zB6eS1jAEIQVLTPaYhdVIU3i3useX6efhswqNpQ5LsJoNw9kzNyCrZ5UcFm%2FKOK3iyhDMOSQssQGOqUBWZaYuH7JJGu9jAn16TzTPv6vkTRWWIOU5YTzjBQQxcP%2B3zsVDdD3rS91vWz8Vf220k8VsTnG0RoCHGvFGvB3Sk0kv4YHziEww6ZJBsAQWKezYnXk3%2FF44l1yqTNCD1Nwl8OnBXMSNzrKwFNxbBD8MYEdwjaImCc6G8UOt5WhBy8C4AtV4%2B%2FNGb9t8WkZ8XHscb9BGOgRtIT0Jls3vjwBAp3X9qAf&X-Amz-Signature=7f7b6f131d4b06f653d3217a611448b82ca22b9ff273072bc009cbc4e6b6af33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XVLAD6F%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWEuv9mrbip0yV04lenJabUFHzlxMoZ9%2BODXnFtwJtoAiEAjnobXWt7u2Cflrd0n7KFK3mOrIsyDZvk6zzsx%2Bj%2BD6IqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfQqw2GsFV%2BEsax%2BCrcA2lRuQfHt4OhzmDNv%2BRjnFEFxxXWqbyU9MYgT9wu8mODolws%2BVdOGQWyA7QVMXbil12tO4nIAUhEntD8jqCApgOQPwlMBWLQ5kGTtBUW0fbKSMoyDR%2FMuM0k0AGowG9JYHXg%2FwNd5TtsuP5cwXaT8Tk9uuzgV4WUVCk31yS7dc%2Fs7rhNpUHy%2Br7gEiMg%2Fm9OQqNWnVubV%2FI5vv97qDvgA0ugqHJSQbRVWHK%2FJ1MU2ROuFhM%2FXFJj0UPVPALOnzfgTljHjlXh3bNVxY%2BV1%2F9bQRBSR2LbJpLlCL3fqr2lAgiDm42yvPPqOs6ny1xizKNnKu5S%2FD2at5L%2Bzn%2BuQS6F4kv8sCk%2BTwYQ%2FtstOrCXSkIypKiwzbvgAD56g6NbOoKaUWYh4C%2FfdKZV9dughsfcCYhGtnX%2F0IfgeDnju6YR1iQNL8GMklAqO7jpya39MGZydfXWvkJ2pV%2FM%2FbtIt7pAxjn8YrT5JD1R7vyKRCsZURhv0pp9cwzEc75JA28CvLnQGixcPuNxCcJRiMsZT4Gh0Pk3G37ZkznDz7kKcGLrX1EFETsy1C%2B1Zoe7zB6eS1jAEIQVLTPaYhdVIU3i3useX6efhswqNpQ5LsJoNw9kzNyCrZ5UcFm%2FKOK3iyhDMOSQssQGOqUBWZaYuH7JJGu9jAn16TzTPv6vkTRWWIOU5YTzjBQQxcP%2B3zsVDdD3rS91vWz8Vf220k8VsTnG0RoCHGvFGvB3Sk0kv4YHziEww6ZJBsAQWKezYnXk3%2FF44l1yqTNCD1Nwl8OnBXMSNzrKwFNxbBD8MYEdwjaImCc6G8UOt5WhBy8C4AtV4%2B%2FNGb9t8WkZ8XHscb9BGOgRtIT0Jls3vjwBAp3X9qAf&X-Amz-Signature=6538bd4c9adc979df7873907b2bc37d90e692f60d754aa0c4953ed7143fc1c6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XVLAD6F%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWEuv9mrbip0yV04lenJabUFHzlxMoZ9%2BODXnFtwJtoAiEAjnobXWt7u2Cflrd0n7KFK3mOrIsyDZvk6zzsx%2Bj%2BD6IqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfQqw2GsFV%2BEsax%2BCrcA2lRuQfHt4OhzmDNv%2BRjnFEFxxXWqbyU9MYgT9wu8mODolws%2BVdOGQWyA7QVMXbil12tO4nIAUhEntD8jqCApgOQPwlMBWLQ5kGTtBUW0fbKSMoyDR%2FMuM0k0AGowG9JYHXg%2FwNd5TtsuP5cwXaT8Tk9uuzgV4WUVCk31yS7dc%2Fs7rhNpUHy%2Br7gEiMg%2Fm9OQqNWnVubV%2FI5vv97qDvgA0ugqHJSQbRVWHK%2FJ1MU2ROuFhM%2FXFJj0UPVPALOnzfgTljHjlXh3bNVxY%2BV1%2F9bQRBSR2LbJpLlCL3fqr2lAgiDm42yvPPqOs6ny1xizKNnKu5S%2FD2at5L%2Bzn%2BuQS6F4kv8sCk%2BTwYQ%2FtstOrCXSkIypKiwzbvgAD56g6NbOoKaUWYh4C%2FfdKZV9dughsfcCYhGtnX%2F0IfgeDnju6YR1iQNL8GMklAqO7jpya39MGZydfXWvkJ2pV%2FM%2FbtIt7pAxjn8YrT5JD1R7vyKRCsZURhv0pp9cwzEc75JA28CvLnQGixcPuNxCcJRiMsZT4Gh0Pk3G37ZkznDz7kKcGLrX1EFETsy1C%2B1Zoe7zB6eS1jAEIQVLTPaYhdVIU3i3useX6efhswqNpQ5LsJoNw9kzNyCrZ5UcFm%2FKOK3iyhDMOSQssQGOqUBWZaYuH7JJGu9jAn16TzTPv6vkTRWWIOU5YTzjBQQxcP%2B3zsVDdD3rS91vWz8Vf220k8VsTnG0RoCHGvFGvB3Sk0kv4YHziEww6ZJBsAQWKezYnXk3%2FF44l1yqTNCD1Nwl8OnBXMSNzrKwFNxbBD8MYEdwjaImCc6G8UOt5WhBy8C4AtV4%2B%2FNGb9t8WkZ8XHscb9BGOgRtIT0Jls3vjwBAp3X9qAf&X-Amz-Signature=3cff7acc8c38fcc33b6ddc2173efd653aa2f1aa02fb71b0bad9d7c74c65ef641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XVLAD6F%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWEuv9mrbip0yV04lenJabUFHzlxMoZ9%2BODXnFtwJtoAiEAjnobXWt7u2Cflrd0n7KFK3mOrIsyDZvk6zzsx%2Bj%2BD6IqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfQqw2GsFV%2BEsax%2BCrcA2lRuQfHt4OhzmDNv%2BRjnFEFxxXWqbyU9MYgT9wu8mODolws%2BVdOGQWyA7QVMXbil12tO4nIAUhEntD8jqCApgOQPwlMBWLQ5kGTtBUW0fbKSMoyDR%2FMuM0k0AGowG9JYHXg%2FwNd5TtsuP5cwXaT8Tk9uuzgV4WUVCk31yS7dc%2Fs7rhNpUHy%2Br7gEiMg%2Fm9OQqNWnVubV%2FI5vv97qDvgA0ugqHJSQbRVWHK%2FJ1MU2ROuFhM%2FXFJj0UPVPALOnzfgTljHjlXh3bNVxY%2BV1%2F9bQRBSR2LbJpLlCL3fqr2lAgiDm42yvPPqOs6ny1xizKNnKu5S%2FD2at5L%2Bzn%2BuQS6F4kv8sCk%2BTwYQ%2FtstOrCXSkIypKiwzbvgAD56g6NbOoKaUWYh4C%2FfdKZV9dughsfcCYhGtnX%2F0IfgeDnju6YR1iQNL8GMklAqO7jpya39MGZydfXWvkJ2pV%2FM%2FbtIt7pAxjn8YrT5JD1R7vyKRCsZURhv0pp9cwzEc75JA28CvLnQGixcPuNxCcJRiMsZT4Gh0Pk3G37ZkznDz7kKcGLrX1EFETsy1C%2B1Zoe7zB6eS1jAEIQVLTPaYhdVIU3i3useX6efhswqNpQ5LsJoNw9kzNyCrZ5UcFm%2FKOK3iyhDMOSQssQGOqUBWZaYuH7JJGu9jAn16TzTPv6vkTRWWIOU5YTzjBQQxcP%2B3zsVDdD3rS91vWz8Vf220k8VsTnG0RoCHGvFGvB3Sk0kv4YHziEww6ZJBsAQWKezYnXk3%2FF44l1yqTNCD1Nwl8OnBXMSNzrKwFNxbBD8MYEdwjaImCc6G8UOt5WhBy8C4AtV4%2B%2FNGb9t8WkZ8XHscb9BGOgRtIT0Jls3vjwBAp3X9qAf&X-Amz-Signature=9ca2377d7d6e43dbeb7ecd066476b8c5a0bb223889351fc0e11db96b51223f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XVLAD6F%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWEuv9mrbip0yV04lenJabUFHzlxMoZ9%2BODXnFtwJtoAiEAjnobXWt7u2Cflrd0n7KFK3mOrIsyDZvk6zzsx%2Bj%2BD6IqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfQqw2GsFV%2BEsax%2BCrcA2lRuQfHt4OhzmDNv%2BRjnFEFxxXWqbyU9MYgT9wu8mODolws%2BVdOGQWyA7QVMXbil12tO4nIAUhEntD8jqCApgOQPwlMBWLQ5kGTtBUW0fbKSMoyDR%2FMuM0k0AGowG9JYHXg%2FwNd5TtsuP5cwXaT8Tk9uuzgV4WUVCk31yS7dc%2Fs7rhNpUHy%2Br7gEiMg%2Fm9OQqNWnVubV%2FI5vv97qDvgA0ugqHJSQbRVWHK%2FJ1MU2ROuFhM%2FXFJj0UPVPALOnzfgTljHjlXh3bNVxY%2BV1%2F9bQRBSR2LbJpLlCL3fqr2lAgiDm42yvPPqOs6ny1xizKNnKu5S%2FD2at5L%2Bzn%2BuQS6F4kv8sCk%2BTwYQ%2FtstOrCXSkIypKiwzbvgAD56g6NbOoKaUWYh4C%2FfdKZV9dughsfcCYhGtnX%2F0IfgeDnju6YR1iQNL8GMklAqO7jpya39MGZydfXWvkJ2pV%2FM%2FbtIt7pAxjn8YrT5JD1R7vyKRCsZURhv0pp9cwzEc75JA28CvLnQGixcPuNxCcJRiMsZT4Gh0Pk3G37ZkznDz7kKcGLrX1EFETsy1C%2B1Zoe7zB6eS1jAEIQVLTPaYhdVIU3i3useX6efhswqNpQ5LsJoNw9kzNyCrZ5UcFm%2FKOK3iyhDMOSQssQGOqUBWZaYuH7JJGu9jAn16TzTPv6vkTRWWIOU5YTzjBQQxcP%2B3zsVDdD3rS91vWz8Vf220k8VsTnG0RoCHGvFGvB3Sk0kv4YHziEww6ZJBsAQWKezYnXk3%2FF44l1yqTNCD1Nwl8OnBXMSNzrKwFNxbBD8MYEdwjaImCc6G8UOt5WhBy8C4AtV4%2B%2FNGb9t8WkZ8XHscb9BGOgRtIT0Jls3vjwBAp3X9qAf&X-Amz-Signature=b62036a8b13c5a82ea6cfe2f05b09ba38d1b52f4ecef83a5f5359d3361b4267d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
