---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T23:33:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T23:33:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5M4IMO7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAYvQXUbQaGHT8FM%2F8XVNKYHhLHQohJXqGwkSK1Glct%2BAiBn6Vm5gG83tVz%2F0NVqRLly5VeSkDqVSNGkieeaZ1ci%2Fyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM5HzBQOOBG9wdQTs4KtwD5GJhaiXbamyUgVv%2FVZUMcWOFnC6l0BchaDsUL1%2FtTPIjx8w1dvQowiXdkZeEY45n8fzpsAcVjtjlYiSrZYOQqJBFzTdMt1RPrnWhdOP%2B7TP%2BNXKWx6jycS6gxMo3ofvB%2BS6wbalu8Na8XDh7RxXdF7XDw66saINIeSAZ3laUw%2BJZOdleff5i0pT0QvIjqpJQ7hD2u6IpgrVPV8nFLW0Mr9GF0stHIP8KlVGCy8I8GgZ0XRLc0gtGzpb7pnKGYcugF4EPK4r3YSbuSo%2BoJmJZIk6BjPc%2F%2FWuE8yP0OZw1u1AlKL1HlQBdEls%2BJEdx9nn4HssfsIj1aP9NraFRVUDYGVOwcOzO7oulHjT0B2%2B7%2F8YKF1c6Rlab%2Fqe0rLsn3zmU09bB19wnZTBqvXzX5zrneLCGH2wRGCdmD0BSP0DOexBjozB4Y0sTEKRDVOhzaRepUQkgtVcmbzajkRhl0Gg3TIG4MvTZXudUAEAG8J3kwrf%2BngYYoi0iFqU9yF1sZ5HwD7Q8tgNNZS3VMnM88CpnOE8%2FRwt%2B%2FZvShFBoolqlC43EBbRo1JaZNwWZ0BqvcESCeFJWyCf914UqkF20p8VR5n3r3ub4REbL1VYJ4UeT9L%2FXbctAkAtbsgpGMbAwvPqSxAY6pgHrhvXqmdsiXeKd43M666wqZNh5Iso3%2BtB2DaMPNngxhPRf1ftD2GsTcoUdvDYw9e0JQX3vF0u7wcE70wqFI26RxqEOfFmvMkjb9q4j5MYV%2Fdbv8dwiNA%2B7490H%2FF%2BpgE1DN8XC4bQ9j43ppxB8RCMqxLSJqThWDQmtX9dyIS0e2yNoTY1Xig3DLezX06eKZxOkCIdxNbduGpocrfK%2F%2BG7nLcDx%2BrOk&X-Amz-Signature=9f5efd52ba2873bf2abc699f97f8b95627427c18ccfa8d951dcdddd038fcee0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5M4IMO7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAYvQXUbQaGHT8FM%2F8XVNKYHhLHQohJXqGwkSK1Glct%2BAiBn6Vm5gG83tVz%2F0NVqRLly5VeSkDqVSNGkieeaZ1ci%2Fyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM5HzBQOOBG9wdQTs4KtwD5GJhaiXbamyUgVv%2FVZUMcWOFnC6l0BchaDsUL1%2FtTPIjx8w1dvQowiXdkZeEY45n8fzpsAcVjtjlYiSrZYOQqJBFzTdMt1RPrnWhdOP%2B7TP%2BNXKWx6jycS6gxMo3ofvB%2BS6wbalu8Na8XDh7RxXdF7XDw66saINIeSAZ3laUw%2BJZOdleff5i0pT0QvIjqpJQ7hD2u6IpgrVPV8nFLW0Mr9GF0stHIP8KlVGCy8I8GgZ0XRLc0gtGzpb7pnKGYcugF4EPK4r3YSbuSo%2BoJmJZIk6BjPc%2F%2FWuE8yP0OZw1u1AlKL1HlQBdEls%2BJEdx9nn4HssfsIj1aP9NraFRVUDYGVOwcOzO7oulHjT0B2%2B7%2F8YKF1c6Rlab%2Fqe0rLsn3zmU09bB19wnZTBqvXzX5zrneLCGH2wRGCdmD0BSP0DOexBjozB4Y0sTEKRDVOhzaRepUQkgtVcmbzajkRhl0Gg3TIG4MvTZXudUAEAG8J3kwrf%2BngYYoi0iFqU9yF1sZ5HwD7Q8tgNNZS3VMnM88CpnOE8%2FRwt%2B%2FZvShFBoolqlC43EBbRo1JaZNwWZ0BqvcESCeFJWyCf914UqkF20p8VR5n3r3ub4REbL1VYJ4UeT9L%2FXbctAkAtbsgpGMbAwvPqSxAY6pgHrhvXqmdsiXeKd43M666wqZNh5Iso3%2BtB2DaMPNngxhPRf1ftD2GsTcoUdvDYw9e0JQX3vF0u7wcE70wqFI26RxqEOfFmvMkjb9q4j5MYV%2Fdbv8dwiNA%2B7490H%2FF%2BpgE1DN8XC4bQ9j43ppxB8RCMqxLSJqThWDQmtX9dyIS0e2yNoTY1Xig3DLezX06eKZxOkCIdxNbduGpocrfK%2F%2BG7nLcDx%2BrOk&X-Amz-Signature=5dc68ef77a85413b90bec5df484020d94b6f62a41edbf68b6a846e788481a0bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5M4IMO7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAYvQXUbQaGHT8FM%2F8XVNKYHhLHQohJXqGwkSK1Glct%2BAiBn6Vm5gG83tVz%2F0NVqRLly5VeSkDqVSNGkieeaZ1ci%2Fyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM5HzBQOOBG9wdQTs4KtwD5GJhaiXbamyUgVv%2FVZUMcWOFnC6l0BchaDsUL1%2FtTPIjx8w1dvQowiXdkZeEY45n8fzpsAcVjtjlYiSrZYOQqJBFzTdMt1RPrnWhdOP%2B7TP%2BNXKWx6jycS6gxMo3ofvB%2BS6wbalu8Na8XDh7RxXdF7XDw66saINIeSAZ3laUw%2BJZOdleff5i0pT0QvIjqpJQ7hD2u6IpgrVPV8nFLW0Mr9GF0stHIP8KlVGCy8I8GgZ0XRLc0gtGzpb7pnKGYcugF4EPK4r3YSbuSo%2BoJmJZIk6BjPc%2F%2FWuE8yP0OZw1u1AlKL1HlQBdEls%2BJEdx9nn4HssfsIj1aP9NraFRVUDYGVOwcOzO7oulHjT0B2%2B7%2F8YKF1c6Rlab%2Fqe0rLsn3zmU09bB19wnZTBqvXzX5zrneLCGH2wRGCdmD0BSP0DOexBjozB4Y0sTEKRDVOhzaRepUQkgtVcmbzajkRhl0Gg3TIG4MvTZXudUAEAG8J3kwrf%2BngYYoi0iFqU9yF1sZ5HwD7Q8tgNNZS3VMnM88CpnOE8%2FRwt%2B%2FZvShFBoolqlC43EBbRo1JaZNwWZ0BqvcESCeFJWyCf914UqkF20p8VR5n3r3ub4REbL1VYJ4UeT9L%2FXbctAkAtbsgpGMbAwvPqSxAY6pgHrhvXqmdsiXeKd43M666wqZNh5Iso3%2BtB2DaMPNngxhPRf1ftD2GsTcoUdvDYw9e0JQX3vF0u7wcE70wqFI26RxqEOfFmvMkjb9q4j5MYV%2Fdbv8dwiNA%2B7490H%2FF%2BpgE1DN8XC4bQ9j43ppxB8RCMqxLSJqThWDQmtX9dyIS0e2yNoTY1Xig3DLezX06eKZxOkCIdxNbduGpocrfK%2F%2BG7nLcDx%2BrOk&X-Amz-Signature=b756e29e740dff8accfe7166e32826423f62272a44493122b7ee64cc9fcb404b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5M4IMO7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAYvQXUbQaGHT8FM%2F8XVNKYHhLHQohJXqGwkSK1Glct%2BAiBn6Vm5gG83tVz%2F0NVqRLly5VeSkDqVSNGkieeaZ1ci%2Fyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM5HzBQOOBG9wdQTs4KtwD5GJhaiXbamyUgVv%2FVZUMcWOFnC6l0BchaDsUL1%2FtTPIjx8w1dvQowiXdkZeEY45n8fzpsAcVjtjlYiSrZYOQqJBFzTdMt1RPrnWhdOP%2B7TP%2BNXKWx6jycS6gxMo3ofvB%2BS6wbalu8Na8XDh7RxXdF7XDw66saINIeSAZ3laUw%2BJZOdleff5i0pT0QvIjqpJQ7hD2u6IpgrVPV8nFLW0Mr9GF0stHIP8KlVGCy8I8GgZ0XRLc0gtGzpb7pnKGYcugF4EPK4r3YSbuSo%2BoJmJZIk6BjPc%2F%2FWuE8yP0OZw1u1AlKL1HlQBdEls%2BJEdx9nn4HssfsIj1aP9NraFRVUDYGVOwcOzO7oulHjT0B2%2B7%2F8YKF1c6Rlab%2Fqe0rLsn3zmU09bB19wnZTBqvXzX5zrneLCGH2wRGCdmD0BSP0DOexBjozB4Y0sTEKRDVOhzaRepUQkgtVcmbzajkRhl0Gg3TIG4MvTZXudUAEAG8J3kwrf%2BngYYoi0iFqU9yF1sZ5HwD7Q8tgNNZS3VMnM88CpnOE8%2FRwt%2B%2FZvShFBoolqlC43EBbRo1JaZNwWZ0BqvcESCeFJWyCf914UqkF20p8VR5n3r3ub4REbL1VYJ4UeT9L%2FXbctAkAtbsgpGMbAwvPqSxAY6pgHrhvXqmdsiXeKd43M666wqZNh5Iso3%2BtB2DaMPNngxhPRf1ftD2GsTcoUdvDYw9e0JQX3vF0u7wcE70wqFI26RxqEOfFmvMkjb9q4j5MYV%2Fdbv8dwiNA%2B7490H%2FF%2BpgE1DN8XC4bQ9j43ppxB8RCMqxLSJqThWDQmtX9dyIS0e2yNoTY1Xig3DLezX06eKZxOkCIdxNbduGpocrfK%2F%2BG7nLcDx%2BrOk&X-Amz-Signature=514f85db6e784087fea7c960f0d67cc425234c76b5cde6f80b190107db9be2ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5M4IMO7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAYvQXUbQaGHT8FM%2F8XVNKYHhLHQohJXqGwkSK1Glct%2BAiBn6Vm5gG83tVz%2F0NVqRLly5VeSkDqVSNGkieeaZ1ci%2Fyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM5HzBQOOBG9wdQTs4KtwD5GJhaiXbamyUgVv%2FVZUMcWOFnC6l0BchaDsUL1%2FtTPIjx8w1dvQowiXdkZeEY45n8fzpsAcVjtjlYiSrZYOQqJBFzTdMt1RPrnWhdOP%2B7TP%2BNXKWx6jycS6gxMo3ofvB%2BS6wbalu8Na8XDh7RxXdF7XDw66saINIeSAZ3laUw%2BJZOdleff5i0pT0QvIjqpJQ7hD2u6IpgrVPV8nFLW0Mr9GF0stHIP8KlVGCy8I8GgZ0XRLc0gtGzpb7pnKGYcugF4EPK4r3YSbuSo%2BoJmJZIk6BjPc%2F%2FWuE8yP0OZw1u1AlKL1HlQBdEls%2BJEdx9nn4HssfsIj1aP9NraFRVUDYGVOwcOzO7oulHjT0B2%2B7%2F8YKF1c6Rlab%2Fqe0rLsn3zmU09bB19wnZTBqvXzX5zrneLCGH2wRGCdmD0BSP0DOexBjozB4Y0sTEKRDVOhzaRepUQkgtVcmbzajkRhl0Gg3TIG4MvTZXudUAEAG8J3kwrf%2BngYYoi0iFqU9yF1sZ5HwD7Q8tgNNZS3VMnM88CpnOE8%2FRwt%2B%2FZvShFBoolqlC43EBbRo1JaZNwWZ0BqvcESCeFJWyCf914UqkF20p8VR5n3r3ub4REbL1VYJ4UeT9L%2FXbctAkAtbsgpGMbAwvPqSxAY6pgHrhvXqmdsiXeKd43M666wqZNh5Iso3%2BtB2DaMPNngxhPRf1ftD2GsTcoUdvDYw9e0JQX3vF0u7wcE70wqFI26RxqEOfFmvMkjb9q4j5MYV%2Fdbv8dwiNA%2B7490H%2FF%2BpgE1DN8XC4bQ9j43ppxB8RCMqxLSJqThWDQmtX9dyIS0e2yNoTY1Xig3DLezX06eKZxOkCIdxNbduGpocrfK%2F%2BG7nLcDx%2BrOk&X-Amz-Signature=fa490a0edeb776998d4b8256a2afbd088a292bf3c210a11dd3d83712ed9ce263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5M4IMO7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAYvQXUbQaGHT8FM%2F8XVNKYHhLHQohJXqGwkSK1Glct%2BAiBn6Vm5gG83tVz%2F0NVqRLly5VeSkDqVSNGkieeaZ1ci%2Fyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM5HzBQOOBG9wdQTs4KtwD5GJhaiXbamyUgVv%2FVZUMcWOFnC6l0BchaDsUL1%2FtTPIjx8w1dvQowiXdkZeEY45n8fzpsAcVjtjlYiSrZYOQqJBFzTdMt1RPrnWhdOP%2B7TP%2BNXKWx6jycS6gxMo3ofvB%2BS6wbalu8Na8XDh7RxXdF7XDw66saINIeSAZ3laUw%2BJZOdleff5i0pT0QvIjqpJQ7hD2u6IpgrVPV8nFLW0Mr9GF0stHIP8KlVGCy8I8GgZ0XRLc0gtGzpb7pnKGYcugF4EPK4r3YSbuSo%2BoJmJZIk6BjPc%2F%2FWuE8yP0OZw1u1AlKL1HlQBdEls%2BJEdx9nn4HssfsIj1aP9NraFRVUDYGVOwcOzO7oulHjT0B2%2B7%2F8YKF1c6Rlab%2Fqe0rLsn3zmU09bB19wnZTBqvXzX5zrneLCGH2wRGCdmD0BSP0DOexBjozB4Y0sTEKRDVOhzaRepUQkgtVcmbzajkRhl0Gg3TIG4MvTZXudUAEAG8J3kwrf%2BngYYoi0iFqU9yF1sZ5HwD7Q8tgNNZS3VMnM88CpnOE8%2FRwt%2B%2FZvShFBoolqlC43EBbRo1JaZNwWZ0BqvcESCeFJWyCf914UqkF20p8VR5n3r3ub4REbL1VYJ4UeT9L%2FXbctAkAtbsgpGMbAwvPqSxAY6pgHrhvXqmdsiXeKd43M666wqZNh5Iso3%2BtB2DaMPNngxhPRf1ftD2GsTcoUdvDYw9e0JQX3vF0u7wcE70wqFI26RxqEOfFmvMkjb9q4j5MYV%2Fdbv8dwiNA%2B7490H%2FF%2BpgE1DN8XC4bQ9j43ppxB8RCMqxLSJqThWDQmtX9dyIS0e2yNoTY1Xig3DLezX06eKZxOkCIdxNbduGpocrfK%2F%2BG7nLcDx%2BrOk&X-Amz-Signature=3c43f55436497b5a8b613c7db0472c0ab02ec60c89e373bbaf1e461a18521eaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5M4IMO7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAYvQXUbQaGHT8FM%2F8XVNKYHhLHQohJXqGwkSK1Glct%2BAiBn6Vm5gG83tVz%2F0NVqRLly5VeSkDqVSNGkieeaZ1ci%2Fyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM5HzBQOOBG9wdQTs4KtwD5GJhaiXbamyUgVv%2FVZUMcWOFnC6l0BchaDsUL1%2FtTPIjx8w1dvQowiXdkZeEY45n8fzpsAcVjtjlYiSrZYOQqJBFzTdMt1RPrnWhdOP%2B7TP%2BNXKWx6jycS6gxMo3ofvB%2BS6wbalu8Na8XDh7RxXdF7XDw66saINIeSAZ3laUw%2BJZOdleff5i0pT0QvIjqpJQ7hD2u6IpgrVPV8nFLW0Mr9GF0stHIP8KlVGCy8I8GgZ0XRLc0gtGzpb7pnKGYcugF4EPK4r3YSbuSo%2BoJmJZIk6BjPc%2F%2FWuE8yP0OZw1u1AlKL1HlQBdEls%2BJEdx9nn4HssfsIj1aP9NraFRVUDYGVOwcOzO7oulHjT0B2%2B7%2F8YKF1c6Rlab%2Fqe0rLsn3zmU09bB19wnZTBqvXzX5zrneLCGH2wRGCdmD0BSP0DOexBjozB4Y0sTEKRDVOhzaRepUQkgtVcmbzajkRhl0Gg3TIG4MvTZXudUAEAG8J3kwrf%2BngYYoi0iFqU9yF1sZ5HwD7Q8tgNNZS3VMnM88CpnOE8%2FRwt%2B%2FZvShFBoolqlC43EBbRo1JaZNwWZ0BqvcESCeFJWyCf914UqkF20p8VR5n3r3ub4REbL1VYJ4UeT9L%2FXbctAkAtbsgpGMbAwvPqSxAY6pgHrhvXqmdsiXeKd43M666wqZNh5Iso3%2BtB2DaMPNngxhPRf1ftD2GsTcoUdvDYw9e0JQX3vF0u7wcE70wqFI26RxqEOfFmvMkjb9q4j5MYV%2Fdbv8dwiNA%2B7490H%2FF%2BpgE1DN8XC4bQ9j43ppxB8RCMqxLSJqThWDQmtX9dyIS0e2yNoTY1Xig3DLezX06eKZxOkCIdxNbduGpocrfK%2F%2BG7nLcDx%2BrOk&X-Amz-Signature=46c470c38a6fa5f8e300269739508f8cd5d9c0919b35984959b79ea554c482bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5M4IMO7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAYvQXUbQaGHT8FM%2F8XVNKYHhLHQohJXqGwkSK1Glct%2BAiBn6Vm5gG83tVz%2F0NVqRLly5VeSkDqVSNGkieeaZ1ci%2Fyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM5HzBQOOBG9wdQTs4KtwD5GJhaiXbamyUgVv%2FVZUMcWOFnC6l0BchaDsUL1%2FtTPIjx8w1dvQowiXdkZeEY45n8fzpsAcVjtjlYiSrZYOQqJBFzTdMt1RPrnWhdOP%2B7TP%2BNXKWx6jycS6gxMo3ofvB%2BS6wbalu8Na8XDh7RxXdF7XDw66saINIeSAZ3laUw%2BJZOdleff5i0pT0QvIjqpJQ7hD2u6IpgrVPV8nFLW0Mr9GF0stHIP8KlVGCy8I8GgZ0XRLc0gtGzpb7pnKGYcugF4EPK4r3YSbuSo%2BoJmJZIk6BjPc%2F%2FWuE8yP0OZw1u1AlKL1HlQBdEls%2BJEdx9nn4HssfsIj1aP9NraFRVUDYGVOwcOzO7oulHjT0B2%2B7%2F8YKF1c6Rlab%2Fqe0rLsn3zmU09bB19wnZTBqvXzX5zrneLCGH2wRGCdmD0BSP0DOexBjozB4Y0sTEKRDVOhzaRepUQkgtVcmbzajkRhl0Gg3TIG4MvTZXudUAEAG8J3kwrf%2BngYYoi0iFqU9yF1sZ5HwD7Q8tgNNZS3VMnM88CpnOE8%2FRwt%2B%2FZvShFBoolqlC43EBbRo1JaZNwWZ0BqvcESCeFJWyCf914UqkF20p8VR5n3r3ub4REbL1VYJ4UeT9L%2FXbctAkAtbsgpGMbAwvPqSxAY6pgHrhvXqmdsiXeKd43M666wqZNh5Iso3%2BtB2DaMPNngxhPRf1ftD2GsTcoUdvDYw9e0JQX3vF0u7wcE70wqFI26RxqEOfFmvMkjb9q4j5MYV%2Fdbv8dwiNA%2B7490H%2FF%2BpgE1DN8XC4bQ9j43ppxB8RCMqxLSJqThWDQmtX9dyIS0e2yNoTY1Xig3DLezX06eKZxOkCIdxNbduGpocrfK%2F%2BG7nLcDx%2BrOk&X-Amz-Signature=e1b790c70fb56e9459b1717caf8abce362ece413b9a1a6890637388fc4ea8262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5M4IMO7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAYvQXUbQaGHT8FM%2F8XVNKYHhLHQohJXqGwkSK1Glct%2BAiBn6Vm5gG83tVz%2F0NVqRLly5VeSkDqVSNGkieeaZ1ci%2Fyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM5HzBQOOBG9wdQTs4KtwD5GJhaiXbamyUgVv%2FVZUMcWOFnC6l0BchaDsUL1%2FtTPIjx8w1dvQowiXdkZeEY45n8fzpsAcVjtjlYiSrZYOQqJBFzTdMt1RPrnWhdOP%2B7TP%2BNXKWx6jycS6gxMo3ofvB%2BS6wbalu8Na8XDh7RxXdF7XDw66saINIeSAZ3laUw%2BJZOdleff5i0pT0QvIjqpJQ7hD2u6IpgrVPV8nFLW0Mr9GF0stHIP8KlVGCy8I8GgZ0XRLc0gtGzpb7pnKGYcugF4EPK4r3YSbuSo%2BoJmJZIk6BjPc%2F%2FWuE8yP0OZw1u1AlKL1HlQBdEls%2BJEdx9nn4HssfsIj1aP9NraFRVUDYGVOwcOzO7oulHjT0B2%2B7%2F8YKF1c6Rlab%2Fqe0rLsn3zmU09bB19wnZTBqvXzX5zrneLCGH2wRGCdmD0BSP0DOexBjozB4Y0sTEKRDVOhzaRepUQkgtVcmbzajkRhl0Gg3TIG4MvTZXudUAEAG8J3kwrf%2BngYYoi0iFqU9yF1sZ5HwD7Q8tgNNZS3VMnM88CpnOE8%2FRwt%2B%2FZvShFBoolqlC43EBbRo1JaZNwWZ0BqvcESCeFJWyCf914UqkF20p8VR5n3r3ub4REbL1VYJ4UeT9L%2FXbctAkAtbsgpGMbAwvPqSxAY6pgHrhvXqmdsiXeKd43M666wqZNh5Iso3%2BtB2DaMPNngxhPRf1ftD2GsTcoUdvDYw9e0JQX3vF0u7wcE70wqFI26RxqEOfFmvMkjb9q4j5MYV%2Fdbv8dwiNA%2B7490H%2FF%2BpgE1DN8XC4bQ9j43ppxB8RCMqxLSJqThWDQmtX9dyIS0e2yNoTY1Xig3DLezX06eKZxOkCIdxNbduGpocrfK%2F%2BG7nLcDx%2BrOk&X-Amz-Signature=444991bc750f2088832a98c8048086dc81584edd4d0cf2b4bcb36c1125ac84a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5M4IMO7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAYvQXUbQaGHT8FM%2F8XVNKYHhLHQohJXqGwkSK1Glct%2BAiBn6Vm5gG83tVz%2F0NVqRLly5VeSkDqVSNGkieeaZ1ci%2Fyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM5HzBQOOBG9wdQTs4KtwD5GJhaiXbamyUgVv%2FVZUMcWOFnC6l0BchaDsUL1%2FtTPIjx8w1dvQowiXdkZeEY45n8fzpsAcVjtjlYiSrZYOQqJBFzTdMt1RPrnWhdOP%2B7TP%2BNXKWx6jycS6gxMo3ofvB%2BS6wbalu8Na8XDh7RxXdF7XDw66saINIeSAZ3laUw%2BJZOdleff5i0pT0QvIjqpJQ7hD2u6IpgrVPV8nFLW0Mr9GF0stHIP8KlVGCy8I8GgZ0XRLc0gtGzpb7pnKGYcugF4EPK4r3YSbuSo%2BoJmJZIk6BjPc%2F%2FWuE8yP0OZw1u1AlKL1HlQBdEls%2BJEdx9nn4HssfsIj1aP9NraFRVUDYGVOwcOzO7oulHjT0B2%2B7%2F8YKF1c6Rlab%2Fqe0rLsn3zmU09bB19wnZTBqvXzX5zrneLCGH2wRGCdmD0BSP0DOexBjozB4Y0sTEKRDVOhzaRepUQkgtVcmbzajkRhl0Gg3TIG4MvTZXudUAEAG8J3kwrf%2BngYYoi0iFqU9yF1sZ5HwD7Q8tgNNZS3VMnM88CpnOE8%2FRwt%2B%2FZvShFBoolqlC43EBbRo1JaZNwWZ0BqvcESCeFJWyCf914UqkF20p8VR5n3r3ub4REbL1VYJ4UeT9L%2FXbctAkAtbsgpGMbAwvPqSxAY6pgHrhvXqmdsiXeKd43M666wqZNh5Iso3%2BtB2DaMPNngxhPRf1ftD2GsTcoUdvDYw9e0JQX3vF0u7wcE70wqFI26RxqEOfFmvMkjb9q4j5MYV%2Fdbv8dwiNA%2B7490H%2FF%2BpgE1DN8XC4bQ9j43ppxB8RCMqxLSJqThWDQmtX9dyIS0e2yNoTY1Xig3DLezX06eKZxOkCIdxNbduGpocrfK%2F%2BG7nLcDx%2BrOk&X-Amz-Signature=c4a95e123e4fb63fb515d1830ff1a049e6c569a1e7d9a48aaaad3d2e8e841d21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5M4IMO7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAYvQXUbQaGHT8FM%2F8XVNKYHhLHQohJXqGwkSK1Glct%2BAiBn6Vm5gG83tVz%2F0NVqRLly5VeSkDqVSNGkieeaZ1ci%2Fyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM5HzBQOOBG9wdQTs4KtwD5GJhaiXbamyUgVv%2FVZUMcWOFnC6l0BchaDsUL1%2FtTPIjx8w1dvQowiXdkZeEY45n8fzpsAcVjtjlYiSrZYOQqJBFzTdMt1RPrnWhdOP%2B7TP%2BNXKWx6jycS6gxMo3ofvB%2BS6wbalu8Na8XDh7RxXdF7XDw66saINIeSAZ3laUw%2BJZOdleff5i0pT0QvIjqpJQ7hD2u6IpgrVPV8nFLW0Mr9GF0stHIP8KlVGCy8I8GgZ0XRLc0gtGzpb7pnKGYcugF4EPK4r3YSbuSo%2BoJmJZIk6BjPc%2F%2FWuE8yP0OZw1u1AlKL1HlQBdEls%2BJEdx9nn4HssfsIj1aP9NraFRVUDYGVOwcOzO7oulHjT0B2%2B7%2F8YKF1c6Rlab%2Fqe0rLsn3zmU09bB19wnZTBqvXzX5zrneLCGH2wRGCdmD0BSP0DOexBjozB4Y0sTEKRDVOhzaRepUQkgtVcmbzajkRhl0Gg3TIG4MvTZXudUAEAG8J3kwrf%2BngYYoi0iFqU9yF1sZ5HwD7Q8tgNNZS3VMnM88CpnOE8%2FRwt%2B%2FZvShFBoolqlC43EBbRo1JaZNwWZ0BqvcESCeFJWyCf914UqkF20p8VR5n3r3ub4REbL1VYJ4UeT9L%2FXbctAkAtbsgpGMbAwvPqSxAY6pgHrhvXqmdsiXeKd43M666wqZNh5Iso3%2BtB2DaMPNngxhPRf1ftD2GsTcoUdvDYw9e0JQX3vF0u7wcE70wqFI26RxqEOfFmvMkjb9q4j5MYV%2Fdbv8dwiNA%2B7490H%2FF%2BpgE1DN8XC4bQ9j43ppxB8RCMqxLSJqThWDQmtX9dyIS0e2yNoTY1Xig3DLezX06eKZxOkCIdxNbduGpocrfK%2F%2BG7nLcDx%2BrOk&X-Amz-Signature=cad83558cf92e256bb78e5cc74eb0d571a552329c8389bd028f70f69943b7d90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5M4IMO7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAYvQXUbQaGHT8FM%2F8XVNKYHhLHQohJXqGwkSK1Glct%2BAiBn6Vm5gG83tVz%2F0NVqRLly5VeSkDqVSNGkieeaZ1ci%2Fyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM5HzBQOOBG9wdQTs4KtwD5GJhaiXbamyUgVv%2FVZUMcWOFnC6l0BchaDsUL1%2FtTPIjx8w1dvQowiXdkZeEY45n8fzpsAcVjtjlYiSrZYOQqJBFzTdMt1RPrnWhdOP%2B7TP%2BNXKWx6jycS6gxMo3ofvB%2BS6wbalu8Na8XDh7RxXdF7XDw66saINIeSAZ3laUw%2BJZOdleff5i0pT0QvIjqpJQ7hD2u6IpgrVPV8nFLW0Mr9GF0stHIP8KlVGCy8I8GgZ0XRLc0gtGzpb7pnKGYcugF4EPK4r3YSbuSo%2BoJmJZIk6BjPc%2F%2FWuE8yP0OZw1u1AlKL1HlQBdEls%2BJEdx9nn4HssfsIj1aP9NraFRVUDYGVOwcOzO7oulHjT0B2%2B7%2F8YKF1c6Rlab%2Fqe0rLsn3zmU09bB19wnZTBqvXzX5zrneLCGH2wRGCdmD0BSP0DOexBjozB4Y0sTEKRDVOhzaRepUQkgtVcmbzajkRhl0Gg3TIG4MvTZXudUAEAG8J3kwrf%2BngYYoi0iFqU9yF1sZ5HwD7Q8tgNNZS3VMnM88CpnOE8%2FRwt%2B%2FZvShFBoolqlC43EBbRo1JaZNwWZ0BqvcESCeFJWyCf914UqkF20p8VR5n3r3ub4REbL1VYJ4UeT9L%2FXbctAkAtbsgpGMbAwvPqSxAY6pgHrhvXqmdsiXeKd43M666wqZNh5Iso3%2BtB2DaMPNngxhPRf1ftD2GsTcoUdvDYw9e0JQX3vF0u7wcE70wqFI26RxqEOfFmvMkjb9q4j5MYV%2Fdbv8dwiNA%2B7490H%2FF%2BpgE1DN8XC4bQ9j43ppxB8RCMqxLSJqThWDQmtX9dyIS0e2yNoTY1Xig3DLezX06eKZxOkCIdxNbduGpocrfK%2F%2BG7nLcDx%2BrOk&X-Amz-Signature=6c5ad21927ba05218fef1180600e8200f00c4542923b241f944d71e5c7e105d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5M4IMO7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAYvQXUbQaGHT8FM%2F8XVNKYHhLHQohJXqGwkSK1Glct%2BAiBn6Vm5gG83tVz%2F0NVqRLly5VeSkDqVSNGkieeaZ1ci%2Fyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM5HzBQOOBG9wdQTs4KtwD5GJhaiXbamyUgVv%2FVZUMcWOFnC6l0BchaDsUL1%2FtTPIjx8w1dvQowiXdkZeEY45n8fzpsAcVjtjlYiSrZYOQqJBFzTdMt1RPrnWhdOP%2B7TP%2BNXKWx6jycS6gxMo3ofvB%2BS6wbalu8Na8XDh7RxXdF7XDw66saINIeSAZ3laUw%2BJZOdleff5i0pT0QvIjqpJQ7hD2u6IpgrVPV8nFLW0Mr9GF0stHIP8KlVGCy8I8GgZ0XRLc0gtGzpb7pnKGYcugF4EPK4r3YSbuSo%2BoJmJZIk6BjPc%2F%2FWuE8yP0OZw1u1AlKL1HlQBdEls%2BJEdx9nn4HssfsIj1aP9NraFRVUDYGVOwcOzO7oulHjT0B2%2B7%2F8YKF1c6Rlab%2Fqe0rLsn3zmU09bB19wnZTBqvXzX5zrneLCGH2wRGCdmD0BSP0DOexBjozB4Y0sTEKRDVOhzaRepUQkgtVcmbzajkRhl0Gg3TIG4MvTZXudUAEAG8J3kwrf%2BngYYoi0iFqU9yF1sZ5HwD7Q8tgNNZS3VMnM88CpnOE8%2FRwt%2B%2FZvShFBoolqlC43EBbRo1JaZNwWZ0BqvcESCeFJWyCf914UqkF20p8VR5n3r3ub4REbL1VYJ4UeT9L%2FXbctAkAtbsgpGMbAwvPqSxAY6pgHrhvXqmdsiXeKd43M666wqZNh5Iso3%2BtB2DaMPNngxhPRf1ftD2GsTcoUdvDYw9e0JQX3vF0u7wcE70wqFI26RxqEOfFmvMkjb9q4j5MYV%2Fdbv8dwiNA%2B7490H%2FF%2BpgE1DN8XC4bQ9j43ppxB8RCMqxLSJqThWDQmtX9dyIS0e2yNoTY1Xig3DLezX06eKZxOkCIdxNbduGpocrfK%2F%2BG7nLcDx%2BrOk&X-Amz-Signature=47a6e0217e8984120e6f188bce544a99a3c564bf68bda548c86f58b16a3487de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5M4IMO7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAYvQXUbQaGHT8FM%2F8XVNKYHhLHQohJXqGwkSK1Glct%2BAiBn6Vm5gG83tVz%2F0NVqRLly5VeSkDqVSNGkieeaZ1ci%2Fyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM5HzBQOOBG9wdQTs4KtwD5GJhaiXbamyUgVv%2FVZUMcWOFnC6l0BchaDsUL1%2FtTPIjx8w1dvQowiXdkZeEY45n8fzpsAcVjtjlYiSrZYOQqJBFzTdMt1RPrnWhdOP%2B7TP%2BNXKWx6jycS6gxMo3ofvB%2BS6wbalu8Na8XDh7RxXdF7XDw66saINIeSAZ3laUw%2BJZOdleff5i0pT0QvIjqpJQ7hD2u6IpgrVPV8nFLW0Mr9GF0stHIP8KlVGCy8I8GgZ0XRLc0gtGzpb7pnKGYcugF4EPK4r3YSbuSo%2BoJmJZIk6BjPc%2F%2FWuE8yP0OZw1u1AlKL1HlQBdEls%2BJEdx9nn4HssfsIj1aP9NraFRVUDYGVOwcOzO7oulHjT0B2%2B7%2F8YKF1c6Rlab%2Fqe0rLsn3zmU09bB19wnZTBqvXzX5zrneLCGH2wRGCdmD0BSP0DOexBjozB4Y0sTEKRDVOhzaRepUQkgtVcmbzajkRhl0Gg3TIG4MvTZXudUAEAG8J3kwrf%2BngYYoi0iFqU9yF1sZ5HwD7Q8tgNNZS3VMnM88CpnOE8%2FRwt%2B%2FZvShFBoolqlC43EBbRo1JaZNwWZ0BqvcESCeFJWyCf914UqkF20p8VR5n3r3ub4REbL1VYJ4UeT9L%2FXbctAkAtbsgpGMbAwvPqSxAY6pgHrhvXqmdsiXeKd43M666wqZNh5Iso3%2BtB2DaMPNngxhPRf1ftD2GsTcoUdvDYw9e0JQX3vF0u7wcE70wqFI26RxqEOfFmvMkjb9q4j5MYV%2Fdbv8dwiNA%2B7490H%2FF%2BpgE1DN8XC4bQ9j43ppxB8RCMqxLSJqThWDQmtX9dyIS0e2yNoTY1Xig3DLezX06eKZxOkCIdxNbduGpocrfK%2F%2BG7nLcDx%2BrOk&X-Amz-Signature=5cc209b64ee0d49dd4289f4bec66185194bf7bea7ee25cdb2c7caf48ac02c718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKO64AAQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDdvs6XfOBpZZ%2BLX8bEghelOG3udqOU8UoZ6mz1CNjLigIgCMshj%2Bno0RTPKOEcVYyKNzV0z2rt5eAacrTWtJJQ82Uq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIJ7AerxRyU8WsAQNCrcA5Sj6rtQYqEG3s8bUFz98le0neEmsFI1YJ%2BGc249YFiMb1C%2FNZaeOYNtTS2C5Eb7B0w9UA5Yi7eLPHllLGEsGzVCxVOvbh9HxrQDqPseS9s6Ig96JoVlTovxDieHTFc9EWcxuykWPvHyr86uJ4Ef1MbStXni%2BwDU26IsdiQYYr5Y5OVAKGStagNkx9F4d3qHoAnPkXjBOIQS0Zi1k8pFi2otnFg%2F1oHodQuZXU6fvqO%2BS4aJKwWb%2BTAoHaAVSxJgNDoUbeRa9goBqoj%2BfnCx4gry0Dt%2F0avE39R5rCKOdIraGfrBZouMiaqqdjCufI9FkuOPotrlPMxXNfQTs%2Bh19sBLTzznX4wG%2BeP3b9j9fkBGZxYUKPa9zbx44YusZsiEo%2Bjuta4gSOsBe2jnEpdiKO1CJWi2q7%2FCxje5R8ECaA4Z%2B3aUtuErzRjL%2B8VuH1LiZyIryeiyZCHZ8b91MaoujV%2F6%2BsdM6%2Fr%2B%2FvIPaoMYM6%2B58Al%2F8G8I9Blq7IjWK%2FS8IGhnfr4VZb1n65an%2FI1TN96DyYspg5skjZ5e7r6bKkoMXdMVXL8ZTD8fWRLIuaLRJc9CMtZjP1amUTOTNi1sUXDElO9zOz%2BmR6QGqXeYW%2FRAbv0Ro8jk%2Fq44uDS8MPL6ksQGOqUBwjHPr3oq1PrTrI6r02WGpUpdkQ6dFbDY28TQyqLxcKfAvMff7nz8qSfxiqFyitlI2nTRmrv6FYMtapB9VlDGuvq9xiqS62XYFAI7i4FZ5OIx%2BqJrEYfcyyYy%2BpypLespox5RU%2Bi2w4Bn1EkDmCTotMcGPWfJymjaaxWcm3H7y2Y7M%2BJm0ll%2Beny7CVuAG9HvJDMKNZ1f%2Fi3FdrjMOSU7eO0vIfpE&X-Amz-Signature=863ff91cd7d250579ec1dc1efaf8daf668347f361b3951cd368ffd22d87f5dec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKO64AAQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDdvs6XfOBpZZ%2BLX8bEghelOG3udqOU8UoZ6mz1CNjLigIgCMshj%2Bno0RTPKOEcVYyKNzV0z2rt5eAacrTWtJJQ82Uq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIJ7AerxRyU8WsAQNCrcA5Sj6rtQYqEG3s8bUFz98le0neEmsFI1YJ%2BGc249YFiMb1C%2FNZaeOYNtTS2C5Eb7B0w9UA5Yi7eLPHllLGEsGzVCxVOvbh9HxrQDqPseS9s6Ig96JoVlTovxDieHTFc9EWcxuykWPvHyr86uJ4Ef1MbStXni%2BwDU26IsdiQYYr5Y5OVAKGStagNkx9F4d3qHoAnPkXjBOIQS0Zi1k8pFi2otnFg%2F1oHodQuZXU6fvqO%2BS4aJKwWb%2BTAoHaAVSxJgNDoUbeRa9goBqoj%2BfnCx4gry0Dt%2F0avE39R5rCKOdIraGfrBZouMiaqqdjCufI9FkuOPotrlPMxXNfQTs%2Bh19sBLTzznX4wG%2BeP3b9j9fkBGZxYUKPa9zbx44YusZsiEo%2Bjuta4gSOsBe2jnEpdiKO1CJWi2q7%2FCxje5R8ECaA4Z%2B3aUtuErzRjL%2B8VuH1LiZyIryeiyZCHZ8b91MaoujV%2F6%2BsdM6%2Fr%2B%2FvIPaoMYM6%2B58Al%2F8G8I9Blq7IjWK%2FS8IGhnfr4VZb1n65an%2FI1TN96DyYspg5skjZ5e7r6bKkoMXdMVXL8ZTD8fWRLIuaLRJc9CMtZjP1amUTOTNi1sUXDElO9zOz%2BmR6QGqXeYW%2FRAbv0Ro8jk%2Fq44uDS8MPL6ksQGOqUBwjHPr3oq1PrTrI6r02WGpUpdkQ6dFbDY28TQyqLxcKfAvMff7nz8qSfxiqFyitlI2nTRmrv6FYMtapB9VlDGuvq9xiqS62XYFAI7i4FZ5OIx%2BqJrEYfcyyYy%2BpypLespox5RU%2Bi2w4Bn1EkDmCTotMcGPWfJymjaaxWcm3H7y2Y7M%2BJm0ll%2Beny7CVuAG9HvJDMKNZ1f%2Fi3FdrjMOSU7eO0vIfpE&X-Amz-Signature=179f192a8c2a3cff2e8513af9c462736468b06c38cca5d1c60509c234ca36d52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKO64AAQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDdvs6XfOBpZZ%2BLX8bEghelOG3udqOU8UoZ6mz1CNjLigIgCMshj%2Bno0RTPKOEcVYyKNzV0z2rt5eAacrTWtJJQ82Uq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIJ7AerxRyU8WsAQNCrcA5Sj6rtQYqEG3s8bUFz98le0neEmsFI1YJ%2BGc249YFiMb1C%2FNZaeOYNtTS2C5Eb7B0w9UA5Yi7eLPHllLGEsGzVCxVOvbh9HxrQDqPseS9s6Ig96JoVlTovxDieHTFc9EWcxuykWPvHyr86uJ4Ef1MbStXni%2BwDU26IsdiQYYr5Y5OVAKGStagNkx9F4d3qHoAnPkXjBOIQS0Zi1k8pFi2otnFg%2F1oHodQuZXU6fvqO%2BS4aJKwWb%2BTAoHaAVSxJgNDoUbeRa9goBqoj%2BfnCx4gry0Dt%2F0avE39R5rCKOdIraGfrBZouMiaqqdjCufI9FkuOPotrlPMxXNfQTs%2Bh19sBLTzznX4wG%2BeP3b9j9fkBGZxYUKPa9zbx44YusZsiEo%2Bjuta4gSOsBe2jnEpdiKO1CJWi2q7%2FCxje5R8ECaA4Z%2B3aUtuErzRjL%2B8VuH1LiZyIryeiyZCHZ8b91MaoujV%2F6%2BsdM6%2Fr%2B%2FvIPaoMYM6%2B58Al%2F8G8I9Blq7IjWK%2FS8IGhnfr4VZb1n65an%2FI1TN96DyYspg5skjZ5e7r6bKkoMXdMVXL8ZTD8fWRLIuaLRJc9CMtZjP1amUTOTNi1sUXDElO9zOz%2BmR6QGqXeYW%2FRAbv0Ro8jk%2Fq44uDS8MPL6ksQGOqUBwjHPr3oq1PrTrI6r02WGpUpdkQ6dFbDY28TQyqLxcKfAvMff7nz8qSfxiqFyitlI2nTRmrv6FYMtapB9VlDGuvq9xiqS62XYFAI7i4FZ5OIx%2BqJrEYfcyyYy%2BpypLespox5RU%2Bi2w4Bn1EkDmCTotMcGPWfJymjaaxWcm3H7y2Y7M%2BJm0ll%2Beny7CVuAG9HvJDMKNZ1f%2Fi3FdrjMOSU7eO0vIfpE&X-Amz-Signature=0ea9d16cec021dd1c08b1161881b5cea4c67850798819a294e1720a7bcc60e9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKO64AAQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDdvs6XfOBpZZ%2BLX8bEghelOG3udqOU8UoZ6mz1CNjLigIgCMshj%2Bno0RTPKOEcVYyKNzV0z2rt5eAacrTWtJJQ82Uq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIJ7AerxRyU8WsAQNCrcA5Sj6rtQYqEG3s8bUFz98le0neEmsFI1YJ%2BGc249YFiMb1C%2FNZaeOYNtTS2C5Eb7B0w9UA5Yi7eLPHllLGEsGzVCxVOvbh9HxrQDqPseS9s6Ig96JoVlTovxDieHTFc9EWcxuykWPvHyr86uJ4Ef1MbStXni%2BwDU26IsdiQYYr5Y5OVAKGStagNkx9F4d3qHoAnPkXjBOIQS0Zi1k8pFi2otnFg%2F1oHodQuZXU6fvqO%2BS4aJKwWb%2BTAoHaAVSxJgNDoUbeRa9goBqoj%2BfnCx4gry0Dt%2F0avE39R5rCKOdIraGfrBZouMiaqqdjCufI9FkuOPotrlPMxXNfQTs%2Bh19sBLTzznX4wG%2BeP3b9j9fkBGZxYUKPa9zbx44YusZsiEo%2Bjuta4gSOsBe2jnEpdiKO1CJWi2q7%2FCxje5R8ECaA4Z%2B3aUtuErzRjL%2B8VuH1LiZyIryeiyZCHZ8b91MaoujV%2F6%2BsdM6%2Fr%2B%2FvIPaoMYM6%2B58Al%2F8G8I9Blq7IjWK%2FS8IGhnfr4VZb1n65an%2FI1TN96DyYspg5skjZ5e7r6bKkoMXdMVXL8ZTD8fWRLIuaLRJc9CMtZjP1amUTOTNi1sUXDElO9zOz%2BmR6QGqXeYW%2FRAbv0Ro8jk%2Fq44uDS8MPL6ksQGOqUBwjHPr3oq1PrTrI6r02WGpUpdkQ6dFbDY28TQyqLxcKfAvMff7nz8qSfxiqFyitlI2nTRmrv6FYMtapB9VlDGuvq9xiqS62XYFAI7i4FZ5OIx%2BqJrEYfcyyYy%2BpypLespox5RU%2Bi2w4Bn1EkDmCTotMcGPWfJymjaaxWcm3H7y2Y7M%2BJm0ll%2Beny7CVuAG9HvJDMKNZ1f%2Fi3FdrjMOSU7eO0vIfpE&X-Amz-Signature=e4328203075a1d1b482de3760ac59d27387902923a2b9087eacfe9762e3ea2ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKO64AAQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDdvs6XfOBpZZ%2BLX8bEghelOG3udqOU8UoZ6mz1CNjLigIgCMshj%2Bno0RTPKOEcVYyKNzV0z2rt5eAacrTWtJJQ82Uq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIJ7AerxRyU8WsAQNCrcA5Sj6rtQYqEG3s8bUFz98le0neEmsFI1YJ%2BGc249YFiMb1C%2FNZaeOYNtTS2C5Eb7B0w9UA5Yi7eLPHllLGEsGzVCxVOvbh9HxrQDqPseS9s6Ig96JoVlTovxDieHTFc9EWcxuykWPvHyr86uJ4Ef1MbStXni%2BwDU26IsdiQYYr5Y5OVAKGStagNkx9F4d3qHoAnPkXjBOIQS0Zi1k8pFi2otnFg%2F1oHodQuZXU6fvqO%2BS4aJKwWb%2BTAoHaAVSxJgNDoUbeRa9goBqoj%2BfnCx4gry0Dt%2F0avE39R5rCKOdIraGfrBZouMiaqqdjCufI9FkuOPotrlPMxXNfQTs%2Bh19sBLTzznX4wG%2BeP3b9j9fkBGZxYUKPa9zbx44YusZsiEo%2Bjuta4gSOsBe2jnEpdiKO1CJWi2q7%2FCxje5R8ECaA4Z%2B3aUtuErzRjL%2B8VuH1LiZyIryeiyZCHZ8b91MaoujV%2F6%2BsdM6%2Fr%2B%2FvIPaoMYM6%2B58Al%2F8G8I9Blq7IjWK%2FS8IGhnfr4VZb1n65an%2FI1TN96DyYspg5skjZ5e7r6bKkoMXdMVXL8ZTD8fWRLIuaLRJc9CMtZjP1amUTOTNi1sUXDElO9zOz%2BmR6QGqXeYW%2FRAbv0Ro8jk%2Fq44uDS8MPL6ksQGOqUBwjHPr3oq1PrTrI6r02WGpUpdkQ6dFbDY28TQyqLxcKfAvMff7nz8qSfxiqFyitlI2nTRmrv6FYMtapB9VlDGuvq9xiqS62XYFAI7i4FZ5OIx%2BqJrEYfcyyYy%2BpypLespox5RU%2Bi2w4Bn1EkDmCTotMcGPWfJymjaaxWcm3H7y2Y7M%2BJm0ll%2Beny7CVuAG9HvJDMKNZ1f%2Fi3FdrjMOSU7eO0vIfpE&X-Amz-Signature=411b28b53f8da54a8c3812ca7bc41f00045241c1e8710e04396534b1ae3c7fcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKO64AAQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDdvs6XfOBpZZ%2BLX8bEghelOG3udqOU8UoZ6mz1CNjLigIgCMshj%2Bno0RTPKOEcVYyKNzV0z2rt5eAacrTWtJJQ82Uq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDIJ7AerxRyU8WsAQNCrcA5Sj6rtQYqEG3s8bUFz98le0neEmsFI1YJ%2BGc249YFiMb1C%2FNZaeOYNtTS2C5Eb7B0w9UA5Yi7eLPHllLGEsGzVCxVOvbh9HxrQDqPseS9s6Ig96JoVlTovxDieHTFc9EWcxuykWPvHyr86uJ4Ef1MbStXni%2BwDU26IsdiQYYr5Y5OVAKGStagNkx9F4d3qHoAnPkXjBOIQS0Zi1k8pFi2otnFg%2F1oHodQuZXU6fvqO%2BS4aJKwWb%2BTAoHaAVSxJgNDoUbeRa9goBqoj%2BfnCx4gry0Dt%2F0avE39R5rCKOdIraGfrBZouMiaqqdjCufI9FkuOPotrlPMxXNfQTs%2Bh19sBLTzznX4wG%2BeP3b9j9fkBGZxYUKPa9zbx44YusZsiEo%2Bjuta4gSOsBe2jnEpdiKO1CJWi2q7%2FCxje5R8ECaA4Z%2B3aUtuErzRjL%2B8VuH1LiZyIryeiyZCHZ8b91MaoujV%2F6%2BsdM6%2Fr%2B%2FvIPaoMYM6%2B58Al%2F8G8I9Blq7IjWK%2FS8IGhnfr4VZb1n65an%2FI1TN96DyYspg5skjZ5e7r6bKkoMXdMVXL8ZTD8fWRLIuaLRJc9CMtZjP1amUTOTNi1sUXDElO9zOz%2BmR6QGqXeYW%2FRAbv0Ro8jk%2Fq44uDS8MPL6ksQGOqUBwjHPr3oq1PrTrI6r02WGpUpdkQ6dFbDY28TQyqLxcKfAvMff7nz8qSfxiqFyitlI2nTRmrv6FYMtapB9VlDGuvq9xiqS62XYFAI7i4FZ5OIx%2BqJrEYfcyyYy%2BpypLespox5RU%2Bi2w4Bn1EkDmCTotMcGPWfJymjaaxWcm3H7y2Y7M%2BJm0ll%2Beny7CVuAG9HvJDMKNZ1f%2Fi3FdrjMOSU7eO0vIfpE&X-Amz-Signature=50b78929d1b5d7e0012b6b99fb6de2bdbace0fe108917494efdf54c26298e8e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
