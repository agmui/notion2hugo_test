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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFVPCKVQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAV6oWEWxrl0bBS%2BfzqACEYXCisACRta9s%2BUXHybggu1AiEAqH8gQuQfv0CcwnKH7dCgGMCWXmF33YVfmN6cNRPZFWYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDHSmWgg%2BS%2BTqJRA%2BMyrcA4yD7SCif3kubsol9n7ZzGReKa6turRB1%2F1Qu7qRAOpNHV7jFmfSo0P8gzsK3OxKclhURkHMa4Q6wVg%2B%2FNm1uyASzLPneiCI9wQOXO%2FmxVAprRuWtDuGa5v03j%2FCGJKtrkAuVMcncFYDfOq%2FR1DmVTBCLDrsP9q1Pb7BkSBmNDpZ%2FUHLhYUr9ty9g1UnUQZuwx4dgL%2Fc1bHLjaBV6tfMyz9mqHGHKCc4uWmnlnVEX8XFNHAFjulEsxdG8FpDpo7chhZDxcKVSFzr2KI9nzvRl7xsBzCYiLgH8LRmzAf5tKWVzPhtX%2Bbf4WTyc0N1gew6Fgrlq%2FBuQ7iBFGWeXhYq4lWuf7IM6D%2FFwigw26RtpP0aH5GW3ibwOcQJ47Rho7z4EourwYcPNIQb5R%2FdoKm1k1GlNoPBjerOZY9wlL3pwJeTlla7te2dxWGxM%2F%2FgjfGXKGj0WKUEfYw8RAKedo5afJlatzd7iVDBbKYzlS4tm6nBTKvsCgZAYCLWoHi7SUMAJ3i%2Fqahm3vFxkuHq7a9S0A2b1NAp3gk%2B6Sel2L2uKsfE8B4C%2BGzR2lZ0Rkccg0LxXiSEOWDORHKeAY4lkzkeZaKgJcZq1uSkQqz%2B%2BVMZj9yQJ5fabX4w9gDTA%2F4yMO%2FX%2FsQGOqUBb0iXnKe%2FCV%2F4Y9PgqprN1bb3umdPNh8BKKXZ%2Ffe3zZGOFc3re8sVV6I%2FH%2BWNm%2FMjdTWACne%2Bq%2B2%2BRVALNS4QSENpgmAOxAmEkMw7xLyUMzpyCZaBTkPVZsEOReXOzdMQ5sRWNkdGjIhcNy0ecu1rihoHWbHJwwy6JG1ZKoiqVF%2FtnWHt3sFONR3oozsQyL68QUcG0hzhvQK13EpQbvAo8rClgN4m&X-Amz-Signature=dafc944fc80c62fe682b79a7fa11fba4693949aa5b53baaa4a2b9b9863ebf169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFVPCKVQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAV6oWEWxrl0bBS%2BfzqACEYXCisACRta9s%2BUXHybggu1AiEAqH8gQuQfv0CcwnKH7dCgGMCWXmF33YVfmN6cNRPZFWYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDHSmWgg%2BS%2BTqJRA%2BMyrcA4yD7SCif3kubsol9n7ZzGReKa6turRB1%2F1Qu7qRAOpNHV7jFmfSo0P8gzsK3OxKclhURkHMa4Q6wVg%2B%2FNm1uyASzLPneiCI9wQOXO%2FmxVAprRuWtDuGa5v03j%2FCGJKtrkAuVMcncFYDfOq%2FR1DmVTBCLDrsP9q1Pb7BkSBmNDpZ%2FUHLhYUr9ty9g1UnUQZuwx4dgL%2Fc1bHLjaBV6tfMyz9mqHGHKCc4uWmnlnVEX8XFNHAFjulEsxdG8FpDpo7chhZDxcKVSFzr2KI9nzvRl7xsBzCYiLgH8LRmzAf5tKWVzPhtX%2Bbf4WTyc0N1gew6Fgrlq%2FBuQ7iBFGWeXhYq4lWuf7IM6D%2FFwigw26RtpP0aH5GW3ibwOcQJ47Rho7z4EourwYcPNIQb5R%2FdoKm1k1GlNoPBjerOZY9wlL3pwJeTlla7te2dxWGxM%2F%2FgjfGXKGj0WKUEfYw8RAKedo5afJlatzd7iVDBbKYzlS4tm6nBTKvsCgZAYCLWoHi7SUMAJ3i%2Fqahm3vFxkuHq7a9S0A2b1NAp3gk%2B6Sel2L2uKsfE8B4C%2BGzR2lZ0Rkccg0LxXiSEOWDORHKeAY4lkzkeZaKgJcZq1uSkQqz%2B%2BVMZj9yQJ5fabX4w9gDTA%2F4yMO%2FX%2FsQGOqUBb0iXnKe%2FCV%2F4Y9PgqprN1bb3umdPNh8BKKXZ%2Ffe3zZGOFc3re8sVV6I%2FH%2BWNm%2FMjdTWACne%2Bq%2B2%2BRVALNS4QSENpgmAOxAmEkMw7xLyUMzpyCZaBTkPVZsEOReXOzdMQ5sRWNkdGjIhcNy0ecu1rihoHWbHJwwy6JG1ZKoiqVF%2FtnWHt3sFONR3oozsQyL68QUcG0hzhvQK13EpQbvAo8rClgN4m&X-Amz-Signature=7ed3a77c6266505bdfbb2c72e258fff0820ed879a642619a4564824a20073a8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFVPCKVQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAV6oWEWxrl0bBS%2BfzqACEYXCisACRta9s%2BUXHybggu1AiEAqH8gQuQfv0CcwnKH7dCgGMCWXmF33YVfmN6cNRPZFWYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDHSmWgg%2BS%2BTqJRA%2BMyrcA4yD7SCif3kubsol9n7ZzGReKa6turRB1%2F1Qu7qRAOpNHV7jFmfSo0P8gzsK3OxKclhURkHMa4Q6wVg%2B%2FNm1uyASzLPneiCI9wQOXO%2FmxVAprRuWtDuGa5v03j%2FCGJKtrkAuVMcncFYDfOq%2FR1DmVTBCLDrsP9q1Pb7BkSBmNDpZ%2FUHLhYUr9ty9g1UnUQZuwx4dgL%2Fc1bHLjaBV6tfMyz9mqHGHKCc4uWmnlnVEX8XFNHAFjulEsxdG8FpDpo7chhZDxcKVSFzr2KI9nzvRl7xsBzCYiLgH8LRmzAf5tKWVzPhtX%2Bbf4WTyc0N1gew6Fgrlq%2FBuQ7iBFGWeXhYq4lWuf7IM6D%2FFwigw26RtpP0aH5GW3ibwOcQJ47Rho7z4EourwYcPNIQb5R%2FdoKm1k1GlNoPBjerOZY9wlL3pwJeTlla7te2dxWGxM%2F%2FgjfGXKGj0WKUEfYw8RAKedo5afJlatzd7iVDBbKYzlS4tm6nBTKvsCgZAYCLWoHi7SUMAJ3i%2Fqahm3vFxkuHq7a9S0A2b1NAp3gk%2B6Sel2L2uKsfE8B4C%2BGzR2lZ0Rkccg0LxXiSEOWDORHKeAY4lkzkeZaKgJcZq1uSkQqz%2B%2BVMZj9yQJ5fabX4w9gDTA%2F4yMO%2FX%2FsQGOqUBb0iXnKe%2FCV%2F4Y9PgqprN1bb3umdPNh8BKKXZ%2Ffe3zZGOFc3re8sVV6I%2FH%2BWNm%2FMjdTWACne%2Bq%2B2%2BRVALNS4QSENpgmAOxAmEkMw7xLyUMzpyCZaBTkPVZsEOReXOzdMQ5sRWNkdGjIhcNy0ecu1rihoHWbHJwwy6JG1ZKoiqVF%2FtnWHt3sFONR3oozsQyL68QUcG0hzhvQK13EpQbvAo8rClgN4m&X-Amz-Signature=455c3e823ec19374c7c17406830264b2931b02320f78f642a750653fb04e2c82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFVPCKVQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAV6oWEWxrl0bBS%2BfzqACEYXCisACRta9s%2BUXHybggu1AiEAqH8gQuQfv0CcwnKH7dCgGMCWXmF33YVfmN6cNRPZFWYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDHSmWgg%2BS%2BTqJRA%2BMyrcA4yD7SCif3kubsol9n7ZzGReKa6turRB1%2F1Qu7qRAOpNHV7jFmfSo0P8gzsK3OxKclhURkHMa4Q6wVg%2B%2FNm1uyASzLPneiCI9wQOXO%2FmxVAprRuWtDuGa5v03j%2FCGJKtrkAuVMcncFYDfOq%2FR1DmVTBCLDrsP9q1Pb7BkSBmNDpZ%2FUHLhYUr9ty9g1UnUQZuwx4dgL%2Fc1bHLjaBV6tfMyz9mqHGHKCc4uWmnlnVEX8XFNHAFjulEsxdG8FpDpo7chhZDxcKVSFzr2KI9nzvRl7xsBzCYiLgH8LRmzAf5tKWVzPhtX%2Bbf4WTyc0N1gew6Fgrlq%2FBuQ7iBFGWeXhYq4lWuf7IM6D%2FFwigw26RtpP0aH5GW3ibwOcQJ47Rho7z4EourwYcPNIQb5R%2FdoKm1k1GlNoPBjerOZY9wlL3pwJeTlla7te2dxWGxM%2F%2FgjfGXKGj0WKUEfYw8RAKedo5afJlatzd7iVDBbKYzlS4tm6nBTKvsCgZAYCLWoHi7SUMAJ3i%2Fqahm3vFxkuHq7a9S0A2b1NAp3gk%2B6Sel2L2uKsfE8B4C%2BGzR2lZ0Rkccg0LxXiSEOWDORHKeAY4lkzkeZaKgJcZq1uSkQqz%2B%2BVMZj9yQJ5fabX4w9gDTA%2F4yMO%2FX%2FsQGOqUBb0iXnKe%2FCV%2F4Y9PgqprN1bb3umdPNh8BKKXZ%2Ffe3zZGOFc3re8sVV6I%2FH%2BWNm%2FMjdTWACne%2Bq%2B2%2BRVALNS4QSENpgmAOxAmEkMw7xLyUMzpyCZaBTkPVZsEOReXOzdMQ5sRWNkdGjIhcNy0ecu1rihoHWbHJwwy6JG1ZKoiqVF%2FtnWHt3sFONR3oozsQyL68QUcG0hzhvQK13EpQbvAo8rClgN4m&X-Amz-Signature=36b5408c1fe1839876962a3ed59891d08c8f5ebd364d11428a534adb52d33772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFVPCKVQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAV6oWEWxrl0bBS%2BfzqACEYXCisACRta9s%2BUXHybggu1AiEAqH8gQuQfv0CcwnKH7dCgGMCWXmF33YVfmN6cNRPZFWYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDHSmWgg%2BS%2BTqJRA%2BMyrcA4yD7SCif3kubsol9n7ZzGReKa6turRB1%2F1Qu7qRAOpNHV7jFmfSo0P8gzsK3OxKclhURkHMa4Q6wVg%2B%2FNm1uyASzLPneiCI9wQOXO%2FmxVAprRuWtDuGa5v03j%2FCGJKtrkAuVMcncFYDfOq%2FR1DmVTBCLDrsP9q1Pb7BkSBmNDpZ%2FUHLhYUr9ty9g1UnUQZuwx4dgL%2Fc1bHLjaBV6tfMyz9mqHGHKCc4uWmnlnVEX8XFNHAFjulEsxdG8FpDpo7chhZDxcKVSFzr2KI9nzvRl7xsBzCYiLgH8LRmzAf5tKWVzPhtX%2Bbf4WTyc0N1gew6Fgrlq%2FBuQ7iBFGWeXhYq4lWuf7IM6D%2FFwigw26RtpP0aH5GW3ibwOcQJ47Rho7z4EourwYcPNIQb5R%2FdoKm1k1GlNoPBjerOZY9wlL3pwJeTlla7te2dxWGxM%2F%2FgjfGXKGj0WKUEfYw8RAKedo5afJlatzd7iVDBbKYzlS4tm6nBTKvsCgZAYCLWoHi7SUMAJ3i%2Fqahm3vFxkuHq7a9S0A2b1NAp3gk%2B6Sel2L2uKsfE8B4C%2BGzR2lZ0Rkccg0LxXiSEOWDORHKeAY4lkzkeZaKgJcZq1uSkQqz%2B%2BVMZj9yQJ5fabX4w9gDTA%2F4yMO%2FX%2FsQGOqUBb0iXnKe%2FCV%2F4Y9PgqprN1bb3umdPNh8BKKXZ%2Ffe3zZGOFc3re8sVV6I%2FH%2BWNm%2FMjdTWACne%2Bq%2B2%2BRVALNS4QSENpgmAOxAmEkMw7xLyUMzpyCZaBTkPVZsEOReXOzdMQ5sRWNkdGjIhcNy0ecu1rihoHWbHJwwy6JG1ZKoiqVF%2FtnWHt3sFONR3oozsQyL68QUcG0hzhvQK13EpQbvAo8rClgN4m&X-Amz-Signature=08ff8d2bff06277f3c4dec2d57c61f69b70971c30b07ded4ce5beafde679ebbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFVPCKVQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAV6oWEWxrl0bBS%2BfzqACEYXCisACRta9s%2BUXHybggu1AiEAqH8gQuQfv0CcwnKH7dCgGMCWXmF33YVfmN6cNRPZFWYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDHSmWgg%2BS%2BTqJRA%2BMyrcA4yD7SCif3kubsol9n7ZzGReKa6turRB1%2F1Qu7qRAOpNHV7jFmfSo0P8gzsK3OxKclhURkHMa4Q6wVg%2B%2FNm1uyASzLPneiCI9wQOXO%2FmxVAprRuWtDuGa5v03j%2FCGJKtrkAuVMcncFYDfOq%2FR1DmVTBCLDrsP9q1Pb7BkSBmNDpZ%2FUHLhYUr9ty9g1UnUQZuwx4dgL%2Fc1bHLjaBV6tfMyz9mqHGHKCc4uWmnlnVEX8XFNHAFjulEsxdG8FpDpo7chhZDxcKVSFzr2KI9nzvRl7xsBzCYiLgH8LRmzAf5tKWVzPhtX%2Bbf4WTyc0N1gew6Fgrlq%2FBuQ7iBFGWeXhYq4lWuf7IM6D%2FFwigw26RtpP0aH5GW3ibwOcQJ47Rho7z4EourwYcPNIQb5R%2FdoKm1k1GlNoPBjerOZY9wlL3pwJeTlla7te2dxWGxM%2F%2FgjfGXKGj0WKUEfYw8RAKedo5afJlatzd7iVDBbKYzlS4tm6nBTKvsCgZAYCLWoHi7SUMAJ3i%2Fqahm3vFxkuHq7a9S0A2b1NAp3gk%2B6Sel2L2uKsfE8B4C%2BGzR2lZ0Rkccg0LxXiSEOWDORHKeAY4lkzkeZaKgJcZq1uSkQqz%2B%2BVMZj9yQJ5fabX4w9gDTA%2F4yMO%2FX%2FsQGOqUBb0iXnKe%2FCV%2F4Y9PgqprN1bb3umdPNh8BKKXZ%2Ffe3zZGOFc3re8sVV6I%2FH%2BWNm%2FMjdTWACne%2Bq%2B2%2BRVALNS4QSENpgmAOxAmEkMw7xLyUMzpyCZaBTkPVZsEOReXOzdMQ5sRWNkdGjIhcNy0ecu1rihoHWbHJwwy6JG1ZKoiqVF%2FtnWHt3sFONR3oozsQyL68QUcG0hzhvQK13EpQbvAo8rClgN4m&X-Amz-Signature=d88124d42b13747494c6690c364bb23ee36ceda84b5bd410ebe128ec03846df9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFVPCKVQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAV6oWEWxrl0bBS%2BfzqACEYXCisACRta9s%2BUXHybggu1AiEAqH8gQuQfv0CcwnKH7dCgGMCWXmF33YVfmN6cNRPZFWYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDHSmWgg%2BS%2BTqJRA%2BMyrcA4yD7SCif3kubsol9n7ZzGReKa6turRB1%2F1Qu7qRAOpNHV7jFmfSo0P8gzsK3OxKclhURkHMa4Q6wVg%2B%2FNm1uyASzLPneiCI9wQOXO%2FmxVAprRuWtDuGa5v03j%2FCGJKtrkAuVMcncFYDfOq%2FR1DmVTBCLDrsP9q1Pb7BkSBmNDpZ%2FUHLhYUr9ty9g1UnUQZuwx4dgL%2Fc1bHLjaBV6tfMyz9mqHGHKCc4uWmnlnVEX8XFNHAFjulEsxdG8FpDpo7chhZDxcKVSFzr2KI9nzvRl7xsBzCYiLgH8LRmzAf5tKWVzPhtX%2Bbf4WTyc0N1gew6Fgrlq%2FBuQ7iBFGWeXhYq4lWuf7IM6D%2FFwigw26RtpP0aH5GW3ibwOcQJ47Rho7z4EourwYcPNIQb5R%2FdoKm1k1GlNoPBjerOZY9wlL3pwJeTlla7te2dxWGxM%2F%2FgjfGXKGj0WKUEfYw8RAKedo5afJlatzd7iVDBbKYzlS4tm6nBTKvsCgZAYCLWoHi7SUMAJ3i%2Fqahm3vFxkuHq7a9S0A2b1NAp3gk%2B6Sel2L2uKsfE8B4C%2BGzR2lZ0Rkccg0LxXiSEOWDORHKeAY4lkzkeZaKgJcZq1uSkQqz%2B%2BVMZj9yQJ5fabX4w9gDTA%2F4yMO%2FX%2FsQGOqUBb0iXnKe%2FCV%2F4Y9PgqprN1bb3umdPNh8BKKXZ%2Ffe3zZGOFc3re8sVV6I%2FH%2BWNm%2FMjdTWACne%2Bq%2B2%2BRVALNS4QSENpgmAOxAmEkMw7xLyUMzpyCZaBTkPVZsEOReXOzdMQ5sRWNkdGjIhcNy0ecu1rihoHWbHJwwy6JG1ZKoiqVF%2FtnWHt3sFONR3oozsQyL68QUcG0hzhvQK13EpQbvAo8rClgN4m&X-Amz-Signature=d8d3372a8368ef3a5520e6df887369afefe20017153723cbad2a97f1a9876a6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFVPCKVQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAV6oWEWxrl0bBS%2BfzqACEYXCisACRta9s%2BUXHybggu1AiEAqH8gQuQfv0CcwnKH7dCgGMCWXmF33YVfmN6cNRPZFWYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDHSmWgg%2BS%2BTqJRA%2BMyrcA4yD7SCif3kubsol9n7ZzGReKa6turRB1%2F1Qu7qRAOpNHV7jFmfSo0P8gzsK3OxKclhURkHMa4Q6wVg%2B%2FNm1uyASzLPneiCI9wQOXO%2FmxVAprRuWtDuGa5v03j%2FCGJKtrkAuVMcncFYDfOq%2FR1DmVTBCLDrsP9q1Pb7BkSBmNDpZ%2FUHLhYUr9ty9g1UnUQZuwx4dgL%2Fc1bHLjaBV6tfMyz9mqHGHKCc4uWmnlnVEX8XFNHAFjulEsxdG8FpDpo7chhZDxcKVSFzr2KI9nzvRl7xsBzCYiLgH8LRmzAf5tKWVzPhtX%2Bbf4WTyc0N1gew6Fgrlq%2FBuQ7iBFGWeXhYq4lWuf7IM6D%2FFwigw26RtpP0aH5GW3ibwOcQJ47Rho7z4EourwYcPNIQb5R%2FdoKm1k1GlNoPBjerOZY9wlL3pwJeTlla7te2dxWGxM%2F%2FgjfGXKGj0WKUEfYw8RAKedo5afJlatzd7iVDBbKYzlS4tm6nBTKvsCgZAYCLWoHi7SUMAJ3i%2Fqahm3vFxkuHq7a9S0A2b1NAp3gk%2B6Sel2L2uKsfE8B4C%2BGzR2lZ0Rkccg0LxXiSEOWDORHKeAY4lkzkeZaKgJcZq1uSkQqz%2B%2BVMZj9yQJ5fabX4w9gDTA%2F4yMO%2FX%2FsQGOqUBb0iXnKe%2FCV%2F4Y9PgqprN1bb3umdPNh8BKKXZ%2Ffe3zZGOFc3re8sVV6I%2FH%2BWNm%2FMjdTWACne%2Bq%2B2%2BRVALNS4QSENpgmAOxAmEkMw7xLyUMzpyCZaBTkPVZsEOReXOzdMQ5sRWNkdGjIhcNy0ecu1rihoHWbHJwwy6JG1ZKoiqVF%2FtnWHt3sFONR3oozsQyL68QUcG0hzhvQK13EpQbvAo8rClgN4m&X-Amz-Signature=fb3247192f091b53becea41e4f24caac14425d1c45d81cab30e2789e25fddba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFVPCKVQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAV6oWEWxrl0bBS%2BfzqACEYXCisACRta9s%2BUXHybggu1AiEAqH8gQuQfv0CcwnKH7dCgGMCWXmF33YVfmN6cNRPZFWYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDHSmWgg%2BS%2BTqJRA%2BMyrcA4yD7SCif3kubsol9n7ZzGReKa6turRB1%2F1Qu7qRAOpNHV7jFmfSo0P8gzsK3OxKclhURkHMa4Q6wVg%2B%2FNm1uyASzLPneiCI9wQOXO%2FmxVAprRuWtDuGa5v03j%2FCGJKtrkAuVMcncFYDfOq%2FR1DmVTBCLDrsP9q1Pb7BkSBmNDpZ%2FUHLhYUr9ty9g1UnUQZuwx4dgL%2Fc1bHLjaBV6tfMyz9mqHGHKCc4uWmnlnVEX8XFNHAFjulEsxdG8FpDpo7chhZDxcKVSFzr2KI9nzvRl7xsBzCYiLgH8LRmzAf5tKWVzPhtX%2Bbf4WTyc0N1gew6Fgrlq%2FBuQ7iBFGWeXhYq4lWuf7IM6D%2FFwigw26RtpP0aH5GW3ibwOcQJ47Rho7z4EourwYcPNIQb5R%2FdoKm1k1GlNoPBjerOZY9wlL3pwJeTlla7te2dxWGxM%2F%2FgjfGXKGj0WKUEfYw8RAKedo5afJlatzd7iVDBbKYzlS4tm6nBTKvsCgZAYCLWoHi7SUMAJ3i%2Fqahm3vFxkuHq7a9S0A2b1NAp3gk%2B6Sel2L2uKsfE8B4C%2BGzR2lZ0Rkccg0LxXiSEOWDORHKeAY4lkzkeZaKgJcZq1uSkQqz%2B%2BVMZj9yQJ5fabX4w9gDTA%2F4yMO%2FX%2FsQGOqUBb0iXnKe%2FCV%2F4Y9PgqprN1bb3umdPNh8BKKXZ%2Ffe3zZGOFc3re8sVV6I%2FH%2BWNm%2FMjdTWACne%2Bq%2B2%2BRVALNS4QSENpgmAOxAmEkMw7xLyUMzpyCZaBTkPVZsEOReXOzdMQ5sRWNkdGjIhcNy0ecu1rihoHWbHJwwy6JG1ZKoiqVF%2FtnWHt3sFONR3oozsQyL68QUcG0hzhvQK13EpQbvAo8rClgN4m&X-Amz-Signature=a3cda6990f8db775f661eded8ec9f0401704ce38e5c1b83bd7ea2d051418b3e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFVPCKVQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAV6oWEWxrl0bBS%2BfzqACEYXCisACRta9s%2BUXHybggu1AiEAqH8gQuQfv0CcwnKH7dCgGMCWXmF33YVfmN6cNRPZFWYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDHSmWgg%2BS%2BTqJRA%2BMyrcA4yD7SCif3kubsol9n7ZzGReKa6turRB1%2F1Qu7qRAOpNHV7jFmfSo0P8gzsK3OxKclhURkHMa4Q6wVg%2B%2FNm1uyASzLPneiCI9wQOXO%2FmxVAprRuWtDuGa5v03j%2FCGJKtrkAuVMcncFYDfOq%2FR1DmVTBCLDrsP9q1Pb7BkSBmNDpZ%2FUHLhYUr9ty9g1UnUQZuwx4dgL%2Fc1bHLjaBV6tfMyz9mqHGHKCc4uWmnlnVEX8XFNHAFjulEsxdG8FpDpo7chhZDxcKVSFzr2KI9nzvRl7xsBzCYiLgH8LRmzAf5tKWVzPhtX%2Bbf4WTyc0N1gew6Fgrlq%2FBuQ7iBFGWeXhYq4lWuf7IM6D%2FFwigw26RtpP0aH5GW3ibwOcQJ47Rho7z4EourwYcPNIQb5R%2FdoKm1k1GlNoPBjerOZY9wlL3pwJeTlla7te2dxWGxM%2F%2FgjfGXKGj0WKUEfYw8RAKedo5afJlatzd7iVDBbKYzlS4tm6nBTKvsCgZAYCLWoHi7SUMAJ3i%2Fqahm3vFxkuHq7a9S0A2b1NAp3gk%2B6Sel2L2uKsfE8B4C%2BGzR2lZ0Rkccg0LxXiSEOWDORHKeAY4lkzkeZaKgJcZq1uSkQqz%2B%2BVMZj9yQJ5fabX4w9gDTA%2F4yMO%2FX%2FsQGOqUBb0iXnKe%2FCV%2F4Y9PgqprN1bb3umdPNh8BKKXZ%2Ffe3zZGOFc3re8sVV6I%2FH%2BWNm%2FMjdTWACne%2Bq%2B2%2BRVALNS4QSENpgmAOxAmEkMw7xLyUMzpyCZaBTkPVZsEOReXOzdMQ5sRWNkdGjIhcNy0ecu1rihoHWbHJwwy6JG1ZKoiqVF%2FtnWHt3sFONR3oozsQyL68QUcG0hzhvQK13EpQbvAo8rClgN4m&X-Amz-Signature=e729266717d6d725636f97c1e8ffb50af1a0eab903df0141f80d921f598fe739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPN4WXLI%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIHgBXcY5X53DI%2B3T4hLCwI%2FAuYefWAVaniCMc0swIXofAiEAo%2BQ0tajVY1Y4fsybIFUnJ0KuAg5tNbD9Xx6Q2H6zB48q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDIRjJ5hkFW0Nk5kQ5ircA7qQYdb7%2BiQWU5KRbrVaq3QSxPNf5l%2B1%2BlQu6zMoyzUoeVE6p9hGt4RTMz5yOx2yBwZqoxGypLjejQBsz7qR8BjA5xhP8jTzb6y88PDDAW647hjXsktM%2Bd1GGbF48CmprYzGtD9WAFFRCfPd7skHCEH0f5h%2B7OlJ6bQOv2Jy18EagRU5LSUdcUr5CcX4cgbSR1zgRebQ1PXylSlvKvj%2BDwsS2%2BcvJjlwQ0qlgF1DVEW%2FuDnKc%2BhIbif6azkDtjwTvk2BfqDej75qEBlu8DPERNnNbUGDrrfDqcHigic8RGL9%2BsBB4u%2Fqy4XtrYfEMlVLrinGxqcVXssozAHiBRNAskvXLdLnYYAVqE%2FPvBKA%2B1byNMgAKuFM78Zan1WabgecQXuS0K29OBPAu1Bqox3IqS2MwmJH2AsipbyZsfGKNGMP12dS1RLJok56xqZ0uT%2BrAzZchoDgngNU72Uk5G3SEyQXEqkU4PT%2BIewZAlUomcLMg9MTqVo42tcCLsz67ZWHamk4%2F2JqZVQj7zArxXcwUIsKi6evfCDBbgdspNdQYf0QfjF1%2FbzpXmibqmTGMoeT%2Bob9IKw8qlaQCo%2FNtO2%2BavZ%2Fxg9OqvvsB8hi88p%2BK0smegfpamBCyklnkfcIMODX%2FsQGOqUBGlYn6Yd9wZWlz5d%2BSR51sUuEMhCIr5sMAxV1O3GPZ7wAxfHd1ArIBJ304n1hUSwO8a8QhBdvzUiv%2FxciLXt3a73vBwcVeO02w4DjU0om7E6oeEqkr0XshbetxwkQyukfj5cGxTC29XQnNuJFXs%2FwoQUNTXPdPl583xwN%2Frb54ak%2BQebFGiJy283JQCNdfOEmCPtcX9dTgVgL3WrU3QBpmVrnQUWg&X-Amz-Signature=116e21a144039cc96ffca4f593df7816a573dcebeb4a526da050f4acc903a081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4JBLQRY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCv61mf99225eJZ7atoeCLLLfJxlaVEELq8qpiAJbkHcgIgYBYP%2Fn3iJzxB%2BvFqYEx2xl%2FMf%2F%2FhNKN%2BCAJBqatpMtcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDFmt1dyQmrs95%2FiRwircAzZmbvWb9d3WO0K70PmaOz76iK3H2TpAQE7xfGCcwYeCgb4MgBd8l0Q%2BL8GQgxZMlV6AkW1inMxLQ9xcEM9HryYgca2JbD5Hypsxne5PS%2Bz%2B0nf17%2FNILr6yW4IN6FvEJSvdn4mVTsHN1bVpyezCgZh5Eay8IbAixaw8YiQlYMgPP3nNy%2FHziZ5rqLCSqJBDTUjiTfmtCmlstA7xXfSzrSaskp%2Fx0lOhMMW7cR1ahwgM61FMHCCLwgkky7XWLhcqsMbWDaEQLVB%2FR6CcZgpLGzBIVq6mZiX8pA0Y52RId%2BzIF%2FzqceZlCWPBHoN3yPY6HxhT08iib9o6Y8CPDKHJJU374fsNxeZoRjlXwmVVlXDypYZ4XfoWe8zWGwv4cq8tJPoe9O7etamHxYsBiRyi5nDuHDKmYeMFEevIOG%2BG1AChGutgoBZPcwfp0cTEYnIRGaTPGoF%2BupwCMJft%2F5B3pd5go9EFWsODVSr5UxHhmCzwfWEUDnLrV7KADxlrtTyI13JDAuFzT7g0gVumgwG8S8iXqms9CtWBVNzeYcwsottImR%2Bqx3QlM8Qap6DnfaIBrCaDiAAijlggXXpZnLFKGwYM4WwZQ58qvrz%2B4%2F93EwnNtl4QeskPe97495SJMJ7Y%2FsQGOqUBV%2FtibBQpp0TSblk3Zu2OV7A3QtuBLisOrE5Dd3KrcTtm3AvereHd8lpPRhtYh0uQAgJKQm7qQ4EEvbPc3XL1CIBtHFBldwx7w5T%2FsFVFndwMi5UPCCeNAaewb%2FjxV2pf4pc05TyQxT5ktNjblTiB%2BNI2%2B0JoTiu%2BAHxED%2FdXxC4ygtlc%2F%2FNJUfq49zZU5TlQbIwni3B4wcdrR7bxQ4u1c6cC1JhM&X-Amz-Signature=7baa4332de6d5db406eafd81b04069c146f7ddcaef10c376606033a22a6487bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZUYD7RW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCs8NYm4lp5UEmxUZbW3rBf%2FTMFQE7qEF5bvgNJiPFq8AIgSZVbGsSS7rzukQkIc2mOto7sLkd1mBd5NNh6F4%2BrzDwq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDW9EFgu6X%2FjPe5ceircA7VY0pFVRffzfNvJbhB5M17e2zH84p3EwYtOxshEOFGBvPnh5qn%2Fn6LG9z%2BC1DCwtbxgsKDZJSonDI1s%2BM2AXdY5KtpoKJsbJpSz3mHUhn8GuD5QaBBj40foB7xtVw1FMAYDZR0z2UhUvchVoZ8tgfAtE2tEKLJZCBzu00NJzlQy99AkM3V38axil8WDu%2FEj2tXBEgF6ntQfTD1V1X3epP6ARax326h7Xf7XVA%2BKAWYvBlyuQzVFGXv9RfED%2FZ4KJOGs1yy0ynBGi%2F5f5kwo3d8Dz3hIkANVv3LVkPQY2Vms0wFqgfVyNG7aDCeOl9v%2FIHORjoGRSi6NiED2uH2mCgRCCAEquDrzA6uPId7LxMsdffoQK5uJNCOYJF4UExZwaTMxErQSYPrZ46n1jr8YehojCwzhiCw%2FdVKIybnde77LionPwUVsCbaqyDxD%2BVTBtAb3ytGRWDSmHLg2enAgQtlkPlims%2BARIYwrP6p36ztHGy1s%2BQLiDNN0cIeIXmRZy42OMvVvtSVNps4HWkCDrDHrWGscNUsbjjaXu9yP1t70GYhv1kEeMG%2FWYGZRoDmlccC7JozO6h2PEVcmQ0hzz9yeK3dUpcyJpZmYJUIml3jymXJ8ocKLgkSabxNWMOXY%2FsQGOqUBJEH2LF0ezylEg098xT8Un8AVWvmtmb0M9bEIUs5KTn0BEwzGMqFDsH2CeJw%2BzcswQpCsuobcvs2xYZWobH2bzjSa%2Fbb2qIHmr6BihE%2BJzUHBVg%2FhsC2yYsS165d5ICAVVvjZnGn7QNDu4Thw5GY7WTywD9Zjcu8d6Ze%2Fn12VqLGHxnsWzH5O4S%2BvFKCg5t3u2X%2BdzkTnR78X90K%2BFlIUWLHfuA7s&X-Amz-Signature=e36244dd8522ed033aac89555dc0058df0e32274547ebeb50c6c3759b4d90e29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFVPCKVQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAV6oWEWxrl0bBS%2BfzqACEYXCisACRta9s%2BUXHybggu1AiEAqH8gQuQfv0CcwnKH7dCgGMCWXmF33YVfmN6cNRPZFWYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDHSmWgg%2BS%2BTqJRA%2BMyrcA4yD7SCif3kubsol9n7ZzGReKa6turRB1%2F1Qu7qRAOpNHV7jFmfSo0P8gzsK3OxKclhURkHMa4Q6wVg%2B%2FNm1uyASzLPneiCI9wQOXO%2FmxVAprRuWtDuGa5v03j%2FCGJKtrkAuVMcncFYDfOq%2FR1DmVTBCLDrsP9q1Pb7BkSBmNDpZ%2FUHLhYUr9ty9g1UnUQZuwx4dgL%2Fc1bHLjaBV6tfMyz9mqHGHKCc4uWmnlnVEX8XFNHAFjulEsxdG8FpDpo7chhZDxcKVSFzr2KI9nzvRl7xsBzCYiLgH8LRmzAf5tKWVzPhtX%2Bbf4WTyc0N1gew6Fgrlq%2FBuQ7iBFGWeXhYq4lWuf7IM6D%2FFwigw26RtpP0aH5GW3ibwOcQJ47Rho7z4EourwYcPNIQb5R%2FdoKm1k1GlNoPBjerOZY9wlL3pwJeTlla7te2dxWGxM%2F%2FgjfGXKGj0WKUEfYw8RAKedo5afJlatzd7iVDBbKYzlS4tm6nBTKvsCgZAYCLWoHi7SUMAJ3i%2Fqahm3vFxkuHq7a9S0A2b1NAp3gk%2B6Sel2L2uKsfE8B4C%2BGzR2lZ0Rkccg0LxXiSEOWDORHKeAY4lkzkeZaKgJcZq1uSkQqz%2B%2BVMZj9yQJ5fabX4w9gDTA%2F4yMO%2FX%2FsQGOqUBb0iXnKe%2FCV%2F4Y9PgqprN1bb3umdPNh8BKKXZ%2Ffe3zZGOFc3re8sVV6I%2FH%2BWNm%2FMjdTWACne%2Bq%2B2%2BRVALNS4QSENpgmAOxAmEkMw7xLyUMzpyCZaBTkPVZsEOReXOzdMQ5sRWNkdGjIhcNy0ecu1rihoHWbHJwwy6JG1ZKoiqVF%2FtnWHt3sFONR3oozsQyL68QUcG0hzhvQK13EpQbvAo8rClgN4m&X-Amz-Signature=5fc4fdb3019f1f2436162aa7d026859d1c5ee14323d07c20ba8729bf577d8a7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAA4JVNQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAk9sJ3IcRdz9lpvoRe3WjfxyWfx%2BeL6nZN5uqwdxzBEAiEAiYsDHA6vocnhtu9QwDjuliUM%2Bj97Vp0rEytDfwFIlmoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDC%2Fio%2FAJuGvLl81SZircAyPiJWc0rOwfgs8AHn05NFiXakb3tgcyuXw9usy9lShrCySisH685DPiz1%2FsiiCFcXKn8qgwnJQVHPwHdXr9Vy2rUnnZZ%2FYXnR6mwAdt5IrovGK1D%2FJi%2BtWg3e%2B9uKXet7Nce%2F5Ycyctm%2BSS4VPDE8j5OHh6HtlZ1yDVCLkFrO%2FriUz%2BprGNH08QvBC3XC0mOiPMswjuntSVrEKFO6SPqVpIuCftir%2BwzC%2BEzk1ti%2BR9dlW9GELwvVauQop7RByODFv3IVeWxKbTRx7sDtIBDicXwOTXX%2FYVKEdrZQ3gMktM5X75Hr8HFjBiI1ejxfbi9SrKxeDIOU9Reh1BhcwoKhzCs%2BCXK6IDMAjlRi7WnEQJsxBvs6Kw7443NI6Nk4R%2BrUR2nHjzAl0MbaxHCHtq4M5nczyNG0Jt9bU9SuV5O%2BEqoP%2FMdE%2BK8gjTe%2F096TSvh6hS64ZcuQ9NhJ%2B9tKTB2tdEGZL6ewYRpwqQyJsKRHbkh9q%2BRl9E56g5akltnMKaJOEE5vF4XMiOhDusojD8oP3rqxIpyaKn6qus157wwbhfRHY1C6y25Pw%2FsS%2BKoL%2FZdogHV2itKQuoRjJeu%2BLgjnAeqaoT5tVrddfdIoTMeqogI7Yy7OiX6RZVeJCCMNrX%2FsQGOqUB9Ds3ziiS%2Bqwxf0SVEkN77VTeMspB1um1DzQ7PLFA%2FsLcEMWShYcQuVW%2B%2BQESQ8z0C7IZBRp8m8VMkl%2Fxo7ArZAAr6bK3M9F4wfWzEwso%2BFuCrugvOxPpQHxhbkGYNIpJc1GmPEECD%2BdQPwqBSFUYMnMDJ312kCdY3B4B%2F%2FdzWvKvCwhowGXmNNsRVnHYB%2BK8G4bBshtCogPYBXkL3N0T4UclIvtZ&X-Amz-Signature=fa15a7f35d471da2134b482031641563b748fbe6a45d06234ec9ee333546e240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFVPCKVQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAV6oWEWxrl0bBS%2BfzqACEYXCisACRta9s%2BUXHybggu1AiEAqH8gQuQfv0CcwnKH7dCgGMCWXmF33YVfmN6cNRPZFWYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDHSmWgg%2BS%2BTqJRA%2BMyrcA4yD7SCif3kubsol9n7ZzGReKa6turRB1%2F1Qu7qRAOpNHV7jFmfSo0P8gzsK3OxKclhURkHMa4Q6wVg%2B%2FNm1uyASzLPneiCI9wQOXO%2FmxVAprRuWtDuGa5v03j%2FCGJKtrkAuVMcncFYDfOq%2FR1DmVTBCLDrsP9q1Pb7BkSBmNDpZ%2FUHLhYUr9ty9g1UnUQZuwx4dgL%2Fc1bHLjaBV6tfMyz9mqHGHKCc4uWmnlnVEX8XFNHAFjulEsxdG8FpDpo7chhZDxcKVSFzr2KI9nzvRl7xsBzCYiLgH8LRmzAf5tKWVzPhtX%2Bbf4WTyc0N1gew6Fgrlq%2FBuQ7iBFGWeXhYq4lWuf7IM6D%2FFwigw26RtpP0aH5GW3ibwOcQJ47Rho7z4EourwYcPNIQb5R%2FdoKm1k1GlNoPBjerOZY9wlL3pwJeTlla7te2dxWGxM%2F%2FgjfGXKGj0WKUEfYw8RAKedo5afJlatzd7iVDBbKYzlS4tm6nBTKvsCgZAYCLWoHi7SUMAJ3i%2Fqahm3vFxkuHq7a9S0A2b1NAp3gk%2B6Sel2L2uKsfE8B4C%2BGzR2lZ0Rkccg0LxXiSEOWDORHKeAY4lkzkeZaKgJcZq1uSkQqz%2B%2BVMZj9yQJ5fabX4w9gDTA%2F4yMO%2FX%2FsQGOqUBb0iXnKe%2FCV%2F4Y9PgqprN1bb3umdPNh8BKKXZ%2Ffe3zZGOFc3re8sVV6I%2FH%2BWNm%2FMjdTWACne%2Bq%2B2%2BRVALNS4QSENpgmAOxAmEkMw7xLyUMzpyCZaBTkPVZsEOReXOzdMQ5sRWNkdGjIhcNy0ecu1rihoHWbHJwwy6JG1ZKoiqVF%2FtnWHt3sFONR3oozsQyL68QUcG0hzhvQK13EpQbvAo8rClgN4m&X-Amz-Signature=7eb0f20275d81368649e90e280bd84ea6db6a4456b227df2205c0d16387eac4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFHBOVQ5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIGRlifxaCwK4fKrswvNl6aqMWgichbg%2BVyo9J2OwF3wXAiEArInqiElQk5OxZm65thlaSjASnQVw9dREZpUGwIx28T0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDD6kDJjJgQAmm%2F8QoCrcA6%2BQilkkzEQLzZ9IcG5PbOlKXsqLROlbYcT3Gc4V3MR2DEmLyd4iT5k3Ooo%2FUR40%2Bf%2Bt1vcYV1mHQXXUtwNY0VU9w1DG93Mr8pWzCw4IPaqPHSUoIzKx2FGWu6Ng8GaI%2B1xwlhH7kqp71pDPSSLU7geALm7P0NdLAJbDzhJiIkrJ4FgSINYgKaZ3M%2BTfT5mbFOUeDgv3VerNhv2jk%2B4XGTzpGKCxGQ%2BkEzQMlt%2FYm1Vd%2BzQLKrghZ79pzkabz1Zg96yp%2FbC0XQNytX6Y9iJtwfD3sk%2FQrjJv0Nps9VjuIwIsR4YHBFAnllDhlzIdPi07I0u%2FrJql%2BkAJfTdNVBp6tQZUSM3b%2BY22VHBSlEKwI2hxJ2mB9WFna9x6djQZvSxkYgumJ%2FRkJZcryEqhR9VeDluNFclmyOJ9495RjQL6XUQK78SfMksLg%2B4UXPOeD%2BRhrJpzgJXOqppzvgchagCt2PCvwtQnmpPGq%2F8bixsjvyjXKTbDt5vNET699R9qzhOPMVEwQ2FCVNR7o3WEowwlCNBJWvyqRCQfSm6y4MSczSwB2vdzJ0goFYVb3rnPm%2FtLX9uZ45CmFUWoGATCeSno3shMEDe9oDodNLB0MQFkCP0IUXYSDaM%2Ffz7HZZV9MOvX%2FsQGOqUB%2FZJOJN8pUGG4k8X5JU4LMu1oj6AyoApGgCQ3DC1l9YEWvlG9T9THD%2FxbDEZV7NeFLo0LPV53Baz3UtGUMd84acU7euY6AakVbcq%2BosZR8OAGpbSWfX3vaj6oKNjNXvKzH8QIhfuK%2B9f47Fe01qCh1rKhxo%2BKdDJkq94s1utYnIf5N37IAii1fftm18zoCEW5QGJJoR5X2DwimeF9z4SixWZ%2B2Lwe&X-Amz-Signature=167ac457ff3570a45fd778c152872403347ccbca266d5972fca227b135c13242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFVPCKVQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAV6oWEWxrl0bBS%2BfzqACEYXCisACRta9s%2BUXHybggu1AiEAqH8gQuQfv0CcwnKH7dCgGMCWXmF33YVfmN6cNRPZFWYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDHSmWgg%2BS%2BTqJRA%2BMyrcA4yD7SCif3kubsol9n7ZzGReKa6turRB1%2F1Qu7qRAOpNHV7jFmfSo0P8gzsK3OxKclhURkHMa4Q6wVg%2B%2FNm1uyASzLPneiCI9wQOXO%2FmxVAprRuWtDuGa5v03j%2FCGJKtrkAuVMcncFYDfOq%2FR1DmVTBCLDrsP9q1Pb7BkSBmNDpZ%2FUHLhYUr9ty9g1UnUQZuwx4dgL%2Fc1bHLjaBV6tfMyz9mqHGHKCc4uWmnlnVEX8XFNHAFjulEsxdG8FpDpo7chhZDxcKVSFzr2KI9nzvRl7xsBzCYiLgH8LRmzAf5tKWVzPhtX%2Bbf4WTyc0N1gew6Fgrlq%2FBuQ7iBFGWeXhYq4lWuf7IM6D%2FFwigw26RtpP0aH5GW3ibwOcQJ47Rho7z4EourwYcPNIQb5R%2FdoKm1k1GlNoPBjerOZY9wlL3pwJeTlla7te2dxWGxM%2F%2FgjfGXKGj0WKUEfYw8RAKedo5afJlatzd7iVDBbKYzlS4tm6nBTKvsCgZAYCLWoHi7SUMAJ3i%2Fqahm3vFxkuHq7a9S0A2b1NAp3gk%2B6Sel2L2uKsfE8B4C%2BGzR2lZ0Rkccg0LxXiSEOWDORHKeAY4lkzkeZaKgJcZq1uSkQqz%2B%2BVMZj9yQJ5fabX4w9gDTA%2F4yMO%2FX%2FsQGOqUBb0iXnKe%2FCV%2F4Y9PgqprN1bb3umdPNh8BKKXZ%2Ffe3zZGOFc3re8sVV6I%2FH%2BWNm%2FMjdTWACne%2Bq%2B2%2BRVALNS4QSENpgmAOxAmEkMw7xLyUMzpyCZaBTkPVZsEOReXOzdMQ5sRWNkdGjIhcNy0ecu1rihoHWbHJwwy6JG1ZKoiqVF%2FtnWHt3sFONR3oozsQyL68QUcG0hzhvQK13EpQbvAo8rClgN4m&X-Amz-Signature=9560a7c1993e27b2cddfa3c1adc1e056848d0e0a0788aa19c959c4712229130e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZKJPI3Q%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIHk1sveoXY62mwA4iB515IrxbNEeGc1qybRFgJ1DovKGAiEAtE%2FBH%2BLEvCA1ZDZfZ0aZ2SVz0hEmhfYqvF3lkUeMSwgq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDSR3roks0LThPRMACrcA6W%2FrcNEUx7MwKSUmfsNBPkbczbgt6Y6SOOOYYd682%2BKYG1Ffts%2F32OZIqFz7ZOAi4lue1E8X5HAuBD7hO7qmcZblOBeZTgKGj0woZCpr2yd4NuZCR41qneRHZusgMVxBC8n5wYLjpf12p%2BqoOAF6DeXPWArLNwmWXdeMfienxeLv%2BIs2gw%2FwaMPRRgh0%2BeMjPIghk0ueYfiz%2BDdR8FJTBmRj%2BQUL6oEacVSteM2b1TodrShT8UMeC%2BxQO9XYV5oa8%2Br%2Bu1CKirWezNqIGPCf5kiRZVzhIUeIYfLzD162dpe0aiMiTWWcD2HZZo6KMdPMfANrYi56jZwMPxibu0NDNs9CbtcgLHYJHSDcV8dX29k1S59gddMc%2B7yBp7zLTtlSC6%2BuGC73nUBLhO%2FICH0%2F74khYWk7PzXQN9e2K6PPgssoXCPYT%2BF%2Bcm4t8znDWUx6ZmKOCpZUEHzD58ZneCYKGHyFxZQi6EtV%2Fh40ny8iWGVvVkjKbFqgZK7uESGR9t8JPzEl665jUY1IP%2BmN%2F%2FT%2BZdvQD2Ukpk4%2FemMHZzwrvRRfC6iNK5DtKBfxeb8z60K5mvYvNxJkmsUq%2Bv6IQUoawpaziGUdxztRR3yA4jmihkiu6ZkYC%2BlTNFf7q0RMLPY%2FsQGOqUBOrlylsZmbKm58K9iSAP9ra5ywXv3SwoBestvoqxOgGJj6XfUm8u1iadafzPn3R8dZXkix%2FyzFFli5osO8Lug7UpzgCmK06kKGb7GaOrYnA8iOtdxRIeC9eevTmZvg4Zq5HuHmT%2BeROvWWouXtJCG0uH9MkCW5vapD1%2BuJSNh58OL%2FLIAHzGtHLBFyEadg9MQH4cARgFec40LOJ9F2BLb4oVTNigq&X-Amz-Signature=3ccd63030c86691f9f22be3f84a7c3ee18dcaac2d0aae4dfcbbe9e92f8dd8f17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFVPCKVQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAV6oWEWxrl0bBS%2BfzqACEYXCisACRta9s%2BUXHybggu1AiEAqH8gQuQfv0CcwnKH7dCgGMCWXmF33YVfmN6cNRPZFWYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDHSmWgg%2BS%2BTqJRA%2BMyrcA4yD7SCif3kubsol9n7ZzGReKa6turRB1%2F1Qu7qRAOpNHV7jFmfSo0P8gzsK3OxKclhURkHMa4Q6wVg%2B%2FNm1uyASzLPneiCI9wQOXO%2FmxVAprRuWtDuGa5v03j%2FCGJKtrkAuVMcncFYDfOq%2FR1DmVTBCLDrsP9q1Pb7BkSBmNDpZ%2FUHLhYUr9ty9g1UnUQZuwx4dgL%2Fc1bHLjaBV6tfMyz9mqHGHKCc4uWmnlnVEX8XFNHAFjulEsxdG8FpDpo7chhZDxcKVSFzr2KI9nzvRl7xsBzCYiLgH8LRmzAf5tKWVzPhtX%2Bbf4WTyc0N1gew6Fgrlq%2FBuQ7iBFGWeXhYq4lWuf7IM6D%2FFwigw26RtpP0aH5GW3ibwOcQJ47Rho7z4EourwYcPNIQb5R%2FdoKm1k1GlNoPBjerOZY9wlL3pwJeTlla7te2dxWGxM%2F%2FgjfGXKGj0WKUEfYw8RAKedo5afJlatzd7iVDBbKYzlS4tm6nBTKvsCgZAYCLWoHi7SUMAJ3i%2Fqahm3vFxkuHq7a9S0A2b1NAp3gk%2B6Sel2L2uKsfE8B4C%2BGzR2lZ0Rkccg0LxXiSEOWDORHKeAY4lkzkeZaKgJcZq1uSkQqz%2B%2BVMZj9yQJ5fabX4w9gDTA%2F4yMO%2FX%2FsQGOqUBb0iXnKe%2FCV%2F4Y9PgqprN1bb3umdPNh8BKKXZ%2Ffe3zZGOFc3re8sVV6I%2FH%2BWNm%2FMjdTWACne%2Bq%2B2%2BRVALNS4QSENpgmAOxAmEkMw7xLyUMzpyCZaBTkPVZsEOReXOzdMQ5sRWNkdGjIhcNy0ecu1rihoHWbHJwwy6JG1ZKoiqVF%2FtnWHt3sFONR3oozsQyL68QUcG0hzhvQK13EpQbvAo8rClgN4m&X-Amz-Signature=f79e8b8a5f3b577f859a53e8a19af3586084ab48ffd5aa90f076235e9120913b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPN7UG24%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIC%2BUQiEq9DwONuyuBz%2B07gN91Vk9xR46tp3P9%2FLtnlpgAiAv7R2s4PbosG4SFfxuf%2F15DIVEr0%2Fw0WxUq%2BDJwh4%2F1Sr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIM19r3%2BoqmhLhMRO%2FxKtwDqiQY1paJs4Nf7AWl2RwWnAQt3miUocXwjWzpG5TYD%2Ftx1sJy2kP445APEn5gx%2F6hUPITatATjVKyXFZ0B5Ms8rnVXvT3Ks5mXzs6LB3D4N8oEab2xy7R%2BSTIW6mWGwB3kyHXxlKPVSF1DS2LveeNkZAaNzd6Um6bNVHahqScPHaBcNe1lMVM4lmVQ8dkPW1OpaQtImVnofF4lT%2BbJLP5ZqLQmX9CLOBw9208tg1C2WPWrEONOIzHNks3nGKiYnpCvgpJedETBtvxUAz2xnhZg%2BBijRbM4n%2FcT4%2B8xij9F8Y1gteXuIdcYmfeo4Bsh6bABeeHvLAq3dlBwB%2BDa9xzGPAI2il%2BiXsMV3oGgYjnGAK%2FiVPfEiKoPx4ybZY53LhgxGcUEHEurVliS%2BRp4gJKX3J0TWRur3Oq5CssQpcnUAqMxk7GScfYl7gFHg2DnpBfVkwIdGku15T0qW0BafAxG7oDnCS7YABM7OZ4mBcteBbJd20KTBpR22H552bzB80sV%2B3jEQtoHzI83zYZkWWnbLHLzXws3%2BE9xbvDHW6DdPvoMi0ZvCo8zX7qxdgffY7jHZfRALDCMfQoVrG363I3%2BKDHuvwakMn%2BWp8KLF1Xf1w7chqoCEfixIRZlA4w%2B9f%2BxAY6pgHwMbo%2FTjsUadLrCHZfG3CHv270sqmgoIUuzzwQE%2FWFi%2BToB1DqR1%2B1rbzvqUDxiFy2AB3%2Blt10zQG2oHqevhsslaogbFpPuOiBMNMFts58vYyCgJaj%2B8Utuez1EMBZYD6bM3ySQDcptjNYezm7Jy8RAD7pXhx6yHxbFe7iaSyJ0fWoqO2bCPNw2DGoVnkSBjz6otZXI%2BjxC%2BwIDLHjXipcwWUOJFBZ&X-Amz-Signature=1e6dd59a9ac50423be9e27765deef1adb0b8a68fecb7cc4e753fc73dbe3821d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFXBPFEG%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICLrYA4%2FfQ82r5VlnAAIXj8ICgK5R2vouDIuOjM3fmzPAiEA1uymsxfVAkUEcoQu1GIPY3gOdimUL9kjQuAwSf6dIusq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKkJPIrQaHBuzlBH3CrcA3568yWghc2Bj8kl4DXLPqMGOskg%2BytBefkDF0%2Bg4oqAloUki2wdg8JIS2VGB7hpVrXX%2Fyf%2F9kEUDycsqdyntGn5iFq9sWPIs0DqybgCLVEcs2L62jp%2BCwKn%2FjTYIKs4yqKMwHOVQy6A0F0aIkYxGIq2BcNXM1Fa9PWbTtVK0FEpobEu7kgwaUptyhdlykCeKpYXUyeu5Lm4Q7DIPg602c1fVvganc6%2FJiPzwaTalFPODQJkwevwICVEnxesHcuoVqp473Yz1fwClsYoukxZdoEFF7P54tnUpQ7XYbhSY5n7Jr%2FPygZgOSCEiQG9yNEOaVB8041MOZkcVcz5hGYj5YR%2BS0koGR9cN09FJ00c3qj8h6Gl2%2BNGn12CrtOro2H8WopDsk9sCTwQ2slbSwtC3qXFsDiik9QzEbc7vp6pFqZZBnyrj2GvwVRJMuvTQcsYTIxuf6AxZRshDO7Kj2kexzRTJtjYiMza3gA%2FlQCoR9mLiFAu82lvnWdlzA%2FHHHOZLE2CJqGwTf8n%2BUrl7l2jTxeD5zk1p8ura2imVoh%2FuU3nS49onSFCnaxbvoSR5mHGNbrrM5XFYkanogwRMwdbjoRVR5VQ17NxbxWjqrLPrGEpMasdQPV7zmXqrECGMKjY%2FsQGOqUBnhf1a9tgdHUg%2FNyHT1pgtc3fx6yo5qwP3WHTS0gH9569Y%2B3mbOQ9P6BGYEy0mqU%2BBRCCSYnzKQjHMf2IyApc%2FD2vuZjL26X4g34FYmKxE941uMxrfOFvu3zRTHD97qhFJa%2FABj9uHYRDDvpcfUe5l3Vb33TFTkKC5K9jHcXqJ3XcePc%2FVUQqZ1U5Ugq31frGm2Fr41WRIHw62BlMuJ96GR9987YH&X-Amz-Signature=5432b0f1d62299886c79257898587efc0a57a7b342b415f7cbd99eba4f1810c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623OXIV7L%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCx7dchxhCfyL%2BdOGJU3yqHAmfsFowbvluzBsJtpQdOWAIgGC7e2bkBkbez0Ng7iC89lJeevivSbqOMLT2T8xw0O5wq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDESMpq5AEYOtCVRVfCrcA4dEzFU70l%2BtP47jKDAvK5BZnrphYF5Xls3eKWlmOnnnq67pLWM%2BS7yfWcbcfybMuorZ5qqLsjPIl7B0XzqL17D9U5jTrzxCk8puzozl1jdPT6uJsLmHlxqZfRfpMHqTvi4X1vkhFvbqxtsOBXKGK0SwnSCuQzk1DqsgxlqRt00uBx4%2F%2B9fLzJEFwYf8F1JlK%2FogCagaK0zW0LkcOU3ehhpcVJVWneCx12m1gnwJKQzdyjvQqGeB61ZNBE9oo%2FT4k6xOq%2FFUhGOlm0DdIFFYd4Ocd9GrJYsR9YdvRhMfuQiXwkTYI8rgH4HuNx4jtYJS%2Foa%2FOqXGOiYz6D2sjtPfDhBLvXmq7yE5sL1XGrFuNFD33i7bnxg7lyksWzXncm2CDKMcpXb6%2BsaRy45Zi5GWNPbMwVxvp0O%2BOdfxeZCxqer0qbZNI3HQfFi4t49MQdTMzwP2sOSLuHePjWR%2FwMUENYUErCobO3w68OFaJNWKSC1%2BeLd9FacQXLBopMcDurtHxDMPotcRgxdDpWXJNd2cDAReDX62sQmQ2S4fdXgc6tK22JPgKrjKQo4tzxJbDNPY4YcGrusBy0Kzu8uXk%2B9wE%2BsrbhNt86qLDM9jMbxYupp3OfY5dVXOmTjVQYG%2BMITY%2FsQGOqUBes9yJ3sCF66l9yT8bl45smbX6%2Ff53KDgUsT1h7gZoHjkX63k9VFOWxnC4cFMrSQFh2BdyNC84iLA2S4YvVh2yPbjPrM75rEEFIEEkP0cYvucs2fzSrkHjfk4cNNo3EGl57kKp4wOsrxrwfghajC%2FDXZ8Fq8N1pV7hvRSgXJWZFflkXDa%2BHyZdXmHx48JR80tKi%2B3A2q11SZox1v7foCIa7objncN&X-Amz-Signature=81e03b33104a0708f7d1a6cad5fab3a3e619f810dc137923b311cc71a0528242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632OHZIKE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDBUI8k92dPuqwlDwAzUUUFpXbsMfhor89AJVSdV77rhAIhAMMa646Ml4Q3dKgOnYThL6bypaFQkOJO6F3aEP2emcehKv8DCGcQABoMNjM3NDIzMTgzODA1IgyDixpUMz%2BlVe33L1sq3AO2Nk9u6apyKnMWi6eO%2BqqmsGuoJ6Fut33%2FLRgiORblraPgAfX7TLmTyNZzKtHZqG3fzBjXaNHGD9L0Z1TEaoW84Vo6BqhcS4AKxZQklSpLhVMuhMofN1pj7CRWUcZwT9futSoKcdhcmxtDE4Nttq%2FwlzFMHyHrFOhSWLMiTn5bE2nPv0Nowohqf2bXkYdiR7S%2FSNPUDPQ8rzzOAnMI1LqY79N1DMMIhXuFtMWHQw%2FKuT1SWwfVdRFmu8hMx5PCGVUV8Bj26ghJXF63t4%2FbgUtOyp0E5BSDEKksRgEJxh7tK%2Flk%2Fx3HU3LqSb50VFdMf9cSZwHHLrUf1xMJ6Gcd2UAUgA4XMLz3w7swS5qa9Nw3pGsJouda2xI3109Im6hDHEy%2Bd2r8ZNw0Jwth%2FTT6P6fgA6BosIszKDbFQB9Glpxl4V82mRkMPFjcj56VAy6syGCFcyPL2te3RPV3QVrxfoPEraMVIIs9A0lRgTgsZO04rAnlKjOqxsSNhIERqgoeFlPTKQqPhFCXu0vWK8YDTsVMEnkXJo5i33%2FJ135Y7iVcRy4nzprqVQmQbl46J6p%2Bx4xFaNiKqeIvhsFib6H4HzQ1YBaAJjOsNclWVMBRQHkiCi9TfISPjVVgcvnP7DD%2B1%2F7EBjqkAQi1JSSIolYRun2Zrpdt6DUcnZYWqLrgDTAHnf9Wa3JAOqCBdxnK%2FVSMfSIweG3liD5Rz0A97qPm0yZUEC1ZszfBbLgzLYZIDt4GcZtzxCdKuptS66BPToUHxBFfRd4pPNxB8Vor8keI8jxbHSpYP5rSgBuc3h2TrfJiI47k6LL%2F04aE26rJLuO1hMgUOiCthzxc1yfYNSeYSZCVQFqKzg8hFryU&X-Amz-Signature=179c0b025b8a06f98a1fbea881f62442673f68b9838fca176531bad4b671460a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJR5YJ55%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDuCcsH1Uh%2FvdCqSA2kwlE7Wd1QaNyYkuM42EqWJLftXAIhAID%2B%2BeFSN%2Bej0R7VbBngzP9wpv520vPndGWYDyR2f4RVKv8DCGcQABoMNjM3NDIzMTgzODA1IgwyimK%2F49txUIoN0noq3APjYG95hlE1QHWA8Umyhbnfw0MY9rIvYKjqV5YplPNUI%2B5rgliAYsZUz%2FEK34TacfR2pOwtAjVzsvA0lbIxNrIUn5JoLLoebbWW6Ik3o3d2GUJLJ%2BxdCtpow8kCCoG%2F%2Fc1%2Fq%2BsoXEE0eDxhzylSNDNjXq4WnbgD4EORpHETAA1%2FG6M%2BTuE1kVwhn58KthPH%2Fuy0LYmKXUsBdGtuySdx5b3A4iaMq4YKVy2qSUJGhZCo2Piqc7k1X4oSwKvbuK4od6Mk41fykXn8ZrZj6BgisnjaaHGZ%2FbMaRhXkkq1F%2BwIk4bXfJgRvpuJnRZ1azoKjYeQd0Lwik%2BvYs6ck3VvDeyimBsnQ0WCfInfBd64cXBovJn0JBsQ8kk2EtLSwnEjNY3cAU784z%2Bn2D3jsKUqFq8dt5oPimV6RJJJloZY5riHF0gZo9Uxh9nisr1g8vG0M4LD2XtofZPByQRgNkftDPawwHPR5Hufb5TEDEuRN0%2FwU%2B26ICqhD%2FXecB%2BdV9lIHlQY4slrUDV7JP9yK647dMmfHMnwluZp%2FIT4FaTsyeznO4mBCDbg%2B3p53h0cMx4dmdvNGOXEzEq%2BVpMpu1wVVq2Y%2F3qIs7P6nJr2gDxCyCvWHOX1185eKX28ChP49CjCR2P7EBjqkARTgvj5%2BAQwhu2kFUrsm0Bxvym0Xji5nKci1%2B4LPYEevSl5QD2kjMhPPgslM0%2B0bbnNkfI%2BoLSzqgS3KSJeXnns%2FPlEkqXax57g0Or0bG977vwBgeUkq0oeat1d1GF0kSg4L99raO67rRO9Itvq2qvzXBvvlISxNf3TfZRuV4OSFSj%2BmN6NdFTC2I0dn%2BEpsCWkv1Ur3aNC7t8Wm4BdMqloFIunP&X-Amz-Signature=8cabe3437e79667f40fb08e33a8d265c079f0b7c0a9b55be94de0d2aed8747e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFVPCKVQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAV6oWEWxrl0bBS%2BfzqACEYXCisACRta9s%2BUXHybggu1AiEAqH8gQuQfv0CcwnKH7dCgGMCWXmF33YVfmN6cNRPZFWYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDHSmWgg%2BS%2BTqJRA%2BMyrcA4yD7SCif3kubsol9n7ZzGReKa6turRB1%2F1Qu7qRAOpNHV7jFmfSo0P8gzsK3OxKclhURkHMa4Q6wVg%2B%2FNm1uyASzLPneiCI9wQOXO%2FmxVAprRuWtDuGa5v03j%2FCGJKtrkAuVMcncFYDfOq%2FR1DmVTBCLDrsP9q1Pb7BkSBmNDpZ%2FUHLhYUr9ty9g1UnUQZuwx4dgL%2Fc1bHLjaBV6tfMyz9mqHGHKCc4uWmnlnVEX8XFNHAFjulEsxdG8FpDpo7chhZDxcKVSFzr2KI9nzvRl7xsBzCYiLgH8LRmzAf5tKWVzPhtX%2Bbf4WTyc0N1gew6Fgrlq%2FBuQ7iBFGWeXhYq4lWuf7IM6D%2FFwigw26RtpP0aH5GW3ibwOcQJ47Rho7z4EourwYcPNIQb5R%2FdoKm1k1GlNoPBjerOZY9wlL3pwJeTlla7te2dxWGxM%2F%2FgjfGXKGj0WKUEfYw8RAKedo5afJlatzd7iVDBbKYzlS4tm6nBTKvsCgZAYCLWoHi7SUMAJ3i%2Fqahm3vFxkuHq7a9S0A2b1NAp3gk%2B6Sel2L2uKsfE8B4C%2BGzR2lZ0Rkccg0LxXiSEOWDORHKeAY4lkzkeZaKgJcZq1uSkQqz%2B%2BVMZj9yQJ5fabX4w9gDTA%2F4yMO%2FX%2FsQGOqUBb0iXnKe%2FCV%2F4Y9PgqprN1bb3umdPNh8BKKXZ%2Ffe3zZGOFc3re8sVV6I%2FH%2BWNm%2FMjdTWACne%2Bq%2B2%2BRVALNS4QSENpgmAOxAmEkMw7xLyUMzpyCZaBTkPVZsEOReXOzdMQ5sRWNkdGjIhcNy0ecu1rihoHWbHJwwy6JG1ZKoiqVF%2FtnWHt3sFONR3oozsQyL68QUcG0hzhvQK13EpQbvAo8rClgN4m&X-Amz-Signature=b03d7f3d1ddbcc11f430c857462cc2567a8fd80b30e85e5e3ce40467fda0cfd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFVPCKVQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAV6oWEWxrl0bBS%2BfzqACEYXCisACRta9s%2BUXHybggu1AiEAqH8gQuQfv0CcwnKH7dCgGMCWXmF33YVfmN6cNRPZFWYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDHSmWgg%2BS%2BTqJRA%2BMyrcA4yD7SCif3kubsol9n7ZzGReKa6turRB1%2F1Qu7qRAOpNHV7jFmfSo0P8gzsK3OxKclhURkHMa4Q6wVg%2B%2FNm1uyASzLPneiCI9wQOXO%2FmxVAprRuWtDuGa5v03j%2FCGJKtrkAuVMcncFYDfOq%2FR1DmVTBCLDrsP9q1Pb7BkSBmNDpZ%2FUHLhYUr9ty9g1UnUQZuwx4dgL%2Fc1bHLjaBV6tfMyz9mqHGHKCc4uWmnlnVEX8XFNHAFjulEsxdG8FpDpo7chhZDxcKVSFzr2KI9nzvRl7xsBzCYiLgH8LRmzAf5tKWVzPhtX%2Bbf4WTyc0N1gew6Fgrlq%2FBuQ7iBFGWeXhYq4lWuf7IM6D%2FFwigw26RtpP0aH5GW3ibwOcQJ47Rho7z4EourwYcPNIQb5R%2FdoKm1k1GlNoPBjerOZY9wlL3pwJeTlla7te2dxWGxM%2F%2FgjfGXKGj0WKUEfYw8RAKedo5afJlatzd7iVDBbKYzlS4tm6nBTKvsCgZAYCLWoHi7SUMAJ3i%2Fqahm3vFxkuHq7a9S0A2b1NAp3gk%2B6Sel2L2uKsfE8B4C%2BGzR2lZ0Rkccg0LxXiSEOWDORHKeAY4lkzkeZaKgJcZq1uSkQqz%2B%2BVMZj9yQJ5fabX4w9gDTA%2F4yMO%2FX%2FsQGOqUBb0iXnKe%2FCV%2F4Y9PgqprN1bb3umdPNh8BKKXZ%2Ffe3zZGOFc3re8sVV6I%2FH%2BWNm%2FMjdTWACne%2Bq%2B2%2BRVALNS4QSENpgmAOxAmEkMw7xLyUMzpyCZaBTkPVZsEOReXOzdMQ5sRWNkdGjIhcNy0ecu1rihoHWbHJwwy6JG1ZKoiqVF%2FtnWHt3sFONR3oozsQyL68QUcG0hzhvQK13EpQbvAo8rClgN4m&X-Amz-Signature=23748a92512371735dfd02f04ecc1b07cfe3c9e1c8df7ef66d5eded3ab2dbdad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WULUGM5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDryiD2GSS%2Bdkn7Ng9xsqIq92sY3qBAlbwS4VXNggK0rwIhAOX1AxDWQl4iVSw9lHTUFKbsQBqJSDJf8Ne7mkZiiCI1Kv8DCGcQABoMNjM3NDIzMTgzODA1IgxPopVDzdKx0ilx6QUq3APIvKkFGRTjiip0Qaj5Y5%2B5w0jmy94KlQxTpS73i%2BFC%2FudQHZhuvhJ9yh8QIJDHWyKuBJiVkcQgPauPKHtrxSsvVS73vyef83k2B9CQjRTp10wiA5bqwSeCRYoawhJNbRYcNTNiNhkd3JJzbS7F2YcTXKOKtIshoPRseWoE0Fx2tUal%2F0BLQ5Kbx2LIFLp2f7PuCaqr6I4L8x6MKQRZBlDb1Dm9szyxMoSNT%2Ft81%2BQmlFz2QS8tVMV5c0%2Fz7dwXmW3sGJJ%2FBQPiKFodG5FiDM0d%2Fjaj%2F5kzPWQHU53l9DalE8FWeV4vAq3tf72lIF5jRsGTZwJTas9aSZ4ivndwy9u9sPZcgnnxv7GEsJfp74%2BtoL%2F4DZ52aaZqqm4ho9pl%2B8DmPlew4CqWZin5cdY7m%2FzyhJ%2BzBUMG2t0Q5SAZuS6uzccLaBXTiDFx0e3fmnK2aqTTYyg5DIzujrHe6QsvoUbcHpIZezg0qvHXS9ZPTA90BEA%2BJPi%2Br8%2B6wej96t94LnNOG6n3kudNP88WRBFSgCWjevgs4pDJo90I4IUFM4k7QiHpE73iN6GYZxuetElmhm2PGSmFik7AYItdZa5BtE0kpRJYx5SQDomKZBkwmPs7YNGOvcJkEZ7J8J89UjCh2P7EBjqkAeCPkdqTln34cAAziPwGcCfkSotg3VyRjS3ihYN6cx4rpJOMLHQV9Fk80hzXIrUtebl11yS7Sgumy3gGtY6zl7zUXUE9IUyVrDU16cMoGpYdmGpS3ggaZgQJT%2BMraNTPA2dNmjAeb%2BoKrYBdf%2Bjua2YFmGMvUZqGvmUsmsyqXCL6ye43gw2%2BVFyM%2FBeCul9gAOstXdxHFe6U7CEh5FeT7HMIw2sW&X-Amz-Signature=6a383d85b425a7fcbd67a171dd1a3ef9507d76aa812ddd3bd43f2b27b4b790c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WULUGM5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDryiD2GSS%2Bdkn7Ng9xsqIq92sY3qBAlbwS4VXNggK0rwIhAOX1AxDWQl4iVSw9lHTUFKbsQBqJSDJf8Ne7mkZiiCI1Kv8DCGcQABoMNjM3NDIzMTgzODA1IgxPopVDzdKx0ilx6QUq3APIvKkFGRTjiip0Qaj5Y5%2B5w0jmy94KlQxTpS73i%2BFC%2FudQHZhuvhJ9yh8QIJDHWyKuBJiVkcQgPauPKHtrxSsvVS73vyef83k2B9CQjRTp10wiA5bqwSeCRYoawhJNbRYcNTNiNhkd3JJzbS7F2YcTXKOKtIshoPRseWoE0Fx2tUal%2F0BLQ5Kbx2LIFLp2f7PuCaqr6I4L8x6MKQRZBlDb1Dm9szyxMoSNT%2Ft81%2BQmlFz2QS8tVMV5c0%2Fz7dwXmW3sGJJ%2FBQPiKFodG5FiDM0d%2Fjaj%2F5kzPWQHU53l9DalE8FWeV4vAq3tf72lIF5jRsGTZwJTas9aSZ4ivndwy9u9sPZcgnnxv7GEsJfp74%2BtoL%2F4DZ52aaZqqm4ho9pl%2B8DmPlew4CqWZin5cdY7m%2FzyhJ%2BzBUMG2t0Q5SAZuS6uzccLaBXTiDFx0e3fmnK2aqTTYyg5DIzujrHe6QsvoUbcHpIZezg0qvHXS9ZPTA90BEA%2BJPi%2Br8%2B6wej96t94LnNOG6n3kudNP88WRBFSgCWjevgs4pDJo90I4IUFM4k7QiHpE73iN6GYZxuetElmhm2PGSmFik7AYItdZa5BtE0kpRJYx5SQDomKZBkwmPs7YNGOvcJkEZ7J8J89UjCh2P7EBjqkAeCPkdqTln34cAAziPwGcCfkSotg3VyRjS3ihYN6cx4rpJOMLHQV9Fk80hzXIrUtebl11yS7Sgumy3gGtY6zl7zUXUE9IUyVrDU16cMoGpYdmGpS3ggaZgQJT%2BMraNTPA2dNmjAeb%2BoKrYBdf%2Bjua2YFmGMvUZqGvmUsmsyqXCL6ye43gw2%2BVFyM%2FBeCul9gAOstXdxHFe6U7CEh5FeT7HMIw2sW&X-Amz-Signature=e85afbb2f26d080cf604e277341adfb1d5b75d6c2c65b62543a4b484fdd2e77b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WULUGM5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDryiD2GSS%2Bdkn7Ng9xsqIq92sY3qBAlbwS4VXNggK0rwIhAOX1AxDWQl4iVSw9lHTUFKbsQBqJSDJf8Ne7mkZiiCI1Kv8DCGcQABoMNjM3NDIzMTgzODA1IgxPopVDzdKx0ilx6QUq3APIvKkFGRTjiip0Qaj5Y5%2B5w0jmy94KlQxTpS73i%2BFC%2FudQHZhuvhJ9yh8QIJDHWyKuBJiVkcQgPauPKHtrxSsvVS73vyef83k2B9CQjRTp10wiA5bqwSeCRYoawhJNbRYcNTNiNhkd3JJzbS7F2YcTXKOKtIshoPRseWoE0Fx2tUal%2F0BLQ5Kbx2LIFLp2f7PuCaqr6I4L8x6MKQRZBlDb1Dm9szyxMoSNT%2Ft81%2BQmlFz2QS8tVMV5c0%2Fz7dwXmW3sGJJ%2FBQPiKFodG5FiDM0d%2Fjaj%2F5kzPWQHU53l9DalE8FWeV4vAq3tf72lIF5jRsGTZwJTas9aSZ4ivndwy9u9sPZcgnnxv7GEsJfp74%2BtoL%2F4DZ52aaZqqm4ho9pl%2B8DmPlew4CqWZin5cdY7m%2FzyhJ%2BzBUMG2t0Q5SAZuS6uzccLaBXTiDFx0e3fmnK2aqTTYyg5DIzujrHe6QsvoUbcHpIZezg0qvHXS9ZPTA90BEA%2BJPi%2Br8%2B6wej96t94LnNOG6n3kudNP88WRBFSgCWjevgs4pDJo90I4IUFM4k7QiHpE73iN6GYZxuetElmhm2PGSmFik7AYItdZa5BtE0kpRJYx5SQDomKZBkwmPs7YNGOvcJkEZ7J8J89UjCh2P7EBjqkAeCPkdqTln34cAAziPwGcCfkSotg3VyRjS3ihYN6cx4rpJOMLHQV9Fk80hzXIrUtebl11yS7Sgumy3gGtY6zl7zUXUE9IUyVrDU16cMoGpYdmGpS3ggaZgQJT%2BMraNTPA2dNmjAeb%2BoKrYBdf%2Bjua2YFmGMvUZqGvmUsmsyqXCL6ye43gw2%2BVFyM%2FBeCul9gAOstXdxHFe6U7CEh5FeT7HMIw2sW&X-Amz-Signature=6a005cb2248fb100d080eaf9441a98998261d230c7133bcfffdaab0533c63b77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WULUGM5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDryiD2GSS%2Bdkn7Ng9xsqIq92sY3qBAlbwS4VXNggK0rwIhAOX1AxDWQl4iVSw9lHTUFKbsQBqJSDJf8Ne7mkZiiCI1Kv8DCGcQABoMNjM3NDIzMTgzODA1IgxPopVDzdKx0ilx6QUq3APIvKkFGRTjiip0Qaj5Y5%2B5w0jmy94KlQxTpS73i%2BFC%2FudQHZhuvhJ9yh8QIJDHWyKuBJiVkcQgPauPKHtrxSsvVS73vyef83k2B9CQjRTp10wiA5bqwSeCRYoawhJNbRYcNTNiNhkd3JJzbS7F2YcTXKOKtIshoPRseWoE0Fx2tUal%2F0BLQ5Kbx2LIFLp2f7PuCaqr6I4L8x6MKQRZBlDb1Dm9szyxMoSNT%2Ft81%2BQmlFz2QS8tVMV5c0%2Fz7dwXmW3sGJJ%2FBQPiKFodG5FiDM0d%2Fjaj%2F5kzPWQHU53l9DalE8FWeV4vAq3tf72lIF5jRsGTZwJTas9aSZ4ivndwy9u9sPZcgnnxv7GEsJfp74%2BtoL%2F4DZ52aaZqqm4ho9pl%2B8DmPlew4CqWZin5cdY7m%2FzyhJ%2BzBUMG2t0Q5SAZuS6uzccLaBXTiDFx0e3fmnK2aqTTYyg5DIzujrHe6QsvoUbcHpIZezg0qvHXS9ZPTA90BEA%2BJPi%2Br8%2B6wej96t94LnNOG6n3kudNP88WRBFSgCWjevgs4pDJo90I4IUFM4k7QiHpE73iN6GYZxuetElmhm2PGSmFik7AYItdZa5BtE0kpRJYx5SQDomKZBkwmPs7YNGOvcJkEZ7J8J89UjCh2P7EBjqkAeCPkdqTln34cAAziPwGcCfkSotg3VyRjS3ihYN6cx4rpJOMLHQV9Fk80hzXIrUtebl11yS7Sgumy3gGtY6zl7zUXUE9IUyVrDU16cMoGpYdmGpS3ggaZgQJT%2BMraNTPA2dNmjAeb%2BoKrYBdf%2Bjua2YFmGMvUZqGvmUsmsyqXCL6ye43gw2%2BVFyM%2FBeCul9gAOstXdxHFe6U7CEh5FeT7HMIw2sW&X-Amz-Signature=89cb95911979367dc3e7b4fe98cfead2ff17cc85478418faa11fcb79f357f870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WULUGM5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDryiD2GSS%2Bdkn7Ng9xsqIq92sY3qBAlbwS4VXNggK0rwIhAOX1AxDWQl4iVSw9lHTUFKbsQBqJSDJf8Ne7mkZiiCI1Kv8DCGcQABoMNjM3NDIzMTgzODA1IgxPopVDzdKx0ilx6QUq3APIvKkFGRTjiip0Qaj5Y5%2B5w0jmy94KlQxTpS73i%2BFC%2FudQHZhuvhJ9yh8QIJDHWyKuBJiVkcQgPauPKHtrxSsvVS73vyef83k2B9CQjRTp10wiA5bqwSeCRYoawhJNbRYcNTNiNhkd3JJzbS7F2YcTXKOKtIshoPRseWoE0Fx2tUal%2F0BLQ5Kbx2LIFLp2f7PuCaqr6I4L8x6MKQRZBlDb1Dm9szyxMoSNT%2Ft81%2BQmlFz2QS8tVMV5c0%2Fz7dwXmW3sGJJ%2FBQPiKFodG5FiDM0d%2Fjaj%2F5kzPWQHU53l9DalE8FWeV4vAq3tf72lIF5jRsGTZwJTas9aSZ4ivndwy9u9sPZcgnnxv7GEsJfp74%2BtoL%2F4DZ52aaZqqm4ho9pl%2B8DmPlew4CqWZin5cdY7m%2FzyhJ%2BzBUMG2t0Q5SAZuS6uzccLaBXTiDFx0e3fmnK2aqTTYyg5DIzujrHe6QsvoUbcHpIZezg0qvHXS9ZPTA90BEA%2BJPi%2Br8%2B6wej96t94LnNOG6n3kudNP88WRBFSgCWjevgs4pDJo90I4IUFM4k7QiHpE73iN6GYZxuetElmhm2PGSmFik7AYItdZa5BtE0kpRJYx5SQDomKZBkwmPs7YNGOvcJkEZ7J8J89UjCh2P7EBjqkAeCPkdqTln34cAAziPwGcCfkSotg3VyRjS3ihYN6cx4rpJOMLHQV9Fk80hzXIrUtebl11yS7Sgumy3gGtY6zl7zUXUE9IUyVrDU16cMoGpYdmGpS3ggaZgQJT%2BMraNTPA2dNmjAeb%2BoKrYBdf%2Bjua2YFmGMvUZqGvmUsmsyqXCL6ye43gw2%2BVFyM%2FBeCul9gAOstXdxHFe6U7CEh5FeT7HMIw2sW&X-Amz-Signature=5ccf648fc251de8de0f0082df5842ba8c07ebc7751c9cc7da2f59f81f46d4ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WULUGM5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDryiD2GSS%2Bdkn7Ng9xsqIq92sY3qBAlbwS4VXNggK0rwIhAOX1AxDWQl4iVSw9lHTUFKbsQBqJSDJf8Ne7mkZiiCI1Kv8DCGcQABoMNjM3NDIzMTgzODA1IgxPopVDzdKx0ilx6QUq3APIvKkFGRTjiip0Qaj5Y5%2B5w0jmy94KlQxTpS73i%2BFC%2FudQHZhuvhJ9yh8QIJDHWyKuBJiVkcQgPauPKHtrxSsvVS73vyef83k2B9CQjRTp10wiA5bqwSeCRYoawhJNbRYcNTNiNhkd3JJzbS7F2YcTXKOKtIshoPRseWoE0Fx2tUal%2F0BLQ5Kbx2LIFLp2f7PuCaqr6I4L8x6MKQRZBlDb1Dm9szyxMoSNT%2Ft81%2BQmlFz2QS8tVMV5c0%2Fz7dwXmW3sGJJ%2FBQPiKFodG5FiDM0d%2Fjaj%2F5kzPWQHU53l9DalE8FWeV4vAq3tf72lIF5jRsGTZwJTas9aSZ4ivndwy9u9sPZcgnnxv7GEsJfp74%2BtoL%2F4DZ52aaZqqm4ho9pl%2B8DmPlew4CqWZin5cdY7m%2FzyhJ%2BzBUMG2t0Q5SAZuS6uzccLaBXTiDFx0e3fmnK2aqTTYyg5DIzujrHe6QsvoUbcHpIZezg0qvHXS9ZPTA90BEA%2BJPi%2Br8%2B6wej96t94LnNOG6n3kudNP88WRBFSgCWjevgs4pDJo90I4IUFM4k7QiHpE73iN6GYZxuetElmhm2PGSmFik7AYItdZa5BtE0kpRJYx5SQDomKZBkwmPs7YNGOvcJkEZ7J8J89UjCh2P7EBjqkAeCPkdqTln34cAAziPwGcCfkSotg3VyRjS3ihYN6cx4rpJOMLHQV9Fk80hzXIrUtebl11yS7Sgumy3gGtY6zl7zUXUE9IUyVrDU16cMoGpYdmGpS3ggaZgQJT%2BMraNTPA2dNmjAeb%2BoKrYBdf%2Bjua2YFmGMvUZqGvmUsmsyqXCL6ye43gw2%2BVFyM%2FBeCul9gAOstXdxHFe6U7CEh5FeT7HMIw2sW&X-Amz-Signature=cc0adccb4c154c3357c2c9d0f8e35b81442ecb317e569cf57ba0e39a59484b3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WULUGM5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDryiD2GSS%2Bdkn7Ng9xsqIq92sY3qBAlbwS4VXNggK0rwIhAOX1AxDWQl4iVSw9lHTUFKbsQBqJSDJf8Ne7mkZiiCI1Kv8DCGcQABoMNjM3NDIzMTgzODA1IgxPopVDzdKx0ilx6QUq3APIvKkFGRTjiip0Qaj5Y5%2B5w0jmy94KlQxTpS73i%2BFC%2FudQHZhuvhJ9yh8QIJDHWyKuBJiVkcQgPauPKHtrxSsvVS73vyef83k2B9CQjRTp10wiA5bqwSeCRYoawhJNbRYcNTNiNhkd3JJzbS7F2YcTXKOKtIshoPRseWoE0Fx2tUal%2F0BLQ5Kbx2LIFLp2f7PuCaqr6I4L8x6MKQRZBlDb1Dm9szyxMoSNT%2Ft81%2BQmlFz2QS8tVMV5c0%2Fz7dwXmW3sGJJ%2FBQPiKFodG5FiDM0d%2Fjaj%2F5kzPWQHU53l9DalE8FWeV4vAq3tf72lIF5jRsGTZwJTas9aSZ4ivndwy9u9sPZcgnnxv7GEsJfp74%2BtoL%2F4DZ52aaZqqm4ho9pl%2B8DmPlew4CqWZin5cdY7m%2FzyhJ%2BzBUMG2t0Q5SAZuS6uzccLaBXTiDFx0e3fmnK2aqTTYyg5DIzujrHe6QsvoUbcHpIZezg0qvHXS9ZPTA90BEA%2BJPi%2Br8%2B6wej96t94LnNOG6n3kudNP88WRBFSgCWjevgs4pDJo90I4IUFM4k7QiHpE73iN6GYZxuetElmhm2PGSmFik7AYItdZa5BtE0kpRJYx5SQDomKZBkwmPs7YNGOvcJkEZ7J8J89UjCh2P7EBjqkAeCPkdqTln34cAAziPwGcCfkSotg3VyRjS3ihYN6cx4rpJOMLHQV9Fk80hzXIrUtebl11yS7Sgumy3gGtY6zl7zUXUE9IUyVrDU16cMoGpYdmGpS3ggaZgQJT%2BMraNTPA2dNmjAeb%2BoKrYBdf%2Bjua2YFmGMvUZqGvmUsmsyqXCL6ye43gw2%2BVFyM%2FBeCul9gAOstXdxHFe6U7CEh5FeT7HMIw2sW&X-Amz-Signature=6a005cb2248fb100d080eaf9441a98998261d230c7133bcfffdaab0533c63b77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WULUGM5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDryiD2GSS%2Bdkn7Ng9xsqIq92sY3qBAlbwS4VXNggK0rwIhAOX1AxDWQl4iVSw9lHTUFKbsQBqJSDJf8Ne7mkZiiCI1Kv8DCGcQABoMNjM3NDIzMTgzODA1IgxPopVDzdKx0ilx6QUq3APIvKkFGRTjiip0Qaj5Y5%2B5w0jmy94KlQxTpS73i%2BFC%2FudQHZhuvhJ9yh8QIJDHWyKuBJiVkcQgPauPKHtrxSsvVS73vyef83k2B9CQjRTp10wiA5bqwSeCRYoawhJNbRYcNTNiNhkd3JJzbS7F2YcTXKOKtIshoPRseWoE0Fx2tUal%2F0BLQ5Kbx2LIFLp2f7PuCaqr6I4L8x6MKQRZBlDb1Dm9szyxMoSNT%2Ft81%2BQmlFz2QS8tVMV5c0%2Fz7dwXmW3sGJJ%2FBQPiKFodG5FiDM0d%2Fjaj%2F5kzPWQHU53l9DalE8FWeV4vAq3tf72lIF5jRsGTZwJTas9aSZ4ivndwy9u9sPZcgnnxv7GEsJfp74%2BtoL%2F4DZ52aaZqqm4ho9pl%2B8DmPlew4CqWZin5cdY7m%2FzyhJ%2BzBUMG2t0Q5SAZuS6uzccLaBXTiDFx0e3fmnK2aqTTYyg5DIzujrHe6QsvoUbcHpIZezg0qvHXS9ZPTA90BEA%2BJPi%2Br8%2B6wej96t94LnNOG6n3kudNP88WRBFSgCWjevgs4pDJo90I4IUFM4k7QiHpE73iN6GYZxuetElmhm2PGSmFik7AYItdZa5BtE0kpRJYx5SQDomKZBkwmPs7YNGOvcJkEZ7J8J89UjCh2P7EBjqkAeCPkdqTln34cAAziPwGcCfkSotg3VyRjS3ihYN6cx4rpJOMLHQV9Fk80hzXIrUtebl11yS7Sgumy3gGtY6zl7zUXUE9IUyVrDU16cMoGpYdmGpS3ggaZgQJT%2BMraNTPA2dNmjAeb%2BoKrYBdf%2Bjua2YFmGMvUZqGvmUsmsyqXCL6ye43gw2%2BVFyM%2FBeCul9gAOstXdxHFe6U7CEh5FeT7HMIw2sW&X-Amz-Signature=912572bc263c3f41bc2a438cb51c2885bc68c1fed03984af73e2b0cca83bd48a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WULUGM5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDryiD2GSS%2Bdkn7Ng9xsqIq92sY3qBAlbwS4VXNggK0rwIhAOX1AxDWQl4iVSw9lHTUFKbsQBqJSDJf8Ne7mkZiiCI1Kv8DCGcQABoMNjM3NDIzMTgzODA1IgxPopVDzdKx0ilx6QUq3APIvKkFGRTjiip0Qaj5Y5%2B5w0jmy94KlQxTpS73i%2BFC%2FudQHZhuvhJ9yh8QIJDHWyKuBJiVkcQgPauPKHtrxSsvVS73vyef83k2B9CQjRTp10wiA5bqwSeCRYoawhJNbRYcNTNiNhkd3JJzbS7F2YcTXKOKtIshoPRseWoE0Fx2tUal%2F0BLQ5Kbx2LIFLp2f7PuCaqr6I4L8x6MKQRZBlDb1Dm9szyxMoSNT%2Ft81%2BQmlFz2QS8tVMV5c0%2Fz7dwXmW3sGJJ%2FBQPiKFodG5FiDM0d%2Fjaj%2F5kzPWQHU53l9DalE8FWeV4vAq3tf72lIF5jRsGTZwJTas9aSZ4ivndwy9u9sPZcgnnxv7GEsJfp74%2BtoL%2F4DZ52aaZqqm4ho9pl%2B8DmPlew4CqWZin5cdY7m%2FzyhJ%2BzBUMG2t0Q5SAZuS6uzccLaBXTiDFx0e3fmnK2aqTTYyg5DIzujrHe6QsvoUbcHpIZezg0qvHXS9ZPTA90BEA%2BJPi%2Br8%2B6wej96t94LnNOG6n3kudNP88WRBFSgCWjevgs4pDJo90I4IUFM4k7QiHpE73iN6GYZxuetElmhm2PGSmFik7AYItdZa5BtE0kpRJYx5SQDomKZBkwmPs7YNGOvcJkEZ7J8J89UjCh2P7EBjqkAeCPkdqTln34cAAziPwGcCfkSotg3VyRjS3ihYN6cx4rpJOMLHQV9Fk80hzXIrUtebl11yS7Sgumy3gGtY6zl7zUXUE9IUyVrDU16cMoGpYdmGpS3ggaZgQJT%2BMraNTPA2dNmjAeb%2BoKrYBdf%2Bjua2YFmGMvUZqGvmUsmsyqXCL6ye43gw2%2BVFyM%2FBeCul9gAOstXdxHFe6U7CEh5FeT7HMIw2sW&X-Amz-Signature=4decc2ac115405ebfaa90ac65669629e69c93136867fedab3b6f375b988ac4c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WULUGM5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDryiD2GSS%2Bdkn7Ng9xsqIq92sY3qBAlbwS4VXNggK0rwIhAOX1AxDWQl4iVSw9lHTUFKbsQBqJSDJf8Ne7mkZiiCI1Kv8DCGcQABoMNjM3NDIzMTgzODA1IgxPopVDzdKx0ilx6QUq3APIvKkFGRTjiip0Qaj5Y5%2B5w0jmy94KlQxTpS73i%2BFC%2FudQHZhuvhJ9yh8QIJDHWyKuBJiVkcQgPauPKHtrxSsvVS73vyef83k2B9CQjRTp10wiA5bqwSeCRYoawhJNbRYcNTNiNhkd3JJzbS7F2YcTXKOKtIshoPRseWoE0Fx2tUal%2F0BLQ5Kbx2LIFLp2f7PuCaqr6I4L8x6MKQRZBlDb1Dm9szyxMoSNT%2Ft81%2BQmlFz2QS8tVMV5c0%2Fz7dwXmW3sGJJ%2FBQPiKFodG5FiDM0d%2Fjaj%2F5kzPWQHU53l9DalE8FWeV4vAq3tf72lIF5jRsGTZwJTas9aSZ4ivndwy9u9sPZcgnnxv7GEsJfp74%2BtoL%2F4DZ52aaZqqm4ho9pl%2B8DmPlew4CqWZin5cdY7m%2FzyhJ%2BzBUMG2t0Q5SAZuS6uzccLaBXTiDFx0e3fmnK2aqTTYyg5DIzujrHe6QsvoUbcHpIZezg0qvHXS9ZPTA90BEA%2BJPi%2Br8%2B6wej96t94LnNOG6n3kudNP88WRBFSgCWjevgs4pDJo90I4IUFM4k7QiHpE73iN6GYZxuetElmhm2PGSmFik7AYItdZa5BtE0kpRJYx5SQDomKZBkwmPs7YNGOvcJkEZ7J8J89UjCh2P7EBjqkAeCPkdqTln34cAAziPwGcCfkSotg3VyRjS3ihYN6cx4rpJOMLHQV9Fk80hzXIrUtebl11yS7Sgumy3gGtY6zl7zUXUE9IUyVrDU16cMoGpYdmGpS3ggaZgQJT%2BMraNTPA2dNmjAeb%2BoKrYBdf%2Bjua2YFmGMvUZqGvmUsmsyqXCL6ye43gw2%2BVFyM%2FBeCul9gAOstXdxHFe6U7CEh5FeT7HMIw2sW&X-Amz-Signature=5a7abc4e0a9b1fde0e3227b0250ecc13c86cdd6fb2a7db391e20f95075f77467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
