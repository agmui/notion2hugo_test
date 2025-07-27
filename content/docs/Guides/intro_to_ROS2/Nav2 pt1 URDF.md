---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T23:33:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T23:33:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSUDZG6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDmxh0K5FJfB8CGeZQKGIBdUSqItxnCNBgrSJ%2BzOCdEuAIgRFExgodIvyKr80LsYNY5ld2kUcdlVTD8VDhBM0IU2Ncq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDi8EOsw6PV7lqeUNCrcA7K0F%2Bb1kdn5lwri%2FVIqjlgc%2B6AwQeqvS%2Bda1uaDf%2FmwRlUrjgdQwAdze9nB%2FylnamVPNxh1V82S9mttUVILQppMc0gzXSxeE%2FdGZMFu1zRmHawPApdDyY%2FHUmDfLBI6P8RfxJ8K0%2BOGUZxvx9wSs1PAt35F0WI%2BAdNkj4HrXI8PsrK0YhL8CRor1Q7n6bmxoBxNtTZW4FnO3L7jfSQQNuym3xxuJrEkJnD3RX1CGsEjcdDXXdgdT%2BRgmUMmV129eJ1nJVSIiBqDvI1voc8bsZkg3EaqOyvELHbKDhPeMSn2BB%2FqnKGnUMjkNyzGrbglcQS%2FG6VVils8ox8N%2FR2BlauDaztCSSHQDzAJlevVFX92Yk%2FbdwTriSTzl2J9ZnLgtkeQqDiPKToO%2FglW4Z%2BxPK6oOsfWhwVkMJsipyr9TLsiazoX%2FlfMdKsv23GlkNkhxu6mmjECHfJbj8S%2F%2BUHYNQQKQmURiX%2F9%2BQVvK4WkAE3RHz%2B0tdL8749LT5c6omTyyqnpBVxg9h7LPGoDDeRbUDISWcM0Au1mKa3rjnkiQD3XEiB8s79Lk7Hr3FNpTtmZAHJ5gyiBcaJ8mBL1Y55jRIwqFXDXw5g6lh6opW8JtqXrjrz72MrcyyxyqwxxMJrgl8QGOqUBMH7UDRYCIudF6VsNDKM5BcTkNemPmMd4J497HlGwaqkWh7vDL1AmSoN%2FPJoVvsQkGGyfIFOUrlGPbGOaYNZJTaKJ1%2FJiLRn%2Fp5F9wIKo0mM5pamPPOPNGQFFxqGbzn3Teo%2BJs6G3gAtRPyKAJHPfULGyXa1rqMbk9MbizGX1pewzTOW48otsI09Pg06jqjQI2bXeconxiRy4qiQVZAZW3gxCnVOP&X-Amz-Signature=d76a5fe5044f255e85480f2e6c1bfcaf9c6828e40c4ef7d6bd039d73d9fd7f89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSUDZG6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDmxh0K5FJfB8CGeZQKGIBdUSqItxnCNBgrSJ%2BzOCdEuAIgRFExgodIvyKr80LsYNY5ld2kUcdlVTD8VDhBM0IU2Ncq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDi8EOsw6PV7lqeUNCrcA7K0F%2Bb1kdn5lwri%2FVIqjlgc%2B6AwQeqvS%2Bda1uaDf%2FmwRlUrjgdQwAdze9nB%2FylnamVPNxh1V82S9mttUVILQppMc0gzXSxeE%2FdGZMFu1zRmHawPApdDyY%2FHUmDfLBI6P8RfxJ8K0%2BOGUZxvx9wSs1PAt35F0WI%2BAdNkj4HrXI8PsrK0YhL8CRor1Q7n6bmxoBxNtTZW4FnO3L7jfSQQNuym3xxuJrEkJnD3RX1CGsEjcdDXXdgdT%2BRgmUMmV129eJ1nJVSIiBqDvI1voc8bsZkg3EaqOyvELHbKDhPeMSn2BB%2FqnKGnUMjkNyzGrbglcQS%2FG6VVils8ox8N%2FR2BlauDaztCSSHQDzAJlevVFX92Yk%2FbdwTriSTzl2J9ZnLgtkeQqDiPKToO%2FglW4Z%2BxPK6oOsfWhwVkMJsipyr9TLsiazoX%2FlfMdKsv23GlkNkhxu6mmjECHfJbj8S%2F%2BUHYNQQKQmURiX%2F9%2BQVvK4WkAE3RHz%2B0tdL8749LT5c6omTyyqnpBVxg9h7LPGoDDeRbUDISWcM0Au1mKa3rjnkiQD3XEiB8s79Lk7Hr3FNpTtmZAHJ5gyiBcaJ8mBL1Y55jRIwqFXDXw5g6lh6opW8JtqXrjrz72MrcyyxyqwxxMJrgl8QGOqUBMH7UDRYCIudF6VsNDKM5BcTkNemPmMd4J497HlGwaqkWh7vDL1AmSoN%2FPJoVvsQkGGyfIFOUrlGPbGOaYNZJTaKJ1%2FJiLRn%2Fp5F9wIKo0mM5pamPPOPNGQFFxqGbzn3Teo%2BJs6G3gAtRPyKAJHPfULGyXa1rqMbk9MbizGX1pewzTOW48otsI09Pg06jqjQI2bXeconxiRy4qiQVZAZW3gxCnVOP&X-Amz-Signature=5638042a2c850f307221af86b272224bdf7853af92505ec6cb4c99c905c76b81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSUDZG6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDmxh0K5FJfB8CGeZQKGIBdUSqItxnCNBgrSJ%2BzOCdEuAIgRFExgodIvyKr80LsYNY5ld2kUcdlVTD8VDhBM0IU2Ncq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDi8EOsw6PV7lqeUNCrcA7K0F%2Bb1kdn5lwri%2FVIqjlgc%2B6AwQeqvS%2Bda1uaDf%2FmwRlUrjgdQwAdze9nB%2FylnamVPNxh1V82S9mttUVILQppMc0gzXSxeE%2FdGZMFu1zRmHawPApdDyY%2FHUmDfLBI6P8RfxJ8K0%2BOGUZxvx9wSs1PAt35F0WI%2BAdNkj4HrXI8PsrK0YhL8CRor1Q7n6bmxoBxNtTZW4FnO3L7jfSQQNuym3xxuJrEkJnD3RX1CGsEjcdDXXdgdT%2BRgmUMmV129eJ1nJVSIiBqDvI1voc8bsZkg3EaqOyvELHbKDhPeMSn2BB%2FqnKGnUMjkNyzGrbglcQS%2FG6VVils8ox8N%2FR2BlauDaztCSSHQDzAJlevVFX92Yk%2FbdwTriSTzl2J9ZnLgtkeQqDiPKToO%2FglW4Z%2BxPK6oOsfWhwVkMJsipyr9TLsiazoX%2FlfMdKsv23GlkNkhxu6mmjECHfJbj8S%2F%2BUHYNQQKQmURiX%2F9%2BQVvK4WkAE3RHz%2B0tdL8749LT5c6omTyyqnpBVxg9h7LPGoDDeRbUDISWcM0Au1mKa3rjnkiQD3XEiB8s79Lk7Hr3FNpTtmZAHJ5gyiBcaJ8mBL1Y55jRIwqFXDXw5g6lh6opW8JtqXrjrz72MrcyyxyqwxxMJrgl8QGOqUBMH7UDRYCIudF6VsNDKM5BcTkNemPmMd4J497HlGwaqkWh7vDL1AmSoN%2FPJoVvsQkGGyfIFOUrlGPbGOaYNZJTaKJ1%2FJiLRn%2Fp5F9wIKo0mM5pamPPOPNGQFFxqGbzn3Teo%2BJs6G3gAtRPyKAJHPfULGyXa1rqMbk9MbizGX1pewzTOW48otsI09Pg06jqjQI2bXeconxiRy4qiQVZAZW3gxCnVOP&X-Amz-Signature=91904176e596f601372228908c87ae16d92ed19c9a0a0163e70914e5e23dff27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSUDZG6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDmxh0K5FJfB8CGeZQKGIBdUSqItxnCNBgrSJ%2BzOCdEuAIgRFExgodIvyKr80LsYNY5ld2kUcdlVTD8VDhBM0IU2Ncq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDi8EOsw6PV7lqeUNCrcA7K0F%2Bb1kdn5lwri%2FVIqjlgc%2B6AwQeqvS%2Bda1uaDf%2FmwRlUrjgdQwAdze9nB%2FylnamVPNxh1V82S9mttUVILQppMc0gzXSxeE%2FdGZMFu1zRmHawPApdDyY%2FHUmDfLBI6P8RfxJ8K0%2BOGUZxvx9wSs1PAt35F0WI%2BAdNkj4HrXI8PsrK0YhL8CRor1Q7n6bmxoBxNtTZW4FnO3L7jfSQQNuym3xxuJrEkJnD3RX1CGsEjcdDXXdgdT%2BRgmUMmV129eJ1nJVSIiBqDvI1voc8bsZkg3EaqOyvELHbKDhPeMSn2BB%2FqnKGnUMjkNyzGrbglcQS%2FG6VVils8ox8N%2FR2BlauDaztCSSHQDzAJlevVFX92Yk%2FbdwTriSTzl2J9ZnLgtkeQqDiPKToO%2FglW4Z%2BxPK6oOsfWhwVkMJsipyr9TLsiazoX%2FlfMdKsv23GlkNkhxu6mmjECHfJbj8S%2F%2BUHYNQQKQmURiX%2F9%2BQVvK4WkAE3RHz%2B0tdL8749LT5c6omTyyqnpBVxg9h7LPGoDDeRbUDISWcM0Au1mKa3rjnkiQD3XEiB8s79Lk7Hr3FNpTtmZAHJ5gyiBcaJ8mBL1Y55jRIwqFXDXw5g6lh6opW8JtqXrjrz72MrcyyxyqwxxMJrgl8QGOqUBMH7UDRYCIudF6VsNDKM5BcTkNemPmMd4J497HlGwaqkWh7vDL1AmSoN%2FPJoVvsQkGGyfIFOUrlGPbGOaYNZJTaKJ1%2FJiLRn%2Fp5F9wIKo0mM5pamPPOPNGQFFxqGbzn3Teo%2BJs6G3gAtRPyKAJHPfULGyXa1rqMbk9MbizGX1pewzTOW48otsI09Pg06jqjQI2bXeconxiRy4qiQVZAZW3gxCnVOP&X-Amz-Signature=4f0da807b6d5f16b2a45d8612359a223a675718791bd5efc7541c844de8ba0e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSUDZG6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDmxh0K5FJfB8CGeZQKGIBdUSqItxnCNBgrSJ%2BzOCdEuAIgRFExgodIvyKr80LsYNY5ld2kUcdlVTD8VDhBM0IU2Ncq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDi8EOsw6PV7lqeUNCrcA7K0F%2Bb1kdn5lwri%2FVIqjlgc%2B6AwQeqvS%2Bda1uaDf%2FmwRlUrjgdQwAdze9nB%2FylnamVPNxh1V82S9mttUVILQppMc0gzXSxeE%2FdGZMFu1zRmHawPApdDyY%2FHUmDfLBI6P8RfxJ8K0%2BOGUZxvx9wSs1PAt35F0WI%2BAdNkj4HrXI8PsrK0YhL8CRor1Q7n6bmxoBxNtTZW4FnO3L7jfSQQNuym3xxuJrEkJnD3RX1CGsEjcdDXXdgdT%2BRgmUMmV129eJ1nJVSIiBqDvI1voc8bsZkg3EaqOyvELHbKDhPeMSn2BB%2FqnKGnUMjkNyzGrbglcQS%2FG6VVils8ox8N%2FR2BlauDaztCSSHQDzAJlevVFX92Yk%2FbdwTriSTzl2J9ZnLgtkeQqDiPKToO%2FglW4Z%2BxPK6oOsfWhwVkMJsipyr9TLsiazoX%2FlfMdKsv23GlkNkhxu6mmjECHfJbj8S%2F%2BUHYNQQKQmURiX%2F9%2BQVvK4WkAE3RHz%2B0tdL8749LT5c6omTyyqnpBVxg9h7LPGoDDeRbUDISWcM0Au1mKa3rjnkiQD3XEiB8s79Lk7Hr3FNpTtmZAHJ5gyiBcaJ8mBL1Y55jRIwqFXDXw5g6lh6opW8JtqXrjrz72MrcyyxyqwxxMJrgl8QGOqUBMH7UDRYCIudF6VsNDKM5BcTkNemPmMd4J497HlGwaqkWh7vDL1AmSoN%2FPJoVvsQkGGyfIFOUrlGPbGOaYNZJTaKJ1%2FJiLRn%2Fp5F9wIKo0mM5pamPPOPNGQFFxqGbzn3Teo%2BJs6G3gAtRPyKAJHPfULGyXa1rqMbk9MbizGX1pewzTOW48otsI09Pg06jqjQI2bXeconxiRy4qiQVZAZW3gxCnVOP&X-Amz-Signature=c7a7f1b2905025967ebff5dd080188d05a3053ffef3688e34318fb4a8371b64b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSUDZG6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDmxh0K5FJfB8CGeZQKGIBdUSqItxnCNBgrSJ%2BzOCdEuAIgRFExgodIvyKr80LsYNY5ld2kUcdlVTD8VDhBM0IU2Ncq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDi8EOsw6PV7lqeUNCrcA7K0F%2Bb1kdn5lwri%2FVIqjlgc%2B6AwQeqvS%2Bda1uaDf%2FmwRlUrjgdQwAdze9nB%2FylnamVPNxh1V82S9mttUVILQppMc0gzXSxeE%2FdGZMFu1zRmHawPApdDyY%2FHUmDfLBI6P8RfxJ8K0%2BOGUZxvx9wSs1PAt35F0WI%2BAdNkj4HrXI8PsrK0YhL8CRor1Q7n6bmxoBxNtTZW4FnO3L7jfSQQNuym3xxuJrEkJnD3RX1CGsEjcdDXXdgdT%2BRgmUMmV129eJ1nJVSIiBqDvI1voc8bsZkg3EaqOyvELHbKDhPeMSn2BB%2FqnKGnUMjkNyzGrbglcQS%2FG6VVils8ox8N%2FR2BlauDaztCSSHQDzAJlevVFX92Yk%2FbdwTriSTzl2J9ZnLgtkeQqDiPKToO%2FglW4Z%2BxPK6oOsfWhwVkMJsipyr9TLsiazoX%2FlfMdKsv23GlkNkhxu6mmjECHfJbj8S%2F%2BUHYNQQKQmURiX%2F9%2BQVvK4WkAE3RHz%2B0tdL8749LT5c6omTyyqnpBVxg9h7LPGoDDeRbUDISWcM0Au1mKa3rjnkiQD3XEiB8s79Lk7Hr3FNpTtmZAHJ5gyiBcaJ8mBL1Y55jRIwqFXDXw5g6lh6opW8JtqXrjrz72MrcyyxyqwxxMJrgl8QGOqUBMH7UDRYCIudF6VsNDKM5BcTkNemPmMd4J497HlGwaqkWh7vDL1AmSoN%2FPJoVvsQkGGyfIFOUrlGPbGOaYNZJTaKJ1%2FJiLRn%2Fp5F9wIKo0mM5pamPPOPNGQFFxqGbzn3Teo%2BJs6G3gAtRPyKAJHPfULGyXa1rqMbk9MbizGX1pewzTOW48otsI09Pg06jqjQI2bXeconxiRy4qiQVZAZW3gxCnVOP&X-Amz-Signature=ad2692c0f8c143f37cfd61b3b3951501c2ec1eb73e8a12966d7b030b462d8bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSUDZG6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDmxh0K5FJfB8CGeZQKGIBdUSqItxnCNBgrSJ%2BzOCdEuAIgRFExgodIvyKr80LsYNY5ld2kUcdlVTD8VDhBM0IU2Ncq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDi8EOsw6PV7lqeUNCrcA7K0F%2Bb1kdn5lwri%2FVIqjlgc%2B6AwQeqvS%2Bda1uaDf%2FmwRlUrjgdQwAdze9nB%2FylnamVPNxh1V82S9mttUVILQppMc0gzXSxeE%2FdGZMFu1zRmHawPApdDyY%2FHUmDfLBI6P8RfxJ8K0%2BOGUZxvx9wSs1PAt35F0WI%2BAdNkj4HrXI8PsrK0YhL8CRor1Q7n6bmxoBxNtTZW4FnO3L7jfSQQNuym3xxuJrEkJnD3RX1CGsEjcdDXXdgdT%2BRgmUMmV129eJ1nJVSIiBqDvI1voc8bsZkg3EaqOyvELHbKDhPeMSn2BB%2FqnKGnUMjkNyzGrbglcQS%2FG6VVils8ox8N%2FR2BlauDaztCSSHQDzAJlevVFX92Yk%2FbdwTriSTzl2J9ZnLgtkeQqDiPKToO%2FglW4Z%2BxPK6oOsfWhwVkMJsipyr9TLsiazoX%2FlfMdKsv23GlkNkhxu6mmjECHfJbj8S%2F%2BUHYNQQKQmURiX%2F9%2BQVvK4WkAE3RHz%2B0tdL8749LT5c6omTyyqnpBVxg9h7LPGoDDeRbUDISWcM0Au1mKa3rjnkiQD3XEiB8s79Lk7Hr3FNpTtmZAHJ5gyiBcaJ8mBL1Y55jRIwqFXDXw5g6lh6opW8JtqXrjrz72MrcyyxyqwxxMJrgl8QGOqUBMH7UDRYCIudF6VsNDKM5BcTkNemPmMd4J497HlGwaqkWh7vDL1AmSoN%2FPJoVvsQkGGyfIFOUrlGPbGOaYNZJTaKJ1%2FJiLRn%2Fp5F9wIKo0mM5pamPPOPNGQFFxqGbzn3Teo%2BJs6G3gAtRPyKAJHPfULGyXa1rqMbk9MbizGX1pewzTOW48otsI09Pg06jqjQI2bXeconxiRy4qiQVZAZW3gxCnVOP&X-Amz-Signature=1988ab03e7a5485041d1bc9aa5237c2dfc92d0bae200eb62ef32d73ca2010db4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSUDZG6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDmxh0K5FJfB8CGeZQKGIBdUSqItxnCNBgrSJ%2BzOCdEuAIgRFExgodIvyKr80LsYNY5ld2kUcdlVTD8VDhBM0IU2Ncq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDi8EOsw6PV7lqeUNCrcA7K0F%2Bb1kdn5lwri%2FVIqjlgc%2B6AwQeqvS%2Bda1uaDf%2FmwRlUrjgdQwAdze9nB%2FylnamVPNxh1V82S9mttUVILQppMc0gzXSxeE%2FdGZMFu1zRmHawPApdDyY%2FHUmDfLBI6P8RfxJ8K0%2BOGUZxvx9wSs1PAt35F0WI%2BAdNkj4HrXI8PsrK0YhL8CRor1Q7n6bmxoBxNtTZW4FnO3L7jfSQQNuym3xxuJrEkJnD3RX1CGsEjcdDXXdgdT%2BRgmUMmV129eJ1nJVSIiBqDvI1voc8bsZkg3EaqOyvELHbKDhPeMSn2BB%2FqnKGnUMjkNyzGrbglcQS%2FG6VVils8ox8N%2FR2BlauDaztCSSHQDzAJlevVFX92Yk%2FbdwTriSTzl2J9ZnLgtkeQqDiPKToO%2FglW4Z%2BxPK6oOsfWhwVkMJsipyr9TLsiazoX%2FlfMdKsv23GlkNkhxu6mmjECHfJbj8S%2F%2BUHYNQQKQmURiX%2F9%2BQVvK4WkAE3RHz%2B0tdL8749LT5c6omTyyqnpBVxg9h7LPGoDDeRbUDISWcM0Au1mKa3rjnkiQD3XEiB8s79Lk7Hr3FNpTtmZAHJ5gyiBcaJ8mBL1Y55jRIwqFXDXw5g6lh6opW8JtqXrjrz72MrcyyxyqwxxMJrgl8QGOqUBMH7UDRYCIudF6VsNDKM5BcTkNemPmMd4J497HlGwaqkWh7vDL1AmSoN%2FPJoVvsQkGGyfIFOUrlGPbGOaYNZJTaKJ1%2FJiLRn%2Fp5F9wIKo0mM5pamPPOPNGQFFxqGbzn3Teo%2BJs6G3gAtRPyKAJHPfULGyXa1rqMbk9MbizGX1pewzTOW48otsI09Pg06jqjQI2bXeconxiRy4qiQVZAZW3gxCnVOP&X-Amz-Signature=b9aaac3e4db537038005912a31da79ddcc0c078880d2387531e43b02c6a5b196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSUDZG6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDmxh0K5FJfB8CGeZQKGIBdUSqItxnCNBgrSJ%2BzOCdEuAIgRFExgodIvyKr80LsYNY5ld2kUcdlVTD8VDhBM0IU2Ncq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDi8EOsw6PV7lqeUNCrcA7K0F%2Bb1kdn5lwri%2FVIqjlgc%2B6AwQeqvS%2Bda1uaDf%2FmwRlUrjgdQwAdze9nB%2FylnamVPNxh1V82S9mttUVILQppMc0gzXSxeE%2FdGZMFu1zRmHawPApdDyY%2FHUmDfLBI6P8RfxJ8K0%2BOGUZxvx9wSs1PAt35F0WI%2BAdNkj4HrXI8PsrK0YhL8CRor1Q7n6bmxoBxNtTZW4FnO3L7jfSQQNuym3xxuJrEkJnD3RX1CGsEjcdDXXdgdT%2BRgmUMmV129eJ1nJVSIiBqDvI1voc8bsZkg3EaqOyvELHbKDhPeMSn2BB%2FqnKGnUMjkNyzGrbglcQS%2FG6VVils8ox8N%2FR2BlauDaztCSSHQDzAJlevVFX92Yk%2FbdwTriSTzl2J9ZnLgtkeQqDiPKToO%2FglW4Z%2BxPK6oOsfWhwVkMJsipyr9TLsiazoX%2FlfMdKsv23GlkNkhxu6mmjECHfJbj8S%2F%2BUHYNQQKQmURiX%2F9%2BQVvK4WkAE3RHz%2B0tdL8749LT5c6omTyyqnpBVxg9h7LPGoDDeRbUDISWcM0Au1mKa3rjnkiQD3XEiB8s79Lk7Hr3FNpTtmZAHJ5gyiBcaJ8mBL1Y55jRIwqFXDXw5g6lh6opW8JtqXrjrz72MrcyyxyqwxxMJrgl8QGOqUBMH7UDRYCIudF6VsNDKM5BcTkNemPmMd4J497HlGwaqkWh7vDL1AmSoN%2FPJoVvsQkGGyfIFOUrlGPbGOaYNZJTaKJ1%2FJiLRn%2Fp5F9wIKo0mM5pamPPOPNGQFFxqGbzn3Teo%2BJs6G3gAtRPyKAJHPfULGyXa1rqMbk9MbizGX1pewzTOW48otsI09Pg06jqjQI2bXeconxiRy4qiQVZAZW3gxCnVOP&X-Amz-Signature=16732b5601df5bbf94ee50d6ebc91816185dffc66d8a26ab3fe0cf501f9aa97f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSUDZG6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDmxh0K5FJfB8CGeZQKGIBdUSqItxnCNBgrSJ%2BzOCdEuAIgRFExgodIvyKr80LsYNY5ld2kUcdlVTD8VDhBM0IU2Ncq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDi8EOsw6PV7lqeUNCrcA7K0F%2Bb1kdn5lwri%2FVIqjlgc%2B6AwQeqvS%2Bda1uaDf%2FmwRlUrjgdQwAdze9nB%2FylnamVPNxh1V82S9mttUVILQppMc0gzXSxeE%2FdGZMFu1zRmHawPApdDyY%2FHUmDfLBI6P8RfxJ8K0%2BOGUZxvx9wSs1PAt35F0WI%2BAdNkj4HrXI8PsrK0YhL8CRor1Q7n6bmxoBxNtTZW4FnO3L7jfSQQNuym3xxuJrEkJnD3RX1CGsEjcdDXXdgdT%2BRgmUMmV129eJ1nJVSIiBqDvI1voc8bsZkg3EaqOyvELHbKDhPeMSn2BB%2FqnKGnUMjkNyzGrbglcQS%2FG6VVils8ox8N%2FR2BlauDaztCSSHQDzAJlevVFX92Yk%2FbdwTriSTzl2J9ZnLgtkeQqDiPKToO%2FglW4Z%2BxPK6oOsfWhwVkMJsipyr9TLsiazoX%2FlfMdKsv23GlkNkhxu6mmjECHfJbj8S%2F%2BUHYNQQKQmURiX%2F9%2BQVvK4WkAE3RHz%2B0tdL8749LT5c6omTyyqnpBVxg9h7LPGoDDeRbUDISWcM0Au1mKa3rjnkiQD3XEiB8s79Lk7Hr3FNpTtmZAHJ5gyiBcaJ8mBL1Y55jRIwqFXDXw5g6lh6opW8JtqXrjrz72MrcyyxyqwxxMJrgl8QGOqUBMH7UDRYCIudF6VsNDKM5BcTkNemPmMd4J497HlGwaqkWh7vDL1AmSoN%2FPJoVvsQkGGyfIFOUrlGPbGOaYNZJTaKJ1%2FJiLRn%2Fp5F9wIKo0mM5pamPPOPNGQFFxqGbzn3Teo%2BJs6G3gAtRPyKAJHPfULGyXa1rqMbk9MbizGX1pewzTOW48otsI09Pg06jqjQI2bXeconxiRy4qiQVZAZW3gxCnVOP&X-Amz-Signature=cdb4cd41c701b786646a7cc84d1b00c2dedd99af51cc5ffe2c96e7b4acb123b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

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
      
      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
      </collision>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSUDZG6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDmxh0K5FJfB8CGeZQKGIBdUSqItxnCNBgrSJ%2BzOCdEuAIgRFExgodIvyKr80LsYNY5ld2kUcdlVTD8VDhBM0IU2Ncq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDi8EOsw6PV7lqeUNCrcA7K0F%2Bb1kdn5lwri%2FVIqjlgc%2B6AwQeqvS%2Bda1uaDf%2FmwRlUrjgdQwAdze9nB%2FylnamVPNxh1V82S9mttUVILQppMc0gzXSxeE%2FdGZMFu1zRmHawPApdDyY%2FHUmDfLBI6P8RfxJ8K0%2BOGUZxvx9wSs1PAt35F0WI%2BAdNkj4HrXI8PsrK0YhL8CRor1Q7n6bmxoBxNtTZW4FnO3L7jfSQQNuym3xxuJrEkJnD3RX1CGsEjcdDXXdgdT%2BRgmUMmV129eJ1nJVSIiBqDvI1voc8bsZkg3EaqOyvELHbKDhPeMSn2BB%2FqnKGnUMjkNyzGrbglcQS%2FG6VVils8ox8N%2FR2BlauDaztCSSHQDzAJlevVFX92Yk%2FbdwTriSTzl2J9ZnLgtkeQqDiPKToO%2FglW4Z%2BxPK6oOsfWhwVkMJsipyr9TLsiazoX%2FlfMdKsv23GlkNkhxu6mmjECHfJbj8S%2F%2BUHYNQQKQmURiX%2F9%2BQVvK4WkAE3RHz%2B0tdL8749LT5c6omTyyqnpBVxg9h7LPGoDDeRbUDISWcM0Au1mKa3rjnkiQD3XEiB8s79Lk7Hr3FNpTtmZAHJ5gyiBcaJ8mBL1Y55jRIwqFXDXw5g6lh6opW8JtqXrjrz72MrcyyxyqwxxMJrgl8QGOqUBMH7UDRYCIudF6VsNDKM5BcTkNemPmMd4J497HlGwaqkWh7vDL1AmSoN%2FPJoVvsQkGGyfIFOUrlGPbGOaYNZJTaKJ1%2FJiLRn%2Fp5F9wIKo0mM5pamPPOPNGQFFxqGbzn3Teo%2BJs6G3gAtRPyKAJHPfULGyXa1rqMbk9MbizGX1pewzTOW48otsI09Pg06jqjQI2bXeconxiRy4qiQVZAZW3gxCnVOP&X-Amz-Signature=57dfe204c9bfea882d3bb1a205913258d69b421f4fa0f09378fbc5660d6f4652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSUDZG6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDmxh0K5FJfB8CGeZQKGIBdUSqItxnCNBgrSJ%2BzOCdEuAIgRFExgodIvyKr80LsYNY5ld2kUcdlVTD8VDhBM0IU2Ncq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDi8EOsw6PV7lqeUNCrcA7K0F%2Bb1kdn5lwri%2FVIqjlgc%2B6AwQeqvS%2Bda1uaDf%2FmwRlUrjgdQwAdze9nB%2FylnamVPNxh1V82S9mttUVILQppMc0gzXSxeE%2FdGZMFu1zRmHawPApdDyY%2FHUmDfLBI6P8RfxJ8K0%2BOGUZxvx9wSs1PAt35F0WI%2BAdNkj4HrXI8PsrK0YhL8CRor1Q7n6bmxoBxNtTZW4FnO3L7jfSQQNuym3xxuJrEkJnD3RX1CGsEjcdDXXdgdT%2BRgmUMmV129eJ1nJVSIiBqDvI1voc8bsZkg3EaqOyvELHbKDhPeMSn2BB%2FqnKGnUMjkNyzGrbglcQS%2FG6VVils8ox8N%2FR2BlauDaztCSSHQDzAJlevVFX92Yk%2FbdwTriSTzl2J9ZnLgtkeQqDiPKToO%2FglW4Z%2BxPK6oOsfWhwVkMJsipyr9TLsiazoX%2FlfMdKsv23GlkNkhxu6mmjECHfJbj8S%2F%2BUHYNQQKQmURiX%2F9%2BQVvK4WkAE3RHz%2B0tdL8749LT5c6omTyyqnpBVxg9h7LPGoDDeRbUDISWcM0Au1mKa3rjnkiQD3XEiB8s79Lk7Hr3FNpTtmZAHJ5gyiBcaJ8mBL1Y55jRIwqFXDXw5g6lh6opW8JtqXrjrz72MrcyyxyqwxxMJrgl8QGOqUBMH7UDRYCIudF6VsNDKM5BcTkNemPmMd4J497HlGwaqkWh7vDL1AmSoN%2FPJoVvsQkGGyfIFOUrlGPbGOaYNZJTaKJ1%2FJiLRn%2Fp5F9wIKo0mM5pamPPOPNGQFFxqGbzn3Teo%2BJs6G3gAtRPyKAJHPfULGyXa1rqMbk9MbizGX1pewzTOW48otsI09Pg06jqjQI2bXeconxiRy4qiQVZAZW3gxCnVOP&X-Amz-Signature=921547aed0170ecc33030668f7908e0ed1386fb60eae24f2054a3d12de84b5f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSUDZG6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDmxh0K5FJfB8CGeZQKGIBdUSqItxnCNBgrSJ%2BzOCdEuAIgRFExgodIvyKr80LsYNY5ld2kUcdlVTD8VDhBM0IU2Ncq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDi8EOsw6PV7lqeUNCrcA7K0F%2Bb1kdn5lwri%2FVIqjlgc%2B6AwQeqvS%2Bda1uaDf%2FmwRlUrjgdQwAdze9nB%2FylnamVPNxh1V82S9mttUVILQppMc0gzXSxeE%2FdGZMFu1zRmHawPApdDyY%2FHUmDfLBI6P8RfxJ8K0%2BOGUZxvx9wSs1PAt35F0WI%2BAdNkj4HrXI8PsrK0YhL8CRor1Q7n6bmxoBxNtTZW4FnO3L7jfSQQNuym3xxuJrEkJnD3RX1CGsEjcdDXXdgdT%2BRgmUMmV129eJ1nJVSIiBqDvI1voc8bsZkg3EaqOyvELHbKDhPeMSn2BB%2FqnKGnUMjkNyzGrbglcQS%2FG6VVils8ox8N%2FR2BlauDaztCSSHQDzAJlevVFX92Yk%2FbdwTriSTzl2J9ZnLgtkeQqDiPKToO%2FglW4Z%2BxPK6oOsfWhwVkMJsipyr9TLsiazoX%2FlfMdKsv23GlkNkhxu6mmjECHfJbj8S%2F%2BUHYNQQKQmURiX%2F9%2BQVvK4WkAE3RHz%2B0tdL8749LT5c6omTyyqnpBVxg9h7LPGoDDeRbUDISWcM0Au1mKa3rjnkiQD3XEiB8s79Lk7Hr3FNpTtmZAHJ5gyiBcaJ8mBL1Y55jRIwqFXDXw5g6lh6opW8JtqXrjrz72MrcyyxyqwxxMJrgl8QGOqUBMH7UDRYCIudF6VsNDKM5BcTkNemPmMd4J497HlGwaqkWh7vDL1AmSoN%2FPJoVvsQkGGyfIFOUrlGPbGOaYNZJTaKJ1%2FJiLRn%2Fp5F9wIKo0mM5pamPPOPNGQFFxqGbzn3Teo%2BJs6G3gAtRPyKAJHPfULGyXa1rqMbk9MbizGX1pewzTOW48otsI09Pg06jqjQI2bXeconxiRy4qiQVZAZW3gxCnVOP&X-Amz-Signature=c35f7655c69de3e6b9fa012b61f10cf53d6be2177c26c8e9748604407d25c346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSUDZG6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDmxh0K5FJfB8CGeZQKGIBdUSqItxnCNBgrSJ%2BzOCdEuAIgRFExgodIvyKr80LsYNY5ld2kUcdlVTD8VDhBM0IU2Ncq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDi8EOsw6PV7lqeUNCrcA7K0F%2Bb1kdn5lwri%2FVIqjlgc%2B6AwQeqvS%2Bda1uaDf%2FmwRlUrjgdQwAdze9nB%2FylnamVPNxh1V82S9mttUVILQppMc0gzXSxeE%2FdGZMFu1zRmHawPApdDyY%2FHUmDfLBI6P8RfxJ8K0%2BOGUZxvx9wSs1PAt35F0WI%2BAdNkj4HrXI8PsrK0YhL8CRor1Q7n6bmxoBxNtTZW4FnO3L7jfSQQNuym3xxuJrEkJnD3RX1CGsEjcdDXXdgdT%2BRgmUMmV129eJ1nJVSIiBqDvI1voc8bsZkg3EaqOyvELHbKDhPeMSn2BB%2FqnKGnUMjkNyzGrbglcQS%2FG6VVils8ox8N%2FR2BlauDaztCSSHQDzAJlevVFX92Yk%2FbdwTriSTzl2J9ZnLgtkeQqDiPKToO%2FglW4Z%2BxPK6oOsfWhwVkMJsipyr9TLsiazoX%2FlfMdKsv23GlkNkhxu6mmjECHfJbj8S%2F%2BUHYNQQKQmURiX%2F9%2BQVvK4WkAE3RHz%2B0tdL8749LT5c6omTyyqnpBVxg9h7LPGoDDeRbUDISWcM0Au1mKa3rjnkiQD3XEiB8s79Lk7Hr3FNpTtmZAHJ5gyiBcaJ8mBL1Y55jRIwqFXDXw5g6lh6opW8JtqXrjrz72MrcyyxyqwxxMJrgl8QGOqUBMH7UDRYCIudF6VsNDKM5BcTkNemPmMd4J497HlGwaqkWh7vDL1AmSoN%2FPJoVvsQkGGyfIFOUrlGPbGOaYNZJTaKJ1%2FJiLRn%2Fp5F9wIKo0mM5pamPPOPNGQFFxqGbzn3Teo%2BJs6G3gAtRPyKAJHPfULGyXa1rqMbk9MbizGX1pewzTOW48otsI09Pg06jqjQI2bXeconxiRy4qiQVZAZW3gxCnVOP&X-Amz-Signature=cab9772e210340ca6a117286f8caa29a06ab1cfd8bf9d2b677d179aa3450b613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOFUMWGG%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBQpowVDHNRD4ug7p8ZrpwT%2FWSA3gF9yn%2B%2Bl8Ftvah5GAiEA%2BxyrhO7Y5jMrqAUGwEUEGly6moSlktiqB6Pm2Tm2M4gq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFHlvVIl5aDgZsG4%2FircA8aZ1Yj2cC1GuNFWmYlgsgvufyjB33kcyZR4x3RVrZT0d6M5AsEv1Y2yl6PdXw5jrzc%2B4bGajyqTpNE1e0Q6zC7Fjoxohsk1e9cegq%2F9rfUT3q2ROFyoLk%2ByShZswJHaSNkAGlRDjmYL9UYMzpToxMO%2B3IhOk%2FphjW%2BmxVENOuQOPolxcJMTVmOX3hhgKWitdrjWcFBvnuyKpoYfK4i6Hu4%2BYlFCyr%2BHI7AlJyX33kOcBa6f6CY49EIUgEqS%2BGHu0tguCjk%2BQpWdEmys2Xz%2FHa2ChvtFWlRHB2sORD38J0FfFOdKsy4m1gza2VSy6IU%2F%2BBSqrwR19eKykMdBKw1Of6lz%2Ft3xUyfNggiyGdRVQqGC3NQkgGujM378fpF7a5WFTo6yncuh5wKoMDRCU0v8jTAMdHEFkxhBKoZRm5h4coZElmn8P7s6E8H%2BSdlg8p3wPOuU4dQuYVRTMA3sa2O%2BFpMv5kbfhCqVKIXVVgPyQw7gE3YCGnOGcuhlcN9iwCpG1sS5r3VIE7sQRU%2Bf%2BnS6pybK2dxli5jZqgVk3nuSDA8CTkAIDu9bNf6OASixCfjg3Ka9bsnW%2BLAN9%2Fam39y%2Fo04Hr0aO0rKKciQiJAR%2FRpVKSpSr%2Bq8rXkJY8AdbMKfdl8QGOqUBj5Iwi5dBkwymb8w7Tns8BINikuY6IXrBZQjr8nhmJwzeewZIAN0iszuNVfhvTnzKLw6UMm4qBILTsP4C%2BBLriyY5FiQ2KqQvwDczwC4VNj73W9WjOWGMV%2FrMpKaXlBNpeMI5zCxC8b4hD5wmYOZLwoDh2YyJFUBQT6YggquAbzT4UJ%2B4NQqKu7YBDERMK%2FkvVe9s1%2FsBFdEvVyc8PJQkW1h1hNww&X-Amz-Signature=f3e2bfc57e5fa9c398dca98dd427a73a1966164d8b3cc8349ea233eb955d600e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOFUMWGG%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBQpowVDHNRD4ug7p8ZrpwT%2FWSA3gF9yn%2B%2Bl8Ftvah5GAiEA%2BxyrhO7Y5jMrqAUGwEUEGly6moSlktiqB6Pm2Tm2M4gq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFHlvVIl5aDgZsG4%2FircA8aZ1Yj2cC1GuNFWmYlgsgvufyjB33kcyZR4x3RVrZT0d6M5AsEv1Y2yl6PdXw5jrzc%2B4bGajyqTpNE1e0Q6zC7Fjoxohsk1e9cegq%2F9rfUT3q2ROFyoLk%2ByShZswJHaSNkAGlRDjmYL9UYMzpToxMO%2B3IhOk%2FphjW%2BmxVENOuQOPolxcJMTVmOX3hhgKWitdrjWcFBvnuyKpoYfK4i6Hu4%2BYlFCyr%2BHI7AlJyX33kOcBa6f6CY49EIUgEqS%2BGHu0tguCjk%2BQpWdEmys2Xz%2FHa2ChvtFWlRHB2sORD38J0FfFOdKsy4m1gza2VSy6IU%2F%2BBSqrwR19eKykMdBKw1Of6lz%2Ft3xUyfNggiyGdRVQqGC3NQkgGujM378fpF7a5WFTo6yncuh5wKoMDRCU0v8jTAMdHEFkxhBKoZRm5h4coZElmn8P7s6E8H%2BSdlg8p3wPOuU4dQuYVRTMA3sa2O%2BFpMv5kbfhCqVKIXVVgPyQw7gE3YCGnOGcuhlcN9iwCpG1sS5r3VIE7sQRU%2Bf%2BnS6pybK2dxli5jZqgVk3nuSDA8CTkAIDu9bNf6OASixCfjg3Ka9bsnW%2BLAN9%2Fam39y%2Fo04Hr0aO0rKKciQiJAR%2FRpVKSpSr%2Bq8rXkJY8AdbMKfdl8QGOqUBj5Iwi5dBkwymb8w7Tns8BINikuY6IXrBZQjr8nhmJwzeewZIAN0iszuNVfhvTnzKLw6UMm4qBILTsP4C%2BBLriyY5FiQ2KqQvwDczwC4VNj73W9WjOWGMV%2FrMpKaXlBNpeMI5zCxC8b4hD5wmYOZLwoDh2YyJFUBQT6YggquAbzT4UJ%2B4NQqKu7YBDERMK%2FkvVe9s1%2FsBFdEvVyc8PJQkW1h1hNww&X-Amz-Signature=5cee6f18c518f52e022b52485e03952d52283bc36e381c3ff6be313aec126336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOFUMWGG%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBQpowVDHNRD4ug7p8ZrpwT%2FWSA3gF9yn%2B%2Bl8Ftvah5GAiEA%2BxyrhO7Y5jMrqAUGwEUEGly6moSlktiqB6Pm2Tm2M4gq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFHlvVIl5aDgZsG4%2FircA8aZ1Yj2cC1GuNFWmYlgsgvufyjB33kcyZR4x3RVrZT0d6M5AsEv1Y2yl6PdXw5jrzc%2B4bGajyqTpNE1e0Q6zC7Fjoxohsk1e9cegq%2F9rfUT3q2ROFyoLk%2ByShZswJHaSNkAGlRDjmYL9UYMzpToxMO%2B3IhOk%2FphjW%2BmxVENOuQOPolxcJMTVmOX3hhgKWitdrjWcFBvnuyKpoYfK4i6Hu4%2BYlFCyr%2BHI7AlJyX33kOcBa6f6CY49EIUgEqS%2BGHu0tguCjk%2BQpWdEmys2Xz%2FHa2ChvtFWlRHB2sORD38J0FfFOdKsy4m1gza2VSy6IU%2F%2BBSqrwR19eKykMdBKw1Of6lz%2Ft3xUyfNggiyGdRVQqGC3NQkgGujM378fpF7a5WFTo6yncuh5wKoMDRCU0v8jTAMdHEFkxhBKoZRm5h4coZElmn8P7s6E8H%2BSdlg8p3wPOuU4dQuYVRTMA3sa2O%2BFpMv5kbfhCqVKIXVVgPyQw7gE3YCGnOGcuhlcN9iwCpG1sS5r3VIE7sQRU%2Bf%2BnS6pybK2dxli5jZqgVk3nuSDA8CTkAIDu9bNf6OASixCfjg3Ka9bsnW%2BLAN9%2Fam39y%2Fo04Hr0aO0rKKciQiJAR%2FRpVKSpSr%2Bq8rXkJY8AdbMKfdl8QGOqUBj5Iwi5dBkwymb8w7Tns8BINikuY6IXrBZQjr8nhmJwzeewZIAN0iszuNVfhvTnzKLw6UMm4qBILTsP4C%2BBLriyY5FiQ2KqQvwDczwC4VNj73W9WjOWGMV%2FrMpKaXlBNpeMI5zCxC8b4hD5wmYOZLwoDh2YyJFUBQT6YggquAbzT4UJ%2B4NQqKu7YBDERMK%2FkvVe9s1%2FsBFdEvVyc8PJQkW1h1hNww&X-Amz-Signature=7022cbf5c5919ad42fee1139d5cf3b14fa303a8c293e163172a1f3fca4952df8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOFUMWGG%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBQpowVDHNRD4ug7p8ZrpwT%2FWSA3gF9yn%2B%2Bl8Ftvah5GAiEA%2BxyrhO7Y5jMrqAUGwEUEGly6moSlktiqB6Pm2Tm2M4gq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFHlvVIl5aDgZsG4%2FircA8aZ1Yj2cC1GuNFWmYlgsgvufyjB33kcyZR4x3RVrZT0d6M5AsEv1Y2yl6PdXw5jrzc%2B4bGajyqTpNE1e0Q6zC7Fjoxohsk1e9cegq%2F9rfUT3q2ROFyoLk%2ByShZswJHaSNkAGlRDjmYL9UYMzpToxMO%2B3IhOk%2FphjW%2BmxVENOuQOPolxcJMTVmOX3hhgKWitdrjWcFBvnuyKpoYfK4i6Hu4%2BYlFCyr%2BHI7AlJyX33kOcBa6f6CY49EIUgEqS%2BGHu0tguCjk%2BQpWdEmys2Xz%2FHa2ChvtFWlRHB2sORD38J0FfFOdKsy4m1gza2VSy6IU%2F%2BBSqrwR19eKykMdBKw1Of6lz%2Ft3xUyfNggiyGdRVQqGC3NQkgGujM378fpF7a5WFTo6yncuh5wKoMDRCU0v8jTAMdHEFkxhBKoZRm5h4coZElmn8P7s6E8H%2BSdlg8p3wPOuU4dQuYVRTMA3sa2O%2BFpMv5kbfhCqVKIXVVgPyQw7gE3YCGnOGcuhlcN9iwCpG1sS5r3VIE7sQRU%2Bf%2BnS6pybK2dxli5jZqgVk3nuSDA8CTkAIDu9bNf6OASixCfjg3Ka9bsnW%2BLAN9%2Fam39y%2Fo04Hr0aO0rKKciQiJAR%2FRpVKSpSr%2Bq8rXkJY8AdbMKfdl8QGOqUBj5Iwi5dBkwymb8w7Tns8BINikuY6IXrBZQjr8nhmJwzeewZIAN0iszuNVfhvTnzKLw6UMm4qBILTsP4C%2BBLriyY5FiQ2KqQvwDczwC4VNj73W9WjOWGMV%2FrMpKaXlBNpeMI5zCxC8b4hD5wmYOZLwoDh2YyJFUBQT6YggquAbzT4UJ%2B4NQqKu7YBDERMK%2FkvVe9s1%2FsBFdEvVyc8PJQkW1h1hNww&X-Amz-Signature=1575fce158d0800009b59050bd6505cd5727a4f41ea8b83782994a45be6d299c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOFUMWGG%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBQpowVDHNRD4ug7p8ZrpwT%2FWSA3gF9yn%2B%2Bl8Ftvah5GAiEA%2BxyrhO7Y5jMrqAUGwEUEGly6moSlktiqB6Pm2Tm2M4gq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFHlvVIl5aDgZsG4%2FircA8aZ1Yj2cC1GuNFWmYlgsgvufyjB33kcyZR4x3RVrZT0d6M5AsEv1Y2yl6PdXw5jrzc%2B4bGajyqTpNE1e0Q6zC7Fjoxohsk1e9cegq%2F9rfUT3q2ROFyoLk%2ByShZswJHaSNkAGlRDjmYL9UYMzpToxMO%2B3IhOk%2FphjW%2BmxVENOuQOPolxcJMTVmOX3hhgKWitdrjWcFBvnuyKpoYfK4i6Hu4%2BYlFCyr%2BHI7AlJyX33kOcBa6f6CY49EIUgEqS%2BGHu0tguCjk%2BQpWdEmys2Xz%2FHa2ChvtFWlRHB2sORD38J0FfFOdKsy4m1gza2VSy6IU%2F%2BBSqrwR19eKykMdBKw1Of6lz%2Ft3xUyfNggiyGdRVQqGC3NQkgGujM378fpF7a5WFTo6yncuh5wKoMDRCU0v8jTAMdHEFkxhBKoZRm5h4coZElmn8P7s6E8H%2BSdlg8p3wPOuU4dQuYVRTMA3sa2O%2BFpMv5kbfhCqVKIXVVgPyQw7gE3YCGnOGcuhlcN9iwCpG1sS5r3VIE7sQRU%2Bf%2BnS6pybK2dxli5jZqgVk3nuSDA8CTkAIDu9bNf6OASixCfjg3Ka9bsnW%2BLAN9%2Fam39y%2Fo04Hr0aO0rKKciQiJAR%2FRpVKSpSr%2Bq8rXkJY8AdbMKfdl8QGOqUBj5Iwi5dBkwymb8w7Tns8BINikuY6IXrBZQjr8nhmJwzeewZIAN0iszuNVfhvTnzKLw6UMm4qBILTsP4C%2BBLriyY5FiQ2KqQvwDczwC4VNj73W9WjOWGMV%2FrMpKaXlBNpeMI5zCxC8b4hD5wmYOZLwoDh2YyJFUBQT6YggquAbzT4UJ%2B4NQqKu7YBDERMK%2FkvVe9s1%2FsBFdEvVyc8PJQkW1h1hNww&X-Amz-Signature=f9ac71104525d8427b89eadb7c88d5e8bdb25b29e52293063794d4b4dccd878e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOFUMWGG%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBQpowVDHNRD4ug7p8ZrpwT%2FWSA3gF9yn%2B%2Bl8Ftvah5GAiEA%2BxyrhO7Y5jMrqAUGwEUEGly6moSlktiqB6Pm2Tm2M4gq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFHlvVIl5aDgZsG4%2FircA8aZ1Yj2cC1GuNFWmYlgsgvufyjB33kcyZR4x3RVrZT0d6M5AsEv1Y2yl6PdXw5jrzc%2B4bGajyqTpNE1e0Q6zC7Fjoxohsk1e9cegq%2F9rfUT3q2ROFyoLk%2ByShZswJHaSNkAGlRDjmYL9UYMzpToxMO%2B3IhOk%2FphjW%2BmxVENOuQOPolxcJMTVmOX3hhgKWitdrjWcFBvnuyKpoYfK4i6Hu4%2BYlFCyr%2BHI7AlJyX33kOcBa6f6CY49EIUgEqS%2BGHu0tguCjk%2BQpWdEmys2Xz%2FHa2ChvtFWlRHB2sORD38J0FfFOdKsy4m1gza2VSy6IU%2F%2BBSqrwR19eKykMdBKw1Of6lz%2Ft3xUyfNggiyGdRVQqGC3NQkgGujM378fpF7a5WFTo6yncuh5wKoMDRCU0v8jTAMdHEFkxhBKoZRm5h4coZElmn8P7s6E8H%2BSdlg8p3wPOuU4dQuYVRTMA3sa2O%2BFpMv5kbfhCqVKIXVVgPyQw7gE3YCGnOGcuhlcN9iwCpG1sS5r3VIE7sQRU%2Bf%2BnS6pybK2dxli5jZqgVk3nuSDA8CTkAIDu9bNf6OASixCfjg3Ka9bsnW%2BLAN9%2Fam39y%2Fo04Hr0aO0rKKciQiJAR%2FRpVKSpSr%2Bq8rXkJY8AdbMKfdl8QGOqUBj5Iwi5dBkwymb8w7Tns8BINikuY6IXrBZQjr8nhmJwzeewZIAN0iszuNVfhvTnzKLw6UMm4qBILTsP4C%2BBLriyY5FiQ2KqQvwDczwC4VNj73W9WjOWGMV%2FrMpKaXlBNpeMI5zCxC8b4hD5wmYOZLwoDh2YyJFUBQT6YggquAbzT4UJ%2B4NQqKu7YBDERMK%2FkvVe9s1%2FsBFdEvVyc8PJQkW1h1hNww&X-Amz-Signature=e7ae371ce5771be86d141a63d6e15c9e18d5cb7cb882f97a088bb6a948cbd2d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
