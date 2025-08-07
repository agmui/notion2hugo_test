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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ37STR2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDyVK4XGS%2FI9FtTt95m0RAxhQgf5%2FLUO7DVSQVKBWFW4gIhAMY4twTaIZpL%2FVdP0FD20xSDF%2BSNRMGRpICiD%2F85nZGsKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZCWZzgquCdd80Y0Yq3AMTQPEWI%2FWbKeutSFFtOT1x7Iu55XrdRyg9X3oa5rH0rVFJYby0RHf%2BoVIVtrp%2FcrNjGkyRoJ5l9%2Ftkx4ljB4Q200BMt46KbNgm3preEdKn6g%2BaRPpjNOQ1ZCKtzYuIMrqEYa00XHYlZymluavXc3almfWMfqVAC7oXPb4JuYjPD8HJ1V1nbCeO9W7ffdCerCmcHr%2FK4L6KckutDMg8S8aXx3Im6MIbQRHJTdtHlBFVi%2FPooKOsc6%2FkuXAFbq6awMVQ6glrv2bJ8sibZu5V%2BgumPn8m9NzW8rMa97gyCAhdvvo5JBGvuOVe6Gz2Afvy23Am8pzi02%2Fa3LTVYvT2iKxXKq0nPkTnyHhTa9iXkezD16f2%2Bf8iMwahxbRh8BJPLwg7nsuws5QIshVvbN7QrkPO2CcoV0wItpCyvKElrHCPJpxEg9LGonRWLdFmwDlsd0sBfXthH41q%2FI7ub3nmZmwJeGp6kaV8qCTfi6MIU8gedVVbCkgNsxNyQy27ML0sX9rLfyO796eaAvMbJPm%2FN7CrP%2FVz6rUWDP4fHY4h8vN8adCvs9ZhYL0XpTjV87RA6BPyZCcD5m7sORK%2BAgGeqwHS7mWpLo68SKhZ8LUIV1uLIBx7SS4OynpYuvvoZDCe%2BdLEBjqkAVt%2FHPvsF5euNg1uoM09stZoneGBS3lg74Bdyo%2B%2BzMRJJVlS03ozW8DX0mw8vnAMToxI2vAlmmC0dnJeflxpIVDrrmIkGwd916gJI9Q3%2Fpc1iYuKMDO0S%2BY6OIS84dWC8ayoyhqSiZwdMWlaQyQeZC1fHMWtyHAvm%2BKfS8wpIUUILkV4JdHDvV4v6K%2BhvC7yC%2FzqiSnhlAOfiugf4WKa%2B4teSmsM&X-Amz-Signature=549ec46b1dc46d772f7a2495c808b2d6cf93dd792857bc759ab542246da9790c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ37STR2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDyVK4XGS%2FI9FtTt95m0RAxhQgf5%2FLUO7DVSQVKBWFW4gIhAMY4twTaIZpL%2FVdP0FD20xSDF%2BSNRMGRpICiD%2F85nZGsKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZCWZzgquCdd80Y0Yq3AMTQPEWI%2FWbKeutSFFtOT1x7Iu55XrdRyg9X3oa5rH0rVFJYby0RHf%2BoVIVtrp%2FcrNjGkyRoJ5l9%2Ftkx4ljB4Q200BMt46KbNgm3preEdKn6g%2BaRPpjNOQ1ZCKtzYuIMrqEYa00XHYlZymluavXc3almfWMfqVAC7oXPb4JuYjPD8HJ1V1nbCeO9W7ffdCerCmcHr%2FK4L6KckutDMg8S8aXx3Im6MIbQRHJTdtHlBFVi%2FPooKOsc6%2FkuXAFbq6awMVQ6glrv2bJ8sibZu5V%2BgumPn8m9NzW8rMa97gyCAhdvvo5JBGvuOVe6Gz2Afvy23Am8pzi02%2Fa3LTVYvT2iKxXKq0nPkTnyHhTa9iXkezD16f2%2Bf8iMwahxbRh8BJPLwg7nsuws5QIshVvbN7QrkPO2CcoV0wItpCyvKElrHCPJpxEg9LGonRWLdFmwDlsd0sBfXthH41q%2FI7ub3nmZmwJeGp6kaV8qCTfi6MIU8gedVVbCkgNsxNyQy27ML0sX9rLfyO796eaAvMbJPm%2FN7CrP%2FVz6rUWDP4fHY4h8vN8adCvs9ZhYL0XpTjV87RA6BPyZCcD5m7sORK%2BAgGeqwHS7mWpLo68SKhZ8LUIV1uLIBx7SS4OynpYuvvoZDCe%2BdLEBjqkAVt%2FHPvsF5euNg1uoM09stZoneGBS3lg74Bdyo%2B%2BzMRJJVlS03ozW8DX0mw8vnAMToxI2vAlmmC0dnJeflxpIVDrrmIkGwd916gJI9Q3%2Fpc1iYuKMDO0S%2BY6OIS84dWC8ayoyhqSiZwdMWlaQyQeZC1fHMWtyHAvm%2BKfS8wpIUUILkV4JdHDvV4v6K%2BhvC7yC%2FzqiSnhlAOfiugf4WKa%2B4teSmsM&X-Amz-Signature=88d9e9d4e72fa87111c84a2f253b26a960486834fd223746e593bebd6ccd70f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ37STR2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDyVK4XGS%2FI9FtTt95m0RAxhQgf5%2FLUO7DVSQVKBWFW4gIhAMY4twTaIZpL%2FVdP0FD20xSDF%2BSNRMGRpICiD%2F85nZGsKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZCWZzgquCdd80Y0Yq3AMTQPEWI%2FWbKeutSFFtOT1x7Iu55XrdRyg9X3oa5rH0rVFJYby0RHf%2BoVIVtrp%2FcrNjGkyRoJ5l9%2Ftkx4ljB4Q200BMt46KbNgm3preEdKn6g%2BaRPpjNOQ1ZCKtzYuIMrqEYa00XHYlZymluavXc3almfWMfqVAC7oXPb4JuYjPD8HJ1V1nbCeO9W7ffdCerCmcHr%2FK4L6KckutDMg8S8aXx3Im6MIbQRHJTdtHlBFVi%2FPooKOsc6%2FkuXAFbq6awMVQ6glrv2bJ8sibZu5V%2BgumPn8m9NzW8rMa97gyCAhdvvo5JBGvuOVe6Gz2Afvy23Am8pzi02%2Fa3LTVYvT2iKxXKq0nPkTnyHhTa9iXkezD16f2%2Bf8iMwahxbRh8BJPLwg7nsuws5QIshVvbN7QrkPO2CcoV0wItpCyvKElrHCPJpxEg9LGonRWLdFmwDlsd0sBfXthH41q%2FI7ub3nmZmwJeGp6kaV8qCTfi6MIU8gedVVbCkgNsxNyQy27ML0sX9rLfyO796eaAvMbJPm%2FN7CrP%2FVz6rUWDP4fHY4h8vN8adCvs9ZhYL0XpTjV87RA6BPyZCcD5m7sORK%2BAgGeqwHS7mWpLo68SKhZ8LUIV1uLIBx7SS4OynpYuvvoZDCe%2BdLEBjqkAVt%2FHPvsF5euNg1uoM09stZoneGBS3lg74Bdyo%2B%2BzMRJJVlS03ozW8DX0mw8vnAMToxI2vAlmmC0dnJeflxpIVDrrmIkGwd916gJI9Q3%2Fpc1iYuKMDO0S%2BY6OIS84dWC8ayoyhqSiZwdMWlaQyQeZC1fHMWtyHAvm%2BKfS8wpIUUILkV4JdHDvV4v6K%2BhvC7yC%2FzqiSnhlAOfiugf4WKa%2B4teSmsM&X-Amz-Signature=5f89463b51b2c98bd5ed661f3b3f0de9f6c6c9a09e5bcd6ddec637bc62f6982a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ37STR2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDyVK4XGS%2FI9FtTt95m0RAxhQgf5%2FLUO7DVSQVKBWFW4gIhAMY4twTaIZpL%2FVdP0FD20xSDF%2BSNRMGRpICiD%2F85nZGsKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZCWZzgquCdd80Y0Yq3AMTQPEWI%2FWbKeutSFFtOT1x7Iu55XrdRyg9X3oa5rH0rVFJYby0RHf%2BoVIVtrp%2FcrNjGkyRoJ5l9%2Ftkx4ljB4Q200BMt46KbNgm3preEdKn6g%2BaRPpjNOQ1ZCKtzYuIMrqEYa00XHYlZymluavXc3almfWMfqVAC7oXPb4JuYjPD8HJ1V1nbCeO9W7ffdCerCmcHr%2FK4L6KckutDMg8S8aXx3Im6MIbQRHJTdtHlBFVi%2FPooKOsc6%2FkuXAFbq6awMVQ6glrv2bJ8sibZu5V%2BgumPn8m9NzW8rMa97gyCAhdvvo5JBGvuOVe6Gz2Afvy23Am8pzi02%2Fa3LTVYvT2iKxXKq0nPkTnyHhTa9iXkezD16f2%2Bf8iMwahxbRh8BJPLwg7nsuws5QIshVvbN7QrkPO2CcoV0wItpCyvKElrHCPJpxEg9LGonRWLdFmwDlsd0sBfXthH41q%2FI7ub3nmZmwJeGp6kaV8qCTfi6MIU8gedVVbCkgNsxNyQy27ML0sX9rLfyO796eaAvMbJPm%2FN7CrP%2FVz6rUWDP4fHY4h8vN8adCvs9ZhYL0XpTjV87RA6BPyZCcD5m7sORK%2BAgGeqwHS7mWpLo68SKhZ8LUIV1uLIBx7SS4OynpYuvvoZDCe%2BdLEBjqkAVt%2FHPvsF5euNg1uoM09stZoneGBS3lg74Bdyo%2B%2BzMRJJVlS03ozW8DX0mw8vnAMToxI2vAlmmC0dnJeflxpIVDrrmIkGwd916gJI9Q3%2Fpc1iYuKMDO0S%2BY6OIS84dWC8ayoyhqSiZwdMWlaQyQeZC1fHMWtyHAvm%2BKfS8wpIUUILkV4JdHDvV4v6K%2BhvC7yC%2FzqiSnhlAOfiugf4WKa%2B4teSmsM&X-Amz-Signature=49457adb667971bd9840c7a5b4934c688c55ec11ea9845f8c20a819753dc1eb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ37STR2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDyVK4XGS%2FI9FtTt95m0RAxhQgf5%2FLUO7DVSQVKBWFW4gIhAMY4twTaIZpL%2FVdP0FD20xSDF%2BSNRMGRpICiD%2F85nZGsKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZCWZzgquCdd80Y0Yq3AMTQPEWI%2FWbKeutSFFtOT1x7Iu55XrdRyg9X3oa5rH0rVFJYby0RHf%2BoVIVtrp%2FcrNjGkyRoJ5l9%2Ftkx4ljB4Q200BMt46KbNgm3preEdKn6g%2BaRPpjNOQ1ZCKtzYuIMrqEYa00XHYlZymluavXc3almfWMfqVAC7oXPb4JuYjPD8HJ1V1nbCeO9W7ffdCerCmcHr%2FK4L6KckutDMg8S8aXx3Im6MIbQRHJTdtHlBFVi%2FPooKOsc6%2FkuXAFbq6awMVQ6glrv2bJ8sibZu5V%2BgumPn8m9NzW8rMa97gyCAhdvvo5JBGvuOVe6Gz2Afvy23Am8pzi02%2Fa3LTVYvT2iKxXKq0nPkTnyHhTa9iXkezD16f2%2Bf8iMwahxbRh8BJPLwg7nsuws5QIshVvbN7QrkPO2CcoV0wItpCyvKElrHCPJpxEg9LGonRWLdFmwDlsd0sBfXthH41q%2FI7ub3nmZmwJeGp6kaV8qCTfi6MIU8gedVVbCkgNsxNyQy27ML0sX9rLfyO796eaAvMbJPm%2FN7CrP%2FVz6rUWDP4fHY4h8vN8adCvs9ZhYL0XpTjV87RA6BPyZCcD5m7sORK%2BAgGeqwHS7mWpLo68SKhZ8LUIV1uLIBx7SS4OynpYuvvoZDCe%2BdLEBjqkAVt%2FHPvsF5euNg1uoM09stZoneGBS3lg74Bdyo%2B%2BzMRJJVlS03ozW8DX0mw8vnAMToxI2vAlmmC0dnJeflxpIVDrrmIkGwd916gJI9Q3%2Fpc1iYuKMDO0S%2BY6OIS84dWC8ayoyhqSiZwdMWlaQyQeZC1fHMWtyHAvm%2BKfS8wpIUUILkV4JdHDvV4v6K%2BhvC7yC%2FzqiSnhlAOfiugf4WKa%2B4teSmsM&X-Amz-Signature=d13c8f12c8a006ae44c0c2dbc764c4b290021fa418226f30e054f90c21b42a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ37STR2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDyVK4XGS%2FI9FtTt95m0RAxhQgf5%2FLUO7DVSQVKBWFW4gIhAMY4twTaIZpL%2FVdP0FD20xSDF%2BSNRMGRpICiD%2F85nZGsKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZCWZzgquCdd80Y0Yq3AMTQPEWI%2FWbKeutSFFtOT1x7Iu55XrdRyg9X3oa5rH0rVFJYby0RHf%2BoVIVtrp%2FcrNjGkyRoJ5l9%2Ftkx4ljB4Q200BMt46KbNgm3preEdKn6g%2BaRPpjNOQ1ZCKtzYuIMrqEYa00XHYlZymluavXc3almfWMfqVAC7oXPb4JuYjPD8HJ1V1nbCeO9W7ffdCerCmcHr%2FK4L6KckutDMg8S8aXx3Im6MIbQRHJTdtHlBFVi%2FPooKOsc6%2FkuXAFbq6awMVQ6glrv2bJ8sibZu5V%2BgumPn8m9NzW8rMa97gyCAhdvvo5JBGvuOVe6Gz2Afvy23Am8pzi02%2Fa3LTVYvT2iKxXKq0nPkTnyHhTa9iXkezD16f2%2Bf8iMwahxbRh8BJPLwg7nsuws5QIshVvbN7QrkPO2CcoV0wItpCyvKElrHCPJpxEg9LGonRWLdFmwDlsd0sBfXthH41q%2FI7ub3nmZmwJeGp6kaV8qCTfi6MIU8gedVVbCkgNsxNyQy27ML0sX9rLfyO796eaAvMbJPm%2FN7CrP%2FVz6rUWDP4fHY4h8vN8adCvs9ZhYL0XpTjV87RA6BPyZCcD5m7sORK%2BAgGeqwHS7mWpLo68SKhZ8LUIV1uLIBx7SS4OynpYuvvoZDCe%2BdLEBjqkAVt%2FHPvsF5euNg1uoM09stZoneGBS3lg74Bdyo%2B%2BzMRJJVlS03ozW8DX0mw8vnAMToxI2vAlmmC0dnJeflxpIVDrrmIkGwd916gJI9Q3%2Fpc1iYuKMDO0S%2BY6OIS84dWC8ayoyhqSiZwdMWlaQyQeZC1fHMWtyHAvm%2BKfS8wpIUUILkV4JdHDvV4v6K%2BhvC7yC%2FzqiSnhlAOfiugf4WKa%2B4teSmsM&X-Amz-Signature=c408103444ce25883e8e33327f55388c27ce24944baf3421c6a36cf7bf0fb3a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ37STR2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDyVK4XGS%2FI9FtTt95m0RAxhQgf5%2FLUO7DVSQVKBWFW4gIhAMY4twTaIZpL%2FVdP0FD20xSDF%2BSNRMGRpICiD%2F85nZGsKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZCWZzgquCdd80Y0Yq3AMTQPEWI%2FWbKeutSFFtOT1x7Iu55XrdRyg9X3oa5rH0rVFJYby0RHf%2BoVIVtrp%2FcrNjGkyRoJ5l9%2Ftkx4ljB4Q200BMt46KbNgm3preEdKn6g%2BaRPpjNOQ1ZCKtzYuIMrqEYa00XHYlZymluavXc3almfWMfqVAC7oXPb4JuYjPD8HJ1V1nbCeO9W7ffdCerCmcHr%2FK4L6KckutDMg8S8aXx3Im6MIbQRHJTdtHlBFVi%2FPooKOsc6%2FkuXAFbq6awMVQ6glrv2bJ8sibZu5V%2BgumPn8m9NzW8rMa97gyCAhdvvo5JBGvuOVe6Gz2Afvy23Am8pzi02%2Fa3LTVYvT2iKxXKq0nPkTnyHhTa9iXkezD16f2%2Bf8iMwahxbRh8BJPLwg7nsuws5QIshVvbN7QrkPO2CcoV0wItpCyvKElrHCPJpxEg9LGonRWLdFmwDlsd0sBfXthH41q%2FI7ub3nmZmwJeGp6kaV8qCTfi6MIU8gedVVbCkgNsxNyQy27ML0sX9rLfyO796eaAvMbJPm%2FN7CrP%2FVz6rUWDP4fHY4h8vN8adCvs9ZhYL0XpTjV87RA6BPyZCcD5m7sORK%2BAgGeqwHS7mWpLo68SKhZ8LUIV1uLIBx7SS4OynpYuvvoZDCe%2BdLEBjqkAVt%2FHPvsF5euNg1uoM09stZoneGBS3lg74Bdyo%2B%2BzMRJJVlS03ozW8DX0mw8vnAMToxI2vAlmmC0dnJeflxpIVDrrmIkGwd916gJI9Q3%2Fpc1iYuKMDO0S%2BY6OIS84dWC8ayoyhqSiZwdMWlaQyQeZC1fHMWtyHAvm%2BKfS8wpIUUILkV4JdHDvV4v6K%2BhvC7yC%2FzqiSnhlAOfiugf4WKa%2B4teSmsM&X-Amz-Signature=89a589dfc08ad78ab4e7f845dc9a0b93647058616eb5eb416a726d99359c1c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ37STR2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDyVK4XGS%2FI9FtTt95m0RAxhQgf5%2FLUO7DVSQVKBWFW4gIhAMY4twTaIZpL%2FVdP0FD20xSDF%2BSNRMGRpICiD%2F85nZGsKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZCWZzgquCdd80Y0Yq3AMTQPEWI%2FWbKeutSFFtOT1x7Iu55XrdRyg9X3oa5rH0rVFJYby0RHf%2BoVIVtrp%2FcrNjGkyRoJ5l9%2Ftkx4ljB4Q200BMt46KbNgm3preEdKn6g%2BaRPpjNOQ1ZCKtzYuIMrqEYa00XHYlZymluavXc3almfWMfqVAC7oXPb4JuYjPD8HJ1V1nbCeO9W7ffdCerCmcHr%2FK4L6KckutDMg8S8aXx3Im6MIbQRHJTdtHlBFVi%2FPooKOsc6%2FkuXAFbq6awMVQ6glrv2bJ8sibZu5V%2BgumPn8m9NzW8rMa97gyCAhdvvo5JBGvuOVe6Gz2Afvy23Am8pzi02%2Fa3LTVYvT2iKxXKq0nPkTnyHhTa9iXkezD16f2%2Bf8iMwahxbRh8BJPLwg7nsuws5QIshVvbN7QrkPO2CcoV0wItpCyvKElrHCPJpxEg9LGonRWLdFmwDlsd0sBfXthH41q%2FI7ub3nmZmwJeGp6kaV8qCTfi6MIU8gedVVbCkgNsxNyQy27ML0sX9rLfyO796eaAvMbJPm%2FN7CrP%2FVz6rUWDP4fHY4h8vN8adCvs9ZhYL0XpTjV87RA6BPyZCcD5m7sORK%2BAgGeqwHS7mWpLo68SKhZ8LUIV1uLIBx7SS4OynpYuvvoZDCe%2BdLEBjqkAVt%2FHPvsF5euNg1uoM09stZoneGBS3lg74Bdyo%2B%2BzMRJJVlS03ozW8DX0mw8vnAMToxI2vAlmmC0dnJeflxpIVDrrmIkGwd916gJI9Q3%2Fpc1iYuKMDO0S%2BY6OIS84dWC8ayoyhqSiZwdMWlaQyQeZC1fHMWtyHAvm%2BKfS8wpIUUILkV4JdHDvV4v6K%2BhvC7yC%2FzqiSnhlAOfiugf4WKa%2B4teSmsM&X-Amz-Signature=2da576fba0a3b5360efa5f40781e691e8875a5b990b22ecdaa608ab254373645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ37STR2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDyVK4XGS%2FI9FtTt95m0RAxhQgf5%2FLUO7DVSQVKBWFW4gIhAMY4twTaIZpL%2FVdP0FD20xSDF%2BSNRMGRpICiD%2F85nZGsKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZCWZzgquCdd80Y0Yq3AMTQPEWI%2FWbKeutSFFtOT1x7Iu55XrdRyg9X3oa5rH0rVFJYby0RHf%2BoVIVtrp%2FcrNjGkyRoJ5l9%2Ftkx4ljB4Q200BMt46KbNgm3preEdKn6g%2BaRPpjNOQ1ZCKtzYuIMrqEYa00XHYlZymluavXc3almfWMfqVAC7oXPb4JuYjPD8HJ1V1nbCeO9W7ffdCerCmcHr%2FK4L6KckutDMg8S8aXx3Im6MIbQRHJTdtHlBFVi%2FPooKOsc6%2FkuXAFbq6awMVQ6glrv2bJ8sibZu5V%2BgumPn8m9NzW8rMa97gyCAhdvvo5JBGvuOVe6Gz2Afvy23Am8pzi02%2Fa3LTVYvT2iKxXKq0nPkTnyHhTa9iXkezD16f2%2Bf8iMwahxbRh8BJPLwg7nsuws5QIshVvbN7QrkPO2CcoV0wItpCyvKElrHCPJpxEg9LGonRWLdFmwDlsd0sBfXthH41q%2FI7ub3nmZmwJeGp6kaV8qCTfi6MIU8gedVVbCkgNsxNyQy27ML0sX9rLfyO796eaAvMbJPm%2FN7CrP%2FVz6rUWDP4fHY4h8vN8adCvs9ZhYL0XpTjV87RA6BPyZCcD5m7sORK%2BAgGeqwHS7mWpLo68SKhZ8LUIV1uLIBx7SS4OynpYuvvoZDCe%2BdLEBjqkAVt%2FHPvsF5euNg1uoM09stZoneGBS3lg74Bdyo%2B%2BzMRJJVlS03ozW8DX0mw8vnAMToxI2vAlmmC0dnJeflxpIVDrrmIkGwd916gJI9Q3%2Fpc1iYuKMDO0S%2BY6OIS84dWC8ayoyhqSiZwdMWlaQyQeZC1fHMWtyHAvm%2BKfS8wpIUUILkV4JdHDvV4v6K%2BhvC7yC%2FzqiSnhlAOfiugf4WKa%2B4teSmsM&X-Amz-Signature=9b0de6c38363185a89722c28de1bec132886bf90cda6c51529bb659be63bd91d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ37STR2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDyVK4XGS%2FI9FtTt95m0RAxhQgf5%2FLUO7DVSQVKBWFW4gIhAMY4twTaIZpL%2FVdP0FD20xSDF%2BSNRMGRpICiD%2F85nZGsKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZCWZzgquCdd80Y0Yq3AMTQPEWI%2FWbKeutSFFtOT1x7Iu55XrdRyg9X3oa5rH0rVFJYby0RHf%2BoVIVtrp%2FcrNjGkyRoJ5l9%2Ftkx4ljB4Q200BMt46KbNgm3preEdKn6g%2BaRPpjNOQ1ZCKtzYuIMrqEYa00XHYlZymluavXc3almfWMfqVAC7oXPb4JuYjPD8HJ1V1nbCeO9W7ffdCerCmcHr%2FK4L6KckutDMg8S8aXx3Im6MIbQRHJTdtHlBFVi%2FPooKOsc6%2FkuXAFbq6awMVQ6glrv2bJ8sibZu5V%2BgumPn8m9NzW8rMa97gyCAhdvvo5JBGvuOVe6Gz2Afvy23Am8pzi02%2Fa3LTVYvT2iKxXKq0nPkTnyHhTa9iXkezD16f2%2Bf8iMwahxbRh8BJPLwg7nsuws5QIshVvbN7QrkPO2CcoV0wItpCyvKElrHCPJpxEg9LGonRWLdFmwDlsd0sBfXthH41q%2FI7ub3nmZmwJeGp6kaV8qCTfi6MIU8gedVVbCkgNsxNyQy27ML0sX9rLfyO796eaAvMbJPm%2FN7CrP%2FVz6rUWDP4fHY4h8vN8adCvs9ZhYL0XpTjV87RA6BPyZCcD5m7sORK%2BAgGeqwHS7mWpLo68SKhZ8LUIV1uLIBx7SS4OynpYuvvoZDCe%2BdLEBjqkAVt%2FHPvsF5euNg1uoM09stZoneGBS3lg74Bdyo%2B%2BzMRJJVlS03ozW8DX0mw8vnAMToxI2vAlmmC0dnJeflxpIVDrrmIkGwd916gJI9Q3%2Fpc1iYuKMDO0S%2BY6OIS84dWC8ayoyhqSiZwdMWlaQyQeZC1fHMWtyHAvm%2BKfS8wpIUUILkV4JdHDvV4v6K%2BhvC7yC%2FzqiSnhlAOfiugf4WKa%2B4teSmsM&X-Amz-Signature=5130b8b96ba97e6dada4a48677615ed3e61f40b9148d792a48aed1ab60cf6118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6PTTU5M%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQD6Bd0eKxPhwxJn6M3XOqm57Tvd5vhVI1hNc9O3OM7TjwIgL1nz7EvF8XFw%2Fi2odF20YFfxGJs1n340G9rLIDQP3tEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPP7ETUkidmFptKgircA79zRBPQafAhWX4JPyPfT%2BwtQ%2BvQLTk9MlpAhricPdklu4B7gC6jjxVAkEO3ikRZdtjVWejTwU48SJaMANw%2FY0327WlusDqFEecBRy627e4k0E4r7gWC7UCzi5tHfxR4wA6a6YQeaj9rIswMZ2fChqYKIlMbXiXl5KY4pCW2Xz%2Fm1uKLFLW1%2Fn3gRX7bJ3Vca3kc22jq2kDk0HLT%2FXhFmWgVCoTRgMNcUepej%2F4q%2F6Xn9ILval%2B0SvJAR91A3vy38EPj6mHG9UQItb11UN2F16kwXeByI8ordHWcuvSGIVm5WCZ1GdqZpt8h5O0wTxZNglnqISZ2fEwehJ50wIpTNKC6WP%2B0r2IEyR2pbPY%2Fm7EGtYiL%2Fm13L63a64%2FKa%2FW7y9lbiEiSt%2B%2FcwJHvutdORko0QyWmY1VSbJykVcLn7Nz43cug%2FLKI2aG%2B8ypg2CN8g2mXERH0tSsauaMYqwKBnvnrTiqeZKBw%2FnjC%2BLYRMJ9nBVdOcsLZ8zK2wQ9WWBTgcoAl2u1O4PSE%2BwjktcO%2B0jBoIw%2BoL%2B4U2eGjMhqFg9XvSyCkmbYSzvCURFOhgCB0lXMNSuKq46nzN1uwi2hVvuspo5n79MkmuugdBArf0B%2FWWq9LLYiY0RvE%2BxBvMO750sQGOqUBxKhbDrv%2BeT1fZGK258k1Rz%2FZHazCd%2BTtNG3OUK7I2mWM6BXJNX%2B5WHCQxgtYX9%2Fw9cxfxotzM9%2Fe26Cim8Ci8QJCTewiYxpzmQNTzYWxtx4xlb5WYt9A4HnHdTBeEFklzwJofPh%2BHURKntjJq35CqMXXPBcw0Ji0lZCwxx40uCwM99npBGicF5slv8JNBRug5wk1yXhzY3apgaxOJmH7s%2F0J5DOG&X-Amz-Signature=fe9741712373d94103953f33add166b200d0ba7c4148ce79e7d40b20cdd981ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFJYP72B%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIH9Xm7NsxaYMOaz1%2Bw9OWjLrspKuYY08U9txBwpY54ilAiA5%2BdgXlTJ07RtiHOFwMl4seOLXNpJ2LQUn%2FxesWZlY4SqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwyS8HNm3mXQfBJRKKtwDhyYEkmn28SH8YvHFlpBoL3agQ8av09zz3Dw%2BbbJcwrVrGJ48PYvFSZJRxdtLH8AuPR6w3%2BZT%2BvT8Fe%2FKHjRB%2BOtca7jGPh0SzSHRBuy8B8%2BjKiTS2EKF7cq6vLZzaA3DqJYarULl0Prnvr9UnFrcMTyMKKndsoci4Mhi5MEuxTYJxM96kc3ikRIN%2BlCf9e95davJkwgqvub15LY7tMhoJXqTE0sMU6wsLBK9yocc%2FX9vpK2mrqiwWueBletote7e5ARwnDkINyijZRm460XyQM%2BbjpamlVgTJNCbB1zGC1MXlVDNMAkLRlmWKvWhWbxjzflZiX2HTNFYVAzgz8hoQWTPnPBv%2F%2B%2FhkAvjbGWUH69nb%2BP%2BaxqJUce2Q3OsmMucRtKmRfWSUcfvzQ%2FE2SOj3cC1IE2xL%2BbNEk6lhTZZgRSonkPpVNRGGfPC3tWKZYH1UJmqsozV58VKSV1naR%2FA4sbrNeMdws6oX5BozmkzEbHSOT%2BXutgDKgrdp8eK%2F%2FWI1Ur1uHM086Etl0v%2Fzq4YKRmcTh58vBNMQ4SeR5xihAUHsv0LyZ2YG2ZNb2wuPewL1PcMdxlJpemaoIT5Deejyi94kAq%2FEG3e5LWnHKh4H7UkmlapVi2GWuim7%2F0w7%2FnSxAY6pgGBkwb5oV77eNj%2FEPpEeWVMM1C9yNJjD2M%2FrvTieWZxLyFemqC9ecdCyWjZV6MDMls3ShnkORyFwVRcR6rc0Dt6kf4bQZ651Z%2BuL2acYX0WiF7m%2F5%2B%2Fl%2BNxqW6tG9aqeXXbLIWY%2FPhcwUYHgCbihRCQ6At0xDQngLeXd8uBASVA2jWepSdntP5Fw9QAWA2%2FryhgLYZpwnFhQYgGmajSkHy2QTMuiTat&X-Amz-Signature=f73bd63df0a461416bdff1213af2f826a8b8cadba144064782f4735cf1028a8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVTJZV7N%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCQk0iHcWRub7aMJFgy2%2Fg3ALS%2F6YJU%2F4uBMqaNt6flUAIhALVmZL9MivnxLwzo9JYdqGMhVWtcqTo2ov6sEtxcb22VKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0j44xbKbNbkK9jc8q3AOajgyaIwxgU2B8lgeACrRZYMXUDFULWc3rpd%2FFul2GAjbOlzHYZYqbuTTcVf2D%2FOiaojRggZIE1NaZjMLS4zKexv1G8N0JvZ8qSnGgMVPJ7fdbw4ovcFUmiCzTmAmRBsUej7t9FVeMlK%2Fk0e6u26mnfUsGkhRXRCKhzY5SY1UmwoRSagHsUnULFHIv7wlXvb2kdMe4pxVBmAvrOZkjt8rpEvbwmT6Rk2YH5OAePzGsZtgWEkGAUA1kkS%2BHFKYHIZwb%2BacRSQEzX3HaiPMK6Q0JUK1PCtH5G2HD3sH5XIpdSuJjInGwjCNwfK1RbFNfZtN3WEzdLljHlO9FPmvnGkeVbGzcENwBOuCJk9UXseO4MPwjkW0H0ieSPRgP4irmQcI6XTDgSwSbDeq7JuNFG0sTpz%2FVCZLqDJIQRuEJiBMxFOYWzSH6aWJ4ImGXelJGfNo%2BOIxHTk8YL3%2BqZzB45wSP3VKefL3MuUKUFTVp8sobQX9SmqZf43Bfio6f4XSSY2FOuVZMA%2FmqSEDIiEXfErQVB%2BR5XsvtkwgEjp0F8bLOZW8V4qHt4V654Vod1PR1hkgNSPUjAWVYEQw1zfFeY%2FuFzaStrsMzN%2FuIqr8NFk63Yo2aR620xGQfnMZ6XTDC%2BtLEBjqkAfC%2BuEE3xINcXBxDF1mE%2BP4j%2BHJOxtVV9rN1MBtNBjfcST%2F8xXR1cQUYNT57%2BKz15WCPrZeb3qWqSr1aek78AJFdTEaERobkr3IdNyjFlB0EnJjB6OKbxxRs41F2YgehQgO1ja9n0O9q%2FGNJLVJyMPD%2BkntpTgLlmof26Qr%2B4jSrJQbFi%2BW6Ixs%2BN5NR%2BQ9C8%2BEFuOOgQ3Zix9Qj%2Frg6wK74bUPC&X-Amz-Signature=a8a8334e549a29c1f1b68037a939b01ee0e138a65555428e171b7670c3face92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ37STR2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDyVK4XGS%2FI9FtTt95m0RAxhQgf5%2FLUO7DVSQVKBWFW4gIhAMY4twTaIZpL%2FVdP0FD20xSDF%2BSNRMGRpICiD%2F85nZGsKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZCWZzgquCdd80Y0Yq3AMTQPEWI%2FWbKeutSFFtOT1x7Iu55XrdRyg9X3oa5rH0rVFJYby0RHf%2BoVIVtrp%2FcrNjGkyRoJ5l9%2Ftkx4ljB4Q200BMt46KbNgm3preEdKn6g%2BaRPpjNOQ1ZCKtzYuIMrqEYa00XHYlZymluavXc3almfWMfqVAC7oXPb4JuYjPD8HJ1V1nbCeO9W7ffdCerCmcHr%2FK4L6KckutDMg8S8aXx3Im6MIbQRHJTdtHlBFVi%2FPooKOsc6%2FkuXAFbq6awMVQ6glrv2bJ8sibZu5V%2BgumPn8m9NzW8rMa97gyCAhdvvo5JBGvuOVe6Gz2Afvy23Am8pzi02%2Fa3LTVYvT2iKxXKq0nPkTnyHhTa9iXkezD16f2%2Bf8iMwahxbRh8BJPLwg7nsuws5QIshVvbN7QrkPO2CcoV0wItpCyvKElrHCPJpxEg9LGonRWLdFmwDlsd0sBfXthH41q%2FI7ub3nmZmwJeGp6kaV8qCTfi6MIU8gedVVbCkgNsxNyQy27ML0sX9rLfyO796eaAvMbJPm%2FN7CrP%2FVz6rUWDP4fHY4h8vN8adCvs9ZhYL0XpTjV87RA6BPyZCcD5m7sORK%2BAgGeqwHS7mWpLo68SKhZ8LUIV1uLIBx7SS4OynpYuvvoZDCe%2BdLEBjqkAVt%2FHPvsF5euNg1uoM09stZoneGBS3lg74Bdyo%2B%2BzMRJJVlS03ozW8DX0mw8vnAMToxI2vAlmmC0dnJeflxpIVDrrmIkGwd916gJI9Q3%2Fpc1iYuKMDO0S%2BY6OIS84dWC8ayoyhqSiZwdMWlaQyQeZC1fHMWtyHAvm%2BKfS8wpIUUILkV4JdHDvV4v6K%2BhvC7yC%2FzqiSnhlAOfiugf4WKa%2B4teSmsM&X-Amz-Signature=0c86c9019151d4b4eb80998654bc262653f1ab3fe979f17e7d724c4a6141f284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOO3OVSZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIA2UdSbWG9hQkd7yXlz2zo5hlJ9Yf%2F%2FN7LwXyI%2FQqLZhAiBRpl5mtsuxEVBZZiSj8sur8qHSFLKgEmc%2BZ8W80PhzuyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDMaYkotErCkkWV4GKtwD73%2FeF%2B1bjDmYHvdkZDBKE2h7vd%2BvNmxiwBADctaOETKNLj9VTIYLoGZOY26%2BCy2kiaFe0IA5xyYkx7%2F%2FXLqPaTuQ9ajEweWnY%2BjZDneGJ1v5t1Riaj1h2ioCK%2BUPymHvKrYKTwSd7FtIzWZQ3NoMqT%2FOTgwSij7KOCcsb3IwnN54JCfXXnYZhvxXLEIb%2BV6E1AXpDnjhHYScfZr7x%2FzM40FVov5psCsN13YPMdQWGsRZGt1ZD5QyoPe9L0OhwooyJwfR3vI1jXxmiVcJRX%2Ft8V909iZ5G0pOA7XOEVcRenPYdRnBJuWlltM4G19PCFN%2BML9TSpTm7CSlyWOeaZN4%2FGyMjfliA9LZruna74edgvIP%2BVk0U0PFxM4Tst7HpQHlTfGJ%2Fy5XzCrDklzlpR3K8ME3Xfzzy9pbPQjDc2bB%2FxgYwwsE39rl9bI2av4TWridyUlqxV5y5Z%2FRcG3XJynvNF9n8C4TYV2io6BodoPXD6uRVJ4p7T03dhbyGN8PiwBXj9gSzs9v0S7wuLtKW6j6iqyukbC%2BBPI77zLOCtkkPFV%2FBUjkgzcYFgVtQ7lzjGuAP1gWGdkToirPmZPY0A8z88zUuSoFw1n97FZwYIa6mKcE1D2oAJ0xN1q%2Fp%2B8wkPrSxAY6pgG%2Fv3q3Rtl0jooEEOJzAiHtVby%2F51%2BLYzEWe%2FSbOnlZeiFBlUG5ngLfdqzZT1xVRc1S9Xx8bP45Ec%2BEhXDtzEB05w57sM3zRmeZxRdAH1yUSyMtRppPhYGUPeSodH0%2FuIeqi3F7MQkZPHFrplo5mqJ3ZrcPtJgxZJSClYlwNCuUrYyFBJDdxuV68fMtUTZZUtqPyuVGMCxjtldEKgQcmWTvrUMMcAmz&X-Amz-Signature=c045ae24bd8450d0f9131f4c5cfcf764a96ea866dadd4725eb3c4e213061614c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ37STR2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDyVK4XGS%2FI9FtTt95m0RAxhQgf5%2FLUO7DVSQVKBWFW4gIhAMY4twTaIZpL%2FVdP0FD20xSDF%2BSNRMGRpICiD%2F85nZGsKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZCWZzgquCdd80Y0Yq3AMTQPEWI%2FWbKeutSFFtOT1x7Iu55XrdRyg9X3oa5rH0rVFJYby0RHf%2BoVIVtrp%2FcrNjGkyRoJ5l9%2Ftkx4ljB4Q200BMt46KbNgm3preEdKn6g%2BaRPpjNOQ1ZCKtzYuIMrqEYa00XHYlZymluavXc3almfWMfqVAC7oXPb4JuYjPD8HJ1V1nbCeO9W7ffdCerCmcHr%2FK4L6KckutDMg8S8aXx3Im6MIbQRHJTdtHlBFVi%2FPooKOsc6%2FkuXAFbq6awMVQ6glrv2bJ8sibZu5V%2BgumPn8m9NzW8rMa97gyCAhdvvo5JBGvuOVe6Gz2Afvy23Am8pzi02%2Fa3LTVYvT2iKxXKq0nPkTnyHhTa9iXkezD16f2%2Bf8iMwahxbRh8BJPLwg7nsuws5QIshVvbN7QrkPO2CcoV0wItpCyvKElrHCPJpxEg9LGonRWLdFmwDlsd0sBfXthH41q%2FI7ub3nmZmwJeGp6kaV8qCTfi6MIU8gedVVbCkgNsxNyQy27ML0sX9rLfyO796eaAvMbJPm%2FN7CrP%2FVz6rUWDP4fHY4h8vN8adCvs9ZhYL0XpTjV87RA6BPyZCcD5m7sORK%2BAgGeqwHS7mWpLo68SKhZ8LUIV1uLIBx7SS4OynpYuvvoZDCe%2BdLEBjqkAVt%2FHPvsF5euNg1uoM09stZoneGBS3lg74Bdyo%2B%2BzMRJJVlS03ozW8DX0mw8vnAMToxI2vAlmmC0dnJeflxpIVDrrmIkGwd916gJI9Q3%2Fpc1iYuKMDO0S%2BY6OIS84dWC8ayoyhqSiZwdMWlaQyQeZC1fHMWtyHAvm%2BKfS8wpIUUILkV4JdHDvV4v6K%2BhvC7yC%2FzqiSnhlAOfiugf4WKa%2B4teSmsM&X-Amz-Signature=d4858a68edc30dd435ce479a7940c85c875bf2b16e4d421bba7c78f25f3c67ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLSMLXFA%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIF6GTitD39Bp%2F2nvtx5Z%2F3ADjRhDfOzaMANKFFQ84XHTAiEAs6%2B6hQnFHum%2Bs5ERzraXwNW2GiDxdqF2nSVDGRsAnosqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8bKsJyoFtq7v%2F1jyrcA3hqY3ynTGJqLgsvZhnCNXTAf%2FKnfTpYQkWrziWrg%2B03pj1yGVEyv5KilOPwiB86TAv9ejiVD4X2xn4v3%2BC5GrKLedcSAYjvX9KVccEpoTl8tB3n8Q%2F9vE1tSi1LUEn5SPGhSS9AJZgpUGfhuRTMrhRWNIybopaPDFR3mA4zSiYn6O7P%2FBF76QJiPHtv9%2FmpHzwi0yXvOymuzEHMV6u6OJUwsOyCp1603%2FiaV8mOXcyx1Y0OBw17vUJfbArs4MKiphHvE%2FuOZA%2FTjdHRE5NPuXw63%2FQuTl74cRhSkHBpk8sPkIvgLgOq5eyYbaUhoLyh7FqFEcwaivwZp0mVKjsGMwoZsQmUpL3a9Ew%2B%2BRS%2F28i84s20v2jFH4%2FVZH7J2%2FVFBZB7JH2IJct9l9OAtX%2F0SMO0JtRuZZ%2FGJxhFPNMXX7q23BW%2BnCPV8u3mSNkBWK3jlemmPggPLjYcVrZoajEiXsZp5ct3xCg1uER0DQxORTK0RoB22YFZxETEhwa70iZdwURfgVzjuhQs1qmioCk4bttmCYyMHO1giRjtXsy6Xy%2Fgw7oZgrPjdqEwgVZLOFA6Cu9CcICyf9dp9Zp2H826X%2FnDzVP9EW7dLtCN3avGxOnUPxf7ZJem%2FkYZV%2FYeMP350sQGOqUBZOeMe%2Fckvi8nRfjrD7rRdGLhrYLUSimlYwdT%2BGo3FaqAGlqzBjaE626Wlf9Aj1JN6S31TRu616agCesYMK%2F%2BbESWaaqf%2FlzFCvMnc2Vrz3v32aMW1l7SN1m3SD0aDjjxIz9vCA6MHaRkBIwPv1OrEoM7mdaPBg952f2VEqqNv2Dv%2BYIODwWvORmS9uC0WmFy953NKlcAHwwKtwb5fqsal6AEAI%2F0&X-Amz-Signature=cb6690ef5de9bcb58f773f78db6cb7289b14d9601ad2890af13e3bd201244ef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ37STR2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDyVK4XGS%2FI9FtTt95m0RAxhQgf5%2FLUO7DVSQVKBWFW4gIhAMY4twTaIZpL%2FVdP0FD20xSDF%2BSNRMGRpICiD%2F85nZGsKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZCWZzgquCdd80Y0Yq3AMTQPEWI%2FWbKeutSFFtOT1x7Iu55XrdRyg9X3oa5rH0rVFJYby0RHf%2BoVIVtrp%2FcrNjGkyRoJ5l9%2Ftkx4ljB4Q200BMt46KbNgm3preEdKn6g%2BaRPpjNOQ1ZCKtzYuIMrqEYa00XHYlZymluavXc3almfWMfqVAC7oXPb4JuYjPD8HJ1V1nbCeO9W7ffdCerCmcHr%2FK4L6KckutDMg8S8aXx3Im6MIbQRHJTdtHlBFVi%2FPooKOsc6%2FkuXAFbq6awMVQ6glrv2bJ8sibZu5V%2BgumPn8m9NzW8rMa97gyCAhdvvo5JBGvuOVe6Gz2Afvy23Am8pzi02%2Fa3LTVYvT2iKxXKq0nPkTnyHhTa9iXkezD16f2%2Bf8iMwahxbRh8BJPLwg7nsuws5QIshVvbN7QrkPO2CcoV0wItpCyvKElrHCPJpxEg9LGonRWLdFmwDlsd0sBfXthH41q%2FI7ub3nmZmwJeGp6kaV8qCTfi6MIU8gedVVbCkgNsxNyQy27ML0sX9rLfyO796eaAvMbJPm%2FN7CrP%2FVz6rUWDP4fHY4h8vN8adCvs9ZhYL0XpTjV87RA6BPyZCcD5m7sORK%2BAgGeqwHS7mWpLo68SKhZ8LUIV1uLIBx7SS4OynpYuvvoZDCe%2BdLEBjqkAVt%2FHPvsF5euNg1uoM09stZoneGBS3lg74Bdyo%2B%2BzMRJJVlS03ozW8DX0mw8vnAMToxI2vAlmmC0dnJeflxpIVDrrmIkGwd916gJI9Q3%2Fpc1iYuKMDO0S%2BY6OIS84dWC8ayoyhqSiZwdMWlaQyQeZC1fHMWtyHAvm%2BKfS8wpIUUILkV4JdHDvV4v6K%2BhvC7yC%2FzqiSnhlAOfiugf4WKa%2B4teSmsM&X-Amz-Signature=12da5edded98af8bacae90fa12408d8bacc2eb32d891bf81e8060dbf95364790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V62A5IJP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDu%2FpDiWkIQrZ1BiftnSknGJK5hsjpSXmsnMzpGsRh1KAIgRtEhgFo5lyshuQTobp8ef4yOv3EPH%2BXbbNx%2BuzX7S90qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgr82dXLN9WPoNOQyrcAy4Dqr2bXIIkNRDHacAuJV8s5IC%2FMYDqGW43%2FpCElJ0tpWOrH7VdV54t6iL4d7TdxrQd%2FcSZNY%2FwsfYCSY%2FF%2F1nZONALenUxZq3QAHx0%2FdNkSxFmxVnfsQKFabcPuyt1TSj6F9Fi0iD%2Bym7O4OoBHS7PQku3dqR17DUBOHicjT%2FuXAMnv2X9q20UyOH7P%2B6KoXmcaz%2Fwgb9D%2BMVoalaWRUWknoG%2Bn9Y2aVfUknKbWVVU%2B%2BVkTXxDW9XJVaB9yLRf%2FDPa%2FnhLIm6W6frjS8OzeGyn7zS7B%2FwJt5VMhtCuLVYywVTwVlSLbTnJEwP%2BIMq95Y21HlaKjZS7GzRWXNNz2heE7YIaxJmIK8W07YC19ED413GVjNlmFQTWT15awHd2DaW%2BgGPc7Pvk6ULZhIu2jP91VxdeVg4BEPtZGglfFBtvKurKTPoy%2FYV79ShUIAzPscPWYo%2BnSNEGlGlusFBoa40RVEqZsLutz5JbAa05bABFGCNBmtDwcpWng14Etl2n37DUKw%2FKWtC7DnAWWoNzWlOp4DbK1fd0finO6ZCYnxt8P3uM4k9g59FbP58mJw%2BzCDIFIhF4%2FsCaFpRSetJQAh9bQCvkj175f8hajUtZ3X4Ia3H8bmTKnRBwNHCSMMv60sQGOqUB5BauYpYprXeYPGTFBuyYiIfQLpd53U6qDU%2FdcqTjYf0hnZkHeiz98hece4qFpLQSMEQQRaJ%2F5qE8Gno669DSsPXV59t64DRCk4jb76mQ%2B8ZaYbq9QV57l11qYks1cbnzT7px%2FKCnPDJcgXZmQKoAx30rADtRQKLUskC%2FuIFt4f5KSfg2cn5BT21MMOhUotA9bDdp5sz1s%2BV5p6FtWFgIu3w%2F8Gn7&X-Amz-Signature=3e2615c0ad1e66102f1e68bed43acbc278ea7032eb9dc83b3bf651d77fffa388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ37STR2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDyVK4XGS%2FI9FtTt95m0RAxhQgf5%2FLUO7DVSQVKBWFW4gIhAMY4twTaIZpL%2FVdP0FD20xSDF%2BSNRMGRpICiD%2F85nZGsKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZCWZzgquCdd80Y0Yq3AMTQPEWI%2FWbKeutSFFtOT1x7Iu55XrdRyg9X3oa5rH0rVFJYby0RHf%2BoVIVtrp%2FcrNjGkyRoJ5l9%2Ftkx4ljB4Q200BMt46KbNgm3preEdKn6g%2BaRPpjNOQ1ZCKtzYuIMrqEYa00XHYlZymluavXc3almfWMfqVAC7oXPb4JuYjPD8HJ1V1nbCeO9W7ffdCerCmcHr%2FK4L6KckutDMg8S8aXx3Im6MIbQRHJTdtHlBFVi%2FPooKOsc6%2FkuXAFbq6awMVQ6glrv2bJ8sibZu5V%2BgumPn8m9NzW8rMa97gyCAhdvvo5JBGvuOVe6Gz2Afvy23Am8pzi02%2Fa3LTVYvT2iKxXKq0nPkTnyHhTa9iXkezD16f2%2Bf8iMwahxbRh8BJPLwg7nsuws5QIshVvbN7QrkPO2CcoV0wItpCyvKElrHCPJpxEg9LGonRWLdFmwDlsd0sBfXthH41q%2FI7ub3nmZmwJeGp6kaV8qCTfi6MIU8gedVVbCkgNsxNyQy27ML0sX9rLfyO796eaAvMbJPm%2FN7CrP%2FVz6rUWDP4fHY4h8vN8adCvs9ZhYL0XpTjV87RA6BPyZCcD5m7sORK%2BAgGeqwHS7mWpLo68SKhZ8LUIV1uLIBx7SS4OynpYuvvoZDCe%2BdLEBjqkAVt%2FHPvsF5euNg1uoM09stZoneGBS3lg74Bdyo%2B%2BzMRJJVlS03ozW8DX0mw8vnAMToxI2vAlmmC0dnJeflxpIVDrrmIkGwd916gJI9Q3%2Fpc1iYuKMDO0S%2BY6OIS84dWC8ayoyhqSiZwdMWlaQyQeZC1fHMWtyHAvm%2BKfS8wpIUUILkV4JdHDvV4v6K%2BhvC7yC%2FzqiSnhlAOfiugf4WKa%2B4teSmsM&X-Amz-Signature=c45c7bcb30a85c1ef95f6d720d183f2e52e6ce97a00db45b192ecc941bfbfd5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CUVGDQH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIF%2ByIhA%2BvlkNPg%2BLxc05EonxWI4SEMw1pu36q9AKS2vTAiAMj3OO7qsNkrj9NO4rGGS7bxdL1aDPWJ45x7RDF2MB%2FyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMJfLKyOT9l4M4pEMKtwDJjAc1IbVOmP75S%2BLuUakIGuPMmEQ%2BTVTSH8iq5FjqFOfE92JJ3A2dysRM11xPwnmL0MQKbFcyW%2Fa%2BUp11aOJXWB%2FfOE%2Fx0OahwUXleHhs%2Bg4aufbncCWHxlHpLhAAVOVWoWmDpGdri6l9Mzt1h6E7r%2FekYDJiBdkI68bcIoxvVonL8zpSj31Zfs5814NglYlPAZMrwJ91Ia1kPlAV%2FSZIhYAluw4%2FwbfoiI6w%2Fq9MLIPBFt21uw1LCHTnJATiSpwX5NkK4ZJZbF%2FFG3MCBwl4zP03fECwH%2BFXKq0N%2BoyMVvSCmigOvS1xyhTLp9EQ1ez6MKZWsLdExD5YxXyEI5FGQkI88u5%2BZ7OLGHVOfQ0LRCkw18CkiK0B5KddaxbqZ0l3NlUEQFsEVtyLqGDkWZOESaPL8k%2BM%2F67zu9hdeE1gw5rfIovThoSw7c%2BvwtVXlJo%2F7WhX7pTleVu0zJr2slRqxpDpO7GsJLRWFqKLxv71oKD0NybynRtx4CN%2FUVQEPlt4EWzVxdGF8ypAKJmqn5qYwzE0nRRKNcPJT5%2BMCTK9tFociOIi1h%2BZ7pSFMPi6xyvLZ8mL5TGfaBkO2rNLv6GSIWQmbohDnsN9nY4Nt9adaea4ULGRuHyRLEk4icwjvrSxAY6pgEBcmvubTaUu71%2FgnMtchYKST6%2FDr%2BEYPpWOH%2BJpU2a0OsBzQ0aCRHwaSb6FNZuctP4UKCkm0HPhElpz5Tb2qMnhnAMMnIqlceEkCiOcQy5uO715n83d9YfqQv7omoh28Fh8nnPEXLXzzlWEWVfginudetlIoz2eZ%2FdN69GigP7pmAzlL6Zx1XXU%2BX93j%2BdtnCMunEtHBVoxOZCPTkJQ%2FQAhfk7mdaa&X-Amz-Signature=65e699347bd65e5ad6fce8c5e0c79eb32e1809be93bcd283ab28f0c4a1f34034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHHKYV6R%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCYNnWh%2BvUiG2YsBVyEU1CMpXiJ4P1rdjfHDBn6gLMzIAIgJUo5C8QLxS9Nm0tpB7XHUKutStEthmPxMfxKN8NznNQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhjbHBIWakxl3Gn2ircA7fDJwBBSLd8Sy9ycvAVeD233umYgMOst80sauEg4GuypJvy4x3UXH3c3Pq8IGExQLXWLCQ7twmJH9FZSkOj5nX%2Be4JuGou%2BAA7LLwBXDANwnPXRT8lsCRsQPj%2BCT%2B8v2LVqGmWlMKK2lP1DVnh4LJMJ6RCg1%2FjFoRJhPN%2FfZ9RfXyd6nKfjkq6G2X426SrNr5hd8WvsU%2BPujeQqxOqMOtkXZufs4GFYhf5PlzzWUKYWlhAGvoL%2FPtBAMJJjd2e%2BPclDgerX3IHsYZY9iDR00xzWPPvk0q0hcLflq8F5vVRHCsKZ1Od4etXS0P9Y58k7pJ6gw7nkbVrQa%2BmhwhjvDZVBZiL1Kt4Lh3JIQ8cjFmonhtx%2Be2Cfe40VPcPvBSll0rlAleckuJP9eIlzxXyg%2FolGPR3%2FDewMZrHriYRD4zt5sC86Ow28AdtW517knKi6WC%2BTbjsRLaDZBzTJvml9IR%2FQe5%2B%2FwRmtr6y90L7eIP%2FRF0eOyGBIV3ubNqZvhGcI4aA6r%2BSI1SDvV6OaYEi14TolVJ1KejVCAYGhgOAuwnQnVNQctxSuxkdJfzUQrGHWY2PIcEZKgATW9S4HgXcNZqKUVEdS5t9rUZHiUIULeUP2epIQE%2BVBIu5yxXxRMPz40sQGOqUBu%2FbNL9Pu6Y4JXWS2lf4NpcGuG%2Bwy1JJkaB1GyHhzBVVLq5g5TyIQXj8VAVZNMSsmVvX7bsacBK75y4VYIs28xOuCvlObDqG%2B1w1ji8BtOlc1zJXyu9rLnJOP5xEQogCuUQcZMf80vVqPSihLpJKJU7IVSDvd4BG%2BHfXFPTfnJOS3XISICgdkxF2uV9T3GIYwMSxMxo3F85L7v7F41uyCZ7QdHWuD&X-Amz-Signature=31e8178a8701dd7fb99863a78ebe6209f3fcaede08a08ec6c601734ba703860f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H7BMEYB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDRMDTdno83vtJWrIxsfjrcJOHkNBmyXirt%2FnFNKSrnSgIgcoRIzSNZtEej9R8c2TZBOjj8n%2BCHAubiuM0yyng1xlIqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOIH1MlVnNXfK%2BOFSrcAwg9s798HcvnY5yc5u15KuKRbNJusS1suR0oMT3w7VXh%2BEwyAra9S2iTePlfg%2FIkAZCR425%2B5hUqSx%2FcLiLJnHQwPx5UO%2BNGf5VG4wgVS4JPKPo8qu1p2uSXamPB44qpOb%2Bo44umNDFGs5bJaOZudivJ%2FCVFumTnvDW22kwPprV2AWMVLVLgiVsVfZApv1uYOOyOotrbBYhWv2jZiKek%2FH7zEALjyU1Ws%2Bl3MckQ4%2Fe90Sd4ecOrtnsJMrAMqbcILMcY8vB1C2FGupfVeSg6kN0f0ZYebO8CLieFLGVEbnwCaIaHdYJs2qydxZRi22HIcgVY1f5qrS7VRJpnD1hMlXxLn4X5jTR8WZFH1kSy1iw37zvkWILWtrzh3APbd3CRVK7vs9UNp3clDj7XY97EbV81zZr9sK2RroPHpqKGDa2YGftPkCeslmu3KPKr0oQEncGyAQiEIYHMSBE4gJPYoMM5R81XBcwV3eTqTWVrRs7N8ztBPB1Wuoof03tDfO67uqCsX%2BJaqq1OtFuuhw4sfmAvKZQJJjOjW%2Bub6EKkGOj6p9KGPFtCOdbP2BXKO0lMwLDcvTEqwjPrIXsD%2Bt94vJy%2FbMZrmkN2DS6%2FMuZrYYaKLZ0mOAOd9jzdYSmUMIr50sQGOqUB8sNlG074X9g8ymJHpjnorkpfVCuVhWV2aRjKp0pVJOsI0dFX2ff%2BmIbWt7Whkx6ax8VaPZTKWz2fq8425VB1R414W2xOdgUcN%2B%2FVcbsAVJ0UxcV9VJOcycUHdFV5vKgVHOeS2BMf31QXvfnfC6KvyRVvxrBM%2F8uKbvad%2BvnpX55bFKTPKuDZ%2BkTPHKparBlB6OgjsFob0Wko%2FZEUrqYqv4NaSJdF&X-Amz-Signature=e8dc2474ea464acab962177586a6abad33d234798401132e3cce8d8e3c342493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HYBI7M6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIFduZy9InZGnxZ4eVVXuC9RQSnaca3MhphdxNEh9wU%2B0AiEAqz0FhXAFzJckW%2F0T4GVdAiSDyvvy5NoGPo2zEttQXm4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJXMBRrqZtgaE99oyrcA5GGwRoqC4c%2FPUs5zWwCwPRKFFGPNAsppvz5yH84VmulIyL0YGD%2B%2BszvT515cilGXqGOLqoFYBTCW25wYWEyYH1JFMfe3jSWRxkJoqdwzAL3uqON5g5jrF3SIUxOvTgajTgUdJS3%2BPNvkx5492bbKYmvKyA9cy5UOsuku2VpYvrhxB5mxlHdjI3A5H3aWx0RQycPjsa2SD0SucJ0J1d4HSB8mIp%2Bk89ssYDIygDgxlQBiu1QWL5zHvu%2FjAg4XUgIe53AZOBkfMVsGQS90Q9qRef%2FHMsiDzz%2BHp7wJuHbmaiYByigJzF0fvOL6jZ6eLcak%2FwSdpsS%2BH64tp5HWFcXRRdMEMAL6YtbGdeOR7rkTt1UHozuJt6aM22vTZUJt2DM%2FiiXDz1rp%2FWU1Xc37zvzK2Rdrpvt4Plb9GWFO8J98y%2FIUb2fV%2FI64jcRTfCe8b%2Fg0flvU%2BoUCJmxKVsI8d3MCvlowAJiyAQosF%2BUBgPfic%2FnCudc0Pb8cUK3eJ8s4pZ152kJ24bm7egcV1yXFpWvwdB27NF%2F1WcFsdIu33qpAFT4Okh5PSSHJKs9a5p28iUlRuxunxAE4qbsyTp%2F%2BgTd96U4GCcxAz0bZwr0PN5gund4844SWWNNPLchDW2YMKX50sQGOqUBXJ1DtRXFN%2BE8kbrBzQgae8V8Vz6YmHyCIfkasLY6V%2B7a%2BITXUpvLVUxiux%2BN1zeU8VQFah%2FeIpD0PGzOYpW%2BqbBWFgXFvibQP%2BMMAilYoN3gModZWNXxkBZgcOPF7hIyBUN%2BzlrVfMt9RcDpuafJz45px9XebGAW%2FfUDr0MYgDeKxiXoioilE9kVh8eS%2FZZWCkVozFzdParlMQGSOvdTYC0KvtrF&X-Amz-Signature=8b9cd5145368ae2d475201200a195bedaa7672eb8420060edd58cfded2f2f002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L7GL67N%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCfcymenuCcBqJ7JIlZBRMeJyCJvH4GIg7BDAOq8fPX%2FQIgZ9GMXRlQVCoNfw0CwSCE%2BfgJXhlvnXw8EsGJyZWUiLQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWbzFbsaWQPVewLpCrcA2tMHhP4XZWMwp%2BqYVD07bNl5Smt5Wjan4%2F0Vfoimdynl%2FAOqJBN0voZItVbpe%2F8Wu369tpB0aa7BTDmFsqB%2F11%2BWRB5VbrlaffEqC2P1op4%2FxqVju5anhhe7leFEFVpFgpUmazfN8OWu25dSYnupyniwLpiJ76mkviiUuVXQTkJDiRzUplMvbNv96h5MW852VmT4mdWzuQoXHlt%2Foq%2BQqhxx9y97X7RUpzPwKRbqCLZPR%2F6%2FflyYP9RvxCzR53e2JbIAMyNeI%2BZ0N4zRmgs7b6Q%2FPG0WSqalMeQIRLamNNah1gsHY9ZDtrODAwD5VjQJ89mMgsWZ70yNUTD168%2Fw08EXW4epIbehEf0IMZSOKHUhfb4mjwgNMokPrV03FcmhDqFPaWThDJti84%2Fi0F4mbMe%2FQ6fpQ7KHTfZhv8CaEcQbPnQ6wi7CTL6a0fz95dgOJN4oYJXtpBIB%2B8W0WtQd58L1shaiyNOAeVo2DKoQaffXzKB3mcM3YDO4EEOMOSWaLhMEd6L8CpQSywt3N%2BbMg3eMkBwEciR5P8qnx2nbgWJO8VTxz4N5Saee3lSj4rO7JjD41RxG5FVSDCM3Bgb0zfI49ScOVoVWL1GmCQSLjtdOBZlvZYree%2BYkF%2B2MJ760sQGOqUBNUwskSFtMMR9V57NLE13b%2BwP%2Bho1a1ndgbqEu23MWShfhj1K71gf%2FfOpjRyDbZVM50J44rPTjfkkYIKyWFrGnqhCVtbwyOyT3qye%2B3EkxjHPxGECmT7TjXzMksKgHwFZQeGjPzf5PCbtkl1X91NWWb62tk6BFiPBmqgMYSPhdBhNSAfZCu7ImGBIYx3meYsjQkLMUz822M0l2PYE6n6q0KFCZdZM&X-Amz-Signature=ec7511902f6414bb0a847b4a4ada6c010ea8fc4e49c338e6e3b261e7d84a4e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ37STR2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDyVK4XGS%2FI9FtTt95m0RAxhQgf5%2FLUO7DVSQVKBWFW4gIhAMY4twTaIZpL%2FVdP0FD20xSDF%2BSNRMGRpICiD%2F85nZGsKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZCWZzgquCdd80Y0Yq3AMTQPEWI%2FWbKeutSFFtOT1x7Iu55XrdRyg9X3oa5rH0rVFJYby0RHf%2BoVIVtrp%2FcrNjGkyRoJ5l9%2Ftkx4ljB4Q200BMt46KbNgm3preEdKn6g%2BaRPpjNOQ1ZCKtzYuIMrqEYa00XHYlZymluavXc3almfWMfqVAC7oXPb4JuYjPD8HJ1V1nbCeO9W7ffdCerCmcHr%2FK4L6KckutDMg8S8aXx3Im6MIbQRHJTdtHlBFVi%2FPooKOsc6%2FkuXAFbq6awMVQ6glrv2bJ8sibZu5V%2BgumPn8m9NzW8rMa97gyCAhdvvo5JBGvuOVe6Gz2Afvy23Am8pzi02%2Fa3LTVYvT2iKxXKq0nPkTnyHhTa9iXkezD16f2%2Bf8iMwahxbRh8BJPLwg7nsuws5QIshVvbN7QrkPO2CcoV0wItpCyvKElrHCPJpxEg9LGonRWLdFmwDlsd0sBfXthH41q%2FI7ub3nmZmwJeGp6kaV8qCTfi6MIU8gedVVbCkgNsxNyQy27ML0sX9rLfyO796eaAvMbJPm%2FN7CrP%2FVz6rUWDP4fHY4h8vN8adCvs9ZhYL0XpTjV87RA6BPyZCcD5m7sORK%2BAgGeqwHS7mWpLo68SKhZ8LUIV1uLIBx7SS4OynpYuvvoZDCe%2BdLEBjqkAVt%2FHPvsF5euNg1uoM09stZoneGBS3lg74Bdyo%2B%2BzMRJJVlS03ozW8DX0mw8vnAMToxI2vAlmmC0dnJeflxpIVDrrmIkGwd916gJI9Q3%2Fpc1iYuKMDO0S%2BY6OIS84dWC8ayoyhqSiZwdMWlaQyQeZC1fHMWtyHAvm%2BKfS8wpIUUILkV4JdHDvV4v6K%2BhvC7yC%2FzqiSnhlAOfiugf4WKa%2B4teSmsM&X-Amz-Signature=e87afe795e9daf63848751c75fb6d9e1d61708e90327d7450f8f932659d2055d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ37STR2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDyVK4XGS%2FI9FtTt95m0RAxhQgf5%2FLUO7DVSQVKBWFW4gIhAMY4twTaIZpL%2FVdP0FD20xSDF%2BSNRMGRpICiD%2F85nZGsKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZCWZzgquCdd80Y0Yq3AMTQPEWI%2FWbKeutSFFtOT1x7Iu55XrdRyg9X3oa5rH0rVFJYby0RHf%2BoVIVtrp%2FcrNjGkyRoJ5l9%2Ftkx4ljB4Q200BMt46KbNgm3preEdKn6g%2BaRPpjNOQ1ZCKtzYuIMrqEYa00XHYlZymluavXc3almfWMfqVAC7oXPb4JuYjPD8HJ1V1nbCeO9W7ffdCerCmcHr%2FK4L6KckutDMg8S8aXx3Im6MIbQRHJTdtHlBFVi%2FPooKOsc6%2FkuXAFbq6awMVQ6glrv2bJ8sibZu5V%2BgumPn8m9NzW8rMa97gyCAhdvvo5JBGvuOVe6Gz2Afvy23Am8pzi02%2Fa3LTVYvT2iKxXKq0nPkTnyHhTa9iXkezD16f2%2Bf8iMwahxbRh8BJPLwg7nsuws5QIshVvbN7QrkPO2CcoV0wItpCyvKElrHCPJpxEg9LGonRWLdFmwDlsd0sBfXthH41q%2FI7ub3nmZmwJeGp6kaV8qCTfi6MIU8gedVVbCkgNsxNyQy27ML0sX9rLfyO796eaAvMbJPm%2FN7CrP%2FVz6rUWDP4fHY4h8vN8adCvs9ZhYL0XpTjV87RA6BPyZCcD5m7sORK%2BAgGeqwHS7mWpLo68SKhZ8LUIV1uLIBx7SS4OynpYuvvoZDCe%2BdLEBjqkAVt%2FHPvsF5euNg1uoM09stZoneGBS3lg74Bdyo%2B%2BzMRJJVlS03ozW8DX0mw8vnAMToxI2vAlmmC0dnJeflxpIVDrrmIkGwd916gJI9Q3%2Fpc1iYuKMDO0S%2BY6OIS84dWC8ayoyhqSiZwdMWlaQyQeZC1fHMWtyHAvm%2BKfS8wpIUUILkV4JdHDvV4v6K%2BhvC7yC%2FzqiSnhlAOfiugf4WKa%2B4teSmsM&X-Amz-Signature=f6fb95d01033b4f502b641eba7ee115263da7f397fd8e40c1d46ff3b9c129069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632WSIY7P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCH03MKGSYUP4ZZTKhVicHZOmtBnTNZLdgzFD%2BKJ9jj8wIhAIamz9LAQFZmna4c1qjKurK5okcxBMx2DWOamXHkeYDvKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTwA9gxxr8FOb54kIq3AMY6zJbUSlIcwyMykK%2BNAoDiWuLGEYhu%2Flkr1Ujzwjun7%2FeAP89crR0P1nlBpWqCopxTl9F%2FuMHGikO6TjQZNIURaBIwSJo%2BY%2F2o%2FDHnn6QkZnlQ8351tf7ig8%2B3xp1bkJW6cG%2BC58i0eVj%2BZC%2Bz8CxLOrA4Un9EqzSqrY8XahpPjdLO%2BO11ygVEX5mYpR%2FTutrMR3r5pQjOIB7NeHFmJAcTcsEWLeY0BMwF%2FBDzdsywE64wTyW%2FeAv%2FwksIpYlAQo0WJx3hiTfV4uBtwkdEXW4l3AWWS4%2Fi7v9PS%2Br4ERvWttEVPmd8C%2BnHJ1JAWnOniWY2i%2BJ5JGrkK6HZhMNNGN6J24oJ92gRR5LovQTfu1yoPByfkxmBpA4ULmDL2Fx5XpNicq%2FgKpvtfTp5E%2FzXOr5tZdiqIxDhuowvi4cjNlqDWPJBeLFX0HT5%2BFFKODHWHIkyBfrCbtr6faEWvztJcGQH3nXd91ZX5mbfKHRCNMwqDsKL%2B2mJmFBLnRiS1V0T26aJDBPSvUcTPrDHOWWPCuGS1cMKBUQ0%2BmIidRxXY58DtVkZbpPtzMylsyDb4iYMXznYzwvjRuTvYPck%2Fvg0QLRFoc3AAquKmDwohQKMf2smJWUhPQllxJCdSW6iDC1%2BtLEBjqkAQRuNl0F6%2BL8otx5wYz%2FCFe7nWjFkDo7xPcKY2uQmTHAHelVLTsMo2%2FX7vjpZvIxzymI9j2e%2Fe7M9dzCe35vY9mG9C63xH9OcKQIFmxMYuJrxtL0xSJIeDNPfqGGTe8gHGxH0hhDlqS3hE23p2pqvtO5XuvJN0Q2BTEKfNuE%2FpBg6mzIYxRRnOUMIx9wMoOYsWMK9H1ocBvpo%2FIlIZ8vLUUIPysK&X-Amz-Signature=60f28edbea2b6703d9b2b557f319f86d6c53b4d07e326fb34c5d1ffb5b2afb02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632WSIY7P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCH03MKGSYUP4ZZTKhVicHZOmtBnTNZLdgzFD%2BKJ9jj8wIhAIamz9LAQFZmna4c1qjKurK5okcxBMx2DWOamXHkeYDvKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTwA9gxxr8FOb54kIq3AMY6zJbUSlIcwyMykK%2BNAoDiWuLGEYhu%2Flkr1Ujzwjun7%2FeAP89crR0P1nlBpWqCopxTl9F%2FuMHGikO6TjQZNIURaBIwSJo%2BY%2F2o%2FDHnn6QkZnlQ8351tf7ig8%2B3xp1bkJW6cG%2BC58i0eVj%2BZC%2Bz8CxLOrA4Un9EqzSqrY8XahpPjdLO%2BO11ygVEX5mYpR%2FTutrMR3r5pQjOIB7NeHFmJAcTcsEWLeY0BMwF%2FBDzdsywE64wTyW%2FeAv%2FwksIpYlAQo0WJx3hiTfV4uBtwkdEXW4l3AWWS4%2Fi7v9PS%2Br4ERvWttEVPmd8C%2BnHJ1JAWnOniWY2i%2BJ5JGrkK6HZhMNNGN6J24oJ92gRR5LovQTfu1yoPByfkxmBpA4ULmDL2Fx5XpNicq%2FgKpvtfTp5E%2FzXOr5tZdiqIxDhuowvi4cjNlqDWPJBeLFX0HT5%2BFFKODHWHIkyBfrCbtr6faEWvztJcGQH3nXd91ZX5mbfKHRCNMwqDsKL%2B2mJmFBLnRiS1V0T26aJDBPSvUcTPrDHOWWPCuGS1cMKBUQ0%2BmIidRxXY58DtVkZbpPtzMylsyDb4iYMXznYzwvjRuTvYPck%2Fvg0QLRFoc3AAquKmDwohQKMf2smJWUhPQllxJCdSW6iDC1%2BtLEBjqkAQRuNl0F6%2BL8otx5wYz%2FCFe7nWjFkDo7xPcKY2uQmTHAHelVLTsMo2%2FX7vjpZvIxzymI9j2e%2Fe7M9dzCe35vY9mG9C63xH9OcKQIFmxMYuJrxtL0xSJIeDNPfqGGTe8gHGxH0hhDlqS3hE23p2pqvtO5XuvJN0Q2BTEKfNuE%2FpBg6mzIYxRRnOUMIx9wMoOYsWMK9H1ocBvpo%2FIlIZ8vLUUIPysK&X-Amz-Signature=eb2ffcaaf51bd0c7bb645a64e3d6eec5aac31002c3d8588a77440b93e586d411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632WSIY7P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCH03MKGSYUP4ZZTKhVicHZOmtBnTNZLdgzFD%2BKJ9jj8wIhAIamz9LAQFZmna4c1qjKurK5okcxBMx2DWOamXHkeYDvKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTwA9gxxr8FOb54kIq3AMY6zJbUSlIcwyMykK%2BNAoDiWuLGEYhu%2Flkr1Ujzwjun7%2FeAP89crR0P1nlBpWqCopxTl9F%2FuMHGikO6TjQZNIURaBIwSJo%2BY%2F2o%2FDHnn6QkZnlQ8351tf7ig8%2B3xp1bkJW6cG%2BC58i0eVj%2BZC%2Bz8CxLOrA4Un9EqzSqrY8XahpPjdLO%2BO11ygVEX5mYpR%2FTutrMR3r5pQjOIB7NeHFmJAcTcsEWLeY0BMwF%2FBDzdsywE64wTyW%2FeAv%2FwksIpYlAQo0WJx3hiTfV4uBtwkdEXW4l3AWWS4%2Fi7v9PS%2Br4ERvWttEVPmd8C%2BnHJ1JAWnOniWY2i%2BJ5JGrkK6HZhMNNGN6J24oJ92gRR5LovQTfu1yoPByfkxmBpA4ULmDL2Fx5XpNicq%2FgKpvtfTp5E%2FzXOr5tZdiqIxDhuowvi4cjNlqDWPJBeLFX0HT5%2BFFKODHWHIkyBfrCbtr6faEWvztJcGQH3nXd91ZX5mbfKHRCNMwqDsKL%2B2mJmFBLnRiS1V0T26aJDBPSvUcTPrDHOWWPCuGS1cMKBUQ0%2BmIidRxXY58DtVkZbpPtzMylsyDb4iYMXznYzwvjRuTvYPck%2Fvg0QLRFoc3AAquKmDwohQKMf2smJWUhPQllxJCdSW6iDC1%2BtLEBjqkAQRuNl0F6%2BL8otx5wYz%2FCFe7nWjFkDo7xPcKY2uQmTHAHelVLTsMo2%2FX7vjpZvIxzymI9j2e%2Fe7M9dzCe35vY9mG9C63xH9OcKQIFmxMYuJrxtL0xSJIeDNPfqGGTe8gHGxH0hhDlqS3hE23p2pqvtO5XuvJN0Q2BTEKfNuE%2FpBg6mzIYxRRnOUMIx9wMoOYsWMK9H1ocBvpo%2FIlIZ8vLUUIPysK&X-Amz-Signature=fc33d87f929206adfae7f9c94909d9122581eec17908abb2ec3c579fcb8be5af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632WSIY7P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCH03MKGSYUP4ZZTKhVicHZOmtBnTNZLdgzFD%2BKJ9jj8wIhAIamz9LAQFZmna4c1qjKurK5okcxBMx2DWOamXHkeYDvKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTwA9gxxr8FOb54kIq3AMY6zJbUSlIcwyMykK%2BNAoDiWuLGEYhu%2Flkr1Ujzwjun7%2FeAP89crR0P1nlBpWqCopxTl9F%2FuMHGikO6TjQZNIURaBIwSJo%2BY%2F2o%2FDHnn6QkZnlQ8351tf7ig8%2B3xp1bkJW6cG%2BC58i0eVj%2BZC%2Bz8CxLOrA4Un9EqzSqrY8XahpPjdLO%2BO11ygVEX5mYpR%2FTutrMR3r5pQjOIB7NeHFmJAcTcsEWLeY0BMwF%2FBDzdsywE64wTyW%2FeAv%2FwksIpYlAQo0WJx3hiTfV4uBtwkdEXW4l3AWWS4%2Fi7v9PS%2Br4ERvWttEVPmd8C%2BnHJ1JAWnOniWY2i%2BJ5JGrkK6HZhMNNGN6J24oJ92gRR5LovQTfu1yoPByfkxmBpA4ULmDL2Fx5XpNicq%2FgKpvtfTp5E%2FzXOr5tZdiqIxDhuowvi4cjNlqDWPJBeLFX0HT5%2BFFKODHWHIkyBfrCbtr6faEWvztJcGQH3nXd91ZX5mbfKHRCNMwqDsKL%2B2mJmFBLnRiS1V0T26aJDBPSvUcTPrDHOWWPCuGS1cMKBUQ0%2BmIidRxXY58DtVkZbpPtzMylsyDb4iYMXznYzwvjRuTvYPck%2Fvg0QLRFoc3AAquKmDwohQKMf2smJWUhPQllxJCdSW6iDC1%2BtLEBjqkAQRuNl0F6%2BL8otx5wYz%2FCFe7nWjFkDo7xPcKY2uQmTHAHelVLTsMo2%2FX7vjpZvIxzymI9j2e%2Fe7M9dzCe35vY9mG9C63xH9OcKQIFmxMYuJrxtL0xSJIeDNPfqGGTe8gHGxH0hhDlqS3hE23p2pqvtO5XuvJN0Q2BTEKfNuE%2FpBg6mzIYxRRnOUMIx9wMoOYsWMK9H1ocBvpo%2FIlIZ8vLUUIPysK&X-Amz-Signature=dd88f55ee9c887af8abdc563cb87ab4ebc1994d3ec44058e8e6f4aa0f6b42595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632WSIY7P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCH03MKGSYUP4ZZTKhVicHZOmtBnTNZLdgzFD%2BKJ9jj8wIhAIamz9LAQFZmna4c1qjKurK5okcxBMx2DWOamXHkeYDvKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTwA9gxxr8FOb54kIq3AMY6zJbUSlIcwyMykK%2BNAoDiWuLGEYhu%2Flkr1Ujzwjun7%2FeAP89crR0P1nlBpWqCopxTl9F%2FuMHGikO6TjQZNIURaBIwSJo%2BY%2F2o%2FDHnn6QkZnlQ8351tf7ig8%2B3xp1bkJW6cG%2BC58i0eVj%2BZC%2Bz8CxLOrA4Un9EqzSqrY8XahpPjdLO%2BO11ygVEX5mYpR%2FTutrMR3r5pQjOIB7NeHFmJAcTcsEWLeY0BMwF%2FBDzdsywE64wTyW%2FeAv%2FwksIpYlAQo0WJx3hiTfV4uBtwkdEXW4l3AWWS4%2Fi7v9PS%2Br4ERvWttEVPmd8C%2BnHJ1JAWnOniWY2i%2BJ5JGrkK6HZhMNNGN6J24oJ92gRR5LovQTfu1yoPByfkxmBpA4ULmDL2Fx5XpNicq%2FgKpvtfTp5E%2FzXOr5tZdiqIxDhuowvi4cjNlqDWPJBeLFX0HT5%2BFFKODHWHIkyBfrCbtr6faEWvztJcGQH3nXd91ZX5mbfKHRCNMwqDsKL%2B2mJmFBLnRiS1V0T26aJDBPSvUcTPrDHOWWPCuGS1cMKBUQ0%2BmIidRxXY58DtVkZbpPtzMylsyDb4iYMXznYzwvjRuTvYPck%2Fvg0QLRFoc3AAquKmDwohQKMf2smJWUhPQllxJCdSW6iDC1%2BtLEBjqkAQRuNl0F6%2BL8otx5wYz%2FCFe7nWjFkDo7xPcKY2uQmTHAHelVLTsMo2%2FX7vjpZvIxzymI9j2e%2Fe7M9dzCe35vY9mG9C63xH9OcKQIFmxMYuJrxtL0xSJIeDNPfqGGTe8gHGxH0hhDlqS3hE23p2pqvtO5XuvJN0Q2BTEKfNuE%2FpBg6mzIYxRRnOUMIx9wMoOYsWMK9H1ocBvpo%2FIlIZ8vLUUIPysK&X-Amz-Signature=b3cb5127159342a0667229a7ce4c74a7c192c0baf77b3e19f43706075a70fe03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632WSIY7P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCH03MKGSYUP4ZZTKhVicHZOmtBnTNZLdgzFD%2BKJ9jj8wIhAIamz9LAQFZmna4c1qjKurK5okcxBMx2DWOamXHkeYDvKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTwA9gxxr8FOb54kIq3AMY6zJbUSlIcwyMykK%2BNAoDiWuLGEYhu%2Flkr1Ujzwjun7%2FeAP89crR0P1nlBpWqCopxTl9F%2FuMHGikO6TjQZNIURaBIwSJo%2BY%2F2o%2FDHnn6QkZnlQ8351tf7ig8%2B3xp1bkJW6cG%2BC58i0eVj%2BZC%2Bz8CxLOrA4Un9EqzSqrY8XahpPjdLO%2BO11ygVEX5mYpR%2FTutrMR3r5pQjOIB7NeHFmJAcTcsEWLeY0BMwF%2FBDzdsywE64wTyW%2FeAv%2FwksIpYlAQo0WJx3hiTfV4uBtwkdEXW4l3AWWS4%2Fi7v9PS%2Br4ERvWttEVPmd8C%2BnHJ1JAWnOniWY2i%2BJ5JGrkK6HZhMNNGN6J24oJ92gRR5LovQTfu1yoPByfkxmBpA4ULmDL2Fx5XpNicq%2FgKpvtfTp5E%2FzXOr5tZdiqIxDhuowvi4cjNlqDWPJBeLFX0HT5%2BFFKODHWHIkyBfrCbtr6faEWvztJcGQH3nXd91ZX5mbfKHRCNMwqDsKL%2B2mJmFBLnRiS1V0T26aJDBPSvUcTPrDHOWWPCuGS1cMKBUQ0%2BmIidRxXY58DtVkZbpPtzMylsyDb4iYMXznYzwvjRuTvYPck%2Fvg0QLRFoc3AAquKmDwohQKMf2smJWUhPQllxJCdSW6iDC1%2BtLEBjqkAQRuNl0F6%2BL8otx5wYz%2FCFe7nWjFkDo7xPcKY2uQmTHAHelVLTsMo2%2FX7vjpZvIxzymI9j2e%2Fe7M9dzCe35vY9mG9C63xH9OcKQIFmxMYuJrxtL0xSJIeDNPfqGGTe8gHGxH0hhDlqS3hE23p2pqvtO5XuvJN0Q2BTEKfNuE%2FpBg6mzIYxRRnOUMIx9wMoOYsWMK9H1ocBvpo%2FIlIZ8vLUUIPysK&X-Amz-Signature=038dee77044f94c7bce0e6a3aaa6a3b69afb415d085fe6982cc23735e9c2007a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632WSIY7P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCH03MKGSYUP4ZZTKhVicHZOmtBnTNZLdgzFD%2BKJ9jj8wIhAIamz9LAQFZmna4c1qjKurK5okcxBMx2DWOamXHkeYDvKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTwA9gxxr8FOb54kIq3AMY6zJbUSlIcwyMykK%2BNAoDiWuLGEYhu%2Flkr1Ujzwjun7%2FeAP89crR0P1nlBpWqCopxTl9F%2FuMHGikO6TjQZNIURaBIwSJo%2BY%2F2o%2FDHnn6QkZnlQ8351tf7ig8%2B3xp1bkJW6cG%2BC58i0eVj%2BZC%2Bz8CxLOrA4Un9EqzSqrY8XahpPjdLO%2BO11ygVEX5mYpR%2FTutrMR3r5pQjOIB7NeHFmJAcTcsEWLeY0BMwF%2FBDzdsywE64wTyW%2FeAv%2FwksIpYlAQo0WJx3hiTfV4uBtwkdEXW4l3AWWS4%2Fi7v9PS%2Br4ERvWttEVPmd8C%2BnHJ1JAWnOniWY2i%2BJ5JGrkK6HZhMNNGN6J24oJ92gRR5LovQTfu1yoPByfkxmBpA4ULmDL2Fx5XpNicq%2FgKpvtfTp5E%2FzXOr5tZdiqIxDhuowvi4cjNlqDWPJBeLFX0HT5%2BFFKODHWHIkyBfrCbtr6faEWvztJcGQH3nXd91ZX5mbfKHRCNMwqDsKL%2B2mJmFBLnRiS1V0T26aJDBPSvUcTPrDHOWWPCuGS1cMKBUQ0%2BmIidRxXY58DtVkZbpPtzMylsyDb4iYMXznYzwvjRuTvYPck%2Fvg0QLRFoc3AAquKmDwohQKMf2smJWUhPQllxJCdSW6iDC1%2BtLEBjqkAQRuNl0F6%2BL8otx5wYz%2FCFe7nWjFkDo7xPcKY2uQmTHAHelVLTsMo2%2FX7vjpZvIxzymI9j2e%2Fe7M9dzCe35vY9mG9C63xH9OcKQIFmxMYuJrxtL0xSJIeDNPfqGGTe8gHGxH0hhDlqS3hE23p2pqvtO5XuvJN0Q2BTEKfNuE%2FpBg6mzIYxRRnOUMIx9wMoOYsWMK9H1ocBvpo%2FIlIZ8vLUUIPysK&X-Amz-Signature=fc33d87f929206adfae7f9c94909d9122581eec17908abb2ec3c579fcb8be5af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632WSIY7P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCH03MKGSYUP4ZZTKhVicHZOmtBnTNZLdgzFD%2BKJ9jj8wIhAIamz9LAQFZmna4c1qjKurK5okcxBMx2DWOamXHkeYDvKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTwA9gxxr8FOb54kIq3AMY6zJbUSlIcwyMykK%2BNAoDiWuLGEYhu%2Flkr1Ujzwjun7%2FeAP89crR0P1nlBpWqCopxTl9F%2FuMHGikO6TjQZNIURaBIwSJo%2BY%2F2o%2FDHnn6QkZnlQ8351tf7ig8%2B3xp1bkJW6cG%2BC58i0eVj%2BZC%2Bz8CxLOrA4Un9EqzSqrY8XahpPjdLO%2BO11ygVEX5mYpR%2FTutrMR3r5pQjOIB7NeHFmJAcTcsEWLeY0BMwF%2FBDzdsywE64wTyW%2FeAv%2FwksIpYlAQo0WJx3hiTfV4uBtwkdEXW4l3AWWS4%2Fi7v9PS%2Br4ERvWttEVPmd8C%2BnHJ1JAWnOniWY2i%2BJ5JGrkK6HZhMNNGN6J24oJ92gRR5LovQTfu1yoPByfkxmBpA4ULmDL2Fx5XpNicq%2FgKpvtfTp5E%2FzXOr5tZdiqIxDhuowvi4cjNlqDWPJBeLFX0HT5%2BFFKODHWHIkyBfrCbtr6faEWvztJcGQH3nXd91ZX5mbfKHRCNMwqDsKL%2B2mJmFBLnRiS1V0T26aJDBPSvUcTPrDHOWWPCuGS1cMKBUQ0%2BmIidRxXY58DtVkZbpPtzMylsyDb4iYMXznYzwvjRuTvYPck%2Fvg0QLRFoc3AAquKmDwohQKMf2smJWUhPQllxJCdSW6iDC1%2BtLEBjqkAQRuNl0F6%2BL8otx5wYz%2FCFe7nWjFkDo7xPcKY2uQmTHAHelVLTsMo2%2FX7vjpZvIxzymI9j2e%2Fe7M9dzCe35vY9mG9C63xH9OcKQIFmxMYuJrxtL0xSJIeDNPfqGGTe8gHGxH0hhDlqS3hE23p2pqvtO5XuvJN0Q2BTEKfNuE%2FpBg6mzIYxRRnOUMIx9wMoOYsWMK9H1ocBvpo%2FIlIZ8vLUUIPysK&X-Amz-Signature=f74a8c5544a89f8d1ced48e78dd80cded64d852cad66de851e87096be09bafcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632WSIY7P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCH03MKGSYUP4ZZTKhVicHZOmtBnTNZLdgzFD%2BKJ9jj8wIhAIamz9LAQFZmna4c1qjKurK5okcxBMx2DWOamXHkeYDvKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTwA9gxxr8FOb54kIq3AMY6zJbUSlIcwyMykK%2BNAoDiWuLGEYhu%2Flkr1Ujzwjun7%2FeAP89crR0P1nlBpWqCopxTl9F%2FuMHGikO6TjQZNIURaBIwSJo%2BY%2F2o%2FDHnn6QkZnlQ8351tf7ig8%2B3xp1bkJW6cG%2BC58i0eVj%2BZC%2Bz8CxLOrA4Un9EqzSqrY8XahpPjdLO%2BO11ygVEX5mYpR%2FTutrMR3r5pQjOIB7NeHFmJAcTcsEWLeY0BMwF%2FBDzdsywE64wTyW%2FeAv%2FwksIpYlAQo0WJx3hiTfV4uBtwkdEXW4l3AWWS4%2Fi7v9PS%2Br4ERvWttEVPmd8C%2BnHJ1JAWnOniWY2i%2BJ5JGrkK6HZhMNNGN6J24oJ92gRR5LovQTfu1yoPByfkxmBpA4ULmDL2Fx5XpNicq%2FgKpvtfTp5E%2FzXOr5tZdiqIxDhuowvi4cjNlqDWPJBeLFX0HT5%2BFFKODHWHIkyBfrCbtr6faEWvztJcGQH3nXd91ZX5mbfKHRCNMwqDsKL%2B2mJmFBLnRiS1V0T26aJDBPSvUcTPrDHOWWPCuGS1cMKBUQ0%2BmIidRxXY58DtVkZbpPtzMylsyDb4iYMXznYzwvjRuTvYPck%2Fvg0QLRFoc3AAquKmDwohQKMf2smJWUhPQllxJCdSW6iDC1%2BtLEBjqkAQRuNl0F6%2BL8otx5wYz%2FCFe7nWjFkDo7xPcKY2uQmTHAHelVLTsMo2%2FX7vjpZvIxzymI9j2e%2Fe7M9dzCe35vY9mG9C63xH9OcKQIFmxMYuJrxtL0xSJIeDNPfqGGTe8gHGxH0hhDlqS3hE23p2pqvtO5XuvJN0Q2BTEKfNuE%2FpBg6mzIYxRRnOUMIx9wMoOYsWMK9H1ocBvpo%2FIlIZ8vLUUIPysK&X-Amz-Signature=29f290ab738baeac282813889b99d9ec31d445b601ea6a043078ea5351011786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632WSIY7P%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCH03MKGSYUP4ZZTKhVicHZOmtBnTNZLdgzFD%2BKJ9jj8wIhAIamz9LAQFZmna4c1qjKurK5okcxBMx2DWOamXHkeYDvKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTwA9gxxr8FOb54kIq3AMY6zJbUSlIcwyMykK%2BNAoDiWuLGEYhu%2Flkr1Ujzwjun7%2FeAP89crR0P1nlBpWqCopxTl9F%2FuMHGikO6TjQZNIURaBIwSJo%2BY%2F2o%2FDHnn6QkZnlQ8351tf7ig8%2B3xp1bkJW6cG%2BC58i0eVj%2BZC%2Bz8CxLOrA4Un9EqzSqrY8XahpPjdLO%2BO11ygVEX5mYpR%2FTutrMR3r5pQjOIB7NeHFmJAcTcsEWLeY0BMwF%2FBDzdsywE64wTyW%2FeAv%2FwksIpYlAQo0WJx3hiTfV4uBtwkdEXW4l3AWWS4%2Fi7v9PS%2Br4ERvWttEVPmd8C%2BnHJ1JAWnOniWY2i%2BJ5JGrkK6HZhMNNGN6J24oJ92gRR5LovQTfu1yoPByfkxmBpA4ULmDL2Fx5XpNicq%2FgKpvtfTp5E%2FzXOr5tZdiqIxDhuowvi4cjNlqDWPJBeLFX0HT5%2BFFKODHWHIkyBfrCbtr6faEWvztJcGQH3nXd91ZX5mbfKHRCNMwqDsKL%2B2mJmFBLnRiS1V0T26aJDBPSvUcTPrDHOWWPCuGS1cMKBUQ0%2BmIidRxXY58DtVkZbpPtzMylsyDb4iYMXznYzwvjRuTvYPck%2Fvg0QLRFoc3AAquKmDwohQKMf2smJWUhPQllxJCdSW6iDC1%2BtLEBjqkAQRuNl0F6%2BL8otx5wYz%2FCFe7nWjFkDo7xPcKY2uQmTHAHelVLTsMo2%2FX7vjpZvIxzymI9j2e%2Fe7M9dzCe35vY9mG9C63xH9OcKQIFmxMYuJrxtL0xSJIeDNPfqGGTe8gHGxH0hhDlqS3hE23p2pqvtO5XuvJN0Q2BTEKfNuE%2FpBg6mzIYxRRnOUMIx9wMoOYsWMK9H1ocBvpo%2FIlIZ8vLUUIPysK&X-Amz-Signature=0bf2c890599d9a54b59c67f47b6ec44acf8522104bf6a9d7309145a97bc70c19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
