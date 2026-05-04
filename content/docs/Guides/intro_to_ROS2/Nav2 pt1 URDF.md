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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ7T2IH%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0Wq489Lxe2%2FLVyvtv3b6SeLi7jnbDZdlnWtAagyqTXAiEAr7HE9zkQIke4UzuS7DZvL64X0Lv0BrusG2vuEaKhjlgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGieKZGQ6KskJCg2QircAxdG1CgjCLegQt91bBnWqS6BqwfPlb77j0QqoaIgNnBcl0l%2BEcvAXgAZLu0QUaB2W2%2BOkvTY5Hv0vJIswwBma78liv5ynaxvwoM7QDd2f1TzGMwnY3lHB3qr5fxr0%2F7xNtdQTAGM611ddO%2FXgtqGgSWVawKck4QK6jjNz0PTlFGBD6bG%2Fb%2Fpho0arzdHzJ0WagSUPG69c9UOx70aXVzSItJaluEdCFKwdbPL%2F9U2SAniAqNkCGSKiwJWd%2BnVtX5bYj5Tijrd4NiD5omVfh2NyA6cr0dij3dUjO4oAQyX5QW0G44qpnLKVzzPKodyfNwtndG6A57ImjbWof%2Bcr9WLqpl7oXo6OJSEHdw1YmnA%2F0pzlbd9aBA%2FBcjSMHbtbd%2Bgd0MGPfn12qQRHWp7cUJvXQuLOl8M5nKyNFq2%2BSDjj5K8Gs7QbLRL%2FJSPLMc8472eEPFvSC5RT0FD%2F1NrJ6OHmj6%2Fz8%2BuKzCwCC7%2Bp9%2F3mtPKbTFHyYno6FUrKYu6ZoLUD2XNoGRUNcZw44Al968oVNwfuXF97Auv44M0TB1IOsuXzgcOTZ7kA24z8jAZGtAILkaYdviS1x0m203wytBUns%2Fq3WXojIiVWjQ12uMCkwwb9W6F7gfxdN0kqOj1MPL2388GOqUBXTi%2BcZXFz7vTC8%2BmB7eYd5CEuc%2B7ZOtmhB%2FPPIiV0g%2FwAtTFheLT8VoJvE5rSdKGcJkezSZGlCpjOCU3J8WZHcmR3ll5AwNUVUNBsLAnSo8vvj5628uTwqEgbwncwohwflFpRALHqESo5193%2BKBXE%2BUHuiZSJt6T6Xo%2Bte62%2F6FOIdbvrj27bynou5HZS4JXSgtuE8rUoX%2FtRuQ2%2BMLCa9d6xEJS&X-Amz-Signature=e64645f3f8b7024add437702fd340db75b35e39d288a1ffff88398293d53c582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ7T2IH%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0Wq489Lxe2%2FLVyvtv3b6SeLi7jnbDZdlnWtAagyqTXAiEAr7HE9zkQIke4UzuS7DZvL64X0Lv0BrusG2vuEaKhjlgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGieKZGQ6KskJCg2QircAxdG1CgjCLegQt91bBnWqS6BqwfPlb77j0QqoaIgNnBcl0l%2BEcvAXgAZLu0QUaB2W2%2BOkvTY5Hv0vJIswwBma78liv5ynaxvwoM7QDd2f1TzGMwnY3lHB3qr5fxr0%2F7xNtdQTAGM611ddO%2FXgtqGgSWVawKck4QK6jjNz0PTlFGBD6bG%2Fb%2Fpho0arzdHzJ0WagSUPG69c9UOx70aXVzSItJaluEdCFKwdbPL%2F9U2SAniAqNkCGSKiwJWd%2BnVtX5bYj5Tijrd4NiD5omVfh2NyA6cr0dij3dUjO4oAQyX5QW0G44qpnLKVzzPKodyfNwtndG6A57ImjbWof%2Bcr9WLqpl7oXo6OJSEHdw1YmnA%2F0pzlbd9aBA%2FBcjSMHbtbd%2Bgd0MGPfn12qQRHWp7cUJvXQuLOl8M5nKyNFq2%2BSDjj5K8Gs7QbLRL%2FJSPLMc8472eEPFvSC5RT0FD%2F1NrJ6OHmj6%2Fz8%2BuKzCwCC7%2Bp9%2F3mtPKbTFHyYno6FUrKYu6ZoLUD2XNoGRUNcZw44Al968oVNwfuXF97Auv44M0TB1IOsuXzgcOTZ7kA24z8jAZGtAILkaYdviS1x0m203wytBUns%2Fq3WXojIiVWjQ12uMCkwwb9W6F7gfxdN0kqOj1MPL2388GOqUBXTi%2BcZXFz7vTC8%2BmB7eYd5CEuc%2B7ZOtmhB%2FPPIiV0g%2FwAtTFheLT8VoJvE5rSdKGcJkezSZGlCpjOCU3J8WZHcmR3ll5AwNUVUNBsLAnSo8vvj5628uTwqEgbwncwohwflFpRALHqESo5193%2BKBXE%2BUHuiZSJt6T6Xo%2Bte62%2F6FOIdbvrj27bynou5HZS4JXSgtuE8rUoX%2FtRuQ2%2BMLCa9d6xEJS&X-Amz-Signature=fc1c51617dabf5dec61de168e8cc18c7c9fc6b54c1fdedd516151873d5d11a52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ7T2IH%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0Wq489Lxe2%2FLVyvtv3b6SeLi7jnbDZdlnWtAagyqTXAiEAr7HE9zkQIke4UzuS7DZvL64X0Lv0BrusG2vuEaKhjlgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGieKZGQ6KskJCg2QircAxdG1CgjCLegQt91bBnWqS6BqwfPlb77j0QqoaIgNnBcl0l%2BEcvAXgAZLu0QUaB2W2%2BOkvTY5Hv0vJIswwBma78liv5ynaxvwoM7QDd2f1TzGMwnY3lHB3qr5fxr0%2F7xNtdQTAGM611ddO%2FXgtqGgSWVawKck4QK6jjNz0PTlFGBD6bG%2Fb%2Fpho0arzdHzJ0WagSUPG69c9UOx70aXVzSItJaluEdCFKwdbPL%2F9U2SAniAqNkCGSKiwJWd%2BnVtX5bYj5Tijrd4NiD5omVfh2NyA6cr0dij3dUjO4oAQyX5QW0G44qpnLKVzzPKodyfNwtndG6A57ImjbWof%2Bcr9WLqpl7oXo6OJSEHdw1YmnA%2F0pzlbd9aBA%2FBcjSMHbtbd%2Bgd0MGPfn12qQRHWp7cUJvXQuLOl8M5nKyNFq2%2BSDjj5K8Gs7QbLRL%2FJSPLMc8472eEPFvSC5RT0FD%2F1NrJ6OHmj6%2Fz8%2BuKzCwCC7%2Bp9%2F3mtPKbTFHyYno6FUrKYu6ZoLUD2XNoGRUNcZw44Al968oVNwfuXF97Auv44M0TB1IOsuXzgcOTZ7kA24z8jAZGtAILkaYdviS1x0m203wytBUns%2Fq3WXojIiVWjQ12uMCkwwb9W6F7gfxdN0kqOj1MPL2388GOqUBXTi%2BcZXFz7vTC8%2BmB7eYd5CEuc%2B7ZOtmhB%2FPPIiV0g%2FwAtTFheLT8VoJvE5rSdKGcJkezSZGlCpjOCU3J8WZHcmR3ll5AwNUVUNBsLAnSo8vvj5628uTwqEgbwncwohwflFpRALHqESo5193%2BKBXE%2BUHuiZSJt6T6Xo%2Bte62%2F6FOIdbvrj27bynou5HZS4JXSgtuE8rUoX%2FtRuQ2%2BMLCa9d6xEJS&X-Amz-Signature=e44be12863d8070038e9313de1fa830d51acaefd9a0e484b307b80e686240614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ7T2IH%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0Wq489Lxe2%2FLVyvtv3b6SeLi7jnbDZdlnWtAagyqTXAiEAr7HE9zkQIke4UzuS7DZvL64X0Lv0BrusG2vuEaKhjlgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGieKZGQ6KskJCg2QircAxdG1CgjCLegQt91bBnWqS6BqwfPlb77j0QqoaIgNnBcl0l%2BEcvAXgAZLu0QUaB2W2%2BOkvTY5Hv0vJIswwBma78liv5ynaxvwoM7QDd2f1TzGMwnY3lHB3qr5fxr0%2F7xNtdQTAGM611ddO%2FXgtqGgSWVawKck4QK6jjNz0PTlFGBD6bG%2Fb%2Fpho0arzdHzJ0WagSUPG69c9UOx70aXVzSItJaluEdCFKwdbPL%2F9U2SAniAqNkCGSKiwJWd%2BnVtX5bYj5Tijrd4NiD5omVfh2NyA6cr0dij3dUjO4oAQyX5QW0G44qpnLKVzzPKodyfNwtndG6A57ImjbWof%2Bcr9WLqpl7oXo6OJSEHdw1YmnA%2F0pzlbd9aBA%2FBcjSMHbtbd%2Bgd0MGPfn12qQRHWp7cUJvXQuLOl8M5nKyNFq2%2BSDjj5K8Gs7QbLRL%2FJSPLMc8472eEPFvSC5RT0FD%2F1NrJ6OHmj6%2Fz8%2BuKzCwCC7%2Bp9%2F3mtPKbTFHyYno6FUrKYu6ZoLUD2XNoGRUNcZw44Al968oVNwfuXF97Auv44M0TB1IOsuXzgcOTZ7kA24z8jAZGtAILkaYdviS1x0m203wytBUns%2Fq3WXojIiVWjQ12uMCkwwb9W6F7gfxdN0kqOj1MPL2388GOqUBXTi%2BcZXFz7vTC8%2BmB7eYd5CEuc%2B7ZOtmhB%2FPPIiV0g%2FwAtTFheLT8VoJvE5rSdKGcJkezSZGlCpjOCU3J8WZHcmR3ll5AwNUVUNBsLAnSo8vvj5628uTwqEgbwncwohwflFpRALHqESo5193%2BKBXE%2BUHuiZSJt6T6Xo%2Bte62%2F6FOIdbvrj27bynou5HZS4JXSgtuE8rUoX%2FtRuQ2%2BMLCa9d6xEJS&X-Amz-Signature=1b08aba3c5cb2bc689da99c4e13e546cb8328d03c286272ce318344387fb330f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ7T2IH%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0Wq489Lxe2%2FLVyvtv3b6SeLi7jnbDZdlnWtAagyqTXAiEAr7HE9zkQIke4UzuS7DZvL64X0Lv0BrusG2vuEaKhjlgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGieKZGQ6KskJCg2QircAxdG1CgjCLegQt91bBnWqS6BqwfPlb77j0QqoaIgNnBcl0l%2BEcvAXgAZLu0QUaB2W2%2BOkvTY5Hv0vJIswwBma78liv5ynaxvwoM7QDd2f1TzGMwnY3lHB3qr5fxr0%2F7xNtdQTAGM611ddO%2FXgtqGgSWVawKck4QK6jjNz0PTlFGBD6bG%2Fb%2Fpho0arzdHzJ0WagSUPG69c9UOx70aXVzSItJaluEdCFKwdbPL%2F9U2SAniAqNkCGSKiwJWd%2BnVtX5bYj5Tijrd4NiD5omVfh2NyA6cr0dij3dUjO4oAQyX5QW0G44qpnLKVzzPKodyfNwtndG6A57ImjbWof%2Bcr9WLqpl7oXo6OJSEHdw1YmnA%2F0pzlbd9aBA%2FBcjSMHbtbd%2Bgd0MGPfn12qQRHWp7cUJvXQuLOl8M5nKyNFq2%2BSDjj5K8Gs7QbLRL%2FJSPLMc8472eEPFvSC5RT0FD%2F1NrJ6OHmj6%2Fz8%2BuKzCwCC7%2Bp9%2F3mtPKbTFHyYno6FUrKYu6ZoLUD2XNoGRUNcZw44Al968oVNwfuXF97Auv44M0TB1IOsuXzgcOTZ7kA24z8jAZGtAILkaYdviS1x0m203wytBUns%2Fq3WXojIiVWjQ12uMCkwwb9W6F7gfxdN0kqOj1MPL2388GOqUBXTi%2BcZXFz7vTC8%2BmB7eYd5CEuc%2B7ZOtmhB%2FPPIiV0g%2FwAtTFheLT8VoJvE5rSdKGcJkezSZGlCpjOCU3J8WZHcmR3ll5AwNUVUNBsLAnSo8vvj5628uTwqEgbwncwohwflFpRALHqESo5193%2BKBXE%2BUHuiZSJt6T6Xo%2Bte62%2F6FOIdbvrj27bynou5HZS4JXSgtuE8rUoX%2FtRuQ2%2BMLCa9d6xEJS&X-Amz-Signature=beb1ea836e54622109b0ae071e6fb063e708979570974cace7e7870a2e28629f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ7T2IH%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0Wq489Lxe2%2FLVyvtv3b6SeLi7jnbDZdlnWtAagyqTXAiEAr7HE9zkQIke4UzuS7DZvL64X0Lv0BrusG2vuEaKhjlgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGieKZGQ6KskJCg2QircAxdG1CgjCLegQt91bBnWqS6BqwfPlb77j0QqoaIgNnBcl0l%2BEcvAXgAZLu0QUaB2W2%2BOkvTY5Hv0vJIswwBma78liv5ynaxvwoM7QDd2f1TzGMwnY3lHB3qr5fxr0%2F7xNtdQTAGM611ddO%2FXgtqGgSWVawKck4QK6jjNz0PTlFGBD6bG%2Fb%2Fpho0arzdHzJ0WagSUPG69c9UOx70aXVzSItJaluEdCFKwdbPL%2F9U2SAniAqNkCGSKiwJWd%2BnVtX5bYj5Tijrd4NiD5omVfh2NyA6cr0dij3dUjO4oAQyX5QW0G44qpnLKVzzPKodyfNwtndG6A57ImjbWof%2Bcr9WLqpl7oXo6OJSEHdw1YmnA%2F0pzlbd9aBA%2FBcjSMHbtbd%2Bgd0MGPfn12qQRHWp7cUJvXQuLOl8M5nKyNFq2%2BSDjj5K8Gs7QbLRL%2FJSPLMc8472eEPFvSC5RT0FD%2F1NrJ6OHmj6%2Fz8%2BuKzCwCC7%2Bp9%2F3mtPKbTFHyYno6FUrKYu6ZoLUD2XNoGRUNcZw44Al968oVNwfuXF97Auv44M0TB1IOsuXzgcOTZ7kA24z8jAZGtAILkaYdviS1x0m203wytBUns%2Fq3WXojIiVWjQ12uMCkwwb9W6F7gfxdN0kqOj1MPL2388GOqUBXTi%2BcZXFz7vTC8%2BmB7eYd5CEuc%2B7ZOtmhB%2FPPIiV0g%2FwAtTFheLT8VoJvE5rSdKGcJkezSZGlCpjOCU3J8WZHcmR3ll5AwNUVUNBsLAnSo8vvj5628uTwqEgbwncwohwflFpRALHqESo5193%2BKBXE%2BUHuiZSJt6T6Xo%2Bte62%2F6FOIdbvrj27bynou5HZS4JXSgtuE8rUoX%2FtRuQ2%2BMLCa9d6xEJS&X-Amz-Signature=3063e05bafb8b5ffe2b62974e3bf5b944949d0603f9aa2c80b807ce73e2c13c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ7T2IH%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0Wq489Lxe2%2FLVyvtv3b6SeLi7jnbDZdlnWtAagyqTXAiEAr7HE9zkQIke4UzuS7DZvL64X0Lv0BrusG2vuEaKhjlgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGieKZGQ6KskJCg2QircAxdG1CgjCLegQt91bBnWqS6BqwfPlb77j0QqoaIgNnBcl0l%2BEcvAXgAZLu0QUaB2W2%2BOkvTY5Hv0vJIswwBma78liv5ynaxvwoM7QDd2f1TzGMwnY3lHB3qr5fxr0%2F7xNtdQTAGM611ddO%2FXgtqGgSWVawKck4QK6jjNz0PTlFGBD6bG%2Fb%2Fpho0arzdHzJ0WagSUPG69c9UOx70aXVzSItJaluEdCFKwdbPL%2F9U2SAniAqNkCGSKiwJWd%2BnVtX5bYj5Tijrd4NiD5omVfh2NyA6cr0dij3dUjO4oAQyX5QW0G44qpnLKVzzPKodyfNwtndG6A57ImjbWof%2Bcr9WLqpl7oXo6OJSEHdw1YmnA%2F0pzlbd9aBA%2FBcjSMHbtbd%2Bgd0MGPfn12qQRHWp7cUJvXQuLOl8M5nKyNFq2%2BSDjj5K8Gs7QbLRL%2FJSPLMc8472eEPFvSC5RT0FD%2F1NrJ6OHmj6%2Fz8%2BuKzCwCC7%2Bp9%2F3mtPKbTFHyYno6FUrKYu6ZoLUD2XNoGRUNcZw44Al968oVNwfuXF97Auv44M0TB1IOsuXzgcOTZ7kA24z8jAZGtAILkaYdviS1x0m203wytBUns%2Fq3WXojIiVWjQ12uMCkwwb9W6F7gfxdN0kqOj1MPL2388GOqUBXTi%2BcZXFz7vTC8%2BmB7eYd5CEuc%2B7ZOtmhB%2FPPIiV0g%2FwAtTFheLT8VoJvE5rSdKGcJkezSZGlCpjOCU3J8WZHcmR3ll5AwNUVUNBsLAnSo8vvj5628uTwqEgbwncwohwflFpRALHqESo5193%2BKBXE%2BUHuiZSJt6T6Xo%2Bte62%2F6FOIdbvrj27bynou5HZS4JXSgtuE8rUoX%2FtRuQ2%2BMLCa9d6xEJS&X-Amz-Signature=84f191435944621ddd853a73822dc7db01d3048fcb6c116d08ebf612082bcc42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ7T2IH%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0Wq489Lxe2%2FLVyvtv3b6SeLi7jnbDZdlnWtAagyqTXAiEAr7HE9zkQIke4UzuS7DZvL64X0Lv0BrusG2vuEaKhjlgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGieKZGQ6KskJCg2QircAxdG1CgjCLegQt91bBnWqS6BqwfPlb77j0QqoaIgNnBcl0l%2BEcvAXgAZLu0QUaB2W2%2BOkvTY5Hv0vJIswwBma78liv5ynaxvwoM7QDd2f1TzGMwnY3lHB3qr5fxr0%2F7xNtdQTAGM611ddO%2FXgtqGgSWVawKck4QK6jjNz0PTlFGBD6bG%2Fb%2Fpho0arzdHzJ0WagSUPG69c9UOx70aXVzSItJaluEdCFKwdbPL%2F9U2SAniAqNkCGSKiwJWd%2BnVtX5bYj5Tijrd4NiD5omVfh2NyA6cr0dij3dUjO4oAQyX5QW0G44qpnLKVzzPKodyfNwtndG6A57ImjbWof%2Bcr9WLqpl7oXo6OJSEHdw1YmnA%2F0pzlbd9aBA%2FBcjSMHbtbd%2Bgd0MGPfn12qQRHWp7cUJvXQuLOl8M5nKyNFq2%2BSDjj5K8Gs7QbLRL%2FJSPLMc8472eEPFvSC5RT0FD%2F1NrJ6OHmj6%2Fz8%2BuKzCwCC7%2Bp9%2F3mtPKbTFHyYno6FUrKYu6ZoLUD2XNoGRUNcZw44Al968oVNwfuXF97Auv44M0TB1IOsuXzgcOTZ7kA24z8jAZGtAILkaYdviS1x0m203wytBUns%2Fq3WXojIiVWjQ12uMCkwwb9W6F7gfxdN0kqOj1MPL2388GOqUBXTi%2BcZXFz7vTC8%2BmB7eYd5CEuc%2B7ZOtmhB%2FPPIiV0g%2FwAtTFheLT8VoJvE5rSdKGcJkezSZGlCpjOCU3J8WZHcmR3ll5AwNUVUNBsLAnSo8vvj5628uTwqEgbwncwohwflFpRALHqESo5193%2BKBXE%2BUHuiZSJt6T6Xo%2Bte62%2F6FOIdbvrj27bynou5HZS4JXSgtuE8rUoX%2FtRuQ2%2BMLCa9d6xEJS&X-Amz-Signature=8906f9d646a4327d6137545308152dcdcdabba7fa797e6521f3cc980ef87cc75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ7T2IH%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0Wq489Lxe2%2FLVyvtv3b6SeLi7jnbDZdlnWtAagyqTXAiEAr7HE9zkQIke4UzuS7DZvL64X0Lv0BrusG2vuEaKhjlgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGieKZGQ6KskJCg2QircAxdG1CgjCLegQt91bBnWqS6BqwfPlb77j0QqoaIgNnBcl0l%2BEcvAXgAZLu0QUaB2W2%2BOkvTY5Hv0vJIswwBma78liv5ynaxvwoM7QDd2f1TzGMwnY3lHB3qr5fxr0%2F7xNtdQTAGM611ddO%2FXgtqGgSWVawKck4QK6jjNz0PTlFGBD6bG%2Fb%2Fpho0arzdHzJ0WagSUPG69c9UOx70aXVzSItJaluEdCFKwdbPL%2F9U2SAniAqNkCGSKiwJWd%2BnVtX5bYj5Tijrd4NiD5omVfh2NyA6cr0dij3dUjO4oAQyX5QW0G44qpnLKVzzPKodyfNwtndG6A57ImjbWof%2Bcr9WLqpl7oXo6OJSEHdw1YmnA%2F0pzlbd9aBA%2FBcjSMHbtbd%2Bgd0MGPfn12qQRHWp7cUJvXQuLOl8M5nKyNFq2%2BSDjj5K8Gs7QbLRL%2FJSPLMc8472eEPFvSC5RT0FD%2F1NrJ6OHmj6%2Fz8%2BuKzCwCC7%2Bp9%2F3mtPKbTFHyYno6FUrKYu6ZoLUD2XNoGRUNcZw44Al968oVNwfuXF97Auv44M0TB1IOsuXzgcOTZ7kA24z8jAZGtAILkaYdviS1x0m203wytBUns%2Fq3WXojIiVWjQ12uMCkwwb9W6F7gfxdN0kqOj1MPL2388GOqUBXTi%2BcZXFz7vTC8%2BmB7eYd5CEuc%2B7ZOtmhB%2FPPIiV0g%2FwAtTFheLT8VoJvE5rSdKGcJkezSZGlCpjOCU3J8WZHcmR3ll5AwNUVUNBsLAnSo8vvj5628uTwqEgbwncwohwflFpRALHqESo5193%2BKBXE%2BUHuiZSJt6T6Xo%2Bte62%2F6FOIdbvrj27bynou5HZS4JXSgtuE8rUoX%2FtRuQ2%2BMLCa9d6xEJS&X-Amz-Signature=111b6a8eb3c9ea96948dfefded95decd4778b9570fa230a3f12d759ed3a45b79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ7T2IH%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0Wq489Lxe2%2FLVyvtv3b6SeLi7jnbDZdlnWtAagyqTXAiEAr7HE9zkQIke4UzuS7DZvL64X0Lv0BrusG2vuEaKhjlgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGieKZGQ6KskJCg2QircAxdG1CgjCLegQt91bBnWqS6BqwfPlb77j0QqoaIgNnBcl0l%2BEcvAXgAZLu0QUaB2W2%2BOkvTY5Hv0vJIswwBma78liv5ynaxvwoM7QDd2f1TzGMwnY3lHB3qr5fxr0%2F7xNtdQTAGM611ddO%2FXgtqGgSWVawKck4QK6jjNz0PTlFGBD6bG%2Fb%2Fpho0arzdHzJ0WagSUPG69c9UOx70aXVzSItJaluEdCFKwdbPL%2F9U2SAniAqNkCGSKiwJWd%2BnVtX5bYj5Tijrd4NiD5omVfh2NyA6cr0dij3dUjO4oAQyX5QW0G44qpnLKVzzPKodyfNwtndG6A57ImjbWof%2Bcr9WLqpl7oXo6OJSEHdw1YmnA%2F0pzlbd9aBA%2FBcjSMHbtbd%2Bgd0MGPfn12qQRHWp7cUJvXQuLOl8M5nKyNFq2%2BSDjj5K8Gs7QbLRL%2FJSPLMc8472eEPFvSC5RT0FD%2F1NrJ6OHmj6%2Fz8%2BuKzCwCC7%2Bp9%2F3mtPKbTFHyYno6FUrKYu6ZoLUD2XNoGRUNcZw44Al968oVNwfuXF97Auv44M0TB1IOsuXzgcOTZ7kA24z8jAZGtAILkaYdviS1x0m203wytBUns%2Fq3WXojIiVWjQ12uMCkwwb9W6F7gfxdN0kqOj1MPL2388GOqUBXTi%2BcZXFz7vTC8%2BmB7eYd5CEuc%2B7ZOtmhB%2FPPIiV0g%2FwAtTFheLT8VoJvE5rSdKGcJkezSZGlCpjOCU3J8WZHcmR3ll5AwNUVUNBsLAnSo8vvj5628uTwqEgbwncwohwflFpRALHqESo5193%2BKBXE%2BUHuiZSJt6T6Xo%2Bte62%2F6FOIdbvrj27bynou5HZS4JXSgtuE8rUoX%2FtRuQ2%2BMLCa9d6xEJS&X-Amz-Signature=a7bf1cb9e02cad440ee8b3d0c7b3a9795063998a20c0f3af35c4f7b7ce5cd7f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZXRGU5D%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDyEg9%2B31TUoJ3FSruV8feE4%2BrP%2B8nGbSRuBhRDX8%2BTQIgbqpLBU6ZZ55oPbuMwQDuAhQCj%2FpdeQ4IUq5yN9wNZmkq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDEB%2F3zVH%2FuyZP%2FJbJircAyL%2F4oiRT%2BeW4UCpthyhTizbL2hpHEuQUOPvDJIDlTr3rEi7rBekD1GbdFfpIU7mJe%2F%2FKJkkRfy%2BchMw84CVaWuuhoqF6LObYpIid04%2Fug17JZIMcZNQZEawBpTYiek7S%2B%2FxkvWBUTtAtQUxKEOhC5baIV87lks6UhLxb3aHkYumvZyp6JAAmb9Rb7LTXXTck0kLz7FvgPynZ7iYdqEPr5T4%2BOSYHEDX%2FNosf9j%2FZcHpXN8%2BzqldVVtXIugSIOH3R2SbaSBOX2Ca0PCyr24LYR7fpe9V2AQaM%2FlXf%2BxH5czE%2FE8%2Fl%2Bt%2Fg4nStQq%2FpfdZzvHVfVHifhChmzYuJD87aDyPIIkomezKwe6Il%2Faw4DEgiepdETE%2FdgtN8dWEXEUHpdkUZFBTwWS8fLQx672nNBDo6jb8cQRSYq5pjhslXKerHNxzQQndWvN4cSlFEQK1Sj7yuMr803%2BxUpHKylOISV5YWnPb8CR%2Fo7ig0x%2FvmZeEjarnjCh0V8g9pX8fEYf%2BAyni4T%2Bwg0BZ27hMsRkUwIIPSmTi%2B2Q6ftpROPVWlmqa6p3vbVm98BLFNR8WiEmYeijkkHcIQ3TGImTtSs74Zjs7tTJ1%2Fq%2BaDxiNPQy9n5vHAgghal8bJ7iXOAVaMKGI4M8GOqUBdkV6zzW2FKG%2FObOu9zlTG6RIGTr%2F1Ofq6tdoIGHkxzpZO49h%2BYw2%2BKz3jMSFE4gE%2BZgRZh2PCvBDnv%2BwscaGKEv6tbpDSDrbnvvlwrwgje06B0meaz%2FnapbmzHAfWdXkWwUbvrS0yKgan8PGO7iIDmqnuaRWVeFq%2F%2FDRjjEMmJZyI6mEbu5%2Fpg8BsI4TGwh1M0nwQLgE69CvACiJ9%2BQMptNOZwTk&X-Amz-Signature=c4a97d941924d0d5b112925d486da61c223c22345566db213d504daef7163c6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKGQXZOG%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxXOo7AwOvuPjGZCN3hV5AsFnR4BxrRXhTOBGq37Y2GAiARNICaiWWcA69yUf%2B1rg0ESH9DM0RW8dfkeWfbM%2Be1zir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM6OR3a1WEfto%2B7%2F6wKtwDyf5WlUJ4%2FfcDsJEPKrmivk%2FDVZUICBjCGDck0kOBvzOCPxDbrAk2XLRHw1nqly4pPUTqcY9xBqfU58Uqc7Kcbbo6dY3V2Eo3ikLyRR3cga12fH263VWK8XPdWQQCSOXO%2F%2Ff7fkAK29QNsaQdeFhDx09sr%2FOMR1mHqgkmkW1kOQBZaCAHm0elNRof9teWv3rUlAeNJdWp1vPKcmcZ3azVzSbFXNw7h9r5%2FT3jM6hF2UhYRG4bYlgrtFNPv7HZkFwpB4eryzhxtGV%2F9etFLLP5qf4Q0%2Fy%2BBMgi1BJ9OjDfrKJ8%2F7gqrBcFVr2qstXW4JFOSYyc3Ahr5GAKUkwioYuoCv%2F0qqZZEwAOYHVTnh7rzRCiwB5UBM%2F5E0OMYba%2FVmzZ1SxWTQBZwarIq8MOkABC9ZNPYvs4kF8VqK04mlqfSkQLUhd8kPorJYeDZ1tgYoj7taBiz394Ke7fUCoU61cGYiA36DDYzFcvx9JzPhNfUEm5ZgKrkM05R9sxEdSSiwcHnjnhWqKQJR9GasJO4ZBxHdTclbqhqxj0nJx7OBfh4wyebe%2BW9HfB26EMnNtrIzzFmLT97VBYrIcrRNagNN9RfaZRL3dEwsJTY%2B%2BwKj4lWnRabDhgqvFD8rendPMwkPjfzwY6pgG2pETXJdL0oMW7RCGXcOxXvIPSxGHjvT7vm8egOfPiicUDQoDhDa%2BVrFz3tP2Sj8TiGFqmErhW%2FbIL33UDKvFpxbpldFEjvia7EG%2Fkz6zCldCfhhTR4PSTGQUaofF7emKRf6y11d70CTlSmvMUxnLq1nU6%2B4d%2BNZF9AGFFtOVBLe%2FNQE1Vjt1cKZRYg9U8d39irSTA2CaHJjQEkZJRJKBtiAjUKodk&X-Amz-Signature=9615f9a108b5a402965e8d99bd07de692eb072610010ffeb9180907e47f6724d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAT3ZTR6%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2LRthuTwnYAaW1Z1rcHeS1vZhgwAV7JCHmOua9cBFDgIgVkUXtKdjaNK9bGVD6wOE%2BtiPm%2Bz7hAWl5TsLti6e7vUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDG4b%2BYJJMvhI929wKSrcA%2BNUJbRFddwG0fXEjTCVEnOvPs90L2wtrQ8HH8PCb4CueWREvmufOSgqZS%2BWmwpI93fIjxuxL2IV8vjV3sk6umQQsO1QWV4ii7QM5DT444ZVwoB%2FcFtjNodW2Exh1fjnlRvUYEPC6gk5dMynjBfULtDjQBWKK%2F1WK%2FhLjbS8aomr34CCNCTJgtwB7%2Ba52fc3iAciOJrhfXlPmb5u2FkFU8SwSo6ErITwLWD99Bsk1p6LHPnUWIjCKHU7lgZ%2BADeJQfoTS0vm3F3ImPit%2Fvpdq0erimvMiSqWNn2afLprRBouB8ja5eRqeORqBOymFuqAA3xnJHTETmNvg4MUCDGECU0uW8al71gVZWnNrfL8MxdVIRhL8q4ZWhEMUw%2FM923J9mEA5UZM8ZRlNQslgs4iWS8UKc9E58PoA2znExysfhBjV1%2Fj2rC9rftQmLIvwzkYAu5OZwhxo1ft9zZTVwv3ZVOFHyi7FWhgJSY9P3jPuRJqq1E8RS9eveP0GqzweUyAn32E2hnGH82aXaRqLX7lC5lPLy3C2PpnNv28IBDlavJToz3wKe0KzmR76NH5Sl1KzSeJVHtJK%2BqpmiyKkaRYyGjtdCRx1B81tYQm5fSF5FYfFmU0Jb8QV0g%2BztpRMOz2388GOqUB4QugEusLqGyFZa5TKfunkgzoyFF0OSzHoGxdBE7M6r%2BYUcnqLHin8ZlUYdjJtqBgbrVib8uX2Y74IBRXEl3KOks1%2Bq70dhbrtACeWNkcnqDMU4PZ9XTKDM%2B41KSKHQB0MmESBZ17Wo%2Fp1Qydg2HczGzSR65Lx3DM5VVITFnwmmNB2b2EAKOcTmGpYdeIVDyM%2BBqtysyRA48ei2Sy1iyGfGAniRYX&X-Amz-Signature=5a69500ec7df58f7417d87d362f1e665c5b8ac0eb4b8e43e5e4b215d7893033b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ7T2IH%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0Wq489Lxe2%2FLVyvtv3b6SeLi7jnbDZdlnWtAagyqTXAiEAr7HE9zkQIke4UzuS7DZvL64X0Lv0BrusG2vuEaKhjlgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGieKZGQ6KskJCg2QircAxdG1CgjCLegQt91bBnWqS6BqwfPlb77j0QqoaIgNnBcl0l%2BEcvAXgAZLu0QUaB2W2%2BOkvTY5Hv0vJIswwBma78liv5ynaxvwoM7QDd2f1TzGMwnY3lHB3qr5fxr0%2F7xNtdQTAGM611ddO%2FXgtqGgSWVawKck4QK6jjNz0PTlFGBD6bG%2Fb%2Fpho0arzdHzJ0WagSUPG69c9UOx70aXVzSItJaluEdCFKwdbPL%2F9U2SAniAqNkCGSKiwJWd%2BnVtX5bYj5Tijrd4NiD5omVfh2NyA6cr0dij3dUjO4oAQyX5QW0G44qpnLKVzzPKodyfNwtndG6A57ImjbWof%2Bcr9WLqpl7oXo6OJSEHdw1YmnA%2F0pzlbd9aBA%2FBcjSMHbtbd%2Bgd0MGPfn12qQRHWp7cUJvXQuLOl8M5nKyNFq2%2BSDjj5K8Gs7QbLRL%2FJSPLMc8472eEPFvSC5RT0FD%2F1NrJ6OHmj6%2Fz8%2BuKzCwCC7%2Bp9%2F3mtPKbTFHyYno6FUrKYu6ZoLUD2XNoGRUNcZw44Al968oVNwfuXF97Auv44M0TB1IOsuXzgcOTZ7kA24z8jAZGtAILkaYdviS1x0m203wytBUns%2Fq3WXojIiVWjQ12uMCkwwb9W6F7gfxdN0kqOj1MPL2388GOqUBXTi%2BcZXFz7vTC8%2BmB7eYd5CEuc%2B7ZOtmhB%2FPPIiV0g%2FwAtTFheLT8VoJvE5rSdKGcJkezSZGlCpjOCU3J8WZHcmR3ll5AwNUVUNBsLAnSo8vvj5628uTwqEgbwncwohwflFpRALHqESo5193%2BKBXE%2BUHuiZSJt6T6Xo%2Bte62%2F6FOIdbvrj27bynou5HZS4JXSgtuE8rUoX%2FtRuQ2%2BMLCa9d6xEJS&X-Amz-Signature=6becab468dfc33adf5a99e47b51714ae96c6c15e7933598423fc3e2a0e33d4d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDT6ZLMW%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzEKjhX3RFij%2Bru%2BBpxNIngzn2L6HRmA2pL5BiV%2FDWdgIgAvFB8au77s9UvES5WkBrupOlbgJHelcZT%2Fy2jwdR6YMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDI9jZJAueyKlwyDbpircAy9pvWbX13kauxEWMCrW0fUCV%2Bapr9lOedyfdszx%2BN13vjIw%2Fx0Ma6j48ViBikJftq%2F9%2F4WoHDq%2BuWjSazwoAh8yPMVudHmm4gr7UgJvj%2B6bD1plJZk%2B8rf1Uo8n9SkSAqFy1pbt5dK0SJu5ugG%2FvEqOsVcXvCHC66kC4GhssUBYJ8t0S%2FXhAucAv55pInPn3whfOHMJ6VOeSl283TvnjFkLADOWQmtGP7hRFg9tADCS1vUgWRb9oT5VIn63043RjCaWSpE7ecvkMvjA8A0Hhy2%2BB7ATG8RViXucKWtlA6Z3XxFSMFKtKJ3RInYv4y0EpfyUxdU5jnoVUlrnHumPQ3%2BH%2Fw%2FABsvLoie6n3xOeYCRhLdjv6H7EwFvdTNPOFLnm4s9hZTu1lodIOno8CHyeA5JpHTzo9YDOiTNRdWlhuALJNDmdkHMas6FsAX1R0dzU7eDqjgt85D7iNaeHE167ZoPF2SaJ2ZfIqvAlXRa32gIpFvgcSyqsf%2BaavO9f8K6BT3kJ4vj52r8B%2BDPdM%2FEMIoAa3rl5N7HXoO5YVkrZsdmKtOaDBKAxeeyMhTeWVpgsDi8wm%2Fc%2FbEV8SVEzurUxaVg3dYAAmnbZiyVuBz7pssOHQWM9cQh5iljm0HrMLT9388GOqUBKQ3QRnVHfOSqf%2Buf7sqQmOX%2FqH9dob1YEI49O7Mj8wQnXGJnMdyfOwUqMoUWnZYx%2FuAFOmT5nGRSOfCLkDZNbcRX9cfabRvscOTw86Mgo8rvQBX25WXbu6E%2BxbjhOu24VG55zC57DKDhCM500WvenU%2BDa1GhJkAA8b9sULVcWsKeIR7njRnmrU0zW4vgfwQXfIJNMpKAicnYPDn6xxJy1mfGd0%2FW&X-Amz-Signature=7b85122a8eba6617629cce5c4f93203cf41cfee2cf2a6a8671076b1cffb16254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ7T2IH%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0Wq489Lxe2%2FLVyvtv3b6SeLi7jnbDZdlnWtAagyqTXAiEAr7HE9zkQIke4UzuS7DZvL64X0Lv0BrusG2vuEaKhjlgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGieKZGQ6KskJCg2QircAxdG1CgjCLegQt91bBnWqS6BqwfPlb77j0QqoaIgNnBcl0l%2BEcvAXgAZLu0QUaB2W2%2BOkvTY5Hv0vJIswwBma78liv5ynaxvwoM7QDd2f1TzGMwnY3lHB3qr5fxr0%2F7xNtdQTAGM611ddO%2FXgtqGgSWVawKck4QK6jjNz0PTlFGBD6bG%2Fb%2Fpho0arzdHzJ0WagSUPG69c9UOx70aXVzSItJaluEdCFKwdbPL%2F9U2SAniAqNkCGSKiwJWd%2BnVtX5bYj5Tijrd4NiD5omVfh2NyA6cr0dij3dUjO4oAQyX5QW0G44qpnLKVzzPKodyfNwtndG6A57ImjbWof%2Bcr9WLqpl7oXo6OJSEHdw1YmnA%2F0pzlbd9aBA%2FBcjSMHbtbd%2Bgd0MGPfn12qQRHWp7cUJvXQuLOl8M5nKyNFq2%2BSDjj5K8Gs7QbLRL%2FJSPLMc8472eEPFvSC5RT0FD%2F1NrJ6OHmj6%2Fz8%2BuKzCwCC7%2Bp9%2F3mtPKbTFHyYno6FUrKYu6ZoLUD2XNoGRUNcZw44Al968oVNwfuXF97Auv44M0TB1IOsuXzgcOTZ7kA24z8jAZGtAILkaYdviS1x0m203wytBUns%2Fq3WXojIiVWjQ12uMCkwwb9W6F7gfxdN0kqOj1MPL2388GOqUBXTi%2BcZXFz7vTC8%2BmB7eYd5CEuc%2B7ZOtmhB%2FPPIiV0g%2FwAtTFheLT8VoJvE5rSdKGcJkezSZGlCpjOCU3J8WZHcmR3ll5AwNUVUNBsLAnSo8vvj5628uTwqEgbwncwohwflFpRALHqESo5193%2BKBXE%2BUHuiZSJt6T6Xo%2Bte62%2F6FOIdbvrj27bynou5HZS4JXSgtuE8rUoX%2FtRuQ2%2BMLCa9d6xEJS&X-Amz-Signature=5fb9e04b7360d735bb76b37d5a407b1fc9a69765ce98f3c0c40dc5511a26e34c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTEQLNL7%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC45w9EZXif596WbNwXbkGvhfrq7SE3UIvvpuBHULGdDAiBvz35xFVSydgIuZzbWrImvkm7%2BF2IayQDnaqH9GIJMeir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM%2BikboSwWQ15YutnzKtwDwwyKpikcMfSgNrRwH9DAIA7F6T5RswKXFQ21mI6crDq%2FF4asY6HZZH0QnfmT677CHvLeF4g1qxeqgEVyNjAK3EiGR4cMDOjtNGXsxHAs%2Bd2y3ZLms1fSr6GMnjjACh6pvzx86jotczJML%2BcNOdbP8bSuzt%2FX3uhcfB0z5o%2FCmFtUaZ%2FP8w6UfMIdE5qRS2R2B5Ua8s%2BdaJeieOFW18YrKTguRa0YwfYzWVsWiv6sWMeQAlJHnuiRFCariVkw4vpXLC355JlHSAlOOkbupt4ENtBNv09CMrOPW6C2goARbAxXzvKX%2BxeV0tNNbUBZa1yKLLdeMIc6AfXS4GB0Hh%2BeTtA2FI7DOj0HweV3BEn%2FygIykunB5YbwqW9ThUcjCs%2FyKhgMLS6wb%2FHbYrnOUiW%2BEt4ku4kGR7ITnDIcpzoLdRcMH0Ly%2F3%2BvEkomBWbpW8YYJXCVBRkExAPShHtuBff6FaEojNDTE5gJUmROAHWl9CKfPTsaT32wYE0dlNdeb3%2FlLWCKqfvqhgZPbOAyDuCJ1rSlaTCGdQI46h0Pe5MMNmp7r%2BvQgfsXhRC667tSdoqsSJJHzXzmW7ViYMng6C78Q68PkgS4ydkuxaAMnbUQaSSEDHhZi%2BVTMx8GREgw7vbfzwY6pgFWIIEuWnx8HHGxOGfNohQECNHLOPyQ6oGGEFLzfiHj5Dj2OCqsfOykZ%2Fmt7XqsL%2F%2FbMg29XEDjfQYXOq0kX0hRoyXLIXxz1y1iL5AwpeMQOe%2BWYqSkzOAzgHDg8uigALledzBn81DIw3Z71wgI5F9YEx6Uy83IYOLU9qmUsJDQ9NOw7khQ6oRdCzoPFsO198Gwa6%2FWmN8PgU70%2B8mT5eRH%2F%2FOmBn%2Bt&X-Amz-Signature=cbc15257d726573995b97c01d7f6b2dca56229c88f7c7446b63df286a17c6434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ7T2IH%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0Wq489Lxe2%2FLVyvtv3b6SeLi7jnbDZdlnWtAagyqTXAiEAr7HE9zkQIke4UzuS7DZvL64X0Lv0BrusG2vuEaKhjlgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGieKZGQ6KskJCg2QircAxdG1CgjCLegQt91bBnWqS6BqwfPlb77j0QqoaIgNnBcl0l%2BEcvAXgAZLu0QUaB2W2%2BOkvTY5Hv0vJIswwBma78liv5ynaxvwoM7QDd2f1TzGMwnY3lHB3qr5fxr0%2F7xNtdQTAGM611ddO%2FXgtqGgSWVawKck4QK6jjNz0PTlFGBD6bG%2Fb%2Fpho0arzdHzJ0WagSUPG69c9UOx70aXVzSItJaluEdCFKwdbPL%2F9U2SAniAqNkCGSKiwJWd%2BnVtX5bYj5Tijrd4NiD5omVfh2NyA6cr0dij3dUjO4oAQyX5QW0G44qpnLKVzzPKodyfNwtndG6A57ImjbWof%2Bcr9WLqpl7oXo6OJSEHdw1YmnA%2F0pzlbd9aBA%2FBcjSMHbtbd%2Bgd0MGPfn12qQRHWp7cUJvXQuLOl8M5nKyNFq2%2BSDjj5K8Gs7QbLRL%2FJSPLMc8472eEPFvSC5RT0FD%2F1NrJ6OHmj6%2Fz8%2BuKzCwCC7%2Bp9%2F3mtPKbTFHyYno6FUrKYu6ZoLUD2XNoGRUNcZw44Al968oVNwfuXF97Auv44M0TB1IOsuXzgcOTZ7kA24z8jAZGtAILkaYdviS1x0m203wytBUns%2Fq3WXojIiVWjQ12uMCkwwb9W6F7gfxdN0kqOj1MPL2388GOqUBXTi%2BcZXFz7vTC8%2BmB7eYd5CEuc%2B7ZOtmhB%2FPPIiV0g%2FwAtTFheLT8VoJvE5rSdKGcJkezSZGlCpjOCU3J8WZHcmR3ll5AwNUVUNBsLAnSo8vvj5628uTwqEgbwncwohwflFpRALHqESo5193%2BKBXE%2BUHuiZSJt6T6Xo%2Bte62%2F6FOIdbvrj27bynou5HZS4JXSgtuE8rUoX%2FtRuQ2%2BMLCa9d6xEJS&X-Amz-Signature=94563f4959d3f173777b6328d2dd672e41e7f04d968f0e8361f2b450362abc82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5U6QSYK%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCucgnZBgO45cBMlnKBRRrzevKnQyHCkyVzCnsYUKkhKwIgRnzBcpuNizxV%2BYTVhG76aB0q9K0C03%2F393FFyOTETmcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDE6Ix23CNNlNCwZrTCrcAwoDXiyjNOI1tvQlinf7tq7Sexguvs1tMxH7ceMs0IjT5HlnRuYyuiE0r6KTsYjqy6fXTFIEsfo%2BhVeSPfpJ0929Uhdwkq4ZVBVCXN%2FfRTwh4NFnPcr0CnQQcA1zNltRvXR%2Fslr7dBgDXIdSyhxtBvmpXKN%2Fr1GPnCvEWDrD0XAhVZi8eAI0cICii9mU5tSCPvQUwqibcQii8vb1pHo%2FXom1gc0oyT0NLRZkMOwqLUUsYpv6VqkiTsD4t3MeZ%2B%2BgHnJciiFC%2BqBXE7DSajRQoGznzcirjdY%2FyEgOscyd9o0IONoA2Q8Zgho%2BC5XTsP3wVcSeJ7d2%2B%2B1h%2BsEj8YQgLhu%2FnjSsM9JKsT4JioGyDO5ebHRSersGGIoi2cKY0uvkooq3vYG9c7qamxd7KJ7TC30MfRPFQ0O%2FYJEKL%2B4WHloBR%2B76l37xCiLH1JMTDoO8z8k%2Fwp763fwko7t0toY4fwuJKy4klTOpysj2T4IFZ3Rq0A%2BZSAC2kdVc3hXXSlGpAn76VdZ%2BdEGs7GjC3iVJv%2Bh0I%2BhAXfdmpklw4ns60NKaTZRB%2B%2BRI98ldoF241k3lzct3CoenAvqIortfJaiVbpMOLfNBx2IC2Mx22FSwtxhUQ4zOEM0L8egi%2Bnv6MPH2388GOqUBB0j5vFDr9rynu73ioBi4TIqN9kQbh4iVOAornnQkqFhEa%2BCertmE6NvwLWXubJh8vDUd5SaQKEsuJKw%2F%2BgllWNuHwsuin4Ug%2Fip71e5Vaxy0Z2gl9P252Yrv22DugC%2FHmkOoJSZdHjD6NpZhJ%2BtZSye0QosPLrHs1m%2BWiN3pIZxHm4roV2kqIqzNBz9gl8uIJiimGsW6pRZ%2BhpC2bofWYfU4V296&X-Amz-Signature=f08cb2f1efd2d716840f5bdda6a23830ead303827915304bf3e8562bb8cbe13f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ7T2IH%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0Wq489Lxe2%2FLVyvtv3b6SeLi7jnbDZdlnWtAagyqTXAiEAr7HE9zkQIke4UzuS7DZvL64X0Lv0BrusG2vuEaKhjlgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGieKZGQ6KskJCg2QircAxdG1CgjCLegQt91bBnWqS6BqwfPlb77j0QqoaIgNnBcl0l%2BEcvAXgAZLu0QUaB2W2%2BOkvTY5Hv0vJIswwBma78liv5ynaxvwoM7QDd2f1TzGMwnY3lHB3qr5fxr0%2F7xNtdQTAGM611ddO%2FXgtqGgSWVawKck4QK6jjNz0PTlFGBD6bG%2Fb%2Fpho0arzdHzJ0WagSUPG69c9UOx70aXVzSItJaluEdCFKwdbPL%2F9U2SAniAqNkCGSKiwJWd%2BnVtX5bYj5Tijrd4NiD5omVfh2NyA6cr0dij3dUjO4oAQyX5QW0G44qpnLKVzzPKodyfNwtndG6A57ImjbWof%2Bcr9WLqpl7oXo6OJSEHdw1YmnA%2F0pzlbd9aBA%2FBcjSMHbtbd%2Bgd0MGPfn12qQRHWp7cUJvXQuLOl8M5nKyNFq2%2BSDjj5K8Gs7QbLRL%2FJSPLMc8472eEPFvSC5RT0FD%2F1NrJ6OHmj6%2Fz8%2BuKzCwCC7%2Bp9%2F3mtPKbTFHyYno6FUrKYu6ZoLUD2XNoGRUNcZw44Al968oVNwfuXF97Auv44M0TB1IOsuXzgcOTZ7kA24z8jAZGtAILkaYdviS1x0m203wytBUns%2Fq3WXojIiVWjQ12uMCkwwb9W6F7gfxdN0kqOj1MPL2388GOqUBXTi%2BcZXFz7vTC8%2BmB7eYd5CEuc%2B7ZOtmhB%2FPPIiV0g%2FwAtTFheLT8VoJvE5rSdKGcJkezSZGlCpjOCU3J8WZHcmR3ll5AwNUVUNBsLAnSo8vvj5628uTwqEgbwncwohwflFpRALHqESo5193%2BKBXE%2BUHuiZSJt6T6Xo%2Bte62%2F6FOIdbvrj27bynou5HZS4JXSgtuE8rUoX%2FtRuQ2%2BMLCa9d6xEJS&X-Amz-Signature=6cb60bac512fc71c823db58997c3b8bcd0d5b98980d4182a0247a328349a2e4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7INQ7V6%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD35fbIfQTZhyQ%2Bn2arPpO3loamt%2BvhC1YJC5zuB8sHcwIgfa%2FxQAmTvw8BQPxkXetbyCma4peDjwVZWigIm%2BCQmG0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKkBCc9IjRk8nY1p8yrcA%2B%2Bjx4RHTjv%2BDjlH5t1bgS8I1IXUHN0CwSwHWBryN%2FaOC%2B8wM4abuiunPATSfBBICv2KDimzRqt575Fn3qR6ByYkvR8FEIAM8Ro%2FTi5nNy8BvxGvbz3pzKQzNLfayPNXw%2BV63hvbTTmZW1pCxmDO1ZDWKGCvcVkfwiP%2BhSmWn%2Bx3r0aJiwQRDomd2TYwHjgCTTdX%2FIhLiTveJ6%2Fw5PHCcr6yOquCyHDgsjCk2qgUsrilyFN4EkNSQXyEsPOZuPHGD5FkbAJTAQdVasbiK%2FiuNBY7Y45G81XuTlZRWrp%2BYhheE7ZRR%2BvyBLnTUYS99ATbHNi6tXBRif16baBdhsccptFzHycv1uyLvca2dHaco5tyBANDzo6UBWqS8YlfYqZNgKgpwjZi57phuoLGiUxUSSJn148IXSuAlLhXs4ufM%2BDsI5iZ5KCq%2FLR%2Fq5dfevFddwcP%2FKVu6VtxTP6EtO8TFTRlOHtKDLbBunuqirTV2glkNi6AfDDu6YKSkazOS%2FJIHu9J64%2F8DtIzQYOugwjvmlV5Qt11YEEfiCklKBuyU3qx7whPr%2BujnD4KmY8kqzlkYemln6f0LyhzOu0wTtagIj%2FHiR6NPxVAI%2BTyDEhQGFL45AZvAljSecYeFOnJMKP5388GOqUBoE6uk6iC7Wn%2BG%2BjAVPO4vxmQnSlOI24TflI%2BHrgUJ8WSjYjnL77zlpYHXZoFghlbY9PUfLoN14%2FvCZnGzpibTBjbJj6eH8OZbGvrl%2B9m9CmC3zkPV90dyRq3tI2g6XaVbo0VzJVgNncPH5MSdk%2FPKHfRzlzXIPgNWooqHVHGBc2ldJo1I9sH8r4%2BKC1A0%2B8CUroLA1kbPODJtv1XWC96HX7v6Wv7&X-Amz-Signature=40f65e2dc76ecf65ff0a182ecea55b21adf82ad411b121b9d321d5c8dc30c99d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ7T2IH%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0Wq489Lxe2%2FLVyvtv3b6SeLi7jnbDZdlnWtAagyqTXAiEAr7HE9zkQIke4UzuS7DZvL64X0Lv0BrusG2vuEaKhjlgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGieKZGQ6KskJCg2QircAxdG1CgjCLegQt91bBnWqS6BqwfPlb77j0QqoaIgNnBcl0l%2BEcvAXgAZLu0QUaB2W2%2BOkvTY5Hv0vJIswwBma78liv5ynaxvwoM7QDd2f1TzGMwnY3lHB3qr5fxr0%2F7xNtdQTAGM611ddO%2FXgtqGgSWVawKck4QK6jjNz0PTlFGBD6bG%2Fb%2Fpho0arzdHzJ0WagSUPG69c9UOx70aXVzSItJaluEdCFKwdbPL%2F9U2SAniAqNkCGSKiwJWd%2BnVtX5bYj5Tijrd4NiD5omVfh2NyA6cr0dij3dUjO4oAQyX5QW0G44qpnLKVzzPKodyfNwtndG6A57ImjbWof%2Bcr9WLqpl7oXo6OJSEHdw1YmnA%2F0pzlbd9aBA%2FBcjSMHbtbd%2Bgd0MGPfn12qQRHWp7cUJvXQuLOl8M5nKyNFq2%2BSDjj5K8Gs7QbLRL%2FJSPLMc8472eEPFvSC5RT0FD%2F1NrJ6OHmj6%2Fz8%2BuKzCwCC7%2Bp9%2F3mtPKbTFHyYno6FUrKYu6ZoLUD2XNoGRUNcZw44Al968oVNwfuXF97Auv44M0TB1IOsuXzgcOTZ7kA24z8jAZGtAILkaYdviS1x0m203wytBUns%2Fq3WXojIiVWjQ12uMCkwwb9W6F7gfxdN0kqOj1MPL2388GOqUBXTi%2BcZXFz7vTC8%2BmB7eYd5CEuc%2B7ZOtmhB%2FPPIiV0g%2FwAtTFheLT8VoJvE5rSdKGcJkezSZGlCpjOCU3J8WZHcmR3ll5AwNUVUNBsLAnSo8vvj5628uTwqEgbwncwohwflFpRALHqESo5193%2BKBXE%2BUHuiZSJt6T6Xo%2Bte62%2F6FOIdbvrj27bynou5HZS4JXSgtuE8rUoX%2FtRuQ2%2BMLCa9d6xEJS&X-Amz-Signature=4af3df37fa5b9c1f61933a493a0d0755229f8c71ec282da1f523f6a8a3d0795e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6GK22W5%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg5H1uuzRcW4gy1xUAlmKUV8rhuNXTLuIT3h9RrAFJVgIhALcPdE4K6kdpP%2FtzVhn9ke7UfzghrMW9WPZAim05CFggKv8DCGMQABoMNjM3NDIzMTgzODA1IgzK6R0qRozRsAraGrgq3AOOfpLaOHa%2Bb%2Fg7aEiY8Cw99RY8g%2FAH%2FETGYOmUeYjAVjkKKLcGyiH3e8r7dhsR7aZpeur8AMea10d0F3K0PQmltAa91RTbKlhFrME6aHmBuATNRAyUOR4oqYQrOg1nd0mGr%2FmJNScrjsdJ%2Fczeb8oM09l7qZfr3a1VznKVIugj6nIAXbctWwvd%2BNk%2FgGUhfR7ziKljob4VoemKOoeZoNw8VV%2BuIYeuvLvdhpNV23Z7T3Q59nVBgbjxx8ec8RIcXkjyMDoCF7N07OsZTQyeFDk4xgAnn1WU35jgPV6%2B5sWePyFF%2BdPtn1lLHsY8vcJhU6G4yhF9zno1MVKzryKQahJzTwjJeKw7ljZC5d8kikw3qv%2FXU8i8Z7vnidpRx83beCpLbp874L18k6q0Q%2FFm%2Fiss8wvQMi4nYVm%2Bv7%2F00VVZW95V0DPR5DtNDgcmKbzffrpH%2F5%2BmJZDWb7NqkVUhmEm2a4qDsd73nVz3orfUJIpOzj26cNFQdkCmc8euCSJeCq%2FUb7r%2F1PiR7ZgLQSd2L6QRJfqlQPvCgjidVaL5Ai1pMZs1LEKm0Z30kktxTxmMdyyDB1PiR4XKFf%2FSA11tU1vFpo8MWGReJh3GdxQVpAU37Xdt%2Foyk0hFKAn6OaTC5%2Bd%2FPBjqkAWHXGVkrfi9j7rJU0FrmsoAbU3rIrebuIUnU7NPSjYne7%2FEoKhjI507981PqbXcTbu8cB4%2BXggIlD94CtY2nqtSXihZJDBzO4eQqd30Mz30DrQZyaJOUNv7gEYfjCkWghju0xbfBq4JE0xh6d8m4tMRGrX6QUQwTHgCo%2B7s29MUbjY82It9pQXpAwyonlXHv4FXFEnggsGLK9hIhcbOCcQgdORDq&X-Amz-Signature=ea3538b2ebd0d8417f7153b2c87f6836ab25ff5d4edb7229974108ee5af11d42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWGWQWGI%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOEr4F0kGo2CQ5lYbrqG9upv4XWWcUjgyTAupEV5IXrAiBfSLk2L%2FJzr0OD5lINQCKIMrhERNIR%2FEQxIPNiU1pZySr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMWtlq6QvG%2BfEn08x%2BKtwDyStGKphji34XuYDnFfPX0IgrUMDSL%2FQNOX5IuPWgB95QGWDi6JcdQOynPoyLGNZrhxBgPp7AlvkuaMxcDTlY%2F9RokeK6UKB%2FAfjcdL7F7IgS4Te2QwRoot56tMUC6eOC14RhMzjgSMgWSVFVFjIZJ7wg9NrcN0BYD5dfKhXZ7DDt5q%2F46nFchExtCU4pi552wQq%2FL90SwEY5i89w2EfT4AcDdNNj%2BqxzV7gPxQsRU849TIiljjF%2FXNBUXIUHJ%2Bs9QWjsl%2FxMgsTv4iYivLOrgsQMnBLDRRqQavGWO4LSzMW3Y%2FWvNL1Uul2%2Fnan0ff6Ji1DdYvlp58YZXLzQEQ3YWUV60Jj23gE1pwI%2FR4oLMQ4zAqW2z5rpMSYGhB%2Bnjr4TVvdnaVbwaLyyKjyE8KE0Xs3JnqX4GYIQaeaOT13G32VV6o5pVkJAVmrojhQUS0GkqwMwSe0DbAdxim0pBJf%2BkJ8q81A4nD0ShPV%2FLC8F0EYG46GGVPWo2I8YvAIz67373R8dBcLyUYSwOTTuvELHEdP4zFIAFofdQ52YBxwMy1tNA6NoXMie%2BkHfXCZIl4zEflm%2FYim31g4aoi3cU4ehNRTWIFWqpVnR%2BEhnp%2BcwLno411Ry%2BL9DUYUWrxYw24rgzwY6pgEIm4KC9IpzMVOeMJnM4yLEWJGQIUhu1h0%2FWXS0H33Mey5vDJ723Y5v34O7hHR2RdNc1vqRRvfkddY36uHH62aH9Xy7VVq31vSuGeKKQINm8xqwisve6A8GVF6EzgcsvO6s3NmW8Z21yVSh3LisEPCREgEdAU74iSf7gfZTSq%2FWNaxWH7pGu2cAOMpI9wRMXX%2BRJecvUHJdKgz8li4OoTzmyMQfXaX4&X-Amz-Signature=17581e0a09b0a6a7f3cc7090ef7bd93024b817e7a01c4a3e3bea23a468beb876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3JZU2XA%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FwQotPWP0PpuQsPggrxomUqC7mfxYm4Cz3Empin13qwIgNWDAl5kF3zRwqBex7TcTqFeuaFfeE0yG5tQ%2FXpTneFAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBa1DMxpOzjaP3mrDCrcAy0ms8jJtzX5%2BYZ5mK16oOxAfj1Mqa%2F9da3z%2BbGWOLlcDtsaHJf%2Fp6rH2ycELEHptnw4rbPzCH77OfUhh7%2Fu3VqoxRlFR9UCsszM9uhCMtQEAtr6yYX1OLkr6gFi4mac527%2BJNeQsgfZsMK6IkzOKZaloK2GEBsEHOFiYbdMnbbAxLrxmOCVj5noao5JIOjYirxpC%2FaEeFtQeGfNvqnQqjcrOiGUqqKTfD0sl%2BZkgV3daZzzQ7p4i4zsACIc0dUtFCl%2FD75RRiSeL251KHoedM2rJ2YRXwUn4ERQtNejOKCy2wo9qFrQd67l348JrMf0%2BAoetEdcNUk3p%2BIotLkZ8SnX7uP9aAI9gdWSSk2QZJqn1fBQqOVv214MAjyAaTOc1uFD81oP%2Bd3Vf7o9eHWRKF5AopD6LhFqRBxGYKHuXRMWIV%2FCteYsX%2F%2F04lHC9m78gzly0NwnCJT6W0Tvb49HW8P3VFfYHff%2BKrzTbO17k9X1kOYl5xgl%2FR%2F08WdTUUtWZWQF%2BEQlXYmOBqqOAgTLz3ePDx2%2FTLKkHa3SRrJG7mP4tuRMyxzQDxVR%2FmjyTUqLDooWKcTHPfySSEoj%2BEWnJhHFxldAIYjguMyosI3ZcsBnn9muH2etYDRaTjOCMIf5388GOqUBAo65KVAtV%2BIeV5jRcfbUw7Jjkz1KWFztphadXESeqjbM7HzOM%2FtTnf3%2BW69S75bGQ1b%2BFIkWDlAcLid7bVWRefFz54lJKkjFSyA4VBSJQMuDLizsjIZLcCb8LYxaXqiCwcceaKtuk5bpaNy9QTqm6UiBnVMbREEGmPeyITxjRrldHkGOK5GBIvzyFNv7MzkH7MknigZd2ehnvPzPJ8c7RaYbDvPo&X-Amz-Signature=eb22e856ed7e20dd7e2a4fd467200a316d880ebf2252821b23264ff9fbb20c21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ7T2IH%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0Wq489Lxe2%2FLVyvtv3b6SeLi7jnbDZdlnWtAagyqTXAiEAr7HE9zkQIke4UzuS7DZvL64X0Lv0BrusG2vuEaKhjlgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGieKZGQ6KskJCg2QircAxdG1CgjCLegQt91bBnWqS6BqwfPlb77j0QqoaIgNnBcl0l%2BEcvAXgAZLu0QUaB2W2%2BOkvTY5Hv0vJIswwBma78liv5ynaxvwoM7QDd2f1TzGMwnY3lHB3qr5fxr0%2F7xNtdQTAGM611ddO%2FXgtqGgSWVawKck4QK6jjNz0PTlFGBD6bG%2Fb%2Fpho0arzdHzJ0WagSUPG69c9UOx70aXVzSItJaluEdCFKwdbPL%2F9U2SAniAqNkCGSKiwJWd%2BnVtX5bYj5Tijrd4NiD5omVfh2NyA6cr0dij3dUjO4oAQyX5QW0G44qpnLKVzzPKodyfNwtndG6A57ImjbWof%2Bcr9WLqpl7oXo6OJSEHdw1YmnA%2F0pzlbd9aBA%2FBcjSMHbtbd%2Bgd0MGPfn12qQRHWp7cUJvXQuLOl8M5nKyNFq2%2BSDjj5K8Gs7QbLRL%2FJSPLMc8472eEPFvSC5RT0FD%2F1NrJ6OHmj6%2Fz8%2BuKzCwCC7%2Bp9%2F3mtPKbTFHyYno6FUrKYu6ZoLUD2XNoGRUNcZw44Al968oVNwfuXF97Auv44M0TB1IOsuXzgcOTZ7kA24z8jAZGtAILkaYdviS1x0m203wytBUns%2Fq3WXojIiVWjQ12uMCkwwb9W6F7gfxdN0kqOj1MPL2388GOqUBXTi%2BcZXFz7vTC8%2BmB7eYd5CEuc%2B7ZOtmhB%2FPPIiV0g%2FwAtTFheLT8VoJvE5rSdKGcJkezSZGlCpjOCU3J8WZHcmR3ll5AwNUVUNBsLAnSo8vvj5628uTwqEgbwncwohwflFpRALHqESo5193%2BKBXE%2BUHuiZSJt6T6Xo%2Bte62%2F6FOIdbvrj27bynou5HZS4JXSgtuE8rUoX%2FtRuQ2%2BMLCa9d6xEJS&X-Amz-Signature=3336678a2861229d3f5874ac0226d1c3633c55dbe1c2afbe7546725ef17b921e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ7T2IH%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0Wq489Lxe2%2FLVyvtv3b6SeLi7jnbDZdlnWtAagyqTXAiEAr7HE9zkQIke4UzuS7DZvL64X0Lv0BrusG2vuEaKhjlgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGieKZGQ6KskJCg2QircAxdG1CgjCLegQt91bBnWqS6BqwfPlb77j0QqoaIgNnBcl0l%2BEcvAXgAZLu0QUaB2W2%2BOkvTY5Hv0vJIswwBma78liv5ynaxvwoM7QDd2f1TzGMwnY3lHB3qr5fxr0%2F7xNtdQTAGM611ddO%2FXgtqGgSWVawKck4QK6jjNz0PTlFGBD6bG%2Fb%2Fpho0arzdHzJ0WagSUPG69c9UOx70aXVzSItJaluEdCFKwdbPL%2F9U2SAniAqNkCGSKiwJWd%2BnVtX5bYj5Tijrd4NiD5omVfh2NyA6cr0dij3dUjO4oAQyX5QW0G44qpnLKVzzPKodyfNwtndG6A57ImjbWof%2Bcr9WLqpl7oXo6OJSEHdw1YmnA%2F0pzlbd9aBA%2FBcjSMHbtbd%2Bgd0MGPfn12qQRHWp7cUJvXQuLOl8M5nKyNFq2%2BSDjj5K8Gs7QbLRL%2FJSPLMc8472eEPFvSC5RT0FD%2F1NrJ6OHmj6%2Fz8%2BuKzCwCC7%2Bp9%2F3mtPKbTFHyYno6FUrKYu6ZoLUD2XNoGRUNcZw44Al968oVNwfuXF97Auv44M0TB1IOsuXzgcOTZ7kA24z8jAZGtAILkaYdviS1x0m203wytBUns%2Fq3WXojIiVWjQ12uMCkwwb9W6F7gfxdN0kqOj1MPL2388GOqUBXTi%2BcZXFz7vTC8%2BmB7eYd5CEuc%2B7ZOtmhB%2FPPIiV0g%2FwAtTFheLT8VoJvE5rSdKGcJkezSZGlCpjOCU3J8WZHcmR3ll5AwNUVUNBsLAnSo8vvj5628uTwqEgbwncwohwflFpRALHqESo5193%2BKBXE%2BUHuiZSJt6T6Xo%2Bte62%2F6FOIdbvrj27bynou5HZS4JXSgtuE8rUoX%2FtRuQ2%2BMLCa9d6xEJS&X-Amz-Signature=cdde91cb1169d737d0c51fe94484659525c4fdb31d37173bd1a932212e7f9006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q55XAUC%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSsOnlvfqy%2FAeyFzNAQmso7YGOpA%2BuA0TiMSRlJUJVIAiAqmWR36iZF3dPLcdaP%2F1Gxehn%2FEuoDkA1zn5enhRsJhSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMA0QnZ052IbdxLQ9DKtwDHQjtjDX%2Bjzg5ZPkRvqhQGjTIGlIOLakNYJIoQ6LpWhiiIfnocM2o1OQYlFiI%2BqODIf4l6S5my%2FVwB3invbSYho0iLjth37F2%2B9ZbIv68glqs1Cms1G7vmaypzRMcCZUPNaErAvogq8rJR89P6ZK1DOSuCDztBs3nYG62LieK4tmLo%2F5GsmkGfNaaUBxwH4INI22UDs3xjTK6JflsSNdZA6QgF5nqWzPNYBGAEX99W6mPdkwHvbwg77A3wewAWv9lVDTYvNn9R%2B8P%2F7ebVbeO%2BUA3VVHpn%2FX13pDxCtdXrbevXrrFRLjuaUritJg3YEggQW1lBWsW%2F0E6OwdZF6RXGsKUEmBBnSusum9TZF7sH6EqeAwsK5rXvLIfZJ88K6ZqKh7R6081q2YhRtag46WKUoHv9wYyQCFp1QKQrgOOCd1i5Ou420c90denYwbR0HLB1K9yLSETE21xZRhspWj52LBmc31mQTy%2F1%2FkEUJFrPobcUJBbGejRZNBfAOUdcuGNkRe7tMfRXku6uwIFa4Y%2FcI%2Bpf66lQ%2FXLc4IZ06hIwfu4uP3jj0zJa8CCZP6jzqmNwcx0l9PHNACq6oGSRSvP92kG07FiMUoCJT4GXMbJ7H1u2Nr2FQm6upYQzpAw8%2FbfzwY6pgGcK5B2kL3nFf8OlxJE6VHregRGE2vs5VEHv2DhZT%2FgCp2%2FIh%2B9kR3hKoXsCHDBE7gObXYHibRwUXHP1kroSPkDwcqMUd9xqkzv3stGnOZsbYHqTR7p0tDRcI%2FamSV8hIwPuhwE%2BE7Bvwj5So8qTDUeoOqzKaCrlD3KDRvfH8YEqSOX%2B34dmQoq4valTU%2BlmoWZcTA2%2BmX2vuQssZm4zQuqQNUxrQJe&X-Amz-Signature=7276b40a9eac14df0f88e7b3f57171db279d12221d43f6f889c43b90e3e6e1fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q55XAUC%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSsOnlvfqy%2FAeyFzNAQmso7YGOpA%2BuA0TiMSRlJUJVIAiAqmWR36iZF3dPLcdaP%2F1Gxehn%2FEuoDkA1zn5enhRsJhSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMA0QnZ052IbdxLQ9DKtwDHQjtjDX%2Bjzg5ZPkRvqhQGjTIGlIOLakNYJIoQ6LpWhiiIfnocM2o1OQYlFiI%2BqODIf4l6S5my%2FVwB3invbSYho0iLjth37F2%2B9ZbIv68glqs1Cms1G7vmaypzRMcCZUPNaErAvogq8rJR89P6ZK1DOSuCDztBs3nYG62LieK4tmLo%2F5GsmkGfNaaUBxwH4INI22UDs3xjTK6JflsSNdZA6QgF5nqWzPNYBGAEX99W6mPdkwHvbwg77A3wewAWv9lVDTYvNn9R%2B8P%2F7ebVbeO%2BUA3VVHpn%2FX13pDxCtdXrbevXrrFRLjuaUritJg3YEggQW1lBWsW%2F0E6OwdZF6RXGsKUEmBBnSusum9TZF7sH6EqeAwsK5rXvLIfZJ88K6ZqKh7R6081q2YhRtag46WKUoHv9wYyQCFp1QKQrgOOCd1i5Ou420c90denYwbR0HLB1K9yLSETE21xZRhspWj52LBmc31mQTy%2F1%2FkEUJFrPobcUJBbGejRZNBfAOUdcuGNkRe7tMfRXku6uwIFa4Y%2FcI%2Bpf66lQ%2FXLc4IZ06hIwfu4uP3jj0zJa8CCZP6jzqmNwcx0l9PHNACq6oGSRSvP92kG07FiMUoCJT4GXMbJ7H1u2Nr2FQm6upYQzpAw8%2FbfzwY6pgGcK5B2kL3nFf8OlxJE6VHregRGE2vs5VEHv2DhZT%2FgCp2%2FIh%2B9kR3hKoXsCHDBE7gObXYHibRwUXHP1kroSPkDwcqMUd9xqkzv3stGnOZsbYHqTR7p0tDRcI%2FamSV8hIwPuhwE%2BE7Bvwj5So8qTDUeoOqzKaCrlD3KDRvfH8YEqSOX%2B34dmQoq4valTU%2BlmoWZcTA2%2BmX2vuQssZm4zQuqQNUxrQJe&X-Amz-Signature=59aa92fcaea29fe60c787f0f45ca8bb47365e029768ab432c8201c0f5708d584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q55XAUC%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSsOnlvfqy%2FAeyFzNAQmso7YGOpA%2BuA0TiMSRlJUJVIAiAqmWR36iZF3dPLcdaP%2F1Gxehn%2FEuoDkA1zn5enhRsJhSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMA0QnZ052IbdxLQ9DKtwDHQjtjDX%2Bjzg5ZPkRvqhQGjTIGlIOLakNYJIoQ6LpWhiiIfnocM2o1OQYlFiI%2BqODIf4l6S5my%2FVwB3invbSYho0iLjth37F2%2B9ZbIv68glqs1Cms1G7vmaypzRMcCZUPNaErAvogq8rJR89P6ZK1DOSuCDztBs3nYG62LieK4tmLo%2F5GsmkGfNaaUBxwH4INI22UDs3xjTK6JflsSNdZA6QgF5nqWzPNYBGAEX99W6mPdkwHvbwg77A3wewAWv9lVDTYvNn9R%2B8P%2F7ebVbeO%2BUA3VVHpn%2FX13pDxCtdXrbevXrrFRLjuaUritJg3YEggQW1lBWsW%2F0E6OwdZF6RXGsKUEmBBnSusum9TZF7sH6EqeAwsK5rXvLIfZJ88K6ZqKh7R6081q2YhRtag46WKUoHv9wYyQCFp1QKQrgOOCd1i5Ou420c90denYwbR0HLB1K9yLSETE21xZRhspWj52LBmc31mQTy%2F1%2FkEUJFrPobcUJBbGejRZNBfAOUdcuGNkRe7tMfRXku6uwIFa4Y%2FcI%2Bpf66lQ%2FXLc4IZ06hIwfu4uP3jj0zJa8CCZP6jzqmNwcx0l9PHNACq6oGSRSvP92kG07FiMUoCJT4GXMbJ7H1u2Nr2FQm6upYQzpAw8%2FbfzwY6pgGcK5B2kL3nFf8OlxJE6VHregRGE2vs5VEHv2DhZT%2FgCp2%2FIh%2B9kR3hKoXsCHDBE7gObXYHibRwUXHP1kroSPkDwcqMUd9xqkzv3stGnOZsbYHqTR7p0tDRcI%2FamSV8hIwPuhwE%2BE7Bvwj5So8qTDUeoOqzKaCrlD3KDRvfH8YEqSOX%2B34dmQoq4valTU%2BlmoWZcTA2%2BmX2vuQssZm4zQuqQNUxrQJe&X-Amz-Signature=bd1d014378425e5ea0091eaf46ae67a319b2563716e1efeb2dfded7718e4efa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q55XAUC%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSsOnlvfqy%2FAeyFzNAQmso7YGOpA%2BuA0TiMSRlJUJVIAiAqmWR36iZF3dPLcdaP%2F1Gxehn%2FEuoDkA1zn5enhRsJhSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMA0QnZ052IbdxLQ9DKtwDHQjtjDX%2Bjzg5ZPkRvqhQGjTIGlIOLakNYJIoQ6LpWhiiIfnocM2o1OQYlFiI%2BqODIf4l6S5my%2FVwB3invbSYho0iLjth37F2%2B9ZbIv68glqs1Cms1G7vmaypzRMcCZUPNaErAvogq8rJR89P6ZK1DOSuCDztBs3nYG62LieK4tmLo%2F5GsmkGfNaaUBxwH4INI22UDs3xjTK6JflsSNdZA6QgF5nqWzPNYBGAEX99W6mPdkwHvbwg77A3wewAWv9lVDTYvNn9R%2B8P%2F7ebVbeO%2BUA3VVHpn%2FX13pDxCtdXrbevXrrFRLjuaUritJg3YEggQW1lBWsW%2F0E6OwdZF6RXGsKUEmBBnSusum9TZF7sH6EqeAwsK5rXvLIfZJ88K6ZqKh7R6081q2YhRtag46WKUoHv9wYyQCFp1QKQrgOOCd1i5Ou420c90denYwbR0HLB1K9yLSETE21xZRhspWj52LBmc31mQTy%2F1%2FkEUJFrPobcUJBbGejRZNBfAOUdcuGNkRe7tMfRXku6uwIFa4Y%2FcI%2Bpf66lQ%2FXLc4IZ06hIwfu4uP3jj0zJa8CCZP6jzqmNwcx0l9PHNACq6oGSRSvP92kG07FiMUoCJT4GXMbJ7H1u2Nr2FQm6upYQzpAw8%2FbfzwY6pgGcK5B2kL3nFf8OlxJE6VHregRGE2vs5VEHv2DhZT%2FgCp2%2FIh%2B9kR3hKoXsCHDBE7gObXYHibRwUXHP1kroSPkDwcqMUd9xqkzv3stGnOZsbYHqTR7p0tDRcI%2FamSV8hIwPuhwE%2BE7Bvwj5So8qTDUeoOqzKaCrlD3KDRvfH8YEqSOX%2B34dmQoq4valTU%2BlmoWZcTA2%2BmX2vuQssZm4zQuqQNUxrQJe&X-Amz-Signature=18d824279bdbf4c9f3558a0449f583383b017b2ae9f69e5b70d6b37fc00b1260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV7AZAZA%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVIXxBT9GfXLlqKmg5tgFztExzZ%2Br1sDqQRSwHmMpWPAiEAkTAljAwg1J8h4AHHEhgphiO0pJBGKNHeTdEkljU1JC0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJZKaPzCMko9upQcPCrcA%2FXC3cl751RKZ4l1HCACB7w2H6eIaxJJVykxRFDz3YcXuqgd1OinY10FyN8orS8U1sAg81cBCA9RglUuTsT5mJ2gBXQuMNmIXSx0PLHG2UG6QeQ5MBGtEjfwUjxx6QkxEUN5tJnyaJyBWqtmlgXR%2B9Otki7HOVHAqrO%2BflkBL7idCYsiyOYEKehSjGs5bB6lcACEBnlLuqVtYx7owDWWGjOcKMVkdDnm8FoSES3jzDBUCSXzmYXApQykPwltn5kOxPa2TSaLNMs2n049a%2B7j4VN0QS2XdBcj%2Fk1ARh0tYdQ5BgqfbKhHuolKH0Fy2OonTzFrWjQbh0Ce9AI%2BELkIdcDu%2FcchM7f2SzM9WiLvzMncAwcaR201quBUqexRlV8eafPG7v4o1PQUgtAbNMe9849ImzeMm5ClSo3SuOk62sCYDIY4p5OtxMLlyz4WNoxC6%2BJe7pA4omLbjzTIFptXiSbxh9r5zZqqVoItKFR7VMOjwFq%2FA52FbVIBd6qCUpnvbYH%2F1T6aS%2BwDStFlSmixkwaqvTH3mucbJWO7lAlw5mM0JR6aOrdpESpC05dYo1V8kac698GY%2BC1RdVtR7VGFCmUBDePJPDoOG%2FVc831350HZ%2BYBmocQXE9WIwzJFMKL5388GOqUB3Eez5vEymohE19RjX6VizCKCRMzxE2h0N5cTUyLPhGJt%2FTxtO9hPUltbCDuNrdb7xYHVSuqvTGpoc6Nn7RAR2kUvFEsjP8b7v1oRPw5XKQBGIU2bbM7Xr%2FPflfX9zkZstEBzHZedM%2FVAUSs84J8KsM4Fgb0ON2RNLxvOlBhCRs4PXGTCEIUKyu2E1N10SRswf%2B572ZuhtVrWpIEp2fJmNBOTL%2FVo&X-Amz-Signature=45a1e514e19ba83b737fa0046a9b5316f2b784ad2f604db615b8037c32f20782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q55XAUC%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSsOnlvfqy%2FAeyFzNAQmso7YGOpA%2BuA0TiMSRlJUJVIAiAqmWR36iZF3dPLcdaP%2F1Gxehn%2FEuoDkA1zn5enhRsJhSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMA0QnZ052IbdxLQ9DKtwDHQjtjDX%2Bjzg5ZPkRvqhQGjTIGlIOLakNYJIoQ6LpWhiiIfnocM2o1OQYlFiI%2BqODIf4l6S5my%2FVwB3invbSYho0iLjth37F2%2B9ZbIv68glqs1Cms1G7vmaypzRMcCZUPNaErAvogq8rJR89P6ZK1DOSuCDztBs3nYG62LieK4tmLo%2F5GsmkGfNaaUBxwH4INI22UDs3xjTK6JflsSNdZA6QgF5nqWzPNYBGAEX99W6mPdkwHvbwg77A3wewAWv9lVDTYvNn9R%2B8P%2F7ebVbeO%2BUA3VVHpn%2FX13pDxCtdXrbevXrrFRLjuaUritJg3YEggQW1lBWsW%2F0E6OwdZF6RXGsKUEmBBnSusum9TZF7sH6EqeAwsK5rXvLIfZJ88K6ZqKh7R6081q2YhRtag46WKUoHv9wYyQCFp1QKQrgOOCd1i5Ou420c90denYwbR0HLB1K9yLSETE21xZRhspWj52LBmc31mQTy%2F1%2FkEUJFrPobcUJBbGejRZNBfAOUdcuGNkRe7tMfRXku6uwIFa4Y%2FcI%2Bpf66lQ%2FXLc4IZ06hIwfu4uP3jj0zJa8CCZP6jzqmNwcx0l9PHNACq6oGSRSvP92kG07FiMUoCJT4GXMbJ7H1u2Nr2FQm6upYQzpAw8%2FbfzwY6pgGcK5B2kL3nFf8OlxJE6VHregRGE2vs5VEHv2DhZT%2FgCp2%2FIh%2B9kR3hKoXsCHDBE7gObXYHibRwUXHP1kroSPkDwcqMUd9xqkzv3stGnOZsbYHqTR7p0tDRcI%2FamSV8hIwPuhwE%2BE7Bvwj5So8qTDUeoOqzKaCrlD3KDRvfH8YEqSOX%2B34dmQoq4valTU%2BlmoWZcTA2%2BmX2vuQssZm4zQuqQNUxrQJe&X-Amz-Signature=e9c5ada2f56a4799b2a0149ecd04b066a16a5c067f002f8eb18463e4f49e9812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q55XAUC%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSsOnlvfqy%2FAeyFzNAQmso7YGOpA%2BuA0TiMSRlJUJVIAiAqmWR36iZF3dPLcdaP%2F1Gxehn%2FEuoDkA1zn5enhRsJhSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMA0QnZ052IbdxLQ9DKtwDHQjtjDX%2Bjzg5ZPkRvqhQGjTIGlIOLakNYJIoQ6LpWhiiIfnocM2o1OQYlFiI%2BqODIf4l6S5my%2FVwB3invbSYho0iLjth37F2%2B9ZbIv68glqs1Cms1G7vmaypzRMcCZUPNaErAvogq8rJR89P6ZK1DOSuCDztBs3nYG62LieK4tmLo%2F5GsmkGfNaaUBxwH4INI22UDs3xjTK6JflsSNdZA6QgF5nqWzPNYBGAEX99W6mPdkwHvbwg77A3wewAWv9lVDTYvNn9R%2B8P%2F7ebVbeO%2BUA3VVHpn%2FX13pDxCtdXrbevXrrFRLjuaUritJg3YEggQW1lBWsW%2F0E6OwdZF6RXGsKUEmBBnSusum9TZF7sH6EqeAwsK5rXvLIfZJ88K6ZqKh7R6081q2YhRtag46WKUoHv9wYyQCFp1QKQrgOOCd1i5Ou420c90denYwbR0HLB1K9yLSETE21xZRhspWj52LBmc31mQTy%2F1%2FkEUJFrPobcUJBbGejRZNBfAOUdcuGNkRe7tMfRXku6uwIFa4Y%2FcI%2Bpf66lQ%2FXLc4IZ06hIwfu4uP3jj0zJa8CCZP6jzqmNwcx0l9PHNACq6oGSRSvP92kG07FiMUoCJT4GXMbJ7H1u2Nr2FQm6upYQzpAw8%2FbfzwY6pgGcK5B2kL3nFf8OlxJE6VHregRGE2vs5VEHv2DhZT%2FgCp2%2FIh%2B9kR3hKoXsCHDBE7gObXYHibRwUXHP1kroSPkDwcqMUd9xqkzv3stGnOZsbYHqTR7p0tDRcI%2FamSV8hIwPuhwE%2BE7Bvwj5So8qTDUeoOqzKaCrlD3KDRvfH8YEqSOX%2B34dmQoq4valTU%2BlmoWZcTA2%2BmX2vuQssZm4zQuqQNUxrQJe&X-Amz-Signature=a8548f647f0e1f60c1b7165551842712b8a408c9bb87f5c78d4e93d5c886002b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q55XAUC%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSsOnlvfqy%2FAeyFzNAQmso7YGOpA%2BuA0TiMSRlJUJVIAiAqmWR36iZF3dPLcdaP%2F1Gxehn%2FEuoDkA1zn5enhRsJhSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMA0QnZ052IbdxLQ9DKtwDHQjtjDX%2Bjzg5ZPkRvqhQGjTIGlIOLakNYJIoQ6LpWhiiIfnocM2o1OQYlFiI%2BqODIf4l6S5my%2FVwB3invbSYho0iLjth37F2%2B9ZbIv68glqs1Cms1G7vmaypzRMcCZUPNaErAvogq8rJR89P6ZK1DOSuCDztBs3nYG62LieK4tmLo%2F5GsmkGfNaaUBxwH4INI22UDs3xjTK6JflsSNdZA6QgF5nqWzPNYBGAEX99W6mPdkwHvbwg77A3wewAWv9lVDTYvNn9R%2B8P%2F7ebVbeO%2BUA3VVHpn%2FX13pDxCtdXrbevXrrFRLjuaUritJg3YEggQW1lBWsW%2F0E6OwdZF6RXGsKUEmBBnSusum9TZF7sH6EqeAwsK5rXvLIfZJ88K6ZqKh7R6081q2YhRtag46WKUoHv9wYyQCFp1QKQrgOOCd1i5Ou420c90denYwbR0HLB1K9yLSETE21xZRhspWj52LBmc31mQTy%2F1%2FkEUJFrPobcUJBbGejRZNBfAOUdcuGNkRe7tMfRXku6uwIFa4Y%2FcI%2Bpf66lQ%2FXLc4IZ06hIwfu4uP3jj0zJa8CCZP6jzqmNwcx0l9PHNACq6oGSRSvP92kG07FiMUoCJT4GXMbJ7H1u2Nr2FQm6upYQzpAw8%2FbfzwY6pgGcK5B2kL3nFf8OlxJE6VHregRGE2vs5VEHv2DhZT%2FgCp2%2FIh%2B9kR3hKoXsCHDBE7gObXYHibRwUXHP1kroSPkDwcqMUd9xqkzv3stGnOZsbYHqTR7p0tDRcI%2FamSV8hIwPuhwE%2BE7Bvwj5So8qTDUeoOqzKaCrlD3KDRvfH8YEqSOX%2B34dmQoq4valTU%2BlmoWZcTA2%2BmX2vuQssZm4zQuqQNUxrQJe&X-Amz-Signature=bd1d014378425e5ea0091eaf46ae67a319b2563716e1efeb2dfded7718e4efa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q55XAUC%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSsOnlvfqy%2FAeyFzNAQmso7YGOpA%2BuA0TiMSRlJUJVIAiAqmWR36iZF3dPLcdaP%2F1Gxehn%2FEuoDkA1zn5enhRsJhSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMA0QnZ052IbdxLQ9DKtwDHQjtjDX%2Bjzg5ZPkRvqhQGjTIGlIOLakNYJIoQ6LpWhiiIfnocM2o1OQYlFiI%2BqODIf4l6S5my%2FVwB3invbSYho0iLjth37F2%2B9ZbIv68glqs1Cms1G7vmaypzRMcCZUPNaErAvogq8rJR89P6ZK1DOSuCDztBs3nYG62LieK4tmLo%2F5GsmkGfNaaUBxwH4INI22UDs3xjTK6JflsSNdZA6QgF5nqWzPNYBGAEX99W6mPdkwHvbwg77A3wewAWv9lVDTYvNn9R%2B8P%2F7ebVbeO%2BUA3VVHpn%2FX13pDxCtdXrbevXrrFRLjuaUritJg3YEggQW1lBWsW%2F0E6OwdZF6RXGsKUEmBBnSusum9TZF7sH6EqeAwsK5rXvLIfZJ88K6ZqKh7R6081q2YhRtag46WKUoHv9wYyQCFp1QKQrgOOCd1i5Ou420c90denYwbR0HLB1K9yLSETE21xZRhspWj52LBmc31mQTy%2F1%2FkEUJFrPobcUJBbGejRZNBfAOUdcuGNkRe7tMfRXku6uwIFa4Y%2FcI%2Bpf66lQ%2FXLc4IZ06hIwfu4uP3jj0zJa8CCZP6jzqmNwcx0l9PHNACq6oGSRSvP92kG07FiMUoCJT4GXMbJ7H1u2Nr2FQm6upYQzpAw8%2FbfzwY6pgGcK5B2kL3nFf8OlxJE6VHregRGE2vs5VEHv2DhZT%2FgCp2%2FIh%2B9kR3hKoXsCHDBE7gObXYHibRwUXHP1kroSPkDwcqMUd9xqkzv3stGnOZsbYHqTR7p0tDRcI%2FamSV8hIwPuhwE%2BE7Bvwj5So8qTDUeoOqzKaCrlD3KDRvfH8YEqSOX%2B34dmQoq4valTU%2BlmoWZcTA2%2BmX2vuQssZm4zQuqQNUxrQJe&X-Amz-Signature=b10693c6fd1ed4bb65d0609293dc2aabcf7444e59539e33c176cf96141a315ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q55XAUC%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSsOnlvfqy%2FAeyFzNAQmso7YGOpA%2BuA0TiMSRlJUJVIAiAqmWR36iZF3dPLcdaP%2F1Gxehn%2FEuoDkA1zn5enhRsJhSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMA0QnZ052IbdxLQ9DKtwDHQjtjDX%2Bjzg5ZPkRvqhQGjTIGlIOLakNYJIoQ6LpWhiiIfnocM2o1OQYlFiI%2BqODIf4l6S5my%2FVwB3invbSYho0iLjth37F2%2B9ZbIv68glqs1Cms1G7vmaypzRMcCZUPNaErAvogq8rJR89P6ZK1DOSuCDztBs3nYG62LieK4tmLo%2F5GsmkGfNaaUBxwH4INI22UDs3xjTK6JflsSNdZA6QgF5nqWzPNYBGAEX99W6mPdkwHvbwg77A3wewAWv9lVDTYvNn9R%2B8P%2F7ebVbeO%2BUA3VVHpn%2FX13pDxCtdXrbevXrrFRLjuaUritJg3YEggQW1lBWsW%2F0E6OwdZF6RXGsKUEmBBnSusum9TZF7sH6EqeAwsK5rXvLIfZJ88K6ZqKh7R6081q2YhRtag46WKUoHv9wYyQCFp1QKQrgOOCd1i5Ou420c90denYwbR0HLB1K9yLSETE21xZRhspWj52LBmc31mQTy%2F1%2FkEUJFrPobcUJBbGejRZNBfAOUdcuGNkRe7tMfRXku6uwIFa4Y%2FcI%2Bpf66lQ%2FXLc4IZ06hIwfu4uP3jj0zJa8CCZP6jzqmNwcx0l9PHNACq6oGSRSvP92kG07FiMUoCJT4GXMbJ7H1u2Nr2FQm6upYQzpAw8%2FbfzwY6pgGcK5B2kL3nFf8OlxJE6VHregRGE2vs5VEHv2DhZT%2FgCp2%2FIh%2B9kR3hKoXsCHDBE7gObXYHibRwUXHP1kroSPkDwcqMUd9xqkzv3stGnOZsbYHqTR7p0tDRcI%2FamSV8hIwPuhwE%2BE7Bvwj5So8qTDUeoOqzKaCrlD3KDRvfH8YEqSOX%2B34dmQoq4valTU%2BlmoWZcTA2%2BmX2vuQssZm4zQuqQNUxrQJe&X-Amz-Signature=4c1bfa43c2cb9a606fb227ee44f43d532e79e2cf2fb86e74ab750de92b685807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q55XAUC%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGSsOnlvfqy%2FAeyFzNAQmso7YGOpA%2BuA0TiMSRlJUJVIAiAqmWR36iZF3dPLcdaP%2F1Gxehn%2FEuoDkA1zn5enhRsJhSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMA0QnZ052IbdxLQ9DKtwDHQjtjDX%2Bjzg5ZPkRvqhQGjTIGlIOLakNYJIoQ6LpWhiiIfnocM2o1OQYlFiI%2BqODIf4l6S5my%2FVwB3invbSYho0iLjth37F2%2B9ZbIv68glqs1Cms1G7vmaypzRMcCZUPNaErAvogq8rJR89P6ZK1DOSuCDztBs3nYG62LieK4tmLo%2F5GsmkGfNaaUBxwH4INI22UDs3xjTK6JflsSNdZA6QgF5nqWzPNYBGAEX99W6mPdkwHvbwg77A3wewAWv9lVDTYvNn9R%2B8P%2F7ebVbeO%2BUA3VVHpn%2FX13pDxCtdXrbevXrrFRLjuaUritJg3YEggQW1lBWsW%2F0E6OwdZF6RXGsKUEmBBnSusum9TZF7sH6EqeAwsK5rXvLIfZJ88K6ZqKh7R6081q2YhRtag46WKUoHv9wYyQCFp1QKQrgOOCd1i5Ou420c90denYwbR0HLB1K9yLSETE21xZRhspWj52LBmc31mQTy%2F1%2FkEUJFrPobcUJBbGejRZNBfAOUdcuGNkRe7tMfRXku6uwIFa4Y%2FcI%2Bpf66lQ%2FXLc4IZ06hIwfu4uP3jj0zJa8CCZP6jzqmNwcx0l9PHNACq6oGSRSvP92kG07FiMUoCJT4GXMbJ7H1u2Nr2FQm6upYQzpAw8%2FbfzwY6pgGcK5B2kL3nFf8OlxJE6VHregRGE2vs5VEHv2DhZT%2FgCp2%2FIh%2B9kR3hKoXsCHDBE7gObXYHibRwUXHP1kroSPkDwcqMUd9xqkzv3stGnOZsbYHqTR7p0tDRcI%2FamSV8hIwPuhwE%2BE7Bvwj5So8qTDUeoOqzKaCrlD3KDRvfH8YEqSOX%2B34dmQoq4valTU%2BlmoWZcTA2%2BmX2vuQssZm4zQuqQNUxrQJe&X-Amz-Signature=f0d11b798d4eec4ec3075498b6fdd6cf0b65af2d700d3b0a45fc5dc7b0969909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


