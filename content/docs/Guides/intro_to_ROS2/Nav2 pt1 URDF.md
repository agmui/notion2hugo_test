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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B64VS4G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2v0AdS%2B%2Bqb%2FJ%2FGFp9XoiyLkHb62IX87HoFplslBcxpwIgHowN7c8SrvQDBwsbGFHHAvIZXpy93av1kF%2B%2BNcymK8oq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLlC988aZdu%2BIvRDtCrcA0I240WwwD%2FUc9sGn2F4q%2FJM14GIx6y2w4%2BZts%2BspTOvOsgVZxO9qbRWHyxFz7rNB%2B6aFipFL%2FG%2FsAT3Ub3x2itna0EOdeFNZnRlS0G4GlFKhjlL5J4eGwxGJy3cHuvgxWX63uaIyaabYYuZ38uyav%2B6ImTmpVbullXYJiBwk9yxI7RdWMZpTaY6eCOYjpoRK6iIz8VlyfymvVooTA7W4lD4zwLdOWBMCHh1CZE1YgSG6tbKXL7GHUlbldXncUy0jBWvx16MKVU43bZwEPAB%2B9UsSj4dWYt1qHfTlQ5Tv8CPjtkxi6CNMq5gILLKrLS9yEuK1gU5a7fYwU07naEACuiGTwtwn%2BoeEyUz%2FrnWvrgWBQIDfnzL7A1VcbI%2FRwmt9V%2BoYCZ0fjiWYa5PiadEJt1nB0K9yjlv79Mq1hcdDkYwZxWiEjjwpAf8wbZLAyBAIKTcQhR%2F%2FcUToQgXWSOO0MYOKJs14NHILqtNQxu%2F1vFZ3UltJ7ON9v6pPBGjwphfeYoSbmlpdZ7TXYcurRaV5Lh8G6qYENbhIrnkvSUv8yWLIIqVA5W4pCirb2P%2BrdPu5R%2FV291hQvEeLbxS9d%2BGgcpFWoPrguRXSN%2BIdnClBkLxr0YZV%2FqYm%2FN0K4T3MNrSvcQGOqUB5ksGvNbObbjWGpXhF0m3zhLY5gSVVHsX4kgkZKaeH5N3XezPvTc1cCH7ibR%2BBbhxczI91iaKpgYkscn2sKgoht2rNxR0NRNMGsAwj9fGZawZiiavqwOcjfWMzFgquhf4lQzSlp46r6gQjBS8Dyl5dkSM%2BB5owxxYAfzSpW3f2TGkrotqwU4kBEXKqtlae0A7SnBS%2FsLkuLVmqw40N6i5ZYlP94MS&X-Amz-Signature=28fac90557f076968ab082461009d19202adc2feab74c90f52f49deec31b6c41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B64VS4G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2v0AdS%2B%2Bqb%2FJ%2FGFp9XoiyLkHb62IX87HoFplslBcxpwIgHowN7c8SrvQDBwsbGFHHAvIZXpy93av1kF%2B%2BNcymK8oq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLlC988aZdu%2BIvRDtCrcA0I240WwwD%2FUc9sGn2F4q%2FJM14GIx6y2w4%2BZts%2BspTOvOsgVZxO9qbRWHyxFz7rNB%2B6aFipFL%2FG%2FsAT3Ub3x2itna0EOdeFNZnRlS0G4GlFKhjlL5J4eGwxGJy3cHuvgxWX63uaIyaabYYuZ38uyav%2B6ImTmpVbullXYJiBwk9yxI7RdWMZpTaY6eCOYjpoRK6iIz8VlyfymvVooTA7W4lD4zwLdOWBMCHh1CZE1YgSG6tbKXL7GHUlbldXncUy0jBWvx16MKVU43bZwEPAB%2B9UsSj4dWYt1qHfTlQ5Tv8CPjtkxi6CNMq5gILLKrLS9yEuK1gU5a7fYwU07naEACuiGTwtwn%2BoeEyUz%2FrnWvrgWBQIDfnzL7A1VcbI%2FRwmt9V%2BoYCZ0fjiWYa5PiadEJt1nB0K9yjlv79Mq1hcdDkYwZxWiEjjwpAf8wbZLAyBAIKTcQhR%2F%2FcUToQgXWSOO0MYOKJs14NHILqtNQxu%2F1vFZ3UltJ7ON9v6pPBGjwphfeYoSbmlpdZ7TXYcurRaV5Lh8G6qYENbhIrnkvSUv8yWLIIqVA5W4pCirb2P%2BrdPu5R%2FV291hQvEeLbxS9d%2BGgcpFWoPrguRXSN%2BIdnClBkLxr0YZV%2FqYm%2FN0K4T3MNrSvcQGOqUB5ksGvNbObbjWGpXhF0m3zhLY5gSVVHsX4kgkZKaeH5N3XezPvTc1cCH7ibR%2BBbhxczI91iaKpgYkscn2sKgoht2rNxR0NRNMGsAwj9fGZawZiiavqwOcjfWMzFgquhf4lQzSlp46r6gQjBS8Dyl5dkSM%2BB5owxxYAfzSpW3f2TGkrotqwU4kBEXKqtlae0A7SnBS%2FsLkuLVmqw40N6i5ZYlP94MS&X-Amz-Signature=5fbb742a6eae72b46ac7077ee422bb261589ff5a8e02ebfe281f9995f4816c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B64VS4G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2v0AdS%2B%2Bqb%2FJ%2FGFp9XoiyLkHb62IX87HoFplslBcxpwIgHowN7c8SrvQDBwsbGFHHAvIZXpy93av1kF%2B%2BNcymK8oq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLlC988aZdu%2BIvRDtCrcA0I240WwwD%2FUc9sGn2F4q%2FJM14GIx6y2w4%2BZts%2BspTOvOsgVZxO9qbRWHyxFz7rNB%2B6aFipFL%2FG%2FsAT3Ub3x2itna0EOdeFNZnRlS0G4GlFKhjlL5J4eGwxGJy3cHuvgxWX63uaIyaabYYuZ38uyav%2B6ImTmpVbullXYJiBwk9yxI7RdWMZpTaY6eCOYjpoRK6iIz8VlyfymvVooTA7W4lD4zwLdOWBMCHh1CZE1YgSG6tbKXL7GHUlbldXncUy0jBWvx16MKVU43bZwEPAB%2B9UsSj4dWYt1qHfTlQ5Tv8CPjtkxi6CNMq5gILLKrLS9yEuK1gU5a7fYwU07naEACuiGTwtwn%2BoeEyUz%2FrnWvrgWBQIDfnzL7A1VcbI%2FRwmt9V%2BoYCZ0fjiWYa5PiadEJt1nB0K9yjlv79Mq1hcdDkYwZxWiEjjwpAf8wbZLAyBAIKTcQhR%2F%2FcUToQgXWSOO0MYOKJs14NHILqtNQxu%2F1vFZ3UltJ7ON9v6pPBGjwphfeYoSbmlpdZ7TXYcurRaV5Lh8G6qYENbhIrnkvSUv8yWLIIqVA5W4pCirb2P%2BrdPu5R%2FV291hQvEeLbxS9d%2BGgcpFWoPrguRXSN%2BIdnClBkLxr0YZV%2FqYm%2FN0K4T3MNrSvcQGOqUB5ksGvNbObbjWGpXhF0m3zhLY5gSVVHsX4kgkZKaeH5N3XezPvTc1cCH7ibR%2BBbhxczI91iaKpgYkscn2sKgoht2rNxR0NRNMGsAwj9fGZawZiiavqwOcjfWMzFgquhf4lQzSlp46r6gQjBS8Dyl5dkSM%2BB5owxxYAfzSpW3f2TGkrotqwU4kBEXKqtlae0A7SnBS%2FsLkuLVmqw40N6i5ZYlP94MS&X-Amz-Signature=39750a62c6da60f172bd91c2dcec558cedceeb774d14f648d1c0ae31df689d39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B64VS4G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2v0AdS%2B%2Bqb%2FJ%2FGFp9XoiyLkHb62IX87HoFplslBcxpwIgHowN7c8SrvQDBwsbGFHHAvIZXpy93av1kF%2B%2BNcymK8oq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLlC988aZdu%2BIvRDtCrcA0I240WwwD%2FUc9sGn2F4q%2FJM14GIx6y2w4%2BZts%2BspTOvOsgVZxO9qbRWHyxFz7rNB%2B6aFipFL%2FG%2FsAT3Ub3x2itna0EOdeFNZnRlS0G4GlFKhjlL5J4eGwxGJy3cHuvgxWX63uaIyaabYYuZ38uyav%2B6ImTmpVbullXYJiBwk9yxI7RdWMZpTaY6eCOYjpoRK6iIz8VlyfymvVooTA7W4lD4zwLdOWBMCHh1CZE1YgSG6tbKXL7GHUlbldXncUy0jBWvx16MKVU43bZwEPAB%2B9UsSj4dWYt1qHfTlQ5Tv8CPjtkxi6CNMq5gILLKrLS9yEuK1gU5a7fYwU07naEACuiGTwtwn%2BoeEyUz%2FrnWvrgWBQIDfnzL7A1VcbI%2FRwmt9V%2BoYCZ0fjiWYa5PiadEJt1nB0K9yjlv79Mq1hcdDkYwZxWiEjjwpAf8wbZLAyBAIKTcQhR%2F%2FcUToQgXWSOO0MYOKJs14NHILqtNQxu%2F1vFZ3UltJ7ON9v6pPBGjwphfeYoSbmlpdZ7TXYcurRaV5Lh8G6qYENbhIrnkvSUv8yWLIIqVA5W4pCirb2P%2BrdPu5R%2FV291hQvEeLbxS9d%2BGgcpFWoPrguRXSN%2BIdnClBkLxr0YZV%2FqYm%2FN0K4T3MNrSvcQGOqUB5ksGvNbObbjWGpXhF0m3zhLY5gSVVHsX4kgkZKaeH5N3XezPvTc1cCH7ibR%2BBbhxczI91iaKpgYkscn2sKgoht2rNxR0NRNMGsAwj9fGZawZiiavqwOcjfWMzFgquhf4lQzSlp46r6gQjBS8Dyl5dkSM%2BB5owxxYAfzSpW3f2TGkrotqwU4kBEXKqtlae0A7SnBS%2FsLkuLVmqw40N6i5ZYlP94MS&X-Amz-Signature=453fa8256cf973706ada95669f71488be844bc3cd3e2ebce5011e4fe96c0fea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B64VS4G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2v0AdS%2B%2Bqb%2FJ%2FGFp9XoiyLkHb62IX87HoFplslBcxpwIgHowN7c8SrvQDBwsbGFHHAvIZXpy93av1kF%2B%2BNcymK8oq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLlC988aZdu%2BIvRDtCrcA0I240WwwD%2FUc9sGn2F4q%2FJM14GIx6y2w4%2BZts%2BspTOvOsgVZxO9qbRWHyxFz7rNB%2B6aFipFL%2FG%2FsAT3Ub3x2itna0EOdeFNZnRlS0G4GlFKhjlL5J4eGwxGJy3cHuvgxWX63uaIyaabYYuZ38uyav%2B6ImTmpVbullXYJiBwk9yxI7RdWMZpTaY6eCOYjpoRK6iIz8VlyfymvVooTA7W4lD4zwLdOWBMCHh1CZE1YgSG6tbKXL7GHUlbldXncUy0jBWvx16MKVU43bZwEPAB%2B9UsSj4dWYt1qHfTlQ5Tv8CPjtkxi6CNMq5gILLKrLS9yEuK1gU5a7fYwU07naEACuiGTwtwn%2BoeEyUz%2FrnWvrgWBQIDfnzL7A1VcbI%2FRwmt9V%2BoYCZ0fjiWYa5PiadEJt1nB0K9yjlv79Mq1hcdDkYwZxWiEjjwpAf8wbZLAyBAIKTcQhR%2F%2FcUToQgXWSOO0MYOKJs14NHILqtNQxu%2F1vFZ3UltJ7ON9v6pPBGjwphfeYoSbmlpdZ7TXYcurRaV5Lh8G6qYENbhIrnkvSUv8yWLIIqVA5W4pCirb2P%2BrdPu5R%2FV291hQvEeLbxS9d%2BGgcpFWoPrguRXSN%2BIdnClBkLxr0YZV%2FqYm%2FN0K4T3MNrSvcQGOqUB5ksGvNbObbjWGpXhF0m3zhLY5gSVVHsX4kgkZKaeH5N3XezPvTc1cCH7ibR%2BBbhxczI91iaKpgYkscn2sKgoht2rNxR0NRNMGsAwj9fGZawZiiavqwOcjfWMzFgquhf4lQzSlp46r6gQjBS8Dyl5dkSM%2BB5owxxYAfzSpW3f2TGkrotqwU4kBEXKqtlae0A7SnBS%2FsLkuLVmqw40N6i5ZYlP94MS&X-Amz-Signature=1c75dcd6a8ad5e7f33ecffd358d169d944db8548bad61652a238a7f9cfe6a1fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B64VS4G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2v0AdS%2B%2Bqb%2FJ%2FGFp9XoiyLkHb62IX87HoFplslBcxpwIgHowN7c8SrvQDBwsbGFHHAvIZXpy93av1kF%2B%2BNcymK8oq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLlC988aZdu%2BIvRDtCrcA0I240WwwD%2FUc9sGn2F4q%2FJM14GIx6y2w4%2BZts%2BspTOvOsgVZxO9qbRWHyxFz7rNB%2B6aFipFL%2FG%2FsAT3Ub3x2itna0EOdeFNZnRlS0G4GlFKhjlL5J4eGwxGJy3cHuvgxWX63uaIyaabYYuZ38uyav%2B6ImTmpVbullXYJiBwk9yxI7RdWMZpTaY6eCOYjpoRK6iIz8VlyfymvVooTA7W4lD4zwLdOWBMCHh1CZE1YgSG6tbKXL7GHUlbldXncUy0jBWvx16MKVU43bZwEPAB%2B9UsSj4dWYt1qHfTlQ5Tv8CPjtkxi6CNMq5gILLKrLS9yEuK1gU5a7fYwU07naEACuiGTwtwn%2BoeEyUz%2FrnWvrgWBQIDfnzL7A1VcbI%2FRwmt9V%2BoYCZ0fjiWYa5PiadEJt1nB0K9yjlv79Mq1hcdDkYwZxWiEjjwpAf8wbZLAyBAIKTcQhR%2F%2FcUToQgXWSOO0MYOKJs14NHILqtNQxu%2F1vFZ3UltJ7ON9v6pPBGjwphfeYoSbmlpdZ7TXYcurRaV5Lh8G6qYENbhIrnkvSUv8yWLIIqVA5W4pCirb2P%2BrdPu5R%2FV291hQvEeLbxS9d%2BGgcpFWoPrguRXSN%2BIdnClBkLxr0YZV%2FqYm%2FN0K4T3MNrSvcQGOqUB5ksGvNbObbjWGpXhF0m3zhLY5gSVVHsX4kgkZKaeH5N3XezPvTc1cCH7ibR%2BBbhxczI91iaKpgYkscn2sKgoht2rNxR0NRNMGsAwj9fGZawZiiavqwOcjfWMzFgquhf4lQzSlp46r6gQjBS8Dyl5dkSM%2BB5owxxYAfzSpW3f2TGkrotqwU4kBEXKqtlae0A7SnBS%2FsLkuLVmqw40N6i5ZYlP94MS&X-Amz-Signature=432291466fea09477773e4af579912d2a8d58dd978ff65f0a873136fe1b6e9c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B64VS4G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2v0AdS%2B%2Bqb%2FJ%2FGFp9XoiyLkHb62IX87HoFplslBcxpwIgHowN7c8SrvQDBwsbGFHHAvIZXpy93av1kF%2B%2BNcymK8oq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLlC988aZdu%2BIvRDtCrcA0I240WwwD%2FUc9sGn2F4q%2FJM14GIx6y2w4%2BZts%2BspTOvOsgVZxO9qbRWHyxFz7rNB%2B6aFipFL%2FG%2FsAT3Ub3x2itna0EOdeFNZnRlS0G4GlFKhjlL5J4eGwxGJy3cHuvgxWX63uaIyaabYYuZ38uyav%2B6ImTmpVbullXYJiBwk9yxI7RdWMZpTaY6eCOYjpoRK6iIz8VlyfymvVooTA7W4lD4zwLdOWBMCHh1CZE1YgSG6tbKXL7GHUlbldXncUy0jBWvx16MKVU43bZwEPAB%2B9UsSj4dWYt1qHfTlQ5Tv8CPjtkxi6CNMq5gILLKrLS9yEuK1gU5a7fYwU07naEACuiGTwtwn%2BoeEyUz%2FrnWvrgWBQIDfnzL7A1VcbI%2FRwmt9V%2BoYCZ0fjiWYa5PiadEJt1nB0K9yjlv79Mq1hcdDkYwZxWiEjjwpAf8wbZLAyBAIKTcQhR%2F%2FcUToQgXWSOO0MYOKJs14NHILqtNQxu%2F1vFZ3UltJ7ON9v6pPBGjwphfeYoSbmlpdZ7TXYcurRaV5Lh8G6qYENbhIrnkvSUv8yWLIIqVA5W4pCirb2P%2BrdPu5R%2FV291hQvEeLbxS9d%2BGgcpFWoPrguRXSN%2BIdnClBkLxr0YZV%2FqYm%2FN0K4T3MNrSvcQGOqUB5ksGvNbObbjWGpXhF0m3zhLY5gSVVHsX4kgkZKaeH5N3XezPvTc1cCH7ibR%2BBbhxczI91iaKpgYkscn2sKgoht2rNxR0NRNMGsAwj9fGZawZiiavqwOcjfWMzFgquhf4lQzSlp46r6gQjBS8Dyl5dkSM%2BB5owxxYAfzSpW3f2TGkrotqwU4kBEXKqtlae0A7SnBS%2FsLkuLVmqw40N6i5ZYlP94MS&X-Amz-Signature=36e6ce046aeceae44c49761dcf291f3f93d51164093a08c677bb78d1f52f9ed5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B64VS4G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2v0AdS%2B%2Bqb%2FJ%2FGFp9XoiyLkHb62IX87HoFplslBcxpwIgHowN7c8SrvQDBwsbGFHHAvIZXpy93av1kF%2B%2BNcymK8oq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLlC988aZdu%2BIvRDtCrcA0I240WwwD%2FUc9sGn2F4q%2FJM14GIx6y2w4%2BZts%2BspTOvOsgVZxO9qbRWHyxFz7rNB%2B6aFipFL%2FG%2FsAT3Ub3x2itna0EOdeFNZnRlS0G4GlFKhjlL5J4eGwxGJy3cHuvgxWX63uaIyaabYYuZ38uyav%2B6ImTmpVbullXYJiBwk9yxI7RdWMZpTaY6eCOYjpoRK6iIz8VlyfymvVooTA7W4lD4zwLdOWBMCHh1CZE1YgSG6tbKXL7GHUlbldXncUy0jBWvx16MKVU43bZwEPAB%2B9UsSj4dWYt1qHfTlQ5Tv8CPjtkxi6CNMq5gILLKrLS9yEuK1gU5a7fYwU07naEACuiGTwtwn%2BoeEyUz%2FrnWvrgWBQIDfnzL7A1VcbI%2FRwmt9V%2BoYCZ0fjiWYa5PiadEJt1nB0K9yjlv79Mq1hcdDkYwZxWiEjjwpAf8wbZLAyBAIKTcQhR%2F%2FcUToQgXWSOO0MYOKJs14NHILqtNQxu%2F1vFZ3UltJ7ON9v6pPBGjwphfeYoSbmlpdZ7TXYcurRaV5Lh8G6qYENbhIrnkvSUv8yWLIIqVA5W4pCirb2P%2BrdPu5R%2FV291hQvEeLbxS9d%2BGgcpFWoPrguRXSN%2BIdnClBkLxr0YZV%2FqYm%2FN0K4T3MNrSvcQGOqUB5ksGvNbObbjWGpXhF0m3zhLY5gSVVHsX4kgkZKaeH5N3XezPvTc1cCH7ibR%2BBbhxczI91iaKpgYkscn2sKgoht2rNxR0NRNMGsAwj9fGZawZiiavqwOcjfWMzFgquhf4lQzSlp46r6gQjBS8Dyl5dkSM%2BB5owxxYAfzSpW3f2TGkrotqwU4kBEXKqtlae0A7SnBS%2FsLkuLVmqw40N6i5ZYlP94MS&X-Amz-Signature=c86790e55e8bf5915b07cedfb4a43e33dea086e9490dd77299c553f62087b040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B64VS4G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2v0AdS%2B%2Bqb%2FJ%2FGFp9XoiyLkHb62IX87HoFplslBcxpwIgHowN7c8SrvQDBwsbGFHHAvIZXpy93av1kF%2B%2BNcymK8oq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLlC988aZdu%2BIvRDtCrcA0I240WwwD%2FUc9sGn2F4q%2FJM14GIx6y2w4%2BZts%2BspTOvOsgVZxO9qbRWHyxFz7rNB%2B6aFipFL%2FG%2FsAT3Ub3x2itna0EOdeFNZnRlS0G4GlFKhjlL5J4eGwxGJy3cHuvgxWX63uaIyaabYYuZ38uyav%2B6ImTmpVbullXYJiBwk9yxI7RdWMZpTaY6eCOYjpoRK6iIz8VlyfymvVooTA7W4lD4zwLdOWBMCHh1CZE1YgSG6tbKXL7GHUlbldXncUy0jBWvx16MKVU43bZwEPAB%2B9UsSj4dWYt1qHfTlQ5Tv8CPjtkxi6CNMq5gILLKrLS9yEuK1gU5a7fYwU07naEACuiGTwtwn%2BoeEyUz%2FrnWvrgWBQIDfnzL7A1VcbI%2FRwmt9V%2BoYCZ0fjiWYa5PiadEJt1nB0K9yjlv79Mq1hcdDkYwZxWiEjjwpAf8wbZLAyBAIKTcQhR%2F%2FcUToQgXWSOO0MYOKJs14NHILqtNQxu%2F1vFZ3UltJ7ON9v6pPBGjwphfeYoSbmlpdZ7TXYcurRaV5Lh8G6qYENbhIrnkvSUv8yWLIIqVA5W4pCirb2P%2BrdPu5R%2FV291hQvEeLbxS9d%2BGgcpFWoPrguRXSN%2BIdnClBkLxr0YZV%2FqYm%2FN0K4T3MNrSvcQGOqUB5ksGvNbObbjWGpXhF0m3zhLY5gSVVHsX4kgkZKaeH5N3XezPvTc1cCH7ibR%2BBbhxczI91iaKpgYkscn2sKgoht2rNxR0NRNMGsAwj9fGZawZiiavqwOcjfWMzFgquhf4lQzSlp46r6gQjBS8Dyl5dkSM%2BB5owxxYAfzSpW3f2TGkrotqwU4kBEXKqtlae0A7SnBS%2FsLkuLVmqw40N6i5ZYlP94MS&X-Amz-Signature=506a893307179bab811e797b438fdb5e5d7f0427256c8009339a800adde37bec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B64VS4G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2v0AdS%2B%2Bqb%2FJ%2FGFp9XoiyLkHb62IX87HoFplslBcxpwIgHowN7c8SrvQDBwsbGFHHAvIZXpy93av1kF%2B%2BNcymK8oq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLlC988aZdu%2BIvRDtCrcA0I240WwwD%2FUc9sGn2F4q%2FJM14GIx6y2w4%2BZts%2BspTOvOsgVZxO9qbRWHyxFz7rNB%2B6aFipFL%2FG%2FsAT3Ub3x2itna0EOdeFNZnRlS0G4GlFKhjlL5J4eGwxGJy3cHuvgxWX63uaIyaabYYuZ38uyav%2B6ImTmpVbullXYJiBwk9yxI7RdWMZpTaY6eCOYjpoRK6iIz8VlyfymvVooTA7W4lD4zwLdOWBMCHh1CZE1YgSG6tbKXL7GHUlbldXncUy0jBWvx16MKVU43bZwEPAB%2B9UsSj4dWYt1qHfTlQ5Tv8CPjtkxi6CNMq5gILLKrLS9yEuK1gU5a7fYwU07naEACuiGTwtwn%2BoeEyUz%2FrnWvrgWBQIDfnzL7A1VcbI%2FRwmt9V%2BoYCZ0fjiWYa5PiadEJt1nB0K9yjlv79Mq1hcdDkYwZxWiEjjwpAf8wbZLAyBAIKTcQhR%2F%2FcUToQgXWSOO0MYOKJs14NHILqtNQxu%2F1vFZ3UltJ7ON9v6pPBGjwphfeYoSbmlpdZ7TXYcurRaV5Lh8G6qYENbhIrnkvSUv8yWLIIqVA5W4pCirb2P%2BrdPu5R%2FV291hQvEeLbxS9d%2BGgcpFWoPrguRXSN%2BIdnClBkLxr0YZV%2FqYm%2FN0K4T3MNrSvcQGOqUB5ksGvNbObbjWGpXhF0m3zhLY5gSVVHsX4kgkZKaeH5N3XezPvTc1cCH7ibR%2BBbhxczI91iaKpgYkscn2sKgoht2rNxR0NRNMGsAwj9fGZawZiiavqwOcjfWMzFgquhf4lQzSlp46r6gQjBS8Dyl5dkSM%2BB5owxxYAfzSpW3f2TGkrotqwU4kBEXKqtlae0A7SnBS%2FsLkuLVmqw40N6i5ZYlP94MS&X-Amz-Signature=bb747af1b17a9a48fe730ac65db710b4cd8a76dd3a356b3282ea46c450ab2601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIE72CQO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpAa%2B%2Be3XtrVxFZoHykdMCBiUC3D1frjgJ%2Fr7pDAxuPAiAQA4xo1gBoU15vacAeqKCxNSy%2BcTM7aiLyNXnKuCUVHyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM15oiLDmnxK1INfj5KtwDNbsxqdALNg6po9pub%2BgXKLWieU6nTxmk9BjKWCZ0sR6TvvkUkZ%2Fspl2sUYi%2BQqK%2BGC%2FGQgYrK4UgugGxLltUOuBIljheCXajwf%2F9NWTqd8gg0rlenSeGJVGzKYf3MUXiakI7SgiJSf4h8%2B04HFUSygB4Zk%2B3fgPSywgvaxKaQsy%2B4nw38EWiyAOg0nnFGKgijyo01aUPbTZFwfvBhGc%2BGDuLd%2F09HnVULK5xUObRXxufsgJqVvJu2QRRvgk8IWYCYDrvcmNSsg8aIajUxuz837fvugFPcywpU8o8WBGo649nPLfWyaBG3LXucFmA2gvbpQ7j8jFNX%2FfQW6ukDqL%2FiMngq9vHh8Wivk5Q1ydVor2pfUHqCNBad0J3ClCS9TlRxQUEikdDGHCR%2BtEI%2F7ttLtCtvx7FbP1bBSNmX1aRRiZr%2FPHZxwa21LEBsoNyWTAkpVjysFO5%2F9wZT50CY%2BjviEK1Uh2gIdycB7SLjN2emwMBcBtFCQZFZLBzSrponeuiLvaq4kvKITwzHZy9IQHYP5ZHRVPyQbwxVv6Na08dlcmQJRgetT7yPwyf6yOxq72JxZnt8kPKDOiX2jPV%2FWyKvQw9wsz0rHZl6wrm1MBK%2F4w7%2FKvYKIlcP%2FdgSBMw%2FdG9xAY6pgEi01yhwCKRb8umHoQ9djNmQBacQP%2FOweOje9v3Qr%2FJWi8s17Dj3ri1dNzZd2P3oFa8jcGr%2BHq3Tw27bpcnONVAwkYj0KR35bvWI1yLNaLKAz2qF8B9A0IMzSVfv%2BaHpwsDjU2TQZhACCQsz9pnnBVV7KlpFrkOK9ZZb1%2FhYWLL7JlqakSLBT7M7HlkqPfUZXzgb06RVnOeoQlUY74UPxeGlb6tdwln&X-Amz-Signature=49a0f62c25014e6477c186d640935c6242f0a464a88acdd5d0bd8cb57cd1e048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LIHUXBY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEVFsUEIVwTF%2BuHQ14w5FpwnmRpJyvjBNoQkN7wEouIAiBGkEdqkG9NBe%2F20wDANNop%2F1d4uKpz8DVyOGe3vJNAdCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMdfPjTE02ZEldwsSlKtwDQZ7OtgdG%2FucCfHsBp%2Bjwuzy1L1al5lUh62lgKHMlFQx%2FWoDbBnaKvAMUHpgTAxzms5qdTzZnJvPeY2fDIu3ZCHzfyIUjsJ03Jnk0qLUmqAPwJtHVlneC2T%2FARG08QOAGmmOtlWNWRt42lg7s5tB8aj3JDx3I94UXYPJ1KmF8L%2FW3sI6ieFsbc2G%2FtvDOyA7Q%2FFTUnnzDX%2FNXN1Ii7mfgD6chwGVlsCNCVIRzS21CtvV5S4rhYp1ftrVGgq%2BB3Vt9GLtMX4R5%2FDgVHfOgdkt2FKVuVROXevFSWG3x7T%2FdfEIA1sVS2oavyYcsb%2B%2BgfkOPX17gPVhU0wAPPKDaXrAUnCsbidMIHwg0HJiDlA2E0uLjTzfoltbDGodbHT%2BaxE1lzj3HAPnQKJ9hOGqCjmLeoc1VFTU%2FFGTKUAsyEeSF6rwwlsRwl15B2E9LnHUaGwUZdU1hNOfXarmf321m1%2FvtvwL5l1lXG1q7vpdADW8TS2qCLpfVVpGInS8DFOltBv8HVClkKbaRQ2zcf%2FKg9vKCPQ7epPdVnVJSnmrUVafvySf%2FEpWD29wDtq%2FO3pmcPg0ZJG2Pl%2FQkPWXy46QFDCGweJmfTL1dmUSrQdFQmXjH8LNkCGZhRhZS038Sr24whdK9xAY6pgGxV3Bn9jbvKLoQegope3URWMgoo8oyziQ%2BRcuoS19GlT%2BmuwHv%2FzNKXz0fXPLkmPXFANQq0kpnhymB%2Bi1jZZ1nX8DHnRtmQiOn%2BAg3977SOhpI8yda7kzgbMxPdH07kkmiRGIwihGH4JxWaiybBgxKXPxDU55JpKvmHuBclyvbZvbHt4orHp6MA0MXUXTAMiybvT2xi18%2F%2BIUAWVo6%2FIBnuuRPj4cB&X-Amz-Signature=c1d90d34b0b07b4dc60507afa3609019ed16f199e068af5348ccad0e855d79d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVDGMQ5M%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAwC2Z7mTmlm4%2BtYw1SlcCJ5D2FRun5r59YoC2MMUsSAiEA0CdShDd8dY%2BZJPzXmEH8Xov7K0KCJ6NpRS%2FEJltxcg4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDDZRCX1Vai%2BMTzoLvircA6I1dxLZkahvw2A%2F%2Fn0ZSPKNKVUOm%2BHd0s8LGlTxH9pHhoWtnsDutD%2B2kFYNVBth5SO%2BMFxUslLiEqyrTFVGACDumH%2FzaEm%2FI%2FBDwWQ6GEW2dsZazIhlTLLJsHgohYo%2F2RiVjsloR8SpYXmSnc8dBcrpws%2FunwnnEVLGRJktXF%2FdQhO3W1zPb3xf9mQpszAx6%2FvMGV35ge2QTUn8L3hgcNjZIQ8bnsCOWOUrJXuszlQ%2F7lmsvV0JKQv0AE1IxEiS3V8Dk1E1%2FCpcoV3%2BPeBzMWjAwf3aLROjnrHoi%2BdpLff8UtSGCCasIHox8KOxoqrh05%2F8qM0VURovfgUxYhj0XMtMWtQ4ou03r0dBhF0QuXFzhURki7SU0M9EfOlZtpDSPr9hEtPbrmeZdujR%2Ba0ltMe1j8r8I66NKlyg4pQcCGMPaNBWz5AZW%2F2mCdru0ywsBJZd%2FuuRxW5GBUASHbZ9Z43CaiC1eXBV4C9DNJkWAZUinqVZYlwi%2FY17OkYdc3U6nySQJV6rtgJEdJ0tdm%2FmlWpH%2B8YUERcH2MtSOKIyNdT9LmBpjvkkXroanw5D9F8CHUWI%2FC2PUku%2F7BiziPBSbkvH4ilA8P%2Fn%2BnTQAknKeVEHquGf117RAwQMDW1aMNrSvcQGOqUB4nLMUr6Yf8d2A6To7AhxFrSGNpDPC3eqjrgYyh2DjFFnANyUV%2BlAX2sNSoDSf8j4FjeDNrid6tMkmvL%2FQ02MMXJ43X%2BOmHWUm%2FtjkmF426QbgI6ms7%2B7R7udsLb%2FAp79g%2FwX4EHEaYGGk%2BmCrWHtdBAVk9%2Fb49e5Vgn%2F1Y%2B0B9KHXCFilqWBORl6PBC1Hz8pl4o7L26dk%2Bi9spMmP9RHnJiTF3vf&X-Amz-Signature=ac85cbcdcf169df2b92539077ee72e21901273f9c631874ebce026aa6f85be41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B64VS4G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2v0AdS%2B%2Bqb%2FJ%2FGFp9XoiyLkHb62IX87HoFplslBcxpwIgHowN7c8SrvQDBwsbGFHHAvIZXpy93av1kF%2B%2BNcymK8oq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLlC988aZdu%2BIvRDtCrcA0I240WwwD%2FUc9sGn2F4q%2FJM14GIx6y2w4%2BZts%2BspTOvOsgVZxO9qbRWHyxFz7rNB%2B6aFipFL%2FG%2FsAT3Ub3x2itna0EOdeFNZnRlS0G4GlFKhjlL5J4eGwxGJy3cHuvgxWX63uaIyaabYYuZ38uyav%2B6ImTmpVbullXYJiBwk9yxI7RdWMZpTaY6eCOYjpoRK6iIz8VlyfymvVooTA7W4lD4zwLdOWBMCHh1CZE1YgSG6tbKXL7GHUlbldXncUy0jBWvx16MKVU43bZwEPAB%2B9UsSj4dWYt1qHfTlQ5Tv8CPjtkxi6CNMq5gILLKrLS9yEuK1gU5a7fYwU07naEACuiGTwtwn%2BoeEyUz%2FrnWvrgWBQIDfnzL7A1VcbI%2FRwmt9V%2BoYCZ0fjiWYa5PiadEJt1nB0K9yjlv79Mq1hcdDkYwZxWiEjjwpAf8wbZLAyBAIKTcQhR%2F%2FcUToQgXWSOO0MYOKJs14NHILqtNQxu%2F1vFZ3UltJ7ON9v6pPBGjwphfeYoSbmlpdZ7TXYcurRaV5Lh8G6qYENbhIrnkvSUv8yWLIIqVA5W4pCirb2P%2BrdPu5R%2FV291hQvEeLbxS9d%2BGgcpFWoPrguRXSN%2BIdnClBkLxr0YZV%2FqYm%2FN0K4T3MNrSvcQGOqUB5ksGvNbObbjWGpXhF0m3zhLY5gSVVHsX4kgkZKaeH5N3XezPvTc1cCH7ibR%2BBbhxczI91iaKpgYkscn2sKgoht2rNxR0NRNMGsAwj9fGZawZiiavqwOcjfWMzFgquhf4lQzSlp46r6gQjBS8Dyl5dkSM%2BB5owxxYAfzSpW3f2TGkrotqwU4kBEXKqtlae0A7SnBS%2FsLkuLVmqw40N6i5ZYlP94MS&X-Amz-Signature=7f17d7ae44c81a791e58e0e4701be774500d51b3a4d009ee789a9771fbb599e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXRGH5KR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWNm9rYFjlOrWYvD8yft2btJZA7E5BhmC3uybOZqW35AiEAqcSu6LvfI3aZlas4hPKsnDVTShNRAs5A5FMl%2Fv8Ax8kq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDF%2BhSzkunqwyB5vNTCrcA1RktHwWfOPHwzHJpQ%2FWJ5Tn6NNqmVdJnsyhFp5p9vz6QGb5pwItXflgWNS6o8E37A%2BpvEi3Qb%2FcMxPEYeyq%2FqG56jFqf4sDJyEVaU1U9RPRJYif4iOYzhTBCxj4c7rtcAKTUbNhkqSVGv6%2BffSkDqxBlpIzYM48eDRJQ2FKUDPV%2FXaNGgjT3%2FrXBGWyfW85Qr07F7Y8Jw9m9ajVekgl74kpH4QQ5cj%2BpwWyMdLU0TGmxRMvf4GniFF7nmnYg%2BIze62vyDvbaWGWK6XdivMG9OUHSm2pVAt1cdlqusKaX1ZmErCgQFkIOUAnMKnjfcBJuHBsUL8zPGkf6GiijIMWfjJmnMHuzyWW1iSZuRbuwUO0jEB0DzA%2F3cW4AEuweXGwKHQyI%2BMdoKM%2BTrh5SSJZ0K0zn0j%2F%2FBkdPj3XeUq9AfX5Oe%2B2yf90ez8sYszu0soC7NS6dLJeSrS%2FlZ3K1F%2Fwpm%2FdBQ6jGX37%2FIRlf%2FKazZDzg2wQuAtVPSGOzVgZZA1asEbSNHhypr3KC%2Bw%2BbF%2FgiFcWnXLQJRynSfXHZt3MMvChzs65SgGlClvY%2BQOf%2BJP6C4tgzvSI6XcxcvRPuzMMbuCTSYInKePDxbsp0YprfE95bQwZggyODb65SUPMMP7RvcQGOqUBkyxbBpKnhqGXh82oW6RGPWZQH8WRZxC36z%2B2FlzKG%2B1SH55e7q3TIgDP%2BrxCkxQQj2kvJX1kra7cHzWDOYZn0kCQmZfDFJCaQGUUnyDSMOaC30x1nB8eYEppkCjhZv7TcJlwprlSB8VLb101q88oAizIBf75K5dlMbkNklkenaG1xA0Ayr6c1zAGt2rJlnNe92DXDz%2FRs2Cal9NyYi4YVbxTn37O&X-Amz-Signature=cf756991f9ffa55aa75e9befcb42c940d2f1a0c281b0e8cc98bee4dc83bb7a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B64VS4G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2v0AdS%2B%2Bqb%2FJ%2FGFp9XoiyLkHb62IX87HoFplslBcxpwIgHowN7c8SrvQDBwsbGFHHAvIZXpy93av1kF%2B%2BNcymK8oq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLlC988aZdu%2BIvRDtCrcA0I240WwwD%2FUc9sGn2F4q%2FJM14GIx6y2w4%2BZts%2BspTOvOsgVZxO9qbRWHyxFz7rNB%2B6aFipFL%2FG%2FsAT3Ub3x2itna0EOdeFNZnRlS0G4GlFKhjlL5J4eGwxGJy3cHuvgxWX63uaIyaabYYuZ38uyav%2B6ImTmpVbullXYJiBwk9yxI7RdWMZpTaY6eCOYjpoRK6iIz8VlyfymvVooTA7W4lD4zwLdOWBMCHh1CZE1YgSG6tbKXL7GHUlbldXncUy0jBWvx16MKVU43bZwEPAB%2B9UsSj4dWYt1qHfTlQ5Tv8CPjtkxi6CNMq5gILLKrLS9yEuK1gU5a7fYwU07naEACuiGTwtwn%2BoeEyUz%2FrnWvrgWBQIDfnzL7A1VcbI%2FRwmt9V%2BoYCZ0fjiWYa5PiadEJt1nB0K9yjlv79Mq1hcdDkYwZxWiEjjwpAf8wbZLAyBAIKTcQhR%2F%2FcUToQgXWSOO0MYOKJs14NHILqtNQxu%2F1vFZ3UltJ7ON9v6pPBGjwphfeYoSbmlpdZ7TXYcurRaV5Lh8G6qYENbhIrnkvSUv8yWLIIqVA5W4pCirb2P%2BrdPu5R%2FV291hQvEeLbxS9d%2BGgcpFWoPrguRXSN%2BIdnClBkLxr0YZV%2FqYm%2FN0K4T3MNrSvcQGOqUB5ksGvNbObbjWGpXhF0m3zhLY5gSVVHsX4kgkZKaeH5N3XezPvTc1cCH7ibR%2BBbhxczI91iaKpgYkscn2sKgoht2rNxR0NRNMGsAwj9fGZawZiiavqwOcjfWMzFgquhf4lQzSlp46r6gQjBS8Dyl5dkSM%2BB5owxxYAfzSpW3f2TGkrotqwU4kBEXKqtlae0A7SnBS%2FsLkuLVmqw40N6i5ZYlP94MS&X-Amz-Signature=e1e17460b3bfee84ade7a2e812a2212d05f19e7a1c111fd40ed9b9eb992bfca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5THGPB4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRnmKSvuleNLqXox2qLLfOog8aq%2FF4CBx0JT%2FvudRrzAiEAoG5%2Bbs9paR97LzoVhd%2BM%2BG24E2ootNtZuq3KdxyJZj4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNsFNBPxuufQJzMWPCrcA%2Fe9LftFSQ1nhmOvFLsjg%2Bt4eWj1MOBL2MnGqmxk9rGcN%2F%2FLL1Ag8bQBBWnxyVrv88s6G4fFqiNWi7jffn%2FzP1XcaJZ58WUtGpLAipNN%2FKlq59xqf3fcZeT8y%2FNC6jacV%2BbTz9lDvwTLDZio%2FkHW6v8pDXsT1dSwPvOemGMypsehNPxnKF7oxCultV1eDgIgRYbSJ19YTS%2FSA4xNra2ITuUGvRBfV2EhIIDIPO3F6um6gH1VTOCA96HcFeU8MSgaGsgx1c73DkmCMtf6Opxig5THooxeUiDy%2BTrloGDveMN%2Ffcj0ICQ0VGuALwVUIr9Y5RbpXwZ62Y4FuhJe%2FUQd8VUAr1bBZmEn2iDFugFIbza%2BuZUp%2BCQkVDSYBIvznUMjCq6K9Js2DAxoB2vKFSVP7Jet4oLPm2EaBhCmCaFIumxPsRSeie%2FTgMvACxnmKkG8erKsRuiFQfy%2FcYXsTqmi37nNU0LgeGjdbIlaS31OLfxeG7DLS%2Blho9Ysx9cmeyyRxxugDhSN4HFngoV3Yn%2FiznJ0hn%2Fb2CNmzJ%2FkwKZ5PCd7m3%2BAz%2FDoNxx0Jii1yD1Ppx5edNoThTYcr581WStdXfc0TIbs%2FXpJrCz5UVWQL6nvIVYwfzOxuxbvB%2F9YMNDSvcQGOqUBR0bXoIaBgpPt8LkfJdvEOt%2F0EqlKlO3IoabGzNLFzPE2kZSzArcsCL9OrKYMYOx5WrquksZxAndDw42Izao9t4pxhxXUeXEwLaenE89MxK7WCRPQZg2drbRQ%2BfpHjWRiTRYflVsPAjDDZnqB9Gk1whawPlr7QJXsfuawGKHm%2FA3gYuACYxG6nA5wDprF1H9G2qpvlPDIqsyPxh%2FGIBZ4S4cTH0w5&X-Amz-Signature=64ab7406a31182f77f134e2a56843757f353785fda4e0acd825f4130aaa7cad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B64VS4G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2v0AdS%2B%2Bqb%2FJ%2FGFp9XoiyLkHb62IX87HoFplslBcxpwIgHowN7c8SrvQDBwsbGFHHAvIZXpy93av1kF%2B%2BNcymK8oq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLlC988aZdu%2BIvRDtCrcA0I240WwwD%2FUc9sGn2F4q%2FJM14GIx6y2w4%2BZts%2BspTOvOsgVZxO9qbRWHyxFz7rNB%2B6aFipFL%2FG%2FsAT3Ub3x2itna0EOdeFNZnRlS0G4GlFKhjlL5J4eGwxGJy3cHuvgxWX63uaIyaabYYuZ38uyav%2B6ImTmpVbullXYJiBwk9yxI7RdWMZpTaY6eCOYjpoRK6iIz8VlyfymvVooTA7W4lD4zwLdOWBMCHh1CZE1YgSG6tbKXL7GHUlbldXncUy0jBWvx16MKVU43bZwEPAB%2B9UsSj4dWYt1qHfTlQ5Tv8CPjtkxi6CNMq5gILLKrLS9yEuK1gU5a7fYwU07naEACuiGTwtwn%2BoeEyUz%2FrnWvrgWBQIDfnzL7A1VcbI%2FRwmt9V%2BoYCZ0fjiWYa5PiadEJt1nB0K9yjlv79Mq1hcdDkYwZxWiEjjwpAf8wbZLAyBAIKTcQhR%2F%2FcUToQgXWSOO0MYOKJs14NHILqtNQxu%2F1vFZ3UltJ7ON9v6pPBGjwphfeYoSbmlpdZ7TXYcurRaV5Lh8G6qYENbhIrnkvSUv8yWLIIqVA5W4pCirb2P%2BrdPu5R%2FV291hQvEeLbxS9d%2BGgcpFWoPrguRXSN%2BIdnClBkLxr0YZV%2FqYm%2FN0K4T3MNrSvcQGOqUB5ksGvNbObbjWGpXhF0m3zhLY5gSVVHsX4kgkZKaeH5N3XezPvTc1cCH7ibR%2BBbhxczI91iaKpgYkscn2sKgoht2rNxR0NRNMGsAwj9fGZawZiiavqwOcjfWMzFgquhf4lQzSlp46r6gQjBS8Dyl5dkSM%2BB5owxxYAfzSpW3f2TGkrotqwU4kBEXKqtlae0A7SnBS%2FsLkuLVmqw40N6i5ZYlP94MS&X-Amz-Signature=bb0313a408d61f3b3dd48a19900f4546dfdbb1490e3f7bc1a9463dd96b174f06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S46IDBUD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHotHQrY17KpUubpyt%2F2UWLs5hnd3owo2ZKDTzP0NIL0AiB8wYAYB%2Bk2OR2XM4JpCui5ije0o5TuHciN%2BiGjUAigYSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMCiSrkQv7Wo7ODolEKtwDkFBDGs9G4kF5c57sWEkjKOatfBCwCXJ0r9MTN2wIUOa8I6soGHNDOQJHXcj0ahXR8dkYJLP0u%2Bf7k5wpSZRJ3Z8dzZLpHU0iQgxWbmrnEEibMPBXYQBZef87JB2SIZfJ211eQ8DH9boef%2FkeQZTm1apAq5o5RKa8Ud1%2BXU9B9Q6ma2ZMCvAike%2B7cWq1Bs5pru3VT4sUBMpMM0eR8OpVWPieJLdQn25fZKWi3eGXILjybRRt8PfGef%2FfVeYkAchOmdA5JeDFzoKp3uBmsQFO2s3QmQ%2FJY8FqbgIcdU6Pa%2BTjgXpdYFABVw2aHOJGAHf6N0U0jh1QrB2a7W8Ef5sTvZFe1dUWpC%2FLBoDb8LQXnM7AynpOIfG4e%2FbRtW81UAFaXD6MaG6eVax6ppPdQ%2BKoMlyCWOFmbUsres4aJDI%2Fpvkgo3eWJQcj0%2F2GC3w8xQyVbjaoOOYUykmsaqSpGM8OPhJup0TAc%2BSvoSnWVU%2Bh9Oszh1eUi80jNEEZ5yAufINH%2FZp1IFTZTGtBJUaHkoc%2BQxpSsJ6I0JptDfF6RhRPjyJYLI6Qt7HnFDBTh%2By7nhKygyW0kuqCB%2BTQhFO5CB3bjFG6kDrB%2Fg6TcwICX80g0RqKqmSXju%2BjSyoMHSIw%2FNG9xAY6pgHdsloWVkg6R6u73tsTqXwZcXVpPXEqlukaDV5gSuZ2JLrI3ytoDLry%2B4wq3ZzQ%2BvpaQKX3uyKrekBHiXQIWwN8Fz3Tjzl1x7dM1oOF4Jv7dj5GqM4IHvzQ%2BneLa4yaNBAtBZurD0pWSTrBHZCIgDAX%2B6BDq3vcqFIlPq6hJmWNdubTRXmRUYC8hzusBVtDccV6mflCOmhCfLRVeWmgLi1nvbGY8ToE&X-Amz-Signature=52ccd950df4daf40463252f943cdc802912236f9398451187a5c2292d0c65298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B64VS4G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2v0AdS%2B%2Bqb%2FJ%2FGFp9XoiyLkHb62IX87HoFplslBcxpwIgHowN7c8SrvQDBwsbGFHHAvIZXpy93av1kF%2B%2BNcymK8oq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLlC988aZdu%2BIvRDtCrcA0I240WwwD%2FUc9sGn2F4q%2FJM14GIx6y2w4%2BZts%2BspTOvOsgVZxO9qbRWHyxFz7rNB%2B6aFipFL%2FG%2FsAT3Ub3x2itna0EOdeFNZnRlS0G4GlFKhjlL5J4eGwxGJy3cHuvgxWX63uaIyaabYYuZ38uyav%2B6ImTmpVbullXYJiBwk9yxI7RdWMZpTaY6eCOYjpoRK6iIz8VlyfymvVooTA7W4lD4zwLdOWBMCHh1CZE1YgSG6tbKXL7GHUlbldXncUy0jBWvx16MKVU43bZwEPAB%2B9UsSj4dWYt1qHfTlQ5Tv8CPjtkxi6CNMq5gILLKrLS9yEuK1gU5a7fYwU07naEACuiGTwtwn%2BoeEyUz%2FrnWvrgWBQIDfnzL7A1VcbI%2FRwmt9V%2BoYCZ0fjiWYa5PiadEJt1nB0K9yjlv79Mq1hcdDkYwZxWiEjjwpAf8wbZLAyBAIKTcQhR%2F%2FcUToQgXWSOO0MYOKJs14NHILqtNQxu%2F1vFZ3UltJ7ON9v6pPBGjwphfeYoSbmlpdZ7TXYcurRaV5Lh8G6qYENbhIrnkvSUv8yWLIIqVA5W4pCirb2P%2BrdPu5R%2FV291hQvEeLbxS9d%2BGgcpFWoPrguRXSN%2BIdnClBkLxr0YZV%2FqYm%2FN0K4T3MNrSvcQGOqUB5ksGvNbObbjWGpXhF0m3zhLY5gSVVHsX4kgkZKaeH5N3XezPvTc1cCH7ibR%2BBbhxczI91iaKpgYkscn2sKgoht2rNxR0NRNMGsAwj9fGZawZiiavqwOcjfWMzFgquhf4lQzSlp46r6gQjBS8Dyl5dkSM%2BB5owxxYAfzSpW3f2TGkrotqwU4kBEXKqtlae0A7SnBS%2FsLkuLVmqw40N6i5ZYlP94MS&X-Amz-Signature=2089b676afd8f72698f5c24e396dc866ab36506373529e2709206046b807922c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NHUHTQU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BLpxMAhdgjcbCFNiIzW1xh3ZLbUPHF7JqPu3YfQd8HgIhANRMyWoTzWObmfgR5N2RCqgQlXSZOIrneyuB2dUdYpmAKv8DCC8QABoMNjM3NDIzMTgzODA1IgxR%2BLvG64zpUCOiDaAq3AOs9ZNvKPru%2FHWy9jlyy4IoTzlSgFQABAnPyAL%2BwOnEfGDdB1TQQmCKDJoXDmIEXQRaSG7ntfqKsnWQJg8LGDaBnk8RLcJvEeAsnAq%2BsURST%2FCMm8H5pUrDjtuwgH7KgI%2BfUIcWfndEU07aOfRV3ubMx4BmyMyZQ7i0%2BJLwRZvECcwCnsxWAayKsS2mRSCy1KmzaIXSKNeJgmO4hmeh04E5nw4n%2BvCse%2F9D8XVexdUnHmDx8FrPvPTI4vKrelFhAc%2BumxD1rFwsSRiQ1HS1OxVAugY1FNUK8jzwQSthdhgfveO1KzSbArBQhWLa%2FnsLK4rc%2FtfQnTZPFacdh4hRr7e8wmId7edKAlhy63V3C3o1N7dIGG5TWO7CNVXs6rLXlqzxyVaySH%2B10%2BCWwRG7iW3CnXyB1CoK5UKobvIepoJ0UhjjXPKRGaSqdkCqRjYytnzPlKpAe6DsVxSwY4kENpBG%2BIN28TtF5ZvMhrM31jfndLS7EfN%2BkoRi2pi%2F6Mmf%2FCRPX6y7mCyaQB1piLWPBzWLDmY1yMVHkH4rUd5X7EEhF4XM3r2b7J%2B18KIBLqu6H4c1%2Bo2AMlGv0pWUNzGAXz7t96ZidFx%2BHBTRvuAWxn7XUvkzfeiPBt15uNc8vTDA0r3EBjqkAfitEFUvEBBOgWb8pWGdB%2FJsiXh827osDxyXjcGX0mRSWMHJeOS6%2B8zmJ4GOGp5AxfGvoJGiAyTtd3MPCbQKMyaQYdnqthBOFNMi6XAtLWQK4asUgru341qQQ9jqtaKTkpJq6JXquRM5mzusRBWKXpQxtfEZKKZ8oW3luVPFUIUK09LNr6mLB%2BB9Cc8tvVzyf2prxnd%2FFx5X26qEdFTUwMpz6cWZ&X-Amz-Signature=e19261f4d7a6567961b5d89941b770ba734247f4e9ea02a07da16cd8ccafc90f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTH5JUDY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL6EdL0ei2SN2e%2BDMVzlaTkq4jjDJPBym2ohrY0REr0wIhAPVQ8OPLTRuKAbZG%2BxmSlsKMoJn9s7fC8JD0IuiKjFv6Kv8DCC8QABoMNjM3NDIzMTgzODA1Igx53HKDtjp9OG8II1kq3APYqnkTqh%2B%2FFbC32t0BY1eevLEPCWi%2BcMy18AalSB0yNkg0q4wCGWKHhDflTCeZMI2U0VZZOmWYszuV5e17bkLHIBTUjlAiujSsCdZ2Pjnt1GgqNtK8%2Fekp%2Fd3rjbTXme9pYb9FTOE5qrQ2R4FfFsry0S%2FWK0QnoPaY%2BrEUvjBcxk5I5VLkKwY4csFYpIH5Lbk2HNNzZx98v5R8jqPtFRQcWDxShDQjOpvhy0oqWdj31npBtHe9K6r9twONPpdun6AfSG5CQB65dfWs3DodI1sHX8DKxuVK8s2z6ot1pEtdbFgvHrZQIHSm%2BvsRNiyThqW%2BpF%2BQjIH0fGURYrBbpFvjM6TDnqpHcb8jd7qNZLw3mqYVOakmNUoAJ8UiPjNs8ardw1etBo5aRnxh3ThTGV86pYeSExiiFikh2EO19%2B%2BcE8lzhpsYUhgukxffh9dg%2BtcEinvtPXTDqwt1GpZS5ZSoQpy6Kqj2LyhgQJ40JBMTADcqCk7rsKiXOTwRZvJ%2BiZZvIxs97Ak1NPXpAUphoN9Iljcy0dmrAKPCaJD9ZCgA12TnqLz4prQfjHON%2BUTNAxqA37CwWN8iFuRkaqaLaxi2eyFoZKQBdrGQXLKYn80a0yBbT5CjWiDGDDzcqTCu0r3EBjqkARRzrYGlnlGhf2%2Blq%2F2qS661DVNkowxayo%2BCF7E8W4fbkQrxF4jpz8KTanE527K6B5FGvDJsEsOoGLl%2FLCwIs4OaUEpTITLhrL%2BmGh5lweezXVzBNnKVp%2FSEPSVImQ%2FlolejmB4CN%2FN%2Bw0wqUPJm46tii43hVj4ZMF4AoNUd05A33jiuAlZbsbl869b%2FlMHorUF8j2sJmJa7ZnzxsIsFO%2B%2BwGH1V&X-Amz-Signature=70f7badf4d6bd229bf864013a76fcfdabd9168ffc08d4695d4b06f856997d78b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVSO72W7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHX5YvN0MBHGZeB7coMaovIB4DamOfdvoAfJR0%2F2hBJuAiAdcqLcJagmvkxnmy43lgdsUZyOyCQ3b2dcAhC%2BW0TtQSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMom616yRL6Fe4j5YlKtwDuaonRRy25FJ7hmoCNaui%2FFAHdU8zzhdYSdZihqbVaw%2BiJR3G4XyzLEff3HyxqF2UQbVkjKeb1IY7ta2NA8T6MuNpUsmFhmajNVyajTSk2LecABuZEq9l%2FdUkTpxWfRVAQT0UuCyzbJNmfSU8PemGjN2r%2BjHHv8GS1zwFlO1oMAOP%2FrpHhCaqwtAOqmQfQVVpqNG0FkGxyC3koN%2FBevIxmKIAxce1S1PmxEy6itBOnrzF1ZSh%2BOgGh0KDWY55HJ3Z0cLIXnVoh%2B%2BGO7tTLWoSJiqbDCBYOCXNXQ9%2F0C5wjD8DZqBXlD4q%2FGAkNcSl6a4HDDsJ17Eboy%2FgH07%2FHd%2FQKPQaFcCFTvVNoRTXDtMbwSD46dOkrunN2yFWU8Mjqx2I9QuIhftYf3GaM4Xe0RV96ubsV5zgE%2BL9W0srqz%2Fb5LfaubYFYqXATUw6KRoVCqjZEWUz%2BH8f9CCs%2BTWxys0jaYwYQZBRQqms1CYvZipgLGjdcT4x676vmDqPhZL2Mf9XQzmTcwqO%2BPKob8S2jdcOnD7o0agCPNDOBvSdSVwVGtXFJUubapxqhMLB9K1f4YSyw0BDesHTTQbsnMUMbSY8FdcI9ivE0BJAqKloOtk6iBQkRcDMNk2Ag9gv5U4wotK9xAY6pgEYzl2WxdxTHU2FyV1Rd2QF9KwA8v8%2FHBSzZ%2BngfzlxBlxgVCF6akExi2T9sVftDfsXNTO%2F4hL9wg9fteRhDvCr10uxFMCD3zeTh9w24B4%2Fz%2BURk5%2FBFD7fENjeZ%2FGMAccxrpi5NlRNvZGXpfzcqHU1kg0I0Py1cS0NNUt4gGD7j6MV2PXCvxCWCaWTuHGSXZQ73iUskRJtw9cTibIGXGAoq0BXrVqA&X-Amz-Signature=1a0636e5d0e1cf3114ad4591d1659e91bb7766c3d80c3011f9367ed0e0461587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT7OPL3X%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQJdD%2B723B2voRvVZSA2MDo%2BGAyrek6R%2FQjj6kV4u8XAiBMS8Bt8yq%2F3CK6VmX9JosIenHdB1f1RComSE3oh3CbbCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMQJmJKB%2F%2FuWTcJq3rKtwDtiUA06sx6%2BVwoZVz3WFOc%2FXBPbWL9G6XEEdrVuWmaqHKT3kikwxybIBZmpc7V9IdOxZLuYlEOVI7xrr9Blw4ahv2klaZbJ2Nz3bkcXyOKSeWslAuaenkbTzHgRQjruS2FKzjGOKW%2FJD9%2BsvLVPZpUwXwUwvL3kGC9gNrIvPc%2B9XNBanK1IWJY1uOPsQZ%2BYoZ1ZKOAXwp0ERKVXdXVMZj2%2BAb926mCfX3RvS4VTanR%2FMPGVdZug%2Bg%2FURGLR3xo6l7vyWAUqie32KElaZIfdgNka2Pz80Ry%2BliRV0b6I5Cao1PEvGRCh8OH4u9w1J4LBdYb58oLp7AZNtBKLcL77DIBYLuuFIpjh5Eo%2FAUtpKd4aOBGCk9ZJ8dms55%2BX7y%2BNyIm59tHtBlxYmt4VQR%2B8LL5QSjDUjiMzTEIIp8ysnlbSDk%2BHUNw1VrDvXplIu6hYrPGHuIejEA4DfmhR4cq28Nm8QtB3H9RWcwb1uFoAJz3Ew%2FhfnN7kMEnAhC4QrENhgQg%2FFYG5c1ojTqEcpyjdIZEeDvPGGX%2BiyE539UMpQjA%2B%2FWwoziui8l%2Fdt4Kro2HouHszs9CNn2wC%2BfDlP%2FLQTRnclMYSXLloj%2BqLLJg2RgglvtH39hxxyuxuF6Uj0wmdK9xAY6pgHdeGyRJuet8%2BFgRDO1AqeQZIiUJhiXX%2BaN3DWLFC9%2BVgLQOad2VPwXmjXsbAKMQzbnLpXSN99cspPq5%2Bugho%2F5gnKGW8eT4srEGtT%2Bc3qA1IknuSq6uZQ%2BZIdNUEtkLkEc9HMGbcahXliQZuDMG7MQThYPGtTdDaRmZIXEnWo2p9ip7j4JHagGlqiaDTKgPu782lvacFxRQH6oZ9nmA9XvqlIZE1Cc&X-Amz-Signature=ababce2227ead0d7ba1069b2ae775fb3dd96981733db9c19cd55eb6147c97fea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EPFYXF7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClzfluqCr3eFy63BHZJYi8QxM2iUhyapGLw5wjGJ2PLQIgdWSYYGIp6FgXLRuv0tHk%2FVZAc7nPRJ7Lxy90lpPWEycq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNiBAS9M0HqjK7aORircAzUmlm6u6p3OWvuBYtmrSKLDCqyQUCufzye4bXnL4hDGrEl18V6JswwOCgzk%2FQMLRy%2B762Ty79Hb8Xt9w52P9%2FesoXWsZp3Hw%2BDb7OSNFS34k%2BdafF%2BZydbejFU0pV%2BfiPIQ9CiYCufHI4%2FrOE%2BP7imPz7Nv%2B9NlZLb5P7pJve6xelT1xnoN9S7SUduWmT3kb3%2BkZLq50tWrxSY0CqlydZYXLwLkm3PkBhoMbCFLNhmQIciDjAMG9fqMANz6679c%2F9Ixys2B2OAcsijLEDzKc%2B2x3YJkWQhP7xv7lk5a9TgiU8eun9hI5Vc9%2ByeWemFdJgcI34Lthnow6bqs5%2FMSdkXxN7RP84L%2BNlZnzZvO41Xevwl1QiK2bysT9nXuf%2FO22UbjL%2FJ7HMjgB2jqyuP2QSheDMpgOu9kxwqzCODiCxTh4ty8WiXaCyP%2B2o2Mj0b8YwbDht1oz%2BnS%2BxvBeR0WX8WdQypiBbrS5G5Fomj825ZKxhZQp6UHBz8C%2FcGjFycxAr6AV85%2Fqy8AziYtXlzv3kgZlCqBXWB4y0gFltEBkYV7jy3kvl39CWeKM6gvPuON8Wl4DOWqeLtzNSPQsUjgk8QAoiXNDxndqsJzMpoe2k2WVBA4al%2FX%2FgT3MJsSMOrRvcQGOqUBkdCPGD49qMcknwjdWksU%2BV1RNwr9Nxi6O5BAzXTk84hT2c96urZAD9pVpZbu%2BR6HOqmYNNRiNI95gwxzrINCkWgZYSO1XQzR9ODm0PwG4GZKMa7x4iv%2B0094gaGtgO0F7AAuRB%2FlgcmQs%2Faw9dGM45%2BmyoFi8P0H71CSm%2B%2FkY177FUi15gcbt23Ps5OcqiFR378eJE5AZ%2B7wmlDjV%2FO5XaTvp72e&X-Amz-Signature=73ea66a9190b91ce96ac493b8f2d9758706688993209047743604b17c0d41de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B64VS4G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2v0AdS%2B%2Bqb%2FJ%2FGFp9XoiyLkHb62IX87HoFplslBcxpwIgHowN7c8SrvQDBwsbGFHHAvIZXpy93av1kF%2B%2BNcymK8oq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLlC988aZdu%2BIvRDtCrcA0I240WwwD%2FUc9sGn2F4q%2FJM14GIx6y2w4%2BZts%2BspTOvOsgVZxO9qbRWHyxFz7rNB%2B6aFipFL%2FG%2FsAT3Ub3x2itna0EOdeFNZnRlS0G4GlFKhjlL5J4eGwxGJy3cHuvgxWX63uaIyaabYYuZ38uyav%2B6ImTmpVbullXYJiBwk9yxI7RdWMZpTaY6eCOYjpoRK6iIz8VlyfymvVooTA7W4lD4zwLdOWBMCHh1CZE1YgSG6tbKXL7GHUlbldXncUy0jBWvx16MKVU43bZwEPAB%2B9UsSj4dWYt1qHfTlQ5Tv8CPjtkxi6CNMq5gILLKrLS9yEuK1gU5a7fYwU07naEACuiGTwtwn%2BoeEyUz%2FrnWvrgWBQIDfnzL7A1VcbI%2FRwmt9V%2BoYCZ0fjiWYa5PiadEJt1nB0K9yjlv79Mq1hcdDkYwZxWiEjjwpAf8wbZLAyBAIKTcQhR%2F%2FcUToQgXWSOO0MYOKJs14NHILqtNQxu%2F1vFZ3UltJ7ON9v6pPBGjwphfeYoSbmlpdZ7TXYcurRaV5Lh8G6qYENbhIrnkvSUv8yWLIIqVA5W4pCirb2P%2BrdPu5R%2FV291hQvEeLbxS9d%2BGgcpFWoPrguRXSN%2BIdnClBkLxr0YZV%2FqYm%2FN0K4T3MNrSvcQGOqUB5ksGvNbObbjWGpXhF0m3zhLY5gSVVHsX4kgkZKaeH5N3XezPvTc1cCH7ibR%2BBbhxczI91iaKpgYkscn2sKgoht2rNxR0NRNMGsAwj9fGZawZiiavqwOcjfWMzFgquhf4lQzSlp46r6gQjBS8Dyl5dkSM%2BB5owxxYAfzSpW3f2TGkrotqwU4kBEXKqtlae0A7SnBS%2FsLkuLVmqw40N6i5ZYlP94MS&X-Amz-Signature=4f2da9d52e91d7fbd966b55d49dc65a8d2cc6d587a6fbb78cc09360d6af9699f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B64VS4G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2v0AdS%2B%2Bqb%2FJ%2FGFp9XoiyLkHb62IX87HoFplslBcxpwIgHowN7c8SrvQDBwsbGFHHAvIZXpy93av1kF%2B%2BNcymK8oq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLlC988aZdu%2BIvRDtCrcA0I240WwwD%2FUc9sGn2F4q%2FJM14GIx6y2w4%2BZts%2BspTOvOsgVZxO9qbRWHyxFz7rNB%2B6aFipFL%2FG%2FsAT3Ub3x2itna0EOdeFNZnRlS0G4GlFKhjlL5J4eGwxGJy3cHuvgxWX63uaIyaabYYuZ38uyav%2B6ImTmpVbullXYJiBwk9yxI7RdWMZpTaY6eCOYjpoRK6iIz8VlyfymvVooTA7W4lD4zwLdOWBMCHh1CZE1YgSG6tbKXL7GHUlbldXncUy0jBWvx16MKVU43bZwEPAB%2B9UsSj4dWYt1qHfTlQ5Tv8CPjtkxi6CNMq5gILLKrLS9yEuK1gU5a7fYwU07naEACuiGTwtwn%2BoeEyUz%2FrnWvrgWBQIDfnzL7A1VcbI%2FRwmt9V%2BoYCZ0fjiWYa5PiadEJt1nB0K9yjlv79Mq1hcdDkYwZxWiEjjwpAf8wbZLAyBAIKTcQhR%2F%2FcUToQgXWSOO0MYOKJs14NHILqtNQxu%2F1vFZ3UltJ7ON9v6pPBGjwphfeYoSbmlpdZ7TXYcurRaV5Lh8G6qYENbhIrnkvSUv8yWLIIqVA5W4pCirb2P%2BrdPu5R%2FV291hQvEeLbxS9d%2BGgcpFWoPrguRXSN%2BIdnClBkLxr0YZV%2FqYm%2FN0K4T3MNrSvcQGOqUB5ksGvNbObbjWGpXhF0m3zhLY5gSVVHsX4kgkZKaeH5N3XezPvTc1cCH7ibR%2BBbhxczI91iaKpgYkscn2sKgoht2rNxR0NRNMGsAwj9fGZawZiiavqwOcjfWMzFgquhf4lQzSlp46r6gQjBS8Dyl5dkSM%2BB5owxxYAfzSpW3f2TGkrotqwU4kBEXKqtlae0A7SnBS%2FsLkuLVmqw40N6i5ZYlP94MS&X-Amz-Signature=93217c0a8a563e8aa67f271b7ed07c177bf4f5792f58e0c48b48cf3eb1f19415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQAUJNW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpSkk2smuOmy0ThYt8NIq566nLcUeZG1JPtQ0IcsLCgAiBqImS%2BwpN%2FiXcRQHrb1PGCEMXqEj8RpnxC01llIoqZvCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMGXuTMOjqsfgpzO8TKtwDNpYNuxsO1SMqg8TcgdNRSuAEZYuOywSnZGPiy79XYwbRLjeLJSDIPjLYfXhiTnXXSxau%2FdPOWGHcVM0%2FEw%2FN5%2B93ez%2BRQcw%2FSFjIQbxQPOakSepsQPBu7jlq03996%2BQ1Hk48gp0oKwrZ20YnnEvPrhxN%2Bv78Pdhj3fMozTnub0BLsHQMjStr2%2Ftb9m5TmkMqFmx8kBKtbHqAGnh9kdI1Y0sRy2M3oLdIExzo60EY8B2pBMNExVidqQ2VHsDRmLriAJHk587f%2FTTrqzvJAHCGHJyE%2FRIZ3M45arUmYv3YRgJsqPEEu26%2Fi6wuiTA5%2BORm1NEs7FhOxp5CmHLFRFSfbY7LCVDF1FSwxHsGjWa0ftSbg79dC%2BXauJpTPj%2FufKIMsGRp%2BqlrufTmzZ2I%2B%2FYsE%2F3iVH5dNT7HR0CwKDw4e7RdwxEAO%2FmfTpK9tYlCWl2GFUhAEkjU%2F98KB5%2FxwC3ZPP67Lc6Mq7baOWvsbclZa1WQEXxSYCERE7mj0CSO3wEX8HAUmP%2Fkv8Bf4L3rsV3VoPK7r%2FlLiSDrUc1xezFym11dgat55GdOE2XvA8Cj7Tw%2FqJ%2FzbqTksxVTEenbWxgu99r3kmTkCW0h1YXoZxsJ6bq%2FAK%2B%2BBpsexnEjHBkw8tG9xAY6pgFRTeWPsJURObbPd%2Bbyyvh3uSWIakJfCDJHpxm%2B8%2BiN8%2F5f05LHry9XPLK8%2BaYaKHav42bPl%2FAfzj0PghmY3mzz2%2BvC3hwexf%2B2KdAL9bBuEBQ1T55ohoJWeb8eQuBK%2F6CoFRXQJuDpFPgGk%2BiV95gnr8DU16WpgRYak1e9z%2Fk6TGj70ra1Cb6bbzqWuOelRUBaFf0RsfT4UYtGbkr11HpK4K1%2Bjl9Y&X-Amz-Signature=385c92b424a43395e96fabfb17c6171e35688a6b8ca51f780d858e04b3be979f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQAUJNW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpSkk2smuOmy0ThYt8NIq566nLcUeZG1JPtQ0IcsLCgAiBqImS%2BwpN%2FiXcRQHrb1PGCEMXqEj8RpnxC01llIoqZvCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMGXuTMOjqsfgpzO8TKtwDNpYNuxsO1SMqg8TcgdNRSuAEZYuOywSnZGPiy79XYwbRLjeLJSDIPjLYfXhiTnXXSxau%2FdPOWGHcVM0%2FEw%2FN5%2B93ez%2BRQcw%2FSFjIQbxQPOakSepsQPBu7jlq03996%2BQ1Hk48gp0oKwrZ20YnnEvPrhxN%2Bv78Pdhj3fMozTnub0BLsHQMjStr2%2Ftb9m5TmkMqFmx8kBKtbHqAGnh9kdI1Y0sRy2M3oLdIExzo60EY8B2pBMNExVidqQ2VHsDRmLriAJHk587f%2FTTrqzvJAHCGHJyE%2FRIZ3M45arUmYv3YRgJsqPEEu26%2Fi6wuiTA5%2BORm1NEs7FhOxp5CmHLFRFSfbY7LCVDF1FSwxHsGjWa0ftSbg79dC%2BXauJpTPj%2FufKIMsGRp%2BqlrufTmzZ2I%2B%2FYsE%2F3iVH5dNT7HR0CwKDw4e7RdwxEAO%2FmfTpK9tYlCWl2GFUhAEkjU%2F98KB5%2FxwC3ZPP67Lc6Mq7baOWvsbclZa1WQEXxSYCERE7mj0CSO3wEX8HAUmP%2Fkv8Bf4L3rsV3VoPK7r%2FlLiSDrUc1xezFym11dgat55GdOE2XvA8Cj7Tw%2FqJ%2FzbqTksxVTEenbWxgu99r3kmTkCW0h1YXoZxsJ6bq%2FAK%2B%2BBpsexnEjHBkw8tG9xAY6pgFRTeWPsJURObbPd%2Bbyyvh3uSWIakJfCDJHpxm%2B8%2BiN8%2F5f05LHry9XPLK8%2BaYaKHav42bPl%2FAfzj0PghmY3mzz2%2BvC3hwexf%2B2KdAL9bBuEBQ1T55ohoJWeb8eQuBK%2F6CoFRXQJuDpFPgGk%2BiV95gnr8DU16WpgRYak1e9z%2Fk6TGj70ra1Cb6bbzqWuOelRUBaFf0RsfT4UYtGbkr11HpK4K1%2Bjl9Y&X-Amz-Signature=523b2bcc6bae679abd18febb7fee7abf3fca52c9537fc476f651b74ff1e72671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQAUJNW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpSkk2smuOmy0ThYt8NIq566nLcUeZG1JPtQ0IcsLCgAiBqImS%2BwpN%2FiXcRQHrb1PGCEMXqEj8RpnxC01llIoqZvCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMGXuTMOjqsfgpzO8TKtwDNpYNuxsO1SMqg8TcgdNRSuAEZYuOywSnZGPiy79XYwbRLjeLJSDIPjLYfXhiTnXXSxau%2FdPOWGHcVM0%2FEw%2FN5%2B93ez%2BRQcw%2FSFjIQbxQPOakSepsQPBu7jlq03996%2BQ1Hk48gp0oKwrZ20YnnEvPrhxN%2Bv78Pdhj3fMozTnub0BLsHQMjStr2%2Ftb9m5TmkMqFmx8kBKtbHqAGnh9kdI1Y0sRy2M3oLdIExzo60EY8B2pBMNExVidqQ2VHsDRmLriAJHk587f%2FTTrqzvJAHCGHJyE%2FRIZ3M45arUmYv3YRgJsqPEEu26%2Fi6wuiTA5%2BORm1NEs7FhOxp5CmHLFRFSfbY7LCVDF1FSwxHsGjWa0ftSbg79dC%2BXauJpTPj%2FufKIMsGRp%2BqlrufTmzZ2I%2B%2FYsE%2F3iVH5dNT7HR0CwKDw4e7RdwxEAO%2FmfTpK9tYlCWl2GFUhAEkjU%2F98KB5%2FxwC3ZPP67Lc6Mq7baOWvsbclZa1WQEXxSYCERE7mj0CSO3wEX8HAUmP%2Fkv8Bf4L3rsV3VoPK7r%2FlLiSDrUc1xezFym11dgat55GdOE2XvA8Cj7Tw%2FqJ%2FzbqTksxVTEenbWxgu99r3kmTkCW0h1YXoZxsJ6bq%2FAK%2B%2BBpsexnEjHBkw8tG9xAY6pgFRTeWPsJURObbPd%2Bbyyvh3uSWIakJfCDJHpxm%2B8%2BiN8%2F5f05LHry9XPLK8%2BaYaKHav42bPl%2FAfzj0PghmY3mzz2%2BvC3hwexf%2B2KdAL9bBuEBQ1T55ohoJWeb8eQuBK%2F6CoFRXQJuDpFPgGk%2BiV95gnr8DU16WpgRYak1e9z%2Fk6TGj70ra1Cb6bbzqWuOelRUBaFf0RsfT4UYtGbkr11HpK4K1%2Bjl9Y&X-Amz-Signature=0215efeb2b7be6134b187b295232d538adb5fdcbfd3db70af75b1ca88f3839e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQAUJNW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpSkk2smuOmy0ThYt8NIq566nLcUeZG1JPtQ0IcsLCgAiBqImS%2BwpN%2FiXcRQHrb1PGCEMXqEj8RpnxC01llIoqZvCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMGXuTMOjqsfgpzO8TKtwDNpYNuxsO1SMqg8TcgdNRSuAEZYuOywSnZGPiy79XYwbRLjeLJSDIPjLYfXhiTnXXSxau%2FdPOWGHcVM0%2FEw%2FN5%2B93ez%2BRQcw%2FSFjIQbxQPOakSepsQPBu7jlq03996%2BQ1Hk48gp0oKwrZ20YnnEvPrhxN%2Bv78Pdhj3fMozTnub0BLsHQMjStr2%2Ftb9m5TmkMqFmx8kBKtbHqAGnh9kdI1Y0sRy2M3oLdIExzo60EY8B2pBMNExVidqQ2VHsDRmLriAJHk587f%2FTTrqzvJAHCGHJyE%2FRIZ3M45arUmYv3YRgJsqPEEu26%2Fi6wuiTA5%2BORm1NEs7FhOxp5CmHLFRFSfbY7LCVDF1FSwxHsGjWa0ftSbg79dC%2BXauJpTPj%2FufKIMsGRp%2BqlrufTmzZ2I%2B%2FYsE%2F3iVH5dNT7HR0CwKDw4e7RdwxEAO%2FmfTpK9tYlCWl2GFUhAEkjU%2F98KB5%2FxwC3ZPP67Lc6Mq7baOWvsbclZa1WQEXxSYCERE7mj0CSO3wEX8HAUmP%2Fkv8Bf4L3rsV3VoPK7r%2FlLiSDrUc1xezFym11dgat55GdOE2XvA8Cj7Tw%2FqJ%2FzbqTksxVTEenbWxgu99r3kmTkCW0h1YXoZxsJ6bq%2FAK%2B%2BBpsexnEjHBkw8tG9xAY6pgFRTeWPsJURObbPd%2Bbyyvh3uSWIakJfCDJHpxm%2B8%2BiN8%2F5f05LHry9XPLK8%2BaYaKHav42bPl%2FAfzj0PghmY3mzz2%2BvC3hwexf%2B2KdAL9bBuEBQ1T55ohoJWeb8eQuBK%2F6CoFRXQJuDpFPgGk%2BiV95gnr8DU16WpgRYak1e9z%2Fk6TGj70ra1Cb6bbzqWuOelRUBaFf0RsfT4UYtGbkr11HpK4K1%2Bjl9Y&X-Amz-Signature=b7cd1f62c34a282c6515415a9ae3d21e9cbc98b54669b63fa1c64e78c6d57f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQAUJNW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpSkk2smuOmy0ThYt8NIq566nLcUeZG1JPtQ0IcsLCgAiBqImS%2BwpN%2FiXcRQHrb1PGCEMXqEj8RpnxC01llIoqZvCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMGXuTMOjqsfgpzO8TKtwDNpYNuxsO1SMqg8TcgdNRSuAEZYuOywSnZGPiy79XYwbRLjeLJSDIPjLYfXhiTnXXSxau%2FdPOWGHcVM0%2FEw%2FN5%2B93ez%2BRQcw%2FSFjIQbxQPOakSepsQPBu7jlq03996%2BQ1Hk48gp0oKwrZ20YnnEvPrhxN%2Bv78Pdhj3fMozTnub0BLsHQMjStr2%2Ftb9m5TmkMqFmx8kBKtbHqAGnh9kdI1Y0sRy2M3oLdIExzo60EY8B2pBMNExVidqQ2VHsDRmLriAJHk587f%2FTTrqzvJAHCGHJyE%2FRIZ3M45arUmYv3YRgJsqPEEu26%2Fi6wuiTA5%2BORm1NEs7FhOxp5CmHLFRFSfbY7LCVDF1FSwxHsGjWa0ftSbg79dC%2BXauJpTPj%2FufKIMsGRp%2BqlrufTmzZ2I%2B%2FYsE%2F3iVH5dNT7HR0CwKDw4e7RdwxEAO%2FmfTpK9tYlCWl2GFUhAEkjU%2F98KB5%2FxwC3ZPP67Lc6Mq7baOWvsbclZa1WQEXxSYCERE7mj0CSO3wEX8HAUmP%2Fkv8Bf4L3rsV3VoPK7r%2FlLiSDrUc1xezFym11dgat55GdOE2XvA8Cj7Tw%2FqJ%2FzbqTksxVTEenbWxgu99r3kmTkCW0h1YXoZxsJ6bq%2FAK%2B%2BBpsexnEjHBkw8tG9xAY6pgFRTeWPsJURObbPd%2Bbyyvh3uSWIakJfCDJHpxm%2B8%2BiN8%2F5f05LHry9XPLK8%2BaYaKHav42bPl%2FAfzj0PghmY3mzz2%2BvC3hwexf%2B2KdAL9bBuEBQ1T55ohoJWeb8eQuBK%2F6CoFRXQJuDpFPgGk%2BiV95gnr8DU16WpgRYak1e9z%2Fk6TGj70ra1Cb6bbzqWuOelRUBaFf0RsfT4UYtGbkr11HpK4K1%2Bjl9Y&X-Amz-Signature=bee28bedcdd350d83da4cf0bfe4f61a5bed62807ec86633ad31bcafd0027afe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQAUJNW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpSkk2smuOmy0ThYt8NIq566nLcUeZG1JPtQ0IcsLCgAiBqImS%2BwpN%2FiXcRQHrb1PGCEMXqEj8RpnxC01llIoqZvCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMGXuTMOjqsfgpzO8TKtwDNpYNuxsO1SMqg8TcgdNRSuAEZYuOywSnZGPiy79XYwbRLjeLJSDIPjLYfXhiTnXXSxau%2FdPOWGHcVM0%2FEw%2FN5%2B93ez%2BRQcw%2FSFjIQbxQPOakSepsQPBu7jlq03996%2BQ1Hk48gp0oKwrZ20YnnEvPrhxN%2Bv78Pdhj3fMozTnub0BLsHQMjStr2%2Ftb9m5TmkMqFmx8kBKtbHqAGnh9kdI1Y0sRy2M3oLdIExzo60EY8B2pBMNExVidqQ2VHsDRmLriAJHk587f%2FTTrqzvJAHCGHJyE%2FRIZ3M45arUmYv3YRgJsqPEEu26%2Fi6wuiTA5%2BORm1NEs7FhOxp5CmHLFRFSfbY7LCVDF1FSwxHsGjWa0ftSbg79dC%2BXauJpTPj%2FufKIMsGRp%2BqlrufTmzZ2I%2B%2FYsE%2F3iVH5dNT7HR0CwKDw4e7RdwxEAO%2FmfTpK9tYlCWl2GFUhAEkjU%2F98KB5%2FxwC3ZPP67Lc6Mq7baOWvsbclZa1WQEXxSYCERE7mj0CSO3wEX8HAUmP%2Fkv8Bf4L3rsV3VoPK7r%2FlLiSDrUc1xezFym11dgat55GdOE2XvA8Cj7Tw%2FqJ%2FzbqTksxVTEenbWxgu99r3kmTkCW0h1YXoZxsJ6bq%2FAK%2B%2BBpsexnEjHBkw8tG9xAY6pgFRTeWPsJURObbPd%2Bbyyvh3uSWIakJfCDJHpxm%2B8%2BiN8%2F5f05LHry9XPLK8%2BaYaKHav42bPl%2FAfzj0PghmY3mzz2%2BvC3hwexf%2B2KdAL9bBuEBQ1T55ohoJWeb8eQuBK%2F6CoFRXQJuDpFPgGk%2BiV95gnr8DU16WpgRYak1e9z%2Fk6TGj70ra1Cb6bbzqWuOelRUBaFf0RsfT4UYtGbkr11HpK4K1%2Bjl9Y&X-Amz-Signature=0fea3c272a6a13906adc80f12bfd11eacb687abb8b087a324b7c6aa1f3624691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQAUJNW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpSkk2smuOmy0ThYt8NIq566nLcUeZG1JPtQ0IcsLCgAiBqImS%2BwpN%2FiXcRQHrb1PGCEMXqEj8RpnxC01llIoqZvCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMGXuTMOjqsfgpzO8TKtwDNpYNuxsO1SMqg8TcgdNRSuAEZYuOywSnZGPiy79XYwbRLjeLJSDIPjLYfXhiTnXXSxau%2FdPOWGHcVM0%2FEw%2FN5%2B93ez%2BRQcw%2FSFjIQbxQPOakSepsQPBu7jlq03996%2BQ1Hk48gp0oKwrZ20YnnEvPrhxN%2Bv78Pdhj3fMozTnub0BLsHQMjStr2%2Ftb9m5TmkMqFmx8kBKtbHqAGnh9kdI1Y0sRy2M3oLdIExzo60EY8B2pBMNExVidqQ2VHsDRmLriAJHk587f%2FTTrqzvJAHCGHJyE%2FRIZ3M45arUmYv3YRgJsqPEEu26%2Fi6wuiTA5%2BORm1NEs7FhOxp5CmHLFRFSfbY7LCVDF1FSwxHsGjWa0ftSbg79dC%2BXauJpTPj%2FufKIMsGRp%2BqlrufTmzZ2I%2B%2FYsE%2F3iVH5dNT7HR0CwKDw4e7RdwxEAO%2FmfTpK9tYlCWl2GFUhAEkjU%2F98KB5%2FxwC3ZPP67Lc6Mq7baOWvsbclZa1WQEXxSYCERE7mj0CSO3wEX8HAUmP%2Fkv8Bf4L3rsV3VoPK7r%2FlLiSDrUc1xezFym11dgat55GdOE2XvA8Cj7Tw%2FqJ%2FzbqTksxVTEenbWxgu99r3kmTkCW0h1YXoZxsJ6bq%2FAK%2B%2BBpsexnEjHBkw8tG9xAY6pgFRTeWPsJURObbPd%2Bbyyvh3uSWIakJfCDJHpxm%2B8%2BiN8%2F5f05LHry9XPLK8%2BaYaKHav42bPl%2FAfzj0PghmY3mzz2%2BvC3hwexf%2B2KdAL9bBuEBQ1T55ohoJWeb8eQuBK%2F6CoFRXQJuDpFPgGk%2BiV95gnr8DU16WpgRYak1e9z%2Fk6TGj70ra1Cb6bbzqWuOelRUBaFf0RsfT4UYtGbkr11HpK4K1%2Bjl9Y&X-Amz-Signature=cf4bbd0f410bfcaf0c1490a3c1fb48b348142440ed1f17a2b3e719cefbe9d4d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQAUJNW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpSkk2smuOmy0ThYt8NIq566nLcUeZG1JPtQ0IcsLCgAiBqImS%2BwpN%2FiXcRQHrb1PGCEMXqEj8RpnxC01llIoqZvCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMGXuTMOjqsfgpzO8TKtwDNpYNuxsO1SMqg8TcgdNRSuAEZYuOywSnZGPiy79XYwbRLjeLJSDIPjLYfXhiTnXXSxau%2FdPOWGHcVM0%2FEw%2FN5%2B93ez%2BRQcw%2FSFjIQbxQPOakSepsQPBu7jlq03996%2BQ1Hk48gp0oKwrZ20YnnEvPrhxN%2Bv78Pdhj3fMozTnub0BLsHQMjStr2%2Ftb9m5TmkMqFmx8kBKtbHqAGnh9kdI1Y0sRy2M3oLdIExzo60EY8B2pBMNExVidqQ2VHsDRmLriAJHk587f%2FTTrqzvJAHCGHJyE%2FRIZ3M45arUmYv3YRgJsqPEEu26%2Fi6wuiTA5%2BORm1NEs7FhOxp5CmHLFRFSfbY7LCVDF1FSwxHsGjWa0ftSbg79dC%2BXauJpTPj%2FufKIMsGRp%2BqlrufTmzZ2I%2B%2FYsE%2F3iVH5dNT7HR0CwKDw4e7RdwxEAO%2FmfTpK9tYlCWl2GFUhAEkjU%2F98KB5%2FxwC3ZPP67Lc6Mq7baOWvsbclZa1WQEXxSYCERE7mj0CSO3wEX8HAUmP%2Fkv8Bf4L3rsV3VoPK7r%2FlLiSDrUc1xezFym11dgat55GdOE2XvA8Cj7Tw%2FqJ%2FzbqTksxVTEenbWxgu99r3kmTkCW0h1YXoZxsJ6bq%2FAK%2B%2BBpsexnEjHBkw8tG9xAY6pgFRTeWPsJURObbPd%2Bbyyvh3uSWIakJfCDJHpxm%2B8%2BiN8%2F5f05LHry9XPLK8%2BaYaKHav42bPl%2FAfzj0PghmY3mzz2%2BvC3hwexf%2B2KdAL9bBuEBQ1T55ohoJWeb8eQuBK%2F6CoFRXQJuDpFPgGk%2BiV95gnr8DU16WpgRYak1e9z%2Fk6TGj70ra1Cb6bbzqWuOelRUBaFf0RsfT4UYtGbkr11HpK4K1%2Bjl9Y&X-Amz-Signature=1593fd9fdd92b3230c8d4217715642c53f0e4c30cda2efd4ac49b5ecfaae5c6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQAUJNW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpSkk2smuOmy0ThYt8NIq566nLcUeZG1JPtQ0IcsLCgAiBqImS%2BwpN%2FiXcRQHrb1PGCEMXqEj8RpnxC01llIoqZvCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMGXuTMOjqsfgpzO8TKtwDNpYNuxsO1SMqg8TcgdNRSuAEZYuOywSnZGPiy79XYwbRLjeLJSDIPjLYfXhiTnXXSxau%2FdPOWGHcVM0%2FEw%2FN5%2B93ez%2BRQcw%2FSFjIQbxQPOakSepsQPBu7jlq03996%2BQ1Hk48gp0oKwrZ20YnnEvPrhxN%2Bv78Pdhj3fMozTnub0BLsHQMjStr2%2Ftb9m5TmkMqFmx8kBKtbHqAGnh9kdI1Y0sRy2M3oLdIExzo60EY8B2pBMNExVidqQ2VHsDRmLriAJHk587f%2FTTrqzvJAHCGHJyE%2FRIZ3M45arUmYv3YRgJsqPEEu26%2Fi6wuiTA5%2BORm1NEs7FhOxp5CmHLFRFSfbY7LCVDF1FSwxHsGjWa0ftSbg79dC%2BXauJpTPj%2FufKIMsGRp%2BqlrufTmzZ2I%2B%2FYsE%2F3iVH5dNT7HR0CwKDw4e7RdwxEAO%2FmfTpK9tYlCWl2GFUhAEkjU%2F98KB5%2FxwC3ZPP67Lc6Mq7baOWvsbclZa1WQEXxSYCERE7mj0CSO3wEX8HAUmP%2Fkv8Bf4L3rsV3VoPK7r%2FlLiSDrUc1xezFym11dgat55GdOE2XvA8Cj7Tw%2FqJ%2FzbqTksxVTEenbWxgu99r3kmTkCW0h1YXoZxsJ6bq%2FAK%2B%2BBpsexnEjHBkw8tG9xAY6pgFRTeWPsJURObbPd%2Bbyyvh3uSWIakJfCDJHpxm%2B8%2BiN8%2F5f05LHry9XPLK8%2BaYaKHav42bPl%2FAfzj0PghmY3mzz2%2BvC3hwexf%2B2KdAL9bBuEBQ1T55ohoJWeb8eQuBK%2F6CoFRXQJuDpFPgGk%2BiV95gnr8DU16WpgRYak1e9z%2Fk6TGj70ra1Cb6bbzqWuOelRUBaFf0RsfT4UYtGbkr11HpK4K1%2Bjl9Y&X-Amz-Signature=00ebf9795fe115c4a4b541494dc3eabe453b551cbc757cde31fed4fded540a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQAUJNW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGpSkk2smuOmy0ThYt8NIq566nLcUeZG1JPtQ0IcsLCgAiBqImS%2BwpN%2FiXcRQHrb1PGCEMXqEj8RpnxC01llIoqZvCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMGXuTMOjqsfgpzO8TKtwDNpYNuxsO1SMqg8TcgdNRSuAEZYuOywSnZGPiy79XYwbRLjeLJSDIPjLYfXhiTnXXSxau%2FdPOWGHcVM0%2FEw%2FN5%2B93ez%2BRQcw%2FSFjIQbxQPOakSepsQPBu7jlq03996%2BQ1Hk48gp0oKwrZ20YnnEvPrhxN%2Bv78Pdhj3fMozTnub0BLsHQMjStr2%2Ftb9m5TmkMqFmx8kBKtbHqAGnh9kdI1Y0sRy2M3oLdIExzo60EY8B2pBMNExVidqQ2VHsDRmLriAJHk587f%2FTTrqzvJAHCGHJyE%2FRIZ3M45arUmYv3YRgJsqPEEu26%2Fi6wuiTA5%2BORm1NEs7FhOxp5CmHLFRFSfbY7LCVDF1FSwxHsGjWa0ftSbg79dC%2BXauJpTPj%2FufKIMsGRp%2BqlrufTmzZ2I%2B%2FYsE%2F3iVH5dNT7HR0CwKDw4e7RdwxEAO%2FmfTpK9tYlCWl2GFUhAEkjU%2F98KB5%2FxwC3ZPP67Lc6Mq7baOWvsbclZa1WQEXxSYCERE7mj0CSO3wEX8HAUmP%2Fkv8Bf4L3rsV3VoPK7r%2FlLiSDrUc1xezFym11dgat55GdOE2XvA8Cj7Tw%2FqJ%2FzbqTksxVTEenbWxgu99r3kmTkCW0h1YXoZxsJ6bq%2FAK%2B%2BBpsexnEjHBkw8tG9xAY6pgFRTeWPsJURObbPd%2Bbyyvh3uSWIakJfCDJHpxm%2B8%2BiN8%2F5f05LHry9XPLK8%2BaYaKHav42bPl%2FAfzj0PghmY3mzz2%2BvC3hwexf%2B2KdAL9bBuEBQ1T55ohoJWeb8eQuBK%2F6CoFRXQJuDpFPgGk%2BiV95gnr8DU16WpgRYak1e9z%2Fk6TGj70ra1Cb6bbzqWuOelRUBaFf0RsfT4UYtGbkr11HpK4K1%2Bjl9Y&X-Amz-Signature=2a5225d4d32ca6a59d8ca908dc552d64d54b2feea6f27dd64bd30c8ee2aff63b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
