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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ2JVEBA%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH47VgGJ85ESi3UHCzhvS%2BDN%2Bb2b2ZYW2qehbdPbZRD%2BAiA4xhkcCn9ujFW2Bnno9xnOSMYCZCDvAlGDh%2FJXVDyuCyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY7pbME%2BLlAwFFriMKtwDqjg%2BHsFonZom7FI6Bys%2BdzZ56LNsXspINw6NSTxftG7xjIPZvUGkkhtUgNOIDlUJSxP%2F4u3aYLANYBsJEVNWBpVnkpM6cOQo65lHQTTbK%2FD6UNfzgCDyhCZxG8%2B3M0zE0mVC0MRajO6DrOlj6eAzaFPyaM2IjXlO29a1yu%2B8om0vDAjaD9vPpdo%2BywyEuXHox1Ti8105ky5yDEzTZalmuDEk0c76N1h%2FXHORPOy97wpl4BpgdZyHmw%2BvKOUa3%2FSkZAhOrERRc2D6OaOOZ3JeujfW%2FxQ2r%2FpJtWe0V32yN4%2ByxL7C4o%2FDIRRT5V5v0pDa4FStPZSGo2WuRd8jcreJyhkVC2OzRmoC6CuT3rt4jeJB58zg6KGvdQS40UkzRUGApqDA2S%2FSJhYzhOOR81gqdY8AAhFNdN94iF7NEY13kFtUYPG%2FuM7uYV4XzDmD0XMh5dtPKeAikMpJphzsA3AfrpoXLmYDqXSXgnP6cGJD5tKDlo2f54MmRgKLCIyJ1uuc9XeNvaBBSJ6P%2BV%2BEcCylaYRvcYsUr%2B5trduognfleLiGpQHnRiREIfjsYt%2FpxcZjDVNDDS8od5XP8L0dVOa%2BjRF3fLXE2BT1%2BINwgkPuohrPmkH85ncBZ3Ne2Acww6%2FN0QY6pgG0GKP22Mr3YrdRLNgpCNpPMuDtnDyLUCUFOwaMuLHoSERIcxlQZJq4NxI4R4XTYGn%2B3apQWClvm2bPzH9w8FGg3Gj%2FaJ5J5iJAGzUJ4fcpowTBWkxrxPaYfp1SJANzf%2Fp0Iig%2B54S5NJ%2F1%2FRjiPzhngUo3w9wMPgd09qW2kKYCWwK7tTxXanWA%2FRrgJHen3Ja41YMHI%2BAtGHVf8KU6qhN9mHStUqHf&X-Amz-Signature=2b42294bdbfe0830465a4836e18fec5579b070a31a5897e1b7180f8ad576536c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ2JVEBA%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH47VgGJ85ESi3UHCzhvS%2BDN%2Bb2b2ZYW2qehbdPbZRD%2BAiA4xhkcCn9ujFW2Bnno9xnOSMYCZCDvAlGDh%2FJXVDyuCyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY7pbME%2BLlAwFFriMKtwDqjg%2BHsFonZom7FI6Bys%2BdzZ56LNsXspINw6NSTxftG7xjIPZvUGkkhtUgNOIDlUJSxP%2F4u3aYLANYBsJEVNWBpVnkpM6cOQo65lHQTTbK%2FD6UNfzgCDyhCZxG8%2B3M0zE0mVC0MRajO6DrOlj6eAzaFPyaM2IjXlO29a1yu%2B8om0vDAjaD9vPpdo%2BywyEuXHox1Ti8105ky5yDEzTZalmuDEk0c76N1h%2FXHORPOy97wpl4BpgdZyHmw%2BvKOUa3%2FSkZAhOrERRc2D6OaOOZ3JeujfW%2FxQ2r%2FpJtWe0V32yN4%2ByxL7C4o%2FDIRRT5V5v0pDa4FStPZSGo2WuRd8jcreJyhkVC2OzRmoC6CuT3rt4jeJB58zg6KGvdQS40UkzRUGApqDA2S%2FSJhYzhOOR81gqdY8AAhFNdN94iF7NEY13kFtUYPG%2FuM7uYV4XzDmD0XMh5dtPKeAikMpJphzsA3AfrpoXLmYDqXSXgnP6cGJD5tKDlo2f54MmRgKLCIyJ1uuc9XeNvaBBSJ6P%2BV%2BEcCylaYRvcYsUr%2B5trduognfleLiGpQHnRiREIfjsYt%2FpxcZjDVNDDS8od5XP8L0dVOa%2BjRF3fLXE2BT1%2BINwgkPuohrPmkH85ncBZ3Ne2Acww6%2FN0QY6pgG0GKP22Mr3YrdRLNgpCNpPMuDtnDyLUCUFOwaMuLHoSERIcxlQZJq4NxI4R4XTYGn%2B3apQWClvm2bPzH9w8FGg3Gj%2FaJ5J5iJAGzUJ4fcpowTBWkxrxPaYfp1SJANzf%2Fp0Iig%2B54S5NJ%2F1%2FRjiPzhngUo3w9wMPgd09qW2kKYCWwK7tTxXanWA%2FRrgJHen3Ja41YMHI%2BAtGHVf8KU6qhN9mHStUqHf&X-Amz-Signature=a8837016e77bd8ebdddb35aa79a375869ce8e097605caa93a20652f6393d0905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ2JVEBA%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH47VgGJ85ESi3UHCzhvS%2BDN%2Bb2b2ZYW2qehbdPbZRD%2BAiA4xhkcCn9ujFW2Bnno9xnOSMYCZCDvAlGDh%2FJXVDyuCyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY7pbME%2BLlAwFFriMKtwDqjg%2BHsFonZom7FI6Bys%2BdzZ56LNsXspINw6NSTxftG7xjIPZvUGkkhtUgNOIDlUJSxP%2F4u3aYLANYBsJEVNWBpVnkpM6cOQo65lHQTTbK%2FD6UNfzgCDyhCZxG8%2B3M0zE0mVC0MRajO6DrOlj6eAzaFPyaM2IjXlO29a1yu%2B8om0vDAjaD9vPpdo%2BywyEuXHox1Ti8105ky5yDEzTZalmuDEk0c76N1h%2FXHORPOy97wpl4BpgdZyHmw%2BvKOUa3%2FSkZAhOrERRc2D6OaOOZ3JeujfW%2FxQ2r%2FpJtWe0V32yN4%2ByxL7C4o%2FDIRRT5V5v0pDa4FStPZSGo2WuRd8jcreJyhkVC2OzRmoC6CuT3rt4jeJB58zg6KGvdQS40UkzRUGApqDA2S%2FSJhYzhOOR81gqdY8AAhFNdN94iF7NEY13kFtUYPG%2FuM7uYV4XzDmD0XMh5dtPKeAikMpJphzsA3AfrpoXLmYDqXSXgnP6cGJD5tKDlo2f54MmRgKLCIyJ1uuc9XeNvaBBSJ6P%2BV%2BEcCylaYRvcYsUr%2B5trduognfleLiGpQHnRiREIfjsYt%2FpxcZjDVNDDS8od5XP8L0dVOa%2BjRF3fLXE2BT1%2BINwgkPuohrPmkH85ncBZ3Ne2Acww6%2FN0QY6pgG0GKP22Mr3YrdRLNgpCNpPMuDtnDyLUCUFOwaMuLHoSERIcxlQZJq4NxI4R4XTYGn%2B3apQWClvm2bPzH9w8FGg3Gj%2FaJ5J5iJAGzUJ4fcpowTBWkxrxPaYfp1SJANzf%2Fp0Iig%2B54S5NJ%2F1%2FRjiPzhngUo3w9wMPgd09qW2kKYCWwK7tTxXanWA%2FRrgJHen3Ja41YMHI%2BAtGHVf8KU6qhN9mHStUqHf&X-Amz-Signature=2146a508a184dd3ce006c11d303252c15a828113309a0a36b35db05992cbf119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ2JVEBA%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH47VgGJ85ESi3UHCzhvS%2BDN%2Bb2b2ZYW2qehbdPbZRD%2BAiA4xhkcCn9ujFW2Bnno9xnOSMYCZCDvAlGDh%2FJXVDyuCyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY7pbME%2BLlAwFFriMKtwDqjg%2BHsFonZom7FI6Bys%2BdzZ56LNsXspINw6NSTxftG7xjIPZvUGkkhtUgNOIDlUJSxP%2F4u3aYLANYBsJEVNWBpVnkpM6cOQo65lHQTTbK%2FD6UNfzgCDyhCZxG8%2B3M0zE0mVC0MRajO6DrOlj6eAzaFPyaM2IjXlO29a1yu%2B8om0vDAjaD9vPpdo%2BywyEuXHox1Ti8105ky5yDEzTZalmuDEk0c76N1h%2FXHORPOy97wpl4BpgdZyHmw%2BvKOUa3%2FSkZAhOrERRc2D6OaOOZ3JeujfW%2FxQ2r%2FpJtWe0V32yN4%2ByxL7C4o%2FDIRRT5V5v0pDa4FStPZSGo2WuRd8jcreJyhkVC2OzRmoC6CuT3rt4jeJB58zg6KGvdQS40UkzRUGApqDA2S%2FSJhYzhOOR81gqdY8AAhFNdN94iF7NEY13kFtUYPG%2FuM7uYV4XzDmD0XMh5dtPKeAikMpJphzsA3AfrpoXLmYDqXSXgnP6cGJD5tKDlo2f54MmRgKLCIyJ1uuc9XeNvaBBSJ6P%2BV%2BEcCylaYRvcYsUr%2B5trduognfleLiGpQHnRiREIfjsYt%2FpxcZjDVNDDS8od5XP8L0dVOa%2BjRF3fLXE2BT1%2BINwgkPuohrPmkH85ncBZ3Ne2Acww6%2FN0QY6pgG0GKP22Mr3YrdRLNgpCNpPMuDtnDyLUCUFOwaMuLHoSERIcxlQZJq4NxI4R4XTYGn%2B3apQWClvm2bPzH9w8FGg3Gj%2FaJ5J5iJAGzUJ4fcpowTBWkxrxPaYfp1SJANzf%2Fp0Iig%2B54S5NJ%2F1%2FRjiPzhngUo3w9wMPgd09qW2kKYCWwK7tTxXanWA%2FRrgJHen3Ja41YMHI%2BAtGHVf8KU6qhN9mHStUqHf&X-Amz-Signature=b252858f2b7525df1635380d6ce1e55cb353ccea654be2066fa1689f3d4d9d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ2JVEBA%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH47VgGJ85ESi3UHCzhvS%2BDN%2Bb2b2ZYW2qehbdPbZRD%2BAiA4xhkcCn9ujFW2Bnno9xnOSMYCZCDvAlGDh%2FJXVDyuCyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY7pbME%2BLlAwFFriMKtwDqjg%2BHsFonZom7FI6Bys%2BdzZ56LNsXspINw6NSTxftG7xjIPZvUGkkhtUgNOIDlUJSxP%2F4u3aYLANYBsJEVNWBpVnkpM6cOQo65lHQTTbK%2FD6UNfzgCDyhCZxG8%2B3M0zE0mVC0MRajO6DrOlj6eAzaFPyaM2IjXlO29a1yu%2B8om0vDAjaD9vPpdo%2BywyEuXHox1Ti8105ky5yDEzTZalmuDEk0c76N1h%2FXHORPOy97wpl4BpgdZyHmw%2BvKOUa3%2FSkZAhOrERRc2D6OaOOZ3JeujfW%2FxQ2r%2FpJtWe0V32yN4%2ByxL7C4o%2FDIRRT5V5v0pDa4FStPZSGo2WuRd8jcreJyhkVC2OzRmoC6CuT3rt4jeJB58zg6KGvdQS40UkzRUGApqDA2S%2FSJhYzhOOR81gqdY8AAhFNdN94iF7NEY13kFtUYPG%2FuM7uYV4XzDmD0XMh5dtPKeAikMpJphzsA3AfrpoXLmYDqXSXgnP6cGJD5tKDlo2f54MmRgKLCIyJ1uuc9XeNvaBBSJ6P%2BV%2BEcCylaYRvcYsUr%2B5trduognfleLiGpQHnRiREIfjsYt%2FpxcZjDVNDDS8od5XP8L0dVOa%2BjRF3fLXE2BT1%2BINwgkPuohrPmkH85ncBZ3Ne2Acww6%2FN0QY6pgG0GKP22Mr3YrdRLNgpCNpPMuDtnDyLUCUFOwaMuLHoSERIcxlQZJq4NxI4R4XTYGn%2B3apQWClvm2bPzH9w8FGg3Gj%2FaJ5J5iJAGzUJ4fcpowTBWkxrxPaYfp1SJANzf%2Fp0Iig%2B54S5NJ%2F1%2FRjiPzhngUo3w9wMPgd09qW2kKYCWwK7tTxXanWA%2FRrgJHen3Ja41YMHI%2BAtGHVf8KU6qhN9mHStUqHf&X-Amz-Signature=e920d0ce6080347e1c7d90ce30f83b443d639e7a89c0ab8aefc1983a42ea19b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ2JVEBA%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH47VgGJ85ESi3UHCzhvS%2BDN%2Bb2b2ZYW2qehbdPbZRD%2BAiA4xhkcCn9ujFW2Bnno9xnOSMYCZCDvAlGDh%2FJXVDyuCyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY7pbME%2BLlAwFFriMKtwDqjg%2BHsFonZom7FI6Bys%2BdzZ56LNsXspINw6NSTxftG7xjIPZvUGkkhtUgNOIDlUJSxP%2F4u3aYLANYBsJEVNWBpVnkpM6cOQo65lHQTTbK%2FD6UNfzgCDyhCZxG8%2B3M0zE0mVC0MRajO6DrOlj6eAzaFPyaM2IjXlO29a1yu%2B8om0vDAjaD9vPpdo%2BywyEuXHox1Ti8105ky5yDEzTZalmuDEk0c76N1h%2FXHORPOy97wpl4BpgdZyHmw%2BvKOUa3%2FSkZAhOrERRc2D6OaOOZ3JeujfW%2FxQ2r%2FpJtWe0V32yN4%2ByxL7C4o%2FDIRRT5V5v0pDa4FStPZSGo2WuRd8jcreJyhkVC2OzRmoC6CuT3rt4jeJB58zg6KGvdQS40UkzRUGApqDA2S%2FSJhYzhOOR81gqdY8AAhFNdN94iF7NEY13kFtUYPG%2FuM7uYV4XzDmD0XMh5dtPKeAikMpJphzsA3AfrpoXLmYDqXSXgnP6cGJD5tKDlo2f54MmRgKLCIyJ1uuc9XeNvaBBSJ6P%2BV%2BEcCylaYRvcYsUr%2B5trduognfleLiGpQHnRiREIfjsYt%2FpxcZjDVNDDS8od5XP8L0dVOa%2BjRF3fLXE2BT1%2BINwgkPuohrPmkH85ncBZ3Ne2Acww6%2FN0QY6pgG0GKP22Mr3YrdRLNgpCNpPMuDtnDyLUCUFOwaMuLHoSERIcxlQZJq4NxI4R4XTYGn%2B3apQWClvm2bPzH9w8FGg3Gj%2FaJ5J5iJAGzUJ4fcpowTBWkxrxPaYfp1SJANzf%2Fp0Iig%2B54S5NJ%2F1%2FRjiPzhngUo3w9wMPgd09qW2kKYCWwK7tTxXanWA%2FRrgJHen3Ja41YMHI%2BAtGHVf8KU6qhN9mHStUqHf&X-Amz-Signature=dc8468aa6bf3c4281b9d23bbbb8495e3435fd4580465f29f44b556c77abba710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ2JVEBA%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH47VgGJ85ESi3UHCzhvS%2BDN%2Bb2b2ZYW2qehbdPbZRD%2BAiA4xhkcCn9ujFW2Bnno9xnOSMYCZCDvAlGDh%2FJXVDyuCyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY7pbME%2BLlAwFFriMKtwDqjg%2BHsFonZom7FI6Bys%2BdzZ56LNsXspINw6NSTxftG7xjIPZvUGkkhtUgNOIDlUJSxP%2F4u3aYLANYBsJEVNWBpVnkpM6cOQo65lHQTTbK%2FD6UNfzgCDyhCZxG8%2B3M0zE0mVC0MRajO6DrOlj6eAzaFPyaM2IjXlO29a1yu%2B8om0vDAjaD9vPpdo%2BywyEuXHox1Ti8105ky5yDEzTZalmuDEk0c76N1h%2FXHORPOy97wpl4BpgdZyHmw%2BvKOUa3%2FSkZAhOrERRc2D6OaOOZ3JeujfW%2FxQ2r%2FpJtWe0V32yN4%2ByxL7C4o%2FDIRRT5V5v0pDa4FStPZSGo2WuRd8jcreJyhkVC2OzRmoC6CuT3rt4jeJB58zg6KGvdQS40UkzRUGApqDA2S%2FSJhYzhOOR81gqdY8AAhFNdN94iF7NEY13kFtUYPG%2FuM7uYV4XzDmD0XMh5dtPKeAikMpJphzsA3AfrpoXLmYDqXSXgnP6cGJD5tKDlo2f54MmRgKLCIyJ1uuc9XeNvaBBSJ6P%2BV%2BEcCylaYRvcYsUr%2B5trduognfleLiGpQHnRiREIfjsYt%2FpxcZjDVNDDS8od5XP8L0dVOa%2BjRF3fLXE2BT1%2BINwgkPuohrPmkH85ncBZ3Ne2Acww6%2FN0QY6pgG0GKP22Mr3YrdRLNgpCNpPMuDtnDyLUCUFOwaMuLHoSERIcxlQZJq4NxI4R4XTYGn%2B3apQWClvm2bPzH9w8FGg3Gj%2FaJ5J5iJAGzUJ4fcpowTBWkxrxPaYfp1SJANzf%2Fp0Iig%2B54S5NJ%2F1%2FRjiPzhngUo3w9wMPgd09qW2kKYCWwK7tTxXanWA%2FRrgJHen3Ja41YMHI%2BAtGHVf8KU6qhN9mHStUqHf&X-Amz-Signature=3969e446f705d7cbbfce1fd8474b6356bf6c855c91dae44fcb490ada5758aff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ2JVEBA%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH47VgGJ85ESi3UHCzhvS%2BDN%2Bb2b2ZYW2qehbdPbZRD%2BAiA4xhkcCn9ujFW2Bnno9xnOSMYCZCDvAlGDh%2FJXVDyuCyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY7pbME%2BLlAwFFriMKtwDqjg%2BHsFonZom7FI6Bys%2BdzZ56LNsXspINw6NSTxftG7xjIPZvUGkkhtUgNOIDlUJSxP%2F4u3aYLANYBsJEVNWBpVnkpM6cOQo65lHQTTbK%2FD6UNfzgCDyhCZxG8%2B3M0zE0mVC0MRajO6DrOlj6eAzaFPyaM2IjXlO29a1yu%2B8om0vDAjaD9vPpdo%2BywyEuXHox1Ti8105ky5yDEzTZalmuDEk0c76N1h%2FXHORPOy97wpl4BpgdZyHmw%2BvKOUa3%2FSkZAhOrERRc2D6OaOOZ3JeujfW%2FxQ2r%2FpJtWe0V32yN4%2ByxL7C4o%2FDIRRT5V5v0pDa4FStPZSGo2WuRd8jcreJyhkVC2OzRmoC6CuT3rt4jeJB58zg6KGvdQS40UkzRUGApqDA2S%2FSJhYzhOOR81gqdY8AAhFNdN94iF7NEY13kFtUYPG%2FuM7uYV4XzDmD0XMh5dtPKeAikMpJphzsA3AfrpoXLmYDqXSXgnP6cGJD5tKDlo2f54MmRgKLCIyJ1uuc9XeNvaBBSJ6P%2BV%2BEcCylaYRvcYsUr%2B5trduognfleLiGpQHnRiREIfjsYt%2FpxcZjDVNDDS8od5XP8L0dVOa%2BjRF3fLXE2BT1%2BINwgkPuohrPmkH85ncBZ3Ne2Acww6%2FN0QY6pgG0GKP22Mr3YrdRLNgpCNpPMuDtnDyLUCUFOwaMuLHoSERIcxlQZJq4NxI4R4XTYGn%2B3apQWClvm2bPzH9w8FGg3Gj%2FaJ5J5iJAGzUJ4fcpowTBWkxrxPaYfp1SJANzf%2Fp0Iig%2B54S5NJ%2F1%2FRjiPzhngUo3w9wMPgd09qW2kKYCWwK7tTxXanWA%2FRrgJHen3Ja41YMHI%2BAtGHVf8KU6qhN9mHStUqHf&X-Amz-Signature=cbd366b5f85075a079ae45ee40f74e3bf97bda116a7c427aa79b89ee21e681f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ2JVEBA%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH47VgGJ85ESi3UHCzhvS%2BDN%2Bb2b2ZYW2qehbdPbZRD%2BAiA4xhkcCn9ujFW2Bnno9xnOSMYCZCDvAlGDh%2FJXVDyuCyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY7pbME%2BLlAwFFriMKtwDqjg%2BHsFonZom7FI6Bys%2BdzZ56LNsXspINw6NSTxftG7xjIPZvUGkkhtUgNOIDlUJSxP%2F4u3aYLANYBsJEVNWBpVnkpM6cOQo65lHQTTbK%2FD6UNfzgCDyhCZxG8%2B3M0zE0mVC0MRajO6DrOlj6eAzaFPyaM2IjXlO29a1yu%2B8om0vDAjaD9vPpdo%2BywyEuXHox1Ti8105ky5yDEzTZalmuDEk0c76N1h%2FXHORPOy97wpl4BpgdZyHmw%2BvKOUa3%2FSkZAhOrERRc2D6OaOOZ3JeujfW%2FxQ2r%2FpJtWe0V32yN4%2ByxL7C4o%2FDIRRT5V5v0pDa4FStPZSGo2WuRd8jcreJyhkVC2OzRmoC6CuT3rt4jeJB58zg6KGvdQS40UkzRUGApqDA2S%2FSJhYzhOOR81gqdY8AAhFNdN94iF7NEY13kFtUYPG%2FuM7uYV4XzDmD0XMh5dtPKeAikMpJphzsA3AfrpoXLmYDqXSXgnP6cGJD5tKDlo2f54MmRgKLCIyJ1uuc9XeNvaBBSJ6P%2BV%2BEcCylaYRvcYsUr%2B5trduognfleLiGpQHnRiREIfjsYt%2FpxcZjDVNDDS8od5XP8L0dVOa%2BjRF3fLXE2BT1%2BINwgkPuohrPmkH85ncBZ3Ne2Acww6%2FN0QY6pgG0GKP22Mr3YrdRLNgpCNpPMuDtnDyLUCUFOwaMuLHoSERIcxlQZJq4NxI4R4XTYGn%2B3apQWClvm2bPzH9w8FGg3Gj%2FaJ5J5iJAGzUJ4fcpowTBWkxrxPaYfp1SJANzf%2Fp0Iig%2B54S5NJ%2F1%2FRjiPzhngUo3w9wMPgd09qW2kKYCWwK7tTxXanWA%2FRrgJHen3Ja41YMHI%2BAtGHVf8KU6qhN9mHStUqHf&X-Amz-Signature=fb8011a375532215c15f274368a49cbd129ae282af64f07d9c6a3243b288e9b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ2JVEBA%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH47VgGJ85ESi3UHCzhvS%2BDN%2Bb2b2ZYW2qehbdPbZRD%2BAiA4xhkcCn9ujFW2Bnno9xnOSMYCZCDvAlGDh%2FJXVDyuCyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY7pbME%2BLlAwFFriMKtwDqjg%2BHsFonZom7FI6Bys%2BdzZ56LNsXspINw6NSTxftG7xjIPZvUGkkhtUgNOIDlUJSxP%2F4u3aYLANYBsJEVNWBpVnkpM6cOQo65lHQTTbK%2FD6UNfzgCDyhCZxG8%2B3M0zE0mVC0MRajO6DrOlj6eAzaFPyaM2IjXlO29a1yu%2B8om0vDAjaD9vPpdo%2BywyEuXHox1Ti8105ky5yDEzTZalmuDEk0c76N1h%2FXHORPOy97wpl4BpgdZyHmw%2BvKOUa3%2FSkZAhOrERRc2D6OaOOZ3JeujfW%2FxQ2r%2FpJtWe0V32yN4%2ByxL7C4o%2FDIRRT5V5v0pDa4FStPZSGo2WuRd8jcreJyhkVC2OzRmoC6CuT3rt4jeJB58zg6KGvdQS40UkzRUGApqDA2S%2FSJhYzhOOR81gqdY8AAhFNdN94iF7NEY13kFtUYPG%2FuM7uYV4XzDmD0XMh5dtPKeAikMpJphzsA3AfrpoXLmYDqXSXgnP6cGJD5tKDlo2f54MmRgKLCIyJ1uuc9XeNvaBBSJ6P%2BV%2BEcCylaYRvcYsUr%2B5trduognfleLiGpQHnRiREIfjsYt%2FpxcZjDVNDDS8od5XP8L0dVOa%2BjRF3fLXE2BT1%2BINwgkPuohrPmkH85ncBZ3Ne2Acww6%2FN0QY6pgG0GKP22Mr3YrdRLNgpCNpPMuDtnDyLUCUFOwaMuLHoSERIcxlQZJq4NxI4R4XTYGn%2B3apQWClvm2bPzH9w8FGg3Gj%2FaJ5J5iJAGzUJ4fcpowTBWkxrxPaYfp1SJANzf%2Fp0Iig%2B54S5NJ%2F1%2FRjiPzhngUo3w9wMPgd09qW2kKYCWwK7tTxXanWA%2FRrgJHen3Ja41YMHI%2BAtGHVf8KU6qhN9mHStUqHf&X-Amz-Signature=f4b72d422fbe6ec2cf4b424f711aeebaf6676c29c1c905b0c39f8c1e31b6882a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5CJP7WU%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCowzeQoKEqLR8l1j4tVsJy2kJUoqOKncDVYtmpxjpjYAIgAy5KjdsklUyQzSDtaWFlFC6i22Gq7tnqprChNeV8y80qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB04ezSpMsbc1Bh7GCrcA7oBAiD69PdfmgdHYr5ijB5KsmXVOCmGehveiAX0sqJubUoYzETTB4KztaKIKem1%2BeJe%2Bjix0NBeWzTQxbw29Lx3EjpMNbZiZuLDrPC%2Fe%2BllaydorYPVRwpEMGOiz39QUTty2iAgGx6VgACvkfWEw7Vr0dzLgz29tKeAr1qNnjz0BIuKLFH8xCLEFuA%2Bxp03FWok3FG6yuocb0kOO71ATUL7tpkMgPEyRkz5u5bIpuyaMPcBOQybBUe2XK5JDkeMKq3KMcPFR%2FQbwYDyE%2FF3vuNKrdx04XsHDZyhiixvqLqS%2BjD0zI16NhxHOl80oxCvqZ5KPJD2NbYitWUmakhlZ34NuaTsJYrEFqeLCIUgG%2FrdXaWx3zMKrDGEToyn6XYEmXS5RzCMJSnVotDjrKG%2B%2BmHZ7pxdPY%2FyZmogFgzpa2fUfNIROzj%2B%2Bp5KfosaLgv95ZCa3JoYyY5iIMgE0hy5YAXIEH0SWNKosYnkxuez%2BbAexItmm19HomR4LgLNq%2FIrrZkTOoTAEpD7rpXWWdGKVl1XyfVaqgALdZrR1PDc%2Fs1YkY%2F7gxWqeSs%2FOkujmx8Lg59UUuZ68d9Hmq8UxSPMajTx9vugDrHDlBqA0Kf5lQHDFdD9IcNo0BqqtUulMJSwzdEGOqUBjKNlRsHaLjKv2IlGmeGyWVNXj%2F017i0HM87lDpDyI6O6LVoD9yw7gZ%2FrFBjC90B7Mi3cynxQdNmU5ZMMTg28L68G9B%2Bo8%2Fe%2F%2B2UyYGJiyUmf7yV0w0MMe3sZjV7334ATY5m6xOt2jE125%2BwcpZZaQ7yQ5UnNG4Z2LKJyhPhtPOIotVxFZba7BlWi9GZaKOX94Ph9dvFHQbCtRek%2FGZiWZApxWHMQ&X-Amz-Signature=9513b66fad9a51dd0ee97da6c3abdd5dbeb013f161da5eeb4e735dd8f9746b9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOMZUX64%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNSKGDpcSOSRgZOkbGUKG%2ByX0g2faQ0NfZcRtHVgi2lwIgc92kIYPcsgGxgGfasgNVWs0GDr0efPztBuT8YpWr9RgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAy9pPq9laZY3CiWjCrcAz3YlLlgTXbJymPIcF2z8WiUB%2BBQ1Kr6LT%2BAhDcNx9FP4tn%2F%2FloegAWy4YxcghW5bKfsxhGUa72y52g8wnkQSevquvZuYFTOMOStJalJXnxHSnQ1fRfq0BJxAJ0TA14k6eDNZalyQGNPozzVBNb%2BMQ6d%2FjSH96n%2FfV1QL5V7eKStE0fH6MHGhYzUeBJUzz04wSi5dqmLs2X2HZZlbFzZdi7hK6n6AI2%2FwgnSF6O%2BVI954W9WfmN4rJUuLtTaIUggblj6FPvaZth0r8MzZxVGFfzIpsaqih36Y6LWOQYEC1PJLmGva%2BQy%2FSBtq9q5Tj4%2B7H0XBr0eqVLvPxfwQP03CZQUuKar9oIHrFxL%2BncqSc1nqMZry%2FTFgKadM4ihZPWpT78Cg75t3RiotsZ6%2BKBBFBlPldK64nj9Vk3w6f3ZGjB8kB1aDG%2F03TLZzJSmg4ZgJIvpCZ71Tetmk%2BhBwjFuDD5AYeGetFqNvVAlZoPfudQ%2BLBQ%2B5WjisvJ54L5ZQIo0yKjumPl2dxtpCkbVc4hJMiYlPyjGBxPKKtiE8qhytPMdPv7%2BtYuWZYL9ThMOOWBNruM%2BnvFZLPtlL3ior3QmOk3cHDTZa%2FPlwMAbcN%2FWspqa3UWosMhxi2YI%2BLFiMKawzdEGOqUBUOxX93hacZvBTFr9zUTpAnQTgckChE4932pewLlcvwi%2Bmge0OnONLnudPDzmjc0nxtUm7GUWXJG63wVyyPj6zOgB41Wb2NKvDhY%2FHpsT6FCSPGm918%2FCkAHAoHAGSTacHxSqDD8c0nQh129dscpzgLYJ3PsCaDhMo6UCQIL6XVaz3QQCrj0mAK3f7aFsjmBF3BqCiP5DhAkgsrC0IaI8UTNBCWIp&X-Amz-Signature=4244e6816efe72a41ee701abff12ab5ce2e224f01beaabcbb70b2fd41ebec6a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLASC7XP%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDAPYz8z8DbgKt5gVtwUhyjZI%2FLxc3s2HFbof2JzwX4QIhAOqjRLjg%2BGBwQVRHILkZiWjQ3pm0GFuBqy77ZkXD7gICKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzqp6C7cmMGIpIRWDMq3APBzhMuoPRQuXVmcoAk3Sz%2FLEHY6OFqkCSkKlmPx7hHZAsOW8ZHO4glxXUmfTdO6PzUjsBJXXbG2mrnfSHFL%2Bz%2BNGGgvdNRpamSgrM52jRt%2FUOvx6GmiogtSi1cz1W2IWlyfKOfDnF6%2B62rSrq2VnVEQoQgZlDdc5lwO43q0yiTzSMCIOsxmqMEi52aMzyw9fNBEPgEZyy4PCoyILETGJInZ4e9QWHfaNWUbV86AvSYfXNpYKMiRFV872kd1Ri2XQGfrUj3Nk4leC5F81uQ8fcF70HOvuNqTCWqQCZNt3nIXuwPQc5Y04F8n2uwCCtoXnCaHVt312R0tvvHcuzcI3djzvobqATGIoXWn2zQ3K6g2xUhys2jqxHOfji1TKr6faNRVeLqSJH4%2BT7w%2BgItHCV2sWw%2BhNYS9EqnLWV8Ox6EwFWeY5%2B12xnb%2BIjMtg8Q%2FWoHNFi3gjo6jGWxqMEOh9F6%2BAOXFzxGpDBM%2B0PMMF6pKk1zf%2B%2F7WS9tlrqtp02AWOZX%2FjONlw5XMYDyHJFAMUqZhWXmhDJwUPc2qgRw2E4c4xqljFKLEAdTL9lM8Sn35oL7rOKL9o2iwC4fw02gQbqDINxrA1REeUIOhfiwutQUqjrHDgiBU7oiCU%2ByMjDksM3RBjqkAdRVQ1dadtswPPDkDZPTAOpqawIjmCDpiJhWxI6MlwUQvfUm7mJIB%2B2021mRSLOcvd%2F6aQo%2F2EebpJNiVMj3YbwgabUn2OJ2EhH%2BI4xn9rqwGstKr6UtjIGvyRt7vFhMIGLWBFBjLra1rm4UXabvmhrlygSsdGkNyjRjhbi%2BAINVCoR69mEJyRLavUqQZgBmeGmCqDiljnFAbUAV%2BKihCwo328Es&X-Amz-Signature=c21a3513149baea6995a35e6d8b056d6bf80a710484d38cd7143a6abbef7303e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ2JVEBA%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH47VgGJ85ESi3UHCzhvS%2BDN%2Bb2b2ZYW2qehbdPbZRD%2BAiA4xhkcCn9ujFW2Bnno9xnOSMYCZCDvAlGDh%2FJXVDyuCyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY7pbME%2BLlAwFFriMKtwDqjg%2BHsFonZom7FI6Bys%2BdzZ56LNsXspINw6NSTxftG7xjIPZvUGkkhtUgNOIDlUJSxP%2F4u3aYLANYBsJEVNWBpVnkpM6cOQo65lHQTTbK%2FD6UNfzgCDyhCZxG8%2B3M0zE0mVC0MRajO6DrOlj6eAzaFPyaM2IjXlO29a1yu%2B8om0vDAjaD9vPpdo%2BywyEuXHox1Ti8105ky5yDEzTZalmuDEk0c76N1h%2FXHORPOy97wpl4BpgdZyHmw%2BvKOUa3%2FSkZAhOrERRc2D6OaOOZ3JeujfW%2FxQ2r%2FpJtWe0V32yN4%2ByxL7C4o%2FDIRRT5V5v0pDa4FStPZSGo2WuRd8jcreJyhkVC2OzRmoC6CuT3rt4jeJB58zg6KGvdQS40UkzRUGApqDA2S%2FSJhYzhOOR81gqdY8AAhFNdN94iF7NEY13kFtUYPG%2FuM7uYV4XzDmD0XMh5dtPKeAikMpJphzsA3AfrpoXLmYDqXSXgnP6cGJD5tKDlo2f54MmRgKLCIyJ1uuc9XeNvaBBSJ6P%2BV%2BEcCylaYRvcYsUr%2B5trduognfleLiGpQHnRiREIfjsYt%2FpxcZjDVNDDS8od5XP8L0dVOa%2BjRF3fLXE2BT1%2BINwgkPuohrPmkH85ncBZ3Ne2Acww6%2FN0QY6pgG0GKP22Mr3YrdRLNgpCNpPMuDtnDyLUCUFOwaMuLHoSERIcxlQZJq4NxI4R4XTYGn%2B3apQWClvm2bPzH9w8FGg3Gj%2FaJ5J5iJAGzUJ4fcpowTBWkxrxPaYfp1SJANzf%2Fp0Iig%2B54S5NJ%2F1%2FRjiPzhngUo3w9wMPgd09qW2kKYCWwK7tTxXanWA%2FRrgJHen3Ja41YMHI%2BAtGHVf8KU6qhN9mHStUqHf&X-Amz-Signature=5bc9fb5c25cb221fb4d67a9b4634f55be39aed93d4f0d812130ae5458d3f5750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6A5Q6IO%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbk0Jtcny723Zd4WYcHmwaBLAB1nMbv%2FBfCzFyyXcOmAiEAvdZEZEGaaEIKG56EXp0QU2MNySEHsLx8SAiu1YMAaP8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWU%2FGG8gFiJc0KoiyrcA5z9up5GITZh1hTUQ8dRrYCMeWzm3x%2FQYIFCPy4xPb9%2FewC4LaN0eqNKHrpP8%2BIKlwomBmJlqecOIDYPS0eOn1y%2FYab4UXxmXzgdSPAZ%2BQ%2BIKZaKSC8O2ycqyDH9eF18phHSeY8H9N%2Fc1RmT248RRa75JpSeDjlJcYUVp2uadhLQ408jqWedQyghEF%2F7EGvGYNCVwh3LIkQubBGFt%2BhGA5Wp%2B6hIqe1pBZrBBF79C0yNxh0Ahf2e8SE2eDIbfXC8ouO1ZNTbpFYaTjgC9E8zqTCyus3%2FNGq7gPSrCiJGGk5gn8H4Fx4Fopnu%2BbOuYfHwATUe1rXfKfNfo%2F4oZq0mDD8dm%2BJ582xfH368lsmrU%2B0Do1jMQdZC42OOhRCt%2FDNFsyWiyeHFwvObBEw7hvbmyCjGe7xxNnzqRaSe5QikEIQUhXlFgsPqsVi1zykD9ctDeeYmTYbBAziwgHcQ73qQBMilGK8ciHVEDbiPAFhkGYWY%2BAxfanQ3oUTaPjeZe9f7c5BohBhLS1WWmQiDmg0b9G473b4GzTNmH3FLMMRISnDSxI8spgHA1S%2BgpTQGXeED7Am8e6dJnggWBSKr0bVYDMwWjyQrJB3UYDA6FhnpxOoMN%2B1ItJ%2BQ4iFfJlCSMJOwzdEGOqUBynZWawC9ffJ2PPFZVM0ULuKC6yqxDxVZSsZOT%2FyqSkLBjNdw8KMW3cMiBUT%2BAQ156rwbQBSB7Bu8PQkYKz6sG4HQeQlWRU2XXS9FrT9svNcg8VoZ3Odkr4iCXobnprcnnnuo%2FvkoDk7O%2Fu5uZ2LKSCKY0fWzOnDlOqcxLucabup7kPikBs7zmHEcJRx4zhGxEiGYLRjjjXPB70yJwXU%2BzfhlQQ8%2B&X-Amz-Signature=50c55d2a5fc91c522e906862a598092bf266ff7a795db88675f33476daba669f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ2JVEBA%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH47VgGJ85ESi3UHCzhvS%2BDN%2Bb2b2ZYW2qehbdPbZRD%2BAiA4xhkcCn9ujFW2Bnno9xnOSMYCZCDvAlGDh%2FJXVDyuCyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY7pbME%2BLlAwFFriMKtwDqjg%2BHsFonZom7FI6Bys%2BdzZ56LNsXspINw6NSTxftG7xjIPZvUGkkhtUgNOIDlUJSxP%2F4u3aYLANYBsJEVNWBpVnkpM6cOQo65lHQTTbK%2FD6UNfzgCDyhCZxG8%2B3M0zE0mVC0MRajO6DrOlj6eAzaFPyaM2IjXlO29a1yu%2B8om0vDAjaD9vPpdo%2BywyEuXHox1Ti8105ky5yDEzTZalmuDEk0c76N1h%2FXHORPOy97wpl4BpgdZyHmw%2BvKOUa3%2FSkZAhOrERRc2D6OaOOZ3JeujfW%2FxQ2r%2FpJtWe0V32yN4%2ByxL7C4o%2FDIRRT5V5v0pDa4FStPZSGo2WuRd8jcreJyhkVC2OzRmoC6CuT3rt4jeJB58zg6KGvdQS40UkzRUGApqDA2S%2FSJhYzhOOR81gqdY8AAhFNdN94iF7NEY13kFtUYPG%2FuM7uYV4XzDmD0XMh5dtPKeAikMpJphzsA3AfrpoXLmYDqXSXgnP6cGJD5tKDlo2f54MmRgKLCIyJ1uuc9XeNvaBBSJ6P%2BV%2BEcCylaYRvcYsUr%2B5trduognfleLiGpQHnRiREIfjsYt%2FpxcZjDVNDDS8od5XP8L0dVOa%2BjRF3fLXE2BT1%2BINwgkPuohrPmkH85ncBZ3Ne2Acww6%2FN0QY6pgG0GKP22Mr3YrdRLNgpCNpPMuDtnDyLUCUFOwaMuLHoSERIcxlQZJq4NxI4R4XTYGn%2B3apQWClvm2bPzH9w8FGg3Gj%2FaJ5J5iJAGzUJ4fcpowTBWkxrxPaYfp1SJANzf%2Fp0Iig%2B54S5NJ%2F1%2FRjiPzhngUo3w9wMPgd09qW2kKYCWwK7tTxXanWA%2FRrgJHen3Ja41YMHI%2BAtGHVf8KU6qhN9mHStUqHf&X-Amz-Signature=e74596c520a04c1687d8d8a706f6ed1eda981a79e6c981a889f94f125e460cbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCA2ZZCD%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLYR%2BJ%2F9JV3Yowes0%2FcCO5D3HtixmMPFHZRgtZiRbHPQIgDaH2Hq%2BgtvMsF%2FVnfm8r5Uq5X2hW68%2FfAiXGU1OjDpMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKN3zyvk%2FT%2FTRt%2BgsCrcA5StXfJ8aZwzYj6xsjAAZcfygwbXbbIDYpL%2FY%2BVyh5MAFpb7NQ64LFf7he%2F0Z6fSJajBYSwth3EiKEXerOS6UfHN5fn5rQWiNZZFWcaLrCDgmiPwUAa3h4B0MyL6KN%2BD6Is8CVcKhr9fQuf3UBKHVYFSPyWOvaS1YxEKFb5CoFAeEbVIlFdW08edd9xZPlsrQWuOQ6B7cUVI1%2BOfnapp%2FxWuevFr4cEYNT2Z8Buu4GHs6WCL3RB%2FIZvXme4N1tfkGOeXFZOd%2Ba0TXM9n%2BAWJLIGTgWcqGxIjTteGdgveH75ZasT1oxsVlZf7x5i85BouPypOxhkxkXO02mSi8TPgP2vkYHn6OAX8iTLzZbeaHnOlmV302FaqC46LYTwzwZnj48YmRnh%2BlfkTT4rRiUMrn4PwKxj5qDiny75fhwenx1dGj8MI6CRWtLBf6mVScN4Y7Xix4xPls80q%2BdQuUXBFaMwz5d2iLZEJQO0BpdHizzrOkWZ8LWwdIoVOrkURh8jpq59JldZmQ32yaNuXRCIwiau%2BtFkYPKcDxLgWELzTZazQEyhNdBY7ubGyjXWUu2LjqjMWhUTT0Qz2OR1p97o1NJ5vq0%2FgMF4hoUvpJESX0WfhzvfOedgprDoxivKtMO2vzdEGOqUBZAo0InZMbYCGrh3V%2FWJ1%2FnJeQRheS3nD18%2FQB7Gfp%2B06HJ5UcsVr%2BSAobg9QKNH7ksjTpTmzwG7bOgZqIeUmgXkKIo3AtpPP2mQvY0UhvW9dgPCg3eh8GDPIuqj%2BB8ys9roDzIi2zGWXRgJ7EPo7JHLJFFzmcm7ZS36Yv0iKNjbl3lxOq%2FpNskFod5by4oUxnhES3jUMEcGErYjWjan9Qx1RXxNn&X-Amz-Signature=a202a807d4b112ac2d953249cb38427faeded3df86fc822736564cb97c61e662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ2JVEBA%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH47VgGJ85ESi3UHCzhvS%2BDN%2Bb2b2ZYW2qehbdPbZRD%2BAiA4xhkcCn9ujFW2Bnno9xnOSMYCZCDvAlGDh%2FJXVDyuCyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY7pbME%2BLlAwFFriMKtwDqjg%2BHsFonZom7FI6Bys%2BdzZ56LNsXspINw6NSTxftG7xjIPZvUGkkhtUgNOIDlUJSxP%2F4u3aYLANYBsJEVNWBpVnkpM6cOQo65lHQTTbK%2FD6UNfzgCDyhCZxG8%2B3M0zE0mVC0MRajO6DrOlj6eAzaFPyaM2IjXlO29a1yu%2B8om0vDAjaD9vPpdo%2BywyEuXHox1Ti8105ky5yDEzTZalmuDEk0c76N1h%2FXHORPOy97wpl4BpgdZyHmw%2BvKOUa3%2FSkZAhOrERRc2D6OaOOZ3JeujfW%2FxQ2r%2FpJtWe0V32yN4%2ByxL7C4o%2FDIRRT5V5v0pDa4FStPZSGo2WuRd8jcreJyhkVC2OzRmoC6CuT3rt4jeJB58zg6KGvdQS40UkzRUGApqDA2S%2FSJhYzhOOR81gqdY8AAhFNdN94iF7NEY13kFtUYPG%2FuM7uYV4XzDmD0XMh5dtPKeAikMpJphzsA3AfrpoXLmYDqXSXgnP6cGJD5tKDlo2f54MmRgKLCIyJ1uuc9XeNvaBBSJ6P%2BV%2BEcCylaYRvcYsUr%2B5trduognfleLiGpQHnRiREIfjsYt%2FpxcZjDVNDDS8od5XP8L0dVOa%2BjRF3fLXE2BT1%2BINwgkPuohrPmkH85ncBZ3Ne2Acww6%2FN0QY6pgG0GKP22Mr3YrdRLNgpCNpPMuDtnDyLUCUFOwaMuLHoSERIcxlQZJq4NxI4R4XTYGn%2B3apQWClvm2bPzH9w8FGg3Gj%2FaJ5J5iJAGzUJ4fcpowTBWkxrxPaYfp1SJANzf%2Fp0Iig%2B54S5NJ%2F1%2FRjiPzhngUo3w9wMPgd09qW2kKYCWwK7tTxXanWA%2FRrgJHen3Ja41YMHI%2BAtGHVf8KU6qhN9mHStUqHf&X-Amz-Signature=86073497c0b598b812466ea30079a9122cf77272615686d66e52f73ee387d1f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULLMDENB%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhJk8F8s6Kunt1Xjxr7OQrbZDLGFqq7h4nKz3JAWWsRAiB%2BExO9lfQlL8cDoYgYUx9P1juOWzN%2F6JZPl4%2FZGY50TyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC%2B1Qcu2qCjpCnamiKtwDbyfrO8Jg33H3RSwBj5i7Tv%2F7rbwzfqkcf1E4cdCqWCE%2FKSlJXZpSWjEXF6YfSVQiipDg%2FrNpCrVA8JLgmxenRSFHKU27uPrGi%2Bs%2BGKZYUCp7RLtHIpv3eMFbqfaRn8msNJVWr32xh%2B3axb0%2F9ZAjPu38vV7cGJ5WMrgQMmLa%2BDt51KJTYPfXqrU2%2BDPxTfRexUh9W5zSfyJs8QGpbRuSCgOysVLwgAJ5%2B3RvNG1zZ9Plxj05xHl8gNCrDo9bTWiAWbqDhsPdLrc0%2FI2RV%2BiR3ciuKGsECYO6E76zrnjZI5KHMugn7E%2Fi7e6jkZRJ8VQpkJAuHTDPfqmbKrtxy%2Fp%2FH31fzOyqANnF%2FDo%2B7cA4LAYZFYf9MA%2F4H%2BCb%2F%2F%2FmFysCqrLuSQMZbHyKPKx6kS8%2FyDuGdOq2gU4TPCOoBMraApW67SsOJk4fz032%2FcxaFj2M%2BL4yiN%2F0sj8qWSTeRBPZY7Bs5ulcmGsSixKeLpX%2Fkb8Dq7EXMdRFPjzvpVlBCMm0KLYteajOBSsIWzk%2FthkVutKYvnx%2FhMIoFJ%2F8zmdNs7GNgQPcQheYy02LU5mKIz%2B%2BUgKD5%2F1mPMSvpnIv5DufwbRfhUvRExjjahirZojyV9QHoZNoJjBNVFSly0Mw2bHN0QY6pgHye0kiYe2KZdehojwTlt4rPwXjeosuSOPK4NytMJZPqJbmqoe%2BeHsipNfwhvVd5VIGE82sqdiFYeyMBGUCgqnDJXoOMTvOaZdLSyvGy1jf1V%2FEUgzobqIPacCz7RGbNP87bo02hprwZnWlbvN2cqjuDww0PjdTUJlrQZ39hEXHyaaDS85U%2B%2Fbi7OLu%2FEffNTmFp4opZfxyLZZmZBfEfXOuXQ3fxikJ&X-Amz-Signature=5d87e0a3dbcca120a0fb4b8d8144ce57684f81b896990e6a2075c342d9f3297a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ2JVEBA%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH47VgGJ85ESi3UHCzhvS%2BDN%2Bb2b2ZYW2qehbdPbZRD%2BAiA4xhkcCn9ujFW2Bnno9xnOSMYCZCDvAlGDh%2FJXVDyuCyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY7pbME%2BLlAwFFriMKtwDqjg%2BHsFonZom7FI6Bys%2BdzZ56LNsXspINw6NSTxftG7xjIPZvUGkkhtUgNOIDlUJSxP%2F4u3aYLANYBsJEVNWBpVnkpM6cOQo65lHQTTbK%2FD6UNfzgCDyhCZxG8%2B3M0zE0mVC0MRajO6DrOlj6eAzaFPyaM2IjXlO29a1yu%2B8om0vDAjaD9vPpdo%2BywyEuXHox1Ti8105ky5yDEzTZalmuDEk0c76N1h%2FXHORPOy97wpl4BpgdZyHmw%2BvKOUa3%2FSkZAhOrERRc2D6OaOOZ3JeujfW%2FxQ2r%2FpJtWe0V32yN4%2ByxL7C4o%2FDIRRT5V5v0pDa4FStPZSGo2WuRd8jcreJyhkVC2OzRmoC6CuT3rt4jeJB58zg6KGvdQS40UkzRUGApqDA2S%2FSJhYzhOOR81gqdY8AAhFNdN94iF7NEY13kFtUYPG%2FuM7uYV4XzDmD0XMh5dtPKeAikMpJphzsA3AfrpoXLmYDqXSXgnP6cGJD5tKDlo2f54MmRgKLCIyJ1uuc9XeNvaBBSJ6P%2BV%2BEcCylaYRvcYsUr%2B5trduognfleLiGpQHnRiREIfjsYt%2FpxcZjDVNDDS8od5XP8L0dVOa%2BjRF3fLXE2BT1%2BINwgkPuohrPmkH85ncBZ3Ne2Acww6%2FN0QY6pgG0GKP22Mr3YrdRLNgpCNpPMuDtnDyLUCUFOwaMuLHoSERIcxlQZJq4NxI4R4XTYGn%2B3apQWClvm2bPzH9w8FGg3Gj%2FaJ5J5iJAGzUJ4fcpowTBWkxrxPaYfp1SJANzf%2Fp0Iig%2B54S5NJ%2F1%2FRjiPzhngUo3w9wMPgd09qW2kKYCWwK7tTxXanWA%2FRrgJHen3Ja41YMHI%2BAtGHVf8KU6qhN9mHStUqHf&X-Amz-Signature=d49899a06b42284dadc10a7f70c84daf3a50ff0fff5822f9ef98d67a2307f9de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDLVHN2X%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2jtD%2FA%2Bh%2F3rPg78UCgEYRtSvh7ts02pdvKxmqR8oe2wIgUwR9N959aqa2fChoxqStAAF5AgfXtXDdjtW13Yx%2FppEqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3%2FldJ6yuWFywDqmSrcA0jOr6pASITl9sUF6HfJpTpKhei6EzonXcM%2BE31lPbyJBfkVIcrSeECpxbgqhqC3VLkjm1wXTJevimK%2FEQK7mBfD6KdFeS37eaAeDaFyshyWEhbdKF%2B66yEuhqaki6w4jsNy39MQ%2BI0OL%2FqZ6MT8DpQOkFdeDJUCf4VrqEj3N%2FvUS6mw30cg6dsS%2BGkvgGsGl6a4NOMHLSVULuT%2FyHK8180kW3CpneOaEacjgag2FSu8tTqmeh1UXV63%2F8uW1dF%2BJb2Wqp0tdGENw2Bll80D38b2bIditCXfidEqnoDlq%2Bys%2BFy0X3%2Fs9OMifFYWjeTnf80iTwx4FQSiaMLO4gRl4f5vYIgtfO6uYDiECezucCZ9o3wSXz%2BpU3mxcuhctl3WdojNBTidup9LNLTcgr0OLxiV9QQ0ejFnFgDPebW%2Bw48cnnEPeypQDJhKxUwdnOY6M7LmsX22fAQJjZ6J%2FS%2BG0nRJX45SnMzIwvpuSv32OAuGN3sL75a2O%2Bx%2BJGLFIeqSguMeJBnLfR1A%2BCXTpNpcjNUggnNI7F1O1HSF5pQumNl5gq5qR38rdmaZjSyd3i0dKcCP8JHe99e%2FjI443t%2FJpI0hYIA6A3xWEXKB5R%2BKULZXothskg9NZ4ocpva9MMOwzdEGOqUBG64M3X5flHZ5LcOHehj16bY12HHhD1nNFEJkf%2FZ0l7y2gRaLA7g3qcREwxA8%2BWpzbC%2BvU9l2QEUWYlWz%2FO5pSrXscE3AGb%2BvBvBJ9woEEZmvsHTRFQ0xLcHdbC13Uk4jXIEQS%2FnPGt1uE1%2BVmebMMpOa8waxsv%2FrhV6sG6n48YU7AWFtDY8FSBLkQ7vluPi0FkIL2e17YdagTJle8kG1pJAMsgMe&X-Amz-Signature=94fbfc634cfb955a699b083da3a47e5a22c9e4a94278b8eb42ca41c0d1b23133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ2JVEBA%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH47VgGJ85ESi3UHCzhvS%2BDN%2Bb2b2ZYW2qehbdPbZRD%2BAiA4xhkcCn9ujFW2Bnno9xnOSMYCZCDvAlGDh%2FJXVDyuCyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY7pbME%2BLlAwFFriMKtwDqjg%2BHsFonZom7FI6Bys%2BdzZ56LNsXspINw6NSTxftG7xjIPZvUGkkhtUgNOIDlUJSxP%2F4u3aYLANYBsJEVNWBpVnkpM6cOQo65lHQTTbK%2FD6UNfzgCDyhCZxG8%2B3M0zE0mVC0MRajO6DrOlj6eAzaFPyaM2IjXlO29a1yu%2B8om0vDAjaD9vPpdo%2BywyEuXHox1Ti8105ky5yDEzTZalmuDEk0c76N1h%2FXHORPOy97wpl4BpgdZyHmw%2BvKOUa3%2FSkZAhOrERRc2D6OaOOZ3JeujfW%2FxQ2r%2FpJtWe0V32yN4%2ByxL7C4o%2FDIRRT5V5v0pDa4FStPZSGo2WuRd8jcreJyhkVC2OzRmoC6CuT3rt4jeJB58zg6KGvdQS40UkzRUGApqDA2S%2FSJhYzhOOR81gqdY8AAhFNdN94iF7NEY13kFtUYPG%2FuM7uYV4XzDmD0XMh5dtPKeAikMpJphzsA3AfrpoXLmYDqXSXgnP6cGJD5tKDlo2f54MmRgKLCIyJ1uuc9XeNvaBBSJ6P%2BV%2BEcCylaYRvcYsUr%2B5trduognfleLiGpQHnRiREIfjsYt%2FpxcZjDVNDDS8od5XP8L0dVOa%2BjRF3fLXE2BT1%2BINwgkPuohrPmkH85ncBZ3Ne2Acww6%2FN0QY6pgG0GKP22Mr3YrdRLNgpCNpPMuDtnDyLUCUFOwaMuLHoSERIcxlQZJq4NxI4R4XTYGn%2B3apQWClvm2bPzH9w8FGg3Gj%2FaJ5J5iJAGzUJ4fcpowTBWkxrxPaYfp1SJANzf%2Fp0Iig%2B54S5NJ%2F1%2FRjiPzhngUo3w9wMPgd09qW2kKYCWwK7tTxXanWA%2FRrgJHen3Ja41YMHI%2BAtGHVf8KU6qhN9mHStUqHf&X-Amz-Signature=3bbf98442d3bfb8a932fe4be4f5ed765dbd1f750742ad8808c1d8ad15cdd3f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DNN5DS3%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvBsGiYFkB45sbmcTP7e8tCEjQqoeh3YlJE5IQTAXyUAiEA5B1BCYEQaD6Dpy16HILe7ZI8kYcTIKFNgDb4k80EKlUqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQaYuJ9KQlx9uFBFSrcAwJstzR124V5ZGBP38c7NB4X501ioP%2FbkbeoBNWOg%2BhS%2FKz%2FsJPWTpdoAsdqYrAebkT0W4qL6pzME6blMdNTBSz71kqHEsn9XA5bXVcYqVf9VbZ0oF5GfiRu4kN2EshVXvk8UWi%2F5f6b8YMs7yGrAl606i5wfJjuArLOrDcWGCJviKSxmm3QMvVbwFErkEI9fDX7%2BpdO6AkoDPFKEOXi156YuNgJuSQcEh8ztd246wdJaoMrc9XucHcUHRLdcEx8PFq0rFZwtfoD4w83uGwdqtIPklmmgsh1bO8H7nk1sINY3qMQDRmmbeLNnIOiJXaW9fPcxCrpYq0TVXCrlw0DEEW0Zam7nI9mrIA2kuKfvKGCm3NkHWQa2nezwgaWwlAX5UiSVKbBiPL3zq2l2BTTNg69z%2F7%2BKyGfW8hSDnmH21Sl1A%2BJbnKtH3%2BlrD%2BYuX8O3huwaVph1EdcKGXmQexCNI1r1Angqi%2FumpENECnniKb4E0GV2LcQAGFXMSYso1WwmO5kuLIvQlrAb%2B90SMoNjnQB1Oa2eVxmAb4X26pMSOC879Ke47GomLmkOigQuk317zfYibfgubVQut%2FuDgg63JCAHJNqX9zVsrOxZ1wnH6KDeO4SqGOPOLko7biFMLSvzdEGOqUBATc9kOmyh3Ld1sGg0YRKJ9s6oNmKK0zm2lO8%2FeDdwNGgZhZlIB4ZosZfztX7SmZgBaXgfqItsuVej%2Fi6Qe8PvSPoulxwlXdGY9rQJf3Adh8mr%2FtDi9KMzKvVfO%2F%2BkSwQHXaO06i%2BW%2Bs6ub7LuWkDf9niW0sWSRsBkALTSoAbkm2IEFkCtxFrNhnuPOoqU699rE327S1ADmarhY5yyxNq27S0%2BsoP&X-Amz-Signature=fe5959d25affe8528cecbfca3689dbdf4055d6000202f1a479c84c4dc50fe537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQSFY3OL%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEi184qaB9kG2%2BIlQ7a8GaBEHzB0kxxdZ8zjPKopVaULAiEAu3gkqagFH1AhBYz78LrBzruFWfKdoSi6t9W9ahgoM7QqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXJrzqWqILyJxcKryrcAzTXnZmNm2tb2D6Y5zQ0WS%2BwmPy4wvCInGw0pBv7%2BpwpYuyytJFQbrYfT6Wts0oyVH7jP6y3UudF66qtyH2uDAX14Je2f9j9D%2FfSA8zStFnWvYcfLdMPRL10TeGGc7FoWudRBF6Ggv%2F02bVPXkAzLjnLvx4gxAy3lQXKYwaNaSkaOsfckGrS7%2BKhLsGCwbCHPJYrNQJhjYYiB3GAnQomILB3lq1AWbvRkWgTMwzZfaJGEj6GoCkBRMUOKWktQjbT%2Bn0jnLLscJtf5TkKWM1NbkHPdzEc3vphYJHEMkyXhyVu3LNh8YExDhYE5JVWAIWPP63R4h7uye7JfqTX8xeaVH96B2kpNvib6%2F%2BUkMan%2F8cQRQVON02w9xd90wjamBklx1pRaVHGlSnwEUXymgJNjOdq2lruwu3fUib1BLhp6u5aplx%2FRzzANWFLeA424%2FSnxUvzBanZB5vVUxDMy2s63YL6LITaseq7qDqs%2F6mbP89zW97G5DLJhQO5IqL%2FQ4Yzj7w%2FAmB%2BhV0iStff5VV5hZztVF5EtKpw%2B6Mzw%2B5O510HAtRlPNImp%2FJATQaffvVosHZNQXVsZxIH974YBINcRp3BHaPbuPjsgOGr8Mh1tIw2Mjqa%2FWs3Tr4ZOgx1MKSyzdEGOqUBmIstoJbyAnVChHRFIL%2BULkxYtKjT0bOcSte8clfKEhuVJcIH2H0k8JQvjijkSO8vkT1IsjDpVIgB%2Ftfo4ham6%2BJ3u8OqN7aW%2Fg9X%2Fck9ooQTjzL8l6aHe8Gx4i04QxPExGW4rRgh4mBAeIz08I7ha01JRxa1QfUi5okqDmsKs4vKrYn%2B%2FENvc6nRFaJpgOyO7ALdtz%2FY%2BdjOJivZIssbJtUnjw%2F3&X-Amz-Signature=0bc5e0ac8037b3a737b2710a18b7d15b3951d01459d10e06a91d5309c967a562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDOFLF4B%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2B4%2FcA8baq8uqY2bOZq10Z%2BAtBNOb92VExn1rdUPjtWAiEA%2BmiGDL4DiBNk0%2FNQ39cE9UHcO4gkLHHmZ4EdZixRf3IqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJpQAaSW0cflVc4CircA7LTzZ2mm0Z44SNYVBU4H08Aybc9sf9a2ZZSAODnjkwn3MYMWB4B%2BrrBYSRCbIRhyJqENsVteryD362oGsIyGQC8G4Wnt5vZ%2Bpy4DOOPa7J4XJD3hEoThpA%2Fjpmd%2FPjV1sL0ymayQEFET3hv1%2B%2BVALVoULs5zBkrfbCAeFStN61yxcpHkYhAzJ17OJHLchjxSuW7OPdWqXsRp1OvYwk6uvU0Lmmks6lzEyr%2FRNoICM8lJid7Ikhn2Yb%2Bl2o%2Fwb0%2BhmZQ3niounzoBaV2tU3wjrhCHZSLlw1P6w108f8ISuXMbh9k%2BJH6T22%2Flh0pKZbHyXsoUwLMGL19MURzXKnExVXoirZkhLMblg3ZwFxBHR6GFQxULLbSw5Lns%2BtsAf1uaMTca0BrZ3KsQkUtdxDD68Wo84%2FO5%2FHCiaUZRkt2KWF7FW8ve5w0nhRjz7f7hWrcvgdykrzC1t6Lf5JLorlcj58GDm16NqofeT0CzYRHKXJwRMMA2x6Zc016HyTjRPAyGSuL3O0dU5ilE0K7p31U1zEM417ORsT3EWGRDKWap%2BZ9EeIbzXv6mKljTG4VVCTLq518%2Bji1ah2FHVq2q9zVl7nqax5Nsc6Xo%2FyiC5X7QtrTD%2BN5P9tc%2BX07lvBMMM6vzdEGOqUBiEns6ycSbbEd4tNpvD7pxdgxBuXToEklT00zhf7LK49Ee5UDkCwfF0T4fMXUh%2BAXo%2B%2BysKjYr4bJ7f7AY4SL85WF14fuJLF%2B7dyQ7IB44JYPQJa29%2BtpQXrKUBQaHXkzrbymEneGXd2m6MhUHISKwD8Itk2SFOGq5yFPip6JwXQgAloRTE%2Bz1rnIgrQ9n7n2iBFlsG12NR%2F425eKJ9WjjGW5l8Xj&X-Amz-Signature=9aa547421832fae8ec766ba163ea3552c798f410e3aecd8558724a528b90fbd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ2JVEBA%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH47VgGJ85ESi3UHCzhvS%2BDN%2Bb2b2ZYW2qehbdPbZRD%2BAiA4xhkcCn9ujFW2Bnno9xnOSMYCZCDvAlGDh%2FJXVDyuCyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY7pbME%2BLlAwFFriMKtwDqjg%2BHsFonZom7FI6Bys%2BdzZ56LNsXspINw6NSTxftG7xjIPZvUGkkhtUgNOIDlUJSxP%2F4u3aYLANYBsJEVNWBpVnkpM6cOQo65lHQTTbK%2FD6UNfzgCDyhCZxG8%2B3M0zE0mVC0MRajO6DrOlj6eAzaFPyaM2IjXlO29a1yu%2B8om0vDAjaD9vPpdo%2BywyEuXHox1Ti8105ky5yDEzTZalmuDEk0c76N1h%2FXHORPOy97wpl4BpgdZyHmw%2BvKOUa3%2FSkZAhOrERRc2D6OaOOZ3JeujfW%2FxQ2r%2FpJtWe0V32yN4%2ByxL7C4o%2FDIRRT5V5v0pDa4FStPZSGo2WuRd8jcreJyhkVC2OzRmoC6CuT3rt4jeJB58zg6KGvdQS40UkzRUGApqDA2S%2FSJhYzhOOR81gqdY8AAhFNdN94iF7NEY13kFtUYPG%2FuM7uYV4XzDmD0XMh5dtPKeAikMpJphzsA3AfrpoXLmYDqXSXgnP6cGJD5tKDlo2f54MmRgKLCIyJ1uuc9XeNvaBBSJ6P%2BV%2BEcCylaYRvcYsUr%2B5trduognfleLiGpQHnRiREIfjsYt%2FpxcZjDVNDDS8od5XP8L0dVOa%2BjRF3fLXE2BT1%2BINwgkPuohrPmkH85ncBZ3Ne2Acww6%2FN0QY6pgG0GKP22Mr3YrdRLNgpCNpPMuDtnDyLUCUFOwaMuLHoSERIcxlQZJq4NxI4R4XTYGn%2B3apQWClvm2bPzH9w8FGg3Gj%2FaJ5J5iJAGzUJ4fcpowTBWkxrxPaYfp1SJANzf%2Fp0Iig%2B54S5NJ%2F1%2FRjiPzhngUo3w9wMPgd09qW2kKYCWwK7tTxXanWA%2FRrgJHen3Ja41YMHI%2BAtGHVf8KU6qhN9mHStUqHf&X-Amz-Signature=1c3e8eca7d684cdb57941f90ab759c88adc7878353739a4b06d18b42c7ccb9fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ2JVEBA%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH47VgGJ85ESi3UHCzhvS%2BDN%2Bb2b2ZYW2qehbdPbZRD%2BAiA4xhkcCn9ujFW2Bnno9xnOSMYCZCDvAlGDh%2FJXVDyuCyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY7pbME%2BLlAwFFriMKtwDqjg%2BHsFonZom7FI6Bys%2BdzZ56LNsXspINw6NSTxftG7xjIPZvUGkkhtUgNOIDlUJSxP%2F4u3aYLANYBsJEVNWBpVnkpM6cOQo65lHQTTbK%2FD6UNfzgCDyhCZxG8%2B3M0zE0mVC0MRajO6DrOlj6eAzaFPyaM2IjXlO29a1yu%2B8om0vDAjaD9vPpdo%2BywyEuXHox1Ti8105ky5yDEzTZalmuDEk0c76N1h%2FXHORPOy97wpl4BpgdZyHmw%2BvKOUa3%2FSkZAhOrERRc2D6OaOOZ3JeujfW%2FxQ2r%2FpJtWe0V32yN4%2ByxL7C4o%2FDIRRT5V5v0pDa4FStPZSGo2WuRd8jcreJyhkVC2OzRmoC6CuT3rt4jeJB58zg6KGvdQS40UkzRUGApqDA2S%2FSJhYzhOOR81gqdY8AAhFNdN94iF7NEY13kFtUYPG%2FuM7uYV4XzDmD0XMh5dtPKeAikMpJphzsA3AfrpoXLmYDqXSXgnP6cGJD5tKDlo2f54MmRgKLCIyJ1uuc9XeNvaBBSJ6P%2BV%2BEcCylaYRvcYsUr%2B5trduognfleLiGpQHnRiREIfjsYt%2FpxcZjDVNDDS8od5XP8L0dVOa%2BjRF3fLXE2BT1%2BINwgkPuohrPmkH85ncBZ3Ne2Acww6%2FN0QY6pgG0GKP22Mr3YrdRLNgpCNpPMuDtnDyLUCUFOwaMuLHoSERIcxlQZJq4NxI4R4XTYGn%2B3apQWClvm2bPzH9w8FGg3Gj%2FaJ5J5iJAGzUJ4fcpowTBWkxrxPaYfp1SJANzf%2Fp0Iig%2B54S5NJ%2F1%2FRjiPzhngUo3w9wMPgd09qW2kKYCWwK7tTxXanWA%2FRrgJHen3Ja41YMHI%2BAtGHVf8KU6qhN9mHStUqHf&X-Amz-Signature=d427bd77661ff6b43614662b84d6e92c3dd18e65b7589a545594e0b5afdac37f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IW5JY7Z%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcVW2HYTAT98NQsEQ3ETMB8cGBJIPeJSVJXZ0m79ZNJAIgXigWO4EDgphpIbFds3txZXb1YJpcd36b%2FbtRwIOnKbQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvSfKbdbDqe1K8gaircA6Y1GvKYGSSkw%2BxsuYX9JCQUe%2BHz97BY5XljKDxSzsyZbtmEfdCP0L%2BMf4%2F488U5vwTepgBpMqiOHGf40MTGC5TiwYra40PoFtxoCHj0sD%2BoiIRVtHXN0GzWQ2Bin4199w7MrzkinGCzGeaK3uSIbcKPv96EyATYWsHxU633PfVSrsFgyCMEB3mH2aYvkPq8PbF71prjyvMwCJgbYyBeoBEVs9rFGNLIyazHhnFClxveQzo49z4tZKgje8s4ZjHueZmg%2BWkhfB84qEptt5W53WkF723GsQxBgDjCUxmoWVTS9dB6B4wWXMa4LvzG6HljEpmwznv44aJLvhr%2BFQ6lQ78Jgr2KDU9WtqPgst3vu9FjK%2Bx8BHtzn6Oa2V191bwlPbjesfRyKyFg9eyLujwZQ8qgIEWX00sstA8Pw8CpL%2BZhTE8z2Anf3uxnGTqzUlHXxPXnJ0jZ5ZefRE0Q8NJDqMsU5JspsiuI3dqP0cFuNRVFhQwU1XxVtQIcLwlvGFLJL%2BQM86GPiXEU%2B6tBi4vAwdxTP9BmjdjzV%2FA2%2FJ3tpE98n5dzB%2FMWtKdsPHLERgmW9llbh8rx4DdQiuYRLUgcHH2KmHXrgR8RG1t1JeFtzRLxbxASGwy50W%2BkAuDuMNOvzdEGOqUBI31IH7VQimHfFfVcE%2FXn2Hn2Lbi7cd%2BjNYXiGvPmet41L7xmewBiYtpJa2evmnxP0PGDZKbS0RQlaO39fgcUuySW68peZv4OdYp%2Fr9GNsJh8MsCiHKR20GYxKxqH8hXtKPfmSBqwBzt94Y2wiZ48iqzXPU5M3XLG6jDSAXhYHp%2FJXzVWxw1KMMZ6Sykhh6bWAx6mRlu5I8s2anl6oyLxioVrCkrW&X-Amz-Signature=b897ff8a79373e1d73d6b18638f379b0f2f6c57e892dd342f3d451e776c512c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IW5JY7Z%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcVW2HYTAT98NQsEQ3ETMB8cGBJIPeJSVJXZ0m79ZNJAIgXigWO4EDgphpIbFds3txZXb1YJpcd36b%2FbtRwIOnKbQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvSfKbdbDqe1K8gaircA6Y1GvKYGSSkw%2BxsuYX9JCQUe%2BHz97BY5XljKDxSzsyZbtmEfdCP0L%2BMf4%2F488U5vwTepgBpMqiOHGf40MTGC5TiwYra40PoFtxoCHj0sD%2BoiIRVtHXN0GzWQ2Bin4199w7MrzkinGCzGeaK3uSIbcKPv96EyATYWsHxU633PfVSrsFgyCMEB3mH2aYvkPq8PbF71prjyvMwCJgbYyBeoBEVs9rFGNLIyazHhnFClxveQzo49z4tZKgje8s4ZjHueZmg%2BWkhfB84qEptt5W53WkF723GsQxBgDjCUxmoWVTS9dB6B4wWXMa4LvzG6HljEpmwznv44aJLvhr%2BFQ6lQ78Jgr2KDU9WtqPgst3vu9FjK%2Bx8BHtzn6Oa2V191bwlPbjesfRyKyFg9eyLujwZQ8qgIEWX00sstA8Pw8CpL%2BZhTE8z2Anf3uxnGTqzUlHXxPXnJ0jZ5ZefRE0Q8NJDqMsU5JspsiuI3dqP0cFuNRVFhQwU1XxVtQIcLwlvGFLJL%2BQM86GPiXEU%2B6tBi4vAwdxTP9BmjdjzV%2FA2%2FJ3tpE98n5dzB%2FMWtKdsPHLERgmW9llbh8rx4DdQiuYRLUgcHH2KmHXrgR8RG1t1JeFtzRLxbxASGwy50W%2BkAuDuMNOvzdEGOqUBI31IH7VQimHfFfVcE%2FXn2Hn2Lbi7cd%2BjNYXiGvPmet41L7xmewBiYtpJa2evmnxP0PGDZKbS0RQlaO39fgcUuySW68peZv4OdYp%2Fr9GNsJh8MsCiHKR20GYxKxqH8hXtKPfmSBqwBzt94Y2wiZ48iqzXPU5M3XLG6jDSAXhYHp%2FJXzVWxw1KMMZ6Sykhh6bWAx6mRlu5I8s2anl6oyLxioVrCkrW&X-Amz-Signature=b87edd39877bcaf00100b3c5f6518e9bdc35006430a185e31e2a49056f24b3a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IW5JY7Z%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcVW2HYTAT98NQsEQ3ETMB8cGBJIPeJSVJXZ0m79ZNJAIgXigWO4EDgphpIbFds3txZXb1YJpcd36b%2FbtRwIOnKbQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvSfKbdbDqe1K8gaircA6Y1GvKYGSSkw%2BxsuYX9JCQUe%2BHz97BY5XljKDxSzsyZbtmEfdCP0L%2BMf4%2F488U5vwTepgBpMqiOHGf40MTGC5TiwYra40PoFtxoCHj0sD%2BoiIRVtHXN0GzWQ2Bin4199w7MrzkinGCzGeaK3uSIbcKPv96EyATYWsHxU633PfVSrsFgyCMEB3mH2aYvkPq8PbF71prjyvMwCJgbYyBeoBEVs9rFGNLIyazHhnFClxveQzo49z4tZKgje8s4ZjHueZmg%2BWkhfB84qEptt5W53WkF723GsQxBgDjCUxmoWVTS9dB6B4wWXMa4LvzG6HljEpmwznv44aJLvhr%2BFQ6lQ78Jgr2KDU9WtqPgst3vu9FjK%2Bx8BHtzn6Oa2V191bwlPbjesfRyKyFg9eyLujwZQ8qgIEWX00sstA8Pw8CpL%2BZhTE8z2Anf3uxnGTqzUlHXxPXnJ0jZ5ZefRE0Q8NJDqMsU5JspsiuI3dqP0cFuNRVFhQwU1XxVtQIcLwlvGFLJL%2BQM86GPiXEU%2B6tBi4vAwdxTP9BmjdjzV%2FA2%2FJ3tpE98n5dzB%2FMWtKdsPHLERgmW9llbh8rx4DdQiuYRLUgcHH2KmHXrgR8RG1t1JeFtzRLxbxASGwy50W%2BkAuDuMNOvzdEGOqUBI31IH7VQimHfFfVcE%2FXn2Hn2Lbi7cd%2BjNYXiGvPmet41L7xmewBiYtpJa2evmnxP0PGDZKbS0RQlaO39fgcUuySW68peZv4OdYp%2Fr9GNsJh8MsCiHKR20GYxKxqH8hXtKPfmSBqwBzt94Y2wiZ48iqzXPU5M3XLG6jDSAXhYHp%2FJXzVWxw1KMMZ6Sykhh6bWAx6mRlu5I8s2anl6oyLxioVrCkrW&X-Amz-Signature=c56567613db842058439777aa30a5e20694649b218beea736673770ff8dd2e99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IW5JY7Z%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcVW2HYTAT98NQsEQ3ETMB8cGBJIPeJSVJXZ0m79ZNJAIgXigWO4EDgphpIbFds3txZXb1YJpcd36b%2FbtRwIOnKbQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvSfKbdbDqe1K8gaircA6Y1GvKYGSSkw%2BxsuYX9JCQUe%2BHz97BY5XljKDxSzsyZbtmEfdCP0L%2BMf4%2F488U5vwTepgBpMqiOHGf40MTGC5TiwYra40PoFtxoCHj0sD%2BoiIRVtHXN0GzWQ2Bin4199w7MrzkinGCzGeaK3uSIbcKPv96EyATYWsHxU633PfVSrsFgyCMEB3mH2aYvkPq8PbF71prjyvMwCJgbYyBeoBEVs9rFGNLIyazHhnFClxveQzo49z4tZKgje8s4ZjHueZmg%2BWkhfB84qEptt5W53WkF723GsQxBgDjCUxmoWVTS9dB6B4wWXMa4LvzG6HljEpmwznv44aJLvhr%2BFQ6lQ78Jgr2KDU9WtqPgst3vu9FjK%2Bx8BHtzn6Oa2V191bwlPbjesfRyKyFg9eyLujwZQ8qgIEWX00sstA8Pw8CpL%2BZhTE8z2Anf3uxnGTqzUlHXxPXnJ0jZ5ZefRE0Q8NJDqMsU5JspsiuI3dqP0cFuNRVFhQwU1XxVtQIcLwlvGFLJL%2BQM86GPiXEU%2B6tBi4vAwdxTP9BmjdjzV%2FA2%2FJ3tpE98n5dzB%2FMWtKdsPHLERgmW9llbh8rx4DdQiuYRLUgcHH2KmHXrgR8RG1t1JeFtzRLxbxASGwy50W%2BkAuDuMNOvzdEGOqUBI31IH7VQimHfFfVcE%2FXn2Hn2Lbi7cd%2BjNYXiGvPmet41L7xmewBiYtpJa2evmnxP0PGDZKbS0RQlaO39fgcUuySW68peZv4OdYp%2Fr9GNsJh8MsCiHKR20GYxKxqH8hXtKPfmSBqwBzt94Y2wiZ48iqzXPU5M3XLG6jDSAXhYHp%2FJXzVWxw1KMMZ6Sykhh6bWAx6mRlu5I8s2anl6oyLxioVrCkrW&X-Amz-Signature=89ca549b9e8aed2b18730e7ff13c132a7ea66bb492885304d1e7173d473fb053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHO6VQR3%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSE23YUeGVk%2BuSGzYADmVhzjIB7ifNAAWo2vSKtmAgjAiATOFPVnFnd0DzHCLPMssHV%2BBq3HYN%2FWe5V%2Bge5XL%2Bx%2FSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgGgYWm5UKoN6%2Fi7EKtwDZfriqBrh%2BKTryQ7%2FS6t1QgAlmmlua1Dz2XwD232iToDNEKG5t%2BB58ficqNW4KCPNtzH7MzZ47Qy2PiW4WeSLBaMWsAJgdalk5bgR%2FL8jyN331FR4K4RzTk3A2lzcxmnWOsM5sFTF5s5LYCEbTb%2F8hvLd%2FTyiTm1eU9%2BbYVrVB0a7xgKT8wDHF%2FEOGvopp84ogJSsoDs6WHFrdBefj03otmXi3a1QGUEmYUO1xQ4Pvygjx6Z5mCY08QcIqUMqna6tnb7xYRFD%2FPZuWqkZnFyglH3ntndTuI%2BqY37AvLPrp2iqVBQ9T2dCDnw3udMhBp3lDNFnl%2BY6SFumgxburALA1oFaCuttsDHgFFxtK27TVJ%2FHES%2FkepOwUNBfrMS2isUid1kjqeuSjdcfHJ1CX0fi5CwCTMxHWT8ltggar05wlwFCXiUZtF3FKh9WoAhL7GZsk3wBp9axnPP9WZRfxSZ2tsaHUbvIgyw87tTX1xSrAXQRf669oBZdKRfE92RTVoj3tZjsARaoHpGKtI7V08gP1yQG0yUP7HdQZOyJX0ftagqtfyFst2pHPMqufZqKt751xXmhdsi%2F3faquZGOPyZcvhqQE2d4a%2Ff2lXWgPyyYWX%2FrD5AL6swcLrsjqLIwrbHN0QY6pgEmm%2FwcygImvP3zfDLAZ05IfcroAhUPjgYkDbWKQIU7bWP6RkhLwWEOxT%2B14bK8a1lRGfEBOAQKcogYZneTlm3PEWPl499GNoCqd3S98APDNokKwwtkzMlixCQ%2BQ4lZi2LcY3KWSyH9d%2FN0MXOxhgz1lKbCv2WEUn8jnBkVl2gRqxfYjm3rSWC2cOA9TEzGDdS%2Bm3xWIOUMbVW9CriiFA85XE20kCdo&X-Amz-Signature=8d0455e6e72e15a3a75aa2498c68c07043ce13c7abbbfd97d123814cbed80095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IW5JY7Z%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcVW2HYTAT98NQsEQ3ETMB8cGBJIPeJSVJXZ0m79ZNJAIgXigWO4EDgphpIbFds3txZXb1YJpcd36b%2FbtRwIOnKbQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvSfKbdbDqe1K8gaircA6Y1GvKYGSSkw%2BxsuYX9JCQUe%2BHz97BY5XljKDxSzsyZbtmEfdCP0L%2BMf4%2F488U5vwTepgBpMqiOHGf40MTGC5TiwYra40PoFtxoCHj0sD%2BoiIRVtHXN0GzWQ2Bin4199w7MrzkinGCzGeaK3uSIbcKPv96EyATYWsHxU633PfVSrsFgyCMEB3mH2aYvkPq8PbF71prjyvMwCJgbYyBeoBEVs9rFGNLIyazHhnFClxveQzo49z4tZKgje8s4ZjHueZmg%2BWkhfB84qEptt5W53WkF723GsQxBgDjCUxmoWVTS9dB6B4wWXMa4LvzG6HljEpmwznv44aJLvhr%2BFQ6lQ78Jgr2KDU9WtqPgst3vu9FjK%2Bx8BHtzn6Oa2V191bwlPbjesfRyKyFg9eyLujwZQ8qgIEWX00sstA8Pw8CpL%2BZhTE8z2Anf3uxnGTqzUlHXxPXnJ0jZ5ZefRE0Q8NJDqMsU5JspsiuI3dqP0cFuNRVFhQwU1XxVtQIcLwlvGFLJL%2BQM86GPiXEU%2B6tBi4vAwdxTP9BmjdjzV%2FA2%2FJ3tpE98n5dzB%2FMWtKdsPHLERgmW9llbh8rx4DdQiuYRLUgcHH2KmHXrgR8RG1t1JeFtzRLxbxASGwy50W%2BkAuDuMNOvzdEGOqUBI31IH7VQimHfFfVcE%2FXn2Hn2Lbi7cd%2BjNYXiGvPmet41L7xmewBiYtpJa2evmnxP0PGDZKbS0RQlaO39fgcUuySW68peZv4OdYp%2Fr9GNsJh8MsCiHKR20GYxKxqH8hXtKPfmSBqwBzt94Y2wiZ48iqzXPU5M3XLG6jDSAXhYHp%2FJXzVWxw1KMMZ6Sykhh6bWAx6mRlu5I8s2anl6oyLxioVrCkrW&X-Amz-Signature=0a954da1666d39c4c253f479df9e3ce6b53c18968e7f5663f90060a90e874f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IW5JY7Z%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcVW2HYTAT98NQsEQ3ETMB8cGBJIPeJSVJXZ0m79ZNJAIgXigWO4EDgphpIbFds3txZXb1YJpcd36b%2FbtRwIOnKbQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvSfKbdbDqe1K8gaircA6Y1GvKYGSSkw%2BxsuYX9JCQUe%2BHz97BY5XljKDxSzsyZbtmEfdCP0L%2BMf4%2F488U5vwTepgBpMqiOHGf40MTGC5TiwYra40PoFtxoCHj0sD%2BoiIRVtHXN0GzWQ2Bin4199w7MrzkinGCzGeaK3uSIbcKPv96EyATYWsHxU633PfVSrsFgyCMEB3mH2aYvkPq8PbF71prjyvMwCJgbYyBeoBEVs9rFGNLIyazHhnFClxveQzo49z4tZKgje8s4ZjHueZmg%2BWkhfB84qEptt5W53WkF723GsQxBgDjCUxmoWVTS9dB6B4wWXMa4LvzG6HljEpmwznv44aJLvhr%2BFQ6lQ78Jgr2KDU9WtqPgst3vu9FjK%2Bx8BHtzn6Oa2V191bwlPbjesfRyKyFg9eyLujwZQ8qgIEWX00sstA8Pw8CpL%2BZhTE8z2Anf3uxnGTqzUlHXxPXnJ0jZ5ZefRE0Q8NJDqMsU5JspsiuI3dqP0cFuNRVFhQwU1XxVtQIcLwlvGFLJL%2BQM86GPiXEU%2B6tBi4vAwdxTP9BmjdjzV%2FA2%2FJ3tpE98n5dzB%2FMWtKdsPHLERgmW9llbh8rx4DdQiuYRLUgcHH2KmHXrgR8RG1t1JeFtzRLxbxASGwy50W%2BkAuDuMNOvzdEGOqUBI31IH7VQimHfFfVcE%2FXn2Hn2Lbi7cd%2BjNYXiGvPmet41L7xmewBiYtpJa2evmnxP0PGDZKbS0RQlaO39fgcUuySW68peZv4OdYp%2Fr9GNsJh8MsCiHKR20GYxKxqH8hXtKPfmSBqwBzt94Y2wiZ48iqzXPU5M3XLG6jDSAXhYHp%2FJXzVWxw1KMMZ6Sykhh6bWAx6mRlu5I8s2anl6oyLxioVrCkrW&X-Amz-Signature=fd7cc0210266d703db837de1d7fd1843fb093795fd32d93a5ce8e403c6debced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IW5JY7Z%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcVW2HYTAT98NQsEQ3ETMB8cGBJIPeJSVJXZ0m79ZNJAIgXigWO4EDgphpIbFds3txZXb1YJpcd36b%2FbtRwIOnKbQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvSfKbdbDqe1K8gaircA6Y1GvKYGSSkw%2BxsuYX9JCQUe%2BHz97BY5XljKDxSzsyZbtmEfdCP0L%2BMf4%2F488U5vwTepgBpMqiOHGf40MTGC5TiwYra40PoFtxoCHj0sD%2BoiIRVtHXN0GzWQ2Bin4199w7MrzkinGCzGeaK3uSIbcKPv96EyATYWsHxU633PfVSrsFgyCMEB3mH2aYvkPq8PbF71prjyvMwCJgbYyBeoBEVs9rFGNLIyazHhnFClxveQzo49z4tZKgje8s4ZjHueZmg%2BWkhfB84qEptt5W53WkF723GsQxBgDjCUxmoWVTS9dB6B4wWXMa4LvzG6HljEpmwznv44aJLvhr%2BFQ6lQ78Jgr2KDU9WtqPgst3vu9FjK%2Bx8BHtzn6Oa2V191bwlPbjesfRyKyFg9eyLujwZQ8qgIEWX00sstA8Pw8CpL%2BZhTE8z2Anf3uxnGTqzUlHXxPXnJ0jZ5ZefRE0Q8NJDqMsU5JspsiuI3dqP0cFuNRVFhQwU1XxVtQIcLwlvGFLJL%2BQM86GPiXEU%2B6tBi4vAwdxTP9BmjdjzV%2FA2%2FJ3tpE98n5dzB%2FMWtKdsPHLERgmW9llbh8rx4DdQiuYRLUgcHH2KmHXrgR8RG1t1JeFtzRLxbxASGwy50W%2BkAuDuMNOvzdEGOqUBI31IH7VQimHfFfVcE%2FXn2Hn2Lbi7cd%2BjNYXiGvPmet41L7xmewBiYtpJa2evmnxP0PGDZKbS0RQlaO39fgcUuySW68peZv4OdYp%2Fr9GNsJh8MsCiHKR20GYxKxqH8hXtKPfmSBqwBzt94Y2wiZ48iqzXPU5M3XLG6jDSAXhYHp%2FJXzVWxw1KMMZ6Sykhh6bWAx6mRlu5I8s2anl6oyLxioVrCkrW&X-Amz-Signature=c56567613db842058439777aa30a5e20694649b218beea736673770ff8dd2e99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IW5JY7Z%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcVW2HYTAT98NQsEQ3ETMB8cGBJIPeJSVJXZ0m79ZNJAIgXigWO4EDgphpIbFds3txZXb1YJpcd36b%2FbtRwIOnKbQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvSfKbdbDqe1K8gaircA6Y1GvKYGSSkw%2BxsuYX9JCQUe%2BHz97BY5XljKDxSzsyZbtmEfdCP0L%2BMf4%2F488U5vwTepgBpMqiOHGf40MTGC5TiwYra40PoFtxoCHj0sD%2BoiIRVtHXN0GzWQ2Bin4199w7MrzkinGCzGeaK3uSIbcKPv96EyATYWsHxU633PfVSrsFgyCMEB3mH2aYvkPq8PbF71prjyvMwCJgbYyBeoBEVs9rFGNLIyazHhnFClxveQzo49z4tZKgje8s4ZjHueZmg%2BWkhfB84qEptt5W53WkF723GsQxBgDjCUxmoWVTS9dB6B4wWXMa4LvzG6HljEpmwznv44aJLvhr%2BFQ6lQ78Jgr2KDU9WtqPgst3vu9FjK%2Bx8BHtzn6Oa2V191bwlPbjesfRyKyFg9eyLujwZQ8qgIEWX00sstA8Pw8CpL%2BZhTE8z2Anf3uxnGTqzUlHXxPXnJ0jZ5ZefRE0Q8NJDqMsU5JspsiuI3dqP0cFuNRVFhQwU1XxVtQIcLwlvGFLJL%2BQM86GPiXEU%2B6tBi4vAwdxTP9BmjdjzV%2FA2%2FJ3tpE98n5dzB%2FMWtKdsPHLERgmW9llbh8rx4DdQiuYRLUgcHH2KmHXrgR8RG1t1JeFtzRLxbxASGwy50W%2BkAuDuMNOvzdEGOqUBI31IH7VQimHfFfVcE%2FXn2Hn2Lbi7cd%2BjNYXiGvPmet41L7xmewBiYtpJa2evmnxP0PGDZKbS0RQlaO39fgcUuySW68peZv4OdYp%2Fr9GNsJh8MsCiHKR20GYxKxqH8hXtKPfmSBqwBzt94Y2wiZ48iqzXPU5M3XLG6jDSAXhYHp%2FJXzVWxw1KMMZ6Sykhh6bWAx6mRlu5I8s2anl6oyLxioVrCkrW&X-Amz-Signature=5e7553c2a84c799c85436934c264aafaae8d90309237ed510253680c9f4480fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IW5JY7Z%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcVW2HYTAT98NQsEQ3ETMB8cGBJIPeJSVJXZ0m79ZNJAIgXigWO4EDgphpIbFds3txZXb1YJpcd36b%2FbtRwIOnKbQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvSfKbdbDqe1K8gaircA6Y1GvKYGSSkw%2BxsuYX9JCQUe%2BHz97BY5XljKDxSzsyZbtmEfdCP0L%2BMf4%2F488U5vwTepgBpMqiOHGf40MTGC5TiwYra40PoFtxoCHj0sD%2BoiIRVtHXN0GzWQ2Bin4199w7MrzkinGCzGeaK3uSIbcKPv96EyATYWsHxU633PfVSrsFgyCMEB3mH2aYvkPq8PbF71prjyvMwCJgbYyBeoBEVs9rFGNLIyazHhnFClxveQzo49z4tZKgje8s4ZjHueZmg%2BWkhfB84qEptt5W53WkF723GsQxBgDjCUxmoWVTS9dB6B4wWXMa4LvzG6HljEpmwznv44aJLvhr%2BFQ6lQ78Jgr2KDU9WtqPgst3vu9FjK%2Bx8BHtzn6Oa2V191bwlPbjesfRyKyFg9eyLujwZQ8qgIEWX00sstA8Pw8CpL%2BZhTE8z2Anf3uxnGTqzUlHXxPXnJ0jZ5ZefRE0Q8NJDqMsU5JspsiuI3dqP0cFuNRVFhQwU1XxVtQIcLwlvGFLJL%2BQM86GPiXEU%2B6tBi4vAwdxTP9BmjdjzV%2FA2%2FJ3tpE98n5dzB%2FMWtKdsPHLERgmW9llbh8rx4DdQiuYRLUgcHH2KmHXrgR8RG1t1JeFtzRLxbxASGwy50W%2BkAuDuMNOvzdEGOqUBI31IH7VQimHfFfVcE%2FXn2Hn2Lbi7cd%2BjNYXiGvPmet41L7xmewBiYtpJa2evmnxP0PGDZKbS0RQlaO39fgcUuySW68peZv4OdYp%2Fr9GNsJh8MsCiHKR20GYxKxqH8hXtKPfmSBqwBzt94Y2wiZ48iqzXPU5M3XLG6jDSAXhYHp%2FJXzVWxw1KMMZ6Sykhh6bWAx6mRlu5I8s2anl6oyLxioVrCkrW&X-Amz-Signature=1602b6a07b35b8a4dff4dce52bc01fe269c461ea10d23de38ca535f5684ba1ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IW5JY7Z%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcVW2HYTAT98NQsEQ3ETMB8cGBJIPeJSVJXZ0m79ZNJAIgXigWO4EDgphpIbFds3txZXb1YJpcd36b%2FbtRwIOnKbQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvSfKbdbDqe1K8gaircA6Y1GvKYGSSkw%2BxsuYX9JCQUe%2BHz97BY5XljKDxSzsyZbtmEfdCP0L%2BMf4%2F488U5vwTepgBpMqiOHGf40MTGC5TiwYra40PoFtxoCHj0sD%2BoiIRVtHXN0GzWQ2Bin4199w7MrzkinGCzGeaK3uSIbcKPv96EyATYWsHxU633PfVSrsFgyCMEB3mH2aYvkPq8PbF71prjyvMwCJgbYyBeoBEVs9rFGNLIyazHhnFClxveQzo49z4tZKgje8s4ZjHueZmg%2BWkhfB84qEptt5W53WkF723GsQxBgDjCUxmoWVTS9dB6B4wWXMa4LvzG6HljEpmwznv44aJLvhr%2BFQ6lQ78Jgr2KDU9WtqPgst3vu9FjK%2Bx8BHtzn6Oa2V191bwlPbjesfRyKyFg9eyLujwZQ8qgIEWX00sstA8Pw8CpL%2BZhTE8z2Anf3uxnGTqzUlHXxPXnJ0jZ5ZefRE0Q8NJDqMsU5JspsiuI3dqP0cFuNRVFhQwU1XxVtQIcLwlvGFLJL%2BQM86GPiXEU%2B6tBi4vAwdxTP9BmjdjzV%2FA2%2FJ3tpE98n5dzB%2FMWtKdsPHLERgmW9llbh8rx4DdQiuYRLUgcHH2KmHXrgR8RG1t1JeFtzRLxbxASGwy50W%2BkAuDuMNOvzdEGOqUBI31IH7VQimHfFfVcE%2FXn2Hn2Lbi7cd%2BjNYXiGvPmet41L7xmewBiYtpJa2evmnxP0PGDZKbS0RQlaO39fgcUuySW68peZv4OdYp%2Fr9GNsJh8MsCiHKR20GYxKxqH8hXtKPfmSBqwBzt94Y2wiZ48iqzXPU5M3XLG6jDSAXhYHp%2FJXzVWxw1KMMZ6Sykhh6bWAx6mRlu5I8s2anl6oyLxioVrCkrW&X-Amz-Signature=b0a8285444c7c842d9409960402b72438a8d8a27c4b601609afdedcd83b9dae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


