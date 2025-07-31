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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LI47MGH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDArq0BUaUj6lOwoHfjS0pzxxyn7mfEFz%2B6wb1OWz%2BN7wIgD%2B%2FzRPT3ktUuroZvtWy%2Blrt%2BCAzvi12AovB6MhIzVLgqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLet1t83bEXXBIYKyrcA%2Br5vxuRXk9T0hZHlAt6RglXsJV1CR%2BM0MRmdtQpWS0Bqyi2YQ5LV9IVDqQO9P8DkiWtfBG1WTgdfeZ8j4tlih37sjZFq82HM0G9FnoLKac2t6VtTRnBV%2FZ9fhJb4do8TeRXn1FtUcy2mjg0XEpRw8vVqM450H7g5SjQI4RGmGF76kIaGhmsuo3uHxVkiuOfWgbvO71Ti0WIt%2B50WVH6ML6Q64bPMZhN5HcKVAIkUpWNk79fhEwbOa3BQuvJ7F3r9fltxuh50%2FxydAhdRo0Tx3s1shtuD%2F3UdUOFWuNnoaLlJCUfJ7okq5k8jFGu9%2FvsU5gFqkifnseqtUue7B41QCq2GaXjMrLYCPrbPGsdMVfRLhKovFoyrsZj34J6Wfm4R4Kzu3HRqVQoXP%2F9%2FzvJWhduj0mAoroIkz0LyCdgUH0U54v1Uo4I%2BSerxgiGEzTVLk7Tw3kKmcdz8%2FUtWe6nMyQzV4mU1224AM52HVPSG46EkDpTvS4aDBs5uYNn5XYuLSEb0tLT7p9gKz9TmsIazPAkHZGZpsOuM3mBEDKbKWZry5OOuujsiAYQA1Zn6WZaqCRQEGbKZCst7PZrKuBND85InckGubudEcaikNQDJkW0HgxN6ys5ANNtfV%2F3MLLKq8QGOqUB2j8Q%2FqVtugSVHCM52dye4ll4iCNC76IAm%2FuS2VILQGEqNMirE1rJ%2B72hRVOcsP0xF4Db3URrrIB94dB8%2B77zUJkRaz%2Bfa9bNj3JL5Qb8c6SzPi6m01dlQNa9YsJfqtgBn77beflKmejyRqsL4KHfCxGWx4Ro9xl7yz6zYq4Qe%2BpTeN%2BLxNXs2St9SeO3hQZPvTSDaMGiAPCwSo85B2%2BXDXaed1U%2B&X-Amz-Signature=d39e5a7f4c770ddbb5a23cde6ab8a064dd64a68f993172a18d2ef2980c5e15ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LI47MGH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDArq0BUaUj6lOwoHfjS0pzxxyn7mfEFz%2B6wb1OWz%2BN7wIgD%2B%2FzRPT3ktUuroZvtWy%2Blrt%2BCAzvi12AovB6MhIzVLgqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLet1t83bEXXBIYKyrcA%2Br5vxuRXk9T0hZHlAt6RglXsJV1CR%2BM0MRmdtQpWS0Bqyi2YQ5LV9IVDqQO9P8DkiWtfBG1WTgdfeZ8j4tlih37sjZFq82HM0G9FnoLKac2t6VtTRnBV%2FZ9fhJb4do8TeRXn1FtUcy2mjg0XEpRw8vVqM450H7g5SjQI4RGmGF76kIaGhmsuo3uHxVkiuOfWgbvO71Ti0WIt%2B50WVH6ML6Q64bPMZhN5HcKVAIkUpWNk79fhEwbOa3BQuvJ7F3r9fltxuh50%2FxydAhdRo0Tx3s1shtuD%2F3UdUOFWuNnoaLlJCUfJ7okq5k8jFGu9%2FvsU5gFqkifnseqtUue7B41QCq2GaXjMrLYCPrbPGsdMVfRLhKovFoyrsZj34J6Wfm4R4Kzu3HRqVQoXP%2F9%2FzvJWhduj0mAoroIkz0LyCdgUH0U54v1Uo4I%2BSerxgiGEzTVLk7Tw3kKmcdz8%2FUtWe6nMyQzV4mU1224AM52HVPSG46EkDpTvS4aDBs5uYNn5XYuLSEb0tLT7p9gKz9TmsIazPAkHZGZpsOuM3mBEDKbKWZry5OOuujsiAYQA1Zn6WZaqCRQEGbKZCst7PZrKuBND85InckGubudEcaikNQDJkW0HgxN6ys5ANNtfV%2F3MLLKq8QGOqUB2j8Q%2FqVtugSVHCM52dye4ll4iCNC76IAm%2FuS2VILQGEqNMirE1rJ%2B72hRVOcsP0xF4Db3URrrIB94dB8%2B77zUJkRaz%2Bfa9bNj3JL5Qb8c6SzPi6m01dlQNa9YsJfqtgBn77beflKmejyRqsL4KHfCxGWx4Ro9xl7yz6zYq4Qe%2BpTeN%2BLxNXs2St9SeO3hQZPvTSDaMGiAPCwSo85B2%2BXDXaed1U%2B&X-Amz-Signature=0a82c61023ed4f0b60208efd76145a4f1474d666d10e7bc8939819ea67b87ddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LI47MGH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDArq0BUaUj6lOwoHfjS0pzxxyn7mfEFz%2B6wb1OWz%2BN7wIgD%2B%2FzRPT3ktUuroZvtWy%2Blrt%2BCAzvi12AovB6MhIzVLgqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLet1t83bEXXBIYKyrcA%2Br5vxuRXk9T0hZHlAt6RglXsJV1CR%2BM0MRmdtQpWS0Bqyi2YQ5LV9IVDqQO9P8DkiWtfBG1WTgdfeZ8j4tlih37sjZFq82HM0G9FnoLKac2t6VtTRnBV%2FZ9fhJb4do8TeRXn1FtUcy2mjg0XEpRw8vVqM450H7g5SjQI4RGmGF76kIaGhmsuo3uHxVkiuOfWgbvO71Ti0WIt%2B50WVH6ML6Q64bPMZhN5HcKVAIkUpWNk79fhEwbOa3BQuvJ7F3r9fltxuh50%2FxydAhdRo0Tx3s1shtuD%2F3UdUOFWuNnoaLlJCUfJ7okq5k8jFGu9%2FvsU5gFqkifnseqtUue7B41QCq2GaXjMrLYCPrbPGsdMVfRLhKovFoyrsZj34J6Wfm4R4Kzu3HRqVQoXP%2F9%2FzvJWhduj0mAoroIkz0LyCdgUH0U54v1Uo4I%2BSerxgiGEzTVLk7Tw3kKmcdz8%2FUtWe6nMyQzV4mU1224AM52HVPSG46EkDpTvS4aDBs5uYNn5XYuLSEb0tLT7p9gKz9TmsIazPAkHZGZpsOuM3mBEDKbKWZry5OOuujsiAYQA1Zn6WZaqCRQEGbKZCst7PZrKuBND85InckGubudEcaikNQDJkW0HgxN6ys5ANNtfV%2F3MLLKq8QGOqUB2j8Q%2FqVtugSVHCM52dye4ll4iCNC76IAm%2FuS2VILQGEqNMirE1rJ%2B72hRVOcsP0xF4Db3URrrIB94dB8%2B77zUJkRaz%2Bfa9bNj3JL5Qb8c6SzPi6m01dlQNa9YsJfqtgBn77beflKmejyRqsL4KHfCxGWx4Ro9xl7yz6zYq4Qe%2BpTeN%2BLxNXs2St9SeO3hQZPvTSDaMGiAPCwSo85B2%2BXDXaed1U%2B&X-Amz-Signature=3a84bd9e90f2cf83b552c7e5b58125a6c20c9aff195641268d3d677e80f1a294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LI47MGH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDArq0BUaUj6lOwoHfjS0pzxxyn7mfEFz%2B6wb1OWz%2BN7wIgD%2B%2FzRPT3ktUuroZvtWy%2Blrt%2BCAzvi12AovB6MhIzVLgqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLet1t83bEXXBIYKyrcA%2Br5vxuRXk9T0hZHlAt6RglXsJV1CR%2BM0MRmdtQpWS0Bqyi2YQ5LV9IVDqQO9P8DkiWtfBG1WTgdfeZ8j4tlih37sjZFq82HM0G9FnoLKac2t6VtTRnBV%2FZ9fhJb4do8TeRXn1FtUcy2mjg0XEpRw8vVqM450H7g5SjQI4RGmGF76kIaGhmsuo3uHxVkiuOfWgbvO71Ti0WIt%2B50WVH6ML6Q64bPMZhN5HcKVAIkUpWNk79fhEwbOa3BQuvJ7F3r9fltxuh50%2FxydAhdRo0Tx3s1shtuD%2F3UdUOFWuNnoaLlJCUfJ7okq5k8jFGu9%2FvsU5gFqkifnseqtUue7B41QCq2GaXjMrLYCPrbPGsdMVfRLhKovFoyrsZj34J6Wfm4R4Kzu3HRqVQoXP%2F9%2FzvJWhduj0mAoroIkz0LyCdgUH0U54v1Uo4I%2BSerxgiGEzTVLk7Tw3kKmcdz8%2FUtWe6nMyQzV4mU1224AM52HVPSG46EkDpTvS4aDBs5uYNn5XYuLSEb0tLT7p9gKz9TmsIazPAkHZGZpsOuM3mBEDKbKWZry5OOuujsiAYQA1Zn6WZaqCRQEGbKZCst7PZrKuBND85InckGubudEcaikNQDJkW0HgxN6ys5ANNtfV%2F3MLLKq8QGOqUB2j8Q%2FqVtugSVHCM52dye4ll4iCNC76IAm%2FuS2VILQGEqNMirE1rJ%2B72hRVOcsP0xF4Db3URrrIB94dB8%2B77zUJkRaz%2Bfa9bNj3JL5Qb8c6SzPi6m01dlQNa9YsJfqtgBn77beflKmejyRqsL4KHfCxGWx4Ro9xl7yz6zYq4Qe%2BpTeN%2BLxNXs2St9SeO3hQZPvTSDaMGiAPCwSo85B2%2BXDXaed1U%2B&X-Amz-Signature=b8785cce49ac9fb14d008a57564e2afe3ece72887eecad6645352c616da702d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LI47MGH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDArq0BUaUj6lOwoHfjS0pzxxyn7mfEFz%2B6wb1OWz%2BN7wIgD%2B%2FzRPT3ktUuroZvtWy%2Blrt%2BCAzvi12AovB6MhIzVLgqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLet1t83bEXXBIYKyrcA%2Br5vxuRXk9T0hZHlAt6RglXsJV1CR%2BM0MRmdtQpWS0Bqyi2YQ5LV9IVDqQO9P8DkiWtfBG1WTgdfeZ8j4tlih37sjZFq82HM0G9FnoLKac2t6VtTRnBV%2FZ9fhJb4do8TeRXn1FtUcy2mjg0XEpRw8vVqM450H7g5SjQI4RGmGF76kIaGhmsuo3uHxVkiuOfWgbvO71Ti0WIt%2B50WVH6ML6Q64bPMZhN5HcKVAIkUpWNk79fhEwbOa3BQuvJ7F3r9fltxuh50%2FxydAhdRo0Tx3s1shtuD%2F3UdUOFWuNnoaLlJCUfJ7okq5k8jFGu9%2FvsU5gFqkifnseqtUue7B41QCq2GaXjMrLYCPrbPGsdMVfRLhKovFoyrsZj34J6Wfm4R4Kzu3HRqVQoXP%2F9%2FzvJWhduj0mAoroIkz0LyCdgUH0U54v1Uo4I%2BSerxgiGEzTVLk7Tw3kKmcdz8%2FUtWe6nMyQzV4mU1224AM52HVPSG46EkDpTvS4aDBs5uYNn5XYuLSEb0tLT7p9gKz9TmsIazPAkHZGZpsOuM3mBEDKbKWZry5OOuujsiAYQA1Zn6WZaqCRQEGbKZCst7PZrKuBND85InckGubudEcaikNQDJkW0HgxN6ys5ANNtfV%2F3MLLKq8QGOqUB2j8Q%2FqVtugSVHCM52dye4ll4iCNC76IAm%2FuS2VILQGEqNMirE1rJ%2B72hRVOcsP0xF4Db3URrrIB94dB8%2B77zUJkRaz%2Bfa9bNj3JL5Qb8c6SzPi6m01dlQNa9YsJfqtgBn77beflKmejyRqsL4KHfCxGWx4Ro9xl7yz6zYq4Qe%2BpTeN%2BLxNXs2St9SeO3hQZPvTSDaMGiAPCwSo85B2%2BXDXaed1U%2B&X-Amz-Signature=ccefcbeabe5ad8d15eb3ff8964dc68f691df0ea02e58e931f45c3d86fa26e397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LI47MGH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDArq0BUaUj6lOwoHfjS0pzxxyn7mfEFz%2B6wb1OWz%2BN7wIgD%2B%2FzRPT3ktUuroZvtWy%2Blrt%2BCAzvi12AovB6MhIzVLgqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLet1t83bEXXBIYKyrcA%2Br5vxuRXk9T0hZHlAt6RglXsJV1CR%2BM0MRmdtQpWS0Bqyi2YQ5LV9IVDqQO9P8DkiWtfBG1WTgdfeZ8j4tlih37sjZFq82HM0G9FnoLKac2t6VtTRnBV%2FZ9fhJb4do8TeRXn1FtUcy2mjg0XEpRw8vVqM450H7g5SjQI4RGmGF76kIaGhmsuo3uHxVkiuOfWgbvO71Ti0WIt%2B50WVH6ML6Q64bPMZhN5HcKVAIkUpWNk79fhEwbOa3BQuvJ7F3r9fltxuh50%2FxydAhdRo0Tx3s1shtuD%2F3UdUOFWuNnoaLlJCUfJ7okq5k8jFGu9%2FvsU5gFqkifnseqtUue7B41QCq2GaXjMrLYCPrbPGsdMVfRLhKovFoyrsZj34J6Wfm4R4Kzu3HRqVQoXP%2F9%2FzvJWhduj0mAoroIkz0LyCdgUH0U54v1Uo4I%2BSerxgiGEzTVLk7Tw3kKmcdz8%2FUtWe6nMyQzV4mU1224AM52HVPSG46EkDpTvS4aDBs5uYNn5XYuLSEb0tLT7p9gKz9TmsIazPAkHZGZpsOuM3mBEDKbKWZry5OOuujsiAYQA1Zn6WZaqCRQEGbKZCst7PZrKuBND85InckGubudEcaikNQDJkW0HgxN6ys5ANNtfV%2F3MLLKq8QGOqUB2j8Q%2FqVtugSVHCM52dye4ll4iCNC76IAm%2FuS2VILQGEqNMirE1rJ%2B72hRVOcsP0xF4Db3URrrIB94dB8%2B77zUJkRaz%2Bfa9bNj3JL5Qb8c6SzPi6m01dlQNa9YsJfqtgBn77beflKmejyRqsL4KHfCxGWx4Ro9xl7yz6zYq4Qe%2BpTeN%2BLxNXs2St9SeO3hQZPvTSDaMGiAPCwSo85B2%2BXDXaed1U%2B&X-Amz-Signature=64bc44218ea7003823e973951db6a2238836b1d481b091f827c4e87ba1434aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LI47MGH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDArq0BUaUj6lOwoHfjS0pzxxyn7mfEFz%2B6wb1OWz%2BN7wIgD%2B%2FzRPT3ktUuroZvtWy%2Blrt%2BCAzvi12AovB6MhIzVLgqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLet1t83bEXXBIYKyrcA%2Br5vxuRXk9T0hZHlAt6RglXsJV1CR%2BM0MRmdtQpWS0Bqyi2YQ5LV9IVDqQO9P8DkiWtfBG1WTgdfeZ8j4tlih37sjZFq82HM0G9FnoLKac2t6VtTRnBV%2FZ9fhJb4do8TeRXn1FtUcy2mjg0XEpRw8vVqM450H7g5SjQI4RGmGF76kIaGhmsuo3uHxVkiuOfWgbvO71Ti0WIt%2B50WVH6ML6Q64bPMZhN5HcKVAIkUpWNk79fhEwbOa3BQuvJ7F3r9fltxuh50%2FxydAhdRo0Tx3s1shtuD%2F3UdUOFWuNnoaLlJCUfJ7okq5k8jFGu9%2FvsU5gFqkifnseqtUue7B41QCq2GaXjMrLYCPrbPGsdMVfRLhKovFoyrsZj34J6Wfm4R4Kzu3HRqVQoXP%2F9%2FzvJWhduj0mAoroIkz0LyCdgUH0U54v1Uo4I%2BSerxgiGEzTVLk7Tw3kKmcdz8%2FUtWe6nMyQzV4mU1224AM52HVPSG46EkDpTvS4aDBs5uYNn5XYuLSEb0tLT7p9gKz9TmsIazPAkHZGZpsOuM3mBEDKbKWZry5OOuujsiAYQA1Zn6WZaqCRQEGbKZCst7PZrKuBND85InckGubudEcaikNQDJkW0HgxN6ys5ANNtfV%2F3MLLKq8QGOqUB2j8Q%2FqVtugSVHCM52dye4ll4iCNC76IAm%2FuS2VILQGEqNMirE1rJ%2B72hRVOcsP0xF4Db3URrrIB94dB8%2B77zUJkRaz%2Bfa9bNj3JL5Qb8c6SzPi6m01dlQNa9YsJfqtgBn77beflKmejyRqsL4KHfCxGWx4Ro9xl7yz6zYq4Qe%2BpTeN%2BLxNXs2St9SeO3hQZPvTSDaMGiAPCwSo85B2%2BXDXaed1U%2B&X-Amz-Signature=db61806887366bc49366ae10f27467a126d50ed2b2a7e6a2ed8caa026f14b22b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LI47MGH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDArq0BUaUj6lOwoHfjS0pzxxyn7mfEFz%2B6wb1OWz%2BN7wIgD%2B%2FzRPT3ktUuroZvtWy%2Blrt%2BCAzvi12AovB6MhIzVLgqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLet1t83bEXXBIYKyrcA%2Br5vxuRXk9T0hZHlAt6RglXsJV1CR%2BM0MRmdtQpWS0Bqyi2YQ5LV9IVDqQO9P8DkiWtfBG1WTgdfeZ8j4tlih37sjZFq82HM0G9FnoLKac2t6VtTRnBV%2FZ9fhJb4do8TeRXn1FtUcy2mjg0XEpRw8vVqM450H7g5SjQI4RGmGF76kIaGhmsuo3uHxVkiuOfWgbvO71Ti0WIt%2B50WVH6ML6Q64bPMZhN5HcKVAIkUpWNk79fhEwbOa3BQuvJ7F3r9fltxuh50%2FxydAhdRo0Tx3s1shtuD%2F3UdUOFWuNnoaLlJCUfJ7okq5k8jFGu9%2FvsU5gFqkifnseqtUue7B41QCq2GaXjMrLYCPrbPGsdMVfRLhKovFoyrsZj34J6Wfm4R4Kzu3HRqVQoXP%2F9%2FzvJWhduj0mAoroIkz0LyCdgUH0U54v1Uo4I%2BSerxgiGEzTVLk7Tw3kKmcdz8%2FUtWe6nMyQzV4mU1224AM52HVPSG46EkDpTvS4aDBs5uYNn5XYuLSEb0tLT7p9gKz9TmsIazPAkHZGZpsOuM3mBEDKbKWZry5OOuujsiAYQA1Zn6WZaqCRQEGbKZCst7PZrKuBND85InckGubudEcaikNQDJkW0HgxN6ys5ANNtfV%2F3MLLKq8QGOqUB2j8Q%2FqVtugSVHCM52dye4ll4iCNC76IAm%2FuS2VILQGEqNMirE1rJ%2B72hRVOcsP0xF4Db3URrrIB94dB8%2B77zUJkRaz%2Bfa9bNj3JL5Qb8c6SzPi6m01dlQNa9YsJfqtgBn77beflKmejyRqsL4KHfCxGWx4Ro9xl7yz6zYq4Qe%2BpTeN%2BLxNXs2St9SeO3hQZPvTSDaMGiAPCwSo85B2%2BXDXaed1U%2B&X-Amz-Signature=3e7d448e6b4085ff64cd0330a53926395a394536526cfebf3ad5e81430bceb33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LI47MGH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDArq0BUaUj6lOwoHfjS0pzxxyn7mfEFz%2B6wb1OWz%2BN7wIgD%2B%2FzRPT3ktUuroZvtWy%2Blrt%2BCAzvi12AovB6MhIzVLgqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLet1t83bEXXBIYKyrcA%2Br5vxuRXk9T0hZHlAt6RglXsJV1CR%2BM0MRmdtQpWS0Bqyi2YQ5LV9IVDqQO9P8DkiWtfBG1WTgdfeZ8j4tlih37sjZFq82HM0G9FnoLKac2t6VtTRnBV%2FZ9fhJb4do8TeRXn1FtUcy2mjg0XEpRw8vVqM450H7g5SjQI4RGmGF76kIaGhmsuo3uHxVkiuOfWgbvO71Ti0WIt%2B50WVH6ML6Q64bPMZhN5HcKVAIkUpWNk79fhEwbOa3BQuvJ7F3r9fltxuh50%2FxydAhdRo0Tx3s1shtuD%2F3UdUOFWuNnoaLlJCUfJ7okq5k8jFGu9%2FvsU5gFqkifnseqtUue7B41QCq2GaXjMrLYCPrbPGsdMVfRLhKovFoyrsZj34J6Wfm4R4Kzu3HRqVQoXP%2F9%2FzvJWhduj0mAoroIkz0LyCdgUH0U54v1Uo4I%2BSerxgiGEzTVLk7Tw3kKmcdz8%2FUtWe6nMyQzV4mU1224AM52HVPSG46EkDpTvS4aDBs5uYNn5XYuLSEb0tLT7p9gKz9TmsIazPAkHZGZpsOuM3mBEDKbKWZry5OOuujsiAYQA1Zn6WZaqCRQEGbKZCst7PZrKuBND85InckGubudEcaikNQDJkW0HgxN6ys5ANNtfV%2F3MLLKq8QGOqUB2j8Q%2FqVtugSVHCM52dye4ll4iCNC76IAm%2FuS2VILQGEqNMirE1rJ%2B72hRVOcsP0xF4Db3URrrIB94dB8%2B77zUJkRaz%2Bfa9bNj3JL5Qb8c6SzPi6m01dlQNa9YsJfqtgBn77beflKmejyRqsL4KHfCxGWx4Ro9xl7yz6zYq4Qe%2BpTeN%2BLxNXs2St9SeO3hQZPvTSDaMGiAPCwSo85B2%2BXDXaed1U%2B&X-Amz-Signature=76f3562263a16e0074415ac9b05155c136e25e62d60cda7ff1104d752ede41d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LI47MGH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDArq0BUaUj6lOwoHfjS0pzxxyn7mfEFz%2B6wb1OWz%2BN7wIgD%2B%2FzRPT3ktUuroZvtWy%2Blrt%2BCAzvi12AovB6MhIzVLgqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLet1t83bEXXBIYKyrcA%2Br5vxuRXk9T0hZHlAt6RglXsJV1CR%2BM0MRmdtQpWS0Bqyi2YQ5LV9IVDqQO9P8DkiWtfBG1WTgdfeZ8j4tlih37sjZFq82HM0G9FnoLKac2t6VtTRnBV%2FZ9fhJb4do8TeRXn1FtUcy2mjg0XEpRw8vVqM450H7g5SjQI4RGmGF76kIaGhmsuo3uHxVkiuOfWgbvO71Ti0WIt%2B50WVH6ML6Q64bPMZhN5HcKVAIkUpWNk79fhEwbOa3BQuvJ7F3r9fltxuh50%2FxydAhdRo0Tx3s1shtuD%2F3UdUOFWuNnoaLlJCUfJ7okq5k8jFGu9%2FvsU5gFqkifnseqtUue7B41QCq2GaXjMrLYCPrbPGsdMVfRLhKovFoyrsZj34J6Wfm4R4Kzu3HRqVQoXP%2F9%2FzvJWhduj0mAoroIkz0LyCdgUH0U54v1Uo4I%2BSerxgiGEzTVLk7Tw3kKmcdz8%2FUtWe6nMyQzV4mU1224AM52HVPSG46EkDpTvS4aDBs5uYNn5XYuLSEb0tLT7p9gKz9TmsIazPAkHZGZpsOuM3mBEDKbKWZry5OOuujsiAYQA1Zn6WZaqCRQEGbKZCst7PZrKuBND85InckGubudEcaikNQDJkW0HgxN6ys5ANNtfV%2F3MLLKq8QGOqUB2j8Q%2FqVtugSVHCM52dye4ll4iCNC76IAm%2FuS2VILQGEqNMirE1rJ%2B72hRVOcsP0xF4Db3URrrIB94dB8%2B77zUJkRaz%2Bfa9bNj3JL5Qb8c6SzPi6m01dlQNa9YsJfqtgBn77beflKmejyRqsL4KHfCxGWx4Ro9xl7yz6zYq4Qe%2BpTeN%2BLxNXs2St9SeO3hQZPvTSDaMGiAPCwSo85B2%2BXDXaed1U%2B&X-Amz-Signature=c2f4fe2481f27f0c75663593d6b44cd196bbf588001446af0807cc9ebf288034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LI47MGH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDArq0BUaUj6lOwoHfjS0pzxxyn7mfEFz%2B6wb1OWz%2BN7wIgD%2B%2FzRPT3ktUuroZvtWy%2Blrt%2BCAzvi12AovB6MhIzVLgqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLet1t83bEXXBIYKyrcA%2Br5vxuRXk9T0hZHlAt6RglXsJV1CR%2BM0MRmdtQpWS0Bqyi2YQ5LV9IVDqQO9P8DkiWtfBG1WTgdfeZ8j4tlih37sjZFq82HM0G9FnoLKac2t6VtTRnBV%2FZ9fhJb4do8TeRXn1FtUcy2mjg0XEpRw8vVqM450H7g5SjQI4RGmGF76kIaGhmsuo3uHxVkiuOfWgbvO71Ti0WIt%2B50WVH6ML6Q64bPMZhN5HcKVAIkUpWNk79fhEwbOa3BQuvJ7F3r9fltxuh50%2FxydAhdRo0Tx3s1shtuD%2F3UdUOFWuNnoaLlJCUfJ7okq5k8jFGu9%2FvsU5gFqkifnseqtUue7B41QCq2GaXjMrLYCPrbPGsdMVfRLhKovFoyrsZj34J6Wfm4R4Kzu3HRqVQoXP%2F9%2FzvJWhduj0mAoroIkz0LyCdgUH0U54v1Uo4I%2BSerxgiGEzTVLk7Tw3kKmcdz8%2FUtWe6nMyQzV4mU1224AM52HVPSG46EkDpTvS4aDBs5uYNn5XYuLSEb0tLT7p9gKz9TmsIazPAkHZGZpsOuM3mBEDKbKWZry5OOuujsiAYQA1Zn6WZaqCRQEGbKZCst7PZrKuBND85InckGubudEcaikNQDJkW0HgxN6ys5ANNtfV%2F3MLLKq8QGOqUB2j8Q%2FqVtugSVHCM52dye4ll4iCNC76IAm%2FuS2VILQGEqNMirE1rJ%2B72hRVOcsP0xF4Db3URrrIB94dB8%2B77zUJkRaz%2Bfa9bNj3JL5Qb8c6SzPi6m01dlQNa9YsJfqtgBn77beflKmejyRqsL4KHfCxGWx4Ro9xl7yz6zYq4Qe%2BpTeN%2BLxNXs2St9SeO3hQZPvTSDaMGiAPCwSo85B2%2BXDXaed1U%2B&X-Amz-Signature=14ef3e95ee15dacc4c72d6a588a3944bd6230f4f959c28b677f4f62b758c4f2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LI47MGH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDArq0BUaUj6lOwoHfjS0pzxxyn7mfEFz%2B6wb1OWz%2BN7wIgD%2B%2FzRPT3ktUuroZvtWy%2Blrt%2BCAzvi12AovB6MhIzVLgqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLet1t83bEXXBIYKyrcA%2Br5vxuRXk9T0hZHlAt6RglXsJV1CR%2BM0MRmdtQpWS0Bqyi2YQ5LV9IVDqQO9P8DkiWtfBG1WTgdfeZ8j4tlih37sjZFq82HM0G9FnoLKac2t6VtTRnBV%2FZ9fhJb4do8TeRXn1FtUcy2mjg0XEpRw8vVqM450H7g5SjQI4RGmGF76kIaGhmsuo3uHxVkiuOfWgbvO71Ti0WIt%2B50WVH6ML6Q64bPMZhN5HcKVAIkUpWNk79fhEwbOa3BQuvJ7F3r9fltxuh50%2FxydAhdRo0Tx3s1shtuD%2F3UdUOFWuNnoaLlJCUfJ7okq5k8jFGu9%2FvsU5gFqkifnseqtUue7B41QCq2GaXjMrLYCPrbPGsdMVfRLhKovFoyrsZj34J6Wfm4R4Kzu3HRqVQoXP%2F9%2FzvJWhduj0mAoroIkz0LyCdgUH0U54v1Uo4I%2BSerxgiGEzTVLk7Tw3kKmcdz8%2FUtWe6nMyQzV4mU1224AM52HVPSG46EkDpTvS4aDBs5uYNn5XYuLSEb0tLT7p9gKz9TmsIazPAkHZGZpsOuM3mBEDKbKWZry5OOuujsiAYQA1Zn6WZaqCRQEGbKZCst7PZrKuBND85InckGubudEcaikNQDJkW0HgxN6ys5ANNtfV%2F3MLLKq8QGOqUB2j8Q%2FqVtugSVHCM52dye4ll4iCNC76IAm%2FuS2VILQGEqNMirE1rJ%2B72hRVOcsP0xF4Db3URrrIB94dB8%2B77zUJkRaz%2Bfa9bNj3JL5Qb8c6SzPi6m01dlQNa9YsJfqtgBn77beflKmejyRqsL4KHfCxGWx4Ro9xl7yz6zYq4Qe%2BpTeN%2BLxNXs2St9SeO3hQZPvTSDaMGiAPCwSo85B2%2BXDXaed1U%2B&X-Amz-Signature=1c7a867cb8b0d4146178787b4409558ee08ab9ab95ce282be26091f39e414354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LI47MGH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDArq0BUaUj6lOwoHfjS0pzxxyn7mfEFz%2B6wb1OWz%2BN7wIgD%2B%2FzRPT3ktUuroZvtWy%2Blrt%2BCAzvi12AovB6MhIzVLgqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLet1t83bEXXBIYKyrcA%2Br5vxuRXk9T0hZHlAt6RglXsJV1CR%2BM0MRmdtQpWS0Bqyi2YQ5LV9IVDqQO9P8DkiWtfBG1WTgdfeZ8j4tlih37sjZFq82HM0G9FnoLKac2t6VtTRnBV%2FZ9fhJb4do8TeRXn1FtUcy2mjg0XEpRw8vVqM450H7g5SjQI4RGmGF76kIaGhmsuo3uHxVkiuOfWgbvO71Ti0WIt%2B50WVH6ML6Q64bPMZhN5HcKVAIkUpWNk79fhEwbOa3BQuvJ7F3r9fltxuh50%2FxydAhdRo0Tx3s1shtuD%2F3UdUOFWuNnoaLlJCUfJ7okq5k8jFGu9%2FvsU5gFqkifnseqtUue7B41QCq2GaXjMrLYCPrbPGsdMVfRLhKovFoyrsZj34J6Wfm4R4Kzu3HRqVQoXP%2F9%2FzvJWhduj0mAoroIkz0LyCdgUH0U54v1Uo4I%2BSerxgiGEzTVLk7Tw3kKmcdz8%2FUtWe6nMyQzV4mU1224AM52HVPSG46EkDpTvS4aDBs5uYNn5XYuLSEb0tLT7p9gKz9TmsIazPAkHZGZpsOuM3mBEDKbKWZry5OOuujsiAYQA1Zn6WZaqCRQEGbKZCst7PZrKuBND85InckGubudEcaikNQDJkW0HgxN6ys5ANNtfV%2F3MLLKq8QGOqUB2j8Q%2FqVtugSVHCM52dye4ll4iCNC76IAm%2FuS2VILQGEqNMirE1rJ%2B72hRVOcsP0xF4Db3URrrIB94dB8%2B77zUJkRaz%2Bfa9bNj3JL5Qb8c6SzPi6m01dlQNa9YsJfqtgBn77beflKmejyRqsL4KHfCxGWx4Ro9xl7yz6zYq4Qe%2BpTeN%2BLxNXs2St9SeO3hQZPvTSDaMGiAPCwSo85B2%2BXDXaed1U%2B&X-Amz-Signature=49d8ce0014f28f30cf9bc06f3cb94c5606bf6242a61d1c39ceaa5d3209e428fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKN6MXI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzHVre97vcRrFcEwxa8HD%2Bu%2FjcLZsnM1lV%2FFnDsxeuzgIgXwHlmSJrwplSpKx9ua%2FCsLPbBI9PG4caHlniAZ1lGn8qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvg3pYumQgwcvWx%2FyrcA9LF%2FqdyK04kDkVKDCT%2FdSlACBtIKetNeWfoeYTaju9wTVpcOaVdIYLDLHJoljh8xMYHyHOnmU1FVL6kZc9%2F2FpR4b01y0ZJ3r3F4Jw1AN1FkYB2GmDQEavXmKYA1KZrZ8mXhYUGQh%2FP0uUxTgumDZ4naCMfmS8z7%2BGELlyl4f20zHxtJLfXjOy9nkN4ZbQnsKswPSAHPxh1p2v0leVdd%2BwFtYHmOlRGaU8FAUlgMv1xyeReANJI56ZNo86fom%2B29q4wd%2BIidtIdTum6%2B9xLKuw7T9nW7joywV%2BUvucgcBOjdOc6fIy3jwmsYv%2BzAAwimObLT9p1kWniCg9VxR8%2FRfVy%2Bz5KGJX6UaGwWKghTgBuZ06mQzB6I851PCitL9mpS7Pwl3TOS2b99XB0pYkZhQ%2B9XzYZP4%2Fu97HQlgN12nHuysKoGqwzBMwxCwt8O5Uq6kOxNxmqlv%2Boh0h7QuKcchc8SYRHxCuMY11nWrkz4U18MdLN78ma4mNwVF3Lq9zqLcYeuvSVoX4GkQcGFPEJd%2FZOQVtnn7m4oeAar6lZOqlDCPUn0S1M7dC9ihlLiVnWrEmQ%2BJgLgBGOxoUvzz%2F1Ja7xM4lrJsBDM%2B7faWzTXayAq7jIEG%2Fr4%2F%2BwyKJYMM7Kq8QGOqUBfcAukAggWCoVzdYRdUBizmnwlk2DoOx3nYFt5398LUjPuD8G%2F5yKqVFmJ%2F0J3zJA3SLw4rKA1CZhGuxKZLD2w2euhLaRWX3zdT%2FimifqYTPQ3dfT8c8wAj%2F3IhHlLNyFcvlG5QhHD5bEXeWJd%2B9taFE3nhyKxl%2FUUzHcIreMrBdrAoZCOoCim36U5WZs%2FtX99wMmJx0L81DiuXQeiJX%2F4YMpIZyK&X-Amz-Signature=a30816cb3ee8513adb954132a68f2f9edd7655280a7eb35760bc576b6c71013c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKN6MXI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzHVre97vcRrFcEwxa8HD%2Bu%2FjcLZsnM1lV%2FFnDsxeuzgIgXwHlmSJrwplSpKx9ua%2FCsLPbBI9PG4caHlniAZ1lGn8qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvg3pYumQgwcvWx%2FyrcA9LF%2FqdyK04kDkVKDCT%2FdSlACBtIKetNeWfoeYTaju9wTVpcOaVdIYLDLHJoljh8xMYHyHOnmU1FVL6kZc9%2F2FpR4b01y0ZJ3r3F4Jw1AN1FkYB2GmDQEavXmKYA1KZrZ8mXhYUGQh%2FP0uUxTgumDZ4naCMfmS8z7%2BGELlyl4f20zHxtJLfXjOy9nkN4ZbQnsKswPSAHPxh1p2v0leVdd%2BwFtYHmOlRGaU8FAUlgMv1xyeReANJI56ZNo86fom%2B29q4wd%2BIidtIdTum6%2B9xLKuw7T9nW7joywV%2BUvucgcBOjdOc6fIy3jwmsYv%2BzAAwimObLT9p1kWniCg9VxR8%2FRfVy%2Bz5KGJX6UaGwWKghTgBuZ06mQzB6I851PCitL9mpS7Pwl3TOS2b99XB0pYkZhQ%2B9XzYZP4%2Fu97HQlgN12nHuysKoGqwzBMwxCwt8O5Uq6kOxNxmqlv%2Boh0h7QuKcchc8SYRHxCuMY11nWrkz4U18MdLN78ma4mNwVF3Lq9zqLcYeuvSVoX4GkQcGFPEJd%2FZOQVtnn7m4oeAar6lZOqlDCPUn0S1M7dC9ihlLiVnWrEmQ%2BJgLgBGOxoUvzz%2F1Ja7xM4lrJsBDM%2B7faWzTXayAq7jIEG%2Fr4%2F%2BwyKJYMM7Kq8QGOqUBfcAukAggWCoVzdYRdUBizmnwlk2DoOx3nYFt5398LUjPuD8G%2F5yKqVFmJ%2F0J3zJA3SLw4rKA1CZhGuxKZLD2w2euhLaRWX3zdT%2FimifqYTPQ3dfT8c8wAj%2F3IhHlLNyFcvlG5QhHD5bEXeWJd%2B9taFE3nhyKxl%2FUUzHcIreMrBdrAoZCOoCim36U5WZs%2FtX99wMmJx0L81DiuXQeiJX%2F4YMpIZyK&X-Amz-Signature=be40abb54dd95a2c17cb4ba6baffd74741916bd3a89a34fb7b2525e40782ca58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKN6MXI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzHVre97vcRrFcEwxa8HD%2Bu%2FjcLZsnM1lV%2FFnDsxeuzgIgXwHlmSJrwplSpKx9ua%2FCsLPbBI9PG4caHlniAZ1lGn8qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvg3pYumQgwcvWx%2FyrcA9LF%2FqdyK04kDkVKDCT%2FdSlACBtIKetNeWfoeYTaju9wTVpcOaVdIYLDLHJoljh8xMYHyHOnmU1FVL6kZc9%2F2FpR4b01y0ZJ3r3F4Jw1AN1FkYB2GmDQEavXmKYA1KZrZ8mXhYUGQh%2FP0uUxTgumDZ4naCMfmS8z7%2BGELlyl4f20zHxtJLfXjOy9nkN4ZbQnsKswPSAHPxh1p2v0leVdd%2BwFtYHmOlRGaU8FAUlgMv1xyeReANJI56ZNo86fom%2B29q4wd%2BIidtIdTum6%2B9xLKuw7T9nW7joywV%2BUvucgcBOjdOc6fIy3jwmsYv%2BzAAwimObLT9p1kWniCg9VxR8%2FRfVy%2Bz5KGJX6UaGwWKghTgBuZ06mQzB6I851PCitL9mpS7Pwl3TOS2b99XB0pYkZhQ%2B9XzYZP4%2Fu97HQlgN12nHuysKoGqwzBMwxCwt8O5Uq6kOxNxmqlv%2Boh0h7QuKcchc8SYRHxCuMY11nWrkz4U18MdLN78ma4mNwVF3Lq9zqLcYeuvSVoX4GkQcGFPEJd%2FZOQVtnn7m4oeAar6lZOqlDCPUn0S1M7dC9ihlLiVnWrEmQ%2BJgLgBGOxoUvzz%2F1Ja7xM4lrJsBDM%2B7faWzTXayAq7jIEG%2Fr4%2F%2BwyKJYMM7Kq8QGOqUBfcAukAggWCoVzdYRdUBizmnwlk2DoOx3nYFt5398LUjPuD8G%2F5yKqVFmJ%2F0J3zJA3SLw4rKA1CZhGuxKZLD2w2euhLaRWX3zdT%2FimifqYTPQ3dfT8c8wAj%2F3IhHlLNyFcvlG5QhHD5bEXeWJd%2B9taFE3nhyKxl%2FUUzHcIreMrBdrAoZCOoCim36U5WZs%2FtX99wMmJx0L81DiuXQeiJX%2F4YMpIZyK&X-Amz-Signature=fbbaa9c395bd70278e7387e3865a0d508117a548bafc38baea8de25ad9f5b09b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKN6MXI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzHVre97vcRrFcEwxa8HD%2Bu%2FjcLZsnM1lV%2FFnDsxeuzgIgXwHlmSJrwplSpKx9ua%2FCsLPbBI9PG4caHlniAZ1lGn8qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvg3pYumQgwcvWx%2FyrcA9LF%2FqdyK04kDkVKDCT%2FdSlACBtIKetNeWfoeYTaju9wTVpcOaVdIYLDLHJoljh8xMYHyHOnmU1FVL6kZc9%2F2FpR4b01y0ZJ3r3F4Jw1AN1FkYB2GmDQEavXmKYA1KZrZ8mXhYUGQh%2FP0uUxTgumDZ4naCMfmS8z7%2BGELlyl4f20zHxtJLfXjOy9nkN4ZbQnsKswPSAHPxh1p2v0leVdd%2BwFtYHmOlRGaU8FAUlgMv1xyeReANJI56ZNo86fom%2B29q4wd%2BIidtIdTum6%2B9xLKuw7T9nW7joywV%2BUvucgcBOjdOc6fIy3jwmsYv%2BzAAwimObLT9p1kWniCg9VxR8%2FRfVy%2Bz5KGJX6UaGwWKghTgBuZ06mQzB6I851PCitL9mpS7Pwl3TOS2b99XB0pYkZhQ%2B9XzYZP4%2Fu97HQlgN12nHuysKoGqwzBMwxCwt8O5Uq6kOxNxmqlv%2Boh0h7QuKcchc8SYRHxCuMY11nWrkz4U18MdLN78ma4mNwVF3Lq9zqLcYeuvSVoX4GkQcGFPEJd%2FZOQVtnn7m4oeAar6lZOqlDCPUn0S1M7dC9ihlLiVnWrEmQ%2BJgLgBGOxoUvzz%2F1Ja7xM4lrJsBDM%2B7faWzTXayAq7jIEG%2Fr4%2F%2BwyKJYMM7Kq8QGOqUBfcAukAggWCoVzdYRdUBizmnwlk2DoOx3nYFt5398LUjPuD8G%2F5yKqVFmJ%2F0J3zJA3SLw4rKA1CZhGuxKZLD2w2euhLaRWX3zdT%2FimifqYTPQ3dfT8c8wAj%2F3IhHlLNyFcvlG5QhHD5bEXeWJd%2B9taFE3nhyKxl%2FUUzHcIreMrBdrAoZCOoCim36U5WZs%2FtX99wMmJx0L81DiuXQeiJX%2F4YMpIZyK&X-Amz-Signature=2bb4b7877708cb9cbe2e9e233114cd46d48a6cd04ba98402e0f6e834c535ef91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKN6MXI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzHVre97vcRrFcEwxa8HD%2Bu%2FjcLZsnM1lV%2FFnDsxeuzgIgXwHlmSJrwplSpKx9ua%2FCsLPbBI9PG4caHlniAZ1lGn8qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvg3pYumQgwcvWx%2FyrcA9LF%2FqdyK04kDkVKDCT%2FdSlACBtIKetNeWfoeYTaju9wTVpcOaVdIYLDLHJoljh8xMYHyHOnmU1FVL6kZc9%2F2FpR4b01y0ZJ3r3F4Jw1AN1FkYB2GmDQEavXmKYA1KZrZ8mXhYUGQh%2FP0uUxTgumDZ4naCMfmS8z7%2BGELlyl4f20zHxtJLfXjOy9nkN4ZbQnsKswPSAHPxh1p2v0leVdd%2BwFtYHmOlRGaU8FAUlgMv1xyeReANJI56ZNo86fom%2B29q4wd%2BIidtIdTum6%2B9xLKuw7T9nW7joywV%2BUvucgcBOjdOc6fIy3jwmsYv%2BzAAwimObLT9p1kWniCg9VxR8%2FRfVy%2Bz5KGJX6UaGwWKghTgBuZ06mQzB6I851PCitL9mpS7Pwl3TOS2b99XB0pYkZhQ%2B9XzYZP4%2Fu97HQlgN12nHuysKoGqwzBMwxCwt8O5Uq6kOxNxmqlv%2Boh0h7QuKcchc8SYRHxCuMY11nWrkz4U18MdLN78ma4mNwVF3Lq9zqLcYeuvSVoX4GkQcGFPEJd%2FZOQVtnn7m4oeAar6lZOqlDCPUn0S1M7dC9ihlLiVnWrEmQ%2BJgLgBGOxoUvzz%2F1Ja7xM4lrJsBDM%2B7faWzTXayAq7jIEG%2Fr4%2F%2BwyKJYMM7Kq8QGOqUBfcAukAggWCoVzdYRdUBizmnwlk2DoOx3nYFt5398LUjPuD8G%2F5yKqVFmJ%2F0J3zJA3SLw4rKA1CZhGuxKZLD2w2euhLaRWX3zdT%2FimifqYTPQ3dfT8c8wAj%2F3IhHlLNyFcvlG5QhHD5bEXeWJd%2B9taFE3nhyKxl%2FUUzHcIreMrBdrAoZCOoCim36U5WZs%2FtX99wMmJx0L81DiuXQeiJX%2F4YMpIZyK&X-Amz-Signature=5ff77e1ab6373fba42aa641f0976f327edcb7e30c255443bf2325d310624e266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKN6MXI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzHVre97vcRrFcEwxa8HD%2Bu%2FjcLZsnM1lV%2FFnDsxeuzgIgXwHlmSJrwplSpKx9ua%2FCsLPbBI9PG4caHlniAZ1lGn8qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvg3pYumQgwcvWx%2FyrcA9LF%2FqdyK04kDkVKDCT%2FdSlACBtIKetNeWfoeYTaju9wTVpcOaVdIYLDLHJoljh8xMYHyHOnmU1FVL6kZc9%2F2FpR4b01y0ZJ3r3F4Jw1AN1FkYB2GmDQEavXmKYA1KZrZ8mXhYUGQh%2FP0uUxTgumDZ4naCMfmS8z7%2BGELlyl4f20zHxtJLfXjOy9nkN4ZbQnsKswPSAHPxh1p2v0leVdd%2BwFtYHmOlRGaU8FAUlgMv1xyeReANJI56ZNo86fom%2B29q4wd%2BIidtIdTum6%2B9xLKuw7T9nW7joywV%2BUvucgcBOjdOc6fIy3jwmsYv%2BzAAwimObLT9p1kWniCg9VxR8%2FRfVy%2Bz5KGJX6UaGwWKghTgBuZ06mQzB6I851PCitL9mpS7Pwl3TOS2b99XB0pYkZhQ%2B9XzYZP4%2Fu97HQlgN12nHuysKoGqwzBMwxCwt8O5Uq6kOxNxmqlv%2Boh0h7QuKcchc8SYRHxCuMY11nWrkz4U18MdLN78ma4mNwVF3Lq9zqLcYeuvSVoX4GkQcGFPEJd%2FZOQVtnn7m4oeAar6lZOqlDCPUn0S1M7dC9ihlLiVnWrEmQ%2BJgLgBGOxoUvzz%2F1Ja7xM4lrJsBDM%2B7faWzTXayAq7jIEG%2Fr4%2F%2BwyKJYMM7Kq8QGOqUBfcAukAggWCoVzdYRdUBizmnwlk2DoOx3nYFt5398LUjPuD8G%2F5yKqVFmJ%2F0J3zJA3SLw4rKA1CZhGuxKZLD2w2euhLaRWX3zdT%2FimifqYTPQ3dfT8c8wAj%2F3IhHlLNyFcvlG5QhHD5bEXeWJd%2B9taFE3nhyKxl%2FUUzHcIreMrBdrAoZCOoCim36U5WZs%2FtX99wMmJx0L81DiuXQeiJX%2F4YMpIZyK&X-Amz-Signature=053f2e71e3b9e541acd559070d7da463a6f7a047936b81632407d52bb07a1229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UKN6MXI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzHVre97vcRrFcEwxa8HD%2Bu%2FjcLZsnM1lV%2FFnDsxeuzgIgXwHlmSJrwplSpKx9ua%2FCsLPbBI9PG4caHlniAZ1lGn8qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvg3pYumQgwcvWx%2FyrcA9LF%2FqdyK04kDkVKDCT%2FdSlACBtIKetNeWfoeYTaju9wTVpcOaVdIYLDLHJoljh8xMYHyHOnmU1FVL6kZc9%2F2FpR4b01y0ZJ3r3F4Jw1AN1FkYB2GmDQEavXmKYA1KZrZ8mXhYUGQh%2FP0uUxTgumDZ4naCMfmS8z7%2BGELlyl4f20zHxtJLfXjOy9nkN4ZbQnsKswPSAHPxh1p2v0leVdd%2BwFtYHmOlRGaU8FAUlgMv1xyeReANJI56ZNo86fom%2B29q4wd%2BIidtIdTum6%2B9xLKuw7T9nW7joywV%2BUvucgcBOjdOc6fIy3jwmsYv%2BzAAwimObLT9p1kWniCg9VxR8%2FRfVy%2Bz5KGJX6UaGwWKghTgBuZ06mQzB6I851PCitL9mpS7Pwl3TOS2b99XB0pYkZhQ%2B9XzYZP4%2Fu97HQlgN12nHuysKoGqwzBMwxCwt8O5Uq6kOxNxmqlv%2Boh0h7QuKcchc8SYRHxCuMY11nWrkz4U18MdLN78ma4mNwVF3Lq9zqLcYeuvSVoX4GkQcGFPEJd%2FZOQVtnn7m4oeAar6lZOqlDCPUn0S1M7dC9ihlLiVnWrEmQ%2BJgLgBGOxoUvzz%2F1Ja7xM4lrJsBDM%2B7faWzTXayAq7jIEG%2Fr4%2F%2BwyKJYMM7Kq8QGOqUBfcAukAggWCoVzdYRdUBizmnwlk2DoOx3nYFt5398LUjPuD8G%2F5yKqVFmJ%2F0J3zJA3SLw4rKA1CZhGuxKZLD2w2euhLaRWX3zdT%2FimifqYTPQ3dfT8c8wAj%2F3IhHlLNyFcvlG5QhHD5bEXeWJd%2B9taFE3nhyKxl%2FUUzHcIreMrBdrAoZCOoCim36U5WZs%2FtX99wMmJx0L81DiuXQeiJX%2F4YMpIZyK&X-Amz-Signature=94707dd545368fe5d80235b89d3c908a5281cd7ab94279d1e54ee35fb3e8315a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
