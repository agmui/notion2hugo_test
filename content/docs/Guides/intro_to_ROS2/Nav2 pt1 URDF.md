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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJSJLYH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnuwhNnTzYafkY%2F3XCOWbNVPIScTYASO9%2Fsd6pDhn3kwIgWn2oxpYC1gBANcMIttOfSzlWELBTudM7qhgpr6fE0qkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZjn6RAfvcvP7vIaCrcA1xguIsCI9ozJutxO5Zr2d78vJTCjc2wZ3JdMCnYFSNVPMnRiI%2F35fv4fhJghCCpAy89fjmuW3URM0CUlNOT4WVwYbBEKLzLnjZNLzrAqhMMVwd8PbAOvAQl07%2BFQd4YYbISPUs6aKIVHzMZH6R2%2BH7WaQINRLcWiE5jPZPWr0LNcTT9tExv2IbULEI1FWpyY%2BiUv5wcH90DiFi4Cq8%2FTNgd2UqgWwyPe207aB6KoqJZsfr6SO0D2Vv7643j3FDOB039dei%2Fj90XV4lmk2wh4WaBLa4lW97UA%2FBnVrDSpRJ8MmtEKvZ%2FxQxIqCEsdZZdHL6Nme3RvBySHkOgvO99Z%2FeEMD6pY8Y6CgjdECMZMmGgJqurzRGgF41I6eBcOdQfXDHhji0Io1MDZmxjVRAuDCSyjwDldU7x5uaFc71tGumgnO3qjLR1999BmEyL%2FFAjjOEdlG0XgHS74kzAxGJ1SBZAX%2B%2BvSYf9F49FZyuqR3x4k6Iiu5%2BAUwYTonK9M9iEjU4nHGFLrPYXjrizMB6kAKAY48aZA%2Bgsf1X15ybICBS5Nj8zP1Sd%2BfXfYbqWUC1b3IqF7rt4nOcZuZ5EgDus5%2FOhAa5zQBM2Rzq51YsfisiXPfi5%2B%2FpQmxKCwiN3MKai6MQGOqUBiVQXAYYVRPp9JuZOr3gPMpu8fz5FrtGONbWngQvmbg%2BTjHxYWbbYAM5qhRI3yS49oXTGDZ%2FOmZ53dDWdO0mCFd%2BBrsnqtcndAqnfDJ1uTilky%2BheL%2B7%2BaFXl%2Bp048b6sjMVJy0BjyhjpFRAq8xWmStY0qILTpZwQvtHNnyVT6D%2FfwIk1F%2Bjcz25W9TWfDnjzYBZBFowFBvi1osHgyffaw2abV8uG&X-Amz-Signature=b8c74aee5ff92e8693b398e989ae673ff8db66a7282a498469437609ec3bb5d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJSJLYH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnuwhNnTzYafkY%2F3XCOWbNVPIScTYASO9%2Fsd6pDhn3kwIgWn2oxpYC1gBANcMIttOfSzlWELBTudM7qhgpr6fE0qkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZjn6RAfvcvP7vIaCrcA1xguIsCI9ozJutxO5Zr2d78vJTCjc2wZ3JdMCnYFSNVPMnRiI%2F35fv4fhJghCCpAy89fjmuW3URM0CUlNOT4WVwYbBEKLzLnjZNLzrAqhMMVwd8PbAOvAQl07%2BFQd4YYbISPUs6aKIVHzMZH6R2%2BH7WaQINRLcWiE5jPZPWr0LNcTT9tExv2IbULEI1FWpyY%2BiUv5wcH90DiFi4Cq8%2FTNgd2UqgWwyPe207aB6KoqJZsfr6SO0D2Vv7643j3FDOB039dei%2Fj90XV4lmk2wh4WaBLa4lW97UA%2FBnVrDSpRJ8MmtEKvZ%2FxQxIqCEsdZZdHL6Nme3RvBySHkOgvO99Z%2FeEMD6pY8Y6CgjdECMZMmGgJqurzRGgF41I6eBcOdQfXDHhji0Io1MDZmxjVRAuDCSyjwDldU7x5uaFc71tGumgnO3qjLR1999BmEyL%2FFAjjOEdlG0XgHS74kzAxGJ1SBZAX%2B%2BvSYf9F49FZyuqR3x4k6Iiu5%2BAUwYTonK9M9iEjU4nHGFLrPYXjrizMB6kAKAY48aZA%2Bgsf1X15ybICBS5Nj8zP1Sd%2BfXfYbqWUC1b3IqF7rt4nOcZuZ5EgDus5%2FOhAa5zQBM2Rzq51YsfisiXPfi5%2B%2FpQmxKCwiN3MKai6MQGOqUBiVQXAYYVRPp9JuZOr3gPMpu8fz5FrtGONbWngQvmbg%2BTjHxYWbbYAM5qhRI3yS49oXTGDZ%2FOmZ53dDWdO0mCFd%2BBrsnqtcndAqnfDJ1uTilky%2BheL%2B7%2BaFXl%2Bp048b6sjMVJy0BjyhjpFRAq8xWmStY0qILTpZwQvtHNnyVT6D%2FfwIk1F%2Bjcz25W9TWfDnjzYBZBFowFBvi1osHgyffaw2abV8uG&X-Amz-Signature=6ae5ce11550d50f683e2a216be32bf044e672dc3018b0fc6b19a632da5cda554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJSJLYH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnuwhNnTzYafkY%2F3XCOWbNVPIScTYASO9%2Fsd6pDhn3kwIgWn2oxpYC1gBANcMIttOfSzlWELBTudM7qhgpr6fE0qkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZjn6RAfvcvP7vIaCrcA1xguIsCI9ozJutxO5Zr2d78vJTCjc2wZ3JdMCnYFSNVPMnRiI%2F35fv4fhJghCCpAy89fjmuW3URM0CUlNOT4WVwYbBEKLzLnjZNLzrAqhMMVwd8PbAOvAQl07%2BFQd4YYbISPUs6aKIVHzMZH6R2%2BH7WaQINRLcWiE5jPZPWr0LNcTT9tExv2IbULEI1FWpyY%2BiUv5wcH90DiFi4Cq8%2FTNgd2UqgWwyPe207aB6KoqJZsfr6SO0D2Vv7643j3FDOB039dei%2Fj90XV4lmk2wh4WaBLa4lW97UA%2FBnVrDSpRJ8MmtEKvZ%2FxQxIqCEsdZZdHL6Nme3RvBySHkOgvO99Z%2FeEMD6pY8Y6CgjdECMZMmGgJqurzRGgF41I6eBcOdQfXDHhji0Io1MDZmxjVRAuDCSyjwDldU7x5uaFc71tGumgnO3qjLR1999BmEyL%2FFAjjOEdlG0XgHS74kzAxGJ1SBZAX%2B%2BvSYf9F49FZyuqR3x4k6Iiu5%2BAUwYTonK9M9iEjU4nHGFLrPYXjrizMB6kAKAY48aZA%2Bgsf1X15ybICBS5Nj8zP1Sd%2BfXfYbqWUC1b3IqF7rt4nOcZuZ5EgDus5%2FOhAa5zQBM2Rzq51YsfisiXPfi5%2B%2FpQmxKCwiN3MKai6MQGOqUBiVQXAYYVRPp9JuZOr3gPMpu8fz5FrtGONbWngQvmbg%2BTjHxYWbbYAM5qhRI3yS49oXTGDZ%2FOmZ53dDWdO0mCFd%2BBrsnqtcndAqnfDJ1uTilky%2BheL%2B7%2BaFXl%2Bp048b6sjMVJy0BjyhjpFRAq8xWmStY0qILTpZwQvtHNnyVT6D%2FfwIk1F%2Bjcz25W9TWfDnjzYBZBFowFBvi1osHgyffaw2abV8uG&X-Amz-Signature=3f8d1466154f86b51ccf6fc10be7867cca5a2096f1447205c1c05987519ad2f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJSJLYH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnuwhNnTzYafkY%2F3XCOWbNVPIScTYASO9%2Fsd6pDhn3kwIgWn2oxpYC1gBANcMIttOfSzlWELBTudM7qhgpr6fE0qkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZjn6RAfvcvP7vIaCrcA1xguIsCI9ozJutxO5Zr2d78vJTCjc2wZ3JdMCnYFSNVPMnRiI%2F35fv4fhJghCCpAy89fjmuW3URM0CUlNOT4WVwYbBEKLzLnjZNLzrAqhMMVwd8PbAOvAQl07%2BFQd4YYbISPUs6aKIVHzMZH6R2%2BH7WaQINRLcWiE5jPZPWr0LNcTT9tExv2IbULEI1FWpyY%2BiUv5wcH90DiFi4Cq8%2FTNgd2UqgWwyPe207aB6KoqJZsfr6SO0D2Vv7643j3FDOB039dei%2Fj90XV4lmk2wh4WaBLa4lW97UA%2FBnVrDSpRJ8MmtEKvZ%2FxQxIqCEsdZZdHL6Nme3RvBySHkOgvO99Z%2FeEMD6pY8Y6CgjdECMZMmGgJqurzRGgF41I6eBcOdQfXDHhji0Io1MDZmxjVRAuDCSyjwDldU7x5uaFc71tGumgnO3qjLR1999BmEyL%2FFAjjOEdlG0XgHS74kzAxGJ1SBZAX%2B%2BvSYf9F49FZyuqR3x4k6Iiu5%2BAUwYTonK9M9iEjU4nHGFLrPYXjrizMB6kAKAY48aZA%2Bgsf1X15ybICBS5Nj8zP1Sd%2BfXfYbqWUC1b3IqF7rt4nOcZuZ5EgDus5%2FOhAa5zQBM2Rzq51YsfisiXPfi5%2B%2FpQmxKCwiN3MKai6MQGOqUBiVQXAYYVRPp9JuZOr3gPMpu8fz5FrtGONbWngQvmbg%2BTjHxYWbbYAM5qhRI3yS49oXTGDZ%2FOmZ53dDWdO0mCFd%2BBrsnqtcndAqnfDJ1uTilky%2BheL%2B7%2BaFXl%2Bp048b6sjMVJy0BjyhjpFRAq8xWmStY0qILTpZwQvtHNnyVT6D%2FfwIk1F%2Bjcz25W9TWfDnjzYBZBFowFBvi1osHgyffaw2abV8uG&X-Amz-Signature=653ef8300bf0f1f2b08df23fb9901a8a69fe289ae6b05acb70a2688dd30e2e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJSJLYH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnuwhNnTzYafkY%2F3XCOWbNVPIScTYASO9%2Fsd6pDhn3kwIgWn2oxpYC1gBANcMIttOfSzlWELBTudM7qhgpr6fE0qkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZjn6RAfvcvP7vIaCrcA1xguIsCI9ozJutxO5Zr2d78vJTCjc2wZ3JdMCnYFSNVPMnRiI%2F35fv4fhJghCCpAy89fjmuW3URM0CUlNOT4WVwYbBEKLzLnjZNLzrAqhMMVwd8PbAOvAQl07%2BFQd4YYbISPUs6aKIVHzMZH6R2%2BH7WaQINRLcWiE5jPZPWr0LNcTT9tExv2IbULEI1FWpyY%2BiUv5wcH90DiFi4Cq8%2FTNgd2UqgWwyPe207aB6KoqJZsfr6SO0D2Vv7643j3FDOB039dei%2Fj90XV4lmk2wh4WaBLa4lW97UA%2FBnVrDSpRJ8MmtEKvZ%2FxQxIqCEsdZZdHL6Nme3RvBySHkOgvO99Z%2FeEMD6pY8Y6CgjdECMZMmGgJqurzRGgF41I6eBcOdQfXDHhji0Io1MDZmxjVRAuDCSyjwDldU7x5uaFc71tGumgnO3qjLR1999BmEyL%2FFAjjOEdlG0XgHS74kzAxGJ1SBZAX%2B%2BvSYf9F49FZyuqR3x4k6Iiu5%2BAUwYTonK9M9iEjU4nHGFLrPYXjrizMB6kAKAY48aZA%2Bgsf1X15ybICBS5Nj8zP1Sd%2BfXfYbqWUC1b3IqF7rt4nOcZuZ5EgDus5%2FOhAa5zQBM2Rzq51YsfisiXPfi5%2B%2FpQmxKCwiN3MKai6MQGOqUBiVQXAYYVRPp9JuZOr3gPMpu8fz5FrtGONbWngQvmbg%2BTjHxYWbbYAM5qhRI3yS49oXTGDZ%2FOmZ53dDWdO0mCFd%2BBrsnqtcndAqnfDJ1uTilky%2BheL%2B7%2BaFXl%2Bp048b6sjMVJy0BjyhjpFRAq8xWmStY0qILTpZwQvtHNnyVT6D%2FfwIk1F%2Bjcz25W9TWfDnjzYBZBFowFBvi1osHgyffaw2abV8uG&X-Amz-Signature=3fc29ecce44b769a02b7dc4b5f7585afdebe4f43b7d31720cd8ed0de71449571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJSJLYH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnuwhNnTzYafkY%2F3XCOWbNVPIScTYASO9%2Fsd6pDhn3kwIgWn2oxpYC1gBANcMIttOfSzlWELBTudM7qhgpr6fE0qkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZjn6RAfvcvP7vIaCrcA1xguIsCI9ozJutxO5Zr2d78vJTCjc2wZ3JdMCnYFSNVPMnRiI%2F35fv4fhJghCCpAy89fjmuW3URM0CUlNOT4WVwYbBEKLzLnjZNLzrAqhMMVwd8PbAOvAQl07%2BFQd4YYbISPUs6aKIVHzMZH6R2%2BH7WaQINRLcWiE5jPZPWr0LNcTT9tExv2IbULEI1FWpyY%2BiUv5wcH90DiFi4Cq8%2FTNgd2UqgWwyPe207aB6KoqJZsfr6SO0D2Vv7643j3FDOB039dei%2Fj90XV4lmk2wh4WaBLa4lW97UA%2FBnVrDSpRJ8MmtEKvZ%2FxQxIqCEsdZZdHL6Nme3RvBySHkOgvO99Z%2FeEMD6pY8Y6CgjdECMZMmGgJqurzRGgF41I6eBcOdQfXDHhji0Io1MDZmxjVRAuDCSyjwDldU7x5uaFc71tGumgnO3qjLR1999BmEyL%2FFAjjOEdlG0XgHS74kzAxGJ1SBZAX%2B%2BvSYf9F49FZyuqR3x4k6Iiu5%2BAUwYTonK9M9iEjU4nHGFLrPYXjrizMB6kAKAY48aZA%2Bgsf1X15ybICBS5Nj8zP1Sd%2BfXfYbqWUC1b3IqF7rt4nOcZuZ5EgDus5%2FOhAa5zQBM2Rzq51YsfisiXPfi5%2B%2FpQmxKCwiN3MKai6MQGOqUBiVQXAYYVRPp9JuZOr3gPMpu8fz5FrtGONbWngQvmbg%2BTjHxYWbbYAM5qhRI3yS49oXTGDZ%2FOmZ53dDWdO0mCFd%2BBrsnqtcndAqnfDJ1uTilky%2BheL%2B7%2BaFXl%2Bp048b6sjMVJy0BjyhjpFRAq8xWmStY0qILTpZwQvtHNnyVT6D%2FfwIk1F%2Bjcz25W9TWfDnjzYBZBFowFBvi1osHgyffaw2abV8uG&X-Amz-Signature=e3c1a3cafa51f6269500c3b96dbb0427d2003619dffd0153dac95259ce3445ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJSJLYH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnuwhNnTzYafkY%2F3XCOWbNVPIScTYASO9%2Fsd6pDhn3kwIgWn2oxpYC1gBANcMIttOfSzlWELBTudM7qhgpr6fE0qkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZjn6RAfvcvP7vIaCrcA1xguIsCI9ozJutxO5Zr2d78vJTCjc2wZ3JdMCnYFSNVPMnRiI%2F35fv4fhJghCCpAy89fjmuW3URM0CUlNOT4WVwYbBEKLzLnjZNLzrAqhMMVwd8PbAOvAQl07%2BFQd4YYbISPUs6aKIVHzMZH6R2%2BH7WaQINRLcWiE5jPZPWr0LNcTT9tExv2IbULEI1FWpyY%2BiUv5wcH90DiFi4Cq8%2FTNgd2UqgWwyPe207aB6KoqJZsfr6SO0D2Vv7643j3FDOB039dei%2Fj90XV4lmk2wh4WaBLa4lW97UA%2FBnVrDSpRJ8MmtEKvZ%2FxQxIqCEsdZZdHL6Nme3RvBySHkOgvO99Z%2FeEMD6pY8Y6CgjdECMZMmGgJqurzRGgF41I6eBcOdQfXDHhji0Io1MDZmxjVRAuDCSyjwDldU7x5uaFc71tGumgnO3qjLR1999BmEyL%2FFAjjOEdlG0XgHS74kzAxGJ1SBZAX%2B%2BvSYf9F49FZyuqR3x4k6Iiu5%2BAUwYTonK9M9iEjU4nHGFLrPYXjrizMB6kAKAY48aZA%2Bgsf1X15ybICBS5Nj8zP1Sd%2BfXfYbqWUC1b3IqF7rt4nOcZuZ5EgDus5%2FOhAa5zQBM2Rzq51YsfisiXPfi5%2B%2FpQmxKCwiN3MKai6MQGOqUBiVQXAYYVRPp9JuZOr3gPMpu8fz5FrtGONbWngQvmbg%2BTjHxYWbbYAM5qhRI3yS49oXTGDZ%2FOmZ53dDWdO0mCFd%2BBrsnqtcndAqnfDJ1uTilky%2BheL%2B7%2BaFXl%2Bp048b6sjMVJy0BjyhjpFRAq8xWmStY0qILTpZwQvtHNnyVT6D%2FfwIk1F%2Bjcz25W9TWfDnjzYBZBFowFBvi1osHgyffaw2abV8uG&X-Amz-Signature=00fb4017cd61a38aca31855665af0b55fd7beac2f0450a27ab98e3e73d3aeead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJSJLYH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnuwhNnTzYafkY%2F3XCOWbNVPIScTYASO9%2Fsd6pDhn3kwIgWn2oxpYC1gBANcMIttOfSzlWELBTudM7qhgpr6fE0qkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZjn6RAfvcvP7vIaCrcA1xguIsCI9ozJutxO5Zr2d78vJTCjc2wZ3JdMCnYFSNVPMnRiI%2F35fv4fhJghCCpAy89fjmuW3URM0CUlNOT4WVwYbBEKLzLnjZNLzrAqhMMVwd8PbAOvAQl07%2BFQd4YYbISPUs6aKIVHzMZH6R2%2BH7WaQINRLcWiE5jPZPWr0LNcTT9tExv2IbULEI1FWpyY%2BiUv5wcH90DiFi4Cq8%2FTNgd2UqgWwyPe207aB6KoqJZsfr6SO0D2Vv7643j3FDOB039dei%2Fj90XV4lmk2wh4WaBLa4lW97UA%2FBnVrDSpRJ8MmtEKvZ%2FxQxIqCEsdZZdHL6Nme3RvBySHkOgvO99Z%2FeEMD6pY8Y6CgjdECMZMmGgJqurzRGgF41I6eBcOdQfXDHhji0Io1MDZmxjVRAuDCSyjwDldU7x5uaFc71tGumgnO3qjLR1999BmEyL%2FFAjjOEdlG0XgHS74kzAxGJ1SBZAX%2B%2BvSYf9F49FZyuqR3x4k6Iiu5%2BAUwYTonK9M9iEjU4nHGFLrPYXjrizMB6kAKAY48aZA%2Bgsf1X15ybICBS5Nj8zP1Sd%2BfXfYbqWUC1b3IqF7rt4nOcZuZ5EgDus5%2FOhAa5zQBM2Rzq51YsfisiXPfi5%2B%2FpQmxKCwiN3MKai6MQGOqUBiVQXAYYVRPp9JuZOr3gPMpu8fz5FrtGONbWngQvmbg%2BTjHxYWbbYAM5qhRI3yS49oXTGDZ%2FOmZ53dDWdO0mCFd%2BBrsnqtcndAqnfDJ1uTilky%2BheL%2B7%2BaFXl%2Bp048b6sjMVJy0BjyhjpFRAq8xWmStY0qILTpZwQvtHNnyVT6D%2FfwIk1F%2Bjcz25W9TWfDnjzYBZBFowFBvi1osHgyffaw2abV8uG&X-Amz-Signature=e4b26e26c449db6c9ccdbd83e6a8ca3d376dcc3d0adb549096747c3c77651862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJSJLYH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnuwhNnTzYafkY%2F3XCOWbNVPIScTYASO9%2Fsd6pDhn3kwIgWn2oxpYC1gBANcMIttOfSzlWELBTudM7qhgpr6fE0qkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZjn6RAfvcvP7vIaCrcA1xguIsCI9ozJutxO5Zr2d78vJTCjc2wZ3JdMCnYFSNVPMnRiI%2F35fv4fhJghCCpAy89fjmuW3URM0CUlNOT4WVwYbBEKLzLnjZNLzrAqhMMVwd8PbAOvAQl07%2BFQd4YYbISPUs6aKIVHzMZH6R2%2BH7WaQINRLcWiE5jPZPWr0LNcTT9tExv2IbULEI1FWpyY%2BiUv5wcH90DiFi4Cq8%2FTNgd2UqgWwyPe207aB6KoqJZsfr6SO0D2Vv7643j3FDOB039dei%2Fj90XV4lmk2wh4WaBLa4lW97UA%2FBnVrDSpRJ8MmtEKvZ%2FxQxIqCEsdZZdHL6Nme3RvBySHkOgvO99Z%2FeEMD6pY8Y6CgjdECMZMmGgJqurzRGgF41I6eBcOdQfXDHhji0Io1MDZmxjVRAuDCSyjwDldU7x5uaFc71tGumgnO3qjLR1999BmEyL%2FFAjjOEdlG0XgHS74kzAxGJ1SBZAX%2B%2BvSYf9F49FZyuqR3x4k6Iiu5%2BAUwYTonK9M9iEjU4nHGFLrPYXjrizMB6kAKAY48aZA%2Bgsf1X15ybICBS5Nj8zP1Sd%2BfXfYbqWUC1b3IqF7rt4nOcZuZ5EgDus5%2FOhAa5zQBM2Rzq51YsfisiXPfi5%2B%2FpQmxKCwiN3MKai6MQGOqUBiVQXAYYVRPp9JuZOr3gPMpu8fz5FrtGONbWngQvmbg%2BTjHxYWbbYAM5qhRI3yS49oXTGDZ%2FOmZ53dDWdO0mCFd%2BBrsnqtcndAqnfDJ1uTilky%2BheL%2B7%2BaFXl%2Bp048b6sjMVJy0BjyhjpFRAq8xWmStY0qILTpZwQvtHNnyVT6D%2FfwIk1F%2Bjcz25W9TWfDnjzYBZBFowFBvi1osHgyffaw2abV8uG&X-Amz-Signature=6a3b462c2a7a7eb73ed7e285c66110af516439f4b8c3d49156c85f345842a708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJSJLYH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnuwhNnTzYafkY%2F3XCOWbNVPIScTYASO9%2Fsd6pDhn3kwIgWn2oxpYC1gBANcMIttOfSzlWELBTudM7qhgpr6fE0qkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZjn6RAfvcvP7vIaCrcA1xguIsCI9ozJutxO5Zr2d78vJTCjc2wZ3JdMCnYFSNVPMnRiI%2F35fv4fhJghCCpAy89fjmuW3URM0CUlNOT4WVwYbBEKLzLnjZNLzrAqhMMVwd8PbAOvAQl07%2BFQd4YYbISPUs6aKIVHzMZH6R2%2BH7WaQINRLcWiE5jPZPWr0LNcTT9tExv2IbULEI1FWpyY%2BiUv5wcH90DiFi4Cq8%2FTNgd2UqgWwyPe207aB6KoqJZsfr6SO0D2Vv7643j3FDOB039dei%2Fj90XV4lmk2wh4WaBLa4lW97UA%2FBnVrDSpRJ8MmtEKvZ%2FxQxIqCEsdZZdHL6Nme3RvBySHkOgvO99Z%2FeEMD6pY8Y6CgjdECMZMmGgJqurzRGgF41I6eBcOdQfXDHhji0Io1MDZmxjVRAuDCSyjwDldU7x5uaFc71tGumgnO3qjLR1999BmEyL%2FFAjjOEdlG0XgHS74kzAxGJ1SBZAX%2B%2BvSYf9F49FZyuqR3x4k6Iiu5%2BAUwYTonK9M9iEjU4nHGFLrPYXjrizMB6kAKAY48aZA%2Bgsf1X15ybICBS5Nj8zP1Sd%2BfXfYbqWUC1b3IqF7rt4nOcZuZ5EgDus5%2FOhAa5zQBM2Rzq51YsfisiXPfi5%2B%2FpQmxKCwiN3MKai6MQGOqUBiVQXAYYVRPp9JuZOr3gPMpu8fz5FrtGONbWngQvmbg%2BTjHxYWbbYAM5qhRI3yS49oXTGDZ%2FOmZ53dDWdO0mCFd%2BBrsnqtcndAqnfDJ1uTilky%2BheL%2B7%2BaFXl%2Bp048b6sjMVJy0BjyhjpFRAq8xWmStY0qILTpZwQvtHNnyVT6D%2FfwIk1F%2Bjcz25W9TWfDnjzYBZBFowFBvi1osHgyffaw2abV8uG&X-Amz-Signature=9d4c96235aeda6a38034c57ac2d83557dba0cf53540400bc6d9143c7dd97d895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JGCSPWX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSiLmTiVww70dTrIf0V5cf%2FkewSlvHGXSLZsvzUhzc8wIhAPSSDeduVbvPSWq4HLnon6hl3JQuzvhrLnC7YJBajZslKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzD6ZnPs0GY1%2BKUicq3AM6B%2BPdDphr5Y36LSBMWxEOggI5RaYMRus93dTvO5jOXkU4nkf31F%2FvTOqBmuMlWEB5Z3MDx0GKej9Ncm5XaeIrqFHZdINisFcuBNSgc6Zc2rIsW2i7IaNPcDtdgy8xcs5O%2Fmt7e8uxdDuAwXHiv6%2BTPkrl%2FnQfJl25zacza9tbgpho414lNrL6zV5cPLzM1UvmGS1DYGJOvQy2HhNxjwjSRGhqcqmwnIj3txeUvgOJ1AQQxQBAB6Qy%2BUt8HwyrKSsQa5hGa7zsGvyIYX9OSaOG50V466tNmHoR1qysZc8ynAU2XG0vFwFYgfk7v4%2FmVG7YGlcryuCKIj0Zr6Nb7St4Sfga2Kf%2BSzQiM7sAFcCOCZufpn3MEe0x1X%2F%2FvDNUiWZq%2BIUXgN%2FcprKVBsD2%2BNDatzrY8RX2jXxXCFH2t9CzlQbYUyKN4zZRamh1tD9dzc6ciZk%2FTdZDeu76vWCLRBIk6h6GkPcpRew4RnXnDi4Xr2rcFLPfkNDf2Fcm2ZQAubXNnXXWqARw0ICuFRCHlZ2lxzZqqC6LCexndr%2FGNE9dZjlwJ1MCNx74F4nmm9YhQjZiUGGRrRX1SJwlaPcmtntEBt25H0R8jStIZ5HeQJt9lVlfPNJVxYwXCID1UTCXoujEBjqkARSrrXI8xT6%2FN7ov%2Fd93e3ViuVhk6dt7WXsLeCxkXDKpiHpn2AKl9FobOgyAcopGtChYLEE8J1uM4K%2FE4iiPfq2C40WHNMlm5OokVmgjK%2FFlUkcMlKp21ohkdDpMUP2Z1GRmJrtpd5761HuZe6ufjGiYx3p15gUFkFDVGJQtQm3aFDQM4U4iftKoU0G7OU%2FzfPIT%2F1PbLC2O00S1Bmv3wgcOKFzc&X-Amz-Signature=9be9b91708b942a5ed78d66f1a8866e9d221dda1d683922a68f17a4f06919ff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUFH7MDK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FCm%2BXe4CgcFxIccOMCXePieMti6tWnFqK25RPWyxNjwIhAK3PyBOqEF5pnONbNSyax6BwbyErBKqvWPN3eaMaUZkEKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzlkb85ZKX6vGikqmQq3AOqbmly%2BPKQ3MPQ4BURsDrruit8L3XgYw%2BW3rgidhKd3DiioAq0Wlh26BBECcNdhM89n%2FFoLysgfSGzeHXoSZ6M7mK4oPCk7DLrIHV47%2BuJ3iYb709Y7gToaFFAz4Wx9XuJbbB5dmbPzvHuF2C5NujRpZYy%2FqWoBSAHbIENm3Ad5DDB4dpo%2FZ0q%2Fdvfo60broFl0btvNflKSwWxJp22GaBIZgFU0cA28OsIzlXaIU%2BTHRBrNlnBdUKN85luUXSxLCQ4Jmf7UCvQ0AzFvsZtmao1O5y6HL9q3Z3tmhUJ6gQc2V25G%2F7KGe7wiX8so%2F713isLQvK38tl8JQVkO%2BQH%2BtMRNR%2F4lsXFwJ2RMiIAVZrH0YYGCmFre0Gf5883H1g3nqVTTdYsWKI4URCcz%2BYQebdvh1scJW3pmVHzFrom6LfH3pFXvivknSQMIHgcGxtvT7AxnNB3bfmGXQnJYEL7adLpdxxne7xQniR%2BUYLQLVbz%2BPITDfY1wulttA53qMVxJfpf3P6sfIXUMVbc9%2FvF23lrD%2BtVGSizm%2Bys629c09efb90EnWm0f4WwCty60l96eNim3ptDIo%2BrC3IJajzT0fUGPqmQ1%2FDKP1xILaJUCzFJVS02tJjyeA7lYl8kDzD%2FoejEBjqkAeF0mhO1QGs%2FE2SOpCbdFfhkTLqwK9IoB%2FpsMFhSvm82%2BvG57%2FZa25lIE2iI00FOzUF59gP3y18iajnJP0QxMEOsgZ926oITHPKD9KHsq2jEGhtpULb3R%2FlmWQWrB%2B9TMROoLlNlXpbTSzfwQiSspP%2FEZrTjhdCVKGWh0OQVO8CuJ0FeGVUfANZzkrwEG67gG2csNSlod6%2FQtBuzijy1bbzS78vy&X-Amz-Signature=ca211d31baa7263283361d827f145144124c751f56a6fc14c4be2362ec7e847e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LTGMVIA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrm20iTbXKpiaKuJXbF2wOK46TIJJJQflTNp3Ckt1PawIhAOCe%2FZxFCvYhdoH4F9Ez92QwDkXzWrSxkKxfPfSYvgLNKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGY7V2PPOIdx2PEdMq3AMT8wg%2B7z6Zfv8omcOOYkkLRbUL%2B9R4q5LX54hfHK94MKx0zw21Reta0Oc4QQAFbSG2moqJUi2Qlkz4AQc8XgNpgaXfxVFI9Mtb9nyvYCH%2F3CXG%2Fu%2Bj3PEMQJyTCBGy4tf8MbbPM0SkmKThp%2F2%2BKeXa70Tc%2BbrhZZe2sHwme9ZeK5hgdgJPIdJpIdjIwSqOX9QlG4Ym9nEtrI0q%2BYlAo%2BJHy2w%2BIpfRyBNMQCNJ7zO1BTEWcqSDfbQEm%2Bdk0wNV2X1kGsLmat%2BoXACsJ6PJyDRvSKEy%2BCSbov8OfpbP7XHWPMcNPoXBSGr0AwN3EaRNlAADqgajDA26y5vZ0O%2Bvjk6zdwBG0aKMtUkEqNNJy14VLQ2XHVFGJ7lun9WJf4ZXKBqcc2sF1G7Z6mlU80FO3bJ%2B%2FJ9VyaeZr1DcdtdHw1%2FEmW18HlPkTQOI5oy5LxiEnMbdcOsMDSpn%2BYf%2B%2BPUHb5dSMrdS1pMNmlyA%2BvFBmTZqVF2F1I3S2OGOmz909Mqzk7PmKtaLeAbB%2BVdCedQtb6PXPxqVkYnE3gYPVbTfcj1p6RCheBNrfVpTVXQPsPxF4cDHqjl2vkRma%2FjKmebrw8%2F4DtCgQiQxrHfA0irX5uUracCxD8BRmNPz68npwjCIoejEBjqkAVzmbUAV5on5n8c4ygSpo28%2F09uJzsMMnl%2FjUn9NhNWGgfptyZf1qngI6PLB9GJqJfx5eMtj2mxR1rudTfX8drUknPt3yJV7NKPgXicsWiQtivjWzkVheODrJF8uoe2L24i83hk5ku%2F1%2FDawvtHywcBSkBkFyrzUiFqVFadZPQM7zDbR7FGG4uAyVthkC4cK9%2FkkfDDCy8B19na%2FA9l8wKqurOA3&X-Amz-Signature=5f74279640ca29ed1c9704f1c02ad74c4674e60ac50182215e1bfa64ac2f8344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJSJLYH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnuwhNnTzYafkY%2F3XCOWbNVPIScTYASO9%2Fsd6pDhn3kwIgWn2oxpYC1gBANcMIttOfSzlWELBTudM7qhgpr6fE0qkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZjn6RAfvcvP7vIaCrcA1xguIsCI9ozJutxO5Zr2d78vJTCjc2wZ3JdMCnYFSNVPMnRiI%2F35fv4fhJghCCpAy89fjmuW3URM0CUlNOT4WVwYbBEKLzLnjZNLzrAqhMMVwd8PbAOvAQl07%2BFQd4YYbISPUs6aKIVHzMZH6R2%2BH7WaQINRLcWiE5jPZPWr0LNcTT9tExv2IbULEI1FWpyY%2BiUv5wcH90DiFi4Cq8%2FTNgd2UqgWwyPe207aB6KoqJZsfr6SO0D2Vv7643j3FDOB039dei%2Fj90XV4lmk2wh4WaBLa4lW97UA%2FBnVrDSpRJ8MmtEKvZ%2FxQxIqCEsdZZdHL6Nme3RvBySHkOgvO99Z%2FeEMD6pY8Y6CgjdECMZMmGgJqurzRGgF41I6eBcOdQfXDHhji0Io1MDZmxjVRAuDCSyjwDldU7x5uaFc71tGumgnO3qjLR1999BmEyL%2FFAjjOEdlG0XgHS74kzAxGJ1SBZAX%2B%2BvSYf9F49FZyuqR3x4k6Iiu5%2BAUwYTonK9M9iEjU4nHGFLrPYXjrizMB6kAKAY48aZA%2Bgsf1X15ybICBS5Nj8zP1Sd%2BfXfYbqWUC1b3IqF7rt4nOcZuZ5EgDus5%2FOhAa5zQBM2Rzq51YsfisiXPfi5%2B%2FpQmxKCwiN3MKai6MQGOqUBiVQXAYYVRPp9JuZOr3gPMpu8fz5FrtGONbWngQvmbg%2BTjHxYWbbYAM5qhRI3yS49oXTGDZ%2FOmZ53dDWdO0mCFd%2BBrsnqtcndAqnfDJ1uTilky%2BheL%2B7%2BaFXl%2Bp048b6sjMVJy0BjyhjpFRAq8xWmStY0qILTpZwQvtHNnyVT6D%2FfwIk1F%2Bjcz25W9TWfDnjzYBZBFowFBvi1osHgyffaw2abV8uG&X-Amz-Signature=6b7c6f21f668483e57e90184d19dc42feaf452cd8db97192d17079494494b64b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK6URYMR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQhFEe8os4W%2FnlEpTjELM%2BrWgMyiuCGNMzdJrxrV%2BRsAiBekqWeuxp98TNETwIsSTq5Dde75mFLvR7uo1alRH6MUSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpNbkKl7lT%2F9wJ%2BLBKtwDDsnrcis%2F5zFGxYRJO0F%2FqryZT8hjXfjlHd4tTIITRIoKD8htiTEiEaALS7G3Ocnj2J1TznBWVg8yIjNxh955zDGXBtDv2FivBbyjwoJ77L3VKtXHaOJpd09biC0KIeHyfT5flZZdZ%2Br7ytdPvosbYcGP6cf6pClEWu%2BWZwFzisuIDKei9Gon8XLgNFYXZ%2B69%2BKdANZkOS7Qq6qTzRDNoUzUXOjiaGQcOjxlIC%2Bb1fiFgaQpFOJqOYrLmp5plMhVnAqp4OedxnOij3DpqlHt1rJV%2BOFAa%2BT%2F8FuzWmAmX9GM7GiAW8kd9UgnqJGep8zU5abCSoJF6o2s%2F5tjzlPi5GbD%2BAI2IvZ%2FvmtEKKbw%2BHNKKSgVyRJ5swrEnGD%2FrNJNpXj7mENsSrlDYqY5xNbiE7sGXAsmwUzalXk2Qaublz6lAMCw61crl%2BIrGKWrlVjxg4203p7ZszNiW9dPKS4t1VtJlHdi%2FosGhfuUHu0amuIhjBWPvuqjmu9polzjRCVgbJeHNsJ2chNYKXM5ZNwAUhxwdu67bmrPrwHoAKdwEcYMLvG7z%2BEIiiAtzsgmwrXX5ht5AONr8SbPan1V0pNx6O16dH1oY7HgWfzNud5pXkdzlLpmvAAb4TaCvAVUw9qHoxAY6pgFZxEtWWndodzZ1aRKjkPDksqOHvd24BW16oNGyPageWqMCeO%2FnExeB2g196CaBVbp%2Fb59YoYrqoBlpUqt0Qw%2FIst%2BwjI9JrzeNHj8JYZMC153zSdS7gRJKCZs5p34xyj5iELWkFo2LZxnzzDNYp5rvtXPpug8KMjYclod6iX0LkGD4oTgIbcywPy%2F%2BCVQmpmb3eYZqRV1OPw3vw%2F9sLlYks05EmtwB&X-Amz-Signature=32014169aa612dc41663cfe63aa237297bc8279d45415431cf63a48273918d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJSJLYH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnuwhNnTzYafkY%2F3XCOWbNVPIScTYASO9%2Fsd6pDhn3kwIgWn2oxpYC1gBANcMIttOfSzlWELBTudM7qhgpr6fE0qkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZjn6RAfvcvP7vIaCrcA1xguIsCI9ozJutxO5Zr2d78vJTCjc2wZ3JdMCnYFSNVPMnRiI%2F35fv4fhJghCCpAy89fjmuW3URM0CUlNOT4WVwYbBEKLzLnjZNLzrAqhMMVwd8PbAOvAQl07%2BFQd4YYbISPUs6aKIVHzMZH6R2%2BH7WaQINRLcWiE5jPZPWr0LNcTT9tExv2IbULEI1FWpyY%2BiUv5wcH90DiFi4Cq8%2FTNgd2UqgWwyPe207aB6KoqJZsfr6SO0D2Vv7643j3FDOB039dei%2Fj90XV4lmk2wh4WaBLa4lW97UA%2FBnVrDSpRJ8MmtEKvZ%2FxQxIqCEsdZZdHL6Nme3RvBySHkOgvO99Z%2FeEMD6pY8Y6CgjdECMZMmGgJqurzRGgF41I6eBcOdQfXDHhji0Io1MDZmxjVRAuDCSyjwDldU7x5uaFc71tGumgnO3qjLR1999BmEyL%2FFAjjOEdlG0XgHS74kzAxGJ1SBZAX%2B%2BvSYf9F49FZyuqR3x4k6Iiu5%2BAUwYTonK9M9iEjU4nHGFLrPYXjrizMB6kAKAY48aZA%2Bgsf1X15ybICBS5Nj8zP1Sd%2BfXfYbqWUC1b3IqF7rt4nOcZuZ5EgDus5%2FOhAa5zQBM2Rzq51YsfisiXPfi5%2B%2FpQmxKCwiN3MKai6MQGOqUBiVQXAYYVRPp9JuZOr3gPMpu8fz5FrtGONbWngQvmbg%2BTjHxYWbbYAM5qhRI3yS49oXTGDZ%2FOmZ53dDWdO0mCFd%2BBrsnqtcndAqnfDJ1uTilky%2BheL%2B7%2BaFXl%2Bp048b6sjMVJy0BjyhjpFRAq8xWmStY0qILTpZwQvtHNnyVT6D%2FfwIk1F%2Bjcz25W9TWfDnjzYBZBFowFBvi1osHgyffaw2abV8uG&X-Amz-Signature=b5809276f1baa8cb2bc3333e51baf256065c811a3a8642ff7ef694c5206f10ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSJHLOEL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoxWTi3OLxl%2FArS4COwW3N5LLScbaCyIdPkpA2r03HpAiEArL8PcbNm%2FIbWI%2Bviwhjn%2F46Knei%2F1QJ%2FTKEpdeWH5ZEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGMCvz3wzyu4Al1cyrcA3dM11b7ekYuOtHMDDTi%2B%2FnHTBbyTnEYdVXW9IldxBnfOF5uqVZ%2FOwbFOtABaZiIDtcyxXNWPWRt%2FyhJsfE24KSOu1Yykc%2BASBd5zGNKeWA3eTeVebWX4WtPvY4q8TwnFjJiA8ngW9MXxQ4LWbdBDD%2F6YMWbXIPpgZ9JGxf%2FlnCk%2BzNNxwMZH5Aq%2FlVasuocmmXgXzU5p5SAxIMLpFG6Ik00D9kOjgGLVY6XmUsxvIqXSkes6JxZQsdRzLaCZeXpxjVpgiGS9vlX2lLhNbQZl4lxREkCvz%2FoKqWsK8W4wpJ6bwZAGFmsd96h%2FHcJWws%2Fgt5FqjW4M3fq7ODhhZN5lo2tiyR9PDUbRkfjGXXR1VqUnOxohfoBnufchKLc2ykXZBG7Wf%2F%2FF7ps4BVFGEmA1PDrhuxqs%2B%2FpA2x4Plmbzv5mUnbpgKsMgQnYfhRCgvrMfgrFC3XwTtjIFKFkRXbd0Ucl4T1jO0pLYTfE7pqQ9RiWx2BroqFruWKdjzhiuDPz%2B4xTBU9ZvJb%2FpRogz7Xt3mCZJIXUhOFbWPSDfX23fdB7oH4pY5w0LCsRuISUY07q88xg%2BI%2BH8b7L%2B%2FFCDohVG2OpEd3DhQsvgqS7ZPDg7UJAei7XkUxiZKPLquRoMPGh6MQGOqUBAYOdzBf3Ne8MZd2WctkXkiQCANj18VmaPKFZ1Lar7OvB9Yllrx6uYENZrnODPHfvGQLLydGXGfOGF6E1I3W9BbTuaWJVKiHpwKK66cKewHju0ZlCEmnxCWOjF5lvp6LW6N1tB1SHGQ9o0DcDBTZmmAXZpD9oyMPFXbafZo1v8YNL6g8wTNLgG393GSsX7c%2Bu2J5HkVPAEs6e05Ks%2F7SUwMgpPDuV&X-Amz-Signature=9f1626e3314afafaea0a4c866697a3309caab64c8f3580bdaa533765fe4fbab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJSJLYH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnuwhNnTzYafkY%2F3XCOWbNVPIScTYASO9%2Fsd6pDhn3kwIgWn2oxpYC1gBANcMIttOfSzlWELBTudM7qhgpr6fE0qkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZjn6RAfvcvP7vIaCrcA1xguIsCI9ozJutxO5Zr2d78vJTCjc2wZ3JdMCnYFSNVPMnRiI%2F35fv4fhJghCCpAy89fjmuW3URM0CUlNOT4WVwYbBEKLzLnjZNLzrAqhMMVwd8PbAOvAQl07%2BFQd4YYbISPUs6aKIVHzMZH6R2%2BH7WaQINRLcWiE5jPZPWr0LNcTT9tExv2IbULEI1FWpyY%2BiUv5wcH90DiFi4Cq8%2FTNgd2UqgWwyPe207aB6KoqJZsfr6SO0D2Vv7643j3FDOB039dei%2Fj90XV4lmk2wh4WaBLa4lW97UA%2FBnVrDSpRJ8MmtEKvZ%2FxQxIqCEsdZZdHL6Nme3RvBySHkOgvO99Z%2FeEMD6pY8Y6CgjdECMZMmGgJqurzRGgF41I6eBcOdQfXDHhji0Io1MDZmxjVRAuDCSyjwDldU7x5uaFc71tGumgnO3qjLR1999BmEyL%2FFAjjOEdlG0XgHS74kzAxGJ1SBZAX%2B%2BvSYf9F49FZyuqR3x4k6Iiu5%2BAUwYTonK9M9iEjU4nHGFLrPYXjrizMB6kAKAY48aZA%2Bgsf1X15ybICBS5Nj8zP1Sd%2BfXfYbqWUC1b3IqF7rt4nOcZuZ5EgDus5%2FOhAa5zQBM2Rzq51YsfisiXPfi5%2B%2FpQmxKCwiN3MKai6MQGOqUBiVQXAYYVRPp9JuZOr3gPMpu8fz5FrtGONbWngQvmbg%2BTjHxYWbbYAM5qhRI3yS49oXTGDZ%2FOmZ53dDWdO0mCFd%2BBrsnqtcndAqnfDJ1uTilky%2BheL%2B7%2BaFXl%2Bp048b6sjMVJy0BjyhjpFRAq8xWmStY0qILTpZwQvtHNnyVT6D%2FfwIk1F%2Bjcz25W9TWfDnjzYBZBFowFBvi1osHgyffaw2abV8uG&X-Amz-Signature=fad7f445d894805a59cc37441aae05add69240b0ec6bece52f1f468b91b44a7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAGNKI6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWXE0UP%2FEtjG0jQFksbVzpMQY2kGixtbOuq2XA8i3H9AIgZu0CMVwbqFkVouDqjhnSGoxWxxtZZtLEc68pgbTpDskqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqjdWltvki0O7CHESrcA%2FS1MTySFYtzQ6zNns%2BoIDEBbknZX54ZaRKdR53GhbbtxofSZ8T%2B7pTxUPqnBjXnWitt8npfZKvyGc%2Bs2CbMAkw1XLNqpnsKVk%2F9cjOwkfdTlMmJilyvVnIklocIrArpVzmjzDziNpltmcysoREHa99ltq%2FaL1CBdQS1V2RhAklpPk3LtiMd51yAYXSamkn2klo1Eqa1tejKUVhGySShjvJ1VKDEi15hnoQiXncIDlY6LVMm5e4TL5Y1SI38fBJcGBUJs332kVeHnPyy%2FFSVPLrsidLBx4N0WRJ35Vt2zJWI%2BYHaOGawXIsqfk8lv6jCtp0O8P1PlqcNhFYJ2b8p9rJ3jsq1N2lZDxCb0hbNrA5ZvF8U2Kh6kutbPn1T%2BvbgBc14lKjsSIQ5Xx4jLnqe0ltQoRvHCBjIrQGSxH7RH1lGFGT7zbjeBGuWLwxy91P1GllJXl98rzhhVjISTJgqn51U%2Fm5VPd4wASbP43gd5JS3tzrlXlpU5N14hxQjWSw9ijUhrfbVw76tb4Wz9%2F3UqZgOgu8SJQKEGHiCy%2BNSsahwKP7paiPFjO90NAZ9uyP79XydRdbIdu42RQej939K2eD9wj0PUf5gPBW5GQnucTsPby0908p2o6n49DR6MKei6MQGOqUBMosLD%2BIToa8AqX3EC2%2FQPAsAaHKKS5MFVPlIXyyWc0jIkbS8Ie4oKZfyliYCcclSznZVFj%2FZIMsV8PDTZ%2FmPbBhoFpdt%2Fnx9cECq3wCdQi2anau3Vigniq6DJXwoxojMtnArmzkDlMicwF3K4CAHwItxUtM11Z1Yed9ziOtfNOGb1gQLmFbelswfLj8Pa0KdDmw%2BX8WWkWRTMHt59OA03kOD7nKv&X-Amz-Signature=c94e016d846aeb4445ded1a60df3fa97767a1c02e0bd6247e48ceed438da34e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJSJLYH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnuwhNnTzYafkY%2F3XCOWbNVPIScTYASO9%2Fsd6pDhn3kwIgWn2oxpYC1gBANcMIttOfSzlWELBTudM7qhgpr6fE0qkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZjn6RAfvcvP7vIaCrcA1xguIsCI9ozJutxO5Zr2d78vJTCjc2wZ3JdMCnYFSNVPMnRiI%2F35fv4fhJghCCpAy89fjmuW3URM0CUlNOT4WVwYbBEKLzLnjZNLzrAqhMMVwd8PbAOvAQl07%2BFQd4YYbISPUs6aKIVHzMZH6R2%2BH7WaQINRLcWiE5jPZPWr0LNcTT9tExv2IbULEI1FWpyY%2BiUv5wcH90DiFi4Cq8%2FTNgd2UqgWwyPe207aB6KoqJZsfr6SO0D2Vv7643j3FDOB039dei%2Fj90XV4lmk2wh4WaBLa4lW97UA%2FBnVrDSpRJ8MmtEKvZ%2FxQxIqCEsdZZdHL6Nme3RvBySHkOgvO99Z%2FeEMD6pY8Y6CgjdECMZMmGgJqurzRGgF41I6eBcOdQfXDHhji0Io1MDZmxjVRAuDCSyjwDldU7x5uaFc71tGumgnO3qjLR1999BmEyL%2FFAjjOEdlG0XgHS74kzAxGJ1SBZAX%2B%2BvSYf9F49FZyuqR3x4k6Iiu5%2BAUwYTonK9M9iEjU4nHGFLrPYXjrizMB6kAKAY48aZA%2Bgsf1X15ybICBS5Nj8zP1Sd%2BfXfYbqWUC1b3IqF7rt4nOcZuZ5EgDus5%2FOhAa5zQBM2Rzq51YsfisiXPfi5%2B%2FpQmxKCwiN3MKai6MQGOqUBiVQXAYYVRPp9JuZOr3gPMpu8fz5FrtGONbWngQvmbg%2BTjHxYWbbYAM5qhRI3yS49oXTGDZ%2FOmZ53dDWdO0mCFd%2BBrsnqtcndAqnfDJ1uTilky%2BheL%2B7%2BaFXl%2Bp048b6sjMVJy0BjyhjpFRAq8xWmStY0qILTpZwQvtHNnyVT6D%2FfwIk1F%2Bjcz25W9TWfDnjzYBZBFowFBvi1osHgyffaw2abV8uG&X-Amz-Signature=fa791201af9db0342915e1a65f56bcc7568aeff98a3c003ef4e207bb19d1f688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RFRDZPF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpw%2F%2BluFpx6fjnOtMr5j4OOqNR3m31lV0UUebCc5ReZwIgezg7PRYVIWp8i6qKZl5IAuhaxbcWUtLrwoY8uJErt8kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFIi7suPjoAV4GIOyrcAzYbNLWVTSw4QO4G2kvSwJXZAim2foIVDPYMfVnHdAbomapcEQfm7jYx8NVscnj1vyyqWEIiZIePFr9RHFLIzjHuV2IRvvRmMuddchxpBuJllQkEeqkbxbqk8xfSi%2BmZsryNSXf6F7rh%2BZnYw202I95l8CvyqEVoDkSRVKPh85zkEjj2kwUXaC6mfKu%2BLyHnHSdQj08UFM0kj%2Fcma4S7YUOQEb3S%2Bm31UHsfP1%2FoOBD2GsCdmLJI9NFVQDMEAD1ixPZh50%2B17F%2BgdQIERjh73mQLU%2FKmzbo95wxQj%2Bu6re0EUtERmH%2B7n%2FolhZDiePymLURheP%2Btesh6%2BilDADu8o3pUu0gf1zvNAdN1v%2Fg%2BxyZbn3Kuje4SzxDdyKQMXOjecjsdapWlHS%2Fps5Dx4c6I7j2FaGESe24KDhxSCvOeFVjIkBexsVYLhCdcv9HG1BtW6Q%2Bd7RQWIJXp%2BQAyenImPB58Ofhh5fy2aIChgxdtYPlAurilGDLpkeoB2cWmxkaZRmdXGXciwtKploGgFkY9fE%2F65z32XD0GaeolnpWula0qOYww6dt5I1x13jS1EyjDD2PnNyo5rCmwEhad2kEsUWn%2BlcHu4ScKuBV%2BW27ENnRhmGDlJmBVPvUpKRLPMJai6MQGOqUBGWjiF4iKuaCm%2B2g0E988jSxGCxZ%2FwtSJcktjXsUep9uUcWhvGQqkkJWrcD0%2BslAFgCsnvF8A1yKLNCPryWMUKO5%2FSncAV%2FEgLLt%2BQcgu108V5srQ8gPIkzGyWNmhG9tX0s1GHAgQNTYgEyxM3mnw04CFcfvnYyPXZXlrMNdOXVmgPPHxqS8mgZUm5IydelYKKb6XPekYduOpxWydq1gKAQ1SjrBk&X-Amz-Signature=be7f98e74510bd284bbd42da956213213b5b3e78634efd251149907d515374de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVVPRR7P%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlIYr1DXyZY0cnwlCJ8qTKVCuvkGJLYu%2FwZSFe3EsySAiAU26ddA4i%2BH99u%2B06Vte85PptJKH4KT%2BWS62quMZRD7iqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCzN1WTf8SPus6H4ZKtwDi0uaLrRlyu0T%2BL1OiaIes9PuDEuzeHjcc7ibKW%2FBXoriylre7XHEtbyuDABlK63Rxy1lf8zFMpr%2FH234qK96S3kT5mSx%2Fp3RUGy%2Fz%2B%2BVGVNEd%2BRNp1FDtueoIF9FAyXbInlMKrvkNlPn%2BAmrsvJZq%2FhFDirWNv%2Ftl%2B6FcouTTA%2Bfulv2lJw24P%2F7w3Ay38gMkky5QpP4%2B4PeJn4ExvJeoPQIjwYyolBc7JJKM3sSYlDSIcLTKosJAIbzaJ2x9oXVwH7U7nEeqtnwrzHJokeHLTn8wrO5zS74fhGCK5uud9xM8mOrHtbY4mxHdC0Blm3sbgdiYt1yQiW9JC%2FQBrRZIGoOuPOUOvQTFG3JmSq7XAVaVq602alIXTrRS%2BC%2F5PR6ujI9BtTO3pHSAE4m3%2BHMB5g6muhz%2Bt2fGdDH%2FwE79PmfB9NkTHWjKChyuhhOfCT13AQZYAeKPO5MN%2FmWluDiga8qRcZHPMRlaC1fKpLdLYyClUf2PeOPQCrBvflBce5cqIRKHn8K6EwLRJCbNssvNp%2Fe0Jnzfbyh4pVwgI4YVgk4ma%2FKWEAOHelrmUZyFcbWzfAxkFkHJmGSTA6kU1M%2BIDvu8B3vDRjn06NHwWqC%2BkokUmHpBaXvGIM9ipYw0aHoxAY6pgF57mlqYAKHdAnPulN%2BP9%2BzGB25oEXaBy2Qb6QXpa5Apbuzj%2FQnZWkvrhkqO5zahkZVFOQyjHkf%2FCeY1EBsOZ6Bx%2BFwTk%2Fsq1M5hC%2BPDxFZD93UCr6aC0S%2B4xWMoT1E1OmYF3D6%2FqQ3i50WWKZoyegH31lK3rgabTiBfe3l5XGTKfPSYsXDbwZnRnJidQ7KSwifF8fT1TMaJNrnuPkY5ztif8YIwiAS&X-Amz-Signature=7fbc5ec59cfc07c648cf2f3e1d4e025731506cba51ea18ae094041f63747ab74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OIH43BS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUFsPlItcufoDHxdAY8pxl3vcISpTwp119bOLC8xIgsAiBj2IWPF5FazdqyIyW%2Bvyis2Gddgw9%2FcJWa6dIc%2FCkrgSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlTcETC2ifQQxS9LvKtwDBlYSssnrSBSS2Km%2B3WRCSqm3%2BvAQvRrJUH1gfutF%2FPpblf0%2FZKbyE2K6cai8EgWhm1gWtAVw8Bt8a7hIFgLUou279poNe95KKvaw8musJZzvjpbpjmo2YqYKe8gC9dILTzb0%2FC2N0aKpXO2TZARdybudpcelRnLq5awrAtAQlIGfGMoKU5WTegZDY9sDgFOZ94y31qKzCJL9NggxzSh32kFTWVNnPih64tjKRplYzE19xaXxmfQICfCkHO9IKdkzAaYQRSPo7SyvtJ2cBzTXjxG82PdjyjTZ9YaBgcBbVzezUBunJ7mtTQ5j4NLP3SYOszSHwJFzYo01mUrzMHkc2o%2F%2F3fagQZFpxfSb4aNwva%2Bz8q0qUQgnYnCp5KTYkhTMFyGwLbV94b2CJ936Zf8EG6e8SK3rkOD7JNSLqXhfJu7eplyEyUVcaLBzh5D85wYeQSrqgIWVtL2Hlgf0Bpd0gSSwAisXjyknlKCRGuUjfN1n%2FOVWgO83ZuXMzq6cKEkLt%2B%2Boi9u%2BB4Z%2FZf5Bzs6uVhJJIWY3edsCVoLvrDxe9SrdXK7GKdPJ9KjCS3mRfssPqaDh8ufKjXaM%2BS%2Bz0LW4bHJp0EPTIRYKQ1sv%2BqLF6NuZq5U8HgYzNS7%2BuGUwi6HoxAY6pgEqYnjWrrrKqR04NkvioUnoWNitB6EiWY0jWyLdOFiIvNP82jYCdSO8tMMHvzGJ0VYxUl3PV9woH78Z5KCdU35jTdkJj8Zbxrs%2FkJnxBa%2BI6eopj3cGHLj3tSaefKTbWaxjY77FEEWm0CYcC5TqTzATjphoN3dEa6eGXqdM06mWRJib%2BCiogEgHMFoKf%2F5OiwP9Q7gzHny8hum2PTssNxyIx8GWiojo&X-Amz-Signature=c29726c3f5ed67424df7fd5df07d02ed24220adb055a92b20f07c152c5ce36f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTQLV47M%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYp5EN8xV%2F6WZshBbD3jyNs2A9uGY7pA46p0qI7mF5WwIhAN27LiFJATIW%2F2wKzc2ei%2BHnxfzOlrc5zUG3ctbtVQOJKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHRxev7hOex6mObr8q3AO2WlzxMnm%2Fu3xOLmiiJ%2FEKCaUGQbcoHZ5eeKWXK9KqR2NE6yBtf5rCnhfsfLoe6MnkbCiLy9Nh6cXm4ZBi5nY6A7%2BnN7pNeQDShZ3ld8JGoVDaANJU2eXXEoaX%2BGgtWigrfCQAxLAbr0iylJb5s8cgQi5%2B%2F9wLTm4eaGnMZVaKiW3VSpANNjUOyOYBB%2BlTZbFp3CpofKFuJVcBTSZYxbb4nX3ARhEfBgmSkoFZ94wWwCWLvCtttFccLa8MRcjV2k%2B%2B5NsHIBlv6G6eNSjr23g1uSBQ%2BrrRS8WefeCL9Hi3p5r5pSDnAcD7FwbxxS37hkUCKz%2FAyYMSlz5kyQBW1qwC%2F%2B5Guw%2FlLdVBIMj%2FYpX5807QjCUUzGG7EXhQN2bDWIMqQeZWwEK4rLCcmsK7WniR0ViRdS7Pybp7WolY45IQhZ9soiEf5ydVfoFsG11MSHb1TUkJcYbDfw3feo6yyvJ6wZ4RbzvSYz%2Fw3XLx7b87eKLdEu1ZZozGIq%2FwssODBaaIhHdjX9GqwPoY1JvpOecCqf9pfRyJB0SwwCWyzWC5iyJUIPuCZbtdugtiHXwncImFLK7%2BDTZLAoPi%2BOWRVgMvrbsZ3P5TH3xcuKLwXWHQP3Xiu%2F%2BD6%2BXKv0xagzC6oujEBjqkAVFwCcdg1TTdGajPsmmGfqUAWASKCat6Kzc%2B5UmV0tTHi7W%2FmSrwNUkitXEE5%2BEo%2FGoVmWVsCSEfO%2BnJU%2Fmc5xvWnVIAm1vozIg7PmEE5rrCKOmFD63LppCW1AXy5ae%2BDpZWm9RDhAqwgDyIfeTnM%2B4iqf3T17vRCF0uxvOZDBWEvIQwh3LQQ1jznrRyh%2BxAf3cfkkFVI1pJdoLBQvDriCxL1%2B5R&X-Amz-Signature=ae436b248c635cbc396b23d2225c69d37079d4b7fb9dfa764eae428ff7b5bf09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624PCOMOE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf03PIOpVNfhu9BCUWPOSm%2FNRCSRF2Gzo%2F1xnkF8i5HgIgZtInOYjRc%2FdHrYUQi7mcLcbiNxRQjKRpwE004Xt2HUgqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUl%2BfY05c15dQH2lyrcAyf66XBuaAOA4bmRtsXaUT2gJ%2FPtiCS0zqhWT5Jy0rUZ2xC3Q0GZmY%2FWwttqdfHCHhCZJDNNXLmHUdtQjPVMKW%2Fi5OfSqPnzxpyVKrFCakGaxt5PNddo0ZIUFEm5aTd7ps4ppDapbD0Rsgf3fdjXNnWn6gm45ZIE%2FHZPfeEzbeZg%2BkciZ5AOfyvwdV8DZO1rMGAjOk6jU4a12MluQIqa3JnpVknOLHQqqDtnapwF96Lu6JmgG5zVC05ZoY0%2FO6K7Ggqe66GCa%2FT0fgaY9x3N9n08gva%2BfJdf3keyriFa3Yk7ISZvfLF61st9TDSQOavL%2Brxa5pq%2FeBh3oL734Po65SKHNU5Sj%2Fq78iaJJfxehLSqQvjeCKuG%2FASYdh7GbQwTT04M8UsmOHIKVECZZSPGqUW6c7QtxPq1xMoXr9U6VrQY%2BxDA4wnt4S38bEWn2jeRU3sCatHecM5ciAwW0X7OvuDofT7K3AkVAgsTtgS4qY2XIx8yr3YQkPIjPyd%2FGxBv%2BAJ3k4yhXG3gQGq%2F4DyG3ietpodve5xyUNQpjlUwzehASyywm1a44%2Fbju2%2FAA09pbRtjpJp2BwORIlSe4T%2FyV9dte7P6u1zYbaRQP5oWn6ccEnYgDDzIz6HdUUS%2BMNKh6MQGOqUB4EzeA1bQmfbekKH6xqc9AWqtowH%2BGwzZdgIiH6T9K77EMW3mUDtguxhgVEPJz5Bp3B%2FrAserSH1Ad0Zlo%2FSRtoHehJNdOgI5gjQPTVY9%2FEG7qLVMZxcfMCBV9Z1OZ%2FoT%2FBIUhk9TWbSErBvjfNVsjSbDzKgTyFUO7YbO8v9UlquMTRWmp3eAexIdqkRlwyk%2Bx8LPYeZdPNEzHSo4sAp6QlM21W9l&X-Amz-Signature=a0a90696ebe2156968b720406068602858d308d498ef971cfe566441064b9453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJSJLYH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnuwhNnTzYafkY%2F3XCOWbNVPIScTYASO9%2Fsd6pDhn3kwIgWn2oxpYC1gBANcMIttOfSzlWELBTudM7qhgpr6fE0qkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZjn6RAfvcvP7vIaCrcA1xguIsCI9ozJutxO5Zr2d78vJTCjc2wZ3JdMCnYFSNVPMnRiI%2F35fv4fhJghCCpAy89fjmuW3URM0CUlNOT4WVwYbBEKLzLnjZNLzrAqhMMVwd8PbAOvAQl07%2BFQd4YYbISPUs6aKIVHzMZH6R2%2BH7WaQINRLcWiE5jPZPWr0LNcTT9tExv2IbULEI1FWpyY%2BiUv5wcH90DiFi4Cq8%2FTNgd2UqgWwyPe207aB6KoqJZsfr6SO0D2Vv7643j3FDOB039dei%2Fj90XV4lmk2wh4WaBLa4lW97UA%2FBnVrDSpRJ8MmtEKvZ%2FxQxIqCEsdZZdHL6Nme3RvBySHkOgvO99Z%2FeEMD6pY8Y6CgjdECMZMmGgJqurzRGgF41I6eBcOdQfXDHhji0Io1MDZmxjVRAuDCSyjwDldU7x5uaFc71tGumgnO3qjLR1999BmEyL%2FFAjjOEdlG0XgHS74kzAxGJ1SBZAX%2B%2BvSYf9F49FZyuqR3x4k6Iiu5%2BAUwYTonK9M9iEjU4nHGFLrPYXjrizMB6kAKAY48aZA%2Bgsf1X15ybICBS5Nj8zP1Sd%2BfXfYbqWUC1b3IqF7rt4nOcZuZ5EgDus5%2FOhAa5zQBM2Rzq51YsfisiXPfi5%2B%2FpQmxKCwiN3MKai6MQGOqUBiVQXAYYVRPp9JuZOr3gPMpu8fz5FrtGONbWngQvmbg%2BTjHxYWbbYAM5qhRI3yS49oXTGDZ%2FOmZ53dDWdO0mCFd%2BBrsnqtcndAqnfDJ1uTilky%2BheL%2B7%2BaFXl%2Bp048b6sjMVJy0BjyhjpFRAq8xWmStY0qILTpZwQvtHNnyVT6D%2FfwIk1F%2Bjcz25W9TWfDnjzYBZBFowFBvi1osHgyffaw2abV8uG&X-Amz-Signature=4026bb33549cf5b6e187ce3188ad58f3a057436f1df434ba9a39afac2c696d50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FJSJLYH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnuwhNnTzYafkY%2F3XCOWbNVPIScTYASO9%2Fsd6pDhn3kwIgWn2oxpYC1gBANcMIttOfSzlWELBTudM7qhgpr6fE0qkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZjn6RAfvcvP7vIaCrcA1xguIsCI9ozJutxO5Zr2d78vJTCjc2wZ3JdMCnYFSNVPMnRiI%2F35fv4fhJghCCpAy89fjmuW3URM0CUlNOT4WVwYbBEKLzLnjZNLzrAqhMMVwd8PbAOvAQl07%2BFQd4YYbISPUs6aKIVHzMZH6R2%2BH7WaQINRLcWiE5jPZPWr0LNcTT9tExv2IbULEI1FWpyY%2BiUv5wcH90DiFi4Cq8%2FTNgd2UqgWwyPe207aB6KoqJZsfr6SO0D2Vv7643j3FDOB039dei%2Fj90XV4lmk2wh4WaBLa4lW97UA%2FBnVrDSpRJ8MmtEKvZ%2FxQxIqCEsdZZdHL6Nme3RvBySHkOgvO99Z%2FeEMD6pY8Y6CgjdECMZMmGgJqurzRGgF41I6eBcOdQfXDHhji0Io1MDZmxjVRAuDCSyjwDldU7x5uaFc71tGumgnO3qjLR1999BmEyL%2FFAjjOEdlG0XgHS74kzAxGJ1SBZAX%2B%2BvSYf9F49FZyuqR3x4k6Iiu5%2BAUwYTonK9M9iEjU4nHGFLrPYXjrizMB6kAKAY48aZA%2Bgsf1X15ybICBS5Nj8zP1Sd%2BfXfYbqWUC1b3IqF7rt4nOcZuZ5EgDus5%2FOhAa5zQBM2Rzq51YsfisiXPfi5%2B%2FpQmxKCwiN3MKai6MQGOqUBiVQXAYYVRPp9JuZOr3gPMpu8fz5FrtGONbWngQvmbg%2BTjHxYWbbYAM5qhRI3yS49oXTGDZ%2FOmZ53dDWdO0mCFd%2BBrsnqtcndAqnfDJ1uTilky%2BheL%2B7%2BaFXl%2Bp048b6sjMVJy0BjyhjpFRAq8xWmStY0qILTpZwQvtHNnyVT6D%2FfwIk1F%2Bjcz25W9TWfDnjzYBZBFowFBvi1osHgyffaw2abV8uG&X-Amz-Signature=292a4b0f8c812aa7b93f3740511b930f0c2614a8b4b4a5bc75103e3c08f7c086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPBUHYV%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFSg2u7JzMOyiqaB0bNS7D3xBMu9WvSJ0JpXUR62IO9AiBbsvgNibiCOSk%2BXnO4bsFyLkC4zHe78GCjN9LiQfpImiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZxUusybfm1bUAwFKtwD6lkeDHWATz2vLWxztV4YQjqx%2FH2qFk42P52bstRbQ5%2FDSiAWu9u%2BYSor%2Bmu8rHoskk%2Bj7aYE30bB9bTZNKKcyWxEUGg6FBdumhFjWDOCB3HUSuV9MWNQEbqxDxkBok322jWyBMAk10tvG99IqojDTg7df6epV6ox5yhkXq9LyBjzy%2BfjOXLKSBqzOV4OphYgdD8JGMp5vnLOwPxLCUapvYiUUUOBCZtnnJtELVA2tAEb0cwBgkTCnL3Oq52f2wVChdPigawqh3Hpa0fJo1fmmqXWxUyoof9q34eOx0CW0WcUbSgluMk6LbsUpFxENuzlvMSEK3H0ni4gBT8ZQJWINQHmOJ1eOG908L3hyEZ3gYQjVbsvelDNciyfWS7Ie%2BmZ8BJnqhdnITxNwa0iYkSAsRsFNY%2BBsf%2FLfF%2Fix7fJ1g4oEUuxHz4NIpYMj%2Bie18w7bNZg%2BfFU%2BUv9m8C8fYvvgshioJOktG34F76kOmNsmA9qsjmSa76Qybd56u3QuhaqzB3CWFosN2GFJ97A9%2BKQX%2BGHK2hndnq%2BvRS9f8hROpCyZE8kxRGUXvJy8sZliT5LJ19ES4w5txNJQVqQtByczFKuTuTQEL59RHHCjzCnpKbb00zRCdlOFKZ8p%2BAwqaHoxAY6pgHPo%2Fuu6BcpW%2B%2FkZmsIPVmg9Y9Jvop0aXhYE6ONtfJmzo38ElS685BE5w05qJ8nGizsA6bPkxAUNQcn37xh%2BUfB1YZnIjAsMpcWpMx8YXIzi4c5g5NvsCoB51A9uJ4coMVlONmAMu2Oa8WOlcbd1kZrhv4JNE9AobihV6AtMfH3GKywKESsaqsVXqN%2BS%2F2pIXqdxavKoPFwl63bNMSlnZgY5IZ1zRWJ&X-Amz-Signature=2cd4d7fd269b63c777068311dc7fc722c6b5e3f82ff181be88f58c57e761f468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPBUHYV%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFSg2u7JzMOyiqaB0bNS7D3xBMu9WvSJ0JpXUR62IO9AiBbsvgNibiCOSk%2BXnO4bsFyLkC4zHe78GCjN9LiQfpImiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZxUusybfm1bUAwFKtwD6lkeDHWATz2vLWxztV4YQjqx%2FH2qFk42P52bstRbQ5%2FDSiAWu9u%2BYSor%2Bmu8rHoskk%2Bj7aYE30bB9bTZNKKcyWxEUGg6FBdumhFjWDOCB3HUSuV9MWNQEbqxDxkBok322jWyBMAk10tvG99IqojDTg7df6epV6ox5yhkXq9LyBjzy%2BfjOXLKSBqzOV4OphYgdD8JGMp5vnLOwPxLCUapvYiUUUOBCZtnnJtELVA2tAEb0cwBgkTCnL3Oq52f2wVChdPigawqh3Hpa0fJo1fmmqXWxUyoof9q34eOx0CW0WcUbSgluMk6LbsUpFxENuzlvMSEK3H0ni4gBT8ZQJWINQHmOJ1eOG908L3hyEZ3gYQjVbsvelDNciyfWS7Ie%2BmZ8BJnqhdnITxNwa0iYkSAsRsFNY%2BBsf%2FLfF%2Fix7fJ1g4oEUuxHz4NIpYMj%2Bie18w7bNZg%2BfFU%2BUv9m8C8fYvvgshioJOktG34F76kOmNsmA9qsjmSa76Qybd56u3QuhaqzB3CWFosN2GFJ97A9%2BKQX%2BGHK2hndnq%2BvRS9f8hROpCyZE8kxRGUXvJy8sZliT5LJ19ES4w5txNJQVqQtByczFKuTuTQEL59RHHCjzCnpKbb00zRCdlOFKZ8p%2BAwqaHoxAY6pgHPo%2Fuu6BcpW%2B%2FkZmsIPVmg9Y9Jvop0aXhYE6ONtfJmzo38ElS685BE5w05qJ8nGizsA6bPkxAUNQcn37xh%2BUfB1YZnIjAsMpcWpMx8YXIzi4c5g5NvsCoB51A9uJ4coMVlONmAMu2Oa8WOlcbd1kZrhv4JNE9AobihV6AtMfH3GKywKESsaqsVXqN%2BS%2F2pIXqdxavKoPFwl63bNMSlnZgY5IZ1zRWJ&X-Amz-Signature=83cc965ec829414aca7ef7cd737749bc0300bebbff338b9b60e61c9a98296e07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPBUHYV%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFSg2u7JzMOyiqaB0bNS7D3xBMu9WvSJ0JpXUR62IO9AiBbsvgNibiCOSk%2BXnO4bsFyLkC4zHe78GCjN9LiQfpImiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZxUusybfm1bUAwFKtwD6lkeDHWATz2vLWxztV4YQjqx%2FH2qFk42P52bstRbQ5%2FDSiAWu9u%2BYSor%2Bmu8rHoskk%2Bj7aYE30bB9bTZNKKcyWxEUGg6FBdumhFjWDOCB3HUSuV9MWNQEbqxDxkBok322jWyBMAk10tvG99IqojDTg7df6epV6ox5yhkXq9LyBjzy%2BfjOXLKSBqzOV4OphYgdD8JGMp5vnLOwPxLCUapvYiUUUOBCZtnnJtELVA2tAEb0cwBgkTCnL3Oq52f2wVChdPigawqh3Hpa0fJo1fmmqXWxUyoof9q34eOx0CW0WcUbSgluMk6LbsUpFxENuzlvMSEK3H0ni4gBT8ZQJWINQHmOJ1eOG908L3hyEZ3gYQjVbsvelDNciyfWS7Ie%2BmZ8BJnqhdnITxNwa0iYkSAsRsFNY%2BBsf%2FLfF%2Fix7fJ1g4oEUuxHz4NIpYMj%2Bie18w7bNZg%2BfFU%2BUv9m8C8fYvvgshioJOktG34F76kOmNsmA9qsjmSa76Qybd56u3QuhaqzB3CWFosN2GFJ97A9%2BKQX%2BGHK2hndnq%2BvRS9f8hROpCyZE8kxRGUXvJy8sZliT5LJ19ES4w5txNJQVqQtByczFKuTuTQEL59RHHCjzCnpKbb00zRCdlOFKZ8p%2BAwqaHoxAY6pgHPo%2Fuu6BcpW%2B%2FkZmsIPVmg9Y9Jvop0aXhYE6ONtfJmzo38ElS685BE5w05qJ8nGizsA6bPkxAUNQcn37xh%2BUfB1YZnIjAsMpcWpMx8YXIzi4c5g5NvsCoB51A9uJ4coMVlONmAMu2Oa8WOlcbd1kZrhv4JNE9AobihV6AtMfH3GKywKESsaqsVXqN%2BS%2F2pIXqdxavKoPFwl63bNMSlnZgY5IZ1zRWJ&X-Amz-Signature=b6d7b427e3fbb53fa624838802117cf5a031d56453e4d661122164ede8ddf500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPBUHYV%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFSg2u7JzMOyiqaB0bNS7D3xBMu9WvSJ0JpXUR62IO9AiBbsvgNibiCOSk%2BXnO4bsFyLkC4zHe78GCjN9LiQfpImiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZxUusybfm1bUAwFKtwD6lkeDHWATz2vLWxztV4YQjqx%2FH2qFk42P52bstRbQ5%2FDSiAWu9u%2BYSor%2Bmu8rHoskk%2Bj7aYE30bB9bTZNKKcyWxEUGg6FBdumhFjWDOCB3HUSuV9MWNQEbqxDxkBok322jWyBMAk10tvG99IqojDTg7df6epV6ox5yhkXq9LyBjzy%2BfjOXLKSBqzOV4OphYgdD8JGMp5vnLOwPxLCUapvYiUUUOBCZtnnJtELVA2tAEb0cwBgkTCnL3Oq52f2wVChdPigawqh3Hpa0fJo1fmmqXWxUyoof9q34eOx0CW0WcUbSgluMk6LbsUpFxENuzlvMSEK3H0ni4gBT8ZQJWINQHmOJ1eOG908L3hyEZ3gYQjVbsvelDNciyfWS7Ie%2BmZ8BJnqhdnITxNwa0iYkSAsRsFNY%2BBsf%2FLfF%2Fix7fJ1g4oEUuxHz4NIpYMj%2Bie18w7bNZg%2BfFU%2BUv9m8C8fYvvgshioJOktG34F76kOmNsmA9qsjmSa76Qybd56u3QuhaqzB3CWFosN2GFJ97A9%2BKQX%2BGHK2hndnq%2BvRS9f8hROpCyZE8kxRGUXvJy8sZliT5LJ19ES4w5txNJQVqQtByczFKuTuTQEL59RHHCjzCnpKbb00zRCdlOFKZ8p%2BAwqaHoxAY6pgHPo%2Fuu6BcpW%2B%2FkZmsIPVmg9Y9Jvop0aXhYE6ONtfJmzo38ElS685BE5w05qJ8nGizsA6bPkxAUNQcn37xh%2BUfB1YZnIjAsMpcWpMx8YXIzi4c5g5NvsCoB51A9uJ4coMVlONmAMu2Oa8WOlcbd1kZrhv4JNE9AobihV6AtMfH3GKywKESsaqsVXqN%2BS%2F2pIXqdxavKoPFwl63bNMSlnZgY5IZ1zRWJ&X-Amz-Signature=0f08118d54c5c52993fdf1bf3a4445f3b929adfca6f70520cdaba457e922fa6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPBUHYV%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFSg2u7JzMOyiqaB0bNS7D3xBMu9WvSJ0JpXUR62IO9AiBbsvgNibiCOSk%2BXnO4bsFyLkC4zHe78GCjN9LiQfpImiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZxUusybfm1bUAwFKtwD6lkeDHWATz2vLWxztV4YQjqx%2FH2qFk42P52bstRbQ5%2FDSiAWu9u%2BYSor%2Bmu8rHoskk%2Bj7aYE30bB9bTZNKKcyWxEUGg6FBdumhFjWDOCB3HUSuV9MWNQEbqxDxkBok322jWyBMAk10tvG99IqojDTg7df6epV6ox5yhkXq9LyBjzy%2BfjOXLKSBqzOV4OphYgdD8JGMp5vnLOwPxLCUapvYiUUUOBCZtnnJtELVA2tAEb0cwBgkTCnL3Oq52f2wVChdPigawqh3Hpa0fJo1fmmqXWxUyoof9q34eOx0CW0WcUbSgluMk6LbsUpFxENuzlvMSEK3H0ni4gBT8ZQJWINQHmOJ1eOG908L3hyEZ3gYQjVbsvelDNciyfWS7Ie%2BmZ8BJnqhdnITxNwa0iYkSAsRsFNY%2BBsf%2FLfF%2Fix7fJ1g4oEUuxHz4NIpYMj%2Bie18w7bNZg%2BfFU%2BUv9m8C8fYvvgshioJOktG34F76kOmNsmA9qsjmSa76Qybd56u3QuhaqzB3CWFosN2GFJ97A9%2BKQX%2BGHK2hndnq%2BvRS9f8hROpCyZE8kxRGUXvJy8sZliT5LJ19ES4w5txNJQVqQtByczFKuTuTQEL59RHHCjzCnpKbb00zRCdlOFKZ8p%2BAwqaHoxAY6pgHPo%2Fuu6BcpW%2B%2FkZmsIPVmg9Y9Jvop0aXhYE6ONtfJmzo38ElS685BE5w05qJ8nGizsA6bPkxAUNQcn37xh%2BUfB1YZnIjAsMpcWpMx8YXIzi4c5g5NvsCoB51A9uJ4coMVlONmAMu2Oa8WOlcbd1kZrhv4JNE9AobihV6AtMfH3GKywKESsaqsVXqN%2BS%2F2pIXqdxavKoPFwl63bNMSlnZgY5IZ1zRWJ&X-Amz-Signature=35565d0222fe67cfc86389bd62f3b25eff3e137b57cd3db0abd5ff7a53644e9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPBUHYV%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFSg2u7JzMOyiqaB0bNS7D3xBMu9WvSJ0JpXUR62IO9AiBbsvgNibiCOSk%2BXnO4bsFyLkC4zHe78GCjN9LiQfpImiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZxUusybfm1bUAwFKtwD6lkeDHWATz2vLWxztV4YQjqx%2FH2qFk42P52bstRbQ5%2FDSiAWu9u%2BYSor%2Bmu8rHoskk%2Bj7aYE30bB9bTZNKKcyWxEUGg6FBdumhFjWDOCB3HUSuV9MWNQEbqxDxkBok322jWyBMAk10tvG99IqojDTg7df6epV6ox5yhkXq9LyBjzy%2BfjOXLKSBqzOV4OphYgdD8JGMp5vnLOwPxLCUapvYiUUUOBCZtnnJtELVA2tAEb0cwBgkTCnL3Oq52f2wVChdPigawqh3Hpa0fJo1fmmqXWxUyoof9q34eOx0CW0WcUbSgluMk6LbsUpFxENuzlvMSEK3H0ni4gBT8ZQJWINQHmOJ1eOG908L3hyEZ3gYQjVbsvelDNciyfWS7Ie%2BmZ8BJnqhdnITxNwa0iYkSAsRsFNY%2BBsf%2FLfF%2Fix7fJ1g4oEUuxHz4NIpYMj%2Bie18w7bNZg%2BfFU%2BUv9m8C8fYvvgshioJOktG34F76kOmNsmA9qsjmSa76Qybd56u3QuhaqzB3CWFosN2GFJ97A9%2BKQX%2BGHK2hndnq%2BvRS9f8hROpCyZE8kxRGUXvJy8sZliT5LJ19ES4w5txNJQVqQtByczFKuTuTQEL59RHHCjzCnpKbb00zRCdlOFKZ8p%2BAwqaHoxAY6pgHPo%2Fuu6BcpW%2B%2FkZmsIPVmg9Y9Jvop0aXhYE6ONtfJmzo38ElS685BE5w05qJ8nGizsA6bPkxAUNQcn37xh%2BUfB1YZnIjAsMpcWpMx8YXIzi4c5g5NvsCoB51A9uJ4coMVlONmAMu2Oa8WOlcbd1kZrhv4JNE9AobihV6AtMfH3GKywKESsaqsVXqN%2BS%2F2pIXqdxavKoPFwl63bNMSlnZgY5IZ1zRWJ&X-Amz-Signature=a052ba0a5cfda80b3fc906a4b38ca51415fdb2f8b38aa7aca0af829d0d6d10ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPBUHYV%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFSg2u7JzMOyiqaB0bNS7D3xBMu9WvSJ0JpXUR62IO9AiBbsvgNibiCOSk%2BXnO4bsFyLkC4zHe78GCjN9LiQfpImiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZxUusybfm1bUAwFKtwD6lkeDHWATz2vLWxztV4YQjqx%2FH2qFk42P52bstRbQ5%2FDSiAWu9u%2BYSor%2Bmu8rHoskk%2Bj7aYE30bB9bTZNKKcyWxEUGg6FBdumhFjWDOCB3HUSuV9MWNQEbqxDxkBok322jWyBMAk10tvG99IqojDTg7df6epV6ox5yhkXq9LyBjzy%2BfjOXLKSBqzOV4OphYgdD8JGMp5vnLOwPxLCUapvYiUUUOBCZtnnJtELVA2tAEb0cwBgkTCnL3Oq52f2wVChdPigawqh3Hpa0fJo1fmmqXWxUyoof9q34eOx0CW0WcUbSgluMk6LbsUpFxENuzlvMSEK3H0ni4gBT8ZQJWINQHmOJ1eOG908L3hyEZ3gYQjVbsvelDNciyfWS7Ie%2BmZ8BJnqhdnITxNwa0iYkSAsRsFNY%2BBsf%2FLfF%2Fix7fJ1g4oEUuxHz4NIpYMj%2Bie18w7bNZg%2BfFU%2BUv9m8C8fYvvgshioJOktG34F76kOmNsmA9qsjmSa76Qybd56u3QuhaqzB3CWFosN2GFJ97A9%2BKQX%2BGHK2hndnq%2BvRS9f8hROpCyZE8kxRGUXvJy8sZliT5LJ19ES4w5txNJQVqQtByczFKuTuTQEL59RHHCjzCnpKbb00zRCdlOFKZ8p%2BAwqaHoxAY6pgHPo%2Fuu6BcpW%2B%2FkZmsIPVmg9Y9Jvop0aXhYE6ONtfJmzo38ElS685BE5w05qJ8nGizsA6bPkxAUNQcn37xh%2BUfB1YZnIjAsMpcWpMx8YXIzi4c5g5NvsCoB51A9uJ4coMVlONmAMu2Oa8WOlcbd1kZrhv4JNE9AobihV6AtMfH3GKywKESsaqsVXqN%2BS%2F2pIXqdxavKoPFwl63bNMSlnZgY5IZ1zRWJ&X-Amz-Signature=b6d7b427e3fbb53fa624838802117cf5a031d56453e4d661122164ede8ddf500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPBUHYV%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFSg2u7JzMOyiqaB0bNS7D3xBMu9WvSJ0JpXUR62IO9AiBbsvgNibiCOSk%2BXnO4bsFyLkC4zHe78GCjN9LiQfpImiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZxUusybfm1bUAwFKtwD6lkeDHWATz2vLWxztV4YQjqx%2FH2qFk42P52bstRbQ5%2FDSiAWu9u%2BYSor%2Bmu8rHoskk%2Bj7aYE30bB9bTZNKKcyWxEUGg6FBdumhFjWDOCB3HUSuV9MWNQEbqxDxkBok322jWyBMAk10tvG99IqojDTg7df6epV6ox5yhkXq9LyBjzy%2BfjOXLKSBqzOV4OphYgdD8JGMp5vnLOwPxLCUapvYiUUUOBCZtnnJtELVA2tAEb0cwBgkTCnL3Oq52f2wVChdPigawqh3Hpa0fJo1fmmqXWxUyoof9q34eOx0CW0WcUbSgluMk6LbsUpFxENuzlvMSEK3H0ni4gBT8ZQJWINQHmOJ1eOG908L3hyEZ3gYQjVbsvelDNciyfWS7Ie%2BmZ8BJnqhdnITxNwa0iYkSAsRsFNY%2BBsf%2FLfF%2Fix7fJ1g4oEUuxHz4NIpYMj%2Bie18w7bNZg%2BfFU%2BUv9m8C8fYvvgshioJOktG34F76kOmNsmA9qsjmSa76Qybd56u3QuhaqzB3CWFosN2GFJ97A9%2BKQX%2BGHK2hndnq%2BvRS9f8hROpCyZE8kxRGUXvJy8sZliT5LJ19ES4w5txNJQVqQtByczFKuTuTQEL59RHHCjzCnpKbb00zRCdlOFKZ8p%2BAwqaHoxAY6pgHPo%2Fuu6BcpW%2B%2FkZmsIPVmg9Y9Jvop0aXhYE6ONtfJmzo38ElS685BE5w05qJ8nGizsA6bPkxAUNQcn37xh%2BUfB1YZnIjAsMpcWpMx8YXIzi4c5g5NvsCoB51A9uJ4coMVlONmAMu2Oa8WOlcbd1kZrhv4JNE9AobihV6AtMfH3GKywKESsaqsVXqN%2BS%2F2pIXqdxavKoPFwl63bNMSlnZgY5IZ1zRWJ&X-Amz-Signature=c68c5c8a3cf7e71585a54ddcff5d7d23880a61660e82ba72d75dfce05f205d4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPBUHYV%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFSg2u7JzMOyiqaB0bNS7D3xBMu9WvSJ0JpXUR62IO9AiBbsvgNibiCOSk%2BXnO4bsFyLkC4zHe78GCjN9LiQfpImiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZxUusybfm1bUAwFKtwD6lkeDHWATz2vLWxztV4YQjqx%2FH2qFk42P52bstRbQ5%2FDSiAWu9u%2BYSor%2Bmu8rHoskk%2Bj7aYE30bB9bTZNKKcyWxEUGg6FBdumhFjWDOCB3HUSuV9MWNQEbqxDxkBok322jWyBMAk10tvG99IqojDTg7df6epV6ox5yhkXq9LyBjzy%2BfjOXLKSBqzOV4OphYgdD8JGMp5vnLOwPxLCUapvYiUUUOBCZtnnJtELVA2tAEb0cwBgkTCnL3Oq52f2wVChdPigawqh3Hpa0fJo1fmmqXWxUyoof9q34eOx0CW0WcUbSgluMk6LbsUpFxENuzlvMSEK3H0ni4gBT8ZQJWINQHmOJ1eOG908L3hyEZ3gYQjVbsvelDNciyfWS7Ie%2BmZ8BJnqhdnITxNwa0iYkSAsRsFNY%2BBsf%2FLfF%2Fix7fJ1g4oEUuxHz4NIpYMj%2Bie18w7bNZg%2BfFU%2BUv9m8C8fYvvgshioJOktG34F76kOmNsmA9qsjmSa76Qybd56u3QuhaqzB3CWFosN2GFJ97A9%2BKQX%2BGHK2hndnq%2BvRS9f8hROpCyZE8kxRGUXvJy8sZliT5LJ19ES4w5txNJQVqQtByczFKuTuTQEL59RHHCjzCnpKbb00zRCdlOFKZ8p%2BAwqaHoxAY6pgHPo%2Fuu6BcpW%2B%2FkZmsIPVmg9Y9Jvop0aXhYE6ONtfJmzo38ElS685BE5w05qJ8nGizsA6bPkxAUNQcn37xh%2BUfB1YZnIjAsMpcWpMx8YXIzi4c5g5NvsCoB51A9uJ4coMVlONmAMu2Oa8WOlcbd1kZrhv4JNE9AobihV6AtMfH3GKywKESsaqsVXqN%2BS%2F2pIXqdxavKoPFwl63bNMSlnZgY5IZ1zRWJ&X-Amz-Signature=3fc83cef12eecaff16c55b2bfea2b69cc404238cbc608ee1fe40ea92a1a5b210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPBUHYV%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFSg2u7JzMOyiqaB0bNS7D3xBMu9WvSJ0JpXUR62IO9AiBbsvgNibiCOSk%2BXnO4bsFyLkC4zHe78GCjN9LiQfpImiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZxUusybfm1bUAwFKtwD6lkeDHWATz2vLWxztV4YQjqx%2FH2qFk42P52bstRbQ5%2FDSiAWu9u%2BYSor%2Bmu8rHoskk%2Bj7aYE30bB9bTZNKKcyWxEUGg6FBdumhFjWDOCB3HUSuV9MWNQEbqxDxkBok322jWyBMAk10tvG99IqojDTg7df6epV6ox5yhkXq9LyBjzy%2BfjOXLKSBqzOV4OphYgdD8JGMp5vnLOwPxLCUapvYiUUUOBCZtnnJtELVA2tAEb0cwBgkTCnL3Oq52f2wVChdPigawqh3Hpa0fJo1fmmqXWxUyoof9q34eOx0CW0WcUbSgluMk6LbsUpFxENuzlvMSEK3H0ni4gBT8ZQJWINQHmOJ1eOG908L3hyEZ3gYQjVbsvelDNciyfWS7Ie%2BmZ8BJnqhdnITxNwa0iYkSAsRsFNY%2BBsf%2FLfF%2Fix7fJ1g4oEUuxHz4NIpYMj%2Bie18w7bNZg%2BfFU%2BUv9m8C8fYvvgshioJOktG34F76kOmNsmA9qsjmSa76Qybd56u3QuhaqzB3CWFosN2GFJ97A9%2BKQX%2BGHK2hndnq%2BvRS9f8hROpCyZE8kxRGUXvJy8sZliT5LJ19ES4w5txNJQVqQtByczFKuTuTQEL59RHHCjzCnpKbb00zRCdlOFKZ8p%2BAwqaHoxAY6pgHPo%2Fuu6BcpW%2B%2FkZmsIPVmg9Y9Jvop0aXhYE6ONtfJmzo38ElS685BE5w05qJ8nGizsA6bPkxAUNQcn37xh%2BUfB1YZnIjAsMpcWpMx8YXIzi4c5g5NvsCoB51A9uJ4coMVlONmAMu2Oa8WOlcbd1kZrhv4JNE9AobihV6AtMfH3GKywKESsaqsVXqN%2BS%2F2pIXqdxavKoPFwl63bNMSlnZgY5IZ1zRWJ&X-Amz-Signature=b308d5e1971cfb5db7ab224a89b4930d80309635fdf19b849746a925e62f7cba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
