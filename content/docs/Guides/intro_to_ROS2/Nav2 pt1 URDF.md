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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSTS7RB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCh9Dm5DBi1F0hk00X5r%2BtwlwdFecBKUBcvEd%2BfmUJtdAIhAOQrtCXdCZ1tf%2Ffysdyt0MdhvMZ91%2FwdFLfNyAVaXjyaKv8DCBoQABoMNjM3NDIzMTgzODA1IgzBmtjwYCFTsThFNywq3AOvSKzUNeWOaKksezeHSV9gqApwPDUXWm7FLDd09Hc8%2Bj%2FiHSjUa05UJs7H8ns63dJQrXnSEROQ0T5NLLbIZQkBI%2FGpC9JJr7AVJHx38CDOTKuAb%2FGd99Ox5lBlD%2Fqf%2FN4asd0O43qcARxpcj8z%2FQuw1jglmzrQ5oE57dAp9EN7ZMlwy4%2Bx4NQSH1t9rQv4tg%2BqEA6QlDYnSE2udjjdjtdcqPWcf97n7CeKguSIogf4ocK94ouitWN%2FcXlfe%2Fi4m2Kv%2FzlyvC3JgxP97f2BKWYv0iRIu05j6WrCm03hErX66U6NekWk6YIYtPR2CBJZ5KDTGLh%2F4hNDY%2BR3JRZonnkD73xcsvf4Q%2FbomSEKq6JoJAwAMpzlK%2B9N2DyKcTzfcV6jsS9mvu8yNvRW7mZROU6O9cSPlNd4ugqcvSVCSfNGwmj73bf%2BQ0JxPUXAf5dWKalSdNSMoCQ3put%2BrE%2BUCzOGmJ9fHIAWKmQNVsE6dV1PmuyYGcmWpODXLyZ0bpjL81RZNVXFTz1Y6n%2BjiwHLRQBWnl7hbj3ftofoxnaIRduZVuyS60bdK3V1VeIDSM70BMdJVQXtw5aVQOLJP47OB4nQPIo8AkcPCl9JoE31IgxLgh5lGrVqg8ZzzIFj9TDRlMrTBjqkARpkBVyF5H0I4HxqwST6yuBvSH4l%2F3Ubhn%2FJmCB7eCFhTY556cnIWL8CVGQd7dX9gQN41I0EAGMEhvH%2FB4dIPuJHkPCfJupbLo%2Fq3tFrW%2FiMhTJ1ywQ%2BnalLwZHLJvkwHT1NvRJEcvsNsVD46NseiQMl8ETauvcf5T5hAfHUJXH5b3boZa5VgYHZZu0RIYgtMJfXqzieowXK4c46MHX%2FdLqLtsIg&X-Amz-Signature=a660d1f761f06192434c38e766ae7c2b5f719cc0089ad4519be0b7839a220b52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSTS7RB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCh9Dm5DBi1F0hk00X5r%2BtwlwdFecBKUBcvEd%2BfmUJtdAIhAOQrtCXdCZ1tf%2Ffysdyt0MdhvMZ91%2FwdFLfNyAVaXjyaKv8DCBoQABoMNjM3NDIzMTgzODA1IgzBmtjwYCFTsThFNywq3AOvSKzUNeWOaKksezeHSV9gqApwPDUXWm7FLDd09Hc8%2Bj%2FiHSjUa05UJs7H8ns63dJQrXnSEROQ0T5NLLbIZQkBI%2FGpC9JJr7AVJHx38CDOTKuAb%2FGd99Ox5lBlD%2Fqf%2FN4asd0O43qcARxpcj8z%2FQuw1jglmzrQ5oE57dAp9EN7ZMlwy4%2Bx4NQSH1t9rQv4tg%2BqEA6QlDYnSE2udjjdjtdcqPWcf97n7CeKguSIogf4ocK94ouitWN%2FcXlfe%2Fi4m2Kv%2FzlyvC3JgxP97f2BKWYv0iRIu05j6WrCm03hErX66U6NekWk6YIYtPR2CBJZ5KDTGLh%2F4hNDY%2BR3JRZonnkD73xcsvf4Q%2FbomSEKq6JoJAwAMpzlK%2B9N2DyKcTzfcV6jsS9mvu8yNvRW7mZROU6O9cSPlNd4ugqcvSVCSfNGwmj73bf%2BQ0JxPUXAf5dWKalSdNSMoCQ3put%2BrE%2BUCzOGmJ9fHIAWKmQNVsE6dV1PmuyYGcmWpODXLyZ0bpjL81RZNVXFTz1Y6n%2BjiwHLRQBWnl7hbj3ftofoxnaIRduZVuyS60bdK3V1VeIDSM70BMdJVQXtw5aVQOLJP47OB4nQPIo8AkcPCl9JoE31IgxLgh5lGrVqg8ZzzIFj9TDRlMrTBjqkARpkBVyF5H0I4HxqwST6yuBvSH4l%2F3Ubhn%2FJmCB7eCFhTY556cnIWL8CVGQd7dX9gQN41I0EAGMEhvH%2FB4dIPuJHkPCfJupbLo%2Fq3tFrW%2FiMhTJ1ywQ%2BnalLwZHLJvkwHT1NvRJEcvsNsVD46NseiQMl8ETauvcf5T5hAfHUJXH5b3boZa5VgYHZZu0RIYgtMJfXqzieowXK4c46MHX%2FdLqLtsIg&X-Amz-Signature=e428b28c4349234f6f7bea98a9f6547fe68baf2899af7adb8bafd60a43a3a7ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSTS7RB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCh9Dm5DBi1F0hk00X5r%2BtwlwdFecBKUBcvEd%2BfmUJtdAIhAOQrtCXdCZ1tf%2Ffysdyt0MdhvMZ91%2FwdFLfNyAVaXjyaKv8DCBoQABoMNjM3NDIzMTgzODA1IgzBmtjwYCFTsThFNywq3AOvSKzUNeWOaKksezeHSV9gqApwPDUXWm7FLDd09Hc8%2Bj%2FiHSjUa05UJs7H8ns63dJQrXnSEROQ0T5NLLbIZQkBI%2FGpC9JJr7AVJHx38CDOTKuAb%2FGd99Ox5lBlD%2Fqf%2FN4asd0O43qcARxpcj8z%2FQuw1jglmzrQ5oE57dAp9EN7ZMlwy4%2Bx4NQSH1t9rQv4tg%2BqEA6QlDYnSE2udjjdjtdcqPWcf97n7CeKguSIogf4ocK94ouitWN%2FcXlfe%2Fi4m2Kv%2FzlyvC3JgxP97f2BKWYv0iRIu05j6WrCm03hErX66U6NekWk6YIYtPR2CBJZ5KDTGLh%2F4hNDY%2BR3JRZonnkD73xcsvf4Q%2FbomSEKq6JoJAwAMpzlK%2B9N2DyKcTzfcV6jsS9mvu8yNvRW7mZROU6O9cSPlNd4ugqcvSVCSfNGwmj73bf%2BQ0JxPUXAf5dWKalSdNSMoCQ3put%2BrE%2BUCzOGmJ9fHIAWKmQNVsE6dV1PmuyYGcmWpODXLyZ0bpjL81RZNVXFTz1Y6n%2BjiwHLRQBWnl7hbj3ftofoxnaIRduZVuyS60bdK3V1VeIDSM70BMdJVQXtw5aVQOLJP47OB4nQPIo8AkcPCl9JoE31IgxLgh5lGrVqg8ZzzIFj9TDRlMrTBjqkARpkBVyF5H0I4HxqwST6yuBvSH4l%2F3Ubhn%2FJmCB7eCFhTY556cnIWL8CVGQd7dX9gQN41I0EAGMEhvH%2FB4dIPuJHkPCfJupbLo%2Fq3tFrW%2FiMhTJ1ywQ%2BnalLwZHLJvkwHT1NvRJEcvsNsVD46NseiQMl8ETauvcf5T5hAfHUJXH5b3boZa5VgYHZZu0RIYgtMJfXqzieowXK4c46MHX%2FdLqLtsIg&X-Amz-Signature=53a7b12cf52ad74b080a4e3639308187e21027568cd681e7c09fffbf04793a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSTS7RB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCh9Dm5DBi1F0hk00X5r%2BtwlwdFecBKUBcvEd%2BfmUJtdAIhAOQrtCXdCZ1tf%2Ffysdyt0MdhvMZ91%2FwdFLfNyAVaXjyaKv8DCBoQABoMNjM3NDIzMTgzODA1IgzBmtjwYCFTsThFNywq3AOvSKzUNeWOaKksezeHSV9gqApwPDUXWm7FLDd09Hc8%2Bj%2FiHSjUa05UJs7H8ns63dJQrXnSEROQ0T5NLLbIZQkBI%2FGpC9JJr7AVJHx38CDOTKuAb%2FGd99Ox5lBlD%2Fqf%2FN4asd0O43qcARxpcj8z%2FQuw1jglmzrQ5oE57dAp9EN7ZMlwy4%2Bx4NQSH1t9rQv4tg%2BqEA6QlDYnSE2udjjdjtdcqPWcf97n7CeKguSIogf4ocK94ouitWN%2FcXlfe%2Fi4m2Kv%2FzlyvC3JgxP97f2BKWYv0iRIu05j6WrCm03hErX66U6NekWk6YIYtPR2CBJZ5KDTGLh%2F4hNDY%2BR3JRZonnkD73xcsvf4Q%2FbomSEKq6JoJAwAMpzlK%2B9N2DyKcTzfcV6jsS9mvu8yNvRW7mZROU6O9cSPlNd4ugqcvSVCSfNGwmj73bf%2BQ0JxPUXAf5dWKalSdNSMoCQ3put%2BrE%2BUCzOGmJ9fHIAWKmQNVsE6dV1PmuyYGcmWpODXLyZ0bpjL81RZNVXFTz1Y6n%2BjiwHLRQBWnl7hbj3ftofoxnaIRduZVuyS60bdK3V1VeIDSM70BMdJVQXtw5aVQOLJP47OB4nQPIo8AkcPCl9JoE31IgxLgh5lGrVqg8ZzzIFj9TDRlMrTBjqkARpkBVyF5H0I4HxqwST6yuBvSH4l%2F3Ubhn%2FJmCB7eCFhTY556cnIWL8CVGQd7dX9gQN41I0EAGMEhvH%2FB4dIPuJHkPCfJupbLo%2Fq3tFrW%2FiMhTJ1ywQ%2BnalLwZHLJvkwHT1NvRJEcvsNsVD46NseiQMl8ETauvcf5T5hAfHUJXH5b3boZa5VgYHZZu0RIYgtMJfXqzieowXK4c46MHX%2FdLqLtsIg&X-Amz-Signature=fc34f83a719a8a529ac4cf09d9315a0041c4836d85e87d34f68b69c2c43d6bf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSTS7RB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCh9Dm5DBi1F0hk00X5r%2BtwlwdFecBKUBcvEd%2BfmUJtdAIhAOQrtCXdCZ1tf%2Ffysdyt0MdhvMZ91%2FwdFLfNyAVaXjyaKv8DCBoQABoMNjM3NDIzMTgzODA1IgzBmtjwYCFTsThFNywq3AOvSKzUNeWOaKksezeHSV9gqApwPDUXWm7FLDd09Hc8%2Bj%2FiHSjUa05UJs7H8ns63dJQrXnSEROQ0T5NLLbIZQkBI%2FGpC9JJr7AVJHx38CDOTKuAb%2FGd99Ox5lBlD%2Fqf%2FN4asd0O43qcARxpcj8z%2FQuw1jglmzrQ5oE57dAp9EN7ZMlwy4%2Bx4NQSH1t9rQv4tg%2BqEA6QlDYnSE2udjjdjtdcqPWcf97n7CeKguSIogf4ocK94ouitWN%2FcXlfe%2Fi4m2Kv%2FzlyvC3JgxP97f2BKWYv0iRIu05j6WrCm03hErX66U6NekWk6YIYtPR2CBJZ5KDTGLh%2F4hNDY%2BR3JRZonnkD73xcsvf4Q%2FbomSEKq6JoJAwAMpzlK%2B9N2DyKcTzfcV6jsS9mvu8yNvRW7mZROU6O9cSPlNd4ugqcvSVCSfNGwmj73bf%2BQ0JxPUXAf5dWKalSdNSMoCQ3put%2BrE%2BUCzOGmJ9fHIAWKmQNVsE6dV1PmuyYGcmWpODXLyZ0bpjL81RZNVXFTz1Y6n%2BjiwHLRQBWnl7hbj3ftofoxnaIRduZVuyS60bdK3V1VeIDSM70BMdJVQXtw5aVQOLJP47OB4nQPIo8AkcPCl9JoE31IgxLgh5lGrVqg8ZzzIFj9TDRlMrTBjqkARpkBVyF5H0I4HxqwST6yuBvSH4l%2F3Ubhn%2FJmCB7eCFhTY556cnIWL8CVGQd7dX9gQN41I0EAGMEhvH%2FB4dIPuJHkPCfJupbLo%2Fq3tFrW%2FiMhTJ1ywQ%2BnalLwZHLJvkwHT1NvRJEcvsNsVD46NseiQMl8ETauvcf5T5hAfHUJXH5b3boZa5VgYHZZu0RIYgtMJfXqzieowXK4c46MHX%2FdLqLtsIg&X-Amz-Signature=b13c67371fc83587ae95625cd56536274c410ac7c772be37cc6d8962a650d323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSTS7RB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCh9Dm5DBi1F0hk00X5r%2BtwlwdFecBKUBcvEd%2BfmUJtdAIhAOQrtCXdCZ1tf%2Ffysdyt0MdhvMZ91%2FwdFLfNyAVaXjyaKv8DCBoQABoMNjM3NDIzMTgzODA1IgzBmtjwYCFTsThFNywq3AOvSKzUNeWOaKksezeHSV9gqApwPDUXWm7FLDd09Hc8%2Bj%2FiHSjUa05UJs7H8ns63dJQrXnSEROQ0T5NLLbIZQkBI%2FGpC9JJr7AVJHx38CDOTKuAb%2FGd99Ox5lBlD%2Fqf%2FN4asd0O43qcARxpcj8z%2FQuw1jglmzrQ5oE57dAp9EN7ZMlwy4%2Bx4NQSH1t9rQv4tg%2BqEA6QlDYnSE2udjjdjtdcqPWcf97n7CeKguSIogf4ocK94ouitWN%2FcXlfe%2Fi4m2Kv%2FzlyvC3JgxP97f2BKWYv0iRIu05j6WrCm03hErX66U6NekWk6YIYtPR2CBJZ5KDTGLh%2F4hNDY%2BR3JRZonnkD73xcsvf4Q%2FbomSEKq6JoJAwAMpzlK%2B9N2DyKcTzfcV6jsS9mvu8yNvRW7mZROU6O9cSPlNd4ugqcvSVCSfNGwmj73bf%2BQ0JxPUXAf5dWKalSdNSMoCQ3put%2BrE%2BUCzOGmJ9fHIAWKmQNVsE6dV1PmuyYGcmWpODXLyZ0bpjL81RZNVXFTz1Y6n%2BjiwHLRQBWnl7hbj3ftofoxnaIRduZVuyS60bdK3V1VeIDSM70BMdJVQXtw5aVQOLJP47OB4nQPIo8AkcPCl9JoE31IgxLgh5lGrVqg8ZzzIFj9TDRlMrTBjqkARpkBVyF5H0I4HxqwST6yuBvSH4l%2F3Ubhn%2FJmCB7eCFhTY556cnIWL8CVGQd7dX9gQN41I0EAGMEhvH%2FB4dIPuJHkPCfJupbLo%2Fq3tFrW%2FiMhTJ1ywQ%2BnalLwZHLJvkwHT1NvRJEcvsNsVD46NseiQMl8ETauvcf5T5hAfHUJXH5b3boZa5VgYHZZu0RIYgtMJfXqzieowXK4c46MHX%2FdLqLtsIg&X-Amz-Signature=79fbbf0ddd88884be3c0fd978fd87f5c82d7cd7296c5645821335030f6e11a26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSTS7RB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCh9Dm5DBi1F0hk00X5r%2BtwlwdFecBKUBcvEd%2BfmUJtdAIhAOQrtCXdCZ1tf%2Ffysdyt0MdhvMZ91%2FwdFLfNyAVaXjyaKv8DCBoQABoMNjM3NDIzMTgzODA1IgzBmtjwYCFTsThFNywq3AOvSKzUNeWOaKksezeHSV9gqApwPDUXWm7FLDd09Hc8%2Bj%2FiHSjUa05UJs7H8ns63dJQrXnSEROQ0T5NLLbIZQkBI%2FGpC9JJr7AVJHx38CDOTKuAb%2FGd99Ox5lBlD%2Fqf%2FN4asd0O43qcARxpcj8z%2FQuw1jglmzrQ5oE57dAp9EN7ZMlwy4%2Bx4NQSH1t9rQv4tg%2BqEA6QlDYnSE2udjjdjtdcqPWcf97n7CeKguSIogf4ocK94ouitWN%2FcXlfe%2Fi4m2Kv%2FzlyvC3JgxP97f2BKWYv0iRIu05j6WrCm03hErX66U6NekWk6YIYtPR2CBJZ5KDTGLh%2F4hNDY%2BR3JRZonnkD73xcsvf4Q%2FbomSEKq6JoJAwAMpzlK%2B9N2DyKcTzfcV6jsS9mvu8yNvRW7mZROU6O9cSPlNd4ugqcvSVCSfNGwmj73bf%2BQ0JxPUXAf5dWKalSdNSMoCQ3put%2BrE%2BUCzOGmJ9fHIAWKmQNVsE6dV1PmuyYGcmWpODXLyZ0bpjL81RZNVXFTz1Y6n%2BjiwHLRQBWnl7hbj3ftofoxnaIRduZVuyS60bdK3V1VeIDSM70BMdJVQXtw5aVQOLJP47OB4nQPIo8AkcPCl9JoE31IgxLgh5lGrVqg8ZzzIFj9TDRlMrTBjqkARpkBVyF5H0I4HxqwST6yuBvSH4l%2F3Ubhn%2FJmCB7eCFhTY556cnIWL8CVGQd7dX9gQN41I0EAGMEhvH%2FB4dIPuJHkPCfJupbLo%2Fq3tFrW%2FiMhTJ1ywQ%2BnalLwZHLJvkwHT1NvRJEcvsNsVD46NseiQMl8ETauvcf5T5hAfHUJXH5b3boZa5VgYHZZu0RIYgtMJfXqzieowXK4c46MHX%2FdLqLtsIg&X-Amz-Signature=d2884c7694bffcf6288cb69d7890610cd8add4f474c9b7c5c6dda1ca203d42da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSTS7RB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCh9Dm5DBi1F0hk00X5r%2BtwlwdFecBKUBcvEd%2BfmUJtdAIhAOQrtCXdCZ1tf%2Ffysdyt0MdhvMZ91%2FwdFLfNyAVaXjyaKv8DCBoQABoMNjM3NDIzMTgzODA1IgzBmtjwYCFTsThFNywq3AOvSKzUNeWOaKksezeHSV9gqApwPDUXWm7FLDd09Hc8%2Bj%2FiHSjUa05UJs7H8ns63dJQrXnSEROQ0T5NLLbIZQkBI%2FGpC9JJr7AVJHx38CDOTKuAb%2FGd99Ox5lBlD%2Fqf%2FN4asd0O43qcARxpcj8z%2FQuw1jglmzrQ5oE57dAp9EN7ZMlwy4%2Bx4NQSH1t9rQv4tg%2BqEA6QlDYnSE2udjjdjtdcqPWcf97n7CeKguSIogf4ocK94ouitWN%2FcXlfe%2Fi4m2Kv%2FzlyvC3JgxP97f2BKWYv0iRIu05j6WrCm03hErX66U6NekWk6YIYtPR2CBJZ5KDTGLh%2F4hNDY%2BR3JRZonnkD73xcsvf4Q%2FbomSEKq6JoJAwAMpzlK%2B9N2DyKcTzfcV6jsS9mvu8yNvRW7mZROU6O9cSPlNd4ugqcvSVCSfNGwmj73bf%2BQ0JxPUXAf5dWKalSdNSMoCQ3put%2BrE%2BUCzOGmJ9fHIAWKmQNVsE6dV1PmuyYGcmWpODXLyZ0bpjL81RZNVXFTz1Y6n%2BjiwHLRQBWnl7hbj3ftofoxnaIRduZVuyS60bdK3V1VeIDSM70BMdJVQXtw5aVQOLJP47OB4nQPIo8AkcPCl9JoE31IgxLgh5lGrVqg8ZzzIFj9TDRlMrTBjqkARpkBVyF5H0I4HxqwST6yuBvSH4l%2F3Ubhn%2FJmCB7eCFhTY556cnIWL8CVGQd7dX9gQN41I0EAGMEhvH%2FB4dIPuJHkPCfJupbLo%2Fq3tFrW%2FiMhTJ1ywQ%2BnalLwZHLJvkwHT1NvRJEcvsNsVD46NseiQMl8ETauvcf5T5hAfHUJXH5b3boZa5VgYHZZu0RIYgtMJfXqzieowXK4c46MHX%2FdLqLtsIg&X-Amz-Signature=d4a7c17cad938a7ba67f56c0572fbb94bb186d7d668221a6a8e2c82b901fee1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSTS7RB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCh9Dm5DBi1F0hk00X5r%2BtwlwdFecBKUBcvEd%2BfmUJtdAIhAOQrtCXdCZ1tf%2Ffysdyt0MdhvMZ91%2FwdFLfNyAVaXjyaKv8DCBoQABoMNjM3NDIzMTgzODA1IgzBmtjwYCFTsThFNywq3AOvSKzUNeWOaKksezeHSV9gqApwPDUXWm7FLDd09Hc8%2Bj%2FiHSjUa05UJs7H8ns63dJQrXnSEROQ0T5NLLbIZQkBI%2FGpC9JJr7AVJHx38CDOTKuAb%2FGd99Ox5lBlD%2Fqf%2FN4asd0O43qcARxpcj8z%2FQuw1jglmzrQ5oE57dAp9EN7ZMlwy4%2Bx4NQSH1t9rQv4tg%2BqEA6QlDYnSE2udjjdjtdcqPWcf97n7CeKguSIogf4ocK94ouitWN%2FcXlfe%2Fi4m2Kv%2FzlyvC3JgxP97f2BKWYv0iRIu05j6WrCm03hErX66U6NekWk6YIYtPR2CBJZ5KDTGLh%2F4hNDY%2BR3JRZonnkD73xcsvf4Q%2FbomSEKq6JoJAwAMpzlK%2B9N2DyKcTzfcV6jsS9mvu8yNvRW7mZROU6O9cSPlNd4ugqcvSVCSfNGwmj73bf%2BQ0JxPUXAf5dWKalSdNSMoCQ3put%2BrE%2BUCzOGmJ9fHIAWKmQNVsE6dV1PmuyYGcmWpODXLyZ0bpjL81RZNVXFTz1Y6n%2BjiwHLRQBWnl7hbj3ftofoxnaIRduZVuyS60bdK3V1VeIDSM70BMdJVQXtw5aVQOLJP47OB4nQPIo8AkcPCl9JoE31IgxLgh5lGrVqg8ZzzIFj9TDRlMrTBjqkARpkBVyF5H0I4HxqwST6yuBvSH4l%2F3Ubhn%2FJmCB7eCFhTY556cnIWL8CVGQd7dX9gQN41I0EAGMEhvH%2FB4dIPuJHkPCfJupbLo%2Fq3tFrW%2FiMhTJ1ywQ%2BnalLwZHLJvkwHT1NvRJEcvsNsVD46NseiQMl8ETauvcf5T5hAfHUJXH5b3boZa5VgYHZZu0RIYgtMJfXqzieowXK4c46MHX%2FdLqLtsIg&X-Amz-Signature=e51f453c79187a12d12989461c5d81242730b7e8113c4e507cb87739f633de6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSTS7RB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCh9Dm5DBi1F0hk00X5r%2BtwlwdFecBKUBcvEd%2BfmUJtdAIhAOQrtCXdCZ1tf%2Ffysdyt0MdhvMZ91%2FwdFLfNyAVaXjyaKv8DCBoQABoMNjM3NDIzMTgzODA1IgzBmtjwYCFTsThFNywq3AOvSKzUNeWOaKksezeHSV9gqApwPDUXWm7FLDd09Hc8%2Bj%2FiHSjUa05UJs7H8ns63dJQrXnSEROQ0T5NLLbIZQkBI%2FGpC9JJr7AVJHx38CDOTKuAb%2FGd99Ox5lBlD%2Fqf%2FN4asd0O43qcARxpcj8z%2FQuw1jglmzrQ5oE57dAp9EN7ZMlwy4%2Bx4NQSH1t9rQv4tg%2BqEA6QlDYnSE2udjjdjtdcqPWcf97n7CeKguSIogf4ocK94ouitWN%2FcXlfe%2Fi4m2Kv%2FzlyvC3JgxP97f2BKWYv0iRIu05j6WrCm03hErX66U6NekWk6YIYtPR2CBJZ5KDTGLh%2F4hNDY%2BR3JRZonnkD73xcsvf4Q%2FbomSEKq6JoJAwAMpzlK%2B9N2DyKcTzfcV6jsS9mvu8yNvRW7mZROU6O9cSPlNd4ugqcvSVCSfNGwmj73bf%2BQ0JxPUXAf5dWKalSdNSMoCQ3put%2BrE%2BUCzOGmJ9fHIAWKmQNVsE6dV1PmuyYGcmWpODXLyZ0bpjL81RZNVXFTz1Y6n%2BjiwHLRQBWnl7hbj3ftofoxnaIRduZVuyS60bdK3V1VeIDSM70BMdJVQXtw5aVQOLJP47OB4nQPIo8AkcPCl9JoE31IgxLgh5lGrVqg8ZzzIFj9TDRlMrTBjqkARpkBVyF5H0I4HxqwST6yuBvSH4l%2F3Ubhn%2FJmCB7eCFhTY556cnIWL8CVGQd7dX9gQN41I0EAGMEhvH%2FB4dIPuJHkPCfJupbLo%2Fq3tFrW%2FiMhTJ1ywQ%2BnalLwZHLJvkwHT1NvRJEcvsNsVD46NseiQMl8ETauvcf5T5hAfHUJXH5b3boZa5VgYHZZu0RIYgtMJfXqzieowXK4c46MHX%2FdLqLtsIg&X-Amz-Signature=810b3a7e17860b44349c4df4db8c20fd6ff570f8b112d825fe2604dadd067944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLXDDRJO%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCz2sZZ4SCX2H%2FftIgOoXxCld4ihp%2F%2FsXGCsbtgrDZMtgIgf5zTXINu64mXbnX1hJ073Vcjdbj2z92Rj1mdtd4izFgq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGrlOQwa%2Bu%2Fw8amu5SrcAy6Joh14ELPzYqfnnBXAmirf695NJIpIJYTTc%2BSltUsJ1hU2ubTKCvnQ5Wo8cAMcESlz6NQ5Cs%2BWGcEltR1dJRUsMvT39kobD%2F11UTS8DpfwH74yMtMDT5g2asWmUa42pap92eJjGpcuomdl08NCAH384SSlE70ne6rw6UgxChlb0Dnm7rn7bl0cfPmHRX%2BG7jrRG11U9UXbG5OiGcYh62iIl2cv%2BumcbQfL45QFraiTaHeaaD6Y%2BtYdfnnlh5DfBuLp1LUQ2N35m8GxvCuYnN8mx2CGl2IyanJXyaZ9cBdsa%2FiAPSrjIefYZ0RREyrLu6%2FqhNQSOvxXx2Ybmw63Tu8Qu4LTcG%2BaxQX7fSR58NvMJ2y3j497tpVKpicA3GWH0h30UQNw2%2FNd0%2FpzxntsDR9shyv%2FDnFVv%2BA57H11pSEymD%2Bj%2FuDq9lYLDmeflJD7tZNq43iQjCNI6NIomxpsV5gXjeANTJSkNZxZ%2Bbe6t6Pn%2FpVOa0LDrDnH2ILJ6wb9Vi0rLogp%2Fo9vakFGLQoemU7K2xCzpAuVEMd70fCYmclNKFQ2%2B00qdpt4EyoKpb6IsOKjX0cEauovkqHmPs%2FAiTAKoDQkGhHlZYcnLdvLeEUb1aTCoCV4kp68Il%2B1MOuUytMGOqUBa5R6vw1XORBvHztG7wPow55CRb7gNfUFMsn0wRhOS5MQOdbMV4uH3bYcyGJIOJEIp2vi9nSRRkfH0IF9Bw8cS%2BIfmCZ7apR4oFbJnGve6Ld0Vfd2wwHWIyYUkI5IVbEy3DsPePsaQe1TViJOx80Yy2CrtZNBCb9q6j2wQ%2F40%2BcdIgvA9JkOwUDnGgI6wyqozhMkIAgXrJih9hZSeukbYvr4B83Bu&X-Amz-Signature=9e09c640c4965de1d6186f29c6ad8f7447e616a1c9d75fedadc3d4cd550bc8ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLCLZ6IW%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCIws4hnSwnPQiKUd%2FIESMSQc9Yyxt6CdmaKo3Bov7CagIgJbkN%2FSizlF7%2BuvKffAxVJRP%2FUK7O0fT5I4jtWUo7%2F%2Fgq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDB1NDpdQ01OAwPNwlircA0Cb2AaUSRHIICueCOJabhXU0FIQJQZ3NqU%2BRjFpdSPINKqqps7DYZqa2LY3sApC8qTCfOg0uaVo2fIVBl0xvX1GbQwtiXhxwxSK%2BvJwKixumvYSXvoEv2VbMdiqtON%2FUe5njMvfejjKiaPua%2FDaSQOkxWEGuAWqCfnwdCGPtWN%2BuljZJZmmolIObRqKTGJhMAOweTmIkpdSg9GZOklk6CRxcir8hM2edpmFqUvPxMYKK%2Btx2t7En4iL8EeSrXh3Ja3%2Bmw4HxImJ44X4N%2BRMQU2l%2FglyIu%2Ft8n8YLiY3IoCPKMznuVUFd6AHMpUKTFtY3h%2FAfd%2BByFQ8z5j8TfbVmd%2BrnRXqzidMtxdhBWuJ9NtnB9mqaY96u92IvHnqfd0J3e9fmKNvDh6JP%2BmP7GEpDbqxJw0670JoqvMwjkqyFO6pN2b9KDntGArnnE8S905%2FxCKp8Qp8cGH0UclD1aMl4EZpfn0EikermWDjtFm9vTGMBbESSR4Vpt0MAkcfAae%2BmQN%2B6Nmr2QWhDa99s5CkyD0TmH%2FWuNBtMnXpXL2D6zI0RiGhykPtGUlPBpxfgA9oiQIDjPy6Uz32P%2B%2B3OCZhK4FFd4I7M1KpKhPN3YYldWbrpsxGkcP3JIW3QFk0MMSXytMGOqUBgjZASV%2Bl%2FhSgG5VNdKBRsN8sN%2FVBKDAeqUB9LRg1GVSPD65hdR3M80NnsIoacX1Hswv6QbQcr8C0wZAOUGfRYbpas3a1%2FET0wpYNMdtm3UVyDRgjO%2Bu9eB8TtH%2FH1AnkAdVWgrQbtkH%2BMfW%2BT4c%2FXZWnqJt9544HBqHj5VXRApwDrcpsV9xXvmu9EzMScXitTsf1wt1lsUoekqGKBBJa6wDZIHms&X-Amz-Signature=88472518cab9fed63941748fcf133c5887dfd652030cb7b447a25ac443dc7409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E63BQP7%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQD8miFUzyDm0Dlu4rORb8vZKMlOd43lzFvUQkvderXZGQIgBGYNItCophFH1%2FTfavsprOhLwxs%2BM7bgYGO81g29qvsq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDJI4dLE4nPTGKqlmfircA4I%2FV5IJ0%2BJAt7CEB%2BIo%2FdhKmnQo0PQhQDiAyByWYa%2FN76tsE4ixBGaJqh7kC49z85z3ZLjBQsGUcOzcri3fRG6GSGpN3WlQvI%2FC%2BoH%2BQPnHRT5UxUGY4pqm8Z1eBN5mK%2Bdg9cwUjcBzmLaw0E4iJa4fx5Sgl4NT31KwhwqvQ3%2B37VWRv%2B87ahZ7%2F9EFFc6AqwN%2BnA077Tmq4b9fBqNTJGwttv6X5OSnUi6pK0YUkTSCxfmxIZ2qjs%2FvW20LSIFD0ToG7jvW75LYD1glBr52xb1qvPLpCtdfKm2iMrFvWUG9Vnp67DDj8wYP021F%2FJm4wXdzywkKKTevrO10OBr31zg1sabnCnrQFW49buMxeNUeqDTShRnaiAjFOU2QYDEygoM83qOeVIq7esjyE1ihxYaaAp1btszJdsRkFHuCXhzMOCiDGpKThI1ZSe0nYUVXXXcSYE3NWwfYYcL2wCIZBiEmJjSA5ZJm5KIV%2B%2Fzk5bDxyX7SGsJxLKY9NJi2C0VsDEZNoiRyuEV%2FvPvDi0vdyrhccUj6X%2FRhAV3h453W6ycA8AZssjJ%2FY%2BuLOy4ruNTIpwNiW%2F%2BhE1Tc0Hq2UhxwiSkQR%2F5ijCZbxgNUzIezCtg3XLFh5godE43MHk%2BOMIOXytMGOqUBDByBPssSUZfBq3aK3UB6j1vnFt0y7qCpbNrZVdXkwJupg5YQoGsC1IeGGnc8eiKFcFKfrzJpTSyxtb6kWF5Cf4c9WaNg8pbT%2BJTHqaq%2BmchQQzWvb%2Fs65gpWIlCjJj9Tam95slgeLlQllLO2a%2BtVo0jDlzPsW9ZbCJfZi9Cv%2FfDLPjwD9I5yIuTOg%2BY5BGfK6oX1UfxMeqfc6I%2FCAnOGSZf%2FiR8F&X-Amz-Signature=6cd615e33436fdfa86658207af652afbddcec5c8ad23e6ac520a7b5b3a7dbe4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSTS7RB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCh9Dm5DBi1F0hk00X5r%2BtwlwdFecBKUBcvEd%2BfmUJtdAIhAOQrtCXdCZ1tf%2Ffysdyt0MdhvMZ91%2FwdFLfNyAVaXjyaKv8DCBoQABoMNjM3NDIzMTgzODA1IgzBmtjwYCFTsThFNywq3AOvSKzUNeWOaKksezeHSV9gqApwPDUXWm7FLDd09Hc8%2Bj%2FiHSjUa05UJs7H8ns63dJQrXnSEROQ0T5NLLbIZQkBI%2FGpC9JJr7AVJHx38CDOTKuAb%2FGd99Ox5lBlD%2Fqf%2FN4asd0O43qcARxpcj8z%2FQuw1jglmzrQ5oE57dAp9EN7ZMlwy4%2Bx4NQSH1t9rQv4tg%2BqEA6QlDYnSE2udjjdjtdcqPWcf97n7CeKguSIogf4ocK94ouitWN%2FcXlfe%2Fi4m2Kv%2FzlyvC3JgxP97f2BKWYv0iRIu05j6WrCm03hErX66U6NekWk6YIYtPR2CBJZ5KDTGLh%2F4hNDY%2BR3JRZonnkD73xcsvf4Q%2FbomSEKq6JoJAwAMpzlK%2B9N2DyKcTzfcV6jsS9mvu8yNvRW7mZROU6O9cSPlNd4ugqcvSVCSfNGwmj73bf%2BQ0JxPUXAf5dWKalSdNSMoCQ3put%2BrE%2BUCzOGmJ9fHIAWKmQNVsE6dV1PmuyYGcmWpODXLyZ0bpjL81RZNVXFTz1Y6n%2BjiwHLRQBWnl7hbj3ftofoxnaIRduZVuyS60bdK3V1VeIDSM70BMdJVQXtw5aVQOLJP47OB4nQPIo8AkcPCl9JoE31IgxLgh5lGrVqg8ZzzIFj9TDRlMrTBjqkARpkBVyF5H0I4HxqwST6yuBvSH4l%2F3Ubhn%2FJmCB7eCFhTY556cnIWL8CVGQd7dX9gQN41I0EAGMEhvH%2FB4dIPuJHkPCfJupbLo%2Fq3tFrW%2FiMhTJ1ywQ%2BnalLwZHLJvkwHT1NvRJEcvsNsVD46NseiQMl8ETauvcf5T5hAfHUJXH5b3boZa5VgYHZZu0RIYgtMJfXqzieowXK4c46MHX%2FdLqLtsIg&X-Amz-Signature=a6eef58d0e06bf7f6ff3d300f08a403725b242b832dbabd1a276f2b9cbd959ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA33RD4S%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGDnHR2Ev%2FCr7v8wi3ynLPqoAWwr3fIyGmQf5TquCKS0AiA0S0eFW%2BBx5jXa%2BrsOJm9jn8EfpnpAPOemH7TBztin9yr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMkvuX%2F33QkTmSV5qHKtwDesStTOaii%2F4UTbUazAtuIlQ9tc7Rz7VH0yS4HTjKzItmp4cWFFKcW8shmC7ZGomG93%2B64%2FLdZsFG8S96REbeMvs2mGEK7%2BLuYV0Bu6N7sEmF%2BJZiqBc5sW8Xn9Tv9So3tAHokIKR28MLasU4b37i1pUFBTOfMBcZ7Q99i64f6CnsxnjRsF8WLE1kuUXE4gjVBrC0uh3okqyjWOIwuwOOnaN804mtNtLitPB8LhXUycol1BcoFLZ8tKjIp86XnSEOjJNYmEwGwWv%2BX0KtZ8MMQUG%2BBYRlzFTL8dvDOH0K3jIO0667oSehP5qjrO0EfBSFx7ZfFJ04%2B27NFZ26vyljUHKKc1Yjb0d8zkO7fs4FB0HXwat7n15UZ9oW%2BBVqwVnQjE%2BE0IHYerHEGl%2BLAuaKNbdA1n%2FO0eL1wdTs7R0m1QSfIB%2F7wSaB2NZgYft7tuIoy94A646FbpgY%2BL2mAhzfxcOILOLe5GXbNQl%2BKNFmk8cEWvl20j%2F0AIAahyEn9ZIGYGMuhd5VAUSApQ5rY0LofE90a7HD1%2FWUsSzJdzvpAlf7QWexsdXNKKhXsMCx8tP4fyXzGiWvDRlWqvPexTM%2FwMMJdUBXFxSCoAa0Q1zT0cVGp1tqU1EInfw81i8wxKnK0wY6pgFzRq%2FXhMUgtdwER53LwpZK73hKRl2FahkRvhnp%2F6P4X4ooa5SlF8VhhWuLSC%2BmqPEYy3eNk54WnVJccskjYyVozFkwz3ApY%2FDbOj5IGEZ3Oj9eMUTA8TAh0yMvR9t7N7H8yZ8XaPmVmRZwOnZvCcRWZsFG5BeBodXeYL5qYS4hB2NsD8s3AizoN1jpagicUDG%2FB8d%2F8%2FhYs7oIaMKoywYlA%2F4246Ev&X-Amz-Signature=44a07f70b01ff83b5252de66782514e0b87063c9bdc0710b8867d7cddde58aef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSTS7RB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCh9Dm5DBi1F0hk00X5r%2BtwlwdFecBKUBcvEd%2BfmUJtdAIhAOQrtCXdCZ1tf%2Ffysdyt0MdhvMZ91%2FwdFLfNyAVaXjyaKv8DCBoQABoMNjM3NDIzMTgzODA1IgzBmtjwYCFTsThFNywq3AOvSKzUNeWOaKksezeHSV9gqApwPDUXWm7FLDd09Hc8%2Bj%2FiHSjUa05UJs7H8ns63dJQrXnSEROQ0T5NLLbIZQkBI%2FGpC9JJr7AVJHx38CDOTKuAb%2FGd99Ox5lBlD%2Fqf%2FN4asd0O43qcARxpcj8z%2FQuw1jglmzrQ5oE57dAp9EN7ZMlwy4%2Bx4NQSH1t9rQv4tg%2BqEA6QlDYnSE2udjjdjtdcqPWcf97n7CeKguSIogf4ocK94ouitWN%2FcXlfe%2Fi4m2Kv%2FzlyvC3JgxP97f2BKWYv0iRIu05j6WrCm03hErX66U6NekWk6YIYtPR2CBJZ5KDTGLh%2F4hNDY%2BR3JRZonnkD73xcsvf4Q%2FbomSEKq6JoJAwAMpzlK%2B9N2DyKcTzfcV6jsS9mvu8yNvRW7mZROU6O9cSPlNd4ugqcvSVCSfNGwmj73bf%2BQ0JxPUXAf5dWKalSdNSMoCQ3put%2BrE%2BUCzOGmJ9fHIAWKmQNVsE6dV1PmuyYGcmWpODXLyZ0bpjL81RZNVXFTz1Y6n%2BjiwHLRQBWnl7hbj3ftofoxnaIRduZVuyS60bdK3V1VeIDSM70BMdJVQXtw5aVQOLJP47OB4nQPIo8AkcPCl9JoE31IgxLgh5lGrVqg8ZzzIFj9TDRlMrTBjqkARpkBVyF5H0I4HxqwST6yuBvSH4l%2F3Ubhn%2FJmCB7eCFhTY556cnIWL8CVGQd7dX9gQN41I0EAGMEhvH%2FB4dIPuJHkPCfJupbLo%2Fq3tFrW%2FiMhTJ1ywQ%2BnalLwZHLJvkwHT1NvRJEcvsNsVD46NseiQMl8ETauvcf5T5hAfHUJXH5b3boZa5VgYHZZu0RIYgtMJfXqzieowXK4c46MHX%2FdLqLtsIg&X-Amz-Signature=7b3720d74cbf581c62c1c07847d73725276ebce5eba76f2cd33c34e34f6b9017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE6DHVNO%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCg7mTv5fuzPE2QlJBAHBtBuK6VKBal5xXUFbLuPbZacAIhAMVFMCJXsJhx56OoJd9KpR0g5TbQWRK9F5f%2ByFK9iDvzKv8DCBoQABoMNjM3NDIzMTgzODA1IgxJPqZkaHW3CYbA0bEq3APlFQLfrtD%2BsvWDuF4fnz1OICyllUVpFmaDJBkN7TTtykeBbysN1KlhDzIdn2gZgFob6r5zqT4%2Fza%2FLz9YnvCQ%2FYZd8uaoX1wjOhVAL%2FmrYuZpsg3RF25lF9QPYdPCiVDIOLF7A%2FltSpHzxY6HsqT%2BPyDyvPWphUB4f%2Fhm8WYSkyq7GVADq0%2BYTBteFlTARq6%2B8azQuut1ZkCAOtqT8i2xOmFWkIp7otbb0FLoJLT2I5hZw9SceY4PbtfoCUnskDRxBBmBZKkN08K%2BseIGszm7kfxt2Vqp%2F1Wn1fI0qEee2MWJHecw4F%2FZTtGqh7is9B9OJbLwKQYMA3f6Lr9F4Tx6A1NWguW9aoQaCyYsQpftaQH54l%2F6vzhd70k%2BKryTP1BOSJShk1zg2aHRooTPWKxUlIQo%2BG8Ymc136ZnHHFnndOnS2BuZahL2XnMPjVexkKJdC4V7rUc3GX7WSYjl9IHZBNKgK3XormNoGSvGj9FY2O5TQID1diTaRqNl7f4Q4F7M1ycAqvNfQvVJ3pbJ6Be9OiHM7OSfpbcNtGC8weQAp9xO9Be8wE6xM4g63vQLeL1kVWmTDoVGAwGODo%2FWnBKfm%2BeOlLcVscF5mIjPhZ3naopPG%2Bt2NNaisBuKQGTCplMrTBjqkAUCV7DsdWdF8BNF7b9anT22eyGcdeWZPu47dg%2Bn9fJjHi%2BYneCJGxcHX2iqNHoosiEtFCNsP0smZ6pNtpFFxjM3VVjGx%2FBvRFd4DcyG0uoTzBP8MNU2Bag1j5r91e96qiV5f1Q%2Fu%2BrZmETBijk3vab4Vj2bMBRcZltqYXIQ3a3lGZ%2FUCXI%2BWLsertpXgOcFhanAtsX0zQaxmvmft6x1E6vtws76O&X-Amz-Signature=6f8e3e5eccf1990a2552242924baceccc22b5bd62146b79e452954020229339d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSTS7RB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCh9Dm5DBi1F0hk00X5r%2BtwlwdFecBKUBcvEd%2BfmUJtdAIhAOQrtCXdCZ1tf%2Ffysdyt0MdhvMZ91%2FwdFLfNyAVaXjyaKv8DCBoQABoMNjM3NDIzMTgzODA1IgzBmtjwYCFTsThFNywq3AOvSKzUNeWOaKksezeHSV9gqApwPDUXWm7FLDd09Hc8%2Bj%2FiHSjUa05UJs7H8ns63dJQrXnSEROQ0T5NLLbIZQkBI%2FGpC9JJr7AVJHx38CDOTKuAb%2FGd99Ox5lBlD%2Fqf%2FN4asd0O43qcARxpcj8z%2FQuw1jglmzrQ5oE57dAp9EN7ZMlwy4%2Bx4NQSH1t9rQv4tg%2BqEA6QlDYnSE2udjjdjtdcqPWcf97n7CeKguSIogf4ocK94ouitWN%2FcXlfe%2Fi4m2Kv%2FzlyvC3JgxP97f2BKWYv0iRIu05j6WrCm03hErX66U6NekWk6YIYtPR2CBJZ5KDTGLh%2F4hNDY%2BR3JRZonnkD73xcsvf4Q%2FbomSEKq6JoJAwAMpzlK%2B9N2DyKcTzfcV6jsS9mvu8yNvRW7mZROU6O9cSPlNd4ugqcvSVCSfNGwmj73bf%2BQ0JxPUXAf5dWKalSdNSMoCQ3put%2BrE%2BUCzOGmJ9fHIAWKmQNVsE6dV1PmuyYGcmWpODXLyZ0bpjL81RZNVXFTz1Y6n%2BjiwHLRQBWnl7hbj3ftofoxnaIRduZVuyS60bdK3V1VeIDSM70BMdJVQXtw5aVQOLJP47OB4nQPIo8AkcPCl9JoE31IgxLgh5lGrVqg8ZzzIFj9TDRlMrTBjqkARpkBVyF5H0I4HxqwST6yuBvSH4l%2F3Ubhn%2FJmCB7eCFhTY556cnIWL8CVGQd7dX9gQN41I0EAGMEhvH%2FB4dIPuJHkPCfJupbLo%2Fq3tFrW%2FiMhTJ1ywQ%2BnalLwZHLJvkwHT1NvRJEcvsNsVD46NseiQMl8ETauvcf5T5hAfHUJXH5b3boZa5VgYHZZu0RIYgtMJfXqzieowXK4c46MHX%2FdLqLtsIg&X-Amz-Signature=af058b988ad65390e62810f068c8b04ed9be2ec0379af93d329d3fb71067a8ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5D62RJL%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICCVAUgRRmhT9tzkaVrcpM28X8cQJ5m1Da4HyAPYsGANAiEAxaAMhvQhGep7v2ArOR%2BTacRa8kUu6P84UJLh%2F%2FD0JIcq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDA2UgEzOG2ZNK%2FRfWircAzbEF2ojfrTNFiqLGIRMLeGU5YZTs4H56azYSmOK9TLv8PKAX5hPRy0yt0X8OXLYv%2FM3mRJaB2aLEOpPckJCFExxYiLmXwkZx7mJfLy7jo%2BAn6xUGjQgfJPnDOaMhZM5dUbnR35isbRq0h8%2FA1trAWJRz6FlX8c43Lh08KRpjLFyVPPCTCDxa7rt1W%2BsrAKd1zg3Q5U78NJ9QBiHgYwSIhBS2gS3hKeQAmKWUwALqMwmjta2aBmpJ%2BAW9RyXcBSY4tZXY09wFYt1X%2BbG4a1SoLT8CWmHZmzJMrXEZp34BoB7rG18SJ5JVPTKtKBhpeP3hR6sh4y52r%2BAhSNQm0LQzdhYOgHgyQDMABl6PsQvw3F4ulqpBfQ6xDgVhFN%2FTUwHqhUQxmCfLE6UQuOJx3hYvTMETm0THGjD%2FVn%2BaUARX5umYmwKgYCZj6RS15UBpXb9CfXjOs975YsXvDl%2Bd8zBB733REg83E1pEHANQI%2FTXXfH%2BWFHCWE2Hh%2B1xmgnIQTl2bvIKlGwUklwGYD8iCqRziW2AhEWnGI2X70LTEu%2BgxlarG9DrrF3W5E9E5xws%2BvmiYcdeE%2FTrz0i6ib7YvhHG84QRs4rZNWJkdtl4%2BEW0t7ed25RS5BFr%2F7%2FxlRMMMOXytMGOqUBoIWMVxY58z7jyHbUKBS4sjdbjfZyqnzE8%2BCrIP2JwVJxaMJSG0QJI9zG2xJ%2BJA9K9sySREEnV9TnKOgg%2BRqVbivXF6fvW0nIEoGcgQRJLhf1wOOrjEXTMHNLX7kpsDYCRvq4q9pRTsOIleYLjOq3W2%2Bx0qN1RL3eWq%2FYp%2F%2Fb60BVc5YkdRyw0HV6oAjx5XKIaRBqiTy%2BS0FG2PPQK32avtxkpKu2&X-Amz-Signature=d183536403614cdf9d665bea7b236160c09c43160816960c01346f6f276b32c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSTS7RB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCh9Dm5DBi1F0hk00X5r%2BtwlwdFecBKUBcvEd%2BfmUJtdAIhAOQrtCXdCZ1tf%2Ffysdyt0MdhvMZ91%2FwdFLfNyAVaXjyaKv8DCBoQABoMNjM3NDIzMTgzODA1IgzBmtjwYCFTsThFNywq3AOvSKzUNeWOaKksezeHSV9gqApwPDUXWm7FLDd09Hc8%2Bj%2FiHSjUa05UJs7H8ns63dJQrXnSEROQ0T5NLLbIZQkBI%2FGpC9JJr7AVJHx38CDOTKuAb%2FGd99Ox5lBlD%2Fqf%2FN4asd0O43qcARxpcj8z%2FQuw1jglmzrQ5oE57dAp9EN7ZMlwy4%2Bx4NQSH1t9rQv4tg%2BqEA6QlDYnSE2udjjdjtdcqPWcf97n7CeKguSIogf4ocK94ouitWN%2FcXlfe%2Fi4m2Kv%2FzlyvC3JgxP97f2BKWYv0iRIu05j6WrCm03hErX66U6NekWk6YIYtPR2CBJZ5KDTGLh%2F4hNDY%2BR3JRZonnkD73xcsvf4Q%2FbomSEKq6JoJAwAMpzlK%2B9N2DyKcTzfcV6jsS9mvu8yNvRW7mZROU6O9cSPlNd4ugqcvSVCSfNGwmj73bf%2BQ0JxPUXAf5dWKalSdNSMoCQ3put%2BrE%2BUCzOGmJ9fHIAWKmQNVsE6dV1PmuyYGcmWpODXLyZ0bpjL81RZNVXFTz1Y6n%2BjiwHLRQBWnl7hbj3ftofoxnaIRduZVuyS60bdK3V1VeIDSM70BMdJVQXtw5aVQOLJP47OB4nQPIo8AkcPCl9JoE31IgxLgh5lGrVqg8ZzzIFj9TDRlMrTBjqkARpkBVyF5H0I4HxqwST6yuBvSH4l%2F3Ubhn%2FJmCB7eCFhTY556cnIWL8CVGQd7dX9gQN41I0EAGMEhvH%2FB4dIPuJHkPCfJupbLo%2Fq3tFrW%2FiMhTJ1ywQ%2BnalLwZHLJvkwHT1NvRJEcvsNsVD46NseiQMl8ETauvcf5T5hAfHUJXH5b3boZa5VgYHZZu0RIYgtMJfXqzieowXK4c46MHX%2FdLqLtsIg&X-Amz-Signature=5495f304905964e837d9db3f3259eea839b85dff7d67436b3ce7769880d45839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVYJEHDL%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQD1Z7HHy3HYKGalAJgQychgHJ%2BWRiQz0KmixRqELByjDAIhAM8pAwgl4DeR3A9K80qY1bnyXWgCQXw8Gpm3pv3rAOsSKv8DCBoQABoMNjM3NDIzMTgzODA1IgyUcXYFcKSRoHl42n4q3APOJx5vJktlbkZTA%2FP1GIG8ikh1KTAml8rI2ECKJfygQN2RLFx6Ho5pnoQodIBy33ZOT7OaSiyUkDaDgzte9O%2FriaNsHg0iebTwGTeuhJXxZJaWYstjUGYWG3NCE3qZ%2Bzb1%2BwOk6Otp2XT60oHe2odv9gQQS2dLWn0Iu300JGFoL2i4%2FrR87hk9SaMfFigmsYJlMrhJ8flzCB8QI%2BYQZC91va5wqh%2Bt5uUy6b4vNQKXRFcxY56uSng4j7PYknx2dElyX7Z8DliRLq40bNWJIiOqtKL6PugoxDTlnJ52V9P9uOjhl5dsdI21NK08ry3hFLWd4mOBBfSIlPILKghPXvHY46pyzXEQoVhpp4Uo7jZFeZQh1pmYOb903ITnZMkO4NN6V9feefCPk7Iwxh%2BQKr1ZlY3D7%2FrReLq0jk9jI7FUIOkeiRCiTOvYKaVxxDLtIazdequ7w2cr0SQQ3nq787Lm56gacY46R8mPsVX%2F3%2FXuarHk2obsx4VuU%2FvXguMZJycf8rMcjZqNQJ%2BLDR8gXTaygyz3iacC5LtlDrMqeOQrwjxUNQZUUEt0OBAbH0RNP%2BAsftLHdHxBGXTs2xwHuFpExfgdpMftf5%2F%2BjA3AKy2hWoA1R6qUIlO%2FQWaSHjC6lsrTBjqkAV8FO04SzQaqm4wWwPID7e7rUOReTfB6lCrAlzZJo1bbo%2FKXEgdyaReO4CXEmcLgZxXISSWdNJdviCHqjK8Ww%2FUS%2FFnxEujimKrVzvfOVZyAJEaXYv%2FsX%2FsOeTMfFJcNcIRrZl6UVapA7KS2JR0ea%2FlqJONlHaiAWZw2Fod%2FGjjPdAIH9FR6Y%2FMq4Uz8l0JMJNdoMK%2FNlCPQ4o0XxLgc2VnCPp7m&X-Amz-Signature=1d77d6e88ae65d97e27059ade7b99e03a74975029f5008aca1077dd1e871a198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSTS7RB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCh9Dm5DBi1F0hk00X5r%2BtwlwdFecBKUBcvEd%2BfmUJtdAIhAOQrtCXdCZ1tf%2Ffysdyt0MdhvMZ91%2FwdFLfNyAVaXjyaKv8DCBoQABoMNjM3NDIzMTgzODA1IgzBmtjwYCFTsThFNywq3AOvSKzUNeWOaKksezeHSV9gqApwPDUXWm7FLDd09Hc8%2Bj%2FiHSjUa05UJs7H8ns63dJQrXnSEROQ0T5NLLbIZQkBI%2FGpC9JJr7AVJHx38CDOTKuAb%2FGd99Ox5lBlD%2Fqf%2FN4asd0O43qcARxpcj8z%2FQuw1jglmzrQ5oE57dAp9EN7ZMlwy4%2Bx4NQSH1t9rQv4tg%2BqEA6QlDYnSE2udjjdjtdcqPWcf97n7CeKguSIogf4ocK94ouitWN%2FcXlfe%2Fi4m2Kv%2FzlyvC3JgxP97f2BKWYv0iRIu05j6WrCm03hErX66U6NekWk6YIYtPR2CBJZ5KDTGLh%2F4hNDY%2BR3JRZonnkD73xcsvf4Q%2FbomSEKq6JoJAwAMpzlK%2B9N2DyKcTzfcV6jsS9mvu8yNvRW7mZROU6O9cSPlNd4ugqcvSVCSfNGwmj73bf%2BQ0JxPUXAf5dWKalSdNSMoCQ3put%2BrE%2BUCzOGmJ9fHIAWKmQNVsE6dV1PmuyYGcmWpODXLyZ0bpjL81RZNVXFTz1Y6n%2BjiwHLRQBWnl7hbj3ftofoxnaIRduZVuyS60bdK3V1VeIDSM70BMdJVQXtw5aVQOLJP47OB4nQPIo8AkcPCl9JoE31IgxLgh5lGrVqg8ZzzIFj9TDRlMrTBjqkARpkBVyF5H0I4HxqwST6yuBvSH4l%2F3Ubhn%2FJmCB7eCFhTY556cnIWL8CVGQd7dX9gQN41I0EAGMEhvH%2FB4dIPuJHkPCfJupbLo%2Fq3tFrW%2FiMhTJ1ywQ%2BnalLwZHLJvkwHT1NvRJEcvsNsVD46NseiQMl8ETauvcf5T5hAfHUJXH5b3boZa5VgYHZZu0RIYgtMJfXqzieowXK4c46MHX%2FdLqLtsIg&X-Amz-Signature=461b9952b8965778beb1520fb3ecdc1348976c997f69500e64c030a185ea023c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OZ4FFTN%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIFqg0T6h8WJFboDz%2FJpXB50Ogzdy5Lia8xuLB%2BMOAw9WAiBjFFz0pJijjlma3gqPOoRkJkVmU0lcuQ7KLy9wyunITir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMc%2FnpzlC5stHwK8Z7KtwDAZyJv0qHR8ASxESUeTOGVIjiHjpmcRvovFURtLb6eRGUfWXQmGex81gvbsdfmp0ADUDebUwKTPjxeZFBLqcSB5rtTXiieJkuo4uGMu2Gl9P7frSF2CqRwSijcz7hvg6MAu1bvRdWk9KOnIsZFnMrlQ1lMr71ml7vcb6KfT%2BUI0%2B1nQAswnLi4FwPpISTSffvy5hRQQvjZCvBn%2BfJuyw7V6PAj0yh1R%2Bdr8w6JU5tryCd1zZtaa2K4GFoXclgu3M%2Bx0lFonV6QxqjK8BkmCjfyqMWAZX94GuBRdpuSJGDDMookSEIsdLKbxu3d8Zu2%2FvhmnmwoGdW7%2FPZ3tJqE9Sxf2Y%2FGnI4xjTweJ1%2FslveR7fUVBETqBU44MfgbXtdyt6vexAJ1t2Jb%2FBzH5zV1GO7MyvKkgLVXktejO75F0WJLyM42bKTiDM4HwaD9b%2BTosV0%2Btu1nDySBjGkRC7SXeQbjnj5h8BdyYcAm5f3yLeyCsIR5HR95gpXmRsQp3fYZgpJb2oL1kFnv%2FvuGVRPCrlHVUQ6YRkqClwyuX72anFsocHczwZE7HI3Aj6VUt63Wq%2BDvGiqHjqLSbRE6UMxhN7i2SKiEt%2F8dthZT21pIyul3M4CmWVDFz25WaqZu%2FQwx5bK0wY6pgG3A0hpCpczR5%2FRgNpCRfCqNxNWc67rJZHn5cE68LItcQzwrIQFRrb8dhrnrGoBcFWy%2By881P%2BOIGn557QAMVp5S%2FQyLPBOzBSTYb6o1C7NuQGl8efUOABFUE6%2BThpa4sRM4RkuNmCKB8h1JCP3Axiylhqw5SZ1aaWbK8mN%2BonAnPeS1lgGfXQWbcv70cXhqh1sHpN4k9blvoYIsbDm%2BNOk%2FCZWlKnl&X-Amz-Signature=18f8c77f2c6f45925e31274a0acfa5c147393d60f5f5e1581fe4171f9c79a5e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KQ3GRE7%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCICqaN%2BuHMSXV0pZPvuvFeVNbYgs2lTJooIfOfoENrQnDAiEA45I4PWXXxlxdFWuILNivAMtPA%2BX7eqJ926yziTzih9kq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDMIueRcgCC6Av0fgsCrcAzsATz3CgDg2mvis2mX6E5rR9EtNb3vE1Zew4ViuqddqJS9dYGDB%2BzWG2gqtx%2BFNQW%2Fg56xtGttF13LKP85aEFb32hx3WHTl9XM%2F1YETu8RARNav7EOMTVXorzgPjZtwS%2FkjDg1lNNC3VVmKQ9Pf9gjSLDJo6zbBEtxxxRn0hwFT%2B8ImxNyy3u6APNaioWuQoLAL%2FQda6VY%2FGY%2B5T3NFZ8Sui2aBjd9NPJCvfrfupTj05k9YK%2FP6Od%2BKxYaxE4G8ITBlJVrZOYCP6OE8nt0%2BJHjXWR%2FzQKOV96Y6aYSUq7R65tQMwm0laQQeboqp0wP1%2FrSM%2BwUw1Yt5IQM8Qb5zQJg0X4Fc2ZYKX%2FuHBG7bm7X1qTiit2OE0MAYl7WmcAdtjb9M0Cc171lpxp35sH0eB9DWpqHQASru%2F0zJ6557jBYbyZCyLdV9BbDrU2EarKGKmlmOTuwl5XS3GsLKLQXKxSfkA1f6n4TBhJXxo1rUL43RKA83g6%2FD9%2BUzWHqQbocejVbm9iWX%2BaKsxcLaVkJE8LBYF9ADVTgEsAHDkUIXvWJEAS1p3fi9TuBLtWK8c%2F4dCOXzMqbwsMpd3MwIntnJVsIERh36RnbyUgBis9sGI8OdcmobbIv5cXKG7ZQVMLuUytMGOqUBypy4x9VXnSYYF15ueKjkfC%2FteFmI9CG3FpEFbpeFv3%2BUw%2BKPmz6llYwnVEbOD4FuXk6BZhJSD3vJxkfTJT%2FEcja%2BgMQhs2glDMYOuJsc5WXowyHAWj8U3UlWUQ8Ofvojy779o5L8CAXcZ7iQ%2Bh21%2FsXkxTW5gLq0SdQ4bCHFKtGqzh9v5W7T9GdfqYzi%2BSw8EZdYPzXVtK%2B3wYycmrBYqcWs%2Fx2Y&X-Amz-Signature=9163deb5cafa30bf4180b3bf9bee7608c3aef6c181797afb93248e6bcb965d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQENCISS%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCHWgqF72jb6JPXJF0pTKKH0QN1XElkKv3Dd0AOT7n5DQIhALprSY8SZX%2BqeOH0ctsTg9tMWx54zrd7sB0DcTksjXKMKv8DCBoQABoMNjM3NDIzMTgzODA1Igx9viWBdLkJmwDc4DIq3AOZqv5VomfwJmwPQXFmlPz7R6lz2KhGzs0tZvjb4wHGv5iFLj4YBEOzxcTbzQ%2BbXKDPDzcY1tnt7BouH%2Bk0QG7JDRMBlj9ryG2r6XaX8MkTWSr%2BERx2mteUxv9JYNQRWBmLFrD9IHbSMeW2B0AX0Lb3fFKWfYtNKN5ORa6jqSn7DibMwqhpToAdabYSrEAz8vZ7Fe82gwhPbMu1xi7gHyEw5REb%2FjAZvi47HwjaaesJO8EtewGrl2FmX6skzhdIlFknKG54WAYuoD77zzJbZnAlWqlUJYXI6zR4NRcDEHvSvBm1XGfZrGWB74WKi5VVrt%2BhwwW9WZE4XTxQWK87lOx57%2BLdB%2B7eWq5NCbzGhVu1k%2BuzdXHy%2B6pEKlfyZ67JbnhfGLK%2FQd93WVRdDyqG30GFjtRlgWws22228sCGrInXUyQujIwxCut%2BHUawrNq3BFxPIuGzCjijjNrJCghZkvKfar4PX3H02ii2z92ipZFPqrBnmPPbX3lMEprS0o0ohobzxsoCZ6t95BTNzCMVvSjZvJg%2FAKh3npRzcZNvOYtdCSyyfV4aEwUDqkI6HkliYIq4ZSwtafYYRUo6%2BsE0I9WHkDL0T1MwRt8IMbAGsnIy1KFuyG5eOMQBUA2bLTDrlMrTBjqkAVOFHlIJK0TrSRB%2BnAD6YlurJaxtRn4fQ5pH8oWe7ao3i1Grf3qXD9CS6YiuF6SCnnwqrFRc4qeEZuNM%2ByqlzoXvnFpVbb5G1mbPjd%2BDhluUCxVwmb%2F%2FoYu%2FMBgcqAo%2FQEAbQj5uqdZzX2PyS%2F%2FSNM%2FqDb4Da8B2RtK2DAZshFBRaaRbxu0afvHCunOiWZshHPvrb6qvc7DS%2F3VOAFVp368A6tqg&X-Amz-Signature=00e8189d1efa99becd71b09205f9cd4a5eac59339ebb19a25904c181c9858735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSTS7RB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCh9Dm5DBi1F0hk00X5r%2BtwlwdFecBKUBcvEd%2BfmUJtdAIhAOQrtCXdCZ1tf%2Ffysdyt0MdhvMZ91%2FwdFLfNyAVaXjyaKv8DCBoQABoMNjM3NDIzMTgzODA1IgzBmtjwYCFTsThFNywq3AOvSKzUNeWOaKksezeHSV9gqApwPDUXWm7FLDd09Hc8%2Bj%2FiHSjUa05UJs7H8ns63dJQrXnSEROQ0T5NLLbIZQkBI%2FGpC9JJr7AVJHx38CDOTKuAb%2FGd99Ox5lBlD%2Fqf%2FN4asd0O43qcARxpcj8z%2FQuw1jglmzrQ5oE57dAp9EN7ZMlwy4%2Bx4NQSH1t9rQv4tg%2BqEA6QlDYnSE2udjjdjtdcqPWcf97n7CeKguSIogf4ocK94ouitWN%2FcXlfe%2Fi4m2Kv%2FzlyvC3JgxP97f2BKWYv0iRIu05j6WrCm03hErX66U6NekWk6YIYtPR2CBJZ5KDTGLh%2F4hNDY%2BR3JRZonnkD73xcsvf4Q%2FbomSEKq6JoJAwAMpzlK%2B9N2DyKcTzfcV6jsS9mvu8yNvRW7mZROU6O9cSPlNd4ugqcvSVCSfNGwmj73bf%2BQ0JxPUXAf5dWKalSdNSMoCQ3put%2BrE%2BUCzOGmJ9fHIAWKmQNVsE6dV1PmuyYGcmWpODXLyZ0bpjL81RZNVXFTz1Y6n%2BjiwHLRQBWnl7hbj3ftofoxnaIRduZVuyS60bdK3V1VeIDSM70BMdJVQXtw5aVQOLJP47OB4nQPIo8AkcPCl9JoE31IgxLgh5lGrVqg8ZzzIFj9TDRlMrTBjqkARpkBVyF5H0I4HxqwST6yuBvSH4l%2F3Ubhn%2FJmCB7eCFhTY556cnIWL8CVGQd7dX9gQN41I0EAGMEhvH%2FB4dIPuJHkPCfJupbLo%2Fq3tFrW%2FiMhTJ1ywQ%2BnalLwZHLJvkwHT1NvRJEcvsNsVD46NseiQMl8ETauvcf5T5hAfHUJXH5b3boZa5VgYHZZu0RIYgtMJfXqzieowXK4c46MHX%2FdLqLtsIg&X-Amz-Signature=f43c892cb216dbed63812fd04967c220fd0ea84e4327b810db886126e4365764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSTS7RB%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCh9Dm5DBi1F0hk00X5r%2BtwlwdFecBKUBcvEd%2BfmUJtdAIhAOQrtCXdCZ1tf%2Ffysdyt0MdhvMZ91%2FwdFLfNyAVaXjyaKv8DCBoQABoMNjM3NDIzMTgzODA1IgzBmtjwYCFTsThFNywq3AOvSKzUNeWOaKksezeHSV9gqApwPDUXWm7FLDd09Hc8%2Bj%2FiHSjUa05UJs7H8ns63dJQrXnSEROQ0T5NLLbIZQkBI%2FGpC9JJr7AVJHx38CDOTKuAb%2FGd99Ox5lBlD%2Fqf%2FN4asd0O43qcARxpcj8z%2FQuw1jglmzrQ5oE57dAp9EN7ZMlwy4%2Bx4NQSH1t9rQv4tg%2BqEA6QlDYnSE2udjjdjtdcqPWcf97n7CeKguSIogf4ocK94ouitWN%2FcXlfe%2Fi4m2Kv%2FzlyvC3JgxP97f2BKWYv0iRIu05j6WrCm03hErX66U6NekWk6YIYtPR2CBJZ5KDTGLh%2F4hNDY%2BR3JRZonnkD73xcsvf4Q%2FbomSEKq6JoJAwAMpzlK%2B9N2DyKcTzfcV6jsS9mvu8yNvRW7mZROU6O9cSPlNd4ugqcvSVCSfNGwmj73bf%2BQ0JxPUXAf5dWKalSdNSMoCQ3put%2BrE%2BUCzOGmJ9fHIAWKmQNVsE6dV1PmuyYGcmWpODXLyZ0bpjL81RZNVXFTz1Y6n%2BjiwHLRQBWnl7hbj3ftofoxnaIRduZVuyS60bdK3V1VeIDSM70BMdJVQXtw5aVQOLJP47OB4nQPIo8AkcPCl9JoE31IgxLgh5lGrVqg8ZzzIFj9TDRlMrTBjqkARpkBVyF5H0I4HxqwST6yuBvSH4l%2F3Ubhn%2FJmCB7eCFhTY556cnIWL8CVGQd7dX9gQN41I0EAGMEhvH%2FB4dIPuJHkPCfJupbLo%2Fq3tFrW%2FiMhTJ1ywQ%2BnalLwZHLJvkwHT1NvRJEcvsNsVD46NseiQMl8ETauvcf5T5hAfHUJXH5b3boZa5VgYHZZu0RIYgtMJfXqzieowXK4c46MHX%2FdLqLtsIg&X-Amz-Signature=18f193e0f9711cd4f4a17b0b50da150e847b5d354c84dba0380c14687e871d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP663HSR%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIGYFZDstVXkOvykaPm%2BXuVbOIjE9TeWGmSiCJmA3MFddAiBMHnigCuBR%2Fd8xtjxn0mLYPzSVxkZzGchsx9kpA6GYaSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMvxjzHzSwhJrZiKikKtwD42oXxdLFKKTJW7lLwFuU11j%2BafRN90rHgtlaS9UVXqoleNMFXOgT6H0E%2BDF%2Bm5h21elRiCmjFwTmOPQZRQn891F8ApVeRIuiRbdCGoZBAPCgWwWc1nzXnipUSeLTTWzTAI2lXuGsm4zarXZgAYUvoxpPb%2FjzFskC8Gth6CluNg0bo0bqUNeQs0MsQPkZ0QnV0%2BRhCSGa7Uw5TCDcYNglDPpDZrAAW%2BHfAnF2Eszcz2NR0XSB7eafGPUJlDGHyIRGkFf7oTZwIpEu6XNvQKpL5hRVM6inryf3izGvNeD6FmcEUI8Il8d%2BosYeP%2B%2FsOOGa9ylztpeQof6Sc99Jaa2EynGkIkPA0kRbvSicb9QBQdF5ngJnQukaCGWZxSesdgStXnOZ2W6ypOjgLDKkAklzA4D8shx4ITe%2FBKGgkkJIPO0GKUW0ECBRNXWcVIt2PqdNtm8kMI%2BxNFN8181PUptM5JhRFMwCETO%2FZxHXyAxDgoG5SveZko8NTs%2FX5%2BfdbJnIxRlvDKvAo2RpGnraN%2F45n4yA5KQygNsnt0uiiOWCAOltiChx3ZxAPioU2dcwTvimH%2F5o%2FAQoV1BfE5be14Fd0Qtipa06l0jBlkNOmTsZyBpG2i%2Fq3oZnOtOfYBMw7JTK0wY6pgGxc7joge%2BVneb9h129EO4f%2FfdwSlfvTGFieU8biiz9Xj8ymeZD6A2uvHIxnsHNxjxs1Yry4QnSF2BpgJoOPOnE5vIh96bYuaR0alMDBq5QZ7omXhP1fVLPaceiwQwldGdqEuHDMM1%2F7dJqIGntYdY4glIkiTT%2FIU8i4h92A%2FEFkMgqWEIONl1m6tebTP6ynCK%2F%2B59xbobrbzKOgclVvTZxs8XFkssy&X-Amz-Signature=b737b714c0636dba53bb58e2229d1c9683b899697926f0c5c21601bf85978385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP663HSR%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIGYFZDstVXkOvykaPm%2BXuVbOIjE9TeWGmSiCJmA3MFddAiBMHnigCuBR%2Fd8xtjxn0mLYPzSVxkZzGchsx9kpA6GYaSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMvxjzHzSwhJrZiKikKtwD42oXxdLFKKTJW7lLwFuU11j%2BafRN90rHgtlaS9UVXqoleNMFXOgT6H0E%2BDF%2Bm5h21elRiCmjFwTmOPQZRQn891F8ApVeRIuiRbdCGoZBAPCgWwWc1nzXnipUSeLTTWzTAI2lXuGsm4zarXZgAYUvoxpPb%2FjzFskC8Gth6CluNg0bo0bqUNeQs0MsQPkZ0QnV0%2BRhCSGa7Uw5TCDcYNglDPpDZrAAW%2BHfAnF2Eszcz2NR0XSB7eafGPUJlDGHyIRGkFf7oTZwIpEu6XNvQKpL5hRVM6inryf3izGvNeD6FmcEUI8Il8d%2BosYeP%2B%2FsOOGa9ylztpeQof6Sc99Jaa2EynGkIkPA0kRbvSicb9QBQdF5ngJnQukaCGWZxSesdgStXnOZ2W6ypOjgLDKkAklzA4D8shx4ITe%2FBKGgkkJIPO0GKUW0ECBRNXWcVIt2PqdNtm8kMI%2BxNFN8181PUptM5JhRFMwCETO%2FZxHXyAxDgoG5SveZko8NTs%2FX5%2BfdbJnIxRlvDKvAo2RpGnraN%2F45n4yA5KQygNsnt0uiiOWCAOltiChx3ZxAPioU2dcwTvimH%2F5o%2FAQoV1BfE5be14Fd0Qtipa06l0jBlkNOmTsZyBpG2i%2Fq3oZnOtOfYBMw7JTK0wY6pgGxc7joge%2BVneb9h129EO4f%2FfdwSlfvTGFieU8biiz9Xj8ymeZD6A2uvHIxnsHNxjxs1Yry4QnSF2BpgJoOPOnE5vIh96bYuaR0alMDBq5QZ7omXhP1fVLPaceiwQwldGdqEuHDMM1%2F7dJqIGntYdY4glIkiTT%2FIU8i4h92A%2FEFkMgqWEIONl1m6tebTP6ynCK%2F%2B59xbobrbzKOgclVvTZxs8XFkssy&X-Amz-Signature=748b19212256a37ddbcb83f81ca1ec518b6eb70c4c705e922c18293b8edb3cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP663HSR%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIGYFZDstVXkOvykaPm%2BXuVbOIjE9TeWGmSiCJmA3MFddAiBMHnigCuBR%2Fd8xtjxn0mLYPzSVxkZzGchsx9kpA6GYaSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMvxjzHzSwhJrZiKikKtwD42oXxdLFKKTJW7lLwFuU11j%2BafRN90rHgtlaS9UVXqoleNMFXOgT6H0E%2BDF%2Bm5h21elRiCmjFwTmOPQZRQn891F8ApVeRIuiRbdCGoZBAPCgWwWc1nzXnipUSeLTTWzTAI2lXuGsm4zarXZgAYUvoxpPb%2FjzFskC8Gth6CluNg0bo0bqUNeQs0MsQPkZ0QnV0%2BRhCSGa7Uw5TCDcYNglDPpDZrAAW%2BHfAnF2Eszcz2NR0XSB7eafGPUJlDGHyIRGkFf7oTZwIpEu6XNvQKpL5hRVM6inryf3izGvNeD6FmcEUI8Il8d%2BosYeP%2B%2FsOOGa9ylztpeQof6Sc99Jaa2EynGkIkPA0kRbvSicb9QBQdF5ngJnQukaCGWZxSesdgStXnOZ2W6ypOjgLDKkAklzA4D8shx4ITe%2FBKGgkkJIPO0GKUW0ECBRNXWcVIt2PqdNtm8kMI%2BxNFN8181PUptM5JhRFMwCETO%2FZxHXyAxDgoG5SveZko8NTs%2FX5%2BfdbJnIxRlvDKvAo2RpGnraN%2F45n4yA5KQygNsnt0uiiOWCAOltiChx3ZxAPioU2dcwTvimH%2F5o%2FAQoV1BfE5be14Fd0Qtipa06l0jBlkNOmTsZyBpG2i%2Fq3oZnOtOfYBMw7JTK0wY6pgGxc7joge%2BVneb9h129EO4f%2FfdwSlfvTGFieU8biiz9Xj8ymeZD6A2uvHIxnsHNxjxs1Yry4QnSF2BpgJoOPOnE5vIh96bYuaR0alMDBq5QZ7omXhP1fVLPaceiwQwldGdqEuHDMM1%2F7dJqIGntYdY4glIkiTT%2FIU8i4h92A%2FEFkMgqWEIONl1m6tebTP6ynCK%2F%2B59xbobrbzKOgclVvTZxs8XFkssy&X-Amz-Signature=08185ba41af9757732307d719751a6d66bc640842e362826b36b322cd55ae155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP663HSR%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIGYFZDstVXkOvykaPm%2BXuVbOIjE9TeWGmSiCJmA3MFddAiBMHnigCuBR%2Fd8xtjxn0mLYPzSVxkZzGchsx9kpA6GYaSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMvxjzHzSwhJrZiKikKtwD42oXxdLFKKTJW7lLwFuU11j%2BafRN90rHgtlaS9UVXqoleNMFXOgT6H0E%2BDF%2Bm5h21elRiCmjFwTmOPQZRQn891F8ApVeRIuiRbdCGoZBAPCgWwWc1nzXnipUSeLTTWzTAI2lXuGsm4zarXZgAYUvoxpPb%2FjzFskC8Gth6CluNg0bo0bqUNeQs0MsQPkZ0QnV0%2BRhCSGa7Uw5TCDcYNglDPpDZrAAW%2BHfAnF2Eszcz2NR0XSB7eafGPUJlDGHyIRGkFf7oTZwIpEu6XNvQKpL5hRVM6inryf3izGvNeD6FmcEUI8Il8d%2BosYeP%2B%2FsOOGa9ylztpeQof6Sc99Jaa2EynGkIkPA0kRbvSicb9QBQdF5ngJnQukaCGWZxSesdgStXnOZ2W6ypOjgLDKkAklzA4D8shx4ITe%2FBKGgkkJIPO0GKUW0ECBRNXWcVIt2PqdNtm8kMI%2BxNFN8181PUptM5JhRFMwCETO%2FZxHXyAxDgoG5SveZko8NTs%2FX5%2BfdbJnIxRlvDKvAo2RpGnraN%2F45n4yA5KQygNsnt0uiiOWCAOltiChx3ZxAPioU2dcwTvimH%2F5o%2FAQoV1BfE5be14Fd0Qtipa06l0jBlkNOmTsZyBpG2i%2Fq3oZnOtOfYBMw7JTK0wY6pgGxc7joge%2BVneb9h129EO4f%2FfdwSlfvTGFieU8biiz9Xj8ymeZD6A2uvHIxnsHNxjxs1Yry4QnSF2BpgJoOPOnE5vIh96bYuaR0alMDBq5QZ7omXhP1fVLPaceiwQwldGdqEuHDMM1%2F7dJqIGntYdY4glIkiTT%2FIU8i4h92A%2FEFkMgqWEIONl1m6tebTP6ynCK%2F%2B59xbobrbzKOgclVvTZxs8XFkssy&X-Amz-Signature=38d47fbcf5fcb99b75795378ec13d00c32ae5b9cd60166b06a53936449d930dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UAOFOCU%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCLbdlXZqPxBYBxDjNExdS6iRCGtyV6ogImkFUcdWdSOQIhAN%2FtRaiOr5cBHsxCby5jb%2BQo24Z4Jr92os1XAeTPojHKKv8DCBoQABoMNjM3NDIzMTgzODA1IgzgRwt2MX7nk5kmuzkq3AOW5lgdoob6jPokZjnJpkjmKJEmXWFE2tiR%2FKHztULW4Fc%2Fq2tt1rhh%2BHTJnKwzMg49sk0tczHghayFwKFtLY9r4kwG2yCj8%2BS88AFGvGGHJFPEneEMuz5BlzxkAxD0BsukCDHm4q7NEY4ZVh%2BdCmitkcqo8sZjeqV2svXMJQNSS1BpwT8Y6ygNBljMAzTDW8zRFSKncYtWojTRTKznIVaITzwzGl2tKPdCuJftI9YkWd72DyyRT4jOlS16qqBjtzvbVyqDbHC%2BkwXb3EUauPtBg2fNeFfUJ3znNtZWTFmjTsXGj8%2FfqBziscmelJyO281hF5Ik2AcTDoD4QWhkIGTi203P61Gehihw2yxnIyO3Koz3yuVuhK8%2FgyaW4rQXVNYfl7QND9Lnsfyw8z533%2FLwjCWS0NOKW%2BKsMqJOOJIaLpuLCB%2Bu9n6BdeDNGjWyDbbPaCXMZFtiKrjAuZGu7W2DXLfylIiEDXC1SX1orU81dvQi4d%2FglOiKlHoYi8iQWrrag8fs%2BmWcnZdZ5OEVJNVlhmwBTh62sJ8yrbsqEGRDcpI%2F0oYedNCk371szHAPeyyC6KMxCCL8gXQfFjDmZ2Z9Y2qXovNnm2PtNFy3GA2cHxRgEouuPiSUPpqn9DC3lsrTBjqkATWOsrsL2IK%2FKvQ2mvEgwzVDYOwIELS%2BK5qPjhFNGQUxpu%2BgcVc72zT5EpWFjUaj%2FYQ4CX2VMGqfFuD9VnNm3myxdOCKMqBu7d0%2FwpN6tvWHAC5ns9aI%2BhfOf%2F671GUtAVCsFs%2FpxBtpRhEWeqSZd%2F9o6rsfStQp5rsYfyimf4wSw%2FQpULscLabqaCAASX8gnzSZkTcAqtyKlHyVQqSjIdj5btSw&X-Amz-Signature=d05d6c3045effd6c71a8672ec77e5cecb564993af3a5b4b864123cfd39f00580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP663HSR%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIGYFZDstVXkOvykaPm%2BXuVbOIjE9TeWGmSiCJmA3MFddAiBMHnigCuBR%2Fd8xtjxn0mLYPzSVxkZzGchsx9kpA6GYaSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMvxjzHzSwhJrZiKikKtwD42oXxdLFKKTJW7lLwFuU11j%2BafRN90rHgtlaS9UVXqoleNMFXOgT6H0E%2BDF%2Bm5h21elRiCmjFwTmOPQZRQn891F8ApVeRIuiRbdCGoZBAPCgWwWc1nzXnipUSeLTTWzTAI2lXuGsm4zarXZgAYUvoxpPb%2FjzFskC8Gth6CluNg0bo0bqUNeQs0MsQPkZ0QnV0%2BRhCSGa7Uw5TCDcYNglDPpDZrAAW%2BHfAnF2Eszcz2NR0XSB7eafGPUJlDGHyIRGkFf7oTZwIpEu6XNvQKpL5hRVM6inryf3izGvNeD6FmcEUI8Il8d%2BosYeP%2B%2FsOOGa9ylztpeQof6Sc99Jaa2EynGkIkPA0kRbvSicb9QBQdF5ngJnQukaCGWZxSesdgStXnOZ2W6ypOjgLDKkAklzA4D8shx4ITe%2FBKGgkkJIPO0GKUW0ECBRNXWcVIt2PqdNtm8kMI%2BxNFN8181PUptM5JhRFMwCETO%2FZxHXyAxDgoG5SveZko8NTs%2FX5%2BfdbJnIxRlvDKvAo2RpGnraN%2F45n4yA5KQygNsnt0uiiOWCAOltiChx3ZxAPioU2dcwTvimH%2F5o%2FAQoV1BfE5be14Fd0Qtipa06l0jBlkNOmTsZyBpG2i%2Fq3oZnOtOfYBMw7JTK0wY6pgGxc7joge%2BVneb9h129EO4f%2FfdwSlfvTGFieU8biiz9Xj8ymeZD6A2uvHIxnsHNxjxs1Yry4QnSF2BpgJoOPOnE5vIh96bYuaR0alMDBq5QZ7omXhP1fVLPaceiwQwldGdqEuHDMM1%2F7dJqIGntYdY4glIkiTT%2FIU8i4h92A%2FEFkMgqWEIONl1m6tebTP6ynCK%2F%2B59xbobrbzKOgclVvTZxs8XFkssy&X-Amz-Signature=dc107fe536c76c01c3a741299ed24e466a171236037d4342073f90974d48258f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP663HSR%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIGYFZDstVXkOvykaPm%2BXuVbOIjE9TeWGmSiCJmA3MFddAiBMHnigCuBR%2Fd8xtjxn0mLYPzSVxkZzGchsx9kpA6GYaSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMvxjzHzSwhJrZiKikKtwD42oXxdLFKKTJW7lLwFuU11j%2BafRN90rHgtlaS9UVXqoleNMFXOgT6H0E%2BDF%2Bm5h21elRiCmjFwTmOPQZRQn891F8ApVeRIuiRbdCGoZBAPCgWwWc1nzXnipUSeLTTWzTAI2lXuGsm4zarXZgAYUvoxpPb%2FjzFskC8Gth6CluNg0bo0bqUNeQs0MsQPkZ0QnV0%2BRhCSGa7Uw5TCDcYNglDPpDZrAAW%2BHfAnF2Eszcz2NR0XSB7eafGPUJlDGHyIRGkFf7oTZwIpEu6XNvQKpL5hRVM6inryf3izGvNeD6FmcEUI8Il8d%2BosYeP%2B%2FsOOGa9ylztpeQof6Sc99Jaa2EynGkIkPA0kRbvSicb9QBQdF5ngJnQukaCGWZxSesdgStXnOZ2W6ypOjgLDKkAklzA4D8shx4ITe%2FBKGgkkJIPO0GKUW0ECBRNXWcVIt2PqdNtm8kMI%2BxNFN8181PUptM5JhRFMwCETO%2FZxHXyAxDgoG5SveZko8NTs%2FX5%2BfdbJnIxRlvDKvAo2RpGnraN%2F45n4yA5KQygNsnt0uiiOWCAOltiChx3ZxAPioU2dcwTvimH%2F5o%2FAQoV1BfE5be14Fd0Qtipa06l0jBlkNOmTsZyBpG2i%2Fq3oZnOtOfYBMw7JTK0wY6pgGxc7joge%2BVneb9h129EO4f%2FfdwSlfvTGFieU8biiz9Xj8ymeZD6A2uvHIxnsHNxjxs1Yry4QnSF2BpgJoOPOnE5vIh96bYuaR0alMDBq5QZ7omXhP1fVLPaceiwQwldGdqEuHDMM1%2F7dJqIGntYdY4glIkiTT%2FIU8i4h92A%2FEFkMgqWEIONl1m6tebTP6ynCK%2F%2B59xbobrbzKOgclVvTZxs8XFkssy&X-Amz-Signature=7d611d91762a98134a27dd65fc0f1cdf55ac01117db4a91413add69ea885fd3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP663HSR%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIGYFZDstVXkOvykaPm%2BXuVbOIjE9TeWGmSiCJmA3MFddAiBMHnigCuBR%2Fd8xtjxn0mLYPzSVxkZzGchsx9kpA6GYaSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMvxjzHzSwhJrZiKikKtwD42oXxdLFKKTJW7lLwFuU11j%2BafRN90rHgtlaS9UVXqoleNMFXOgT6H0E%2BDF%2Bm5h21elRiCmjFwTmOPQZRQn891F8ApVeRIuiRbdCGoZBAPCgWwWc1nzXnipUSeLTTWzTAI2lXuGsm4zarXZgAYUvoxpPb%2FjzFskC8Gth6CluNg0bo0bqUNeQs0MsQPkZ0QnV0%2BRhCSGa7Uw5TCDcYNglDPpDZrAAW%2BHfAnF2Eszcz2NR0XSB7eafGPUJlDGHyIRGkFf7oTZwIpEu6XNvQKpL5hRVM6inryf3izGvNeD6FmcEUI8Il8d%2BosYeP%2B%2FsOOGa9ylztpeQof6Sc99Jaa2EynGkIkPA0kRbvSicb9QBQdF5ngJnQukaCGWZxSesdgStXnOZ2W6ypOjgLDKkAklzA4D8shx4ITe%2FBKGgkkJIPO0GKUW0ECBRNXWcVIt2PqdNtm8kMI%2BxNFN8181PUptM5JhRFMwCETO%2FZxHXyAxDgoG5SveZko8NTs%2FX5%2BfdbJnIxRlvDKvAo2RpGnraN%2F45n4yA5KQygNsnt0uiiOWCAOltiChx3ZxAPioU2dcwTvimH%2F5o%2FAQoV1BfE5be14Fd0Qtipa06l0jBlkNOmTsZyBpG2i%2Fq3oZnOtOfYBMw7JTK0wY6pgGxc7joge%2BVneb9h129EO4f%2FfdwSlfvTGFieU8biiz9Xj8ymeZD6A2uvHIxnsHNxjxs1Yry4QnSF2BpgJoOPOnE5vIh96bYuaR0alMDBq5QZ7omXhP1fVLPaceiwQwldGdqEuHDMM1%2F7dJqIGntYdY4glIkiTT%2FIU8i4h92A%2FEFkMgqWEIONl1m6tebTP6ynCK%2F%2B59xbobrbzKOgclVvTZxs8XFkssy&X-Amz-Signature=08185ba41af9757732307d719751a6d66bc640842e362826b36b322cd55ae155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP663HSR%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIGYFZDstVXkOvykaPm%2BXuVbOIjE9TeWGmSiCJmA3MFddAiBMHnigCuBR%2Fd8xtjxn0mLYPzSVxkZzGchsx9kpA6GYaSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMvxjzHzSwhJrZiKikKtwD42oXxdLFKKTJW7lLwFuU11j%2BafRN90rHgtlaS9UVXqoleNMFXOgT6H0E%2BDF%2Bm5h21elRiCmjFwTmOPQZRQn891F8ApVeRIuiRbdCGoZBAPCgWwWc1nzXnipUSeLTTWzTAI2lXuGsm4zarXZgAYUvoxpPb%2FjzFskC8Gth6CluNg0bo0bqUNeQs0MsQPkZ0QnV0%2BRhCSGa7Uw5TCDcYNglDPpDZrAAW%2BHfAnF2Eszcz2NR0XSB7eafGPUJlDGHyIRGkFf7oTZwIpEu6XNvQKpL5hRVM6inryf3izGvNeD6FmcEUI8Il8d%2BosYeP%2B%2FsOOGa9ylztpeQof6Sc99Jaa2EynGkIkPA0kRbvSicb9QBQdF5ngJnQukaCGWZxSesdgStXnOZ2W6ypOjgLDKkAklzA4D8shx4ITe%2FBKGgkkJIPO0GKUW0ECBRNXWcVIt2PqdNtm8kMI%2BxNFN8181PUptM5JhRFMwCETO%2FZxHXyAxDgoG5SveZko8NTs%2FX5%2BfdbJnIxRlvDKvAo2RpGnraN%2F45n4yA5KQygNsnt0uiiOWCAOltiChx3ZxAPioU2dcwTvimH%2F5o%2FAQoV1BfE5be14Fd0Qtipa06l0jBlkNOmTsZyBpG2i%2Fq3oZnOtOfYBMw7JTK0wY6pgGxc7joge%2BVneb9h129EO4f%2FfdwSlfvTGFieU8biiz9Xj8ymeZD6A2uvHIxnsHNxjxs1Yry4QnSF2BpgJoOPOnE5vIh96bYuaR0alMDBq5QZ7omXhP1fVLPaceiwQwldGdqEuHDMM1%2F7dJqIGntYdY4glIkiTT%2FIU8i4h92A%2FEFkMgqWEIONl1m6tebTP6ynCK%2F%2B59xbobrbzKOgclVvTZxs8XFkssy&X-Amz-Signature=a3cd7b42dd68b7967e90ab30452859913b1ea3f09e1b8682e3ec3c9b9e88cdc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP663HSR%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIGYFZDstVXkOvykaPm%2BXuVbOIjE9TeWGmSiCJmA3MFddAiBMHnigCuBR%2Fd8xtjxn0mLYPzSVxkZzGchsx9kpA6GYaSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMvxjzHzSwhJrZiKikKtwD42oXxdLFKKTJW7lLwFuU11j%2BafRN90rHgtlaS9UVXqoleNMFXOgT6H0E%2BDF%2Bm5h21elRiCmjFwTmOPQZRQn891F8ApVeRIuiRbdCGoZBAPCgWwWc1nzXnipUSeLTTWzTAI2lXuGsm4zarXZgAYUvoxpPb%2FjzFskC8Gth6CluNg0bo0bqUNeQs0MsQPkZ0QnV0%2BRhCSGa7Uw5TCDcYNglDPpDZrAAW%2BHfAnF2Eszcz2NR0XSB7eafGPUJlDGHyIRGkFf7oTZwIpEu6XNvQKpL5hRVM6inryf3izGvNeD6FmcEUI8Il8d%2BosYeP%2B%2FsOOGa9ylztpeQof6Sc99Jaa2EynGkIkPA0kRbvSicb9QBQdF5ngJnQukaCGWZxSesdgStXnOZ2W6ypOjgLDKkAklzA4D8shx4ITe%2FBKGgkkJIPO0GKUW0ECBRNXWcVIt2PqdNtm8kMI%2BxNFN8181PUptM5JhRFMwCETO%2FZxHXyAxDgoG5SveZko8NTs%2FX5%2BfdbJnIxRlvDKvAo2RpGnraN%2F45n4yA5KQygNsnt0uiiOWCAOltiChx3ZxAPioU2dcwTvimH%2F5o%2FAQoV1BfE5be14Fd0Qtipa06l0jBlkNOmTsZyBpG2i%2Fq3oZnOtOfYBMw7JTK0wY6pgGxc7joge%2BVneb9h129EO4f%2FfdwSlfvTGFieU8biiz9Xj8ymeZD6A2uvHIxnsHNxjxs1Yry4QnSF2BpgJoOPOnE5vIh96bYuaR0alMDBq5QZ7omXhP1fVLPaceiwQwldGdqEuHDMM1%2F7dJqIGntYdY4glIkiTT%2FIU8i4h92A%2FEFkMgqWEIONl1m6tebTP6ynCK%2F%2B59xbobrbzKOgclVvTZxs8XFkssy&X-Amz-Signature=29e38efe950b96988f98919847332da1f436c1d14c8cf58c72ce071ab3dc4216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP663HSR%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIGYFZDstVXkOvykaPm%2BXuVbOIjE9TeWGmSiCJmA3MFddAiBMHnigCuBR%2Fd8xtjxn0mLYPzSVxkZzGchsx9kpA6GYaSr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMvxjzHzSwhJrZiKikKtwD42oXxdLFKKTJW7lLwFuU11j%2BafRN90rHgtlaS9UVXqoleNMFXOgT6H0E%2BDF%2Bm5h21elRiCmjFwTmOPQZRQn891F8ApVeRIuiRbdCGoZBAPCgWwWc1nzXnipUSeLTTWzTAI2lXuGsm4zarXZgAYUvoxpPb%2FjzFskC8Gth6CluNg0bo0bqUNeQs0MsQPkZ0QnV0%2BRhCSGa7Uw5TCDcYNglDPpDZrAAW%2BHfAnF2Eszcz2NR0XSB7eafGPUJlDGHyIRGkFf7oTZwIpEu6XNvQKpL5hRVM6inryf3izGvNeD6FmcEUI8Il8d%2BosYeP%2B%2FsOOGa9ylztpeQof6Sc99Jaa2EynGkIkPA0kRbvSicb9QBQdF5ngJnQukaCGWZxSesdgStXnOZ2W6ypOjgLDKkAklzA4D8shx4ITe%2FBKGgkkJIPO0GKUW0ECBRNXWcVIt2PqdNtm8kMI%2BxNFN8181PUptM5JhRFMwCETO%2FZxHXyAxDgoG5SveZko8NTs%2FX5%2BfdbJnIxRlvDKvAo2RpGnraN%2F45n4yA5KQygNsnt0uiiOWCAOltiChx3ZxAPioU2dcwTvimH%2F5o%2FAQoV1BfE5be14Fd0Qtipa06l0jBlkNOmTsZyBpG2i%2Fq3oZnOtOfYBMw7JTK0wY6pgGxc7joge%2BVneb9h129EO4f%2FfdwSlfvTGFieU8biiz9Xj8ymeZD6A2uvHIxnsHNxjxs1Yry4QnSF2BpgJoOPOnE5vIh96bYuaR0alMDBq5QZ7omXhP1fVLPaceiwQwldGdqEuHDMM1%2F7dJqIGntYdY4glIkiTT%2FIU8i4h92A%2FEFkMgqWEIONl1m6tebTP6ynCK%2F%2B59xbobrbzKOgclVvTZxs8XFkssy&X-Amz-Signature=70d1829d5d5f57f7faf37898fa3188f9f3e361b28a21269a5aca6870d3e840fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


