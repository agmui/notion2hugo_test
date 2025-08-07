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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRIEEZJT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFgh7KNN3VQ%2FZXnVLMnPcGNRGIZbDhoFt08W9AeJ1145AiBqwSy2rT%2BQMeX0iK05ecxgBcfSPS6G2La7epsibUs%2FyiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDviPgJq6zVWs6IrVKtwDiyt8gt2EJGSsAdXfvOalpABaJbRhZNqG4t5GsXuBps1XxrBQZIlCE6u6KNb57Gd32%2BQqlG1%2BHFPl205OiMSq1ksc%2Bvcvmr%2BQkieVJJ6Qde2NPznsO5mExsHXcoWWP5Cp%2BAjtP04hpRw8uktgS3PbKYyVzsgEnzEo4LKq%2FHJO7qYZ0JF5jdn7KQNzjlr8OZj4KtslC8RlWyde6oVtSkMJKMS6EV0ojzLtI7UB50yXvQ2iwIRQfUYJcrUcAKKHrWzOjt%2FWaIaJSHK%2BM7dDqsbfC5wKcLxcIrGDAiJqmGUjI7QlMkhc1CwT5KZOtL60nM%2Fxaxwq%2Bmz7cDDJtL7oLYUnuJIiYQDogzMJlkQYRiIqYEdW2lNnK1wqHYJGbKLrrzqb%2FMTjyzplGGgMz3Hrq37Cd0ler7i2GL16MNTLUAmp9FWAX1Jqu57PR6PO5I2Ih669OIS3PXtlJJt3jpy2oNj7FNnm2Z0Xnepm5%2FD3vXuRhNPJzLqci4v3UzAUAGQdaB7HzxGVXM%2FKVBRmoAMfx3BHgkZbPTDHoDQ9AMwgLpKC3LjMrne%2Fjf4CAASuBi8wWZFhHaRWDC5EwizhbFFMZ1n%2BSnyttBT1lQIWsRdzlBcImftdMv%2F1WDntP%2BKWUBUwiu3QxAY6pgGLt%2F8%2BRGzOyrXz6sVXa%2FMTSV11tCk%2BURi%2FL3IDVEDMHgMi725%2BTYaO7Fq1pYr3Mb8JWKZReNXF7C1EDE65hmhCMFA90NNZJcUXG3x8l0lPsZqZ3yAUaJWDRGp71mxKUo7EpxoS%2FDD5ZhJ1dsgz2gftDbVsCUDVUr6bGh6wud9F6A9mT1iTgJEIOyD84MVZWcxNjUdNDEUgjsiYuhIrbSTaOMGScSFi&X-Amz-Signature=7d9768b4c0004db0961b2e7f0fdf03b4d9d5878ac2dc47874f6b804608a16f5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRIEEZJT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFgh7KNN3VQ%2FZXnVLMnPcGNRGIZbDhoFt08W9AeJ1145AiBqwSy2rT%2BQMeX0iK05ecxgBcfSPS6G2La7epsibUs%2FyiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDviPgJq6zVWs6IrVKtwDiyt8gt2EJGSsAdXfvOalpABaJbRhZNqG4t5GsXuBps1XxrBQZIlCE6u6KNb57Gd32%2BQqlG1%2BHFPl205OiMSq1ksc%2Bvcvmr%2BQkieVJJ6Qde2NPznsO5mExsHXcoWWP5Cp%2BAjtP04hpRw8uktgS3PbKYyVzsgEnzEo4LKq%2FHJO7qYZ0JF5jdn7KQNzjlr8OZj4KtslC8RlWyde6oVtSkMJKMS6EV0ojzLtI7UB50yXvQ2iwIRQfUYJcrUcAKKHrWzOjt%2FWaIaJSHK%2BM7dDqsbfC5wKcLxcIrGDAiJqmGUjI7QlMkhc1CwT5KZOtL60nM%2Fxaxwq%2Bmz7cDDJtL7oLYUnuJIiYQDogzMJlkQYRiIqYEdW2lNnK1wqHYJGbKLrrzqb%2FMTjyzplGGgMz3Hrq37Cd0ler7i2GL16MNTLUAmp9FWAX1Jqu57PR6PO5I2Ih669OIS3PXtlJJt3jpy2oNj7FNnm2Z0Xnepm5%2FD3vXuRhNPJzLqci4v3UzAUAGQdaB7HzxGVXM%2FKVBRmoAMfx3BHgkZbPTDHoDQ9AMwgLpKC3LjMrne%2Fjf4CAASuBi8wWZFhHaRWDC5EwizhbFFMZ1n%2BSnyttBT1lQIWsRdzlBcImftdMv%2F1WDntP%2BKWUBUwiu3QxAY6pgGLt%2F8%2BRGzOyrXz6sVXa%2FMTSV11tCk%2BURi%2FL3IDVEDMHgMi725%2BTYaO7Fq1pYr3Mb8JWKZReNXF7C1EDE65hmhCMFA90NNZJcUXG3x8l0lPsZqZ3yAUaJWDRGp71mxKUo7EpxoS%2FDD5ZhJ1dsgz2gftDbVsCUDVUr6bGh6wud9F6A9mT1iTgJEIOyD84MVZWcxNjUdNDEUgjsiYuhIrbSTaOMGScSFi&X-Amz-Signature=5646f3917627c709a1f70bbaacb36c2635c6f36f6f251cdf82c3b156b13e877c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRIEEZJT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFgh7KNN3VQ%2FZXnVLMnPcGNRGIZbDhoFt08W9AeJ1145AiBqwSy2rT%2BQMeX0iK05ecxgBcfSPS6G2La7epsibUs%2FyiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDviPgJq6zVWs6IrVKtwDiyt8gt2EJGSsAdXfvOalpABaJbRhZNqG4t5GsXuBps1XxrBQZIlCE6u6KNb57Gd32%2BQqlG1%2BHFPl205OiMSq1ksc%2Bvcvmr%2BQkieVJJ6Qde2NPznsO5mExsHXcoWWP5Cp%2BAjtP04hpRw8uktgS3PbKYyVzsgEnzEo4LKq%2FHJO7qYZ0JF5jdn7KQNzjlr8OZj4KtslC8RlWyde6oVtSkMJKMS6EV0ojzLtI7UB50yXvQ2iwIRQfUYJcrUcAKKHrWzOjt%2FWaIaJSHK%2BM7dDqsbfC5wKcLxcIrGDAiJqmGUjI7QlMkhc1CwT5KZOtL60nM%2Fxaxwq%2Bmz7cDDJtL7oLYUnuJIiYQDogzMJlkQYRiIqYEdW2lNnK1wqHYJGbKLrrzqb%2FMTjyzplGGgMz3Hrq37Cd0ler7i2GL16MNTLUAmp9FWAX1Jqu57PR6PO5I2Ih669OIS3PXtlJJt3jpy2oNj7FNnm2Z0Xnepm5%2FD3vXuRhNPJzLqci4v3UzAUAGQdaB7HzxGVXM%2FKVBRmoAMfx3BHgkZbPTDHoDQ9AMwgLpKC3LjMrne%2Fjf4CAASuBi8wWZFhHaRWDC5EwizhbFFMZ1n%2BSnyttBT1lQIWsRdzlBcImftdMv%2F1WDntP%2BKWUBUwiu3QxAY6pgGLt%2F8%2BRGzOyrXz6sVXa%2FMTSV11tCk%2BURi%2FL3IDVEDMHgMi725%2BTYaO7Fq1pYr3Mb8JWKZReNXF7C1EDE65hmhCMFA90NNZJcUXG3x8l0lPsZqZ3yAUaJWDRGp71mxKUo7EpxoS%2FDD5ZhJ1dsgz2gftDbVsCUDVUr6bGh6wud9F6A9mT1iTgJEIOyD84MVZWcxNjUdNDEUgjsiYuhIrbSTaOMGScSFi&X-Amz-Signature=ef52c0350a61d37efbe79bce10a46a44759af6c0f66e581ceaea911263d44d89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRIEEZJT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFgh7KNN3VQ%2FZXnVLMnPcGNRGIZbDhoFt08W9AeJ1145AiBqwSy2rT%2BQMeX0iK05ecxgBcfSPS6G2La7epsibUs%2FyiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDviPgJq6zVWs6IrVKtwDiyt8gt2EJGSsAdXfvOalpABaJbRhZNqG4t5GsXuBps1XxrBQZIlCE6u6KNb57Gd32%2BQqlG1%2BHFPl205OiMSq1ksc%2Bvcvmr%2BQkieVJJ6Qde2NPznsO5mExsHXcoWWP5Cp%2BAjtP04hpRw8uktgS3PbKYyVzsgEnzEo4LKq%2FHJO7qYZ0JF5jdn7KQNzjlr8OZj4KtslC8RlWyde6oVtSkMJKMS6EV0ojzLtI7UB50yXvQ2iwIRQfUYJcrUcAKKHrWzOjt%2FWaIaJSHK%2BM7dDqsbfC5wKcLxcIrGDAiJqmGUjI7QlMkhc1CwT5KZOtL60nM%2Fxaxwq%2Bmz7cDDJtL7oLYUnuJIiYQDogzMJlkQYRiIqYEdW2lNnK1wqHYJGbKLrrzqb%2FMTjyzplGGgMz3Hrq37Cd0ler7i2GL16MNTLUAmp9FWAX1Jqu57PR6PO5I2Ih669OIS3PXtlJJt3jpy2oNj7FNnm2Z0Xnepm5%2FD3vXuRhNPJzLqci4v3UzAUAGQdaB7HzxGVXM%2FKVBRmoAMfx3BHgkZbPTDHoDQ9AMwgLpKC3LjMrne%2Fjf4CAASuBi8wWZFhHaRWDC5EwizhbFFMZ1n%2BSnyttBT1lQIWsRdzlBcImftdMv%2F1WDntP%2BKWUBUwiu3QxAY6pgGLt%2F8%2BRGzOyrXz6sVXa%2FMTSV11tCk%2BURi%2FL3IDVEDMHgMi725%2BTYaO7Fq1pYr3Mb8JWKZReNXF7C1EDE65hmhCMFA90NNZJcUXG3x8l0lPsZqZ3yAUaJWDRGp71mxKUo7EpxoS%2FDD5ZhJ1dsgz2gftDbVsCUDVUr6bGh6wud9F6A9mT1iTgJEIOyD84MVZWcxNjUdNDEUgjsiYuhIrbSTaOMGScSFi&X-Amz-Signature=4dbdfb7b1ccf9e7a4b29edd0c9a28c0b79109bfd11d24358d18f360438f793dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRIEEZJT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFgh7KNN3VQ%2FZXnVLMnPcGNRGIZbDhoFt08W9AeJ1145AiBqwSy2rT%2BQMeX0iK05ecxgBcfSPS6G2La7epsibUs%2FyiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDviPgJq6zVWs6IrVKtwDiyt8gt2EJGSsAdXfvOalpABaJbRhZNqG4t5GsXuBps1XxrBQZIlCE6u6KNb57Gd32%2BQqlG1%2BHFPl205OiMSq1ksc%2Bvcvmr%2BQkieVJJ6Qde2NPznsO5mExsHXcoWWP5Cp%2BAjtP04hpRw8uktgS3PbKYyVzsgEnzEo4LKq%2FHJO7qYZ0JF5jdn7KQNzjlr8OZj4KtslC8RlWyde6oVtSkMJKMS6EV0ojzLtI7UB50yXvQ2iwIRQfUYJcrUcAKKHrWzOjt%2FWaIaJSHK%2BM7dDqsbfC5wKcLxcIrGDAiJqmGUjI7QlMkhc1CwT5KZOtL60nM%2Fxaxwq%2Bmz7cDDJtL7oLYUnuJIiYQDogzMJlkQYRiIqYEdW2lNnK1wqHYJGbKLrrzqb%2FMTjyzplGGgMz3Hrq37Cd0ler7i2GL16MNTLUAmp9FWAX1Jqu57PR6PO5I2Ih669OIS3PXtlJJt3jpy2oNj7FNnm2Z0Xnepm5%2FD3vXuRhNPJzLqci4v3UzAUAGQdaB7HzxGVXM%2FKVBRmoAMfx3BHgkZbPTDHoDQ9AMwgLpKC3LjMrne%2Fjf4CAASuBi8wWZFhHaRWDC5EwizhbFFMZ1n%2BSnyttBT1lQIWsRdzlBcImftdMv%2F1WDntP%2BKWUBUwiu3QxAY6pgGLt%2F8%2BRGzOyrXz6sVXa%2FMTSV11tCk%2BURi%2FL3IDVEDMHgMi725%2BTYaO7Fq1pYr3Mb8JWKZReNXF7C1EDE65hmhCMFA90NNZJcUXG3x8l0lPsZqZ3yAUaJWDRGp71mxKUo7EpxoS%2FDD5ZhJ1dsgz2gftDbVsCUDVUr6bGh6wud9F6A9mT1iTgJEIOyD84MVZWcxNjUdNDEUgjsiYuhIrbSTaOMGScSFi&X-Amz-Signature=657c641ab02a560482990aa92254ea7539ee72a4031f3ee29a26df54abbf98e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRIEEZJT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFgh7KNN3VQ%2FZXnVLMnPcGNRGIZbDhoFt08W9AeJ1145AiBqwSy2rT%2BQMeX0iK05ecxgBcfSPS6G2La7epsibUs%2FyiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDviPgJq6zVWs6IrVKtwDiyt8gt2EJGSsAdXfvOalpABaJbRhZNqG4t5GsXuBps1XxrBQZIlCE6u6KNb57Gd32%2BQqlG1%2BHFPl205OiMSq1ksc%2Bvcvmr%2BQkieVJJ6Qde2NPznsO5mExsHXcoWWP5Cp%2BAjtP04hpRw8uktgS3PbKYyVzsgEnzEo4LKq%2FHJO7qYZ0JF5jdn7KQNzjlr8OZj4KtslC8RlWyde6oVtSkMJKMS6EV0ojzLtI7UB50yXvQ2iwIRQfUYJcrUcAKKHrWzOjt%2FWaIaJSHK%2BM7dDqsbfC5wKcLxcIrGDAiJqmGUjI7QlMkhc1CwT5KZOtL60nM%2Fxaxwq%2Bmz7cDDJtL7oLYUnuJIiYQDogzMJlkQYRiIqYEdW2lNnK1wqHYJGbKLrrzqb%2FMTjyzplGGgMz3Hrq37Cd0ler7i2GL16MNTLUAmp9FWAX1Jqu57PR6PO5I2Ih669OIS3PXtlJJt3jpy2oNj7FNnm2Z0Xnepm5%2FD3vXuRhNPJzLqci4v3UzAUAGQdaB7HzxGVXM%2FKVBRmoAMfx3BHgkZbPTDHoDQ9AMwgLpKC3LjMrne%2Fjf4CAASuBi8wWZFhHaRWDC5EwizhbFFMZ1n%2BSnyttBT1lQIWsRdzlBcImftdMv%2F1WDntP%2BKWUBUwiu3QxAY6pgGLt%2F8%2BRGzOyrXz6sVXa%2FMTSV11tCk%2BURi%2FL3IDVEDMHgMi725%2BTYaO7Fq1pYr3Mb8JWKZReNXF7C1EDE65hmhCMFA90NNZJcUXG3x8l0lPsZqZ3yAUaJWDRGp71mxKUo7EpxoS%2FDD5ZhJ1dsgz2gftDbVsCUDVUr6bGh6wud9F6A9mT1iTgJEIOyD84MVZWcxNjUdNDEUgjsiYuhIrbSTaOMGScSFi&X-Amz-Signature=e44c18899e989ad3e269b1bddd4b261866f7cd73191836ec9bf190275cb7c98f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRIEEZJT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFgh7KNN3VQ%2FZXnVLMnPcGNRGIZbDhoFt08W9AeJ1145AiBqwSy2rT%2BQMeX0iK05ecxgBcfSPS6G2La7epsibUs%2FyiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDviPgJq6zVWs6IrVKtwDiyt8gt2EJGSsAdXfvOalpABaJbRhZNqG4t5GsXuBps1XxrBQZIlCE6u6KNb57Gd32%2BQqlG1%2BHFPl205OiMSq1ksc%2Bvcvmr%2BQkieVJJ6Qde2NPznsO5mExsHXcoWWP5Cp%2BAjtP04hpRw8uktgS3PbKYyVzsgEnzEo4LKq%2FHJO7qYZ0JF5jdn7KQNzjlr8OZj4KtslC8RlWyde6oVtSkMJKMS6EV0ojzLtI7UB50yXvQ2iwIRQfUYJcrUcAKKHrWzOjt%2FWaIaJSHK%2BM7dDqsbfC5wKcLxcIrGDAiJqmGUjI7QlMkhc1CwT5KZOtL60nM%2Fxaxwq%2Bmz7cDDJtL7oLYUnuJIiYQDogzMJlkQYRiIqYEdW2lNnK1wqHYJGbKLrrzqb%2FMTjyzplGGgMz3Hrq37Cd0ler7i2GL16MNTLUAmp9FWAX1Jqu57PR6PO5I2Ih669OIS3PXtlJJt3jpy2oNj7FNnm2Z0Xnepm5%2FD3vXuRhNPJzLqci4v3UzAUAGQdaB7HzxGVXM%2FKVBRmoAMfx3BHgkZbPTDHoDQ9AMwgLpKC3LjMrne%2Fjf4CAASuBi8wWZFhHaRWDC5EwizhbFFMZ1n%2BSnyttBT1lQIWsRdzlBcImftdMv%2F1WDntP%2BKWUBUwiu3QxAY6pgGLt%2F8%2BRGzOyrXz6sVXa%2FMTSV11tCk%2BURi%2FL3IDVEDMHgMi725%2BTYaO7Fq1pYr3Mb8JWKZReNXF7C1EDE65hmhCMFA90NNZJcUXG3x8l0lPsZqZ3yAUaJWDRGp71mxKUo7EpxoS%2FDD5ZhJ1dsgz2gftDbVsCUDVUr6bGh6wud9F6A9mT1iTgJEIOyD84MVZWcxNjUdNDEUgjsiYuhIrbSTaOMGScSFi&X-Amz-Signature=a621b466bf90a41cc4b44235f4d66c8fb273b119ad2125750f1b7858fff260b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRIEEZJT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFgh7KNN3VQ%2FZXnVLMnPcGNRGIZbDhoFt08W9AeJ1145AiBqwSy2rT%2BQMeX0iK05ecxgBcfSPS6G2La7epsibUs%2FyiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDviPgJq6zVWs6IrVKtwDiyt8gt2EJGSsAdXfvOalpABaJbRhZNqG4t5GsXuBps1XxrBQZIlCE6u6KNb57Gd32%2BQqlG1%2BHFPl205OiMSq1ksc%2Bvcvmr%2BQkieVJJ6Qde2NPznsO5mExsHXcoWWP5Cp%2BAjtP04hpRw8uktgS3PbKYyVzsgEnzEo4LKq%2FHJO7qYZ0JF5jdn7KQNzjlr8OZj4KtslC8RlWyde6oVtSkMJKMS6EV0ojzLtI7UB50yXvQ2iwIRQfUYJcrUcAKKHrWzOjt%2FWaIaJSHK%2BM7dDqsbfC5wKcLxcIrGDAiJqmGUjI7QlMkhc1CwT5KZOtL60nM%2Fxaxwq%2Bmz7cDDJtL7oLYUnuJIiYQDogzMJlkQYRiIqYEdW2lNnK1wqHYJGbKLrrzqb%2FMTjyzplGGgMz3Hrq37Cd0ler7i2GL16MNTLUAmp9FWAX1Jqu57PR6PO5I2Ih669OIS3PXtlJJt3jpy2oNj7FNnm2Z0Xnepm5%2FD3vXuRhNPJzLqci4v3UzAUAGQdaB7HzxGVXM%2FKVBRmoAMfx3BHgkZbPTDHoDQ9AMwgLpKC3LjMrne%2Fjf4CAASuBi8wWZFhHaRWDC5EwizhbFFMZ1n%2BSnyttBT1lQIWsRdzlBcImftdMv%2F1WDntP%2BKWUBUwiu3QxAY6pgGLt%2F8%2BRGzOyrXz6sVXa%2FMTSV11tCk%2BURi%2FL3IDVEDMHgMi725%2BTYaO7Fq1pYr3Mb8JWKZReNXF7C1EDE65hmhCMFA90NNZJcUXG3x8l0lPsZqZ3yAUaJWDRGp71mxKUo7EpxoS%2FDD5ZhJ1dsgz2gftDbVsCUDVUr6bGh6wud9F6A9mT1iTgJEIOyD84MVZWcxNjUdNDEUgjsiYuhIrbSTaOMGScSFi&X-Amz-Signature=e13248c1ace8fc118987c1273e57180073dcf75f0ad357c10e4bb54b64101fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRIEEZJT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFgh7KNN3VQ%2FZXnVLMnPcGNRGIZbDhoFt08W9AeJ1145AiBqwSy2rT%2BQMeX0iK05ecxgBcfSPS6G2La7epsibUs%2FyiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDviPgJq6zVWs6IrVKtwDiyt8gt2EJGSsAdXfvOalpABaJbRhZNqG4t5GsXuBps1XxrBQZIlCE6u6KNb57Gd32%2BQqlG1%2BHFPl205OiMSq1ksc%2Bvcvmr%2BQkieVJJ6Qde2NPznsO5mExsHXcoWWP5Cp%2BAjtP04hpRw8uktgS3PbKYyVzsgEnzEo4LKq%2FHJO7qYZ0JF5jdn7KQNzjlr8OZj4KtslC8RlWyde6oVtSkMJKMS6EV0ojzLtI7UB50yXvQ2iwIRQfUYJcrUcAKKHrWzOjt%2FWaIaJSHK%2BM7dDqsbfC5wKcLxcIrGDAiJqmGUjI7QlMkhc1CwT5KZOtL60nM%2Fxaxwq%2Bmz7cDDJtL7oLYUnuJIiYQDogzMJlkQYRiIqYEdW2lNnK1wqHYJGbKLrrzqb%2FMTjyzplGGgMz3Hrq37Cd0ler7i2GL16MNTLUAmp9FWAX1Jqu57PR6PO5I2Ih669OIS3PXtlJJt3jpy2oNj7FNnm2Z0Xnepm5%2FD3vXuRhNPJzLqci4v3UzAUAGQdaB7HzxGVXM%2FKVBRmoAMfx3BHgkZbPTDHoDQ9AMwgLpKC3LjMrne%2Fjf4CAASuBi8wWZFhHaRWDC5EwizhbFFMZ1n%2BSnyttBT1lQIWsRdzlBcImftdMv%2F1WDntP%2BKWUBUwiu3QxAY6pgGLt%2F8%2BRGzOyrXz6sVXa%2FMTSV11tCk%2BURi%2FL3IDVEDMHgMi725%2BTYaO7Fq1pYr3Mb8JWKZReNXF7C1EDE65hmhCMFA90NNZJcUXG3x8l0lPsZqZ3yAUaJWDRGp71mxKUo7EpxoS%2FDD5ZhJ1dsgz2gftDbVsCUDVUr6bGh6wud9F6A9mT1iTgJEIOyD84MVZWcxNjUdNDEUgjsiYuhIrbSTaOMGScSFi&X-Amz-Signature=9bbccd91d8964935c705e825af5a36c3b221fca80034845ec0df374ee0a13880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRIEEZJT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFgh7KNN3VQ%2FZXnVLMnPcGNRGIZbDhoFt08W9AeJ1145AiBqwSy2rT%2BQMeX0iK05ecxgBcfSPS6G2La7epsibUs%2FyiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDviPgJq6zVWs6IrVKtwDiyt8gt2EJGSsAdXfvOalpABaJbRhZNqG4t5GsXuBps1XxrBQZIlCE6u6KNb57Gd32%2BQqlG1%2BHFPl205OiMSq1ksc%2Bvcvmr%2BQkieVJJ6Qde2NPznsO5mExsHXcoWWP5Cp%2BAjtP04hpRw8uktgS3PbKYyVzsgEnzEo4LKq%2FHJO7qYZ0JF5jdn7KQNzjlr8OZj4KtslC8RlWyde6oVtSkMJKMS6EV0ojzLtI7UB50yXvQ2iwIRQfUYJcrUcAKKHrWzOjt%2FWaIaJSHK%2BM7dDqsbfC5wKcLxcIrGDAiJqmGUjI7QlMkhc1CwT5KZOtL60nM%2Fxaxwq%2Bmz7cDDJtL7oLYUnuJIiYQDogzMJlkQYRiIqYEdW2lNnK1wqHYJGbKLrrzqb%2FMTjyzplGGgMz3Hrq37Cd0ler7i2GL16MNTLUAmp9FWAX1Jqu57PR6PO5I2Ih669OIS3PXtlJJt3jpy2oNj7FNnm2Z0Xnepm5%2FD3vXuRhNPJzLqci4v3UzAUAGQdaB7HzxGVXM%2FKVBRmoAMfx3BHgkZbPTDHoDQ9AMwgLpKC3LjMrne%2Fjf4CAASuBi8wWZFhHaRWDC5EwizhbFFMZ1n%2BSnyttBT1lQIWsRdzlBcImftdMv%2F1WDntP%2BKWUBUwiu3QxAY6pgGLt%2F8%2BRGzOyrXz6sVXa%2FMTSV11tCk%2BURi%2FL3IDVEDMHgMi725%2BTYaO7Fq1pYr3Mb8JWKZReNXF7C1EDE65hmhCMFA90NNZJcUXG3x8l0lPsZqZ3yAUaJWDRGp71mxKUo7EpxoS%2FDD5ZhJ1dsgz2gftDbVsCUDVUr6bGh6wud9F6A9mT1iTgJEIOyD84MVZWcxNjUdNDEUgjsiYuhIrbSTaOMGScSFi&X-Amz-Signature=0ac173b637fecf5cad91658a9d830843bc9fdfe502cc7978c97eea2453a29ed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCJ3GEBV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCks1aro%2FSyWLCCNoQBQPJr4iRD3CbXhG3uAac62qGxCQIgI0Di5wSOsYkr%2BtdKA3sUhzM9WoO5UOsSYTdLkXpwDfMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0nsKgfdLNdfNHu3CrcAxVjLzPr17t8vh1i1lDl9vvViezqJLyqvjFD%2FuQf1LAGkC0D9z1sqSYsPZnZgWfxjkIn9OM%2BkjbjlhKlVDYvaa501lD%2Fjmdg0uz4jgTJfEelKyJJ24FZosuHb53xgFn9szLYXF3lgxlcvpblDld6m2ML9A3zQTswPm2iORQMEZ9Rm8XODu7Z3UXkCu6Ng9Po8O9eXonSRcMzp74EtRl5nLE4HLHy4yQBoTBV48uqJwRBFrNmMimxBSBF336R%2BfGHJncvCZYhPa%2F4k24o5ryGa14XnzCUa4qvMp9EpM3W2qkameUSTpNWim4gYorJI6SvSVyVv4wFTs2cSosw2qboEgjLLGeT8gTGIO6IcYZ3vRf86L594by5iDXBUYByvNPMdRfRCFGc%2FrMoMXehbuX1o1cReEytcmRpT36y3tROeeRzUV065r669MRa7HRLfdTeXWeijsBzD%2Br0N6nwhha%2FiFj1MLeLRX07QDQQG1iF%2FxucexEgydd4jDqS%2BXcEUNGaLOw%2BiIAcGSi75ZbKTC3DcHSTGZkHdU%2F5jrirbo0MSE6pop%2FNiurt8qNjnhS%2B%2BFW9ATszfK8baYt4o8bxTyTzYyC%2Fy42qBjJ%2FfDk4Uc5j%2Bhe26QhkySvKl0Iy6iMmMJft0MQGOqUBaosNQM%2BML8qeh%2FKZqNlD%2Bok1rTZbRGsVs1YLhS%2FsUndWg3OwlT19cdbQjCXeCatnFKESpTrO3Cx7p8N8m8DjcYRvaGE6vGVwvhoFeJyvnV1G8ykRV%2B%2FGfTqSpNNStccma0tEFQ4sf%2B9A9kRs4cQ7GOjHhgSGpPxbip8ABD4SdbQ5h%2BcGVbCDwcRb%2F1mcNozejJrMg0tofX5XLWKBfyg6RW%2B0A16s&X-Amz-Signature=154c37107810be132833d254cf695466d50ef3879ae4021e74c94809823d82e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVN5TSM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIGdMu7yrXpEdvrk1MQoVMPxbR%2Fu%2FR9FS0z97fqMw%2ByLlAiEAkNKuJP4RQS0zxAvkwirmNP4vJ5czohJwALm7uzLA7q4qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCj3EynB1xC6U4vUIyrcA0AhPNY1%2BxwhQdS%2Be5xjezXWIt%2F%2FXGxnDEDDZoSOBY7OvnY07S%2By0lyXLv7I2pBYFidY10QvV1NGdrxX%2FlR%2F6Mi%2BW74I70ldRADRCxftwgaCadVWSKFrYDNJ3WXfcAW3QXdeLBKe06dLIcmHZc7TpoEDFq2jsb0QDMX3PPtydM%2BmchoTDwNzZmPaT%2BjLgqWQrF8UUv27POejNG9IypkbeBxSytq6XhAFRE2QmyLjos9Sn%2FTgcN3B9KHUlpJTfovy7A8zJwJThD7F9IINNiymJEJr%2Bk0fyNVlbYShHlF1lZVcXBhLcyb5xDW3S0Wq1VzVrhulb66Tb22M648gbeNjj6NA0OKbihDoy%2BR6vENCdMjJYofjAf6htt5URpABXKXgxUF0A0ZaqiNO2MtNK%2Fpj2%2FWVwxl5UH9QIPlpSsVXarfRPMYdtGZci%2BIX1itCo5Z7EbhWFTRrWh%2F%2F7Nkb6QHMGguyCV548LHdoM0Oh9efw%2FVgVnW2crt6cppovdrVVLP33EZskvvlgqXIgmw1FX7YnCaRK7fLMjepzLhJnVX9WzXFeAIkxTkiJEPtcTUh%2F4NzZNa%2Btk0pf7ITSwf3T%2Fqclp8Y99f47yx%2BooUrgyZXP5yNseN%2FoL9%2B4T0uKdYUMKXt0MQGOqUBGv%2B%2F5Uaj0KjHHJlRUT3LZ8XlT9Y0wiy6mAc7dGsvTSoubv0p2LYwVFG6%2FvsatGEdYiFHpY%2FQeXJv%2FBUCVkjwouu1tSBQuUld8ZegxD3aCJXYJQwUsSXzooTL%2BZOzEegBE%2FBR5WDUS9Dfl0RIG%2BoDN2Ex5x9LWYuG3iWYXhuCgBGgu87UZaIiIGBE%2BkCgA%2FSPh%2FwkSjF7NIGbiVvufPFNcNttT0JB&X-Amz-Signature=2e4fcdc0976e65161378c3239b18bdceb60db98f1505c36172138e66b7694f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK3DYHTZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDz9dimzQZ%2BgoclX44mcObUZkof3Cddi1k46sYM2cfhpwIgMOT6O%2BC6212uFS69Py0rTaphXWiL%2Fl%2BAQuYR3r14nDUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENEm0Ll98fDT3%2BWbircAyHnPcPLzPEXRA4fFZg9L3H1cJMCcieZnieLYdsZsIQAKMazq65Emjrmr4i1O338zP19n0RZnzukveckbAXbn9zPcAhBidmFxNKk7tSsYXn70ZDKQsOivDh1f7D0KpEeZmC3vHnckX7TfGt16bxnqaeRhvQeN3skMKiURrakKgXuH8dFTDg2O%2BJp23L7uhhQ6HAqfsOSxKswb3h%2FIsU8hsKlEn98gNc8s1%2BTG2KhAYl15IkG8p2py1V2HlgBnULP7oHcK9rNGx77p9BMLXm%2Bt%2BX8kf%2Fo8qAuXSRVEWTtvL4ykjaWnC55tnWkEMZndkmDnBLkYAZATUfOLaKmm3YBIJSQpe88biI1z9v3V7iKRP6lrQvR9Jn1AXsPk7Kng8L7fOeHj9vopUfGDPPi2K%2F%2Fv99CBioWVAqDf9dzZ3cdMMbKO%2BiUtQILJ2aV%2B2jPkXzQ0tBt0HkOvQAfgmCoNIIAPd3NIWLXlZxovp%2FDjMb3RWkdR6cz5p1%2BGB5WO3zOQ5Xmy4xg2MBpuCdL3gvxQlPRtVQp1eA3DiD4QYO6PgUH2aRpoNtjmF5XxSA1aIie4qvEcTLEY%2BVYyIf0rKsCM%2F4xavjtBjYauoj7GKSObGCRzcCyPNQbAr1BNjCspT5MMITt0MQGOqUBE63H5U08SeFOaNau%2Bn7s8Vcq2XusD73uMY4BVkmPspQeAhKvkLwJvRvaeu6nJIpfF8Sk8LMh5VsYav%2FaAX9IJmZcT4Wb5EPU6NoTfH06a7JA2vBzxVy7tBr3YeI8tI5WQPze4gCVqXOc4u1yLQBdpPz4m%2BS1HUl3pd1L3HQILSKnGoYIxARge28Peqy4n%2FITdNNqdxmN1iuntfT%2BVg3Uj8YnOf4h&X-Amz-Signature=a8f778c7a11cf813f05f38251a6291347ed3cc2a23069b8620bcfdc4d8dba87a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRIEEZJT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFgh7KNN3VQ%2FZXnVLMnPcGNRGIZbDhoFt08W9AeJ1145AiBqwSy2rT%2BQMeX0iK05ecxgBcfSPS6G2La7epsibUs%2FyiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDviPgJq6zVWs6IrVKtwDiyt8gt2EJGSsAdXfvOalpABaJbRhZNqG4t5GsXuBps1XxrBQZIlCE6u6KNb57Gd32%2BQqlG1%2BHFPl205OiMSq1ksc%2Bvcvmr%2BQkieVJJ6Qde2NPznsO5mExsHXcoWWP5Cp%2BAjtP04hpRw8uktgS3PbKYyVzsgEnzEo4LKq%2FHJO7qYZ0JF5jdn7KQNzjlr8OZj4KtslC8RlWyde6oVtSkMJKMS6EV0ojzLtI7UB50yXvQ2iwIRQfUYJcrUcAKKHrWzOjt%2FWaIaJSHK%2BM7dDqsbfC5wKcLxcIrGDAiJqmGUjI7QlMkhc1CwT5KZOtL60nM%2Fxaxwq%2Bmz7cDDJtL7oLYUnuJIiYQDogzMJlkQYRiIqYEdW2lNnK1wqHYJGbKLrrzqb%2FMTjyzplGGgMz3Hrq37Cd0ler7i2GL16MNTLUAmp9FWAX1Jqu57PR6PO5I2Ih669OIS3PXtlJJt3jpy2oNj7FNnm2Z0Xnepm5%2FD3vXuRhNPJzLqci4v3UzAUAGQdaB7HzxGVXM%2FKVBRmoAMfx3BHgkZbPTDHoDQ9AMwgLpKC3LjMrne%2Fjf4CAASuBi8wWZFhHaRWDC5EwizhbFFMZ1n%2BSnyttBT1lQIWsRdzlBcImftdMv%2F1WDntP%2BKWUBUwiu3QxAY6pgGLt%2F8%2BRGzOyrXz6sVXa%2FMTSV11tCk%2BURi%2FL3IDVEDMHgMi725%2BTYaO7Fq1pYr3Mb8JWKZReNXF7C1EDE65hmhCMFA90NNZJcUXG3x8l0lPsZqZ3yAUaJWDRGp71mxKUo7EpxoS%2FDD5ZhJ1dsgz2gftDbVsCUDVUr6bGh6wud9F6A9mT1iTgJEIOyD84MVZWcxNjUdNDEUgjsiYuhIrbSTaOMGScSFi&X-Amz-Signature=783059c4a314dfd98b843c8ed91495d7f1a1fa58de0b1bc9589a53375b8ee89b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZMJFRUN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDLKAtk4r3sFsJFfYz74ai5OuDR6VILbgKadY4%2FRQvmvgIgcMa6%2F%2BP7fbzUU1daNI6VB7YYKzE%2B8kUwohw4HUjbmfIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdUrpRhWrE2d9GM4yrcA0rfM35lNYxgZ1SwwLz%2Bh%2BlP35gSUM4zO1Sf%2F5AaTIEDJIJXUBiwecl1fr1NCtaW2vLfRvnzVwHmKm%2B8uk3OU%2F0F7nLnSA1H%2F5A5YGJQZ0%2BBIn5Eok5KQ9dulfiSBGobBe%2BZ8EQW%2FvSKCUmE0XKEN8rDKBmUEjzL0kE0UZT2sFGhrXdHcjWFMH4DvLczXg3R0egO0rPja91SlHqNRARZ8ktzP0OZ6OnwOJglvc9QdqhXFnEH9Hx5tuLX9urWefSKk9hs5cG69fnsPbZ4VWxyseUnvWrEPohJBrt%2F33nY0gU0dOKXyxpwR4soaDBdbmLrvaIvJhgTem0qAsYMqkrZFetPyQWxGwgzLKxfXEOHqUGQCExAhwMbrBWVNyeMfxcXwYtnYcUsIYWaysKLWD2hfPyc8TQGrZv7lbXAtCJO%2BCVYif4PtdRNnX5d5YXCYZuPkkFUOT4bgLpOb6bfa%2BY198xdY8d6X19741YV39TvC7qpkDoEdHnopJs6hr%2F%2BEkQRBeT7U5%2B79kuxZ5kgrs4IdhEBYkOyFON5xGxr6ON6pyiVW5zJlKvNaeTk%2BgNz%2FzF1%2B%2Fwj89ta2Hg0qVAvb%2BeQoUfoi77ktq6t1AXuJe1PiMEAePD0e%2FuaJxEEXEHBMIrt0MQGOqUBBrYlcRKzxuNeO%2BV%2BBY%2BFw8pL2KDHYTiHrW59BfaRAFXdFF5tbxLTzuE6AlkMIQoED6EVvWcF9RaI8EKjQYCKgJg5oWup%2Bxp82EUvIMveR4ZJ6WmacKWia6s8DUbJQoY4LDMo9pYHGYSa07%2BodLWnq9nElwBZN0WjOoFm1WU8sVY69%2FJK0zE6DUCC8lFN51LUrYAd7wb4FfyE1WWUEkrdY85Faj20&X-Amz-Signature=b854bfa4777e0e4cf73bfa36ee833e6ae18c1cfd14d2ac3a2a339f3796fd2a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRIEEZJT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFgh7KNN3VQ%2FZXnVLMnPcGNRGIZbDhoFt08W9AeJ1145AiBqwSy2rT%2BQMeX0iK05ecxgBcfSPS6G2La7epsibUs%2FyiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDviPgJq6zVWs6IrVKtwDiyt8gt2EJGSsAdXfvOalpABaJbRhZNqG4t5GsXuBps1XxrBQZIlCE6u6KNb57Gd32%2BQqlG1%2BHFPl205OiMSq1ksc%2Bvcvmr%2BQkieVJJ6Qde2NPznsO5mExsHXcoWWP5Cp%2BAjtP04hpRw8uktgS3PbKYyVzsgEnzEo4LKq%2FHJO7qYZ0JF5jdn7KQNzjlr8OZj4KtslC8RlWyde6oVtSkMJKMS6EV0ojzLtI7UB50yXvQ2iwIRQfUYJcrUcAKKHrWzOjt%2FWaIaJSHK%2BM7dDqsbfC5wKcLxcIrGDAiJqmGUjI7QlMkhc1CwT5KZOtL60nM%2Fxaxwq%2Bmz7cDDJtL7oLYUnuJIiYQDogzMJlkQYRiIqYEdW2lNnK1wqHYJGbKLrrzqb%2FMTjyzplGGgMz3Hrq37Cd0ler7i2GL16MNTLUAmp9FWAX1Jqu57PR6PO5I2Ih669OIS3PXtlJJt3jpy2oNj7FNnm2Z0Xnepm5%2FD3vXuRhNPJzLqci4v3UzAUAGQdaB7HzxGVXM%2FKVBRmoAMfx3BHgkZbPTDHoDQ9AMwgLpKC3LjMrne%2Fjf4CAASuBi8wWZFhHaRWDC5EwizhbFFMZ1n%2BSnyttBT1lQIWsRdzlBcImftdMv%2F1WDntP%2BKWUBUwiu3QxAY6pgGLt%2F8%2BRGzOyrXz6sVXa%2FMTSV11tCk%2BURi%2FL3IDVEDMHgMi725%2BTYaO7Fq1pYr3Mb8JWKZReNXF7C1EDE65hmhCMFA90NNZJcUXG3x8l0lPsZqZ3yAUaJWDRGp71mxKUo7EpxoS%2FDD5ZhJ1dsgz2gftDbVsCUDVUr6bGh6wud9F6A9mT1iTgJEIOyD84MVZWcxNjUdNDEUgjsiYuhIrbSTaOMGScSFi&X-Amz-Signature=5d8e29d6c40221346e2dc00138398e6b947eb08e3a43a7abb29e269b4e5e7a3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFPO7Z56%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCaDvcQl%2Bw%2FYpLpmhb62eY%2B5OjRT1rb%2FZY6uNCQ3OyXKQIgZU3g4xZbMOWokmIZnVXjyU7WGWbd6e5i0Gxqz5MWiOsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbYGKZh9ELj7GAXQCrcA7BM16ikoV2lhJ9YSzJ%2BCd%2Bm1%2F%2B%2B4CiKDTmw3moZtkeIlRdRR%2FtYqWXcmL4iAIcRovoTi6uNErLdbB6EdinKLsKa%2Fi8gHT8yrDJFAEhPj3HYnNXZtYLQyNQ8S20lqfrAQauIpgptV8BC%2FGiVJ886J3qx51ceWPNtCDYwu6ud3WjYc8H%2B2ptklcxC0cnhyQ%2BwJ%2Fv1QwQw0ksKqrEQhSXCm09iXBfUTvKNt3YdkaBDkvJ8sa8qvmBbQlKgyPNs%2BQqhwhmflfj263R9rXvWW%2BSFPHs3JCO2zaLNswMVpnQYLFnDBAK1ydIIK99wAlS1QldhQgVYr1dVFh1VGBAX3OBMdnrkfEx2hHbkNxtuDAVTCtfTZyDi4ZzqzqnlyJag5NpBFSzK1GBoD%2Bu8YnSAmMWhf7Hqx2hIScaR6tefVelE5Ydiokse3xexk9aYlj5s9l98zL5lYIpeQ%2FJu630cVgjN8SQLWJFFiQAHWnnnt3i1%2BKedC5ukpHuylqS1CluN2VbZ0xHI9da4LxgcgTVeOlnErXxwIPXMahqOXAcSZCC1Ba0iPDcS9A9siFP2aUHicw6x7mYNWDsVK9YKVgtK54%2FHnp%2BbtkJLBOWQZla%2FezxPPGEeLTfLvTc3ypOPjD%2BgMKPt0MQGOqUBANS7%2FAAeQUJ9uW%2Bcrk8JE82llFa71uUE4u8aNGVQJzVcIWZGLqmwQxAzP9I2w9O4LHDYsgmDkHTL674uKjUClGdKePtN9yBj2CgsYD7aMraZo7pyzhfM%2BXKvjIMmk%2Bd%2BKRbKW4S3%2BfDdk9xzzsrIzNK5NUvbQLcw6Tm2YB3wwac0ziF%2Fcf6eIuPxwKMLED38rBjF64AS1T2Q32AP24PLWS%2BocWcI&X-Amz-Signature=3c83c25c4b064d412522c7a0c026b26bc3ffe5564e297d6d858886a49e10bb74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRIEEZJT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFgh7KNN3VQ%2FZXnVLMnPcGNRGIZbDhoFt08W9AeJ1145AiBqwSy2rT%2BQMeX0iK05ecxgBcfSPS6G2La7epsibUs%2FyiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDviPgJq6zVWs6IrVKtwDiyt8gt2EJGSsAdXfvOalpABaJbRhZNqG4t5GsXuBps1XxrBQZIlCE6u6KNb57Gd32%2BQqlG1%2BHFPl205OiMSq1ksc%2Bvcvmr%2BQkieVJJ6Qde2NPznsO5mExsHXcoWWP5Cp%2BAjtP04hpRw8uktgS3PbKYyVzsgEnzEo4LKq%2FHJO7qYZ0JF5jdn7KQNzjlr8OZj4KtslC8RlWyde6oVtSkMJKMS6EV0ojzLtI7UB50yXvQ2iwIRQfUYJcrUcAKKHrWzOjt%2FWaIaJSHK%2BM7dDqsbfC5wKcLxcIrGDAiJqmGUjI7QlMkhc1CwT5KZOtL60nM%2Fxaxwq%2Bmz7cDDJtL7oLYUnuJIiYQDogzMJlkQYRiIqYEdW2lNnK1wqHYJGbKLrrzqb%2FMTjyzplGGgMz3Hrq37Cd0ler7i2GL16MNTLUAmp9FWAX1Jqu57PR6PO5I2Ih669OIS3PXtlJJt3jpy2oNj7FNnm2Z0Xnepm5%2FD3vXuRhNPJzLqci4v3UzAUAGQdaB7HzxGVXM%2FKVBRmoAMfx3BHgkZbPTDHoDQ9AMwgLpKC3LjMrne%2Fjf4CAASuBi8wWZFhHaRWDC5EwizhbFFMZ1n%2BSnyttBT1lQIWsRdzlBcImftdMv%2F1WDntP%2BKWUBUwiu3QxAY6pgGLt%2F8%2BRGzOyrXz6sVXa%2FMTSV11tCk%2BURi%2FL3IDVEDMHgMi725%2BTYaO7Fq1pYr3Mb8JWKZReNXF7C1EDE65hmhCMFA90NNZJcUXG3x8l0lPsZqZ3yAUaJWDRGp71mxKUo7EpxoS%2FDD5ZhJ1dsgz2gftDbVsCUDVUr6bGh6wud9F6A9mT1iTgJEIOyD84MVZWcxNjUdNDEUgjsiYuhIrbSTaOMGScSFi&X-Amz-Signature=9a6d0e5b57e6cb5397d4b38dd35aedd44f8ed3f212d41a05ab487e17ce82d751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNIQXBYZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIClUx0TzgBZtvxBYqmx5m%2FT1kJMbsSFK4VXUojvbMMTCAiAOcmMHcbrwGtJsm4%2FAz7GdzaG7H%2FNnMWjGZl8ZlqClsSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMne9kfJ2oJzUi3%2FBOKtwDKxL4AahzJwPaJI7thpYgZnZw0SA96zxYJHa6REGmte00hxsE%2FhuHDZUC%2FTu3I8Uw5q68Ty88sYoX0J2TQj2O9Rtn%2FNhR%2FF4H13EkBp6i2vbc3LyXR5IfNuLIRkUltL17LRuq0MLFOWzGcg0UJtAk7uluxIFvdgO%2FbXsDqmMGS6EQjyGJ6MdtWKPl20IsL78uvwOzyFqRQCyOjezpOmayIACYP9TkZm411xKX19Plu2Y6yyIKxFQzLsqZWxL0On4Tvr9Mk7evUn2y3hHezRlLVc37zVjjGPgBK9ltsqd6H42fQWk6Jo3J5DEi%2BytNeVLIGGCYBJeNa6f7N40eyMDtCYkJui5ZRZVQIeRIa0kEyYijH1WiHlApxV6EVkB3GkLWArmvOUrZbI5lB4N2QjIifgvf76%2B%2B8RNK%2F8h8tYzBXZKBsSg8uz7Q6YwQKqJjQujouZWTfMwLcIW9iBdo5Zuce1tHd5LAwaojxDdlKjvi3Jkl4hwq20yIIFiw%2F1oc1BkuhapnUM0NpFKljhR3YzSqQPKgIG5TM37uTv%2FUgUQtjKAslBFAcY7R31WFcA9DcYG01IofMjeoAAk42kwDRoQjXsv3AWdH3wR277zCh%2BhFDiNHM5T337odDgOlFN4wx%2BzQxAY6pgHu47%2F98bR1%2FGESBLWLANe4OTtC%2BrP3SDjV4S0dqDL%2BRRON%2Bp%2BWneiqzqPwy4C%2FaI3Agc4K%2BzfyKKEJ%2BW4n6xIKNL3F1fE4U2QGjcQxOLfvIoogTwBdQCZvG%2Fasq1vu0CJHBS7nqU4xH%2B4LfZHtNHe7ytk%2FaplXiiXYj8ktSDP2NXp0%2BnSJUGoUpECP5XSEW7cmRieza7xRMkJoaJNVyXwL9%2B%2FC3MAO&X-Amz-Signature=02e57decf05988d4e0c265547b8f8a9bf368419e8d15c0dedde4e3ffaaa7ba5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRIEEZJT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFgh7KNN3VQ%2FZXnVLMnPcGNRGIZbDhoFt08W9AeJ1145AiBqwSy2rT%2BQMeX0iK05ecxgBcfSPS6G2La7epsibUs%2FyiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDviPgJq6zVWs6IrVKtwDiyt8gt2EJGSsAdXfvOalpABaJbRhZNqG4t5GsXuBps1XxrBQZIlCE6u6KNb57Gd32%2BQqlG1%2BHFPl205OiMSq1ksc%2Bvcvmr%2BQkieVJJ6Qde2NPznsO5mExsHXcoWWP5Cp%2BAjtP04hpRw8uktgS3PbKYyVzsgEnzEo4LKq%2FHJO7qYZ0JF5jdn7KQNzjlr8OZj4KtslC8RlWyde6oVtSkMJKMS6EV0ojzLtI7UB50yXvQ2iwIRQfUYJcrUcAKKHrWzOjt%2FWaIaJSHK%2BM7dDqsbfC5wKcLxcIrGDAiJqmGUjI7QlMkhc1CwT5KZOtL60nM%2Fxaxwq%2Bmz7cDDJtL7oLYUnuJIiYQDogzMJlkQYRiIqYEdW2lNnK1wqHYJGbKLrrzqb%2FMTjyzplGGgMz3Hrq37Cd0ler7i2GL16MNTLUAmp9FWAX1Jqu57PR6PO5I2Ih669OIS3PXtlJJt3jpy2oNj7FNnm2Z0Xnepm5%2FD3vXuRhNPJzLqci4v3UzAUAGQdaB7HzxGVXM%2FKVBRmoAMfx3BHgkZbPTDHoDQ9AMwgLpKC3LjMrne%2Fjf4CAASuBi8wWZFhHaRWDC5EwizhbFFMZ1n%2BSnyttBT1lQIWsRdzlBcImftdMv%2F1WDntP%2BKWUBUwiu3QxAY6pgGLt%2F8%2BRGzOyrXz6sVXa%2FMTSV11tCk%2BURi%2FL3IDVEDMHgMi725%2BTYaO7Fq1pYr3Mb8JWKZReNXF7C1EDE65hmhCMFA90NNZJcUXG3x8l0lPsZqZ3yAUaJWDRGp71mxKUo7EpxoS%2FDD5ZhJ1dsgz2gftDbVsCUDVUr6bGh6wud9F6A9mT1iTgJEIOyD84MVZWcxNjUdNDEUgjsiYuhIrbSTaOMGScSFi&X-Amz-Signature=8f461965f01b9d0c2dc79b1bb505a2d6d19b1b2ad2ea3e177023b46a74875f83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJH6RDD5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIDwSz00fOg5UsBzHJYmf30Yl3ngE5deZmgSNEPNtC5AZAiBGKX9l1y%2F8s5wtQxQuo%2B91fKlje6E4y4yclR85tEAE4SqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAzflDvP7sMVwnE1sKtwDpX3u7nWHoBYQUUS24ckxZwltRNupagG%2Fvb15WGcBHGdZWAPynwVy6CvMqZkwlS%2FF25JlUUjFUdPYxpqseh9Vy%2FOnAlR3Cw7Rmd45IOX5tSXs9RAZAiDJN6RwLo%2BqxhQq%2FRaLP9ydlTmSmA1amMKBCYLFK1g0vTb2fi%2BGoBW7QJjU8sY9rJSL9jW4gYDlM46hs1GO%2FsfHUCCg4hUrbPlaAU67coekEt8b%2BhCLK46zBSM71fcu%2BOJXNJjPfEXGdax%2BUANJbvLAoBTlMQFIz0oJUHROSrmwFkqzRN7wEqd01ccuEIcE2Imz%2Fvfy0hLUK2hCY9FfLUk9waU8eYjkqgrH5cLzRJ%2BJwm4aYPQBz8YbTyu%2FcgDs0gHgBJkIEEuTPVuG%2FWiX30dzYSN3Zi3v6ssVm65AKOiYD6r3wmaBdkdeeXVBx8450O4RpmgJHxa%2B3%2FunvmTPWZ8awFcH3ynz62BV1CR2cRZe2u1sBhMZr%2BaC0nTgZiA3in%2F9y%2BUMv7Pe9Gow3pHQYmiAxQ8xsVpBM35aRWpVLVtdkZgDrNA%2BtXQhIo%2FytFAoA8ifEP5Bpz5x1S%2FSTmQTK%2BgnlivuzyDUjKOgdj71Rx7NvyuvP8fk9SMtq%2BUFvcWUKLj8Pk6K664wpe3QxAY6pgGmk%2FnB0zTL77DGUw5asK9FJuy9m2eW6dXRsk0JcdBFIfcD6Wwy1uidyisCnX%2BvxdrodDTU2OK22uwezkoxd%2FK%2BK7oHgUpv6BLcEq8%2ByLHLci%2FPAObk4qJQi1x86EisK%2FxEWmbiFDJLGHZRIGOAMd%2F8YnKlYry%2BphZO%2FnajTf81rynRlSXwhdDw6H76JLULkFtNBGnHaW8JzBffZnteLvDdF%2BepyY5V&X-Amz-Signature=429199269ba1899ed06fba6e835e4bc0195d4643f42d64198117caf57720792b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G2UDCYT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIGndEd4hR8xVj1O6DVKG8wQtMb4rYBTTLDcDt%2BUDcmE9AiEAkPZMMZeNKJqKNJ%2FgdydKtdJmJisEHMMeiiHB%2BoAwviMqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpaXC6b3SufCHpM5yrcA5I1heQa5zTL2AbmHHp4GMe4HPsfXtc57gHeNqgYpzUZqgaSldmDAyxVG4spwmgUsCny0C%2Fe6ISNH47HAc7TIYqpB3XRav%2BBReFfIXhOkMB9iR7vWURM%2F%2BbF6mPnk07n3tUWJvroxC6U9SWC2g2jW%2B7E9BUDzqjUb%2Fpl%2B2tF1cbT88PwAr9YEzwjFWZLn5GmfY3%2BPOAdTKf4ShCtLxx%2FLs5HVh8LkCEXumo10O%2BNgCG%2BpPHnDG2SCDPrLR1RFfQDj51FNYL1X3sdhAkwt%2Bei8pHFfapikNxrhxXRbnlJGaHTnZWFGjTyzU371ZSysIQ2O0bFVHPaFfGmzq0OJJtLMIaSISkm9xE3CtwFhB194sg9GPyT3GCNHbGVEjyyp1DPuEqRsbykcPq6GY96xGVzNdoQ14yWfAchUWuU8%2BXcsbaiGl1MzgDKF6ctoHUOF2ZrJ7x6GZA3MbYJ%2BZP2B%2BrXhMbLhNx4ysKeMIe3yj1oTqSuJKwe01J8rPw5Ai4Ydo0FdjUsMDhShdPLyPBJhK7R1gVj6Z8SdVD%2F%2BvxZE77n7Lq5chR%2B9ef9%2Fye3LRYmJ%2B%2F0IEfDyMG5qlvm760WsWW0v6Sbq%2BK3PKVv8o9PRVie2k5JDVsx9zDQ4SLJ%2F7KpMJbt0MQGOqUBF4YynSy5CcmUzWJ6Yc9vXVZTmAC%2BXV3Nb8SMLFard9%2BdrulnWzEtjLmt5Mujf4pY2obOffSTYz5VC7wFB7N4FOTHBR1BlFYKaEuzFYV2IogC36ei4O3cIKAU0CyJq78gNOUXm7G0BpZ%2BuV%2Bzl%2BXuIRrdJPFQ0G6DYifm4P5n2y2fsgRI5h60pmFXO5%2Br%2BX9VleAIncbESYuWxDOs2EIUrf5DejcD&X-Amz-Signature=3748fa6abce12615bd9ed57540e0366fb4ff01cf7617da36d61a90c3547d4606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLCYEPN5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFGfsk%2Fgke%2B3wE3Fbd4eUXZRyBNyruiTZH3tgylQkLPjAiB%2Bn%2BEYQ5veo0Wv8NQJKdHMHs8nNoSisn8lxz6xzxO7eiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrEoH%2BoNdaDQQjjUqKtwDwlnpIsWzYTE%2FXAG6LDmCHLyLW9FsY11%2FStuF0189s%2BdMv9A%2BEe%2FS%2B9ah8FRZ4kJlM%2FNbBCYjZIOQo1ZP8Bp8YIIl8pMkvPl9IxOOGL0K%2F45QMOqO2%2FgmnvrZOj0rRZeqRXsP4r2%2FY4tZuskUcbmXmSBAamf19%2F3VKWguiTFdT61y4mWO38fNl0XcdYX1jjrLf72GpGOtcvwzQ6I0aOxujnLq77iSljH6lpTVX4Z3qadYHltMsvlzmu0%2BbZyHjP%2FqRunWh4sAuAksPXAOlwjlm%2BF5tZ74pKkFGXvbhbza0LI91yiysRUw1bXleXtRosvHuwoT5%2BVij22q0ij1kv9cYh7upgKisT953YhAV5Ngz6D4yYw8yrZhypODr7FMPjGktWlP3m921w0ODq3D0kmeONyFyszTTvWY9HlqfxQcIhnll%2BvLF22dNZCw2t04%2B9ech9vQdStoKTLFONZWpSFQoSQPn8TbqMh1buY7UW18oQZOAldtbc3LK5rme7VQ9TZEQ%2BOYwhydjakoKnGeFlle6Vf43R1dQN6wd8zf6MpMXUhJzt3FtuOf1LATibb2D1iDxA2T4l9ReesLA6RYNchmDGTjWrLka71Obwq%2F9%2BhuF%2BBdYXEFHBut4jQW8IgwmO3QxAY6pgE9PaCf6dB0rbfDmqH%2BiE32z3D56iLQkMMXsim7Wu9G5c8L4pBWGSpZhHWNExAI5KFmr7cp7%2Frvg7iddvtn7%2BVLZzVmEHH7reRcAMiL8ooMRlvnyJnnW77Mmv8ptIz3iTkj50BXaGqEOHKuAVIBsvrAAZfvvR10%2FqZDhFGXH5uReZMIwqezyV1RNtd3WjbWv3nVbB4p0cBut9myof70FB1Zj4hZdViV&X-Amz-Signature=d74aea93f75fc64e446f4a10e80b28867741b1c5b3ca7464e05c50e7944bb252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXYIBBLR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAEjOxV5jcPOR23zTPsZu%2FI7g7G41JsF1ww83dxAkDdKAiEA4YehRUtkrDmQX75LfLMV3C5Shddvr5F0loXaXWMLEcsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfx28KwmeJqMsTExCrcA9MZY%2FKWRChvXrTeN%2FR8aTuI2rwjQ0Qx%2F1yAmSq3DEP7VF8y%2BuDEH4RnwNDPfoWRdI9KAlkB7mHRo%2FFjBX9NHjQrFYacW99XF2xdtkHUwq%2FWgtWkUHVt8h2CuZg696GtIPHPf03amuQPlmpusKvQooGx5rYgrCww3Hhd2rFOYnKYocFLX%2B6nBvRJAofYt1ubD%2FTVioW2obbsDtqyQwmhxyUpJDx9EdJnGuBmDJuiae%2FPD4VeCGLLxvSzX0zVQqpUirwiyiE7oblvgNax6NhOrhwdcolNAgrYdBQkvEvg2s1C8%2BfkwNzF3ngC12W3ltsTIdqI0AHOKj5HQol69zbRGsGqx3zFPFM0G6Wsq6s0fJudUgTvxifC2v4DDCyQy0GEi%2BSpXsr%2F11ICGiIzrI5DpNuiJwrI1ZKo4YkEJMgSokex9nW1dLzrfk0Voq80SmIfFsmr%2FEjLrrI6rXTXbIOZvyTUzUfgbc8%2FlR0tU3m%2F9iDjYwykA4p0UX%2F1Ny7PNvWJUMECa7s89ghtIrCnKTyPRWipNYF9ANCA8VZ8fWMBukNtjn06WSuWoFSbJZmCExP8%2BbPd8yfnccac4V6iKzaBzsX9axlWHnNlFVNIQRS1RtbDXB6ZWPwfpYx16hLrMMfs0MQGOqUBSvGAfUtEvo6SWcXbrTQec2NDn6iiR5xtQTevFenrPRvlEc7rHL8mtWOYaBhWZ47OZ04uezrm7kIslRyX4eKSRB7Wak6wvMXr0e9We25bkdeiCpPTXKtnD1NZC%2BcXbo%2FuYkkK5M8Vxt3dg7mPQiaLwXvECfSEHe7OIYlL90qcMWkliS88NN9I7rLcERl6a6aKFQ4sDAH%2BG6240yQIu6aoWL22cid2&X-Amz-Signature=ae629f15b838788488183bea520255552d83e520a331640ab23e884f2a88fd8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEPUPGC4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIAofSr4ItsPMxMYxn1tbQhrAjeiYFhzdR%2BpQP2aLe7XLAiEAleKEWcHmfiJpFEkoknC3DxF2TwkScJTUD%2BDEFXJ4csQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsi%2FLJn5FijLOyCmircAzj1BW7awe4PrhpGBRjcyVD5g9Ay11sHBrvX5YR9JQlrug9CSHpPZACahZLMbvPo9w4pxQVgkJb1GAOiQMMoq%2FAPuodL7bFbe3U8UZ%2FufTjpqX7FIv1PcZ4BXXZajNDYuBUd3JGUXNMXlL151E4mRtFptCNpMFTP2j7Nxf0iE6eT5CtNP%2FKn8emF%2Bq%2FVyTXAPlJAlOgMgteQf4mCa5B3FB89M2D72qsHBDpyCPZNdGArRYkc1H4cxxvvxC%2BNl%2BXTkE3eVhmh8X7FuKALHJ%2BFQf5n0sDbSYdgCdOKXlP26vsEIdyNU%2F0BFxr2fRl9pz69BgQ4MGQm4V%2BpcwC5GQ7tnCtf4WbVllmKfexu1eKAdcnMKdwGNy04JPQcStf%2FvfrxLnrndhiUusL%2F75s9gmjrh6NmgCFJaObihwmrZaZYcqYW12kS4evSIYDFJP1qfgbP34cNoqDsbQ7eUaD1CrDhYwJd288j%2F9ghMZTVWzq%2FTYWVh9CEteoD5DnlOVryz81EnOSusHt2hy3u6LgOAW7oXZ%2BeSD2S1kwQPAUo1l1kQhCvowOVZLS4OIzCGOo3eWwMtRSXe3MjtC%2FGjhhtnrXC6t7k0NcTqyqgOLjcoi41EKmAuAKI8UnEU%2FiaHJS5MNHs0MQGOqUBIrXPndsDHMHwmDHwoD6f5ePC7t2pFhfiLiFoljYOKy6RykZf5R8NF30Yly1KUESpEw81uaDKBMQdjjc569kKNVHsUJunVueUHB65cGy5Yhjqnq%2F0cQ2WURhtziOwJA4%2BhtqgEk8F3lWAFtfwGSU13yJAQGJND4SxkNWpZV9Cez0jMT6mvpZrrQ1GxHOg5WZcIGC5uu6hRbQCoUdmFPGbbvoSj6bi&X-Amz-Signature=77e96fb1142c5027a57305c4fb58aa9ee2d4e27b515eeccb113112c902e7c59c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRIEEZJT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFgh7KNN3VQ%2FZXnVLMnPcGNRGIZbDhoFt08W9AeJ1145AiBqwSy2rT%2BQMeX0iK05ecxgBcfSPS6G2La7epsibUs%2FyiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDviPgJq6zVWs6IrVKtwDiyt8gt2EJGSsAdXfvOalpABaJbRhZNqG4t5GsXuBps1XxrBQZIlCE6u6KNb57Gd32%2BQqlG1%2BHFPl205OiMSq1ksc%2Bvcvmr%2BQkieVJJ6Qde2NPznsO5mExsHXcoWWP5Cp%2BAjtP04hpRw8uktgS3PbKYyVzsgEnzEo4LKq%2FHJO7qYZ0JF5jdn7KQNzjlr8OZj4KtslC8RlWyde6oVtSkMJKMS6EV0ojzLtI7UB50yXvQ2iwIRQfUYJcrUcAKKHrWzOjt%2FWaIaJSHK%2BM7dDqsbfC5wKcLxcIrGDAiJqmGUjI7QlMkhc1CwT5KZOtL60nM%2Fxaxwq%2Bmz7cDDJtL7oLYUnuJIiYQDogzMJlkQYRiIqYEdW2lNnK1wqHYJGbKLrrzqb%2FMTjyzplGGgMz3Hrq37Cd0ler7i2GL16MNTLUAmp9FWAX1Jqu57PR6PO5I2Ih669OIS3PXtlJJt3jpy2oNj7FNnm2Z0Xnepm5%2FD3vXuRhNPJzLqci4v3UzAUAGQdaB7HzxGVXM%2FKVBRmoAMfx3BHgkZbPTDHoDQ9AMwgLpKC3LjMrne%2Fjf4CAASuBi8wWZFhHaRWDC5EwizhbFFMZ1n%2BSnyttBT1lQIWsRdzlBcImftdMv%2F1WDntP%2BKWUBUwiu3QxAY6pgGLt%2F8%2BRGzOyrXz6sVXa%2FMTSV11tCk%2BURi%2FL3IDVEDMHgMi725%2BTYaO7Fq1pYr3Mb8JWKZReNXF7C1EDE65hmhCMFA90NNZJcUXG3x8l0lPsZqZ3yAUaJWDRGp71mxKUo7EpxoS%2FDD5ZhJ1dsgz2gftDbVsCUDVUr6bGh6wud9F6A9mT1iTgJEIOyD84MVZWcxNjUdNDEUgjsiYuhIrbSTaOMGScSFi&X-Amz-Signature=3d03d33d264fef6c7d8a015ea6b5f7deeb30f942bba040aaa31d261609693c90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRIEEZJT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFgh7KNN3VQ%2FZXnVLMnPcGNRGIZbDhoFt08W9AeJ1145AiBqwSy2rT%2BQMeX0iK05ecxgBcfSPS6G2La7epsibUs%2FyiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDviPgJq6zVWs6IrVKtwDiyt8gt2EJGSsAdXfvOalpABaJbRhZNqG4t5GsXuBps1XxrBQZIlCE6u6KNb57Gd32%2BQqlG1%2BHFPl205OiMSq1ksc%2Bvcvmr%2BQkieVJJ6Qde2NPznsO5mExsHXcoWWP5Cp%2BAjtP04hpRw8uktgS3PbKYyVzsgEnzEo4LKq%2FHJO7qYZ0JF5jdn7KQNzjlr8OZj4KtslC8RlWyde6oVtSkMJKMS6EV0ojzLtI7UB50yXvQ2iwIRQfUYJcrUcAKKHrWzOjt%2FWaIaJSHK%2BM7dDqsbfC5wKcLxcIrGDAiJqmGUjI7QlMkhc1CwT5KZOtL60nM%2Fxaxwq%2Bmz7cDDJtL7oLYUnuJIiYQDogzMJlkQYRiIqYEdW2lNnK1wqHYJGbKLrrzqb%2FMTjyzplGGgMz3Hrq37Cd0ler7i2GL16MNTLUAmp9FWAX1Jqu57PR6PO5I2Ih669OIS3PXtlJJt3jpy2oNj7FNnm2Z0Xnepm5%2FD3vXuRhNPJzLqci4v3UzAUAGQdaB7HzxGVXM%2FKVBRmoAMfx3BHgkZbPTDHoDQ9AMwgLpKC3LjMrne%2Fjf4CAASuBi8wWZFhHaRWDC5EwizhbFFMZ1n%2BSnyttBT1lQIWsRdzlBcImftdMv%2F1WDntP%2BKWUBUwiu3QxAY6pgGLt%2F8%2BRGzOyrXz6sVXa%2FMTSV11tCk%2BURi%2FL3IDVEDMHgMi725%2BTYaO7Fq1pYr3Mb8JWKZReNXF7C1EDE65hmhCMFA90NNZJcUXG3x8l0lPsZqZ3yAUaJWDRGp71mxKUo7EpxoS%2FDD5ZhJ1dsgz2gftDbVsCUDVUr6bGh6wud9F6A9mT1iTgJEIOyD84MVZWcxNjUdNDEUgjsiYuhIrbSTaOMGScSFi&X-Amz-Signature=f42584f8aa8da30cbe5c4c0afa2566b43b73b073d0a065d873d436d9a4565685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WEG6KNP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIE78gMgfx0XBczq4JS48d0UpRAF5nnS8%2BuaP6TRoQ75rAiASm7O5g%2B%2FbbqEKPBOJuTelwktZCkMZT%2Br6umf5Ruy2NiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyjo%2BR9%2BB4oivlPKsKtwDm78WnzdOEpzNrV1UznWM%2FAuDdrdoY%2F8aUsd88GNESrwTUDKL0cI91N80CHQUzrw6JV8z9qym2YvTmKBqellzw1wAoUAnxEzJ942zX%2BqRaJF9WlF9jOrbay3DjC043UARg1%2F1oGnmTIv7q0V9Iz4aOaI8kHCFZ5LH39xPCTOYuBWXZhAnJl0Nfw6unJeQceZ%2FEzfjz7YQdYrd%2BbYKl5TMHhHeMw2rxcnUsI7OqAe9%2Ftnt0eKEZPlpGFiaNJn2lxpn2yvDdAbGbnatlk%2BwbnKqo%2B%2BDloldoZoysZk%2FEL3NH2cFihRmPzLsq92msWZeM0mD0zbt82f1kX9X0mhRd%2BEUgkX1%2BS9K6RACNYHDNWBvNBAZmponVRCyFEg6ooHPDIo5%2F8o4nUlnMNcO%2B2J7z%2FKNq98X3p05w8WNLnsYx3vRhKjGRkz4hPp%2F14OsnFvEs44J6H37XGb88JOVGcLOntDUtxsBK%2BvK3j6I3HvbMsGezWdalZVKlBVNPspbIV2N8XEuIyX2A25DOQeliUufpOfEUXsKAyvInoDnLWX07stGqYlTvPXG7edrr4ErKk8G4IxeACPu%2ByjD%2FctQEXtm3qBpcB23%2BAAYfKO0TVIgig8WOFEEj39OiFSwPMZsOyMwg%2B3QxAY6pgF8nlmYNgfZ7r5fKZX%2FHpy6GUe6Jy7yY45k%2FdStDhHjSFKAOxHB4uP1xoRWC3ZKDPt50PaDkp%2FI%2FqFK8PY4Su7%2FGTqrwENPl3pCn7j%2BVdOmIYopi80il9Z7dIoCeTqj7KAoey1otZkpTm2wGZEKbeMVTlXb45%2BBDq60uxp%2FZHGEl6i%2BZDOwcfMBdDnUkt7qmIHAR4rpKSFsn3XxNlToQ6JZazDRv4WN&X-Amz-Signature=fec61836f0b3b2a4e0557765df7187741df3d084fa22cf60252b84a8afc8d5fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WEG6KNP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIE78gMgfx0XBczq4JS48d0UpRAF5nnS8%2BuaP6TRoQ75rAiASm7O5g%2B%2FbbqEKPBOJuTelwktZCkMZT%2Br6umf5Ruy2NiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyjo%2BR9%2BB4oivlPKsKtwDm78WnzdOEpzNrV1UznWM%2FAuDdrdoY%2F8aUsd88GNESrwTUDKL0cI91N80CHQUzrw6JV8z9qym2YvTmKBqellzw1wAoUAnxEzJ942zX%2BqRaJF9WlF9jOrbay3DjC043UARg1%2F1oGnmTIv7q0V9Iz4aOaI8kHCFZ5LH39xPCTOYuBWXZhAnJl0Nfw6unJeQceZ%2FEzfjz7YQdYrd%2BbYKl5TMHhHeMw2rxcnUsI7OqAe9%2Ftnt0eKEZPlpGFiaNJn2lxpn2yvDdAbGbnatlk%2BwbnKqo%2B%2BDloldoZoysZk%2FEL3NH2cFihRmPzLsq92msWZeM0mD0zbt82f1kX9X0mhRd%2BEUgkX1%2BS9K6RACNYHDNWBvNBAZmponVRCyFEg6ooHPDIo5%2F8o4nUlnMNcO%2B2J7z%2FKNq98X3p05w8WNLnsYx3vRhKjGRkz4hPp%2F14OsnFvEs44J6H37XGb88JOVGcLOntDUtxsBK%2BvK3j6I3HvbMsGezWdalZVKlBVNPspbIV2N8XEuIyX2A25DOQeliUufpOfEUXsKAyvInoDnLWX07stGqYlTvPXG7edrr4ErKk8G4IxeACPu%2ByjD%2FctQEXtm3qBpcB23%2BAAYfKO0TVIgig8WOFEEj39OiFSwPMZsOyMwg%2B3QxAY6pgF8nlmYNgfZ7r5fKZX%2FHpy6GUe6Jy7yY45k%2FdStDhHjSFKAOxHB4uP1xoRWC3ZKDPt50PaDkp%2FI%2FqFK8PY4Su7%2FGTqrwENPl3pCn7j%2BVdOmIYopi80il9Z7dIoCeTqj7KAoey1otZkpTm2wGZEKbeMVTlXb45%2BBDq60uxp%2FZHGEl6i%2BZDOwcfMBdDnUkt7qmIHAR4rpKSFsn3XxNlToQ6JZazDRv4WN&X-Amz-Signature=799cd4ad85895f5d82fb5b54e7e90e063cc7f59d8bc7d3b5bc6038605ec36644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WEG6KNP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIE78gMgfx0XBczq4JS48d0UpRAF5nnS8%2BuaP6TRoQ75rAiASm7O5g%2B%2FbbqEKPBOJuTelwktZCkMZT%2Br6umf5Ruy2NiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyjo%2BR9%2BB4oivlPKsKtwDm78WnzdOEpzNrV1UznWM%2FAuDdrdoY%2F8aUsd88GNESrwTUDKL0cI91N80CHQUzrw6JV8z9qym2YvTmKBqellzw1wAoUAnxEzJ942zX%2BqRaJF9WlF9jOrbay3DjC043UARg1%2F1oGnmTIv7q0V9Iz4aOaI8kHCFZ5LH39xPCTOYuBWXZhAnJl0Nfw6unJeQceZ%2FEzfjz7YQdYrd%2BbYKl5TMHhHeMw2rxcnUsI7OqAe9%2Ftnt0eKEZPlpGFiaNJn2lxpn2yvDdAbGbnatlk%2BwbnKqo%2B%2BDloldoZoysZk%2FEL3NH2cFihRmPzLsq92msWZeM0mD0zbt82f1kX9X0mhRd%2BEUgkX1%2BS9K6RACNYHDNWBvNBAZmponVRCyFEg6ooHPDIo5%2F8o4nUlnMNcO%2B2J7z%2FKNq98X3p05w8WNLnsYx3vRhKjGRkz4hPp%2F14OsnFvEs44J6H37XGb88JOVGcLOntDUtxsBK%2BvK3j6I3HvbMsGezWdalZVKlBVNPspbIV2N8XEuIyX2A25DOQeliUufpOfEUXsKAyvInoDnLWX07stGqYlTvPXG7edrr4ErKk8G4IxeACPu%2ByjD%2FctQEXtm3qBpcB23%2BAAYfKO0TVIgig8WOFEEj39OiFSwPMZsOyMwg%2B3QxAY6pgF8nlmYNgfZ7r5fKZX%2FHpy6GUe6Jy7yY45k%2FdStDhHjSFKAOxHB4uP1xoRWC3ZKDPt50PaDkp%2FI%2FqFK8PY4Su7%2FGTqrwENPl3pCn7j%2BVdOmIYopi80il9Z7dIoCeTqj7KAoey1otZkpTm2wGZEKbeMVTlXb45%2BBDq60uxp%2FZHGEl6i%2BZDOwcfMBdDnUkt7qmIHAR4rpKSFsn3XxNlToQ6JZazDRv4WN&X-Amz-Signature=4c2393ee8c88d266b97c6cd18d00912b1650bd3ddb33e7099ad622375aec0b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WEG6KNP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIE78gMgfx0XBczq4JS48d0UpRAF5nnS8%2BuaP6TRoQ75rAiASm7O5g%2B%2FbbqEKPBOJuTelwktZCkMZT%2Br6umf5Ruy2NiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyjo%2BR9%2BB4oivlPKsKtwDm78WnzdOEpzNrV1UznWM%2FAuDdrdoY%2F8aUsd88GNESrwTUDKL0cI91N80CHQUzrw6JV8z9qym2YvTmKBqellzw1wAoUAnxEzJ942zX%2BqRaJF9WlF9jOrbay3DjC043UARg1%2F1oGnmTIv7q0V9Iz4aOaI8kHCFZ5LH39xPCTOYuBWXZhAnJl0Nfw6unJeQceZ%2FEzfjz7YQdYrd%2BbYKl5TMHhHeMw2rxcnUsI7OqAe9%2Ftnt0eKEZPlpGFiaNJn2lxpn2yvDdAbGbnatlk%2BwbnKqo%2B%2BDloldoZoysZk%2FEL3NH2cFihRmPzLsq92msWZeM0mD0zbt82f1kX9X0mhRd%2BEUgkX1%2BS9K6RACNYHDNWBvNBAZmponVRCyFEg6ooHPDIo5%2F8o4nUlnMNcO%2B2J7z%2FKNq98X3p05w8WNLnsYx3vRhKjGRkz4hPp%2F14OsnFvEs44J6H37XGb88JOVGcLOntDUtxsBK%2BvK3j6I3HvbMsGezWdalZVKlBVNPspbIV2N8XEuIyX2A25DOQeliUufpOfEUXsKAyvInoDnLWX07stGqYlTvPXG7edrr4ErKk8G4IxeACPu%2ByjD%2FctQEXtm3qBpcB23%2BAAYfKO0TVIgig8WOFEEj39OiFSwPMZsOyMwg%2B3QxAY6pgF8nlmYNgfZ7r5fKZX%2FHpy6GUe6Jy7yY45k%2FdStDhHjSFKAOxHB4uP1xoRWC3ZKDPt50PaDkp%2FI%2FqFK8PY4Su7%2FGTqrwENPl3pCn7j%2BVdOmIYopi80il9Z7dIoCeTqj7KAoey1otZkpTm2wGZEKbeMVTlXb45%2BBDq60uxp%2FZHGEl6i%2BZDOwcfMBdDnUkt7qmIHAR4rpKSFsn3XxNlToQ6JZazDRv4WN&X-Amz-Signature=26cb0065ed16dba44ec8e95d9e0f39064c88fcd06e7590ad3298cdf1db0afb2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WEG6KNP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIE78gMgfx0XBczq4JS48d0UpRAF5nnS8%2BuaP6TRoQ75rAiASm7O5g%2B%2FbbqEKPBOJuTelwktZCkMZT%2Br6umf5Ruy2NiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyjo%2BR9%2BB4oivlPKsKtwDm78WnzdOEpzNrV1UznWM%2FAuDdrdoY%2F8aUsd88GNESrwTUDKL0cI91N80CHQUzrw6JV8z9qym2YvTmKBqellzw1wAoUAnxEzJ942zX%2BqRaJF9WlF9jOrbay3DjC043UARg1%2F1oGnmTIv7q0V9Iz4aOaI8kHCFZ5LH39xPCTOYuBWXZhAnJl0Nfw6unJeQceZ%2FEzfjz7YQdYrd%2BbYKl5TMHhHeMw2rxcnUsI7OqAe9%2Ftnt0eKEZPlpGFiaNJn2lxpn2yvDdAbGbnatlk%2BwbnKqo%2B%2BDloldoZoysZk%2FEL3NH2cFihRmPzLsq92msWZeM0mD0zbt82f1kX9X0mhRd%2BEUgkX1%2BS9K6RACNYHDNWBvNBAZmponVRCyFEg6ooHPDIo5%2F8o4nUlnMNcO%2B2J7z%2FKNq98X3p05w8WNLnsYx3vRhKjGRkz4hPp%2F14OsnFvEs44J6H37XGb88JOVGcLOntDUtxsBK%2BvK3j6I3HvbMsGezWdalZVKlBVNPspbIV2N8XEuIyX2A25DOQeliUufpOfEUXsKAyvInoDnLWX07stGqYlTvPXG7edrr4ErKk8G4IxeACPu%2ByjD%2FctQEXtm3qBpcB23%2BAAYfKO0TVIgig8WOFEEj39OiFSwPMZsOyMwg%2B3QxAY6pgF8nlmYNgfZ7r5fKZX%2FHpy6GUe6Jy7yY45k%2FdStDhHjSFKAOxHB4uP1xoRWC3ZKDPt50PaDkp%2FI%2FqFK8PY4Su7%2FGTqrwENPl3pCn7j%2BVdOmIYopi80il9Z7dIoCeTqj7KAoey1otZkpTm2wGZEKbeMVTlXb45%2BBDq60uxp%2FZHGEl6i%2BZDOwcfMBdDnUkt7qmIHAR4rpKSFsn3XxNlToQ6JZazDRv4WN&X-Amz-Signature=f94b78989183379b415bcb5e9400cb4882353643a400c3bb2317599061682a6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WEG6KNP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIE78gMgfx0XBczq4JS48d0UpRAF5nnS8%2BuaP6TRoQ75rAiASm7O5g%2B%2FbbqEKPBOJuTelwktZCkMZT%2Br6umf5Ruy2NiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyjo%2BR9%2BB4oivlPKsKtwDm78WnzdOEpzNrV1UznWM%2FAuDdrdoY%2F8aUsd88GNESrwTUDKL0cI91N80CHQUzrw6JV8z9qym2YvTmKBqellzw1wAoUAnxEzJ942zX%2BqRaJF9WlF9jOrbay3DjC043UARg1%2F1oGnmTIv7q0V9Iz4aOaI8kHCFZ5LH39xPCTOYuBWXZhAnJl0Nfw6unJeQceZ%2FEzfjz7YQdYrd%2BbYKl5TMHhHeMw2rxcnUsI7OqAe9%2Ftnt0eKEZPlpGFiaNJn2lxpn2yvDdAbGbnatlk%2BwbnKqo%2B%2BDloldoZoysZk%2FEL3NH2cFihRmPzLsq92msWZeM0mD0zbt82f1kX9X0mhRd%2BEUgkX1%2BS9K6RACNYHDNWBvNBAZmponVRCyFEg6ooHPDIo5%2F8o4nUlnMNcO%2B2J7z%2FKNq98X3p05w8WNLnsYx3vRhKjGRkz4hPp%2F14OsnFvEs44J6H37XGb88JOVGcLOntDUtxsBK%2BvK3j6I3HvbMsGezWdalZVKlBVNPspbIV2N8XEuIyX2A25DOQeliUufpOfEUXsKAyvInoDnLWX07stGqYlTvPXG7edrr4ErKk8G4IxeACPu%2ByjD%2FctQEXtm3qBpcB23%2BAAYfKO0TVIgig8WOFEEj39OiFSwPMZsOyMwg%2B3QxAY6pgF8nlmYNgfZ7r5fKZX%2FHpy6GUe6Jy7yY45k%2FdStDhHjSFKAOxHB4uP1xoRWC3ZKDPt50PaDkp%2FI%2FqFK8PY4Su7%2FGTqrwENPl3pCn7j%2BVdOmIYopi80il9Z7dIoCeTqj7KAoey1otZkpTm2wGZEKbeMVTlXb45%2BBDq60uxp%2FZHGEl6i%2BZDOwcfMBdDnUkt7qmIHAR4rpKSFsn3XxNlToQ6JZazDRv4WN&X-Amz-Signature=7126ff6af93a5200716bf4340a8f8d9112b929c1920e28d16014fa10234be9ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WEG6KNP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIE78gMgfx0XBczq4JS48d0UpRAF5nnS8%2BuaP6TRoQ75rAiASm7O5g%2B%2FbbqEKPBOJuTelwktZCkMZT%2Br6umf5Ruy2NiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyjo%2BR9%2BB4oivlPKsKtwDm78WnzdOEpzNrV1UznWM%2FAuDdrdoY%2F8aUsd88GNESrwTUDKL0cI91N80CHQUzrw6JV8z9qym2YvTmKBqellzw1wAoUAnxEzJ942zX%2BqRaJF9WlF9jOrbay3DjC043UARg1%2F1oGnmTIv7q0V9Iz4aOaI8kHCFZ5LH39xPCTOYuBWXZhAnJl0Nfw6unJeQceZ%2FEzfjz7YQdYrd%2BbYKl5TMHhHeMw2rxcnUsI7OqAe9%2Ftnt0eKEZPlpGFiaNJn2lxpn2yvDdAbGbnatlk%2BwbnKqo%2B%2BDloldoZoysZk%2FEL3NH2cFihRmPzLsq92msWZeM0mD0zbt82f1kX9X0mhRd%2BEUgkX1%2BS9K6RACNYHDNWBvNBAZmponVRCyFEg6ooHPDIo5%2F8o4nUlnMNcO%2B2J7z%2FKNq98X3p05w8WNLnsYx3vRhKjGRkz4hPp%2F14OsnFvEs44J6H37XGb88JOVGcLOntDUtxsBK%2BvK3j6I3HvbMsGezWdalZVKlBVNPspbIV2N8XEuIyX2A25DOQeliUufpOfEUXsKAyvInoDnLWX07stGqYlTvPXG7edrr4ErKk8G4IxeACPu%2ByjD%2FctQEXtm3qBpcB23%2BAAYfKO0TVIgig8WOFEEj39OiFSwPMZsOyMwg%2B3QxAY6pgF8nlmYNgfZ7r5fKZX%2FHpy6GUe6Jy7yY45k%2FdStDhHjSFKAOxHB4uP1xoRWC3ZKDPt50PaDkp%2FI%2FqFK8PY4Su7%2FGTqrwENPl3pCn7j%2BVdOmIYopi80il9Z7dIoCeTqj7KAoey1otZkpTm2wGZEKbeMVTlXb45%2BBDq60uxp%2FZHGEl6i%2BZDOwcfMBdDnUkt7qmIHAR4rpKSFsn3XxNlToQ6JZazDRv4WN&X-Amz-Signature=4c2393ee8c88d266b97c6cd18d00912b1650bd3ddb33e7099ad622375aec0b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WEG6KNP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIE78gMgfx0XBczq4JS48d0UpRAF5nnS8%2BuaP6TRoQ75rAiASm7O5g%2B%2FbbqEKPBOJuTelwktZCkMZT%2Br6umf5Ruy2NiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyjo%2BR9%2BB4oivlPKsKtwDm78WnzdOEpzNrV1UznWM%2FAuDdrdoY%2F8aUsd88GNESrwTUDKL0cI91N80CHQUzrw6JV8z9qym2YvTmKBqellzw1wAoUAnxEzJ942zX%2BqRaJF9WlF9jOrbay3DjC043UARg1%2F1oGnmTIv7q0V9Iz4aOaI8kHCFZ5LH39xPCTOYuBWXZhAnJl0Nfw6unJeQceZ%2FEzfjz7YQdYrd%2BbYKl5TMHhHeMw2rxcnUsI7OqAe9%2Ftnt0eKEZPlpGFiaNJn2lxpn2yvDdAbGbnatlk%2BwbnKqo%2B%2BDloldoZoysZk%2FEL3NH2cFihRmPzLsq92msWZeM0mD0zbt82f1kX9X0mhRd%2BEUgkX1%2BS9K6RACNYHDNWBvNBAZmponVRCyFEg6ooHPDIo5%2F8o4nUlnMNcO%2B2J7z%2FKNq98X3p05w8WNLnsYx3vRhKjGRkz4hPp%2F14OsnFvEs44J6H37XGb88JOVGcLOntDUtxsBK%2BvK3j6I3HvbMsGezWdalZVKlBVNPspbIV2N8XEuIyX2A25DOQeliUufpOfEUXsKAyvInoDnLWX07stGqYlTvPXG7edrr4ErKk8G4IxeACPu%2ByjD%2FctQEXtm3qBpcB23%2BAAYfKO0TVIgig8WOFEEj39OiFSwPMZsOyMwg%2B3QxAY6pgF8nlmYNgfZ7r5fKZX%2FHpy6GUe6Jy7yY45k%2FdStDhHjSFKAOxHB4uP1xoRWC3ZKDPt50PaDkp%2FI%2FqFK8PY4Su7%2FGTqrwENPl3pCn7j%2BVdOmIYopi80il9Z7dIoCeTqj7KAoey1otZkpTm2wGZEKbeMVTlXb45%2BBDq60uxp%2FZHGEl6i%2BZDOwcfMBdDnUkt7qmIHAR4rpKSFsn3XxNlToQ6JZazDRv4WN&X-Amz-Signature=ba8dd9b7fb4b4f000f3e4ea4e3403949a5f5dfdcd2ee7ad0518844d010078aba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WEG6KNP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIE78gMgfx0XBczq4JS48d0UpRAF5nnS8%2BuaP6TRoQ75rAiASm7O5g%2B%2FbbqEKPBOJuTelwktZCkMZT%2Br6umf5Ruy2NiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyjo%2BR9%2BB4oivlPKsKtwDm78WnzdOEpzNrV1UznWM%2FAuDdrdoY%2F8aUsd88GNESrwTUDKL0cI91N80CHQUzrw6JV8z9qym2YvTmKBqellzw1wAoUAnxEzJ942zX%2BqRaJF9WlF9jOrbay3DjC043UARg1%2F1oGnmTIv7q0V9Iz4aOaI8kHCFZ5LH39xPCTOYuBWXZhAnJl0Nfw6unJeQceZ%2FEzfjz7YQdYrd%2BbYKl5TMHhHeMw2rxcnUsI7OqAe9%2Ftnt0eKEZPlpGFiaNJn2lxpn2yvDdAbGbnatlk%2BwbnKqo%2B%2BDloldoZoysZk%2FEL3NH2cFihRmPzLsq92msWZeM0mD0zbt82f1kX9X0mhRd%2BEUgkX1%2BS9K6RACNYHDNWBvNBAZmponVRCyFEg6ooHPDIo5%2F8o4nUlnMNcO%2B2J7z%2FKNq98X3p05w8WNLnsYx3vRhKjGRkz4hPp%2F14OsnFvEs44J6H37XGb88JOVGcLOntDUtxsBK%2BvK3j6I3HvbMsGezWdalZVKlBVNPspbIV2N8XEuIyX2A25DOQeliUufpOfEUXsKAyvInoDnLWX07stGqYlTvPXG7edrr4ErKk8G4IxeACPu%2ByjD%2FctQEXtm3qBpcB23%2BAAYfKO0TVIgig8WOFEEj39OiFSwPMZsOyMwg%2B3QxAY6pgF8nlmYNgfZ7r5fKZX%2FHpy6GUe6Jy7yY45k%2FdStDhHjSFKAOxHB4uP1xoRWC3ZKDPt50PaDkp%2FI%2FqFK8PY4Su7%2FGTqrwENPl3pCn7j%2BVdOmIYopi80il9Z7dIoCeTqj7KAoey1otZkpTm2wGZEKbeMVTlXb45%2BBDq60uxp%2FZHGEl6i%2BZDOwcfMBdDnUkt7qmIHAR4rpKSFsn3XxNlToQ6JZazDRv4WN&X-Amz-Signature=fa2634964d1ce06dc05385d6f53ce9765980f3641c05c020ac9cf3d90a4ab558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WEG6KNP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIE78gMgfx0XBczq4JS48d0UpRAF5nnS8%2BuaP6TRoQ75rAiASm7O5g%2B%2FbbqEKPBOJuTelwktZCkMZT%2Br6umf5Ruy2NiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyjo%2BR9%2BB4oivlPKsKtwDm78WnzdOEpzNrV1UznWM%2FAuDdrdoY%2F8aUsd88GNESrwTUDKL0cI91N80CHQUzrw6JV8z9qym2YvTmKBqellzw1wAoUAnxEzJ942zX%2BqRaJF9WlF9jOrbay3DjC043UARg1%2F1oGnmTIv7q0V9Iz4aOaI8kHCFZ5LH39xPCTOYuBWXZhAnJl0Nfw6unJeQceZ%2FEzfjz7YQdYrd%2BbYKl5TMHhHeMw2rxcnUsI7OqAe9%2Ftnt0eKEZPlpGFiaNJn2lxpn2yvDdAbGbnatlk%2BwbnKqo%2B%2BDloldoZoysZk%2FEL3NH2cFihRmPzLsq92msWZeM0mD0zbt82f1kX9X0mhRd%2BEUgkX1%2BS9K6RACNYHDNWBvNBAZmponVRCyFEg6ooHPDIo5%2F8o4nUlnMNcO%2B2J7z%2FKNq98X3p05w8WNLnsYx3vRhKjGRkz4hPp%2F14OsnFvEs44J6H37XGb88JOVGcLOntDUtxsBK%2BvK3j6I3HvbMsGezWdalZVKlBVNPspbIV2N8XEuIyX2A25DOQeliUufpOfEUXsKAyvInoDnLWX07stGqYlTvPXG7edrr4ErKk8G4IxeACPu%2ByjD%2FctQEXtm3qBpcB23%2BAAYfKO0TVIgig8WOFEEj39OiFSwPMZsOyMwg%2B3QxAY6pgF8nlmYNgfZ7r5fKZX%2FHpy6GUe6Jy7yY45k%2FdStDhHjSFKAOxHB4uP1xoRWC3ZKDPt50PaDkp%2FI%2FqFK8PY4Su7%2FGTqrwENPl3pCn7j%2BVdOmIYopi80il9Z7dIoCeTqj7KAoey1otZkpTm2wGZEKbeMVTlXb45%2BBDq60uxp%2FZHGEl6i%2BZDOwcfMBdDnUkt7qmIHAR4rpKSFsn3XxNlToQ6JZazDRv4WN&X-Amz-Signature=fc443be665cf66fda43abcc025832869edb88e88d25137ea64bfddef61129155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
