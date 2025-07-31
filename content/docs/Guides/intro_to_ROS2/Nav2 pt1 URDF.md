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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFVGERC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZpOUt5tjSi4oXwDuL4MekNKFSf%2BKwuknp%2BNKbHvt6yAiBeITSmiFNEnzsa97aPMCudrtqqQg%2BuRX07l1Tjai9gjiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr9B96NuBabqtPnqKKtwDkpolgEi%2Fh%2Bkz%2B2VqrAHhUr0ylHu1d0H3i2ua3JtxaLjDEUkZR8jiAeaVVVd22MzmTM%2BJiulYGYGmGDbHrX%2BsRHdje6fWA%2B52rnGXZYs96rK1pURopaNSoYMykI33sgq88fXQaXc6L0rH2vDBQ9G%2B8B1h3s792QE5K6MDiP%2FPlyywxbDX4SNJrQNsgKR7KyG3vXtLBG2AqrZqu4Xe0tKNweCydNi%2F3BuxuSjgE4nhl04CdWzuobOZm9M3FUPmOELDBAiefI2WCCA0E28Ersc2Z3aKg0K0f06F8VK%2FfzvnGUB4jK3I20U9Jb8%2FLNHIzqiTQRb9VGs8bnGap3wcj5BPTV8lXqY5C6lB4itldLdtvYBtO3pt1DrzzUKp633sKkNC%2Bncgxg2zAqGofBnWfKJNS8T0PmtS8zlyaMAqzE0OavakQuK%2F0kur8M3i0b2ma03W00pviAkw66ipSyCv7ASfNdQYxmWvURJWFjAKfWUDg%2BE77N4vVMAJupgWO2dWUWkSNiLPP0XvQBTCXzykbmM3rtKsvkanZbUws4FiYRpUeDKGNwdbOpyXZ56q%2BJYYsdzHnagIz8hQiwc%2BkvkgZgOBY9HYNneuBeqGKuWEnmn1Ue1gRJmfNsj9lJZ0AywwmOqtxAY6pgHd39cDnL0RpWXdhon%2Ft%2FzIZ5bKiJh5YjEtzIMOqRxKjObQarDFruHZl8%2FeoyiOTg%2FD6FEXCTGeY0Ft8fcnrSPh5B5tO4IYvWC6eQ1pDSKj6i%2FsOatDz%2BcuwdfcXsFXmywu1r7jDw12naRoVeBk8jJX5f1Goj7HL2wa8DLNi%2BLH%2Be9veYnkoiA%2BA8hoQ5IR1ML%2BMflCcCdHEeZe23uYJ0nSb9rqpCrL&X-Amz-Signature=b81032fb3a8758caecf78c271fedaf61d1dd928d151d6abbb0f8b65b7bfb551d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFVGERC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZpOUt5tjSi4oXwDuL4MekNKFSf%2BKwuknp%2BNKbHvt6yAiBeITSmiFNEnzsa97aPMCudrtqqQg%2BuRX07l1Tjai9gjiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr9B96NuBabqtPnqKKtwDkpolgEi%2Fh%2Bkz%2B2VqrAHhUr0ylHu1d0H3i2ua3JtxaLjDEUkZR8jiAeaVVVd22MzmTM%2BJiulYGYGmGDbHrX%2BsRHdje6fWA%2B52rnGXZYs96rK1pURopaNSoYMykI33sgq88fXQaXc6L0rH2vDBQ9G%2B8B1h3s792QE5K6MDiP%2FPlyywxbDX4SNJrQNsgKR7KyG3vXtLBG2AqrZqu4Xe0tKNweCydNi%2F3BuxuSjgE4nhl04CdWzuobOZm9M3FUPmOELDBAiefI2WCCA0E28Ersc2Z3aKg0K0f06F8VK%2FfzvnGUB4jK3I20U9Jb8%2FLNHIzqiTQRb9VGs8bnGap3wcj5BPTV8lXqY5C6lB4itldLdtvYBtO3pt1DrzzUKp633sKkNC%2Bncgxg2zAqGofBnWfKJNS8T0PmtS8zlyaMAqzE0OavakQuK%2F0kur8M3i0b2ma03W00pviAkw66ipSyCv7ASfNdQYxmWvURJWFjAKfWUDg%2BE77N4vVMAJupgWO2dWUWkSNiLPP0XvQBTCXzykbmM3rtKsvkanZbUws4FiYRpUeDKGNwdbOpyXZ56q%2BJYYsdzHnagIz8hQiwc%2BkvkgZgOBY9HYNneuBeqGKuWEnmn1Ue1gRJmfNsj9lJZ0AywwmOqtxAY6pgHd39cDnL0RpWXdhon%2Ft%2FzIZ5bKiJh5YjEtzIMOqRxKjObQarDFruHZl8%2FeoyiOTg%2FD6FEXCTGeY0Ft8fcnrSPh5B5tO4IYvWC6eQ1pDSKj6i%2FsOatDz%2BcuwdfcXsFXmywu1r7jDw12naRoVeBk8jJX5f1Goj7HL2wa8DLNi%2BLH%2Be9veYnkoiA%2BA8hoQ5IR1ML%2BMflCcCdHEeZe23uYJ0nSb9rqpCrL&X-Amz-Signature=462041a2ff8175afad831df23893df55f1a84901892936a49a3bc387a3ac898f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFVGERC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZpOUt5tjSi4oXwDuL4MekNKFSf%2BKwuknp%2BNKbHvt6yAiBeITSmiFNEnzsa97aPMCudrtqqQg%2BuRX07l1Tjai9gjiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr9B96NuBabqtPnqKKtwDkpolgEi%2Fh%2Bkz%2B2VqrAHhUr0ylHu1d0H3i2ua3JtxaLjDEUkZR8jiAeaVVVd22MzmTM%2BJiulYGYGmGDbHrX%2BsRHdje6fWA%2B52rnGXZYs96rK1pURopaNSoYMykI33sgq88fXQaXc6L0rH2vDBQ9G%2B8B1h3s792QE5K6MDiP%2FPlyywxbDX4SNJrQNsgKR7KyG3vXtLBG2AqrZqu4Xe0tKNweCydNi%2F3BuxuSjgE4nhl04CdWzuobOZm9M3FUPmOELDBAiefI2WCCA0E28Ersc2Z3aKg0K0f06F8VK%2FfzvnGUB4jK3I20U9Jb8%2FLNHIzqiTQRb9VGs8bnGap3wcj5BPTV8lXqY5C6lB4itldLdtvYBtO3pt1DrzzUKp633sKkNC%2Bncgxg2zAqGofBnWfKJNS8T0PmtS8zlyaMAqzE0OavakQuK%2F0kur8M3i0b2ma03W00pviAkw66ipSyCv7ASfNdQYxmWvURJWFjAKfWUDg%2BE77N4vVMAJupgWO2dWUWkSNiLPP0XvQBTCXzykbmM3rtKsvkanZbUws4FiYRpUeDKGNwdbOpyXZ56q%2BJYYsdzHnagIz8hQiwc%2BkvkgZgOBY9HYNneuBeqGKuWEnmn1Ue1gRJmfNsj9lJZ0AywwmOqtxAY6pgHd39cDnL0RpWXdhon%2Ft%2FzIZ5bKiJh5YjEtzIMOqRxKjObQarDFruHZl8%2FeoyiOTg%2FD6FEXCTGeY0Ft8fcnrSPh5B5tO4IYvWC6eQ1pDSKj6i%2FsOatDz%2BcuwdfcXsFXmywu1r7jDw12naRoVeBk8jJX5f1Goj7HL2wa8DLNi%2BLH%2Be9veYnkoiA%2BA8hoQ5IR1ML%2BMflCcCdHEeZe23uYJ0nSb9rqpCrL&X-Amz-Signature=674ec68d293664d6a95f93355936be4757e7202e0bc4a17ed59e223f5d1d44a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFVGERC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZpOUt5tjSi4oXwDuL4MekNKFSf%2BKwuknp%2BNKbHvt6yAiBeITSmiFNEnzsa97aPMCudrtqqQg%2BuRX07l1Tjai9gjiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr9B96NuBabqtPnqKKtwDkpolgEi%2Fh%2Bkz%2B2VqrAHhUr0ylHu1d0H3i2ua3JtxaLjDEUkZR8jiAeaVVVd22MzmTM%2BJiulYGYGmGDbHrX%2BsRHdje6fWA%2B52rnGXZYs96rK1pURopaNSoYMykI33sgq88fXQaXc6L0rH2vDBQ9G%2B8B1h3s792QE5K6MDiP%2FPlyywxbDX4SNJrQNsgKR7KyG3vXtLBG2AqrZqu4Xe0tKNweCydNi%2F3BuxuSjgE4nhl04CdWzuobOZm9M3FUPmOELDBAiefI2WCCA0E28Ersc2Z3aKg0K0f06F8VK%2FfzvnGUB4jK3I20U9Jb8%2FLNHIzqiTQRb9VGs8bnGap3wcj5BPTV8lXqY5C6lB4itldLdtvYBtO3pt1DrzzUKp633sKkNC%2Bncgxg2zAqGofBnWfKJNS8T0PmtS8zlyaMAqzE0OavakQuK%2F0kur8M3i0b2ma03W00pviAkw66ipSyCv7ASfNdQYxmWvURJWFjAKfWUDg%2BE77N4vVMAJupgWO2dWUWkSNiLPP0XvQBTCXzykbmM3rtKsvkanZbUws4FiYRpUeDKGNwdbOpyXZ56q%2BJYYsdzHnagIz8hQiwc%2BkvkgZgOBY9HYNneuBeqGKuWEnmn1Ue1gRJmfNsj9lJZ0AywwmOqtxAY6pgHd39cDnL0RpWXdhon%2Ft%2FzIZ5bKiJh5YjEtzIMOqRxKjObQarDFruHZl8%2FeoyiOTg%2FD6FEXCTGeY0Ft8fcnrSPh5B5tO4IYvWC6eQ1pDSKj6i%2FsOatDz%2BcuwdfcXsFXmywu1r7jDw12naRoVeBk8jJX5f1Goj7HL2wa8DLNi%2BLH%2Be9veYnkoiA%2BA8hoQ5IR1ML%2BMflCcCdHEeZe23uYJ0nSb9rqpCrL&X-Amz-Signature=ec0bdf34ff21e7e106100d42f8ec28a45c08963b45b84d72b29f90ab3c2ff3aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFVGERC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZpOUt5tjSi4oXwDuL4MekNKFSf%2BKwuknp%2BNKbHvt6yAiBeITSmiFNEnzsa97aPMCudrtqqQg%2BuRX07l1Tjai9gjiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr9B96NuBabqtPnqKKtwDkpolgEi%2Fh%2Bkz%2B2VqrAHhUr0ylHu1d0H3i2ua3JtxaLjDEUkZR8jiAeaVVVd22MzmTM%2BJiulYGYGmGDbHrX%2BsRHdje6fWA%2B52rnGXZYs96rK1pURopaNSoYMykI33sgq88fXQaXc6L0rH2vDBQ9G%2B8B1h3s792QE5K6MDiP%2FPlyywxbDX4SNJrQNsgKR7KyG3vXtLBG2AqrZqu4Xe0tKNweCydNi%2F3BuxuSjgE4nhl04CdWzuobOZm9M3FUPmOELDBAiefI2WCCA0E28Ersc2Z3aKg0K0f06F8VK%2FfzvnGUB4jK3I20U9Jb8%2FLNHIzqiTQRb9VGs8bnGap3wcj5BPTV8lXqY5C6lB4itldLdtvYBtO3pt1DrzzUKp633sKkNC%2Bncgxg2zAqGofBnWfKJNS8T0PmtS8zlyaMAqzE0OavakQuK%2F0kur8M3i0b2ma03W00pviAkw66ipSyCv7ASfNdQYxmWvURJWFjAKfWUDg%2BE77N4vVMAJupgWO2dWUWkSNiLPP0XvQBTCXzykbmM3rtKsvkanZbUws4FiYRpUeDKGNwdbOpyXZ56q%2BJYYsdzHnagIz8hQiwc%2BkvkgZgOBY9HYNneuBeqGKuWEnmn1Ue1gRJmfNsj9lJZ0AywwmOqtxAY6pgHd39cDnL0RpWXdhon%2Ft%2FzIZ5bKiJh5YjEtzIMOqRxKjObQarDFruHZl8%2FeoyiOTg%2FD6FEXCTGeY0Ft8fcnrSPh5B5tO4IYvWC6eQ1pDSKj6i%2FsOatDz%2BcuwdfcXsFXmywu1r7jDw12naRoVeBk8jJX5f1Goj7HL2wa8DLNi%2BLH%2Be9veYnkoiA%2BA8hoQ5IR1ML%2BMflCcCdHEeZe23uYJ0nSb9rqpCrL&X-Amz-Signature=589a5686f4cd0f7fb678b675b49c5539548b3cdd615b27d078fca9e067ff734c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFVGERC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZpOUt5tjSi4oXwDuL4MekNKFSf%2BKwuknp%2BNKbHvt6yAiBeITSmiFNEnzsa97aPMCudrtqqQg%2BuRX07l1Tjai9gjiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr9B96NuBabqtPnqKKtwDkpolgEi%2Fh%2Bkz%2B2VqrAHhUr0ylHu1d0H3i2ua3JtxaLjDEUkZR8jiAeaVVVd22MzmTM%2BJiulYGYGmGDbHrX%2BsRHdje6fWA%2B52rnGXZYs96rK1pURopaNSoYMykI33sgq88fXQaXc6L0rH2vDBQ9G%2B8B1h3s792QE5K6MDiP%2FPlyywxbDX4SNJrQNsgKR7KyG3vXtLBG2AqrZqu4Xe0tKNweCydNi%2F3BuxuSjgE4nhl04CdWzuobOZm9M3FUPmOELDBAiefI2WCCA0E28Ersc2Z3aKg0K0f06F8VK%2FfzvnGUB4jK3I20U9Jb8%2FLNHIzqiTQRb9VGs8bnGap3wcj5BPTV8lXqY5C6lB4itldLdtvYBtO3pt1DrzzUKp633sKkNC%2Bncgxg2zAqGofBnWfKJNS8T0PmtS8zlyaMAqzE0OavakQuK%2F0kur8M3i0b2ma03W00pviAkw66ipSyCv7ASfNdQYxmWvURJWFjAKfWUDg%2BE77N4vVMAJupgWO2dWUWkSNiLPP0XvQBTCXzykbmM3rtKsvkanZbUws4FiYRpUeDKGNwdbOpyXZ56q%2BJYYsdzHnagIz8hQiwc%2BkvkgZgOBY9HYNneuBeqGKuWEnmn1Ue1gRJmfNsj9lJZ0AywwmOqtxAY6pgHd39cDnL0RpWXdhon%2Ft%2FzIZ5bKiJh5YjEtzIMOqRxKjObQarDFruHZl8%2FeoyiOTg%2FD6FEXCTGeY0Ft8fcnrSPh5B5tO4IYvWC6eQ1pDSKj6i%2FsOatDz%2BcuwdfcXsFXmywu1r7jDw12naRoVeBk8jJX5f1Goj7HL2wa8DLNi%2BLH%2Be9veYnkoiA%2BA8hoQ5IR1ML%2BMflCcCdHEeZe23uYJ0nSb9rqpCrL&X-Amz-Signature=62b4ad3372f0614c1f876583715acca0ceff2944cf41b4139f0d695f5652f933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFVGERC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZpOUt5tjSi4oXwDuL4MekNKFSf%2BKwuknp%2BNKbHvt6yAiBeITSmiFNEnzsa97aPMCudrtqqQg%2BuRX07l1Tjai9gjiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr9B96NuBabqtPnqKKtwDkpolgEi%2Fh%2Bkz%2B2VqrAHhUr0ylHu1d0H3i2ua3JtxaLjDEUkZR8jiAeaVVVd22MzmTM%2BJiulYGYGmGDbHrX%2BsRHdje6fWA%2B52rnGXZYs96rK1pURopaNSoYMykI33sgq88fXQaXc6L0rH2vDBQ9G%2B8B1h3s792QE5K6MDiP%2FPlyywxbDX4SNJrQNsgKR7KyG3vXtLBG2AqrZqu4Xe0tKNweCydNi%2F3BuxuSjgE4nhl04CdWzuobOZm9M3FUPmOELDBAiefI2WCCA0E28Ersc2Z3aKg0K0f06F8VK%2FfzvnGUB4jK3I20U9Jb8%2FLNHIzqiTQRb9VGs8bnGap3wcj5BPTV8lXqY5C6lB4itldLdtvYBtO3pt1DrzzUKp633sKkNC%2Bncgxg2zAqGofBnWfKJNS8T0PmtS8zlyaMAqzE0OavakQuK%2F0kur8M3i0b2ma03W00pviAkw66ipSyCv7ASfNdQYxmWvURJWFjAKfWUDg%2BE77N4vVMAJupgWO2dWUWkSNiLPP0XvQBTCXzykbmM3rtKsvkanZbUws4FiYRpUeDKGNwdbOpyXZ56q%2BJYYsdzHnagIz8hQiwc%2BkvkgZgOBY9HYNneuBeqGKuWEnmn1Ue1gRJmfNsj9lJZ0AywwmOqtxAY6pgHd39cDnL0RpWXdhon%2Ft%2FzIZ5bKiJh5YjEtzIMOqRxKjObQarDFruHZl8%2FeoyiOTg%2FD6FEXCTGeY0Ft8fcnrSPh5B5tO4IYvWC6eQ1pDSKj6i%2FsOatDz%2BcuwdfcXsFXmywu1r7jDw12naRoVeBk8jJX5f1Goj7HL2wa8DLNi%2BLH%2Be9veYnkoiA%2BA8hoQ5IR1ML%2BMflCcCdHEeZe23uYJ0nSb9rqpCrL&X-Amz-Signature=819f8b9c1b896b6bcf13ff8c35e8a39b175095eb315734e9085c02c6056dcc96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFVGERC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZpOUt5tjSi4oXwDuL4MekNKFSf%2BKwuknp%2BNKbHvt6yAiBeITSmiFNEnzsa97aPMCudrtqqQg%2BuRX07l1Tjai9gjiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr9B96NuBabqtPnqKKtwDkpolgEi%2Fh%2Bkz%2B2VqrAHhUr0ylHu1d0H3i2ua3JtxaLjDEUkZR8jiAeaVVVd22MzmTM%2BJiulYGYGmGDbHrX%2BsRHdje6fWA%2B52rnGXZYs96rK1pURopaNSoYMykI33sgq88fXQaXc6L0rH2vDBQ9G%2B8B1h3s792QE5K6MDiP%2FPlyywxbDX4SNJrQNsgKR7KyG3vXtLBG2AqrZqu4Xe0tKNweCydNi%2F3BuxuSjgE4nhl04CdWzuobOZm9M3FUPmOELDBAiefI2WCCA0E28Ersc2Z3aKg0K0f06F8VK%2FfzvnGUB4jK3I20U9Jb8%2FLNHIzqiTQRb9VGs8bnGap3wcj5BPTV8lXqY5C6lB4itldLdtvYBtO3pt1DrzzUKp633sKkNC%2Bncgxg2zAqGofBnWfKJNS8T0PmtS8zlyaMAqzE0OavakQuK%2F0kur8M3i0b2ma03W00pviAkw66ipSyCv7ASfNdQYxmWvURJWFjAKfWUDg%2BE77N4vVMAJupgWO2dWUWkSNiLPP0XvQBTCXzykbmM3rtKsvkanZbUws4FiYRpUeDKGNwdbOpyXZ56q%2BJYYsdzHnagIz8hQiwc%2BkvkgZgOBY9HYNneuBeqGKuWEnmn1Ue1gRJmfNsj9lJZ0AywwmOqtxAY6pgHd39cDnL0RpWXdhon%2Ft%2FzIZ5bKiJh5YjEtzIMOqRxKjObQarDFruHZl8%2FeoyiOTg%2FD6FEXCTGeY0Ft8fcnrSPh5B5tO4IYvWC6eQ1pDSKj6i%2FsOatDz%2BcuwdfcXsFXmywu1r7jDw12naRoVeBk8jJX5f1Goj7HL2wa8DLNi%2BLH%2Be9veYnkoiA%2BA8hoQ5IR1ML%2BMflCcCdHEeZe23uYJ0nSb9rqpCrL&X-Amz-Signature=c7ba97eb14e00ebe5dc06045ca6c16cffa2090d88f6211f526a98d16435f217f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFVGERC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZpOUt5tjSi4oXwDuL4MekNKFSf%2BKwuknp%2BNKbHvt6yAiBeITSmiFNEnzsa97aPMCudrtqqQg%2BuRX07l1Tjai9gjiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr9B96NuBabqtPnqKKtwDkpolgEi%2Fh%2Bkz%2B2VqrAHhUr0ylHu1d0H3i2ua3JtxaLjDEUkZR8jiAeaVVVd22MzmTM%2BJiulYGYGmGDbHrX%2BsRHdje6fWA%2B52rnGXZYs96rK1pURopaNSoYMykI33sgq88fXQaXc6L0rH2vDBQ9G%2B8B1h3s792QE5K6MDiP%2FPlyywxbDX4SNJrQNsgKR7KyG3vXtLBG2AqrZqu4Xe0tKNweCydNi%2F3BuxuSjgE4nhl04CdWzuobOZm9M3FUPmOELDBAiefI2WCCA0E28Ersc2Z3aKg0K0f06F8VK%2FfzvnGUB4jK3I20U9Jb8%2FLNHIzqiTQRb9VGs8bnGap3wcj5BPTV8lXqY5C6lB4itldLdtvYBtO3pt1DrzzUKp633sKkNC%2Bncgxg2zAqGofBnWfKJNS8T0PmtS8zlyaMAqzE0OavakQuK%2F0kur8M3i0b2ma03W00pviAkw66ipSyCv7ASfNdQYxmWvURJWFjAKfWUDg%2BE77N4vVMAJupgWO2dWUWkSNiLPP0XvQBTCXzykbmM3rtKsvkanZbUws4FiYRpUeDKGNwdbOpyXZ56q%2BJYYsdzHnagIz8hQiwc%2BkvkgZgOBY9HYNneuBeqGKuWEnmn1Ue1gRJmfNsj9lJZ0AywwmOqtxAY6pgHd39cDnL0RpWXdhon%2Ft%2FzIZ5bKiJh5YjEtzIMOqRxKjObQarDFruHZl8%2FeoyiOTg%2FD6FEXCTGeY0Ft8fcnrSPh5B5tO4IYvWC6eQ1pDSKj6i%2FsOatDz%2BcuwdfcXsFXmywu1r7jDw12naRoVeBk8jJX5f1Goj7HL2wa8DLNi%2BLH%2Be9veYnkoiA%2BA8hoQ5IR1ML%2BMflCcCdHEeZe23uYJ0nSb9rqpCrL&X-Amz-Signature=a39c368cf733add78e66e3baeab1824f2dae0fe1820b94702a7e392f245756f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFVGERC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZpOUt5tjSi4oXwDuL4MekNKFSf%2BKwuknp%2BNKbHvt6yAiBeITSmiFNEnzsa97aPMCudrtqqQg%2BuRX07l1Tjai9gjiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr9B96NuBabqtPnqKKtwDkpolgEi%2Fh%2Bkz%2B2VqrAHhUr0ylHu1d0H3i2ua3JtxaLjDEUkZR8jiAeaVVVd22MzmTM%2BJiulYGYGmGDbHrX%2BsRHdje6fWA%2B52rnGXZYs96rK1pURopaNSoYMykI33sgq88fXQaXc6L0rH2vDBQ9G%2B8B1h3s792QE5K6MDiP%2FPlyywxbDX4SNJrQNsgKR7KyG3vXtLBG2AqrZqu4Xe0tKNweCydNi%2F3BuxuSjgE4nhl04CdWzuobOZm9M3FUPmOELDBAiefI2WCCA0E28Ersc2Z3aKg0K0f06F8VK%2FfzvnGUB4jK3I20U9Jb8%2FLNHIzqiTQRb9VGs8bnGap3wcj5BPTV8lXqY5C6lB4itldLdtvYBtO3pt1DrzzUKp633sKkNC%2Bncgxg2zAqGofBnWfKJNS8T0PmtS8zlyaMAqzE0OavakQuK%2F0kur8M3i0b2ma03W00pviAkw66ipSyCv7ASfNdQYxmWvURJWFjAKfWUDg%2BE77N4vVMAJupgWO2dWUWkSNiLPP0XvQBTCXzykbmM3rtKsvkanZbUws4FiYRpUeDKGNwdbOpyXZ56q%2BJYYsdzHnagIz8hQiwc%2BkvkgZgOBY9HYNneuBeqGKuWEnmn1Ue1gRJmfNsj9lJZ0AywwmOqtxAY6pgHd39cDnL0RpWXdhon%2Ft%2FzIZ5bKiJh5YjEtzIMOqRxKjObQarDFruHZl8%2FeoyiOTg%2FD6FEXCTGeY0Ft8fcnrSPh5B5tO4IYvWC6eQ1pDSKj6i%2FsOatDz%2BcuwdfcXsFXmywu1r7jDw12naRoVeBk8jJX5f1Goj7HL2wa8DLNi%2BLH%2Be9veYnkoiA%2BA8hoQ5IR1ML%2BMflCcCdHEeZe23uYJ0nSb9rqpCrL&X-Amz-Signature=597a311b715ad96aea594ff8db7e458c3b3398b0692c71633dc8211ea302ee56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFVGERC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZpOUt5tjSi4oXwDuL4MekNKFSf%2BKwuknp%2BNKbHvt6yAiBeITSmiFNEnzsa97aPMCudrtqqQg%2BuRX07l1Tjai9gjiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr9B96NuBabqtPnqKKtwDkpolgEi%2Fh%2Bkz%2B2VqrAHhUr0ylHu1d0H3i2ua3JtxaLjDEUkZR8jiAeaVVVd22MzmTM%2BJiulYGYGmGDbHrX%2BsRHdje6fWA%2B52rnGXZYs96rK1pURopaNSoYMykI33sgq88fXQaXc6L0rH2vDBQ9G%2B8B1h3s792QE5K6MDiP%2FPlyywxbDX4SNJrQNsgKR7KyG3vXtLBG2AqrZqu4Xe0tKNweCydNi%2F3BuxuSjgE4nhl04CdWzuobOZm9M3FUPmOELDBAiefI2WCCA0E28Ersc2Z3aKg0K0f06F8VK%2FfzvnGUB4jK3I20U9Jb8%2FLNHIzqiTQRb9VGs8bnGap3wcj5BPTV8lXqY5C6lB4itldLdtvYBtO3pt1DrzzUKp633sKkNC%2Bncgxg2zAqGofBnWfKJNS8T0PmtS8zlyaMAqzE0OavakQuK%2F0kur8M3i0b2ma03W00pviAkw66ipSyCv7ASfNdQYxmWvURJWFjAKfWUDg%2BE77N4vVMAJupgWO2dWUWkSNiLPP0XvQBTCXzykbmM3rtKsvkanZbUws4FiYRpUeDKGNwdbOpyXZ56q%2BJYYsdzHnagIz8hQiwc%2BkvkgZgOBY9HYNneuBeqGKuWEnmn1Ue1gRJmfNsj9lJZ0AywwmOqtxAY6pgHd39cDnL0RpWXdhon%2Ft%2FzIZ5bKiJh5YjEtzIMOqRxKjObQarDFruHZl8%2FeoyiOTg%2FD6FEXCTGeY0Ft8fcnrSPh5B5tO4IYvWC6eQ1pDSKj6i%2FsOatDz%2BcuwdfcXsFXmywu1r7jDw12naRoVeBk8jJX5f1Goj7HL2wa8DLNi%2BLH%2Be9veYnkoiA%2BA8hoQ5IR1ML%2BMflCcCdHEeZe23uYJ0nSb9rqpCrL&X-Amz-Signature=c8500182af7cd58c1cb1c35339c47fc632e03e7994eaefdd9f720179149f41ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFVGERC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZpOUt5tjSi4oXwDuL4MekNKFSf%2BKwuknp%2BNKbHvt6yAiBeITSmiFNEnzsa97aPMCudrtqqQg%2BuRX07l1Tjai9gjiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr9B96NuBabqtPnqKKtwDkpolgEi%2Fh%2Bkz%2B2VqrAHhUr0ylHu1d0H3i2ua3JtxaLjDEUkZR8jiAeaVVVd22MzmTM%2BJiulYGYGmGDbHrX%2BsRHdje6fWA%2B52rnGXZYs96rK1pURopaNSoYMykI33sgq88fXQaXc6L0rH2vDBQ9G%2B8B1h3s792QE5K6MDiP%2FPlyywxbDX4SNJrQNsgKR7KyG3vXtLBG2AqrZqu4Xe0tKNweCydNi%2F3BuxuSjgE4nhl04CdWzuobOZm9M3FUPmOELDBAiefI2WCCA0E28Ersc2Z3aKg0K0f06F8VK%2FfzvnGUB4jK3I20U9Jb8%2FLNHIzqiTQRb9VGs8bnGap3wcj5BPTV8lXqY5C6lB4itldLdtvYBtO3pt1DrzzUKp633sKkNC%2Bncgxg2zAqGofBnWfKJNS8T0PmtS8zlyaMAqzE0OavakQuK%2F0kur8M3i0b2ma03W00pviAkw66ipSyCv7ASfNdQYxmWvURJWFjAKfWUDg%2BE77N4vVMAJupgWO2dWUWkSNiLPP0XvQBTCXzykbmM3rtKsvkanZbUws4FiYRpUeDKGNwdbOpyXZ56q%2BJYYsdzHnagIz8hQiwc%2BkvkgZgOBY9HYNneuBeqGKuWEnmn1Ue1gRJmfNsj9lJZ0AywwmOqtxAY6pgHd39cDnL0RpWXdhon%2Ft%2FzIZ5bKiJh5YjEtzIMOqRxKjObQarDFruHZl8%2FeoyiOTg%2FD6FEXCTGeY0Ft8fcnrSPh5B5tO4IYvWC6eQ1pDSKj6i%2FsOatDz%2BcuwdfcXsFXmywu1r7jDw12naRoVeBk8jJX5f1Goj7HL2wa8DLNi%2BLH%2Be9veYnkoiA%2BA8hoQ5IR1ML%2BMflCcCdHEeZe23uYJ0nSb9rqpCrL&X-Amz-Signature=71a98f4b03c8080d395970383125dfe07320099df1f14ecaa356a3f7e89ccebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFVGERC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZpOUt5tjSi4oXwDuL4MekNKFSf%2BKwuknp%2BNKbHvt6yAiBeITSmiFNEnzsa97aPMCudrtqqQg%2BuRX07l1Tjai9gjiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr9B96NuBabqtPnqKKtwDkpolgEi%2Fh%2Bkz%2B2VqrAHhUr0ylHu1d0H3i2ua3JtxaLjDEUkZR8jiAeaVVVd22MzmTM%2BJiulYGYGmGDbHrX%2BsRHdje6fWA%2B52rnGXZYs96rK1pURopaNSoYMykI33sgq88fXQaXc6L0rH2vDBQ9G%2B8B1h3s792QE5K6MDiP%2FPlyywxbDX4SNJrQNsgKR7KyG3vXtLBG2AqrZqu4Xe0tKNweCydNi%2F3BuxuSjgE4nhl04CdWzuobOZm9M3FUPmOELDBAiefI2WCCA0E28Ersc2Z3aKg0K0f06F8VK%2FfzvnGUB4jK3I20U9Jb8%2FLNHIzqiTQRb9VGs8bnGap3wcj5BPTV8lXqY5C6lB4itldLdtvYBtO3pt1DrzzUKp633sKkNC%2Bncgxg2zAqGofBnWfKJNS8T0PmtS8zlyaMAqzE0OavakQuK%2F0kur8M3i0b2ma03W00pviAkw66ipSyCv7ASfNdQYxmWvURJWFjAKfWUDg%2BE77N4vVMAJupgWO2dWUWkSNiLPP0XvQBTCXzykbmM3rtKsvkanZbUws4FiYRpUeDKGNwdbOpyXZ56q%2BJYYsdzHnagIz8hQiwc%2BkvkgZgOBY9HYNneuBeqGKuWEnmn1Ue1gRJmfNsj9lJZ0AywwmOqtxAY6pgHd39cDnL0RpWXdhon%2Ft%2FzIZ5bKiJh5YjEtzIMOqRxKjObQarDFruHZl8%2FeoyiOTg%2FD6FEXCTGeY0Ft8fcnrSPh5B5tO4IYvWC6eQ1pDSKj6i%2FsOatDz%2BcuwdfcXsFXmywu1r7jDw12naRoVeBk8jJX5f1Goj7HL2wa8DLNi%2BLH%2Be9veYnkoiA%2BA8hoQ5IR1ML%2BMflCcCdHEeZe23uYJ0nSb9rqpCrL&X-Amz-Signature=b2011a6c21bfc50c309b2352dcbc19cf9038f476cfb285bbf0b83e50e3dccf69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGKXAZJU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BWH9gCvvBdBeTfEXl4xdVQ9QqrAJlRj1y9LpcYlFsqwIhAOg4hf9ksAok40ML%2FlQqzG9JIthQeDu%2BZxBJPxBlmn6jKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLompXUdrcEH%2FJRoEq3AOd9tChZVXHfsMlHbJslWfy1%2Fi5Vs8kr8FZTHsITW6FMWdi0PYVHTb77QC922RlzqeCPwfllCoNcDiK2W21D6GcWQ99Ex47lyYHdic6r3Vi84FCv0mle1Dq1BkdWsRYszbFFfzsGRukarsb5dsV%2FB%2FPXaSSp%2FXuBz%2B%2BymfM96RzjtGxKGfddbiu5oe6lpLLnrKTEAB06FMtoEO2Z12nbFeA%2B%2BwB%2BMHjDI1Szkfioq%2FyqxO7zUooHmArvmcqOlWh%2Ft%2B5mdgTknV3tgWukuoCOx648gjXDa69GPlFQuwJabfrd9hkfRy65xXYjeAPkJzcqurDcPomjwY81hA22M21F%2FsbhxdLypJ48JTCunvTGyvLJFGBkgDPdkHgbNUZNjW4wBjndzetYkSugU9bT9pvmHg0YrR1M0K0sE3uf9%2B0UsqFIdPrvp9gMIvTjwbdI1LwKra78vJUIHuyX9%2BUuJ2fv%2FvquNgWKJGREy26%2BewcYOvMmFuShV4xV8ByQ%2FIL2QkVPVL1ZrQQ7pxWFZHevyeCtKeF4VtQpcc0ZVnTfEVoGh%2FP8FPstbLVjDF4MnVc%2Be%2F4F4e1GKWFt%2Fvp1BQ%2F2mah42RfKcyNg1D5VPCGiioyJ%2BIt99vDcTovJOo0DSAdRDCr6q3EBjqkAR%2BeEJLKbuPWGimE3TAZp71fsvaTu0VTuPEVVo9MqNHo4EZ1Q7bBddQMvFOWTkw%2FDsdmg29PP1BhcbjrXuNrQd2T6ZJSzZJMXxjSmgPn6CBiOL%2Fgq9RIX%2FLpw1fXIlQy4Byk5CrLAq9DxbpqMO%2FhZfn6IzhCGQV3QHyV6KRBJQ5zv75ASpONea73Iw7pAgyS6i%2BiucwTa7w65%2BlxYjnY1zu6j1wc&X-Amz-Signature=fe04e78b60def2b9c2684aeb4dd36bb1c9cb882e4af8324270c3230fe0c7e3a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGKXAZJU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BWH9gCvvBdBeTfEXl4xdVQ9QqrAJlRj1y9LpcYlFsqwIhAOg4hf9ksAok40ML%2FlQqzG9JIthQeDu%2BZxBJPxBlmn6jKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLompXUdrcEH%2FJRoEq3AOd9tChZVXHfsMlHbJslWfy1%2Fi5Vs8kr8FZTHsITW6FMWdi0PYVHTb77QC922RlzqeCPwfllCoNcDiK2W21D6GcWQ99Ex47lyYHdic6r3Vi84FCv0mle1Dq1BkdWsRYszbFFfzsGRukarsb5dsV%2FB%2FPXaSSp%2FXuBz%2B%2BymfM96RzjtGxKGfddbiu5oe6lpLLnrKTEAB06FMtoEO2Z12nbFeA%2B%2BwB%2BMHjDI1Szkfioq%2FyqxO7zUooHmArvmcqOlWh%2Ft%2B5mdgTknV3tgWukuoCOx648gjXDa69GPlFQuwJabfrd9hkfRy65xXYjeAPkJzcqurDcPomjwY81hA22M21F%2FsbhxdLypJ48JTCunvTGyvLJFGBkgDPdkHgbNUZNjW4wBjndzetYkSugU9bT9pvmHg0YrR1M0K0sE3uf9%2B0UsqFIdPrvp9gMIvTjwbdI1LwKra78vJUIHuyX9%2BUuJ2fv%2FvquNgWKJGREy26%2BewcYOvMmFuShV4xV8ByQ%2FIL2QkVPVL1ZrQQ7pxWFZHevyeCtKeF4VtQpcc0ZVnTfEVoGh%2FP8FPstbLVjDF4MnVc%2Be%2F4F4e1GKWFt%2Fvp1BQ%2F2mah42RfKcyNg1D5VPCGiioyJ%2BIt99vDcTovJOo0DSAdRDCr6q3EBjqkAR%2BeEJLKbuPWGimE3TAZp71fsvaTu0VTuPEVVo9MqNHo4EZ1Q7bBddQMvFOWTkw%2FDsdmg29PP1BhcbjrXuNrQd2T6ZJSzZJMXxjSmgPn6CBiOL%2Fgq9RIX%2FLpw1fXIlQy4Byk5CrLAq9DxbpqMO%2FhZfn6IzhCGQV3QHyV6KRBJQ5zv75ASpONea73Iw7pAgyS6i%2BiucwTa7w65%2BlxYjnY1zu6j1wc&X-Amz-Signature=fa3add1d4e0262981eb936b63a0cc0cf24379013270fa818073b9af585e6689a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGKXAZJU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BWH9gCvvBdBeTfEXl4xdVQ9QqrAJlRj1y9LpcYlFsqwIhAOg4hf9ksAok40ML%2FlQqzG9JIthQeDu%2BZxBJPxBlmn6jKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLompXUdrcEH%2FJRoEq3AOd9tChZVXHfsMlHbJslWfy1%2Fi5Vs8kr8FZTHsITW6FMWdi0PYVHTb77QC922RlzqeCPwfllCoNcDiK2W21D6GcWQ99Ex47lyYHdic6r3Vi84FCv0mle1Dq1BkdWsRYszbFFfzsGRukarsb5dsV%2FB%2FPXaSSp%2FXuBz%2B%2BymfM96RzjtGxKGfddbiu5oe6lpLLnrKTEAB06FMtoEO2Z12nbFeA%2B%2BwB%2BMHjDI1Szkfioq%2FyqxO7zUooHmArvmcqOlWh%2Ft%2B5mdgTknV3tgWukuoCOx648gjXDa69GPlFQuwJabfrd9hkfRy65xXYjeAPkJzcqurDcPomjwY81hA22M21F%2FsbhxdLypJ48JTCunvTGyvLJFGBkgDPdkHgbNUZNjW4wBjndzetYkSugU9bT9pvmHg0YrR1M0K0sE3uf9%2B0UsqFIdPrvp9gMIvTjwbdI1LwKra78vJUIHuyX9%2BUuJ2fv%2FvquNgWKJGREy26%2BewcYOvMmFuShV4xV8ByQ%2FIL2QkVPVL1ZrQQ7pxWFZHevyeCtKeF4VtQpcc0ZVnTfEVoGh%2FP8FPstbLVjDF4MnVc%2Be%2F4F4e1GKWFt%2Fvp1BQ%2F2mah42RfKcyNg1D5VPCGiioyJ%2BIt99vDcTovJOo0DSAdRDCr6q3EBjqkAR%2BeEJLKbuPWGimE3TAZp71fsvaTu0VTuPEVVo9MqNHo4EZ1Q7bBddQMvFOWTkw%2FDsdmg29PP1BhcbjrXuNrQd2T6ZJSzZJMXxjSmgPn6CBiOL%2Fgq9RIX%2FLpw1fXIlQy4Byk5CrLAq9DxbpqMO%2FhZfn6IzhCGQV3QHyV6KRBJQ5zv75ASpONea73Iw7pAgyS6i%2BiucwTa7w65%2BlxYjnY1zu6j1wc&X-Amz-Signature=fe75f5d434769b4ff5822b65b66be6d895425d02989ce1f0687cca5bd75f6fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGKXAZJU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BWH9gCvvBdBeTfEXl4xdVQ9QqrAJlRj1y9LpcYlFsqwIhAOg4hf9ksAok40ML%2FlQqzG9JIthQeDu%2BZxBJPxBlmn6jKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLompXUdrcEH%2FJRoEq3AOd9tChZVXHfsMlHbJslWfy1%2Fi5Vs8kr8FZTHsITW6FMWdi0PYVHTb77QC922RlzqeCPwfllCoNcDiK2W21D6GcWQ99Ex47lyYHdic6r3Vi84FCv0mle1Dq1BkdWsRYszbFFfzsGRukarsb5dsV%2FB%2FPXaSSp%2FXuBz%2B%2BymfM96RzjtGxKGfddbiu5oe6lpLLnrKTEAB06FMtoEO2Z12nbFeA%2B%2BwB%2BMHjDI1Szkfioq%2FyqxO7zUooHmArvmcqOlWh%2Ft%2B5mdgTknV3tgWukuoCOx648gjXDa69GPlFQuwJabfrd9hkfRy65xXYjeAPkJzcqurDcPomjwY81hA22M21F%2FsbhxdLypJ48JTCunvTGyvLJFGBkgDPdkHgbNUZNjW4wBjndzetYkSugU9bT9pvmHg0YrR1M0K0sE3uf9%2B0UsqFIdPrvp9gMIvTjwbdI1LwKra78vJUIHuyX9%2BUuJ2fv%2FvquNgWKJGREy26%2BewcYOvMmFuShV4xV8ByQ%2FIL2QkVPVL1ZrQQ7pxWFZHevyeCtKeF4VtQpcc0ZVnTfEVoGh%2FP8FPstbLVjDF4MnVc%2Be%2F4F4e1GKWFt%2Fvp1BQ%2F2mah42RfKcyNg1D5VPCGiioyJ%2BIt99vDcTovJOo0DSAdRDCr6q3EBjqkAR%2BeEJLKbuPWGimE3TAZp71fsvaTu0VTuPEVVo9MqNHo4EZ1Q7bBddQMvFOWTkw%2FDsdmg29PP1BhcbjrXuNrQd2T6ZJSzZJMXxjSmgPn6CBiOL%2Fgq9RIX%2FLpw1fXIlQy4Byk5CrLAq9DxbpqMO%2FhZfn6IzhCGQV3QHyV6KRBJQ5zv75ASpONea73Iw7pAgyS6i%2BiucwTa7w65%2BlxYjnY1zu6j1wc&X-Amz-Signature=fbf1011e6f34b8107e7b5bea1bacbe84f651bc340851b9d3b512317dd3f37ba2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGKXAZJU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BWH9gCvvBdBeTfEXl4xdVQ9QqrAJlRj1y9LpcYlFsqwIhAOg4hf9ksAok40ML%2FlQqzG9JIthQeDu%2BZxBJPxBlmn6jKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLompXUdrcEH%2FJRoEq3AOd9tChZVXHfsMlHbJslWfy1%2Fi5Vs8kr8FZTHsITW6FMWdi0PYVHTb77QC922RlzqeCPwfllCoNcDiK2W21D6GcWQ99Ex47lyYHdic6r3Vi84FCv0mle1Dq1BkdWsRYszbFFfzsGRukarsb5dsV%2FB%2FPXaSSp%2FXuBz%2B%2BymfM96RzjtGxKGfddbiu5oe6lpLLnrKTEAB06FMtoEO2Z12nbFeA%2B%2BwB%2BMHjDI1Szkfioq%2FyqxO7zUooHmArvmcqOlWh%2Ft%2B5mdgTknV3tgWukuoCOx648gjXDa69GPlFQuwJabfrd9hkfRy65xXYjeAPkJzcqurDcPomjwY81hA22M21F%2FsbhxdLypJ48JTCunvTGyvLJFGBkgDPdkHgbNUZNjW4wBjndzetYkSugU9bT9pvmHg0YrR1M0K0sE3uf9%2B0UsqFIdPrvp9gMIvTjwbdI1LwKra78vJUIHuyX9%2BUuJ2fv%2FvquNgWKJGREy26%2BewcYOvMmFuShV4xV8ByQ%2FIL2QkVPVL1ZrQQ7pxWFZHevyeCtKeF4VtQpcc0ZVnTfEVoGh%2FP8FPstbLVjDF4MnVc%2Be%2F4F4e1GKWFt%2Fvp1BQ%2F2mah42RfKcyNg1D5VPCGiioyJ%2BIt99vDcTovJOo0DSAdRDCr6q3EBjqkAR%2BeEJLKbuPWGimE3TAZp71fsvaTu0VTuPEVVo9MqNHo4EZ1Q7bBddQMvFOWTkw%2FDsdmg29PP1BhcbjrXuNrQd2T6ZJSzZJMXxjSmgPn6CBiOL%2Fgq9RIX%2FLpw1fXIlQy4Byk5CrLAq9DxbpqMO%2FhZfn6IzhCGQV3QHyV6KRBJQ5zv75ASpONea73Iw7pAgyS6i%2BiucwTa7w65%2BlxYjnY1zu6j1wc&X-Amz-Signature=519335e16e365794f0ef00961403ad0b466eefb7c70420ac17b481277c312ddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGKXAZJU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BWH9gCvvBdBeTfEXl4xdVQ9QqrAJlRj1y9LpcYlFsqwIhAOg4hf9ksAok40ML%2FlQqzG9JIthQeDu%2BZxBJPxBlmn6jKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLompXUdrcEH%2FJRoEq3AOd9tChZVXHfsMlHbJslWfy1%2Fi5Vs8kr8FZTHsITW6FMWdi0PYVHTb77QC922RlzqeCPwfllCoNcDiK2W21D6GcWQ99Ex47lyYHdic6r3Vi84FCv0mle1Dq1BkdWsRYszbFFfzsGRukarsb5dsV%2FB%2FPXaSSp%2FXuBz%2B%2BymfM96RzjtGxKGfddbiu5oe6lpLLnrKTEAB06FMtoEO2Z12nbFeA%2B%2BwB%2BMHjDI1Szkfioq%2FyqxO7zUooHmArvmcqOlWh%2Ft%2B5mdgTknV3tgWukuoCOx648gjXDa69GPlFQuwJabfrd9hkfRy65xXYjeAPkJzcqurDcPomjwY81hA22M21F%2FsbhxdLypJ48JTCunvTGyvLJFGBkgDPdkHgbNUZNjW4wBjndzetYkSugU9bT9pvmHg0YrR1M0K0sE3uf9%2B0UsqFIdPrvp9gMIvTjwbdI1LwKra78vJUIHuyX9%2BUuJ2fv%2FvquNgWKJGREy26%2BewcYOvMmFuShV4xV8ByQ%2FIL2QkVPVL1ZrQQ7pxWFZHevyeCtKeF4VtQpcc0ZVnTfEVoGh%2FP8FPstbLVjDF4MnVc%2Be%2F4F4e1GKWFt%2Fvp1BQ%2F2mah42RfKcyNg1D5VPCGiioyJ%2BIt99vDcTovJOo0DSAdRDCr6q3EBjqkAR%2BeEJLKbuPWGimE3TAZp71fsvaTu0VTuPEVVo9MqNHo4EZ1Q7bBddQMvFOWTkw%2FDsdmg29PP1BhcbjrXuNrQd2T6ZJSzZJMXxjSmgPn6CBiOL%2Fgq9RIX%2FLpw1fXIlQy4Byk5CrLAq9DxbpqMO%2FhZfn6IzhCGQV3QHyV6KRBJQ5zv75ASpONea73Iw7pAgyS6i%2BiucwTa7w65%2BlxYjnY1zu6j1wc&X-Amz-Signature=f4af46ed2ca8c32d47d43ce4f543c52deb941e9018b1bd3f807b39356122f24a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGKXAZJU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BWH9gCvvBdBeTfEXl4xdVQ9QqrAJlRj1y9LpcYlFsqwIhAOg4hf9ksAok40ML%2FlQqzG9JIthQeDu%2BZxBJPxBlmn6jKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLompXUdrcEH%2FJRoEq3AOd9tChZVXHfsMlHbJslWfy1%2Fi5Vs8kr8FZTHsITW6FMWdi0PYVHTb77QC922RlzqeCPwfllCoNcDiK2W21D6GcWQ99Ex47lyYHdic6r3Vi84FCv0mle1Dq1BkdWsRYszbFFfzsGRukarsb5dsV%2FB%2FPXaSSp%2FXuBz%2B%2BymfM96RzjtGxKGfddbiu5oe6lpLLnrKTEAB06FMtoEO2Z12nbFeA%2B%2BwB%2BMHjDI1Szkfioq%2FyqxO7zUooHmArvmcqOlWh%2Ft%2B5mdgTknV3tgWukuoCOx648gjXDa69GPlFQuwJabfrd9hkfRy65xXYjeAPkJzcqurDcPomjwY81hA22M21F%2FsbhxdLypJ48JTCunvTGyvLJFGBkgDPdkHgbNUZNjW4wBjndzetYkSugU9bT9pvmHg0YrR1M0K0sE3uf9%2B0UsqFIdPrvp9gMIvTjwbdI1LwKra78vJUIHuyX9%2BUuJ2fv%2FvquNgWKJGREy26%2BewcYOvMmFuShV4xV8ByQ%2FIL2QkVPVL1ZrQQ7pxWFZHevyeCtKeF4VtQpcc0ZVnTfEVoGh%2FP8FPstbLVjDF4MnVc%2Be%2F4F4e1GKWFt%2Fvp1BQ%2F2mah42RfKcyNg1D5VPCGiioyJ%2BIt99vDcTovJOo0DSAdRDCr6q3EBjqkAR%2BeEJLKbuPWGimE3TAZp71fsvaTu0VTuPEVVo9MqNHo4EZ1Q7bBddQMvFOWTkw%2FDsdmg29PP1BhcbjrXuNrQd2T6ZJSzZJMXxjSmgPn6CBiOL%2Fgq9RIX%2FLpw1fXIlQy4Byk5CrLAq9DxbpqMO%2FhZfn6IzhCGQV3QHyV6KRBJQ5zv75ASpONea73Iw7pAgyS6i%2BiucwTa7w65%2BlxYjnY1zu6j1wc&X-Amz-Signature=3afe52f7c6f6a94bce6fd89e8dd988b3f591e3b544b7d8963ff78881f02897e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
