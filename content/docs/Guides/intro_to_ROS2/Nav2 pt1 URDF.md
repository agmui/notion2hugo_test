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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627VE3CGS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnvwn9ZE3MxEQkoZaAU6%2FODfLdLlITyZInB3thzAXcIAiEA4E04NXPfuz5rQEh2ZpzSDID1VYKTWFu%2FAB0cqBExCakqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4JuyTgpYQL7gHljircA8yNhTEU3xT9uG1tBaKI3Ii1ioIzPdy3Y4FILuIp7sikHMvvn6G8%2FtHZpqA0qbyyWQjgE9rSaM97CN95Nc1hdLh8sM0HyBoe0aqY9K5iiVOq8P0d9nnjz%2BBX24Ff0nG%2FWlfaTaMy1ihWNDg%2BmlC9XSortXu8ick24o6uCmWXW0LsSrW9g0IoCdCt3vYws0%2FeKZkJWiX%2BJGkuqSaXntjmDcuVY9Oup2nDGtQLAb4aWNwdEODsyeXFz32sqOVqPPnVDQPJuNdqs1Jq%2BgBu%2BoPUpCwQkO%2B%2B0XUcFkCahdIrhpX5drvGpp%2B8hC%2FMZqWdy6rYEk8zVp%2FVXB83%2BiTIBLnnDDHwvEXRrhfLL%2FLoZkVSDXHy2YPAFRrQAnJJaAegVu65M%2Fqv4n51HXPF1GQ2lsjyQ4fXVDznY7mybcbmUFHgRidyXW3enz5i2UrWwEdvMuqXebzFGcgyybSM%2FKGcsslWUpVA%2Bmu4QUiKBww3scNlREHIHHPYDH66PxqpZgZL9yiQkMQg5swvXpJYv6vQO8VlOje3Su8SxAKNBJB7Cak%2FfRYmF3PL%2Bqx5cfKl1b5OsdJ79waLS1Ru4kB5dV7y91FJzgsyyJeDznUZSn8ORQhYdQodjJW6OrEuHpiRi0WRMN%2FV5MQGOqUBleDBt%2Bp0%2FArzQy%2BWKujegPRXA%2FdsYYVeHwv2EFbo2C16k20HzprIPS0unavbRhzLHimHt0o4ks8GsSAOAp%2BIf%2FB76zKQP5EMsDh2tRr3P7LAdKHpJkOOKAA%2F%2B7mCfq%2FFu8t7MYwpbB7qJKAJqASi40NsjBQ5rP6nWpJMqKOt3fUkZjt9aw73%2F6qo2rn7br0YZQqLXYBpWoAbZnFYgPiwfolDWz5f&X-Amz-Signature=9438ca510c106818a2f8b218cde28a0f09ef5c5960d972d2a69e8046cbb552a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627VE3CGS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnvwn9ZE3MxEQkoZaAU6%2FODfLdLlITyZInB3thzAXcIAiEA4E04NXPfuz5rQEh2ZpzSDID1VYKTWFu%2FAB0cqBExCakqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4JuyTgpYQL7gHljircA8yNhTEU3xT9uG1tBaKI3Ii1ioIzPdy3Y4FILuIp7sikHMvvn6G8%2FtHZpqA0qbyyWQjgE9rSaM97CN95Nc1hdLh8sM0HyBoe0aqY9K5iiVOq8P0d9nnjz%2BBX24Ff0nG%2FWlfaTaMy1ihWNDg%2BmlC9XSortXu8ick24o6uCmWXW0LsSrW9g0IoCdCt3vYws0%2FeKZkJWiX%2BJGkuqSaXntjmDcuVY9Oup2nDGtQLAb4aWNwdEODsyeXFz32sqOVqPPnVDQPJuNdqs1Jq%2BgBu%2BoPUpCwQkO%2B%2B0XUcFkCahdIrhpX5drvGpp%2B8hC%2FMZqWdy6rYEk8zVp%2FVXB83%2BiTIBLnnDDHwvEXRrhfLL%2FLoZkVSDXHy2YPAFRrQAnJJaAegVu65M%2Fqv4n51HXPF1GQ2lsjyQ4fXVDznY7mybcbmUFHgRidyXW3enz5i2UrWwEdvMuqXebzFGcgyybSM%2FKGcsslWUpVA%2Bmu4QUiKBww3scNlREHIHHPYDH66PxqpZgZL9yiQkMQg5swvXpJYv6vQO8VlOje3Su8SxAKNBJB7Cak%2FfRYmF3PL%2Bqx5cfKl1b5OsdJ79waLS1Ru4kB5dV7y91FJzgsyyJeDznUZSn8ORQhYdQodjJW6OrEuHpiRi0WRMN%2FV5MQGOqUBleDBt%2Bp0%2FArzQy%2BWKujegPRXA%2FdsYYVeHwv2EFbo2C16k20HzprIPS0unavbRhzLHimHt0o4ks8GsSAOAp%2BIf%2FB76zKQP5EMsDh2tRr3P7LAdKHpJkOOKAA%2F%2B7mCfq%2FFu8t7MYwpbB7qJKAJqASi40NsjBQ5rP6nWpJMqKOt3fUkZjt9aw73%2F6qo2rn7br0YZQqLXYBpWoAbZnFYgPiwfolDWz5f&X-Amz-Signature=7e171f70063a512c00dce6d4de0ce1c9578c62cd69166c83289895e17d55d14d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627VE3CGS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnvwn9ZE3MxEQkoZaAU6%2FODfLdLlITyZInB3thzAXcIAiEA4E04NXPfuz5rQEh2ZpzSDID1VYKTWFu%2FAB0cqBExCakqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4JuyTgpYQL7gHljircA8yNhTEU3xT9uG1tBaKI3Ii1ioIzPdy3Y4FILuIp7sikHMvvn6G8%2FtHZpqA0qbyyWQjgE9rSaM97CN95Nc1hdLh8sM0HyBoe0aqY9K5iiVOq8P0d9nnjz%2BBX24Ff0nG%2FWlfaTaMy1ihWNDg%2BmlC9XSortXu8ick24o6uCmWXW0LsSrW9g0IoCdCt3vYws0%2FeKZkJWiX%2BJGkuqSaXntjmDcuVY9Oup2nDGtQLAb4aWNwdEODsyeXFz32sqOVqPPnVDQPJuNdqs1Jq%2BgBu%2BoPUpCwQkO%2B%2B0XUcFkCahdIrhpX5drvGpp%2B8hC%2FMZqWdy6rYEk8zVp%2FVXB83%2BiTIBLnnDDHwvEXRrhfLL%2FLoZkVSDXHy2YPAFRrQAnJJaAegVu65M%2Fqv4n51HXPF1GQ2lsjyQ4fXVDznY7mybcbmUFHgRidyXW3enz5i2UrWwEdvMuqXebzFGcgyybSM%2FKGcsslWUpVA%2Bmu4QUiKBww3scNlREHIHHPYDH66PxqpZgZL9yiQkMQg5swvXpJYv6vQO8VlOje3Su8SxAKNBJB7Cak%2FfRYmF3PL%2Bqx5cfKl1b5OsdJ79waLS1Ru4kB5dV7y91FJzgsyyJeDznUZSn8ORQhYdQodjJW6OrEuHpiRi0WRMN%2FV5MQGOqUBleDBt%2Bp0%2FArzQy%2BWKujegPRXA%2FdsYYVeHwv2EFbo2C16k20HzprIPS0unavbRhzLHimHt0o4ks8GsSAOAp%2BIf%2FB76zKQP5EMsDh2tRr3P7LAdKHpJkOOKAA%2F%2B7mCfq%2FFu8t7MYwpbB7qJKAJqASi40NsjBQ5rP6nWpJMqKOt3fUkZjt9aw73%2F6qo2rn7br0YZQqLXYBpWoAbZnFYgPiwfolDWz5f&X-Amz-Signature=985e98d9d4b9fff4fa54e20ad09c75ea966d5d4c98887e3d12beb2fe8f189ea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627VE3CGS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnvwn9ZE3MxEQkoZaAU6%2FODfLdLlITyZInB3thzAXcIAiEA4E04NXPfuz5rQEh2ZpzSDID1VYKTWFu%2FAB0cqBExCakqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4JuyTgpYQL7gHljircA8yNhTEU3xT9uG1tBaKI3Ii1ioIzPdy3Y4FILuIp7sikHMvvn6G8%2FtHZpqA0qbyyWQjgE9rSaM97CN95Nc1hdLh8sM0HyBoe0aqY9K5iiVOq8P0d9nnjz%2BBX24Ff0nG%2FWlfaTaMy1ihWNDg%2BmlC9XSortXu8ick24o6uCmWXW0LsSrW9g0IoCdCt3vYws0%2FeKZkJWiX%2BJGkuqSaXntjmDcuVY9Oup2nDGtQLAb4aWNwdEODsyeXFz32sqOVqPPnVDQPJuNdqs1Jq%2BgBu%2BoPUpCwQkO%2B%2B0XUcFkCahdIrhpX5drvGpp%2B8hC%2FMZqWdy6rYEk8zVp%2FVXB83%2BiTIBLnnDDHwvEXRrhfLL%2FLoZkVSDXHy2YPAFRrQAnJJaAegVu65M%2Fqv4n51HXPF1GQ2lsjyQ4fXVDznY7mybcbmUFHgRidyXW3enz5i2UrWwEdvMuqXebzFGcgyybSM%2FKGcsslWUpVA%2Bmu4QUiKBww3scNlREHIHHPYDH66PxqpZgZL9yiQkMQg5swvXpJYv6vQO8VlOje3Su8SxAKNBJB7Cak%2FfRYmF3PL%2Bqx5cfKl1b5OsdJ79waLS1Ru4kB5dV7y91FJzgsyyJeDznUZSn8ORQhYdQodjJW6OrEuHpiRi0WRMN%2FV5MQGOqUBleDBt%2Bp0%2FArzQy%2BWKujegPRXA%2FdsYYVeHwv2EFbo2C16k20HzprIPS0unavbRhzLHimHt0o4ks8GsSAOAp%2BIf%2FB76zKQP5EMsDh2tRr3P7LAdKHpJkOOKAA%2F%2B7mCfq%2FFu8t7MYwpbB7qJKAJqASi40NsjBQ5rP6nWpJMqKOt3fUkZjt9aw73%2F6qo2rn7br0YZQqLXYBpWoAbZnFYgPiwfolDWz5f&X-Amz-Signature=c948bb335d443407651956ce56d0ad87018b4a60a4f60dc207997f20b511498f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627VE3CGS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnvwn9ZE3MxEQkoZaAU6%2FODfLdLlITyZInB3thzAXcIAiEA4E04NXPfuz5rQEh2ZpzSDID1VYKTWFu%2FAB0cqBExCakqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4JuyTgpYQL7gHljircA8yNhTEU3xT9uG1tBaKI3Ii1ioIzPdy3Y4FILuIp7sikHMvvn6G8%2FtHZpqA0qbyyWQjgE9rSaM97CN95Nc1hdLh8sM0HyBoe0aqY9K5iiVOq8P0d9nnjz%2BBX24Ff0nG%2FWlfaTaMy1ihWNDg%2BmlC9XSortXu8ick24o6uCmWXW0LsSrW9g0IoCdCt3vYws0%2FeKZkJWiX%2BJGkuqSaXntjmDcuVY9Oup2nDGtQLAb4aWNwdEODsyeXFz32sqOVqPPnVDQPJuNdqs1Jq%2BgBu%2BoPUpCwQkO%2B%2B0XUcFkCahdIrhpX5drvGpp%2B8hC%2FMZqWdy6rYEk8zVp%2FVXB83%2BiTIBLnnDDHwvEXRrhfLL%2FLoZkVSDXHy2YPAFRrQAnJJaAegVu65M%2Fqv4n51HXPF1GQ2lsjyQ4fXVDznY7mybcbmUFHgRidyXW3enz5i2UrWwEdvMuqXebzFGcgyybSM%2FKGcsslWUpVA%2Bmu4QUiKBww3scNlREHIHHPYDH66PxqpZgZL9yiQkMQg5swvXpJYv6vQO8VlOje3Su8SxAKNBJB7Cak%2FfRYmF3PL%2Bqx5cfKl1b5OsdJ79waLS1Ru4kB5dV7y91FJzgsyyJeDznUZSn8ORQhYdQodjJW6OrEuHpiRi0WRMN%2FV5MQGOqUBleDBt%2Bp0%2FArzQy%2BWKujegPRXA%2FdsYYVeHwv2EFbo2C16k20HzprIPS0unavbRhzLHimHt0o4ks8GsSAOAp%2BIf%2FB76zKQP5EMsDh2tRr3P7LAdKHpJkOOKAA%2F%2B7mCfq%2FFu8t7MYwpbB7qJKAJqASi40NsjBQ5rP6nWpJMqKOt3fUkZjt9aw73%2F6qo2rn7br0YZQqLXYBpWoAbZnFYgPiwfolDWz5f&X-Amz-Signature=2d4b99842b901c925d0867839474ad7581292f0b70b84359f7991bcf8eaec74e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627VE3CGS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnvwn9ZE3MxEQkoZaAU6%2FODfLdLlITyZInB3thzAXcIAiEA4E04NXPfuz5rQEh2ZpzSDID1VYKTWFu%2FAB0cqBExCakqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4JuyTgpYQL7gHljircA8yNhTEU3xT9uG1tBaKI3Ii1ioIzPdy3Y4FILuIp7sikHMvvn6G8%2FtHZpqA0qbyyWQjgE9rSaM97CN95Nc1hdLh8sM0HyBoe0aqY9K5iiVOq8P0d9nnjz%2BBX24Ff0nG%2FWlfaTaMy1ihWNDg%2BmlC9XSortXu8ick24o6uCmWXW0LsSrW9g0IoCdCt3vYws0%2FeKZkJWiX%2BJGkuqSaXntjmDcuVY9Oup2nDGtQLAb4aWNwdEODsyeXFz32sqOVqPPnVDQPJuNdqs1Jq%2BgBu%2BoPUpCwQkO%2B%2B0XUcFkCahdIrhpX5drvGpp%2B8hC%2FMZqWdy6rYEk8zVp%2FVXB83%2BiTIBLnnDDHwvEXRrhfLL%2FLoZkVSDXHy2YPAFRrQAnJJaAegVu65M%2Fqv4n51HXPF1GQ2lsjyQ4fXVDznY7mybcbmUFHgRidyXW3enz5i2UrWwEdvMuqXebzFGcgyybSM%2FKGcsslWUpVA%2Bmu4QUiKBww3scNlREHIHHPYDH66PxqpZgZL9yiQkMQg5swvXpJYv6vQO8VlOje3Su8SxAKNBJB7Cak%2FfRYmF3PL%2Bqx5cfKl1b5OsdJ79waLS1Ru4kB5dV7y91FJzgsyyJeDznUZSn8ORQhYdQodjJW6OrEuHpiRi0WRMN%2FV5MQGOqUBleDBt%2Bp0%2FArzQy%2BWKujegPRXA%2FdsYYVeHwv2EFbo2C16k20HzprIPS0unavbRhzLHimHt0o4ks8GsSAOAp%2BIf%2FB76zKQP5EMsDh2tRr3P7LAdKHpJkOOKAA%2F%2B7mCfq%2FFu8t7MYwpbB7qJKAJqASi40NsjBQ5rP6nWpJMqKOt3fUkZjt9aw73%2F6qo2rn7br0YZQqLXYBpWoAbZnFYgPiwfolDWz5f&X-Amz-Signature=2bbfc02d5a2284660272ed6ad310dd6c41ae63a6f0864411e3881c2214724517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627VE3CGS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnvwn9ZE3MxEQkoZaAU6%2FODfLdLlITyZInB3thzAXcIAiEA4E04NXPfuz5rQEh2ZpzSDID1VYKTWFu%2FAB0cqBExCakqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4JuyTgpYQL7gHljircA8yNhTEU3xT9uG1tBaKI3Ii1ioIzPdy3Y4FILuIp7sikHMvvn6G8%2FtHZpqA0qbyyWQjgE9rSaM97CN95Nc1hdLh8sM0HyBoe0aqY9K5iiVOq8P0d9nnjz%2BBX24Ff0nG%2FWlfaTaMy1ihWNDg%2BmlC9XSortXu8ick24o6uCmWXW0LsSrW9g0IoCdCt3vYws0%2FeKZkJWiX%2BJGkuqSaXntjmDcuVY9Oup2nDGtQLAb4aWNwdEODsyeXFz32sqOVqPPnVDQPJuNdqs1Jq%2BgBu%2BoPUpCwQkO%2B%2B0XUcFkCahdIrhpX5drvGpp%2B8hC%2FMZqWdy6rYEk8zVp%2FVXB83%2BiTIBLnnDDHwvEXRrhfLL%2FLoZkVSDXHy2YPAFRrQAnJJaAegVu65M%2Fqv4n51HXPF1GQ2lsjyQ4fXVDznY7mybcbmUFHgRidyXW3enz5i2UrWwEdvMuqXebzFGcgyybSM%2FKGcsslWUpVA%2Bmu4QUiKBww3scNlREHIHHPYDH66PxqpZgZL9yiQkMQg5swvXpJYv6vQO8VlOje3Su8SxAKNBJB7Cak%2FfRYmF3PL%2Bqx5cfKl1b5OsdJ79waLS1Ru4kB5dV7y91FJzgsyyJeDznUZSn8ORQhYdQodjJW6OrEuHpiRi0WRMN%2FV5MQGOqUBleDBt%2Bp0%2FArzQy%2BWKujegPRXA%2FdsYYVeHwv2EFbo2C16k20HzprIPS0unavbRhzLHimHt0o4ks8GsSAOAp%2BIf%2FB76zKQP5EMsDh2tRr3P7LAdKHpJkOOKAA%2F%2B7mCfq%2FFu8t7MYwpbB7qJKAJqASi40NsjBQ5rP6nWpJMqKOt3fUkZjt9aw73%2F6qo2rn7br0YZQqLXYBpWoAbZnFYgPiwfolDWz5f&X-Amz-Signature=8cf2b2d259a1883215a6d9c0ecb01696e3b6147bbf82c68a0c39e3cf2d8ea65e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627VE3CGS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnvwn9ZE3MxEQkoZaAU6%2FODfLdLlITyZInB3thzAXcIAiEA4E04NXPfuz5rQEh2ZpzSDID1VYKTWFu%2FAB0cqBExCakqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4JuyTgpYQL7gHljircA8yNhTEU3xT9uG1tBaKI3Ii1ioIzPdy3Y4FILuIp7sikHMvvn6G8%2FtHZpqA0qbyyWQjgE9rSaM97CN95Nc1hdLh8sM0HyBoe0aqY9K5iiVOq8P0d9nnjz%2BBX24Ff0nG%2FWlfaTaMy1ihWNDg%2BmlC9XSortXu8ick24o6uCmWXW0LsSrW9g0IoCdCt3vYws0%2FeKZkJWiX%2BJGkuqSaXntjmDcuVY9Oup2nDGtQLAb4aWNwdEODsyeXFz32sqOVqPPnVDQPJuNdqs1Jq%2BgBu%2BoPUpCwQkO%2B%2B0XUcFkCahdIrhpX5drvGpp%2B8hC%2FMZqWdy6rYEk8zVp%2FVXB83%2BiTIBLnnDDHwvEXRrhfLL%2FLoZkVSDXHy2YPAFRrQAnJJaAegVu65M%2Fqv4n51HXPF1GQ2lsjyQ4fXVDznY7mybcbmUFHgRidyXW3enz5i2UrWwEdvMuqXebzFGcgyybSM%2FKGcsslWUpVA%2Bmu4QUiKBww3scNlREHIHHPYDH66PxqpZgZL9yiQkMQg5swvXpJYv6vQO8VlOje3Su8SxAKNBJB7Cak%2FfRYmF3PL%2Bqx5cfKl1b5OsdJ79waLS1Ru4kB5dV7y91FJzgsyyJeDznUZSn8ORQhYdQodjJW6OrEuHpiRi0WRMN%2FV5MQGOqUBleDBt%2Bp0%2FArzQy%2BWKujegPRXA%2FdsYYVeHwv2EFbo2C16k20HzprIPS0unavbRhzLHimHt0o4ks8GsSAOAp%2BIf%2FB76zKQP5EMsDh2tRr3P7LAdKHpJkOOKAA%2F%2B7mCfq%2FFu8t7MYwpbB7qJKAJqASi40NsjBQ5rP6nWpJMqKOt3fUkZjt9aw73%2F6qo2rn7br0YZQqLXYBpWoAbZnFYgPiwfolDWz5f&X-Amz-Signature=651b01d58a1f06c7425be1bd5d6ce3eda1c780b4ab71718edf19831bed711969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627VE3CGS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnvwn9ZE3MxEQkoZaAU6%2FODfLdLlITyZInB3thzAXcIAiEA4E04NXPfuz5rQEh2ZpzSDID1VYKTWFu%2FAB0cqBExCakqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4JuyTgpYQL7gHljircA8yNhTEU3xT9uG1tBaKI3Ii1ioIzPdy3Y4FILuIp7sikHMvvn6G8%2FtHZpqA0qbyyWQjgE9rSaM97CN95Nc1hdLh8sM0HyBoe0aqY9K5iiVOq8P0d9nnjz%2BBX24Ff0nG%2FWlfaTaMy1ihWNDg%2BmlC9XSortXu8ick24o6uCmWXW0LsSrW9g0IoCdCt3vYws0%2FeKZkJWiX%2BJGkuqSaXntjmDcuVY9Oup2nDGtQLAb4aWNwdEODsyeXFz32sqOVqPPnVDQPJuNdqs1Jq%2BgBu%2BoPUpCwQkO%2B%2B0XUcFkCahdIrhpX5drvGpp%2B8hC%2FMZqWdy6rYEk8zVp%2FVXB83%2BiTIBLnnDDHwvEXRrhfLL%2FLoZkVSDXHy2YPAFRrQAnJJaAegVu65M%2Fqv4n51HXPF1GQ2lsjyQ4fXVDznY7mybcbmUFHgRidyXW3enz5i2UrWwEdvMuqXebzFGcgyybSM%2FKGcsslWUpVA%2Bmu4QUiKBww3scNlREHIHHPYDH66PxqpZgZL9yiQkMQg5swvXpJYv6vQO8VlOje3Su8SxAKNBJB7Cak%2FfRYmF3PL%2Bqx5cfKl1b5OsdJ79waLS1Ru4kB5dV7y91FJzgsyyJeDznUZSn8ORQhYdQodjJW6OrEuHpiRi0WRMN%2FV5MQGOqUBleDBt%2Bp0%2FArzQy%2BWKujegPRXA%2FdsYYVeHwv2EFbo2C16k20HzprIPS0unavbRhzLHimHt0o4ks8GsSAOAp%2BIf%2FB76zKQP5EMsDh2tRr3P7LAdKHpJkOOKAA%2F%2B7mCfq%2FFu8t7MYwpbB7qJKAJqASi40NsjBQ5rP6nWpJMqKOt3fUkZjt9aw73%2F6qo2rn7br0YZQqLXYBpWoAbZnFYgPiwfolDWz5f&X-Amz-Signature=264d268b15a465ac3be43bb96513db8d7aa7cb9fa17bc6ff0658ff7032da0165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627VE3CGS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnvwn9ZE3MxEQkoZaAU6%2FODfLdLlITyZInB3thzAXcIAiEA4E04NXPfuz5rQEh2ZpzSDID1VYKTWFu%2FAB0cqBExCakqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4JuyTgpYQL7gHljircA8yNhTEU3xT9uG1tBaKI3Ii1ioIzPdy3Y4FILuIp7sikHMvvn6G8%2FtHZpqA0qbyyWQjgE9rSaM97CN95Nc1hdLh8sM0HyBoe0aqY9K5iiVOq8P0d9nnjz%2BBX24Ff0nG%2FWlfaTaMy1ihWNDg%2BmlC9XSortXu8ick24o6uCmWXW0LsSrW9g0IoCdCt3vYws0%2FeKZkJWiX%2BJGkuqSaXntjmDcuVY9Oup2nDGtQLAb4aWNwdEODsyeXFz32sqOVqPPnVDQPJuNdqs1Jq%2BgBu%2BoPUpCwQkO%2B%2B0XUcFkCahdIrhpX5drvGpp%2B8hC%2FMZqWdy6rYEk8zVp%2FVXB83%2BiTIBLnnDDHwvEXRrhfLL%2FLoZkVSDXHy2YPAFRrQAnJJaAegVu65M%2Fqv4n51HXPF1GQ2lsjyQ4fXVDznY7mybcbmUFHgRidyXW3enz5i2UrWwEdvMuqXebzFGcgyybSM%2FKGcsslWUpVA%2Bmu4QUiKBww3scNlREHIHHPYDH66PxqpZgZL9yiQkMQg5swvXpJYv6vQO8VlOje3Su8SxAKNBJB7Cak%2FfRYmF3PL%2Bqx5cfKl1b5OsdJ79waLS1Ru4kB5dV7y91FJzgsyyJeDznUZSn8ORQhYdQodjJW6OrEuHpiRi0WRMN%2FV5MQGOqUBleDBt%2Bp0%2FArzQy%2BWKujegPRXA%2FdsYYVeHwv2EFbo2C16k20HzprIPS0unavbRhzLHimHt0o4ks8GsSAOAp%2BIf%2FB76zKQP5EMsDh2tRr3P7LAdKHpJkOOKAA%2F%2B7mCfq%2FFu8t7MYwpbB7qJKAJqASi40NsjBQ5rP6nWpJMqKOt3fUkZjt9aw73%2F6qo2rn7br0YZQqLXYBpWoAbZnFYgPiwfolDWz5f&X-Amz-Signature=937ed824a32479eb55c09cd1b29dab3af9ed29e7014d15766fe8d3aff84eaf97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDLUG4NK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcbHmUCnd0Q5KVaU0qL9HexxkDO37l%2BoDJobCKpsahdAiBFX%2B8PUyZ5KRGAHBQANfi3yKxOTHJBrx%2BopFtSa3%2FytiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbSTsNczKlKWvNRMXKtwD%2FivppnWsJISC0RyqiA5C2406PzTjlI96tawysOg%2BF1Odm7huUS7JUmVYXvFhu3yi%2FlI39D5zaGSmj3cFf3xutTCUd9P5l7Y0stWURLoDntow0dbVEj9aOoE%2Fu1dRReZg7lWhDXClfGrK4hSAXg39f0XWAGxSVbdPSd7r6GWnRcB7XgYK54zeyEynsKGjuZRCu8CPFc71NUBlIGxCwBv%2B2XyoRSec7nr9j5J4emmdyTpuYSUOCr4QXWzkL6TYTXAqXexRFurYw0KMpHiv%2BqHXcbV6ublfytWSTwtBKTUKfoBaO5Z1%2BZ5iMVwMdTt2VdcHcXB6268%2BkrnjbKvEtLlxFr4Wbgte1rr8CoICbyNN3d8iUBPn4eNTdwQ9AJ2NQueyZe6LdczYWSp9ievMzGWUaZkb%2F22fn8cuDYxkEZx%2FWE0KhX87ARLVkbxTztytB2XHbVX17VbpC%2FLpnX8hO3kgJjhewewJy2u0UEcOzR7Ap9MmYRpQeqCqUe0v8mUUVKzJXA5x9IahP77cHngzPo%2FRcfBwT4VT5L%2BLypUuFl1rACV5W5xEi%2FZGzR8vowpY7ciDfq1oJWRtIeRAnLdq7kCJprelU1SFK1hCuek%2FXte0scgWHaTZUJ2bN6oyceQwrd%2FkxAY6pgG1b87SzP%2FKGmeBDOHtCysRyPFx6kzV1tT%2FkWMETwhVvk7YwiPKuVM2%2FmTjFwHCWRHOEeBZauWaRlp%2BTCiNpQrefdeQVMU%2BWWaqjBZjyuh0nfhirgBxYDsmNv6UlEhyrDhEHFY66kfu%2FrjkQldHt8QI%2Bz3ZwxMhXEwzCvEQCeHwQWUYMFlOKJkwdzHYrp9BFRXySSsnwl1xNRbHAxM2J%2BgquhBbEtU4&X-Amz-Signature=bfabf2b7ca2f4c25ebbcdb318c5f87967e7ad4c3af6eaa6c3efd16eb11cd9755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRWIU6MQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRBPpSV9v1f25y1h02hxCTq9x3wOljrDrQFdCJA9LiCAIhAOFPR7S7JW%2BSl3XQBGzHuIOIyvp892JShCvh9bG8yXv6KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkpdb5nTs%2FaTaxfXEq3AP9UFRJrYPK5bESmDAu568ptKVvNxMEaZCe8cIlUgXXVdq9HUYMuEIUNsCQFLGnNmXpF9Oy7Ivxgfk1I9KFLfRHhDS37fCNJTpPvtFwRMQBvfbehEmBKTMLmw7ElcxCcgRY2Uw%2FPdJD1w4xGqeP%2Fw6tt%2FyGxd30qpBa0K%2Bpk53ZDZGjVE6%2BL2HO38esSPDbvpYlcp3wBsRBh4XN%2FXYITXKTnr2fm5RYAM6VDsKweTpDU7aEFbZgYD8UMem6EEYjDUgDd3MEgShzch5UrpnwqxDEyedfiacNbbl8U1e%2F1DF1asqEux4ql3EyfD%2FSSVibpqTo99dRmi6twzAP6DSVC1jL5SayUvYeox55gQdZTlkZzX4%2F2%2BUMlFloPn7HvDWnVS6rd0XMA7y%2B8YmiFa0WuHGUUuPn3yuUr9ad%2BnD6ge0lKHEYIFVdbrdUG5TGnE44l18e9%2F2wAEcx%2BlzW1MQA20OZCVAJPPNbzVFchEHrM0slx72CTSi4jw7vicVynRFaBvkbctwvFNUeDGfb%2FxOEmQfYvv%2FzNId9s%2BpgnG6AW2zC9OBQgTOfq2jyGgU7rC9RqFxrL7YlmsTAtznfOWtRUE9ypTE37LVo4NsYbVapAeWiOVLj85N8SR%2BJ9ZF3%2FTDF4OTEBjqkAfVTLLPF%2Fk%2BfBxHlGp4lmbF87ek%2BxW5a0zVAM%2Bo8oTRIL%2Bp5qcxyiRLzz4i7giFhCbzROUI3MYWIo33xS6SjBG%2Fz2Jg6iDOJbbs1jTfUdxZl9LGEqpQjgpmO5ZsJvaC6nY2IqrdXAjUZDOcEtQ8OiFnQhLkoB1QfQncBy2%2Bx3PXldyR2d2ncjjv5IfsVtSMmtPP306ipjr6udCXX%2FYT82EyFvfN8&X-Amz-Signature=985b0bb4a01f81668351860c68488ba27a7fcd27fc836499a81dea731bc03ae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIYUZ4EE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBXjZe2t1YJVCC4bHkF1Q2cxxR5Orr%2BT8W8%2F8RL4VJRwIgAh%2FJrFXf3halxLRmojgM1HDL1FypEtGqf6ZJa4Vkz%2FsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLE03xscqZZORSgx7ircA7jkypvWjgq3VRsmpV3j6JdHlahGsZ1JLCfrq49Hlm%2FVy92s3opjE9obETqX0oKWiifmHy5aY2c0MwObO2ncDRHTEHwonRMFo37EPnW6mvHy27b%2FrozyVGpGKuwibyC%2BCrVojC0JScGNOqHF1EEQTrN93K2z22%2BsKhEP5VDTrkLS%2BpINaDzAuyOoLL0CfllLen9ebNHGk8yiyYPnWAYjMFRYuOM9SYqmEiwvNASFTeZ6iBKRQT19%2BcFTVktLh50ONcpT%2BsO6AH7lJf2R93wf1JHbdViPZFQLojic1eYt8sbl%2BTfDd78lfFvSlDJ2MJO4ALJED1wQUKNQ%2F4yQloES5P7dUyYCdg0laS6x3u5GrzYSt05ShetbeqknGX7IFL91xz3aZoMjBrVjsDT1iDZdvPuDoy3%2BqZGTSHanweqzG2%2Fu32lG%2BkgRxDPPANVJiVbTsPmMLWswwEreqeR5lyCpn1LT6UAgzn36FEd56bNHA0i25q62zqKN39DgT4RAs5ymItsk2HH%2FUEMO5W367GvsN87sCWuI3kFPXN2C7WVYWGtVm7RBSc%2B%2Bs%2BZZI32eSWXgexxlHu5Qn3pIwmvPHrxsC0JWXP%2Fb8%2FzIVr71SGHGQNTpl6RDACO2h9PmYl4oMLTa5MQGOqUBH7miytgk0jhWm7ahGw%2F7zSkzma6L%2Buautr0iqyL080Bgll%2Fa3MEPG2TqQaTKkQwXkcuytF5sHwvCmA0aA65N5W0ONh9CgwmEWV9%2BdMTuQj6YQUJR%2BcFYCSm%2BLClOY8aKlu2Tagc3uzS3rZR1tT4D2KA1lBwEmdnMfiQ3dAYJavjmtyd%2FmiUmoFOVy9%2FF5k0vLyx8dw4KfywzjPDHIr7r%2FYjPxt6f&X-Amz-Signature=162212e8816eac2d4b933d081c3e628c3e21884832ba0f9ca01dc64f94b88a47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627VE3CGS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnvwn9ZE3MxEQkoZaAU6%2FODfLdLlITyZInB3thzAXcIAiEA4E04NXPfuz5rQEh2ZpzSDID1VYKTWFu%2FAB0cqBExCakqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4JuyTgpYQL7gHljircA8yNhTEU3xT9uG1tBaKI3Ii1ioIzPdy3Y4FILuIp7sikHMvvn6G8%2FtHZpqA0qbyyWQjgE9rSaM97CN95Nc1hdLh8sM0HyBoe0aqY9K5iiVOq8P0d9nnjz%2BBX24Ff0nG%2FWlfaTaMy1ihWNDg%2BmlC9XSortXu8ick24o6uCmWXW0LsSrW9g0IoCdCt3vYws0%2FeKZkJWiX%2BJGkuqSaXntjmDcuVY9Oup2nDGtQLAb4aWNwdEODsyeXFz32sqOVqPPnVDQPJuNdqs1Jq%2BgBu%2BoPUpCwQkO%2B%2B0XUcFkCahdIrhpX5drvGpp%2B8hC%2FMZqWdy6rYEk8zVp%2FVXB83%2BiTIBLnnDDHwvEXRrhfLL%2FLoZkVSDXHy2YPAFRrQAnJJaAegVu65M%2Fqv4n51HXPF1GQ2lsjyQ4fXVDznY7mybcbmUFHgRidyXW3enz5i2UrWwEdvMuqXebzFGcgyybSM%2FKGcsslWUpVA%2Bmu4QUiKBww3scNlREHIHHPYDH66PxqpZgZL9yiQkMQg5swvXpJYv6vQO8VlOje3Su8SxAKNBJB7Cak%2FfRYmF3PL%2Bqx5cfKl1b5OsdJ79waLS1Ru4kB5dV7y91FJzgsyyJeDznUZSn8ORQhYdQodjJW6OrEuHpiRi0WRMN%2FV5MQGOqUBleDBt%2Bp0%2FArzQy%2BWKujegPRXA%2FdsYYVeHwv2EFbo2C16k20HzprIPS0unavbRhzLHimHt0o4ks8GsSAOAp%2BIf%2FB76zKQP5EMsDh2tRr3P7LAdKHpJkOOKAA%2F%2B7mCfq%2FFu8t7MYwpbB7qJKAJqASi40NsjBQ5rP6nWpJMqKOt3fUkZjt9aw73%2F6qo2rn7br0YZQqLXYBpWoAbZnFYgPiwfolDWz5f&X-Amz-Signature=eb4c5808abbbac5eb65b05973695c95e8f8fdc43c680cbaccfd2f8877551f8b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2GDSR74%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkgKMocvVt9O0lujqOgZzZZlDwkmqtKK%2BnlBY6rnTDIAiAHC5i7iHCXhGWJeJknl4px4e8Osq1D9m0qcUBJnFHZqiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMprAuLYG%2F7QDprJtiKtwDWCblw0zZr5oRkBQpreWsoDNcE5%2FXpSwoTPrHwXY9Pxm2ElREHPX1BD4Ltrynt0fLPtzS5E4IIepsnftNmh2cy6bIgLlyCZqoX0u9Pddnsf1M8VdTJr9rftkJiNuPJNi9rEltEXgpliQlonX10h3bNh4ByNSCH8O6GJwWJAlRqxatxhq7qCSgW%2Ba9mSPVRwMYr60coym1bzv8VPYuWahQWk9%2B1%2BAzsnyk%2Byj4OAC9eDehP0Xq%2F%2BDDoJVDMoh%2FFse%2FB%2BesJmmzpJADgM5mD%2FjaaJQ2%2BMyvjyNTwLO8zY67Vnoyg7CVsovXJs8ADeNwtJoXXSPsjYLoe%2F4UKJnNZDRAoa41bhMfQqkDMOd78lWJsF%2B%2FvJnRYgKVJFQsRD%2FxAgTvlJFlvfEpAmNdzY3sB%2BF4xyhxlUWtONOQTTTu93xJl8pXsGb86C2Xqz86qJb3XTM%2FaOLqGgl1KuWH6kmcNIuw9o%2FhlqcfGkuCgMl7U4MOFSEkRTW2o9AZaB9NzIkzK57Bam%2BJd966Lkz093HCgDHftrn%2Fggch3kmtu5ksa7RYVcqPJBrx3cCYDBhOJgoJ9t0U%2B%2FfEXeS%2BESTEsFF%2F5%2FQ88pYdEF%2BV9uB5Fb%2FafQxn%2BuH6O6JiLS4gukndjwEwltfkxAY6pgGIZP7IkQD1Jvy3PjAAMtos6MSVjOiIR9T0WLkoIM55%2FnwtMfyAtAiUeE%2FNL3GSd5%2BWXly8qzAgt%2FLMmQkSDCjBT8gHa93maWe0ZLIr9ctCVgSdCy2bep2Wlsg2W8tvYcmnl3RDAYdmHjSAHfuL7J6W%2BQDeYR%2FdpN0vVLO4mvtQZbSSj933xl3DmqpW1kDB9QFTH%2FjsOtyHKKz85KSsdpQ2qgWPAZ3D&X-Amz-Signature=bfa452c88c0fa408fcbc512ab36eab5ac5c61572c300afd9c7124d1bbdfeed5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627VE3CGS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnvwn9ZE3MxEQkoZaAU6%2FODfLdLlITyZInB3thzAXcIAiEA4E04NXPfuz5rQEh2ZpzSDID1VYKTWFu%2FAB0cqBExCakqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4JuyTgpYQL7gHljircA8yNhTEU3xT9uG1tBaKI3Ii1ioIzPdy3Y4FILuIp7sikHMvvn6G8%2FtHZpqA0qbyyWQjgE9rSaM97CN95Nc1hdLh8sM0HyBoe0aqY9K5iiVOq8P0d9nnjz%2BBX24Ff0nG%2FWlfaTaMy1ihWNDg%2BmlC9XSortXu8ick24o6uCmWXW0LsSrW9g0IoCdCt3vYws0%2FeKZkJWiX%2BJGkuqSaXntjmDcuVY9Oup2nDGtQLAb4aWNwdEODsyeXFz32sqOVqPPnVDQPJuNdqs1Jq%2BgBu%2BoPUpCwQkO%2B%2B0XUcFkCahdIrhpX5drvGpp%2B8hC%2FMZqWdy6rYEk8zVp%2FVXB83%2BiTIBLnnDDHwvEXRrhfLL%2FLoZkVSDXHy2YPAFRrQAnJJaAegVu65M%2Fqv4n51HXPF1GQ2lsjyQ4fXVDznY7mybcbmUFHgRidyXW3enz5i2UrWwEdvMuqXebzFGcgyybSM%2FKGcsslWUpVA%2Bmu4QUiKBww3scNlREHIHHPYDH66PxqpZgZL9yiQkMQg5swvXpJYv6vQO8VlOje3Su8SxAKNBJB7Cak%2FfRYmF3PL%2Bqx5cfKl1b5OsdJ79waLS1Ru4kB5dV7y91FJzgsyyJeDznUZSn8ORQhYdQodjJW6OrEuHpiRi0WRMN%2FV5MQGOqUBleDBt%2Bp0%2FArzQy%2BWKujegPRXA%2FdsYYVeHwv2EFbo2C16k20HzprIPS0unavbRhzLHimHt0o4ks8GsSAOAp%2BIf%2FB76zKQP5EMsDh2tRr3P7LAdKHpJkOOKAA%2F%2B7mCfq%2FFu8t7MYwpbB7qJKAJqASi40NsjBQ5rP6nWpJMqKOt3fUkZjt9aw73%2F6qo2rn7br0YZQqLXYBpWoAbZnFYgPiwfolDWz5f&X-Amz-Signature=cc6eb30cfdc5db3a401ce31d375588b1a0a17c2730a3570336d16ef50b51831d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R36NHVJS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMoFZh395UFgKlTqIVaLanWurEhcNE%2F1Y7IUwDxoKBqAiEA7qXT6v5g7y3UICz41hL7htNM5mKSXM%2FYo2%2B2c1yHV5YqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGq67wWQgrYnPm29sircA8DazUiOFkfqU2t1nyGngrgK9kFg69irmdzllrMMNUGqGxt67xI1aPQacR8vu1H1jNWokegq3NrqmuLFkjPeSce%2FrcV7sudtI6iD8an2iKI3SdoS4A4at0L319loBGyTuQaaOuxRNCcueVz6SbKvRD6i447cZCoYIQKeGg03B9QYLajN7p5TkuIsDVWlkWYrXv0ZYU0ViHwxIaI7GZ2P0qGvkW3W4h8xJ9Drc3fi8qVZ9qfsRCHnH9xv8Ztf53IPUbcqa9lWNRm9wUNnkAqB%2FqbSGY%2FUtJIx2xD1rlMno%2FCvEY%2F83%2BLFvKsxyc6Xx%2F9B%2ByHn0pbi0l8%2FnYWaPW2iX0O8dTOU1Pti4RvUAp1jRptu1C4fZlHEa2mkP3%2Bhs89PSq%2Fc2PBBZSsmqAP%2F1AmMG4siv%2BabLLiI4eidiDdtycEWLo4W06r6LNBkW6ysRm2qnARwy9d27OLzAXnvlR%2B7wP%2F9xWDu%2BNd6m%2BIvB8YXuMPyTU3HGRaWgYd7QZYK5Hv%2F072oYcG2g%2FeljIbA15pOw05DWgQ4KmPc7GITVXGpU4WdukYwkL33IbYHHb%2FhPSiamNd8NhDh%2BrZQhg8CSjVoDCL2lt%2BH%2FMXL6d1HL5d3Z124SXUKU54i0lEyZW5aMOfU5MQGOqUBWNOnCH30qZ8cVIDj%2BgW7NTS6Pr6qGVXvtgreas%2BjB3gIQQo1167ye8m0V768uBeVrgmAgCKRiqPHvv37r78voPYijCFbc2R7yiiakvQ9tsoM0fjNKBoGm7Mazw%2BWdnEpkWic8Nt2zF33XGAq98m0xmh1GpFkek1Jpl7gk%2BmHMLUpmA9TO%2B3OLFaEpsIPN56cByI0xFik%2BCkM4VnS18OvNTCxWwxC&X-Amz-Signature=a616b7919ede1c8f40bf40fb9cc04fa34f1abd9a075f6a064484df4039b175bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627VE3CGS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnvwn9ZE3MxEQkoZaAU6%2FODfLdLlITyZInB3thzAXcIAiEA4E04NXPfuz5rQEh2ZpzSDID1VYKTWFu%2FAB0cqBExCakqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4JuyTgpYQL7gHljircA8yNhTEU3xT9uG1tBaKI3Ii1ioIzPdy3Y4FILuIp7sikHMvvn6G8%2FtHZpqA0qbyyWQjgE9rSaM97CN95Nc1hdLh8sM0HyBoe0aqY9K5iiVOq8P0d9nnjz%2BBX24Ff0nG%2FWlfaTaMy1ihWNDg%2BmlC9XSortXu8ick24o6uCmWXW0LsSrW9g0IoCdCt3vYws0%2FeKZkJWiX%2BJGkuqSaXntjmDcuVY9Oup2nDGtQLAb4aWNwdEODsyeXFz32sqOVqPPnVDQPJuNdqs1Jq%2BgBu%2BoPUpCwQkO%2B%2B0XUcFkCahdIrhpX5drvGpp%2B8hC%2FMZqWdy6rYEk8zVp%2FVXB83%2BiTIBLnnDDHwvEXRrhfLL%2FLoZkVSDXHy2YPAFRrQAnJJaAegVu65M%2Fqv4n51HXPF1GQ2lsjyQ4fXVDznY7mybcbmUFHgRidyXW3enz5i2UrWwEdvMuqXebzFGcgyybSM%2FKGcsslWUpVA%2Bmu4QUiKBww3scNlREHIHHPYDH66PxqpZgZL9yiQkMQg5swvXpJYv6vQO8VlOje3Su8SxAKNBJB7Cak%2FfRYmF3PL%2Bqx5cfKl1b5OsdJ79waLS1Ru4kB5dV7y91FJzgsyyJeDznUZSn8ORQhYdQodjJW6OrEuHpiRi0WRMN%2FV5MQGOqUBleDBt%2Bp0%2FArzQy%2BWKujegPRXA%2FdsYYVeHwv2EFbo2C16k20HzprIPS0unavbRhzLHimHt0o4ks8GsSAOAp%2BIf%2FB76zKQP5EMsDh2tRr3P7LAdKHpJkOOKAA%2F%2B7mCfq%2FFu8t7MYwpbB7qJKAJqASi40NsjBQ5rP6nWpJMqKOt3fUkZjt9aw73%2F6qo2rn7br0YZQqLXYBpWoAbZnFYgPiwfolDWz5f&X-Amz-Signature=3da3d5664cb78a5229bb746f6a29034e750ec5afb7bf3285dcc1857a00151422&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7IPOTUO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV2dCWjciDHNtstJGtybOGBBQmfXX6Cg1Z5NJFrMd8AgIhAKODwHuB8zk1ocgQG7XJgYDRNw80t5uX%2BCIdl3jLRDAPKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz827JSdcM%2BfIpWKdIq3ANgHpPrSZQ6dJslysdmIE0%2F61uSDV0SxQcWfB6GdtbVy4Vq8Yg5knEt0f%2BQtgOMQiPiP7Ak3s8XaBZbYXYBa4r%2FfRlZNbjvnap2%2FDSA%2BPwfHaBsQgLFAGo2r2JZ5SAQE9V%2B82OKdZDSVfkriyON1vNMmvUvx4MHX4icWov6DrG4E12GN4zp%2FPpvOB8B3RPEV2WQYKio7ag9Op0RJe3Wuu4rWhTqgM3e%2FNsxqaVD9aZay8bdl2LUYILjmtKKlLMMmd59kUAhoD%2BNyg6FteQ6qsK21UaITKTqx%2FXaNE9sm%2B6U%2BJuSQWZfrlsQItFPWuS4aXs4DxAAmghJPddo0krgc%2FFX7QCcDueLABR6WJ7DXcCTqem4hsEbAJMT4l6QksLLr%2BYodXSVS8hENbYlokPgBjSkJ%2BgvfRfzN9hR%2BN6nkGFxJ%2Bo%2FuRqBQvRtncfif8ndfVK6PLc9NWKYVmIyzDctAvFXsB1o2BQPSurlWdUN18MwwRHe8fmeWuiJSJ0G%2FYyI6Wv1PGlTSIJ9c%2FQmk4OfLGS20qWq0iZYcYhiN5ugSZtLPLY36JVXY6NNBRf88%2F8L2welyaJZ6f%2Bb0SvTdhHYxtI6JfKHtt%2BmFqNhzptZvxHQPgITGKONj41U9p8CVTDi1eTEBjqkARefaid8htRs9gHgwmXYGV8MXDDqsGVPkiTC%2Bt7Dye0Iw2p3f6kG%2FdUaXKqyScTF%2F4AGNjQ7jZYzeYxSwcFIVqeGYqa2IOzz1nR0DK18WnW0%2F7FypzAsVpob5lT1%2B1XKQucMiF4B3wb03k0lAnteQGFmctKV2EgsOkuyFYow%2FH8L8PdOcwXD1ZYdjes3pbc38e0dozu31hC4pe%2FRyyLsHt2Qr5Tp&X-Amz-Signature=fc34c7c40622f6aa888d661e013715552adc9df4e24badad6d56991ae1bdbc73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627VE3CGS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnvwn9ZE3MxEQkoZaAU6%2FODfLdLlITyZInB3thzAXcIAiEA4E04NXPfuz5rQEh2ZpzSDID1VYKTWFu%2FAB0cqBExCakqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4JuyTgpYQL7gHljircA8yNhTEU3xT9uG1tBaKI3Ii1ioIzPdy3Y4FILuIp7sikHMvvn6G8%2FtHZpqA0qbyyWQjgE9rSaM97CN95Nc1hdLh8sM0HyBoe0aqY9K5iiVOq8P0d9nnjz%2BBX24Ff0nG%2FWlfaTaMy1ihWNDg%2BmlC9XSortXu8ick24o6uCmWXW0LsSrW9g0IoCdCt3vYws0%2FeKZkJWiX%2BJGkuqSaXntjmDcuVY9Oup2nDGtQLAb4aWNwdEODsyeXFz32sqOVqPPnVDQPJuNdqs1Jq%2BgBu%2BoPUpCwQkO%2B%2B0XUcFkCahdIrhpX5drvGpp%2B8hC%2FMZqWdy6rYEk8zVp%2FVXB83%2BiTIBLnnDDHwvEXRrhfLL%2FLoZkVSDXHy2YPAFRrQAnJJaAegVu65M%2Fqv4n51HXPF1GQ2lsjyQ4fXVDznY7mybcbmUFHgRidyXW3enz5i2UrWwEdvMuqXebzFGcgyybSM%2FKGcsslWUpVA%2Bmu4QUiKBww3scNlREHIHHPYDH66PxqpZgZL9yiQkMQg5swvXpJYv6vQO8VlOje3Su8SxAKNBJB7Cak%2FfRYmF3PL%2Bqx5cfKl1b5OsdJ79waLS1Ru4kB5dV7y91FJzgsyyJeDznUZSn8ORQhYdQodjJW6OrEuHpiRi0WRMN%2FV5MQGOqUBleDBt%2Bp0%2FArzQy%2BWKujegPRXA%2FdsYYVeHwv2EFbo2C16k20HzprIPS0unavbRhzLHimHt0o4ks8GsSAOAp%2BIf%2FB76zKQP5EMsDh2tRr3P7LAdKHpJkOOKAA%2F%2B7mCfq%2FFu8t7MYwpbB7qJKAJqASi40NsjBQ5rP6nWpJMqKOt3fUkZjt9aw73%2F6qo2rn7br0YZQqLXYBpWoAbZnFYgPiwfolDWz5f&X-Amz-Signature=9b29833bfd338bafef9c20d4b0a19212b5b6ed347f5a6d177cf9aec4d9ead71c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SJB4GU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDae7oAYB4ULsmLcP5t%2BWrorDpglbQ0%2B%2FGJSgHto9FEYAIgNmNuoW%2FSFAGlkAVAV%2F%2BXGdKC35nh8uDVXPVZ1FpRq%2FMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJKYmrsimiSOLfeqCrcA6nO%2BOQnjsy%2Fe6xJQJKhvQX3i4XV3%2Btx%2FN%2BHruuhUGauFQ%2BMY1PrrhY9ZGUvaYwRszQIh5ONs9z69vg8682nhgCkUuu9RYFLVyDO6c9ka1uPqslEX2jn91JHzdy5S5ItZ5CqFCt6HI0B%2Fai7u%2BAQvD4JLmtN%2FfcPaq2fKseq0F2n4kUxBX5HCespG%2FdESgGv9mJS7Fr8BVmoRnc6jXvKOO%2BR8bWo6ENzaD9JFOIcxlvtLefCiI3ztCCUHqp9WsXZgw04puW9B2xXnzm0RYBKikuAhXTHFi%2B%2FIFboj0OLLxr0BT1Cza%2F24BJUCqu%2BDIPbMBIzY5ES0DoPTa%2Fjegv4jZdATz6aHg9ABRIhLc1vW0PzJLln8IUf%2BJmr2L5X1CDhmOtkNj4DwCZqjWezNngigC6Dfdeo1b7rvXYSPHwH9%2BS92IZLONBKPh4LmCD621WYGt1uWGDtXW2ORDdeeyrl58MICzxCPNBgvk0KnftCxTLsroH4xKUfI%2BtTiwr8TIDSj5cNYtSLXS3nnQAjLvZqJ4nBVIT3uuC0AihHslwIsnB%2Fqr5uk4hATzYnbCs%2Brkjbg7cFxc4jd7FhDdbiDPAa2iq0c9rj4Pe2vHs2kDR5L9UQNNkFnJLBEZulkjwYMO%2Ff5MQGOqUBpRBGGbJmXZfIkj0yxJScbTUKmJeRqPf8aUFKtn7jsGxnhzIzwwpatuzVLjb9OH9BX0N1JZi%2FFN4fyfPR0V8paeG2Cq9K3bAdV6dVK354smzG1ayq8KNnu0VqVUKpEYwUherj%2BIen63w01SO3s43SDtIlMk2hkaRvEoh2BV9nP4wfmjSdk7CuYwkhOZGZseQcE5lhae%2Bi4xqT5dK28jnEwuAo%2Fvdd&X-Amz-Signature=9975dc4f390ed48295501bdfedcb7797bd5a18965a4f3c98c26cb300b61580e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SCCKPOO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7lGtW6VZl65MP28P8%2BTdHlois8T8tjxUdLx3kbi7d9AiEA7lbzIk1ECa5yRBYDEsqRV0H0v4FEbqr5AQppZJLEF%2F8qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNy7%2BG18gJs8KMhlqircA4zStTiIe1hmKh5xaO93%2BDLFTIrg6C0k2l9KHJs8KiRs2ntglz09oyLtvTDENdYPQ%2BnjIgK5yoOHJ91YTTCG4Oq%2FCEzwWRtGzq1PefkKiJMPFrx9RH7zMvWl5%2F%2F2DApiseal4P2fkvXp6vun4UdPuuVWoklyrXDpAurXBdVWD%2FP0WYuK%2B3F4LNkhoijgizOnXaS60tImKKmFoksxz1p9oJs3gpbA136OY2yAc6qBZbAbuX%2FJ4kG3TdbDtWUx4ofQbr7ij56eVBHP4nAoCGvO4JUDcnGR3du6EOWItUIO%2FVVcFCzra%2BKib5OtEcZhxo%2BTZRH5ANayxsPITcRCCtqho4UPBXr9%2FqycFqNNAfcC2vZgcKw04dY21c6EQDjA5FpCirBOFA6DoQ5WKQXo5qd75hTPLZRwHo4WjNazho6Vs%2BddymEJxNEgdJvZRkQhBcwLjCme16oq8jEG6xaHUGoBcU9NTJKAw%2BVJnouxThB0CfCo23xwkR%2BpEChQ20CMoaPnsr6dacipVJ8rbQFzWYu%2BmwzSE4DR%2Bv1LIpa2oBvXrqvRN6pnaNwIEUbnN7HkcTXfr7ZwRIwFUAxZtY0b0nto1M%2FX3HYBQEjl5UU4ex3ZFjkWQvy4ImbgR%2FegFFkFMMTn5MQGOqUBC5ucY54j%2ByPKOwJLy53fNX7vWOmFlXWK%2BhY%2FHa9mTimoQwT96FZAyltRk%2Fslq9VRc135J%2BLy9Pzml7YD6s5xhonbqJ13UcT2A6BTij15%2B6mpu8g4FJm8PuDBXdL4BYSG0hUu0J%2BbK1xVKIrlfw7ClUcq0F6OH8pa5fRlgpny2CInDWvhjN9%2B7DI%2Fxt5AjCzSWhgHRNbaAu2IIPVQ3i51Eh4BVylT&X-Amz-Signature=999157bb70a14b178ce02e3dd7aaa7975ce63ef1b8c5b49ab4c3d5544a4183f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UXUM5XD%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6VygQm6lDxq7IFqwa6OtIIdo37azAro6aRFUdv50VgAIhAOC8dU3aHTZqiqpxjxmmzgu5o2G3o1Sqt7%2FWNemi9v%2BKKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcMk6xRQHPWI00axsq3AMNe6U2GJjgREPmHLzs%2BXxpq4Su0ITsM4BtFf656K9X9wXhi4imAAmg6BHZECfUMLhigAIBiiqmMtJtsM%2BkARtumgA3yM1fK6WJGpf25NWe4pZ9SHuPj%2B6tFTZmRsGIR8tcliOlpC0GhcbDL48JmfcJhn5DeAu72DQA1vRoBTtiwxmte6PQW2vUC6XLa7Yb%2FswMRkO338i%2FZDSGvMuQG0KeV3zLFWx183pMr0UFQFWKFxcuhUAPsEjUUCBdDpJyKk2LqnC0%2BS05R3H5AY16y8Z1alALQuKNWB%2BzU%2B10IrR0Xzcxebwstg9xLutpvkK6nYyPgNAsy2mExrW10uoVKdlgHBLAcqYja%2F285E%2FmUkvBwWQNvOw%2BAGATMdlTMqZlq6udz4%2BpXzFh878EVhrMjK%2F6hRE2YByQ216KtOC%2B7s5ABsjRZEY1S4G%2FSfc0DkVjfoKdTyLKRL9hvLFlfYYE1l5kw0zCcv4Yv5u4P8nCE8ZCbKUpjdnCOmTtxf07LmSqjGLUMZ9SHdZwOs3phBgZ2MWTaTBayC4EF55GcBCIZ%2B%2B4N%2BrgoQYcF3Z2qFrtmK2GQW4paSgOAmUEAuq6svgg%2FTTbUKTYkdCtha02FjqteNGFTjRIJjJ3I5VejYCawjDh1eTEBjqkARUQvpyb5GnZZiQ%2BuX8nnMhpAWUtGzAs9%2BP2KMvletbJymdqv%2Fr7H31Uug2VgrkDNjK4iuAncMUsyrSBRRTbzvkOCqYpTca8Mb4dHaERBDO3P9L3HR52VZPxzzPFkWBOp6AbpYl95mQ1LAoKkzlyuJboqHujE9Rvi95RZxzJbRKnlsnk5wX0bUtEByR9T0GZ%2FCwPXi0o4vhmnQXx%2FsbWUB92hgl%2F&X-Amz-Signature=825876b20dd6c55b408a0a6122abd6603edf9d11d20a2e2be2480471e1e616cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q4TR35B%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1yykSkGXaWn8Cd7QTsfkPOC8fYsW2QbhsmAW2ocKDcgIgZg5eowcHzKJ56mSMs5BSpK2Mh3TvGidXBBAwemuEMbsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAei16KUbIrLqT%2B0hSrcAzmAkbmEBsGf9mriGqPDdA4a%2BaExENX2IFiG7ORrjrMQLzgfKr64SYwH9mrJO7jKri07Re5SJycasC3%2BWTvacYFUTVicDLwp3MPxrMVNdZlxhCjaB3SAxG5er3usGTRadw05pKyWorYEY1WymVbPz390pdMEqrYjmhRVihsdZjFornlyVL0XmajlSocq7XtdLf%2BuqXDxQKkVqrGu365PefIT1lE3R0NAqMCffygkr6mLh8eprYORDo%2FiLIXtJOr797Apd9I08%2BgsU9zmn8RrfHMk3AF%2FhHqSxqdwUQ9MJQhtHGoxPZYdtDl8WRBH%2BAsD38%2BuqLB7w8Geiy%2FBijBXXtqOyESD07gEpTys6Qd73AU%2FJTXMISs8Y1yuz3spGpDXOZwGqKqD2O9B8zQqy901ywgpzKI%2B4LLqaXaLGi6w0mi9qoZI5OTiz8RCgqIwfBph9PmZ4axXvg7aVBCljQxWbSchhJyzDRzp3x2KtsZcqGnJj7911zoLUBVeBVIkrTgd8pBZiNKjhmKhZt6b9s%2F7kRYK3%2Fj1ZnTYjTYc8k8OxJIoW%2B0FeKqlIQL02nuCwnuf7o2rBFbjHtB20HwfiZX3GV7%2Btj%2BufbDXSaITWe9CWPaPIxNCk0XlAHMUsrV0MO%2Ff5MQGOqUBdQZVQShfrdYQuMNoLgerPlC%2F4f0lu1h5vTQYTUwUi%2F3q9WkDcOLLTMFwegmBIwjzMDjvgNKaolxMHAHLkMi8Qx2uF0jqhq3DNYAC4rhW0inP8tzVkHVIMwM67eEnsBhN5YXxoAG3rFqm94kcVYtvuCb%2B67UkKJ3BIw6CxtYYhTQPJdqpvQWVVZPTs6KIRjF1zksxw4DB7v6gTf0INhpgOYLIQ%2B4%2F&X-Amz-Signature=68382d9527217ed9681a9601f8658c1973cf8c7579400a8b7060d5d6a2dda998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZDNBQOK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNznw3zkx1RrRym1DlpXBulOExFgdACvYXk%2F1ylC1LMAIgb4Xk6h75yFUkoRG8X6NzOz3EEHgT%2Bw0gM5jQQMHUdVcqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK06ZygvprxmNnhjxyrcA6o229BAedyNVHloU0zcxrpfKkb9ncDGATnFXKGseO7BoeiZyj3om5iloBhhhuouMxENLqdRXGF9qQaIDbsdSIb55%2Bs2F%2FfcdyrHVCt4QxLgHcYDYF1GLfO0IYBT0JHX3bouJb1Nnlw05ku3tBSQOMMOyWx1IBYUd7lOSGV1DaV34lfQ4KRexcKpyHUIZ%2FUduoKsg3YrUjG%2BVxb30O1HNZwIYhZPWItEnaqz3AEEj3ax8577bOOtLhCOtsByRGApC%2B2kiLgMkXmer9tJxuLaX0GAJqJ%2F3ICTMJU8SdlZXY8j4fKZ3uG8blLJ61Kpp%2F1nI553KMF3S0f2%2FJwH1hg1otWDTNbsQx6b2ZEqOwwHN3b1lnAao5HnzbOlnUHPy6Olgj2e5XJggNvacgUFqBOq8ZV%2BYDxkCAygEYmA0J0W4tgHxJxf%2BD67KstXbflyDBfvvxzXDncSB0uVd5TC9Pf3YrMacLvx0mybPI7xUBvbpMwUaS3h5MECCeXzZv4hyawC9ElbgZ%2B4zV8x3DKEd7tDqnxlC1IhsubZmi2m5idQF3EoxwFxB8BJI%2BV67bx16PfgaSuRL1ALcy%2BBkj39MzYLIocwou0ugvILCioNUwMgYLOBYCJP9BhLoDmizg6BMN7d5MQGOqUBDobu%2F9grY0TEYwVEBP40gA6klnx41eaisawO%2B%2BDWLXLfhnvmdmYydriE8GAGQ0nIKcWtwSPbByl3vzihNCetkBo8h%2BOFYmxITIuRHeO4oZhkZyD8i%2FeRviQL1AkdHhD%2FArDSiVgQ9qBz4jv5%2FU1bj2jq3M67ucgYIWXXVL7MKkDI0QVUeR%2BVzw8fSuP%2BV%2FVY1jy2KERbX14lnswRjxF%2B0Z8O4utJ&X-Amz-Signature=5760bf0009877ef0035377ba596b7020cb8d040581b6c3e01873f07908d36d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627VE3CGS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnvwn9ZE3MxEQkoZaAU6%2FODfLdLlITyZInB3thzAXcIAiEA4E04NXPfuz5rQEh2ZpzSDID1VYKTWFu%2FAB0cqBExCakqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4JuyTgpYQL7gHljircA8yNhTEU3xT9uG1tBaKI3Ii1ioIzPdy3Y4FILuIp7sikHMvvn6G8%2FtHZpqA0qbyyWQjgE9rSaM97CN95Nc1hdLh8sM0HyBoe0aqY9K5iiVOq8P0d9nnjz%2BBX24Ff0nG%2FWlfaTaMy1ihWNDg%2BmlC9XSortXu8ick24o6uCmWXW0LsSrW9g0IoCdCt3vYws0%2FeKZkJWiX%2BJGkuqSaXntjmDcuVY9Oup2nDGtQLAb4aWNwdEODsyeXFz32sqOVqPPnVDQPJuNdqs1Jq%2BgBu%2BoPUpCwQkO%2B%2B0XUcFkCahdIrhpX5drvGpp%2B8hC%2FMZqWdy6rYEk8zVp%2FVXB83%2BiTIBLnnDDHwvEXRrhfLL%2FLoZkVSDXHy2YPAFRrQAnJJaAegVu65M%2Fqv4n51HXPF1GQ2lsjyQ4fXVDznY7mybcbmUFHgRidyXW3enz5i2UrWwEdvMuqXebzFGcgyybSM%2FKGcsslWUpVA%2Bmu4QUiKBww3scNlREHIHHPYDH66PxqpZgZL9yiQkMQg5swvXpJYv6vQO8VlOje3Su8SxAKNBJB7Cak%2FfRYmF3PL%2Bqx5cfKl1b5OsdJ79waLS1Ru4kB5dV7y91FJzgsyyJeDznUZSn8ORQhYdQodjJW6OrEuHpiRi0WRMN%2FV5MQGOqUBleDBt%2Bp0%2FArzQy%2BWKujegPRXA%2FdsYYVeHwv2EFbo2C16k20HzprIPS0unavbRhzLHimHt0o4ks8GsSAOAp%2BIf%2FB76zKQP5EMsDh2tRr3P7LAdKHpJkOOKAA%2F%2B7mCfq%2FFu8t7MYwpbB7qJKAJqASi40NsjBQ5rP6nWpJMqKOt3fUkZjt9aw73%2F6qo2rn7br0YZQqLXYBpWoAbZnFYgPiwfolDWz5f&X-Amz-Signature=ed91b0a808b8219529d9f1ed44f047951467fd2ae5950db01f320c161841118b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627VE3CGS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnvwn9ZE3MxEQkoZaAU6%2FODfLdLlITyZInB3thzAXcIAiEA4E04NXPfuz5rQEh2ZpzSDID1VYKTWFu%2FAB0cqBExCakqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4JuyTgpYQL7gHljircA8yNhTEU3xT9uG1tBaKI3Ii1ioIzPdy3Y4FILuIp7sikHMvvn6G8%2FtHZpqA0qbyyWQjgE9rSaM97CN95Nc1hdLh8sM0HyBoe0aqY9K5iiVOq8P0d9nnjz%2BBX24Ff0nG%2FWlfaTaMy1ihWNDg%2BmlC9XSortXu8ick24o6uCmWXW0LsSrW9g0IoCdCt3vYws0%2FeKZkJWiX%2BJGkuqSaXntjmDcuVY9Oup2nDGtQLAb4aWNwdEODsyeXFz32sqOVqPPnVDQPJuNdqs1Jq%2BgBu%2BoPUpCwQkO%2B%2B0XUcFkCahdIrhpX5drvGpp%2B8hC%2FMZqWdy6rYEk8zVp%2FVXB83%2BiTIBLnnDDHwvEXRrhfLL%2FLoZkVSDXHy2YPAFRrQAnJJaAegVu65M%2Fqv4n51HXPF1GQ2lsjyQ4fXVDznY7mybcbmUFHgRidyXW3enz5i2UrWwEdvMuqXebzFGcgyybSM%2FKGcsslWUpVA%2Bmu4QUiKBww3scNlREHIHHPYDH66PxqpZgZL9yiQkMQg5swvXpJYv6vQO8VlOje3Su8SxAKNBJB7Cak%2FfRYmF3PL%2Bqx5cfKl1b5OsdJ79waLS1Ru4kB5dV7y91FJzgsyyJeDznUZSn8ORQhYdQodjJW6OrEuHpiRi0WRMN%2FV5MQGOqUBleDBt%2Bp0%2FArzQy%2BWKujegPRXA%2FdsYYVeHwv2EFbo2C16k20HzprIPS0unavbRhzLHimHt0o4ks8GsSAOAp%2BIf%2FB76zKQP5EMsDh2tRr3P7LAdKHpJkOOKAA%2F%2B7mCfq%2FFu8t7MYwpbB7qJKAJqASi40NsjBQ5rP6nWpJMqKOt3fUkZjt9aw73%2F6qo2rn7br0YZQqLXYBpWoAbZnFYgPiwfolDWz5f&X-Amz-Signature=07ed23441d9f9afcef1f6a2183dee4af5ebc6120fa9a244d41b70e73355a642b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWLF3ORO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaYfOLQ1JJXr7tW4qSOjC7moKusyBTIijnmvVQL%2B910AiEAw88TIZq9DszComj%2BkmLiM3aZBRlylPnq6O32fMbo9UsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPZRA5g47UULHkBySrcAz0LRmh2sVJuIVuYg3UCuNIeclhEsQWPooteyb14ubhCnM43jasNDsD%2FilV6qyhDlKzgn6uC6aUsxkAeE8Vvmz7h8%2FV0AZU73SINS6M4uP9TZN8iRkxNYWfCtGm0GitR2ixULq%2F%2FPuLdRHx07dkP9MtXPPsE0FZAr5TDt3PXNmA9gSwcMW%2FHw46wllvzFavssR5pT8sjK%2Bon%2FMAQ6wPLBDsh2a6d7QpilmXqPqYLXQjNgM5JcxYfyDqAY2UXnrHszqfBrjIQMQMsglKTX1MWWUtVaiZdrCm9a4K3B7s%2FfZGt%2FeK2YpYw21mAwWDXURNxbUxhQ8ZuFGo3bjrFJDrkZXFmt04llOJjMy9iinf6xCeYdde22VmDUJt54eh0FEebAtHfbVwC2DN2bgYZ6VyhwnZqCjrIoyc%2BkRjyG3zzVyMhDdYVCl0m%2FNlv510exr5T%2BvtjMtrphfyCodA38n5ioKCRlC2vgGImlF3J03qnJlU%2FHEFAxyYZT4JW%2BAmuoDsrkzhD46so3fhypkW11DsTcRZVwELxLh5IVO0LQc3XDaQmKutheV2pLok9q4SO7vV2qE8v4jGUOqzq8LviKynTIawHyBxaSRZUPoYffUSPp%2BuXFDeo5%2BpgM96UPYfRMJzh5MQGOqUBgeZOS7oRoXYlbgLRJoOoUPPkptK7TxNcQgcHD2%2F3W1Kb8GTxcoinPoP0Jv8Cs4ni9nTSxqchCFqHBhMd2IvJVujE4WhaYQiId%2FjyeOuOaXp3AQ2lHsJPG%2BuFK1ho0WgjXBvR6RZHqfgh7g9ntjq7jve0R7MOiAUZJ5JmYqasBzXMmlloLWRPMAB5JQ4zwjvir%2Bl0pYadaOsfpkoicbci3uul4drb&X-Amz-Signature=032fa30880a2722eee9f69e6dea260ad77a4a910598d80e655c5e94bab369088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWLF3ORO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaYfOLQ1JJXr7tW4qSOjC7moKusyBTIijnmvVQL%2B910AiEAw88TIZq9DszComj%2BkmLiM3aZBRlylPnq6O32fMbo9UsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPZRA5g47UULHkBySrcAz0LRmh2sVJuIVuYg3UCuNIeclhEsQWPooteyb14ubhCnM43jasNDsD%2FilV6qyhDlKzgn6uC6aUsxkAeE8Vvmz7h8%2FV0AZU73SINS6M4uP9TZN8iRkxNYWfCtGm0GitR2ixULq%2F%2FPuLdRHx07dkP9MtXPPsE0FZAr5TDt3PXNmA9gSwcMW%2FHw46wllvzFavssR5pT8sjK%2Bon%2FMAQ6wPLBDsh2a6d7QpilmXqPqYLXQjNgM5JcxYfyDqAY2UXnrHszqfBrjIQMQMsglKTX1MWWUtVaiZdrCm9a4K3B7s%2FfZGt%2FeK2YpYw21mAwWDXURNxbUxhQ8ZuFGo3bjrFJDrkZXFmt04llOJjMy9iinf6xCeYdde22VmDUJt54eh0FEebAtHfbVwC2DN2bgYZ6VyhwnZqCjrIoyc%2BkRjyG3zzVyMhDdYVCl0m%2FNlv510exr5T%2BvtjMtrphfyCodA38n5ioKCRlC2vgGImlF3J03qnJlU%2FHEFAxyYZT4JW%2BAmuoDsrkzhD46so3fhypkW11DsTcRZVwELxLh5IVO0LQc3XDaQmKutheV2pLok9q4SO7vV2qE8v4jGUOqzq8LviKynTIawHyBxaSRZUPoYffUSPp%2BuXFDeo5%2BpgM96UPYfRMJzh5MQGOqUBgeZOS7oRoXYlbgLRJoOoUPPkptK7TxNcQgcHD2%2F3W1Kb8GTxcoinPoP0Jv8Cs4ni9nTSxqchCFqHBhMd2IvJVujE4WhaYQiId%2FjyeOuOaXp3AQ2lHsJPG%2BuFK1ho0WgjXBvR6RZHqfgh7g9ntjq7jve0R7MOiAUZJ5JmYqasBzXMmlloLWRPMAB5JQ4zwjvir%2Bl0pYadaOsfpkoicbci3uul4drb&X-Amz-Signature=5107662992cbedb62ce12af811c7cbd0adf11eb601cd4851012aa0d0f222a797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWLF3ORO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaYfOLQ1JJXr7tW4qSOjC7moKusyBTIijnmvVQL%2B910AiEAw88TIZq9DszComj%2BkmLiM3aZBRlylPnq6O32fMbo9UsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPZRA5g47UULHkBySrcAz0LRmh2sVJuIVuYg3UCuNIeclhEsQWPooteyb14ubhCnM43jasNDsD%2FilV6qyhDlKzgn6uC6aUsxkAeE8Vvmz7h8%2FV0AZU73SINS6M4uP9TZN8iRkxNYWfCtGm0GitR2ixULq%2F%2FPuLdRHx07dkP9MtXPPsE0FZAr5TDt3PXNmA9gSwcMW%2FHw46wllvzFavssR5pT8sjK%2Bon%2FMAQ6wPLBDsh2a6d7QpilmXqPqYLXQjNgM5JcxYfyDqAY2UXnrHszqfBrjIQMQMsglKTX1MWWUtVaiZdrCm9a4K3B7s%2FfZGt%2FeK2YpYw21mAwWDXURNxbUxhQ8ZuFGo3bjrFJDrkZXFmt04llOJjMy9iinf6xCeYdde22VmDUJt54eh0FEebAtHfbVwC2DN2bgYZ6VyhwnZqCjrIoyc%2BkRjyG3zzVyMhDdYVCl0m%2FNlv510exr5T%2BvtjMtrphfyCodA38n5ioKCRlC2vgGImlF3J03qnJlU%2FHEFAxyYZT4JW%2BAmuoDsrkzhD46so3fhypkW11DsTcRZVwELxLh5IVO0LQc3XDaQmKutheV2pLok9q4SO7vV2qE8v4jGUOqzq8LviKynTIawHyBxaSRZUPoYffUSPp%2BuXFDeo5%2BpgM96UPYfRMJzh5MQGOqUBgeZOS7oRoXYlbgLRJoOoUPPkptK7TxNcQgcHD2%2F3W1Kb8GTxcoinPoP0Jv8Cs4ni9nTSxqchCFqHBhMd2IvJVujE4WhaYQiId%2FjyeOuOaXp3AQ2lHsJPG%2BuFK1ho0WgjXBvR6RZHqfgh7g9ntjq7jve0R7MOiAUZJ5JmYqasBzXMmlloLWRPMAB5JQ4zwjvir%2Bl0pYadaOsfpkoicbci3uul4drb&X-Amz-Signature=0f4c648f5df4246ddc706c0f54772ba2c7da7ccc8b2511f6dae4adfcae7a03d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWLF3ORO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaYfOLQ1JJXr7tW4qSOjC7moKusyBTIijnmvVQL%2B910AiEAw88TIZq9DszComj%2BkmLiM3aZBRlylPnq6O32fMbo9UsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPZRA5g47UULHkBySrcAz0LRmh2sVJuIVuYg3UCuNIeclhEsQWPooteyb14ubhCnM43jasNDsD%2FilV6qyhDlKzgn6uC6aUsxkAeE8Vvmz7h8%2FV0AZU73SINS6M4uP9TZN8iRkxNYWfCtGm0GitR2ixULq%2F%2FPuLdRHx07dkP9MtXPPsE0FZAr5TDt3PXNmA9gSwcMW%2FHw46wllvzFavssR5pT8sjK%2Bon%2FMAQ6wPLBDsh2a6d7QpilmXqPqYLXQjNgM5JcxYfyDqAY2UXnrHszqfBrjIQMQMsglKTX1MWWUtVaiZdrCm9a4K3B7s%2FfZGt%2FeK2YpYw21mAwWDXURNxbUxhQ8ZuFGo3bjrFJDrkZXFmt04llOJjMy9iinf6xCeYdde22VmDUJt54eh0FEebAtHfbVwC2DN2bgYZ6VyhwnZqCjrIoyc%2BkRjyG3zzVyMhDdYVCl0m%2FNlv510exr5T%2BvtjMtrphfyCodA38n5ioKCRlC2vgGImlF3J03qnJlU%2FHEFAxyYZT4JW%2BAmuoDsrkzhD46so3fhypkW11DsTcRZVwELxLh5IVO0LQc3XDaQmKutheV2pLok9q4SO7vV2qE8v4jGUOqzq8LviKynTIawHyBxaSRZUPoYffUSPp%2BuXFDeo5%2BpgM96UPYfRMJzh5MQGOqUBgeZOS7oRoXYlbgLRJoOoUPPkptK7TxNcQgcHD2%2F3W1Kb8GTxcoinPoP0Jv8Cs4ni9nTSxqchCFqHBhMd2IvJVujE4WhaYQiId%2FjyeOuOaXp3AQ2lHsJPG%2BuFK1ho0WgjXBvR6RZHqfgh7g9ntjq7jve0R7MOiAUZJ5JmYqasBzXMmlloLWRPMAB5JQ4zwjvir%2Bl0pYadaOsfpkoicbci3uul4drb&X-Amz-Signature=6abc51a00b218a307921bbc09c57c2e4e2da31493fd3eb49297fa3159e4ba43b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWLF3ORO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaYfOLQ1JJXr7tW4qSOjC7moKusyBTIijnmvVQL%2B910AiEAw88TIZq9DszComj%2BkmLiM3aZBRlylPnq6O32fMbo9UsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPZRA5g47UULHkBySrcAz0LRmh2sVJuIVuYg3UCuNIeclhEsQWPooteyb14ubhCnM43jasNDsD%2FilV6qyhDlKzgn6uC6aUsxkAeE8Vvmz7h8%2FV0AZU73SINS6M4uP9TZN8iRkxNYWfCtGm0GitR2ixULq%2F%2FPuLdRHx07dkP9MtXPPsE0FZAr5TDt3PXNmA9gSwcMW%2FHw46wllvzFavssR5pT8sjK%2Bon%2FMAQ6wPLBDsh2a6d7QpilmXqPqYLXQjNgM5JcxYfyDqAY2UXnrHszqfBrjIQMQMsglKTX1MWWUtVaiZdrCm9a4K3B7s%2FfZGt%2FeK2YpYw21mAwWDXURNxbUxhQ8ZuFGo3bjrFJDrkZXFmt04llOJjMy9iinf6xCeYdde22VmDUJt54eh0FEebAtHfbVwC2DN2bgYZ6VyhwnZqCjrIoyc%2BkRjyG3zzVyMhDdYVCl0m%2FNlv510exr5T%2BvtjMtrphfyCodA38n5ioKCRlC2vgGImlF3J03qnJlU%2FHEFAxyYZT4JW%2BAmuoDsrkzhD46so3fhypkW11DsTcRZVwELxLh5IVO0LQc3XDaQmKutheV2pLok9q4SO7vV2qE8v4jGUOqzq8LviKynTIawHyBxaSRZUPoYffUSPp%2BuXFDeo5%2BpgM96UPYfRMJzh5MQGOqUBgeZOS7oRoXYlbgLRJoOoUPPkptK7TxNcQgcHD2%2F3W1Kb8GTxcoinPoP0Jv8Cs4ni9nTSxqchCFqHBhMd2IvJVujE4WhaYQiId%2FjyeOuOaXp3AQ2lHsJPG%2BuFK1ho0WgjXBvR6RZHqfgh7g9ntjq7jve0R7MOiAUZJ5JmYqasBzXMmlloLWRPMAB5JQ4zwjvir%2Bl0pYadaOsfpkoicbci3uul4drb&X-Amz-Signature=83c73e4e13882153ebb79be3eb91fbd1562c903da408b4590185f4042f36499e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWLF3ORO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaYfOLQ1JJXr7tW4qSOjC7moKusyBTIijnmvVQL%2B910AiEAw88TIZq9DszComj%2BkmLiM3aZBRlylPnq6O32fMbo9UsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPZRA5g47UULHkBySrcAz0LRmh2sVJuIVuYg3UCuNIeclhEsQWPooteyb14ubhCnM43jasNDsD%2FilV6qyhDlKzgn6uC6aUsxkAeE8Vvmz7h8%2FV0AZU73SINS6M4uP9TZN8iRkxNYWfCtGm0GitR2ixULq%2F%2FPuLdRHx07dkP9MtXPPsE0FZAr5TDt3PXNmA9gSwcMW%2FHw46wllvzFavssR5pT8sjK%2Bon%2FMAQ6wPLBDsh2a6d7QpilmXqPqYLXQjNgM5JcxYfyDqAY2UXnrHszqfBrjIQMQMsglKTX1MWWUtVaiZdrCm9a4K3B7s%2FfZGt%2FeK2YpYw21mAwWDXURNxbUxhQ8ZuFGo3bjrFJDrkZXFmt04llOJjMy9iinf6xCeYdde22VmDUJt54eh0FEebAtHfbVwC2DN2bgYZ6VyhwnZqCjrIoyc%2BkRjyG3zzVyMhDdYVCl0m%2FNlv510exr5T%2BvtjMtrphfyCodA38n5ioKCRlC2vgGImlF3J03qnJlU%2FHEFAxyYZT4JW%2BAmuoDsrkzhD46so3fhypkW11DsTcRZVwELxLh5IVO0LQc3XDaQmKutheV2pLok9q4SO7vV2qE8v4jGUOqzq8LviKynTIawHyBxaSRZUPoYffUSPp%2BuXFDeo5%2BpgM96UPYfRMJzh5MQGOqUBgeZOS7oRoXYlbgLRJoOoUPPkptK7TxNcQgcHD2%2F3W1Kb8GTxcoinPoP0Jv8Cs4ni9nTSxqchCFqHBhMd2IvJVujE4WhaYQiId%2FjyeOuOaXp3AQ2lHsJPG%2BuFK1ho0WgjXBvR6RZHqfgh7g9ntjq7jve0R7MOiAUZJ5JmYqasBzXMmlloLWRPMAB5JQ4zwjvir%2Bl0pYadaOsfpkoicbci3uul4drb&X-Amz-Signature=43386310b13c1f89d89dd77c29ead11abc597b3aef66098ddc48d7df4082894a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWLF3ORO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaYfOLQ1JJXr7tW4qSOjC7moKusyBTIijnmvVQL%2B910AiEAw88TIZq9DszComj%2BkmLiM3aZBRlylPnq6O32fMbo9UsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPZRA5g47UULHkBySrcAz0LRmh2sVJuIVuYg3UCuNIeclhEsQWPooteyb14ubhCnM43jasNDsD%2FilV6qyhDlKzgn6uC6aUsxkAeE8Vvmz7h8%2FV0AZU73SINS6M4uP9TZN8iRkxNYWfCtGm0GitR2ixULq%2F%2FPuLdRHx07dkP9MtXPPsE0FZAr5TDt3PXNmA9gSwcMW%2FHw46wllvzFavssR5pT8sjK%2Bon%2FMAQ6wPLBDsh2a6d7QpilmXqPqYLXQjNgM5JcxYfyDqAY2UXnrHszqfBrjIQMQMsglKTX1MWWUtVaiZdrCm9a4K3B7s%2FfZGt%2FeK2YpYw21mAwWDXURNxbUxhQ8ZuFGo3bjrFJDrkZXFmt04llOJjMy9iinf6xCeYdde22VmDUJt54eh0FEebAtHfbVwC2DN2bgYZ6VyhwnZqCjrIoyc%2BkRjyG3zzVyMhDdYVCl0m%2FNlv510exr5T%2BvtjMtrphfyCodA38n5ioKCRlC2vgGImlF3J03qnJlU%2FHEFAxyYZT4JW%2BAmuoDsrkzhD46so3fhypkW11DsTcRZVwELxLh5IVO0LQc3XDaQmKutheV2pLok9q4SO7vV2qE8v4jGUOqzq8LviKynTIawHyBxaSRZUPoYffUSPp%2BuXFDeo5%2BpgM96UPYfRMJzh5MQGOqUBgeZOS7oRoXYlbgLRJoOoUPPkptK7TxNcQgcHD2%2F3W1Kb8GTxcoinPoP0Jv8Cs4ni9nTSxqchCFqHBhMd2IvJVujE4WhaYQiId%2FjyeOuOaXp3AQ2lHsJPG%2BuFK1ho0WgjXBvR6RZHqfgh7g9ntjq7jve0R7MOiAUZJ5JmYqasBzXMmlloLWRPMAB5JQ4zwjvir%2Bl0pYadaOsfpkoicbci3uul4drb&X-Amz-Signature=0f4c648f5df4246ddc706c0f54772ba2c7da7ccc8b2511f6dae4adfcae7a03d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWLF3ORO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaYfOLQ1JJXr7tW4qSOjC7moKusyBTIijnmvVQL%2B910AiEAw88TIZq9DszComj%2BkmLiM3aZBRlylPnq6O32fMbo9UsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPZRA5g47UULHkBySrcAz0LRmh2sVJuIVuYg3UCuNIeclhEsQWPooteyb14ubhCnM43jasNDsD%2FilV6qyhDlKzgn6uC6aUsxkAeE8Vvmz7h8%2FV0AZU73SINS6M4uP9TZN8iRkxNYWfCtGm0GitR2ixULq%2F%2FPuLdRHx07dkP9MtXPPsE0FZAr5TDt3PXNmA9gSwcMW%2FHw46wllvzFavssR5pT8sjK%2Bon%2FMAQ6wPLBDsh2a6d7QpilmXqPqYLXQjNgM5JcxYfyDqAY2UXnrHszqfBrjIQMQMsglKTX1MWWUtVaiZdrCm9a4K3B7s%2FfZGt%2FeK2YpYw21mAwWDXURNxbUxhQ8ZuFGo3bjrFJDrkZXFmt04llOJjMy9iinf6xCeYdde22VmDUJt54eh0FEebAtHfbVwC2DN2bgYZ6VyhwnZqCjrIoyc%2BkRjyG3zzVyMhDdYVCl0m%2FNlv510exr5T%2BvtjMtrphfyCodA38n5ioKCRlC2vgGImlF3J03qnJlU%2FHEFAxyYZT4JW%2BAmuoDsrkzhD46so3fhypkW11DsTcRZVwELxLh5IVO0LQc3XDaQmKutheV2pLok9q4SO7vV2qE8v4jGUOqzq8LviKynTIawHyBxaSRZUPoYffUSPp%2BuXFDeo5%2BpgM96UPYfRMJzh5MQGOqUBgeZOS7oRoXYlbgLRJoOoUPPkptK7TxNcQgcHD2%2F3W1Kb8GTxcoinPoP0Jv8Cs4ni9nTSxqchCFqHBhMd2IvJVujE4WhaYQiId%2FjyeOuOaXp3AQ2lHsJPG%2BuFK1ho0WgjXBvR6RZHqfgh7g9ntjq7jve0R7MOiAUZJ5JmYqasBzXMmlloLWRPMAB5JQ4zwjvir%2Bl0pYadaOsfpkoicbci3uul4drb&X-Amz-Signature=f4bcb59e463747760e33de86002b8cfc3f1b055ebadb9e761c4d606982f2aaf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWLF3ORO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaYfOLQ1JJXr7tW4qSOjC7moKusyBTIijnmvVQL%2B910AiEAw88TIZq9DszComj%2BkmLiM3aZBRlylPnq6O32fMbo9UsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPZRA5g47UULHkBySrcAz0LRmh2sVJuIVuYg3UCuNIeclhEsQWPooteyb14ubhCnM43jasNDsD%2FilV6qyhDlKzgn6uC6aUsxkAeE8Vvmz7h8%2FV0AZU73SINS6M4uP9TZN8iRkxNYWfCtGm0GitR2ixULq%2F%2FPuLdRHx07dkP9MtXPPsE0FZAr5TDt3PXNmA9gSwcMW%2FHw46wllvzFavssR5pT8sjK%2Bon%2FMAQ6wPLBDsh2a6d7QpilmXqPqYLXQjNgM5JcxYfyDqAY2UXnrHszqfBrjIQMQMsglKTX1MWWUtVaiZdrCm9a4K3B7s%2FfZGt%2FeK2YpYw21mAwWDXURNxbUxhQ8ZuFGo3bjrFJDrkZXFmt04llOJjMy9iinf6xCeYdde22VmDUJt54eh0FEebAtHfbVwC2DN2bgYZ6VyhwnZqCjrIoyc%2BkRjyG3zzVyMhDdYVCl0m%2FNlv510exr5T%2BvtjMtrphfyCodA38n5ioKCRlC2vgGImlF3J03qnJlU%2FHEFAxyYZT4JW%2BAmuoDsrkzhD46so3fhypkW11DsTcRZVwELxLh5IVO0LQc3XDaQmKutheV2pLok9q4SO7vV2qE8v4jGUOqzq8LviKynTIawHyBxaSRZUPoYffUSPp%2BuXFDeo5%2BpgM96UPYfRMJzh5MQGOqUBgeZOS7oRoXYlbgLRJoOoUPPkptK7TxNcQgcHD2%2F3W1Kb8GTxcoinPoP0Jv8Cs4ni9nTSxqchCFqHBhMd2IvJVujE4WhaYQiId%2FjyeOuOaXp3AQ2lHsJPG%2BuFK1ho0WgjXBvR6RZHqfgh7g9ntjq7jve0R7MOiAUZJ5JmYqasBzXMmlloLWRPMAB5JQ4zwjvir%2Bl0pYadaOsfpkoicbci3uul4drb&X-Amz-Signature=1f0136bd4d54ddb4e128ba2506235896eb63d05f01c5bd6fcace0eb1bb63aed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWLF3ORO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaYfOLQ1JJXr7tW4qSOjC7moKusyBTIijnmvVQL%2B910AiEAw88TIZq9DszComj%2BkmLiM3aZBRlylPnq6O32fMbo9UsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPZRA5g47UULHkBySrcAz0LRmh2sVJuIVuYg3UCuNIeclhEsQWPooteyb14ubhCnM43jasNDsD%2FilV6qyhDlKzgn6uC6aUsxkAeE8Vvmz7h8%2FV0AZU73SINS6M4uP9TZN8iRkxNYWfCtGm0GitR2ixULq%2F%2FPuLdRHx07dkP9MtXPPsE0FZAr5TDt3PXNmA9gSwcMW%2FHw46wllvzFavssR5pT8sjK%2Bon%2FMAQ6wPLBDsh2a6d7QpilmXqPqYLXQjNgM5JcxYfyDqAY2UXnrHszqfBrjIQMQMsglKTX1MWWUtVaiZdrCm9a4K3B7s%2FfZGt%2FeK2YpYw21mAwWDXURNxbUxhQ8ZuFGo3bjrFJDrkZXFmt04llOJjMy9iinf6xCeYdde22VmDUJt54eh0FEebAtHfbVwC2DN2bgYZ6VyhwnZqCjrIoyc%2BkRjyG3zzVyMhDdYVCl0m%2FNlv510exr5T%2BvtjMtrphfyCodA38n5ioKCRlC2vgGImlF3J03qnJlU%2FHEFAxyYZT4JW%2BAmuoDsrkzhD46so3fhypkW11DsTcRZVwELxLh5IVO0LQc3XDaQmKutheV2pLok9q4SO7vV2qE8v4jGUOqzq8LviKynTIawHyBxaSRZUPoYffUSPp%2BuXFDeo5%2BpgM96UPYfRMJzh5MQGOqUBgeZOS7oRoXYlbgLRJoOoUPPkptK7TxNcQgcHD2%2F3W1Kb8GTxcoinPoP0Jv8Cs4ni9nTSxqchCFqHBhMd2IvJVujE4WhaYQiId%2FjyeOuOaXp3AQ2lHsJPG%2BuFK1ho0WgjXBvR6RZHqfgh7g9ntjq7jve0R7MOiAUZJ5JmYqasBzXMmlloLWRPMAB5JQ4zwjvir%2Bl0pYadaOsfpkoicbci3uul4drb&X-Amz-Signature=72350bcb80d5f7fcfa96cce424d1b1d8a6eb09ab081a95265f6d7495e5c4a05f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
