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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMST4S6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcwHV34KO6q475IggHkiR5pmGEmhCd72iXm4H8LwHrAwIgdS9zV7UNTkNjSkrb3gdNUSZ4tiyhCFXCywl4jEPvYYQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrGfXTNZs3oq6LBiSrcA0iRRQbuENry77KaTEQdNtewBgarL%2BZzQQ1%2BXr06yRFuayKNyxrkYpecP1cFaOepLRmy25aBlQJicuJpwF98sIQ0k3yvTsDqaEfOFJ0qJ%2FrDwISDeUnH7c8Ta%2BQunN9dzPLg%2Bip6EYsTxwY4YAuTqcFhKsEDtYkSky3B7DMHxlPdt1GGne9qEjVsgC88nVcmQ5UVFPbcZXFECqboafwOsxG7l%2FK1Exvv5YNyBvY4uvaJ7S7EqQs9OZWJmsttqKxXjlMFcmTUhFhaIfGSsiUm4QlVnKOAKyu3O%2BeoCoJl%2FJ14CNS9f75b0zvKZUhn30ilwmVwy60WtPObA6%2BQvsXHrjypA1MOLDnmYHBJkUU3oEr9oV5WwPGkpSZDRY4HXtlPC2F1lxuWB8yEJjMsuiyLrOCuTfyQQqc%2BrLs8XM2WEU2NsCiY62Y%2Bim4eXE9i%2BLI3TrntraqYOMVmhI06VhNEWkNbaNw93xns6eCNguz19HXsCeeKOVpgwXNmU6t%2FBpAAFpJrMttLxkh5At9t1ivMO4pBmcDsi873x94%2BZShf7tJk2Md9syZDRgAQZWdbANfsYtpnJSOkcWM%2Be00tRfba2%2F5tRe5clmxdhWHibboQ2UONc9Tg7rDUdx1NFDRGMNXcrsQGOqUBwOXG8gpva%2FzeJZSZ7x8nRNI7hHLBmExefNvI7eaFbbOw%2BZcp3WgGJ9l3ruO9la7Mk6VzeeMPUCxiBGQiaCc3WCyv3R1EatGI8c3Z3UbNDBxuQ1D7ypZIfwiGIuqNH9foNs7UEkQguiqnjQ5tlP7ALIxHGRmEmOZown%2BZQtX1lviw%2BZl6GdNbXPrIBFMwGwvwHtyLGnMWNL5kSkWiwtLypc8PP6GF&X-Amz-Signature=303126a6e41fd46a14b54931a082778cdc37a004e3da0486482fb67fab22bdce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMST4S6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcwHV34KO6q475IggHkiR5pmGEmhCd72iXm4H8LwHrAwIgdS9zV7UNTkNjSkrb3gdNUSZ4tiyhCFXCywl4jEPvYYQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrGfXTNZs3oq6LBiSrcA0iRRQbuENry77KaTEQdNtewBgarL%2BZzQQ1%2BXr06yRFuayKNyxrkYpecP1cFaOepLRmy25aBlQJicuJpwF98sIQ0k3yvTsDqaEfOFJ0qJ%2FrDwISDeUnH7c8Ta%2BQunN9dzPLg%2Bip6EYsTxwY4YAuTqcFhKsEDtYkSky3B7DMHxlPdt1GGne9qEjVsgC88nVcmQ5UVFPbcZXFECqboafwOsxG7l%2FK1Exvv5YNyBvY4uvaJ7S7EqQs9OZWJmsttqKxXjlMFcmTUhFhaIfGSsiUm4QlVnKOAKyu3O%2BeoCoJl%2FJ14CNS9f75b0zvKZUhn30ilwmVwy60WtPObA6%2BQvsXHrjypA1MOLDnmYHBJkUU3oEr9oV5WwPGkpSZDRY4HXtlPC2F1lxuWB8yEJjMsuiyLrOCuTfyQQqc%2BrLs8XM2WEU2NsCiY62Y%2Bim4eXE9i%2BLI3TrntraqYOMVmhI06VhNEWkNbaNw93xns6eCNguz19HXsCeeKOVpgwXNmU6t%2FBpAAFpJrMttLxkh5At9t1ivMO4pBmcDsi873x94%2BZShf7tJk2Md9syZDRgAQZWdbANfsYtpnJSOkcWM%2Be00tRfba2%2F5tRe5clmxdhWHibboQ2UONc9Tg7rDUdx1NFDRGMNXcrsQGOqUBwOXG8gpva%2FzeJZSZ7x8nRNI7hHLBmExefNvI7eaFbbOw%2BZcp3WgGJ9l3ruO9la7Mk6VzeeMPUCxiBGQiaCc3WCyv3R1EatGI8c3Z3UbNDBxuQ1D7ypZIfwiGIuqNH9foNs7UEkQguiqnjQ5tlP7ALIxHGRmEmOZown%2BZQtX1lviw%2BZl6GdNbXPrIBFMwGwvwHtyLGnMWNL5kSkWiwtLypc8PP6GF&X-Amz-Signature=032a016d9828cd4ab5e6e4f29cefa9b759cc561194740cdbfc4ac20907435e31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMST4S6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcwHV34KO6q475IggHkiR5pmGEmhCd72iXm4H8LwHrAwIgdS9zV7UNTkNjSkrb3gdNUSZ4tiyhCFXCywl4jEPvYYQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrGfXTNZs3oq6LBiSrcA0iRRQbuENry77KaTEQdNtewBgarL%2BZzQQ1%2BXr06yRFuayKNyxrkYpecP1cFaOepLRmy25aBlQJicuJpwF98sIQ0k3yvTsDqaEfOFJ0qJ%2FrDwISDeUnH7c8Ta%2BQunN9dzPLg%2Bip6EYsTxwY4YAuTqcFhKsEDtYkSky3B7DMHxlPdt1GGne9qEjVsgC88nVcmQ5UVFPbcZXFECqboafwOsxG7l%2FK1Exvv5YNyBvY4uvaJ7S7EqQs9OZWJmsttqKxXjlMFcmTUhFhaIfGSsiUm4QlVnKOAKyu3O%2BeoCoJl%2FJ14CNS9f75b0zvKZUhn30ilwmVwy60WtPObA6%2BQvsXHrjypA1MOLDnmYHBJkUU3oEr9oV5WwPGkpSZDRY4HXtlPC2F1lxuWB8yEJjMsuiyLrOCuTfyQQqc%2BrLs8XM2WEU2NsCiY62Y%2Bim4eXE9i%2BLI3TrntraqYOMVmhI06VhNEWkNbaNw93xns6eCNguz19HXsCeeKOVpgwXNmU6t%2FBpAAFpJrMttLxkh5At9t1ivMO4pBmcDsi873x94%2BZShf7tJk2Md9syZDRgAQZWdbANfsYtpnJSOkcWM%2Be00tRfba2%2F5tRe5clmxdhWHibboQ2UONc9Tg7rDUdx1NFDRGMNXcrsQGOqUBwOXG8gpva%2FzeJZSZ7x8nRNI7hHLBmExefNvI7eaFbbOw%2BZcp3WgGJ9l3ruO9la7Mk6VzeeMPUCxiBGQiaCc3WCyv3R1EatGI8c3Z3UbNDBxuQ1D7ypZIfwiGIuqNH9foNs7UEkQguiqnjQ5tlP7ALIxHGRmEmOZown%2BZQtX1lviw%2BZl6GdNbXPrIBFMwGwvwHtyLGnMWNL5kSkWiwtLypc8PP6GF&X-Amz-Signature=dae8ffbbbff34b7f84e10f3a5eb843aa17ecb5fe0305e544e43cb3905bc5a8bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMST4S6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcwHV34KO6q475IggHkiR5pmGEmhCd72iXm4H8LwHrAwIgdS9zV7UNTkNjSkrb3gdNUSZ4tiyhCFXCywl4jEPvYYQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrGfXTNZs3oq6LBiSrcA0iRRQbuENry77KaTEQdNtewBgarL%2BZzQQ1%2BXr06yRFuayKNyxrkYpecP1cFaOepLRmy25aBlQJicuJpwF98sIQ0k3yvTsDqaEfOFJ0qJ%2FrDwISDeUnH7c8Ta%2BQunN9dzPLg%2Bip6EYsTxwY4YAuTqcFhKsEDtYkSky3B7DMHxlPdt1GGne9qEjVsgC88nVcmQ5UVFPbcZXFECqboafwOsxG7l%2FK1Exvv5YNyBvY4uvaJ7S7EqQs9OZWJmsttqKxXjlMFcmTUhFhaIfGSsiUm4QlVnKOAKyu3O%2BeoCoJl%2FJ14CNS9f75b0zvKZUhn30ilwmVwy60WtPObA6%2BQvsXHrjypA1MOLDnmYHBJkUU3oEr9oV5WwPGkpSZDRY4HXtlPC2F1lxuWB8yEJjMsuiyLrOCuTfyQQqc%2BrLs8XM2WEU2NsCiY62Y%2Bim4eXE9i%2BLI3TrntraqYOMVmhI06VhNEWkNbaNw93xns6eCNguz19HXsCeeKOVpgwXNmU6t%2FBpAAFpJrMttLxkh5At9t1ivMO4pBmcDsi873x94%2BZShf7tJk2Md9syZDRgAQZWdbANfsYtpnJSOkcWM%2Be00tRfba2%2F5tRe5clmxdhWHibboQ2UONc9Tg7rDUdx1NFDRGMNXcrsQGOqUBwOXG8gpva%2FzeJZSZ7x8nRNI7hHLBmExefNvI7eaFbbOw%2BZcp3WgGJ9l3ruO9la7Mk6VzeeMPUCxiBGQiaCc3WCyv3R1EatGI8c3Z3UbNDBxuQ1D7ypZIfwiGIuqNH9foNs7UEkQguiqnjQ5tlP7ALIxHGRmEmOZown%2BZQtX1lviw%2BZl6GdNbXPrIBFMwGwvwHtyLGnMWNL5kSkWiwtLypc8PP6GF&X-Amz-Signature=7af6ba68c8d092ae0c40f19f8d2066c7f8ae26cc5585714ec89b711019279a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMST4S6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcwHV34KO6q475IggHkiR5pmGEmhCd72iXm4H8LwHrAwIgdS9zV7UNTkNjSkrb3gdNUSZ4tiyhCFXCywl4jEPvYYQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrGfXTNZs3oq6LBiSrcA0iRRQbuENry77KaTEQdNtewBgarL%2BZzQQ1%2BXr06yRFuayKNyxrkYpecP1cFaOepLRmy25aBlQJicuJpwF98sIQ0k3yvTsDqaEfOFJ0qJ%2FrDwISDeUnH7c8Ta%2BQunN9dzPLg%2Bip6EYsTxwY4YAuTqcFhKsEDtYkSky3B7DMHxlPdt1GGne9qEjVsgC88nVcmQ5UVFPbcZXFECqboafwOsxG7l%2FK1Exvv5YNyBvY4uvaJ7S7EqQs9OZWJmsttqKxXjlMFcmTUhFhaIfGSsiUm4QlVnKOAKyu3O%2BeoCoJl%2FJ14CNS9f75b0zvKZUhn30ilwmVwy60WtPObA6%2BQvsXHrjypA1MOLDnmYHBJkUU3oEr9oV5WwPGkpSZDRY4HXtlPC2F1lxuWB8yEJjMsuiyLrOCuTfyQQqc%2BrLs8XM2WEU2NsCiY62Y%2Bim4eXE9i%2BLI3TrntraqYOMVmhI06VhNEWkNbaNw93xns6eCNguz19HXsCeeKOVpgwXNmU6t%2FBpAAFpJrMttLxkh5At9t1ivMO4pBmcDsi873x94%2BZShf7tJk2Md9syZDRgAQZWdbANfsYtpnJSOkcWM%2Be00tRfba2%2F5tRe5clmxdhWHibboQ2UONc9Tg7rDUdx1NFDRGMNXcrsQGOqUBwOXG8gpva%2FzeJZSZ7x8nRNI7hHLBmExefNvI7eaFbbOw%2BZcp3WgGJ9l3ruO9la7Mk6VzeeMPUCxiBGQiaCc3WCyv3R1EatGI8c3Z3UbNDBxuQ1D7ypZIfwiGIuqNH9foNs7UEkQguiqnjQ5tlP7ALIxHGRmEmOZown%2BZQtX1lviw%2BZl6GdNbXPrIBFMwGwvwHtyLGnMWNL5kSkWiwtLypc8PP6GF&X-Amz-Signature=4896ffa7639164da83f2e6196ec2338bc41fac3c4ae5fce8de912d9a8fbdf35c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMST4S6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcwHV34KO6q475IggHkiR5pmGEmhCd72iXm4H8LwHrAwIgdS9zV7UNTkNjSkrb3gdNUSZ4tiyhCFXCywl4jEPvYYQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrGfXTNZs3oq6LBiSrcA0iRRQbuENry77KaTEQdNtewBgarL%2BZzQQ1%2BXr06yRFuayKNyxrkYpecP1cFaOepLRmy25aBlQJicuJpwF98sIQ0k3yvTsDqaEfOFJ0qJ%2FrDwISDeUnH7c8Ta%2BQunN9dzPLg%2Bip6EYsTxwY4YAuTqcFhKsEDtYkSky3B7DMHxlPdt1GGne9qEjVsgC88nVcmQ5UVFPbcZXFECqboafwOsxG7l%2FK1Exvv5YNyBvY4uvaJ7S7EqQs9OZWJmsttqKxXjlMFcmTUhFhaIfGSsiUm4QlVnKOAKyu3O%2BeoCoJl%2FJ14CNS9f75b0zvKZUhn30ilwmVwy60WtPObA6%2BQvsXHrjypA1MOLDnmYHBJkUU3oEr9oV5WwPGkpSZDRY4HXtlPC2F1lxuWB8yEJjMsuiyLrOCuTfyQQqc%2BrLs8XM2WEU2NsCiY62Y%2Bim4eXE9i%2BLI3TrntraqYOMVmhI06VhNEWkNbaNw93xns6eCNguz19HXsCeeKOVpgwXNmU6t%2FBpAAFpJrMttLxkh5At9t1ivMO4pBmcDsi873x94%2BZShf7tJk2Md9syZDRgAQZWdbANfsYtpnJSOkcWM%2Be00tRfba2%2F5tRe5clmxdhWHibboQ2UONc9Tg7rDUdx1NFDRGMNXcrsQGOqUBwOXG8gpva%2FzeJZSZ7x8nRNI7hHLBmExefNvI7eaFbbOw%2BZcp3WgGJ9l3ruO9la7Mk6VzeeMPUCxiBGQiaCc3WCyv3R1EatGI8c3Z3UbNDBxuQ1D7ypZIfwiGIuqNH9foNs7UEkQguiqnjQ5tlP7ALIxHGRmEmOZown%2BZQtX1lviw%2BZl6GdNbXPrIBFMwGwvwHtyLGnMWNL5kSkWiwtLypc8PP6GF&X-Amz-Signature=fbf40759e19d4a659849a76191f5111b44de2041107737cfe1b4918cb39bdb64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMST4S6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcwHV34KO6q475IggHkiR5pmGEmhCd72iXm4H8LwHrAwIgdS9zV7UNTkNjSkrb3gdNUSZ4tiyhCFXCywl4jEPvYYQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrGfXTNZs3oq6LBiSrcA0iRRQbuENry77KaTEQdNtewBgarL%2BZzQQ1%2BXr06yRFuayKNyxrkYpecP1cFaOepLRmy25aBlQJicuJpwF98sIQ0k3yvTsDqaEfOFJ0qJ%2FrDwISDeUnH7c8Ta%2BQunN9dzPLg%2Bip6EYsTxwY4YAuTqcFhKsEDtYkSky3B7DMHxlPdt1GGne9qEjVsgC88nVcmQ5UVFPbcZXFECqboafwOsxG7l%2FK1Exvv5YNyBvY4uvaJ7S7EqQs9OZWJmsttqKxXjlMFcmTUhFhaIfGSsiUm4QlVnKOAKyu3O%2BeoCoJl%2FJ14CNS9f75b0zvKZUhn30ilwmVwy60WtPObA6%2BQvsXHrjypA1MOLDnmYHBJkUU3oEr9oV5WwPGkpSZDRY4HXtlPC2F1lxuWB8yEJjMsuiyLrOCuTfyQQqc%2BrLs8XM2WEU2NsCiY62Y%2Bim4eXE9i%2BLI3TrntraqYOMVmhI06VhNEWkNbaNw93xns6eCNguz19HXsCeeKOVpgwXNmU6t%2FBpAAFpJrMttLxkh5At9t1ivMO4pBmcDsi873x94%2BZShf7tJk2Md9syZDRgAQZWdbANfsYtpnJSOkcWM%2Be00tRfba2%2F5tRe5clmxdhWHibboQ2UONc9Tg7rDUdx1NFDRGMNXcrsQGOqUBwOXG8gpva%2FzeJZSZ7x8nRNI7hHLBmExefNvI7eaFbbOw%2BZcp3WgGJ9l3ruO9la7Mk6VzeeMPUCxiBGQiaCc3WCyv3R1EatGI8c3Z3UbNDBxuQ1D7ypZIfwiGIuqNH9foNs7UEkQguiqnjQ5tlP7ALIxHGRmEmOZown%2BZQtX1lviw%2BZl6GdNbXPrIBFMwGwvwHtyLGnMWNL5kSkWiwtLypc8PP6GF&X-Amz-Signature=b792f2e80319d5f220ec310855b295f490aede3bb8c91a7c9762e3eb2c60e7fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMST4S6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcwHV34KO6q475IggHkiR5pmGEmhCd72iXm4H8LwHrAwIgdS9zV7UNTkNjSkrb3gdNUSZ4tiyhCFXCywl4jEPvYYQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrGfXTNZs3oq6LBiSrcA0iRRQbuENry77KaTEQdNtewBgarL%2BZzQQ1%2BXr06yRFuayKNyxrkYpecP1cFaOepLRmy25aBlQJicuJpwF98sIQ0k3yvTsDqaEfOFJ0qJ%2FrDwISDeUnH7c8Ta%2BQunN9dzPLg%2Bip6EYsTxwY4YAuTqcFhKsEDtYkSky3B7DMHxlPdt1GGne9qEjVsgC88nVcmQ5UVFPbcZXFECqboafwOsxG7l%2FK1Exvv5YNyBvY4uvaJ7S7EqQs9OZWJmsttqKxXjlMFcmTUhFhaIfGSsiUm4QlVnKOAKyu3O%2BeoCoJl%2FJ14CNS9f75b0zvKZUhn30ilwmVwy60WtPObA6%2BQvsXHrjypA1MOLDnmYHBJkUU3oEr9oV5WwPGkpSZDRY4HXtlPC2F1lxuWB8yEJjMsuiyLrOCuTfyQQqc%2BrLs8XM2WEU2NsCiY62Y%2Bim4eXE9i%2BLI3TrntraqYOMVmhI06VhNEWkNbaNw93xns6eCNguz19HXsCeeKOVpgwXNmU6t%2FBpAAFpJrMttLxkh5At9t1ivMO4pBmcDsi873x94%2BZShf7tJk2Md9syZDRgAQZWdbANfsYtpnJSOkcWM%2Be00tRfba2%2F5tRe5clmxdhWHibboQ2UONc9Tg7rDUdx1NFDRGMNXcrsQGOqUBwOXG8gpva%2FzeJZSZ7x8nRNI7hHLBmExefNvI7eaFbbOw%2BZcp3WgGJ9l3ruO9la7Mk6VzeeMPUCxiBGQiaCc3WCyv3R1EatGI8c3Z3UbNDBxuQ1D7ypZIfwiGIuqNH9foNs7UEkQguiqnjQ5tlP7ALIxHGRmEmOZown%2BZQtX1lviw%2BZl6GdNbXPrIBFMwGwvwHtyLGnMWNL5kSkWiwtLypc8PP6GF&X-Amz-Signature=0b22e8241f2834be7be06a654ae92e47271d1f06200e234a52988f7c48cefc79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMST4S6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcwHV34KO6q475IggHkiR5pmGEmhCd72iXm4H8LwHrAwIgdS9zV7UNTkNjSkrb3gdNUSZ4tiyhCFXCywl4jEPvYYQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrGfXTNZs3oq6LBiSrcA0iRRQbuENry77KaTEQdNtewBgarL%2BZzQQ1%2BXr06yRFuayKNyxrkYpecP1cFaOepLRmy25aBlQJicuJpwF98sIQ0k3yvTsDqaEfOFJ0qJ%2FrDwISDeUnH7c8Ta%2BQunN9dzPLg%2Bip6EYsTxwY4YAuTqcFhKsEDtYkSky3B7DMHxlPdt1GGne9qEjVsgC88nVcmQ5UVFPbcZXFECqboafwOsxG7l%2FK1Exvv5YNyBvY4uvaJ7S7EqQs9OZWJmsttqKxXjlMFcmTUhFhaIfGSsiUm4QlVnKOAKyu3O%2BeoCoJl%2FJ14CNS9f75b0zvKZUhn30ilwmVwy60WtPObA6%2BQvsXHrjypA1MOLDnmYHBJkUU3oEr9oV5WwPGkpSZDRY4HXtlPC2F1lxuWB8yEJjMsuiyLrOCuTfyQQqc%2BrLs8XM2WEU2NsCiY62Y%2Bim4eXE9i%2BLI3TrntraqYOMVmhI06VhNEWkNbaNw93xns6eCNguz19HXsCeeKOVpgwXNmU6t%2FBpAAFpJrMttLxkh5At9t1ivMO4pBmcDsi873x94%2BZShf7tJk2Md9syZDRgAQZWdbANfsYtpnJSOkcWM%2Be00tRfba2%2F5tRe5clmxdhWHibboQ2UONc9Tg7rDUdx1NFDRGMNXcrsQGOqUBwOXG8gpva%2FzeJZSZ7x8nRNI7hHLBmExefNvI7eaFbbOw%2BZcp3WgGJ9l3ruO9la7Mk6VzeeMPUCxiBGQiaCc3WCyv3R1EatGI8c3Z3UbNDBxuQ1D7ypZIfwiGIuqNH9foNs7UEkQguiqnjQ5tlP7ALIxHGRmEmOZown%2BZQtX1lviw%2BZl6GdNbXPrIBFMwGwvwHtyLGnMWNL5kSkWiwtLypc8PP6GF&X-Amz-Signature=f3c427c93c637a27849d0d9ac6691c6fbc753001d1c007e3a63e3d9e949b104b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMST4S6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcwHV34KO6q475IggHkiR5pmGEmhCd72iXm4H8LwHrAwIgdS9zV7UNTkNjSkrb3gdNUSZ4tiyhCFXCywl4jEPvYYQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrGfXTNZs3oq6LBiSrcA0iRRQbuENry77KaTEQdNtewBgarL%2BZzQQ1%2BXr06yRFuayKNyxrkYpecP1cFaOepLRmy25aBlQJicuJpwF98sIQ0k3yvTsDqaEfOFJ0qJ%2FrDwISDeUnH7c8Ta%2BQunN9dzPLg%2Bip6EYsTxwY4YAuTqcFhKsEDtYkSky3B7DMHxlPdt1GGne9qEjVsgC88nVcmQ5UVFPbcZXFECqboafwOsxG7l%2FK1Exvv5YNyBvY4uvaJ7S7EqQs9OZWJmsttqKxXjlMFcmTUhFhaIfGSsiUm4QlVnKOAKyu3O%2BeoCoJl%2FJ14CNS9f75b0zvKZUhn30ilwmVwy60WtPObA6%2BQvsXHrjypA1MOLDnmYHBJkUU3oEr9oV5WwPGkpSZDRY4HXtlPC2F1lxuWB8yEJjMsuiyLrOCuTfyQQqc%2BrLs8XM2WEU2NsCiY62Y%2Bim4eXE9i%2BLI3TrntraqYOMVmhI06VhNEWkNbaNw93xns6eCNguz19HXsCeeKOVpgwXNmU6t%2FBpAAFpJrMttLxkh5At9t1ivMO4pBmcDsi873x94%2BZShf7tJk2Md9syZDRgAQZWdbANfsYtpnJSOkcWM%2Be00tRfba2%2F5tRe5clmxdhWHibboQ2UONc9Tg7rDUdx1NFDRGMNXcrsQGOqUBwOXG8gpva%2FzeJZSZ7x8nRNI7hHLBmExefNvI7eaFbbOw%2BZcp3WgGJ9l3ruO9la7Mk6VzeeMPUCxiBGQiaCc3WCyv3R1EatGI8c3Z3UbNDBxuQ1D7ypZIfwiGIuqNH9foNs7UEkQguiqnjQ5tlP7ALIxHGRmEmOZown%2BZQtX1lviw%2BZl6GdNbXPrIBFMwGwvwHtyLGnMWNL5kSkWiwtLypc8PP6GF&X-Amz-Signature=b9c4b725613ce354ffda8b7a129c99ce4e91330cfd17d5df245f5de3afec816c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMST4S6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcwHV34KO6q475IggHkiR5pmGEmhCd72iXm4H8LwHrAwIgdS9zV7UNTkNjSkrb3gdNUSZ4tiyhCFXCywl4jEPvYYQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrGfXTNZs3oq6LBiSrcA0iRRQbuENry77KaTEQdNtewBgarL%2BZzQQ1%2BXr06yRFuayKNyxrkYpecP1cFaOepLRmy25aBlQJicuJpwF98sIQ0k3yvTsDqaEfOFJ0qJ%2FrDwISDeUnH7c8Ta%2BQunN9dzPLg%2Bip6EYsTxwY4YAuTqcFhKsEDtYkSky3B7DMHxlPdt1GGne9qEjVsgC88nVcmQ5UVFPbcZXFECqboafwOsxG7l%2FK1Exvv5YNyBvY4uvaJ7S7EqQs9OZWJmsttqKxXjlMFcmTUhFhaIfGSsiUm4QlVnKOAKyu3O%2BeoCoJl%2FJ14CNS9f75b0zvKZUhn30ilwmVwy60WtPObA6%2BQvsXHrjypA1MOLDnmYHBJkUU3oEr9oV5WwPGkpSZDRY4HXtlPC2F1lxuWB8yEJjMsuiyLrOCuTfyQQqc%2BrLs8XM2WEU2NsCiY62Y%2Bim4eXE9i%2BLI3TrntraqYOMVmhI06VhNEWkNbaNw93xns6eCNguz19HXsCeeKOVpgwXNmU6t%2FBpAAFpJrMttLxkh5At9t1ivMO4pBmcDsi873x94%2BZShf7tJk2Md9syZDRgAQZWdbANfsYtpnJSOkcWM%2Be00tRfba2%2F5tRe5clmxdhWHibboQ2UONc9Tg7rDUdx1NFDRGMNXcrsQGOqUBwOXG8gpva%2FzeJZSZ7x8nRNI7hHLBmExefNvI7eaFbbOw%2BZcp3WgGJ9l3ruO9la7Mk6VzeeMPUCxiBGQiaCc3WCyv3R1EatGI8c3Z3UbNDBxuQ1D7ypZIfwiGIuqNH9foNs7UEkQguiqnjQ5tlP7ALIxHGRmEmOZown%2BZQtX1lviw%2BZl6GdNbXPrIBFMwGwvwHtyLGnMWNL5kSkWiwtLypc8PP6GF&X-Amz-Signature=87c96a6b2dbecf787a3d6437b7eb4562ff285c8e391aa927661b035868921aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMST4S6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcwHV34KO6q475IggHkiR5pmGEmhCd72iXm4H8LwHrAwIgdS9zV7UNTkNjSkrb3gdNUSZ4tiyhCFXCywl4jEPvYYQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrGfXTNZs3oq6LBiSrcA0iRRQbuENry77KaTEQdNtewBgarL%2BZzQQ1%2BXr06yRFuayKNyxrkYpecP1cFaOepLRmy25aBlQJicuJpwF98sIQ0k3yvTsDqaEfOFJ0qJ%2FrDwISDeUnH7c8Ta%2BQunN9dzPLg%2Bip6EYsTxwY4YAuTqcFhKsEDtYkSky3B7DMHxlPdt1GGne9qEjVsgC88nVcmQ5UVFPbcZXFECqboafwOsxG7l%2FK1Exvv5YNyBvY4uvaJ7S7EqQs9OZWJmsttqKxXjlMFcmTUhFhaIfGSsiUm4QlVnKOAKyu3O%2BeoCoJl%2FJ14CNS9f75b0zvKZUhn30ilwmVwy60WtPObA6%2BQvsXHrjypA1MOLDnmYHBJkUU3oEr9oV5WwPGkpSZDRY4HXtlPC2F1lxuWB8yEJjMsuiyLrOCuTfyQQqc%2BrLs8XM2WEU2NsCiY62Y%2Bim4eXE9i%2BLI3TrntraqYOMVmhI06VhNEWkNbaNw93xns6eCNguz19HXsCeeKOVpgwXNmU6t%2FBpAAFpJrMttLxkh5At9t1ivMO4pBmcDsi873x94%2BZShf7tJk2Md9syZDRgAQZWdbANfsYtpnJSOkcWM%2Be00tRfba2%2F5tRe5clmxdhWHibboQ2UONc9Tg7rDUdx1NFDRGMNXcrsQGOqUBwOXG8gpva%2FzeJZSZ7x8nRNI7hHLBmExefNvI7eaFbbOw%2BZcp3WgGJ9l3ruO9la7Mk6VzeeMPUCxiBGQiaCc3WCyv3R1EatGI8c3Z3UbNDBxuQ1D7ypZIfwiGIuqNH9foNs7UEkQguiqnjQ5tlP7ALIxHGRmEmOZown%2BZQtX1lviw%2BZl6GdNbXPrIBFMwGwvwHtyLGnMWNL5kSkWiwtLypc8PP6GF&X-Amz-Signature=158816b02cde4c20023add92a82efd7cb47ed275553e9672fc12df76baa099af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMST4S6%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcwHV34KO6q475IggHkiR5pmGEmhCd72iXm4H8LwHrAwIgdS9zV7UNTkNjSkrb3gdNUSZ4tiyhCFXCywl4jEPvYYQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrGfXTNZs3oq6LBiSrcA0iRRQbuENry77KaTEQdNtewBgarL%2BZzQQ1%2BXr06yRFuayKNyxrkYpecP1cFaOepLRmy25aBlQJicuJpwF98sIQ0k3yvTsDqaEfOFJ0qJ%2FrDwISDeUnH7c8Ta%2BQunN9dzPLg%2Bip6EYsTxwY4YAuTqcFhKsEDtYkSky3B7DMHxlPdt1GGne9qEjVsgC88nVcmQ5UVFPbcZXFECqboafwOsxG7l%2FK1Exvv5YNyBvY4uvaJ7S7EqQs9OZWJmsttqKxXjlMFcmTUhFhaIfGSsiUm4QlVnKOAKyu3O%2BeoCoJl%2FJ14CNS9f75b0zvKZUhn30ilwmVwy60WtPObA6%2BQvsXHrjypA1MOLDnmYHBJkUU3oEr9oV5WwPGkpSZDRY4HXtlPC2F1lxuWB8yEJjMsuiyLrOCuTfyQQqc%2BrLs8XM2WEU2NsCiY62Y%2Bim4eXE9i%2BLI3TrntraqYOMVmhI06VhNEWkNbaNw93xns6eCNguz19HXsCeeKOVpgwXNmU6t%2FBpAAFpJrMttLxkh5At9t1ivMO4pBmcDsi873x94%2BZShf7tJk2Md9syZDRgAQZWdbANfsYtpnJSOkcWM%2Be00tRfba2%2F5tRe5clmxdhWHibboQ2UONc9Tg7rDUdx1NFDRGMNXcrsQGOqUBwOXG8gpva%2FzeJZSZ7x8nRNI7hHLBmExefNvI7eaFbbOw%2BZcp3WgGJ9l3ruO9la7Mk6VzeeMPUCxiBGQiaCc3WCyv3R1EatGI8c3Z3UbNDBxuQ1D7ypZIfwiGIuqNH9foNs7UEkQguiqnjQ5tlP7ALIxHGRmEmOZown%2BZQtX1lviw%2BZl6GdNbXPrIBFMwGwvwHtyLGnMWNL5kSkWiwtLypc8PP6GF&X-Amz-Signature=ca43d5ecf8a90729ac2e65eaa13c3fec76d95335d071decdee5c0efb082b2488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMWQQFHD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDx7aV5nzutUp625yHJEltqQIMSUxgat2PdZhqA1hp57AiEA8mcBDG1jOYEmyz9fEO8E34wdfUcI8IsbrHxeZTij4PIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhvczwifpup3CwF9ircA9f0DhC4tdbkmLxryamsYwo8gyTNvAAGZXLjdwpIL%2FNjywQ7%2Bvn%2BQ%2F5TzN7flWEl4uXJgTkUVr73y1v5wsWM5IEdK7M%2FyutY5r%2B9HtZLwuPELePQ50H91e49TArIUD8k5PrRuF82uFH26%2FHgF%2FWLqPx4CwIZECdue43o%2BTeDuROT2MivAIHaWrTrLgKQQFlCP%2BE4v8yjmYNMX7rT5hRgmO37E%2FVy7x6nhBc2pVKUomRXeOfFlYcBRu63TJQARJGyBJw8A0PYbOHlr6Eq85sKaSPLglAJvf35JR%2Brc9g51qbPe7XtP5M1j6jWHMiBSlhki9%2BEpmt2P%2BOz4t9nUwTs6KhTc3Rc00nQsglJYoIu0ns82FWVzynuvDshoFMX3aFzrM4%2FzZwJl35ptTiuftmxfaDVVcNJOCnh8Uj5k6YujIcb%2BLTibKenrCS032BsIVNsYRLu%2BBjN5xlnoCp1FYu3dcScyiNbTYIkLNVYi2%2BOFVJP51bSzUQ1TMkKKY2xTfEeTVxOJ7LZhguZPaqm2wDr%2FdCJxl1J%2FLUlC4L9Y97InCIW2iCZDZx2EojHce2LNroWcAZd2OFaVqtcg%2F3b9zGF1074xXX2E7FcuEVj5KbEMWVqyVJtSoI3Vqc6m5H0MN3brsQGOqUBcGL7fE%2FgNWi1JZJowavAkPU0Wubgt5gkXTJX0y4w5vl7OmdbN3dKF1U5E%2BLcX%2BrX0gwiHG5FySdHf%2BtKQN%2FVhkZkfsy3qkIkS005nvjE3liWfQNmk1U3jNwHiFk0Jgh2sZVLOT5pFLFjii7Jx%2FjvAQ%2FCmedxEAs%2Fi94jEI0n0eYIQ11C6tBQoL%2BOm210FFlvNAOPmncPrMWZB9Ukh7j4D6o5XR%2BF&X-Amz-Signature=9508d1fd29537edc665f793b058f2ce6535c7eff64e667ea5557be96eaa1ec05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMWQQFHD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDx7aV5nzutUp625yHJEltqQIMSUxgat2PdZhqA1hp57AiEA8mcBDG1jOYEmyz9fEO8E34wdfUcI8IsbrHxeZTij4PIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhvczwifpup3CwF9ircA9f0DhC4tdbkmLxryamsYwo8gyTNvAAGZXLjdwpIL%2FNjywQ7%2Bvn%2BQ%2F5TzN7flWEl4uXJgTkUVr73y1v5wsWM5IEdK7M%2FyutY5r%2B9HtZLwuPELePQ50H91e49TArIUD8k5PrRuF82uFH26%2FHgF%2FWLqPx4CwIZECdue43o%2BTeDuROT2MivAIHaWrTrLgKQQFlCP%2BE4v8yjmYNMX7rT5hRgmO37E%2FVy7x6nhBc2pVKUomRXeOfFlYcBRu63TJQARJGyBJw8A0PYbOHlr6Eq85sKaSPLglAJvf35JR%2Brc9g51qbPe7XtP5M1j6jWHMiBSlhki9%2BEpmt2P%2BOz4t9nUwTs6KhTc3Rc00nQsglJYoIu0ns82FWVzynuvDshoFMX3aFzrM4%2FzZwJl35ptTiuftmxfaDVVcNJOCnh8Uj5k6YujIcb%2BLTibKenrCS032BsIVNsYRLu%2BBjN5xlnoCp1FYu3dcScyiNbTYIkLNVYi2%2BOFVJP51bSzUQ1TMkKKY2xTfEeTVxOJ7LZhguZPaqm2wDr%2FdCJxl1J%2FLUlC4L9Y97InCIW2iCZDZx2EojHce2LNroWcAZd2OFaVqtcg%2F3b9zGF1074xXX2E7FcuEVj5KbEMWVqyVJtSoI3Vqc6m5H0MN3brsQGOqUBcGL7fE%2FgNWi1JZJowavAkPU0Wubgt5gkXTJX0y4w5vl7OmdbN3dKF1U5E%2BLcX%2BrX0gwiHG5FySdHf%2BtKQN%2FVhkZkfsy3qkIkS005nvjE3liWfQNmk1U3jNwHiFk0Jgh2sZVLOT5pFLFjii7Jx%2FjvAQ%2FCmedxEAs%2Fi94jEI0n0eYIQ11C6tBQoL%2BOm210FFlvNAOPmncPrMWZB9Ukh7j4D6o5XR%2BF&X-Amz-Signature=67a38c3250a7afcc3555ac6977d86c37b9a06d45636ab3e4da9afd5b5747bd32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMWQQFHD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDx7aV5nzutUp625yHJEltqQIMSUxgat2PdZhqA1hp57AiEA8mcBDG1jOYEmyz9fEO8E34wdfUcI8IsbrHxeZTij4PIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhvczwifpup3CwF9ircA9f0DhC4tdbkmLxryamsYwo8gyTNvAAGZXLjdwpIL%2FNjywQ7%2Bvn%2BQ%2F5TzN7flWEl4uXJgTkUVr73y1v5wsWM5IEdK7M%2FyutY5r%2B9HtZLwuPELePQ50H91e49TArIUD8k5PrRuF82uFH26%2FHgF%2FWLqPx4CwIZECdue43o%2BTeDuROT2MivAIHaWrTrLgKQQFlCP%2BE4v8yjmYNMX7rT5hRgmO37E%2FVy7x6nhBc2pVKUomRXeOfFlYcBRu63TJQARJGyBJw8A0PYbOHlr6Eq85sKaSPLglAJvf35JR%2Brc9g51qbPe7XtP5M1j6jWHMiBSlhki9%2BEpmt2P%2BOz4t9nUwTs6KhTc3Rc00nQsglJYoIu0ns82FWVzynuvDshoFMX3aFzrM4%2FzZwJl35ptTiuftmxfaDVVcNJOCnh8Uj5k6YujIcb%2BLTibKenrCS032BsIVNsYRLu%2BBjN5xlnoCp1FYu3dcScyiNbTYIkLNVYi2%2BOFVJP51bSzUQ1TMkKKY2xTfEeTVxOJ7LZhguZPaqm2wDr%2FdCJxl1J%2FLUlC4L9Y97InCIW2iCZDZx2EojHce2LNroWcAZd2OFaVqtcg%2F3b9zGF1074xXX2E7FcuEVj5KbEMWVqyVJtSoI3Vqc6m5H0MN3brsQGOqUBcGL7fE%2FgNWi1JZJowavAkPU0Wubgt5gkXTJX0y4w5vl7OmdbN3dKF1U5E%2BLcX%2BrX0gwiHG5FySdHf%2BtKQN%2FVhkZkfsy3qkIkS005nvjE3liWfQNmk1U3jNwHiFk0Jgh2sZVLOT5pFLFjii7Jx%2FjvAQ%2FCmedxEAs%2Fi94jEI0n0eYIQ11C6tBQoL%2BOm210FFlvNAOPmncPrMWZB9Ukh7j4D6o5XR%2BF&X-Amz-Signature=2e24dc6eb8f064f254bcd8dab48520080e31ad4ee3f7f0b345e62aeb4b0b67c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMWQQFHD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDx7aV5nzutUp625yHJEltqQIMSUxgat2PdZhqA1hp57AiEA8mcBDG1jOYEmyz9fEO8E34wdfUcI8IsbrHxeZTij4PIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhvczwifpup3CwF9ircA9f0DhC4tdbkmLxryamsYwo8gyTNvAAGZXLjdwpIL%2FNjywQ7%2Bvn%2BQ%2F5TzN7flWEl4uXJgTkUVr73y1v5wsWM5IEdK7M%2FyutY5r%2B9HtZLwuPELePQ50H91e49TArIUD8k5PrRuF82uFH26%2FHgF%2FWLqPx4CwIZECdue43o%2BTeDuROT2MivAIHaWrTrLgKQQFlCP%2BE4v8yjmYNMX7rT5hRgmO37E%2FVy7x6nhBc2pVKUomRXeOfFlYcBRu63TJQARJGyBJw8A0PYbOHlr6Eq85sKaSPLglAJvf35JR%2Brc9g51qbPe7XtP5M1j6jWHMiBSlhki9%2BEpmt2P%2BOz4t9nUwTs6KhTc3Rc00nQsglJYoIu0ns82FWVzynuvDshoFMX3aFzrM4%2FzZwJl35ptTiuftmxfaDVVcNJOCnh8Uj5k6YujIcb%2BLTibKenrCS032BsIVNsYRLu%2BBjN5xlnoCp1FYu3dcScyiNbTYIkLNVYi2%2BOFVJP51bSzUQ1TMkKKY2xTfEeTVxOJ7LZhguZPaqm2wDr%2FdCJxl1J%2FLUlC4L9Y97InCIW2iCZDZx2EojHce2LNroWcAZd2OFaVqtcg%2F3b9zGF1074xXX2E7FcuEVj5KbEMWVqyVJtSoI3Vqc6m5H0MN3brsQGOqUBcGL7fE%2FgNWi1JZJowavAkPU0Wubgt5gkXTJX0y4w5vl7OmdbN3dKF1U5E%2BLcX%2BrX0gwiHG5FySdHf%2BtKQN%2FVhkZkfsy3qkIkS005nvjE3liWfQNmk1U3jNwHiFk0Jgh2sZVLOT5pFLFjii7Jx%2FjvAQ%2FCmedxEAs%2Fi94jEI0n0eYIQ11C6tBQoL%2BOm210FFlvNAOPmncPrMWZB9Ukh7j4D6o5XR%2BF&X-Amz-Signature=5b5b446660448f8893aa2004f9e079d41fcbbc40e14ecf087cdeee705a2dd27c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMWQQFHD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDx7aV5nzutUp625yHJEltqQIMSUxgat2PdZhqA1hp57AiEA8mcBDG1jOYEmyz9fEO8E34wdfUcI8IsbrHxeZTij4PIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhvczwifpup3CwF9ircA9f0DhC4tdbkmLxryamsYwo8gyTNvAAGZXLjdwpIL%2FNjywQ7%2Bvn%2BQ%2F5TzN7flWEl4uXJgTkUVr73y1v5wsWM5IEdK7M%2FyutY5r%2B9HtZLwuPELePQ50H91e49TArIUD8k5PrRuF82uFH26%2FHgF%2FWLqPx4CwIZECdue43o%2BTeDuROT2MivAIHaWrTrLgKQQFlCP%2BE4v8yjmYNMX7rT5hRgmO37E%2FVy7x6nhBc2pVKUomRXeOfFlYcBRu63TJQARJGyBJw8A0PYbOHlr6Eq85sKaSPLglAJvf35JR%2Brc9g51qbPe7XtP5M1j6jWHMiBSlhki9%2BEpmt2P%2BOz4t9nUwTs6KhTc3Rc00nQsglJYoIu0ns82FWVzynuvDshoFMX3aFzrM4%2FzZwJl35ptTiuftmxfaDVVcNJOCnh8Uj5k6YujIcb%2BLTibKenrCS032BsIVNsYRLu%2BBjN5xlnoCp1FYu3dcScyiNbTYIkLNVYi2%2BOFVJP51bSzUQ1TMkKKY2xTfEeTVxOJ7LZhguZPaqm2wDr%2FdCJxl1J%2FLUlC4L9Y97InCIW2iCZDZx2EojHce2LNroWcAZd2OFaVqtcg%2F3b9zGF1074xXX2E7FcuEVj5KbEMWVqyVJtSoI3Vqc6m5H0MN3brsQGOqUBcGL7fE%2FgNWi1JZJowavAkPU0Wubgt5gkXTJX0y4w5vl7OmdbN3dKF1U5E%2BLcX%2BrX0gwiHG5FySdHf%2BtKQN%2FVhkZkfsy3qkIkS005nvjE3liWfQNmk1U3jNwHiFk0Jgh2sZVLOT5pFLFjii7Jx%2FjvAQ%2FCmedxEAs%2Fi94jEI0n0eYIQ11C6tBQoL%2BOm210FFlvNAOPmncPrMWZB9Ukh7j4D6o5XR%2BF&X-Amz-Signature=b2605bcbae7a81c0e771f044b9d48aec7cfbcf91b1a4bb0d23ff2d9efb772c31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMWQQFHD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDx7aV5nzutUp625yHJEltqQIMSUxgat2PdZhqA1hp57AiEA8mcBDG1jOYEmyz9fEO8E34wdfUcI8IsbrHxeZTij4PIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhvczwifpup3CwF9ircA9f0DhC4tdbkmLxryamsYwo8gyTNvAAGZXLjdwpIL%2FNjywQ7%2Bvn%2BQ%2F5TzN7flWEl4uXJgTkUVr73y1v5wsWM5IEdK7M%2FyutY5r%2B9HtZLwuPELePQ50H91e49TArIUD8k5PrRuF82uFH26%2FHgF%2FWLqPx4CwIZECdue43o%2BTeDuROT2MivAIHaWrTrLgKQQFlCP%2BE4v8yjmYNMX7rT5hRgmO37E%2FVy7x6nhBc2pVKUomRXeOfFlYcBRu63TJQARJGyBJw8A0PYbOHlr6Eq85sKaSPLglAJvf35JR%2Brc9g51qbPe7XtP5M1j6jWHMiBSlhki9%2BEpmt2P%2BOz4t9nUwTs6KhTc3Rc00nQsglJYoIu0ns82FWVzynuvDshoFMX3aFzrM4%2FzZwJl35ptTiuftmxfaDVVcNJOCnh8Uj5k6YujIcb%2BLTibKenrCS032BsIVNsYRLu%2BBjN5xlnoCp1FYu3dcScyiNbTYIkLNVYi2%2BOFVJP51bSzUQ1TMkKKY2xTfEeTVxOJ7LZhguZPaqm2wDr%2FdCJxl1J%2FLUlC4L9Y97InCIW2iCZDZx2EojHce2LNroWcAZd2OFaVqtcg%2F3b9zGF1074xXX2E7FcuEVj5KbEMWVqyVJtSoI3Vqc6m5H0MN3brsQGOqUBcGL7fE%2FgNWi1JZJowavAkPU0Wubgt5gkXTJX0y4w5vl7OmdbN3dKF1U5E%2BLcX%2BrX0gwiHG5FySdHf%2BtKQN%2FVhkZkfsy3qkIkS005nvjE3liWfQNmk1U3jNwHiFk0Jgh2sZVLOT5pFLFjii7Jx%2FjvAQ%2FCmedxEAs%2Fi94jEI0n0eYIQ11C6tBQoL%2BOm210FFlvNAOPmncPrMWZB9Ukh7j4D6o5XR%2BF&X-Amz-Signature=176ece497eb229b9608c199a9b6119b0c4519fb12106d9215a5df6553ffdabdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMWQQFHD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDx7aV5nzutUp625yHJEltqQIMSUxgat2PdZhqA1hp57AiEA8mcBDG1jOYEmyz9fEO8E34wdfUcI8IsbrHxeZTij4PIqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhvczwifpup3CwF9ircA9f0DhC4tdbkmLxryamsYwo8gyTNvAAGZXLjdwpIL%2FNjywQ7%2Bvn%2BQ%2F5TzN7flWEl4uXJgTkUVr73y1v5wsWM5IEdK7M%2FyutY5r%2B9HtZLwuPELePQ50H91e49TArIUD8k5PrRuF82uFH26%2FHgF%2FWLqPx4CwIZECdue43o%2BTeDuROT2MivAIHaWrTrLgKQQFlCP%2BE4v8yjmYNMX7rT5hRgmO37E%2FVy7x6nhBc2pVKUomRXeOfFlYcBRu63TJQARJGyBJw8A0PYbOHlr6Eq85sKaSPLglAJvf35JR%2Brc9g51qbPe7XtP5M1j6jWHMiBSlhki9%2BEpmt2P%2BOz4t9nUwTs6KhTc3Rc00nQsglJYoIu0ns82FWVzynuvDshoFMX3aFzrM4%2FzZwJl35ptTiuftmxfaDVVcNJOCnh8Uj5k6YujIcb%2BLTibKenrCS032BsIVNsYRLu%2BBjN5xlnoCp1FYu3dcScyiNbTYIkLNVYi2%2BOFVJP51bSzUQ1TMkKKY2xTfEeTVxOJ7LZhguZPaqm2wDr%2FdCJxl1J%2FLUlC4L9Y97InCIW2iCZDZx2EojHce2LNroWcAZd2OFaVqtcg%2F3b9zGF1074xXX2E7FcuEVj5KbEMWVqyVJtSoI3Vqc6m5H0MN3brsQGOqUBcGL7fE%2FgNWi1JZJowavAkPU0Wubgt5gkXTJX0y4w5vl7OmdbN3dKF1U5E%2BLcX%2BrX0gwiHG5FySdHf%2BtKQN%2FVhkZkfsy3qkIkS005nvjE3liWfQNmk1U3jNwHiFk0Jgh2sZVLOT5pFLFjii7Jx%2FjvAQ%2FCmedxEAs%2Fi94jEI0n0eYIQ11C6tBQoL%2BOm210FFlvNAOPmncPrMWZB9Ukh7j4D6o5XR%2BF&X-Amz-Signature=1f2a3d37a5df0b8b6f7dde0f66150afcdb32d0b3fdf0d0b871e9523302aa2137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
