---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-30T10:15:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-30T10:15:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVEZGG3F%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5S3nASIv8WpfKGNtFt8FxF7rOgrRVFek1i1FQhobyQAIgBRuclZf9GDszapqZefXX7Sq8XHeSzgV3VZiDNug%2FsVAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBnzr5DzFZ2KlMKlCrcAxaIs1Vt09kMX%2BNfsj0c6eIeTYPe731HGFIC2akNUtyjyOlvUIHbRaWjpOMLX6oDCWw7uXX%2FFNRIhB3NH%2FRq42VzV4ng0piQEEC1%2FzbJcaIFVXNmKtmZvkVOxafK0%2BbXHDF2N7jiRAC0ieqqhXjUNMy87clIJZ3ub5Ze2Row0NoTPgjPGzHfOjvVMlFb3EbBMeDvl9mYZt5mR74myPaEerQt6tBxXfsiHuNDQUcpq712EzAt6zG92FalzV%2FcjHA%2FkvMR0qjJsepSyPD06F08SdPuJf%2BtLPJu%2FiwFxgBpNdMTR2Hbk7N8e%2FondwqzpAtDtK9QyMylmu2mf%2BNUwvAApdhcBvjDWB6LWgzZZYpaKWg1NH2NTPkmEW4F5ZMcNh63cnBj%2ByNY%2BWzqQKjo0NY5CftnVDskWLPqRoxJylPWx2rN86ANBCZ4cBMDF1HZIjkbO66cr3z18I0V1XLQpplAzosoK5dDQ%2FD7SRaKzsgw6eoznoXYLz0h6xHsDzE5O1DxLHpcf%2BeB2Y48lKfrzxeUogUiMueHvcqpsFyYq%2BaWlzky81XBSYm%2BrR%2FjFxIWtPdw6R%2FRDVxpQ6IBe4mvFG1kMW9fM93C7cIbsLg8wQiX%2FhPlQc3cdtWFAapkBKMkMKLoqcQGOqUBZ8OqnGBsI2o7rjXeVmsKW0cmYn3CGKzVajB0daL%2FIC28DN3Sjb4nKNwbMYdgxJKdxczS5RV7j1OrfuYp3WtJry1vpP8eAgzoM9hBvgZFpvzwJ0iuD8pfv1vnpss3ZyX%2Bxpp4c1tcLTzFGHueRZvO3V5rNeqrIusi%2BcwVSR%2FVtco39Emnbk5L%2FMeCqGjT3lhy6AT3mC6yGlBBNItr3TmR8dzrAznz&X-Amz-Signature=67fd479a2634d09b9e7ee54cd5b7dc452f236e34119d2f8d608c2b38175b5031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVEZGG3F%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5S3nASIv8WpfKGNtFt8FxF7rOgrRVFek1i1FQhobyQAIgBRuclZf9GDszapqZefXX7Sq8XHeSzgV3VZiDNug%2FsVAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBnzr5DzFZ2KlMKlCrcAxaIs1Vt09kMX%2BNfsj0c6eIeTYPe731HGFIC2akNUtyjyOlvUIHbRaWjpOMLX6oDCWw7uXX%2FFNRIhB3NH%2FRq42VzV4ng0piQEEC1%2FzbJcaIFVXNmKtmZvkVOxafK0%2BbXHDF2N7jiRAC0ieqqhXjUNMy87clIJZ3ub5Ze2Row0NoTPgjPGzHfOjvVMlFb3EbBMeDvl9mYZt5mR74myPaEerQt6tBxXfsiHuNDQUcpq712EzAt6zG92FalzV%2FcjHA%2FkvMR0qjJsepSyPD06F08SdPuJf%2BtLPJu%2FiwFxgBpNdMTR2Hbk7N8e%2FondwqzpAtDtK9QyMylmu2mf%2BNUwvAApdhcBvjDWB6LWgzZZYpaKWg1NH2NTPkmEW4F5ZMcNh63cnBj%2ByNY%2BWzqQKjo0NY5CftnVDskWLPqRoxJylPWx2rN86ANBCZ4cBMDF1HZIjkbO66cr3z18I0V1XLQpplAzosoK5dDQ%2FD7SRaKzsgw6eoznoXYLz0h6xHsDzE5O1DxLHpcf%2BeB2Y48lKfrzxeUogUiMueHvcqpsFyYq%2BaWlzky81XBSYm%2BrR%2FjFxIWtPdw6R%2FRDVxpQ6IBe4mvFG1kMW9fM93C7cIbsLg8wQiX%2FhPlQc3cdtWFAapkBKMkMKLoqcQGOqUBZ8OqnGBsI2o7rjXeVmsKW0cmYn3CGKzVajB0daL%2FIC28DN3Sjb4nKNwbMYdgxJKdxczS5RV7j1OrfuYp3WtJry1vpP8eAgzoM9hBvgZFpvzwJ0iuD8pfv1vnpss3ZyX%2Bxpp4c1tcLTzFGHueRZvO3V5rNeqrIusi%2BcwVSR%2FVtco39Emnbk5L%2FMeCqGjT3lhy6AT3mC6yGlBBNItr3TmR8dzrAznz&X-Amz-Signature=77ac823bff29dede37ea5eef5016b75212cd1b3351fd2512f3aa8a646b715f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVEZGG3F%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5S3nASIv8WpfKGNtFt8FxF7rOgrRVFek1i1FQhobyQAIgBRuclZf9GDszapqZefXX7Sq8XHeSzgV3VZiDNug%2FsVAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBnzr5DzFZ2KlMKlCrcAxaIs1Vt09kMX%2BNfsj0c6eIeTYPe731HGFIC2akNUtyjyOlvUIHbRaWjpOMLX6oDCWw7uXX%2FFNRIhB3NH%2FRq42VzV4ng0piQEEC1%2FzbJcaIFVXNmKtmZvkVOxafK0%2BbXHDF2N7jiRAC0ieqqhXjUNMy87clIJZ3ub5Ze2Row0NoTPgjPGzHfOjvVMlFb3EbBMeDvl9mYZt5mR74myPaEerQt6tBxXfsiHuNDQUcpq712EzAt6zG92FalzV%2FcjHA%2FkvMR0qjJsepSyPD06F08SdPuJf%2BtLPJu%2FiwFxgBpNdMTR2Hbk7N8e%2FondwqzpAtDtK9QyMylmu2mf%2BNUwvAApdhcBvjDWB6LWgzZZYpaKWg1NH2NTPkmEW4F5ZMcNh63cnBj%2ByNY%2BWzqQKjo0NY5CftnVDskWLPqRoxJylPWx2rN86ANBCZ4cBMDF1HZIjkbO66cr3z18I0V1XLQpplAzosoK5dDQ%2FD7SRaKzsgw6eoznoXYLz0h6xHsDzE5O1DxLHpcf%2BeB2Y48lKfrzxeUogUiMueHvcqpsFyYq%2BaWlzky81XBSYm%2BrR%2FjFxIWtPdw6R%2FRDVxpQ6IBe4mvFG1kMW9fM93C7cIbsLg8wQiX%2FhPlQc3cdtWFAapkBKMkMKLoqcQGOqUBZ8OqnGBsI2o7rjXeVmsKW0cmYn3CGKzVajB0daL%2FIC28DN3Sjb4nKNwbMYdgxJKdxczS5RV7j1OrfuYp3WtJry1vpP8eAgzoM9hBvgZFpvzwJ0iuD8pfv1vnpss3ZyX%2Bxpp4c1tcLTzFGHueRZvO3V5rNeqrIusi%2BcwVSR%2FVtco39Emnbk5L%2FMeCqGjT3lhy6AT3mC6yGlBBNItr3TmR8dzrAznz&X-Amz-Signature=f2695ba62b31239e6dfb6f7c0501d6bc602f0280b64f9548a9754f773b0a05d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVEZGG3F%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5S3nASIv8WpfKGNtFt8FxF7rOgrRVFek1i1FQhobyQAIgBRuclZf9GDszapqZefXX7Sq8XHeSzgV3VZiDNug%2FsVAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBnzr5DzFZ2KlMKlCrcAxaIs1Vt09kMX%2BNfsj0c6eIeTYPe731HGFIC2akNUtyjyOlvUIHbRaWjpOMLX6oDCWw7uXX%2FFNRIhB3NH%2FRq42VzV4ng0piQEEC1%2FzbJcaIFVXNmKtmZvkVOxafK0%2BbXHDF2N7jiRAC0ieqqhXjUNMy87clIJZ3ub5Ze2Row0NoTPgjPGzHfOjvVMlFb3EbBMeDvl9mYZt5mR74myPaEerQt6tBxXfsiHuNDQUcpq712EzAt6zG92FalzV%2FcjHA%2FkvMR0qjJsepSyPD06F08SdPuJf%2BtLPJu%2FiwFxgBpNdMTR2Hbk7N8e%2FondwqzpAtDtK9QyMylmu2mf%2BNUwvAApdhcBvjDWB6LWgzZZYpaKWg1NH2NTPkmEW4F5ZMcNh63cnBj%2ByNY%2BWzqQKjo0NY5CftnVDskWLPqRoxJylPWx2rN86ANBCZ4cBMDF1HZIjkbO66cr3z18I0V1XLQpplAzosoK5dDQ%2FD7SRaKzsgw6eoznoXYLz0h6xHsDzE5O1DxLHpcf%2BeB2Y48lKfrzxeUogUiMueHvcqpsFyYq%2BaWlzky81XBSYm%2BrR%2FjFxIWtPdw6R%2FRDVxpQ6IBe4mvFG1kMW9fM93C7cIbsLg8wQiX%2FhPlQc3cdtWFAapkBKMkMKLoqcQGOqUBZ8OqnGBsI2o7rjXeVmsKW0cmYn3CGKzVajB0daL%2FIC28DN3Sjb4nKNwbMYdgxJKdxczS5RV7j1OrfuYp3WtJry1vpP8eAgzoM9hBvgZFpvzwJ0iuD8pfv1vnpss3ZyX%2Bxpp4c1tcLTzFGHueRZvO3V5rNeqrIusi%2BcwVSR%2FVtco39Emnbk5L%2FMeCqGjT3lhy6AT3mC6yGlBBNItr3TmR8dzrAznz&X-Amz-Signature=1c3adbecac6c5641094aa626f5819cbf4e5ec5f0e2c6bb067b43af0cc5d52106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVEZGG3F%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5S3nASIv8WpfKGNtFt8FxF7rOgrRVFek1i1FQhobyQAIgBRuclZf9GDszapqZefXX7Sq8XHeSzgV3VZiDNug%2FsVAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBnzr5DzFZ2KlMKlCrcAxaIs1Vt09kMX%2BNfsj0c6eIeTYPe731HGFIC2akNUtyjyOlvUIHbRaWjpOMLX6oDCWw7uXX%2FFNRIhB3NH%2FRq42VzV4ng0piQEEC1%2FzbJcaIFVXNmKtmZvkVOxafK0%2BbXHDF2N7jiRAC0ieqqhXjUNMy87clIJZ3ub5Ze2Row0NoTPgjPGzHfOjvVMlFb3EbBMeDvl9mYZt5mR74myPaEerQt6tBxXfsiHuNDQUcpq712EzAt6zG92FalzV%2FcjHA%2FkvMR0qjJsepSyPD06F08SdPuJf%2BtLPJu%2FiwFxgBpNdMTR2Hbk7N8e%2FondwqzpAtDtK9QyMylmu2mf%2BNUwvAApdhcBvjDWB6LWgzZZYpaKWg1NH2NTPkmEW4F5ZMcNh63cnBj%2ByNY%2BWzqQKjo0NY5CftnVDskWLPqRoxJylPWx2rN86ANBCZ4cBMDF1HZIjkbO66cr3z18I0V1XLQpplAzosoK5dDQ%2FD7SRaKzsgw6eoznoXYLz0h6xHsDzE5O1DxLHpcf%2BeB2Y48lKfrzxeUogUiMueHvcqpsFyYq%2BaWlzky81XBSYm%2BrR%2FjFxIWtPdw6R%2FRDVxpQ6IBe4mvFG1kMW9fM93C7cIbsLg8wQiX%2FhPlQc3cdtWFAapkBKMkMKLoqcQGOqUBZ8OqnGBsI2o7rjXeVmsKW0cmYn3CGKzVajB0daL%2FIC28DN3Sjb4nKNwbMYdgxJKdxczS5RV7j1OrfuYp3WtJry1vpP8eAgzoM9hBvgZFpvzwJ0iuD8pfv1vnpss3ZyX%2Bxpp4c1tcLTzFGHueRZvO3V5rNeqrIusi%2BcwVSR%2FVtco39Emnbk5L%2FMeCqGjT3lhy6AT3mC6yGlBBNItr3TmR8dzrAznz&X-Amz-Signature=dceb7f12dd67c08c3250c1496ea7c2ae7dbed6452f2c94c9a8d731773c611bb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVEZGG3F%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5S3nASIv8WpfKGNtFt8FxF7rOgrRVFek1i1FQhobyQAIgBRuclZf9GDszapqZefXX7Sq8XHeSzgV3VZiDNug%2FsVAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBnzr5DzFZ2KlMKlCrcAxaIs1Vt09kMX%2BNfsj0c6eIeTYPe731HGFIC2akNUtyjyOlvUIHbRaWjpOMLX6oDCWw7uXX%2FFNRIhB3NH%2FRq42VzV4ng0piQEEC1%2FzbJcaIFVXNmKtmZvkVOxafK0%2BbXHDF2N7jiRAC0ieqqhXjUNMy87clIJZ3ub5Ze2Row0NoTPgjPGzHfOjvVMlFb3EbBMeDvl9mYZt5mR74myPaEerQt6tBxXfsiHuNDQUcpq712EzAt6zG92FalzV%2FcjHA%2FkvMR0qjJsepSyPD06F08SdPuJf%2BtLPJu%2FiwFxgBpNdMTR2Hbk7N8e%2FondwqzpAtDtK9QyMylmu2mf%2BNUwvAApdhcBvjDWB6LWgzZZYpaKWg1NH2NTPkmEW4F5ZMcNh63cnBj%2ByNY%2BWzqQKjo0NY5CftnVDskWLPqRoxJylPWx2rN86ANBCZ4cBMDF1HZIjkbO66cr3z18I0V1XLQpplAzosoK5dDQ%2FD7SRaKzsgw6eoznoXYLz0h6xHsDzE5O1DxLHpcf%2BeB2Y48lKfrzxeUogUiMueHvcqpsFyYq%2BaWlzky81XBSYm%2BrR%2FjFxIWtPdw6R%2FRDVxpQ6IBe4mvFG1kMW9fM93C7cIbsLg8wQiX%2FhPlQc3cdtWFAapkBKMkMKLoqcQGOqUBZ8OqnGBsI2o7rjXeVmsKW0cmYn3CGKzVajB0daL%2FIC28DN3Sjb4nKNwbMYdgxJKdxczS5RV7j1OrfuYp3WtJry1vpP8eAgzoM9hBvgZFpvzwJ0iuD8pfv1vnpss3ZyX%2Bxpp4c1tcLTzFGHueRZvO3V5rNeqrIusi%2BcwVSR%2FVtco39Emnbk5L%2FMeCqGjT3lhy6AT3mC6yGlBBNItr3TmR8dzrAznz&X-Amz-Signature=86cec0c97b0809cff94688a01724e36bd35678034e1042fcd732bc0fe9b821d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVEZGG3F%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5S3nASIv8WpfKGNtFt8FxF7rOgrRVFek1i1FQhobyQAIgBRuclZf9GDszapqZefXX7Sq8XHeSzgV3VZiDNug%2FsVAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBnzr5DzFZ2KlMKlCrcAxaIs1Vt09kMX%2BNfsj0c6eIeTYPe731HGFIC2akNUtyjyOlvUIHbRaWjpOMLX6oDCWw7uXX%2FFNRIhB3NH%2FRq42VzV4ng0piQEEC1%2FzbJcaIFVXNmKtmZvkVOxafK0%2BbXHDF2N7jiRAC0ieqqhXjUNMy87clIJZ3ub5Ze2Row0NoTPgjPGzHfOjvVMlFb3EbBMeDvl9mYZt5mR74myPaEerQt6tBxXfsiHuNDQUcpq712EzAt6zG92FalzV%2FcjHA%2FkvMR0qjJsepSyPD06F08SdPuJf%2BtLPJu%2FiwFxgBpNdMTR2Hbk7N8e%2FondwqzpAtDtK9QyMylmu2mf%2BNUwvAApdhcBvjDWB6LWgzZZYpaKWg1NH2NTPkmEW4F5ZMcNh63cnBj%2ByNY%2BWzqQKjo0NY5CftnVDskWLPqRoxJylPWx2rN86ANBCZ4cBMDF1HZIjkbO66cr3z18I0V1XLQpplAzosoK5dDQ%2FD7SRaKzsgw6eoznoXYLz0h6xHsDzE5O1DxLHpcf%2BeB2Y48lKfrzxeUogUiMueHvcqpsFyYq%2BaWlzky81XBSYm%2BrR%2FjFxIWtPdw6R%2FRDVxpQ6IBe4mvFG1kMW9fM93C7cIbsLg8wQiX%2FhPlQc3cdtWFAapkBKMkMKLoqcQGOqUBZ8OqnGBsI2o7rjXeVmsKW0cmYn3CGKzVajB0daL%2FIC28DN3Sjb4nKNwbMYdgxJKdxczS5RV7j1OrfuYp3WtJry1vpP8eAgzoM9hBvgZFpvzwJ0iuD8pfv1vnpss3ZyX%2Bxpp4c1tcLTzFGHueRZvO3V5rNeqrIusi%2BcwVSR%2FVtco39Emnbk5L%2FMeCqGjT3lhy6AT3mC6yGlBBNItr3TmR8dzrAznz&X-Amz-Signature=8e4da2231b02359ce8d38ad604108ca0f786ea1e48ce078f8893c5dbaf5054c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVEZGG3F%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5S3nASIv8WpfKGNtFt8FxF7rOgrRVFek1i1FQhobyQAIgBRuclZf9GDszapqZefXX7Sq8XHeSzgV3VZiDNug%2FsVAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBnzr5DzFZ2KlMKlCrcAxaIs1Vt09kMX%2BNfsj0c6eIeTYPe731HGFIC2akNUtyjyOlvUIHbRaWjpOMLX6oDCWw7uXX%2FFNRIhB3NH%2FRq42VzV4ng0piQEEC1%2FzbJcaIFVXNmKtmZvkVOxafK0%2BbXHDF2N7jiRAC0ieqqhXjUNMy87clIJZ3ub5Ze2Row0NoTPgjPGzHfOjvVMlFb3EbBMeDvl9mYZt5mR74myPaEerQt6tBxXfsiHuNDQUcpq712EzAt6zG92FalzV%2FcjHA%2FkvMR0qjJsepSyPD06F08SdPuJf%2BtLPJu%2FiwFxgBpNdMTR2Hbk7N8e%2FondwqzpAtDtK9QyMylmu2mf%2BNUwvAApdhcBvjDWB6LWgzZZYpaKWg1NH2NTPkmEW4F5ZMcNh63cnBj%2ByNY%2BWzqQKjo0NY5CftnVDskWLPqRoxJylPWx2rN86ANBCZ4cBMDF1HZIjkbO66cr3z18I0V1XLQpplAzosoK5dDQ%2FD7SRaKzsgw6eoznoXYLz0h6xHsDzE5O1DxLHpcf%2BeB2Y48lKfrzxeUogUiMueHvcqpsFyYq%2BaWlzky81XBSYm%2BrR%2FjFxIWtPdw6R%2FRDVxpQ6IBe4mvFG1kMW9fM93C7cIbsLg8wQiX%2FhPlQc3cdtWFAapkBKMkMKLoqcQGOqUBZ8OqnGBsI2o7rjXeVmsKW0cmYn3CGKzVajB0daL%2FIC28DN3Sjb4nKNwbMYdgxJKdxczS5RV7j1OrfuYp3WtJry1vpP8eAgzoM9hBvgZFpvzwJ0iuD8pfv1vnpss3ZyX%2Bxpp4c1tcLTzFGHueRZvO3V5rNeqrIusi%2BcwVSR%2FVtco39Emnbk5L%2FMeCqGjT3lhy6AT3mC6yGlBBNItr3TmR8dzrAznz&X-Amz-Signature=21dcf1f7309e1bd4b4e2a5b706a7aba1cd0ef4c77be225c7edd49072676a6f22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVEZGG3F%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5S3nASIv8WpfKGNtFt8FxF7rOgrRVFek1i1FQhobyQAIgBRuclZf9GDszapqZefXX7Sq8XHeSzgV3VZiDNug%2FsVAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBnzr5DzFZ2KlMKlCrcAxaIs1Vt09kMX%2BNfsj0c6eIeTYPe731HGFIC2akNUtyjyOlvUIHbRaWjpOMLX6oDCWw7uXX%2FFNRIhB3NH%2FRq42VzV4ng0piQEEC1%2FzbJcaIFVXNmKtmZvkVOxafK0%2BbXHDF2N7jiRAC0ieqqhXjUNMy87clIJZ3ub5Ze2Row0NoTPgjPGzHfOjvVMlFb3EbBMeDvl9mYZt5mR74myPaEerQt6tBxXfsiHuNDQUcpq712EzAt6zG92FalzV%2FcjHA%2FkvMR0qjJsepSyPD06F08SdPuJf%2BtLPJu%2FiwFxgBpNdMTR2Hbk7N8e%2FondwqzpAtDtK9QyMylmu2mf%2BNUwvAApdhcBvjDWB6LWgzZZYpaKWg1NH2NTPkmEW4F5ZMcNh63cnBj%2ByNY%2BWzqQKjo0NY5CftnVDskWLPqRoxJylPWx2rN86ANBCZ4cBMDF1HZIjkbO66cr3z18I0V1XLQpplAzosoK5dDQ%2FD7SRaKzsgw6eoznoXYLz0h6xHsDzE5O1DxLHpcf%2BeB2Y48lKfrzxeUogUiMueHvcqpsFyYq%2BaWlzky81XBSYm%2BrR%2FjFxIWtPdw6R%2FRDVxpQ6IBe4mvFG1kMW9fM93C7cIbsLg8wQiX%2FhPlQc3cdtWFAapkBKMkMKLoqcQGOqUBZ8OqnGBsI2o7rjXeVmsKW0cmYn3CGKzVajB0daL%2FIC28DN3Sjb4nKNwbMYdgxJKdxczS5RV7j1OrfuYp3WtJry1vpP8eAgzoM9hBvgZFpvzwJ0iuD8pfv1vnpss3ZyX%2Bxpp4c1tcLTzFGHueRZvO3V5rNeqrIusi%2BcwVSR%2FVtco39Emnbk5L%2FMeCqGjT3lhy6AT3mC6yGlBBNItr3TmR8dzrAznz&X-Amz-Signature=c3d56192150cbc516dd64be39f6c800971d7489a43fdbc28da86f37e06941c44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVEZGG3F%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5S3nASIv8WpfKGNtFt8FxF7rOgrRVFek1i1FQhobyQAIgBRuclZf9GDszapqZefXX7Sq8XHeSzgV3VZiDNug%2FsVAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBnzr5DzFZ2KlMKlCrcAxaIs1Vt09kMX%2BNfsj0c6eIeTYPe731HGFIC2akNUtyjyOlvUIHbRaWjpOMLX6oDCWw7uXX%2FFNRIhB3NH%2FRq42VzV4ng0piQEEC1%2FzbJcaIFVXNmKtmZvkVOxafK0%2BbXHDF2N7jiRAC0ieqqhXjUNMy87clIJZ3ub5Ze2Row0NoTPgjPGzHfOjvVMlFb3EbBMeDvl9mYZt5mR74myPaEerQt6tBxXfsiHuNDQUcpq712EzAt6zG92FalzV%2FcjHA%2FkvMR0qjJsepSyPD06F08SdPuJf%2BtLPJu%2FiwFxgBpNdMTR2Hbk7N8e%2FondwqzpAtDtK9QyMylmu2mf%2BNUwvAApdhcBvjDWB6LWgzZZYpaKWg1NH2NTPkmEW4F5ZMcNh63cnBj%2ByNY%2BWzqQKjo0NY5CftnVDskWLPqRoxJylPWx2rN86ANBCZ4cBMDF1HZIjkbO66cr3z18I0V1XLQpplAzosoK5dDQ%2FD7SRaKzsgw6eoznoXYLz0h6xHsDzE5O1DxLHpcf%2BeB2Y48lKfrzxeUogUiMueHvcqpsFyYq%2BaWlzky81XBSYm%2BrR%2FjFxIWtPdw6R%2FRDVxpQ6IBe4mvFG1kMW9fM93C7cIbsLg8wQiX%2FhPlQc3cdtWFAapkBKMkMKLoqcQGOqUBZ8OqnGBsI2o7rjXeVmsKW0cmYn3CGKzVajB0daL%2FIC28DN3Sjb4nKNwbMYdgxJKdxczS5RV7j1OrfuYp3WtJry1vpP8eAgzoM9hBvgZFpvzwJ0iuD8pfv1vnpss3ZyX%2Bxpp4c1tcLTzFGHueRZvO3V5rNeqrIusi%2BcwVSR%2FVtco39Emnbk5L%2FMeCqGjT3lhy6AT3mC6yGlBBNItr3TmR8dzrAznz&X-Amz-Signature=7aa60785255b91d94e36ef6f6b9ac441b87d8f808ec0fa2d9fa62a6e412b467d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

Types of blocks in URDF:

- robot
- vars/Properties
- macros
- link:
	- visual
		- geometry
		- material
	- collision
		- origin
		- geometry
		- friction
	- inertial
- joint:
	- parent
	- child
	- origin

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
        <surface><friction><ode>
          <mu>1.0</mu>
          <mu2>1.0</mu2>
          <fdir1>1 0 0</fdir1>
        </ode></friction></surface>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVEZGG3F%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5S3nASIv8WpfKGNtFt8FxF7rOgrRVFek1i1FQhobyQAIgBRuclZf9GDszapqZefXX7Sq8XHeSzgV3VZiDNug%2FsVAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBnzr5DzFZ2KlMKlCrcAxaIs1Vt09kMX%2BNfsj0c6eIeTYPe731HGFIC2akNUtyjyOlvUIHbRaWjpOMLX6oDCWw7uXX%2FFNRIhB3NH%2FRq42VzV4ng0piQEEC1%2FzbJcaIFVXNmKtmZvkVOxafK0%2BbXHDF2N7jiRAC0ieqqhXjUNMy87clIJZ3ub5Ze2Row0NoTPgjPGzHfOjvVMlFb3EbBMeDvl9mYZt5mR74myPaEerQt6tBxXfsiHuNDQUcpq712EzAt6zG92FalzV%2FcjHA%2FkvMR0qjJsepSyPD06F08SdPuJf%2BtLPJu%2FiwFxgBpNdMTR2Hbk7N8e%2FondwqzpAtDtK9QyMylmu2mf%2BNUwvAApdhcBvjDWB6LWgzZZYpaKWg1NH2NTPkmEW4F5ZMcNh63cnBj%2ByNY%2BWzqQKjo0NY5CftnVDskWLPqRoxJylPWx2rN86ANBCZ4cBMDF1HZIjkbO66cr3z18I0V1XLQpplAzosoK5dDQ%2FD7SRaKzsgw6eoznoXYLz0h6xHsDzE5O1DxLHpcf%2BeB2Y48lKfrzxeUogUiMueHvcqpsFyYq%2BaWlzky81XBSYm%2BrR%2FjFxIWtPdw6R%2FRDVxpQ6IBe4mvFG1kMW9fM93C7cIbsLg8wQiX%2FhPlQc3cdtWFAapkBKMkMKLoqcQGOqUBZ8OqnGBsI2o7rjXeVmsKW0cmYn3CGKzVajB0daL%2FIC28DN3Sjb4nKNwbMYdgxJKdxczS5RV7j1OrfuYp3WtJry1vpP8eAgzoM9hBvgZFpvzwJ0iuD8pfv1vnpss3ZyX%2Bxpp4c1tcLTzFGHueRZvO3V5rNeqrIusi%2BcwVSR%2FVtco39Emnbk5L%2FMeCqGjT3lhy6AT3mC6yGlBBNItr3TmR8dzrAznz&X-Amz-Signature=23b3f31628552292510619fb1e998539d98d54a16b264c33e65a283fab3b8814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVEZGG3F%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5S3nASIv8WpfKGNtFt8FxF7rOgrRVFek1i1FQhobyQAIgBRuclZf9GDszapqZefXX7Sq8XHeSzgV3VZiDNug%2FsVAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBnzr5DzFZ2KlMKlCrcAxaIs1Vt09kMX%2BNfsj0c6eIeTYPe731HGFIC2akNUtyjyOlvUIHbRaWjpOMLX6oDCWw7uXX%2FFNRIhB3NH%2FRq42VzV4ng0piQEEC1%2FzbJcaIFVXNmKtmZvkVOxafK0%2BbXHDF2N7jiRAC0ieqqhXjUNMy87clIJZ3ub5Ze2Row0NoTPgjPGzHfOjvVMlFb3EbBMeDvl9mYZt5mR74myPaEerQt6tBxXfsiHuNDQUcpq712EzAt6zG92FalzV%2FcjHA%2FkvMR0qjJsepSyPD06F08SdPuJf%2BtLPJu%2FiwFxgBpNdMTR2Hbk7N8e%2FondwqzpAtDtK9QyMylmu2mf%2BNUwvAApdhcBvjDWB6LWgzZZYpaKWg1NH2NTPkmEW4F5ZMcNh63cnBj%2ByNY%2BWzqQKjo0NY5CftnVDskWLPqRoxJylPWx2rN86ANBCZ4cBMDF1HZIjkbO66cr3z18I0V1XLQpplAzosoK5dDQ%2FD7SRaKzsgw6eoznoXYLz0h6xHsDzE5O1DxLHpcf%2BeB2Y48lKfrzxeUogUiMueHvcqpsFyYq%2BaWlzky81XBSYm%2BrR%2FjFxIWtPdw6R%2FRDVxpQ6IBe4mvFG1kMW9fM93C7cIbsLg8wQiX%2FhPlQc3cdtWFAapkBKMkMKLoqcQGOqUBZ8OqnGBsI2o7rjXeVmsKW0cmYn3CGKzVajB0daL%2FIC28DN3Sjb4nKNwbMYdgxJKdxczS5RV7j1OrfuYp3WtJry1vpP8eAgzoM9hBvgZFpvzwJ0iuD8pfv1vnpss3ZyX%2Bxpp4c1tcLTzFGHueRZvO3V5rNeqrIusi%2BcwVSR%2FVtco39Emnbk5L%2FMeCqGjT3lhy6AT3mC6yGlBBNItr3TmR8dzrAznz&X-Amz-Signature=5e6fe42e8c0252ff1eddc17536470085816b3bd708a2e02dbe39111178ff1826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVEZGG3F%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5S3nASIv8WpfKGNtFt8FxF7rOgrRVFek1i1FQhobyQAIgBRuclZf9GDszapqZefXX7Sq8XHeSzgV3VZiDNug%2FsVAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBnzr5DzFZ2KlMKlCrcAxaIs1Vt09kMX%2BNfsj0c6eIeTYPe731HGFIC2akNUtyjyOlvUIHbRaWjpOMLX6oDCWw7uXX%2FFNRIhB3NH%2FRq42VzV4ng0piQEEC1%2FzbJcaIFVXNmKtmZvkVOxafK0%2BbXHDF2N7jiRAC0ieqqhXjUNMy87clIJZ3ub5Ze2Row0NoTPgjPGzHfOjvVMlFb3EbBMeDvl9mYZt5mR74myPaEerQt6tBxXfsiHuNDQUcpq712EzAt6zG92FalzV%2FcjHA%2FkvMR0qjJsepSyPD06F08SdPuJf%2BtLPJu%2FiwFxgBpNdMTR2Hbk7N8e%2FondwqzpAtDtK9QyMylmu2mf%2BNUwvAApdhcBvjDWB6LWgzZZYpaKWg1NH2NTPkmEW4F5ZMcNh63cnBj%2ByNY%2BWzqQKjo0NY5CftnVDskWLPqRoxJylPWx2rN86ANBCZ4cBMDF1HZIjkbO66cr3z18I0V1XLQpplAzosoK5dDQ%2FD7SRaKzsgw6eoznoXYLz0h6xHsDzE5O1DxLHpcf%2BeB2Y48lKfrzxeUogUiMueHvcqpsFyYq%2BaWlzky81XBSYm%2BrR%2FjFxIWtPdw6R%2FRDVxpQ6IBe4mvFG1kMW9fM93C7cIbsLg8wQiX%2FhPlQc3cdtWFAapkBKMkMKLoqcQGOqUBZ8OqnGBsI2o7rjXeVmsKW0cmYn3CGKzVajB0daL%2FIC28DN3Sjb4nKNwbMYdgxJKdxczS5RV7j1OrfuYp3WtJry1vpP8eAgzoM9hBvgZFpvzwJ0iuD8pfv1vnpss3ZyX%2Bxpp4c1tcLTzFGHueRZvO3V5rNeqrIusi%2BcwVSR%2FVtco39Emnbk5L%2FMeCqGjT3lhy6AT3mC6yGlBBNItr3TmR8dzrAznz&X-Amz-Signature=46478b19e63e9efb1ae79c60b85215b25975ecc0fbfcacee861833325168c85b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OOYDAHK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBttNdjVfkq314Ffq2sDqXG%2FxUXFiwXiEKuxgFFXkXygAiATOpC0xdsR9XY64mPNfNH4QZccs7KCl9QXT7fWWIHuEyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ottTOlwNv2v0ZVdKtwDFbsX574wpMN8hgvYDUBxBoU1L2NvBNmm%2F86RWSVP9W%2F%2F8LSUjnotQJ0XTAld2YWOacbreDaxeavQ%2BynZ%2FbTdt4rWaqRPFgmCJ0xdiAiCOx5U3%2BFanRx0BnmTH6BLBdo%2BcL%2B8gJFnxKoGfBlc2iwkhC%2FDKgQlzwYXNcYDiyQOYoOk8yoYTYCejE3J7h9IAnwOND1BOYUVqyDWpPiCBarhypW5Zk6NM8jVyNPfEHTtGas2BOq3WHRozgNCfBxFW826lHU5TxKr%2BEorizBekKhUZ%2FojU87v2B4gatdf54DngLT267WUeHB4TQsEulog5kOHZHn76x5tRkIrWuHY0fZnKHtbvl8xDZ2xwqsNridaUx4enLdEtFu5GSpGh73UKv7dNYnkuborRrIyuP%2Fy1Y2cq%2F%2Fv15Rwa2uGtNkvfEOqv5sAAW7kM7%2FKwnseUGWSswKXgEOhtlDisgeOGm1OX2%2F1bTFT96KTmBMrZ4I7XiIXyJr2QktHFwm6uexSCmPdR0Yjj9NGIZyP9pGqTeme1r6Mt6S7NRe2dDKGaUZKcRuTsqugFc1lU3igkj20%2FCLdvmWMweyNbGofH5yZm2y2FNKsO%2B76TQK2G6Z4wNFpB4RGHP8fv0%2FG1lNSu0%2B3N4EwzuipxAY6pgFIQ%2BpC76HS5xTgkqsl%2FiGc3rlsZniy7xRYY63XpTEUH5bVvaHY9WAQuDQk6OA11OM6FfG%2Bnj3udMe7o1xeGeBfKqlCmq6iWoMKwe8REM49CMHtubO%2BcRr4pdkzyUS8D9Y0lM9ep20cTZSpCxml4RfrsBaTEvsGIxGXxmW7YnNFeVaBmC7mXvko%2BtcFyWK1eAqu6QyGQvs%2BAYUh8TK2X%2B%2FXKFL4BC7y&X-Amz-Signature=f46107c108eb17e321e3c5dc7bb40ad881360d3f4341f015bc0c7c62a193e95a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OOYDAHK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBttNdjVfkq314Ffq2sDqXG%2FxUXFiwXiEKuxgFFXkXygAiATOpC0xdsR9XY64mPNfNH4QZccs7KCl9QXT7fWWIHuEyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ottTOlwNv2v0ZVdKtwDFbsX574wpMN8hgvYDUBxBoU1L2NvBNmm%2F86RWSVP9W%2F%2F8LSUjnotQJ0XTAld2YWOacbreDaxeavQ%2BynZ%2FbTdt4rWaqRPFgmCJ0xdiAiCOx5U3%2BFanRx0BnmTH6BLBdo%2BcL%2B8gJFnxKoGfBlc2iwkhC%2FDKgQlzwYXNcYDiyQOYoOk8yoYTYCejE3J7h9IAnwOND1BOYUVqyDWpPiCBarhypW5Zk6NM8jVyNPfEHTtGas2BOq3WHRozgNCfBxFW826lHU5TxKr%2BEorizBekKhUZ%2FojU87v2B4gatdf54DngLT267WUeHB4TQsEulog5kOHZHn76x5tRkIrWuHY0fZnKHtbvl8xDZ2xwqsNridaUx4enLdEtFu5GSpGh73UKv7dNYnkuborRrIyuP%2Fy1Y2cq%2F%2Fv15Rwa2uGtNkvfEOqv5sAAW7kM7%2FKwnseUGWSswKXgEOhtlDisgeOGm1OX2%2F1bTFT96KTmBMrZ4I7XiIXyJr2QktHFwm6uexSCmPdR0Yjj9NGIZyP9pGqTeme1r6Mt6S7NRe2dDKGaUZKcRuTsqugFc1lU3igkj20%2FCLdvmWMweyNbGofH5yZm2y2FNKsO%2B76TQK2G6Z4wNFpB4RGHP8fv0%2FG1lNSu0%2B3N4EwzuipxAY6pgFIQ%2BpC76HS5xTgkqsl%2FiGc3rlsZniy7xRYY63XpTEUH5bVvaHY9WAQuDQk6OA11OM6FfG%2Bnj3udMe7o1xeGeBfKqlCmq6iWoMKwe8REM49CMHtubO%2BcRr4pdkzyUS8D9Y0lM9ep20cTZSpCxml4RfrsBaTEvsGIxGXxmW7YnNFeVaBmC7mXvko%2BtcFyWK1eAqu6QyGQvs%2BAYUh8TK2X%2B%2FXKFL4BC7y&X-Amz-Signature=10044679764ca6b08788985290ccd6483bba312fc9ec8dd15d42229238a01479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OOYDAHK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBttNdjVfkq314Ffq2sDqXG%2FxUXFiwXiEKuxgFFXkXygAiATOpC0xdsR9XY64mPNfNH4QZccs7KCl9QXT7fWWIHuEyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ottTOlwNv2v0ZVdKtwDFbsX574wpMN8hgvYDUBxBoU1L2NvBNmm%2F86RWSVP9W%2F%2F8LSUjnotQJ0XTAld2YWOacbreDaxeavQ%2BynZ%2FbTdt4rWaqRPFgmCJ0xdiAiCOx5U3%2BFanRx0BnmTH6BLBdo%2BcL%2B8gJFnxKoGfBlc2iwkhC%2FDKgQlzwYXNcYDiyQOYoOk8yoYTYCejE3J7h9IAnwOND1BOYUVqyDWpPiCBarhypW5Zk6NM8jVyNPfEHTtGas2BOq3WHRozgNCfBxFW826lHU5TxKr%2BEorizBekKhUZ%2FojU87v2B4gatdf54DngLT267WUeHB4TQsEulog5kOHZHn76x5tRkIrWuHY0fZnKHtbvl8xDZ2xwqsNridaUx4enLdEtFu5GSpGh73UKv7dNYnkuborRrIyuP%2Fy1Y2cq%2F%2Fv15Rwa2uGtNkvfEOqv5sAAW7kM7%2FKwnseUGWSswKXgEOhtlDisgeOGm1OX2%2F1bTFT96KTmBMrZ4I7XiIXyJr2QktHFwm6uexSCmPdR0Yjj9NGIZyP9pGqTeme1r6Mt6S7NRe2dDKGaUZKcRuTsqugFc1lU3igkj20%2FCLdvmWMweyNbGofH5yZm2y2FNKsO%2B76TQK2G6Z4wNFpB4RGHP8fv0%2FG1lNSu0%2B3N4EwzuipxAY6pgFIQ%2BpC76HS5xTgkqsl%2FiGc3rlsZniy7xRYY63XpTEUH5bVvaHY9WAQuDQk6OA11OM6FfG%2Bnj3udMe7o1xeGeBfKqlCmq6iWoMKwe8REM49CMHtubO%2BcRr4pdkzyUS8D9Y0lM9ep20cTZSpCxml4RfrsBaTEvsGIxGXxmW7YnNFeVaBmC7mXvko%2BtcFyWK1eAqu6QyGQvs%2BAYUh8TK2X%2B%2FXKFL4BC7y&X-Amz-Signature=5b45a03df670b7017b3d9c0d1d4c8e8341685169f4bd21c3401982b74215eb82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OOYDAHK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBttNdjVfkq314Ffq2sDqXG%2FxUXFiwXiEKuxgFFXkXygAiATOpC0xdsR9XY64mPNfNH4QZccs7KCl9QXT7fWWIHuEyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ottTOlwNv2v0ZVdKtwDFbsX574wpMN8hgvYDUBxBoU1L2NvBNmm%2F86RWSVP9W%2F%2F8LSUjnotQJ0XTAld2YWOacbreDaxeavQ%2BynZ%2FbTdt4rWaqRPFgmCJ0xdiAiCOx5U3%2BFanRx0BnmTH6BLBdo%2BcL%2B8gJFnxKoGfBlc2iwkhC%2FDKgQlzwYXNcYDiyQOYoOk8yoYTYCejE3J7h9IAnwOND1BOYUVqyDWpPiCBarhypW5Zk6NM8jVyNPfEHTtGas2BOq3WHRozgNCfBxFW826lHU5TxKr%2BEorizBekKhUZ%2FojU87v2B4gatdf54DngLT267WUeHB4TQsEulog5kOHZHn76x5tRkIrWuHY0fZnKHtbvl8xDZ2xwqsNridaUx4enLdEtFu5GSpGh73UKv7dNYnkuborRrIyuP%2Fy1Y2cq%2F%2Fv15Rwa2uGtNkvfEOqv5sAAW7kM7%2FKwnseUGWSswKXgEOhtlDisgeOGm1OX2%2F1bTFT96KTmBMrZ4I7XiIXyJr2QktHFwm6uexSCmPdR0Yjj9NGIZyP9pGqTeme1r6Mt6S7NRe2dDKGaUZKcRuTsqugFc1lU3igkj20%2FCLdvmWMweyNbGofH5yZm2y2FNKsO%2B76TQK2G6Z4wNFpB4RGHP8fv0%2FG1lNSu0%2B3N4EwzuipxAY6pgFIQ%2BpC76HS5xTgkqsl%2FiGc3rlsZniy7xRYY63XpTEUH5bVvaHY9WAQuDQk6OA11OM6FfG%2Bnj3udMe7o1xeGeBfKqlCmq6iWoMKwe8REM49CMHtubO%2BcRr4pdkzyUS8D9Y0lM9ep20cTZSpCxml4RfrsBaTEvsGIxGXxmW7YnNFeVaBmC7mXvko%2BtcFyWK1eAqu6QyGQvs%2BAYUh8TK2X%2B%2FXKFL4BC7y&X-Amz-Signature=2d21b37b29adb3d87ce0e328284d1f7dcba009fffe1a4efc8854f3f6ba477516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OOYDAHK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBttNdjVfkq314Ffq2sDqXG%2FxUXFiwXiEKuxgFFXkXygAiATOpC0xdsR9XY64mPNfNH4QZccs7KCl9QXT7fWWIHuEyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ottTOlwNv2v0ZVdKtwDFbsX574wpMN8hgvYDUBxBoU1L2NvBNmm%2F86RWSVP9W%2F%2F8LSUjnotQJ0XTAld2YWOacbreDaxeavQ%2BynZ%2FbTdt4rWaqRPFgmCJ0xdiAiCOx5U3%2BFanRx0BnmTH6BLBdo%2BcL%2B8gJFnxKoGfBlc2iwkhC%2FDKgQlzwYXNcYDiyQOYoOk8yoYTYCejE3J7h9IAnwOND1BOYUVqyDWpPiCBarhypW5Zk6NM8jVyNPfEHTtGas2BOq3WHRozgNCfBxFW826lHU5TxKr%2BEorizBekKhUZ%2FojU87v2B4gatdf54DngLT267WUeHB4TQsEulog5kOHZHn76x5tRkIrWuHY0fZnKHtbvl8xDZ2xwqsNridaUx4enLdEtFu5GSpGh73UKv7dNYnkuborRrIyuP%2Fy1Y2cq%2F%2Fv15Rwa2uGtNkvfEOqv5sAAW7kM7%2FKwnseUGWSswKXgEOhtlDisgeOGm1OX2%2F1bTFT96KTmBMrZ4I7XiIXyJr2QktHFwm6uexSCmPdR0Yjj9NGIZyP9pGqTeme1r6Mt6S7NRe2dDKGaUZKcRuTsqugFc1lU3igkj20%2FCLdvmWMweyNbGofH5yZm2y2FNKsO%2B76TQK2G6Z4wNFpB4RGHP8fv0%2FG1lNSu0%2B3N4EwzuipxAY6pgFIQ%2BpC76HS5xTgkqsl%2FiGc3rlsZniy7xRYY63XpTEUH5bVvaHY9WAQuDQk6OA11OM6FfG%2Bnj3udMe7o1xeGeBfKqlCmq6iWoMKwe8REM49CMHtubO%2BcRr4pdkzyUS8D9Y0lM9ep20cTZSpCxml4RfrsBaTEvsGIxGXxmW7YnNFeVaBmC7mXvko%2BtcFyWK1eAqu6QyGQvs%2BAYUh8TK2X%2B%2FXKFL4BC7y&X-Amz-Signature=7d339a7252c423d0f2dfa0b4748528c8d980d9c3a6361efb2a439c022813263d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OOYDAHK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBttNdjVfkq314Ffq2sDqXG%2FxUXFiwXiEKuxgFFXkXygAiATOpC0xdsR9XY64mPNfNH4QZccs7KCl9QXT7fWWIHuEyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ottTOlwNv2v0ZVdKtwDFbsX574wpMN8hgvYDUBxBoU1L2NvBNmm%2F86RWSVP9W%2F%2F8LSUjnotQJ0XTAld2YWOacbreDaxeavQ%2BynZ%2FbTdt4rWaqRPFgmCJ0xdiAiCOx5U3%2BFanRx0BnmTH6BLBdo%2BcL%2B8gJFnxKoGfBlc2iwkhC%2FDKgQlzwYXNcYDiyQOYoOk8yoYTYCejE3J7h9IAnwOND1BOYUVqyDWpPiCBarhypW5Zk6NM8jVyNPfEHTtGas2BOq3WHRozgNCfBxFW826lHU5TxKr%2BEorizBekKhUZ%2FojU87v2B4gatdf54DngLT267WUeHB4TQsEulog5kOHZHn76x5tRkIrWuHY0fZnKHtbvl8xDZ2xwqsNridaUx4enLdEtFu5GSpGh73UKv7dNYnkuborRrIyuP%2Fy1Y2cq%2F%2Fv15Rwa2uGtNkvfEOqv5sAAW7kM7%2FKwnseUGWSswKXgEOhtlDisgeOGm1OX2%2F1bTFT96KTmBMrZ4I7XiIXyJr2QktHFwm6uexSCmPdR0Yjj9NGIZyP9pGqTeme1r6Mt6S7NRe2dDKGaUZKcRuTsqugFc1lU3igkj20%2FCLdvmWMweyNbGofH5yZm2y2FNKsO%2B76TQK2G6Z4wNFpB4RGHP8fv0%2FG1lNSu0%2B3N4EwzuipxAY6pgFIQ%2BpC76HS5xTgkqsl%2FiGc3rlsZniy7xRYY63XpTEUH5bVvaHY9WAQuDQk6OA11OM6FfG%2Bnj3udMe7o1xeGeBfKqlCmq6iWoMKwe8REM49CMHtubO%2BcRr4pdkzyUS8D9Y0lM9ep20cTZSpCxml4RfrsBaTEvsGIxGXxmW7YnNFeVaBmC7mXvko%2BtcFyWK1eAqu6QyGQvs%2BAYUh8TK2X%2B%2FXKFL4BC7y&X-Amz-Signature=8dd3ea807ea726e8fbf2b1a793e670a8ac7873957e714cfd40a8b6704a5d5507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OOYDAHK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBttNdjVfkq314Ffq2sDqXG%2FxUXFiwXiEKuxgFFXkXygAiATOpC0xdsR9XY64mPNfNH4QZccs7KCl9QXT7fWWIHuEyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ottTOlwNv2v0ZVdKtwDFbsX574wpMN8hgvYDUBxBoU1L2NvBNmm%2F86RWSVP9W%2F%2F8LSUjnotQJ0XTAld2YWOacbreDaxeavQ%2BynZ%2FbTdt4rWaqRPFgmCJ0xdiAiCOx5U3%2BFanRx0BnmTH6BLBdo%2BcL%2B8gJFnxKoGfBlc2iwkhC%2FDKgQlzwYXNcYDiyQOYoOk8yoYTYCejE3J7h9IAnwOND1BOYUVqyDWpPiCBarhypW5Zk6NM8jVyNPfEHTtGas2BOq3WHRozgNCfBxFW826lHU5TxKr%2BEorizBekKhUZ%2FojU87v2B4gatdf54DngLT267WUeHB4TQsEulog5kOHZHn76x5tRkIrWuHY0fZnKHtbvl8xDZ2xwqsNridaUx4enLdEtFu5GSpGh73UKv7dNYnkuborRrIyuP%2Fy1Y2cq%2F%2Fv15Rwa2uGtNkvfEOqv5sAAW7kM7%2FKwnseUGWSswKXgEOhtlDisgeOGm1OX2%2F1bTFT96KTmBMrZ4I7XiIXyJr2QktHFwm6uexSCmPdR0Yjj9NGIZyP9pGqTeme1r6Mt6S7NRe2dDKGaUZKcRuTsqugFc1lU3igkj20%2FCLdvmWMweyNbGofH5yZm2y2FNKsO%2B76TQK2G6Z4wNFpB4RGHP8fv0%2FG1lNSu0%2B3N4EwzuipxAY6pgFIQ%2BpC76HS5xTgkqsl%2FiGc3rlsZniy7xRYY63XpTEUH5bVvaHY9WAQuDQk6OA11OM6FfG%2Bnj3udMe7o1xeGeBfKqlCmq6iWoMKwe8REM49CMHtubO%2BcRr4pdkzyUS8D9Y0lM9ep20cTZSpCxml4RfrsBaTEvsGIxGXxmW7YnNFeVaBmC7mXvko%2BtcFyWK1eAqu6QyGQvs%2BAYUh8TK2X%2B%2FXKFL4BC7y&X-Amz-Signature=384cb0fccfec77f4f42b14db98e8173f554a3695b84354015e03ca4a7f7ae772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
