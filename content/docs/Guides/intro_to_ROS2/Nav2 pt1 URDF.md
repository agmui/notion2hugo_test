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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22F22TL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC19nBGBrwKoXjXgDwAqAsIuOclKmrycg83XfvwFE7r6AIhAIYZHXSp3aQPweDxNuxW73iyf21QoPif15RjM7zgKQXAKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrTIPqjq4poHPANT0q3AO6rDMVrTAxsTKjjyDah%2FGbncTzBJgRAdJhlauTAn1fJH5rDEL6E9WzIdm4qkiDM7Kp4GzBCGH%2FFjPXAC4vNU68N3hgocRNHK9FizWZcpPLWTfJpVfqN2CKzFiqEjeHKFwMwHnHtQ8EJVj8B0GsJskq74AEzC0FrYQczVpfLHRIv%2F5Vh77W5uO%2Bz2%2BwF0C9PRMaiNO7BPKFvj1Slze0J%2BrI93BAruXd%2Ba4aEb8OjuSk3US6sqRtuAQhAxS9nFdanZJpJbAmaJc4%2BQNxdo%2BO36TcK0XoG4XELPQmJjKgO5jNc28TJqBVrjgXSGC7xQIPqR8zvGm78RocMNG9aO75GsOpW8Is4kLWUuq7nfwfV57CRDC9miywN3B1YSaMd10FE7s%2F0pXrlNXLPdXtV5Bk%2FK1v9oZUoQqXQGt1igLd6fBs1lrvQ8JaeC2g3TdAEy5Be8GqcVZVrhVPR8TBIE2TYr4m07BjoYoSguzea4GHcx04cUfNRWSNHDAa7aMNI6MXmIzDrB4mAuXAMBcslEeGC5NkagN0VQb%2FEnpvKS%2FS9mA3QFjRSZq76lSORzIyn9fAuNkrxwWHIE0V9iTBgqgDD5idWXFp30d8iQE9mADZ1XA4u2lIwvifdozS0sixFTCc7tPEBjqkAROmI4btZ0b1afSfEk5owX3LtiSId6w1e9iavana4gf9m%2FPt%2FZKJvZICMnusxIT8HWyhSf9JBo%2B0kpdegL7Lc2FI14sdqjQOkhfR6cjOkz6AeWDNKCSCTDZW%2FhboH88mKhGb7Hfbxgey4E51gNmXBxGi0Mz1VevKDGwOGaCiUDqywOH3Y0mnfkgDvRzJeeazq9UrMfuokxYTIehNLTICwryU8zG1&X-Amz-Signature=7fc13464c33cd484f85142fc9c9061e909703222d04bd83a4cb4d6a1a6d4addc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22F22TL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC19nBGBrwKoXjXgDwAqAsIuOclKmrycg83XfvwFE7r6AIhAIYZHXSp3aQPweDxNuxW73iyf21QoPif15RjM7zgKQXAKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrTIPqjq4poHPANT0q3AO6rDMVrTAxsTKjjyDah%2FGbncTzBJgRAdJhlauTAn1fJH5rDEL6E9WzIdm4qkiDM7Kp4GzBCGH%2FFjPXAC4vNU68N3hgocRNHK9FizWZcpPLWTfJpVfqN2CKzFiqEjeHKFwMwHnHtQ8EJVj8B0GsJskq74AEzC0FrYQczVpfLHRIv%2F5Vh77W5uO%2Bz2%2BwF0C9PRMaiNO7BPKFvj1Slze0J%2BrI93BAruXd%2Ba4aEb8OjuSk3US6sqRtuAQhAxS9nFdanZJpJbAmaJc4%2BQNxdo%2BO36TcK0XoG4XELPQmJjKgO5jNc28TJqBVrjgXSGC7xQIPqR8zvGm78RocMNG9aO75GsOpW8Is4kLWUuq7nfwfV57CRDC9miywN3B1YSaMd10FE7s%2F0pXrlNXLPdXtV5Bk%2FK1v9oZUoQqXQGt1igLd6fBs1lrvQ8JaeC2g3TdAEy5Be8GqcVZVrhVPR8TBIE2TYr4m07BjoYoSguzea4GHcx04cUfNRWSNHDAa7aMNI6MXmIzDrB4mAuXAMBcslEeGC5NkagN0VQb%2FEnpvKS%2FS9mA3QFjRSZq76lSORzIyn9fAuNkrxwWHIE0V9iTBgqgDD5idWXFp30d8iQE9mADZ1XA4u2lIwvifdozS0sixFTCc7tPEBjqkAROmI4btZ0b1afSfEk5owX3LtiSId6w1e9iavana4gf9m%2FPt%2FZKJvZICMnusxIT8HWyhSf9JBo%2B0kpdegL7Lc2FI14sdqjQOkhfR6cjOkz6AeWDNKCSCTDZW%2FhboH88mKhGb7Hfbxgey4E51gNmXBxGi0Mz1VevKDGwOGaCiUDqywOH3Y0mnfkgDvRzJeeazq9UrMfuokxYTIehNLTICwryU8zG1&X-Amz-Signature=77ebab751968e75a16d2b3ca8c5dd3e44c3e86c8947f5c76ffa53a8923ca65a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22F22TL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC19nBGBrwKoXjXgDwAqAsIuOclKmrycg83XfvwFE7r6AIhAIYZHXSp3aQPweDxNuxW73iyf21QoPif15RjM7zgKQXAKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrTIPqjq4poHPANT0q3AO6rDMVrTAxsTKjjyDah%2FGbncTzBJgRAdJhlauTAn1fJH5rDEL6E9WzIdm4qkiDM7Kp4GzBCGH%2FFjPXAC4vNU68N3hgocRNHK9FizWZcpPLWTfJpVfqN2CKzFiqEjeHKFwMwHnHtQ8EJVj8B0GsJskq74AEzC0FrYQczVpfLHRIv%2F5Vh77W5uO%2Bz2%2BwF0C9PRMaiNO7BPKFvj1Slze0J%2BrI93BAruXd%2Ba4aEb8OjuSk3US6sqRtuAQhAxS9nFdanZJpJbAmaJc4%2BQNxdo%2BO36TcK0XoG4XELPQmJjKgO5jNc28TJqBVrjgXSGC7xQIPqR8zvGm78RocMNG9aO75GsOpW8Is4kLWUuq7nfwfV57CRDC9miywN3B1YSaMd10FE7s%2F0pXrlNXLPdXtV5Bk%2FK1v9oZUoQqXQGt1igLd6fBs1lrvQ8JaeC2g3TdAEy5Be8GqcVZVrhVPR8TBIE2TYr4m07BjoYoSguzea4GHcx04cUfNRWSNHDAa7aMNI6MXmIzDrB4mAuXAMBcslEeGC5NkagN0VQb%2FEnpvKS%2FS9mA3QFjRSZq76lSORzIyn9fAuNkrxwWHIE0V9iTBgqgDD5idWXFp30d8iQE9mADZ1XA4u2lIwvifdozS0sixFTCc7tPEBjqkAROmI4btZ0b1afSfEk5owX3LtiSId6w1e9iavana4gf9m%2FPt%2FZKJvZICMnusxIT8HWyhSf9JBo%2B0kpdegL7Lc2FI14sdqjQOkhfR6cjOkz6AeWDNKCSCTDZW%2FhboH88mKhGb7Hfbxgey4E51gNmXBxGi0Mz1VevKDGwOGaCiUDqywOH3Y0mnfkgDvRzJeeazq9UrMfuokxYTIehNLTICwryU8zG1&X-Amz-Signature=bab887d4a2532697c0a25a89842c56347fb25e9b2d887274c623df5a4b699ffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22F22TL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC19nBGBrwKoXjXgDwAqAsIuOclKmrycg83XfvwFE7r6AIhAIYZHXSp3aQPweDxNuxW73iyf21QoPif15RjM7zgKQXAKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrTIPqjq4poHPANT0q3AO6rDMVrTAxsTKjjyDah%2FGbncTzBJgRAdJhlauTAn1fJH5rDEL6E9WzIdm4qkiDM7Kp4GzBCGH%2FFjPXAC4vNU68N3hgocRNHK9FizWZcpPLWTfJpVfqN2CKzFiqEjeHKFwMwHnHtQ8EJVj8B0GsJskq74AEzC0FrYQczVpfLHRIv%2F5Vh77W5uO%2Bz2%2BwF0C9PRMaiNO7BPKFvj1Slze0J%2BrI93BAruXd%2Ba4aEb8OjuSk3US6sqRtuAQhAxS9nFdanZJpJbAmaJc4%2BQNxdo%2BO36TcK0XoG4XELPQmJjKgO5jNc28TJqBVrjgXSGC7xQIPqR8zvGm78RocMNG9aO75GsOpW8Is4kLWUuq7nfwfV57CRDC9miywN3B1YSaMd10FE7s%2F0pXrlNXLPdXtV5Bk%2FK1v9oZUoQqXQGt1igLd6fBs1lrvQ8JaeC2g3TdAEy5Be8GqcVZVrhVPR8TBIE2TYr4m07BjoYoSguzea4GHcx04cUfNRWSNHDAa7aMNI6MXmIzDrB4mAuXAMBcslEeGC5NkagN0VQb%2FEnpvKS%2FS9mA3QFjRSZq76lSORzIyn9fAuNkrxwWHIE0V9iTBgqgDD5idWXFp30d8iQE9mADZ1XA4u2lIwvifdozS0sixFTCc7tPEBjqkAROmI4btZ0b1afSfEk5owX3LtiSId6w1e9iavana4gf9m%2FPt%2FZKJvZICMnusxIT8HWyhSf9JBo%2B0kpdegL7Lc2FI14sdqjQOkhfR6cjOkz6AeWDNKCSCTDZW%2FhboH88mKhGb7Hfbxgey4E51gNmXBxGi0Mz1VevKDGwOGaCiUDqywOH3Y0mnfkgDvRzJeeazq9UrMfuokxYTIehNLTICwryU8zG1&X-Amz-Signature=a62f78af5543d479ace43018a3be3b8179f175fd29161add08994008b6601a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22F22TL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC19nBGBrwKoXjXgDwAqAsIuOclKmrycg83XfvwFE7r6AIhAIYZHXSp3aQPweDxNuxW73iyf21QoPif15RjM7zgKQXAKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrTIPqjq4poHPANT0q3AO6rDMVrTAxsTKjjyDah%2FGbncTzBJgRAdJhlauTAn1fJH5rDEL6E9WzIdm4qkiDM7Kp4GzBCGH%2FFjPXAC4vNU68N3hgocRNHK9FizWZcpPLWTfJpVfqN2CKzFiqEjeHKFwMwHnHtQ8EJVj8B0GsJskq74AEzC0FrYQczVpfLHRIv%2F5Vh77W5uO%2Bz2%2BwF0C9PRMaiNO7BPKFvj1Slze0J%2BrI93BAruXd%2Ba4aEb8OjuSk3US6sqRtuAQhAxS9nFdanZJpJbAmaJc4%2BQNxdo%2BO36TcK0XoG4XELPQmJjKgO5jNc28TJqBVrjgXSGC7xQIPqR8zvGm78RocMNG9aO75GsOpW8Is4kLWUuq7nfwfV57CRDC9miywN3B1YSaMd10FE7s%2F0pXrlNXLPdXtV5Bk%2FK1v9oZUoQqXQGt1igLd6fBs1lrvQ8JaeC2g3TdAEy5Be8GqcVZVrhVPR8TBIE2TYr4m07BjoYoSguzea4GHcx04cUfNRWSNHDAa7aMNI6MXmIzDrB4mAuXAMBcslEeGC5NkagN0VQb%2FEnpvKS%2FS9mA3QFjRSZq76lSORzIyn9fAuNkrxwWHIE0V9iTBgqgDD5idWXFp30d8iQE9mADZ1XA4u2lIwvifdozS0sixFTCc7tPEBjqkAROmI4btZ0b1afSfEk5owX3LtiSId6w1e9iavana4gf9m%2FPt%2FZKJvZICMnusxIT8HWyhSf9JBo%2B0kpdegL7Lc2FI14sdqjQOkhfR6cjOkz6AeWDNKCSCTDZW%2FhboH88mKhGb7Hfbxgey4E51gNmXBxGi0Mz1VevKDGwOGaCiUDqywOH3Y0mnfkgDvRzJeeazq9UrMfuokxYTIehNLTICwryU8zG1&X-Amz-Signature=b91aef7639f63d6f19402542d2bbc640070b9e87f05bada72c6ee9c368b587e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22F22TL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC19nBGBrwKoXjXgDwAqAsIuOclKmrycg83XfvwFE7r6AIhAIYZHXSp3aQPweDxNuxW73iyf21QoPif15RjM7zgKQXAKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrTIPqjq4poHPANT0q3AO6rDMVrTAxsTKjjyDah%2FGbncTzBJgRAdJhlauTAn1fJH5rDEL6E9WzIdm4qkiDM7Kp4GzBCGH%2FFjPXAC4vNU68N3hgocRNHK9FizWZcpPLWTfJpVfqN2CKzFiqEjeHKFwMwHnHtQ8EJVj8B0GsJskq74AEzC0FrYQczVpfLHRIv%2F5Vh77W5uO%2Bz2%2BwF0C9PRMaiNO7BPKFvj1Slze0J%2BrI93BAruXd%2Ba4aEb8OjuSk3US6sqRtuAQhAxS9nFdanZJpJbAmaJc4%2BQNxdo%2BO36TcK0XoG4XELPQmJjKgO5jNc28TJqBVrjgXSGC7xQIPqR8zvGm78RocMNG9aO75GsOpW8Is4kLWUuq7nfwfV57CRDC9miywN3B1YSaMd10FE7s%2F0pXrlNXLPdXtV5Bk%2FK1v9oZUoQqXQGt1igLd6fBs1lrvQ8JaeC2g3TdAEy5Be8GqcVZVrhVPR8TBIE2TYr4m07BjoYoSguzea4GHcx04cUfNRWSNHDAa7aMNI6MXmIzDrB4mAuXAMBcslEeGC5NkagN0VQb%2FEnpvKS%2FS9mA3QFjRSZq76lSORzIyn9fAuNkrxwWHIE0V9iTBgqgDD5idWXFp30d8iQE9mADZ1XA4u2lIwvifdozS0sixFTCc7tPEBjqkAROmI4btZ0b1afSfEk5owX3LtiSId6w1e9iavana4gf9m%2FPt%2FZKJvZICMnusxIT8HWyhSf9JBo%2B0kpdegL7Lc2FI14sdqjQOkhfR6cjOkz6AeWDNKCSCTDZW%2FhboH88mKhGb7Hfbxgey4E51gNmXBxGi0Mz1VevKDGwOGaCiUDqywOH3Y0mnfkgDvRzJeeazq9UrMfuokxYTIehNLTICwryU8zG1&X-Amz-Signature=bfe05b77d297a5c99d0850025bceb0935a03f29bf8523f7e14efc61905697c92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22F22TL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC19nBGBrwKoXjXgDwAqAsIuOclKmrycg83XfvwFE7r6AIhAIYZHXSp3aQPweDxNuxW73iyf21QoPif15RjM7zgKQXAKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrTIPqjq4poHPANT0q3AO6rDMVrTAxsTKjjyDah%2FGbncTzBJgRAdJhlauTAn1fJH5rDEL6E9WzIdm4qkiDM7Kp4GzBCGH%2FFjPXAC4vNU68N3hgocRNHK9FizWZcpPLWTfJpVfqN2CKzFiqEjeHKFwMwHnHtQ8EJVj8B0GsJskq74AEzC0FrYQczVpfLHRIv%2F5Vh77W5uO%2Bz2%2BwF0C9PRMaiNO7BPKFvj1Slze0J%2BrI93BAruXd%2Ba4aEb8OjuSk3US6sqRtuAQhAxS9nFdanZJpJbAmaJc4%2BQNxdo%2BO36TcK0XoG4XELPQmJjKgO5jNc28TJqBVrjgXSGC7xQIPqR8zvGm78RocMNG9aO75GsOpW8Is4kLWUuq7nfwfV57CRDC9miywN3B1YSaMd10FE7s%2F0pXrlNXLPdXtV5Bk%2FK1v9oZUoQqXQGt1igLd6fBs1lrvQ8JaeC2g3TdAEy5Be8GqcVZVrhVPR8TBIE2TYr4m07BjoYoSguzea4GHcx04cUfNRWSNHDAa7aMNI6MXmIzDrB4mAuXAMBcslEeGC5NkagN0VQb%2FEnpvKS%2FS9mA3QFjRSZq76lSORzIyn9fAuNkrxwWHIE0V9iTBgqgDD5idWXFp30d8iQE9mADZ1XA4u2lIwvifdozS0sixFTCc7tPEBjqkAROmI4btZ0b1afSfEk5owX3LtiSId6w1e9iavana4gf9m%2FPt%2FZKJvZICMnusxIT8HWyhSf9JBo%2B0kpdegL7Lc2FI14sdqjQOkhfR6cjOkz6AeWDNKCSCTDZW%2FhboH88mKhGb7Hfbxgey4E51gNmXBxGi0Mz1VevKDGwOGaCiUDqywOH3Y0mnfkgDvRzJeeazq9UrMfuokxYTIehNLTICwryU8zG1&X-Amz-Signature=b66d57332df76f17eedf04768e5f69c0dc1ae51b666f1a403094d6643fa73e33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22F22TL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC19nBGBrwKoXjXgDwAqAsIuOclKmrycg83XfvwFE7r6AIhAIYZHXSp3aQPweDxNuxW73iyf21QoPif15RjM7zgKQXAKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrTIPqjq4poHPANT0q3AO6rDMVrTAxsTKjjyDah%2FGbncTzBJgRAdJhlauTAn1fJH5rDEL6E9WzIdm4qkiDM7Kp4GzBCGH%2FFjPXAC4vNU68N3hgocRNHK9FizWZcpPLWTfJpVfqN2CKzFiqEjeHKFwMwHnHtQ8EJVj8B0GsJskq74AEzC0FrYQczVpfLHRIv%2F5Vh77W5uO%2Bz2%2BwF0C9PRMaiNO7BPKFvj1Slze0J%2BrI93BAruXd%2Ba4aEb8OjuSk3US6sqRtuAQhAxS9nFdanZJpJbAmaJc4%2BQNxdo%2BO36TcK0XoG4XELPQmJjKgO5jNc28TJqBVrjgXSGC7xQIPqR8zvGm78RocMNG9aO75GsOpW8Is4kLWUuq7nfwfV57CRDC9miywN3B1YSaMd10FE7s%2F0pXrlNXLPdXtV5Bk%2FK1v9oZUoQqXQGt1igLd6fBs1lrvQ8JaeC2g3TdAEy5Be8GqcVZVrhVPR8TBIE2TYr4m07BjoYoSguzea4GHcx04cUfNRWSNHDAa7aMNI6MXmIzDrB4mAuXAMBcslEeGC5NkagN0VQb%2FEnpvKS%2FS9mA3QFjRSZq76lSORzIyn9fAuNkrxwWHIE0V9iTBgqgDD5idWXFp30d8iQE9mADZ1XA4u2lIwvifdozS0sixFTCc7tPEBjqkAROmI4btZ0b1afSfEk5owX3LtiSId6w1e9iavana4gf9m%2FPt%2FZKJvZICMnusxIT8HWyhSf9JBo%2B0kpdegL7Lc2FI14sdqjQOkhfR6cjOkz6AeWDNKCSCTDZW%2FhboH88mKhGb7Hfbxgey4E51gNmXBxGi0Mz1VevKDGwOGaCiUDqywOH3Y0mnfkgDvRzJeeazq9UrMfuokxYTIehNLTICwryU8zG1&X-Amz-Signature=70573f25ac6006162e6edd4c80a9799a684227a2cf3f78845f54723d0a2fb6ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22F22TL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC19nBGBrwKoXjXgDwAqAsIuOclKmrycg83XfvwFE7r6AIhAIYZHXSp3aQPweDxNuxW73iyf21QoPif15RjM7zgKQXAKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrTIPqjq4poHPANT0q3AO6rDMVrTAxsTKjjyDah%2FGbncTzBJgRAdJhlauTAn1fJH5rDEL6E9WzIdm4qkiDM7Kp4GzBCGH%2FFjPXAC4vNU68N3hgocRNHK9FizWZcpPLWTfJpVfqN2CKzFiqEjeHKFwMwHnHtQ8EJVj8B0GsJskq74AEzC0FrYQczVpfLHRIv%2F5Vh77W5uO%2Bz2%2BwF0C9PRMaiNO7BPKFvj1Slze0J%2BrI93BAruXd%2Ba4aEb8OjuSk3US6sqRtuAQhAxS9nFdanZJpJbAmaJc4%2BQNxdo%2BO36TcK0XoG4XELPQmJjKgO5jNc28TJqBVrjgXSGC7xQIPqR8zvGm78RocMNG9aO75GsOpW8Is4kLWUuq7nfwfV57CRDC9miywN3B1YSaMd10FE7s%2F0pXrlNXLPdXtV5Bk%2FK1v9oZUoQqXQGt1igLd6fBs1lrvQ8JaeC2g3TdAEy5Be8GqcVZVrhVPR8TBIE2TYr4m07BjoYoSguzea4GHcx04cUfNRWSNHDAa7aMNI6MXmIzDrB4mAuXAMBcslEeGC5NkagN0VQb%2FEnpvKS%2FS9mA3QFjRSZq76lSORzIyn9fAuNkrxwWHIE0V9iTBgqgDD5idWXFp30d8iQE9mADZ1XA4u2lIwvifdozS0sixFTCc7tPEBjqkAROmI4btZ0b1afSfEk5owX3LtiSId6w1e9iavana4gf9m%2FPt%2FZKJvZICMnusxIT8HWyhSf9JBo%2B0kpdegL7Lc2FI14sdqjQOkhfR6cjOkz6AeWDNKCSCTDZW%2FhboH88mKhGb7Hfbxgey4E51gNmXBxGi0Mz1VevKDGwOGaCiUDqywOH3Y0mnfkgDvRzJeeazq9UrMfuokxYTIehNLTICwryU8zG1&X-Amz-Signature=206fd47c5a0ba90b7ead05380150014a45e3782132cd72695e71fc80ba3b6eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22F22TL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC19nBGBrwKoXjXgDwAqAsIuOclKmrycg83XfvwFE7r6AIhAIYZHXSp3aQPweDxNuxW73iyf21QoPif15RjM7zgKQXAKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrTIPqjq4poHPANT0q3AO6rDMVrTAxsTKjjyDah%2FGbncTzBJgRAdJhlauTAn1fJH5rDEL6E9WzIdm4qkiDM7Kp4GzBCGH%2FFjPXAC4vNU68N3hgocRNHK9FizWZcpPLWTfJpVfqN2CKzFiqEjeHKFwMwHnHtQ8EJVj8B0GsJskq74AEzC0FrYQczVpfLHRIv%2F5Vh77W5uO%2Bz2%2BwF0C9PRMaiNO7BPKFvj1Slze0J%2BrI93BAruXd%2Ba4aEb8OjuSk3US6sqRtuAQhAxS9nFdanZJpJbAmaJc4%2BQNxdo%2BO36TcK0XoG4XELPQmJjKgO5jNc28TJqBVrjgXSGC7xQIPqR8zvGm78RocMNG9aO75GsOpW8Is4kLWUuq7nfwfV57CRDC9miywN3B1YSaMd10FE7s%2F0pXrlNXLPdXtV5Bk%2FK1v9oZUoQqXQGt1igLd6fBs1lrvQ8JaeC2g3TdAEy5Be8GqcVZVrhVPR8TBIE2TYr4m07BjoYoSguzea4GHcx04cUfNRWSNHDAa7aMNI6MXmIzDrB4mAuXAMBcslEeGC5NkagN0VQb%2FEnpvKS%2FS9mA3QFjRSZq76lSORzIyn9fAuNkrxwWHIE0V9iTBgqgDD5idWXFp30d8iQE9mADZ1XA4u2lIwvifdozS0sixFTCc7tPEBjqkAROmI4btZ0b1afSfEk5owX3LtiSId6w1e9iavana4gf9m%2FPt%2FZKJvZICMnusxIT8HWyhSf9JBo%2B0kpdegL7Lc2FI14sdqjQOkhfR6cjOkz6AeWDNKCSCTDZW%2FhboH88mKhGb7Hfbxgey4E51gNmXBxGi0Mz1VevKDGwOGaCiUDqywOH3Y0mnfkgDvRzJeeazq9UrMfuokxYTIehNLTICwryU8zG1&X-Amz-Signature=11fd649540c20c5205c7edf769de1e3e3206597cbf134107eaaa20d7752fb8fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4QHQPOP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDYK%2BDoCgmrOzYVgFD2XKKe%2FEAYbkCvbIsGq85mNdmdfwIgK%2BuOn5AtLeS34B2XVlY3xpr0Oa7WlMlDTeGNwXEHoV0qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBALvzjYyCieYkZY7yrcA1NoIv%2BMDHE0R%2BZ%2FupaZMgmTApKEH9xC8oDCKYJLJdpVIvtIuypbii9%2Frl4cg44A1oVqnk3sMwijAqg%2Fm3HN4qdI3q%2FNDwmrg8AHWdqG4rUYanHASsXMuu86Ak33u9%2Fe51hJ%2B%2B22Gs4gLCtzZ7yOP%2F35sgdvgjzU%2BhbFx4RwT133dKEKcYH8Qxz9PwiHV%2FyjFPpc3bx4HsSc1VV9bYT1ih2Ptmris%2BBTm5TdCCOCN8AOxJdDAGVIUiR2wXZQXbFf19AWeUiojivl8Hqgc72TUlJz3zMczfWcOecyxW6luDCJo3lKW6Eq%2FwRxnRS35iu0Y0vo6C%2Bq1VlFP9ErR%2B2kkhJb9JgdZ6hMcpwnGFrHgKdE2Lkd61nfEwbG5HchMaauXViRy7tmvS3xNWmounFl27nLoPstailVHJ4%2Bgw2DODjhaYz6SARnCkDdFJ%2BK7L35GHFCKirJjDOhNXAo2mbbk8%2FEQXfGIsiziVqaBH6GVeSok3H2bLEjigFRlatzN0PSiXv%2BH4mafBLRr2mTmOyHK%2BrVuXgG26YCjMfPS%2BwXfFzKCJxh5doKzny4PluXe6%2FmexEUQCAEi0yKXOnW5ZxQ9xRKUs8uuEz1ZPkNdQzDrJRpltmuAZIh3vb1dD4CMMTu08QGOqUB0D5%2FPz4hp5nLXjZ9gcVU9lq4t4%2Bw2WHOS4peFHoELT6Prka8mofoaFzY%2BbWJFRio2c0sCuWzDpTG64Umbdwz9krhCLI0uwF91p%2B2QE0JvPMIMQ2lZ3lzFqhsLaaCCwshFyaaynn%2Fu0xaRQ6AI%2FVIM%2FxJzwaVHKSSWmFvVMrFCezik41rXs21x46KKHhEpkHC2xYXNTURq%2B1O5Y7DU7nYsEzsnEom&X-Amz-Signature=eda60d18efbda28021cd8d42b489f6e93b286870b28cd5964538b3bd339914a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP74ZUPC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCICgsIXi4yF9h%2BeUzrcEtM3pNnv8ZIxUMvZxQGwXa9uYhAiBaCLGiPvTv%2FAWzweuG%2Fc8d4lXu%2BLIsuvuIgr2orll4NSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd9PS3PvJjt3Dg98SKtwDm%2BhEJlE%2FPoFPI%2FYxf4lD3DfauqU89kMeQwoGgHY4sK3kNOlELBUavvL5A%2FT0xlNzaF%2B1cLILzJAwzapMthvpOdqHl5mIqIVvgbQq0zmaa4fn5WzpXuGpKwLalHj6iQXNOUMCAiQRx1hHaCyqqdfq6h0hX95dAAenvbB%2F6vZHMQuKB7Zf%2BAkBweyKE35szCc3Kqq9JzjOJFgrWFM4fqEegNSLdvFj5k7fVTfK8I9HlGLzWjk8VfG8vT5yJara9bt1l5pH4doBtTFEC2suwoG4o9JfnA4FIg%2B73HbjYzfZWCyGCmgqE8Z11ljkcg7F6LpJSXcz6hvwHM6MLD9sb03YLp6DElqBMX8FKjC8q6yP%2BvjfpUdeeogkpsF2r2KoQiH2xPto6LvBxsNdvoJ1eNzgbSm%2FIPesQMrtAOV9CbM36evvzwOUfx2TZbGHIU1dG%2BY6sAe9Yt0%2FszSLgm%2Fq8sgAha4EA1dgXDJm%2FFUQBA56W8q7pKrSL1z0YHeVFBdCykhNA5xFQA1iVk%2FAr5VXLiyJdwc%2BNkPG5NDMQWDEqsyWKqMYJzzLz%2FpKtQWzjhv1Ss5Nbj8RqHWR2u7xukUUcbvVsBYRkJ789DQwNDFvSXmXmL%2BHlyHGBNfr%2BLiy6UIwh%2B7TxAY6pgGor4Kxjuy%2FDlZ12idCZhl69b3ADQbbA9bZWAs6iYfUlNa6XsCR%2Bf0hO%2B7xnG9GnvmGiEslM5zDY14%2Bc8wLy54A0ETh2ZJRGuQD56TirCbGdsOXpY4BqcdcpmpWC3UmIXpugRkISqRHUUAwAGADL3gSLXC3VS%2BOCA16P8qViMNyrnRndyPo75rsjzUodgZ49FYTsnAAb3VmINJHtD%2BA9XwXhT%2Bdhevv&X-Amz-Signature=3eddcf36c2df27178cae40977a7606a6aae2bdbfbbf4fa5129edec1b68cabbcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP57FX5V%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCFTsqDwYdvIUTVjhHie9elRFej3N7pYCEtTC41TJjfFgIgGnjKv5ANxSepBG4eHzDSi%2BUa1Glw5IJf0mEgV3f4MtsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjM2rLaXdX4fzRWDCrcA%2BYOWLzCJJYBP5UgFJrknNLFDhdMMLFJqGLX3M6l1MEIRSbg5bOJ1JNbhBdmEUQIyB%2BWfLL0Nq6%2Bg%2FF10x5mLMotGwdVvx8%2Fa%2BJTQF1PZe3NVbZOfcMNSxhPm9NschnrUp%2BH6GPlCN9Vuu0JaagwOMXZPihbBqw2ZHE36VOFKFUFvXDRPqMBidb4B3Bi4drvA%2F60M%2FMDgL2uEyi%2F3KYibLl8ev3QqkSkk9JXOuCwKUkacmts7mKwVofU4wevjGjRG03VvQzbUQdcgNXciBtNEgCMClchD2YzYylOx4rAkQL8qrbAOCWao8v1HSviPROu0B7YkRiesNGQxfnM%2Frez3R9XBVceupeac8tU0D5a%2FjDTkccAF0FdXE4jdYXaPM4bur9UR5OS2tLj5cEbP60eMqsMsnfCL0A6gwEm59h78%2B%2BGAe4zl6dRZ4N0xH09PbLOZeBODr6fg4HfJX0fmeaJFfT4aVSZZaL7C15qO3zCjxQ2b%2FH6SLu8B9V4CjObZuAqqd6KLvKuo1x8RyPYePWEpDsimUPAA6Rde4%2BYlkwRmHBLYLQTCefcE7mnja7wp%2BA5%2Bqy7FwX9sCKywmE2g2t6Y6lED15QmevdKVZf12ODrVPEqJlE1DKmpYSf82CwMMXu08QGOqUB172e37nrMZWNYQmqj3VVbNQ%2BpzL38mOgB7ghYv0yddLAlaVOZ7BqarjRBfGv%2Fw7ATdI3ST1Dm6%2B%2Fd1mTiAIVfpC%2FUQYr0M6%2F5kZ65s787cnbtIcI9v3%2BdGxd0rV4njOryxvS1V7wvPTMkqWPh8C892yOn0cxwjRinMEF8aYxY%2Bz%2FpCK7tFmLP08NH3kfgJI%2FzYNkXT30eVPyeJT8P6VnJf9swXPe&X-Amz-Signature=657f38ee7eee2ee2af0cb8ef0497e8ce1e55d9290a236459159b061935efd403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22F22TL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC19nBGBrwKoXjXgDwAqAsIuOclKmrycg83XfvwFE7r6AIhAIYZHXSp3aQPweDxNuxW73iyf21QoPif15RjM7zgKQXAKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrTIPqjq4poHPANT0q3AO6rDMVrTAxsTKjjyDah%2FGbncTzBJgRAdJhlauTAn1fJH5rDEL6E9WzIdm4qkiDM7Kp4GzBCGH%2FFjPXAC4vNU68N3hgocRNHK9FizWZcpPLWTfJpVfqN2CKzFiqEjeHKFwMwHnHtQ8EJVj8B0GsJskq74AEzC0FrYQczVpfLHRIv%2F5Vh77W5uO%2Bz2%2BwF0C9PRMaiNO7BPKFvj1Slze0J%2BrI93BAruXd%2Ba4aEb8OjuSk3US6sqRtuAQhAxS9nFdanZJpJbAmaJc4%2BQNxdo%2BO36TcK0XoG4XELPQmJjKgO5jNc28TJqBVrjgXSGC7xQIPqR8zvGm78RocMNG9aO75GsOpW8Is4kLWUuq7nfwfV57CRDC9miywN3B1YSaMd10FE7s%2F0pXrlNXLPdXtV5Bk%2FK1v9oZUoQqXQGt1igLd6fBs1lrvQ8JaeC2g3TdAEy5Be8GqcVZVrhVPR8TBIE2TYr4m07BjoYoSguzea4GHcx04cUfNRWSNHDAa7aMNI6MXmIzDrB4mAuXAMBcslEeGC5NkagN0VQb%2FEnpvKS%2FS9mA3QFjRSZq76lSORzIyn9fAuNkrxwWHIE0V9iTBgqgDD5idWXFp30d8iQE9mADZ1XA4u2lIwvifdozS0sixFTCc7tPEBjqkAROmI4btZ0b1afSfEk5owX3LtiSId6w1e9iavana4gf9m%2FPt%2FZKJvZICMnusxIT8HWyhSf9JBo%2B0kpdegL7Lc2FI14sdqjQOkhfR6cjOkz6AeWDNKCSCTDZW%2FhboH88mKhGb7Hfbxgey4E51gNmXBxGi0Mz1VevKDGwOGaCiUDqywOH3Y0mnfkgDvRzJeeazq9UrMfuokxYTIehNLTICwryU8zG1&X-Amz-Signature=86cee92fef28fd2ea822b1dc46b165ab890fdebe6d419994e6b5154d42b5565d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TOIGLEI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDHuwyVNmlBwIUO0pCWIA5FBp5WK9I0sySLEaxbggMUbAIhAIZ%2BWj7henjd%2FTQgVRUXeIbJappCPuOWURjlWMIf3hpLKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyB2sTy1gHk%2FBrjnrAq3APN3KjuOsoWwP0%2FzLQJAojVFRmCCgPAR8WyyM3tYJaqV0DZ8JvwwThNjY1OuN4k%2Bt3TMHYe%2BkKLD7eZyYRtA7DztHf96Gb5tW43GmidpGk51FxkvJ90%2F5pbC4zk5UwLJXrI6j%2B0hun77AWOfNb3fJso8CuZUQMt7ya69J21Pd%2BrKrCYiUzrEs7cL%2BBcRGQIyOO7GMMWhQW5cNgx66jf6DKqILPwIgY%2BIeIIrPlK7pYBrIw2xrPlTx7yjCAWWBMbOm%2B9rcmDHKK7j%2BclwOLxh5PhejSgo0A41zZ6QO6SeB4a7YI1vN0yGkwkgKNPvv5CbjVE6K%2FGBIs%2Fyu4waeIGy%2FSxas5OyhF2w%2B%2B1fdnmmibDMOBfhswJzNzsJHzFVt0xQE1RXUH3kNu1BhTIdXcmHd%2B55saZwfXH5f9GXkFXOB6bYWWlP%2BeZnTN1XCehLiVlB4cPJSfbLE16vXuLnivTkehth1X6ElxFqZeve%2B5oq9tdraCBsWakXkBrPp89POqyXshkkMndPa9tgMHkhZzCp%2FF%2BUXulThSTEXBn9Fij1jnVPvPYpwHOoyFe9WeprVmH22uiKWAqyryZ4ogcpVqB8XHGS928CCBF%2FBMrggA6MvsudksmG%2Bp2SlDbwR1HBzDQ7dPEBjqkASXBSh%2FK0EUnMeOv2QhZrSdCUd2TOkU%2BDq%2BxJ4xVrMmk%2B6hyshYweA%2BcNs8ZlIxOqGqsDGLC%2Bld5DAV7BXg%2BJZSB5i1PxbmNKyj8iWzuZO2BkN5iPtzl3PVTYTYjmbBMzoJhaEWHZIDKkg269Gpsx67hiupG5mqnYms%2BhIENatfKyWQf1oXneVUP4Q%2FgjPjFCQPxhJUjnufbRsJr7bunHVdUTVCT&X-Amz-Signature=5f9b6a482a22ac961d17145f831c98fa091f8dbb0f0e94e8fa52c7c56cdd18ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22F22TL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC19nBGBrwKoXjXgDwAqAsIuOclKmrycg83XfvwFE7r6AIhAIYZHXSp3aQPweDxNuxW73iyf21QoPif15RjM7zgKQXAKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrTIPqjq4poHPANT0q3AO6rDMVrTAxsTKjjyDah%2FGbncTzBJgRAdJhlauTAn1fJH5rDEL6E9WzIdm4qkiDM7Kp4GzBCGH%2FFjPXAC4vNU68N3hgocRNHK9FizWZcpPLWTfJpVfqN2CKzFiqEjeHKFwMwHnHtQ8EJVj8B0GsJskq74AEzC0FrYQczVpfLHRIv%2F5Vh77W5uO%2Bz2%2BwF0C9PRMaiNO7BPKFvj1Slze0J%2BrI93BAruXd%2Ba4aEb8OjuSk3US6sqRtuAQhAxS9nFdanZJpJbAmaJc4%2BQNxdo%2BO36TcK0XoG4XELPQmJjKgO5jNc28TJqBVrjgXSGC7xQIPqR8zvGm78RocMNG9aO75GsOpW8Is4kLWUuq7nfwfV57CRDC9miywN3B1YSaMd10FE7s%2F0pXrlNXLPdXtV5Bk%2FK1v9oZUoQqXQGt1igLd6fBs1lrvQ8JaeC2g3TdAEy5Be8GqcVZVrhVPR8TBIE2TYr4m07BjoYoSguzea4GHcx04cUfNRWSNHDAa7aMNI6MXmIzDrB4mAuXAMBcslEeGC5NkagN0VQb%2FEnpvKS%2FS9mA3QFjRSZq76lSORzIyn9fAuNkrxwWHIE0V9iTBgqgDD5idWXFp30d8iQE9mADZ1XA4u2lIwvifdozS0sixFTCc7tPEBjqkAROmI4btZ0b1afSfEk5owX3LtiSId6w1e9iavana4gf9m%2FPt%2FZKJvZICMnusxIT8HWyhSf9JBo%2B0kpdegL7Lc2FI14sdqjQOkhfR6cjOkz6AeWDNKCSCTDZW%2FhboH88mKhGb7Hfbxgey4E51gNmXBxGi0Mz1VevKDGwOGaCiUDqywOH3Y0mnfkgDvRzJeeazq9UrMfuokxYTIehNLTICwryU8zG1&X-Amz-Signature=f09875aa0670c306d98b12980130624d393380cebea272e1b6a3f211d7dd9af6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LUQXSLZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD0fxJx8eoJiITvve%2FmppaTL7rf0OZzUMGs3fEgHnpHMAIgVTRuZ5fW%2Bd0MU7YeazHF8xGuckEEzgj7RdIP%2F45oUmUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2FrMTphoRORX8jfCrcA3eu7Y1dEDQoaZ%2FpuZy7g8qv91tCOp8tVM%2F4PWL8k2kwMgtUcQ6oVnQCDavS93PYK7e361kF%2Bau5TSO9Rd2yvGamBdHL3Dtc7il%2FO2TcvD%2B4P7seLbEnx98kXmNuvtyy%2F0EgEQtO%2FMkjY7vUWns68sko7axLa8l%2BaCwLYkm56uubcXx2oV1%2BfuS17BGIFzoau%2B9hTBiciSitseClXPYu2XFXvb5vrKz2gjywaqVj4jjk2WlLF2D8Ku5YrbBulROTKM3hnxWxf3E8GeR7G%2FHNRZywlfJbmyi1%2BZgbByz26KrOkSjRMQu78bSeBBqZp%2BURdKb0%2FuHKIuIwH74qumOb2m3UPAVpJZ3FMsFgjoLcWjaBGHl7hGYBX4CdePTkJp5Fz2gEUm%2FSpdAj48PUgRleXLSQOilwZkiYw%2FrZVs9KHMUWcXJFrtlW7JFTgatfBZTlKWsJbKk0u72a7z%2FhiNisjSE0EvaEe6Q%2FoJLkZY6%2FA%2F%2FLqWroSNkmzJdqHG5mqTmFhEz%2FjmEvPqXoM4UXsJBaeVfJLbxlK6GG3YjZFQo%2BwSP9AqrKnpxCEWqeWDmpoj2INx5H6UfuCf9VdkysmLeEmqCwyxj7v6GNFYmwXvyEYRMFF5EKbL1kj3mra3ZWMOXt08QGOqUB0gJlv0ntkvIQbfMBNTYLolDGv0H3pD3oe0CFUOpWaO1FYeBKkzLLtLg2kcuITxg19tCerOiyngTPqXbHCScWcYlK7Hr4HNpdvgPGGv3V8oL1dGRJvxm%2Fx8p5AheVTSEzFvtv0%2B%2Ba4yYG4DQp%2FWWOgFyVaa4xtYsPPIHq0yDvBcqRAJwPedDQrijJHdjI0OCS444nvQVsoxqQslgf1JoFZNAghfJO&X-Amz-Signature=6232efed756c9515d7053d673d97f3c255d159fb5716f086ed29e836c27ae606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22F22TL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC19nBGBrwKoXjXgDwAqAsIuOclKmrycg83XfvwFE7r6AIhAIYZHXSp3aQPweDxNuxW73iyf21QoPif15RjM7zgKQXAKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrTIPqjq4poHPANT0q3AO6rDMVrTAxsTKjjyDah%2FGbncTzBJgRAdJhlauTAn1fJH5rDEL6E9WzIdm4qkiDM7Kp4GzBCGH%2FFjPXAC4vNU68N3hgocRNHK9FizWZcpPLWTfJpVfqN2CKzFiqEjeHKFwMwHnHtQ8EJVj8B0GsJskq74AEzC0FrYQczVpfLHRIv%2F5Vh77W5uO%2Bz2%2BwF0C9PRMaiNO7BPKFvj1Slze0J%2BrI93BAruXd%2Ba4aEb8OjuSk3US6sqRtuAQhAxS9nFdanZJpJbAmaJc4%2BQNxdo%2BO36TcK0XoG4XELPQmJjKgO5jNc28TJqBVrjgXSGC7xQIPqR8zvGm78RocMNG9aO75GsOpW8Is4kLWUuq7nfwfV57CRDC9miywN3B1YSaMd10FE7s%2F0pXrlNXLPdXtV5Bk%2FK1v9oZUoQqXQGt1igLd6fBs1lrvQ8JaeC2g3TdAEy5Be8GqcVZVrhVPR8TBIE2TYr4m07BjoYoSguzea4GHcx04cUfNRWSNHDAa7aMNI6MXmIzDrB4mAuXAMBcslEeGC5NkagN0VQb%2FEnpvKS%2FS9mA3QFjRSZq76lSORzIyn9fAuNkrxwWHIE0V9iTBgqgDD5idWXFp30d8iQE9mADZ1XA4u2lIwvifdozS0sixFTCc7tPEBjqkAROmI4btZ0b1afSfEk5owX3LtiSId6w1e9iavana4gf9m%2FPt%2FZKJvZICMnusxIT8HWyhSf9JBo%2B0kpdegL7Lc2FI14sdqjQOkhfR6cjOkz6AeWDNKCSCTDZW%2FhboH88mKhGb7Hfbxgey4E51gNmXBxGi0Mz1VevKDGwOGaCiUDqywOH3Y0mnfkgDvRzJeeazq9UrMfuokxYTIehNLTICwryU8zG1&X-Amz-Signature=ca1e6897fa11d2448fb809b64b44e9949099cf435cb51ce51d8317ec854d166f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665BCNJBG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGlmuDwbFZKjzNEAA6gEj29s0MGBvXD03xLJx2t9VJGjAiAKCc6EqbY3lCFmcK%2FBXNUCT11YBLS4GfQpaaf%2B7nkH8yqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOUcEG4pN9NTNhqMxKtwDZcztB2jXHs%2F%2BIwjb6iyC8Wx26EFZV7RRwSwPwA3b3wPNJtTUYsEc8uL4NRChfCO68CggTrDNyvvuCJbgTHhOy7u3OoGeoDEbrFIjbp3syBNTbj7ppKJU4pVmEdgKXa8uVuMit0k11dqzUr4otEnbvBG4vCicZ3EslS0Qb858UY9rxt2eMQfhSJTEfhwX9hpMTPfVn0zfLZNAiQ1h8LHCkG9XA7kp%2F2mjkWnTyROrgmMpw1kmrbgsiqihFfbPiDzfBfjLAYQOASmlmlwNLxNBuFhtpnnNznXPwSzdBFDq%2FplndhQgAB9QHLwhrDpwxO1RaroIfGQGN4LiV6t1f%2F8XvXUM4qYhWUcHp68nOJj7ovcUKBkugp%2BPb8MwLproQ7vucelLm5WF3uMP1H4WeoiJI8iItFg7gww%2FBHSHHwnKgRwOClEELV2H1bjnhxVf2o1Qw0b9ZbIyKHsIGxffYtj2FoqDwX3YrPRBRy1DDatVcZJsGJkn3VWfEzPpeLL2znwBh0l7tELIV%2FCiPF9uoP7C%2BPofIfjikMcKWqSseLdUVJlGRmpLuVK3hNVGtMwnLmyOM11470fiUXJ8lFqvwNkMlxXikAqHiFWAT%2F%2FNne1pCbJyfgYvsnw6mdwfZwUwyu3TxAY6pgFI7w3sOurWqoRcjIi4etaXKPOV0wvtoHUSS3sbqaE2DQLoY4tPUObOruEhAlshMP83bLqKvcbgmd5DfQij741Mp02CfhcVlc6u2MYPllgCtJlsKXbV10vCMmuIuOqwLHyfeXAwVJIkcwTV5SuUyo2BpktFeH61LHzk63Ttta5%2B5xPgTIv8bXzkv%2F6AJtUpe%2FH6czF%2BCKbAOLpGR%2BjZlDAkzkMK3zdl&X-Amz-Signature=1f992775eaac87a67010ad4bcb5cb28a1062ac165955a6bcf73928e334cb3915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22F22TL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC19nBGBrwKoXjXgDwAqAsIuOclKmrycg83XfvwFE7r6AIhAIYZHXSp3aQPweDxNuxW73iyf21QoPif15RjM7zgKQXAKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrTIPqjq4poHPANT0q3AO6rDMVrTAxsTKjjyDah%2FGbncTzBJgRAdJhlauTAn1fJH5rDEL6E9WzIdm4qkiDM7Kp4GzBCGH%2FFjPXAC4vNU68N3hgocRNHK9FizWZcpPLWTfJpVfqN2CKzFiqEjeHKFwMwHnHtQ8EJVj8B0GsJskq74AEzC0FrYQczVpfLHRIv%2F5Vh77W5uO%2Bz2%2BwF0C9PRMaiNO7BPKFvj1Slze0J%2BrI93BAruXd%2Ba4aEb8OjuSk3US6sqRtuAQhAxS9nFdanZJpJbAmaJc4%2BQNxdo%2BO36TcK0XoG4XELPQmJjKgO5jNc28TJqBVrjgXSGC7xQIPqR8zvGm78RocMNG9aO75GsOpW8Is4kLWUuq7nfwfV57CRDC9miywN3B1YSaMd10FE7s%2F0pXrlNXLPdXtV5Bk%2FK1v9oZUoQqXQGt1igLd6fBs1lrvQ8JaeC2g3TdAEy5Be8GqcVZVrhVPR8TBIE2TYr4m07BjoYoSguzea4GHcx04cUfNRWSNHDAa7aMNI6MXmIzDrB4mAuXAMBcslEeGC5NkagN0VQb%2FEnpvKS%2FS9mA3QFjRSZq76lSORzIyn9fAuNkrxwWHIE0V9iTBgqgDD5idWXFp30d8iQE9mADZ1XA4u2lIwvifdozS0sixFTCc7tPEBjqkAROmI4btZ0b1afSfEk5owX3LtiSId6w1e9iavana4gf9m%2FPt%2FZKJvZICMnusxIT8HWyhSf9JBo%2B0kpdegL7Lc2FI14sdqjQOkhfR6cjOkz6AeWDNKCSCTDZW%2FhboH88mKhGb7Hfbxgey4E51gNmXBxGi0Mz1VevKDGwOGaCiUDqywOH3Y0mnfkgDvRzJeeazq9UrMfuokxYTIehNLTICwryU8zG1&X-Amz-Signature=e8b8e2539258c40fcb795b93caaa957028265f31045f8da64f28df7716f641e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNNYKXR3%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCzNAbpnv78QjV%2BtzESMGZqA1lTEUgmNyIPR%2BQjxS9piAIgYI9C8jNrMshpNlbEYzGAeYzV8XZFKMGZXyiU%2BaSdKd0qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJL3xp%2B0iXN1%2F2amwCrcA6FINHpV%2FpY%2F0iH5fndyIPFLk3e3w5cX%2F2xoFfv4hYAehGPaIPWYWIFDGHZDKcc6hrvD36itjdGhtKJ%2Bl8zy5L0CJOeizhuGmEn1QuC7sRpQYqnFZNTsgohl2JrX2hNFu0vJ8AaHciC%2BBBLpPcZ%2FM6q6bylvvJJyCKUYHR2MWUMK194t9eurG7kSO8ECIU4ptA6Y62bGmQPE%2FYaXBVln7Lpiiali01qRInMKrEGYN8rangUarp2AZv19%2FvZbbM3KRGHlGCTROOjpWB5tiqEoYUc0%2FaEofG0EEicL6F4qZRYwF6w0uPgHpe5jBFdvb%2FgrpT%2FfjsKRw9%2BcqRmRZX8jOkdhyvIj2o13YoVE%2BiomP6dPzB7l%2FrFjM19U9veaRaqMBYYimsEzSJZEk6JLHth%2FWBNMXwG3pB2meOY673ZpgVa3XN6zzJ100nlgkxTHMZ2IWh5FuoI2VXWM4WyOrwTPuSaFjpieSWAUCXMEA0I%2Fg66SoyU3UukJNCWMZCH%2B1KgYS0xLxZsnAftmbDXAu6lbgwTfmM%2FqpH%2FA7JlL4mwYrOGsdKHXK1FHziYE0PF1kwia21%2BYZbOJPHXL4KUOVy2qNlk0CL1TXNDERdiOb%2BP7DIjgEMR5SgjBoLMVT3l1MO7t08QGOqUBDCg2v5XQJLsGtR1tcAj4gNjkAP2gOvMJfOa1zCxLwFthQHla5yF%2BGnrfJmADWOLZhHhRRdxvwVCwGJjLgaOEIBczSi3DIuIsweLehQ4yEfvhot5GSrrrqKVtHpLV8cT58nT%2FY9ZQkzKAEx89MVfeV%2FVRqo%2B3NlAKWDYGohDmZWW4eBypVij8OgIxQB9de%2F%2BbICbtKuYKOhImpKt30AodMMFjDCuZ&X-Amz-Signature=e47e537194a139d92cd1eb1b04feecb8155433569ab065c3e517b0377fa413f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVY6O4UX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCWXLfhA949Gw38SJZNL%2BP7OQ5ViZsLSBsDh5KkvM5yQQIhANWCW9PWFTriS5ZWwuygw6Q9%2BrIq443p4LZ3s%2FwStn4bKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2B8rRMgwiQgcPOE7gq3ANH9x5QZ%2FVk0BPnrv62wHkX%2Brc7XUMipZWzI98TZhPaRwj%2BFDYcbAq73qPtEQ6gY3%2F%2Fd2Y11z%2BES0PyLdGgp%2BSg0cZX61mYJ%2BK1x%2Fp3ESADZ0RZxUzdILhxumfmvnRkEw6Miajhl5nzI40Z0zCUTTdrHrlJIrcFkX2vzf5A56Q1JQzoE17okAmVSpLcsL3ozYrHgPjOsCdkExUBekL2GyY0TYdP00ZWsTT%2Fj7AaaL5c8rTbizDTqw9W%2FgnjsxcV9aY5kcyPq6FFngvojRScaUdXRLi2Y4lBqGCUQCD%2FqeO4V3xnafJkBSfY1CPjQG6BLh%2Btnqpy6lJpWAl3sDiJpEmm12PCFqIRwdoTSUkwyqST6YHtzywgIppN3h2GhO9ngTQgr7qpk3bfaHMFVr5%2BUJFod0ceoa4S2kVVXzqIleuYIeQNDtbUvMkyvIvUqwK5PEG2iBOcvBfbSfTL1z%2FCpwe%2Fha0Fm1T%2B2uG4PvSH01rgGllDAXvbA03vrsG6qMPGYvEQAHf75Uc8Z%2F6UoGsOVpcsfQ1DPGeO%2B5Co7aUGAiAumpJk%2FHMAtKkEnlyqbafs0qhdSH4U5jktagEWAb9F5TvHTwHhPe%2FlhKHnXqGNfVkhuA1voodNhAt99kDmczDk7dPEBjqkAUWIqJesV063bYe3M9ieo5pKiFfAyqQc%2BNi2VtqOoL%2F35sZ9RocqQSbgPvbheGa9saPsr5gImirGbo4VvcJl8OnLublQie1PduA0OYjCHm22mxtStbxSe1JdUO%2BiU9BUsQ2sPAmPNUtzqCXIcyO2nWUyzMCI5P2jX3GcW4RGFNjQffXrIqNNzkz80c1d60UaPX0IRBLa5%2FM3%2BfHt8WDua1Qb0LIJ&X-Amz-Signature=58c01ae377ea62fbc246ce49e91b005e7cc901c649e7e5bcff9df4a6a1bb42c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTL427R2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHaYPxtyAJV39ALERwJohut5Ilgv1c4M6eCh9z0%2BS4hnAiEAko7vWmrBmESGI1eoxaKIpOZKXlfNxwwdJDz7ouLT5WgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtoJWgxIYCW%2FGDKSircA34VG7fYieWTgU%2BQAPI2qsG9VJBasJDidukOxnMW%2FoUZOwP6845S0sCXgQzH6M8WxJgFiZ0vsvGg7NnTX%2FrVfCqbjttfzRpBmUa6TuxrRkuYBU7SKJ8uN%2FkYldU4tnkfeCDVJ4uA9%2FOee5TwpVWO2j3KKv1Lomc8G4wnP4MlemO5uGNmrCS2iaGfm6Iu0EBFUdD4VIagR%2FygEZZgdn0mRiNQMBVEopc0uSH1mxqPO2bHojw%2BpYmpQyfgiU1vRm0W18EGbLUCXBt69srjKiJ6AtaTUUyNPEJSCjo%2FDZQapjvobqvz60ZrYDmKWhOyLSro%2FQe0vCCCcugzwGMf1K5JMqsrE0elRDyItbAKippIL69vc9E%2FZjBITW1PW7WV8VXDN%2FpURHk8j7L3V5iLe7IWB9b9LoNAaAN%2BRLX9QzetyY0BpccdVnNc1i%2F1oIVqXynq7lUUXtTCqTFYShC69wU9thAz8JcHE0MjIdXoLMhIctXAz9YNwuqkKmDJcWBot6U%2BPfHIfkM76kVeuLuLnUKYMbvMYV8d%2FPzdzea%2FNBuoVRLZdbOAiqpYFBApRsCYT3AkRniEM8woGImxwY5b1l7ahw61IpSOFdO8aaFa%2BBLw%2BqAHdqeI1YR9cUJyV%2BMQMMrt08QGOqUBROUBKgp0WfOsmQcg0IUKzYfp%2BIe4xExRTHxjtec0trOCLJSsqxvj37WHzscftrUcOqRQoJ8R8%2Fhh7N6kUBn3w5%2B3qCUihBRxnepwqbs0SWyMyUdIKoeGST%2FhbA7kw3E3Y5qyicHXg5qe1nITxO0v6XUz5HK2WyYCfo1eW189vCI%2BlUsZF6PkEXR%2FVuMIdWLuOfyv7kBzfcYaTvd6UXjG8Pl1%2FK8g&X-Amz-Signature=298b7b490f8c164bce2cba56ca87d5a0b54a00f05f0fa89c52b2d2d961066d6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZFDWVP4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIFC7N6B5zVLIPo1AW0dh6RphTQGwgH7cwvwN9WBGxYpmAiAqAmwzTT2vVhPfsHnYK7Rq5AqGLp1UgWiYA%2FGAGmu2HCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BjrLl13o7vS%2FWLM%2FKtwDTbLTJHltpQ4r4qvAcUPmjMNPVLbd5nfNl9QGTnigq74wV4TJDpJF7wHWsbXM2nVYVzpL%2BDIr9P4IRlsae3mBfkC%2BTOsp7yvvpWbZac2U4WarEix1Donu99f4Qqcf1JyjVAhR3GZ%2FE04J1b05%2BFo89o92BynhWeA5nBGDMGlN2a4Tgwwy%2FfvfzIRDsHHDgnz2vzcjDcbPQXgwhZ%2FilKEIf3wpB4OkKlnPtzvXkdqPa%2BX%2FK3%2FUY5vYoHTjkyveDxwDV%2F9QHkHrLjKiBld6%2BQHPkE0BLTJEDKph4AQ3RgC2xfzgy6HEu3mUYL1m9aqNW9%2BawbsVBVzheAs7PjWXDpTeJesES%2Fp2YtD31XNebQqMIIwqvm3vFiTZzX1VyoqlVEjPMY3ggc0yO%2FSA6NSbOJCLp%2F2PISrEjpyzK9OZDRhk8%2FKVNhU8%2F%2B7%2FZDWqSlmePdSoJ1rDEZ9JoJ1G4FU8GqSKtU%2Fe9gpkXRsAVQVw%2BFBcqJekErTs0Rh%2F0uSdcxH8NwghBcgA1chWl5UilWv4ZLuzYG%2FBvzyTBTfmwtpOwJEDq%2BAJei3dwHrmi40l9XUbHafHM3Co236tgeCzRlRcxJXRljUwGl24bYjjCTErqARlsPtX5rRsnP9RCVyGPCEwhO7TxAY6pgHKvrDGKbKZMChG2ynnvvSGVt%2BFnh24uXXpkFe9tsjP%2F2kNzKM%2BwBsZtQ7MdfvdecPeertiRH4yuhMQ8FHXaHDy6EYkbEetUsh2MJkTDVfyJ0dHRa8zCnWCxOqP1nna%2FsQtLyI50FLHs5iQ25EhR6zIeetPZTb3nu6gGKoCRpHquw4rS%2BUnSBPu6I%2FzrDx1HCemC2IaGJQrihqL%2F9H0CGgCaAQ45CXz&X-Amz-Signature=f9351ed7b79624c223777162c31d92d10349bc7600fa994a2cd6bf529bee5ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZEFTZYO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCp5Z0uOPN3AM%2BgkKbOI6dc%2BAAvmsQq9uBwGFf93dmEPgIgX1ggooJBkZtb%2BWIDQOArWr30jliiWk4o4IA06%2FyBJY0qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaA6GkU4QbC0ZJCxCrcA6rCcNCzCfJFWqOAvZCyjk2VLXvdexcRj9oV067mR9LFJsSyRCbNzHCBI4%2F6ObVzaNqHg0VyWofr2lmvdvJ7%2FL0wiANOgOZozkYYZmQxkLTsVxmqCIKgqA20ac9HoCH%2BMo%2BFkcff%2F883uGTS7O%2F%2F7%2FlWlVNEF4lfaZbnNvqGD8UtZuOqi5P3jCOxiVHv4EiKIKo2V6Hc3Om7bKwFl1K%2BD%2BTnnVqYWXFyobdph1%2BSwG97yF4Lvzs3vnG3kEkc%2Fx35XHh%2FhDoa26clnUkd8HnjwO797N0Reppvhjn3g%2BcfIKnkSO%2FXsTQ4DprxLC1j48H%2FfUyKfSbfz80F0XQxoSejlvyn2u6lqtDcR9239tf3zppLOffSQ3gI0Blm%2Bm8fN%2B0cfzsf0lozS21CzH%2BjxvEPZ7GqCY72mB%2FRu9JaCAA1DoaC9Op%2Bsu6KdkH3OeRnFCDidfZJDlRGYDs%2B3IHDddwAF578Aw6BKWSj5VgcDZWPz9onthE3wjSM477JAACCFPiTc3qhf%2BQGWYsR4Vk19qYLb5kjkbWF0o293lSVIxkKKiR9duXrgc5%2FChTejcXoQ80pYKrEP99jkYm3oW6HtIN2%2BDC9SPGFr8sEbosECeL5IQkyQ1L7%2BVg55YRt8T%2FIMJvu08QGOqUBErwujwxbFucThJ5ufket5D3ZqpqcMe8EyPDPAdRI%2Bk7PIYafV2nzjysOFJQNVkseXC7TQCZwANnXJb%2FAlcfcIMJ%2FnwADThVmQjC1RrCktLHR1CLrfzEK8EMovitJhS1ma8GuRFpLRaf2e%2Bxi2MWPRdxbJCET8sSsahiCDUTbJNdbnvcvY7MDGx%2BIUM%2BLVoRPc4AjHK7i8m%2BRlFftJ9XzTyL1Albh&X-Amz-Signature=8a210acb340a7e832a7dc955905c2a3504140b376791ff10161c71b8bb326715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22F22TL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC19nBGBrwKoXjXgDwAqAsIuOclKmrycg83XfvwFE7r6AIhAIYZHXSp3aQPweDxNuxW73iyf21QoPif15RjM7zgKQXAKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrTIPqjq4poHPANT0q3AO6rDMVrTAxsTKjjyDah%2FGbncTzBJgRAdJhlauTAn1fJH5rDEL6E9WzIdm4qkiDM7Kp4GzBCGH%2FFjPXAC4vNU68N3hgocRNHK9FizWZcpPLWTfJpVfqN2CKzFiqEjeHKFwMwHnHtQ8EJVj8B0GsJskq74AEzC0FrYQczVpfLHRIv%2F5Vh77W5uO%2Bz2%2BwF0C9PRMaiNO7BPKFvj1Slze0J%2BrI93BAruXd%2Ba4aEb8OjuSk3US6sqRtuAQhAxS9nFdanZJpJbAmaJc4%2BQNxdo%2BO36TcK0XoG4XELPQmJjKgO5jNc28TJqBVrjgXSGC7xQIPqR8zvGm78RocMNG9aO75GsOpW8Is4kLWUuq7nfwfV57CRDC9miywN3B1YSaMd10FE7s%2F0pXrlNXLPdXtV5Bk%2FK1v9oZUoQqXQGt1igLd6fBs1lrvQ8JaeC2g3TdAEy5Be8GqcVZVrhVPR8TBIE2TYr4m07BjoYoSguzea4GHcx04cUfNRWSNHDAa7aMNI6MXmIzDrB4mAuXAMBcslEeGC5NkagN0VQb%2FEnpvKS%2FS9mA3QFjRSZq76lSORzIyn9fAuNkrxwWHIE0V9iTBgqgDD5idWXFp30d8iQE9mADZ1XA4u2lIwvifdozS0sixFTCc7tPEBjqkAROmI4btZ0b1afSfEk5owX3LtiSId6w1e9iavana4gf9m%2FPt%2FZKJvZICMnusxIT8HWyhSf9JBo%2B0kpdegL7Lc2FI14sdqjQOkhfR6cjOkz6AeWDNKCSCTDZW%2FhboH88mKhGb7Hfbxgey4E51gNmXBxGi0Mz1VevKDGwOGaCiUDqywOH3Y0mnfkgDvRzJeeazq9UrMfuokxYTIehNLTICwryU8zG1&X-Amz-Signature=b76cd7c370e3510f20458b62154882f58c40c9b10f468a9b816db1e278388872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22F22TL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC19nBGBrwKoXjXgDwAqAsIuOclKmrycg83XfvwFE7r6AIhAIYZHXSp3aQPweDxNuxW73iyf21QoPif15RjM7zgKQXAKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrTIPqjq4poHPANT0q3AO6rDMVrTAxsTKjjyDah%2FGbncTzBJgRAdJhlauTAn1fJH5rDEL6E9WzIdm4qkiDM7Kp4GzBCGH%2FFjPXAC4vNU68N3hgocRNHK9FizWZcpPLWTfJpVfqN2CKzFiqEjeHKFwMwHnHtQ8EJVj8B0GsJskq74AEzC0FrYQczVpfLHRIv%2F5Vh77W5uO%2Bz2%2BwF0C9PRMaiNO7BPKFvj1Slze0J%2BrI93BAruXd%2Ba4aEb8OjuSk3US6sqRtuAQhAxS9nFdanZJpJbAmaJc4%2BQNxdo%2BO36TcK0XoG4XELPQmJjKgO5jNc28TJqBVrjgXSGC7xQIPqR8zvGm78RocMNG9aO75GsOpW8Is4kLWUuq7nfwfV57CRDC9miywN3B1YSaMd10FE7s%2F0pXrlNXLPdXtV5Bk%2FK1v9oZUoQqXQGt1igLd6fBs1lrvQ8JaeC2g3TdAEy5Be8GqcVZVrhVPR8TBIE2TYr4m07BjoYoSguzea4GHcx04cUfNRWSNHDAa7aMNI6MXmIzDrB4mAuXAMBcslEeGC5NkagN0VQb%2FEnpvKS%2FS9mA3QFjRSZq76lSORzIyn9fAuNkrxwWHIE0V9iTBgqgDD5idWXFp30d8iQE9mADZ1XA4u2lIwvifdozS0sixFTCc7tPEBjqkAROmI4btZ0b1afSfEk5owX3LtiSId6w1e9iavana4gf9m%2FPt%2FZKJvZICMnusxIT8HWyhSf9JBo%2B0kpdegL7Lc2FI14sdqjQOkhfR6cjOkz6AeWDNKCSCTDZW%2FhboH88mKhGb7Hfbxgey4E51gNmXBxGi0Mz1VevKDGwOGaCiUDqywOH3Y0mnfkgDvRzJeeazq9UrMfuokxYTIehNLTICwryU8zG1&X-Amz-Signature=ea4be64aee4025eb9c1afed45877f11ab87b6e99e0ef19261af4db9e1bac842b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNM76L2B%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDUGZ3W05zPuvU2RY%2B9URxFUIgc1bCyM%2BO5ZY02DR1OfgIhAJ5EzmsfyPXEg7KLcm6IG4lZAKN1iQEJQYi1s2ZbmTpdKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxquHhfSNaEdy1x5vkq3AML%2BYlIlxw6gzXPeZBuQNgSF3fulwqbJZ314P1ZKqCkXJnrmahGXMlkmdSF0%2BIN6oGnd8nME%2F%2BoVjP7j%2B%2FOZ0EeMt%2BAcSeXUZ64LL4gPA%2FzCWQRu7tTkjRYunJSOvFG9Ch4k22MDttDebq%2FQS4EFMtayYWJ122ZeIYpVMN7gQGzVrXrjnWoRiXGoNnPzDMdIJkk%2Biy2tUjJcSbgSp5y5%2Fxqozu49gmUO1gEeeZUvOy8bJ%2F3mnBMQjfOJgAdlN2ezi3K0OQNX4e%2BfTVb7danBgCuR1y20u43FCxbUOD%2Fvtn7T721QJOlv2nXeRMA0IP%2Bdy5sppiTvgT6fLJmuS1OdFWtbYNtO3cXT47sSvWzKD5cHQ99R%2FAcI5kRxIQMlvcv5ghLtS75OMKPVibwtE1evgJNMCcvAsedjrK8V0zJ5tyCff%2FPlBZl%2BoVDN9Q4cALzaLBYngEXCsYE3HegTkE5r5L6vNbsh4lecXtSZT6IdD4SbtcX37KK1gY81sbIDuMI2cV30LUejndB2zxXE7C7EvUXEjcJOlGE6Kuw8jkppr%2FXp4NgjAiBbbdiEmLvFgTJsgnKrxNXHWsqPt0bsqXCzKxnngV%2BEegR6kBiWNABsXxaXGJMilJnjdHhOwD%2FUTCL7tPEBjqkAbBiDwtrNtmqVfhmN%2FgiuykZt2qWlqCw9%2FieGlhUw7UpeqFbkmLJA02otHJ0oZ3HB9y0LARq1nsYPTBwLXVKTvOZGxTVAeTUTCiJtFE9kAzpUTIeOysb7AlfydDdKSPkm%2FKrGSIDTnx9%2FkvENAjAL69%2FWRw39NMXIqpnCh6GZHdZlDM851HfkDKf842kfJz3ejUaGt7cD4fl7cZLB%2Fw%2BJqFnQ2te&X-Amz-Signature=dcb2399450ea02bdb8f510852268ce125fea0c2e1e5bffb87e9742d19b60178d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNM76L2B%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDUGZ3W05zPuvU2RY%2B9URxFUIgc1bCyM%2BO5ZY02DR1OfgIhAJ5EzmsfyPXEg7KLcm6IG4lZAKN1iQEJQYi1s2ZbmTpdKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxquHhfSNaEdy1x5vkq3AML%2BYlIlxw6gzXPeZBuQNgSF3fulwqbJZ314P1ZKqCkXJnrmahGXMlkmdSF0%2BIN6oGnd8nME%2F%2BoVjP7j%2B%2FOZ0EeMt%2BAcSeXUZ64LL4gPA%2FzCWQRu7tTkjRYunJSOvFG9Ch4k22MDttDebq%2FQS4EFMtayYWJ122ZeIYpVMN7gQGzVrXrjnWoRiXGoNnPzDMdIJkk%2Biy2tUjJcSbgSp5y5%2Fxqozu49gmUO1gEeeZUvOy8bJ%2F3mnBMQjfOJgAdlN2ezi3K0OQNX4e%2BfTVb7danBgCuR1y20u43FCxbUOD%2Fvtn7T721QJOlv2nXeRMA0IP%2Bdy5sppiTvgT6fLJmuS1OdFWtbYNtO3cXT47sSvWzKD5cHQ99R%2FAcI5kRxIQMlvcv5ghLtS75OMKPVibwtE1evgJNMCcvAsedjrK8V0zJ5tyCff%2FPlBZl%2BoVDN9Q4cALzaLBYngEXCsYE3HegTkE5r5L6vNbsh4lecXtSZT6IdD4SbtcX37KK1gY81sbIDuMI2cV30LUejndB2zxXE7C7EvUXEjcJOlGE6Kuw8jkppr%2FXp4NgjAiBbbdiEmLvFgTJsgnKrxNXHWsqPt0bsqXCzKxnngV%2BEegR6kBiWNABsXxaXGJMilJnjdHhOwD%2FUTCL7tPEBjqkAbBiDwtrNtmqVfhmN%2FgiuykZt2qWlqCw9%2FieGlhUw7UpeqFbkmLJA02otHJ0oZ3HB9y0LARq1nsYPTBwLXVKTvOZGxTVAeTUTCiJtFE9kAzpUTIeOysb7AlfydDdKSPkm%2FKrGSIDTnx9%2FkvENAjAL69%2FWRw39NMXIqpnCh6GZHdZlDM851HfkDKf842kfJz3ejUaGt7cD4fl7cZLB%2Fw%2BJqFnQ2te&X-Amz-Signature=375a8ce60da82183994d8a26f9669d2f8f2db48d4ba7ec3dae69a09e2dd29eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNM76L2B%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDUGZ3W05zPuvU2RY%2B9URxFUIgc1bCyM%2BO5ZY02DR1OfgIhAJ5EzmsfyPXEg7KLcm6IG4lZAKN1iQEJQYi1s2ZbmTpdKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxquHhfSNaEdy1x5vkq3AML%2BYlIlxw6gzXPeZBuQNgSF3fulwqbJZ314P1ZKqCkXJnrmahGXMlkmdSF0%2BIN6oGnd8nME%2F%2BoVjP7j%2B%2FOZ0EeMt%2BAcSeXUZ64LL4gPA%2FzCWQRu7tTkjRYunJSOvFG9Ch4k22MDttDebq%2FQS4EFMtayYWJ122ZeIYpVMN7gQGzVrXrjnWoRiXGoNnPzDMdIJkk%2Biy2tUjJcSbgSp5y5%2Fxqozu49gmUO1gEeeZUvOy8bJ%2F3mnBMQjfOJgAdlN2ezi3K0OQNX4e%2BfTVb7danBgCuR1y20u43FCxbUOD%2Fvtn7T721QJOlv2nXeRMA0IP%2Bdy5sppiTvgT6fLJmuS1OdFWtbYNtO3cXT47sSvWzKD5cHQ99R%2FAcI5kRxIQMlvcv5ghLtS75OMKPVibwtE1evgJNMCcvAsedjrK8V0zJ5tyCff%2FPlBZl%2BoVDN9Q4cALzaLBYngEXCsYE3HegTkE5r5L6vNbsh4lecXtSZT6IdD4SbtcX37KK1gY81sbIDuMI2cV30LUejndB2zxXE7C7EvUXEjcJOlGE6Kuw8jkppr%2FXp4NgjAiBbbdiEmLvFgTJsgnKrxNXHWsqPt0bsqXCzKxnngV%2BEegR6kBiWNABsXxaXGJMilJnjdHhOwD%2FUTCL7tPEBjqkAbBiDwtrNtmqVfhmN%2FgiuykZt2qWlqCw9%2FieGlhUw7UpeqFbkmLJA02otHJ0oZ3HB9y0LARq1nsYPTBwLXVKTvOZGxTVAeTUTCiJtFE9kAzpUTIeOysb7AlfydDdKSPkm%2FKrGSIDTnx9%2FkvENAjAL69%2FWRw39NMXIqpnCh6GZHdZlDM851HfkDKf842kfJz3ejUaGt7cD4fl7cZLB%2Fw%2BJqFnQ2te&X-Amz-Signature=f4d070b641d24b1a729af95f1357f71e77ede9cdce3594e8c2fd7f5259cca016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNM76L2B%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDUGZ3W05zPuvU2RY%2B9URxFUIgc1bCyM%2BO5ZY02DR1OfgIhAJ5EzmsfyPXEg7KLcm6IG4lZAKN1iQEJQYi1s2ZbmTpdKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxquHhfSNaEdy1x5vkq3AML%2BYlIlxw6gzXPeZBuQNgSF3fulwqbJZ314P1ZKqCkXJnrmahGXMlkmdSF0%2BIN6oGnd8nME%2F%2BoVjP7j%2B%2FOZ0EeMt%2BAcSeXUZ64LL4gPA%2FzCWQRu7tTkjRYunJSOvFG9Ch4k22MDttDebq%2FQS4EFMtayYWJ122ZeIYpVMN7gQGzVrXrjnWoRiXGoNnPzDMdIJkk%2Biy2tUjJcSbgSp5y5%2Fxqozu49gmUO1gEeeZUvOy8bJ%2F3mnBMQjfOJgAdlN2ezi3K0OQNX4e%2BfTVb7danBgCuR1y20u43FCxbUOD%2Fvtn7T721QJOlv2nXeRMA0IP%2Bdy5sppiTvgT6fLJmuS1OdFWtbYNtO3cXT47sSvWzKD5cHQ99R%2FAcI5kRxIQMlvcv5ghLtS75OMKPVibwtE1evgJNMCcvAsedjrK8V0zJ5tyCff%2FPlBZl%2BoVDN9Q4cALzaLBYngEXCsYE3HegTkE5r5L6vNbsh4lecXtSZT6IdD4SbtcX37KK1gY81sbIDuMI2cV30LUejndB2zxXE7C7EvUXEjcJOlGE6Kuw8jkppr%2FXp4NgjAiBbbdiEmLvFgTJsgnKrxNXHWsqPt0bsqXCzKxnngV%2BEegR6kBiWNABsXxaXGJMilJnjdHhOwD%2FUTCL7tPEBjqkAbBiDwtrNtmqVfhmN%2FgiuykZt2qWlqCw9%2FieGlhUw7UpeqFbkmLJA02otHJ0oZ3HB9y0LARq1nsYPTBwLXVKTvOZGxTVAeTUTCiJtFE9kAzpUTIeOysb7AlfydDdKSPkm%2FKrGSIDTnx9%2FkvENAjAL69%2FWRw39NMXIqpnCh6GZHdZlDM851HfkDKf842kfJz3ejUaGt7cD4fl7cZLB%2Fw%2BJqFnQ2te&X-Amz-Signature=1ed2dec0846ac6aa00a530c5ad1f4580492eff42eebf5f7457c05f72f2c72519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNM76L2B%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDUGZ3W05zPuvU2RY%2B9URxFUIgc1bCyM%2BO5ZY02DR1OfgIhAJ5EzmsfyPXEg7KLcm6IG4lZAKN1iQEJQYi1s2ZbmTpdKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxquHhfSNaEdy1x5vkq3AML%2BYlIlxw6gzXPeZBuQNgSF3fulwqbJZ314P1ZKqCkXJnrmahGXMlkmdSF0%2BIN6oGnd8nME%2F%2BoVjP7j%2B%2FOZ0EeMt%2BAcSeXUZ64LL4gPA%2FzCWQRu7tTkjRYunJSOvFG9Ch4k22MDttDebq%2FQS4EFMtayYWJ122ZeIYpVMN7gQGzVrXrjnWoRiXGoNnPzDMdIJkk%2Biy2tUjJcSbgSp5y5%2Fxqozu49gmUO1gEeeZUvOy8bJ%2F3mnBMQjfOJgAdlN2ezi3K0OQNX4e%2BfTVb7danBgCuR1y20u43FCxbUOD%2Fvtn7T721QJOlv2nXeRMA0IP%2Bdy5sppiTvgT6fLJmuS1OdFWtbYNtO3cXT47sSvWzKD5cHQ99R%2FAcI5kRxIQMlvcv5ghLtS75OMKPVibwtE1evgJNMCcvAsedjrK8V0zJ5tyCff%2FPlBZl%2BoVDN9Q4cALzaLBYngEXCsYE3HegTkE5r5L6vNbsh4lecXtSZT6IdD4SbtcX37KK1gY81sbIDuMI2cV30LUejndB2zxXE7C7EvUXEjcJOlGE6Kuw8jkppr%2FXp4NgjAiBbbdiEmLvFgTJsgnKrxNXHWsqPt0bsqXCzKxnngV%2BEegR6kBiWNABsXxaXGJMilJnjdHhOwD%2FUTCL7tPEBjqkAbBiDwtrNtmqVfhmN%2FgiuykZt2qWlqCw9%2FieGlhUw7UpeqFbkmLJA02otHJ0oZ3HB9y0LARq1nsYPTBwLXVKTvOZGxTVAeTUTCiJtFE9kAzpUTIeOysb7AlfydDdKSPkm%2FKrGSIDTnx9%2FkvENAjAL69%2FWRw39NMXIqpnCh6GZHdZlDM851HfkDKf842kfJz3ejUaGt7cD4fl7cZLB%2Fw%2BJqFnQ2te&X-Amz-Signature=f9cfabd2d6aa923d1ae6feee42a26cf7ebadb3554b0a30adff57a47b9ddc2702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNM76L2B%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDUGZ3W05zPuvU2RY%2B9URxFUIgc1bCyM%2BO5ZY02DR1OfgIhAJ5EzmsfyPXEg7KLcm6IG4lZAKN1iQEJQYi1s2ZbmTpdKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxquHhfSNaEdy1x5vkq3AML%2BYlIlxw6gzXPeZBuQNgSF3fulwqbJZ314P1ZKqCkXJnrmahGXMlkmdSF0%2BIN6oGnd8nME%2F%2BoVjP7j%2B%2FOZ0EeMt%2BAcSeXUZ64LL4gPA%2FzCWQRu7tTkjRYunJSOvFG9Ch4k22MDttDebq%2FQS4EFMtayYWJ122ZeIYpVMN7gQGzVrXrjnWoRiXGoNnPzDMdIJkk%2Biy2tUjJcSbgSp5y5%2Fxqozu49gmUO1gEeeZUvOy8bJ%2F3mnBMQjfOJgAdlN2ezi3K0OQNX4e%2BfTVb7danBgCuR1y20u43FCxbUOD%2Fvtn7T721QJOlv2nXeRMA0IP%2Bdy5sppiTvgT6fLJmuS1OdFWtbYNtO3cXT47sSvWzKD5cHQ99R%2FAcI5kRxIQMlvcv5ghLtS75OMKPVibwtE1evgJNMCcvAsedjrK8V0zJ5tyCff%2FPlBZl%2BoVDN9Q4cALzaLBYngEXCsYE3HegTkE5r5L6vNbsh4lecXtSZT6IdD4SbtcX37KK1gY81sbIDuMI2cV30LUejndB2zxXE7C7EvUXEjcJOlGE6Kuw8jkppr%2FXp4NgjAiBbbdiEmLvFgTJsgnKrxNXHWsqPt0bsqXCzKxnngV%2BEegR6kBiWNABsXxaXGJMilJnjdHhOwD%2FUTCL7tPEBjqkAbBiDwtrNtmqVfhmN%2FgiuykZt2qWlqCw9%2FieGlhUw7UpeqFbkmLJA02otHJ0oZ3HB9y0LARq1nsYPTBwLXVKTvOZGxTVAeTUTCiJtFE9kAzpUTIeOysb7AlfydDdKSPkm%2FKrGSIDTnx9%2FkvENAjAL69%2FWRw39NMXIqpnCh6GZHdZlDM851HfkDKf842kfJz3ejUaGt7cD4fl7cZLB%2Fw%2BJqFnQ2te&X-Amz-Signature=e902cec4974c9a07b9db435e4a4f4172d8c0c063fffd8645c2d2ea7a3baa7363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNM76L2B%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDUGZ3W05zPuvU2RY%2B9URxFUIgc1bCyM%2BO5ZY02DR1OfgIhAJ5EzmsfyPXEg7KLcm6IG4lZAKN1iQEJQYi1s2ZbmTpdKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxquHhfSNaEdy1x5vkq3AML%2BYlIlxw6gzXPeZBuQNgSF3fulwqbJZ314P1ZKqCkXJnrmahGXMlkmdSF0%2BIN6oGnd8nME%2F%2BoVjP7j%2B%2FOZ0EeMt%2BAcSeXUZ64LL4gPA%2FzCWQRu7tTkjRYunJSOvFG9Ch4k22MDttDebq%2FQS4EFMtayYWJ122ZeIYpVMN7gQGzVrXrjnWoRiXGoNnPzDMdIJkk%2Biy2tUjJcSbgSp5y5%2Fxqozu49gmUO1gEeeZUvOy8bJ%2F3mnBMQjfOJgAdlN2ezi3K0OQNX4e%2BfTVb7danBgCuR1y20u43FCxbUOD%2Fvtn7T721QJOlv2nXeRMA0IP%2Bdy5sppiTvgT6fLJmuS1OdFWtbYNtO3cXT47sSvWzKD5cHQ99R%2FAcI5kRxIQMlvcv5ghLtS75OMKPVibwtE1evgJNMCcvAsedjrK8V0zJ5tyCff%2FPlBZl%2BoVDN9Q4cALzaLBYngEXCsYE3HegTkE5r5L6vNbsh4lecXtSZT6IdD4SbtcX37KK1gY81sbIDuMI2cV30LUejndB2zxXE7C7EvUXEjcJOlGE6Kuw8jkppr%2FXp4NgjAiBbbdiEmLvFgTJsgnKrxNXHWsqPt0bsqXCzKxnngV%2BEegR6kBiWNABsXxaXGJMilJnjdHhOwD%2FUTCL7tPEBjqkAbBiDwtrNtmqVfhmN%2FgiuykZt2qWlqCw9%2FieGlhUw7UpeqFbkmLJA02otHJ0oZ3HB9y0LARq1nsYPTBwLXVKTvOZGxTVAeTUTCiJtFE9kAzpUTIeOysb7AlfydDdKSPkm%2FKrGSIDTnx9%2FkvENAjAL69%2FWRw39NMXIqpnCh6GZHdZlDM851HfkDKf842kfJz3ejUaGt7cD4fl7cZLB%2Fw%2BJqFnQ2te&X-Amz-Signature=fa75c2d8c0119918e2d3ca119e691114b076798d49627cb4e3a71adf76a996c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNM76L2B%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDUGZ3W05zPuvU2RY%2B9URxFUIgc1bCyM%2BO5ZY02DR1OfgIhAJ5EzmsfyPXEg7KLcm6IG4lZAKN1iQEJQYi1s2ZbmTpdKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxquHhfSNaEdy1x5vkq3AML%2BYlIlxw6gzXPeZBuQNgSF3fulwqbJZ314P1ZKqCkXJnrmahGXMlkmdSF0%2BIN6oGnd8nME%2F%2BoVjP7j%2B%2FOZ0EeMt%2BAcSeXUZ64LL4gPA%2FzCWQRu7tTkjRYunJSOvFG9Ch4k22MDttDebq%2FQS4EFMtayYWJ122ZeIYpVMN7gQGzVrXrjnWoRiXGoNnPzDMdIJkk%2Biy2tUjJcSbgSp5y5%2Fxqozu49gmUO1gEeeZUvOy8bJ%2F3mnBMQjfOJgAdlN2ezi3K0OQNX4e%2BfTVb7danBgCuR1y20u43FCxbUOD%2Fvtn7T721QJOlv2nXeRMA0IP%2Bdy5sppiTvgT6fLJmuS1OdFWtbYNtO3cXT47sSvWzKD5cHQ99R%2FAcI5kRxIQMlvcv5ghLtS75OMKPVibwtE1evgJNMCcvAsedjrK8V0zJ5tyCff%2FPlBZl%2BoVDN9Q4cALzaLBYngEXCsYE3HegTkE5r5L6vNbsh4lecXtSZT6IdD4SbtcX37KK1gY81sbIDuMI2cV30LUejndB2zxXE7C7EvUXEjcJOlGE6Kuw8jkppr%2FXp4NgjAiBbbdiEmLvFgTJsgnKrxNXHWsqPt0bsqXCzKxnngV%2BEegR6kBiWNABsXxaXGJMilJnjdHhOwD%2FUTCL7tPEBjqkAbBiDwtrNtmqVfhmN%2FgiuykZt2qWlqCw9%2FieGlhUw7UpeqFbkmLJA02otHJ0oZ3HB9y0LARq1nsYPTBwLXVKTvOZGxTVAeTUTCiJtFE9kAzpUTIeOysb7AlfydDdKSPkm%2FKrGSIDTnx9%2FkvENAjAL69%2FWRw39NMXIqpnCh6GZHdZlDM851HfkDKf842kfJz3ejUaGt7cD4fl7cZLB%2Fw%2BJqFnQ2te&X-Amz-Signature=3f4e531dc39b167bbf3b4c8c3834f9b0be3912b5c34ab8fbd812e3e9fb8af058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNM76L2B%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDUGZ3W05zPuvU2RY%2B9URxFUIgc1bCyM%2BO5ZY02DR1OfgIhAJ5EzmsfyPXEg7KLcm6IG4lZAKN1iQEJQYi1s2ZbmTpdKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxquHhfSNaEdy1x5vkq3AML%2BYlIlxw6gzXPeZBuQNgSF3fulwqbJZ314P1ZKqCkXJnrmahGXMlkmdSF0%2BIN6oGnd8nME%2F%2BoVjP7j%2B%2FOZ0EeMt%2BAcSeXUZ64LL4gPA%2FzCWQRu7tTkjRYunJSOvFG9Ch4k22MDttDebq%2FQS4EFMtayYWJ122ZeIYpVMN7gQGzVrXrjnWoRiXGoNnPzDMdIJkk%2Biy2tUjJcSbgSp5y5%2Fxqozu49gmUO1gEeeZUvOy8bJ%2F3mnBMQjfOJgAdlN2ezi3K0OQNX4e%2BfTVb7danBgCuR1y20u43FCxbUOD%2Fvtn7T721QJOlv2nXeRMA0IP%2Bdy5sppiTvgT6fLJmuS1OdFWtbYNtO3cXT47sSvWzKD5cHQ99R%2FAcI5kRxIQMlvcv5ghLtS75OMKPVibwtE1evgJNMCcvAsedjrK8V0zJ5tyCff%2FPlBZl%2BoVDN9Q4cALzaLBYngEXCsYE3HegTkE5r5L6vNbsh4lecXtSZT6IdD4SbtcX37KK1gY81sbIDuMI2cV30LUejndB2zxXE7C7EvUXEjcJOlGE6Kuw8jkppr%2FXp4NgjAiBbbdiEmLvFgTJsgnKrxNXHWsqPt0bsqXCzKxnngV%2BEegR6kBiWNABsXxaXGJMilJnjdHhOwD%2FUTCL7tPEBjqkAbBiDwtrNtmqVfhmN%2FgiuykZt2qWlqCw9%2FieGlhUw7UpeqFbkmLJA02otHJ0oZ3HB9y0LARq1nsYPTBwLXVKTvOZGxTVAeTUTCiJtFE9kAzpUTIeOysb7AlfydDdKSPkm%2FKrGSIDTnx9%2FkvENAjAL69%2FWRw39NMXIqpnCh6GZHdZlDM851HfkDKf842kfJz3ejUaGt7cD4fl7cZLB%2Fw%2BJqFnQ2te&X-Amz-Signature=2a528aa04d482a1c3e473042198bef8a83baa83a1f55979997ef8c64e70c8dc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNM76L2B%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDUGZ3W05zPuvU2RY%2B9URxFUIgc1bCyM%2BO5ZY02DR1OfgIhAJ5EzmsfyPXEg7KLcm6IG4lZAKN1iQEJQYi1s2ZbmTpdKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxquHhfSNaEdy1x5vkq3AML%2BYlIlxw6gzXPeZBuQNgSF3fulwqbJZ314P1ZKqCkXJnrmahGXMlkmdSF0%2BIN6oGnd8nME%2F%2BoVjP7j%2B%2FOZ0EeMt%2BAcSeXUZ64LL4gPA%2FzCWQRu7tTkjRYunJSOvFG9Ch4k22MDttDebq%2FQS4EFMtayYWJ122ZeIYpVMN7gQGzVrXrjnWoRiXGoNnPzDMdIJkk%2Biy2tUjJcSbgSp5y5%2Fxqozu49gmUO1gEeeZUvOy8bJ%2F3mnBMQjfOJgAdlN2ezi3K0OQNX4e%2BfTVb7danBgCuR1y20u43FCxbUOD%2Fvtn7T721QJOlv2nXeRMA0IP%2Bdy5sppiTvgT6fLJmuS1OdFWtbYNtO3cXT47sSvWzKD5cHQ99R%2FAcI5kRxIQMlvcv5ghLtS75OMKPVibwtE1evgJNMCcvAsedjrK8V0zJ5tyCff%2FPlBZl%2BoVDN9Q4cALzaLBYngEXCsYE3HegTkE5r5L6vNbsh4lecXtSZT6IdD4SbtcX37KK1gY81sbIDuMI2cV30LUejndB2zxXE7C7EvUXEjcJOlGE6Kuw8jkppr%2FXp4NgjAiBbbdiEmLvFgTJsgnKrxNXHWsqPt0bsqXCzKxnngV%2BEegR6kBiWNABsXxaXGJMilJnjdHhOwD%2FUTCL7tPEBjqkAbBiDwtrNtmqVfhmN%2FgiuykZt2qWlqCw9%2FieGlhUw7UpeqFbkmLJA02otHJ0oZ3HB9y0LARq1nsYPTBwLXVKTvOZGxTVAeTUTCiJtFE9kAzpUTIeOysb7AlfydDdKSPkm%2FKrGSIDTnx9%2FkvENAjAL69%2FWRw39NMXIqpnCh6GZHdZlDM851HfkDKf842kfJz3ejUaGt7cD4fl7cZLB%2Fw%2BJqFnQ2te&X-Amz-Signature=51ac172a8cfa352e2bb0e442dd8e5d7e7b1d38aef6f347c6e918dd6a3eec0165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
