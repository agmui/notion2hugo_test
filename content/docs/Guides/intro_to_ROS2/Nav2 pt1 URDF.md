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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEG4S5LL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIG599kaZgLf4QE1I6TlrxrhkGy93u6uJ6FWiDDPwG%2Bj7AiBl1EyFOXlOTUJgVulRNohgDcHKbKnGql1FS8Rhj4xfHyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMs3%2FAfm9OP5iRDS6mKtwDlu2yuibTusLYUiTaiPoQrTDOn5jEN2Dtst7Nf54cEOx9sDnAi%2BtYAAyCGH6gTaZ%2FIY%2BhbSiwTKm7tVuuEH4FbYhrjxDbLbGO3VkOIJtZK2iVkH2e8niJGIYjs1V7zWV7I%2BM%2Flgy%2FQv0Gxvhdfm%2FKmqp%2FE1eOdjrAU0FJjumLA%2Fofc2Da2Tb9UiI6VU%2FFddOGcoiBzxPOJpH1u4ZCEfJ77Qc%2F%2FAPIpu4CrUf9WGFdDSVwXX8XoCx9tqQjPk2AUuUlFda%2FXI%2BjIGNGP2Hxv1hfgJxw5qkqDg5%2Bk8FyyhghjjKzvWZ8y1dQ%2FvpO37UdQEIloxgHpvWgNf1dbQSxR7oNQX4U1nZwuB11Sf32fCtRoPebsISpMCqEIOrt0hcPbjpt24IaFKzljpi6mB2MGK1owOYQjhCXwN%2Fl8h1Bk%2BeNwEXOWxtT8DzAT1zCl5hiNdOJR9aAPB0e8ysQ1A%2FvxvwvrVKxHNwGKDMoEfTwdOvz9gkYzBHPjJsrIBzvM7jLsnuYjSLqLbFQTWEP%2F1sMAQPU3A6EXFbPioXZFJgnLBEqwHZLlMLb4b08mR87dPhaWtIH0t8fdtuVTn6E9eCZxZaaXXdF6ufG74CfuFzRDlnSZBJSXAlrDL2g%2Bbd3Z8cw04aOxAY6pgGujhtZ8Obq9zCkKs6QCb4XaL3aSVm1t4FUmumw0Lid01Iq1gLlDZdKscPM6BFBuoFFl16GBlwnYZiiVDhEwzXOLW8cjR7pMnCEmjapiqYTmfdOVguInh7wbmtUgztX6RFF3K4xIsRaQfweZNdKH3PwGJrj7V7dQ%2BEX64t0gQ36XGVlzVdvLkTeJEo9L0uUUtopZ57w3AyS6FNFQywoh353gJY9Q%2FWO&X-Amz-Signature=247817a91fedc0e4d77a288b6c4a7de11f60fe5cd0609289eda0d6a392113d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEG4S5LL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIG599kaZgLf4QE1I6TlrxrhkGy93u6uJ6FWiDDPwG%2Bj7AiBl1EyFOXlOTUJgVulRNohgDcHKbKnGql1FS8Rhj4xfHyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMs3%2FAfm9OP5iRDS6mKtwDlu2yuibTusLYUiTaiPoQrTDOn5jEN2Dtst7Nf54cEOx9sDnAi%2BtYAAyCGH6gTaZ%2FIY%2BhbSiwTKm7tVuuEH4FbYhrjxDbLbGO3VkOIJtZK2iVkH2e8niJGIYjs1V7zWV7I%2BM%2Flgy%2FQv0Gxvhdfm%2FKmqp%2FE1eOdjrAU0FJjumLA%2Fofc2Da2Tb9UiI6VU%2FFddOGcoiBzxPOJpH1u4ZCEfJ77Qc%2F%2FAPIpu4CrUf9WGFdDSVwXX8XoCx9tqQjPk2AUuUlFda%2FXI%2BjIGNGP2Hxv1hfgJxw5qkqDg5%2Bk8FyyhghjjKzvWZ8y1dQ%2FvpO37UdQEIloxgHpvWgNf1dbQSxR7oNQX4U1nZwuB11Sf32fCtRoPebsISpMCqEIOrt0hcPbjpt24IaFKzljpi6mB2MGK1owOYQjhCXwN%2Fl8h1Bk%2BeNwEXOWxtT8DzAT1zCl5hiNdOJR9aAPB0e8ysQ1A%2FvxvwvrVKxHNwGKDMoEfTwdOvz9gkYzBHPjJsrIBzvM7jLsnuYjSLqLbFQTWEP%2F1sMAQPU3A6EXFbPioXZFJgnLBEqwHZLlMLb4b08mR87dPhaWtIH0t8fdtuVTn6E9eCZxZaaXXdF6ufG74CfuFzRDlnSZBJSXAlrDL2g%2Bbd3Z8cw04aOxAY6pgGujhtZ8Obq9zCkKs6QCb4XaL3aSVm1t4FUmumw0Lid01Iq1gLlDZdKscPM6BFBuoFFl16GBlwnYZiiVDhEwzXOLW8cjR7pMnCEmjapiqYTmfdOVguInh7wbmtUgztX6RFF3K4xIsRaQfweZNdKH3PwGJrj7V7dQ%2BEX64t0gQ36XGVlzVdvLkTeJEo9L0uUUtopZ57w3AyS6FNFQywoh353gJY9Q%2FWO&X-Amz-Signature=5955168497df2626accf932c1becf9d3b75850eef349094bafd43005b93580eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEG4S5LL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIG599kaZgLf4QE1I6TlrxrhkGy93u6uJ6FWiDDPwG%2Bj7AiBl1EyFOXlOTUJgVulRNohgDcHKbKnGql1FS8Rhj4xfHyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMs3%2FAfm9OP5iRDS6mKtwDlu2yuibTusLYUiTaiPoQrTDOn5jEN2Dtst7Nf54cEOx9sDnAi%2BtYAAyCGH6gTaZ%2FIY%2BhbSiwTKm7tVuuEH4FbYhrjxDbLbGO3VkOIJtZK2iVkH2e8niJGIYjs1V7zWV7I%2BM%2Flgy%2FQv0Gxvhdfm%2FKmqp%2FE1eOdjrAU0FJjumLA%2Fofc2Da2Tb9UiI6VU%2FFddOGcoiBzxPOJpH1u4ZCEfJ77Qc%2F%2FAPIpu4CrUf9WGFdDSVwXX8XoCx9tqQjPk2AUuUlFda%2FXI%2BjIGNGP2Hxv1hfgJxw5qkqDg5%2Bk8FyyhghjjKzvWZ8y1dQ%2FvpO37UdQEIloxgHpvWgNf1dbQSxR7oNQX4U1nZwuB11Sf32fCtRoPebsISpMCqEIOrt0hcPbjpt24IaFKzljpi6mB2MGK1owOYQjhCXwN%2Fl8h1Bk%2BeNwEXOWxtT8DzAT1zCl5hiNdOJR9aAPB0e8ysQ1A%2FvxvwvrVKxHNwGKDMoEfTwdOvz9gkYzBHPjJsrIBzvM7jLsnuYjSLqLbFQTWEP%2F1sMAQPU3A6EXFbPioXZFJgnLBEqwHZLlMLb4b08mR87dPhaWtIH0t8fdtuVTn6E9eCZxZaaXXdF6ufG74CfuFzRDlnSZBJSXAlrDL2g%2Bbd3Z8cw04aOxAY6pgGujhtZ8Obq9zCkKs6QCb4XaL3aSVm1t4FUmumw0Lid01Iq1gLlDZdKscPM6BFBuoFFl16GBlwnYZiiVDhEwzXOLW8cjR7pMnCEmjapiqYTmfdOVguInh7wbmtUgztX6RFF3K4xIsRaQfweZNdKH3PwGJrj7V7dQ%2BEX64t0gQ36XGVlzVdvLkTeJEo9L0uUUtopZ57w3AyS6FNFQywoh353gJY9Q%2FWO&X-Amz-Signature=034e965ad64300b837e9b4fcf10f926e51e71f68696aa3c3232ef5b1b4e00c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEG4S5LL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIG599kaZgLf4QE1I6TlrxrhkGy93u6uJ6FWiDDPwG%2Bj7AiBl1EyFOXlOTUJgVulRNohgDcHKbKnGql1FS8Rhj4xfHyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMs3%2FAfm9OP5iRDS6mKtwDlu2yuibTusLYUiTaiPoQrTDOn5jEN2Dtst7Nf54cEOx9sDnAi%2BtYAAyCGH6gTaZ%2FIY%2BhbSiwTKm7tVuuEH4FbYhrjxDbLbGO3VkOIJtZK2iVkH2e8niJGIYjs1V7zWV7I%2BM%2Flgy%2FQv0Gxvhdfm%2FKmqp%2FE1eOdjrAU0FJjumLA%2Fofc2Da2Tb9UiI6VU%2FFddOGcoiBzxPOJpH1u4ZCEfJ77Qc%2F%2FAPIpu4CrUf9WGFdDSVwXX8XoCx9tqQjPk2AUuUlFda%2FXI%2BjIGNGP2Hxv1hfgJxw5qkqDg5%2Bk8FyyhghjjKzvWZ8y1dQ%2FvpO37UdQEIloxgHpvWgNf1dbQSxR7oNQX4U1nZwuB11Sf32fCtRoPebsISpMCqEIOrt0hcPbjpt24IaFKzljpi6mB2MGK1owOYQjhCXwN%2Fl8h1Bk%2BeNwEXOWxtT8DzAT1zCl5hiNdOJR9aAPB0e8ysQ1A%2FvxvwvrVKxHNwGKDMoEfTwdOvz9gkYzBHPjJsrIBzvM7jLsnuYjSLqLbFQTWEP%2F1sMAQPU3A6EXFbPioXZFJgnLBEqwHZLlMLb4b08mR87dPhaWtIH0t8fdtuVTn6E9eCZxZaaXXdF6ufG74CfuFzRDlnSZBJSXAlrDL2g%2Bbd3Z8cw04aOxAY6pgGujhtZ8Obq9zCkKs6QCb4XaL3aSVm1t4FUmumw0Lid01Iq1gLlDZdKscPM6BFBuoFFl16GBlwnYZiiVDhEwzXOLW8cjR7pMnCEmjapiqYTmfdOVguInh7wbmtUgztX6RFF3K4xIsRaQfweZNdKH3PwGJrj7V7dQ%2BEX64t0gQ36XGVlzVdvLkTeJEo9L0uUUtopZ57w3AyS6FNFQywoh353gJY9Q%2FWO&X-Amz-Signature=7f90abf9ded9ee667d3bf55609c0e59178b83f713c8714ce418c3229fbb2f848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEG4S5LL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIG599kaZgLf4QE1I6TlrxrhkGy93u6uJ6FWiDDPwG%2Bj7AiBl1EyFOXlOTUJgVulRNohgDcHKbKnGql1FS8Rhj4xfHyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMs3%2FAfm9OP5iRDS6mKtwDlu2yuibTusLYUiTaiPoQrTDOn5jEN2Dtst7Nf54cEOx9sDnAi%2BtYAAyCGH6gTaZ%2FIY%2BhbSiwTKm7tVuuEH4FbYhrjxDbLbGO3VkOIJtZK2iVkH2e8niJGIYjs1V7zWV7I%2BM%2Flgy%2FQv0Gxvhdfm%2FKmqp%2FE1eOdjrAU0FJjumLA%2Fofc2Da2Tb9UiI6VU%2FFddOGcoiBzxPOJpH1u4ZCEfJ77Qc%2F%2FAPIpu4CrUf9WGFdDSVwXX8XoCx9tqQjPk2AUuUlFda%2FXI%2BjIGNGP2Hxv1hfgJxw5qkqDg5%2Bk8FyyhghjjKzvWZ8y1dQ%2FvpO37UdQEIloxgHpvWgNf1dbQSxR7oNQX4U1nZwuB11Sf32fCtRoPebsISpMCqEIOrt0hcPbjpt24IaFKzljpi6mB2MGK1owOYQjhCXwN%2Fl8h1Bk%2BeNwEXOWxtT8DzAT1zCl5hiNdOJR9aAPB0e8ysQ1A%2FvxvwvrVKxHNwGKDMoEfTwdOvz9gkYzBHPjJsrIBzvM7jLsnuYjSLqLbFQTWEP%2F1sMAQPU3A6EXFbPioXZFJgnLBEqwHZLlMLb4b08mR87dPhaWtIH0t8fdtuVTn6E9eCZxZaaXXdF6ufG74CfuFzRDlnSZBJSXAlrDL2g%2Bbd3Z8cw04aOxAY6pgGujhtZ8Obq9zCkKs6QCb4XaL3aSVm1t4FUmumw0Lid01Iq1gLlDZdKscPM6BFBuoFFl16GBlwnYZiiVDhEwzXOLW8cjR7pMnCEmjapiqYTmfdOVguInh7wbmtUgztX6RFF3K4xIsRaQfweZNdKH3PwGJrj7V7dQ%2BEX64t0gQ36XGVlzVdvLkTeJEo9L0uUUtopZ57w3AyS6FNFQywoh353gJY9Q%2FWO&X-Amz-Signature=97f1781989b85553991ae628ccc32ddf605ab972d645c6d81f9ecebe5d2c3209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEG4S5LL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIG599kaZgLf4QE1I6TlrxrhkGy93u6uJ6FWiDDPwG%2Bj7AiBl1EyFOXlOTUJgVulRNohgDcHKbKnGql1FS8Rhj4xfHyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMs3%2FAfm9OP5iRDS6mKtwDlu2yuibTusLYUiTaiPoQrTDOn5jEN2Dtst7Nf54cEOx9sDnAi%2BtYAAyCGH6gTaZ%2FIY%2BhbSiwTKm7tVuuEH4FbYhrjxDbLbGO3VkOIJtZK2iVkH2e8niJGIYjs1V7zWV7I%2BM%2Flgy%2FQv0Gxvhdfm%2FKmqp%2FE1eOdjrAU0FJjumLA%2Fofc2Da2Tb9UiI6VU%2FFddOGcoiBzxPOJpH1u4ZCEfJ77Qc%2F%2FAPIpu4CrUf9WGFdDSVwXX8XoCx9tqQjPk2AUuUlFda%2FXI%2BjIGNGP2Hxv1hfgJxw5qkqDg5%2Bk8FyyhghjjKzvWZ8y1dQ%2FvpO37UdQEIloxgHpvWgNf1dbQSxR7oNQX4U1nZwuB11Sf32fCtRoPebsISpMCqEIOrt0hcPbjpt24IaFKzljpi6mB2MGK1owOYQjhCXwN%2Fl8h1Bk%2BeNwEXOWxtT8DzAT1zCl5hiNdOJR9aAPB0e8ysQ1A%2FvxvwvrVKxHNwGKDMoEfTwdOvz9gkYzBHPjJsrIBzvM7jLsnuYjSLqLbFQTWEP%2F1sMAQPU3A6EXFbPioXZFJgnLBEqwHZLlMLb4b08mR87dPhaWtIH0t8fdtuVTn6E9eCZxZaaXXdF6ufG74CfuFzRDlnSZBJSXAlrDL2g%2Bbd3Z8cw04aOxAY6pgGujhtZ8Obq9zCkKs6QCb4XaL3aSVm1t4FUmumw0Lid01Iq1gLlDZdKscPM6BFBuoFFl16GBlwnYZiiVDhEwzXOLW8cjR7pMnCEmjapiqYTmfdOVguInh7wbmtUgztX6RFF3K4xIsRaQfweZNdKH3PwGJrj7V7dQ%2BEX64t0gQ36XGVlzVdvLkTeJEo9L0uUUtopZ57w3AyS6FNFQywoh353gJY9Q%2FWO&X-Amz-Signature=fee4fa964eff00f1eb429e6ca6aae7b2f109883094e192c4d9b10e96d77c3d15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEG4S5LL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIG599kaZgLf4QE1I6TlrxrhkGy93u6uJ6FWiDDPwG%2Bj7AiBl1EyFOXlOTUJgVulRNohgDcHKbKnGql1FS8Rhj4xfHyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMs3%2FAfm9OP5iRDS6mKtwDlu2yuibTusLYUiTaiPoQrTDOn5jEN2Dtst7Nf54cEOx9sDnAi%2BtYAAyCGH6gTaZ%2FIY%2BhbSiwTKm7tVuuEH4FbYhrjxDbLbGO3VkOIJtZK2iVkH2e8niJGIYjs1V7zWV7I%2BM%2Flgy%2FQv0Gxvhdfm%2FKmqp%2FE1eOdjrAU0FJjumLA%2Fofc2Da2Tb9UiI6VU%2FFddOGcoiBzxPOJpH1u4ZCEfJ77Qc%2F%2FAPIpu4CrUf9WGFdDSVwXX8XoCx9tqQjPk2AUuUlFda%2FXI%2BjIGNGP2Hxv1hfgJxw5qkqDg5%2Bk8FyyhghjjKzvWZ8y1dQ%2FvpO37UdQEIloxgHpvWgNf1dbQSxR7oNQX4U1nZwuB11Sf32fCtRoPebsISpMCqEIOrt0hcPbjpt24IaFKzljpi6mB2MGK1owOYQjhCXwN%2Fl8h1Bk%2BeNwEXOWxtT8DzAT1zCl5hiNdOJR9aAPB0e8ysQ1A%2FvxvwvrVKxHNwGKDMoEfTwdOvz9gkYzBHPjJsrIBzvM7jLsnuYjSLqLbFQTWEP%2F1sMAQPU3A6EXFbPioXZFJgnLBEqwHZLlMLb4b08mR87dPhaWtIH0t8fdtuVTn6E9eCZxZaaXXdF6ufG74CfuFzRDlnSZBJSXAlrDL2g%2Bbd3Z8cw04aOxAY6pgGujhtZ8Obq9zCkKs6QCb4XaL3aSVm1t4FUmumw0Lid01Iq1gLlDZdKscPM6BFBuoFFl16GBlwnYZiiVDhEwzXOLW8cjR7pMnCEmjapiqYTmfdOVguInh7wbmtUgztX6RFF3K4xIsRaQfweZNdKH3PwGJrj7V7dQ%2BEX64t0gQ36XGVlzVdvLkTeJEo9L0uUUtopZ57w3AyS6FNFQywoh353gJY9Q%2FWO&X-Amz-Signature=74847c339c1d2acda31ae1b858511dfaf1f03a4eb12fb884c65d106ff6023a37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEG4S5LL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIG599kaZgLf4QE1I6TlrxrhkGy93u6uJ6FWiDDPwG%2Bj7AiBl1EyFOXlOTUJgVulRNohgDcHKbKnGql1FS8Rhj4xfHyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMs3%2FAfm9OP5iRDS6mKtwDlu2yuibTusLYUiTaiPoQrTDOn5jEN2Dtst7Nf54cEOx9sDnAi%2BtYAAyCGH6gTaZ%2FIY%2BhbSiwTKm7tVuuEH4FbYhrjxDbLbGO3VkOIJtZK2iVkH2e8niJGIYjs1V7zWV7I%2BM%2Flgy%2FQv0Gxvhdfm%2FKmqp%2FE1eOdjrAU0FJjumLA%2Fofc2Da2Tb9UiI6VU%2FFddOGcoiBzxPOJpH1u4ZCEfJ77Qc%2F%2FAPIpu4CrUf9WGFdDSVwXX8XoCx9tqQjPk2AUuUlFda%2FXI%2BjIGNGP2Hxv1hfgJxw5qkqDg5%2Bk8FyyhghjjKzvWZ8y1dQ%2FvpO37UdQEIloxgHpvWgNf1dbQSxR7oNQX4U1nZwuB11Sf32fCtRoPebsISpMCqEIOrt0hcPbjpt24IaFKzljpi6mB2MGK1owOYQjhCXwN%2Fl8h1Bk%2BeNwEXOWxtT8DzAT1zCl5hiNdOJR9aAPB0e8ysQ1A%2FvxvwvrVKxHNwGKDMoEfTwdOvz9gkYzBHPjJsrIBzvM7jLsnuYjSLqLbFQTWEP%2F1sMAQPU3A6EXFbPioXZFJgnLBEqwHZLlMLb4b08mR87dPhaWtIH0t8fdtuVTn6E9eCZxZaaXXdF6ufG74CfuFzRDlnSZBJSXAlrDL2g%2Bbd3Z8cw04aOxAY6pgGujhtZ8Obq9zCkKs6QCb4XaL3aSVm1t4FUmumw0Lid01Iq1gLlDZdKscPM6BFBuoFFl16GBlwnYZiiVDhEwzXOLW8cjR7pMnCEmjapiqYTmfdOVguInh7wbmtUgztX6RFF3K4xIsRaQfweZNdKH3PwGJrj7V7dQ%2BEX64t0gQ36XGVlzVdvLkTeJEo9L0uUUtopZ57w3AyS6FNFQywoh353gJY9Q%2FWO&X-Amz-Signature=8a15e4c3f932eb0e71bef460aaaa7e3f6f12a61ee9bcbc6f5e364c591b6b4fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEG4S5LL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIG599kaZgLf4QE1I6TlrxrhkGy93u6uJ6FWiDDPwG%2Bj7AiBl1EyFOXlOTUJgVulRNohgDcHKbKnGql1FS8Rhj4xfHyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMs3%2FAfm9OP5iRDS6mKtwDlu2yuibTusLYUiTaiPoQrTDOn5jEN2Dtst7Nf54cEOx9sDnAi%2BtYAAyCGH6gTaZ%2FIY%2BhbSiwTKm7tVuuEH4FbYhrjxDbLbGO3VkOIJtZK2iVkH2e8niJGIYjs1V7zWV7I%2BM%2Flgy%2FQv0Gxvhdfm%2FKmqp%2FE1eOdjrAU0FJjumLA%2Fofc2Da2Tb9UiI6VU%2FFddOGcoiBzxPOJpH1u4ZCEfJ77Qc%2F%2FAPIpu4CrUf9WGFdDSVwXX8XoCx9tqQjPk2AUuUlFda%2FXI%2BjIGNGP2Hxv1hfgJxw5qkqDg5%2Bk8FyyhghjjKzvWZ8y1dQ%2FvpO37UdQEIloxgHpvWgNf1dbQSxR7oNQX4U1nZwuB11Sf32fCtRoPebsISpMCqEIOrt0hcPbjpt24IaFKzljpi6mB2MGK1owOYQjhCXwN%2Fl8h1Bk%2BeNwEXOWxtT8DzAT1zCl5hiNdOJR9aAPB0e8ysQ1A%2FvxvwvrVKxHNwGKDMoEfTwdOvz9gkYzBHPjJsrIBzvM7jLsnuYjSLqLbFQTWEP%2F1sMAQPU3A6EXFbPioXZFJgnLBEqwHZLlMLb4b08mR87dPhaWtIH0t8fdtuVTn6E9eCZxZaaXXdF6ufG74CfuFzRDlnSZBJSXAlrDL2g%2Bbd3Z8cw04aOxAY6pgGujhtZ8Obq9zCkKs6QCb4XaL3aSVm1t4FUmumw0Lid01Iq1gLlDZdKscPM6BFBuoFFl16GBlwnYZiiVDhEwzXOLW8cjR7pMnCEmjapiqYTmfdOVguInh7wbmtUgztX6RFF3K4xIsRaQfweZNdKH3PwGJrj7V7dQ%2BEX64t0gQ36XGVlzVdvLkTeJEo9L0uUUtopZ57w3AyS6FNFQywoh353gJY9Q%2FWO&X-Amz-Signature=442cc0c1c8e65fb19d36598397315ff055acc900ddc569b3d8dd94456b05d8b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEG4S5LL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIG599kaZgLf4QE1I6TlrxrhkGy93u6uJ6FWiDDPwG%2Bj7AiBl1EyFOXlOTUJgVulRNohgDcHKbKnGql1FS8Rhj4xfHyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMs3%2FAfm9OP5iRDS6mKtwDlu2yuibTusLYUiTaiPoQrTDOn5jEN2Dtst7Nf54cEOx9sDnAi%2BtYAAyCGH6gTaZ%2FIY%2BhbSiwTKm7tVuuEH4FbYhrjxDbLbGO3VkOIJtZK2iVkH2e8niJGIYjs1V7zWV7I%2BM%2Flgy%2FQv0Gxvhdfm%2FKmqp%2FE1eOdjrAU0FJjumLA%2Fofc2Da2Tb9UiI6VU%2FFddOGcoiBzxPOJpH1u4ZCEfJ77Qc%2F%2FAPIpu4CrUf9WGFdDSVwXX8XoCx9tqQjPk2AUuUlFda%2FXI%2BjIGNGP2Hxv1hfgJxw5qkqDg5%2Bk8FyyhghjjKzvWZ8y1dQ%2FvpO37UdQEIloxgHpvWgNf1dbQSxR7oNQX4U1nZwuB11Sf32fCtRoPebsISpMCqEIOrt0hcPbjpt24IaFKzljpi6mB2MGK1owOYQjhCXwN%2Fl8h1Bk%2BeNwEXOWxtT8DzAT1zCl5hiNdOJR9aAPB0e8ysQ1A%2FvxvwvrVKxHNwGKDMoEfTwdOvz9gkYzBHPjJsrIBzvM7jLsnuYjSLqLbFQTWEP%2F1sMAQPU3A6EXFbPioXZFJgnLBEqwHZLlMLb4b08mR87dPhaWtIH0t8fdtuVTn6E9eCZxZaaXXdF6ufG74CfuFzRDlnSZBJSXAlrDL2g%2Bbd3Z8cw04aOxAY6pgGujhtZ8Obq9zCkKs6QCb4XaL3aSVm1t4FUmumw0Lid01Iq1gLlDZdKscPM6BFBuoFFl16GBlwnYZiiVDhEwzXOLW8cjR7pMnCEmjapiqYTmfdOVguInh7wbmtUgztX6RFF3K4xIsRaQfweZNdKH3PwGJrj7V7dQ%2BEX64t0gQ36XGVlzVdvLkTeJEo9L0uUUtopZ57w3AyS6FNFQywoh353gJY9Q%2FWO&X-Amz-Signature=fe816b9bec4854f575013e6b452e69f2814b5ae248fca50d5c216800feed0b17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEG4S5LL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIG599kaZgLf4QE1I6TlrxrhkGy93u6uJ6FWiDDPwG%2Bj7AiBl1EyFOXlOTUJgVulRNohgDcHKbKnGql1FS8Rhj4xfHyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMs3%2FAfm9OP5iRDS6mKtwDlu2yuibTusLYUiTaiPoQrTDOn5jEN2Dtst7Nf54cEOx9sDnAi%2BtYAAyCGH6gTaZ%2FIY%2BhbSiwTKm7tVuuEH4FbYhrjxDbLbGO3VkOIJtZK2iVkH2e8niJGIYjs1V7zWV7I%2BM%2Flgy%2FQv0Gxvhdfm%2FKmqp%2FE1eOdjrAU0FJjumLA%2Fofc2Da2Tb9UiI6VU%2FFddOGcoiBzxPOJpH1u4ZCEfJ77Qc%2F%2FAPIpu4CrUf9WGFdDSVwXX8XoCx9tqQjPk2AUuUlFda%2FXI%2BjIGNGP2Hxv1hfgJxw5qkqDg5%2Bk8FyyhghjjKzvWZ8y1dQ%2FvpO37UdQEIloxgHpvWgNf1dbQSxR7oNQX4U1nZwuB11Sf32fCtRoPebsISpMCqEIOrt0hcPbjpt24IaFKzljpi6mB2MGK1owOYQjhCXwN%2Fl8h1Bk%2BeNwEXOWxtT8DzAT1zCl5hiNdOJR9aAPB0e8ysQ1A%2FvxvwvrVKxHNwGKDMoEfTwdOvz9gkYzBHPjJsrIBzvM7jLsnuYjSLqLbFQTWEP%2F1sMAQPU3A6EXFbPioXZFJgnLBEqwHZLlMLb4b08mR87dPhaWtIH0t8fdtuVTn6E9eCZxZaaXXdF6ufG74CfuFzRDlnSZBJSXAlrDL2g%2Bbd3Z8cw04aOxAY6pgGujhtZ8Obq9zCkKs6QCb4XaL3aSVm1t4FUmumw0Lid01Iq1gLlDZdKscPM6BFBuoFFl16GBlwnYZiiVDhEwzXOLW8cjR7pMnCEmjapiqYTmfdOVguInh7wbmtUgztX6RFF3K4xIsRaQfweZNdKH3PwGJrj7V7dQ%2BEX64t0gQ36XGVlzVdvLkTeJEo9L0uUUtopZ57w3AyS6FNFQywoh353gJY9Q%2FWO&X-Amz-Signature=376ad7afe303d2e9a131604019a3719ef7505dddf66a190e8b3c51be51808695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEG4S5LL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIG599kaZgLf4QE1I6TlrxrhkGy93u6uJ6FWiDDPwG%2Bj7AiBl1EyFOXlOTUJgVulRNohgDcHKbKnGql1FS8Rhj4xfHyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMs3%2FAfm9OP5iRDS6mKtwDlu2yuibTusLYUiTaiPoQrTDOn5jEN2Dtst7Nf54cEOx9sDnAi%2BtYAAyCGH6gTaZ%2FIY%2BhbSiwTKm7tVuuEH4FbYhrjxDbLbGO3VkOIJtZK2iVkH2e8niJGIYjs1V7zWV7I%2BM%2Flgy%2FQv0Gxvhdfm%2FKmqp%2FE1eOdjrAU0FJjumLA%2Fofc2Da2Tb9UiI6VU%2FFddOGcoiBzxPOJpH1u4ZCEfJ77Qc%2F%2FAPIpu4CrUf9WGFdDSVwXX8XoCx9tqQjPk2AUuUlFda%2FXI%2BjIGNGP2Hxv1hfgJxw5qkqDg5%2Bk8FyyhghjjKzvWZ8y1dQ%2FvpO37UdQEIloxgHpvWgNf1dbQSxR7oNQX4U1nZwuB11Sf32fCtRoPebsISpMCqEIOrt0hcPbjpt24IaFKzljpi6mB2MGK1owOYQjhCXwN%2Fl8h1Bk%2BeNwEXOWxtT8DzAT1zCl5hiNdOJR9aAPB0e8ysQ1A%2FvxvwvrVKxHNwGKDMoEfTwdOvz9gkYzBHPjJsrIBzvM7jLsnuYjSLqLbFQTWEP%2F1sMAQPU3A6EXFbPioXZFJgnLBEqwHZLlMLb4b08mR87dPhaWtIH0t8fdtuVTn6E9eCZxZaaXXdF6ufG74CfuFzRDlnSZBJSXAlrDL2g%2Bbd3Z8cw04aOxAY6pgGujhtZ8Obq9zCkKs6QCb4XaL3aSVm1t4FUmumw0Lid01Iq1gLlDZdKscPM6BFBuoFFl16GBlwnYZiiVDhEwzXOLW8cjR7pMnCEmjapiqYTmfdOVguInh7wbmtUgztX6RFF3K4xIsRaQfweZNdKH3PwGJrj7V7dQ%2BEX64t0gQ36XGVlzVdvLkTeJEo9L0uUUtopZ57w3AyS6FNFQywoh353gJY9Q%2FWO&X-Amz-Signature=b75744e8f6a9ec740e6c5d9f8de27138c7573ba092dfff7f550b3922bb945fe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEG4S5LL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIG599kaZgLf4QE1I6TlrxrhkGy93u6uJ6FWiDDPwG%2Bj7AiBl1EyFOXlOTUJgVulRNohgDcHKbKnGql1FS8Rhj4xfHyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMs3%2FAfm9OP5iRDS6mKtwDlu2yuibTusLYUiTaiPoQrTDOn5jEN2Dtst7Nf54cEOx9sDnAi%2BtYAAyCGH6gTaZ%2FIY%2BhbSiwTKm7tVuuEH4FbYhrjxDbLbGO3VkOIJtZK2iVkH2e8niJGIYjs1V7zWV7I%2BM%2Flgy%2FQv0Gxvhdfm%2FKmqp%2FE1eOdjrAU0FJjumLA%2Fofc2Da2Tb9UiI6VU%2FFddOGcoiBzxPOJpH1u4ZCEfJ77Qc%2F%2FAPIpu4CrUf9WGFdDSVwXX8XoCx9tqQjPk2AUuUlFda%2FXI%2BjIGNGP2Hxv1hfgJxw5qkqDg5%2Bk8FyyhghjjKzvWZ8y1dQ%2FvpO37UdQEIloxgHpvWgNf1dbQSxR7oNQX4U1nZwuB11Sf32fCtRoPebsISpMCqEIOrt0hcPbjpt24IaFKzljpi6mB2MGK1owOYQjhCXwN%2Fl8h1Bk%2BeNwEXOWxtT8DzAT1zCl5hiNdOJR9aAPB0e8ysQ1A%2FvxvwvrVKxHNwGKDMoEfTwdOvz9gkYzBHPjJsrIBzvM7jLsnuYjSLqLbFQTWEP%2F1sMAQPU3A6EXFbPioXZFJgnLBEqwHZLlMLb4b08mR87dPhaWtIH0t8fdtuVTn6E9eCZxZaaXXdF6ufG74CfuFzRDlnSZBJSXAlrDL2g%2Bbd3Z8cw04aOxAY6pgGujhtZ8Obq9zCkKs6QCb4XaL3aSVm1t4FUmumw0Lid01Iq1gLlDZdKscPM6BFBuoFFl16GBlwnYZiiVDhEwzXOLW8cjR7pMnCEmjapiqYTmfdOVguInh7wbmtUgztX6RFF3K4xIsRaQfweZNdKH3PwGJrj7V7dQ%2BEX64t0gQ36XGVlzVdvLkTeJEo9L0uUUtopZ57w3AyS6FNFQywoh353gJY9Q%2FWO&X-Amz-Signature=131dfbb5615ab0a6b08307153cb7ff064e64c8a67f04f127b435fe3ed989f17d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEG4S5LL%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIG599kaZgLf4QE1I6TlrxrhkGy93u6uJ6FWiDDPwG%2Bj7AiBl1EyFOXlOTUJgVulRNohgDcHKbKnGql1FS8Rhj4xfHyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMs3%2FAfm9OP5iRDS6mKtwDlu2yuibTusLYUiTaiPoQrTDOn5jEN2Dtst7Nf54cEOx9sDnAi%2BtYAAyCGH6gTaZ%2FIY%2BhbSiwTKm7tVuuEH4FbYhrjxDbLbGO3VkOIJtZK2iVkH2e8niJGIYjs1V7zWV7I%2BM%2Flgy%2FQv0Gxvhdfm%2FKmqp%2FE1eOdjrAU0FJjumLA%2Fofc2Da2Tb9UiI6VU%2FFddOGcoiBzxPOJpH1u4ZCEfJ77Qc%2F%2FAPIpu4CrUf9WGFdDSVwXX8XoCx9tqQjPk2AUuUlFda%2FXI%2BjIGNGP2Hxv1hfgJxw5qkqDg5%2Bk8FyyhghjjKzvWZ8y1dQ%2FvpO37UdQEIloxgHpvWgNf1dbQSxR7oNQX4U1nZwuB11Sf32fCtRoPebsISpMCqEIOrt0hcPbjpt24IaFKzljpi6mB2MGK1owOYQjhCXwN%2Fl8h1Bk%2BeNwEXOWxtT8DzAT1zCl5hiNdOJR9aAPB0e8ysQ1A%2FvxvwvrVKxHNwGKDMoEfTwdOvz9gkYzBHPjJsrIBzvM7jLsnuYjSLqLbFQTWEP%2F1sMAQPU3A6EXFbPioXZFJgnLBEqwHZLlMLb4b08mR87dPhaWtIH0t8fdtuVTn6E9eCZxZaaXXdF6ufG74CfuFzRDlnSZBJSXAlrDL2g%2Bbd3Z8cw04aOxAY6pgGujhtZ8Obq9zCkKs6QCb4XaL3aSVm1t4FUmumw0Lid01Iq1gLlDZdKscPM6BFBuoFFl16GBlwnYZiiVDhEwzXOLW8cjR7pMnCEmjapiqYTmfdOVguInh7wbmtUgztX6RFF3K4xIsRaQfweZNdKH3PwGJrj7V7dQ%2BEX64t0gQ36XGVlzVdvLkTeJEo9L0uUUtopZ57w3AyS6FNFQywoh353gJY9Q%2FWO&X-Amz-Signature=fee37bc5580241b6dcb70c327d60c503dfe7a454c214364c0d0f64dfb0b33ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q63FPQGD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDZ3B0d3B%2Bllv2FmNems2Hh6rfS99VeNRtX8AEzx6JVdgIhAIM9cwcxGvlsAk8eZwEkeewxHgtb2BbidXTwcLtHtL2oKv8DCEgQABoMNjM3NDIzMTgzODA1Igxjl0wGY%2FmSW3UMcMMq3AMBa1ennJPG9jCCg4iurnebCUjBaZnHtWxzDUbQ7I5nhm5Y4it7IA%2FjsBiSeLvH%2BJfJMFsvEC%2FYhmGT8Ib9KLoB8LIAoGG0iPzKf9x5k8CVJcF57DcN4Ca06W%2BEubpe%2Ftq0TdShPH%2FmwEhA0KYre%2BU0qPu%2B8kcm6%2FRietu%2Bj2rKF3AUHBlYjNlkQjy1OJtx1Jai3QGfaJOAs02DNG20a8MK2GB1Z%2FvQwWk9iltOUpINFygwkjHF43pL7T5VGXvAbhYnPxEgfhNA5b4U1AldBF19L4PvWY0B7GgNAUwS25QGNLP%2BX3%2BOX19mKsGxDdrg3w47d6B0EniULZfEs%2BiF8ZwZIVK0Bz6koEv%2FuRVdewISusMINH%2BI%2F4oIo57cL0YM%2FX2HjsocXrFJXeealaTxqv6nTwkQ3im46WDvG4OuAnMi56mAAOexhSNf%2F8gc6kgpOvoIY5azFpSHn1qUUu5%2B9hZdh%2B8oU%2Ben14A%2Bie4q7rVCqP05gYV4XtIdNpalsTUoys3Ob7Y2uZ2hj6%2BRBsqguC8hXHhl40MRlQ7YYQcbIdPSoAM61kpb3Hgp%2BSDAEno1619kDa9YBuJ6zYutJYeOIHl%2FAA0SNdZBOu%2Bg5XSEAYAbGwgoZEf5CKV2HiOvYzCVvI7EBjqkAVohUrSpQwIaMtrRqiuMP1LUaPm%2Fl25nlL38aQqucSui%2BRH%2BugJU3rS4zMKbiIlqq%2F8qajIBZbkhUTynpfPCYzVLksSWxy2QnNWfy6YtWDFPF%2BnpxtkAENBDcIpX%2Fm84Q4NDhFzDI8un7QhnU7nA7aHr25ZMC0fU4yXc3ODDT8dnmcuwXqWBVRulENoT5EuLy7aPsZRm1PjUHuvD1SWSvjmDtxY%2B&X-Amz-Signature=22aef61d1de1ac67c2fbe23512e0ae672d5fbad83b8fddc28fadae2110667de1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q63FPQGD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDZ3B0d3B%2Bllv2FmNems2Hh6rfS99VeNRtX8AEzx6JVdgIhAIM9cwcxGvlsAk8eZwEkeewxHgtb2BbidXTwcLtHtL2oKv8DCEgQABoMNjM3NDIzMTgzODA1Igxjl0wGY%2FmSW3UMcMMq3AMBa1ennJPG9jCCg4iurnebCUjBaZnHtWxzDUbQ7I5nhm5Y4it7IA%2FjsBiSeLvH%2BJfJMFsvEC%2FYhmGT8Ib9KLoB8LIAoGG0iPzKf9x5k8CVJcF57DcN4Ca06W%2BEubpe%2Ftq0TdShPH%2FmwEhA0KYre%2BU0qPu%2B8kcm6%2FRietu%2Bj2rKF3AUHBlYjNlkQjy1OJtx1Jai3QGfaJOAs02DNG20a8MK2GB1Z%2FvQwWk9iltOUpINFygwkjHF43pL7T5VGXvAbhYnPxEgfhNA5b4U1AldBF19L4PvWY0B7GgNAUwS25QGNLP%2BX3%2BOX19mKsGxDdrg3w47d6B0EniULZfEs%2BiF8ZwZIVK0Bz6koEv%2FuRVdewISusMINH%2BI%2F4oIo57cL0YM%2FX2HjsocXrFJXeealaTxqv6nTwkQ3im46WDvG4OuAnMi56mAAOexhSNf%2F8gc6kgpOvoIY5azFpSHn1qUUu5%2B9hZdh%2B8oU%2Ben14A%2Bie4q7rVCqP05gYV4XtIdNpalsTUoys3Ob7Y2uZ2hj6%2BRBsqguC8hXHhl40MRlQ7YYQcbIdPSoAM61kpb3Hgp%2BSDAEno1619kDa9YBuJ6zYutJYeOIHl%2FAA0SNdZBOu%2Bg5XSEAYAbGwgoZEf5CKV2HiOvYzCVvI7EBjqkAVohUrSpQwIaMtrRqiuMP1LUaPm%2Fl25nlL38aQqucSui%2BRH%2BugJU3rS4zMKbiIlqq%2F8qajIBZbkhUTynpfPCYzVLksSWxy2QnNWfy6YtWDFPF%2BnpxtkAENBDcIpX%2Fm84Q4NDhFzDI8un7QhnU7nA7aHr25ZMC0fU4yXc3ODDT8dnmcuwXqWBVRulENoT5EuLy7aPsZRm1PjUHuvD1SWSvjmDtxY%2B&X-Amz-Signature=db07c8adce939d9ed7ea09ed63155d5440ea8fd34d1ea6523d6b796729461e2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q63FPQGD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDZ3B0d3B%2Bllv2FmNems2Hh6rfS99VeNRtX8AEzx6JVdgIhAIM9cwcxGvlsAk8eZwEkeewxHgtb2BbidXTwcLtHtL2oKv8DCEgQABoMNjM3NDIzMTgzODA1Igxjl0wGY%2FmSW3UMcMMq3AMBa1ennJPG9jCCg4iurnebCUjBaZnHtWxzDUbQ7I5nhm5Y4it7IA%2FjsBiSeLvH%2BJfJMFsvEC%2FYhmGT8Ib9KLoB8LIAoGG0iPzKf9x5k8CVJcF57DcN4Ca06W%2BEubpe%2Ftq0TdShPH%2FmwEhA0KYre%2BU0qPu%2B8kcm6%2FRietu%2Bj2rKF3AUHBlYjNlkQjy1OJtx1Jai3QGfaJOAs02DNG20a8MK2GB1Z%2FvQwWk9iltOUpINFygwkjHF43pL7T5VGXvAbhYnPxEgfhNA5b4U1AldBF19L4PvWY0B7GgNAUwS25QGNLP%2BX3%2BOX19mKsGxDdrg3w47d6B0EniULZfEs%2BiF8ZwZIVK0Bz6koEv%2FuRVdewISusMINH%2BI%2F4oIo57cL0YM%2FX2HjsocXrFJXeealaTxqv6nTwkQ3im46WDvG4OuAnMi56mAAOexhSNf%2F8gc6kgpOvoIY5azFpSHn1qUUu5%2B9hZdh%2B8oU%2Ben14A%2Bie4q7rVCqP05gYV4XtIdNpalsTUoys3Ob7Y2uZ2hj6%2BRBsqguC8hXHhl40MRlQ7YYQcbIdPSoAM61kpb3Hgp%2BSDAEno1619kDa9YBuJ6zYutJYeOIHl%2FAA0SNdZBOu%2Bg5XSEAYAbGwgoZEf5CKV2HiOvYzCVvI7EBjqkAVohUrSpQwIaMtrRqiuMP1LUaPm%2Fl25nlL38aQqucSui%2BRH%2BugJU3rS4zMKbiIlqq%2F8qajIBZbkhUTynpfPCYzVLksSWxy2QnNWfy6YtWDFPF%2BnpxtkAENBDcIpX%2Fm84Q4NDhFzDI8un7QhnU7nA7aHr25ZMC0fU4yXc3ODDT8dnmcuwXqWBVRulENoT5EuLy7aPsZRm1PjUHuvD1SWSvjmDtxY%2B&X-Amz-Signature=9900efef530f63ed51c139002f215d192a573b7a1b204a66cd8c896ea72c5ce2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q63FPQGD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDZ3B0d3B%2Bllv2FmNems2Hh6rfS99VeNRtX8AEzx6JVdgIhAIM9cwcxGvlsAk8eZwEkeewxHgtb2BbidXTwcLtHtL2oKv8DCEgQABoMNjM3NDIzMTgzODA1Igxjl0wGY%2FmSW3UMcMMq3AMBa1ennJPG9jCCg4iurnebCUjBaZnHtWxzDUbQ7I5nhm5Y4it7IA%2FjsBiSeLvH%2BJfJMFsvEC%2FYhmGT8Ib9KLoB8LIAoGG0iPzKf9x5k8CVJcF57DcN4Ca06W%2BEubpe%2Ftq0TdShPH%2FmwEhA0KYre%2BU0qPu%2B8kcm6%2FRietu%2Bj2rKF3AUHBlYjNlkQjy1OJtx1Jai3QGfaJOAs02DNG20a8MK2GB1Z%2FvQwWk9iltOUpINFygwkjHF43pL7T5VGXvAbhYnPxEgfhNA5b4U1AldBF19L4PvWY0B7GgNAUwS25QGNLP%2BX3%2BOX19mKsGxDdrg3w47d6B0EniULZfEs%2BiF8ZwZIVK0Bz6koEv%2FuRVdewISusMINH%2BI%2F4oIo57cL0YM%2FX2HjsocXrFJXeealaTxqv6nTwkQ3im46WDvG4OuAnMi56mAAOexhSNf%2F8gc6kgpOvoIY5azFpSHn1qUUu5%2B9hZdh%2B8oU%2Ben14A%2Bie4q7rVCqP05gYV4XtIdNpalsTUoys3Ob7Y2uZ2hj6%2BRBsqguC8hXHhl40MRlQ7YYQcbIdPSoAM61kpb3Hgp%2BSDAEno1619kDa9YBuJ6zYutJYeOIHl%2FAA0SNdZBOu%2Bg5XSEAYAbGwgoZEf5CKV2HiOvYzCVvI7EBjqkAVohUrSpQwIaMtrRqiuMP1LUaPm%2Fl25nlL38aQqucSui%2BRH%2BugJU3rS4zMKbiIlqq%2F8qajIBZbkhUTynpfPCYzVLksSWxy2QnNWfy6YtWDFPF%2BnpxtkAENBDcIpX%2Fm84Q4NDhFzDI8un7QhnU7nA7aHr25ZMC0fU4yXc3ODDT8dnmcuwXqWBVRulENoT5EuLy7aPsZRm1PjUHuvD1SWSvjmDtxY%2B&X-Amz-Signature=24c5c4f09130574e2b73c5753d0af10c77f5afede99ebb8dfe46b287e0c25e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q63FPQGD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDZ3B0d3B%2Bllv2FmNems2Hh6rfS99VeNRtX8AEzx6JVdgIhAIM9cwcxGvlsAk8eZwEkeewxHgtb2BbidXTwcLtHtL2oKv8DCEgQABoMNjM3NDIzMTgzODA1Igxjl0wGY%2FmSW3UMcMMq3AMBa1ennJPG9jCCg4iurnebCUjBaZnHtWxzDUbQ7I5nhm5Y4it7IA%2FjsBiSeLvH%2BJfJMFsvEC%2FYhmGT8Ib9KLoB8LIAoGG0iPzKf9x5k8CVJcF57DcN4Ca06W%2BEubpe%2Ftq0TdShPH%2FmwEhA0KYre%2BU0qPu%2B8kcm6%2FRietu%2Bj2rKF3AUHBlYjNlkQjy1OJtx1Jai3QGfaJOAs02DNG20a8MK2GB1Z%2FvQwWk9iltOUpINFygwkjHF43pL7T5VGXvAbhYnPxEgfhNA5b4U1AldBF19L4PvWY0B7GgNAUwS25QGNLP%2BX3%2BOX19mKsGxDdrg3w47d6B0EniULZfEs%2BiF8ZwZIVK0Bz6koEv%2FuRVdewISusMINH%2BI%2F4oIo57cL0YM%2FX2HjsocXrFJXeealaTxqv6nTwkQ3im46WDvG4OuAnMi56mAAOexhSNf%2F8gc6kgpOvoIY5azFpSHn1qUUu5%2B9hZdh%2B8oU%2Ben14A%2Bie4q7rVCqP05gYV4XtIdNpalsTUoys3Ob7Y2uZ2hj6%2BRBsqguC8hXHhl40MRlQ7YYQcbIdPSoAM61kpb3Hgp%2BSDAEno1619kDa9YBuJ6zYutJYeOIHl%2FAA0SNdZBOu%2Bg5XSEAYAbGwgoZEf5CKV2HiOvYzCVvI7EBjqkAVohUrSpQwIaMtrRqiuMP1LUaPm%2Fl25nlL38aQqucSui%2BRH%2BugJU3rS4zMKbiIlqq%2F8qajIBZbkhUTynpfPCYzVLksSWxy2QnNWfy6YtWDFPF%2BnpxtkAENBDcIpX%2Fm84Q4NDhFzDI8un7QhnU7nA7aHr25ZMC0fU4yXc3ODDT8dnmcuwXqWBVRulENoT5EuLy7aPsZRm1PjUHuvD1SWSvjmDtxY%2B&X-Amz-Signature=ae8a40b7b71dcd0d5f826bf649cb5cb307a471988abd7f628a08a317f0f3da56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q63FPQGD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDZ3B0d3B%2Bllv2FmNems2Hh6rfS99VeNRtX8AEzx6JVdgIhAIM9cwcxGvlsAk8eZwEkeewxHgtb2BbidXTwcLtHtL2oKv8DCEgQABoMNjM3NDIzMTgzODA1Igxjl0wGY%2FmSW3UMcMMq3AMBa1ennJPG9jCCg4iurnebCUjBaZnHtWxzDUbQ7I5nhm5Y4it7IA%2FjsBiSeLvH%2BJfJMFsvEC%2FYhmGT8Ib9KLoB8LIAoGG0iPzKf9x5k8CVJcF57DcN4Ca06W%2BEubpe%2Ftq0TdShPH%2FmwEhA0KYre%2BU0qPu%2B8kcm6%2FRietu%2Bj2rKF3AUHBlYjNlkQjy1OJtx1Jai3QGfaJOAs02DNG20a8MK2GB1Z%2FvQwWk9iltOUpINFygwkjHF43pL7T5VGXvAbhYnPxEgfhNA5b4U1AldBF19L4PvWY0B7GgNAUwS25QGNLP%2BX3%2BOX19mKsGxDdrg3w47d6B0EniULZfEs%2BiF8ZwZIVK0Bz6koEv%2FuRVdewISusMINH%2BI%2F4oIo57cL0YM%2FX2HjsocXrFJXeealaTxqv6nTwkQ3im46WDvG4OuAnMi56mAAOexhSNf%2F8gc6kgpOvoIY5azFpSHn1qUUu5%2B9hZdh%2B8oU%2Ben14A%2Bie4q7rVCqP05gYV4XtIdNpalsTUoys3Ob7Y2uZ2hj6%2BRBsqguC8hXHhl40MRlQ7YYQcbIdPSoAM61kpb3Hgp%2BSDAEno1619kDa9YBuJ6zYutJYeOIHl%2FAA0SNdZBOu%2Bg5XSEAYAbGwgoZEf5CKV2HiOvYzCVvI7EBjqkAVohUrSpQwIaMtrRqiuMP1LUaPm%2Fl25nlL38aQqucSui%2BRH%2BugJU3rS4zMKbiIlqq%2F8qajIBZbkhUTynpfPCYzVLksSWxy2QnNWfy6YtWDFPF%2BnpxtkAENBDcIpX%2Fm84Q4NDhFzDI8un7QhnU7nA7aHr25ZMC0fU4yXc3ODDT8dnmcuwXqWBVRulENoT5EuLy7aPsZRm1PjUHuvD1SWSvjmDtxY%2B&X-Amz-Signature=85de2fb2cb8ae731ed68b9c445f6e4eb11dc61ee5328bfef297b5c2a365ec8d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
