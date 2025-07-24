---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T01:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T01:34:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKD23DE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDxJVJwA1lL82%2BSaV7UvdoyNmsRPZJeBtsTjjx5TcpIYgIhAMAdMb%2FGQdKTkv%2FNYwxzpQyqDHr6raROyeE%2BpYXaPRaPKv8DCDIQABoMNjM3NDIzMTgzODA1IgyPH9EooJYYNVDD8NEq3APJwN3X8U2uvHe31nWTlo8YsXBhRFcura68PxKMwcCdHtzNMl7OfJfv2PvFBNA4S5o%2FJgvG4z%2FN8hKTYyd73MfHqDgEBxqGEiabBw2Sp49F6Nz9O5kN%2B%2FvePkHWxbhiU3wiwnbG4QpcVOeRKNlqwF3xqlJJ5fO8wuTLQhN8neBKUbwlnKfA96TpmbPWaSLAAFm7E9Bjz148r40vAWb%2BeNMSWh64AQ%2FsrqpMI93PR4nWnh2XzVeZsrVO6NKxIgJRxt1MYq7LgC78MGhvZXer1LXUdqaAsSm5HuDYLwJ6vNzI0J2QZZ7aeKNQ5APxb%2FAGsevGcsbDwU62nEFA41YYcpc2%2BF3YjVxmadZjXf3ytKdVxl14MUYzxpxGy5J0QZ8zwSZx%2F6VWKqmnc9Dv2cXGw9EGRilDpAcQkx1Vq%2FksjgRclJH4H188W8fk9%2BnQt7OHj6g7OSw%2Bzz9FHKYYak26VW8x4eGGjgByi1xjjHvT4KPF7D9fTW9om63HxrPJpEF15I1oEsEN%2FQeLxgZWAVjCk98YI9mDQfgJle2%2Bt7Y0nVFZFwpvTFEUZ3eT4mrtZyDEjhT0hlgA5OgsbexalPppJXxRBgsuNUolq5d3%2Fbh9keeVIs6CPEMPvwyCvgmmWTDX04nEBjqkAXOpw%2B2dBskh7X91SvIIRLSnnLORuEjFlamHTUGYak2wyxpzNKq8i2m%2BQ3MQpODBBofvtZYfiO9Kx1snkPAQLFX6xkNypSmcV9CzOzw3jMiXEYRgcOHem1Bt0v50KSsW3jzrV0TqGzqjUyt3TMCfchWMzA3cwgbOGUqOL3OL1K%2BVkqB%2FQd%2BZ2l5YUBPlfnnNO%2F3tjQZa7qTheluQ4dHyQuvRBBqv&X-Amz-Signature=bc17330fa1df7ef196d854e938281864edc38cc2c4a29af5bb8fdd9add8b22e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKD23DE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDxJVJwA1lL82%2BSaV7UvdoyNmsRPZJeBtsTjjx5TcpIYgIhAMAdMb%2FGQdKTkv%2FNYwxzpQyqDHr6raROyeE%2BpYXaPRaPKv8DCDIQABoMNjM3NDIzMTgzODA1IgyPH9EooJYYNVDD8NEq3APJwN3X8U2uvHe31nWTlo8YsXBhRFcura68PxKMwcCdHtzNMl7OfJfv2PvFBNA4S5o%2FJgvG4z%2FN8hKTYyd73MfHqDgEBxqGEiabBw2Sp49F6Nz9O5kN%2B%2FvePkHWxbhiU3wiwnbG4QpcVOeRKNlqwF3xqlJJ5fO8wuTLQhN8neBKUbwlnKfA96TpmbPWaSLAAFm7E9Bjz148r40vAWb%2BeNMSWh64AQ%2FsrqpMI93PR4nWnh2XzVeZsrVO6NKxIgJRxt1MYq7LgC78MGhvZXer1LXUdqaAsSm5HuDYLwJ6vNzI0J2QZZ7aeKNQ5APxb%2FAGsevGcsbDwU62nEFA41YYcpc2%2BF3YjVxmadZjXf3ytKdVxl14MUYzxpxGy5J0QZ8zwSZx%2F6VWKqmnc9Dv2cXGw9EGRilDpAcQkx1Vq%2FksjgRclJH4H188W8fk9%2BnQt7OHj6g7OSw%2Bzz9FHKYYak26VW8x4eGGjgByi1xjjHvT4KPF7D9fTW9om63HxrPJpEF15I1oEsEN%2FQeLxgZWAVjCk98YI9mDQfgJle2%2Bt7Y0nVFZFwpvTFEUZ3eT4mrtZyDEjhT0hlgA5OgsbexalPppJXxRBgsuNUolq5d3%2Fbh9keeVIs6CPEMPvwyCvgmmWTDX04nEBjqkAXOpw%2B2dBskh7X91SvIIRLSnnLORuEjFlamHTUGYak2wyxpzNKq8i2m%2BQ3MQpODBBofvtZYfiO9Kx1snkPAQLFX6xkNypSmcV9CzOzw3jMiXEYRgcOHem1Bt0v50KSsW3jzrV0TqGzqjUyt3TMCfchWMzA3cwgbOGUqOL3OL1K%2BVkqB%2FQd%2BZ2l5YUBPlfnnNO%2F3tjQZa7qTheluQ4dHyQuvRBBqv&X-Amz-Signature=424653faf7cf89c2f759b882ecc957b0fbb6884da825c29a9ef7b34038989790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly highly HIGHLY recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKD23DE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDxJVJwA1lL82%2BSaV7UvdoyNmsRPZJeBtsTjjx5TcpIYgIhAMAdMb%2FGQdKTkv%2FNYwxzpQyqDHr6raROyeE%2BpYXaPRaPKv8DCDIQABoMNjM3NDIzMTgzODA1IgyPH9EooJYYNVDD8NEq3APJwN3X8U2uvHe31nWTlo8YsXBhRFcura68PxKMwcCdHtzNMl7OfJfv2PvFBNA4S5o%2FJgvG4z%2FN8hKTYyd73MfHqDgEBxqGEiabBw2Sp49F6Nz9O5kN%2B%2FvePkHWxbhiU3wiwnbG4QpcVOeRKNlqwF3xqlJJ5fO8wuTLQhN8neBKUbwlnKfA96TpmbPWaSLAAFm7E9Bjz148r40vAWb%2BeNMSWh64AQ%2FsrqpMI93PR4nWnh2XzVeZsrVO6NKxIgJRxt1MYq7LgC78MGhvZXer1LXUdqaAsSm5HuDYLwJ6vNzI0J2QZZ7aeKNQ5APxb%2FAGsevGcsbDwU62nEFA41YYcpc2%2BF3YjVxmadZjXf3ytKdVxl14MUYzxpxGy5J0QZ8zwSZx%2F6VWKqmnc9Dv2cXGw9EGRilDpAcQkx1Vq%2FksjgRclJH4H188W8fk9%2BnQt7OHj6g7OSw%2Bzz9FHKYYak26VW8x4eGGjgByi1xjjHvT4KPF7D9fTW9om63HxrPJpEF15I1oEsEN%2FQeLxgZWAVjCk98YI9mDQfgJle2%2Bt7Y0nVFZFwpvTFEUZ3eT4mrtZyDEjhT0hlgA5OgsbexalPppJXxRBgsuNUolq5d3%2Fbh9keeVIs6CPEMPvwyCvgmmWTDX04nEBjqkAXOpw%2B2dBskh7X91SvIIRLSnnLORuEjFlamHTUGYak2wyxpzNKq8i2m%2BQ3MQpODBBofvtZYfiO9Kx1snkPAQLFX6xkNypSmcV9CzOzw3jMiXEYRgcOHem1Bt0v50KSsW3jzrV0TqGzqjUyt3TMCfchWMzA3cwgbOGUqOL3OL1K%2BVkqB%2FQd%2BZ2l5YUBPlfnnNO%2F3tjQZa7qTheluQ4dHyQuvRBBqv&X-Amz-Signature=478e02d55f6e1cd2e2e301cf60bd2a3d29a3cd8ae2b80d2fd8600867e95a4d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are many reasons for this because

- keeps all your code in one place
- You don’t need a monitor, mouse, and keyboard to connect to your Raspberry Pi
- Your laptop is much much faster than your Raspberry Pi so debugging is faster
- Once you are done developing on your laptop all you have to do is copy all the files over to the Pi and Docker will automatically make it work

{{% /alert %}}

## creating workspace + package

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

If you are doing the Dev container setup put these at the bottom of your `Dockerfile`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKD23DE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDxJVJwA1lL82%2BSaV7UvdoyNmsRPZJeBtsTjjx5TcpIYgIhAMAdMb%2FGQdKTkv%2FNYwxzpQyqDHr6raROyeE%2BpYXaPRaPKv8DCDIQABoMNjM3NDIzMTgzODA1IgyPH9EooJYYNVDD8NEq3APJwN3X8U2uvHe31nWTlo8YsXBhRFcura68PxKMwcCdHtzNMl7OfJfv2PvFBNA4S5o%2FJgvG4z%2FN8hKTYyd73MfHqDgEBxqGEiabBw2Sp49F6Nz9O5kN%2B%2FvePkHWxbhiU3wiwnbG4QpcVOeRKNlqwF3xqlJJ5fO8wuTLQhN8neBKUbwlnKfA96TpmbPWaSLAAFm7E9Bjz148r40vAWb%2BeNMSWh64AQ%2FsrqpMI93PR4nWnh2XzVeZsrVO6NKxIgJRxt1MYq7LgC78MGhvZXer1LXUdqaAsSm5HuDYLwJ6vNzI0J2QZZ7aeKNQ5APxb%2FAGsevGcsbDwU62nEFA41YYcpc2%2BF3YjVxmadZjXf3ytKdVxl14MUYzxpxGy5J0QZ8zwSZx%2F6VWKqmnc9Dv2cXGw9EGRilDpAcQkx1Vq%2FksjgRclJH4H188W8fk9%2BnQt7OHj6g7OSw%2Bzz9FHKYYak26VW8x4eGGjgByi1xjjHvT4KPF7D9fTW9om63HxrPJpEF15I1oEsEN%2FQeLxgZWAVjCk98YI9mDQfgJle2%2Bt7Y0nVFZFwpvTFEUZ3eT4mrtZyDEjhT0hlgA5OgsbexalPppJXxRBgsuNUolq5d3%2Fbh9keeVIs6CPEMPvwyCvgmmWTDX04nEBjqkAXOpw%2B2dBskh7X91SvIIRLSnnLORuEjFlamHTUGYak2wyxpzNKq8i2m%2BQ3MQpODBBofvtZYfiO9Kx1snkPAQLFX6xkNypSmcV9CzOzw3jMiXEYRgcOHem1Bt0v50KSsW3jzrV0TqGzqjUyt3TMCfchWMzA3cwgbOGUqOL3OL1K%2BVkqB%2FQd%2BZ2l5YUBPlfnnNO%2F3tjQZa7qTheluQ4dHyQuvRBBqv&X-Amz-Signature=e8371592257bc9cc41c1fbdefff1eabd5ab2220c38f0667e81999e57b0e0254b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKD23DE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDxJVJwA1lL82%2BSaV7UvdoyNmsRPZJeBtsTjjx5TcpIYgIhAMAdMb%2FGQdKTkv%2FNYwxzpQyqDHr6raROyeE%2BpYXaPRaPKv8DCDIQABoMNjM3NDIzMTgzODA1IgyPH9EooJYYNVDD8NEq3APJwN3X8U2uvHe31nWTlo8YsXBhRFcura68PxKMwcCdHtzNMl7OfJfv2PvFBNA4S5o%2FJgvG4z%2FN8hKTYyd73MfHqDgEBxqGEiabBw2Sp49F6Nz9O5kN%2B%2FvePkHWxbhiU3wiwnbG4QpcVOeRKNlqwF3xqlJJ5fO8wuTLQhN8neBKUbwlnKfA96TpmbPWaSLAAFm7E9Bjz148r40vAWb%2BeNMSWh64AQ%2FsrqpMI93PR4nWnh2XzVeZsrVO6NKxIgJRxt1MYq7LgC78MGhvZXer1LXUdqaAsSm5HuDYLwJ6vNzI0J2QZZ7aeKNQ5APxb%2FAGsevGcsbDwU62nEFA41YYcpc2%2BF3YjVxmadZjXf3ytKdVxl14MUYzxpxGy5J0QZ8zwSZx%2F6VWKqmnc9Dv2cXGw9EGRilDpAcQkx1Vq%2FksjgRclJH4H188W8fk9%2BnQt7OHj6g7OSw%2Bzz9FHKYYak26VW8x4eGGjgByi1xjjHvT4KPF7D9fTW9om63HxrPJpEF15I1oEsEN%2FQeLxgZWAVjCk98YI9mDQfgJle2%2Bt7Y0nVFZFwpvTFEUZ3eT4mrtZyDEjhT0hlgA5OgsbexalPppJXxRBgsuNUolq5d3%2Fbh9keeVIs6CPEMPvwyCvgmmWTDX04nEBjqkAXOpw%2B2dBskh7X91SvIIRLSnnLORuEjFlamHTUGYak2wyxpzNKq8i2m%2BQ3MQpODBBofvtZYfiO9Kx1snkPAQLFX6xkNypSmcV9CzOzw3jMiXEYRgcOHem1Bt0v50KSsW3jzrV0TqGzqjUyt3TMCfchWMzA3cwgbOGUqOL3OL1K%2BVkqB%2FQd%2BZ2l5YUBPlfnnNO%2F3tjQZa7qTheluQ4dHyQuvRBBqv&X-Amz-Signature=90b741b71b1fcf6d1723a4c387284fb5d7fbc27c65c9454ee5ecc31364e81dc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKD23DE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDxJVJwA1lL82%2BSaV7UvdoyNmsRPZJeBtsTjjx5TcpIYgIhAMAdMb%2FGQdKTkv%2FNYwxzpQyqDHr6raROyeE%2BpYXaPRaPKv8DCDIQABoMNjM3NDIzMTgzODA1IgyPH9EooJYYNVDD8NEq3APJwN3X8U2uvHe31nWTlo8YsXBhRFcura68PxKMwcCdHtzNMl7OfJfv2PvFBNA4S5o%2FJgvG4z%2FN8hKTYyd73MfHqDgEBxqGEiabBw2Sp49F6Nz9O5kN%2B%2FvePkHWxbhiU3wiwnbG4QpcVOeRKNlqwF3xqlJJ5fO8wuTLQhN8neBKUbwlnKfA96TpmbPWaSLAAFm7E9Bjz148r40vAWb%2BeNMSWh64AQ%2FsrqpMI93PR4nWnh2XzVeZsrVO6NKxIgJRxt1MYq7LgC78MGhvZXer1LXUdqaAsSm5HuDYLwJ6vNzI0J2QZZ7aeKNQ5APxb%2FAGsevGcsbDwU62nEFA41YYcpc2%2BF3YjVxmadZjXf3ytKdVxl14MUYzxpxGy5J0QZ8zwSZx%2F6VWKqmnc9Dv2cXGw9EGRilDpAcQkx1Vq%2FksjgRclJH4H188W8fk9%2BnQt7OHj6g7OSw%2Bzz9FHKYYak26VW8x4eGGjgByi1xjjHvT4KPF7D9fTW9om63HxrPJpEF15I1oEsEN%2FQeLxgZWAVjCk98YI9mDQfgJle2%2Bt7Y0nVFZFwpvTFEUZ3eT4mrtZyDEjhT0hlgA5OgsbexalPppJXxRBgsuNUolq5d3%2Fbh9keeVIs6CPEMPvwyCvgmmWTDX04nEBjqkAXOpw%2B2dBskh7X91SvIIRLSnnLORuEjFlamHTUGYak2wyxpzNKq8i2m%2BQ3MQpODBBofvtZYfiO9Kx1snkPAQLFX6xkNypSmcV9CzOzw3jMiXEYRgcOHem1Bt0v50KSsW3jzrV0TqGzqjUyt3TMCfchWMzA3cwgbOGUqOL3OL1K%2BVkqB%2FQd%2BZ2l5YUBPlfnnNO%2F3tjQZa7qTheluQ4dHyQuvRBBqv&X-Amz-Signature=665aa2c57763e5016f81892a8cf04c0f49f42a6f6b64ba524fb7272f86bdc8ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKD23DE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDxJVJwA1lL82%2BSaV7UvdoyNmsRPZJeBtsTjjx5TcpIYgIhAMAdMb%2FGQdKTkv%2FNYwxzpQyqDHr6raROyeE%2BpYXaPRaPKv8DCDIQABoMNjM3NDIzMTgzODA1IgyPH9EooJYYNVDD8NEq3APJwN3X8U2uvHe31nWTlo8YsXBhRFcura68PxKMwcCdHtzNMl7OfJfv2PvFBNA4S5o%2FJgvG4z%2FN8hKTYyd73MfHqDgEBxqGEiabBw2Sp49F6Nz9O5kN%2B%2FvePkHWxbhiU3wiwnbG4QpcVOeRKNlqwF3xqlJJ5fO8wuTLQhN8neBKUbwlnKfA96TpmbPWaSLAAFm7E9Bjz148r40vAWb%2BeNMSWh64AQ%2FsrqpMI93PR4nWnh2XzVeZsrVO6NKxIgJRxt1MYq7LgC78MGhvZXer1LXUdqaAsSm5HuDYLwJ6vNzI0J2QZZ7aeKNQ5APxb%2FAGsevGcsbDwU62nEFA41YYcpc2%2BF3YjVxmadZjXf3ytKdVxl14MUYzxpxGy5J0QZ8zwSZx%2F6VWKqmnc9Dv2cXGw9EGRilDpAcQkx1Vq%2FksjgRclJH4H188W8fk9%2BnQt7OHj6g7OSw%2Bzz9FHKYYak26VW8x4eGGjgByi1xjjHvT4KPF7D9fTW9om63HxrPJpEF15I1oEsEN%2FQeLxgZWAVjCk98YI9mDQfgJle2%2Bt7Y0nVFZFwpvTFEUZ3eT4mrtZyDEjhT0hlgA5OgsbexalPppJXxRBgsuNUolq5d3%2Fbh9keeVIs6CPEMPvwyCvgmmWTDX04nEBjqkAXOpw%2B2dBskh7X91SvIIRLSnnLORuEjFlamHTUGYak2wyxpzNKq8i2m%2BQ3MQpODBBofvtZYfiO9Kx1snkPAQLFX6xkNypSmcV9CzOzw3jMiXEYRgcOHem1Bt0v50KSsW3jzrV0TqGzqjUyt3TMCfchWMzA3cwgbOGUqOL3OL1K%2BVkqB%2FQd%2BZ2l5YUBPlfnnNO%2F3tjQZa7qTheluQ4dHyQuvRBBqv&X-Amz-Signature=3c87c76f9421c2bc915dcf7763fdf1ae9b4479b1545e938ed00491ad958f4b51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

make a folder in `mbot_pkg` called description and a file called `mbot_description.urdf`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKD23DE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDxJVJwA1lL82%2BSaV7UvdoyNmsRPZJeBtsTjjx5TcpIYgIhAMAdMb%2FGQdKTkv%2FNYwxzpQyqDHr6raROyeE%2BpYXaPRaPKv8DCDIQABoMNjM3NDIzMTgzODA1IgyPH9EooJYYNVDD8NEq3APJwN3X8U2uvHe31nWTlo8YsXBhRFcura68PxKMwcCdHtzNMl7OfJfv2PvFBNA4S5o%2FJgvG4z%2FN8hKTYyd73MfHqDgEBxqGEiabBw2Sp49F6Nz9O5kN%2B%2FvePkHWxbhiU3wiwnbG4QpcVOeRKNlqwF3xqlJJ5fO8wuTLQhN8neBKUbwlnKfA96TpmbPWaSLAAFm7E9Bjz148r40vAWb%2BeNMSWh64AQ%2FsrqpMI93PR4nWnh2XzVeZsrVO6NKxIgJRxt1MYq7LgC78MGhvZXer1LXUdqaAsSm5HuDYLwJ6vNzI0J2QZZ7aeKNQ5APxb%2FAGsevGcsbDwU62nEFA41YYcpc2%2BF3YjVxmadZjXf3ytKdVxl14MUYzxpxGy5J0QZ8zwSZx%2F6VWKqmnc9Dv2cXGw9EGRilDpAcQkx1Vq%2FksjgRclJH4H188W8fk9%2BnQt7OHj6g7OSw%2Bzz9FHKYYak26VW8x4eGGjgByi1xjjHvT4KPF7D9fTW9om63HxrPJpEF15I1oEsEN%2FQeLxgZWAVjCk98YI9mDQfgJle2%2Bt7Y0nVFZFwpvTFEUZ3eT4mrtZyDEjhT0hlgA5OgsbexalPppJXxRBgsuNUolq5d3%2Fbh9keeVIs6CPEMPvwyCvgmmWTDX04nEBjqkAXOpw%2B2dBskh7X91SvIIRLSnnLORuEjFlamHTUGYak2wyxpzNKq8i2m%2BQ3MQpODBBofvtZYfiO9Kx1snkPAQLFX6xkNypSmcV9CzOzw3jMiXEYRgcOHem1Bt0v50KSsW3jzrV0TqGzqjUyt3TMCfchWMzA3cwgbOGUqOL3OL1K%2BVkqB%2FQd%2BZ2l5YUBPlfnnNO%2F3tjQZa7qTheluQ4dHyQuvRBBqv&X-Amz-Signature=0a63d565d47cfc35f089368431101a83d11a4f6cbd909e65b69b9f274c557bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKD23DE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDxJVJwA1lL82%2BSaV7UvdoyNmsRPZJeBtsTjjx5TcpIYgIhAMAdMb%2FGQdKTkv%2FNYwxzpQyqDHr6raROyeE%2BpYXaPRaPKv8DCDIQABoMNjM3NDIzMTgzODA1IgyPH9EooJYYNVDD8NEq3APJwN3X8U2uvHe31nWTlo8YsXBhRFcura68PxKMwcCdHtzNMl7OfJfv2PvFBNA4S5o%2FJgvG4z%2FN8hKTYyd73MfHqDgEBxqGEiabBw2Sp49F6Nz9O5kN%2B%2FvePkHWxbhiU3wiwnbG4QpcVOeRKNlqwF3xqlJJ5fO8wuTLQhN8neBKUbwlnKfA96TpmbPWaSLAAFm7E9Bjz148r40vAWb%2BeNMSWh64AQ%2FsrqpMI93PR4nWnh2XzVeZsrVO6NKxIgJRxt1MYq7LgC78MGhvZXer1LXUdqaAsSm5HuDYLwJ6vNzI0J2QZZ7aeKNQ5APxb%2FAGsevGcsbDwU62nEFA41YYcpc2%2BF3YjVxmadZjXf3ytKdVxl14MUYzxpxGy5J0QZ8zwSZx%2F6VWKqmnc9Dv2cXGw9EGRilDpAcQkx1Vq%2FksjgRclJH4H188W8fk9%2BnQt7OHj6g7OSw%2Bzz9FHKYYak26VW8x4eGGjgByi1xjjHvT4KPF7D9fTW9om63HxrPJpEF15I1oEsEN%2FQeLxgZWAVjCk98YI9mDQfgJle2%2Bt7Y0nVFZFwpvTFEUZ3eT4mrtZyDEjhT0hlgA5OgsbexalPppJXxRBgsuNUolq5d3%2Fbh9keeVIs6CPEMPvwyCvgmmWTDX04nEBjqkAXOpw%2B2dBskh7X91SvIIRLSnnLORuEjFlamHTUGYak2wyxpzNKq8i2m%2BQ3MQpODBBofvtZYfiO9Kx1snkPAQLFX6xkNypSmcV9CzOzw3jMiXEYRgcOHem1Bt0v50KSsW3jzrV0TqGzqjUyt3TMCfchWMzA3cwgbOGUqOL3OL1K%2BVkqB%2FQd%2BZ2l5YUBPlfnnNO%2F3tjQZa7qTheluQ4dHyQuvRBBqv&X-Amz-Signature=bf9baecf6df6bafdf8d1c79bc3d28e4fe1b645d8fb804535c7d66d99d1b58d37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKD23DE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDxJVJwA1lL82%2BSaV7UvdoyNmsRPZJeBtsTjjx5TcpIYgIhAMAdMb%2FGQdKTkv%2FNYwxzpQyqDHr6raROyeE%2BpYXaPRaPKv8DCDIQABoMNjM3NDIzMTgzODA1IgyPH9EooJYYNVDD8NEq3APJwN3X8U2uvHe31nWTlo8YsXBhRFcura68PxKMwcCdHtzNMl7OfJfv2PvFBNA4S5o%2FJgvG4z%2FN8hKTYyd73MfHqDgEBxqGEiabBw2Sp49F6Nz9O5kN%2B%2FvePkHWxbhiU3wiwnbG4QpcVOeRKNlqwF3xqlJJ5fO8wuTLQhN8neBKUbwlnKfA96TpmbPWaSLAAFm7E9Bjz148r40vAWb%2BeNMSWh64AQ%2FsrqpMI93PR4nWnh2XzVeZsrVO6NKxIgJRxt1MYq7LgC78MGhvZXer1LXUdqaAsSm5HuDYLwJ6vNzI0J2QZZ7aeKNQ5APxb%2FAGsevGcsbDwU62nEFA41YYcpc2%2BF3YjVxmadZjXf3ytKdVxl14MUYzxpxGy5J0QZ8zwSZx%2F6VWKqmnc9Dv2cXGw9EGRilDpAcQkx1Vq%2FksjgRclJH4H188W8fk9%2BnQt7OHj6g7OSw%2Bzz9FHKYYak26VW8x4eGGjgByi1xjjHvT4KPF7D9fTW9om63HxrPJpEF15I1oEsEN%2FQeLxgZWAVjCk98YI9mDQfgJle2%2Bt7Y0nVFZFwpvTFEUZ3eT4mrtZyDEjhT0hlgA5OgsbexalPppJXxRBgsuNUolq5d3%2Fbh9keeVIs6CPEMPvwyCvgmmWTDX04nEBjqkAXOpw%2B2dBskh7X91SvIIRLSnnLORuEjFlamHTUGYak2wyxpzNKq8i2m%2BQ3MQpODBBofvtZYfiO9Kx1snkPAQLFX6xkNypSmcV9CzOzw3jMiXEYRgcOHem1Bt0v50KSsW3jzrV0TqGzqjUyt3TMCfchWMzA3cwgbOGUqOL3OL1K%2BVkqB%2FQd%2BZ2l5YUBPlfnnNO%2F3tjQZa7qTheluQ4dHyQuvRBBqv&X-Amz-Signature=202cd3a320ab84132cb3007d5b88611586884b828f325fc019413c447f033b70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKD23DE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDxJVJwA1lL82%2BSaV7UvdoyNmsRPZJeBtsTjjx5TcpIYgIhAMAdMb%2FGQdKTkv%2FNYwxzpQyqDHr6raROyeE%2BpYXaPRaPKv8DCDIQABoMNjM3NDIzMTgzODA1IgyPH9EooJYYNVDD8NEq3APJwN3X8U2uvHe31nWTlo8YsXBhRFcura68PxKMwcCdHtzNMl7OfJfv2PvFBNA4S5o%2FJgvG4z%2FN8hKTYyd73MfHqDgEBxqGEiabBw2Sp49F6Nz9O5kN%2B%2FvePkHWxbhiU3wiwnbG4QpcVOeRKNlqwF3xqlJJ5fO8wuTLQhN8neBKUbwlnKfA96TpmbPWaSLAAFm7E9Bjz148r40vAWb%2BeNMSWh64AQ%2FsrqpMI93PR4nWnh2XzVeZsrVO6NKxIgJRxt1MYq7LgC78MGhvZXer1LXUdqaAsSm5HuDYLwJ6vNzI0J2QZZ7aeKNQ5APxb%2FAGsevGcsbDwU62nEFA41YYcpc2%2BF3YjVxmadZjXf3ytKdVxl14MUYzxpxGy5J0QZ8zwSZx%2F6VWKqmnc9Dv2cXGw9EGRilDpAcQkx1Vq%2FksjgRclJH4H188W8fk9%2BnQt7OHj6g7OSw%2Bzz9FHKYYak26VW8x4eGGjgByi1xjjHvT4KPF7D9fTW9om63HxrPJpEF15I1oEsEN%2FQeLxgZWAVjCk98YI9mDQfgJle2%2Bt7Y0nVFZFwpvTFEUZ3eT4mrtZyDEjhT0hlgA5OgsbexalPppJXxRBgsuNUolq5d3%2Fbh9keeVIs6CPEMPvwyCvgmmWTDX04nEBjqkAXOpw%2B2dBskh7X91SvIIRLSnnLORuEjFlamHTUGYak2wyxpzNKq8i2m%2BQ3MQpODBBofvtZYfiO9Kx1snkPAQLFX6xkNypSmcV9CzOzw3jMiXEYRgcOHem1Bt0v50KSsW3jzrV0TqGzqjUyt3TMCfchWMzA3cwgbOGUqOL3OL1K%2BVkqB%2FQd%2BZ2l5YUBPlfnnNO%2F3tjQZa7qTheluQ4dHyQuvRBBqv&X-Amz-Signature=48be08647deb2d9a3493e38303b6da3a6f04b8a178cedc8d74a54149873dcd5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`joint`**_**`_`**_**`state_publisher_gui`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKD23DE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDxJVJwA1lL82%2BSaV7UvdoyNmsRPZJeBtsTjjx5TcpIYgIhAMAdMb%2FGQdKTkv%2FNYwxzpQyqDHr6raROyeE%2BpYXaPRaPKv8DCDIQABoMNjM3NDIzMTgzODA1IgyPH9EooJYYNVDD8NEq3APJwN3X8U2uvHe31nWTlo8YsXBhRFcura68PxKMwcCdHtzNMl7OfJfv2PvFBNA4S5o%2FJgvG4z%2FN8hKTYyd73MfHqDgEBxqGEiabBw2Sp49F6Nz9O5kN%2B%2FvePkHWxbhiU3wiwnbG4QpcVOeRKNlqwF3xqlJJ5fO8wuTLQhN8neBKUbwlnKfA96TpmbPWaSLAAFm7E9Bjz148r40vAWb%2BeNMSWh64AQ%2FsrqpMI93PR4nWnh2XzVeZsrVO6NKxIgJRxt1MYq7LgC78MGhvZXer1LXUdqaAsSm5HuDYLwJ6vNzI0J2QZZ7aeKNQ5APxb%2FAGsevGcsbDwU62nEFA41YYcpc2%2BF3YjVxmadZjXf3ytKdVxl14MUYzxpxGy5J0QZ8zwSZx%2F6VWKqmnc9Dv2cXGw9EGRilDpAcQkx1Vq%2FksjgRclJH4H188W8fk9%2BnQt7OHj6g7OSw%2Bzz9FHKYYak26VW8x4eGGjgByi1xjjHvT4KPF7D9fTW9om63HxrPJpEF15I1oEsEN%2FQeLxgZWAVjCk98YI9mDQfgJle2%2Bt7Y0nVFZFwpvTFEUZ3eT4mrtZyDEjhT0hlgA5OgsbexalPppJXxRBgsuNUolq5d3%2Fbh9keeVIs6CPEMPvwyCvgmmWTDX04nEBjqkAXOpw%2B2dBskh7X91SvIIRLSnnLORuEjFlamHTUGYak2wyxpzNKq8i2m%2BQ3MQpODBBofvtZYfiO9Kx1snkPAQLFX6xkNypSmcV9CzOzw3jMiXEYRgcOHem1Bt0v50KSsW3jzrV0TqGzqjUyt3TMCfchWMzA3cwgbOGUqOL3OL1K%2BVkqB%2FQd%2BZ2l5YUBPlfnnNO%2F3tjQZa7qTheluQ4dHyQuvRBBqv&X-Amz-Signature=dcc0698e437f0a56c9cae351ad9b5aa6074d28c78712784bd297dd60daa8b325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKD23DE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDxJVJwA1lL82%2BSaV7UvdoyNmsRPZJeBtsTjjx5TcpIYgIhAMAdMb%2FGQdKTkv%2FNYwxzpQyqDHr6raROyeE%2BpYXaPRaPKv8DCDIQABoMNjM3NDIzMTgzODA1IgyPH9EooJYYNVDD8NEq3APJwN3X8U2uvHe31nWTlo8YsXBhRFcura68PxKMwcCdHtzNMl7OfJfv2PvFBNA4S5o%2FJgvG4z%2FN8hKTYyd73MfHqDgEBxqGEiabBw2Sp49F6Nz9O5kN%2B%2FvePkHWxbhiU3wiwnbG4QpcVOeRKNlqwF3xqlJJ5fO8wuTLQhN8neBKUbwlnKfA96TpmbPWaSLAAFm7E9Bjz148r40vAWb%2BeNMSWh64AQ%2FsrqpMI93PR4nWnh2XzVeZsrVO6NKxIgJRxt1MYq7LgC78MGhvZXer1LXUdqaAsSm5HuDYLwJ6vNzI0J2QZZ7aeKNQ5APxb%2FAGsevGcsbDwU62nEFA41YYcpc2%2BF3YjVxmadZjXf3ytKdVxl14MUYzxpxGy5J0QZ8zwSZx%2F6VWKqmnc9Dv2cXGw9EGRilDpAcQkx1Vq%2FksjgRclJH4H188W8fk9%2BnQt7OHj6g7OSw%2Bzz9FHKYYak26VW8x4eGGjgByi1xjjHvT4KPF7D9fTW9om63HxrPJpEF15I1oEsEN%2FQeLxgZWAVjCk98YI9mDQfgJle2%2Bt7Y0nVFZFwpvTFEUZ3eT4mrtZyDEjhT0hlgA5OgsbexalPppJXxRBgsuNUolq5d3%2Fbh9keeVIs6CPEMPvwyCvgmmWTDX04nEBjqkAXOpw%2B2dBskh7X91SvIIRLSnnLORuEjFlamHTUGYak2wyxpzNKq8i2m%2BQ3MQpODBBofvtZYfiO9Kx1snkPAQLFX6xkNypSmcV9CzOzw3jMiXEYRgcOHem1Bt0v50KSsW3jzrV0TqGzqjUyt3TMCfchWMzA3cwgbOGUqOL3OL1K%2BVkqB%2FQd%2BZ2l5YUBPlfnnNO%2F3tjQZa7qTheluQ4dHyQuvRBBqv&X-Amz-Signature=e78094e854cce8b06e1894bd0e24e5f0611c8b5bbcd345fcaeca0331ee226ec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKD23DE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDxJVJwA1lL82%2BSaV7UvdoyNmsRPZJeBtsTjjx5TcpIYgIhAMAdMb%2FGQdKTkv%2FNYwxzpQyqDHr6raROyeE%2BpYXaPRaPKv8DCDIQABoMNjM3NDIzMTgzODA1IgyPH9EooJYYNVDD8NEq3APJwN3X8U2uvHe31nWTlo8YsXBhRFcura68PxKMwcCdHtzNMl7OfJfv2PvFBNA4S5o%2FJgvG4z%2FN8hKTYyd73MfHqDgEBxqGEiabBw2Sp49F6Nz9O5kN%2B%2FvePkHWxbhiU3wiwnbG4QpcVOeRKNlqwF3xqlJJ5fO8wuTLQhN8neBKUbwlnKfA96TpmbPWaSLAAFm7E9Bjz148r40vAWb%2BeNMSWh64AQ%2FsrqpMI93PR4nWnh2XzVeZsrVO6NKxIgJRxt1MYq7LgC78MGhvZXer1LXUdqaAsSm5HuDYLwJ6vNzI0J2QZZ7aeKNQ5APxb%2FAGsevGcsbDwU62nEFA41YYcpc2%2BF3YjVxmadZjXf3ytKdVxl14MUYzxpxGy5J0QZ8zwSZx%2F6VWKqmnc9Dv2cXGw9EGRilDpAcQkx1Vq%2FksjgRclJH4H188W8fk9%2BnQt7OHj6g7OSw%2Bzz9FHKYYak26VW8x4eGGjgByi1xjjHvT4KPF7D9fTW9om63HxrPJpEF15I1oEsEN%2FQeLxgZWAVjCk98YI9mDQfgJle2%2Bt7Y0nVFZFwpvTFEUZ3eT4mrtZyDEjhT0hlgA5OgsbexalPppJXxRBgsuNUolq5d3%2Fbh9keeVIs6CPEMPvwyCvgmmWTDX04nEBjqkAXOpw%2B2dBskh7X91SvIIRLSnnLORuEjFlamHTUGYak2wyxpzNKq8i2m%2BQ3MQpODBBofvtZYfiO9Kx1snkPAQLFX6xkNypSmcV9CzOzw3jMiXEYRgcOHem1Bt0v50KSsW3jzrV0TqGzqjUyt3TMCfchWMzA3cwgbOGUqOL3OL1K%2BVkqB%2FQd%2BZ2l5YUBPlfnnNO%2F3tjQZa7qTheluQ4dHyQuvRBBqv&X-Amz-Signature=1dc4bdf539d8bd13015c94b53264fdb2d977107cf6213c755fa4551b31bbe917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N2QMC6M%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICXlO2ke1Scg4%2BLdEslL4rsckCIdasMZG0E47eSh2ROpAiEA3%2BFZryQtLIyVI3k33yQk%2BHLGLIRYUrGcq8JQnh1BGq0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDL0Y%2BDsLrcbqnOH9UCrcA5aCPLaW9L5cC3LwG5O0DO6Tj8nqGP6T7ITeiuf0yNFgmd0IVIa7J235UxCiPC6DWNmW2IdMmvWS4NCwtnoqFSEAPZB6gnJXDAOFFBsVMvM9lqFw7drCD0Jr%2BuVlEBQ4e7kjhzrT%2B4C0cR417rlcklC3HHst0ZUKHcNmK6gRdofZwkOZ%2F48ooWn9oJ96LPAkEKAHznKa36UEgMX2rldCVR65fa5tMWK4BlCd%2Fki0pskzFmOD8xZt%2B%2BWhiMMHBdl33Eb6pQocoH139Hh1hETPLrtTf3YpAs522OVw3YLju1%2BZ9nVOKwXEihrBJprLz7V0YWOhMTtDiiQ%2BzBBWCcNWbFnD1mmPzyQni1WT9jvGaJfmRRw4CGrEPycYq0iNxsnr%2F3pLXegs0BAiYKCZzaSd4Y7wrTrbx9b4UxkjYrMg9wdp%2BdCmGEYk4gxXAqUTbpTdEQTQAPnGWBH1arC80jYXR4qXchHx9xV%2BpXKucNTw%2Bq4qc3h3Zwo%2Bc9nMrc6WnxYnj8KFJGcKVpjwkzkuj9updEqOlGtj7eRTEH0dcXtciglliAQ17%2Bk6ySh55JrpfQDFatmFZZuVn%2F%2Fp6Os3T%2F%2FtXMKD3RRZzA4DepQXHwL48svuveqNb6K1yT7rqUuXMLrUicQGOqUBFV4iSCQl3jbaA6VAe8Y6TmOw9JzMZsWE3oc2eUEvIRSW1NC%2FqSABNGiNUYTt2cawzs02ld2tyiO8i0fiVmB%2F%2Fa9ZoNV%2Bu%2FWXz%2FYPZ8BS4TTUCrEBFJfBQZF2uKj04%2B1ImdHKx2hV1DtP9fvYIKi2%2FK0B0B7X35JI0MLur6SpZCcX0SHKMYQgWYS9OghMt2iwNmk968KaUzAj1pAE4L9BAHvwvrRj&X-Amz-Signature=08b7bcd26af1d65dca75cc823d46fb3703157f0ca68158326f59af17d92f9893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N2QMC6M%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICXlO2ke1Scg4%2BLdEslL4rsckCIdasMZG0E47eSh2ROpAiEA3%2BFZryQtLIyVI3k33yQk%2BHLGLIRYUrGcq8JQnh1BGq0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDL0Y%2BDsLrcbqnOH9UCrcA5aCPLaW9L5cC3LwG5O0DO6Tj8nqGP6T7ITeiuf0yNFgmd0IVIa7J235UxCiPC6DWNmW2IdMmvWS4NCwtnoqFSEAPZB6gnJXDAOFFBsVMvM9lqFw7drCD0Jr%2BuVlEBQ4e7kjhzrT%2B4C0cR417rlcklC3HHst0ZUKHcNmK6gRdofZwkOZ%2F48ooWn9oJ96LPAkEKAHznKa36UEgMX2rldCVR65fa5tMWK4BlCd%2Fki0pskzFmOD8xZt%2B%2BWhiMMHBdl33Eb6pQocoH139Hh1hETPLrtTf3YpAs522OVw3YLju1%2BZ9nVOKwXEihrBJprLz7V0YWOhMTtDiiQ%2BzBBWCcNWbFnD1mmPzyQni1WT9jvGaJfmRRw4CGrEPycYq0iNxsnr%2F3pLXegs0BAiYKCZzaSd4Y7wrTrbx9b4UxkjYrMg9wdp%2BdCmGEYk4gxXAqUTbpTdEQTQAPnGWBH1arC80jYXR4qXchHx9xV%2BpXKucNTw%2Bq4qc3h3Zwo%2Bc9nMrc6WnxYnj8KFJGcKVpjwkzkuj9updEqOlGtj7eRTEH0dcXtciglliAQ17%2Bk6ySh55JrpfQDFatmFZZuVn%2F%2Fp6Os3T%2F%2FtXMKD3RRZzA4DepQXHwL48svuveqNb6K1yT7rqUuXMLrUicQGOqUBFV4iSCQl3jbaA6VAe8Y6TmOw9JzMZsWE3oc2eUEvIRSW1NC%2FqSABNGiNUYTt2cawzs02ld2tyiO8i0fiVmB%2F%2Fa9ZoNV%2Bu%2FWXz%2FYPZ8BS4TTUCrEBFJfBQZF2uKj04%2B1ImdHKx2hV1DtP9fvYIKi2%2FK0B0B7X35JI0MLur6SpZCcX0SHKMYQgWYS9OghMt2iwNmk968KaUzAj1pAE4L9BAHvwvrRj&X-Amz-Signature=db2cbe16df13fc81b4aebaad8e5dbefb80e403849ad7739843c3527e45877b38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## launch file

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

## add new files to `setup.py` 

if we add new files types to the package we need to update the `setup.py` and rebuild

```python

from setuptools import find_packages, setup
import os
from glob import glob

files = []
for full_filepath in glob('**/*.*', recursive=True):
    filepath = os.path.split(full_filepath)
    if filepath[0] != '':
        result = (os.path.join('share', package_name, filepath[0]), [full_filepath])
        files.append(result)

package_name = 'mbot_pkg'

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

**run:**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N2QMC6M%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICXlO2ke1Scg4%2BLdEslL4rsckCIdasMZG0E47eSh2ROpAiEA3%2BFZryQtLIyVI3k33yQk%2BHLGLIRYUrGcq8JQnh1BGq0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDL0Y%2BDsLrcbqnOH9UCrcA5aCPLaW9L5cC3LwG5O0DO6Tj8nqGP6T7ITeiuf0yNFgmd0IVIa7J235UxCiPC6DWNmW2IdMmvWS4NCwtnoqFSEAPZB6gnJXDAOFFBsVMvM9lqFw7drCD0Jr%2BuVlEBQ4e7kjhzrT%2B4C0cR417rlcklC3HHst0ZUKHcNmK6gRdofZwkOZ%2F48ooWn9oJ96LPAkEKAHznKa36UEgMX2rldCVR65fa5tMWK4BlCd%2Fki0pskzFmOD8xZt%2B%2BWhiMMHBdl33Eb6pQocoH139Hh1hETPLrtTf3YpAs522OVw3YLju1%2BZ9nVOKwXEihrBJprLz7V0YWOhMTtDiiQ%2BzBBWCcNWbFnD1mmPzyQni1WT9jvGaJfmRRw4CGrEPycYq0iNxsnr%2F3pLXegs0BAiYKCZzaSd4Y7wrTrbx9b4UxkjYrMg9wdp%2BdCmGEYk4gxXAqUTbpTdEQTQAPnGWBH1arC80jYXR4qXchHx9xV%2BpXKucNTw%2Bq4qc3h3Zwo%2Bc9nMrc6WnxYnj8KFJGcKVpjwkzkuj9updEqOlGtj7eRTEH0dcXtciglliAQ17%2Bk6ySh55JrpfQDFatmFZZuVn%2F%2Fp6Os3T%2F%2FtXMKD3RRZzA4DepQXHwL48svuveqNb6K1yT7rqUuXMLrUicQGOqUBFV4iSCQl3jbaA6VAe8Y6TmOw9JzMZsWE3oc2eUEvIRSW1NC%2FqSABNGiNUYTt2cawzs02ld2tyiO8i0fiVmB%2F%2Fa9ZoNV%2Bu%2FWXz%2FYPZ8BS4TTUCrEBFJfBQZF2uKj04%2B1ImdHKx2hV1DtP9fvYIKi2%2FK0B0B7X35JI0MLur6SpZCcX0SHKMYQgWYS9OghMt2iwNmk968KaUzAj1pAE4L9BAHvwvrRj&X-Amz-Signature=0baf079339ee94cb24cf7356ebbd50eef00b26064846ec05284f8ac51de70670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running

In a new terminal tab while `rviz` is still open run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N2QMC6M%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICXlO2ke1Scg4%2BLdEslL4rsckCIdasMZG0E47eSh2ROpAiEA3%2BFZryQtLIyVI3k33yQk%2BHLGLIRYUrGcq8JQnh1BGq0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDL0Y%2BDsLrcbqnOH9UCrcA5aCPLaW9L5cC3LwG5O0DO6Tj8nqGP6T7ITeiuf0yNFgmd0IVIa7J235UxCiPC6DWNmW2IdMmvWS4NCwtnoqFSEAPZB6gnJXDAOFFBsVMvM9lqFw7drCD0Jr%2BuVlEBQ4e7kjhzrT%2B4C0cR417rlcklC3HHst0ZUKHcNmK6gRdofZwkOZ%2F48ooWn9oJ96LPAkEKAHznKa36UEgMX2rldCVR65fa5tMWK4BlCd%2Fki0pskzFmOD8xZt%2B%2BWhiMMHBdl33Eb6pQocoH139Hh1hETPLrtTf3YpAs522OVw3YLju1%2BZ9nVOKwXEihrBJprLz7V0YWOhMTtDiiQ%2BzBBWCcNWbFnD1mmPzyQni1WT9jvGaJfmRRw4CGrEPycYq0iNxsnr%2F3pLXegs0BAiYKCZzaSd4Y7wrTrbx9b4UxkjYrMg9wdp%2BdCmGEYk4gxXAqUTbpTdEQTQAPnGWBH1arC80jYXR4qXchHx9xV%2BpXKucNTw%2Bq4qc3h3Zwo%2Bc9nMrc6WnxYnj8KFJGcKVpjwkzkuj9updEqOlGtj7eRTEH0dcXtciglliAQ17%2Bk6ySh55JrpfQDFatmFZZuVn%2F%2Fp6Os3T%2F%2FtXMKD3RRZzA4DepQXHwL48svuveqNb6K1yT7rqUuXMLrUicQGOqUBFV4iSCQl3jbaA6VAe8Y6TmOw9JzMZsWE3oc2eUEvIRSW1NC%2FqSABNGiNUYTt2cawzs02ld2tyiO8i0fiVmB%2F%2Fa9ZoNV%2Bu%2FWXz%2FYPZ8BS4TTUCrEBFJfBQZF2uKj04%2B1ImdHKx2hV1DtP9fvYIKi2%2FK0B0B7X35JI0MLur6SpZCcX0SHKMYQgWYS9OghMt2iwNmk968KaUzAj1pAE4L9BAHvwvrRj&X-Amz-Signature=ec6953763f3bb242110ebc7ba40bd62d3e9074847f92780a1cb09fa94d008cd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N2QMC6M%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICXlO2ke1Scg4%2BLdEslL4rsckCIdasMZG0E47eSh2ROpAiEA3%2BFZryQtLIyVI3k33yQk%2BHLGLIRYUrGcq8JQnh1BGq0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDL0Y%2BDsLrcbqnOH9UCrcA5aCPLaW9L5cC3LwG5O0DO6Tj8nqGP6T7ITeiuf0yNFgmd0IVIa7J235UxCiPC6DWNmW2IdMmvWS4NCwtnoqFSEAPZB6gnJXDAOFFBsVMvM9lqFw7drCD0Jr%2BuVlEBQ4e7kjhzrT%2B4C0cR417rlcklC3HHst0ZUKHcNmK6gRdofZwkOZ%2F48ooWn9oJ96LPAkEKAHznKa36UEgMX2rldCVR65fa5tMWK4BlCd%2Fki0pskzFmOD8xZt%2B%2BWhiMMHBdl33Eb6pQocoH139Hh1hETPLrtTf3YpAs522OVw3YLju1%2BZ9nVOKwXEihrBJprLz7V0YWOhMTtDiiQ%2BzBBWCcNWbFnD1mmPzyQni1WT9jvGaJfmRRw4CGrEPycYq0iNxsnr%2F3pLXegs0BAiYKCZzaSd4Y7wrTrbx9b4UxkjYrMg9wdp%2BdCmGEYk4gxXAqUTbpTdEQTQAPnGWBH1arC80jYXR4qXchHx9xV%2BpXKucNTw%2Bq4qc3h3Zwo%2Bc9nMrc6WnxYnj8KFJGcKVpjwkzkuj9updEqOlGtj7eRTEH0dcXtciglliAQ17%2Bk6ySh55JrpfQDFatmFZZuVn%2F%2Fp6Os3T%2F%2FtXMKD3RRZzA4DepQXHwL48svuveqNb6K1yT7rqUuXMLrUicQGOqUBFV4iSCQl3jbaA6VAe8Y6TmOw9JzMZsWE3oc2eUEvIRSW1NC%2FqSABNGiNUYTt2cawzs02ld2tyiO8i0fiVmB%2F%2Fa9ZoNV%2Bu%2FWXz%2FYPZ8BS4TTUCrEBFJfBQZF2uKj04%2B1ImdHKx2hV1DtP9fvYIKi2%2FK0B0B7X35JI0MLur6SpZCcX0SHKMYQgWYS9OghMt2iwNmk968KaUzAj1pAE4L9BAHvwvrRj&X-Amz-Signature=ed51bf7e3bf78455a644d92d2b7621b3f5bd33333958e4a9008c76e2e5cae078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N2QMC6M%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICXlO2ke1Scg4%2BLdEslL4rsckCIdasMZG0E47eSh2ROpAiEA3%2BFZryQtLIyVI3k33yQk%2BHLGLIRYUrGcq8JQnh1BGq0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDL0Y%2BDsLrcbqnOH9UCrcA5aCPLaW9L5cC3LwG5O0DO6Tj8nqGP6T7ITeiuf0yNFgmd0IVIa7J235UxCiPC6DWNmW2IdMmvWS4NCwtnoqFSEAPZB6gnJXDAOFFBsVMvM9lqFw7drCD0Jr%2BuVlEBQ4e7kjhzrT%2B4C0cR417rlcklC3HHst0ZUKHcNmK6gRdofZwkOZ%2F48ooWn9oJ96LPAkEKAHznKa36UEgMX2rldCVR65fa5tMWK4BlCd%2Fki0pskzFmOD8xZt%2B%2BWhiMMHBdl33Eb6pQocoH139Hh1hETPLrtTf3YpAs522OVw3YLju1%2BZ9nVOKwXEihrBJprLz7V0YWOhMTtDiiQ%2BzBBWCcNWbFnD1mmPzyQni1WT9jvGaJfmRRw4CGrEPycYq0iNxsnr%2F3pLXegs0BAiYKCZzaSd4Y7wrTrbx9b4UxkjYrMg9wdp%2BdCmGEYk4gxXAqUTbpTdEQTQAPnGWBH1arC80jYXR4qXchHx9xV%2BpXKucNTw%2Bq4qc3h3Zwo%2Bc9nMrc6WnxYnj8KFJGcKVpjwkzkuj9updEqOlGtj7eRTEH0dcXtciglliAQ17%2Bk6ySh55JrpfQDFatmFZZuVn%2F%2Fp6Os3T%2F%2FtXMKD3RRZzA4DepQXHwL48svuveqNb6K1yT7rqUuXMLrUicQGOqUBFV4iSCQl3jbaA6VAe8Y6TmOw9JzMZsWE3oc2eUEvIRSW1NC%2FqSABNGiNUYTt2cawzs02ld2tyiO8i0fiVmB%2F%2Fa9ZoNV%2Bu%2FWXz%2FYPZ8BS4TTUCrEBFJfBQZF2uKj04%2B1ImdHKx2hV1DtP9fvYIKi2%2FK0B0B7X35JI0MLur6SpZCcX0SHKMYQgWYS9OghMt2iwNmk968KaUzAj1pAE4L9BAHvwvrRj&X-Amz-Signature=4f73057e70eb169709d983061cf824c57720ee093c5919bdfeb748891b94690a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
