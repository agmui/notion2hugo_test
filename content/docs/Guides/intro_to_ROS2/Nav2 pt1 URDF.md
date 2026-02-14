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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4Q5LV3%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDfGFaTokv8cS0%2Bkz%2F6x4uZoGQHLiJbBkfe9Ge5iJ%2Fa5gIhAOXyo9Oj7rnzhxQWvKYxR9XY%2F7DcBXxr1dkscrYW6cr%2FKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHvXxHZxA5UTNIU8Yq3AOx1bx3OabiYEiWwKVr5qoUNEbVKhqL3kiqY6fZZ8moZECKhpZW5sT%2FvZXGHaozSUqXEIAGReEbDPLHCYQ4htQz1tcKrqmF6H%2BA9tkHR8ReSNV47KWVokPxyT2M137%2Fe8LbSj2vM2%2BgMQr0VDLpMMWKuXMX2De5MROZxFI%2B0B%2BL48m6di8ODO5KyGkHykHnRoBkoxxnzlCRvn80r5oTunLEl4s4Ii71%2FPSDIO7VCarpStqnHWZGCeTtBgAV%2FFvSMUbz2h%2F4VAAUDoGFttZzRFTxxgJSKRrPdWtYfMhIrB9FwjzO1d3pICDfFHYC53pe5T7NQsbViI%2FcTph1hk11Wqb6qhIwbPkqM9JMk6NaePLgTjPXTokVY8R%2BSihYW2IJTouJjINSmh%2FlfGbHH%2FoTYNp8Hg%2ByvTz0CCmJ1pSNO4MZnNI%2BivmmH3BBZpxI%2BSQ4ASpCwJS1H6a7CIwOBj7j%2B1H%2FUHMSInUx7E%2FMXJcIqE4%2FtZNC2WMwKhAdppf0qpE3EhSUnN0x8Ej5xBopKzxLxwDt5Ni%2BctkBaQwKzcWmBwNw0IQnPOBoynQ4P63KtiYSXAUa0KwxKE4bnRrVra%2BKAaWzl81evR%2FMnIOvCuc5LcIteOJxvSIRzwzE0vvn7jDXkr%2FMBjqkAdJ2K8CXFLanhIjd4EaZJPS33xc3AvSr9yuAnSUVJNQPj1LdxndAHoiayZUSo2nj0KeFYCfBU31rf%2BFmtnApDMKsovW7V5%2FgE1bmo5hYbaaEuJ45UPVlbZKYnMn%2BfQO1N8CFbIi%2BBwOgGv1j%2BwjMapcFt3EEsG1bk2sOdz7SprrUitiWCFNCwJ%2B%2FEiaOBzMZ3HATE7KZMfUL7DuVKR9q%2BH4u7xTW&X-Amz-Signature=39519474ac01168a0232fa586a943a9f10462672227ecd0949b42a9be6b8aa1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4Q5LV3%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDfGFaTokv8cS0%2Bkz%2F6x4uZoGQHLiJbBkfe9Ge5iJ%2Fa5gIhAOXyo9Oj7rnzhxQWvKYxR9XY%2F7DcBXxr1dkscrYW6cr%2FKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHvXxHZxA5UTNIU8Yq3AOx1bx3OabiYEiWwKVr5qoUNEbVKhqL3kiqY6fZZ8moZECKhpZW5sT%2FvZXGHaozSUqXEIAGReEbDPLHCYQ4htQz1tcKrqmF6H%2BA9tkHR8ReSNV47KWVokPxyT2M137%2Fe8LbSj2vM2%2BgMQr0VDLpMMWKuXMX2De5MROZxFI%2B0B%2BL48m6di8ODO5KyGkHykHnRoBkoxxnzlCRvn80r5oTunLEl4s4Ii71%2FPSDIO7VCarpStqnHWZGCeTtBgAV%2FFvSMUbz2h%2F4VAAUDoGFttZzRFTxxgJSKRrPdWtYfMhIrB9FwjzO1d3pICDfFHYC53pe5T7NQsbViI%2FcTph1hk11Wqb6qhIwbPkqM9JMk6NaePLgTjPXTokVY8R%2BSihYW2IJTouJjINSmh%2FlfGbHH%2FoTYNp8Hg%2ByvTz0CCmJ1pSNO4MZnNI%2BivmmH3BBZpxI%2BSQ4ASpCwJS1H6a7CIwOBj7j%2B1H%2FUHMSInUx7E%2FMXJcIqE4%2FtZNC2WMwKhAdppf0qpE3EhSUnN0x8Ej5xBopKzxLxwDt5Ni%2BctkBaQwKzcWmBwNw0IQnPOBoynQ4P63KtiYSXAUa0KwxKE4bnRrVra%2BKAaWzl81evR%2FMnIOvCuc5LcIteOJxvSIRzwzE0vvn7jDXkr%2FMBjqkAdJ2K8CXFLanhIjd4EaZJPS33xc3AvSr9yuAnSUVJNQPj1LdxndAHoiayZUSo2nj0KeFYCfBU31rf%2BFmtnApDMKsovW7V5%2FgE1bmo5hYbaaEuJ45UPVlbZKYnMn%2BfQO1N8CFbIi%2BBwOgGv1j%2BwjMapcFt3EEsG1bk2sOdz7SprrUitiWCFNCwJ%2B%2FEiaOBzMZ3HATE7KZMfUL7DuVKR9q%2BH4u7xTW&X-Amz-Signature=ed588c795d0ecbf18bf6c026a0c9c1d16b4dd30af6dd8452a39f3c86a3a7a484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4Q5LV3%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDfGFaTokv8cS0%2Bkz%2F6x4uZoGQHLiJbBkfe9Ge5iJ%2Fa5gIhAOXyo9Oj7rnzhxQWvKYxR9XY%2F7DcBXxr1dkscrYW6cr%2FKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHvXxHZxA5UTNIU8Yq3AOx1bx3OabiYEiWwKVr5qoUNEbVKhqL3kiqY6fZZ8moZECKhpZW5sT%2FvZXGHaozSUqXEIAGReEbDPLHCYQ4htQz1tcKrqmF6H%2BA9tkHR8ReSNV47KWVokPxyT2M137%2Fe8LbSj2vM2%2BgMQr0VDLpMMWKuXMX2De5MROZxFI%2B0B%2BL48m6di8ODO5KyGkHykHnRoBkoxxnzlCRvn80r5oTunLEl4s4Ii71%2FPSDIO7VCarpStqnHWZGCeTtBgAV%2FFvSMUbz2h%2F4VAAUDoGFttZzRFTxxgJSKRrPdWtYfMhIrB9FwjzO1d3pICDfFHYC53pe5T7NQsbViI%2FcTph1hk11Wqb6qhIwbPkqM9JMk6NaePLgTjPXTokVY8R%2BSihYW2IJTouJjINSmh%2FlfGbHH%2FoTYNp8Hg%2ByvTz0CCmJ1pSNO4MZnNI%2BivmmH3BBZpxI%2BSQ4ASpCwJS1H6a7CIwOBj7j%2B1H%2FUHMSInUx7E%2FMXJcIqE4%2FtZNC2WMwKhAdppf0qpE3EhSUnN0x8Ej5xBopKzxLxwDt5Ni%2BctkBaQwKzcWmBwNw0IQnPOBoynQ4P63KtiYSXAUa0KwxKE4bnRrVra%2BKAaWzl81evR%2FMnIOvCuc5LcIteOJxvSIRzwzE0vvn7jDXkr%2FMBjqkAdJ2K8CXFLanhIjd4EaZJPS33xc3AvSr9yuAnSUVJNQPj1LdxndAHoiayZUSo2nj0KeFYCfBU31rf%2BFmtnApDMKsovW7V5%2FgE1bmo5hYbaaEuJ45UPVlbZKYnMn%2BfQO1N8CFbIi%2BBwOgGv1j%2BwjMapcFt3EEsG1bk2sOdz7SprrUitiWCFNCwJ%2B%2FEiaOBzMZ3HATE7KZMfUL7DuVKR9q%2BH4u7xTW&X-Amz-Signature=88c4b6a2f95d619f303a8772575ff06d46ad8bcea5410dfb4b0297de0b706236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4Q5LV3%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDfGFaTokv8cS0%2Bkz%2F6x4uZoGQHLiJbBkfe9Ge5iJ%2Fa5gIhAOXyo9Oj7rnzhxQWvKYxR9XY%2F7DcBXxr1dkscrYW6cr%2FKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHvXxHZxA5UTNIU8Yq3AOx1bx3OabiYEiWwKVr5qoUNEbVKhqL3kiqY6fZZ8moZECKhpZW5sT%2FvZXGHaozSUqXEIAGReEbDPLHCYQ4htQz1tcKrqmF6H%2BA9tkHR8ReSNV47KWVokPxyT2M137%2Fe8LbSj2vM2%2BgMQr0VDLpMMWKuXMX2De5MROZxFI%2B0B%2BL48m6di8ODO5KyGkHykHnRoBkoxxnzlCRvn80r5oTunLEl4s4Ii71%2FPSDIO7VCarpStqnHWZGCeTtBgAV%2FFvSMUbz2h%2F4VAAUDoGFttZzRFTxxgJSKRrPdWtYfMhIrB9FwjzO1d3pICDfFHYC53pe5T7NQsbViI%2FcTph1hk11Wqb6qhIwbPkqM9JMk6NaePLgTjPXTokVY8R%2BSihYW2IJTouJjINSmh%2FlfGbHH%2FoTYNp8Hg%2ByvTz0CCmJ1pSNO4MZnNI%2BivmmH3BBZpxI%2BSQ4ASpCwJS1H6a7CIwOBj7j%2B1H%2FUHMSInUx7E%2FMXJcIqE4%2FtZNC2WMwKhAdppf0qpE3EhSUnN0x8Ej5xBopKzxLxwDt5Ni%2BctkBaQwKzcWmBwNw0IQnPOBoynQ4P63KtiYSXAUa0KwxKE4bnRrVra%2BKAaWzl81evR%2FMnIOvCuc5LcIteOJxvSIRzwzE0vvn7jDXkr%2FMBjqkAdJ2K8CXFLanhIjd4EaZJPS33xc3AvSr9yuAnSUVJNQPj1LdxndAHoiayZUSo2nj0KeFYCfBU31rf%2BFmtnApDMKsovW7V5%2FgE1bmo5hYbaaEuJ45UPVlbZKYnMn%2BfQO1N8CFbIi%2BBwOgGv1j%2BwjMapcFt3EEsG1bk2sOdz7SprrUitiWCFNCwJ%2B%2FEiaOBzMZ3HATE7KZMfUL7DuVKR9q%2BH4u7xTW&X-Amz-Signature=eea5704cf2ea788582a11bd3a46c7f0f20e34d8386ee19740c12bd34986c5e22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4Q5LV3%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDfGFaTokv8cS0%2Bkz%2F6x4uZoGQHLiJbBkfe9Ge5iJ%2Fa5gIhAOXyo9Oj7rnzhxQWvKYxR9XY%2F7DcBXxr1dkscrYW6cr%2FKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHvXxHZxA5UTNIU8Yq3AOx1bx3OabiYEiWwKVr5qoUNEbVKhqL3kiqY6fZZ8moZECKhpZW5sT%2FvZXGHaozSUqXEIAGReEbDPLHCYQ4htQz1tcKrqmF6H%2BA9tkHR8ReSNV47KWVokPxyT2M137%2Fe8LbSj2vM2%2BgMQr0VDLpMMWKuXMX2De5MROZxFI%2B0B%2BL48m6di8ODO5KyGkHykHnRoBkoxxnzlCRvn80r5oTunLEl4s4Ii71%2FPSDIO7VCarpStqnHWZGCeTtBgAV%2FFvSMUbz2h%2F4VAAUDoGFttZzRFTxxgJSKRrPdWtYfMhIrB9FwjzO1d3pICDfFHYC53pe5T7NQsbViI%2FcTph1hk11Wqb6qhIwbPkqM9JMk6NaePLgTjPXTokVY8R%2BSihYW2IJTouJjINSmh%2FlfGbHH%2FoTYNp8Hg%2ByvTz0CCmJ1pSNO4MZnNI%2BivmmH3BBZpxI%2BSQ4ASpCwJS1H6a7CIwOBj7j%2B1H%2FUHMSInUx7E%2FMXJcIqE4%2FtZNC2WMwKhAdppf0qpE3EhSUnN0x8Ej5xBopKzxLxwDt5Ni%2BctkBaQwKzcWmBwNw0IQnPOBoynQ4P63KtiYSXAUa0KwxKE4bnRrVra%2BKAaWzl81evR%2FMnIOvCuc5LcIteOJxvSIRzwzE0vvn7jDXkr%2FMBjqkAdJ2K8CXFLanhIjd4EaZJPS33xc3AvSr9yuAnSUVJNQPj1LdxndAHoiayZUSo2nj0KeFYCfBU31rf%2BFmtnApDMKsovW7V5%2FgE1bmo5hYbaaEuJ45UPVlbZKYnMn%2BfQO1N8CFbIi%2BBwOgGv1j%2BwjMapcFt3EEsG1bk2sOdz7SprrUitiWCFNCwJ%2B%2FEiaOBzMZ3HATE7KZMfUL7DuVKR9q%2BH4u7xTW&X-Amz-Signature=e13a8916baeb1d33ce6ce1c490b7fa9a2a05ed058ee53a7ce2d8bc901c0baac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4Q5LV3%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDfGFaTokv8cS0%2Bkz%2F6x4uZoGQHLiJbBkfe9Ge5iJ%2Fa5gIhAOXyo9Oj7rnzhxQWvKYxR9XY%2F7DcBXxr1dkscrYW6cr%2FKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHvXxHZxA5UTNIU8Yq3AOx1bx3OabiYEiWwKVr5qoUNEbVKhqL3kiqY6fZZ8moZECKhpZW5sT%2FvZXGHaozSUqXEIAGReEbDPLHCYQ4htQz1tcKrqmF6H%2BA9tkHR8ReSNV47KWVokPxyT2M137%2Fe8LbSj2vM2%2BgMQr0VDLpMMWKuXMX2De5MROZxFI%2B0B%2BL48m6di8ODO5KyGkHykHnRoBkoxxnzlCRvn80r5oTunLEl4s4Ii71%2FPSDIO7VCarpStqnHWZGCeTtBgAV%2FFvSMUbz2h%2F4VAAUDoGFttZzRFTxxgJSKRrPdWtYfMhIrB9FwjzO1d3pICDfFHYC53pe5T7NQsbViI%2FcTph1hk11Wqb6qhIwbPkqM9JMk6NaePLgTjPXTokVY8R%2BSihYW2IJTouJjINSmh%2FlfGbHH%2FoTYNp8Hg%2ByvTz0CCmJ1pSNO4MZnNI%2BivmmH3BBZpxI%2BSQ4ASpCwJS1H6a7CIwOBj7j%2B1H%2FUHMSInUx7E%2FMXJcIqE4%2FtZNC2WMwKhAdppf0qpE3EhSUnN0x8Ej5xBopKzxLxwDt5Ni%2BctkBaQwKzcWmBwNw0IQnPOBoynQ4P63KtiYSXAUa0KwxKE4bnRrVra%2BKAaWzl81evR%2FMnIOvCuc5LcIteOJxvSIRzwzE0vvn7jDXkr%2FMBjqkAdJ2K8CXFLanhIjd4EaZJPS33xc3AvSr9yuAnSUVJNQPj1LdxndAHoiayZUSo2nj0KeFYCfBU31rf%2BFmtnApDMKsovW7V5%2FgE1bmo5hYbaaEuJ45UPVlbZKYnMn%2BfQO1N8CFbIi%2BBwOgGv1j%2BwjMapcFt3EEsG1bk2sOdz7SprrUitiWCFNCwJ%2B%2FEiaOBzMZ3HATE7KZMfUL7DuVKR9q%2BH4u7xTW&X-Amz-Signature=e76e4fec15f5704e02ad50294ba58fd04b16ec52b60cfcdbded906838be8e996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4Q5LV3%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDfGFaTokv8cS0%2Bkz%2F6x4uZoGQHLiJbBkfe9Ge5iJ%2Fa5gIhAOXyo9Oj7rnzhxQWvKYxR9XY%2F7DcBXxr1dkscrYW6cr%2FKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHvXxHZxA5UTNIU8Yq3AOx1bx3OabiYEiWwKVr5qoUNEbVKhqL3kiqY6fZZ8moZECKhpZW5sT%2FvZXGHaozSUqXEIAGReEbDPLHCYQ4htQz1tcKrqmF6H%2BA9tkHR8ReSNV47KWVokPxyT2M137%2Fe8LbSj2vM2%2BgMQr0VDLpMMWKuXMX2De5MROZxFI%2B0B%2BL48m6di8ODO5KyGkHykHnRoBkoxxnzlCRvn80r5oTunLEl4s4Ii71%2FPSDIO7VCarpStqnHWZGCeTtBgAV%2FFvSMUbz2h%2F4VAAUDoGFttZzRFTxxgJSKRrPdWtYfMhIrB9FwjzO1d3pICDfFHYC53pe5T7NQsbViI%2FcTph1hk11Wqb6qhIwbPkqM9JMk6NaePLgTjPXTokVY8R%2BSihYW2IJTouJjINSmh%2FlfGbHH%2FoTYNp8Hg%2ByvTz0CCmJ1pSNO4MZnNI%2BivmmH3BBZpxI%2BSQ4ASpCwJS1H6a7CIwOBj7j%2B1H%2FUHMSInUx7E%2FMXJcIqE4%2FtZNC2WMwKhAdppf0qpE3EhSUnN0x8Ej5xBopKzxLxwDt5Ni%2BctkBaQwKzcWmBwNw0IQnPOBoynQ4P63KtiYSXAUa0KwxKE4bnRrVra%2BKAaWzl81evR%2FMnIOvCuc5LcIteOJxvSIRzwzE0vvn7jDXkr%2FMBjqkAdJ2K8CXFLanhIjd4EaZJPS33xc3AvSr9yuAnSUVJNQPj1LdxndAHoiayZUSo2nj0KeFYCfBU31rf%2BFmtnApDMKsovW7V5%2FgE1bmo5hYbaaEuJ45UPVlbZKYnMn%2BfQO1N8CFbIi%2BBwOgGv1j%2BwjMapcFt3EEsG1bk2sOdz7SprrUitiWCFNCwJ%2B%2FEiaOBzMZ3HATE7KZMfUL7DuVKR9q%2BH4u7xTW&X-Amz-Signature=0c40141955cd7ce47e02ca3327e6606fad7d5174ee932565a74fc854a2f6fba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4Q5LV3%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDfGFaTokv8cS0%2Bkz%2F6x4uZoGQHLiJbBkfe9Ge5iJ%2Fa5gIhAOXyo9Oj7rnzhxQWvKYxR9XY%2F7DcBXxr1dkscrYW6cr%2FKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHvXxHZxA5UTNIU8Yq3AOx1bx3OabiYEiWwKVr5qoUNEbVKhqL3kiqY6fZZ8moZECKhpZW5sT%2FvZXGHaozSUqXEIAGReEbDPLHCYQ4htQz1tcKrqmF6H%2BA9tkHR8ReSNV47KWVokPxyT2M137%2Fe8LbSj2vM2%2BgMQr0VDLpMMWKuXMX2De5MROZxFI%2B0B%2BL48m6di8ODO5KyGkHykHnRoBkoxxnzlCRvn80r5oTunLEl4s4Ii71%2FPSDIO7VCarpStqnHWZGCeTtBgAV%2FFvSMUbz2h%2F4VAAUDoGFttZzRFTxxgJSKRrPdWtYfMhIrB9FwjzO1d3pICDfFHYC53pe5T7NQsbViI%2FcTph1hk11Wqb6qhIwbPkqM9JMk6NaePLgTjPXTokVY8R%2BSihYW2IJTouJjINSmh%2FlfGbHH%2FoTYNp8Hg%2ByvTz0CCmJ1pSNO4MZnNI%2BivmmH3BBZpxI%2BSQ4ASpCwJS1H6a7CIwOBj7j%2B1H%2FUHMSInUx7E%2FMXJcIqE4%2FtZNC2WMwKhAdppf0qpE3EhSUnN0x8Ej5xBopKzxLxwDt5Ni%2BctkBaQwKzcWmBwNw0IQnPOBoynQ4P63KtiYSXAUa0KwxKE4bnRrVra%2BKAaWzl81evR%2FMnIOvCuc5LcIteOJxvSIRzwzE0vvn7jDXkr%2FMBjqkAdJ2K8CXFLanhIjd4EaZJPS33xc3AvSr9yuAnSUVJNQPj1LdxndAHoiayZUSo2nj0KeFYCfBU31rf%2BFmtnApDMKsovW7V5%2FgE1bmo5hYbaaEuJ45UPVlbZKYnMn%2BfQO1N8CFbIi%2BBwOgGv1j%2BwjMapcFt3EEsG1bk2sOdz7SprrUitiWCFNCwJ%2B%2FEiaOBzMZ3HATE7KZMfUL7DuVKR9q%2BH4u7xTW&X-Amz-Signature=bbaf232735bc0a90d4f541ac1b0597b5debd1b7c1c039c3d931a8dac889481ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4Q5LV3%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDfGFaTokv8cS0%2Bkz%2F6x4uZoGQHLiJbBkfe9Ge5iJ%2Fa5gIhAOXyo9Oj7rnzhxQWvKYxR9XY%2F7DcBXxr1dkscrYW6cr%2FKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHvXxHZxA5UTNIU8Yq3AOx1bx3OabiYEiWwKVr5qoUNEbVKhqL3kiqY6fZZ8moZECKhpZW5sT%2FvZXGHaozSUqXEIAGReEbDPLHCYQ4htQz1tcKrqmF6H%2BA9tkHR8ReSNV47KWVokPxyT2M137%2Fe8LbSj2vM2%2BgMQr0VDLpMMWKuXMX2De5MROZxFI%2B0B%2BL48m6di8ODO5KyGkHykHnRoBkoxxnzlCRvn80r5oTunLEl4s4Ii71%2FPSDIO7VCarpStqnHWZGCeTtBgAV%2FFvSMUbz2h%2F4VAAUDoGFttZzRFTxxgJSKRrPdWtYfMhIrB9FwjzO1d3pICDfFHYC53pe5T7NQsbViI%2FcTph1hk11Wqb6qhIwbPkqM9JMk6NaePLgTjPXTokVY8R%2BSihYW2IJTouJjINSmh%2FlfGbHH%2FoTYNp8Hg%2ByvTz0CCmJ1pSNO4MZnNI%2BivmmH3BBZpxI%2BSQ4ASpCwJS1H6a7CIwOBj7j%2B1H%2FUHMSInUx7E%2FMXJcIqE4%2FtZNC2WMwKhAdppf0qpE3EhSUnN0x8Ej5xBopKzxLxwDt5Ni%2BctkBaQwKzcWmBwNw0IQnPOBoynQ4P63KtiYSXAUa0KwxKE4bnRrVra%2BKAaWzl81evR%2FMnIOvCuc5LcIteOJxvSIRzwzE0vvn7jDXkr%2FMBjqkAdJ2K8CXFLanhIjd4EaZJPS33xc3AvSr9yuAnSUVJNQPj1LdxndAHoiayZUSo2nj0KeFYCfBU31rf%2BFmtnApDMKsovW7V5%2FgE1bmo5hYbaaEuJ45UPVlbZKYnMn%2BfQO1N8CFbIi%2BBwOgGv1j%2BwjMapcFt3EEsG1bk2sOdz7SprrUitiWCFNCwJ%2B%2FEiaOBzMZ3HATE7KZMfUL7DuVKR9q%2BH4u7xTW&X-Amz-Signature=9ae648b3ecba096fbf31ec51fa7893dff98c12c50dd78355078e9d7d0cc6a709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4Q5LV3%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDfGFaTokv8cS0%2Bkz%2F6x4uZoGQHLiJbBkfe9Ge5iJ%2Fa5gIhAOXyo9Oj7rnzhxQWvKYxR9XY%2F7DcBXxr1dkscrYW6cr%2FKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHvXxHZxA5UTNIU8Yq3AOx1bx3OabiYEiWwKVr5qoUNEbVKhqL3kiqY6fZZ8moZECKhpZW5sT%2FvZXGHaozSUqXEIAGReEbDPLHCYQ4htQz1tcKrqmF6H%2BA9tkHR8ReSNV47KWVokPxyT2M137%2Fe8LbSj2vM2%2BgMQr0VDLpMMWKuXMX2De5MROZxFI%2B0B%2BL48m6di8ODO5KyGkHykHnRoBkoxxnzlCRvn80r5oTunLEl4s4Ii71%2FPSDIO7VCarpStqnHWZGCeTtBgAV%2FFvSMUbz2h%2F4VAAUDoGFttZzRFTxxgJSKRrPdWtYfMhIrB9FwjzO1d3pICDfFHYC53pe5T7NQsbViI%2FcTph1hk11Wqb6qhIwbPkqM9JMk6NaePLgTjPXTokVY8R%2BSihYW2IJTouJjINSmh%2FlfGbHH%2FoTYNp8Hg%2ByvTz0CCmJ1pSNO4MZnNI%2BivmmH3BBZpxI%2BSQ4ASpCwJS1H6a7CIwOBj7j%2B1H%2FUHMSInUx7E%2FMXJcIqE4%2FtZNC2WMwKhAdppf0qpE3EhSUnN0x8Ej5xBopKzxLxwDt5Ni%2BctkBaQwKzcWmBwNw0IQnPOBoynQ4P63KtiYSXAUa0KwxKE4bnRrVra%2BKAaWzl81evR%2FMnIOvCuc5LcIteOJxvSIRzwzE0vvn7jDXkr%2FMBjqkAdJ2K8CXFLanhIjd4EaZJPS33xc3AvSr9yuAnSUVJNQPj1LdxndAHoiayZUSo2nj0KeFYCfBU31rf%2BFmtnApDMKsovW7V5%2FgE1bmo5hYbaaEuJ45UPVlbZKYnMn%2BfQO1N8CFbIi%2BBwOgGv1j%2BwjMapcFt3EEsG1bk2sOdz7SprrUitiWCFNCwJ%2B%2FEiaOBzMZ3HATE7KZMfUL7DuVKR9q%2BH4u7xTW&X-Amz-Signature=3fa5b1919f025125825fb17a911fd8a08740096564e35886d693ad0f5b402c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMAXO6SS%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAo7D8fo93xLt6qf9ObUOt5z3WNFZ3HEVWQfExtovbF6AiBBJd7IASm19Dn6J%2Fn0NLmZJ4CMnSl6g7TknXIGlITEvyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNkTgwEl8GbacGDIIKtwDzTcQkhZnA4y7fq%2FNhuGvmU3Oh1pY59EO1TiZ3ASEA3g%2B8LiE1Ox9a3xviFDesVPvyHm1XVE9LxBOS4FmQyyiLb0tf1K8XQXcGue4cKQ88PErDk8PcE6lYWLG7682kGRZIyCT8%2F16Dsdq%2B45Zslo1kIy2E6SwJhnyqdiyXGOsENlPg5E6UbZE6uUB3In90Cha94y7UM3dokWotr%2FpM9UiuxiKdNs3a9fGTOOtB%2BFWgRpFKyQr%2BZwug6ZS3g0nTm1xX16hKM7%2FOvyNcdxMV2WJw8zuyUhgd%2BLZuSHpYzbNRcVXL03gOUQxmR1v9nVe380kyNsDCEJrdrOnPE%2B%2BNypP26VOpdJDNukodWq2J53op7NypDlxj%2BPlsV0fJ56D%2FTJLSFyrcnlxw9XVUJQj%2FGinZBoS4Y417uNgC%2BXJmaaQMQvd%2FBEX0cutMXCVI3Y77Jlo%2FGTustueCvbtzNFUa4qmYnF84nkwsEIRQPZi5fyqN73JWgloNTbkKsniCRA8OwfcjIJhdbh%2BPnICG2zslQyhIfeEoDaoyBTVzs6heDdN2M0F5X0mpw6NrL9g8HvixJ%2By0ruEbukutsKpAJzMa3wgNTFY2Q2TtWUMeHtB2Z6e9e%2F%2BP5eKW4gdaDo8TG4wrZO%2FzAY6pgHYCjcBPqQNqTxeqGvVNIeD7pDSPMKSFJWSxpoXPiV46JqIin3URjx4X%2FgoQWuDRBnZTCuzFKuNTc1mbUXwp0YJi8MFdDpGEZ9hV%2BWYFJlOaTklYnlUj%2FGtlDF8fvUjXKPq1Vwnmziq9jFclN48jpOVO3xmbAww7vlNw854L%2Bt%2B3dUJW1hI%2BNKF1ldcjF5s6FunSbPvbseS2EKNHWfi1tKzeMPhuzPy&X-Amz-Signature=ca2f4848aca88c698b3558f25e289191c98c7a984b898fc7818c71455412f594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJFINGZX%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAUhLTzKaKGb3YNbxLAKe6O9PTPrK2GrqmW7wBfcnNL%2BAiABDgtwMywo6cxSJs%2B%2FrZhaoRqC%2FSSAOtKzxxb59szuNiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxJ%2F%2Bk8YL6g5YmPYyKtwDIJz1U8LTnzbSCj8VmOarNBSvgcFJUxd2S9Iu4KRh21DbAncxJ1yO6lq4eChejLxXL5UlFWo5os0Us%2BB4LRfk44pd0aRk%2FEWoyzImIN1gWIguPzH9JWp8KxzavsaEP29MJ6egEBPUycFwVj1lEQBd0sn%2FukJGSLeu4OvNWgzHp%2BzDm9c2ThDwFMfj%2BLNbWcWKOeGtKkh3junLokyR51lJpwVCKwlEI8%2BTR9GjeA2pFQMXAk0sH4PvCgwuxv5eVhJRoMJKUxjLfBJwx40bXxiNog%2BnEdGo4Qi%2BNVoTyMu%2FR15lG%2BNWYnhdfhUe7kueImApbBkSh2GkVnlTMRz74jk0mH4%2F%2BBTKt9i%2BUDtTrp0PsGpixsz9ShMUHxfttAJQ2o1ZXInHdqWedefbL7c5cBINxNgMzJVvZL9VhKhid1t5316L93t9LYttRY2X8Qv7aP0gz9lklXC7KuIGuPiL1gvt0I%2FOCZ6bEKuPeY8yY3I8lJEZutgzoKZSGLtDP9e8rOuZHlWmPcFGlplHw0C5Va4s5IWVOc4wFZ9vexOmZlYgDgDjNe29UkXI6A1PuWDjc3WYxPCPKoY2BrFMUgbIfxv6w90Giu4KOfsH4mtG1pJKg9ynV2RRBVYLEPLlqWUwzZO%2FzAY6pgFcHZ4PSmoZx7TkT6GPQ7C81Ecgq60NmKcsA0ZKU%2BhJsYBUAB7%2FEm%2F4TgEENgXFYrjV5G3I%2FT2dwLlFfBh8MfGimyUsn9uI5TuJKjcVZ08jARAv2qYQcTdEyZSao96%2F8t6oGMkZ3NcB6eaaIB7LPkMQr5TnuMZm7P1Db6KzCQgPK3YEOaiq2aIl%2B2tGNdqmhLw4qGvYFdyuJInI7uqE%2FDXGZ4Vc7i9E&X-Amz-Signature=6c48cd0b5775c713d88e96c757384a4b492c0b87b5ee9b0341bf8e4c2b6230ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HNFSZMW%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIE%2BS9z1M4c%2B6IOLPi6k6R4BqPPRvGKGkRXXZyyM5yUA%2FAiBy%2BwdT%2ByQ1z1JkIlt%2Fiodgvc9jtv57uOBwyPcZBmGy1yqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKuetDPJ20ktgihK0KtwDyEoNUxMLU9EkfDF9eX75iYakZdnF68188c9eG3SkIITOu%2BJxH%2FTEnNKPfV0YfsohD9NTfg8o177KiNpRog6AviD5S9ptAlP17sijYonFqes%2BL%2BSNpkK1tDKAPTjGmzojS4EtDDVKTCzyT79%2F1Z5BCIKf8Ycz2JJrlgKmzjI0tWUAzJCpS3%2F%2FJjGuttfiSosUOjHYYERrkeRh7x0i%2B7Pw3jP%2BjjieQU3BIVX5ieoMNrNax6DhUIqp%2Bsq9rz460%2BrlacvZdHM8C%2Frk7L6S%2BoPrI63R%2B18TqysaKfyZgBdoqxEgxke%2BS7Wng%2BBoCirQooOcobXx%2BsiN7whEU4ErobQnpcuu8c69R7Q%2FYSSnyIPMS90x2hiXTFdLPqVrxw%2Fmac0wY330yk%2FOQ1vJWgE50bbGoGZhSeV8l9JeaALXzRJCMFHur4%2BcYdBWm0TcXlxjVoeu9%2BYIPiM8vAVPky%2FjRPybMuy3q3BNGDMaCi0jy5A8J0HZWSKdICrqchzA8ot2Wjt5SB11GCATBco5QDa%2B0oY1q%2FkVOOkdbAT1xoLCWD%2BJBUYMnPXrXKCxlb5QRlYtFRPtd4h5qSXgp%2BN1z1z5Jwl%2BomqMG1d%2BMHZ90MAGhVHay6eEC5qQTJlsdyL1iXgwgpO%2FzAY6pgFhDldV1wswrx1N7CPgx7aVOe652gVRm1m1JeCegqKQkgJSO6rygkOs%2FSwfnZCYNbUjqoNechLi4YUKWxTi%2FS4CHHtTBHaACYnEkv7%2FSXldAwcgOfn7mrS1p6CAKtk0FGwMc46sGWZ5nO6W8bxbhDmBB3G0ugxGUMMKLYOP%2BIhLLqNCeG86%2F%2B4Uwueqc1oAuOmCO7c6pzQWJgfjZKxfGz5vur3CPoOn&X-Amz-Signature=6a9552ae19769b1a8f5a82ef36f38b939c0255eeb9106e61561fd26899ee8aeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4Q5LV3%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDfGFaTokv8cS0%2Bkz%2F6x4uZoGQHLiJbBkfe9Ge5iJ%2Fa5gIhAOXyo9Oj7rnzhxQWvKYxR9XY%2F7DcBXxr1dkscrYW6cr%2FKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHvXxHZxA5UTNIU8Yq3AOx1bx3OabiYEiWwKVr5qoUNEbVKhqL3kiqY6fZZ8moZECKhpZW5sT%2FvZXGHaozSUqXEIAGReEbDPLHCYQ4htQz1tcKrqmF6H%2BA9tkHR8ReSNV47KWVokPxyT2M137%2Fe8LbSj2vM2%2BgMQr0VDLpMMWKuXMX2De5MROZxFI%2B0B%2BL48m6di8ODO5KyGkHykHnRoBkoxxnzlCRvn80r5oTunLEl4s4Ii71%2FPSDIO7VCarpStqnHWZGCeTtBgAV%2FFvSMUbz2h%2F4VAAUDoGFttZzRFTxxgJSKRrPdWtYfMhIrB9FwjzO1d3pICDfFHYC53pe5T7NQsbViI%2FcTph1hk11Wqb6qhIwbPkqM9JMk6NaePLgTjPXTokVY8R%2BSihYW2IJTouJjINSmh%2FlfGbHH%2FoTYNp8Hg%2ByvTz0CCmJ1pSNO4MZnNI%2BivmmH3BBZpxI%2BSQ4ASpCwJS1H6a7CIwOBj7j%2B1H%2FUHMSInUx7E%2FMXJcIqE4%2FtZNC2WMwKhAdppf0qpE3EhSUnN0x8Ej5xBopKzxLxwDt5Ni%2BctkBaQwKzcWmBwNw0IQnPOBoynQ4P63KtiYSXAUa0KwxKE4bnRrVra%2BKAaWzl81evR%2FMnIOvCuc5LcIteOJxvSIRzwzE0vvn7jDXkr%2FMBjqkAdJ2K8CXFLanhIjd4EaZJPS33xc3AvSr9yuAnSUVJNQPj1LdxndAHoiayZUSo2nj0KeFYCfBU31rf%2BFmtnApDMKsovW7V5%2FgE1bmo5hYbaaEuJ45UPVlbZKYnMn%2BfQO1N8CFbIi%2BBwOgGv1j%2BwjMapcFt3EEsG1bk2sOdz7SprrUitiWCFNCwJ%2B%2FEiaOBzMZ3HATE7KZMfUL7DuVKR9q%2BH4u7xTW&X-Amz-Signature=c981deadd2e1bce22c4d6c7a5cdf88fafd253ef97de300ff3bf72468b754fb25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O7AQHJU%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCICjxQnFP7jbEXePTtE826HH8zwky6h%2FlY15XfeB0aYYJAiAJRMHYUza3WO3%2F0b%2FAvaW9FCR13zVlahZssFDQZA21GCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmIrMKkmZU1tsLZWDKtwDAWEjU2W8y1rtNKYYHsjkvtkDTaZxXGm%2FeSKa1lA9n%2B4nVSJ6s4%2FLGGtNKxjZ9%2FbKoxYWCZsIoA4vW8ohlB77J%2FU0ue2UIs3Vz8WiG2jHKAhOxBuY9uLLt6oOd3r65bYj%2Bo8v2Xr%2F1g22ESk7EeSAaixl5poyrxyCCuncfIEjuD2%2Fkp2a3vGkvntGIiFsDXzDRR8Z84L2Qsk%2FseCK4ICcmIHx037qTC3ucs6RSPX4Gu9IXVSc2if2hF0DBHIkoLBFAqTlXuD2bc3MhxXd8AWKpCig82k89PvlKg10c7ctThtSCTJHm8DnMuhN1CWEk3XifZ8sNrsH1j8cUExkgBis5LByY8k08FUrLiEOg9Cndw4A11lyEnrc8WQmcLOBArz3kGnsEbv%2FJc9uJFJPt9I09ta4JzmqY24SPxGIVR878NlBq%2F6%2BWiFjiJC%2F7mG%2BqKin2drl667fzm%2B3CAykVB41t8cbXLkZYIHTGHzWQyjeGP6gxcHBolC5Ah74Jzm1Foygcc%2FnINE6XEmJuUFSpt41gkfS3hDewKy2czR9A5q25hCDgGQE5jAtmSF6acxFa71vrzs4pY4%2F44VVPdcCA5srZfKimmaVhNWEuf0IlFoABnbR0wRKOjQwlLeLKo0wzZO%2FzAY6pgGqWiXMF%2FYrYnbEopDzxwQehbIXCLCFwxQfErQkCsfBxziPgpyDcNXD0INJlXjJi7e9eaXVuHtKa0%2FhoQ3FwWk%2BJnLMAEXoTdYR7FalG1V7DqnM0PqstwQXtvIyLHkD6hlqrMnwhyYveFiKB1W9O8NXCFwq6G4h6bmtNrZqhwHoxtlG0zHDzCvTnTPTV21Jiv1RBu7T0xBFgMm67xlRystxFjXeZJqU&X-Amz-Signature=92c3da085b2e760bb468aba41364881a6a318afa908ef5e63212675ed192a29f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4Q5LV3%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDfGFaTokv8cS0%2Bkz%2F6x4uZoGQHLiJbBkfe9Ge5iJ%2Fa5gIhAOXyo9Oj7rnzhxQWvKYxR9XY%2F7DcBXxr1dkscrYW6cr%2FKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHvXxHZxA5UTNIU8Yq3AOx1bx3OabiYEiWwKVr5qoUNEbVKhqL3kiqY6fZZ8moZECKhpZW5sT%2FvZXGHaozSUqXEIAGReEbDPLHCYQ4htQz1tcKrqmF6H%2BA9tkHR8ReSNV47KWVokPxyT2M137%2Fe8LbSj2vM2%2BgMQr0VDLpMMWKuXMX2De5MROZxFI%2B0B%2BL48m6di8ODO5KyGkHykHnRoBkoxxnzlCRvn80r5oTunLEl4s4Ii71%2FPSDIO7VCarpStqnHWZGCeTtBgAV%2FFvSMUbz2h%2F4VAAUDoGFttZzRFTxxgJSKRrPdWtYfMhIrB9FwjzO1d3pICDfFHYC53pe5T7NQsbViI%2FcTph1hk11Wqb6qhIwbPkqM9JMk6NaePLgTjPXTokVY8R%2BSihYW2IJTouJjINSmh%2FlfGbHH%2FoTYNp8Hg%2ByvTz0CCmJ1pSNO4MZnNI%2BivmmH3BBZpxI%2BSQ4ASpCwJS1H6a7CIwOBj7j%2B1H%2FUHMSInUx7E%2FMXJcIqE4%2FtZNC2WMwKhAdppf0qpE3EhSUnN0x8Ej5xBopKzxLxwDt5Ni%2BctkBaQwKzcWmBwNw0IQnPOBoynQ4P63KtiYSXAUa0KwxKE4bnRrVra%2BKAaWzl81evR%2FMnIOvCuc5LcIteOJxvSIRzwzE0vvn7jDXkr%2FMBjqkAdJ2K8CXFLanhIjd4EaZJPS33xc3AvSr9yuAnSUVJNQPj1LdxndAHoiayZUSo2nj0KeFYCfBU31rf%2BFmtnApDMKsovW7V5%2FgE1bmo5hYbaaEuJ45UPVlbZKYnMn%2BfQO1N8CFbIi%2BBwOgGv1j%2BwjMapcFt3EEsG1bk2sOdz7SprrUitiWCFNCwJ%2B%2FEiaOBzMZ3HATE7KZMfUL7DuVKR9q%2BH4u7xTW&X-Amz-Signature=31622c3537b6f4779ebb2b9d6d93e886619887a505b78ac802821827c6d111af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U22WFQY%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIAwTySMLN7Gwy5R1u1je%2BlrPeS5134vuD%2BWrvEFTbhr6AiEA4YpNTDdJF%2BhfvXcjOoSoHtAkCZUTwDyiG73aJfThkn0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqTwiBW58pe0UK0TCrcA36YcmI0MfM%2Fa5IcSTMitZXEScNUf5YO6WKSs%2FDWQBO%2Bv3D0EYwsDmARlNvm0MdiZmKKfu%2FLdrRY9qZuy%2BiLtermmaoPtBvsNLMGZ%2B9OKr6HV4%2BnLIA%2BhypMYbOuHyeBWwKrh4GbYZO0glIFXBlgsPeNUiEyLsqBaOlpycQBuZ3V8YPcDpJar%2F26dR9kzXvRv3XreOjBSE8gHU9GIkGYTvUMSkDHGQSYDsjvfJAesepwTLQnHSZhoQ0nRDrt8IB4UHa%2FjEQzpKMd1SGS3aNJGW3zKqalw9PiXuDT%2BRWpSE%2Bvg1UoLA1s5rWEs1LHhrXUdMpKPisyQp%2BRk8QqJ7K8Ir8v7e8xIY1yAmF%2FqHKAPgyYCDgGXM9PyFhd2WglBE8XyURVV2pNVEPT2q10tvDKzVTQW%2BEAmNh6SXHMG11%2BcvHnIvC%2FnrPA7F%2FzMkV%2Fdog3KsMVmZb1Y%2BeKU%2F64cQWMrygcBOe%2BznT4en%2FlJHRXzyipCmEz6eZvKpwv%2FgancQjLc0bFtTBMC0571LG%2FEdc6br571cRRyEhbGqCN4R3TNyzSBk2JsJ5r8OAMSLeRHAAP4AO24WhpeSqh%2BY9v%2B4xeZmcw4Mt00daD7yTb8VhuJPW1Hd%2BMYgXnpE5AOju8MPqSv8wGOqUBUkJgXW%2BAG2mIXjE0EptyVMAQg%2B35XU5A55sf4HGsoBRG983nGSO8mK8niGxWW92yb7c6HZPG8ISidmx6JejgFUyrnZiqOxiJDffx1yWBf%2Fw%2BtM%2Fea4fGqoYCsaBrTGoCf3pVUi%2BFA8ViXRAxkEzpB99vNHhAcLZ3EY09ram0KVKObn%2BsTBpSco7EnLHfFY09IOqTgoP6Rak8VoZ02Polglj4aRkA&X-Amz-Signature=4d74c9eec0660385c0608166e8e0d364fff5a80039c8a2d9a54b7657236ffa11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4Q5LV3%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDfGFaTokv8cS0%2Bkz%2F6x4uZoGQHLiJbBkfe9Ge5iJ%2Fa5gIhAOXyo9Oj7rnzhxQWvKYxR9XY%2F7DcBXxr1dkscrYW6cr%2FKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHvXxHZxA5UTNIU8Yq3AOx1bx3OabiYEiWwKVr5qoUNEbVKhqL3kiqY6fZZ8moZECKhpZW5sT%2FvZXGHaozSUqXEIAGReEbDPLHCYQ4htQz1tcKrqmF6H%2BA9tkHR8ReSNV47KWVokPxyT2M137%2Fe8LbSj2vM2%2BgMQr0VDLpMMWKuXMX2De5MROZxFI%2B0B%2BL48m6di8ODO5KyGkHykHnRoBkoxxnzlCRvn80r5oTunLEl4s4Ii71%2FPSDIO7VCarpStqnHWZGCeTtBgAV%2FFvSMUbz2h%2F4VAAUDoGFttZzRFTxxgJSKRrPdWtYfMhIrB9FwjzO1d3pICDfFHYC53pe5T7NQsbViI%2FcTph1hk11Wqb6qhIwbPkqM9JMk6NaePLgTjPXTokVY8R%2BSihYW2IJTouJjINSmh%2FlfGbHH%2FoTYNp8Hg%2ByvTz0CCmJ1pSNO4MZnNI%2BivmmH3BBZpxI%2BSQ4ASpCwJS1H6a7CIwOBj7j%2B1H%2FUHMSInUx7E%2FMXJcIqE4%2FtZNC2WMwKhAdppf0qpE3EhSUnN0x8Ej5xBopKzxLxwDt5Ni%2BctkBaQwKzcWmBwNw0IQnPOBoynQ4P63KtiYSXAUa0KwxKE4bnRrVra%2BKAaWzl81evR%2FMnIOvCuc5LcIteOJxvSIRzwzE0vvn7jDXkr%2FMBjqkAdJ2K8CXFLanhIjd4EaZJPS33xc3AvSr9yuAnSUVJNQPj1LdxndAHoiayZUSo2nj0KeFYCfBU31rf%2BFmtnApDMKsovW7V5%2FgE1bmo5hYbaaEuJ45UPVlbZKYnMn%2BfQO1N8CFbIi%2BBwOgGv1j%2BwjMapcFt3EEsG1bk2sOdz7SprrUitiWCFNCwJ%2B%2FEiaOBzMZ3HATE7KZMfUL7DuVKR9q%2BH4u7xTW&X-Amz-Signature=ba71577add6736e714f35276ad08ebe136c6adabde350b7ee1a93e6b27657ac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZN2HAHV%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIFRQzuc4c0RFTaR%2BsYTE6ASCDxeDXZ4VvwNHdWPtpfSuAiAxoFLE49Bi3RpiVcsQ6ZurUZIjlFpZyPvkouOQHR7UFSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4kL%2BPUUe0%2BCqruWgKtwDCrY7O9auGHfrUMGYEyqxG7QQsPAiUTexpqmCrxGissWKadDz5NYUvI5mybL80faQfc9nd5dqQ%2Frfmag8rLu%2BA1sHKX6YpHXZxArVhC0H5KEMoah3NmFSsKmt2LuFlZxjX5aXw3JXF2qieQPcOwZQXUooPTNSZ804t3WH9XVeltA2gvljXz9ENhjfakTwo6dDntS%2BR15wYD2yW9KtytQKIlL1nMGD%2BRPy13tdBagdAJmYHZAGPUAdfzo5tIqvK8DzJC321AK%2FaxjfcfVqCplet88c6lflr1TimCmewW9YfOrETN2%2FqWBEKGjv0Kn7HM9D5wS0lgVSiaSY4abswCDD1HK0tURB0NoWAauLf9EUVa1gMvMDpRrde6j60rfT6xyoZoPUtAQ9IfRrqGX2nOD0kdJAUUWDs1gAp70RDxDahjgsAA%2FDz4gJBK%2BFV%2Fn0sCe6na6jXb0t6Vzr8obmz61QQV2AbfiO05sdIFDmn5Sq2wijzOhaAkNZDU1CIWebMXifJPTisVFz0Iu9lL7X%2FL0qZ2OtPlFeYehzrG4WroaXa3W5vWls2Mo5Fs9KEj0N2%2Bfj7O8jener%2FNVM7xBlDbgl2bOBPI%2Bp9mOUDtMM1fFrJuGBqgSidVRaeo3us9UwupK%2FzAY6pgFgih5A8qgcmXYtngZ1ZS0BRrZbm1htxx64SLM64JTL5a0tXAGQWCZJz%2Bw4ugXHXHioNCefMH4CChmBUFrPyXwhEPBJrShUQzehqwFbBbg92qXOWV9nS2VSmSpAjLnBcuglkBEIntDBFTE43YAd7D9lsV5giWTJEf0GHMda2oDxjwEt1ePCKgKihV%2FtKFAEZ%2BQbhxrR5%2Fvhf742cNMGcRRkptXkt5mH&X-Amz-Signature=b3679e558590b2b937cfab45a02c4f7c48e04923a305432ae90cb639a1e88bef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4Q5LV3%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDfGFaTokv8cS0%2Bkz%2F6x4uZoGQHLiJbBkfe9Ge5iJ%2Fa5gIhAOXyo9Oj7rnzhxQWvKYxR9XY%2F7DcBXxr1dkscrYW6cr%2FKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHvXxHZxA5UTNIU8Yq3AOx1bx3OabiYEiWwKVr5qoUNEbVKhqL3kiqY6fZZ8moZECKhpZW5sT%2FvZXGHaozSUqXEIAGReEbDPLHCYQ4htQz1tcKrqmF6H%2BA9tkHR8ReSNV47KWVokPxyT2M137%2Fe8LbSj2vM2%2BgMQr0VDLpMMWKuXMX2De5MROZxFI%2B0B%2BL48m6di8ODO5KyGkHykHnRoBkoxxnzlCRvn80r5oTunLEl4s4Ii71%2FPSDIO7VCarpStqnHWZGCeTtBgAV%2FFvSMUbz2h%2F4VAAUDoGFttZzRFTxxgJSKRrPdWtYfMhIrB9FwjzO1d3pICDfFHYC53pe5T7NQsbViI%2FcTph1hk11Wqb6qhIwbPkqM9JMk6NaePLgTjPXTokVY8R%2BSihYW2IJTouJjINSmh%2FlfGbHH%2FoTYNp8Hg%2ByvTz0CCmJ1pSNO4MZnNI%2BivmmH3BBZpxI%2BSQ4ASpCwJS1H6a7CIwOBj7j%2B1H%2FUHMSInUx7E%2FMXJcIqE4%2FtZNC2WMwKhAdppf0qpE3EhSUnN0x8Ej5xBopKzxLxwDt5Ni%2BctkBaQwKzcWmBwNw0IQnPOBoynQ4P63KtiYSXAUa0KwxKE4bnRrVra%2BKAaWzl81evR%2FMnIOvCuc5LcIteOJxvSIRzwzE0vvn7jDXkr%2FMBjqkAdJ2K8CXFLanhIjd4EaZJPS33xc3AvSr9yuAnSUVJNQPj1LdxndAHoiayZUSo2nj0KeFYCfBU31rf%2BFmtnApDMKsovW7V5%2FgE1bmo5hYbaaEuJ45UPVlbZKYnMn%2BfQO1N8CFbIi%2BBwOgGv1j%2BwjMapcFt3EEsG1bk2sOdz7SprrUitiWCFNCwJ%2B%2FEiaOBzMZ3HATE7KZMfUL7DuVKR9q%2BH4u7xTW&X-Amz-Signature=5e94191596c8c654229ef5e6fee8bd5e4906557ee58002492a7c3fa3f5e644c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7NOTECY%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDO28Zd7HCFKFxQNttPpgv36frIWsyAA7nTssEvAizPZQIhALwYKzwIBTnuMIktHDmiHUp8WmnC%2FapYr6TRSfzEl1SFKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkCKG4Ud%2BvMZH45Skq3ANS9jMZXKy4sucWUVgQIgHyL467PidW206iw1F2rh5UrQDtP49orkIn9qKSImyv9tsFemPs%2FpDZeKIvzdSyPFIw8Gbrp2DNA77V%2BizsBwwvM%2FbF3K8KZT9ypG9HAmHks7IIZpu1wsGGHqy77Q2beJmQ10X2%2FaaO64R%2Fo5P0kLwud%2BwDAi9c83UCLV6T66Y5D3pbKDs6E28MA6svKuXCmy5Cgg7ERgW%2Bgb93N6Ot20sgMvKN3eGSfy3ZiU44TjNpT%2BasBKtZCumq2wrUx5M6s5Jg8ZdKL7TgQMKDqZ2u4xe2vDwPKRc3OSoHxVee9HTu%2BjqDJIm94cza77qENUBevTfIdlsrnON7E2fLxX1OJ2TZkl%2BJOkkE9tcvECgYyc3pbxb0iToJ0S%2BgPV2zGEkUX%2BYnioa9UWyx3QRxWaWqAQ5T2bakN3XORlwEEn%2Fp5AykngfFkv4xNzCmVYN%2BzEXLpD9aBQ8amKN15Vn4AApirdYKs2SODcHhUNMdgW6JtNpP6W%2BVtw5EwIbfRsvRC3rj2hezhM4VH%2FGjpqrWg09cNF%2FfONOgGHeQSfjFFPwEdFafZxtivALAjpdWQL1MCYNTUnc%2BdLzlfBhG%2B93VAyrWcY1f03bhKp%2Ff4SXWPvNqvjC4kr%2FMBjqkAe1%2Fp0scpTLKFn%2BgIvhKrgtVdcc3zRkIXIZFQl%2FsAj%2B2HAxmNO7Th6NDO%2BIVyptYw8Bankt0u%2BZSRk76U2zG%2BG0vZ%2FCsvIOYzbmXVawH812mSBTzg5Tu0p0jhej9tGVeEca2ht8oQ1L0%2B7Gq%2F1bbNsFiUljRiRfeK6%2FaIc0XBQxEJZ9UICTIbLGIKC%2Fnz2Fa7DRkYz%2BsXJgYzLkqiHKiTWEP1oWZ&X-Amz-Signature=c5c6258429fabde982be7ddda5d0d33621975df4c45626a01084b2d4e388ded2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4Q5LV3%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDfGFaTokv8cS0%2Bkz%2F6x4uZoGQHLiJbBkfe9Ge5iJ%2Fa5gIhAOXyo9Oj7rnzhxQWvKYxR9XY%2F7DcBXxr1dkscrYW6cr%2FKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHvXxHZxA5UTNIU8Yq3AOx1bx3OabiYEiWwKVr5qoUNEbVKhqL3kiqY6fZZ8moZECKhpZW5sT%2FvZXGHaozSUqXEIAGReEbDPLHCYQ4htQz1tcKrqmF6H%2BA9tkHR8ReSNV47KWVokPxyT2M137%2Fe8LbSj2vM2%2BgMQr0VDLpMMWKuXMX2De5MROZxFI%2B0B%2BL48m6di8ODO5KyGkHykHnRoBkoxxnzlCRvn80r5oTunLEl4s4Ii71%2FPSDIO7VCarpStqnHWZGCeTtBgAV%2FFvSMUbz2h%2F4VAAUDoGFttZzRFTxxgJSKRrPdWtYfMhIrB9FwjzO1d3pICDfFHYC53pe5T7NQsbViI%2FcTph1hk11Wqb6qhIwbPkqM9JMk6NaePLgTjPXTokVY8R%2BSihYW2IJTouJjINSmh%2FlfGbHH%2FoTYNp8Hg%2ByvTz0CCmJ1pSNO4MZnNI%2BivmmH3BBZpxI%2BSQ4ASpCwJS1H6a7CIwOBj7j%2B1H%2FUHMSInUx7E%2FMXJcIqE4%2FtZNC2WMwKhAdppf0qpE3EhSUnN0x8Ej5xBopKzxLxwDt5Ni%2BctkBaQwKzcWmBwNw0IQnPOBoynQ4P63KtiYSXAUa0KwxKE4bnRrVra%2BKAaWzl81evR%2FMnIOvCuc5LcIteOJxvSIRzwzE0vvn7jDXkr%2FMBjqkAdJ2K8CXFLanhIjd4EaZJPS33xc3AvSr9yuAnSUVJNQPj1LdxndAHoiayZUSo2nj0KeFYCfBU31rf%2BFmtnApDMKsovW7V5%2FgE1bmo5hYbaaEuJ45UPVlbZKYnMn%2BfQO1N8CFbIi%2BBwOgGv1j%2BwjMapcFt3EEsG1bk2sOdz7SprrUitiWCFNCwJ%2B%2FEiaOBzMZ3HATE7KZMfUL7DuVKR9q%2BH4u7xTW&X-Amz-Signature=d2c8740538e94ecaa08e40e6ff35d196cd61e1d29d10abdae5b663401d051c3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3BNDBO6%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDjtvW5nWC6HingpI1H0VdPT8dk2dhEVc5sYOiVE4vxHQIhAP7Y2IE5%2BCoK1WubmGXkp9VFy0D55cpUJJVqPse%2FkZ5IKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjsnKHO8R4sp12Er4q3APle%2FL2d9rLcG82C3o4LdLF0wuRSAtAx0GRxEz%2BYv9rLdm4MInlkx5MkgUVzTT4eudd4foFcMKrWstPhIh6Pq6JXp9fFyg1dxtNulWXL%2BHuMe%2Bm%2BVeJWiSytlYmtmAmptgHanxavDWANzWe5SDafRkmT2g8GD12IF33Y5cqj9kW1zjB9J%2FNbBhxFV%2Fp9Rd9P7Dmd%2F0zdKonEYcwyWNU5p6wlUYZVZm7JhjYciLbDH2WimgDs6Xg4CwsUgzh0DdAqHw0UIPu4pfKMJbnJW3iXbyyfCkoSAGNR49Pn0Um53%2Fcn%2BiIe%2BfTodb7R0XOW0sMjBgmQvxr3euYvph4HR%2FU8buRGswRgbjE5PcTbSp46rjGxqpBp%2FDIxKJ07hSDb9pdhMtgtLpwKgCCeSvO%2F3yzGdrd24H%2BZzPCagNskG95M1kYDw1%2FEUZ%2FuK5URkETYcS7xKCu2eLvTvXdkhhnFmqjMNwIppJksW%2Fkpno217iqNtnWTi4xuDurO%2F1RmHJXKwg5UBFxus2C%2FtJw3auvsXT6%2Ba42%2FccxfKL79C4Cs5NoV44%2FuD3LIswswxCwXEnZkrYhypYvf3hCbjwHhb7VeLevvbg%2Focy7tqq2STVk0HfGACddykcF7vKgN%2FIZ1HRpxjC4kr%2FMBjqkAYF7kt07UaBzQVfzIZLKrJMK6VCnptvK4Dh26e%2FUcKpsQmZqDOPpw%2FAEWF34XSfL3IZYrT29P1LE8CkK9XXQ9LocRgylrDvrKAekDRrLJsyhF96FAuSVsXbvtGTPvEWk441P4SOdYzOwKF9lCNRh84yiQtcHcJzCqwNQAWdRKJafQ1Be0QTw%2FvYloKhDAIlZZJMMNAFhv7iac6dpv5rWmAgz5tsn&X-Amz-Signature=b5a953a10426c55d560ffe258c00d7e9d33625757b15fffcf974f74d808f4e23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHU7DPRR%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCICYzvhj2Cu%2BjGsKehc7GNjf0V4zqwcvozoZ1TjaYRS3jAiBkCIm4Te3Qc54rNhSYje307MYlCEruV7DDDARiJwkEWCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr1nITkGBlOfNF6FuKtwD3DIeEKUdXNkNX7h8xIBLlNIzCheC%2FspqIiiOadYmjBM%2Fc1COBa9C78BlshOKPou9J0LCRUZMtpdQ%2BFNkr3nLxjSRYIV1KURNK2ttY9Tjx2YiMSBN6j0bXllMY1kPyE2E%2Fw6tVTjh%2FVpwkkCpwP8JUjgISEPPK4dOq9ny82ooqBbemYVO0kf5T8Fj6%2Bp7nxuUGPc25BfUQPo2KPaXEVlPDIH54CvaSQTIogKl02R2oE2ueAR1B35Fh6G6ghjWVqzFOWYTJWfUkD%2FeLUB22ugHmHgblD%2FdGO3fjNb2bFWn9CFPR9SoRJzxoDzsSDXzaIQbQTiTp4XZi5yZvgHlY%2F6EVajPeAdLEtCoPIs22Pn2E4LruIyioudPepKn%2BMJ%2BP9XP6F6hOp%2FlqmGRCEduQ2SrqZPJRqwDA%2FcOO0FFP34sWVZqgQyzQyaifdGvLJgkrDz%2FxXMJKCaY%2FLcXpOmk884nTKc1HCA0iJmcc65GDQhxaoemTMTsqDQU2SPH8kopbvqZN1gsIwKaDs2C6aib%2BO4yuWBlAXX%2FRv6kAx4acINB6XyOPYH2hlU1%2FEkMx1rCIPjkQk4aC1ErAEjGmQ4RDohRMGYdSzqm%2FtRvaFDnQ0CngIEmLsb%2FJK1hCGjLEQ8wwZK%2FzAY6pgGl5vlq2Oo2lxALUa4dpxiBlkzLM0xHI%2FbkylUKX6OPlb7l1Mld2gWePYuovsisC9%2FMK%2Ft7tQRpKHWHEGm8fN31PeCE4y34eEbgh9birqDwkv1D7SvVpfKSQnIKMAjojkTXR91b93EkrjGkBGFBfmsM7JoM9EdLV49uL%2FGWqF0nky950M%2B6g90xIzNt0FEnHV04eOEKtp8oXNMk7JW6hIs8RRtSWuEm&X-Amz-Signature=7227a3a54f34ea0b186973b0ba2de738b44bff286e80415eb18b458dfada72dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ4EM5LN%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCPT8SVIICpHy6sw4TUkqIMaSfs8VURGoJojNJTSBoUHQIhAIT3amc3V5GtUDIzVcIZDENlosjHD%2FTTCpMjN82dGkrGKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVBYl8RHH1eRGgNxkq3AMz1igtLuCZXDUE7Hf3hz4lM%2F24iuGNMThB%2FYpoLe%2BVfOcfv%2BQEbSAtrKjL%2Be2s%2BWTUSZdhIzLpIG5dtGgbNM%2FFB9N91xYvIrnfe9s0F7l9WGRyVNk44LJJLura8R%2BOvEPcPT9OmxT45WXGUQiaZUTgPSPK7ZKWlXOjxZiwAyDz%2Bvl3La5SRl%2BaRGG%2FW0lDJX77DS%2FqFd1eXANMt0iaPuAfVluW6Tl%2B57PqfIJhX4I4bOTKXB%2B13L4kbUiV1W2RQACBXYRYRQdYdyI8P94%2FgTlmbkGEWHNKG%2Bx%2BPZPsOZG6MEQXrfXeg%2BD5txnrguuse68nNv9JIzk7nY4eX%2BsVmRfONKCzrjSidlogvNJgrnPtY8lf43C0sYODlA2IOl04zjQHVY6VX4cStjniig4P4gkvlSa%2By0DDzyVtjyQ4P0fz3lWkPNj2CoH2xxOsdKfU6KvRM9CjStOxgp%2FutWxxbVIlMw1lSAHmbjLgoOZNOwe8H2a9fBKbMB8mwVEIoCfJxgrRs6fM3bkw64GdhgU6uexPFhRni2PcvAzOn3R8UmYlO5XDPkz2tRy2FRV2ihd9T3KuzY1tG0hfGHgd5HoLtV5%2FHJ8aJZG9KAA23i20lCxjZZAhL0yW9dEKOL%2FA5jDLkr%2FMBjqkATrb9JBNgl7RfruG%2BIhpX1nXsJQac%2F7ZIIxapNQtfRANeqrcCcqQtQtaKxKbprEBcAJpqRSpeaTgXp6CNobLUn1P6eBuxRT5D35q4Ju018HuXjFMZZFhJy6VLBKrTlIKIJUps%2FoJvoNdY%2FID9axX3wdHGcEsyRqxLAXQGLtz9M%2B8onFX%2B3Dcr7byHr%2BT3nDqHifM34xn0pJq9Hg%2BOHTppNyLXcrM&X-Amz-Signature=789a67cf1ebb83b5b21a2377637f7ad7472bd89cb60812bdec7499ca5a9ef85e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4Q5LV3%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDfGFaTokv8cS0%2Bkz%2F6x4uZoGQHLiJbBkfe9Ge5iJ%2Fa5gIhAOXyo9Oj7rnzhxQWvKYxR9XY%2F7DcBXxr1dkscrYW6cr%2FKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHvXxHZxA5UTNIU8Yq3AOx1bx3OabiYEiWwKVr5qoUNEbVKhqL3kiqY6fZZ8moZECKhpZW5sT%2FvZXGHaozSUqXEIAGReEbDPLHCYQ4htQz1tcKrqmF6H%2BA9tkHR8ReSNV47KWVokPxyT2M137%2Fe8LbSj2vM2%2BgMQr0VDLpMMWKuXMX2De5MROZxFI%2B0B%2BL48m6di8ODO5KyGkHykHnRoBkoxxnzlCRvn80r5oTunLEl4s4Ii71%2FPSDIO7VCarpStqnHWZGCeTtBgAV%2FFvSMUbz2h%2F4VAAUDoGFttZzRFTxxgJSKRrPdWtYfMhIrB9FwjzO1d3pICDfFHYC53pe5T7NQsbViI%2FcTph1hk11Wqb6qhIwbPkqM9JMk6NaePLgTjPXTokVY8R%2BSihYW2IJTouJjINSmh%2FlfGbHH%2FoTYNp8Hg%2ByvTz0CCmJ1pSNO4MZnNI%2BivmmH3BBZpxI%2BSQ4ASpCwJS1H6a7CIwOBj7j%2B1H%2FUHMSInUx7E%2FMXJcIqE4%2FtZNC2WMwKhAdppf0qpE3EhSUnN0x8Ej5xBopKzxLxwDt5Ni%2BctkBaQwKzcWmBwNw0IQnPOBoynQ4P63KtiYSXAUa0KwxKE4bnRrVra%2BKAaWzl81evR%2FMnIOvCuc5LcIteOJxvSIRzwzE0vvn7jDXkr%2FMBjqkAdJ2K8CXFLanhIjd4EaZJPS33xc3AvSr9yuAnSUVJNQPj1LdxndAHoiayZUSo2nj0KeFYCfBU31rf%2BFmtnApDMKsovW7V5%2FgE1bmo5hYbaaEuJ45UPVlbZKYnMn%2BfQO1N8CFbIi%2BBwOgGv1j%2BwjMapcFt3EEsG1bk2sOdz7SprrUitiWCFNCwJ%2B%2FEiaOBzMZ3HATE7KZMfUL7DuVKR9q%2BH4u7xTW&X-Amz-Signature=7f7d91b932ae4731634323b20ec3622cbcc671b29eb5ac29c40512670c89d10c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4Q5LV3%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDfGFaTokv8cS0%2Bkz%2F6x4uZoGQHLiJbBkfe9Ge5iJ%2Fa5gIhAOXyo9Oj7rnzhxQWvKYxR9XY%2F7DcBXxr1dkscrYW6cr%2FKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHvXxHZxA5UTNIU8Yq3AOx1bx3OabiYEiWwKVr5qoUNEbVKhqL3kiqY6fZZ8moZECKhpZW5sT%2FvZXGHaozSUqXEIAGReEbDPLHCYQ4htQz1tcKrqmF6H%2BA9tkHR8ReSNV47KWVokPxyT2M137%2Fe8LbSj2vM2%2BgMQr0VDLpMMWKuXMX2De5MROZxFI%2B0B%2BL48m6di8ODO5KyGkHykHnRoBkoxxnzlCRvn80r5oTunLEl4s4Ii71%2FPSDIO7VCarpStqnHWZGCeTtBgAV%2FFvSMUbz2h%2F4VAAUDoGFttZzRFTxxgJSKRrPdWtYfMhIrB9FwjzO1d3pICDfFHYC53pe5T7NQsbViI%2FcTph1hk11Wqb6qhIwbPkqM9JMk6NaePLgTjPXTokVY8R%2BSihYW2IJTouJjINSmh%2FlfGbHH%2FoTYNp8Hg%2ByvTz0CCmJ1pSNO4MZnNI%2BivmmH3BBZpxI%2BSQ4ASpCwJS1H6a7CIwOBj7j%2B1H%2FUHMSInUx7E%2FMXJcIqE4%2FtZNC2WMwKhAdppf0qpE3EhSUnN0x8Ej5xBopKzxLxwDt5Ni%2BctkBaQwKzcWmBwNw0IQnPOBoynQ4P63KtiYSXAUa0KwxKE4bnRrVra%2BKAaWzl81evR%2FMnIOvCuc5LcIteOJxvSIRzwzE0vvn7jDXkr%2FMBjqkAdJ2K8CXFLanhIjd4EaZJPS33xc3AvSr9yuAnSUVJNQPj1LdxndAHoiayZUSo2nj0KeFYCfBU31rf%2BFmtnApDMKsovW7V5%2FgE1bmo5hYbaaEuJ45UPVlbZKYnMn%2BfQO1N8CFbIi%2BBwOgGv1j%2BwjMapcFt3EEsG1bk2sOdz7SprrUitiWCFNCwJ%2B%2FEiaOBzMZ3HATE7KZMfUL7DuVKR9q%2BH4u7xTW&X-Amz-Signature=95eea063e4c0c8e68f51a5f8befde3b8a4cdc3974d5bcc58834d9c70118a9c52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HONJVPZ%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBak1i%2F4iV9rLcpW5IObAoXZ36rXRoosZr8zR2dANlmvAiEA%2F%2FCjnevmW4yJIYgfDliyixOZt8r8z2EJjREWLb5GogoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpvI3jFjHBMvA8ymCrcAxVR%2B0zHaCNAe7INzs0SmX85QT%2FkuSgUzqElKURQhACFBPxb7JodfI2hXbspeFP%2F1lDO9LPCASRYJP2D3AaMxX2YTebRCMGFAv4FmH2IpnE53nAjYaU8eHYrNJFyysz4ufbDX82huc40tIemOTdR7wXVf6BEinvkLfDO7mu6QvkiLqM90Ut%2Ftg%2FjDt76TAOwkKjVT01731nWDZwy%2FQ5sQse7aKMy7WSUC%2FK463IPYG5EolrxB4BBN0%2F8xZcriqoEROI8WSzULBNOy9iYpQZ4cwW777U%2FYkzUFxmDw7dflKBqK3jPrP8XgeIWaJls%2Fdm086MAAUvjKPIo%2FaM2MipvifYa3pyzuxgwrqk%2Fs8Dg4Bf%2FsjyqiRgyaHZk2ngrPD5G%2Fh3PbOIoHqb4SVmY432fnCX32HAeAKWKSO%2BE0lX6gVnQQ26mNo5vqH7HFPdHOEGYKU5zQhXuK%2FADo8QgrYh3mVNCeevPdldIDaSa1ROg9idFrIEFBwT81QLex4O6SIxl8p8EBSgz0mVOUvtDCuZFV5PhNDqU9LvvBwi%2Bu8hqCeAMWw9bPfRPxBDBIsJzbQ64Jc%2BiUVrc51YFTyNpgZhHJYStwwptRmEjyHwQUCuBGXQ0RcRxvKlPmtzX2kxsMLSSv8wGOqUBw2o%2BvXv0oBLDbE7yCuMiBp0Jn%2BXQQZF8NapsSLxFFRKSO7gEmKAwwHr6KT%2Bawn%2BoY22pO0CW7V%2FK4EXp2p%2BJoHadJWvNkbtTfiy4XeYXMG9MyMVX1BBYvkIz3ruytU4fS%2FwCFDr%2F2eindq%2Fy3hZ34dIU779%2BkdUnAh53fS%2FAHUQLcT5QO7cnLIN8jLYk3Nra7mLOsgnrD44ORp2vkaFn1BipROvF&X-Amz-Signature=a1e7450e5690dfc945eb901e69a16445db49e7d302b8b3035dd147b83351245d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HONJVPZ%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBak1i%2F4iV9rLcpW5IObAoXZ36rXRoosZr8zR2dANlmvAiEA%2F%2FCjnevmW4yJIYgfDliyixOZt8r8z2EJjREWLb5GogoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpvI3jFjHBMvA8ymCrcAxVR%2B0zHaCNAe7INzs0SmX85QT%2FkuSgUzqElKURQhACFBPxb7JodfI2hXbspeFP%2F1lDO9LPCASRYJP2D3AaMxX2YTebRCMGFAv4FmH2IpnE53nAjYaU8eHYrNJFyysz4ufbDX82huc40tIemOTdR7wXVf6BEinvkLfDO7mu6QvkiLqM90Ut%2Ftg%2FjDt76TAOwkKjVT01731nWDZwy%2FQ5sQse7aKMy7WSUC%2FK463IPYG5EolrxB4BBN0%2F8xZcriqoEROI8WSzULBNOy9iYpQZ4cwW777U%2FYkzUFxmDw7dflKBqK3jPrP8XgeIWaJls%2Fdm086MAAUvjKPIo%2FaM2MipvifYa3pyzuxgwrqk%2Fs8Dg4Bf%2FsjyqiRgyaHZk2ngrPD5G%2Fh3PbOIoHqb4SVmY432fnCX32HAeAKWKSO%2BE0lX6gVnQQ26mNo5vqH7HFPdHOEGYKU5zQhXuK%2FADo8QgrYh3mVNCeevPdldIDaSa1ROg9idFrIEFBwT81QLex4O6SIxl8p8EBSgz0mVOUvtDCuZFV5PhNDqU9LvvBwi%2Bu8hqCeAMWw9bPfRPxBDBIsJzbQ64Jc%2BiUVrc51YFTyNpgZhHJYStwwptRmEjyHwQUCuBGXQ0RcRxvKlPmtzX2kxsMLSSv8wGOqUBw2o%2BvXv0oBLDbE7yCuMiBp0Jn%2BXQQZF8NapsSLxFFRKSO7gEmKAwwHr6KT%2Bawn%2BoY22pO0CW7V%2FK4EXp2p%2BJoHadJWvNkbtTfiy4XeYXMG9MyMVX1BBYvkIz3ruytU4fS%2FwCFDr%2F2eindq%2Fy3hZ34dIU779%2BkdUnAh53fS%2FAHUQLcT5QO7cnLIN8jLYk3Nra7mLOsgnrD44ORp2vkaFn1BipROvF&X-Amz-Signature=4140af9edd66ddf71335715388d1363e46ad225dc97efc59e6d8f91ada2ba510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HONJVPZ%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBak1i%2F4iV9rLcpW5IObAoXZ36rXRoosZr8zR2dANlmvAiEA%2F%2FCjnevmW4yJIYgfDliyixOZt8r8z2EJjREWLb5GogoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpvI3jFjHBMvA8ymCrcAxVR%2B0zHaCNAe7INzs0SmX85QT%2FkuSgUzqElKURQhACFBPxb7JodfI2hXbspeFP%2F1lDO9LPCASRYJP2D3AaMxX2YTebRCMGFAv4FmH2IpnE53nAjYaU8eHYrNJFyysz4ufbDX82huc40tIemOTdR7wXVf6BEinvkLfDO7mu6QvkiLqM90Ut%2Ftg%2FjDt76TAOwkKjVT01731nWDZwy%2FQ5sQse7aKMy7WSUC%2FK463IPYG5EolrxB4BBN0%2F8xZcriqoEROI8WSzULBNOy9iYpQZ4cwW777U%2FYkzUFxmDw7dflKBqK3jPrP8XgeIWaJls%2Fdm086MAAUvjKPIo%2FaM2MipvifYa3pyzuxgwrqk%2Fs8Dg4Bf%2FsjyqiRgyaHZk2ngrPD5G%2Fh3PbOIoHqb4SVmY432fnCX32HAeAKWKSO%2BE0lX6gVnQQ26mNo5vqH7HFPdHOEGYKU5zQhXuK%2FADo8QgrYh3mVNCeevPdldIDaSa1ROg9idFrIEFBwT81QLex4O6SIxl8p8EBSgz0mVOUvtDCuZFV5PhNDqU9LvvBwi%2Bu8hqCeAMWw9bPfRPxBDBIsJzbQ64Jc%2BiUVrc51YFTyNpgZhHJYStwwptRmEjyHwQUCuBGXQ0RcRxvKlPmtzX2kxsMLSSv8wGOqUBw2o%2BvXv0oBLDbE7yCuMiBp0Jn%2BXQQZF8NapsSLxFFRKSO7gEmKAwwHr6KT%2Bawn%2BoY22pO0CW7V%2FK4EXp2p%2BJoHadJWvNkbtTfiy4XeYXMG9MyMVX1BBYvkIz3ruytU4fS%2FwCFDr%2F2eindq%2Fy3hZ34dIU779%2BkdUnAh53fS%2FAHUQLcT5QO7cnLIN8jLYk3Nra7mLOsgnrD44ORp2vkaFn1BipROvF&X-Amz-Signature=db807a4abed497bc7398357b72e78e4187f4b87a5cb3a7ae2c75c0d885aa33d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HONJVPZ%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBak1i%2F4iV9rLcpW5IObAoXZ36rXRoosZr8zR2dANlmvAiEA%2F%2FCjnevmW4yJIYgfDliyixOZt8r8z2EJjREWLb5GogoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpvI3jFjHBMvA8ymCrcAxVR%2B0zHaCNAe7INzs0SmX85QT%2FkuSgUzqElKURQhACFBPxb7JodfI2hXbspeFP%2F1lDO9LPCASRYJP2D3AaMxX2YTebRCMGFAv4FmH2IpnE53nAjYaU8eHYrNJFyysz4ufbDX82huc40tIemOTdR7wXVf6BEinvkLfDO7mu6QvkiLqM90Ut%2Ftg%2FjDt76TAOwkKjVT01731nWDZwy%2FQ5sQse7aKMy7WSUC%2FK463IPYG5EolrxB4BBN0%2F8xZcriqoEROI8WSzULBNOy9iYpQZ4cwW777U%2FYkzUFxmDw7dflKBqK3jPrP8XgeIWaJls%2Fdm086MAAUvjKPIo%2FaM2MipvifYa3pyzuxgwrqk%2Fs8Dg4Bf%2FsjyqiRgyaHZk2ngrPD5G%2Fh3PbOIoHqb4SVmY432fnCX32HAeAKWKSO%2BE0lX6gVnQQ26mNo5vqH7HFPdHOEGYKU5zQhXuK%2FADo8QgrYh3mVNCeevPdldIDaSa1ROg9idFrIEFBwT81QLex4O6SIxl8p8EBSgz0mVOUvtDCuZFV5PhNDqU9LvvBwi%2Bu8hqCeAMWw9bPfRPxBDBIsJzbQ64Jc%2BiUVrc51YFTyNpgZhHJYStwwptRmEjyHwQUCuBGXQ0RcRxvKlPmtzX2kxsMLSSv8wGOqUBw2o%2BvXv0oBLDbE7yCuMiBp0Jn%2BXQQZF8NapsSLxFFRKSO7gEmKAwwHr6KT%2Bawn%2BoY22pO0CW7V%2FK4EXp2p%2BJoHadJWvNkbtTfiy4XeYXMG9MyMVX1BBYvkIz3ruytU4fS%2FwCFDr%2F2eindq%2Fy3hZ34dIU779%2BkdUnAh53fS%2FAHUQLcT5QO7cnLIN8jLYk3Nra7mLOsgnrD44ORp2vkaFn1BipROvF&X-Amz-Signature=05730e92213e17de5ed3f3e5f1fbacecc46948e666febb5e57729882ae16f214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W25LQ7TI%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDu6u86BdaYcvu3mWBSi5KO%2BhfU0qJnmWOFwl5FyAqRkgIgU36iMaNae97OIt%2F1ZuWU%2BRjiW9MhAmaxYQY0zRnlqu0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFh55vok0wkcaxdLwSrcA00iiQ3C%2BsJF7FTzUwmMseaqAo95pDOvCa4puQaWtySil9NsLMKcB7XlM76iDskVjxvHdI9PZECPPbiqHh1H%2BXpH9ciu1sEPawjLKaY5TMOThPPTEV2imaYcSr8DpZh8s0HJk%2F%2BOV1Q1nwUS19W2JtdxShJrxRe8lmqF9g8gU9D%2BzDuh%2FqkQxEu999br5vsD3WIjonb4Aufsn5W25ltCVJScxigFeKf7KNqby205JYExhedGioFDhXqiORa8ZZz6BwnRY%2BuGArTNxmrN5KNMyvW8c68rtQPCGjyLfNpx0fUjSjNlDwKQADHEF33%2FZcrNloEEj5yrQ9bsiF0Wf0Uo5zaijHjLAi232KAxtweN5Xa86URHGcakHqq%2BwBpv9XAOFtzSu7SFJwUo9DSJ75WQU4YwbdUALV5cdBg1S%2BOReDNXr973VvDRBkmsaFh38O3piy4z%2BJhU%2BG8wRw2vAGqfCgg8FQeXZryfprL8H%2FGGvL32Vtm6SLWkuT%2F%2B7T%2B4ELELGjIHXa%2BTOpxQ4kJIjciApXbRIB3gsonDzlN3c5zOYLlzVZxz4%2F1JNhPkk23WOVFGcsL7vgzqOurpSp1LztUEPh3NMhc8e43ufZDvvJ2kYgKjeyqE4einmwSksfj1MJyTv8wGOqUBWx%2BeTgqD%2Foz4WWPH6bltC%2Fg16Bkx%2BRJqLlvW3dW%2FijsxB%2FV8Bsw7G0KIQzHrOFWQbKTNLkRBGbiaJ7iZmCqqS31srCEnuwAX0AFq%2BDoyfzAdTsAKy6umcS8tjGXcqwrW9t%2Bzcr62Ewj7Gl6Zg27bejh38GbIOW%2BS4rbpHqEo5rBdUDP6Afo8n2A7IV5IVMLasGqiYBiqIVaX4vhR%2FCoALS7Oc1QX&X-Amz-Signature=4895d9550ec556eb18b9313c2614b46a638e24835e42d068cb6f113a281c295a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HONJVPZ%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBak1i%2F4iV9rLcpW5IObAoXZ36rXRoosZr8zR2dANlmvAiEA%2F%2FCjnevmW4yJIYgfDliyixOZt8r8z2EJjREWLb5GogoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpvI3jFjHBMvA8ymCrcAxVR%2B0zHaCNAe7INzs0SmX85QT%2FkuSgUzqElKURQhACFBPxb7JodfI2hXbspeFP%2F1lDO9LPCASRYJP2D3AaMxX2YTebRCMGFAv4FmH2IpnE53nAjYaU8eHYrNJFyysz4ufbDX82huc40tIemOTdR7wXVf6BEinvkLfDO7mu6QvkiLqM90Ut%2Ftg%2FjDt76TAOwkKjVT01731nWDZwy%2FQ5sQse7aKMy7WSUC%2FK463IPYG5EolrxB4BBN0%2F8xZcriqoEROI8WSzULBNOy9iYpQZ4cwW777U%2FYkzUFxmDw7dflKBqK3jPrP8XgeIWaJls%2Fdm086MAAUvjKPIo%2FaM2MipvifYa3pyzuxgwrqk%2Fs8Dg4Bf%2FsjyqiRgyaHZk2ngrPD5G%2Fh3PbOIoHqb4SVmY432fnCX32HAeAKWKSO%2BE0lX6gVnQQ26mNo5vqH7HFPdHOEGYKU5zQhXuK%2FADo8QgrYh3mVNCeevPdldIDaSa1ROg9idFrIEFBwT81QLex4O6SIxl8p8EBSgz0mVOUvtDCuZFV5PhNDqU9LvvBwi%2Bu8hqCeAMWw9bPfRPxBDBIsJzbQ64Jc%2BiUVrc51YFTyNpgZhHJYStwwptRmEjyHwQUCuBGXQ0RcRxvKlPmtzX2kxsMLSSv8wGOqUBw2o%2BvXv0oBLDbE7yCuMiBp0Jn%2BXQQZF8NapsSLxFFRKSO7gEmKAwwHr6KT%2Bawn%2BoY22pO0CW7V%2FK4EXp2p%2BJoHadJWvNkbtTfiy4XeYXMG9MyMVX1BBYvkIz3ruytU4fS%2FwCFDr%2F2eindq%2Fy3hZ34dIU779%2BkdUnAh53fS%2FAHUQLcT5QO7cnLIN8jLYk3Nra7mLOsgnrD44ORp2vkaFn1BipROvF&X-Amz-Signature=0b6a7c2b92dee21d5aa02c61983bee819bfcdf6962d638da5e51870a0cfaada3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HONJVPZ%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBak1i%2F4iV9rLcpW5IObAoXZ36rXRoosZr8zR2dANlmvAiEA%2F%2FCjnevmW4yJIYgfDliyixOZt8r8z2EJjREWLb5GogoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpvI3jFjHBMvA8ymCrcAxVR%2B0zHaCNAe7INzs0SmX85QT%2FkuSgUzqElKURQhACFBPxb7JodfI2hXbspeFP%2F1lDO9LPCASRYJP2D3AaMxX2YTebRCMGFAv4FmH2IpnE53nAjYaU8eHYrNJFyysz4ufbDX82huc40tIemOTdR7wXVf6BEinvkLfDO7mu6QvkiLqM90Ut%2Ftg%2FjDt76TAOwkKjVT01731nWDZwy%2FQ5sQse7aKMy7WSUC%2FK463IPYG5EolrxB4BBN0%2F8xZcriqoEROI8WSzULBNOy9iYpQZ4cwW777U%2FYkzUFxmDw7dflKBqK3jPrP8XgeIWaJls%2Fdm086MAAUvjKPIo%2FaM2MipvifYa3pyzuxgwrqk%2Fs8Dg4Bf%2FsjyqiRgyaHZk2ngrPD5G%2Fh3PbOIoHqb4SVmY432fnCX32HAeAKWKSO%2BE0lX6gVnQQ26mNo5vqH7HFPdHOEGYKU5zQhXuK%2FADo8QgrYh3mVNCeevPdldIDaSa1ROg9idFrIEFBwT81QLex4O6SIxl8p8EBSgz0mVOUvtDCuZFV5PhNDqU9LvvBwi%2Bu8hqCeAMWw9bPfRPxBDBIsJzbQ64Jc%2BiUVrc51YFTyNpgZhHJYStwwptRmEjyHwQUCuBGXQ0RcRxvKlPmtzX2kxsMLSSv8wGOqUBw2o%2BvXv0oBLDbE7yCuMiBp0Jn%2BXQQZF8NapsSLxFFRKSO7gEmKAwwHr6KT%2Bawn%2BoY22pO0CW7V%2FK4EXp2p%2BJoHadJWvNkbtTfiy4XeYXMG9MyMVX1BBYvkIz3ruytU4fS%2FwCFDr%2F2eindq%2Fy3hZ34dIU779%2BkdUnAh53fS%2FAHUQLcT5QO7cnLIN8jLYk3Nra7mLOsgnrD44ORp2vkaFn1BipROvF&X-Amz-Signature=f3383b5a4d49192ad249aeccff0b55a5a070c5c75e856ec89e0ab70ef718ed5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HONJVPZ%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBak1i%2F4iV9rLcpW5IObAoXZ36rXRoosZr8zR2dANlmvAiEA%2F%2FCjnevmW4yJIYgfDliyixOZt8r8z2EJjREWLb5GogoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpvI3jFjHBMvA8ymCrcAxVR%2B0zHaCNAe7INzs0SmX85QT%2FkuSgUzqElKURQhACFBPxb7JodfI2hXbspeFP%2F1lDO9LPCASRYJP2D3AaMxX2YTebRCMGFAv4FmH2IpnE53nAjYaU8eHYrNJFyysz4ufbDX82huc40tIemOTdR7wXVf6BEinvkLfDO7mu6QvkiLqM90Ut%2Ftg%2FjDt76TAOwkKjVT01731nWDZwy%2FQ5sQse7aKMy7WSUC%2FK463IPYG5EolrxB4BBN0%2F8xZcriqoEROI8WSzULBNOy9iYpQZ4cwW777U%2FYkzUFxmDw7dflKBqK3jPrP8XgeIWaJls%2Fdm086MAAUvjKPIo%2FaM2MipvifYa3pyzuxgwrqk%2Fs8Dg4Bf%2FsjyqiRgyaHZk2ngrPD5G%2Fh3PbOIoHqb4SVmY432fnCX32HAeAKWKSO%2BE0lX6gVnQQ26mNo5vqH7HFPdHOEGYKU5zQhXuK%2FADo8QgrYh3mVNCeevPdldIDaSa1ROg9idFrIEFBwT81QLex4O6SIxl8p8EBSgz0mVOUvtDCuZFV5PhNDqU9LvvBwi%2Bu8hqCeAMWw9bPfRPxBDBIsJzbQ64Jc%2BiUVrc51YFTyNpgZhHJYStwwptRmEjyHwQUCuBGXQ0RcRxvKlPmtzX2kxsMLSSv8wGOqUBw2o%2BvXv0oBLDbE7yCuMiBp0Jn%2BXQQZF8NapsSLxFFRKSO7gEmKAwwHr6KT%2Bawn%2BoY22pO0CW7V%2FK4EXp2p%2BJoHadJWvNkbtTfiy4XeYXMG9MyMVX1BBYvkIz3ruytU4fS%2FwCFDr%2F2eindq%2Fy3hZ34dIU779%2BkdUnAh53fS%2FAHUQLcT5QO7cnLIN8jLYk3Nra7mLOsgnrD44ORp2vkaFn1BipROvF&X-Amz-Signature=aa553b848c0c2da9ba43d33afd1d2b93ac77e994df67e07b54f6d97d15d83406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HONJVPZ%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBak1i%2F4iV9rLcpW5IObAoXZ36rXRoosZr8zR2dANlmvAiEA%2F%2FCjnevmW4yJIYgfDliyixOZt8r8z2EJjREWLb5GogoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpvI3jFjHBMvA8ymCrcAxVR%2B0zHaCNAe7INzs0SmX85QT%2FkuSgUzqElKURQhACFBPxb7JodfI2hXbspeFP%2F1lDO9LPCASRYJP2D3AaMxX2YTebRCMGFAv4FmH2IpnE53nAjYaU8eHYrNJFyysz4ufbDX82huc40tIemOTdR7wXVf6BEinvkLfDO7mu6QvkiLqM90Ut%2Ftg%2FjDt76TAOwkKjVT01731nWDZwy%2FQ5sQse7aKMy7WSUC%2FK463IPYG5EolrxB4BBN0%2F8xZcriqoEROI8WSzULBNOy9iYpQZ4cwW777U%2FYkzUFxmDw7dflKBqK3jPrP8XgeIWaJls%2Fdm086MAAUvjKPIo%2FaM2MipvifYa3pyzuxgwrqk%2Fs8Dg4Bf%2FsjyqiRgyaHZk2ngrPD5G%2Fh3PbOIoHqb4SVmY432fnCX32HAeAKWKSO%2BE0lX6gVnQQ26mNo5vqH7HFPdHOEGYKU5zQhXuK%2FADo8QgrYh3mVNCeevPdldIDaSa1ROg9idFrIEFBwT81QLex4O6SIxl8p8EBSgz0mVOUvtDCuZFV5PhNDqU9LvvBwi%2Bu8hqCeAMWw9bPfRPxBDBIsJzbQ64Jc%2BiUVrc51YFTyNpgZhHJYStwwptRmEjyHwQUCuBGXQ0RcRxvKlPmtzX2kxsMLSSv8wGOqUBw2o%2BvXv0oBLDbE7yCuMiBp0Jn%2BXQQZF8NapsSLxFFRKSO7gEmKAwwHr6KT%2Bawn%2BoY22pO0CW7V%2FK4EXp2p%2BJoHadJWvNkbtTfiy4XeYXMG9MyMVX1BBYvkIz3ruytU4fS%2FwCFDr%2F2eindq%2Fy3hZ34dIU779%2BkdUnAh53fS%2FAHUQLcT5QO7cnLIN8jLYk3Nra7mLOsgnrD44ORp2vkaFn1BipROvF&X-Amz-Signature=4546dcd78ac86ae8e8433349acbe37552233ea6c142db9499a68d1b15b3274dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HONJVPZ%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBak1i%2F4iV9rLcpW5IObAoXZ36rXRoosZr8zR2dANlmvAiEA%2F%2FCjnevmW4yJIYgfDliyixOZt8r8z2EJjREWLb5GogoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpvI3jFjHBMvA8ymCrcAxVR%2B0zHaCNAe7INzs0SmX85QT%2FkuSgUzqElKURQhACFBPxb7JodfI2hXbspeFP%2F1lDO9LPCASRYJP2D3AaMxX2YTebRCMGFAv4FmH2IpnE53nAjYaU8eHYrNJFyysz4ufbDX82huc40tIemOTdR7wXVf6BEinvkLfDO7mu6QvkiLqM90Ut%2Ftg%2FjDt76TAOwkKjVT01731nWDZwy%2FQ5sQse7aKMy7WSUC%2FK463IPYG5EolrxB4BBN0%2F8xZcriqoEROI8WSzULBNOy9iYpQZ4cwW777U%2FYkzUFxmDw7dflKBqK3jPrP8XgeIWaJls%2Fdm086MAAUvjKPIo%2FaM2MipvifYa3pyzuxgwrqk%2Fs8Dg4Bf%2FsjyqiRgyaHZk2ngrPD5G%2Fh3PbOIoHqb4SVmY432fnCX32HAeAKWKSO%2BE0lX6gVnQQ26mNo5vqH7HFPdHOEGYKU5zQhXuK%2FADo8QgrYh3mVNCeevPdldIDaSa1ROg9idFrIEFBwT81QLex4O6SIxl8p8EBSgz0mVOUvtDCuZFV5PhNDqU9LvvBwi%2Bu8hqCeAMWw9bPfRPxBDBIsJzbQ64Jc%2BiUVrc51YFTyNpgZhHJYStwwptRmEjyHwQUCuBGXQ0RcRxvKlPmtzX2kxsMLSSv8wGOqUBw2o%2BvXv0oBLDbE7yCuMiBp0Jn%2BXQQZF8NapsSLxFFRKSO7gEmKAwwHr6KT%2Bawn%2BoY22pO0CW7V%2FK4EXp2p%2BJoHadJWvNkbtTfiy4XeYXMG9MyMVX1BBYvkIz3ruytU4fS%2FwCFDr%2F2eindq%2Fy3hZ34dIU779%2BkdUnAh53fS%2FAHUQLcT5QO7cnLIN8jLYk3Nra7mLOsgnrD44ORp2vkaFn1BipROvF&X-Amz-Signature=e3b6ee7570dd19ed21381e200b0270f6fd8bdbc29b0dfd5d06fc2eae7506982d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HONJVPZ%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBak1i%2F4iV9rLcpW5IObAoXZ36rXRoosZr8zR2dANlmvAiEA%2F%2FCjnevmW4yJIYgfDliyixOZt8r8z2EJjREWLb5GogoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpvI3jFjHBMvA8ymCrcAxVR%2B0zHaCNAe7INzs0SmX85QT%2FkuSgUzqElKURQhACFBPxb7JodfI2hXbspeFP%2F1lDO9LPCASRYJP2D3AaMxX2YTebRCMGFAv4FmH2IpnE53nAjYaU8eHYrNJFyysz4ufbDX82huc40tIemOTdR7wXVf6BEinvkLfDO7mu6QvkiLqM90Ut%2Ftg%2FjDt76TAOwkKjVT01731nWDZwy%2FQ5sQse7aKMy7WSUC%2FK463IPYG5EolrxB4BBN0%2F8xZcriqoEROI8WSzULBNOy9iYpQZ4cwW777U%2FYkzUFxmDw7dflKBqK3jPrP8XgeIWaJls%2Fdm086MAAUvjKPIo%2FaM2MipvifYa3pyzuxgwrqk%2Fs8Dg4Bf%2FsjyqiRgyaHZk2ngrPD5G%2Fh3PbOIoHqb4SVmY432fnCX32HAeAKWKSO%2BE0lX6gVnQQ26mNo5vqH7HFPdHOEGYKU5zQhXuK%2FADo8QgrYh3mVNCeevPdldIDaSa1ROg9idFrIEFBwT81QLex4O6SIxl8p8EBSgz0mVOUvtDCuZFV5PhNDqU9LvvBwi%2Bu8hqCeAMWw9bPfRPxBDBIsJzbQ64Jc%2BiUVrc51YFTyNpgZhHJYStwwptRmEjyHwQUCuBGXQ0RcRxvKlPmtzX2kxsMLSSv8wGOqUBw2o%2BvXv0oBLDbE7yCuMiBp0Jn%2BXQQZF8NapsSLxFFRKSO7gEmKAwwHr6KT%2Bawn%2BoY22pO0CW7V%2FK4EXp2p%2BJoHadJWvNkbtTfiy4XeYXMG9MyMVX1BBYvkIz3ruytU4fS%2FwCFDr%2F2eindq%2Fy3hZ34dIU779%2BkdUnAh53fS%2FAHUQLcT5QO7cnLIN8jLYk3Nra7mLOsgnrD44ORp2vkaFn1BipROvF&X-Amz-Signature=71bcfab0e7f000bff935708471efa1a780d11d130642234ec95f3459fd8069a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


