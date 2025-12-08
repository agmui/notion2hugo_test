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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GA2NWU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDykYTP9i5N9TtUqL8rfiGg%2BmUQTaWOgEHPExwYdL%2FUiwIhAICcNtlGMCyKVg4XNy8ul2WvcX0KCOdsPdVeagUFZ5YMKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL4dmCG%2FkYk49XSiYq3ANf4wo0nSvySQi1ck6fXNXeldkZ4bRszcbdokhMTqsjjXufBNaq%2FUdhiiNRGdSIIUsobmT72ECOzA5UMDsNpUfahtUnctU65J2k3ZA3QhOqATtaPTe1juBtG9hmIs46HTiEx%2Ba2rlN%2F5B5Rm23qlD43leMiYq8%2B1RVu9iZC9YfJTnWNkO2WnNsibtoIzMuAQt5gSKMjcraWdcJbNKLP3tsJyfi8j3LVgtRoo99weQtilR1H66MvNtpfBwwiVZy2vpIEIlEdROAgUkSLqltA%2Bk4705UfGNsmz9ObvT9Pis0UQp5do2woi%2BviCzFHWTjyOjOlylXxvdJkfZNFarIrWH9tCvg75a5OZxr0fnK%2Frlvon1lsiLpZ3Ypwk5z8wd2GeD6kdk7zmD4i9bou8HKLUiNVwsTBOUL6suVoX%2BJ5BFzy%2BnJEpg8DYTrVFqgbRIq64I9PtYqYYyfWtVHUiQQ2hf2rsR09Zp%2BfgDqj0MZ57C1g6Y8Y8mkMMElWXfTgSzYQKyLntp81djm8ZMs9rDKMGve%2BZISE5Vf7O9FpI28p74QoaD4jVAeg6fHTAlDbuQ1KiHJX7JuH%2Fn2eoRtFT%2B3nRzp3RE6OH%2B%2FqMILwRAgf2CDzPu5J7D3RBjSd5%2FMojjDi09jJBjqkAWqyaITgHeUMvHnxm03o9ue5B0rzV%2BceYHXImiuB1vjLQEbwgcyUkb8xiA8NCwbO91Ef6GXm1yAHCKnhX7o1sFUuEbhf9R0N%2BNs2%2BcDiG111%2B31i%2F1HWVimEVixE6nozD8uyjvnY4Fg4i%2FA4nLlk%2BOyncEF5CNXa5fiKm4LrobHFghr1OcVvCPDD35akUMGDv2qZKNyJkRocvlbYJWImaG9DuezC&X-Amz-Signature=7bc9570cc6acf4b25d8df894b5269261f28978eeeb495474c9489be1209641c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GA2NWU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDykYTP9i5N9TtUqL8rfiGg%2BmUQTaWOgEHPExwYdL%2FUiwIhAICcNtlGMCyKVg4XNy8ul2WvcX0KCOdsPdVeagUFZ5YMKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL4dmCG%2FkYk49XSiYq3ANf4wo0nSvySQi1ck6fXNXeldkZ4bRszcbdokhMTqsjjXufBNaq%2FUdhiiNRGdSIIUsobmT72ECOzA5UMDsNpUfahtUnctU65J2k3ZA3QhOqATtaPTe1juBtG9hmIs46HTiEx%2Ba2rlN%2F5B5Rm23qlD43leMiYq8%2B1RVu9iZC9YfJTnWNkO2WnNsibtoIzMuAQt5gSKMjcraWdcJbNKLP3tsJyfi8j3LVgtRoo99weQtilR1H66MvNtpfBwwiVZy2vpIEIlEdROAgUkSLqltA%2Bk4705UfGNsmz9ObvT9Pis0UQp5do2woi%2BviCzFHWTjyOjOlylXxvdJkfZNFarIrWH9tCvg75a5OZxr0fnK%2Frlvon1lsiLpZ3Ypwk5z8wd2GeD6kdk7zmD4i9bou8HKLUiNVwsTBOUL6suVoX%2BJ5BFzy%2BnJEpg8DYTrVFqgbRIq64I9PtYqYYyfWtVHUiQQ2hf2rsR09Zp%2BfgDqj0MZ57C1g6Y8Y8mkMMElWXfTgSzYQKyLntp81djm8ZMs9rDKMGve%2BZISE5Vf7O9FpI28p74QoaD4jVAeg6fHTAlDbuQ1KiHJX7JuH%2Fn2eoRtFT%2B3nRzp3RE6OH%2B%2FqMILwRAgf2CDzPu5J7D3RBjSd5%2FMojjDi09jJBjqkAWqyaITgHeUMvHnxm03o9ue5B0rzV%2BceYHXImiuB1vjLQEbwgcyUkb8xiA8NCwbO91Ef6GXm1yAHCKnhX7o1sFUuEbhf9R0N%2BNs2%2BcDiG111%2B31i%2F1HWVimEVixE6nozD8uyjvnY4Fg4i%2FA4nLlk%2BOyncEF5CNXa5fiKm4LrobHFghr1OcVvCPDD35akUMGDv2qZKNyJkRocvlbYJWImaG9DuezC&X-Amz-Signature=3f9077ab34ac8292273927718139bbbdd7df9c628af95d72844d8031d840c21c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GA2NWU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDykYTP9i5N9TtUqL8rfiGg%2BmUQTaWOgEHPExwYdL%2FUiwIhAICcNtlGMCyKVg4XNy8ul2WvcX0KCOdsPdVeagUFZ5YMKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL4dmCG%2FkYk49XSiYq3ANf4wo0nSvySQi1ck6fXNXeldkZ4bRszcbdokhMTqsjjXufBNaq%2FUdhiiNRGdSIIUsobmT72ECOzA5UMDsNpUfahtUnctU65J2k3ZA3QhOqATtaPTe1juBtG9hmIs46HTiEx%2Ba2rlN%2F5B5Rm23qlD43leMiYq8%2B1RVu9iZC9YfJTnWNkO2WnNsibtoIzMuAQt5gSKMjcraWdcJbNKLP3tsJyfi8j3LVgtRoo99weQtilR1H66MvNtpfBwwiVZy2vpIEIlEdROAgUkSLqltA%2Bk4705UfGNsmz9ObvT9Pis0UQp5do2woi%2BviCzFHWTjyOjOlylXxvdJkfZNFarIrWH9tCvg75a5OZxr0fnK%2Frlvon1lsiLpZ3Ypwk5z8wd2GeD6kdk7zmD4i9bou8HKLUiNVwsTBOUL6suVoX%2BJ5BFzy%2BnJEpg8DYTrVFqgbRIq64I9PtYqYYyfWtVHUiQQ2hf2rsR09Zp%2BfgDqj0MZ57C1g6Y8Y8mkMMElWXfTgSzYQKyLntp81djm8ZMs9rDKMGve%2BZISE5Vf7O9FpI28p74QoaD4jVAeg6fHTAlDbuQ1KiHJX7JuH%2Fn2eoRtFT%2B3nRzp3RE6OH%2B%2FqMILwRAgf2CDzPu5J7D3RBjSd5%2FMojjDi09jJBjqkAWqyaITgHeUMvHnxm03o9ue5B0rzV%2BceYHXImiuB1vjLQEbwgcyUkb8xiA8NCwbO91Ef6GXm1yAHCKnhX7o1sFUuEbhf9R0N%2BNs2%2BcDiG111%2B31i%2F1HWVimEVixE6nozD8uyjvnY4Fg4i%2FA4nLlk%2BOyncEF5CNXa5fiKm4LrobHFghr1OcVvCPDD35akUMGDv2qZKNyJkRocvlbYJWImaG9DuezC&X-Amz-Signature=c6e43eca29b4641ee0baa8d3f7c22e2253b264201b738d06dd1a62b4fc03e79e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GA2NWU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDykYTP9i5N9TtUqL8rfiGg%2BmUQTaWOgEHPExwYdL%2FUiwIhAICcNtlGMCyKVg4XNy8ul2WvcX0KCOdsPdVeagUFZ5YMKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL4dmCG%2FkYk49XSiYq3ANf4wo0nSvySQi1ck6fXNXeldkZ4bRszcbdokhMTqsjjXufBNaq%2FUdhiiNRGdSIIUsobmT72ECOzA5UMDsNpUfahtUnctU65J2k3ZA3QhOqATtaPTe1juBtG9hmIs46HTiEx%2Ba2rlN%2F5B5Rm23qlD43leMiYq8%2B1RVu9iZC9YfJTnWNkO2WnNsibtoIzMuAQt5gSKMjcraWdcJbNKLP3tsJyfi8j3LVgtRoo99weQtilR1H66MvNtpfBwwiVZy2vpIEIlEdROAgUkSLqltA%2Bk4705UfGNsmz9ObvT9Pis0UQp5do2woi%2BviCzFHWTjyOjOlylXxvdJkfZNFarIrWH9tCvg75a5OZxr0fnK%2Frlvon1lsiLpZ3Ypwk5z8wd2GeD6kdk7zmD4i9bou8HKLUiNVwsTBOUL6suVoX%2BJ5BFzy%2BnJEpg8DYTrVFqgbRIq64I9PtYqYYyfWtVHUiQQ2hf2rsR09Zp%2BfgDqj0MZ57C1g6Y8Y8mkMMElWXfTgSzYQKyLntp81djm8ZMs9rDKMGve%2BZISE5Vf7O9FpI28p74QoaD4jVAeg6fHTAlDbuQ1KiHJX7JuH%2Fn2eoRtFT%2B3nRzp3RE6OH%2B%2FqMILwRAgf2CDzPu5J7D3RBjSd5%2FMojjDi09jJBjqkAWqyaITgHeUMvHnxm03o9ue5B0rzV%2BceYHXImiuB1vjLQEbwgcyUkb8xiA8NCwbO91Ef6GXm1yAHCKnhX7o1sFUuEbhf9R0N%2BNs2%2BcDiG111%2B31i%2F1HWVimEVixE6nozD8uyjvnY4Fg4i%2FA4nLlk%2BOyncEF5CNXa5fiKm4LrobHFghr1OcVvCPDD35akUMGDv2qZKNyJkRocvlbYJWImaG9DuezC&X-Amz-Signature=8e646b055718049951fee58615da553ba90c0194b1e293bf56fe1497377becf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GA2NWU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDykYTP9i5N9TtUqL8rfiGg%2BmUQTaWOgEHPExwYdL%2FUiwIhAICcNtlGMCyKVg4XNy8ul2WvcX0KCOdsPdVeagUFZ5YMKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL4dmCG%2FkYk49XSiYq3ANf4wo0nSvySQi1ck6fXNXeldkZ4bRszcbdokhMTqsjjXufBNaq%2FUdhiiNRGdSIIUsobmT72ECOzA5UMDsNpUfahtUnctU65J2k3ZA3QhOqATtaPTe1juBtG9hmIs46HTiEx%2Ba2rlN%2F5B5Rm23qlD43leMiYq8%2B1RVu9iZC9YfJTnWNkO2WnNsibtoIzMuAQt5gSKMjcraWdcJbNKLP3tsJyfi8j3LVgtRoo99weQtilR1H66MvNtpfBwwiVZy2vpIEIlEdROAgUkSLqltA%2Bk4705UfGNsmz9ObvT9Pis0UQp5do2woi%2BviCzFHWTjyOjOlylXxvdJkfZNFarIrWH9tCvg75a5OZxr0fnK%2Frlvon1lsiLpZ3Ypwk5z8wd2GeD6kdk7zmD4i9bou8HKLUiNVwsTBOUL6suVoX%2BJ5BFzy%2BnJEpg8DYTrVFqgbRIq64I9PtYqYYyfWtVHUiQQ2hf2rsR09Zp%2BfgDqj0MZ57C1g6Y8Y8mkMMElWXfTgSzYQKyLntp81djm8ZMs9rDKMGve%2BZISE5Vf7O9FpI28p74QoaD4jVAeg6fHTAlDbuQ1KiHJX7JuH%2Fn2eoRtFT%2B3nRzp3RE6OH%2B%2FqMILwRAgf2CDzPu5J7D3RBjSd5%2FMojjDi09jJBjqkAWqyaITgHeUMvHnxm03o9ue5B0rzV%2BceYHXImiuB1vjLQEbwgcyUkb8xiA8NCwbO91Ef6GXm1yAHCKnhX7o1sFUuEbhf9R0N%2BNs2%2BcDiG111%2B31i%2F1HWVimEVixE6nozD8uyjvnY4Fg4i%2FA4nLlk%2BOyncEF5CNXa5fiKm4LrobHFghr1OcVvCPDD35akUMGDv2qZKNyJkRocvlbYJWImaG9DuezC&X-Amz-Signature=6a2bb02546311c8c2219e0ec49fa760c444dc11eb8af6fc580b60ca901f8bb6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GA2NWU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDykYTP9i5N9TtUqL8rfiGg%2BmUQTaWOgEHPExwYdL%2FUiwIhAICcNtlGMCyKVg4XNy8ul2WvcX0KCOdsPdVeagUFZ5YMKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL4dmCG%2FkYk49XSiYq3ANf4wo0nSvySQi1ck6fXNXeldkZ4bRszcbdokhMTqsjjXufBNaq%2FUdhiiNRGdSIIUsobmT72ECOzA5UMDsNpUfahtUnctU65J2k3ZA3QhOqATtaPTe1juBtG9hmIs46HTiEx%2Ba2rlN%2F5B5Rm23qlD43leMiYq8%2B1RVu9iZC9YfJTnWNkO2WnNsibtoIzMuAQt5gSKMjcraWdcJbNKLP3tsJyfi8j3LVgtRoo99weQtilR1H66MvNtpfBwwiVZy2vpIEIlEdROAgUkSLqltA%2Bk4705UfGNsmz9ObvT9Pis0UQp5do2woi%2BviCzFHWTjyOjOlylXxvdJkfZNFarIrWH9tCvg75a5OZxr0fnK%2Frlvon1lsiLpZ3Ypwk5z8wd2GeD6kdk7zmD4i9bou8HKLUiNVwsTBOUL6suVoX%2BJ5BFzy%2BnJEpg8DYTrVFqgbRIq64I9PtYqYYyfWtVHUiQQ2hf2rsR09Zp%2BfgDqj0MZ57C1g6Y8Y8mkMMElWXfTgSzYQKyLntp81djm8ZMs9rDKMGve%2BZISE5Vf7O9FpI28p74QoaD4jVAeg6fHTAlDbuQ1KiHJX7JuH%2Fn2eoRtFT%2B3nRzp3RE6OH%2B%2FqMILwRAgf2CDzPu5J7D3RBjSd5%2FMojjDi09jJBjqkAWqyaITgHeUMvHnxm03o9ue5B0rzV%2BceYHXImiuB1vjLQEbwgcyUkb8xiA8NCwbO91Ef6GXm1yAHCKnhX7o1sFUuEbhf9R0N%2BNs2%2BcDiG111%2B31i%2F1HWVimEVixE6nozD8uyjvnY4Fg4i%2FA4nLlk%2BOyncEF5CNXa5fiKm4LrobHFghr1OcVvCPDD35akUMGDv2qZKNyJkRocvlbYJWImaG9DuezC&X-Amz-Signature=4f10fcfa4d60cd6e42e93ddf681a9d7b5c9d3c7cb3cf67569b22de714965ddba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GA2NWU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDykYTP9i5N9TtUqL8rfiGg%2BmUQTaWOgEHPExwYdL%2FUiwIhAICcNtlGMCyKVg4XNy8ul2WvcX0KCOdsPdVeagUFZ5YMKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL4dmCG%2FkYk49XSiYq3ANf4wo0nSvySQi1ck6fXNXeldkZ4bRszcbdokhMTqsjjXufBNaq%2FUdhiiNRGdSIIUsobmT72ECOzA5UMDsNpUfahtUnctU65J2k3ZA3QhOqATtaPTe1juBtG9hmIs46HTiEx%2Ba2rlN%2F5B5Rm23qlD43leMiYq8%2B1RVu9iZC9YfJTnWNkO2WnNsibtoIzMuAQt5gSKMjcraWdcJbNKLP3tsJyfi8j3LVgtRoo99weQtilR1H66MvNtpfBwwiVZy2vpIEIlEdROAgUkSLqltA%2Bk4705UfGNsmz9ObvT9Pis0UQp5do2woi%2BviCzFHWTjyOjOlylXxvdJkfZNFarIrWH9tCvg75a5OZxr0fnK%2Frlvon1lsiLpZ3Ypwk5z8wd2GeD6kdk7zmD4i9bou8HKLUiNVwsTBOUL6suVoX%2BJ5BFzy%2BnJEpg8DYTrVFqgbRIq64I9PtYqYYyfWtVHUiQQ2hf2rsR09Zp%2BfgDqj0MZ57C1g6Y8Y8mkMMElWXfTgSzYQKyLntp81djm8ZMs9rDKMGve%2BZISE5Vf7O9FpI28p74QoaD4jVAeg6fHTAlDbuQ1KiHJX7JuH%2Fn2eoRtFT%2B3nRzp3RE6OH%2B%2FqMILwRAgf2CDzPu5J7D3RBjSd5%2FMojjDi09jJBjqkAWqyaITgHeUMvHnxm03o9ue5B0rzV%2BceYHXImiuB1vjLQEbwgcyUkb8xiA8NCwbO91Ef6GXm1yAHCKnhX7o1sFUuEbhf9R0N%2BNs2%2BcDiG111%2B31i%2F1HWVimEVixE6nozD8uyjvnY4Fg4i%2FA4nLlk%2BOyncEF5CNXa5fiKm4LrobHFghr1OcVvCPDD35akUMGDv2qZKNyJkRocvlbYJWImaG9DuezC&X-Amz-Signature=0f22ea041b92ec2906aafc10a532289ebbc6e5fe190f62209280b45079a5dc77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GA2NWU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDykYTP9i5N9TtUqL8rfiGg%2BmUQTaWOgEHPExwYdL%2FUiwIhAICcNtlGMCyKVg4XNy8ul2WvcX0KCOdsPdVeagUFZ5YMKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL4dmCG%2FkYk49XSiYq3ANf4wo0nSvySQi1ck6fXNXeldkZ4bRszcbdokhMTqsjjXufBNaq%2FUdhiiNRGdSIIUsobmT72ECOzA5UMDsNpUfahtUnctU65J2k3ZA3QhOqATtaPTe1juBtG9hmIs46HTiEx%2Ba2rlN%2F5B5Rm23qlD43leMiYq8%2B1RVu9iZC9YfJTnWNkO2WnNsibtoIzMuAQt5gSKMjcraWdcJbNKLP3tsJyfi8j3LVgtRoo99weQtilR1H66MvNtpfBwwiVZy2vpIEIlEdROAgUkSLqltA%2Bk4705UfGNsmz9ObvT9Pis0UQp5do2woi%2BviCzFHWTjyOjOlylXxvdJkfZNFarIrWH9tCvg75a5OZxr0fnK%2Frlvon1lsiLpZ3Ypwk5z8wd2GeD6kdk7zmD4i9bou8HKLUiNVwsTBOUL6suVoX%2BJ5BFzy%2BnJEpg8DYTrVFqgbRIq64I9PtYqYYyfWtVHUiQQ2hf2rsR09Zp%2BfgDqj0MZ57C1g6Y8Y8mkMMElWXfTgSzYQKyLntp81djm8ZMs9rDKMGve%2BZISE5Vf7O9FpI28p74QoaD4jVAeg6fHTAlDbuQ1KiHJX7JuH%2Fn2eoRtFT%2B3nRzp3RE6OH%2B%2FqMILwRAgf2CDzPu5J7D3RBjSd5%2FMojjDi09jJBjqkAWqyaITgHeUMvHnxm03o9ue5B0rzV%2BceYHXImiuB1vjLQEbwgcyUkb8xiA8NCwbO91Ef6GXm1yAHCKnhX7o1sFUuEbhf9R0N%2BNs2%2BcDiG111%2B31i%2F1HWVimEVixE6nozD8uyjvnY4Fg4i%2FA4nLlk%2BOyncEF5CNXa5fiKm4LrobHFghr1OcVvCPDD35akUMGDv2qZKNyJkRocvlbYJWImaG9DuezC&X-Amz-Signature=56e56ff50b8dbb18f5dc34261ee20cae01a82e05f21b5f1b13fc31d46f96281d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GA2NWU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDykYTP9i5N9TtUqL8rfiGg%2BmUQTaWOgEHPExwYdL%2FUiwIhAICcNtlGMCyKVg4XNy8ul2WvcX0KCOdsPdVeagUFZ5YMKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL4dmCG%2FkYk49XSiYq3ANf4wo0nSvySQi1ck6fXNXeldkZ4bRszcbdokhMTqsjjXufBNaq%2FUdhiiNRGdSIIUsobmT72ECOzA5UMDsNpUfahtUnctU65J2k3ZA3QhOqATtaPTe1juBtG9hmIs46HTiEx%2Ba2rlN%2F5B5Rm23qlD43leMiYq8%2B1RVu9iZC9YfJTnWNkO2WnNsibtoIzMuAQt5gSKMjcraWdcJbNKLP3tsJyfi8j3LVgtRoo99weQtilR1H66MvNtpfBwwiVZy2vpIEIlEdROAgUkSLqltA%2Bk4705UfGNsmz9ObvT9Pis0UQp5do2woi%2BviCzFHWTjyOjOlylXxvdJkfZNFarIrWH9tCvg75a5OZxr0fnK%2Frlvon1lsiLpZ3Ypwk5z8wd2GeD6kdk7zmD4i9bou8HKLUiNVwsTBOUL6suVoX%2BJ5BFzy%2BnJEpg8DYTrVFqgbRIq64I9PtYqYYyfWtVHUiQQ2hf2rsR09Zp%2BfgDqj0MZ57C1g6Y8Y8mkMMElWXfTgSzYQKyLntp81djm8ZMs9rDKMGve%2BZISE5Vf7O9FpI28p74QoaD4jVAeg6fHTAlDbuQ1KiHJX7JuH%2Fn2eoRtFT%2B3nRzp3RE6OH%2B%2FqMILwRAgf2CDzPu5J7D3RBjSd5%2FMojjDi09jJBjqkAWqyaITgHeUMvHnxm03o9ue5B0rzV%2BceYHXImiuB1vjLQEbwgcyUkb8xiA8NCwbO91Ef6GXm1yAHCKnhX7o1sFUuEbhf9R0N%2BNs2%2BcDiG111%2B31i%2F1HWVimEVixE6nozD8uyjvnY4Fg4i%2FA4nLlk%2BOyncEF5CNXa5fiKm4LrobHFghr1OcVvCPDD35akUMGDv2qZKNyJkRocvlbYJWImaG9DuezC&X-Amz-Signature=3f69c4a447e51bac1226324f59fdd6d53d50328ec35a533cb9f61f2cefa08881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GA2NWU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDykYTP9i5N9TtUqL8rfiGg%2BmUQTaWOgEHPExwYdL%2FUiwIhAICcNtlGMCyKVg4XNy8ul2WvcX0KCOdsPdVeagUFZ5YMKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL4dmCG%2FkYk49XSiYq3ANf4wo0nSvySQi1ck6fXNXeldkZ4bRszcbdokhMTqsjjXufBNaq%2FUdhiiNRGdSIIUsobmT72ECOzA5UMDsNpUfahtUnctU65J2k3ZA3QhOqATtaPTe1juBtG9hmIs46HTiEx%2Ba2rlN%2F5B5Rm23qlD43leMiYq8%2B1RVu9iZC9YfJTnWNkO2WnNsibtoIzMuAQt5gSKMjcraWdcJbNKLP3tsJyfi8j3LVgtRoo99weQtilR1H66MvNtpfBwwiVZy2vpIEIlEdROAgUkSLqltA%2Bk4705UfGNsmz9ObvT9Pis0UQp5do2woi%2BviCzFHWTjyOjOlylXxvdJkfZNFarIrWH9tCvg75a5OZxr0fnK%2Frlvon1lsiLpZ3Ypwk5z8wd2GeD6kdk7zmD4i9bou8HKLUiNVwsTBOUL6suVoX%2BJ5BFzy%2BnJEpg8DYTrVFqgbRIq64I9PtYqYYyfWtVHUiQQ2hf2rsR09Zp%2BfgDqj0MZ57C1g6Y8Y8mkMMElWXfTgSzYQKyLntp81djm8ZMs9rDKMGve%2BZISE5Vf7O9FpI28p74QoaD4jVAeg6fHTAlDbuQ1KiHJX7JuH%2Fn2eoRtFT%2B3nRzp3RE6OH%2B%2FqMILwRAgf2CDzPu5J7D3RBjSd5%2FMojjDi09jJBjqkAWqyaITgHeUMvHnxm03o9ue5B0rzV%2BceYHXImiuB1vjLQEbwgcyUkb8xiA8NCwbO91Ef6GXm1yAHCKnhX7o1sFUuEbhf9R0N%2BNs2%2BcDiG111%2B31i%2F1HWVimEVixE6nozD8uyjvnY4Fg4i%2FA4nLlk%2BOyncEF5CNXa5fiKm4LrobHFghr1OcVvCPDD35akUMGDv2qZKNyJkRocvlbYJWImaG9DuezC&X-Amz-Signature=2989b0217edf6b747bd555fa54f66414f0658a17d63c12606fc1dc5bfbf42eb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBUIXTPC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0db7bE8US86xnpByL26LRFzgl5z9clCHa98U%2FOlHFCAiBtAuLZzNEnCbD9Zfj8i1YMf6ZDjmTyHkbfUnJE1yKcqiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLERv5YHmSGlgcHl2KtwDnJZjxIAKEz4Wz2bCLwNjhM0Qb%2BN3amRhyA7Uda%2BO0kmW%2FosODklp7kPugA1guC8U0s6zwRA%2BmcxOqHrF2w%2FWNuQUTJiZ4cHLyJEeCLXhvSSEjcCv5dNV1fDW%2FFty4jwb3IUmqXQk63CEoQgnENdqvGCyIHJb3v2bbaTzff4VP1b2YDcUaGFgIn%2FjI8KsDZRqFk%2FL26JPRM8HXihnFqTTVrKkUGYljNdQJQtP3ZctIjGc4ATx6XstlEjtal8FnD1muifmOjpvi%2BCmIZKeL%2FXc5to7PHTFlnnSYlDE7cssUJ0QiPCinQhRWyjP%2BMSMhgUt1uu4BGhkazGHoMqe6OYPYvf5AqyAagAmJyYpFvLNHzuBe%2BlCPUjjd%2BO52WnSLtwwelNzhoSzV2zyMx5GeZJMKZxK5rcHS%2BRAmLo%2BkAhE0SdR7rKKotuxwdVsnxj%2F4DmTkf8Tm8D%2Bm1%2BpDZ%2FBRwflpTVeYAY8uJvUKCqqBmndaB0X6gj8WL5OvvHcax5mzg2T4iA%2BbQFSQW4x8o5uwmpF6YVWTTbuQ3xVpuWaYtrzSK466e9WcYzM3fbiSgqsuJOtP0%2BTArHMWd4Y%2Bte7qQSBdDW1gVcG8dtpBxeuHOixIRFYOqB5YU4JU%2BRV1O8wx9HYyQY6pgEr8ZUUqOGMtBFAQFhPy%2BPOYBCUN9F%2BLat1RSoX3o4FBfPlINJPcFAQBvmyLnUUwrc1dDfY6waLwAnCIFS1WG2xCP6Hmw9muXLyy3vsNW6OR8J23gFVCtvT4Xbf5%2FUSN%2Bxa%2BKrEqRB8CtI6%2FmUnQit4KUzsZ3gQlM4Q%2BKaXanRMiViy1NUEh4%2Bnb7HMGUqvrPBfVFrAOIFMVoDHJget9U2JobDJS3w0&X-Amz-Signature=7047afa9b0c04506fdc7c0d475537d719a8045af5c574e08c706c43f8c19ca9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JGGTMYA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGaNZ6sc85h8dI6MP62m2OLJsvWhuW4jNvu0VCbV41KJAiA6jf%2FaREBf6WuRxYm6XhZ12ot0N2UP3Tb4tWHI00jtQyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B9yc159fb1ULJlXAKtwD7iMP8AmrDhlk0AW2cPRugU06sHWsioXhCYOwUGI10VvxWPb5eLop2BiUUWF0Y6i%2BLCKlO5s4LzWus5C7XChNUg4fsgL1PT590ex2ktvuPECtu%2Ba4%2FM2KUdSuq9NqpsCtm2AhnzFvr%2BU4dlSEJTACJEnrShV0zhpmxTP3YmwgoWpchH9h0289rhMYy3lTx7m%2BqG39J7dJE1g7DbO5f6po1ala8njS2gh34LCjdnY3y3%2BW8CQ%2BcXviCqhCMwLkM596WLASA4BmZyOtgnCU8%2BMzJshwd7xcgVe3K8RAPnS9yDhBjZtXB0DZxa1OVLdqZGvT544TX1wlGlF52icQMBuUrVGY%2F8WBbHzx64EWbWTEBwfpN9%2FP6VJCJYbvewLopOOcwbvAEZabOyg%2BxW%2FV%2BAATD3ly4fUX4JJ6%2FPVd%2BQHg34QGRe6ZWALJ9mI6o3BDgsGrGkofdAQo1HNAsAgW5lvdAOsQqgakmqcPUQmZ0ZQWYPy%2BDaTZ70xuHp1%2BoJdT%2Bn2XtopSehiuEBVuyPr6YVkxwkyai8tNJwel57TMBS%2FE5u4TyUpUImhhr66P00k92ZciCsQt5n5QhtmZnKhArqTbGABiYUc%2BXHDLmRce84jHS%2Ff%2BGPuucNHQigl1YfcwotHYyQY6pgFUFbEKkYDg2UKl0EohxrDP73uy2pU2fuEf0GjE9Da%2BeRDXtyJAywgG9jPoHzt9E1vHEX%2FIfYDMcJRDPEVcQ8U1xHjlT5MY6JRXNkZMOvMfkXM0%2FgJKIrne%2BlXnejwKlOyTzt5pEQJ3R2is%2F%2FG73DiP1NlsK0YFWX2S1kKZPwp6wi4tWFCINeIFXFYJYozTjNOlr5hsqcewsJv16eUVNK52fyHsniKl&X-Amz-Signature=f848b6d7351c3261070727611348d98f045a2ed7816a46b674dfb942e4de91e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7L4ASZ3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIr%2BgXTwp92V8Ht4rRuQANVMJL2ONCBt8qn6Lasn7ZiAiBuuCC5FViAeJS6rVWcyz1PYdoEJFro97VaZDUTQ%2FG6ViqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnWQerSMN5yNy8J8VKtwD2YLXgUhjlJahVouys3NvU3waBa7kpuKpkajpc6RkYm4%2FU%2FXOsByDqWg79PA8qYBDB9%2BloNGd5BzuVTXHJGlLzN3CE3XKXlAEVxgdbo62ndrawfCc8TkPHyh%2BEzLV3g%2BPcaKR8eyUmOOAO9UvjdO1DX6icTstpFIn9KkI9oAdXYSFPb9fT7XJMnzJHvvtZXbYdUPN9lB5S99lSjBI53DMeV7ldNn9bxml9kI5c3xvziMiilo3ArXrYI5CaswEAAekM0rNRM3va%2B0jco%2BYFpnuN%2Fp48rQa5xAYXLSB3zS0Q%2BwIHBqH6KBEm6uCkYmOHb2z46TmtaMIz8E83MltNozbyylXVWdkFZ9nDV71UkAbnoM%2Bs%2Bz7ecJILY7Wmdo9AUK6HH0fMEmCWUL%2FlJ2sG5BwVV5Jp6fHG%2BDyWQqIb20uKCQyGsE6p1%2Fd7xBr8PUvxmMyWDrXRK0TKb9yatYWVDxFddH2NpZFisTlj6Nx7%2FJet6%2F2V8YQ5bOxUbN0ms6KizGu9PFzmvG9RlEMWCex%2FLm0ZIRaVta%2FxLjrucyvTEEjBJL16ztlVGdN3B%2FXS0DdEBS26xScGasJGQvyKHYedY5WcDz4qCEDXtgSS83TxCJvXISado2qivB8wGrYIBMw3dHYyQY6pgGDCehd86RbaAh4HPRH8%2BSp7Vc3bnMJXqiRma37fVbroVBA05sYmftaKradOJluyGKjJ7D0jbheNIPUDUShOXo4Goa0i9T71D%2F4RP%2FrkKnQ8eM3Ic5jOyVrbegB981Qy26tdDLQ8OGOZzh8E9Frb8yxLIMKqeDgnPvPJA7sZfVho8I561IPpIjzeVlU6mITF3Qd87abKhBdkVzXRJ5T8YachOgtk7jK&X-Amz-Signature=3266501458a5823b6a838c95b2d053c353289295e35d10b2fd77bb09258e8d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GA2NWU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDykYTP9i5N9TtUqL8rfiGg%2BmUQTaWOgEHPExwYdL%2FUiwIhAICcNtlGMCyKVg4XNy8ul2WvcX0KCOdsPdVeagUFZ5YMKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL4dmCG%2FkYk49XSiYq3ANf4wo0nSvySQi1ck6fXNXeldkZ4bRszcbdokhMTqsjjXufBNaq%2FUdhiiNRGdSIIUsobmT72ECOzA5UMDsNpUfahtUnctU65J2k3ZA3QhOqATtaPTe1juBtG9hmIs46HTiEx%2Ba2rlN%2F5B5Rm23qlD43leMiYq8%2B1RVu9iZC9YfJTnWNkO2WnNsibtoIzMuAQt5gSKMjcraWdcJbNKLP3tsJyfi8j3LVgtRoo99weQtilR1H66MvNtpfBwwiVZy2vpIEIlEdROAgUkSLqltA%2Bk4705UfGNsmz9ObvT9Pis0UQp5do2woi%2BviCzFHWTjyOjOlylXxvdJkfZNFarIrWH9tCvg75a5OZxr0fnK%2Frlvon1lsiLpZ3Ypwk5z8wd2GeD6kdk7zmD4i9bou8HKLUiNVwsTBOUL6suVoX%2BJ5BFzy%2BnJEpg8DYTrVFqgbRIq64I9PtYqYYyfWtVHUiQQ2hf2rsR09Zp%2BfgDqj0MZ57C1g6Y8Y8mkMMElWXfTgSzYQKyLntp81djm8ZMs9rDKMGve%2BZISE5Vf7O9FpI28p74QoaD4jVAeg6fHTAlDbuQ1KiHJX7JuH%2Fn2eoRtFT%2B3nRzp3RE6OH%2B%2FqMILwRAgf2CDzPu5J7D3RBjSd5%2FMojjDi09jJBjqkAWqyaITgHeUMvHnxm03o9ue5B0rzV%2BceYHXImiuB1vjLQEbwgcyUkb8xiA8NCwbO91Ef6GXm1yAHCKnhX7o1sFUuEbhf9R0N%2BNs2%2BcDiG111%2B31i%2F1HWVimEVixE6nozD8uyjvnY4Fg4i%2FA4nLlk%2BOyncEF5CNXa5fiKm4LrobHFghr1OcVvCPDD35akUMGDv2qZKNyJkRocvlbYJWImaG9DuezC&X-Amz-Signature=f453d7699ba5758710cd37597854583ccb187695400a3eafa0c0447139f9d980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPCN3IQX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqeo9kVQuDLRRFZZ8oDHFqLomFv4kDASbZiaUejoSy7AiAd0oMgznvUd7oaDxr9Lqoc%2BV9zEqO6Ldmnlws0BfoT4SqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4kEVpuvJDp967w5MKtwDkoU2%2F%2BzZ4BwN8stvcjV1O9PhBIL%2FzYWO1QomGqmWuQLvn37Rz6Ov%2BBYAEi3s7oaHoEBYrHYKBISs9rHahUCLF%2BX6B5ANj4Q4FaT%2FGegAm0lcXN17%2FNb%2BBKj45XFJu4IcYk%2BSS7lyFM%2F24bLMZvkLiLroyFTII6L4%2FMH3ztqIkX1WNDoqKlJszEoyff%2FYNJsN2rsHkg%2FdRxWKngMnFLdOzrsr%2FBEKD%2B%2FrnUlMXBW4RUOFTFNx3CiZEOrYY8Jq0sExszMuauoh63gGQHJkyYCjIy4K9godkvqs0f9xMpMNlJAOl%2FLNw4VTE3tGpHjDised7gZdhUI6X5GNPFyjIjfdVQqT1eHoSZwYDQZC4rLXxxBD8K3Vx0EvmE8jwx5PG4CEZpM1INDVJBv8E4MfKf0ajrdNCgntyUOKZ71%2FKUhPhii756ZNYvbtj%2Fkzcd5GKygApCWlNnAx9WKXQ0eE8McHXBLMLEOeT79kIRbC06xUJWbe6Mi2wkjbK%2BAzJ7y6KR6K8us3cmxbPQIbO46sHlmpqpS9Mt%2FViqPN2d3ByWJ9sAAs5vHp6MNBMJ6CywOhjD94RARhNDJOjvcLgrVNSWs7PcFRRQ2vWO%2BPH46Rsu2VlYWo1fXhwOrvw6TPcpIw4tPYyQY6pgGZ3J6B%2FC78tbsaFwUttVZOsAdkux5C8QvgBqX2JG8xIxS4n2%2BJ2jeUXHwGDaPN3BYfTwIkGlNmusg7PXIGzDD%2BwmoJtEjNXgatIBonxDuahmM8A9vzSx1KQET6cYjr9nEG0vqBoi5bvJHJ0xzGoSdjn%2FJRz77alxre2XzySUZIDIdIffwsL6o%2FBhQh8EJbgeq1%2FdCxFW5ewgX08%2BzVfur8O%2Fz%2Fa01%2F&X-Amz-Signature=0d45b622fe4387acdd361a590286b52a774c4deb25ee26eab763c9c36c5b230e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GA2NWU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDykYTP9i5N9TtUqL8rfiGg%2BmUQTaWOgEHPExwYdL%2FUiwIhAICcNtlGMCyKVg4XNy8ul2WvcX0KCOdsPdVeagUFZ5YMKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL4dmCG%2FkYk49XSiYq3ANf4wo0nSvySQi1ck6fXNXeldkZ4bRszcbdokhMTqsjjXufBNaq%2FUdhiiNRGdSIIUsobmT72ECOzA5UMDsNpUfahtUnctU65J2k3ZA3QhOqATtaPTe1juBtG9hmIs46HTiEx%2Ba2rlN%2F5B5Rm23qlD43leMiYq8%2B1RVu9iZC9YfJTnWNkO2WnNsibtoIzMuAQt5gSKMjcraWdcJbNKLP3tsJyfi8j3LVgtRoo99weQtilR1H66MvNtpfBwwiVZy2vpIEIlEdROAgUkSLqltA%2Bk4705UfGNsmz9ObvT9Pis0UQp5do2woi%2BviCzFHWTjyOjOlylXxvdJkfZNFarIrWH9tCvg75a5OZxr0fnK%2Frlvon1lsiLpZ3Ypwk5z8wd2GeD6kdk7zmD4i9bou8HKLUiNVwsTBOUL6suVoX%2BJ5BFzy%2BnJEpg8DYTrVFqgbRIq64I9PtYqYYyfWtVHUiQQ2hf2rsR09Zp%2BfgDqj0MZ57C1g6Y8Y8mkMMElWXfTgSzYQKyLntp81djm8ZMs9rDKMGve%2BZISE5Vf7O9FpI28p74QoaD4jVAeg6fHTAlDbuQ1KiHJX7JuH%2Fn2eoRtFT%2B3nRzp3RE6OH%2B%2FqMILwRAgf2CDzPu5J7D3RBjSd5%2FMojjDi09jJBjqkAWqyaITgHeUMvHnxm03o9ue5B0rzV%2BceYHXImiuB1vjLQEbwgcyUkb8xiA8NCwbO91Ef6GXm1yAHCKnhX7o1sFUuEbhf9R0N%2BNs2%2BcDiG111%2B31i%2F1HWVimEVixE6nozD8uyjvnY4Fg4i%2FA4nLlk%2BOyncEF5CNXa5fiKm4LrobHFghr1OcVvCPDD35akUMGDv2qZKNyJkRocvlbYJWImaG9DuezC&X-Amz-Signature=2fe455f52073eee4c00cfa1442ab39820594cb05c5884671ddbe6e0582700550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z2VHVYR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7BfiqOU5yZ716FS7MZUqO0fTlozALKz2nBxEvZBoDxAIgZQJAZrJQgcNbYjjee8SaZWphbXHGwteqIZeDXmWuXLUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmAHLNPpjqAxF1JySrcA4%2FlAtnd9YkV0viO78jnszelY1eAQ9kcGeQpxuIO%2FXD3p%2Fni73YGmZCTfGfhJxBNzZLr0yergAbfwBfPkJ8pYR3vhZXSUYwgnNK2hw%2FuuzIrtgk9GXkXhWAf6xf9bR%2Fqbj%2BXeTTfYEymVsVFoCEse1yI9acNutkDBcOz6gPr6OaN2WpXok%2B5Cz7ZNZPy%2Bms49b049pfZwUukEuWpQtFh8ys97L3%2BfyLQSjW3s23w%2F%2Bp7ftJdTh38B6Tvmq1GXYDKwwT0mBuRyDHaoN3J7LxZstpJt2lYHyhHLLpi2ems9Qy2ZNmYKwekBcM56HqCKPFRqPMLf2Y%2Fe%2FKHP8y44JUGeeFbdYBuwz24CsECVAtd%2FsIg6Rb5hvsIxnxs7j8CejiPeSgaRifEpKk1eNp7exP3rG9nid4NgTs4SBJn5bTk9t8qx68mkbu5c3L%2B%2Bk6bTdCnDOiA1RFTpmCHpi4SSviOAt1qWMq41udIsXTqnCtA%2FxAzR8IyoNc5Z9V%2FGTUWaN6OoxjmzsRIeyfxLaWjo1dtT42LgW7Cza%2F9ywZItKf1k80fu99I%2B8qCwNqDSNRg55QKVQ2Pg4UJ6w4iqVL7uWeqe%2FD4%2FOiaQinvwoYUiv0XnnSlNea0qYc%2Bn%2FOnOqOxMKzR2MkGOqUBk9d4hLffsMOrCIS7ggpGi%2FFqrEnbu6Rhk8Y2gfr%2FMOXTSj8KZ48GHz5DfohNfmdkezDoqUnwHPRIYLTqUOdTbQna6BDHu902V8KTSAYOdux%2FTJVWlQoL%2FhtT1nVxSa51913htbQt%2FOPgsXSrK4fxIJS4sGAGUV3up%2B%2BI3L%2FXL6b2%2F7QiXca2Or1suVISILi1pzLjh%2FRbH2UVg5XtcHbJAyxwOD0k&X-Amz-Signature=a93f1c6b2a1c3a15340620cb3c489e3f3c2d6eae1b8a732455e030891d84cad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GA2NWU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDykYTP9i5N9TtUqL8rfiGg%2BmUQTaWOgEHPExwYdL%2FUiwIhAICcNtlGMCyKVg4XNy8ul2WvcX0KCOdsPdVeagUFZ5YMKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL4dmCG%2FkYk49XSiYq3ANf4wo0nSvySQi1ck6fXNXeldkZ4bRszcbdokhMTqsjjXufBNaq%2FUdhiiNRGdSIIUsobmT72ECOzA5UMDsNpUfahtUnctU65J2k3ZA3QhOqATtaPTe1juBtG9hmIs46HTiEx%2Ba2rlN%2F5B5Rm23qlD43leMiYq8%2B1RVu9iZC9YfJTnWNkO2WnNsibtoIzMuAQt5gSKMjcraWdcJbNKLP3tsJyfi8j3LVgtRoo99weQtilR1H66MvNtpfBwwiVZy2vpIEIlEdROAgUkSLqltA%2Bk4705UfGNsmz9ObvT9Pis0UQp5do2woi%2BviCzFHWTjyOjOlylXxvdJkfZNFarIrWH9tCvg75a5OZxr0fnK%2Frlvon1lsiLpZ3Ypwk5z8wd2GeD6kdk7zmD4i9bou8HKLUiNVwsTBOUL6suVoX%2BJ5BFzy%2BnJEpg8DYTrVFqgbRIq64I9PtYqYYyfWtVHUiQQ2hf2rsR09Zp%2BfgDqj0MZ57C1g6Y8Y8mkMMElWXfTgSzYQKyLntp81djm8ZMs9rDKMGve%2BZISE5Vf7O9FpI28p74QoaD4jVAeg6fHTAlDbuQ1KiHJX7JuH%2Fn2eoRtFT%2B3nRzp3RE6OH%2B%2FqMILwRAgf2CDzPu5J7D3RBjSd5%2FMojjDi09jJBjqkAWqyaITgHeUMvHnxm03o9ue5B0rzV%2BceYHXImiuB1vjLQEbwgcyUkb8xiA8NCwbO91Ef6GXm1yAHCKnhX7o1sFUuEbhf9R0N%2BNs2%2BcDiG111%2B31i%2F1HWVimEVixE6nozD8uyjvnY4Fg4i%2FA4nLlk%2BOyncEF5CNXa5fiKm4LrobHFghr1OcVvCPDD35akUMGDv2qZKNyJkRocvlbYJWImaG9DuezC&X-Amz-Signature=b7c52d63f7af1e1499fbe2571cd4d27f7890518875e31431ebb267e977d85757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NEAEZLL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLuTc%2BQzPfFir4nZ4wuXhXXwDoV4%2BpBRpeLKJ52i0Y%2FAiA3g60rrVdzoFygSBiLkRSrMrxAdC%2BTKw6UmzU02is0giqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCkuZlgVkjfgN7g84KtwD7WodWKZIirB98TumTPqJ4GNhwPaYC8Tp7yYI6qb3zISZCo7PTfIwP4iDRElM6BnvKrcjhvM1dAqdBuVl%2FjcNv4QZxUEEskINCOpugmsItWhkw%2BU1oem%2FiutMIUBwxmgwfIIqnWFqjmXW%2BJxxVM2I1KU%2BcaEoLn0R8yW13GGdYj77VJAGbO%2BUtujSiYoSoL7tYoDPSN1weOM0HeTmGvFF9BdYIVv%2B63Y9%2FIU4FicDu90dCnHIGHyhw9ofrh4x%2FiVmSJBpL5O%2F3Au3aALJ%2Buyalah96akzwaOeVIpuFxvN1Q53d%2FGoEAIhbad7jzo0DpJsjYuYCOYtVJ4rKDqSRhCsXy4bdmu1k76r%2BbjGWtVRfuE7U9x9lSOVWothyqD615RV%2B4nHO3YCYlt6dvzCFnbbw8wREJz6F15kYX6R6%2FmK26IbMd%2BoT%2B32K5QlEqD9Hlhlw2n%2F19Ocl41Lu2GqpCIWwcN6Z4v1A8dYZp1zzAs6BaCDHoYLALhhXcAbeKjPhFdaDsa6m4zP58kk%2FgijjM%2B8%2B%2Bh7WXEy%2FoHkWgTyOa2dgZPKPKKbbCbE5f8nsxcgca5cjWQ6%2BTYYM5iXPXx1eub%2F6FfOAmrcQIM3phutv1hwApli4jw0d33Y6Xv7%2FR8wwNHYyQY6pgGQHpcQoIYdtjGlAN66zXDG1edDhRCPuQ4ZVaLDYSQQ1YEB8RcMRcTS3AnqzzmCp%2BbCceVtuUJmNKz5XrYPe%2BRpwyl94ctVDmZCFge6YENlfEZoI%2F8EKybDNB%2BwKTPJbc%2FGKsrT5PlFLRKurmCRmjUeH%2FaMfl8LVB2CknQlfxZdyrcJukP634cLdl2VHbasGQfBTyc7RSy2ygdHSonh1nv%2FaNFx0eGM&X-Amz-Signature=52e8c84c874c63b8471b2964c872c13a25460308278f35076948120daf4418c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GA2NWU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDykYTP9i5N9TtUqL8rfiGg%2BmUQTaWOgEHPExwYdL%2FUiwIhAICcNtlGMCyKVg4XNy8ul2WvcX0KCOdsPdVeagUFZ5YMKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL4dmCG%2FkYk49XSiYq3ANf4wo0nSvySQi1ck6fXNXeldkZ4bRszcbdokhMTqsjjXufBNaq%2FUdhiiNRGdSIIUsobmT72ECOzA5UMDsNpUfahtUnctU65J2k3ZA3QhOqATtaPTe1juBtG9hmIs46HTiEx%2Ba2rlN%2F5B5Rm23qlD43leMiYq8%2B1RVu9iZC9YfJTnWNkO2WnNsibtoIzMuAQt5gSKMjcraWdcJbNKLP3tsJyfi8j3LVgtRoo99weQtilR1H66MvNtpfBwwiVZy2vpIEIlEdROAgUkSLqltA%2Bk4705UfGNsmz9ObvT9Pis0UQp5do2woi%2BviCzFHWTjyOjOlylXxvdJkfZNFarIrWH9tCvg75a5OZxr0fnK%2Frlvon1lsiLpZ3Ypwk5z8wd2GeD6kdk7zmD4i9bou8HKLUiNVwsTBOUL6suVoX%2BJ5BFzy%2BnJEpg8DYTrVFqgbRIq64I9PtYqYYyfWtVHUiQQ2hf2rsR09Zp%2BfgDqj0MZ57C1g6Y8Y8mkMMElWXfTgSzYQKyLntp81djm8ZMs9rDKMGve%2BZISE5Vf7O9FpI28p74QoaD4jVAeg6fHTAlDbuQ1KiHJX7JuH%2Fn2eoRtFT%2B3nRzp3RE6OH%2B%2FqMILwRAgf2CDzPu5J7D3RBjSd5%2FMojjDi09jJBjqkAWqyaITgHeUMvHnxm03o9ue5B0rzV%2BceYHXImiuB1vjLQEbwgcyUkb8xiA8NCwbO91Ef6GXm1yAHCKnhX7o1sFUuEbhf9R0N%2BNs2%2BcDiG111%2B31i%2F1HWVimEVixE6nozD8uyjvnY4Fg4i%2FA4nLlk%2BOyncEF5CNXa5fiKm4LrobHFghr1OcVvCPDD35akUMGDv2qZKNyJkRocvlbYJWImaG9DuezC&X-Amz-Signature=c6da09bdfc22db89bc37bbf20ddd23d121bd4cb8387846c243e5167ade4f0108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFAB7W2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHL0AaCcmYJtPQ7wxkX4eFysRqTDwW1nuMKX7fPfSkglAiBVju%2BwRClvvIdGLzhPuICjNpYM2ig51XWkyOAkN6k%2FZCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX317kcs%2BrAixo7PAKtwDwh1RyD3jDx8H4SUp%2FEDqrK20T2%2FOfQY1fniCpnrjYTxxlXzB%2FP%2BFWYNcaf9h%2Frx9t6uG60Du%2Br1hyvZAzKtCiEdNGNDR331DFggSjYDFV9YflQMFHY5lZJgjsYZ%2F25CBgzM7DvaJWO4vzkC0SVp66LAF4PNQd%2F%2BxRa9RPDa2ivtuyRR8jHNOHTa%2FBLgoW9y4k84Pzq2RNX8fAlJTknBAPlpuM2iIGXGkI8D1NpUSTL6%2Fpm3dGMJ72QPkFaaeRJqGi8LEV7fI56sR%2BUrTDkGjMKu6lGpYOjbnPHYjOdJ8qv1RRgaRS%2BPG%2Ff35IdksWK3KXuoma8She%2Ff9LtFAqMByEDghsh9yy1aim%2FQWmF7zN0moTcefPZ4754YcV6lBDcqfh6GqmsNsJfhmg8YGPDLlTZhikCr%2FjR%2FLCxJlQYB7UX%2FG3w7KV0UID2xLmM3W%2BECCe9vvJL43UjvUHwjtPhEiA7DOz6WIj9X5BZeckfen7ChcAxiEGWXHtN5gxmFV8oZfMCAJ%2BeXBSlfZpWTSs3UwXEoe1aW%2BNvCkxVS%2B0UuGK3akWPoD3%2FLgO%2FwrSvPI5xWc8vfriNWn0TlPzt%2Fp16EkmHDRhabNLqATx%2FI%2Bc0rAFpnEtMsHsql6JVxY2eAw1NHYyQY6pgHi%2BfenPF5NBCAT5EFgcWfoKKMxYz25DeTzDzG7zcBzA0qxkMYq5p92zSDozDv1v7LNDXRc5NKpnu7feG9nNsFbUj8wTqIvpHTUmtnX9RvmWjpWvNaEAL8D2SFVEZps3cTJgx1OCLCUS5eoOavNn5NYGBCBaiLiV3H9rTLIN5FkAd0Jl0YcDyCTrotHtafyhnRhlWkaMXT%2Bm%2FG3pa%2Fx97knDVn19Qj%2F&X-Amz-Signature=ac6d8ebb5ee57912535bdb9f41d0740eb05819e29d3417365d6feffeb325e67b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GA2NWU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDykYTP9i5N9TtUqL8rfiGg%2BmUQTaWOgEHPExwYdL%2FUiwIhAICcNtlGMCyKVg4XNy8ul2WvcX0KCOdsPdVeagUFZ5YMKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL4dmCG%2FkYk49XSiYq3ANf4wo0nSvySQi1ck6fXNXeldkZ4bRszcbdokhMTqsjjXufBNaq%2FUdhiiNRGdSIIUsobmT72ECOzA5UMDsNpUfahtUnctU65J2k3ZA3QhOqATtaPTe1juBtG9hmIs46HTiEx%2Ba2rlN%2F5B5Rm23qlD43leMiYq8%2B1RVu9iZC9YfJTnWNkO2WnNsibtoIzMuAQt5gSKMjcraWdcJbNKLP3tsJyfi8j3LVgtRoo99weQtilR1H66MvNtpfBwwiVZy2vpIEIlEdROAgUkSLqltA%2Bk4705UfGNsmz9ObvT9Pis0UQp5do2woi%2BviCzFHWTjyOjOlylXxvdJkfZNFarIrWH9tCvg75a5OZxr0fnK%2Frlvon1lsiLpZ3Ypwk5z8wd2GeD6kdk7zmD4i9bou8HKLUiNVwsTBOUL6suVoX%2BJ5BFzy%2BnJEpg8DYTrVFqgbRIq64I9PtYqYYyfWtVHUiQQ2hf2rsR09Zp%2BfgDqj0MZ57C1g6Y8Y8mkMMElWXfTgSzYQKyLntp81djm8ZMs9rDKMGve%2BZISE5Vf7O9FpI28p74QoaD4jVAeg6fHTAlDbuQ1KiHJX7JuH%2Fn2eoRtFT%2B3nRzp3RE6OH%2B%2FqMILwRAgf2CDzPu5J7D3RBjSd5%2FMojjDi09jJBjqkAWqyaITgHeUMvHnxm03o9ue5B0rzV%2BceYHXImiuB1vjLQEbwgcyUkb8xiA8NCwbO91Ef6GXm1yAHCKnhX7o1sFUuEbhf9R0N%2BNs2%2BcDiG111%2B31i%2F1HWVimEVixE6nozD8uyjvnY4Fg4i%2FA4nLlk%2BOyncEF5CNXa5fiKm4LrobHFghr1OcVvCPDD35akUMGDv2qZKNyJkRocvlbYJWImaG9DuezC&X-Amz-Signature=55176496df66581962ea7eee5b0e091dd1d83c50f2ac2faefc81d09926e09606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2QBAY57%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxX6WQmQp3W9uD8Gyqgcxgy9YTGxv8bNs%2B7bDZ%2FZ6dTAiA8fhwfR%2BaU8sWN%2BpcXDr%2BFUUGwp5lOvz4EZA7dR1cXjSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVBRuO%2Blqc3nCDPl%2FKtwD6Ifop4whp0kPcxOCVoXXJLM40AgGs7nFn8EuICKuZu4fdD%2B%2Fe53xWWUJiILJMZcKvbL6ztnfDIKMHzKlnxgQZ0FHz3y%2FvAJYi81T3Jm2PjIBMQhOL09%2FELKhSWlrMI6eANbbq%2BQB0VwW6hOOCo23bkybEu8RsDR5lnT7QDN%2BA6Y1%2BAJOVyZ6aU2Z1a%2B0TnDH5cuNB92Gqx6JHR%2F95ORLNWlbZrK%2FKTN%2BF15XzwOftSW3O0J%2BmD0dJwKK39Gtujfpcrdmyc3OelCRulDrR7%2Fng2%2BSWm6uoyYSwyT4dm9sWAxEHnd8jCbVgI%2FSU4FzX4M530%2BC%2Ba8k3HMTQjJf4AHfnZ9v8inRTPfZZDW%2BPPtKcaoUe%2F%2B%2BN%2BwRbz%2FDY4FfdIj8CmWYkh6iZe2ga3oFJAZfT3723A%2BizMAX2GPoK9bWbwEyzBIBoEv%2Bz%2FnS6UssD9p8YuL6E9ynHFXeRDR8jHpTf6jhxo%2BizTZ4mhRTVrkcXRoScJ1iAEaAvm2hrYe5OMTTaGxwF6TQV4HVZ3Vx0N%2F%2FMyv4IkARxj2R8fVWstVXsmejpwKtsNgVn8gOx7ssI0eqall7ubDiJho1rEEEW5Pg8dE9UdPO2ORfCF3IGGueKD%2Bkt61CU6cL7Zep%2BOAwiNHYyQY6pgGSKUqCJNQcScc%2BvqHygeD73BE3AgLENb4oR7QB5PQHWpB7z7lBRdwvzFRRleTwGUfhQIzUWr955mvxIKcQ4KTijNz55dinkMvkCz0qSpOxqRoK%2F6WSTXmTDJTV7O3yNha3kc%2FpcNFmVp49zdJp59Y3%2BI0k%2Fja1a%2FUftS6FOnuy6V96%2BU1qSoFfLSe5Wy%2B5pqy7tOmbJA%2BNWQvuGlS9nC%2Boio58nu4K&X-Amz-Signature=fb1e61d89e0740793b979bf810a8c2a95566c4ff516af4acd77266c4a937df87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHTLCBJO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgtyNaoRLtUFhsv9X5YiKtVWrO31UXa5UpCayrAAlZuAiEA9EbPBGB5z1LKy2Fj2Hy0YPyoid2iNHmXl%2BRRN83JR1EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAy5zg3VL%2FbUeQGg7SrcA554IU84C3leu4HZxhqVCB%2B%2BSPnaaAia%2BakNtTEZxf3FutF64vFapy88GM%2F0kgqZyABTI9VhMVJoJVQ0YZNNs%2BOZEqup9eyKbfdE6h8PLr1liO7gi%2FwFtG%2B7IbXmoXfnMqtcRrorQtZbfIAHsOZIJKsEY5oUGoWWdP5nh30BxQBEa7q7n1fZ0zlWy3GFPFhIFt%2BESR5MW9EksFSI1kNBN8tVIF65iVk1ZoEKfXjlviLRfxYw6nPcmU%2FL5b6BD%2BCBLdtU6TPOtIe96vn%2FFcTPJnVVjBhOJIAUiihUof%2B2fS3nCNECf%2FlpMUWvmfYiWQPeENHQJM%2FBu9Wh6aiABMwt7qFbcuOmk0cuOBNJu7vO6hgVli199oiqdnWAIW%2FiGFnL6CTPn1QYFNDT%2FI1T%2F8Av8s3w%2FK7%2FTKi8MWjPADVqRqBLk6A1jl0HnNNj0cKjN%2BV64frj7CxdNHw%2BaVv%2BnXyk6G3Bxb0pCiHzZdXKoR3YNghWfxNog1iv061DLVLuoJ9gEdiRXRGFPRqx3BlRyZuMlOvAC4M84WBvVOaH8WeuCLAPdJiSTe2KMJA7d%2BhMxLgGoXGc2cvQQAFtLq8uvc3A%2Fj3MBrka%2FQXhxJqzG8CFRrvpJZ06ixvRDge6kNEgMLTR2MkGOqUBr53m49kXujmexkJKKkkGQt7a72uj9kQitvZq9oe0CqT9BRRqyBrWGWLFDahLToSnWfXz96nczW7jvlsH4tHtakqa9mlhxTXyi5JQ3qGEXzmbFM%2FFGU%2BhZuIEMtC1JLiEqpXklU%2BO0X8X7A9KBNihbPQCRrfrgnHXTR9O1P%2BNZR%2FD0cwHY4uOkElQHr0Wkd1TPwNxE91vsLDp1dwg5Txa4q%2FEuFdJ&X-Amz-Signature=5e7e46180b431831de3a51577b33199220ff7dc79bdaac2a82a37763a3f7ba23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQDDUKTZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiKnnW3Eqn2IdNNhdMtQcqBeGtsyfkES0YOYTSaw7HDAiEAvfVgb%2BhOzU4tAzi%2F1O05%2B39Uv7f1X9zIjYOYe196DVcqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVlm7IWPtZ4IfXMPCrcA2DekMGWFvKF3Ng5jj59SfsCWhTB%2FjkKYNtTEkHXIjwCbZLcN012xl%2F%2FI6MerxhzwIdTCL%2B01ER211Ij8Wenqf%2FcFyHZTXWXnLkq4vgQRFWf1W6yLCUyu58Ja2DTSMSl8i3MzQ9uQ4Zsch%2BbseY4XJvqFjXKQGcpq0ghfbcihsac%2BLLBBzSV4VHCF95szQ7iDbrC7%2B94sMIBQQKPn6D5TKdQWiIdzi5trAfF95968HREAx7wDe6e%2FccO6HOLMf1nMW2JZdci0yviuGZ2dsPxV0%2Fe5fEXtkrWHIXIRMSGwngsUP1Omz4mUqPGX%2B%2FpYE9XKp52hiujossEr7EdxIyPRzneLBAawo8%2FHSy83DFp0G98As2LTjfK2iPn%2BlnX0YTDEU%2BDOi9FIgz2WU8l1cuHuW64pXB2NfnVUMJd0iCQVuWULBj9LlyMP7Gb3KU8lOTnQXREimCiWrX8vkH%2FCb%2FvbJhb25Tc4uIoU5C7yQUVXzSxj%2BAsWbzT9gG2Vr5tQEg8qd1yNcBid0kyghs1WRHiznG2A6r8KBV6Qi%2BlNCKIER75dbWXb1RowKnXx80PSRCpBuuEpEd2e%2F9oYKO51oPX2AaAgQTARxqT2gNYIhpMPoZW1YOPrvRwuz8N3Ed5MOfR2MkGOqUBtTsUC7Kdl2i%2F4F%2FTDg4U56iIEupAnu0uMQsHB0kpwhkjqe7uMvbVllyVV%2FzTWuHTftnDuj3lVYhzoqeILQQ8aO657%2F%2FUflvsKRDixFKlynsmQdCs80aRoxXPzfvQsYN4DwCkDqiywn%2FhbChJ9hQUooXD43xcp07rJm8Jt51G9xwJsNNEwjtfIYfkOx0Xbvau1AdWLhjtGBpaNuB7efWIbOrDVZFM&X-Amz-Signature=3233151e5a11aefd097f0fb324accef110a058e7b5d926883e6c304ad0a87638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GA2NWU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDykYTP9i5N9TtUqL8rfiGg%2BmUQTaWOgEHPExwYdL%2FUiwIhAICcNtlGMCyKVg4XNy8ul2WvcX0KCOdsPdVeagUFZ5YMKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL4dmCG%2FkYk49XSiYq3ANf4wo0nSvySQi1ck6fXNXeldkZ4bRszcbdokhMTqsjjXufBNaq%2FUdhiiNRGdSIIUsobmT72ECOzA5UMDsNpUfahtUnctU65J2k3ZA3QhOqATtaPTe1juBtG9hmIs46HTiEx%2Ba2rlN%2F5B5Rm23qlD43leMiYq8%2B1RVu9iZC9YfJTnWNkO2WnNsibtoIzMuAQt5gSKMjcraWdcJbNKLP3tsJyfi8j3LVgtRoo99weQtilR1H66MvNtpfBwwiVZy2vpIEIlEdROAgUkSLqltA%2Bk4705UfGNsmz9ObvT9Pis0UQp5do2woi%2BviCzFHWTjyOjOlylXxvdJkfZNFarIrWH9tCvg75a5OZxr0fnK%2Frlvon1lsiLpZ3Ypwk5z8wd2GeD6kdk7zmD4i9bou8HKLUiNVwsTBOUL6suVoX%2BJ5BFzy%2BnJEpg8DYTrVFqgbRIq64I9PtYqYYyfWtVHUiQQ2hf2rsR09Zp%2BfgDqj0MZ57C1g6Y8Y8mkMMElWXfTgSzYQKyLntp81djm8ZMs9rDKMGve%2BZISE5Vf7O9FpI28p74QoaD4jVAeg6fHTAlDbuQ1KiHJX7JuH%2Fn2eoRtFT%2B3nRzp3RE6OH%2B%2FqMILwRAgf2CDzPu5J7D3RBjSd5%2FMojjDi09jJBjqkAWqyaITgHeUMvHnxm03o9ue5B0rzV%2BceYHXImiuB1vjLQEbwgcyUkb8xiA8NCwbO91Ef6GXm1yAHCKnhX7o1sFUuEbhf9R0N%2BNs2%2BcDiG111%2B31i%2F1HWVimEVixE6nozD8uyjvnY4Fg4i%2FA4nLlk%2BOyncEF5CNXa5fiKm4LrobHFghr1OcVvCPDD35akUMGDv2qZKNyJkRocvlbYJWImaG9DuezC&X-Amz-Signature=21cc0fbb45f71f4d7f20bb5be3e0131da81c6ff2ac2243114bf06628baf7be05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GA2NWU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDykYTP9i5N9TtUqL8rfiGg%2BmUQTaWOgEHPExwYdL%2FUiwIhAICcNtlGMCyKVg4XNy8ul2WvcX0KCOdsPdVeagUFZ5YMKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyL4dmCG%2FkYk49XSiYq3ANf4wo0nSvySQi1ck6fXNXeldkZ4bRszcbdokhMTqsjjXufBNaq%2FUdhiiNRGdSIIUsobmT72ECOzA5UMDsNpUfahtUnctU65J2k3ZA3QhOqATtaPTe1juBtG9hmIs46HTiEx%2Ba2rlN%2F5B5Rm23qlD43leMiYq8%2B1RVu9iZC9YfJTnWNkO2WnNsibtoIzMuAQt5gSKMjcraWdcJbNKLP3tsJyfi8j3LVgtRoo99weQtilR1H66MvNtpfBwwiVZy2vpIEIlEdROAgUkSLqltA%2Bk4705UfGNsmz9ObvT9Pis0UQp5do2woi%2BviCzFHWTjyOjOlylXxvdJkfZNFarIrWH9tCvg75a5OZxr0fnK%2Frlvon1lsiLpZ3Ypwk5z8wd2GeD6kdk7zmD4i9bou8HKLUiNVwsTBOUL6suVoX%2BJ5BFzy%2BnJEpg8DYTrVFqgbRIq64I9PtYqYYyfWtVHUiQQ2hf2rsR09Zp%2BfgDqj0MZ57C1g6Y8Y8mkMMElWXfTgSzYQKyLntp81djm8ZMs9rDKMGve%2BZISE5Vf7O9FpI28p74QoaD4jVAeg6fHTAlDbuQ1KiHJX7JuH%2Fn2eoRtFT%2B3nRzp3RE6OH%2B%2FqMILwRAgf2CDzPu5J7D3RBjSd5%2FMojjDi09jJBjqkAWqyaITgHeUMvHnxm03o9ue5B0rzV%2BceYHXImiuB1vjLQEbwgcyUkb8xiA8NCwbO91Ef6GXm1yAHCKnhX7o1sFUuEbhf9R0N%2BNs2%2BcDiG111%2B31i%2F1HWVimEVixE6nozD8uyjvnY4Fg4i%2FA4nLlk%2BOyncEF5CNXa5fiKm4LrobHFghr1OcVvCPDD35akUMGDv2qZKNyJkRocvlbYJWImaG9DuezC&X-Amz-Signature=b6d8c1d4169aa7dcc31070bbff322b681385e36288db5f15470189285309d4db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NC5KEC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoyyZEFV4Diuqes%2FDQGsGPEM4u6M8VgCHKK5CNuIFRDAiEA%2FKhntgMtbyYd6du%2B5GV9Uwd%2FulHhr%2FI9qvZFB61ayeAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCcK8J1C1cRoxPoUCrcA9spMsD26QINZfNyeTanTD%2F8noAyyWIxAoqAXPxixKZl43tJdudsdKCmFtyfGgJVcshthL16e%2BLrS1Lut2uw2j7Cr9R%2FexALS984TDSaYXOz688BsJLjO9gu4YxpOjPaxPtnTcTsWb5%2BNPI8bUIuJTCjvqyttD6a0LupoZz25NLHz5dJa%2FFSDHP4mXNoHa5K8blCn8PVxj2O1wFvYwTldz5QBTem%2BtFI7cRlIfA04wtQy1yIQSk5QqF%2BSBkZAvz%2ByFZWosvORlcvAeaNdP0dqwiyn16VodFblZECqTVO%2BWc%2BD8apK%2BpLVd2IbOsc03sR4kfuEGY%2FotY2WaZHn%2F8aGmgaPBqI2xm%2F6rzTPsDsEB%2BZxBnLwpzZEuNCbkgQvFl2GP7VBqt9qMSU9bqXUjlVDGfeh5yZ3ybguNdVibdLZX4RFrDqUL2nk8UOUb6F5uDxGsZn%2FOCqwRyTKuWTjtKmORIQtug08w6MK46RGc%2F04nU%2BWyTxCgV8LRNhjr%2F8xn818ecFFgcNKBJWzkwvqRzGrmOXVj%2FViC9ftkX2hTGRUK1fy8SdCIp8dTNh2XfSuwSZxBqIhx7X%2BWlOxFS3xXckcQjgSPJLDwxVNdcOx%2F6yWU53EzBO%2BNn4OYdjW33BMObR2MkGOqUBc238ZRw3nK8pw31S%2BZK%2F74sSCj3ROg37fQ8yJQGAEzINjCN1DzghtmNXBY6asMne3xtM6HUCIfWf7J0e3dNOdIlnoDaLUTZZXH8WmBDhuYh32C8a9NwpFbEaaMRL4u6UyOQhv7V7Jdkof77TBWes92B9PGTDhI%2Bhw%2BMXFGqWhp7VLidr2h%2BYRjotI3eSb4dM51hN13Snp5HP%2BA9zOTH9IYFj%2FEh2&X-Amz-Signature=43ba9ea72a1f70491ba6a83885c0f2523061c0f1f52c4a2541ad56a12b99423b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NC5KEC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoyyZEFV4Diuqes%2FDQGsGPEM4u6M8VgCHKK5CNuIFRDAiEA%2FKhntgMtbyYd6du%2B5GV9Uwd%2FulHhr%2FI9qvZFB61ayeAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCcK8J1C1cRoxPoUCrcA9spMsD26QINZfNyeTanTD%2F8noAyyWIxAoqAXPxixKZl43tJdudsdKCmFtyfGgJVcshthL16e%2BLrS1Lut2uw2j7Cr9R%2FexALS984TDSaYXOz688BsJLjO9gu4YxpOjPaxPtnTcTsWb5%2BNPI8bUIuJTCjvqyttD6a0LupoZz25NLHz5dJa%2FFSDHP4mXNoHa5K8blCn8PVxj2O1wFvYwTldz5QBTem%2BtFI7cRlIfA04wtQy1yIQSk5QqF%2BSBkZAvz%2ByFZWosvORlcvAeaNdP0dqwiyn16VodFblZECqTVO%2BWc%2BD8apK%2BpLVd2IbOsc03sR4kfuEGY%2FotY2WaZHn%2F8aGmgaPBqI2xm%2F6rzTPsDsEB%2BZxBnLwpzZEuNCbkgQvFl2GP7VBqt9qMSU9bqXUjlVDGfeh5yZ3ybguNdVibdLZX4RFrDqUL2nk8UOUb6F5uDxGsZn%2FOCqwRyTKuWTjtKmORIQtug08w6MK46RGc%2F04nU%2BWyTxCgV8LRNhjr%2F8xn818ecFFgcNKBJWzkwvqRzGrmOXVj%2FViC9ftkX2hTGRUK1fy8SdCIp8dTNh2XfSuwSZxBqIhx7X%2BWlOxFS3xXckcQjgSPJLDwxVNdcOx%2F6yWU53EzBO%2BNn4OYdjW33BMObR2MkGOqUBc238ZRw3nK8pw31S%2BZK%2F74sSCj3ROg37fQ8yJQGAEzINjCN1DzghtmNXBY6asMne3xtM6HUCIfWf7J0e3dNOdIlnoDaLUTZZXH8WmBDhuYh32C8a9NwpFbEaaMRL4u6UyOQhv7V7Jdkof77TBWes92B9PGTDhI%2Bhw%2BMXFGqWhp7VLidr2h%2BYRjotI3eSb4dM51hN13Snp5HP%2BA9zOTH9IYFj%2FEh2&X-Amz-Signature=d9bcc5e3a679eac47d8754661dc2ad0d4222f41d44da7eb05e19e3a6bc10914f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NC5KEC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoyyZEFV4Diuqes%2FDQGsGPEM4u6M8VgCHKK5CNuIFRDAiEA%2FKhntgMtbyYd6du%2B5GV9Uwd%2FulHhr%2FI9qvZFB61ayeAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCcK8J1C1cRoxPoUCrcA9spMsD26QINZfNyeTanTD%2F8noAyyWIxAoqAXPxixKZl43tJdudsdKCmFtyfGgJVcshthL16e%2BLrS1Lut2uw2j7Cr9R%2FexALS984TDSaYXOz688BsJLjO9gu4YxpOjPaxPtnTcTsWb5%2BNPI8bUIuJTCjvqyttD6a0LupoZz25NLHz5dJa%2FFSDHP4mXNoHa5K8blCn8PVxj2O1wFvYwTldz5QBTem%2BtFI7cRlIfA04wtQy1yIQSk5QqF%2BSBkZAvz%2ByFZWosvORlcvAeaNdP0dqwiyn16VodFblZECqTVO%2BWc%2BD8apK%2BpLVd2IbOsc03sR4kfuEGY%2FotY2WaZHn%2F8aGmgaPBqI2xm%2F6rzTPsDsEB%2BZxBnLwpzZEuNCbkgQvFl2GP7VBqt9qMSU9bqXUjlVDGfeh5yZ3ybguNdVibdLZX4RFrDqUL2nk8UOUb6F5uDxGsZn%2FOCqwRyTKuWTjtKmORIQtug08w6MK46RGc%2F04nU%2BWyTxCgV8LRNhjr%2F8xn818ecFFgcNKBJWzkwvqRzGrmOXVj%2FViC9ftkX2hTGRUK1fy8SdCIp8dTNh2XfSuwSZxBqIhx7X%2BWlOxFS3xXckcQjgSPJLDwxVNdcOx%2F6yWU53EzBO%2BNn4OYdjW33BMObR2MkGOqUBc238ZRw3nK8pw31S%2BZK%2F74sSCj3ROg37fQ8yJQGAEzINjCN1DzghtmNXBY6asMne3xtM6HUCIfWf7J0e3dNOdIlnoDaLUTZZXH8WmBDhuYh32C8a9NwpFbEaaMRL4u6UyOQhv7V7Jdkof77TBWes92B9PGTDhI%2Bhw%2BMXFGqWhp7VLidr2h%2BYRjotI3eSb4dM51hN13Snp5HP%2BA9zOTH9IYFj%2FEh2&X-Amz-Signature=4b129360bc99a62d906d4879e1337d7a1ce40def84bf40bf0240ab78c121e274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NC5KEC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoyyZEFV4Diuqes%2FDQGsGPEM4u6M8VgCHKK5CNuIFRDAiEA%2FKhntgMtbyYd6du%2B5GV9Uwd%2FulHhr%2FI9qvZFB61ayeAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCcK8J1C1cRoxPoUCrcA9spMsD26QINZfNyeTanTD%2F8noAyyWIxAoqAXPxixKZl43tJdudsdKCmFtyfGgJVcshthL16e%2BLrS1Lut2uw2j7Cr9R%2FexALS984TDSaYXOz688BsJLjO9gu4YxpOjPaxPtnTcTsWb5%2BNPI8bUIuJTCjvqyttD6a0LupoZz25NLHz5dJa%2FFSDHP4mXNoHa5K8blCn8PVxj2O1wFvYwTldz5QBTem%2BtFI7cRlIfA04wtQy1yIQSk5QqF%2BSBkZAvz%2ByFZWosvORlcvAeaNdP0dqwiyn16VodFblZECqTVO%2BWc%2BD8apK%2BpLVd2IbOsc03sR4kfuEGY%2FotY2WaZHn%2F8aGmgaPBqI2xm%2F6rzTPsDsEB%2BZxBnLwpzZEuNCbkgQvFl2GP7VBqt9qMSU9bqXUjlVDGfeh5yZ3ybguNdVibdLZX4RFrDqUL2nk8UOUb6F5uDxGsZn%2FOCqwRyTKuWTjtKmORIQtug08w6MK46RGc%2F04nU%2BWyTxCgV8LRNhjr%2F8xn818ecFFgcNKBJWzkwvqRzGrmOXVj%2FViC9ftkX2hTGRUK1fy8SdCIp8dTNh2XfSuwSZxBqIhx7X%2BWlOxFS3xXckcQjgSPJLDwxVNdcOx%2F6yWU53EzBO%2BNn4OYdjW33BMObR2MkGOqUBc238ZRw3nK8pw31S%2BZK%2F74sSCj3ROg37fQ8yJQGAEzINjCN1DzghtmNXBY6asMne3xtM6HUCIfWf7J0e3dNOdIlnoDaLUTZZXH8WmBDhuYh32C8a9NwpFbEaaMRL4u6UyOQhv7V7Jdkof77TBWes92B9PGTDhI%2Bhw%2BMXFGqWhp7VLidr2h%2BYRjotI3eSb4dM51hN13Snp5HP%2BA9zOTH9IYFj%2FEh2&X-Amz-Signature=04166fc00261e6d3c85c98bfa03a7c6fa4569adabea9e806b6289aee3777f9c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677AEWGOM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGozFMGZSh4uAAuqeyFNo8myEO0SI1g%2F%2Fn9iGku2VblXAiBj7Q5r8JJTNHBR5%2BQJSjct5LAJE4mJwDpwhqejYksGQyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYqT9yRRnLBTRRLYYKtwDNx3zhO6f4BftvPRF4lvJMwnFZ53N1JPhDrLuL4f4nLTz1Fv32mJSGK5tWY1D55z%2FCRFKogQXSv1dNDcFG4XO%2FqTdXqy52owd7eX8aGjh7DqrUreHF5a93gDqHrZQlrFU%2BIrsj%2FvFj6mpqBzXor%2FkRTMk7rsph6QTVlpjBIlAJVigXL8JJQzDikk8NpXQAkUL2nmGUtpdPRrkJXUIc1s1a2VR%2B0vtD4HrbAAKbS%2BkHVX4Lx2SKVKyOIaQg6smf%2B0BKI8sjxcm5c7Bs8q0nq9fdBuLxJt1x8uoU4VLPPWZZg7sDd%2ByFJttsYPyFYozMRwzuRMwVxbbJLGsy1yjbwvmrdAdgecTlOgq6uoOIRQO4E28weol0o%2BOWHXSFl4U1dogoSqQtsZVIbFRlfzVMymd7PKYts2w4zrOu15MlmtobCGFUXQqiIyUyIF37G8OCf0qrXAuVYIuzl5%2B6tEk14KPQp5ICw1wr6DOKCts%2B44wLGvVn5OlYz0OOaFapfG8flHv6jh8AjisGYwvMXZ95t1FdX8lEnviIiKN74pVW1zKq5hyoyTOhK2KAiTaQTUqcX2Vlz5aIGWGNZDOPCrYls7RdbBdq99i4ngkGXKb0zY%2B1FmyFnVX0eDYsxDDuUEw3dHYyQY6pgHAqXliZMmBXlo%2FDQPLRce6hJVydiHVjfIssv%2FYk1txdVMz6rTaT04xa0s%2FNW%2F8nakGkwtN68yGuOer2iiG3Etkdm1pzMnZAIKgMLcbGkvEnMeyHVcrcyQZSWzOOu5yuFpGrBnHT6sCCf0C%2FjCiVIDf9kNHpsT4PULNy5v63HboyCiasrpMp5Kqb2jmrFc0OkHum%2BKXglN8Zf%2F4BGIdT1iMT7wzpSFg&X-Amz-Signature=43db35bf2c588dcedc4ef1f4a5feccb2a5c5553550a433a558a6cc67ebd6b4ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NC5KEC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoyyZEFV4Diuqes%2FDQGsGPEM4u6M8VgCHKK5CNuIFRDAiEA%2FKhntgMtbyYd6du%2B5GV9Uwd%2FulHhr%2FI9qvZFB61ayeAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCcK8J1C1cRoxPoUCrcA9spMsD26QINZfNyeTanTD%2F8noAyyWIxAoqAXPxixKZl43tJdudsdKCmFtyfGgJVcshthL16e%2BLrS1Lut2uw2j7Cr9R%2FexALS984TDSaYXOz688BsJLjO9gu4YxpOjPaxPtnTcTsWb5%2BNPI8bUIuJTCjvqyttD6a0LupoZz25NLHz5dJa%2FFSDHP4mXNoHa5K8blCn8PVxj2O1wFvYwTldz5QBTem%2BtFI7cRlIfA04wtQy1yIQSk5QqF%2BSBkZAvz%2ByFZWosvORlcvAeaNdP0dqwiyn16VodFblZECqTVO%2BWc%2BD8apK%2BpLVd2IbOsc03sR4kfuEGY%2FotY2WaZHn%2F8aGmgaPBqI2xm%2F6rzTPsDsEB%2BZxBnLwpzZEuNCbkgQvFl2GP7VBqt9qMSU9bqXUjlVDGfeh5yZ3ybguNdVibdLZX4RFrDqUL2nk8UOUb6F5uDxGsZn%2FOCqwRyTKuWTjtKmORIQtug08w6MK46RGc%2F04nU%2BWyTxCgV8LRNhjr%2F8xn818ecFFgcNKBJWzkwvqRzGrmOXVj%2FViC9ftkX2hTGRUK1fy8SdCIp8dTNh2XfSuwSZxBqIhx7X%2BWlOxFS3xXckcQjgSPJLDwxVNdcOx%2F6yWU53EzBO%2BNn4OYdjW33BMObR2MkGOqUBc238ZRw3nK8pw31S%2BZK%2F74sSCj3ROg37fQ8yJQGAEzINjCN1DzghtmNXBY6asMne3xtM6HUCIfWf7J0e3dNOdIlnoDaLUTZZXH8WmBDhuYh32C8a9NwpFbEaaMRL4u6UyOQhv7V7Jdkof77TBWes92B9PGTDhI%2Bhw%2BMXFGqWhp7VLidr2h%2BYRjotI3eSb4dM51hN13Snp5HP%2BA9zOTH9IYFj%2FEh2&X-Amz-Signature=12b147b821e8afc60424bbeef758034e307d60be4f8ab1a6da92e0ca7dad14b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NC5KEC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoyyZEFV4Diuqes%2FDQGsGPEM4u6M8VgCHKK5CNuIFRDAiEA%2FKhntgMtbyYd6du%2B5GV9Uwd%2FulHhr%2FI9qvZFB61ayeAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCcK8J1C1cRoxPoUCrcA9spMsD26QINZfNyeTanTD%2F8noAyyWIxAoqAXPxixKZl43tJdudsdKCmFtyfGgJVcshthL16e%2BLrS1Lut2uw2j7Cr9R%2FexALS984TDSaYXOz688BsJLjO9gu4YxpOjPaxPtnTcTsWb5%2BNPI8bUIuJTCjvqyttD6a0LupoZz25NLHz5dJa%2FFSDHP4mXNoHa5K8blCn8PVxj2O1wFvYwTldz5QBTem%2BtFI7cRlIfA04wtQy1yIQSk5QqF%2BSBkZAvz%2ByFZWosvORlcvAeaNdP0dqwiyn16VodFblZECqTVO%2BWc%2BD8apK%2BpLVd2IbOsc03sR4kfuEGY%2FotY2WaZHn%2F8aGmgaPBqI2xm%2F6rzTPsDsEB%2BZxBnLwpzZEuNCbkgQvFl2GP7VBqt9qMSU9bqXUjlVDGfeh5yZ3ybguNdVibdLZX4RFrDqUL2nk8UOUb6F5uDxGsZn%2FOCqwRyTKuWTjtKmORIQtug08w6MK46RGc%2F04nU%2BWyTxCgV8LRNhjr%2F8xn818ecFFgcNKBJWzkwvqRzGrmOXVj%2FViC9ftkX2hTGRUK1fy8SdCIp8dTNh2XfSuwSZxBqIhx7X%2BWlOxFS3xXckcQjgSPJLDwxVNdcOx%2F6yWU53EzBO%2BNn4OYdjW33BMObR2MkGOqUBc238ZRw3nK8pw31S%2BZK%2F74sSCj3ROg37fQ8yJQGAEzINjCN1DzghtmNXBY6asMne3xtM6HUCIfWf7J0e3dNOdIlnoDaLUTZZXH8WmBDhuYh32C8a9NwpFbEaaMRL4u6UyOQhv7V7Jdkof77TBWes92B9PGTDhI%2Bhw%2BMXFGqWhp7VLidr2h%2BYRjotI3eSb4dM51hN13Snp5HP%2BA9zOTH9IYFj%2FEh2&X-Amz-Signature=ed5ab92fa3e12c8d4adcb29bb0c527f3e8706b8298689ab33e8690fd465cec34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NC5KEC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoyyZEFV4Diuqes%2FDQGsGPEM4u6M8VgCHKK5CNuIFRDAiEA%2FKhntgMtbyYd6du%2B5GV9Uwd%2FulHhr%2FI9qvZFB61ayeAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCcK8J1C1cRoxPoUCrcA9spMsD26QINZfNyeTanTD%2F8noAyyWIxAoqAXPxixKZl43tJdudsdKCmFtyfGgJVcshthL16e%2BLrS1Lut2uw2j7Cr9R%2FexALS984TDSaYXOz688BsJLjO9gu4YxpOjPaxPtnTcTsWb5%2BNPI8bUIuJTCjvqyttD6a0LupoZz25NLHz5dJa%2FFSDHP4mXNoHa5K8blCn8PVxj2O1wFvYwTldz5QBTem%2BtFI7cRlIfA04wtQy1yIQSk5QqF%2BSBkZAvz%2ByFZWosvORlcvAeaNdP0dqwiyn16VodFblZECqTVO%2BWc%2BD8apK%2BpLVd2IbOsc03sR4kfuEGY%2FotY2WaZHn%2F8aGmgaPBqI2xm%2F6rzTPsDsEB%2BZxBnLwpzZEuNCbkgQvFl2GP7VBqt9qMSU9bqXUjlVDGfeh5yZ3ybguNdVibdLZX4RFrDqUL2nk8UOUb6F5uDxGsZn%2FOCqwRyTKuWTjtKmORIQtug08w6MK46RGc%2F04nU%2BWyTxCgV8LRNhjr%2F8xn818ecFFgcNKBJWzkwvqRzGrmOXVj%2FViC9ftkX2hTGRUK1fy8SdCIp8dTNh2XfSuwSZxBqIhx7X%2BWlOxFS3xXckcQjgSPJLDwxVNdcOx%2F6yWU53EzBO%2BNn4OYdjW33BMObR2MkGOqUBc238ZRw3nK8pw31S%2BZK%2F74sSCj3ROg37fQ8yJQGAEzINjCN1DzghtmNXBY6asMne3xtM6HUCIfWf7J0e3dNOdIlnoDaLUTZZXH8WmBDhuYh32C8a9NwpFbEaaMRL4u6UyOQhv7V7Jdkof77TBWes92B9PGTDhI%2Bhw%2BMXFGqWhp7VLidr2h%2BYRjotI3eSb4dM51hN13Snp5HP%2BA9zOTH9IYFj%2FEh2&X-Amz-Signature=cf2ca6aebdf28b0840a59b89ce2dc7426b59e62355f1207a095a5309ea763669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NC5KEC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoyyZEFV4Diuqes%2FDQGsGPEM4u6M8VgCHKK5CNuIFRDAiEA%2FKhntgMtbyYd6du%2B5GV9Uwd%2FulHhr%2FI9qvZFB61ayeAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCcK8J1C1cRoxPoUCrcA9spMsD26QINZfNyeTanTD%2F8noAyyWIxAoqAXPxixKZl43tJdudsdKCmFtyfGgJVcshthL16e%2BLrS1Lut2uw2j7Cr9R%2FexALS984TDSaYXOz688BsJLjO9gu4YxpOjPaxPtnTcTsWb5%2BNPI8bUIuJTCjvqyttD6a0LupoZz25NLHz5dJa%2FFSDHP4mXNoHa5K8blCn8PVxj2O1wFvYwTldz5QBTem%2BtFI7cRlIfA04wtQy1yIQSk5QqF%2BSBkZAvz%2ByFZWosvORlcvAeaNdP0dqwiyn16VodFblZECqTVO%2BWc%2BD8apK%2BpLVd2IbOsc03sR4kfuEGY%2FotY2WaZHn%2F8aGmgaPBqI2xm%2F6rzTPsDsEB%2BZxBnLwpzZEuNCbkgQvFl2GP7VBqt9qMSU9bqXUjlVDGfeh5yZ3ybguNdVibdLZX4RFrDqUL2nk8UOUb6F5uDxGsZn%2FOCqwRyTKuWTjtKmORIQtug08w6MK46RGc%2F04nU%2BWyTxCgV8LRNhjr%2F8xn818ecFFgcNKBJWzkwvqRzGrmOXVj%2FViC9ftkX2hTGRUK1fy8SdCIp8dTNh2XfSuwSZxBqIhx7X%2BWlOxFS3xXckcQjgSPJLDwxVNdcOx%2F6yWU53EzBO%2BNn4OYdjW33BMObR2MkGOqUBc238ZRw3nK8pw31S%2BZK%2F74sSCj3ROg37fQ8yJQGAEzINjCN1DzghtmNXBY6asMne3xtM6HUCIfWf7J0e3dNOdIlnoDaLUTZZXH8WmBDhuYh32C8a9NwpFbEaaMRL4u6UyOQhv7V7Jdkof77TBWes92B9PGTDhI%2Bhw%2BMXFGqWhp7VLidr2h%2BYRjotI3eSb4dM51hN13Snp5HP%2BA9zOTH9IYFj%2FEh2&X-Amz-Signature=f7b961aed8ed97c1a7fca1b8a889cab57b1d56912cbc3b2d94ebc141da2c6d8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NC5KEC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoyyZEFV4Diuqes%2FDQGsGPEM4u6M8VgCHKK5CNuIFRDAiEA%2FKhntgMtbyYd6du%2B5GV9Uwd%2FulHhr%2FI9qvZFB61ayeAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCcK8J1C1cRoxPoUCrcA9spMsD26QINZfNyeTanTD%2F8noAyyWIxAoqAXPxixKZl43tJdudsdKCmFtyfGgJVcshthL16e%2BLrS1Lut2uw2j7Cr9R%2FexALS984TDSaYXOz688BsJLjO9gu4YxpOjPaxPtnTcTsWb5%2BNPI8bUIuJTCjvqyttD6a0LupoZz25NLHz5dJa%2FFSDHP4mXNoHa5K8blCn8PVxj2O1wFvYwTldz5QBTem%2BtFI7cRlIfA04wtQy1yIQSk5QqF%2BSBkZAvz%2ByFZWosvORlcvAeaNdP0dqwiyn16VodFblZECqTVO%2BWc%2BD8apK%2BpLVd2IbOsc03sR4kfuEGY%2FotY2WaZHn%2F8aGmgaPBqI2xm%2F6rzTPsDsEB%2BZxBnLwpzZEuNCbkgQvFl2GP7VBqt9qMSU9bqXUjlVDGfeh5yZ3ybguNdVibdLZX4RFrDqUL2nk8UOUb6F5uDxGsZn%2FOCqwRyTKuWTjtKmORIQtug08w6MK46RGc%2F04nU%2BWyTxCgV8LRNhjr%2F8xn818ecFFgcNKBJWzkwvqRzGrmOXVj%2FViC9ftkX2hTGRUK1fy8SdCIp8dTNh2XfSuwSZxBqIhx7X%2BWlOxFS3xXckcQjgSPJLDwxVNdcOx%2F6yWU53EzBO%2BNn4OYdjW33BMObR2MkGOqUBc238ZRw3nK8pw31S%2BZK%2F74sSCj3ROg37fQ8yJQGAEzINjCN1DzghtmNXBY6asMne3xtM6HUCIfWf7J0e3dNOdIlnoDaLUTZZXH8WmBDhuYh32C8a9NwpFbEaaMRL4u6UyOQhv7V7Jdkof77TBWes92B9PGTDhI%2Bhw%2BMXFGqWhp7VLidr2h%2BYRjotI3eSb4dM51hN13Snp5HP%2BA9zOTH9IYFj%2FEh2&X-Amz-Signature=56e0dd427c0471bedc97b507ad3f018eef6aa4bdc5fc41da28bde82be7e8c0ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NC5KEC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoyyZEFV4Diuqes%2FDQGsGPEM4u6M8VgCHKK5CNuIFRDAiEA%2FKhntgMtbyYd6du%2B5GV9Uwd%2FulHhr%2FI9qvZFB61ayeAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCcK8J1C1cRoxPoUCrcA9spMsD26QINZfNyeTanTD%2F8noAyyWIxAoqAXPxixKZl43tJdudsdKCmFtyfGgJVcshthL16e%2BLrS1Lut2uw2j7Cr9R%2FexALS984TDSaYXOz688BsJLjO9gu4YxpOjPaxPtnTcTsWb5%2BNPI8bUIuJTCjvqyttD6a0LupoZz25NLHz5dJa%2FFSDHP4mXNoHa5K8blCn8PVxj2O1wFvYwTldz5QBTem%2BtFI7cRlIfA04wtQy1yIQSk5QqF%2BSBkZAvz%2ByFZWosvORlcvAeaNdP0dqwiyn16VodFblZECqTVO%2BWc%2BD8apK%2BpLVd2IbOsc03sR4kfuEGY%2FotY2WaZHn%2F8aGmgaPBqI2xm%2F6rzTPsDsEB%2BZxBnLwpzZEuNCbkgQvFl2GP7VBqt9qMSU9bqXUjlVDGfeh5yZ3ybguNdVibdLZX4RFrDqUL2nk8UOUb6F5uDxGsZn%2FOCqwRyTKuWTjtKmORIQtug08w6MK46RGc%2F04nU%2BWyTxCgV8LRNhjr%2F8xn818ecFFgcNKBJWzkwvqRzGrmOXVj%2FViC9ftkX2hTGRUK1fy8SdCIp8dTNh2XfSuwSZxBqIhx7X%2BWlOxFS3xXckcQjgSPJLDwxVNdcOx%2F6yWU53EzBO%2BNn4OYdjW33BMObR2MkGOqUBc238ZRw3nK8pw31S%2BZK%2F74sSCj3ROg37fQ8yJQGAEzINjCN1DzghtmNXBY6asMne3xtM6HUCIfWf7J0e3dNOdIlnoDaLUTZZXH8WmBDhuYh32C8a9NwpFbEaaMRL4u6UyOQhv7V7Jdkof77TBWes92B9PGTDhI%2Bhw%2BMXFGqWhp7VLidr2h%2BYRjotI3eSb4dM51hN13Snp5HP%2BA9zOTH9IYFj%2FEh2&X-Amz-Signature=cb321208cfae4527b9deac3d9ae5c593db89413f2ad5e46b27e8096c88e3b5a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


