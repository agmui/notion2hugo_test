---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-30T10:15:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-30T10:15:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV4S3QMR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe7ibTl%2B7gXsFcPo1CmjwqbXnIntX2dS4hh9TD46b2xgIhAMxjps41MY%2BaGBTpFk8OmXFpTv92Khom5Ae2%2FYNx4lVPKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEOx%2FS%2BfEOzTgEku0q3AM04qRtAQJ%2Fx0d1hLXARc1xRQOeAirVFtYFJb7JWKNiE0if5zGxzSCF5TzTdlFWO1qYMaS5GZNIGlW7p7SXkZnt5B37G1mPgIw0c%2BoRpf%2FtmcqNYPgX%2FiewCv7HZHbun2BqUFi0RKa5gnsF6wmZJs9IEZrJfOTSLsQs53Fn8DzNRfgUSEw5LpSbM6kswpVMVcooQB8kP0Q6e4jZOK1%2BvReytr6KkQGaNG7wKITDrVEbKKsVJiEXIu4M2EEyZzlvNkIHv9cnCX%2BZ7NxikZQTdg6PHnpCzbfq4CyQ%2BzemKl%2BUM3gdcQRjZwXHrPb7oegt9HrOTnWB3yMuiGFdljURG4SfCjTwko2zL8QaGcc18BtFEi0qfX2qNJMWBn9QJIz2tdMC7k1IOyFAKhAOaZglzmYACvEHTrq9oTXXt2SxVXiYpFXmA4Gqiw7Pibp7QrWj%2BwTrW4cN34KYaWfdgXnwDdQwiymx8oWVd8sn8MgN39L%2BsX9VXlAwDH8NgyrYQ99utmh4OvPEt42Iy7idtzbbdxkZB8IlnkO85ZIC99Je4qVM7lgg8qr8jxW5X0b9hZvtjI%2FhysMFl8f3QLLoWo8lsSeW5BjmvjCGXawzL%2B2pUj11303zkZ6ACs6F76SdljCc6a3EBjqkAWkzf6Wpn%2BP1D57SP%2BJ5DcJNDZp9NLj9I75QAOvZMxxU2plJy3kmbIj7YktsNbf%2BkSuW0w8%2F41UBeakYEVXH6c2SCdfbyNFqn%2F71qKRe99l2WEZHSdGSuBZgmmxNv4ZKe%2FHuvdDi5rt5h%2BZK%2B6FuidZoX3u6RwwPQFSmhtyf2Ir1T5SMmIa4zYvpS0hjJUxRGvDQJIrdgMtniCsHj8uYq7ef%2BagV&X-Amz-Signature=6feaf9a6c90ddf1976508b485c15fd3495440d01f17b295d8635eaed88401871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV4S3QMR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe7ibTl%2B7gXsFcPo1CmjwqbXnIntX2dS4hh9TD46b2xgIhAMxjps41MY%2BaGBTpFk8OmXFpTv92Khom5Ae2%2FYNx4lVPKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEOx%2FS%2BfEOzTgEku0q3AM04qRtAQJ%2Fx0d1hLXARc1xRQOeAirVFtYFJb7JWKNiE0if5zGxzSCF5TzTdlFWO1qYMaS5GZNIGlW7p7SXkZnt5B37G1mPgIw0c%2BoRpf%2FtmcqNYPgX%2FiewCv7HZHbun2BqUFi0RKa5gnsF6wmZJs9IEZrJfOTSLsQs53Fn8DzNRfgUSEw5LpSbM6kswpVMVcooQB8kP0Q6e4jZOK1%2BvReytr6KkQGaNG7wKITDrVEbKKsVJiEXIu4M2EEyZzlvNkIHv9cnCX%2BZ7NxikZQTdg6PHnpCzbfq4CyQ%2BzemKl%2BUM3gdcQRjZwXHrPb7oegt9HrOTnWB3yMuiGFdljURG4SfCjTwko2zL8QaGcc18BtFEi0qfX2qNJMWBn9QJIz2tdMC7k1IOyFAKhAOaZglzmYACvEHTrq9oTXXt2SxVXiYpFXmA4Gqiw7Pibp7QrWj%2BwTrW4cN34KYaWfdgXnwDdQwiymx8oWVd8sn8MgN39L%2BsX9VXlAwDH8NgyrYQ99utmh4OvPEt42Iy7idtzbbdxkZB8IlnkO85ZIC99Je4qVM7lgg8qr8jxW5X0b9hZvtjI%2FhysMFl8f3QLLoWo8lsSeW5BjmvjCGXawzL%2B2pUj11303zkZ6ACs6F76SdljCc6a3EBjqkAWkzf6Wpn%2BP1D57SP%2BJ5DcJNDZp9NLj9I75QAOvZMxxU2plJy3kmbIj7YktsNbf%2BkSuW0w8%2F41UBeakYEVXH6c2SCdfbyNFqn%2F71qKRe99l2WEZHSdGSuBZgmmxNv4ZKe%2FHuvdDi5rt5h%2BZK%2B6FuidZoX3u6RwwPQFSmhtyf2Ir1T5SMmIa4zYvpS0hjJUxRGvDQJIrdgMtniCsHj8uYq7ef%2BagV&X-Amz-Signature=f87debd58d4f7f407e4b71f63a3e9c2c9abe127b7f3b692e1afe2be1f030c548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV4S3QMR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe7ibTl%2B7gXsFcPo1CmjwqbXnIntX2dS4hh9TD46b2xgIhAMxjps41MY%2BaGBTpFk8OmXFpTv92Khom5Ae2%2FYNx4lVPKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEOx%2FS%2BfEOzTgEku0q3AM04qRtAQJ%2Fx0d1hLXARc1xRQOeAirVFtYFJb7JWKNiE0if5zGxzSCF5TzTdlFWO1qYMaS5GZNIGlW7p7SXkZnt5B37G1mPgIw0c%2BoRpf%2FtmcqNYPgX%2FiewCv7HZHbun2BqUFi0RKa5gnsF6wmZJs9IEZrJfOTSLsQs53Fn8DzNRfgUSEw5LpSbM6kswpVMVcooQB8kP0Q6e4jZOK1%2BvReytr6KkQGaNG7wKITDrVEbKKsVJiEXIu4M2EEyZzlvNkIHv9cnCX%2BZ7NxikZQTdg6PHnpCzbfq4CyQ%2BzemKl%2BUM3gdcQRjZwXHrPb7oegt9HrOTnWB3yMuiGFdljURG4SfCjTwko2zL8QaGcc18BtFEi0qfX2qNJMWBn9QJIz2tdMC7k1IOyFAKhAOaZglzmYACvEHTrq9oTXXt2SxVXiYpFXmA4Gqiw7Pibp7QrWj%2BwTrW4cN34KYaWfdgXnwDdQwiymx8oWVd8sn8MgN39L%2BsX9VXlAwDH8NgyrYQ99utmh4OvPEt42Iy7idtzbbdxkZB8IlnkO85ZIC99Je4qVM7lgg8qr8jxW5X0b9hZvtjI%2FhysMFl8f3QLLoWo8lsSeW5BjmvjCGXawzL%2B2pUj11303zkZ6ACs6F76SdljCc6a3EBjqkAWkzf6Wpn%2BP1D57SP%2BJ5DcJNDZp9NLj9I75QAOvZMxxU2plJy3kmbIj7YktsNbf%2BkSuW0w8%2F41UBeakYEVXH6c2SCdfbyNFqn%2F71qKRe99l2WEZHSdGSuBZgmmxNv4ZKe%2FHuvdDi5rt5h%2BZK%2B6FuidZoX3u6RwwPQFSmhtyf2Ir1T5SMmIa4zYvpS0hjJUxRGvDQJIrdgMtniCsHj8uYq7ef%2BagV&X-Amz-Signature=400c804dcea0b877b6791184101b3c12aa5fb101d74bdc8b0ebcd1e59470a68f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV4S3QMR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe7ibTl%2B7gXsFcPo1CmjwqbXnIntX2dS4hh9TD46b2xgIhAMxjps41MY%2BaGBTpFk8OmXFpTv92Khom5Ae2%2FYNx4lVPKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEOx%2FS%2BfEOzTgEku0q3AM04qRtAQJ%2Fx0d1hLXARc1xRQOeAirVFtYFJb7JWKNiE0if5zGxzSCF5TzTdlFWO1qYMaS5GZNIGlW7p7SXkZnt5B37G1mPgIw0c%2BoRpf%2FtmcqNYPgX%2FiewCv7HZHbun2BqUFi0RKa5gnsF6wmZJs9IEZrJfOTSLsQs53Fn8DzNRfgUSEw5LpSbM6kswpVMVcooQB8kP0Q6e4jZOK1%2BvReytr6KkQGaNG7wKITDrVEbKKsVJiEXIu4M2EEyZzlvNkIHv9cnCX%2BZ7NxikZQTdg6PHnpCzbfq4CyQ%2BzemKl%2BUM3gdcQRjZwXHrPb7oegt9HrOTnWB3yMuiGFdljURG4SfCjTwko2zL8QaGcc18BtFEi0qfX2qNJMWBn9QJIz2tdMC7k1IOyFAKhAOaZglzmYACvEHTrq9oTXXt2SxVXiYpFXmA4Gqiw7Pibp7QrWj%2BwTrW4cN34KYaWfdgXnwDdQwiymx8oWVd8sn8MgN39L%2BsX9VXlAwDH8NgyrYQ99utmh4OvPEt42Iy7idtzbbdxkZB8IlnkO85ZIC99Je4qVM7lgg8qr8jxW5X0b9hZvtjI%2FhysMFl8f3QLLoWo8lsSeW5BjmvjCGXawzL%2B2pUj11303zkZ6ACs6F76SdljCc6a3EBjqkAWkzf6Wpn%2BP1D57SP%2BJ5DcJNDZp9NLj9I75QAOvZMxxU2plJy3kmbIj7YktsNbf%2BkSuW0w8%2F41UBeakYEVXH6c2SCdfbyNFqn%2F71qKRe99l2WEZHSdGSuBZgmmxNv4ZKe%2FHuvdDi5rt5h%2BZK%2B6FuidZoX3u6RwwPQFSmhtyf2Ir1T5SMmIa4zYvpS0hjJUxRGvDQJIrdgMtniCsHj8uYq7ef%2BagV&X-Amz-Signature=987999e993a7cb5bd82166cbccecc9702a5e93c9f8dd01c5576ba49f1fd8b277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV4S3QMR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe7ibTl%2B7gXsFcPo1CmjwqbXnIntX2dS4hh9TD46b2xgIhAMxjps41MY%2BaGBTpFk8OmXFpTv92Khom5Ae2%2FYNx4lVPKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEOx%2FS%2BfEOzTgEku0q3AM04qRtAQJ%2Fx0d1hLXARc1xRQOeAirVFtYFJb7JWKNiE0if5zGxzSCF5TzTdlFWO1qYMaS5GZNIGlW7p7SXkZnt5B37G1mPgIw0c%2BoRpf%2FtmcqNYPgX%2FiewCv7HZHbun2BqUFi0RKa5gnsF6wmZJs9IEZrJfOTSLsQs53Fn8DzNRfgUSEw5LpSbM6kswpVMVcooQB8kP0Q6e4jZOK1%2BvReytr6KkQGaNG7wKITDrVEbKKsVJiEXIu4M2EEyZzlvNkIHv9cnCX%2BZ7NxikZQTdg6PHnpCzbfq4CyQ%2BzemKl%2BUM3gdcQRjZwXHrPb7oegt9HrOTnWB3yMuiGFdljURG4SfCjTwko2zL8QaGcc18BtFEi0qfX2qNJMWBn9QJIz2tdMC7k1IOyFAKhAOaZglzmYACvEHTrq9oTXXt2SxVXiYpFXmA4Gqiw7Pibp7QrWj%2BwTrW4cN34KYaWfdgXnwDdQwiymx8oWVd8sn8MgN39L%2BsX9VXlAwDH8NgyrYQ99utmh4OvPEt42Iy7idtzbbdxkZB8IlnkO85ZIC99Je4qVM7lgg8qr8jxW5X0b9hZvtjI%2FhysMFl8f3QLLoWo8lsSeW5BjmvjCGXawzL%2B2pUj11303zkZ6ACs6F76SdljCc6a3EBjqkAWkzf6Wpn%2BP1D57SP%2BJ5DcJNDZp9NLj9I75QAOvZMxxU2plJy3kmbIj7YktsNbf%2BkSuW0w8%2F41UBeakYEVXH6c2SCdfbyNFqn%2F71qKRe99l2WEZHSdGSuBZgmmxNv4ZKe%2FHuvdDi5rt5h%2BZK%2B6FuidZoX3u6RwwPQFSmhtyf2Ir1T5SMmIa4zYvpS0hjJUxRGvDQJIrdgMtniCsHj8uYq7ef%2BagV&X-Amz-Signature=426ec0076b80ebb2a4f4f91a1273e2bcfe9e578b26767a48116f9b38e0123e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV4S3QMR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe7ibTl%2B7gXsFcPo1CmjwqbXnIntX2dS4hh9TD46b2xgIhAMxjps41MY%2BaGBTpFk8OmXFpTv92Khom5Ae2%2FYNx4lVPKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEOx%2FS%2BfEOzTgEku0q3AM04qRtAQJ%2Fx0d1hLXARc1xRQOeAirVFtYFJb7JWKNiE0if5zGxzSCF5TzTdlFWO1qYMaS5GZNIGlW7p7SXkZnt5B37G1mPgIw0c%2BoRpf%2FtmcqNYPgX%2FiewCv7HZHbun2BqUFi0RKa5gnsF6wmZJs9IEZrJfOTSLsQs53Fn8DzNRfgUSEw5LpSbM6kswpVMVcooQB8kP0Q6e4jZOK1%2BvReytr6KkQGaNG7wKITDrVEbKKsVJiEXIu4M2EEyZzlvNkIHv9cnCX%2BZ7NxikZQTdg6PHnpCzbfq4CyQ%2BzemKl%2BUM3gdcQRjZwXHrPb7oegt9HrOTnWB3yMuiGFdljURG4SfCjTwko2zL8QaGcc18BtFEi0qfX2qNJMWBn9QJIz2tdMC7k1IOyFAKhAOaZglzmYACvEHTrq9oTXXt2SxVXiYpFXmA4Gqiw7Pibp7QrWj%2BwTrW4cN34KYaWfdgXnwDdQwiymx8oWVd8sn8MgN39L%2BsX9VXlAwDH8NgyrYQ99utmh4OvPEt42Iy7idtzbbdxkZB8IlnkO85ZIC99Je4qVM7lgg8qr8jxW5X0b9hZvtjI%2FhysMFl8f3QLLoWo8lsSeW5BjmvjCGXawzL%2B2pUj11303zkZ6ACs6F76SdljCc6a3EBjqkAWkzf6Wpn%2BP1D57SP%2BJ5DcJNDZp9NLj9I75QAOvZMxxU2plJy3kmbIj7YktsNbf%2BkSuW0w8%2F41UBeakYEVXH6c2SCdfbyNFqn%2F71qKRe99l2WEZHSdGSuBZgmmxNv4ZKe%2FHuvdDi5rt5h%2BZK%2B6FuidZoX3u6RwwPQFSmhtyf2Ir1T5SMmIa4zYvpS0hjJUxRGvDQJIrdgMtniCsHj8uYq7ef%2BagV&X-Amz-Signature=1cfc36f0484b0eb8900142690dd1a40c91a77558abeaddd8fd0daac97504fa72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV4S3QMR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe7ibTl%2B7gXsFcPo1CmjwqbXnIntX2dS4hh9TD46b2xgIhAMxjps41MY%2BaGBTpFk8OmXFpTv92Khom5Ae2%2FYNx4lVPKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEOx%2FS%2BfEOzTgEku0q3AM04qRtAQJ%2Fx0d1hLXARc1xRQOeAirVFtYFJb7JWKNiE0if5zGxzSCF5TzTdlFWO1qYMaS5GZNIGlW7p7SXkZnt5B37G1mPgIw0c%2BoRpf%2FtmcqNYPgX%2FiewCv7HZHbun2BqUFi0RKa5gnsF6wmZJs9IEZrJfOTSLsQs53Fn8DzNRfgUSEw5LpSbM6kswpVMVcooQB8kP0Q6e4jZOK1%2BvReytr6KkQGaNG7wKITDrVEbKKsVJiEXIu4M2EEyZzlvNkIHv9cnCX%2BZ7NxikZQTdg6PHnpCzbfq4CyQ%2BzemKl%2BUM3gdcQRjZwXHrPb7oegt9HrOTnWB3yMuiGFdljURG4SfCjTwko2zL8QaGcc18BtFEi0qfX2qNJMWBn9QJIz2tdMC7k1IOyFAKhAOaZglzmYACvEHTrq9oTXXt2SxVXiYpFXmA4Gqiw7Pibp7QrWj%2BwTrW4cN34KYaWfdgXnwDdQwiymx8oWVd8sn8MgN39L%2BsX9VXlAwDH8NgyrYQ99utmh4OvPEt42Iy7idtzbbdxkZB8IlnkO85ZIC99Je4qVM7lgg8qr8jxW5X0b9hZvtjI%2FhysMFl8f3QLLoWo8lsSeW5BjmvjCGXawzL%2B2pUj11303zkZ6ACs6F76SdljCc6a3EBjqkAWkzf6Wpn%2BP1D57SP%2BJ5DcJNDZp9NLj9I75QAOvZMxxU2plJy3kmbIj7YktsNbf%2BkSuW0w8%2F41UBeakYEVXH6c2SCdfbyNFqn%2F71qKRe99l2WEZHSdGSuBZgmmxNv4ZKe%2FHuvdDi5rt5h%2BZK%2B6FuidZoX3u6RwwPQFSmhtyf2Ir1T5SMmIa4zYvpS0hjJUxRGvDQJIrdgMtniCsHj8uYq7ef%2BagV&X-Amz-Signature=33b66b5a03fa4edbe0d8f15b50b2c6d3ecf0485a2f971e62cb4b019d4dd87149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV4S3QMR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe7ibTl%2B7gXsFcPo1CmjwqbXnIntX2dS4hh9TD46b2xgIhAMxjps41MY%2BaGBTpFk8OmXFpTv92Khom5Ae2%2FYNx4lVPKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEOx%2FS%2BfEOzTgEku0q3AM04qRtAQJ%2Fx0d1hLXARc1xRQOeAirVFtYFJb7JWKNiE0if5zGxzSCF5TzTdlFWO1qYMaS5GZNIGlW7p7SXkZnt5B37G1mPgIw0c%2BoRpf%2FtmcqNYPgX%2FiewCv7HZHbun2BqUFi0RKa5gnsF6wmZJs9IEZrJfOTSLsQs53Fn8DzNRfgUSEw5LpSbM6kswpVMVcooQB8kP0Q6e4jZOK1%2BvReytr6KkQGaNG7wKITDrVEbKKsVJiEXIu4M2EEyZzlvNkIHv9cnCX%2BZ7NxikZQTdg6PHnpCzbfq4CyQ%2BzemKl%2BUM3gdcQRjZwXHrPb7oegt9HrOTnWB3yMuiGFdljURG4SfCjTwko2zL8QaGcc18BtFEi0qfX2qNJMWBn9QJIz2tdMC7k1IOyFAKhAOaZglzmYACvEHTrq9oTXXt2SxVXiYpFXmA4Gqiw7Pibp7QrWj%2BwTrW4cN34KYaWfdgXnwDdQwiymx8oWVd8sn8MgN39L%2BsX9VXlAwDH8NgyrYQ99utmh4OvPEt42Iy7idtzbbdxkZB8IlnkO85ZIC99Je4qVM7lgg8qr8jxW5X0b9hZvtjI%2FhysMFl8f3QLLoWo8lsSeW5BjmvjCGXawzL%2B2pUj11303zkZ6ACs6F76SdljCc6a3EBjqkAWkzf6Wpn%2BP1D57SP%2BJ5DcJNDZp9NLj9I75QAOvZMxxU2plJy3kmbIj7YktsNbf%2BkSuW0w8%2F41UBeakYEVXH6c2SCdfbyNFqn%2F71qKRe99l2WEZHSdGSuBZgmmxNv4ZKe%2FHuvdDi5rt5h%2BZK%2B6FuidZoX3u6RwwPQFSmhtyf2Ir1T5SMmIa4zYvpS0hjJUxRGvDQJIrdgMtniCsHj8uYq7ef%2BagV&X-Amz-Signature=e0c85a97a2cb247e4dd7df425a61d613cac6e73968b98aaac61f6f183324da0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV4S3QMR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe7ibTl%2B7gXsFcPo1CmjwqbXnIntX2dS4hh9TD46b2xgIhAMxjps41MY%2BaGBTpFk8OmXFpTv92Khom5Ae2%2FYNx4lVPKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEOx%2FS%2BfEOzTgEku0q3AM04qRtAQJ%2Fx0d1hLXARc1xRQOeAirVFtYFJb7JWKNiE0if5zGxzSCF5TzTdlFWO1qYMaS5GZNIGlW7p7SXkZnt5B37G1mPgIw0c%2BoRpf%2FtmcqNYPgX%2FiewCv7HZHbun2BqUFi0RKa5gnsF6wmZJs9IEZrJfOTSLsQs53Fn8DzNRfgUSEw5LpSbM6kswpVMVcooQB8kP0Q6e4jZOK1%2BvReytr6KkQGaNG7wKITDrVEbKKsVJiEXIu4M2EEyZzlvNkIHv9cnCX%2BZ7NxikZQTdg6PHnpCzbfq4CyQ%2BzemKl%2BUM3gdcQRjZwXHrPb7oegt9HrOTnWB3yMuiGFdljURG4SfCjTwko2zL8QaGcc18BtFEi0qfX2qNJMWBn9QJIz2tdMC7k1IOyFAKhAOaZglzmYACvEHTrq9oTXXt2SxVXiYpFXmA4Gqiw7Pibp7QrWj%2BwTrW4cN34KYaWfdgXnwDdQwiymx8oWVd8sn8MgN39L%2BsX9VXlAwDH8NgyrYQ99utmh4OvPEt42Iy7idtzbbdxkZB8IlnkO85ZIC99Je4qVM7lgg8qr8jxW5X0b9hZvtjI%2FhysMFl8f3QLLoWo8lsSeW5BjmvjCGXawzL%2B2pUj11303zkZ6ACs6F76SdljCc6a3EBjqkAWkzf6Wpn%2BP1D57SP%2BJ5DcJNDZp9NLj9I75QAOvZMxxU2plJy3kmbIj7YktsNbf%2BkSuW0w8%2F41UBeakYEVXH6c2SCdfbyNFqn%2F71qKRe99l2WEZHSdGSuBZgmmxNv4ZKe%2FHuvdDi5rt5h%2BZK%2B6FuidZoX3u6RwwPQFSmhtyf2Ir1T5SMmIa4zYvpS0hjJUxRGvDQJIrdgMtniCsHj8uYq7ef%2BagV&X-Amz-Signature=4c91d8398550f81a35710885d7de0f378681f31a46daa383ae5703e41eaaf751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV4S3QMR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe7ibTl%2B7gXsFcPo1CmjwqbXnIntX2dS4hh9TD46b2xgIhAMxjps41MY%2BaGBTpFk8OmXFpTv92Khom5Ae2%2FYNx4lVPKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEOx%2FS%2BfEOzTgEku0q3AM04qRtAQJ%2Fx0d1hLXARc1xRQOeAirVFtYFJb7JWKNiE0if5zGxzSCF5TzTdlFWO1qYMaS5GZNIGlW7p7SXkZnt5B37G1mPgIw0c%2BoRpf%2FtmcqNYPgX%2FiewCv7HZHbun2BqUFi0RKa5gnsF6wmZJs9IEZrJfOTSLsQs53Fn8DzNRfgUSEw5LpSbM6kswpVMVcooQB8kP0Q6e4jZOK1%2BvReytr6KkQGaNG7wKITDrVEbKKsVJiEXIu4M2EEyZzlvNkIHv9cnCX%2BZ7NxikZQTdg6PHnpCzbfq4CyQ%2BzemKl%2BUM3gdcQRjZwXHrPb7oegt9HrOTnWB3yMuiGFdljURG4SfCjTwko2zL8QaGcc18BtFEi0qfX2qNJMWBn9QJIz2tdMC7k1IOyFAKhAOaZglzmYACvEHTrq9oTXXt2SxVXiYpFXmA4Gqiw7Pibp7QrWj%2BwTrW4cN34KYaWfdgXnwDdQwiymx8oWVd8sn8MgN39L%2BsX9VXlAwDH8NgyrYQ99utmh4OvPEt42Iy7idtzbbdxkZB8IlnkO85ZIC99Je4qVM7lgg8qr8jxW5X0b9hZvtjI%2FhysMFl8f3QLLoWo8lsSeW5BjmvjCGXawzL%2B2pUj11303zkZ6ACs6F76SdljCc6a3EBjqkAWkzf6Wpn%2BP1D57SP%2BJ5DcJNDZp9NLj9I75QAOvZMxxU2plJy3kmbIj7YktsNbf%2BkSuW0w8%2F41UBeakYEVXH6c2SCdfbyNFqn%2F71qKRe99l2WEZHSdGSuBZgmmxNv4ZKe%2FHuvdDi5rt5h%2BZK%2B6FuidZoX3u6RwwPQFSmhtyf2Ir1T5SMmIa4zYvpS0hjJUxRGvDQJIrdgMtniCsHj8uYq7ef%2BagV&X-Amz-Signature=6a7928318e37fde0358f581647bfd6a512a36a2017a3f5606dcf8be5ed4add24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

Types of blocks in URDF:

- robot
- vars/Properties
- macros
- link:
	- visual
		- geometry
		- material
	- collision
		- origin
		- geometry
		- friction
	- inertial
- joint:
	- parent
	- child
	- origin

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV4S3QMR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe7ibTl%2B7gXsFcPo1CmjwqbXnIntX2dS4hh9TD46b2xgIhAMxjps41MY%2BaGBTpFk8OmXFpTv92Khom5Ae2%2FYNx4lVPKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEOx%2FS%2BfEOzTgEku0q3AM04qRtAQJ%2Fx0d1hLXARc1xRQOeAirVFtYFJb7JWKNiE0if5zGxzSCF5TzTdlFWO1qYMaS5GZNIGlW7p7SXkZnt5B37G1mPgIw0c%2BoRpf%2FtmcqNYPgX%2FiewCv7HZHbun2BqUFi0RKa5gnsF6wmZJs9IEZrJfOTSLsQs53Fn8DzNRfgUSEw5LpSbM6kswpVMVcooQB8kP0Q6e4jZOK1%2BvReytr6KkQGaNG7wKITDrVEbKKsVJiEXIu4M2EEyZzlvNkIHv9cnCX%2BZ7NxikZQTdg6PHnpCzbfq4CyQ%2BzemKl%2BUM3gdcQRjZwXHrPb7oegt9HrOTnWB3yMuiGFdljURG4SfCjTwko2zL8QaGcc18BtFEi0qfX2qNJMWBn9QJIz2tdMC7k1IOyFAKhAOaZglzmYACvEHTrq9oTXXt2SxVXiYpFXmA4Gqiw7Pibp7QrWj%2BwTrW4cN34KYaWfdgXnwDdQwiymx8oWVd8sn8MgN39L%2BsX9VXlAwDH8NgyrYQ99utmh4OvPEt42Iy7idtzbbdxkZB8IlnkO85ZIC99Je4qVM7lgg8qr8jxW5X0b9hZvtjI%2FhysMFl8f3QLLoWo8lsSeW5BjmvjCGXawzL%2B2pUj11303zkZ6ACs6F76SdljCc6a3EBjqkAWkzf6Wpn%2BP1D57SP%2BJ5DcJNDZp9NLj9I75QAOvZMxxU2plJy3kmbIj7YktsNbf%2BkSuW0w8%2F41UBeakYEVXH6c2SCdfbyNFqn%2F71qKRe99l2WEZHSdGSuBZgmmxNv4ZKe%2FHuvdDi5rt5h%2BZK%2B6FuidZoX3u6RwwPQFSmhtyf2Ir1T5SMmIa4zYvpS0hjJUxRGvDQJIrdgMtniCsHj8uYq7ef%2BagV&X-Amz-Signature=feaeeac33b8344a7bd97e1093f05a5f8ee450af97997fcf5f88eabb3ccf0754b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV4S3QMR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe7ibTl%2B7gXsFcPo1CmjwqbXnIntX2dS4hh9TD46b2xgIhAMxjps41MY%2BaGBTpFk8OmXFpTv92Khom5Ae2%2FYNx4lVPKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEOx%2FS%2BfEOzTgEku0q3AM04qRtAQJ%2Fx0d1hLXARc1xRQOeAirVFtYFJb7JWKNiE0if5zGxzSCF5TzTdlFWO1qYMaS5GZNIGlW7p7SXkZnt5B37G1mPgIw0c%2BoRpf%2FtmcqNYPgX%2FiewCv7HZHbun2BqUFi0RKa5gnsF6wmZJs9IEZrJfOTSLsQs53Fn8DzNRfgUSEw5LpSbM6kswpVMVcooQB8kP0Q6e4jZOK1%2BvReytr6KkQGaNG7wKITDrVEbKKsVJiEXIu4M2EEyZzlvNkIHv9cnCX%2BZ7NxikZQTdg6PHnpCzbfq4CyQ%2BzemKl%2BUM3gdcQRjZwXHrPb7oegt9HrOTnWB3yMuiGFdljURG4SfCjTwko2zL8QaGcc18BtFEi0qfX2qNJMWBn9QJIz2tdMC7k1IOyFAKhAOaZglzmYACvEHTrq9oTXXt2SxVXiYpFXmA4Gqiw7Pibp7QrWj%2BwTrW4cN34KYaWfdgXnwDdQwiymx8oWVd8sn8MgN39L%2BsX9VXlAwDH8NgyrYQ99utmh4OvPEt42Iy7idtzbbdxkZB8IlnkO85ZIC99Je4qVM7lgg8qr8jxW5X0b9hZvtjI%2FhysMFl8f3QLLoWo8lsSeW5BjmvjCGXawzL%2B2pUj11303zkZ6ACs6F76SdljCc6a3EBjqkAWkzf6Wpn%2BP1D57SP%2BJ5DcJNDZp9NLj9I75QAOvZMxxU2plJy3kmbIj7YktsNbf%2BkSuW0w8%2F41UBeakYEVXH6c2SCdfbyNFqn%2F71qKRe99l2WEZHSdGSuBZgmmxNv4ZKe%2FHuvdDi5rt5h%2BZK%2B6FuidZoX3u6RwwPQFSmhtyf2Ir1T5SMmIa4zYvpS0hjJUxRGvDQJIrdgMtniCsHj8uYq7ef%2BagV&X-Amz-Signature=58072022481636dbad5efb174467fdeb8025b25423f96bb2939ced339f1691f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV4S3QMR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe7ibTl%2B7gXsFcPo1CmjwqbXnIntX2dS4hh9TD46b2xgIhAMxjps41MY%2BaGBTpFk8OmXFpTv92Khom5Ae2%2FYNx4lVPKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEOx%2FS%2BfEOzTgEku0q3AM04qRtAQJ%2Fx0d1hLXARc1xRQOeAirVFtYFJb7JWKNiE0if5zGxzSCF5TzTdlFWO1qYMaS5GZNIGlW7p7SXkZnt5B37G1mPgIw0c%2BoRpf%2FtmcqNYPgX%2FiewCv7HZHbun2BqUFi0RKa5gnsF6wmZJs9IEZrJfOTSLsQs53Fn8DzNRfgUSEw5LpSbM6kswpVMVcooQB8kP0Q6e4jZOK1%2BvReytr6KkQGaNG7wKITDrVEbKKsVJiEXIu4M2EEyZzlvNkIHv9cnCX%2BZ7NxikZQTdg6PHnpCzbfq4CyQ%2BzemKl%2BUM3gdcQRjZwXHrPb7oegt9HrOTnWB3yMuiGFdljURG4SfCjTwko2zL8QaGcc18BtFEi0qfX2qNJMWBn9QJIz2tdMC7k1IOyFAKhAOaZglzmYACvEHTrq9oTXXt2SxVXiYpFXmA4Gqiw7Pibp7QrWj%2BwTrW4cN34KYaWfdgXnwDdQwiymx8oWVd8sn8MgN39L%2BsX9VXlAwDH8NgyrYQ99utmh4OvPEt42Iy7idtzbbdxkZB8IlnkO85ZIC99Je4qVM7lgg8qr8jxW5X0b9hZvtjI%2FhysMFl8f3QLLoWo8lsSeW5BjmvjCGXawzL%2B2pUj11303zkZ6ACs6F76SdljCc6a3EBjqkAWkzf6Wpn%2BP1D57SP%2BJ5DcJNDZp9NLj9I75QAOvZMxxU2plJy3kmbIj7YktsNbf%2BkSuW0w8%2F41UBeakYEVXH6c2SCdfbyNFqn%2F71qKRe99l2WEZHSdGSuBZgmmxNv4ZKe%2FHuvdDi5rt5h%2BZK%2B6FuidZoX3u6RwwPQFSmhtyf2Ir1T5SMmIa4zYvpS0hjJUxRGvDQJIrdgMtniCsHj8uYq7ef%2BagV&X-Amz-Signature=01304b35a1f67bf10a696d4fc63faca7e30fe6fc360dfc84f9d4795baa0ed23f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDU47NCQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDByClQcy0pm6%2FHrCECxnanXriXONfHY6dc2d1CmwOpYAiEArgVX8Y%2BOGxTpiL4%2FK7XuXlMR8sYphH9KcXbz2rM6LBMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6ZbmQ5xYL%2BYEdfrircA6IBD0XBptKq%2F%2FcUDg%2FB1Wv%2BBrKPS9Gr3KVil5qqLNYyN5zbNn%2Ba8sYq2drK5a20qoq%2BSC0DQQu%2FvX0VCn4Zk0Ht0k0MDTnkbBxM6xyQl3DPkt7v0UMSprasZeR4MOf%2FK9Aanyjrn0zXczgTxp7j8ZV%2F%2Fig%2Ft8knoWiFajWwFx4Ts0jVYM0Oh3TbgL%2BpnoSvPk72GVsaRMjEGtlH2ejZZa4NURObTuR8IwC7HxL3KcHj%2Fjuif45sgBYkvYkFJ7MqzbzYnIvZMNchE8dX988WSlIkUz53tdIthwdcGHZ5SWo6eSkh0rRMGey27M308p%2F%2BBGdfGPAyDsbUn3%2B2m3s8sLDqtcownSVg3etOOjFUxLBdo0qwWJw5JzxuUMgFp%2B4jZyADMDUGWGr4Fj6nng6oHOzJduCAZrcCoOwisrpV8HZFa%2FnNxr6ON3oecScZ0NdjxUfmWhGlH166zIHLTxhSvmzRGeBIE29XKLwefm5Epu2vv5u3SPnu0kSPLBkgSSe13MWnZ%2B%2B39VYBU1QbF35Gd6J%2FJ4cpwyb8tHNT7uTkr9p0KwGP66VNswHwrHpmuTxgSF6o1%2FUM48Or9PYD65%2FJ5xNHF46dwv8YXzhSHJeKVYYiLaMeoT97Gj6f05QRMPnprcQGOqUB5w3M7K7h%2FYQ8%2Fbf%2B0xhRlmedSYV4tnFnYWZJvjXAvMVmRCs%2BlIa73NhgMnfcpIOJjT4zYCgMWXOd%2Bt2il%2FSvuFp1OZxYPnpWdpCsn5iYbXsRaq5AYPIOt%2FTkEpSSVltzX310Dggx4Wkri92rZP4pJoECewSSE0o4wv4sD%2FE8vYX6evQk93cZQXLQdOhQSHnbrfFKdxJ1p3on%2Bn8nkAPvoUXP%2BBMG&X-Amz-Signature=78d9e91de3059bd27f01a62a2eb92e81d0d3e99e1f7d8f35e3b23b8c17e2c2a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDU47NCQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDByClQcy0pm6%2FHrCECxnanXriXONfHY6dc2d1CmwOpYAiEArgVX8Y%2BOGxTpiL4%2FK7XuXlMR8sYphH9KcXbz2rM6LBMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6ZbmQ5xYL%2BYEdfrircA6IBD0XBptKq%2F%2FcUDg%2FB1Wv%2BBrKPS9Gr3KVil5qqLNYyN5zbNn%2Ba8sYq2drK5a20qoq%2BSC0DQQu%2FvX0VCn4Zk0Ht0k0MDTnkbBxM6xyQl3DPkt7v0UMSprasZeR4MOf%2FK9Aanyjrn0zXczgTxp7j8ZV%2F%2Fig%2Ft8knoWiFajWwFx4Ts0jVYM0Oh3TbgL%2BpnoSvPk72GVsaRMjEGtlH2ejZZa4NURObTuR8IwC7HxL3KcHj%2Fjuif45sgBYkvYkFJ7MqzbzYnIvZMNchE8dX988WSlIkUz53tdIthwdcGHZ5SWo6eSkh0rRMGey27M308p%2F%2BBGdfGPAyDsbUn3%2B2m3s8sLDqtcownSVg3etOOjFUxLBdo0qwWJw5JzxuUMgFp%2B4jZyADMDUGWGr4Fj6nng6oHOzJduCAZrcCoOwisrpV8HZFa%2FnNxr6ON3oecScZ0NdjxUfmWhGlH166zIHLTxhSvmzRGeBIE29XKLwefm5Epu2vv5u3SPnu0kSPLBkgSSe13MWnZ%2B%2B39VYBU1QbF35Gd6J%2FJ4cpwyb8tHNT7uTkr9p0KwGP66VNswHwrHpmuTxgSF6o1%2FUM48Or9PYD65%2FJ5xNHF46dwv8YXzhSHJeKVYYiLaMeoT97Gj6f05QRMPnprcQGOqUB5w3M7K7h%2FYQ8%2Fbf%2B0xhRlmedSYV4tnFnYWZJvjXAvMVmRCs%2BlIa73NhgMnfcpIOJjT4zYCgMWXOd%2Bt2il%2FSvuFp1OZxYPnpWdpCsn5iYbXsRaq5AYPIOt%2FTkEpSSVltzX310Dggx4Wkri92rZP4pJoECewSSE0o4wv4sD%2FE8vYX6evQk93cZQXLQdOhQSHnbrfFKdxJ1p3on%2Bn8nkAPvoUXP%2BBMG&X-Amz-Signature=ab906be86326e72aa00c445c53adc0dbed3ec9e46e7f252268ed8e7c84faaaec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDU47NCQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDByClQcy0pm6%2FHrCECxnanXriXONfHY6dc2d1CmwOpYAiEArgVX8Y%2BOGxTpiL4%2FK7XuXlMR8sYphH9KcXbz2rM6LBMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6ZbmQ5xYL%2BYEdfrircA6IBD0XBptKq%2F%2FcUDg%2FB1Wv%2BBrKPS9Gr3KVil5qqLNYyN5zbNn%2Ba8sYq2drK5a20qoq%2BSC0DQQu%2FvX0VCn4Zk0Ht0k0MDTnkbBxM6xyQl3DPkt7v0UMSprasZeR4MOf%2FK9Aanyjrn0zXczgTxp7j8ZV%2F%2Fig%2Ft8knoWiFajWwFx4Ts0jVYM0Oh3TbgL%2BpnoSvPk72GVsaRMjEGtlH2ejZZa4NURObTuR8IwC7HxL3KcHj%2Fjuif45sgBYkvYkFJ7MqzbzYnIvZMNchE8dX988WSlIkUz53tdIthwdcGHZ5SWo6eSkh0rRMGey27M308p%2F%2BBGdfGPAyDsbUn3%2B2m3s8sLDqtcownSVg3etOOjFUxLBdo0qwWJw5JzxuUMgFp%2B4jZyADMDUGWGr4Fj6nng6oHOzJduCAZrcCoOwisrpV8HZFa%2FnNxr6ON3oecScZ0NdjxUfmWhGlH166zIHLTxhSvmzRGeBIE29XKLwefm5Epu2vv5u3SPnu0kSPLBkgSSe13MWnZ%2B%2B39VYBU1QbF35Gd6J%2FJ4cpwyb8tHNT7uTkr9p0KwGP66VNswHwrHpmuTxgSF6o1%2FUM48Or9PYD65%2FJ5xNHF46dwv8YXzhSHJeKVYYiLaMeoT97Gj6f05QRMPnprcQGOqUB5w3M7K7h%2FYQ8%2Fbf%2B0xhRlmedSYV4tnFnYWZJvjXAvMVmRCs%2BlIa73NhgMnfcpIOJjT4zYCgMWXOd%2Bt2il%2FSvuFp1OZxYPnpWdpCsn5iYbXsRaq5AYPIOt%2FTkEpSSVltzX310Dggx4Wkri92rZP4pJoECewSSE0o4wv4sD%2FE8vYX6evQk93cZQXLQdOhQSHnbrfFKdxJ1p3on%2Bn8nkAPvoUXP%2BBMG&X-Amz-Signature=12ff81991b021b030a5c4c8bae29e1a44c61f1d6c7308ebdbcb14ecbfd72e3df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDU47NCQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDByClQcy0pm6%2FHrCECxnanXriXONfHY6dc2d1CmwOpYAiEArgVX8Y%2BOGxTpiL4%2FK7XuXlMR8sYphH9KcXbz2rM6LBMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6ZbmQ5xYL%2BYEdfrircA6IBD0XBptKq%2F%2FcUDg%2FB1Wv%2BBrKPS9Gr3KVil5qqLNYyN5zbNn%2Ba8sYq2drK5a20qoq%2BSC0DQQu%2FvX0VCn4Zk0Ht0k0MDTnkbBxM6xyQl3DPkt7v0UMSprasZeR4MOf%2FK9Aanyjrn0zXczgTxp7j8ZV%2F%2Fig%2Ft8knoWiFajWwFx4Ts0jVYM0Oh3TbgL%2BpnoSvPk72GVsaRMjEGtlH2ejZZa4NURObTuR8IwC7HxL3KcHj%2Fjuif45sgBYkvYkFJ7MqzbzYnIvZMNchE8dX988WSlIkUz53tdIthwdcGHZ5SWo6eSkh0rRMGey27M308p%2F%2BBGdfGPAyDsbUn3%2B2m3s8sLDqtcownSVg3etOOjFUxLBdo0qwWJw5JzxuUMgFp%2B4jZyADMDUGWGr4Fj6nng6oHOzJduCAZrcCoOwisrpV8HZFa%2FnNxr6ON3oecScZ0NdjxUfmWhGlH166zIHLTxhSvmzRGeBIE29XKLwefm5Epu2vv5u3SPnu0kSPLBkgSSe13MWnZ%2B%2B39VYBU1QbF35Gd6J%2FJ4cpwyb8tHNT7uTkr9p0KwGP66VNswHwrHpmuTxgSF6o1%2FUM48Or9PYD65%2FJ5xNHF46dwv8YXzhSHJeKVYYiLaMeoT97Gj6f05QRMPnprcQGOqUB5w3M7K7h%2FYQ8%2Fbf%2B0xhRlmedSYV4tnFnYWZJvjXAvMVmRCs%2BlIa73NhgMnfcpIOJjT4zYCgMWXOd%2Bt2il%2FSvuFp1OZxYPnpWdpCsn5iYbXsRaq5AYPIOt%2FTkEpSSVltzX310Dggx4Wkri92rZP4pJoECewSSE0o4wv4sD%2FE8vYX6evQk93cZQXLQdOhQSHnbrfFKdxJ1p3on%2Bn8nkAPvoUXP%2BBMG&X-Amz-Signature=77da242f0701373017c2378bfd6399a3de91095ec949d09b39bf5488cba71f58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDU47NCQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDByClQcy0pm6%2FHrCECxnanXriXONfHY6dc2d1CmwOpYAiEArgVX8Y%2BOGxTpiL4%2FK7XuXlMR8sYphH9KcXbz2rM6LBMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6ZbmQ5xYL%2BYEdfrircA6IBD0XBptKq%2F%2FcUDg%2FB1Wv%2BBrKPS9Gr3KVil5qqLNYyN5zbNn%2Ba8sYq2drK5a20qoq%2BSC0DQQu%2FvX0VCn4Zk0Ht0k0MDTnkbBxM6xyQl3DPkt7v0UMSprasZeR4MOf%2FK9Aanyjrn0zXczgTxp7j8ZV%2F%2Fig%2Ft8knoWiFajWwFx4Ts0jVYM0Oh3TbgL%2BpnoSvPk72GVsaRMjEGtlH2ejZZa4NURObTuR8IwC7HxL3KcHj%2Fjuif45sgBYkvYkFJ7MqzbzYnIvZMNchE8dX988WSlIkUz53tdIthwdcGHZ5SWo6eSkh0rRMGey27M308p%2F%2BBGdfGPAyDsbUn3%2B2m3s8sLDqtcownSVg3etOOjFUxLBdo0qwWJw5JzxuUMgFp%2B4jZyADMDUGWGr4Fj6nng6oHOzJduCAZrcCoOwisrpV8HZFa%2FnNxr6ON3oecScZ0NdjxUfmWhGlH166zIHLTxhSvmzRGeBIE29XKLwefm5Epu2vv5u3SPnu0kSPLBkgSSe13MWnZ%2B%2B39VYBU1QbF35Gd6J%2FJ4cpwyb8tHNT7uTkr9p0KwGP66VNswHwrHpmuTxgSF6o1%2FUM48Or9PYD65%2FJ5xNHF46dwv8YXzhSHJeKVYYiLaMeoT97Gj6f05QRMPnprcQGOqUB5w3M7K7h%2FYQ8%2Fbf%2B0xhRlmedSYV4tnFnYWZJvjXAvMVmRCs%2BlIa73NhgMnfcpIOJjT4zYCgMWXOd%2Bt2il%2FSvuFp1OZxYPnpWdpCsn5iYbXsRaq5AYPIOt%2FTkEpSSVltzX310Dggx4Wkri92rZP4pJoECewSSE0o4wv4sD%2FE8vYX6evQk93cZQXLQdOhQSHnbrfFKdxJ1p3on%2Bn8nkAPvoUXP%2BBMG&X-Amz-Signature=434c1f8876e859678a94b136d4f7f6c4696a9a530fbc99c2d6061e34735db51e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDU47NCQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDByClQcy0pm6%2FHrCECxnanXriXONfHY6dc2d1CmwOpYAiEArgVX8Y%2BOGxTpiL4%2FK7XuXlMR8sYphH9KcXbz2rM6LBMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6ZbmQ5xYL%2BYEdfrircA6IBD0XBptKq%2F%2FcUDg%2FB1Wv%2BBrKPS9Gr3KVil5qqLNYyN5zbNn%2Ba8sYq2drK5a20qoq%2BSC0DQQu%2FvX0VCn4Zk0Ht0k0MDTnkbBxM6xyQl3DPkt7v0UMSprasZeR4MOf%2FK9Aanyjrn0zXczgTxp7j8ZV%2F%2Fig%2Ft8knoWiFajWwFx4Ts0jVYM0Oh3TbgL%2BpnoSvPk72GVsaRMjEGtlH2ejZZa4NURObTuR8IwC7HxL3KcHj%2Fjuif45sgBYkvYkFJ7MqzbzYnIvZMNchE8dX988WSlIkUz53tdIthwdcGHZ5SWo6eSkh0rRMGey27M308p%2F%2BBGdfGPAyDsbUn3%2B2m3s8sLDqtcownSVg3etOOjFUxLBdo0qwWJw5JzxuUMgFp%2B4jZyADMDUGWGr4Fj6nng6oHOzJduCAZrcCoOwisrpV8HZFa%2FnNxr6ON3oecScZ0NdjxUfmWhGlH166zIHLTxhSvmzRGeBIE29XKLwefm5Epu2vv5u3SPnu0kSPLBkgSSe13MWnZ%2B%2B39VYBU1QbF35Gd6J%2FJ4cpwyb8tHNT7uTkr9p0KwGP66VNswHwrHpmuTxgSF6o1%2FUM48Or9PYD65%2FJ5xNHF46dwv8YXzhSHJeKVYYiLaMeoT97Gj6f05QRMPnprcQGOqUB5w3M7K7h%2FYQ8%2Fbf%2B0xhRlmedSYV4tnFnYWZJvjXAvMVmRCs%2BlIa73NhgMnfcpIOJjT4zYCgMWXOd%2Bt2il%2FSvuFp1OZxYPnpWdpCsn5iYbXsRaq5AYPIOt%2FTkEpSSVltzX310Dggx4Wkri92rZP4pJoECewSSE0o4wv4sD%2FE8vYX6evQk93cZQXLQdOhQSHnbrfFKdxJ1p3on%2Bn8nkAPvoUXP%2BBMG&X-Amz-Signature=e46c051847aa1addcecc9c1fc31609ecf1e0813c89f42c00293155169809fedc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDU47NCQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDByClQcy0pm6%2FHrCECxnanXriXONfHY6dc2d1CmwOpYAiEArgVX8Y%2BOGxTpiL4%2FK7XuXlMR8sYphH9KcXbz2rM6LBMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6ZbmQ5xYL%2BYEdfrircA6IBD0XBptKq%2F%2FcUDg%2FB1Wv%2BBrKPS9Gr3KVil5qqLNYyN5zbNn%2Ba8sYq2drK5a20qoq%2BSC0DQQu%2FvX0VCn4Zk0Ht0k0MDTnkbBxM6xyQl3DPkt7v0UMSprasZeR4MOf%2FK9Aanyjrn0zXczgTxp7j8ZV%2F%2Fig%2Ft8knoWiFajWwFx4Ts0jVYM0Oh3TbgL%2BpnoSvPk72GVsaRMjEGtlH2ejZZa4NURObTuR8IwC7HxL3KcHj%2Fjuif45sgBYkvYkFJ7MqzbzYnIvZMNchE8dX988WSlIkUz53tdIthwdcGHZ5SWo6eSkh0rRMGey27M308p%2F%2BBGdfGPAyDsbUn3%2B2m3s8sLDqtcownSVg3etOOjFUxLBdo0qwWJw5JzxuUMgFp%2B4jZyADMDUGWGr4Fj6nng6oHOzJduCAZrcCoOwisrpV8HZFa%2FnNxr6ON3oecScZ0NdjxUfmWhGlH166zIHLTxhSvmzRGeBIE29XKLwefm5Epu2vv5u3SPnu0kSPLBkgSSe13MWnZ%2B%2B39VYBU1QbF35Gd6J%2FJ4cpwyb8tHNT7uTkr9p0KwGP66VNswHwrHpmuTxgSF6o1%2FUM48Or9PYD65%2FJ5xNHF46dwv8YXzhSHJeKVYYiLaMeoT97Gj6f05QRMPnprcQGOqUB5w3M7K7h%2FYQ8%2Fbf%2B0xhRlmedSYV4tnFnYWZJvjXAvMVmRCs%2BlIa73NhgMnfcpIOJjT4zYCgMWXOd%2Bt2il%2FSvuFp1OZxYPnpWdpCsn5iYbXsRaq5AYPIOt%2FTkEpSSVltzX310Dggx4Wkri92rZP4pJoECewSSE0o4wv4sD%2FE8vYX6evQk93cZQXLQdOhQSHnbrfFKdxJ1p3on%2Bn8nkAPvoUXP%2BBMG&X-Amz-Signature=7b80b0f660d4f4d4181c7ad891efd994e3da054d3628ec8f897c5849ce5bd341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
