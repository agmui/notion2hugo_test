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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R27JNQMO%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCrJlnwZJNk6Ox0%2FAzIVgtRsNwudn%2F5byB%2BdcO31JSTxQIgQZsGeYqq5x7rO4lWSa%2FYYfBW5YUHwWwvogXN7Y7ZaGMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYfNof%2FtWvSee%2BbeCrcA%2BU72JZ7Z4PcXfqg4gvxJGI64%2BtoStfJlYDy51WnUNC9BwX%2FT0MU1d%2FJD8L6GSlQ76QXhIH91UXuoAZbGd1G1uegufl2Y0Oq4Yab19aXsAZ7m92w3Le3tYqKp%2BMjDPF24ja%2BwdZMmLgE5ODcg%2FGgTmZq05eHQ5ommAkkLMo5G2lVOk%2BzLtwBY48umaBMN7%2F%2F6g%2BCyI2gPMicYrsg78J8wbAgyQVsuWPDhpw5LoQb%2Fb2oiwyOHaaSRpAwmgfrJ%2B%2B7QUe3LzzR2idlj2DujbkwNuT3XGYL3ypXzYeSfkNQN1lnPoRyq5de32Y5AUsT7zF3oaVADhBvhfTtDYh%2Fmo5C9HoTPHratxTYLVv11hkVUdA3azCWPwZcbFOr7guanuJmPK8o7wHM%2B5qSjUKzKRD2T%2BY%2FHxc40RZflrIoYwyRd05KSJ1mr9urnzuGdvTlo4Fx%2BV%2BqjCw%2FPPhAYbozthQO%2FUVWJYYNudBDIjJ5FYSw2RDjYNi5RgO2kcQRaWZ%2FKGnI24kGJR53nMHRxX3L%2F3hOSTGSHFRE4YHbEH7DI7rXjLA%2BAtk0OYTZf1KsEdaIvRozkyoxDD74NTmU1MZl0%2FmAUt1oSF51XFXWd8Jb1b2UqaLwHvSIup3dkIMhq63cMK%2FQs9QGOqUBpFEbeVvuBFTZlYZKtPf5mesXwzfXFHFP4TMI%2FruXM8RSsrWWWZYTADjg%2F0MDxfpyMoN9MCajJLlORtYO2Zx7bFcm1eMapLr%2BN9YUYLIlL7JpntnyD9DdpISs%2F8NEhrGTQ0zg44%2BnqU6VClofoRPo0vP4SQcViita%2BNMojcohRZPAYKd9%2FrPFlLd71d7DznSs4gUy%2FylnqdA0x6ej9tV%2FODjq6KKY&X-Amz-Signature=fc733b91d613adc7b7ca6d01255522fdb5205fd84c7feb5c38ac988f8467199e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R27JNQMO%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCrJlnwZJNk6Ox0%2FAzIVgtRsNwudn%2F5byB%2BdcO31JSTxQIgQZsGeYqq5x7rO4lWSa%2FYYfBW5YUHwWwvogXN7Y7ZaGMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYfNof%2FtWvSee%2BbeCrcA%2BU72JZ7Z4PcXfqg4gvxJGI64%2BtoStfJlYDy51WnUNC9BwX%2FT0MU1d%2FJD8L6GSlQ76QXhIH91UXuoAZbGd1G1uegufl2Y0Oq4Yab19aXsAZ7m92w3Le3tYqKp%2BMjDPF24ja%2BwdZMmLgE5ODcg%2FGgTmZq05eHQ5ommAkkLMo5G2lVOk%2BzLtwBY48umaBMN7%2F%2F6g%2BCyI2gPMicYrsg78J8wbAgyQVsuWPDhpw5LoQb%2Fb2oiwyOHaaSRpAwmgfrJ%2B%2B7QUe3LzzR2idlj2DujbkwNuT3XGYL3ypXzYeSfkNQN1lnPoRyq5de32Y5AUsT7zF3oaVADhBvhfTtDYh%2Fmo5C9HoTPHratxTYLVv11hkVUdA3azCWPwZcbFOr7guanuJmPK8o7wHM%2B5qSjUKzKRD2T%2BY%2FHxc40RZflrIoYwyRd05KSJ1mr9urnzuGdvTlo4Fx%2BV%2BqjCw%2FPPhAYbozthQO%2FUVWJYYNudBDIjJ5FYSw2RDjYNi5RgO2kcQRaWZ%2FKGnI24kGJR53nMHRxX3L%2F3hOSTGSHFRE4YHbEH7DI7rXjLA%2BAtk0OYTZf1KsEdaIvRozkyoxDD74NTmU1MZl0%2FmAUt1oSF51XFXWd8Jb1b2UqaLwHvSIup3dkIMhq63cMK%2FQs9QGOqUBpFEbeVvuBFTZlYZKtPf5mesXwzfXFHFP4TMI%2FruXM8RSsrWWWZYTADjg%2F0MDxfpyMoN9MCajJLlORtYO2Zx7bFcm1eMapLr%2BN9YUYLIlL7JpntnyD9DdpISs%2F8NEhrGTQ0zg44%2BnqU6VClofoRPo0vP4SQcViita%2BNMojcohRZPAYKd9%2FrPFlLd71d7DznSs4gUy%2FylnqdA0x6ej9tV%2FODjq6KKY&X-Amz-Signature=4cff3366cd29e907c4d382d501f641f9e3f64effc828433f679bf94bb8bd7255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R27JNQMO%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCrJlnwZJNk6Ox0%2FAzIVgtRsNwudn%2F5byB%2BdcO31JSTxQIgQZsGeYqq5x7rO4lWSa%2FYYfBW5YUHwWwvogXN7Y7ZaGMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYfNof%2FtWvSee%2BbeCrcA%2BU72JZ7Z4PcXfqg4gvxJGI64%2BtoStfJlYDy51WnUNC9BwX%2FT0MU1d%2FJD8L6GSlQ76QXhIH91UXuoAZbGd1G1uegufl2Y0Oq4Yab19aXsAZ7m92w3Le3tYqKp%2BMjDPF24ja%2BwdZMmLgE5ODcg%2FGgTmZq05eHQ5ommAkkLMo5G2lVOk%2BzLtwBY48umaBMN7%2F%2F6g%2BCyI2gPMicYrsg78J8wbAgyQVsuWPDhpw5LoQb%2Fb2oiwyOHaaSRpAwmgfrJ%2B%2B7QUe3LzzR2idlj2DujbkwNuT3XGYL3ypXzYeSfkNQN1lnPoRyq5de32Y5AUsT7zF3oaVADhBvhfTtDYh%2Fmo5C9HoTPHratxTYLVv11hkVUdA3azCWPwZcbFOr7guanuJmPK8o7wHM%2B5qSjUKzKRD2T%2BY%2FHxc40RZflrIoYwyRd05KSJ1mr9urnzuGdvTlo4Fx%2BV%2BqjCw%2FPPhAYbozthQO%2FUVWJYYNudBDIjJ5FYSw2RDjYNi5RgO2kcQRaWZ%2FKGnI24kGJR53nMHRxX3L%2F3hOSTGSHFRE4YHbEH7DI7rXjLA%2BAtk0OYTZf1KsEdaIvRozkyoxDD74NTmU1MZl0%2FmAUt1oSF51XFXWd8Jb1b2UqaLwHvSIup3dkIMhq63cMK%2FQs9QGOqUBpFEbeVvuBFTZlYZKtPf5mesXwzfXFHFP4TMI%2FruXM8RSsrWWWZYTADjg%2F0MDxfpyMoN9MCajJLlORtYO2Zx7bFcm1eMapLr%2BN9YUYLIlL7JpntnyD9DdpISs%2F8NEhrGTQ0zg44%2BnqU6VClofoRPo0vP4SQcViita%2BNMojcohRZPAYKd9%2FrPFlLd71d7DznSs4gUy%2FylnqdA0x6ej9tV%2FODjq6KKY&X-Amz-Signature=07d2324c7aaeb8ee31f6b6a8cfa20358ff91a55ad37b46b59d8e214e5405ed90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R27JNQMO%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCrJlnwZJNk6Ox0%2FAzIVgtRsNwudn%2F5byB%2BdcO31JSTxQIgQZsGeYqq5x7rO4lWSa%2FYYfBW5YUHwWwvogXN7Y7ZaGMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYfNof%2FtWvSee%2BbeCrcA%2BU72JZ7Z4PcXfqg4gvxJGI64%2BtoStfJlYDy51WnUNC9BwX%2FT0MU1d%2FJD8L6GSlQ76QXhIH91UXuoAZbGd1G1uegufl2Y0Oq4Yab19aXsAZ7m92w3Le3tYqKp%2BMjDPF24ja%2BwdZMmLgE5ODcg%2FGgTmZq05eHQ5ommAkkLMo5G2lVOk%2BzLtwBY48umaBMN7%2F%2F6g%2BCyI2gPMicYrsg78J8wbAgyQVsuWPDhpw5LoQb%2Fb2oiwyOHaaSRpAwmgfrJ%2B%2B7QUe3LzzR2idlj2DujbkwNuT3XGYL3ypXzYeSfkNQN1lnPoRyq5de32Y5AUsT7zF3oaVADhBvhfTtDYh%2Fmo5C9HoTPHratxTYLVv11hkVUdA3azCWPwZcbFOr7guanuJmPK8o7wHM%2B5qSjUKzKRD2T%2BY%2FHxc40RZflrIoYwyRd05KSJ1mr9urnzuGdvTlo4Fx%2BV%2BqjCw%2FPPhAYbozthQO%2FUVWJYYNudBDIjJ5FYSw2RDjYNi5RgO2kcQRaWZ%2FKGnI24kGJR53nMHRxX3L%2F3hOSTGSHFRE4YHbEH7DI7rXjLA%2BAtk0OYTZf1KsEdaIvRozkyoxDD74NTmU1MZl0%2FmAUt1oSF51XFXWd8Jb1b2UqaLwHvSIup3dkIMhq63cMK%2FQs9QGOqUBpFEbeVvuBFTZlYZKtPf5mesXwzfXFHFP4TMI%2FruXM8RSsrWWWZYTADjg%2F0MDxfpyMoN9MCajJLlORtYO2Zx7bFcm1eMapLr%2BN9YUYLIlL7JpntnyD9DdpISs%2F8NEhrGTQ0zg44%2BnqU6VClofoRPo0vP4SQcViita%2BNMojcohRZPAYKd9%2FrPFlLd71d7DznSs4gUy%2FylnqdA0x6ej9tV%2FODjq6KKY&X-Amz-Signature=14bb82ed95516636e6114fe984055e27bc531db30143fe1be32f4b7dc23dddfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R27JNQMO%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCrJlnwZJNk6Ox0%2FAzIVgtRsNwudn%2F5byB%2BdcO31JSTxQIgQZsGeYqq5x7rO4lWSa%2FYYfBW5YUHwWwvogXN7Y7ZaGMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYfNof%2FtWvSee%2BbeCrcA%2BU72JZ7Z4PcXfqg4gvxJGI64%2BtoStfJlYDy51WnUNC9BwX%2FT0MU1d%2FJD8L6GSlQ76QXhIH91UXuoAZbGd1G1uegufl2Y0Oq4Yab19aXsAZ7m92w3Le3tYqKp%2BMjDPF24ja%2BwdZMmLgE5ODcg%2FGgTmZq05eHQ5ommAkkLMo5G2lVOk%2BzLtwBY48umaBMN7%2F%2F6g%2BCyI2gPMicYrsg78J8wbAgyQVsuWPDhpw5LoQb%2Fb2oiwyOHaaSRpAwmgfrJ%2B%2B7QUe3LzzR2idlj2DujbkwNuT3XGYL3ypXzYeSfkNQN1lnPoRyq5de32Y5AUsT7zF3oaVADhBvhfTtDYh%2Fmo5C9HoTPHratxTYLVv11hkVUdA3azCWPwZcbFOr7guanuJmPK8o7wHM%2B5qSjUKzKRD2T%2BY%2FHxc40RZflrIoYwyRd05KSJ1mr9urnzuGdvTlo4Fx%2BV%2BqjCw%2FPPhAYbozthQO%2FUVWJYYNudBDIjJ5FYSw2RDjYNi5RgO2kcQRaWZ%2FKGnI24kGJR53nMHRxX3L%2F3hOSTGSHFRE4YHbEH7DI7rXjLA%2BAtk0OYTZf1KsEdaIvRozkyoxDD74NTmU1MZl0%2FmAUt1oSF51XFXWd8Jb1b2UqaLwHvSIup3dkIMhq63cMK%2FQs9QGOqUBpFEbeVvuBFTZlYZKtPf5mesXwzfXFHFP4TMI%2FruXM8RSsrWWWZYTADjg%2F0MDxfpyMoN9MCajJLlORtYO2Zx7bFcm1eMapLr%2BN9YUYLIlL7JpntnyD9DdpISs%2F8NEhrGTQ0zg44%2BnqU6VClofoRPo0vP4SQcViita%2BNMojcohRZPAYKd9%2FrPFlLd71d7DznSs4gUy%2FylnqdA0x6ej9tV%2FODjq6KKY&X-Amz-Signature=a7df6462f88a14619df2dea98b3017bd5e9e36a2177105d4712c9a5f01c8f152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R27JNQMO%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCrJlnwZJNk6Ox0%2FAzIVgtRsNwudn%2F5byB%2BdcO31JSTxQIgQZsGeYqq5x7rO4lWSa%2FYYfBW5YUHwWwvogXN7Y7ZaGMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYfNof%2FtWvSee%2BbeCrcA%2BU72JZ7Z4PcXfqg4gvxJGI64%2BtoStfJlYDy51WnUNC9BwX%2FT0MU1d%2FJD8L6GSlQ76QXhIH91UXuoAZbGd1G1uegufl2Y0Oq4Yab19aXsAZ7m92w3Le3tYqKp%2BMjDPF24ja%2BwdZMmLgE5ODcg%2FGgTmZq05eHQ5ommAkkLMo5G2lVOk%2BzLtwBY48umaBMN7%2F%2F6g%2BCyI2gPMicYrsg78J8wbAgyQVsuWPDhpw5LoQb%2Fb2oiwyOHaaSRpAwmgfrJ%2B%2B7QUe3LzzR2idlj2DujbkwNuT3XGYL3ypXzYeSfkNQN1lnPoRyq5de32Y5AUsT7zF3oaVADhBvhfTtDYh%2Fmo5C9HoTPHratxTYLVv11hkVUdA3azCWPwZcbFOr7guanuJmPK8o7wHM%2B5qSjUKzKRD2T%2BY%2FHxc40RZflrIoYwyRd05KSJ1mr9urnzuGdvTlo4Fx%2BV%2BqjCw%2FPPhAYbozthQO%2FUVWJYYNudBDIjJ5FYSw2RDjYNi5RgO2kcQRaWZ%2FKGnI24kGJR53nMHRxX3L%2F3hOSTGSHFRE4YHbEH7DI7rXjLA%2BAtk0OYTZf1KsEdaIvRozkyoxDD74NTmU1MZl0%2FmAUt1oSF51XFXWd8Jb1b2UqaLwHvSIup3dkIMhq63cMK%2FQs9QGOqUBpFEbeVvuBFTZlYZKtPf5mesXwzfXFHFP4TMI%2FruXM8RSsrWWWZYTADjg%2F0MDxfpyMoN9MCajJLlORtYO2Zx7bFcm1eMapLr%2BN9YUYLIlL7JpntnyD9DdpISs%2F8NEhrGTQ0zg44%2BnqU6VClofoRPo0vP4SQcViita%2BNMojcohRZPAYKd9%2FrPFlLd71d7DznSs4gUy%2FylnqdA0x6ej9tV%2FODjq6KKY&X-Amz-Signature=9a17d13efcdc450ea45b7adc43d09c1087d6bbefa96f18fb9b5756ea611d51fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R27JNQMO%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCrJlnwZJNk6Ox0%2FAzIVgtRsNwudn%2F5byB%2BdcO31JSTxQIgQZsGeYqq5x7rO4lWSa%2FYYfBW5YUHwWwvogXN7Y7ZaGMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYfNof%2FtWvSee%2BbeCrcA%2BU72JZ7Z4PcXfqg4gvxJGI64%2BtoStfJlYDy51WnUNC9BwX%2FT0MU1d%2FJD8L6GSlQ76QXhIH91UXuoAZbGd1G1uegufl2Y0Oq4Yab19aXsAZ7m92w3Le3tYqKp%2BMjDPF24ja%2BwdZMmLgE5ODcg%2FGgTmZq05eHQ5ommAkkLMo5G2lVOk%2BzLtwBY48umaBMN7%2F%2F6g%2BCyI2gPMicYrsg78J8wbAgyQVsuWPDhpw5LoQb%2Fb2oiwyOHaaSRpAwmgfrJ%2B%2B7QUe3LzzR2idlj2DujbkwNuT3XGYL3ypXzYeSfkNQN1lnPoRyq5de32Y5AUsT7zF3oaVADhBvhfTtDYh%2Fmo5C9HoTPHratxTYLVv11hkVUdA3azCWPwZcbFOr7guanuJmPK8o7wHM%2B5qSjUKzKRD2T%2BY%2FHxc40RZflrIoYwyRd05KSJ1mr9urnzuGdvTlo4Fx%2BV%2BqjCw%2FPPhAYbozthQO%2FUVWJYYNudBDIjJ5FYSw2RDjYNi5RgO2kcQRaWZ%2FKGnI24kGJR53nMHRxX3L%2F3hOSTGSHFRE4YHbEH7DI7rXjLA%2BAtk0OYTZf1KsEdaIvRozkyoxDD74NTmU1MZl0%2FmAUt1oSF51XFXWd8Jb1b2UqaLwHvSIup3dkIMhq63cMK%2FQs9QGOqUBpFEbeVvuBFTZlYZKtPf5mesXwzfXFHFP4TMI%2FruXM8RSsrWWWZYTADjg%2F0MDxfpyMoN9MCajJLlORtYO2Zx7bFcm1eMapLr%2BN9YUYLIlL7JpntnyD9DdpISs%2F8NEhrGTQ0zg44%2BnqU6VClofoRPo0vP4SQcViita%2BNMojcohRZPAYKd9%2FrPFlLd71d7DznSs4gUy%2FylnqdA0x6ej9tV%2FODjq6KKY&X-Amz-Signature=262b6411270f55bf199658e0ac06069db1a8c98824b1fddfcb69a99fbe5b14ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R27JNQMO%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCrJlnwZJNk6Ox0%2FAzIVgtRsNwudn%2F5byB%2BdcO31JSTxQIgQZsGeYqq5x7rO4lWSa%2FYYfBW5YUHwWwvogXN7Y7ZaGMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYfNof%2FtWvSee%2BbeCrcA%2BU72JZ7Z4PcXfqg4gvxJGI64%2BtoStfJlYDy51WnUNC9BwX%2FT0MU1d%2FJD8L6GSlQ76QXhIH91UXuoAZbGd1G1uegufl2Y0Oq4Yab19aXsAZ7m92w3Le3tYqKp%2BMjDPF24ja%2BwdZMmLgE5ODcg%2FGgTmZq05eHQ5ommAkkLMo5G2lVOk%2BzLtwBY48umaBMN7%2F%2F6g%2BCyI2gPMicYrsg78J8wbAgyQVsuWPDhpw5LoQb%2Fb2oiwyOHaaSRpAwmgfrJ%2B%2B7QUe3LzzR2idlj2DujbkwNuT3XGYL3ypXzYeSfkNQN1lnPoRyq5de32Y5AUsT7zF3oaVADhBvhfTtDYh%2Fmo5C9HoTPHratxTYLVv11hkVUdA3azCWPwZcbFOr7guanuJmPK8o7wHM%2B5qSjUKzKRD2T%2BY%2FHxc40RZflrIoYwyRd05KSJ1mr9urnzuGdvTlo4Fx%2BV%2BqjCw%2FPPhAYbozthQO%2FUVWJYYNudBDIjJ5FYSw2RDjYNi5RgO2kcQRaWZ%2FKGnI24kGJR53nMHRxX3L%2F3hOSTGSHFRE4YHbEH7DI7rXjLA%2BAtk0OYTZf1KsEdaIvRozkyoxDD74NTmU1MZl0%2FmAUt1oSF51XFXWd8Jb1b2UqaLwHvSIup3dkIMhq63cMK%2FQs9QGOqUBpFEbeVvuBFTZlYZKtPf5mesXwzfXFHFP4TMI%2FruXM8RSsrWWWZYTADjg%2F0MDxfpyMoN9MCajJLlORtYO2Zx7bFcm1eMapLr%2BN9YUYLIlL7JpntnyD9DdpISs%2F8NEhrGTQ0zg44%2BnqU6VClofoRPo0vP4SQcViita%2BNMojcohRZPAYKd9%2FrPFlLd71d7DznSs4gUy%2FylnqdA0x6ej9tV%2FODjq6KKY&X-Amz-Signature=6fca2ca7050028955644b17919225a5d0890bba1d3a3d586b349a4bdeca3b26b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R27JNQMO%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCrJlnwZJNk6Ox0%2FAzIVgtRsNwudn%2F5byB%2BdcO31JSTxQIgQZsGeYqq5x7rO4lWSa%2FYYfBW5YUHwWwvogXN7Y7ZaGMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYfNof%2FtWvSee%2BbeCrcA%2BU72JZ7Z4PcXfqg4gvxJGI64%2BtoStfJlYDy51WnUNC9BwX%2FT0MU1d%2FJD8L6GSlQ76QXhIH91UXuoAZbGd1G1uegufl2Y0Oq4Yab19aXsAZ7m92w3Le3tYqKp%2BMjDPF24ja%2BwdZMmLgE5ODcg%2FGgTmZq05eHQ5ommAkkLMo5G2lVOk%2BzLtwBY48umaBMN7%2F%2F6g%2BCyI2gPMicYrsg78J8wbAgyQVsuWPDhpw5LoQb%2Fb2oiwyOHaaSRpAwmgfrJ%2B%2B7QUe3LzzR2idlj2DujbkwNuT3XGYL3ypXzYeSfkNQN1lnPoRyq5de32Y5AUsT7zF3oaVADhBvhfTtDYh%2Fmo5C9HoTPHratxTYLVv11hkVUdA3azCWPwZcbFOr7guanuJmPK8o7wHM%2B5qSjUKzKRD2T%2BY%2FHxc40RZflrIoYwyRd05KSJ1mr9urnzuGdvTlo4Fx%2BV%2BqjCw%2FPPhAYbozthQO%2FUVWJYYNudBDIjJ5FYSw2RDjYNi5RgO2kcQRaWZ%2FKGnI24kGJR53nMHRxX3L%2F3hOSTGSHFRE4YHbEH7DI7rXjLA%2BAtk0OYTZf1KsEdaIvRozkyoxDD74NTmU1MZl0%2FmAUt1oSF51XFXWd8Jb1b2UqaLwHvSIup3dkIMhq63cMK%2FQs9QGOqUBpFEbeVvuBFTZlYZKtPf5mesXwzfXFHFP4TMI%2FruXM8RSsrWWWZYTADjg%2F0MDxfpyMoN9MCajJLlORtYO2Zx7bFcm1eMapLr%2BN9YUYLIlL7JpntnyD9DdpISs%2F8NEhrGTQ0zg44%2BnqU6VClofoRPo0vP4SQcViita%2BNMojcohRZPAYKd9%2FrPFlLd71d7DznSs4gUy%2FylnqdA0x6ej9tV%2FODjq6KKY&X-Amz-Signature=1a74e0e1f4b25ba416676664bd85ace1eb26ded622019c2e0307704e703afdc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R27JNQMO%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCrJlnwZJNk6Ox0%2FAzIVgtRsNwudn%2F5byB%2BdcO31JSTxQIgQZsGeYqq5x7rO4lWSa%2FYYfBW5YUHwWwvogXN7Y7ZaGMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYfNof%2FtWvSee%2BbeCrcA%2BU72JZ7Z4PcXfqg4gvxJGI64%2BtoStfJlYDy51WnUNC9BwX%2FT0MU1d%2FJD8L6GSlQ76QXhIH91UXuoAZbGd1G1uegufl2Y0Oq4Yab19aXsAZ7m92w3Le3tYqKp%2BMjDPF24ja%2BwdZMmLgE5ODcg%2FGgTmZq05eHQ5ommAkkLMo5G2lVOk%2BzLtwBY48umaBMN7%2F%2F6g%2BCyI2gPMicYrsg78J8wbAgyQVsuWPDhpw5LoQb%2Fb2oiwyOHaaSRpAwmgfrJ%2B%2B7QUe3LzzR2idlj2DujbkwNuT3XGYL3ypXzYeSfkNQN1lnPoRyq5de32Y5AUsT7zF3oaVADhBvhfTtDYh%2Fmo5C9HoTPHratxTYLVv11hkVUdA3azCWPwZcbFOr7guanuJmPK8o7wHM%2B5qSjUKzKRD2T%2BY%2FHxc40RZflrIoYwyRd05KSJ1mr9urnzuGdvTlo4Fx%2BV%2BqjCw%2FPPhAYbozthQO%2FUVWJYYNudBDIjJ5FYSw2RDjYNi5RgO2kcQRaWZ%2FKGnI24kGJR53nMHRxX3L%2F3hOSTGSHFRE4YHbEH7DI7rXjLA%2BAtk0OYTZf1KsEdaIvRozkyoxDD74NTmU1MZl0%2FmAUt1oSF51XFXWd8Jb1b2UqaLwHvSIup3dkIMhq63cMK%2FQs9QGOqUBpFEbeVvuBFTZlYZKtPf5mesXwzfXFHFP4TMI%2FruXM8RSsrWWWZYTADjg%2F0MDxfpyMoN9MCajJLlORtYO2Zx7bFcm1eMapLr%2BN9YUYLIlL7JpntnyD9DdpISs%2F8NEhrGTQ0zg44%2BnqU6VClofoRPo0vP4SQcViita%2BNMojcohRZPAYKd9%2FrPFlLd71d7DznSs4gUy%2FylnqdA0x6ej9tV%2FODjq6KKY&X-Amz-Signature=2042b8a633efb3c68b4da439ea70b6dbf3af11e95711410e2d6ed08bbbfefe7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDOI5KXE%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCqus6fiNuENt%2FKOxYRwEQf316W%2B02k%2FElvoNckN8y27AIhAOtTGvrrEraESed4pZCZlT3fCDp8TPYSYOWX%2FGs9%2FhxcKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUYckYyNs9%2BdGyDeQq3AO2m8GmbpAnJyhcqN%2BJ4tom2NbjUgV8fKWMX9R4f5cwknowlqinEjSfYDL1msJYKPPOogktN1cG25MwC1btXwzaWFk%2FlhK6agZZdAzlkK%2BpvHF%2FBZaHgrw4Nge2CzNCMkCDuPt2TgS2I%2F7mckCVLFRbbZ79OGhegwTeEPxZ6kIaNCiOrT%2BmPaDvdle%2Bsdyk7c4l0Vn6Kjwek%2FYwhZhWxYRSflrDIwzEbG6VaX6XMyFd7vRx4kUjw8Ax2hVVoK8yVl6eh%2Bii1f%2FMBMCLgarH57q1lM%2Fo%2Brso6QZhb8NYbz3xzJdOMNQNJHpu04OmSTrWH7js%2Fx%2Fk0rIOBDCicQt4ZyCCnGtzOQZYS7n1VoCInWH7FzdnfEoD5qwVBuUgtTFjfKZXkpjd1LxYZDYOVtb1aN%2FM8s%2BGZo12vF2IYLkxOYNONG0ZiemoLLb22I6XTvTbiWZ8NkK2fKwlwmjCk5KPdeni4rkXc0kWAmGodQkfdvTcMIoywZm%2FRcuw9aUkUjKtrw2wvbJs9eehug%2B42j1%2Btxkb0Ln8vOBkIFs%2F43FdBsUtF%2F%2BmM0RG1nd6NyDAjzMNWFASRhygqjRFj5vZIgaoNqxzBVyRd8XjnR%2FbQ%2FPd7dtY7fJFinDMujLrsUm%2BbjCe0bPUBjqkAfJmqK%2B49j6FFvWFfgiHPkm6xPEuvO6KrKsJZQiYG08i8qb%2F7j8Vav8YYUmZJjM7lv68T8QTF1RodDldMoBDQ4HA1qEjP9W1ofcV1Ibvb86lXxQJWqRmAIyqHqNOBIroDMsu9FIKJNSPvDC3qw1m14lLp0ZA%2FNFtq8Fmn0TtML3pZnfoIIX5Wn8xaks1Abdqt7UD96voQLcVA0RM6DddS7lWe66m&X-Amz-Signature=03ac20c60d3a5bcb4800d5bc39bc88b957222537e6ebf88b9232481216ef9aef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ALYUFYI%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBlfBE2YyJkC%2Bz%2FWZg4U0UBwRCCmYCp0jN7AOwzq98p1AiEAsUsx51VblNblWqq3DV4GG3NPSsTkbBLtBKAMV4iNHNcqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7qulU7Ed2HU7jWTCrcA1rzDU5UoGr8lnPKxbN2VGlp%2BMWtsMDkrqRLzMs3DRk9rzoRV2SQEwaOiyxUd0Vcl2ajlsxbzwn3UehmCHlgMAk%2F4XRq6R9jPCWrda2L8J6scWv%2Fdw1HO73XC0vtv%2BRcj9f2DF8Wx2yygJIapa%2BghHZrMSma6DgGsRyHu8Zq7jpoRRB%2BOrDLB6I%2FlaK8bm9QwMKjqL7o86gUSHBJpZ%2BPtTwaga9bSMPjg1iY%2Fcl%2BH3i1EqEGDxisNtceslmviexV%2FgoA3x4%2FRm7%2Fi7kU0qFpFd%2FyzNxjb8Wxv9Ac9GyvVXlsxekS5zUwjOdhXBv6%2Fuvv5wBZ3kdvwDA%2FMvZFO1YjNtbvFYU9iTZu3P77kKSUd%2BYsx9CPW9lP%2BdKVwzlsO99atpn7j7lghapeTSEwV%2BWop6FKWgwBfm5BnELdYdub8TJ3CFCirbEWFUs7HgOfsofVosFVKoz16jO%2Fm7WWurFTWDkzC5cV8NIft3D6wViVmuypTQ990ClF48wQaHZOptsBkAA1hFo01%2BOPjepIcHimaDAi6lRl3DeFQTyBVrQLgTl6J8H8sdKG9AGG1foDG2FkYczocoeCogjwih3RvahB9xDdrHCK6dc2dBbgeYBJHkiyNyChtjFU%2Bjrb80I%2BMPPRs9QGOqUB8jKg8adhMOXKS3ERPEGwciE4HZDDK8xqAmavo%2B%2F8vP%2FyJBTG8pYxtE51rmO0J84PqpCHPC5VyrhMlAzuwT1mTZDaQ%2F1DUUUARrW%2BFich3qynLFGOIlZPZr1vz75A38e0xy87Kb0RU1cWXNSyfckQIktJb5BU2hbd9tZxE6L%2BXi92EdUF6%2B1WTFiOF32ONBJj0l3U5ZE%2Fg5fpxfGsVZbCHpQikkxk&X-Amz-Signature=f08b951e450898cf81a3c7aa9d7fb8225734a511c51a17f3a5109bd5fc81c00a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NGFNFZZ%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIA4Z49b2MwymXn8IbwlYF65eN2n242h3fRT%2F1DtFtvWyAiBegsffvgKl%2BKBXAJvxtL5mIx2f%2FAeEWf%2BAns5XOW1UhCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5lxItKQoQHRJxkl1KtwDzHumzdkNYp2XBCI%2BmlQt%2FmZoh9Bxa4bzBz%2BUeYnpntiNzW9goiE5OH5PuOZ30lwWzX7cm9zlADSIIemXyAH0B0p%2BwG%2FuqdmB3kG3%2BCPRYffXOCm6i1md5gA7kztOTJB9%2FBoIov%2FGcguhpzyAYvdkOeCfPpmw4vvCBB%2FD8RmDpbibUSIEZ%2BQOfP3OqldQ4OR8hKZk2vCuYcVxwb03sA83mDfbXRv7ebZ%2BuDvxYU5iFm1p66V3OY0HLTKqdjL7x5n9Mc0b2zGDQCr4xFzOVD8imd0PbUAX8IFIHpXzumVL1%2Bbsr4IyvLiTIgaH2IcaP2dEhJYRyYxuk5hz5KL23lZ7g%2FeayZhaQ5T85xfcdtanzI55uYXVwjzZY4Vc1I%2Fdg03ngAFjI94h%2BiwtyAfGYy1gqIAdBRAjWnC%2BVxgh37P6Rsb8eeTOHktzjmnLgdn7avvLcJ%2FzBmXdjfTXzCiYQFjAnJ2emVLEQh1jCfJpklZlE%2FGtJGPPv2iRHgDFLFfOeoHJgQhi4JzJDTSJ2hl9t6Z9dI%2FT4majSGTHS5NcPDRc91LJWFjOXDsp%2ByolGp8n4wf4Tz5lruw%2FlIDaQpBc004GywwPIrlLS%2FDaNmqMTTZUZD5DQ2Nz5dMb3Lt55oEw1dOz1AY6pgFpT3Oj6K%2FLN9GiWOSWDXxXDa3xkjeeTZDYtWFwzgjSlcMOGa0TuYGc%2Bq8IeCpPVTxwJgTFEZ83k5MQTS5HB4Fo%2Fd1H%2FqTWEBV3uDLBJm8DDrWfu3oJx%2BpCoAuCwyoB0UXffhlw7z12o3mIKwHsne1aJD06sYBe3y3wLQa68T1dRceWJTpSpiBBN2f7By5aAgCScbD7BsTu86vQsn76lio6zyuP7UPb&X-Amz-Signature=fd19a8d477d3c010bbd98bbaceaaac33ca5c60d044bd03d618c61d205ab04995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R27JNQMO%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCrJlnwZJNk6Ox0%2FAzIVgtRsNwudn%2F5byB%2BdcO31JSTxQIgQZsGeYqq5x7rO4lWSa%2FYYfBW5YUHwWwvogXN7Y7ZaGMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYfNof%2FtWvSee%2BbeCrcA%2BU72JZ7Z4PcXfqg4gvxJGI64%2BtoStfJlYDy51WnUNC9BwX%2FT0MU1d%2FJD8L6GSlQ76QXhIH91UXuoAZbGd1G1uegufl2Y0Oq4Yab19aXsAZ7m92w3Le3tYqKp%2BMjDPF24ja%2BwdZMmLgE5ODcg%2FGgTmZq05eHQ5ommAkkLMo5G2lVOk%2BzLtwBY48umaBMN7%2F%2F6g%2BCyI2gPMicYrsg78J8wbAgyQVsuWPDhpw5LoQb%2Fb2oiwyOHaaSRpAwmgfrJ%2B%2B7QUe3LzzR2idlj2DujbkwNuT3XGYL3ypXzYeSfkNQN1lnPoRyq5de32Y5AUsT7zF3oaVADhBvhfTtDYh%2Fmo5C9HoTPHratxTYLVv11hkVUdA3azCWPwZcbFOr7guanuJmPK8o7wHM%2B5qSjUKzKRD2T%2BY%2FHxc40RZflrIoYwyRd05KSJ1mr9urnzuGdvTlo4Fx%2BV%2BqjCw%2FPPhAYbozthQO%2FUVWJYYNudBDIjJ5FYSw2RDjYNi5RgO2kcQRaWZ%2FKGnI24kGJR53nMHRxX3L%2F3hOSTGSHFRE4YHbEH7DI7rXjLA%2BAtk0OYTZf1KsEdaIvRozkyoxDD74NTmU1MZl0%2FmAUt1oSF51XFXWd8Jb1b2UqaLwHvSIup3dkIMhq63cMK%2FQs9QGOqUBpFEbeVvuBFTZlYZKtPf5mesXwzfXFHFP4TMI%2FruXM8RSsrWWWZYTADjg%2F0MDxfpyMoN9MCajJLlORtYO2Zx7bFcm1eMapLr%2BN9YUYLIlL7JpntnyD9DdpISs%2F8NEhrGTQ0zg44%2BnqU6VClofoRPo0vP4SQcViita%2BNMojcohRZPAYKd9%2FrPFlLd71d7DznSs4gUy%2FylnqdA0x6ej9tV%2FODjq6KKY&X-Amz-Signature=31578d7b7b08db38bbf16c3fba68bf160789e652ec8db8c5ab7739670232a16f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYRQQW3F%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDohTlZ3J0FCLJlD2TmBssIdMLIClQk049TmXDiqvy61wIhAI%2F7Jg0Npib834WZ7%2F6pQ0zC7GObqiAyuCiTo5INkAk8KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySxuNg2KpumQRa1zoq3AMIJ1ahdhGKNefF1kVbL%2B37SySanMOHMLy4GA%2B%2BPLwTd5e2wRzM%2FsvrqJYBj3GUK2nTKwUi%2BotIl%2B8AvqZ%2BB%2ByrtBR2J28BrIOaiLgE2c2SegPkSWh27PRRQvK7m51Z2i5rL8qBzBv4icg14NhzBcz837%2Bpi%2FlbfUmAd1CAdcWHyHgdtVBpGRVBjetw03KtwlhQOPI64K4UKKfEk6ULqHP4IhvFYi79KsKQYZYC71OuxVksoRzsGxk4iO6O4%2BRIJA1hq9CPTLDGUknwnRws8vKUkiHKTgojlZkSsOF4ZTLdb%2Bd9Wg24Dbdq1woTFLWdXuGbA33okZXt45LHKPGcIps6wDD0Vh2dZumqcwezMrcZZSGCuGxCA4W6WU1ek9b0PDJgYcxyutuusLk2f%2FHLmj02hrGfaYBoLRDjdkn9To5CHAouMPld6mCU64D0zZfU7bRi%2Fp2FjYhDx1VvZRFkz3yU%2F5BqnhNML2JBxgM5swS2x78bh8xu9EICZ5dScnR1WuDM%2BbM9H3gAFaE7w7T%2BIH6OXeersXq1OPtQ7wmUB72B1z1AfJWZjUWJy0Ta9PyTHT0s7zz8CzrgEInc6CoIaeCqSG3D4yL1306LCm5bIuj0kIAv4Wz8tyKqN4BZuzDk0LPUBjqkAY%2FqGHtyjQZuKPfglMkShr7Gi8B8mGWTrj9jyqoXIvWG70t%2BNwlUaEOlqYgqzja1su8QrbzQyMP1amEW7158qcQBXwmjx58L0qwFVcEk562Gpg%2FICZ57ezNOIpE8cU9YuvEy5q57CriBgce1DGoWY%2Fr3gpo1X5oHOazENr794NbRqHKcH2UPzdHnijdfTuhr9kUTfNc%2BUuoyPFKhNXGs0RN6wgYF&X-Amz-Signature=71ea91258d54658220c7e92307534b96097f12d4695c7435d6ba009210ff2ba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R27JNQMO%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCrJlnwZJNk6Ox0%2FAzIVgtRsNwudn%2F5byB%2BdcO31JSTxQIgQZsGeYqq5x7rO4lWSa%2FYYfBW5YUHwWwvogXN7Y7ZaGMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYfNof%2FtWvSee%2BbeCrcA%2BU72JZ7Z4PcXfqg4gvxJGI64%2BtoStfJlYDy51WnUNC9BwX%2FT0MU1d%2FJD8L6GSlQ76QXhIH91UXuoAZbGd1G1uegufl2Y0Oq4Yab19aXsAZ7m92w3Le3tYqKp%2BMjDPF24ja%2BwdZMmLgE5ODcg%2FGgTmZq05eHQ5ommAkkLMo5G2lVOk%2BzLtwBY48umaBMN7%2F%2F6g%2BCyI2gPMicYrsg78J8wbAgyQVsuWPDhpw5LoQb%2Fb2oiwyOHaaSRpAwmgfrJ%2B%2B7QUe3LzzR2idlj2DujbkwNuT3XGYL3ypXzYeSfkNQN1lnPoRyq5de32Y5AUsT7zF3oaVADhBvhfTtDYh%2Fmo5C9HoTPHratxTYLVv11hkVUdA3azCWPwZcbFOr7guanuJmPK8o7wHM%2B5qSjUKzKRD2T%2BY%2FHxc40RZflrIoYwyRd05KSJ1mr9urnzuGdvTlo4Fx%2BV%2BqjCw%2FPPhAYbozthQO%2FUVWJYYNudBDIjJ5FYSw2RDjYNi5RgO2kcQRaWZ%2FKGnI24kGJR53nMHRxX3L%2F3hOSTGSHFRE4YHbEH7DI7rXjLA%2BAtk0OYTZf1KsEdaIvRozkyoxDD74NTmU1MZl0%2FmAUt1oSF51XFXWd8Jb1b2UqaLwHvSIup3dkIMhq63cMK%2FQs9QGOqUBpFEbeVvuBFTZlYZKtPf5mesXwzfXFHFP4TMI%2FruXM8RSsrWWWZYTADjg%2F0MDxfpyMoN9MCajJLlORtYO2Zx7bFcm1eMapLr%2BN9YUYLIlL7JpntnyD9DdpISs%2F8NEhrGTQ0zg44%2BnqU6VClofoRPo0vP4SQcViita%2BNMojcohRZPAYKd9%2FrPFlLd71d7DznSs4gUy%2FylnqdA0x6ej9tV%2FODjq6KKY&X-Amz-Signature=153050f076bcd09558f8b478a3f67720154a75e6ac03a714e867ca41d0619068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYP6JDNY%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIGGKWHjDsU0hhPGxsiDXi6tcq9maxseOD9mKvSpQ2CDHAiEAufjlF%2BIAS1QyPgpew%2BWNDabYGJa%2BjeD%2FLZsizpZ%2Fk%2FUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDItTa7AJKSrZb1d0lircA8eJ9GI0kFA6qGBQGiNAvcAiKSXFG%2BVeDt3JK%2FBFE1GCMb8HNqRbXxFmNY2ZYNlGyWrX1BwKA7yog%2Fzaws8%2BqtmNM%2BfD86jGcOitAywjGb7N9MFLqEpwn3kDyyEvFsNGApnLpFcQH9tlcPswEJ6iJZrz6HhVC3Gw72l4iQ%2FWTQyojIW00gHAMm6749Mn%2FLVj0qFFqXkdON0v7IgKEzMloTUgjMoqgb1US41FYdCh5HCcMLDmdjzj6oXoSpQ%2BkNOuRaesTd9IGfhIERVM3l5ZViCMPDAdg%2BQiqJLi4NoiC5E8Fv3bd93d0HTnpZmUt9anXTtReLVzmY1LIxIkNncMzHqTcRd5cQ6JyOytiBIV6gYBLB9BoSnIG1f6LAByEyug10%2BWZY97p1eZbrijPKlDiIWB6SwLsKBfQNqdaZQvoZjvG0Bh4J3n5FKU%2BBCNZLp0jL18URtBmTNKZBEZwE2LNtND5z%2FLUILvEf5iVktYYjbIscs8A4NhxAnpCwDXTJ3SuylnTesdo0GJrNKQQEJnvVr7s1vSKxl%2FInfZiq7mPci2PC3AUZWrIhaJDfzFLq1SkEs9ANMW3UG7hBvfxKDshyIBzg%2BKFoW41larjIOm%2Bnj28NvxHOKUha08KxJPMNXUs9QGOqUBtWeFkDGt9PAWtvfDvzxIq1Eu07pu7sSo2uOjW3cwnTXePrhVwhAEcfwyYtbHyzkSbXh243%2Fk%2BSgTcjHs08gaxQHBIFCXQ74sIDi4%2FH7NP%2FINvt6BJe597UIjOiPNADWwDVq2R5OB7NIyacxVGxzZ0UiQYVNWUCk4m9798X%2FxV2sKKx1tI7rJvE3cbuNtjWjIr5H0KwEm%2BkNh9p6u9%2FMPiRgRb7WT&X-Amz-Signature=e0a0f6f29927c7e50f885a18070acf26812da290e9cf5b75c0f5771d4a16b498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R27JNQMO%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCrJlnwZJNk6Ox0%2FAzIVgtRsNwudn%2F5byB%2BdcO31JSTxQIgQZsGeYqq5x7rO4lWSa%2FYYfBW5YUHwWwvogXN7Y7ZaGMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYfNof%2FtWvSee%2BbeCrcA%2BU72JZ7Z4PcXfqg4gvxJGI64%2BtoStfJlYDy51WnUNC9BwX%2FT0MU1d%2FJD8L6GSlQ76QXhIH91UXuoAZbGd1G1uegufl2Y0Oq4Yab19aXsAZ7m92w3Le3tYqKp%2BMjDPF24ja%2BwdZMmLgE5ODcg%2FGgTmZq05eHQ5ommAkkLMo5G2lVOk%2BzLtwBY48umaBMN7%2F%2F6g%2BCyI2gPMicYrsg78J8wbAgyQVsuWPDhpw5LoQb%2Fb2oiwyOHaaSRpAwmgfrJ%2B%2B7QUe3LzzR2idlj2DujbkwNuT3XGYL3ypXzYeSfkNQN1lnPoRyq5de32Y5AUsT7zF3oaVADhBvhfTtDYh%2Fmo5C9HoTPHratxTYLVv11hkVUdA3azCWPwZcbFOr7guanuJmPK8o7wHM%2B5qSjUKzKRD2T%2BY%2FHxc40RZflrIoYwyRd05KSJ1mr9urnzuGdvTlo4Fx%2BV%2BqjCw%2FPPhAYbozthQO%2FUVWJYYNudBDIjJ5FYSw2RDjYNi5RgO2kcQRaWZ%2FKGnI24kGJR53nMHRxX3L%2F3hOSTGSHFRE4YHbEH7DI7rXjLA%2BAtk0OYTZf1KsEdaIvRozkyoxDD74NTmU1MZl0%2FmAUt1oSF51XFXWd8Jb1b2UqaLwHvSIup3dkIMhq63cMK%2FQs9QGOqUBpFEbeVvuBFTZlYZKtPf5mesXwzfXFHFP4TMI%2FruXM8RSsrWWWZYTADjg%2F0MDxfpyMoN9MCajJLlORtYO2Zx7bFcm1eMapLr%2BN9YUYLIlL7JpntnyD9DdpISs%2F8NEhrGTQ0zg44%2BnqU6VClofoRPo0vP4SQcViita%2BNMojcohRZPAYKd9%2FrPFlLd71d7DznSs4gUy%2FylnqdA0x6ej9tV%2FODjq6KKY&X-Amz-Signature=9149459c7ad48a984d6f4869d0093f69a0e792ee816fb158b2d4ecb9c3f1d334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ2LR6DP%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD2OA4uyhaVXUrmdJ89pHp2nEiGPmL10mfky04ca%2BYBkgIhAOvkW%2FHsxuMYUzEvZQ3PFahhlkBfeLQQj%2B0Ti20b22GCKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2m9U%2FEdSxtTTnfPUq3ANh9jUMXPstOnfh0GIQtK8aEFB%2BcEHDePl8f17lPs0Oo4ettpXjfXBB1BxibBRCm0Sb6mY%2B5sVQUW96msSze4nkQz8mpy5FShBnobE08uzYEBjU0MmQXmvycfVWqGtJ7Y%2FNhA%2FKMddYMeQ5UVfZOD5bVuu%2BZiCZZjqxkuKB9tJKr5wqQE0PhT5WkDqgnjHQZBI6OsX8IMMPUrHs1gYUlvQ6uCzAqpAATFvTTaRM7lljx2OsA553%2F3nW2AhKTFREvshZMINcC0y8D6B7VBeS7op%2FXB7F9JYR4rAUHy77yxN34BK7ACgj4rwbROH42LKM44xVeM9xzRxbUEpB8z2rlHrqCk%2B4Z3QcZ6pVpL4kqJoltAirLcY7BB%2BOWfOAG3F0%2F%2F7Y1J%2FS9gWHB4mMv5fNCWp3XTLlLC8agwmtIox5i5u6yRzK1RQ9zTcsN%2BhkTGMfRXKFv5lQnOOqpTFjFZPL6C6zLcxNlyV4ryHy%2BjovF5K%2Bj87X2NUC2B0OX5mBO%2FLHSs3hGEorS0cvbiRuS%2BEUn6Z6TMZzbIvV18JhkPQDqswoxB%2BzgHvX9XeKxAmLlxpPeJNZC3lH2RkDB0OlVG1EhR4fyhjaCcXFUaW4VB%2F%2BIEPNYgKb83HEp2tpE7E88TDb0LPUBjqkAejLWT%2FE%2FqAgHoDQajbJpcayoBSjOrCSQzBLaj8dkqTAWth%2FHJ8h1uI6F9JtvINYZdWa1RiLwOXCmwOuYMM8emw3ubDrVN2GZkFc9ufj8%2BuAeCsaF10MBQj%2BAfAh8cvOnu16HVji4ARP9wTpfZk7JZVwHkDwEId5cEa3CLlAE3doekfGqN8da58nqn3sq04e%2Fk5ly8QC5EiSHHgdC%2FM%2BiGuJHWBH&X-Amz-Signature=47bf5163516f44e1fcdf708bff4dac32f407f96d05c8f82676be300e75179df0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R27JNQMO%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCrJlnwZJNk6Ox0%2FAzIVgtRsNwudn%2F5byB%2BdcO31JSTxQIgQZsGeYqq5x7rO4lWSa%2FYYfBW5YUHwWwvogXN7Y7ZaGMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYfNof%2FtWvSee%2BbeCrcA%2BU72JZ7Z4PcXfqg4gvxJGI64%2BtoStfJlYDy51WnUNC9BwX%2FT0MU1d%2FJD8L6GSlQ76QXhIH91UXuoAZbGd1G1uegufl2Y0Oq4Yab19aXsAZ7m92w3Le3tYqKp%2BMjDPF24ja%2BwdZMmLgE5ODcg%2FGgTmZq05eHQ5ommAkkLMo5G2lVOk%2BzLtwBY48umaBMN7%2F%2F6g%2BCyI2gPMicYrsg78J8wbAgyQVsuWPDhpw5LoQb%2Fb2oiwyOHaaSRpAwmgfrJ%2B%2B7QUe3LzzR2idlj2DujbkwNuT3XGYL3ypXzYeSfkNQN1lnPoRyq5de32Y5AUsT7zF3oaVADhBvhfTtDYh%2Fmo5C9HoTPHratxTYLVv11hkVUdA3azCWPwZcbFOr7guanuJmPK8o7wHM%2B5qSjUKzKRD2T%2BY%2FHxc40RZflrIoYwyRd05KSJ1mr9urnzuGdvTlo4Fx%2BV%2BqjCw%2FPPhAYbozthQO%2FUVWJYYNudBDIjJ5FYSw2RDjYNi5RgO2kcQRaWZ%2FKGnI24kGJR53nMHRxX3L%2F3hOSTGSHFRE4YHbEH7DI7rXjLA%2BAtk0OYTZf1KsEdaIvRozkyoxDD74NTmU1MZl0%2FmAUt1oSF51XFXWd8Jb1b2UqaLwHvSIup3dkIMhq63cMK%2FQs9QGOqUBpFEbeVvuBFTZlYZKtPf5mesXwzfXFHFP4TMI%2FruXM8RSsrWWWZYTADjg%2F0MDxfpyMoN9MCajJLlORtYO2Zx7bFcm1eMapLr%2BN9YUYLIlL7JpntnyD9DdpISs%2F8NEhrGTQ0zg44%2BnqU6VClofoRPo0vP4SQcViita%2BNMojcohRZPAYKd9%2FrPFlLd71d7DznSs4gUy%2FylnqdA0x6ej9tV%2FODjq6KKY&X-Amz-Signature=6844d5459bc4192eb17ad3900c823dfa688b1b7efaeb3134cf9510eb23d531e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTON3ZQJ%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDHlpmCYT%2FCqAAG%2FTMBQTKb9oPwGXlT0ncBnyfNg8tDEAIgbJG8xWqvvRNNUsb2iYTDuEXn6U35XE7CYsD028v5kjAqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClFW9gpI8c9%2B9BwHyrcA3fOim4iGwb%2BYrShffJ%2F%2FYThTcUUaAZD1OygN0112L2QyWfR9IWFWGhSODkk%2BEpbgfuHThx8III38wx8h1dbC5y70peZIIDpY%2Fw1szGP93qjiTiRAnSD%2BYPg2YKEmDkVTV2ni%2BIBstTeC4tZys9AXQ1gV4fLSQvn0tY2ivCXo0VvorV0TDDokCJIwzNO5Otlv4nDf%2B6L4p2z9usqmCbdu3UGoqixnT7au0x1Yyux1ejGgzEvQGWx8ycuFelVpM6WShgWjwe7ZgFitLWH89aXzC1u7nMH7prmj801po8qJ61A7R4KsJkmyPDawsxWVuK%2FwHDFHojTWLI82DJSSXZunTOvKuiHuVcn6GQWLkWfwT3ZzmVFr9NhUICVyDuFbhhpQb6I2Si5Ovr7jAYJOjFMps%2F1RtpzGOkri%2BjzYHpIdqpMbKpKOrz7DDXoxgF4lJwEBuFc%2F2wCojuIJMxdcbvxROpHIZJj1BtgJ5F0xUzrijHvvZoyZGYyAES0WeTS8STzDMBaeFm%2B%2BsbwBY2cI%2FQW96EIIQ4u2sK1Zz%2FeboY2ukHdpZn%2FlEYNTasQ9dzAYx6VymIj1SRhGDoLb8Ta3Q4NCURMr0DCG8nGYN3FkrXpDZE94eDmVWlY%2FKxJfPnRMNfUs9QGOqUBjnfs58XEgsEzrhwA%2FWG7Sa7qMO1aIy9yofl%2B9AqxIfsMClpjL24cNPngpKjPfAaRUhssWDXcvPI6O26omzRKvj9bnetU2pHppbCuy%2Fz4WbCEVOj09drRAYAAjkOMqVEzvnqbacpa3N8Oq5Mb9R4FD2VQGWqeU3bcAol8FmegWtK5gV1caGTHEH4kF6XIXWW7cIWjHg1c4GxAo1u75%2F23ZuUFy2nc&X-Amz-Signature=53b0104ba48e11d1c0d0a693fd84cb1b50c8bcbc594ddd9acd5abf6d9d215087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R27JNQMO%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCrJlnwZJNk6Ox0%2FAzIVgtRsNwudn%2F5byB%2BdcO31JSTxQIgQZsGeYqq5x7rO4lWSa%2FYYfBW5YUHwWwvogXN7Y7ZaGMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYfNof%2FtWvSee%2BbeCrcA%2BU72JZ7Z4PcXfqg4gvxJGI64%2BtoStfJlYDy51WnUNC9BwX%2FT0MU1d%2FJD8L6GSlQ76QXhIH91UXuoAZbGd1G1uegufl2Y0Oq4Yab19aXsAZ7m92w3Le3tYqKp%2BMjDPF24ja%2BwdZMmLgE5ODcg%2FGgTmZq05eHQ5ommAkkLMo5G2lVOk%2BzLtwBY48umaBMN7%2F%2F6g%2BCyI2gPMicYrsg78J8wbAgyQVsuWPDhpw5LoQb%2Fb2oiwyOHaaSRpAwmgfrJ%2B%2B7QUe3LzzR2idlj2DujbkwNuT3XGYL3ypXzYeSfkNQN1lnPoRyq5de32Y5AUsT7zF3oaVADhBvhfTtDYh%2Fmo5C9HoTPHratxTYLVv11hkVUdA3azCWPwZcbFOr7guanuJmPK8o7wHM%2B5qSjUKzKRD2T%2BY%2FHxc40RZflrIoYwyRd05KSJ1mr9urnzuGdvTlo4Fx%2BV%2BqjCw%2FPPhAYbozthQO%2FUVWJYYNudBDIjJ5FYSw2RDjYNi5RgO2kcQRaWZ%2FKGnI24kGJR53nMHRxX3L%2F3hOSTGSHFRE4YHbEH7DI7rXjLA%2BAtk0OYTZf1KsEdaIvRozkyoxDD74NTmU1MZl0%2FmAUt1oSF51XFXWd8Jb1b2UqaLwHvSIup3dkIMhq63cMK%2FQs9QGOqUBpFEbeVvuBFTZlYZKtPf5mesXwzfXFHFP4TMI%2FruXM8RSsrWWWZYTADjg%2F0MDxfpyMoN9MCajJLlORtYO2Zx7bFcm1eMapLr%2BN9YUYLIlL7JpntnyD9DdpISs%2F8NEhrGTQ0zg44%2BnqU6VClofoRPo0vP4SQcViita%2BNMojcohRZPAYKd9%2FrPFlLd71d7DznSs4gUy%2FylnqdA0x6ej9tV%2FODjq6KKY&X-Amz-Signature=48ede685d278fa5445605b92de074628d65dd083c6b908d8112684e805475d57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ONLSGIH%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIByRO8nKWjGEcKM1jLOGy93w9lgWik2U9zddBEdvZTBbAiBU7Ry2tZ%2B%2FiITMHcRwSv129GjBUpISFpIMRfHrQ8b3oCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTHRb2FT%2BRf5OiXgIKtwDNkDMmVSvxehBikNbsISHqrGnv9qRGdT9Ebl77VzBKTvaZ%2FYczY0u0KqqI69K8CRzd%2BBgrWmzHaqE6LoeOfCpc6tWBPvF%2Fs4pGto2SVTRK2Lb8F%2B5IjVi7S7%2F2U%2Bq%2BU2l7IHyCF6U7HlO6k8TB94%2BIqv7EACFqXzZaJX991WR%2BJBn8DgfCkMawyRN0%2FBY7LuftT6P5we0MuoqZBWc4oF%2BaxG70fMMzIkCBMEOHDb78qWSK9Dgdq37XtV8V7j%2BJgjt%2BrRuaOfiYOtXu4de5gQePvkUDeLg62fa%2Fm4BMV%2BFPytsxKzbmrTZqdtuVi5q9ZJIXP3KI81Shqx%2BH4OXl8TFteY4hnI42RKr4FDcYmWc7vprDeMqA67jmTTsh1GKWWTD%2FFm48mIyr941DB5P3CJyJ%2BOYMdCTpaDevqqfaSLpKUVYTBO7fN69aM3zzgzXmM3%2FcypCy73bbqpH6APb%2BYIXX7j%2FOAyXcu28DUYk8WNJWZVLSNc9kKQEkhZ1I8s%2BtrDa3bA%2Bv%2FooFGi2Q2b%2FSgmjIJoTXuSqLvwpCPdomMgE33oS%2BklX9opbtLQfB0MUYDe3BCZAaWVeknjuIrGoWMC5CWt2JnpgIw8qYvFHkWEXs%2BQuZvUZvjBkXj8PYfcwvdSz1AY6pgHP%2BjhkDxCbzu2TGt7WngSPwerEgWiWc1Vz1GvuS%2Ftb83IVx0BthiO%2FoJmPxqIiQNxONQEHlocuV2YSfCGlyTfvJ2iEci%2BbLbWbTaeZyCQ%2FAh0hGyGDLUOjO0CNFkkbZPGhdX9adn9%2BcD8KsRZVXlZs0jiAjDGmyNhkrZYGcDHMvbIilWxOKEouqNYj1ffPb0ceNANqfvt%2F%2BZeV3fGZATSAwSn0RB3r&X-Amz-Signature=63273e69f5d067966876741be4d1d8eac4b1bfd9595050583cc301979d473a9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VSP3IQ4%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCEPrMxUCOGOLabQLZkmHU9Pb6Pvw96C6SgX%2B5gaPCdtAIgcE%2FpQWtCKLBswDQJPumUIyAR5nZJVxcpS0GBngm9BFgqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcucTCqYjwOw7F3TircA4SO29K1AGLMAc5oK7g6JXB2skkB9ITHVEe0n2MY9POdq7mQLCmR2%2F7oK4c9Z7NsdPOsdeSVSMZWqWJwtzrk7AyDUX%2BRxlU4lqRfIr97I6oBNyd9iFipe%2F3Y%2FogjuY1bJ%2BeCw5Y6JdcPgYw3pVQa0sSlmE2dMV4sT%2FdHHBlPbOQ32w1OcxZbpmFNHTVpFaTmy6Y6Ge9zGXm%2BV6cv0N%2FF8eyMciYOzbI1PjuVpX%2FotwdQkzvoI4EAZ%2B7QxpAGF3q5JzZug%2B7yzUa6wnFVmXcokB2TseGS3Wmg2objCuE3Ysy0u9kYoEPi%2F4a%2BzaxRS1N61nE%2F9iTl9AP%2Fxuw%2Fh4Z%2FZViNXkck63OvTfouf34KxLup%2FSPGvpmtbT8QUeBujE1CE%2Fb32bDrMJNiiJihVHLNcCJHmcBqFl8lAHSK%2BnJPiuup8w770qJvxAmieW1EYVTJUHOl0L4hU%2BSuoyC2XyB%2BKPOVSnRT9X%2BbXh97edPyhL5h3gYkKOgq7042wURZN1lApF%2BpMQwKTGh7%2FjIR6nrOLJAuQeQ87AbPaDwBWP1Ffy0LwxR96lPPEqIULV3Xp8t6MJ55X0Tm2TVnEduSaYk5QKXihGn2brcncbE9ncZoRMQvxpxRE9%2Bghn02YovTMObQs9QGOqUB8MZ8VhFZ6CBQcXEW6UQqeAEOnvvEPe%2BFaIPUIbVesheLa9uqb%2BxOyCPUuC42gHX8itEvEjXQJ%2BAGjZ8%2FTfmeiTOlhS4cSAJC7pBeH%2BjyDrvf8cyyIvS08DTclml98WNQcciaIftte6S4xW8j%2BF48XeQrD3mBYklSlBaP5v3tGX0pQ1k7Ierq93Kmye1nuYQiy0gD0VQHIm6xeiB5z8JPSNgA4ao5&X-Amz-Signature=eb7ed87b6fb8c3e0af5f4cc300aaabaa25108a616f962a73e9b89ced3ed49795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT4Z7UT6%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIF09aY6g9FSRtsJEqiX2Qjgn4SHMTAJQBnTZI9CLZg9%2FAiEA373G%2F%2F2ov7w%2F%2FFa9REAGdbjJAFa9rIXhmBzyUYjPJPgqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMIL0hDIy%2FYx5KI1ircA9w0TF2Wp4p6OzZRrvgSQbyhqFED%2FDk17uezC%2B1iC%2FT7jUwFSjpWbkklfg3ZdzDOgKNWD9hhQJTcgDzbqhREKyQtd6gagb561YR3lv%2BJyacB6rDh3T61JQ1FlaCKiSb%2Bv2NDNkf%2BtUJ6CDLYUeP3BLcMaOWDWb%2B3jNh88ru2LdgyAuIRJ%2BNFtREhsviag3jA4QFXjTCo7LxiKy%2FoSd%2FvHX7UFz8KDhA9sdtD8qmVqKyNu2YcoXZMx7KZcETAKQ4ibje2wEouI%2B%2FAW6iiJqTvrOZnmcauCvpWYB9vjrnTz%2Bfy%2BWB11TSeLHOUrpxbT8zN0%2BGWstAvX9Iw%2FVsHQ44c5HbKF%2FKSgF4Pej8GWCcJrdgBur%2BhzEN6NRQkfzIRRmqgnjy0gNLhSb03%2BjVGUmELeOLVwoR5D9ZUcePOiGoAkd0cylnR86J0TVQpmqwZbE0lIetfUmngXdFj%2BDZzUq7s0jWpoFvAmcQuN4J9hZRi80P2yJPUXAgc5JdDelwwdIXp8wYHnAQ9myQ4we%2F5PGKmccwXmWL9PNO8dKBK2P4ZjVEP7Aq%2BlwyZcWos87WtlMNXGvCOjV7GhLXnttmmJFp22t0R7oyeIph%2FY19jQ9vsPnRBssuJRr4CjDqK7Pj8MM3Us9QGOqUBIKq5qzihXfFouTNjUDqcY5mCDB%2FauCK16Dp06By1MYch7vC%2BGqjJsMjM6%2BKbGAifUwc1Z9L1GMWNiB381MPF%2BTxJqfsRwH60HetWWUROcG8mBR4rSHtvpwc3YFVw2shwURvhuPmpE237RRwjXGm0g8t0vD01qajYt2Mj4Rki2EIoSofh6FCrA7QPWAjr6rqrNheJC9AEguRH77TE6FTdYJg1cnwY&X-Amz-Signature=81833c549b40d32c2bb40cd71602ba2875ea42ad09b134273b4d956b539ae129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R27JNQMO%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCrJlnwZJNk6Ox0%2FAzIVgtRsNwudn%2F5byB%2BdcO31JSTxQIgQZsGeYqq5x7rO4lWSa%2FYYfBW5YUHwWwvogXN7Y7ZaGMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYfNof%2FtWvSee%2BbeCrcA%2BU72JZ7Z4PcXfqg4gvxJGI64%2BtoStfJlYDy51WnUNC9BwX%2FT0MU1d%2FJD8L6GSlQ76QXhIH91UXuoAZbGd1G1uegufl2Y0Oq4Yab19aXsAZ7m92w3Le3tYqKp%2BMjDPF24ja%2BwdZMmLgE5ODcg%2FGgTmZq05eHQ5ommAkkLMo5G2lVOk%2BzLtwBY48umaBMN7%2F%2F6g%2BCyI2gPMicYrsg78J8wbAgyQVsuWPDhpw5LoQb%2Fb2oiwyOHaaSRpAwmgfrJ%2B%2B7QUe3LzzR2idlj2DujbkwNuT3XGYL3ypXzYeSfkNQN1lnPoRyq5de32Y5AUsT7zF3oaVADhBvhfTtDYh%2Fmo5C9HoTPHratxTYLVv11hkVUdA3azCWPwZcbFOr7guanuJmPK8o7wHM%2B5qSjUKzKRD2T%2BY%2FHxc40RZflrIoYwyRd05KSJ1mr9urnzuGdvTlo4Fx%2BV%2BqjCw%2FPPhAYbozthQO%2FUVWJYYNudBDIjJ5FYSw2RDjYNi5RgO2kcQRaWZ%2FKGnI24kGJR53nMHRxX3L%2F3hOSTGSHFRE4YHbEH7DI7rXjLA%2BAtk0OYTZf1KsEdaIvRozkyoxDD74NTmU1MZl0%2FmAUt1oSF51XFXWd8Jb1b2UqaLwHvSIup3dkIMhq63cMK%2FQs9QGOqUBpFEbeVvuBFTZlYZKtPf5mesXwzfXFHFP4TMI%2FruXM8RSsrWWWZYTADjg%2F0MDxfpyMoN9MCajJLlORtYO2Zx7bFcm1eMapLr%2BN9YUYLIlL7JpntnyD9DdpISs%2F8NEhrGTQ0zg44%2BnqU6VClofoRPo0vP4SQcViita%2BNMojcohRZPAYKd9%2FrPFlLd71d7DznSs4gUy%2FylnqdA0x6ej9tV%2FODjq6KKY&X-Amz-Signature=73f94bd7416370417276358e58e8630a8b2e98c546aeca975d02f7631d9e03ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R27JNQMO%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCrJlnwZJNk6Ox0%2FAzIVgtRsNwudn%2F5byB%2BdcO31JSTxQIgQZsGeYqq5x7rO4lWSa%2FYYfBW5YUHwWwvogXN7Y7ZaGMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYfNof%2FtWvSee%2BbeCrcA%2BU72JZ7Z4PcXfqg4gvxJGI64%2BtoStfJlYDy51WnUNC9BwX%2FT0MU1d%2FJD8L6GSlQ76QXhIH91UXuoAZbGd1G1uegufl2Y0Oq4Yab19aXsAZ7m92w3Le3tYqKp%2BMjDPF24ja%2BwdZMmLgE5ODcg%2FGgTmZq05eHQ5ommAkkLMo5G2lVOk%2BzLtwBY48umaBMN7%2F%2F6g%2BCyI2gPMicYrsg78J8wbAgyQVsuWPDhpw5LoQb%2Fb2oiwyOHaaSRpAwmgfrJ%2B%2B7QUe3LzzR2idlj2DujbkwNuT3XGYL3ypXzYeSfkNQN1lnPoRyq5de32Y5AUsT7zF3oaVADhBvhfTtDYh%2Fmo5C9HoTPHratxTYLVv11hkVUdA3azCWPwZcbFOr7guanuJmPK8o7wHM%2B5qSjUKzKRD2T%2BY%2FHxc40RZflrIoYwyRd05KSJ1mr9urnzuGdvTlo4Fx%2BV%2BqjCw%2FPPhAYbozthQO%2FUVWJYYNudBDIjJ5FYSw2RDjYNi5RgO2kcQRaWZ%2FKGnI24kGJR53nMHRxX3L%2F3hOSTGSHFRE4YHbEH7DI7rXjLA%2BAtk0OYTZf1KsEdaIvRozkyoxDD74NTmU1MZl0%2FmAUt1oSF51XFXWd8Jb1b2UqaLwHvSIup3dkIMhq63cMK%2FQs9QGOqUBpFEbeVvuBFTZlYZKtPf5mesXwzfXFHFP4TMI%2FruXM8RSsrWWWZYTADjg%2F0MDxfpyMoN9MCajJLlORtYO2Zx7bFcm1eMapLr%2BN9YUYLIlL7JpntnyD9DdpISs%2F8NEhrGTQ0zg44%2BnqU6VClofoRPo0vP4SQcViita%2BNMojcohRZPAYKd9%2FrPFlLd71d7DznSs4gUy%2FylnqdA0x6ej9tV%2FODjq6KKY&X-Amz-Signature=93b03ad9e616d12a13ccc6d8402cd59eb80edbd64dcf876cb284ff4b987706a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ATKQAFL%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCVbHyuQTeLyf6baZk9KzzKU19KnAOndq6qD3UCDqwdtAIhAOWd42jHnJtHMIkMIBzfEA61tRZRiC0iYVv4zORPoIIBKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3O4QQHq9WmfLeknYq3AMRXPwSgWOcVeD9jEXDdhEkhwdLvRJujCC3qrQxI6Pv8aRpdKAwQ3AwrIkOBxMkHEbCO%2F8HntqD4wZqG66vUuX1ktEufhmt%2F%2BfKaENg8g%2Byo7zq09ZnItrZySZd38SibGfxjoIFpBETLDACaxiWAtFLBBvELaJLjBdqAj1F%2F3NM%2BIb6FSsZ7mAcNaKRsBlJgXtzpyPooS2I9cGuevfsj1pbeZlG9QJUMhqbrqiN7lWGH9aTGqPdX09FsCAekEers%2BcrpfgtIgQmD%2FuBlr6n8qjh%2F2wEfIDGem6eOYO%2F8SH3Q7GsfZGcaqwzJ1OodQo2t6%2BDXbChp4oPUfmNPxEC2c9ikebWstuwrEGQc9hDFKndXB5jrMheJMRB8vxgRnT4VCXPlvWAAwZ9r1DABKodUPmG943jq0BlxdM%2F3yZsRw6uNBXKdRh7SxS4vKe%2ByjsUzofRshpojBfolQs7mtgQO3BGpoB%2BPIImKYmvuo4B01quc%2FRIi5f60C0mQY1UpvGTauvacaQXGQ%2BtHOnyveX8eSZyBO1h57BsP8JZAEDoc19D%2FALhFpUVUbn4LvWKUtqTuVnSKQX21TFRei8Uij8kDuqz5QOxiysAHN7tlvP0BNEJnEIyVkvQTVVPMLKr2DDQ0LPUBjqkAWDFQ%2B%2BeHeY3sdRtpptEEa%2BDb5q0N8Xbv8BuCJO4FsDs10GO%2BCL5fL6QN5dhMRGzP341hjqyO%2F0wWcUrg4vS8Uv0SI%2BEUY149aXQ7W1JQM8%2FEBroo9GzNA9FmrpuqfyBL8T569vDbEqhfP2QywShdvwjxGdanKoLeRHR8a%2F6YYi16%2BQX%2F8JkNgknI2UiIaz2gD%2Fe9cTW0yLJlGtUYVxwRa1KdUiE&X-Amz-Signature=d763ee25124bcd1a1bb92ded11c667448b0de8243d9d8e90063063b2d2839b82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ATKQAFL%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCVbHyuQTeLyf6baZk9KzzKU19KnAOndq6qD3UCDqwdtAIhAOWd42jHnJtHMIkMIBzfEA61tRZRiC0iYVv4zORPoIIBKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3O4QQHq9WmfLeknYq3AMRXPwSgWOcVeD9jEXDdhEkhwdLvRJujCC3qrQxI6Pv8aRpdKAwQ3AwrIkOBxMkHEbCO%2F8HntqD4wZqG66vUuX1ktEufhmt%2F%2BfKaENg8g%2Byo7zq09ZnItrZySZd38SibGfxjoIFpBETLDACaxiWAtFLBBvELaJLjBdqAj1F%2F3NM%2BIb6FSsZ7mAcNaKRsBlJgXtzpyPooS2I9cGuevfsj1pbeZlG9QJUMhqbrqiN7lWGH9aTGqPdX09FsCAekEers%2BcrpfgtIgQmD%2FuBlr6n8qjh%2F2wEfIDGem6eOYO%2F8SH3Q7GsfZGcaqwzJ1OodQo2t6%2BDXbChp4oPUfmNPxEC2c9ikebWstuwrEGQc9hDFKndXB5jrMheJMRB8vxgRnT4VCXPlvWAAwZ9r1DABKodUPmG943jq0BlxdM%2F3yZsRw6uNBXKdRh7SxS4vKe%2ByjsUzofRshpojBfolQs7mtgQO3BGpoB%2BPIImKYmvuo4B01quc%2FRIi5f60C0mQY1UpvGTauvacaQXGQ%2BtHOnyveX8eSZyBO1h57BsP8JZAEDoc19D%2FALhFpUVUbn4LvWKUtqTuVnSKQX21TFRei8Uij8kDuqz5QOxiysAHN7tlvP0BNEJnEIyVkvQTVVPMLKr2DDQ0LPUBjqkAWDFQ%2B%2BeHeY3sdRtpptEEa%2BDb5q0N8Xbv8BuCJO4FsDs10GO%2BCL5fL6QN5dhMRGzP341hjqyO%2F0wWcUrg4vS8Uv0SI%2BEUY149aXQ7W1JQM8%2FEBroo9GzNA9FmrpuqfyBL8T569vDbEqhfP2QywShdvwjxGdanKoLeRHR8a%2F6YYi16%2BQX%2F8JkNgknI2UiIaz2gD%2Fe9cTW0yLJlGtUYVxwRa1KdUiE&X-Amz-Signature=e3e43be1e2d0561ea327abaf989e4cb56c2bfd03e22a6cd13de77aee4c72a713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ATKQAFL%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCVbHyuQTeLyf6baZk9KzzKU19KnAOndq6qD3UCDqwdtAIhAOWd42jHnJtHMIkMIBzfEA61tRZRiC0iYVv4zORPoIIBKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3O4QQHq9WmfLeknYq3AMRXPwSgWOcVeD9jEXDdhEkhwdLvRJujCC3qrQxI6Pv8aRpdKAwQ3AwrIkOBxMkHEbCO%2F8HntqD4wZqG66vUuX1ktEufhmt%2F%2BfKaENg8g%2Byo7zq09ZnItrZySZd38SibGfxjoIFpBETLDACaxiWAtFLBBvELaJLjBdqAj1F%2F3NM%2BIb6FSsZ7mAcNaKRsBlJgXtzpyPooS2I9cGuevfsj1pbeZlG9QJUMhqbrqiN7lWGH9aTGqPdX09FsCAekEers%2BcrpfgtIgQmD%2FuBlr6n8qjh%2F2wEfIDGem6eOYO%2F8SH3Q7GsfZGcaqwzJ1OodQo2t6%2BDXbChp4oPUfmNPxEC2c9ikebWstuwrEGQc9hDFKndXB5jrMheJMRB8vxgRnT4VCXPlvWAAwZ9r1DABKodUPmG943jq0BlxdM%2F3yZsRw6uNBXKdRh7SxS4vKe%2ByjsUzofRshpojBfolQs7mtgQO3BGpoB%2BPIImKYmvuo4B01quc%2FRIi5f60C0mQY1UpvGTauvacaQXGQ%2BtHOnyveX8eSZyBO1h57BsP8JZAEDoc19D%2FALhFpUVUbn4LvWKUtqTuVnSKQX21TFRei8Uij8kDuqz5QOxiysAHN7tlvP0BNEJnEIyVkvQTVVPMLKr2DDQ0LPUBjqkAWDFQ%2B%2BeHeY3sdRtpptEEa%2BDb5q0N8Xbv8BuCJO4FsDs10GO%2BCL5fL6QN5dhMRGzP341hjqyO%2F0wWcUrg4vS8Uv0SI%2BEUY149aXQ7W1JQM8%2FEBroo9GzNA9FmrpuqfyBL8T569vDbEqhfP2QywShdvwjxGdanKoLeRHR8a%2F6YYi16%2BQX%2F8JkNgknI2UiIaz2gD%2Fe9cTW0yLJlGtUYVxwRa1KdUiE&X-Amz-Signature=3a12773013ed77f020d609b7a2aeb2b5acba0f6b585c959aaf1e613cab8681c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ATKQAFL%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCVbHyuQTeLyf6baZk9KzzKU19KnAOndq6qD3UCDqwdtAIhAOWd42jHnJtHMIkMIBzfEA61tRZRiC0iYVv4zORPoIIBKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3O4QQHq9WmfLeknYq3AMRXPwSgWOcVeD9jEXDdhEkhwdLvRJujCC3qrQxI6Pv8aRpdKAwQ3AwrIkOBxMkHEbCO%2F8HntqD4wZqG66vUuX1ktEufhmt%2F%2BfKaENg8g%2Byo7zq09ZnItrZySZd38SibGfxjoIFpBETLDACaxiWAtFLBBvELaJLjBdqAj1F%2F3NM%2BIb6FSsZ7mAcNaKRsBlJgXtzpyPooS2I9cGuevfsj1pbeZlG9QJUMhqbrqiN7lWGH9aTGqPdX09FsCAekEers%2BcrpfgtIgQmD%2FuBlr6n8qjh%2F2wEfIDGem6eOYO%2F8SH3Q7GsfZGcaqwzJ1OodQo2t6%2BDXbChp4oPUfmNPxEC2c9ikebWstuwrEGQc9hDFKndXB5jrMheJMRB8vxgRnT4VCXPlvWAAwZ9r1DABKodUPmG943jq0BlxdM%2F3yZsRw6uNBXKdRh7SxS4vKe%2ByjsUzofRshpojBfolQs7mtgQO3BGpoB%2BPIImKYmvuo4B01quc%2FRIi5f60C0mQY1UpvGTauvacaQXGQ%2BtHOnyveX8eSZyBO1h57BsP8JZAEDoc19D%2FALhFpUVUbn4LvWKUtqTuVnSKQX21TFRei8Uij8kDuqz5QOxiysAHN7tlvP0BNEJnEIyVkvQTVVPMLKr2DDQ0LPUBjqkAWDFQ%2B%2BeHeY3sdRtpptEEa%2BDb5q0N8Xbv8BuCJO4FsDs10GO%2BCL5fL6QN5dhMRGzP341hjqyO%2F0wWcUrg4vS8Uv0SI%2BEUY149aXQ7W1JQM8%2FEBroo9GzNA9FmrpuqfyBL8T569vDbEqhfP2QywShdvwjxGdanKoLeRHR8a%2F6YYi16%2BQX%2F8JkNgknI2UiIaz2gD%2Fe9cTW0yLJlGtUYVxwRa1KdUiE&X-Amz-Signature=ca3ec86153b37441bc299e870f17d6d256220c3e558f5abbdb49dea41a4f40f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGG5XSYZ%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCID9qnvRXUj3JSrDM%2FxgoQOk3T09QP%2BXl7uzoWOO3bKzUAiAB6B1HcS64AMxXfJT0Bm64dqof1dpXFuMOCb7jOfObNSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyblshn8XnprT5wYvKtwDJYbKUW0Jorl0M9JKsOlhcaUhuiPifvoen5d1UVEq2zcAtXO%2BZFO04allfo1Wy122sU5R4bEEHKFcIb0pzDn5B3HlooPxL7E8p64LX2PEPc7DCJ%2F9c78ac9LztphxjyLOXW2OJlbVxwt%2Fi%2Fl0RBRW8IkrjU6HWxT0zpu66H7uNIXd8dKjJrQYD%2BnoTfhRT5J2wYQC6di%2B3nDf%2FKsQADlV6EXAKnbvhaZKdeaR1skXKLvYgr1q0H7W4jexYn8ibf0Cvx%2BdG284QxIqX%2FHbKqOdZFHWe4UX9XaIxJF40FyVMnqZQ5w6LMw%2BQXb0A3SghMFrAgZyFecvop4TPfuoGN%2BT3v3NCNzkIWgh4SlSJiF21sRvuNgDmoRS039Opc%2BU7TPyOvjCnAi2OTxGmKVODMSHBg7XzthB6pJ5wt%2F5MRUk2U6TGaAKeBcb617Q%2BCsekrAOgeH8WMJnya1Md3YcrM3gQH8khr6Zk901BjZT70lpuDJShI1Tjq%2FkxTivkzSzrYhjRzTYL4s0PeHwn2%2BZvsETGq6KTdhqmb%2BUcxxqIZ5yg%2Fn%2BNemEDHFGt%2BGy6FbE%2FJfvwzEFjf0WxZlFbO8CasSwhjTYyW3UmvjfWP%2FhMy0YrVVgFC2N%2BzRKWv4cYwgwz9Cz1AY6pgFn7DlYDZXhfexaBZ0%2FqivJwNcHwZwmOCl2qFvq5dkKm7pWTq%2BcFmwQq6os1PF3weVW7kb%2F%2FMEwiCtJfV%2FTGhW3YX%2B15ga9fLlnlMHX%2BChVJ8e6yr0TOiOJsp6awtX2PudQhU4VMc4fab1M6kuVwlYlmzDkRuaZQiW82Ya1ia3t65Mcz8flVT63vDHsDjbq94LtvCx5VxHGKFTFrhsNIO%2BAwIlNOl26&X-Amz-Signature=9c1b3ac9f825516b169995434d73d59a9837d500ab8dd5a8633f7965afa97924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ATKQAFL%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCVbHyuQTeLyf6baZk9KzzKU19KnAOndq6qD3UCDqwdtAIhAOWd42jHnJtHMIkMIBzfEA61tRZRiC0iYVv4zORPoIIBKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3O4QQHq9WmfLeknYq3AMRXPwSgWOcVeD9jEXDdhEkhwdLvRJujCC3qrQxI6Pv8aRpdKAwQ3AwrIkOBxMkHEbCO%2F8HntqD4wZqG66vUuX1ktEufhmt%2F%2BfKaENg8g%2Byo7zq09ZnItrZySZd38SibGfxjoIFpBETLDACaxiWAtFLBBvELaJLjBdqAj1F%2F3NM%2BIb6FSsZ7mAcNaKRsBlJgXtzpyPooS2I9cGuevfsj1pbeZlG9QJUMhqbrqiN7lWGH9aTGqPdX09FsCAekEers%2BcrpfgtIgQmD%2FuBlr6n8qjh%2F2wEfIDGem6eOYO%2F8SH3Q7GsfZGcaqwzJ1OodQo2t6%2BDXbChp4oPUfmNPxEC2c9ikebWstuwrEGQc9hDFKndXB5jrMheJMRB8vxgRnT4VCXPlvWAAwZ9r1DABKodUPmG943jq0BlxdM%2F3yZsRw6uNBXKdRh7SxS4vKe%2ByjsUzofRshpojBfolQs7mtgQO3BGpoB%2BPIImKYmvuo4B01quc%2FRIi5f60C0mQY1UpvGTauvacaQXGQ%2BtHOnyveX8eSZyBO1h57BsP8JZAEDoc19D%2FALhFpUVUbn4LvWKUtqTuVnSKQX21TFRei8Uij8kDuqz5QOxiysAHN7tlvP0BNEJnEIyVkvQTVVPMLKr2DDQ0LPUBjqkAWDFQ%2B%2BeHeY3sdRtpptEEa%2BDb5q0N8Xbv8BuCJO4FsDs10GO%2BCL5fL6QN5dhMRGzP341hjqyO%2F0wWcUrg4vS8Uv0SI%2BEUY149aXQ7W1JQM8%2FEBroo9GzNA9FmrpuqfyBL8T569vDbEqhfP2QywShdvwjxGdanKoLeRHR8a%2F6YYi16%2BQX%2F8JkNgknI2UiIaz2gD%2Fe9cTW0yLJlGtUYVxwRa1KdUiE&X-Amz-Signature=c9fd50d32ff1915fa1c4e7808699d0feecaaf0ae54106c6c443bbdaaefb8cb60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ATKQAFL%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCVbHyuQTeLyf6baZk9KzzKU19KnAOndq6qD3UCDqwdtAIhAOWd42jHnJtHMIkMIBzfEA61tRZRiC0iYVv4zORPoIIBKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3O4QQHq9WmfLeknYq3AMRXPwSgWOcVeD9jEXDdhEkhwdLvRJujCC3qrQxI6Pv8aRpdKAwQ3AwrIkOBxMkHEbCO%2F8HntqD4wZqG66vUuX1ktEufhmt%2F%2BfKaENg8g%2Byo7zq09ZnItrZySZd38SibGfxjoIFpBETLDACaxiWAtFLBBvELaJLjBdqAj1F%2F3NM%2BIb6FSsZ7mAcNaKRsBlJgXtzpyPooS2I9cGuevfsj1pbeZlG9QJUMhqbrqiN7lWGH9aTGqPdX09FsCAekEers%2BcrpfgtIgQmD%2FuBlr6n8qjh%2F2wEfIDGem6eOYO%2F8SH3Q7GsfZGcaqwzJ1OodQo2t6%2BDXbChp4oPUfmNPxEC2c9ikebWstuwrEGQc9hDFKndXB5jrMheJMRB8vxgRnT4VCXPlvWAAwZ9r1DABKodUPmG943jq0BlxdM%2F3yZsRw6uNBXKdRh7SxS4vKe%2ByjsUzofRshpojBfolQs7mtgQO3BGpoB%2BPIImKYmvuo4B01quc%2FRIi5f60C0mQY1UpvGTauvacaQXGQ%2BtHOnyveX8eSZyBO1h57BsP8JZAEDoc19D%2FALhFpUVUbn4LvWKUtqTuVnSKQX21TFRei8Uij8kDuqz5QOxiysAHN7tlvP0BNEJnEIyVkvQTVVPMLKr2DDQ0LPUBjqkAWDFQ%2B%2BeHeY3sdRtpptEEa%2BDb5q0N8Xbv8BuCJO4FsDs10GO%2BCL5fL6QN5dhMRGzP341hjqyO%2F0wWcUrg4vS8Uv0SI%2BEUY149aXQ7W1JQM8%2FEBroo9GzNA9FmrpuqfyBL8T569vDbEqhfP2QywShdvwjxGdanKoLeRHR8a%2F6YYi16%2BQX%2F8JkNgknI2UiIaz2gD%2Fe9cTW0yLJlGtUYVxwRa1KdUiE&X-Amz-Signature=2f32f3c8bf67dc5ee8212838268606547bc45811fab1311bd0a71866f3f031de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ATKQAFL%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCVbHyuQTeLyf6baZk9KzzKU19KnAOndq6qD3UCDqwdtAIhAOWd42jHnJtHMIkMIBzfEA61tRZRiC0iYVv4zORPoIIBKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3O4QQHq9WmfLeknYq3AMRXPwSgWOcVeD9jEXDdhEkhwdLvRJujCC3qrQxI6Pv8aRpdKAwQ3AwrIkOBxMkHEbCO%2F8HntqD4wZqG66vUuX1ktEufhmt%2F%2BfKaENg8g%2Byo7zq09ZnItrZySZd38SibGfxjoIFpBETLDACaxiWAtFLBBvELaJLjBdqAj1F%2F3NM%2BIb6FSsZ7mAcNaKRsBlJgXtzpyPooS2I9cGuevfsj1pbeZlG9QJUMhqbrqiN7lWGH9aTGqPdX09FsCAekEers%2BcrpfgtIgQmD%2FuBlr6n8qjh%2F2wEfIDGem6eOYO%2F8SH3Q7GsfZGcaqwzJ1OodQo2t6%2BDXbChp4oPUfmNPxEC2c9ikebWstuwrEGQc9hDFKndXB5jrMheJMRB8vxgRnT4VCXPlvWAAwZ9r1DABKodUPmG943jq0BlxdM%2F3yZsRw6uNBXKdRh7SxS4vKe%2ByjsUzofRshpojBfolQs7mtgQO3BGpoB%2BPIImKYmvuo4B01quc%2FRIi5f60C0mQY1UpvGTauvacaQXGQ%2BtHOnyveX8eSZyBO1h57BsP8JZAEDoc19D%2FALhFpUVUbn4LvWKUtqTuVnSKQX21TFRei8Uij8kDuqz5QOxiysAHN7tlvP0BNEJnEIyVkvQTVVPMLKr2DDQ0LPUBjqkAWDFQ%2B%2BeHeY3sdRtpptEEa%2BDb5q0N8Xbv8BuCJO4FsDs10GO%2BCL5fL6QN5dhMRGzP341hjqyO%2F0wWcUrg4vS8Uv0SI%2BEUY149aXQ7W1JQM8%2FEBroo9GzNA9FmrpuqfyBL8T569vDbEqhfP2QywShdvwjxGdanKoLeRHR8a%2F6YYi16%2BQX%2F8JkNgknI2UiIaz2gD%2Fe9cTW0yLJlGtUYVxwRa1KdUiE&X-Amz-Signature=3a12773013ed77f020d609b7a2aeb2b5acba0f6b585c959aaf1e613cab8681c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ATKQAFL%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCVbHyuQTeLyf6baZk9KzzKU19KnAOndq6qD3UCDqwdtAIhAOWd42jHnJtHMIkMIBzfEA61tRZRiC0iYVv4zORPoIIBKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3O4QQHq9WmfLeknYq3AMRXPwSgWOcVeD9jEXDdhEkhwdLvRJujCC3qrQxI6Pv8aRpdKAwQ3AwrIkOBxMkHEbCO%2F8HntqD4wZqG66vUuX1ktEufhmt%2F%2BfKaENg8g%2Byo7zq09ZnItrZySZd38SibGfxjoIFpBETLDACaxiWAtFLBBvELaJLjBdqAj1F%2F3NM%2BIb6FSsZ7mAcNaKRsBlJgXtzpyPooS2I9cGuevfsj1pbeZlG9QJUMhqbrqiN7lWGH9aTGqPdX09FsCAekEers%2BcrpfgtIgQmD%2FuBlr6n8qjh%2F2wEfIDGem6eOYO%2F8SH3Q7GsfZGcaqwzJ1OodQo2t6%2BDXbChp4oPUfmNPxEC2c9ikebWstuwrEGQc9hDFKndXB5jrMheJMRB8vxgRnT4VCXPlvWAAwZ9r1DABKodUPmG943jq0BlxdM%2F3yZsRw6uNBXKdRh7SxS4vKe%2ByjsUzofRshpojBfolQs7mtgQO3BGpoB%2BPIImKYmvuo4B01quc%2FRIi5f60C0mQY1UpvGTauvacaQXGQ%2BtHOnyveX8eSZyBO1h57BsP8JZAEDoc19D%2FALhFpUVUbn4LvWKUtqTuVnSKQX21TFRei8Uij8kDuqz5QOxiysAHN7tlvP0BNEJnEIyVkvQTVVPMLKr2DDQ0LPUBjqkAWDFQ%2B%2BeHeY3sdRtpptEEa%2BDb5q0N8Xbv8BuCJO4FsDs10GO%2BCL5fL6QN5dhMRGzP341hjqyO%2F0wWcUrg4vS8Uv0SI%2BEUY149aXQ7W1JQM8%2FEBroo9GzNA9FmrpuqfyBL8T569vDbEqhfP2QywShdvwjxGdanKoLeRHR8a%2F6YYi16%2BQX%2F8JkNgknI2UiIaz2gD%2Fe9cTW0yLJlGtUYVxwRa1KdUiE&X-Amz-Signature=56b976e7d605076fe01c442c51ff6d26126308c2725071231d3bfd0dda31ab86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ATKQAFL%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCVbHyuQTeLyf6baZk9KzzKU19KnAOndq6qD3UCDqwdtAIhAOWd42jHnJtHMIkMIBzfEA61tRZRiC0iYVv4zORPoIIBKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3O4QQHq9WmfLeknYq3AMRXPwSgWOcVeD9jEXDdhEkhwdLvRJujCC3qrQxI6Pv8aRpdKAwQ3AwrIkOBxMkHEbCO%2F8HntqD4wZqG66vUuX1ktEufhmt%2F%2BfKaENg8g%2Byo7zq09ZnItrZySZd38SibGfxjoIFpBETLDACaxiWAtFLBBvELaJLjBdqAj1F%2F3NM%2BIb6FSsZ7mAcNaKRsBlJgXtzpyPooS2I9cGuevfsj1pbeZlG9QJUMhqbrqiN7lWGH9aTGqPdX09FsCAekEers%2BcrpfgtIgQmD%2FuBlr6n8qjh%2F2wEfIDGem6eOYO%2F8SH3Q7GsfZGcaqwzJ1OodQo2t6%2BDXbChp4oPUfmNPxEC2c9ikebWstuwrEGQc9hDFKndXB5jrMheJMRB8vxgRnT4VCXPlvWAAwZ9r1DABKodUPmG943jq0BlxdM%2F3yZsRw6uNBXKdRh7SxS4vKe%2ByjsUzofRshpojBfolQs7mtgQO3BGpoB%2BPIImKYmvuo4B01quc%2FRIi5f60C0mQY1UpvGTauvacaQXGQ%2BtHOnyveX8eSZyBO1h57BsP8JZAEDoc19D%2FALhFpUVUbn4LvWKUtqTuVnSKQX21TFRei8Uij8kDuqz5QOxiysAHN7tlvP0BNEJnEIyVkvQTVVPMLKr2DDQ0LPUBjqkAWDFQ%2B%2BeHeY3sdRtpptEEa%2BDb5q0N8Xbv8BuCJO4FsDs10GO%2BCL5fL6QN5dhMRGzP341hjqyO%2F0wWcUrg4vS8Uv0SI%2BEUY149aXQ7W1JQM8%2FEBroo9GzNA9FmrpuqfyBL8T569vDbEqhfP2QywShdvwjxGdanKoLeRHR8a%2F6YYi16%2BQX%2F8JkNgknI2UiIaz2gD%2Fe9cTW0yLJlGtUYVxwRa1KdUiE&X-Amz-Signature=26932ac487da3e6bdf2b0ad70e5ba1bf1a2a4aa13147f69fa4ef555d52042034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ATKQAFL%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCVbHyuQTeLyf6baZk9KzzKU19KnAOndq6qD3UCDqwdtAIhAOWd42jHnJtHMIkMIBzfEA61tRZRiC0iYVv4zORPoIIBKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3O4QQHq9WmfLeknYq3AMRXPwSgWOcVeD9jEXDdhEkhwdLvRJujCC3qrQxI6Pv8aRpdKAwQ3AwrIkOBxMkHEbCO%2F8HntqD4wZqG66vUuX1ktEufhmt%2F%2BfKaENg8g%2Byo7zq09ZnItrZySZd38SibGfxjoIFpBETLDACaxiWAtFLBBvELaJLjBdqAj1F%2F3NM%2BIb6FSsZ7mAcNaKRsBlJgXtzpyPooS2I9cGuevfsj1pbeZlG9QJUMhqbrqiN7lWGH9aTGqPdX09FsCAekEers%2BcrpfgtIgQmD%2FuBlr6n8qjh%2F2wEfIDGem6eOYO%2F8SH3Q7GsfZGcaqwzJ1OodQo2t6%2BDXbChp4oPUfmNPxEC2c9ikebWstuwrEGQc9hDFKndXB5jrMheJMRB8vxgRnT4VCXPlvWAAwZ9r1DABKodUPmG943jq0BlxdM%2F3yZsRw6uNBXKdRh7SxS4vKe%2ByjsUzofRshpojBfolQs7mtgQO3BGpoB%2BPIImKYmvuo4B01quc%2FRIi5f60C0mQY1UpvGTauvacaQXGQ%2BtHOnyveX8eSZyBO1h57BsP8JZAEDoc19D%2FALhFpUVUbn4LvWKUtqTuVnSKQX21TFRei8Uij8kDuqz5QOxiysAHN7tlvP0BNEJnEIyVkvQTVVPMLKr2DDQ0LPUBjqkAWDFQ%2B%2BeHeY3sdRtpptEEa%2BDb5q0N8Xbv8BuCJO4FsDs10GO%2BCL5fL6QN5dhMRGzP341hjqyO%2F0wWcUrg4vS8Uv0SI%2BEUY149aXQ7W1JQM8%2FEBroo9GzNA9FmrpuqfyBL8T569vDbEqhfP2QywShdvwjxGdanKoLeRHR8a%2F6YYi16%2BQX%2F8JkNgknI2UiIaz2gD%2Fe9cTW0yLJlGtUYVxwRa1KdUiE&X-Amz-Signature=9c3b00a84c7d3bcc52d0f59b666f6dd01c5beb79edc4387c4f2c61d7e41667a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


