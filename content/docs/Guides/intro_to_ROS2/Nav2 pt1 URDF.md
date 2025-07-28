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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQS6RDF3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDSu91viC1c024GIhlZrkQn2FYf6vJVkx8%2FFD888XtuQAiBTlN8uGTMpsDXkS5ByhsXIvy4fpeTWlSEsj0bsryBAkSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIw8WgWGhOJKGMaxmKtwDGAdFf6TknxHDDDs6adRlX2X4AwutEL35CfGY7wWzkGDMMbYGYTH7N4%2BMsBIv73fCvm1lWa7xeSLBZgcdZsVss3mI0xcpBdJMGxgna0KHqEKiZcUTXGAHTj%2FgKZHhOUX7Jp1sL3Ecf22gW5n0Q%2FDRHU%2FS6UkSm4tWlbmSf5V9Q8M%2BbJm25dqfv8MU03NsrulWKjfkA35RjrP96gcn51MDmQ0B6%2FoHTlcB7Kv9%2Fx9B2jbmgAOCWwerg2Lhd1ZFGBlOL93oduFOzPCRz8jNCvsCsUllHdzCLfkeFDe1tcf6YqCdjdeTwQG7V7SsztfqXDOihYPx80A%2FF3CBk66g2kO4Fr1QdXELsH4SWQVQhjZrN%2Frc2%2BjPFbJA8UfHv4oab7k%2F73WVpD9E7ac9x%2F5xxy9%2FXtPxR4KGFLokjV1RfrDSwOre0aEi35FDEVKv5NNiSwCCcV1kpACPQ6nB%2Fyl6ZqrNzs9xmDsCAPMPThmCd8EQSotXh6FLUXZkGbYykSPPkIYmxuBxfaz7Ikjf28L7vzfgJtLvvemC8QkavmgLGtLzK5A6IbHL3k9LdvGVRcd4VlL5g62%2B7OkPwcws1QUyIkWNYANmZSR%2By9DBJHJ2zUkHoOgzd%2F7ir3tCpbHioJkwhtKexAY6pgFAQxjO5B6tUn7YfsQ%2FSB6jmVoZFCSF38jKwi5gfJuvuHGSrRbr3%2B0NMUzreBJ9apdWloPeAlSvqQ3GFnK4JiK3%2BH3nQvFbge3W9DfOfCF%2BUxBTgbeRvKso95S76jXKfWA9bWqF6Zt047KRD9%2BdLWcw%2FIQzydycbTSAFYH6rs%2F73W2ja0WDbAjJaNGZp5ugt8HUsIEsSWSzhPDS2MmkvpxOJwxb6xqY&X-Amz-Signature=59dbcd52a4ff430953ebb1eb60e04b5214c221ef729f44a89859dddc035825fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQS6RDF3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDSu91viC1c024GIhlZrkQn2FYf6vJVkx8%2FFD888XtuQAiBTlN8uGTMpsDXkS5ByhsXIvy4fpeTWlSEsj0bsryBAkSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIw8WgWGhOJKGMaxmKtwDGAdFf6TknxHDDDs6adRlX2X4AwutEL35CfGY7wWzkGDMMbYGYTH7N4%2BMsBIv73fCvm1lWa7xeSLBZgcdZsVss3mI0xcpBdJMGxgna0KHqEKiZcUTXGAHTj%2FgKZHhOUX7Jp1sL3Ecf22gW5n0Q%2FDRHU%2FS6UkSm4tWlbmSf5V9Q8M%2BbJm25dqfv8MU03NsrulWKjfkA35RjrP96gcn51MDmQ0B6%2FoHTlcB7Kv9%2Fx9B2jbmgAOCWwerg2Lhd1ZFGBlOL93oduFOzPCRz8jNCvsCsUllHdzCLfkeFDe1tcf6YqCdjdeTwQG7V7SsztfqXDOihYPx80A%2FF3CBk66g2kO4Fr1QdXELsH4SWQVQhjZrN%2Frc2%2BjPFbJA8UfHv4oab7k%2F73WVpD9E7ac9x%2F5xxy9%2FXtPxR4KGFLokjV1RfrDSwOre0aEi35FDEVKv5NNiSwCCcV1kpACPQ6nB%2Fyl6ZqrNzs9xmDsCAPMPThmCd8EQSotXh6FLUXZkGbYykSPPkIYmxuBxfaz7Ikjf28L7vzfgJtLvvemC8QkavmgLGtLzK5A6IbHL3k9LdvGVRcd4VlL5g62%2B7OkPwcws1QUyIkWNYANmZSR%2By9DBJHJ2zUkHoOgzd%2F7ir3tCpbHioJkwhtKexAY6pgFAQxjO5B6tUn7YfsQ%2FSB6jmVoZFCSF38jKwi5gfJuvuHGSrRbr3%2B0NMUzreBJ9apdWloPeAlSvqQ3GFnK4JiK3%2BH3nQvFbge3W9DfOfCF%2BUxBTgbeRvKso95S76jXKfWA9bWqF6Zt047KRD9%2BdLWcw%2FIQzydycbTSAFYH6rs%2F73W2ja0WDbAjJaNGZp5ugt8HUsIEsSWSzhPDS2MmkvpxOJwxb6xqY&X-Amz-Signature=a6775dcdb6ee87e3cf43a498fd632a7704aee728ebbc8d4e76dc1aed9befc242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQS6RDF3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDSu91viC1c024GIhlZrkQn2FYf6vJVkx8%2FFD888XtuQAiBTlN8uGTMpsDXkS5ByhsXIvy4fpeTWlSEsj0bsryBAkSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIw8WgWGhOJKGMaxmKtwDGAdFf6TknxHDDDs6adRlX2X4AwutEL35CfGY7wWzkGDMMbYGYTH7N4%2BMsBIv73fCvm1lWa7xeSLBZgcdZsVss3mI0xcpBdJMGxgna0KHqEKiZcUTXGAHTj%2FgKZHhOUX7Jp1sL3Ecf22gW5n0Q%2FDRHU%2FS6UkSm4tWlbmSf5V9Q8M%2BbJm25dqfv8MU03NsrulWKjfkA35RjrP96gcn51MDmQ0B6%2FoHTlcB7Kv9%2Fx9B2jbmgAOCWwerg2Lhd1ZFGBlOL93oduFOzPCRz8jNCvsCsUllHdzCLfkeFDe1tcf6YqCdjdeTwQG7V7SsztfqXDOihYPx80A%2FF3CBk66g2kO4Fr1QdXELsH4SWQVQhjZrN%2Frc2%2BjPFbJA8UfHv4oab7k%2F73WVpD9E7ac9x%2F5xxy9%2FXtPxR4KGFLokjV1RfrDSwOre0aEi35FDEVKv5NNiSwCCcV1kpACPQ6nB%2Fyl6ZqrNzs9xmDsCAPMPThmCd8EQSotXh6FLUXZkGbYykSPPkIYmxuBxfaz7Ikjf28L7vzfgJtLvvemC8QkavmgLGtLzK5A6IbHL3k9LdvGVRcd4VlL5g62%2B7OkPwcws1QUyIkWNYANmZSR%2By9DBJHJ2zUkHoOgzd%2F7ir3tCpbHioJkwhtKexAY6pgFAQxjO5B6tUn7YfsQ%2FSB6jmVoZFCSF38jKwi5gfJuvuHGSrRbr3%2B0NMUzreBJ9apdWloPeAlSvqQ3GFnK4JiK3%2BH3nQvFbge3W9DfOfCF%2BUxBTgbeRvKso95S76jXKfWA9bWqF6Zt047KRD9%2BdLWcw%2FIQzydycbTSAFYH6rs%2F73W2ja0WDbAjJaNGZp5ugt8HUsIEsSWSzhPDS2MmkvpxOJwxb6xqY&X-Amz-Signature=417e3210003709e4e526e86c28af686447412d657d85b34f83e789854b3ad127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQS6RDF3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDSu91viC1c024GIhlZrkQn2FYf6vJVkx8%2FFD888XtuQAiBTlN8uGTMpsDXkS5ByhsXIvy4fpeTWlSEsj0bsryBAkSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIw8WgWGhOJKGMaxmKtwDGAdFf6TknxHDDDs6adRlX2X4AwutEL35CfGY7wWzkGDMMbYGYTH7N4%2BMsBIv73fCvm1lWa7xeSLBZgcdZsVss3mI0xcpBdJMGxgna0KHqEKiZcUTXGAHTj%2FgKZHhOUX7Jp1sL3Ecf22gW5n0Q%2FDRHU%2FS6UkSm4tWlbmSf5V9Q8M%2BbJm25dqfv8MU03NsrulWKjfkA35RjrP96gcn51MDmQ0B6%2FoHTlcB7Kv9%2Fx9B2jbmgAOCWwerg2Lhd1ZFGBlOL93oduFOzPCRz8jNCvsCsUllHdzCLfkeFDe1tcf6YqCdjdeTwQG7V7SsztfqXDOihYPx80A%2FF3CBk66g2kO4Fr1QdXELsH4SWQVQhjZrN%2Frc2%2BjPFbJA8UfHv4oab7k%2F73WVpD9E7ac9x%2F5xxy9%2FXtPxR4KGFLokjV1RfrDSwOre0aEi35FDEVKv5NNiSwCCcV1kpACPQ6nB%2Fyl6ZqrNzs9xmDsCAPMPThmCd8EQSotXh6FLUXZkGbYykSPPkIYmxuBxfaz7Ikjf28L7vzfgJtLvvemC8QkavmgLGtLzK5A6IbHL3k9LdvGVRcd4VlL5g62%2B7OkPwcws1QUyIkWNYANmZSR%2By9DBJHJ2zUkHoOgzd%2F7ir3tCpbHioJkwhtKexAY6pgFAQxjO5B6tUn7YfsQ%2FSB6jmVoZFCSF38jKwi5gfJuvuHGSrRbr3%2B0NMUzreBJ9apdWloPeAlSvqQ3GFnK4JiK3%2BH3nQvFbge3W9DfOfCF%2BUxBTgbeRvKso95S76jXKfWA9bWqF6Zt047KRD9%2BdLWcw%2FIQzydycbTSAFYH6rs%2F73W2ja0WDbAjJaNGZp5ugt8HUsIEsSWSzhPDS2MmkvpxOJwxb6xqY&X-Amz-Signature=05334a1dd4b846115a342dfa78d0ee5c25380db5888dec019876cc6c91c17ced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQS6RDF3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDSu91viC1c024GIhlZrkQn2FYf6vJVkx8%2FFD888XtuQAiBTlN8uGTMpsDXkS5ByhsXIvy4fpeTWlSEsj0bsryBAkSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIw8WgWGhOJKGMaxmKtwDGAdFf6TknxHDDDs6adRlX2X4AwutEL35CfGY7wWzkGDMMbYGYTH7N4%2BMsBIv73fCvm1lWa7xeSLBZgcdZsVss3mI0xcpBdJMGxgna0KHqEKiZcUTXGAHTj%2FgKZHhOUX7Jp1sL3Ecf22gW5n0Q%2FDRHU%2FS6UkSm4tWlbmSf5V9Q8M%2BbJm25dqfv8MU03NsrulWKjfkA35RjrP96gcn51MDmQ0B6%2FoHTlcB7Kv9%2Fx9B2jbmgAOCWwerg2Lhd1ZFGBlOL93oduFOzPCRz8jNCvsCsUllHdzCLfkeFDe1tcf6YqCdjdeTwQG7V7SsztfqXDOihYPx80A%2FF3CBk66g2kO4Fr1QdXELsH4SWQVQhjZrN%2Frc2%2BjPFbJA8UfHv4oab7k%2F73WVpD9E7ac9x%2F5xxy9%2FXtPxR4KGFLokjV1RfrDSwOre0aEi35FDEVKv5NNiSwCCcV1kpACPQ6nB%2Fyl6ZqrNzs9xmDsCAPMPThmCd8EQSotXh6FLUXZkGbYykSPPkIYmxuBxfaz7Ikjf28L7vzfgJtLvvemC8QkavmgLGtLzK5A6IbHL3k9LdvGVRcd4VlL5g62%2B7OkPwcws1QUyIkWNYANmZSR%2By9DBJHJ2zUkHoOgzd%2F7ir3tCpbHioJkwhtKexAY6pgFAQxjO5B6tUn7YfsQ%2FSB6jmVoZFCSF38jKwi5gfJuvuHGSrRbr3%2B0NMUzreBJ9apdWloPeAlSvqQ3GFnK4JiK3%2BH3nQvFbge3W9DfOfCF%2BUxBTgbeRvKso95S76jXKfWA9bWqF6Zt047KRD9%2BdLWcw%2FIQzydycbTSAFYH6rs%2F73W2ja0WDbAjJaNGZp5ugt8HUsIEsSWSzhPDS2MmkvpxOJwxb6xqY&X-Amz-Signature=2a1fcd319472b9b9e40f61d14b189efd915237add3583220a0ff0ac171f9e6f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQS6RDF3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDSu91viC1c024GIhlZrkQn2FYf6vJVkx8%2FFD888XtuQAiBTlN8uGTMpsDXkS5ByhsXIvy4fpeTWlSEsj0bsryBAkSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIw8WgWGhOJKGMaxmKtwDGAdFf6TknxHDDDs6adRlX2X4AwutEL35CfGY7wWzkGDMMbYGYTH7N4%2BMsBIv73fCvm1lWa7xeSLBZgcdZsVss3mI0xcpBdJMGxgna0KHqEKiZcUTXGAHTj%2FgKZHhOUX7Jp1sL3Ecf22gW5n0Q%2FDRHU%2FS6UkSm4tWlbmSf5V9Q8M%2BbJm25dqfv8MU03NsrulWKjfkA35RjrP96gcn51MDmQ0B6%2FoHTlcB7Kv9%2Fx9B2jbmgAOCWwerg2Lhd1ZFGBlOL93oduFOzPCRz8jNCvsCsUllHdzCLfkeFDe1tcf6YqCdjdeTwQG7V7SsztfqXDOihYPx80A%2FF3CBk66g2kO4Fr1QdXELsH4SWQVQhjZrN%2Frc2%2BjPFbJA8UfHv4oab7k%2F73WVpD9E7ac9x%2F5xxy9%2FXtPxR4KGFLokjV1RfrDSwOre0aEi35FDEVKv5NNiSwCCcV1kpACPQ6nB%2Fyl6ZqrNzs9xmDsCAPMPThmCd8EQSotXh6FLUXZkGbYykSPPkIYmxuBxfaz7Ikjf28L7vzfgJtLvvemC8QkavmgLGtLzK5A6IbHL3k9LdvGVRcd4VlL5g62%2B7OkPwcws1QUyIkWNYANmZSR%2By9DBJHJ2zUkHoOgzd%2F7ir3tCpbHioJkwhtKexAY6pgFAQxjO5B6tUn7YfsQ%2FSB6jmVoZFCSF38jKwi5gfJuvuHGSrRbr3%2B0NMUzreBJ9apdWloPeAlSvqQ3GFnK4JiK3%2BH3nQvFbge3W9DfOfCF%2BUxBTgbeRvKso95S76jXKfWA9bWqF6Zt047KRD9%2BdLWcw%2FIQzydycbTSAFYH6rs%2F73W2ja0WDbAjJaNGZp5ugt8HUsIEsSWSzhPDS2MmkvpxOJwxb6xqY&X-Amz-Signature=a0ac446ee2388250cbc7a2fba31529b85dfb4717aa16a0a9c5a485eb284712e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQS6RDF3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDSu91viC1c024GIhlZrkQn2FYf6vJVkx8%2FFD888XtuQAiBTlN8uGTMpsDXkS5ByhsXIvy4fpeTWlSEsj0bsryBAkSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIw8WgWGhOJKGMaxmKtwDGAdFf6TknxHDDDs6adRlX2X4AwutEL35CfGY7wWzkGDMMbYGYTH7N4%2BMsBIv73fCvm1lWa7xeSLBZgcdZsVss3mI0xcpBdJMGxgna0KHqEKiZcUTXGAHTj%2FgKZHhOUX7Jp1sL3Ecf22gW5n0Q%2FDRHU%2FS6UkSm4tWlbmSf5V9Q8M%2BbJm25dqfv8MU03NsrulWKjfkA35RjrP96gcn51MDmQ0B6%2FoHTlcB7Kv9%2Fx9B2jbmgAOCWwerg2Lhd1ZFGBlOL93oduFOzPCRz8jNCvsCsUllHdzCLfkeFDe1tcf6YqCdjdeTwQG7V7SsztfqXDOihYPx80A%2FF3CBk66g2kO4Fr1QdXELsH4SWQVQhjZrN%2Frc2%2BjPFbJA8UfHv4oab7k%2F73WVpD9E7ac9x%2F5xxy9%2FXtPxR4KGFLokjV1RfrDSwOre0aEi35FDEVKv5NNiSwCCcV1kpACPQ6nB%2Fyl6ZqrNzs9xmDsCAPMPThmCd8EQSotXh6FLUXZkGbYykSPPkIYmxuBxfaz7Ikjf28L7vzfgJtLvvemC8QkavmgLGtLzK5A6IbHL3k9LdvGVRcd4VlL5g62%2B7OkPwcws1QUyIkWNYANmZSR%2By9DBJHJ2zUkHoOgzd%2F7ir3tCpbHioJkwhtKexAY6pgFAQxjO5B6tUn7YfsQ%2FSB6jmVoZFCSF38jKwi5gfJuvuHGSrRbr3%2B0NMUzreBJ9apdWloPeAlSvqQ3GFnK4JiK3%2BH3nQvFbge3W9DfOfCF%2BUxBTgbeRvKso95S76jXKfWA9bWqF6Zt047KRD9%2BdLWcw%2FIQzydycbTSAFYH6rs%2F73W2ja0WDbAjJaNGZp5ugt8HUsIEsSWSzhPDS2MmkvpxOJwxb6xqY&X-Amz-Signature=59589cb3fa0dceaf50f71e7c566386e4fa7b8c1bd34d1d7ae09ff96868ae4396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQS6RDF3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDSu91viC1c024GIhlZrkQn2FYf6vJVkx8%2FFD888XtuQAiBTlN8uGTMpsDXkS5ByhsXIvy4fpeTWlSEsj0bsryBAkSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIw8WgWGhOJKGMaxmKtwDGAdFf6TknxHDDDs6adRlX2X4AwutEL35CfGY7wWzkGDMMbYGYTH7N4%2BMsBIv73fCvm1lWa7xeSLBZgcdZsVss3mI0xcpBdJMGxgna0KHqEKiZcUTXGAHTj%2FgKZHhOUX7Jp1sL3Ecf22gW5n0Q%2FDRHU%2FS6UkSm4tWlbmSf5V9Q8M%2BbJm25dqfv8MU03NsrulWKjfkA35RjrP96gcn51MDmQ0B6%2FoHTlcB7Kv9%2Fx9B2jbmgAOCWwerg2Lhd1ZFGBlOL93oduFOzPCRz8jNCvsCsUllHdzCLfkeFDe1tcf6YqCdjdeTwQG7V7SsztfqXDOihYPx80A%2FF3CBk66g2kO4Fr1QdXELsH4SWQVQhjZrN%2Frc2%2BjPFbJA8UfHv4oab7k%2F73WVpD9E7ac9x%2F5xxy9%2FXtPxR4KGFLokjV1RfrDSwOre0aEi35FDEVKv5NNiSwCCcV1kpACPQ6nB%2Fyl6ZqrNzs9xmDsCAPMPThmCd8EQSotXh6FLUXZkGbYykSPPkIYmxuBxfaz7Ikjf28L7vzfgJtLvvemC8QkavmgLGtLzK5A6IbHL3k9LdvGVRcd4VlL5g62%2B7OkPwcws1QUyIkWNYANmZSR%2By9DBJHJ2zUkHoOgzd%2F7ir3tCpbHioJkwhtKexAY6pgFAQxjO5B6tUn7YfsQ%2FSB6jmVoZFCSF38jKwi5gfJuvuHGSrRbr3%2B0NMUzreBJ9apdWloPeAlSvqQ3GFnK4JiK3%2BH3nQvFbge3W9DfOfCF%2BUxBTgbeRvKso95S76jXKfWA9bWqF6Zt047KRD9%2BdLWcw%2FIQzydycbTSAFYH6rs%2F73W2ja0WDbAjJaNGZp5ugt8HUsIEsSWSzhPDS2MmkvpxOJwxb6xqY&X-Amz-Signature=065b5161f83b9504caaa3f3f3e80e969b6097979135dd0edb81e0c5435334ee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQS6RDF3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDSu91viC1c024GIhlZrkQn2FYf6vJVkx8%2FFD888XtuQAiBTlN8uGTMpsDXkS5ByhsXIvy4fpeTWlSEsj0bsryBAkSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIw8WgWGhOJKGMaxmKtwDGAdFf6TknxHDDDs6adRlX2X4AwutEL35CfGY7wWzkGDMMbYGYTH7N4%2BMsBIv73fCvm1lWa7xeSLBZgcdZsVss3mI0xcpBdJMGxgna0KHqEKiZcUTXGAHTj%2FgKZHhOUX7Jp1sL3Ecf22gW5n0Q%2FDRHU%2FS6UkSm4tWlbmSf5V9Q8M%2BbJm25dqfv8MU03NsrulWKjfkA35RjrP96gcn51MDmQ0B6%2FoHTlcB7Kv9%2Fx9B2jbmgAOCWwerg2Lhd1ZFGBlOL93oduFOzPCRz8jNCvsCsUllHdzCLfkeFDe1tcf6YqCdjdeTwQG7V7SsztfqXDOihYPx80A%2FF3CBk66g2kO4Fr1QdXELsH4SWQVQhjZrN%2Frc2%2BjPFbJA8UfHv4oab7k%2F73WVpD9E7ac9x%2F5xxy9%2FXtPxR4KGFLokjV1RfrDSwOre0aEi35FDEVKv5NNiSwCCcV1kpACPQ6nB%2Fyl6ZqrNzs9xmDsCAPMPThmCd8EQSotXh6FLUXZkGbYykSPPkIYmxuBxfaz7Ikjf28L7vzfgJtLvvemC8QkavmgLGtLzK5A6IbHL3k9LdvGVRcd4VlL5g62%2B7OkPwcws1QUyIkWNYANmZSR%2By9DBJHJ2zUkHoOgzd%2F7ir3tCpbHioJkwhtKexAY6pgFAQxjO5B6tUn7YfsQ%2FSB6jmVoZFCSF38jKwi5gfJuvuHGSrRbr3%2B0NMUzreBJ9apdWloPeAlSvqQ3GFnK4JiK3%2BH3nQvFbge3W9DfOfCF%2BUxBTgbeRvKso95S76jXKfWA9bWqF6Zt047KRD9%2BdLWcw%2FIQzydycbTSAFYH6rs%2F73W2ja0WDbAjJaNGZp5ugt8HUsIEsSWSzhPDS2MmkvpxOJwxb6xqY&X-Amz-Signature=0be7f5b24d727409496077b12aca70fdba8f3dde9a224796a39f398144753d5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQS6RDF3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDSu91viC1c024GIhlZrkQn2FYf6vJVkx8%2FFD888XtuQAiBTlN8uGTMpsDXkS5ByhsXIvy4fpeTWlSEsj0bsryBAkSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIw8WgWGhOJKGMaxmKtwDGAdFf6TknxHDDDs6adRlX2X4AwutEL35CfGY7wWzkGDMMbYGYTH7N4%2BMsBIv73fCvm1lWa7xeSLBZgcdZsVss3mI0xcpBdJMGxgna0KHqEKiZcUTXGAHTj%2FgKZHhOUX7Jp1sL3Ecf22gW5n0Q%2FDRHU%2FS6UkSm4tWlbmSf5V9Q8M%2BbJm25dqfv8MU03NsrulWKjfkA35RjrP96gcn51MDmQ0B6%2FoHTlcB7Kv9%2Fx9B2jbmgAOCWwerg2Lhd1ZFGBlOL93oduFOzPCRz8jNCvsCsUllHdzCLfkeFDe1tcf6YqCdjdeTwQG7V7SsztfqXDOihYPx80A%2FF3CBk66g2kO4Fr1QdXELsH4SWQVQhjZrN%2Frc2%2BjPFbJA8UfHv4oab7k%2F73WVpD9E7ac9x%2F5xxy9%2FXtPxR4KGFLokjV1RfrDSwOre0aEi35FDEVKv5NNiSwCCcV1kpACPQ6nB%2Fyl6ZqrNzs9xmDsCAPMPThmCd8EQSotXh6FLUXZkGbYykSPPkIYmxuBxfaz7Ikjf28L7vzfgJtLvvemC8QkavmgLGtLzK5A6IbHL3k9LdvGVRcd4VlL5g62%2B7OkPwcws1QUyIkWNYANmZSR%2By9DBJHJ2zUkHoOgzd%2F7ir3tCpbHioJkwhtKexAY6pgFAQxjO5B6tUn7YfsQ%2FSB6jmVoZFCSF38jKwi5gfJuvuHGSrRbr3%2B0NMUzreBJ9apdWloPeAlSvqQ3GFnK4JiK3%2BH3nQvFbge3W9DfOfCF%2BUxBTgbeRvKso95S76jXKfWA9bWqF6Zt047KRD9%2BdLWcw%2FIQzydycbTSAFYH6rs%2F73W2ja0WDbAjJaNGZp5ugt8HUsIEsSWSzhPDS2MmkvpxOJwxb6xqY&X-Amz-Signature=329519d3e60e6e5a60ecba7f7bfe778ea65ca7914384af9de74ed0c96ccd0f96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQS6RDF3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDSu91viC1c024GIhlZrkQn2FYf6vJVkx8%2FFD888XtuQAiBTlN8uGTMpsDXkS5ByhsXIvy4fpeTWlSEsj0bsryBAkSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIw8WgWGhOJKGMaxmKtwDGAdFf6TknxHDDDs6adRlX2X4AwutEL35CfGY7wWzkGDMMbYGYTH7N4%2BMsBIv73fCvm1lWa7xeSLBZgcdZsVss3mI0xcpBdJMGxgna0KHqEKiZcUTXGAHTj%2FgKZHhOUX7Jp1sL3Ecf22gW5n0Q%2FDRHU%2FS6UkSm4tWlbmSf5V9Q8M%2BbJm25dqfv8MU03NsrulWKjfkA35RjrP96gcn51MDmQ0B6%2FoHTlcB7Kv9%2Fx9B2jbmgAOCWwerg2Lhd1ZFGBlOL93oduFOzPCRz8jNCvsCsUllHdzCLfkeFDe1tcf6YqCdjdeTwQG7V7SsztfqXDOihYPx80A%2FF3CBk66g2kO4Fr1QdXELsH4SWQVQhjZrN%2Frc2%2BjPFbJA8UfHv4oab7k%2F73WVpD9E7ac9x%2F5xxy9%2FXtPxR4KGFLokjV1RfrDSwOre0aEi35FDEVKv5NNiSwCCcV1kpACPQ6nB%2Fyl6ZqrNzs9xmDsCAPMPThmCd8EQSotXh6FLUXZkGbYykSPPkIYmxuBxfaz7Ikjf28L7vzfgJtLvvemC8QkavmgLGtLzK5A6IbHL3k9LdvGVRcd4VlL5g62%2B7OkPwcws1QUyIkWNYANmZSR%2By9DBJHJ2zUkHoOgzd%2F7ir3tCpbHioJkwhtKexAY6pgFAQxjO5B6tUn7YfsQ%2FSB6jmVoZFCSF38jKwi5gfJuvuHGSrRbr3%2B0NMUzreBJ9apdWloPeAlSvqQ3GFnK4JiK3%2BH3nQvFbge3W9DfOfCF%2BUxBTgbeRvKso95S76jXKfWA9bWqF6Zt047KRD9%2BdLWcw%2FIQzydycbTSAFYH6rs%2F73W2ja0WDbAjJaNGZp5ugt8HUsIEsSWSzhPDS2MmkvpxOJwxb6xqY&X-Amz-Signature=9435e7945574cd07c9b5f5e0d2747246f55ccc6fda947a2bc6086412a613157c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQS6RDF3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDSu91viC1c024GIhlZrkQn2FYf6vJVkx8%2FFD888XtuQAiBTlN8uGTMpsDXkS5ByhsXIvy4fpeTWlSEsj0bsryBAkSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIw8WgWGhOJKGMaxmKtwDGAdFf6TknxHDDDs6adRlX2X4AwutEL35CfGY7wWzkGDMMbYGYTH7N4%2BMsBIv73fCvm1lWa7xeSLBZgcdZsVss3mI0xcpBdJMGxgna0KHqEKiZcUTXGAHTj%2FgKZHhOUX7Jp1sL3Ecf22gW5n0Q%2FDRHU%2FS6UkSm4tWlbmSf5V9Q8M%2BbJm25dqfv8MU03NsrulWKjfkA35RjrP96gcn51MDmQ0B6%2FoHTlcB7Kv9%2Fx9B2jbmgAOCWwerg2Lhd1ZFGBlOL93oduFOzPCRz8jNCvsCsUllHdzCLfkeFDe1tcf6YqCdjdeTwQG7V7SsztfqXDOihYPx80A%2FF3CBk66g2kO4Fr1QdXELsH4SWQVQhjZrN%2Frc2%2BjPFbJA8UfHv4oab7k%2F73WVpD9E7ac9x%2F5xxy9%2FXtPxR4KGFLokjV1RfrDSwOre0aEi35FDEVKv5NNiSwCCcV1kpACPQ6nB%2Fyl6ZqrNzs9xmDsCAPMPThmCd8EQSotXh6FLUXZkGbYykSPPkIYmxuBxfaz7Ikjf28L7vzfgJtLvvemC8QkavmgLGtLzK5A6IbHL3k9LdvGVRcd4VlL5g62%2B7OkPwcws1QUyIkWNYANmZSR%2By9DBJHJ2zUkHoOgzd%2F7ir3tCpbHioJkwhtKexAY6pgFAQxjO5B6tUn7YfsQ%2FSB6jmVoZFCSF38jKwi5gfJuvuHGSrRbr3%2B0NMUzreBJ9apdWloPeAlSvqQ3GFnK4JiK3%2BH3nQvFbge3W9DfOfCF%2BUxBTgbeRvKso95S76jXKfWA9bWqF6Zt047KRD9%2BdLWcw%2FIQzydycbTSAFYH6rs%2F73W2ja0WDbAjJaNGZp5ugt8HUsIEsSWSzhPDS2MmkvpxOJwxb6xqY&X-Amz-Signature=0eaf9de32c209ea60faeab6a4b2543926382e202a7043fd23fdaf7dd8671c9fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQS6RDF3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDSu91viC1c024GIhlZrkQn2FYf6vJVkx8%2FFD888XtuQAiBTlN8uGTMpsDXkS5ByhsXIvy4fpeTWlSEsj0bsryBAkSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIw8WgWGhOJKGMaxmKtwDGAdFf6TknxHDDDs6adRlX2X4AwutEL35CfGY7wWzkGDMMbYGYTH7N4%2BMsBIv73fCvm1lWa7xeSLBZgcdZsVss3mI0xcpBdJMGxgna0KHqEKiZcUTXGAHTj%2FgKZHhOUX7Jp1sL3Ecf22gW5n0Q%2FDRHU%2FS6UkSm4tWlbmSf5V9Q8M%2BbJm25dqfv8MU03NsrulWKjfkA35RjrP96gcn51MDmQ0B6%2FoHTlcB7Kv9%2Fx9B2jbmgAOCWwerg2Lhd1ZFGBlOL93oduFOzPCRz8jNCvsCsUllHdzCLfkeFDe1tcf6YqCdjdeTwQG7V7SsztfqXDOihYPx80A%2FF3CBk66g2kO4Fr1QdXELsH4SWQVQhjZrN%2Frc2%2BjPFbJA8UfHv4oab7k%2F73WVpD9E7ac9x%2F5xxy9%2FXtPxR4KGFLokjV1RfrDSwOre0aEi35FDEVKv5NNiSwCCcV1kpACPQ6nB%2Fyl6ZqrNzs9xmDsCAPMPThmCd8EQSotXh6FLUXZkGbYykSPPkIYmxuBxfaz7Ikjf28L7vzfgJtLvvemC8QkavmgLGtLzK5A6IbHL3k9LdvGVRcd4VlL5g62%2B7OkPwcws1QUyIkWNYANmZSR%2By9DBJHJ2zUkHoOgzd%2F7ir3tCpbHioJkwhtKexAY6pgFAQxjO5B6tUn7YfsQ%2FSB6jmVoZFCSF38jKwi5gfJuvuHGSrRbr3%2B0NMUzreBJ9apdWloPeAlSvqQ3GFnK4JiK3%2BH3nQvFbge3W9DfOfCF%2BUxBTgbeRvKso95S76jXKfWA9bWqF6Zt047KRD9%2BdLWcw%2FIQzydycbTSAFYH6rs%2F73W2ja0WDbAjJaNGZp5ugt8HUsIEsSWSzhPDS2MmkvpxOJwxb6xqY&X-Amz-Signature=2975ba62a6ed61a6781c7dcb59d6a8172c881751fc33e6952b9baf0261d8a83e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQS6RDF3%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDSu91viC1c024GIhlZrkQn2FYf6vJVkx8%2FFD888XtuQAiBTlN8uGTMpsDXkS5ByhsXIvy4fpeTWlSEsj0bsryBAkSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIw8WgWGhOJKGMaxmKtwDGAdFf6TknxHDDDs6adRlX2X4AwutEL35CfGY7wWzkGDMMbYGYTH7N4%2BMsBIv73fCvm1lWa7xeSLBZgcdZsVss3mI0xcpBdJMGxgna0KHqEKiZcUTXGAHTj%2FgKZHhOUX7Jp1sL3Ecf22gW5n0Q%2FDRHU%2FS6UkSm4tWlbmSf5V9Q8M%2BbJm25dqfv8MU03NsrulWKjfkA35RjrP96gcn51MDmQ0B6%2FoHTlcB7Kv9%2Fx9B2jbmgAOCWwerg2Lhd1ZFGBlOL93oduFOzPCRz8jNCvsCsUllHdzCLfkeFDe1tcf6YqCdjdeTwQG7V7SsztfqXDOihYPx80A%2FF3CBk66g2kO4Fr1QdXELsH4SWQVQhjZrN%2Frc2%2BjPFbJA8UfHv4oab7k%2F73WVpD9E7ac9x%2F5xxy9%2FXtPxR4KGFLokjV1RfrDSwOre0aEi35FDEVKv5NNiSwCCcV1kpACPQ6nB%2Fyl6ZqrNzs9xmDsCAPMPThmCd8EQSotXh6FLUXZkGbYykSPPkIYmxuBxfaz7Ikjf28L7vzfgJtLvvemC8QkavmgLGtLzK5A6IbHL3k9LdvGVRcd4VlL5g62%2B7OkPwcws1QUyIkWNYANmZSR%2By9DBJHJ2zUkHoOgzd%2F7ir3tCpbHioJkwhtKexAY6pgFAQxjO5B6tUn7YfsQ%2FSB6jmVoZFCSF38jKwi5gfJuvuHGSrRbr3%2B0NMUzreBJ9apdWloPeAlSvqQ3GFnK4JiK3%2BH3nQvFbge3W9DfOfCF%2BUxBTgbeRvKso95S76jXKfWA9bWqF6Zt047KRD9%2BdLWcw%2FIQzydycbTSAFYH6rs%2F73W2ja0WDbAjJaNGZp5ugt8HUsIEsSWSzhPDS2MmkvpxOJwxb6xqY&X-Amz-Signature=a22015855b1deea5d53734ccbcc1a06f70fce17d4ee2a13dca9042a716b9b5f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNWZMKIT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBaVQvjPIWocpabOjw1X8KBHk8opg9nAs%2BpXGGvgnr%2BqAiEAuCt9Gxnen8%2FBMAxdP4eC608CmK1n56ohht0xngm03Y0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH%2BFjbFvOVrNhP3MircA1ndey3BPEAcw9fc85UI7t3PqOo339sKcxGHcwCHaoyY44pJqnFvuIuaVNIo55rrSDUmFUrhSpnxYfgZRo7YWf6uiC8puMYGq7yvXWFkixfTmmQjON0N4KQtFO%2F1S3KxIIcv%2Bg67lhHB34gEAMj9KkjBbXahRvEzMrAGpm1FLq50ynMKVQh6P4rg3mEk6vMZc6Z6hyMGGXqELXW9fEDzgolC6he1Mr0MblrNzQL%2BDacWZfU4ySCeHZTwTjGZPQYzJM1zq5lEOUEOSPP7VH7%2BAIrJVAM3h9VRBJ%2F1CvL1bv2wRTINjs7zuCgmhpFRNdCY6qqGufLm%2FzObo6qPmkxUC8t3rC%2FK2vVfXgKtd2Zq75F361kvJYr5nognk4PJzGRN1RdWBadRIapT6mQEIjq%2FsNQcu5aMP8q%2BudAGFAw65Me4MpdaRGjqf41Ooro8XBH%2BHi2JRjVtxsjsVS6L4KONr5jMhwzTl854xcaI2t%2Fe%2Bh3xyTytcDS6AsCos%2FIFtzhSsQMExLzV6eso5dYD%2F%2Br5k4vZlUldDjXGp9uAZOVibZPQjfTA%2F69PFE6CCv5lSf5yLE%2F%2F7gwEIeWw3QIXWj9N1%2FnP7pxfsuchqjONPyjPBn0rBmUhYlkGYqsMIpoEMPnRnsQGOqUBsURpRk7vkELh8oyUfa%2B510o6QIamDBeI9ulKb%2F6TZCQ1Z%2BMi%2B5UvM%2B8MRo8Y05yLBWfAvgK1gzEb8smiLE1vo93tiK2F2fEM8J9h6Hf%2Bd1KdRu4MWNIj2bdaf4%2BSxcbhw8uBdK4%2B9ZgC6UrIzn4IqDr9kA8a77CtyZAEdHefasYexnHEK21nUDW6sgGIBF%2FMlCSFc%2Fl8KdS5e91OZTdN71BUIInJ&X-Amz-Signature=2f6aeda0e89d5d47a86a0b65db9362ca64ea2794abbdaba5cc52da7a2f6be4d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNWZMKIT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBaVQvjPIWocpabOjw1X8KBHk8opg9nAs%2BpXGGvgnr%2BqAiEAuCt9Gxnen8%2FBMAxdP4eC608CmK1n56ohht0xngm03Y0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH%2BFjbFvOVrNhP3MircA1ndey3BPEAcw9fc85UI7t3PqOo339sKcxGHcwCHaoyY44pJqnFvuIuaVNIo55rrSDUmFUrhSpnxYfgZRo7YWf6uiC8puMYGq7yvXWFkixfTmmQjON0N4KQtFO%2F1S3KxIIcv%2Bg67lhHB34gEAMj9KkjBbXahRvEzMrAGpm1FLq50ynMKVQh6P4rg3mEk6vMZc6Z6hyMGGXqELXW9fEDzgolC6he1Mr0MblrNzQL%2BDacWZfU4ySCeHZTwTjGZPQYzJM1zq5lEOUEOSPP7VH7%2BAIrJVAM3h9VRBJ%2F1CvL1bv2wRTINjs7zuCgmhpFRNdCY6qqGufLm%2FzObo6qPmkxUC8t3rC%2FK2vVfXgKtd2Zq75F361kvJYr5nognk4PJzGRN1RdWBadRIapT6mQEIjq%2FsNQcu5aMP8q%2BudAGFAw65Me4MpdaRGjqf41Ooro8XBH%2BHi2JRjVtxsjsVS6L4KONr5jMhwzTl854xcaI2t%2Fe%2Bh3xyTytcDS6AsCos%2FIFtzhSsQMExLzV6eso5dYD%2F%2Br5k4vZlUldDjXGp9uAZOVibZPQjfTA%2F69PFE6CCv5lSf5yLE%2F%2F7gwEIeWw3QIXWj9N1%2FnP7pxfsuchqjONPyjPBn0rBmUhYlkGYqsMIpoEMPnRnsQGOqUBsURpRk7vkELh8oyUfa%2B510o6QIamDBeI9ulKb%2F6TZCQ1Z%2BMi%2B5UvM%2B8MRo8Y05yLBWfAvgK1gzEb8smiLE1vo93tiK2F2fEM8J9h6Hf%2Bd1KdRu4MWNIj2bdaf4%2BSxcbhw8uBdK4%2B9ZgC6UrIzn4IqDr9kA8a77CtyZAEdHefasYexnHEK21nUDW6sgGIBF%2FMlCSFc%2Fl8KdS5e91OZTdN71BUIInJ&X-Amz-Signature=2e14f96ed52be5a776a9fe3722c97dde4d90da3de711f77ba39772a83c76048e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNWZMKIT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBaVQvjPIWocpabOjw1X8KBHk8opg9nAs%2BpXGGvgnr%2BqAiEAuCt9Gxnen8%2FBMAxdP4eC608CmK1n56ohht0xngm03Y0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH%2BFjbFvOVrNhP3MircA1ndey3BPEAcw9fc85UI7t3PqOo339sKcxGHcwCHaoyY44pJqnFvuIuaVNIo55rrSDUmFUrhSpnxYfgZRo7YWf6uiC8puMYGq7yvXWFkixfTmmQjON0N4KQtFO%2F1S3KxIIcv%2Bg67lhHB34gEAMj9KkjBbXahRvEzMrAGpm1FLq50ynMKVQh6P4rg3mEk6vMZc6Z6hyMGGXqELXW9fEDzgolC6he1Mr0MblrNzQL%2BDacWZfU4ySCeHZTwTjGZPQYzJM1zq5lEOUEOSPP7VH7%2BAIrJVAM3h9VRBJ%2F1CvL1bv2wRTINjs7zuCgmhpFRNdCY6qqGufLm%2FzObo6qPmkxUC8t3rC%2FK2vVfXgKtd2Zq75F361kvJYr5nognk4PJzGRN1RdWBadRIapT6mQEIjq%2FsNQcu5aMP8q%2BudAGFAw65Me4MpdaRGjqf41Ooro8XBH%2BHi2JRjVtxsjsVS6L4KONr5jMhwzTl854xcaI2t%2Fe%2Bh3xyTytcDS6AsCos%2FIFtzhSsQMExLzV6eso5dYD%2F%2Br5k4vZlUldDjXGp9uAZOVibZPQjfTA%2F69PFE6CCv5lSf5yLE%2F%2F7gwEIeWw3QIXWj9N1%2FnP7pxfsuchqjONPyjPBn0rBmUhYlkGYqsMIpoEMPnRnsQGOqUBsURpRk7vkELh8oyUfa%2B510o6QIamDBeI9ulKb%2F6TZCQ1Z%2BMi%2B5UvM%2B8MRo8Y05yLBWfAvgK1gzEb8smiLE1vo93tiK2F2fEM8J9h6Hf%2Bd1KdRu4MWNIj2bdaf4%2BSxcbhw8uBdK4%2B9ZgC6UrIzn4IqDr9kA8a77CtyZAEdHefasYexnHEK21nUDW6sgGIBF%2FMlCSFc%2Fl8KdS5e91OZTdN71BUIInJ&X-Amz-Signature=4978dea4bf36d64371a02a8a32292ca4095a755325eb71d961e1910dc0b7c750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNWZMKIT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBaVQvjPIWocpabOjw1X8KBHk8opg9nAs%2BpXGGvgnr%2BqAiEAuCt9Gxnen8%2FBMAxdP4eC608CmK1n56ohht0xngm03Y0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH%2BFjbFvOVrNhP3MircA1ndey3BPEAcw9fc85UI7t3PqOo339sKcxGHcwCHaoyY44pJqnFvuIuaVNIo55rrSDUmFUrhSpnxYfgZRo7YWf6uiC8puMYGq7yvXWFkixfTmmQjON0N4KQtFO%2F1S3KxIIcv%2Bg67lhHB34gEAMj9KkjBbXahRvEzMrAGpm1FLq50ynMKVQh6P4rg3mEk6vMZc6Z6hyMGGXqELXW9fEDzgolC6he1Mr0MblrNzQL%2BDacWZfU4ySCeHZTwTjGZPQYzJM1zq5lEOUEOSPP7VH7%2BAIrJVAM3h9VRBJ%2F1CvL1bv2wRTINjs7zuCgmhpFRNdCY6qqGufLm%2FzObo6qPmkxUC8t3rC%2FK2vVfXgKtd2Zq75F361kvJYr5nognk4PJzGRN1RdWBadRIapT6mQEIjq%2FsNQcu5aMP8q%2BudAGFAw65Me4MpdaRGjqf41Ooro8XBH%2BHi2JRjVtxsjsVS6L4KONr5jMhwzTl854xcaI2t%2Fe%2Bh3xyTytcDS6AsCos%2FIFtzhSsQMExLzV6eso5dYD%2F%2Br5k4vZlUldDjXGp9uAZOVibZPQjfTA%2F69PFE6CCv5lSf5yLE%2F%2F7gwEIeWw3QIXWj9N1%2FnP7pxfsuchqjONPyjPBn0rBmUhYlkGYqsMIpoEMPnRnsQGOqUBsURpRk7vkELh8oyUfa%2B510o6QIamDBeI9ulKb%2F6TZCQ1Z%2BMi%2B5UvM%2B8MRo8Y05yLBWfAvgK1gzEb8smiLE1vo93tiK2F2fEM8J9h6Hf%2Bd1KdRu4MWNIj2bdaf4%2BSxcbhw8uBdK4%2B9ZgC6UrIzn4IqDr9kA8a77CtyZAEdHefasYexnHEK21nUDW6sgGIBF%2FMlCSFc%2Fl8KdS5e91OZTdN71BUIInJ&X-Amz-Signature=4b676f9a6e74c4c1d1f343e8834d72b817b341d47b1f68d92ac1407e2f9da864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNWZMKIT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBaVQvjPIWocpabOjw1X8KBHk8opg9nAs%2BpXGGvgnr%2BqAiEAuCt9Gxnen8%2FBMAxdP4eC608CmK1n56ohht0xngm03Y0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH%2BFjbFvOVrNhP3MircA1ndey3BPEAcw9fc85UI7t3PqOo339sKcxGHcwCHaoyY44pJqnFvuIuaVNIo55rrSDUmFUrhSpnxYfgZRo7YWf6uiC8puMYGq7yvXWFkixfTmmQjON0N4KQtFO%2F1S3KxIIcv%2Bg67lhHB34gEAMj9KkjBbXahRvEzMrAGpm1FLq50ynMKVQh6P4rg3mEk6vMZc6Z6hyMGGXqELXW9fEDzgolC6he1Mr0MblrNzQL%2BDacWZfU4ySCeHZTwTjGZPQYzJM1zq5lEOUEOSPP7VH7%2BAIrJVAM3h9VRBJ%2F1CvL1bv2wRTINjs7zuCgmhpFRNdCY6qqGufLm%2FzObo6qPmkxUC8t3rC%2FK2vVfXgKtd2Zq75F361kvJYr5nognk4PJzGRN1RdWBadRIapT6mQEIjq%2FsNQcu5aMP8q%2BudAGFAw65Me4MpdaRGjqf41Ooro8XBH%2BHi2JRjVtxsjsVS6L4KONr5jMhwzTl854xcaI2t%2Fe%2Bh3xyTytcDS6AsCos%2FIFtzhSsQMExLzV6eso5dYD%2F%2Br5k4vZlUldDjXGp9uAZOVibZPQjfTA%2F69PFE6CCv5lSf5yLE%2F%2F7gwEIeWw3QIXWj9N1%2FnP7pxfsuchqjONPyjPBn0rBmUhYlkGYqsMIpoEMPnRnsQGOqUBsURpRk7vkELh8oyUfa%2B510o6QIamDBeI9ulKb%2F6TZCQ1Z%2BMi%2B5UvM%2B8MRo8Y05yLBWfAvgK1gzEb8smiLE1vo93tiK2F2fEM8J9h6Hf%2Bd1KdRu4MWNIj2bdaf4%2BSxcbhw8uBdK4%2B9ZgC6UrIzn4IqDr9kA8a77CtyZAEdHefasYexnHEK21nUDW6sgGIBF%2FMlCSFc%2Fl8KdS5e91OZTdN71BUIInJ&X-Amz-Signature=90309998cfe2fb9d99eb192bbd6675728d0e807f4dc098c209ab348d157cb107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNWZMKIT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBaVQvjPIWocpabOjw1X8KBHk8opg9nAs%2BpXGGvgnr%2BqAiEAuCt9Gxnen8%2FBMAxdP4eC608CmK1n56ohht0xngm03Y0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH%2BFjbFvOVrNhP3MircA1ndey3BPEAcw9fc85UI7t3PqOo339sKcxGHcwCHaoyY44pJqnFvuIuaVNIo55rrSDUmFUrhSpnxYfgZRo7YWf6uiC8puMYGq7yvXWFkixfTmmQjON0N4KQtFO%2F1S3KxIIcv%2Bg67lhHB34gEAMj9KkjBbXahRvEzMrAGpm1FLq50ynMKVQh6P4rg3mEk6vMZc6Z6hyMGGXqELXW9fEDzgolC6he1Mr0MblrNzQL%2BDacWZfU4ySCeHZTwTjGZPQYzJM1zq5lEOUEOSPP7VH7%2BAIrJVAM3h9VRBJ%2F1CvL1bv2wRTINjs7zuCgmhpFRNdCY6qqGufLm%2FzObo6qPmkxUC8t3rC%2FK2vVfXgKtd2Zq75F361kvJYr5nognk4PJzGRN1RdWBadRIapT6mQEIjq%2FsNQcu5aMP8q%2BudAGFAw65Me4MpdaRGjqf41Ooro8XBH%2BHi2JRjVtxsjsVS6L4KONr5jMhwzTl854xcaI2t%2Fe%2Bh3xyTytcDS6AsCos%2FIFtzhSsQMExLzV6eso5dYD%2F%2Br5k4vZlUldDjXGp9uAZOVibZPQjfTA%2F69PFE6CCv5lSf5yLE%2F%2F7gwEIeWw3QIXWj9N1%2FnP7pxfsuchqjONPyjPBn0rBmUhYlkGYqsMIpoEMPnRnsQGOqUBsURpRk7vkELh8oyUfa%2B510o6QIamDBeI9ulKb%2F6TZCQ1Z%2BMi%2B5UvM%2B8MRo8Y05yLBWfAvgK1gzEb8smiLE1vo93tiK2F2fEM8J9h6Hf%2Bd1KdRu4MWNIj2bdaf4%2BSxcbhw8uBdK4%2B9ZgC6UrIzn4IqDr9kA8a77CtyZAEdHefasYexnHEK21nUDW6sgGIBF%2FMlCSFc%2Fl8KdS5e91OZTdN71BUIInJ&X-Amz-Signature=6e1f54c59db3662eeed88757183ff8484dd8df2474774454dd096b8f00ba5ea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
