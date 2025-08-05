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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHA2OR3R%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEqDJgAO19XIG6MW4Kp7lA8R4D98GdoQY%2BXjmhyhh65%2FAiBexRWQHdqcinTyYbXTv8oblXpq7L2mATCfDs4JbmEJIyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMpk1ZEooVT9xcS4aJKtwDKMO%2BIqWPlH2Q5VpiKosEdpoVG0fWj%2F59WA3bzIYg0bG2GiMb7LdTw6R5eQEmz0hqvWh%2FVzZ2pWFAxfxyBswJtYVCbhdqPjwQr787AqAPca3DotmG%2F4mXoiBSB1TjeNhGYIXLAsDemk5BTyxp38AD5tpWHu%2FASSR6IonJAchzdvsiSxxp9LNXBxkZk6g9IndL8E6183iqnllShEqVENjpjXCO3qn%2BsrYmoJsfZtMppdjpu04YNbLjqAQDDpXRJixcnJ%2FS0fY4AzzR6ev9XK7Wn7kcn7vj%2F3uPXtWeoGxCP2jP7Zg2YtAx0NWeUn0jOYIhKIl5H2a4x6sG%2FD7%2B0xJniPkbah12E4VDPoMO4dga7hq6pOBQ61ZVMVkhc%2F%2FMKuPsS3ZKLVFCHpE9PmX0psi0J2d5e2JzQ%2FGu40URMucU%2F8oGH9cUQOqnDfuf50viIH%2FpCTQCOHgU1KkHbX87K9q%2FNM6JunYVYoCb6Qu9AB7JjTrFWU3YhWDuuBFGHjy9vrcOzFDhGtqSgXIk9sZYf2Zhi%2BOSxM8PPCSM29%2BMMecijzw5TFKGePIcAs4mlMslC%2BlpUVOX5iAlSpEgQ%2BuBUMYPD7AsVpuR6xcSfTPzFAEaE94WaD7CWgxGnhjo8hww4%2FTExAY6pgEDCqBXBL1Q6tCeiPpQ2PhRxeDK8TaOtz4zDclXR4PmJxbA%2Fm6c1az%2FUh0oUvcteRzQvHwEyi96st94qtayn6%2Fwfc%2FIbAnBhcV%2BNw8kvzlOsJan0AK1%2FcwG5VtG%2F%2B0clMXoWgFWn%2Fh3%2FUpDvGTGyWsNppwGy7IsY0mq643zVe3gjZMaw2ASpQO%2FIKn3MTKA7IiaBkqhms9msRVlHe5XQ92EdMjD%2FX1v&X-Amz-Signature=f2ed0b917a6227732fa67dcc167131327707860aadc365c75d430c8c06b847c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHA2OR3R%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEqDJgAO19XIG6MW4Kp7lA8R4D98GdoQY%2BXjmhyhh65%2FAiBexRWQHdqcinTyYbXTv8oblXpq7L2mATCfDs4JbmEJIyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMpk1ZEooVT9xcS4aJKtwDKMO%2BIqWPlH2Q5VpiKosEdpoVG0fWj%2F59WA3bzIYg0bG2GiMb7LdTw6R5eQEmz0hqvWh%2FVzZ2pWFAxfxyBswJtYVCbhdqPjwQr787AqAPca3DotmG%2F4mXoiBSB1TjeNhGYIXLAsDemk5BTyxp38AD5tpWHu%2FASSR6IonJAchzdvsiSxxp9LNXBxkZk6g9IndL8E6183iqnllShEqVENjpjXCO3qn%2BsrYmoJsfZtMppdjpu04YNbLjqAQDDpXRJixcnJ%2FS0fY4AzzR6ev9XK7Wn7kcn7vj%2F3uPXtWeoGxCP2jP7Zg2YtAx0NWeUn0jOYIhKIl5H2a4x6sG%2FD7%2B0xJniPkbah12E4VDPoMO4dga7hq6pOBQ61ZVMVkhc%2F%2FMKuPsS3ZKLVFCHpE9PmX0psi0J2d5e2JzQ%2FGu40URMucU%2F8oGH9cUQOqnDfuf50viIH%2FpCTQCOHgU1KkHbX87K9q%2FNM6JunYVYoCb6Qu9AB7JjTrFWU3YhWDuuBFGHjy9vrcOzFDhGtqSgXIk9sZYf2Zhi%2BOSxM8PPCSM29%2BMMecijzw5TFKGePIcAs4mlMslC%2BlpUVOX5iAlSpEgQ%2BuBUMYPD7AsVpuR6xcSfTPzFAEaE94WaD7CWgxGnhjo8hww4%2FTExAY6pgEDCqBXBL1Q6tCeiPpQ2PhRxeDK8TaOtz4zDclXR4PmJxbA%2Fm6c1az%2FUh0oUvcteRzQvHwEyi96st94qtayn6%2Fwfc%2FIbAnBhcV%2BNw8kvzlOsJan0AK1%2FcwG5VtG%2F%2B0clMXoWgFWn%2Fh3%2FUpDvGTGyWsNppwGy7IsY0mq643zVe3gjZMaw2ASpQO%2FIKn3MTKA7IiaBkqhms9msRVlHe5XQ92EdMjD%2FX1v&X-Amz-Signature=c2b4e3ea8744516499f02cb006a177a8914aefb796afbd4462748790c6a695d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHA2OR3R%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEqDJgAO19XIG6MW4Kp7lA8R4D98GdoQY%2BXjmhyhh65%2FAiBexRWQHdqcinTyYbXTv8oblXpq7L2mATCfDs4JbmEJIyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMpk1ZEooVT9xcS4aJKtwDKMO%2BIqWPlH2Q5VpiKosEdpoVG0fWj%2F59WA3bzIYg0bG2GiMb7LdTw6R5eQEmz0hqvWh%2FVzZ2pWFAxfxyBswJtYVCbhdqPjwQr787AqAPca3DotmG%2F4mXoiBSB1TjeNhGYIXLAsDemk5BTyxp38AD5tpWHu%2FASSR6IonJAchzdvsiSxxp9LNXBxkZk6g9IndL8E6183iqnllShEqVENjpjXCO3qn%2BsrYmoJsfZtMppdjpu04YNbLjqAQDDpXRJixcnJ%2FS0fY4AzzR6ev9XK7Wn7kcn7vj%2F3uPXtWeoGxCP2jP7Zg2YtAx0NWeUn0jOYIhKIl5H2a4x6sG%2FD7%2B0xJniPkbah12E4VDPoMO4dga7hq6pOBQ61ZVMVkhc%2F%2FMKuPsS3ZKLVFCHpE9PmX0psi0J2d5e2JzQ%2FGu40URMucU%2F8oGH9cUQOqnDfuf50viIH%2FpCTQCOHgU1KkHbX87K9q%2FNM6JunYVYoCb6Qu9AB7JjTrFWU3YhWDuuBFGHjy9vrcOzFDhGtqSgXIk9sZYf2Zhi%2BOSxM8PPCSM29%2BMMecijzw5TFKGePIcAs4mlMslC%2BlpUVOX5iAlSpEgQ%2BuBUMYPD7AsVpuR6xcSfTPzFAEaE94WaD7CWgxGnhjo8hww4%2FTExAY6pgEDCqBXBL1Q6tCeiPpQ2PhRxeDK8TaOtz4zDclXR4PmJxbA%2Fm6c1az%2FUh0oUvcteRzQvHwEyi96st94qtayn6%2Fwfc%2FIbAnBhcV%2BNw8kvzlOsJan0AK1%2FcwG5VtG%2F%2B0clMXoWgFWn%2Fh3%2FUpDvGTGyWsNppwGy7IsY0mq643zVe3gjZMaw2ASpQO%2FIKn3MTKA7IiaBkqhms9msRVlHe5XQ92EdMjD%2FX1v&X-Amz-Signature=9bede0d86d236a8c001c41166e1a32dc5017a340e665a8e846d80bda74414d66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHA2OR3R%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEqDJgAO19XIG6MW4Kp7lA8R4D98GdoQY%2BXjmhyhh65%2FAiBexRWQHdqcinTyYbXTv8oblXpq7L2mATCfDs4JbmEJIyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMpk1ZEooVT9xcS4aJKtwDKMO%2BIqWPlH2Q5VpiKosEdpoVG0fWj%2F59WA3bzIYg0bG2GiMb7LdTw6R5eQEmz0hqvWh%2FVzZ2pWFAxfxyBswJtYVCbhdqPjwQr787AqAPca3DotmG%2F4mXoiBSB1TjeNhGYIXLAsDemk5BTyxp38AD5tpWHu%2FASSR6IonJAchzdvsiSxxp9LNXBxkZk6g9IndL8E6183iqnllShEqVENjpjXCO3qn%2BsrYmoJsfZtMppdjpu04YNbLjqAQDDpXRJixcnJ%2FS0fY4AzzR6ev9XK7Wn7kcn7vj%2F3uPXtWeoGxCP2jP7Zg2YtAx0NWeUn0jOYIhKIl5H2a4x6sG%2FD7%2B0xJniPkbah12E4VDPoMO4dga7hq6pOBQ61ZVMVkhc%2F%2FMKuPsS3ZKLVFCHpE9PmX0psi0J2d5e2JzQ%2FGu40URMucU%2F8oGH9cUQOqnDfuf50viIH%2FpCTQCOHgU1KkHbX87K9q%2FNM6JunYVYoCb6Qu9AB7JjTrFWU3YhWDuuBFGHjy9vrcOzFDhGtqSgXIk9sZYf2Zhi%2BOSxM8PPCSM29%2BMMecijzw5TFKGePIcAs4mlMslC%2BlpUVOX5iAlSpEgQ%2BuBUMYPD7AsVpuR6xcSfTPzFAEaE94WaD7CWgxGnhjo8hww4%2FTExAY6pgEDCqBXBL1Q6tCeiPpQ2PhRxeDK8TaOtz4zDclXR4PmJxbA%2Fm6c1az%2FUh0oUvcteRzQvHwEyi96st94qtayn6%2Fwfc%2FIbAnBhcV%2BNw8kvzlOsJan0AK1%2FcwG5VtG%2F%2B0clMXoWgFWn%2Fh3%2FUpDvGTGyWsNppwGy7IsY0mq643zVe3gjZMaw2ASpQO%2FIKn3MTKA7IiaBkqhms9msRVlHe5XQ92EdMjD%2FX1v&X-Amz-Signature=212ae7ff767877ee7769e7704bad3b0124135296e0bc68289e40dddd95ab3be5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHA2OR3R%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEqDJgAO19XIG6MW4Kp7lA8R4D98GdoQY%2BXjmhyhh65%2FAiBexRWQHdqcinTyYbXTv8oblXpq7L2mATCfDs4JbmEJIyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMpk1ZEooVT9xcS4aJKtwDKMO%2BIqWPlH2Q5VpiKosEdpoVG0fWj%2F59WA3bzIYg0bG2GiMb7LdTw6R5eQEmz0hqvWh%2FVzZ2pWFAxfxyBswJtYVCbhdqPjwQr787AqAPca3DotmG%2F4mXoiBSB1TjeNhGYIXLAsDemk5BTyxp38AD5tpWHu%2FASSR6IonJAchzdvsiSxxp9LNXBxkZk6g9IndL8E6183iqnllShEqVENjpjXCO3qn%2BsrYmoJsfZtMppdjpu04YNbLjqAQDDpXRJixcnJ%2FS0fY4AzzR6ev9XK7Wn7kcn7vj%2F3uPXtWeoGxCP2jP7Zg2YtAx0NWeUn0jOYIhKIl5H2a4x6sG%2FD7%2B0xJniPkbah12E4VDPoMO4dga7hq6pOBQ61ZVMVkhc%2F%2FMKuPsS3ZKLVFCHpE9PmX0psi0J2d5e2JzQ%2FGu40URMucU%2F8oGH9cUQOqnDfuf50viIH%2FpCTQCOHgU1KkHbX87K9q%2FNM6JunYVYoCb6Qu9AB7JjTrFWU3YhWDuuBFGHjy9vrcOzFDhGtqSgXIk9sZYf2Zhi%2BOSxM8PPCSM29%2BMMecijzw5TFKGePIcAs4mlMslC%2BlpUVOX5iAlSpEgQ%2BuBUMYPD7AsVpuR6xcSfTPzFAEaE94WaD7CWgxGnhjo8hww4%2FTExAY6pgEDCqBXBL1Q6tCeiPpQ2PhRxeDK8TaOtz4zDclXR4PmJxbA%2Fm6c1az%2FUh0oUvcteRzQvHwEyi96st94qtayn6%2Fwfc%2FIbAnBhcV%2BNw8kvzlOsJan0AK1%2FcwG5VtG%2F%2B0clMXoWgFWn%2Fh3%2FUpDvGTGyWsNppwGy7IsY0mq643zVe3gjZMaw2ASpQO%2FIKn3MTKA7IiaBkqhms9msRVlHe5XQ92EdMjD%2FX1v&X-Amz-Signature=ae10adb57bb9a6a9ca804ea88d379cd04978213db88532f88010f4aee6758278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHA2OR3R%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEqDJgAO19XIG6MW4Kp7lA8R4D98GdoQY%2BXjmhyhh65%2FAiBexRWQHdqcinTyYbXTv8oblXpq7L2mATCfDs4JbmEJIyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMpk1ZEooVT9xcS4aJKtwDKMO%2BIqWPlH2Q5VpiKosEdpoVG0fWj%2F59WA3bzIYg0bG2GiMb7LdTw6R5eQEmz0hqvWh%2FVzZ2pWFAxfxyBswJtYVCbhdqPjwQr787AqAPca3DotmG%2F4mXoiBSB1TjeNhGYIXLAsDemk5BTyxp38AD5tpWHu%2FASSR6IonJAchzdvsiSxxp9LNXBxkZk6g9IndL8E6183iqnllShEqVENjpjXCO3qn%2BsrYmoJsfZtMppdjpu04YNbLjqAQDDpXRJixcnJ%2FS0fY4AzzR6ev9XK7Wn7kcn7vj%2F3uPXtWeoGxCP2jP7Zg2YtAx0NWeUn0jOYIhKIl5H2a4x6sG%2FD7%2B0xJniPkbah12E4VDPoMO4dga7hq6pOBQ61ZVMVkhc%2F%2FMKuPsS3ZKLVFCHpE9PmX0psi0J2d5e2JzQ%2FGu40URMucU%2F8oGH9cUQOqnDfuf50viIH%2FpCTQCOHgU1KkHbX87K9q%2FNM6JunYVYoCb6Qu9AB7JjTrFWU3YhWDuuBFGHjy9vrcOzFDhGtqSgXIk9sZYf2Zhi%2BOSxM8PPCSM29%2BMMecijzw5TFKGePIcAs4mlMslC%2BlpUVOX5iAlSpEgQ%2BuBUMYPD7AsVpuR6xcSfTPzFAEaE94WaD7CWgxGnhjo8hww4%2FTExAY6pgEDCqBXBL1Q6tCeiPpQ2PhRxeDK8TaOtz4zDclXR4PmJxbA%2Fm6c1az%2FUh0oUvcteRzQvHwEyi96st94qtayn6%2Fwfc%2FIbAnBhcV%2BNw8kvzlOsJan0AK1%2FcwG5VtG%2F%2B0clMXoWgFWn%2Fh3%2FUpDvGTGyWsNppwGy7IsY0mq643zVe3gjZMaw2ASpQO%2FIKn3MTKA7IiaBkqhms9msRVlHe5XQ92EdMjD%2FX1v&X-Amz-Signature=96df3392c690e3f411da3bf4f60f12d10342b9955c842f7b898eb3227e96b2c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHA2OR3R%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEqDJgAO19XIG6MW4Kp7lA8R4D98GdoQY%2BXjmhyhh65%2FAiBexRWQHdqcinTyYbXTv8oblXpq7L2mATCfDs4JbmEJIyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMpk1ZEooVT9xcS4aJKtwDKMO%2BIqWPlH2Q5VpiKosEdpoVG0fWj%2F59WA3bzIYg0bG2GiMb7LdTw6R5eQEmz0hqvWh%2FVzZ2pWFAxfxyBswJtYVCbhdqPjwQr787AqAPca3DotmG%2F4mXoiBSB1TjeNhGYIXLAsDemk5BTyxp38AD5tpWHu%2FASSR6IonJAchzdvsiSxxp9LNXBxkZk6g9IndL8E6183iqnllShEqVENjpjXCO3qn%2BsrYmoJsfZtMppdjpu04YNbLjqAQDDpXRJixcnJ%2FS0fY4AzzR6ev9XK7Wn7kcn7vj%2F3uPXtWeoGxCP2jP7Zg2YtAx0NWeUn0jOYIhKIl5H2a4x6sG%2FD7%2B0xJniPkbah12E4VDPoMO4dga7hq6pOBQ61ZVMVkhc%2F%2FMKuPsS3ZKLVFCHpE9PmX0psi0J2d5e2JzQ%2FGu40URMucU%2F8oGH9cUQOqnDfuf50viIH%2FpCTQCOHgU1KkHbX87K9q%2FNM6JunYVYoCb6Qu9AB7JjTrFWU3YhWDuuBFGHjy9vrcOzFDhGtqSgXIk9sZYf2Zhi%2BOSxM8PPCSM29%2BMMecijzw5TFKGePIcAs4mlMslC%2BlpUVOX5iAlSpEgQ%2BuBUMYPD7AsVpuR6xcSfTPzFAEaE94WaD7CWgxGnhjo8hww4%2FTExAY6pgEDCqBXBL1Q6tCeiPpQ2PhRxeDK8TaOtz4zDclXR4PmJxbA%2Fm6c1az%2FUh0oUvcteRzQvHwEyi96st94qtayn6%2Fwfc%2FIbAnBhcV%2BNw8kvzlOsJan0AK1%2FcwG5VtG%2F%2B0clMXoWgFWn%2Fh3%2FUpDvGTGyWsNppwGy7IsY0mq643zVe3gjZMaw2ASpQO%2FIKn3MTKA7IiaBkqhms9msRVlHe5XQ92EdMjD%2FX1v&X-Amz-Signature=25c819bec30d192a7bb5f7e2ae06bdb57ca7adbd5e7f38e7ff12da20232a359b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHA2OR3R%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEqDJgAO19XIG6MW4Kp7lA8R4D98GdoQY%2BXjmhyhh65%2FAiBexRWQHdqcinTyYbXTv8oblXpq7L2mATCfDs4JbmEJIyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMpk1ZEooVT9xcS4aJKtwDKMO%2BIqWPlH2Q5VpiKosEdpoVG0fWj%2F59WA3bzIYg0bG2GiMb7LdTw6R5eQEmz0hqvWh%2FVzZ2pWFAxfxyBswJtYVCbhdqPjwQr787AqAPca3DotmG%2F4mXoiBSB1TjeNhGYIXLAsDemk5BTyxp38AD5tpWHu%2FASSR6IonJAchzdvsiSxxp9LNXBxkZk6g9IndL8E6183iqnllShEqVENjpjXCO3qn%2BsrYmoJsfZtMppdjpu04YNbLjqAQDDpXRJixcnJ%2FS0fY4AzzR6ev9XK7Wn7kcn7vj%2F3uPXtWeoGxCP2jP7Zg2YtAx0NWeUn0jOYIhKIl5H2a4x6sG%2FD7%2B0xJniPkbah12E4VDPoMO4dga7hq6pOBQ61ZVMVkhc%2F%2FMKuPsS3ZKLVFCHpE9PmX0psi0J2d5e2JzQ%2FGu40URMucU%2F8oGH9cUQOqnDfuf50viIH%2FpCTQCOHgU1KkHbX87K9q%2FNM6JunYVYoCb6Qu9AB7JjTrFWU3YhWDuuBFGHjy9vrcOzFDhGtqSgXIk9sZYf2Zhi%2BOSxM8PPCSM29%2BMMecijzw5TFKGePIcAs4mlMslC%2BlpUVOX5iAlSpEgQ%2BuBUMYPD7AsVpuR6xcSfTPzFAEaE94WaD7CWgxGnhjo8hww4%2FTExAY6pgEDCqBXBL1Q6tCeiPpQ2PhRxeDK8TaOtz4zDclXR4PmJxbA%2Fm6c1az%2FUh0oUvcteRzQvHwEyi96st94qtayn6%2Fwfc%2FIbAnBhcV%2BNw8kvzlOsJan0AK1%2FcwG5VtG%2F%2B0clMXoWgFWn%2Fh3%2FUpDvGTGyWsNppwGy7IsY0mq643zVe3gjZMaw2ASpQO%2FIKn3MTKA7IiaBkqhms9msRVlHe5XQ92EdMjD%2FX1v&X-Amz-Signature=c311618624f4d69b02a2032540e7c2006c3162fb1835c2f68fede75702ca512f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHA2OR3R%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEqDJgAO19XIG6MW4Kp7lA8R4D98GdoQY%2BXjmhyhh65%2FAiBexRWQHdqcinTyYbXTv8oblXpq7L2mATCfDs4JbmEJIyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMpk1ZEooVT9xcS4aJKtwDKMO%2BIqWPlH2Q5VpiKosEdpoVG0fWj%2F59WA3bzIYg0bG2GiMb7LdTw6R5eQEmz0hqvWh%2FVzZ2pWFAxfxyBswJtYVCbhdqPjwQr787AqAPca3DotmG%2F4mXoiBSB1TjeNhGYIXLAsDemk5BTyxp38AD5tpWHu%2FASSR6IonJAchzdvsiSxxp9LNXBxkZk6g9IndL8E6183iqnllShEqVENjpjXCO3qn%2BsrYmoJsfZtMppdjpu04YNbLjqAQDDpXRJixcnJ%2FS0fY4AzzR6ev9XK7Wn7kcn7vj%2F3uPXtWeoGxCP2jP7Zg2YtAx0NWeUn0jOYIhKIl5H2a4x6sG%2FD7%2B0xJniPkbah12E4VDPoMO4dga7hq6pOBQ61ZVMVkhc%2F%2FMKuPsS3ZKLVFCHpE9PmX0psi0J2d5e2JzQ%2FGu40URMucU%2F8oGH9cUQOqnDfuf50viIH%2FpCTQCOHgU1KkHbX87K9q%2FNM6JunYVYoCb6Qu9AB7JjTrFWU3YhWDuuBFGHjy9vrcOzFDhGtqSgXIk9sZYf2Zhi%2BOSxM8PPCSM29%2BMMecijzw5TFKGePIcAs4mlMslC%2BlpUVOX5iAlSpEgQ%2BuBUMYPD7AsVpuR6xcSfTPzFAEaE94WaD7CWgxGnhjo8hww4%2FTExAY6pgEDCqBXBL1Q6tCeiPpQ2PhRxeDK8TaOtz4zDclXR4PmJxbA%2Fm6c1az%2FUh0oUvcteRzQvHwEyi96st94qtayn6%2Fwfc%2FIbAnBhcV%2BNw8kvzlOsJan0AK1%2FcwG5VtG%2F%2B0clMXoWgFWn%2Fh3%2FUpDvGTGyWsNppwGy7IsY0mq643zVe3gjZMaw2ASpQO%2FIKn3MTKA7IiaBkqhms9msRVlHe5XQ92EdMjD%2FX1v&X-Amz-Signature=297f47daa5426c61fb732f8c362e3c3fda2b4ba029479a8e490fdc9bd35291ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHA2OR3R%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEqDJgAO19XIG6MW4Kp7lA8R4D98GdoQY%2BXjmhyhh65%2FAiBexRWQHdqcinTyYbXTv8oblXpq7L2mATCfDs4JbmEJIyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMpk1ZEooVT9xcS4aJKtwDKMO%2BIqWPlH2Q5VpiKosEdpoVG0fWj%2F59WA3bzIYg0bG2GiMb7LdTw6R5eQEmz0hqvWh%2FVzZ2pWFAxfxyBswJtYVCbhdqPjwQr787AqAPca3DotmG%2F4mXoiBSB1TjeNhGYIXLAsDemk5BTyxp38AD5tpWHu%2FASSR6IonJAchzdvsiSxxp9LNXBxkZk6g9IndL8E6183iqnllShEqVENjpjXCO3qn%2BsrYmoJsfZtMppdjpu04YNbLjqAQDDpXRJixcnJ%2FS0fY4AzzR6ev9XK7Wn7kcn7vj%2F3uPXtWeoGxCP2jP7Zg2YtAx0NWeUn0jOYIhKIl5H2a4x6sG%2FD7%2B0xJniPkbah12E4VDPoMO4dga7hq6pOBQ61ZVMVkhc%2F%2FMKuPsS3ZKLVFCHpE9PmX0psi0J2d5e2JzQ%2FGu40URMucU%2F8oGH9cUQOqnDfuf50viIH%2FpCTQCOHgU1KkHbX87K9q%2FNM6JunYVYoCb6Qu9AB7JjTrFWU3YhWDuuBFGHjy9vrcOzFDhGtqSgXIk9sZYf2Zhi%2BOSxM8PPCSM29%2BMMecijzw5TFKGePIcAs4mlMslC%2BlpUVOX5iAlSpEgQ%2BuBUMYPD7AsVpuR6xcSfTPzFAEaE94WaD7CWgxGnhjo8hww4%2FTExAY6pgEDCqBXBL1Q6tCeiPpQ2PhRxeDK8TaOtz4zDclXR4PmJxbA%2Fm6c1az%2FUh0oUvcteRzQvHwEyi96st94qtayn6%2Fwfc%2FIbAnBhcV%2BNw8kvzlOsJan0AK1%2FcwG5VtG%2F%2B0clMXoWgFWn%2Fh3%2FUpDvGTGyWsNppwGy7IsY0mq643zVe3gjZMaw2ASpQO%2FIKn3MTKA7IiaBkqhms9msRVlHe5XQ92EdMjD%2FX1v&X-Amz-Signature=ccad147370174c3509e0dc02de89c3f6eb613fa115ff12908a98c5703615fd95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HIIAF5F%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCQ49FX2XrD6Tw4PKOAP5%2Fi7kyRwhHf%2B7iIMZHiPygU4QIgD4ISZ5FEPhb4RLuHYEWRSSWOvv%2Bq9JcOgCXmUBMlPLsq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDCU9VhPsj0ologC7lSrcA4nvvmFPH%2BdIoL78%2B%2Bn8CnMhHjssA3GsQbP7Tg4NWnKVHHrP66BVJ1KaznwY1AXDSrxSWNIRM21e6fi2ybqNklIjgTB1OQslmOBUOUXTCHC%2F1LK0qGLU893wmbbZKsFFIsXstefB1Je1kjiLEilZJVkLan3uulVBBrkrIzzObXEzfBDvHJ90GxpbYLDaHnSuxf6b4Em%2FZstrLqIYPXZmk4RY%2Fms8jQsR%2Fkkky%2FLF1knQmHEezMW0mk5VvUMBMqmviUd7dhl8KQVAK9wI4dqTn3D2wp4IyXrXgW25gYkHe1%2Bc8B6gc7j5cvEIiYwOPE2%2F1WaFSU4SvO%2BWW6zMI9DqVYQn9C8Rm5k5l8RmcyNhPXGhI0tKzElONeyDTkI6fPYjQAcfbntGSaUU1988AI7OO%2FZ3gccXwkbgcy5bWpBwGM6ZjC5KjyTbdv5AJ3aW%2FZQUGLCItdDH7iJnDOX9Z9TeHY84rWSTsOn7bOGBlAvGZ%2BZsOzUX7BG6BwxMPUI7nyteri4ivZJxbfk%2BHoQ4Nks38g77%2Bz0Lbg7crSqQyqSpfYL6%2F%2BdQcM8RdGKqlO77CE782T7xntuT3Z0azC%2BkQuFLN5wtAKXsfKjhmNstd89m3c5TJgOXYm1jcEIiA9tkMJb0xMQGOqUBSxwhtlxfl4fwHfxY%2FEEJxHVWpjnYBg6kO9gY6XgBK4FWJCei%2BMy8YGCUKOIk7vSto%2FX419nLgIe91cFfibxQPRoFFrhsS%2FHVdkZOgJaY5d%2F8XAtExmsZOGndmXoUjg4HjUf7VV5OguTx7xFMKmZobhEuIjTrdJwf90bkabLmq32xNmqiyafWOzrkDHMG2Aa%2FiPVuZmON2KK4YDND3e4B8%2B5rxFOd&X-Amz-Signature=5f67872d9849aa7d1996a1f1a34953fcf3869f464883c3575433d48d0f233215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR6MXBEO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHZ8l0HQ6ZXHMR1xJtSsVf7zMeKXognGJSET%2FroQ7Av6AiASaOKcFSotcSYJdqdf9aVk0LpzStKTCvbxrASB2uVawyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMQgMRzbHhTb6SU3amKtwDmGjRykCi0GxNlFg2peKganoVZG6Uy5y9%2FKe9zO3c3bFj72vkv4avAo6x3PlvXbHld6JS72UF9XxGw3C4S48me94i9Whd%2Bt1QovUmwx1GWTJc5%2Btt0jfIBiUIVF1D%2B%2FKfOXL07lpveFNFZ%2FbJFyBbZD3pTKRJ7NmoXLC2ilPbo6jyW%2Fbt4lYsQdFs5ROyQfJV5C0epxfYh204GdwzP2l95Hjm31WDwtmRA6uXcOThiIHiGzT7px%2F6HMw7pMvgKL7H0%2BNSS%2BEbcr5IkW1vfNCNjDlfxrVO6Pjf%2FxM32XUrfXT6DBa0OKNF9n3D7xBi%2FhzIBqRa%2BTcnA4XRUZBL%2B%2FclWKifU%2FSRODJC4hUVi84EUwYzTVWYpEpkZKssnTxbe4gL00Bi0lLj1B%2BXDSdw%2Bcr2zYJotgW%2Bj35xA6dI5BBuf6YfXV2pfYUEnuOn6ZoiZ7La2q9twQwAbUG8wJGd6SCcvAFFBU0VvI2rxzLtJZnqvvssWJejAAj2wyA9mAG1mS%2FFgbID5ZNf%2BUBcJ3xwhBymFSHMg%2BhxtfVt5ddQS591bxbVRmTBp1Y2rVYaEgutUeppcq%2F%2F3HRZ9PtmFKuSxKA3QAjEU2%2BBgLL4QYQXHeVLd0Nnr8omxZpRYdRQ1YEwsPTExAY6pgGVKkgpqr2%2FIt9RGVQzhPcbOS%2Fl6ZiTRWomEMAbwOacdReB5iDUQHY%2B7sku8yiZIYQvApSfIoYfYSUn5I2mDHQmvJnD%2FPDoNN1yV%2FqUSRIW8xcZhhkJmzrpbTa%2FIK%2FvSFyeXH%2F6xnnldN0NfzIXnpB6kh0oziA85RWNyiRI2CN8V%2BNl5oZylBvkFIKEizDG3SNhbVGo0AtYOMBQReFJPjolAbjqVIy1&X-Amz-Signature=940c753848cb59a6430e70441ae579595a7bf48948dfd057fbae3a5c4e08f78c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUN2GLL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHmX5DReSLCVDAB4OSoCXUQ1aF7%2BlcWcPCiSOLTR8QL0AiBBepUnFGd3fuNTpB7NJMchuDix7Me9MzCKIKdoEwzzRCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMTsU4pVbHp8BSHwwrKtwDDVNw6TdBmf3rtLku4ZtzT5560HYm5LodiMIQPrVKshKrEKNpi5klEYOp4MVZ2YmElEUBnKT9BYdBIt1FxesEVeHx4%2FSCU6r3MVs4aHmokg%2B4A1VuyEYYstEriEOWNE8ERsKEDGPUUs0R8R7ENkhNyFdI3DwPdXXlYTNXS0p7BOx83v5I8riObYAJMfzBPWqyNr2VDVmTx4RF0oBPlK6JHPe%2FfolzqAi8z%2Fprli6VfXszK9lVx1NEWxIiLWdXcMSMQ%2BI5e2s0aFpvnvX8cKphcL7QwLCnKkgktH8AS7yQaxLV%2Bc8c%2BB%2FWcjahCBjLBiVhffbsUsziXtGApjTDOE%2F5tmUeRDLgRDws46Rgs17xjdYJ%2BnwDfzOKMuwRsU%2Fvhoc9xJdlA0C1t3B76y8nSfQ5zIN7SUPYqrOS%2Fu1QfJoYjin03Q1%2BOgTiyk00FDWOyqifmzxJjqCyINaeDGq8jCppvfixnwC9MChT60XExF0BWwkVHo4UtsXnB8nEuTTD55x%2B%2FRHDdNyw4%2F1m45TsetGgvoliQIMTO%2BSFTRZTBqhA1OIDUKEJKzVqOzpkOqdeacnhH9IgmwLJ4dLCigyxf9aI8YvmPdKEtj7VXpU4DXbx779LwKTNpTEGlqCzN30woPTExAY6pgFu%2Fzm%2FeuxghB0RW%2FMOUdqeJo9TBM9lKyvos0szDj2S1mEEX9I%2BnS4zZNrox0w6ynoJrwTAdSwkgpW0nmJpOWoSbSeivCbjc%2FXCp69lG36P95wrvMnKg8E7%2BoP8T7ToZZD15uPVswry%2FHQq8nua%2BHkpBAy0JM8QW5qjDikcRvKHOMMXYPxIzW%2FuTvXH59XwYF3rSuVg06W9I4cqRvC42D7%2FVqrc%2BzT9&X-Amz-Signature=70490fd08244faa4118b49b3850bae8281a41ac66f4dc21c702bb041650e73ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHA2OR3R%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEqDJgAO19XIG6MW4Kp7lA8R4D98GdoQY%2BXjmhyhh65%2FAiBexRWQHdqcinTyYbXTv8oblXpq7L2mATCfDs4JbmEJIyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMpk1ZEooVT9xcS4aJKtwDKMO%2BIqWPlH2Q5VpiKosEdpoVG0fWj%2F59WA3bzIYg0bG2GiMb7LdTw6R5eQEmz0hqvWh%2FVzZ2pWFAxfxyBswJtYVCbhdqPjwQr787AqAPca3DotmG%2F4mXoiBSB1TjeNhGYIXLAsDemk5BTyxp38AD5tpWHu%2FASSR6IonJAchzdvsiSxxp9LNXBxkZk6g9IndL8E6183iqnllShEqVENjpjXCO3qn%2BsrYmoJsfZtMppdjpu04YNbLjqAQDDpXRJixcnJ%2FS0fY4AzzR6ev9XK7Wn7kcn7vj%2F3uPXtWeoGxCP2jP7Zg2YtAx0NWeUn0jOYIhKIl5H2a4x6sG%2FD7%2B0xJniPkbah12E4VDPoMO4dga7hq6pOBQ61ZVMVkhc%2F%2FMKuPsS3ZKLVFCHpE9PmX0psi0J2d5e2JzQ%2FGu40URMucU%2F8oGH9cUQOqnDfuf50viIH%2FpCTQCOHgU1KkHbX87K9q%2FNM6JunYVYoCb6Qu9AB7JjTrFWU3YhWDuuBFGHjy9vrcOzFDhGtqSgXIk9sZYf2Zhi%2BOSxM8PPCSM29%2BMMecijzw5TFKGePIcAs4mlMslC%2BlpUVOX5iAlSpEgQ%2BuBUMYPD7AsVpuR6xcSfTPzFAEaE94WaD7CWgxGnhjo8hww4%2FTExAY6pgEDCqBXBL1Q6tCeiPpQ2PhRxeDK8TaOtz4zDclXR4PmJxbA%2Fm6c1az%2FUh0oUvcteRzQvHwEyi96st94qtayn6%2Fwfc%2FIbAnBhcV%2BNw8kvzlOsJan0AK1%2FcwG5VtG%2F%2B0clMXoWgFWn%2Fh3%2FUpDvGTGyWsNppwGy7IsY0mq643zVe3gjZMaw2ASpQO%2FIKn3MTKA7IiaBkqhms9msRVlHe5XQ92EdMjD%2FX1v&X-Amz-Signature=357dfc79f78458f6368df0ae7d61e86e5acf05b547debb7b1386851502f0cf26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OUEG3EE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDNgSdUu1%2FY7PSGnEHw2%2FTYPi0%2BLWxmwTZWxtniy0NFGQIhAJdCEBsr4ebHJVzA7S88bwRpC5NXuXHGSL74xcHExSHeKv8DCFAQABoMNjM3NDIzMTgzODA1IgymeUHYU7BaK4ztHpIq3APoYRlsoZ0hJiouKvu2Ohx2cENZLdx0FMMMsEo4kSqfSyEQw2CYR3jkE5Mx0bNGfQPa8aqCrQLiIFKqbKJml3xL2QUcoW9kswKFWAkdy8uwOIThSvKBOu5LBuvJS5MmI8q%2Bhednei6Fumool7ksVqOD8prs8xyAoksWFcviKr%2FtQuOLZl1xphKuBgl106LV2a3dKbHctbdR8mxeaBBV92YOYm3FO%2F7oJ3y542QsT8AxIR8JotHgW3tZf46P114moVziaUN5iEpU%2F2YQXcWFiuXDNuPl4wvT2E%2B7wZ85p3aJKtgW10Yj4Q0LupKYnLoUeMunqaW9LfGh7rq3sHtZGCCK%2BFxloY%2FaX3Zdxv%2BaqR04JMdfGPYlJFIeG8iDKqWPI%2BaeWEham4yd3r7Xn%2F0GWJv1QbkRIPd7p%2B%2BJLbAWroJV6tiZySuPEku3fW4Tl9S8mHc3GvObw5mQOIh4ptIdZlsGpkkRBcStzbcab%2BoEeJy5FgrToaNlgHlZr%2Fcowjd6Lsho40LB0KzH9dL7mZbsJTCz7R%2FBM0oJY6nEQglAI0hIcmcYIIISkhBTNOoT1Imp8wWdXxLFc%2Bhsf2OgTa9hmUDqbjVkZqaI4BA1RmA5gewaa%2B%2FdKcm9hs77TKuKkjDf9MTEBjqkATvRCpp5nGjm6l5beCMJLZGQGuvHcXH4xhcgw2jMZC%2BHNow%2BCDY2k35qqPl5Z9asgMSPNM8DRnBjHggWWGOkuzMvv%2FO2DIVCbXgK0qjJDMLr1Z5sYYd3%2FG%2FtG0UEw5MOjFHiNJHNxLOrKuKHZh8UWQlyrybj7Xqvd36H%2BoWBX3krQHRSeum8TJTCyDCZ10NvrDQA6eLRy7lwKBTlgueYER0v3PsW&X-Amz-Signature=f71f975e2a47eaee658d8507f07d721de0a3bcc868527b9a5cb9a33cf7b18dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHA2OR3R%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEqDJgAO19XIG6MW4Kp7lA8R4D98GdoQY%2BXjmhyhh65%2FAiBexRWQHdqcinTyYbXTv8oblXpq7L2mATCfDs4JbmEJIyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMpk1ZEooVT9xcS4aJKtwDKMO%2BIqWPlH2Q5VpiKosEdpoVG0fWj%2F59WA3bzIYg0bG2GiMb7LdTw6R5eQEmz0hqvWh%2FVzZ2pWFAxfxyBswJtYVCbhdqPjwQr787AqAPca3DotmG%2F4mXoiBSB1TjeNhGYIXLAsDemk5BTyxp38AD5tpWHu%2FASSR6IonJAchzdvsiSxxp9LNXBxkZk6g9IndL8E6183iqnllShEqVENjpjXCO3qn%2BsrYmoJsfZtMppdjpu04YNbLjqAQDDpXRJixcnJ%2FS0fY4AzzR6ev9XK7Wn7kcn7vj%2F3uPXtWeoGxCP2jP7Zg2YtAx0NWeUn0jOYIhKIl5H2a4x6sG%2FD7%2B0xJniPkbah12E4VDPoMO4dga7hq6pOBQ61ZVMVkhc%2F%2FMKuPsS3ZKLVFCHpE9PmX0psi0J2d5e2JzQ%2FGu40URMucU%2F8oGH9cUQOqnDfuf50viIH%2FpCTQCOHgU1KkHbX87K9q%2FNM6JunYVYoCb6Qu9AB7JjTrFWU3YhWDuuBFGHjy9vrcOzFDhGtqSgXIk9sZYf2Zhi%2BOSxM8PPCSM29%2BMMecijzw5TFKGePIcAs4mlMslC%2BlpUVOX5iAlSpEgQ%2BuBUMYPD7AsVpuR6xcSfTPzFAEaE94WaD7CWgxGnhjo8hww4%2FTExAY6pgEDCqBXBL1Q6tCeiPpQ2PhRxeDK8TaOtz4zDclXR4PmJxbA%2Fm6c1az%2FUh0oUvcteRzQvHwEyi96st94qtayn6%2Fwfc%2FIbAnBhcV%2BNw8kvzlOsJan0AK1%2FcwG5VtG%2F%2B0clMXoWgFWn%2Fh3%2FUpDvGTGyWsNppwGy7IsY0mq643zVe3gjZMaw2ASpQO%2FIKn3MTKA7IiaBkqhms9msRVlHe5XQ92EdMjD%2FX1v&X-Amz-Signature=94b9af548a330676d0a44e6b569dbabf36096fcab074255b145abe6e671350d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSRUXLZI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQC%2FDByqY1JZgdakYKh5fMUf2zT7B4J0ThnVYwCoL%2F0awwIgCqMFWaqgofNOwlummpLsbjy26L7BxE9CDTAgEWxzPEYq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDKwTw9tmCdGVz5sccircA%2FmqDFk3vOSkInNS2DykgAafhANzYwgsfAV5KB5A1tsNP9nmPUmEmUbwHcmdpf9nRP%2FqRv%2FqDwbMC%2Bdn0iwUqrNqDTaL%2FN8FUiS4leZQTmxPM3L55q5j0J7%2BdQK5LnVy6ZtNYUeng8AjmZuaSADv64980fGSHo1EkAWpLn9hI2F5E%2BJciCLjXRmxAHZ55hXCG7DvV3Gc%2B1WAcOijZCZJ1MA%2BmglIR0eUKnz3Nda3yslIJRkdDNeXmw4Q2eKBp7%2BZRVE2p2%2BJ%2BbqH2gWobc4a0ZF28u6ha6lOpidTFkM%2FTZh2V3lmSs%2FaRzVvZQhAcqY2vRplVqfee04zyS81x1%2FTMkE9vpLTi8coXo0J5E2F3kkfhVnqCiWEYX%2FeDFWapWAllfqbSnb4S1rVwCDd%2BtIa43MhRtB%2FHLC4OwDViejYLJpxTBIiLMnWLLA12TdbigaLTwccqwYQUzWY4PBZZXxZrA23UnYcZ1f0W0S%2FIk4fwU8TsOetEkCpv3v8NyX%2Blk9tlvrsIHCFL91%2Ft8VDnm9HLFTRFT6Y6BcjzSC38%2FwCFoy9X9v1%2BRLQ8e2mb9%2BegCxWBvbCcT5eiCxJ11mNH6p3GFuFjA0j1oOwP%2BDw7BpN5eEhvzoLziY6AV0fntO8MJX0xMQGOqUBeZ5qYHoNucmgS4erLegVvSQEe0x9hdOjrf4P9ovt35jstQwkJQ6r0jUF51wLZHqCo007lxic1yfX5qEbTCw%2FdY4scgkBt5e4yMHxP134kYV9%2Bkt51%2FCojpOs8jfFN%2BaNN4lyOHfg2FmKL6Lj5hZHRGQvlTKe%2F%2FsXFZnS%2FDpLuVvJWnuADpTTauaamjk6Ir4M4sJ%2Fl2oPweWYosOqrujeCHl%2FCul0&X-Amz-Signature=b76d296f033a61ccab0f4de300c36cff8dbe0e1c213d19b3922b6065dc5c9833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHA2OR3R%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEqDJgAO19XIG6MW4Kp7lA8R4D98GdoQY%2BXjmhyhh65%2FAiBexRWQHdqcinTyYbXTv8oblXpq7L2mATCfDs4JbmEJIyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMpk1ZEooVT9xcS4aJKtwDKMO%2BIqWPlH2Q5VpiKosEdpoVG0fWj%2F59WA3bzIYg0bG2GiMb7LdTw6R5eQEmz0hqvWh%2FVzZ2pWFAxfxyBswJtYVCbhdqPjwQr787AqAPca3DotmG%2F4mXoiBSB1TjeNhGYIXLAsDemk5BTyxp38AD5tpWHu%2FASSR6IonJAchzdvsiSxxp9LNXBxkZk6g9IndL8E6183iqnllShEqVENjpjXCO3qn%2BsrYmoJsfZtMppdjpu04YNbLjqAQDDpXRJixcnJ%2FS0fY4AzzR6ev9XK7Wn7kcn7vj%2F3uPXtWeoGxCP2jP7Zg2YtAx0NWeUn0jOYIhKIl5H2a4x6sG%2FD7%2B0xJniPkbah12E4VDPoMO4dga7hq6pOBQ61ZVMVkhc%2F%2FMKuPsS3ZKLVFCHpE9PmX0psi0J2d5e2JzQ%2FGu40URMucU%2F8oGH9cUQOqnDfuf50viIH%2FpCTQCOHgU1KkHbX87K9q%2FNM6JunYVYoCb6Qu9AB7JjTrFWU3YhWDuuBFGHjy9vrcOzFDhGtqSgXIk9sZYf2Zhi%2BOSxM8PPCSM29%2BMMecijzw5TFKGePIcAs4mlMslC%2BlpUVOX5iAlSpEgQ%2BuBUMYPD7AsVpuR6xcSfTPzFAEaE94WaD7CWgxGnhjo8hww4%2FTExAY6pgEDCqBXBL1Q6tCeiPpQ2PhRxeDK8TaOtz4zDclXR4PmJxbA%2Fm6c1az%2FUh0oUvcteRzQvHwEyi96st94qtayn6%2Fwfc%2FIbAnBhcV%2BNw8kvzlOsJan0AK1%2FcwG5VtG%2F%2B0clMXoWgFWn%2Fh3%2FUpDvGTGyWsNppwGy7IsY0mq643zVe3gjZMaw2ASpQO%2FIKn3MTKA7IiaBkqhms9msRVlHe5XQ92EdMjD%2FX1v&X-Amz-Signature=cec1aff2400fec6bb9043167a61ce40c87cb37e748b9acd7c90c4ad24ee5b704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD47QOJW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIFnZAaWA1Y4cIRZy6yUXxkLeLAdrsG0feYtlr9AudYuZAiEAoefAvUdLfj3lbY8RFf%2BYWvLNTll7CM5IFYRf1OSa20Mq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDFmOKSvxJjOmSP76tyrcA8nZLBbnEfGFwAxc5wS80BD%2FSfI7eWCDWayKpQAXshiOrr%2B5nMrWai9j6F%2BxlTeM1TLLPN5Lwm9zKKlCqSAFUv6%2FIt2FYrFfN4%2BYnu2RtW8vnQXHVKJd%2BWxIqcSpJAqvUUKnP%2Brmq7k4D3E%2FJ6YZ848hcgU75UX5Lhou5xJU9BYwNR6sVnO%2FyIxrig5VVwtbqZa8Lk5TZuBmrH%2BgFrlGi8jRpFfVkMbkpJQJU1taF28pfiIe9Ob9Qe4NmZ%2Btms1rexqqXY%2BS31wXV61Ym2v0bnIViV5QZj2o7puAy5edoPHYo7H1f4XkZRj3ncYN09BjyZuuKC39dVp3QmAPsyohQ2VjK7XpiXk6eEZPQ5Pvtt%2FjJHUqMeCbMeXVhag7qmU5xiIvQKw%2FcK6lWf7jYTJxlPTvHfjWarWTt4W9gIa9iCUslVqkn3cicwvmqZq06PrprY386pGzHh6mSy4gj1RZzV19DLQki4yDIR19CBLqTSJ%2FQJ5wnwrnwrJGoHktqkLh6dNzi%2BUQzusq85E72xVsUZ4m7UOEvz3zLCNHuvGeOdBBaukyc33ZwRY%2F%2Ft%2FjU46f0OIeeZ7ipcdcTi7gf2KCAFAtDuQRFuDr%2FRDnAdM2N4XEBX%2FynrSgkmBErp9fMJP0xMQGOqUBhp4enuJbK5y5edhmgzdfz8GrnUBAeaF0GC3xANkkciyyivR01WNf7bwzLVND8nRhn%2BrIfk31awnOBh7IMYDVOC4UpYxRFLoFc6WtglN%2B8upawhmJOQaNjdrLHpe4NLb%2B0vRUyz7Tj6NowXHDVrJkUBSc1aVsqwBBN%2FLSH2Tv5IWshT%2B65yWlqzqU962wqSPNHFwV9bScevrpuqfQZrHNbTW8lYs2&X-Amz-Signature=bf4798dc9e38315622f3e3aedf0b99794ea752003dddcd44d7cb7ea4a68a73c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHA2OR3R%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEqDJgAO19XIG6MW4Kp7lA8R4D98GdoQY%2BXjmhyhh65%2FAiBexRWQHdqcinTyYbXTv8oblXpq7L2mATCfDs4JbmEJIyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMpk1ZEooVT9xcS4aJKtwDKMO%2BIqWPlH2Q5VpiKosEdpoVG0fWj%2F59WA3bzIYg0bG2GiMb7LdTw6R5eQEmz0hqvWh%2FVzZ2pWFAxfxyBswJtYVCbhdqPjwQr787AqAPca3DotmG%2F4mXoiBSB1TjeNhGYIXLAsDemk5BTyxp38AD5tpWHu%2FASSR6IonJAchzdvsiSxxp9LNXBxkZk6g9IndL8E6183iqnllShEqVENjpjXCO3qn%2BsrYmoJsfZtMppdjpu04YNbLjqAQDDpXRJixcnJ%2FS0fY4AzzR6ev9XK7Wn7kcn7vj%2F3uPXtWeoGxCP2jP7Zg2YtAx0NWeUn0jOYIhKIl5H2a4x6sG%2FD7%2B0xJniPkbah12E4VDPoMO4dga7hq6pOBQ61ZVMVkhc%2F%2FMKuPsS3ZKLVFCHpE9PmX0psi0J2d5e2JzQ%2FGu40URMucU%2F8oGH9cUQOqnDfuf50viIH%2FpCTQCOHgU1KkHbX87K9q%2FNM6JunYVYoCb6Qu9AB7JjTrFWU3YhWDuuBFGHjy9vrcOzFDhGtqSgXIk9sZYf2Zhi%2BOSxM8PPCSM29%2BMMecijzw5TFKGePIcAs4mlMslC%2BlpUVOX5iAlSpEgQ%2BuBUMYPD7AsVpuR6xcSfTPzFAEaE94WaD7CWgxGnhjo8hww4%2FTExAY6pgEDCqBXBL1Q6tCeiPpQ2PhRxeDK8TaOtz4zDclXR4PmJxbA%2Fm6c1az%2FUh0oUvcteRzQvHwEyi96st94qtayn6%2Fwfc%2FIbAnBhcV%2BNw8kvzlOsJan0AK1%2FcwG5VtG%2F%2B0clMXoWgFWn%2Fh3%2FUpDvGTGyWsNppwGy7IsY0mq643zVe3gjZMaw2ASpQO%2FIKn3MTKA7IiaBkqhms9msRVlHe5XQ92EdMjD%2FX1v&X-Amz-Signature=cdc1dab94cf61c1f3f57c8078e9eaab6db6318b3c72245f543435bbb0f5b6f9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHLYBKT2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDtBMkk67pmMyBH8bapUrlB9AJKQcP8ZQZNePNON6kbZAIhAJGOBGXQpUjf%2BUqd3sm46iN7jNPmpZk8awHGq9me3WJTKv8DCFMQABoMNjM3NDIzMTgzODA1IgwRSYV7uy8VNfbf0tUq3ANNtM0MAEFqwUYm%2BjQyCCiExl%2FNEPIgxJOjrhT0NloQTDZH8q4mGpW0Nu%2FLIDGxFPInYnZral5dEcJrPVKiOPBLOe3cFmIH%2BVAtMfDWEuAuIG6cuuZpYljMl%2F81ROqDyRgCycC1s2%2BAXLjLhPpFhC06GjDjDT99JNj9o6uc0nH8ed%2F7OtQAT%2Fs8vscLgNButlU7qz68dsPZ%2BOEgU%2BJnkUDly47g9bMss7ZMGAphMGvw5MfUiGrNZycwlj3D1ylJiSkCjnBTmKNCQDqOiJktornTARsFrbpZnc63%2BWw%2FzBaXVSHXLfa%2BwbT5pTEOpWBx98Cnbu12cisvxyuy39bDwZ%2B5YBrm9hOyKBKnA1iRRMkAVc2K5gzmQN7Sr2V6e86DHk1ikxSPAZpF61L7LcVA%2FU%2Bvsepdk5BWfbDETiOvD2mavX3FyoTOPvg5Es9SoJqNejYmmRJ3mI6x%2B%2FwN3wD4UQ5LSvqShN6ZWD4zFhY03bxbK8Wk0lWS1vFeAdFJHE4lzlJvYVqeYZcpR5civm41HcAHqmYhD3O0LFp6U%2BUOD6LIdAmvMk75578hDbabMZwDo9%2FYp%2Be%2Fe29%2BGGswncqLlcDNXo5paLDD%2FB3FJrilptfamYmeE8kbIxU9GRB%2FQTCK1sXEBjqkAZChHpjREefHee4EhwFVtmMjyP5c%2FWKmIeqZkohtMrtmSojesC42YW2jrMpvQmTgaFs51zRxRTIYGbirTFSY%2FrEqdAyG3gGByxEiWQeh9y%2FEx33geEsAZl%2Fb49JgpTVG1AY%2ByxgvsoiDcmfE3YLKjeJPT5qLIx0PqtfNATFeujB4qK2XYBDBtwIhHkETHYYNOTtjBGvx6ICxjeRv6e9DO0iu%2FAqx&X-Amz-Signature=9263de72226372f90d31affebcd9f2e1fb5b11105ea249e674fb905cdc80bb6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKA7Q3JO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDnkqFs2X0Y7gw32Jpfo4g9ScMnW09TLfWvGpidmkTZOAiBPuus80qMDdcfqpqbAIPEdE4gKh1BaVaAKztZ24R05oSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMoed6lgfwfX1A6rGkKtwDBovD%2FPi0%2Boqeah5cfKX1MzXSLWsCmd2ozXhphDtPeWtAx8pkhrxDiXLdNcS6QlEWbRr4URS7AwEFgvQPyhu3NRq3fbuV2LQQE%2B0YZPiWekXT6MeRYZ28fWugnLcdG7RtrYGvIhXlbzMz5kUmUwTZa499TnNr8U6Oed%2BvE9G8vfKgGzg%2ByGSuEVds2h9sI5LpYs3o9JxMWMBCPnpmPArgYv2ogy5FiiDVTMPS1nyA4QnUpvomm%2F5VNf0KIqF7pOAOkSQLr9vMIumDLa9b58Mf90gbAhnc3unrXVHTHgdOsInv42BrJKxtKAwq0vfIuSvb98swqdLykG5%2FyCdbijimyCAGhJzH0H3hFDPoHZmMSFgIq14%2FsGnj0guMz2uGb%2B3RJXkwiYuRg1WOX1ElFLP9e5%2FFq3sIykC6SwF4%2FWY%2FvsSskJvymzKKkyb3I4DlzGdeZbxcW%2Bw5qQqcOYLnQCwYtOkhlPk5dTa3wn4Qi5xSgl3GvLLCjY7GJZP6Uex8G%2BBFXd0kT%2BE7yraIl3V5DGzeuNLX5rlGTnPZRh8FtmkUkmTlbdJfjNLXfU1pFiN3Fi9a2q5KtA5z1Fnh9mDQpeqEedeS%2Bij%2BRC19jvbhdN84hu4h6KNiRvM%2F3emPQGQwl%2FTExAY6pgGBxrTCnS%2F37Dp7%2By6en8QxTl34GVBKpN5eQlb5VfeojEvXapZnEXkxVp6ddrvqDGENth4M03wPcMfZ7fTN9M3SXs1oJLFHkgRcJiadHpeE4OphWNuyfbiECsITrkXRpZic8oiu5UIFGVQL3YEFVscqYRlRL%2BC1Ek4DTygjW5c5qac9DEsr4X60v3quGQXqFvGrODT4L20FW5c4PE%2F46%2BU5nbmqgMj2&X-Amz-Signature=b21de9238ce6b71233d23be258f378de03f1b229064971169c27f52911398393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A5Q5YFV%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDcvzd2hQjAMjTrjjnnsm9YE70pqlbWsjsjyx6205B7ngIgUKNikw%2F8qY4T1237MIdaVNOpj9gMDGufM0wx%2FSlBu1Iq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDJuQ61WKG%2BLQ1T9TcSrcA33kp9NMwUYwtNQtBhdHqI48EIMEwm%2FrV8sRLHYSUr9C3nl0TON0PHo%2FnAbPt0VjWnwwRi15WcndxB%2FRkBB3cfbnGf%2FuWnRSTcxftOIEMHhl05p1%2BFfDocmr4jUNs%2BYzoStXE9L%2BLVtt3TIQzL2orO7FYKIy%2BSoTZlzGV1bDRf0tigsXTjmcZqJSd2Svr6fAam0l89LhDSL2lYp8rBvbx1Xhp91%2Ff%2BORPnwS1Hup4wC1aBUMEhVjPwkkqEP%2BXltd9fUrHL9yVy3tsNn1SzFX2EzfoIQEw%2FSKd99Eyv9E%2FQU1EYZZnnhAExmVORfOlM8cxEuwuEQXZnTEwSXiCOmdc85eC8zCdN2KOvIL5zNIKaKy%2F57tUguqzfJJNdF7ucesOOluTbUvUCK7LZdRpwvvO1AHiRG70uMP%2F%2BDS63GrvcVMJ21fvgjAZtCOalxv8E1KMVqUtm2RMBPmSnmsk%2B2jh8e5e3A0dl4qpCRQtq8C8JH33VkOzcFdaibTIIC%2BIGmWCm9U0pKJQni%2Frvvl9Iuk1gttQGPRHgas%2F5shgd2nHRgBM6u6jkwH1PX5KVnt6aueqheDY1sqi8J%2FiGuvDOc4rHZnRhkOKkfpF1QkAP2rAR9KVyNrmcCPXZZNPCdrMO3zxMQGOqUBJiS6bNg3dYGZdaaGqEzz4QYz0xnrt6EHnWsuBRF6mJ3FfWhQI6VyUQOXtGITrBBOsJKynvZt4jvGsXUSOp3ygB79aQdmw52TZnSsqlPvAqPzNWa5m9UdUO28Wo8skDPa5Gdnj%2FTnrpDB1Mo%2FjFaN0SvwEVdqIM%2Fojp9CQ51wHC2cB2FsFyLm3s%2FPrbC8gSLiaum%2BeGdva6FEIHkZweeEfOmSQWka&X-Amz-Signature=861ef572c3217af23f27ccb94994cb466ab9fade8118114ae82f0c2beb3fef8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW3RQVUK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIH61Ff4VIaE%2Fd7o0JMyTJ5VMKwD42IXY%2BEmck8M1FFeIAiEAtQU8JoegTckwNp%2B17v1d5cNYNCgHKeNyHQ2NfHC0360q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMq8hLCotLtGEVeTiSrcA9wCStcKLBQegCNgD%2BdWZSd87qNn2FHFh7wu4US41w3%2FRJ9tD5HTlAKUGCXM45nCMNSIObeTFu1n33vwT2YiKvo0dtjRrAOS9%2BUNj68myZCfdoRek8A%2FS5fa2DBR67HHjKN2CnxNYgMEPqvXKuID%2Fwg2koyP%2BeclgYm5bOVbBMKLjcuNi3%2Bj3kqWudp3s7%2Fhp7COEpCxjHJ7ycj%2FvG2ZC2Z7Y9wDoVRzLkKV9oP7SXEGGRAbFTGiU66oqotMPrnQfCI3M0PqEml2W8UzkEbARvEpCiask8fp4fL%2F4hgvljoHanor7IXvjoFld0p4MY7g%2BMBIgKdrgb670YBrI0xu1n%2BSA5DLiWcKrLAG6Hzm53odpzkRUBpXm40%2F0Welt0rQkpCp9CgD9Q0%2FXuZiY50bv9%2BbSHtv0r2PremSPBMFkN%2FYyaltOJJtb%2BTHU5%2Fj4hmHecJU67anIKvsGUqzYiZie2xKdZH1xyD9t05jDrjY7IwqGDD2xDYE2SkXzvXuyAs0mnTEyiQW3RUbrDPR%2BotC%2Ff9yq5jhzH87laugUC%2BopfHU2pCf7rIfyl62B%2BikTnJo1fl%2BvclbM%2FW0oe9GNy8AX3zSreAThRz%2FNRtc%2BV0EpG49MRn33CDHdmnUSq1HMOXzxMQGOqUBJeNHcwLFeTXmOcv0cp7AkCAfjdRw0zlWErpaqmK0CQ2%2FqkwniaqgFsDTUexVCv1hnRB%2F3n%2FlfVM3jhDpzws5TNHdgNxPdLsM5oFCzOBZI6SM%2FxQlVvvUpTDifKaUfZ0RfE5NvU1MjhxlRgWedgbg2D7liHkL4abN4EiYML9f5afOdGrS9R14vL4drSewwEk3B6t33%2FRAU9JC1zcoU6JVvSJQyY1q&X-Amz-Signature=d4f96908d68feaa4ded657c7909997d34f29e45bf415775edb830f636e2f5730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFQC2MSV%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIBE914y%2BkHnNB%2BU9zFPT2Uh2I95%2BLG5gVh8NUKvWkocEAiEA%2FjAZyMBT7PUsjG2Q23OfH4vKN8ogO0HZHfAHB5ZzdHMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDI90pdTl2Rf8h0TsIircA%2FqzGZfehqlo5g2rsD0%2FgXh49n6rTt41CPXKVgYQavwRoq3cJWgoBrFAvC9ZHT51H1SsR42M4Fhy9RYoZ6WrIUz7ysAAWz1pzHYcjnS5POqKr2J4CYFgtwydD1zt1IOp63a8Z4aalT6qKAQ5uLVZpd8DSAPK%2BVE3ICdhLxj1m6TYphj7dDN%2FAEQBMEGwW%2FSgVqkHme0SJrmapJvu1hJSzX1Fe6tZ8TeYAFIx9o1UfN8tnFAi%2FxI1o1B49tG6W1YgHuMyVJlNE7qE4GedNDIQSie7UV7QYJyCvtAFZuEDgb5VC8c1%2FBZ87DOCM4fTkK4U4thZw9N9%2ByCRQAtv8UawkrYze%2BWwK3mSqG78h6c5SYSA0NvWfNjQzoRgNK4xQ%2BkGXJ%2B%2F%2F2kMN4sDgUiOozsnqtgZ6LIWF3bwL14sYLwn6FZiLe9dNU4ZjTAhkNWNGFbc54rRVJr5AKHTR8VRP8Ovp5LIYVWqFDAntUWlhSeLXoB0jKY4NE7kBSZ91AZCpx8386t7UxopxGoTXh8U61%2BLC7Gypnev056isQYElLfdsqRLFiyv%2B4ltfpoo6GO2y4WZfLLq2Ws4z7DJd3IdrWKWBdAa9JWap7LZN3zRZ2LxLOYUFZOa5Y3lyQ8dKwttMIH0xMQGOqUBGybySzJkG0IO%2FLy1wShfA7e0JreLsXycBg0UEDQEVVzyfDRY5ktkOFmKlY24P99nSeLTi6wAd3C1Sfs%2FxjaXxbZlc8S6TKT5D7P11XcuoWdxgKpRiGxzeB%2FKcEymkRZzYXh8ifpcpN2Av6167rguT%2B8Q6jzA6YZ2vHCunxb53ge2Ndxwo40r4YQ0BWZJzBLwS1yE7LqV9kwF6Y%2F%2B1OQ%2Flz4YK%2FVu&X-Amz-Signature=7c9bd146a559ec69028f191b0ae84c881c1f68227a2bfbfa4095f110eda93b0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHA2OR3R%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEqDJgAO19XIG6MW4Kp7lA8R4D98GdoQY%2BXjmhyhh65%2FAiBexRWQHdqcinTyYbXTv8oblXpq7L2mATCfDs4JbmEJIyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMpk1ZEooVT9xcS4aJKtwDKMO%2BIqWPlH2Q5VpiKosEdpoVG0fWj%2F59WA3bzIYg0bG2GiMb7LdTw6R5eQEmz0hqvWh%2FVzZ2pWFAxfxyBswJtYVCbhdqPjwQr787AqAPca3DotmG%2F4mXoiBSB1TjeNhGYIXLAsDemk5BTyxp38AD5tpWHu%2FASSR6IonJAchzdvsiSxxp9LNXBxkZk6g9IndL8E6183iqnllShEqVENjpjXCO3qn%2BsrYmoJsfZtMppdjpu04YNbLjqAQDDpXRJixcnJ%2FS0fY4AzzR6ev9XK7Wn7kcn7vj%2F3uPXtWeoGxCP2jP7Zg2YtAx0NWeUn0jOYIhKIl5H2a4x6sG%2FD7%2B0xJniPkbah12E4VDPoMO4dga7hq6pOBQ61ZVMVkhc%2F%2FMKuPsS3ZKLVFCHpE9PmX0psi0J2d5e2JzQ%2FGu40URMucU%2F8oGH9cUQOqnDfuf50viIH%2FpCTQCOHgU1KkHbX87K9q%2FNM6JunYVYoCb6Qu9AB7JjTrFWU3YhWDuuBFGHjy9vrcOzFDhGtqSgXIk9sZYf2Zhi%2BOSxM8PPCSM29%2BMMecijzw5TFKGePIcAs4mlMslC%2BlpUVOX5iAlSpEgQ%2BuBUMYPD7AsVpuR6xcSfTPzFAEaE94WaD7CWgxGnhjo8hww4%2FTExAY6pgEDCqBXBL1Q6tCeiPpQ2PhRxeDK8TaOtz4zDclXR4PmJxbA%2Fm6c1az%2FUh0oUvcteRzQvHwEyi96st94qtayn6%2Fwfc%2FIbAnBhcV%2BNw8kvzlOsJan0AK1%2FcwG5VtG%2F%2B0clMXoWgFWn%2Fh3%2FUpDvGTGyWsNppwGy7IsY0mq643zVe3gjZMaw2ASpQO%2FIKn3MTKA7IiaBkqhms9msRVlHe5XQ92EdMjD%2FX1v&X-Amz-Signature=a16fb79defa3dbefca773e36166ca88a91e81a2f30ae478431e9781549aa8429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHA2OR3R%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEqDJgAO19XIG6MW4Kp7lA8R4D98GdoQY%2BXjmhyhh65%2FAiBexRWQHdqcinTyYbXTv8oblXpq7L2mATCfDs4JbmEJIyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMpk1ZEooVT9xcS4aJKtwDKMO%2BIqWPlH2Q5VpiKosEdpoVG0fWj%2F59WA3bzIYg0bG2GiMb7LdTw6R5eQEmz0hqvWh%2FVzZ2pWFAxfxyBswJtYVCbhdqPjwQr787AqAPca3DotmG%2F4mXoiBSB1TjeNhGYIXLAsDemk5BTyxp38AD5tpWHu%2FASSR6IonJAchzdvsiSxxp9LNXBxkZk6g9IndL8E6183iqnllShEqVENjpjXCO3qn%2BsrYmoJsfZtMppdjpu04YNbLjqAQDDpXRJixcnJ%2FS0fY4AzzR6ev9XK7Wn7kcn7vj%2F3uPXtWeoGxCP2jP7Zg2YtAx0NWeUn0jOYIhKIl5H2a4x6sG%2FD7%2B0xJniPkbah12E4VDPoMO4dga7hq6pOBQ61ZVMVkhc%2F%2FMKuPsS3ZKLVFCHpE9PmX0psi0J2d5e2JzQ%2FGu40URMucU%2F8oGH9cUQOqnDfuf50viIH%2FpCTQCOHgU1KkHbX87K9q%2FNM6JunYVYoCb6Qu9AB7JjTrFWU3YhWDuuBFGHjy9vrcOzFDhGtqSgXIk9sZYf2Zhi%2BOSxM8PPCSM29%2BMMecijzw5TFKGePIcAs4mlMslC%2BlpUVOX5iAlSpEgQ%2BuBUMYPD7AsVpuR6xcSfTPzFAEaE94WaD7CWgxGnhjo8hww4%2FTExAY6pgEDCqBXBL1Q6tCeiPpQ2PhRxeDK8TaOtz4zDclXR4PmJxbA%2Fm6c1az%2FUh0oUvcteRzQvHwEyi96st94qtayn6%2Fwfc%2FIbAnBhcV%2BNw8kvzlOsJan0AK1%2FcwG5VtG%2F%2B0clMXoWgFWn%2Fh3%2FUpDvGTGyWsNppwGy7IsY0mq643zVe3gjZMaw2ASpQO%2FIKn3MTKA7IiaBkqhms9msRVlHe5XQ92EdMjD%2FX1v&X-Amz-Signature=2396fce16c519aada6d5656d1ab89c546296d76105f27c0aaa29d88042188e84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTUAFJHN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID1MK4n7wAo1OV5%2Fw3NQ%2BBzR7%2Bym%2BJbSJt%2FmISmLe93eAiEA%2BTGL6KIJLygP%2BEil7wy8bs%2BNNyd2iQ9zf3mUqcP8Idkq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDCY6Oss3B6WfxOh7OyrcAxAjsqqfM571z9jGh%2BuzA9Uy7ZRWHNflmVD7kI3cEdUDWJDzDMWA%2BMOrDhuYWoTyrUWSJw1t6PY1wCfZfMKre8EHeLLHOgmSIO2x9Z5QrJGE5xDd7tfCry%2Bog%2F9AH7AX%2FSk0F9rdJh%2BmCFDh8IlTFu%2Bu6sEWda7JAfCacOjvKbJ9KfE8jGZvZTUO1juQSpdM4t%2BQcWn04ri9IIEGkJo6jUESXMNt2UWBYs%2BBZk9LZ6vzM5pLlaoc4UiTlTIrDtKusLdkXuOpOjzzDjLgaQnqatanTbJjWFx1m0pcBxPEBIVShGVPGrfuM3CbZp8O3qibb5DRD14dxbS1AEwXmOaK8bSsntyb4%2F4TnHH4A7RtdxF9V%2BtSH6R86YCH5TGX85AEBJ%2FKhWma6wjU2bYfcuCVzM4uS%2BGRUjZQsslD1l1COc9WGI4EvFYofU%2FnhZlHPMTzMucVrfOOiI76aoW%2BEaU1zX%2BJgz6%2B2dyzrp2i12BkpJ%2FObysEXsAmH5QgYVWNVEKgH3RCiZITBpL5PSAbrgy85EsvcK7RG27D4enNvwpFcd5SEA8Knk7QgDtqnGtvQzc4lNnybikBVtjT2O2vsB8yvTnsjYfaMj9w0v0EOwwPhsQgAak7xCFx5AMvvFRKMKH0xMQGOqUBc8siZMxyS5yil1mNa43tIvESxgxQkpkX1ciJ1ZlcdDeq57VufHLXK5fsaEs80AR3AF8W%2Byq%2F1cDVQDaqPUOPgq8eAmGj0sxhkBGe4a6XK6VaFg7R7VV1ZvPLj6AUXZEjXo6R6xZM6p5CwnX4YpxvBai1TAKp22%2FRlrd9W1a3jrFjtld09vS8IkpI2d9%2Fl5TJifC8xQ4i2BdZxJDmVKvTk8qqgGvp&X-Amz-Signature=dc179f0229a151688d2afca00bac9b0bdd1d5b7712db7464e7d7b600f2f3d1dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTUAFJHN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID1MK4n7wAo1OV5%2Fw3NQ%2BBzR7%2Bym%2BJbSJt%2FmISmLe93eAiEA%2BTGL6KIJLygP%2BEil7wy8bs%2BNNyd2iQ9zf3mUqcP8Idkq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDCY6Oss3B6WfxOh7OyrcAxAjsqqfM571z9jGh%2BuzA9Uy7ZRWHNflmVD7kI3cEdUDWJDzDMWA%2BMOrDhuYWoTyrUWSJw1t6PY1wCfZfMKre8EHeLLHOgmSIO2x9Z5QrJGE5xDd7tfCry%2Bog%2F9AH7AX%2FSk0F9rdJh%2BmCFDh8IlTFu%2Bu6sEWda7JAfCacOjvKbJ9KfE8jGZvZTUO1juQSpdM4t%2BQcWn04ri9IIEGkJo6jUESXMNt2UWBYs%2BBZk9LZ6vzM5pLlaoc4UiTlTIrDtKusLdkXuOpOjzzDjLgaQnqatanTbJjWFx1m0pcBxPEBIVShGVPGrfuM3CbZp8O3qibb5DRD14dxbS1AEwXmOaK8bSsntyb4%2F4TnHH4A7RtdxF9V%2BtSH6R86YCH5TGX85AEBJ%2FKhWma6wjU2bYfcuCVzM4uS%2BGRUjZQsslD1l1COc9WGI4EvFYofU%2FnhZlHPMTzMucVrfOOiI76aoW%2BEaU1zX%2BJgz6%2B2dyzrp2i12BkpJ%2FObysEXsAmH5QgYVWNVEKgH3RCiZITBpL5PSAbrgy85EsvcK7RG27D4enNvwpFcd5SEA8Knk7QgDtqnGtvQzc4lNnybikBVtjT2O2vsB8yvTnsjYfaMj9w0v0EOwwPhsQgAak7xCFx5AMvvFRKMKH0xMQGOqUBc8siZMxyS5yil1mNa43tIvESxgxQkpkX1ciJ1ZlcdDeq57VufHLXK5fsaEs80AR3AF8W%2Byq%2F1cDVQDaqPUOPgq8eAmGj0sxhkBGe4a6XK6VaFg7R7VV1ZvPLj6AUXZEjXo6R6xZM6p5CwnX4YpxvBai1TAKp22%2FRlrd9W1a3jrFjtld09vS8IkpI2d9%2Fl5TJifC8xQ4i2BdZxJDmVKvTk8qqgGvp&X-Amz-Signature=e631cba3d44b408341fef069345da7e57569a5f4c24a4628b279b268bfa75ace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTUAFJHN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID1MK4n7wAo1OV5%2Fw3NQ%2BBzR7%2Bym%2BJbSJt%2FmISmLe93eAiEA%2BTGL6KIJLygP%2BEil7wy8bs%2BNNyd2iQ9zf3mUqcP8Idkq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDCY6Oss3B6WfxOh7OyrcAxAjsqqfM571z9jGh%2BuzA9Uy7ZRWHNflmVD7kI3cEdUDWJDzDMWA%2BMOrDhuYWoTyrUWSJw1t6PY1wCfZfMKre8EHeLLHOgmSIO2x9Z5QrJGE5xDd7tfCry%2Bog%2F9AH7AX%2FSk0F9rdJh%2BmCFDh8IlTFu%2Bu6sEWda7JAfCacOjvKbJ9KfE8jGZvZTUO1juQSpdM4t%2BQcWn04ri9IIEGkJo6jUESXMNt2UWBYs%2BBZk9LZ6vzM5pLlaoc4UiTlTIrDtKusLdkXuOpOjzzDjLgaQnqatanTbJjWFx1m0pcBxPEBIVShGVPGrfuM3CbZp8O3qibb5DRD14dxbS1AEwXmOaK8bSsntyb4%2F4TnHH4A7RtdxF9V%2BtSH6R86YCH5TGX85AEBJ%2FKhWma6wjU2bYfcuCVzM4uS%2BGRUjZQsslD1l1COc9WGI4EvFYofU%2FnhZlHPMTzMucVrfOOiI76aoW%2BEaU1zX%2BJgz6%2B2dyzrp2i12BkpJ%2FObysEXsAmH5QgYVWNVEKgH3RCiZITBpL5PSAbrgy85EsvcK7RG27D4enNvwpFcd5SEA8Knk7QgDtqnGtvQzc4lNnybikBVtjT2O2vsB8yvTnsjYfaMj9w0v0EOwwPhsQgAak7xCFx5AMvvFRKMKH0xMQGOqUBc8siZMxyS5yil1mNa43tIvESxgxQkpkX1ciJ1ZlcdDeq57VufHLXK5fsaEs80AR3AF8W%2Byq%2F1cDVQDaqPUOPgq8eAmGj0sxhkBGe4a6XK6VaFg7R7VV1ZvPLj6AUXZEjXo6R6xZM6p5CwnX4YpxvBai1TAKp22%2FRlrd9W1a3jrFjtld09vS8IkpI2d9%2Fl5TJifC8xQ4i2BdZxJDmVKvTk8qqgGvp&X-Amz-Signature=92f264802e73ffea2ce34534fd484c69587cb1508a7a8ff3d68e700037a32d84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTUAFJHN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID1MK4n7wAo1OV5%2Fw3NQ%2BBzR7%2Bym%2BJbSJt%2FmISmLe93eAiEA%2BTGL6KIJLygP%2BEil7wy8bs%2BNNyd2iQ9zf3mUqcP8Idkq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDCY6Oss3B6WfxOh7OyrcAxAjsqqfM571z9jGh%2BuzA9Uy7ZRWHNflmVD7kI3cEdUDWJDzDMWA%2BMOrDhuYWoTyrUWSJw1t6PY1wCfZfMKre8EHeLLHOgmSIO2x9Z5QrJGE5xDd7tfCry%2Bog%2F9AH7AX%2FSk0F9rdJh%2BmCFDh8IlTFu%2Bu6sEWda7JAfCacOjvKbJ9KfE8jGZvZTUO1juQSpdM4t%2BQcWn04ri9IIEGkJo6jUESXMNt2UWBYs%2BBZk9LZ6vzM5pLlaoc4UiTlTIrDtKusLdkXuOpOjzzDjLgaQnqatanTbJjWFx1m0pcBxPEBIVShGVPGrfuM3CbZp8O3qibb5DRD14dxbS1AEwXmOaK8bSsntyb4%2F4TnHH4A7RtdxF9V%2BtSH6R86YCH5TGX85AEBJ%2FKhWma6wjU2bYfcuCVzM4uS%2BGRUjZQsslD1l1COc9WGI4EvFYofU%2FnhZlHPMTzMucVrfOOiI76aoW%2BEaU1zX%2BJgz6%2B2dyzrp2i12BkpJ%2FObysEXsAmH5QgYVWNVEKgH3RCiZITBpL5PSAbrgy85EsvcK7RG27D4enNvwpFcd5SEA8Knk7QgDtqnGtvQzc4lNnybikBVtjT2O2vsB8yvTnsjYfaMj9w0v0EOwwPhsQgAak7xCFx5AMvvFRKMKH0xMQGOqUBc8siZMxyS5yil1mNa43tIvESxgxQkpkX1ciJ1ZlcdDeq57VufHLXK5fsaEs80AR3AF8W%2Byq%2F1cDVQDaqPUOPgq8eAmGj0sxhkBGe4a6XK6VaFg7R7VV1ZvPLj6AUXZEjXo6R6xZM6p5CwnX4YpxvBai1TAKp22%2FRlrd9W1a3jrFjtld09vS8IkpI2d9%2Fl5TJifC8xQ4i2BdZxJDmVKvTk8qqgGvp&X-Amz-Signature=6a710c7adfa5c4ded8e0f561c9b48b734469b9e7984bd4d7d67b9440190e00d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTUAFJHN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID1MK4n7wAo1OV5%2Fw3NQ%2BBzR7%2Bym%2BJbSJt%2FmISmLe93eAiEA%2BTGL6KIJLygP%2BEil7wy8bs%2BNNyd2iQ9zf3mUqcP8Idkq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDCY6Oss3B6WfxOh7OyrcAxAjsqqfM571z9jGh%2BuzA9Uy7ZRWHNflmVD7kI3cEdUDWJDzDMWA%2BMOrDhuYWoTyrUWSJw1t6PY1wCfZfMKre8EHeLLHOgmSIO2x9Z5QrJGE5xDd7tfCry%2Bog%2F9AH7AX%2FSk0F9rdJh%2BmCFDh8IlTFu%2Bu6sEWda7JAfCacOjvKbJ9KfE8jGZvZTUO1juQSpdM4t%2BQcWn04ri9IIEGkJo6jUESXMNt2UWBYs%2BBZk9LZ6vzM5pLlaoc4UiTlTIrDtKusLdkXuOpOjzzDjLgaQnqatanTbJjWFx1m0pcBxPEBIVShGVPGrfuM3CbZp8O3qibb5DRD14dxbS1AEwXmOaK8bSsntyb4%2F4TnHH4A7RtdxF9V%2BtSH6R86YCH5TGX85AEBJ%2FKhWma6wjU2bYfcuCVzM4uS%2BGRUjZQsslD1l1COc9WGI4EvFYofU%2FnhZlHPMTzMucVrfOOiI76aoW%2BEaU1zX%2BJgz6%2B2dyzrp2i12BkpJ%2FObysEXsAmH5QgYVWNVEKgH3RCiZITBpL5PSAbrgy85EsvcK7RG27D4enNvwpFcd5SEA8Knk7QgDtqnGtvQzc4lNnybikBVtjT2O2vsB8yvTnsjYfaMj9w0v0EOwwPhsQgAak7xCFx5AMvvFRKMKH0xMQGOqUBc8siZMxyS5yil1mNa43tIvESxgxQkpkX1ciJ1ZlcdDeq57VufHLXK5fsaEs80AR3AF8W%2Byq%2F1cDVQDaqPUOPgq8eAmGj0sxhkBGe4a6XK6VaFg7R7VV1ZvPLj6AUXZEjXo6R6xZM6p5CwnX4YpxvBai1TAKp22%2FRlrd9W1a3jrFjtld09vS8IkpI2d9%2Fl5TJifC8xQ4i2BdZxJDmVKvTk8qqgGvp&X-Amz-Signature=a794b68ece0041b746f148f58fa242f0fa6c02d8c1e4c9e36fdaa64244c00566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTUAFJHN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID1MK4n7wAo1OV5%2Fw3NQ%2BBzR7%2Bym%2BJbSJt%2FmISmLe93eAiEA%2BTGL6KIJLygP%2BEil7wy8bs%2BNNyd2iQ9zf3mUqcP8Idkq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDCY6Oss3B6WfxOh7OyrcAxAjsqqfM571z9jGh%2BuzA9Uy7ZRWHNflmVD7kI3cEdUDWJDzDMWA%2BMOrDhuYWoTyrUWSJw1t6PY1wCfZfMKre8EHeLLHOgmSIO2x9Z5QrJGE5xDd7tfCry%2Bog%2F9AH7AX%2FSk0F9rdJh%2BmCFDh8IlTFu%2Bu6sEWda7JAfCacOjvKbJ9KfE8jGZvZTUO1juQSpdM4t%2BQcWn04ri9IIEGkJo6jUESXMNt2UWBYs%2BBZk9LZ6vzM5pLlaoc4UiTlTIrDtKusLdkXuOpOjzzDjLgaQnqatanTbJjWFx1m0pcBxPEBIVShGVPGrfuM3CbZp8O3qibb5DRD14dxbS1AEwXmOaK8bSsntyb4%2F4TnHH4A7RtdxF9V%2BtSH6R86YCH5TGX85AEBJ%2FKhWma6wjU2bYfcuCVzM4uS%2BGRUjZQsslD1l1COc9WGI4EvFYofU%2FnhZlHPMTzMucVrfOOiI76aoW%2BEaU1zX%2BJgz6%2B2dyzrp2i12BkpJ%2FObysEXsAmH5QgYVWNVEKgH3RCiZITBpL5PSAbrgy85EsvcK7RG27D4enNvwpFcd5SEA8Knk7QgDtqnGtvQzc4lNnybikBVtjT2O2vsB8yvTnsjYfaMj9w0v0EOwwPhsQgAak7xCFx5AMvvFRKMKH0xMQGOqUBc8siZMxyS5yil1mNa43tIvESxgxQkpkX1ciJ1ZlcdDeq57VufHLXK5fsaEs80AR3AF8W%2Byq%2F1cDVQDaqPUOPgq8eAmGj0sxhkBGe4a6XK6VaFg7R7VV1ZvPLj6AUXZEjXo6R6xZM6p5CwnX4YpxvBai1TAKp22%2FRlrd9W1a3jrFjtld09vS8IkpI2d9%2Fl5TJifC8xQ4i2BdZxJDmVKvTk8qqgGvp&X-Amz-Signature=232c2e8588b8a351dabaf5c58526b00ba1447852a5e6efca9699accf854d5d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTUAFJHN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID1MK4n7wAo1OV5%2Fw3NQ%2BBzR7%2Bym%2BJbSJt%2FmISmLe93eAiEA%2BTGL6KIJLygP%2BEil7wy8bs%2BNNyd2iQ9zf3mUqcP8Idkq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDCY6Oss3B6WfxOh7OyrcAxAjsqqfM571z9jGh%2BuzA9Uy7ZRWHNflmVD7kI3cEdUDWJDzDMWA%2BMOrDhuYWoTyrUWSJw1t6PY1wCfZfMKre8EHeLLHOgmSIO2x9Z5QrJGE5xDd7tfCry%2Bog%2F9AH7AX%2FSk0F9rdJh%2BmCFDh8IlTFu%2Bu6sEWda7JAfCacOjvKbJ9KfE8jGZvZTUO1juQSpdM4t%2BQcWn04ri9IIEGkJo6jUESXMNt2UWBYs%2BBZk9LZ6vzM5pLlaoc4UiTlTIrDtKusLdkXuOpOjzzDjLgaQnqatanTbJjWFx1m0pcBxPEBIVShGVPGrfuM3CbZp8O3qibb5DRD14dxbS1AEwXmOaK8bSsntyb4%2F4TnHH4A7RtdxF9V%2BtSH6R86YCH5TGX85AEBJ%2FKhWma6wjU2bYfcuCVzM4uS%2BGRUjZQsslD1l1COc9WGI4EvFYofU%2FnhZlHPMTzMucVrfOOiI76aoW%2BEaU1zX%2BJgz6%2B2dyzrp2i12BkpJ%2FObysEXsAmH5QgYVWNVEKgH3RCiZITBpL5PSAbrgy85EsvcK7RG27D4enNvwpFcd5SEA8Knk7QgDtqnGtvQzc4lNnybikBVtjT2O2vsB8yvTnsjYfaMj9w0v0EOwwPhsQgAak7xCFx5AMvvFRKMKH0xMQGOqUBc8siZMxyS5yil1mNa43tIvESxgxQkpkX1ciJ1ZlcdDeq57VufHLXK5fsaEs80AR3AF8W%2Byq%2F1cDVQDaqPUOPgq8eAmGj0sxhkBGe4a6XK6VaFg7R7VV1ZvPLj6AUXZEjXo6R6xZM6p5CwnX4YpxvBai1TAKp22%2FRlrd9W1a3jrFjtld09vS8IkpI2d9%2Fl5TJifC8xQ4i2BdZxJDmVKvTk8qqgGvp&X-Amz-Signature=92f264802e73ffea2ce34534fd484c69587cb1508a7a8ff3d68e700037a32d84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTUAFJHN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID1MK4n7wAo1OV5%2Fw3NQ%2BBzR7%2Bym%2BJbSJt%2FmISmLe93eAiEA%2BTGL6KIJLygP%2BEil7wy8bs%2BNNyd2iQ9zf3mUqcP8Idkq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDCY6Oss3B6WfxOh7OyrcAxAjsqqfM571z9jGh%2BuzA9Uy7ZRWHNflmVD7kI3cEdUDWJDzDMWA%2BMOrDhuYWoTyrUWSJw1t6PY1wCfZfMKre8EHeLLHOgmSIO2x9Z5QrJGE5xDd7tfCry%2Bog%2F9AH7AX%2FSk0F9rdJh%2BmCFDh8IlTFu%2Bu6sEWda7JAfCacOjvKbJ9KfE8jGZvZTUO1juQSpdM4t%2BQcWn04ri9IIEGkJo6jUESXMNt2UWBYs%2BBZk9LZ6vzM5pLlaoc4UiTlTIrDtKusLdkXuOpOjzzDjLgaQnqatanTbJjWFx1m0pcBxPEBIVShGVPGrfuM3CbZp8O3qibb5DRD14dxbS1AEwXmOaK8bSsntyb4%2F4TnHH4A7RtdxF9V%2BtSH6R86YCH5TGX85AEBJ%2FKhWma6wjU2bYfcuCVzM4uS%2BGRUjZQsslD1l1COc9WGI4EvFYofU%2FnhZlHPMTzMucVrfOOiI76aoW%2BEaU1zX%2BJgz6%2B2dyzrp2i12BkpJ%2FObysEXsAmH5QgYVWNVEKgH3RCiZITBpL5PSAbrgy85EsvcK7RG27D4enNvwpFcd5SEA8Knk7QgDtqnGtvQzc4lNnybikBVtjT2O2vsB8yvTnsjYfaMj9w0v0EOwwPhsQgAak7xCFx5AMvvFRKMKH0xMQGOqUBc8siZMxyS5yil1mNa43tIvESxgxQkpkX1ciJ1ZlcdDeq57VufHLXK5fsaEs80AR3AF8W%2Byq%2F1cDVQDaqPUOPgq8eAmGj0sxhkBGe4a6XK6VaFg7R7VV1ZvPLj6AUXZEjXo6R6xZM6p5CwnX4YpxvBai1TAKp22%2FRlrd9W1a3jrFjtld09vS8IkpI2d9%2Fl5TJifC8xQ4i2BdZxJDmVKvTk8qqgGvp&X-Amz-Signature=9c3d04c8165ab8a06ca6ee2c1e08a7c96aa0af91c8902180cda065fe98cae6c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTUAFJHN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID1MK4n7wAo1OV5%2Fw3NQ%2BBzR7%2Bym%2BJbSJt%2FmISmLe93eAiEA%2BTGL6KIJLygP%2BEil7wy8bs%2BNNyd2iQ9zf3mUqcP8Idkq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDCY6Oss3B6WfxOh7OyrcAxAjsqqfM571z9jGh%2BuzA9Uy7ZRWHNflmVD7kI3cEdUDWJDzDMWA%2BMOrDhuYWoTyrUWSJw1t6PY1wCfZfMKre8EHeLLHOgmSIO2x9Z5QrJGE5xDd7tfCry%2Bog%2F9AH7AX%2FSk0F9rdJh%2BmCFDh8IlTFu%2Bu6sEWda7JAfCacOjvKbJ9KfE8jGZvZTUO1juQSpdM4t%2BQcWn04ri9IIEGkJo6jUESXMNt2UWBYs%2BBZk9LZ6vzM5pLlaoc4UiTlTIrDtKusLdkXuOpOjzzDjLgaQnqatanTbJjWFx1m0pcBxPEBIVShGVPGrfuM3CbZp8O3qibb5DRD14dxbS1AEwXmOaK8bSsntyb4%2F4TnHH4A7RtdxF9V%2BtSH6R86YCH5TGX85AEBJ%2FKhWma6wjU2bYfcuCVzM4uS%2BGRUjZQsslD1l1COc9WGI4EvFYofU%2FnhZlHPMTzMucVrfOOiI76aoW%2BEaU1zX%2BJgz6%2B2dyzrp2i12BkpJ%2FObysEXsAmH5QgYVWNVEKgH3RCiZITBpL5PSAbrgy85EsvcK7RG27D4enNvwpFcd5SEA8Knk7QgDtqnGtvQzc4lNnybikBVtjT2O2vsB8yvTnsjYfaMj9w0v0EOwwPhsQgAak7xCFx5AMvvFRKMKH0xMQGOqUBc8siZMxyS5yil1mNa43tIvESxgxQkpkX1ciJ1ZlcdDeq57VufHLXK5fsaEs80AR3AF8W%2Byq%2F1cDVQDaqPUOPgq8eAmGj0sxhkBGe4a6XK6VaFg7R7VV1ZvPLj6AUXZEjXo6R6xZM6p5CwnX4YpxvBai1TAKp22%2FRlrd9W1a3jrFjtld09vS8IkpI2d9%2Fl5TJifC8xQ4i2BdZxJDmVKvTk8qqgGvp&X-Amz-Signature=fee9f26214073a36bb72b87130d58c3c1a47a40ee13c66074e61ae96a2262b0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTUAFJHN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID1MK4n7wAo1OV5%2Fw3NQ%2BBzR7%2Bym%2BJbSJt%2FmISmLe93eAiEA%2BTGL6KIJLygP%2BEil7wy8bs%2BNNyd2iQ9zf3mUqcP8Idkq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDCY6Oss3B6WfxOh7OyrcAxAjsqqfM571z9jGh%2BuzA9Uy7ZRWHNflmVD7kI3cEdUDWJDzDMWA%2BMOrDhuYWoTyrUWSJw1t6PY1wCfZfMKre8EHeLLHOgmSIO2x9Z5QrJGE5xDd7tfCry%2Bog%2F9AH7AX%2FSk0F9rdJh%2BmCFDh8IlTFu%2Bu6sEWda7JAfCacOjvKbJ9KfE8jGZvZTUO1juQSpdM4t%2BQcWn04ri9IIEGkJo6jUESXMNt2UWBYs%2BBZk9LZ6vzM5pLlaoc4UiTlTIrDtKusLdkXuOpOjzzDjLgaQnqatanTbJjWFx1m0pcBxPEBIVShGVPGrfuM3CbZp8O3qibb5DRD14dxbS1AEwXmOaK8bSsntyb4%2F4TnHH4A7RtdxF9V%2BtSH6R86YCH5TGX85AEBJ%2FKhWma6wjU2bYfcuCVzM4uS%2BGRUjZQsslD1l1COc9WGI4EvFYofU%2FnhZlHPMTzMucVrfOOiI76aoW%2BEaU1zX%2BJgz6%2B2dyzrp2i12BkpJ%2FObysEXsAmH5QgYVWNVEKgH3RCiZITBpL5PSAbrgy85EsvcK7RG27D4enNvwpFcd5SEA8Knk7QgDtqnGtvQzc4lNnybikBVtjT2O2vsB8yvTnsjYfaMj9w0v0EOwwPhsQgAak7xCFx5AMvvFRKMKH0xMQGOqUBc8siZMxyS5yil1mNa43tIvESxgxQkpkX1ciJ1ZlcdDeq57VufHLXK5fsaEs80AR3AF8W%2Byq%2F1cDVQDaqPUOPgq8eAmGj0sxhkBGe4a6XK6VaFg7R7VV1ZvPLj6AUXZEjXo6R6xZM6p5CwnX4YpxvBai1TAKp22%2FRlrd9W1a3jrFjtld09vS8IkpI2d9%2Fl5TJifC8xQ4i2BdZxJDmVKvTk8qqgGvp&X-Amz-Signature=75e327a63fa32133020cd33e0489732e2b7fff9063129355d467f0e23c100112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
