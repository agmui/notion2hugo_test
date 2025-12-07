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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCW4MU4V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF23rGBOAk3AwbX7HjLFE9LtMvLETQtGQEDptl%2FONcUoAiB3U%2FkUwMxUjlxvbKdq9%2B94kF4EmWnZriO4FoJXzjp7BSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5FBSuEej9Wdv4B6KtwD4Saci6gLUUhO5zjpoULbVYccUBA8Iad7hDR%2B%2FB5msjM71c9DAjMMwvkCagpJSKP%2FiBkYpclvkQiVNTS6gzRlPWdRGXOkx0ij0nBoYmwvCh4OqLu9o%2BVm5mpPg2BMWE2PcIl7Zz6r3EOTgdQLQDQrzC7toXIEtz%2FTr%2B36dxfUFwRO%2FYuTzIwLgsTPJ%2FndqXuxjO%2Bzei8Gp0nf%2Bg16mFtZQGaBPiVF81i0aGfavwkkV4NkSLlKj74a1M0qzOtulptzcvnUo71dL8xz9xcRp%2FLfKSjSYgjCYHKRir7lKOBnGB7gPgVxl4rmvmuLAxZ6BLdUBbj19NT7fAaXU1kLR3ERPsjraalEy1U9zlJ%2BbMLeJd4%2F5oG95pbhMpYEU%2B%2FunqqlTvR0QGavNcn9eU365PCLqlGCUcV1RvDSvagvcyWosY1NFkgtIfCRbcEAvVuoSYgFUB32ilBtuAZBZ4mxn8I7WNwQKpUVFGMUlG0Nc%2BBd0TEtXWSc3yaTf4IJpkqyYpUsECE6auIAr7OVQOlYcvxFE7JKHtZrc3tPANQ4n9blm6WXqxrmQ14YxvOn6BDK5RnI941DBLANL9x%2BPc6dnUCRwXeufz0rt487JAw13Oc%2FlNmXKkb0kyt4iz9P%2F38wiP3SyQY6pgF%2BKewKMJ32eepseufXe87xYF2x7UXRP2TjZiCNxsqAt3srZXWmHr0mRV4ruu2u%2BjIgLbE%2FlJAUT6DKUMHP9DplKiwK6w8bcpo408wTgcPan48KrBxI2Y35OMRv3YNvjcc11dy%2B2bC54Uqf377zz6scrUsM4pzjN8HlrlpnPmlOtsqAO687Fdal6z%2Bxcl6q2lWPMszL7D2o1LcFOj9T1ZxWyCo484Pj&X-Amz-Signature=f41dcfd0f1faf51058cb15ffb4c20ae41e0d6b4bea024b5568e538f9efba7afc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCW4MU4V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF23rGBOAk3AwbX7HjLFE9LtMvLETQtGQEDptl%2FONcUoAiB3U%2FkUwMxUjlxvbKdq9%2B94kF4EmWnZriO4FoJXzjp7BSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5FBSuEej9Wdv4B6KtwD4Saci6gLUUhO5zjpoULbVYccUBA8Iad7hDR%2B%2FB5msjM71c9DAjMMwvkCagpJSKP%2FiBkYpclvkQiVNTS6gzRlPWdRGXOkx0ij0nBoYmwvCh4OqLu9o%2BVm5mpPg2BMWE2PcIl7Zz6r3EOTgdQLQDQrzC7toXIEtz%2FTr%2B36dxfUFwRO%2FYuTzIwLgsTPJ%2FndqXuxjO%2Bzei8Gp0nf%2Bg16mFtZQGaBPiVF81i0aGfavwkkV4NkSLlKj74a1M0qzOtulptzcvnUo71dL8xz9xcRp%2FLfKSjSYgjCYHKRir7lKOBnGB7gPgVxl4rmvmuLAxZ6BLdUBbj19NT7fAaXU1kLR3ERPsjraalEy1U9zlJ%2BbMLeJd4%2F5oG95pbhMpYEU%2B%2FunqqlTvR0QGavNcn9eU365PCLqlGCUcV1RvDSvagvcyWosY1NFkgtIfCRbcEAvVuoSYgFUB32ilBtuAZBZ4mxn8I7WNwQKpUVFGMUlG0Nc%2BBd0TEtXWSc3yaTf4IJpkqyYpUsECE6auIAr7OVQOlYcvxFE7JKHtZrc3tPANQ4n9blm6WXqxrmQ14YxvOn6BDK5RnI941DBLANL9x%2BPc6dnUCRwXeufz0rt487JAw13Oc%2FlNmXKkb0kyt4iz9P%2F38wiP3SyQY6pgF%2BKewKMJ32eepseufXe87xYF2x7UXRP2TjZiCNxsqAt3srZXWmHr0mRV4ruu2u%2BjIgLbE%2FlJAUT6DKUMHP9DplKiwK6w8bcpo408wTgcPan48KrBxI2Y35OMRv3YNvjcc11dy%2B2bC54Uqf377zz6scrUsM4pzjN8HlrlpnPmlOtsqAO687Fdal6z%2Bxcl6q2lWPMszL7D2o1LcFOj9T1ZxWyCo484Pj&X-Amz-Signature=c2e28c42ff0e7c979da20cd768faceb6e014938c7974b62cf05749bcc8d14b23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCW4MU4V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF23rGBOAk3AwbX7HjLFE9LtMvLETQtGQEDptl%2FONcUoAiB3U%2FkUwMxUjlxvbKdq9%2B94kF4EmWnZriO4FoJXzjp7BSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5FBSuEej9Wdv4B6KtwD4Saci6gLUUhO5zjpoULbVYccUBA8Iad7hDR%2B%2FB5msjM71c9DAjMMwvkCagpJSKP%2FiBkYpclvkQiVNTS6gzRlPWdRGXOkx0ij0nBoYmwvCh4OqLu9o%2BVm5mpPg2BMWE2PcIl7Zz6r3EOTgdQLQDQrzC7toXIEtz%2FTr%2B36dxfUFwRO%2FYuTzIwLgsTPJ%2FndqXuxjO%2Bzei8Gp0nf%2Bg16mFtZQGaBPiVF81i0aGfavwkkV4NkSLlKj74a1M0qzOtulptzcvnUo71dL8xz9xcRp%2FLfKSjSYgjCYHKRir7lKOBnGB7gPgVxl4rmvmuLAxZ6BLdUBbj19NT7fAaXU1kLR3ERPsjraalEy1U9zlJ%2BbMLeJd4%2F5oG95pbhMpYEU%2B%2FunqqlTvR0QGavNcn9eU365PCLqlGCUcV1RvDSvagvcyWosY1NFkgtIfCRbcEAvVuoSYgFUB32ilBtuAZBZ4mxn8I7WNwQKpUVFGMUlG0Nc%2BBd0TEtXWSc3yaTf4IJpkqyYpUsECE6auIAr7OVQOlYcvxFE7JKHtZrc3tPANQ4n9blm6WXqxrmQ14YxvOn6BDK5RnI941DBLANL9x%2BPc6dnUCRwXeufz0rt487JAw13Oc%2FlNmXKkb0kyt4iz9P%2F38wiP3SyQY6pgF%2BKewKMJ32eepseufXe87xYF2x7UXRP2TjZiCNxsqAt3srZXWmHr0mRV4ruu2u%2BjIgLbE%2FlJAUT6DKUMHP9DplKiwK6w8bcpo408wTgcPan48KrBxI2Y35OMRv3YNvjcc11dy%2B2bC54Uqf377zz6scrUsM4pzjN8HlrlpnPmlOtsqAO687Fdal6z%2Bxcl6q2lWPMszL7D2o1LcFOj9T1ZxWyCo484Pj&X-Amz-Signature=b82390dd8f7b86f11ae8b79977775cc47663f71cb055fd0276a62ecf8f848c04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCW4MU4V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF23rGBOAk3AwbX7HjLFE9LtMvLETQtGQEDptl%2FONcUoAiB3U%2FkUwMxUjlxvbKdq9%2B94kF4EmWnZriO4FoJXzjp7BSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5FBSuEej9Wdv4B6KtwD4Saci6gLUUhO5zjpoULbVYccUBA8Iad7hDR%2B%2FB5msjM71c9DAjMMwvkCagpJSKP%2FiBkYpclvkQiVNTS6gzRlPWdRGXOkx0ij0nBoYmwvCh4OqLu9o%2BVm5mpPg2BMWE2PcIl7Zz6r3EOTgdQLQDQrzC7toXIEtz%2FTr%2B36dxfUFwRO%2FYuTzIwLgsTPJ%2FndqXuxjO%2Bzei8Gp0nf%2Bg16mFtZQGaBPiVF81i0aGfavwkkV4NkSLlKj74a1M0qzOtulptzcvnUo71dL8xz9xcRp%2FLfKSjSYgjCYHKRir7lKOBnGB7gPgVxl4rmvmuLAxZ6BLdUBbj19NT7fAaXU1kLR3ERPsjraalEy1U9zlJ%2BbMLeJd4%2F5oG95pbhMpYEU%2B%2FunqqlTvR0QGavNcn9eU365PCLqlGCUcV1RvDSvagvcyWosY1NFkgtIfCRbcEAvVuoSYgFUB32ilBtuAZBZ4mxn8I7WNwQKpUVFGMUlG0Nc%2BBd0TEtXWSc3yaTf4IJpkqyYpUsECE6auIAr7OVQOlYcvxFE7JKHtZrc3tPANQ4n9blm6WXqxrmQ14YxvOn6BDK5RnI941DBLANL9x%2BPc6dnUCRwXeufz0rt487JAw13Oc%2FlNmXKkb0kyt4iz9P%2F38wiP3SyQY6pgF%2BKewKMJ32eepseufXe87xYF2x7UXRP2TjZiCNxsqAt3srZXWmHr0mRV4ruu2u%2BjIgLbE%2FlJAUT6DKUMHP9DplKiwK6w8bcpo408wTgcPan48KrBxI2Y35OMRv3YNvjcc11dy%2B2bC54Uqf377zz6scrUsM4pzjN8HlrlpnPmlOtsqAO687Fdal6z%2Bxcl6q2lWPMszL7D2o1LcFOj9T1ZxWyCo484Pj&X-Amz-Signature=9f24fa085033cfac0ed266df78a7220c3ef51780db8be556d165f4ea7bd1f3f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCW4MU4V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF23rGBOAk3AwbX7HjLFE9LtMvLETQtGQEDptl%2FONcUoAiB3U%2FkUwMxUjlxvbKdq9%2B94kF4EmWnZriO4FoJXzjp7BSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5FBSuEej9Wdv4B6KtwD4Saci6gLUUhO5zjpoULbVYccUBA8Iad7hDR%2B%2FB5msjM71c9DAjMMwvkCagpJSKP%2FiBkYpclvkQiVNTS6gzRlPWdRGXOkx0ij0nBoYmwvCh4OqLu9o%2BVm5mpPg2BMWE2PcIl7Zz6r3EOTgdQLQDQrzC7toXIEtz%2FTr%2B36dxfUFwRO%2FYuTzIwLgsTPJ%2FndqXuxjO%2Bzei8Gp0nf%2Bg16mFtZQGaBPiVF81i0aGfavwkkV4NkSLlKj74a1M0qzOtulptzcvnUo71dL8xz9xcRp%2FLfKSjSYgjCYHKRir7lKOBnGB7gPgVxl4rmvmuLAxZ6BLdUBbj19NT7fAaXU1kLR3ERPsjraalEy1U9zlJ%2BbMLeJd4%2F5oG95pbhMpYEU%2B%2FunqqlTvR0QGavNcn9eU365PCLqlGCUcV1RvDSvagvcyWosY1NFkgtIfCRbcEAvVuoSYgFUB32ilBtuAZBZ4mxn8I7WNwQKpUVFGMUlG0Nc%2BBd0TEtXWSc3yaTf4IJpkqyYpUsECE6auIAr7OVQOlYcvxFE7JKHtZrc3tPANQ4n9blm6WXqxrmQ14YxvOn6BDK5RnI941DBLANL9x%2BPc6dnUCRwXeufz0rt487JAw13Oc%2FlNmXKkb0kyt4iz9P%2F38wiP3SyQY6pgF%2BKewKMJ32eepseufXe87xYF2x7UXRP2TjZiCNxsqAt3srZXWmHr0mRV4ruu2u%2BjIgLbE%2FlJAUT6DKUMHP9DplKiwK6w8bcpo408wTgcPan48KrBxI2Y35OMRv3YNvjcc11dy%2B2bC54Uqf377zz6scrUsM4pzjN8HlrlpnPmlOtsqAO687Fdal6z%2Bxcl6q2lWPMszL7D2o1LcFOj9T1ZxWyCo484Pj&X-Amz-Signature=72863ae1998fcec851bacebb8da75e19e6221ba5a48fe5165499464d62db4361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCW4MU4V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF23rGBOAk3AwbX7HjLFE9LtMvLETQtGQEDptl%2FONcUoAiB3U%2FkUwMxUjlxvbKdq9%2B94kF4EmWnZriO4FoJXzjp7BSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5FBSuEej9Wdv4B6KtwD4Saci6gLUUhO5zjpoULbVYccUBA8Iad7hDR%2B%2FB5msjM71c9DAjMMwvkCagpJSKP%2FiBkYpclvkQiVNTS6gzRlPWdRGXOkx0ij0nBoYmwvCh4OqLu9o%2BVm5mpPg2BMWE2PcIl7Zz6r3EOTgdQLQDQrzC7toXIEtz%2FTr%2B36dxfUFwRO%2FYuTzIwLgsTPJ%2FndqXuxjO%2Bzei8Gp0nf%2Bg16mFtZQGaBPiVF81i0aGfavwkkV4NkSLlKj74a1M0qzOtulptzcvnUo71dL8xz9xcRp%2FLfKSjSYgjCYHKRir7lKOBnGB7gPgVxl4rmvmuLAxZ6BLdUBbj19NT7fAaXU1kLR3ERPsjraalEy1U9zlJ%2BbMLeJd4%2F5oG95pbhMpYEU%2B%2FunqqlTvR0QGavNcn9eU365PCLqlGCUcV1RvDSvagvcyWosY1NFkgtIfCRbcEAvVuoSYgFUB32ilBtuAZBZ4mxn8I7WNwQKpUVFGMUlG0Nc%2BBd0TEtXWSc3yaTf4IJpkqyYpUsECE6auIAr7OVQOlYcvxFE7JKHtZrc3tPANQ4n9blm6WXqxrmQ14YxvOn6BDK5RnI941DBLANL9x%2BPc6dnUCRwXeufz0rt487JAw13Oc%2FlNmXKkb0kyt4iz9P%2F38wiP3SyQY6pgF%2BKewKMJ32eepseufXe87xYF2x7UXRP2TjZiCNxsqAt3srZXWmHr0mRV4ruu2u%2BjIgLbE%2FlJAUT6DKUMHP9DplKiwK6w8bcpo408wTgcPan48KrBxI2Y35OMRv3YNvjcc11dy%2B2bC54Uqf377zz6scrUsM4pzjN8HlrlpnPmlOtsqAO687Fdal6z%2Bxcl6q2lWPMszL7D2o1LcFOj9T1ZxWyCo484Pj&X-Amz-Signature=930b79d69f3cd6cb5f325c7fc94ec532a058db0f44a19d483f4f5744e572b0b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCW4MU4V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF23rGBOAk3AwbX7HjLFE9LtMvLETQtGQEDptl%2FONcUoAiB3U%2FkUwMxUjlxvbKdq9%2B94kF4EmWnZriO4FoJXzjp7BSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5FBSuEej9Wdv4B6KtwD4Saci6gLUUhO5zjpoULbVYccUBA8Iad7hDR%2B%2FB5msjM71c9DAjMMwvkCagpJSKP%2FiBkYpclvkQiVNTS6gzRlPWdRGXOkx0ij0nBoYmwvCh4OqLu9o%2BVm5mpPg2BMWE2PcIl7Zz6r3EOTgdQLQDQrzC7toXIEtz%2FTr%2B36dxfUFwRO%2FYuTzIwLgsTPJ%2FndqXuxjO%2Bzei8Gp0nf%2Bg16mFtZQGaBPiVF81i0aGfavwkkV4NkSLlKj74a1M0qzOtulptzcvnUo71dL8xz9xcRp%2FLfKSjSYgjCYHKRir7lKOBnGB7gPgVxl4rmvmuLAxZ6BLdUBbj19NT7fAaXU1kLR3ERPsjraalEy1U9zlJ%2BbMLeJd4%2F5oG95pbhMpYEU%2B%2FunqqlTvR0QGavNcn9eU365PCLqlGCUcV1RvDSvagvcyWosY1NFkgtIfCRbcEAvVuoSYgFUB32ilBtuAZBZ4mxn8I7WNwQKpUVFGMUlG0Nc%2BBd0TEtXWSc3yaTf4IJpkqyYpUsECE6auIAr7OVQOlYcvxFE7JKHtZrc3tPANQ4n9blm6WXqxrmQ14YxvOn6BDK5RnI941DBLANL9x%2BPc6dnUCRwXeufz0rt487JAw13Oc%2FlNmXKkb0kyt4iz9P%2F38wiP3SyQY6pgF%2BKewKMJ32eepseufXe87xYF2x7UXRP2TjZiCNxsqAt3srZXWmHr0mRV4ruu2u%2BjIgLbE%2FlJAUT6DKUMHP9DplKiwK6w8bcpo408wTgcPan48KrBxI2Y35OMRv3YNvjcc11dy%2B2bC54Uqf377zz6scrUsM4pzjN8HlrlpnPmlOtsqAO687Fdal6z%2Bxcl6q2lWPMszL7D2o1LcFOj9T1ZxWyCo484Pj&X-Amz-Signature=005768bc274161cbf5b4894668bc3343caaa1336a0776148f6ec01e1530f9c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCW4MU4V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF23rGBOAk3AwbX7HjLFE9LtMvLETQtGQEDptl%2FONcUoAiB3U%2FkUwMxUjlxvbKdq9%2B94kF4EmWnZriO4FoJXzjp7BSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5FBSuEej9Wdv4B6KtwD4Saci6gLUUhO5zjpoULbVYccUBA8Iad7hDR%2B%2FB5msjM71c9DAjMMwvkCagpJSKP%2FiBkYpclvkQiVNTS6gzRlPWdRGXOkx0ij0nBoYmwvCh4OqLu9o%2BVm5mpPg2BMWE2PcIl7Zz6r3EOTgdQLQDQrzC7toXIEtz%2FTr%2B36dxfUFwRO%2FYuTzIwLgsTPJ%2FndqXuxjO%2Bzei8Gp0nf%2Bg16mFtZQGaBPiVF81i0aGfavwkkV4NkSLlKj74a1M0qzOtulptzcvnUo71dL8xz9xcRp%2FLfKSjSYgjCYHKRir7lKOBnGB7gPgVxl4rmvmuLAxZ6BLdUBbj19NT7fAaXU1kLR3ERPsjraalEy1U9zlJ%2BbMLeJd4%2F5oG95pbhMpYEU%2B%2FunqqlTvR0QGavNcn9eU365PCLqlGCUcV1RvDSvagvcyWosY1NFkgtIfCRbcEAvVuoSYgFUB32ilBtuAZBZ4mxn8I7WNwQKpUVFGMUlG0Nc%2BBd0TEtXWSc3yaTf4IJpkqyYpUsECE6auIAr7OVQOlYcvxFE7JKHtZrc3tPANQ4n9blm6WXqxrmQ14YxvOn6BDK5RnI941DBLANL9x%2BPc6dnUCRwXeufz0rt487JAw13Oc%2FlNmXKkb0kyt4iz9P%2F38wiP3SyQY6pgF%2BKewKMJ32eepseufXe87xYF2x7UXRP2TjZiCNxsqAt3srZXWmHr0mRV4ruu2u%2BjIgLbE%2FlJAUT6DKUMHP9DplKiwK6w8bcpo408wTgcPan48KrBxI2Y35OMRv3YNvjcc11dy%2B2bC54Uqf377zz6scrUsM4pzjN8HlrlpnPmlOtsqAO687Fdal6z%2Bxcl6q2lWPMszL7D2o1LcFOj9T1ZxWyCo484Pj&X-Amz-Signature=a0a1a1e96b090ec0a4412d625ef24837b1e6eaaca6106e19584cee4247639a5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCW4MU4V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF23rGBOAk3AwbX7HjLFE9LtMvLETQtGQEDptl%2FONcUoAiB3U%2FkUwMxUjlxvbKdq9%2B94kF4EmWnZriO4FoJXzjp7BSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5FBSuEej9Wdv4B6KtwD4Saci6gLUUhO5zjpoULbVYccUBA8Iad7hDR%2B%2FB5msjM71c9DAjMMwvkCagpJSKP%2FiBkYpclvkQiVNTS6gzRlPWdRGXOkx0ij0nBoYmwvCh4OqLu9o%2BVm5mpPg2BMWE2PcIl7Zz6r3EOTgdQLQDQrzC7toXIEtz%2FTr%2B36dxfUFwRO%2FYuTzIwLgsTPJ%2FndqXuxjO%2Bzei8Gp0nf%2Bg16mFtZQGaBPiVF81i0aGfavwkkV4NkSLlKj74a1M0qzOtulptzcvnUo71dL8xz9xcRp%2FLfKSjSYgjCYHKRir7lKOBnGB7gPgVxl4rmvmuLAxZ6BLdUBbj19NT7fAaXU1kLR3ERPsjraalEy1U9zlJ%2BbMLeJd4%2F5oG95pbhMpYEU%2B%2FunqqlTvR0QGavNcn9eU365PCLqlGCUcV1RvDSvagvcyWosY1NFkgtIfCRbcEAvVuoSYgFUB32ilBtuAZBZ4mxn8I7WNwQKpUVFGMUlG0Nc%2BBd0TEtXWSc3yaTf4IJpkqyYpUsECE6auIAr7OVQOlYcvxFE7JKHtZrc3tPANQ4n9blm6WXqxrmQ14YxvOn6BDK5RnI941DBLANL9x%2BPc6dnUCRwXeufz0rt487JAw13Oc%2FlNmXKkb0kyt4iz9P%2F38wiP3SyQY6pgF%2BKewKMJ32eepseufXe87xYF2x7UXRP2TjZiCNxsqAt3srZXWmHr0mRV4ruu2u%2BjIgLbE%2FlJAUT6DKUMHP9DplKiwK6w8bcpo408wTgcPan48KrBxI2Y35OMRv3YNvjcc11dy%2B2bC54Uqf377zz6scrUsM4pzjN8HlrlpnPmlOtsqAO687Fdal6z%2Bxcl6q2lWPMszL7D2o1LcFOj9T1ZxWyCo484Pj&X-Amz-Signature=2b84063dba794bbf5e269cecf234a40ac8f4311ca8fb202b53fa92d2a17800c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCW4MU4V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF23rGBOAk3AwbX7HjLFE9LtMvLETQtGQEDptl%2FONcUoAiB3U%2FkUwMxUjlxvbKdq9%2B94kF4EmWnZriO4FoJXzjp7BSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5FBSuEej9Wdv4B6KtwD4Saci6gLUUhO5zjpoULbVYccUBA8Iad7hDR%2B%2FB5msjM71c9DAjMMwvkCagpJSKP%2FiBkYpclvkQiVNTS6gzRlPWdRGXOkx0ij0nBoYmwvCh4OqLu9o%2BVm5mpPg2BMWE2PcIl7Zz6r3EOTgdQLQDQrzC7toXIEtz%2FTr%2B36dxfUFwRO%2FYuTzIwLgsTPJ%2FndqXuxjO%2Bzei8Gp0nf%2Bg16mFtZQGaBPiVF81i0aGfavwkkV4NkSLlKj74a1M0qzOtulptzcvnUo71dL8xz9xcRp%2FLfKSjSYgjCYHKRir7lKOBnGB7gPgVxl4rmvmuLAxZ6BLdUBbj19NT7fAaXU1kLR3ERPsjraalEy1U9zlJ%2BbMLeJd4%2F5oG95pbhMpYEU%2B%2FunqqlTvR0QGavNcn9eU365PCLqlGCUcV1RvDSvagvcyWosY1NFkgtIfCRbcEAvVuoSYgFUB32ilBtuAZBZ4mxn8I7WNwQKpUVFGMUlG0Nc%2BBd0TEtXWSc3yaTf4IJpkqyYpUsECE6auIAr7OVQOlYcvxFE7JKHtZrc3tPANQ4n9blm6WXqxrmQ14YxvOn6BDK5RnI941DBLANL9x%2BPc6dnUCRwXeufz0rt487JAw13Oc%2FlNmXKkb0kyt4iz9P%2F38wiP3SyQY6pgF%2BKewKMJ32eepseufXe87xYF2x7UXRP2TjZiCNxsqAt3srZXWmHr0mRV4ruu2u%2BjIgLbE%2FlJAUT6DKUMHP9DplKiwK6w8bcpo408wTgcPan48KrBxI2Y35OMRv3YNvjcc11dy%2B2bC54Uqf377zz6scrUsM4pzjN8HlrlpnPmlOtsqAO687Fdal6z%2Bxcl6q2lWPMszL7D2o1LcFOj9T1ZxWyCo484Pj&X-Amz-Signature=385af02825759dc34b671ebacae70de6ea27bd5f63affd5288a18d58ce2c96b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3FIX5HM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2jOpvP8gY4BY1%2BtH%2B1Tbdh0fOuikp8HsuWT43AnxV8wIgP3M8HWp2I0EJG0sIVjIIeCbl2334ZKgcIMS%2BUDZ%2FN9MqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrFLgjUh9h6rJYf3CrcA5RMD%2B64NLX7OyfQ01t4NfHvi6qzpEypCvWpqNnLLz0NdPf%2FF3cY%2FYKv4DUvEwzZ5Mroh5C1NMUG1J13YKMwxTlrUXQ3FyF9rkcG6bg%2Bj4TDW8myJvqnuVm0CIDQp8wH7mkTogyhhhaCsivWcUjpPHY8UoiPKpUpIAKUXFzrHxvZrEVNTv18WUnFFMWFrCNzq%2F%2FiIoCYPPDS3T%2BeSUemkcgOrVk2Xn%2F%2FHkciluQ4U4N95lk3icm4uLZllknCo%2FrELm8ncsJqyusgeIIU1S92Dr0FoKodKXijGa%2BYG4aDR40%2Fee1ktXNKoi7Xb33Hr4t5ouThh%2BeM5GDWZRY9dYSnY6qpEXHO%2FyFNHRSaz4zk0OkrCKGwUiMeTsqfuWvZvluQ1dmZgUtpzAj%2B1fGhjxS%2FWGGP9TK9CHZ8Cuib5AjoqWgrHbEjVXes3s%2FR2EDCsBGqjgff%2B9Dkz%2F2z6FE3rSRE8u8oD%2F%2B39aacjn1maVtZVRM44nXKKZrXXfK%2FQWMoDvI5maLhkK%2BL8DMa6f7T9LyKw2A7S3RyCCWQU4rwjW74C%2Bc6uhNLDX%2FQF7ACNxEPO42IXdrcsH%2B%2Bh0FO7q8yDlPmhehHSIb%2FPjcr7q%2FgZesma6eue3ZAsDXkx5gh85SgMJD90skGOqUB%2FpKAbCZ4o44QHHt%2BID8TR5bI7u5gSd%2FfupCQg1azoNkCL8cFXfZUxBzLSWuoqPXXZs%2Fb7OqsEvo%2FzazLnMgCQn45cQsZWaFa1QVznCsFpRvtTw1dc05NeQ%2BcjfRpTrpZGTdbFl3vyzebjEVmXG4Evv0VlIRdJDKQa%2BV7Ede7UVLQ2YOeQ2VveWZUY5Kulk%2FFiR3fThkFy04zm9cPumETCSdYDWBz&X-Amz-Signature=c0b93a088dd0a42622e9c06ab9643f752b01e49cb7089697e13ee46abef1d469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE57SQWY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT0G87rTgs1h0OuAFnG0o0jGWATgeqTbBbVLBrpLykaAIhAISS%2BS6muBwvgx10h%2FKEwpQ0kir4unwM%2FQHDoKON45xSKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjHstKlhZD3pc7Sh4q3AODssb8ORMc%2Fbk57FP4Sv%2BcOfKDWtpZs3dTArRQguyaZgJvhR9v%2BvNqcK02auoFnwBHqCuUoV86IkkwnaSyLQp0G0k039eX5SPjsPzSKHF4COltRod00vFkQFclcb%2FVciWhuaMSiWEK2OlzS3FOVRgDk8tKiagdEtpfi3g%2FVhY91EkdumJHrk4PywjE0nZMdGRgyGybdehchfQGtoXJQEgZWse0575%2BifGa4OGy6tApsJwLaS3ZcXNHlbDRVCF4%2BPm2Q%2B6CyhwlWyREaGabv1CgfVJlRDAVh5jmiLHl2wygh%2FjGePaxn%2FHlcrREG6%2FfolTMw84iCjaVdlJcpacF354f%2Fvzl1oRhYHOPwf2xG0Oq%2Bh0hbKGf8i0lrBc%2Ft%2BoZSPNQEtX6YLjHjekaq8ueWVBECMhaoY31cDmU8i27dTxaCKwI58RJBF8oyljCVEzZcmvp21zMK6piwtsJ0a1s%2By5Ma59B4QyoTWTbQi6sYcfq7XmLYi28z%2BUNDQZaPes0TAXs5oKJJmjGD%2B3LsSsL35abUBNfYVPuWSJorkY%2B1QYrYAux3o1fR7iPtiSYjnOnuorKMEXlfqv1vfE%2B6ua1F6dyOGhhAk4Pk3MmKz4ekKEvKpLBQERIYk1WvXoEkDDz%2FdLJBjqkAbQF%2BRoWsUxxjya2lBhErDWUOVN9Bc8elWwSPvKobjDSkU1cTz11j86UPnL2dUPvVyuXXnYBMhz8F73mM8v5nUqxZqHUGxRetbWsq5yaoNySYshCVuw44%2BbMl1nlz%2FzkN7iKBbSrKAX0Gwp9Hksx5sA44LJfKOpjLzdXC0Dkjbvs9%2ByV54NDmxSYjdZ6Wk45nK19RJNo1hlPZ7a%2BxjTEYQvVT%2Bug&X-Amz-Signature=64541611c4427ce1c0ad48aa4609ca77e704c4002871cd67d6e8b6854680a7ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBVLQSS2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNtReJlDtXApJgeelMPlItgiwIQjfJC0o6vc4HdwYOoAiEAkWuYmOrEqlPJeGCW%2Ffh62UJIspXH83uIre3JgW0eZL4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwjvBPcIVGEWHXg4yrcA5bCWNStnFofEl4YCofJqpEoDgRN0dTOjjuFj8LGAL8mmn2uCxzzB25SWFHEd4qXIdmBNaI3IHZ3fJ0qrsM3U9CWWYoiMKQknoxCadw8d4t7D8puo16tVic63V4Hxw12LorH%2FwlbeGDLlPnYMqtLXXWD54zS3jwYWrktD1oGN8IStZ%2FYnduReaDnMXKlA6Elouzgv0rl8zrpc3pzT%2FFEZkGjFXR%2Fag%2FvtSUUoIdv5zTJ1OtFGEQyVsxCI83C3GfgmbDj3Z4do8qKgaJ3AA3oIsoviQnuMUVxkh7d2EUuffS%2FlqmTRLIjDxvZVLEWeK679ZVSAdzNj%2FqK0fq8%2Fg0jDIJEut1kAXQ74%2FBwrTfNPQu9a0T8U4Kqv0%2F740hMTJXChhdZgw7j2AO4Tuk%2BFNlM0Z7ACMrW6ayepQ5rdFRwJt22erMcYZkUhD1G4IopEPRKmzNyfXPn3uvOwte8ZbtPKVXJzix1pPi8O7YG4%2FTBhDJdcyt5Kskf4P2FaSWvmGu%2FSdChcUuQPKlaCBFyLKZa9YarJc8oUu1XAQxT4ohJMqdhak0yvmH2oM3fXMTt7u37AmdgvUHSQHmkHCjy1tAkv13b%2Fu1tnIYnaikfhJpDLwzTj6wlaitO%2BdDfxgz%2FMN%2F90skGOqUB1LRj7X%2FRmnSYJIaVGXtA11uLf6MrKOhGRU2x%2FbGMghRrHXpKDhASekLh43N%2BTIPbeiXwzafSw5RIaNu%2BuV62QfcrNHT28yxPqxxM5P9oc1H6E8N3lQgs3ADHYeyojX4lHrHXAAT%2BinpPmPob%2BnkK3pjeK8SNjNoKHV9ECrL3mMDBw1JXiYMhBhye%2FHaEqkm1EPZdlrOrHLBiaDx1SnSdplyYgPLZ&X-Amz-Signature=98b67ba550d30b9e12697914d325dd2c620d990141adbe025c36bb8076cb7ab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCW4MU4V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF23rGBOAk3AwbX7HjLFE9LtMvLETQtGQEDptl%2FONcUoAiB3U%2FkUwMxUjlxvbKdq9%2B94kF4EmWnZriO4FoJXzjp7BSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5FBSuEej9Wdv4B6KtwD4Saci6gLUUhO5zjpoULbVYccUBA8Iad7hDR%2B%2FB5msjM71c9DAjMMwvkCagpJSKP%2FiBkYpclvkQiVNTS6gzRlPWdRGXOkx0ij0nBoYmwvCh4OqLu9o%2BVm5mpPg2BMWE2PcIl7Zz6r3EOTgdQLQDQrzC7toXIEtz%2FTr%2B36dxfUFwRO%2FYuTzIwLgsTPJ%2FndqXuxjO%2Bzei8Gp0nf%2Bg16mFtZQGaBPiVF81i0aGfavwkkV4NkSLlKj74a1M0qzOtulptzcvnUo71dL8xz9xcRp%2FLfKSjSYgjCYHKRir7lKOBnGB7gPgVxl4rmvmuLAxZ6BLdUBbj19NT7fAaXU1kLR3ERPsjraalEy1U9zlJ%2BbMLeJd4%2F5oG95pbhMpYEU%2B%2FunqqlTvR0QGavNcn9eU365PCLqlGCUcV1RvDSvagvcyWosY1NFkgtIfCRbcEAvVuoSYgFUB32ilBtuAZBZ4mxn8I7WNwQKpUVFGMUlG0Nc%2BBd0TEtXWSc3yaTf4IJpkqyYpUsECE6auIAr7OVQOlYcvxFE7JKHtZrc3tPANQ4n9blm6WXqxrmQ14YxvOn6BDK5RnI941DBLANL9x%2BPc6dnUCRwXeufz0rt487JAw13Oc%2FlNmXKkb0kyt4iz9P%2F38wiP3SyQY6pgF%2BKewKMJ32eepseufXe87xYF2x7UXRP2TjZiCNxsqAt3srZXWmHr0mRV4ruu2u%2BjIgLbE%2FlJAUT6DKUMHP9DplKiwK6w8bcpo408wTgcPan48KrBxI2Y35OMRv3YNvjcc11dy%2B2bC54Uqf377zz6scrUsM4pzjN8HlrlpnPmlOtsqAO687Fdal6z%2Bxcl6q2lWPMszL7D2o1LcFOj9T1ZxWyCo484Pj&X-Amz-Signature=d2987a6338c878404692fa739b13de8ab39bd83a94ae3ac809e3e1904ea47978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRWMGALH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiUtKCPbZi1Y5tFSg2VjrmV1YF8sWN0k0yHdZBrTBNNgIgTy2T%2BoIruEKQ839F79%2Fq8gBcQ7qdIa9a18qqsr205JMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxwyLnzEEKuo6ZfrircAyYRaDppCY%2BNl8o%2BAwfhVW1pP%2F2ks%2F7CIwTZ72Cq5tLvX2u%2Bo3uG4%2Ff3%2FJ3M9xm2EuHGNvYQquicl5MN5him4lJ6FfVM4%2FEV4ZwIr0xRg%2BRGoDIW%2FK%2BMEpNpAM244aOiYEoBmf8qvhZoAvRNnQO1vI4LEkOg6bAh%2BTfatdFkHMdWG5K1zSj%2F9U1abU0E6WlaS4nqddzm9lg%2FWviEZMU0eHLA0rltl49C%2BIbvKjtydbCHdLTlICHeMT7CHyshmyuwhTvorKyQ4lNtWhr%2FFpxCgGIaF67apZWZMBycKAJXEditxXRo%2FNwq7PQp20wDtNXVt8cQLMiJN%2Bqg7Fgdjg0ZMB54tliioXgjQMLR1gsvNTU5cDChjOnqwHA9zLgCt9jgyW9R1DzUSCiz8JqMwQ3u09CuL4DfEIlrBlEoS7CzJJr%2BKdWZ41k0FdmvMSofsts0be74zvpMO1MqgASmSmDPXy20PNRJpQhPXYis6n8ivJPe4fL0sGtVo9lIiqW43u%2BYP3AO58UbpVK6rEZyBoNz8H5dZgVTvBl%2BaDp4z0JlEQsJLTLf8UquhKIN2Lua0uzva2M7AA2JkQl9WewMI4NrV%2BHZqhkokwYDAQxt%2BcknSpk%2FvkaPMHuQkkxFSr8BMKz90skGOqUBn6f0lA56MrecorvukCItwSCfd0Th4w8kRef6QQwcMo50rp6a4G6rO3zAj4D3NJcCBIRbgyLJ%2FGJ%2F%2BrM629UFZIxHk8eL1yFErUE4514ZZA0hBTH6zEPU60MvYHNi%2BGTIdN9IJumU34ydd%2Fq5C5fzuqRe42AyNJA4yJnrbxquwb5xOkNJTLiSFpAnUx%2Fx%2BR8aM4VHNIdi09U5kjtkqMz3rQmQ50%2FX&X-Amz-Signature=3a2135d4813f951d5b8bb9e303507e62d05f62431ce29fe96135ad5e18523bae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCW4MU4V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF23rGBOAk3AwbX7HjLFE9LtMvLETQtGQEDptl%2FONcUoAiB3U%2FkUwMxUjlxvbKdq9%2B94kF4EmWnZriO4FoJXzjp7BSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5FBSuEej9Wdv4B6KtwD4Saci6gLUUhO5zjpoULbVYccUBA8Iad7hDR%2B%2FB5msjM71c9DAjMMwvkCagpJSKP%2FiBkYpclvkQiVNTS6gzRlPWdRGXOkx0ij0nBoYmwvCh4OqLu9o%2BVm5mpPg2BMWE2PcIl7Zz6r3EOTgdQLQDQrzC7toXIEtz%2FTr%2B36dxfUFwRO%2FYuTzIwLgsTPJ%2FndqXuxjO%2Bzei8Gp0nf%2Bg16mFtZQGaBPiVF81i0aGfavwkkV4NkSLlKj74a1M0qzOtulptzcvnUo71dL8xz9xcRp%2FLfKSjSYgjCYHKRir7lKOBnGB7gPgVxl4rmvmuLAxZ6BLdUBbj19NT7fAaXU1kLR3ERPsjraalEy1U9zlJ%2BbMLeJd4%2F5oG95pbhMpYEU%2B%2FunqqlTvR0QGavNcn9eU365PCLqlGCUcV1RvDSvagvcyWosY1NFkgtIfCRbcEAvVuoSYgFUB32ilBtuAZBZ4mxn8I7WNwQKpUVFGMUlG0Nc%2BBd0TEtXWSc3yaTf4IJpkqyYpUsECE6auIAr7OVQOlYcvxFE7JKHtZrc3tPANQ4n9blm6WXqxrmQ14YxvOn6BDK5RnI941DBLANL9x%2BPc6dnUCRwXeufz0rt487JAw13Oc%2FlNmXKkb0kyt4iz9P%2F38wiP3SyQY6pgF%2BKewKMJ32eepseufXe87xYF2x7UXRP2TjZiCNxsqAt3srZXWmHr0mRV4ruu2u%2BjIgLbE%2FlJAUT6DKUMHP9DplKiwK6w8bcpo408wTgcPan48KrBxI2Y35OMRv3YNvjcc11dy%2B2bC54Uqf377zz6scrUsM4pzjN8HlrlpnPmlOtsqAO687Fdal6z%2Bxcl6q2lWPMszL7D2o1LcFOj9T1ZxWyCo484Pj&X-Amz-Signature=067505dc25d122d0c8619d1768bc8cc09534d8440e0cedef4302dbefe2c16aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FK2Y4M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOFGdXl9NDuHMAM1HmGN7xL1AYqXHzkbqMnKxVTzzU6gIgIsKr1qA4FHcLZgWZ%2FqTOVIGeDtd3%2FJGCF7WB5rGj3WwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkI4Di8Otf2uG2JwCrcA93eh%2BWYkuzymwWbTaAX%2FHzuLroYjJAWDxSqNf0m2rfpyVzQg6c%2FnQ6L%2FQr1UMSpxlN41tRJRq9mtL%2BqMfBAre5seykEZp%2F1%2BEopVeygMFFnGp%2Bj8LLnMbP4V0qTg79953BT8K9LmK%2F%2BOU8fzGEdS3SnTT%2BoaLET69mW6EgdR5f6LEoTortg1gfMK3cFFRy28X1pklklYbVVgVxiAzXzU762r82LVAEvMiBTY%2BarLFU%2B8Pm2JVoLklP00YDdhUmi2ZwJqP%2F160dW8yp7zHTtvy6yXdAyQqG%2B5bAgoZsV9Pr3FtLDKsiNV75wBSUpuuf6Z0AUZyKvSN4SMFGK%2BFymlIF07JEV5JkvDSrciw5OJCf2lM%2BltSc3xqX%2F9RiGSPhIKPy1F7pm4L8S4rxA50E3pG7tmlOjG1TZs4lJ1HBGILmx72o3PbA7oXFAZtSN4laq26vn2xND9FIq1m1Obv7%2FFKAZEYdGtYD%2Fo9M7Dh5OPhB0TX9S1JhomTm84MXmP1xoRJt3pNR%2FxbkYvtAkPi6ejEK04an%2FYDeU9zqgo2qE1JdOHBPdLz2ccqcvsY%2B1x8flutJN36PmpYfJAb%2FCoRNu3p82H%2BiydoHB9PQkIZwZB56u%2FPaQBw11fzt%2F1NrEMI3%2B0skGOqUBLFMV72No4ByddDrOqfA0ARgJNA0h1tKs2zachq6CgHyuJLQp9klXNtRHbzZkC1U2XiXPSJW7kYPmoeRk%2BAk0xim9gECXjD%2BZp1boXPzLuM3EBPgcYZidkxohIxDDeZcVC4OAPDt9vMfzz5c8mTt1jMQGhVZzAzNIM7i4OJO6Zd8aLQdPD3K079XByR8RW0UVk3zyc4TvwucIvE%2F0scP18%2B4DNHmD&X-Amz-Signature=8520e1a3b5cf61309ccf5daed792c05de466a44fc71cadc6f24b5ae4cb57618a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCW4MU4V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF23rGBOAk3AwbX7HjLFE9LtMvLETQtGQEDptl%2FONcUoAiB3U%2FkUwMxUjlxvbKdq9%2B94kF4EmWnZriO4FoJXzjp7BSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5FBSuEej9Wdv4B6KtwD4Saci6gLUUhO5zjpoULbVYccUBA8Iad7hDR%2B%2FB5msjM71c9DAjMMwvkCagpJSKP%2FiBkYpclvkQiVNTS6gzRlPWdRGXOkx0ij0nBoYmwvCh4OqLu9o%2BVm5mpPg2BMWE2PcIl7Zz6r3EOTgdQLQDQrzC7toXIEtz%2FTr%2B36dxfUFwRO%2FYuTzIwLgsTPJ%2FndqXuxjO%2Bzei8Gp0nf%2Bg16mFtZQGaBPiVF81i0aGfavwkkV4NkSLlKj74a1M0qzOtulptzcvnUo71dL8xz9xcRp%2FLfKSjSYgjCYHKRir7lKOBnGB7gPgVxl4rmvmuLAxZ6BLdUBbj19NT7fAaXU1kLR3ERPsjraalEy1U9zlJ%2BbMLeJd4%2F5oG95pbhMpYEU%2B%2FunqqlTvR0QGavNcn9eU365PCLqlGCUcV1RvDSvagvcyWosY1NFkgtIfCRbcEAvVuoSYgFUB32ilBtuAZBZ4mxn8I7WNwQKpUVFGMUlG0Nc%2BBd0TEtXWSc3yaTf4IJpkqyYpUsECE6auIAr7OVQOlYcvxFE7JKHtZrc3tPANQ4n9blm6WXqxrmQ14YxvOn6BDK5RnI941DBLANL9x%2BPc6dnUCRwXeufz0rt487JAw13Oc%2FlNmXKkb0kyt4iz9P%2F38wiP3SyQY6pgF%2BKewKMJ32eepseufXe87xYF2x7UXRP2TjZiCNxsqAt3srZXWmHr0mRV4ruu2u%2BjIgLbE%2FlJAUT6DKUMHP9DplKiwK6w8bcpo408wTgcPan48KrBxI2Y35OMRv3YNvjcc11dy%2B2bC54Uqf377zz6scrUsM4pzjN8HlrlpnPmlOtsqAO687Fdal6z%2Bxcl6q2lWPMszL7D2o1LcFOj9T1ZxWyCo484Pj&X-Amz-Signature=6bc33d79a29b021317ce28b2fb7e82f48820dfc63201a3e48232a04906703368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHICG5YI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FJ2z%2BysmtJNFFeMnuewj8zVZhhcBw2oFwpj%2FyaHTZ5gIhAIyoBq5acP1BRErBPTBqQWQOOYE7pCBFOcpOXP7MHCOxKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHO9JbExAeUy28Fmcq3ANVdFs6bsH18sDBuwZhHdOWapQp69fVdKow0fhm53POITeDtpVQINIL%2BCo4Oz4x0Z2DX2Ys%2BL%2BNoOVe1M%2Fp1FRPCktbENDc9sm6x%2FyRBvcyaS%2BAqLP%2FCnVbQ7f1fCE%2FvGBHj3avVHLWhsof5%2B3I93L4CZN0HLS%2BzKXMiQJpDiig0EBGeqeV5ueXKm9vm%2BJoYEgwoAlF7W%2BDIrFG%2FtPq2TPoy%2F9pABbJyzzZZLxpBA28WchB%2FwWgkBROrMaLXj7jV803JWrKLbiNa%2FCvOWCzMvvLwb1qNLyB4QLqKvF4ogTwRhIWInbeaM4E8Za%2BrzyiVr7FNoQ2gbBmAldujTnCkY1EeJx0gtZXysY8Efwi5vVYZr9agVIqR02duGMpduGRD6qj6eI05miIi5bJCi6fDKkJsm%2FGsyOFyLm9F3GXc71r%2BA0rZtAMjiqkk8pVLB%2F4uZod%2FiqCOlnTUdb1vPhRKBTKyI4dyFWQKA37w%2FMCcAA9fE3chp0twaGS4j6oecstfPhlflbet%2FisBg8QOwWPy6gT9HEFGzJCXioyMOxSrvoMoEoaqCjQWF7Bq3XpWUiOoP90JDsWuSwgcYOqpf3b4xKVogKcsbjPnENWXr8947N4wDUf5zNEmQJ5A%2FVxPjCw%2FtLJBjqkATlTxiEEXATxqE6zFguoqfCNU1s9yAQVjdvB8igLBePd%2B0KU0PTi%2BVF%2FsuEtKPPoRgt7GZIaRhANf6dFZlRC7stJx4tI922y4Xx7yMfiX790hEnrq%2BV2N41Bz1kIcMt7AaFKXK5M5OklQotbrBmN8ho4vHM%2FBwtrj6wXVJTU4mgGQgkhF32B1m%2BnFLes8c6gEZ7szbbqDHU5X7qclyQkv04xCWWu&X-Amz-Signature=7e73df2d31e7234fe0c70ab48ff7cf44556c5be30dc5757ff06f61ed7eed1d9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCW4MU4V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF23rGBOAk3AwbX7HjLFE9LtMvLETQtGQEDptl%2FONcUoAiB3U%2FkUwMxUjlxvbKdq9%2B94kF4EmWnZriO4FoJXzjp7BSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5FBSuEej9Wdv4B6KtwD4Saci6gLUUhO5zjpoULbVYccUBA8Iad7hDR%2B%2FB5msjM71c9DAjMMwvkCagpJSKP%2FiBkYpclvkQiVNTS6gzRlPWdRGXOkx0ij0nBoYmwvCh4OqLu9o%2BVm5mpPg2BMWE2PcIl7Zz6r3EOTgdQLQDQrzC7toXIEtz%2FTr%2B36dxfUFwRO%2FYuTzIwLgsTPJ%2FndqXuxjO%2Bzei8Gp0nf%2Bg16mFtZQGaBPiVF81i0aGfavwkkV4NkSLlKj74a1M0qzOtulptzcvnUo71dL8xz9xcRp%2FLfKSjSYgjCYHKRir7lKOBnGB7gPgVxl4rmvmuLAxZ6BLdUBbj19NT7fAaXU1kLR3ERPsjraalEy1U9zlJ%2BbMLeJd4%2F5oG95pbhMpYEU%2B%2FunqqlTvR0QGavNcn9eU365PCLqlGCUcV1RvDSvagvcyWosY1NFkgtIfCRbcEAvVuoSYgFUB32ilBtuAZBZ4mxn8I7WNwQKpUVFGMUlG0Nc%2BBd0TEtXWSc3yaTf4IJpkqyYpUsECE6auIAr7OVQOlYcvxFE7JKHtZrc3tPANQ4n9blm6WXqxrmQ14YxvOn6BDK5RnI941DBLANL9x%2BPc6dnUCRwXeufz0rt487JAw13Oc%2FlNmXKkb0kyt4iz9P%2F38wiP3SyQY6pgF%2BKewKMJ32eepseufXe87xYF2x7UXRP2TjZiCNxsqAt3srZXWmHr0mRV4ruu2u%2BjIgLbE%2FlJAUT6DKUMHP9DplKiwK6w8bcpo408wTgcPan48KrBxI2Y35OMRv3YNvjcc11dy%2B2bC54Uqf377zz6scrUsM4pzjN8HlrlpnPmlOtsqAO687Fdal6z%2Bxcl6q2lWPMszL7D2o1LcFOj9T1ZxWyCo484Pj&X-Amz-Signature=793b47db2be6faacb009bec561642ed1b9e88d2f67445d7dd2b3e6f6eceb4f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7KKSU6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIpNjAYoBpJLqN%2FGFHhnMYbJ0kd1bDK4%2Fq7OCnIeOsAAiEAgTleprIxmJliNRvuZAErvIpUXAfOolhxIqtHjmuxr9sqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7mjepzImzXET31BircA3HGS1nfCwhctTqOSmCRXAr8I7zeTpoS0d15xoaZ%2B%2BL2miOlaT%2FG75w%2FEbUnmJ62HEDqu6t197SZmfCWN4XQMXeS7pTlO8P8tvqDnaP1l5Bsa94Nn735ixIy2yGtLFLjVz7F%2B6StooPfFRXApCpngDJNWNkWWZlGVKaBEH4ezWy1PYfdvdDayXGCfSoPOPLrE69GzhRto9%2BNmN0toFvA07ArpqQBAgCye%2BjABStRLVKu8M8JcnJcpoTDvDudFEtCcB%2B9aKIZfbSEfuvO8Vwni%2F7Sx2ZJp9KNQjly9oDIKwf%2Fnh1UUy%2BE%2F14aRATvp%2FEG5knr6iDeiDWOTIL9m%2FoJQOpqdpraThtsZlZk%2FEngZOPTbFw9nNuoahE%2Fhqm2mQd%2FfrPtMDlIrzPGg8VjCp4eNCoZA1jnYfNC0fcxoPic15Gwta3pSfdphG2B7LEKKn7H5QAWttp7CcDjbY7khI%2FnMpazmNIAoZ1Vhw4I0kXbvEnynNYQpHfyJN6M7gSzh32EQENneZHwz6eTh6ysLrHLtkVsZct9PBpIxw6TsjqGQHbqt5Mqfkk1%2Ft9vPvWDlTKm1neiuXdlQEgXSUj5xwn3PiC119Lj3f1%2FPxUuirp63xvPB9p5Xr0vNt%2FHdzOvMIP%2B0skGOqUBIgr8AiIVURgasm9ClNVoFnRw7M4sadaQSpHAlBhrcJF3bqv8afNG%2FTMEpX%2FV0X2EUVMjlxkxCQorpQuN4JdLBzISGAyLD%2BKM1qXDk71CP0XS%2BVRiT3HeKn9Xr33T23JOoQn5OFysRkIm3hxjp6JdtIAwWFB1BzLbbGNAQo13yH6Ewe3nZlj3NnDmWsPcuEvMLrCsj87TKQLnvdhHUJ%2B4CWmqlw75&X-Amz-Signature=889e67efce057b141da3e8a6b402bd6d560d6f7f1789dae53d761c74dd6bb2e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCW4MU4V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF23rGBOAk3AwbX7HjLFE9LtMvLETQtGQEDptl%2FONcUoAiB3U%2FkUwMxUjlxvbKdq9%2B94kF4EmWnZriO4FoJXzjp7BSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5FBSuEej9Wdv4B6KtwD4Saci6gLUUhO5zjpoULbVYccUBA8Iad7hDR%2B%2FB5msjM71c9DAjMMwvkCagpJSKP%2FiBkYpclvkQiVNTS6gzRlPWdRGXOkx0ij0nBoYmwvCh4OqLu9o%2BVm5mpPg2BMWE2PcIl7Zz6r3EOTgdQLQDQrzC7toXIEtz%2FTr%2B36dxfUFwRO%2FYuTzIwLgsTPJ%2FndqXuxjO%2Bzei8Gp0nf%2Bg16mFtZQGaBPiVF81i0aGfavwkkV4NkSLlKj74a1M0qzOtulptzcvnUo71dL8xz9xcRp%2FLfKSjSYgjCYHKRir7lKOBnGB7gPgVxl4rmvmuLAxZ6BLdUBbj19NT7fAaXU1kLR3ERPsjraalEy1U9zlJ%2BbMLeJd4%2F5oG95pbhMpYEU%2B%2FunqqlTvR0QGavNcn9eU365PCLqlGCUcV1RvDSvagvcyWosY1NFkgtIfCRbcEAvVuoSYgFUB32ilBtuAZBZ4mxn8I7WNwQKpUVFGMUlG0Nc%2BBd0TEtXWSc3yaTf4IJpkqyYpUsECE6auIAr7OVQOlYcvxFE7JKHtZrc3tPANQ4n9blm6WXqxrmQ14YxvOn6BDK5RnI941DBLANL9x%2BPc6dnUCRwXeufz0rt487JAw13Oc%2FlNmXKkb0kyt4iz9P%2F38wiP3SyQY6pgF%2BKewKMJ32eepseufXe87xYF2x7UXRP2TjZiCNxsqAt3srZXWmHr0mRV4ruu2u%2BjIgLbE%2FlJAUT6DKUMHP9DplKiwK6w8bcpo408wTgcPan48KrBxI2Y35OMRv3YNvjcc11dy%2B2bC54Uqf377zz6scrUsM4pzjN8HlrlpnPmlOtsqAO687Fdal6z%2Bxcl6q2lWPMszL7D2o1LcFOj9T1ZxWyCo484Pj&X-Amz-Signature=842d2d4ad33ce1ccf4c978f49541d666c4010025b39a8bae7c912d984bd9f261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF3GZ7F%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk%2B18OYm1t4WezObNq4k0sBgkB1d5u5bESY6j9FqWzYwIhAKX9gwKj1ImBgzLyyCvPeDuRYrYAFeY1Lw5bcj1H57n3KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywW%2BSrDoJUCsRHGIUq3AO4jYHq4VosApoVPBIeGtuKq68JjxAAlvGgCwEMufvnopJxVYQXw0D0KqWSBp0wGdnazC3wBItP0qVtBLAfqsV%2FK3tw8Ub2qR04%2FN6%2BTG50l0%2BYdI4N77aPrrbweSVLKPCf%2Ba9YrwjCYlrjOnKFm%2Fhx3cmJmwxL%2FOS0iNsPz4kPads%2BNoE%2BRWbFSbS9u2mdssozkV8bFl0BPVc%2BQjE1OuY7CGTQ0L1dtvVch5lAuhb6P9HouNIW%2BasCmOpoHgOclBh911dSMNwQe%2F%2BCdZYx995LZG5%2F5eyiakTzQpEAn3XAmZBJbYUrxYtA5Nd8DgsD2aa3kf0w5ZkxRyba6%2FS%2B9rCDVXnh%2Bo%2Bjf2ft68rh09ze2y7CVvOnBiqJZ4IF%2FOMalWxfKGhPDVP%2BE8LpXKwu6lD%2Bnu0VFEqnK40oGyAj5EGI6Wjmud8B20fVe%2BhPx4IEy7fBWaW%2BtLDHckkUw2vWhZu%2FI7fVGkmEdQoE503Q5194%2FM1LQRFIfoJublpRyQryGmGlDxgzyyECTLSCMSK2CDzv%2BUonV%2BxSUJOC7DTqm8y5SvXwItcEus7CR7te%2FkSeSpqkhXJlnRbq8BkjxQ0PhsVKmmFxCryHiyxoQWpRaIml5PeL2gPIWvADBjd9oDCt%2FtLJBjqkAa0Yb0TovmtFb5QBN0vJQ1oEz2RTN05Xapz8rFrFeHu19UEMKAVEogd1dFnAG1Kb8P%2F3B286ds94TKQ5qc90d4LtaTdGA9lviRfkIB53J56gEzi3ruLqn1zJmukdxDMmBkToQ2vL8S1l5HAk9AJsbwamMmPTaPkLrqT4ap1Ie3EAJyCGPzHarfIVqb86GJtknlmMYd%2FEtBumAdJp%2Fa2pDvx1pCdn&X-Amz-Signature=e2e0ab59805da755383aa616b509925dcbcab6d98aec27205ae3f70375f67736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPVG62XN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFo7HuWgnSbSN1QPq4p7%2Bol4oGVTRkJshNZouNwDkRVGAiAcmduCe5qo5%2FJHde4CZnmJvJuDGkruLX0wjTM496ZDiCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB4BfmWC%2BRHvGZac5KtwDBezWtmqo0LwjKESYSMc%2BeqsblmxndB7TcwJ7IPKqIhoF4XSrucfv8fJ3nKnCltdHPOxs72XsKoxbsoLcEwDCVuNNYTkInbyhIH5391Wt11EsXC6joIsPMEsvLSvS2sLN%2FN%2BqbErssxp8YODh%2BWkWZz6XZpw7Y5Q92UZ7G3m6AvYNCEAIv3VYS5GajTyCz1aO1g2ANmkftJkcDgjhCXN%2FAcunF89bRLF%2FMyCwGzFXN0JL7CZg1aZc81XCVMDbt%2BB9n%2BwQMk%2BBln829vil7oeHk%2BxdSjW1oW%2BpE%2BXvrTIQIXofgmCY0v7Hxo72d%2FO9NJ6UCIyQzqKvpp6nCBhbuFo9NO1qcQNvEmZMEKYNGtfUE8yJ4HhlJ0gWCc08UaDidVFwa7oSvbCe1pgHZJiY90s6F1T%2BemlgQlzmYXA8YRIHXOZfiXjptyS65SSib9DPQFWcBowDfqUk6B79XIcxAZ8w7L1xRwBbYjFgfX0sblqLxZAyrmPv%2F%2FaN1z9ZqZje7JLwYXiZ3rBdYpkXlviQJhAirzanlsiMHTTLSxsOjRwjeUwXIpwLEwFY75SQpOPK4S%2Bdra1Ol3328gUf4A00cD976L0eshmo%2FbfjDpGjW7eXTgYG2YQEcPQ02lcVoZow8f3SyQY6pgGashovN8Ro0CoyYt8pzUXf5s%2Fe4KhGyx%2B9sZByZV5i9ndMqT3a6r9Xe%2BBn%2BoKOG53rvR%2Fna08fynd3V8WQRz%2BHduHgGrH2C5bPMGtGhm7QEO1FH%2BfKEnBQDXsCCdqhPK72W7SisqSx0wC95FpWYsh2ld830SPS%2FUe0vp%2BCcjsRp4j4%2F9RZXXyhNdoCPKEv5iSRdz1BVgWx0vhavix4pjJTYIbjvWU5&X-Amz-Signature=25bd834868596dab063f704bdae93782021a31814afdafd7c0f580dcde317296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA3JYK2V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjv%2BufyT5OVk2NZErtuiI%2BSltM7lAsumXbgkAPK%2FcpfAiAFXPHorp6Zk8F1NU3y72UFTquyIvqxVeF%2B8Yp8IfNP1CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoUc3JpRhVWWyOSp8KtwDbFUx7PN%2FKuzGKA863222wL6Yvwveovuw%2FNni3X1WfR%2BSprriUOgVFu87V%2Ft2bm0UVJppJdiX9hoT9ZVIZT%2BlKbp6Lu91AIkf0OqUmiiiaf5t4j3DDcXd7lOAuV%2FVTLe6IekZoIxeIF3qL331rawIzSp7TJUBzBVBFgET6Ai9au%2BCDvCtmOJ2HG3ZBg6OQf4U8VzPxwBj3pa8NaNSLa3AhscX%2BLWFpHzuDWLDsX7z5QUfj5qhtr5H25oqHAZkso6XAcCRHwuK0eWdAW1%2B9IDc3mIKjTrNFG5ZfzzOXGjbKg9xCCMrzWy%2BIBlB%2FDmmIL%2BrW0dGozUrVc%2FWyqe20wXSTYY9EPZqkQFn%2Bfe8AUvW7vJcMOd5Ha7tI0PFs2zog764rYVp0fABB8SdppIC5AVDF5lkU7%2BsVy%2BwaOdWvPx4QD9lYM77g1sg%2FHwvznsy8hDt5fV5P8j30%2Bbo1vdA93SiKFfVDI6RxbpYRVzKxFoGaVCULqlnqIQYeTDZ48hcCVEnY2JClRNC1rgYRnistlVW5eoP2%2FfiEC8NumO0MsRE%2BboLIugBMHe9ndd6Mfr1bL5OskorcZ9rN4y7QjrsDLbLRJbmuEhJtEkvTeJhdA0bsdRBhqNJFbjFOy8hHIgwv%2F7SyQY6pgGje3Yj9q%2FM8Sx3I0C6ZvUrW%2ByWq7cO%2Fo0hf5ylag8OBAkFankBVSGFDVIOpXBufjHr0GzKj5sCPN%2BGbcFDrPBbZ5XNZhzVOwYfQmJqO8JbCRIs2oZDI0h0Ck4%2FKAazcH9cCRB7SosfBBX%2FYtDNqcx4XWnaXwuXbDQDSPl6AzCNl%2BRwX4krCkvqvcUJsEvALF1YLe6ACmpeJVAGD%2FugpamkoFHKL9bb&X-Amz-Signature=3f059ec217c611264d81a7926a21647dfa54fd6f15b575da3791ecbd9b10bdcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCW4MU4V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF23rGBOAk3AwbX7HjLFE9LtMvLETQtGQEDptl%2FONcUoAiB3U%2FkUwMxUjlxvbKdq9%2B94kF4EmWnZriO4FoJXzjp7BSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5FBSuEej9Wdv4B6KtwD4Saci6gLUUhO5zjpoULbVYccUBA8Iad7hDR%2B%2FB5msjM71c9DAjMMwvkCagpJSKP%2FiBkYpclvkQiVNTS6gzRlPWdRGXOkx0ij0nBoYmwvCh4OqLu9o%2BVm5mpPg2BMWE2PcIl7Zz6r3EOTgdQLQDQrzC7toXIEtz%2FTr%2B36dxfUFwRO%2FYuTzIwLgsTPJ%2FndqXuxjO%2Bzei8Gp0nf%2Bg16mFtZQGaBPiVF81i0aGfavwkkV4NkSLlKj74a1M0qzOtulptzcvnUo71dL8xz9xcRp%2FLfKSjSYgjCYHKRir7lKOBnGB7gPgVxl4rmvmuLAxZ6BLdUBbj19NT7fAaXU1kLR3ERPsjraalEy1U9zlJ%2BbMLeJd4%2F5oG95pbhMpYEU%2B%2FunqqlTvR0QGavNcn9eU365PCLqlGCUcV1RvDSvagvcyWosY1NFkgtIfCRbcEAvVuoSYgFUB32ilBtuAZBZ4mxn8I7WNwQKpUVFGMUlG0Nc%2BBd0TEtXWSc3yaTf4IJpkqyYpUsECE6auIAr7OVQOlYcvxFE7JKHtZrc3tPANQ4n9blm6WXqxrmQ14YxvOn6BDK5RnI941DBLANL9x%2BPc6dnUCRwXeufz0rt487JAw13Oc%2FlNmXKkb0kyt4iz9P%2F38wiP3SyQY6pgF%2BKewKMJ32eepseufXe87xYF2x7UXRP2TjZiCNxsqAt3srZXWmHr0mRV4ruu2u%2BjIgLbE%2FlJAUT6DKUMHP9DplKiwK6w8bcpo408wTgcPan48KrBxI2Y35OMRv3YNvjcc11dy%2B2bC54Uqf377zz6scrUsM4pzjN8HlrlpnPmlOtsqAO687Fdal6z%2Bxcl6q2lWPMszL7D2o1LcFOj9T1ZxWyCo484Pj&X-Amz-Signature=665054ec3015dafa17d942502032b2829cfba6b0a49040a47513f54ca4312a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCW4MU4V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF23rGBOAk3AwbX7HjLFE9LtMvLETQtGQEDptl%2FONcUoAiB3U%2FkUwMxUjlxvbKdq9%2B94kF4EmWnZriO4FoJXzjp7BSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5FBSuEej9Wdv4B6KtwD4Saci6gLUUhO5zjpoULbVYccUBA8Iad7hDR%2B%2FB5msjM71c9DAjMMwvkCagpJSKP%2FiBkYpclvkQiVNTS6gzRlPWdRGXOkx0ij0nBoYmwvCh4OqLu9o%2BVm5mpPg2BMWE2PcIl7Zz6r3EOTgdQLQDQrzC7toXIEtz%2FTr%2B36dxfUFwRO%2FYuTzIwLgsTPJ%2FndqXuxjO%2Bzei8Gp0nf%2Bg16mFtZQGaBPiVF81i0aGfavwkkV4NkSLlKj74a1M0qzOtulptzcvnUo71dL8xz9xcRp%2FLfKSjSYgjCYHKRir7lKOBnGB7gPgVxl4rmvmuLAxZ6BLdUBbj19NT7fAaXU1kLR3ERPsjraalEy1U9zlJ%2BbMLeJd4%2F5oG95pbhMpYEU%2B%2FunqqlTvR0QGavNcn9eU365PCLqlGCUcV1RvDSvagvcyWosY1NFkgtIfCRbcEAvVuoSYgFUB32ilBtuAZBZ4mxn8I7WNwQKpUVFGMUlG0Nc%2BBd0TEtXWSc3yaTf4IJpkqyYpUsECE6auIAr7OVQOlYcvxFE7JKHtZrc3tPANQ4n9blm6WXqxrmQ14YxvOn6BDK5RnI941DBLANL9x%2BPc6dnUCRwXeufz0rt487JAw13Oc%2FlNmXKkb0kyt4iz9P%2F38wiP3SyQY6pgF%2BKewKMJ32eepseufXe87xYF2x7UXRP2TjZiCNxsqAt3srZXWmHr0mRV4ruu2u%2BjIgLbE%2FlJAUT6DKUMHP9DplKiwK6w8bcpo408wTgcPan48KrBxI2Y35OMRv3YNvjcc11dy%2B2bC54Uqf377zz6scrUsM4pzjN8HlrlpnPmlOtsqAO687Fdal6z%2Bxcl6q2lWPMszL7D2o1LcFOj9T1ZxWyCo484Pj&X-Amz-Signature=032c271f5c105ef46e98ae5465fc0a6e8fed3deb225a0f9607c31b5bc2616bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q66ULUJT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAq6NLYdyi5Df%2FbdMTI0a1FZGWVb0nISYeuZh%2Bc85zBAIhAOukTn5FSnUgbU7suRbLdd8pOUWRHbjOLMGW6X4txIi7KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVsOFrb301Xu9%2F6Vgq3APH5nASI4YmUxa3Ob3T6BoNssxkM%2FTAegwzQnGR38ZPN7Y26ryWrEKxV2w4CBB2jb1e517QiSf9Vu%2F33x75fmrL9fZjyty6%2F0YuvUXTFAIuYMQpmD%2FTWmQNJI4%2FV9GME4qyySWLQSr0atJqpMJjrydH2GjjLgEM5ZHYLNFjM0i3hmAbriPrwZpzb6CvEYTDHbz%2FuznIzmZB%2BrfzK9q1uaF%2B9PqCfTLvV2r7YUeh4jnGLBM4U9Dvp%2FDIW0R2Jzp2VB3kZ%2F9hSOgynVqjeslL5%2BinZIYBj7qhSP1NR7ydwz%2FSHl7YqEWi4dvwabMacrk9b7eZFprroEOjwaUS%2FGw6Xqhc%2BEqw%2BSeGyVpBiybL7E6EoGzeUATtD6Jaa6ZWSLNmvRLnnDlBzF%2FVAIrfTuiRCJpZnp1pf75r0%2BGnsk%2Fvw%2BZe52S1%2FNzl8lZT0WzgruzKF52HMn%2FytELgR%2BsmFmp71iII0DAdiepE3hzkR%2FzdLcXG9mUfommfd0TVNK2%2F03v1wlGo%2BAWLYimPP0fPm%2B%2F6TxHLtws6MArGDyeQ4GkKeeYfzwyDQG5pq%2F9%2FozjeMU0suHaFiBaAW6b9ElD5gWirf3oBMBJfKEDfL%2BraLrWUbioXZ%2FYXAk9O0figGaWGWTCu%2FtLJBjqkATOQsddyU1A2ii71nvHSNuwl7ZCqowrRhIOx%2FFlteRxntzFn1japqWx1LSpksgdkiHfpIpcgx1pwLoZJ100KFR7bjG%2FZ7dIMTwWppIRKV5srD9H7%2BIQ86qt1PG2cU6EJxleS%2Fn3DEAruSb3gsBCy78Hix6k9j9wZVjssL5kpSXWKJYBcWlTkJo3bOOwWqFxHrwMm82vV4lHuN%2F4OizDYrG3DjIBc&X-Amz-Signature=ffef8cbffa65196d2b7eda5b39e6c238dfde5cc466d8319a497fe018d9e4dd17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q66ULUJT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAq6NLYdyi5Df%2FbdMTI0a1FZGWVb0nISYeuZh%2Bc85zBAIhAOukTn5FSnUgbU7suRbLdd8pOUWRHbjOLMGW6X4txIi7KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVsOFrb301Xu9%2F6Vgq3APH5nASI4YmUxa3Ob3T6BoNssxkM%2FTAegwzQnGR38ZPN7Y26ryWrEKxV2w4CBB2jb1e517QiSf9Vu%2F33x75fmrL9fZjyty6%2F0YuvUXTFAIuYMQpmD%2FTWmQNJI4%2FV9GME4qyySWLQSr0atJqpMJjrydH2GjjLgEM5ZHYLNFjM0i3hmAbriPrwZpzb6CvEYTDHbz%2FuznIzmZB%2BrfzK9q1uaF%2B9PqCfTLvV2r7YUeh4jnGLBM4U9Dvp%2FDIW0R2Jzp2VB3kZ%2F9hSOgynVqjeslL5%2BinZIYBj7qhSP1NR7ydwz%2FSHl7YqEWi4dvwabMacrk9b7eZFprroEOjwaUS%2FGw6Xqhc%2BEqw%2BSeGyVpBiybL7E6EoGzeUATtD6Jaa6ZWSLNmvRLnnDlBzF%2FVAIrfTuiRCJpZnp1pf75r0%2BGnsk%2Fvw%2BZe52S1%2FNzl8lZT0WzgruzKF52HMn%2FytELgR%2BsmFmp71iII0DAdiepE3hzkR%2FzdLcXG9mUfommfd0TVNK2%2F03v1wlGo%2BAWLYimPP0fPm%2B%2F6TxHLtws6MArGDyeQ4GkKeeYfzwyDQG5pq%2F9%2FozjeMU0suHaFiBaAW6b9ElD5gWirf3oBMBJfKEDfL%2BraLrWUbioXZ%2FYXAk9O0figGaWGWTCu%2FtLJBjqkATOQsddyU1A2ii71nvHSNuwl7ZCqowrRhIOx%2FFlteRxntzFn1japqWx1LSpksgdkiHfpIpcgx1pwLoZJ100KFR7bjG%2FZ7dIMTwWppIRKV5srD9H7%2BIQ86qt1PG2cU6EJxleS%2Fn3DEAruSb3gsBCy78Hix6k9j9wZVjssL5kpSXWKJYBcWlTkJo3bOOwWqFxHrwMm82vV4lHuN%2F4OizDYrG3DjIBc&X-Amz-Signature=2d6bc6f2fafe1c8bda17644d47b84cc4a0e16225e162469f3164e771831e5400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q66ULUJT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAq6NLYdyi5Df%2FbdMTI0a1FZGWVb0nISYeuZh%2Bc85zBAIhAOukTn5FSnUgbU7suRbLdd8pOUWRHbjOLMGW6X4txIi7KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVsOFrb301Xu9%2F6Vgq3APH5nASI4YmUxa3Ob3T6BoNssxkM%2FTAegwzQnGR38ZPN7Y26ryWrEKxV2w4CBB2jb1e517QiSf9Vu%2F33x75fmrL9fZjyty6%2F0YuvUXTFAIuYMQpmD%2FTWmQNJI4%2FV9GME4qyySWLQSr0atJqpMJjrydH2GjjLgEM5ZHYLNFjM0i3hmAbriPrwZpzb6CvEYTDHbz%2FuznIzmZB%2BrfzK9q1uaF%2B9PqCfTLvV2r7YUeh4jnGLBM4U9Dvp%2FDIW0R2Jzp2VB3kZ%2F9hSOgynVqjeslL5%2BinZIYBj7qhSP1NR7ydwz%2FSHl7YqEWi4dvwabMacrk9b7eZFprroEOjwaUS%2FGw6Xqhc%2BEqw%2BSeGyVpBiybL7E6EoGzeUATtD6Jaa6ZWSLNmvRLnnDlBzF%2FVAIrfTuiRCJpZnp1pf75r0%2BGnsk%2Fvw%2BZe52S1%2FNzl8lZT0WzgruzKF52HMn%2FytELgR%2BsmFmp71iII0DAdiepE3hzkR%2FzdLcXG9mUfommfd0TVNK2%2F03v1wlGo%2BAWLYimPP0fPm%2B%2F6TxHLtws6MArGDyeQ4GkKeeYfzwyDQG5pq%2F9%2FozjeMU0suHaFiBaAW6b9ElD5gWirf3oBMBJfKEDfL%2BraLrWUbioXZ%2FYXAk9O0figGaWGWTCu%2FtLJBjqkATOQsddyU1A2ii71nvHSNuwl7ZCqowrRhIOx%2FFlteRxntzFn1japqWx1LSpksgdkiHfpIpcgx1pwLoZJ100KFR7bjG%2FZ7dIMTwWppIRKV5srD9H7%2BIQ86qt1PG2cU6EJxleS%2Fn3DEAruSb3gsBCy78Hix6k9j9wZVjssL5kpSXWKJYBcWlTkJo3bOOwWqFxHrwMm82vV4lHuN%2F4OizDYrG3DjIBc&X-Amz-Signature=4be72e43abf5916f67070cad0933ea77a17475d7ab704c0c20ddd1249701b57a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q66ULUJT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAq6NLYdyi5Df%2FbdMTI0a1FZGWVb0nISYeuZh%2Bc85zBAIhAOukTn5FSnUgbU7suRbLdd8pOUWRHbjOLMGW6X4txIi7KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVsOFrb301Xu9%2F6Vgq3APH5nASI4YmUxa3Ob3T6BoNssxkM%2FTAegwzQnGR38ZPN7Y26ryWrEKxV2w4CBB2jb1e517QiSf9Vu%2F33x75fmrL9fZjyty6%2F0YuvUXTFAIuYMQpmD%2FTWmQNJI4%2FV9GME4qyySWLQSr0atJqpMJjrydH2GjjLgEM5ZHYLNFjM0i3hmAbriPrwZpzb6CvEYTDHbz%2FuznIzmZB%2BrfzK9q1uaF%2B9PqCfTLvV2r7YUeh4jnGLBM4U9Dvp%2FDIW0R2Jzp2VB3kZ%2F9hSOgynVqjeslL5%2BinZIYBj7qhSP1NR7ydwz%2FSHl7YqEWi4dvwabMacrk9b7eZFprroEOjwaUS%2FGw6Xqhc%2BEqw%2BSeGyVpBiybL7E6EoGzeUATtD6Jaa6ZWSLNmvRLnnDlBzF%2FVAIrfTuiRCJpZnp1pf75r0%2BGnsk%2Fvw%2BZe52S1%2FNzl8lZT0WzgruzKF52HMn%2FytELgR%2BsmFmp71iII0DAdiepE3hzkR%2FzdLcXG9mUfommfd0TVNK2%2F03v1wlGo%2BAWLYimPP0fPm%2B%2F6TxHLtws6MArGDyeQ4GkKeeYfzwyDQG5pq%2F9%2FozjeMU0suHaFiBaAW6b9ElD5gWirf3oBMBJfKEDfL%2BraLrWUbioXZ%2FYXAk9O0figGaWGWTCu%2FtLJBjqkATOQsddyU1A2ii71nvHSNuwl7ZCqowrRhIOx%2FFlteRxntzFn1japqWx1LSpksgdkiHfpIpcgx1pwLoZJ100KFR7bjG%2FZ7dIMTwWppIRKV5srD9H7%2BIQ86qt1PG2cU6EJxleS%2Fn3DEAruSb3gsBCy78Hix6k9j9wZVjssL5kpSXWKJYBcWlTkJo3bOOwWqFxHrwMm82vV4lHuN%2F4OizDYrG3DjIBc&X-Amz-Signature=fec09fc99366670e8d8ccd58747ed023277703ea6d7cfe62317843327b066171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HKX5GCH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2F%2BkUbyav2c7dC%2BuUVmIhXByjIUFBEt7bSiOb%2B7e5JOAiEA1xsXYcVHYlM8d%2BQEVtvD3xFBbFengJMPzYc1j7AAwMEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETxOiMLFjL8iSCNuyrcA%2FTtu9aVS2oA1lBQQD3XeXKPpIQgOcT%2BMIdJ5eMsWIql4Se8ZCoGsGCAWD3hmIN2TgTe34PsQg1Nj4XRpJfq3nTLpcocvrDgsvWJsm5gRzjOeqKo18i9EpFRdkeMNsWErAHSHzY1iS0gQkXlZjeL0X6nBAEjmtJB24hxZkncwuvQGen1P%2FolzNtBjDoed266SiOnv8MsDF%2FQFVIZtZ0bi7nOw%2BFjTci4IzIg4yE%2B%2B8qxSD0SFFdA2qDz1ZUVllCKv8ihfwEfvncWUaZCEqWaHufRCkWdnr2yFG71wF%2BKRHs6cRcy4jB9oFO2kJXp0CbbsWG8DIoldssiKGVyyrFV2aZnxOJDQKh0VVqupajxZZ4c3rAM1RD0INvuRAMg8lDZIV6CtGwFjBu8wlKw%2F0Eo8hRy3%2BK7%2BE%2BHrCCmiAdcHXPxkbqWHtFATkskHfils7p07HMAib8Gr0hD0%2FWgcwqzIIYZPnZCYMN5Gjy2SZAsuiXRQcIicuclshko94mH3N0vyELQstQCaXL6W091Yk7NZu4y4UiSjSvQItRKndPxIcKs%2BGqe5wfYljAlSZRYd2wrSTAvrmjGTXgxfwOj%2BAw7uGy0M3xvmLDgtW1V%2Bvy%2Fcbd%2BPEpZtW2vfoPK9C0aMIr90skGOqUB4O%2Fy84G868RCnfUVlEjoHVZTA59%2BsqPlvk1mBtLfnu%2B42DWJWsH9HoLGRgiLz%2BTXtE0R8o9xI%2FsLzSeT%2FdeM65ToGC%2F7jp%2BUT257uztwclVAi5UAcCmAHJxz%2FAwv2YxNM3VVP%2FidrU%2Bb97SqKDYxyCRfx1KJ5uvUdIT8sPl5qm5r8NrsfJ7w7f%2BuHvXC0cGKGxpmOpPUuVXHJqOFpw0ICq37gCuw&X-Amz-Signature=9e77fd249e37826e8ddd86cc9a11fb98bc2e1418718be0f8412610593d3bc18c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q66ULUJT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAq6NLYdyi5Df%2FbdMTI0a1FZGWVb0nISYeuZh%2Bc85zBAIhAOukTn5FSnUgbU7suRbLdd8pOUWRHbjOLMGW6X4txIi7KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVsOFrb301Xu9%2F6Vgq3APH5nASI4YmUxa3Ob3T6BoNssxkM%2FTAegwzQnGR38ZPN7Y26ryWrEKxV2w4CBB2jb1e517QiSf9Vu%2F33x75fmrL9fZjyty6%2F0YuvUXTFAIuYMQpmD%2FTWmQNJI4%2FV9GME4qyySWLQSr0atJqpMJjrydH2GjjLgEM5ZHYLNFjM0i3hmAbriPrwZpzb6CvEYTDHbz%2FuznIzmZB%2BrfzK9q1uaF%2B9PqCfTLvV2r7YUeh4jnGLBM4U9Dvp%2FDIW0R2Jzp2VB3kZ%2F9hSOgynVqjeslL5%2BinZIYBj7qhSP1NR7ydwz%2FSHl7YqEWi4dvwabMacrk9b7eZFprroEOjwaUS%2FGw6Xqhc%2BEqw%2BSeGyVpBiybL7E6EoGzeUATtD6Jaa6ZWSLNmvRLnnDlBzF%2FVAIrfTuiRCJpZnp1pf75r0%2BGnsk%2Fvw%2BZe52S1%2FNzl8lZT0WzgruzKF52HMn%2FytELgR%2BsmFmp71iII0DAdiepE3hzkR%2FzdLcXG9mUfommfd0TVNK2%2F03v1wlGo%2BAWLYimPP0fPm%2B%2F6TxHLtws6MArGDyeQ4GkKeeYfzwyDQG5pq%2F9%2FozjeMU0suHaFiBaAW6b9ElD5gWirf3oBMBJfKEDfL%2BraLrWUbioXZ%2FYXAk9O0figGaWGWTCu%2FtLJBjqkATOQsddyU1A2ii71nvHSNuwl7ZCqowrRhIOx%2FFlteRxntzFn1japqWx1LSpksgdkiHfpIpcgx1pwLoZJ100KFR7bjG%2FZ7dIMTwWppIRKV5srD9H7%2BIQ86qt1PG2cU6EJxleS%2Fn3DEAruSb3gsBCy78Hix6k9j9wZVjssL5kpSXWKJYBcWlTkJo3bOOwWqFxHrwMm82vV4lHuN%2F4OizDYrG3DjIBc&X-Amz-Signature=d3e7fa8cc7cefd32f2af3bc5cb57316ad07cc5ab8b6888215dde0ccd0e9c98ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q66ULUJT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAq6NLYdyi5Df%2FbdMTI0a1FZGWVb0nISYeuZh%2Bc85zBAIhAOukTn5FSnUgbU7suRbLdd8pOUWRHbjOLMGW6X4txIi7KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVsOFrb301Xu9%2F6Vgq3APH5nASI4YmUxa3Ob3T6BoNssxkM%2FTAegwzQnGR38ZPN7Y26ryWrEKxV2w4CBB2jb1e517QiSf9Vu%2F33x75fmrL9fZjyty6%2F0YuvUXTFAIuYMQpmD%2FTWmQNJI4%2FV9GME4qyySWLQSr0atJqpMJjrydH2GjjLgEM5ZHYLNFjM0i3hmAbriPrwZpzb6CvEYTDHbz%2FuznIzmZB%2BrfzK9q1uaF%2B9PqCfTLvV2r7YUeh4jnGLBM4U9Dvp%2FDIW0R2Jzp2VB3kZ%2F9hSOgynVqjeslL5%2BinZIYBj7qhSP1NR7ydwz%2FSHl7YqEWi4dvwabMacrk9b7eZFprroEOjwaUS%2FGw6Xqhc%2BEqw%2BSeGyVpBiybL7E6EoGzeUATtD6Jaa6ZWSLNmvRLnnDlBzF%2FVAIrfTuiRCJpZnp1pf75r0%2BGnsk%2Fvw%2BZe52S1%2FNzl8lZT0WzgruzKF52HMn%2FytELgR%2BsmFmp71iII0DAdiepE3hzkR%2FzdLcXG9mUfommfd0TVNK2%2F03v1wlGo%2BAWLYimPP0fPm%2B%2F6TxHLtws6MArGDyeQ4GkKeeYfzwyDQG5pq%2F9%2FozjeMU0suHaFiBaAW6b9ElD5gWirf3oBMBJfKEDfL%2BraLrWUbioXZ%2FYXAk9O0figGaWGWTCu%2FtLJBjqkATOQsddyU1A2ii71nvHSNuwl7ZCqowrRhIOx%2FFlteRxntzFn1japqWx1LSpksgdkiHfpIpcgx1pwLoZJ100KFR7bjG%2FZ7dIMTwWppIRKV5srD9H7%2BIQ86qt1PG2cU6EJxleS%2Fn3DEAruSb3gsBCy78Hix6k9j9wZVjssL5kpSXWKJYBcWlTkJo3bOOwWqFxHrwMm82vV4lHuN%2F4OizDYrG3DjIBc&X-Amz-Signature=957b026fda56bb6b864502cd84efe66d6c24c700508db39e65a6753e0004f887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q66ULUJT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAq6NLYdyi5Df%2FbdMTI0a1FZGWVb0nISYeuZh%2Bc85zBAIhAOukTn5FSnUgbU7suRbLdd8pOUWRHbjOLMGW6X4txIi7KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVsOFrb301Xu9%2F6Vgq3APH5nASI4YmUxa3Ob3T6BoNssxkM%2FTAegwzQnGR38ZPN7Y26ryWrEKxV2w4CBB2jb1e517QiSf9Vu%2F33x75fmrL9fZjyty6%2F0YuvUXTFAIuYMQpmD%2FTWmQNJI4%2FV9GME4qyySWLQSr0atJqpMJjrydH2GjjLgEM5ZHYLNFjM0i3hmAbriPrwZpzb6CvEYTDHbz%2FuznIzmZB%2BrfzK9q1uaF%2B9PqCfTLvV2r7YUeh4jnGLBM4U9Dvp%2FDIW0R2Jzp2VB3kZ%2F9hSOgynVqjeslL5%2BinZIYBj7qhSP1NR7ydwz%2FSHl7YqEWi4dvwabMacrk9b7eZFprroEOjwaUS%2FGw6Xqhc%2BEqw%2BSeGyVpBiybL7E6EoGzeUATtD6Jaa6ZWSLNmvRLnnDlBzF%2FVAIrfTuiRCJpZnp1pf75r0%2BGnsk%2Fvw%2BZe52S1%2FNzl8lZT0WzgruzKF52HMn%2FytELgR%2BsmFmp71iII0DAdiepE3hzkR%2FzdLcXG9mUfommfd0TVNK2%2F03v1wlGo%2BAWLYimPP0fPm%2B%2F6TxHLtws6MArGDyeQ4GkKeeYfzwyDQG5pq%2F9%2FozjeMU0suHaFiBaAW6b9ElD5gWirf3oBMBJfKEDfL%2BraLrWUbioXZ%2FYXAk9O0figGaWGWTCu%2FtLJBjqkATOQsddyU1A2ii71nvHSNuwl7ZCqowrRhIOx%2FFlteRxntzFn1japqWx1LSpksgdkiHfpIpcgx1pwLoZJ100KFR7bjG%2FZ7dIMTwWppIRKV5srD9H7%2BIQ86qt1PG2cU6EJxleS%2Fn3DEAruSb3gsBCy78Hix6k9j9wZVjssL5kpSXWKJYBcWlTkJo3bOOwWqFxHrwMm82vV4lHuN%2F4OizDYrG3DjIBc&X-Amz-Signature=4be72e43abf5916f67070cad0933ea77a17475d7ab704c0c20ddd1249701b57a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q66ULUJT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAq6NLYdyi5Df%2FbdMTI0a1FZGWVb0nISYeuZh%2Bc85zBAIhAOukTn5FSnUgbU7suRbLdd8pOUWRHbjOLMGW6X4txIi7KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVsOFrb301Xu9%2F6Vgq3APH5nASI4YmUxa3Ob3T6BoNssxkM%2FTAegwzQnGR38ZPN7Y26ryWrEKxV2w4CBB2jb1e517QiSf9Vu%2F33x75fmrL9fZjyty6%2F0YuvUXTFAIuYMQpmD%2FTWmQNJI4%2FV9GME4qyySWLQSr0atJqpMJjrydH2GjjLgEM5ZHYLNFjM0i3hmAbriPrwZpzb6CvEYTDHbz%2FuznIzmZB%2BrfzK9q1uaF%2B9PqCfTLvV2r7YUeh4jnGLBM4U9Dvp%2FDIW0R2Jzp2VB3kZ%2F9hSOgynVqjeslL5%2BinZIYBj7qhSP1NR7ydwz%2FSHl7YqEWi4dvwabMacrk9b7eZFprroEOjwaUS%2FGw6Xqhc%2BEqw%2BSeGyVpBiybL7E6EoGzeUATtD6Jaa6ZWSLNmvRLnnDlBzF%2FVAIrfTuiRCJpZnp1pf75r0%2BGnsk%2Fvw%2BZe52S1%2FNzl8lZT0WzgruzKF52HMn%2FytELgR%2BsmFmp71iII0DAdiepE3hzkR%2FzdLcXG9mUfommfd0TVNK2%2F03v1wlGo%2BAWLYimPP0fPm%2B%2F6TxHLtws6MArGDyeQ4GkKeeYfzwyDQG5pq%2F9%2FozjeMU0suHaFiBaAW6b9ElD5gWirf3oBMBJfKEDfL%2BraLrWUbioXZ%2FYXAk9O0figGaWGWTCu%2FtLJBjqkATOQsddyU1A2ii71nvHSNuwl7ZCqowrRhIOx%2FFlteRxntzFn1japqWx1LSpksgdkiHfpIpcgx1pwLoZJ100KFR7bjG%2FZ7dIMTwWppIRKV5srD9H7%2BIQ86qt1PG2cU6EJxleS%2Fn3DEAruSb3gsBCy78Hix6k9j9wZVjssL5kpSXWKJYBcWlTkJo3bOOwWqFxHrwMm82vV4lHuN%2F4OizDYrG3DjIBc&X-Amz-Signature=a4b57a4dc7a021aaa25888bacd7dc0787b72c94aee4a03e09f065ab9c31d8e71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q66ULUJT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAq6NLYdyi5Df%2FbdMTI0a1FZGWVb0nISYeuZh%2Bc85zBAIhAOukTn5FSnUgbU7suRbLdd8pOUWRHbjOLMGW6X4txIi7KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVsOFrb301Xu9%2F6Vgq3APH5nASI4YmUxa3Ob3T6BoNssxkM%2FTAegwzQnGR38ZPN7Y26ryWrEKxV2w4CBB2jb1e517QiSf9Vu%2F33x75fmrL9fZjyty6%2F0YuvUXTFAIuYMQpmD%2FTWmQNJI4%2FV9GME4qyySWLQSr0atJqpMJjrydH2GjjLgEM5ZHYLNFjM0i3hmAbriPrwZpzb6CvEYTDHbz%2FuznIzmZB%2BrfzK9q1uaF%2B9PqCfTLvV2r7YUeh4jnGLBM4U9Dvp%2FDIW0R2Jzp2VB3kZ%2F9hSOgynVqjeslL5%2BinZIYBj7qhSP1NR7ydwz%2FSHl7YqEWi4dvwabMacrk9b7eZFprroEOjwaUS%2FGw6Xqhc%2BEqw%2BSeGyVpBiybL7E6EoGzeUATtD6Jaa6ZWSLNmvRLnnDlBzF%2FVAIrfTuiRCJpZnp1pf75r0%2BGnsk%2Fvw%2BZe52S1%2FNzl8lZT0WzgruzKF52HMn%2FytELgR%2BsmFmp71iII0DAdiepE3hzkR%2FzdLcXG9mUfommfd0TVNK2%2F03v1wlGo%2BAWLYimPP0fPm%2B%2F6TxHLtws6MArGDyeQ4GkKeeYfzwyDQG5pq%2F9%2FozjeMU0suHaFiBaAW6b9ElD5gWirf3oBMBJfKEDfL%2BraLrWUbioXZ%2FYXAk9O0figGaWGWTCu%2FtLJBjqkATOQsddyU1A2ii71nvHSNuwl7ZCqowrRhIOx%2FFlteRxntzFn1japqWx1LSpksgdkiHfpIpcgx1pwLoZJ100KFR7bjG%2FZ7dIMTwWppIRKV5srD9H7%2BIQ86qt1PG2cU6EJxleS%2Fn3DEAruSb3gsBCy78Hix6k9j9wZVjssL5kpSXWKJYBcWlTkJo3bOOwWqFxHrwMm82vV4lHuN%2F4OizDYrG3DjIBc&X-Amz-Signature=e6b34b612c775b0dc58d09935d26bc936c4589bde1bab69bbaaf4476c931d35b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q66ULUJT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAq6NLYdyi5Df%2FbdMTI0a1FZGWVb0nISYeuZh%2Bc85zBAIhAOukTn5FSnUgbU7suRbLdd8pOUWRHbjOLMGW6X4txIi7KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVsOFrb301Xu9%2F6Vgq3APH5nASI4YmUxa3Ob3T6BoNssxkM%2FTAegwzQnGR38ZPN7Y26ryWrEKxV2w4CBB2jb1e517QiSf9Vu%2F33x75fmrL9fZjyty6%2F0YuvUXTFAIuYMQpmD%2FTWmQNJI4%2FV9GME4qyySWLQSr0atJqpMJjrydH2GjjLgEM5ZHYLNFjM0i3hmAbriPrwZpzb6CvEYTDHbz%2FuznIzmZB%2BrfzK9q1uaF%2B9PqCfTLvV2r7YUeh4jnGLBM4U9Dvp%2FDIW0R2Jzp2VB3kZ%2F9hSOgynVqjeslL5%2BinZIYBj7qhSP1NR7ydwz%2FSHl7YqEWi4dvwabMacrk9b7eZFprroEOjwaUS%2FGw6Xqhc%2BEqw%2BSeGyVpBiybL7E6EoGzeUATtD6Jaa6ZWSLNmvRLnnDlBzF%2FVAIrfTuiRCJpZnp1pf75r0%2BGnsk%2Fvw%2BZe52S1%2FNzl8lZT0WzgruzKF52HMn%2FytELgR%2BsmFmp71iII0DAdiepE3hzkR%2FzdLcXG9mUfommfd0TVNK2%2F03v1wlGo%2BAWLYimPP0fPm%2B%2F6TxHLtws6MArGDyeQ4GkKeeYfzwyDQG5pq%2F9%2FozjeMU0suHaFiBaAW6b9ElD5gWirf3oBMBJfKEDfL%2BraLrWUbioXZ%2FYXAk9O0figGaWGWTCu%2FtLJBjqkATOQsddyU1A2ii71nvHSNuwl7ZCqowrRhIOx%2FFlteRxntzFn1japqWx1LSpksgdkiHfpIpcgx1pwLoZJ100KFR7bjG%2FZ7dIMTwWppIRKV5srD9H7%2BIQ86qt1PG2cU6EJxleS%2Fn3DEAruSb3gsBCy78Hix6k9j9wZVjssL5kpSXWKJYBcWlTkJo3bOOwWqFxHrwMm82vV4lHuN%2F4OizDYrG3DjIBc&X-Amz-Signature=77ca3b89dade9dfb4c870debec46d5c0604a36df681421aa093125b5c3b0cb19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


