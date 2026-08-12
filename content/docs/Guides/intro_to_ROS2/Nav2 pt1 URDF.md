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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JVPL5YL%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9t8buUNIqqH0DFGETYT6PEYmpQ%2BFN6a1xghtK5bLH%2BAiEAiLSrhMu9%2FjoLiAjaTGEZjvo2WvEiPG0ev7I9kHgBxXoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYeqUgJHyHLQYaW9yrcAyjgWrFxaQiA60V8bySvjiuTwf6eSBimqCRsPUARIeEI9OYgSDrZXN%2FZgLTm8FzxmWT3430q8d1yazjm3PkQi7H%2F1ZE96knWsUpXW0Ti70oSkqWvaQHwmQK4Uy8xK9w9s82i0%2Fy4pw4v%2B%2Bckgjqri%2BUY4RcEAZLdXJ98JpxPl%2FwcnY7Iu%2BqIxjtxscsEI7w%2FWbzlhNfYI8tWyRK6Lv25G1DYy9Kab1ILJ3nVKYRigdxG4%2FMjmr4izspNnC5Maq2BVyD4tP2pi9MnpIPRiLCrmKkTRpisjT8QA%2BHJBfU7nd8IkeO6g1ZnTDVjaJuwyuDh4p3cayj4nV5BooxhXcGfULi%2BloNOoYCuebNNFOz%2FeA0oH2riM%2FCJmiTR9pT%2FcclYYAdFPNCRCeBAnasbhtEOzX5%2FDcWvEZhxRThO3YeYqCal1AVIKeuOBzTCbtNHFGWGdbKoRTiBbDoal0i16Er80QEoTIjphgY1caP98Do4JTOp0QP4UAWky5q9cGuKj25C%2F7f6vOFd4tXJlgmcaHr1cd%2FhBPJnoHZCBDbJmQbI46MujvBEUYjqQVdnfYvHFqePWWYQoK%2FiCxS7SZItK3mzfh2Nwy3q%2F8jPXcf5DdxwnhKeqB6Q0gt69aVkQp2NMP%2Fm7tMGOqUB%2B97BM0uAvAnJWcNlEclA%2BwBB4W3dJpaoVIvWn2unRMw651dIzDFX%2FLeFX5zn907YWvPmYq7deZwu4iLsVZnHS7fBh2xis8FXiB%2BLx%2BW0txuVE03EpeYSye9W5%2Fl%2Fkqw6vjvr6oCCmo6NZw9aPhBKgx3lT9X93vjTQngBcP3z9WytWxmI8EDCM9yDWb857XsWicvmib5GjWvN1pyTinQRGk6aao%2Bv&X-Amz-Signature=f7085c2c7538bea4ca4b5437b4160cb7c8724148204ae6a0a1221cc32c92cc6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JVPL5YL%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9t8buUNIqqH0DFGETYT6PEYmpQ%2BFN6a1xghtK5bLH%2BAiEAiLSrhMu9%2FjoLiAjaTGEZjvo2WvEiPG0ev7I9kHgBxXoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYeqUgJHyHLQYaW9yrcAyjgWrFxaQiA60V8bySvjiuTwf6eSBimqCRsPUARIeEI9OYgSDrZXN%2FZgLTm8FzxmWT3430q8d1yazjm3PkQi7H%2F1ZE96knWsUpXW0Ti70oSkqWvaQHwmQK4Uy8xK9w9s82i0%2Fy4pw4v%2B%2Bckgjqri%2BUY4RcEAZLdXJ98JpxPl%2FwcnY7Iu%2BqIxjtxscsEI7w%2FWbzlhNfYI8tWyRK6Lv25G1DYy9Kab1ILJ3nVKYRigdxG4%2FMjmr4izspNnC5Maq2BVyD4tP2pi9MnpIPRiLCrmKkTRpisjT8QA%2BHJBfU7nd8IkeO6g1ZnTDVjaJuwyuDh4p3cayj4nV5BooxhXcGfULi%2BloNOoYCuebNNFOz%2FeA0oH2riM%2FCJmiTR9pT%2FcclYYAdFPNCRCeBAnasbhtEOzX5%2FDcWvEZhxRThO3YeYqCal1AVIKeuOBzTCbtNHFGWGdbKoRTiBbDoal0i16Er80QEoTIjphgY1caP98Do4JTOp0QP4UAWky5q9cGuKj25C%2F7f6vOFd4tXJlgmcaHr1cd%2FhBPJnoHZCBDbJmQbI46MujvBEUYjqQVdnfYvHFqePWWYQoK%2FiCxS7SZItK3mzfh2Nwy3q%2F8jPXcf5DdxwnhKeqB6Q0gt69aVkQp2NMP%2Fm7tMGOqUB%2B97BM0uAvAnJWcNlEclA%2BwBB4W3dJpaoVIvWn2unRMw651dIzDFX%2FLeFX5zn907YWvPmYq7deZwu4iLsVZnHS7fBh2xis8FXiB%2BLx%2BW0txuVE03EpeYSye9W5%2Fl%2Fkqw6vjvr6oCCmo6NZw9aPhBKgx3lT9X93vjTQngBcP3z9WytWxmI8EDCM9yDWb857XsWicvmib5GjWvN1pyTinQRGk6aao%2Bv&X-Amz-Signature=0bc43292c0895e4870ba12a961289eb10f7d1a13c8d8fbf9bd9e307a4844b61f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JVPL5YL%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9t8buUNIqqH0DFGETYT6PEYmpQ%2BFN6a1xghtK5bLH%2BAiEAiLSrhMu9%2FjoLiAjaTGEZjvo2WvEiPG0ev7I9kHgBxXoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYeqUgJHyHLQYaW9yrcAyjgWrFxaQiA60V8bySvjiuTwf6eSBimqCRsPUARIeEI9OYgSDrZXN%2FZgLTm8FzxmWT3430q8d1yazjm3PkQi7H%2F1ZE96knWsUpXW0Ti70oSkqWvaQHwmQK4Uy8xK9w9s82i0%2Fy4pw4v%2B%2Bckgjqri%2BUY4RcEAZLdXJ98JpxPl%2FwcnY7Iu%2BqIxjtxscsEI7w%2FWbzlhNfYI8tWyRK6Lv25G1DYy9Kab1ILJ3nVKYRigdxG4%2FMjmr4izspNnC5Maq2BVyD4tP2pi9MnpIPRiLCrmKkTRpisjT8QA%2BHJBfU7nd8IkeO6g1ZnTDVjaJuwyuDh4p3cayj4nV5BooxhXcGfULi%2BloNOoYCuebNNFOz%2FeA0oH2riM%2FCJmiTR9pT%2FcclYYAdFPNCRCeBAnasbhtEOzX5%2FDcWvEZhxRThO3YeYqCal1AVIKeuOBzTCbtNHFGWGdbKoRTiBbDoal0i16Er80QEoTIjphgY1caP98Do4JTOp0QP4UAWky5q9cGuKj25C%2F7f6vOFd4tXJlgmcaHr1cd%2FhBPJnoHZCBDbJmQbI46MujvBEUYjqQVdnfYvHFqePWWYQoK%2FiCxS7SZItK3mzfh2Nwy3q%2F8jPXcf5DdxwnhKeqB6Q0gt69aVkQp2NMP%2Fm7tMGOqUB%2B97BM0uAvAnJWcNlEclA%2BwBB4W3dJpaoVIvWn2unRMw651dIzDFX%2FLeFX5zn907YWvPmYq7deZwu4iLsVZnHS7fBh2xis8FXiB%2BLx%2BW0txuVE03EpeYSye9W5%2Fl%2Fkqw6vjvr6oCCmo6NZw9aPhBKgx3lT9X93vjTQngBcP3z9WytWxmI8EDCM9yDWb857XsWicvmib5GjWvN1pyTinQRGk6aao%2Bv&X-Amz-Signature=4c46b176e225eac8ebb0aa7c3f60cd89adbf132d835317bb77e4becf34cc9d9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JVPL5YL%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9t8buUNIqqH0DFGETYT6PEYmpQ%2BFN6a1xghtK5bLH%2BAiEAiLSrhMu9%2FjoLiAjaTGEZjvo2WvEiPG0ev7I9kHgBxXoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYeqUgJHyHLQYaW9yrcAyjgWrFxaQiA60V8bySvjiuTwf6eSBimqCRsPUARIeEI9OYgSDrZXN%2FZgLTm8FzxmWT3430q8d1yazjm3PkQi7H%2F1ZE96knWsUpXW0Ti70oSkqWvaQHwmQK4Uy8xK9w9s82i0%2Fy4pw4v%2B%2Bckgjqri%2BUY4RcEAZLdXJ98JpxPl%2FwcnY7Iu%2BqIxjtxscsEI7w%2FWbzlhNfYI8tWyRK6Lv25G1DYy9Kab1ILJ3nVKYRigdxG4%2FMjmr4izspNnC5Maq2BVyD4tP2pi9MnpIPRiLCrmKkTRpisjT8QA%2BHJBfU7nd8IkeO6g1ZnTDVjaJuwyuDh4p3cayj4nV5BooxhXcGfULi%2BloNOoYCuebNNFOz%2FeA0oH2riM%2FCJmiTR9pT%2FcclYYAdFPNCRCeBAnasbhtEOzX5%2FDcWvEZhxRThO3YeYqCal1AVIKeuOBzTCbtNHFGWGdbKoRTiBbDoal0i16Er80QEoTIjphgY1caP98Do4JTOp0QP4UAWky5q9cGuKj25C%2F7f6vOFd4tXJlgmcaHr1cd%2FhBPJnoHZCBDbJmQbI46MujvBEUYjqQVdnfYvHFqePWWYQoK%2FiCxS7SZItK3mzfh2Nwy3q%2F8jPXcf5DdxwnhKeqB6Q0gt69aVkQp2NMP%2Fm7tMGOqUB%2B97BM0uAvAnJWcNlEclA%2BwBB4W3dJpaoVIvWn2unRMw651dIzDFX%2FLeFX5zn907YWvPmYq7deZwu4iLsVZnHS7fBh2xis8FXiB%2BLx%2BW0txuVE03EpeYSye9W5%2Fl%2Fkqw6vjvr6oCCmo6NZw9aPhBKgx3lT9X93vjTQngBcP3z9WytWxmI8EDCM9yDWb857XsWicvmib5GjWvN1pyTinQRGk6aao%2Bv&X-Amz-Signature=49141cd0a70055e2ea06001d02f28b2035bf1c5e820ba39721c2002d50bc4907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JVPL5YL%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9t8buUNIqqH0DFGETYT6PEYmpQ%2BFN6a1xghtK5bLH%2BAiEAiLSrhMu9%2FjoLiAjaTGEZjvo2WvEiPG0ev7I9kHgBxXoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYeqUgJHyHLQYaW9yrcAyjgWrFxaQiA60V8bySvjiuTwf6eSBimqCRsPUARIeEI9OYgSDrZXN%2FZgLTm8FzxmWT3430q8d1yazjm3PkQi7H%2F1ZE96knWsUpXW0Ti70oSkqWvaQHwmQK4Uy8xK9w9s82i0%2Fy4pw4v%2B%2Bckgjqri%2BUY4RcEAZLdXJ98JpxPl%2FwcnY7Iu%2BqIxjtxscsEI7w%2FWbzlhNfYI8tWyRK6Lv25G1DYy9Kab1ILJ3nVKYRigdxG4%2FMjmr4izspNnC5Maq2BVyD4tP2pi9MnpIPRiLCrmKkTRpisjT8QA%2BHJBfU7nd8IkeO6g1ZnTDVjaJuwyuDh4p3cayj4nV5BooxhXcGfULi%2BloNOoYCuebNNFOz%2FeA0oH2riM%2FCJmiTR9pT%2FcclYYAdFPNCRCeBAnasbhtEOzX5%2FDcWvEZhxRThO3YeYqCal1AVIKeuOBzTCbtNHFGWGdbKoRTiBbDoal0i16Er80QEoTIjphgY1caP98Do4JTOp0QP4UAWky5q9cGuKj25C%2F7f6vOFd4tXJlgmcaHr1cd%2FhBPJnoHZCBDbJmQbI46MujvBEUYjqQVdnfYvHFqePWWYQoK%2FiCxS7SZItK3mzfh2Nwy3q%2F8jPXcf5DdxwnhKeqB6Q0gt69aVkQp2NMP%2Fm7tMGOqUB%2B97BM0uAvAnJWcNlEclA%2BwBB4W3dJpaoVIvWn2unRMw651dIzDFX%2FLeFX5zn907YWvPmYq7deZwu4iLsVZnHS7fBh2xis8FXiB%2BLx%2BW0txuVE03EpeYSye9W5%2Fl%2Fkqw6vjvr6oCCmo6NZw9aPhBKgx3lT9X93vjTQngBcP3z9WytWxmI8EDCM9yDWb857XsWicvmib5GjWvN1pyTinQRGk6aao%2Bv&X-Amz-Signature=cf8db84a0cf00d6b90f7efcd52b818f24f96f2cf0f986697f8dba3b5fef72265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JVPL5YL%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9t8buUNIqqH0DFGETYT6PEYmpQ%2BFN6a1xghtK5bLH%2BAiEAiLSrhMu9%2FjoLiAjaTGEZjvo2WvEiPG0ev7I9kHgBxXoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYeqUgJHyHLQYaW9yrcAyjgWrFxaQiA60V8bySvjiuTwf6eSBimqCRsPUARIeEI9OYgSDrZXN%2FZgLTm8FzxmWT3430q8d1yazjm3PkQi7H%2F1ZE96knWsUpXW0Ti70oSkqWvaQHwmQK4Uy8xK9w9s82i0%2Fy4pw4v%2B%2Bckgjqri%2BUY4RcEAZLdXJ98JpxPl%2FwcnY7Iu%2BqIxjtxscsEI7w%2FWbzlhNfYI8tWyRK6Lv25G1DYy9Kab1ILJ3nVKYRigdxG4%2FMjmr4izspNnC5Maq2BVyD4tP2pi9MnpIPRiLCrmKkTRpisjT8QA%2BHJBfU7nd8IkeO6g1ZnTDVjaJuwyuDh4p3cayj4nV5BooxhXcGfULi%2BloNOoYCuebNNFOz%2FeA0oH2riM%2FCJmiTR9pT%2FcclYYAdFPNCRCeBAnasbhtEOzX5%2FDcWvEZhxRThO3YeYqCal1AVIKeuOBzTCbtNHFGWGdbKoRTiBbDoal0i16Er80QEoTIjphgY1caP98Do4JTOp0QP4UAWky5q9cGuKj25C%2F7f6vOFd4tXJlgmcaHr1cd%2FhBPJnoHZCBDbJmQbI46MujvBEUYjqQVdnfYvHFqePWWYQoK%2FiCxS7SZItK3mzfh2Nwy3q%2F8jPXcf5DdxwnhKeqB6Q0gt69aVkQp2NMP%2Fm7tMGOqUB%2B97BM0uAvAnJWcNlEclA%2BwBB4W3dJpaoVIvWn2unRMw651dIzDFX%2FLeFX5zn907YWvPmYq7deZwu4iLsVZnHS7fBh2xis8FXiB%2BLx%2BW0txuVE03EpeYSye9W5%2Fl%2Fkqw6vjvr6oCCmo6NZw9aPhBKgx3lT9X93vjTQngBcP3z9WytWxmI8EDCM9yDWb857XsWicvmib5GjWvN1pyTinQRGk6aao%2Bv&X-Amz-Signature=1f1647be82d83324caecdf3e2721bdf5b1c9f300317c62dda5c1602f64614fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JVPL5YL%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9t8buUNIqqH0DFGETYT6PEYmpQ%2BFN6a1xghtK5bLH%2BAiEAiLSrhMu9%2FjoLiAjaTGEZjvo2WvEiPG0ev7I9kHgBxXoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYeqUgJHyHLQYaW9yrcAyjgWrFxaQiA60V8bySvjiuTwf6eSBimqCRsPUARIeEI9OYgSDrZXN%2FZgLTm8FzxmWT3430q8d1yazjm3PkQi7H%2F1ZE96knWsUpXW0Ti70oSkqWvaQHwmQK4Uy8xK9w9s82i0%2Fy4pw4v%2B%2Bckgjqri%2BUY4RcEAZLdXJ98JpxPl%2FwcnY7Iu%2BqIxjtxscsEI7w%2FWbzlhNfYI8tWyRK6Lv25G1DYy9Kab1ILJ3nVKYRigdxG4%2FMjmr4izspNnC5Maq2BVyD4tP2pi9MnpIPRiLCrmKkTRpisjT8QA%2BHJBfU7nd8IkeO6g1ZnTDVjaJuwyuDh4p3cayj4nV5BooxhXcGfULi%2BloNOoYCuebNNFOz%2FeA0oH2riM%2FCJmiTR9pT%2FcclYYAdFPNCRCeBAnasbhtEOzX5%2FDcWvEZhxRThO3YeYqCal1AVIKeuOBzTCbtNHFGWGdbKoRTiBbDoal0i16Er80QEoTIjphgY1caP98Do4JTOp0QP4UAWky5q9cGuKj25C%2F7f6vOFd4tXJlgmcaHr1cd%2FhBPJnoHZCBDbJmQbI46MujvBEUYjqQVdnfYvHFqePWWYQoK%2FiCxS7SZItK3mzfh2Nwy3q%2F8jPXcf5DdxwnhKeqB6Q0gt69aVkQp2NMP%2Fm7tMGOqUB%2B97BM0uAvAnJWcNlEclA%2BwBB4W3dJpaoVIvWn2unRMw651dIzDFX%2FLeFX5zn907YWvPmYq7deZwu4iLsVZnHS7fBh2xis8FXiB%2BLx%2BW0txuVE03EpeYSye9W5%2Fl%2Fkqw6vjvr6oCCmo6NZw9aPhBKgx3lT9X93vjTQngBcP3z9WytWxmI8EDCM9yDWb857XsWicvmib5GjWvN1pyTinQRGk6aao%2Bv&X-Amz-Signature=9c72a4c917354a34209219333322c363da3cf0f8cb1e5ff779b5fba99bdf131d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JVPL5YL%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9t8buUNIqqH0DFGETYT6PEYmpQ%2BFN6a1xghtK5bLH%2BAiEAiLSrhMu9%2FjoLiAjaTGEZjvo2WvEiPG0ev7I9kHgBxXoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYeqUgJHyHLQYaW9yrcAyjgWrFxaQiA60V8bySvjiuTwf6eSBimqCRsPUARIeEI9OYgSDrZXN%2FZgLTm8FzxmWT3430q8d1yazjm3PkQi7H%2F1ZE96knWsUpXW0Ti70oSkqWvaQHwmQK4Uy8xK9w9s82i0%2Fy4pw4v%2B%2Bckgjqri%2BUY4RcEAZLdXJ98JpxPl%2FwcnY7Iu%2BqIxjtxscsEI7w%2FWbzlhNfYI8tWyRK6Lv25G1DYy9Kab1ILJ3nVKYRigdxG4%2FMjmr4izspNnC5Maq2BVyD4tP2pi9MnpIPRiLCrmKkTRpisjT8QA%2BHJBfU7nd8IkeO6g1ZnTDVjaJuwyuDh4p3cayj4nV5BooxhXcGfULi%2BloNOoYCuebNNFOz%2FeA0oH2riM%2FCJmiTR9pT%2FcclYYAdFPNCRCeBAnasbhtEOzX5%2FDcWvEZhxRThO3YeYqCal1AVIKeuOBzTCbtNHFGWGdbKoRTiBbDoal0i16Er80QEoTIjphgY1caP98Do4JTOp0QP4UAWky5q9cGuKj25C%2F7f6vOFd4tXJlgmcaHr1cd%2FhBPJnoHZCBDbJmQbI46MujvBEUYjqQVdnfYvHFqePWWYQoK%2FiCxS7SZItK3mzfh2Nwy3q%2F8jPXcf5DdxwnhKeqB6Q0gt69aVkQp2NMP%2Fm7tMGOqUB%2B97BM0uAvAnJWcNlEclA%2BwBB4W3dJpaoVIvWn2unRMw651dIzDFX%2FLeFX5zn907YWvPmYq7deZwu4iLsVZnHS7fBh2xis8FXiB%2BLx%2BW0txuVE03EpeYSye9W5%2Fl%2Fkqw6vjvr6oCCmo6NZw9aPhBKgx3lT9X93vjTQngBcP3z9WytWxmI8EDCM9yDWb857XsWicvmib5GjWvN1pyTinQRGk6aao%2Bv&X-Amz-Signature=cd5fa414cb840cba67d12a3493e1eacafa77a35301b78ef6592c9cfe98ad71ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JVPL5YL%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9t8buUNIqqH0DFGETYT6PEYmpQ%2BFN6a1xghtK5bLH%2BAiEAiLSrhMu9%2FjoLiAjaTGEZjvo2WvEiPG0ev7I9kHgBxXoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYeqUgJHyHLQYaW9yrcAyjgWrFxaQiA60V8bySvjiuTwf6eSBimqCRsPUARIeEI9OYgSDrZXN%2FZgLTm8FzxmWT3430q8d1yazjm3PkQi7H%2F1ZE96knWsUpXW0Ti70oSkqWvaQHwmQK4Uy8xK9w9s82i0%2Fy4pw4v%2B%2Bckgjqri%2BUY4RcEAZLdXJ98JpxPl%2FwcnY7Iu%2BqIxjtxscsEI7w%2FWbzlhNfYI8tWyRK6Lv25G1DYy9Kab1ILJ3nVKYRigdxG4%2FMjmr4izspNnC5Maq2BVyD4tP2pi9MnpIPRiLCrmKkTRpisjT8QA%2BHJBfU7nd8IkeO6g1ZnTDVjaJuwyuDh4p3cayj4nV5BooxhXcGfULi%2BloNOoYCuebNNFOz%2FeA0oH2riM%2FCJmiTR9pT%2FcclYYAdFPNCRCeBAnasbhtEOzX5%2FDcWvEZhxRThO3YeYqCal1AVIKeuOBzTCbtNHFGWGdbKoRTiBbDoal0i16Er80QEoTIjphgY1caP98Do4JTOp0QP4UAWky5q9cGuKj25C%2F7f6vOFd4tXJlgmcaHr1cd%2FhBPJnoHZCBDbJmQbI46MujvBEUYjqQVdnfYvHFqePWWYQoK%2FiCxS7SZItK3mzfh2Nwy3q%2F8jPXcf5DdxwnhKeqB6Q0gt69aVkQp2NMP%2Fm7tMGOqUB%2B97BM0uAvAnJWcNlEclA%2BwBB4W3dJpaoVIvWn2unRMw651dIzDFX%2FLeFX5zn907YWvPmYq7deZwu4iLsVZnHS7fBh2xis8FXiB%2BLx%2BW0txuVE03EpeYSye9W5%2Fl%2Fkqw6vjvr6oCCmo6NZw9aPhBKgx3lT9X93vjTQngBcP3z9WytWxmI8EDCM9yDWb857XsWicvmib5GjWvN1pyTinQRGk6aao%2Bv&X-Amz-Signature=b0c6e7d0add28eb028d851f78d9490877f72d7a19619a930f6728e899eac9098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JVPL5YL%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9t8buUNIqqH0DFGETYT6PEYmpQ%2BFN6a1xghtK5bLH%2BAiEAiLSrhMu9%2FjoLiAjaTGEZjvo2WvEiPG0ev7I9kHgBxXoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYeqUgJHyHLQYaW9yrcAyjgWrFxaQiA60V8bySvjiuTwf6eSBimqCRsPUARIeEI9OYgSDrZXN%2FZgLTm8FzxmWT3430q8d1yazjm3PkQi7H%2F1ZE96knWsUpXW0Ti70oSkqWvaQHwmQK4Uy8xK9w9s82i0%2Fy4pw4v%2B%2Bckgjqri%2BUY4RcEAZLdXJ98JpxPl%2FwcnY7Iu%2BqIxjtxscsEI7w%2FWbzlhNfYI8tWyRK6Lv25G1DYy9Kab1ILJ3nVKYRigdxG4%2FMjmr4izspNnC5Maq2BVyD4tP2pi9MnpIPRiLCrmKkTRpisjT8QA%2BHJBfU7nd8IkeO6g1ZnTDVjaJuwyuDh4p3cayj4nV5BooxhXcGfULi%2BloNOoYCuebNNFOz%2FeA0oH2riM%2FCJmiTR9pT%2FcclYYAdFPNCRCeBAnasbhtEOzX5%2FDcWvEZhxRThO3YeYqCal1AVIKeuOBzTCbtNHFGWGdbKoRTiBbDoal0i16Er80QEoTIjphgY1caP98Do4JTOp0QP4UAWky5q9cGuKj25C%2F7f6vOFd4tXJlgmcaHr1cd%2FhBPJnoHZCBDbJmQbI46MujvBEUYjqQVdnfYvHFqePWWYQoK%2FiCxS7SZItK3mzfh2Nwy3q%2F8jPXcf5DdxwnhKeqB6Q0gt69aVkQp2NMP%2Fm7tMGOqUB%2B97BM0uAvAnJWcNlEclA%2BwBB4W3dJpaoVIvWn2unRMw651dIzDFX%2FLeFX5zn907YWvPmYq7deZwu4iLsVZnHS7fBh2xis8FXiB%2BLx%2BW0txuVE03EpeYSye9W5%2Fl%2Fkqw6vjvr6oCCmo6NZw9aPhBKgx3lT9X93vjTQngBcP3z9WytWxmI8EDCM9yDWb857XsWicvmib5GjWvN1pyTinQRGk6aao%2Bv&X-Amz-Signature=7c15b3713a6f56ccdfde83b81963c7c0cae2d920d5877b0bc78edcbeeab88509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTZJM4JV%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLL%2BX0V21IB9X3tZw%2BPimzccfxbaWkRfLCpRhgYE1qmgIhAPWLrMW2ZuYz9agepEeErYWO6TSjsPf0g0okpxIRU9XLKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBZtF8cK03gHiFQ8kq3ANjzsCkXpqV9fFQ9bJKJ2Of%2BRdcGQqMlouZv9PlRdtBbpfXVzykwitVY1d01n9kBqykclcfDmacX08VLTeqn3%2B9Xtxb%2FhfBpIlP11oobxZ2G7Nv893sqN5wNuAJEeVVOX0b3gBmi7PCQ%2FZpsCaQH%2BxWpY92rZ0%2FjS76ldhKIygudZrw4euw0JFRXfMRpagWKoqDmIkxdghOtCzPDTgytRNQYjICuEkZTq8uXSXW2wiCKwcJN%2FpUUpENLno8pywywGGa57Niz9su5RRidCJvJCP9yHwc3CCmE40D%2BtSkEYPmv26B%2F%2BJK2%2Fn6w%2FQDDWRj7p3hKioYMPMCXvMd%2BF9w1OX5QuzMVZtt%2FCLTa8XpqqqyQtzhhxpLwZLGkqQ%2F4lvVDRrFAFA5pIPR74eK15%2BuicsdrWuL1dVGX%2B5iiIaz9akM0RnpZ3I2JMjjkDqB4smJpogjGjVnhhjaZhws6o7mbdbJcpM6BPM3vFOL3QPvqAU52qS35f3PpChCRnwvf4s8v48nxv2KTYWYHpkRMryQcNeAnHkWq2LLktDnRtrx2yf43QypTIKQ12C2ZH76kiuYD0bF1xo4mnBf2f2CW2uVBdHe4kpBGoideIaqXUobg%2F%2BctfW4klekg16tq%2BjiNjCl6e7TBjqkAQ%2BQBHr%2B0I2H2hSZXZCsYYCm39NXY9lhVIk%2FWL6Ye4d0NQUqMAdkpihg2E77%2Fsj0CM5O5LqnHG5ZXbu%2BAphya84NKgsl6zqJN0UubwtDMLYY3FawHkYzVOY9%2B%2BUhO9dLQqfy3cADNZzYMptAAosD1LPeEj9u0Elm16M2GHfZGlKNiG4uX565YA9qPHTYE4Tzv5ilSLC0g1UJZcRXXFFf3ltlidGa&X-Amz-Signature=f66c70707a5a4fce544279f4c355ba41243b1128b2bba382f875b465d0e2c05f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U57H7ZCO%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBq8dFcy3mRKtc5unWeVdc5wjzymYbf4R5Oxc2q4R5dgIgbSbracH8kHgLYJez5pjQQ3BOP0roG4Xho%2B4elDladQkqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJoWQhfcxx2pXLobCrcA8rXuwN8DAt3N1JpYKrJ%2B2l4yxYNv85y37nsvp0a17PFWj6%2FDZ9eS9V5FIXXNlPAsvx2iv9nmkz4AlsbaIMLYOvSpIwdajw6X9OYbSLqtVX7c2KIb4XLOQPQ5EIZrozGIHZONVWIR7JqKYFrGbI%2BGiOkAQVmiWBGBf6QtLDL3zMugQRIe5%2F2MXQOgs8C1Ol8N9Be8vICh7azTFBrz2xogSi5AgkjO25UJOw2oBqoF8nw2vDCzJjqsqCxhJC%2Fv05bXbnllESgJjpu1viGHxCDnb%2Bv8rYx%2FsBTDYgjkoLO4FPeogmTY0he5niM9MmCgnL6iKbD7mFMPTidss%2Bt%2FIXYH9prqZ3d%2F1xXlOTNghonav9SzmF67AydBn0UpnY0%2FGyDgSOWOTO60EutdaDtSnxFfBvmZRLQ1yKIyDkOgIGeqRCpghnhTKuOkjj7rzBIcFwjzrd10p6Tvq4iPE5KtAPiohOmE82sy%2B4L4Iv5d5NCjFMMc%2BAz53q3RO8rak9%2Bl4vw9W0CgJIHWSnPHj2UMN2O2JyRHtwfgqDW2DCYZrGNREy8AyV6uycti0NRxivk%2F35dHql37gnrEuOAJJUu3%2FXgBgsMWFqs9nmbKILvbbBLC4qFxbRSsMGte9efl%2FICMJrm7tMGOqUBprI0vUkb8jh%2BDG0xHFNe4WHQZepHfsSs5%2FEtnexEff4XjpMVnIswnyv7mIGsSgvwrp9VLzjv%2FpLEPubIpsjlXqlxMrvTgLruodkQ5kjB4k%2FxrZrXuEtEpHfVgtvZj2jJs3XOuExrfN2TEJ%2BD%2BoPuaN33V4pBTUuqj71C3iAO0CMZro%2B7AuJNfOs7JjEMenpGRStiBfGTB6jI73IhbzlHymWQOK48&X-Amz-Signature=c0bb951e07f276078f8fdf8bf07cd4195e535e70b43a3bb2e5a4d39b231025a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NYYJA3Z%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdCTziygR2pdXEh9r1RUf2Yp55UHBcgNbTm2oHbDYhCAIgW%2BjrsS8fzAVOhAk4Dho2Xgg2X4Jq%2BGIib7M6mdOqVA8qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrzhgnTOx0dWi6IDCrcAxuoYiNpLS1CN1azRRVeM3eyUzXuIuOL6%2Bu966Vb3ZmkbIKbkS6I1K7oHUeZ8M0CcF1IVdgX%2FIQdGoN5spAr32YXxR34uRG%2Bozm%2FIj8xmzrY6bSodnpDOMboJ2u7bDYCYChKwjDpMhHcmu5Nm1BL4IxREJE92YezQ4oVVrqnxpQLcJBilukKpFTcyxWrsdNR%2BAwzMnTfyvqoM8CQUZdvnsSiLHVnljyvKdyrMq5way%2BNiiKTwhkZsP%2FLe9dcP1NGrlu4yHKvQX4Qr%2BBfRwD7yb6mKBPea9ggAF6sW2gjlg2VNJxQpOculJnmYups1qsunE0XEjgX2N%2FVxBe2KOfkrW8NUzCjpJMbbJb8XM3IwPSlDSsEFazPjXxuVwPQvA%2F83Xncr4WMtjeR0BpoN%2BTZzLiO2axzsYwjO5%2FMqz3NY5rX2oL56%2FErkKvEE%2BbyhRnb2XaAiraStkyoiPMg6YTYXgT1o%2BTwmQcx6roDf2aQLUGfr4YNGw2%2FlVpQncC7j7Dfbq9vWUT88DzWGvcFmjrwI1HVNGvRB%2BlFx29TszZqcSAq1IzlUA9wQZsYS0E9DCCh8AwG1wlQu1aF%2B1%2Bhno0QC9QySR6LhyXbWjKN4uipMsm%2FdsMIrB9hRLMDGl8hMLfo7tMGOqUBT4db%2FkeLtoMDgdIKaeye47bOZR2YfIOPlEIfv44Ddw6vO2pJooMcwHCl%2F0jyhORkxg2GK6nbbdsDsZhU2z2Jyn7MkaTIa69f1fTvCQ%2FDlmKTTozLZRJwmIFCt25IpLrXADxhEfkKZSnJGAn5urJr2oBDSrSEPqITN7vxRmNPcfc2vm%2FpXyU8CgGGwAyALMYaAbJu%2Bxotk2STUidijwfmexk472Bz&X-Amz-Signature=bef60081cb7f1ff4926b018e17982ade335284bf2cde6546d9994a83360fad8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JVPL5YL%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9t8buUNIqqH0DFGETYT6PEYmpQ%2BFN6a1xghtK5bLH%2BAiEAiLSrhMu9%2FjoLiAjaTGEZjvo2WvEiPG0ev7I9kHgBxXoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYeqUgJHyHLQYaW9yrcAyjgWrFxaQiA60V8bySvjiuTwf6eSBimqCRsPUARIeEI9OYgSDrZXN%2FZgLTm8FzxmWT3430q8d1yazjm3PkQi7H%2F1ZE96knWsUpXW0Ti70oSkqWvaQHwmQK4Uy8xK9w9s82i0%2Fy4pw4v%2B%2Bckgjqri%2BUY4RcEAZLdXJ98JpxPl%2FwcnY7Iu%2BqIxjtxscsEI7w%2FWbzlhNfYI8tWyRK6Lv25G1DYy9Kab1ILJ3nVKYRigdxG4%2FMjmr4izspNnC5Maq2BVyD4tP2pi9MnpIPRiLCrmKkTRpisjT8QA%2BHJBfU7nd8IkeO6g1ZnTDVjaJuwyuDh4p3cayj4nV5BooxhXcGfULi%2BloNOoYCuebNNFOz%2FeA0oH2riM%2FCJmiTR9pT%2FcclYYAdFPNCRCeBAnasbhtEOzX5%2FDcWvEZhxRThO3YeYqCal1AVIKeuOBzTCbtNHFGWGdbKoRTiBbDoal0i16Er80QEoTIjphgY1caP98Do4JTOp0QP4UAWky5q9cGuKj25C%2F7f6vOFd4tXJlgmcaHr1cd%2FhBPJnoHZCBDbJmQbI46MujvBEUYjqQVdnfYvHFqePWWYQoK%2FiCxS7SZItK3mzfh2Nwy3q%2F8jPXcf5DdxwnhKeqB6Q0gt69aVkQp2NMP%2Fm7tMGOqUB%2B97BM0uAvAnJWcNlEclA%2BwBB4W3dJpaoVIvWn2unRMw651dIzDFX%2FLeFX5zn907YWvPmYq7deZwu4iLsVZnHS7fBh2xis8FXiB%2BLx%2BW0txuVE03EpeYSye9W5%2Fl%2Fkqw6vjvr6oCCmo6NZw9aPhBKgx3lT9X93vjTQngBcP3z9WytWxmI8EDCM9yDWb857XsWicvmib5GjWvN1pyTinQRGk6aao%2Bv&X-Amz-Signature=ef737abe1bfe11279c12c05401d41975969244ecc31aa3477b3b2ba98fc2acd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYLTJ24X%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr1fmgT0dsTuIlFgc%2Boi%2FvUPSw9D4CZOPytivD6NpDaQIgeip0hsupSxQGnzif4U8AFskJSKGlBescLGP%2BBoa%2F67sqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3m7oAsEd4YIa5A9ircAxy7ZGdhH7cwhhSwRvuFOsjW876japd8%2Bp0YsNOSRM3tR%2B30GWhgAztVYLOq6ezRbcERGV75OUexQ2wzceed2vxfolZUsQWNPUi4VXtbvz7UDJTbzrySiL26Kz7VxHNffYaqs5VAbDnTEMiaA6KqQrLtJ395EOOghqWogvec5LqZjxtIjQ%2BZxncZUT2Z9OOoX6sqb9ThZnzMzyhf0ExchAukO6r71oBHhejsrc%2FkiJORvuKYggRLZ%2B6azoIVgPOYwCOp6AHcTV%2BIoV%2B1z6%2BFVAiGm1g3Fvx9SnczCojnWjZ5UCSc890ZWEFTOQScCL8NhrVYbDmE%2FvNSe%2FuqKpynSTqhssS1R06qnsXwU9f1dZcv1Fn2jAqgvVSadmudOtOG8jGQWjCJ7tFAcUPL60S9Y%2B2DpB05DmAEUzyLGl65k7X9poxbbW3h3ih64ZkSIhIVFxF6K8vFcQWAEW9UfQVRGmUc82n5ZcQ3huGnLlIwKxuJ6TFhtxLS0yRQL3KmXpkUPYyY0OrnqE%2FDq0RXGtXUCfLTjTCrw6jdvsVAEAwd2ajU%2BbbPh0ang1cvhgrElL0%2BApOAux4DsHiO1zi5XoStLtPphV2OAB06zKNZpIyTy0IJa07zOF6EVh9ocDpHMIvo7tMGOqUBfmO2TJysZoN4r0LNZibdYbxm5beuhlhmooWR012x1MZ7IVaSvytEbKDzUaFh8W7CTq2nDFdcdn3eMppfHungWv8ZLFNgl995GtHhQBcVK7W7aV%2BQCSnlu4ClF8vZ8ycAP8cnf9g1Sytw0w1odDyopuwOZrc4EwSBi6hqazy5wo21Y%2FWYu4lY2Wp6zruvMCX24Gd7t6EH8CAu94Srze%2BQJYszwNXx&X-Amz-Signature=cca8beddbd5464c076ba8b9e85a0fe3330ad275813f927a910a10f2ba7f95a52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JVPL5YL%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9t8buUNIqqH0DFGETYT6PEYmpQ%2BFN6a1xghtK5bLH%2BAiEAiLSrhMu9%2FjoLiAjaTGEZjvo2WvEiPG0ev7I9kHgBxXoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYeqUgJHyHLQYaW9yrcAyjgWrFxaQiA60V8bySvjiuTwf6eSBimqCRsPUARIeEI9OYgSDrZXN%2FZgLTm8FzxmWT3430q8d1yazjm3PkQi7H%2F1ZE96knWsUpXW0Ti70oSkqWvaQHwmQK4Uy8xK9w9s82i0%2Fy4pw4v%2B%2Bckgjqri%2BUY4RcEAZLdXJ98JpxPl%2FwcnY7Iu%2BqIxjtxscsEI7w%2FWbzlhNfYI8tWyRK6Lv25G1DYy9Kab1ILJ3nVKYRigdxG4%2FMjmr4izspNnC5Maq2BVyD4tP2pi9MnpIPRiLCrmKkTRpisjT8QA%2BHJBfU7nd8IkeO6g1ZnTDVjaJuwyuDh4p3cayj4nV5BooxhXcGfULi%2BloNOoYCuebNNFOz%2FeA0oH2riM%2FCJmiTR9pT%2FcclYYAdFPNCRCeBAnasbhtEOzX5%2FDcWvEZhxRThO3YeYqCal1AVIKeuOBzTCbtNHFGWGdbKoRTiBbDoal0i16Er80QEoTIjphgY1caP98Do4JTOp0QP4UAWky5q9cGuKj25C%2F7f6vOFd4tXJlgmcaHr1cd%2FhBPJnoHZCBDbJmQbI46MujvBEUYjqQVdnfYvHFqePWWYQoK%2FiCxS7SZItK3mzfh2Nwy3q%2F8jPXcf5DdxwnhKeqB6Q0gt69aVkQp2NMP%2Fm7tMGOqUB%2B97BM0uAvAnJWcNlEclA%2BwBB4W3dJpaoVIvWn2unRMw651dIzDFX%2FLeFX5zn907YWvPmYq7deZwu4iLsVZnHS7fBh2xis8FXiB%2BLx%2BW0txuVE03EpeYSye9W5%2Fl%2Fkqw6vjvr6oCCmo6NZw9aPhBKgx3lT9X93vjTQngBcP3z9WytWxmI8EDCM9yDWb857XsWicvmib5GjWvN1pyTinQRGk6aao%2Bv&X-Amz-Signature=25078f3c0b2eb7ae33652336c7af61f8f095c8c785bca6fd3d6bc305367acbd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCHVVU2M%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1MqRMitvVWu7mV4JRxMmsrRnEfEvURjg3bhaObvxHdwIgWxjIc%2BpSEBAFuv%2F2Iyu4qD%2F6IIXi2%2BBSDDsA9UKH4mkqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1LYeVLPfLPm7Q%2BDircA8OGfIjGS6ObyycjEnzSuS22k05Jz9%2FqXKnFbepMLKiAjsPSpURwSYOOhfQ34LSOWnGrz8VyeNSDpPwhu0QqJOphypY6tcdDmgshYWxY8kbOBmZ9XhUk8cAP7ojvpRp4TcZ3n3fs3oaDUGjtxeNXGa0QiOVwTIfEEufcw79UC5wsZrHWn7ANV%2FbCOyf6OccCYc9Xw4NIJdSJvPLofz0SRtUlHSMpGDGoFK5x3%2FDUMWtCOpARoaJY78Wzt6bMNGtqs5Q0K8G48Wm1%2Fle0xma70Bg8yyyzYUiQyxjLQaBDo5BV9pjAv4zkqy%2FzstiWBYIRX5CG2D1V5xkGFXH%2BYJFxjk%2BunqH2VXyJlvp1VgyqfR2MxWAMuKczkME1AESVL8rDe3dPzDZCumNUt7h95q9EHnDz%2BkO4xt3lObEOqFF1TIfc37kxjq8%2FKo%2F9hxA0VJqdB%2FW8R25ba3B7tN7Bng2C9jQJBLfgGbW1M%2BJGCSwiT%2BlAZEw%2Fb6rWTKlGeS2MfFSRrp0f4YicX1I%2BEzso4CuGjWm9t3ggGkH6ftIe2%2BwiNyD9RuB89Z0x9kmuoc%2BOqsR14TKiNltxm9XRlS7z75Bc9oel5w8rvTB0vmJJn81zruSoNvcKSjsOaVMgIlr1MJ3p7tMGOqUBnKoDquRfi501%2FLau99PeLomLybXlVh97IoJpb8r5SMYVU5GyVzZwySV2kw8YzCS%2F971rBCFBuF3HYx9T1j%2Fs%2F4zzg1nW%2BcBUKgkGps2TK8ttT%2FYUJWCdG97LgwMLM7krije1uByAnsIeqYnN0XKmjTejnMJYqY2MOjExxr%2B205M%2B9FHCXSuEvS7ivCVShkpwpOTIcj41aWvfweYlurnXlDYkTY%2BG&X-Amz-Signature=4fb184de496cc7c4e4cca24294a91157e89deea88878852a95c4e51416f9380a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JVPL5YL%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9t8buUNIqqH0DFGETYT6PEYmpQ%2BFN6a1xghtK5bLH%2BAiEAiLSrhMu9%2FjoLiAjaTGEZjvo2WvEiPG0ev7I9kHgBxXoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYeqUgJHyHLQYaW9yrcAyjgWrFxaQiA60V8bySvjiuTwf6eSBimqCRsPUARIeEI9OYgSDrZXN%2FZgLTm8FzxmWT3430q8d1yazjm3PkQi7H%2F1ZE96knWsUpXW0Ti70oSkqWvaQHwmQK4Uy8xK9w9s82i0%2Fy4pw4v%2B%2Bckgjqri%2BUY4RcEAZLdXJ98JpxPl%2FwcnY7Iu%2BqIxjtxscsEI7w%2FWbzlhNfYI8tWyRK6Lv25G1DYy9Kab1ILJ3nVKYRigdxG4%2FMjmr4izspNnC5Maq2BVyD4tP2pi9MnpIPRiLCrmKkTRpisjT8QA%2BHJBfU7nd8IkeO6g1ZnTDVjaJuwyuDh4p3cayj4nV5BooxhXcGfULi%2BloNOoYCuebNNFOz%2FeA0oH2riM%2FCJmiTR9pT%2FcclYYAdFPNCRCeBAnasbhtEOzX5%2FDcWvEZhxRThO3YeYqCal1AVIKeuOBzTCbtNHFGWGdbKoRTiBbDoal0i16Er80QEoTIjphgY1caP98Do4JTOp0QP4UAWky5q9cGuKj25C%2F7f6vOFd4tXJlgmcaHr1cd%2FhBPJnoHZCBDbJmQbI46MujvBEUYjqQVdnfYvHFqePWWYQoK%2FiCxS7SZItK3mzfh2Nwy3q%2F8jPXcf5DdxwnhKeqB6Q0gt69aVkQp2NMP%2Fm7tMGOqUB%2B97BM0uAvAnJWcNlEclA%2BwBB4W3dJpaoVIvWn2unRMw651dIzDFX%2FLeFX5zn907YWvPmYq7deZwu4iLsVZnHS7fBh2xis8FXiB%2BLx%2BW0txuVE03EpeYSye9W5%2Fl%2Fkqw6vjvr6oCCmo6NZw9aPhBKgx3lT9X93vjTQngBcP3z9WytWxmI8EDCM9yDWb857XsWicvmib5GjWvN1pyTinQRGk6aao%2Bv&X-Amz-Signature=1ca935e4a7312ac082aa7329883d811df8b497bc28657caed33ba64d89943ed5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDJBEKNH%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAbIPut8SHJmuGvC1HeK7zlqk6GbcNiMxuwF1zOvFI0QIgUxxRJ9HNM%2FDFVLSfUvjbp6KQ8p8vs8sUpddj91%2FUbXkqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDObCMLwKr5kMLIZdIircA6Ld2GbEJ%2FAEg9VvnKaa8Nw8t2ffFE7KSr2EPUumc79EUefYXmppvXi9d2RQxGT%2FWVVQSwivbIgQbH9FrA6CmzctvdQBtxCZB0iv30bPHlTHy%2BD%2FDWiIr8MKrsOZ3MeBGCBV7%2F3jGPpAf5IAfX804hbuMop1cvcgSQUoM%2BRXtCOJJUfIincC9iUkivvDdxjaj%2BW7wyweGBXeFmw%2FL41TA1MA0d1KbesKIP4jltlCMNdQdwivct6KlwpNmahtoPqFqF6vn9OvgUHBVfQlCsD%2BK4X6%2Bju7o2chBBwwCmSi17mzogiB6HRI5IHd%2FjLbC7AVqoiFC6GYY9URMoEBERGwOWFB%2FyZOhh%2Fjy7WTOSVc9vjVBSv6jey1cYpD%2FiBk7g7UszIEUZ6jo4ct1iBwd0AqPZW768V6kPKxipobA8sly1nxhlUvHI%2FcD9BtF9OTD2oKGisqJQbseI3t%2F7febXfXBv2X5r2RAk6X3hlXmS8pZfJ8vnZW4BKX0v8k7PcIgc6GKOe00PpRcfww4T6V5SLKqltiJ6CnPsCOP%2F5bNvXYoTPvjf76B0QqWMDr8m4NUwCYlkqiCZOieBZFhPCSGMK8DRYbxjYGXlYgBRPdKXfvcDBR0vbqihnwjIpx%2BlOtMJzm7tMGOqUBwr0aHt4YR64JJjffTwbTwd0xqEkl0tQ5SNyQ5H1dFYyBDEtnvfmjJKNiRoxrBXdLVWrIa30lx0wWW8GTRD%2FqeRUhhfW%2FNDm9QDfUQzff8yft4S66PzXS0bcg1xguSnsT8jpy9DyiWR%2Fusxint1T5RYiVqJYqMG2G992Y79WwkHu3OLba74RxFBUvUxgpMh97w5fsxSvXl6MaunKR33oVXNxw49Fq&X-Amz-Signature=83c28e34fbe82853dc611aa4fda5161aa07e6dd56a3bf01930df2bf0c464a6cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JVPL5YL%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9t8buUNIqqH0DFGETYT6PEYmpQ%2BFN6a1xghtK5bLH%2BAiEAiLSrhMu9%2FjoLiAjaTGEZjvo2WvEiPG0ev7I9kHgBxXoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYeqUgJHyHLQYaW9yrcAyjgWrFxaQiA60V8bySvjiuTwf6eSBimqCRsPUARIeEI9OYgSDrZXN%2FZgLTm8FzxmWT3430q8d1yazjm3PkQi7H%2F1ZE96knWsUpXW0Ti70oSkqWvaQHwmQK4Uy8xK9w9s82i0%2Fy4pw4v%2B%2Bckgjqri%2BUY4RcEAZLdXJ98JpxPl%2FwcnY7Iu%2BqIxjtxscsEI7w%2FWbzlhNfYI8tWyRK6Lv25G1DYy9Kab1ILJ3nVKYRigdxG4%2FMjmr4izspNnC5Maq2BVyD4tP2pi9MnpIPRiLCrmKkTRpisjT8QA%2BHJBfU7nd8IkeO6g1ZnTDVjaJuwyuDh4p3cayj4nV5BooxhXcGfULi%2BloNOoYCuebNNFOz%2FeA0oH2riM%2FCJmiTR9pT%2FcclYYAdFPNCRCeBAnasbhtEOzX5%2FDcWvEZhxRThO3YeYqCal1AVIKeuOBzTCbtNHFGWGdbKoRTiBbDoal0i16Er80QEoTIjphgY1caP98Do4JTOp0QP4UAWky5q9cGuKj25C%2F7f6vOFd4tXJlgmcaHr1cd%2FhBPJnoHZCBDbJmQbI46MujvBEUYjqQVdnfYvHFqePWWYQoK%2FiCxS7SZItK3mzfh2Nwy3q%2F8jPXcf5DdxwnhKeqB6Q0gt69aVkQp2NMP%2Fm7tMGOqUB%2B97BM0uAvAnJWcNlEclA%2BwBB4W3dJpaoVIvWn2unRMw651dIzDFX%2FLeFX5zn907YWvPmYq7deZwu4iLsVZnHS7fBh2xis8FXiB%2BLx%2BW0txuVE03EpeYSye9W5%2Fl%2Fkqw6vjvr6oCCmo6NZw9aPhBKgx3lT9X93vjTQngBcP3z9WytWxmI8EDCM9yDWb857XsWicvmib5GjWvN1pyTinQRGk6aao%2Bv&X-Amz-Signature=dcd0a1cdc328f7d72893f9b1c0aa77df04daa3bb000bd738033d8c07468987de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FQMGOSU%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1DVKjOsJJ8UE8FC7E9GAf6nFHZeAq68r8YnqwMGJEjwIhANHsB5YSR2nNQZmaT0SpRYGhNyWewbXjPCA5JPEzuZGeKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJUMCdTkeNywzIyEsq3AMza6bUZ%2Bnf1g2%2F7oVeB9okjaihKHqBBC6ccH3%2BY%2FeFwxDf54F%2B1Vb%2BQg%2BqnnoGs7gOX1gG8%2FBlpRUOFRpTfVriZ77RGYRVIc%2ByFIgnwrJNugPEBLHtKlB%2FjAID3CmSngyUsCDYNVZsENk7BosUutUB0%2BPZxXOupkL7m%2FWbTkxv5clLY3Xj8I6tNFAtt5o6fG0k6n9aQu5jJAVgEBDSEhtWbMfYC0KGgy%2BDkDqmNFwhqWXHytTqA0JG92J8IN4DUmvd4suFCPgG4pv5mSVTlpniHIzHGM%2BD71qSoO6gdhdFYmaqNlxXuEv8DPExFgU3%2BEuO65kfDANln9MFa8kn9RCVNkVtN16XzO%2BSs%2FEwzasTPm3%2BMf2i%2FEWgRHDIODPtBZFf4HOHJgm0tY935%2BiAan8xd1RMFOramL7pZn1x%2B4iBCfvNppqePr8HCGWXm5zbat4l1riRG8eAkmQ3OAZHsZigH7OYmENrXT%2Fyc%2BK0JQ4s1euB5HJx9A3vthd9XBfFvN%2FQzy6hP2OVrKSwoD6q26awvZoZXp8hGAbS16c0qHoNl4YLOwiTpH5ORJcmknAyw5u1s%2Fzb8o7jk1ORmg9dGnpzIWcIT6q1EgOhDO4FaWJWZdlI1OWHQtyy6HHTuTCP5%2B7TBjqkASC4yAEvtiAjsOCFdRx%2F1aQVj5p1JM9f%2BaI8qAqLdrIsCJlVIJE5Sp4l6g%2B3DMJxzdzxGz60fJuRt3yqNaCz9ze0%2FYt3hpfcSBYcD%2BWEeVg3yi%2BannSdPRLKBAV5m67yY3KzC%2BXa28hvWvY2Ivgw7mwn3XXmEGxxbJFW2iAL9OZZ9zHE6xabSFSg%2FIOV%2BJwG2aGlgPXpkCFuXTPIs7Uy%2BmSjdpoK&X-Amz-Signature=9e66a40c13b70b080641b0999f5afa0f694e9b181ca8f8f604a3c78a7f58c95a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JVPL5YL%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9t8buUNIqqH0DFGETYT6PEYmpQ%2BFN6a1xghtK5bLH%2BAiEAiLSrhMu9%2FjoLiAjaTGEZjvo2WvEiPG0ev7I9kHgBxXoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYeqUgJHyHLQYaW9yrcAyjgWrFxaQiA60V8bySvjiuTwf6eSBimqCRsPUARIeEI9OYgSDrZXN%2FZgLTm8FzxmWT3430q8d1yazjm3PkQi7H%2F1ZE96knWsUpXW0Ti70oSkqWvaQHwmQK4Uy8xK9w9s82i0%2Fy4pw4v%2B%2Bckgjqri%2BUY4RcEAZLdXJ98JpxPl%2FwcnY7Iu%2BqIxjtxscsEI7w%2FWbzlhNfYI8tWyRK6Lv25G1DYy9Kab1ILJ3nVKYRigdxG4%2FMjmr4izspNnC5Maq2BVyD4tP2pi9MnpIPRiLCrmKkTRpisjT8QA%2BHJBfU7nd8IkeO6g1ZnTDVjaJuwyuDh4p3cayj4nV5BooxhXcGfULi%2BloNOoYCuebNNFOz%2FeA0oH2riM%2FCJmiTR9pT%2FcclYYAdFPNCRCeBAnasbhtEOzX5%2FDcWvEZhxRThO3YeYqCal1AVIKeuOBzTCbtNHFGWGdbKoRTiBbDoal0i16Er80QEoTIjphgY1caP98Do4JTOp0QP4UAWky5q9cGuKj25C%2F7f6vOFd4tXJlgmcaHr1cd%2FhBPJnoHZCBDbJmQbI46MujvBEUYjqQVdnfYvHFqePWWYQoK%2FiCxS7SZItK3mzfh2Nwy3q%2F8jPXcf5DdxwnhKeqB6Q0gt69aVkQp2NMP%2Fm7tMGOqUB%2B97BM0uAvAnJWcNlEclA%2BwBB4W3dJpaoVIvWn2unRMw651dIzDFX%2FLeFX5zn907YWvPmYq7deZwu4iLsVZnHS7fBh2xis8FXiB%2BLx%2BW0txuVE03EpeYSye9W5%2Fl%2Fkqw6vjvr6oCCmo6NZw9aPhBKgx3lT9X93vjTQngBcP3z9WytWxmI8EDCM9yDWb857XsWicvmib5GjWvN1pyTinQRGk6aao%2Bv&X-Amz-Signature=c61944665611436d04ba8d76062fd6f5c581f13ce9700c35f0aa385168a06817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUHUCF7%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7h%2BJWiar3sJqE%2FXudQOXVTc5NyrcbmAsqMcsz3NzopAIhALDmfo4xdAvNVWu1okMa03O4W9oIsTIWz6mRMLmkHpH3KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjA1Az3GAdX8C5y70q3APN47P%2BcETxvQtOK04d2flVQ5U4k%2Fn%2BOjkNd9IWJUt2b5JDzdZoAMGW85XysTLHTsnNoWJF81YuL8PY9mcBieH88MapEgPEZTR0osTLzaTp9yUEBBwhEssi5mAKhPIDEUdjC5IFCv80gAgRGicuz5L4dJ0g4X0u168skfGUTYg9yb4KdutrOgncJeXZBkugmcZ5FOaQmBXgsdT4MLPRWMxxXX0LSY0rlEFkedrNlHfVFVEp2MyXzPIik6KUj7oaeYELiQg4OCUieqjK7oWyLCyF7%2FFUjunJI0a8FBJPA712IDinhcx%2FiXIekuMUxDAdrX4ejvfw7%2B6K%2FEzJIrxWBWCezwaB1i0V7NEy0obg8yViFX%2FXWEY4icFW0hjyA2epqjB9fILWdDWDh%2BsADZqWjDOJ1%2FS2daozIqgWCXBkx3SsQqr6I%2BV%2FgJAXvyMvUZq9924cPSx%2B4RIvHe7yzmf7ri5NgDvmYjejc3POFEugrkkvf5jQZWx34VHJKz9rrU%2BPWejD0Kq%2FqyQIU%2BgVWNaOXRntvVgHNFLYdXVpFm68X2vdej1BUE4lPNWHSeUJWUa1brECNgOjsyE3dEp6ATMNicaM5CMHoIHcSKAnZ5bQKy5P16Bk%2BsOCbFxLbkPR1jCP5%2B7TBjqkAaooaarEaYHW6HDV%2FRr62LaM6wbM0ELh6EtP1KxMQpQDbAacxBRKiS2s740Snq2b8foDamPB6VUrEbjOv1cWcnqNJtjVb%2FVGgWn1M%2Bzz%2FkHF3bUmpVouW6QzzAGkN%2Fc7In1pV9urVaHZdhfWtGtlRuBlRDD4u20d8LQ0Ttphwfp0FaeKBmUnAeZHGg4aAnAaaV%2FHJKtf1kpojK6Fi2ZdGj0ccXi8&X-Amz-Signature=56d634419b814ce0eb96ff9c048f977ed9aefe65d1b3cf74d5b8b9967793f3e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FN7M63I%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAtTCKD6Dk7FHP%2FGqoqM00RubVmvAnoJcs2kmlNzgZ0AiEA%2Bg%2BWNNGuXU8NDIjaWMES6ALAv4DRvqhr8A%2BxK54XudwqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDON3waXBKfP6%2FcXcHircA1pn7DGh4VYtdqN2Dvh3RZsN8zbzBuqh2B9QHFJ3Gvu8BQAoGrbuJQqotJ26Ii7EoydSXBoRysxK9DfJcKW%2Bd58SZq568a3bbuVkowcGQi2%2FQ0Vqbf0YjLMC0WpBNcnGKagciSb42W%2B%2FtGJbcLJgsTjoIa0t9ZS2h2i08HOdRNNUMtD96haKvEOCobI3yvskCqxhZnkRF8Qowbf2EnhRQfWoxKMFQYdzom1R0X7D9UcXGa38ioc3B40aIgXzthGdxehjfgudB%2BUndqDwmr1pHSjaPmFcRAA6EoaGiBrlzSGVGutOkVLrq9%2BEF3EADNq%2FSOCtlZEK75E5LKHA2RsS4phzTi1c%2FdhyNPB5EkYBhRc3Mg5qccdh%2BuMqqG6Lj7jr3dIC6Y%2FZKyO27Dyj9H0nu%2BiOqiGvxyKMQOsj%2FqQuNaEHwBLDciC9NhB5nusF%2Bl7jl4yVuaiclOzYlprDlU6AKrWgG%2B%2FjgNeiFeeygTt%2BYFO4YH5SOoW6i31QuDoWtn6jGEGZI541lC4kTQeOA3HwDvqfRxUjRxtseK%2BLX5VABguA53Ljj08AYMSEUB61Kxyy7%2FzI3gp0oMmtWRHnnO%2Br%2BQj5t0gsfxQH%2FTUWJD9guSaSjilxw%2B4pIE0aqsywMKjm7tMGOqUBrTrCqGBXPoHs7JFqjL%2Bzv5cQmVjJevWr2zkBsSXm0mal7ZjISoevvVdVE4qQ%2B5MxTE4KbDvAQM1TwuGQQTmOPG93soAGFyVMvA7aslRnpyozXLwtesip8aG7hBeFOpK6zIjr3oTbCZqQw7hy4BLCm0zdG7JI3O9tfDRn1tmyqDUz%2BUj%2F7DFgpoAfgASOam2rei6wueue8pynKMo69UfGSEAuCOWY&X-Amz-Signature=b1503a9e1311483b3a228c72b29897acacc844cede145a6362fb361c1233d3d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UPCNKKS%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUFJHAQkawFmMGBx1H%2Fh1H%2B1UBRP942%2FO6%2BFWP%2BI1WtwIgauxRYCeskUeIT5eCRdn2F4ei4IbyK5pnEOCRXhqhk6cqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOB8s3oDFQorP5PILSrcA3XGFGTEDA7cqPzdMclqs%2BEiV7Xs8OEebpr56mMCg3RX%2F8UCSeeXngIOo4vkFStzx0B8Ybfhus2fsPPTM2rnAHZ8oZdwjnAYWjghX6XkXLyJs4Tkux9emdFPKC%2FlQ4AT2CAlcE0SDBq031%2FImRps4w5YJURxv5Drwtz6Z9yY31WfCR8u4gBQfWBJAuBy%2BXCFzpzWxuoK%2FkBBHcSiEaU5P5JvT3S3jh%2FIZB4zRuzT6fMvH57VOFFdinbw%2F7542JZUFjlzoKaxdEWpsxphzLedbrrr4Yb67fOG%2BG8szIxvLnVooghP8K%2FIbp5h9yBwgsV%2Fq8QybfaKP%2F5H5aYGaz7wEpSZjCxH8rORCL4pXTxEqnrHRFKU2YdGfxITsapp4fKeGjg7e8cbRCdJiu%2B%2F0EnXtpxbvJNmnSY5FvBQtrNx9KWInFK7toOtLf9Uz5wtbnQlC94cUoPwrSPidvQ9jaSfJxrIKpcMBiHkKIXKI%2FZGQyCW0yujqFd%2FJXvIvg9bhz1K8eYnfBEm%2FSNFoMMYkWVOCFIbNFzY7qm55ImfzmHbDp%2BO9I92BqMlFldTPWhCw%2BgIZqXx%2BmtDFInBsLgqOK2i1BCltPMLG7dbCJ54g%2FdW48S29T5QO7VcdXbfwZ6PMIDn7tMGOqUBze3QpelQsoc1lia763P9kBDPSyLfCDggQ65IB3PhbFj1rbqtBM%2Bz2EO1M%2FEe1hjHx6CiOF%2F%2FT6YfwczYLvDsI5xYjLg6Q0qdYxnSwaHG0gC0%2BzZGqL8jrJvfe5bs5JGmEdQ2sDOp%2FfN02FofKEOoWecW5oXasFai682yXg1iiue7Mey7SngLaz%2FnBN50q1xf64WkzCgPUjCWVDMmpny5P6I4Ss1p&X-Amz-Signature=4d2fa3a9d38561b942bfd45ac7902e5927b79cac579557cd70b27c0cc6e1113a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JVPL5YL%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9t8buUNIqqH0DFGETYT6PEYmpQ%2BFN6a1xghtK5bLH%2BAiEAiLSrhMu9%2FjoLiAjaTGEZjvo2WvEiPG0ev7I9kHgBxXoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYeqUgJHyHLQYaW9yrcAyjgWrFxaQiA60V8bySvjiuTwf6eSBimqCRsPUARIeEI9OYgSDrZXN%2FZgLTm8FzxmWT3430q8d1yazjm3PkQi7H%2F1ZE96knWsUpXW0Ti70oSkqWvaQHwmQK4Uy8xK9w9s82i0%2Fy4pw4v%2B%2Bckgjqri%2BUY4RcEAZLdXJ98JpxPl%2FwcnY7Iu%2BqIxjtxscsEI7w%2FWbzlhNfYI8tWyRK6Lv25G1DYy9Kab1ILJ3nVKYRigdxG4%2FMjmr4izspNnC5Maq2BVyD4tP2pi9MnpIPRiLCrmKkTRpisjT8QA%2BHJBfU7nd8IkeO6g1ZnTDVjaJuwyuDh4p3cayj4nV5BooxhXcGfULi%2BloNOoYCuebNNFOz%2FeA0oH2riM%2FCJmiTR9pT%2FcclYYAdFPNCRCeBAnasbhtEOzX5%2FDcWvEZhxRThO3YeYqCal1AVIKeuOBzTCbtNHFGWGdbKoRTiBbDoal0i16Er80QEoTIjphgY1caP98Do4JTOp0QP4UAWky5q9cGuKj25C%2F7f6vOFd4tXJlgmcaHr1cd%2FhBPJnoHZCBDbJmQbI46MujvBEUYjqQVdnfYvHFqePWWYQoK%2FiCxS7SZItK3mzfh2Nwy3q%2F8jPXcf5DdxwnhKeqB6Q0gt69aVkQp2NMP%2Fm7tMGOqUB%2B97BM0uAvAnJWcNlEclA%2BwBB4W3dJpaoVIvWn2unRMw651dIzDFX%2FLeFX5zn907YWvPmYq7deZwu4iLsVZnHS7fBh2xis8FXiB%2BLx%2BW0txuVE03EpeYSye9W5%2Fl%2Fkqw6vjvr6oCCmo6NZw9aPhBKgx3lT9X93vjTQngBcP3z9WytWxmI8EDCM9yDWb857XsWicvmib5GjWvN1pyTinQRGk6aao%2Bv&X-Amz-Signature=c97367238c2a18f080156aae54a4001f64dd1f446ddaa8b85aa2b2bd1cdde07e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JVPL5YL%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9t8buUNIqqH0DFGETYT6PEYmpQ%2BFN6a1xghtK5bLH%2BAiEAiLSrhMu9%2FjoLiAjaTGEZjvo2WvEiPG0ev7I9kHgBxXoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYeqUgJHyHLQYaW9yrcAyjgWrFxaQiA60V8bySvjiuTwf6eSBimqCRsPUARIeEI9OYgSDrZXN%2FZgLTm8FzxmWT3430q8d1yazjm3PkQi7H%2F1ZE96knWsUpXW0Ti70oSkqWvaQHwmQK4Uy8xK9w9s82i0%2Fy4pw4v%2B%2Bckgjqri%2BUY4RcEAZLdXJ98JpxPl%2FwcnY7Iu%2BqIxjtxscsEI7w%2FWbzlhNfYI8tWyRK6Lv25G1DYy9Kab1ILJ3nVKYRigdxG4%2FMjmr4izspNnC5Maq2BVyD4tP2pi9MnpIPRiLCrmKkTRpisjT8QA%2BHJBfU7nd8IkeO6g1ZnTDVjaJuwyuDh4p3cayj4nV5BooxhXcGfULi%2BloNOoYCuebNNFOz%2FeA0oH2riM%2FCJmiTR9pT%2FcclYYAdFPNCRCeBAnasbhtEOzX5%2FDcWvEZhxRThO3YeYqCal1AVIKeuOBzTCbtNHFGWGdbKoRTiBbDoal0i16Er80QEoTIjphgY1caP98Do4JTOp0QP4UAWky5q9cGuKj25C%2F7f6vOFd4tXJlgmcaHr1cd%2FhBPJnoHZCBDbJmQbI46MujvBEUYjqQVdnfYvHFqePWWYQoK%2FiCxS7SZItK3mzfh2Nwy3q%2F8jPXcf5DdxwnhKeqB6Q0gt69aVkQp2NMP%2Fm7tMGOqUB%2B97BM0uAvAnJWcNlEclA%2BwBB4W3dJpaoVIvWn2unRMw651dIzDFX%2FLeFX5zn907YWvPmYq7deZwu4iLsVZnHS7fBh2xis8FXiB%2BLx%2BW0txuVE03EpeYSye9W5%2Fl%2Fkqw6vjvr6oCCmo6NZw9aPhBKgx3lT9X93vjTQngBcP3z9WytWxmI8EDCM9yDWb857XsWicvmib5GjWvN1pyTinQRGk6aao%2Bv&X-Amz-Signature=7e3badcd3bb5d76d3649a51dcec9a9df6c18ebe8fea5bf4279e4826c0d56d478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LX6ZSH%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmZ7N4730kFJEMethu4QFJr7cZBSBGlNOkHlQKXckFmgIhAMzdjOIhp54HC5tJiVMfPEKNJr2KU4Yh0Y3c5QdABdgqKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsY2NBCm7GOnNDfNgq3APacaJ0hpQxbZGtkuGBW0p3ib2coOXjp%2BQaqFqBDZX5JjyRl9e%2F9eEPyjybHv90EFQO503Rnvn2ox0ZRfko38fncTLMqNSmLN09p2xfYhfknsM5%2BLIB8zDFzdja9F5ZRHcu9P6ij0viDFKjtj2mK50foN%2B%2FJJKKcBEyLPvovF6862UdJoztsUQBhCpLgKZouRxHiVczGNhbdjQW%2BEybnPS99uXackRavyL04XLlIjVP5pI4gxLCAKJYur%2FUkEKlQY3ZypY4BHpRS5jYUDS0I%2BrsVri8ZWvbFvUXXIvjsFwpJdpfb7wS1u9R0y71CVM%2BzRXui4WMFhUqUeTrRB3v86J3iTNmslKgri32JBaXkUI1JaWxL7ZTLqcgHAAOYSgK9%2B93zu05uCCjej6GrlEW6F4rv7n8Bpoc4QGFMmO3UuqAynO%2FkiZx9TNbYRxbHgsIXCgkOjOF7ziwnQUNU0pG66d%2BhckKa61w3wmBb2LUT%2FCG5y9wYDuXR14JDnty0yfmBXtRGvkzL4dgr0dqHAfwh%2F%2FHfmhmMcrMuSSKqrTQVkq1h8Z%2BrnLY5BwP8lWAP144StpZfkIw4BgsOY6cezqKVspZ%2F8ynjWP50h6UseHCRtX0XWqUTNzMl%2FBSHPkoUjD%2B5u7TBjqkAUa5o0nzoPnnjWBPGnn2PwGdeSd9D2aHiuayCrvcbek5Y%2BN9CkTIYwHeSBQM%2B1clxhZFpYEmIdxU0wBL6J0tKFlxvndGRcnvSXcIgRccs0M5%2FOYcZ5GZlxZJgBfuiCjRWEsNyQQr5EbXulvW%2BnJwAALdW85TNCVrLHFMrTCceX5buwJX9uKUluYJxpVzOUMVcVWUihDxnS%2FcstsO%2BUO2vHwGF3NU&X-Amz-Signature=b92b5325ccefcf208ddfac7e6b7b975ae0e5b41e0b47f1c306790eaa5aff6cdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LX6ZSH%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmZ7N4730kFJEMethu4QFJr7cZBSBGlNOkHlQKXckFmgIhAMzdjOIhp54HC5tJiVMfPEKNJr2KU4Yh0Y3c5QdABdgqKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsY2NBCm7GOnNDfNgq3APacaJ0hpQxbZGtkuGBW0p3ib2coOXjp%2BQaqFqBDZX5JjyRl9e%2F9eEPyjybHv90EFQO503Rnvn2ox0ZRfko38fncTLMqNSmLN09p2xfYhfknsM5%2BLIB8zDFzdja9F5ZRHcu9P6ij0viDFKjtj2mK50foN%2B%2FJJKKcBEyLPvovF6862UdJoztsUQBhCpLgKZouRxHiVczGNhbdjQW%2BEybnPS99uXackRavyL04XLlIjVP5pI4gxLCAKJYur%2FUkEKlQY3ZypY4BHpRS5jYUDS0I%2BrsVri8ZWvbFvUXXIvjsFwpJdpfb7wS1u9R0y71CVM%2BzRXui4WMFhUqUeTrRB3v86J3iTNmslKgri32JBaXkUI1JaWxL7ZTLqcgHAAOYSgK9%2B93zu05uCCjej6GrlEW6F4rv7n8Bpoc4QGFMmO3UuqAynO%2FkiZx9TNbYRxbHgsIXCgkOjOF7ziwnQUNU0pG66d%2BhckKa61w3wmBb2LUT%2FCG5y9wYDuXR14JDnty0yfmBXtRGvkzL4dgr0dqHAfwh%2F%2FHfmhmMcrMuSSKqrTQVkq1h8Z%2BrnLY5BwP8lWAP144StpZfkIw4BgsOY6cezqKVspZ%2F8ynjWP50h6UseHCRtX0XWqUTNzMl%2FBSHPkoUjD%2B5u7TBjqkAUa5o0nzoPnnjWBPGnn2PwGdeSd9D2aHiuayCrvcbek5Y%2BN9CkTIYwHeSBQM%2B1clxhZFpYEmIdxU0wBL6J0tKFlxvndGRcnvSXcIgRccs0M5%2FOYcZ5GZlxZJgBfuiCjRWEsNyQQr5EbXulvW%2BnJwAALdW85TNCVrLHFMrTCceX5buwJX9uKUluYJxpVzOUMVcVWUihDxnS%2FcstsO%2BUO2vHwGF3NU&X-Amz-Signature=4998c5f00f29eb30ce056b3ffe4b1884b06a1a74e657f426ccd9a39823ea48c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LX6ZSH%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmZ7N4730kFJEMethu4QFJr7cZBSBGlNOkHlQKXckFmgIhAMzdjOIhp54HC5tJiVMfPEKNJr2KU4Yh0Y3c5QdABdgqKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsY2NBCm7GOnNDfNgq3APacaJ0hpQxbZGtkuGBW0p3ib2coOXjp%2BQaqFqBDZX5JjyRl9e%2F9eEPyjybHv90EFQO503Rnvn2ox0ZRfko38fncTLMqNSmLN09p2xfYhfknsM5%2BLIB8zDFzdja9F5ZRHcu9P6ij0viDFKjtj2mK50foN%2B%2FJJKKcBEyLPvovF6862UdJoztsUQBhCpLgKZouRxHiVczGNhbdjQW%2BEybnPS99uXackRavyL04XLlIjVP5pI4gxLCAKJYur%2FUkEKlQY3ZypY4BHpRS5jYUDS0I%2BrsVri8ZWvbFvUXXIvjsFwpJdpfb7wS1u9R0y71CVM%2BzRXui4WMFhUqUeTrRB3v86J3iTNmslKgri32JBaXkUI1JaWxL7ZTLqcgHAAOYSgK9%2B93zu05uCCjej6GrlEW6F4rv7n8Bpoc4QGFMmO3UuqAynO%2FkiZx9TNbYRxbHgsIXCgkOjOF7ziwnQUNU0pG66d%2BhckKa61w3wmBb2LUT%2FCG5y9wYDuXR14JDnty0yfmBXtRGvkzL4dgr0dqHAfwh%2F%2FHfmhmMcrMuSSKqrTQVkq1h8Z%2BrnLY5BwP8lWAP144StpZfkIw4BgsOY6cezqKVspZ%2F8ynjWP50h6UseHCRtX0XWqUTNzMl%2FBSHPkoUjD%2B5u7TBjqkAUa5o0nzoPnnjWBPGnn2PwGdeSd9D2aHiuayCrvcbek5Y%2BN9CkTIYwHeSBQM%2B1clxhZFpYEmIdxU0wBL6J0tKFlxvndGRcnvSXcIgRccs0M5%2FOYcZ5GZlxZJgBfuiCjRWEsNyQQr5EbXulvW%2BnJwAALdW85TNCVrLHFMrTCceX5buwJX9uKUluYJxpVzOUMVcVWUihDxnS%2FcstsO%2BUO2vHwGF3NU&X-Amz-Signature=b5aecf5f5881e542769bee10f7804355e7c771ba0a6a30ec34fa5ad3ff4e884b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LX6ZSH%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmZ7N4730kFJEMethu4QFJr7cZBSBGlNOkHlQKXckFmgIhAMzdjOIhp54HC5tJiVMfPEKNJr2KU4Yh0Y3c5QdABdgqKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsY2NBCm7GOnNDfNgq3APacaJ0hpQxbZGtkuGBW0p3ib2coOXjp%2BQaqFqBDZX5JjyRl9e%2F9eEPyjybHv90EFQO503Rnvn2ox0ZRfko38fncTLMqNSmLN09p2xfYhfknsM5%2BLIB8zDFzdja9F5ZRHcu9P6ij0viDFKjtj2mK50foN%2B%2FJJKKcBEyLPvovF6862UdJoztsUQBhCpLgKZouRxHiVczGNhbdjQW%2BEybnPS99uXackRavyL04XLlIjVP5pI4gxLCAKJYur%2FUkEKlQY3ZypY4BHpRS5jYUDS0I%2BrsVri8ZWvbFvUXXIvjsFwpJdpfb7wS1u9R0y71CVM%2BzRXui4WMFhUqUeTrRB3v86J3iTNmslKgri32JBaXkUI1JaWxL7ZTLqcgHAAOYSgK9%2B93zu05uCCjej6GrlEW6F4rv7n8Bpoc4QGFMmO3UuqAynO%2FkiZx9TNbYRxbHgsIXCgkOjOF7ziwnQUNU0pG66d%2BhckKa61w3wmBb2LUT%2FCG5y9wYDuXR14JDnty0yfmBXtRGvkzL4dgr0dqHAfwh%2F%2FHfmhmMcrMuSSKqrTQVkq1h8Z%2BrnLY5BwP8lWAP144StpZfkIw4BgsOY6cezqKVspZ%2F8ynjWP50h6UseHCRtX0XWqUTNzMl%2FBSHPkoUjD%2B5u7TBjqkAUa5o0nzoPnnjWBPGnn2PwGdeSd9D2aHiuayCrvcbek5Y%2BN9CkTIYwHeSBQM%2B1clxhZFpYEmIdxU0wBL6J0tKFlxvndGRcnvSXcIgRccs0M5%2FOYcZ5GZlxZJgBfuiCjRWEsNyQQr5EbXulvW%2BnJwAALdW85TNCVrLHFMrTCceX5buwJX9uKUluYJxpVzOUMVcVWUihDxnS%2FcstsO%2BUO2vHwGF3NU&X-Amz-Signature=f2e3bacf7da848fca15cef7a757f664de6c9f94203c8ee7b1e6a077fa0213e15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXSS2DOP%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfFhHFaFoNaLe9t6zerd8D7n4FXhpiJ5lK3EKoKUJU2AIhAO1umPsww9y0TmWVKtaFYDNPli%2FBO4aAsJe63xizZhxDKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY5qfxUmjEDULlVA8q3AOkBdRxgE3w8TG%2FPcN6iA7s4YnAMbaQ3TKePqD4pOnl7Q1vDYyWFhtyGUty2ddLmHLvephAIyQu0aGmVvWydmgzdedYziSy2p%2FHVdIdA5b1fLscuBUL861zDAt2Jzcxml38bnZYzbJbW5x6lmGA3g4ZuqLjuhNjPM4Z2aSNn%2FLaYfzK3p8d%2B8f0pz819x1gaWvGErntEEXgXWfA8oCA6LvgAkpGrT8nbOdOBwnLCmHUoCnCogzF66tW%2BOESWsZ6iI4K6hTpkuu%2FUuwc4%2BJ2KPvIAIog1nLdZA65%2F%2BgBlD5655VsXGvYzf7nPMV6ItulbKe8DL8mxU%2FKEj%2BJsN6dljxQ%2BZY91f5xBy1EqA238WLw0MMt%2B8kyl3cy1DUY5vdEIx5CaPnoWOFGFxpgg3AO4%2BkzF%2F24iyAssPYLz7Kd%2BStvE19KrouaMF1Zcgdtb6c3gWEQEPO7WVdbn7SodNnjevfEpV%2Fgj6jw5nqLXkBNgDXp8ypBjUH5tRu1tJH9PkQb3om3NKsDgeL%2FwMWyGNh%2Fgud9j1MfZ1b34YYYQBDcSRRXYlDvQS3czGSb6H%2BHs7u425Uj98V2rd6%2BhFK9x24tvOVWMLGoN3mPrW69YT%2FOChTiKnPk2bMYyZYO%2BnyJtzCq6u7TBjqkAY2XuKvylBTVKjOmzrydgiQqQS0bF00pnhkkgO1k2wYrH2KXjT64cAVSfXXLjeaqwHEHUFdqpjqrrlpqHtG4vNxUZjvwgVKo8Epm3H4%2B6NEzm0Fpo3Ws5A9LbMbNQZKIdvl66X%2BbB%2FOAdOOL8KBVemF6G9SIxnEzoDiuqvcDK0ikzWw1E178bGI0%2BNPA1lYEgZpaxKoUHm1udIbLQCTdj3CfxCSP&X-Amz-Signature=7d47f7d57e29f7041d1171b7fc04d3bb769f7599f69b4a12cc66a5f5765625fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LX6ZSH%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmZ7N4730kFJEMethu4QFJr7cZBSBGlNOkHlQKXckFmgIhAMzdjOIhp54HC5tJiVMfPEKNJr2KU4Yh0Y3c5QdABdgqKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsY2NBCm7GOnNDfNgq3APacaJ0hpQxbZGtkuGBW0p3ib2coOXjp%2BQaqFqBDZX5JjyRl9e%2F9eEPyjybHv90EFQO503Rnvn2ox0ZRfko38fncTLMqNSmLN09p2xfYhfknsM5%2BLIB8zDFzdja9F5ZRHcu9P6ij0viDFKjtj2mK50foN%2B%2FJJKKcBEyLPvovF6862UdJoztsUQBhCpLgKZouRxHiVczGNhbdjQW%2BEybnPS99uXackRavyL04XLlIjVP5pI4gxLCAKJYur%2FUkEKlQY3ZypY4BHpRS5jYUDS0I%2BrsVri8ZWvbFvUXXIvjsFwpJdpfb7wS1u9R0y71CVM%2BzRXui4WMFhUqUeTrRB3v86J3iTNmslKgri32JBaXkUI1JaWxL7ZTLqcgHAAOYSgK9%2B93zu05uCCjej6GrlEW6F4rv7n8Bpoc4QGFMmO3UuqAynO%2FkiZx9TNbYRxbHgsIXCgkOjOF7ziwnQUNU0pG66d%2BhckKa61w3wmBb2LUT%2FCG5y9wYDuXR14JDnty0yfmBXtRGvkzL4dgr0dqHAfwh%2F%2FHfmhmMcrMuSSKqrTQVkq1h8Z%2BrnLY5BwP8lWAP144StpZfkIw4BgsOY6cezqKVspZ%2F8ynjWP50h6UseHCRtX0XWqUTNzMl%2FBSHPkoUjD%2B5u7TBjqkAUa5o0nzoPnnjWBPGnn2PwGdeSd9D2aHiuayCrvcbek5Y%2BN9CkTIYwHeSBQM%2B1clxhZFpYEmIdxU0wBL6J0tKFlxvndGRcnvSXcIgRccs0M5%2FOYcZ5GZlxZJgBfuiCjRWEsNyQQr5EbXulvW%2BnJwAALdW85TNCVrLHFMrTCceX5buwJX9uKUluYJxpVzOUMVcVWUihDxnS%2FcstsO%2BUO2vHwGF3NU&X-Amz-Signature=3850c8bb24030897c8f56478194c73cca98570b3d06d832648a358f5f8a1e1b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LX6ZSH%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmZ7N4730kFJEMethu4QFJr7cZBSBGlNOkHlQKXckFmgIhAMzdjOIhp54HC5tJiVMfPEKNJr2KU4Yh0Y3c5QdABdgqKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsY2NBCm7GOnNDfNgq3APacaJ0hpQxbZGtkuGBW0p3ib2coOXjp%2BQaqFqBDZX5JjyRl9e%2F9eEPyjybHv90EFQO503Rnvn2ox0ZRfko38fncTLMqNSmLN09p2xfYhfknsM5%2BLIB8zDFzdja9F5ZRHcu9P6ij0viDFKjtj2mK50foN%2B%2FJJKKcBEyLPvovF6862UdJoztsUQBhCpLgKZouRxHiVczGNhbdjQW%2BEybnPS99uXackRavyL04XLlIjVP5pI4gxLCAKJYur%2FUkEKlQY3ZypY4BHpRS5jYUDS0I%2BrsVri8ZWvbFvUXXIvjsFwpJdpfb7wS1u9R0y71CVM%2BzRXui4WMFhUqUeTrRB3v86J3iTNmslKgri32JBaXkUI1JaWxL7ZTLqcgHAAOYSgK9%2B93zu05uCCjej6GrlEW6F4rv7n8Bpoc4QGFMmO3UuqAynO%2FkiZx9TNbYRxbHgsIXCgkOjOF7ziwnQUNU0pG66d%2BhckKa61w3wmBb2LUT%2FCG5y9wYDuXR14JDnty0yfmBXtRGvkzL4dgr0dqHAfwh%2F%2FHfmhmMcrMuSSKqrTQVkq1h8Z%2BrnLY5BwP8lWAP144StpZfkIw4BgsOY6cezqKVspZ%2F8ynjWP50h6UseHCRtX0XWqUTNzMl%2FBSHPkoUjD%2B5u7TBjqkAUa5o0nzoPnnjWBPGnn2PwGdeSd9D2aHiuayCrvcbek5Y%2BN9CkTIYwHeSBQM%2B1clxhZFpYEmIdxU0wBL6J0tKFlxvndGRcnvSXcIgRccs0M5%2FOYcZ5GZlxZJgBfuiCjRWEsNyQQr5EbXulvW%2BnJwAALdW85TNCVrLHFMrTCceX5buwJX9uKUluYJxpVzOUMVcVWUihDxnS%2FcstsO%2BUO2vHwGF3NU&X-Amz-Signature=c9b3e78e47b73993c1b5944b5cd40399dd5ab8ea599b2b0eb37600b406688888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LX6ZSH%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmZ7N4730kFJEMethu4QFJr7cZBSBGlNOkHlQKXckFmgIhAMzdjOIhp54HC5tJiVMfPEKNJr2KU4Yh0Y3c5QdABdgqKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsY2NBCm7GOnNDfNgq3APacaJ0hpQxbZGtkuGBW0p3ib2coOXjp%2BQaqFqBDZX5JjyRl9e%2F9eEPyjybHv90EFQO503Rnvn2ox0ZRfko38fncTLMqNSmLN09p2xfYhfknsM5%2BLIB8zDFzdja9F5ZRHcu9P6ij0viDFKjtj2mK50foN%2B%2FJJKKcBEyLPvovF6862UdJoztsUQBhCpLgKZouRxHiVczGNhbdjQW%2BEybnPS99uXackRavyL04XLlIjVP5pI4gxLCAKJYur%2FUkEKlQY3ZypY4BHpRS5jYUDS0I%2BrsVri8ZWvbFvUXXIvjsFwpJdpfb7wS1u9R0y71CVM%2BzRXui4WMFhUqUeTrRB3v86J3iTNmslKgri32JBaXkUI1JaWxL7ZTLqcgHAAOYSgK9%2B93zu05uCCjej6GrlEW6F4rv7n8Bpoc4QGFMmO3UuqAynO%2FkiZx9TNbYRxbHgsIXCgkOjOF7ziwnQUNU0pG66d%2BhckKa61w3wmBb2LUT%2FCG5y9wYDuXR14JDnty0yfmBXtRGvkzL4dgr0dqHAfwh%2F%2FHfmhmMcrMuSSKqrTQVkq1h8Z%2BrnLY5BwP8lWAP144StpZfkIw4BgsOY6cezqKVspZ%2F8ynjWP50h6UseHCRtX0XWqUTNzMl%2FBSHPkoUjD%2B5u7TBjqkAUa5o0nzoPnnjWBPGnn2PwGdeSd9D2aHiuayCrvcbek5Y%2BN9CkTIYwHeSBQM%2B1clxhZFpYEmIdxU0wBL6J0tKFlxvndGRcnvSXcIgRccs0M5%2FOYcZ5GZlxZJgBfuiCjRWEsNyQQr5EbXulvW%2BnJwAALdW85TNCVrLHFMrTCceX5buwJX9uKUluYJxpVzOUMVcVWUihDxnS%2FcstsO%2BUO2vHwGF3NU&X-Amz-Signature=a090d3a297238989267dd7f717fdc14a53b0fe8fb06020aa068caa619e41efe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LX6ZSH%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmZ7N4730kFJEMethu4QFJr7cZBSBGlNOkHlQKXckFmgIhAMzdjOIhp54HC5tJiVMfPEKNJr2KU4Yh0Y3c5QdABdgqKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsY2NBCm7GOnNDfNgq3APacaJ0hpQxbZGtkuGBW0p3ib2coOXjp%2BQaqFqBDZX5JjyRl9e%2F9eEPyjybHv90EFQO503Rnvn2ox0ZRfko38fncTLMqNSmLN09p2xfYhfknsM5%2BLIB8zDFzdja9F5ZRHcu9P6ij0viDFKjtj2mK50foN%2B%2FJJKKcBEyLPvovF6862UdJoztsUQBhCpLgKZouRxHiVczGNhbdjQW%2BEybnPS99uXackRavyL04XLlIjVP5pI4gxLCAKJYur%2FUkEKlQY3ZypY4BHpRS5jYUDS0I%2BrsVri8ZWvbFvUXXIvjsFwpJdpfb7wS1u9R0y71CVM%2BzRXui4WMFhUqUeTrRB3v86J3iTNmslKgri32JBaXkUI1JaWxL7ZTLqcgHAAOYSgK9%2B93zu05uCCjej6GrlEW6F4rv7n8Bpoc4QGFMmO3UuqAynO%2FkiZx9TNbYRxbHgsIXCgkOjOF7ziwnQUNU0pG66d%2BhckKa61w3wmBb2LUT%2FCG5y9wYDuXR14JDnty0yfmBXtRGvkzL4dgr0dqHAfwh%2F%2FHfmhmMcrMuSSKqrTQVkq1h8Z%2BrnLY5BwP8lWAP144StpZfkIw4BgsOY6cezqKVspZ%2F8ynjWP50h6UseHCRtX0XWqUTNzMl%2FBSHPkoUjD%2B5u7TBjqkAUa5o0nzoPnnjWBPGnn2PwGdeSd9D2aHiuayCrvcbek5Y%2BN9CkTIYwHeSBQM%2B1clxhZFpYEmIdxU0wBL6J0tKFlxvndGRcnvSXcIgRccs0M5%2FOYcZ5GZlxZJgBfuiCjRWEsNyQQr5EbXulvW%2BnJwAALdW85TNCVrLHFMrTCceX5buwJX9uKUluYJxpVzOUMVcVWUihDxnS%2FcstsO%2BUO2vHwGF3NU&X-Amz-Signature=72e198eef7890a571de3d3b0ff1b057f4c5faca0202c4498d42c480f120d9a2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LX6ZSH%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmZ7N4730kFJEMethu4QFJr7cZBSBGlNOkHlQKXckFmgIhAMzdjOIhp54HC5tJiVMfPEKNJr2KU4Yh0Y3c5QdABdgqKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsY2NBCm7GOnNDfNgq3APacaJ0hpQxbZGtkuGBW0p3ib2coOXjp%2BQaqFqBDZX5JjyRl9e%2F9eEPyjybHv90EFQO503Rnvn2ox0ZRfko38fncTLMqNSmLN09p2xfYhfknsM5%2BLIB8zDFzdja9F5ZRHcu9P6ij0viDFKjtj2mK50foN%2B%2FJJKKcBEyLPvovF6862UdJoztsUQBhCpLgKZouRxHiVczGNhbdjQW%2BEybnPS99uXackRavyL04XLlIjVP5pI4gxLCAKJYur%2FUkEKlQY3ZypY4BHpRS5jYUDS0I%2BrsVri8ZWvbFvUXXIvjsFwpJdpfb7wS1u9R0y71CVM%2BzRXui4WMFhUqUeTrRB3v86J3iTNmslKgri32JBaXkUI1JaWxL7ZTLqcgHAAOYSgK9%2B93zu05uCCjej6GrlEW6F4rv7n8Bpoc4QGFMmO3UuqAynO%2FkiZx9TNbYRxbHgsIXCgkOjOF7ziwnQUNU0pG66d%2BhckKa61w3wmBb2LUT%2FCG5y9wYDuXR14JDnty0yfmBXtRGvkzL4dgr0dqHAfwh%2F%2FHfmhmMcrMuSSKqrTQVkq1h8Z%2BrnLY5BwP8lWAP144StpZfkIw4BgsOY6cezqKVspZ%2F8ynjWP50h6UseHCRtX0XWqUTNzMl%2FBSHPkoUjD%2B5u7TBjqkAUa5o0nzoPnnjWBPGnn2PwGdeSd9D2aHiuayCrvcbek5Y%2BN9CkTIYwHeSBQM%2B1clxhZFpYEmIdxU0wBL6J0tKFlxvndGRcnvSXcIgRccs0M5%2FOYcZ5GZlxZJgBfuiCjRWEsNyQQr5EbXulvW%2BnJwAALdW85TNCVrLHFMrTCceX5buwJX9uKUluYJxpVzOUMVcVWUihDxnS%2FcstsO%2BUO2vHwGF3NU&X-Amz-Signature=bbb076279b96a879914aa792e5f043dffc51b4d421e55e876c4239b6d6397267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LX6ZSH%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmZ7N4730kFJEMethu4QFJr7cZBSBGlNOkHlQKXckFmgIhAMzdjOIhp54HC5tJiVMfPEKNJr2KU4Yh0Y3c5QdABdgqKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsY2NBCm7GOnNDfNgq3APacaJ0hpQxbZGtkuGBW0p3ib2coOXjp%2BQaqFqBDZX5JjyRl9e%2F9eEPyjybHv90EFQO503Rnvn2ox0ZRfko38fncTLMqNSmLN09p2xfYhfknsM5%2BLIB8zDFzdja9F5ZRHcu9P6ij0viDFKjtj2mK50foN%2B%2FJJKKcBEyLPvovF6862UdJoztsUQBhCpLgKZouRxHiVczGNhbdjQW%2BEybnPS99uXackRavyL04XLlIjVP5pI4gxLCAKJYur%2FUkEKlQY3ZypY4BHpRS5jYUDS0I%2BrsVri8ZWvbFvUXXIvjsFwpJdpfb7wS1u9R0y71CVM%2BzRXui4WMFhUqUeTrRB3v86J3iTNmslKgri32JBaXkUI1JaWxL7ZTLqcgHAAOYSgK9%2B93zu05uCCjej6GrlEW6F4rv7n8Bpoc4QGFMmO3UuqAynO%2FkiZx9TNbYRxbHgsIXCgkOjOF7ziwnQUNU0pG66d%2BhckKa61w3wmBb2LUT%2FCG5y9wYDuXR14JDnty0yfmBXtRGvkzL4dgr0dqHAfwh%2F%2FHfmhmMcrMuSSKqrTQVkq1h8Z%2BrnLY5BwP8lWAP144StpZfkIw4BgsOY6cezqKVspZ%2F8ynjWP50h6UseHCRtX0XWqUTNzMl%2FBSHPkoUjD%2B5u7TBjqkAUa5o0nzoPnnjWBPGnn2PwGdeSd9D2aHiuayCrvcbek5Y%2BN9CkTIYwHeSBQM%2B1clxhZFpYEmIdxU0wBL6J0tKFlxvndGRcnvSXcIgRccs0M5%2FOYcZ5GZlxZJgBfuiCjRWEsNyQQr5EbXulvW%2BnJwAALdW85TNCVrLHFMrTCceX5buwJX9uKUluYJxpVzOUMVcVWUihDxnS%2FcstsO%2BUO2vHwGF3NU&X-Amz-Signature=9d409cfa5b2548d80f91e39b89524204bb67a4b271772c5570f1a237b0931784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


