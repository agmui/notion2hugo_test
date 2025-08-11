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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6M423Z%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdASmAP3H%2FH5kg80xOsQwCrB35K0WA5aQSRSIyHulFCAIgA4jld1R6bd9bqqzY%2FiExEB4DyaSeO3JuWliuPKOHiZoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNSOSZQtR65IcFFgyrcA8OdUPV0BTZ6qnVwRupXURf8oocuGOrxCyU6lNoMON0HeieGHh54cNnVSKUyVoZAQhrLs%2BlV1hUJ%2BWaPVdFQxUL5M5wbWq25DSTYCIxRh7wUtFEEa%2F%2FS63WR8L6LlC6DjQtjKMwyIu67JIZ7mUxzzfiWx%2Fmj4wtg1WUO5Mob85SFj%2Bp5v4PasKNiZbJqD5gD90be4hKk2Pl0eAzbinpeahsxOC14wrqIMHmfjROCS5k0%2FQTDpLoTNd8pnJjpb0x4yNMa2%2F%2Bfg9qGryi8b9FJGs3BKIHpppMQI1QHDV3koP%2FRZLzd999tprIVixhKwqUaMS2SFHtjJegj4W7V51%2FAx4VWc7ujIQm%2BHmtKiMO%2FSfFF5Yio5TZ%2FTJqkjXsSNkfb2iTr26Qmy1YubF%2BCza5ObNGXbZCC0MkZcdLHk3yT5gjz%2BwFGFb6A1CjLKvFwsf1RrS0msyCQ1C5U0m9oMOZ1TzqzwGXujZuEzkBjJ%2BqxKIJ25zU13iEqYISzCcjk2WzoBZx%2BqK7MwO8aX5htzvRUUH88%2BK92EzilBhJ7AKErF7sqTMsfgaiEKdTxNsBALXx27dLdydTvj0YmJ8i7dXO9%2F4yYWvzjpIDL%2BnChMU%2Bef%2FeQVp%2BuDXWhqir4Q11BMIOe5cQGOqUBOYvpjxwc6NOBRyg6T62CihlCUrxKE2dOJq3phRcuzefiXluXm7Wa0GvIO3HfFbRRjY2%2FgizLyY4cFDkR9d0CYkZZbt7fn2NmqGKdShLHLOwHxPpZ7iSzs0KwF4lfY2RsuRw22fHl8it7vapv1Aqmx6fXthZKIqRPE%2B5rMaYZWMZqClAxsJI9THMvbd%2BBrH5OL3fS0gwhN4tNcQtc4LzI0IL7Musr&X-Amz-Signature=efd36da9e28918d03f6e6a34c7b142bfa44613ffb80097149d0c9a87c2edc8d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6M423Z%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdASmAP3H%2FH5kg80xOsQwCrB35K0WA5aQSRSIyHulFCAIgA4jld1R6bd9bqqzY%2FiExEB4DyaSeO3JuWliuPKOHiZoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNSOSZQtR65IcFFgyrcA8OdUPV0BTZ6qnVwRupXURf8oocuGOrxCyU6lNoMON0HeieGHh54cNnVSKUyVoZAQhrLs%2BlV1hUJ%2BWaPVdFQxUL5M5wbWq25DSTYCIxRh7wUtFEEa%2F%2FS63WR8L6LlC6DjQtjKMwyIu67JIZ7mUxzzfiWx%2Fmj4wtg1WUO5Mob85SFj%2Bp5v4PasKNiZbJqD5gD90be4hKk2Pl0eAzbinpeahsxOC14wrqIMHmfjROCS5k0%2FQTDpLoTNd8pnJjpb0x4yNMa2%2F%2Bfg9qGryi8b9FJGs3BKIHpppMQI1QHDV3koP%2FRZLzd999tprIVixhKwqUaMS2SFHtjJegj4W7V51%2FAx4VWc7ujIQm%2BHmtKiMO%2FSfFF5Yio5TZ%2FTJqkjXsSNkfb2iTr26Qmy1YubF%2BCza5ObNGXbZCC0MkZcdLHk3yT5gjz%2BwFGFb6A1CjLKvFwsf1RrS0msyCQ1C5U0m9oMOZ1TzqzwGXujZuEzkBjJ%2BqxKIJ25zU13iEqYISzCcjk2WzoBZx%2BqK7MwO8aX5htzvRUUH88%2BK92EzilBhJ7AKErF7sqTMsfgaiEKdTxNsBALXx27dLdydTvj0YmJ8i7dXO9%2F4yYWvzjpIDL%2BnChMU%2Bef%2FeQVp%2BuDXWhqir4Q11BMIOe5cQGOqUBOYvpjxwc6NOBRyg6T62CihlCUrxKE2dOJq3phRcuzefiXluXm7Wa0GvIO3HfFbRRjY2%2FgizLyY4cFDkR9d0CYkZZbt7fn2NmqGKdShLHLOwHxPpZ7iSzs0KwF4lfY2RsuRw22fHl8it7vapv1Aqmx6fXthZKIqRPE%2B5rMaYZWMZqClAxsJI9THMvbd%2BBrH5OL3fS0gwhN4tNcQtc4LzI0IL7Musr&X-Amz-Signature=eb654c958302ca17383a30b5ec3e44b6cf6412c15c0264025149ff2bd3c3a99d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6M423Z%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdASmAP3H%2FH5kg80xOsQwCrB35K0WA5aQSRSIyHulFCAIgA4jld1R6bd9bqqzY%2FiExEB4DyaSeO3JuWliuPKOHiZoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNSOSZQtR65IcFFgyrcA8OdUPV0BTZ6qnVwRupXURf8oocuGOrxCyU6lNoMON0HeieGHh54cNnVSKUyVoZAQhrLs%2BlV1hUJ%2BWaPVdFQxUL5M5wbWq25DSTYCIxRh7wUtFEEa%2F%2FS63WR8L6LlC6DjQtjKMwyIu67JIZ7mUxzzfiWx%2Fmj4wtg1WUO5Mob85SFj%2Bp5v4PasKNiZbJqD5gD90be4hKk2Pl0eAzbinpeahsxOC14wrqIMHmfjROCS5k0%2FQTDpLoTNd8pnJjpb0x4yNMa2%2F%2Bfg9qGryi8b9FJGs3BKIHpppMQI1QHDV3koP%2FRZLzd999tprIVixhKwqUaMS2SFHtjJegj4W7V51%2FAx4VWc7ujIQm%2BHmtKiMO%2FSfFF5Yio5TZ%2FTJqkjXsSNkfb2iTr26Qmy1YubF%2BCza5ObNGXbZCC0MkZcdLHk3yT5gjz%2BwFGFb6A1CjLKvFwsf1RrS0msyCQ1C5U0m9oMOZ1TzqzwGXujZuEzkBjJ%2BqxKIJ25zU13iEqYISzCcjk2WzoBZx%2BqK7MwO8aX5htzvRUUH88%2BK92EzilBhJ7AKErF7sqTMsfgaiEKdTxNsBALXx27dLdydTvj0YmJ8i7dXO9%2F4yYWvzjpIDL%2BnChMU%2Bef%2FeQVp%2BuDXWhqir4Q11BMIOe5cQGOqUBOYvpjxwc6NOBRyg6T62CihlCUrxKE2dOJq3phRcuzefiXluXm7Wa0GvIO3HfFbRRjY2%2FgizLyY4cFDkR9d0CYkZZbt7fn2NmqGKdShLHLOwHxPpZ7iSzs0KwF4lfY2RsuRw22fHl8it7vapv1Aqmx6fXthZKIqRPE%2B5rMaYZWMZqClAxsJI9THMvbd%2BBrH5OL3fS0gwhN4tNcQtc4LzI0IL7Musr&X-Amz-Signature=5ec2201e882ac7a28d5629e2049a746985dadd0d60f9110e0b6abede4a052707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6M423Z%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdASmAP3H%2FH5kg80xOsQwCrB35K0WA5aQSRSIyHulFCAIgA4jld1R6bd9bqqzY%2FiExEB4DyaSeO3JuWliuPKOHiZoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNSOSZQtR65IcFFgyrcA8OdUPV0BTZ6qnVwRupXURf8oocuGOrxCyU6lNoMON0HeieGHh54cNnVSKUyVoZAQhrLs%2BlV1hUJ%2BWaPVdFQxUL5M5wbWq25DSTYCIxRh7wUtFEEa%2F%2FS63WR8L6LlC6DjQtjKMwyIu67JIZ7mUxzzfiWx%2Fmj4wtg1WUO5Mob85SFj%2Bp5v4PasKNiZbJqD5gD90be4hKk2Pl0eAzbinpeahsxOC14wrqIMHmfjROCS5k0%2FQTDpLoTNd8pnJjpb0x4yNMa2%2F%2Bfg9qGryi8b9FJGs3BKIHpppMQI1QHDV3koP%2FRZLzd999tprIVixhKwqUaMS2SFHtjJegj4W7V51%2FAx4VWc7ujIQm%2BHmtKiMO%2FSfFF5Yio5TZ%2FTJqkjXsSNkfb2iTr26Qmy1YubF%2BCza5ObNGXbZCC0MkZcdLHk3yT5gjz%2BwFGFb6A1CjLKvFwsf1RrS0msyCQ1C5U0m9oMOZ1TzqzwGXujZuEzkBjJ%2BqxKIJ25zU13iEqYISzCcjk2WzoBZx%2BqK7MwO8aX5htzvRUUH88%2BK92EzilBhJ7AKErF7sqTMsfgaiEKdTxNsBALXx27dLdydTvj0YmJ8i7dXO9%2F4yYWvzjpIDL%2BnChMU%2Bef%2FeQVp%2BuDXWhqir4Q11BMIOe5cQGOqUBOYvpjxwc6NOBRyg6T62CihlCUrxKE2dOJq3phRcuzefiXluXm7Wa0GvIO3HfFbRRjY2%2FgizLyY4cFDkR9d0CYkZZbt7fn2NmqGKdShLHLOwHxPpZ7iSzs0KwF4lfY2RsuRw22fHl8it7vapv1Aqmx6fXthZKIqRPE%2B5rMaYZWMZqClAxsJI9THMvbd%2BBrH5OL3fS0gwhN4tNcQtc4LzI0IL7Musr&X-Amz-Signature=994aa090c9b4af40d5c341adc7786b9f3df7ef2e08425046d7d0ced6795782a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6M423Z%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdASmAP3H%2FH5kg80xOsQwCrB35K0WA5aQSRSIyHulFCAIgA4jld1R6bd9bqqzY%2FiExEB4DyaSeO3JuWliuPKOHiZoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNSOSZQtR65IcFFgyrcA8OdUPV0BTZ6qnVwRupXURf8oocuGOrxCyU6lNoMON0HeieGHh54cNnVSKUyVoZAQhrLs%2BlV1hUJ%2BWaPVdFQxUL5M5wbWq25DSTYCIxRh7wUtFEEa%2F%2FS63WR8L6LlC6DjQtjKMwyIu67JIZ7mUxzzfiWx%2Fmj4wtg1WUO5Mob85SFj%2Bp5v4PasKNiZbJqD5gD90be4hKk2Pl0eAzbinpeahsxOC14wrqIMHmfjROCS5k0%2FQTDpLoTNd8pnJjpb0x4yNMa2%2F%2Bfg9qGryi8b9FJGs3BKIHpppMQI1QHDV3koP%2FRZLzd999tprIVixhKwqUaMS2SFHtjJegj4W7V51%2FAx4VWc7ujIQm%2BHmtKiMO%2FSfFF5Yio5TZ%2FTJqkjXsSNkfb2iTr26Qmy1YubF%2BCza5ObNGXbZCC0MkZcdLHk3yT5gjz%2BwFGFb6A1CjLKvFwsf1RrS0msyCQ1C5U0m9oMOZ1TzqzwGXujZuEzkBjJ%2BqxKIJ25zU13iEqYISzCcjk2WzoBZx%2BqK7MwO8aX5htzvRUUH88%2BK92EzilBhJ7AKErF7sqTMsfgaiEKdTxNsBALXx27dLdydTvj0YmJ8i7dXO9%2F4yYWvzjpIDL%2BnChMU%2Bef%2FeQVp%2BuDXWhqir4Q11BMIOe5cQGOqUBOYvpjxwc6NOBRyg6T62CihlCUrxKE2dOJq3phRcuzefiXluXm7Wa0GvIO3HfFbRRjY2%2FgizLyY4cFDkR9d0CYkZZbt7fn2NmqGKdShLHLOwHxPpZ7iSzs0KwF4lfY2RsuRw22fHl8it7vapv1Aqmx6fXthZKIqRPE%2B5rMaYZWMZqClAxsJI9THMvbd%2BBrH5OL3fS0gwhN4tNcQtc4LzI0IL7Musr&X-Amz-Signature=561e120b157474d9f85ce65a99b9f05ad777dc6bd7c7911d202ba28c2dffa5dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6M423Z%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdASmAP3H%2FH5kg80xOsQwCrB35K0WA5aQSRSIyHulFCAIgA4jld1R6bd9bqqzY%2FiExEB4DyaSeO3JuWliuPKOHiZoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNSOSZQtR65IcFFgyrcA8OdUPV0BTZ6qnVwRupXURf8oocuGOrxCyU6lNoMON0HeieGHh54cNnVSKUyVoZAQhrLs%2BlV1hUJ%2BWaPVdFQxUL5M5wbWq25DSTYCIxRh7wUtFEEa%2F%2FS63WR8L6LlC6DjQtjKMwyIu67JIZ7mUxzzfiWx%2Fmj4wtg1WUO5Mob85SFj%2Bp5v4PasKNiZbJqD5gD90be4hKk2Pl0eAzbinpeahsxOC14wrqIMHmfjROCS5k0%2FQTDpLoTNd8pnJjpb0x4yNMa2%2F%2Bfg9qGryi8b9FJGs3BKIHpppMQI1QHDV3koP%2FRZLzd999tprIVixhKwqUaMS2SFHtjJegj4W7V51%2FAx4VWc7ujIQm%2BHmtKiMO%2FSfFF5Yio5TZ%2FTJqkjXsSNkfb2iTr26Qmy1YubF%2BCza5ObNGXbZCC0MkZcdLHk3yT5gjz%2BwFGFb6A1CjLKvFwsf1RrS0msyCQ1C5U0m9oMOZ1TzqzwGXujZuEzkBjJ%2BqxKIJ25zU13iEqYISzCcjk2WzoBZx%2BqK7MwO8aX5htzvRUUH88%2BK92EzilBhJ7AKErF7sqTMsfgaiEKdTxNsBALXx27dLdydTvj0YmJ8i7dXO9%2F4yYWvzjpIDL%2BnChMU%2Bef%2FeQVp%2BuDXWhqir4Q11BMIOe5cQGOqUBOYvpjxwc6NOBRyg6T62CihlCUrxKE2dOJq3phRcuzefiXluXm7Wa0GvIO3HfFbRRjY2%2FgizLyY4cFDkR9d0CYkZZbt7fn2NmqGKdShLHLOwHxPpZ7iSzs0KwF4lfY2RsuRw22fHl8it7vapv1Aqmx6fXthZKIqRPE%2B5rMaYZWMZqClAxsJI9THMvbd%2BBrH5OL3fS0gwhN4tNcQtc4LzI0IL7Musr&X-Amz-Signature=623387af9398f80db39807d78ba644fd25aae12ae7a9a79d48683a0ee83cd017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6M423Z%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdASmAP3H%2FH5kg80xOsQwCrB35K0WA5aQSRSIyHulFCAIgA4jld1R6bd9bqqzY%2FiExEB4DyaSeO3JuWliuPKOHiZoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNSOSZQtR65IcFFgyrcA8OdUPV0BTZ6qnVwRupXURf8oocuGOrxCyU6lNoMON0HeieGHh54cNnVSKUyVoZAQhrLs%2BlV1hUJ%2BWaPVdFQxUL5M5wbWq25DSTYCIxRh7wUtFEEa%2F%2FS63WR8L6LlC6DjQtjKMwyIu67JIZ7mUxzzfiWx%2Fmj4wtg1WUO5Mob85SFj%2Bp5v4PasKNiZbJqD5gD90be4hKk2Pl0eAzbinpeahsxOC14wrqIMHmfjROCS5k0%2FQTDpLoTNd8pnJjpb0x4yNMa2%2F%2Bfg9qGryi8b9FJGs3BKIHpppMQI1QHDV3koP%2FRZLzd999tprIVixhKwqUaMS2SFHtjJegj4W7V51%2FAx4VWc7ujIQm%2BHmtKiMO%2FSfFF5Yio5TZ%2FTJqkjXsSNkfb2iTr26Qmy1YubF%2BCza5ObNGXbZCC0MkZcdLHk3yT5gjz%2BwFGFb6A1CjLKvFwsf1RrS0msyCQ1C5U0m9oMOZ1TzqzwGXujZuEzkBjJ%2BqxKIJ25zU13iEqYISzCcjk2WzoBZx%2BqK7MwO8aX5htzvRUUH88%2BK92EzilBhJ7AKErF7sqTMsfgaiEKdTxNsBALXx27dLdydTvj0YmJ8i7dXO9%2F4yYWvzjpIDL%2BnChMU%2Bef%2FeQVp%2BuDXWhqir4Q11BMIOe5cQGOqUBOYvpjxwc6NOBRyg6T62CihlCUrxKE2dOJq3phRcuzefiXluXm7Wa0GvIO3HfFbRRjY2%2FgizLyY4cFDkR9d0CYkZZbt7fn2NmqGKdShLHLOwHxPpZ7iSzs0KwF4lfY2RsuRw22fHl8it7vapv1Aqmx6fXthZKIqRPE%2B5rMaYZWMZqClAxsJI9THMvbd%2BBrH5OL3fS0gwhN4tNcQtc4LzI0IL7Musr&X-Amz-Signature=6b81af27e061f36a4300adeebbbbd43d682bbc5c226a2883c22d00a0d64190aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6M423Z%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdASmAP3H%2FH5kg80xOsQwCrB35K0WA5aQSRSIyHulFCAIgA4jld1R6bd9bqqzY%2FiExEB4DyaSeO3JuWliuPKOHiZoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNSOSZQtR65IcFFgyrcA8OdUPV0BTZ6qnVwRupXURf8oocuGOrxCyU6lNoMON0HeieGHh54cNnVSKUyVoZAQhrLs%2BlV1hUJ%2BWaPVdFQxUL5M5wbWq25DSTYCIxRh7wUtFEEa%2F%2FS63WR8L6LlC6DjQtjKMwyIu67JIZ7mUxzzfiWx%2Fmj4wtg1WUO5Mob85SFj%2Bp5v4PasKNiZbJqD5gD90be4hKk2Pl0eAzbinpeahsxOC14wrqIMHmfjROCS5k0%2FQTDpLoTNd8pnJjpb0x4yNMa2%2F%2Bfg9qGryi8b9FJGs3BKIHpppMQI1QHDV3koP%2FRZLzd999tprIVixhKwqUaMS2SFHtjJegj4W7V51%2FAx4VWc7ujIQm%2BHmtKiMO%2FSfFF5Yio5TZ%2FTJqkjXsSNkfb2iTr26Qmy1YubF%2BCza5ObNGXbZCC0MkZcdLHk3yT5gjz%2BwFGFb6A1CjLKvFwsf1RrS0msyCQ1C5U0m9oMOZ1TzqzwGXujZuEzkBjJ%2BqxKIJ25zU13iEqYISzCcjk2WzoBZx%2BqK7MwO8aX5htzvRUUH88%2BK92EzilBhJ7AKErF7sqTMsfgaiEKdTxNsBALXx27dLdydTvj0YmJ8i7dXO9%2F4yYWvzjpIDL%2BnChMU%2Bef%2FeQVp%2BuDXWhqir4Q11BMIOe5cQGOqUBOYvpjxwc6NOBRyg6T62CihlCUrxKE2dOJq3phRcuzefiXluXm7Wa0GvIO3HfFbRRjY2%2FgizLyY4cFDkR9d0CYkZZbt7fn2NmqGKdShLHLOwHxPpZ7iSzs0KwF4lfY2RsuRw22fHl8it7vapv1Aqmx6fXthZKIqRPE%2B5rMaYZWMZqClAxsJI9THMvbd%2BBrH5OL3fS0gwhN4tNcQtc4LzI0IL7Musr&X-Amz-Signature=d0140de8ab166fc4d6afc8245f540bfa230270e842e42692a939de94084c7956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6M423Z%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdASmAP3H%2FH5kg80xOsQwCrB35K0WA5aQSRSIyHulFCAIgA4jld1R6bd9bqqzY%2FiExEB4DyaSeO3JuWliuPKOHiZoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNSOSZQtR65IcFFgyrcA8OdUPV0BTZ6qnVwRupXURf8oocuGOrxCyU6lNoMON0HeieGHh54cNnVSKUyVoZAQhrLs%2BlV1hUJ%2BWaPVdFQxUL5M5wbWq25DSTYCIxRh7wUtFEEa%2F%2FS63WR8L6LlC6DjQtjKMwyIu67JIZ7mUxzzfiWx%2Fmj4wtg1WUO5Mob85SFj%2Bp5v4PasKNiZbJqD5gD90be4hKk2Pl0eAzbinpeahsxOC14wrqIMHmfjROCS5k0%2FQTDpLoTNd8pnJjpb0x4yNMa2%2F%2Bfg9qGryi8b9FJGs3BKIHpppMQI1QHDV3koP%2FRZLzd999tprIVixhKwqUaMS2SFHtjJegj4W7V51%2FAx4VWc7ujIQm%2BHmtKiMO%2FSfFF5Yio5TZ%2FTJqkjXsSNkfb2iTr26Qmy1YubF%2BCza5ObNGXbZCC0MkZcdLHk3yT5gjz%2BwFGFb6A1CjLKvFwsf1RrS0msyCQ1C5U0m9oMOZ1TzqzwGXujZuEzkBjJ%2BqxKIJ25zU13iEqYISzCcjk2WzoBZx%2BqK7MwO8aX5htzvRUUH88%2BK92EzilBhJ7AKErF7sqTMsfgaiEKdTxNsBALXx27dLdydTvj0YmJ8i7dXO9%2F4yYWvzjpIDL%2BnChMU%2Bef%2FeQVp%2BuDXWhqir4Q11BMIOe5cQGOqUBOYvpjxwc6NOBRyg6T62CihlCUrxKE2dOJq3phRcuzefiXluXm7Wa0GvIO3HfFbRRjY2%2FgizLyY4cFDkR9d0CYkZZbt7fn2NmqGKdShLHLOwHxPpZ7iSzs0KwF4lfY2RsuRw22fHl8it7vapv1Aqmx6fXthZKIqRPE%2B5rMaYZWMZqClAxsJI9THMvbd%2BBrH5OL3fS0gwhN4tNcQtc4LzI0IL7Musr&X-Amz-Signature=0c23005a6bdd21917e0c1ba3a4b6ee0df4d867e0ee905584d0e90111cc39df50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6M423Z%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdASmAP3H%2FH5kg80xOsQwCrB35K0WA5aQSRSIyHulFCAIgA4jld1R6bd9bqqzY%2FiExEB4DyaSeO3JuWliuPKOHiZoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNSOSZQtR65IcFFgyrcA8OdUPV0BTZ6qnVwRupXURf8oocuGOrxCyU6lNoMON0HeieGHh54cNnVSKUyVoZAQhrLs%2BlV1hUJ%2BWaPVdFQxUL5M5wbWq25DSTYCIxRh7wUtFEEa%2F%2FS63WR8L6LlC6DjQtjKMwyIu67JIZ7mUxzzfiWx%2Fmj4wtg1WUO5Mob85SFj%2Bp5v4PasKNiZbJqD5gD90be4hKk2Pl0eAzbinpeahsxOC14wrqIMHmfjROCS5k0%2FQTDpLoTNd8pnJjpb0x4yNMa2%2F%2Bfg9qGryi8b9FJGs3BKIHpppMQI1QHDV3koP%2FRZLzd999tprIVixhKwqUaMS2SFHtjJegj4W7V51%2FAx4VWc7ujIQm%2BHmtKiMO%2FSfFF5Yio5TZ%2FTJqkjXsSNkfb2iTr26Qmy1YubF%2BCza5ObNGXbZCC0MkZcdLHk3yT5gjz%2BwFGFb6A1CjLKvFwsf1RrS0msyCQ1C5U0m9oMOZ1TzqzwGXujZuEzkBjJ%2BqxKIJ25zU13iEqYISzCcjk2WzoBZx%2BqK7MwO8aX5htzvRUUH88%2BK92EzilBhJ7AKErF7sqTMsfgaiEKdTxNsBALXx27dLdydTvj0YmJ8i7dXO9%2F4yYWvzjpIDL%2BnChMU%2Bef%2FeQVp%2BuDXWhqir4Q11BMIOe5cQGOqUBOYvpjxwc6NOBRyg6T62CihlCUrxKE2dOJq3phRcuzefiXluXm7Wa0GvIO3HfFbRRjY2%2FgizLyY4cFDkR9d0CYkZZbt7fn2NmqGKdShLHLOwHxPpZ7iSzs0KwF4lfY2RsuRw22fHl8it7vapv1Aqmx6fXthZKIqRPE%2B5rMaYZWMZqClAxsJI9THMvbd%2BBrH5OL3fS0gwhN4tNcQtc4LzI0IL7Musr&X-Amz-Signature=58154503b67d8288127b63aa73ccd16c2968e2a92fd449e36e2c8910b63c5597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXV7NT4F%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T040013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPUjz1cGBOOzELDK1KCNq4n3S0TXD1uFYRsZRTlkyhlAIhAK1PDha%2FUeO3W7VCYmNPvXQ%2Bqx3SB21Q9PxeV4n67BLmKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxecvnKtQTL3rw1sVwq3APGs993%2F6O4FbJs0LW%2F4kZ58igOL6Qg0yQb09F3KkCyFq0hGekRVFp5%2BLshrXptdcM9A1wBzUkXfLMrQFQLYgY50Mazf2MXg1S07JS%2FzNF2A6V%2B9VqLnIhKDAebgTnX3HYlb7iOCegmKc0HkqEqq9VwfhN1VZocjLThDM0nQ%2BJRAvrmK9760c8pov5VB6LmxuskKYcVIG5mGT54O7ckzSpP2jIRkkG6j%2Bnbnkg9m2U%2F4%2FP9dW4hYQw71QgAzRqVM9CVu%2B2c2bglXzRSLU7T%2Bckm3qB%2FCAiU81B%2F0Lkti7kM0M7JqpMUgj21DUSHXszfeB2tvS1eEWV0qqxVuEbq0giyNpH5EpYoaAx0Usfl9L6BHuMsm619Xs2wTUuSnlZ4QI9Xyb29LELOA1oCnb8X6aBhY4K%2BdvBivuDGAJwh4vrNBJhp9NXO9gysn2n1MwFh4WgyKNv8hUWahFvwgW3%2FUgdda1HAF%2FImiCWu9vjYZPk%2BIMxoGineDHiRtfRBDCO%2BR5Ia1BJdF1K34JQG9OMDkcU%2B2acioxoWxD%2Fot1GaUV3MpQbvwvgO97nVSDGK0X2eOWlsqCAsDBuOEJKoA9%2FEFqMe1rROGh5XVcYkBWbP4VyFlKRItYhB9GJ5cTL5lTCZneXEBjqkAbOZ%2BTMlb19wlXHQ9h8PigAeEQ0W0IJv0F5BKNSM8qmI9c%2FbS73lI9eO3OJaKVSmEEi81zxPIHb1kOOPGMdZ3bc6NW85Dgo8BFdmSMj8711u7DzYxTrVgf23jQ7XZS0DVfQtqc%2FtDaNmfmUJpiok%2BdisVRdtae5DnJYCRHEgtVfI4%2BJWsZfd6q7nQQtv7wC9Jkku4mJ8Q1KVNH%2BD1psUz0tWFrZC&X-Amz-Signature=b00c9b552ef05b81096f192a4e77c18e9010fada3055aedc1bb0e4e18d418fd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6GOIELC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T040018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0B5bVztQvBf7XnT2thYOskqfe5fZFvzO24pcOxGuHiAiEAweaalF6UexdSdkn%2Bi5GEcMpyP4jcb8n3u9zZN5Z15iwqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCMYOl%2Fr4ZZF7QPzircA%2BknR%2FbOIhz0%2FP8hxy7nz6n2i7it6rH%2F5y%2BDnQzE6aqQxqeGFL%2B4ncTBW5ZSMNKTm5yNksxk8CBehURtx%2FoVv5cudECy7gI3tDgLFfnDf2enxSWtOWV4sxaWtKzcWPau7X3dsV0UNKxlJhz4xxVOL4%2BbmTbyYrwBp%2BWfcWC1gWf8kXu5ho27wTB4j5O9LcZ8FZsLlL6cXC80w7tlrpEERYQb7qC3b9mhhiBgQRDLWQHUcZ8OKdJa7Y%2BRcrv9dm4hsWJpWPxv3DOI9dmkOjDrOsnt9iJMeoVvLYPjL9wgfrr%2B72Qu8ugpacFwpVj%2Felprex1%2FpcOc54SOWvsk6SEUdN9uD9DlVnmM%2BTM72HvJMdn%2Fg8VZ4262M%2FuisdHTw0fWZQX0AY4NAUX9a5JLkFMDkN7wO6JTrLod0HU1e2%2BS2u%2FfdNCiQXtli2g3pBcEosCaExlS6n5ci%2BlRl%2FyNhYobMe%2F%2Bm903UkX%2FVAhWzgsA9YARW8W6mtEw0FWFebq8yExD7rSiPS%2BHSfmT8H%2F%2FONzQlvqHTbtP%2BXbP28pNqXgfZ2tGgdg3JJqT%2BW1gvCcnSgmfEbBE7S%2FFMvYDlHkT1ov9Gv4%2Fe4821PsAonHwcza50OoNTGp%2FxCZHwC2efUcFMIed5cQGOqUBzagDqEQYx6OzIXi1C1zMfSSdFfpC00Toju49m0tk7Ejemave%2FswOY%2F3%2FdT6SsRVUTDeXfEHrq2NXVjUJ4oIvH78XjLAtl7RptmXwyljNJzgWH0k0CnbUOiAA2tr7%2Fktr7SF2rs3PKMxDFN9p2jzTB9NsGNKuB5I2aZplFsrzYqgfBkWBcl2I2RdLiqoTSF67W%2F0JSNJp0PM9EywupRqk%2FREiMnb1&X-Amz-Signature=6381ea73ae834fdd707d67e9a034b44d55829147ad01443d62a0224bebdd72bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWB44PNL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T040024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrDH4iCTXYA0OmZyr9CkMxber5qbiJG7YOG5P8BPmwMAiEAq7TIwALLHA4tK9ox%2BiYA2Yiy1MFVCtW2ImO94zK397sqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGKViDRazFzpk4%2BDwyrcA19CzXknnc1PRCL9yfffYj6Fj%2FgiI0T3q4u%2BtcPX%2FYCKZM8OwBaCYgPx9rS09F6HGNXAqERSFcu6RfLgO%2BrgcOWvsYf9sZ9ELyQxp9AN1SFS6rQQMMPoUZSI6RTLQri0HrH0MYIUOjP7kpAyUj3pDmdjF1tmgZc0FRIRop7R36WFQlfEiAFy4jgNsDfa7dZHp0u8V%2FX%2FcVzPuuoPHyIwjfwcQ%2FAqzShtgJ7U9h7eqC2tclQ8E8cgNQECnhVRxTAUVVMheyRG%2B4RHvCXh%2FedNLm9Lnq5OTWtexVV9qxsa8CRqGAh%2F7Oeh8CzH%2Bwx%2BtsRo2zVI6ImRfxKSCapbuuPVWzXoFPYC%2FV1c%2FiD88SIGhd4wUHN%2F5orJgluh5FURs%2FQPHdbgwy2w7LrNvazt4iIC0RSRhGS%2Bf%2FLwOUoIUlZ00z%2Ft2Fk4fAOfjZPE58yNs75BdgAyEsv9VLmZ6V%2BWo29gLMPTam2bTzxZcgBeWCb4XAoohCuutZG9ocAgACMObzkmCz6vbVRCbuDhjLUSUtNKpUqP710htRsyrYEo7peuE4pexxxqZ80hwt%2FLb4af5DCF3RLC5FQupMEWPio6tmoNsVKNUaEqh2TRQdGZ27vKP%2BjOUVYaquSXwa5x0oPzMKGd5cQGOqUB8Z748Q5kjJ8C1SfT1djFKNssATMNrOOyK7umM8vooyeEh7SasTEUcciHBHDq125OhqcwgJ3FXxDJatpgCaVPoDaRauKZ5BejQmgIVVa%2BQYxK7BzZcXjjeyLrmfBybiF3HO7R%2FQNN%2Fx2TVjUSv292un0IjlLuAap8lGuvyawSFVXRIlQx0uhEmwFGDhj%2BbPwMX3rwhxD5lD3WSLxhJZR4elObN8It&X-Amz-Signature=817f09c53aa7d1b1d80060d3ac629151db5595ce3aa91e28a2dcc5474c6a0dce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6M423Z%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdASmAP3H%2FH5kg80xOsQwCrB35K0WA5aQSRSIyHulFCAIgA4jld1R6bd9bqqzY%2FiExEB4DyaSeO3JuWliuPKOHiZoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNSOSZQtR65IcFFgyrcA8OdUPV0BTZ6qnVwRupXURf8oocuGOrxCyU6lNoMON0HeieGHh54cNnVSKUyVoZAQhrLs%2BlV1hUJ%2BWaPVdFQxUL5M5wbWq25DSTYCIxRh7wUtFEEa%2F%2FS63WR8L6LlC6DjQtjKMwyIu67JIZ7mUxzzfiWx%2Fmj4wtg1WUO5Mob85SFj%2Bp5v4PasKNiZbJqD5gD90be4hKk2Pl0eAzbinpeahsxOC14wrqIMHmfjROCS5k0%2FQTDpLoTNd8pnJjpb0x4yNMa2%2F%2Bfg9qGryi8b9FJGs3BKIHpppMQI1QHDV3koP%2FRZLzd999tprIVixhKwqUaMS2SFHtjJegj4W7V51%2FAx4VWc7ujIQm%2BHmtKiMO%2FSfFF5Yio5TZ%2FTJqkjXsSNkfb2iTr26Qmy1YubF%2BCza5ObNGXbZCC0MkZcdLHk3yT5gjz%2BwFGFb6A1CjLKvFwsf1RrS0msyCQ1C5U0m9oMOZ1TzqzwGXujZuEzkBjJ%2BqxKIJ25zU13iEqYISzCcjk2WzoBZx%2BqK7MwO8aX5htzvRUUH88%2BK92EzilBhJ7AKErF7sqTMsfgaiEKdTxNsBALXx27dLdydTvj0YmJ8i7dXO9%2F4yYWvzjpIDL%2BnChMU%2Bef%2FeQVp%2BuDXWhqir4Q11BMIOe5cQGOqUBOYvpjxwc6NOBRyg6T62CihlCUrxKE2dOJq3phRcuzefiXluXm7Wa0GvIO3HfFbRRjY2%2FgizLyY4cFDkR9d0CYkZZbt7fn2NmqGKdShLHLOwHxPpZ7iSzs0KwF4lfY2RsuRw22fHl8it7vapv1Aqmx6fXthZKIqRPE%2B5rMaYZWMZqClAxsJI9THMvbd%2BBrH5OL3fS0gwhN4tNcQtc4LzI0IL7Musr&X-Amz-Signature=db1bc497fcc8cd1b44094c9ee0c9adf6cca732151134c095d1202e8a71543263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2DEM2EL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T040026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV%2BG%2F9jYkgqm%2BGfM%2B%2F7%2FVgZbj7AcgW5R%2FXzPxwEBfvigIgWtDZe7iFh0uqQvzuvSx1yFFoU7vFKLRiUene6jv9sXYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvt11fLFVo2F5sApCrcA%2BkBlR4eSZCTh0D0WafryJZ1tMCbaaO59mFz9fonbEDNtfBmOBz0BcuVD99XtPNkwISnUG%2F9OaYso1ztz5A%2B6rSaRVKP35QX4j1Ro1IKTziLa9w%2FMcYqi8LTY1PGlsfSSI1u43XKW3r8EgfWbmzLM05eAJb1XzgMgXmMqh9ffz%2FZwlv1EC9xdxn8EYSM%2F9w%2F1zX4Ze9fS%2BObN9576vdeU%2FeINTjtjwaw1q76qQ2SD%2Fpw7Gh5QF0yHtEA60tfxWchiPUQncBqWebumT3ln16p5csftgUYuJyv%2FFh7V1hglhXHIUFhI70%2FKtcEnP8wXORhkvNDckBe1PCDb4SbRyO2jZGUppIQSj3OKZCS40NCf%2BjxbJimv6tt27xccDFIUwi1LrgJQQyRqu565W10jcjvjng1tzO1V2KM7ZDdytCaGKyY8S6N0Bd6YDd2Wikwy3GPTgS8gQIB37sw%2BH81%2Bf%2BSSUxGdRo7fDzp5Yz9UTsy2mLyh17JunS2OfbNtrU1f8kGwdNPT6%2BJvfURLJhs%2Bcn5AzqkVDcz649lzxAqDIVd3AeMmR55gmI%2F1WHjQjX0YHeT993fYq1ygGI0tSB5sHBQUn1KZMi4gszhck%2FZm5TjFWc%2BOwQCJziUVW7jSt4lMK6e5cQGOqUBOt4MKz91BdqczTXUwT403IxE7tNGAFHDb5WOmT9QDDFHy1pVL5%2FNfxxPPsyb8T8ychlkwtfktoDtBjOwFsHLn3UmMsrtnt3RBBuc%2Bk2%2BqCw0ocUGuFREvcuiY4QvM1PPGq7OCmz5ds9UA568DbF3RAYE7uv4RjXcn%2FZWHm3qZeSOW0yPX%2F4ji%2FFRpBduQacSM%2FCej2QVeGZ3bDdJs9ez79aE8V8X&X-Amz-Signature=450ae5c9ab112cb828bf7e2506bde0b5e0c873c6d06c1da3cc85a63059a8f812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6M423Z%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdASmAP3H%2FH5kg80xOsQwCrB35K0WA5aQSRSIyHulFCAIgA4jld1R6bd9bqqzY%2FiExEB4DyaSeO3JuWliuPKOHiZoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNSOSZQtR65IcFFgyrcA8OdUPV0BTZ6qnVwRupXURf8oocuGOrxCyU6lNoMON0HeieGHh54cNnVSKUyVoZAQhrLs%2BlV1hUJ%2BWaPVdFQxUL5M5wbWq25DSTYCIxRh7wUtFEEa%2F%2FS63WR8L6LlC6DjQtjKMwyIu67JIZ7mUxzzfiWx%2Fmj4wtg1WUO5Mob85SFj%2Bp5v4PasKNiZbJqD5gD90be4hKk2Pl0eAzbinpeahsxOC14wrqIMHmfjROCS5k0%2FQTDpLoTNd8pnJjpb0x4yNMa2%2F%2Bfg9qGryi8b9FJGs3BKIHpppMQI1QHDV3koP%2FRZLzd999tprIVixhKwqUaMS2SFHtjJegj4W7V51%2FAx4VWc7ujIQm%2BHmtKiMO%2FSfFF5Yio5TZ%2FTJqkjXsSNkfb2iTr26Qmy1YubF%2BCza5ObNGXbZCC0MkZcdLHk3yT5gjz%2BwFGFb6A1CjLKvFwsf1RrS0msyCQ1C5U0m9oMOZ1TzqzwGXujZuEzkBjJ%2BqxKIJ25zU13iEqYISzCcjk2WzoBZx%2BqK7MwO8aX5htzvRUUH88%2BK92EzilBhJ7AKErF7sqTMsfgaiEKdTxNsBALXx27dLdydTvj0YmJ8i7dXO9%2F4yYWvzjpIDL%2BnChMU%2Bef%2FeQVp%2BuDXWhqir4Q11BMIOe5cQGOqUBOYvpjxwc6NOBRyg6T62CihlCUrxKE2dOJq3phRcuzefiXluXm7Wa0GvIO3HfFbRRjY2%2FgizLyY4cFDkR9d0CYkZZbt7fn2NmqGKdShLHLOwHxPpZ7iSzs0KwF4lfY2RsuRw22fHl8it7vapv1Aqmx6fXthZKIqRPE%2B5rMaYZWMZqClAxsJI9THMvbd%2BBrH5OL3fS0gwhN4tNcQtc4LzI0IL7Musr&X-Amz-Signature=52b944fbf8d2ceabce965b94d46c1fbd94e961b7b1338af5dc020657d73ae55d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE4A7KQV%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T040028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy%2FSmCly1xQOhkQdCliFet%2BWd6ITke1pv3tVkC2wtoHAiEA%2FY2PFWkRKT%2BymBEa9w8g%2BiQ2t5xbiMyeCVesSH2GQc4qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlmW6fyHnHthiMKZCrcA3bG%2F%2Fkkyp3Ldu7Z6D168fIPzPLJi2wkeuA5DeWbl6oFuiXmNW6kXceSM4hMHBk5vX%2B4WYmRKollmLvy36MIjbge9CQAkZyiV1YxtLPLI2tn9MK%2FRxoRjTvTj8oqYnpu2yWQjPbC%2FblTV4Huv5aSYaygthy8%2BwONJr96XOL%2F33tLvbLMjAXSfdsV7FmIochAqWzanAljaNbDPT1KBurYRMdm27nhGnnYH%2FFpm8ldyPKTDfFQzoAU5G2W2zQpHPfg8hi83Y06vF%2Bn1ZcyKC%2ByebyDDvmEjBs19YwKzzDJMM%2BnZQC5mkWhEhdiwGguX083jWur8Hjtw8kDIiAvB85o8bmBlXM93YhrJQ52lQp7kNDPBXiNqgbVWMqg7MP1tKgg56IwSobjjXPlj7eWJPFm0pNWcBOeIM%2BvkctVys9LmqyLXudVguVDmwcBE2uC%2F6vvxG6QyWN0I6NCO1Mwj7X3mQfLAlNnj2QnjHrxnefI3D9JWEvLgRAAVj90QaaqxG%2F6zDiiN8lKyVYYDdtXxSMyByRCJsUtA2aIe%2Fs3qxxzqYJv2NouNK%2BCN53BK9RzoXGgT3K6Lvy1hUbTHtAqmREj6v%2FX5dQ08ZgErQHXPxBlO1358LfFZ3Tirrqghfs6MPKc5cQGOqUB99OxOraYUFEvb94tiu4a4vX%2B0wuaMGWrvE4%2BFLieECR3OQM7toSrYQV5FV7tCPnH1KMKgaynjgVjhnRr3tgQuGAIWqQojSlAiyPK88l4Hc62MiL1BcBryNdxsSqZvF44Cg4iPg2XsaBTVnAJf%2Fm9hWF43w9Z9rWvAOUTY5u6zhF5E9Mgxc5%2BhMyAxtcxbMxmxHzYEnxa0jCpRwW%2BxNfxRBgqb7sP&X-Amz-Signature=a2254c4a55809ec249d3281d2d351ea67516bd18c8750cf389cdb12b022df9ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6M423Z%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdASmAP3H%2FH5kg80xOsQwCrB35K0WA5aQSRSIyHulFCAIgA4jld1R6bd9bqqzY%2FiExEB4DyaSeO3JuWliuPKOHiZoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNSOSZQtR65IcFFgyrcA8OdUPV0BTZ6qnVwRupXURf8oocuGOrxCyU6lNoMON0HeieGHh54cNnVSKUyVoZAQhrLs%2BlV1hUJ%2BWaPVdFQxUL5M5wbWq25DSTYCIxRh7wUtFEEa%2F%2FS63WR8L6LlC6DjQtjKMwyIu67JIZ7mUxzzfiWx%2Fmj4wtg1WUO5Mob85SFj%2Bp5v4PasKNiZbJqD5gD90be4hKk2Pl0eAzbinpeahsxOC14wrqIMHmfjROCS5k0%2FQTDpLoTNd8pnJjpb0x4yNMa2%2F%2Bfg9qGryi8b9FJGs3BKIHpppMQI1QHDV3koP%2FRZLzd999tprIVixhKwqUaMS2SFHtjJegj4W7V51%2FAx4VWc7ujIQm%2BHmtKiMO%2FSfFF5Yio5TZ%2FTJqkjXsSNkfb2iTr26Qmy1YubF%2BCza5ObNGXbZCC0MkZcdLHk3yT5gjz%2BwFGFb6A1CjLKvFwsf1RrS0msyCQ1C5U0m9oMOZ1TzqzwGXujZuEzkBjJ%2BqxKIJ25zU13iEqYISzCcjk2WzoBZx%2BqK7MwO8aX5htzvRUUH88%2BK92EzilBhJ7AKErF7sqTMsfgaiEKdTxNsBALXx27dLdydTvj0YmJ8i7dXO9%2F4yYWvzjpIDL%2BnChMU%2Bef%2FeQVp%2BuDXWhqir4Q11BMIOe5cQGOqUBOYvpjxwc6NOBRyg6T62CihlCUrxKE2dOJq3phRcuzefiXluXm7Wa0GvIO3HfFbRRjY2%2FgizLyY4cFDkR9d0CYkZZbt7fn2NmqGKdShLHLOwHxPpZ7iSzs0KwF4lfY2RsuRw22fHl8it7vapv1Aqmx6fXthZKIqRPE%2B5rMaYZWMZqClAxsJI9THMvbd%2BBrH5OL3fS0gwhN4tNcQtc4LzI0IL7Musr&X-Amz-Signature=aaabda0b2c0b1d2573b662093792d83af3acc6237903d8150c4ea52f3d4cde58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNIHBG3E%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T040031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOMDvnbpYGOwsRknUVlezGoUgnCM8Jn%2BppcKjHAUYlEAiBpXTgJwqk0SHgId32dc06h93yyKIyHQxZ1fDvBvJT81iqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1aK2cen2GEJJEyEBKtwDjP2kUhYb4jPTX9PL4jUnlI4zZff2o5C5mAMKedQtvIs43r3cfTPO0rkuso6As2B59zeKyBY%2F8hFFRd1NcTOrZLShyE8%2FA3Mdca8z8Xma28LvsoqiN12JP4sdcegBS16H%2FVaOAcdXBcmEFKbhbpKFTQ%2B2dlRG0%2FKkj8%2F9M2mSFCGbT4FOHYbbZh6Z1Fj6DaV1vJSUHdBpbOTTMzHaym%2B5uvLsVxVji0Nw5abautt2K1AUvhpKu4Z%2Baciei12DC18bV%2FuAHc0ODTDFCMu0ewrHbniN0swKoOGg5ji6h2B%2FGoSgh%2BUTOxb48nCEbuYgVdoiJIYo5spFuV7NAEYrrognyTUPCMnisxy%2FR1hseHPylZSSM8pHk62SjGw1XQp3cS%2F0y%2FPT%2FrRLZH0hQ%2BGR3JGyLUfwpgq5tV9hg1tw%2BIcEJ1hAX2W5pk63iP4A1fpXW1F6SqJSgrBpOi0CO2omGMjdJwQEE%2F%2BjvLAxyhLTAvHnEjYp%2BBVv2DLAhGFWFbqjMoo19a9trj79fMBKPGsIraubvIQDcPNqA%2Bvw%2BsTcMQ2%2FtTVNjm%2BBoRCnc5Ffp%2FU0Zonndm2KHlGbp%2F83qQQcbh6HV2%2BBlEupo4UB5%2B%2FpDcCiqlN2xYS1g2n5mXf6WyMwgZ7lxAY6pgHsthVpPcgiDdY3kTe0V6mtxaFTqx5FK0mD5e8HdGxFeejLoj%2BIB6z8bMoyosW%2F%2FYHe%2BDuA5PE3eUctRPCANYUIYvmh9dsZPPfZtAopA3Gzq4qwaM2vvbzb4Gd0mb19gv0hBsXMieNTj6mqnpA85i33TFzH0iBKnG2lcL%2FqnCcaeRUfsP5dKtLOqpzPeU3MJ1Xn%2FL2VfONwPKS1h1upIInkePMy1%2Bxm&X-Amz-Signature=8df1a2f34ee89e3ba7e9533fd65d4755325c9e52f4d1cb615e0e73a0e0d001ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6M423Z%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdASmAP3H%2FH5kg80xOsQwCrB35K0WA5aQSRSIyHulFCAIgA4jld1R6bd9bqqzY%2FiExEB4DyaSeO3JuWliuPKOHiZoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNSOSZQtR65IcFFgyrcA8OdUPV0BTZ6qnVwRupXURf8oocuGOrxCyU6lNoMON0HeieGHh54cNnVSKUyVoZAQhrLs%2BlV1hUJ%2BWaPVdFQxUL5M5wbWq25DSTYCIxRh7wUtFEEa%2F%2FS63WR8L6LlC6DjQtjKMwyIu67JIZ7mUxzzfiWx%2Fmj4wtg1WUO5Mob85SFj%2Bp5v4PasKNiZbJqD5gD90be4hKk2Pl0eAzbinpeahsxOC14wrqIMHmfjROCS5k0%2FQTDpLoTNd8pnJjpb0x4yNMa2%2F%2Bfg9qGryi8b9FJGs3BKIHpppMQI1QHDV3koP%2FRZLzd999tprIVixhKwqUaMS2SFHtjJegj4W7V51%2FAx4VWc7ujIQm%2BHmtKiMO%2FSfFF5Yio5TZ%2FTJqkjXsSNkfb2iTr26Qmy1YubF%2BCza5ObNGXbZCC0MkZcdLHk3yT5gjz%2BwFGFb6A1CjLKvFwsf1RrS0msyCQ1C5U0m9oMOZ1TzqzwGXujZuEzkBjJ%2BqxKIJ25zU13iEqYISzCcjk2WzoBZx%2BqK7MwO8aX5htzvRUUH88%2BK92EzilBhJ7AKErF7sqTMsfgaiEKdTxNsBALXx27dLdydTvj0YmJ8i7dXO9%2F4yYWvzjpIDL%2BnChMU%2Bef%2FeQVp%2BuDXWhqir4Q11BMIOe5cQGOqUBOYvpjxwc6NOBRyg6T62CihlCUrxKE2dOJq3phRcuzefiXluXm7Wa0GvIO3HfFbRRjY2%2FgizLyY4cFDkR9d0CYkZZbt7fn2NmqGKdShLHLOwHxPpZ7iSzs0KwF4lfY2RsuRw22fHl8it7vapv1Aqmx6fXthZKIqRPE%2B5rMaYZWMZqClAxsJI9THMvbd%2BBrH5OL3fS0gwhN4tNcQtc4LzI0IL7Musr&X-Amz-Signature=f25c12744e4b187d822c0ff61b2b5a9a09be5f8d663db83da16d9e8f66bb4bfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLDCQJFB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T040034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxx98XYdZxa0weL%2BSQqaFBoWAcBbh0C1%2FHJZDzV93CBAiEAw07lDUaj%2Fb81z5EyB1gRWKBAW1QwKwn3SPYYhx0QeRwqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLL9b7HU72AdXqSjmCrcA8F0oJI52LPzcSboxPKHFZZj4ysSBFL6rJv1%2BORQhYgk3wnaokcQ2YPbPXPedaqnmfQYlTyUSJNgWIoRguKLHlRy6IhWrF5L7SRcHBLuuhE51aZ%2FEyBaQZPif23%2FSEVWwQog5gL5aBDIimo%2FHNoWjwqzUCUy5redg2ks4zfgf74Rq%2FlpEmfRf1chbOyztdbkctopNWdy3Jw9E7Ta4kOxXSg6pGrZzuO7FZx3vnfmdU3cmevPNtpzELz61m5yiNzs%2BoZbmtalXAnIE9NNqn9FLmzl8bp1zsD513t7SuM4LywIvCmkwGG2DkFmis5oyHPsGsz3F5RB%2FysgNdQsv6OCje8IAYEN22aIiXQfnBWFlidJgXQUpgeJcTm%2Fc1zW3eztl6oWYTeP3BD6hCJE7OCq%2BV4eJrfNFQ2rhQp20Z7Ra8rqK1J04Ff8l%2B4C5nENDG7ohv3euZE35nuSLAnPdQnS7RSN78jmwLeIqbmQ9xakZwTewIrJVoC5Y7QdD6PhzpWwm%2B8rFoRx7lI8oGT6h0LORch%2F9QR33sr6OobtQFDka2hF1ZJYeG1ZMbms%2Bjlg2yatgQnlEWFA8DYVoINW5aj%2FHqXU3lg6DhNp0RtCjkDgx8dOYbiwq3YW5VKVTyqaMIqe5cQGOqUBtuONoIfokk51%2BRc%2FNKnQNtlBksvyFEqqZ1KIdPvArsR9cdVLfkz0zOn77%2BsCkdClugYpnqHBCoBFK1l5MsFD1zXDpDTTU%2FaGlWBqRk2aIJUq05n0JH3UcJYLDAYR6gvBGXkCnZGC00dREEgRpcMtni2nAIhl8R39A3HMVF%2F1YwczNOjFRiqDzqa0bsktDc0s%2F1%2BOhoBbfOQXPMIjiZvY2FsPSsQs&X-Amz-Signature=c37dfae4084fe037ff1ba4e920fb9d9de12c1a8b40d949e3e91a05347068687b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFRHI3XR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T040041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIsvU27pkxo5YpFIlRcSOaNvXe9YEdZS9tZzcfrYdV1QIgGf5d89MolLjP6SH7dgQzFJXD6HY%2FpiXSsQGFAa1KFycqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPopZ5y0RJKmvndQ%2BSrcA3MMAWkr4jImfWAec8XSOJaNwrb9PsmgsXN%2FK0Tu28JN0diHKw1GxLBbqJpJqoT%2FQ6r2m44y5wzY6JIQ80VcJdLrCOmBgWyGNp7AXZDYQ7GWHaVq4UlGHGBhINMpxBfxbDUxbTFwY5N%2Fs7j0bx7%2BHkyHpx%2FmKfD2ugljE79n0e8ILoiBDPWUR2W4p8i2I1LblPlvAt3N7dwUWliTqvr8bZMavwqjRsTzpnsNjdpQioSIrF6ZCqmijGmRDXAqoHH%2BUnxpqjXHAsWg4HaMa3QAzPbIHmYLa17MXlEpZl6O334FcpO83amBh35If0iO6nU486Ku9ulAkP1PtFHf9TfHlTTbzbdSZUhMmp5vMMc5nRny%2B3%2F2r%2FcBB8Z9QMrLx%2F0Ha5NoERrJnlmGpbgLYj7HjiX%2BJROeS0dEExv7E1T4yQpb5jE0ym9SsOPMZELvyh21BpeUw%2Fld2H6i5QJvVErftrg1sMpWhfHhKjB9a6VPB8%2Bufgcb4CfPSZ%2FKHsRZbwij1H7dYKdUCpqz8pnjDJhH89HwH8xlRmls0BeiPHpllnbBrQsWl4Idv6BO5ea%2B2ojDmS0xOVsvUWCIicL%2F3wkLzcLyQfVNpPz2GmD3ox57fmLtg63Ymc0TetVzm9FzML%2Bd5cQGOqUBJFN3KK6P9vC2QvaUnsICSx3LuyQmYqbm8PuKSYaz%2FcMuoFz%2F6BXimN%2FNZd7wiT1QjCFNwB1Yh1oT4SHHfAq1tK2CzNnE2jfhSgvtDccRJfbwjKvmUqJ9bNF7F3VsddV0pgQlGNKxldoNYCUmbgz8CsvKabG2tDJnjRk67fe%2FgDvSqbhkAIjXfgjBNCy4Lwo%2FSbFr4cDkKVTk1VPINt7mSjCgc8Ui&X-Amz-Signature=20fa89de19d8147dc8950aaff56ef42beb4dff2060df83a9f8d60eda4ea6a77f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KXBHDSF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T040046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF39BFeuPCJ7Fl%2B%2Fn4v0qJqbXmG38VBMvJc9vNuNhIcYAiA2Cck1gOeN%2BJKNE8tI%2F8q1kPeo5JjBGKiVbTy%2F8V8UUSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDpi20mVVB4pe5PDEKtwDh%2B5hBkIZBelxm6TeHUJ8GL9lXYQs0PdvA6TCRT385wlJkMs5FoVTwEG5sMCdkgJVhpCt0zXoTglNGuD2ihTF%2F3EG5jd8fNDR%2FqJ1OJeW8EtZklk6Nzout%2BJ9pFyqUjeQPAu1wPDkN08ShfvdpwEF9amymsW0NRTE4fGkv1SEM6En9KJKQKL5kQXB44WlfvUdJWKK9MZM%2FDlcnTnNJRHoDEQam90S%2F93%2BZQqEIwK1Kd%2FSxKxKlSSuSWG5wgSx6cUiou996AjdXW4ZxOWQCV7U508elDbI7J7WLxVc9dgAzfwDrCHYiWOHgQrsLAgYgs%2FAJ1tGKXwLRXt4xyV8Onz8lZpggD5EZk46OZ%2FfbMu3s%2FxQS0MTU5Y68aSG2yNa7H2ODXjO3aIo4fYQMB9NIBacZmHftoeSbBrzoLgeGn6aAdSgY%2BPmtGaWxaWTrm5gElJgKjttDnW5vMcC9B99juNHcPkX3sYoc3lazWktuZ4Y28GQklYdyAq9tO2eFnBJyCqKEkwVOT2S%2Fhz6wn%2F7xlJetK3r7SvHYN9G%2BKKh1eOyvKb%2Fd7dZAdFwf1L0hTmo8F6Z68d999coD7Dvt5R%2BTE6Cnj2zAAyOOK6Jt98%2BuUWldagtEc0%2Fv3AYIBRaJMQw053lxAY6pgEugGJXL3MB3%2FqZD6VP9TYoYqWxQVEtwtrfiOdgyqAbwmrZxaOMdnf5OJwMpKRm1p9BzevkEtAphICNZQoXnim0kdxATIPfoqD%2BxR5%2BxbtYODNVxljN%2BEhcxuL8F1W%2B4LPGc0PM9m8WJfB4koW3bDuUFAqmYMtNu%2FXPHU8vEABPdXUkkWeDXKKEKQgr8p9%2BCNXUSlooxYaJuAW6iO1Ev7xf%2FhyME8ds&X-Amz-Signature=77bcac7e1747708d54065a24ca69ad77aed5aaba0cca41b647561eba3827e9a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TK7XBGC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T040047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICh4iPg6rA7vKNilKHGohICog8OlmwbaOsjWrwpCUdGwAiBi3P263jlm3y8IScczski252oMJBpc5%2B5weNJpiMmAHSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME7D%2BdyL2P3jVwLERKtwDFVNhQHQPZcqNhzJe4QRAs8ZBtjLtGBoH64ZPKEs6TvILf%2Ffc%2FE1HrvRxIoTUToA1aby%2BrgNmEcAhHzO3pn6VFhxhZFhIJdx1D3psVYSZPVQiHUEgCfl2hpkST%2F398ANkCK7forDkKaExhathcaLPQ9dx5VE9%2B86SHYhr1g9zWba%2FNHiW0yPnWvcKTX7427WPRWt7AXjn1P4SUk1rEHXMUyTIq%2BuAmfSHbh6%2FMR%2BR5c4o5ulL6yhY1EZ36vXf8175J5wpIiajtPkNslv8CviI2pCDzrf6u4amtl1HwHnccxrvlXP6svZIVWRr3frdHiQmrmdYrs27klG3KuiCS%2BcJF2ULBgF4IQB0a01rycYQ4Cmk%2FBFnXCSV8B2HEX%2F0YTY8sZmHY8l2I6KEPqQTBAGA0UDriu0G64qvKgsNYWrbFZoSefj%2Boe05bpBI4UYtxAyVT4qjvNI4aF4N6GzmwC2Ds%2BsUvfQoyXQMCSaLoQDf6%2FQzGJ5Bs%2BEAUEq0AusEM1%2FXnkEeyEpy19AHvp3DKJf0x7B6vFdn8I%2FSPKDV9W1RgsBjtVr8%2FaXb1vNyIM5jPIyVVeniVWqvkolSN9zZwqK6lMI1AOT34Pu8IB%2BEP5%2B3FfwjQdp9y1gDvOp3hosw4J7lxAY6pgE4r11gOgi9O9wQD4xC1Aa1VAlats%2FfL0b08PX13W7LdDZYG7WYBdzs%2F%2BH588AtOjvAewEul0jqKnYScgWbKJk2sVCG2RAVWPgcUMMvxgWuT3XzcIEW8iasKR8ZMxEBitNubVT%2BY17rJlnCRxcw8QSTiI8H1Edhq%2FiwPM%2FJj5wA5SmZn2VUMY7%2F04taSecMDCOrXYB7Dalt68WVM1BDIaDUL%2BpFi%2BMi&X-Amz-Signature=d578471dae42f4c7b3c53c90e18ca4618c5d2556a3a5bb92fb18324de28d3201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3R56FI3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T040050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqvKb3OvtR9%2BqOWPfNTaRXeD8G%2BNNJjppMpREYQ3ctZAiBklhB3iHcGfgdbFfsL%2FI3uJYnGjgOAuzGv4ikQbwb5qCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRgoGOh4V3q88ebfqKtwDlLTAnzVWGxC1IkpA88WdvgoPCD3rfWApQEQ3yypaotKB8AVHTdqkFfFRt7bVGdGaNJ4%2BPqAGKeHcNHW9LNXlH3E9%2FauPFUPt91rxXfb54B1fDTQKlf2fbhAhxaHnYQ3h7LGIRfQ2XSvkNQ3cFpghX5Frjx2OcQAHU7RQxprIwvWBWISnrkB7ryS72fAXGjhBHfOniL4xtjaIJR6emJJkj%2BuPuuloj7RixRcBkr0MikTigijdOxH5Or3%2FO3c5iLG1yt6P5n2kGG%2BAWAZKG5AMRrPZ4%2FyZjEIPlijx5NxFQkD4HpGVQySuU2t5iczr6K9g1qVyYN6eLHv5Rg%2BuRbcuvjqZ3z1d7ZG81Xz3kNWPcGRkq2pjVw107lEOBANpEyjYkANICkBWhpayAiquzS%2FqwJIdq2bFnenXcunltsrGv3E1LPfzIfjEIAtEURdooj9o7j%2B8u8LPVHW%2FQYI0sVeOLssbRWKftlDr1R3kt7ETKuKsAoCRqy9DQImw37BTC2N61NYm89dj7mJrBRbhwbCL70qfbPgDVfCqhgWOzfsTrBnSmnA4AF7WnStr3yk3ZM0KBOHbmWMw9NwDdAOW2bmtNUPAKAQ%2BwjovOvIHHLxNqYLOdWmqBbQJfX8%2FNB0w6Z3lxAY6pgEawVh2gNYUOGLMYwM%2FO6qylpvvXTU0cCS6Bgzu1BvsUD7UnXZcZuHSpbDxnDMGekwu1pQ66XDDY4NJmfI%2FikdCsuoq94Tp%2BDdZ1diCJrYrmRvfLBdm0LiPPlmsurF7ftwyTaAtl7h7uuMOWNGtq%2BBDfAoNCnK%2FW1%2BWuG1AlFqObfTx4swPy4o8XXf1EuO7Wa8v0r5YDhB1ApxrnH9RD0zK88DrQexD&X-Amz-Signature=237880280e8a4ba99c4600c0e04bcf9b38a6889fffdf1370ed495cad6abb1d96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6M423Z%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdASmAP3H%2FH5kg80xOsQwCrB35K0WA5aQSRSIyHulFCAIgA4jld1R6bd9bqqzY%2FiExEB4DyaSeO3JuWliuPKOHiZoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNSOSZQtR65IcFFgyrcA8OdUPV0BTZ6qnVwRupXURf8oocuGOrxCyU6lNoMON0HeieGHh54cNnVSKUyVoZAQhrLs%2BlV1hUJ%2BWaPVdFQxUL5M5wbWq25DSTYCIxRh7wUtFEEa%2F%2FS63WR8L6LlC6DjQtjKMwyIu67JIZ7mUxzzfiWx%2Fmj4wtg1WUO5Mob85SFj%2Bp5v4PasKNiZbJqD5gD90be4hKk2Pl0eAzbinpeahsxOC14wrqIMHmfjROCS5k0%2FQTDpLoTNd8pnJjpb0x4yNMa2%2F%2Bfg9qGryi8b9FJGs3BKIHpppMQI1QHDV3koP%2FRZLzd999tprIVixhKwqUaMS2SFHtjJegj4W7V51%2FAx4VWc7ujIQm%2BHmtKiMO%2FSfFF5Yio5TZ%2FTJqkjXsSNkfb2iTr26Qmy1YubF%2BCza5ObNGXbZCC0MkZcdLHk3yT5gjz%2BwFGFb6A1CjLKvFwsf1RrS0msyCQ1C5U0m9oMOZ1TzqzwGXujZuEzkBjJ%2BqxKIJ25zU13iEqYISzCcjk2WzoBZx%2BqK7MwO8aX5htzvRUUH88%2BK92EzilBhJ7AKErF7sqTMsfgaiEKdTxNsBALXx27dLdydTvj0YmJ8i7dXO9%2F4yYWvzjpIDL%2BnChMU%2Bef%2FeQVp%2BuDXWhqir4Q11BMIOe5cQGOqUBOYvpjxwc6NOBRyg6T62CihlCUrxKE2dOJq3phRcuzefiXluXm7Wa0GvIO3HfFbRRjY2%2FgizLyY4cFDkR9d0CYkZZbt7fn2NmqGKdShLHLOwHxPpZ7iSzs0KwF4lfY2RsuRw22fHl8it7vapv1Aqmx6fXthZKIqRPE%2B5rMaYZWMZqClAxsJI9THMvbd%2BBrH5OL3fS0gwhN4tNcQtc4LzI0IL7Musr&X-Amz-Signature=42b4064eb2afcd608573bb9890b0376a83a334d0d26f1c9dc78494d0dc4e05bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV6M423Z%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdASmAP3H%2FH5kg80xOsQwCrB35K0WA5aQSRSIyHulFCAIgA4jld1R6bd9bqqzY%2FiExEB4DyaSeO3JuWliuPKOHiZoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNSOSZQtR65IcFFgyrcA8OdUPV0BTZ6qnVwRupXURf8oocuGOrxCyU6lNoMON0HeieGHh54cNnVSKUyVoZAQhrLs%2BlV1hUJ%2BWaPVdFQxUL5M5wbWq25DSTYCIxRh7wUtFEEa%2F%2FS63WR8L6LlC6DjQtjKMwyIu67JIZ7mUxzzfiWx%2Fmj4wtg1WUO5Mob85SFj%2Bp5v4PasKNiZbJqD5gD90be4hKk2Pl0eAzbinpeahsxOC14wrqIMHmfjROCS5k0%2FQTDpLoTNd8pnJjpb0x4yNMa2%2F%2Bfg9qGryi8b9FJGs3BKIHpppMQI1QHDV3koP%2FRZLzd999tprIVixhKwqUaMS2SFHtjJegj4W7V51%2FAx4VWc7ujIQm%2BHmtKiMO%2FSfFF5Yio5TZ%2FTJqkjXsSNkfb2iTr26Qmy1YubF%2BCza5ObNGXbZCC0MkZcdLHk3yT5gjz%2BwFGFb6A1CjLKvFwsf1RrS0msyCQ1C5U0m9oMOZ1TzqzwGXujZuEzkBjJ%2BqxKIJ25zU13iEqYISzCcjk2WzoBZx%2BqK7MwO8aX5htzvRUUH88%2BK92EzilBhJ7AKErF7sqTMsfgaiEKdTxNsBALXx27dLdydTvj0YmJ8i7dXO9%2F4yYWvzjpIDL%2BnChMU%2Bef%2FeQVp%2BuDXWhqir4Q11BMIOe5cQGOqUBOYvpjxwc6NOBRyg6T62CihlCUrxKE2dOJq3phRcuzefiXluXm7Wa0GvIO3HfFbRRjY2%2FgizLyY4cFDkR9d0CYkZZbt7fn2NmqGKdShLHLOwHxPpZ7iSzs0KwF4lfY2RsuRw22fHl8it7vapv1Aqmx6fXthZKIqRPE%2B5rMaYZWMZqClAxsJI9THMvbd%2BBrH5OL3fS0gwhN4tNcQtc4LzI0IL7Musr&X-Amz-Signature=7f4488294db472a3880d8d0eb5b08dd2b6fe0b4e684c33e89d280280b1a0a9f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDLRVSI4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQuIb7IRI9QHENdS6h69MaTlsTyd9aFj2vvj6kGfkogwIhAJqD1IdWFHJVOKLpcwLUBc2WlTW5QB3cVCnG8k3cyL7rKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRabuhZr%2B3L79BFM0q3ANU8P7kJ4SUTjT6c0HchCz93HrJo1bP0rEsb8o6DOzhNhnyRdZJitFU1jIfRDNZlvG3H9qtFIzQmKbi1fuxvneeiBIjKbExeK4fTioALFb3ABNZf3C2j%2BUbZS0%2FvHDu0GegxFi5QLUZLyFNawIUAxnxLPKiJVVF7%2FGEI9UkunKQdwaawZJN%2BhG48HaT%2FC7lCspBEBQOV5jMjH7kSJg9WqJnNMRj%2B%2BtXC4pFlyKkpgWlY3oWgcOKYX2epN61NzLMK%2FcYVUALpq%2BE4tjQQHPe%2Ba%2F%2FCQkVCoaRHD%2FaElLkLmsHdX75%2Fa2or6baifgE45I%2FsDRjlB0FWT7o9hluYQvQrtO6a21AONAtk4Fs9mfWwI1VL6nZRRy4%2F0K%2BqGYd8Oxmmzk%2FJTaeVgyBTD7lKKTv%2Bm6Zy0wDt4W3pxVUY96jRbXBM0bGK9LHQAx0XA3nENH%2FKjpxyYA6sv2dyGwIlkNAPP5B%2Frq9FxDQnKkYYYyeAoC3Iuew00gshRxoWnu3%2Fs8CGcCBpmc10wtUx05ax0SAOfN8%2F1P02%2Bt%2BDKMtJ6BleK8GyRe%2BGiY2bSbP53xGbALIGMR67QkdnVuzRJ4eZtKh9ixhQ%2FKuYI2A%2BwK9wkmrAOnHp3woDkclL7exig49YTCHneXEBjqkAYbULo0ApkHe2Ztadmx8KOpHmOcMwjF29G%2Fbfrrk9wHOAQPuCHsj4D07RmGT48J%2BkFet7uYXm4pwuQhKJPpznDVCv3VgICaC81clODv2jQWOVWpDjVO1FWHA6rneUHwg59SkTVSHXatBtBonbmAVFjPMo%2BdMc%2Fo7tsuqbb9qenUkYhZDR9f%2FivxKDnEDVcsq%2B%2FMC1sRmakaPuhSN5ZfmvcIuSFSi&X-Amz-Signature=314f3eb66b904d312bf388eb8644535ec6e8735aa1f34e57ece1b3513f60a703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDLRVSI4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQuIb7IRI9QHENdS6h69MaTlsTyd9aFj2vvj6kGfkogwIhAJqD1IdWFHJVOKLpcwLUBc2WlTW5QB3cVCnG8k3cyL7rKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRabuhZr%2B3L79BFM0q3ANU8P7kJ4SUTjT6c0HchCz93HrJo1bP0rEsb8o6DOzhNhnyRdZJitFU1jIfRDNZlvG3H9qtFIzQmKbi1fuxvneeiBIjKbExeK4fTioALFb3ABNZf3C2j%2BUbZS0%2FvHDu0GegxFi5QLUZLyFNawIUAxnxLPKiJVVF7%2FGEI9UkunKQdwaawZJN%2BhG48HaT%2FC7lCspBEBQOV5jMjH7kSJg9WqJnNMRj%2B%2BtXC4pFlyKkpgWlY3oWgcOKYX2epN61NzLMK%2FcYVUALpq%2BE4tjQQHPe%2Ba%2F%2FCQkVCoaRHD%2FaElLkLmsHdX75%2Fa2or6baifgE45I%2FsDRjlB0FWT7o9hluYQvQrtO6a21AONAtk4Fs9mfWwI1VL6nZRRy4%2F0K%2BqGYd8Oxmmzk%2FJTaeVgyBTD7lKKTv%2Bm6Zy0wDt4W3pxVUY96jRbXBM0bGK9LHQAx0XA3nENH%2FKjpxyYA6sv2dyGwIlkNAPP5B%2Frq9FxDQnKkYYYyeAoC3Iuew00gshRxoWnu3%2Fs8CGcCBpmc10wtUx05ax0SAOfN8%2F1P02%2Bt%2BDKMtJ6BleK8GyRe%2BGiY2bSbP53xGbALIGMR67QkdnVuzRJ4eZtKh9ixhQ%2FKuYI2A%2BwK9wkmrAOnHp3woDkclL7exig49YTCHneXEBjqkAYbULo0ApkHe2Ztadmx8KOpHmOcMwjF29G%2Fbfrrk9wHOAQPuCHsj4D07RmGT48J%2BkFet7uYXm4pwuQhKJPpznDVCv3VgICaC81clODv2jQWOVWpDjVO1FWHA6rneUHwg59SkTVSHXatBtBonbmAVFjPMo%2BdMc%2Fo7tsuqbb9qenUkYhZDR9f%2FivxKDnEDVcsq%2B%2FMC1sRmakaPuhSN5ZfmvcIuSFSi&X-Amz-Signature=19fd8aa3cce83c1932ac884d2dc4dd08cf0f7d2e812f721cff46c8bebe7f5217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDLRVSI4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQuIb7IRI9QHENdS6h69MaTlsTyd9aFj2vvj6kGfkogwIhAJqD1IdWFHJVOKLpcwLUBc2WlTW5QB3cVCnG8k3cyL7rKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRabuhZr%2B3L79BFM0q3ANU8P7kJ4SUTjT6c0HchCz93HrJo1bP0rEsb8o6DOzhNhnyRdZJitFU1jIfRDNZlvG3H9qtFIzQmKbi1fuxvneeiBIjKbExeK4fTioALFb3ABNZf3C2j%2BUbZS0%2FvHDu0GegxFi5QLUZLyFNawIUAxnxLPKiJVVF7%2FGEI9UkunKQdwaawZJN%2BhG48HaT%2FC7lCspBEBQOV5jMjH7kSJg9WqJnNMRj%2B%2BtXC4pFlyKkpgWlY3oWgcOKYX2epN61NzLMK%2FcYVUALpq%2BE4tjQQHPe%2Ba%2F%2FCQkVCoaRHD%2FaElLkLmsHdX75%2Fa2or6baifgE45I%2FsDRjlB0FWT7o9hluYQvQrtO6a21AONAtk4Fs9mfWwI1VL6nZRRy4%2F0K%2BqGYd8Oxmmzk%2FJTaeVgyBTD7lKKTv%2Bm6Zy0wDt4W3pxVUY96jRbXBM0bGK9LHQAx0XA3nENH%2FKjpxyYA6sv2dyGwIlkNAPP5B%2Frq9FxDQnKkYYYyeAoC3Iuew00gshRxoWnu3%2Fs8CGcCBpmc10wtUx05ax0SAOfN8%2F1P02%2Bt%2BDKMtJ6BleK8GyRe%2BGiY2bSbP53xGbALIGMR67QkdnVuzRJ4eZtKh9ixhQ%2FKuYI2A%2BwK9wkmrAOnHp3woDkclL7exig49YTCHneXEBjqkAYbULo0ApkHe2Ztadmx8KOpHmOcMwjF29G%2Fbfrrk9wHOAQPuCHsj4D07RmGT48J%2BkFet7uYXm4pwuQhKJPpznDVCv3VgICaC81clODv2jQWOVWpDjVO1FWHA6rneUHwg59SkTVSHXatBtBonbmAVFjPMo%2BdMc%2Fo7tsuqbb9qenUkYhZDR9f%2FivxKDnEDVcsq%2B%2FMC1sRmakaPuhSN5ZfmvcIuSFSi&X-Amz-Signature=923f899efe8646f4dbbe00d9d953d5dfd53852fb142b110cb42fed8dc7013128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDLRVSI4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQuIb7IRI9QHENdS6h69MaTlsTyd9aFj2vvj6kGfkogwIhAJqD1IdWFHJVOKLpcwLUBc2WlTW5QB3cVCnG8k3cyL7rKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRabuhZr%2B3L79BFM0q3ANU8P7kJ4SUTjT6c0HchCz93HrJo1bP0rEsb8o6DOzhNhnyRdZJitFU1jIfRDNZlvG3H9qtFIzQmKbi1fuxvneeiBIjKbExeK4fTioALFb3ABNZf3C2j%2BUbZS0%2FvHDu0GegxFi5QLUZLyFNawIUAxnxLPKiJVVF7%2FGEI9UkunKQdwaawZJN%2BhG48HaT%2FC7lCspBEBQOV5jMjH7kSJg9WqJnNMRj%2B%2BtXC4pFlyKkpgWlY3oWgcOKYX2epN61NzLMK%2FcYVUALpq%2BE4tjQQHPe%2Ba%2F%2FCQkVCoaRHD%2FaElLkLmsHdX75%2Fa2or6baifgE45I%2FsDRjlB0FWT7o9hluYQvQrtO6a21AONAtk4Fs9mfWwI1VL6nZRRy4%2F0K%2BqGYd8Oxmmzk%2FJTaeVgyBTD7lKKTv%2Bm6Zy0wDt4W3pxVUY96jRbXBM0bGK9LHQAx0XA3nENH%2FKjpxyYA6sv2dyGwIlkNAPP5B%2Frq9FxDQnKkYYYyeAoC3Iuew00gshRxoWnu3%2Fs8CGcCBpmc10wtUx05ax0SAOfN8%2F1P02%2Bt%2BDKMtJ6BleK8GyRe%2BGiY2bSbP53xGbALIGMR67QkdnVuzRJ4eZtKh9ixhQ%2FKuYI2A%2BwK9wkmrAOnHp3woDkclL7exig49YTCHneXEBjqkAYbULo0ApkHe2Ztadmx8KOpHmOcMwjF29G%2Fbfrrk9wHOAQPuCHsj4D07RmGT48J%2BkFet7uYXm4pwuQhKJPpznDVCv3VgICaC81clODv2jQWOVWpDjVO1FWHA6rneUHwg59SkTVSHXatBtBonbmAVFjPMo%2BdMc%2Fo7tsuqbb9qenUkYhZDR9f%2FivxKDnEDVcsq%2B%2FMC1sRmakaPuhSN5ZfmvcIuSFSi&X-Amz-Signature=e0f610501d9aceb7d836e37e7ca31411569a7b4b2b2d2a68e8cea2d78b509e89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDLRVSI4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQuIb7IRI9QHENdS6h69MaTlsTyd9aFj2vvj6kGfkogwIhAJqD1IdWFHJVOKLpcwLUBc2WlTW5QB3cVCnG8k3cyL7rKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRabuhZr%2B3L79BFM0q3ANU8P7kJ4SUTjT6c0HchCz93HrJo1bP0rEsb8o6DOzhNhnyRdZJitFU1jIfRDNZlvG3H9qtFIzQmKbi1fuxvneeiBIjKbExeK4fTioALFb3ABNZf3C2j%2BUbZS0%2FvHDu0GegxFi5QLUZLyFNawIUAxnxLPKiJVVF7%2FGEI9UkunKQdwaawZJN%2BhG48HaT%2FC7lCspBEBQOV5jMjH7kSJg9WqJnNMRj%2B%2BtXC4pFlyKkpgWlY3oWgcOKYX2epN61NzLMK%2FcYVUALpq%2BE4tjQQHPe%2Ba%2F%2FCQkVCoaRHD%2FaElLkLmsHdX75%2Fa2or6baifgE45I%2FsDRjlB0FWT7o9hluYQvQrtO6a21AONAtk4Fs9mfWwI1VL6nZRRy4%2F0K%2BqGYd8Oxmmzk%2FJTaeVgyBTD7lKKTv%2Bm6Zy0wDt4W3pxVUY96jRbXBM0bGK9LHQAx0XA3nENH%2FKjpxyYA6sv2dyGwIlkNAPP5B%2Frq9FxDQnKkYYYyeAoC3Iuew00gshRxoWnu3%2Fs8CGcCBpmc10wtUx05ax0SAOfN8%2F1P02%2Bt%2BDKMtJ6BleK8GyRe%2BGiY2bSbP53xGbALIGMR67QkdnVuzRJ4eZtKh9ixhQ%2FKuYI2A%2BwK9wkmrAOnHp3woDkclL7exig49YTCHneXEBjqkAYbULo0ApkHe2Ztadmx8KOpHmOcMwjF29G%2Fbfrrk9wHOAQPuCHsj4D07RmGT48J%2BkFet7uYXm4pwuQhKJPpznDVCv3VgICaC81clODv2jQWOVWpDjVO1FWHA6rneUHwg59SkTVSHXatBtBonbmAVFjPMo%2BdMc%2Fo7tsuqbb9qenUkYhZDR9f%2FivxKDnEDVcsq%2B%2FMC1sRmakaPuhSN5ZfmvcIuSFSi&X-Amz-Signature=0b2dbe96c64bf97d8fe07a62c92d0eff9d2f8967379957f81fbadef941e0b024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDLRVSI4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQuIb7IRI9QHENdS6h69MaTlsTyd9aFj2vvj6kGfkogwIhAJqD1IdWFHJVOKLpcwLUBc2WlTW5QB3cVCnG8k3cyL7rKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRabuhZr%2B3L79BFM0q3ANU8P7kJ4SUTjT6c0HchCz93HrJo1bP0rEsb8o6DOzhNhnyRdZJitFU1jIfRDNZlvG3H9qtFIzQmKbi1fuxvneeiBIjKbExeK4fTioALFb3ABNZf3C2j%2BUbZS0%2FvHDu0GegxFi5QLUZLyFNawIUAxnxLPKiJVVF7%2FGEI9UkunKQdwaawZJN%2BhG48HaT%2FC7lCspBEBQOV5jMjH7kSJg9WqJnNMRj%2B%2BtXC4pFlyKkpgWlY3oWgcOKYX2epN61NzLMK%2FcYVUALpq%2BE4tjQQHPe%2Ba%2F%2FCQkVCoaRHD%2FaElLkLmsHdX75%2Fa2or6baifgE45I%2FsDRjlB0FWT7o9hluYQvQrtO6a21AONAtk4Fs9mfWwI1VL6nZRRy4%2F0K%2BqGYd8Oxmmzk%2FJTaeVgyBTD7lKKTv%2Bm6Zy0wDt4W3pxVUY96jRbXBM0bGK9LHQAx0XA3nENH%2FKjpxyYA6sv2dyGwIlkNAPP5B%2Frq9FxDQnKkYYYyeAoC3Iuew00gshRxoWnu3%2Fs8CGcCBpmc10wtUx05ax0SAOfN8%2F1P02%2Bt%2BDKMtJ6BleK8GyRe%2BGiY2bSbP53xGbALIGMR67QkdnVuzRJ4eZtKh9ixhQ%2FKuYI2A%2BwK9wkmrAOnHp3woDkclL7exig49YTCHneXEBjqkAYbULo0ApkHe2Ztadmx8KOpHmOcMwjF29G%2Fbfrrk9wHOAQPuCHsj4D07RmGT48J%2BkFet7uYXm4pwuQhKJPpznDVCv3VgICaC81clODv2jQWOVWpDjVO1FWHA6rneUHwg59SkTVSHXatBtBonbmAVFjPMo%2BdMc%2Fo7tsuqbb9qenUkYhZDR9f%2FivxKDnEDVcsq%2B%2FMC1sRmakaPuhSN5ZfmvcIuSFSi&X-Amz-Signature=4ef23a3b7323d2eb1c96fef92702048bd97b91093eccdee452b6449b9719bed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDLRVSI4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQuIb7IRI9QHENdS6h69MaTlsTyd9aFj2vvj6kGfkogwIhAJqD1IdWFHJVOKLpcwLUBc2WlTW5QB3cVCnG8k3cyL7rKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRabuhZr%2B3L79BFM0q3ANU8P7kJ4SUTjT6c0HchCz93HrJo1bP0rEsb8o6DOzhNhnyRdZJitFU1jIfRDNZlvG3H9qtFIzQmKbi1fuxvneeiBIjKbExeK4fTioALFb3ABNZf3C2j%2BUbZS0%2FvHDu0GegxFi5QLUZLyFNawIUAxnxLPKiJVVF7%2FGEI9UkunKQdwaawZJN%2BhG48HaT%2FC7lCspBEBQOV5jMjH7kSJg9WqJnNMRj%2B%2BtXC4pFlyKkpgWlY3oWgcOKYX2epN61NzLMK%2FcYVUALpq%2BE4tjQQHPe%2Ba%2F%2FCQkVCoaRHD%2FaElLkLmsHdX75%2Fa2or6baifgE45I%2FsDRjlB0FWT7o9hluYQvQrtO6a21AONAtk4Fs9mfWwI1VL6nZRRy4%2F0K%2BqGYd8Oxmmzk%2FJTaeVgyBTD7lKKTv%2Bm6Zy0wDt4W3pxVUY96jRbXBM0bGK9LHQAx0XA3nENH%2FKjpxyYA6sv2dyGwIlkNAPP5B%2Frq9FxDQnKkYYYyeAoC3Iuew00gshRxoWnu3%2Fs8CGcCBpmc10wtUx05ax0SAOfN8%2F1P02%2Bt%2BDKMtJ6BleK8GyRe%2BGiY2bSbP53xGbALIGMR67QkdnVuzRJ4eZtKh9ixhQ%2FKuYI2A%2BwK9wkmrAOnHp3woDkclL7exig49YTCHneXEBjqkAYbULo0ApkHe2Ztadmx8KOpHmOcMwjF29G%2Fbfrrk9wHOAQPuCHsj4D07RmGT48J%2BkFet7uYXm4pwuQhKJPpznDVCv3VgICaC81clODv2jQWOVWpDjVO1FWHA6rneUHwg59SkTVSHXatBtBonbmAVFjPMo%2BdMc%2Fo7tsuqbb9qenUkYhZDR9f%2FivxKDnEDVcsq%2B%2FMC1sRmakaPuhSN5ZfmvcIuSFSi&X-Amz-Signature=923f899efe8646f4dbbe00d9d953d5dfd53852fb142b110cb42fed8dc7013128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDLRVSI4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQuIb7IRI9QHENdS6h69MaTlsTyd9aFj2vvj6kGfkogwIhAJqD1IdWFHJVOKLpcwLUBc2WlTW5QB3cVCnG8k3cyL7rKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRabuhZr%2B3L79BFM0q3ANU8P7kJ4SUTjT6c0HchCz93HrJo1bP0rEsb8o6DOzhNhnyRdZJitFU1jIfRDNZlvG3H9qtFIzQmKbi1fuxvneeiBIjKbExeK4fTioALFb3ABNZf3C2j%2BUbZS0%2FvHDu0GegxFi5QLUZLyFNawIUAxnxLPKiJVVF7%2FGEI9UkunKQdwaawZJN%2BhG48HaT%2FC7lCspBEBQOV5jMjH7kSJg9WqJnNMRj%2B%2BtXC4pFlyKkpgWlY3oWgcOKYX2epN61NzLMK%2FcYVUALpq%2BE4tjQQHPe%2Ba%2F%2FCQkVCoaRHD%2FaElLkLmsHdX75%2Fa2or6baifgE45I%2FsDRjlB0FWT7o9hluYQvQrtO6a21AONAtk4Fs9mfWwI1VL6nZRRy4%2F0K%2BqGYd8Oxmmzk%2FJTaeVgyBTD7lKKTv%2Bm6Zy0wDt4W3pxVUY96jRbXBM0bGK9LHQAx0XA3nENH%2FKjpxyYA6sv2dyGwIlkNAPP5B%2Frq9FxDQnKkYYYyeAoC3Iuew00gshRxoWnu3%2Fs8CGcCBpmc10wtUx05ax0SAOfN8%2F1P02%2Bt%2BDKMtJ6BleK8GyRe%2BGiY2bSbP53xGbALIGMR67QkdnVuzRJ4eZtKh9ixhQ%2FKuYI2A%2BwK9wkmrAOnHp3woDkclL7exig49YTCHneXEBjqkAYbULo0ApkHe2Ztadmx8KOpHmOcMwjF29G%2Fbfrrk9wHOAQPuCHsj4D07RmGT48J%2BkFet7uYXm4pwuQhKJPpznDVCv3VgICaC81clODv2jQWOVWpDjVO1FWHA6rneUHwg59SkTVSHXatBtBonbmAVFjPMo%2BdMc%2Fo7tsuqbb9qenUkYhZDR9f%2FivxKDnEDVcsq%2B%2FMC1sRmakaPuhSN5ZfmvcIuSFSi&X-Amz-Signature=b53e2b368bda2d3cbb9f7ba756595fbca4258bcc1f0ccf9e2f69ef9a66138138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDLRVSI4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQuIb7IRI9QHENdS6h69MaTlsTyd9aFj2vvj6kGfkogwIhAJqD1IdWFHJVOKLpcwLUBc2WlTW5QB3cVCnG8k3cyL7rKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRabuhZr%2B3L79BFM0q3ANU8P7kJ4SUTjT6c0HchCz93HrJo1bP0rEsb8o6DOzhNhnyRdZJitFU1jIfRDNZlvG3H9qtFIzQmKbi1fuxvneeiBIjKbExeK4fTioALFb3ABNZf3C2j%2BUbZS0%2FvHDu0GegxFi5QLUZLyFNawIUAxnxLPKiJVVF7%2FGEI9UkunKQdwaawZJN%2BhG48HaT%2FC7lCspBEBQOV5jMjH7kSJg9WqJnNMRj%2B%2BtXC4pFlyKkpgWlY3oWgcOKYX2epN61NzLMK%2FcYVUALpq%2BE4tjQQHPe%2Ba%2F%2FCQkVCoaRHD%2FaElLkLmsHdX75%2Fa2or6baifgE45I%2FsDRjlB0FWT7o9hluYQvQrtO6a21AONAtk4Fs9mfWwI1VL6nZRRy4%2F0K%2BqGYd8Oxmmzk%2FJTaeVgyBTD7lKKTv%2Bm6Zy0wDt4W3pxVUY96jRbXBM0bGK9LHQAx0XA3nENH%2FKjpxyYA6sv2dyGwIlkNAPP5B%2Frq9FxDQnKkYYYyeAoC3Iuew00gshRxoWnu3%2Fs8CGcCBpmc10wtUx05ax0SAOfN8%2F1P02%2Bt%2BDKMtJ6BleK8GyRe%2BGiY2bSbP53xGbALIGMR67QkdnVuzRJ4eZtKh9ixhQ%2FKuYI2A%2BwK9wkmrAOnHp3woDkclL7exig49YTCHneXEBjqkAYbULo0ApkHe2Ztadmx8KOpHmOcMwjF29G%2Fbfrrk9wHOAQPuCHsj4D07RmGT48J%2BkFet7uYXm4pwuQhKJPpznDVCv3VgICaC81clODv2jQWOVWpDjVO1FWHA6rneUHwg59SkTVSHXatBtBonbmAVFjPMo%2BdMc%2Fo7tsuqbb9qenUkYhZDR9f%2FivxKDnEDVcsq%2B%2FMC1sRmakaPuhSN5ZfmvcIuSFSi&X-Amz-Signature=aaf8c275779a30fcc5f5c6359328c9b5c7ae94e173f2561745e545753cdcce2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDLRVSI4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T035939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQuIb7IRI9QHENdS6h69MaTlsTyd9aFj2vvj6kGfkogwIhAJqD1IdWFHJVOKLpcwLUBc2WlTW5QB3cVCnG8k3cyL7rKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRabuhZr%2B3L79BFM0q3ANU8P7kJ4SUTjT6c0HchCz93HrJo1bP0rEsb8o6DOzhNhnyRdZJitFU1jIfRDNZlvG3H9qtFIzQmKbi1fuxvneeiBIjKbExeK4fTioALFb3ABNZf3C2j%2BUbZS0%2FvHDu0GegxFi5QLUZLyFNawIUAxnxLPKiJVVF7%2FGEI9UkunKQdwaawZJN%2BhG48HaT%2FC7lCspBEBQOV5jMjH7kSJg9WqJnNMRj%2B%2BtXC4pFlyKkpgWlY3oWgcOKYX2epN61NzLMK%2FcYVUALpq%2BE4tjQQHPe%2Ba%2F%2FCQkVCoaRHD%2FaElLkLmsHdX75%2Fa2or6baifgE45I%2FsDRjlB0FWT7o9hluYQvQrtO6a21AONAtk4Fs9mfWwI1VL6nZRRy4%2F0K%2BqGYd8Oxmmzk%2FJTaeVgyBTD7lKKTv%2Bm6Zy0wDt4W3pxVUY96jRbXBM0bGK9LHQAx0XA3nENH%2FKjpxyYA6sv2dyGwIlkNAPP5B%2Frq9FxDQnKkYYYyeAoC3Iuew00gshRxoWnu3%2Fs8CGcCBpmc10wtUx05ax0SAOfN8%2F1P02%2Bt%2BDKMtJ6BleK8GyRe%2BGiY2bSbP53xGbALIGMR67QkdnVuzRJ4eZtKh9ixhQ%2FKuYI2A%2BwK9wkmrAOnHp3woDkclL7exig49YTCHneXEBjqkAYbULo0ApkHe2Ztadmx8KOpHmOcMwjF29G%2Fbfrrk9wHOAQPuCHsj4D07RmGT48J%2BkFet7uYXm4pwuQhKJPpznDVCv3VgICaC81clODv2jQWOVWpDjVO1FWHA6rneUHwg59SkTVSHXatBtBonbmAVFjPMo%2BdMc%2Fo7tsuqbb9qenUkYhZDR9f%2FivxKDnEDVcsq%2B%2FMC1sRmakaPuhSN5ZfmvcIuSFSi&X-Amz-Signature=7e73936da61da1793f91c4f60c90aaa6921520d8e30f53faa132e19627d3fa89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
