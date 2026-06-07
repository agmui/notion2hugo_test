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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU24RTXL%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8nU%2FaaiBSHtBM7%2FmOjokVSZgVdhwGAUiU4M79BL26XAiEA1akqqFXzefXA%2Bytu%2FKztbkBwbAkmncgZXhewFvAaW8wqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL59cNAtSpRtdTaApCrcA9gYVlxtKAyZhbKsviGN%2F8sy8KjGaDvLc5HWp5zBci3JY4iUIrXezmzmFqKRNFoWoeVTGBWlLS4zkU2XaxwB6no1CmlbCPZZfCH%2BXVtyQ6zSuZ907Ka5NBFkyx3K3vnMV7VCqPP%2FUNpzmvmWjjoTPw5PVv5v0QRsupHSpwlnjJpx6hLBOZTklE0y6fY4LXSfbAft2hmQ2ZIGdyQeSiBA6kV6eZX73dxOCW2Hb7PBcNmGSSj3Uunrwb37dqOPhCFII%2BAUOo01Bi5nkJl52BnVXm0b%2FqDqZVu9y4WTrnm%2B%2FO6ttwv7OBYNaeR3AJxUUZqEXTbYQwz4bi93mLfZOScxZxJeksVhiIyXwAwIuZTgrlOZUtiHiLy2cix9scPYsASCFMFTSotC7mpR8SwOGyN9pbbiCSgaxgGPQTaLaN93B0YQ65bMudeSh4gosU2uFOeRvt8vl8Ge5QRdS%2Fhi1AOcJ87ZwiSLDcV0QRRrJiB8hcupCXTyedOYKnQiMdivSMSE2aks0635kjeoRPoo1uUDssI7uK9m%2FaiDHN0kPd7u2XhVT6ojSAZKtAXL1n3LfJm96ZrLowZSzeVwRgysb5qSH%2Fbi4qwXZFE4PFgrS1BFJfGzZl5ZeLx3CCpSjID4MITTk9EGOqUBohGaDHHksJ3U2NLfuM7cT31igW9joKJOAIuD7%2BgDUFSzPIODBoF%2FkbWNFE43tf8nCCQlGErEXv8BqJZRST%2FTvRwlBck16yYR4GHJYvdanhm5TNDSxQ5mMwNt%2F6W%2B7f4DEshvj4SUuKReIljO%2BZkD8ASIpXWKNNxUDSOeY58NyQKIuBdlOxlDwPSbE3lfDEZBDxbOtxPWZcI2chHCC0%2F%2FmuCKNOES&X-Amz-Signature=310151315f60ba5e4bf6eea6d82be8d5eb563a915506bec71c0ffdca3a9a57cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU24RTXL%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8nU%2FaaiBSHtBM7%2FmOjokVSZgVdhwGAUiU4M79BL26XAiEA1akqqFXzefXA%2Bytu%2FKztbkBwbAkmncgZXhewFvAaW8wqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL59cNAtSpRtdTaApCrcA9gYVlxtKAyZhbKsviGN%2F8sy8KjGaDvLc5HWp5zBci3JY4iUIrXezmzmFqKRNFoWoeVTGBWlLS4zkU2XaxwB6no1CmlbCPZZfCH%2BXVtyQ6zSuZ907Ka5NBFkyx3K3vnMV7VCqPP%2FUNpzmvmWjjoTPw5PVv5v0QRsupHSpwlnjJpx6hLBOZTklE0y6fY4LXSfbAft2hmQ2ZIGdyQeSiBA6kV6eZX73dxOCW2Hb7PBcNmGSSj3Uunrwb37dqOPhCFII%2BAUOo01Bi5nkJl52BnVXm0b%2FqDqZVu9y4WTrnm%2B%2FO6ttwv7OBYNaeR3AJxUUZqEXTbYQwz4bi93mLfZOScxZxJeksVhiIyXwAwIuZTgrlOZUtiHiLy2cix9scPYsASCFMFTSotC7mpR8SwOGyN9pbbiCSgaxgGPQTaLaN93B0YQ65bMudeSh4gosU2uFOeRvt8vl8Ge5QRdS%2Fhi1AOcJ87ZwiSLDcV0QRRrJiB8hcupCXTyedOYKnQiMdivSMSE2aks0635kjeoRPoo1uUDssI7uK9m%2FaiDHN0kPd7u2XhVT6ojSAZKtAXL1n3LfJm96ZrLowZSzeVwRgysb5qSH%2Fbi4qwXZFE4PFgrS1BFJfGzZl5ZeLx3CCpSjID4MITTk9EGOqUBohGaDHHksJ3U2NLfuM7cT31igW9joKJOAIuD7%2BgDUFSzPIODBoF%2FkbWNFE43tf8nCCQlGErEXv8BqJZRST%2FTvRwlBck16yYR4GHJYvdanhm5TNDSxQ5mMwNt%2F6W%2B7f4DEshvj4SUuKReIljO%2BZkD8ASIpXWKNNxUDSOeY58NyQKIuBdlOxlDwPSbE3lfDEZBDxbOtxPWZcI2chHCC0%2F%2FmuCKNOES&X-Amz-Signature=23de249d494cdc3de53914feeb140ac49d88d60f1b23c74830dab914030dd2e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU24RTXL%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8nU%2FaaiBSHtBM7%2FmOjokVSZgVdhwGAUiU4M79BL26XAiEA1akqqFXzefXA%2Bytu%2FKztbkBwbAkmncgZXhewFvAaW8wqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL59cNAtSpRtdTaApCrcA9gYVlxtKAyZhbKsviGN%2F8sy8KjGaDvLc5HWp5zBci3JY4iUIrXezmzmFqKRNFoWoeVTGBWlLS4zkU2XaxwB6no1CmlbCPZZfCH%2BXVtyQ6zSuZ907Ka5NBFkyx3K3vnMV7VCqPP%2FUNpzmvmWjjoTPw5PVv5v0QRsupHSpwlnjJpx6hLBOZTklE0y6fY4LXSfbAft2hmQ2ZIGdyQeSiBA6kV6eZX73dxOCW2Hb7PBcNmGSSj3Uunrwb37dqOPhCFII%2BAUOo01Bi5nkJl52BnVXm0b%2FqDqZVu9y4WTrnm%2B%2FO6ttwv7OBYNaeR3AJxUUZqEXTbYQwz4bi93mLfZOScxZxJeksVhiIyXwAwIuZTgrlOZUtiHiLy2cix9scPYsASCFMFTSotC7mpR8SwOGyN9pbbiCSgaxgGPQTaLaN93B0YQ65bMudeSh4gosU2uFOeRvt8vl8Ge5QRdS%2Fhi1AOcJ87ZwiSLDcV0QRRrJiB8hcupCXTyedOYKnQiMdivSMSE2aks0635kjeoRPoo1uUDssI7uK9m%2FaiDHN0kPd7u2XhVT6ojSAZKtAXL1n3LfJm96ZrLowZSzeVwRgysb5qSH%2Fbi4qwXZFE4PFgrS1BFJfGzZl5ZeLx3CCpSjID4MITTk9EGOqUBohGaDHHksJ3U2NLfuM7cT31igW9joKJOAIuD7%2BgDUFSzPIODBoF%2FkbWNFE43tf8nCCQlGErEXv8BqJZRST%2FTvRwlBck16yYR4GHJYvdanhm5TNDSxQ5mMwNt%2F6W%2B7f4DEshvj4SUuKReIljO%2BZkD8ASIpXWKNNxUDSOeY58NyQKIuBdlOxlDwPSbE3lfDEZBDxbOtxPWZcI2chHCC0%2F%2FmuCKNOES&X-Amz-Signature=c37fea5ee2643bfea3d3e6bf98ac58c92fbf65c65c413b8e4bca059c7cdd27b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU24RTXL%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8nU%2FaaiBSHtBM7%2FmOjokVSZgVdhwGAUiU4M79BL26XAiEA1akqqFXzefXA%2Bytu%2FKztbkBwbAkmncgZXhewFvAaW8wqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL59cNAtSpRtdTaApCrcA9gYVlxtKAyZhbKsviGN%2F8sy8KjGaDvLc5HWp5zBci3JY4iUIrXezmzmFqKRNFoWoeVTGBWlLS4zkU2XaxwB6no1CmlbCPZZfCH%2BXVtyQ6zSuZ907Ka5NBFkyx3K3vnMV7VCqPP%2FUNpzmvmWjjoTPw5PVv5v0QRsupHSpwlnjJpx6hLBOZTklE0y6fY4LXSfbAft2hmQ2ZIGdyQeSiBA6kV6eZX73dxOCW2Hb7PBcNmGSSj3Uunrwb37dqOPhCFII%2BAUOo01Bi5nkJl52BnVXm0b%2FqDqZVu9y4WTrnm%2B%2FO6ttwv7OBYNaeR3AJxUUZqEXTbYQwz4bi93mLfZOScxZxJeksVhiIyXwAwIuZTgrlOZUtiHiLy2cix9scPYsASCFMFTSotC7mpR8SwOGyN9pbbiCSgaxgGPQTaLaN93B0YQ65bMudeSh4gosU2uFOeRvt8vl8Ge5QRdS%2Fhi1AOcJ87ZwiSLDcV0QRRrJiB8hcupCXTyedOYKnQiMdivSMSE2aks0635kjeoRPoo1uUDssI7uK9m%2FaiDHN0kPd7u2XhVT6ojSAZKtAXL1n3LfJm96ZrLowZSzeVwRgysb5qSH%2Fbi4qwXZFE4PFgrS1BFJfGzZl5ZeLx3CCpSjID4MITTk9EGOqUBohGaDHHksJ3U2NLfuM7cT31igW9joKJOAIuD7%2BgDUFSzPIODBoF%2FkbWNFE43tf8nCCQlGErEXv8BqJZRST%2FTvRwlBck16yYR4GHJYvdanhm5TNDSxQ5mMwNt%2F6W%2B7f4DEshvj4SUuKReIljO%2BZkD8ASIpXWKNNxUDSOeY58NyQKIuBdlOxlDwPSbE3lfDEZBDxbOtxPWZcI2chHCC0%2F%2FmuCKNOES&X-Amz-Signature=2bc2c2f3f7658efa098d54d7e6e1a7f3277ad7c70a8c6577b04bf000fd00c545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU24RTXL%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8nU%2FaaiBSHtBM7%2FmOjokVSZgVdhwGAUiU4M79BL26XAiEA1akqqFXzefXA%2Bytu%2FKztbkBwbAkmncgZXhewFvAaW8wqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL59cNAtSpRtdTaApCrcA9gYVlxtKAyZhbKsviGN%2F8sy8KjGaDvLc5HWp5zBci3JY4iUIrXezmzmFqKRNFoWoeVTGBWlLS4zkU2XaxwB6no1CmlbCPZZfCH%2BXVtyQ6zSuZ907Ka5NBFkyx3K3vnMV7VCqPP%2FUNpzmvmWjjoTPw5PVv5v0QRsupHSpwlnjJpx6hLBOZTklE0y6fY4LXSfbAft2hmQ2ZIGdyQeSiBA6kV6eZX73dxOCW2Hb7PBcNmGSSj3Uunrwb37dqOPhCFII%2BAUOo01Bi5nkJl52BnVXm0b%2FqDqZVu9y4WTrnm%2B%2FO6ttwv7OBYNaeR3AJxUUZqEXTbYQwz4bi93mLfZOScxZxJeksVhiIyXwAwIuZTgrlOZUtiHiLy2cix9scPYsASCFMFTSotC7mpR8SwOGyN9pbbiCSgaxgGPQTaLaN93B0YQ65bMudeSh4gosU2uFOeRvt8vl8Ge5QRdS%2Fhi1AOcJ87ZwiSLDcV0QRRrJiB8hcupCXTyedOYKnQiMdivSMSE2aks0635kjeoRPoo1uUDssI7uK9m%2FaiDHN0kPd7u2XhVT6ojSAZKtAXL1n3LfJm96ZrLowZSzeVwRgysb5qSH%2Fbi4qwXZFE4PFgrS1BFJfGzZl5ZeLx3CCpSjID4MITTk9EGOqUBohGaDHHksJ3U2NLfuM7cT31igW9joKJOAIuD7%2BgDUFSzPIODBoF%2FkbWNFE43tf8nCCQlGErEXv8BqJZRST%2FTvRwlBck16yYR4GHJYvdanhm5TNDSxQ5mMwNt%2F6W%2B7f4DEshvj4SUuKReIljO%2BZkD8ASIpXWKNNxUDSOeY58NyQKIuBdlOxlDwPSbE3lfDEZBDxbOtxPWZcI2chHCC0%2F%2FmuCKNOES&X-Amz-Signature=8eb0724b247814b06f8a432a1fadbb8089449c981355d08f7b169b281bea0be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU24RTXL%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8nU%2FaaiBSHtBM7%2FmOjokVSZgVdhwGAUiU4M79BL26XAiEA1akqqFXzefXA%2Bytu%2FKztbkBwbAkmncgZXhewFvAaW8wqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL59cNAtSpRtdTaApCrcA9gYVlxtKAyZhbKsviGN%2F8sy8KjGaDvLc5HWp5zBci3JY4iUIrXezmzmFqKRNFoWoeVTGBWlLS4zkU2XaxwB6no1CmlbCPZZfCH%2BXVtyQ6zSuZ907Ka5NBFkyx3K3vnMV7VCqPP%2FUNpzmvmWjjoTPw5PVv5v0QRsupHSpwlnjJpx6hLBOZTklE0y6fY4LXSfbAft2hmQ2ZIGdyQeSiBA6kV6eZX73dxOCW2Hb7PBcNmGSSj3Uunrwb37dqOPhCFII%2BAUOo01Bi5nkJl52BnVXm0b%2FqDqZVu9y4WTrnm%2B%2FO6ttwv7OBYNaeR3AJxUUZqEXTbYQwz4bi93mLfZOScxZxJeksVhiIyXwAwIuZTgrlOZUtiHiLy2cix9scPYsASCFMFTSotC7mpR8SwOGyN9pbbiCSgaxgGPQTaLaN93B0YQ65bMudeSh4gosU2uFOeRvt8vl8Ge5QRdS%2Fhi1AOcJ87ZwiSLDcV0QRRrJiB8hcupCXTyedOYKnQiMdivSMSE2aks0635kjeoRPoo1uUDssI7uK9m%2FaiDHN0kPd7u2XhVT6ojSAZKtAXL1n3LfJm96ZrLowZSzeVwRgysb5qSH%2Fbi4qwXZFE4PFgrS1BFJfGzZl5ZeLx3CCpSjID4MITTk9EGOqUBohGaDHHksJ3U2NLfuM7cT31igW9joKJOAIuD7%2BgDUFSzPIODBoF%2FkbWNFE43tf8nCCQlGErEXv8BqJZRST%2FTvRwlBck16yYR4GHJYvdanhm5TNDSxQ5mMwNt%2F6W%2B7f4DEshvj4SUuKReIljO%2BZkD8ASIpXWKNNxUDSOeY58NyQKIuBdlOxlDwPSbE3lfDEZBDxbOtxPWZcI2chHCC0%2F%2FmuCKNOES&X-Amz-Signature=79dfd3522699f1babe04dc993e967c0ee1bcd0738d4315bbdff853caea224476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU24RTXL%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8nU%2FaaiBSHtBM7%2FmOjokVSZgVdhwGAUiU4M79BL26XAiEA1akqqFXzefXA%2Bytu%2FKztbkBwbAkmncgZXhewFvAaW8wqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL59cNAtSpRtdTaApCrcA9gYVlxtKAyZhbKsviGN%2F8sy8KjGaDvLc5HWp5zBci3JY4iUIrXezmzmFqKRNFoWoeVTGBWlLS4zkU2XaxwB6no1CmlbCPZZfCH%2BXVtyQ6zSuZ907Ka5NBFkyx3K3vnMV7VCqPP%2FUNpzmvmWjjoTPw5PVv5v0QRsupHSpwlnjJpx6hLBOZTklE0y6fY4LXSfbAft2hmQ2ZIGdyQeSiBA6kV6eZX73dxOCW2Hb7PBcNmGSSj3Uunrwb37dqOPhCFII%2BAUOo01Bi5nkJl52BnVXm0b%2FqDqZVu9y4WTrnm%2B%2FO6ttwv7OBYNaeR3AJxUUZqEXTbYQwz4bi93mLfZOScxZxJeksVhiIyXwAwIuZTgrlOZUtiHiLy2cix9scPYsASCFMFTSotC7mpR8SwOGyN9pbbiCSgaxgGPQTaLaN93B0YQ65bMudeSh4gosU2uFOeRvt8vl8Ge5QRdS%2Fhi1AOcJ87ZwiSLDcV0QRRrJiB8hcupCXTyedOYKnQiMdivSMSE2aks0635kjeoRPoo1uUDssI7uK9m%2FaiDHN0kPd7u2XhVT6ojSAZKtAXL1n3LfJm96ZrLowZSzeVwRgysb5qSH%2Fbi4qwXZFE4PFgrS1BFJfGzZl5ZeLx3CCpSjID4MITTk9EGOqUBohGaDHHksJ3U2NLfuM7cT31igW9joKJOAIuD7%2BgDUFSzPIODBoF%2FkbWNFE43tf8nCCQlGErEXv8BqJZRST%2FTvRwlBck16yYR4GHJYvdanhm5TNDSxQ5mMwNt%2F6W%2B7f4DEshvj4SUuKReIljO%2BZkD8ASIpXWKNNxUDSOeY58NyQKIuBdlOxlDwPSbE3lfDEZBDxbOtxPWZcI2chHCC0%2F%2FmuCKNOES&X-Amz-Signature=e33c5be407d858f7e767aebf9017580fc6210217b9583a2b929d012528d9ccb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU24RTXL%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8nU%2FaaiBSHtBM7%2FmOjokVSZgVdhwGAUiU4M79BL26XAiEA1akqqFXzefXA%2Bytu%2FKztbkBwbAkmncgZXhewFvAaW8wqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL59cNAtSpRtdTaApCrcA9gYVlxtKAyZhbKsviGN%2F8sy8KjGaDvLc5HWp5zBci3JY4iUIrXezmzmFqKRNFoWoeVTGBWlLS4zkU2XaxwB6no1CmlbCPZZfCH%2BXVtyQ6zSuZ907Ka5NBFkyx3K3vnMV7VCqPP%2FUNpzmvmWjjoTPw5PVv5v0QRsupHSpwlnjJpx6hLBOZTklE0y6fY4LXSfbAft2hmQ2ZIGdyQeSiBA6kV6eZX73dxOCW2Hb7PBcNmGSSj3Uunrwb37dqOPhCFII%2BAUOo01Bi5nkJl52BnVXm0b%2FqDqZVu9y4WTrnm%2B%2FO6ttwv7OBYNaeR3AJxUUZqEXTbYQwz4bi93mLfZOScxZxJeksVhiIyXwAwIuZTgrlOZUtiHiLy2cix9scPYsASCFMFTSotC7mpR8SwOGyN9pbbiCSgaxgGPQTaLaN93B0YQ65bMudeSh4gosU2uFOeRvt8vl8Ge5QRdS%2Fhi1AOcJ87ZwiSLDcV0QRRrJiB8hcupCXTyedOYKnQiMdivSMSE2aks0635kjeoRPoo1uUDssI7uK9m%2FaiDHN0kPd7u2XhVT6ojSAZKtAXL1n3LfJm96ZrLowZSzeVwRgysb5qSH%2Fbi4qwXZFE4PFgrS1BFJfGzZl5ZeLx3CCpSjID4MITTk9EGOqUBohGaDHHksJ3U2NLfuM7cT31igW9joKJOAIuD7%2BgDUFSzPIODBoF%2FkbWNFE43tf8nCCQlGErEXv8BqJZRST%2FTvRwlBck16yYR4GHJYvdanhm5TNDSxQ5mMwNt%2F6W%2B7f4DEshvj4SUuKReIljO%2BZkD8ASIpXWKNNxUDSOeY58NyQKIuBdlOxlDwPSbE3lfDEZBDxbOtxPWZcI2chHCC0%2F%2FmuCKNOES&X-Amz-Signature=d99c2fbe357c3a24e9ac80ee033591250df42ab4267cc0d60aaa13674c887896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU24RTXL%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8nU%2FaaiBSHtBM7%2FmOjokVSZgVdhwGAUiU4M79BL26XAiEA1akqqFXzefXA%2Bytu%2FKztbkBwbAkmncgZXhewFvAaW8wqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL59cNAtSpRtdTaApCrcA9gYVlxtKAyZhbKsviGN%2F8sy8KjGaDvLc5HWp5zBci3JY4iUIrXezmzmFqKRNFoWoeVTGBWlLS4zkU2XaxwB6no1CmlbCPZZfCH%2BXVtyQ6zSuZ907Ka5NBFkyx3K3vnMV7VCqPP%2FUNpzmvmWjjoTPw5PVv5v0QRsupHSpwlnjJpx6hLBOZTklE0y6fY4LXSfbAft2hmQ2ZIGdyQeSiBA6kV6eZX73dxOCW2Hb7PBcNmGSSj3Uunrwb37dqOPhCFII%2BAUOo01Bi5nkJl52BnVXm0b%2FqDqZVu9y4WTrnm%2B%2FO6ttwv7OBYNaeR3AJxUUZqEXTbYQwz4bi93mLfZOScxZxJeksVhiIyXwAwIuZTgrlOZUtiHiLy2cix9scPYsASCFMFTSotC7mpR8SwOGyN9pbbiCSgaxgGPQTaLaN93B0YQ65bMudeSh4gosU2uFOeRvt8vl8Ge5QRdS%2Fhi1AOcJ87ZwiSLDcV0QRRrJiB8hcupCXTyedOYKnQiMdivSMSE2aks0635kjeoRPoo1uUDssI7uK9m%2FaiDHN0kPd7u2XhVT6ojSAZKtAXL1n3LfJm96ZrLowZSzeVwRgysb5qSH%2Fbi4qwXZFE4PFgrS1BFJfGzZl5ZeLx3CCpSjID4MITTk9EGOqUBohGaDHHksJ3U2NLfuM7cT31igW9joKJOAIuD7%2BgDUFSzPIODBoF%2FkbWNFE43tf8nCCQlGErEXv8BqJZRST%2FTvRwlBck16yYR4GHJYvdanhm5TNDSxQ5mMwNt%2F6W%2B7f4DEshvj4SUuKReIljO%2BZkD8ASIpXWKNNxUDSOeY58NyQKIuBdlOxlDwPSbE3lfDEZBDxbOtxPWZcI2chHCC0%2F%2FmuCKNOES&X-Amz-Signature=4cb16acddde1838417fe620fb0655952bed1a874bf7372f0887b80d5dd918840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU24RTXL%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8nU%2FaaiBSHtBM7%2FmOjokVSZgVdhwGAUiU4M79BL26XAiEA1akqqFXzefXA%2Bytu%2FKztbkBwbAkmncgZXhewFvAaW8wqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL59cNAtSpRtdTaApCrcA9gYVlxtKAyZhbKsviGN%2F8sy8KjGaDvLc5HWp5zBci3JY4iUIrXezmzmFqKRNFoWoeVTGBWlLS4zkU2XaxwB6no1CmlbCPZZfCH%2BXVtyQ6zSuZ907Ka5NBFkyx3K3vnMV7VCqPP%2FUNpzmvmWjjoTPw5PVv5v0QRsupHSpwlnjJpx6hLBOZTklE0y6fY4LXSfbAft2hmQ2ZIGdyQeSiBA6kV6eZX73dxOCW2Hb7PBcNmGSSj3Uunrwb37dqOPhCFII%2BAUOo01Bi5nkJl52BnVXm0b%2FqDqZVu9y4WTrnm%2B%2FO6ttwv7OBYNaeR3AJxUUZqEXTbYQwz4bi93mLfZOScxZxJeksVhiIyXwAwIuZTgrlOZUtiHiLy2cix9scPYsASCFMFTSotC7mpR8SwOGyN9pbbiCSgaxgGPQTaLaN93B0YQ65bMudeSh4gosU2uFOeRvt8vl8Ge5QRdS%2Fhi1AOcJ87ZwiSLDcV0QRRrJiB8hcupCXTyedOYKnQiMdivSMSE2aks0635kjeoRPoo1uUDssI7uK9m%2FaiDHN0kPd7u2XhVT6ojSAZKtAXL1n3LfJm96ZrLowZSzeVwRgysb5qSH%2Fbi4qwXZFE4PFgrS1BFJfGzZl5ZeLx3CCpSjID4MITTk9EGOqUBohGaDHHksJ3U2NLfuM7cT31igW9joKJOAIuD7%2BgDUFSzPIODBoF%2FkbWNFE43tf8nCCQlGErEXv8BqJZRST%2FTvRwlBck16yYR4GHJYvdanhm5TNDSxQ5mMwNt%2F6W%2B7f4DEshvj4SUuKReIljO%2BZkD8ASIpXWKNNxUDSOeY58NyQKIuBdlOxlDwPSbE3lfDEZBDxbOtxPWZcI2chHCC0%2F%2FmuCKNOES&X-Amz-Signature=86f0312800509a465d67fe1ffb731aa7bb67e8d8402cf8ea7b4763739a9ce122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J3QSJJS%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FwN4KiNCLmdkr6ASpn%2Bf440m945MkpgVeCmpfTv7FFAiEA4i9kqLtVqICiFKIIrLilUSxx6iJg4uPn4yQJFzfvDfoqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWAIi2T6zvGvLCIUCrcA5arwwcN3paUA4I0cqptOrD8xitKUOIdpLJ3%2F5msWaWQs7z7QGNbyI2H8wvH7GG0%2BfmBg8Kmtv1U%2FVPC5aPKmpDei7CT3rD1HGRN2bLTtGkrsCYGCe12vbM2CgIDVkIozTATmx%2FjW6vqDBdTN%2B95iXepu6vEsMv0%2BF8au5zBoJxyN%2FB7tmashBfDtouo9HAnekBvC6ZM%2F%2FTO4jHbdydAW%2FHhHkhLimNR0ed3TQhbmTO7VAyYjBs4rdfb0MmS%2Bo2CEivN5ANlsqXEUWHWpU0UHUasnDhpjvi8Hah8RYLDAl%2BCUylG2Q86i9RvSTgrtSfQAfDYCDS4uSILmPRNcmUIt4hzv1fXKLISKSaEx7Is75BDnUuN9n37eA8eyLhwE4vdn2sPSOPGEBtWpRvYoUaIkM5WWNcMjgjeJ%2BBbBRMTJCG8JKKMR8Spc8aQ4rOSJ4H91JQMUKxGyPJnZo4HuBi3UxUprlU7WvqLfou5%2BvH11RIG3RFFNpjeYiqVZ%2FlsaG1WciUmt12u7xakdGssDnWnxKHnxwn8c0kIN7fg%2By0%2F5H52ZU3dC3COmg4tRPnWqL550SIuR91rxVLW%2F65Ps69TgMkJRFWOgGG3zWeNFzjU3MRIBI%2BuIc%2BlDewEfzZyMM3Sk9EGOqUBnrLk%2F348mFXI9qY5nPmBnVELiszDxpxlkCu4hY4HM%2BnEi2PCKgF7D0IJby4e%2FrfPjZ4sQDiqs0aW5ctJsLnak0Mk7ay8PgN7NG32iuZb50LUxs0HNhBE9bXEjiPGz37tpCU7EcVz0hmJ7UTnrc7M8txV7O8pSAIcx2kjkOsU0AulGiYvNgJ02GnO5dBHT%2FaL8Cprl1VOPOiNjt4hiyu0%2FZdKyb18&X-Amz-Signature=ec4915cced1c40f5e103cfae01f78db34a88eae99bb19c59a1b963540481154d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIO65FLD%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8xCOLO4MjjSLUWDalvCysBTkNFLnMr%2B2CyGc5Wl8eGAiEA7PFbLvkaO3%2B7SMgyew6vRHVv2yTe0TTtGL040aSkpBwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQHv1Rp8EzJZY4upircAxAjw2RY%2F3vgASz%2FfUVafSTCUAlVEKoDjofp81kx2imsHMBRFtX1Bb5YCVaoM3U%2F5BXjvXhkmgYf87qzhBC96iyX2cFMG6YgiObgyLQ4CeKuefqKG8TL7XN%2Fp%2BU39Q4XfqKqVy3OBQRLmnEaGjrp3f8%2BaeWeT1pJjwsmgezfdm8ud92QBUK0kYip4pdizZdGufmZimS4%2B5lwIW4NCDAwYnRh%2FViCnUSeEdS5EhnFcISDGQ%2F8wMVzh1FedTiP5zpToTaCDtGZM6fC3NJUc7DrhiyJ2OVVp8Tjt%2BvAZ9mIb9X%2Bcf%2FEg7OoAkDTeIS%2BJBoXwZ2EK5GQK4T3hX4E5Q29by5woCw9JveZWFRGT3eBDir3bmmItKp90wVltiRSYAgb2ELqVmyjecfpHld8ApUAN6TlFH%2F2marFfsLJjj%2B5fI24HmmKukrn%2BayxVMuKsc1WqXtRPvI146N1r23bElr0sFyCHp%2FPzx16YSRqftXlDy%2B57MoFEDgEg68GjIL9tW8Qaz0lVEG9ciTMCbdHS09a6wmP4d5XSdcFpm9OtgCkTz%2FWsvUkpMqtqjDlrRt1L2trmzahZSmiAn1ETM%2Bf1X5fbICULtKVmEK7dbMvOgqy8WexxQIRTNejHF0tWofwMNTSk9EGOqUBgJdad8RzcdPviZGzYSLtIN2KtY%2BrXlvKMGKQ5jfceVJ%2BLCA4lkDRYjpwsNN%2Bc5hj2hU2kk2bFnoTJYn%2BaljtqBAjEJTycwdOw0Oimljd6qZxYrvk%2BgfZhEw75ERlFIJxnyo7Fesh5FCfY9BELMXgg2KOYLQrKYgzh%2BmqQkCKhOa%2FGCxygwH2zkrBplDv0bC3Q8ygRw6G3xp0JW1VWKmPdy5fcQUI&X-Amz-Signature=cedfddf7098610054efb251a0f071e2ef3db2ecc3b706d609bd9fc2a8eaeaca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K2MH5K3%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAS%2FvxhcTpe1IoW0HOtiX7BIsz4yLeOT%2BI%2F2agSCRZwuAiA8v1cNvZTWdwsrVjyPPXs%2B8Mqo%2BSKwBct7XpeuYNmOiSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B50erLmeNCpwhM1pKtwDniNdhuGeSLPxT7jZy9aTkv5mDkQFwcdxl8g8QKoePkGQO25rQ5rcct6CT0ZiW%2Brzwnc2naLCNCOPKVx8iJ0ReIm%2Fz0bNfdo4i2gkMheM3c94lupMXUxzvA%2BAadFlJCZ89Y4bJj%2F0bn6QnQSVqa2dZrNdv3N9kexctvBWoAAa%2BliJ3vT3WVFygM5bxTrgvcPmt%2Fc8SQMztbX7l%2FDvJfVEOlUCIQ6elZNgN2g2FrQl1bKAbT2%2Bf7hzLutZSS56ybO6cxGh51WTd2oJFYwG1g%2BCtdcEmSGZmQBrFuXipU0nRoJ2NdYbWyeKM84o0GPB0rjveW8LdlpEUE6Ye%2Bfj2vL7gLRshcf3KPHJK%2FEkPmuQtNcDPc2wDuIgbnPSCbq7LBNkYbSQKIeXVdRVUjZ067eOM8%2FXaUEw%2Bdlo%2Bu%2BO57%2BfpK5On3R1fVl9Tb8Ft5AojsS8a9XrACiOYdPqZ1L7bWNQ960d5MPOuwH22qEKWdnCni%2But79HNm7nPOBRXrUj8H6cedegpl1P1UPc%2BaIuo6o52YpeY2xHYM6l%2FBkfBOO1vI4upk0Ur3qJX0wVFIkQ4O1njD0XU%2BQzEtU27xnTDiSSDWPhBeXFqQytD3e3Wl%2Fxu4m%2FloZuKriLvHsfVg4w6dKT0QY6pgGRotwt%2FGodB0gnTFJzCPbTn630aHHOXD7HhD6fp80l5pQ2zpf7peQtDQHytJgAeFrYQxLTWL0FCvAzb9N1VBexU%2BrfBm4SJFv1qAa3%2FZ%2FOj2aKXPZIxMT13282LJTs3OQLw922of72OrdGX2G0lxmYVAMR4y4AWkkyjTv6T12bPoim9gpmQwwb8rq2Iz9oNvvDgNpSfCW1EWHi%2BxHKnq6jJG%2Fe7sbE&X-Amz-Signature=c4ffead5e11deca1fd05d7517fc8d6914c5d224ccba5e1d1062e0c68b7687b5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU24RTXL%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8nU%2FaaiBSHtBM7%2FmOjokVSZgVdhwGAUiU4M79BL26XAiEA1akqqFXzefXA%2Bytu%2FKztbkBwbAkmncgZXhewFvAaW8wqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL59cNAtSpRtdTaApCrcA9gYVlxtKAyZhbKsviGN%2F8sy8KjGaDvLc5HWp5zBci3JY4iUIrXezmzmFqKRNFoWoeVTGBWlLS4zkU2XaxwB6no1CmlbCPZZfCH%2BXVtyQ6zSuZ907Ka5NBFkyx3K3vnMV7VCqPP%2FUNpzmvmWjjoTPw5PVv5v0QRsupHSpwlnjJpx6hLBOZTklE0y6fY4LXSfbAft2hmQ2ZIGdyQeSiBA6kV6eZX73dxOCW2Hb7PBcNmGSSj3Uunrwb37dqOPhCFII%2BAUOo01Bi5nkJl52BnVXm0b%2FqDqZVu9y4WTrnm%2B%2FO6ttwv7OBYNaeR3AJxUUZqEXTbYQwz4bi93mLfZOScxZxJeksVhiIyXwAwIuZTgrlOZUtiHiLy2cix9scPYsASCFMFTSotC7mpR8SwOGyN9pbbiCSgaxgGPQTaLaN93B0YQ65bMudeSh4gosU2uFOeRvt8vl8Ge5QRdS%2Fhi1AOcJ87ZwiSLDcV0QRRrJiB8hcupCXTyedOYKnQiMdivSMSE2aks0635kjeoRPoo1uUDssI7uK9m%2FaiDHN0kPd7u2XhVT6ojSAZKtAXL1n3LfJm96ZrLowZSzeVwRgysb5qSH%2Fbi4qwXZFE4PFgrS1BFJfGzZl5ZeLx3CCpSjID4MITTk9EGOqUBohGaDHHksJ3U2NLfuM7cT31igW9joKJOAIuD7%2BgDUFSzPIODBoF%2FkbWNFE43tf8nCCQlGErEXv8BqJZRST%2FTvRwlBck16yYR4GHJYvdanhm5TNDSxQ5mMwNt%2F6W%2B7f4DEshvj4SUuKReIljO%2BZkD8ASIpXWKNNxUDSOeY58NyQKIuBdlOxlDwPSbE3lfDEZBDxbOtxPWZcI2chHCC0%2F%2FmuCKNOES&X-Amz-Signature=21d0ec5fa844670303d248dcd0bfbf2fe16c5e2370de6ad4d111d31228806253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656O74X3M%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCizTOpejZUcKKfoA2LIAq0wuZeeDMAlIdURX1Uy%2FYZ7gIgd3%2FAi4aXcmutVM%2Bd%2BRHFXno4h2ElN22mw5cqA%2FVWyuQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKG%2B5vNnTWYop0z%2BGSrcA7MvB1SwuTO4D4jlI%2FIfXUoG4VdNqi%2Ftb%2FS9tVToWLG8wBknX8KFm4AaReXk5%2BavvVJeycH3CtMckfMHd86pSO2uSIsnpp1eUu5hcVj%2BH8rAMWp8F8jaq5QPasf%2BjKEkdQRZYoJVApdIBy%2FTGiAJJXXTSWzHnRaOv5a6vNUT1Bm1i%2FgYAA5V4o8nQHMFQHuSKamqWDNN88pQTJiA6fnE2tkOHmsKoJ9GP0p%2FxwlGBHFDGH8FeqL4%2F4qCk3EogP5cn5swhSRUaPUtbtgU6NPwHSnLCxzWAwb49caTpsjA92KL1x1Pg5iduhORNG3MMPsbk72pAKbJKcq3i66qCmEp0ET%2FA69fa8UD4Id2926P2khg%2BQpMsKc1wtR13KY%2BRRbtn6kKBXNPOalE3DvoZxKlJ5%2BgFn7NYaqJF%2F8m%2FqA4nKoTVKrudIctgQ6sHmbKu1VWJz%2FL2nt9tYnyF%2BDvSBrpNg%2F1pjvn0nwnAePt%2FKvbQ9z13h4BLg2jeVIoo66KOs9YJRToY2i2X0%2FGXQ1D%2Fot7YuNAbdhJM4FqRoEQmoHmvOFOerUHRRYKGUoTNFyW6aYC7XkvD%2FXcNYHHZvC8%2FU4KSZ1v%2BYknYckAIxiFsVP8urvvMk1DoejSXQir%2FG9aMOjSk9EGOqUBdSS2y1L9nDwwI7IQsrVqFuIaGLxxZd49GGR%2FUyF9JlUiAkSKRYYGPs2B9hjoMC%2BXZMB7YtcJ7yVDAfYKi%2B%2F5rQs9NPz6GP5TcV3q%2F7vVZOGhheJgH7qb%2BrC7opm%2FAygrQavZWqzeYe6KgWXWrUNIxWanm7zW4%2BlAOYtItWr8NoDc7b9CNQ5WcUCmDJ3PKkkxQeqk75s5sFNr5qEtEvu8l96twGqV&X-Amz-Signature=33d9154b021441a691c3342c4fc149c35b5f3fd945fb4e31600e781a8bb31bcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU24RTXL%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8nU%2FaaiBSHtBM7%2FmOjokVSZgVdhwGAUiU4M79BL26XAiEA1akqqFXzefXA%2Bytu%2FKztbkBwbAkmncgZXhewFvAaW8wqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL59cNAtSpRtdTaApCrcA9gYVlxtKAyZhbKsviGN%2F8sy8KjGaDvLc5HWp5zBci3JY4iUIrXezmzmFqKRNFoWoeVTGBWlLS4zkU2XaxwB6no1CmlbCPZZfCH%2BXVtyQ6zSuZ907Ka5NBFkyx3K3vnMV7VCqPP%2FUNpzmvmWjjoTPw5PVv5v0QRsupHSpwlnjJpx6hLBOZTklE0y6fY4LXSfbAft2hmQ2ZIGdyQeSiBA6kV6eZX73dxOCW2Hb7PBcNmGSSj3Uunrwb37dqOPhCFII%2BAUOo01Bi5nkJl52BnVXm0b%2FqDqZVu9y4WTrnm%2B%2FO6ttwv7OBYNaeR3AJxUUZqEXTbYQwz4bi93mLfZOScxZxJeksVhiIyXwAwIuZTgrlOZUtiHiLy2cix9scPYsASCFMFTSotC7mpR8SwOGyN9pbbiCSgaxgGPQTaLaN93B0YQ65bMudeSh4gosU2uFOeRvt8vl8Ge5QRdS%2Fhi1AOcJ87ZwiSLDcV0QRRrJiB8hcupCXTyedOYKnQiMdivSMSE2aks0635kjeoRPoo1uUDssI7uK9m%2FaiDHN0kPd7u2XhVT6ojSAZKtAXL1n3LfJm96ZrLowZSzeVwRgysb5qSH%2Fbi4qwXZFE4PFgrS1BFJfGzZl5ZeLx3CCpSjID4MITTk9EGOqUBohGaDHHksJ3U2NLfuM7cT31igW9joKJOAIuD7%2BgDUFSzPIODBoF%2FkbWNFE43tf8nCCQlGErEXv8BqJZRST%2FTvRwlBck16yYR4GHJYvdanhm5TNDSxQ5mMwNt%2F6W%2B7f4DEshvj4SUuKReIljO%2BZkD8ASIpXWKNNxUDSOeY58NyQKIuBdlOxlDwPSbE3lfDEZBDxbOtxPWZcI2chHCC0%2F%2FmuCKNOES&X-Amz-Signature=e39f86f54f280b24c50b945ab9d0c8e2c05aaacd91a2a2b015ef27d93ce708d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQCULB6P%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVZLucDOqBOYu4W9IhPNfRSqJeBQRdmogyqCpAD%2FeKSAiBlJL0s%2BpLQcEUTMRCdhjSRwmShrXDtLcc8wj6p79wAeSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc8hQU4x4SrAX4T%2F%2BKtwDdr9600zpV0Ny0YV6KZAGAUCJCIX85lNqK9Mh6cjkTqe1VFTPRT%2FCVUFM4L47JxBLOkWkND5wg8vpcGp8QBAdhggx38KIo%2FcP07oejDaC36e%2FsyPEGeq%2BKmFiD%2BLTV2QYc4%2BEMqesBaRJPlIRyx5TpvmNEHeC3QQDvpRA0uapMQn5L6LAqvUISideC%2BG%2F7jolOzk7NaUUUTpLiHyAt1KONso3sDXEKEHdfzH71thbXPJHls0mviBWveKZ9fmH6Lblk9ZW36Db9g%2FSoSUuyX3viU3WSJu1kVsa%2F0XCTShCuowYhotzDwF3pOHg%2FJ7ZmN8aBgKV6PvUPltVoUBhvI5BN9T5M%2Bf7N6ncJmFq0IuI%2B0x4QIPA6W1y8zJAPSEwN%2FWHpey9SuGSoFlG5wxXoU5WBpumdTVwExZE%2FNjGXhlMab3UROZ7jj9rog6qvgPi3tjLMlfENaobZRbnDEUeGrI2lY1EcHduUNJNrHWtbYE8mGE4erq7pvpMckGlPmOBGK1CJzslH1GzCh3NPyszyc3oYKc7IKLu4PS44LOLk1J4O1D7uB4MZdJjG7PiIflg3XAoRLKaY54yeTAf0cQRG5xQplhhUUDNiCleA430DvaakOwN6T3fcz6oHqYtbs4whdKT0QY6pgGwLmUhKO6ejvwOEpmNfDDBqWDiz0PQ46UQVN3Zckm0lAJ3bimExUAhgcZ6LmiK%2B9CP7HCQQLwFYJbELyuqSSOs17%2FxjXjUKCyAlHtwol9f2Z72TNJpuZ0PQz%2F8gmvEq23bvA3XAlgSyg5yHJsFOUICsGo1o0VICYawIWbi4CkEFpj1ykyVs%2BzhBJQdwDQjpVdiEUooscrzEe7T3ATCfVFnPEaZmRrr&X-Amz-Signature=77b6089feb17d84a35473716ed75cace755dda070eca3b417ddbc9b935269b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU24RTXL%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8nU%2FaaiBSHtBM7%2FmOjokVSZgVdhwGAUiU4M79BL26XAiEA1akqqFXzefXA%2Bytu%2FKztbkBwbAkmncgZXhewFvAaW8wqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL59cNAtSpRtdTaApCrcA9gYVlxtKAyZhbKsviGN%2F8sy8KjGaDvLc5HWp5zBci3JY4iUIrXezmzmFqKRNFoWoeVTGBWlLS4zkU2XaxwB6no1CmlbCPZZfCH%2BXVtyQ6zSuZ907Ka5NBFkyx3K3vnMV7VCqPP%2FUNpzmvmWjjoTPw5PVv5v0QRsupHSpwlnjJpx6hLBOZTklE0y6fY4LXSfbAft2hmQ2ZIGdyQeSiBA6kV6eZX73dxOCW2Hb7PBcNmGSSj3Uunrwb37dqOPhCFII%2BAUOo01Bi5nkJl52BnVXm0b%2FqDqZVu9y4WTrnm%2B%2FO6ttwv7OBYNaeR3AJxUUZqEXTbYQwz4bi93mLfZOScxZxJeksVhiIyXwAwIuZTgrlOZUtiHiLy2cix9scPYsASCFMFTSotC7mpR8SwOGyN9pbbiCSgaxgGPQTaLaN93B0YQ65bMudeSh4gosU2uFOeRvt8vl8Ge5QRdS%2Fhi1AOcJ87ZwiSLDcV0QRRrJiB8hcupCXTyedOYKnQiMdivSMSE2aks0635kjeoRPoo1uUDssI7uK9m%2FaiDHN0kPd7u2XhVT6ojSAZKtAXL1n3LfJm96ZrLowZSzeVwRgysb5qSH%2Fbi4qwXZFE4PFgrS1BFJfGzZl5ZeLx3CCpSjID4MITTk9EGOqUBohGaDHHksJ3U2NLfuM7cT31igW9joKJOAIuD7%2BgDUFSzPIODBoF%2FkbWNFE43tf8nCCQlGErEXv8BqJZRST%2FTvRwlBck16yYR4GHJYvdanhm5TNDSxQ5mMwNt%2F6W%2B7f4DEshvj4SUuKReIljO%2BZkD8ASIpXWKNNxUDSOeY58NyQKIuBdlOxlDwPSbE3lfDEZBDxbOtxPWZcI2chHCC0%2F%2FmuCKNOES&X-Amz-Signature=fd55241216ce451d5bcaf5ded4042d0776a9baba65594aecef9dbb6134af68ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCHDO23Z%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxMXDMLEV%2FjIVk11GUelexnbEYWrY6xX%2FoZo%2BC%2F3pefQIgK3aPN6%2FXGxBwB2Zl6na6nSD9cj6PeKUgrraDkR3QWbUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsZGGKVRLsofQX5jCrcA0oR5c3V50RiO7PnP3%2FQD1xE1LgDhAD8GbEwXLarg6dZl%2BSrRWsCdDbXH1sKjB78FIvryF3SpSeRDl6GQEE40v3WlL3ot7eTwGJeQQ0C2cQXDmWAgpSLkjMcMNXIojRkd%2BVj%2FX6kVuU7oSlSiaOhmEzuQFUxegZ4kmWwGH%2BJSuCC6ehcTCtxWa0u6xxNMaOtKr%2BcUtMLC6kOx%2Bgl4tnuAdon1OHitFTGjn1HzZMwuGhHcZd0I2l13q7Ka%2FcrRcORGywG4e8e3cVRa6PmwcCx4BOqLCUnr%2BmJefYMIpk%2BtykET4j63fPmkLvxIENT2dP0vysSMvOoVjDZbQhS3V%2F%2F3hh8mTihrII8KUvs%2FVUT6jFHeRuT%2Boeocbep4ftgMyb0Si%2Fxzt8GpcUMgYk4aiL99u%2FAQ6rgx7r%2BwRcAUXoy8PXDDd%2BiWtb8h6Yu%2F%2BRjBpT8RXB%2Bhp619Va0KbQEKuy34s6vfFfp55qNSNdjKrd0b00c%2BBBIKLiHXQWZilxacpvPGYw%2ByTdwCVvssCMeZkZS5lHvbKb81zwlxse7KgaWAkTfDlIyap8uBLxm0%2FlrLdg4XhtTQ%2BYtIEsIAtfPv9S11VPbwSBiH8GAQg8oa3KDvYRF01PCWGOROsNbc5gBMIjSk9EGOqUBMkSGXjdw%2FGDuRJQJW9ecrgvf%2F4KcGfzhpwPT4fbPVmRfP3%2BjgTpzYiUDHUGN2K5uEh9OosclCfuCV6%2FDZADjr%2BKm7%2FnZByMOS0oGS%2BHXpvVh1BAiD31U2EWlFAJ%2F9f5ge8olJ4b5LCCJWM95%2B7RU9zGXSolT28Hp3r0qzfpeqqg0uZNqwCWrKL5eYF%2B2DxJuX3E3HjdVNdA%2FzLdDh4rgSw5A10n1&X-Amz-Signature=f428b823a4ac185d5469cbdb621fef29b2806cb2a1f20f035af54cc60c0d3836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU24RTXL%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8nU%2FaaiBSHtBM7%2FmOjokVSZgVdhwGAUiU4M79BL26XAiEA1akqqFXzefXA%2Bytu%2FKztbkBwbAkmncgZXhewFvAaW8wqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL59cNAtSpRtdTaApCrcA9gYVlxtKAyZhbKsviGN%2F8sy8KjGaDvLc5HWp5zBci3JY4iUIrXezmzmFqKRNFoWoeVTGBWlLS4zkU2XaxwB6no1CmlbCPZZfCH%2BXVtyQ6zSuZ907Ka5NBFkyx3K3vnMV7VCqPP%2FUNpzmvmWjjoTPw5PVv5v0QRsupHSpwlnjJpx6hLBOZTklE0y6fY4LXSfbAft2hmQ2ZIGdyQeSiBA6kV6eZX73dxOCW2Hb7PBcNmGSSj3Uunrwb37dqOPhCFII%2BAUOo01Bi5nkJl52BnVXm0b%2FqDqZVu9y4WTrnm%2B%2FO6ttwv7OBYNaeR3AJxUUZqEXTbYQwz4bi93mLfZOScxZxJeksVhiIyXwAwIuZTgrlOZUtiHiLy2cix9scPYsASCFMFTSotC7mpR8SwOGyN9pbbiCSgaxgGPQTaLaN93B0YQ65bMudeSh4gosU2uFOeRvt8vl8Ge5QRdS%2Fhi1AOcJ87ZwiSLDcV0QRRrJiB8hcupCXTyedOYKnQiMdivSMSE2aks0635kjeoRPoo1uUDssI7uK9m%2FaiDHN0kPd7u2XhVT6ojSAZKtAXL1n3LfJm96ZrLowZSzeVwRgysb5qSH%2Fbi4qwXZFE4PFgrS1BFJfGzZl5ZeLx3CCpSjID4MITTk9EGOqUBohGaDHHksJ3U2NLfuM7cT31igW9joKJOAIuD7%2BgDUFSzPIODBoF%2FkbWNFE43tf8nCCQlGErEXv8BqJZRST%2FTvRwlBck16yYR4GHJYvdanhm5TNDSxQ5mMwNt%2F6W%2B7f4DEshvj4SUuKReIljO%2BZkD8ASIpXWKNNxUDSOeY58NyQKIuBdlOxlDwPSbE3lfDEZBDxbOtxPWZcI2chHCC0%2F%2FmuCKNOES&X-Amz-Signature=443aac0b27c2d4ea1cc090e262cd8067ac5ab3a0b38527f71abeda89f3d8cdcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZXI2OZZ%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpvz8hSY%2Fz5QtVATgG%2BqF4oK9zcv4TqeG632MpdA%2B%2BBAIgK4R3HhKnmkJ0SUtJwIIZIGhZWFLXGJdj%2FoWncdTWnuEqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLb%2BQlO8GlDAEWJ6%2FCrcA022ns8I3DLTSfB4RpCsHj3nvCSgjBY7jTegxtFvKmk5%2BFmXW8KCrT0DAb5xftaNqtdPfSa6KLm6Yb1ffCRyiF06cp8vVr%2FZ3WTjVm3kIqlLT%2BoEsuJ8Zz6w19Ru%2FZmvP1wsd2OVgBLkwUrypojSszIC3VoDg2R3ObJB%2BP7Xx%2BHQmy6DzV2T7%2FcULZPLqu%2BFaDagcuPnHV90%2BGm%2BZJRIvomC2HDQOVdiIDKMrZnBkwtw2%2Bj1PplKyB9%2BTMZRclD%2BtPkHFnm2QlSR%2F82xg4IWRRzBTaTeIqmQMVTd5n3vY3qo6yvEe49%2BRpQtHva0Qoo8D%2BxRy2mR2SxNuuhzdWilrhonsUypQI9AVwVMloVWAVTjkCPicWSN87ZWPuk208G3c7WiImUXE7XgVlZcjumiSwxDQZSbgmBrIgEhSerIdt9Cn4RDUB%2F8YiNkC0%2F7bwbhPfU%2BZ%2BLSW%2FaW7J0Y8RG0fMyO50JcRHQktwYR62wGt1ATpokq014gj2me%2FQdlDE8E4eG7kB2BGmNbzNAK%2F8DmGIsGd%2B71CrIYVEPP401f8VBiuZvIyFw6xpKbm%2FOqPNJy7zXNCG%2B6syIVzPMT6SfrdHK82ovRdyiRBmVWCDYnyk7p7FJdKvku6YMmq3r%2FMJ%2FSk9EGOqUBYF8ZggzwYs%2B3%2F8R64LWszRwgVo0OWHUnNBPHDCwkaPs9WSPD%2F%2F8SiC7DPrP9uhO8pKE3dHJN%2BRnI0QknaJqu%2F5eKFgoYasKgCMil8bAaBhjaFTPSGYkdbc7tFVW5r4xpddK4lx2VBMxSrxrhi4Geoch3L4CV0uMy7LcxZfdI8nynHra7Q08A9dTwegmgbhxHgQR9SWfPVnui6zyqvWRCcqQ0Kktx&X-Amz-Signature=2d26500a5bea275f313419a13bcf681da0a6cadb9e50b963891eab7bb7a49b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU24RTXL%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8nU%2FaaiBSHtBM7%2FmOjokVSZgVdhwGAUiU4M79BL26XAiEA1akqqFXzefXA%2Bytu%2FKztbkBwbAkmncgZXhewFvAaW8wqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL59cNAtSpRtdTaApCrcA9gYVlxtKAyZhbKsviGN%2F8sy8KjGaDvLc5HWp5zBci3JY4iUIrXezmzmFqKRNFoWoeVTGBWlLS4zkU2XaxwB6no1CmlbCPZZfCH%2BXVtyQ6zSuZ907Ka5NBFkyx3K3vnMV7VCqPP%2FUNpzmvmWjjoTPw5PVv5v0QRsupHSpwlnjJpx6hLBOZTklE0y6fY4LXSfbAft2hmQ2ZIGdyQeSiBA6kV6eZX73dxOCW2Hb7PBcNmGSSj3Uunrwb37dqOPhCFII%2BAUOo01Bi5nkJl52BnVXm0b%2FqDqZVu9y4WTrnm%2B%2FO6ttwv7OBYNaeR3AJxUUZqEXTbYQwz4bi93mLfZOScxZxJeksVhiIyXwAwIuZTgrlOZUtiHiLy2cix9scPYsASCFMFTSotC7mpR8SwOGyN9pbbiCSgaxgGPQTaLaN93B0YQ65bMudeSh4gosU2uFOeRvt8vl8Ge5QRdS%2Fhi1AOcJ87ZwiSLDcV0QRRrJiB8hcupCXTyedOYKnQiMdivSMSE2aks0635kjeoRPoo1uUDssI7uK9m%2FaiDHN0kPd7u2XhVT6ojSAZKtAXL1n3LfJm96ZrLowZSzeVwRgysb5qSH%2Fbi4qwXZFE4PFgrS1BFJfGzZl5ZeLx3CCpSjID4MITTk9EGOqUBohGaDHHksJ3U2NLfuM7cT31igW9joKJOAIuD7%2BgDUFSzPIODBoF%2FkbWNFE43tf8nCCQlGErEXv8BqJZRST%2FTvRwlBck16yYR4GHJYvdanhm5TNDSxQ5mMwNt%2F6W%2B7f4DEshvj4SUuKReIljO%2BZkD8ASIpXWKNNxUDSOeY58NyQKIuBdlOxlDwPSbE3lfDEZBDxbOtxPWZcI2chHCC0%2F%2FmuCKNOES&X-Amz-Signature=8e1e3de084953d669a4682f4702a70d86bafaf4d79632bcf36987332d233a141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OVLTQY6%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOEPasENdhpiZHT2XlY0Vb5k9wwpkb08RhsBFErBKHbAiEAkfhEu%2FPmdaF%2F0bnu%2FX7sSFn4ZRR%2B71TsooTFje1C578qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlQVfzfE4ztuCDhqircA8EHTMG4cN105QOca437xO28MeF%2F%2F9SK2BuUbCaNvOKI7h44QpdF7%2Fv7gVyiJpw3BEfAUaT%2BBPu7KAba0u7T482Zma%2F4JoKnmlJhdgnzIzNKmuWT%2BK3MMM44greAwEtsivRowfKTBClrF17uqtx7PLadj%2BmbhhNs4W%2BIO6g4P%2FSMKxmufuFwX4dSwMAZfBbARuqPZN4JvzMexGS0wC%2F%2BqJCfb2ZzoF3Lr3bYf%2F%2BJ8HTWu5HtbA%2B8tpRyrR2Bp9lWZk0vDBdwn01M0kugDJjFbOQBWYQJVH08GFCJcQ3peXDJpLA7CPXU2R67uAM%2FWeM639lq7flYstVuMfCQD95zls2ryyEpR0wNceTq6cINKe4LTPKBa0joytpg5sX2ENHwXHBRl6kPs5KcldEgOUFpUhwo%2B7VP6flbikjwuOaVlZyPMBFd1Mz4yDTaKTKmo4bsksTfa5aIwUApu1MMzyJkYubrhJ8Y6I90IDLWRVqu4x66KCcn1IBCVgcZWRks1aBqsxLObH9aoB1bdy%2FSBnNAd2tTk%2FmaRNzNozLyWjin58LwcPlXEgjLCeD0PcytURFAz2lu307MQ%2BhDd0MBskR6WxXROBB3Jc%2F4fCAH9WhZMUGWePK0h7JqQfKwoiMeMMPTk9EGOqUBIg2hBRazbGQTk0gINdgtPhqOdrE2ou5wslHzXlqV2JgzPXQpOFU04%2BjAX%2Fd5OisZtbRqdLQo7oRyb4Cs14gyNrj0v2ZtqFkXwpKgAczqoW%2FnpcxYwxs1kYCrvKUaP3o2vIPVSmxYKWTAeJvQHPyFdZagBEu0jMeeyVyfM%2FTF5mYfA2adVAiHqvlsB%2BUwu2kFCh3w8CNXwtj4e8%2BgXgnshWbjrkBd&X-Amz-Signature=91ea92f98fe7f80de65f01f26492d0830eff81660f3276342673b54573259b00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GWX3OBV%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYx1V2VYEKnCrkQWAZM5GNCKttbvBYp2%2FWK6kI%2BKNq0AiBrRaLAqqS1o5enBb23U3mOlXEszpy7Jd4ZM73iyCE7zCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaUJi452kZS0Ej8FcKtwDlqfzLNUFg3j8Q06VttV4BnmNuwXZgj9lic%2FTvhKO6xSBSPYAolcnfcZehjpiPRSbfoQV4FlZxD0jnIeqpb%2FFDzWriADSvzTxyQ4jVy1mCVx53uYA5FXZpZ5ihyvOfuqCueYQW9CbRJuzoHJRnD3xkXVu9cg5kLIHBFnps64zL20skrFum3KMMmhh87naZ99uiBtwal1OV4c0ff6RicJhsjchd%2BtW7rboZ8Q4LzOEkd8YFuBo30AViuZdR3%2B4E3GaWJz6BwPNV4ELgUcHHbNjxU%2FBeShIQwbifdQAk79sGtwZG8kGQ2fXDSgqfNZ4JAoaS%2BoKCT4wed%2BUArBSM5yFKy0m6e1cLsTT%2BKPStB979BSNJO29VbcVUPvZ%2B3qQ3DGR4VlQ417cWDkzq2TJx39gGmP5PiI9J3z2mrYHRRutiJzkH9Ic7VEqJw47yMY3F%2BO4FeRkQZgQek15LHJ%2FoWKr0bc5h3VHvExqWClgl4cH0oKw0WbSXrQ9fAKRFW0wy8N5XSJMEGx6lC1BQED%2FwBawr7FUGX2HeT0Bs34cW4s3XcBDzb7OfFBZhqNLVl9nBlGk73EFBhj7Oidd72oQhAYtV2ck0lcZk%2BmmHSSjWnPPE4ZRRrwkpnAWXz1h21MwtdGT0QY6pgGYPwLYqcg8BWjN7uJzalBpuGD7LHbSCMkqXQqhP%2Bee9EmAwgOM9Cp6RLkfF%2FaCD7a2XVoysMkO8jj1VUNQI%2BwSQ96t%2FG1Is1HUeFPTagr6Su%2FMEfk7UMcZyhEmcv288hJuQZIWHuxKpJJTBzF0sOhoh9vC4ZX68a1Kk83UuMaMprW8c4JhENiXMThy8R1jyTyCYm0Y5GFSWS18RF3XVLQpIBDZ12%2Br&X-Amz-Signature=6ab0536d7bac0ac8b833bf57c1c2bf638ff8660d2164c384c58983bd734693a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4FGYSH4%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCba94S3ubrqfR7AdcofMKbXCqcWNu%2FZRsWlbB1fQHCewIgRYs3%2FnvsZSqfa8CBwW9bREW%2FL4ZhdVzJsIj8Ch5XfRcqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNslhmjXeDYSaGFqHSrcA7JF1WiYK%2Fl2Lm5YeujsxopTYz5C2EOOWw%2BhNQzIFi03Fx7sksHQ37GZcrulHePnbvq2e5B9Ja6JFWVthgFO0HJhX9j6qKn9e%2FyTVREiHlI6gXrleLU6bhgUCTz8z3tZq7zgG9IBamDze4VOCzfyFVBYFeCf9l6UqIZcP41j1Aq%2FsBdpAnO%2FgmkGvJZf7R%2BtI16flPljSH4Izuelv6Sjer5S2LhJBoGsrSi9FiIbFPDSfJpbe2kJysdfq3IZjeZZsxe%2BrmUsdbKxgOMvdxm%2BB%2FgCUe5%2FehKxxdWKpRB6mRrh0%2FNMws3mpfMch4g4ByTMzwzO7Twi1aaVH2jJIw5gi%2BA09dxjEA3JA2o0UdyNZJ4EPD768SG2quwuaq7lExRkWY7UML1MzVlYuvWnhpOJ4c4tQ6DQjNRVI82Q3Ax2T%2FwD71OkeR9Ugyjrwd6RArjIUWu7usy%2F8F8egnDIOHDHoOxVJBwAX3qUieVN%2BSX769TL%2FDWtVhga7vV%2FoombIWicPDIkZueTf%2BohJLkSXFkEtDCr8tzhULiZtix%2FWWwtHjl8m%2BodyZQOXp50j%2F4%2Bk6bcCv5Q3itPi3hn2Q9Z0z3jrHgP4HUSKHTOd4Z8kgnJRnrM603%2BTX1Q76WLQpIVMPTRk9EGOqUB8TCoZbY%2BF9frSKyHsXSOjkF%2BHKfw3%2BWtLZJZ5llIxs2Oe1DutZXnskH237en8ZlKAOvn2fde5BH0f86r2runCa7J8ItAOuhPSEJARDz%2Fc9QATHg7ekUpQehO49wf%2FbF7L1Gm8evP39I%2BzmbBKqeNGxCUbem31iNNFz%2BIPZ8ZiXV4%2Fh29w9LRcgrpLYkDymPZWU6Iga59zUEFswagyO0XgK8qaZR%2F&X-Amz-Signature=3b6bfac527116b2a350242bb983fb06343e9c9a08b06d83bbc80b9a9a1c60d46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU24RTXL%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8nU%2FaaiBSHtBM7%2FmOjokVSZgVdhwGAUiU4M79BL26XAiEA1akqqFXzefXA%2Bytu%2FKztbkBwbAkmncgZXhewFvAaW8wqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL59cNAtSpRtdTaApCrcA9gYVlxtKAyZhbKsviGN%2F8sy8KjGaDvLc5HWp5zBci3JY4iUIrXezmzmFqKRNFoWoeVTGBWlLS4zkU2XaxwB6no1CmlbCPZZfCH%2BXVtyQ6zSuZ907Ka5NBFkyx3K3vnMV7VCqPP%2FUNpzmvmWjjoTPw5PVv5v0QRsupHSpwlnjJpx6hLBOZTklE0y6fY4LXSfbAft2hmQ2ZIGdyQeSiBA6kV6eZX73dxOCW2Hb7PBcNmGSSj3Uunrwb37dqOPhCFII%2BAUOo01Bi5nkJl52BnVXm0b%2FqDqZVu9y4WTrnm%2B%2FO6ttwv7OBYNaeR3AJxUUZqEXTbYQwz4bi93mLfZOScxZxJeksVhiIyXwAwIuZTgrlOZUtiHiLy2cix9scPYsASCFMFTSotC7mpR8SwOGyN9pbbiCSgaxgGPQTaLaN93B0YQ65bMudeSh4gosU2uFOeRvt8vl8Ge5QRdS%2Fhi1AOcJ87ZwiSLDcV0QRRrJiB8hcupCXTyedOYKnQiMdivSMSE2aks0635kjeoRPoo1uUDssI7uK9m%2FaiDHN0kPd7u2XhVT6ojSAZKtAXL1n3LfJm96ZrLowZSzeVwRgysb5qSH%2Fbi4qwXZFE4PFgrS1BFJfGzZl5ZeLx3CCpSjID4MITTk9EGOqUBohGaDHHksJ3U2NLfuM7cT31igW9joKJOAIuD7%2BgDUFSzPIODBoF%2FkbWNFE43tf8nCCQlGErEXv8BqJZRST%2FTvRwlBck16yYR4GHJYvdanhm5TNDSxQ5mMwNt%2F6W%2B7f4DEshvj4SUuKReIljO%2BZkD8ASIpXWKNNxUDSOeY58NyQKIuBdlOxlDwPSbE3lfDEZBDxbOtxPWZcI2chHCC0%2F%2FmuCKNOES&X-Amz-Signature=3e03d881a69657f1834a39d828d92c27acf70d2266d2c008b2f30b2f37aa1070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU24RTXL%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8nU%2FaaiBSHtBM7%2FmOjokVSZgVdhwGAUiU4M79BL26XAiEA1akqqFXzefXA%2Bytu%2FKztbkBwbAkmncgZXhewFvAaW8wqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL59cNAtSpRtdTaApCrcA9gYVlxtKAyZhbKsviGN%2F8sy8KjGaDvLc5HWp5zBci3JY4iUIrXezmzmFqKRNFoWoeVTGBWlLS4zkU2XaxwB6no1CmlbCPZZfCH%2BXVtyQ6zSuZ907Ka5NBFkyx3K3vnMV7VCqPP%2FUNpzmvmWjjoTPw5PVv5v0QRsupHSpwlnjJpx6hLBOZTklE0y6fY4LXSfbAft2hmQ2ZIGdyQeSiBA6kV6eZX73dxOCW2Hb7PBcNmGSSj3Uunrwb37dqOPhCFII%2BAUOo01Bi5nkJl52BnVXm0b%2FqDqZVu9y4WTrnm%2B%2FO6ttwv7OBYNaeR3AJxUUZqEXTbYQwz4bi93mLfZOScxZxJeksVhiIyXwAwIuZTgrlOZUtiHiLy2cix9scPYsASCFMFTSotC7mpR8SwOGyN9pbbiCSgaxgGPQTaLaN93B0YQ65bMudeSh4gosU2uFOeRvt8vl8Ge5QRdS%2Fhi1AOcJ87ZwiSLDcV0QRRrJiB8hcupCXTyedOYKnQiMdivSMSE2aks0635kjeoRPoo1uUDssI7uK9m%2FaiDHN0kPd7u2XhVT6ojSAZKtAXL1n3LfJm96ZrLowZSzeVwRgysb5qSH%2Fbi4qwXZFE4PFgrS1BFJfGzZl5ZeLx3CCpSjID4MITTk9EGOqUBohGaDHHksJ3U2NLfuM7cT31igW9joKJOAIuD7%2BgDUFSzPIODBoF%2FkbWNFE43tf8nCCQlGErEXv8BqJZRST%2FTvRwlBck16yYR4GHJYvdanhm5TNDSxQ5mMwNt%2F6W%2B7f4DEshvj4SUuKReIljO%2BZkD8ASIpXWKNNxUDSOeY58NyQKIuBdlOxlDwPSbE3lfDEZBDxbOtxPWZcI2chHCC0%2F%2FmuCKNOES&X-Amz-Signature=ae6cf7520f8794f002c8e20ad25a40baa3f83f16ebff544f5d061c6efe9d6db7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLJ2WH4J%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfZR63XPb%2F4DdWcCyaD5YePHb8rPSvwmjlUKM7Pe%2B4wAiAYE%2Bgz2dJjY5BDGj5QPwMmlwOHMsNvR5Ba6wWartptGyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5l99erLv8AigEpupKtwDFaTL%2Bf0gVj%2BdBG43oyEhUKG%2FD%2B9O9OG%2BvAKXYvW0esK5NEc%2F4eXQGXFAyGORA336yo8Etgy9OO4kvpFQ04%2B7%2FU6rpVlCWrEJvJ4VELsMTSoI43HixmanZuL%2FZABKNElXcMarOOpE%2Bejy5GRRfvXcKDX4DZKMQ9k4ZXpXKJHgrzq5jN8DRzEeRAhHXXXRArZA42UVDY08mLL28g%2F%2BfmXxyIR9KT5r8p9FlXLsTRS5nv%2Fpy3GXACwkUfOYMUVET0idGhiwtn3fhS%2F2qz%2FB5C%2B2fcPVuhX6jujw73gRMgb%2Ba95THDGssnuHTagSr%2BKqx0TklLJ3naCtjMsgFPKHouZfK%2BslvxdF1lJstH9QJUT%2BxWiRJ2QCDJ2OVSePsHLAQneqR%2FNtyDgFa7UsCIgsFRNTsBJaZR5GfVVs7KI%2B0pfCxymzyfoJfb5sq9axtQ9lNdQyIs2iPxhFQE8QazmDRg8ARxShtwrxf4yRsV6MWKFCiI3fHbdeUDSMpEUNAZkYZ6JYGmUCLtBl5lBcJl3BAKqoX9evA19nm9rlHBKpn%2FLdM01ML3DQ7keyY0kCCf11pMkcHjGOKZ8XQ6ZtlSMURfchdk4u3ixneOTju0ZlYeoFU7hWvMCEV%2BCtDdHwmqUwiNKT0QY6pgG62ISlK6QeSifjORB9tRdYoOBolTZlbo7BBjjRNoKLHLiN9tRtMkMoyZjRB6xssmFF26WkF%2FFwIGvrhMxhlVD1UiFrb%2FNSeWa%2FPxs%2FEJ8EtkwH%2B37S4w4uQapUfXQsuhabyWS%2BLVpLC9xx4ZQ4KZLKV%2BFh4b8KK8vUjPo37Etx8LV1T4M0v4KqvnopZ8lOVmxI%2FLsZ506Ifj4YbActi0wI8OQ590yc&X-Amz-Signature=761e7e39b5fc28ae92f6c14996b4c93c40f1998d28c37cb41d3122a77da028ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLJ2WH4J%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfZR63XPb%2F4DdWcCyaD5YePHb8rPSvwmjlUKM7Pe%2B4wAiAYE%2Bgz2dJjY5BDGj5QPwMmlwOHMsNvR5Ba6wWartptGyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5l99erLv8AigEpupKtwDFaTL%2Bf0gVj%2BdBG43oyEhUKG%2FD%2B9O9OG%2BvAKXYvW0esK5NEc%2F4eXQGXFAyGORA336yo8Etgy9OO4kvpFQ04%2B7%2FU6rpVlCWrEJvJ4VELsMTSoI43HixmanZuL%2FZABKNElXcMarOOpE%2Bejy5GRRfvXcKDX4DZKMQ9k4ZXpXKJHgrzq5jN8DRzEeRAhHXXXRArZA42UVDY08mLL28g%2F%2BfmXxyIR9KT5r8p9FlXLsTRS5nv%2Fpy3GXACwkUfOYMUVET0idGhiwtn3fhS%2F2qz%2FB5C%2B2fcPVuhX6jujw73gRMgb%2Ba95THDGssnuHTagSr%2BKqx0TklLJ3naCtjMsgFPKHouZfK%2BslvxdF1lJstH9QJUT%2BxWiRJ2QCDJ2OVSePsHLAQneqR%2FNtyDgFa7UsCIgsFRNTsBJaZR5GfVVs7KI%2B0pfCxymzyfoJfb5sq9axtQ9lNdQyIs2iPxhFQE8QazmDRg8ARxShtwrxf4yRsV6MWKFCiI3fHbdeUDSMpEUNAZkYZ6JYGmUCLtBl5lBcJl3BAKqoX9evA19nm9rlHBKpn%2FLdM01ML3DQ7keyY0kCCf11pMkcHjGOKZ8XQ6ZtlSMURfchdk4u3ixneOTju0ZlYeoFU7hWvMCEV%2BCtDdHwmqUwiNKT0QY6pgG62ISlK6QeSifjORB9tRdYoOBolTZlbo7BBjjRNoKLHLiN9tRtMkMoyZjRB6xssmFF26WkF%2FFwIGvrhMxhlVD1UiFrb%2FNSeWa%2FPxs%2FEJ8EtkwH%2B37S4w4uQapUfXQsuhabyWS%2BLVpLC9xx4ZQ4KZLKV%2BFh4b8KK8vUjPo37Etx8LV1T4M0v4KqvnopZ8lOVmxI%2FLsZ506Ifj4YbActi0wI8OQ590yc&X-Amz-Signature=d9f8fa0abcf613b2beb5d39e5cb9739a7e3943458f41b127b5ac5ae37813867e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLJ2WH4J%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfZR63XPb%2F4DdWcCyaD5YePHb8rPSvwmjlUKM7Pe%2B4wAiAYE%2Bgz2dJjY5BDGj5QPwMmlwOHMsNvR5Ba6wWartptGyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5l99erLv8AigEpupKtwDFaTL%2Bf0gVj%2BdBG43oyEhUKG%2FD%2B9O9OG%2BvAKXYvW0esK5NEc%2F4eXQGXFAyGORA336yo8Etgy9OO4kvpFQ04%2B7%2FU6rpVlCWrEJvJ4VELsMTSoI43HixmanZuL%2FZABKNElXcMarOOpE%2Bejy5GRRfvXcKDX4DZKMQ9k4ZXpXKJHgrzq5jN8DRzEeRAhHXXXRArZA42UVDY08mLL28g%2F%2BfmXxyIR9KT5r8p9FlXLsTRS5nv%2Fpy3GXACwkUfOYMUVET0idGhiwtn3fhS%2F2qz%2FB5C%2B2fcPVuhX6jujw73gRMgb%2Ba95THDGssnuHTagSr%2BKqx0TklLJ3naCtjMsgFPKHouZfK%2BslvxdF1lJstH9QJUT%2BxWiRJ2QCDJ2OVSePsHLAQneqR%2FNtyDgFa7UsCIgsFRNTsBJaZR5GfVVs7KI%2B0pfCxymzyfoJfb5sq9axtQ9lNdQyIs2iPxhFQE8QazmDRg8ARxShtwrxf4yRsV6MWKFCiI3fHbdeUDSMpEUNAZkYZ6JYGmUCLtBl5lBcJl3BAKqoX9evA19nm9rlHBKpn%2FLdM01ML3DQ7keyY0kCCf11pMkcHjGOKZ8XQ6ZtlSMURfchdk4u3ixneOTju0ZlYeoFU7hWvMCEV%2BCtDdHwmqUwiNKT0QY6pgG62ISlK6QeSifjORB9tRdYoOBolTZlbo7BBjjRNoKLHLiN9tRtMkMoyZjRB6xssmFF26WkF%2FFwIGvrhMxhlVD1UiFrb%2FNSeWa%2FPxs%2FEJ8EtkwH%2B37S4w4uQapUfXQsuhabyWS%2BLVpLC9xx4ZQ4KZLKV%2BFh4b8KK8vUjPo37Etx8LV1T4M0v4KqvnopZ8lOVmxI%2FLsZ506Ifj4YbActi0wI8OQ590yc&X-Amz-Signature=568dcb05f246bdc35da33f201621286ad4c7b561609685d34eee0bbd7d74b905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLJ2WH4J%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfZR63XPb%2F4DdWcCyaD5YePHb8rPSvwmjlUKM7Pe%2B4wAiAYE%2Bgz2dJjY5BDGj5QPwMmlwOHMsNvR5Ba6wWartptGyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5l99erLv8AigEpupKtwDFaTL%2Bf0gVj%2BdBG43oyEhUKG%2FD%2B9O9OG%2BvAKXYvW0esK5NEc%2F4eXQGXFAyGORA336yo8Etgy9OO4kvpFQ04%2B7%2FU6rpVlCWrEJvJ4VELsMTSoI43HixmanZuL%2FZABKNElXcMarOOpE%2Bejy5GRRfvXcKDX4DZKMQ9k4ZXpXKJHgrzq5jN8DRzEeRAhHXXXRArZA42UVDY08mLL28g%2F%2BfmXxyIR9KT5r8p9FlXLsTRS5nv%2Fpy3GXACwkUfOYMUVET0idGhiwtn3fhS%2F2qz%2FB5C%2B2fcPVuhX6jujw73gRMgb%2Ba95THDGssnuHTagSr%2BKqx0TklLJ3naCtjMsgFPKHouZfK%2BslvxdF1lJstH9QJUT%2BxWiRJ2QCDJ2OVSePsHLAQneqR%2FNtyDgFa7UsCIgsFRNTsBJaZR5GfVVs7KI%2B0pfCxymzyfoJfb5sq9axtQ9lNdQyIs2iPxhFQE8QazmDRg8ARxShtwrxf4yRsV6MWKFCiI3fHbdeUDSMpEUNAZkYZ6JYGmUCLtBl5lBcJl3BAKqoX9evA19nm9rlHBKpn%2FLdM01ML3DQ7keyY0kCCf11pMkcHjGOKZ8XQ6ZtlSMURfchdk4u3ixneOTju0ZlYeoFU7hWvMCEV%2BCtDdHwmqUwiNKT0QY6pgG62ISlK6QeSifjORB9tRdYoOBolTZlbo7BBjjRNoKLHLiN9tRtMkMoyZjRB6xssmFF26WkF%2FFwIGvrhMxhlVD1UiFrb%2FNSeWa%2FPxs%2FEJ8EtkwH%2B37S4w4uQapUfXQsuhabyWS%2BLVpLC9xx4ZQ4KZLKV%2BFh4b8KK8vUjPo37Etx8LV1T4M0v4KqvnopZ8lOVmxI%2FLsZ506Ifj4YbActi0wI8OQ590yc&X-Amz-Signature=736060f6fa8abb8fead0c352f02338f03e071435d7921d2dd8db80358782d68a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R5URCBF%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0VzdQCQC%2FS%2BIUp1j3EgpfhBWIwoQgWtktAcQSwtGraAIhANRjMnwROUhMac6hWjOrxem7kMf7iYTbTBdR%2Fw9MHdpUKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz8dAwqqq5NOnpM8Yq3AOYgj%2FJDgLaOSh8ESTN603XboVwuUDAeJlQvXwOitskavAMRtMnxF1wbt8TFE6cFgXofMfEabZFcs96%2FT4zvg74XXf6C2TDRU7WvK9xfgUZl7WzWdd6E3egk9VnROlZQr4JB%2Bhz4L8m3HIJzbM7EYMEUFkv0I8eNGasodBUeAzH8KTS0t14G16ZpuIMgGloxZ0eqwKbSQnigkpWtyYlede%2Bkx7o5Z87EuMQ%2Ff%2BgPvSiCY8kPwLZycCcK3Pg%2BT%2FIL3y5by3NLr6m44fQcG4Bvr2PiLN4zWNbWv2I25jqnsu%2FziKI%2BKa06p01NWB7h%2ByvpOguBfSdVwbTiWRZGbcm6xc2NCle3WV1DSe%2FDKYhip5fHstQpMpj6ziTT5pxYjB9PqSZhRsAQIOR1QSmuEetBat7%2FOdY%2BlQx%2F6QSLVWxug1vx0dc74yiF9Lo6EDoCcoN3filOb3E%2Bc0%2F3iUzgCLIBcO3Vt6VmwCKArCnzATGnLtRyE69Qfa5Aams5toVdakjIcrt7oTz6V%2B73KwiYRX%2B7ZPKvluLWqukZ9fgEBBysq1QF97FzQikuz3z002ezLDgD%2FW%2B9oQWosnAPGPlDtX61rCZcU2dOLaVrYOnOm4OVlxHGMnWHo2Xfi0RKczpnjDL0ZPRBjqkAYx9MAMwa3UzPvbXWx%2FRc5ftjEAahW1tKliukb4ny%2F%2BB2pVsr%2B%2FhpGoOCr67SZK%2Bu6%2BI59kYQkxc00mq300xzfgtAIU1tJXwq90yZVL%2BBqUOF9eDqwaDl23AGPaKHhObeBn2es7WaY2lGZhcr0fwdwvEW9AzzC8Vxpfcas7fjzFbyE9oDjLmfeQUnyAMBwc3QMujWwvTb%2F%2B4G1szXq3ZoKwQMKxF&X-Amz-Signature=ec9979e4edea02ebd7bbad51a44eeb0b584bd70b5bd72984d2687c08f2054487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLJ2WH4J%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfZR63XPb%2F4DdWcCyaD5YePHb8rPSvwmjlUKM7Pe%2B4wAiAYE%2Bgz2dJjY5BDGj5QPwMmlwOHMsNvR5Ba6wWartptGyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5l99erLv8AigEpupKtwDFaTL%2Bf0gVj%2BdBG43oyEhUKG%2FD%2B9O9OG%2BvAKXYvW0esK5NEc%2F4eXQGXFAyGORA336yo8Etgy9OO4kvpFQ04%2B7%2FU6rpVlCWrEJvJ4VELsMTSoI43HixmanZuL%2FZABKNElXcMarOOpE%2Bejy5GRRfvXcKDX4DZKMQ9k4ZXpXKJHgrzq5jN8DRzEeRAhHXXXRArZA42UVDY08mLL28g%2F%2BfmXxyIR9KT5r8p9FlXLsTRS5nv%2Fpy3GXACwkUfOYMUVET0idGhiwtn3fhS%2F2qz%2FB5C%2B2fcPVuhX6jujw73gRMgb%2Ba95THDGssnuHTagSr%2BKqx0TklLJ3naCtjMsgFPKHouZfK%2BslvxdF1lJstH9QJUT%2BxWiRJ2QCDJ2OVSePsHLAQneqR%2FNtyDgFa7UsCIgsFRNTsBJaZR5GfVVs7KI%2B0pfCxymzyfoJfb5sq9axtQ9lNdQyIs2iPxhFQE8QazmDRg8ARxShtwrxf4yRsV6MWKFCiI3fHbdeUDSMpEUNAZkYZ6JYGmUCLtBl5lBcJl3BAKqoX9evA19nm9rlHBKpn%2FLdM01ML3DQ7keyY0kCCf11pMkcHjGOKZ8XQ6ZtlSMURfchdk4u3ixneOTju0ZlYeoFU7hWvMCEV%2BCtDdHwmqUwiNKT0QY6pgG62ISlK6QeSifjORB9tRdYoOBolTZlbo7BBjjRNoKLHLiN9tRtMkMoyZjRB6xssmFF26WkF%2FFwIGvrhMxhlVD1UiFrb%2FNSeWa%2FPxs%2FEJ8EtkwH%2B37S4w4uQapUfXQsuhabyWS%2BLVpLC9xx4ZQ4KZLKV%2BFh4b8KK8vUjPo37Etx8LV1T4M0v4KqvnopZ8lOVmxI%2FLsZ506Ifj4YbActi0wI8OQ590yc&X-Amz-Signature=a3abe92f2adf7479db559cbf326d7eae6efdbdc76d3af68ca94c9aa280f3a26d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLJ2WH4J%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfZR63XPb%2F4DdWcCyaD5YePHb8rPSvwmjlUKM7Pe%2B4wAiAYE%2Bgz2dJjY5BDGj5QPwMmlwOHMsNvR5Ba6wWartptGyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5l99erLv8AigEpupKtwDFaTL%2Bf0gVj%2BdBG43oyEhUKG%2FD%2B9O9OG%2BvAKXYvW0esK5NEc%2F4eXQGXFAyGORA336yo8Etgy9OO4kvpFQ04%2B7%2FU6rpVlCWrEJvJ4VELsMTSoI43HixmanZuL%2FZABKNElXcMarOOpE%2Bejy5GRRfvXcKDX4DZKMQ9k4ZXpXKJHgrzq5jN8DRzEeRAhHXXXRArZA42UVDY08mLL28g%2F%2BfmXxyIR9KT5r8p9FlXLsTRS5nv%2Fpy3GXACwkUfOYMUVET0idGhiwtn3fhS%2F2qz%2FB5C%2B2fcPVuhX6jujw73gRMgb%2Ba95THDGssnuHTagSr%2BKqx0TklLJ3naCtjMsgFPKHouZfK%2BslvxdF1lJstH9QJUT%2BxWiRJ2QCDJ2OVSePsHLAQneqR%2FNtyDgFa7UsCIgsFRNTsBJaZR5GfVVs7KI%2B0pfCxymzyfoJfb5sq9axtQ9lNdQyIs2iPxhFQE8QazmDRg8ARxShtwrxf4yRsV6MWKFCiI3fHbdeUDSMpEUNAZkYZ6JYGmUCLtBl5lBcJl3BAKqoX9evA19nm9rlHBKpn%2FLdM01ML3DQ7keyY0kCCf11pMkcHjGOKZ8XQ6ZtlSMURfchdk4u3ixneOTju0ZlYeoFU7hWvMCEV%2BCtDdHwmqUwiNKT0QY6pgG62ISlK6QeSifjORB9tRdYoOBolTZlbo7BBjjRNoKLHLiN9tRtMkMoyZjRB6xssmFF26WkF%2FFwIGvrhMxhlVD1UiFrb%2FNSeWa%2FPxs%2FEJ8EtkwH%2B37S4w4uQapUfXQsuhabyWS%2BLVpLC9xx4ZQ4KZLKV%2BFh4b8KK8vUjPo37Etx8LV1T4M0v4KqvnopZ8lOVmxI%2FLsZ506Ifj4YbActi0wI8OQ590yc&X-Amz-Signature=5ca4db963eb5475129fb67dcb9448a35950afe3c0dfeff8b947cc762b4077916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLJ2WH4J%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfZR63XPb%2F4DdWcCyaD5YePHb8rPSvwmjlUKM7Pe%2B4wAiAYE%2Bgz2dJjY5BDGj5QPwMmlwOHMsNvR5Ba6wWartptGyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5l99erLv8AigEpupKtwDFaTL%2Bf0gVj%2BdBG43oyEhUKG%2FD%2B9O9OG%2BvAKXYvW0esK5NEc%2F4eXQGXFAyGORA336yo8Etgy9OO4kvpFQ04%2B7%2FU6rpVlCWrEJvJ4VELsMTSoI43HixmanZuL%2FZABKNElXcMarOOpE%2Bejy5GRRfvXcKDX4DZKMQ9k4ZXpXKJHgrzq5jN8DRzEeRAhHXXXRArZA42UVDY08mLL28g%2F%2BfmXxyIR9KT5r8p9FlXLsTRS5nv%2Fpy3GXACwkUfOYMUVET0idGhiwtn3fhS%2F2qz%2FB5C%2B2fcPVuhX6jujw73gRMgb%2Ba95THDGssnuHTagSr%2BKqx0TklLJ3naCtjMsgFPKHouZfK%2BslvxdF1lJstH9QJUT%2BxWiRJ2QCDJ2OVSePsHLAQneqR%2FNtyDgFa7UsCIgsFRNTsBJaZR5GfVVs7KI%2B0pfCxymzyfoJfb5sq9axtQ9lNdQyIs2iPxhFQE8QazmDRg8ARxShtwrxf4yRsV6MWKFCiI3fHbdeUDSMpEUNAZkYZ6JYGmUCLtBl5lBcJl3BAKqoX9evA19nm9rlHBKpn%2FLdM01ML3DQ7keyY0kCCf11pMkcHjGOKZ8XQ6ZtlSMURfchdk4u3ixneOTju0ZlYeoFU7hWvMCEV%2BCtDdHwmqUwiNKT0QY6pgG62ISlK6QeSifjORB9tRdYoOBolTZlbo7BBjjRNoKLHLiN9tRtMkMoyZjRB6xssmFF26WkF%2FFwIGvrhMxhlVD1UiFrb%2FNSeWa%2FPxs%2FEJ8EtkwH%2B37S4w4uQapUfXQsuhabyWS%2BLVpLC9xx4ZQ4KZLKV%2BFh4b8KK8vUjPo37Etx8LV1T4M0v4KqvnopZ8lOVmxI%2FLsZ506Ifj4YbActi0wI8OQ590yc&X-Amz-Signature=568dcb05f246bdc35da33f201621286ad4c7b561609685d34eee0bbd7d74b905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLJ2WH4J%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfZR63XPb%2F4DdWcCyaD5YePHb8rPSvwmjlUKM7Pe%2B4wAiAYE%2Bgz2dJjY5BDGj5QPwMmlwOHMsNvR5Ba6wWartptGyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5l99erLv8AigEpupKtwDFaTL%2Bf0gVj%2BdBG43oyEhUKG%2FD%2B9O9OG%2BvAKXYvW0esK5NEc%2F4eXQGXFAyGORA336yo8Etgy9OO4kvpFQ04%2B7%2FU6rpVlCWrEJvJ4VELsMTSoI43HixmanZuL%2FZABKNElXcMarOOpE%2Bejy5GRRfvXcKDX4DZKMQ9k4ZXpXKJHgrzq5jN8DRzEeRAhHXXXRArZA42UVDY08mLL28g%2F%2BfmXxyIR9KT5r8p9FlXLsTRS5nv%2Fpy3GXACwkUfOYMUVET0idGhiwtn3fhS%2F2qz%2FB5C%2B2fcPVuhX6jujw73gRMgb%2Ba95THDGssnuHTagSr%2BKqx0TklLJ3naCtjMsgFPKHouZfK%2BslvxdF1lJstH9QJUT%2BxWiRJ2QCDJ2OVSePsHLAQneqR%2FNtyDgFa7UsCIgsFRNTsBJaZR5GfVVs7KI%2B0pfCxymzyfoJfb5sq9axtQ9lNdQyIs2iPxhFQE8QazmDRg8ARxShtwrxf4yRsV6MWKFCiI3fHbdeUDSMpEUNAZkYZ6JYGmUCLtBl5lBcJl3BAKqoX9evA19nm9rlHBKpn%2FLdM01ML3DQ7keyY0kCCf11pMkcHjGOKZ8XQ6ZtlSMURfchdk4u3ixneOTju0ZlYeoFU7hWvMCEV%2BCtDdHwmqUwiNKT0QY6pgG62ISlK6QeSifjORB9tRdYoOBolTZlbo7BBjjRNoKLHLiN9tRtMkMoyZjRB6xssmFF26WkF%2FFwIGvrhMxhlVD1UiFrb%2FNSeWa%2FPxs%2FEJ8EtkwH%2B37S4w4uQapUfXQsuhabyWS%2BLVpLC9xx4ZQ4KZLKV%2BFh4b8KK8vUjPo37Etx8LV1T4M0v4KqvnopZ8lOVmxI%2FLsZ506Ifj4YbActi0wI8OQ590yc&X-Amz-Signature=c2c7ae72ee9273725ec896a6170f8fd9dbea2604297676c139ed14939e35f3ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLJ2WH4J%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfZR63XPb%2F4DdWcCyaD5YePHb8rPSvwmjlUKM7Pe%2B4wAiAYE%2Bgz2dJjY5BDGj5QPwMmlwOHMsNvR5Ba6wWartptGyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5l99erLv8AigEpupKtwDFaTL%2Bf0gVj%2BdBG43oyEhUKG%2FD%2B9O9OG%2BvAKXYvW0esK5NEc%2F4eXQGXFAyGORA336yo8Etgy9OO4kvpFQ04%2B7%2FU6rpVlCWrEJvJ4VELsMTSoI43HixmanZuL%2FZABKNElXcMarOOpE%2Bejy5GRRfvXcKDX4DZKMQ9k4ZXpXKJHgrzq5jN8DRzEeRAhHXXXRArZA42UVDY08mLL28g%2F%2BfmXxyIR9KT5r8p9FlXLsTRS5nv%2Fpy3GXACwkUfOYMUVET0idGhiwtn3fhS%2F2qz%2FB5C%2B2fcPVuhX6jujw73gRMgb%2Ba95THDGssnuHTagSr%2BKqx0TklLJ3naCtjMsgFPKHouZfK%2BslvxdF1lJstH9QJUT%2BxWiRJ2QCDJ2OVSePsHLAQneqR%2FNtyDgFa7UsCIgsFRNTsBJaZR5GfVVs7KI%2B0pfCxymzyfoJfb5sq9axtQ9lNdQyIs2iPxhFQE8QazmDRg8ARxShtwrxf4yRsV6MWKFCiI3fHbdeUDSMpEUNAZkYZ6JYGmUCLtBl5lBcJl3BAKqoX9evA19nm9rlHBKpn%2FLdM01ML3DQ7keyY0kCCf11pMkcHjGOKZ8XQ6ZtlSMURfchdk4u3ixneOTju0ZlYeoFU7hWvMCEV%2BCtDdHwmqUwiNKT0QY6pgG62ISlK6QeSifjORB9tRdYoOBolTZlbo7BBjjRNoKLHLiN9tRtMkMoyZjRB6xssmFF26WkF%2FFwIGvrhMxhlVD1UiFrb%2FNSeWa%2FPxs%2FEJ8EtkwH%2B37S4w4uQapUfXQsuhabyWS%2BLVpLC9xx4ZQ4KZLKV%2BFh4b8KK8vUjPo37Etx8LV1T4M0v4KqvnopZ8lOVmxI%2FLsZ506Ifj4YbActi0wI8OQ590yc&X-Amz-Signature=19872f7eba666330e37a7ee0d9951325063e13ed6cfea5dd756175e4bb97bf96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLJ2WH4J%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfZR63XPb%2F4DdWcCyaD5YePHb8rPSvwmjlUKM7Pe%2B4wAiAYE%2Bgz2dJjY5BDGj5QPwMmlwOHMsNvR5Ba6wWartptGyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5l99erLv8AigEpupKtwDFaTL%2Bf0gVj%2BdBG43oyEhUKG%2FD%2B9O9OG%2BvAKXYvW0esK5NEc%2F4eXQGXFAyGORA336yo8Etgy9OO4kvpFQ04%2B7%2FU6rpVlCWrEJvJ4VELsMTSoI43HixmanZuL%2FZABKNElXcMarOOpE%2Bejy5GRRfvXcKDX4DZKMQ9k4ZXpXKJHgrzq5jN8DRzEeRAhHXXXRArZA42UVDY08mLL28g%2F%2BfmXxyIR9KT5r8p9FlXLsTRS5nv%2Fpy3GXACwkUfOYMUVET0idGhiwtn3fhS%2F2qz%2FB5C%2B2fcPVuhX6jujw73gRMgb%2Ba95THDGssnuHTagSr%2BKqx0TklLJ3naCtjMsgFPKHouZfK%2BslvxdF1lJstH9QJUT%2BxWiRJ2QCDJ2OVSePsHLAQneqR%2FNtyDgFa7UsCIgsFRNTsBJaZR5GfVVs7KI%2B0pfCxymzyfoJfb5sq9axtQ9lNdQyIs2iPxhFQE8QazmDRg8ARxShtwrxf4yRsV6MWKFCiI3fHbdeUDSMpEUNAZkYZ6JYGmUCLtBl5lBcJl3BAKqoX9evA19nm9rlHBKpn%2FLdM01ML3DQ7keyY0kCCf11pMkcHjGOKZ8XQ6ZtlSMURfchdk4u3ixneOTju0ZlYeoFU7hWvMCEV%2BCtDdHwmqUwiNKT0QY6pgG62ISlK6QeSifjORB9tRdYoOBolTZlbo7BBjjRNoKLHLiN9tRtMkMoyZjRB6xssmFF26WkF%2FFwIGvrhMxhlVD1UiFrb%2FNSeWa%2FPxs%2FEJ8EtkwH%2B37S4w4uQapUfXQsuhabyWS%2BLVpLC9xx4ZQ4KZLKV%2BFh4b8KK8vUjPo37Etx8LV1T4M0v4KqvnopZ8lOVmxI%2FLsZ506Ifj4YbActi0wI8OQ590yc&X-Amz-Signature=e9fd79603694e7b8df97919698de31274eb0202186e12833c14618052dd84c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


