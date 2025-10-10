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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5VVTML%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCdGklvTCfcd0ORYxa9APWyLRF5wDu0M%2F95HDgRNQngzQIhAMH4shuqPvIIpISb3Yo6paNynrx6NAHIxOoXO7I8WT01KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0K2lLUNKdJLk%2F1NEq3AOyoEOpLeQNqUaEbWBumxBXQyx7kijH4hnMmNTsjtmlEDnEfHRuqHVpw4axpxq6ZKg18FiQeESWmWW8n6WSMCqlUezzYQ6uFnjtXA0tk06GnOu0VcNbNyoogsZxez2tcdi706sznNBnCsF3oJ%2FPCZaHElsB%2FqZB1XEfoV6%2FubjKBOrAzRfC4WLsdezwhIn16jaEgl7E55lksAUkhBKaTmdsxVG%2FnD0yiUZYEMuJlNTBesWGPJjH1oDfoLk4mawcEeQPv8aegcYEw2sJjlk2KbpfO4BEGhmvI3kMN8hq55er2bSsRbGU%2FHDhqessHw8l%2FYU9lzvToXbRfYn4tGq0LdblsB1pr2SV3vMBodHsDUWOyIPuAkhTuqfB2259DHsFhdsM0Z10XaqlrCyZ9F5p%2BE4jyQaYpfdj7sKong3mdwKxv3jkSf8RHDlarL20YtVYNMhC3Jou8UfWwKea3vINi%2FkJ2fR%2B0t4oq5FU0%2FuNMczUMA3HtwuVycNe7NzQpAFfuFKbHjoFxOykEsAsSL78YFaUuIzSNjela28IL5iEuPFQI14qmo3Pi6UVyRSSbweE2igRRhELHZ2MpjaPzb15NgPuYe%2BPs284KGXUKzucS%2FJNhVqi0%2BxpebNPq20CFDD9p6HHBjqkAYh%2BhWUnVLK4206K4v22yB1Kj4TM2jTfaVcCCNqv7MX4ODWMfrjUHZ6JAsSAkVbeJqamH80OiwKFH61BRvJV6UzRAXZft1ydydeXqcr4lW3FmTSL4YY2zQemr9fjb7kc%2F6p8XvWoCnlrReQ8jl2F7Ivn5s8JRUXRVfocuHGq15w3WlQYYA%2F3ht3X%2BgGYIg5Gua4hfNMh6ig2OYPX4pFeS4KLPZj6&X-Amz-Signature=88d81e6296b4584a1f8ff076229c6c94688c5abe7f5843b05cc7f2b01d408740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5VVTML%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCdGklvTCfcd0ORYxa9APWyLRF5wDu0M%2F95HDgRNQngzQIhAMH4shuqPvIIpISb3Yo6paNynrx6NAHIxOoXO7I8WT01KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0K2lLUNKdJLk%2F1NEq3AOyoEOpLeQNqUaEbWBumxBXQyx7kijH4hnMmNTsjtmlEDnEfHRuqHVpw4axpxq6ZKg18FiQeESWmWW8n6WSMCqlUezzYQ6uFnjtXA0tk06GnOu0VcNbNyoogsZxez2tcdi706sznNBnCsF3oJ%2FPCZaHElsB%2FqZB1XEfoV6%2FubjKBOrAzRfC4WLsdezwhIn16jaEgl7E55lksAUkhBKaTmdsxVG%2FnD0yiUZYEMuJlNTBesWGPJjH1oDfoLk4mawcEeQPv8aegcYEw2sJjlk2KbpfO4BEGhmvI3kMN8hq55er2bSsRbGU%2FHDhqessHw8l%2FYU9lzvToXbRfYn4tGq0LdblsB1pr2SV3vMBodHsDUWOyIPuAkhTuqfB2259DHsFhdsM0Z10XaqlrCyZ9F5p%2BE4jyQaYpfdj7sKong3mdwKxv3jkSf8RHDlarL20YtVYNMhC3Jou8UfWwKea3vINi%2FkJ2fR%2B0t4oq5FU0%2FuNMczUMA3HtwuVycNe7NzQpAFfuFKbHjoFxOykEsAsSL78YFaUuIzSNjela28IL5iEuPFQI14qmo3Pi6UVyRSSbweE2igRRhELHZ2MpjaPzb15NgPuYe%2BPs284KGXUKzucS%2FJNhVqi0%2BxpebNPq20CFDD9p6HHBjqkAYh%2BhWUnVLK4206K4v22yB1Kj4TM2jTfaVcCCNqv7MX4ODWMfrjUHZ6JAsSAkVbeJqamH80OiwKFH61BRvJV6UzRAXZft1ydydeXqcr4lW3FmTSL4YY2zQemr9fjb7kc%2F6p8XvWoCnlrReQ8jl2F7Ivn5s8JRUXRVfocuHGq15w3WlQYYA%2F3ht3X%2BgGYIg5Gua4hfNMh6ig2OYPX4pFeS4KLPZj6&X-Amz-Signature=422f60aa9e75bd10ad6be180049d89946152ec3c45dcd5ef7097de0909a37677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5VVTML%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCdGklvTCfcd0ORYxa9APWyLRF5wDu0M%2F95HDgRNQngzQIhAMH4shuqPvIIpISb3Yo6paNynrx6NAHIxOoXO7I8WT01KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0K2lLUNKdJLk%2F1NEq3AOyoEOpLeQNqUaEbWBumxBXQyx7kijH4hnMmNTsjtmlEDnEfHRuqHVpw4axpxq6ZKg18FiQeESWmWW8n6WSMCqlUezzYQ6uFnjtXA0tk06GnOu0VcNbNyoogsZxez2tcdi706sznNBnCsF3oJ%2FPCZaHElsB%2FqZB1XEfoV6%2FubjKBOrAzRfC4WLsdezwhIn16jaEgl7E55lksAUkhBKaTmdsxVG%2FnD0yiUZYEMuJlNTBesWGPJjH1oDfoLk4mawcEeQPv8aegcYEw2sJjlk2KbpfO4BEGhmvI3kMN8hq55er2bSsRbGU%2FHDhqessHw8l%2FYU9lzvToXbRfYn4tGq0LdblsB1pr2SV3vMBodHsDUWOyIPuAkhTuqfB2259DHsFhdsM0Z10XaqlrCyZ9F5p%2BE4jyQaYpfdj7sKong3mdwKxv3jkSf8RHDlarL20YtVYNMhC3Jou8UfWwKea3vINi%2FkJ2fR%2B0t4oq5FU0%2FuNMczUMA3HtwuVycNe7NzQpAFfuFKbHjoFxOykEsAsSL78YFaUuIzSNjela28IL5iEuPFQI14qmo3Pi6UVyRSSbweE2igRRhELHZ2MpjaPzb15NgPuYe%2BPs284KGXUKzucS%2FJNhVqi0%2BxpebNPq20CFDD9p6HHBjqkAYh%2BhWUnVLK4206K4v22yB1Kj4TM2jTfaVcCCNqv7MX4ODWMfrjUHZ6JAsSAkVbeJqamH80OiwKFH61BRvJV6UzRAXZft1ydydeXqcr4lW3FmTSL4YY2zQemr9fjb7kc%2F6p8XvWoCnlrReQ8jl2F7Ivn5s8JRUXRVfocuHGq15w3WlQYYA%2F3ht3X%2BgGYIg5Gua4hfNMh6ig2OYPX4pFeS4KLPZj6&X-Amz-Signature=dbe77f5bf4310f0befe95075d328f46f740dde757bb62b4c003b8419bbdaec52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5VVTML%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCdGklvTCfcd0ORYxa9APWyLRF5wDu0M%2F95HDgRNQngzQIhAMH4shuqPvIIpISb3Yo6paNynrx6NAHIxOoXO7I8WT01KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0K2lLUNKdJLk%2F1NEq3AOyoEOpLeQNqUaEbWBumxBXQyx7kijH4hnMmNTsjtmlEDnEfHRuqHVpw4axpxq6ZKg18FiQeESWmWW8n6WSMCqlUezzYQ6uFnjtXA0tk06GnOu0VcNbNyoogsZxez2tcdi706sznNBnCsF3oJ%2FPCZaHElsB%2FqZB1XEfoV6%2FubjKBOrAzRfC4WLsdezwhIn16jaEgl7E55lksAUkhBKaTmdsxVG%2FnD0yiUZYEMuJlNTBesWGPJjH1oDfoLk4mawcEeQPv8aegcYEw2sJjlk2KbpfO4BEGhmvI3kMN8hq55er2bSsRbGU%2FHDhqessHw8l%2FYU9lzvToXbRfYn4tGq0LdblsB1pr2SV3vMBodHsDUWOyIPuAkhTuqfB2259DHsFhdsM0Z10XaqlrCyZ9F5p%2BE4jyQaYpfdj7sKong3mdwKxv3jkSf8RHDlarL20YtVYNMhC3Jou8UfWwKea3vINi%2FkJ2fR%2B0t4oq5FU0%2FuNMczUMA3HtwuVycNe7NzQpAFfuFKbHjoFxOykEsAsSL78YFaUuIzSNjela28IL5iEuPFQI14qmo3Pi6UVyRSSbweE2igRRhELHZ2MpjaPzb15NgPuYe%2BPs284KGXUKzucS%2FJNhVqi0%2BxpebNPq20CFDD9p6HHBjqkAYh%2BhWUnVLK4206K4v22yB1Kj4TM2jTfaVcCCNqv7MX4ODWMfrjUHZ6JAsSAkVbeJqamH80OiwKFH61BRvJV6UzRAXZft1ydydeXqcr4lW3FmTSL4YY2zQemr9fjb7kc%2F6p8XvWoCnlrReQ8jl2F7Ivn5s8JRUXRVfocuHGq15w3WlQYYA%2F3ht3X%2BgGYIg5Gua4hfNMh6ig2OYPX4pFeS4KLPZj6&X-Amz-Signature=7413f3d4ca55d002c77dd400011789326a954a0720d4b78ece459ebe0537d052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5VVTML%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCdGklvTCfcd0ORYxa9APWyLRF5wDu0M%2F95HDgRNQngzQIhAMH4shuqPvIIpISb3Yo6paNynrx6NAHIxOoXO7I8WT01KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0K2lLUNKdJLk%2F1NEq3AOyoEOpLeQNqUaEbWBumxBXQyx7kijH4hnMmNTsjtmlEDnEfHRuqHVpw4axpxq6ZKg18FiQeESWmWW8n6WSMCqlUezzYQ6uFnjtXA0tk06GnOu0VcNbNyoogsZxez2tcdi706sznNBnCsF3oJ%2FPCZaHElsB%2FqZB1XEfoV6%2FubjKBOrAzRfC4WLsdezwhIn16jaEgl7E55lksAUkhBKaTmdsxVG%2FnD0yiUZYEMuJlNTBesWGPJjH1oDfoLk4mawcEeQPv8aegcYEw2sJjlk2KbpfO4BEGhmvI3kMN8hq55er2bSsRbGU%2FHDhqessHw8l%2FYU9lzvToXbRfYn4tGq0LdblsB1pr2SV3vMBodHsDUWOyIPuAkhTuqfB2259DHsFhdsM0Z10XaqlrCyZ9F5p%2BE4jyQaYpfdj7sKong3mdwKxv3jkSf8RHDlarL20YtVYNMhC3Jou8UfWwKea3vINi%2FkJ2fR%2B0t4oq5FU0%2FuNMczUMA3HtwuVycNe7NzQpAFfuFKbHjoFxOykEsAsSL78YFaUuIzSNjela28IL5iEuPFQI14qmo3Pi6UVyRSSbweE2igRRhELHZ2MpjaPzb15NgPuYe%2BPs284KGXUKzucS%2FJNhVqi0%2BxpebNPq20CFDD9p6HHBjqkAYh%2BhWUnVLK4206K4v22yB1Kj4TM2jTfaVcCCNqv7MX4ODWMfrjUHZ6JAsSAkVbeJqamH80OiwKFH61BRvJV6UzRAXZft1ydydeXqcr4lW3FmTSL4YY2zQemr9fjb7kc%2F6p8XvWoCnlrReQ8jl2F7Ivn5s8JRUXRVfocuHGq15w3WlQYYA%2F3ht3X%2BgGYIg5Gua4hfNMh6ig2OYPX4pFeS4KLPZj6&X-Amz-Signature=b59fafda994a329c996f384c1759dd73818e3191c6511c332b8c9d7384e6eb69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5VVTML%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCdGklvTCfcd0ORYxa9APWyLRF5wDu0M%2F95HDgRNQngzQIhAMH4shuqPvIIpISb3Yo6paNynrx6NAHIxOoXO7I8WT01KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0K2lLUNKdJLk%2F1NEq3AOyoEOpLeQNqUaEbWBumxBXQyx7kijH4hnMmNTsjtmlEDnEfHRuqHVpw4axpxq6ZKg18FiQeESWmWW8n6WSMCqlUezzYQ6uFnjtXA0tk06GnOu0VcNbNyoogsZxez2tcdi706sznNBnCsF3oJ%2FPCZaHElsB%2FqZB1XEfoV6%2FubjKBOrAzRfC4WLsdezwhIn16jaEgl7E55lksAUkhBKaTmdsxVG%2FnD0yiUZYEMuJlNTBesWGPJjH1oDfoLk4mawcEeQPv8aegcYEw2sJjlk2KbpfO4BEGhmvI3kMN8hq55er2bSsRbGU%2FHDhqessHw8l%2FYU9lzvToXbRfYn4tGq0LdblsB1pr2SV3vMBodHsDUWOyIPuAkhTuqfB2259DHsFhdsM0Z10XaqlrCyZ9F5p%2BE4jyQaYpfdj7sKong3mdwKxv3jkSf8RHDlarL20YtVYNMhC3Jou8UfWwKea3vINi%2FkJ2fR%2B0t4oq5FU0%2FuNMczUMA3HtwuVycNe7NzQpAFfuFKbHjoFxOykEsAsSL78YFaUuIzSNjela28IL5iEuPFQI14qmo3Pi6UVyRSSbweE2igRRhELHZ2MpjaPzb15NgPuYe%2BPs284KGXUKzucS%2FJNhVqi0%2BxpebNPq20CFDD9p6HHBjqkAYh%2BhWUnVLK4206K4v22yB1Kj4TM2jTfaVcCCNqv7MX4ODWMfrjUHZ6JAsSAkVbeJqamH80OiwKFH61BRvJV6UzRAXZft1ydydeXqcr4lW3FmTSL4YY2zQemr9fjb7kc%2F6p8XvWoCnlrReQ8jl2F7Ivn5s8JRUXRVfocuHGq15w3WlQYYA%2F3ht3X%2BgGYIg5Gua4hfNMh6ig2OYPX4pFeS4KLPZj6&X-Amz-Signature=94967a44e1be849be521ff36b1edea0160fc071749c8e6980c17b0ec61ef12ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5VVTML%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCdGklvTCfcd0ORYxa9APWyLRF5wDu0M%2F95HDgRNQngzQIhAMH4shuqPvIIpISb3Yo6paNynrx6NAHIxOoXO7I8WT01KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0K2lLUNKdJLk%2F1NEq3AOyoEOpLeQNqUaEbWBumxBXQyx7kijH4hnMmNTsjtmlEDnEfHRuqHVpw4axpxq6ZKg18FiQeESWmWW8n6WSMCqlUezzYQ6uFnjtXA0tk06GnOu0VcNbNyoogsZxez2tcdi706sznNBnCsF3oJ%2FPCZaHElsB%2FqZB1XEfoV6%2FubjKBOrAzRfC4WLsdezwhIn16jaEgl7E55lksAUkhBKaTmdsxVG%2FnD0yiUZYEMuJlNTBesWGPJjH1oDfoLk4mawcEeQPv8aegcYEw2sJjlk2KbpfO4BEGhmvI3kMN8hq55er2bSsRbGU%2FHDhqessHw8l%2FYU9lzvToXbRfYn4tGq0LdblsB1pr2SV3vMBodHsDUWOyIPuAkhTuqfB2259DHsFhdsM0Z10XaqlrCyZ9F5p%2BE4jyQaYpfdj7sKong3mdwKxv3jkSf8RHDlarL20YtVYNMhC3Jou8UfWwKea3vINi%2FkJ2fR%2B0t4oq5FU0%2FuNMczUMA3HtwuVycNe7NzQpAFfuFKbHjoFxOykEsAsSL78YFaUuIzSNjela28IL5iEuPFQI14qmo3Pi6UVyRSSbweE2igRRhELHZ2MpjaPzb15NgPuYe%2BPs284KGXUKzucS%2FJNhVqi0%2BxpebNPq20CFDD9p6HHBjqkAYh%2BhWUnVLK4206K4v22yB1Kj4TM2jTfaVcCCNqv7MX4ODWMfrjUHZ6JAsSAkVbeJqamH80OiwKFH61BRvJV6UzRAXZft1ydydeXqcr4lW3FmTSL4YY2zQemr9fjb7kc%2F6p8XvWoCnlrReQ8jl2F7Ivn5s8JRUXRVfocuHGq15w3WlQYYA%2F3ht3X%2BgGYIg5Gua4hfNMh6ig2OYPX4pFeS4KLPZj6&X-Amz-Signature=8e373c0c67844494456e7fca760ce046b38ccdcff63a4c2acb012a613fd902a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5VVTML%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCdGklvTCfcd0ORYxa9APWyLRF5wDu0M%2F95HDgRNQngzQIhAMH4shuqPvIIpISb3Yo6paNynrx6NAHIxOoXO7I8WT01KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0K2lLUNKdJLk%2F1NEq3AOyoEOpLeQNqUaEbWBumxBXQyx7kijH4hnMmNTsjtmlEDnEfHRuqHVpw4axpxq6ZKg18FiQeESWmWW8n6WSMCqlUezzYQ6uFnjtXA0tk06GnOu0VcNbNyoogsZxez2tcdi706sznNBnCsF3oJ%2FPCZaHElsB%2FqZB1XEfoV6%2FubjKBOrAzRfC4WLsdezwhIn16jaEgl7E55lksAUkhBKaTmdsxVG%2FnD0yiUZYEMuJlNTBesWGPJjH1oDfoLk4mawcEeQPv8aegcYEw2sJjlk2KbpfO4BEGhmvI3kMN8hq55er2bSsRbGU%2FHDhqessHw8l%2FYU9lzvToXbRfYn4tGq0LdblsB1pr2SV3vMBodHsDUWOyIPuAkhTuqfB2259DHsFhdsM0Z10XaqlrCyZ9F5p%2BE4jyQaYpfdj7sKong3mdwKxv3jkSf8RHDlarL20YtVYNMhC3Jou8UfWwKea3vINi%2FkJ2fR%2B0t4oq5FU0%2FuNMczUMA3HtwuVycNe7NzQpAFfuFKbHjoFxOykEsAsSL78YFaUuIzSNjela28IL5iEuPFQI14qmo3Pi6UVyRSSbweE2igRRhELHZ2MpjaPzb15NgPuYe%2BPs284KGXUKzucS%2FJNhVqi0%2BxpebNPq20CFDD9p6HHBjqkAYh%2BhWUnVLK4206K4v22yB1Kj4TM2jTfaVcCCNqv7MX4ODWMfrjUHZ6JAsSAkVbeJqamH80OiwKFH61BRvJV6UzRAXZft1ydydeXqcr4lW3FmTSL4YY2zQemr9fjb7kc%2F6p8XvWoCnlrReQ8jl2F7Ivn5s8JRUXRVfocuHGq15w3WlQYYA%2F3ht3X%2BgGYIg5Gua4hfNMh6ig2OYPX4pFeS4KLPZj6&X-Amz-Signature=450f3da1a38f6399142e29ab292e1e2d6d6eca85ffc2387196a5fe7bf168c474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5VVTML%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCdGklvTCfcd0ORYxa9APWyLRF5wDu0M%2F95HDgRNQngzQIhAMH4shuqPvIIpISb3Yo6paNynrx6NAHIxOoXO7I8WT01KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0K2lLUNKdJLk%2F1NEq3AOyoEOpLeQNqUaEbWBumxBXQyx7kijH4hnMmNTsjtmlEDnEfHRuqHVpw4axpxq6ZKg18FiQeESWmWW8n6WSMCqlUezzYQ6uFnjtXA0tk06GnOu0VcNbNyoogsZxez2tcdi706sznNBnCsF3oJ%2FPCZaHElsB%2FqZB1XEfoV6%2FubjKBOrAzRfC4WLsdezwhIn16jaEgl7E55lksAUkhBKaTmdsxVG%2FnD0yiUZYEMuJlNTBesWGPJjH1oDfoLk4mawcEeQPv8aegcYEw2sJjlk2KbpfO4BEGhmvI3kMN8hq55er2bSsRbGU%2FHDhqessHw8l%2FYU9lzvToXbRfYn4tGq0LdblsB1pr2SV3vMBodHsDUWOyIPuAkhTuqfB2259DHsFhdsM0Z10XaqlrCyZ9F5p%2BE4jyQaYpfdj7sKong3mdwKxv3jkSf8RHDlarL20YtVYNMhC3Jou8UfWwKea3vINi%2FkJ2fR%2B0t4oq5FU0%2FuNMczUMA3HtwuVycNe7NzQpAFfuFKbHjoFxOykEsAsSL78YFaUuIzSNjela28IL5iEuPFQI14qmo3Pi6UVyRSSbweE2igRRhELHZ2MpjaPzb15NgPuYe%2BPs284KGXUKzucS%2FJNhVqi0%2BxpebNPq20CFDD9p6HHBjqkAYh%2BhWUnVLK4206K4v22yB1Kj4TM2jTfaVcCCNqv7MX4ODWMfrjUHZ6JAsSAkVbeJqamH80OiwKFH61BRvJV6UzRAXZft1ydydeXqcr4lW3FmTSL4YY2zQemr9fjb7kc%2F6p8XvWoCnlrReQ8jl2F7Ivn5s8JRUXRVfocuHGq15w3WlQYYA%2F3ht3X%2BgGYIg5Gua4hfNMh6ig2OYPX4pFeS4KLPZj6&X-Amz-Signature=b8fbe7cee514ef44be3c44f87764170732dd7d8f3d924a3f685ac67b6255ef34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5VVTML%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCdGklvTCfcd0ORYxa9APWyLRF5wDu0M%2F95HDgRNQngzQIhAMH4shuqPvIIpISb3Yo6paNynrx6NAHIxOoXO7I8WT01KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0K2lLUNKdJLk%2F1NEq3AOyoEOpLeQNqUaEbWBumxBXQyx7kijH4hnMmNTsjtmlEDnEfHRuqHVpw4axpxq6ZKg18FiQeESWmWW8n6WSMCqlUezzYQ6uFnjtXA0tk06GnOu0VcNbNyoogsZxez2tcdi706sznNBnCsF3oJ%2FPCZaHElsB%2FqZB1XEfoV6%2FubjKBOrAzRfC4WLsdezwhIn16jaEgl7E55lksAUkhBKaTmdsxVG%2FnD0yiUZYEMuJlNTBesWGPJjH1oDfoLk4mawcEeQPv8aegcYEw2sJjlk2KbpfO4BEGhmvI3kMN8hq55er2bSsRbGU%2FHDhqessHw8l%2FYU9lzvToXbRfYn4tGq0LdblsB1pr2SV3vMBodHsDUWOyIPuAkhTuqfB2259DHsFhdsM0Z10XaqlrCyZ9F5p%2BE4jyQaYpfdj7sKong3mdwKxv3jkSf8RHDlarL20YtVYNMhC3Jou8UfWwKea3vINi%2FkJ2fR%2B0t4oq5FU0%2FuNMczUMA3HtwuVycNe7NzQpAFfuFKbHjoFxOykEsAsSL78YFaUuIzSNjela28IL5iEuPFQI14qmo3Pi6UVyRSSbweE2igRRhELHZ2MpjaPzb15NgPuYe%2BPs284KGXUKzucS%2FJNhVqi0%2BxpebNPq20CFDD9p6HHBjqkAYh%2BhWUnVLK4206K4v22yB1Kj4TM2jTfaVcCCNqv7MX4ODWMfrjUHZ6JAsSAkVbeJqamH80OiwKFH61BRvJV6UzRAXZft1ydydeXqcr4lW3FmTSL4YY2zQemr9fjb7kc%2F6p8XvWoCnlrReQ8jl2F7Ivn5s8JRUXRVfocuHGq15w3WlQYYA%2F3ht3X%2BgGYIg5Gua4hfNMh6ig2OYPX4pFeS4KLPZj6&X-Amz-Signature=6a7ce9f14ddf00dfa42492389019348aa1a7bd286f758c0802b18b4a4ab86e78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNGZ35DQ%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCYSPHdJXgYck8WmXsGSlMxmgCL5c9hWe7VTswRYbt5KgIhAOO5LgExLsNvjXCQm70d941JQN8M0DSLFMx0ZJbWq312KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOAjPqkC%2FCDxKVRVUq3AM5CKFPuNy87RWdCgWQt5lRX58TznRLPpyfdmLmU91hjeQTYD%2BhE5qw%2FKCbR%2FTzbv%2FSkT23jPniXZzV6zaTTVSYY7lWQkkXzOu7e5dUORWb0WVAggPMdRmISs%2FqBj01%2FRy8peyy%2BIHno95zZQVDx9uhy%2FP11bPYo5DPb8WoV20iD1mHAncjduMI940rYlQcAK4ef4lT7fKnyk3Mrm97E%2BieQRF39fhnl38vXvjGFnysNSYiQM3ZKzg1kLiP39DkC6oMf24ItTq883HegJr6M15VJ0sZ1ZrfzmGFXY%2BdZJxb%2FQOhE%2BWygNI8IYoCo44X%2FwAXZz9k%2B6r%2FKXShG%2Fu1%2FMsi04GPaOoo9eZL4xZef1jJFd2x86W6GJTiYBS5c30zr9RNyInnh5kgB%2FmQwLeWOBNTmXtB737AtI3U2k4AwgQwOT%2FEn8lLccIqXXkbxxKgxhTJpI6UjSO72qpdL7pO29KwP9APPuiSxFyCJoHPW9HqEUXomKX7YhI%2FoKEziQM7KENyDi3QMn6yBTF5PSlc1XRTdYCgNnZPDOYz4zscflI8DYsi%2BEACDblNpsSkf2EHwmDw0z82TbwNDWvkucK8Vyd96XIQLU9PaRhGtK5wToBvuCnWcd%2BQy477KAMvwzDkqKHHBjqkAWBPf1MMyIvIYycg5hYdI7N9jYaTK%2F8DNFMAhTbMO5nf7KZ9PXFl9rI8FuluksoMEuWVMs5pidIJwpkjbdIGRB0Jjg5B1sQ8Hx1BR%2FmjlvHoxtg0QsrSiPbggLN1qkpgVmvrUAoDa4%2B5jjy2SAGU%2FW51fVs%2FhnG5PjBPIIKFAu6zD9UTht9rFt7D18tQS6eiBPRVHOTneuWLgj2RFeCyphaTmUo6&X-Amz-Signature=2c9ed2eb511e782c8528abbb52288d075adbd2d78776dbe47ebbeec83f63bb7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJSINLSK%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDU1AcJxKbqiPjeP572dmwT9RkCKyHc4xiniUfzRa%2BxBAiEA0MBzYpN3nR5T3tuA2Vv3iZjgJnGD7K9t%2FoA52sUoKM8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF29l42akwJ0esD8dCrcA4vM8Lyc8P8tpL0h1M8F0Wkup4OYIVIiki3Zy3S0WK6e8X%2F%2BygUCgSZAG9kVpjmmh8%2B0EIA1CHtR1PvQVNd334XWRS78OAxj7fFp%2BIG2KLRW2o%2FW%2FuA%2FfVmuTy8aMPnRuQIlnIV%2FH9yT0CqB02xYsoGh%2BfYdgXGYcjlQefUCL9rcc2AtwQuEgPp15oz6kt0x3YIPwdXKshHR6kjAJTQToLn7mKx%2FzCJvE2suSPJUMP4XKYtSXSpaYcpntlWqMDJM85RO9%2BItYDAcqw6Vjv%2FMP8emPhz45aukt2256bdoxPdExA4GgLOApJxHc2zaVjVJRng8fMKbW4dGZhqseGJZWg3A6wzW7Ea157nQO4sov61tWWK5PxeyK3jH63UyMZ5ZUdp%2FMWv35ut5DQoLSguRD50xmxiB1Z79XLmLQ2KaWc7oGfboNClko1bx%2BuR2TLMNakBYKR0m3akuHAsR3ceqSfopuUxFCRzvK%2FYX4IBoJmfbT5W2nJihq5XSHFYg3UXwbigh09UyPHjeqbuazthcdnqlsD%2B3hNHoG2HWM7LUe9humit5LzUG%2FSsutwhOdeO55Kk20HbTCQ77yhAGhJgGFL1QsN16fw7wBZQ4ubcVUMAYlesIPWoeSim6lb1bMJOpoccGOqUB1WwYa9Zi7QYaWV2GjacnXnAZ8%2BIht8DIo8d2LiykCxq2t5Ek3%2FmcpLo3Tmw9Y%2Bujogugdgp4hQGcOqvGoPW8dKd8796CgnkQQWnEr7UJW0fFs%2B%2FlDrZVLzxLWQWdd%2BFxiRx%2BjdVWI5HkN1t3REnd58pDU7R2AOHcyMeewyXj1olOq2Vdp7wdGJNLpoLAKyhfemMdgJuYEwwBwl2EqqJFlK4RBJDk&X-Amz-Signature=a6fa5ef14bb4c03d2e51b29c7085ec99855a17a2f7f59472f08cacb2794a1518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAHEZBUM%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDHR87hxqBuBcCB64IYlcS5llArziiXaklBVus0um%2F74AiEAqTQepHQWae6w%2BP%2FN49rRM0Dk1uMsiRZjiU8SoM4PRxMqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIe7xt3ppZihpxpTyrcAzXk7cJfjAgQJkv%2BMJ0VD2Lf4zlGXFl0dRyuae0L2dNU%2BoP%2B0Arl0NweOqV0zzUQlyMGQ1Nl3brDBeDIH8T0VTXsoB3HsMi%2B8Sn8a4bpOFk0buamIf1ZP17ktrojBEHcmEY1A%2B38fNkdzvjQ5F%2FhfZDUqIUa%2FOTaCsMxAwWaR6nb9%2BQYxqDFhR6fa5VfBvxcEjCo72rBCJkFAFA0POcQSp%2FFCddWmmDr0HwOr52Vwdw%2B8KrULyIFmUHAeCo08nuVrzD24u1v5YaeXN03ehBrbJPpJ5gjLI0eZWmV2HpOH%2F2HdsidGlFqz95tNXN5ttf0AmN6e2rvlJsLP81s2WdQHCegEi569HOZvzKVsjt4NguBUGlzaf%2F44jmU8fg5GODsuHZTB12vML1b%2Bin3zP98XrPmupjhH2Ul2hjxfbCa0SsP8aXwUT9SI0S4od7gSqgVWCziEWcmuI%2Be01GiISm7bztcjlosa%2FcCzv0iNGVfUkDMC6nO%2B%2B05MGA3%2BrtmXAcIR3m6Fh1MB%2FpOWfCeBDgTmtGiR9IZfFidO0x0QgPQyAmlTqCLBjsA4GuxmiFn5v0AjjtRwGfhLqjTdryJslky1UClPx8DYM%2FLVgKjXIN04%2BU2VMoF5dCFiSAVqPSzMOuooccGOqUBBHk%2Fi9hyJtLMtav6nUoxPjW4jPjMQSJek4ch03r5%2B1VecH%2FvnJOFMtlshLdRPu1IFkoYwf01qWybRSqMdm09DwSrwY1ThBfjWWIfFdDX5LcUixr7MY0TyEYte0vgq5ZXvAV%2BxO62dxvL3PgJPNPIlrgri1XEWNDsT8LYPhGpj6hgoQj26ZIbQfA46H39U0nccrIKdYpD8%2BRMwyIkUn7uExAcFCVb&X-Amz-Signature=82f0be6e4bdb44e30e519659236777d0e16e6a0fbcd8abb669586edbce739203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5VVTML%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCdGklvTCfcd0ORYxa9APWyLRF5wDu0M%2F95HDgRNQngzQIhAMH4shuqPvIIpISb3Yo6paNynrx6NAHIxOoXO7I8WT01KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0K2lLUNKdJLk%2F1NEq3AOyoEOpLeQNqUaEbWBumxBXQyx7kijH4hnMmNTsjtmlEDnEfHRuqHVpw4axpxq6ZKg18FiQeESWmWW8n6WSMCqlUezzYQ6uFnjtXA0tk06GnOu0VcNbNyoogsZxez2tcdi706sznNBnCsF3oJ%2FPCZaHElsB%2FqZB1XEfoV6%2FubjKBOrAzRfC4WLsdezwhIn16jaEgl7E55lksAUkhBKaTmdsxVG%2FnD0yiUZYEMuJlNTBesWGPJjH1oDfoLk4mawcEeQPv8aegcYEw2sJjlk2KbpfO4BEGhmvI3kMN8hq55er2bSsRbGU%2FHDhqessHw8l%2FYU9lzvToXbRfYn4tGq0LdblsB1pr2SV3vMBodHsDUWOyIPuAkhTuqfB2259DHsFhdsM0Z10XaqlrCyZ9F5p%2BE4jyQaYpfdj7sKong3mdwKxv3jkSf8RHDlarL20YtVYNMhC3Jou8UfWwKea3vINi%2FkJ2fR%2B0t4oq5FU0%2FuNMczUMA3HtwuVycNe7NzQpAFfuFKbHjoFxOykEsAsSL78YFaUuIzSNjela28IL5iEuPFQI14qmo3Pi6UVyRSSbweE2igRRhELHZ2MpjaPzb15NgPuYe%2BPs284KGXUKzucS%2FJNhVqi0%2BxpebNPq20CFDD9p6HHBjqkAYh%2BhWUnVLK4206K4v22yB1Kj4TM2jTfaVcCCNqv7MX4ODWMfrjUHZ6JAsSAkVbeJqamH80OiwKFH61BRvJV6UzRAXZft1ydydeXqcr4lW3FmTSL4YY2zQemr9fjb7kc%2F6p8XvWoCnlrReQ8jl2F7Ivn5s8JRUXRVfocuHGq15w3WlQYYA%2F3ht3X%2BgGYIg5Gua4hfNMh6ig2OYPX4pFeS4KLPZj6&X-Amz-Signature=c9bb44a362d52fd26bd99b255605bbab4e50b8319587a7648bc9d4e2e898f1a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXQ7CAWG%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIENB8V44iYkyUm3kJzNlTxeOIQLg0TIrB4oK0uJMCdmXAiEAnqcgEj6w3djfVWNfce8yYkepG89rZFF3xTkQuCIokvkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYYPSLLqJw%2BPh4w1CrcA8Q7mxiKMLFmXW8izyGzjQOm2fVwvHxC%2Bt54EJyqK4C9zagPFSSB1pOPHS9qiLEA3gk%2BO2JFh5D%2FfLGQWYA8jo%2F1sXp6XThfMxP%2Bk8qWXIvuKKfpUtZ8Bfn8Vh0zslkl4gq0mzspliQA37mGI2gQ7naJJJqxrL2Gog86Go18wdCkdjlShH%2BL6lm9t0dyL0LI8TOIZKi7YSbC7M0tp%2BATLuiV5lY%2BUZcaT2sY3PgEm%2BqOLx3%2FgOTJUewZ4zgAck3Y9PtkEW9syz0971lipTHRi5to8MBbm7w%2FmlIJEm17hnNblrVkc9krkyBSD7t08Aawp8ut0j5oSN29yK3vtH%2FSVlI%2BLKJAPzH5Qs0JOq348bKtdEJCLEABDgROD82erJiiXdddrgVHHjsROnOiecR7pK4HbLvVoEwY2SyB8HoB%2FhYGWIbp5wnHl1Yip1TVmXrKW%2FAwz6uEuV4yzMyJOYfuzK8AZHHkp0PN2C6XqlI1P6K0f72BVf7k8PkUj5zZeo5Cp8yUwe6f5o6AMAsVEjrh8h3Ge%2FVsOwNLYpOEjwYBNphXzN7SxWEJ5unVT%2B7hiKr0I2Zjv5tVVEXY1uslAzm6bAGg4eNu%2FsrwgzFWuIeujHgiO3ZHJOYZCaYzvg5cMN6ooccGOqUBR%2FJaJGTYGIENCdehY%2BVFgizVLtTf%2BeQXC6aAyXWftOCP6fqzDC5IY2nrK46NIrTTO1X0FVwVqzJ%2BWTCru7EY%2B9G7u3jYi8mmimtaz61%2B7%2F5HjBaXmCIALl5WNcDX0mgNAArwNPa515qEmPRQy5RSjeMA6iiRy83L5ARkHPg54VYv3KQdQ8GbW0CjJR0SO%2FzSH%2B0IMa4flNFR7jtcGzTVXEHJQZDb&X-Amz-Signature=fe51d1eb6e8ee547e5bd71e09220f54cb6fa64414f97efd69073d95be2966055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5VVTML%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCdGklvTCfcd0ORYxa9APWyLRF5wDu0M%2F95HDgRNQngzQIhAMH4shuqPvIIpISb3Yo6paNynrx6NAHIxOoXO7I8WT01KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0K2lLUNKdJLk%2F1NEq3AOyoEOpLeQNqUaEbWBumxBXQyx7kijH4hnMmNTsjtmlEDnEfHRuqHVpw4axpxq6ZKg18FiQeESWmWW8n6WSMCqlUezzYQ6uFnjtXA0tk06GnOu0VcNbNyoogsZxez2tcdi706sznNBnCsF3oJ%2FPCZaHElsB%2FqZB1XEfoV6%2FubjKBOrAzRfC4WLsdezwhIn16jaEgl7E55lksAUkhBKaTmdsxVG%2FnD0yiUZYEMuJlNTBesWGPJjH1oDfoLk4mawcEeQPv8aegcYEw2sJjlk2KbpfO4BEGhmvI3kMN8hq55er2bSsRbGU%2FHDhqessHw8l%2FYU9lzvToXbRfYn4tGq0LdblsB1pr2SV3vMBodHsDUWOyIPuAkhTuqfB2259DHsFhdsM0Z10XaqlrCyZ9F5p%2BE4jyQaYpfdj7sKong3mdwKxv3jkSf8RHDlarL20YtVYNMhC3Jou8UfWwKea3vINi%2FkJ2fR%2B0t4oq5FU0%2FuNMczUMA3HtwuVycNe7NzQpAFfuFKbHjoFxOykEsAsSL78YFaUuIzSNjela28IL5iEuPFQI14qmo3Pi6UVyRSSbweE2igRRhELHZ2MpjaPzb15NgPuYe%2BPs284KGXUKzucS%2FJNhVqi0%2BxpebNPq20CFDD9p6HHBjqkAYh%2BhWUnVLK4206K4v22yB1Kj4TM2jTfaVcCCNqv7MX4ODWMfrjUHZ6JAsSAkVbeJqamH80OiwKFH61BRvJV6UzRAXZft1ydydeXqcr4lW3FmTSL4YY2zQemr9fjb7kc%2F6p8XvWoCnlrReQ8jl2F7Ivn5s8JRUXRVfocuHGq15w3WlQYYA%2F3ht3X%2BgGYIg5Gua4hfNMh6ig2OYPX4pFeS4KLPZj6&X-Amz-Signature=2deffccdb07650865c713c5bcd31f7580834aafd8a07051a07971a51c3e3e178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTVAZCLK%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCp4fhDKc6ZXTeuIZGwnrCm7dj5GOYzEXBeBZS7M8QPEAIgDSlM1bgBGduxnndxpjcGglPO9vCuB3k4C5mGc9usqmoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPucMGMId%2FJwomzE%2BircA0xCcV4Gfblwl%2Bp%2BcpBxadT8sTPIG1sKvinjO8ixLBW%2BjLOTLux7x2x4e7Q6%2Bh2096V%2Fcuj9wUzt3SpiOa801q2WaxWI0%2BoyHFMGs14Uprol4qRNjHoo2zM4HJgg3itpJ8ujsQN1v%2BKlZI9d%2Byki7NMJ2%2BKga5dJaK%2FAFx1bXeqplKE94q6hsY%2FB7YIMNl7xW7XPjLgt4Ie42VjgyVOrvS5riGQfUiu%2BA6GDsZJqzk3OBSXcYz%2BHlLtpozkWakVb3o7TKluyFNPjVTEWxsRGHll2m0snw%2F0q5%2FP1PhUtTqLY2v46V17oeDB00mQmsrJske48uTjRoz9VLSmWC52AsY5rC6rRPtIZz8RSEae3o1phAKXKOC%2FlhjoYW9LPOWwqkY%2BtFKkTZFKJggdCPUHe5PAXBb%2B5159u0GwYz8N6%2FeaG5CqgG37EREYn9%2FgDs7bM9RYqrl0fTX%2BbEy%2F5x9wiH1BElRDO17P%2BxzAlkxMMMUUaDIwO9CpmnIVYSpJ%2BqHSLWEiz87%2B1343ISh15VfkwkGnY1QV487H5T1NJdVcnC3hHQOb6rWtCwtjFbVFltIyfQDQwVVXK%2Fq%2BJKmJG2DaBvATDg1oI38zNlbn4mIfmf09K9ptgp3aIY5Igz%2FjUMJupoccGOqUBapSrn0afNQVSDCu%2B4mtpdXN6XR5I4PZ6WcrXXp84N%2FrzcKUGFJUzpbCNdKhFqMh7DLlOH%2BJxnbedhXP1RHFcASjgyvixv7yAZnfz2I5lnZoL898itWXkKEJTTCGGSSSekE9SR9UQC%2B7OUu00i3MqNjDi2DudqWjxgMvCzh9%2Bgt68U%2FEoOvd0wT%2B%2BYKiKG7lWeZ5Gmz9tKaVjWU47nClGFmSUrpoz&X-Amz-Signature=fa0deb25dd3a3d44eed50c50f84422968714b0efe6fc4c87433694c450c2c3bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5VVTML%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCdGklvTCfcd0ORYxa9APWyLRF5wDu0M%2F95HDgRNQngzQIhAMH4shuqPvIIpISb3Yo6paNynrx6NAHIxOoXO7I8WT01KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0K2lLUNKdJLk%2F1NEq3AOyoEOpLeQNqUaEbWBumxBXQyx7kijH4hnMmNTsjtmlEDnEfHRuqHVpw4axpxq6ZKg18FiQeESWmWW8n6WSMCqlUezzYQ6uFnjtXA0tk06GnOu0VcNbNyoogsZxez2tcdi706sznNBnCsF3oJ%2FPCZaHElsB%2FqZB1XEfoV6%2FubjKBOrAzRfC4WLsdezwhIn16jaEgl7E55lksAUkhBKaTmdsxVG%2FnD0yiUZYEMuJlNTBesWGPJjH1oDfoLk4mawcEeQPv8aegcYEw2sJjlk2KbpfO4BEGhmvI3kMN8hq55er2bSsRbGU%2FHDhqessHw8l%2FYU9lzvToXbRfYn4tGq0LdblsB1pr2SV3vMBodHsDUWOyIPuAkhTuqfB2259DHsFhdsM0Z10XaqlrCyZ9F5p%2BE4jyQaYpfdj7sKong3mdwKxv3jkSf8RHDlarL20YtVYNMhC3Jou8UfWwKea3vINi%2FkJ2fR%2B0t4oq5FU0%2FuNMczUMA3HtwuVycNe7NzQpAFfuFKbHjoFxOykEsAsSL78YFaUuIzSNjela28IL5iEuPFQI14qmo3Pi6UVyRSSbweE2igRRhELHZ2MpjaPzb15NgPuYe%2BPs284KGXUKzucS%2FJNhVqi0%2BxpebNPq20CFDD9p6HHBjqkAYh%2BhWUnVLK4206K4v22yB1Kj4TM2jTfaVcCCNqv7MX4ODWMfrjUHZ6JAsSAkVbeJqamH80OiwKFH61BRvJV6UzRAXZft1ydydeXqcr4lW3FmTSL4YY2zQemr9fjb7kc%2F6p8XvWoCnlrReQ8jl2F7Ivn5s8JRUXRVfocuHGq15w3WlQYYA%2F3ht3X%2BgGYIg5Gua4hfNMh6ig2OYPX4pFeS4KLPZj6&X-Amz-Signature=6cf4097dd940d93650cde663ca9839bbf5a58fe98804ddf65c64c3c123b070df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CZVA35E%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDAccfMf90T%2BclUYT3f0c05EogkRi0py%2B2nhpzRcZCvFAIhAK6ZDoUI0YLyrg%2BDmXse5RBjE2zUw2cuGAstxSux%2FUo%2BKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgvJo3sJZ7SPfxeHkq3AOXfovYU2LiqkMBR6kORlSMmG1UcagapA4CH1jVw0RcPx3QDbRBXR9tlQrqOY5%2Fd4Z3%2FCF93feHR4bu4R6a4eMghBxrkMZMG5YvZM2ZIHUKSWMc2brxRi2j4fcEysIxPVf6ASlPaheeln7HapQGG6ZVMd4f7jH2qJo%2B3Ll4Fa%2BR5uVZoGjhWbl%2F8vAK1sae50IxlDnqUl9G4ZleN9a3udIuw%2FiqpawM6fycqYXrHvKLwVY8pDesMV57PFMjZK%2FkrhF7Atvz1%2Fh9SfxQ%2FDv07%2FTFohvrgpr0n4R8YWRsS7EGuNeLMBKcv8DKNem%2FCanc7qVk4c5O8QsBFyIDlqZJg%2B4nqVpqwv%2BXN8gVdRgbT9%2B3Qzuo3KpBYVP5UMA1luVFBceREzoRrg%2BAI8Zk63oMZ3gvpOdX2XEvFecDJXZBOEgF57XKIXNjAbf7hUp8VJm0ZvIFbmPYhwFRmlw59ADbmcEG5FiYwpuhWjpqiLQeZRAAUsCcZZ%2BvQ%2BNHiSOVbLSrPuJNaSxsb%2BAdJ%2BCLeuIlz0NMKI4y3f1dCi1kTjsmTPJRtNF657yw9FWfO%2FhewKoB%2Br5XxZ%2FQOmBJoQw8DbbkiI6jKFEsxvY6y8AxF%2F7NqIk6Ak5XCkLcL5vPtoJzXjDVqKHHBjqkAZBWGERbVmAiVOaOgwNOmjjn0KMhhC9sMSEfR4XnnZaZECtyP%2FnCmO853579rLnRwnZpI2Q8G3uCHzlHb86L8FHMwuOQALsOdt592A9Fpb6aswGNyBqnmdOVaj9Izs5r%2BGG1JiqOuivFFZqC1YOeKnJeG%2FOu3xFIQ8JUCQJaR6s4RgiizeNEnt1SJMt5kL9x2Jdahb%2FPOO5goG2UHft9futA3U50&X-Amz-Signature=8dde94b0d40768f3399e2b1d0950f52cc65f5ed7b1e75a509d9e8872e8309313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5VVTML%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCdGklvTCfcd0ORYxa9APWyLRF5wDu0M%2F95HDgRNQngzQIhAMH4shuqPvIIpISb3Yo6paNynrx6NAHIxOoXO7I8WT01KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0K2lLUNKdJLk%2F1NEq3AOyoEOpLeQNqUaEbWBumxBXQyx7kijH4hnMmNTsjtmlEDnEfHRuqHVpw4axpxq6ZKg18FiQeESWmWW8n6WSMCqlUezzYQ6uFnjtXA0tk06GnOu0VcNbNyoogsZxez2tcdi706sznNBnCsF3oJ%2FPCZaHElsB%2FqZB1XEfoV6%2FubjKBOrAzRfC4WLsdezwhIn16jaEgl7E55lksAUkhBKaTmdsxVG%2FnD0yiUZYEMuJlNTBesWGPJjH1oDfoLk4mawcEeQPv8aegcYEw2sJjlk2KbpfO4BEGhmvI3kMN8hq55er2bSsRbGU%2FHDhqessHw8l%2FYU9lzvToXbRfYn4tGq0LdblsB1pr2SV3vMBodHsDUWOyIPuAkhTuqfB2259DHsFhdsM0Z10XaqlrCyZ9F5p%2BE4jyQaYpfdj7sKong3mdwKxv3jkSf8RHDlarL20YtVYNMhC3Jou8UfWwKea3vINi%2FkJ2fR%2B0t4oq5FU0%2FuNMczUMA3HtwuVycNe7NzQpAFfuFKbHjoFxOykEsAsSL78YFaUuIzSNjela28IL5iEuPFQI14qmo3Pi6UVyRSSbweE2igRRhELHZ2MpjaPzb15NgPuYe%2BPs284KGXUKzucS%2FJNhVqi0%2BxpebNPq20CFDD9p6HHBjqkAYh%2BhWUnVLK4206K4v22yB1Kj4TM2jTfaVcCCNqv7MX4ODWMfrjUHZ6JAsSAkVbeJqamH80OiwKFH61BRvJV6UzRAXZft1ydydeXqcr4lW3FmTSL4YY2zQemr9fjb7kc%2F6p8XvWoCnlrReQ8jl2F7Ivn5s8JRUXRVfocuHGq15w3WlQYYA%2F3ht3X%2BgGYIg5Gua4hfNMh6ig2OYPX4pFeS4KLPZj6&X-Amz-Signature=4e54ef27cdfb0bb04593860e482f8da066a7669e058bbae3cbb01920e8245609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZMXDSKP%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIG3rNbn4HPB5MpeC34XaR1Gfq3HHYMfMLibYx704muDaAiEA5ibIZfISvUsS%2Fo%2BUWxLFSVVlZh8aem7%2BXNxcRpuUnL4qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLj8gEWuqenVIEeaCrcA3rTS0muC2EN%2BZ6dK7S5zUuVM3pBEfU2s5r0nTT%2B2tVV0zJNDSURFLqhulRDlaMnXptzwQD4a6CrJEEho7MSPjYsFY0CQHKJcNjb2ffTz99n%2Bm0T9PjQMRgYPVHBsRLdNBURpg27nLZxyhsMFQj1OmReiT1Wo8OkY%2F4JznPb8t1K2PhYIhqrOMGCu51eqNxVFMKc6S2L4EurbOpWn6DMRtKL3e73AlxrUncFFLwd7Yio0M0s%2BBe3f3Q7JVnQE5WSeooGLA%2FLvedTulkbAXSmHjTs0kCyN2pGFJxrIu5oxdmpqentLECCHhuHtJfAOT49twLUEg5EXIicRBkJWwzcLnYNu2jhnmCYWsz4upIKg9mua6xN5q7r9pSDrVXa%2FR0jQwtFbQ0QmtsS0b6gqfkf3Y7SnawIxLbMpUoUt69KjEwGuzwMgaKDeinhQiFHQGpEuI3oIrFKS7V4%2BXqhYGa2Z8Lier7S7YVxUfP9BqS9PrYA4nTMLvkICWUxHyOP%2B5Ewyj6Mwz0Y54h5R467vIP2l07OrwOOOBrN1%2FfSOwQhQtWtNngGP6Qgm3d71bBXxBuxHFkndLAxc52LfUL%2Bm4ZJVpHdY6gofJSrbpAu1kC6bKRbd%2FtKM9h6yjXT789KMJypoccGOqUBsGldZ63q%2BoNu3rma87vWiYMtwbVn%2BAdCN40ogp9VLUERZgrNccQfckrG%2BR5onuJqqWYdNW07MSr67ZXVemi52ybPT%2BB6RICuKTheWYo7lLiVLhyGf1iHf5ee2AwOThS3GMM7r%2BcTL3zyOSdL8q4F87xrLL1D52ExyHvANirh7vNwx3YJ4zgvBTe9OfHX%2FHhrTumL83M1KFneVCM8VcHN23ebPWfX&X-Amz-Signature=1575d77a4003a6d1aa97ec8ac24cf1f859846f43784a629b22228ab8bee8c7e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5VVTML%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCdGklvTCfcd0ORYxa9APWyLRF5wDu0M%2F95HDgRNQngzQIhAMH4shuqPvIIpISb3Yo6paNynrx6NAHIxOoXO7I8WT01KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0K2lLUNKdJLk%2F1NEq3AOyoEOpLeQNqUaEbWBumxBXQyx7kijH4hnMmNTsjtmlEDnEfHRuqHVpw4axpxq6ZKg18FiQeESWmWW8n6WSMCqlUezzYQ6uFnjtXA0tk06GnOu0VcNbNyoogsZxez2tcdi706sznNBnCsF3oJ%2FPCZaHElsB%2FqZB1XEfoV6%2FubjKBOrAzRfC4WLsdezwhIn16jaEgl7E55lksAUkhBKaTmdsxVG%2FnD0yiUZYEMuJlNTBesWGPJjH1oDfoLk4mawcEeQPv8aegcYEw2sJjlk2KbpfO4BEGhmvI3kMN8hq55er2bSsRbGU%2FHDhqessHw8l%2FYU9lzvToXbRfYn4tGq0LdblsB1pr2SV3vMBodHsDUWOyIPuAkhTuqfB2259DHsFhdsM0Z10XaqlrCyZ9F5p%2BE4jyQaYpfdj7sKong3mdwKxv3jkSf8RHDlarL20YtVYNMhC3Jou8UfWwKea3vINi%2FkJ2fR%2B0t4oq5FU0%2FuNMczUMA3HtwuVycNe7NzQpAFfuFKbHjoFxOykEsAsSL78YFaUuIzSNjela28IL5iEuPFQI14qmo3Pi6UVyRSSbweE2igRRhELHZ2MpjaPzb15NgPuYe%2BPs284KGXUKzucS%2FJNhVqi0%2BxpebNPq20CFDD9p6HHBjqkAYh%2BhWUnVLK4206K4v22yB1Kj4TM2jTfaVcCCNqv7MX4ODWMfrjUHZ6JAsSAkVbeJqamH80OiwKFH61BRvJV6UzRAXZft1ydydeXqcr4lW3FmTSL4YY2zQemr9fjb7kc%2F6p8XvWoCnlrReQ8jl2F7Ivn5s8JRUXRVfocuHGq15w3WlQYYA%2F3ht3X%2BgGYIg5Gua4hfNMh6ig2OYPX4pFeS4KLPZj6&X-Amz-Signature=5333ee11af696f114690dee49fa1b2bfaa50dbf01ec586d356d4d08584b84ab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6SNUV2U%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDczoePQ%2BcLp%2FbVYkmYt4E2V0GbkGiuNzlqBj8EeIuNOAiEA2eOZQj2OVp86IVw32AqYMGrSCTMTLJJkp9a2y72nWj0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlfcuHfsjJaE3VUJSrcA7PvSNjOUABrftA8x%2B8XYZXtOKSBsOXFDcpmdZJessdASPWcSxMzJ0IyxIsN6zKNpF9NiCE5HP8WnEMQin4fDYSz5V6QAtPw1GVTR6mZCi3LYEW4rGEjVhx%2BS%2FWurd5HXio5PPjxxO2q5%2Fhn1RP5oVS1EEF7HPGOjyRzeD88%2Bi5lYQhPeOrp6CXWYBZuOdbLfuyvM45Mp7fvGI%2F4TQ8EhPAt2425ckoETh23bXQ83J15HxpWwKlCBeSaY8FcklbLuuBJpm7rLplKJUK%2BRHRRBsru%2Frm50vfqaIzK4uFhqccbOcwegn8ZFT68QcyOtgOPPFOGuXsYEZRcdeGPVX02NuPFhM0nSuZ06GdabDYfvZFbFEWrN1qTme84snt52VMt%2FS9YZgc9gi1B7PIEymFE3d2raUY2n%2FEMA%2FLGhmN4pRn49q%2BDf6aiGQ36g%2FO1NMK7R50R%2BThw%2FlZMRdG48%2FParlpsz0UZAvl2ia0BMnPkVSDQdLbMj9FmWOqbX7ZjQRjZF5z%2BI4veivHF73kSysYZ3T0%2B%2FQevhBx0FUzhNfR4K2R0r27IXgpN9fci%2FfvvtQVKCm1gFGZavnuGJFkO4qIAbWIjZSyYceibG3hUn8rEyqvlU6JSpguSS7gN7OXkMPOooccGOqUBNkF1jhiOAqwHu2kU9ljmp4F5qtX6rURl1oQc59g3bNbzMFNjQj895e6ztNbAOWH31FaBL4Wya2i6CSP4B6Xl3g6NdMGUEyQBi9pUiyE7Axxu89YEC7qHaTnXBMT6rEf9mf2wg9SfhjQq14DXeMkDGdi%2FwfiWvP2NizuO4f5PDmp3RMAo5b7C5CYm1Ok2gsI6HvZWzkqE7zePt9rlm7dj1eHgvEGl&X-Amz-Signature=470b37b0985251474f680923593b3ee8e7e78cc74799bd849ffec1105dbf9a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7X5X2RX%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFuoP4l%2FnlPF9DCRSvmd1XnHi%2F0NeGwTb1XmRreYjOGmAiA1MuM1d1SXtpfoyEOeP3Jk3SNYj5rLw0so%2BBVHuB5f0SqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuNWGIWM4qKGLg2ZqKtwD%2BvJr45FQaudsuUwxm49WGV76p84ZVY9JLyFImVU34F2wkz8uL0VzsLCcUWva4ehrX2%2BHPV1O8iia5JVAOThlnfKKR9UDcUutiN%2FuRTeu3xwDJQo%2BjN65ZqSy0mmHO%2FYs8hoIaSbondakms0aYdRK949aqSgqUN5RPnQ3CQzcSm%2FYg1FDrqGDV8r8BM9a%2BZHOBLrMAlN7lqaUo0PUzIMaJn9j289A0av7wtcFzYmeUrTvBA8QQuSEjHS4bWpSqCYJllEQNCgnoLcwuUWHhlnkVDu2FT34qAPa9aXdEvEz%2B6emup1sOrSDit7MvcHXnOwLwgds21XbEWorqVDVdWaL0QgQ%2FJ%2Fhs49D5B8ngYThaXcq7PA63106Q0Z8RX53bDZZswHe6HObTZ5esYrB3iIZzoTuEk2CHGqdEh%2B0Kgxv%2FoTrLYJkTwUB7dz6JD1d9keQ9ebQZJPB9PNsdTm79DPXA6bZZhpe7Eb2ieda7Zh34mOpm1Sm3ExA7S8BTV9XBaLsEybXHwT8%2BAGV3t5aZOjBM2WOh0syGrQVmW7Qu%2BkxLAmdePUZRiGxFPCjMA31Z6%2FUj6%2FifaZiHwIB25bCr0QO4UtLK8%2BFxK%2BXC6TVv3uSK5TRcJ2jbfF%2FW7m7%2B3cw5KihxwY6pgEiyPjPL4KFJYSG70yFmwxTNw9%2FcekTw5CxDfQX%2B9quNrQvUzojIWSuJItU%2FJiaMB7sCmXZu955yZns4IXw9FexWy5KU1INkupmF%2FVJR8IMelgqMq%2FvgP34Qd4UGrLTXCK6BM0bb0OYCcu4mUSJ2qL%2FuXCK8lrd%2Fc7lpUmf8H51IU8oaCNfHz%2Bmn9goOZ8pPxCGFGZuzY3aIY6Wzhp3Qpe5ubzrJN7T&X-Amz-Signature=a899da8613d58bf1a920d9a912ad6d88f89891b0d9e04b77f3eca904c43f2bef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT327KA4%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDgJCb7p3yIZPXA7OoJhKLHB0ngq7mNdhtidK3rJZbBagIhAJn5Hr7%2BE2DDDloLbJyV1mNV42V3ipSc08cF3YtGs%2BhZKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEDQlse8ihrShZUPMq3AM7FhSXulQaFpoPLw4vTUF4rtGks6YbwOT9Ih6kuGWuxhfJti44xdQ5PA7jhZb5OP7BJKHUPeOSpXja3WZFd%2FZqpwszt%2BXkC6xVWF3vW2OIXzRP5HbR8isATQ2Ew9aBN96YXhqKMP62b%2BFM3UbBz5bE1U5D0UgLVa3eOYaNGasLKyaCDZ5jZ5LHD6S6uL2XI%2FADDijmrCCg15CML87Rjsm63YQHzFFdghoDGmvN%2Bx7S1ZiQejep45iTelE6DMtB6JzpgIFWPiSrcUv8s3x0srBfxNxOpGqoFts4n7NtNdec9ZoTwQC8M8oUFSPYHAuPmSS9LcUm29hyiuWgCqHXQNANIduyB8BcdlPaqZ63YftlNABJybVSN5KpgQQJGFH0aY7qU%2BeNdXRro1T0BzL7xglM1MVi75r1xYmdcN6euzMhuuFgeySOZFlIvpzs%2FLwhaKlF9kA2CmACdojro5VJKUokAdo0dVE5%2Bh29O0cTe5K%2FyQKIj6Yp4u6pI1Qnh8NU6dCZ%2F1L%2FS1CdBp2NP%2FAd1034Jo7LXFbDZ3zU%2FV5vJT37NcZ3Vonbgg%2FEwymdNF7aUxhX4xPReiKAJCMoiY%2F9GFBCGBdE1SwVLlYT%2BiAo8QpcIcJH0iUOjTGDhOC0GjCAqKHHBjqkASpeJtixjl5jtJFsFAaI4%2FGYExOMqrJbRIzIxZsfAQEwX9aAY45S3%2B3jJokkEoeZmgMjYJCShkta36wDllEHICfQtNMiMCgrLOm6ZTOOhN2cuxH6MVXxAiylRSZKUzcmelnREghjJ1wd%2FDferqqGxArk7OsC09Teg93gG4fAcyG3BsfFS09G71K1IWdaHoyvPQfj3mR2ihNUZ2%2FU%2BO5ZiKRc8q71&X-Amz-Signature=b48ee6879813ca937ff640afbba7e9f10795dad9c34b8c8d38eb3898d9ef2f97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5VVTML%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCdGklvTCfcd0ORYxa9APWyLRF5wDu0M%2F95HDgRNQngzQIhAMH4shuqPvIIpISb3Yo6paNynrx6NAHIxOoXO7I8WT01KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0K2lLUNKdJLk%2F1NEq3AOyoEOpLeQNqUaEbWBumxBXQyx7kijH4hnMmNTsjtmlEDnEfHRuqHVpw4axpxq6ZKg18FiQeESWmWW8n6WSMCqlUezzYQ6uFnjtXA0tk06GnOu0VcNbNyoogsZxez2tcdi706sznNBnCsF3oJ%2FPCZaHElsB%2FqZB1XEfoV6%2FubjKBOrAzRfC4WLsdezwhIn16jaEgl7E55lksAUkhBKaTmdsxVG%2FnD0yiUZYEMuJlNTBesWGPJjH1oDfoLk4mawcEeQPv8aegcYEw2sJjlk2KbpfO4BEGhmvI3kMN8hq55er2bSsRbGU%2FHDhqessHw8l%2FYU9lzvToXbRfYn4tGq0LdblsB1pr2SV3vMBodHsDUWOyIPuAkhTuqfB2259DHsFhdsM0Z10XaqlrCyZ9F5p%2BE4jyQaYpfdj7sKong3mdwKxv3jkSf8RHDlarL20YtVYNMhC3Jou8UfWwKea3vINi%2FkJ2fR%2B0t4oq5FU0%2FuNMczUMA3HtwuVycNe7NzQpAFfuFKbHjoFxOykEsAsSL78YFaUuIzSNjela28IL5iEuPFQI14qmo3Pi6UVyRSSbweE2igRRhELHZ2MpjaPzb15NgPuYe%2BPs284KGXUKzucS%2FJNhVqi0%2BxpebNPq20CFDD9p6HHBjqkAYh%2BhWUnVLK4206K4v22yB1Kj4TM2jTfaVcCCNqv7MX4ODWMfrjUHZ6JAsSAkVbeJqamH80OiwKFH61BRvJV6UzRAXZft1ydydeXqcr4lW3FmTSL4YY2zQemr9fjb7kc%2F6p8XvWoCnlrReQ8jl2F7Ivn5s8JRUXRVfocuHGq15w3WlQYYA%2F3ht3X%2BgGYIg5Gua4hfNMh6ig2OYPX4pFeS4KLPZj6&X-Amz-Signature=ff1b3c1b812e912c0f21f2c5b9ab9a4cd4d25988db67b09be3d350c39e112aff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z5VVTML%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCdGklvTCfcd0ORYxa9APWyLRF5wDu0M%2F95HDgRNQngzQIhAMH4shuqPvIIpISb3Yo6paNynrx6NAHIxOoXO7I8WT01KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0K2lLUNKdJLk%2F1NEq3AOyoEOpLeQNqUaEbWBumxBXQyx7kijH4hnMmNTsjtmlEDnEfHRuqHVpw4axpxq6ZKg18FiQeESWmWW8n6WSMCqlUezzYQ6uFnjtXA0tk06GnOu0VcNbNyoogsZxez2tcdi706sznNBnCsF3oJ%2FPCZaHElsB%2FqZB1XEfoV6%2FubjKBOrAzRfC4WLsdezwhIn16jaEgl7E55lksAUkhBKaTmdsxVG%2FnD0yiUZYEMuJlNTBesWGPJjH1oDfoLk4mawcEeQPv8aegcYEw2sJjlk2KbpfO4BEGhmvI3kMN8hq55er2bSsRbGU%2FHDhqessHw8l%2FYU9lzvToXbRfYn4tGq0LdblsB1pr2SV3vMBodHsDUWOyIPuAkhTuqfB2259DHsFhdsM0Z10XaqlrCyZ9F5p%2BE4jyQaYpfdj7sKong3mdwKxv3jkSf8RHDlarL20YtVYNMhC3Jou8UfWwKea3vINi%2FkJ2fR%2B0t4oq5FU0%2FuNMczUMA3HtwuVycNe7NzQpAFfuFKbHjoFxOykEsAsSL78YFaUuIzSNjela28IL5iEuPFQI14qmo3Pi6UVyRSSbweE2igRRhELHZ2MpjaPzb15NgPuYe%2BPs284KGXUKzucS%2FJNhVqi0%2BxpebNPq20CFDD9p6HHBjqkAYh%2BhWUnVLK4206K4v22yB1Kj4TM2jTfaVcCCNqv7MX4ODWMfrjUHZ6JAsSAkVbeJqamH80OiwKFH61BRvJV6UzRAXZft1ydydeXqcr4lW3FmTSL4YY2zQemr9fjb7kc%2F6p8XvWoCnlrReQ8jl2F7Ivn5s8JRUXRVfocuHGq15w3WlQYYA%2F3ht3X%2BgGYIg5Gua4hfNMh6ig2OYPX4pFeS4KLPZj6&X-Amz-Signature=0d8ef5e15d137a1da56c87da62afdc849f27f21fd83bd262fd641b05759b9c14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWMVQHX%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDtOP2dvFx208Tby%2B5fHoeGuWz91BXqA7hqraQ14U%2FzeQIgMJdbsjPHh1oJo43StZd4HV8I79y%2FZjmkb0gkFQh1kP8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQkVc%2B2ZPwWhfJIxSrcA0upfKU56yFoFTHsRA2nUCPVWOIDIfqAmexBEpckJpABx01SedXrg99TljaMLsELZh08Hs3xTboVmYUqoAwgPrV1hlDiP12QMVzsbDbzJeuPs4CBub4buYeZXSOtiddXriioWrls8AzP5gFPzxj7f8L%2BxbxToslGoTuq6q4R4yiSs2NN%2FKVIWpwVLePT6rMIIspoI3iHgVt%2F3lTESIQXibGact8P4%2FvX90AXyco7RiMW54Apg3nO8KtTKYfTvH9jaoCIwceeM9EJjZWJOd%2FPNA6XPq%2BDTFCN8AAMnhvdt6FunjTTv0i%2BpU7bQ%2Fq3zRJkj5D8WPnFCfFB3YNBOue8ljSghwdmi7sCjmSONfQGJrazaHoMnNs5lCGIUpxM87VI5aO1WfwL7nuN3HTuIdJBBKq1ou5%2F9zI2fZ%2B2CWty%2FsV3uWDXuvLHpoiJkI6JGIoAaviDo9VkJ6Qf6fI8TYNiso3fw0Fv9zhUa17xCjYe4wjK6h2htFS7ePRRnC8K%2F9ts99EkMAa%2BwungnVoK3oZuhB2RF1CkhUqASeCIpagoW3LqgihJKEzIsibS2w1HcnGGpenz48Mzia5vyvIE5oCdfgMWe0FloZBnWrKjXH6nyEdYQpe6KsWpqH0dvC3MMIapoccGOqUBzWXb8JisrpHZnbkeDAg9vnlSn4zVtfhtF09qtNEpRXcgFPluH5qv3UixUIhssRyYX3Bx5iaqdsICpghuWtqT932OldnS6AHohF3271NgGTyCRIBjFVY%2FOUGAao%2FA4V3fzigqGQlnRsDcItMovDV%2FyinOL9qrlE9dbFU5KJmMFcCSTc54si1hubgQ6iANfLColfY7ukc4yVo1R2vz0yCt4TT%2FVZyw&X-Amz-Signature=f8f170de25657849856805cb525d979f3fa076e96d938a736fb0ac2f1c46e52f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWMVQHX%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDtOP2dvFx208Tby%2B5fHoeGuWz91BXqA7hqraQ14U%2FzeQIgMJdbsjPHh1oJo43StZd4HV8I79y%2FZjmkb0gkFQh1kP8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQkVc%2B2ZPwWhfJIxSrcA0upfKU56yFoFTHsRA2nUCPVWOIDIfqAmexBEpckJpABx01SedXrg99TljaMLsELZh08Hs3xTboVmYUqoAwgPrV1hlDiP12QMVzsbDbzJeuPs4CBub4buYeZXSOtiddXriioWrls8AzP5gFPzxj7f8L%2BxbxToslGoTuq6q4R4yiSs2NN%2FKVIWpwVLePT6rMIIspoI3iHgVt%2F3lTESIQXibGact8P4%2FvX90AXyco7RiMW54Apg3nO8KtTKYfTvH9jaoCIwceeM9EJjZWJOd%2FPNA6XPq%2BDTFCN8AAMnhvdt6FunjTTv0i%2BpU7bQ%2Fq3zRJkj5D8WPnFCfFB3YNBOue8ljSghwdmi7sCjmSONfQGJrazaHoMnNs5lCGIUpxM87VI5aO1WfwL7nuN3HTuIdJBBKq1ou5%2F9zI2fZ%2B2CWty%2FsV3uWDXuvLHpoiJkI6JGIoAaviDo9VkJ6Qf6fI8TYNiso3fw0Fv9zhUa17xCjYe4wjK6h2htFS7ePRRnC8K%2F9ts99EkMAa%2BwungnVoK3oZuhB2RF1CkhUqASeCIpagoW3LqgihJKEzIsibS2w1HcnGGpenz48Mzia5vyvIE5oCdfgMWe0FloZBnWrKjXH6nyEdYQpe6KsWpqH0dvC3MMIapoccGOqUBzWXb8JisrpHZnbkeDAg9vnlSn4zVtfhtF09qtNEpRXcgFPluH5qv3UixUIhssRyYX3Bx5iaqdsICpghuWtqT932OldnS6AHohF3271NgGTyCRIBjFVY%2FOUGAao%2FA4V3fzigqGQlnRsDcItMovDV%2FyinOL9qrlE9dbFU5KJmMFcCSTc54si1hubgQ6iANfLColfY7ukc4yVo1R2vz0yCt4TT%2FVZyw&X-Amz-Signature=9fefe176e25a74b771b3ee58f1b4a438706a282e786d8ae6973263a1ae4f50c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWMVQHX%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDtOP2dvFx208Tby%2B5fHoeGuWz91BXqA7hqraQ14U%2FzeQIgMJdbsjPHh1oJo43StZd4HV8I79y%2FZjmkb0gkFQh1kP8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQkVc%2B2ZPwWhfJIxSrcA0upfKU56yFoFTHsRA2nUCPVWOIDIfqAmexBEpckJpABx01SedXrg99TljaMLsELZh08Hs3xTboVmYUqoAwgPrV1hlDiP12QMVzsbDbzJeuPs4CBub4buYeZXSOtiddXriioWrls8AzP5gFPzxj7f8L%2BxbxToslGoTuq6q4R4yiSs2NN%2FKVIWpwVLePT6rMIIspoI3iHgVt%2F3lTESIQXibGact8P4%2FvX90AXyco7RiMW54Apg3nO8KtTKYfTvH9jaoCIwceeM9EJjZWJOd%2FPNA6XPq%2BDTFCN8AAMnhvdt6FunjTTv0i%2BpU7bQ%2Fq3zRJkj5D8WPnFCfFB3YNBOue8ljSghwdmi7sCjmSONfQGJrazaHoMnNs5lCGIUpxM87VI5aO1WfwL7nuN3HTuIdJBBKq1ou5%2F9zI2fZ%2B2CWty%2FsV3uWDXuvLHpoiJkI6JGIoAaviDo9VkJ6Qf6fI8TYNiso3fw0Fv9zhUa17xCjYe4wjK6h2htFS7ePRRnC8K%2F9ts99EkMAa%2BwungnVoK3oZuhB2RF1CkhUqASeCIpagoW3LqgihJKEzIsibS2w1HcnGGpenz48Mzia5vyvIE5oCdfgMWe0FloZBnWrKjXH6nyEdYQpe6KsWpqH0dvC3MMIapoccGOqUBzWXb8JisrpHZnbkeDAg9vnlSn4zVtfhtF09qtNEpRXcgFPluH5qv3UixUIhssRyYX3Bx5iaqdsICpghuWtqT932OldnS6AHohF3271NgGTyCRIBjFVY%2FOUGAao%2FA4V3fzigqGQlnRsDcItMovDV%2FyinOL9qrlE9dbFU5KJmMFcCSTc54si1hubgQ6iANfLColfY7ukc4yVo1R2vz0yCt4TT%2FVZyw&X-Amz-Signature=3dfc12a8f4db7f0e78cf4d895fbb7b500b9f44f70d76c1e4b73f441460128ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWMVQHX%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDtOP2dvFx208Tby%2B5fHoeGuWz91BXqA7hqraQ14U%2FzeQIgMJdbsjPHh1oJo43StZd4HV8I79y%2FZjmkb0gkFQh1kP8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQkVc%2B2ZPwWhfJIxSrcA0upfKU56yFoFTHsRA2nUCPVWOIDIfqAmexBEpckJpABx01SedXrg99TljaMLsELZh08Hs3xTboVmYUqoAwgPrV1hlDiP12QMVzsbDbzJeuPs4CBub4buYeZXSOtiddXriioWrls8AzP5gFPzxj7f8L%2BxbxToslGoTuq6q4R4yiSs2NN%2FKVIWpwVLePT6rMIIspoI3iHgVt%2F3lTESIQXibGact8P4%2FvX90AXyco7RiMW54Apg3nO8KtTKYfTvH9jaoCIwceeM9EJjZWJOd%2FPNA6XPq%2BDTFCN8AAMnhvdt6FunjTTv0i%2BpU7bQ%2Fq3zRJkj5D8WPnFCfFB3YNBOue8ljSghwdmi7sCjmSONfQGJrazaHoMnNs5lCGIUpxM87VI5aO1WfwL7nuN3HTuIdJBBKq1ou5%2F9zI2fZ%2B2CWty%2FsV3uWDXuvLHpoiJkI6JGIoAaviDo9VkJ6Qf6fI8TYNiso3fw0Fv9zhUa17xCjYe4wjK6h2htFS7ePRRnC8K%2F9ts99EkMAa%2BwungnVoK3oZuhB2RF1CkhUqASeCIpagoW3LqgihJKEzIsibS2w1HcnGGpenz48Mzia5vyvIE5oCdfgMWe0FloZBnWrKjXH6nyEdYQpe6KsWpqH0dvC3MMIapoccGOqUBzWXb8JisrpHZnbkeDAg9vnlSn4zVtfhtF09qtNEpRXcgFPluH5qv3UixUIhssRyYX3Bx5iaqdsICpghuWtqT932OldnS6AHohF3271NgGTyCRIBjFVY%2FOUGAao%2FA4V3fzigqGQlnRsDcItMovDV%2FyinOL9qrlE9dbFU5KJmMFcCSTc54si1hubgQ6iANfLColfY7ukc4yVo1R2vz0yCt4TT%2FVZyw&X-Amz-Signature=36299bb2b422b57d71926880f6b3e8b92bc59a424e087e6430a1b52ea7cc4d57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX6C4QSN%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDzDNT0%2FGqXuHhR7nIj3wuLeb01m3lBTP%2FtGo%2BNhxsv4QIhAJfw%2FVSlnps%2Fijd%2Bg5JB9Q3bh%2F5CR6rtuN%2Fu%2FIeenueqKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwA%2Boa7U1d6p%2F9Duckq3ANhu3w8Tg5h653%2B6HbRE3tPyRI5rtpPXNOdqVIkmQVUUMlgtJiEoECZioa9SdfZVK%2F4GyYl1M4Y7PWJ3b%2BmR559ai3rzknJBu6kAGfIGts0nSqzkPYAf5M%2FQQ1%2FT73G1TYZB%2F8zFjA%2BgdnATor4DQaIrZA2GSSjbD0ICfE8lmqdu3K3FUcxkYO6bWCutJQCFwfoc9KkG5caRlRR0Og6JomthSoSahRye8%2BclooCGejzxJ34ROOjy4vs%2B9osLbSMXMGLosSI6Z%2FEuVdu5JLpCSfy3PWB2yXha6ijyDdLDOZLq7LvWJNznTQ9FbWnwUHFAYTw7RbrJPv03eWNTQsb98A2ET8iQHJ%2F81GoHkdIADA8DlOU1K8hXrjExR8B4g6dQUoJ%2FJbKPYkJ8bhHjYiPv7YmJ8z1AsGTHKkIDKJFCNZNw%2F%2F9rchMxHkY6e5AQzH83C5SKA5kIt0NuyTQsMMaNCx3K87B%2FR5ekpl1BLoKcJAowk6Yd5QAIRP0lqs%2BS%2FOmcCDO8PkX6Bn8tYNGpa00F4tYgKWIoaRDosrA17zmP6L5JY0Sr83dfXhgD1rhSxjEbgAplbGRMhz7fYihhPtIp3kEguJ%2BoeM8sZyoZAapPTKOUKH1DeYCfOdlpHy3JTDOqKHHBjqkAfNg0QuctY0rhjKUHRNxt7FsPqsh518OtGKVaBu0Oqz9avBKEbObSAxXgFQGdvp5J3fZQP%2BAAdq9hrVXT3VqerHIw%2Ba9bIQfs0NiHroTj8c758ePIsH0Ti4pslF8%2BrRmdBQ8rrpKDTy3684D6amiEVUaTMniPHk7qisVKFQuG0xZs8hAL75ZI9FYBaqiPhf9J1PesZ14vInnumf%2FOQDBcXs0%2F2VC&X-Amz-Signature=4907a123c233a778d7068518e7e3704b085b17d1e9e3907bc2de30330f03340a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWMVQHX%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDtOP2dvFx208Tby%2B5fHoeGuWz91BXqA7hqraQ14U%2FzeQIgMJdbsjPHh1oJo43StZd4HV8I79y%2FZjmkb0gkFQh1kP8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQkVc%2B2ZPwWhfJIxSrcA0upfKU56yFoFTHsRA2nUCPVWOIDIfqAmexBEpckJpABx01SedXrg99TljaMLsELZh08Hs3xTboVmYUqoAwgPrV1hlDiP12QMVzsbDbzJeuPs4CBub4buYeZXSOtiddXriioWrls8AzP5gFPzxj7f8L%2BxbxToslGoTuq6q4R4yiSs2NN%2FKVIWpwVLePT6rMIIspoI3iHgVt%2F3lTESIQXibGact8P4%2FvX90AXyco7RiMW54Apg3nO8KtTKYfTvH9jaoCIwceeM9EJjZWJOd%2FPNA6XPq%2BDTFCN8AAMnhvdt6FunjTTv0i%2BpU7bQ%2Fq3zRJkj5D8WPnFCfFB3YNBOue8ljSghwdmi7sCjmSONfQGJrazaHoMnNs5lCGIUpxM87VI5aO1WfwL7nuN3HTuIdJBBKq1ou5%2F9zI2fZ%2B2CWty%2FsV3uWDXuvLHpoiJkI6JGIoAaviDo9VkJ6Qf6fI8TYNiso3fw0Fv9zhUa17xCjYe4wjK6h2htFS7ePRRnC8K%2F9ts99EkMAa%2BwungnVoK3oZuhB2RF1CkhUqASeCIpagoW3LqgihJKEzIsibS2w1HcnGGpenz48Mzia5vyvIE5oCdfgMWe0FloZBnWrKjXH6nyEdYQpe6KsWpqH0dvC3MMIapoccGOqUBzWXb8JisrpHZnbkeDAg9vnlSn4zVtfhtF09qtNEpRXcgFPluH5qv3UixUIhssRyYX3Bx5iaqdsICpghuWtqT932OldnS6AHohF3271NgGTyCRIBjFVY%2FOUGAao%2FA4V3fzigqGQlnRsDcItMovDV%2FyinOL9qrlE9dbFU5KJmMFcCSTc54si1hubgQ6iANfLColfY7ukc4yVo1R2vz0yCt4TT%2FVZyw&X-Amz-Signature=6275d03db4f8ee6c541d2b451fac1a62fd7f2a386981442aae10e75de01b1442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWMVQHX%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDtOP2dvFx208Tby%2B5fHoeGuWz91BXqA7hqraQ14U%2FzeQIgMJdbsjPHh1oJo43StZd4HV8I79y%2FZjmkb0gkFQh1kP8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQkVc%2B2ZPwWhfJIxSrcA0upfKU56yFoFTHsRA2nUCPVWOIDIfqAmexBEpckJpABx01SedXrg99TljaMLsELZh08Hs3xTboVmYUqoAwgPrV1hlDiP12QMVzsbDbzJeuPs4CBub4buYeZXSOtiddXriioWrls8AzP5gFPzxj7f8L%2BxbxToslGoTuq6q4R4yiSs2NN%2FKVIWpwVLePT6rMIIspoI3iHgVt%2F3lTESIQXibGact8P4%2FvX90AXyco7RiMW54Apg3nO8KtTKYfTvH9jaoCIwceeM9EJjZWJOd%2FPNA6XPq%2BDTFCN8AAMnhvdt6FunjTTv0i%2BpU7bQ%2Fq3zRJkj5D8WPnFCfFB3YNBOue8ljSghwdmi7sCjmSONfQGJrazaHoMnNs5lCGIUpxM87VI5aO1WfwL7nuN3HTuIdJBBKq1ou5%2F9zI2fZ%2B2CWty%2FsV3uWDXuvLHpoiJkI6JGIoAaviDo9VkJ6Qf6fI8TYNiso3fw0Fv9zhUa17xCjYe4wjK6h2htFS7ePRRnC8K%2F9ts99EkMAa%2BwungnVoK3oZuhB2RF1CkhUqASeCIpagoW3LqgihJKEzIsibS2w1HcnGGpenz48Mzia5vyvIE5oCdfgMWe0FloZBnWrKjXH6nyEdYQpe6KsWpqH0dvC3MMIapoccGOqUBzWXb8JisrpHZnbkeDAg9vnlSn4zVtfhtF09qtNEpRXcgFPluH5qv3UixUIhssRyYX3Bx5iaqdsICpghuWtqT932OldnS6AHohF3271NgGTyCRIBjFVY%2FOUGAao%2FA4V3fzigqGQlnRsDcItMovDV%2FyinOL9qrlE9dbFU5KJmMFcCSTc54si1hubgQ6iANfLColfY7ukc4yVo1R2vz0yCt4TT%2FVZyw&X-Amz-Signature=4e8dd9f3caaa74ad65bbc331a46fd12800d0ca6b032b1aebafbbb91d6a8cc05c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWMVQHX%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDtOP2dvFx208Tby%2B5fHoeGuWz91BXqA7hqraQ14U%2FzeQIgMJdbsjPHh1oJo43StZd4HV8I79y%2FZjmkb0gkFQh1kP8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQkVc%2B2ZPwWhfJIxSrcA0upfKU56yFoFTHsRA2nUCPVWOIDIfqAmexBEpckJpABx01SedXrg99TljaMLsELZh08Hs3xTboVmYUqoAwgPrV1hlDiP12QMVzsbDbzJeuPs4CBub4buYeZXSOtiddXriioWrls8AzP5gFPzxj7f8L%2BxbxToslGoTuq6q4R4yiSs2NN%2FKVIWpwVLePT6rMIIspoI3iHgVt%2F3lTESIQXibGact8P4%2FvX90AXyco7RiMW54Apg3nO8KtTKYfTvH9jaoCIwceeM9EJjZWJOd%2FPNA6XPq%2BDTFCN8AAMnhvdt6FunjTTv0i%2BpU7bQ%2Fq3zRJkj5D8WPnFCfFB3YNBOue8ljSghwdmi7sCjmSONfQGJrazaHoMnNs5lCGIUpxM87VI5aO1WfwL7nuN3HTuIdJBBKq1ou5%2F9zI2fZ%2B2CWty%2FsV3uWDXuvLHpoiJkI6JGIoAaviDo9VkJ6Qf6fI8TYNiso3fw0Fv9zhUa17xCjYe4wjK6h2htFS7ePRRnC8K%2F9ts99EkMAa%2BwungnVoK3oZuhB2RF1CkhUqASeCIpagoW3LqgihJKEzIsibS2w1HcnGGpenz48Mzia5vyvIE5oCdfgMWe0FloZBnWrKjXH6nyEdYQpe6KsWpqH0dvC3MMIapoccGOqUBzWXb8JisrpHZnbkeDAg9vnlSn4zVtfhtF09qtNEpRXcgFPluH5qv3UixUIhssRyYX3Bx5iaqdsICpghuWtqT932OldnS6AHohF3271NgGTyCRIBjFVY%2FOUGAao%2FA4V3fzigqGQlnRsDcItMovDV%2FyinOL9qrlE9dbFU5KJmMFcCSTc54si1hubgQ6iANfLColfY7ukc4yVo1R2vz0yCt4TT%2FVZyw&X-Amz-Signature=10466163b3d5ab63f5f64c4e4ddf7f3c85a2e3c7b32bb329d7092c6b7dacb089&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWMVQHX%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDtOP2dvFx208Tby%2B5fHoeGuWz91BXqA7hqraQ14U%2FzeQIgMJdbsjPHh1oJo43StZd4HV8I79y%2FZjmkb0gkFQh1kP8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQkVc%2B2ZPwWhfJIxSrcA0upfKU56yFoFTHsRA2nUCPVWOIDIfqAmexBEpckJpABx01SedXrg99TljaMLsELZh08Hs3xTboVmYUqoAwgPrV1hlDiP12QMVzsbDbzJeuPs4CBub4buYeZXSOtiddXriioWrls8AzP5gFPzxj7f8L%2BxbxToslGoTuq6q4R4yiSs2NN%2FKVIWpwVLePT6rMIIspoI3iHgVt%2F3lTESIQXibGact8P4%2FvX90AXyco7RiMW54Apg3nO8KtTKYfTvH9jaoCIwceeM9EJjZWJOd%2FPNA6XPq%2BDTFCN8AAMnhvdt6FunjTTv0i%2BpU7bQ%2Fq3zRJkj5D8WPnFCfFB3YNBOue8ljSghwdmi7sCjmSONfQGJrazaHoMnNs5lCGIUpxM87VI5aO1WfwL7nuN3HTuIdJBBKq1ou5%2F9zI2fZ%2B2CWty%2FsV3uWDXuvLHpoiJkI6JGIoAaviDo9VkJ6Qf6fI8TYNiso3fw0Fv9zhUa17xCjYe4wjK6h2htFS7ePRRnC8K%2F9ts99EkMAa%2BwungnVoK3oZuhB2RF1CkhUqASeCIpagoW3LqgihJKEzIsibS2w1HcnGGpenz48Mzia5vyvIE5oCdfgMWe0FloZBnWrKjXH6nyEdYQpe6KsWpqH0dvC3MMIapoccGOqUBzWXb8JisrpHZnbkeDAg9vnlSn4zVtfhtF09qtNEpRXcgFPluH5qv3UixUIhssRyYX3Bx5iaqdsICpghuWtqT932OldnS6AHohF3271NgGTyCRIBjFVY%2FOUGAao%2FA4V3fzigqGQlnRsDcItMovDV%2FyinOL9qrlE9dbFU5KJmMFcCSTc54si1hubgQ6iANfLColfY7ukc4yVo1R2vz0yCt4TT%2FVZyw&X-Amz-Signature=2a1dd05817f42df56ba5cad986283639c2ba638d04b26e3413c1cb2d0d5b53f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWMVQHX%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDtOP2dvFx208Tby%2B5fHoeGuWz91BXqA7hqraQ14U%2FzeQIgMJdbsjPHh1oJo43StZd4HV8I79y%2FZjmkb0gkFQh1kP8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQkVc%2B2ZPwWhfJIxSrcA0upfKU56yFoFTHsRA2nUCPVWOIDIfqAmexBEpckJpABx01SedXrg99TljaMLsELZh08Hs3xTboVmYUqoAwgPrV1hlDiP12QMVzsbDbzJeuPs4CBub4buYeZXSOtiddXriioWrls8AzP5gFPzxj7f8L%2BxbxToslGoTuq6q4R4yiSs2NN%2FKVIWpwVLePT6rMIIspoI3iHgVt%2F3lTESIQXibGact8P4%2FvX90AXyco7RiMW54Apg3nO8KtTKYfTvH9jaoCIwceeM9EJjZWJOd%2FPNA6XPq%2BDTFCN8AAMnhvdt6FunjTTv0i%2BpU7bQ%2Fq3zRJkj5D8WPnFCfFB3YNBOue8ljSghwdmi7sCjmSONfQGJrazaHoMnNs5lCGIUpxM87VI5aO1WfwL7nuN3HTuIdJBBKq1ou5%2F9zI2fZ%2B2CWty%2FsV3uWDXuvLHpoiJkI6JGIoAaviDo9VkJ6Qf6fI8TYNiso3fw0Fv9zhUa17xCjYe4wjK6h2htFS7ePRRnC8K%2F9ts99EkMAa%2BwungnVoK3oZuhB2RF1CkhUqASeCIpagoW3LqgihJKEzIsibS2w1HcnGGpenz48Mzia5vyvIE5oCdfgMWe0FloZBnWrKjXH6nyEdYQpe6KsWpqH0dvC3MMIapoccGOqUBzWXb8JisrpHZnbkeDAg9vnlSn4zVtfhtF09qtNEpRXcgFPluH5qv3UixUIhssRyYX3Bx5iaqdsICpghuWtqT932OldnS6AHohF3271NgGTyCRIBjFVY%2FOUGAao%2FA4V3fzigqGQlnRsDcItMovDV%2FyinOL9qrlE9dbFU5KJmMFcCSTc54si1hubgQ6iANfLColfY7ukc4yVo1R2vz0yCt4TT%2FVZyw&X-Amz-Signature=210fee3986af5da14b65de4dcf2a9426ea1740490a6adf803c6bf78afeffa1b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWMVQHX%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDtOP2dvFx208Tby%2B5fHoeGuWz91BXqA7hqraQ14U%2FzeQIgMJdbsjPHh1oJo43StZd4HV8I79y%2FZjmkb0gkFQh1kP8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQkVc%2B2ZPwWhfJIxSrcA0upfKU56yFoFTHsRA2nUCPVWOIDIfqAmexBEpckJpABx01SedXrg99TljaMLsELZh08Hs3xTboVmYUqoAwgPrV1hlDiP12QMVzsbDbzJeuPs4CBub4buYeZXSOtiddXriioWrls8AzP5gFPzxj7f8L%2BxbxToslGoTuq6q4R4yiSs2NN%2FKVIWpwVLePT6rMIIspoI3iHgVt%2F3lTESIQXibGact8P4%2FvX90AXyco7RiMW54Apg3nO8KtTKYfTvH9jaoCIwceeM9EJjZWJOd%2FPNA6XPq%2BDTFCN8AAMnhvdt6FunjTTv0i%2BpU7bQ%2Fq3zRJkj5D8WPnFCfFB3YNBOue8ljSghwdmi7sCjmSONfQGJrazaHoMnNs5lCGIUpxM87VI5aO1WfwL7nuN3HTuIdJBBKq1ou5%2F9zI2fZ%2B2CWty%2FsV3uWDXuvLHpoiJkI6JGIoAaviDo9VkJ6Qf6fI8TYNiso3fw0Fv9zhUa17xCjYe4wjK6h2htFS7ePRRnC8K%2F9ts99EkMAa%2BwungnVoK3oZuhB2RF1CkhUqASeCIpagoW3LqgihJKEzIsibS2w1HcnGGpenz48Mzia5vyvIE5oCdfgMWe0FloZBnWrKjXH6nyEdYQpe6KsWpqH0dvC3MMIapoccGOqUBzWXb8JisrpHZnbkeDAg9vnlSn4zVtfhtF09qtNEpRXcgFPluH5qv3UixUIhssRyYX3Bx5iaqdsICpghuWtqT932OldnS6AHohF3271NgGTyCRIBjFVY%2FOUGAao%2FA4V3fzigqGQlnRsDcItMovDV%2FyinOL9qrlE9dbFU5KJmMFcCSTc54si1hubgQ6iANfLColfY7ukc4yVo1R2vz0yCt4TT%2FVZyw&X-Amz-Signature=201a0b0e47d89a41007f37bc793ab5864ad16e2a9b7b6a24576cf2a832927990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


