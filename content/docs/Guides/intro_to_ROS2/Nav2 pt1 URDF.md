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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2R42D4E%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDjHPQO3iGKACpAPYpC%2F4RTFyHcqq9wG47zHHmZjTuaFwIhAKveC1SiGWuh9DQAU9vzd2XjyAgM2mczqO4jCOPaLCnBKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxryqwpw2hDNouXhgq3AMkGRqfgbCGlhtjCgSzpGreYQIQIq412ZtM7B5BsQhZlk%2BsQo2SuEpMCUS7oL51CKlCRyZT9QDsTPkH%2B%2B%2BFrcQvlg3O2Iqlqk8J1QbnfEK%2FcAfUFcPXbXLKW6Jd73qp51abpLQhtG%2FJYfPWUzVA5n2osq9w5fwknb5WOjiFUD89nGiHHFRSnSOJn4jDCRfD6XgmHji8VtS2cHbUTI%2FzYR8OGZw5LuZ1jYsY%2FFprr0UgZVikXzO%2FNXMWC2v1ZxqI4McwOv9d9gj68mMik27Pjzw0vgVCpyC2cunJyb23Owy2U5MU1SGLFTlJFb2JmifU%2B0%2BJqvIWUuslSOIBbtJxygZOLXPG9QEjSn4JbwnPJkbKWhfMG3RgsMStV1LVz%2BlMTX5miD0IOkNoQaAU%2BYldSqFBxmnkRWiUVgdMKMTb6mQVhxOo%2BnN3eCIDflvdHb2FKNftEin2CZcj283k2RJvKRoRYEBDLRaYtMlCpbK8IfhypcCHbrmGF4DixWVuJOg1CG2n0kG6FwkwtMG5UGAYp7UkhnGs6W27LpGcG2CH09BNMiUEv%2FAIHwsFupCao%2FiH1phs230dvWCMLR%2BwB9dwcfAiRNiqy3WDpZg4eNWjFTKBcN%2FNNUfmZfAsJmedrTC6xIDTBjqkAeccGCSGkosp07Wg5vCD2bvF1XugzOByZOH0ogo7AyniK0kpb8jOTWvmxX29f24%2Fe%2F6%2BkOJF0aGWxaulcGLDmPtQjjRJiWRNy9t%2F3UZeBws9%2ByR6Oy8W3LgHdzoPKH6Jp7A5Zt%2FDJUeFYm%2Fb2vVakXS0eOQt1CmBJMuWj3Uyk2pxhUqXGq%2FENJVYIDj8MJwsV9%2FDWtUZuYpkYVwu%2Fodb%2BP2gBlvF&X-Amz-Signature=67285f8f1d428ca3c86c8960efabbcb8c501daf6490c3e6ee9724089c8f38f96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2R42D4E%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDjHPQO3iGKACpAPYpC%2F4RTFyHcqq9wG47zHHmZjTuaFwIhAKveC1SiGWuh9DQAU9vzd2XjyAgM2mczqO4jCOPaLCnBKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxryqwpw2hDNouXhgq3AMkGRqfgbCGlhtjCgSzpGreYQIQIq412ZtM7B5BsQhZlk%2BsQo2SuEpMCUS7oL51CKlCRyZT9QDsTPkH%2B%2B%2BFrcQvlg3O2Iqlqk8J1QbnfEK%2FcAfUFcPXbXLKW6Jd73qp51abpLQhtG%2FJYfPWUzVA5n2osq9w5fwknb5WOjiFUD89nGiHHFRSnSOJn4jDCRfD6XgmHji8VtS2cHbUTI%2FzYR8OGZw5LuZ1jYsY%2FFprr0UgZVikXzO%2FNXMWC2v1ZxqI4McwOv9d9gj68mMik27Pjzw0vgVCpyC2cunJyb23Owy2U5MU1SGLFTlJFb2JmifU%2B0%2BJqvIWUuslSOIBbtJxygZOLXPG9QEjSn4JbwnPJkbKWhfMG3RgsMStV1LVz%2BlMTX5miD0IOkNoQaAU%2BYldSqFBxmnkRWiUVgdMKMTb6mQVhxOo%2BnN3eCIDflvdHb2FKNftEin2CZcj283k2RJvKRoRYEBDLRaYtMlCpbK8IfhypcCHbrmGF4DixWVuJOg1CG2n0kG6FwkwtMG5UGAYp7UkhnGs6W27LpGcG2CH09BNMiUEv%2FAIHwsFupCao%2FiH1phs230dvWCMLR%2BwB9dwcfAiRNiqy3WDpZg4eNWjFTKBcN%2FNNUfmZfAsJmedrTC6xIDTBjqkAeccGCSGkosp07Wg5vCD2bvF1XugzOByZOH0ogo7AyniK0kpb8jOTWvmxX29f24%2Fe%2F6%2BkOJF0aGWxaulcGLDmPtQjjRJiWRNy9t%2F3UZeBws9%2ByR6Oy8W3LgHdzoPKH6Jp7A5Zt%2FDJUeFYm%2Fb2vVakXS0eOQt1CmBJMuWj3Uyk2pxhUqXGq%2FENJVYIDj8MJwsV9%2FDWtUZuYpkYVwu%2Fodb%2BP2gBlvF&X-Amz-Signature=8017081156acdd53cce67f24e059eede4aeb3ef9426d1299f522b00e0d59146c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2R42D4E%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDjHPQO3iGKACpAPYpC%2F4RTFyHcqq9wG47zHHmZjTuaFwIhAKveC1SiGWuh9DQAU9vzd2XjyAgM2mczqO4jCOPaLCnBKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxryqwpw2hDNouXhgq3AMkGRqfgbCGlhtjCgSzpGreYQIQIq412ZtM7B5BsQhZlk%2BsQo2SuEpMCUS7oL51CKlCRyZT9QDsTPkH%2B%2B%2BFrcQvlg3O2Iqlqk8J1QbnfEK%2FcAfUFcPXbXLKW6Jd73qp51abpLQhtG%2FJYfPWUzVA5n2osq9w5fwknb5WOjiFUD89nGiHHFRSnSOJn4jDCRfD6XgmHji8VtS2cHbUTI%2FzYR8OGZw5LuZ1jYsY%2FFprr0UgZVikXzO%2FNXMWC2v1ZxqI4McwOv9d9gj68mMik27Pjzw0vgVCpyC2cunJyb23Owy2U5MU1SGLFTlJFb2JmifU%2B0%2BJqvIWUuslSOIBbtJxygZOLXPG9QEjSn4JbwnPJkbKWhfMG3RgsMStV1LVz%2BlMTX5miD0IOkNoQaAU%2BYldSqFBxmnkRWiUVgdMKMTb6mQVhxOo%2BnN3eCIDflvdHb2FKNftEin2CZcj283k2RJvKRoRYEBDLRaYtMlCpbK8IfhypcCHbrmGF4DixWVuJOg1CG2n0kG6FwkwtMG5UGAYp7UkhnGs6W27LpGcG2CH09BNMiUEv%2FAIHwsFupCao%2FiH1phs230dvWCMLR%2BwB9dwcfAiRNiqy3WDpZg4eNWjFTKBcN%2FNNUfmZfAsJmedrTC6xIDTBjqkAeccGCSGkosp07Wg5vCD2bvF1XugzOByZOH0ogo7AyniK0kpb8jOTWvmxX29f24%2Fe%2F6%2BkOJF0aGWxaulcGLDmPtQjjRJiWRNy9t%2F3UZeBws9%2ByR6Oy8W3LgHdzoPKH6Jp7A5Zt%2FDJUeFYm%2Fb2vVakXS0eOQt1CmBJMuWj3Uyk2pxhUqXGq%2FENJVYIDj8MJwsV9%2FDWtUZuYpkYVwu%2Fodb%2BP2gBlvF&X-Amz-Signature=e2896ff2f40ff26d59c8588f83808525a720337837889e4a2d25a27c4b729e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2R42D4E%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDjHPQO3iGKACpAPYpC%2F4RTFyHcqq9wG47zHHmZjTuaFwIhAKveC1SiGWuh9DQAU9vzd2XjyAgM2mczqO4jCOPaLCnBKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxryqwpw2hDNouXhgq3AMkGRqfgbCGlhtjCgSzpGreYQIQIq412ZtM7B5BsQhZlk%2BsQo2SuEpMCUS7oL51CKlCRyZT9QDsTPkH%2B%2B%2BFrcQvlg3O2Iqlqk8J1QbnfEK%2FcAfUFcPXbXLKW6Jd73qp51abpLQhtG%2FJYfPWUzVA5n2osq9w5fwknb5WOjiFUD89nGiHHFRSnSOJn4jDCRfD6XgmHji8VtS2cHbUTI%2FzYR8OGZw5LuZ1jYsY%2FFprr0UgZVikXzO%2FNXMWC2v1ZxqI4McwOv9d9gj68mMik27Pjzw0vgVCpyC2cunJyb23Owy2U5MU1SGLFTlJFb2JmifU%2B0%2BJqvIWUuslSOIBbtJxygZOLXPG9QEjSn4JbwnPJkbKWhfMG3RgsMStV1LVz%2BlMTX5miD0IOkNoQaAU%2BYldSqFBxmnkRWiUVgdMKMTb6mQVhxOo%2BnN3eCIDflvdHb2FKNftEin2CZcj283k2RJvKRoRYEBDLRaYtMlCpbK8IfhypcCHbrmGF4DixWVuJOg1CG2n0kG6FwkwtMG5UGAYp7UkhnGs6W27LpGcG2CH09BNMiUEv%2FAIHwsFupCao%2FiH1phs230dvWCMLR%2BwB9dwcfAiRNiqy3WDpZg4eNWjFTKBcN%2FNNUfmZfAsJmedrTC6xIDTBjqkAeccGCSGkosp07Wg5vCD2bvF1XugzOByZOH0ogo7AyniK0kpb8jOTWvmxX29f24%2Fe%2F6%2BkOJF0aGWxaulcGLDmPtQjjRJiWRNy9t%2F3UZeBws9%2ByR6Oy8W3LgHdzoPKH6Jp7A5Zt%2FDJUeFYm%2Fb2vVakXS0eOQt1CmBJMuWj3Uyk2pxhUqXGq%2FENJVYIDj8MJwsV9%2FDWtUZuYpkYVwu%2Fodb%2BP2gBlvF&X-Amz-Signature=8ce81ba8db333accbc89287cfd102b2159e395adfbfc219e2d349e384500821e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2R42D4E%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDjHPQO3iGKACpAPYpC%2F4RTFyHcqq9wG47zHHmZjTuaFwIhAKveC1SiGWuh9DQAU9vzd2XjyAgM2mczqO4jCOPaLCnBKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxryqwpw2hDNouXhgq3AMkGRqfgbCGlhtjCgSzpGreYQIQIq412ZtM7B5BsQhZlk%2BsQo2SuEpMCUS7oL51CKlCRyZT9QDsTPkH%2B%2B%2BFrcQvlg3O2Iqlqk8J1QbnfEK%2FcAfUFcPXbXLKW6Jd73qp51abpLQhtG%2FJYfPWUzVA5n2osq9w5fwknb5WOjiFUD89nGiHHFRSnSOJn4jDCRfD6XgmHji8VtS2cHbUTI%2FzYR8OGZw5LuZ1jYsY%2FFprr0UgZVikXzO%2FNXMWC2v1ZxqI4McwOv9d9gj68mMik27Pjzw0vgVCpyC2cunJyb23Owy2U5MU1SGLFTlJFb2JmifU%2B0%2BJqvIWUuslSOIBbtJxygZOLXPG9QEjSn4JbwnPJkbKWhfMG3RgsMStV1LVz%2BlMTX5miD0IOkNoQaAU%2BYldSqFBxmnkRWiUVgdMKMTb6mQVhxOo%2BnN3eCIDflvdHb2FKNftEin2CZcj283k2RJvKRoRYEBDLRaYtMlCpbK8IfhypcCHbrmGF4DixWVuJOg1CG2n0kG6FwkwtMG5UGAYp7UkhnGs6W27LpGcG2CH09BNMiUEv%2FAIHwsFupCao%2FiH1phs230dvWCMLR%2BwB9dwcfAiRNiqy3WDpZg4eNWjFTKBcN%2FNNUfmZfAsJmedrTC6xIDTBjqkAeccGCSGkosp07Wg5vCD2bvF1XugzOByZOH0ogo7AyniK0kpb8jOTWvmxX29f24%2Fe%2F6%2BkOJF0aGWxaulcGLDmPtQjjRJiWRNy9t%2F3UZeBws9%2ByR6Oy8W3LgHdzoPKH6Jp7A5Zt%2FDJUeFYm%2Fb2vVakXS0eOQt1CmBJMuWj3Uyk2pxhUqXGq%2FENJVYIDj8MJwsV9%2FDWtUZuYpkYVwu%2Fodb%2BP2gBlvF&X-Amz-Signature=cbef3c30845d062c9839dca2e2445e8405e2a2476a5076a0ff74908907696a51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2R42D4E%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDjHPQO3iGKACpAPYpC%2F4RTFyHcqq9wG47zHHmZjTuaFwIhAKveC1SiGWuh9DQAU9vzd2XjyAgM2mczqO4jCOPaLCnBKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxryqwpw2hDNouXhgq3AMkGRqfgbCGlhtjCgSzpGreYQIQIq412ZtM7B5BsQhZlk%2BsQo2SuEpMCUS7oL51CKlCRyZT9QDsTPkH%2B%2B%2BFrcQvlg3O2Iqlqk8J1QbnfEK%2FcAfUFcPXbXLKW6Jd73qp51abpLQhtG%2FJYfPWUzVA5n2osq9w5fwknb5WOjiFUD89nGiHHFRSnSOJn4jDCRfD6XgmHji8VtS2cHbUTI%2FzYR8OGZw5LuZ1jYsY%2FFprr0UgZVikXzO%2FNXMWC2v1ZxqI4McwOv9d9gj68mMik27Pjzw0vgVCpyC2cunJyb23Owy2U5MU1SGLFTlJFb2JmifU%2B0%2BJqvIWUuslSOIBbtJxygZOLXPG9QEjSn4JbwnPJkbKWhfMG3RgsMStV1LVz%2BlMTX5miD0IOkNoQaAU%2BYldSqFBxmnkRWiUVgdMKMTb6mQVhxOo%2BnN3eCIDflvdHb2FKNftEin2CZcj283k2RJvKRoRYEBDLRaYtMlCpbK8IfhypcCHbrmGF4DixWVuJOg1CG2n0kG6FwkwtMG5UGAYp7UkhnGs6W27LpGcG2CH09BNMiUEv%2FAIHwsFupCao%2FiH1phs230dvWCMLR%2BwB9dwcfAiRNiqy3WDpZg4eNWjFTKBcN%2FNNUfmZfAsJmedrTC6xIDTBjqkAeccGCSGkosp07Wg5vCD2bvF1XugzOByZOH0ogo7AyniK0kpb8jOTWvmxX29f24%2Fe%2F6%2BkOJF0aGWxaulcGLDmPtQjjRJiWRNy9t%2F3UZeBws9%2ByR6Oy8W3LgHdzoPKH6Jp7A5Zt%2FDJUeFYm%2Fb2vVakXS0eOQt1CmBJMuWj3Uyk2pxhUqXGq%2FENJVYIDj8MJwsV9%2FDWtUZuYpkYVwu%2Fodb%2BP2gBlvF&X-Amz-Signature=520a65a58fdcd2a9eff782019e3a1867d764ce12040b370aff4dfd21ddededb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2R42D4E%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDjHPQO3iGKACpAPYpC%2F4RTFyHcqq9wG47zHHmZjTuaFwIhAKveC1SiGWuh9DQAU9vzd2XjyAgM2mczqO4jCOPaLCnBKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxryqwpw2hDNouXhgq3AMkGRqfgbCGlhtjCgSzpGreYQIQIq412ZtM7B5BsQhZlk%2BsQo2SuEpMCUS7oL51CKlCRyZT9QDsTPkH%2B%2B%2BFrcQvlg3O2Iqlqk8J1QbnfEK%2FcAfUFcPXbXLKW6Jd73qp51abpLQhtG%2FJYfPWUzVA5n2osq9w5fwknb5WOjiFUD89nGiHHFRSnSOJn4jDCRfD6XgmHji8VtS2cHbUTI%2FzYR8OGZw5LuZ1jYsY%2FFprr0UgZVikXzO%2FNXMWC2v1ZxqI4McwOv9d9gj68mMik27Pjzw0vgVCpyC2cunJyb23Owy2U5MU1SGLFTlJFb2JmifU%2B0%2BJqvIWUuslSOIBbtJxygZOLXPG9QEjSn4JbwnPJkbKWhfMG3RgsMStV1LVz%2BlMTX5miD0IOkNoQaAU%2BYldSqFBxmnkRWiUVgdMKMTb6mQVhxOo%2BnN3eCIDflvdHb2FKNftEin2CZcj283k2RJvKRoRYEBDLRaYtMlCpbK8IfhypcCHbrmGF4DixWVuJOg1CG2n0kG6FwkwtMG5UGAYp7UkhnGs6W27LpGcG2CH09BNMiUEv%2FAIHwsFupCao%2FiH1phs230dvWCMLR%2BwB9dwcfAiRNiqy3WDpZg4eNWjFTKBcN%2FNNUfmZfAsJmedrTC6xIDTBjqkAeccGCSGkosp07Wg5vCD2bvF1XugzOByZOH0ogo7AyniK0kpb8jOTWvmxX29f24%2Fe%2F6%2BkOJF0aGWxaulcGLDmPtQjjRJiWRNy9t%2F3UZeBws9%2ByR6Oy8W3LgHdzoPKH6Jp7A5Zt%2FDJUeFYm%2Fb2vVakXS0eOQt1CmBJMuWj3Uyk2pxhUqXGq%2FENJVYIDj8MJwsV9%2FDWtUZuYpkYVwu%2Fodb%2BP2gBlvF&X-Amz-Signature=8335e1c084d53102c689ff0be7c36f110cb1ce5289e5245c99c8bb2a8e6d8c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2R42D4E%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDjHPQO3iGKACpAPYpC%2F4RTFyHcqq9wG47zHHmZjTuaFwIhAKveC1SiGWuh9DQAU9vzd2XjyAgM2mczqO4jCOPaLCnBKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxryqwpw2hDNouXhgq3AMkGRqfgbCGlhtjCgSzpGreYQIQIq412ZtM7B5BsQhZlk%2BsQo2SuEpMCUS7oL51CKlCRyZT9QDsTPkH%2B%2B%2BFrcQvlg3O2Iqlqk8J1QbnfEK%2FcAfUFcPXbXLKW6Jd73qp51abpLQhtG%2FJYfPWUzVA5n2osq9w5fwknb5WOjiFUD89nGiHHFRSnSOJn4jDCRfD6XgmHji8VtS2cHbUTI%2FzYR8OGZw5LuZ1jYsY%2FFprr0UgZVikXzO%2FNXMWC2v1ZxqI4McwOv9d9gj68mMik27Pjzw0vgVCpyC2cunJyb23Owy2U5MU1SGLFTlJFb2JmifU%2B0%2BJqvIWUuslSOIBbtJxygZOLXPG9QEjSn4JbwnPJkbKWhfMG3RgsMStV1LVz%2BlMTX5miD0IOkNoQaAU%2BYldSqFBxmnkRWiUVgdMKMTb6mQVhxOo%2BnN3eCIDflvdHb2FKNftEin2CZcj283k2RJvKRoRYEBDLRaYtMlCpbK8IfhypcCHbrmGF4DixWVuJOg1CG2n0kG6FwkwtMG5UGAYp7UkhnGs6W27LpGcG2CH09BNMiUEv%2FAIHwsFupCao%2FiH1phs230dvWCMLR%2BwB9dwcfAiRNiqy3WDpZg4eNWjFTKBcN%2FNNUfmZfAsJmedrTC6xIDTBjqkAeccGCSGkosp07Wg5vCD2bvF1XugzOByZOH0ogo7AyniK0kpb8jOTWvmxX29f24%2Fe%2F6%2BkOJF0aGWxaulcGLDmPtQjjRJiWRNy9t%2F3UZeBws9%2ByR6Oy8W3LgHdzoPKH6Jp7A5Zt%2FDJUeFYm%2Fb2vVakXS0eOQt1CmBJMuWj3Uyk2pxhUqXGq%2FENJVYIDj8MJwsV9%2FDWtUZuYpkYVwu%2Fodb%2BP2gBlvF&X-Amz-Signature=da41b5a650bc2ec42fc973286f84a3d7b11835fe2c2cefb076ccb3c022adc676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2R42D4E%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDjHPQO3iGKACpAPYpC%2F4RTFyHcqq9wG47zHHmZjTuaFwIhAKveC1SiGWuh9DQAU9vzd2XjyAgM2mczqO4jCOPaLCnBKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxryqwpw2hDNouXhgq3AMkGRqfgbCGlhtjCgSzpGreYQIQIq412ZtM7B5BsQhZlk%2BsQo2SuEpMCUS7oL51CKlCRyZT9QDsTPkH%2B%2B%2BFrcQvlg3O2Iqlqk8J1QbnfEK%2FcAfUFcPXbXLKW6Jd73qp51abpLQhtG%2FJYfPWUzVA5n2osq9w5fwknb5WOjiFUD89nGiHHFRSnSOJn4jDCRfD6XgmHji8VtS2cHbUTI%2FzYR8OGZw5LuZ1jYsY%2FFprr0UgZVikXzO%2FNXMWC2v1ZxqI4McwOv9d9gj68mMik27Pjzw0vgVCpyC2cunJyb23Owy2U5MU1SGLFTlJFb2JmifU%2B0%2BJqvIWUuslSOIBbtJxygZOLXPG9QEjSn4JbwnPJkbKWhfMG3RgsMStV1LVz%2BlMTX5miD0IOkNoQaAU%2BYldSqFBxmnkRWiUVgdMKMTb6mQVhxOo%2BnN3eCIDflvdHb2FKNftEin2CZcj283k2RJvKRoRYEBDLRaYtMlCpbK8IfhypcCHbrmGF4DixWVuJOg1CG2n0kG6FwkwtMG5UGAYp7UkhnGs6W27LpGcG2CH09BNMiUEv%2FAIHwsFupCao%2FiH1phs230dvWCMLR%2BwB9dwcfAiRNiqy3WDpZg4eNWjFTKBcN%2FNNUfmZfAsJmedrTC6xIDTBjqkAeccGCSGkosp07Wg5vCD2bvF1XugzOByZOH0ogo7AyniK0kpb8jOTWvmxX29f24%2Fe%2F6%2BkOJF0aGWxaulcGLDmPtQjjRJiWRNy9t%2F3UZeBws9%2ByR6Oy8W3LgHdzoPKH6Jp7A5Zt%2FDJUeFYm%2Fb2vVakXS0eOQt1CmBJMuWj3Uyk2pxhUqXGq%2FENJVYIDj8MJwsV9%2FDWtUZuYpkYVwu%2Fodb%2BP2gBlvF&X-Amz-Signature=225be7d7a43ddc61fcc1671f9e1b15a0bc7f8741d7cd0a9dd2c633f2f577a86b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2R42D4E%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDjHPQO3iGKACpAPYpC%2F4RTFyHcqq9wG47zHHmZjTuaFwIhAKveC1SiGWuh9DQAU9vzd2XjyAgM2mczqO4jCOPaLCnBKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxryqwpw2hDNouXhgq3AMkGRqfgbCGlhtjCgSzpGreYQIQIq412ZtM7B5BsQhZlk%2BsQo2SuEpMCUS7oL51CKlCRyZT9QDsTPkH%2B%2B%2BFrcQvlg3O2Iqlqk8J1QbnfEK%2FcAfUFcPXbXLKW6Jd73qp51abpLQhtG%2FJYfPWUzVA5n2osq9w5fwknb5WOjiFUD89nGiHHFRSnSOJn4jDCRfD6XgmHji8VtS2cHbUTI%2FzYR8OGZw5LuZ1jYsY%2FFprr0UgZVikXzO%2FNXMWC2v1ZxqI4McwOv9d9gj68mMik27Pjzw0vgVCpyC2cunJyb23Owy2U5MU1SGLFTlJFb2JmifU%2B0%2BJqvIWUuslSOIBbtJxygZOLXPG9QEjSn4JbwnPJkbKWhfMG3RgsMStV1LVz%2BlMTX5miD0IOkNoQaAU%2BYldSqFBxmnkRWiUVgdMKMTb6mQVhxOo%2BnN3eCIDflvdHb2FKNftEin2CZcj283k2RJvKRoRYEBDLRaYtMlCpbK8IfhypcCHbrmGF4DixWVuJOg1CG2n0kG6FwkwtMG5UGAYp7UkhnGs6W27LpGcG2CH09BNMiUEv%2FAIHwsFupCao%2FiH1phs230dvWCMLR%2BwB9dwcfAiRNiqy3WDpZg4eNWjFTKBcN%2FNNUfmZfAsJmedrTC6xIDTBjqkAeccGCSGkosp07Wg5vCD2bvF1XugzOByZOH0ogo7AyniK0kpb8jOTWvmxX29f24%2Fe%2F6%2BkOJF0aGWxaulcGLDmPtQjjRJiWRNy9t%2F3UZeBws9%2ByR6Oy8W3LgHdzoPKH6Jp7A5Zt%2FDJUeFYm%2Fb2vVakXS0eOQt1CmBJMuWj3Uyk2pxhUqXGq%2FENJVYIDj8MJwsV9%2FDWtUZuYpkYVwu%2Fodb%2BP2gBlvF&X-Amz-Signature=713184f9c20bbbafc30615f4dcc41e47f05a700b3a6413e9e070feba90eaee69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGDEN2BU%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDpzKjc%2FKGCGnsh%2FUF9Hw4%2BzRrJsgGb9cwIRCE62ZZvCQIhANiIomlZCPy40hRW2le7rJeDB4318tiQfu6X2BTP%2FCm4KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGlnZ6Yrb7qzT7LYYq3AO7X6C34dLJPc%2FhvRLfqyzF%2BLYZUbhBxgiyEkm9ORPV%2Fo38TsRQibYLJqsjxEcqRaWOn5LP7Joopv6o%2Bt%2F5br61deMQOZ5RGtXddXG3t8LEzOrqImpEokCS3pqKjY957uQ1wfhPGUAXmUR5ElNO8xVt3jM3ovCQSfeY4ZhvrQC8oNOehz3hRph6omWkuUy4i2KOti%2BasIyaN8XYStbkRB0sjjQEPY3m8HCzbojXyM3pLQiRAahwBRV3%2F3qEHNy%2FswOMCN5Y2oBYWWa15kvUL7W1XCi%2FxLKAPm6TBuG%2BZ%2Bco%2FLpPEKRN7hRf2gUl2Hcs%2B57rDk7im7CJRrdQCTMzOQuhYyk7iM6WRGMP4Bhx6k839oCumVm4oh6mdzQi5KBLfgIKR6ODWtqeBM6%2B%2F1RMz9ZMF4cf8uc29ZZruAyAJQJWkGtOaTGziUYSiDB%2FXmWG6D6Xu7VSuNg%2BSvLSdIs1nov4cGxzVGdvRvzofuV6xXytfZrE65jAWCu7FxRl%2BhkOvwJFqPw3AInKgYc3ldy9cShFYztfVmsNlMaOGI8wH%2BvIv3aNg%2FeY5XQXJvqT4x85adkgMre5mcEpG0b1MoPN0w9osBj8VLSUZ73tDU11it%2FJeIMQl5BZx%2BiDyA2KMDDgx4DTBjqkAaPGVvxlsGWKtN6%2FMJ2dN5ZgzBZuVI5MiffN6IzPpdBtoP%2FMcbY6QD6PCM1D8KR4mCqWCvsqe56JmlOF7n9QY3ibU6WK771bAmUnRolxpLNZDnkEMx6AigY4lvudCjXAm2c3Hr20bRMzW3MwUxRXpDWDn0gLWolp7ce2fnunzEDPe%2Bd4ndpVABIKZefFGi%2Fh4uNSg9SIFcG5LnGJZTDZyvDyTBtT&X-Amz-Signature=46052e77cf24dbd3450326b1b8dc10d1d76e628ffc12c707752d847b6f802a45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPDOFSOA%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDu6Y%2BEMvnH1chYopemWxczFPnppJssLOMBvlm5bvwxKAIgfHTmwoT5Iol4YKDLzNOlu64WrSNTmTsAE7HACFIYtH0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOt07%2FkpLLd26oHeVCrcA0vVR8saI%2BM4IIfpEXWA08MYwqew6ulU0MLNd44b0RKPQE62%2FdmuZGojiBOXbfUbWyQ6S8fdxREU13f8BiOsnp3SfYlcAPS1ryCk1Eld3SWrdFWmEUxJQcP5CDaW209TjeGJGsD9co%2FEd%2FS5nEhoJWVAva9KGWE3J7VXnHBaiTQnlVV3uV3%2Bkp%2BpmJZXVpn2X%2Fj7sFxRgrsIJ84irg%2FhohhCYibA9emJLsEvo6HDXyx5aSpkeYbGGlVlx%2BZkuYcmjMa%2F%2FJQheoSNZTGMlkEsdhola3c9%2B44nR9ViA4avrDhLVhghbaTQXN7sEs5lbVnV6XfHKNnDMtzOZb5b9eLEWXOdhAQNrAwcc%2BkWUmHzwxUbEd3AbbKZiIXqv9%2FIgsRb7jagEt24HFUKCJOZ5hHV0xHwkr1aZ7tnIfD2oAPdD8t0SvtBE3YuX90wn61Nybu05H8V%2FP42nWqaRKbPX8m4CIUxM7Nwu6zszholZV0n649RZx2uDi122%2FruaSp%2F3ktOzAcVHAMYvgGUF5S7Vu9CD%2BoAf08TFn%2FCuVmyph6klqDuWLBYdgN%2FdwbgrdYSUdTizrrG3PNc2zpNb1j0TaY3lWUxNTRvIP2ub8qNqlorccg3TOYbYEvg9hDfClhCMLrEgNMGOqUBPMKxzZaGCcBi6%2BSFzPh3973jspBOG2hzASvf2MhX4c4eIS%2FeGpP6D9MnOw8g8nAZQnkkWSYGvEXusad8XVDSwiEpXVHlH5jUDgOZQvqj%2BwZDr5iUD3Jorrz7KqX%2Fxxwc9v65Tx3fFOHlVVZjYvF2%2BvHSKcxCIzopZFTuMnEttC0aMxxo2Mt0THxJR0itq1ujoXf2eSC1lDIloTVC95BBAJFTmFYI&X-Amz-Signature=ca3b6537a06b68504bf8091d75aca4e2c99aa5133b97ec8a3f658d4520050363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DCXCZJ7%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGSk9HisUGPO6xFwFNRS%2BnyDRDRBbZSyaw4lbWcHBvO8AiBD4BvEuWdaxRlGWCn7Wd4UTYLVrC7qttCZrXdvGXfXkSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnEjfI84k2v4QYHdoKtwDkZ%2FpmlhiBXd0khKH%2FRo2ncrH19hr6koeSwFrLUSG%2FtTCuzHmh%2BOWOsIkPzfmmBLevWMevqSNST99YXfv2x0zBgT9ZWPueg2tdJqljiJHfP5fek4OH%2Bx5T7Z09KMneaoA77DSlBi2z%2B3O1MCrfcY79LrizhvMqm70vUCViEvlI9exj1a95d3fdGE7XxtPlhKibFFeonef3fqXNCFM9VALyyMLFj2jYko12ok5qebKzLJlk3m8etSyyuUpRWJ5eap2oJzC%2Bv9AG8pu19IvPJj8et83%2BbifAtHm57A5G0u5IVHFLxpUAXEPOyiK5VJyFFygyK%2BrTmt8zBjdUiv25lXQzavVj%2B4HQVMBDECJEL1%2BwnNF2iX5JpMt3y8L68Yh%2FjRQddd1oJuqDwZ3l%2FBjGQM4Q%2BL7N9Wi3v9ysW4CsCEtMKAnCEfmoeN3CZ4VhdWx57eoeo3HB9WKT0AR4nW5JEctbaZO3eUAqUZKoIqagpIOd2d0JiZytg3UWGrY3vf3h8tUC7Y%2FVM1kV08KRXTxVG8JXnDYQZUHVD3y0Hf4EpH6t1896qBPKD96XiJAX464EBwsazpc0PNL8RhTbeaHebKmt2Ldi9DB0tV52L0%2FMATlVhjjDmdr9bT%2BykscPIYwg8eA0wY6pgGiGphQApftnaLnEvwlYZdkSpigAo8ZzAAdxR%2F3WWoEvLpdffweGlm0O4qvfmAPWQiOwZ6BeVyTxeQm%2FAQw3oMznSx3dbzXVVDvVC6Kdc%2FEDGBlV6YTgLTD%2FksYPJALYfOGTVWM7XlE9xbqJrRSKWpuiS1k0f5BuR1dcfJ7DcynZu1u7bgnZkn27FMQXNORpXew5O7WM0uRxDwgbD3YE2u7VKSu2KhB&X-Amz-Signature=8fc9bf438058e256800fb2ed24b08f1c37debb876aa17f599fc26f9f1b81dd80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2R42D4E%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDjHPQO3iGKACpAPYpC%2F4RTFyHcqq9wG47zHHmZjTuaFwIhAKveC1SiGWuh9DQAU9vzd2XjyAgM2mczqO4jCOPaLCnBKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxryqwpw2hDNouXhgq3AMkGRqfgbCGlhtjCgSzpGreYQIQIq412ZtM7B5BsQhZlk%2BsQo2SuEpMCUS7oL51CKlCRyZT9QDsTPkH%2B%2B%2BFrcQvlg3O2Iqlqk8J1QbnfEK%2FcAfUFcPXbXLKW6Jd73qp51abpLQhtG%2FJYfPWUzVA5n2osq9w5fwknb5WOjiFUD89nGiHHFRSnSOJn4jDCRfD6XgmHji8VtS2cHbUTI%2FzYR8OGZw5LuZ1jYsY%2FFprr0UgZVikXzO%2FNXMWC2v1ZxqI4McwOv9d9gj68mMik27Pjzw0vgVCpyC2cunJyb23Owy2U5MU1SGLFTlJFb2JmifU%2B0%2BJqvIWUuslSOIBbtJxygZOLXPG9QEjSn4JbwnPJkbKWhfMG3RgsMStV1LVz%2BlMTX5miD0IOkNoQaAU%2BYldSqFBxmnkRWiUVgdMKMTb6mQVhxOo%2BnN3eCIDflvdHb2FKNftEin2CZcj283k2RJvKRoRYEBDLRaYtMlCpbK8IfhypcCHbrmGF4DixWVuJOg1CG2n0kG6FwkwtMG5UGAYp7UkhnGs6W27LpGcG2CH09BNMiUEv%2FAIHwsFupCao%2FiH1phs230dvWCMLR%2BwB9dwcfAiRNiqy3WDpZg4eNWjFTKBcN%2FNNUfmZfAsJmedrTC6xIDTBjqkAeccGCSGkosp07Wg5vCD2bvF1XugzOByZOH0ogo7AyniK0kpb8jOTWvmxX29f24%2Fe%2F6%2BkOJF0aGWxaulcGLDmPtQjjRJiWRNy9t%2F3UZeBws9%2ByR6Oy8W3LgHdzoPKH6Jp7A5Zt%2FDJUeFYm%2Fb2vVakXS0eOQt1CmBJMuWj3Uyk2pxhUqXGq%2FENJVYIDj8MJwsV9%2FDWtUZuYpkYVwu%2Fodb%2BP2gBlvF&X-Amz-Signature=e49b7160c8c7b8219a3ae610f57e0b3794d5b684e32665483f4d1620154b2626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKY4LQF%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIHI1p%2F3V07mIzg8PQrH%2BAAjW7bJllFZXnp7RQFvwgy6YAiAO0wEIFtGSSOOUqEdVYiNWP0Uw9aKPm1JRrxqhEMvQ1SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ4hnoLXM9C2jEn4YKtwDvESK8Wii%2Fr5QV4NeKZ79eGv5BovrSLIRroKVKspiEmHTfzXapJIL%2BceDKN%2BiJcRFTXd2fe58R%2F8Ibg6WTxI1h90CdJsTxfRw4p5QXqPat00fnPlffw2t9M90SpvfulroU5s9iqD1PEdsFwgEO%2Fs%2FLqoEDGtLTS%2BcDwj68NhzdvE1RzrwZ0zq5cC711g6IVefj32JQLJPjfbXM3dQNcI6A%2B9FyQiM7OogHplOys%2B7HRRZ%2BFgoIikm%2Beysq7HfQ1j0FhfLrhsrt6PCc42va2YFiHOCgyJhOG8i%2BKRQkXXFrJYqDao9ai12C1abiFg4C3DMFW0sdRjrJpNgAJwm0DsbHxs78vSfHcPxmR%2FUepo4Dv4%2FBfXH81e4ZWwU8%2BSkZJGtqEhoRfN%2BQbZQV7eVc7vMoMCG0Bz0a%2FJdW8CmFJIb5r83eIBId9hptUmRbXLjCnXFb1TUsxygwzSsTg%2BHHP7%2F5TooXVl34T8zIFYsKZ5ozigRQv1RscBEtwNRoo%2BPFs%2BQxaY1dYnEos%2BKDSojB1%2FQFxNg5gJkSA5mQik05%2F%2BBgD87b5auIiCePIw%2BkqInQVUwMvQPIBdUalMVuE8SSUsB9Q2DLQ21IHDo%2BmrKlTHQMYkneoW7smEhrcEw%2FiMwxsSA0wY6pgFPs4Ex2h0hjvFSva2afSp0%2BkPrjGhmuwkmrpSkbCaqqvjrqaXyM5ANbl2u8dLzVmk4JlPzeIM3SpmkJitTJaRzWFVDV2%2BB42nwign6qeG%2BNqyJdTO3u3DH5XFiN1AiAnRWNR8%2BuZIHrQtB7F%2FLfq4tl4Mim7UoJjzS%2F0t6AphBNA2qsXe184h51oHMkVVxuIXfw926oQzMlnS4xfHf816VoyU5lxVP&X-Amz-Signature=262f1c4e25ec57b5dda4ed8b90a41149750a6ca31865a873f79e2cf549a3c33c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2R42D4E%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDjHPQO3iGKACpAPYpC%2F4RTFyHcqq9wG47zHHmZjTuaFwIhAKveC1SiGWuh9DQAU9vzd2XjyAgM2mczqO4jCOPaLCnBKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxryqwpw2hDNouXhgq3AMkGRqfgbCGlhtjCgSzpGreYQIQIq412ZtM7B5BsQhZlk%2BsQo2SuEpMCUS7oL51CKlCRyZT9QDsTPkH%2B%2B%2BFrcQvlg3O2Iqlqk8J1QbnfEK%2FcAfUFcPXbXLKW6Jd73qp51abpLQhtG%2FJYfPWUzVA5n2osq9w5fwknb5WOjiFUD89nGiHHFRSnSOJn4jDCRfD6XgmHji8VtS2cHbUTI%2FzYR8OGZw5LuZ1jYsY%2FFprr0UgZVikXzO%2FNXMWC2v1ZxqI4McwOv9d9gj68mMik27Pjzw0vgVCpyC2cunJyb23Owy2U5MU1SGLFTlJFb2JmifU%2B0%2BJqvIWUuslSOIBbtJxygZOLXPG9QEjSn4JbwnPJkbKWhfMG3RgsMStV1LVz%2BlMTX5miD0IOkNoQaAU%2BYldSqFBxmnkRWiUVgdMKMTb6mQVhxOo%2BnN3eCIDflvdHb2FKNftEin2CZcj283k2RJvKRoRYEBDLRaYtMlCpbK8IfhypcCHbrmGF4DixWVuJOg1CG2n0kG6FwkwtMG5UGAYp7UkhnGs6W27LpGcG2CH09BNMiUEv%2FAIHwsFupCao%2FiH1phs230dvWCMLR%2BwB9dwcfAiRNiqy3WDpZg4eNWjFTKBcN%2FNNUfmZfAsJmedrTC6xIDTBjqkAeccGCSGkosp07Wg5vCD2bvF1XugzOByZOH0ogo7AyniK0kpb8jOTWvmxX29f24%2Fe%2F6%2BkOJF0aGWxaulcGLDmPtQjjRJiWRNy9t%2F3UZeBws9%2ByR6Oy8W3LgHdzoPKH6Jp7A5Zt%2FDJUeFYm%2Fb2vVakXS0eOQt1CmBJMuWj3Uyk2pxhUqXGq%2FENJVYIDj8MJwsV9%2FDWtUZuYpkYVwu%2Fodb%2BP2gBlvF&X-Amz-Signature=f51057bee3ef5b8c47063baf2086abeb6407fbe1bf202d89570e28cce936d150&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632D7MAV6%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDnDyNa0ips76Wy2kHQkmidBErrmB1V4aPT15%2F65RY8gwIgCOA9TIbdHF4f2P5D%2FTjeYBv%2B040SmLCysVSHOByv5gEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BL0jS8dnE4%2BoRbqircA2RMZXvz2n9XbRpLjwqC5XxP%2FMqRb0y5E6oTuvL%2Fndq6ZfHYgxVkabXf1r78tWU86hABAGws%2FBILPNMIeJuQsl4UNd65Ict0qHm0%2BEjDrYqVtT4gJxHZBV9%2FjKlwawD5g7kX%2B7HuykO95kmYsy5%2FhaZ%2Fc4S37RVsEGtOZ7SMNS2EETfi3Nt4FjH5GxNBc%2BjIpDX9s7d9XqIlNlFh4Raqm6QiNQGM5H12tvKz8LC3ZGutjPCHU3R4g%2Fc8HaqRYRfo5VWlIIsvulyspVTto4QSIEj7JZb9%2FlGLaoA6DnJ3DYhv3nFx7UtA7sMuKT2ccQn8rW%2FeoFOY2q%2FhmikrRDMyPL90Qx%2BHAZgrL%2FwMpLJHq9I9kygqenpXVMbkdYl14YhmCqOyTpXU%2F1q%2B%2B5JCTflovmiXAgBOTXHNgKak6qleAddlBBidXDjRjw7FtycK%2FmwvNQCDSQ7WheBwIqtd2WzmFT%2F9tvgbs9uDhr61O4lclNiTSZe1uPoNgVRifOUJHbxHdPLBd5lFyhTC%2BatRjqgFa9UTPfffiwsF2UVS3HzX6ZEs7sRNkCuL%2BdRu0AJtgxBA3kelV0UsRKS%2BSOcvUYCc5%2FIBs%2FK8i6Lo6KYSa6lTSnNcLKGMbQ%2F7P6KvmsPFMKnHgNMGOqUB2OonrNLzaNJbqQiVwLHJFOpO8G7qiDqig71db0fikesMlJ3%2B3DFLfbs%2FRM9G2XyITCzLhPe8h9hxSczPyKUd2MLVJT3Hkk7qba0uvKKkXcpO57mVzvFR7JmnF9c6HvpwD7%2Fs7nr22YNzen4bdeJ99rhUy87W5dNf7BNowviL0oMHgP0zeWIL5%2FzE6g%2BoeyzedtSUL8i57OTlpc%2FQed6SGFO%2FoFoO&X-Amz-Signature=ddb2340a7faf746530910a0172e56c64a4de2f743d055883b58b45a3e92529b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2R42D4E%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDjHPQO3iGKACpAPYpC%2F4RTFyHcqq9wG47zHHmZjTuaFwIhAKveC1SiGWuh9DQAU9vzd2XjyAgM2mczqO4jCOPaLCnBKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxryqwpw2hDNouXhgq3AMkGRqfgbCGlhtjCgSzpGreYQIQIq412ZtM7B5BsQhZlk%2BsQo2SuEpMCUS7oL51CKlCRyZT9QDsTPkH%2B%2B%2BFrcQvlg3O2Iqlqk8J1QbnfEK%2FcAfUFcPXbXLKW6Jd73qp51abpLQhtG%2FJYfPWUzVA5n2osq9w5fwknb5WOjiFUD89nGiHHFRSnSOJn4jDCRfD6XgmHji8VtS2cHbUTI%2FzYR8OGZw5LuZ1jYsY%2FFprr0UgZVikXzO%2FNXMWC2v1ZxqI4McwOv9d9gj68mMik27Pjzw0vgVCpyC2cunJyb23Owy2U5MU1SGLFTlJFb2JmifU%2B0%2BJqvIWUuslSOIBbtJxygZOLXPG9QEjSn4JbwnPJkbKWhfMG3RgsMStV1LVz%2BlMTX5miD0IOkNoQaAU%2BYldSqFBxmnkRWiUVgdMKMTb6mQVhxOo%2BnN3eCIDflvdHb2FKNftEin2CZcj283k2RJvKRoRYEBDLRaYtMlCpbK8IfhypcCHbrmGF4DixWVuJOg1CG2n0kG6FwkwtMG5UGAYp7UkhnGs6W27LpGcG2CH09BNMiUEv%2FAIHwsFupCao%2FiH1phs230dvWCMLR%2BwB9dwcfAiRNiqy3WDpZg4eNWjFTKBcN%2FNNUfmZfAsJmedrTC6xIDTBjqkAeccGCSGkosp07Wg5vCD2bvF1XugzOByZOH0ogo7AyniK0kpb8jOTWvmxX29f24%2Fe%2F6%2BkOJF0aGWxaulcGLDmPtQjjRJiWRNy9t%2F3UZeBws9%2ByR6Oy8W3LgHdzoPKH6Jp7A5Zt%2FDJUeFYm%2Fb2vVakXS0eOQt1CmBJMuWj3Uyk2pxhUqXGq%2FENJVYIDj8MJwsV9%2FDWtUZuYpkYVwu%2Fodb%2BP2gBlvF&X-Amz-Signature=5bb971495edd2433fde93869db936c968b617ee2bd92bef0380617531973c293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IEVMU35%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAUALQpPqqg88zvJZZxO3L0WHTTYVPyMj3KJAXwLRm06AiAJNEB%2BsMgmSzvv%2ByBq%2F5FnE7k2piZZpB3VhxONOxpIoCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW5rKSxSsMWvTSY0DKtwDwR0yFYFi9Lw4QB472EkIIZGpy5JcpPgKhMtFYjjdjPMFxNrmuvQvZd36%2Bu13PGSD%2Ff1AFa%2BiZmlVvEBIDYPMHpi%2FXkoII4Z4BWozfka1yEviWpC52Vw6Lg2bO61elgq%2FGq2qYkBVLA3xqo%2Bm9cydarX%2FM9u0N7v5lcd%2FQ2BRXPf3Kh58Ofh7VW6E%2BKBL7o2Qiecu5j5wCXsWEoaEjHHnrBPAqMU3qKe2B5HURAWhcsJHi2bJHwWg5FzJ891kZnahUeK8hCy0v0vdXm95650jhlBAB2kW4kX74lbnvZyDBj7VgvVgomBdEhQmaILstGdqvorCdPw47xPMzp8ttwBS%2FpfT4EN8XJv%2FVPUDlfrkErqICWKkIFTgjiPv9q6C6ku1%2BtQyyoRXeSKY1WNE8aCDoQ3QGdgKdoYMrmzggGCzCyGzlhafy0p3%2FtNr2I3sKOkuz%2BeJQ%2FGftHptt9UuC4GcZWwnPpChFbeJhaMjKUaZNcw19Qls2nlVitJhdH%2FkD0TMO6PGnRmH2THZGDN81y5lJxCqxGxS8C4n1LM9Udh6%2F6vRTCJPh%2Fc5Y106m7jtHUcwgC%2BMMhx6qYLQki0B0CjM39Ah1D%2BQKckn5a42VgwwXtJEl%2BukxbhpHoYGssEwysOA0wY6pgGRd9NtOeIHsRw3ztQ3%2Fg7WQTl4Xwsd8S%2FrHk4Fp2sB0kV5Dq%2FQR%2FTRw4iLh7scT4Bs5CtzA8NCrlTy33DziR7d202VIDyiAvmz%2BEfegM9NCCwVQMp%2BTD1b1mxSv%2Fbos62%2F1sSYMt5DTmeHXu9tXPxHKIGgNCfsgB7Yx3JGHs5aVCOFFYbdquPqJIDXkd2iNCw3aDfNciN8CFQTBDq7XMNaD6peWvHp&X-Amz-Signature=6fe54d495b8bc6e0cbe0febcb1b3455733cf44ab6f3fde764709b33eecec316f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2R42D4E%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDjHPQO3iGKACpAPYpC%2F4RTFyHcqq9wG47zHHmZjTuaFwIhAKveC1SiGWuh9DQAU9vzd2XjyAgM2mczqO4jCOPaLCnBKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxryqwpw2hDNouXhgq3AMkGRqfgbCGlhtjCgSzpGreYQIQIq412ZtM7B5BsQhZlk%2BsQo2SuEpMCUS7oL51CKlCRyZT9QDsTPkH%2B%2B%2BFrcQvlg3O2Iqlqk8J1QbnfEK%2FcAfUFcPXbXLKW6Jd73qp51abpLQhtG%2FJYfPWUzVA5n2osq9w5fwknb5WOjiFUD89nGiHHFRSnSOJn4jDCRfD6XgmHji8VtS2cHbUTI%2FzYR8OGZw5LuZ1jYsY%2FFprr0UgZVikXzO%2FNXMWC2v1ZxqI4McwOv9d9gj68mMik27Pjzw0vgVCpyC2cunJyb23Owy2U5MU1SGLFTlJFb2JmifU%2B0%2BJqvIWUuslSOIBbtJxygZOLXPG9QEjSn4JbwnPJkbKWhfMG3RgsMStV1LVz%2BlMTX5miD0IOkNoQaAU%2BYldSqFBxmnkRWiUVgdMKMTb6mQVhxOo%2BnN3eCIDflvdHb2FKNftEin2CZcj283k2RJvKRoRYEBDLRaYtMlCpbK8IfhypcCHbrmGF4DixWVuJOg1CG2n0kG6FwkwtMG5UGAYp7UkhnGs6W27LpGcG2CH09BNMiUEv%2FAIHwsFupCao%2FiH1phs230dvWCMLR%2BwB9dwcfAiRNiqy3WDpZg4eNWjFTKBcN%2FNNUfmZfAsJmedrTC6xIDTBjqkAeccGCSGkosp07Wg5vCD2bvF1XugzOByZOH0ogo7AyniK0kpb8jOTWvmxX29f24%2Fe%2F6%2BkOJF0aGWxaulcGLDmPtQjjRJiWRNy9t%2F3UZeBws9%2ByR6Oy8W3LgHdzoPKH6Jp7A5Zt%2FDJUeFYm%2Fb2vVakXS0eOQt1CmBJMuWj3Uyk2pxhUqXGq%2FENJVYIDj8MJwsV9%2FDWtUZuYpkYVwu%2Fodb%2BP2gBlvF&X-Amz-Signature=4c4337bc5fdb2892688a33056c2b58eaff86d34d856ed390a9175bc0d4af460a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSG55MJ4%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIA5LIz5ixeKWAisfpS5j4VVurI%2BUKPLJBOSU607Ae4gzAiAOxW65TsmrvIfttHKmANdmMz4kyHf3deC%2FcOU0CPk4liqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUNAroddCfuwnQNy3KtwDVRYz8g6RzGX00hK4YMr9WkxQdgGXFihyccWk7BQ8c1hX5MEdotohoeouzLY0kIPraJmTWmXPhLacw1c5TH9HwwU7coDcFDGTuwItjqIu%2BcWTH1ho5dPOAVB0oN%2FPqZni8xIMTqgIxR5US1JTg4vgc4LR7bspgB6CGd%2Br3FS4zxlch5wGnvsp1N6NA07C2Wn2O6aJNKTyG9%2F1q83seHlZikSOxBVW9NSKa%2Bc4K%2F33gc3Fhm9KoqLaFadbh7oovhkSHYiL1ATx9k2rsEP%2B3cAXrOwVqlS5tCBQFX3yzUDVzUB%2B4cBIxOvfR%2Fk6Rb0D5WgozUvM5e7dUU0CZaMYAUKqvA9ybe9dGrh71s9nyejyK41yx8%2BHPE7KGBwx9F0D%2FA27T8YLOOO3XpQqcoj1uE2WtDIoEOT0FTdgvVNAiCLpj6Rr2YB%2FX%2F17G7Um%2FZae6LTqR39zqeireGcUL5NY%2Fs2hbn8dVVM%2BTIiUb0s5WYbAvgcbAIbneD2cCgAE5FLHSh8u3D9dn9TvgQJXqo%2Fc7XnMZrSL4%2BUraraQvwcnSsqUbhxfggSkjgnsHkaXt9XXrV0Vp0o4vXYL8mQCRE0olb%2F5uPyE0J9JGNw9XAfArs0bm%2Bz8D4vVPFmQa59cAcwwq8OA0wY6pgGlxkYLxL7Bk53L5cCLuAFhTT4K0xiJkJLfiNXaUO6gNB9eOnhggzbngXuM%2B51LxsqwW774Dn%2BxSp51uxaZwc51rdOrjqAbGh%2Fa8S6IPG4LXWdhECBR%2BJaiOIkC7E2SWnQHRJiVDoWjcDYYSnUfRmjqRMSC9TayVS70ZO%2BvYeXRHwN9XdruFyPRWe11CbenoTFuoTUpxUqyjF2sGUhlRZcD7N63rAnC&X-Amz-Signature=427f9020eb780386619824bf438f1488eaf2488af8933849fd1c8079ce85615d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2R42D4E%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDjHPQO3iGKACpAPYpC%2F4RTFyHcqq9wG47zHHmZjTuaFwIhAKveC1SiGWuh9DQAU9vzd2XjyAgM2mczqO4jCOPaLCnBKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxryqwpw2hDNouXhgq3AMkGRqfgbCGlhtjCgSzpGreYQIQIq412ZtM7B5BsQhZlk%2BsQo2SuEpMCUS7oL51CKlCRyZT9QDsTPkH%2B%2B%2BFrcQvlg3O2Iqlqk8J1QbnfEK%2FcAfUFcPXbXLKW6Jd73qp51abpLQhtG%2FJYfPWUzVA5n2osq9w5fwknb5WOjiFUD89nGiHHFRSnSOJn4jDCRfD6XgmHji8VtS2cHbUTI%2FzYR8OGZw5LuZ1jYsY%2FFprr0UgZVikXzO%2FNXMWC2v1ZxqI4McwOv9d9gj68mMik27Pjzw0vgVCpyC2cunJyb23Owy2U5MU1SGLFTlJFb2JmifU%2B0%2BJqvIWUuslSOIBbtJxygZOLXPG9QEjSn4JbwnPJkbKWhfMG3RgsMStV1LVz%2BlMTX5miD0IOkNoQaAU%2BYldSqFBxmnkRWiUVgdMKMTb6mQVhxOo%2BnN3eCIDflvdHb2FKNftEin2CZcj283k2RJvKRoRYEBDLRaYtMlCpbK8IfhypcCHbrmGF4DixWVuJOg1CG2n0kG6FwkwtMG5UGAYp7UkhnGs6W27LpGcG2CH09BNMiUEv%2FAIHwsFupCao%2FiH1phs230dvWCMLR%2BwB9dwcfAiRNiqy3WDpZg4eNWjFTKBcN%2FNNUfmZfAsJmedrTC6xIDTBjqkAeccGCSGkosp07Wg5vCD2bvF1XugzOByZOH0ogo7AyniK0kpb8jOTWvmxX29f24%2Fe%2F6%2BkOJF0aGWxaulcGLDmPtQjjRJiWRNy9t%2F3UZeBws9%2ByR6Oy8W3LgHdzoPKH6Jp7A5Zt%2FDJUeFYm%2Fb2vVakXS0eOQt1CmBJMuWj3Uyk2pxhUqXGq%2FENJVYIDj8MJwsV9%2FDWtUZuYpkYVwu%2Fodb%2BP2gBlvF&X-Amz-Signature=774f7de1a7b072dee643bec6d21dead3a9c5388932e6879e59aeb548beda487c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMVI5DAG%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCJbSeCn5EszDS9uX%2F%2FYN9Lz3gzBnFR%2F1Z3gvaaPxBXkgIgJb36cVmqnDVyYbrZlXSDGITJ9VlN2sx%2BGRgjxK2YM7UqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8UfhFAE0%2F0%2BpsYsSrcA26xpff8VJRQYZAcDSM0COBp2p8PILzYlj8PidelQsh4lGsIltfn79ATzRovrJQtcWVxDzvGH9PTxz6qHWdwgvmu2pHvywmaGtrmtfUszcx1a2%2B0sFSwqxmoCD02dF%2Bh4JcSX0am0EloyzN4iFw8hV9l9JmY1jaEmCijOJRQfOSt%2FRK0UVP92Bk51QJswQoueJYvU0xRckgd%2FGTEaRe5Uu6WNPOQRF28Qx%2B9ZXOovSOYBrwBwqs3UkA%2F9zp%2BcouAzy6LCXXCq62o8Egw%2FW8AYB9e4a065tVdHDY4RhLJIkGztzprtkUuNU0jYXnsa0lQ6F4v%2FJaprXu3SwblKnd2YhSwPVsgGwwXexoE7eoNNE7OtXexvDZu53mVs6myfiE1%2FW5cZ82ntKDlj3z%2FEh92MUyacLRjkhWJyNYH9Bbrk3N2fqpVwb0urtdYib5HaxvLb1%2B9UpI9DyUhDt0fZ16puuZSeryFRoRcSkHzNoEqzUPDCUuExc%2BWvuhoXeFdSbRczULM1pOQhqFgKn%2FOWLPgqZTGHrYLbyXQHP0OjqmrAPPh3AUyglhEleul5z2dZkNhyH34NU2KilyDYBYeL%2BQKKQW3%2BmI5l2e3hdjzFjEFFx5gaRTJFatFJSC7oYzyML7HgNMGOqUBFFajiTqU5zBQHalR65GrSIIkm9yP7F%2FAT3ZYnSIJgRifXdDRT1hBh36Ac%2BTGrAGps61w6Ednh5ijuv0LGhEKgucJ7j3rPTQU2MUtWKxufSdFOcfQgAncubkGmYERisArqQuTSeQkufDLEs70bFfl3Ii5ThYFjcO2Np5dJqFYz6HZzclrbKFU0Dgdu799qzBnf4h%2BFwEm2VIhd7bWyoZfPzDRIdld&X-Amz-Signature=5d64b3493d21248a529ef89beba07f1374671f6e9f5483a41e606843f64a6527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGDNPYAG%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDNpnSc0YaqVD9DZON6PurSR1%2BB1PBj0Ktx85fsVRo4AAIhAM1e6R%2FFL65QPJnSClkOQs%2F1ZGnPS0sYS1582I5YsoEcKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1RctQGo6iv2Tvh7Eq3AOYx6jbpz0J1zCanV4YqAbpZeLcA0FQ8VCRn9AUfhoKNI6XhJYhyKyPeTZTcy%2FLzcyfqyOE3WlRe7jqNZTDRYdbLZrqokCORrA6rg3v6xT86S6aV9Nzi71iGsddLLfJ9xfyS7rY6oqgvV0SJnNium6F3DfrfuO0in6rhXU%2BAxXbKLQtWjWfyMqCExlH%2FtNAKp%2FH7bl4ZCKM%2Fq13vjjiwY31N%2Fq7XhmWm09Lc6l%2Brc3QvK%2FgJQCbixqg7NwHFQ2ffM82rx6htfmT0nJlujLBKo5uDW3mBI%2FFDHu5xGIiopqSRgnJllpSLztMa7naNhz0rVhzl1Tu%2BGpvy0wPOItDbK5P7CS8VCaDD%2BpQflGqmqpcB14ydloJv9TTKbkkhxDdqGvhI%2B4s%2BaC%2BRO327pgx0ihblk9yH6nY7TZ6n01wDSAmOm4Odl1GkoDuiFTkMS31MFrVnYxVxF1vNsPZ9ipv5io6F0lBuUiC7Df0pDOGwJnS%2Bq3efJcs3ZmVCGfN6E5yE33dygSYiJOmN86FqoP9OLaNyWD3ddJFWAMV7Z5BPomT84DBUmqLNJQBdWSXFOzf0m1xLwu6dEsepA5iMfWz0FXpL16tj4nEW7qU7o9lguyrK3J4zeXHdknHNFmUgzCnxYDTBjqkAda2j46ylk1ghtQ%2F%2ByWH0cXDGqlYtDctM40zQYYqWL0Ateq8rbD%2BdpAecenNiVS1PXQwT82r2vNgXN5pc5jz0GPNXh1Ch3717yCuZMvcYdYVwhKkFR9kLb%2FYh2q7tOvh9wh5wqVtTnHQ%2B9QJjuo3IVUAUK9BaGJVbJx4rgJ180XgHlrox%2FwD1CK5OwHePkxkz3qyMYiBrW0oHKDhRufDbmDhWk2E&X-Amz-Signature=176251c9f27da034532c0750fecaed349ef8c23e52e010f9f2ef1a5f0e35c946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J5G3JHK%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDN3j1SEnD985%2FdifEVcUrXH9IIX9EK9djuWqR%2BvFEYMgIgA%2BW6qYkjSHFBbi5CIvNjTNerZfAnWfGrA40Pjp3sz8YqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcvqzfQG73JzXI%2FSyrcA0JyKu%2Fyupczs7gRzqEYSmSZJjggsD1ncVH5HMrxMlR8%2B7uOTycAkZZOSlp4UpwhfDUGEMrfqvRgBGoFiZ%2BPhkJEU%2FgosKLvY%2B9mpEQ68fVUXUqqiJ0DmGdhjrx3dy6RqintNLf3EOJdizx5Vv4G3wIrREGGH7Ywc4rSiWhkrPC%2FSfaCm%2FbRHg0hdmp%2BH%2BTZ%2F7HuIygyrRdViXUcTcoT4XeyOT5uPhPGu%2FHwoM%2FxXphEukfG3gUIPXeDhzwTqJ1Tjq4rL%2F%2BRi6MDUaSHH2K7xDtUriZj0j72oQjkj7aEw2j8Njt1aQL0yRbzcwueFEtJyhtdvLx4FCaqEMuPR9NZytxrwYhu54nYn%2B0ZhAbJXcuIlAj8qvV1bvk%2FtOjl%2BadkYdkQ%2F9mB%2F3poPx5lTWE2IqvuIh3U21190bvIblvuslZ%2BvO16kKP1xh62YeOvHnwPcxLt3V%2B5X9kWx9AyA1T4yytgEpWRegJMbR37RAYXsCXFLrnSgGVQ9TAN4GDyp0AYlooVGdzmWBdt5D%2FVTrmjU38oG10RYo7KklGfRvxxc5CwBxMlGpOK3qr0myU9cYw%2BOxEyvc1j6bFIutvBfxpNU6sCjdnAKiW%2FDUlgLfpJ7QupbXtyOUPORdE44r%2BuMPDHgNMGOqUB5teVYUGndl6N9SSfa5IcLgGP1iIHKmbOopMjMsMpNdbaqscwlYc%2BV7%2F0TfapaW8ObaYgdGn%2BeBt0MvxTJ1495QdZObPvO2F7Erx2kyeV3wWM3%2Bxoc7bFdCD7dQtBiOlFX%2BDfT7zRteI%2Fo9giSG71jq4296aGel1XZOy%2BIN4qu4TUnS6lvHCqrWCUNBg9h%2F8yYK8SU01BsX7j2dQpxgEf9kRPmaDS&X-Amz-Signature=d71538bd2df84b6e4f6aec564d9b2c31e7e951c8accf2dd9c20167fd30a3fd6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2R42D4E%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDjHPQO3iGKACpAPYpC%2F4RTFyHcqq9wG47zHHmZjTuaFwIhAKveC1SiGWuh9DQAU9vzd2XjyAgM2mczqO4jCOPaLCnBKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxryqwpw2hDNouXhgq3AMkGRqfgbCGlhtjCgSzpGreYQIQIq412ZtM7B5BsQhZlk%2BsQo2SuEpMCUS7oL51CKlCRyZT9QDsTPkH%2B%2B%2BFrcQvlg3O2Iqlqk8J1QbnfEK%2FcAfUFcPXbXLKW6Jd73qp51abpLQhtG%2FJYfPWUzVA5n2osq9w5fwknb5WOjiFUD89nGiHHFRSnSOJn4jDCRfD6XgmHji8VtS2cHbUTI%2FzYR8OGZw5LuZ1jYsY%2FFprr0UgZVikXzO%2FNXMWC2v1ZxqI4McwOv9d9gj68mMik27Pjzw0vgVCpyC2cunJyb23Owy2U5MU1SGLFTlJFb2JmifU%2B0%2BJqvIWUuslSOIBbtJxygZOLXPG9QEjSn4JbwnPJkbKWhfMG3RgsMStV1LVz%2BlMTX5miD0IOkNoQaAU%2BYldSqFBxmnkRWiUVgdMKMTb6mQVhxOo%2BnN3eCIDflvdHb2FKNftEin2CZcj283k2RJvKRoRYEBDLRaYtMlCpbK8IfhypcCHbrmGF4DixWVuJOg1CG2n0kG6FwkwtMG5UGAYp7UkhnGs6W27LpGcG2CH09BNMiUEv%2FAIHwsFupCao%2FiH1phs230dvWCMLR%2BwB9dwcfAiRNiqy3WDpZg4eNWjFTKBcN%2FNNUfmZfAsJmedrTC6xIDTBjqkAeccGCSGkosp07Wg5vCD2bvF1XugzOByZOH0ogo7AyniK0kpb8jOTWvmxX29f24%2Fe%2F6%2BkOJF0aGWxaulcGLDmPtQjjRJiWRNy9t%2F3UZeBws9%2ByR6Oy8W3LgHdzoPKH6Jp7A5Zt%2FDJUeFYm%2Fb2vVakXS0eOQt1CmBJMuWj3Uyk2pxhUqXGq%2FENJVYIDj8MJwsV9%2FDWtUZuYpkYVwu%2Fodb%2BP2gBlvF&X-Amz-Signature=1af44316710c7028f02a48f2942d4573316dc9e9ca5c6b8b58161d6c2f9132b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2R42D4E%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDjHPQO3iGKACpAPYpC%2F4RTFyHcqq9wG47zHHmZjTuaFwIhAKveC1SiGWuh9DQAU9vzd2XjyAgM2mczqO4jCOPaLCnBKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxryqwpw2hDNouXhgq3AMkGRqfgbCGlhtjCgSzpGreYQIQIq412ZtM7B5BsQhZlk%2BsQo2SuEpMCUS7oL51CKlCRyZT9QDsTPkH%2B%2B%2BFrcQvlg3O2Iqlqk8J1QbnfEK%2FcAfUFcPXbXLKW6Jd73qp51abpLQhtG%2FJYfPWUzVA5n2osq9w5fwknb5WOjiFUD89nGiHHFRSnSOJn4jDCRfD6XgmHji8VtS2cHbUTI%2FzYR8OGZw5LuZ1jYsY%2FFprr0UgZVikXzO%2FNXMWC2v1ZxqI4McwOv9d9gj68mMik27Pjzw0vgVCpyC2cunJyb23Owy2U5MU1SGLFTlJFb2JmifU%2B0%2BJqvIWUuslSOIBbtJxygZOLXPG9QEjSn4JbwnPJkbKWhfMG3RgsMStV1LVz%2BlMTX5miD0IOkNoQaAU%2BYldSqFBxmnkRWiUVgdMKMTb6mQVhxOo%2BnN3eCIDflvdHb2FKNftEin2CZcj283k2RJvKRoRYEBDLRaYtMlCpbK8IfhypcCHbrmGF4DixWVuJOg1CG2n0kG6FwkwtMG5UGAYp7UkhnGs6W27LpGcG2CH09BNMiUEv%2FAIHwsFupCao%2FiH1phs230dvWCMLR%2BwB9dwcfAiRNiqy3WDpZg4eNWjFTKBcN%2FNNUfmZfAsJmedrTC6xIDTBjqkAeccGCSGkosp07Wg5vCD2bvF1XugzOByZOH0ogo7AyniK0kpb8jOTWvmxX29f24%2Fe%2F6%2BkOJF0aGWxaulcGLDmPtQjjRJiWRNy9t%2F3UZeBws9%2ByR6Oy8W3LgHdzoPKH6Jp7A5Zt%2FDJUeFYm%2Fb2vVakXS0eOQt1CmBJMuWj3Uyk2pxhUqXGq%2FENJVYIDj8MJwsV9%2FDWtUZuYpkYVwu%2Fodb%2BP2gBlvF&X-Amz-Signature=94a84d39ab37d5f1074fbf8f8de9093ad1d850da5054b719bbb5e0e64262c0b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVO4EWI%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDInohHu34CBVLaiYkd1lqKqI21BdrUSa5WLhjuuEjQKAIhAOWCWF5KYsd1TVFiGo%2B8Vm0T%2FUF0IoMopfrfMgEPtFpDKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAyWdYeklunTMyDKkq3AOZcc0ceScgSsZ3W69Ke1XItUQZxocKaKWRLBjX%2Fz7Iz1QiqpidkB6ijfdHlzT7SEM7JLkaa5nb2qMYv2Ljo7KXCD2ZwSz2nfxNqR%2FINQqrcqXb29I5hgBgnPetIGMCk2b2bG7QvpanMGAMB0i9OZYvLPvDQAFXD%2BDv7hnClt6H5i0lfOxQy41TEmccmN07Zsrc6uS0oADK1sqrBxi0XSC411yAdCA%2FKmb7sf8Ir28tzE0rXGWFAlEaHQ0fqxL3mupLyIOoe%2FwBYvixC4sy4BbO9Z58k1KN3oLI7abnR5PZhVTtFovjcREy3VxLU2%2FAgFnFuXspc304B%2BrWNpvVLf3VWs2Y%2Bwl4wz63bli%2BLufcNmHfi2Ljp%2BwD7L5SWCo8ZLx2ZuMswNAABOoIyljTRq%2B2VXUPTrFE60lpP7w2url4ezBCNhZd8oPt6WNwTx9QT1om60SCTdP14jz7dSX2wHs5weoZzl9z%2Fb0OkBkTuKalJjyO3tO9hIzXF%2BDKVvnDVupZiot6iI3A7vRudPEAAQPtDCgEZVB6UmXQGIFUeg5VOB8mmHSwzk6SQfK9KcsXLOqQW8%2BmA%2BegkIb06dpm8gLchZ7M530bBbBacZL8EHCAVPDr350u86hCsQJf4DCcxYDTBjqkAeD5%2ByP7xd1kyj7VSNsgYhO87j8mQ6LYovEyi1PQ9cjB5zD6%2BNDdeFu%2BNR27CNlBg92tgQWNRPekTMBF7FnVNpTO3tkxS3Ly7Hc6Bp7PY1J3jllOJdSJK6VsWo3a6ClKHgS9oUwamKOR7y4w7UHa8PW7h3A3vFeQNUSPhDxLQf5VUV0hiWK0AaKdd6mo6B98bWi4%2FXHzqDeWerwiM2jXpPOvoezr&X-Amz-Signature=6219506e93c2c770f1497024bd17676f09e0f0b4e10894ae77ef4b5b6d1da8fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVO4EWI%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDInohHu34CBVLaiYkd1lqKqI21BdrUSa5WLhjuuEjQKAIhAOWCWF5KYsd1TVFiGo%2B8Vm0T%2FUF0IoMopfrfMgEPtFpDKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAyWdYeklunTMyDKkq3AOZcc0ceScgSsZ3W69Ke1XItUQZxocKaKWRLBjX%2Fz7Iz1QiqpidkB6ijfdHlzT7SEM7JLkaa5nb2qMYv2Ljo7KXCD2ZwSz2nfxNqR%2FINQqrcqXb29I5hgBgnPetIGMCk2b2bG7QvpanMGAMB0i9OZYvLPvDQAFXD%2BDv7hnClt6H5i0lfOxQy41TEmccmN07Zsrc6uS0oADK1sqrBxi0XSC411yAdCA%2FKmb7sf8Ir28tzE0rXGWFAlEaHQ0fqxL3mupLyIOoe%2FwBYvixC4sy4BbO9Z58k1KN3oLI7abnR5PZhVTtFovjcREy3VxLU2%2FAgFnFuXspc304B%2BrWNpvVLf3VWs2Y%2Bwl4wz63bli%2BLufcNmHfi2Ljp%2BwD7L5SWCo8ZLx2ZuMswNAABOoIyljTRq%2B2VXUPTrFE60lpP7w2url4ezBCNhZd8oPt6WNwTx9QT1om60SCTdP14jz7dSX2wHs5weoZzl9z%2Fb0OkBkTuKalJjyO3tO9hIzXF%2BDKVvnDVupZiot6iI3A7vRudPEAAQPtDCgEZVB6UmXQGIFUeg5VOB8mmHSwzk6SQfK9KcsXLOqQW8%2BmA%2BegkIb06dpm8gLchZ7M530bBbBacZL8EHCAVPDr350u86hCsQJf4DCcxYDTBjqkAeD5%2ByP7xd1kyj7VSNsgYhO87j8mQ6LYovEyi1PQ9cjB5zD6%2BNDdeFu%2BNR27CNlBg92tgQWNRPekTMBF7FnVNpTO3tkxS3Ly7Hc6Bp7PY1J3jllOJdSJK6VsWo3a6ClKHgS9oUwamKOR7y4w7UHa8PW7h3A3vFeQNUSPhDxLQf5VUV0hiWK0AaKdd6mo6B98bWi4%2FXHzqDeWerwiM2jXpPOvoezr&X-Amz-Signature=d6da26829393b88fce93de16ab824f09a2c126b2506c309c967d135f15e12599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVO4EWI%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDInohHu34CBVLaiYkd1lqKqI21BdrUSa5WLhjuuEjQKAIhAOWCWF5KYsd1TVFiGo%2B8Vm0T%2FUF0IoMopfrfMgEPtFpDKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAyWdYeklunTMyDKkq3AOZcc0ceScgSsZ3W69Ke1XItUQZxocKaKWRLBjX%2Fz7Iz1QiqpidkB6ijfdHlzT7SEM7JLkaa5nb2qMYv2Ljo7KXCD2ZwSz2nfxNqR%2FINQqrcqXb29I5hgBgnPetIGMCk2b2bG7QvpanMGAMB0i9OZYvLPvDQAFXD%2BDv7hnClt6H5i0lfOxQy41TEmccmN07Zsrc6uS0oADK1sqrBxi0XSC411yAdCA%2FKmb7sf8Ir28tzE0rXGWFAlEaHQ0fqxL3mupLyIOoe%2FwBYvixC4sy4BbO9Z58k1KN3oLI7abnR5PZhVTtFovjcREy3VxLU2%2FAgFnFuXspc304B%2BrWNpvVLf3VWs2Y%2Bwl4wz63bli%2BLufcNmHfi2Ljp%2BwD7L5SWCo8ZLx2ZuMswNAABOoIyljTRq%2B2VXUPTrFE60lpP7w2url4ezBCNhZd8oPt6WNwTx9QT1om60SCTdP14jz7dSX2wHs5weoZzl9z%2Fb0OkBkTuKalJjyO3tO9hIzXF%2BDKVvnDVupZiot6iI3A7vRudPEAAQPtDCgEZVB6UmXQGIFUeg5VOB8mmHSwzk6SQfK9KcsXLOqQW8%2BmA%2BegkIb06dpm8gLchZ7M530bBbBacZL8EHCAVPDr350u86hCsQJf4DCcxYDTBjqkAeD5%2ByP7xd1kyj7VSNsgYhO87j8mQ6LYovEyi1PQ9cjB5zD6%2BNDdeFu%2BNR27CNlBg92tgQWNRPekTMBF7FnVNpTO3tkxS3Ly7Hc6Bp7PY1J3jllOJdSJK6VsWo3a6ClKHgS9oUwamKOR7y4w7UHa8PW7h3A3vFeQNUSPhDxLQf5VUV0hiWK0AaKdd6mo6B98bWi4%2FXHzqDeWerwiM2jXpPOvoezr&X-Amz-Signature=783f50f5003cf64d0015c0548945233b09fa8f058c007192cb8610caa66778be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVO4EWI%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDInohHu34CBVLaiYkd1lqKqI21BdrUSa5WLhjuuEjQKAIhAOWCWF5KYsd1TVFiGo%2B8Vm0T%2FUF0IoMopfrfMgEPtFpDKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAyWdYeklunTMyDKkq3AOZcc0ceScgSsZ3W69Ke1XItUQZxocKaKWRLBjX%2Fz7Iz1QiqpidkB6ijfdHlzT7SEM7JLkaa5nb2qMYv2Ljo7KXCD2ZwSz2nfxNqR%2FINQqrcqXb29I5hgBgnPetIGMCk2b2bG7QvpanMGAMB0i9OZYvLPvDQAFXD%2BDv7hnClt6H5i0lfOxQy41TEmccmN07Zsrc6uS0oADK1sqrBxi0XSC411yAdCA%2FKmb7sf8Ir28tzE0rXGWFAlEaHQ0fqxL3mupLyIOoe%2FwBYvixC4sy4BbO9Z58k1KN3oLI7abnR5PZhVTtFovjcREy3VxLU2%2FAgFnFuXspc304B%2BrWNpvVLf3VWs2Y%2Bwl4wz63bli%2BLufcNmHfi2Ljp%2BwD7L5SWCo8ZLx2ZuMswNAABOoIyljTRq%2B2VXUPTrFE60lpP7w2url4ezBCNhZd8oPt6WNwTx9QT1om60SCTdP14jz7dSX2wHs5weoZzl9z%2Fb0OkBkTuKalJjyO3tO9hIzXF%2BDKVvnDVupZiot6iI3A7vRudPEAAQPtDCgEZVB6UmXQGIFUeg5VOB8mmHSwzk6SQfK9KcsXLOqQW8%2BmA%2BegkIb06dpm8gLchZ7M530bBbBacZL8EHCAVPDr350u86hCsQJf4DCcxYDTBjqkAeD5%2ByP7xd1kyj7VSNsgYhO87j8mQ6LYovEyi1PQ9cjB5zD6%2BNDdeFu%2BNR27CNlBg92tgQWNRPekTMBF7FnVNpTO3tkxS3Ly7Hc6Bp7PY1J3jllOJdSJK6VsWo3a6ClKHgS9oUwamKOR7y4w7UHa8PW7h3A3vFeQNUSPhDxLQf5VUV0hiWK0AaKdd6mo6B98bWi4%2FXHzqDeWerwiM2jXpPOvoezr&X-Amz-Signature=3ab593a1aec0852ede8badc38d937151502a186a4520869d3e74960b8736db36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H6GUF6U%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC%2BImHF%2F0khQd8adJBNbcC6IWFH72RhANwWuT%2BfIfAC9QIhANQlow2WU5QUEiORJS2W%2BQzn54t8Z%2F1pS%2B6D%2BbYObS3yKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6vRPgE3IEQjbF%2FHsq3APsWCpdTXDGTdMvOw0pXuWgI7YGPia0tuz5jOh5KY5U78jtY2Xc1CfYlqOmIcfrBiOVfcPacr%2FLnHay4VHLpfcAPuP5yR9IxgKDOFEo1FsPyi6Mv2YH9x4WAL%2FqBsJaMRV8elioD9EfLszABi0LK0GKbg3Z3q5CBJ3rOHk9sPKcAmTK9758bqYO%2FsUrYSNbx59YV5jsqbN5rzpER0%2FEGVBlPABc4WYQKlVJRMY4MvfTiqpgk99aQtYHDk6jL99UthzhDH4NOGFYYcBwdLOBfA1SCD2pgvuerfgHlq%2F9sCAE%2FENz6YkUWzYoxEXqqrvjL5rIgPmywSkk%2FueqVdrbi1FcbZZMReMC6V04YZ%2Btc7COogPmOM3P6gQPVstAGBaXn7glzZIJJu1MMmJc2S%2FTAFONVjMmiAC2H8OYCpPqF4uRpqIwFjcjKnV5WTgaqfqYaNfBXn5s9F44JDYNpFbjBtyJz%2B%2Fhh7c4HtDDfuvAs4qcwbwwMnpiS1zCXMpaQhIJ3753i5nKoAvEsh7KDXXEQP99yOyI5IlDCpUCbFmqXYU5wtnmmc8x1oTRwwn6%2FB2nRGugZdhELL6TsUwEvrlfwi5B44h%2FF17A3JJUx98NAFpljBfO3bq2zhOWAPjlVDDyxYDTBjqkAYbkP5Yiu0IktN9xalE5%2Ff1IapVN5tWl3o0WYVvnLkOXfzFW%2F2%2BdGUchIPcPo5S56lNeW8bz9Gk6fqDVWil8Ia3lBJxNCOdy3%2BVt01jW5ukX1BkxpYQkVUDbopTmU2v4EaeN9FJjuVfPix5DmcbFlxWUnJ%2FtyRe5BqbmVPpUNT9TFpS9ShcuoYN3%2B6OUQk8nN74Xu1WBMm5qwqcwTISXhcAoQNqa&X-Amz-Signature=92e6e964cf4533049d7e2e4a3ea3d06a05120ae97632994366834df768b03ac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVO4EWI%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDInohHu34CBVLaiYkd1lqKqI21BdrUSa5WLhjuuEjQKAIhAOWCWF5KYsd1TVFiGo%2B8Vm0T%2FUF0IoMopfrfMgEPtFpDKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAyWdYeklunTMyDKkq3AOZcc0ceScgSsZ3W69Ke1XItUQZxocKaKWRLBjX%2Fz7Iz1QiqpidkB6ijfdHlzT7SEM7JLkaa5nb2qMYv2Ljo7KXCD2ZwSz2nfxNqR%2FINQqrcqXb29I5hgBgnPetIGMCk2b2bG7QvpanMGAMB0i9OZYvLPvDQAFXD%2BDv7hnClt6H5i0lfOxQy41TEmccmN07Zsrc6uS0oADK1sqrBxi0XSC411yAdCA%2FKmb7sf8Ir28tzE0rXGWFAlEaHQ0fqxL3mupLyIOoe%2FwBYvixC4sy4BbO9Z58k1KN3oLI7abnR5PZhVTtFovjcREy3VxLU2%2FAgFnFuXspc304B%2BrWNpvVLf3VWs2Y%2Bwl4wz63bli%2BLufcNmHfi2Ljp%2BwD7L5SWCo8ZLx2ZuMswNAABOoIyljTRq%2B2VXUPTrFE60lpP7w2url4ezBCNhZd8oPt6WNwTx9QT1om60SCTdP14jz7dSX2wHs5weoZzl9z%2Fb0OkBkTuKalJjyO3tO9hIzXF%2BDKVvnDVupZiot6iI3A7vRudPEAAQPtDCgEZVB6UmXQGIFUeg5VOB8mmHSwzk6SQfK9KcsXLOqQW8%2BmA%2BegkIb06dpm8gLchZ7M530bBbBacZL8EHCAVPDr350u86hCsQJf4DCcxYDTBjqkAeD5%2ByP7xd1kyj7VSNsgYhO87j8mQ6LYovEyi1PQ9cjB5zD6%2BNDdeFu%2BNR27CNlBg92tgQWNRPekTMBF7FnVNpTO3tkxS3Ly7Hc6Bp7PY1J3jllOJdSJK6VsWo3a6ClKHgS9oUwamKOR7y4w7UHa8PW7h3A3vFeQNUSPhDxLQf5VUV0hiWK0AaKdd6mo6B98bWi4%2FXHzqDeWerwiM2jXpPOvoezr&X-Amz-Signature=29179abd1470d22dd32d4917aa6db33229ea32c0d8b292575cc2368daf95630e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVO4EWI%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDInohHu34CBVLaiYkd1lqKqI21BdrUSa5WLhjuuEjQKAIhAOWCWF5KYsd1TVFiGo%2B8Vm0T%2FUF0IoMopfrfMgEPtFpDKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAyWdYeklunTMyDKkq3AOZcc0ceScgSsZ3W69Ke1XItUQZxocKaKWRLBjX%2Fz7Iz1QiqpidkB6ijfdHlzT7SEM7JLkaa5nb2qMYv2Ljo7KXCD2ZwSz2nfxNqR%2FINQqrcqXb29I5hgBgnPetIGMCk2b2bG7QvpanMGAMB0i9OZYvLPvDQAFXD%2BDv7hnClt6H5i0lfOxQy41TEmccmN07Zsrc6uS0oADK1sqrBxi0XSC411yAdCA%2FKmb7sf8Ir28tzE0rXGWFAlEaHQ0fqxL3mupLyIOoe%2FwBYvixC4sy4BbO9Z58k1KN3oLI7abnR5PZhVTtFovjcREy3VxLU2%2FAgFnFuXspc304B%2BrWNpvVLf3VWs2Y%2Bwl4wz63bli%2BLufcNmHfi2Ljp%2BwD7L5SWCo8ZLx2ZuMswNAABOoIyljTRq%2B2VXUPTrFE60lpP7w2url4ezBCNhZd8oPt6WNwTx9QT1om60SCTdP14jz7dSX2wHs5weoZzl9z%2Fb0OkBkTuKalJjyO3tO9hIzXF%2BDKVvnDVupZiot6iI3A7vRudPEAAQPtDCgEZVB6UmXQGIFUeg5VOB8mmHSwzk6SQfK9KcsXLOqQW8%2BmA%2BegkIb06dpm8gLchZ7M530bBbBacZL8EHCAVPDr350u86hCsQJf4DCcxYDTBjqkAeD5%2ByP7xd1kyj7VSNsgYhO87j8mQ6LYovEyi1PQ9cjB5zD6%2BNDdeFu%2BNR27CNlBg92tgQWNRPekTMBF7FnVNpTO3tkxS3Ly7Hc6Bp7PY1J3jllOJdSJK6VsWo3a6ClKHgS9oUwamKOR7y4w7UHa8PW7h3A3vFeQNUSPhDxLQf5VUV0hiWK0AaKdd6mo6B98bWi4%2FXHzqDeWerwiM2jXpPOvoezr&X-Amz-Signature=9fb37866a986f4297bd76d5847495f2dd54a863eb14bde6d7ad096ffb89ef0bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVO4EWI%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDInohHu34CBVLaiYkd1lqKqI21BdrUSa5WLhjuuEjQKAIhAOWCWF5KYsd1TVFiGo%2B8Vm0T%2FUF0IoMopfrfMgEPtFpDKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAyWdYeklunTMyDKkq3AOZcc0ceScgSsZ3W69Ke1XItUQZxocKaKWRLBjX%2Fz7Iz1QiqpidkB6ijfdHlzT7SEM7JLkaa5nb2qMYv2Ljo7KXCD2ZwSz2nfxNqR%2FINQqrcqXb29I5hgBgnPetIGMCk2b2bG7QvpanMGAMB0i9OZYvLPvDQAFXD%2BDv7hnClt6H5i0lfOxQy41TEmccmN07Zsrc6uS0oADK1sqrBxi0XSC411yAdCA%2FKmb7sf8Ir28tzE0rXGWFAlEaHQ0fqxL3mupLyIOoe%2FwBYvixC4sy4BbO9Z58k1KN3oLI7abnR5PZhVTtFovjcREy3VxLU2%2FAgFnFuXspc304B%2BrWNpvVLf3VWs2Y%2Bwl4wz63bli%2BLufcNmHfi2Ljp%2BwD7L5SWCo8ZLx2ZuMswNAABOoIyljTRq%2B2VXUPTrFE60lpP7w2url4ezBCNhZd8oPt6WNwTx9QT1om60SCTdP14jz7dSX2wHs5weoZzl9z%2Fb0OkBkTuKalJjyO3tO9hIzXF%2BDKVvnDVupZiot6iI3A7vRudPEAAQPtDCgEZVB6UmXQGIFUeg5VOB8mmHSwzk6SQfK9KcsXLOqQW8%2BmA%2BegkIb06dpm8gLchZ7M530bBbBacZL8EHCAVPDr350u86hCsQJf4DCcxYDTBjqkAeD5%2ByP7xd1kyj7VSNsgYhO87j8mQ6LYovEyi1PQ9cjB5zD6%2BNDdeFu%2BNR27CNlBg92tgQWNRPekTMBF7FnVNpTO3tkxS3Ly7Hc6Bp7PY1J3jllOJdSJK6VsWo3a6ClKHgS9oUwamKOR7y4w7UHa8PW7h3A3vFeQNUSPhDxLQf5VUV0hiWK0AaKdd6mo6B98bWi4%2FXHzqDeWerwiM2jXpPOvoezr&X-Amz-Signature=783f50f5003cf64d0015c0548945233b09fa8f058c007192cb8610caa66778be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVO4EWI%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDInohHu34CBVLaiYkd1lqKqI21BdrUSa5WLhjuuEjQKAIhAOWCWF5KYsd1TVFiGo%2B8Vm0T%2FUF0IoMopfrfMgEPtFpDKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAyWdYeklunTMyDKkq3AOZcc0ceScgSsZ3W69Ke1XItUQZxocKaKWRLBjX%2Fz7Iz1QiqpidkB6ijfdHlzT7SEM7JLkaa5nb2qMYv2Ljo7KXCD2ZwSz2nfxNqR%2FINQqrcqXb29I5hgBgnPetIGMCk2b2bG7QvpanMGAMB0i9OZYvLPvDQAFXD%2BDv7hnClt6H5i0lfOxQy41TEmccmN07Zsrc6uS0oADK1sqrBxi0XSC411yAdCA%2FKmb7sf8Ir28tzE0rXGWFAlEaHQ0fqxL3mupLyIOoe%2FwBYvixC4sy4BbO9Z58k1KN3oLI7abnR5PZhVTtFovjcREy3VxLU2%2FAgFnFuXspc304B%2BrWNpvVLf3VWs2Y%2Bwl4wz63bli%2BLufcNmHfi2Ljp%2BwD7L5SWCo8ZLx2ZuMswNAABOoIyljTRq%2B2VXUPTrFE60lpP7w2url4ezBCNhZd8oPt6WNwTx9QT1om60SCTdP14jz7dSX2wHs5weoZzl9z%2Fb0OkBkTuKalJjyO3tO9hIzXF%2BDKVvnDVupZiot6iI3A7vRudPEAAQPtDCgEZVB6UmXQGIFUeg5VOB8mmHSwzk6SQfK9KcsXLOqQW8%2BmA%2BegkIb06dpm8gLchZ7M530bBbBacZL8EHCAVPDr350u86hCsQJf4DCcxYDTBjqkAeD5%2ByP7xd1kyj7VSNsgYhO87j8mQ6LYovEyi1PQ9cjB5zD6%2BNDdeFu%2BNR27CNlBg92tgQWNRPekTMBF7FnVNpTO3tkxS3Ly7Hc6Bp7PY1J3jllOJdSJK6VsWo3a6ClKHgS9oUwamKOR7y4w7UHa8PW7h3A3vFeQNUSPhDxLQf5VUV0hiWK0AaKdd6mo6B98bWi4%2FXHzqDeWerwiM2jXpPOvoezr&X-Amz-Signature=c2218a7a913f4d66c4c23bdb3b3db343e3f891680c99a5a4b2ada7b2d05a6fab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVO4EWI%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDInohHu34CBVLaiYkd1lqKqI21BdrUSa5WLhjuuEjQKAIhAOWCWF5KYsd1TVFiGo%2B8Vm0T%2FUF0IoMopfrfMgEPtFpDKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAyWdYeklunTMyDKkq3AOZcc0ceScgSsZ3W69Ke1XItUQZxocKaKWRLBjX%2Fz7Iz1QiqpidkB6ijfdHlzT7SEM7JLkaa5nb2qMYv2Ljo7KXCD2ZwSz2nfxNqR%2FINQqrcqXb29I5hgBgnPetIGMCk2b2bG7QvpanMGAMB0i9OZYvLPvDQAFXD%2BDv7hnClt6H5i0lfOxQy41TEmccmN07Zsrc6uS0oADK1sqrBxi0XSC411yAdCA%2FKmb7sf8Ir28tzE0rXGWFAlEaHQ0fqxL3mupLyIOoe%2FwBYvixC4sy4BbO9Z58k1KN3oLI7abnR5PZhVTtFovjcREy3VxLU2%2FAgFnFuXspc304B%2BrWNpvVLf3VWs2Y%2Bwl4wz63bli%2BLufcNmHfi2Ljp%2BwD7L5SWCo8ZLx2ZuMswNAABOoIyljTRq%2B2VXUPTrFE60lpP7w2url4ezBCNhZd8oPt6WNwTx9QT1om60SCTdP14jz7dSX2wHs5weoZzl9z%2Fb0OkBkTuKalJjyO3tO9hIzXF%2BDKVvnDVupZiot6iI3A7vRudPEAAQPtDCgEZVB6UmXQGIFUeg5VOB8mmHSwzk6SQfK9KcsXLOqQW8%2BmA%2BegkIb06dpm8gLchZ7M530bBbBacZL8EHCAVPDr350u86hCsQJf4DCcxYDTBjqkAeD5%2ByP7xd1kyj7VSNsgYhO87j8mQ6LYovEyi1PQ9cjB5zD6%2BNDdeFu%2BNR27CNlBg92tgQWNRPekTMBF7FnVNpTO3tkxS3Ly7Hc6Bp7PY1J3jllOJdSJK6VsWo3a6ClKHgS9oUwamKOR7y4w7UHa8PW7h3A3vFeQNUSPhDxLQf5VUV0hiWK0AaKdd6mo6B98bWi4%2FXHzqDeWerwiM2jXpPOvoezr&X-Amz-Signature=9e0e7e9a1efc31b82b0613cfb2aa74bb8a5c6c2594905e00779a231f381881b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVO4EWI%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDInohHu34CBVLaiYkd1lqKqI21BdrUSa5WLhjuuEjQKAIhAOWCWF5KYsd1TVFiGo%2B8Vm0T%2FUF0IoMopfrfMgEPtFpDKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAyWdYeklunTMyDKkq3AOZcc0ceScgSsZ3W69Ke1XItUQZxocKaKWRLBjX%2Fz7Iz1QiqpidkB6ijfdHlzT7SEM7JLkaa5nb2qMYv2Ljo7KXCD2ZwSz2nfxNqR%2FINQqrcqXb29I5hgBgnPetIGMCk2b2bG7QvpanMGAMB0i9OZYvLPvDQAFXD%2BDv7hnClt6H5i0lfOxQy41TEmccmN07Zsrc6uS0oADK1sqrBxi0XSC411yAdCA%2FKmb7sf8Ir28tzE0rXGWFAlEaHQ0fqxL3mupLyIOoe%2FwBYvixC4sy4BbO9Z58k1KN3oLI7abnR5PZhVTtFovjcREy3VxLU2%2FAgFnFuXspc304B%2BrWNpvVLf3VWs2Y%2Bwl4wz63bli%2BLufcNmHfi2Ljp%2BwD7L5SWCo8ZLx2ZuMswNAABOoIyljTRq%2B2VXUPTrFE60lpP7w2url4ezBCNhZd8oPt6WNwTx9QT1om60SCTdP14jz7dSX2wHs5weoZzl9z%2Fb0OkBkTuKalJjyO3tO9hIzXF%2BDKVvnDVupZiot6iI3A7vRudPEAAQPtDCgEZVB6UmXQGIFUeg5VOB8mmHSwzk6SQfK9KcsXLOqQW8%2BmA%2BegkIb06dpm8gLchZ7M530bBbBacZL8EHCAVPDr350u86hCsQJf4DCcxYDTBjqkAeD5%2ByP7xd1kyj7VSNsgYhO87j8mQ6LYovEyi1PQ9cjB5zD6%2BNDdeFu%2BNR27CNlBg92tgQWNRPekTMBF7FnVNpTO3tkxS3Ly7Hc6Bp7PY1J3jllOJdSJK6VsWo3a6ClKHgS9oUwamKOR7y4w7UHa8PW7h3A3vFeQNUSPhDxLQf5VUV0hiWK0AaKdd6mo6B98bWi4%2FXHzqDeWerwiM2jXpPOvoezr&X-Amz-Signature=8baeba6509cb081b6e70cf29eccbfe9ca6374760429a4058268872896882c241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


