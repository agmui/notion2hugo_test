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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV4PJO4H%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbfToJWWyV%2BWbDRoqqP7Nn3wvarLUJagrQFh0wEK%2F%2FdgIhAIBnVER%2FH%2BPW9kzN%2BPYPGd1S6aD2L%2Fq6HsjGnPzNqrTLKv8DCCQQABoMNjM3NDIzMTgzODA1IgxXBDCQ27fGIGWv45Uq3AONHBFLNQDlSW%2FKqhteX6Bf7smJovZ80pTx5i4EGAazfiupr6IisjAPY9dXbCygYLJVJXXvPdMJv4%2FM%2BSyz3ZhHunM%2BqvFugl3rZ%2FKOecCHjzBXJp3hykptbd4UZ79C%2BH%2Bfxriss3%2Bxq0kbG7SMnV4bAOZY6776l%2BA%2FmEZcVXQNv2BNiy8%2FGRrgwbuQq801q6uP7dc7T9R%2F3fqm0s0kVxSJKQw3afF18xk4dOmcZMkO9PrDyvZ5qtxL4jQRWFTmc5VQut3YlgEZZaCjuBwfjMY71l4umfTto7OikIiRyth26dM9FeJuZYaeph%2FMmY6GmvEt%2FrShhgUHNQdwuQl19dn6Zli43vvCMLLTFRZKtrbG4pFKLxGlaC7cTHBE1Z%2BCPI7YsU5kE5KQCjGuEOO4fbX04QOE5BjR7s%2BCzpR0o0KnRmZdUkxkTeLKTh88EidGkypqCuIYUDo6eJII2aEaYqTiM1UxzOuSdA4gZx7s41WidVwdy6LT3Tne4vpQFvaeCq%2BXWQQAQcVFiTJ8fxxIKO9gVxERx%2BJoICkspE4nZzk1B3wa9SeAJujdXEfnLiJboe9%2BR7qQMnv%2FKktV0HBzDAlBvSSBMWx4DwFdU3VNYj8URKOwTJCWClKM%2FpnGujCfm7vEBjqkAUCfuE4yKdRn4lPbgOwAQMSmV4gw%2BQXdrckckzuVynJvgKKoVXm2B5wwoNFLr%2FAa5HOF4TajNNGfRVYVmtpiUzRh3LsIKLaHMPREmZ36SFxvcwezX1GEWZYUs%2Fpr32Wl%2FzAs2gKLo9e5VZ38kT7EB4X2QyR5auMX7kzBjFLxgUQhglpaWn%2FjwGvWctKs1uXRTuEezgvzhRG%2BPbMH9Ev3mCtHvPKo&X-Amz-Signature=2fb827e82e221899068aeee5b0dc6ac36f329c47a9b5fc4ee0f172061f8ac9de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV4PJO4H%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbfToJWWyV%2BWbDRoqqP7Nn3wvarLUJagrQFh0wEK%2F%2FdgIhAIBnVER%2FH%2BPW9kzN%2BPYPGd1S6aD2L%2Fq6HsjGnPzNqrTLKv8DCCQQABoMNjM3NDIzMTgzODA1IgxXBDCQ27fGIGWv45Uq3AONHBFLNQDlSW%2FKqhteX6Bf7smJovZ80pTx5i4EGAazfiupr6IisjAPY9dXbCygYLJVJXXvPdMJv4%2FM%2BSyz3ZhHunM%2BqvFugl3rZ%2FKOecCHjzBXJp3hykptbd4UZ79C%2BH%2Bfxriss3%2Bxq0kbG7SMnV4bAOZY6776l%2BA%2FmEZcVXQNv2BNiy8%2FGRrgwbuQq801q6uP7dc7T9R%2F3fqm0s0kVxSJKQw3afF18xk4dOmcZMkO9PrDyvZ5qtxL4jQRWFTmc5VQut3YlgEZZaCjuBwfjMY71l4umfTto7OikIiRyth26dM9FeJuZYaeph%2FMmY6GmvEt%2FrShhgUHNQdwuQl19dn6Zli43vvCMLLTFRZKtrbG4pFKLxGlaC7cTHBE1Z%2BCPI7YsU5kE5KQCjGuEOO4fbX04QOE5BjR7s%2BCzpR0o0KnRmZdUkxkTeLKTh88EidGkypqCuIYUDo6eJII2aEaYqTiM1UxzOuSdA4gZx7s41WidVwdy6LT3Tne4vpQFvaeCq%2BXWQQAQcVFiTJ8fxxIKO9gVxERx%2BJoICkspE4nZzk1B3wa9SeAJujdXEfnLiJboe9%2BR7qQMnv%2FKktV0HBzDAlBvSSBMWx4DwFdU3VNYj8URKOwTJCWClKM%2FpnGujCfm7vEBjqkAUCfuE4yKdRn4lPbgOwAQMSmV4gw%2BQXdrckckzuVynJvgKKoVXm2B5wwoNFLr%2FAa5HOF4TajNNGfRVYVmtpiUzRh3LsIKLaHMPREmZ36SFxvcwezX1GEWZYUs%2Fpr32Wl%2FzAs2gKLo9e5VZ38kT7EB4X2QyR5auMX7kzBjFLxgUQhglpaWn%2FjwGvWctKs1uXRTuEezgvzhRG%2BPbMH9Ev3mCtHvPKo&X-Amz-Signature=35c63f92db5755ab41fc5671bf4e9a258250b9dd3ee6e00c261187e44123628e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV4PJO4H%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbfToJWWyV%2BWbDRoqqP7Nn3wvarLUJagrQFh0wEK%2F%2FdgIhAIBnVER%2FH%2BPW9kzN%2BPYPGd1S6aD2L%2Fq6HsjGnPzNqrTLKv8DCCQQABoMNjM3NDIzMTgzODA1IgxXBDCQ27fGIGWv45Uq3AONHBFLNQDlSW%2FKqhteX6Bf7smJovZ80pTx5i4EGAazfiupr6IisjAPY9dXbCygYLJVJXXvPdMJv4%2FM%2BSyz3ZhHunM%2BqvFugl3rZ%2FKOecCHjzBXJp3hykptbd4UZ79C%2BH%2Bfxriss3%2Bxq0kbG7SMnV4bAOZY6776l%2BA%2FmEZcVXQNv2BNiy8%2FGRrgwbuQq801q6uP7dc7T9R%2F3fqm0s0kVxSJKQw3afF18xk4dOmcZMkO9PrDyvZ5qtxL4jQRWFTmc5VQut3YlgEZZaCjuBwfjMY71l4umfTto7OikIiRyth26dM9FeJuZYaeph%2FMmY6GmvEt%2FrShhgUHNQdwuQl19dn6Zli43vvCMLLTFRZKtrbG4pFKLxGlaC7cTHBE1Z%2BCPI7YsU5kE5KQCjGuEOO4fbX04QOE5BjR7s%2BCzpR0o0KnRmZdUkxkTeLKTh88EidGkypqCuIYUDo6eJII2aEaYqTiM1UxzOuSdA4gZx7s41WidVwdy6LT3Tne4vpQFvaeCq%2BXWQQAQcVFiTJ8fxxIKO9gVxERx%2BJoICkspE4nZzk1B3wa9SeAJujdXEfnLiJboe9%2BR7qQMnv%2FKktV0HBzDAlBvSSBMWx4DwFdU3VNYj8URKOwTJCWClKM%2FpnGujCfm7vEBjqkAUCfuE4yKdRn4lPbgOwAQMSmV4gw%2BQXdrckckzuVynJvgKKoVXm2B5wwoNFLr%2FAa5HOF4TajNNGfRVYVmtpiUzRh3LsIKLaHMPREmZ36SFxvcwezX1GEWZYUs%2Fpr32Wl%2FzAs2gKLo9e5VZ38kT7EB4X2QyR5auMX7kzBjFLxgUQhglpaWn%2FjwGvWctKs1uXRTuEezgvzhRG%2BPbMH9Ev3mCtHvPKo&X-Amz-Signature=b005a3ca214c7268998619e4fdb071210e58222e15b6d54c7fb731563fc2f848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV4PJO4H%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbfToJWWyV%2BWbDRoqqP7Nn3wvarLUJagrQFh0wEK%2F%2FdgIhAIBnVER%2FH%2BPW9kzN%2BPYPGd1S6aD2L%2Fq6HsjGnPzNqrTLKv8DCCQQABoMNjM3NDIzMTgzODA1IgxXBDCQ27fGIGWv45Uq3AONHBFLNQDlSW%2FKqhteX6Bf7smJovZ80pTx5i4EGAazfiupr6IisjAPY9dXbCygYLJVJXXvPdMJv4%2FM%2BSyz3ZhHunM%2BqvFugl3rZ%2FKOecCHjzBXJp3hykptbd4UZ79C%2BH%2Bfxriss3%2Bxq0kbG7SMnV4bAOZY6776l%2BA%2FmEZcVXQNv2BNiy8%2FGRrgwbuQq801q6uP7dc7T9R%2F3fqm0s0kVxSJKQw3afF18xk4dOmcZMkO9PrDyvZ5qtxL4jQRWFTmc5VQut3YlgEZZaCjuBwfjMY71l4umfTto7OikIiRyth26dM9FeJuZYaeph%2FMmY6GmvEt%2FrShhgUHNQdwuQl19dn6Zli43vvCMLLTFRZKtrbG4pFKLxGlaC7cTHBE1Z%2BCPI7YsU5kE5KQCjGuEOO4fbX04QOE5BjR7s%2BCzpR0o0KnRmZdUkxkTeLKTh88EidGkypqCuIYUDo6eJII2aEaYqTiM1UxzOuSdA4gZx7s41WidVwdy6LT3Tne4vpQFvaeCq%2BXWQQAQcVFiTJ8fxxIKO9gVxERx%2BJoICkspE4nZzk1B3wa9SeAJujdXEfnLiJboe9%2BR7qQMnv%2FKktV0HBzDAlBvSSBMWx4DwFdU3VNYj8URKOwTJCWClKM%2FpnGujCfm7vEBjqkAUCfuE4yKdRn4lPbgOwAQMSmV4gw%2BQXdrckckzuVynJvgKKoVXm2B5wwoNFLr%2FAa5HOF4TajNNGfRVYVmtpiUzRh3LsIKLaHMPREmZ36SFxvcwezX1GEWZYUs%2Fpr32Wl%2FzAs2gKLo9e5VZ38kT7EB4X2QyR5auMX7kzBjFLxgUQhglpaWn%2FjwGvWctKs1uXRTuEezgvzhRG%2BPbMH9Ev3mCtHvPKo&X-Amz-Signature=d3f79c7c957d7b58b4149311cd3bd60b625ee1cba06f43e10e8c25250014be24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV4PJO4H%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbfToJWWyV%2BWbDRoqqP7Nn3wvarLUJagrQFh0wEK%2F%2FdgIhAIBnVER%2FH%2BPW9kzN%2BPYPGd1S6aD2L%2Fq6HsjGnPzNqrTLKv8DCCQQABoMNjM3NDIzMTgzODA1IgxXBDCQ27fGIGWv45Uq3AONHBFLNQDlSW%2FKqhteX6Bf7smJovZ80pTx5i4EGAazfiupr6IisjAPY9dXbCygYLJVJXXvPdMJv4%2FM%2BSyz3ZhHunM%2BqvFugl3rZ%2FKOecCHjzBXJp3hykptbd4UZ79C%2BH%2Bfxriss3%2Bxq0kbG7SMnV4bAOZY6776l%2BA%2FmEZcVXQNv2BNiy8%2FGRrgwbuQq801q6uP7dc7T9R%2F3fqm0s0kVxSJKQw3afF18xk4dOmcZMkO9PrDyvZ5qtxL4jQRWFTmc5VQut3YlgEZZaCjuBwfjMY71l4umfTto7OikIiRyth26dM9FeJuZYaeph%2FMmY6GmvEt%2FrShhgUHNQdwuQl19dn6Zli43vvCMLLTFRZKtrbG4pFKLxGlaC7cTHBE1Z%2BCPI7YsU5kE5KQCjGuEOO4fbX04QOE5BjR7s%2BCzpR0o0KnRmZdUkxkTeLKTh88EidGkypqCuIYUDo6eJII2aEaYqTiM1UxzOuSdA4gZx7s41WidVwdy6LT3Tne4vpQFvaeCq%2BXWQQAQcVFiTJ8fxxIKO9gVxERx%2BJoICkspE4nZzk1B3wa9SeAJujdXEfnLiJboe9%2BR7qQMnv%2FKktV0HBzDAlBvSSBMWx4DwFdU3VNYj8URKOwTJCWClKM%2FpnGujCfm7vEBjqkAUCfuE4yKdRn4lPbgOwAQMSmV4gw%2BQXdrckckzuVynJvgKKoVXm2B5wwoNFLr%2FAa5HOF4TajNNGfRVYVmtpiUzRh3LsIKLaHMPREmZ36SFxvcwezX1GEWZYUs%2Fpr32Wl%2FzAs2gKLo9e5VZ38kT7EB4X2QyR5auMX7kzBjFLxgUQhglpaWn%2FjwGvWctKs1uXRTuEezgvzhRG%2BPbMH9Ev3mCtHvPKo&X-Amz-Signature=7c7aa3a86e177388b108fac01c2e5fedbc25f2290f4a910e250b9a0afe5462d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV4PJO4H%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbfToJWWyV%2BWbDRoqqP7Nn3wvarLUJagrQFh0wEK%2F%2FdgIhAIBnVER%2FH%2BPW9kzN%2BPYPGd1S6aD2L%2Fq6HsjGnPzNqrTLKv8DCCQQABoMNjM3NDIzMTgzODA1IgxXBDCQ27fGIGWv45Uq3AONHBFLNQDlSW%2FKqhteX6Bf7smJovZ80pTx5i4EGAazfiupr6IisjAPY9dXbCygYLJVJXXvPdMJv4%2FM%2BSyz3ZhHunM%2BqvFugl3rZ%2FKOecCHjzBXJp3hykptbd4UZ79C%2BH%2Bfxriss3%2Bxq0kbG7SMnV4bAOZY6776l%2BA%2FmEZcVXQNv2BNiy8%2FGRrgwbuQq801q6uP7dc7T9R%2F3fqm0s0kVxSJKQw3afF18xk4dOmcZMkO9PrDyvZ5qtxL4jQRWFTmc5VQut3YlgEZZaCjuBwfjMY71l4umfTto7OikIiRyth26dM9FeJuZYaeph%2FMmY6GmvEt%2FrShhgUHNQdwuQl19dn6Zli43vvCMLLTFRZKtrbG4pFKLxGlaC7cTHBE1Z%2BCPI7YsU5kE5KQCjGuEOO4fbX04QOE5BjR7s%2BCzpR0o0KnRmZdUkxkTeLKTh88EidGkypqCuIYUDo6eJII2aEaYqTiM1UxzOuSdA4gZx7s41WidVwdy6LT3Tne4vpQFvaeCq%2BXWQQAQcVFiTJ8fxxIKO9gVxERx%2BJoICkspE4nZzk1B3wa9SeAJujdXEfnLiJboe9%2BR7qQMnv%2FKktV0HBzDAlBvSSBMWx4DwFdU3VNYj8URKOwTJCWClKM%2FpnGujCfm7vEBjqkAUCfuE4yKdRn4lPbgOwAQMSmV4gw%2BQXdrckckzuVynJvgKKoVXm2B5wwoNFLr%2FAa5HOF4TajNNGfRVYVmtpiUzRh3LsIKLaHMPREmZ36SFxvcwezX1GEWZYUs%2Fpr32Wl%2FzAs2gKLo9e5VZ38kT7EB4X2QyR5auMX7kzBjFLxgUQhglpaWn%2FjwGvWctKs1uXRTuEezgvzhRG%2BPbMH9Ev3mCtHvPKo&X-Amz-Signature=e7455aa2b5712e08a08cdb5797f9af3c478f04ae81dd8c3eda6834a77ef28a6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV4PJO4H%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbfToJWWyV%2BWbDRoqqP7Nn3wvarLUJagrQFh0wEK%2F%2FdgIhAIBnVER%2FH%2BPW9kzN%2BPYPGd1S6aD2L%2Fq6HsjGnPzNqrTLKv8DCCQQABoMNjM3NDIzMTgzODA1IgxXBDCQ27fGIGWv45Uq3AONHBFLNQDlSW%2FKqhteX6Bf7smJovZ80pTx5i4EGAazfiupr6IisjAPY9dXbCygYLJVJXXvPdMJv4%2FM%2BSyz3ZhHunM%2BqvFugl3rZ%2FKOecCHjzBXJp3hykptbd4UZ79C%2BH%2Bfxriss3%2Bxq0kbG7SMnV4bAOZY6776l%2BA%2FmEZcVXQNv2BNiy8%2FGRrgwbuQq801q6uP7dc7T9R%2F3fqm0s0kVxSJKQw3afF18xk4dOmcZMkO9PrDyvZ5qtxL4jQRWFTmc5VQut3YlgEZZaCjuBwfjMY71l4umfTto7OikIiRyth26dM9FeJuZYaeph%2FMmY6GmvEt%2FrShhgUHNQdwuQl19dn6Zli43vvCMLLTFRZKtrbG4pFKLxGlaC7cTHBE1Z%2BCPI7YsU5kE5KQCjGuEOO4fbX04QOE5BjR7s%2BCzpR0o0KnRmZdUkxkTeLKTh88EidGkypqCuIYUDo6eJII2aEaYqTiM1UxzOuSdA4gZx7s41WidVwdy6LT3Tne4vpQFvaeCq%2BXWQQAQcVFiTJ8fxxIKO9gVxERx%2BJoICkspE4nZzk1B3wa9SeAJujdXEfnLiJboe9%2BR7qQMnv%2FKktV0HBzDAlBvSSBMWx4DwFdU3VNYj8URKOwTJCWClKM%2FpnGujCfm7vEBjqkAUCfuE4yKdRn4lPbgOwAQMSmV4gw%2BQXdrckckzuVynJvgKKoVXm2B5wwoNFLr%2FAa5HOF4TajNNGfRVYVmtpiUzRh3LsIKLaHMPREmZ36SFxvcwezX1GEWZYUs%2Fpr32Wl%2FzAs2gKLo9e5VZ38kT7EB4X2QyR5auMX7kzBjFLxgUQhglpaWn%2FjwGvWctKs1uXRTuEezgvzhRG%2BPbMH9Ev3mCtHvPKo&X-Amz-Signature=f782827e79817d0cd54c26b91f145ef13295d7a7e077f218683b83eb57753787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV4PJO4H%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbfToJWWyV%2BWbDRoqqP7Nn3wvarLUJagrQFh0wEK%2F%2FdgIhAIBnVER%2FH%2BPW9kzN%2BPYPGd1S6aD2L%2Fq6HsjGnPzNqrTLKv8DCCQQABoMNjM3NDIzMTgzODA1IgxXBDCQ27fGIGWv45Uq3AONHBFLNQDlSW%2FKqhteX6Bf7smJovZ80pTx5i4EGAazfiupr6IisjAPY9dXbCygYLJVJXXvPdMJv4%2FM%2BSyz3ZhHunM%2BqvFugl3rZ%2FKOecCHjzBXJp3hykptbd4UZ79C%2BH%2Bfxriss3%2Bxq0kbG7SMnV4bAOZY6776l%2BA%2FmEZcVXQNv2BNiy8%2FGRrgwbuQq801q6uP7dc7T9R%2F3fqm0s0kVxSJKQw3afF18xk4dOmcZMkO9PrDyvZ5qtxL4jQRWFTmc5VQut3YlgEZZaCjuBwfjMY71l4umfTto7OikIiRyth26dM9FeJuZYaeph%2FMmY6GmvEt%2FrShhgUHNQdwuQl19dn6Zli43vvCMLLTFRZKtrbG4pFKLxGlaC7cTHBE1Z%2BCPI7YsU5kE5KQCjGuEOO4fbX04QOE5BjR7s%2BCzpR0o0KnRmZdUkxkTeLKTh88EidGkypqCuIYUDo6eJII2aEaYqTiM1UxzOuSdA4gZx7s41WidVwdy6LT3Tne4vpQFvaeCq%2BXWQQAQcVFiTJ8fxxIKO9gVxERx%2BJoICkspE4nZzk1B3wa9SeAJujdXEfnLiJboe9%2BR7qQMnv%2FKktV0HBzDAlBvSSBMWx4DwFdU3VNYj8URKOwTJCWClKM%2FpnGujCfm7vEBjqkAUCfuE4yKdRn4lPbgOwAQMSmV4gw%2BQXdrckckzuVynJvgKKoVXm2B5wwoNFLr%2FAa5HOF4TajNNGfRVYVmtpiUzRh3LsIKLaHMPREmZ36SFxvcwezX1GEWZYUs%2Fpr32Wl%2FzAs2gKLo9e5VZ38kT7EB4X2QyR5auMX7kzBjFLxgUQhglpaWn%2FjwGvWctKs1uXRTuEezgvzhRG%2BPbMH9Ev3mCtHvPKo&X-Amz-Signature=d379eebf7dd265d8b2ce8f40f50901a8681b1b661314139ae316eb2a982bf959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV4PJO4H%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbfToJWWyV%2BWbDRoqqP7Nn3wvarLUJagrQFh0wEK%2F%2FdgIhAIBnVER%2FH%2BPW9kzN%2BPYPGd1S6aD2L%2Fq6HsjGnPzNqrTLKv8DCCQQABoMNjM3NDIzMTgzODA1IgxXBDCQ27fGIGWv45Uq3AONHBFLNQDlSW%2FKqhteX6Bf7smJovZ80pTx5i4EGAazfiupr6IisjAPY9dXbCygYLJVJXXvPdMJv4%2FM%2BSyz3ZhHunM%2BqvFugl3rZ%2FKOecCHjzBXJp3hykptbd4UZ79C%2BH%2Bfxriss3%2Bxq0kbG7SMnV4bAOZY6776l%2BA%2FmEZcVXQNv2BNiy8%2FGRrgwbuQq801q6uP7dc7T9R%2F3fqm0s0kVxSJKQw3afF18xk4dOmcZMkO9PrDyvZ5qtxL4jQRWFTmc5VQut3YlgEZZaCjuBwfjMY71l4umfTto7OikIiRyth26dM9FeJuZYaeph%2FMmY6GmvEt%2FrShhgUHNQdwuQl19dn6Zli43vvCMLLTFRZKtrbG4pFKLxGlaC7cTHBE1Z%2BCPI7YsU5kE5KQCjGuEOO4fbX04QOE5BjR7s%2BCzpR0o0KnRmZdUkxkTeLKTh88EidGkypqCuIYUDo6eJII2aEaYqTiM1UxzOuSdA4gZx7s41WidVwdy6LT3Tne4vpQFvaeCq%2BXWQQAQcVFiTJ8fxxIKO9gVxERx%2BJoICkspE4nZzk1B3wa9SeAJujdXEfnLiJboe9%2BR7qQMnv%2FKktV0HBzDAlBvSSBMWx4DwFdU3VNYj8URKOwTJCWClKM%2FpnGujCfm7vEBjqkAUCfuE4yKdRn4lPbgOwAQMSmV4gw%2BQXdrckckzuVynJvgKKoVXm2B5wwoNFLr%2FAa5HOF4TajNNGfRVYVmtpiUzRh3LsIKLaHMPREmZ36SFxvcwezX1GEWZYUs%2Fpr32Wl%2FzAs2gKLo9e5VZ38kT7EB4X2QyR5auMX7kzBjFLxgUQhglpaWn%2FjwGvWctKs1uXRTuEezgvzhRG%2BPbMH9Ev3mCtHvPKo&X-Amz-Signature=85315f7bf94b3fac0887b7a3a16cfcbfe381258223c6d9219204a67fb5888dff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV4PJO4H%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbfToJWWyV%2BWbDRoqqP7Nn3wvarLUJagrQFh0wEK%2F%2FdgIhAIBnVER%2FH%2BPW9kzN%2BPYPGd1S6aD2L%2Fq6HsjGnPzNqrTLKv8DCCQQABoMNjM3NDIzMTgzODA1IgxXBDCQ27fGIGWv45Uq3AONHBFLNQDlSW%2FKqhteX6Bf7smJovZ80pTx5i4EGAazfiupr6IisjAPY9dXbCygYLJVJXXvPdMJv4%2FM%2BSyz3ZhHunM%2BqvFugl3rZ%2FKOecCHjzBXJp3hykptbd4UZ79C%2BH%2Bfxriss3%2Bxq0kbG7SMnV4bAOZY6776l%2BA%2FmEZcVXQNv2BNiy8%2FGRrgwbuQq801q6uP7dc7T9R%2F3fqm0s0kVxSJKQw3afF18xk4dOmcZMkO9PrDyvZ5qtxL4jQRWFTmc5VQut3YlgEZZaCjuBwfjMY71l4umfTto7OikIiRyth26dM9FeJuZYaeph%2FMmY6GmvEt%2FrShhgUHNQdwuQl19dn6Zli43vvCMLLTFRZKtrbG4pFKLxGlaC7cTHBE1Z%2BCPI7YsU5kE5KQCjGuEOO4fbX04QOE5BjR7s%2BCzpR0o0KnRmZdUkxkTeLKTh88EidGkypqCuIYUDo6eJII2aEaYqTiM1UxzOuSdA4gZx7s41WidVwdy6LT3Tne4vpQFvaeCq%2BXWQQAQcVFiTJ8fxxIKO9gVxERx%2BJoICkspE4nZzk1B3wa9SeAJujdXEfnLiJboe9%2BR7qQMnv%2FKktV0HBzDAlBvSSBMWx4DwFdU3VNYj8URKOwTJCWClKM%2FpnGujCfm7vEBjqkAUCfuE4yKdRn4lPbgOwAQMSmV4gw%2BQXdrckckzuVynJvgKKoVXm2B5wwoNFLr%2FAa5HOF4TajNNGfRVYVmtpiUzRh3LsIKLaHMPREmZ36SFxvcwezX1GEWZYUs%2Fpr32Wl%2FzAs2gKLo9e5VZ38kT7EB4X2QyR5auMX7kzBjFLxgUQhglpaWn%2FjwGvWctKs1uXRTuEezgvzhRG%2BPbMH9Ev3mCtHvPKo&X-Amz-Signature=1d1a3720d99972c72fc65538c6a8c3fac93c0244f65f1a9210926499b8ae08c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JL6TKDA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmQLKTLuM0SMC4aloil1PnlQdiakpm5xPsJ9DNRWGcPQIgAmpuu7R0qMY6ZBRk4qFi8usdam8a674OFbwSP%2Fo7JZcq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDFDwElIdJV1ZEC3MMircAxVMvphbjE6eH0UkW0ZbY3LgrdgX3xJC5Evikj9eHDXYdvKYibx0TqdQLp%2F975%2BtC3MR4Ml7Ahv25nvocbAjLKCgm5XZCAAefolrcAm3o2iwIRAypDzLVkmWyznl9MougxzO9OaBJWyAA815OuXyTJua69uUhSbqy2Lunx7tlPT9429MZq4SLD5n0%2B0cO31GWbns%2BNTgZf8dV1NH7u%2F%2FAJXuhZeqXcYgxpXpK%2Bo57ipG0ZQNEtAlliarSOj0G2APFeiGshgxoRjZSlFTOPN2YPq6D%2FhHLeeguif0qS1s%2F66uLn%2F%2Bef54jtdMrIS5HXFFgef3Oj3fXK3JaCvEqGoibCEe%2BfjnsoZucSqf7jFdkXtnOY52xDsG7jQInZcOD%2BkE7bnzFaBjVmj6ytjAAwXij1D2nt%2BWyUsC%2F%2BMjb9C2YTTgnH1JKUr2ukIpSYdK5qLLJfaqRSDkevfkEdstHKAQBGxMD5sd%2BE4e5S%2B4jW5V4k3Mbe%2B1eJPWZlqEun4EWhAt7xVoztSOdHFk1wfi5k0w4bVihZjT2KyLAZADtpgrSRmvkvMREzxILOGNwdxZLHZb0LJ2xbDq87tGW8whR340onAcIaBZ7VudTuJUnJfwq40JzpLpNwsQwtSR%2FRgAMOWbu8QGOqUBZlrQgowXHuIpcJNCDYw54xt3Byc801VGzSHBWLbS1gWznrEiJrNJp79RM7oKGbFpvsGjNUo9SZLmg4malTgvU4wceXYMEET6fkwLS%2B9l%2FbwTaNAx3HQPP%2B1zHUsS0CeSzwaoIJOV43Y8%2BV42fOaqzy5dI3VxOnycTtL2iI9Rqvee0ClcdS6wMH1WSNOqgkZSigQEGcSm6LxUMXhs9cQ04VYaB7E2&X-Amz-Signature=c12278b7df7beec487885eee51ee48de26f03f9356a0f06b379dd1336435cd99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU5RTXTR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANzKFRAE%2B4yk8aGZMnoh5suhlJFkxJM%2FwRbzSegdGNTAiA3CMlt3hqWhFxrwQB%2Fa9VsuA1poTU1i6GcNoTrOMuyyir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMMnsZyr649qlUtdhYKtwDPGdXuVfMen5SfHzTIfpUYJ3Fc0K44PflHHZQGEkYt6wV%2F%2FN7JNpnnf2JNKtywN8U6BbgAsLinKW3o%2FgemrCyjYemg%2BRJGg%2FP%2BWzUH88MRFhszBm3BAqGMjflVPGC5fD1bDv8WoF%2F5vPt5T0w3sobBO8soR2BLYhEkLC%2FgY1RvAH2YdSTflIW1f8dro7wXFuSfulspEx5O%2B%2B7nrSzQu%2BPDb%2BH7AUNOWc411Gu%2BxvbKQT5cJeLBUzEjhXceFnLj67wggPdk49Vror92T3n0CLwp4hDlpAlZWBquFQri3NwHPe5M50SJ0BSg7Onm0vhwZhcIgxDmBhzO%2Bvc7XCsV%2FferOLW2%2FIVQHkRV9IQFKlJ%2FYH8gK9PTVs5aMbpw9wTZxfK%2Bq0fkPJK8SMSbTgseB6cUWudAsbloJNo6FHW4XWtDoBQ8yhN5OivRQKecZVTzMI%2BoPfZaHpjelbWPJTKQ1NJm7wO%2FZ4L0L%2F9w11oEPuxq1BCA9ZiPe7JTvGPWiGZ4aHFRWAeVHiRmzDNLMpLJ%2BPg%2BrMQ3zN6Qgt8xdgwdgpG%2FKPNV%2B6opL0lygEYNGBA1FIfiXyCmxc7trwLfABaLnTltg3Roa03yUhXb%2FpbxI%2FzE3J%2BkXONGfta1QVlgcEwhqO7xAY6pgFysplUrSHtsimmx1SS8Bn4JChySOkOhXosC%2FwQ%2BuOM3UEWQnUkBJ6fee%2FF0ZCQosoMKb0aAx6UMJCHYEH89yBZsDe3Nx%2Bzayqoi7JrWuOgDDxSMlT%2Fo2qnH%2BeB%2F2ZOPdzVaatdeokEhJhoMVpaBrhDaohSpWGe%2FZc3NCatlwGyXJyFrA%2FuMGLlbqa8e4bxlkANHN56AJnHbuD00cGje8kzXvah%2BL6o&X-Amz-Signature=10068d41261f3bfad8f3173860eeaf1e099d7bf00f24ba19aad9c06497fb389a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K2OJMJD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGB2LVo99vnOts2szQc%2B8DfynAY8cM02praQDCr7jVQAiEA2VZi5MQU3R54p5MVynUxbRZWADeLHVdVIfEYvR3W6YYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLyPVi0BR2QlewfVeCrcAyY6InP%2BRlRBDlvoJUIE5IrE1E2y%2BKfgWRZjxskm37mGR89ueAo3dbJO1CuH%2BuN1%2B%2B96vvyE3j3aYlZmMRwL6Fj3uCZpKXNr4LYLBO%2BCYu6NKkdiq3NgUMFqaV9ynFBL%2B2OgNRluiQ5O%2ByyhKFnoNdw71o95lmBwFmKlY%2Fx4zFzQKo%2B437PFxL24FGMpJv3bqo%2FtclBydjULh3bnQovgiIoFxUAwDocAp7ISBr9a2Hy7HWZtzehGQ%2BYKBhbCeLexsC22xqe5boYcOnHqKyL8xkEUzkN8x%2FMDBwDzbaXSbn%2Fci5LYR0bY2zoi%2BwNq0Fll76BZOFBuUQd1e37yr0%2FSvVmu2%2BNwC%2FWBzELoCfiBKQtJWoksLIBVjdgsVK0jhNKS%2FEJy66ntNC%2B2FrviYzWeHKdoSkMkKD1LgftgKk%2FKgMYeTLl8wsgPE%2Fv%2FQeHPeDJ0QypyY6wy6gd0Ljk3s36HvDbNLqGjxQ0KYaabtq7qYJYTxa%2FGO7tVdngYIO4VJRZE55EbPeoBlIFkkvLcr%2BJYFKIEd1xEwwBofAdHusjnSYjC8KIdb%2FQgAP0R%2BPaQzk3y4nf9RNo9%2BS5HCC%2FWl1aumqHxhyu8JlI0JmlreJH7P0O0N%2FDg80%2FEsQzaTx1aMJuiu8QGOqUBCHL0jCc9FfcG9f43m3yMwrEVhx%2F7LpK%2FPEYp2ZI9LXU%2BwRzv2ArOR1rkbBzhCE5MGysN8dx0JtDWDt3f8w%2FZQ8jMxjyO03tSYLobO6Nyqd9r5fj%2BXACkNBDPPwpokAZzlwoxSVLU2iG72%2B6GYBvno3jKFPw3Bez3IP%2FNLg%2BUCQmXoyn08YZfTzY58R6k6wWns5kJqvPapj9P9WYQrnWhG38twGL5&X-Amz-Signature=4ffcbfb4147776e2f4adf83b5aac284e00752e9ffffa902e10528b44ab92f93e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV4PJO4H%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbfToJWWyV%2BWbDRoqqP7Nn3wvarLUJagrQFh0wEK%2F%2FdgIhAIBnVER%2FH%2BPW9kzN%2BPYPGd1S6aD2L%2Fq6HsjGnPzNqrTLKv8DCCQQABoMNjM3NDIzMTgzODA1IgxXBDCQ27fGIGWv45Uq3AONHBFLNQDlSW%2FKqhteX6Bf7smJovZ80pTx5i4EGAazfiupr6IisjAPY9dXbCygYLJVJXXvPdMJv4%2FM%2BSyz3ZhHunM%2BqvFugl3rZ%2FKOecCHjzBXJp3hykptbd4UZ79C%2BH%2Bfxriss3%2Bxq0kbG7SMnV4bAOZY6776l%2BA%2FmEZcVXQNv2BNiy8%2FGRrgwbuQq801q6uP7dc7T9R%2F3fqm0s0kVxSJKQw3afF18xk4dOmcZMkO9PrDyvZ5qtxL4jQRWFTmc5VQut3YlgEZZaCjuBwfjMY71l4umfTto7OikIiRyth26dM9FeJuZYaeph%2FMmY6GmvEt%2FrShhgUHNQdwuQl19dn6Zli43vvCMLLTFRZKtrbG4pFKLxGlaC7cTHBE1Z%2BCPI7YsU5kE5KQCjGuEOO4fbX04QOE5BjR7s%2BCzpR0o0KnRmZdUkxkTeLKTh88EidGkypqCuIYUDo6eJII2aEaYqTiM1UxzOuSdA4gZx7s41WidVwdy6LT3Tne4vpQFvaeCq%2BXWQQAQcVFiTJ8fxxIKO9gVxERx%2BJoICkspE4nZzk1B3wa9SeAJujdXEfnLiJboe9%2BR7qQMnv%2FKktV0HBzDAlBvSSBMWx4DwFdU3VNYj8URKOwTJCWClKM%2FpnGujCfm7vEBjqkAUCfuE4yKdRn4lPbgOwAQMSmV4gw%2BQXdrckckzuVynJvgKKoVXm2B5wwoNFLr%2FAa5HOF4TajNNGfRVYVmtpiUzRh3LsIKLaHMPREmZ36SFxvcwezX1GEWZYUs%2Fpr32Wl%2FzAs2gKLo9e5VZ38kT7EB4X2QyR5auMX7kzBjFLxgUQhglpaWn%2FjwGvWctKs1uXRTuEezgvzhRG%2BPbMH9Ev3mCtHvPKo&X-Amz-Signature=8808e3e9fc05438fc6ae6564f7e8ad00f4242a76573505c511970f612905b2aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FZCFPVF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjs6FC8X%2B9p49GG%2BVn3KE8fg5OBEYXPYSOsFW2wb1StQIhAJ5sU%2F7trNpSJe8Sm3KcV9bpdseh61GAVT3a%2FbW4qAc%2BKv8DCCQQABoMNjM3NDIzMTgzODA1IgwNt1AWijfndjLHwmoq3ANqQt0%2BC%2FTKxIc%2FYTwRtdQ0lUcR%2BJuseB%2FBxzljzMwtIrUEGBxlJK1JX%2Frk7eoHI3CjYRo6UwKjt%2FLwaoD5GaHidF98jo68At%2B3hMFTdETgjuSOuphAm%2BIHg0IEOU7TnPtbnHe0GiVcenHvYEHHYamNsaAPyYXSG5Xo2O%2F2U9LRL6hs3gjpB5wa0aIvhfIDEU0B%2FO26OYI0OF0d91eebptF89eMtEUlVjIrgfWtB9xK5yLHLs9X0hf01Y98rZTrFihFvN1UaoXYObbnQzMbXZF937o9V8rn6%2FrIdV1r6fOKKu3m9ADFfIgxErLIPFlPe%2F3yboX1ooeKsWN5VArbPLqac44n%2BWRkPAShUq3fOT9MbPJOneqAruAmjmn%2Blheny5ux6UeWvLeisCYgmN5REJhwjoEsB0g2uzimV3RAU9plOouIKSL24418hbK9xOsqHlhuu5rMKjekd4QIUlLeD2ySuaZJuqYbSI89gsqBBT%2B%2FfkhO77%2FKrf4BTwRk9zgghE98JdyElvVS83JJSHodWEJ5yXJdcoK01xp8FbdbxPy8FeHPSzJmhS3VyFd7agi%2FL0%2BAmSL2876xTjFUOlCBsjGmGBa68qRHw9q02klpgjoU1wYZ1t8VPwhiU1PxpDDVnLvEBjqkAWEOS5MYx1v8ihgnzhP%2FSIQ64JDVTLeIxdgGCNhamimtgSSKiNw81e8fQAxMpMoVNPpe6NVeeahxmgdF2lOc6Df%2FTh4HKLgLwY5hAVzTKj%2FQsaKF2%2FyF992Xn3ImlJLSz7tnIiEDTMr55AtP3rvap6Fnnb2UqhSwnbI7y%2BSqfFsSSqq34oAX%2Fie6fzw5OWA8ONYRm2wHnPbagLTtxGHNcfFThijB&X-Amz-Signature=69b843764332741db792c7f20a0497a8aadc1e51ba2db0ee34eb7656c2b9ece3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV4PJO4H%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbfToJWWyV%2BWbDRoqqP7Nn3wvarLUJagrQFh0wEK%2F%2FdgIhAIBnVER%2FH%2BPW9kzN%2BPYPGd1S6aD2L%2Fq6HsjGnPzNqrTLKv8DCCQQABoMNjM3NDIzMTgzODA1IgxXBDCQ27fGIGWv45Uq3AONHBFLNQDlSW%2FKqhteX6Bf7smJovZ80pTx5i4EGAazfiupr6IisjAPY9dXbCygYLJVJXXvPdMJv4%2FM%2BSyz3ZhHunM%2BqvFugl3rZ%2FKOecCHjzBXJp3hykptbd4UZ79C%2BH%2Bfxriss3%2Bxq0kbG7SMnV4bAOZY6776l%2BA%2FmEZcVXQNv2BNiy8%2FGRrgwbuQq801q6uP7dc7T9R%2F3fqm0s0kVxSJKQw3afF18xk4dOmcZMkO9PrDyvZ5qtxL4jQRWFTmc5VQut3YlgEZZaCjuBwfjMY71l4umfTto7OikIiRyth26dM9FeJuZYaeph%2FMmY6GmvEt%2FrShhgUHNQdwuQl19dn6Zli43vvCMLLTFRZKtrbG4pFKLxGlaC7cTHBE1Z%2BCPI7YsU5kE5KQCjGuEOO4fbX04QOE5BjR7s%2BCzpR0o0KnRmZdUkxkTeLKTh88EidGkypqCuIYUDo6eJII2aEaYqTiM1UxzOuSdA4gZx7s41WidVwdy6LT3Tne4vpQFvaeCq%2BXWQQAQcVFiTJ8fxxIKO9gVxERx%2BJoICkspE4nZzk1B3wa9SeAJujdXEfnLiJboe9%2BR7qQMnv%2FKktV0HBzDAlBvSSBMWx4DwFdU3VNYj8URKOwTJCWClKM%2FpnGujCfm7vEBjqkAUCfuE4yKdRn4lPbgOwAQMSmV4gw%2BQXdrckckzuVynJvgKKoVXm2B5wwoNFLr%2FAa5HOF4TajNNGfRVYVmtpiUzRh3LsIKLaHMPREmZ36SFxvcwezX1GEWZYUs%2Fpr32Wl%2FzAs2gKLo9e5VZ38kT7EB4X2QyR5auMX7kzBjFLxgUQhglpaWn%2FjwGvWctKs1uXRTuEezgvzhRG%2BPbMH9Ev3mCtHvPKo&X-Amz-Signature=ba1f6a995668e62a375d754f950ecdad30ace45edde9faeb4145ee4799541620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXWIZ2HE%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmSBKPXTGqGDzxYBblSX3W7QhbVQywXoLHp79QyR0ZaQIhAPuh%2B6XyUuJ4TBvWizRXnw%2FgR%2B5i%2BcX5LZgZ87GO6P3zKv8DCCQQABoMNjM3NDIzMTgzODA1IgwNFuREfMMxFzo3R9Eq3AN3SOx4PdRo6MV4J8rDxBBfkLVtRod1%2B8zX6krU%2BUqhJWob8DUDEhsa9Mtjgj%2B5z5fBxxpC1pElxs8wJm5Lu%2FMDgnXleHyg4YwSwyiKpi3YDg5PVmg59U22X7PvwA9PwmnhB1MSp7hlGgxRRH8p561XdTgFbzPib29t8vGxiFGx241czZqjMN48FUGKfSBtbVdY3Apza%2BGoviCgKoZVVEP3VGKS8DB3zb6YQp1Fli1cNZkP%2B7ioaGQBVVaGMq8bUpwMk1651ED8uzBMU5Ec2Qu9reQQ1tZ%2BUdgvxAkQ6ANuZ%2FuLJxh1owJltVqjDW6b9BiAE3n9L2GuuM0YW6i9BSbqEj4mzpDh9WaLqsHpLKHuWahQ%2B6XjCLygRp31YP3WQzWH806n4UDc4mPsUoCMO1Ha35nzYYEkfEQNJO%2ByYhzfpwnYdt32wZshZLoU69Yk6aLyCLNKwnHr0lwkbMJ%2FyF9jHouCrqeD8oEAGSnLQyTDaJ73wRbJjj3SDirSJOOFKF5lxbS0Yjey8taYJDC4NEI2nW79CyglI439nKhXuetg6I36YWwDggek0uVKCVkjBptRYwtoc6HCQvl6LdCVanFaT33IWz2%2BY3XxVHSTPBFuAJEU%2BSiinjOArda75TDDm7vEBjqkAbMp6EGxzlkvQ8%2BIGNP9rl10TcCIL00noC2VfNlRXLrJxB57TQSLHLR8vX4Mrht92mwQ6MiHyEnhtfxYhTGbQiG4Kr318RyKlZ4EYgql6InixCncINXd1dG1x8nqPdJY1jh3OGv8LPbWWTGNBkYGfw1%2Fn3vsD7BaUO%2FtzAHyqrKjkfNs4DzkL5ViK%2FZgcFsQQwkr9ibsd%2F89A0uVi74acFElmWcW&X-Amz-Signature=bece15d5aa585a96ab683ca41c2a9df48fa701dd19ad6f8fe67b8a1dc20d8cb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV4PJO4H%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbfToJWWyV%2BWbDRoqqP7Nn3wvarLUJagrQFh0wEK%2F%2FdgIhAIBnVER%2FH%2BPW9kzN%2BPYPGd1S6aD2L%2Fq6HsjGnPzNqrTLKv8DCCQQABoMNjM3NDIzMTgzODA1IgxXBDCQ27fGIGWv45Uq3AONHBFLNQDlSW%2FKqhteX6Bf7smJovZ80pTx5i4EGAazfiupr6IisjAPY9dXbCygYLJVJXXvPdMJv4%2FM%2BSyz3ZhHunM%2BqvFugl3rZ%2FKOecCHjzBXJp3hykptbd4UZ79C%2BH%2Bfxriss3%2Bxq0kbG7SMnV4bAOZY6776l%2BA%2FmEZcVXQNv2BNiy8%2FGRrgwbuQq801q6uP7dc7T9R%2F3fqm0s0kVxSJKQw3afF18xk4dOmcZMkO9PrDyvZ5qtxL4jQRWFTmc5VQut3YlgEZZaCjuBwfjMY71l4umfTto7OikIiRyth26dM9FeJuZYaeph%2FMmY6GmvEt%2FrShhgUHNQdwuQl19dn6Zli43vvCMLLTFRZKtrbG4pFKLxGlaC7cTHBE1Z%2BCPI7YsU5kE5KQCjGuEOO4fbX04QOE5BjR7s%2BCzpR0o0KnRmZdUkxkTeLKTh88EidGkypqCuIYUDo6eJII2aEaYqTiM1UxzOuSdA4gZx7s41WidVwdy6LT3Tne4vpQFvaeCq%2BXWQQAQcVFiTJ8fxxIKO9gVxERx%2BJoICkspE4nZzk1B3wa9SeAJujdXEfnLiJboe9%2BR7qQMnv%2FKktV0HBzDAlBvSSBMWx4DwFdU3VNYj8URKOwTJCWClKM%2FpnGujCfm7vEBjqkAUCfuE4yKdRn4lPbgOwAQMSmV4gw%2BQXdrckckzuVynJvgKKoVXm2B5wwoNFLr%2FAa5HOF4TajNNGfRVYVmtpiUzRh3LsIKLaHMPREmZ36SFxvcwezX1GEWZYUs%2Fpr32Wl%2FzAs2gKLo9e5VZ38kT7EB4X2QyR5auMX7kzBjFLxgUQhglpaWn%2FjwGvWctKs1uXRTuEezgvzhRG%2BPbMH9Ev3mCtHvPKo&X-Amz-Signature=2296bf9f1691b84ba5fb206a38ec710f3eae4a60bbf0fde0370966fa39b5a5ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RVTUT2Y%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1PnqdqzXxEHPV%2BshwfZomGTxgJ9tu%2F6SMViFzSOTVhAiEAsNwgTWMPU2DAmw4qRGEZE1MiV2e0IFXKKOABmvQwyw4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDK5wC9f89g%2BG0VCILircAwLI8YE0FruCRZNz1fgVr0T1fLcL3WpIqZkhxjmA%2BgDAqgY4crJvpNTJQa6lMRl7ernE7kP2tpbTtJeVeMC724nGMuMay4GJ0IfVk7M9VrqOXYHxtL2Pk7hqpQCK2K2n4lmMFJ0N%2FGso59Kr8yOJ%2FKKT5yM%2B1w4Yp%2F8B170ygnS%2BESFQl3DOrnPPOHGT9F44xmUXh1rIxzH6iDL401%2BYW7svvhw4zjjrVcn5Q86wFBZi5dIC5uCpo58TA%2FC%2FHuVZVbuKJChqLhbkU3o4uxWKhNoGWrY7lQJPMzchRU9lZwPmAcR5fEmFAz8U1utWn4dSNyR7Dl4DQ9P5uZot%2BV37nKlUxo7rne26Wys1pcfdePMXVRJoBGxsMFPSIhpO9r8WjdBCHLNUZmvnx0D233knfLYe14AYNrlUZl%2Ba0llitbhAxXXNgu78AN%2Fasno4ukiBzMeayDMdbta02iKWLhUGC2ZMEJdbRcoQal7AR4ZjnudVn0XpS52oGsAZ%2FBY3tIIu9oQguKyE8bUmLnUnUJ9g89grSBQurtMQovc3%2Bf7J2n1jNwC4gIaACSLRbRsX3SlVc5VpZ%2F0k3NcCGap2nEnk%2B9XKAL9O9aolaetnNmbnM4j6s7mZf0SMGWgKCPsiMIyku8QGOqUBfBC7bfeEJFuuo5nYXVNAEQdpBJtapuh7%2B1tkqAbTvkOrtv4frRny5t9JLgcK%2BBX%2F%2FCv05YwN%2B80%2BB8yAWIN4oA%2FHBl%2F6rpo1Pfq%2B1q4oo0bRAew%2FdaTDGyotgfr3%2F2xo78VUXtQnCTC%2BHarYi6q0Vlcr4QoiMZ74oFmugXmJcLqtBqIjsoDz%2BdJGeSs0unA1FQWhIRS5jTEVaAAf86V4s2dygvL1&X-Amz-Signature=f3ababef29490c7a9c2c7970a9220abc578dc10e7b6e8ad296e8582bb0ca7e37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV4PJO4H%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbfToJWWyV%2BWbDRoqqP7Nn3wvarLUJagrQFh0wEK%2F%2FdgIhAIBnVER%2FH%2BPW9kzN%2BPYPGd1S6aD2L%2Fq6HsjGnPzNqrTLKv8DCCQQABoMNjM3NDIzMTgzODA1IgxXBDCQ27fGIGWv45Uq3AONHBFLNQDlSW%2FKqhteX6Bf7smJovZ80pTx5i4EGAazfiupr6IisjAPY9dXbCygYLJVJXXvPdMJv4%2FM%2BSyz3ZhHunM%2BqvFugl3rZ%2FKOecCHjzBXJp3hykptbd4UZ79C%2BH%2Bfxriss3%2Bxq0kbG7SMnV4bAOZY6776l%2BA%2FmEZcVXQNv2BNiy8%2FGRrgwbuQq801q6uP7dc7T9R%2F3fqm0s0kVxSJKQw3afF18xk4dOmcZMkO9PrDyvZ5qtxL4jQRWFTmc5VQut3YlgEZZaCjuBwfjMY71l4umfTto7OikIiRyth26dM9FeJuZYaeph%2FMmY6GmvEt%2FrShhgUHNQdwuQl19dn6Zli43vvCMLLTFRZKtrbG4pFKLxGlaC7cTHBE1Z%2BCPI7YsU5kE5KQCjGuEOO4fbX04QOE5BjR7s%2BCzpR0o0KnRmZdUkxkTeLKTh88EidGkypqCuIYUDo6eJII2aEaYqTiM1UxzOuSdA4gZx7s41WidVwdy6LT3Tne4vpQFvaeCq%2BXWQQAQcVFiTJ8fxxIKO9gVxERx%2BJoICkspE4nZzk1B3wa9SeAJujdXEfnLiJboe9%2BR7qQMnv%2FKktV0HBzDAlBvSSBMWx4DwFdU3VNYj8URKOwTJCWClKM%2FpnGujCfm7vEBjqkAUCfuE4yKdRn4lPbgOwAQMSmV4gw%2BQXdrckckzuVynJvgKKoVXm2B5wwoNFLr%2FAa5HOF4TajNNGfRVYVmtpiUzRh3LsIKLaHMPREmZ36SFxvcwezX1GEWZYUs%2Fpr32Wl%2FzAs2gKLo9e5VZ38kT7EB4X2QyR5auMX7kzBjFLxgUQhglpaWn%2FjwGvWctKs1uXRTuEezgvzhRG%2BPbMH9Ev3mCtHvPKo&X-Amz-Signature=470cba3f526ab86aa811496ef6d2ab77a2cca498bf5ddbf2f127b0edb2b5c74a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R72BG2O%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcUFeP9mLv9q36D0WduCUepq2H5YqznlkKG0Zl8kvvgwIgMLMO0gb4wU1m%2FfAE7XWczXCEVh9GnRroyhZuKDYJacoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOJddBiGe52DfqCtcyrcA2P5%2FdyEjCGB9qu8Bm09Ku9EVUbfHnQXLxWqxEtjwZZ1FBtgHCmjYj22VfgMYjKHYx20WyNj4joNBDRQ1McgHNrEEVNBxCPwEbdQEp7zOV8r0p7YX1xF62FAa2Wm50yee7pHzuVw3mTkyd64mHWV34qSzlVpMUP8WstO93BVevmnAYrjliQMDpPgxc886AEVtEihDCl5R2iEIE37L9q833HPekgsnLpDdOwjmPvf5cyOEGqRn2r62O1HWvPPym7N%2BH8%2FKEQAVrXQsiJrTKcFBrlLHmiOo5odYIwassre6EL47CopbQldSdBlRJiryVyrKV%2FUAnNsL4%2FGSDKY1aUFqYJB2I8YHNZ4LmYuk2GurqTr1jHl3Gs10wH74biWH0tOKZvOo84nyp4ayGBTEeqqZuuV3h%2FEQdrUxk0BvxMC7lyZEOT03Gts36SW3VO4deu9NIq2u4jJfiEMZnk%2BXDRsebOb%2FDPBjgLKv29z1mjeirTR1PxdCIilfbLEwXmZidGb6mX55CB0BxA9dcBY%2FDZZ7Io9d9siR5YqGQSnCUMS7ng01aW7WqM3BvlkDrJi8V4Ql55myNSGepWgZODKLrfsrsXTZwFoL4ZIIFuL5md3b0kJw98arC8oBnHoNOhaMPCdu8QGOqUBjWGsiQN4kenuDHf%2BoSaO7%2BETgQ0tdPHDK8pbtec0P5e4qAT6f4SH4jZ7JtUyLkd1aT2QPPlBx%2FN%2BA%2F7i3fbSTj25CO32mHP9x4WOMGycHBHNzt3J8p1wN8TNzV0e21zpdORmnI6ikQTm1Zu13sJkv0YmUIPMVhyWv1bbWCyWVvwoAv%2FAMlkzgcrQj2dCP9WIsXiE9M8wPF7NWWLH8Rpry0%2Fj03HC&X-Amz-Signature=caab7017f26b517a5a7f7235d2e5352ef4e239e9fc57f157e7fa8f15f3d03ef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG3Y2ZMH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIQMhVVSEkavHl2UHHtgG4uWor5TQ47YU04umhSVcHBAiARXv85VUNlKX%2BtbV0nPruC2A%2BJXkoxaN%2BDe3JD4FtXlSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMdzDJu%2F2pWuPNcr5sKtwDnBR4zEyY23jT2sbnnZ9tpHoeT1EFYqwwAz7l7DTFp%2BUWqC1lxzRjRoR9X0cX7ObPUeHsuLOcaLQnin%2FEf25cqKLstXES%2F5ro0KierxxYjzI%2F3iexxtcGvhrr%2F%2Bkn33llDAM1j%2B%2FxOp3BEFTFCGKhuthmzZ9qr78jIMpuUWFmuTa3xR%2FPQA439i86lZBNXWLfDwEIAcM3uLE9ekGgj6Z6kgO5BXST7U4kRJSAetojOJDDp3H1%2B42B%2BAZx%2BOxPJ2mdGIt%2FOY2cP9M0ri9psJi6HNi%2BLrMZT%2FzfRsUB5azxvWr5Ex%2B4xHHe7GJbKmnS1uwjA8ON7TFQh%2B9cW%2FGjoA5a3NBApKeQEZfTf1Jrh2nLuYC4HCJfncYxcx6npCUOmNeFb1irCRLx1t%2BmzWrQEuayjkJcYdGNvIe3LgeRewop9zwzkNjhL%2FYpIHEE7EbNGa6CJ4nkVIcQUqqLCDPXYMfbfpAVVW%2FG%2FkH2pnwz4smwjxswhHO%2FOGjO0uThZX7n9pwTxWXhRmde98mtV%2B9c7wHSAgLRHlp1vDVb1W6LAlGOHRCXN8TfSqQYxQM5%2Bxrd1U%2F8yldKOBlv%2BWKURs7eJrtam1AK6y%2BfMUu5YL4JYnCVBB5jOy%2Bon2viicZqj8kwpqG7xAY6pgEgiQNNWOlMuE8PHi6sHAC0vNDoXnHMs1IFoBeZIZYYQYIEK9gYyoXadV35bUA7%2FrxM1bOhJnScUvne2AM05ucWGCOCtDhk4ah4nFDlejzETq48qq%2Fs0dxl54n2WLv8sCHL0nbIyStjbjnzj7NDNKcxfw8oIJsrbinphfHAsFWTbGuJoTiYFKSJBLFCJU10zR24dtoLVHVXdoIrpZCIUA5AoaTIYGuW&X-Amz-Signature=2a45971475066e14129c7975176b0eb5c7e5d739a8119dcaa7aaa2de732af24c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665KLC2FI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiEehX3GH07EysDq9D0zflHM1LwOw4qHtVsXUofumNzAIgecUpilPkTuIL%2BLacXsdgf8yu952fMLQcFz6Pc%2BKygEMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDDuZ1t9%2BPVzAucfBlyrcAzgG7Z9XFPjPAe4UWqHRrZtSdaS1yJi%2FdQUOtPRHOixNnjgCOIRpV7ETC4Nc6jzhHG5zP4jKQcgFaioZ40dzYBvsP8uH9miNG%2BoNqyPRCndwKRyVpOA4uerrwA9hm5rqAPTTCd3Za8qNp8154QSfuuQK%2B1Ky0x1U6JFze5zyvqb07q36WFI7qeWarP7qtBOolY%2Fy5pHf1JXB47xoTj%2BPduz3Lf%2F18TjORZyuLyRxlb%2BhdcMzCQKaqLlUj%2BHjHk9acendU1xU%2FXPz8rPJZyR2L2V%2F4L697rJWk9WaJDrC6NsVuiJEDb2a1EvTTAQ55JRUfMzNxbK9G5qSf8Ljf9LEThV90WSCmWJRFtNqGXlqDbkXjnJ%2BFEjqosISbulDu5wMt3al8nG8ov%2B79AdbR9IpEp7nGR5GeZzWOfiRUykL04%2FFzBjeOIxLiD1gXHmEFHC3weB4ImLr8ybUlriLI%2FP6UQaOl1hH25fpHkXRxlEJSBJvAvvZZAsyYouaSfwci4uW46Z7O33bdTKx7yMYQYzjF50DtybsFEBm9ZlPQZpEpZnAyrJn%2FQdoxd%2FrrM9WHdMnD0kAif1Uh6lc1yEB3EVrdZQZ75y%2FYbeGX%2FR6AOxyZ9cgyyr71%2BxpYadOcAGHMLSeu8QGOqUBN4R5fM8nHcIpqqKR8uPGvTp7%2FfjBVUQCKiM3tR6Rej62m%2F4%2F7DVLvpdUzPeWZQtCyrhDjB4H4NS5iezCNUMFpzvXBPrORaHm0GAI%2FB6fdhqEmMWpHWnOgxF9slbeKwh0LPn3c9%2FTsTyLPXMALcDC3LrixCfEUj69fVodXCClGuzfg2%2Bzjw%2FGeTN833GDsNTVAM2PDQBdcrjNjoxB8j6ffGIaUnFW&X-Amz-Signature=597c76b41b560cde861ed8e2969b064557df46482874ab653f9c863202688a97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLMYUPZP%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDs94ig63LNaQ6qYD1KfjZjYdN29yB6lKYimT2z5bHn8AiEA5bBS9CgUNF95GOsjGPTgwHefRUVGeIJ69CO3rL9uyjQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEq4EmSetVLXxdNFoircAxa5J2JKdV%2FbsrAkJQq8FSjCCZFWCqYsV2%2Bua7AeTY9MMGZyWuKtwyJMI2rUlLkFiLOxiO3HsAE9rnPuhCWteu2bA0h5cAaZgxuwuzjm7rEr%2BQ8qEsFWtXJRT22Op%2Bhx%2B6sgiCyCxFeFdVWPeI86XZmBo7b98kq90SVmrEbDK7%2FtPHCLhEwOD6YuOUTmTVxHK8mIN6jsE1k98V4XS3PlRDdvHyvAYmikIKt%2BuXsM3bCo%2FbigvUBsWD3wxAdpMU4ITVGwsHy%2BlEH1ht0skhLc8ar2e41mi55J6ySsxRcnH5zg6MmSBouB%2FsVrOb8fgpMo56uh2rzUUUq6Y43dnII7tIVzGi8pxPf4XhA7UaFtQYI0eTj2q0xKAmoaGECZVTmg%2F%2F3rtMDqQMLdHLjSGa6lsB4nE0KSsLP0zd5FbWjrod%2FTCGk8LUpaeSIaeETJrGysKRZ3BySgO7I%2FBeQzPBZcZuen7w7gSIFnkTGmDe2bboPRhHPQLQ9h0pEF2cG8UbCro1IcdA%2FDMtpIGeSe%2BrUzDtKxDzR29p3NN2VhKzXyOmXwN%2Bp%2BTNQ26piAGKoLHn%2BbZBxUDnIzFuDgwH8u%2Bk94xB1GrV%2FWfkgNuUzGuqU9yqsI%2B2zSZdB8FUIaXCsBMJmmu8QGOqUBqyD6Gx2DGc%2FlWpnxTzM6Ps5x7ODFo0jc45XarynZDloHJoEHMEBzkhf6rouyrqNtgtVUVnPBIVgvWNmCo1MjOO6qN0%2BWZ%2FcjRvsa4BQg27YT2cxqgmJF67Hcaw%2FmRR4jjWxuiERL5WqYN3CzcFWk3q%2FzQVqjqYN7vcdsmWmxu%2FypYhVlpUHkunUHmMtEJScjRv0SFeo2n1KOkLU71v1NI8scrOFR&X-Amz-Signature=0dd060aff04b6ce556028dd4a3aa3573a4dc7c5a1d2d9b6cebcd7b96526aa928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCTNJTT2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T052002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrB0JyQZRvOTL%2FG6RPX%2FlQFduJ%2B1JuqigG6Hlh6MM3%2BQIhAI5ZU59GWP3NBPD8LFbgKMB3Mm3eHEIR06e%2BL85jhhvoKv8DCCQQABoMNjM3NDIzMTgzODA1Igyl3dCPuuge8Tj%2FNu4q3AMR3yRF44lL6c3Yg7Z3H1TSyDUQ0eX3eOflaNuC4codfAy%2FjY6V%2BZZA3OrOegZWH7AeNuOgzAtBmz4Xvi%2FHT5RAr4F6%2FUe%2FxwWdPdKRpOQmO7eWuXcvaAb5IosBi%2Bf9y4bZEbz69a8s9aPgLXgscqdHgY0mjd%2BSRy04sIO5XjsKOMY3smHIQvVIUqRXy265GvHovQR0J4QVRSAUUn0KxsvNIE93KUyhgMuIIjTHprB9n80LqPJu%2Bvik0mzXGQrKbye6YSaQVPm9A6YO7Hebgw6T5EzHnKKWf2jqeXYl58dfRIu%2BZmc3mjeQm%2B7yaH9GLJ9qHW3iev4QZD4fYfROF3xyNmo%2FE92p%2BgSy1%2BzpFjY8CENsAR%2Bk6l0WZT8gAZqc4cF3fJ8QHvAvCefFGbXdOFBSqHSrVbjDJtuMYPo2k8dzoAlSFyTDF3t%2By2wb%2BEfAZKRtBlmdg1U%2Bk1W%2Bd%2B0yJdUOGxKaic2dSAbv2QCilLDIFp7ZfRzrk7LEfE0WkN3LOPuI%2B4mubcgcDLxc5hpjcEPkrMYRg20UJA15V9HD3l%2BPOtlGKffQ28fgmmddSYqw2BJeow6fh9q5QL4K%2B%2BGOQSoTM%2BnNoGRH4agqDzInNrNrBeWnuXHlpuJ08HOdgzDZprvEBjqkASjSJuQueoTBgphfp2Q0YIOmNQIzg8QoUMTls81HwGuuuqml%2B5EY9tqPD%2BmG1N%2BC9XGUCPYxzFofQx1duFE%2Fvn0vDY%2BQuswGtLA5%2BYTKcvCAR5HZ9Xj9kx%2Fh0HztwkwcyF4JMNk2q%2BoDqfChLF7dsf4ZJD5CO3way9qgS7Vrsh5UuGilDG%2FXNpvT5%2F2ApToovY%2BOOn2NWEn2kIEc%2Fr1S1bHv5319&X-Amz-Signature=92eac087ad184c79cdf83644edfebef172c9abcfe1c9a9c3171f084953f34281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV4PJO4H%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbfToJWWyV%2BWbDRoqqP7Nn3wvarLUJagrQFh0wEK%2F%2FdgIhAIBnVER%2FH%2BPW9kzN%2BPYPGd1S6aD2L%2Fq6HsjGnPzNqrTLKv8DCCQQABoMNjM3NDIzMTgzODA1IgxXBDCQ27fGIGWv45Uq3AONHBFLNQDlSW%2FKqhteX6Bf7smJovZ80pTx5i4EGAazfiupr6IisjAPY9dXbCygYLJVJXXvPdMJv4%2FM%2BSyz3ZhHunM%2BqvFugl3rZ%2FKOecCHjzBXJp3hykptbd4UZ79C%2BH%2Bfxriss3%2Bxq0kbG7SMnV4bAOZY6776l%2BA%2FmEZcVXQNv2BNiy8%2FGRrgwbuQq801q6uP7dc7T9R%2F3fqm0s0kVxSJKQw3afF18xk4dOmcZMkO9PrDyvZ5qtxL4jQRWFTmc5VQut3YlgEZZaCjuBwfjMY71l4umfTto7OikIiRyth26dM9FeJuZYaeph%2FMmY6GmvEt%2FrShhgUHNQdwuQl19dn6Zli43vvCMLLTFRZKtrbG4pFKLxGlaC7cTHBE1Z%2BCPI7YsU5kE5KQCjGuEOO4fbX04QOE5BjR7s%2BCzpR0o0KnRmZdUkxkTeLKTh88EidGkypqCuIYUDo6eJII2aEaYqTiM1UxzOuSdA4gZx7s41WidVwdy6LT3Tne4vpQFvaeCq%2BXWQQAQcVFiTJ8fxxIKO9gVxERx%2BJoICkspE4nZzk1B3wa9SeAJujdXEfnLiJboe9%2BR7qQMnv%2FKktV0HBzDAlBvSSBMWx4DwFdU3VNYj8URKOwTJCWClKM%2FpnGujCfm7vEBjqkAUCfuE4yKdRn4lPbgOwAQMSmV4gw%2BQXdrckckzuVynJvgKKoVXm2B5wwoNFLr%2FAa5HOF4TajNNGfRVYVmtpiUzRh3LsIKLaHMPREmZ36SFxvcwezX1GEWZYUs%2Fpr32Wl%2FzAs2gKLo9e5VZ38kT7EB4X2QyR5auMX7kzBjFLxgUQhglpaWn%2FjwGvWctKs1uXRTuEezgvzhRG%2BPbMH9Ev3mCtHvPKo&X-Amz-Signature=df03c72ab751b8afe289098e4d40e2a12c79f7f2ac6d82a9d7e01babee0e1ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV4PJO4H%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbfToJWWyV%2BWbDRoqqP7Nn3wvarLUJagrQFh0wEK%2F%2FdgIhAIBnVER%2FH%2BPW9kzN%2BPYPGd1S6aD2L%2Fq6HsjGnPzNqrTLKv8DCCQQABoMNjM3NDIzMTgzODA1IgxXBDCQ27fGIGWv45Uq3AONHBFLNQDlSW%2FKqhteX6Bf7smJovZ80pTx5i4EGAazfiupr6IisjAPY9dXbCygYLJVJXXvPdMJv4%2FM%2BSyz3ZhHunM%2BqvFugl3rZ%2FKOecCHjzBXJp3hykptbd4UZ79C%2BH%2Bfxriss3%2Bxq0kbG7SMnV4bAOZY6776l%2BA%2FmEZcVXQNv2BNiy8%2FGRrgwbuQq801q6uP7dc7T9R%2F3fqm0s0kVxSJKQw3afF18xk4dOmcZMkO9PrDyvZ5qtxL4jQRWFTmc5VQut3YlgEZZaCjuBwfjMY71l4umfTto7OikIiRyth26dM9FeJuZYaeph%2FMmY6GmvEt%2FrShhgUHNQdwuQl19dn6Zli43vvCMLLTFRZKtrbG4pFKLxGlaC7cTHBE1Z%2BCPI7YsU5kE5KQCjGuEOO4fbX04QOE5BjR7s%2BCzpR0o0KnRmZdUkxkTeLKTh88EidGkypqCuIYUDo6eJII2aEaYqTiM1UxzOuSdA4gZx7s41WidVwdy6LT3Tne4vpQFvaeCq%2BXWQQAQcVFiTJ8fxxIKO9gVxERx%2BJoICkspE4nZzk1B3wa9SeAJujdXEfnLiJboe9%2BR7qQMnv%2FKktV0HBzDAlBvSSBMWx4DwFdU3VNYj8URKOwTJCWClKM%2FpnGujCfm7vEBjqkAUCfuE4yKdRn4lPbgOwAQMSmV4gw%2BQXdrckckzuVynJvgKKoVXm2B5wwoNFLr%2FAa5HOF4TajNNGfRVYVmtpiUzRh3LsIKLaHMPREmZ36SFxvcwezX1GEWZYUs%2Fpr32Wl%2FzAs2gKLo9e5VZ38kT7EB4X2QyR5auMX7kzBjFLxgUQhglpaWn%2FjwGvWctKs1uXRTuEezgvzhRG%2BPbMH9Ev3mCtHvPKo&X-Amz-Signature=80e625d7f34def0a277cb15179cfc99f6a1089eb5e129255822ae08932f4babe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QA43LWK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpDsMmjRXGJyAVdvndqe3WjbqkBHHMZFTDRcDtZxiD4AiBHo%2BdcCKNYdNcemzJE2vjImNCt5j0odwIUvMCuObAPHCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM0EM8dkXAB46VMWQzKtwD2AYcfZwe5gpzsgw0e7kyiCBLBMmclJlf1NO%2FDIZ3%2BDE8HOY7xNQUGUyZ%2Flm05aOA7wBCRMC%2FApydmJsZuhMVJLh9NSvBWzMc%2FVe801PuGy7Miog4wWy77gbnJnZso3qOFIwiw5Bqyk%2BsMFus1piQPEq4snzUkEeALFlhy1dN8njJDjdxvGvju9sBfD0aZ%2B1tKcZNacOOJRSM9nsRFuAiyaB7Dw83vftMkCkeoC%2Bug%2FPe74BkOL4c29pp%2BSgSPTY0TUDjBKb8Bcy1uDbhlCCivmcs5bcg1TUzmAuLM%2B56HD9Jm4DctiGCcr8jdsMVWGnqdJKTPJ4v7%2FOlsDIh8fk%2BSWDMMK1Se%2BlLefWYd9kyCJOxClOOSlcRI7yPV6VDau7XRp2QHV5%2B1uu8Qjb7VDdlw55P13B4DGdgoAYiVe4i9GDvQCBkXPLhpKvkCP87j0hCvUaJi5eSCAnbezbw0gA553H8uf0E5eoFKqKKK4nHxlJJ9xIjJR%2FlL2F57Z7oXIebf1Q2aEdcagYbDUYtI3RvUpQdJEtIqGlMHIt6AWcZhA4sJFHm4iZA6MzCMWsfWy48QplC0qAHbWP3HAQLx8ddZeX%2BRRu%2FpGxcooxW0jwqzOeXddtLHHXr9%2FsNzbgwwZy7xAY6pgFIrZNKT%2F80hDcSV9oP79jHjVU%2BWpsrnMfzknTjCh4olPSINBWhsb1P6wKAmFA%2F3ZjWvnE7n9jFbHZ25tqZqbi6KWR%2F2afnRAK%2BUfSa3w6FM%2B5S%2FqB6AukHUtTok7xogeC6k0CYC%2FnryCfzC3hFFp4uMILhoCk5ZuXUdZg2nm7l7h6pN12Q7%2B0LM3wORlI308uXWpV%2BxcEEB7nhjK%2Fim0Tl68htRzHr&X-Amz-Signature=78dc96b55b196d6df7294d6ff7555e12afdc08e95ba317ebb8e87182189b9154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QA43LWK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpDsMmjRXGJyAVdvndqe3WjbqkBHHMZFTDRcDtZxiD4AiBHo%2BdcCKNYdNcemzJE2vjImNCt5j0odwIUvMCuObAPHCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM0EM8dkXAB46VMWQzKtwD2AYcfZwe5gpzsgw0e7kyiCBLBMmclJlf1NO%2FDIZ3%2BDE8HOY7xNQUGUyZ%2Flm05aOA7wBCRMC%2FApydmJsZuhMVJLh9NSvBWzMc%2FVe801PuGy7Miog4wWy77gbnJnZso3qOFIwiw5Bqyk%2BsMFus1piQPEq4snzUkEeALFlhy1dN8njJDjdxvGvju9sBfD0aZ%2B1tKcZNacOOJRSM9nsRFuAiyaB7Dw83vftMkCkeoC%2Bug%2FPe74BkOL4c29pp%2BSgSPTY0TUDjBKb8Bcy1uDbhlCCivmcs5bcg1TUzmAuLM%2B56HD9Jm4DctiGCcr8jdsMVWGnqdJKTPJ4v7%2FOlsDIh8fk%2BSWDMMK1Se%2BlLefWYd9kyCJOxClOOSlcRI7yPV6VDau7XRp2QHV5%2B1uu8Qjb7VDdlw55P13B4DGdgoAYiVe4i9GDvQCBkXPLhpKvkCP87j0hCvUaJi5eSCAnbezbw0gA553H8uf0E5eoFKqKKK4nHxlJJ9xIjJR%2FlL2F57Z7oXIebf1Q2aEdcagYbDUYtI3RvUpQdJEtIqGlMHIt6AWcZhA4sJFHm4iZA6MzCMWsfWy48QplC0qAHbWP3HAQLx8ddZeX%2BRRu%2FpGxcooxW0jwqzOeXddtLHHXr9%2FsNzbgwwZy7xAY6pgFIrZNKT%2F80hDcSV9oP79jHjVU%2BWpsrnMfzknTjCh4olPSINBWhsb1P6wKAmFA%2F3ZjWvnE7n9jFbHZ25tqZqbi6KWR%2F2afnRAK%2BUfSa3w6FM%2B5S%2FqB6AukHUtTok7xogeC6k0CYC%2FnryCfzC3hFFp4uMILhoCk5ZuXUdZg2nm7l7h6pN12Q7%2B0LM3wORlI308uXWpV%2BxcEEB7nhjK%2Fim0Tl68htRzHr&X-Amz-Signature=4c09c6b468a7954c174d715e520d517fe4bee203ebd792f873e64b8ea68040d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QA43LWK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpDsMmjRXGJyAVdvndqe3WjbqkBHHMZFTDRcDtZxiD4AiBHo%2BdcCKNYdNcemzJE2vjImNCt5j0odwIUvMCuObAPHCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM0EM8dkXAB46VMWQzKtwD2AYcfZwe5gpzsgw0e7kyiCBLBMmclJlf1NO%2FDIZ3%2BDE8HOY7xNQUGUyZ%2Flm05aOA7wBCRMC%2FApydmJsZuhMVJLh9NSvBWzMc%2FVe801PuGy7Miog4wWy77gbnJnZso3qOFIwiw5Bqyk%2BsMFus1piQPEq4snzUkEeALFlhy1dN8njJDjdxvGvju9sBfD0aZ%2B1tKcZNacOOJRSM9nsRFuAiyaB7Dw83vftMkCkeoC%2Bug%2FPe74BkOL4c29pp%2BSgSPTY0TUDjBKb8Bcy1uDbhlCCivmcs5bcg1TUzmAuLM%2B56HD9Jm4DctiGCcr8jdsMVWGnqdJKTPJ4v7%2FOlsDIh8fk%2BSWDMMK1Se%2BlLefWYd9kyCJOxClOOSlcRI7yPV6VDau7XRp2QHV5%2B1uu8Qjb7VDdlw55P13B4DGdgoAYiVe4i9GDvQCBkXPLhpKvkCP87j0hCvUaJi5eSCAnbezbw0gA553H8uf0E5eoFKqKKK4nHxlJJ9xIjJR%2FlL2F57Z7oXIebf1Q2aEdcagYbDUYtI3RvUpQdJEtIqGlMHIt6AWcZhA4sJFHm4iZA6MzCMWsfWy48QplC0qAHbWP3HAQLx8ddZeX%2BRRu%2FpGxcooxW0jwqzOeXddtLHHXr9%2FsNzbgwwZy7xAY6pgFIrZNKT%2F80hDcSV9oP79jHjVU%2BWpsrnMfzknTjCh4olPSINBWhsb1P6wKAmFA%2F3ZjWvnE7n9jFbHZ25tqZqbi6KWR%2F2afnRAK%2BUfSa3w6FM%2B5S%2FqB6AukHUtTok7xogeC6k0CYC%2FnryCfzC3hFFp4uMILhoCk5ZuXUdZg2nm7l7h6pN12Q7%2B0LM3wORlI308uXWpV%2BxcEEB7nhjK%2Fim0Tl68htRzHr&X-Amz-Signature=c220754f481d29d258a9a061b9af01573fb813d11b98da930790a1bf4f2bb6e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QA43LWK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpDsMmjRXGJyAVdvndqe3WjbqkBHHMZFTDRcDtZxiD4AiBHo%2BdcCKNYdNcemzJE2vjImNCt5j0odwIUvMCuObAPHCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM0EM8dkXAB46VMWQzKtwD2AYcfZwe5gpzsgw0e7kyiCBLBMmclJlf1NO%2FDIZ3%2BDE8HOY7xNQUGUyZ%2Flm05aOA7wBCRMC%2FApydmJsZuhMVJLh9NSvBWzMc%2FVe801PuGy7Miog4wWy77gbnJnZso3qOFIwiw5Bqyk%2BsMFus1piQPEq4snzUkEeALFlhy1dN8njJDjdxvGvju9sBfD0aZ%2B1tKcZNacOOJRSM9nsRFuAiyaB7Dw83vftMkCkeoC%2Bug%2FPe74BkOL4c29pp%2BSgSPTY0TUDjBKb8Bcy1uDbhlCCivmcs5bcg1TUzmAuLM%2B56HD9Jm4DctiGCcr8jdsMVWGnqdJKTPJ4v7%2FOlsDIh8fk%2BSWDMMK1Se%2BlLefWYd9kyCJOxClOOSlcRI7yPV6VDau7XRp2QHV5%2B1uu8Qjb7VDdlw55P13B4DGdgoAYiVe4i9GDvQCBkXPLhpKvkCP87j0hCvUaJi5eSCAnbezbw0gA553H8uf0E5eoFKqKKK4nHxlJJ9xIjJR%2FlL2F57Z7oXIebf1Q2aEdcagYbDUYtI3RvUpQdJEtIqGlMHIt6AWcZhA4sJFHm4iZA6MzCMWsfWy48QplC0qAHbWP3HAQLx8ddZeX%2BRRu%2FpGxcooxW0jwqzOeXddtLHHXr9%2FsNzbgwwZy7xAY6pgFIrZNKT%2F80hDcSV9oP79jHjVU%2BWpsrnMfzknTjCh4olPSINBWhsb1P6wKAmFA%2F3ZjWvnE7n9jFbHZ25tqZqbi6KWR%2F2afnRAK%2BUfSa3w6FM%2B5S%2FqB6AukHUtTok7xogeC6k0CYC%2FnryCfzC3hFFp4uMILhoCk5ZuXUdZg2nm7l7h6pN12Q7%2B0LM3wORlI308uXWpV%2BxcEEB7nhjK%2Fim0Tl68htRzHr&X-Amz-Signature=c4bedd433da543f37d102ed035cc8b60d2b49f83215c1b632b43c1c15a74d88c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QA43LWK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpDsMmjRXGJyAVdvndqe3WjbqkBHHMZFTDRcDtZxiD4AiBHo%2BdcCKNYdNcemzJE2vjImNCt5j0odwIUvMCuObAPHCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM0EM8dkXAB46VMWQzKtwD2AYcfZwe5gpzsgw0e7kyiCBLBMmclJlf1NO%2FDIZ3%2BDE8HOY7xNQUGUyZ%2Flm05aOA7wBCRMC%2FApydmJsZuhMVJLh9NSvBWzMc%2FVe801PuGy7Miog4wWy77gbnJnZso3qOFIwiw5Bqyk%2BsMFus1piQPEq4snzUkEeALFlhy1dN8njJDjdxvGvju9sBfD0aZ%2B1tKcZNacOOJRSM9nsRFuAiyaB7Dw83vftMkCkeoC%2Bug%2FPe74BkOL4c29pp%2BSgSPTY0TUDjBKb8Bcy1uDbhlCCivmcs5bcg1TUzmAuLM%2B56HD9Jm4DctiGCcr8jdsMVWGnqdJKTPJ4v7%2FOlsDIh8fk%2BSWDMMK1Se%2BlLefWYd9kyCJOxClOOSlcRI7yPV6VDau7XRp2QHV5%2B1uu8Qjb7VDdlw55P13B4DGdgoAYiVe4i9GDvQCBkXPLhpKvkCP87j0hCvUaJi5eSCAnbezbw0gA553H8uf0E5eoFKqKKK4nHxlJJ9xIjJR%2FlL2F57Z7oXIebf1Q2aEdcagYbDUYtI3RvUpQdJEtIqGlMHIt6AWcZhA4sJFHm4iZA6MzCMWsfWy48QplC0qAHbWP3HAQLx8ddZeX%2BRRu%2FpGxcooxW0jwqzOeXddtLHHXr9%2FsNzbgwwZy7xAY6pgFIrZNKT%2F80hDcSV9oP79jHjVU%2BWpsrnMfzknTjCh4olPSINBWhsb1P6wKAmFA%2F3ZjWvnE7n9jFbHZ25tqZqbi6KWR%2F2afnRAK%2BUfSa3w6FM%2B5S%2FqB6AukHUtTok7xogeC6k0CYC%2FnryCfzC3hFFp4uMILhoCk5ZuXUdZg2nm7l7h6pN12Q7%2B0LM3wORlI308uXWpV%2BxcEEB7nhjK%2Fim0Tl68htRzHr&X-Amz-Signature=e6280cf9b1e3173fb329d55168b6a8477c8caf5a72b00b85595dea7424cf21b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QA43LWK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpDsMmjRXGJyAVdvndqe3WjbqkBHHMZFTDRcDtZxiD4AiBHo%2BdcCKNYdNcemzJE2vjImNCt5j0odwIUvMCuObAPHCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM0EM8dkXAB46VMWQzKtwD2AYcfZwe5gpzsgw0e7kyiCBLBMmclJlf1NO%2FDIZ3%2BDE8HOY7xNQUGUyZ%2Flm05aOA7wBCRMC%2FApydmJsZuhMVJLh9NSvBWzMc%2FVe801PuGy7Miog4wWy77gbnJnZso3qOFIwiw5Bqyk%2BsMFus1piQPEq4snzUkEeALFlhy1dN8njJDjdxvGvju9sBfD0aZ%2B1tKcZNacOOJRSM9nsRFuAiyaB7Dw83vftMkCkeoC%2Bug%2FPe74BkOL4c29pp%2BSgSPTY0TUDjBKb8Bcy1uDbhlCCivmcs5bcg1TUzmAuLM%2B56HD9Jm4DctiGCcr8jdsMVWGnqdJKTPJ4v7%2FOlsDIh8fk%2BSWDMMK1Se%2BlLefWYd9kyCJOxClOOSlcRI7yPV6VDau7XRp2QHV5%2B1uu8Qjb7VDdlw55P13B4DGdgoAYiVe4i9GDvQCBkXPLhpKvkCP87j0hCvUaJi5eSCAnbezbw0gA553H8uf0E5eoFKqKKK4nHxlJJ9xIjJR%2FlL2F57Z7oXIebf1Q2aEdcagYbDUYtI3RvUpQdJEtIqGlMHIt6AWcZhA4sJFHm4iZA6MzCMWsfWy48QplC0qAHbWP3HAQLx8ddZeX%2BRRu%2FpGxcooxW0jwqzOeXddtLHHXr9%2FsNzbgwwZy7xAY6pgFIrZNKT%2F80hDcSV9oP79jHjVU%2BWpsrnMfzknTjCh4olPSINBWhsb1P6wKAmFA%2F3ZjWvnE7n9jFbHZ25tqZqbi6KWR%2F2afnRAK%2BUfSa3w6FM%2B5S%2FqB6AukHUtTok7xogeC6k0CYC%2FnryCfzC3hFFp4uMILhoCk5ZuXUdZg2nm7l7h6pN12Q7%2B0LM3wORlI308uXWpV%2BxcEEB7nhjK%2Fim0Tl68htRzHr&X-Amz-Signature=dd75fd66b50669784409d050a016d058791c5640ffd502bdfd9d4a7d11357a68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QA43LWK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpDsMmjRXGJyAVdvndqe3WjbqkBHHMZFTDRcDtZxiD4AiBHo%2BdcCKNYdNcemzJE2vjImNCt5j0odwIUvMCuObAPHCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM0EM8dkXAB46VMWQzKtwD2AYcfZwe5gpzsgw0e7kyiCBLBMmclJlf1NO%2FDIZ3%2BDE8HOY7xNQUGUyZ%2Flm05aOA7wBCRMC%2FApydmJsZuhMVJLh9NSvBWzMc%2FVe801PuGy7Miog4wWy77gbnJnZso3qOFIwiw5Bqyk%2BsMFus1piQPEq4snzUkEeALFlhy1dN8njJDjdxvGvju9sBfD0aZ%2B1tKcZNacOOJRSM9nsRFuAiyaB7Dw83vftMkCkeoC%2Bug%2FPe74BkOL4c29pp%2BSgSPTY0TUDjBKb8Bcy1uDbhlCCivmcs5bcg1TUzmAuLM%2B56HD9Jm4DctiGCcr8jdsMVWGnqdJKTPJ4v7%2FOlsDIh8fk%2BSWDMMK1Se%2BlLefWYd9kyCJOxClOOSlcRI7yPV6VDau7XRp2QHV5%2B1uu8Qjb7VDdlw55P13B4DGdgoAYiVe4i9GDvQCBkXPLhpKvkCP87j0hCvUaJi5eSCAnbezbw0gA553H8uf0E5eoFKqKKK4nHxlJJ9xIjJR%2FlL2F57Z7oXIebf1Q2aEdcagYbDUYtI3RvUpQdJEtIqGlMHIt6AWcZhA4sJFHm4iZA6MzCMWsfWy48QplC0qAHbWP3HAQLx8ddZeX%2BRRu%2FpGxcooxW0jwqzOeXddtLHHXr9%2FsNzbgwwZy7xAY6pgFIrZNKT%2F80hDcSV9oP79jHjVU%2BWpsrnMfzknTjCh4olPSINBWhsb1P6wKAmFA%2F3ZjWvnE7n9jFbHZ25tqZqbi6KWR%2F2afnRAK%2BUfSa3w6FM%2B5S%2FqB6AukHUtTok7xogeC6k0CYC%2FnryCfzC3hFFp4uMILhoCk5ZuXUdZg2nm7l7h6pN12Q7%2B0LM3wORlI308uXWpV%2BxcEEB7nhjK%2Fim0Tl68htRzHr&X-Amz-Signature=c220754f481d29d258a9a061b9af01573fb813d11b98da930790a1bf4f2bb6e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QA43LWK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpDsMmjRXGJyAVdvndqe3WjbqkBHHMZFTDRcDtZxiD4AiBHo%2BdcCKNYdNcemzJE2vjImNCt5j0odwIUvMCuObAPHCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM0EM8dkXAB46VMWQzKtwD2AYcfZwe5gpzsgw0e7kyiCBLBMmclJlf1NO%2FDIZ3%2BDE8HOY7xNQUGUyZ%2Flm05aOA7wBCRMC%2FApydmJsZuhMVJLh9NSvBWzMc%2FVe801PuGy7Miog4wWy77gbnJnZso3qOFIwiw5Bqyk%2BsMFus1piQPEq4snzUkEeALFlhy1dN8njJDjdxvGvju9sBfD0aZ%2B1tKcZNacOOJRSM9nsRFuAiyaB7Dw83vftMkCkeoC%2Bug%2FPe74BkOL4c29pp%2BSgSPTY0TUDjBKb8Bcy1uDbhlCCivmcs5bcg1TUzmAuLM%2B56HD9Jm4DctiGCcr8jdsMVWGnqdJKTPJ4v7%2FOlsDIh8fk%2BSWDMMK1Se%2BlLefWYd9kyCJOxClOOSlcRI7yPV6VDau7XRp2QHV5%2B1uu8Qjb7VDdlw55P13B4DGdgoAYiVe4i9GDvQCBkXPLhpKvkCP87j0hCvUaJi5eSCAnbezbw0gA553H8uf0E5eoFKqKKK4nHxlJJ9xIjJR%2FlL2F57Z7oXIebf1Q2aEdcagYbDUYtI3RvUpQdJEtIqGlMHIt6AWcZhA4sJFHm4iZA6MzCMWsfWy48QplC0qAHbWP3HAQLx8ddZeX%2BRRu%2FpGxcooxW0jwqzOeXddtLHHXr9%2FsNzbgwwZy7xAY6pgFIrZNKT%2F80hDcSV9oP79jHjVU%2BWpsrnMfzknTjCh4olPSINBWhsb1P6wKAmFA%2F3ZjWvnE7n9jFbHZ25tqZqbi6KWR%2F2afnRAK%2BUfSa3w6FM%2B5S%2FqB6AukHUtTok7xogeC6k0CYC%2FnryCfzC3hFFp4uMILhoCk5ZuXUdZg2nm7l7h6pN12Q7%2B0LM3wORlI308uXWpV%2BxcEEB7nhjK%2Fim0Tl68htRzHr&X-Amz-Signature=207c4e543c53c53faba29edd27b28bfd10c8accfa858b87a45682fee778490ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QA43LWK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpDsMmjRXGJyAVdvndqe3WjbqkBHHMZFTDRcDtZxiD4AiBHo%2BdcCKNYdNcemzJE2vjImNCt5j0odwIUvMCuObAPHCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM0EM8dkXAB46VMWQzKtwD2AYcfZwe5gpzsgw0e7kyiCBLBMmclJlf1NO%2FDIZ3%2BDE8HOY7xNQUGUyZ%2Flm05aOA7wBCRMC%2FApydmJsZuhMVJLh9NSvBWzMc%2FVe801PuGy7Miog4wWy77gbnJnZso3qOFIwiw5Bqyk%2BsMFus1piQPEq4snzUkEeALFlhy1dN8njJDjdxvGvju9sBfD0aZ%2B1tKcZNacOOJRSM9nsRFuAiyaB7Dw83vftMkCkeoC%2Bug%2FPe74BkOL4c29pp%2BSgSPTY0TUDjBKb8Bcy1uDbhlCCivmcs5bcg1TUzmAuLM%2B56HD9Jm4DctiGCcr8jdsMVWGnqdJKTPJ4v7%2FOlsDIh8fk%2BSWDMMK1Se%2BlLefWYd9kyCJOxClOOSlcRI7yPV6VDau7XRp2QHV5%2B1uu8Qjb7VDdlw55P13B4DGdgoAYiVe4i9GDvQCBkXPLhpKvkCP87j0hCvUaJi5eSCAnbezbw0gA553H8uf0E5eoFKqKKK4nHxlJJ9xIjJR%2FlL2F57Z7oXIebf1Q2aEdcagYbDUYtI3RvUpQdJEtIqGlMHIt6AWcZhA4sJFHm4iZA6MzCMWsfWy48QplC0qAHbWP3HAQLx8ddZeX%2BRRu%2FpGxcooxW0jwqzOeXddtLHHXr9%2FsNzbgwwZy7xAY6pgFIrZNKT%2F80hDcSV9oP79jHjVU%2BWpsrnMfzknTjCh4olPSINBWhsb1P6wKAmFA%2F3ZjWvnE7n9jFbHZ25tqZqbi6KWR%2F2afnRAK%2BUfSa3w6FM%2B5S%2FqB6AukHUtTok7xogeC6k0CYC%2FnryCfzC3hFFp4uMILhoCk5ZuXUdZg2nm7l7h6pN12Q7%2B0LM3wORlI308uXWpV%2BxcEEB7nhjK%2Fim0Tl68htRzHr&X-Amz-Signature=5d401b13d749a36110fc2803f811a325b301c290bcfa8c991156d2a36fd6a4f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QA43LWK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpDsMmjRXGJyAVdvndqe3WjbqkBHHMZFTDRcDtZxiD4AiBHo%2BdcCKNYdNcemzJE2vjImNCt5j0odwIUvMCuObAPHCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM0EM8dkXAB46VMWQzKtwD2AYcfZwe5gpzsgw0e7kyiCBLBMmclJlf1NO%2FDIZ3%2BDE8HOY7xNQUGUyZ%2Flm05aOA7wBCRMC%2FApydmJsZuhMVJLh9NSvBWzMc%2FVe801PuGy7Miog4wWy77gbnJnZso3qOFIwiw5Bqyk%2BsMFus1piQPEq4snzUkEeALFlhy1dN8njJDjdxvGvju9sBfD0aZ%2B1tKcZNacOOJRSM9nsRFuAiyaB7Dw83vftMkCkeoC%2Bug%2FPe74BkOL4c29pp%2BSgSPTY0TUDjBKb8Bcy1uDbhlCCivmcs5bcg1TUzmAuLM%2B56HD9Jm4DctiGCcr8jdsMVWGnqdJKTPJ4v7%2FOlsDIh8fk%2BSWDMMK1Se%2BlLefWYd9kyCJOxClOOSlcRI7yPV6VDau7XRp2QHV5%2B1uu8Qjb7VDdlw55P13B4DGdgoAYiVe4i9GDvQCBkXPLhpKvkCP87j0hCvUaJi5eSCAnbezbw0gA553H8uf0E5eoFKqKKK4nHxlJJ9xIjJR%2FlL2F57Z7oXIebf1Q2aEdcagYbDUYtI3RvUpQdJEtIqGlMHIt6AWcZhA4sJFHm4iZA6MzCMWsfWy48QplC0qAHbWP3HAQLx8ddZeX%2BRRu%2FpGxcooxW0jwqzOeXddtLHHXr9%2FsNzbgwwZy7xAY6pgFIrZNKT%2F80hDcSV9oP79jHjVU%2BWpsrnMfzknTjCh4olPSINBWhsb1P6wKAmFA%2F3ZjWvnE7n9jFbHZ25tqZqbi6KWR%2F2afnRAK%2BUfSa3w6FM%2B5S%2FqB6AukHUtTok7xogeC6k0CYC%2FnryCfzC3hFFp4uMILhoCk5ZuXUdZg2nm7l7h6pN12Q7%2B0LM3wORlI308uXWpV%2BxcEEB7nhjK%2Fim0Tl68htRzHr&X-Amz-Signature=62d6b6b88ec9e1d8a2a6a626170a82370f642ca9e0b4133baa17e77058e0fe81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
