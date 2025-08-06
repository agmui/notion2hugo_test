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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BR6QBM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFah909TqHGUKPgpJYPVx1clMKoUNc%2BoutcdztiOVJ0VAiEAo3MFByyJmEYIJdG%2F5inNxRcEP1ZFBq3jhD5id71toJ4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOUtg%2FD2i9aCbOLo8CrcA%2FsjwUQ5TQ4AgyzmP%2FKf%2F0IxeG8CM61MAsgIRh%2BvgXAT8fC5fTzwi6T7OUxbEQsNbbeB5w2CfXEVHHzjapWrIHbOvXWGqE60w43XIMFaa1gop02aPQpaAU3IkQFPYwOG1qYwAJW86mkVKs86Zc7axuytpTyEc6N8zZQVS5w9%2BQErgE33kxY2gfTLgOWZfMHDpIE0qeNr1nI0eDutQ0E%2BudP91N1baYxZtSzMkd8iie%2B0tXod%2B4h%2FZvNNJ7ZKOS6TVedLxKKzplNsmPFWQgMObvJNVBIxOjuct%2FQ7vVEFZm75MgHEmpx3fpPe3JfdkXnmjDlFntRg8%2FqLVmyGATDiP%2FEjPFzP1BcUeSv9%2FICdI%2FMEGkCOUgFNBBDdOEHmMpcosHdga8HrCvePi2%2FOwnYZKggjhvWrXDg9SlHzeZKYJ3Li3EOYOjojJMS9BSnBPrSQXViGK2BT3aH3F7nrsoxM%2FAkC4jux%2BKEcxjf%2Bh1hdxBxTk3IToAVSFQqomynBgQaWJc3d2NsxAzvGSSV2TqWTlqRbWCAEPlDWpcJ3oRYI8IA38mw3r%2F3fue1%2F3QYLemkQZSlnS1CIzotlkIkY%2FNIshUqhUjBGZqNTJb7tS6dvD8O7CQhJJgWirEWvJF2BMJTQzMQGOqUB9sAybZG8TNPnJ0igEW50j0ykgs96pEjwTKEgp3tbtAZV5maEOVdBNNSnHzOKxU1ZbmIn7P7Y8csI2GANvOd%2FbKbe58iKZXgj7a2wTiG9Kw%2FERI%2BjEF1NrdDu1IWHQau36pJIFmjunh8ku85ImorMmf6SwU10HHmgZtfqU%2BR0v4dQ4Tu7arhV%2FQzDI8P%2Fwm1UIBYHG0T29ymYLzLBMR6sAAL2TuxY&X-Amz-Signature=e44c532d069c10af5e7b8667956e1992194ac1c26c09d9e00357162bb6511abb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BR6QBM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFah909TqHGUKPgpJYPVx1clMKoUNc%2BoutcdztiOVJ0VAiEAo3MFByyJmEYIJdG%2F5inNxRcEP1ZFBq3jhD5id71toJ4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOUtg%2FD2i9aCbOLo8CrcA%2FsjwUQ5TQ4AgyzmP%2FKf%2F0IxeG8CM61MAsgIRh%2BvgXAT8fC5fTzwi6T7OUxbEQsNbbeB5w2CfXEVHHzjapWrIHbOvXWGqE60w43XIMFaa1gop02aPQpaAU3IkQFPYwOG1qYwAJW86mkVKs86Zc7axuytpTyEc6N8zZQVS5w9%2BQErgE33kxY2gfTLgOWZfMHDpIE0qeNr1nI0eDutQ0E%2BudP91N1baYxZtSzMkd8iie%2B0tXod%2B4h%2FZvNNJ7ZKOS6TVedLxKKzplNsmPFWQgMObvJNVBIxOjuct%2FQ7vVEFZm75MgHEmpx3fpPe3JfdkXnmjDlFntRg8%2FqLVmyGATDiP%2FEjPFzP1BcUeSv9%2FICdI%2FMEGkCOUgFNBBDdOEHmMpcosHdga8HrCvePi2%2FOwnYZKggjhvWrXDg9SlHzeZKYJ3Li3EOYOjojJMS9BSnBPrSQXViGK2BT3aH3F7nrsoxM%2FAkC4jux%2BKEcxjf%2Bh1hdxBxTk3IToAVSFQqomynBgQaWJc3d2NsxAzvGSSV2TqWTlqRbWCAEPlDWpcJ3oRYI8IA38mw3r%2F3fue1%2F3QYLemkQZSlnS1CIzotlkIkY%2FNIshUqhUjBGZqNTJb7tS6dvD8O7CQhJJgWirEWvJF2BMJTQzMQGOqUB9sAybZG8TNPnJ0igEW50j0ykgs96pEjwTKEgp3tbtAZV5maEOVdBNNSnHzOKxU1ZbmIn7P7Y8csI2GANvOd%2FbKbe58iKZXgj7a2wTiG9Kw%2FERI%2BjEF1NrdDu1IWHQau36pJIFmjunh8ku85ImorMmf6SwU10HHmgZtfqU%2BR0v4dQ4Tu7arhV%2FQzDI8P%2Fwm1UIBYHG0T29ymYLzLBMR6sAAL2TuxY&X-Amz-Signature=c3f6c364ade0407ef2e1a5d91868ef11c9a49e191b7b067e26b166693d4c6042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BR6QBM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFah909TqHGUKPgpJYPVx1clMKoUNc%2BoutcdztiOVJ0VAiEAo3MFByyJmEYIJdG%2F5inNxRcEP1ZFBq3jhD5id71toJ4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOUtg%2FD2i9aCbOLo8CrcA%2FsjwUQ5TQ4AgyzmP%2FKf%2F0IxeG8CM61MAsgIRh%2BvgXAT8fC5fTzwi6T7OUxbEQsNbbeB5w2CfXEVHHzjapWrIHbOvXWGqE60w43XIMFaa1gop02aPQpaAU3IkQFPYwOG1qYwAJW86mkVKs86Zc7axuytpTyEc6N8zZQVS5w9%2BQErgE33kxY2gfTLgOWZfMHDpIE0qeNr1nI0eDutQ0E%2BudP91N1baYxZtSzMkd8iie%2B0tXod%2B4h%2FZvNNJ7ZKOS6TVedLxKKzplNsmPFWQgMObvJNVBIxOjuct%2FQ7vVEFZm75MgHEmpx3fpPe3JfdkXnmjDlFntRg8%2FqLVmyGATDiP%2FEjPFzP1BcUeSv9%2FICdI%2FMEGkCOUgFNBBDdOEHmMpcosHdga8HrCvePi2%2FOwnYZKggjhvWrXDg9SlHzeZKYJ3Li3EOYOjojJMS9BSnBPrSQXViGK2BT3aH3F7nrsoxM%2FAkC4jux%2BKEcxjf%2Bh1hdxBxTk3IToAVSFQqomynBgQaWJc3d2NsxAzvGSSV2TqWTlqRbWCAEPlDWpcJ3oRYI8IA38mw3r%2F3fue1%2F3QYLemkQZSlnS1CIzotlkIkY%2FNIshUqhUjBGZqNTJb7tS6dvD8O7CQhJJgWirEWvJF2BMJTQzMQGOqUB9sAybZG8TNPnJ0igEW50j0ykgs96pEjwTKEgp3tbtAZV5maEOVdBNNSnHzOKxU1ZbmIn7P7Y8csI2GANvOd%2FbKbe58iKZXgj7a2wTiG9Kw%2FERI%2BjEF1NrdDu1IWHQau36pJIFmjunh8ku85ImorMmf6SwU10HHmgZtfqU%2BR0v4dQ4Tu7arhV%2FQzDI8P%2Fwm1UIBYHG0T29ymYLzLBMR6sAAL2TuxY&X-Amz-Signature=2d5180cd9f40335eb96855f598aec66051576da399ef73257c927627b8eb6e28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BR6QBM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFah909TqHGUKPgpJYPVx1clMKoUNc%2BoutcdztiOVJ0VAiEAo3MFByyJmEYIJdG%2F5inNxRcEP1ZFBq3jhD5id71toJ4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOUtg%2FD2i9aCbOLo8CrcA%2FsjwUQ5TQ4AgyzmP%2FKf%2F0IxeG8CM61MAsgIRh%2BvgXAT8fC5fTzwi6T7OUxbEQsNbbeB5w2CfXEVHHzjapWrIHbOvXWGqE60w43XIMFaa1gop02aPQpaAU3IkQFPYwOG1qYwAJW86mkVKs86Zc7axuytpTyEc6N8zZQVS5w9%2BQErgE33kxY2gfTLgOWZfMHDpIE0qeNr1nI0eDutQ0E%2BudP91N1baYxZtSzMkd8iie%2B0tXod%2B4h%2FZvNNJ7ZKOS6TVedLxKKzplNsmPFWQgMObvJNVBIxOjuct%2FQ7vVEFZm75MgHEmpx3fpPe3JfdkXnmjDlFntRg8%2FqLVmyGATDiP%2FEjPFzP1BcUeSv9%2FICdI%2FMEGkCOUgFNBBDdOEHmMpcosHdga8HrCvePi2%2FOwnYZKggjhvWrXDg9SlHzeZKYJ3Li3EOYOjojJMS9BSnBPrSQXViGK2BT3aH3F7nrsoxM%2FAkC4jux%2BKEcxjf%2Bh1hdxBxTk3IToAVSFQqomynBgQaWJc3d2NsxAzvGSSV2TqWTlqRbWCAEPlDWpcJ3oRYI8IA38mw3r%2F3fue1%2F3QYLemkQZSlnS1CIzotlkIkY%2FNIshUqhUjBGZqNTJb7tS6dvD8O7CQhJJgWirEWvJF2BMJTQzMQGOqUB9sAybZG8TNPnJ0igEW50j0ykgs96pEjwTKEgp3tbtAZV5maEOVdBNNSnHzOKxU1ZbmIn7P7Y8csI2GANvOd%2FbKbe58iKZXgj7a2wTiG9Kw%2FERI%2BjEF1NrdDu1IWHQau36pJIFmjunh8ku85ImorMmf6SwU10HHmgZtfqU%2BR0v4dQ4Tu7arhV%2FQzDI8P%2Fwm1UIBYHG0T29ymYLzLBMR6sAAL2TuxY&X-Amz-Signature=9f98f52862b79615044df7f44a8ad85d08e2df3bd71b45356e3905e49c7eb04d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BR6QBM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFah909TqHGUKPgpJYPVx1clMKoUNc%2BoutcdztiOVJ0VAiEAo3MFByyJmEYIJdG%2F5inNxRcEP1ZFBq3jhD5id71toJ4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOUtg%2FD2i9aCbOLo8CrcA%2FsjwUQ5TQ4AgyzmP%2FKf%2F0IxeG8CM61MAsgIRh%2BvgXAT8fC5fTzwi6T7OUxbEQsNbbeB5w2CfXEVHHzjapWrIHbOvXWGqE60w43XIMFaa1gop02aPQpaAU3IkQFPYwOG1qYwAJW86mkVKs86Zc7axuytpTyEc6N8zZQVS5w9%2BQErgE33kxY2gfTLgOWZfMHDpIE0qeNr1nI0eDutQ0E%2BudP91N1baYxZtSzMkd8iie%2B0tXod%2B4h%2FZvNNJ7ZKOS6TVedLxKKzplNsmPFWQgMObvJNVBIxOjuct%2FQ7vVEFZm75MgHEmpx3fpPe3JfdkXnmjDlFntRg8%2FqLVmyGATDiP%2FEjPFzP1BcUeSv9%2FICdI%2FMEGkCOUgFNBBDdOEHmMpcosHdga8HrCvePi2%2FOwnYZKggjhvWrXDg9SlHzeZKYJ3Li3EOYOjojJMS9BSnBPrSQXViGK2BT3aH3F7nrsoxM%2FAkC4jux%2BKEcxjf%2Bh1hdxBxTk3IToAVSFQqomynBgQaWJc3d2NsxAzvGSSV2TqWTlqRbWCAEPlDWpcJ3oRYI8IA38mw3r%2F3fue1%2F3QYLemkQZSlnS1CIzotlkIkY%2FNIshUqhUjBGZqNTJb7tS6dvD8O7CQhJJgWirEWvJF2BMJTQzMQGOqUB9sAybZG8TNPnJ0igEW50j0ykgs96pEjwTKEgp3tbtAZV5maEOVdBNNSnHzOKxU1ZbmIn7P7Y8csI2GANvOd%2FbKbe58iKZXgj7a2wTiG9Kw%2FERI%2BjEF1NrdDu1IWHQau36pJIFmjunh8ku85ImorMmf6SwU10HHmgZtfqU%2BR0v4dQ4Tu7arhV%2FQzDI8P%2Fwm1UIBYHG0T29ymYLzLBMR6sAAL2TuxY&X-Amz-Signature=67c38216e8566d9d4a4d7a5cc34257e96211b918b42f6ab765b14d7fecd4fb2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BR6QBM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFah909TqHGUKPgpJYPVx1clMKoUNc%2BoutcdztiOVJ0VAiEAo3MFByyJmEYIJdG%2F5inNxRcEP1ZFBq3jhD5id71toJ4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOUtg%2FD2i9aCbOLo8CrcA%2FsjwUQ5TQ4AgyzmP%2FKf%2F0IxeG8CM61MAsgIRh%2BvgXAT8fC5fTzwi6T7OUxbEQsNbbeB5w2CfXEVHHzjapWrIHbOvXWGqE60w43XIMFaa1gop02aPQpaAU3IkQFPYwOG1qYwAJW86mkVKs86Zc7axuytpTyEc6N8zZQVS5w9%2BQErgE33kxY2gfTLgOWZfMHDpIE0qeNr1nI0eDutQ0E%2BudP91N1baYxZtSzMkd8iie%2B0tXod%2B4h%2FZvNNJ7ZKOS6TVedLxKKzplNsmPFWQgMObvJNVBIxOjuct%2FQ7vVEFZm75MgHEmpx3fpPe3JfdkXnmjDlFntRg8%2FqLVmyGATDiP%2FEjPFzP1BcUeSv9%2FICdI%2FMEGkCOUgFNBBDdOEHmMpcosHdga8HrCvePi2%2FOwnYZKggjhvWrXDg9SlHzeZKYJ3Li3EOYOjojJMS9BSnBPrSQXViGK2BT3aH3F7nrsoxM%2FAkC4jux%2BKEcxjf%2Bh1hdxBxTk3IToAVSFQqomynBgQaWJc3d2NsxAzvGSSV2TqWTlqRbWCAEPlDWpcJ3oRYI8IA38mw3r%2F3fue1%2F3QYLemkQZSlnS1CIzotlkIkY%2FNIshUqhUjBGZqNTJb7tS6dvD8O7CQhJJgWirEWvJF2BMJTQzMQGOqUB9sAybZG8TNPnJ0igEW50j0ykgs96pEjwTKEgp3tbtAZV5maEOVdBNNSnHzOKxU1ZbmIn7P7Y8csI2GANvOd%2FbKbe58iKZXgj7a2wTiG9Kw%2FERI%2BjEF1NrdDu1IWHQau36pJIFmjunh8ku85ImorMmf6SwU10HHmgZtfqU%2BR0v4dQ4Tu7arhV%2FQzDI8P%2Fwm1UIBYHG0T29ymYLzLBMR6sAAL2TuxY&X-Amz-Signature=d32a772f16ed936ece8447e147b1c2e2c1931f708e0b7cf73f92d64927a5ecd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BR6QBM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFah909TqHGUKPgpJYPVx1clMKoUNc%2BoutcdztiOVJ0VAiEAo3MFByyJmEYIJdG%2F5inNxRcEP1ZFBq3jhD5id71toJ4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOUtg%2FD2i9aCbOLo8CrcA%2FsjwUQ5TQ4AgyzmP%2FKf%2F0IxeG8CM61MAsgIRh%2BvgXAT8fC5fTzwi6T7OUxbEQsNbbeB5w2CfXEVHHzjapWrIHbOvXWGqE60w43XIMFaa1gop02aPQpaAU3IkQFPYwOG1qYwAJW86mkVKs86Zc7axuytpTyEc6N8zZQVS5w9%2BQErgE33kxY2gfTLgOWZfMHDpIE0qeNr1nI0eDutQ0E%2BudP91N1baYxZtSzMkd8iie%2B0tXod%2B4h%2FZvNNJ7ZKOS6TVedLxKKzplNsmPFWQgMObvJNVBIxOjuct%2FQ7vVEFZm75MgHEmpx3fpPe3JfdkXnmjDlFntRg8%2FqLVmyGATDiP%2FEjPFzP1BcUeSv9%2FICdI%2FMEGkCOUgFNBBDdOEHmMpcosHdga8HrCvePi2%2FOwnYZKggjhvWrXDg9SlHzeZKYJ3Li3EOYOjojJMS9BSnBPrSQXViGK2BT3aH3F7nrsoxM%2FAkC4jux%2BKEcxjf%2Bh1hdxBxTk3IToAVSFQqomynBgQaWJc3d2NsxAzvGSSV2TqWTlqRbWCAEPlDWpcJ3oRYI8IA38mw3r%2F3fue1%2F3QYLemkQZSlnS1CIzotlkIkY%2FNIshUqhUjBGZqNTJb7tS6dvD8O7CQhJJgWirEWvJF2BMJTQzMQGOqUB9sAybZG8TNPnJ0igEW50j0ykgs96pEjwTKEgp3tbtAZV5maEOVdBNNSnHzOKxU1ZbmIn7P7Y8csI2GANvOd%2FbKbe58iKZXgj7a2wTiG9Kw%2FERI%2BjEF1NrdDu1IWHQau36pJIFmjunh8ku85ImorMmf6SwU10HHmgZtfqU%2BR0v4dQ4Tu7arhV%2FQzDI8P%2Fwm1UIBYHG0T29ymYLzLBMR6sAAL2TuxY&X-Amz-Signature=6a0d4129eda11014823ba949356ff77f81bc1d136d37929bcd7220339c00c316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BR6QBM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFah909TqHGUKPgpJYPVx1clMKoUNc%2BoutcdztiOVJ0VAiEAo3MFByyJmEYIJdG%2F5inNxRcEP1ZFBq3jhD5id71toJ4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOUtg%2FD2i9aCbOLo8CrcA%2FsjwUQ5TQ4AgyzmP%2FKf%2F0IxeG8CM61MAsgIRh%2BvgXAT8fC5fTzwi6T7OUxbEQsNbbeB5w2CfXEVHHzjapWrIHbOvXWGqE60w43XIMFaa1gop02aPQpaAU3IkQFPYwOG1qYwAJW86mkVKs86Zc7axuytpTyEc6N8zZQVS5w9%2BQErgE33kxY2gfTLgOWZfMHDpIE0qeNr1nI0eDutQ0E%2BudP91N1baYxZtSzMkd8iie%2B0tXod%2B4h%2FZvNNJ7ZKOS6TVedLxKKzplNsmPFWQgMObvJNVBIxOjuct%2FQ7vVEFZm75MgHEmpx3fpPe3JfdkXnmjDlFntRg8%2FqLVmyGATDiP%2FEjPFzP1BcUeSv9%2FICdI%2FMEGkCOUgFNBBDdOEHmMpcosHdga8HrCvePi2%2FOwnYZKggjhvWrXDg9SlHzeZKYJ3Li3EOYOjojJMS9BSnBPrSQXViGK2BT3aH3F7nrsoxM%2FAkC4jux%2BKEcxjf%2Bh1hdxBxTk3IToAVSFQqomynBgQaWJc3d2NsxAzvGSSV2TqWTlqRbWCAEPlDWpcJ3oRYI8IA38mw3r%2F3fue1%2F3QYLemkQZSlnS1CIzotlkIkY%2FNIshUqhUjBGZqNTJb7tS6dvD8O7CQhJJgWirEWvJF2BMJTQzMQGOqUB9sAybZG8TNPnJ0igEW50j0ykgs96pEjwTKEgp3tbtAZV5maEOVdBNNSnHzOKxU1ZbmIn7P7Y8csI2GANvOd%2FbKbe58iKZXgj7a2wTiG9Kw%2FERI%2BjEF1NrdDu1IWHQau36pJIFmjunh8ku85ImorMmf6SwU10HHmgZtfqU%2BR0v4dQ4Tu7arhV%2FQzDI8P%2Fwm1UIBYHG0T29ymYLzLBMR6sAAL2TuxY&X-Amz-Signature=320a8f4253c77940f9f410bf3acd39c08e0582fe7a463da072e1ac10e20f22d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BR6QBM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFah909TqHGUKPgpJYPVx1clMKoUNc%2BoutcdztiOVJ0VAiEAo3MFByyJmEYIJdG%2F5inNxRcEP1ZFBq3jhD5id71toJ4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOUtg%2FD2i9aCbOLo8CrcA%2FsjwUQ5TQ4AgyzmP%2FKf%2F0IxeG8CM61MAsgIRh%2BvgXAT8fC5fTzwi6T7OUxbEQsNbbeB5w2CfXEVHHzjapWrIHbOvXWGqE60w43XIMFaa1gop02aPQpaAU3IkQFPYwOG1qYwAJW86mkVKs86Zc7axuytpTyEc6N8zZQVS5w9%2BQErgE33kxY2gfTLgOWZfMHDpIE0qeNr1nI0eDutQ0E%2BudP91N1baYxZtSzMkd8iie%2B0tXod%2B4h%2FZvNNJ7ZKOS6TVedLxKKzplNsmPFWQgMObvJNVBIxOjuct%2FQ7vVEFZm75MgHEmpx3fpPe3JfdkXnmjDlFntRg8%2FqLVmyGATDiP%2FEjPFzP1BcUeSv9%2FICdI%2FMEGkCOUgFNBBDdOEHmMpcosHdga8HrCvePi2%2FOwnYZKggjhvWrXDg9SlHzeZKYJ3Li3EOYOjojJMS9BSnBPrSQXViGK2BT3aH3F7nrsoxM%2FAkC4jux%2BKEcxjf%2Bh1hdxBxTk3IToAVSFQqomynBgQaWJc3d2NsxAzvGSSV2TqWTlqRbWCAEPlDWpcJ3oRYI8IA38mw3r%2F3fue1%2F3QYLemkQZSlnS1CIzotlkIkY%2FNIshUqhUjBGZqNTJb7tS6dvD8O7CQhJJgWirEWvJF2BMJTQzMQGOqUB9sAybZG8TNPnJ0igEW50j0ykgs96pEjwTKEgp3tbtAZV5maEOVdBNNSnHzOKxU1ZbmIn7P7Y8csI2GANvOd%2FbKbe58iKZXgj7a2wTiG9Kw%2FERI%2BjEF1NrdDu1IWHQau36pJIFmjunh8ku85ImorMmf6SwU10HHmgZtfqU%2BR0v4dQ4Tu7arhV%2FQzDI8P%2Fwm1UIBYHG0T29ymYLzLBMR6sAAL2TuxY&X-Amz-Signature=3e97a330ddf36900260b118bd8242dd889a36e110743a91a50b07797f528c8a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BR6QBM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFah909TqHGUKPgpJYPVx1clMKoUNc%2BoutcdztiOVJ0VAiEAo3MFByyJmEYIJdG%2F5inNxRcEP1ZFBq3jhD5id71toJ4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOUtg%2FD2i9aCbOLo8CrcA%2FsjwUQ5TQ4AgyzmP%2FKf%2F0IxeG8CM61MAsgIRh%2BvgXAT8fC5fTzwi6T7OUxbEQsNbbeB5w2CfXEVHHzjapWrIHbOvXWGqE60w43XIMFaa1gop02aPQpaAU3IkQFPYwOG1qYwAJW86mkVKs86Zc7axuytpTyEc6N8zZQVS5w9%2BQErgE33kxY2gfTLgOWZfMHDpIE0qeNr1nI0eDutQ0E%2BudP91N1baYxZtSzMkd8iie%2B0tXod%2B4h%2FZvNNJ7ZKOS6TVedLxKKzplNsmPFWQgMObvJNVBIxOjuct%2FQ7vVEFZm75MgHEmpx3fpPe3JfdkXnmjDlFntRg8%2FqLVmyGATDiP%2FEjPFzP1BcUeSv9%2FICdI%2FMEGkCOUgFNBBDdOEHmMpcosHdga8HrCvePi2%2FOwnYZKggjhvWrXDg9SlHzeZKYJ3Li3EOYOjojJMS9BSnBPrSQXViGK2BT3aH3F7nrsoxM%2FAkC4jux%2BKEcxjf%2Bh1hdxBxTk3IToAVSFQqomynBgQaWJc3d2NsxAzvGSSV2TqWTlqRbWCAEPlDWpcJ3oRYI8IA38mw3r%2F3fue1%2F3QYLemkQZSlnS1CIzotlkIkY%2FNIshUqhUjBGZqNTJb7tS6dvD8O7CQhJJgWirEWvJF2BMJTQzMQGOqUB9sAybZG8TNPnJ0igEW50j0ykgs96pEjwTKEgp3tbtAZV5maEOVdBNNSnHzOKxU1ZbmIn7P7Y8csI2GANvOd%2FbKbe58iKZXgj7a2wTiG9Kw%2FERI%2BjEF1NrdDu1IWHQau36pJIFmjunh8ku85ImorMmf6SwU10HHmgZtfqU%2BR0v4dQ4Tu7arhV%2FQzDI8P%2Fwm1UIBYHG0T29ymYLzLBMR6sAAL2TuxY&X-Amz-Signature=2ee96eacc6d4ee18fbeecf290fd33b852bba294af4aa54db537aee9c217b2823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6OT4CM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T111014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIHFICe6IicdKWxV1bgLCxvkJvyRxCzT2D6FZefBTFel5AiEAm527AqPIsrMFL5ILuNQB%2FwumyarswnChfEE9LMT43NIq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDI9oAZ4PZ9rUrOrp0CrcA9Px2PIrgcENQ3PPU9YDgSRxvvR0TA3MbfM1kCZv7jesWIN5DIv1MSIWI392Gt%2Frqiy3Blpgai8kQz8i%2BDVm9BJttb9UQq%2BBWGyzVT5A6F1ti2VoX1LUWW8MDJHozomi89FsFseJPUn9grp3j3PESulGV%2Baux5a3Q5YEoHfEOBh6szqkbCwQQhs%2FVCK0rh80o1pngFpZm8qr3x2CU3m%2FEz9uiAlgUmoc5s0UWPSp8Ddltby8PY0rjZ5SbrsQVTEevddIu5W1TJkTJWEX1%2FGK2HWWuU3CvCO%2BspWzDsjJS5sJxT8gzu9ImjGC6kx0X%2FU37AkqYvPhy6pZ02L%2FSaR2NgxT08jzPTgO%2BaazIEeJrR8F9UyufAGztVH2DN5XCgf%2F1gf1D8I9HPun7LqtxIamNANx8Qmv6xa%2FsQEyAglICeH%2FpGKZdgB82%2BeprNvfop7GWQAEBzF2KG4KXw%2FjEszrdew8qs9cFGS0QpQdsuTTYp2fms6VI6Sa5GuSZNtOTyBiQLKErOZWUCEBicLIBjsStZE9BcRAJIVGanSfAQSYfPSi%2FQHkbHhzeFETDQipyhEf6ZzmD4QzYk%2BvzjezNyQTyo1dA8egorUMoAOca7mj22zVjGLKla60onYn0I3mMLTQzMQGOqUBAdQUMJO1hDWgqb3AF%2Fl5hBKrIRkL9XjKhoDrv7DE8wvZ9A9%2BJrrHv02FfQMbBk%2FrgP9zp0UfR9bmbkO3Y2c5gc9dEJ6J7TcdBPV9w%2BsKP5DgjqAHObA2FRRAhvEhIhRPLle39CO3yB2m53%2FV%2B2B5EHOyA9PcvkThnyJB6XJ2P33K2So%2FOdukQh1cVZ3eh545KjWqoO4M9dwsfrtTyjNsCvQXcIgn&X-Amz-Signature=c0f218fa79b6fed03b6b1d7095a617f37291377e5f55d50210e3284e48a37ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V6ZACX7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T111017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIC7nmRwDY1TNihooJGNIteLJHu4zUWRDr%2Fwr9BfRda0tAiEArK4RlmZoSd4Da6Lb6gVsBYt28WqbU%2FV0j3PQ%2BViF59Yq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOZzwGlt5YEH6oHHOyrcAxuaE2CE1GZWMkg10PGNKfcK1jHxj8%2FwzgWN4aOmXfsnKpyTZ9CiPAPcBM7XUw8sCUa6UMcFhTz95esJfDUNgz%2FJZgREhmb3FXJMAO5J9x3UFHiNZYLFBaXlRXxv6Cc4Ff2xQT7SIjWWN3z1aIirFh%2By0%2FP%2FIGcTw3hI5TRQlZIucrw4H4GkKSe9EdFZ6CAjPN%2BIbXGRJccg%2BVMifUNTxgWEbvyE2q1yAllU9q6DKHWPvdYkT5eheVb5HciRXYB5p5HbF3ojIYsceGgtAk1j2stSZibx%2BdoIqc6ibtbHA9VsmiVFJbuM2YWyLXPXu6YBc5f%2FrHB2qRcG3MRgg47DmxF1AUenoOvb350ZSOz9fzPNCQBhgcSm4PkwzERKbzo8kVy0hQM6dpu1kZmaNxHKjvEgUjHgcJKEUVT%2B2FOoqhbZTzcFl%2BWh7Rch%2Bn1Phg%2B1Fs0HgDU%2B7hFk4nkD28UGt8EG8ZCkVyqaRmr7o8WY%2BIhny8oj00QMXDXibPjP1N9TIbHC3u6V7lkZi%2BGK5trRGZabQTUFRI%2BKyARQBM%2Bdy4GNJvnyK3NxgZT4GyjoK4tuFd5gv1L9FrV8EFf0cui6LqoLN1hhyrgrDpuJosrT3mrHBPItHcPmbZ%2FOdKphMI7QzMQGOqUB4CbrOcw8FJfFEAkr%2FFJrCUVru9FikDOfA62904KbiPR%2BBV2z3ahVyOMzCQDc3iu0vEyK70ZVPuNEFC4rvfdcw3ubQ5xAZXYnf341pDBB8labDfU3vcooAYCtXkpOpF7XD8iBYCw9woHXjCxrnLFc1Z7DaMrx7t5U6M0ZLNo1IFvsrUU5aczZ9uQc5B5XK7vxyfL8y8s2wKlywhTKjcQQzLC333Ow&X-Amz-Signature=b5eceefb53432b14595cd78e130e92ad6d61ef92235e8be67d0054cf47d56088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q27GTHMB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T111023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCzabj4iieM9Vz2w3Qtfbc5TQTNp%2BBp63WQcLtDfBZV1QIgCYCUoGQ%2B6lXe2r3hxr%2BN62SjlFjDN2BD28%2BUT5Qpu5oq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDIwRGb0TwirGCpS74ircAyniNrHXCNaVJj9NnqleC%2FsVSaEkE6IvqQkNKkhgMnn2BWobJH%2FeJf68CX30%2FBEyDOiZbYR5tWrjssatd1Q67qHvhwjTapl6Y2e4WUM48Un3Zt6gvEykAImkuM4ZZil36pjnXw0Ax1ZO%2BqZK8WC%2BRh%2FCds0811X4obg9DlorCZ52v%2BhinnnEp2719ocpRWjyVb1ejUiFKsedzOZ7aQUWqf309EJYt0I%2FJYoAbu2NXog4W1abbJFfHS5Rak8qMZeqhqeOB1CY2MVK3kKPlQ7mxsCBucOsSxCRi7zwpLSESg%2FFsbntpKAZ4zExVQ4jGNwJBW1UelzZB7ML2NHmzhn7Dkk%2Btc%2F7wJK0n9Cj4DRZ9wY7RvZXI5N4BrmE4DOYJkz5BfGo9MFenhcTrP80b5E9%2FU8vKfDI1qPc0Rxyl8GAvG7fZm3igCKAimD8vfZ1c6FxmuYJ1o9IEscHyyWxl0ITDIgvKwKoZNCdMuIU0I1rCSwFjZB2vM9GaUntuvfBL6SJs2DhdP%2BoMEzpISDXfMh13O6e4ftDNBlBfwYzlDpvJP95mdUOVgveLBIfbLT%2BoajjRRaR70VlgSuPyWIbcz3rA%2FQtZdCpQALlEcE5Y6Z%2FD1wv2joh9hJUukpclKciMM3PzMQGOqUBOyYcd52%2BrSpD0df3G2evdDzuCmfzvZEok7BBPIlrpkD%2FEWEf4g7dYQ2lWW5gMaTDNXcFOVpQ9i6snaPP2CgjU00L4hKcCzOlBIBPBV9WO7MaZ4h%2FEnZnoHbn95BahQ%2Fz3Q1Ijihnsd%2FQX1zW%2FDMLtcagETjlRNVTNX7TFScDGnuFIx4W7WTG3BiP5ikWVnrynBOMno%2Fd4Z%2BkB00dK0vb3kd6qqV5&X-Amz-Signature=e89a0a3e471f6a3c23352f43bfb4e4cdf223a0ba042b9453665528b38bc02460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BR6QBM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFah909TqHGUKPgpJYPVx1clMKoUNc%2BoutcdztiOVJ0VAiEAo3MFByyJmEYIJdG%2F5inNxRcEP1ZFBq3jhD5id71toJ4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOUtg%2FD2i9aCbOLo8CrcA%2FsjwUQ5TQ4AgyzmP%2FKf%2F0IxeG8CM61MAsgIRh%2BvgXAT8fC5fTzwi6T7OUxbEQsNbbeB5w2CfXEVHHzjapWrIHbOvXWGqE60w43XIMFaa1gop02aPQpaAU3IkQFPYwOG1qYwAJW86mkVKs86Zc7axuytpTyEc6N8zZQVS5w9%2BQErgE33kxY2gfTLgOWZfMHDpIE0qeNr1nI0eDutQ0E%2BudP91N1baYxZtSzMkd8iie%2B0tXod%2B4h%2FZvNNJ7ZKOS6TVedLxKKzplNsmPFWQgMObvJNVBIxOjuct%2FQ7vVEFZm75MgHEmpx3fpPe3JfdkXnmjDlFntRg8%2FqLVmyGATDiP%2FEjPFzP1BcUeSv9%2FICdI%2FMEGkCOUgFNBBDdOEHmMpcosHdga8HrCvePi2%2FOwnYZKggjhvWrXDg9SlHzeZKYJ3Li3EOYOjojJMS9BSnBPrSQXViGK2BT3aH3F7nrsoxM%2FAkC4jux%2BKEcxjf%2Bh1hdxBxTk3IToAVSFQqomynBgQaWJc3d2NsxAzvGSSV2TqWTlqRbWCAEPlDWpcJ3oRYI8IA38mw3r%2F3fue1%2F3QYLemkQZSlnS1CIzotlkIkY%2FNIshUqhUjBGZqNTJb7tS6dvD8O7CQhJJgWirEWvJF2BMJTQzMQGOqUB9sAybZG8TNPnJ0igEW50j0ykgs96pEjwTKEgp3tbtAZV5maEOVdBNNSnHzOKxU1ZbmIn7P7Y8csI2GANvOd%2FbKbe58iKZXgj7a2wTiG9Kw%2FERI%2BjEF1NrdDu1IWHQau36pJIFmjunh8ku85ImorMmf6SwU10HHmgZtfqU%2BR0v4dQ4Tu7arhV%2FQzDI8P%2Fwm1UIBYHG0T29ymYLzLBMR6sAAL2TuxY&X-Amz-Signature=99c23de59ed742b559c992d75856b786e9b6f2a97972e6e5d5a61fc01973bb12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYYRJFJM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T111023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCCmdEU12xa%2B3FV3PattzhKxw2bqgfrovkfqsPIcSUtzAIgPs8Pcx0RRBt3OUSRS%2B2RBV7kgpp%2FHHlZR%2Bf0xV5i9tEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPimAeQFM%2BF0nqWj%2ByrcA3M0l0xB1gH2871mcvK8aNA813FajeepAGjWoeknr1FVnjePfEu4onmOjTg%2BCpx6hSwXPZJNHnfQWQZ4K1SOCYoV%2Bl5ekWUNNo7xKdKEkkOEkkFcKQrTPGVUapfJT6hPaJHMKK9T2CexPX28cbvP6r1HR6ChbOV4rwY4jD7wGAD0hjerZhPUuitWRRKSC05ePdfIH6cPc8gGMuUx9Lc0e6EgQbMYnpCo%2BkaUnZl6aWQR3Oiljid3FfH8Qd9Vxawx4hPKXbgVPy25Mkx9kQ3nWU0oqjSjLCwD32nrz16LDK3McYiE56kV5gHCsH36pTZ2ogv3XIqRlBmjjgw%2F9pHug7HHI3vUf9nuWtPHVWzjD1SFSfoZjbsMwHjE5HMzCPL5dHoEANTLT8Qhy%2FSdJoDDKIgSXGS1GEdolD0%2F2rZHmpcxUkEIm2PwAr4xnOJBwKb7UwYpUCtp7zT9GISrUKWwN%2FRma27NX9dM4k1g9DP%2BpoLFp82Q6ZysCm3qh7iwTHjZJXPEkgTDBHEXUR60bQ4GObKkvYXlvZZXvmDLVWyukGY4s30e%2FEuLXc3kmoKTtyV%2FZhY5yKKFlNBeT7hMYZy1rcEupujzKjXzZp%2FGwE80P%2Bc7IORFyh1bO5WdCBGWMJTQzMQGOqUB0U3y2TX%2Fxye49wCYyhbyoM59q%2BGDZzP0kBPLx7IvTkZZEK0EQV%2FmZQMDwKFp5XAnTYafF8sNs%2BDjL3AOmRxexV6eOUgjRNMY5ydh0qtg6ijBK99Pnr2PfhP%2Be9YJCRDPM7WkoY4TvhxKJBiOqbtA12iKv0I9PuHX5HDy7zpE12JDv3A%2B4upezV7w9XKCAIqhI9JJy3jVXiA6Z3%2F5d0DehHJ2FAMu&X-Amz-Signature=97282615ccd06d81f50699833c86ea631f067389c618ec4026493fd59c8253d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BR6QBM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFah909TqHGUKPgpJYPVx1clMKoUNc%2BoutcdztiOVJ0VAiEAo3MFByyJmEYIJdG%2F5inNxRcEP1ZFBq3jhD5id71toJ4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOUtg%2FD2i9aCbOLo8CrcA%2FsjwUQ5TQ4AgyzmP%2FKf%2F0IxeG8CM61MAsgIRh%2BvgXAT8fC5fTzwi6T7OUxbEQsNbbeB5w2CfXEVHHzjapWrIHbOvXWGqE60w43XIMFaa1gop02aPQpaAU3IkQFPYwOG1qYwAJW86mkVKs86Zc7axuytpTyEc6N8zZQVS5w9%2BQErgE33kxY2gfTLgOWZfMHDpIE0qeNr1nI0eDutQ0E%2BudP91N1baYxZtSzMkd8iie%2B0tXod%2B4h%2FZvNNJ7ZKOS6TVedLxKKzplNsmPFWQgMObvJNVBIxOjuct%2FQ7vVEFZm75MgHEmpx3fpPe3JfdkXnmjDlFntRg8%2FqLVmyGATDiP%2FEjPFzP1BcUeSv9%2FICdI%2FMEGkCOUgFNBBDdOEHmMpcosHdga8HrCvePi2%2FOwnYZKggjhvWrXDg9SlHzeZKYJ3Li3EOYOjojJMS9BSnBPrSQXViGK2BT3aH3F7nrsoxM%2FAkC4jux%2BKEcxjf%2Bh1hdxBxTk3IToAVSFQqomynBgQaWJc3d2NsxAzvGSSV2TqWTlqRbWCAEPlDWpcJ3oRYI8IA38mw3r%2F3fue1%2F3QYLemkQZSlnS1CIzotlkIkY%2FNIshUqhUjBGZqNTJb7tS6dvD8O7CQhJJgWirEWvJF2BMJTQzMQGOqUB9sAybZG8TNPnJ0igEW50j0ykgs96pEjwTKEgp3tbtAZV5maEOVdBNNSnHzOKxU1ZbmIn7P7Y8csI2GANvOd%2FbKbe58iKZXgj7a2wTiG9Kw%2FERI%2BjEF1NrdDu1IWHQau36pJIFmjunh8ku85ImorMmf6SwU10HHmgZtfqU%2BR0v4dQ4Tu7arhV%2FQzDI8P%2Fwm1UIBYHG0T29ymYLzLBMR6sAAL2TuxY&X-Amz-Signature=f94c000f0a1ea5742f971374f9323ff164db9efa757405cc8da633b3ad3ea8a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWICTWNU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T111026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCcQ2wwcstyLGfK%2FtxNIikZjbCxTAvTdSNhbbvPFTjGRAIhAIKsmoefLq1BVknBWqHB8euhDJIMwiVH%2FHWQz7WSjOpfKv8DCHMQABoMNjM3NDIzMTgzODA1IgyJr2wcDVKcPpj7qNcq3APskSevydjN8B5wqB9R9tjNXf2hweTcRQwK8UKYHAtFFdYuPm4VOi8J3Wok87hKAQkLZz50lvsWmQt%2BkdG8Ot0%2BWRk0H1lSBVN3bydsDKzzNSg7XpuZ2azsrKxjVpjhXpqiGtfFaOcCqdFz%2B%2F0ifv2hMgfljD0eDjXOfawUuptcsv9RaVlw4OMz3OA6e0oSWHFcL4hra3RoujoIlVuOq%2BhCk5HNNVC7pCGtZX%2FehiLC1z1i5i2%2FIrnHNC%2BC0rO1Ct%2Bv25Xk2%2F9El0MmTZGvRC2l6IaH9EcHA%2BvX9dTeYYso4njWL6YLY3CtcBaLiPgnDxxZzBHxy0O%2FWW97WAryp68fWlKisRLpuKplAqUgf8VYFQ%2BuhHA6xhqUmxdSlPZI72%2FSKCzeR0Hsp4YI7sBVvqJP%2Bo%2BbXyuwxxHaIzx0ETStr%2BR1P%2BsaUKw5%2FwPHWr5f6dvZOZndWGcxMVMdirARB5rgVLg%2BJewWHhWFM%2Fd%2BMQfZw7iy8hIpCSvcaAFO%2BX4u9J1TG2WBEJ9cSYSq8fYZVjSQVfPPlKJRI6AIcrQR2txQoH%2BwB2UBd8KawHel9HLHTJkdjI1wa%2Fs26OGafpPPDObeixiVobCZqnT9gdaII3yWGx%2BUPh6Brdd8mRb80jCNz8zEBjqkAXVOUM6%2FvpSkO27DOx7pQzKgTCwRpVk40ABZ9yTth7eIWpCBZ91KSNOM50NSPBcmzRWsELkON8eAftVwyBLNsrqwXrPWsCxxAQQqcnNBXjSbZQ76N6ReEqHUoml%2Fukqc0dU%2FJfiIwYuL1xs6YNJxkpxu%2FKZBX%2FMiTKpfI4iL7%2F6mWyrp%2FvoU8M3Q5gU7wKcsU5ueMQYjgGWb8lJih5dCtrDVmJNc&X-Amz-Signature=8aeba0f26239b699e2e0c7e26e4852cc7eeeac0a9045804d221706a16af4a754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BR6QBM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFah909TqHGUKPgpJYPVx1clMKoUNc%2BoutcdztiOVJ0VAiEAo3MFByyJmEYIJdG%2F5inNxRcEP1ZFBq3jhD5id71toJ4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOUtg%2FD2i9aCbOLo8CrcA%2FsjwUQ5TQ4AgyzmP%2FKf%2F0IxeG8CM61MAsgIRh%2BvgXAT8fC5fTzwi6T7OUxbEQsNbbeB5w2CfXEVHHzjapWrIHbOvXWGqE60w43XIMFaa1gop02aPQpaAU3IkQFPYwOG1qYwAJW86mkVKs86Zc7axuytpTyEc6N8zZQVS5w9%2BQErgE33kxY2gfTLgOWZfMHDpIE0qeNr1nI0eDutQ0E%2BudP91N1baYxZtSzMkd8iie%2B0tXod%2B4h%2FZvNNJ7ZKOS6TVedLxKKzplNsmPFWQgMObvJNVBIxOjuct%2FQ7vVEFZm75MgHEmpx3fpPe3JfdkXnmjDlFntRg8%2FqLVmyGATDiP%2FEjPFzP1BcUeSv9%2FICdI%2FMEGkCOUgFNBBDdOEHmMpcosHdga8HrCvePi2%2FOwnYZKggjhvWrXDg9SlHzeZKYJ3Li3EOYOjojJMS9BSnBPrSQXViGK2BT3aH3F7nrsoxM%2FAkC4jux%2BKEcxjf%2Bh1hdxBxTk3IToAVSFQqomynBgQaWJc3d2NsxAzvGSSV2TqWTlqRbWCAEPlDWpcJ3oRYI8IA38mw3r%2F3fue1%2F3QYLemkQZSlnS1CIzotlkIkY%2FNIshUqhUjBGZqNTJb7tS6dvD8O7CQhJJgWirEWvJF2BMJTQzMQGOqUB9sAybZG8TNPnJ0igEW50j0ykgs96pEjwTKEgp3tbtAZV5maEOVdBNNSnHzOKxU1ZbmIn7P7Y8csI2GANvOd%2FbKbe58iKZXgj7a2wTiG9Kw%2FERI%2BjEF1NrdDu1IWHQau36pJIFmjunh8ku85ImorMmf6SwU10HHmgZtfqU%2BR0v4dQ4Tu7arhV%2FQzDI8P%2Fwm1UIBYHG0T29ymYLzLBMR6sAAL2TuxY&X-Amz-Signature=589e17a17a2992e6676b87fda7df82b757bdef2b513384619989b0b80208c2f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGUXEFRA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T111029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIECJyclEkzXQb744sfo52eC2azJ8Ch5mdDjnXqaUGMvEAiEAwO5bkjd3L%2BFq%2F7MHgnN63ONR3JqL6Zw%2BRzOX2X%2BVeccq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLi0FDsSj0kWh9vxaSrcA4CkI7e%2F7EI2T4XRsdkILd3dZ5W8qsfGE25dXgv2JDsnQJzB%2F0Yc1PLORJiSr9JVB3b5A1UNZb2cBE8g1kp%2BBwGFnsBhKg%2Fo%2B3aa%2FBl0uFK4rf6WDqRfyz4ZF8rf5q%2F7O2BtN%2BsvODcyDBPdWtTPuCdaQ7RTbRRzb2fybPFrs2RZQxrDsvuvcWosgCs0NOkeLriuNa8BNaPAgqMtkd%2FVGE5vZRNniWWJK6mqIDIUDH9NrZaX1WgDPyAQj0xiX6ynljXW%2ByM7uOreID5%2FqgySNC4G4AIXJYxyCF%2BefPPeMl4G7LrZ96iw1BbFPWyKoWD6SSVNI3Pja32lsRTR5gZgAPx59%2B4%2F13dgG%2FAkm%2BxQW7DaAWEqTTclcaVNkzizbf%2FQHu9onazHh5WCChVF2kyjxW1gOnyiCklRzWxYMpNPZS3l4xYwS0K70%2B9Rd2YIt1CmxD5CSZYy60P7I%2FXZPugcF%2B7eEl1fJ9sWlD0AaJfWdchz3VlHj0V%2FGHOPSjH%2FIjBmXcjkUHBluKM2dcf1f3Iv5SnaMAZavf8N%2FLIfa%2BP68E7QvLU3LMehY5AgHplRICMBesqol6q4s2AvG1k1XMBnU2vHbMawjCIOACVBED530OskHMDFl3%2FassOI6rzzMJnPzMQGOqUBlouuBBP5%2BT5fPP2iUJ8zgJhtyvC86PgmBCU3uX0HRZt7%2BjxS7ArDza2zQr5j4Tb%2Bgpeq7OYhbYRm9bM5t7g1Tl88rNalEixLjpz4NVIQsqkKFG7lltKKIf%2Fju3nMBuNXhBal%2BeTZb14PQ1szqVVOYhfL4hfYn2WUjBtmZAddVKOHxtkQq38CbaUq03FWi9Hg0M%2BJZile5BmtqHbJdkG7v896HYRe&X-Amz-Signature=0b3c2715710165ac2a67b894d111d2c253dccddef07a5c59c7a3af7ae8d34cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BR6QBM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFah909TqHGUKPgpJYPVx1clMKoUNc%2BoutcdztiOVJ0VAiEAo3MFByyJmEYIJdG%2F5inNxRcEP1ZFBq3jhD5id71toJ4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOUtg%2FD2i9aCbOLo8CrcA%2FsjwUQ5TQ4AgyzmP%2FKf%2F0IxeG8CM61MAsgIRh%2BvgXAT8fC5fTzwi6T7OUxbEQsNbbeB5w2CfXEVHHzjapWrIHbOvXWGqE60w43XIMFaa1gop02aPQpaAU3IkQFPYwOG1qYwAJW86mkVKs86Zc7axuytpTyEc6N8zZQVS5w9%2BQErgE33kxY2gfTLgOWZfMHDpIE0qeNr1nI0eDutQ0E%2BudP91N1baYxZtSzMkd8iie%2B0tXod%2B4h%2FZvNNJ7ZKOS6TVedLxKKzplNsmPFWQgMObvJNVBIxOjuct%2FQ7vVEFZm75MgHEmpx3fpPe3JfdkXnmjDlFntRg8%2FqLVmyGATDiP%2FEjPFzP1BcUeSv9%2FICdI%2FMEGkCOUgFNBBDdOEHmMpcosHdga8HrCvePi2%2FOwnYZKggjhvWrXDg9SlHzeZKYJ3Li3EOYOjojJMS9BSnBPrSQXViGK2BT3aH3F7nrsoxM%2FAkC4jux%2BKEcxjf%2Bh1hdxBxTk3IToAVSFQqomynBgQaWJc3d2NsxAzvGSSV2TqWTlqRbWCAEPlDWpcJ3oRYI8IA38mw3r%2F3fue1%2F3QYLemkQZSlnS1CIzotlkIkY%2FNIshUqhUjBGZqNTJb7tS6dvD8O7CQhJJgWirEWvJF2BMJTQzMQGOqUB9sAybZG8TNPnJ0igEW50j0ykgs96pEjwTKEgp3tbtAZV5maEOVdBNNSnHzOKxU1ZbmIn7P7Y8csI2GANvOd%2FbKbe58iKZXgj7a2wTiG9Kw%2FERI%2BjEF1NrdDu1IWHQau36pJIFmjunh8ku85ImorMmf6SwU10HHmgZtfqU%2BR0v4dQ4Tu7arhV%2FQzDI8P%2Fwm1UIBYHG0T29ymYLzLBMR6sAAL2TuxY&X-Amz-Signature=7f46b47703835a7fb92f8ba7e5f9bb56d67efbfd934a0cce5928c9f3c09767e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPOK4AUA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T111031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIEoyuLKFV7jxINKi40UnSw7Yn4NJYnIzqznkRyqjYrrsAiEAn6PoYj1OsWNTuzewl68dIiVEtU7bStdfM%2FOa25fkw6sq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDFZGqDRy3bcufgo8iCrcA0noQjljnjBEJ3Qg6MBa%2BDOOcoYf%2BnHJRLKZ1Y6N3ZGOCOkFFxZ4bGtneRh6lSDGByquUH8dCjQGhlaBIwVjS15SNmAVmqBTWN5znRAwCNwerY2NrIseGsJINhxbSXMeeMJe38TKbvsACUVvb7BieyrUyjS7bc%2BCD4sMXwWv4k7N9asI4XE7%2FmZq0R53HgJJcwcnAdaiGcGZf%2BWg5c%2FSq3mQOzcZYtU7%2BcMmophgQtf3%2B502WSBvQ3JoqN3lo6SYghaBMj1l1dQCOBwa0gJbe5HcXLa9USkAKti%2BukZtCnOUMo9Jx8cylas93EdCqX%2BuYOwEY7unKoEOiuzlXPhnQKmGdX4PPCv2uEHDVFzBBxRy83IINApxB91%2BP0Dhyc2bPGEORi5fs21gswXCuMV705fxV1NMLqXFlqHuNfSLqe%2Fv1aDWE39Iq%2F8onBea9SQ9kOSMsNYiqv2pDXStJFRKbzIcOimNcwsj%2Fj%2BfmatJn9F%2B%2BuUk99gLO4S9l6dxCXJkrtQvvMB6uTBgBwyc87lF5pUkmSrQHgYU2HByRIgCm%2FcFkHcGh65N9okeqIoQB6jwGFn8ydpF7WLo1noOvnTzZLzZos1vLQCmZMduWla%2FX48mJqteGTVBrpNx9gmrMOTOzMQGOqUBUhIbYRkE%2BmnzgVGlnXohReydLArknzoXrwThyfk7Xi9xo6HtW53qfPgZ8s2ACmN8yY0g7bvSlx3r9ZUF01DwpR82K%2B%2FMupRrxDJ7l54i4p%2BFyeqH23VGO1Exp1LJMHSyjYuYskBcX7fNcXck%2BvRte3T3ZRIgRWvFZEnSw8%2FRz7lHWOPXw%2Bovvg3EYlsyMwB6tEjEy%2B7fjB8u%2B%2FfwkkLDzx5WI8qB&X-Amz-Signature=3f95a3374b1703845cf2612d225d74c058e3b278d44b12756846f95a8d087346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJKVDW53%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T111034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQChhIo2whlU5Dfma%2BuNe14idg5ZDEy%2FOf1STmQ%2BreyaYwIgDGdHlxj%2Fbqm93JMoeBPbwaha5INnLhsYrk77YXoTu1gq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDMp%2BHHKaqhVpx%2BSxZCrcA5HaE44L%2Fp923U%2B5NeAmIdu1tj9m0MZ5S8bAvB2aJJcYepYCQKfUqpXhIy3sF2FGf%2FGUEkWdDI4qpGbEi2XKVFXR9rxBobzk0Da7XlH5zRZQaSRFzUrjES5Bph0F%2BPK9BCRr7%2B0MAdJ%2BpYOhYnifXUhyeXRC9K4N4OQNRTLd1fs%2Bnf16nK01%2F7Ojam9UtSqDok6Nla9as6Gj30lcDV60Riw7CuOCalouCKp%2FzoTmbBLAmtz%2Fh0f%2F%2FrTRGhnFd4%2F4CaRspiFaYG9PkJR4Z47aFKUd6F2fOhdT0Vjp2aLkrNuKUTnvbK97QWi7skucTaZYEV5uxo7Iw1QvwD0hp9u2gvZojqYHaVdE3mO%2F%2B%2FGi69ysqfL%2F1vui3sUlXqhSb2%2F9MpKFbpr5qsvM3U6XtAfK6%2B8bJI57fY%2BtUWYBr093RNqe7TxMFY0Y279%2FWEARB65HOmdlFarplWg2wff77KCE0zONdtuSgMLlmaF4l54%2BR7jGgo55Tx8Hg0alZbo58PD4s%2BetIQ9UPeFMb38LhjdnFfzXZHp%2BHipvdkM%2F3xOHZHeOtWNmZKW3ywCNODN%2BbjzccEVHmZ%2F7E6JQSxGVjK9TP%2BDsJghprtm%2BYbrzMdcRU%2Fi8zZ2NBqksHLYQqJcQMKHPzMQGOqUBk6tyIuTCXh54C5RbktwCTV%2BP%2Fx5lO37Vm0juX%2FXxsVTOYQUXKeRWEPQIk5L3m%2BJ40aCZuUJALBFGs9U3NI%2FNaYLoj8BPNOB%2FJRpPbXHp4MGXenqOnrfjvemfFqwnH4XuUp5UB8kka%2FTBa9G%2FxKD%2FRjU6h0rFCL7zfaJia82R3uAbm3Eq3NF51yMpUfcdwhvV%2FC0BzElwRwTn3W9yFVT%2Fvw3348FS&X-Amz-Signature=1ad56cd71b714e1ebcd94e755ebfff1364a2559f4a8cb0e49b0e777645277e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPHZVEIZ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T111036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDljlxwBlEI272Ym47GuJPPXy7VrZbbzRJpTHImVvsChAIgIVEMT%2BJMDpJ9oDKXXG6ABXpE%2BI0cNQVNFrG9Wqkeqicq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCwW1uWJnDSwQKGLTyrcA6pzFFqvFKzvW2Jmv7%2BTIeXaEo3IKTtTIqI74nlUJLFTsqyuhRzp0SYPlxrNKfUZeVdV2LEHIFqxrKZj96nPrEVfvZr5lUhsK0SMy8HIlWNk%2Bowx9QcGt9npaTacUu84Cg4SGMMOcdeUSrr07CaSBQN4wk3Ixymilyv%2FAmn2ddvonaVwdiM8fL2pT4MJjTdqE1nrKDTs%2Byy4VYdXTNN1HkjoOHnmxyML62nmAbR9%2B4DdTerfHPagcNu%2BorMlEjTPX%2FcBgFX1VD35gNw0EziZgf3tXdjhQqq0H2BltvsmHPocb2bqYDTkLCgp%2F5BJ9FtvTKkZPP3d7JjzW2zFTE4EuuGKuyMj9%2BU3lrG9uqFDdj2i8LI1IChJsalAHS3K%2FLVbxrTAT5Ck7F68SiFzUmfYHtQ0wKpfAxWwfYvUe8vNmk4yQmLWimD0wacSKZs3Cv27wwheSohXJAp%2BeUdxwOk3dV4xrvGeJkTTS8CFuey48Vm0TtPwEZdfq1f9oPpiXfbhZxaYyHnOwLdruwI9YNOyID5nPTs2IL2NItNQdaYPLxoIoWhZLSXVtqPfYeqIbbwfkqbAPy%2B8x9tMwvRQmGQ3nPBvt12PSzh3wAV%2FjBYm69LD8CZtlD42qU42H4RmMJTQzMQGOqUB1jW9IUk6q0TDIfymzlcVZ27iheGFEz6ht2kBEXUut7SPCSm2IsiLoVDRk3B0t1QqrJVVY5y%2FdtZv6Arpo%2BHuE8fznKOw4B82z8uT1tM0xe5qQvSQFMSr%2B0jNa%2BWd0b7eZgsKR5P60wVKUaOWd4LnrJF%2F0eip0kwYIlbh%2FmR%2B3etijvdb%2FFavkQS2x8O2e7ndnsE%2B2ksjkFqiGaF8WjBHi1%2FrR1to&X-Amz-Signature=f9b81c69094d52b6bbbfbd6f956987296d3f1f2d76bfea492d8f22ee520cd87c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAF2ZV4D%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T111038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIADKLqreR868WUt4lrxRYku3hld16zktGRwsXmKreBXTAiB6nLg9K16uJogXk9naHiA4x48KnrxGeDlV6Z5nYgPgoSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMsSpMOY4qmY4BLxjmKtwDlGfhZJmXbXg0rYRGcmzNHXgyIxZqLmLsa7eSWeYgg9TWJfl%2BTmiurRy41slQLylNdFM%2F1To91nvOta8%2F%2F4%2B7lBWNpXonPlYylXyxMpIb5FSwQrrkXkkRE6GxfYNAzPXtSTcQeHT2VpB%2BfLxIU3ut6IoMF2TWL2gQXkqzWjmjK%2B8BmVSA9U0VUa7xs1uDXoUVml0cFxC6CPZSfcVXCto1li6Ip63dPNwXpEvk5%2BYQRjF4Pvay3gxahaIDMQVckYFHGx6c%2BxmmEMKWlCaz8FYTU%2FZTKZYdfSdjdt64NS8Ehxw7VvM0WrfW%2F9fJV2zzMz3O76ZDc1pOH3pQ6vxz%2FWYCKLC%2BhnAN5In3s0uMYOYRVjGsSx5EQFqyMlmjarfvmr0KFNI4gVl04q%2FVcJvtCpy3KISdcEWkZmcAjA89SElqyRJJmHfT4sANLO9d%2FTRMZGCqs%2FK84Ido7%2FBndGddt%2FkA8L9NZvqMyJQHoZsVxK0hvM0fGKqWexOC9oobZUYE6WchpsVrDuMkdIcCD8ADrwTlWjQd9K9%2B6PhV1WbWCbmcers9lzEAn5uSTHWs6nqm0LJv9n2KtT4Zmu%2BFFahGQndi%2BucHCXfEAlwYYb4W1tlW%2FYBGS2qc2lpGO%2FFsRbgw8c%2FMxAY6pgEUbQ6wHBIuE99mWFgaavCuri%2Bv8ea45HEeGl%2B75cm%2FDZqCqOv1kbvthq3O7LaGoRCeib1XBe4%2BJCOu%2FHSIV8GWi9gzalraQ8haNohEC7k4RO%2BgP801WSBHPeUQ6WVuWnJhaTOPHSZbWG62PTUzIJQLZlihIIPoMQPra0r%2B3Qgrk8iGTQn4jUM87jzDpeKhQoseqjRpoHy15uRq0QEfFtNzjmAno0vh&X-Amz-Signature=56e2488c0093891c07db8d685a2ae59cd44366af27181d26f5c3efa9abe71620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYYRJFJM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T111039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCCmdEU12xa%2B3FV3PattzhKxw2bqgfrovkfqsPIcSUtzAIgPs8Pcx0RRBt3OUSRS%2B2RBV7kgpp%2FHHlZR%2Bf0xV5i9tEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPimAeQFM%2BF0nqWj%2ByrcA3M0l0xB1gH2871mcvK8aNA813FajeepAGjWoeknr1FVnjePfEu4onmOjTg%2BCpx6hSwXPZJNHnfQWQZ4K1SOCYoV%2Bl5ekWUNNo7xKdKEkkOEkkFcKQrTPGVUapfJT6hPaJHMKK9T2CexPX28cbvP6r1HR6ChbOV4rwY4jD7wGAD0hjerZhPUuitWRRKSC05ePdfIH6cPc8gGMuUx9Lc0e6EgQbMYnpCo%2BkaUnZl6aWQR3Oiljid3FfH8Qd9Vxawx4hPKXbgVPy25Mkx9kQ3nWU0oqjSjLCwD32nrz16LDK3McYiE56kV5gHCsH36pTZ2ogv3XIqRlBmjjgw%2F9pHug7HHI3vUf9nuWtPHVWzjD1SFSfoZjbsMwHjE5HMzCPL5dHoEANTLT8Qhy%2FSdJoDDKIgSXGS1GEdolD0%2F2rZHmpcxUkEIm2PwAr4xnOJBwKb7UwYpUCtp7zT9GISrUKWwN%2FRma27NX9dM4k1g9DP%2BpoLFp82Q6ZysCm3qh7iwTHjZJXPEkgTDBHEXUR60bQ4GObKkvYXlvZZXvmDLVWyukGY4s30e%2FEuLXc3kmoKTtyV%2FZhY5yKKFlNBeT7hMYZy1rcEupujzKjXzZp%2FGwE80P%2Bc7IORFyh1bO5WdCBGWMJTQzMQGOqUB0U3y2TX%2Fxye49wCYyhbyoM59q%2BGDZzP0kBPLx7IvTkZZEK0EQV%2FmZQMDwKFp5XAnTYafF8sNs%2BDjL3AOmRxexV6eOUgjRNMY5ydh0qtg6ijBK99Pnr2PfhP%2Be9YJCRDPM7WkoY4TvhxKJBiOqbtA12iKv0I9PuHX5HDy7zpE12JDv3A%2B4upezV7w9XKCAIqhI9JJy3jVXiA6Z3%2F5d0DehHJ2FAMu&X-Amz-Signature=cfc0642ad0ee40e1f3b4620a016f2c6aab908abd77265cca318ba68d8afad5b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BR6QBM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFah909TqHGUKPgpJYPVx1clMKoUNc%2BoutcdztiOVJ0VAiEAo3MFByyJmEYIJdG%2F5inNxRcEP1ZFBq3jhD5id71toJ4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOUtg%2FD2i9aCbOLo8CrcA%2FsjwUQ5TQ4AgyzmP%2FKf%2F0IxeG8CM61MAsgIRh%2BvgXAT8fC5fTzwi6T7OUxbEQsNbbeB5w2CfXEVHHzjapWrIHbOvXWGqE60w43XIMFaa1gop02aPQpaAU3IkQFPYwOG1qYwAJW86mkVKs86Zc7axuytpTyEc6N8zZQVS5w9%2BQErgE33kxY2gfTLgOWZfMHDpIE0qeNr1nI0eDutQ0E%2BudP91N1baYxZtSzMkd8iie%2B0tXod%2B4h%2FZvNNJ7ZKOS6TVedLxKKzplNsmPFWQgMObvJNVBIxOjuct%2FQ7vVEFZm75MgHEmpx3fpPe3JfdkXnmjDlFntRg8%2FqLVmyGATDiP%2FEjPFzP1BcUeSv9%2FICdI%2FMEGkCOUgFNBBDdOEHmMpcosHdga8HrCvePi2%2FOwnYZKggjhvWrXDg9SlHzeZKYJ3Li3EOYOjojJMS9BSnBPrSQXViGK2BT3aH3F7nrsoxM%2FAkC4jux%2BKEcxjf%2Bh1hdxBxTk3IToAVSFQqomynBgQaWJc3d2NsxAzvGSSV2TqWTlqRbWCAEPlDWpcJ3oRYI8IA38mw3r%2F3fue1%2F3QYLemkQZSlnS1CIzotlkIkY%2FNIshUqhUjBGZqNTJb7tS6dvD8O7CQhJJgWirEWvJF2BMJTQzMQGOqUB9sAybZG8TNPnJ0igEW50j0ykgs96pEjwTKEgp3tbtAZV5maEOVdBNNSnHzOKxU1ZbmIn7P7Y8csI2GANvOd%2FbKbe58iKZXgj7a2wTiG9Kw%2FERI%2BjEF1NrdDu1IWHQau36pJIFmjunh8ku85ImorMmf6SwU10HHmgZtfqU%2BR0v4dQ4Tu7arhV%2FQzDI8P%2Fwm1UIBYHG0T29ymYLzLBMR6sAAL2TuxY&X-Amz-Signature=75b4c0cb8aa98ff357b04da1d28102b834c56f248f2664818e38d5dc8b7c7dae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BR6QBM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIFah909TqHGUKPgpJYPVx1clMKoUNc%2BoutcdztiOVJ0VAiEAo3MFByyJmEYIJdG%2F5inNxRcEP1ZFBq3jhD5id71toJ4q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOUtg%2FD2i9aCbOLo8CrcA%2FsjwUQ5TQ4AgyzmP%2FKf%2F0IxeG8CM61MAsgIRh%2BvgXAT8fC5fTzwi6T7OUxbEQsNbbeB5w2CfXEVHHzjapWrIHbOvXWGqE60w43XIMFaa1gop02aPQpaAU3IkQFPYwOG1qYwAJW86mkVKs86Zc7axuytpTyEc6N8zZQVS5w9%2BQErgE33kxY2gfTLgOWZfMHDpIE0qeNr1nI0eDutQ0E%2BudP91N1baYxZtSzMkd8iie%2B0tXod%2B4h%2FZvNNJ7ZKOS6TVedLxKKzplNsmPFWQgMObvJNVBIxOjuct%2FQ7vVEFZm75MgHEmpx3fpPe3JfdkXnmjDlFntRg8%2FqLVmyGATDiP%2FEjPFzP1BcUeSv9%2FICdI%2FMEGkCOUgFNBBDdOEHmMpcosHdga8HrCvePi2%2FOwnYZKggjhvWrXDg9SlHzeZKYJ3Li3EOYOjojJMS9BSnBPrSQXViGK2BT3aH3F7nrsoxM%2FAkC4jux%2BKEcxjf%2Bh1hdxBxTk3IToAVSFQqomynBgQaWJc3d2NsxAzvGSSV2TqWTlqRbWCAEPlDWpcJ3oRYI8IA38mw3r%2F3fue1%2F3QYLemkQZSlnS1CIzotlkIkY%2FNIshUqhUjBGZqNTJb7tS6dvD8O7CQhJJgWirEWvJF2BMJTQzMQGOqUB9sAybZG8TNPnJ0igEW50j0ykgs96pEjwTKEgp3tbtAZV5maEOVdBNNSnHzOKxU1ZbmIn7P7Y8csI2GANvOd%2FbKbe58iKZXgj7a2wTiG9Kw%2FERI%2BjEF1NrdDu1IWHQau36pJIFmjunh8ku85ImorMmf6SwU10HHmgZtfqU%2BR0v4dQ4Tu7arhV%2FQzDI8P%2Fwm1UIBYHG0T29ymYLzLBMR6sAAL2TuxY&X-Amz-Signature=3762fc9122ed9afd0eb5fe531783625d4d78455e4d3549fd5f4fdf22ab6358f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGPSKIN2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHkl4um4%2FvtqNOQVVXnluxxIw1IRUvvFfhEUzU4T3D%2B2AiAl%2FmflMMUC5DSeE3G6yX34jOhQRysw3xafiUMEjQTZUCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM8peJ0K00SI9m63SdKtwD6AVG978SopO1vjgHgCyalAzW5pYSWbJmL7VmHJZDG%2FaAIaoCDySD6fqyI5%2FKK%2FPLF%2BCeGlTZMF8sqcs12Cdx%2BXAqW8m1xVZMgRwN%2FlBGaGlE7b4aM7WXK43d%2Fyyv%2BoyJqIKPKWZIiCQsPbv%2BBPFKQrgrcXTtTRmDydZTNGpVkLOJ%2FRLYj6uUVDrjLHk3XTNwz7rNV4D4utPPczvclncNJqwVttWwPIW9v5Mc6d93XVbe8PcuhSfaaVipqTpEiCgdr69e%2FHkr0a2mjRD6aOeyWcv6F8DPmBZ6RZhIr8YyPXvZ1ZhBbENLVuLDR0KwFrlU8i22ORI6%2F5pDOLlHkFCD0B%2F0GeviHBMiGgoiRbpPR2C6e9jkvhQGjIAUkZISa8aRzjrI0VE7YUZ8HalQJw1fWNbkzNoy6WpeUuYRmg2JaztzoPdEfY8MjPPWWsIc5Xmqi9jnuX62WkTIYki4FdlmESjhn3uYiIFSMV2L0WTxqwEAu2rivToaIqQnveoTUigQZC33WZAKKz%2B67Ea9iuoN7CryU9dNufWUf5T3UeR0EbjQYJL0lRzNxO%2Bo%2ByyRcA3HhALKBV75uZkHT3Io9AYu15bw4JPwAqt6BrjyDZM2EB6EA6dMVftJX2ws0PAw8s%2FMxAY6pgH67FUzNsRvg%2BGLwq%2BKp%2BZqi1IbCubiIspNxllEGgEO45K3vPC64hkV8Z2cYM5%2B7EjVBe1Gun3yK9m%2FWy0Ir%2F2w5xiBIWSQ%2FTyj6lX6j7gCgN2%2Fp%2Bc6%2B7%2BFtwpVy88UrMuHau6IXrXgwJnQj5QaUDnKJTvyXSUbqd1TTuIIQDrRZkQaHTzBH%2B5OPvtEYUxlHq3hI%2B0jvpkXPI8FCXOySF614%2FRYiVH1&X-Amz-Signature=dc427dfa3a21e1cd462a2cb755b4f0cf3ee760f704c49bdb20352985eaa40350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGPSKIN2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHkl4um4%2FvtqNOQVVXnluxxIw1IRUvvFfhEUzU4T3D%2B2AiAl%2FmflMMUC5DSeE3G6yX34jOhQRysw3xafiUMEjQTZUCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM8peJ0K00SI9m63SdKtwD6AVG978SopO1vjgHgCyalAzW5pYSWbJmL7VmHJZDG%2FaAIaoCDySD6fqyI5%2FKK%2FPLF%2BCeGlTZMF8sqcs12Cdx%2BXAqW8m1xVZMgRwN%2FlBGaGlE7b4aM7WXK43d%2Fyyv%2BoyJqIKPKWZIiCQsPbv%2BBPFKQrgrcXTtTRmDydZTNGpVkLOJ%2FRLYj6uUVDrjLHk3XTNwz7rNV4D4utPPczvclncNJqwVttWwPIW9v5Mc6d93XVbe8PcuhSfaaVipqTpEiCgdr69e%2FHkr0a2mjRD6aOeyWcv6F8DPmBZ6RZhIr8YyPXvZ1ZhBbENLVuLDR0KwFrlU8i22ORI6%2F5pDOLlHkFCD0B%2F0GeviHBMiGgoiRbpPR2C6e9jkvhQGjIAUkZISa8aRzjrI0VE7YUZ8HalQJw1fWNbkzNoy6WpeUuYRmg2JaztzoPdEfY8MjPPWWsIc5Xmqi9jnuX62WkTIYki4FdlmESjhn3uYiIFSMV2L0WTxqwEAu2rivToaIqQnveoTUigQZC33WZAKKz%2B67Ea9iuoN7CryU9dNufWUf5T3UeR0EbjQYJL0lRzNxO%2Bo%2ByyRcA3HhALKBV75uZkHT3Io9AYu15bw4JPwAqt6BrjyDZM2EB6EA6dMVftJX2ws0PAw8s%2FMxAY6pgH67FUzNsRvg%2BGLwq%2BKp%2BZqi1IbCubiIspNxllEGgEO45K3vPC64hkV8Z2cYM5%2B7EjVBe1Gun3yK9m%2FWy0Ir%2F2w5xiBIWSQ%2FTyj6lX6j7gCgN2%2Fp%2Bc6%2B7%2BFtwpVy88UrMuHau6IXrXgwJnQj5QaUDnKJTvyXSUbqd1TTuIIQDrRZkQaHTzBH%2B5OPvtEYUxlHq3hI%2B0jvpkXPI8FCXOySF614%2FRYiVH1&X-Amz-Signature=5e1ce848c0fb3b2cf617ea43632f8c26d4e79ea032d1e15821cc2527b6187f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGPSKIN2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHkl4um4%2FvtqNOQVVXnluxxIw1IRUvvFfhEUzU4T3D%2B2AiAl%2FmflMMUC5DSeE3G6yX34jOhQRysw3xafiUMEjQTZUCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM8peJ0K00SI9m63SdKtwD6AVG978SopO1vjgHgCyalAzW5pYSWbJmL7VmHJZDG%2FaAIaoCDySD6fqyI5%2FKK%2FPLF%2BCeGlTZMF8sqcs12Cdx%2BXAqW8m1xVZMgRwN%2FlBGaGlE7b4aM7WXK43d%2Fyyv%2BoyJqIKPKWZIiCQsPbv%2BBPFKQrgrcXTtTRmDydZTNGpVkLOJ%2FRLYj6uUVDrjLHk3XTNwz7rNV4D4utPPczvclncNJqwVttWwPIW9v5Mc6d93XVbe8PcuhSfaaVipqTpEiCgdr69e%2FHkr0a2mjRD6aOeyWcv6F8DPmBZ6RZhIr8YyPXvZ1ZhBbENLVuLDR0KwFrlU8i22ORI6%2F5pDOLlHkFCD0B%2F0GeviHBMiGgoiRbpPR2C6e9jkvhQGjIAUkZISa8aRzjrI0VE7YUZ8HalQJw1fWNbkzNoy6WpeUuYRmg2JaztzoPdEfY8MjPPWWsIc5Xmqi9jnuX62WkTIYki4FdlmESjhn3uYiIFSMV2L0WTxqwEAu2rivToaIqQnveoTUigQZC33WZAKKz%2B67Ea9iuoN7CryU9dNufWUf5T3UeR0EbjQYJL0lRzNxO%2Bo%2ByyRcA3HhALKBV75uZkHT3Io9AYu15bw4JPwAqt6BrjyDZM2EB6EA6dMVftJX2ws0PAw8s%2FMxAY6pgH67FUzNsRvg%2BGLwq%2BKp%2BZqi1IbCubiIspNxllEGgEO45K3vPC64hkV8Z2cYM5%2B7EjVBe1Gun3yK9m%2FWy0Ir%2F2w5xiBIWSQ%2FTyj6lX6j7gCgN2%2Fp%2Bc6%2B7%2BFtwpVy88UrMuHau6IXrXgwJnQj5QaUDnKJTvyXSUbqd1TTuIIQDrRZkQaHTzBH%2B5OPvtEYUxlHq3hI%2B0jvpkXPI8FCXOySF614%2FRYiVH1&X-Amz-Signature=3a818f01bbe29ebe279971b7a6da309c76cf8061a6b722a5bd44ab734e396500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGPSKIN2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHkl4um4%2FvtqNOQVVXnluxxIw1IRUvvFfhEUzU4T3D%2B2AiAl%2FmflMMUC5DSeE3G6yX34jOhQRysw3xafiUMEjQTZUCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM8peJ0K00SI9m63SdKtwD6AVG978SopO1vjgHgCyalAzW5pYSWbJmL7VmHJZDG%2FaAIaoCDySD6fqyI5%2FKK%2FPLF%2BCeGlTZMF8sqcs12Cdx%2BXAqW8m1xVZMgRwN%2FlBGaGlE7b4aM7WXK43d%2Fyyv%2BoyJqIKPKWZIiCQsPbv%2BBPFKQrgrcXTtTRmDydZTNGpVkLOJ%2FRLYj6uUVDrjLHk3XTNwz7rNV4D4utPPczvclncNJqwVttWwPIW9v5Mc6d93XVbe8PcuhSfaaVipqTpEiCgdr69e%2FHkr0a2mjRD6aOeyWcv6F8DPmBZ6RZhIr8YyPXvZ1ZhBbENLVuLDR0KwFrlU8i22ORI6%2F5pDOLlHkFCD0B%2F0GeviHBMiGgoiRbpPR2C6e9jkvhQGjIAUkZISa8aRzjrI0VE7YUZ8HalQJw1fWNbkzNoy6WpeUuYRmg2JaztzoPdEfY8MjPPWWsIc5Xmqi9jnuX62WkTIYki4FdlmESjhn3uYiIFSMV2L0WTxqwEAu2rivToaIqQnveoTUigQZC33WZAKKz%2B67Ea9iuoN7CryU9dNufWUf5T3UeR0EbjQYJL0lRzNxO%2Bo%2ByyRcA3HhALKBV75uZkHT3Io9AYu15bw4JPwAqt6BrjyDZM2EB6EA6dMVftJX2ws0PAw8s%2FMxAY6pgH67FUzNsRvg%2BGLwq%2BKp%2BZqi1IbCubiIspNxllEGgEO45K3vPC64hkV8Z2cYM5%2B7EjVBe1Gun3yK9m%2FWy0Ir%2F2w5xiBIWSQ%2FTyj6lX6j7gCgN2%2Fp%2Bc6%2B7%2BFtwpVy88UrMuHau6IXrXgwJnQj5QaUDnKJTvyXSUbqd1TTuIIQDrRZkQaHTzBH%2B5OPvtEYUxlHq3hI%2B0jvpkXPI8FCXOySF614%2FRYiVH1&X-Amz-Signature=9009118dabb5dbc3f808bc5719b921758f4a4c780fe071a347fe184404dade0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGPSKIN2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHkl4um4%2FvtqNOQVVXnluxxIw1IRUvvFfhEUzU4T3D%2B2AiAl%2FmflMMUC5DSeE3G6yX34jOhQRysw3xafiUMEjQTZUCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM8peJ0K00SI9m63SdKtwD6AVG978SopO1vjgHgCyalAzW5pYSWbJmL7VmHJZDG%2FaAIaoCDySD6fqyI5%2FKK%2FPLF%2BCeGlTZMF8sqcs12Cdx%2BXAqW8m1xVZMgRwN%2FlBGaGlE7b4aM7WXK43d%2Fyyv%2BoyJqIKPKWZIiCQsPbv%2BBPFKQrgrcXTtTRmDydZTNGpVkLOJ%2FRLYj6uUVDrjLHk3XTNwz7rNV4D4utPPczvclncNJqwVttWwPIW9v5Mc6d93XVbe8PcuhSfaaVipqTpEiCgdr69e%2FHkr0a2mjRD6aOeyWcv6F8DPmBZ6RZhIr8YyPXvZ1ZhBbENLVuLDR0KwFrlU8i22ORI6%2F5pDOLlHkFCD0B%2F0GeviHBMiGgoiRbpPR2C6e9jkvhQGjIAUkZISa8aRzjrI0VE7YUZ8HalQJw1fWNbkzNoy6WpeUuYRmg2JaztzoPdEfY8MjPPWWsIc5Xmqi9jnuX62WkTIYki4FdlmESjhn3uYiIFSMV2L0WTxqwEAu2rivToaIqQnveoTUigQZC33WZAKKz%2B67Ea9iuoN7CryU9dNufWUf5T3UeR0EbjQYJL0lRzNxO%2Bo%2ByyRcA3HhALKBV75uZkHT3Io9AYu15bw4JPwAqt6BrjyDZM2EB6EA6dMVftJX2ws0PAw8s%2FMxAY6pgH67FUzNsRvg%2BGLwq%2BKp%2BZqi1IbCubiIspNxllEGgEO45K3vPC64hkV8Z2cYM5%2B7EjVBe1Gun3yK9m%2FWy0Ir%2F2w5xiBIWSQ%2FTyj6lX6j7gCgN2%2Fp%2Bc6%2B7%2BFtwpVy88UrMuHau6IXrXgwJnQj5QaUDnKJTvyXSUbqd1TTuIIQDrRZkQaHTzBH%2B5OPvtEYUxlHq3hI%2B0jvpkXPI8FCXOySF614%2FRYiVH1&X-Amz-Signature=153e8e83e720de78d73a50cd9a61f63375a117c4bef6e299d0c5746b8357cd56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGPSKIN2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHkl4um4%2FvtqNOQVVXnluxxIw1IRUvvFfhEUzU4T3D%2B2AiAl%2FmflMMUC5DSeE3G6yX34jOhQRysw3xafiUMEjQTZUCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM8peJ0K00SI9m63SdKtwD6AVG978SopO1vjgHgCyalAzW5pYSWbJmL7VmHJZDG%2FaAIaoCDySD6fqyI5%2FKK%2FPLF%2BCeGlTZMF8sqcs12Cdx%2BXAqW8m1xVZMgRwN%2FlBGaGlE7b4aM7WXK43d%2Fyyv%2BoyJqIKPKWZIiCQsPbv%2BBPFKQrgrcXTtTRmDydZTNGpVkLOJ%2FRLYj6uUVDrjLHk3XTNwz7rNV4D4utPPczvclncNJqwVttWwPIW9v5Mc6d93XVbe8PcuhSfaaVipqTpEiCgdr69e%2FHkr0a2mjRD6aOeyWcv6F8DPmBZ6RZhIr8YyPXvZ1ZhBbENLVuLDR0KwFrlU8i22ORI6%2F5pDOLlHkFCD0B%2F0GeviHBMiGgoiRbpPR2C6e9jkvhQGjIAUkZISa8aRzjrI0VE7YUZ8HalQJw1fWNbkzNoy6WpeUuYRmg2JaztzoPdEfY8MjPPWWsIc5Xmqi9jnuX62WkTIYki4FdlmESjhn3uYiIFSMV2L0WTxqwEAu2rivToaIqQnveoTUigQZC33WZAKKz%2B67Ea9iuoN7CryU9dNufWUf5T3UeR0EbjQYJL0lRzNxO%2Bo%2ByyRcA3HhALKBV75uZkHT3Io9AYu15bw4JPwAqt6BrjyDZM2EB6EA6dMVftJX2ws0PAw8s%2FMxAY6pgH67FUzNsRvg%2BGLwq%2BKp%2BZqi1IbCubiIspNxllEGgEO45K3vPC64hkV8Z2cYM5%2B7EjVBe1Gun3yK9m%2FWy0Ir%2F2w5xiBIWSQ%2FTyj6lX6j7gCgN2%2Fp%2Bc6%2B7%2BFtwpVy88UrMuHau6IXrXgwJnQj5QaUDnKJTvyXSUbqd1TTuIIQDrRZkQaHTzBH%2B5OPvtEYUxlHq3hI%2B0jvpkXPI8FCXOySF614%2FRYiVH1&X-Amz-Signature=587e839d36f44f58d500ee5e630384a13df8ae9ac9f9253ad25807f0e373318b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGPSKIN2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHkl4um4%2FvtqNOQVVXnluxxIw1IRUvvFfhEUzU4T3D%2B2AiAl%2FmflMMUC5DSeE3G6yX34jOhQRysw3xafiUMEjQTZUCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM8peJ0K00SI9m63SdKtwD6AVG978SopO1vjgHgCyalAzW5pYSWbJmL7VmHJZDG%2FaAIaoCDySD6fqyI5%2FKK%2FPLF%2BCeGlTZMF8sqcs12Cdx%2BXAqW8m1xVZMgRwN%2FlBGaGlE7b4aM7WXK43d%2Fyyv%2BoyJqIKPKWZIiCQsPbv%2BBPFKQrgrcXTtTRmDydZTNGpVkLOJ%2FRLYj6uUVDrjLHk3XTNwz7rNV4D4utPPczvclncNJqwVttWwPIW9v5Mc6d93XVbe8PcuhSfaaVipqTpEiCgdr69e%2FHkr0a2mjRD6aOeyWcv6F8DPmBZ6RZhIr8YyPXvZ1ZhBbENLVuLDR0KwFrlU8i22ORI6%2F5pDOLlHkFCD0B%2F0GeviHBMiGgoiRbpPR2C6e9jkvhQGjIAUkZISa8aRzjrI0VE7YUZ8HalQJw1fWNbkzNoy6WpeUuYRmg2JaztzoPdEfY8MjPPWWsIc5Xmqi9jnuX62WkTIYki4FdlmESjhn3uYiIFSMV2L0WTxqwEAu2rivToaIqQnveoTUigQZC33WZAKKz%2B67Ea9iuoN7CryU9dNufWUf5T3UeR0EbjQYJL0lRzNxO%2Bo%2ByyRcA3HhALKBV75uZkHT3Io9AYu15bw4JPwAqt6BrjyDZM2EB6EA6dMVftJX2ws0PAw8s%2FMxAY6pgH67FUzNsRvg%2BGLwq%2BKp%2BZqi1IbCubiIspNxllEGgEO45K3vPC64hkV8Z2cYM5%2B7EjVBe1Gun3yK9m%2FWy0Ir%2F2w5xiBIWSQ%2FTyj6lX6j7gCgN2%2Fp%2Bc6%2B7%2BFtwpVy88UrMuHau6IXrXgwJnQj5QaUDnKJTvyXSUbqd1TTuIIQDrRZkQaHTzBH%2B5OPvtEYUxlHq3hI%2B0jvpkXPI8FCXOySF614%2FRYiVH1&X-Amz-Signature=1a83b23e83afe135ffdaac85fcdeed0c9b8348b37ccd7d79c0e303b83e3e47e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGPSKIN2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHkl4um4%2FvtqNOQVVXnluxxIw1IRUvvFfhEUzU4T3D%2B2AiAl%2FmflMMUC5DSeE3G6yX34jOhQRysw3xafiUMEjQTZUCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM8peJ0K00SI9m63SdKtwD6AVG978SopO1vjgHgCyalAzW5pYSWbJmL7VmHJZDG%2FaAIaoCDySD6fqyI5%2FKK%2FPLF%2BCeGlTZMF8sqcs12Cdx%2BXAqW8m1xVZMgRwN%2FlBGaGlE7b4aM7WXK43d%2Fyyv%2BoyJqIKPKWZIiCQsPbv%2BBPFKQrgrcXTtTRmDydZTNGpVkLOJ%2FRLYj6uUVDrjLHk3XTNwz7rNV4D4utPPczvclncNJqwVttWwPIW9v5Mc6d93XVbe8PcuhSfaaVipqTpEiCgdr69e%2FHkr0a2mjRD6aOeyWcv6F8DPmBZ6RZhIr8YyPXvZ1ZhBbENLVuLDR0KwFrlU8i22ORI6%2F5pDOLlHkFCD0B%2F0GeviHBMiGgoiRbpPR2C6e9jkvhQGjIAUkZISa8aRzjrI0VE7YUZ8HalQJw1fWNbkzNoy6WpeUuYRmg2JaztzoPdEfY8MjPPWWsIc5Xmqi9jnuX62WkTIYki4FdlmESjhn3uYiIFSMV2L0WTxqwEAu2rivToaIqQnveoTUigQZC33WZAKKz%2B67Ea9iuoN7CryU9dNufWUf5T3UeR0EbjQYJL0lRzNxO%2Bo%2ByyRcA3HhALKBV75uZkHT3Io9AYu15bw4JPwAqt6BrjyDZM2EB6EA6dMVftJX2ws0PAw8s%2FMxAY6pgH67FUzNsRvg%2BGLwq%2BKp%2BZqi1IbCubiIspNxllEGgEO45K3vPC64hkV8Z2cYM5%2B7EjVBe1Gun3yK9m%2FWy0Ir%2F2w5xiBIWSQ%2FTyj6lX6j7gCgN2%2Fp%2Bc6%2B7%2BFtwpVy88UrMuHau6IXrXgwJnQj5QaUDnKJTvyXSUbqd1TTuIIQDrRZkQaHTzBH%2B5OPvtEYUxlHq3hI%2B0jvpkXPI8FCXOySF614%2FRYiVH1&X-Amz-Signature=79e4b119726a90d4b7e7cc3feed6a2e553f1c8139a20c13588aad9d4d2fa1a76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGPSKIN2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHkl4um4%2FvtqNOQVVXnluxxIw1IRUvvFfhEUzU4T3D%2B2AiAl%2FmflMMUC5DSeE3G6yX34jOhQRysw3xafiUMEjQTZUCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM8peJ0K00SI9m63SdKtwD6AVG978SopO1vjgHgCyalAzW5pYSWbJmL7VmHJZDG%2FaAIaoCDySD6fqyI5%2FKK%2FPLF%2BCeGlTZMF8sqcs12Cdx%2BXAqW8m1xVZMgRwN%2FlBGaGlE7b4aM7WXK43d%2Fyyv%2BoyJqIKPKWZIiCQsPbv%2BBPFKQrgrcXTtTRmDydZTNGpVkLOJ%2FRLYj6uUVDrjLHk3XTNwz7rNV4D4utPPczvclncNJqwVttWwPIW9v5Mc6d93XVbe8PcuhSfaaVipqTpEiCgdr69e%2FHkr0a2mjRD6aOeyWcv6F8DPmBZ6RZhIr8YyPXvZ1ZhBbENLVuLDR0KwFrlU8i22ORI6%2F5pDOLlHkFCD0B%2F0GeviHBMiGgoiRbpPR2C6e9jkvhQGjIAUkZISa8aRzjrI0VE7YUZ8HalQJw1fWNbkzNoy6WpeUuYRmg2JaztzoPdEfY8MjPPWWsIc5Xmqi9jnuX62WkTIYki4FdlmESjhn3uYiIFSMV2L0WTxqwEAu2rivToaIqQnveoTUigQZC33WZAKKz%2B67Ea9iuoN7CryU9dNufWUf5T3UeR0EbjQYJL0lRzNxO%2Bo%2ByyRcA3HhALKBV75uZkHT3Io9AYu15bw4JPwAqt6BrjyDZM2EB6EA6dMVftJX2ws0PAw8s%2FMxAY6pgH67FUzNsRvg%2BGLwq%2BKp%2BZqi1IbCubiIspNxllEGgEO45K3vPC64hkV8Z2cYM5%2B7EjVBe1Gun3yK9m%2FWy0Ir%2F2w5xiBIWSQ%2FTyj6lX6j7gCgN2%2Fp%2Bc6%2B7%2BFtwpVy88UrMuHau6IXrXgwJnQj5QaUDnKJTvyXSUbqd1TTuIIQDrRZkQaHTzBH%2B5OPvtEYUxlHq3hI%2B0jvpkXPI8FCXOySF614%2FRYiVH1&X-Amz-Signature=6316805df7a27944b7b16fe67d9cfa1786b799a8f68fad38a37a9906140a09de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGPSKIN2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHkl4um4%2FvtqNOQVVXnluxxIw1IRUvvFfhEUzU4T3D%2B2AiAl%2FmflMMUC5DSeE3G6yX34jOhQRysw3xafiUMEjQTZUCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM8peJ0K00SI9m63SdKtwD6AVG978SopO1vjgHgCyalAzW5pYSWbJmL7VmHJZDG%2FaAIaoCDySD6fqyI5%2FKK%2FPLF%2BCeGlTZMF8sqcs12Cdx%2BXAqW8m1xVZMgRwN%2FlBGaGlE7b4aM7WXK43d%2Fyyv%2BoyJqIKPKWZIiCQsPbv%2BBPFKQrgrcXTtTRmDydZTNGpVkLOJ%2FRLYj6uUVDrjLHk3XTNwz7rNV4D4utPPczvclncNJqwVttWwPIW9v5Mc6d93XVbe8PcuhSfaaVipqTpEiCgdr69e%2FHkr0a2mjRD6aOeyWcv6F8DPmBZ6RZhIr8YyPXvZ1ZhBbENLVuLDR0KwFrlU8i22ORI6%2F5pDOLlHkFCD0B%2F0GeviHBMiGgoiRbpPR2C6e9jkvhQGjIAUkZISa8aRzjrI0VE7YUZ8HalQJw1fWNbkzNoy6WpeUuYRmg2JaztzoPdEfY8MjPPWWsIc5Xmqi9jnuX62WkTIYki4FdlmESjhn3uYiIFSMV2L0WTxqwEAu2rivToaIqQnveoTUigQZC33WZAKKz%2B67Ea9iuoN7CryU9dNufWUf5T3UeR0EbjQYJL0lRzNxO%2Bo%2ByyRcA3HhALKBV75uZkHT3Io9AYu15bw4JPwAqt6BrjyDZM2EB6EA6dMVftJX2ws0PAw8s%2FMxAY6pgH67FUzNsRvg%2BGLwq%2BKp%2BZqi1IbCubiIspNxllEGgEO45K3vPC64hkV8Z2cYM5%2B7EjVBe1Gun3yK9m%2FWy0Ir%2F2w5xiBIWSQ%2FTyj6lX6j7gCgN2%2Fp%2Bc6%2B7%2BFtwpVy88UrMuHau6IXrXgwJnQj5QaUDnKJTvyXSUbqd1TTuIIQDrRZkQaHTzBH%2B5OPvtEYUxlHq3hI%2B0jvpkXPI8FCXOySF614%2FRYiVH1&X-Amz-Signature=c1eaaec093b25fe2f1917ee2eaf8e64e3c5a0aabf6c2353a079dcfaa90202eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
