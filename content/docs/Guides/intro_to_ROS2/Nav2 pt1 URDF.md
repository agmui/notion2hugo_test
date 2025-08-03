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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SZKJN2N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHBOFYvSkx0KRJqVjqg4l9FlitUiOC0m8M%2BohCOdNijAIhAL%2FMAm713f9O57UKw5tqo%2F01M7TnxBVkk8iUas9LY2WNKv8DCCoQABoMNjM3NDIzMTgzODA1Igzrtm4WWheM2UqXAIUq3APQXhJpMRpyumkv55eHZvBJCi7%2BWmtvWNmSIHXW5sBIo8MdwMDfQCwVfNR9mzEAmvBrCb75etfWLAbm22Pul1uhK7BGcYwOey3Y%2F8jmpYS%2BHMfN3IEkSKfvFq48U0eXxL9b61LcCvJjfbgmYi%2FSwZwzKn3BjxfITKzS17vGiL0VlYU%2B2peZiP97RhQ4BL8gvcbUywBTZGq8RArWy6JwDg6eXxUIsx%2FnOTgj9MpEABNRxWslmCXRmhTS6goY%2FkR0YIVn0TBaI9aNwvKwDDLDirmqTHX2eea0YbJ6silMV46B%2B731KwBDjnQtu3AVieRWx8Mk2Oxt%2Fi%2BE%2FRwvmLfGUvpY8Omb9I7vVo4puiWuSG2NIV6HjoSelTvnRxDeOHG0Pa5lz%2FcTi4vQGzIvzDhfvXgxsczmhMd27BDCFb9c9AohK6u71RtYFoyUcVvDmLv%2FpoIIju9cHpDG1iWsCEQRsSJ1r70Q3qGNLKpT6of%2B3BCgnm6Cf%2BpkxWWqJcsQWnaYlMatRrTI5DbAL3KEN2mECX4DouybgSrjoGOzYZt8%2F2N8pO4YKA6zw0iYcfEKnUym3QRK5kztGmrO2UO2%2F58OPVV90yySQxGOD8jo63K0JfGga6YNUVixzakSBVxxbDCHvbzEBjqkAW8CgX44bsGrrx%2Bxs4Rlqu3nOoBnYXpKtUWr1WRdvNFd3xE8zcENIHv%2B9mYlKYyDnvt2jRBl5IGLRg%2F8lWsAGAZSWiQI7tMXwZWTe%2Fvj7rSgzxl%2FnU8rNOc3eqJINj68tKqdvNWABW8PSGYixOgas%2BxYEC1zbLjKD4gOUrpvDZE1OK4p786lHF%2FuqOifZ8ealham05RG%2BqQBxkO8PRfKKTUkwgVN&X-Amz-Signature=705cfae6c641f8bc2a5b00044ceeefc994b3091e161560ff50ad381633cad8ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SZKJN2N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHBOFYvSkx0KRJqVjqg4l9FlitUiOC0m8M%2BohCOdNijAIhAL%2FMAm713f9O57UKw5tqo%2F01M7TnxBVkk8iUas9LY2WNKv8DCCoQABoMNjM3NDIzMTgzODA1Igzrtm4WWheM2UqXAIUq3APQXhJpMRpyumkv55eHZvBJCi7%2BWmtvWNmSIHXW5sBIo8MdwMDfQCwVfNR9mzEAmvBrCb75etfWLAbm22Pul1uhK7BGcYwOey3Y%2F8jmpYS%2BHMfN3IEkSKfvFq48U0eXxL9b61LcCvJjfbgmYi%2FSwZwzKn3BjxfITKzS17vGiL0VlYU%2B2peZiP97RhQ4BL8gvcbUywBTZGq8RArWy6JwDg6eXxUIsx%2FnOTgj9MpEABNRxWslmCXRmhTS6goY%2FkR0YIVn0TBaI9aNwvKwDDLDirmqTHX2eea0YbJ6silMV46B%2B731KwBDjnQtu3AVieRWx8Mk2Oxt%2Fi%2BE%2FRwvmLfGUvpY8Omb9I7vVo4puiWuSG2NIV6HjoSelTvnRxDeOHG0Pa5lz%2FcTi4vQGzIvzDhfvXgxsczmhMd27BDCFb9c9AohK6u71RtYFoyUcVvDmLv%2FpoIIju9cHpDG1iWsCEQRsSJ1r70Q3qGNLKpT6of%2B3BCgnm6Cf%2BpkxWWqJcsQWnaYlMatRrTI5DbAL3KEN2mECX4DouybgSrjoGOzYZt8%2F2N8pO4YKA6zw0iYcfEKnUym3QRK5kztGmrO2UO2%2F58OPVV90yySQxGOD8jo63K0JfGga6YNUVixzakSBVxxbDCHvbzEBjqkAW8CgX44bsGrrx%2Bxs4Rlqu3nOoBnYXpKtUWr1WRdvNFd3xE8zcENIHv%2B9mYlKYyDnvt2jRBl5IGLRg%2F8lWsAGAZSWiQI7tMXwZWTe%2Fvj7rSgzxl%2FnU8rNOc3eqJINj68tKqdvNWABW8PSGYixOgas%2BxYEC1zbLjKD4gOUrpvDZE1OK4p786lHF%2FuqOifZ8ealham05RG%2BqQBxkO8PRfKKTUkwgVN&X-Amz-Signature=0600f7bd1378da5411d187ae747eacd1c76a4b88f67fcbd6a0a64d903fe6121c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SZKJN2N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHBOFYvSkx0KRJqVjqg4l9FlitUiOC0m8M%2BohCOdNijAIhAL%2FMAm713f9O57UKw5tqo%2F01M7TnxBVkk8iUas9LY2WNKv8DCCoQABoMNjM3NDIzMTgzODA1Igzrtm4WWheM2UqXAIUq3APQXhJpMRpyumkv55eHZvBJCi7%2BWmtvWNmSIHXW5sBIo8MdwMDfQCwVfNR9mzEAmvBrCb75etfWLAbm22Pul1uhK7BGcYwOey3Y%2F8jmpYS%2BHMfN3IEkSKfvFq48U0eXxL9b61LcCvJjfbgmYi%2FSwZwzKn3BjxfITKzS17vGiL0VlYU%2B2peZiP97RhQ4BL8gvcbUywBTZGq8RArWy6JwDg6eXxUIsx%2FnOTgj9MpEABNRxWslmCXRmhTS6goY%2FkR0YIVn0TBaI9aNwvKwDDLDirmqTHX2eea0YbJ6silMV46B%2B731KwBDjnQtu3AVieRWx8Mk2Oxt%2Fi%2BE%2FRwvmLfGUvpY8Omb9I7vVo4puiWuSG2NIV6HjoSelTvnRxDeOHG0Pa5lz%2FcTi4vQGzIvzDhfvXgxsczmhMd27BDCFb9c9AohK6u71RtYFoyUcVvDmLv%2FpoIIju9cHpDG1iWsCEQRsSJ1r70Q3qGNLKpT6of%2B3BCgnm6Cf%2BpkxWWqJcsQWnaYlMatRrTI5DbAL3KEN2mECX4DouybgSrjoGOzYZt8%2F2N8pO4YKA6zw0iYcfEKnUym3QRK5kztGmrO2UO2%2F58OPVV90yySQxGOD8jo63K0JfGga6YNUVixzakSBVxxbDCHvbzEBjqkAW8CgX44bsGrrx%2Bxs4Rlqu3nOoBnYXpKtUWr1WRdvNFd3xE8zcENIHv%2B9mYlKYyDnvt2jRBl5IGLRg%2F8lWsAGAZSWiQI7tMXwZWTe%2Fvj7rSgzxl%2FnU8rNOc3eqJINj68tKqdvNWABW8PSGYixOgas%2BxYEC1zbLjKD4gOUrpvDZE1OK4p786lHF%2FuqOifZ8ealham05RG%2BqQBxkO8PRfKKTUkwgVN&X-Amz-Signature=29d8eb32176ba0f51c8e64ef2b370ed395bbfb87fafce3a579e415ba2c84c6f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SZKJN2N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHBOFYvSkx0KRJqVjqg4l9FlitUiOC0m8M%2BohCOdNijAIhAL%2FMAm713f9O57UKw5tqo%2F01M7TnxBVkk8iUas9LY2WNKv8DCCoQABoMNjM3NDIzMTgzODA1Igzrtm4WWheM2UqXAIUq3APQXhJpMRpyumkv55eHZvBJCi7%2BWmtvWNmSIHXW5sBIo8MdwMDfQCwVfNR9mzEAmvBrCb75etfWLAbm22Pul1uhK7BGcYwOey3Y%2F8jmpYS%2BHMfN3IEkSKfvFq48U0eXxL9b61LcCvJjfbgmYi%2FSwZwzKn3BjxfITKzS17vGiL0VlYU%2B2peZiP97RhQ4BL8gvcbUywBTZGq8RArWy6JwDg6eXxUIsx%2FnOTgj9MpEABNRxWslmCXRmhTS6goY%2FkR0YIVn0TBaI9aNwvKwDDLDirmqTHX2eea0YbJ6silMV46B%2B731KwBDjnQtu3AVieRWx8Mk2Oxt%2Fi%2BE%2FRwvmLfGUvpY8Omb9I7vVo4puiWuSG2NIV6HjoSelTvnRxDeOHG0Pa5lz%2FcTi4vQGzIvzDhfvXgxsczmhMd27BDCFb9c9AohK6u71RtYFoyUcVvDmLv%2FpoIIju9cHpDG1iWsCEQRsSJ1r70Q3qGNLKpT6of%2B3BCgnm6Cf%2BpkxWWqJcsQWnaYlMatRrTI5DbAL3KEN2mECX4DouybgSrjoGOzYZt8%2F2N8pO4YKA6zw0iYcfEKnUym3QRK5kztGmrO2UO2%2F58OPVV90yySQxGOD8jo63K0JfGga6YNUVixzakSBVxxbDCHvbzEBjqkAW8CgX44bsGrrx%2Bxs4Rlqu3nOoBnYXpKtUWr1WRdvNFd3xE8zcENIHv%2B9mYlKYyDnvt2jRBl5IGLRg%2F8lWsAGAZSWiQI7tMXwZWTe%2Fvj7rSgzxl%2FnU8rNOc3eqJINj68tKqdvNWABW8PSGYixOgas%2BxYEC1zbLjKD4gOUrpvDZE1OK4p786lHF%2FuqOifZ8ealham05RG%2BqQBxkO8PRfKKTUkwgVN&X-Amz-Signature=49d830ba0ca26f4e42136c51d2de430da9ef4a88af2e2b29b2dc519bc4828a0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SZKJN2N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHBOFYvSkx0KRJqVjqg4l9FlitUiOC0m8M%2BohCOdNijAIhAL%2FMAm713f9O57UKw5tqo%2F01M7TnxBVkk8iUas9LY2WNKv8DCCoQABoMNjM3NDIzMTgzODA1Igzrtm4WWheM2UqXAIUq3APQXhJpMRpyumkv55eHZvBJCi7%2BWmtvWNmSIHXW5sBIo8MdwMDfQCwVfNR9mzEAmvBrCb75etfWLAbm22Pul1uhK7BGcYwOey3Y%2F8jmpYS%2BHMfN3IEkSKfvFq48U0eXxL9b61LcCvJjfbgmYi%2FSwZwzKn3BjxfITKzS17vGiL0VlYU%2B2peZiP97RhQ4BL8gvcbUywBTZGq8RArWy6JwDg6eXxUIsx%2FnOTgj9MpEABNRxWslmCXRmhTS6goY%2FkR0YIVn0TBaI9aNwvKwDDLDirmqTHX2eea0YbJ6silMV46B%2B731KwBDjnQtu3AVieRWx8Mk2Oxt%2Fi%2BE%2FRwvmLfGUvpY8Omb9I7vVo4puiWuSG2NIV6HjoSelTvnRxDeOHG0Pa5lz%2FcTi4vQGzIvzDhfvXgxsczmhMd27BDCFb9c9AohK6u71RtYFoyUcVvDmLv%2FpoIIju9cHpDG1iWsCEQRsSJ1r70Q3qGNLKpT6of%2B3BCgnm6Cf%2BpkxWWqJcsQWnaYlMatRrTI5DbAL3KEN2mECX4DouybgSrjoGOzYZt8%2F2N8pO4YKA6zw0iYcfEKnUym3QRK5kztGmrO2UO2%2F58OPVV90yySQxGOD8jo63K0JfGga6YNUVixzakSBVxxbDCHvbzEBjqkAW8CgX44bsGrrx%2Bxs4Rlqu3nOoBnYXpKtUWr1WRdvNFd3xE8zcENIHv%2B9mYlKYyDnvt2jRBl5IGLRg%2F8lWsAGAZSWiQI7tMXwZWTe%2Fvj7rSgzxl%2FnU8rNOc3eqJINj68tKqdvNWABW8PSGYixOgas%2BxYEC1zbLjKD4gOUrpvDZE1OK4p786lHF%2FuqOifZ8ealham05RG%2BqQBxkO8PRfKKTUkwgVN&X-Amz-Signature=00141362b2db6be90c480a0fac334e428b723f058746beeeb6d9e3c4752f0d4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SZKJN2N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHBOFYvSkx0KRJqVjqg4l9FlitUiOC0m8M%2BohCOdNijAIhAL%2FMAm713f9O57UKw5tqo%2F01M7TnxBVkk8iUas9LY2WNKv8DCCoQABoMNjM3NDIzMTgzODA1Igzrtm4WWheM2UqXAIUq3APQXhJpMRpyumkv55eHZvBJCi7%2BWmtvWNmSIHXW5sBIo8MdwMDfQCwVfNR9mzEAmvBrCb75etfWLAbm22Pul1uhK7BGcYwOey3Y%2F8jmpYS%2BHMfN3IEkSKfvFq48U0eXxL9b61LcCvJjfbgmYi%2FSwZwzKn3BjxfITKzS17vGiL0VlYU%2B2peZiP97RhQ4BL8gvcbUywBTZGq8RArWy6JwDg6eXxUIsx%2FnOTgj9MpEABNRxWslmCXRmhTS6goY%2FkR0YIVn0TBaI9aNwvKwDDLDirmqTHX2eea0YbJ6silMV46B%2B731KwBDjnQtu3AVieRWx8Mk2Oxt%2Fi%2BE%2FRwvmLfGUvpY8Omb9I7vVo4puiWuSG2NIV6HjoSelTvnRxDeOHG0Pa5lz%2FcTi4vQGzIvzDhfvXgxsczmhMd27BDCFb9c9AohK6u71RtYFoyUcVvDmLv%2FpoIIju9cHpDG1iWsCEQRsSJ1r70Q3qGNLKpT6of%2B3BCgnm6Cf%2BpkxWWqJcsQWnaYlMatRrTI5DbAL3KEN2mECX4DouybgSrjoGOzYZt8%2F2N8pO4YKA6zw0iYcfEKnUym3QRK5kztGmrO2UO2%2F58OPVV90yySQxGOD8jo63K0JfGga6YNUVixzakSBVxxbDCHvbzEBjqkAW8CgX44bsGrrx%2Bxs4Rlqu3nOoBnYXpKtUWr1WRdvNFd3xE8zcENIHv%2B9mYlKYyDnvt2jRBl5IGLRg%2F8lWsAGAZSWiQI7tMXwZWTe%2Fvj7rSgzxl%2FnU8rNOc3eqJINj68tKqdvNWABW8PSGYixOgas%2BxYEC1zbLjKD4gOUrpvDZE1OK4p786lHF%2FuqOifZ8ealham05RG%2BqQBxkO8PRfKKTUkwgVN&X-Amz-Signature=cd6a085c859d498047e4f65ac3514422d778215045392a2aa6952bcf26f8e410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SZKJN2N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHBOFYvSkx0KRJqVjqg4l9FlitUiOC0m8M%2BohCOdNijAIhAL%2FMAm713f9O57UKw5tqo%2F01M7TnxBVkk8iUas9LY2WNKv8DCCoQABoMNjM3NDIzMTgzODA1Igzrtm4WWheM2UqXAIUq3APQXhJpMRpyumkv55eHZvBJCi7%2BWmtvWNmSIHXW5sBIo8MdwMDfQCwVfNR9mzEAmvBrCb75etfWLAbm22Pul1uhK7BGcYwOey3Y%2F8jmpYS%2BHMfN3IEkSKfvFq48U0eXxL9b61LcCvJjfbgmYi%2FSwZwzKn3BjxfITKzS17vGiL0VlYU%2B2peZiP97RhQ4BL8gvcbUywBTZGq8RArWy6JwDg6eXxUIsx%2FnOTgj9MpEABNRxWslmCXRmhTS6goY%2FkR0YIVn0TBaI9aNwvKwDDLDirmqTHX2eea0YbJ6silMV46B%2B731KwBDjnQtu3AVieRWx8Mk2Oxt%2Fi%2BE%2FRwvmLfGUvpY8Omb9I7vVo4puiWuSG2NIV6HjoSelTvnRxDeOHG0Pa5lz%2FcTi4vQGzIvzDhfvXgxsczmhMd27BDCFb9c9AohK6u71RtYFoyUcVvDmLv%2FpoIIju9cHpDG1iWsCEQRsSJ1r70Q3qGNLKpT6of%2B3BCgnm6Cf%2BpkxWWqJcsQWnaYlMatRrTI5DbAL3KEN2mECX4DouybgSrjoGOzYZt8%2F2N8pO4YKA6zw0iYcfEKnUym3QRK5kztGmrO2UO2%2F58OPVV90yySQxGOD8jo63K0JfGga6YNUVixzakSBVxxbDCHvbzEBjqkAW8CgX44bsGrrx%2Bxs4Rlqu3nOoBnYXpKtUWr1WRdvNFd3xE8zcENIHv%2B9mYlKYyDnvt2jRBl5IGLRg%2F8lWsAGAZSWiQI7tMXwZWTe%2Fvj7rSgzxl%2FnU8rNOc3eqJINj68tKqdvNWABW8PSGYixOgas%2BxYEC1zbLjKD4gOUrpvDZE1OK4p786lHF%2FuqOifZ8ealham05RG%2BqQBxkO8PRfKKTUkwgVN&X-Amz-Signature=d11e99f9a18470fe138d5ce92b6748f5cc42e5e59e4ff303b966ca0c3d9267ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SZKJN2N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHBOFYvSkx0KRJqVjqg4l9FlitUiOC0m8M%2BohCOdNijAIhAL%2FMAm713f9O57UKw5tqo%2F01M7TnxBVkk8iUas9LY2WNKv8DCCoQABoMNjM3NDIzMTgzODA1Igzrtm4WWheM2UqXAIUq3APQXhJpMRpyumkv55eHZvBJCi7%2BWmtvWNmSIHXW5sBIo8MdwMDfQCwVfNR9mzEAmvBrCb75etfWLAbm22Pul1uhK7BGcYwOey3Y%2F8jmpYS%2BHMfN3IEkSKfvFq48U0eXxL9b61LcCvJjfbgmYi%2FSwZwzKn3BjxfITKzS17vGiL0VlYU%2B2peZiP97RhQ4BL8gvcbUywBTZGq8RArWy6JwDg6eXxUIsx%2FnOTgj9MpEABNRxWslmCXRmhTS6goY%2FkR0YIVn0TBaI9aNwvKwDDLDirmqTHX2eea0YbJ6silMV46B%2B731KwBDjnQtu3AVieRWx8Mk2Oxt%2Fi%2BE%2FRwvmLfGUvpY8Omb9I7vVo4puiWuSG2NIV6HjoSelTvnRxDeOHG0Pa5lz%2FcTi4vQGzIvzDhfvXgxsczmhMd27BDCFb9c9AohK6u71RtYFoyUcVvDmLv%2FpoIIju9cHpDG1iWsCEQRsSJ1r70Q3qGNLKpT6of%2B3BCgnm6Cf%2BpkxWWqJcsQWnaYlMatRrTI5DbAL3KEN2mECX4DouybgSrjoGOzYZt8%2F2N8pO4YKA6zw0iYcfEKnUym3QRK5kztGmrO2UO2%2F58OPVV90yySQxGOD8jo63K0JfGga6YNUVixzakSBVxxbDCHvbzEBjqkAW8CgX44bsGrrx%2Bxs4Rlqu3nOoBnYXpKtUWr1WRdvNFd3xE8zcENIHv%2B9mYlKYyDnvt2jRBl5IGLRg%2F8lWsAGAZSWiQI7tMXwZWTe%2Fvj7rSgzxl%2FnU8rNOc3eqJINj68tKqdvNWABW8PSGYixOgas%2BxYEC1zbLjKD4gOUrpvDZE1OK4p786lHF%2FuqOifZ8ealham05RG%2BqQBxkO8PRfKKTUkwgVN&X-Amz-Signature=e7ef433c3deed909bf2aaf2340cad76507326661761a6015dc5692b1e5162b4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SZKJN2N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHBOFYvSkx0KRJqVjqg4l9FlitUiOC0m8M%2BohCOdNijAIhAL%2FMAm713f9O57UKw5tqo%2F01M7TnxBVkk8iUas9LY2WNKv8DCCoQABoMNjM3NDIzMTgzODA1Igzrtm4WWheM2UqXAIUq3APQXhJpMRpyumkv55eHZvBJCi7%2BWmtvWNmSIHXW5sBIo8MdwMDfQCwVfNR9mzEAmvBrCb75etfWLAbm22Pul1uhK7BGcYwOey3Y%2F8jmpYS%2BHMfN3IEkSKfvFq48U0eXxL9b61LcCvJjfbgmYi%2FSwZwzKn3BjxfITKzS17vGiL0VlYU%2B2peZiP97RhQ4BL8gvcbUywBTZGq8RArWy6JwDg6eXxUIsx%2FnOTgj9MpEABNRxWslmCXRmhTS6goY%2FkR0YIVn0TBaI9aNwvKwDDLDirmqTHX2eea0YbJ6silMV46B%2B731KwBDjnQtu3AVieRWx8Mk2Oxt%2Fi%2BE%2FRwvmLfGUvpY8Omb9I7vVo4puiWuSG2NIV6HjoSelTvnRxDeOHG0Pa5lz%2FcTi4vQGzIvzDhfvXgxsczmhMd27BDCFb9c9AohK6u71RtYFoyUcVvDmLv%2FpoIIju9cHpDG1iWsCEQRsSJ1r70Q3qGNLKpT6of%2B3BCgnm6Cf%2BpkxWWqJcsQWnaYlMatRrTI5DbAL3KEN2mECX4DouybgSrjoGOzYZt8%2F2N8pO4YKA6zw0iYcfEKnUym3QRK5kztGmrO2UO2%2F58OPVV90yySQxGOD8jo63K0JfGga6YNUVixzakSBVxxbDCHvbzEBjqkAW8CgX44bsGrrx%2Bxs4Rlqu3nOoBnYXpKtUWr1WRdvNFd3xE8zcENIHv%2B9mYlKYyDnvt2jRBl5IGLRg%2F8lWsAGAZSWiQI7tMXwZWTe%2Fvj7rSgzxl%2FnU8rNOc3eqJINj68tKqdvNWABW8PSGYixOgas%2BxYEC1zbLjKD4gOUrpvDZE1OK4p786lHF%2FuqOifZ8ealham05RG%2BqQBxkO8PRfKKTUkwgVN&X-Amz-Signature=695a5e3055c6b423da047e30c0d4fa17a45aa83bdd4d05cacf7dfa90c1f140c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SZKJN2N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHBOFYvSkx0KRJqVjqg4l9FlitUiOC0m8M%2BohCOdNijAIhAL%2FMAm713f9O57UKw5tqo%2F01M7TnxBVkk8iUas9LY2WNKv8DCCoQABoMNjM3NDIzMTgzODA1Igzrtm4WWheM2UqXAIUq3APQXhJpMRpyumkv55eHZvBJCi7%2BWmtvWNmSIHXW5sBIo8MdwMDfQCwVfNR9mzEAmvBrCb75etfWLAbm22Pul1uhK7BGcYwOey3Y%2F8jmpYS%2BHMfN3IEkSKfvFq48U0eXxL9b61LcCvJjfbgmYi%2FSwZwzKn3BjxfITKzS17vGiL0VlYU%2B2peZiP97RhQ4BL8gvcbUywBTZGq8RArWy6JwDg6eXxUIsx%2FnOTgj9MpEABNRxWslmCXRmhTS6goY%2FkR0YIVn0TBaI9aNwvKwDDLDirmqTHX2eea0YbJ6silMV46B%2B731KwBDjnQtu3AVieRWx8Mk2Oxt%2Fi%2BE%2FRwvmLfGUvpY8Omb9I7vVo4puiWuSG2NIV6HjoSelTvnRxDeOHG0Pa5lz%2FcTi4vQGzIvzDhfvXgxsczmhMd27BDCFb9c9AohK6u71RtYFoyUcVvDmLv%2FpoIIju9cHpDG1iWsCEQRsSJ1r70Q3qGNLKpT6of%2B3BCgnm6Cf%2BpkxWWqJcsQWnaYlMatRrTI5DbAL3KEN2mECX4DouybgSrjoGOzYZt8%2F2N8pO4YKA6zw0iYcfEKnUym3QRK5kztGmrO2UO2%2F58OPVV90yySQxGOD8jo63K0JfGga6YNUVixzakSBVxxbDCHvbzEBjqkAW8CgX44bsGrrx%2Bxs4Rlqu3nOoBnYXpKtUWr1WRdvNFd3xE8zcENIHv%2B9mYlKYyDnvt2jRBl5IGLRg%2F8lWsAGAZSWiQI7tMXwZWTe%2Fvj7rSgzxl%2FnU8rNOc3eqJINj68tKqdvNWABW8PSGYixOgas%2BxYEC1zbLjKD4gOUrpvDZE1OK4p786lHF%2FuqOifZ8ealham05RG%2BqQBxkO8PRfKKTUkwgVN&X-Amz-Signature=6446477b61054643bd5ef357d49318fc93fad12b914c9b28e74ec3792999213e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HTNBIMD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEFYCCLyxCFiHXjiW9o6ZDWg2UnP0Cm3CZ6j2%2BPos9UAiEA2X3pZNFQh1Go1MtDzMBgAuko7abQAnlPwGhJzxCCfTUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBZdjgukhNQVUtRi2CrcA%2Bmgkpenseh8673yn1eRzO9SxP9ncfN7BxUQGidoXultLbt5wzjzYlzpluGYq7h8G%2BXED10Ou3gH3hpl8XS3ToqRSf8ONvShHoDLDEpKXPwYpJoJ%2Fd1T25%2BXCICOL5iDAELOM3qE3vk7x5Q%2BN2V7R2hTfkwZAvMLvNN4it00DwJ8lCuIrLS1Wwmr2vmb0nVYpN7Oh2NPbjRJ2av3fVBvia4cc6HiMIIyU3ssKnYfThy6OGtNG6HYC64wqklkMjbol%2BhneFgb3fdfPLWwH1DuvPIWFfdBnRbs0botGh5G%2Bpq4tgXwotbGacCsUF5NNrgbztFBiUG13WUVcwWjIW6OifYrCn8mWKRnaoos8M4tYj3UvZ5b%2Fva8Y%2FecuvIwbegZQXFiv0Kf%2FTVaJ0lGPPkD5z7hh9nH2LtBgO0kN%2BLPO0icJdDWRmBAFMyDKFlf4wTlVtCx45DA49OY%2FDfMvX1i%2Fjo1DJoiKz43CrP4iTMHoPSMrv8kGIKqpL68MZGQgu4yox5R1q0Px1y1NHU3JrxKh6%2Fl%2BNtYbTIixCTse9M4mE%2FexPVHJ6bP%2Bds%2B1VxjFv6eAybVYsuktli7Tf8J8dYw3LBHvaY4fbviq8icn5PrHwdBVMXeVVgipQLxKZ2JMJjEvMQGOqUB0HnG7jceuHv%2F%2BXXqkirDZmsiSBYH5inL%2BlTvmQj6Ee%2BwLaYDOq1walotu3N8v4cHC%2BNTEHGpBFzXx7RzR77%2Fs1GvA31IMnAAoyBuTl3wJuGBflfOYvTm9qZhgQ1fVY8b7Ju1lwg4yvEXqPtfCwtOsBJkHQ4N68q3XIHHhaiWi%2FZpzpyTc499h7hHrLGqn%2Fa7zZUkt5wWG1j0NysxiQ8gWYxmB1fA&X-Amz-Signature=b2fdb86247060b0840f3820354d96b41cef39982119f92e9d59263024049f794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQRG3NEG%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQTOvP6we5bKCPld8hIox1S9bhn2%2FwPk7hs%2BFpAP5GQAiEAkoqaryk1ly%2F%2F6ypRh5r%2F%2FbmX2QDi1J%2B1IAQACc3%2FEYQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLiIdeWv1tsB0RX6NyrcA4YOQfCb%2FAbDFj2oZRvgvDJH3BXPmmrKjImmvtWVLAa9LQYVcdk4qahBi5CLIOBKF6zlJ1MzzxaQ1CesiXijA0C12IZ45ANiuU6YXQ5ygzF5A8fCNFIat%2FoV9u8K0byvuW0cfYgIyEwDRR9hjnpLOiDqj0Kjc6BF5SU2PXetifRdv2fpBdVxD9jkWD6djrw7a0%2FSevMi7r92elJzBL0O6qDyAnhBsSzaV9gNddnv0IaDbVHG%2FPPNSjboK8cGgGRVmRyOeu7kGTPUiVzPb%2FQ9mlMXaa1n9%2FUCTjoxhKS2RTdjFHGTAfzhb1cKPECb5HLra7%2FCnQH9mFr4ofhMWZb72r0vQvGJhRZmltaFuJxwkGAkHyGDtLb5Bnevmub7PjkQ3%2F5goDMhLRsdImvZMWVSHcBuLJY5MCt8s7zZxyrpmVgKAyQhJPgjRl4gmHp52N3kmLjC%2FBpVrVGiASp3%2F4VdPSHVNnKR%2BQYYhfZtJtVufh1U2GrQXMoRuOlrd%2BssOUAsws7EWMj4Ic%2F5dKBAYpr8gRvqOvKNksXdZ7Lt30zbLtZ9mYLmNR7gQWmpQ5Ryc0FLiPKupY04G%2F0L%2FaP22%2B8%2FLCIkU%2FwVSSBoJJzbChAazYVsBMJGa2cnbUYFa5FiMIfCvMQGOqUBrnR60g%2FAittpu9DFT7Qa0du%2BVgnY3Gu%2FqKsK4Eex0j0pZv5J%2FDXiwP2TWoUbwlz3BVOHn2IUdKMvY4nvs%2BvLEFDIviwvS%2BQVjj%2Bj%2FT9To8LDBokJx5B0m7EoAsT2LeajT%2F5bAynLEfeHKM%2FvSoxVvjSLzMDxFUlgOTQTfqu19lxqFs1MrbV6rnvLUd1C%2B2ivXHWlcYutjE9duHS887YmbwR1Tb7L&X-Amz-Signature=6853812c5b0e31084f6eb7fc54adfaefb71b7979e8983194ff5b9c9ad6b11cf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAVEFE7K%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqyWPZY6KWtNIoTPaDgbPN6%2FSRbqo%2F2RtfQ70bBq%2BL%2BAIhAII0tjS%2FgspiFgsnoMC%2FMDIYjX6x1UavSstyJT74GiQFKv8DCCoQABoMNjM3NDIzMTgzODA1Igwr%2BieLDn5yPCMLShgq3APeRXHnrHn1VpO8y%2BuooeD2%2BuaiIibbXWuHEfivi5FJq3Y7UZQnG0Pa%2BD7txQEHb707FZeHEAGa96LkCPjszo96pZ2Y%2FB3ai8GFYKtLSt3Rj1%2FjjvU4lVqncQadEL%2B9fz8XzZfyqKpRXuR0mZEWuNlWhMrMfaZv1fhuEGUjNFZ21hM1WaEElz2tKc5RdXYzREgbdwcSg1FQuyWnR%2BVAaKHsDDo3MXq6vAcrBoTCO2e6Lbpw0sqgNI2w6948TgLz2XARuoDlDbfeVh054IHPmZW6%2FU0BYGa2GHSHQ0FlRWdT9DetnPelK3sENqABDlSTuAAWy25%2FrSBw8pxjqs2abM5vdwxHxRXNQbtyWKc9yechSizHgBzWZ2DXhyH3BSxG2aVS1YdIeWRUPxNaUVnskTdLL2ebM41Ez0mC85vEcdbU0UcN4z44EjfK5kUoQd9GCMPc6gqvxvQvg96%2F3AQ99YmI0nr0rt0ZcunyrdnGLqEs1YxQwXS6JOSiWhD4qgKcJCpMxp9ZPpV%2B%2FuZOTUCFeTmny%2BAFwWMT0bE5phXJNuGffg3wXOzpzhTLr6%2F5WifPzKKTqVhNwicI5Ddub5Mw5LiGnXYpi1rEXEBX4QvrXIRMwI%2BgB3MfGZk8jYORRDD0vrzEBjqkAc%2FkpzltqH9v%2F4tAiS0M6rDJ4xcWbxsrzh0btArPM%2Fjmd%2FN3U4erWLhIzvzC6dUA30QQ5t7iy3QHjh6nn72dqI%2FJ5s5lmu6GTYrUrqjwRcBem69pz%2FW7WqTm9RZUwpdUv5SSfS42q1UVz8Qf%2F5SAuqAdOMTKPYj2piOmS4TICRlMxhvpIxfpkKDXpO4tfY2uCvL6CuVy3r%2BFBvS03kZ2sSutdQJ%2B&X-Amz-Signature=783df29d1a1a8abf38bcd6c2eaa582a4d1b1bcf0612c2d62a62c307f489bdfa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SZKJN2N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHBOFYvSkx0KRJqVjqg4l9FlitUiOC0m8M%2BohCOdNijAIhAL%2FMAm713f9O57UKw5tqo%2F01M7TnxBVkk8iUas9LY2WNKv8DCCoQABoMNjM3NDIzMTgzODA1Igzrtm4WWheM2UqXAIUq3APQXhJpMRpyumkv55eHZvBJCi7%2BWmtvWNmSIHXW5sBIo8MdwMDfQCwVfNR9mzEAmvBrCb75etfWLAbm22Pul1uhK7BGcYwOey3Y%2F8jmpYS%2BHMfN3IEkSKfvFq48U0eXxL9b61LcCvJjfbgmYi%2FSwZwzKn3BjxfITKzS17vGiL0VlYU%2B2peZiP97RhQ4BL8gvcbUywBTZGq8RArWy6JwDg6eXxUIsx%2FnOTgj9MpEABNRxWslmCXRmhTS6goY%2FkR0YIVn0TBaI9aNwvKwDDLDirmqTHX2eea0YbJ6silMV46B%2B731KwBDjnQtu3AVieRWx8Mk2Oxt%2Fi%2BE%2FRwvmLfGUvpY8Omb9I7vVo4puiWuSG2NIV6HjoSelTvnRxDeOHG0Pa5lz%2FcTi4vQGzIvzDhfvXgxsczmhMd27BDCFb9c9AohK6u71RtYFoyUcVvDmLv%2FpoIIju9cHpDG1iWsCEQRsSJ1r70Q3qGNLKpT6of%2B3BCgnm6Cf%2BpkxWWqJcsQWnaYlMatRrTI5DbAL3KEN2mECX4DouybgSrjoGOzYZt8%2F2N8pO4YKA6zw0iYcfEKnUym3QRK5kztGmrO2UO2%2F58OPVV90yySQxGOD8jo63K0JfGga6YNUVixzakSBVxxbDCHvbzEBjqkAW8CgX44bsGrrx%2Bxs4Rlqu3nOoBnYXpKtUWr1WRdvNFd3xE8zcENIHv%2B9mYlKYyDnvt2jRBl5IGLRg%2F8lWsAGAZSWiQI7tMXwZWTe%2Fvj7rSgzxl%2FnU8rNOc3eqJINj68tKqdvNWABW8PSGYixOgas%2BxYEC1zbLjKD4gOUrpvDZE1OK4p786lHF%2FuqOifZ8ealham05RG%2BqQBxkO8PRfKKTUkwgVN&X-Amz-Signature=ac97aa793235b8047d97133be2e8809d80a1b2f7597a7a0bd7036e78f7dd34e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU4XCPQH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGipx9M2JFQ2zrNR8lK%2BAbnNHA1ELxgzZZPKZ6daMQUoAiAgEmqh%2FqQE98PfRnTFzXvv%2BVYf%2BxGIL2%2BzRfH%2B%2BxkhiSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMU0e0fVjon699lXzWKtwD2LsBN%2FAJMrxx%2FyrIeN7c5d4GHpZlmiCJhYCJvO6L0CTGqCBrY9OHIYAzwCJelSB1pqjkkfcAPgmaFFiwofvNsvXgmDShFu6xxkQOC2SO0LcUut3XSEkk3cP%2BWWkaBB%2BoPn84B17xz6TE%2Bafo32zM3Lggr%2FlITzxqJ4YdWc9vbFCHKCjpo2rtSVcYcLkrpkZiDGRKW7g8wYKtEgzo7TCdI70PBe6YyP5fnYIslZ4sIqE%2F%2FjjWT2q68jmuLBc9xDxx%2B4ovUZpC9MlcqzfruZcSMgcDoadE5oGu5Q6dOHv3TTt%2B1%2FSzhVI2xjp6zF1ZfgeOr8tby0Bc%2F2DFTJddCEJpKUH2%2FiyNHAwPHLNiFnFkk4ID1yP6YkbbuSbRcGIm4oiqnFU2VgqlSP9XvLzOLoe%2BLEZB%2BHk74RGP9oQubiUBjpOasdWgliOLQRWAtbuOP1CQmM3rzCBJA0h3I4sL4F10Yw7j%2BZ6x2vkcL4QkthVkuFqDYCqaV2vK%2F70V8FRHHhKHTCITcL2QPWC%2FVoaarq2U9lJyUCx7YEDUR3Lfx%2FtLMtg9o36JIeY9aHAPHP7xTDi1q60sy82ZnRTcd0q1MFvelDPjGSf4HQMQ%2BKW0VNGbvINvd52SHyzNzTOiIUowgMO8xAY6pgHoJeO5xGZOxet1WRERvA%2FNuJt%2BdD6ixRgwaEci1XjrQNoZdZYZYEUAsBZhiMNCr97Tc9077SXJ6a55g3oFaDPAYBXKisvXf2zOeO%2Bef3qmyck9XU0quLqGexV96%2BDkk1FS0JDxEdn9zqKNbyCnwUqs1%2FJryvlB3cfnqYcF%2FM9ZbENqPyE4G25iUfQjJ2mEPib5hmZAl1Ov9XC7egmmyND%2F7cfDsPkq&X-Amz-Signature=668831d0a8c641663f74734b5ed2d025b17d0810ceafeeeba60c3b77a8d72a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SZKJN2N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHBOFYvSkx0KRJqVjqg4l9FlitUiOC0m8M%2BohCOdNijAIhAL%2FMAm713f9O57UKw5tqo%2F01M7TnxBVkk8iUas9LY2WNKv8DCCoQABoMNjM3NDIzMTgzODA1Igzrtm4WWheM2UqXAIUq3APQXhJpMRpyumkv55eHZvBJCi7%2BWmtvWNmSIHXW5sBIo8MdwMDfQCwVfNR9mzEAmvBrCb75etfWLAbm22Pul1uhK7BGcYwOey3Y%2F8jmpYS%2BHMfN3IEkSKfvFq48U0eXxL9b61LcCvJjfbgmYi%2FSwZwzKn3BjxfITKzS17vGiL0VlYU%2B2peZiP97RhQ4BL8gvcbUywBTZGq8RArWy6JwDg6eXxUIsx%2FnOTgj9MpEABNRxWslmCXRmhTS6goY%2FkR0YIVn0TBaI9aNwvKwDDLDirmqTHX2eea0YbJ6silMV46B%2B731KwBDjnQtu3AVieRWx8Mk2Oxt%2Fi%2BE%2FRwvmLfGUvpY8Omb9I7vVo4puiWuSG2NIV6HjoSelTvnRxDeOHG0Pa5lz%2FcTi4vQGzIvzDhfvXgxsczmhMd27BDCFb9c9AohK6u71RtYFoyUcVvDmLv%2FpoIIju9cHpDG1iWsCEQRsSJ1r70Q3qGNLKpT6of%2B3BCgnm6Cf%2BpkxWWqJcsQWnaYlMatRrTI5DbAL3KEN2mECX4DouybgSrjoGOzYZt8%2F2N8pO4YKA6zw0iYcfEKnUym3QRK5kztGmrO2UO2%2F58OPVV90yySQxGOD8jo63K0JfGga6YNUVixzakSBVxxbDCHvbzEBjqkAW8CgX44bsGrrx%2Bxs4Rlqu3nOoBnYXpKtUWr1WRdvNFd3xE8zcENIHv%2B9mYlKYyDnvt2jRBl5IGLRg%2F8lWsAGAZSWiQI7tMXwZWTe%2Fvj7rSgzxl%2FnU8rNOc3eqJINj68tKqdvNWABW8PSGYixOgas%2BxYEC1zbLjKD4gOUrpvDZE1OK4p786lHF%2FuqOifZ8ealham05RG%2BqQBxkO8PRfKKTUkwgVN&X-Amz-Signature=ab5422cd3359119095db5aefd59b1576a94af499cc516f06d16be727b6cd5682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H3COJDS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV%2Fy8u9Mt9zyj9zA1agoZIP%2FItxBVkPQadPcTH8oXQpQIgS%2BtgnE%2FS5EIMN7uhKT4KrcoGhBQLfnJv5Yi2QP4%2Bl4Iq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEHLMdTly9FCDCxxOyrcA1R2Dq0jFUSvw9lDjslg%2BQOHTR6TyghbpMex3zlSB%2BBpCzFaZe5w%2BRfK4rAj9iOOgbLTaZDOzywVl%2BZzr8aKzbrrP0vGP%2B6q0%2BP9FKI%2F%2B0jQ8quU6M11AoM8DJocOw%2BEo0rBZiA4Rve9Y84CgSsA7FoA%2BDFFg8zGC4eFkDbg6o7BHBcn1WfN2OlvjoYPqVUZ0i09U3htR4uk2LlipQTjauWH4tJcWn0bDfSCbO13FKOlh1EDl7L701UeBO2DZgAYx3vB%2BUAnBYANaFBLwtFjczxnduh49%2BnxB3TakLiw3MEP8iy24doPLmb1DqSn5eYNDIdZVhXyrR%2BuzPA1qN4QxRluKlb1J2T6ntkx6RwFp56wAxpQYKS67FzX%2BrXcNuCQLME5EBV05y%2FGg4c81HwJqmJlbuiZdJEYR2zOg5RcjMs692SnJbCq%2F9ImOsoKAEUBOX1VRsZLSsvePmdX3DD%2B4eO1GPcdNPt9zyxT3pLqDiTZiHnwNerAL6foquZ3n%2B%2FQwSbjj%2FEsatHp6sZrqalme%2BRdWT1%2FeWD4glZCuhLw7D9OCW6KzLQfgHtFBSPGKQFzjKIfV%2Bsv9id3PsY99zAXV4BdDCd07lFn4RGDnVYK3jVLndQkq5H1RIfmG9LRMN%2B%2FvMQGOqUBvWCEu%2BoIhFK8TNV%2BTnmwsQ%2FUI9CtCGkvaATr%2FkyxhK0Jeu1K3mBaylXNMkxoq984F76gry3g4E6YZ94tdyhbSYOXwEzSlfJ3qA8D9pP2HZJj4Tc6l8UGm4btdH6VzWCGrL1QR0GFygq%2Fkay9F9o%2FHymp2u6GvHKSjCXuUYrTfmqDRLDut1ZcV3kHKH6iHLwjomWflUS2WVIhQJJdoekqUX0aoLdH&X-Amz-Signature=0ae8ae2274bee38862102a66ce66292552a293fa71d6023dd2a909c78144c1be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SZKJN2N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHBOFYvSkx0KRJqVjqg4l9FlitUiOC0m8M%2BohCOdNijAIhAL%2FMAm713f9O57UKw5tqo%2F01M7TnxBVkk8iUas9LY2WNKv8DCCoQABoMNjM3NDIzMTgzODA1Igzrtm4WWheM2UqXAIUq3APQXhJpMRpyumkv55eHZvBJCi7%2BWmtvWNmSIHXW5sBIo8MdwMDfQCwVfNR9mzEAmvBrCb75etfWLAbm22Pul1uhK7BGcYwOey3Y%2F8jmpYS%2BHMfN3IEkSKfvFq48U0eXxL9b61LcCvJjfbgmYi%2FSwZwzKn3BjxfITKzS17vGiL0VlYU%2B2peZiP97RhQ4BL8gvcbUywBTZGq8RArWy6JwDg6eXxUIsx%2FnOTgj9MpEABNRxWslmCXRmhTS6goY%2FkR0YIVn0TBaI9aNwvKwDDLDirmqTHX2eea0YbJ6silMV46B%2B731KwBDjnQtu3AVieRWx8Mk2Oxt%2Fi%2BE%2FRwvmLfGUvpY8Omb9I7vVo4puiWuSG2NIV6HjoSelTvnRxDeOHG0Pa5lz%2FcTi4vQGzIvzDhfvXgxsczmhMd27BDCFb9c9AohK6u71RtYFoyUcVvDmLv%2FpoIIju9cHpDG1iWsCEQRsSJ1r70Q3qGNLKpT6of%2B3BCgnm6Cf%2BpkxWWqJcsQWnaYlMatRrTI5DbAL3KEN2mECX4DouybgSrjoGOzYZt8%2F2N8pO4YKA6zw0iYcfEKnUym3QRK5kztGmrO2UO2%2F58OPVV90yySQxGOD8jo63K0JfGga6YNUVixzakSBVxxbDCHvbzEBjqkAW8CgX44bsGrrx%2Bxs4Rlqu3nOoBnYXpKtUWr1WRdvNFd3xE8zcENIHv%2B9mYlKYyDnvt2jRBl5IGLRg%2F8lWsAGAZSWiQI7tMXwZWTe%2Fvj7rSgzxl%2FnU8rNOc3eqJINj68tKqdvNWABW8PSGYixOgas%2BxYEC1zbLjKD4gOUrpvDZE1OK4p786lHF%2FuqOifZ8ealham05RG%2BqQBxkO8PRfKKTUkwgVN&X-Amz-Signature=59af4d4436ab36de459dd718cb7dd5e2b6e48769f1d1438d73741fb4173c312e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHFI3WEN%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHJT%2BYIZ9BfbrFWswlexuefkVqnsxJ4Oh1ufa41Dc2VAiAEWC74n5ddk6rEzTGUEtmg3iFIH%2B9y2qpgrJHup9EZECr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMIJXY539yPDwgxVeAKtwD%2FOV%2FYWrj6aoNBceiPi43vaJU7OdPN%2FDmB2bGjJyMeFr6PsvvniaaDganHOhKt1PFOYbTLhpRakiKB1mn4bjCw77KJNcGMRB4lDkq799mIdFjB8nOqP9%2BxkLIKQwy6kWCt3O8wo0f%2BymIL102ySrwp6qidO9oSqU9mXFyZkwNdryVBlO3BU3qZhEcqAFiE9Ju584vFxgXg%2BKA6uSUPcXSq4j5GjfDF71UFcRNih10xi4GVgdHXuf72MiQMAlMXDZgAib0NtowiHJhxWOO%2FeELu1uyN9yo0gFtSsEagTh28tFM1W7z%2BtcE91g2dvcVcuIiIV2wRmFKoR%2F8UwZ1bUtsBefuP9GJTnWQT6tuVEbyqlIby%2BwNy3ngVRLyy3sdaTbqz3FpcQlGVj2NtrPxoc4B9CzweghlQIsdRTGJPLDbstgJalkwOuSvaZPjNfmIhWX6jYMgtdjna8%2ByJPexr5IIOy6MMAvTnRBAYuZc60XWU8ZDn45PVk5t4e4ZGj2u3SRV47lH4LyHF%2FCU0gGPPx1LPx2nVCU2mMeOBxry0mHfTbORQ%2F5Ki2dURMiCS7scuUlBHlW2oMLgh%2B3UPZ0AnEZjkyLlTkyfPU8fygUnLOHuiiXRKTLtLzwuArGw3RIwisO8xAY6pgGO4jW1qM9yLGlYvmlIYL1aOzW%2FCxcnGrpdFMhFHs43pOSuV62sCJOrzC%2BiiPcwCDyD2RO11UpcG4zaULEOKgMczocKX6I0U%2BB4XS363Vng%2B9baTicmvLE7QZtfxrlZuKBmBphnwcvlIJwUkujml2eh%2F%2F5BjGMc5HDHYXzh7tip85uClpbBUXPHhnZ7CSJ4fA8qnpQ4yYPsfBp5SxWOorT9yfaZJG7F&X-Amz-Signature=0a91ef5c7e7e825da107894eea20351d33d5579786318ba1f39ffa340d00beda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SZKJN2N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHBOFYvSkx0KRJqVjqg4l9FlitUiOC0m8M%2BohCOdNijAIhAL%2FMAm713f9O57UKw5tqo%2F01M7TnxBVkk8iUas9LY2WNKv8DCCoQABoMNjM3NDIzMTgzODA1Igzrtm4WWheM2UqXAIUq3APQXhJpMRpyumkv55eHZvBJCi7%2BWmtvWNmSIHXW5sBIo8MdwMDfQCwVfNR9mzEAmvBrCb75etfWLAbm22Pul1uhK7BGcYwOey3Y%2F8jmpYS%2BHMfN3IEkSKfvFq48U0eXxL9b61LcCvJjfbgmYi%2FSwZwzKn3BjxfITKzS17vGiL0VlYU%2B2peZiP97RhQ4BL8gvcbUywBTZGq8RArWy6JwDg6eXxUIsx%2FnOTgj9MpEABNRxWslmCXRmhTS6goY%2FkR0YIVn0TBaI9aNwvKwDDLDirmqTHX2eea0YbJ6silMV46B%2B731KwBDjnQtu3AVieRWx8Mk2Oxt%2Fi%2BE%2FRwvmLfGUvpY8Omb9I7vVo4puiWuSG2NIV6HjoSelTvnRxDeOHG0Pa5lz%2FcTi4vQGzIvzDhfvXgxsczmhMd27BDCFb9c9AohK6u71RtYFoyUcVvDmLv%2FpoIIju9cHpDG1iWsCEQRsSJ1r70Q3qGNLKpT6of%2B3BCgnm6Cf%2BpkxWWqJcsQWnaYlMatRrTI5DbAL3KEN2mECX4DouybgSrjoGOzYZt8%2F2N8pO4YKA6zw0iYcfEKnUym3QRK5kztGmrO2UO2%2F58OPVV90yySQxGOD8jo63K0JfGga6YNUVixzakSBVxxbDCHvbzEBjqkAW8CgX44bsGrrx%2Bxs4Rlqu3nOoBnYXpKtUWr1WRdvNFd3xE8zcENIHv%2B9mYlKYyDnvt2jRBl5IGLRg%2F8lWsAGAZSWiQI7tMXwZWTe%2Fvj7rSgzxl%2FnU8rNOc3eqJINj68tKqdvNWABW8PSGYixOgas%2BxYEC1zbLjKD4gOUrpvDZE1OK4p786lHF%2FuqOifZ8ealham05RG%2BqQBxkO8PRfKKTUkwgVN&X-Amz-Signature=2ef0405fe856d875380d9bae8e079210c030d2f7951b189828d26b3ce644801c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XBTPCRE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIEqO1caGV1TTQdMi6R0Z8rwIRnJvaU4HK57eS0qykWgIgZLaphS2DAiVQ23ccAI0IhK7gbEHezv1UjnjtfUr5%2FxMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEr8Tbrt2aoaWnDYNyrcA2MPZovI6FFpLazdJh1pkWanTti9%2BHe8AGuaan6K3mMV6rPqejyzxeRJO1Tus1PSCrbK%2BTGo66psSDi%2F520kVy80vk%2B%2FJT%2BzqMC49UDocLeRJ%2FSZZIlmGEz3zZ46Q2Nn2oIUe%2BjskfqvtvZyrVH%2FlldYSUtt0GJkbB%2Ft6dN1bPOXZxDchFsyE9nANrp5aosWqMTGn8yAZOxl9kEOjLYP9Nbi1S7RHXvM50AtH1SUXC5v1AdJfvH2m7Mp%2BzJlcNf9FM0K9KLR%2BTEC7t%2BzsRAGwoz8xdTjhQMVAMsAeNND1%2BVNPm2dv%2BYTKDKZ7NDROdQCfbGUXyhb8oIONiE5dhu%2BswWKac22hU6G1AuK%2BZrLnVAp0sddAHlvi8rsEaeeGbkywwITBUukQ3XeAJ4TfkkwLYchaO15b0O058ZDAqpFbaJiPj%2BwPHtbPaRzLPhzQpiRAf4SFw8sQpfNb14v1vhi9AMZJO%2BMUQeUyYvRl2CeTo4BeG4ZEfmSS0yG1%2F2zRUQ5%2BS9D3jKozXjIYNl0GLfxJZ82tC3YtIdZ4KTMmP3EMnAl6Xs8gmKbvfc4fQiPyjbQwV4FbZVYqnx0LzWDkEpZK2gfXpNAm7%2FrI7Bu%2FEWBKEyJYWiCSdXdN1vzR%2FXwMPS%2BvMQGOqUBs79z5CJJ3luhV%2FZJrYofqv%2F275OQI0DgXQMAtrpZk09LWSWy6pU4bmDF7QSPVZRGnxonqcRhztuyokwLK1DjONw3ODbWunD5GSqaK7%2FCPqsa3ept8w8%2F3NcaVf1vQB7VsAAptI2OlP%2Fobb%2BLZvB2b0j50HYqpe3dlbhMro%2FOs%2Fu55UDAP0O7wHr2vTfX6aMYHUk21ldec2GA%2Bw1kkV58c%2BV4MwJd&X-Amz-Signature=04da4b06e4dc1529d280fe76ace3b8515e017286cdb984a2b2b47d45e91698e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC6TOBDB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPCjOOjG%2FlfNrekmVuQY5nubc2tdbWMTiUfbTN7JduzAiBMdKLNPSseQ2EKmwihQYi%2Binx7haX%2FXOza7t20%2FOGsuyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMa86iiqOGHpFRARNpKtwDZEj761N%2B5Wmv8o0nECokiAeQw9KBNaS%2FgN38VMLCVmcJTHCrM2YS%2Bh58ZvJVR3cYXkNa6vwn3Tb24%2BCfPblVpwepkx4PBvkLW4l8YIKFEh9VNZuf9qQOrjw%2FExhbxVpOnAfTdpXH97H7nXJuuE2BBDDSytln4kuk0uQnOZk8OtSzLeoGSAIAAf%2BrutWqG6mm8zRAfXdvPDeNqb6iCkDF8eW%2F5SSx2Up0Pvra%2Fwl%2F0CKIAmLBeX9Nq5teoD1kQ4ylIBhS%2Bke1V9WSD3RsDepK9AqtyM2lDdVyhd%2BrIkrF1wlOwfA%2B7l5LVe3%2BVOHaItsvskQNarpNO8YJkIusWR1CjwgYjeIUAH4%2FmdNNTZ9OCz0y45X%2Frdypz9Mac63Wtflp3ay7VELFENHDgNL9vVNII6t2s5ZqDffeFUP2aAHqVA%2FehQ5Z8HYGkcrDJvqBMzo%2FoqgKWt7AWB9gCrSZlcftoMANf93d2xssa8qo0rIUKIC7oD7Oj69rutAiRWIuyv4DshVeggKUmiOrQCjILihZnv9ajuxOWJiFpOIqay9XxGDFVoyQe1QcHG2BtgHP2bGpcPJ%2FCH9OJPdRlEVV0HPIFUxhbvQXjJiIuJAkBR%2Fb%2Fi6QITdEDwWs6GNIfV0wtsW8xAY6pgFk1I2dV4Ud1tawBiYU3udtoJ2plbx7p2MBQ0%2B2vVwKfoyOZvaDRBaeSEqMLEfOYj%2BWbN%2BAkoX2e0KwD6VJkwczbmKOsTl0Luml9AZ%2FrCa4bWywpw%2FLkTiy9eE0zyDqe25tGN3P0SHIHIticbD7a4uaxEyY9gk7iHwixxxdnLFV5RqagL5JwAP%2Bq%2FIrO%2BvX5Y30L0RY3hsBBGHTuiomFeFd5ruC2pQP&X-Amz-Signature=4f00367dc07c716f5052b0fc2fc76e7c766af5845a5006e1d08aef85fb8d1ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q5EFJ2L%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVmj%2BfP3alHxEUpROjXmcnYGOR4oL4k%2FMXAPQDOqeraAIhAOg%2BWf10GhpAw3F9o8qfQ65yZnM9IXnenknosR%2FyXmP7Kv8DCCoQABoMNjM3NDIzMTgzODA1IgxUPDLlpeDomnPNLZYq3AMZMlmY8CkWOD2G4zhP511zsyfF8m8fgaoz94zNfl2hDYXT60PPbrZbKrqQRw%2BOEI7sZVrVtoYgpeA5p6R0tOjWGP7ab7xAkd5aPnPh14IDRurK2U5N2UNl3j%2FE5n1twDVUKP5zRpN%2FSvysxdMgNKXOp1tH2sXJQ%2Bn%2FgxDjteqqlfYiMVrXHV3mRxUzQzEp%2F2M7lHWiLg5JbzkHvCe9WF9uAntbqQT87XNfnDa9WqXJnigHIcVSvhU%2FhFl9ASpErSqxK9PVQTcgvXUBBMPQlZnKPhmR79trwUcO5Ru%2B7hgXu%2BggbmnA0a81X0hW2dapDsj4RWX6JHUI0lOLoaxvHwyde9tYl3LPZf3pPDKn60v%2FSuvjjFzdJ2Yp5xkPWNTIJXsYNVD62oWnaVI4taNMAq21sUy73vCcobS3%2B6sPklsadJwqKfxHHjd%2BJPTHu9BggRiM367TJlzHc%2FblQwYd6Vb9hhOklD0%2BFVGihz7K93pT1R81kLj%2FiEGBvC7II%2F9YpHMzlx66JqK75Eh2eeaAKp9nTgad1m3v8JebPK3frnDgz3%2FFwKdBYMljgr%2BSdnuJicPPI5MmyUHcWJ3uVB1n8oY157V75j%2FfaBrzN423LefANEzdJiVqBM0yVYiT6jCRwLzEBjqkAXWE1IG6FjD6kVgyOqHPj0%2B8bcSWcOvfLHvCHHLFKeVbg0qI%2Bn%2FCS8r4E2CCADhw8QiS7ba%2FvX7iYqNpPyyx%2BGTspA%2FzRbxeWhe5sENg9uXm%2Bs7GD0GvNljbhuJtR3SgtGp3yYVTOi0JRDq91KtBQdde1ZNRItwZaJSRFdnWTabzf15uL%2F%2FKa3LUFPVCr%2Bmsq7OXg8UVQ2Afw33u1cfCzlBQUHIc&X-Amz-Signature=dd2bdbb8d995748d0be380af7e5c558dfdb79ea0cabb82d73eba902c5e693ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEB6AEXF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB2cpAFygRu1LYZ%2F8IvlQvbPvRHRv8wInLaEa%2BPyWz5AiAaxOBpiQ3qbz%2F6Nj0DQ8fTaEJ3ba%2Fh3npUPg4DwtXLaSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMwd77aGkioH8D10CaKtwDYtLGWYw5tfoD8uNR6YlMMrlH71OR1syOBFRdEXCncV2l5QAazanqs184W7%2BO2kz172JOGh1cK53qgeeY%2Bl9HWPfeN5t9MGAZillM1mSR9%2Brs0DyFQvbcSreqazZdsDtvrAo4XcDes9yL5poDpgrYaNZtD6c2GzirWPJFCl16QYlz1gx4Q2%2FrPMAGCyy1HQPzyaQm2qkOfRn9dAcqTZa2N%2F8J1S9CZsw3cRA07KCQNEf5LeJuqlBqstaXKT9XET7jqUGa9PdId6T3hkdf8jFi3KveRSXR0OgvXD%2B6vAhFrW%2BfZQdaqTn3V%2BaDFr8PDMZ5GuuF2bCj4IPNcf6ix1FGLJ0%2BMv%2B7IowIdhj6Cr%2FN3%2Fj0A8A0nzk5UoXcinRWllvJZIVngV4KCvy6gyyxRAbOMTdaXm3bXESulDMFJjzpMWbqcDy%2BSQZxIazuLa1As%2F%2BTotbmDEPVvbFHe19qLBIYM%2BUFJWDvlNuJc8JsCdDNqkpVokYcpa5sQCygCvy6qO3vgQ2T2RnXiYsC%2BvxxpXZYl3TIPphyxYmkU01AJpKokzeg8NRHu0PqAASi4D%2FUiCu4aALuk2PZde9aXS8pTpSVtDmIlZUXfkGTqkVQK3q1FSkfkilQfngLqjkpe7ow8sS8xAY6pgGqeO25tYTG3WbhKMtZ5cQvSEEDtWTOzUPOoW698LRAdJHVBr5jtw1vgBCgRYrUyjCF%2BLqq4sJndWTBkxmyPFojCJKs2DCHlyDNKYZp6%2FtGDWXW9hKT9Y4%2BrzuWTnzfo5o6pA2O0gvfySB2h1bxBWlvrgvfJzw4SvU0rD2OXxB1i9J8yzD%2BS4Uf0kfdZvma6fxAsmXpJUJwtHat37mFDWfhb3YcfBnd&X-Amz-Signature=bd1d8cb564e7c40aa8db2cae7e0d3de448d8352a33bf4662a419f102a3e794ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USAYLVIH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICR7KXqs0KiuRIYFV2r5gmquxT28o5q4B%2B4HD7Ej473kAiAzP0%2FwQF%2BrBuEneTS66Cm%2Biqw6GctBYdWm0HKieodXByr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMDVZJD0cFpU2zu%2FpZKtwDDP4ngCcxww%2F4mv8miZN5CdD%2Fr9Cnk82Q0KvI7LeyTYA7%2F5FKsDNhYTqcWuxYq3dG4M2MorLiEmdQRELU36zC6zv5Fmzn9NDjQXP7ABlLpJwveznVnDGylXGuIXPPS9wkUSyC5jXhGxU4nvdsgsGC8m0yfxdevhbdkXFOIDbMTPutFOFygsw1TXCXO7jE3eQPUmUBZBd3Pw2d9A7uhF%2B6B2tIloJx62ENfg%2BasLoO5rmJsdJ8wqQJ4%2F25xLdYU2TDEIxTnP%2BU9mzDZ0du370hbLpNLDvayQv9lh%2B5UzfjvpqFTItbQNADeTY3aCfFmatNKsTaxys3wNsyt2vPtf9czd2yLi%2BdPRyKEegt7L6xKGK4J61d8vobq4ifGxCzZM7CdNKph2rvpfbYVCLsBXOcrVtbHUXs5pRLvrYX2AujOGuFXrCNRx8A2u8Aav%2BYdztGTGsuobcjveSRiRgrN2ULFxoHgVKHyA%2B2V9ETQ9fuwBU0TI4pt9lLCRBIRak%2FzbF%2BJN9ZDcFrU%2B2ooisjOnybSsZqd8GijT0OCUWaM%2B7EHvT0KEUReo%2BKxkOmf1z7B0xCKnk3vePKCupvJsYMOxYX%2F4chmVGyEQM9vlFP4T70J0QfHtujlQEShakPvsQwtsG8xAY6pgEzU990WD9dbqID%2F1E3OlltDy6Pol7%2FIP5gv4OC5oA8xO7%2FwW4l00TVIvZOgFoJ5XUjzSeoiLXMruzIkE1G7iMGkkUS%2B7Az5nbUlo5DuwcYm6GX%2FAlGcHLz%2BAsR5m5%2BDObq1rAj592NPfcODxAlErFHNPTHUwFS%2FmeG5ekAQ3s4nKkJUPI4OigAe1jqMET7g4Oh3tHL8jsLjXro4TVozeOIYn3S40FN&X-Amz-Signature=5dd8db55dde6bb776da1344732ffd7d1dd72f5a942acff41d81803a4fb12cd41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SZKJN2N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHBOFYvSkx0KRJqVjqg4l9FlitUiOC0m8M%2BohCOdNijAIhAL%2FMAm713f9O57UKw5tqo%2F01M7TnxBVkk8iUas9LY2WNKv8DCCoQABoMNjM3NDIzMTgzODA1Igzrtm4WWheM2UqXAIUq3APQXhJpMRpyumkv55eHZvBJCi7%2BWmtvWNmSIHXW5sBIo8MdwMDfQCwVfNR9mzEAmvBrCb75etfWLAbm22Pul1uhK7BGcYwOey3Y%2F8jmpYS%2BHMfN3IEkSKfvFq48U0eXxL9b61LcCvJjfbgmYi%2FSwZwzKn3BjxfITKzS17vGiL0VlYU%2B2peZiP97RhQ4BL8gvcbUywBTZGq8RArWy6JwDg6eXxUIsx%2FnOTgj9MpEABNRxWslmCXRmhTS6goY%2FkR0YIVn0TBaI9aNwvKwDDLDirmqTHX2eea0YbJ6silMV46B%2B731KwBDjnQtu3AVieRWx8Mk2Oxt%2Fi%2BE%2FRwvmLfGUvpY8Omb9I7vVo4puiWuSG2NIV6HjoSelTvnRxDeOHG0Pa5lz%2FcTi4vQGzIvzDhfvXgxsczmhMd27BDCFb9c9AohK6u71RtYFoyUcVvDmLv%2FpoIIju9cHpDG1iWsCEQRsSJ1r70Q3qGNLKpT6of%2B3BCgnm6Cf%2BpkxWWqJcsQWnaYlMatRrTI5DbAL3KEN2mECX4DouybgSrjoGOzYZt8%2F2N8pO4YKA6zw0iYcfEKnUym3QRK5kztGmrO2UO2%2F58OPVV90yySQxGOD8jo63K0JfGga6YNUVixzakSBVxxbDCHvbzEBjqkAW8CgX44bsGrrx%2Bxs4Rlqu3nOoBnYXpKtUWr1WRdvNFd3xE8zcENIHv%2B9mYlKYyDnvt2jRBl5IGLRg%2F8lWsAGAZSWiQI7tMXwZWTe%2Fvj7rSgzxl%2FnU8rNOc3eqJINj68tKqdvNWABW8PSGYixOgas%2BxYEC1zbLjKD4gOUrpvDZE1OK4p786lHF%2FuqOifZ8ealham05RG%2BqQBxkO8PRfKKTUkwgVN&X-Amz-Signature=22e633ae3007e6fc40ccc800adddc107f9d8872f0c3f77b147d1fb58176fd18f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SZKJN2N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHBOFYvSkx0KRJqVjqg4l9FlitUiOC0m8M%2BohCOdNijAIhAL%2FMAm713f9O57UKw5tqo%2F01M7TnxBVkk8iUas9LY2WNKv8DCCoQABoMNjM3NDIzMTgzODA1Igzrtm4WWheM2UqXAIUq3APQXhJpMRpyumkv55eHZvBJCi7%2BWmtvWNmSIHXW5sBIo8MdwMDfQCwVfNR9mzEAmvBrCb75etfWLAbm22Pul1uhK7BGcYwOey3Y%2F8jmpYS%2BHMfN3IEkSKfvFq48U0eXxL9b61LcCvJjfbgmYi%2FSwZwzKn3BjxfITKzS17vGiL0VlYU%2B2peZiP97RhQ4BL8gvcbUywBTZGq8RArWy6JwDg6eXxUIsx%2FnOTgj9MpEABNRxWslmCXRmhTS6goY%2FkR0YIVn0TBaI9aNwvKwDDLDirmqTHX2eea0YbJ6silMV46B%2B731KwBDjnQtu3AVieRWx8Mk2Oxt%2Fi%2BE%2FRwvmLfGUvpY8Omb9I7vVo4puiWuSG2NIV6HjoSelTvnRxDeOHG0Pa5lz%2FcTi4vQGzIvzDhfvXgxsczmhMd27BDCFb9c9AohK6u71RtYFoyUcVvDmLv%2FpoIIju9cHpDG1iWsCEQRsSJ1r70Q3qGNLKpT6of%2B3BCgnm6Cf%2BpkxWWqJcsQWnaYlMatRrTI5DbAL3KEN2mECX4DouybgSrjoGOzYZt8%2F2N8pO4YKA6zw0iYcfEKnUym3QRK5kztGmrO2UO2%2F58OPVV90yySQxGOD8jo63K0JfGga6YNUVixzakSBVxxbDCHvbzEBjqkAW8CgX44bsGrrx%2Bxs4Rlqu3nOoBnYXpKtUWr1WRdvNFd3xE8zcENIHv%2B9mYlKYyDnvt2jRBl5IGLRg%2F8lWsAGAZSWiQI7tMXwZWTe%2Fvj7rSgzxl%2FnU8rNOc3eqJINj68tKqdvNWABW8PSGYixOgas%2BxYEC1zbLjKD4gOUrpvDZE1OK4p786lHF%2FuqOifZ8ealham05RG%2BqQBxkO8PRfKKTUkwgVN&X-Amz-Signature=b4ff005b4f5218c6b5933403f015482233012dc8a99cf763b5e8e8395b05eeed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIZRH7OI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCelY1li9TT0L18lDokp3ps7eFFFNiaaABZrKWVWLCjIAIgc4XFjQK6eugfgNy49NfWvt3uK4Dyv%2Fv15%2FyO0MQCHu4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHVqv0f0%2F3U1IkjZRyrcA%2Ftas%2BWqfyjBZRPcjfxPvP%2Fn7A%2FRqItQmdfed5LH6TQiX9OO6iVIF9vc1XA7pAOSb6X5EUbIpCFYcwtpiiQxAitM9XmpXafY%2FSMYsRtuYW6nD4mZlyLWs7XTRJWSdUAoTAzNeG3%2FKd7JKV3lBsL4YTJrR4otwVf9S3KgdqGooTEnSptUcwKC0RwmW89Uw8Te1y%2BkUVYVkqYvJrpJ0MBIyAQzEncrkNDUpkAIBaqTWKKDWVcT0pxCuop8m5QbCCqd94eaBrhG5InYX3ot9azaqMHGr9epuiulGbeEvUeeIZKQcgK6%2FF2cFGGNJ%2FrUSvtqUFzzLD8FaFcLmAZcpoOokkIFDsO0uiRcULNb7Mzq3B%2Bd4N53%2B5F6ot9%2FClLyjrCSKVn8MeeoGMlwIjYLv1WGqJe46zCRY2KGY28XXh20cF0bgvOKJi%2BLj8bcVxJ2zp%2FCepeaQ8B6tZ3PiuNzcWz16NfGaRqCfAiZH1qodc3bCbhTdpuaYD7x0Hwb9DzdJvh%2FPV%2BBdxolkWX%2FyVpOuRsOyVoyIZNtDQ4mVR3GSCCU4zwRr6U%2F%2Fblek7mKM4UxsIDCkUk15bKLrHpGTlJAi1buMl1tkG1setN%2BVmwyJMPj%2B3YwPISfTqYNRlqWpEhHMLjIvMQGOqUBGhJ1kc%2FU6Z3RmiU2cX62XPDvJbqxm%2FDQwEQKlZhCopXbQ84CVNF3YYu9B41ZVVAnaKfQOgvMXNMetmn2A57h6EsC1P0txPbNfxYUzn5XEM2TjG8RPBiptRoFi2byIzIrvxgu9h4pwb4rCsMmj6hygDscPl09coKBrjF0X9bol4DaMUP1JjuRaQgxaeqEW6Asg%2FTPr4b7cWHjbhIhxcplGnkf%2FwXh&X-Amz-Signature=4fa08f6e36033525f266f9751cb837a770a845a9d4e13458e9a1f45cda698d42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIZRH7OI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCelY1li9TT0L18lDokp3ps7eFFFNiaaABZrKWVWLCjIAIgc4XFjQK6eugfgNy49NfWvt3uK4Dyv%2Fv15%2FyO0MQCHu4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHVqv0f0%2F3U1IkjZRyrcA%2Ftas%2BWqfyjBZRPcjfxPvP%2Fn7A%2FRqItQmdfed5LH6TQiX9OO6iVIF9vc1XA7pAOSb6X5EUbIpCFYcwtpiiQxAitM9XmpXafY%2FSMYsRtuYW6nD4mZlyLWs7XTRJWSdUAoTAzNeG3%2FKd7JKV3lBsL4YTJrR4otwVf9S3KgdqGooTEnSptUcwKC0RwmW89Uw8Te1y%2BkUVYVkqYvJrpJ0MBIyAQzEncrkNDUpkAIBaqTWKKDWVcT0pxCuop8m5QbCCqd94eaBrhG5InYX3ot9azaqMHGr9epuiulGbeEvUeeIZKQcgK6%2FF2cFGGNJ%2FrUSvtqUFzzLD8FaFcLmAZcpoOokkIFDsO0uiRcULNb7Mzq3B%2Bd4N53%2B5F6ot9%2FClLyjrCSKVn8MeeoGMlwIjYLv1WGqJe46zCRY2KGY28XXh20cF0bgvOKJi%2BLj8bcVxJ2zp%2FCepeaQ8B6tZ3PiuNzcWz16NfGaRqCfAiZH1qodc3bCbhTdpuaYD7x0Hwb9DzdJvh%2FPV%2BBdxolkWX%2FyVpOuRsOyVoyIZNtDQ4mVR3GSCCU4zwRr6U%2F%2Fblek7mKM4UxsIDCkUk15bKLrHpGTlJAi1buMl1tkG1setN%2BVmwyJMPj%2B3YwPISfTqYNRlqWpEhHMLjIvMQGOqUBGhJ1kc%2FU6Z3RmiU2cX62XPDvJbqxm%2FDQwEQKlZhCopXbQ84CVNF3YYu9B41ZVVAnaKfQOgvMXNMetmn2A57h6EsC1P0txPbNfxYUzn5XEM2TjG8RPBiptRoFi2byIzIrvxgu9h4pwb4rCsMmj6hygDscPl09coKBrjF0X9bol4DaMUP1JjuRaQgxaeqEW6Asg%2FTPr4b7cWHjbhIhxcplGnkf%2FwXh&X-Amz-Signature=2d9ea07a543e5cfd4636596623751724a9660d54651081824c1f1e9c8167a42e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIZRH7OI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCelY1li9TT0L18lDokp3ps7eFFFNiaaABZrKWVWLCjIAIgc4XFjQK6eugfgNy49NfWvt3uK4Dyv%2Fv15%2FyO0MQCHu4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHVqv0f0%2F3U1IkjZRyrcA%2Ftas%2BWqfyjBZRPcjfxPvP%2Fn7A%2FRqItQmdfed5LH6TQiX9OO6iVIF9vc1XA7pAOSb6X5EUbIpCFYcwtpiiQxAitM9XmpXafY%2FSMYsRtuYW6nD4mZlyLWs7XTRJWSdUAoTAzNeG3%2FKd7JKV3lBsL4YTJrR4otwVf9S3KgdqGooTEnSptUcwKC0RwmW89Uw8Te1y%2BkUVYVkqYvJrpJ0MBIyAQzEncrkNDUpkAIBaqTWKKDWVcT0pxCuop8m5QbCCqd94eaBrhG5InYX3ot9azaqMHGr9epuiulGbeEvUeeIZKQcgK6%2FF2cFGGNJ%2FrUSvtqUFzzLD8FaFcLmAZcpoOokkIFDsO0uiRcULNb7Mzq3B%2Bd4N53%2B5F6ot9%2FClLyjrCSKVn8MeeoGMlwIjYLv1WGqJe46zCRY2KGY28XXh20cF0bgvOKJi%2BLj8bcVxJ2zp%2FCepeaQ8B6tZ3PiuNzcWz16NfGaRqCfAiZH1qodc3bCbhTdpuaYD7x0Hwb9DzdJvh%2FPV%2BBdxolkWX%2FyVpOuRsOyVoyIZNtDQ4mVR3GSCCU4zwRr6U%2F%2Fblek7mKM4UxsIDCkUk15bKLrHpGTlJAi1buMl1tkG1setN%2BVmwyJMPj%2B3YwPISfTqYNRlqWpEhHMLjIvMQGOqUBGhJ1kc%2FU6Z3RmiU2cX62XPDvJbqxm%2FDQwEQKlZhCopXbQ84CVNF3YYu9B41ZVVAnaKfQOgvMXNMetmn2A57h6EsC1P0txPbNfxYUzn5XEM2TjG8RPBiptRoFi2byIzIrvxgu9h4pwb4rCsMmj6hygDscPl09coKBrjF0X9bol4DaMUP1JjuRaQgxaeqEW6Asg%2FTPr4b7cWHjbhIhxcplGnkf%2FwXh&X-Amz-Signature=be0f4cbc16a5d10fe45aaa71b040dc8f36edea175f8ef8d5b69ea130e7af2666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIZRH7OI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCelY1li9TT0L18lDokp3ps7eFFFNiaaABZrKWVWLCjIAIgc4XFjQK6eugfgNy49NfWvt3uK4Dyv%2Fv15%2FyO0MQCHu4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHVqv0f0%2F3U1IkjZRyrcA%2Ftas%2BWqfyjBZRPcjfxPvP%2Fn7A%2FRqItQmdfed5LH6TQiX9OO6iVIF9vc1XA7pAOSb6X5EUbIpCFYcwtpiiQxAitM9XmpXafY%2FSMYsRtuYW6nD4mZlyLWs7XTRJWSdUAoTAzNeG3%2FKd7JKV3lBsL4YTJrR4otwVf9S3KgdqGooTEnSptUcwKC0RwmW89Uw8Te1y%2BkUVYVkqYvJrpJ0MBIyAQzEncrkNDUpkAIBaqTWKKDWVcT0pxCuop8m5QbCCqd94eaBrhG5InYX3ot9azaqMHGr9epuiulGbeEvUeeIZKQcgK6%2FF2cFGGNJ%2FrUSvtqUFzzLD8FaFcLmAZcpoOokkIFDsO0uiRcULNb7Mzq3B%2Bd4N53%2B5F6ot9%2FClLyjrCSKVn8MeeoGMlwIjYLv1WGqJe46zCRY2KGY28XXh20cF0bgvOKJi%2BLj8bcVxJ2zp%2FCepeaQ8B6tZ3PiuNzcWz16NfGaRqCfAiZH1qodc3bCbhTdpuaYD7x0Hwb9DzdJvh%2FPV%2BBdxolkWX%2FyVpOuRsOyVoyIZNtDQ4mVR3GSCCU4zwRr6U%2F%2Fblek7mKM4UxsIDCkUk15bKLrHpGTlJAi1buMl1tkG1setN%2BVmwyJMPj%2B3YwPISfTqYNRlqWpEhHMLjIvMQGOqUBGhJ1kc%2FU6Z3RmiU2cX62XPDvJbqxm%2FDQwEQKlZhCopXbQ84CVNF3YYu9B41ZVVAnaKfQOgvMXNMetmn2A57h6EsC1P0txPbNfxYUzn5XEM2TjG8RPBiptRoFi2byIzIrvxgu9h4pwb4rCsMmj6hygDscPl09coKBrjF0X9bol4DaMUP1JjuRaQgxaeqEW6Asg%2FTPr4b7cWHjbhIhxcplGnkf%2FwXh&X-Amz-Signature=a90ee745e1268ecbf6eac163ddc2e6ef7baccc30f8187653382dd6bbc9401f31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIZRH7OI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCelY1li9TT0L18lDokp3ps7eFFFNiaaABZrKWVWLCjIAIgc4XFjQK6eugfgNy49NfWvt3uK4Dyv%2Fv15%2FyO0MQCHu4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHVqv0f0%2F3U1IkjZRyrcA%2Ftas%2BWqfyjBZRPcjfxPvP%2Fn7A%2FRqItQmdfed5LH6TQiX9OO6iVIF9vc1XA7pAOSb6X5EUbIpCFYcwtpiiQxAitM9XmpXafY%2FSMYsRtuYW6nD4mZlyLWs7XTRJWSdUAoTAzNeG3%2FKd7JKV3lBsL4YTJrR4otwVf9S3KgdqGooTEnSptUcwKC0RwmW89Uw8Te1y%2BkUVYVkqYvJrpJ0MBIyAQzEncrkNDUpkAIBaqTWKKDWVcT0pxCuop8m5QbCCqd94eaBrhG5InYX3ot9azaqMHGr9epuiulGbeEvUeeIZKQcgK6%2FF2cFGGNJ%2FrUSvtqUFzzLD8FaFcLmAZcpoOokkIFDsO0uiRcULNb7Mzq3B%2Bd4N53%2B5F6ot9%2FClLyjrCSKVn8MeeoGMlwIjYLv1WGqJe46zCRY2KGY28XXh20cF0bgvOKJi%2BLj8bcVxJ2zp%2FCepeaQ8B6tZ3PiuNzcWz16NfGaRqCfAiZH1qodc3bCbhTdpuaYD7x0Hwb9DzdJvh%2FPV%2BBdxolkWX%2FyVpOuRsOyVoyIZNtDQ4mVR3GSCCU4zwRr6U%2F%2Fblek7mKM4UxsIDCkUk15bKLrHpGTlJAi1buMl1tkG1setN%2BVmwyJMPj%2B3YwPISfTqYNRlqWpEhHMLjIvMQGOqUBGhJ1kc%2FU6Z3RmiU2cX62XPDvJbqxm%2FDQwEQKlZhCopXbQ84CVNF3YYu9B41ZVVAnaKfQOgvMXNMetmn2A57h6EsC1P0txPbNfxYUzn5XEM2TjG8RPBiptRoFi2byIzIrvxgu9h4pwb4rCsMmj6hygDscPl09coKBrjF0X9bol4DaMUP1JjuRaQgxaeqEW6Asg%2FTPr4b7cWHjbhIhxcplGnkf%2FwXh&X-Amz-Signature=5009f7e910e4e1f8640615b4418c4c9ac518ad1c487ed09541e599900a61ecab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIZRH7OI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCelY1li9TT0L18lDokp3ps7eFFFNiaaABZrKWVWLCjIAIgc4XFjQK6eugfgNy49NfWvt3uK4Dyv%2Fv15%2FyO0MQCHu4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHVqv0f0%2F3U1IkjZRyrcA%2Ftas%2BWqfyjBZRPcjfxPvP%2Fn7A%2FRqItQmdfed5LH6TQiX9OO6iVIF9vc1XA7pAOSb6X5EUbIpCFYcwtpiiQxAitM9XmpXafY%2FSMYsRtuYW6nD4mZlyLWs7XTRJWSdUAoTAzNeG3%2FKd7JKV3lBsL4YTJrR4otwVf9S3KgdqGooTEnSptUcwKC0RwmW89Uw8Te1y%2BkUVYVkqYvJrpJ0MBIyAQzEncrkNDUpkAIBaqTWKKDWVcT0pxCuop8m5QbCCqd94eaBrhG5InYX3ot9azaqMHGr9epuiulGbeEvUeeIZKQcgK6%2FF2cFGGNJ%2FrUSvtqUFzzLD8FaFcLmAZcpoOokkIFDsO0uiRcULNb7Mzq3B%2Bd4N53%2B5F6ot9%2FClLyjrCSKVn8MeeoGMlwIjYLv1WGqJe46zCRY2KGY28XXh20cF0bgvOKJi%2BLj8bcVxJ2zp%2FCepeaQ8B6tZ3PiuNzcWz16NfGaRqCfAiZH1qodc3bCbhTdpuaYD7x0Hwb9DzdJvh%2FPV%2BBdxolkWX%2FyVpOuRsOyVoyIZNtDQ4mVR3GSCCU4zwRr6U%2F%2Fblek7mKM4UxsIDCkUk15bKLrHpGTlJAi1buMl1tkG1setN%2BVmwyJMPj%2B3YwPISfTqYNRlqWpEhHMLjIvMQGOqUBGhJ1kc%2FU6Z3RmiU2cX62XPDvJbqxm%2FDQwEQKlZhCopXbQ84CVNF3YYu9B41ZVVAnaKfQOgvMXNMetmn2A57h6EsC1P0txPbNfxYUzn5XEM2TjG8RPBiptRoFi2byIzIrvxgu9h4pwb4rCsMmj6hygDscPl09coKBrjF0X9bol4DaMUP1JjuRaQgxaeqEW6Asg%2FTPr4b7cWHjbhIhxcplGnkf%2FwXh&X-Amz-Signature=bc63b9d91bca01fb5f4618fc085edfba91d469ad25b6914fd50dbdd599992265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIZRH7OI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCelY1li9TT0L18lDokp3ps7eFFFNiaaABZrKWVWLCjIAIgc4XFjQK6eugfgNy49NfWvt3uK4Dyv%2Fv15%2FyO0MQCHu4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHVqv0f0%2F3U1IkjZRyrcA%2Ftas%2BWqfyjBZRPcjfxPvP%2Fn7A%2FRqItQmdfed5LH6TQiX9OO6iVIF9vc1XA7pAOSb6X5EUbIpCFYcwtpiiQxAitM9XmpXafY%2FSMYsRtuYW6nD4mZlyLWs7XTRJWSdUAoTAzNeG3%2FKd7JKV3lBsL4YTJrR4otwVf9S3KgdqGooTEnSptUcwKC0RwmW89Uw8Te1y%2BkUVYVkqYvJrpJ0MBIyAQzEncrkNDUpkAIBaqTWKKDWVcT0pxCuop8m5QbCCqd94eaBrhG5InYX3ot9azaqMHGr9epuiulGbeEvUeeIZKQcgK6%2FF2cFGGNJ%2FrUSvtqUFzzLD8FaFcLmAZcpoOokkIFDsO0uiRcULNb7Mzq3B%2Bd4N53%2B5F6ot9%2FClLyjrCSKVn8MeeoGMlwIjYLv1WGqJe46zCRY2KGY28XXh20cF0bgvOKJi%2BLj8bcVxJ2zp%2FCepeaQ8B6tZ3PiuNzcWz16NfGaRqCfAiZH1qodc3bCbhTdpuaYD7x0Hwb9DzdJvh%2FPV%2BBdxolkWX%2FyVpOuRsOyVoyIZNtDQ4mVR3GSCCU4zwRr6U%2F%2Fblek7mKM4UxsIDCkUk15bKLrHpGTlJAi1buMl1tkG1setN%2BVmwyJMPj%2B3YwPISfTqYNRlqWpEhHMLjIvMQGOqUBGhJ1kc%2FU6Z3RmiU2cX62XPDvJbqxm%2FDQwEQKlZhCopXbQ84CVNF3YYu9B41ZVVAnaKfQOgvMXNMetmn2A57h6EsC1P0txPbNfxYUzn5XEM2TjG8RPBiptRoFi2byIzIrvxgu9h4pwb4rCsMmj6hygDscPl09coKBrjF0X9bol4DaMUP1JjuRaQgxaeqEW6Asg%2FTPr4b7cWHjbhIhxcplGnkf%2FwXh&X-Amz-Signature=be0f4cbc16a5d10fe45aaa71b040dc8f36edea175f8ef8d5b69ea130e7af2666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIZRH7OI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCelY1li9TT0L18lDokp3ps7eFFFNiaaABZrKWVWLCjIAIgc4XFjQK6eugfgNy49NfWvt3uK4Dyv%2Fv15%2FyO0MQCHu4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHVqv0f0%2F3U1IkjZRyrcA%2Ftas%2BWqfyjBZRPcjfxPvP%2Fn7A%2FRqItQmdfed5LH6TQiX9OO6iVIF9vc1XA7pAOSb6X5EUbIpCFYcwtpiiQxAitM9XmpXafY%2FSMYsRtuYW6nD4mZlyLWs7XTRJWSdUAoTAzNeG3%2FKd7JKV3lBsL4YTJrR4otwVf9S3KgdqGooTEnSptUcwKC0RwmW89Uw8Te1y%2BkUVYVkqYvJrpJ0MBIyAQzEncrkNDUpkAIBaqTWKKDWVcT0pxCuop8m5QbCCqd94eaBrhG5InYX3ot9azaqMHGr9epuiulGbeEvUeeIZKQcgK6%2FF2cFGGNJ%2FrUSvtqUFzzLD8FaFcLmAZcpoOokkIFDsO0uiRcULNb7Mzq3B%2Bd4N53%2B5F6ot9%2FClLyjrCSKVn8MeeoGMlwIjYLv1WGqJe46zCRY2KGY28XXh20cF0bgvOKJi%2BLj8bcVxJ2zp%2FCepeaQ8B6tZ3PiuNzcWz16NfGaRqCfAiZH1qodc3bCbhTdpuaYD7x0Hwb9DzdJvh%2FPV%2BBdxolkWX%2FyVpOuRsOyVoyIZNtDQ4mVR3GSCCU4zwRr6U%2F%2Fblek7mKM4UxsIDCkUk15bKLrHpGTlJAi1buMl1tkG1setN%2BVmwyJMPj%2B3YwPISfTqYNRlqWpEhHMLjIvMQGOqUBGhJ1kc%2FU6Z3RmiU2cX62XPDvJbqxm%2FDQwEQKlZhCopXbQ84CVNF3YYu9B41ZVVAnaKfQOgvMXNMetmn2A57h6EsC1P0txPbNfxYUzn5XEM2TjG8RPBiptRoFi2byIzIrvxgu9h4pwb4rCsMmj6hygDscPl09coKBrjF0X9bol4DaMUP1JjuRaQgxaeqEW6Asg%2FTPr4b7cWHjbhIhxcplGnkf%2FwXh&X-Amz-Signature=4a9241ec7a9cf8e8fefc0320ca476335bccfb80363fb003376acd1c3f26e3255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIZRH7OI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCelY1li9TT0L18lDokp3ps7eFFFNiaaABZrKWVWLCjIAIgc4XFjQK6eugfgNy49NfWvt3uK4Dyv%2Fv15%2FyO0MQCHu4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHVqv0f0%2F3U1IkjZRyrcA%2Ftas%2BWqfyjBZRPcjfxPvP%2Fn7A%2FRqItQmdfed5LH6TQiX9OO6iVIF9vc1XA7pAOSb6X5EUbIpCFYcwtpiiQxAitM9XmpXafY%2FSMYsRtuYW6nD4mZlyLWs7XTRJWSdUAoTAzNeG3%2FKd7JKV3lBsL4YTJrR4otwVf9S3KgdqGooTEnSptUcwKC0RwmW89Uw8Te1y%2BkUVYVkqYvJrpJ0MBIyAQzEncrkNDUpkAIBaqTWKKDWVcT0pxCuop8m5QbCCqd94eaBrhG5InYX3ot9azaqMHGr9epuiulGbeEvUeeIZKQcgK6%2FF2cFGGNJ%2FrUSvtqUFzzLD8FaFcLmAZcpoOokkIFDsO0uiRcULNb7Mzq3B%2Bd4N53%2B5F6ot9%2FClLyjrCSKVn8MeeoGMlwIjYLv1WGqJe46zCRY2KGY28XXh20cF0bgvOKJi%2BLj8bcVxJ2zp%2FCepeaQ8B6tZ3PiuNzcWz16NfGaRqCfAiZH1qodc3bCbhTdpuaYD7x0Hwb9DzdJvh%2FPV%2BBdxolkWX%2FyVpOuRsOyVoyIZNtDQ4mVR3GSCCU4zwRr6U%2F%2Fblek7mKM4UxsIDCkUk15bKLrHpGTlJAi1buMl1tkG1setN%2BVmwyJMPj%2B3YwPISfTqYNRlqWpEhHMLjIvMQGOqUBGhJ1kc%2FU6Z3RmiU2cX62XPDvJbqxm%2FDQwEQKlZhCopXbQ84CVNF3YYu9B41ZVVAnaKfQOgvMXNMetmn2A57h6EsC1P0txPbNfxYUzn5XEM2TjG8RPBiptRoFi2byIzIrvxgu9h4pwb4rCsMmj6hygDscPl09coKBrjF0X9bol4DaMUP1JjuRaQgxaeqEW6Asg%2FTPr4b7cWHjbhIhxcplGnkf%2FwXh&X-Amz-Signature=03d248da8b3330520cd4fc5925533c4172f27737482874d0b4bf4520710ddd63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIZRH7OI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T132601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCelY1li9TT0L18lDokp3ps7eFFFNiaaABZrKWVWLCjIAIgc4XFjQK6eugfgNy49NfWvt3uK4Dyv%2Fv15%2FyO0MQCHu4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHVqv0f0%2F3U1IkjZRyrcA%2Ftas%2BWqfyjBZRPcjfxPvP%2Fn7A%2FRqItQmdfed5LH6TQiX9OO6iVIF9vc1XA7pAOSb6X5EUbIpCFYcwtpiiQxAitM9XmpXafY%2FSMYsRtuYW6nD4mZlyLWs7XTRJWSdUAoTAzNeG3%2FKd7JKV3lBsL4YTJrR4otwVf9S3KgdqGooTEnSptUcwKC0RwmW89Uw8Te1y%2BkUVYVkqYvJrpJ0MBIyAQzEncrkNDUpkAIBaqTWKKDWVcT0pxCuop8m5QbCCqd94eaBrhG5InYX3ot9azaqMHGr9epuiulGbeEvUeeIZKQcgK6%2FF2cFGGNJ%2FrUSvtqUFzzLD8FaFcLmAZcpoOokkIFDsO0uiRcULNb7Mzq3B%2Bd4N53%2B5F6ot9%2FClLyjrCSKVn8MeeoGMlwIjYLv1WGqJe46zCRY2KGY28XXh20cF0bgvOKJi%2BLj8bcVxJ2zp%2FCepeaQ8B6tZ3PiuNzcWz16NfGaRqCfAiZH1qodc3bCbhTdpuaYD7x0Hwb9DzdJvh%2FPV%2BBdxolkWX%2FyVpOuRsOyVoyIZNtDQ4mVR3GSCCU4zwRr6U%2F%2Fblek7mKM4UxsIDCkUk15bKLrHpGTlJAi1buMl1tkG1setN%2BVmwyJMPj%2B3YwPISfTqYNRlqWpEhHMLjIvMQGOqUBGhJ1kc%2FU6Z3RmiU2cX62XPDvJbqxm%2FDQwEQKlZhCopXbQ84CVNF3YYu9B41ZVVAnaKfQOgvMXNMetmn2A57h6EsC1P0txPbNfxYUzn5XEM2TjG8RPBiptRoFi2byIzIrvxgu9h4pwb4rCsMmj6hygDscPl09coKBrjF0X9bol4DaMUP1JjuRaQgxaeqEW6Asg%2FTPr4b7cWHjbhIhxcplGnkf%2FwXh&X-Amz-Signature=604d0812c122a3311aed2f50a66226cbee58c3079878928fda6240a396b40a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
