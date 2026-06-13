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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EHNHGEQ%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIB12OiZHqg0UmQYF46kKL4qy1BcSNUcONAF9xFS6RYodAiEAlIg2MtymUE5kvDHWacpjRB8jYFQGuXt%2BQrb00HQtcDMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGvyGHlP1osTRS2m0CrcA6wA%2BB2pYMD5l2lC%2FlWQo1vDlkUxOchgOdU4kPyG%2FqjqEmkrI14xnXP8DxaEDnpzhwjVtCiVeoh2HB4G8Hxsc65rFa5pmJiVJCQdTjLgkfOwkeU2jwGBNC9Zyg1J9LuoYANLuVxVGaREOt0URtmZ2tJEcDMCQ7i2a8U5LPfuuzGsLFt1v4ByT4JOoOu1oO3U3z7HJRncRY%2F9K24F3FlZqJYNTWzZ1X6jXZ3fvlqqNRJRwk87lqb8W%2FQ7KQziqjoZ8l793IOYR5qV3dQCHEYdI%2FgaRKuE45NUdzzZbqWk7w30XxjuY%2BjbDgC0rLP5k2%2FWVkD31nX7ZD%2BFLLzP3oiysqoCqXqHnzzZaGbw%2FIM%2F7r90DP4D1ceOEmLVZGNB%2Fa3cYCVVZMtq4OMX6T%2BdPk8ZhyCHUGkGmnOW6XgakRuwH%2FT90LnfYJtu8%2FJDvWwYdHuPGbLxs%2Froq4amnFU48ZgvYTM75TraYJLd%2FWmDMSEqcxCA9ZmtMwSUaKSwJtyydjJZKFwh%2Fm8XxEd718cWpaUVEjzOZlfjhwNwZRYnL5vCuLRez7RqI5MsMnlNGFANp02acm7bvtijzisXkqu1gTcgavLLV%2FqQINCybmlfPGSEFBwcHQX334YiWJvcSagIMPv7stEGOqUBM8lJGFYQyQAIEjTAUxMcKtAUWdChnCDGo%2FAm6k8hikdvH0tSYXtkA6uGilqaTHLtwRR%2B4snJFsHlmAsvIYmitYxw0K0apoJj6mMUpUYV1QBMbYfw5ZAKc2%2Fc8dj%2BRau926o7QXlm6jm1U%2BJQznZApIYG4u5zpR2Z1uSm0ZbjLN1zl7tULcifcI7cqyXpP%2BVqrnMt60ANQKaJlTWB%2BRE4RQ8j8ADH&X-Amz-Signature=226dc67f4cbde14f6114e9b047e2489ee9fc56fd8bc5becb30dae563a0ca7e0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EHNHGEQ%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIB12OiZHqg0UmQYF46kKL4qy1BcSNUcONAF9xFS6RYodAiEAlIg2MtymUE5kvDHWacpjRB8jYFQGuXt%2BQrb00HQtcDMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGvyGHlP1osTRS2m0CrcA6wA%2BB2pYMD5l2lC%2FlWQo1vDlkUxOchgOdU4kPyG%2FqjqEmkrI14xnXP8DxaEDnpzhwjVtCiVeoh2HB4G8Hxsc65rFa5pmJiVJCQdTjLgkfOwkeU2jwGBNC9Zyg1J9LuoYANLuVxVGaREOt0URtmZ2tJEcDMCQ7i2a8U5LPfuuzGsLFt1v4ByT4JOoOu1oO3U3z7HJRncRY%2F9K24F3FlZqJYNTWzZ1X6jXZ3fvlqqNRJRwk87lqb8W%2FQ7KQziqjoZ8l793IOYR5qV3dQCHEYdI%2FgaRKuE45NUdzzZbqWk7w30XxjuY%2BjbDgC0rLP5k2%2FWVkD31nX7ZD%2BFLLzP3oiysqoCqXqHnzzZaGbw%2FIM%2F7r90DP4D1ceOEmLVZGNB%2Fa3cYCVVZMtq4OMX6T%2BdPk8ZhyCHUGkGmnOW6XgakRuwH%2FT90LnfYJtu8%2FJDvWwYdHuPGbLxs%2Froq4amnFU48ZgvYTM75TraYJLd%2FWmDMSEqcxCA9ZmtMwSUaKSwJtyydjJZKFwh%2Fm8XxEd718cWpaUVEjzOZlfjhwNwZRYnL5vCuLRez7RqI5MsMnlNGFANp02acm7bvtijzisXkqu1gTcgavLLV%2FqQINCybmlfPGSEFBwcHQX334YiWJvcSagIMPv7stEGOqUBM8lJGFYQyQAIEjTAUxMcKtAUWdChnCDGo%2FAm6k8hikdvH0tSYXtkA6uGilqaTHLtwRR%2B4snJFsHlmAsvIYmitYxw0K0apoJj6mMUpUYV1QBMbYfw5ZAKc2%2Fc8dj%2BRau926o7QXlm6jm1U%2BJQznZApIYG4u5zpR2Z1uSm0ZbjLN1zl7tULcifcI7cqyXpP%2BVqrnMt60ANQKaJlTWB%2BRE4RQ8j8ADH&X-Amz-Signature=7a3f32196b2c46ba61525cfc969d876af73035204558d87e18993df3ae1de620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EHNHGEQ%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIB12OiZHqg0UmQYF46kKL4qy1BcSNUcONAF9xFS6RYodAiEAlIg2MtymUE5kvDHWacpjRB8jYFQGuXt%2BQrb00HQtcDMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGvyGHlP1osTRS2m0CrcA6wA%2BB2pYMD5l2lC%2FlWQo1vDlkUxOchgOdU4kPyG%2FqjqEmkrI14xnXP8DxaEDnpzhwjVtCiVeoh2HB4G8Hxsc65rFa5pmJiVJCQdTjLgkfOwkeU2jwGBNC9Zyg1J9LuoYANLuVxVGaREOt0URtmZ2tJEcDMCQ7i2a8U5LPfuuzGsLFt1v4ByT4JOoOu1oO3U3z7HJRncRY%2F9K24F3FlZqJYNTWzZ1X6jXZ3fvlqqNRJRwk87lqb8W%2FQ7KQziqjoZ8l793IOYR5qV3dQCHEYdI%2FgaRKuE45NUdzzZbqWk7w30XxjuY%2BjbDgC0rLP5k2%2FWVkD31nX7ZD%2BFLLzP3oiysqoCqXqHnzzZaGbw%2FIM%2F7r90DP4D1ceOEmLVZGNB%2Fa3cYCVVZMtq4OMX6T%2BdPk8ZhyCHUGkGmnOW6XgakRuwH%2FT90LnfYJtu8%2FJDvWwYdHuPGbLxs%2Froq4amnFU48ZgvYTM75TraYJLd%2FWmDMSEqcxCA9ZmtMwSUaKSwJtyydjJZKFwh%2Fm8XxEd718cWpaUVEjzOZlfjhwNwZRYnL5vCuLRez7RqI5MsMnlNGFANp02acm7bvtijzisXkqu1gTcgavLLV%2FqQINCybmlfPGSEFBwcHQX334YiWJvcSagIMPv7stEGOqUBM8lJGFYQyQAIEjTAUxMcKtAUWdChnCDGo%2FAm6k8hikdvH0tSYXtkA6uGilqaTHLtwRR%2B4snJFsHlmAsvIYmitYxw0K0apoJj6mMUpUYV1QBMbYfw5ZAKc2%2Fc8dj%2BRau926o7QXlm6jm1U%2BJQznZApIYG4u5zpR2Z1uSm0ZbjLN1zl7tULcifcI7cqyXpP%2BVqrnMt60ANQKaJlTWB%2BRE4RQ8j8ADH&X-Amz-Signature=563f92403bf492246e89abf2d8663bc3ad5dfb626ef50c7f6ac81fea689ecec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EHNHGEQ%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIB12OiZHqg0UmQYF46kKL4qy1BcSNUcONAF9xFS6RYodAiEAlIg2MtymUE5kvDHWacpjRB8jYFQGuXt%2BQrb00HQtcDMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGvyGHlP1osTRS2m0CrcA6wA%2BB2pYMD5l2lC%2FlWQo1vDlkUxOchgOdU4kPyG%2FqjqEmkrI14xnXP8DxaEDnpzhwjVtCiVeoh2HB4G8Hxsc65rFa5pmJiVJCQdTjLgkfOwkeU2jwGBNC9Zyg1J9LuoYANLuVxVGaREOt0URtmZ2tJEcDMCQ7i2a8U5LPfuuzGsLFt1v4ByT4JOoOu1oO3U3z7HJRncRY%2F9K24F3FlZqJYNTWzZ1X6jXZ3fvlqqNRJRwk87lqb8W%2FQ7KQziqjoZ8l793IOYR5qV3dQCHEYdI%2FgaRKuE45NUdzzZbqWk7w30XxjuY%2BjbDgC0rLP5k2%2FWVkD31nX7ZD%2BFLLzP3oiysqoCqXqHnzzZaGbw%2FIM%2F7r90DP4D1ceOEmLVZGNB%2Fa3cYCVVZMtq4OMX6T%2BdPk8ZhyCHUGkGmnOW6XgakRuwH%2FT90LnfYJtu8%2FJDvWwYdHuPGbLxs%2Froq4amnFU48ZgvYTM75TraYJLd%2FWmDMSEqcxCA9ZmtMwSUaKSwJtyydjJZKFwh%2Fm8XxEd718cWpaUVEjzOZlfjhwNwZRYnL5vCuLRez7RqI5MsMnlNGFANp02acm7bvtijzisXkqu1gTcgavLLV%2FqQINCybmlfPGSEFBwcHQX334YiWJvcSagIMPv7stEGOqUBM8lJGFYQyQAIEjTAUxMcKtAUWdChnCDGo%2FAm6k8hikdvH0tSYXtkA6uGilqaTHLtwRR%2B4snJFsHlmAsvIYmitYxw0K0apoJj6mMUpUYV1QBMbYfw5ZAKc2%2Fc8dj%2BRau926o7QXlm6jm1U%2BJQznZApIYG4u5zpR2Z1uSm0ZbjLN1zl7tULcifcI7cqyXpP%2BVqrnMt60ANQKaJlTWB%2BRE4RQ8j8ADH&X-Amz-Signature=377fb30b01204d5fea92f59e55dd139b8b568b154435bed15dde4ef1654fb523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EHNHGEQ%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIB12OiZHqg0UmQYF46kKL4qy1BcSNUcONAF9xFS6RYodAiEAlIg2MtymUE5kvDHWacpjRB8jYFQGuXt%2BQrb00HQtcDMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGvyGHlP1osTRS2m0CrcA6wA%2BB2pYMD5l2lC%2FlWQo1vDlkUxOchgOdU4kPyG%2FqjqEmkrI14xnXP8DxaEDnpzhwjVtCiVeoh2HB4G8Hxsc65rFa5pmJiVJCQdTjLgkfOwkeU2jwGBNC9Zyg1J9LuoYANLuVxVGaREOt0URtmZ2tJEcDMCQ7i2a8U5LPfuuzGsLFt1v4ByT4JOoOu1oO3U3z7HJRncRY%2F9K24F3FlZqJYNTWzZ1X6jXZ3fvlqqNRJRwk87lqb8W%2FQ7KQziqjoZ8l793IOYR5qV3dQCHEYdI%2FgaRKuE45NUdzzZbqWk7w30XxjuY%2BjbDgC0rLP5k2%2FWVkD31nX7ZD%2BFLLzP3oiysqoCqXqHnzzZaGbw%2FIM%2F7r90DP4D1ceOEmLVZGNB%2Fa3cYCVVZMtq4OMX6T%2BdPk8ZhyCHUGkGmnOW6XgakRuwH%2FT90LnfYJtu8%2FJDvWwYdHuPGbLxs%2Froq4amnFU48ZgvYTM75TraYJLd%2FWmDMSEqcxCA9ZmtMwSUaKSwJtyydjJZKFwh%2Fm8XxEd718cWpaUVEjzOZlfjhwNwZRYnL5vCuLRez7RqI5MsMnlNGFANp02acm7bvtijzisXkqu1gTcgavLLV%2FqQINCybmlfPGSEFBwcHQX334YiWJvcSagIMPv7stEGOqUBM8lJGFYQyQAIEjTAUxMcKtAUWdChnCDGo%2FAm6k8hikdvH0tSYXtkA6uGilqaTHLtwRR%2B4snJFsHlmAsvIYmitYxw0K0apoJj6mMUpUYV1QBMbYfw5ZAKc2%2Fc8dj%2BRau926o7QXlm6jm1U%2BJQznZApIYG4u5zpR2Z1uSm0ZbjLN1zl7tULcifcI7cqyXpP%2BVqrnMt60ANQKaJlTWB%2BRE4RQ8j8ADH&X-Amz-Signature=5db3c033839f40fb10fcf1f110f75abcdd83b8b26d63da33d88ae79946d4e12f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EHNHGEQ%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIB12OiZHqg0UmQYF46kKL4qy1BcSNUcONAF9xFS6RYodAiEAlIg2MtymUE5kvDHWacpjRB8jYFQGuXt%2BQrb00HQtcDMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGvyGHlP1osTRS2m0CrcA6wA%2BB2pYMD5l2lC%2FlWQo1vDlkUxOchgOdU4kPyG%2FqjqEmkrI14xnXP8DxaEDnpzhwjVtCiVeoh2HB4G8Hxsc65rFa5pmJiVJCQdTjLgkfOwkeU2jwGBNC9Zyg1J9LuoYANLuVxVGaREOt0URtmZ2tJEcDMCQ7i2a8U5LPfuuzGsLFt1v4ByT4JOoOu1oO3U3z7HJRncRY%2F9K24F3FlZqJYNTWzZ1X6jXZ3fvlqqNRJRwk87lqb8W%2FQ7KQziqjoZ8l793IOYR5qV3dQCHEYdI%2FgaRKuE45NUdzzZbqWk7w30XxjuY%2BjbDgC0rLP5k2%2FWVkD31nX7ZD%2BFLLzP3oiysqoCqXqHnzzZaGbw%2FIM%2F7r90DP4D1ceOEmLVZGNB%2Fa3cYCVVZMtq4OMX6T%2BdPk8ZhyCHUGkGmnOW6XgakRuwH%2FT90LnfYJtu8%2FJDvWwYdHuPGbLxs%2Froq4amnFU48ZgvYTM75TraYJLd%2FWmDMSEqcxCA9ZmtMwSUaKSwJtyydjJZKFwh%2Fm8XxEd718cWpaUVEjzOZlfjhwNwZRYnL5vCuLRez7RqI5MsMnlNGFANp02acm7bvtijzisXkqu1gTcgavLLV%2FqQINCybmlfPGSEFBwcHQX334YiWJvcSagIMPv7stEGOqUBM8lJGFYQyQAIEjTAUxMcKtAUWdChnCDGo%2FAm6k8hikdvH0tSYXtkA6uGilqaTHLtwRR%2B4snJFsHlmAsvIYmitYxw0K0apoJj6mMUpUYV1QBMbYfw5ZAKc2%2Fc8dj%2BRau926o7QXlm6jm1U%2BJQznZApIYG4u5zpR2Z1uSm0ZbjLN1zl7tULcifcI7cqyXpP%2BVqrnMt60ANQKaJlTWB%2BRE4RQ8j8ADH&X-Amz-Signature=c56dc3d3d7e0700a4857a627caf7b48ad583a5668d9ae49f66d2bc34f07ce2e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EHNHGEQ%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIB12OiZHqg0UmQYF46kKL4qy1BcSNUcONAF9xFS6RYodAiEAlIg2MtymUE5kvDHWacpjRB8jYFQGuXt%2BQrb00HQtcDMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGvyGHlP1osTRS2m0CrcA6wA%2BB2pYMD5l2lC%2FlWQo1vDlkUxOchgOdU4kPyG%2FqjqEmkrI14xnXP8DxaEDnpzhwjVtCiVeoh2HB4G8Hxsc65rFa5pmJiVJCQdTjLgkfOwkeU2jwGBNC9Zyg1J9LuoYANLuVxVGaREOt0URtmZ2tJEcDMCQ7i2a8U5LPfuuzGsLFt1v4ByT4JOoOu1oO3U3z7HJRncRY%2F9K24F3FlZqJYNTWzZ1X6jXZ3fvlqqNRJRwk87lqb8W%2FQ7KQziqjoZ8l793IOYR5qV3dQCHEYdI%2FgaRKuE45NUdzzZbqWk7w30XxjuY%2BjbDgC0rLP5k2%2FWVkD31nX7ZD%2BFLLzP3oiysqoCqXqHnzzZaGbw%2FIM%2F7r90DP4D1ceOEmLVZGNB%2Fa3cYCVVZMtq4OMX6T%2BdPk8ZhyCHUGkGmnOW6XgakRuwH%2FT90LnfYJtu8%2FJDvWwYdHuPGbLxs%2Froq4amnFU48ZgvYTM75TraYJLd%2FWmDMSEqcxCA9ZmtMwSUaKSwJtyydjJZKFwh%2Fm8XxEd718cWpaUVEjzOZlfjhwNwZRYnL5vCuLRez7RqI5MsMnlNGFANp02acm7bvtijzisXkqu1gTcgavLLV%2FqQINCybmlfPGSEFBwcHQX334YiWJvcSagIMPv7stEGOqUBM8lJGFYQyQAIEjTAUxMcKtAUWdChnCDGo%2FAm6k8hikdvH0tSYXtkA6uGilqaTHLtwRR%2B4snJFsHlmAsvIYmitYxw0K0apoJj6mMUpUYV1QBMbYfw5ZAKc2%2Fc8dj%2BRau926o7QXlm6jm1U%2BJQznZApIYG4u5zpR2Z1uSm0ZbjLN1zl7tULcifcI7cqyXpP%2BVqrnMt60ANQKaJlTWB%2BRE4RQ8j8ADH&X-Amz-Signature=cee6f080244029c17b86e213494d059ffa05b89ffeaacfb05fbb172f71c526b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EHNHGEQ%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIB12OiZHqg0UmQYF46kKL4qy1BcSNUcONAF9xFS6RYodAiEAlIg2MtymUE5kvDHWacpjRB8jYFQGuXt%2BQrb00HQtcDMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGvyGHlP1osTRS2m0CrcA6wA%2BB2pYMD5l2lC%2FlWQo1vDlkUxOchgOdU4kPyG%2FqjqEmkrI14xnXP8DxaEDnpzhwjVtCiVeoh2HB4G8Hxsc65rFa5pmJiVJCQdTjLgkfOwkeU2jwGBNC9Zyg1J9LuoYANLuVxVGaREOt0URtmZ2tJEcDMCQ7i2a8U5LPfuuzGsLFt1v4ByT4JOoOu1oO3U3z7HJRncRY%2F9K24F3FlZqJYNTWzZ1X6jXZ3fvlqqNRJRwk87lqb8W%2FQ7KQziqjoZ8l793IOYR5qV3dQCHEYdI%2FgaRKuE45NUdzzZbqWk7w30XxjuY%2BjbDgC0rLP5k2%2FWVkD31nX7ZD%2BFLLzP3oiysqoCqXqHnzzZaGbw%2FIM%2F7r90DP4D1ceOEmLVZGNB%2Fa3cYCVVZMtq4OMX6T%2BdPk8ZhyCHUGkGmnOW6XgakRuwH%2FT90LnfYJtu8%2FJDvWwYdHuPGbLxs%2Froq4amnFU48ZgvYTM75TraYJLd%2FWmDMSEqcxCA9ZmtMwSUaKSwJtyydjJZKFwh%2Fm8XxEd718cWpaUVEjzOZlfjhwNwZRYnL5vCuLRez7RqI5MsMnlNGFANp02acm7bvtijzisXkqu1gTcgavLLV%2FqQINCybmlfPGSEFBwcHQX334YiWJvcSagIMPv7stEGOqUBM8lJGFYQyQAIEjTAUxMcKtAUWdChnCDGo%2FAm6k8hikdvH0tSYXtkA6uGilqaTHLtwRR%2B4snJFsHlmAsvIYmitYxw0K0apoJj6mMUpUYV1QBMbYfw5ZAKc2%2Fc8dj%2BRau926o7QXlm6jm1U%2BJQznZApIYG4u5zpR2Z1uSm0ZbjLN1zl7tULcifcI7cqyXpP%2BVqrnMt60ANQKaJlTWB%2BRE4RQ8j8ADH&X-Amz-Signature=3e3b313a380e0f1f7f884c2f93ed3f2ca52d020ef63c6985ed7ed27bcc9c1c1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EHNHGEQ%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIB12OiZHqg0UmQYF46kKL4qy1BcSNUcONAF9xFS6RYodAiEAlIg2MtymUE5kvDHWacpjRB8jYFQGuXt%2BQrb00HQtcDMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGvyGHlP1osTRS2m0CrcA6wA%2BB2pYMD5l2lC%2FlWQo1vDlkUxOchgOdU4kPyG%2FqjqEmkrI14xnXP8DxaEDnpzhwjVtCiVeoh2HB4G8Hxsc65rFa5pmJiVJCQdTjLgkfOwkeU2jwGBNC9Zyg1J9LuoYANLuVxVGaREOt0URtmZ2tJEcDMCQ7i2a8U5LPfuuzGsLFt1v4ByT4JOoOu1oO3U3z7HJRncRY%2F9K24F3FlZqJYNTWzZ1X6jXZ3fvlqqNRJRwk87lqb8W%2FQ7KQziqjoZ8l793IOYR5qV3dQCHEYdI%2FgaRKuE45NUdzzZbqWk7w30XxjuY%2BjbDgC0rLP5k2%2FWVkD31nX7ZD%2BFLLzP3oiysqoCqXqHnzzZaGbw%2FIM%2F7r90DP4D1ceOEmLVZGNB%2Fa3cYCVVZMtq4OMX6T%2BdPk8ZhyCHUGkGmnOW6XgakRuwH%2FT90LnfYJtu8%2FJDvWwYdHuPGbLxs%2Froq4amnFU48ZgvYTM75TraYJLd%2FWmDMSEqcxCA9ZmtMwSUaKSwJtyydjJZKFwh%2Fm8XxEd718cWpaUVEjzOZlfjhwNwZRYnL5vCuLRez7RqI5MsMnlNGFANp02acm7bvtijzisXkqu1gTcgavLLV%2FqQINCybmlfPGSEFBwcHQX334YiWJvcSagIMPv7stEGOqUBM8lJGFYQyQAIEjTAUxMcKtAUWdChnCDGo%2FAm6k8hikdvH0tSYXtkA6uGilqaTHLtwRR%2B4snJFsHlmAsvIYmitYxw0K0apoJj6mMUpUYV1QBMbYfw5ZAKc2%2Fc8dj%2BRau926o7QXlm6jm1U%2BJQznZApIYG4u5zpR2Z1uSm0ZbjLN1zl7tULcifcI7cqyXpP%2BVqrnMt60ANQKaJlTWB%2BRE4RQ8j8ADH&X-Amz-Signature=7562b5c924853ba82530502cf35f49e4e498c40fa098d56fa3fe656abdf5c342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EHNHGEQ%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIB12OiZHqg0UmQYF46kKL4qy1BcSNUcONAF9xFS6RYodAiEAlIg2MtymUE5kvDHWacpjRB8jYFQGuXt%2BQrb00HQtcDMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGvyGHlP1osTRS2m0CrcA6wA%2BB2pYMD5l2lC%2FlWQo1vDlkUxOchgOdU4kPyG%2FqjqEmkrI14xnXP8DxaEDnpzhwjVtCiVeoh2HB4G8Hxsc65rFa5pmJiVJCQdTjLgkfOwkeU2jwGBNC9Zyg1J9LuoYANLuVxVGaREOt0URtmZ2tJEcDMCQ7i2a8U5LPfuuzGsLFt1v4ByT4JOoOu1oO3U3z7HJRncRY%2F9K24F3FlZqJYNTWzZ1X6jXZ3fvlqqNRJRwk87lqb8W%2FQ7KQziqjoZ8l793IOYR5qV3dQCHEYdI%2FgaRKuE45NUdzzZbqWk7w30XxjuY%2BjbDgC0rLP5k2%2FWVkD31nX7ZD%2BFLLzP3oiysqoCqXqHnzzZaGbw%2FIM%2F7r90DP4D1ceOEmLVZGNB%2Fa3cYCVVZMtq4OMX6T%2BdPk8ZhyCHUGkGmnOW6XgakRuwH%2FT90LnfYJtu8%2FJDvWwYdHuPGbLxs%2Froq4amnFU48ZgvYTM75TraYJLd%2FWmDMSEqcxCA9ZmtMwSUaKSwJtyydjJZKFwh%2Fm8XxEd718cWpaUVEjzOZlfjhwNwZRYnL5vCuLRez7RqI5MsMnlNGFANp02acm7bvtijzisXkqu1gTcgavLLV%2FqQINCybmlfPGSEFBwcHQX334YiWJvcSagIMPv7stEGOqUBM8lJGFYQyQAIEjTAUxMcKtAUWdChnCDGo%2FAm6k8hikdvH0tSYXtkA6uGilqaTHLtwRR%2B4snJFsHlmAsvIYmitYxw0K0apoJj6mMUpUYV1QBMbYfw5ZAKc2%2Fc8dj%2BRau926o7QXlm6jm1U%2BJQznZApIYG4u5zpR2Z1uSm0ZbjLN1zl7tULcifcI7cqyXpP%2BVqrnMt60ANQKaJlTWB%2BRE4RQ8j8ADH&X-Amz-Signature=72b6099b1e0d4b15e3cf92b8adc54d1d25bc0be015f35654fcf296552344df75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RIMSQIG%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCID5HSfuK1F9G0siTivrjHg78%2BdQ4CJz9i2%2ByqOzZlvOdAiBlpGNlZ3WHrzPfhIyATTp%2BNKVdaCqmDS17NMYBkNVj1Cr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMOBsgusLHmhmMAK%2BrKtwDSLwnRWCA9Un1Z9%2FP%2BVrdOOwSZkBIwZZ6Xb%2Fpeo%2FOeO4if3LKeiAizDxGIrkvEyQlelduz2SbEwLgYrj05KMWnAPUm3YLZP0QKFtodAiqG0tUycWtOK%2Fp9%2BfrXvVS%2B2c7etimtVYUKjE7vGkRtfFR5ttVPzRIHQThD1cyY%2FTfi1Z%2F3st4x4dHiWHqKIrDHpwOoBi4GU8mB52ohPmOwb%2BDFP2ck6HHq8YkaqezlmJFy%2F3xbI38U%2FS1G5YuDY8%2BWco3mPv7eCD2Dq1RGietFWvc7OfmFXFNum9iFVljPIpTVMhkB67Qg39SB0NA7FjuTUpVqs0ACWXdLIKBojz%2BIzFy89%2F5j6o8b62yl8OcMbWtzCntsWccwq7SIpaPvSrLOzP%2BzHcBtm3EezDSS3oTgd3qVhe55ob4uoIfFiIzmRimd%2B8Ua7ApUQhgmEgVU3N%2FiDc925VmfjUjKpvdSHUYlWRhUtzp%2F538WfzXO5Bjl1%2FWOO0Z4%2F2dsf9%2FwKN2iDQi2rL%2FUfx0ElVjQ%2FBgSc1hwjRxtdpZIzAxVM3XraBLB9ScoJk9RSrMiOEN5saiAGoZSaYWD3fkO%2FQ150gcecMA1Vl0n0hK20T1GsPrrIXqDwFel4OX1ZFxal3ZSL63lhQw5vyy0QY6pgGvZLUPKshzdC%2FzEdf60lnlsBPjAF5%2BcUTx9IXkAd6q%2FPEb%2FHvjfgfjWlv%2BQF27pPBQevLDmtlEFczIvzU5XC0D25QIvJcz4KuuBeXY%2FUAHtFtZ2ohhm8TQr%2BSMDUmop2fD5IGqDwMW9gYhQX1O5gSooBAXO8iDEt5Cwpz%2B0ww4PXkYDEsFdpYK2HQBC8fWrZvptp%2FDd7hYPGuxAnUhymvB0z9hK2xB&X-Amz-Signature=1061a4b34cfc38df23fe6589a305ed721f3077ecb331735129ba7283f67d6668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LWZGUBJ%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIFArTh3leRTUl7ts2E8G%2B7Sd2%2BjKK9yZ%2FGeBT6oIYpb6AiEA4auNtmjF7cfZhN6R3yhORW4z06Fhuebj9ezQRPlJt7Uq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDBPZr1ez%2FiyBnb8IeSrcA4Sd5Atzo%2FtIYyLUHsYHFJxL5TXVhVi6zpgOw97Uop1xQKRtiMeFmAXK0g9%2Fe013qFl7UIn5bWdTxJQRxihL2zJ1TiSoLHvFJqb7ZiJDHwjA9b6Dh%2FYRMn6PP2YrfNMGoxL2EZWVIHQs20TgB1TuFzgA5Vwck0ZgFnZMYI9vdQMHYsiLiPkIyEgmY%2B3ProqUWe4qFwxyJrHU0TVhGtAAFdIhcke%2BKygI7jACL%2F5TyIZLF%2BAbK5ktApw2T4wh8EmLrnqewfCrgKE1ixPOLZktKiDdGrf4Zbyp49B%2Fsw9uB8CSrzSy7HD7l7oky5KVjywa67qy57a%2BdM2JyNm9guDKle9HbmPbykkiU08wO4joSWTGiqRIroaAVoieUi8Nyq21zgKJPIfReH%2BTKDNmXCBTCW72wsg%2B99fXO71DSuzTlPZCUd8sfX%2Bq0YjlZZndBwcvtnOzMbBM3RSpCx%2BlIrZUxuDi%2F3UqE181RXP3Nh8ITyjoUY5wR%2Fgtz1t6VyAV1onsyGZwkQVuLLW2D6kTvcBA5HHwTqz%2Fx4y%2FlG1ILimQ%2FsjH6I31vAbOFyXOK0qAkVIgqkogU8tXnvqcdxr21B8mTLS5LIk9JLR0jJK%2FJOqJJBp4T3uPeJI%2BzfaDAx2UMPP6stEGOqUBDXf6nKwsCrriOevOysOsOSlrRoBJ2rvLivsfiS2DM1%2BvJHx8XTnz2Bp7mLqhOmLK5T3PBSDR0YUWiwrO9D9%2Bg9608BSFKZ%2BmdyCcBfz%2Bup9l7touXMoRIZx1VZZJTxr5Drp1tKNLUHmOj7MTpTa%2BemardsANsaCKlAjXmAW%2BQOdkeB2TEJvZY59BORejOPVlb6SF8kpQH6y3qM%2BTUjE43Ypl9KV0&X-Amz-Signature=d7bad4c90ce7fa21dba094b2ccfbc72422be0059f76193c4c71f5d9dee48e8dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TT6KOLS%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIBWUKlIbRq%2B6CPs%2F86We9wWTYyIlPQ0To2x5ujaGXK6WAiA0%2F7IYO3lLY419st%2FfgTx9UTZxJAOSZXOZuAdbGV4ygir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMhKUvYHiWJgx4CD0dKtwDZ3QBUm1bexy5fFy7naf0ziWTXvLZmnaZMXze8zXib0huChcmiQGrvX2xEg8VE8%2FEy794UGELlqepfTYMkGqscCikXC%2BBVd6BuluwBtxwYwlwNmakii%2FgnLCb1WKPcKgZpTiyfE7HKYOfng62tC44YtO5OsLtKOm8VGEzk0PYbiRsCKkufM8PzVA8tbOePIgFhKHQGXu26Zyk8U7zWqZOdJtJ4opDqO%2FnKa1Ryzb9UrBIxCDsAduWVRsPHVpdpLn40P%2BfDplPr3VUGJKIHKw68Z%2BK9E%2B8o59KkfXgyM2Wm3z%2FFIRDL%2Bm8SkwkmHO%2BrlxxgTdkP4kk%2Bc46zBhdTyvwiCfS3b7iNRXV0roUG%2Fl4AaxLAzyHS3mFdNVZtPUXJvImn2sgnrmZ%2BJfeOqh5fb2CRX9xS%2Fs3OM6r%2FS7MtShBsbHnDxPVzBF7o9%2Fh0pU6STk57Wxbnya%2FJpGb%2FPwP3XhOAuE5JMQ9iFYBsQFDliqeoMNAK6pfu89Yu3kyd%2BfChvdOVfagZw6MJ%2FIiPGc1OfZa%2FWbMG7QxWVf%2BZbM4TesMTDP9gOAR97QpWwjNA7erLtwWm%2Bs4bWLbiHYIlHLflQorxrMfsN%2BMwN4Bl2a3eXGCxMZEI5rHZtriMlTh2fMw7fmy0QY6pgEYVFCO2CqCULyh23IRjbG2hlUeZDn3Zta50JKRW2qfNMwkwzEXXBIq%2F74ySUDAMA5zMiKuKXrcLIve9vpwFmbF9ESwXLhik0KkAcLZWN86CgmaGazXH%2FuH9S1AR7pvh4%2FIGbr%2FIw6xJpjltXp2%2FgY3Xlr%2BrEY36e%2B%2FEchjCVQpI0ULR4ORmzLiIRxIaqMIGSDFtF6qTCkK47Wb3aJg3w3%2Fe79WSla7&X-Amz-Signature=e64a3e1c1a5feb480528ad612696fd451858ccda5c3efdfd1d0e8a5d92b38947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EHNHGEQ%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIB12OiZHqg0UmQYF46kKL4qy1BcSNUcONAF9xFS6RYodAiEAlIg2MtymUE5kvDHWacpjRB8jYFQGuXt%2BQrb00HQtcDMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGvyGHlP1osTRS2m0CrcA6wA%2BB2pYMD5l2lC%2FlWQo1vDlkUxOchgOdU4kPyG%2FqjqEmkrI14xnXP8DxaEDnpzhwjVtCiVeoh2HB4G8Hxsc65rFa5pmJiVJCQdTjLgkfOwkeU2jwGBNC9Zyg1J9LuoYANLuVxVGaREOt0URtmZ2tJEcDMCQ7i2a8U5LPfuuzGsLFt1v4ByT4JOoOu1oO3U3z7HJRncRY%2F9K24F3FlZqJYNTWzZ1X6jXZ3fvlqqNRJRwk87lqb8W%2FQ7KQziqjoZ8l793IOYR5qV3dQCHEYdI%2FgaRKuE45NUdzzZbqWk7w30XxjuY%2BjbDgC0rLP5k2%2FWVkD31nX7ZD%2BFLLzP3oiysqoCqXqHnzzZaGbw%2FIM%2F7r90DP4D1ceOEmLVZGNB%2Fa3cYCVVZMtq4OMX6T%2BdPk8ZhyCHUGkGmnOW6XgakRuwH%2FT90LnfYJtu8%2FJDvWwYdHuPGbLxs%2Froq4amnFU48ZgvYTM75TraYJLd%2FWmDMSEqcxCA9ZmtMwSUaKSwJtyydjJZKFwh%2Fm8XxEd718cWpaUVEjzOZlfjhwNwZRYnL5vCuLRez7RqI5MsMnlNGFANp02acm7bvtijzisXkqu1gTcgavLLV%2FqQINCybmlfPGSEFBwcHQX334YiWJvcSagIMPv7stEGOqUBM8lJGFYQyQAIEjTAUxMcKtAUWdChnCDGo%2FAm6k8hikdvH0tSYXtkA6uGilqaTHLtwRR%2B4snJFsHlmAsvIYmitYxw0K0apoJj6mMUpUYV1QBMbYfw5ZAKc2%2Fc8dj%2BRau926o7QXlm6jm1U%2BJQznZApIYG4u5zpR2Z1uSm0ZbjLN1zl7tULcifcI7cqyXpP%2BVqrnMt60ANQKaJlTWB%2BRE4RQ8j8ADH&X-Amz-Signature=724bf5821e5045df218d95c518181bbefa78c046aaeae3cb7e55dd066f4650c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HSLDBD7%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIBR0EDL%2FI76o5YyKxoETncLeyO97SkGFpNn9m%2FVosUZBAiEAtGzJ3W0pbQxdp%2FXRRfT9nXVwpOfNKDzk%2BEwbY%2FtV%2BsUq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDExoJt444aDMHqOmeyrcA0%2F%2F1ZgLeGp84SntSD3zpEWoarhdwC0T0Aa0jk2GFIWY57dBm8qJVaVW3VXECTESnM8EdjfptpnDOLeRkYwS3ncuoDFSJh%2BLuTuuo%2BxS6AUh1HhPA6JB3nCYN3ZossnIeoCLipHTJa4wPV9GyTYjlWd8k9igdOF3pSwIGVjExePrVKDe8ovqGz2mhfua2blCka5CXB9xeKS72FjW2W4AnSa%2BoXJa7KGKDChGRvBX%2BbJzPZ1Uj01Ij2KY8hsEi7E9sSQV2AbbbVQsoDg7vYC8OcEm8F7CnLADaOe%2BhgmqnJqA7wJDF3XNKBLhNrfDjDEqXOop1GpnMNOM5dxA6iDhJ%2BBOg7iifRdeiyn0YLZD4SjOYFahpJcXmcNcK82uMq9zPy1Cujm%2FKDgAvRlY3Faxm0jY%2Bz2%2BdVY35OMMQkMoBPbOYfYquwebt%2B3diLapi%2FSUluzpsql6gW1pA6Uov2SNoOafyTYotqV3RBSRiutXSyEOvskmDCnRqQNKIB5kX6Hf0yGbOJNkCS8DhlbOqmtK2alH9TZ27EOOhc0kYQIXPKU8Hy8XK5oFzvqBqd0s2yo08jgNuyCHqKOWUSFPQHdaR7YMPBsdZ5LKNhBELZGnwtSbKjtg%2BWHgO9oTpH%2FjMMr6stEGOqUBMlg6y%2F3960DNDY77XZPDmhgSwsoaGMAGTND3l5RLKeK69CFqXsmlnykXQKy8HlvJnLGM%2BdxrHFq9Weqs207wQWRTxiv19EsRcEnl6JAi5cVEZl%2B0LKjGYUnovgrK1YdBmY%2FD%2BaZVFH%2F42RyBCjXtzodxnprAytfEDGDdV%2B9KmS2z1DEotsOXiYQfj843tAUtpbZxGbbyftQLAhjJO8BqQ8CYx5D2&X-Amz-Signature=70339e3fbf5bc332e0680aebdf0414b47ba4dfacf4dfdd76729bff82f361bac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EHNHGEQ%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIB12OiZHqg0UmQYF46kKL4qy1BcSNUcONAF9xFS6RYodAiEAlIg2MtymUE5kvDHWacpjRB8jYFQGuXt%2BQrb00HQtcDMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGvyGHlP1osTRS2m0CrcA6wA%2BB2pYMD5l2lC%2FlWQo1vDlkUxOchgOdU4kPyG%2FqjqEmkrI14xnXP8DxaEDnpzhwjVtCiVeoh2HB4G8Hxsc65rFa5pmJiVJCQdTjLgkfOwkeU2jwGBNC9Zyg1J9LuoYANLuVxVGaREOt0URtmZ2tJEcDMCQ7i2a8U5LPfuuzGsLFt1v4ByT4JOoOu1oO3U3z7HJRncRY%2F9K24F3FlZqJYNTWzZ1X6jXZ3fvlqqNRJRwk87lqb8W%2FQ7KQziqjoZ8l793IOYR5qV3dQCHEYdI%2FgaRKuE45NUdzzZbqWk7w30XxjuY%2BjbDgC0rLP5k2%2FWVkD31nX7ZD%2BFLLzP3oiysqoCqXqHnzzZaGbw%2FIM%2F7r90DP4D1ceOEmLVZGNB%2Fa3cYCVVZMtq4OMX6T%2BdPk8ZhyCHUGkGmnOW6XgakRuwH%2FT90LnfYJtu8%2FJDvWwYdHuPGbLxs%2Froq4amnFU48ZgvYTM75TraYJLd%2FWmDMSEqcxCA9ZmtMwSUaKSwJtyydjJZKFwh%2Fm8XxEd718cWpaUVEjzOZlfjhwNwZRYnL5vCuLRez7RqI5MsMnlNGFANp02acm7bvtijzisXkqu1gTcgavLLV%2FqQINCybmlfPGSEFBwcHQX334YiWJvcSagIMPv7stEGOqUBM8lJGFYQyQAIEjTAUxMcKtAUWdChnCDGo%2FAm6k8hikdvH0tSYXtkA6uGilqaTHLtwRR%2B4snJFsHlmAsvIYmitYxw0K0apoJj6mMUpUYV1QBMbYfw5ZAKc2%2Fc8dj%2BRau926o7QXlm6jm1U%2BJQznZApIYG4u5zpR2Z1uSm0ZbjLN1zl7tULcifcI7cqyXpP%2BVqrnMt60ANQKaJlTWB%2BRE4RQ8j8ADH&X-Amz-Signature=89b3ea302fc6bc281756fda1d210a99f151294dd1dd0aa27f5674f9c33d93b22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUXLWGXH%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCfDl4Rtm%2Blykeh1QboWBgwYxohJ9iMeJ7%2F1t27nW%2B3ygIgHfORESk2%2B7milEXkmmxDgcNwfd%2FL%2FZBZAAZNp4Qe0Z0q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDCImw4tyGlPO7imkCSrcA5BMqsP9UCwyNApEqM8J4R%2F9BA5MmsV3uQeAgDzeWCYDs9%2FkJirg1mDV%2FpOnQakbvGhITyVxY8y8XDHZaDHNp50eAYrBbDpbDxNjgcvEQs%2FkdeUa6rC%2FN70GI6y%2BR7TWnykbr6GwUj0J1odJsN7LOxvdHTrzpAmtiAiv6mkugDGahrtp1PsNe1tLdomkgL7WHSVQrWZAYAErvhL9kXxP1hjVNpwKh%2FvtlnNd5rHv3gW1dzQMFWOxusRxVmdpvJbj90tSNLGuFQxlkt4j37biApH6AnbH6hpm67yvDBQGX9lFGZjHAb9qNcuI14BuBTFYiVx2XFQzCTBsaBUn9Cgr1gjrEatBQbPxY4zai9SWXioGoggB1JNYSWARZPTCqn3UuZJygZKO%2F71glk1XyBngva5fN%2B2lcq%2BDdZirPuh6YYnM0px7GLlAARcjjHBV6MMUHHhw0aM8wb1hAxr9NfuXzk45az0C2hBjY6M%2B6%2BybRGguP0vkTfxV5RQAgXkbxVtAETeGnJUClQmTnstlOLjNtaXKDCoYSWcorjIzKepfZkAIe54AVsuYB3Eh3wkg93TYTkDJMsrwb%2B7g1jZS%2BX8Hv21uUBC8%2FvroVyBDq%2FM3qNXK4I5vEAC%2B4aJH8DhLMIb6stEGOqUB6eTt%2FHj9We%2BZr2LY9gi12ebDeoqZ9keoy%2BjSlHvSiJJncjCCcouN6z5GxiJ%2Bg6eiRVUpzZ9yb3Yd0HE%2F34LD9y72R0gJhA1FYpEh0YTjBOzVlID2TPNG7s%2Bjtf1pKJEyFGL%2Bg%2BwgOghd2ZOVwt7IY9Bkhy3MQMb95VpMQupdPZUJrWMpaI8sriE43NEYUP5eYxZqRdX3HQ9BvSFBeewnXNc9Y6PD&X-Amz-Signature=795a19cb59d3c4da56e516e2b533994278348a7d69e5377c693eb664e46dcdc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EHNHGEQ%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIB12OiZHqg0UmQYF46kKL4qy1BcSNUcONAF9xFS6RYodAiEAlIg2MtymUE5kvDHWacpjRB8jYFQGuXt%2BQrb00HQtcDMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGvyGHlP1osTRS2m0CrcA6wA%2BB2pYMD5l2lC%2FlWQo1vDlkUxOchgOdU4kPyG%2FqjqEmkrI14xnXP8DxaEDnpzhwjVtCiVeoh2HB4G8Hxsc65rFa5pmJiVJCQdTjLgkfOwkeU2jwGBNC9Zyg1J9LuoYANLuVxVGaREOt0URtmZ2tJEcDMCQ7i2a8U5LPfuuzGsLFt1v4ByT4JOoOu1oO3U3z7HJRncRY%2F9K24F3FlZqJYNTWzZ1X6jXZ3fvlqqNRJRwk87lqb8W%2FQ7KQziqjoZ8l793IOYR5qV3dQCHEYdI%2FgaRKuE45NUdzzZbqWk7w30XxjuY%2BjbDgC0rLP5k2%2FWVkD31nX7ZD%2BFLLzP3oiysqoCqXqHnzzZaGbw%2FIM%2F7r90DP4D1ceOEmLVZGNB%2Fa3cYCVVZMtq4OMX6T%2BdPk8ZhyCHUGkGmnOW6XgakRuwH%2FT90LnfYJtu8%2FJDvWwYdHuPGbLxs%2Froq4amnFU48ZgvYTM75TraYJLd%2FWmDMSEqcxCA9ZmtMwSUaKSwJtyydjJZKFwh%2Fm8XxEd718cWpaUVEjzOZlfjhwNwZRYnL5vCuLRez7RqI5MsMnlNGFANp02acm7bvtijzisXkqu1gTcgavLLV%2FqQINCybmlfPGSEFBwcHQX334YiWJvcSagIMPv7stEGOqUBM8lJGFYQyQAIEjTAUxMcKtAUWdChnCDGo%2FAm6k8hikdvH0tSYXtkA6uGilqaTHLtwRR%2B4snJFsHlmAsvIYmitYxw0K0apoJj6mMUpUYV1QBMbYfw5ZAKc2%2Fc8dj%2BRau926o7QXlm6jm1U%2BJQznZApIYG4u5zpR2Z1uSm0ZbjLN1zl7tULcifcI7cqyXpP%2BVqrnMt60ANQKaJlTWB%2BRE4RQ8j8ADH&X-Amz-Signature=ad303897dd89f5790863a89bf1622d78f88e7a9172fa21e793adc78e4fb466bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FJPI53E%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCEr0CHVQavY8%2BJ76hAdf4DaZZFcDptcGYTvuve2ENMqgIgClfG3JR%2BAE8okqE%2FiweWbPL8Ct5Rd1yGP4QX%2BAob95Mq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDA2XWQPlvNk7F3VkXCrcA8JnS4jbr6W3h7L4LC3%2FH3qqJYTtFnwP%2FeLrA581HbJvKdPP5dpPq7wVQ9SwgP%2BSHiBicm9AFg58nbpPhAunwvdz9dGkR6mXwNWUHZiDP2Q%2FBijQHW%2FQ%2BbXAGKQxn1OTuyfOJ7ztlYxV5djWF7sIDPD49mGFuVKbZGbYetDivDNopg%2B3SWE1oIxPz5fxUHE95hjEA6g8IIiV9X%2BEr43QPBdrGfCUHguueWSWhMPcZHFiTCZuI9qvSACHfpMSUEgXxfih4hljY0sCg%2FqsV8nMSc0DLiyZFXLWOx8Da0sdXzXHup250Jlg9s%2FlICoYHMKaUn%2Bm7yne%2FJKSALYI0OS68Y0eT24Kd4JzukfazENYcfWB%2Blu7IVdnTqPfDNI7rPVtseM4lGXZFUcEyKXAfYT47dH73AazvQP%2FmewpWskwJPDV%2Ffh%2B9y%2Bnre3AZaT3pqQDsv9hGS321l7lPYrM0qD%2FqHLnhza%2FsUC5JFuZX5UM%2FdmCDIsrCT7Bhv%2FjTretdrM5y8Xo%2FqMISL8mKs4j%2BxVYFqBXVwwKPUvNtSj%2Bu2BbhsI%2BjOzfxLq7W%2F9AU%2BXs87TenoteKgzC7g3N58Qd85wBedzvhKy4Cz2nBWH50%2FR1ZbGUOXqJMeN4fyqUP%2BvuMMn6stEGOqUBajnwwoZy3hHeiXBOTGi5dibznPTyvLSLATAjFlSaAfyY2ctl%2BL1LYQM33gd4YFFildONmpbvylMHUofd7AqSD5Wmx7OQAVHW7JJdhdHQBYMFyX%2FfRq7qgDI1lvJ3TTQcLFEvSknCh%2BgmtfWNqOUv3EL%2FjAQQKhS1v96DV6tE4MLUH8E%2B6ZcQ16fQRV8gx4Khbs4JSl%2B7%2FndmQBXUmMXLBfPPogv%2B&X-Amz-Signature=22160239a9c32ded955350b79c03c0338ad8f8e47e73aa55e2636a58b6bf350f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EHNHGEQ%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIB12OiZHqg0UmQYF46kKL4qy1BcSNUcONAF9xFS6RYodAiEAlIg2MtymUE5kvDHWacpjRB8jYFQGuXt%2BQrb00HQtcDMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGvyGHlP1osTRS2m0CrcA6wA%2BB2pYMD5l2lC%2FlWQo1vDlkUxOchgOdU4kPyG%2FqjqEmkrI14xnXP8DxaEDnpzhwjVtCiVeoh2HB4G8Hxsc65rFa5pmJiVJCQdTjLgkfOwkeU2jwGBNC9Zyg1J9LuoYANLuVxVGaREOt0URtmZ2tJEcDMCQ7i2a8U5LPfuuzGsLFt1v4ByT4JOoOu1oO3U3z7HJRncRY%2F9K24F3FlZqJYNTWzZ1X6jXZ3fvlqqNRJRwk87lqb8W%2FQ7KQziqjoZ8l793IOYR5qV3dQCHEYdI%2FgaRKuE45NUdzzZbqWk7w30XxjuY%2BjbDgC0rLP5k2%2FWVkD31nX7ZD%2BFLLzP3oiysqoCqXqHnzzZaGbw%2FIM%2F7r90DP4D1ceOEmLVZGNB%2Fa3cYCVVZMtq4OMX6T%2BdPk8ZhyCHUGkGmnOW6XgakRuwH%2FT90LnfYJtu8%2FJDvWwYdHuPGbLxs%2Froq4amnFU48ZgvYTM75TraYJLd%2FWmDMSEqcxCA9ZmtMwSUaKSwJtyydjJZKFwh%2Fm8XxEd718cWpaUVEjzOZlfjhwNwZRYnL5vCuLRez7RqI5MsMnlNGFANp02acm7bvtijzisXkqu1gTcgavLLV%2FqQINCybmlfPGSEFBwcHQX334YiWJvcSagIMPv7stEGOqUBM8lJGFYQyQAIEjTAUxMcKtAUWdChnCDGo%2FAm6k8hikdvH0tSYXtkA6uGilqaTHLtwRR%2B4snJFsHlmAsvIYmitYxw0K0apoJj6mMUpUYV1QBMbYfw5ZAKc2%2Fc8dj%2BRau926o7QXlm6jm1U%2BJQznZApIYG4u5zpR2Z1uSm0ZbjLN1zl7tULcifcI7cqyXpP%2BVqrnMt60ANQKaJlTWB%2BRE4RQ8j8ADH&X-Amz-Signature=3273cee63a2781c77ea10139807fb42628f961dadba21a443207bcda17786488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU4WUKBA%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAMJhUrmn5lrsg1vn0tL2ELCf5rInGb%2BkNUPrlZt4Cy9AiA7WV7f39QjbrPGzROoyynWnguqb2X01ES8hT%2BFsNYncir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMWx8z%2FVV4p6BFnsDJKtwDl7HuvhD%2Feb08A8OaBtBCiXBKRGEW8yIkGLHV7ZdE3WLVsiki%2B3EQup91M%2F1K3fjEwHo1TaSAchs8Tddn9%2BxArcVvQp6MfPzr%2FEXFqc8MPaDgBP35dEKr8Kynu3uRTNR2K7GHcJBN3NKO7uEoNieYckU6CTVionX4oWKWbeIr%2FDw7CD%2Fgb%2BM5nM26d5sS4OllaRHDQOJC1iertvQtqAmYpQOySoVDvN5O9MGNR6COTQ9ApuiZKlBpbUb7%2FJ8j6wZcnwYolw9kk2ok7ZDYqhMj9vmwymUkVNK94Bs5QH6hIMsWlxkXfjJv6J%2BRipxfG7mC%2BHE%2FjTmljbMnCqgAnnYEiYY%2B1ICDQa6XypPd3XKSwLHTjUH2KrSVyE4XYRUwBLz%2BLiCbB0CfdeD47Ebew2E73VVjBFv%2FRzCR2ZAa%2BBBtPWshBXy3mTIX49NGIlyH4vaOVUhmsg4cW0nfDNFNIL16TwmtD%2FdIlo9whp%2BQK%2FpBhfhjJlT5hP1a7hSf02HSQrBtPt3v7S7fQ3ix6nRueQVspZ%2FvT1abTAjHbsXCBaYUzA47YSqsZX%2FMnuKGfOHRrKn09iovdXWv1d4eTPxwK%2B3qrHhufD4dVxHOF7LgnHMnhCFzOj%2BfUDQDL4XtSZAwqvqy0QY6pgE8pbhzADP7abm0DoOYm3t0ODbAZSGmZHHCjxPK7KXtYiKKFRB5bbDCXrtXIRKlH7H825lQE0dUlyQyGI04en4l5DqbWyCznk9Jh4HEA8zcJkUYKx9yCODqXxPkDRFkArEDibEk0D8DuwSvpjZTmh0D%2FqFMOk0H9Q9qawPaU1nAWlFNVe9Yvk2SJODybsuF%2FYinVA14xeMv9%2Fm%2B%2BsEcjzKOZMeQCkKi&X-Amz-Signature=acc8d56c611b544e03c859c70a8d98b532c9340acace09dc684dd0b1ca0b8a34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EHNHGEQ%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIB12OiZHqg0UmQYF46kKL4qy1BcSNUcONAF9xFS6RYodAiEAlIg2MtymUE5kvDHWacpjRB8jYFQGuXt%2BQrb00HQtcDMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGvyGHlP1osTRS2m0CrcA6wA%2BB2pYMD5l2lC%2FlWQo1vDlkUxOchgOdU4kPyG%2FqjqEmkrI14xnXP8DxaEDnpzhwjVtCiVeoh2HB4G8Hxsc65rFa5pmJiVJCQdTjLgkfOwkeU2jwGBNC9Zyg1J9LuoYANLuVxVGaREOt0URtmZ2tJEcDMCQ7i2a8U5LPfuuzGsLFt1v4ByT4JOoOu1oO3U3z7HJRncRY%2F9K24F3FlZqJYNTWzZ1X6jXZ3fvlqqNRJRwk87lqb8W%2FQ7KQziqjoZ8l793IOYR5qV3dQCHEYdI%2FgaRKuE45NUdzzZbqWk7w30XxjuY%2BjbDgC0rLP5k2%2FWVkD31nX7ZD%2BFLLzP3oiysqoCqXqHnzzZaGbw%2FIM%2F7r90DP4D1ceOEmLVZGNB%2Fa3cYCVVZMtq4OMX6T%2BdPk8ZhyCHUGkGmnOW6XgakRuwH%2FT90LnfYJtu8%2FJDvWwYdHuPGbLxs%2Froq4amnFU48ZgvYTM75TraYJLd%2FWmDMSEqcxCA9ZmtMwSUaKSwJtyydjJZKFwh%2Fm8XxEd718cWpaUVEjzOZlfjhwNwZRYnL5vCuLRez7RqI5MsMnlNGFANp02acm7bvtijzisXkqu1gTcgavLLV%2FqQINCybmlfPGSEFBwcHQX334YiWJvcSagIMPv7stEGOqUBM8lJGFYQyQAIEjTAUxMcKtAUWdChnCDGo%2FAm6k8hikdvH0tSYXtkA6uGilqaTHLtwRR%2B4snJFsHlmAsvIYmitYxw0K0apoJj6mMUpUYV1QBMbYfw5ZAKc2%2Fc8dj%2BRau926o7QXlm6jm1U%2BJQznZApIYG4u5zpR2Z1uSm0ZbjLN1zl7tULcifcI7cqyXpP%2BVqrnMt60ANQKaJlTWB%2BRE4RQ8j8ADH&X-Amz-Signature=480e2e99092b70381657d2a23da3b1b4477b7db1598177b3ea5c3a50c3871a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF4I44KQ%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIGk%2F4zd1caJwVAiJ%2F8fdxwPgDfmAUBwZSaQ%2F1ZPb0QJrAiEAsnGyC54JOi4f1W4e%2BsaHfTxB%2FKzrJu0HDH%2FNwtXwtDYq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDL4c4hJbmgF27TUy3CrcAy7orZJ2md7amom7vSloHZo8wTCMKUvLCYhbBxyn0S1gPobq0aiuYBkU5nOjuVczClW9LWEBRNxRE4u9MUbi8vngYZzdWYwjxC3LXlt2OlctITpr5R4wNdv34HEeE8A1m6pAFaGlnbhjfRett6NcJme9RWc9yIbMnxIdG8lcqfCsYuet1Ra4NPG5K6EBPDIjlhUKziGhrTt%2B94l%2B%2FnJ5gC4CETKKksJ24zeMNNKVMWxNfgFRhCjYW0P%2Bb6CjmpeeKkbijzg9hsbIF5QjN4krB2Pzb8ZXntuD39gn822oMpE%2B0ntuWhGei1OwWXbER0HJWQ0SBeCAZhGSUHierO6M%2FLSF9hwXhf8UnUGU2tUNb%2FqwlMf3BXNBSf%2FMdI3672MWC%2BEEqG%2FBKPv6qoM1aJk%2FpDpmyUmzJsfhq5CiwaS5yohdjDu5uzEXElnhqS8TvLHunpeXYCfXmpDcnPtQGPpPc8XniudPEfSmIu98OKR7qIwGMAdOk9css5mS2n4TtaUlLxXJEvWQtMieQDZqJ5ILT77yEnjmFOniiMGHX2%2BZNI1XxAoZHpzezmFaBe3MZkl1tKj5lV3ZogxUwkg2v0xCHs02fhLcPMTJVLqWYTHVq%2BU4ZVsFUUkKRB2d%2FDebMP37stEGOqUBP3u%2BVzRQ2nxTep%2FJayLtVzG64vUba4UEFMhFRwR2B3s88AfjmLU%2BNg42RWomMSszuYLqVU%2FmYCwD%2F9gSoFeMcpYj45q5jFU8AZVlB5RpiXE76uoObArwkAkNNoqQeGgLLO%2B0zxQkkEL54ciFySCPgvZ58cIlt43CUEyRZAxa4t%2B5yqbcj0muxrNNF118xr8LoeCIC82jPGu96HO0TTBvSx2DBOPb&X-Amz-Signature=345bb080e41ca2ee278bff46ab70b0f1ffd8c1ec12eea6e0c5228e6f2b86b985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JPU723C%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCICDd28kHKBAF%2FFu8SWigsv3GPfYegDbQq7eihQcV1OMJAiBF3%2BrVlf3lcLMBEYbgAokMlV8tLn4CE3ZuBE%2F0Pn2KPSr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIM1Nk4DSJ2vT%2FWit%2BiKtwDXYbatjB%2BrG0knYg0qBfPvmkpZnKcS0eL00%2BsS6OuUyKc9YVwmmhjcHMDia9fosI%2F2IjBTkjdyhquAwgcP6ky9CcG%2F%2Fdf%2B8waxp2G1pbZn0rw%2BvF2w0HxFzkT4O3hI1%2BSBsFKsZ2ZjVG5eONGDQwnfG6ispxx8UGkvaFrxBoga7mHY9NYhY%2B6iO%2B11O0TVQIbFpQJDetoHxWeAxsUCOjZmWb9XULdZcyYhJje4zS9ZT9hMIPMn0AZoe61X2tf71ctlvZc3gqE%2FHUayG0QsLSK31cqiBauq6OfZ1Ph2mYlPAqjAxUg3sOeZqH9MU%2Bpg1hI%2BPddaGsCZd%2FS8ej8MVbpqW5LaJ22W%2FrZwL8DzlBFMk1bO%2BpmguqCyY7sKsPaQ%2B6e5p5dP5QuXeiT721Nm3OesgAQW00qUbbBn%2FUNXosdiSenu4yh0PU8q81oWcT9D%2Bm7NkHhbAgXqsb2x9gHTwEENab1VNmEHdJBCN7oJzY%2FckJMC5dfWHtGd5oXf%2Bf7SdsxOQCf0Nq5fL60d0YuRzkeGO2QmZtg4eY%2FEcTdhkSjgN2gBZ6FyX1mJ1zWspHBXaeDoxOhbePcc6%2BU0berqASFe1zp8bi6BXM%2Fg9GBN%2FYQGdS7I6WqvXb4fUAMgMIww%2Fyy0QY6pgHXGtYMT6zVhFjELr11w9p8jS3J3dfwmMsIFRhdCaExpZ53xmcX7lc0EOefpNfHSv8sV%2FC0QmvmJN0e042sen93lmaKFbbjTqB%2BTD8B925m%2FpY%2BIMvETh5CXV6DTdRygcQpSGWpgsZClMUGxwEErZ2tzWvNlC1kQf%2FojHz49iq09HOAjx1kkS8kthoVjlCi7F1OtdPkdUhkjXY9qqCIpuU7Jb8h8PPh&X-Amz-Signature=f4019b9348d920f1aed5baf2ae87dc6c9addabcc56370d1ced98ca651163de8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQGG4Q5A%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIF5gn6MEZhfkZYrW2ke5qih0bHvZTfXPmuYwNBzkdzlHAiEA5WCOqRIx%2Bbgq%2Fsof1HYTY%2B6oesMf0lj%2Fkm2A8vx8kcoq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDPvUdFsUkj%2BECio4yyrcA7Fgod3Is6f4Rl4tI%2FpJLl27spO4WIEmNfnxNBx647nt7hQyXDIRXerBrvUPTSuGgUpvt7GniXqB9M8WpVRl8yYuYEE2zIDCB1ftHTWBU%2FZnDnCQGwff56WqVFEQVdvEnawxqP86k4TYmJeEz7iqcYBULBgBsiGxG3FAiHak6fgH9PqsKDk01m0LtdAFiNC2ZgERUiEVgJZ0ItBa4N%2FRZK9EQZLyXvMSaDF%2B9dNjzeN%2BanSwfNhnWGDmfayWwCMR1FX%2F423YD39YQHODMz7xhzlLq%2F35NHyYoiZsWARnc2hBDamcQh62GA5mVmmqw55CxOwwpuzpLVTNPZNb7iTzdDE70%2BG%2BXFLxRT1HHNuXgoH8pO%2Bbvd0F80HYpELmmzWr72jclGJ%2FX1yEuDSPjfzMhAR0riBvNU365X%2F9o8y4m4Az5QavXbWAUDgA%2BH38CISohpwuu002ZDNlzjLD1oDbJUDO%2BEpN70%2Fnsyc18MHyxA636Fn8i2e225eKh4XcmceaJWA8Cy%2FQrGyk6yM%2BT13E3xmT2wrfyo4tMpcA1CsKqt%2Bn78GYsCrrPA7VtNCESY7O59i3A2C70a%2B%2FuBJHimHRE1sMdEAeDXOmsSkS7oSmUwHZe%2F1rW2RYTMvmEKBsMJr7stEGOqUB2q43X9c5vVLO2WgvmoXGYIE6QQjIRkbBFc9Je8Y1gIavHR1T7HFB9AINp0Q7dHNDNTHEmid7%2BkUhylw6FVowEAb8o0UMX8PScVeyawizbNh2Jc0XM0A8qyAfWIlPpxKzy8jJSi9VYCiBp2SvjcxaTtmxo0y8VG3arvzn3FyEDvuJ2ffMu60gCH9V9y%2FNcJvTWsyYxsgKwcqJu%2FjQ3AzhUe%2BFIiAA&X-Amz-Signature=adca78486ca8ec0f7a58a10d24bb3b2c593c6a4c6498a01093bf82a720432791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EHNHGEQ%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIB12OiZHqg0UmQYF46kKL4qy1BcSNUcONAF9xFS6RYodAiEAlIg2MtymUE5kvDHWacpjRB8jYFQGuXt%2BQrb00HQtcDMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGvyGHlP1osTRS2m0CrcA6wA%2BB2pYMD5l2lC%2FlWQo1vDlkUxOchgOdU4kPyG%2FqjqEmkrI14xnXP8DxaEDnpzhwjVtCiVeoh2HB4G8Hxsc65rFa5pmJiVJCQdTjLgkfOwkeU2jwGBNC9Zyg1J9LuoYANLuVxVGaREOt0URtmZ2tJEcDMCQ7i2a8U5LPfuuzGsLFt1v4ByT4JOoOu1oO3U3z7HJRncRY%2F9K24F3FlZqJYNTWzZ1X6jXZ3fvlqqNRJRwk87lqb8W%2FQ7KQziqjoZ8l793IOYR5qV3dQCHEYdI%2FgaRKuE45NUdzzZbqWk7w30XxjuY%2BjbDgC0rLP5k2%2FWVkD31nX7ZD%2BFLLzP3oiysqoCqXqHnzzZaGbw%2FIM%2F7r90DP4D1ceOEmLVZGNB%2Fa3cYCVVZMtq4OMX6T%2BdPk8ZhyCHUGkGmnOW6XgakRuwH%2FT90LnfYJtu8%2FJDvWwYdHuPGbLxs%2Froq4amnFU48ZgvYTM75TraYJLd%2FWmDMSEqcxCA9ZmtMwSUaKSwJtyydjJZKFwh%2Fm8XxEd718cWpaUVEjzOZlfjhwNwZRYnL5vCuLRez7RqI5MsMnlNGFANp02acm7bvtijzisXkqu1gTcgavLLV%2FqQINCybmlfPGSEFBwcHQX334YiWJvcSagIMPv7stEGOqUBM8lJGFYQyQAIEjTAUxMcKtAUWdChnCDGo%2FAm6k8hikdvH0tSYXtkA6uGilqaTHLtwRR%2B4snJFsHlmAsvIYmitYxw0K0apoJj6mMUpUYV1QBMbYfw5ZAKc2%2Fc8dj%2BRau926o7QXlm6jm1U%2BJQznZApIYG4u5zpR2Z1uSm0ZbjLN1zl7tULcifcI7cqyXpP%2BVqrnMt60ANQKaJlTWB%2BRE4RQ8j8ADH&X-Amz-Signature=1f70e9478c7bb569f131cc13a54b09ff75b0519b6f6f893e67187dc8763edb65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EHNHGEQ%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIB12OiZHqg0UmQYF46kKL4qy1BcSNUcONAF9xFS6RYodAiEAlIg2MtymUE5kvDHWacpjRB8jYFQGuXt%2BQrb00HQtcDMq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDGvyGHlP1osTRS2m0CrcA6wA%2BB2pYMD5l2lC%2FlWQo1vDlkUxOchgOdU4kPyG%2FqjqEmkrI14xnXP8DxaEDnpzhwjVtCiVeoh2HB4G8Hxsc65rFa5pmJiVJCQdTjLgkfOwkeU2jwGBNC9Zyg1J9LuoYANLuVxVGaREOt0URtmZ2tJEcDMCQ7i2a8U5LPfuuzGsLFt1v4ByT4JOoOu1oO3U3z7HJRncRY%2F9K24F3FlZqJYNTWzZ1X6jXZ3fvlqqNRJRwk87lqb8W%2FQ7KQziqjoZ8l793IOYR5qV3dQCHEYdI%2FgaRKuE45NUdzzZbqWk7w30XxjuY%2BjbDgC0rLP5k2%2FWVkD31nX7ZD%2BFLLzP3oiysqoCqXqHnzzZaGbw%2FIM%2F7r90DP4D1ceOEmLVZGNB%2Fa3cYCVVZMtq4OMX6T%2BdPk8ZhyCHUGkGmnOW6XgakRuwH%2FT90LnfYJtu8%2FJDvWwYdHuPGbLxs%2Froq4amnFU48ZgvYTM75TraYJLd%2FWmDMSEqcxCA9ZmtMwSUaKSwJtyydjJZKFwh%2Fm8XxEd718cWpaUVEjzOZlfjhwNwZRYnL5vCuLRez7RqI5MsMnlNGFANp02acm7bvtijzisXkqu1gTcgavLLV%2FqQINCybmlfPGSEFBwcHQX334YiWJvcSagIMPv7stEGOqUBM8lJGFYQyQAIEjTAUxMcKtAUWdChnCDGo%2FAm6k8hikdvH0tSYXtkA6uGilqaTHLtwRR%2B4snJFsHlmAsvIYmitYxw0K0apoJj6mMUpUYV1QBMbYfw5ZAKc2%2Fc8dj%2BRau926o7QXlm6jm1U%2BJQznZApIYG4u5zpR2Z1uSm0ZbjLN1zl7tULcifcI7cqyXpP%2BVqrnMt60ANQKaJlTWB%2BRE4RQ8j8ADH&X-Amz-Signature=92f772c5ceae015ba63b020654ecd084ae2f11db0bf8de60101170160c477e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ELN2CV%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCa91m%2BrbmvCFVmRc2Fx8nvovlh0LNN0v%2BuaA3tLhgqpgIhAOfhoChL2MbmGjdmAjOgH3b2EeSMWJdpdwrRQa3UN7EAKv8DCCMQABoMNjM3NDIzMTgzODA1IgxjfqYc1CEXLcobJ4Iq3AOo64gPsum3kRd3ZpsaVU%2FzqOJTds8S%2FV1KEGJgzSEAKkmx9dWyxCv0M0ykRgr5AW%2FIZO9d89YUnESDUB%2FloKN7MCzHqlXtCBG7JubRFFuyoYzFAbCP4x5Jg4KzRQ%2BYZ4c%2FVs%2BBbLujbnh19GyAAKAC3uIu7gS2PLT1B8XCopAVR%2F4wBEIH8KLWLFuBlFQaGXwNJ13iTh7%2BgfJnV8Wt6vuqw%2BFIR6lF0X9mX%2BLZf0wQDEOVyqCtCd8clSm4zeHIpAPBOqxt%2FCyoucwEjMLqT1GU11iT9bVtuTp3TwgVLCD0e%2B6wcHW9HY2q6P3nks7TBn%2FcOIJ55hv3Lfx1xm7wDvOoJ0YjV3SVS04LIFzTwPBUOtLCBKn4GKaCHEFnxsq8g81aSH0jIrXdgi61xT%2FLOfykIrWHtUDuTj4bouCRDrHmwLqMrlhf05r3EM%2Bn7ACIZPPDLmxmPGa47KkMt9k1%2BL%2BBVTGeXpVBVAZkgNsNATq96DDWvAEWRrLrUHgJkpZ%2BvfEJyMF1wwduRy%2BSNQCZb4o1CWyV%2B%2BA3lpmwl14%2FLjtgLOYYORF9KAJdNkfPJInuvKNqSu6hpj92z1ygFTuMoMBV66GiNp6SkURyHhcqPT3EgEODplQ5gdAvoLRULDDp%2B7LRBjqkAURye%2FlYmiy5viMQtnVmDWl2zg0xrkThSF%2BHtaOG1jCmxrKtsAqOwf1gBKQ6SUamNMkiOqqbFgLt6t7z1ropuqIn9h7R7JPDUJHKANM0ff8jKZRnfaq5zEdVPcAPybg6gmgi2OcJAxNpPhyRC9Nmt1bC0vur3v1ECWGLYMfXZ7JwxVzNEoGMKiIwsGpt9bYnHPUFfDCYoF0TxQ5oHVUyCWASsPE%2B&X-Amz-Signature=c35876d2cf367521521f710e3a829c5150924aeddb428ea448275ce5219582a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ELN2CV%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCa91m%2BrbmvCFVmRc2Fx8nvovlh0LNN0v%2BuaA3tLhgqpgIhAOfhoChL2MbmGjdmAjOgH3b2EeSMWJdpdwrRQa3UN7EAKv8DCCMQABoMNjM3NDIzMTgzODA1IgxjfqYc1CEXLcobJ4Iq3AOo64gPsum3kRd3ZpsaVU%2FzqOJTds8S%2FV1KEGJgzSEAKkmx9dWyxCv0M0ykRgr5AW%2FIZO9d89YUnESDUB%2FloKN7MCzHqlXtCBG7JubRFFuyoYzFAbCP4x5Jg4KzRQ%2BYZ4c%2FVs%2BBbLujbnh19GyAAKAC3uIu7gS2PLT1B8XCopAVR%2F4wBEIH8KLWLFuBlFQaGXwNJ13iTh7%2BgfJnV8Wt6vuqw%2BFIR6lF0X9mX%2BLZf0wQDEOVyqCtCd8clSm4zeHIpAPBOqxt%2FCyoucwEjMLqT1GU11iT9bVtuTp3TwgVLCD0e%2B6wcHW9HY2q6P3nks7TBn%2FcOIJ55hv3Lfx1xm7wDvOoJ0YjV3SVS04LIFzTwPBUOtLCBKn4GKaCHEFnxsq8g81aSH0jIrXdgi61xT%2FLOfykIrWHtUDuTj4bouCRDrHmwLqMrlhf05r3EM%2Bn7ACIZPPDLmxmPGa47KkMt9k1%2BL%2BBVTGeXpVBVAZkgNsNATq96DDWvAEWRrLrUHgJkpZ%2BvfEJyMF1wwduRy%2BSNQCZb4o1CWyV%2B%2BA3lpmwl14%2FLjtgLOYYORF9KAJdNkfPJInuvKNqSu6hpj92z1ygFTuMoMBV66GiNp6SkURyHhcqPT3EgEODplQ5gdAvoLRULDDp%2B7LRBjqkAURye%2FlYmiy5viMQtnVmDWl2zg0xrkThSF%2BHtaOG1jCmxrKtsAqOwf1gBKQ6SUamNMkiOqqbFgLt6t7z1ropuqIn9h7R7JPDUJHKANM0ff8jKZRnfaq5zEdVPcAPybg6gmgi2OcJAxNpPhyRC9Nmt1bC0vur3v1ECWGLYMfXZ7JwxVzNEoGMKiIwsGpt9bYnHPUFfDCYoF0TxQ5oHVUyCWASsPE%2B&X-Amz-Signature=c779fc35c4bdbcb7bd5b10ed044f9faabac411885e431c587e0e035347a09fb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ELN2CV%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCa91m%2BrbmvCFVmRc2Fx8nvovlh0LNN0v%2BuaA3tLhgqpgIhAOfhoChL2MbmGjdmAjOgH3b2EeSMWJdpdwrRQa3UN7EAKv8DCCMQABoMNjM3NDIzMTgzODA1IgxjfqYc1CEXLcobJ4Iq3AOo64gPsum3kRd3ZpsaVU%2FzqOJTds8S%2FV1KEGJgzSEAKkmx9dWyxCv0M0ykRgr5AW%2FIZO9d89YUnESDUB%2FloKN7MCzHqlXtCBG7JubRFFuyoYzFAbCP4x5Jg4KzRQ%2BYZ4c%2FVs%2BBbLujbnh19GyAAKAC3uIu7gS2PLT1B8XCopAVR%2F4wBEIH8KLWLFuBlFQaGXwNJ13iTh7%2BgfJnV8Wt6vuqw%2BFIR6lF0X9mX%2BLZf0wQDEOVyqCtCd8clSm4zeHIpAPBOqxt%2FCyoucwEjMLqT1GU11iT9bVtuTp3TwgVLCD0e%2B6wcHW9HY2q6P3nks7TBn%2FcOIJ55hv3Lfx1xm7wDvOoJ0YjV3SVS04LIFzTwPBUOtLCBKn4GKaCHEFnxsq8g81aSH0jIrXdgi61xT%2FLOfykIrWHtUDuTj4bouCRDrHmwLqMrlhf05r3EM%2Bn7ACIZPPDLmxmPGa47KkMt9k1%2BL%2BBVTGeXpVBVAZkgNsNATq96DDWvAEWRrLrUHgJkpZ%2BvfEJyMF1wwduRy%2BSNQCZb4o1CWyV%2B%2BA3lpmwl14%2FLjtgLOYYORF9KAJdNkfPJInuvKNqSu6hpj92z1ygFTuMoMBV66GiNp6SkURyHhcqPT3EgEODplQ5gdAvoLRULDDp%2B7LRBjqkAURye%2FlYmiy5viMQtnVmDWl2zg0xrkThSF%2BHtaOG1jCmxrKtsAqOwf1gBKQ6SUamNMkiOqqbFgLt6t7z1ropuqIn9h7R7JPDUJHKANM0ff8jKZRnfaq5zEdVPcAPybg6gmgi2OcJAxNpPhyRC9Nmt1bC0vur3v1ECWGLYMfXZ7JwxVzNEoGMKiIwsGpt9bYnHPUFfDCYoF0TxQ5oHVUyCWASsPE%2B&X-Amz-Signature=4349c68bd4c126cccbfbcb6b40e78d29d893a131623b659e69d628037edfa78b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ELN2CV%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCa91m%2BrbmvCFVmRc2Fx8nvovlh0LNN0v%2BuaA3tLhgqpgIhAOfhoChL2MbmGjdmAjOgH3b2EeSMWJdpdwrRQa3UN7EAKv8DCCMQABoMNjM3NDIzMTgzODA1IgxjfqYc1CEXLcobJ4Iq3AOo64gPsum3kRd3ZpsaVU%2FzqOJTds8S%2FV1KEGJgzSEAKkmx9dWyxCv0M0ykRgr5AW%2FIZO9d89YUnESDUB%2FloKN7MCzHqlXtCBG7JubRFFuyoYzFAbCP4x5Jg4KzRQ%2BYZ4c%2FVs%2BBbLujbnh19GyAAKAC3uIu7gS2PLT1B8XCopAVR%2F4wBEIH8KLWLFuBlFQaGXwNJ13iTh7%2BgfJnV8Wt6vuqw%2BFIR6lF0X9mX%2BLZf0wQDEOVyqCtCd8clSm4zeHIpAPBOqxt%2FCyoucwEjMLqT1GU11iT9bVtuTp3TwgVLCD0e%2B6wcHW9HY2q6P3nks7TBn%2FcOIJ55hv3Lfx1xm7wDvOoJ0YjV3SVS04LIFzTwPBUOtLCBKn4GKaCHEFnxsq8g81aSH0jIrXdgi61xT%2FLOfykIrWHtUDuTj4bouCRDrHmwLqMrlhf05r3EM%2Bn7ACIZPPDLmxmPGa47KkMt9k1%2BL%2BBVTGeXpVBVAZkgNsNATq96DDWvAEWRrLrUHgJkpZ%2BvfEJyMF1wwduRy%2BSNQCZb4o1CWyV%2B%2BA3lpmwl14%2FLjtgLOYYORF9KAJdNkfPJInuvKNqSu6hpj92z1ygFTuMoMBV66GiNp6SkURyHhcqPT3EgEODplQ5gdAvoLRULDDp%2B7LRBjqkAURye%2FlYmiy5viMQtnVmDWl2zg0xrkThSF%2BHtaOG1jCmxrKtsAqOwf1gBKQ6SUamNMkiOqqbFgLt6t7z1ropuqIn9h7R7JPDUJHKANM0ff8jKZRnfaq5zEdVPcAPybg6gmgi2OcJAxNpPhyRC9Nmt1bC0vur3v1ECWGLYMfXZ7JwxVzNEoGMKiIwsGpt9bYnHPUFfDCYoF0TxQ5oHVUyCWASsPE%2B&X-Amz-Signature=e60dc9fadeb827ce08a3a3ba3304661a7ee424c9c016f38b18941de9b60d144b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RINKI4RH%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIHBy9LmBdKOyPn%2F7zKZ1fF%2FgcviACftrLxjmW1tFWigHAiAdbfdEXYLRm809NhFR8qxwEg90rilK9JDNCpp%2BTKtbKCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMV76LvK4zzMvvr4C6KtwDfVCOB9UM9fmoK%2BpeC7X0uRJb5fWnckwOSzW%2F1HZetKPD5hndbQLBVsg9GoRDpUhuulvY4B7FhrYZ0REl1Jl%2Bgt8%2Fx63WVwPiA1sgTRl7th6%2FWO5Ng3R7oXxO5e97vJ3Lf5pWlOjiNUTAQAN2AdTbm5FX9IBqajYXjKGBaZfVBkCleqhzHkXDtkrG62adhu1g5gZ6v1561cz5jIyx8MaUigeQiMqe9tp32iNTDx%2FmIwyQMp%2FqWO%2FzE6fQdQ3OAUqCkXzzlWOjfAn0I199DKKmQEgL%2F%2FxVT%2Fo6QEQUQKw2WdWaBvv7ZQXYIZWpiRxWIIR1Sgl7o8FQ47KyStfus3hdiQJd54rfazYL5iwTVU6xYOYKVz%2Fd95IWVj5bdonbwa3ytRxqGXZqeES5ufQOHTmPL%2FOAUMXxE4qAOiwdro1mlJQ7L7hV0K0PRKhrAzuswy8g5YZWh5rR0M4YF4Eg4KflmlGl35UrJgzeH30eWJTbG%2BuguVjtKcYnMO86HSXnbIb2jVF6n0w3uaazMIIku%2FUTkKQR9qUMVy7Kb%2FIgQTZ8mjJNeNnXAJQHEb18Go12VsQC%2B3%2FGaphASvge0BIGI71eSB3NpFi%2Bk06drum6jM%2BZAJxe7cD2sozdyINoiO8wofqy0QY6pgE6P36htnS42frX8T9VoXVZVISLTDZCEWnTqKvllFvRGzeRdA%2FNMUReflhP6cs97mqjmYF%2FgBIiPR9ElaeH9x8i7Y01wvVevGKr8byNehrUbp2kBOKFmSdFgkLNlKMVu8xvEwMW87F7hMP2berHps6oq5bZKjY5P7X99R9naNIFetWzP7aB%2FQxu%2FFLdxP9JB%2BvxA17QPaeY86houR1CwoP3yaRpFjt4&X-Amz-Signature=b3aa6b70766f38ccbbe53b4d5f586e350e9402f4f6590846de58c008f7d3e0ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ELN2CV%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCa91m%2BrbmvCFVmRc2Fx8nvovlh0LNN0v%2BuaA3tLhgqpgIhAOfhoChL2MbmGjdmAjOgH3b2EeSMWJdpdwrRQa3UN7EAKv8DCCMQABoMNjM3NDIzMTgzODA1IgxjfqYc1CEXLcobJ4Iq3AOo64gPsum3kRd3ZpsaVU%2FzqOJTds8S%2FV1KEGJgzSEAKkmx9dWyxCv0M0ykRgr5AW%2FIZO9d89YUnESDUB%2FloKN7MCzHqlXtCBG7JubRFFuyoYzFAbCP4x5Jg4KzRQ%2BYZ4c%2FVs%2BBbLujbnh19GyAAKAC3uIu7gS2PLT1B8XCopAVR%2F4wBEIH8KLWLFuBlFQaGXwNJ13iTh7%2BgfJnV8Wt6vuqw%2BFIR6lF0X9mX%2BLZf0wQDEOVyqCtCd8clSm4zeHIpAPBOqxt%2FCyoucwEjMLqT1GU11iT9bVtuTp3TwgVLCD0e%2B6wcHW9HY2q6P3nks7TBn%2FcOIJ55hv3Lfx1xm7wDvOoJ0YjV3SVS04LIFzTwPBUOtLCBKn4GKaCHEFnxsq8g81aSH0jIrXdgi61xT%2FLOfykIrWHtUDuTj4bouCRDrHmwLqMrlhf05r3EM%2Bn7ACIZPPDLmxmPGa47KkMt9k1%2BL%2BBVTGeXpVBVAZkgNsNATq96DDWvAEWRrLrUHgJkpZ%2BvfEJyMF1wwduRy%2BSNQCZb4o1CWyV%2B%2BA3lpmwl14%2FLjtgLOYYORF9KAJdNkfPJInuvKNqSu6hpj92z1ygFTuMoMBV66GiNp6SkURyHhcqPT3EgEODplQ5gdAvoLRULDDp%2B7LRBjqkAURye%2FlYmiy5viMQtnVmDWl2zg0xrkThSF%2BHtaOG1jCmxrKtsAqOwf1gBKQ6SUamNMkiOqqbFgLt6t7z1ropuqIn9h7R7JPDUJHKANM0ff8jKZRnfaq5zEdVPcAPybg6gmgi2OcJAxNpPhyRC9Nmt1bC0vur3v1ECWGLYMfXZ7JwxVzNEoGMKiIwsGpt9bYnHPUFfDCYoF0TxQ5oHVUyCWASsPE%2B&X-Amz-Signature=5d254e31f44e9206cf5a1c0c01a10a1ad99fa33826940c5b2ebc6e529b8f2599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ELN2CV%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCa91m%2BrbmvCFVmRc2Fx8nvovlh0LNN0v%2BuaA3tLhgqpgIhAOfhoChL2MbmGjdmAjOgH3b2EeSMWJdpdwrRQa3UN7EAKv8DCCMQABoMNjM3NDIzMTgzODA1IgxjfqYc1CEXLcobJ4Iq3AOo64gPsum3kRd3ZpsaVU%2FzqOJTds8S%2FV1KEGJgzSEAKkmx9dWyxCv0M0ykRgr5AW%2FIZO9d89YUnESDUB%2FloKN7MCzHqlXtCBG7JubRFFuyoYzFAbCP4x5Jg4KzRQ%2BYZ4c%2FVs%2BBbLujbnh19GyAAKAC3uIu7gS2PLT1B8XCopAVR%2F4wBEIH8KLWLFuBlFQaGXwNJ13iTh7%2BgfJnV8Wt6vuqw%2BFIR6lF0X9mX%2BLZf0wQDEOVyqCtCd8clSm4zeHIpAPBOqxt%2FCyoucwEjMLqT1GU11iT9bVtuTp3TwgVLCD0e%2B6wcHW9HY2q6P3nks7TBn%2FcOIJ55hv3Lfx1xm7wDvOoJ0YjV3SVS04LIFzTwPBUOtLCBKn4GKaCHEFnxsq8g81aSH0jIrXdgi61xT%2FLOfykIrWHtUDuTj4bouCRDrHmwLqMrlhf05r3EM%2Bn7ACIZPPDLmxmPGa47KkMt9k1%2BL%2BBVTGeXpVBVAZkgNsNATq96DDWvAEWRrLrUHgJkpZ%2BvfEJyMF1wwduRy%2BSNQCZb4o1CWyV%2B%2BA3lpmwl14%2FLjtgLOYYORF9KAJdNkfPJInuvKNqSu6hpj92z1ygFTuMoMBV66GiNp6SkURyHhcqPT3EgEODplQ5gdAvoLRULDDp%2B7LRBjqkAURye%2FlYmiy5viMQtnVmDWl2zg0xrkThSF%2BHtaOG1jCmxrKtsAqOwf1gBKQ6SUamNMkiOqqbFgLt6t7z1ropuqIn9h7R7JPDUJHKANM0ff8jKZRnfaq5zEdVPcAPybg6gmgi2OcJAxNpPhyRC9Nmt1bC0vur3v1ECWGLYMfXZ7JwxVzNEoGMKiIwsGpt9bYnHPUFfDCYoF0TxQ5oHVUyCWASsPE%2B&X-Amz-Signature=3fc08a0ee8bcef934d43a0c917a2ad7829fb3704e96f6fc3c1ed50320b013bda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ELN2CV%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCa91m%2BrbmvCFVmRc2Fx8nvovlh0LNN0v%2BuaA3tLhgqpgIhAOfhoChL2MbmGjdmAjOgH3b2EeSMWJdpdwrRQa3UN7EAKv8DCCMQABoMNjM3NDIzMTgzODA1IgxjfqYc1CEXLcobJ4Iq3AOo64gPsum3kRd3ZpsaVU%2FzqOJTds8S%2FV1KEGJgzSEAKkmx9dWyxCv0M0ykRgr5AW%2FIZO9d89YUnESDUB%2FloKN7MCzHqlXtCBG7JubRFFuyoYzFAbCP4x5Jg4KzRQ%2BYZ4c%2FVs%2BBbLujbnh19GyAAKAC3uIu7gS2PLT1B8XCopAVR%2F4wBEIH8KLWLFuBlFQaGXwNJ13iTh7%2BgfJnV8Wt6vuqw%2BFIR6lF0X9mX%2BLZf0wQDEOVyqCtCd8clSm4zeHIpAPBOqxt%2FCyoucwEjMLqT1GU11iT9bVtuTp3TwgVLCD0e%2B6wcHW9HY2q6P3nks7TBn%2FcOIJ55hv3Lfx1xm7wDvOoJ0YjV3SVS04LIFzTwPBUOtLCBKn4GKaCHEFnxsq8g81aSH0jIrXdgi61xT%2FLOfykIrWHtUDuTj4bouCRDrHmwLqMrlhf05r3EM%2Bn7ACIZPPDLmxmPGa47KkMt9k1%2BL%2BBVTGeXpVBVAZkgNsNATq96DDWvAEWRrLrUHgJkpZ%2BvfEJyMF1wwduRy%2BSNQCZb4o1CWyV%2B%2BA3lpmwl14%2FLjtgLOYYORF9KAJdNkfPJInuvKNqSu6hpj92z1ygFTuMoMBV66GiNp6SkURyHhcqPT3EgEODplQ5gdAvoLRULDDp%2B7LRBjqkAURye%2FlYmiy5viMQtnVmDWl2zg0xrkThSF%2BHtaOG1jCmxrKtsAqOwf1gBKQ6SUamNMkiOqqbFgLt6t7z1ropuqIn9h7R7JPDUJHKANM0ff8jKZRnfaq5zEdVPcAPybg6gmgi2OcJAxNpPhyRC9Nmt1bC0vur3v1ECWGLYMfXZ7JwxVzNEoGMKiIwsGpt9bYnHPUFfDCYoF0TxQ5oHVUyCWASsPE%2B&X-Amz-Signature=4349c68bd4c126cccbfbcb6b40e78d29d893a131623b659e69d628037edfa78b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ELN2CV%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCa91m%2BrbmvCFVmRc2Fx8nvovlh0LNN0v%2BuaA3tLhgqpgIhAOfhoChL2MbmGjdmAjOgH3b2EeSMWJdpdwrRQa3UN7EAKv8DCCMQABoMNjM3NDIzMTgzODA1IgxjfqYc1CEXLcobJ4Iq3AOo64gPsum3kRd3ZpsaVU%2FzqOJTds8S%2FV1KEGJgzSEAKkmx9dWyxCv0M0ykRgr5AW%2FIZO9d89YUnESDUB%2FloKN7MCzHqlXtCBG7JubRFFuyoYzFAbCP4x5Jg4KzRQ%2BYZ4c%2FVs%2BBbLujbnh19GyAAKAC3uIu7gS2PLT1B8XCopAVR%2F4wBEIH8KLWLFuBlFQaGXwNJ13iTh7%2BgfJnV8Wt6vuqw%2BFIR6lF0X9mX%2BLZf0wQDEOVyqCtCd8clSm4zeHIpAPBOqxt%2FCyoucwEjMLqT1GU11iT9bVtuTp3TwgVLCD0e%2B6wcHW9HY2q6P3nks7TBn%2FcOIJ55hv3Lfx1xm7wDvOoJ0YjV3SVS04LIFzTwPBUOtLCBKn4GKaCHEFnxsq8g81aSH0jIrXdgi61xT%2FLOfykIrWHtUDuTj4bouCRDrHmwLqMrlhf05r3EM%2Bn7ACIZPPDLmxmPGa47KkMt9k1%2BL%2BBVTGeXpVBVAZkgNsNATq96DDWvAEWRrLrUHgJkpZ%2BvfEJyMF1wwduRy%2BSNQCZb4o1CWyV%2B%2BA3lpmwl14%2FLjtgLOYYORF9KAJdNkfPJInuvKNqSu6hpj92z1ygFTuMoMBV66GiNp6SkURyHhcqPT3EgEODplQ5gdAvoLRULDDp%2B7LRBjqkAURye%2FlYmiy5viMQtnVmDWl2zg0xrkThSF%2BHtaOG1jCmxrKtsAqOwf1gBKQ6SUamNMkiOqqbFgLt6t7z1ropuqIn9h7R7JPDUJHKANM0ff8jKZRnfaq5zEdVPcAPybg6gmgi2OcJAxNpPhyRC9Nmt1bC0vur3v1ECWGLYMfXZ7JwxVzNEoGMKiIwsGpt9bYnHPUFfDCYoF0TxQ5oHVUyCWASsPE%2B&X-Amz-Signature=3cfde0d527bd70b4a101875b104bb53da6d077e4c18d07c58b33d942e26b0e9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ELN2CV%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCa91m%2BrbmvCFVmRc2Fx8nvovlh0LNN0v%2BuaA3tLhgqpgIhAOfhoChL2MbmGjdmAjOgH3b2EeSMWJdpdwrRQa3UN7EAKv8DCCMQABoMNjM3NDIzMTgzODA1IgxjfqYc1CEXLcobJ4Iq3AOo64gPsum3kRd3ZpsaVU%2FzqOJTds8S%2FV1KEGJgzSEAKkmx9dWyxCv0M0ykRgr5AW%2FIZO9d89YUnESDUB%2FloKN7MCzHqlXtCBG7JubRFFuyoYzFAbCP4x5Jg4KzRQ%2BYZ4c%2FVs%2BBbLujbnh19GyAAKAC3uIu7gS2PLT1B8XCopAVR%2F4wBEIH8KLWLFuBlFQaGXwNJ13iTh7%2BgfJnV8Wt6vuqw%2BFIR6lF0X9mX%2BLZf0wQDEOVyqCtCd8clSm4zeHIpAPBOqxt%2FCyoucwEjMLqT1GU11iT9bVtuTp3TwgVLCD0e%2B6wcHW9HY2q6P3nks7TBn%2FcOIJ55hv3Lfx1xm7wDvOoJ0YjV3SVS04LIFzTwPBUOtLCBKn4GKaCHEFnxsq8g81aSH0jIrXdgi61xT%2FLOfykIrWHtUDuTj4bouCRDrHmwLqMrlhf05r3EM%2Bn7ACIZPPDLmxmPGa47KkMt9k1%2BL%2BBVTGeXpVBVAZkgNsNATq96DDWvAEWRrLrUHgJkpZ%2BvfEJyMF1wwduRy%2BSNQCZb4o1CWyV%2B%2BA3lpmwl14%2FLjtgLOYYORF9KAJdNkfPJInuvKNqSu6hpj92z1ygFTuMoMBV66GiNp6SkURyHhcqPT3EgEODplQ5gdAvoLRULDDp%2B7LRBjqkAURye%2FlYmiy5viMQtnVmDWl2zg0xrkThSF%2BHtaOG1jCmxrKtsAqOwf1gBKQ6SUamNMkiOqqbFgLt6t7z1ropuqIn9h7R7JPDUJHKANM0ff8jKZRnfaq5zEdVPcAPybg6gmgi2OcJAxNpPhyRC9Nmt1bC0vur3v1ECWGLYMfXZ7JwxVzNEoGMKiIwsGpt9bYnHPUFfDCYoF0TxQ5oHVUyCWASsPE%2B&X-Amz-Signature=b71b422c302aa8417b36a711f5c8086287b1d7ea94bcca425955ee644bc563dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5ELN2CV%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCa91m%2BrbmvCFVmRc2Fx8nvovlh0LNN0v%2BuaA3tLhgqpgIhAOfhoChL2MbmGjdmAjOgH3b2EeSMWJdpdwrRQa3UN7EAKv8DCCMQABoMNjM3NDIzMTgzODA1IgxjfqYc1CEXLcobJ4Iq3AOo64gPsum3kRd3ZpsaVU%2FzqOJTds8S%2FV1KEGJgzSEAKkmx9dWyxCv0M0ykRgr5AW%2FIZO9d89YUnESDUB%2FloKN7MCzHqlXtCBG7JubRFFuyoYzFAbCP4x5Jg4KzRQ%2BYZ4c%2FVs%2BBbLujbnh19GyAAKAC3uIu7gS2PLT1B8XCopAVR%2F4wBEIH8KLWLFuBlFQaGXwNJ13iTh7%2BgfJnV8Wt6vuqw%2BFIR6lF0X9mX%2BLZf0wQDEOVyqCtCd8clSm4zeHIpAPBOqxt%2FCyoucwEjMLqT1GU11iT9bVtuTp3TwgVLCD0e%2B6wcHW9HY2q6P3nks7TBn%2FcOIJ55hv3Lfx1xm7wDvOoJ0YjV3SVS04LIFzTwPBUOtLCBKn4GKaCHEFnxsq8g81aSH0jIrXdgi61xT%2FLOfykIrWHtUDuTj4bouCRDrHmwLqMrlhf05r3EM%2Bn7ACIZPPDLmxmPGa47KkMt9k1%2BL%2BBVTGeXpVBVAZkgNsNATq96DDWvAEWRrLrUHgJkpZ%2BvfEJyMF1wwduRy%2BSNQCZb4o1CWyV%2B%2BA3lpmwl14%2FLjtgLOYYORF9KAJdNkfPJInuvKNqSu6hpj92z1ygFTuMoMBV66GiNp6SkURyHhcqPT3EgEODplQ5gdAvoLRULDDp%2B7LRBjqkAURye%2FlYmiy5viMQtnVmDWl2zg0xrkThSF%2BHtaOG1jCmxrKtsAqOwf1gBKQ6SUamNMkiOqqbFgLt6t7z1ropuqIn9h7R7JPDUJHKANM0ff8jKZRnfaq5zEdVPcAPybg6gmgi2OcJAxNpPhyRC9Nmt1bC0vur3v1ECWGLYMfXZ7JwxVzNEoGMKiIwsGpt9bYnHPUFfDCYoF0TxQ5oHVUyCWASsPE%2B&X-Amz-Signature=cb25e2ba984089f11d67a29f529a30223eeb833133ceaa8bc320a5bc0b47156e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


