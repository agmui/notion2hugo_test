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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKAX54FA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHJPJE4nrb4dP0Yavo2h5IY%2F8MN7fo3XVQ0TUJw3F811AiAJ8aPWiXSlWYXB0Bf7TQQUKDPYdAczO0hPbRIB2UeUEyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMDEpKEfWsnoiqtl7JKtwDmJOt1kQFNDdYg8JeOiq7Gk9C4u15fgTlQXwJUhPTbbiPx2HUIfWEu3A9YdMS8t%2BcrbR%2B07hgqCv3PfSRF5oS4grqWD7NYYAywk5ktOwVAj2RjhjnXxNdLV6tZTbKJsxDKC6ODw2P4kH%2BaX94n9O6JJc4ONEu408eVuj4kJfF27bsTDmW1n0cDfVOWb2oZ69HIiYDOsDkpTp0T%2F78MRqZjqZr7pUW89mQ%2FhfBj%2FpLjnZ6CTOQbMC06tuN9G%2BfycpS7Q7lohVNlU%2BghXX52oQ07FST6rAdlfstKq9w2ONEP82eBdfyMJIOygJBIvpUo4ogAQ8GtDbdNuZsjs7tCcuDWKgO3pXgRAvk8Am2If6SHE%2BMDDA9gc3JYK%2B5OVIxa2kk5i0HYFbA6EwwjTq77GmoE6c3E1JKQPwI%2BdtcsGvlNba%2F0JcEgyPBrhrbFgLh7VrniVip6F2WsqkkK9q%2BfSBxSy1WvuGi3jW2YDa6Q5X1gPzVz5M5xlnmnmvWDV4oHwMhUAE7RWASHjJZPTenFlsPVWGTA%2BdAGEzKCKEllxy8qUAbbPPTFHiLU3l40lUrl%2BsvAVvNpmhwPZTgkHaOe87LDBNdH6%2B6XM%2B6AypXDw4jsALy5Bxem4vEtP4SSC8wicL4xAY6pgFfDRXUZig3%2B00IqND1IFf4Yd%2BdZ%2FXqBI6l972VcUnq3uCnAtJyL0Y00pa25LgHA1xiX7a0ZQ6FgVLvycTscQyJmjIZYQZwj%2BL%2B9f%2F%2FyLKfaR6LceP4NEKONd3AnclPmkDJpbo4WTYEG3rxf64VUtmm2HpZvO%2FOE2XEvvPqfahzcJedmvV3mYpYjuoTwT7M3nGxki4Lua14k312leToNyjzc%2FrX1yrh&X-Amz-Signature=d4a6c63ecbfc596a0613dd1581c68ec1698430504333fcc99e458e3fead3f10f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKAX54FA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHJPJE4nrb4dP0Yavo2h5IY%2F8MN7fo3XVQ0TUJw3F811AiAJ8aPWiXSlWYXB0Bf7TQQUKDPYdAczO0hPbRIB2UeUEyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMDEpKEfWsnoiqtl7JKtwDmJOt1kQFNDdYg8JeOiq7Gk9C4u15fgTlQXwJUhPTbbiPx2HUIfWEu3A9YdMS8t%2BcrbR%2B07hgqCv3PfSRF5oS4grqWD7NYYAywk5ktOwVAj2RjhjnXxNdLV6tZTbKJsxDKC6ODw2P4kH%2BaX94n9O6JJc4ONEu408eVuj4kJfF27bsTDmW1n0cDfVOWb2oZ69HIiYDOsDkpTp0T%2F78MRqZjqZr7pUW89mQ%2FhfBj%2FpLjnZ6CTOQbMC06tuN9G%2BfycpS7Q7lohVNlU%2BghXX52oQ07FST6rAdlfstKq9w2ONEP82eBdfyMJIOygJBIvpUo4ogAQ8GtDbdNuZsjs7tCcuDWKgO3pXgRAvk8Am2If6SHE%2BMDDA9gc3JYK%2B5OVIxa2kk5i0HYFbA6EwwjTq77GmoE6c3E1JKQPwI%2BdtcsGvlNba%2F0JcEgyPBrhrbFgLh7VrniVip6F2WsqkkK9q%2BfSBxSy1WvuGi3jW2YDa6Q5X1gPzVz5M5xlnmnmvWDV4oHwMhUAE7RWASHjJZPTenFlsPVWGTA%2BdAGEzKCKEllxy8qUAbbPPTFHiLU3l40lUrl%2BsvAVvNpmhwPZTgkHaOe87LDBNdH6%2B6XM%2B6AypXDw4jsALy5Bxem4vEtP4SSC8wicL4xAY6pgFfDRXUZig3%2B00IqND1IFf4Yd%2BdZ%2FXqBI6l972VcUnq3uCnAtJyL0Y00pa25LgHA1xiX7a0ZQ6FgVLvycTscQyJmjIZYQZwj%2BL%2B9f%2F%2FyLKfaR6LceP4NEKONd3AnclPmkDJpbo4WTYEG3rxf64VUtmm2HpZvO%2FOE2XEvvPqfahzcJedmvV3mYpYjuoTwT7M3nGxki4Lua14k312leToNyjzc%2FrX1yrh&X-Amz-Signature=692b9b5fe89e1abe242e86a613e198ab89f8be5020e8aebf9d6e0415ba393609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKAX54FA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHJPJE4nrb4dP0Yavo2h5IY%2F8MN7fo3XVQ0TUJw3F811AiAJ8aPWiXSlWYXB0Bf7TQQUKDPYdAczO0hPbRIB2UeUEyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMDEpKEfWsnoiqtl7JKtwDmJOt1kQFNDdYg8JeOiq7Gk9C4u15fgTlQXwJUhPTbbiPx2HUIfWEu3A9YdMS8t%2BcrbR%2B07hgqCv3PfSRF5oS4grqWD7NYYAywk5ktOwVAj2RjhjnXxNdLV6tZTbKJsxDKC6ODw2P4kH%2BaX94n9O6JJc4ONEu408eVuj4kJfF27bsTDmW1n0cDfVOWb2oZ69HIiYDOsDkpTp0T%2F78MRqZjqZr7pUW89mQ%2FhfBj%2FpLjnZ6CTOQbMC06tuN9G%2BfycpS7Q7lohVNlU%2BghXX52oQ07FST6rAdlfstKq9w2ONEP82eBdfyMJIOygJBIvpUo4ogAQ8GtDbdNuZsjs7tCcuDWKgO3pXgRAvk8Am2If6SHE%2BMDDA9gc3JYK%2B5OVIxa2kk5i0HYFbA6EwwjTq77GmoE6c3E1JKQPwI%2BdtcsGvlNba%2F0JcEgyPBrhrbFgLh7VrniVip6F2WsqkkK9q%2BfSBxSy1WvuGi3jW2YDa6Q5X1gPzVz5M5xlnmnmvWDV4oHwMhUAE7RWASHjJZPTenFlsPVWGTA%2BdAGEzKCKEllxy8qUAbbPPTFHiLU3l40lUrl%2BsvAVvNpmhwPZTgkHaOe87LDBNdH6%2B6XM%2B6AypXDw4jsALy5Bxem4vEtP4SSC8wicL4xAY6pgFfDRXUZig3%2B00IqND1IFf4Yd%2BdZ%2FXqBI6l972VcUnq3uCnAtJyL0Y00pa25LgHA1xiX7a0ZQ6FgVLvycTscQyJmjIZYQZwj%2BL%2B9f%2F%2FyLKfaR6LceP4NEKONd3AnclPmkDJpbo4WTYEG3rxf64VUtmm2HpZvO%2FOE2XEvvPqfahzcJedmvV3mYpYjuoTwT7M3nGxki4Lua14k312leToNyjzc%2FrX1yrh&X-Amz-Signature=b4f5000bf0b49d10f362640e1dae0fab4bcb3206f9795f4aabc5f6e907c8242f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKAX54FA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHJPJE4nrb4dP0Yavo2h5IY%2F8MN7fo3XVQ0TUJw3F811AiAJ8aPWiXSlWYXB0Bf7TQQUKDPYdAczO0hPbRIB2UeUEyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMDEpKEfWsnoiqtl7JKtwDmJOt1kQFNDdYg8JeOiq7Gk9C4u15fgTlQXwJUhPTbbiPx2HUIfWEu3A9YdMS8t%2BcrbR%2B07hgqCv3PfSRF5oS4grqWD7NYYAywk5ktOwVAj2RjhjnXxNdLV6tZTbKJsxDKC6ODw2P4kH%2BaX94n9O6JJc4ONEu408eVuj4kJfF27bsTDmW1n0cDfVOWb2oZ69HIiYDOsDkpTp0T%2F78MRqZjqZr7pUW89mQ%2FhfBj%2FpLjnZ6CTOQbMC06tuN9G%2BfycpS7Q7lohVNlU%2BghXX52oQ07FST6rAdlfstKq9w2ONEP82eBdfyMJIOygJBIvpUo4ogAQ8GtDbdNuZsjs7tCcuDWKgO3pXgRAvk8Am2If6SHE%2BMDDA9gc3JYK%2B5OVIxa2kk5i0HYFbA6EwwjTq77GmoE6c3E1JKQPwI%2BdtcsGvlNba%2F0JcEgyPBrhrbFgLh7VrniVip6F2WsqkkK9q%2BfSBxSy1WvuGi3jW2YDa6Q5X1gPzVz5M5xlnmnmvWDV4oHwMhUAE7RWASHjJZPTenFlsPVWGTA%2BdAGEzKCKEllxy8qUAbbPPTFHiLU3l40lUrl%2BsvAVvNpmhwPZTgkHaOe87LDBNdH6%2B6XM%2B6AypXDw4jsALy5Bxem4vEtP4SSC8wicL4xAY6pgFfDRXUZig3%2B00IqND1IFf4Yd%2BdZ%2FXqBI6l972VcUnq3uCnAtJyL0Y00pa25LgHA1xiX7a0ZQ6FgVLvycTscQyJmjIZYQZwj%2BL%2B9f%2F%2FyLKfaR6LceP4NEKONd3AnclPmkDJpbo4WTYEG3rxf64VUtmm2HpZvO%2FOE2XEvvPqfahzcJedmvV3mYpYjuoTwT7M3nGxki4Lua14k312leToNyjzc%2FrX1yrh&X-Amz-Signature=03d750f35c4e5d0c25e6e778c7e3c49a768a921bd185862bee01321e04c518aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKAX54FA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHJPJE4nrb4dP0Yavo2h5IY%2F8MN7fo3XVQ0TUJw3F811AiAJ8aPWiXSlWYXB0Bf7TQQUKDPYdAczO0hPbRIB2UeUEyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMDEpKEfWsnoiqtl7JKtwDmJOt1kQFNDdYg8JeOiq7Gk9C4u15fgTlQXwJUhPTbbiPx2HUIfWEu3A9YdMS8t%2BcrbR%2B07hgqCv3PfSRF5oS4grqWD7NYYAywk5ktOwVAj2RjhjnXxNdLV6tZTbKJsxDKC6ODw2P4kH%2BaX94n9O6JJc4ONEu408eVuj4kJfF27bsTDmW1n0cDfVOWb2oZ69HIiYDOsDkpTp0T%2F78MRqZjqZr7pUW89mQ%2FhfBj%2FpLjnZ6CTOQbMC06tuN9G%2BfycpS7Q7lohVNlU%2BghXX52oQ07FST6rAdlfstKq9w2ONEP82eBdfyMJIOygJBIvpUo4ogAQ8GtDbdNuZsjs7tCcuDWKgO3pXgRAvk8Am2If6SHE%2BMDDA9gc3JYK%2B5OVIxa2kk5i0HYFbA6EwwjTq77GmoE6c3E1JKQPwI%2BdtcsGvlNba%2F0JcEgyPBrhrbFgLh7VrniVip6F2WsqkkK9q%2BfSBxSy1WvuGi3jW2YDa6Q5X1gPzVz5M5xlnmnmvWDV4oHwMhUAE7RWASHjJZPTenFlsPVWGTA%2BdAGEzKCKEllxy8qUAbbPPTFHiLU3l40lUrl%2BsvAVvNpmhwPZTgkHaOe87LDBNdH6%2B6XM%2B6AypXDw4jsALy5Bxem4vEtP4SSC8wicL4xAY6pgFfDRXUZig3%2B00IqND1IFf4Yd%2BdZ%2FXqBI6l972VcUnq3uCnAtJyL0Y00pa25LgHA1xiX7a0ZQ6FgVLvycTscQyJmjIZYQZwj%2BL%2B9f%2F%2FyLKfaR6LceP4NEKONd3AnclPmkDJpbo4WTYEG3rxf64VUtmm2HpZvO%2FOE2XEvvPqfahzcJedmvV3mYpYjuoTwT7M3nGxki4Lua14k312leToNyjzc%2FrX1yrh&X-Amz-Signature=d7732cd4d593bd9b5096e8f0b6d200219bb25fae131a300c90720955d5b6b6c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKAX54FA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHJPJE4nrb4dP0Yavo2h5IY%2F8MN7fo3XVQ0TUJw3F811AiAJ8aPWiXSlWYXB0Bf7TQQUKDPYdAczO0hPbRIB2UeUEyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMDEpKEfWsnoiqtl7JKtwDmJOt1kQFNDdYg8JeOiq7Gk9C4u15fgTlQXwJUhPTbbiPx2HUIfWEu3A9YdMS8t%2BcrbR%2B07hgqCv3PfSRF5oS4grqWD7NYYAywk5ktOwVAj2RjhjnXxNdLV6tZTbKJsxDKC6ODw2P4kH%2BaX94n9O6JJc4ONEu408eVuj4kJfF27bsTDmW1n0cDfVOWb2oZ69HIiYDOsDkpTp0T%2F78MRqZjqZr7pUW89mQ%2FhfBj%2FpLjnZ6CTOQbMC06tuN9G%2BfycpS7Q7lohVNlU%2BghXX52oQ07FST6rAdlfstKq9w2ONEP82eBdfyMJIOygJBIvpUo4ogAQ8GtDbdNuZsjs7tCcuDWKgO3pXgRAvk8Am2If6SHE%2BMDDA9gc3JYK%2B5OVIxa2kk5i0HYFbA6EwwjTq77GmoE6c3E1JKQPwI%2BdtcsGvlNba%2F0JcEgyPBrhrbFgLh7VrniVip6F2WsqkkK9q%2BfSBxSy1WvuGi3jW2YDa6Q5X1gPzVz5M5xlnmnmvWDV4oHwMhUAE7RWASHjJZPTenFlsPVWGTA%2BdAGEzKCKEllxy8qUAbbPPTFHiLU3l40lUrl%2BsvAVvNpmhwPZTgkHaOe87LDBNdH6%2B6XM%2B6AypXDw4jsALy5Bxem4vEtP4SSC8wicL4xAY6pgFfDRXUZig3%2B00IqND1IFf4Yd%2BdZ%2FXqBI6l972VcUnq3uCnAtJyL0Y00pa25LgHA1xiX7a0ZQ6FgVLvycTscQyJmjIZYQZwj%2BL%2B9f%2F%2FyLKfaR6LceP4NEKONd3AnclPmkDJpbo4WTYEG3rxf64VUtmm2HpZvO%2FOE2XEvvPqfahzcJedmvV3mYpYjuoTwT7M3nGxki4Lua14k312leToNyjzc%2FrX1yrh&X-Amz-Signature=9577a2634aa37b7215ef764a8311f2ba0d0094f9a49fc5841a53bc070cfc787d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKAX54FA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHJPJE4nrb4dP0Yavo2h5IY%2F8MN7fo3XVQ0TUJw3F811AiAJ8aPWiXSlWYXB0Bf7TQQUKDPYdAczO0hPbRIB2UeUEyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMDEpKEfWsnoiqtl7JKtwDmJOt1kQFNDdYg8JeOiq7Gk9C4u15fgTlQXwJUhPTbbiPx2HUIfWEu3A9YdMS8t%2BcrbR%2B07hgqCv3PfSRF5oS4grqWD7NYYAywk5ktOwVAj2RjhjnXxNdLV6tZTbKJsxDKC6ODw2P4kH%2BaX94n9O6JJc4ONEu408eVuj4kJfF27bsTDmW1n0cDfVOWb2oZ69HIiYDOsDkpTp0T%2F78MRqZjqZr7pUW89mQ%2FhfBj%2FpLjnZ6CTOQbMC06tuN9G%2BfycpS7Q7lohVNlU%2BghXX52oQ07FST6rAdlfstKq9w2ONEP82eBdfyMJIOygJBIvpUo4ogAQ8GtDbdNuZsjs7tCcuDWKgO3pXgRAvk8Am2If6SHE%2BMDDA9gc3JYK%2B5OVIxa2kk5i0HYFbA6EwwjTq77GmoE6c3E1JKQPwI%2BdtcsGvlNba%2F0JcEgyPBrhrbFgLh7VrniVip6F2WsqkkK9q%2BfSBxSy1WvuGi3jW2YDa6Q5X1gPzVz5M5xlnmnmvWDV4oHwMhUAE7RWASHjJZPTenFlsPVWGTA%2BdAGEzKCKEllxy8qUAbbPPTFHiLU3l40lUrl%2BsvAVvNpmhwPZTgkHaOe87LDBNdH6%2B6XM%2B6AypXDw4jsALy5Bxem4vEtP4SSC8wicL4xAY6pgFfDRXUZig3%2B00IqND1IFf4Yd%2BdZ%2FXqBI6l972VcUnq3uCnAtJyL0Y00pa25LgHA1xiX7a0ZQ6FgVLvycTscQyJmjIZYQZwj%2BL%2B9f%2F%2FyLKfaR6LceP4NEKONd3AnclPmkDJpbo4WTYEG3rxf64VUtmm2HpZvO%2FOE2XEvvPqfahzcJedmvV3mYpYjuoTwT7M3nGxki4Lua14k312leToNyjzc%2FrX1yrh&X-Amz-Signature=6cfc5630aa8fe7b137f294a475379453a042d642c1a1a455d05d5e8f5341b5c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKAX54FA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHJPJE4nrb4dP0Yavo2h5IY%2F8MN7fo3XVQ0TUJw3F811AiAJ8aPWiXSlWYXB0Bf7TQQUKDPYdAczO0hPbRIB2UeUEyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMDEpKEfWsnoiqtl7JKtwDmJOt1kQFNDdYg8JeOiq7Gk9C4u15fgTlQXwJUhPTbbiPx2HUIfWEu3A9YdMS8t%2BcrbR%2B07hgqCv3PfSRF5oS4grqWD7NYYAywk5ktOwVAj2RjhjnXxNdLV6tZTbKJsxDKC6ODw2P4kH%2BaX94n9O6JJc4ONEu408eVuj4kJfF27bsTDmW1n0cDfVOWb2oZ69HIiYDOsDkpTp0T%2F78MRqZjqZr7pUW89mQ%2FhfBj%2FpLjnZ6CTOQbMC06tuN9G%2BfycpS7Q7lohVNlU%2BghXX52oQ07FST6rAdlfstKq9w2ONEP82eBdfyMJIOygJBIvpUo4ogAQ8GtDbdNuZsjs7tCcuDWKgO3pXgRAvk8Am2If6SHE%2BMDDA9gc3JYK%2B5OVIxa2kk5i0HYFbA6EwwjTq77GmoE6c3E1JKQPwI%2BdtcsGvlNba%2F0JcEgyPBrhrbFgLh7VrniVip6F2WsqkkK9q%2BfSBxSy1WvuGi3jW2YDa6Q5X1gPzVz5M5xlnmnmvWDV4oHwMhUAE7RWASHjJZPTenFlsPVWGTA%2BdAGEzKCKEllxy8qUAbbPPTFHiLU3l40lUrl%2BsvAVvNpmhwPZTgkHaOe87LDBNdH6%2B6XM%2B6AypXDw4jsALy5Bxem4vEtP4SSC8wicL4xAY6pgFfDRXUZig3%2B00IqND1IFf4Yd%2BdZ%2FXqBI6l972VcUnq3uCnAtJyL0Y00pa25LgHA1xiX7a0ZQ6FgVLvycTscQyJmjIZYQZwj%2BL%2B9f%2F%2FyLKfaR6LceP4NEKONd3AnclPmkDJpbo4WTYEG3rxf64VUtmm2HpZvO%2FOE2XEvvPqfahzcJedmvV3mYpYjuoTwT7M3nGxki4Lua14k312leToNyjzc%2FrX1yrh&X-Amz-Signature=4b2d644489d40f3966f55c7c26022e7c7756a2d50a8d5b87bfbfc5c0c40b5f20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKAX54FA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHJPJE4nrb4dP0Yavo2h5IY%2F8MN7fo3XVQ0TUJw3F811AiAJ8aPWiXSlWYXB0Bf7TQQUKDPYdAczO0hPbRIB2UeUEyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMDEpKEfWsnoiqtl7JKtwDmJOt1kQFNDdYg8JeOiq7Gk9C4u15fgTlQXwJUhPTbbiPx2HUIfWEu3A9YdMS8t%2BcrbR%2B07hgqCv3PfSRF5oS4grqWD7NYYAywk5ktOwVAj2RjhjnXxNdLV6tZTbKJsxDKC6ODw2P4kH%2BaX94n9O6JJc4ONEu408eVuj4kJfF27bsTDmW1n0cDfVOWb2oZ69HIiYDOsDkpTp0T%2F78MRqZjqZr7pUW89mQ%2FhfBj%2FpLjnZ6CTOQbMC06tuN9G%2BfycpS7Q7lohVNlU%2BghXX52oQ07FST6rAdlfstKq9w2ONEP82eBdfyMJIOygJBIvpUo4ogAQ8GtDbdNuZsjs7tCcuDWKgO3pXgRAvk8Am2If6SHE%2BMDDA9gc3JYK%2B5OVIxa2kk5i0HYFbA6EwwjTq77GmoE6c3E1JKQPwI%2BdtcsGvlNba%2F0JcEgyPBrhrbFgLh7VrniVip6F2WsqkkK9q%2BfSBxSy1WvuGi3jW2YDa6Q5X1gPzVz5M5xlnmnmvWDV4oHwMhUAE7RWASHjJZPTenFlsPVWGTA%2BdAGEzKCKEllxy8qUAbbPPTFHiLU3l40lUrl%2BsvAVvNpmhwPZTgkHaOe87LDBNdH6%2B6XM%2B6AypXDw4jsALy5Bxem4vEtP4SSC8wicL4xAY6pgFfDRXUZig3%2B00IqND1IFf4Yd%2BdZ%2FXqBI6l972VcUnq3uCnAtJyL0Y00pa25LgHA1xiX7a0ZQ6FgVLvycTscQyJmjIZYQZwj%2BL%2B9f%2F%2FyLKfaR6LceP4NEKONd3AnclPmkDJpbo4WTYEG3rxf64VUtmm2HpZvO%2FOE2XEvvPqfahzcJedmvV3mYpYjuoTwT7M3nGxki4Lua14k312leToNyjzc%2FrX1yrh&X-Amz-Signature=bbfed496ca360e4c020b1cbadbfa1cbba83cf8cb9ca2605f44f7149f923a2237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKAX54FA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHJPJE4nrb4dP0Yavo2h5IY%2F8MN7fo3XVQ0TUJw3F811AiAJ8aPWiXSlWYXB0Bf7TQQUKDPYdAczO0hPbRIB2UeUEyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMDEpKEfWsnoiqtl7JKtwDmJOt1kQFNDdYg8JeOiq7Gk9C4u15fgTlQXwJUhPTbbiPx2HUIfWEu3A9YdMS8t%2BcrbR%2B07hgqCv3PfSRF5oS4grqWD7NYYAywk5ktOwVAj2RjhjnXxNdLV6tZTbKJsxDKC6ODw2P4kH%2BaX94n9O6JJc4ONEu408eVuj4kJfF27bsTDmW1n0cDfVOWb2oZ69HIiYDOsDkpTp0T%2F78MRqZjqZr7pUW89mQ%2FhfBj%2FpLjnZ6CTOQbMC06tuN9G%2BfycpS7Q7lohVNlU%2BghXX52oQ07FST6rAdlfstKq9w2ONEP82eBdfyMJIOygJBIvpUo4ogAQ8GtDbdNuZsjs7tCcuDWKgO3pXgRAvk8Am2If6SHE%2BMDDA9gc3JYK%2B5OVIxa2kk5i0HYFbA6EwwjTq77GmoE6c3E1JKQPwI%2BdtcsGvlNba%2F0JcEgyPBrhrbFgLh7VrniVip6F2WsqkkK9q%2BfSBxSy1WvuGi3jW2YDa6Q5X1gPzVz5M5xlnmnmvWDV4oHwMhUAE7RWASHjJZPTenFlsPVWGTA%2BdAGEzKCKEllxy8qUAbbPPTFHiLU3l40lUrl%2BsvAVvNpmhwPZTgkHaOe87LDBNdH6%2B6XM%2B6AypXDw4jsALy5Bxem4vEtP4SSC8wicL4xAY6pgFfDRXUZig3%2B00IqND1IFf4Yd%2BdZ%2FXqBI6l972VcUnq3uCnAtJyL0Y00pa25LgHA1xiX7a0ZQ6FgVLvycTscQyJmjIZYQZwj%2BL%2B9f%2F%2FyLKfaR6LceP4NEKONd3AnclPmkDJpbo4WTYEG3rxf64VUtmm2HpZvO%2FOE2XEvvPqfahzcJedmvV3mYpYjuoTwT7M3nGxki4Lua14k312leToNyjzc%2FrX1yrh&X-Amz-Signature=c28d7196c082eaf3870039b193a6582510d313294d292b989c092af9bd0250e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOHROSFF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIDbx%2B7SWFdr2tt7ppHC8k1Ya0HlKNmML6eMrgDjOA8bKAiEA%2FyNLymqvxGcYzHUM%2FX%2BTSUUVTh7lr5YufRWi9ANRbBUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDvb%2BNyrs8V65vtr3CrcAzY%2BpMPDEP4dkj9DxJPSSjlpTM5weKP3Is6gEqQA7xL0fp6v0Zgt%2BR%2ByqBiZRKtISXqcQw%2FujRh7TGIK6egdoiGq68wiE9ECVPcJD%2FAZ307a9BUzWl1egppKVezF8kLF3piFPIQPAhdrj%2BwLt%2B61C9lRbZP6j5OjbSPClHUNZOc0UkPztsUwXwHd%2FhmPMCACPfACVEsor6RwaerMEDUGQ5qdl0cw3DcGWpIY7FXFKXu9n50SVzhttD0Gpzt8nR27GO5%2F6TUIy1HuYtIJ9Os%2B9UYUcMibZlXMv7yJ2J7IgoWLrpVz0Sz6Kr2fow9Rol2G8Sr1cSltcM2Ewhu0NaubqYwhIOHoGfEQkbDdNPRRCLZleqK0%2BqvKHF4jqQFh7%2BS8f3NeOiouvE%2FPzBLwjWutG%2FU76BZisSFgM%2BIwR4z4hMXcD4gvCKCIhKC2vd64kFWK4ghLr4Zmqli1jFdEB0Mqr5w9WbBKEVz%2Bs%2FKKO30Ds7dhqsz931ms09B2YdeN4sLbiWBdA0z7p%2BvjrFZ2Jf6ADY1jbdp1bZzFbL4DXauSyi72%2FzVQwNJ0rZNIUBCP6kqizkCdaLi805lJKI3U0u6z3Klgk%2Fo2OREuZnSPhuSPjW%2BxEfeyfLxB137231PnMP7C%2BMQGOqUBSTw6TObxiM6wbP0oImtKN2I%2FCICJtX30fJCGaySPkflcFYQ%2BCZYlgf3O%2Bt79PQ2JNpP7h%2BpOzFlXDMv9T1MKx5sYyTxEA2LOLxBzeNnctEOB40%2FZsgR8I7VNc7IJr5vNc8D%2FfHb%2F6VYfJ0PIyCq2mRWMrVEj28lflqaA0gSHYEcrc32979oGri6J9wcV%2BPleV48BvBt0u2A9jwofaS1vvgLGVtz8&X-Amz-Signature=22ca05c6db0a49222bd44246f1bb5bd92f2214f178e3374991597e77cdc0cfdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WQ3BOYT%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEC%2BgYNrxnOxgg8mNJSiMVinyBKAea5qC4hZ1g%2F%2FUVj%2FAiB0ha%2BtzuGYOoYWb5OTLDVT30Uh3%2BhEVSqmoP8%2BKPcavCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM0LxyKPn1bVVrn23PKtwDdMaiHDm0RMw%2FEf0yjJjiZJd32hluNFd4u5wulrBc5Zo5oUEL0aS7Q16Fvy2CNyZj%2FaR7YYtCHPdP%2BEL7DAEGAokUlIOWO%2F1w3YSqBX%2FTJYCHq4RrzgMvKZvgtJ7M9%2BzYFXD%2Bte%2BrIKtjUI%2FLzAxEnk%2BxbVF9By7rqno0uXpukXRprqDkPPyRTKe7bfRGyvVqB%2Bj1z3s25Ag1Oj82iktcgBLzL6HDCulHgEmDgT1L49nd6SXbxcaRHl6G4Uw4jKI7YAyl1xGVIRNS4mjolRHuXxTHxNSUhJDYSVDA1WSFcL%2FeE6vPXhGMPLhdM1ixbXyr3b1Esx5evCada4K3Y2u964S2eLJj%2BeSU%2FuJVuwddEMhPM0mhxzrqIS4GfA7muteedZxZZaqEteKSTx3mQ81D0%2F2Q0CWDKJwzv5jtnoeH0ejLo9hprEcsypemFcQi6PfrFhN9CYYsWokwV85Ei3jyd33OMJLMMcbGA9rdOqjwr5BZETlWKmEyRotBGcpuV%2B96cWZtnPRX15REeomvjlY006BMzZCKfaZReGP538NdxzVuBhLXsN8CFTtZofvxspH3NRKwzR%2BxRNmfB3Qzhh4SNEVWBPToV6iwxJdx3e8zTDh1dsAB%2BCbkOTlI9Wkw58L4xAY6pgH0%2BOFBp4aMlN7dg%2BZPMRz0WFpxBr%2FMPbVdiqmuF2KJdz8Xii4dTw7YdhMT51SwsKv%2B3fHbkPq1f6yXULsfgqJdHpYTAtBp%2FUuDJq2Svw%2BYBsolAt2m3pckevcBBsRquL6rVe4zLFCdQRMEZ4%2FhOzZ4u%2FHqiOx%2FeImNDAoB%2FLNsfVdOhb099WJ97YZkDX3LZGfZrWk%2BkY%2FhCK62IqG3QJjEioeKFInf&X-Amz-Signature=115a2e1f74ac7d928dd15b78736280891eae2c27aed16509b10e59a3d44fbf69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L7TSOHG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCHRP8fPe%2FZSloEKIyKI676T5YS7oiSFZE1qL9zPcORRwIgGDgT9INiM6A31rYkCa86ph2bMvnu9mYT2ux7PkCvSO4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDDCuA0upTV8CyqIYhSrcAyY%2F%2BBGFBWsNeDeAWE69I0c9nMekX4PsEZWvUptpR9ehjPtjeGmWsVD%2BxqEzRkC%2B7q20248DIjVShc9R4QQVmaPw1w%2FK1COy6BwFsxibi89aIpusX0LcVdcY9zV7Tc1zrmm7evHUN1tLzUmnTQWiP3uAzsWJrgZovTWzt4kxvq69MTf0Xf2UtzZO35n2DfYJbH91vNDcIPxACqss2TWxb%2BLkYeZSz%2B2F%2BQU0yIkCS1G2iUPJ7NWKhLpew6GWFQODQl3hHpQB8R8zm%2F81LTHZNIKCh%2F2vznOzio3Tt3gl10VpncgEFFzeqFyy8eua8CW7DL7NwocbR3ZJTHVAvhzA78B0mDO5UDJZudLbzxzPp1g452Vt9IzHRJaaK9H8DBRfUpdhB64Q5mWnSYbwOWSijUS0qWG7TIrWXPNpFfKrhYXfODt17nq1JuIja37iyk2QJSgOTaUJPWWJ9cwqjyEGGRJFBlRSl75pvUvHST3DqkvAkbcEhOcN9upZRrbtxUOAL0Qb5z%2BDLY6WsrTeR1HXBMRUFUtOUhrSjPeEvF718ZdXuTmRLe%2FtWs8Uwg2A13APRaXxz6O6vq8jbWmZV7caJzA1zhZiXuZ%2BY9kviulfsXhgellzYOchVp8RuCP2MIbD%2BMQGOqUBROdomaoE%2F9VkuMgXUUrcoiIs2d1WRLkUuaB9xIfD%2BtCw3WwCZL%2F%2BNz2WlaEhxLtCCiTdOhBE4%2BHPsGUFzoEPyKtvkkLUy6WyzqK2X%2FRp9l%2FuVvRwcjnpjWVVj7gayEnNXQxwBSbkaKDGePMOM1zTlcYQf1xV8S%2FltPARP97UYlCp7ixg03FojnPADKESrzI7dnff8P2O61j7pci9eFMp9MJtXV5Q&X-Amz-Signature=ef3a274a6e4319ad05753dc64316042b94163105bdea0d182be2da554dbc2ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKAX54FA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHJPJE4nrb4dP0Yavo2h5IY%2F8MN7fo3XVQ0TUJw3F811AiAJ8aPWiXSlWYXB0Bf7TQQUKDPYdAczO0hPbRIB2UeUEyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMDEpKEfWsnoiqtl7JKtwDmJOt1kQFNDdYg8JeOiq7Gk9C4u15fgTlQXwJUhPTbbiPx2HUIfWEu3A9YdMS8t%2BcrbR%2B07hgqCv3PfSRF5oS4grqWD7NYYAywk5ktOwVAj2RjhjnXxNdLV6tZTbKJsxDKC6ODw2P4kH%2BaX94n9O6JJc4ONEu408eVuj4kJfF27bsTDmW1n0cDfVOWb2oZ69HIiYDOsDkpTp0T%2F78MRqZjqZr7pUW89mQ%2FhfBj%2FpLjnZ6CTOQbMC06tuN9G%2BfycpS7Q7lohVNlU%2BghXX52oQ07FST6rAdlfstKq9w2ONEP82eBdfyMJIOygJBIvpUo4ogAQ8GtDbdNuZsjs7tCcuDWKgO3pXgRAvk8Am2If6SHE%2BMDDA9gc3JYK%2B5OVIxa2kk5i0HYFbA6EwwjTq77GmoE6c3E1JKQPwI%2BdtcsGvlNba%2F0JcEgyPBrhrbFgLh7VrniVip6F2WsqkkK9q%2BfSBxSy1WvuGi3jW2YDa6Q5X1gPzVz5M5xlnmnmvWDV4oHwMhUAE7RWASHjJZPTenFlsPVWGTA%2BdAGEzKCKEllxy8qUAbbPPTFHiLU3l40lUrl%2BsvAVvNpmhwPZTgkHaOe87LDBNdH6%2B6XM%2B6AypXDw4jsALy5Bxem4vEtP4SSC8wicL4xAY6pgFfDRXUZig3%2B00IqND1IFf4Yd%2BdZ%2FXqBI6l972VcUnq3uCnAtJyL0Y00pa25LgHA1xiX7a0ZQ6FgVLvycTscQyJmjIZYQZwj%2BL%2B9f%2F%2FyLKfaR6LceP4NEKONd3AnclPmkDJpbo4WTYEG3rxf64VUtmm2HpZvO%2FOE2XEvvPqfahzcJedmvV3mYpYjuoTwT7M3nGxki4Lua14k312leToNyjzc%2FrX1yrh&X-Amz-Signature=d6a109bb9b377ae56ba475fa2e1e79b251b7427ab609796f7298a763b4f8f0cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6MS3QBR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCCYi26dFPbOhValTDHYujNXFvQ5ehXyIbHClJEb87bYgIgZwiERSbmPPRBUArmVGDSDbmCHUsdB2nALffxWnXelc8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIPCY%2FvMylj3Jrc5JCrcA6eA1%2FrKb59wkYRYJYMrGZ9QGd%2BmZG3CndBB%2FNV9DN5z%2BYbBSd8ME8vpWdG4BfoxEouGv%2FlJFD0CSLOgobaCIIfrQUX1FW2fdHvamDi4wI4kA3gZmeCHx%2FouefwzEuN%2BZc%2FaVhPEBekPqbtUwcJiUFuQEEb4xiBFZTMmugoghD5WO455bDFiXLLpV5M0jJGsgK7Ds6wQGOJ%2Fj9sgsIv63OUZ6%2BvssUsqnk4odC6nY57L9amllfbNcwlgPzxNLWD450irNYNxhJbsgWYk1R5bjZxOiD7QMoVqmFUx1BLi7NyN5Olnu6P7JOnUJ41AROni0StpD2plBObctIqUJONaWfZOqLykj9d9WdsBH0EP7uciL50ys4ZkNyz9dc36dgJbFQTIWVhOLTKFearEN%2Fx%2FxDIlLkHXMIX6sFRxziollg94l43FhCaQ0m%2FlYKIB9aWPBSD%2Fm2ADTolhsirMzFO2W1pcEPs4Ff8Wlse3NPk%2FZGyUOMhvi%2ByoihqKCMNiIMQbHRSSB0vQWCPnD1%2FLYngRqpZ7vD6%2FErLyOZ0mUQpu4zp88dEUTEfvdvvcObNijlQI231JgXv5YJ%2B0O8kNwzZqKCVgcB5eXn6ev9aCeDGiDntsrmsVlx1jXsI2LZGKMNrC%2BMQGOqUBxaWyC%2FPgo%2Bl5mm9ajhdfky%2B3r4O%2FwaSk5mwDRhXmUdNTKdDhrYRDOaM2FIB1CsbVd4NXEzlm3HbUkYIe3T6SeuYHRvQWMHm1Dtf55Gfoa4toLFMDFjKQswr8%2B8I2iAnLIZCQWKEMnRYMlUrGsCRz2mhJQq093EhhksZkcO666O1uuRocstPRaRh0PYT4%2ByMifXX2KBdUaByo%2FNyJMut2T0TrIcfR&X-Amz-Signature=a03f2f34a5644fe9be6f2c2de8d7eb5dbecd09fb00316de69467d73c6654aa2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKAX54FA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHJPJE4nrb4dP0Yavo2h5IY%2F8MN7fo3XVQ0TUJw3F811AiAJ8aPWiXSlWYXB0Bf7TQQUKDPYdAczO0hPbRIB2UeUEyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMDEpKEfWsnoiqtl7JKtwDmJOt1kQFNDdYg8JeOiq7Gk9C4u15fgTlQXwJUhPTbbiPx2HUIfWEu3A9YdMS8t%2BcrbR%2B07hgqCv3PfSRF5oS4grqWD7NYYAywk5ktOwVAj2RjhjnXxNdLV6tZTbKJsxDKC6ODw2P4kH%2BaX94n9O6JJc4ONEu408eVuj4kJfF27bsTDmW1n0cDfVOWb2oZ69HIiYDOsDkpTp0T%2F78MRqZjqZr7pUW89mQ%2FhfBj%2FpLjnZ6CTOQbMC06tuN9G%2BfycpS7Q7lohVNlU%2BghXX52oQ07FST6rAdlfstKq9w2ONEP82eBdfyMJIOygJBIvpUo4ogAQ8GtDbdNuZsjs7tCcuDWKgO3pXgRAvk8Am2If6SHE%2BMDDA9gc3JYK%2B5OVIxa2kk5i0HYFbA6EwwjTq77GmoE6c3E1JKQPwI%2BdtcsGvlNba%2F0JcEgyPBrhrbFgLh7VrniVip6F2WsqkkK9q%2BfSBxSy1WvuGi3jW2YDa6Q5X1gPzVz5M5xlnmnmvWDV4oHwMhUAE7RWASHjJZPTenFlsPVWGTA%2BdAGEzKCKEllxy8qUAbbPPTFHiLU3l40lUrl%2BsvAVvNpmhwPZTgkHaOe87LDBNdH6%2B6XM%2B6AypXDw4jsALy5Bxem4vEtP4SSC8wicL4xAY6pgFfDRXUZig3%2B00IqND1IFf4Yd%2BdZ%2FXqBI6l972VcUnq3uCnAtJyL0Y00pa25LgHA1xiX7a0ZQ6FgVLvycTscQyJmjIZYQZwj%2BL%2B9f%2F%2FyLKfaR6LceP4NEKONd3AnclPmkDJpbo4WTYEG3rxf64VUtmm2HpZvO%2FOE2XEvvPqfahzcJedmvV3mYpYjuoTwT7M3nGxki4Lua14k312leToNyjzc%2FrX1yrh&X-Amz-Signature=f6b244cd8594aa1fbcb49177892a17532c2234cb7eb5b46e5571fe5b7620f8d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TMGYG34%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDfMCVETHb%2Bwx4%2FmW57dxoOpU%2FwIRb63EKTygPvudfFIAiAifyFxAg6YdTOHUhSEplXdaANNZQ4%2FGiLI%2FMbdAcGsjir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMWJVEYKS9kc%2FfJLknKtwDSOTDBT7n1yd7qix%2Faf3LiCaM%2F0tibgYprqAnQSboHIuxUdDbqzsdAX29jRHnNuR5SBN300BwvY7PfKK1Ysja1%2B%2FwTpmNYYKzayh4CuJNxpjiUCac3J0NflStBCzNk6OopaLEGr8XPBjIEyxNiDGSEYLYpwxlhMBjt7z9yFNM%2Fgtp1Y9%2BRNHXd8APxfakT%2FE%2FLtrSTiKphwtLf4VK9zwpAwYj08CbWk4GrQFZ0iFrXzLashVxRQM5jDCwo%2FkzkbjYjL6LUfVyAivm36aQBC8KF3qMtUtFEENQ8DTz7fkOEp6X6uhpeOf0tj8ZhkIYwjQmJXHhq%2BqrFexhHA7IrtCML3wLeB3SQGjw4x%2BlnjqHrVsVdzBH4b%2FbbC%2FumIZHSsM4fw1n%2FL4RJSHxpRBbuLqMPp1fAdgiXrVdflAa1DF9c7SB%2BhCcMax6l%2BSAxD1fiVKS4rJjv3IcObbZ540c0XXuOVJ8Hi6GIqZgmdrIcHRLLGQC3OOtJUEejrCY68ZGkHlILipu9UlezHo0vvnXK0Auj5KQ7%2B6JPq50CHrcMJM8hNPsj3R3lRjGv3HTf3YI57NRWQCrKTHWmdIR3AKPX7qPzEplqBtC9f9uNHkM5QUImoStojse6auQBkg%2Fg3Qw6cL4xAY6pgHLU4qGlHAaJnJDoPhfMv7S1cLDdM1V4HRqcKoI%2Bagglfva2XZYNBfs%2BThXqGEMJIfV66No%2FgAYrGPkOaM1uDkq1Myt%2FgHYmPkv7zd6iZkmReWGWy%2Fjf6WD8%2FE6UK%2FZznTc78QnkI2W3%2FrtDQS8pCBnjRHdeJatkC3CombwajOQQZObx6a4Mrt6BkL4%2FWNDtGcvKRs3PenLB%2BGggO7d2hMPuJbT51B1&X-Amz-Signature=468f590013469585d7208484aea656309d529179b88c7efa0cbe0c197f95bde8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKAX54FA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHJPJE4nrb4dP0Yavo2h5IY%2F8MN7fo3XVQ0TUJw3F811AiAJ8aPWiXSlWYXB0Bf7TQQUKDPYdAczO0hPbRIB2UeUEyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMDEpKEfWsnoiqtl7JKtwDmJOt1kQFNDdYg8JeOiq7Gk9C4u15fgTlQXwJUhPTbbiPx2HUIfWEu3A9YdMS8t%2BcrbR%2B07hgqCv3PfSRF5oS4grqWD7NYYAywk5ktOwVAj2RjhjnXxNdLV6tZTbKJsxDKC6ODw2P4kH%2BaX94n9O6JJc4ONEu408eVuj4kJfF27bsTDmW1n0cDfVOWb2oZ69HIiYDOsDkpTp0T%2F78MRqZjqZr7pUW89mQ%2FhfBj%2FpLjnZ6CTOQbMC06tuN9G%2BfycpS7Q7lohVNlU%2BghXX52oQ07FST6rAdlfstKq9w2ONEP82eBdfyMJIOygJBIvpUo4ogAQ8GtDbdNuZsjs7tCcuDWKgO3pXgRAvk8Am2If6SHE%2BMDDA9gc3JYK%2B5OVIxa2kk5i0HYFbA6EwwjTq77GmoE6c3E1JKQPwI%2BdtcsGvlNba%2F0JcEgyPBrhrbFgLh7VrniVip6F2WsqkkK9q%2BfSBxSy1WvuGi3jW2YDa6Q5X1gPzVz5M5xlnmnmvWDV4oHwMhUAE7RWASHjJZPTenFlsPVWGTA%2BdAGEzKCKEllxy8qUAbbPPTFHiLU3l40lUrl%2BsvAVvNpmhwPZTgkHaOe87LDBNdH6%2B6XM%2B6AypXDw4jsALy5Bxem4vEtP4SSC8wicL4xAY6pgFfDRXUZig3%2B00IqND1IFf4Yd%2BdZ%2FXqBI6l972VcUnq3uCnAtJyL0Y00pa25LgHA1xiX7a0ZQ6FgVLvycTscQyJmjIZYQZwj%2BL%2B9f%2F%2FyLKfaR6LceP4NEKONd3AnclPmkDJpbo4WTYEG3rxf64VUtmm2HpZvO%2FOE2XEvvPqfahzcJedmvV3mYpYjuoTwT7M3nGxki4Lua14k312leToNyjzc%2FrX1yrh&X-Amz-Signature=3b3543ba848fad2fafe0c2f40bb2b4fd647295163809a105ce55066e606d33eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWJ5CBGJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCD7WFsidiisE6v1bnmHqLvjbVmKn9UbVTNs3ccYfunYgIgNjHOQ2adWS5pnyw1xiK9eDb86DSqpjwpqZJhheMAN4Aq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPdEAY358E6dthwTIircAwDijabi2gNVlKJf%2BemwM2cgryoA0gJ%2F6vDWFXhxHZwmTvx5bpy0wjCVMZqh%2B7Q3HshAsB2bvWgSteDXieFDMBI0WT93yr%2BmBgltWYs51YNtjcDlvZZCcquhSyT7Dc%2B5WD%2Fg%2B9%2Foy6JLXakHOef0yXbi2mVUkBxVEVhCwArd0zXeRYf702Cy2OVCdihNrlnVZ5hRIwn1dzcmkPcULxyR3Ku0nW1CJBaFDp39fvl%2B78HPY03o8y8jhiD7TKTSTYY6k1ImtqmYtj1Yd9iNS6KiB8jG0tchpTEPguNP%2F07q9lVFysRwG2TZ%2FNCjADvfoBb2fvBejNX9nPVCKBnPGVDi1WSBal2noMzk0hy2t9Lbi6KPIsipm3eiOKqcOHy4SHep9usz7m8IWHfUFR1vK%2FbRGoOEUIf5WqXFjofOw7hwuWHvdo5bt1B0uqBZ2dgy%2BKhM5szSOOJ3sX1mwQvs7t3dmbWIIFbtpGEbuY7OMc1VYzJExGvrXD52PunNVLhHUG3QllaRsq5w06OFQJvJ0oby9U2%2FT%2F4kQMOO6YDz9Zor6sDNYwvHJXIx25XalszirWN%2B96vcjbCIr1wzqU8oQo8N692LcExj%2Fn6nR%2FIKZwqEmYljiNFgs2l4dENWoWUXMP%2FC%2BMQGOqUBAGvzPqUde7j5SSaaz%2FaP20B60PaJIsbuRQJmcVUFcpV5z37DDHNRsM60hZzViW3xuZiAZv3DIxO2sz6qdy%2B256qw7EBqFn9yVVc7FaGaEhNVwzgUkgjEjXHoqdCur94N7ouYnUjlthG%2BXLxshCqb%2FEJHvMVP5W9wcAT7ladxVzN3XS0R6RH0mLwJtvFkVaD6NZqObJxLMrlFuBSyiqNYaW1CW9Vk&X-Amz-Signature=824c2ee2392d82c5b5125e70676485b8efeb34c016a8cc73557194df562f2818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKAX54FA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHJPJE4nrb4dP0Yavo2h5IY%2F8MN7fo3XVQ0TUJw3F811AiAJ8aPWiXSlWYXB0Bf7TQQUKDPYdAczO0hPbRIB2UeUEyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMDEpKEfWsnoiqtl7JKtwDmJOt1kQFNDdYg8JeOiq7Gk9C4u15fgTlQXwJUhPTbbiPx2HUIfWEu3A9YdMS8t%2BcrbR%2B07hgqCv3PfSRF5oS4grqWD7NYYAywk5ktOwVAj2RjhjnXxNdLV6tZTbKJsxDKC6ODw2P4kH%2BaX94n9O6JJc4ONEu408eVuj4kJfF27bsTDmW1n0cDfVOWb2oZ69HIiYDOsDkpTp0T%2F78MRqZjqZr7pUW89mQ%2FhfBj%2FpLjnZ6CTOQbMC06tuN9G%2BfycpS7Q7lohVNlU%2BghXX52oQ07FST6rAdlfstKq9w2ONEP82eBdfyMJIOygJBIvpUo4ogAQ8GtDbdNuZsjs7tCcuDWKgO3pXgRAvk8Am2If6SHE%2BMDDA9gc3JYK%2B5OVIxa2kk5i0HYFbA6EwwjTq77GmoE6c3E1JKQPwI%2BdtcsGvlNba%2F0JcEgyPBrhrbFgLh7VrniVip6F2WsqkkK9q%2BfSBxSy1WvuGi3jW2YDa6Q5X1gPzVz5M5xlnmnmvWDV4oHwMhUAE7RWASHjJZPTenFlsPVWGTA%2BdAGEzKCKEllxy8qUAbbPPTFHiLU3l40lUrl%2BsvAVvNpmhwPZTgkHaOe87LDBNdH6%2B6XM%2B6AypXDw4jsALy5Bxem4vEtP4SSC8wicL4xAY6pgFfDRXUZig3%2B00IqND1IFf4Yd%2BdZ%2FXqBI6l972VcUnq3uCnAtJyL0Y00pa25LgHA1xiX7a0ZQ6FgVLvycTscQyJmjIZYQZwj%2BL%2B9f%2F%2FyLKfaR6LceP4NEKONd3AnclPmkDJpbo4WTYEG3rxf64VUtmm2HpZvO%2FOE2XEvvPqfahzcJedmvV3mYpYjuoTwT7M3nGxki4Lua14k312leToNyjzc%2FrX1yrh&X-Amz-Signature=3e408f258796ddd769b214ff426f1b1b59124b36911904f2c96f143a28cb2f02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD5UDJEI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGL21%2Fqt7Q9Oh%2FeygCHcnJ6qOtP2NfiUk8HekBXrZGLNAiBH00of7PxH2TBNjviSSq1wWeljG3XU1Oc7wQf8Ct6ItSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMRH7qQT3mmkf9QTNdKtwDdecfgYXFj4lnz3IF1LfkLIx3IHVVObTxmJyqu2%2BaxaqNJTlN%2Fi9PskmpmDy%2F4oTZkXwZCC2RWjR7peeSDS0hjGZppeOgysRgTJE1kkaOxFVwOBLiL%2F3320jgljgakcej9HTSLdai%2BnfpoPjl9IuS%2B7YC8hjDdZOXui%2FYSrrrE6Dp%2FHaiNXT5tKdF68XqPGnW3Wsq%2FPmBYWLJT%2FWe%2BNkVoYltds7kWS2VHXbIVBTlH7A5UiRyFozfiRum6o2UbVYMtXc0pq5CFEs%2FiYeWNifWzyJpFkhxP%2Bq5bCK4V86MIsNe9OPoV%2Fd6hqDPAJEQRHgm10ch62syd2elZOEoYcs6TWVuG4p5x4afMn0U%2FI7QTMhUEzZP0k%2B4IMcBkgdIVvugjvHsBrhs5t%2FgXDp434EUtJ473Bmg3MB%2F2FJTJgeYOnpe56UiLKbkC1i%2BTx0ST0JUmyHeMsiTO94yTUPnk544UvFCciO2c%2B81cqna%2BkjstwYJsd0j9cYm2UlBJOoekXn0L34UGkbp9YN13sv1%2FOcG1GkqsyLxzqSfHbOc%2ByMJJ%2FXGG%2BRdhqnf7R0p8d08D8Uk3tEOMnKcyq0Q7p5U8ZYdytI%2FWsqKyhJ%2FmsuBeZkbgt%2BfZuNRaWcj1L3HRIEw6sL4xAY6pgG39Xp4%2Fw%2FNd%2B2hwYwZNQpM23NIyiuhIpv5Orr2V5se%2FjUgIbqG6GSWZk2cZFHxEvtVuVm88nr3v62QA6PC%2BB61ZaIeB3Xs%2FSMZGNWBF5T1ZjYf%2BgTLRHdqiC3e%2BiHiTEhkO1XyZZBfgrGxNIc7x72StnD2EU85rxfG9P1VplbZD8EJ4qp5mEpt9g%2Bwhet9ZeQCrJYmt5Dk8AAE841U%2BRdcVKqncxL9&X-Amz-Signature=3b47d280aba95e14c3ea74be36901ef646222adbaf98fba7aec2f47eae91a8ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5WBJGI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBeTz%2B0ba8IWfIqtMvFbrYjZoS1ivnTGbmiZpGmV67sKAiEAo90blOWhPw8LA8nXGu9CFM4cfgpiuPUnr4T%2FHk33gKwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDIyOBleTGbc45FIwnyrcA7eD6NCZCf2PFpXqdzEd%2B9gEAVkzeNUsHVMcH2QKsrYUFZjbn0THBxpk2Pf5q4jGnKDHKH9yVPUn6DpmdJiFboRbr8S2wo7ntcAtGiCL2Qcun92wk63a53QxB%2B7x%2Fds%2BYwwHIYdtT6Kv6B27NhhDjjmUHbS6hktl7bWrTbLnlF%2FGfG3yvNLF3tTTrFq000U9BCIFutJ1UqaunZ28P0ef1jGR%2FOIj5jUNHzhkpMR4voRdOTjCiGGFP7yUGK8d0bLXVKCZbeb6vM3oTSLWWuhunAINnQiGB8eRh6YmVYj%2F6rJJ6pdvjjEKSTfKksp7i45heY%2BljzOX9InjprDH4Sr%2BuaZHuvjY8FqRKMGqh9UHXGmb%2BzdaoyADDtNI7XYM2MTN4R4nkxUjdZspra0NFv8F0v%2FOBHSlOibAi5zk0wjg2t144hNMej2ta7lIZmtdoM1ifob0ILjmOCsCC4w68IKUnwc3wUV2TvbcGmW1FVuuqzbtx%2FAJ85DqpqpI300ZjTxbe4B4SxKoEIBLMO%2FTk0uefkfvE8b74HbfV%2FOr%2FZ9c8Uo6qqTagFXPLptGaru0e6O7gvCx7Eq8%2FkL7Wuv4DHtPY%2BLj1qL8wQBFCMtDeTM9s0Ya8EWhkRVMsVhl9IiUMInD%2BMQGOqUBlafDdmHB8%2Btd8Bva3TmDqtc0oqBamOJMBb%2Fpgd6rszL2nLM8v4m%2F9ua8XLViI28z0StE2qEZI3wJgUleTKQ5D6iKk7Gf5xrR7MCqgUUWRbegB%2F9QRV%2FJZOjgRvcMPFL3nyl9IldkvCJiwAWIz85adZNMkhSmkBgnRDgR%2F7jonUWO9iXPgHQk0ZXUZLFHuiFc0rK3xMA9ObhZ%2BbCccN73XgPmUekb&X-Amz-Signature=7ab8b7473f0e7bda9b784b17006be9c2187e82c9ff827d30dd901849536d8daa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2U4DSJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBUfVwZF4ymXFVber0SlkAc6DK21R%2BVAdy4AXlVE%2FJaKAiEAingYezoPMZlRDadY1iaBey1xfC7JcXouxMbBVq97J3Uq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDG2rLQvX1rQeV7gbiyrcA0WpIEuGpPR8MvTMMZhPWMHMCpxSFMWqNK%2B3LPhJxsXn3JRhZbsa3QnNOwoq9e%2Fai%2FVavWb%2BOmxjb2DjbDVE%2BSJfd%2BghpqnZ2n52I%2BVX9VaFuiaSaN65A7FT92mk2tvGEwlbANpyMP8tI9Qj32It2RK%2B%2BwPd0fUhoDf4OtLU36L9cnnNkW17hFog%2FNdekCk5Y%2FdnyrqcsgU%2Bsret23b%2FmG9LSUSCtCKFLf2UyJuKni5fp3HNYaiT1ev%2FzJeruuwWJtUDDsZV0Bd2GcF8mGoJbPENuxX8305YASxbg93cEeeV1EbaUuaSLOo3zXlGNDfL06ephA7%2Bp7mb4mIB7ZzMwavLS0oYXTWNO5nJ3mo8%2FmMgwX%2BFxB1x4%2BEAIShr4dsDGUAuPQF7HwEZXVczApxaPCLdBsUbQfAbEv2I%2Fr1miSFbHOhW6RU1cjNO8xDeraN7PB9zsjNILORjsOKuAu7LN0Rj4Lr8jn6PQNrp%2Fpg6BWLRWdlEyJikVK%2BAQD%2BqHyInw%2FwDBswac3seGEw2Arfp7%2F1mcP6TVzHug8rTtTKrvKydgCnpxjJsnl9jbRt2wg7hU4thjzUpNCBfO3FR%2B6vLABgEeqgGGHhdTbl4Chia7EKhT%2B2AaESxltSscTttMJvC%2BMQGOqUB%2Bi0rOdJ9yyQETwkmXfyRFUFP2TSJP8iagYurvm14M9JQy2xmhLqgds66G1U6d5pjyO27iBwea58xWIa7e%2FwGKzF92yAuJyD70UA%2BxkG6VzwI0G1ekt46%2BuaBt5rCsjxdmevD%2BbrwpFMOznnjPdtYVI1e%2FOVBKyeVwMzgd%2Bj%2FAfYEbaHGPK2DgZclXsCxAUqZF8dUiVZVOwhbLRcjHuJrPhh4E8Yz&X-Amz-Signature=e85cbf59ea998620dd0a50cc4d4337df77bb131b6b7ae808d4d05c5e1543de22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZAL4F7I%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCSOOxEtVSYCgLoi%2BrNX%2BRmNsNC%2FS%2F5wxslwrGh9NWtrQIhANbMI2P6DeAAhqkFxzmuO%2BXaEmPrvBTHXNc7BJKQE%2BeoKv8DCEsQABoMNjM3NDIzMTgzODA1IgwyukvUSZ8Z4vt%2Bj5Uq3ANDiAP9ijFF5IjxkzlVE1kQNnMgxRpRIjNRgV08SFBkq3T4u4Ts2s1iVdof5m%2BU%2FATJsUfs3qRCgnR8tGhi2KbryAaivUqpjmeex0trHK%2Bq2A7T2DOzeJEEI0HhQfsyjRqR9QkOER3N5nTtI%2BvyMU%2BGrtLclmAREBv%2FkvyD1wL7wPoxDXufGUFoUwVmkTjxbAlkxyGnjsrKxctH4EVUGoQ5O4642G6R8nXdUZhj3JJxNfkWAc9JMjfrgGbfkO%2BoHUMLRUgKkd5392mXFlZdYZ6M3OrNUq3GfbbRK9WzP5oEDiWWy4QO7gnSf7oEguHks5WapwckTXnqziN0aif1qmVAL6%2B%2FTwOGJa%2FW1IeKxqQjkq6wzH%2BvhOfmtqVOVF0aDuUUvPGBj5qEzst9fRVPfkHGU0Wd1VNk3ii6A8TBE3J1Nom5PIB5OO2XGgHP%2F22fdsSAFY%2Bfj3jiHSwmNjrdqSnUSZW4%2Br6At1UOXPECFlBeFGnz%2BbOzj9ziZWrleZlYviYeRC4C8yFflGByCGNUyEN%2B6klBLTaZ6erXkMEf4r8%2BpKjUpMjzHpO5%2Ba5TujpT7NHaZpma0pmANeTp6RYb5irGjWIhEGXY8JWWUH%2F4EHPeKlXegmxoP8sUoPmsFTCFw%2FjEBjqkATRFRArMkXkbJgSrkw83CUXeNAEHUwg8EVQLI1p7%2FtIClV1%2BQXL9YDVNAKyxPO7Z%2Frc6b1GxZb2JJmescJkDnT73Ezx6ajkiAYFYfefw49x0Dh2NNbVsVhi2ZzNdamCwEUFVnUqbT5VhPWahII7DIz0eY3zscFLLkW6AOLvWqBEsLDyc8jc5zkni802slCZWpyJFBsXN2nvjTIX5yKSTo%2BLg4alZ&X-Amz-Signature=663abfcd4181efdedabd9cdb529c837725edfdf9cbfd2a5bb83b9466932c7632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E5I5NEB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDZ2biRl2Di5vE208BMx2CzUnEyrP9AlRG0fQI1FqBecQIgPQ%2FeJ4NjDku2pHu3%2BtIxkpdD4JBxMSOplXY17lC5DqQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDP5aQJjjmdvp92UMHyrcA4uu09Gn%2BBm2lrG8V46WtO3SFJk3ACtwHJRbu5tKAdfi35xA7Uk2h6TXMTJHb54ZNNp8y2HtkasHPgIEdJY9SvPo2D1oKtHKp19jrUIAJuDhtp%2BdXXhKaSDuBSqqY%2B0gzHcgTMa8jQCpNnM2GykpTpKdejyGy4QYTC7U2tGX00hsnCCau6OEadiSuRGV26cV1eCEKwYe9vig2mlfkpimeqMs1duIKB2iO5Co6Hv35f1KezbxfxztByTXMkkFMxUuA3XfEctF1jjOjHLODqqr3AlbslXyYLwqvzEtwEtDmfX%2Fo4C6fcrcZ3nrArPjURVdpdas8KgbLfAOKLhMgJTdJTbNcJ647A4Cy016uMPGZhOnjjI0V8u5AKldPj986eRWrReNEiLrI9d6kCOxtSnnB4x%2B4RxvsR1CjbSDuAx5ix71RJLlP3YmXVFvrwcQEXB1lJ5g8Kk1JPO40MXKL9dVII1XyVOsGG0GUKjnotN9CIhOld8R4TRdkUob%2B4yx1BckzOH6VGIqZnRCEvKuQ2bXVKo88tXPvdMn85zVHNn%2FBxEkMeKcqC3Y9MdCZCeCXd0zMkiFEGDzfZI5LIU%2BwwqgXkwxwRWtTp5ST99YtetaPaLD7Orz4C2tFaGiGlrjMInD%2BMQGOqUB3Os%2B1GkFULtmF15pfOiqbWtojIj%2Fdy1frRDcqeQ%2FAn5Eba1%2FAxUbk8FmfVRi7WzzbIjfnsyMqmmWEkv7Dwb5u%2F8pGFIWAS9w5qUliNJI4b51opD2fz68PXP093nvXc7vdtRwf21qBHfgEpEEtXNymptPWcPBVQLDHKbbpC2ZbUOGAQIATHol4OkTGvC8LjLhCwzXy4x7lnlio7oX5NPAYHxsnWq4&X-Amz-Signature=553a8d184c1521009414a109b16a26bfec64a1a79815ae13a0222040dd1ceefb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKAX54FA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHJPJE4nrb4dP0Yavo2h5IY%2F8MN7fo3XVQ0TUJw3F811AiAJ8aPWiXSlWYXB0Bf7TQQUKDPYdAczO0hPbRIB2UeUEyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMDEpKEfWsnoiqtl7JKtwDmJOt1kQFNDdYg8JeOiq7Gk9C4u15fgTlQXwJUhPTbbiPx2HUIfWEu3A9YdMS8t%2BcrbR%2B07hgqCv3PfSRF5oS4grqWD7NYYAywk5ktOwVAj2RjhjnXxNdLV6tZTbKJsxDKC6ODw2P4kH%2BaX94n9O6JJc4ONEu408eVuj4kJfF27bsTDmW1n0cDfVOWb2oZ69HIiYDOsDkpTp0T%2F78MRqZjqZr7pUW89mQ%2FhfBj%2FpLjnZ6CTOQbMC06tuN9G%2BfycpS7Q7lohVNlU%2BghXX52oQ07FST6rAdlfstKq9w2ONEP82eBdfyMJIOygJBIvpUo4ogAQ8GtDbdNuZsjs7tCcuDWKgO3pXgRAvk8Am2If6SHE%2BMDDA9gc3JYK%2B5OVIxa2kk5i0HYFbA6EwwjTq77GmoE6c3E1JKQPwI%2BdtcsGvlNba%2F0JcEgyPBrhrbFgLh7VrniVip6F2WsqkkK9q%2BfSBxSy1WvuGi3jW2YDa6Q5X1gPzVz5M5xlnmnmvWDV4oHwMhUAE7RWASHjJZPTenFlsPVWGTA%2BdAGEzKCKEllxy8qUAbbPPTFHiLU3l40lUrl%2BsvAVvNpmhwPZTgkHaOe87LDBNdH6%2B6XM%2B6AypXDw4jsALy5Bxem4vEtP4SSC8wicL4xAY6pgFfDRXUZig3%2B00IqND1IFf4Yd%2BdZ%2FXqBI6l972VcUnq3uCnAtJyL0Y00pa25LgHA1xiX7a0ZQ6FgVLvycTscQyJmjIZYQZwj%2BL%2B9f%2F%2FyLKfaR6LceP4NEKONd3AnclPmkDJpbo4WTYEG3rxf64VUtmm2HpZvO%2FOE2XEvvPqfahzcJedmvV3mYpYjuoTwT7M3nGxki4Lua14k312leToNyjzc%2FrX1yrh&X-Amz-Signature=7466a4e663bd0070b61c7c400f97d8d722e5d6889eaea18044844b417d69dde7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKAX54FA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHJPJE4nrb4dP0Yavo2h5IY%2F8MN7fo3XVQ0TUJw3F811AiAJ8aPWiXSlWYXB0Bf7TQQUKDPYdAczO0hPbRIB2UeUEyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMDEpKEfWsnoiqtl7JKtwDmJOt1kQFNDdYg8JeOiq7Gk9C4u15fgTlQXwJUhPTbbiPx2HUIfWEu3A9YdMS8t%2BcrbR%2B07hgqCv3PfSRF5oS4grqWD7NYYAywk5ktOwVAj2RjhjnXxNdLV6tZTbKJsxDKC6ODw2P4kH%2BaX94n9O6JJc4ONEu408eVuj4kJfF27bsTDmW1n0cDfVOWb2oZ69HIiYDOsDkpTp0T%2F78MRqZjqZr7pUW89mQ%2FhfBj%2FpLjnZ6CTOQbMC06tuN9G%2BfycpS7Q7lohVNlU%2BghXX52oQ07FST6rAdlfstKq9w2ONEP82eBdfyMJIOygJBIvpUo4ogAQ8GtDbdNuZsjs7tCcuDWKgO3pXgRAvk8Am2If6SHE%2BMDDA9gc3JYK%2B5OVIxa2kk5i0HYFbA6EwwjTq77GmoE6c3E1JKQPwI%2BdtcsGvlNba%2F0JcEgyPBrhrbFgLh7VrniVip6F2WsqkkK9q%2BfSBxSy1WvuGi3jW2YDa6Q5X1gPzVz5M5xlnmnmvWDV4oHwMhUAE7RWASHjJZPTenFlsPVWGTA%2BdAGEzKCKEllxy8qUAbbPPTFHiLU3l40lUrl%2BsvAVvNpmhwPZTgkHaOe87LDBNdH6%2B6XM%2B6AypXDw4jsALy5Bxem4vEtP4SSC8wicL4xAY6pgFfDRXUZig3%2B00IqND1IFf4Yd%2BdZ%2FXqBI6l972VcUnq3uCnAtJyL0Y00pa25LgHA1xiX7a0ZQ6FgVLvycTscQyJmjIZYQZwj%2BL%2B9f%2F%2FyLKfaR6LceP4NEKONd3AnclPmkDJpbo4WTYEG3rxf64VUtmm2HpZvO%2FOE2XEvvPqfahzcJedmvV3mYpYjuoTwT7M3nGxki4Lua14k312leToNyjzc%2FrX1yrh&X-Amz-Signature=cfd4603c683aed76081191e0c25cf293b6f841dbb657d1e27c3a962a94029872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNN2PBFU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIC%2Be4pzv%2BGwrwtoQVfABziSjZ9sRI8sXBe6dnzbJyucoAiEAgPY0fligXzyK%2FZ5JA6%2FOqkJdhNO%2BNdATDk3f9oW8Knoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDL8yk1PMKHAh3hFWPSrcA4ckk%2BcfJP%2BgpfxtCzebTxa5Lg3lOvc2DxHII1anHctnByk6ygjqgY%2FRPXyHG4iciNWhSd0xszIDx3Gi6GqK1OaiyF7TCxPPeH%2Bd9LnbA0%2FbNhLnaHFojZR%2BGUc%2BVGGi8GMKek3pMkXFDXkZD9uA%2BVjLehkNVcahGeKOhx0xQXBhCcPDgkJTwJlKQKOnOWdUQ2RULTTONZS2ZKGphgDAG7LZ5eL8ANGizN%2BRZS%2FEqtqL2migZ5Qzvf4Yt8oexi6SPxHvd04i4raTO%2B4NYZYzGQ5mItzCACLcmNri%2F3Z228v0is1y5Rc13xzecWEp0YI4Aslc61MyMx9EgfS5jr7524nDlHA62sMuxxWU8uc0ggEQvfO72YfF7x%2BEtremLaDQJjWSo20%2BCxHgoYu7cUHtECXibfbSb%2B7psfS3saTHd6XF%2Bj8k%2BlB2LawJ%2B3a4Pn1MQ%2F2D5IbhaTEoNBoNgX3VgsScHbuiyV9%2BUfpRJEWTdmUg2Tj3yWveROXKjDl31QzKU1dBsGPDzTyEHxbBNd3k0Xs7lLlLgEQt%2FCLOIhwYmeO9sZKyloTTZqs9vcp4cWji%2F%2BTV7pnib%2BBIfgwjiyrhsIjbfL2a4SlnWGvx7X2O19D0qVaA7biJHc3Qz7d6MPvB%2BMQGOqUB3YDtX8NfYEVPgg%2BM9ZIebaWOQGVRLMkstnlhZ%2FT7wAVvf7gBl8HU5zx8%2FyAtR9WGwEzfdZJ01fx3cpxqSLg7q6%2Bh3qdF3exfn4e%2FcSUnOu%2F8q89rWirJ%2B1%2F9BXeOvUfrm%2B%2BRcVc3flCVOEpfFCqsHn2uGk1YasN0M6lRZGHlDzz1rF3eprbc%2FbnlDSSSQiX8Gbxa6f4ygGmdOOpCtxM9F2lUBLge&X-Amz-Signature=9e2843d11bace55c0bbe5024ac0b6ca9691e517bc646309fd8b68f6331c5157e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNN2PBFU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIC%2Be4pzv%2BGwrwtoQVfABziSjZ9sRI8sXBe6dnzbJyucoAiEAgPY0fligXzyK%2FZ5JA6%2FOqkJdhNO%2BNdATDk3f9oW8Knoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDL8yk1PMKHAh3hFWPSrcA4ckk%2BcfJP%2BgpfxtCzebTxa5Lg3lOvc2DxHII1anHctnByk6ygjqgY%2FRPXyHG4iciNWhSd0xszIDx3Gi6GqK1OaiyF7TCxPPeH%2Bd9LnbA0%2FbNhLnaHFojZR%2BGUc%2BVGGi8GMKek3pMkXFDXkZD9uA%2BVjLehkNVcahGeKOhx0xQXBhCcPDgkJTwJlKQKOnOWdUQ2RULTTONZS2ZKGphgDAG7LZ5eL8ANGizN%2BRZS%2FEqtqL2migZ5Qzvf4Yt8oexi6SPxHvd04i4raTO%2B4NYZYzGQ5mItzCACLcmNri%2F3Z228v0is1y5Rc13xzecWEp0YI4Aslc61MyMx9EgfS5jr7524nDlHA62sMuxxWU8uc0ggEQvfO72YfF7x%2BEtremLaDQJjWSo20%2BCxHgoYu7cUHtECXibfbSb%2B7psfS3saTHd6XF%2Bj8k%2BlB2LawJ%2B3a4Pn1MQ%2F2D5IbhaTEoNBoNgX3VgsScHbuiyV9%2BUfpRJEWTdmUg2Tj3yWveROXKjDl31QzKU1dBsGPDzTyEHxbBNd3k0Xs7lLlLgEQt%2FCLOIhwYmeO9sZKyloTTZqs9vcp4cWji%2F%2BTV7pnib%2BBIfgwjiyrhsIjbfL2a4SlnWGvx7X2O19D0qVaA7biJHc3Qz7d6MPvB%2BMQGOqUB3YDtX8NfYEVPgg%2BM9ZIebaWOQGVRLMkstnlhZ%2FT7wAVvf7gBl8HU5zx8%2FyAtR9WGwEzfdZJ01fx3cpxqSLg7q6%2Bh3qdF3exfn4e%2FcSUnOu%2F8q89rWirJ%2B1%2F9BXeOvUfrm%2B%2BRcVc3flCVOEpfFCqsHn2uGk1YasN0M6lRZGHlDzz1rF3eprbc%2FbnlDSSSQiX8Gbxa6f4ygGmdOOpCtxM9F2lUBLge&X-Amz-Signature=b9b4098a479497e07ed7cf45fe21c1343669cb59448b671feb41876ada73ca45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNN2PBFU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIC%2Be4pzv%2BGwrwtoQVfABziSjZ9sRI8sXBe6dnzbJyucoAiEAgPY0fligXzyK%2FZ5JA6%2FOqkJdhNO%2BNdATDk3f9oW8Knoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDL8yk1PMKHAh3hFWPSrcA4ckk%2BcfJP%2BgpfxtCzebTxa5Lg3lOvc2DxHII1anHctnByk6ygjqgY%2FRPXyHG4iciNWhSd0xszIDx3Gi6GqK1OaiyF7TCxPPeH%2Bd9LnbA0%2FbNhLnaHFojZR%2BGUc%2BVGGi8GMKek3pMkXFDXkZD9uA%2BVjLehkNVcahGeKOhx0xQXBhCcPDgkJTwJlKQKOnOWdUQ2RULTTONZS2ZKGphgDAG7LZ5eL8ANGizN%2BRZS%2FEqtqL2migZ5Qzvf4Yt8oexi6SPxHvd04i4raTO%2B4NYZYzGQ5mItzCACLcmNri%2F3Z228v0is1y5Rc13xzecWEp0YI4Aslc61MyMx9EgfS5jr7524nDlHA62sMuxxWU8uc0ggEQvfO72YfF7x%2BEtremLaDQJjWSo20%2BCxHgoYu7cUHtECXibfbSb%2B7psfS3saTHd6XF%2Bj8k%2BlB2LawJ%2B3a4Pn1MQ%2F2D5IbhaTEoNBoNgX3VgsScHbuiyV9%2BUfpRJEWTdmUg2Tj3yWveROXKjDl31QzKU1dBsGPDzTyEHxbBNd3k0Xs7lLlLgEQt%2FCLOIhwYmeO9sZKyloTTZqs9vcp4cWji%2F%2BTV7pnib%2BBIfgwjiyrhsIjbfL2a4SlnWGvx7X2O19D0qVaA7biJHc3Qz7d6MPvB%2BMQGOqUB3YDtX8NfYEVPgg%2BM9ZIebaWOQGVRLMkstnlhZ%2FT7wAVvf7gBl8HU5zx8%2FyAtR9WGwEzfdZJ01fx3cpxqSLg7q6%2Bh3qdF3exfn4e%2FcSUnOu%2F8q89rWirJ%2B1%2F9BXeOvUfrm%2B%2BRcVc3flCVOEpfFCqsHn2uGk1YasN0M6lRZGHlDzz1rF3eprbc%2FbnlDSSSQiX8Gbxa6f4ygGmdOOpCtxM9F2lUBLge&X-Amz-Signature=841dd62a75ca6bb3be3888800f1f2863d9191aacf2d5336247cb94f2a1530275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNN2PBFU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIC%2Be4pzv%2BGwrwtoQVfABziSjZ9sRI8sXBe6dnzbJyucoAiEAgPY0fligXzyK%2FZ5JA6%2FOqkJdhNO%2BNdATDk3f9oW8Knoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDL8yk1PMKHAh3hFWPSrcA4ckk%2BcfJP%2BgpfxtCzebTxa5Lg3lOvc2DxHII1anHctnByk6ygjqgY%2FRPXyHG4iciNWhSd0xszIDx3Gi6GqK1OaiyF7TCxPPeH%2Bd9LnbA0%2FbNhLnaHFojZR%2BGUc%2BVGGi8GMKek3pMkXFDXkZD9uA%2BVjLehkNVcahGeKOhx0xQXBhCcPDgkJTwJlKQKOnOWdUQ2RULTTONZS2ZKGphgDAG7LZ5eL8ANGizN%2BRZS%2FEqtqL2migZ5Qzvf4Yt8oexi6SPxHvd04i4raTO%2B4NYZYzGQ5mItzCACLcmNri%2F3Z228v0is1y5Rc13xzecWEp0YI4Aslc61MyMx9EgfS5jr7524nDlHA62sMuxxWU8uc0ggEQvfO72YfF7x%2BEtremLaDQJjWSo20%2BCxHgoYu7cUHtECXibfbSb%2B7psfS3saTHd6XF%2Bj8k%2BlB2LawJ%2B3a4Pn1MQ%2F2D5IbhaTEoNBoNgX3VgsScHbuiyV9%2BUfpRJEWTdmUg2Tj3yWveROXKjDl31QzKU1dBsGPDzTyEHxbBNd3k0Xs7lLlLgEQt%2FCLOIhwYmeO9sZKyloTTZqs9vcp4cWji%2F%2BTV7pnib%2BBIfgwjiyrhsIjbfL2a4SlnWGvx7X2O19D0qVaA7biJHc3Qz7d6MPvB%2BMQGOqUB3YDtX8NfYEVPgg%2BM9ZIebaWOQGVRLMkstnlhZ%2FT7wAVvf7gBl8HU5zx8%2FyAtR9WGwEzfdZJ01fx3cpxqSLg7q6%2Bh3qdF3exfn4e%2FcSUnOu%2F8q89rWirJ%2B1%2F9BXeOvUfrm%2B%2BRcVc3flCVOEpfFCqsHn2uGk1YasN0M6lRZGHlDzz1rF3eprbc%2FbnlDSSSQiX8Gbxa6f4ygGmdOOpCtxM9F2lUBLge&X-Amz-Signature=cf4055ad0457dd09176bece700e35199f3789aab5e7ae9c0c4b777204a90d8a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNN2PBFU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIC%2Be4pzv%2BGwrwtoQVfABziSjZ9sRI8sXBe6dnzbJyucoAiEAgPY0fligXzyK%2FZ5JA6%2FOqkJdhNO%2BNdATDk3f9oW8Knoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDL8yk1PMKHAh3hFWPSrcA4ckk%2BcfJP%2BgpfxtCzebTxa5Lg3lOvc2DxHII1anHctnByk6ygjqgY%2FRPXyHG4iciNWhSd0xszIDx3Gi6GqK1OaiyF7TCxPPeH%2Bd9LnbA0%2FbNhLnaHFojZR%2BGUc%2BVGGi8GMKek3pMkXFDXkZD9uA%2BVjLehkNVcahGeKOhx0xQXBhCcPDgkJTwJlKQKOnOWdUQ2RULTTONZS2ZKGphgDAG7LZ5eL8ANGizN%2BRZS%2FEqtqL2migZ5Qzvf4Yt8oexi6SPxHvd04i4raTO%2B4NYZYzGQ5mItzCACLcmNri%2F3Z228v0is1y5Rc13xzecWEp0YI4Aslc61MyMx9EgfS5jr7524nDlHA62sMuxxWU8uc0ggEQvfO72YfF7x%2BEtremLaDQJjWSo20%2BCxHgoYu7cUHtECXibfbSb%2B7psfS3saTHd6XF%2Bj8k%2BlB2LawJ%2B3a4Pn1MQ%2F2D5IbhaTEoNBoNgX3VgsScHbuiyV9%2BUfpRJEWTdmUg2Tj3yWveROXKjDl31QzKU1dBsGPDzTyEHxbBNd3k0Xs7lLlLgEQt%2FCLOIhwYmeO9sZKyloTTZqs9vcp4cWji%2F%2BTV7pnib%2BBIfgwjiyrhsIjbfL2a4SlnWGvx7X2O19D0qVaA7biJHc3Qz7d6MPvB%2BMQGOqUB3YDtX8NfYEVPgg%2BM9ZIebaWOQGVRLMkstnlhZ%2FT7wAVvf7gBl8HU5zx8%2FyAtR9WGwEzfdZJ01fx3cpxqSLg7q6%2Bh3qdF3exfn4e%2FcSUnOu%2F8q89rWirJ%2B1%2F9BXeOvUfrm%2B%2BRcVc3flCVOEpfFCqsHn2uGk1YasN0M6lRZGHlDzz1rF3eprbc%2FbnlDSSSQiX8Gbxa6f4ygGmdOOpCtxM9F2lUBLge&X-Amz-Signature=c4bcc9b4fd2550a5a532d677a99530b2e393590eae7e8572d364142e412da478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNN2PBFU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIC%2Be4pzv%2BGwrwtoQVfABziSjZ9sRI8sXBe6dnzbJyucoAiEAgPY0fligXzyK%2FZ5JA6%2FOqkJdhNO%2BNdATDk3f9oW8Knoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDL8yk1PMKHAh3hFWPSrcA4ckk%2BcfJP%2BgpfxtCzebTxa5Lg3lOvc2DxHII1anHctnByk6ygjqgY%2FRPXyHG4iciNWhSd0xszIDx3Gi6GqK1OaiyF7TCxPPeH%2Bd9LnbA0%2FbNhLnaHFojZR%2BGUc%2BVGGi8GMKek3pMkXFDXkZD9uA%2BVjLehkNVcahGeKOhx0xQXBhCcPDgkJTwJlKQKOnOWdUQ2RULTTONZS2ZKGphgDAG7LZ5eL8ANGizN%2BRZS%2FEqtqL2migZ5Qzvf4Yt8oexi6SPxHvd04i4raTO%2B4NYZYzGQ5mItzCACLcmNri%2F3Z228v0is1y5Rc13xzecWEp0YI4Aslc61MyMx9EgfS5jr7524nDlHA62sMuxxWU8uc0ggEQvfO72YfF7x%2BEtremLaDQJjWSo20%2BCxHgoYu7cUHtECXibfbSb%2B7psfS3saTHd6XF%2Bj8k%2BlB2LawJ%2B3a4Pn1MQ%2F2D5IbhaTEoNBoNgX3VgsScHbuiyV9%2BUfpRJEWTdmUg2Tj3yWveROXKjDl31QzKU1dBsGPDzTyEHxbBNd3k0Xs7lLlLgEQt%2FCLOIhwYmeO9sZKyloTTZqs9vcp4cWji%2F%2BTV7pnib%2BBIfgwjiyrhsIjbfL2a4SlnWGvx7X2O19D0qVaA7biJHc3Qz7d6MPvB%2BMQGOqUB3YDtX8NfYEVPgg%2BM9ZIebaWOQGVRLMkstnlhZ%2FT7wAVvf7gBl8HU5zx8%2FyAtR9WGwEzfdZJ01fx3cpxqSLg7q6%2Bh3qdF3exfn4e%2FcSUnOu%2F8q89rWirJ%2B1%2F9BXeOvUfrm%2B%2BRcVc3flCVOEpfFCqsHn2uGk1YasN0M6lRZGHlDzz1rF3eprbc%2FbnlDSSSQiX8Gbxa6f4ygGmdOOpCtxM9F2lUBLge&X-Amz-Signature=287884ce6ed4df034bbd3ac29264538b5e9fdc73f1b6edc898a3705ec754aec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNN2PBFU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIC%2Be4pzv%2BGwrwtoQVfABziSjZ9sRI8sXBe6dnzbJyucoAiEAgPY0fligXzyK%2FZ5JA6%2FOqkJdhNO%2BNdATDk3f9oW8Knoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDL8yk1PMKHAh3hFWPSrcA4ckk%2BcfJP%2BgpfxtCzebTxa5Lg3lOvc2DxHII1anHctnByk6ygjqgY%2FRPXyHG4iciNWhSd0xszIDx3Gi6GqK1OaiyF7TCxPPeH%2Bd9LnbA0%2FbNhLnaHFojZR%2BGUc%2BVGGi8GMKek3pMkXFDXkZD9uA%2BVjLehkNVcahGeKOhx0xQXBhCcPDgkJTwJlKQKOnOWdUQ2RULTTONZS2ZKGphgDAG7LZ5eL8ANGizN%2BRZS%2FEqtqL2migZ5Qzvf4Yt8oexi6SPxHvd04i4raTO%2B4NYZYzGQ5mItzCACLcmNri%2F3Z228v0is1y5Rc13xzecWEp0YI4Aslc61MyMx9EgfS5jr7524nDlHA62sMuxxWU8uc0ggEQvfO72YfF7x%2BEtremLaDQJjWSo20%2BCxHgoYu7cUHtECXibfbSb%2B7psfS3saTHd6XF%2Bj8k%2BlB2LawJ%2B3a4Pn1MQ%2F2D5IbhaTEoNBoNgX3VgsScHbuiyV9%2BUfpRJEWTdmUg2Tj3yWveROXKjDl31QzKU1dBsGPDzTyEHxbBNd3k0Xs7lLlLgEQt%2FCLOIhwYmeO9sZKyloTTZqs9vcp4cWji%2F%2BTV7pnib%2BBIfgwjiyrhsIjbfL2a4SlnWGvx7X2O19D0qVaA7biJHc3Qz7d6MPvB%2BMQGOqUB3YDtX8NfYEVPgg%2BM9ZIebaWOQGVRLMkstnlhZ%2FT7wAVvf7gBl8HU5zx8%2FyAtR9WGwEzfdZJ01fx3cpxqSLg7q6%2Bh3qdF3exfn4e%2FcSUnOu%2F8q89rWirJ%2B1%2F9BXeOvUfrm%2B%2BRcVc3flCVOEpfFCqsHn2uGk1YasN0M6lRZGHlDzz1rF3eprbc%2FbnlDSSSQiX8Gbxa6f4ygGmdOOpCtxM9F2lUBLge&X-Amz-Signature=841dd62a75ca6bb3be3888800f1f2863d9191aacf2d5336247cb94f2a1530275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNN2PBFU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIC%2Be4pzv%2BGwrwtoQVfABziSjZ9sRI8sXBe6dnzbJyucoAiEAgPY0fligXzyK%2FZ5JA6%2FOqkJdhNO%2BNdATDk3f9oW8Knoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDL8yk1PMKHAh3hFWPSrcA4ckk%2BcfJP%2BgpfxtCzebTxa5Lg3lOvc2DxHII1anHctnByk6ygjqgY%2FRPXyHG4iciNWhSd0xszIDx3Gi6GqK1OaiyF7TCxPPeH%2Bd9LnbA0%2FbNhLnaHFojZR%2BGUc%2BVGGi8GMKek3pMkXFDXkZD9uA%2BVjLehkNVcahGeKOhx0xQXBhCcPDgkJTwJlKQKOnOWdUQ2RULTTONZS2ZKGphgDAG7LZ5eL8ANGizN%2BRZS%2FEqtqL2migZ5Qzvf4Yt8oexi6SPxHvd04i4raTO%2B4NYZYzGQ5mItzCACLcmNri%2F3Z228v0is1y5Rc13xzecWEp0YI4Aslc61MyMx9EgfS5jr7524nDlHA62sMuxxWU8uc0ggEQvfO72YfF7x%2BEtremLaDQJjWSo20%2BCxHgoYu7cUHtECXibfbSb%2B7psfS3saTHd6XF%2Bj8k%2BlB2LawJ%2B3a4Pn1MQ%2F2D5IbhaTEoNBoNgX3VgsScHbuiyV9%2BUfpRJEWTdmUg2Tj3yWveROXKjDl31QzKU1dBsGPDzTyEHxbBNd3k0Xs7lLlLgEQt%2FCLOIhwYmeO9sZKyloTTZqs9vcp4cWji%2F%2BTV7pnib%2BBIfgwjiyrhsIjbfL2a4SlnWGvx7X2O19D0qVaA7biJHc3Qz7d6MPvB%2BMQGOqUB3YDtX8NfYEVPgg%2BM9ZIebaWOQGVRLMkstnlhZ%2FT7wAVvf7gBl8HU5zx8%2FyAtR9WGwEzfdZJ01fx3cpxqSLg7q6%2Bh3qdF3exfn4e%2FcSUnOu%2F8q89rWirJ%2B1%2F9BXeOvUfrm%2B%2BRcVc3flCVOEpfFCqsHn2uGk1YasN0M6lRZGHlDzz1rF3eprbc%2FbnlDSSSQiX8Gbxa6f4ygGmdOOpCtxM9F2lUBLge&X-Amz-Signature=aaf23277f38fbe6c3d98579740ae4217732a13e393b92055212611efc49d5c28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNN2PBFU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIC%2Be4pzv%2BGwrwtoQVfABziSjZ9sRI8sXBe6dnzbJyucoAiEAgPY0fligXzyK%2FZ5JA6%2FOqkJdhNO%2BNdATDk3f9oW8Knoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDL8yk1PMKHAh3hFWPSrcA4ckk%2BcfJP%2BgpfxtCzebTxa5Lg3lOvc2DxHII1anHctnByk6ygjqgY%2FRPXyHG4iciNWhSd0xszIDx3Gi6GqK1OaiyF7TCxPPeH%2Bd9LnbA0%2FbNhLnaHFojZR%2BGUc%2BVGGi8GMKek3pMkXFDXkZD9uA%2BVjLehkNVcahGeKOhx0xQXBhCcPDgkJTwJlKQKOnOWdUQ2RULTTONZS2ZKGphgDAG7LZ5eL8ANGizN%2BRZS%2FEqtqL2migZ5Qzvf4Yt8oexi6SPxHvd04i4raTO%2B4NYZYzGQ5mItzCACLcmNri%2F3Z228v0is1y5Rc13xzecWEp0YI4Aslc61MyMx9EgfS5jr7524nDlHA62sMuxxWU8uc0ggEQvfO72YfF7x%2BEtremLaDQJjWSo20%2BCxHgoYu7cUHtECXibfbSb%2B7psfS3saTHd6XF%2Bj8k%2BlB2LawJ%2B3a4Pn1MQ%2F2D5IbhaTEoNBoNgX3VgsScHbuiyV9%2BUfpRJEWTdmUg2Tj3yWveROXKjDl31QzKU1dBsGPDzTyEHxbBNd3k0Xs7lLlLgEQt%2FCLOIhwYmeO9sZKyloTTZqs9vcp4cWji%2F%2BTV7pnib%2BBIfgwjiyrhsIjbfL2a4SlnWGvx7X2O19D0qVaA7biJHc3Qz7d6MPvB%2BMQGOqUB3YDtX8NfYEVPgg%2BM9ZIebaWOQGVRLMkstnlhZ%2FT7wAVvf7gBl8HU5zx8%2FyAtR9WGwEzfdZJ01fx3cpxqSLg7q6%2Bh3qdF3exfn4e%2FcSUnOu%2F8q89rWirJ%2B1%2F9BXeOvUfrm%2B%2BRcVc3flCVOEpfFCqsHn2uGk1YasN0M6lRZGHlDzz1rF3eprbc%2FbnlDSSSQiX8Gbxa6f4ygGmdOOpCtxM9F2lUBLge&X-Amz-Signature=7b0f926868cbbb8789991bba68002dac6e959b6a9bbe35c9fb9d8cd9db303b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNN2PBFU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIC%2Be4pzv%2BGwrwtoQVfABziSjZ9sRI8sXBe6dnzbJyucoAiEAgPY0fligXzyK%2FZ5JA6%2FOqkJdhNO%2BNdATDk3f9oW8Knoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDL8yk1PMKHAh3hFWPSrcA4ckk%2BcfJP%2BgpfxtCzebTxa5Lg3lOvc2DxHII1anHctnByk6ygjqgY%2FRPXyHG4iciNWhSd0xszIDx3Gi6GqK1OaiyF7TCxPPeH%2Bd9LnbA0%2FbNhLnaHFojZR%2BGUc%2BVGGi8GMKek3pMkXFDXkZD9uA%2BVjLehkNVcahGeKOhx0xQXBhCcPDgkJTwJlKQKOnOWdUQ2RULTTONZS2ZKGphgDAG7LZ5eL8ANGizN%2BRZS%2FEqtqL2migZ5Qzvf4Yt8oexi6SPxHvd04i4raTO%2B4NYZYzGQ5mItzCACLcmNri%2F3Z228v0is1y5Rc13xzecWEp0YI4Aslc61MyMx9EgfS5jr7524nDlHA62sMuxxWU8uc0ggEQvfO72YfF7x%2BEtremLaDQJjWSo20%2BCxHgoYu7cUHtECXibfbSb%2B7psfS3saTHd6XF%2Bj8k%2BlB2LawJ%2B3a4Pn1MQ%2F2D5IbhaTEoNBoNgX3VgsScHbuiyV9%2BUfpRJEWTdmUg2Tj3yWveROXKjDl31QzKU1dBsGPDzTyEHxbBNd3k0Xs7lLlLgEQt%2FCLOIhwYmeO9sZKyloTTZqs9vcp4cWji%2F%2BTV7pnib%2BBIfgwjiyrhsIjbfL2a4SlnWGvx7X2O19D0qVaA7biJHc3Qz7d6MPvB%2BMQGOqUB3YDtX8NfYEVPgg%2BM9ZIebaWOQGVRLMkstnlhZ%2FT7wAVvf7gBl8HU5zx8%2FyAtR9WGwEzfdZJ01fx3cpxqSLg7q6%2Bh3qdF3exfn4e%2FcSUnOu%2F8q89rWirJ%2B1%2F9BXeOvUfrm%2B%2BRcVc3flCVOEpfFCqsHn2uGk1YasN0M6lRZGHlDzz1rF3eprbc%2FbnlDSSSQiX8Gbxa6f4ygGmdOOpCtxM9F2lUBLge&X-Amz-Signature=70b56821a77795bd7b2bc9e6b6a009334d7b8cd8d215f03ea9b2a61adbfc7537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
