---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-28T21:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-28T21:43:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RYV7GDK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCsEMIPGeYS%2FhI5H8nSMUi1Mw9bhqjhBTVKOm0M6VyTuwIgHegv%2F0Zsd2WqqwKsVZWCwhbtNFKOCaOWTEKKbvk4lkwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKHwg3WU3uOsVlLxyrcA1TW1Cyvi%2FzWTeu5l6HPD5Is269S3M2X%2BfUWRrC7v6iJzd4Mrpie0xsKjj0C%2BhKXaAPcKtM9neHhxyb5S%2B2UWG5w6P%2BYeWfGljg4oKjLO8HpT8I%2FXCwIKdJ7wUtG0R3S63VEPG%2B2lRSsJ4%2Bw1cHReyQq98mR7FuKqH6uV3%2FcsuHZ9WuEMgSaz6X1xSqNlFC3ArmkvUr%2BVQQ6riRSE1E4ekHGtXXQ07Pt5eghrFjke6pUVNYWqK5UPotPqy%2BDVnFE5F0hccN9f7Ixoz55BndV%2FfChEEnGSzrcpDv38MRFeE3Hgno4ylq4z6C7KTYYNfSLSBARraTvmfd9AWWzijVvVcUoFSXxoRBaLb6khTahvdtBBHtGIqr0mhnhX7N%2FU1EUP4SDr%2F%2FTJDKIaQQFc4Bp5k%2BIt9uK2YqdKdAmajJ2kBStFSTLOfaEtRx9hpRRTkSsCdxz6Q0TGFEH%2BxXIGJvCackLKhO1WuhU0aAssUFbRnOc0QhF3uOE44sCYAiFP7nC%2FiJBqyEJTEaecSuEQXdSYbJsI%2F%2FlXGQnE9Mj7ts%2FzHRrgoFZ6D6Y2z%2FLYnciBLMVOYiiD%2BHe%2B%2B7KETuDVNvezQi5FM7d0Iz27NSvQB79qQW5SG0a1Qio04YJGYOJML60ocQGOqUBwcnw6lU%2Ftu15vHVpZgNsdvSQJyCorM05QJLL5FTOkOQsCspPSedMnhk53IMosSj99GRkqfTOovMb3quy8sxtBdMWTVbnT8js6qOtCs1lBnMCMjHOCRXB8fNbOd1bq%2BfF48w%2FhS6LG3zmytrVMUfme0skvE5umrx4f6Xm9CUQjz130U6AQ8EdN8tLoFV2Vtn%2BlKpGoYsEEgLkJ2jm5uLkGgHH6pD4&X-Amz-Signature=114caa2f669d279c183e49dca5b10813d55fbf4ffc2fbf0b400717d046ffd917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RYV7GDK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCsEMIPGeYS%2FhI5H8nSMUi1Mw9bhqjhBTVKOm0M6VyTuwIgHegv%2F0Zsd2WqqwKsVZWCwhbtNFKOCaOWTEKKbvk4lkwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKHwg3WU3uOsVlLxyrcA1TW1Cyvi%2FzWTeu5l6HPD5Is269S3M2X%2BfUWRrC7v6iJzd4Mrpie0xsKjj0C%2BhKXaAPcKtM9neHhxyb5S%2B2UWG5w6P%2BYeWfGljg4oKjLO8HpT8I%2FXCwIKdJ7wUtG0R3S63VEPG%2B2lRSsJ4%2Bw1cHReyQq98mR7FuKqH6uV3%2FcsuHZ9WuEMgSaz6X1xSqNlFC3ArmkvUr%2BVQQ6riRSE1E4ekHGtXXQ07Pt5eghrFjke6pUVNYWqK5UPotPqy%2BDVnFE5F0hccN9f7Ixoz55BndV%2FfChEEnGSzrcpDv38MRFeE3Hgno4ylq4z6C7KTYYNfSLSBARraTvmfd9AWWzijVvVcUoFSXxoRBaLb6khTahvdtBBHtGIqr0mhnhX7N%2FU1EUP4SDr%2F%2FTJDKIaQQFc4Bp5k%2BIt9uK2YqdKdAmajJ2kBStFSTLOfaEtRx9hpRRTkSsCdxz6Q0TGFEH%2BxXIGJvCackLKhO1WuhU0aAssUFbRnOc0QhF3uOE44sCYAiFP7nC%2FiJBqyEJTEaecSuEQXdSYbJsI%2F%2FlXGQnE9Mj7ts%2FzHRrgoFZ6D6Y2z%2FLYnciBLMVOYiiD%2BHe%2B%2B7KETuDVNvezQi5FM7d0Iz27NSvQB79qQW5SG0a1Qio04YJGYOJML60ocQGOqUBwcnw6lU%2Ftu15vHVpZgNsdvSQJyCorM05QJLL5FTOkOQsCspPSedMnhk53IMosSj99GRkqfTOovMb3quy8sxtBdMWTVbnT8js6qOtCs1lBnMCMjHOCRXB8fNbOd1bq%2BfF48w%2FhS6LG3zmytrVMUfme0skvE5umrx4f6Xm9CUQjz130U6AQ8EdN8tLoFV2Vtn%2BlKpGoYsEEgLkJ2jm5uLkGgHH6pD4&X-Amz-Signature=398ab8ab617950d94b03434ba8b5f836d5f16c5d109dcda57a7b1a78d8d29a58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RYV7GDK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCsEMIPGeYS%2FhI5H8nSMUi1Mw9bhqjhBTVKOm0M6VyTuwIgHegv%2F0Zsd2WqqwKsVZWCwhbtNFKOCaOWTEKKbvk4lkwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKHwg3WU3uOsVlLxyrcA1TW1Cyvi%2FzWTeu5l6HPD5Is269S3M2X%2BfUWRrC7v6iJzd4Mrpie0xsKjj0C%2BhKXaAPcKtM9neHhxyb5S%2B2UWG5w6P%2BYeWfGljg4oKjLO8HpT8I%2FXCwIKdJ7wUtG0R3S63VEPG%2B2lRSsJ4%2Bw1cHReyQq98mR7FuKqH6uV3%2FcsuHZ9WuEMgSaz6X1xSqNlFC3ArmkvUr%2BVQQ6riRSE1E4ekHGtXXQ07Pt5eghrFjke6pUVNYWqK5UPotPqy%2BDVnFE5F0hccN9f7Ixoz55BndV%2FfChEEnGSzrcpDv38MRFeE3Hgno4ylq4z6C7KTYYNfSLSBARraTvmfd9AWWzijVvVcUoFSXxoRBaLb6khTahvdtBBHtGIqr0mhnhX7N%2FU1EUP4SDr%2F%2FTJDKIaQQFc4Bp5k%2BIt9uK2YqdKdAmajJ2kBStFSTLOfaEtRx9hpRRTkSsCdxz6Q0TGFEH%2BxXIGJvCackLKhO1WuhU0aAssUFbRnOc0QhF3uOE44sCYAiFP7nC%2FiJBqyEJTEaecSuEQXdSYbJsI%2F%2FlXGQnE9Mj7ts%2FzHRrgoFZ6D6Y2z%2FLYnciBLMVOYiiD%2BHe%2B%2B7KETuDVNvezQi5FM7d0Iz27NSvQB79qQW5SG0a1Qio04YJGYOJML60ocQGOqUBwcnw6lU%2Ftu15vHVpZgNsdvSQJyCorM05QJLL5FTOkOQsCspPSedMnhk53IMosSj99GRkqfTOovMb3quy8sxtBdMWTVbnT8js6qOtCs1lBnMCMjHOCRXB8fNbOd1bq%2BfF48w%2FhS6LG3zmytrVMUfme0skvE5umrx4f6Xm9CUQjz130U6AQ8EdN8tLoFV2Vtn%2BlKpGoYsEEgLkJ2jm5uLkGgHH6pD4&X-Amz-Signature=e6677b6e79ecef0c1342675a20596bcafe20fb17a759c2976ed4d21d961188a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RYV7GDK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCsEMIPGeYS%2FhI5H8nSMUi1Mw9bhqjhBTVKOm0M6VyTuwIgHegv%2F0Zsd2WqqwKsVZWCwhbtNFKOCaOWTEKKbvk4lkwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKHwg3WU3uOsVlLxyrcA1TW1Cyvi%2FzWTeu5l6HPD5Is269S3M2X%2BfUWRrC7v6iJzd4Mrpie0xsKjj0C%2BhKXaAPcKtM9neHhxyb5S%2B2UWG5w6P%2BYeWfGljg4oKjLO8HpT8I%2FXCwIKdJ7wUtG0R3S63VEPG%2B2lRSsJ4%2Bw1cHReyQq98mR7FuKqH6uV3%2FcsuHZ9WuEMgSaz6X1xSqNlFC3ArmkvUr%2BVQQ6riRSE1E4ekHGtXXQ07Pt5eghrFjke6pUVNYWqK5UPotPqy%2BDVnFE5F0hccN9f7Ixoz55BndV%2FfChEEnGSzrcpDv38MRFeE3Hgno4ylq4z6C7KTYYNfSLSBARraTvmfd9AWWzijVvVcUoFSXxoRBaLb6khTahvdtBBHtGIqr0mhnhX7N%2FU1EUP4SDr%2F%2FTJDKIaQQFc4Bp5k%2BIt9uK2YqdKdAmajJ2kBStFSTLOfaEtRx9hpRRTkSsCdxz6Q0TGFEH%2BxXIGJvCackLKhO1WuhU0aAssUFbRnOc0QhF3uOE44sCYAiFP7nC%2FiJBqyEJTEaecSuEQXdSYbJsI%2F%2FlXGQnE9Mj7ts%2FzHRrgoFZ6D6Y2z%2FLYnciBLMVOYiiD%2BHe%2B%2B7KETuDVNvezQi5FM7d0Iz27NSvQB79qQW5SG0a1Qio04YJGYOJML60ocQGOqUBwcnw6lU%2Ftu15vHVpZgNsdvSQJyCorM05QJLL5FTOkOQsCspPSedMnhk53IMosSj99GRkqfTOovMb3quy8sxtBdMWTVbnT8js6qOtCs1lBnMCMjHOCRXB8fNbOd1bq%2BfF48w%2FhS6LG3zmytrVMUfme0skvE5umrx4f6Xm9CUQjz130U6AQ8EdN8tLoFV2Vtn%2BlKpGoYsEEgLkJ2jm5uLkGgHH6pD4&X-Amz-Signature=f432948d9b6ce5aef7a0004aa3ca1bd7febaa9f57f03237faba1a936a841715d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RYV7GDK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCsEMIPGeYS%2FhI5H8nSMUi1Mw9bhqjhBTVKOm0M6VyTuwIgHegv%2F0Zsd2WqqwKsVZWCwhbtNFKOCaOWTEKKbvk4lkwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKHwg3WU3uOsVlLxyrcA1TW1Cyvi%2FzWTeu5l6HPD5Is269S3M2X%2BfUWRrC7v6iJzd4Mrpie0xsKjj0C%2BhKXaAPcKtM9neHhxyb5S%2B2UWG5w6P%2BYeWfGljg4oKjLO8HpT8I%2FXCwIKdJ7wUtG0R3S63VEPG%2B2lRSsJ4%2Bw1cHReyQq98mR7FuKqH6uV3%2FcsuHZ9WuEMgSaz6X1xSqNlFC3ArmkvUr%2BVQQ6riRSE1E4ekHGtXXQ07Pt5eghrFjke6pUVNYWqK5UPotPqy%2BDVnFE5F0hccN9f7Ixoz55BndV%2FfChEEnGSzrcpDv38MRFeE3Hgno4ylq4z6C7KTYYNfSLSBARraTvmfd9AWWzijVvVcUoFSXxoRBaLb6khTahvdtBBHtGIqr0mhnhX7N%2FU1EUP4SDr%2F%2FTJDKIaQQFc4Bp5k%2BIt9uK2YqdKdAmajJ2kBStFSTLOfaEtRx9hpRRTkSsCdxz6Q0TGFEH%2BxXIGJvCackLKhO1WuhU0aAssUFbRnOc0QhF3uOE44sCYAiFP7nC%2FiJBqyEJTEaecSuEQXdSYbJsI%2F%2FlXGQnE9Mj7ts%2FzHRrgoFZ6D6Y2z%2FLYnciBLMVOYiiD%2BHe%2B%2B7KETuDVNvezQi5FM7d0Iz27NSvQB79qQW5SG0a1Qio04YJGYOJML60ocQGOqUBwcnw6lU%2Ftu15vHVpZgNsdvSQJyCorM05QJLL5FTOkOQsCspPSedMnhk53IMosSj99GRkqfTOovMb3quy8sxtBdMWTVbnT8js6qOtCs1lBnMCMjHOCRXB8fNbOd1bq%2BfF48w%2FhS6LG3zmytrVMUfme0skvE5umrx4f6Xm9CUQjz130U6AQ8EdN8tLoFV2Vtn%2BlKpGoYsEEgLkJ2jm5uLkGgHH6pD4&X-Amz-Signature=a6704076e64a1f3953764304aa1477f21dc7140385c303ad43ca2abb30a21da4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RYV7GDK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCsEMIPGeYS%2FhI5H8nSMUi1Mw9bhqjhBTVKOm0M6VyTuwIgHegv%2F0Zsd2WqqwKsVZWCwhbtNFKOCaOWTEKKbvk4lkwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKHwg3WU3uOsVlLxyrcA1TW1Cyvi%2FzWTeu5l6HPD5Is269S3M2X%2BfUWRrC7v6iJzd4Mrpie0xsKjj0C%2BhKXaAPcKtM9neHhxyb5S%2B2UWG5w6P%2BYeWfGljg4oKjLO8HpT8I%2FXCwIKdJ7wUtG0R3S63VEPG%2B2lRSsJ4%2Bw1cHReyQq98mR7FuKqH6uV3%2FcsuHZ9WuEMgSaz6X1xSqNlFC3ArmkvUr%2BVQQ6riRSE1E4ekHGtXXQ07Pt5eghrFjke6pUVNYWqK5UPotPqy%2BDVnFE5F0hccN9f7Ixoz55BndV%2FfChEEnGSzrcpDv38MRFeE3Hgno4ylq4z6C7KTYYNfSLSBARraTvmfd9AWWzijVvVcUoFSXxoRBaLb6khTahvdtBBHtGIqr0mhnhX7N%2FU1EUP4SDr%2F%2FTJDKIaQQFc4Bp5k%2BIt9uK2YqdKdAmajJ2kBStFSTLOfaEtRx9hpRRTkSsCdxz6Q0TGFEH%2BxXIGJvCackLKhO1WuhU0aAssUFbRnOc0QhF3uOE44sCYAiFP7nC%2FiJBqyEJTEaecSuEQXdSYbJsI%2F%2FlXGQnE9Mj7ts%2FzHRrgoFZ6D6Y2z%2FLYnciBLMVOYiiD%2BHe%2B%2B7KETuDVNvezQi5FM7d0Iz27NSvQB79qQW5SG0a1Qio04YJGYOJML60ocQGOqUBwcnw6lU%2Ftu15vHVpZgNsdvSQJyCorM05QJLL5FTOkOQsCspPSedMnhk53IMosSj99GRkqfTOovMb3quy8sxtBdMWTVbnT8js6qOtCs1lBnMCMjHOCRXB8fNbOd1bq%2BfF48w%2FhS6LG3zmytrVMUfme0skvE5umrx4f6Xm9CUQjz130U6AQ8EdN8tLoFV2Vtn%2BlKpGoYsEEgLkJ2jm5uLkGgHH6pD4&X-Amz-Signature=2b8324474ce9595673038d59e17f470141a1fc02ac99bc15359002782585b0f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RYV7GDK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCsEMIPGeYS%2FhI5H8nSMUi1Mw9bhqjhBTVKOm0M6VyTuwIgHegv%2F0Zsd2WqqwKsVZWCwhbtNFKOCaOWTEKKbvk4lkwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKHwg3WU3uOsVlLxyrcA1TW1Cyvi%2FzWTeu5l6HPD5Is269S3M2X%2BfUWRrC7v6iJzd4Mrpie0xsKjj0C%2BhKXaAPcKtM9neHhxyb5S%2B2UWG5w6P%2BYeWfGljg4oKjLO8HpT8I%2FXCwIKdJ7wUtG0R3S63VEPG%2B2lRSsJ4%2Bw1cHReyQq98mR7FuKqH6uV3%2FcsuHZ9WuEMgSaz6X1xSqNlFC3ArmkvUr%2BVQQ6riRSE1E4ekHGtXXQ07Pt5eghrFjke6pUVNYWqK5UPotPqy%2BDVnFE5F0hccN9f7Ixoz55BndV%2FfChEEnGSzrcpDv38MRFeE3Hgno4ylq4z6C7KTYYNfSLSBARraTvmfd9AWWzijVvVcUoFSXxoRBaLb6khTahvdtBBHtGIqr0mhnhX7N%2FU1EUP4SDr%2F%2FTJDKIaQQFc4Bp5k%2BIt9uK2YqdKdAmajJ2kBStFSTLOfaEtRx9hpRRTkSsCdxz6Q0TGFEH%2BxXIGJvCackLKhO1WuhU0aAssUFbRnOc0QhF3uOE44sCYAiFP7nC%2FiJBqyEJTEaecSuEQXdSYbJsI%2F%2FlXGQnE9Mj7ts%2FzHRrgoFZ6D6Y2z%2FLYnciBLMVOYiiD%2BHe%2B%2B7KETuDVNvezQi5FM7d0Iz27NSvQB79qQW5SG0a1Qio04YJGYOJML60ocQGOqUBwcnw6lU%2Ftu15vHVpZgNsdvSQJyCorM05QJLL5FTOkOQsCspPSedMnhk53IMosSj99GRkqfTOovMb3quy8sxtBdMWTVbnT8js6qOtCs1lBnMCMjHOCRXB8fNbOd1bq%2BfF48w%2FhS6LG3zmytrVMUfme0skvE5umrx4f6Xm9CUQjz130U6AQ8EdN8tLoFV2Vtn%2BlKpGoYsEEgLkJ2jm5uLkGgHH6pD4&X-Amz-Signature=da78059cecc7aa5dd7d27807426f3b2b37ec0b65c15bb154aec994f23df9ba02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RYV7GDK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCsEMIPGeYS%2FhI5H8nSMUi1Mw9bhqjhBTVKOm0M6VyTuwIgHegv%2F0Zsd2WqqwKsVZWCwhbtNFKOCaOWTEKKbvk4lkwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKHwg3WU3uOsVlLxyrcA1TW1Cyvi%2FzWTeu5l6HPD5Is269S3M2X%2BfUWRrC7v6iJzd4Mrpie0xsKjj0C%2BhKXaAPcKtM9neHhxyb5S%2B2UWG5w6P%2BYeWfGljg4oKjLO8HpT8I%2FXCwIKdJ7wUtG0R3S63VEPG%2B2lRSsJ4%2Bw1cHReyQq98mR7FuKqH6uV3%2FcsuHZ9WuEMgSaz6X1xSqNlFC3ArmkvUr%2BVQQ6riRSE1E4ekHGtXXQ07Pt5eghrFjke6pUVNYWqK5UPotPqy%2BDVnFE5F0hccN9f7Ixoz55BndV%2FfChEEnGSzrcpDv38MRFeE3Hgno4ylq4z6C7KTYYNfSLSBARraTvmfd9AWWzijVvVcUoFSXxoRBaLb6khTahvdtBBHtGIqr0mhnhX7N%2FU1EUP4SDr%2F%2FTJDKIaQQFc4Bp5k%2BIt9uK2YqdKdAmajJ2kBStFSTLOfaEtRx9hpRRTkSsCdxz6Q0TGFEH%2BxXIGJvCackLKhO1WuhU0aAssUFbRnOc0QhF3uOE44sCYAiFP7nC%2FiJBqyEJTEaecSuEQXdSYbJsI%2F%2FlXGQnE9Mj7ts%2FzHRrgoFZ6D6Y2z%2FLYnciBLMVOYiiD%2BHe%2B%2B7KETuDVNvezQi5FM7d0Iz27NSvQB79qQW5SG0a1Qio04YJGYOJML60ocQGOqUBwcnw6lU%2Ftu15vHVpZgNsdvSQJyCorM05QJLL5FTOkOQsCspPSedMnhk53IMosSj99GRkqfTOovMb3quy8sxtBdMWTVbnT8js6qOtCs1lBnMCMjHOCRXB8fNbOd1bq%2BfF48w%2FhS6LG3zmytrVMUfme0skvE5umrx4f6Xm9CUQjz130U6AQ8EdN8tLoFV2Vtn%2BlKpGoYsEEgLkJ2jm5uLkGgHH6pD4&X-Amz-Signature=395842662419daa60cf010d8f5d1915116fdce036b34cd6d407160fb8d29c6d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RYV7GDK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCsEMIPGeYS%2FhI5H8nSMUi1Mw9bhqjhBTVKOm0M6VyTuwIgHegv%2F0Zsd2WqqwKsVZWCwhbtNFKOCaOWTEKKbvk4lkwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKHwg3WU3uOsVlLxyrcA1TW1Cyvi%2FzWTeu5l6HPD5Is269S3M2X%2BfUWRrC7v6iJzd4Mrpie0xsKjj0C%2BhKXaAPcKtM9neHhxyb5S%2B2UWG5w6P%2BYeWfGljg4oKjLO8HpT8I%2FXCwIKdJ7wUtG0R3S63VEPG%2B2lRSsJ4%2Bw1cHReyQq98mR7FuKqH6uV3%2FcsuHZ9WuEMgSaz6X1xSqNlFC3ArmkvUr%2BVQQ6riRSE1E4ekHGtXXQ07Pt5eghrFjke6pUVNYWqK5UPotPqy%2BDVnFE5F0hccN9f7Ixoz55BndV%2FfChEEnGSzrcpDv38MRFeE3Hgno4ylq4z6C7KTYYNfSLSBARraTvmfd9AWWzijVvVcUoFSXxoRBaLb6khTahvdtBBHtGIqr0mhnhX7N%2FU1EUP4SDr%2F%2FTJDKIaQQFc4Bp5k%2BIt9uK2YqdKdAmajJ2kBStFSTLOfaEtRx9hpRRTkSsCdxz6Q0TGFEH%2BxXIGJvCackLKhO1WuhU0aAssUFbRnOc0QhF3uOE44sCYAiFP7nC%2FiJBqyEJTEaecSuEQXdSYbJsI%2F%2FlXGQnE9Mj7ts%2FzHRrgoFZ6D6Y2z%2FLYnciBLMVOYiiD%2BHe%2B%2B7KETuDVNvezQi5FM7d0Iz27NSvQB79qQW5SG0a1Qio04YJGYOJML60ocQGOqUBwcnw6lU%2Ftu15vHVpZgNsdvSQJyCorM05QJLL5FTOkOQsCspPSedMnhk53IMosSj99GRkqfTOovMb3quy8sxtBdMWTVbnT8js6qOtCs1lBnMCMjHOCRXB8fNbOd1bq%2BfF48w%2FhS6LG3zmytrVMUfme0skvE5umrx4f6Xm9CUQjz130U6AQ8EdN8tLoFV2Vtn%2BlKpGoYsEEgLkJ2jm5uLkGgHH6pD4&X-Amz-Signature=d9fba3271f364fa47217a94e92cbd6f630a0181ea8c29912463ecd5ed9b2d695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RYV7GDK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCsEMIPGeYS%2FhI5H8nSMUi1Mw9bhqjhBTVKOm0M6VyTuwIgHegv%2F0Zsd2WqqwKsVZWCwhbtNFKOCaOWTEKKbvk4lkwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKHwg3WU3uOsVlLxyrcA1TW1Cyvi%2FzWTeu5l6HPD5Is269S3M2X%2BfUWRrC7v6iJzd4Mrpie0xsKjj0C%2BhKXaAPcKtM9neHhxyb5S%2B2UWG5w6P%2BYeWfGljg4oKjLO8HpT8I%2FXCwIKdJ7wUtG0R3S63VEPG%2B2lRSsJ4%2Bw1cHReyQq98mR7FuKqH6uV3%2FcsuHZ9WuEMgSaz6X1xSqNlFC3ArmkvUr%2BVQQ6riRSE1E4ekHGtXXQ07Pt5eghrFjke6pUVNYWqK5UPotPqy%2BDVnFE5F0hccN9f7Ixoz55BndV%2FfChEEnGSzrcpDv38MRFeE3Hgno4ylq4z6C7KTYYNfSLSBARraTvmfd9AWWzijVvVcUoFSXxoRBaLb6khTahvdtBBHtGIqr0mhnhX7N%2FU1EUP4SDr%2F%2FTJDKIaQQFc4Bp5k%2BIt9uK2YqdKdAmajJ2kBStFSTLOfaEtRx9hpRRTkSsCdxz6Q0TGFEH%2BxXIGJvCackLKhO1WuhU0aAssUFbRnOc0QhF3uOE44sCYAiFP7nC%2FiJBqyEJTEaecSuEQXdSYbJsI%2F%2FlXGQnE9Mj7ts%2FzHRrgoFZ6D6Y2z%2FLYnciBLMVOYiiD%2BHe%2B%2B7KETuDVNvezQi5FM7d0Iz27NSvQB79qQW5SG0a1Qio04YJGYOJML60ocQGOqUBwcnw6lU%2Ftu15vHVpZgNsdvSQJyCorM05QJLL5FTOkOQsCspPSedMnhk53IMosSj99GRkqfTOovMb3quy8sxtBdMWTVbnT8js6qOtCs1lBnMCMjHOCRXB8fNbOd1bq%2BfF48w%2FhS6LG3zmytrVMUfme0skvE5umrx4f6Xm9CUQjz130U6AQ8EdN8tLoFV2Vtn%2BlKpGoYsEEgLkJ2jm5uLkGgHH6pD4&X-Amz-Signature=e58896295d7fc5145e8ece2788f228244bfdec167782cdcafc2a98c2768c548f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
   
    <collision>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
    </collision>

    <xacro:box_inertia m="15" w="${base_width}" d="${base_length}" h="${base_height}"/>
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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RYV7GDK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCsEMIPGeYS%2FhI5H8nSMUi1Mw9bhqjhBTVKOm0M6VyTuwIgHegv%2F0Zsd2WqqwKsVZWCwhbtNFKOCaOWTEKKbvk4lkwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKHwg3WU3uOsVlLxyrcA1TW1Cyvi%2FzWTeu5l6HPD5Is269S3M2X%2BfUWRrC7v6iJzd4Mrpie0xsKjj0C%2BhKXaAPcKtM9neHhxyb5S%2B2UWG5w6P%2BYeWfGljg4oKjLO8HpT8I%2FXCwIKdJ7wUtG0R3S63VEPG%2B2lRSsJ4%2Bw1cHReyQq98mR7FuKqH6uV3%2FcsuHZ9WuEMgSaz6X1xSqNlFC3ArmkvUr%2BVQQ6riRSE1E4ekHGtXXQ07Pt5eghrFjke6pUVNYWqK5UPotPqy%2BDVnFE5F0hccN9f7Ixoz55BndV%2FfChEEnGSzrcpDv38MRFeE3Hgno4ylq4z6C7KTYYNfSLSBARraTvmfd9AWWzijVvVcUoFSXxoRBaLb6khTahvdtBBHtGIqr0mhnhX7N%2FU1EUP4SDr%2F%2FTJDKIaQQFc4Bp5k%2BIt9uK2YqdKdAmajJ2kBStFSTLOfaEtRx9hpRRTkSsCdxz6Q0TGFEH%2BxXIGJvCackLKhO1WuhU0aAssUFbRnOc0QhF3uOE44sCYAiFP7nC%2FiJBqyEJTEaecSuEQXdSYbJsI%2F%2FlXGQnE9Mj7ts%2FzHRrgoFZ6D6Y2z%2FLYnciBLMVOYiiD%2BHe%2B%2B7KETuDVNvezQi5FM7d0Iz27NSvQB79qQW5SG0a1Qio04YJGYOJML60ocQGOqUBwcnw6lU%2Ftu15vHVpZgNsdvSQJyCorM05QJLL5FTOkOQsCspPSedMnhk53IMosSj99GRkqfTOovMb3quy8sxtBdMWTVbnT8js6qOtCs1lBnMCMjHOCRXB8fNbOd1bq%2BfF48w%2FhS6LG3zmytrVMUfme0skvE5umrx4f6Xm9CUQjz130U6AQ8EdN8tLoFV2Vtn%2BlKpGoYsEEgLkJ2jm5uLkGgHH6pD4&X-Amz-Signature=c276e7c56fd723cbb3879ff9e42017fba3eb56f195f76b8b45fbe929f7922f2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RYV7GDK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCsEMIPGeYS%2FhI5H8nSMUi1Mw9bhqjhBTVKOm0M6VyTuwIgHegv%2F0Zsd2WqqwKsVZWCwhbtNFKOCaOWTEKKbvk4lkwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKHwg3WU3uOsVlLxyrcA1TW1Cyvi%2FzWTeu5l6HPD5Is269S3M2X%2BfUWRrC7v6iJzd4Mrpie0xsKjj0C%2BhKXaAPcKtM9neHhxyb5S%2B2UWG5w6P%2BYeWfGljg4oKjLO8HpT8I%2FXCwIKdJ7wUtG0R3S63VEPG%2B2lRSsJ4%2Bw1cHReyQq98mR7FuKqH6uV3%2FcsuHZ9WuEMgSaz6X1xSqNlFC3ArmkvUr%2BVQQ6riRSE1E4ekHGtXXQ07Pt5eghrFjke6pUVNYWqK5UPotPqy%2BDVnFE5F0hccN9f7Ixoz55BndV%2FfChEEnGSzrcpDv38MRFeE3Hgno4ylq4z6C7KTYYNfSLSBARraTvmfd9AWWzijVvVcUoFSXxoRBaLb6khTahvdtBBHtGIqr0mhnhX7N%2FU1EUP4SDr%2F%2FTJDKIaQQFc4Bp5k%2BIt9uK2YqdKdAmajJ2kBStFSTLOfaEtRx9hpRRTkSsCdxz6Q0TGFEH%2BxXIGJvCackLKhO1WuhU0aAssUFbRnOc0QhF3uOE44sCYAiFP7nC%2FiJBqyEJTEaecSuEQXdSYbJsI%2F%2FlXGQnE9Mj7ts%2FzHRrgoFZ6D6Y2z%2FLYnciBLMVOYiiD%2BHe%2B%2B7KETuDVNvezQi5FM7d0Iz27NSvQB79qQW5SG0a1Qio04YJGYOJML60ocQGOqUBwcnw6lU%2Ftu15vHVpZgNsdvSQJyCorM05QJLL5FTOkOQsCspPSedMnhk53IMosSj99GRkqfTOovMb3quy8sxtBdMWTVbnT8js6qOtCs1lBnMCMjHOCRXB8fNbOd1bq%2BfF48w%2FhS6LG3zmytrVMUfme0skvE5umrx4f6Xm9CUQjz130U6AQ8EdN8tLoFV2Vtn%2BlKpGoYsEEgLkJ2jm5uLkGgHH6pD4&X-Amz-Signature=69cb65cb00acdb1b5f9ab6a4731b614cc074a07d7097aff3940c54f8199762d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RYV7GDK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCsEMIPGeYS%2FhI5H8nSMUi1Mw9bhqjhBTVKOm0M6VyTuwIgHegv%2F0Zsd2WqqwKsVZWCwhbtNFKOCaOWTEKKbvk4lkwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKHwg3WU3uOsVlLxyrcA1TW1Cyvi%2FzWTeu5l6HPD5Is269S3M2X%2BfUWRrC7v6iJzd4Mrpie0xsKjj0C%2BhKXaAPcKtM9neHhxyb5S%2B2UWG5w6P%2BYeWfGljg4oKjLO8HpT8I%2FXCwIKdJ7wUtG0R3S63VEPG%2B2lRSsJ4%2Bw1cHReyQq98mR7FuKqH6uV3%2FcsuHZ9WuEMgSaz6X1xSqNlFC3ArmkvUr%2BVQQ6riRSE1E4ekHGtXXQ07Pt5eghrFjke6pUVNYWqK5UPotPqy%2BDVnFE5F0hccN9f7Ixoz55BndV%2FfChEEnGSzrcpDv38MRFeE3Hgno4ylq4z6C7KTYYNfSLSBARraTvmfd9AWWzijVvVcUoFSXxoRBaLb6khTahvdtBBHtGIqr0mhnhX7N%2FU1EUP4SDr%2F%2FTJDKIaQQFc4Bp5k%2BIt9uK2YqdKdAmajJ2kBStFSTLOfaEtRx9hpRRTkSsCdxz6Q0TGFEH%2BxXIGJvCackLKhO1WuhU0aAssUFbRnOc0QhF3uOE44sCYAiFP7nC%2FiJBqyEJTEaecSuEQXdSYbJsI%2F%2FlXGQnE9Mj7ts%2FzHRrgoFZ6D6Y2z%2FLYnciBLMVOYiiD%2BHe%2B%2B7KETuDVNvezQi5FM7d0Iz27NSvQB79qQW5SG0a1Qio04YJGYOJML60ocQGOqUBwcnw6lU%2Ftu15vHVpZgNsdvSQJyCorM05QJLL5FTOkOQsCspPSedMnhk53IMosSj99GRkqfTOovMb3quy8sxtBdMWTVbnT8js6qOtCs1lBnMCMjHOCRXB8fNbOd1bq%2BfF48w%2FhS6LG3zmytrVMUfme0skvE5umrx4f6Xm9CUQjz130U6AQ8EdN8tLoFV2Vtn%2BlKpGoYsEEgLkJ2jm5uLkGgHH6pD4&X-Amz-Signature=df4e49789378f3aa034f18c90e77d75dd95a382b5abc6b5ec1286427e88ac1ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RYV7GDK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCsEMIPGeYS%2FhI5H8nSMUi1Mw9bhqjhBTVKOm0M6VyTuwIgHegv%2F0Zsd2WqqwKsVZWCwhbtNFKOCaOWTEKKbvk4lkwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKHwg3WU3uOsVlLxyrcA1TW1Cyvi%2FzWTeu5l6HPD5Is269S3M2X%2BfUWRrC7v6iJzd4Mrpie0xsKjj0C%2BhKXaAPcKtM9neHhxyb5S%2B2UWG5w6P%2BYeWfGljg4oKjLO8HpT8I%2FXCwIKdJ7wUtG0R3S63VEPG%2B2lRSsJ4%2Bw1cHReyQq98mR7FuKqH6uV3%2FcsuHZ9WuEMgSaz6X1xSqNlFC3ArmkvUr%2BVQQ6riRSE1E4ekHGtXXQ07Pt5eghrFjke6pUVNYWqK5UPotPqy%2BDVnFE5F0hccN9f7Ixoz55BndV%2FfChEEnGSzrcpDv38MRFeE3Hgno4ylq4z6C7KTYYNfSLSBARraTvmfd9AWWzijVvVcUoFSXxoRBaLb6khTahvdtBBHtGIqr0mhnhX7N%2FU1EUP4SDr%2F%2FTJDKIaQQFc4Bp5k%2BIt9uK2YqdKdAmajJ2kBStFSTLOfaEtRx9hpRRTkSsCdxz6Q0TGFEH%2BxXIGJvCackLKhO1WuhU0aAssUFbRnOc0QhF3uOE44sCYAiFP7nC%2FiJBqyEJTEaecSuEQXdSYbJsI%2F%2FlXGQnE9Mj7ts%2FzHRrgoFZ6D6Y2z%2FLYnciBLMVOYiiD%2BHe%2B%2B7KETuDVNvezQi5FM7d0Iz27NSvQB79qQW5SG0a1Qio04YJGYOJML60ocQGOqUBwcnw6lU%2Ftu15vHVpZgNsdvSQJyCorM05QJLL5FTOkOQsCspPSedMnhk53IMosSj99GRkqfTOovMb3quy8sxtBdMWTVbnT8js6qOtCs1lBnMCMjHOCRXB8fNbOd1bq%2BfF48w%2FhS6LG3zmytrVMUfme0skvE5umrx4f6Xm9CUQjz130U6AQ8EdN8tLoFV2Vtn%2BlKpGoYsEEgLkJ2jm5uLkGgHH6pD4&X-Amz-Signature=93d938862f4301be3d9788e418e3a3ef1588ff1b5fe09006ceeb3535ddf2b0bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RLNHOEG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBqD1jvb4Qp%2F0rMkf%2BDuY8KUdYvRIKuJcGdqbYZMGK9bAiBuAZNlVE4l%2FigcEh8pBUhyAcV%2FBwA47lemeIoQzh%2Bf5yqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmxXrqtCr7fNBHC15KtwDkGMRTi14QC42Mgoq%2Bm7GfbnRIIGVM7go2Mp5pz8pR55wgWL7XVfoYKntg%2BMhIQMRdcuTGlNCrhwSJw12jzgS8zL9gspx0cTzQtxlD%2F%2BaDeGfEmWrhYQJRON38nqUXMmaRdceQTBWxyqw82s3%2F2qnIAgLFA3CJxknZ%2FSmnqWZX3WmRCALPvt9ubyB0TUvJDQ8%2FD6IBC%2BUge98k3PCFnKNle2GCCPd05MiJmE1WQMzoJ4h3Z1l6G75qhDZBL9LYLsoXEShfDm3p31h4lbGH9nvwf8cYnW3k5cpHKO3xc7WwLesJTUWEXNHy6GbVKq8JkNx0vJnne43MuER9xt%2FPOAF2VMyq8Y7OONH4uvxoQRCHAfL1H1qU%2BLT1FoU7C9HLqXIsJFeyBufhxa5esSUfzRmbc%2F3xeU4oyzPq4Cj0VnhszFwGhafVUVUU5O7GCy%2F7VcRJpTBenE7CXlJcCwFo%2BoVovEb6Ax%2FKVIuYSp%2B9THThvLwEsBd7lgX4jGa2ruOP5dxESFntD4d0q6kGK1Ov9jiCSIbMoHLQEmW%2FeI0fSNUvMylRuA0%2Fr0V%2F9Z%2BtxcRfL5OhuCb%2BYce6qLFUHdTTNZ7uX7yJ58U%2F%2B%2BqJt%2B8oMnRvqIUKUhGtjwVNyFcF9QwzLShxAY6pgEcoJWB%2FmzCCqnIUr1Ey4AdTAzrGv1mTolEhW33v%2FjQLYIIpUHrroYq0F4XCa8LDW3DQkjNireE3NLhxW%2FJXkFtuQCc6aJyUKBRExzapH45vZunWJOmaifv%2BkU9cdEAD3BNnUYqqqawjVNGkqdctfsEE%2FeaWlkdJteyZHzr06KTZDo3l9gVJo06l9irbtzWNXU5aljyfKlJVfek5tGsHIB1QhcE1gQ2&X-Amz-Signature=88fa9686089d89db6ebaf3ce0e38e230962c5cf7453bf2e338cd3c4a6afa8aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RLNHOEG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBqD1jvb4Qp%2F0rMkf%2BDuY8KUdYvRIKuJcGdqbYZMGK9bAiBuAZNlVE4l%2FigcEh8pBUhyAcV%2FBwA47lemeIoQzh%2Bf5yqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmxXrqtCr7fNBHC15KtwDkGMRTi14QC42Mgoq%2Bm7GfbnRIIGVM7go2Mp5pz8pR55wgWL7XVfoYKntg%2BMhIQMRdcuTGlNCrhwSJw12jzgS8zL9gspx0cTzQtxlD%2F%2BaDeGfEmWrhYQJRON38nqUXMmaRdceQTBWxyqw82s3%2F2qnIAgLFA3CJxknZ%2FSmnqWZX3WmRCALPvt9ubyB0TUvJDQ8%2FD6IBC%2BUge98k3PCFnKNle2GCCPd05MiJmE1WQMzoJ4h3Z1l6G75qhDZBL9LYLsoXEShfDm3p31h4lbGH9nvwf8cYnW3k5cpHKO3xc7WwLesJTUWEXNHy6GbVKq8JkNx0vJnne43MuER9xt%2FPOAF2VMyq8Y7OONH4uvxoQRCHAfL1H1qU%2BLT1FoU7C9HLqXIsJFeyBufhxa5esSUfzRmbc%2F3xeU4oyzPq4Cj0VnhszFwGhafVUVUU5O7GCy%2F7VcRJpTBenE7CXlJcCwFo%2BoVovEb6Ax%2FKVIuYSp%2B9THThvLwEsBd7lgX4jGa2ruOP5dxESFntD4d0q6kGK1Ov9jiCSIbMoHLQEmW%2FeI0fSNUvMylRuA0%2Fr0V%2F9Z%2BtxcRfL5OhuCb%2BYce6qLFUHdTTNZ7uX7yJ58U%2F%2B%2BqJt%2B8oMnRvqIUKUhGtjwVNyFcF9QwzLShxAY6pgEcoJWB%2FmzCCqnIUr1Ey4AdTAzrGv1mTolEhW33v%2FjQLYIIpUHrroYq0F4XCa8LDW3DQkjNireE3NLhxW%2FJXkFtuQCc6aJyUKBRExzapH45vZunWJOmaifv%2BkU9cdEAD3BNnUYqqqawjVNGkqdctfsEE%2FeaWlkdJteyZHzr06KTZDo3l9gVJo06l9irbtzWNXU5aljyfKlJVfek5tGsHIB1QhcE1gQ2&X-Amz-Signature=d5612b0355ccf68a99c72d102f6c63ded255fde5fb77453b0f5eef50c93b3fff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RLNHOEG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBqD1jvb4Qp%2F0rMkf%2BDuY8KUdYvRIKuJcGdqbYZMGK9bAiBuAZNlVE4l%2FigcEh8pBUhyAcV%2FBwA47lemeIoQzh%2Bf5yqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmxXrqtCr7fNBHC15KtwDkGMRTi14QC42Mgoq%2Bm7GfbnRIIGVM7go2Mp5pz8pR55wgWL7XVfoYKntg%2BMhIQMRdcuTGlNCrhwSJw12jzgS8zL9gspx0cTzQtxlD%2F%2BaDeGfEmWrhYQJRON38nqUXMmaRdceQTBWxyqw82s3%2F2qnIAgLFA3CJxknZ%2FSmnqWZX3WmRCALPvt9ubyB0TUvJDQ8%2FD6IBC%2BUge98k3PCFnKNle2GCCPd05MiJmE1WQMzoJ4h3Z1l6G75qhDZBL9LYLsoXEShfDm3p31h4lbGH9nvwf8cYnW3k5cpHKO3xc7WwLesJTUWEXNHy6GbVKq8JkNx0vJnne43MuER9xt%2FPOAF2VMyq8Y7OONH4uvxoQRCHAfL1H1qU%2BLT1FoU7C9HLqXIsJFeyBufhxa5esSUfzRmbc%2F3xeU4oyzPq4Cj0VnhszFwGhafVUVUU5O7GCy%2F7VcRJpTBenE7CXlJcCwFo%2BoVovEb6Ax%2FKVIuYSp%2B9THThvLwEsBd7lgX4jGa2ruOP5dxESFntD4d0q6kGK1Ov9jiCSIbMoHLQEmW%2FeI0fSNUvMylRuA0%2Fr0V%2F9Z%2BtxcRfL5OhuCb%2BYce6qLFUHdTTNZ7uX7yJ58U%2F%2B%2BqJt%2B8oMnRvqIUKUhGtjwVNyFcF9QwzLShxAY6pgEcoJWB%2FmzCCqnIUr1Ey4AdTAzrGv1mTolEhW33v%2FjQLYIIpUHrroYq0F4XCa8LDW3DQkjNireE3NLhxW%2FJXkFtuQCc6aJyUKBRExzapH45vZunWJOmaifv%2BkU9cdEAD3BNnUYqqqawjVNGkqdctfsEE%2FeaWlkdJteyZHzr06KTZDo3l9gVJo06l9irbtzWNXU5aljyfKlJVfek5tGsHIB1QhcE1gQ2&X-Amz-Signature=f7e4920c1d168a028371e777621590c7ef85493bcba849b12ca62d04eb2e28f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RLNHOEG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBqD1jvb4Qp%2F0rMkf%2BDuY8KUdYvRIKuJcGdqbYZMGK9bAiBuAZNlVE4l%2FigcEh8pBUhyAcV%2FBwA47lemeIoQzh%2Bf5yqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmxXrqtCr7fNBHC15KtwDkGMRTi14QC42Mgoq%2Bm7GfbnRIIGVM7go2Mp5pz8pR55wgWL7XVfoYKntg%2BMhIQMRdcuTGlNCrhwSJw12jzgS8zL9gspx0cTzQtxlD%2F%2BaDeGfEmWrhYQJRON38nqUXMmaRdceQTBWxyqw82s3%2F2qnIAgLFA3CJxknZ%2FSmnqWZX3WmRCALPvt9ubyB0TUvJDQ8%2FD6IBC%2BUge98k3PCFnKNle2GCCPd05MiJmE1WQMzoJ4h3Z1l6G75qhDZBL9LYLsoXEShfDm3p31h4lbGH9nvwf8cYnW3k5cpHKO3xc7WwLesJTUWEXNHy6GbVKq8JkNx0vJnne43MuER9xt%2FPOAF2VMyq8Y7OONH4uvxoQRCHAfL1H1qU%2BLT1FoU7C9HLqXIsJFeyBufhxa5esSUfzRmbc%2F3xeU4oyzPq4Cj0VnhszFwGhafVUVUU5O7GCy%2F7VcRJpTBenE7CXlJcCwFo%2BoVovEb6Ax%2FKVIuYSp%2B9THThvLwEsBd7lgX4jGa2ruOP5dxESFntD4d0q6kGK1Ov9jiCSIbMoHLQEmW%2FeI0fSNUvMylRuA0%2Fr0V%2F9Z%2BtxcRfL5OhuCb%2BYce6qLFUHdTTNZ7uX7yJ58U%2F%2B%2BqJt%2B8oMnRvqIUKUhGtjwVNyFcF9QwzLShxAY6pgEcoJWB%2FmzCCqnIUr1Ey4AdTAzrGv1mTolEhW33v%2FjQLYIIpUHrroYq0F4XCa8LDW3DQkjNireE3NLhxW%2FJXkFtuQCc6aJyUKBRExzapH45vZunWJOmaifv%2BkU9cdEAD3BNnUYqqqawjVNGkqdctfsEE%2FeaWlkdJteyZHzr06KTZDo3l9gVJo06l9irbtzWNXU5aljyfKlJVfek5tGsHIB1QhcE1gQ2&X-Amz-Signature=2c1ddb0357a6352f18c6146949dcc2179d5011504e1f1720d551a1d56f2371b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RLNHOEG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBqD1jvb4Qp%2F0rMkf%2BDuY8KUdYvRIKuJcGdqbYZMGK9bAiBuAZNlVE4l%2FigcEh8pBUhyAcV%2FBwA47lemeIoQzh%2Bf5yqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmxXrqtCr7fNBHC15KtwDkGMRTi14QC42Mgoq%2Bm7GfbnRIIGVM7go2Mp5pz8pR55wgWL7XVfoYKntg%2BMhIQMRdcuTGlNCrhwSJw12jzgS8zL9gspx0cTzQtxlD%2F%2BaDeGfEmWrhYQJRON38nqUXMmaRdceQTBWxyqw82s3%2F2qnIAgLFA3CJxknZ%2FSmnqWZX3WmRCALPvt9ubyB0TUvJDQ8%2FD6IBC%2BUge98k3PCFnKNle2GCCPd05MiJmE1WQMzoJ4h3Z1l6G75qhDZBL9LYLsoXEShfDm3p31h4lbGH9nvwf8cYnW3k5cpHKO3xc7WwLesJTUWEXNHy6GbVKq8JkNx0vJnne43MuER9xt%2FPOAF2VMyq8Y7OONH4uvxoQRCHAfL1H1qU%2BLT1FoU7C9HLqXIsJFeyBufhxa5esSUfzRmbc%2F3xeU4oyzPq4Cj0VnhszFwGhafVUVUU5O7GCy%2F7VcRJpTBenE7CXlJcCwFo%2BoVovEb6Ax%2FKVIuYSp%2B9THThvLwEsBd7lgX4jGa2ruOP5dxESFntD4d0q6kGK1Ov9jiCSIbMoHLQEmW%2FeI0fSNUvMylRuA0%2Fr0V%2F9Z%2BtxcRfL5OhuCb%2BYce6qLFUHdTTNZ7uX7yJ58U%2F%2B%2BqJt%2B8oMnRvqIUKUhGtjwVNyFcF9QwzLShxAY6pgEcoJWB%2FmzCCqnIUr1Ey4AdTAzrGv1mTolEhW33v%2FjQLYIIpUHrroYq0F4XCa8LDW3DQkjNireE3NLhxW%2FJXkFtuQCc6aJyUKBRExzapH45vZunWJOmaifv%2BkU9cdEAD3BNnUYqqqawjVNGkqdctfsEE%2FeaWlkdJteyZHzr06KTZDo3l9gVJo06l9irbtzWNXU5aljyfKlJVfek5tGsHIB1QhcE1gQ2&X-Amz-Signature=d65565ca6f5abf075f73e6dece232a23bfbfc56635ce1545cabd8d6e5ac923d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RLNHOEG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBqD1jvb4Qp%2F0rMkf%2BDuY8KUdYvRIKuJcGdqbYZMGK9bAiBuAZNlVE4l%2FigcEh8pBUhyAcV%2FBwA47lemeIoQzh%2Bf5yqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmxXrqtCr7fNBHC15KtwDkGMRTi14QC42Mgoq%2Bm7GfbnRIIGVM7go2Mp5pz8pR55wgWL7XVfoYKntg%2BMhIQMRdcuTGlNCrhwSJw12jzgS8zL9gspx0cTzQtxlD%2F%2BaDeGfEmWrhYQJRON38nqUXMmaRdceQTBWxyqw82s3%2F2qnIAgLFA3CJxknZ%2FSmnqWZX3WmRCALPvt9ubyB0TUvJDQ8%2FD6IBC%2BUge98k3PCFnKNle2GCCPd05MiJmE1WQMzoJ4h3Z1l6G75qhDZBL9LYLsoXEShfDm3p31h4lbGH9nvwf8cYnW3k5cpHKO3xc7WwLesJTUWEXNHy6GbVKq8JkNx0vJnne43MuER9xt%2FPOAF2VMyq8Y7OONH4uvxoQRCHAfL1H1qU%2BLT1FoU7C9HLqXIsJFeyBufhxa5esSUfzRmbc%2F3xeU4oyzPq4Cj0VnhszFwGhafVUVUU5O7GCy%2F7VcRJpTBenE7CXlJcCwFo%2BoVovEb6Ax%2FKVIuYSp%2B9THThvLwEsBd7lgX4jGa2ruOP5dxESFntD4d0q6kGK1Ov9jiCSIbMoHLQEmW%2FeI0fSNUvMylRuA0%2Fr0V%2F9Z%2BtxcRfL5OhuCb%2BYce6qLFUHdTTNZ7uX7yJ58U%2F%2B%2BqJt%2B8oMnRvqIUKUhGtjwVNyFcF9QwzLShxAY6pgEcoJWB%2FmzCCqnIUr1Ey4AdTAzrGv1mTolEhW33v%2FjQLYIIpUHrroYq0F4XCa8LDW3DQkjNireE3NLhxW%2FJXkFtuQCc6aJyUKBRExzapH45vZunWJOmaifv%2BkU9cdEAD3BNnUYqqqawjVNGkqdctfsEE%2FeaWlkdJteyZHzr06KTZDo3l9gVJo06l9irbtzWNXU5aljyfKlJVfek5tGsHIB1QhcE1gQ2&X-Amz-Signature=941c2fa677585bf84038875d127dded173defcef3978ab84c833952abce32658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
