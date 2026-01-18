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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2WV33N%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQDaoi7%2Bkhz5bjlAb5HOtldL4Veo3trBOmv89e5bYIdAiBcwpWVbBj0pqbQewYHWCmbMi6WY0%2FgURWkvwxM%2FuB0pCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtteyineORcbQVWeoKtwDNgfa0nQSuBasaFbUCqX%2F8d1wJUgVDvSQodQpoopUioqHj8%2BaGxIeeuzS0rEi5e05ES89tOaFhJ5i8AvosUWMZeQ5K9XukXm9kTQm1zIV9dHtbUNyEwNO6IUSVL5wu4WX9VIO%2BqLMVLUdZF1UPkM4nRhCgYkghnt1t1q8au6XT66iwwqFidkIN9ixgsuQAPyqq%2FOb3%2BAfwQr%2FlYPNh2GKvCF0mVwKcyJIoQ5GVHfIfy4vYx%2BHXK6349ZP92SzR5%2Ba3Btd84qUOHH%2FZwN1rs3q%2BLVfGkk15luaoZlQJNEVavsfxhi%2BffYTSFvRxZWrfeJVW9Y8l%2F4e%2F4kb4ccqnL0Cr8mB8iVCzIqGAl%2FgUW7inHz4c5BVJVrllhgV6aQBn9pBZpFSkuws%2FneJS9OaEff4%2BimktdTIVo1Xp4OcqdkPDrI%2BD80sQU4C7Es3%2BY6Y0kQLCq3OEW3XkjtXiAz6IsiZZRUcnyR7arMPqnIfadOXul0%2FjDG3lX8crH1ttqM8CKSFTwpcxSWgzLWMGM76XRNGF6LI4LW1LAJHUlFER2noyJBDbVIGjdlToROy%2FTGjtkmX0Uzd74nvOztS50rd4MrqHevmOXB8HOsvma19tbFPX489y5fjchYGjrVKsPEw9ZywywY6pgHFLa7hldLx9kxuUNKabYGc68ijCvXZKOriM6OgzC%2Bj5DIyynpqqwqGBMxIprS%2BmvfN1YVN1PvjY1d4fIntcKZdIWElJZPUHqR8vYVfR8jOHyd2NN9sl11NFK5l9KL3%2FWGhCgXoaD5HXQOOApatRRSdcMQ6G3FlKvylbKoKwI1bA84p8eKbVZima8MplsqF67Yjq8XNk0H2AOvvOgktJyMdlA44zXRJ&X-Amz-Signature=b42f35e4dc30d08c2f4d8cc9377ab122e312f44a3845337941c7f434edf801cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2WV33N%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQDaoi7%2Bkhz5bjlAb5HOtldL4Veo3trBOmv89e5bYIdAiBcwpWVbBj0pqbQewYHWCmbMi6WY0%2FgURWkvwxM%2FuB0pCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtteyineORcbQVWeoKtwDNgfa0nQSuBasaFbUCqX%2F8d1wJUgVDvSQodQpoopUioqHj8%2BaGxIeeuzS0rEi5e05ES89tOaFhJ5i8AvosUWMZeQ5K9XukXm9kTQm1zIV9dHtbUNyEwNO6IUSVL5wu4WX9VIO%2BqLMVLUdZF1UPkM4nRhCgYkghnt1t1q8au6XT66iwwqFidkIN9ixgsuQAPyqq%2FOb3%2BAfwQr%2FlYPNh2GKvCF0mVwKcyJIoQ5GVHfIfy4vYx%2BHXK6349ZP92SzR5%2Ba3Btd84qUOHH%2FZwN1rs3q%2BLVfGkk15luaoZlQJNEVavsfxhi%2BffYTSFvRxZWrfeJVW9Y8l%2F4e%2F4kb4ccqnL0Cr8mB8iVCzIqGAl%2FgUW7inHz4c5BVJVrllhgV6aQBn9pBZpFSkuws%2FneJS9OaEff4%2BimktdTIVo1Xp4OcqdkPDrI%2BD80sQU4C7Es3%2BY6Y0kQLCq3OEW3XkjtXiAz6IsiZZRUcnyR7arMPqnIfadOXul0%2FjDG3lX8crH1ttqM8CKSFTwpcxSWgzLWMGM76XRNGF6LI4LW1LAJHUlFER2noyJBDbVIGjdlToROy%2FTGjtkmX0Uzd74nvOztS50rd4MrqHevmOXB8HOsvma19tbFPX489y5fjchYGjrVKsPEw9ZywywY6pgHFLa7hldLx9kxuUNKabYGc68ijCvXZKOriM6OgzC%2Bj5DIyynpqqwqGBMxIprS%2BmvfN1YVN1PvjY1d4fIntcKZdIWElJZPUHqR8vYVfR8jOHyd2NN9sl11NFK5l9KL3%2FWGhCgXoaD5HXQOOApatRRSdcMQ6G3FlKvylbKoKwI1bA84p8eKbVZima8MplsqF67Yjq8XNk0H2AOvvOgktJyMdlA44zXRJ&X-Amz-Signature=bfc7e7574e884f3bbc4a1d86950312c2845bf198487eb0103ec59fe35f05d86e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2WV33N%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQDaoi7%2Bkhz5bjlAb5HOtldL4Veo3trBOmv89e5bYIdAiBcwpWVbBj0pqbQewYHWCmbMi6WY0%2FgURWkvwxM%2FuB0pCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtteyineORcbQVWeoKtwDNgfa0nQSuBasaFbUCqX%2F8d1wJUgVDvSQodQpoopUioqHj8%2BaGxIeeuzS0rEi5e05ES89tOaFhJ5i8AvosUWMZeQ5K9XukXm9kTQm1zIV9dHtbUNyEwNO6IUSVL5wu4WX9VIO%2BqLMVLUdZF1UPkM4nRhCgYkghnt1t1q8au6XT66iwwqFidkIN9ixgsuQAPyqq%2FOb3%2BAfwQr%2FlYPNh2GKvCF0mVwKcyJIoQ5GVHfIfy4vYx%2BHXK6349ZP92SzR5%2Ba3Btd84qUOHH%2FZwN1rs3q%2BLVfGkk15luaoZlQJNEVavsfxhi%2BffYTSFvRxZWrfeJVW9Y8l%2F4e%2F4kb4ccqnL0Cr8mB8iVCzIqGAl%2FgUW7inHz4c5BVJVrllhgV6aQBn9pBZpFSkuws%2FneJS9OaEff4%2BimktdTIVo1Xp4OcqdkPDrI%2BD80sQU4C7Es3%2BY6Y0kQLCq3OEW3XkjtXiAz6IsiZZRUcnyR7arMPqnIfadOXul0%2FjDG3lX8crH1ttqM8CKSFTwpcxSWgzLWMGM76XRNGF6LI4LW1LAJHUlFER2noyJBDbVIGjdlToROy%2FTGjtkmX0Uzd74nvOztS50rd4MrqHevmOXB8HOsvma19tbFPX489y5fjchYGjrVKsPEw9ZywywY6pgHFLa7hldLx9kxuUNKabYGc68ijCvXZKOriM6OgzC%2Bj5DIyynpqqwqGBMxIprS%2BmvfN1YVN1PvjY1d4fIntcKZdIWElJZPUHqR8vYVfR8jOHyd2NN9sl11NFK5l9KL3%2FWGhCgXoaD5HXQOOApatRRSdcMQ6G3FlKvylbKoKwI1bA84p8eKbVZima8MplsqF67Yjq8XNk0H2AOvvOgktJyMdlA44zXRJ&X-Amz-Signature=0832cb98a956e80d32488076fb58db2baebe48e3ca8e453574c4e39af7203347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2WV33N%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQDaoi7%2Bkhz5bjlAb5HOtldL4Veo3trBOmv89e5bYIdAiBcwpWVbBj0pqbQewYHWCmbMi6WY0%2FgURWkvwxM%2FuB0pCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtteyineORcbQVWeoKtwDNgfa0nQSuBasaFbUCqX%2F8d1wJUgVDvSQodQpoopUioqHj8%2BaGxIeeuzS0rEi5e05ES89tOaFhJ5i8AvosUWMZeQ5K9XukXm9kTQm1zIV9dHtbUNyEwNO6IUSVL5wu4WX9VIO%2BqLMVLUdZF1UPkM4nRhCgYkghnt1t1q8au6XT66iwwqFidkIN9ixgsuQAPyqq%2FOb3%2BAfwQr%2FlYPNh2GKvCF0mVwKcyJIoQ5GVHfIfy4vYx%2BHXK6349ZP92SzR5%2Ba3Btd84qUOHH%2FZwN1rs3q%2BLVfGkk15luaoZlQJNEVavsfxhi%2BffYTSFvRxZWrfeJVW9Y8l%2F4e%2F4kb4ccqnL0Cr8mB8iVCzIqGAl%2FgUW7inHz4c5BVJVrllhgV6aQBn9pBZpFSkuws%2FneJS9OaEff4%2BimktdTIVo1Xp4OcqdkPDrI%2BD80sQU4C7Es3%2BY6Y0kQLCq3OEW3XkjtXiAz6IsiZZRUcnyR7arMPqnIfadOXul0%2FjDG3lX8crH1ttqM8CKSFTwpcxSWgzLWMGM76XRNGF6LI4LW1LAJHUlFER2noyJBDbVIGjdlToROy%2FTGjtkmX0Uzd74nvOztS50rd4MrqHevmOXB8HOsvma19tbFPX489y5fjchYGjrVKsPEw9ZywywY6pgHFLa7hldLx9kxuUNKabYGc68ijCvXZKOriM6OgzC%2Bj5DIyynpqqwqGBMxIprS%2BmvfN1YVN1PvjY1d4fIntcKZdIWElJZPUHqR8vYVfR8jOHyd2NN9sl11NFK5l9KL3%2FWGhCgXoaD5HXQOOApatRRSdcMQ6G3FlKvylbKoKwI1bA84p8eKbVZima8MplsqF67Yjq8XNk0H2AOvvOgktJyMdlA44zXRJ&X-Amz-Signature=6a472c45ff6cfd0ecc66bca79cfe985a3c3a9c63630ec2273f65a481366b14f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2WV33N%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQDaoi7%2Bkhz5bjlAb5HOtldL4Veo3trBOmv89e5bYIdAiBcwpWVbBj0pqbQewYHWCmbMi6WY0%2FgURWkvwxM%2FuB0pCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtteyineORcbQVWeoKtwDNgfa0nQSuBasaFbUCqX%2F8d1wJUgVDvSQodQpoopUioqHj8%2BaGxIeeuzS0rEi5e05ES89tOaFhJ5i8AvosUWMZeQ5K9XukXm9kTQm1zIV9dHtbUNyEwNO6IUSVL5wu4WX9VIO%2BqLMVLUdZF1UPkM4nRhCgYkghnt1t1q8au6XT66iwwqFidkIN9ixgsuQAPyqq%2FOb3%2BAfwQr%2FlYPNh2GKvCF0mVwKcyJIoQ5GVHfIfy4vYx%2BHXK6349ZP92SzR5%2Ba3Btd84qUOHH%2FZwN1rs3q%2BLVfGkk15luaoZlQJNEVavsfxhi%2BffYTSFvRxZWrfeJVW9Y8l%2F4e%2F4kb4ccqnL0Cr8mB8iVCzIqGAl%2FgUW7inHz4c5BVJVrllhgV6aQBn9pBZpFSkuws%2FneJS9OaEff4%2BimktdTIVo1Xp4OcqdkPDrI%2BD80sQU4C7Es3%2BY6Y0kQLCq3OEW3XkjtXiAz6IsiZZRUcnyR7arMPqnIfadOXul0%2FjDG3lX8crH1ttqM8CKSFTwpcxSWgzLWMGM76XRNGF6LI4LW1LAJHUlFER2noyJBDbVIGjdlToROy%2FTGjtkmX0Uzd74nvOztS50rd4MrqHevmOXB8HOsvma19tbFPX489y5fjchYGjrVKsPEw9ZywywY6pgHFLa7hldLx9kxuUNKabYGc68ijCvXZKOriM6OgzC%2Bj5DIyynpqqwqGBMxIprS%2BmvfN1YVN1PvjY1d4fIntcKZdIWElJZPUHqR8vYVfR8jOHyd2NN9sl11NFK5l9KL3%2FWGhCgXoaD5HXQOOApatRRSdcMQ6G3FlKvylbKoKwI1bA84p8eKbVZima8MplsqF67Yjq8XNk0H2AOvvOgktJyMdlA44zXRJ&X-Amz-Signature=affb021284fb76e32fd7e1c03140614457aac5a48bbe43b82d8151a7b5dca3bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2WV33N%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQDaoi7%2Bkhz5bjlAb5HOtldL4Veo3trBOmv89e5bYIdAiBcwpWVbBj0pqbQewYHWCmbMi6WY0%2FgURWkvwxM%2FuB0pCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtteyineORcbQVWeoKtwDNgfa0nQSuBasaFbUCqX%2F8d1wJUgVDvSQodQpoopUioqHj8%2BaGxIeeuzS0rEi5e05ES89tOaFhJ5i8AvosUWMZeQ5K9XukXm9kTQm1zIV9dHtbUNyEwNO6IUSVL5wu4WX9VIO%2BqLMVLUdZF1UPkM4nRhCgYkghnt1t1q8au6XT66iwwqFidkIN9ixgsuQAPyqq%2FOb3%2BAfwQr%2FlYPNh2GKvCF0mVwKcyJIoQ5GVHfIfy4vYx%2BHXK6349ZP92SzR5%2Ba3Btd84qUOHH%2FZwN1rs3q%2BLVfGkk15luaoZlQJNEVavsfxhi%2BffYTSFvRxZWrfeJVW9Y8l%2F4e%2F4kb4ccqnL0Cr8mB8iVCzIqGAl%2FgUW7inHz4c5BVJVrllhgV6aQBn9pBZpFSkuws%2FneJS9OaEff4%2BimktdTIVo1Xp4OcqdkPDrI%2BD80sQU4C7Es3%2BY6Y0kQLCq3OEW3XkjtXiAz6IsiZZRUcnyR7arMPqnIfadOXul0%2FjDG3lX8crH1ttqM8CKSFTwpcxSWgzLWMGM76XRNGF6LI4LW1LAJHUlFER2noyJBDbVIGjdlToROy%2FTGjtkmX0Uzd74nvOztS50rd4MrqHevmOXB8HOsvma19tbFPX489y5fjchYGjrVKsPEw9ZywywY6pgHFLa7hldLx9kxuUNKabYGc68ijCvXZKOriM6OgzC%2Bj5DIyynpqqwqGBMxIprS%2BmvfN1YVN1PvjY1d4fIntcKZdIWElJZPUHqR8vYVfR8jOHyd2NN9sl11NFK5l9KL3%2FWGhCgXoaD5HXQOOApatRRSdcMQ6G3FlKvylbKoKwI1bA84p8eKbVZima8MplsqF67Yjq8XNk0H2AOvvOgktJyMdlA44zXRJ&X-Amz-Signature=21be4c7711716c443fe7397bbc95b4faa65b9664a5b3d2e3d63dc1c5479aeed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2WV33N%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQDaoi7%2Bkhz5bjlAb5HOtldL4Veo3trBOmv89e5bYIdAiBcwpWVbBj0pqbQewYHWCmbMi6WY0%2FgURWkvwxM%2FuB0pCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtteyineORcbQVWeoKtwDNgfa0nQSuBasaFbUCqX%2F8d1wJUgVDvSQodQpoopUioqHj8%2BaGxIeeuzS0rEi5e05ES89tOaFhJ5i8AvosUWMZeQ5K9XukXm9kTQm1zIV9dHtbUNyEwNO6IUSVL5wu4WX9VIO%2BqLMVLUdZF1UPkM4nRhCgYkghnt1t1q8au6XT66iwwqFidkIN9ixgsuQAPyqq%2FOb3%2BAfwQr%2FlYPNh2GKvCF0mVwKcyJIoQ5GVHfIfy4vYx%2BHXK6349ZP92SzR5%2Ba3Btd84qUOHH%2FZwN1rs3q%2BLVfGkk15luaoZlQJNEVavsfxhi%2BffYTSFvRxZWrfeJVW9Y8l%2F4e%2F4kb4ccqnL0Cr8mB8iVCzIqGAl%2FgUW7inHz4c5BVJVrllhgV6aQBn9pBZpFSkuws%2FneJS9OaEff4%2BimktdTIVo1Xp4OcqdkPDrI%2BD80sQU4C7Es3%2BY6Y0kQLCq3OEW3XkjtXiAz6IsiZZRUcnyR7arMPqnIfadOXul0%2FjDG3lX8crH1ttqM8CKSFTwpcxSWgzLWMGM76XRNGF6LI4LW1LAJHUlFER2noyJBDbVIGjdlToROy%2FTGjtkmX0Uzd74nvOztS50rd4MrqHevmOXB8HOsvma19tbFPX489y5fjchYGjrVKsPEw9ZywywY6pgHFLa7hldLx9kxuUNKabYGc68ijCvXZKOriM6OgzC%2Bj5DIyynpqqwqGBMxIprS%2BmvfN1YVN1PvjY1d4fIntcKZdIWElJZPUHqR8vYVfR8jOHyd2NN9sl11NFK5l9KL3%2FWGhCgXoaD5HXQOOApatRRSdcMQ6G3FlKvylbKoKwI1bA84p8eKbVZima8MplsqF67Yjq8XNk0H2AOvvOgktJyMdlA44zXRJ&X-Amz-Signature=49954bfd5ac37699c85d426862548635ca09468a521f361dc15171788aba58b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2WV33N%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQDaoi7%2Bkhz5bjlAb5HOtldL4Veo3trBOmv89e5bYIdAiBcwpWVbBj0pqbQewYHWCmbMi6WY0%2FgURWkvwxM%2FuB0pCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtteyineORcbQVWeoKtwDNgfa0nQSuBasaFbUCqX%2F8d1wJUgVDvSQodQpoopUioqHj8%2BaGxIeeuzS0rEi5e05ES89tOaFhJ5i8AvosUWMZeQ5K9XukXm9kTQm1zIV9dHtbUNyEwNO6IUSVL5wu4WX9VIO%2BqLMVLUdZF1UPkM4nRhCgYkghnt1t1q8au6XT66iwwqFidkIN9ixgsuQAPyqq%2FOb3%2BAfwQr%2FlYPNh2GKvCF0mVwKcyJIoQ5GVHfIfy4vYx%2BHXK6349ZP92SzR5%2Ba3Btd84qUOHH%2FZwN1rs3q%2BLVfGkk15luaoZlQJNEVavsfxhi%2BffYTSFvRxZWrfeJVW9Y8l%2F4e%2F4kb4ccqnL0Cr8mB8iVCzIqGAl%2FgUW7inHz4c5BVJVrllhgV6aQBn9pBZpFSkuws%2FneJS9OaEff4%2BimktdTIVo1Xp4OcqdkPDrI%2BD80sQU4C7Es3%2BY6Y0kQLCq3OEW3XkjtXiAz6IsiZZRUcnyR7arMPqnIfadOXul0%2FjDG3lX8crH1ttqM8CKSFTwpcxSWgzLWMGM76XRNGF6LI4LW1LAJHUlFER2noyJBDbVIGjdlToROy%2FTGjtkmX0Uzd74nvOztS50rd4MrqHevmOXB8HOsvma19tbFPX489y5fjchYGjrVKsPEw9ZywywY6pgHFLa7hldLx9kxuUNKabYGc68ijCvXZKOriM6OgzC%2Bj5DIyynpqqwqGBMxIprS%2BmvfN1YVN1PvjY1d4fIntcKZdIWElJZPUHqR8vYVfR8jOHyd2NN9sl11NFK5l9KL3%2FWGhCgXoaD5HXQOOApatRRSdcMQ6G3FlKvylbKoKwI1bA84p8eKbVZima8MplsqF67Yjq8XNk0H2AOvvOgktJyMdlA44zXRJ&X-Amz-Signature=457f44039ba9dbbbfc31c9c692ac35896865d632fc5f0df59707608fde3e705c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2WV33N%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQDaoi7%2Bkhz5bjlAb5HOtldL4Veo3trBOmv89e5bYIdAiBcwpWVbBj0pqbQewYHWCmbMi6WY0%2FgURWkvwxM%2FuB0pCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtteyineORcbQVWeoKtwDNgfa0nQSuBasaFbUCqX%2F8d1wJUgVDvSQodQpoopUioqHj8%2BaGxIeeuzS0rEi5e05ES89tOaFhJ5i8AvosUWMZeQ5K9XukXm9kTQm1zIV9dHtbUNyEwNO6IUSVL5wu4WX9VIO%2BqLMVLUdZF1UPkM4nRhCgYkghnt1t1q8au6XT66iwwqFidkIN9ixgsuQAPyqq%2FOb3%2BAfwQr%2FlYPNh2GKvCF0mVwKcyJIoQ5GVHfIfy4vYx%2BHXK6349ZP92SzR5%2Ba3Btd84qUOHH%2FZwN1rs3q%2BLVfGkk15luaoZlQJNEVavsfxhi%2BffYTSFvRxZWrfeJVW9Y8l%2F4e%2F4kb4ccqnL0Cr8mB8iVCzIqGAl%2FgUW7inHz4c5BVJVrllhgV6aQBn9pBZpFSkuws%2FneJS9OaEff4%2BimktdTIVo1Xp4OcqdkPDrI%2BD80sQU4C7Es3%2BY6Y0kQLCq3OEW3XkjtXiAz6IsiZZRUcnyR7arMPqnIfadOXul0%2FjDG3lX8crH1ttqM8CKSFTwpcxSWgzLWMGM76XRNGF6LI4LW1LAJHUlFER2noyJBDbVIGjdlToROy%2FTGjtkmX0Uzd74nvOztS50rd4MrqHevmOXB8HOsvma19tbFPX489y5fjchYGjrVKsPEw9ZywywY6pgHFLa7hldLx9kxuUNKabYGc68ijCvXZKOriM6OgzC%2Bj5DIyynpqqwqGBMxIprS%2BmvfN1YVN1PvjY1d4fIntcKZdIWElJZPUHqR8vYVfR8jOHyd2NN9sl11NFK5l9KL3%2FWGhCgXoaD5HXQOOApatRRSdcMQ6G3FlKvylbKoKwI1bA84p8eKbVZima8MplsqF67Yjq8XNk0H2AOvvOgktJyMdlA44zXRJ&X-Amz-Signature=4bb5db507a2fc6deab9767cd2ecf15309718d8edd293e42561d2f9f49c61889a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2WV33N%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQDaoi7%2Bkhz5bjlAb5HOtldL4Veo3trBOmv89e5bYIdAiBcwpWVbBj0pqbQewYHWCmbMi6WY0%2FgURWkvwxM%2FuB0pCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtteyineORcbQVWeoKtwDNgfa0nQSuBasaFbUCqX%2F8d1wJUgVDvSQodQpoopUioqHj8%2BaGxIeeuzS0rEi5e05ES89tOaFhJ5i8AvosUWMZeQ5K9XukXm9kTQm1zIV9dHtbUNyEwNO6IUSVL5wu4WX9VIO%2BqLMVLUdZF1UPkM4nRhCgYkghnt1t1q8au6XT66iwwqFidkIN9ixgsuQAPyqq%2FOb3%2BAfwQr%2FlYPNh2GKvCF0mVwKcyJIoQ5GVHfIfy4vYx%2BHXK6349ZP92SzR5%2Ba3Btd84qUOHH%2FZwN1rs3q%2BLVfGkk15luaoZlQJNEVavsfxhi%2BffYTSFvRxZWrfeJVW9Y8l%2F4e%2F4kb4ccqnL0Cr8mB8iVCzIqGAl%2FgUW7inHz4c5BVJVrllhgV6aQBn9pBZpFSkuws%2FneJS9OaEff4%2BimktdTIVo1Xp4OcqdkPDrI%2BD80sQU4C7Es3%2BY6Y0kQLCq3OEW3XkjtXiAz6IsiZZRUcnyR7arMPqnIfadOXul0%2FjDG3lX8crH1ttqM8CKSFTwpcxSWgzLWMGM76XRNGF6LI4LW1LAJHUlFER2noyJBDbVIGjdlToROy%2FTGjtkmX0Uzd74nvOztS50rd4MrqHevmOXB8HOsvma19tbFPX489y5fjchYGjrVKsPEw9ZywywY6pgHFLa7hldLx9kxuUNKabYGc68ijCvXZKOriM6OgzC%2Bj5DIyynpqqwqGBMxIprS%2BmvfN1YVN1PvjY1d4fIntcKZdIWElJZPUHqR8vYVfR8jOHyd2NN9sl11NFK5l9KL3%2FWGhCgXoaD5HXQOOApatRRSdcMQ6G3FlKvylbKoKwI1bA84p8eKbVZima8MplsqF67Yjq8XNk0H2AOvvOgktJyMdlA44zXRJ&X-Amz-Signature=adb6e7054dd4c9d57e4e9a7255a3598564440381dfc6c0d7644f8b7a244c40b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO3UQCVV%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F7cLvEYG5Xc%2BtI7XxV7dEDMS8KnFMMNYhM9asji8ImwIhAJToKCwCGd7XhudptuxxGDhA4RPTfRK7BQGQ%2FayL28RDKv8DCHAQABoMNjM3NDIzMTgzODA1IgxNVBkMoUUEJaagMYMq3AP8kKDvv4KcmoXTq6Wpa4sBvr%2B2coIeyVljZdIpY5Doe%2Ff75GfbiR3ca%2FRuEwhCPct%2FhqfK6f9vndHaYEz7d%2BgD6aujbc0xUfA83VvD6CC%2BqdksfLDP%2FUxPdLQ8pslxlGYuuMRL40Cpu1RCuIyS2HLwjulwl3t9OY2WZrI7KV%2BOG8dsqnqeSZWvNQJeMgKxFIxsL3L78VyaL3dqIBvJW3WKkdgr4AdgP9DQpSYmudGa5UK7K7rz81ZKyH3DtUgPnMNcX%2Fw2OGpSm95sNq4hpzpD4ZJ5snTao9iaArjgbiOKSuRDfZt1WLvaxTaZZUXuYOe6ImyHCIxxU8OvBZ1C4Fh1Gs6vZ5Pb01RLF1BVPv7xwY2EfgFR4fFdPt3EuHSW91bpO0UTb8aoycr6CyBw5DdGNRDxvmtGDKX0aF90YwdV3zBkY2n6O0ICnU1ciZ2apeBnKw1dD2HOPw9pNaHhFhSCZD7NgQlwvd25vMNkZLrwwJvp0prB0TOVB91snmmdjAIG3Glr7xiv2xxNb%2BP2vyjAiv9JYbHu9TArUSvjOqSpx7yckY1ZWOLoqa6tAnbXuDa4QNb1SUfbJrKgyUNF9aW9NQUwPyH3Q%2FlqHrgnzEsicOw5wnZR9Pns3ve7aDD9nLDLBjqkAXevrfh0lHHTe81jgYwmpkvyF%2FE3YTwCA9Ca3CDR9RUq5Gi4uzdTSmb%2B2%2FBYyWNl15FIIRykvBq3x4xyA9ovvZPPTUNVg8hgLOrd8oeX8WeNevvMqaBnPBGrfhMJWFochygxwtvSANiFIsY8nUCERPgJrICVcOClm09sezlNn56rGlveLrVy%2BQU8cdJvHth8UzYllknhTV0v9MUIwXuFLrfRb4Zp&X-Amz-Signature=9df583b2b14788870069daafc0560771afe8e9958e7c7c7a84859c7825cd5c4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFOCIHCJ%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiN3Ct4qcNB%2BwdnUQzanM7KmICuUPwYtuY8vXbYWvhdQIgZ%2FQam2Bsx7S4u8af00tAbSCuXGjfchOes1QqF3VOQ2Qq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDC6ms%2F8KQ7BXOJG3circA7CZelCjeWFt%2F9HqecnH0B6Eqeg590liy%2FrZBF6h85Tnz6svNhJNezJUU2ZEAtQzFrZqbXcdwjloduKsuxs1jf9%2Bweel202QtNxjuWAIxNUzB4HUNXznBICCV7CoaUS7zwpw29Y1Qt8ImM%2BC6A1mJNMOQGJMFWPUIM676kcKzRhlR4zSNAJuYZAiQ7lceHZKWZqHx%2BBYDfnx47tMgDwcV6%2FXxY%2BdnC6tTBjEoK8oxntJae8408oXPG4OsRKs5Bv9CVB5AuzywkAlLHZ5um1OZIHTXXLYpsAHEUQ0MnBopRF5Wu0AdPyvhMSx7oX%2BwzOgj2KfdGFN6nbLYgE7unjP3N3C1qu8NnWdzFa4Zis4GWj1jFqXY2TO8TK9q4WImQXOPlWpDiXaCKMoLQD45JUblLVRvGizt9gIcFVYGd0LkkwMKwQCv4OVBBzp%2BSWK3f3Z9JkDsbB1vhKJAVDDThKgaUNDjHpyt72zxJAltoQpdPFs3nv21nysZkPJARt1cl4eUp%2B96Sdo7tCp5Q8NKuG1vFEsA6Z5LxFwzHuSn3NGBYNSE2KawmXR7XXmI8eCd8p%2FNJOVTVZe4m1%2BKhVsGj%2FyyH%2FhLOp3XiTVF6k3K61ZFAe9A6yRR%2F7r9rr0vkGIMN2csMsGOqUBea366LnkZedvAWp89uDwyTAKM68jNAjko2bTEx4%2FUAPoI9lkvHs2qbVpnekCmd%2F1yd1m8JupyUWlsNXYGFiO%2BL0wGAdGVPcilmi5XyP7f04qS51u8PePi7WCnJWdGaXHbZebSLT%2F42nXiVH4M8F27QO%2B29rCpP3AOFZhe9wigaL8FSPiV5R9fqnf1iuHNfrgmnNsgxrX9zCP9rSGnYByXi6H4OaR&X-Amz-Signature=8700e28b7933ff3f49c2ff9f04b6f5e37c551b396b25be904c54c2dd979f341b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M2ZZYFK%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJrwkm1ialTWH68JP3JJ9CZIG3TGs3sfgLpbpz3I2V4AiEAyWmVsiOJfRYgPRuzhCtqW3nmCLty2KjoewvXsExY40cq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAc9%2BHTKPEiI%2FC2U4SrcA1%2Be9EBZ8d4h9znqRzRfH%2FoGwftYwlQOoQ3cbHZMAO4KqDpE7eAI3a6Ogdekj9BId2TSNMYz3V6gW9pYOL0roE1o7DKdgUE0Zs5xEJ83gGT1WQI55aXLEksLN64xlA6L8mgHtIlP7Ww%2F1Lb7xYDQMzw9iq1U9uGVjXQ2KV3VhUcgMBYxVNuMYcjPdEWZ1Vymlo76isL1wgse1PlON7iB0NoQU7MMnLy8vkQBFOF8OUOlPccDaRtO2%2FrrGsQI5PtKQ1Y%2BmZDcpV%2FfA7zSmJz1QcWNkSFpQ%2Fsgp2%2F4Gd8RrtS0zhvsMCkNxsKJXU%2F0fziga6HGuLfzcmKx4ZhVLkbAqbtHIrR%2FcSR9UJqhAOiHcimRRdkGn6sZuY6odyw%2BcaJFkp4qjluXk1%2F%2BeUyQmDZNAJx9V4CVSdxOPinPuS0UV2yZbeutVATz%2Butq09PTx8BaLssN9VQ281ISiGRtWlh74Qt9ibdMaJeDJ7qdCVDnvqdiNZAKQfXvMM4Sab28dYOBlvb6wiLXoKgpXnL7z8TWCPqMbe2Q4OcLs29h%2BA%2FlYzpLgK6jL%2BKGZlkEaiplu0HvjJQFs29oPNqcqikEbACkNCTkuO8AH8i0vbY05BPTQkDd0l5E%2BxW8auCKzHdgML%2BdsMsGOqUBErVAh0f5qijMgMxMAf%2Fl5yan%2BPH9Ebm5HNuHwjQvPIocUL%2FKN1hPN2%2BMEcZOzK7MM7uO35FidEKcJAfIFOsZOheYtvXM%2BCGEFobiCdw%2B1RQKTJsAeaPLOWGnCmZlXJnPIrbCIdOVSpQv5Vxf1wHMHNJxSW%2B8gN2JNKPbRgpfMQRfaSB1lY%2FkctW63oeYeFjn6SfPsuqNHP5QrGzv5S8maEqGchYs&X-Amz-Signature=a80aedef1538c98a9c820136705ef9a6fc5148ff466c9ace4c150ab2b885e109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2WV33N%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQDaoi7%2Bkhz5bjlAb5HOtldL4Veo3trBOmv89e5bYIdAiBcwpWVbBj0pqbQewYHWCmbMi6WY0%2FgURWkvwxM%2FuB0pCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtteyineORcbQVWeoKtwDNgfa0nQSuBasaFbUCqX%2F8d1wJUgVDvSQodQpoopUioqHj8%2BaGxIeeuzS0rEi5e05ES89tOaFhJ5i8AvosUWMZeQ5K9XukXm9kTQm1zIV9dHtbUNyEwNO6IUSVL5wu4WX9VIO%2BqLMVLUdZF1UPkM4nRhCgYkghnt1t1q8au6XT66iwwqFidkIN9ixgsuQAPyqq%2FOb3%2BAfwQr%2FlYPNh2GKvCF0mVwKcyJIoQ5GVHfIfy4vYx%2BHXK6349ZP92SzR5%2Ba3Btd84qUOHH%2FZwN1rs3q%2BLVfGkk15luaoZlQJNEVavsfxhi%2BffYTSFvRxZWrfeJVW9Y8l%2F4e%2F4kb4ccqnL0Cr8mB8iVCzIqGAl%2FgUW7inHz4c5BVJVrllhgV6aQBn9pBZpFSkuws%2FneJS9OaEff4%2BimktdTIVo1Xp4OcqdkPDrI%2BD80sQU4C7Es3%2BY6Y0kQLCq3OEW3XkjtXiAz6IsiZZRUcnyR7arMPqnIfadOXul0%2FjDG3lX8crH1ttqM8CKSFTwpcxSWgzLWMGM76XRNGF6LI4LW1LAJHUlFER2noyJBDbVIGjdlToROy%2FTGjtkmX0Uzd74nvOztS50rd4MrqHevmOXB8HOsvma19tbFPX489y5fjchYGjrVKsPEw9ZywywY6pgHFLa7hldLx9kxuUNKabYGc68ijCvXZKOriM6OgzC%2Bj5DIyynpqqwqGBMxIprS%2BmvfN1YVN1PvjY1d4fIntcKZdIWElJZPUHqR8vYVfR8jOHyd2NN9sl11NFK5l9KL3%2FWGhCgXoaD5HXQOOApatRRSdcMQ6G3FlKvylbKoKwI1bA84p8eKbVZima8MplsqF67Yjq8XNk0H2AOvvOgktJyMdlA44zXRJ&X-Amz-Signature=cb8fe9106dbdb76adb3f7404e1d89c1e3242f6027d6efb59cceba68a41bf6287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657YYV5M3%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpgMgYTZslWSJdrNRVw9wuzf6uFqGwk%2BqBV2XhiYfXDAiEAsc6le9nfAfKrlhOFcNKWnHg63RGbSiFDyEhvuAmPVqEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDNu5ukJfpffNOlUELyrcA8fu2%2F5lakLOdThOJhSjFW2WYz2uiStLqn9H6TaLGP7bLoxsd13wYoakICjU%2BlW8r%2F9tNphaBgDBUeY2iIQ5TkKglmqQhGuwNBwmrl90C1O6sImPwno%2ByRQRJQbFVm1DDeUmKd3Y7ejrKfvI%2BLaWTe1QbUCAiCA15DkNlsyMKg1CTgzeMmsfX1vqwZo8EKmBWvB1ZMReKSWjX4%2F5T8mU3Jfl65RC%2FayMUTmIPXETE%2BZ3d2u6Z2UuSRceBUlt6%2FPVoV%2Bvr0ysrRcv2rg94%2BZ2ubm4uqkxnucDIqV0fyIf7Yv%2FkL5sW7ZAGXgBM3qlgbJWNSaIvcJRcTzhwdBSiTSko8HkSsOPbg%2Bcje3WvAVL2Oqpm9HUhwtdF1tfz4aopzOHabnxhi1RQqeYb11RNoVEfMlAHlT36b1dpaeLfI69TL%2B%2BO64MhgOC%2BAPm9OzfhP21bnss498MgDqnvgiC58itNGgt6a%2FhBJrLD4UsefJwOha%2B0N8a8KRckpPlGvvBeXFgfDcrB3C1nmY6rqTsnCY2VVkD%2Bz9LsdtJRYeJAWLDsnlV9WBzd8PG9bi5rmDel6NPw53NgveR11xgddHjmbkvc0DqUtPvqepcGJN79N3PMJiAquBGtEtaZh2Myxu5MOqcsMsGOqUBdZrznIqY%2BeUhGPeLA6t64iSHAyaZgIKJcjf3RObFwOsSdq6DYdWtT8tohbvM8dYT%2FRwmWzoYqBGIGjtkrqSxo8Ij5MVekVcwFioQKiz8MIEbo9zUOeFVBWZ%2BUvtPbICpRza5%2Fe6ELQfVsxIOL3f39ljx%2Fq%2BoU0VbqWI4FgwVBTu7xHnqmi1rcrVvWbywnNlS22ClA3n7d5ZkPw%2F4h0f7Y8LDQrRv&X-Amz-Signature=efb2e3c3bab24ab7beab6c865121f11159048e8305a5aed25ccd69f0bed1dfc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2WV33N%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQDaoi7%2Bkhz5bjlAb5HOtldL4Veo3trBOmv89e5bYIdAiBcwpWVbBj0pqbQewYHWCmbMi6WY0%2FgURWkvwxM%2FuB0pCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtteyineORcbQVWeoKtwDNgfa0nQSuBasaFbUCqX%2F8d1wJUgVDvSQodQpoopUioqHj8%2BaGxIeeuzS0rEi5e05ES89tOaFhJ5i8AvosUWMZeQ5K9XukXm9kTQm1zIV9dHtbUNyEwNO6IUSVL5wu4WX9VIO%2BqLMVLUdZF1UPkM4nRhCgYkghnt1t1q8au6XT66iwwqFidkIN9ixgsuQAPyqq%2FOb3%2BAfwQr%2FlYPNh2GKvCF0mVwKcyJIoQ5GVHfIfy4vYx%2BHXK6349ZP92SzR5%2Ba3Btd84qUOHH%2FZwN1rs3q%2BLVfGkk15luaoZlQJNEVavsfxhi%2BffYTSFvRxZWrfeJVW9Y8l%2F4e%2F4kb4ccqnL0Cr8mB8iVCzIqGAl%2FgUW7inHz4c5BVJVrllhgV6aQBn9pBZpFSkuws%2FneJS9OaEff4%2BimktdTIVo1Xp4OcqdkPDrI%2BD80sQU4C7Es3%2BY6Y0kQLCq3OEW3XkjtXiAz6IsiZZRUcnyR7arMPqnIfadOXul0%2FjDG3lX8crH1ttqM8CKSFTwpcxSWgzLWMGM76XRNGF6LI4LW1LAJHUlFER2noyJBDbVIGjdlToROy%2FTGjtkmX0Uzd74nvOztS50rd4MrqHevmOXB8HOsvma19tbFPX489y5fjchYGjrVKsPEw9ZywywY6pgHFLa7hldLx9kxuUNKabYGc68ijCvXZKOriM6OgzC%2Bj5DIyynpqqwqGBMxIprS%2BmvfN1YVN1PvjY1d4fIntcKZdIWElJZPUHqR8vYVfR8jOHyd2NN9sl11NFK5l9KL3%2FWGhCgXoaD5HXQOOApatRRSdcMQ6G3FlKvylbKoKwI1bA84p8eKbVZima8MplsqF67Yjq8XNk0H2AOvvOgktJyMdlA44zXRJ&X-Amz-Signature=544dba7fae5a6b2dac48b24447415fd902f4a30ffca4eb3572edf68a8e63cc31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WRHBEHQ%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMWMVxahDDudQ8TvS6tvSM7DAHynNxD8kf8nTRg3c4jwIgc2Nj8ko%2B0a0myrRG5rqB4UmyScYx700wjFADmdnLhuAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDtrWH7KhcIMHJWaQyrcA%2FHle7I4humfWE49qcnM0glKpW0zOl1R%2BzntFSMM8gvtcvHg1%2FpVufVQwYDHc9RE5wL21ueZ15QB9zscgdLqZNvHXY%2BSuiDHg98LUxQXyrodRdYn827CEnqCfpHSukAL0HQtMVBJW62sRTRY0QFUO4fke24rNL4zI2CA6AHOeIjdqr15ButZ3wRojfOgRWkHRJV1kaD%2BXnr%2FoW0Zz59c1lhZoM9NB40M2q%2B5Srzu36X7C3vj2Ojjw%2BqhwXn%2Fm9mEX3%2BPLj4Yg4an5macnqBqSHiBnDBD6a5eVMCtiLwu9meu4m4nPDqDEc9YNE0KeQIdlBz69jB1psDJzJfT%2FuTK5ywJYlonTPg50rcg48lDh0Ggt%2B8GUjuJPBQ6bWS6ikiAgFm02wAywDoJ4W2Qf3BYLdHku1BrrX711x%2BZ5cM3q%2BVVARBlU2%2B2u2LtfzMf64hutL6WD7zbZ3aKw6XO2dhK34tog5XzvJkA0EYrDwx8Wgf%2FlpsLGSmejLsQGyMgydt%2BOld6eL8VW9g2lbA1I3lNl9VArMKvBrEZCRXwFqAdc54amJYjYvfObUjUWHtKgBH81iPeRuuyV5AwSBn6fCUAjJELi4MF5flvm69dmuLqceI5HMD93IrJ2jnEBPQaMOGcsMsGOqUBAqvP51WavW2kaUce%2BvqZIBl6fJJ%2BL%2FH3t7rig3LJ%2BR6PsLIiI%2B8hRw%2B%2Bt%2BVTX7VXkq2ENXY74XQWWFG4x7Og%2Fzef0y5XHyWk0HUi%2Fz3wNx632sGJ1Biamw5Z12s901%2B6cCDxNbpWlmZ56SJy4e%2F6YJ%2Fwr5jY1U8b0BtTjByubWt3dZ01cc6l%2FTHendB1p0dDIz3twdie9toI44CWeKMxvbE7kUqG&X-Amz-Signature=a336bd4234df605914248458b3a9d2d0a5921e00069f26b8e315e58991e1fdab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2WV33N%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQDaoi7%2Bkhz5bjlAb5HOtldL4Veo3trBOmv89e5bYIdAiBcwpWVbBj0pqbQewYHWCmbMi6WY0%2FgURWkvwxM%2FuB0pCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtteyineORcbQVWeoKtwDNgfa0nQSuBasaFbUCqX%2F8d1wJUgVDvSQodQpoopUioqHj8%2BaGxIeeuzS0rEi5e05ES89tOaFhJ5i8AvosUWMZeQ5K9XukXm9kTQm1zIV9dHtbUNyEwNO6IUSVL5wu4WX9VIO%2BqLMVLUdZF1UPkM4nRhCgYkghnt1t1q8au6XT66iwwqFidkIN9ixgsuQAPyqq%2FOb3%2BAfwQr%2FlYPNh2GKvCF0mVwKcyJIoQ5GVHfIfy4vYx%2BHXK6349ZP92SzR5%2Ba3Btd84qUOHH%2FZwN1rs3q%2BLVfGkk15luaoZlQJNEVavsfxhi%2BffYTSFvRxZWrfeJVW9Y8l%2F4e%2F4kb4ccqnL0Cr8mB8iVCzIqGAl%2FgUW7inHz4c5BVJVrllhgV6aQBn9pBZpFSkuws%2FneJS9OaEff4%2BimktdTIVo1Xp4OcqdkPDrI%2BD80sQU4C7Es3%2BY6Y0kQLCq3OEW3XkjtXiAz6IsiZZRUcnyR7arMPqnIfadOXul0%2FjDG3lX8crH1ttqM8CKSFTwpcxSWgzLWMGM76XRNGF6LI4LW1LAJHUlFER2noyJBDbVIGjdlToROy%2FTGjtkmX0Uzd74nvOztS50rd4MrqHevmOXB8HOsvma19tbFPX489y5fjchYGjrVKsPEw9ZywywY6pgHFLa7hldLx9kxuUNKabYGc68ijCvXZKOriM6OgzC%2Bj5DIyynpqqwqGBMxIprS%2BmvfN1YVN1PvjY1d4fIntcKZdIWElJZPUHqR8vYVfR8jOHyd2NN9sl11NFK5l9KL3%2FWGhCgXoaD5HXQOOApatRRSdcMQ6G3FlKvylbKoKwI1bA84p8eKbVZima8MplsqF67Yjq8XNk0H2AOvvOgktJyMdlA44zXRJ&X-Amz-Signature=c8681247eefcd8e599cc3fc6dd89e0648e35ad18019f397f62ce9e972903bd56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGJJTOAB%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3vkXaxKvvvyhhTfoXg8pz%2Bu96t5rHd288W5yIJi1fsAiEAz5n%2FDlWr%2FZ%2FKK1FfTjRTFRmNRZL5jnIpOpjvCNaK%2FzEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDMl%2FSvSHlkV7iwdF%2FSrcA58kN1sYTL8pqcc7W2lfL3chZQQZs5Hp%2BDT%2BTG7xndbj5TyLU6xvpr8ZNi5Od6vqdPUNJ1cb7cTkSPVNWq3Ja4rX%2BUGCI9Hl4ze5tyPVdxH9F1sBzjX65R7vNuucbqq4monaw7i7r6h3aIXu4TGNwI7q0G%2FplECDJ2%2FdBuogeU5wgQ1LykJoqM%2FXytE7OJPJ52wbG4GnnkAu%2B1Y4MuUvbjpSqk4BzshlTOlKov4ODHVwT3lq4iql5qMWR%2F%2BI%2BL%2B2V8Jr6QJPCW601AIUiDgE8u7sBmCIyvxbWxJHLP0vIAd5ukT%2BF%2BWQx8IwUfgprMyI4v31S7ESvGrFmeVytdq5PjHwT7wdeT9bx%2BWF1HG%2Fq452ZXN0LID8hUWPcY%2BjZiaJOhqQYjgqrMexN4wZJ5btZYHw9QWBkfI2JUidQXHPlloHLYtwIHB52q0h0YsS%2B35FGTkYjgX840jz6nM7aVpEIhXdN%2FWST3PlVQtviDXpzrfCpR%2B17cMk3jLFaIDTE9UErLOSml7d7p5UoNQnCLLrpFZM3AoZ5cMCxkDAJVm1W7dsk3iiz8kaV1c8wvPHAeUviZqCulPXQdopmQbgcPL7eKym21BO9vkc4fUO%2FGs1%2F6XlTDHlnr5z0VL0aPbkMPOcsMsGOqUB7xYQAupUCWpfDwFPMmWuijBjqyYrkXcKh%2BrvRDx428VohySdD1kee8I70UXAspXBWWxsabuQ3q2vkW8vS%2FJa0edxs8lk5rz3aST1bEkMyTpD55MS%2BStxBf9ayMlOlhJ%2Bfn49jtxJDcjKfOd1gofwyh7ZVrIsQwnAs60YEwxSMNpwp9nNmVKIrHaI70vZ07XjXjHRxe0CKgXJmKMOBefm24i53tiy&X-Amz-Signature=690bbc569acf5c3e21b29d43fa55fa4c63076918b2dc928a948689ff55edb68f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2WV33N%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQDaoi7%2Bkhz5bjlAb5HOtldL4Veo3trBOmv89e5bYIdAiBcwpWVbBj0pqbQewYHWCmbMi6WY0%2FgURWkvwxM%2FuB0pCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtteyineORcbQVWeoKtwDNgfa0nQSuBasaFbUCqX%2F8d1wJUgVDvSQodQpoopUioqHj8%2BaGxIeeuzS0rEi5e05ES89tOaFhJ5i8AvosUWMZeQ5K9XukXm9kTQm1zIV9dHtbUNyEwNO6IUSVL5wu4WX9VIO%2BqLMVLUdZF1UPkM4nRhCgYkghnt1t1q8au6XT66iwwqFidkIN9ixgsuQAPyqq%2FOb3%2BAfwQr%2FlYPNh2GKvCF0mVwKcyJIoQ5GVHfIfy4vYx%2BHXK6349ZP92SzR5%2Ba3Btd84qUOHH%2FZwN1rs3q%2BLVfGkk15luaoZlQJNEVavsfxhi%2BffYTSFvRxZWrfeJVW9Y8l%2F4e%2F4kb4ccqnL0Cr8mB8iVCzIqGAl%2FgUW7inHz4c5BVJVrllhgV6aQBn9pBZpFSkuws%2FneJS9OaEff4%2BimktdTIVo1Xp4OcqdkPDrI%2BD80sQU4C7Es3%2BY6Y0kQLCq3OEW3XkjtXiAz6IsiZZRUcnyR7arMPqnIfadOXul0%2FjDG3lX8crH1ttqM8CKSFTwpcxSWgzLWMGM76XRNGF6LI4LW1LAJHUlFER2noyJBDbVIGjdlToROy%2FTGjtkmX0Uzd74nvOztS50rd4MrqHevmOXB8HOsvma19tbFPX489y5fjchYGjrVKsPEw9ZywywY6pgHFLa7hldLx9kxuUNKabYGc68ijCvXZKOriM6OgzC%2Bj5DIyynpqqwqGBMxIprS%2BmvfN1YVN1PvjY1d4fIntcKZdIWElJZPUHqR8vYVfR8jOHyd2NN9sl11NFK5l9KL3%2FWGhCgXoaD5HXQOOApatRRSdcMQ6G3FlKvylbKoKwI1bA84p8eKbVZima8MplsqF67Yjq8XNk0H2AOvvOgktJyMdlA44zXRJ&X-Amz-Signature=76ef572593bb2bbde8d6b46f2787ca0fb2e84058a6568798d2ceb922ea6beb01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQTYSSLY%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BG%2BVEkItmNahN4oyvzb6whl9ZNFkXOO01PMmZIr6I0AiAKddKq%2BVKx4kq%2Blfeyd4fM8p%2F1JwChK1gJr2QDe%2BooPCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMVPUhizBKWN9DjJZkKtwDCFl4kNFWlAfV6Ba3P6LJBdU1aqCDs5jb7zOEEuHEcbDkqjmcHtPekAm7fLWv1qkZt11nSsZH8OWdfQRmuM98UQCewm8ymhxTAgVlnACFpwSBNSdRgjK7dghasJvmwR0hUYZT1cx6oXfL6pjjCHtj0DY3XMj20Ak78xCU7dHLEt3CyqabP8DTYhqH29bNqUplkmouR4%2BfpOB5wjMNbUxjtYFEyJkasqWJ9UwPghOjEUZqwYCVtLWF8MKfvf%2FXOqgr%2FwejYHLgbPRq7bwudts7F4TEsm4m6Hv%2BB0wR0d1E8XkEt10uDyBJMike83dj27%2BqRI2bNHxReYf3C5VYoW7AaIk2Sxkgxy5Bf9L5IUYaLqSF%2BpFTWrY7WLCyRpkOTgZzrTt6hAY31Rya%2B9KsHsqxFZ06TTWkJH6Xjda9WP37g2cGeEbhou9YX3R7KnToYkBvA6WbB0p%2BKBaDs1zdxAo4xr7Dgt2gsStasaLUgO4inuZU%2F0POnObQdfUB4t2YUwk0DDL1DdR3Qt5TEyWjGkbIPDvgdVeGV6PGQ%2F0avd2SKutvK7vC4pppX5dsrbMG6%2FbAZw5Pen6fGaWvjyW99xkGXqSbExcb0nQiZhzEryFGHfpr8GVXRJQtMtTKoSowtZ2wywY6pgEg0VDNLgbDtZp7tQfhlbqnMuBkV40Kl%2FrS1UIPgZLKUBAl5kbhErkTvJ6fR0dIg8dps%2FmOIFGIjb64SFt0ZsG5bG4DtlBXALJYeQics9Kkm57oz0dgzi7RFODsQWluL7pgiSUPCY2eP4tg1y4uo961uFMwG%2FW%2FMKiIXAaHSbyLDlMelJqNaA9Sd451LGFNcrynSmpYWRu%2BoXfeoV5TBtEzMcfvEZOR&X-Amz-Signature=2c7325a72f34b6c200f952c1d0f767ebc80ab6aafd22bc9b914b6b605cdc14bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2WV33N%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQDaoi7%2Bkhz5bjlAb5HOtldL4Veo3trBOmv89e5bYIdAiBcwpWVbBj0pqbQewYHWCmbMi6WY0%2FgURWkvwxM%2FuB0pCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtteyineORcbQVWeoKtwDNgfa0nQSuBasaFbUCqX%2F8d1wJUgVDvSQodQpoopUioqHj8%2BaGxIeeuzS0rEi5e05ES89tOaFhJ5i8AvosUWMZeQ5K9XukXm9kTQm1zIV9dHtbUNyEwNO6IUSVL5wu4WX9VIO%2BqLMVLUdZF1UPkM4nRhCgYkghnt1t1q8au6XT66iwwqFidkIN9ixgsuQAPyqq%2FOb3%2BAfwQr%2FlYPNh2GKvCF0mVwKcyJIoQ5GVHfIfy4vYx%2BHXK6349ZP92SzR5%2Ba3Btd84qUOHH%2FZwN1rs3q%2BLVfGkk15luaoZlQJNEVavsfxhi%2BffYTSFvRxZWrfeJVW9Y8l%2F4e%2F4kb4ccqnL0Cr8mB8iVCzIqGAl%2FgUW7inHz4c5BVJVrllhgV6aQBn9pBZpFSkuws%2FneJS9OaEff4%2BimktdTIVo1Xp4OcqdkPDrI%2BD80sQU4C7Es3%2BY6Y0kQLCq3OEW3XkjtXiAz6IsiZZRUcnyR7arMPqnIfadOXul0%2FjDG3lX8crH1ttqM8CKSFTwpcxSWgzLWMGM76XRNGF6LI4LW1LAJHUlFER2noyJBDbVIGjdlToROy%2FTGjtkmX0Uzd74nvOztS50rd4MrqHevmOXB8HOsvma19tbFPX489y5fjchYGjrVKsPEw9ZywywY6pgHFLa7hldLx9kxuUNKabYGc68ijCvXZKOriM6OgzC%2Bj5DIyynpqqwqGBMxIprS%2BmvfN1YVN1PvjY1d4fIntcKZdIWElJZPUHqR8vYVfR8jOHyd2NN9sl11NFK5l9KL3%2FWGhCgXoaD5HXQOOApatRRSdcMQ6G3FlKvylbKoKwI1bA84p8eKbVZima8MplsqF67Yjq8XNk0H2AOvvOgktJyMdlA44zXRJ&X-Amz-Signature=c96d11080ccd31510f1c90acb0df540fb0004253f62c643c4c96856c7fbfb00b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVIXQYWB%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuoYRTSnuqPYFEoXo7uLLzld2J9Oss3rdYrlcBo1bXMAiEAq7kAS5pdMP9RwsUOELr32StjQz%2FNlw5FLxCBufqInQ0q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDK%2BCkLIbXBGiZCffcSrcAw3wAJ6xDhpY%2BrXM9yanRnavJwLF4v5VqyYkVa%2B5RNRApJppIxhKuWr%2BtJzIpkHGUkJR%2BGYvi81XY8PLBREQHo4ERRssgbUfsEI6vwb7pACqZbELpx%2F4lR9i2VlXLH66oHzuKCEkESkc37nDwlKtf4xbJNH3BlEEy6kEvyYBy%2FnYbA%2BmYvqGioKBf6MlTn8AaeBh3O7QSE9Rx1SvsRK0wyjbaxEI9e%2B8dLYduCuI71mbNePkq6cxCAFUBmPmHxbvnGPK5o9xq3ZoPSgVqAWiepM1N%2BKHKYCBwXK5r0esnrvTnv%2BUhtGTazbzh6NSrlgra6ll8P0bhyDbVQRvgFJnoDOOdH56ui4%2Botk4B6LppkMDM97naqjIPNmaeOU3y5HxiQ6nE1ZDaQ41mZEs2uBbXoSz2iAWaHPzj01h20QDkiY5YR9WINoAiULb3W4LHK7fAr%2FLeqO9crIGQ0IRCE05uOW8h%2Fuuz3BMSIXAOL8jM9%2F%2B%2FxYk14JJsldDNozCXgKOt2ccMrVSrjPmIvZ4pVIjtTHNcNiSjmt9b92bU79Y5GhzP5Yg%2BEXmymmVy%2BcGicdaR68%2F1sfbcoa1neGOZzcCLrOx%2FHDPOVmHlO4fjv%2BmekeG0Wnl6MPidjO2AL8XMLmcsMsGOqUBOXpY%2F7tZqoRKu26p%2BaTw%2FzH%2FBxRkeyqVmTu85u62km1kKitq4Tu5E05Bb4FIUzawGPTYDJ%2FqMNS1lBgGp8vPHrA96lzZUD7bK%2FIK94CJmdOuC22R88e4J3GyDIn8nEIdKnMPLtPBy44vb%2Bqq%2BtYP%2BfOKFqSDkU31bURt9x5JXMjF9Ze%2BGQrD6EG6kUULfCjhRP9kAk3cS91AjMIIY0lUN%2BaMG9cG&X-Amz-Signature=94da3225002b9733d5b60804b832bfdcff4fb387ee63656854d483d42a93b8cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWTPN4EJ%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwaSRZcQfNJqphPJeYKhfR96GnriQ9GsVe%2BsEjm6Y43gIgEhgqUqdkoGAVKZBxPJ12y1iuAFifHR5Ur1dSHGEC1Gsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCF5ekkNkPqe0d1pSyrcA7%2FmvruFRnB0gszJ2aKPnmKaOzqzyAtyIOr9KctydWBIqQaLzVrlWlYDy8Bmuy6FHCjfAH5wdCj90dxw2DWv4n03Q9QrrPEAPfpf5o1%2Fx4dVW79urwjPOtvibsCBeGq8htzb9dGSgLHVbE1bJFvA6GgCTZs4u90XzyTcCWo5TxnMZJhFFeZ7ecMciD4iCsX78dnu8Lv4UtDw4CUIsbPyF9OV8RQ5T8PyRnEk4EZoGW3O7mWtclMOyoAvRPdCLIErgyfmLpcRoiTUZaPFwLLTy97FjzFQ1CHfLAAhXX48TC8eA41%2Fb9oF0PBKtkq3sjGSDn70QzVrDJZGe1%2BxcrbFin6SkT2fwim4MKkryf9nhzHkDXg5MdxltGuiOQWzjN9duwSrmrQwMIgBDuXrYXSA9gpTfdMwgsAWXfYvcjPH9DWGFLlB5G5RvYwJdR640pz%2BXsPJesqedYCmh9jRubOsTVJyI1QKA993MLrerGGOoJBqrUDAcb98NkJm8TamBK5wUpLdAPkvgL1NTAbkWO4Rp7%2FuXFxFFtSueBTTicb0itj%2BbWvez69EZd9hFIhnYLeCqUOWuiRAVy7TOZYmzYqvxCUc8%2BZPTfPzy2Z5zdGRCXs3i88tW0YEKtP9NTkhMMucsMsGOqUBktPKHi5IxOdjOJpgLVLpGalbQw5gM9hOPg4Jheu%2F%2BCvmS1t8ntklLW76L5LARULPA%2BWrLIvtghORahiARquGc66QgaL3Nn9RMjmk78nZCxeDjsqR3ZI4VIF0kdo4hHwC%2BjvREWoI86iEAcIDsIEEyPDllZBP1CVI522b3B8fUvV%2FHAV3yuaChr4owjvqoD6UB83TF3HPlnGfmTfwiiIAHzFTGbxU&X-Amz-Signature=8bcaa715a10f1f98257c8600a202d8cef85417a1e189621ed99db3b66f20cc96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4S64MND%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJOlYSP3KbgOh0kN68OBAgo1ScWKooAS8BuZzpTI1XBAiBhOF%2FGMAt6FW5Z3XCUKujQeoBWXywqAZKIxrTdC7riwir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM9OzoP7gvJYpljUNCKtwD0WjCy4yYprRs4kWarnz%2BEvy0Kf3%2BAKSIBAP%2Br9IV%2Fq2ifzizUkK1OU4HIPsa8Z8y0HoLWtmwi3gYwkf6nJTbZZia4XlOztWP%2F2wT5fJ28pEpRj4jXIXQ2qGC20dD7360UsXpG10ILn%2BwWEC6jRLlzb1tfE5VBC1%2F4W4c5PjQtnGW2LGvuqzwodT2emKUH7qv7dc2Bos8DjLIBmO%2BjFioUC%2BK8nUUg1y9ZxNUfYH3cibQurc0GkwZbwTPJjNBuurlU6szFgfm6LZm3Xncg7lXXM8Jtt2kJU6jTI2Z56NdyLM4sG7rrC4IPu5CEMBTWY8%2BbzZR0sstgm25mg%2BPx%2FCV%2F%2FFzzwTtie0lGBRySCMlh5QPdvz1hRJR1%2B6Qy4tyd%2FF5qJuaclNcItO3cguMo9A5hmrz7afjbavWSnJFHtdt5xWPC%2FO7ByYkmLYA7FPNxv%2FMgNxDYWT%2FPfqUpgkYLACU63VtqDzbkWLIHs9ER2x7VQ%2BAglXXkq5FiaMBcO%2BaugPCotSNt3XrQPhMRO9HM%2FmaNNA5TRtai3EJEp8zigepfZBI25Cz2jxh%2Bf%2FWjustYEB3HMuTM64pdbSivWY%2FDMll8xpSxbHN1hzCOg0KuZbsFIQm%2B%2FJrtajHaIfvSDwwwZywywY6pgHcuX7ZkM%2BkoQ%2FN8Q4BB1sdNxE%2BzzTY%2B2Rtvfq3zbZFFBNNr04QqNi3fFKzcpfDtawU4lwYCNpFstY8VBVktkarCtRUri%2BnVqLINK3pJkHLrlHdryYV1TvAT%2FHx5GgjXlW3fZUkNURNJDAQFgrwhU6y2D8SVCHmijlhEulSj5jTPdnHDvTa5mC7Rn9oanQ0TafQvig1efWFZpVSX9osu4Fbc35hpheo&X-Amz-Signature=d1b4bd80fba85d973496098233a6551ebd5bb713deb682cd140bce2354c8b147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2WV33N%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQDaoi7%2Bkhz5bjlAb5HOtldL4Veo3trBOmv89e5bYIdAiBcwpWVbBj0pqbQewYHWCmbMi6WY0%2FgURWkvwxM%2FuB0pCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtteyineORcbQVWeoKtwDNgfa0nQSuBasaFbUCqX%2F8d1wJUgVDvSQodQpoopUioqHj8%2BaGxIeeuzS0rEi5e05ES89tOaFhJ5i8AvosUWMZeQ5K9XukXm9kTQm1zIV9dHtbUNyEwNO6IUSVL5wu4WX9VIO%2BqLMVLUdZF1UPkM4nRhCgYkghnt1t1q8au6XT66iwwqFidkIN9ixgsuQAPyqq%2FOb3%2BAfwQr%2FlYPNh2GKvCF0mVwKcyJIoQ5GVHfIfy4vYx%2BHXK6349ZP92SzR5%2Ba3Btd84qUOHH%2FZwN1rs3q%2BLVfGkk15luaoZlQJNEVavsfxhi%2BffYTSFvRxZWrfeJVW9Y8l%2F4e%2F4kb4ccqnL0Cr8mB8iVCzIqGAl%2FgUW7inHz4c5BVJVrllhgV6aQBn9pBZpFSkuws%2FneJS9OaEff4%2BimktdTIVo1Xp4OcqdkPDrI%2BD80sQU4C7Es3%2BY6Y0kQLCq3OEW3XkjtXiAz6IsiZZRUcnyR7arMPqnIfadOXul0%2FjDG3lX8crH1ttqM8CKSFTwpcxSWgzLWMGM76XRNGF6LI4LW1LAJHUlFER2noyJBDbVIGjdlToROy%2FTGjtkmX0Uzd74nvOztS50rd4MrqHevmOXB8HOsvma19tbFPX489y5fjchYGjrVKsPEw9ZywywY6pgHFLa7hldLx9kxuUNKabYGc68ijCvXZKOriM6OgzC%2Bj5DIyynpqqwqGBMxIprS%2BmvfN1YVN1PvjY1d4fIntcKZdIWElJZPUHqR8vYVfR8jOHyd2NN9sl11NFK5l9KL3%2FWGhCgXoaD5HXQOOApatRRSdcMQ6G3FlKvylbKoKwI1bA84p8eKbVZima8MplsqF67Yjq8XNk0H2AOvvOgktJyMdlA44zXRJ&X-Amz-Signature=cdec19e7caf5520f7372d29795908123a90e277ec587e7f6e9c065318b703efb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2WV33N%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQDaoi7%2Bkhz5bjlAb5HOtldL4Veo3trBOmv89e5bYIdAiBcwpWVbBj0pqbQewYHWCmbMi6WY0%2FgURWkvwxM%2FuB0pCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtteyineORcbQVWeoKtwDNgfa0nQSuBasaFbUCqX%2F8d1wJUgVDvSQodQpoopUioqHj8%2BaGxIeeuzS0rEi5e05ES89tOaFhJ5i8AvosUWMZeQ5K9XukXm9kTQm1zIV9dHtbUNyEwNO6IUSVL5wu4WX9VIO%2BqLMVLUdZF1UPkM4nRhCgYkghnt1t1q8au6XT66iwwqFidkIN9ixgsuQAPyqq%2FOb3%2BAfwQr%2FlYPNh2GKvCF0mVwKcyJIoQ5GVHfIfy4vYx%2BHXK6349ZP92SzR5%2Ba3Btd84qUOHH%2FZwN1rs3q%2BLVfGkk15luaoZlQJNEVavsfxhi%2BffYTSFvRxZWrfeJVW9Y8l%2F4e%2F4kb4ccqnL0Cr8mB8iVCzIqGAl%2FgUW7inHz4c5BVJVrllhgV6aQBn9pBZpFSkuws%2FneJS9OaEff4%2BimktdTIVo1Xp4OcqdkPDrI%2BD80sQU4C7Es3%2BY6Y0kQLCq3OEW3XkjtXiAz6IsiZZRUcnyR7arMPqnIfadOXul0%2FjDG3lX8crH1ttqM8CKSFTwpcxSWgzLWMGM76XRNGF6LI4LW1LAJHUlFER2noyJBDbVIGjdlToROy%2FTGjtkmX0Uzd74nvOztS50rd4MrqHevmOXB8HOsvma19tbFPX489y5fjchYGjrVKsPEw9ZywywY6pgHFLa7hldLx9kxuUNKabYGc68ijCvXZKOriM6OgzC%2Bj5DIyynpqqwqGBMxIprS%2BmvfN1YVN1PvjY1d4fIntcKZdIWElJZPUHqR8vYVfR8jOHyd2NN9sl11NFK5l9KL3%2FWGhCgXoaD5HXQOOApatRRSdcMQ6G3FlKvylbKoKwI1bA84p8eKbVZima8MplsqF67Yjq8XNk0H2AOvvOgktJyMdlA44zXRJ&X-Amz-Signature=adcdb363521c895be8c599ff88bd463223f7e2ab4faf78a6e2eb390d7a89d16f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A77B2OV%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFj6IaLkImeaK81hBMbeCQbO2JKLf68pLY0xRB0WKKs9AiEAk7vh0cpjXyfrBdfKRSAy7yz69CuQhvKUPGOc%2B5RzS8cq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIyH96mMKpcmbBHeBircAyKvow8RhRuj8qV0xu9GNeRZo%2Fz0VWMaxsncC5XQGdf0Fr0AinnYDknD6%2FLFifVguOL0DCILQRkj2T9YdfomFsD331W5Fyzr5wPF2N10wZFHSBI3F8vpSok8%2BxFQxyNwydS6jNpmjVQiP9iG1%2BGhriny%2FIzqHPgDQYAvwmpHJ5fPzUxShlDlAUbDOM%2FF%2FTf1w%2FpxqId0aIEgyh%2FbEC0gY6IDxFEVsRj87Ell6rhxqlVJjonkPtc4iimxsvf38AUGb7jbPRPW6u0klVCdVb769Nlbdxl3R4bPlwGZLds3g3wCtKz1GIvHRs4PUqV75kG%2BxIb04SoGDaePFCoE3PIJdFX983N7atl5g67s8BoQR0sfxjcOoK3vOTMN3Sq1vpbI9KO3NWGQu%2Bxm0hJ64SyoWNsE07G1%2F4cvR3vPwPfZFQuysax0TMgP%2Bmtjrd2SxztPsiDP0u1R8dDbDfqU5qFPrZoFaR1dcdOYiiBsDzXj0j89al28B%2FgfIp75HiucTw3zKQbqAM8vgqumLir0dDM5IASdL5kx2DO618TuNoqX2v3vpr9BkXE9HFU618ObAusPNHgJjswakPadvFglY4AUa1nws7VnfT2Sv%2FilXp8UDMobDb2HtU9%2BWrVLeGrRMIudsMsGOqUBhSNE1jQqLVjeRBtMQLd5EXAA72BEkIh1H%2FaBQn4sQronmTAN3RSIvWBayNxrgi5K5T4%2Ft9bKMkmOOtmB%2BVF4%2F42va47L%2BCoONHh5bM0UXf1AqqXdp5JylcLoFJkv%2BCOn1eefe7CUgG3swt64gja9lEm5IcFrzqmATmgxq%2BNbq1TpsLaBgVxlB8cVLkiepm55YdFXV2UmByFTpL7rECEEYgF7%2BbHx&X-Amz-Signature=1d5cbdabacf9be95edba6f091df365057238c9c7e60e5e8ec529189ac51a8ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A77B2OV%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFj6IaLkImeaK81hBMbeCQbO2JKLf68pLY0xRB0WKKs9AiEAk7vh0cpjXyfrBdfKRSAy7yz69CuQhvKUPGOc%2B5RzS8cq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIyH96mMKpcmbBHeBircAyKvow8RhRuj8qV0xu9GNeRZo%2Fz0VWMaxsncC5XQGdf0Fr0AinnYDknD6%2FLFifVguOL0DCILQRkj2T9YdfomFsD331W5Fyzr5wPF2N10wZFHSBI3F8vpSok8%2BxFQxyNwydS6jNpmjVQiP9iG1%2BGhriny%2FIzqHPgDQYAvwmpHJ5fPzUxShlDlAUbDOM%2FF%2FTf1w%2FpxqId0aIEgyh%2FbEC0gY6IDxFEVsRj87Ell6rhxqlVJjonkPtc4iimxsvf38AUGb7jbPRPW6u0klVCdVb769Nlbdxl3R4bPlwGZLds3g3wCtKz1GIvHRs4PUqV75kG%2BxIb04SoGDaePFCoE3PIJdFX983N7atl5g67s8BoQR0sfxjcOoK3vOTMN3Sq1vpbI9KO3NWGQu%2Bxm0hJ64SyoWNsE07G1%2F4cvR3vPwPfZFQuysax0TMgP%2Bmtjrd2SxztPsiDP0u1R8dDbDfqU5qFPrZoFaR1dcdOYiiBsDzXj0j89al28B%2FgfIp75HiucTw3zKQbqAM8vgqumLir0dDM5IASdL5kx2DO618TuNoqX2v3vpr9BkXE9HFU618ObAusPNHgJjswakPadvFglY4AUa1nws7VnfT2Sv%2FilXp8UDMobDb2HtU9%2BWrVLeGrRMIudsMsGOqUBhSNE1jQqLVjeRBtMQLd5EXAA72BEkIh1H%2FaBQn4sQronmTAN3RSIvWBayNxrgi5K5T4%2Ft9bKMkmOOtmB%2BVF4%2F42va47L%2BCoONHh5bM0UXf1AqqXdp5JylcLoFJkv%2BCOn1eefe7CUgG3swt64gja9lEm5IcFrzqmATmgxq%2BNbq1TpsLaBgVxlB8cVLkiepm55YdFXV2UmByFTpL7rECEEYgF7%2BbHx&X-Amz-Signature=778b92c46badea4f4a78c58fd4102ec31381c540fd972756322b5c46a3975e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A77B2OV%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFj6IaLkImeaK81hBMbeCQbO2JKLf68pLY0xRB0WKKs9AiEAk7vh0cpjXyfrBdfKRSAy7yz69CuQhvKUPGOc%2B5RzS8cq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIyH96mMKpcmbBHeBircAyKvow8RhRuj8qV0xu9GNeRZo%2Fz0VWMaxsncC5XQGdf0Fr0AinnYDknD6%2FLFifVguOL0DCILQRkj2T9YdfomFsD331W5Fyzr5wPF2N10wZFHSBI3F8vpSok8%2BxFQxyNwydS6jNpmjVQiP9iG1%2BGhriny%2FIzqHPgDQYAvwmpHJ5fPzUxShlDlAUbDOM%2FF%2FTf1w%2FpxqId0aIEgyh%2FbEC0gY6IDxFEVsRj87Ell6rhxqlVJjonkPtc4iimxsvf38AUGb7jbPRPW6u0klVCdVb769Nlbdxl3R4bPlwGZLds3g3wCtKz1GIvHRs4PUqV75kG%2BxIb04SoGDaePFCoE3PIJdFX983N7atl5g67s8BoQR0sfxjcOoK3vOTMN3Sq1vpbI9KO3NWGQu%2Bxm0hJ64SyoWNsE07G1%2F4cvR3vPwPfZFQuysax0TMgP%2Bmtjrd2SxztPsiDP0u1R8dDbDfqU5qFPrZoFaR1dcdOYiiBsDzXj0j89al28B%2FgfIp75HiucTw3zKQbqAM8vgqumLir0dDM5IASdL5kx2DO618TuNoqX2v3vpr9BkXE9HFU618ObAusPNHgJjswakPadvFglY4AUa1nws7VnfT2Sv%2FilXp8UDMobDb2HtU9%2BWrVLeGrRMIudsMsGOqUBhSNE1jQqLVjeRBtMQLd5EXAA72BEkIh1H%2FaBQn4sQronmTAN3RSIvWBayNxrgi5K5T4%2Ft9bKMkmOOtmB%2BVF4%2F42va47L%2BCoONHh5bM0UXf1AqqXdp5JylcLoFJkv%2BCOn1eefe7CUgG3swt64gja9lEm5IcFrzqmATmgxq%2BNbq1TpsLaBgVxlB8cVLkiepm55YdFXV2UmByFTpL7rECEEYgF7%2BbHx&X-Amz-Signature=e4d788d5c87b1819009cb0690433a1cc5fc1014de73902d24062e12b19017cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A77B2OV%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFj6IaLkImeaK81hBMbeCQbO2JKLf68pLY0xRB0WKKs9AiEAk7vh0cpjXyfrBdfKRSAy7yz69CuQhvKUPGOc%2B5RzS8cq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIyH96mMKpcmbBHeBircAyKvow8RhRuj8qV0xu9GNeRZo%2Fz0VWMaxsncC5XQGdf0Fr0AinnYDknD6%2FLFifVguOL0DCILQRkj2T9YdfomFsD331W5Fyzr5wPF2N10wZFHSBI3F8vpSok8%2BxFQxyNwydS6jNpmjVQiP9iG1%2BGhriny%2FIzqHPgDQYAvwmpHJ5fPzUxShlDlAUbDOM%2FF%2FTf1w%2FpxqId0aIEgyh%2FbEC0gY6IDxFEVsRj87Ell6rhxqlVJjonkPtc4iimxsvf38AUGb7jbPRPW6u0klVCdVb769Nlbdxl3R4bPlwGZLds3g3wCtKz1GIvHRs4PUqV75kG%2BxIb04SoGDaePFCoE3PIJdFX983N7atl5g67s8BoQR0sfxjcOoK3vOTMN3Sq1vpbI9KO3NWGQu%2Bxm0hJ64SyoWNsE07G1%2F4cvR3vPwPfZFQuysax0TMgP%2Bmtjrd2SxztPsiDP0u1R8dDbDfqU5qFPrZoFaR1dcdOYiiBsDzXj0j89al28B%2FgfIp75HiucTw3zKQbqAM8vgqumLir0dDM5IASdL5kx2DO618TuNoqX2v3vpr9BkXE9HFU618ObAusPNHgJjswakPadvFglY4AUa1nws7VnfT2Sv%2FilXp8UDMobDb2HtU9%2BWrVLeGrRMIudsMsGOqUBhSNE1jQqLVjeRBtMQLd5EXAA72BEkIh1H%2FaBQn4sQronmTAN3RSIvWBayNxrgi5K5T4%2Ft9bKMkmOOtmB%2BVF4%2F42va47L%2BCoONHh5bM0UXf1AqqXdp5JylcLoFJkv%2BCOn1eefe7CUgG3swt64gja9lEm5IcFrzqmATmgxq%2BNbq1TpsLaBgVxlB8cVLkiepm55YdFXV2UmByFTpL7rECEEYgF7%2BbHx&X-Amz-Signature=44f9cddc367931e0987666012c03fb770987073d488c97a046b3884290643106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFASAHTM%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDim8J9K0nuom8V9FEtLvqJxewzlvBdhoAKIROcmqbNeQIhAJWmXN3%2Bn2kfPcjZOd%2Fol0u8PJlKuNK8bKUSjpaIwNA7Kv8DCHAQABoMNjM3NDIzMTgzODA1IgzPTIj62vlJR0ysHRcq3ANYDQpA%2BbOv6VQcra6AzvXlW%2FYmccg%2BpjwwCthLn%2B0d8461UlkbNUr%2F3dIMAPCKqMWHEMuS1cwiLliyQJvu7anAHH%2BNDjSwFzZoTuKh%2BWQnALfJXQJrcS83e4SwLiMD7o7MbmMcU4mOuX8jvnCmpVj3eBUYccZO2jnG%2FEIf5FTEz35nRSbiFv2dcDhoHaZSVR1dB%2BA5BJcbQEUDpdOb5wW022GO4PEbMeVjEJ%2Fh4iuGaGkXGjg%2F6JWjb8NZXAkwRwGilrPPK60i93lQHWPWPyybhrcAGstvY7pCCieA3MrFdq1DF2vGuPdJluJx7Gnnb13GfIE3KJMztU1q6n3l02m8SDmyLf1STQSYna%2B5fTh2kHr0Cdbkno3kl7yydVA5%2BUvDfT88AL1gtKtd0AiI%2FMbPwTC2GRrF%2Bny6yQK%2BTO28WvtQj%2F8g3pJ5KYjX7c3nzhhVgI%2Fc%2FR7Qvl4PeOHYTAxNji2zaZoPPl4AI4oLHdLt5ktcBXouu%2BnPSD5ApWZAlGWkpPmEOrpJFuuBuVffWLgSiXarkxNByJ2c1kY6p8EWUWuHoD84%2FBiFlv9K7h5xTrBAxH9%2BKJ%2FjeSavh%2FnHQrnMKSMQpwNUR3zya4leoVGw4A%2BRJsHU741uz8u1BzC0nbDLBjqkAVD2ocw44ZvAFpjThXj6fc0x%2BgqoNUKx%2FZ%2Bc2Tv8WOKkoRRmr3as%2FyNcPwe3wbGeRu38WfwlO3G4hQpjl4jsWPgyj7Eh74QOJQHXmQT96OzIPceZbj%2BauG0aAHW14orX5BPwGvzjnHl%2Fpnfj4sj0vtOCP7H6OFVGi2yxqyElNcDc6HVa8h98wjSKyVUHNIxiHI%2F7rFrxOYE%2F3yU8L5Ux6wTac%2Fgw&X-Amz-Signature=8a30842827e11c6e93c19093783b3b31a941eb6f8e5aff82c088efdde0a3e56f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A77B2OV%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFj6IaLkImeaK81hBMbeCQbO2JKLf68pLY0xRB0WKKs9AiEAk7vh0cpjXyfrBdfKRSAy7yz69CuQhvKUPGOc%2B5RzS8cq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIyH96mMKpcmbBHeBircAyKvow8RhRuj8qV0xu9GNeRZo%2Fz0VWMaxsncC5XQGdf0Fr0AinnYDknD6%2FLFifVguOL0DCILQRkj2T9YdfomFsD331W5Fyzr5wPF2N10wZFHSBI3F8vpSok8%2BxFQxyNwydS6jNpmjVQiP9iG1%2BGhriny%2FIzqHPgDQYAvwmpHJ5fPzUxShlDlAUbDOM%2FF%2FTf1w%2FpxqId0aIEgyh%2FbEC0gY6IDxFEVsRj87Ell6rhxqlVJjonkPtc4iimxsvf38AUGb7jbPRPW6u0klVCdVb769Nlbdxl3R4bPlwGZLds3g3wCtKz1GIvHRs4PUqV75kG%2BxIb04SoGDaePFCoE3PIJdFX983N7atl5g67s8BoQR0sfxjcOoK3vOTMN3Sq1vpbI9KO3NWGQu%2Bxm0hJ64SyoWNsE07G1%2F4cvR3vPwPfZFQuysax0TMgP%2Bmtjrd2SxztPsiDP0u1R8dDbDfqU5qFPrZoFaR1dcdOYiiBsDzXj0j89al28B%2FgfIp75HiucTw3zKQbqAM8vgqumLir0dDM5IASdL5kx2DO618TuNoqX2v3vpr9BkXE9HFU618ObAusPNHgJjswakPadvFglY4AUa1nws7VnfT2Sv%2FilXp8UDMobDb2HtU9%2BWrVLeGrRMIudsMsGOqUBhSNE1jQqLVjeRBtMQLd5EXAA72BEkIh1H%2FaBQn4sQronmTAN3RSIvWBayNxrgi5K5T4%2Ft9bKMkmOOtmB%2BVF4%2F42va47L%2BCoONHh5bM0UXf1AqqXdp5JylcLoFJkv%2BCOn1eefe7CUgG3swt64gja9lEm5IcFrzqmATmgxq%2BNbq1TpsLaBgVxlB8cVLkiepm55YdFXV2UmByFTpL7rECEEYgF7%2BbHx&X-Amz-Signature=d111529bdf098a124575d5ec68d3d8f59fa76021fb0288bd5edf4631de775074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A77B2OV%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFj6IaLkImeaK81hBMbeCQbO2JKLf68pLY0xRB0WKKs9AiEAk7vh0cpjXyfrBdfKRSAy7yz69CuQhvKUPGOc%2B5RzS8cq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIyH96mMKpcmbBHeBircAyKvow8RhRuj8qV0xu9GNeRZo%2Fz0VWMaxsncC5XQGdf0Fr0AinnYDknD6%2FLFifVguOL0DCILQRkj2T9YdfomFsD331W5Fyzr5wPF2N10wZFHSBI3F8vpSok8%2BxFQxyNwydS6jNpmjVQiP9iG1%2BGhriny%2FIzqHPgDQYAvwmpHJ5fPzUxShlDlAUbDOM%2FF%2FTf1w%2FpxqId0aIEgyh%2FbEC0gY6IDxFEVsRj87Ell6rhxqlVJjonkPtc4iimxsvf38AUGb7jbPRPW6u0klVCdVb769Nlbdxl3R4bPlwGZLds3g3wCtKz1GIvHRs4PUqV75kG%2BxIb04SoGDaePFCoE3PIJdFX983N7atl5g67s8BoQR0sfxjcOoK3vOTMN3Sq1vpbI9KO3NWGQu%2Bxm0hJ64SyoWNsE07G1%2F4cvR3vPwPfZFQuysax0TMgP%2Bmtjrd2SxztPsiDP0u1R8dDbDfqU5qFPrZoFaR1dcdOYiiBsDzXj0j89al28B%2FgfIp75HiucTw3zKQbqAM8vgqumLir0dDM5IASdL5kx2DO618TuNoqX2v3vpr9BkXE9HFU618ObAusPNHgJjswakPadvFglY4AUa1nws7VnfT2Sv%2FilXp8UDMobDb2HtU9%2BWrVLeGrRMIudsMsGOqUBhSNE1jQqLVjeRBtMQLd5EXAA72BEkIh1H%2FaBQn4sQronmTAN3RSIvWBayNxrgi5K5T4%2Ft9bKMkmOOtmB%2BVF4%2F42va47L%2BCoONHh5bM0UXf1AqqXdp5JylcLoFJkv%2BCOn1eefe7CUgG3swt64gja9lEm5IcFrzqmATmgxq%2BNbq1TpsLaBgVxlB8cVLkiepm55YdFXV2UmByFTpL7rECEEYgF7%2BbHx&X-Amz-Signature=d49c0eb6e6de9936d4952cf286bd4af3e35c76f4f28a01557838ada91789fef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A77B2OV%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFj6IaLkImeaK81hBMbeCQbO2JKLf68pLY0xRB0WKKs9AiEAk7vh0cpjXyfrBdfKRSAy7yz69CuQhvKUPGOc%2B5RzS8cq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIyH96mMKpcmbBHeBircAyKvow8RhRuj8qV0xu9GNeRZo%2Fz0VWMaxsncC5XQGdf0Fr0AinnYDknD6%2FLFifVguOL0DCILQRkj2T9YdfomFsD331W5Fyzr5wPF2N10wZFHSBI3F8vpSok8%2BxFQxyNwydS6jNpmjVQiP9iG1%2BGhriny%2FIzqHPgDQYAvwmpHJ5fPzUxShlDlAUbDOM%2FF%2FTf1w%2FpxqId0aIEgyh%2FbEC0gY6IDxFEVsRj87Ell6rhxqlVJjonkPtc4iimxsvf38AUGb7jbPRPW6u0klVCdVb769Nlbdxl3R4bPlwGZLds3g3wCtKz1GIvHRs4PUqV75kG%2BxIb04SoGDaePFCoE3PIJdFX983N7atl5g67s8BoQR0sfxjcOoK3vOTMN3Sq1vpbI9KO3NWGQu%2Bxm0hJ64SyoWNsE07G1%2F4cvR3vPwPfZFQuysax0TMgP%2Bmtjrd2SxztPsiDP0u1R8dDbDfqU5qFPrZoFaR1dcdOYiiBsDzXj0j89al28B%2FgfIp75HiucTw3zKQbqAM8vgqumLir0dDM5IASdL5kx2DO618TuNoqX2v3vpr9BkXE9HFU618ObAusPNHgJjswakPadvFglY4AUa1nws7VnfT2Sv%2FilXp8UDMobDb2HtU9%2BWrVLeGrRMIudsMsGOqUBhSNE1jQqLVjeRBtMQLd5EXAA72BEkIh1H%2FaBQn4sQronmTAN3RSIvWBayNxrgi5K5T4%2Ft9bKMkmOOtmB%2BVF4%2F42va47L%2BCoONHh5bM0UXf1AqqXdp5JylcLoFJkv%2BCOn1eefe7CUgG3swt64gja9lEm5IcFrzqmATmgxq%2BNbq1TpsLaBgVxlB8cVLkiepm55YdFXV2UmByFTpL7rECEEYgF7%2BbHx&X-Amz-Signature=e4d788d5c87b1819009cb0690433a1cc5fc1014de73902d24062e12b19017cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A77B2OV%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFj6IaLkImeaK81hBMbeCQbO2JKLf68pLY0xRB0WKKs9AiEAk7vh0cpjXyfrBdfKRSAy7yz69CuQhvKUPGOc%2B5RzS8cq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIyH96mMKpcmbBHeBircAyKvow8RhRuj8qV0xu9GNeRZo%2Fz0VWMaxsncC5XQGdf0Fr0AinnYDknD6%2FLFifVguOL0DCILQRkj2T9YdfomFsD331W5Fyzr5wPF2N10wZFHSBI3F8vpSok8%2BxFQxyNwydS6jNpmjVQiP9iG1%2BGhriny%2FIzqHPgDQYAvwmpHJ5fPzUxShlDlAUbDOM%2FF%2FTf1w%2FpxqId0aIEgyh%2FbEC0gY6IDxFEVsRj87Ell6rhxqlVJjonkPtc4iimxsvf38AUGb7jbPRPW6u0klVCdVb769Nlbdxl3R4bPlwGZLds3g3wCtKz1GIvHRs4PUqV75kG%2BxIb04SoGDaePFCoE3PIJdFX983N7atl5g67s8BoQR0sfxjcOoK3vOTMN3Sq1vpbI9KO3NWGQu%2Bxm0hJ64SyoWNsE07G1%2F4cvR3vPwPfZFQuysax0TMgP%2Bmtjrd2SxztPsiDP0u1R8dDbDfqU5qFPrZoFaR1dcdOYiiBsDzXj0j89al28B%2FgfIp75HiucTw3zKQbqAM8vgqumLir0dDM5IASdL5kx2DO618TuNoqX2v3vpr9BkXE9HFU618ObAusPNHgJjswakPadvFglY4AUa1nws7VnfT2Sv%2FilXp8UDMobDb2HtU9%2BWrVLeGrRMIudsMsGOqUBhSNE1jQqLVjeRBtMQLd5EXAA72BEkIh1H%2FaBQn4sQronmTAN3RSIvWBayNxrgi5K5T4%2Ft9bKMkmOOtmB%2BVF4%2F42va47L%2BCoONHh5bM0UXf1AqqXdp5JylcLoFJkv%2BCOn1eefe7CUgG3swt64gja9lEm5IcFrzqmATmgxq%2BNbq1TpsLaBgVxlB8cVLkiepm55YdFXV2UmByFTpL7rECEEYgF7%2BbHx&X-Amz-Signature=4e099b9807a6786998d724e42e3f54032baca15158110756c61151a473334044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A77B2OV%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFj6IaLkImeaK81hBMbeCQbO2JKLf68pLY0xRB0WKKs9AiEAk7vh0cpjXyfrBdfKRSAy7yz69CuQhvKUPGOc%2B5RzS8cq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIyH96mMKpcmbBHeBircAyKvow8RhRuj8qV0xu9GNeRZo%2Fz0VWMaxsncC5XQGdf0Fr0AinnYDknD6%2FLFifVguOL0DCILQRkj2T9YdfomFsD331W5Fyzr5wPF2N10wZFHSBI3F8vpSok8%2BxFQxyNwydS6jNpmjVQiP9iG1%2BGhriny%2FIzqHPgDQYAvwmpHJ5fPzUxShlDlAUbDOM%2FF%2FTf1w%2FpxqId0aIEgyh%2FbEC0gY6IDxFEVsRj87Ell6rhxqlVJjonkPtc4iimxsvf38AUGb7jbPRPW6u0klVCdVb769Nlbdxl3R4bPlwGZLds3g3wCtKz1GIvHRs4PUqV75kG%2BxIb04SoGDaePFCoE3PIJdFX983N7atl5g67s8BoQR0sfxjcOoK3vOTMN3Sq1vpbI9KO3NWGQu%2Bxm0hJ64SyoWNsE07G1%2F4cvR3vPwPfZFQuysax0TMgP%2Bmtjrd2SxztPsiDP0u1R8dDbDfqU5qFPrZoFaR1dcdOYiiBsDzXj0j89al28B%2FgfIp75HiucTw3zKQbqAM8vgqumLir0dDM5IASdL5kx2DO618TuNoqX2v3vpr9BkXE9HFU618ObAusPNHgJjswakPadvFglY4AUa1nws7VnfT2Sv%2FilXp8UDMobDb2HtU9%2BWrVLeGrRMIudsMsGOqUBhSNE1jQqLVjeRBtMQLd5EXAA72BEkIh1H%2FaBQn4sQronmTAN3RSIvWBayNxrgi5K5T4%2Ft9bKMkmOOtmB%2BVF4%2F42va47L%2BCoONHh5bM0UXf1AqqXdp5JylcLoFJkv%2BCOn1eefe7CUgG3swt64gja9lEm5IcFrzqmATmgxq%2BNbq1TpsLaBgVxlB8cVLkiepm55YdFXV2UmByFTpL7rECEEYgF7%2BbHx&X-Amz-Signature=2c8e0c5cd1cc044a44a74e9db3192e9d84bb5f80e11018da808a1f42bcdcfe5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A77B2OV%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFj6IaLkImeaK81hBMbeCQbO2JKLf68pLY0xRB0WKKs9AiEAk7vh0cpjXyfrBdfKRSAy7yz69CuQhvKUPGOc%2B5RzS8cq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIyH96mMKpcmbBHeBircAyKvow8RhRuj8qV0xu9GNeRZo%2Fz0VWMaxsncC5XQGdf0Fr0AinnYDknD6%2FLFifVguOL0DCILQRkj2T9YdfomFsD331W5Fyzr5wPF2N10wZFHSBI3F8vpSok8%2BxFQxyNwydS6jNpmjVQiP9iG1%2BGhriny%2FIzqHPgDQYAvwmpHJ5fPzUxShlDlAUbDOM%2FF%2FTf1w%2FpxqId0aIEgyh%2FbEC0gY6IDxFEVsRj87Ell6rhxqlVJjonkPtc4iimxsvf38AUGb7jbPRPW6u0klVCdVb769Nlbdxl3R4bPlwGZLds3g3wCtKz1GIvHRs4PUqV75kG%2BxIb04SoGDaePFCoE3PIJdFX983N7atl5g67s8BoQR0sfxjcOoK3vOTMN3Sq1vpbI9KO3NWGQu%2Bxm0hJ64SyoWNsE07G1%2F4cvR3vPwPfZFQuysax0TMgP%2Bmtjrd2SxztPsiDP0u1R8dDbDfqU5qFPrZoFaR1dcdOYiiBsDzXj0j89al28B%2FgfIp75HiucTw3zKQbqAM8vgqumLir0dDM5IASdL5kx2DO618TuNoqX2v3vpr9BkXE9HFU618ObAusPNHgJjswakPadvFglY4AUa1nws7VnfT2Sv%2FilXp8UDMobDb2HtU9%2BWrVLeGrRMIudsMsGOqUBhSNE1jQqLVjeRBtMQLd5EXAA72BEkIh1H%2FaBQn4sQronmTAN3RSIvWBayNxrgi5K5T4%2Ft9bKMkmOOtmB%2BVF4%2F42va47L%2BCoONHh5bM0UXf1AqqXdp5JylcLoFJkv%2BCOn1eefe7CUgG3swt64gja9lEm5IcFrzqmATmgxq%2BNbq1TpsLaBgVxlB8cVLkiepm55YdFXV2UmByFTpL7rECEEYgF7%2BbHx&X-Amz-Signature=bb4df98612b4bd73ecb721b55d617910d44bb4769e29dad2a10cd334cf4d8ce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


