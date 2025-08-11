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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFQF6WP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzT7hS1pm5%2BU3L%2BZoRbov9%2FKLNM9NCsgSZTXiAttwZkQIgSfLU%2F8KqdnjZdD5xXQASPdgN3H8VAJK6FScq3xsxgVIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0EDJ71pY5jXbUiHSrcA8tZpHLL1Nft47QF1YDDBWpd0DIBlvoOt%2BX5zw4au%2BhCn2ZZUmGUjfz%2BHUDtrO6Bgn3uznzhPg20N1sKtXMAI3WJDuU%2F4aG34SysMK9klobcGpxaezMx%2B0oEPyW99uT0kKsiquNaX3FIezl2iPEpWLGXOlD%2BH%2FRgEiRliqQiN%2Fd660RrIpVJClMDWArxAwgeGd21OEORlGugMV2vLZQpEwm4k1q8kk%2F5sHloiyfuw7LNBxiTZCL9udQavGZYVldR0RJl%2BVV7NLOdPon4Rnagnfoul1wyEe6d2S2dLUhOmieY7mFnisQoCzh2Pg3MY9G0Pv7mtoRPlSTa6%2BtV0EqrD35%2FE%2FHuP%2Fueck9mqJ3oJGaytyF4PDwd2DEDh5sE3qKyMVz3aWHuhLt9RP0jiE28PNuFG2tTsKEzl1%2FA5wh%2B0r7y8DPoVyEf76haB0h5nFDLl5HYNNJRrn6N%2F5SCy%2FemIPbR7GAyRt9h76EoVkd6c2wlVZHKZjjlUHLORoC1oh574g%2Bu4AEG5uNqwAlAaeXE3uh6g%2FToesgGkwJuDr2eBqnZgKtb5Bz3oqsK%2FXvkbfvERyF7AGf0gE%2FCMlGuX7IxYL5JfWsK8TVPD7SjNUcH8RtoGJoi213mTkI4nrXBMJij58QGOqUBSWi%2B0f%2Bcdt3XnYiVPTDPJZsbSQnAq9uOcgH5TNMVvB0TZaVG2sA0K47UlZVoPd%2FKsQsEHcnct5hmVWRkgPQAiLwQ6cVeTnxp4KsBqFbsPPNOKncVL8mCQcMpWVMQ%2Fbp8NHRqCuSNQmWDW1WUGAsdg4Q%2BGDpvku%2BsYS0uvW1swbtejd9FiVMrc%2FJfBbstL6zVJAulBRqpBZtT6fuszeIAXIVupghK&X-Amz-Signature=47cd389c3c051c5e63a96633cc9c5c390015830833850cd541817b90bd0d81dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFQF6WP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzT7hS1pm5%2BU3L%2BZoRbov9%2FKLNM9NCsgSZTXiAttwZkQIgSfLU%2F8KqdnjZdD5xXQASPdgN3H8VAJK6FScq3xsxgVIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0EDJ71pY5jXbUiHSrcA8tZpHLL1Nft47QF1YDDBWpd0DIBlvoOt%2BX5zw4au%2BhCn2ZZUmGUjfz%2BHUDtrO6Bgn3uznzhPg20N1sKtXMAI3WJDuU%2F4aG34SysMK9klobcGpxaezMx%2B0oEPyW99uT0kKsiquNaX3FIezl2iPEpWLGXOlD%2BH%2FRgEiRliqQiN%2Fd660RrIpVJClMDWArxAwgeGd21OEORlGugMV2vLZQpEwm4k1q8kk%2F5sHloiyfuw7LNBxiTZCL9udQavGZYVldR0RJl%2BVV7NLOdPon4Rnagnfoul1wyEe6d2S2dLUhOmieY7mFnisQoCzh2Pg3MY9G0Pv7mtoRPlSTa6%2BtV0EqrD35%2FE%2FHuP%2Fueck9mqJ3oJGaytyF4PDwd2DEDh5sE3qKyMVz3aWHuhLt9RP0jiE28PNuFG2tTsKEzl1%2FA5wh%2B0r7y8DPoVyEf76haB0h5nFDLl5HYNNJRrn6N%2F5SCy%2FemIPbR7GAyRt9h76EoVkd6c2wlVZHKZjjlUHLORoC1oh574g%2Bu4AEG5uNqwAlAaeXE3uh6g%2FToesgGkwJuDr2eBqnZgKtb5Bz3oqsK%2FXvkbfvERyF7AGf0gE%2FCMlGuX7IxYL5JfWsK8TVPD7SjNUcH8RtoGJoi213mTkI4nrXBMJij58QGOqUBSWi%2B0f%2Bcdt3XnYiVPTDPJZsbSQnAq9uOcgH5TNMVvB0TZaVG2sA0K47UlZVoPd%2FKsQsEHcnct5hmVWRkgPQAiLwQ6cVeTnxp4KsBqFbsPPNOKncVL8mCQcMpWVMQ%2Fbp8NHRqCuSNQmWDW1WUGAsdg4Q%2BGDpvku%2BsYS0uvW1swbtejd9FiVMrc%2FJfBbstL6zVJAulBRqpBZtT6fuszeIAXIVupghK&X-Amz-Signature=10dcdd534ea33504ba1e9a3017bb49a903ac3b25336718021fb8a25d552f5e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFQF6WP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzT7hS1pm5%2BU3L%2BZoRbov9%2FKLNM9NCsgSZTXiAttwZkQIgSfLU%2F8KqdnjZdD5xXQASPdgN3H8VAJK6FScq3xsxgVIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0EDJ71pY5jXbUiHSrcA8tZpHLL1Nft47QF1YDDBWpd0DIBlvoOt%2BX5zw4au%2BhCn2ZZUmGUjfz%2BHUDtrO6Bgn3uznzhPg20N1sKtXMAI3WJDuU%2F4aG34SysMK9klobcGpxaezMx%2B0oEPyW99uT0kKsiquNaX3FIezl2iPEpWLGXOlD%2BH%2FRgEiRliqQiN%2Fd660RrIpVJClMDWArxAwgeGd21OEORlGugMV2vLZQpEwm4k1q8kk%2F5sHloiyfuw7LNBxiTZCL9udQavGZYVldR0RJl%2BVV7NLOdPon4Rnagnfoul1wyEe6d2S2dLUhOmieY7mFnisQoCzh2Pg3MY9G0Pv7mtoRPlSTa6%2BtV0EqrD35%2FE%2FHuP%2Fueck9mqJ3oJGaytyF4PDwd2DEDh5sE3qKyMVz3aWHuhLt9RP0jiE28PNuFG2tTsKEzl1%2FA5wh%2B0r7y8DPoVyEf76haB0h5nFDLl5HYNNJRrn6N%2F5SCy%2FemIPbR7GAyRt9h76EoVkd6c2wlVZHKZjjlUHLORoC1oh574g%2Bu4AEG5uNqwAlAaeXE3uh6g%2FToesgGkwJuDr2eBqnZgKtb5Bz3oqsK%2FXvkbfvERyF7AGf0gE%2FCMlGuX7IxYL5JfWsK8TVPD7SjNUcH8RtoGJoi213mTkI4nrXBMJij58QGOqUBSWi%2B0f%2Bcdt3XnYiVPTDPJZsbSQnAq9uOcgH5TNMVvB0TZaVG2sA0K47UlZVoPd%2FKsQsEHcnct5hmVWRkgPQAiLwQ6cVeTnxp4KsBqFbsPPNOKncVL8mCQcMpWVMQ%2Fbp8NHRqCuSNQmWDW1WUGAsdg4Q%2BGDpvku%2BsYS0uvW1swbtejd9FiVMrc%2FJfBbstL6zVJAulBRqpBZtT6fuszeIAXIVupghK&X-Amz-Signature=6229301f778dd50476a9bbdc96fd761609d6d64dbc6caedaac6462ec9f29cd1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFQF6WP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzT7hS1pm5%2BU3L%2BZoRbov9%2FKLNM9NCsgSZTXiAttwZkQIgSfLU%2F8KqdnjZdD5xXQASPdgN3H8VAJK6FScq3xsxgVIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0EDJ71pY5jXbUiHSrcA8tZpHLL1Nft47QF1YDDBWpd0DIBlvoOt%2BX5zw4au%2BhCn2ZZUmGUjfz%2BHUDtrO6Bgn3uznzhPg20N1sKtXMAI3WJDuU%2F4aG34SysMK9klobcGpxaezMx%2B0oEPyW99uT0kKsiquNaX3FIezl2iPEpWLGXOlD%2BH%2FRgEiRliqQiN%2Fd660RrIpVJClMDWArxAwgeGd21OEORlGugMV2vLZQpEwm4k1q8kk%2F5sHloiyfuw7LNBxiTZCL9udQavGZYVldR0RJl%2BVV7NLOdPon4Rnagnfoul1wyEe6d2S2dLUhOmieY7mFnisQoCzh2Pg3MY9G0Pv7mtoRPlSTa6%2BtV0EqrD35%2FE%2FHuP%2Fueck9mqJ3oJGaytyF4PDwd2DEDh5sE3qKyMVz3aWHuhLt9RP0jiE28PNuFG2tTsKEzl1%2FA5wh%2B0r7y8DPoVyEf76haB0h5nFDLl5HYNNJRrn6N%2F5SCy%2FemIPbR7GAyRt9h76EoVkd6c2wlVZHKZjjlUHLORoC1oh574g%2Bu4AEG5uNqwAlAaeXE3uh6g%2FToesgGkwJuDr2eBqnZgKtb5Bz3oqsK%2FXvkbfvERyF7AGf0gE%2FCMlGuX7IxYL5JfWsK8TVPD7SjNUcH8RtoGJoi213mTkI4nrXBMJij58QGOqUBSWi%2B0f%2Bcdt3XnYiVPTDPJZsbSQnAq9uOcgH5TNMVvB0TZaVG2sA0K47UlZVoPd%2FKsQsEHcnct5hmVWRkgPQAiLwQ6cVeTnxp4KsBqFbsPPNOKncVL8mCQcMpWVMQ%2Fbp8NHRqCuSNQmWDW1WUGAsdg4Q%2BGDpvku%2BsYS0uvW1swbtejd9FiVMrc%2FJfBbstL6zVJAulBRqpBZtT6fuszeIAXIVupghK&X-Amz-Signature=47ed0b2911ef2b677a5f7658ec0c2abd269bd58cd49e8dd9768302399db838d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFQF6WP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzT7hS1pm5%2BU3L%2BZoRbov9%2FKLNM9NCsgSZTXiAttwZkQIgSfLU%2F8KqdnjZdD5xXQASPdgN3H8VAJK6FScq3xsxgVIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0EDJ71pY5jXbUiHSrcA8tZpHLL1Nft47QF1YDDBWpd0DIBlvoOt%2BX5zw4au%2BhCn2ZZUmGUjfz%2BHUDtrO6Bgn3uznzhPg20N1sKtXMAI3WJDuU%2F4aG34SysMK9klobcGpxaezMx%2B0oEPyW99uT0kKsiquNaX3FIezl2iPEpWLGXOlD%2BH%2FRgEiRliqQiN%2Fd660RrIpVJClMDWArxAwgeGd21OEORlGugMV2vLZQpEwm4k1q8kk%2F5sHloiyfuw7LNBxiTZCL9udQavGZYVldR0RJl%2BVV7NLOdPon4Rnagnfoul1wyEe6d2S2dLUhOmieY7mFnisQoCzh2Pg3MY9G0Pv7mtoRPlSTa6%2BtV0EqrD35%2FE%2FHuP%2Fueck9mqJ3oJGaytyF4PDwd2DEDh5sE3qKyMVz3aWHuhLt9RP0jiE28PNuFG2tTsKEzl1%2FA5wh%2B0r7y8DPoVyEf76haB0h5nFDLl5HYNNJRrn6N%2F5SCy%2FemIPbR7GAyRt9h76EoVkd6c2wlVZHKZjjlUHLORoC1oh574g%2Bu4AEG5uNqwAlAaeXE3uh6g%2FToesgGkwJuDr2eBqnZgKtb5Bz3oqsK%2FXvkbfvERyF7AGf0gE%2FCMlGuX7IxYL5JfWsK8TVPD7SjNUcH8RtoGJoi213mTkI4nrXBMJij58QGOqUBSWi%2B0f%2Bcdt3XnYiVPTDPJZsbSQnAq9uOcgH5TNMVvB0TZaVG2sA0K47UlZVoPd%2FKsQsEHcnct5hmVWRkgPQAiLwQ6cVeTnxp4KsBqFbsPPNOKncVL8mCQcMpWVMQ%2Fbp8NHRqCuSNQmWDW1WUGAsdg4Q%2BGDpvku%2BsYS0uvW1swbtejd9FiVMrc%2FJfBbstL6zVJAulBRqpBZtT6fuszeIAXIVupghK&X-Amz-Signature=9f9fad3b24bfe2993033cd21c7eb410315947d6128ecc60f824971ebee76504e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFQF6WP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzT7hS1pm5%2BU3L%2BZoRbov9%2FKLNM9NCsgSZTXiAttwZkQIgSfLU%2F8KqdnjZdD5xXQASPdgN3H8VAJK6FScq3xsxgVIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0EDJ71pY5jXbUiHSrcA8tZpHLL1Nft47QF1YDDBWpd0DIBlvoOt%2BX5zw4au%2BhCn2ZZUmGUjfz%2BHUDtrO6Bgn3uznzhPg20N1sKtXMAI3WJDuU%2F4aG34SysMK9klobcGpxaezMx%2B0oEPyW99uT0kKsiquNaX3FIezl2iPEpWLGXOlD%2BH%2FRgEiRliqQiN%2Fd660RrIpVJClMDWArxAwgeGd21OEORlGugMV2vLZQpEwm4k1q8kk%2F5sHloiyfuw7LNBxiTZCL9udQavGZYVldR0RJl%2BVV7NLOdPon4Rnagnfoul1wyEe6d2S2dLUhOmieY7mFnisQoCzh2Pg3MY9G0Pv7mtoRPlSTa6%2BtV0EqrD35%2FE%2FHuP%2Fueck9mqJ3oJGaytyF4PDwd2DEDh5sE3qKyMVz3aWHuhLt9RP0jiE28PNuFG2tTsKEzl1%2FA5wh%2B0r7y8DPoVyEf76haB0h5nFDLl5HYNNJRrn6N%2F5SCy%2FemIPbR7GAyRt9h76EoVkd6c2wlVZHKZjjlUHLORoC1oh574g%2Bu4AEG5uNqwAlAaeXE3uh6g%2FToesgGkwJuDr2eBqnZgKtb5Bz3oqsK%2FXvkbfvERyF7AGf0gE%2FCMlGuX7IxYL5JfWsK8TVPD7SjNUcH8RtoGJoi213mTkI4nrXBMJij58QGOqUBSWi%2B0f%2Bcdt3XnYiVPTDPJZsbSQnAq9uOcgH5TNMVvB0TZaVG2sA0K47UlZVoPd%2FKsQsEHcnct5hmVWRkgPQAiLwQ6cVeTnxp4KsBqFbsPPNOKncVL8mCQcMpWVMQ%2Fbp8NHRqCuSNQmWDW1WUGAsdg4Q%2BGDpvku%2BsYS0uvW1swbtejd9FiVMrc%2FJfBbstL6zVJAulBRqpBZtT6fuszeIAXIVupghK&X-Amz-Signature=a3a8f40aa0cc6d71736b4f4557f23a3d09b36243ac5cca6e0d42d0c0fd40406f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFQF6WP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzT7hS1pm5%2BU3L%2BZoRbov9%2FKLNM9NCsgSZTXiAttwZkQIgSfLU%2F8KqdnjZdD5xXQASPdgN3H8VAJK6FScq3xsxgVIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0EDJ71pY5jXbUiHSrcA8tZpHLL1Nft47QF1YDDBWpd0DIBlvoOt%2BX5zw4au%2BhCn2ZZUmGUjfz%2BHUDtrO6Bgn3uznzhPg20N1sKtXMAI3WJDuU%2F4aG34SysMK9klobcGpxaezMx%2B0oEPyW99uT0kKsiquNaX3FIezl2iPEpWLGXOlD%2BH%2FRgEiRliqQiN%2Fd660RrIpVJClMDWArxAwgeGd21OEORlGugMV2vLZQpEwm4k1q8kk%2F5sHloiyfuw7LNBxiTZCL9udQavGZYVldR0RJl%2BVV7NLOdPon4Rnagnfoul1wyEe6d2S2dLUhOmieY7mFnisQoCzh2Pg3MY9G0Pv7mtoRPlSTa6%2BtV0EqrD35%2FE%2FHuP%2Fueck9mqJ3oJGaytyF4PDwd2DEDh5sE3qKyMVz3aWHuhLt9RP0jiE28PNuFG2tTsKEzl1%2FA5wh%2B0r7y8DPoVyEf76haB0h5nFDLl5HYNNJRrn6N%2F5SCy%2FemIPbR7GAyRt9h76EoVkd6c2wlVZHKZjjlUHLORoC1oh574g%2Bu4AEG5uNqwAlAaeXE3uh6g%2FToesgGkwJuDr2eBqnZgKtb5Bz3oqsK%2FXvkbfvERyF7AGf0gE%2FCMlGuX7IxYL5JfWsK8TVPD7SjNUcH8RtoGJoi213mTkI4nrXBMJij58QGOqUBSWi%2B0f%2Bcdt3XnYiVPTDPJZsbSQnAq9uOcgH5TNMVvB0TZaVG2sA0K47UlZVoPd%2FKsQsEHcnct5hmVWRkgPQAiLwQ6cVeTnxp4KsBqFbsPPNOKncVL8mCQcMpWVMQ%2Fbp8NHRqCuSNQmWDW1WUGAsdg4Q%2BGDpvku%2BsYS0uvW1swbtejd9FiVMrc%2FJfBbstL6zVJAulBRqpBZtT6fuszeIAXIVupghK&X-Amz-Signature=ab4c80f8598c75e286f567807523d0b20825fa62f6455ce109d54949f06e5fa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFQF6WP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzT7hS1pm5%2BU3L%2BZoRbov9%2FKLNM9NCsgSZTXiAttwZkQIgSfLU%2F8KqdnjZdD5xXQASPdgN3H8VAJK6FScq3xsxgVIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0EDJ71pY5jXbUiHSrcA8tZpHLL1Nft47QF1YDDBWpd0DIBlvoOt%2BX5zw4au%2BhCn2ZZUmGUjfz%2BHUDtrO6Bgn3uznzhPg20N1sKtXMAI3WJDuU%2F4aG34SysMK9klobcGpxaezMx%2B0oEPyW99uT0kKsiquNaX3FIezl2iPEpWLGXOlD%2BH%2FRgEiRliqQiN%2Fd660RrIpVJClMDWArxAwgeGd21OEORlGugMV2vLZQpEwm4k1q8kk%2F5sHloiyfuw7LNBxiTZCL9udQavGZYVldR0RJl%2BVV7NLOdPon4Rnagnfoul1wyEe6d2S2dLUhOmieY7mFnisQoCzh2Pg3MY9G0Pv7mtoRPlSTa6%2BtV0EqrD35%2FE%2FHuP%2Fueck9mqJ3oJGaytyF4PDwd2DEDh5sE3qKyMVz3aWHuhLt9RP0jiE28PNuFG2tTsKEzl1%2FA5wh%2B0r7y8DPoVyEf76haB0h5nFDLl5HYNNJRrn6N%2F5SCy%2FemIPbR7GAyRt9h76EoVkd6c2wlVZHKZjjlUHLORoC1oh574g%2Bu4AEG5uNqwAlAaeXE3uh6g%2FToesgGkwJuDr2eBqnZgKtb5Bz3oqsK%2FXvkbfvERyF7AGf0gE%2FCMlGuX7IxYL5JfWsK8TVPD7SjNUcH8RtoGJoi213mTkI4nrXBMJij58QGOqUBSWi%2B0f%2Bcdt3XnYiVPTDPJZsbSQnAq9uOcgH5TNMVvB0TZaVG2sA0K47UlZVoPd%2FKsQsEHcnct5hmVWRkgPQAiLwQ6cVeTnxp4KsBqFbsPPNOKncVL8mCQcMpWVMQ%2Fbp8NHRqCuSNQmWDW1WUGAsdg4Q%2BGDpvku%2BsYS0uvW1swbtejd9FiVMrc%2FJfBbstL6zVJAulBRqpBZtT6fuszeIAXIVupghK&X-Amz-Signature=fe9a65911a29beb872e59b8c66a754c375b72502899bdf90db72e0792b833a97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFQF6WP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzT7hS1pm5%2BU3L%2BZoRbov9%2FKLNM9NCsgSZTXiAttwZkQIgSfLU%2F8KqdnjZdD5xXQASPdgN3H8VAJK6FScq3xsxgVIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0EDJ71pY5jXbUiHSrcA8tZpHLL1Nft47QF1YDDBWpd0DIBlvoOt%2BX5zw4au%2BhCn2ZZUmGUjfz%2BHUDtrO6Bgn3uznzhPg20N1sKtXMAI3WJDuU%2F4aG34SysMK9klobcGpxaezMx%2B0oEPyW99uT0kKsiquNaX3FIezl2iPEpWLGXOlD%2BH%2FRgEiRliqQiN%2Fd660RrIpVJClMDWArxAwgeGd21OEORlGugMV2vLZQpEwm4k1q8kk%2F5sHloiyfuw7LNBxiTZCL9udQavGZYVldR0RJl%2BVV7NLOdPon4Rnagnfoul1wyEe6d2S2dLUhOmieY7mFnisQoCzh2Pg3MY9G0Pv7mtoRPlSTa6%2BtV0EqrD35%2FE%2FHuP%2Fueck9mqJ3oJGaytyF4PDwd2DEDh5sE3qKyMVz3aWHuhLt9RP0jiE28PNuFG2tTsKEzl1%2FA5wh%2B0r7y8DPoVyEf76haB0h5nFDLl5HYNNJRrn6N%2F5SCy%2FemIPbR7GAyRt9h76EoVkd6c2wlVZHKZjjlUHLORoC1oh574g%2Bu4AEG5uNqwAlAaeXE3uh6g%2FToesgGkwJuDr2eBqnZgKtb5Bz3oqsK%2FXvkbfvERyF7AGf0gE%2FCMlGuX7IxYL5JfWsK8TVPD7SjNUcH8RtoGJoi213mTkI4nrXBMJij58QGOqUBSWi%2B0f%2Bcdt3XnYiVPTDPJZsbSQnAq9uOcgH5TNMVvB0TZaVG2sA0K47UlZVoPd%2FKsQsEHcnct5hmVWRkgPQAiLwQ6cVeTnxp4KsBqFbsPPNOKncVL8mCQcMpWVMQ%2Fbp8NHRqCuSNQmWDW1WUGAsdg4Q%2BGDpvku%2BsYS0uvW1swbtejd9FiVMrc%2FJfBbstL6zVJAulBRqpBZtT6fuszeIAXIVupghK&X-Amz-Signature=357194e1a9d0102f9ac5c9664209653c1242aa4238303fb0e605ef6e30a37fe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFQF6WP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzT7hS1pm5%2BU3L%2BZoRbov9%2FKLNM9NCsgSZTXiAttwZkQIgSfLU%2F8KqdnjZdD5xXQASPdgN3H8VAJK6FScq3xsxgVIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0EDJ71pY5jXbUiHSrcA8tZpHLL1Nft47QF1YDDBWpd0DIBlvoOt%2BX5zw4au%2BhCn2ZZUmGUjfz%2BHUDtrO6Bgn3uznzhPg20N1sKtXMAI3WJDuU%2F4aG34SysMK9klobcGpxaezMx%2B0oEPyW99uT0kKsiquNaX3FIezl2iPEpWLGXOlD%2BH%2FRgEiRliqQiN%2Fd660RrIpVJClMDWArxAwgeGd21OEORlGugMV2vLZQpEwm4k1q8kk%2F5sHloiyfuw7LNBxiTZCL9udQavGZYVldR0RJl%2BVV7NLOdPon4Rnagnfoul1wyEe6d2S2dLUhOmieY7mFnisQoCzh2Pg3MY9G0Pv7mtoRPlSTa6%2BtV0EqrD35%2FE%2FHuP%2Fueck9mqJ3oJGaytyF4PDwd2DEDh5sE3qKyMVz3aWHuhLt9RP0jiE28PNuFG2tTsKEzl1%2FA5wh%2B0r7y8DPoVyEf76haB0h5nFDLl5HYNNJRrn6N%2F5SCy%2FemIPbR7GAyRt9h76EoVkd6c2wlVZHKZjjlUHLORoC1oh574g%2Bu4AEG5uNqwAlAaeXE3uh6g%2FToesgGkwJuDr2eBqnZgKtb5Bz3oqsK%2FXvkbfvERyF7AGf0gE%2FCMlGuX7IxYL5JfWsK8TVPD7SjNUcH8RtoGJoi213mTkI4nrXBMJij58QGOqUBSWi%2B0f%2Bcdt3XnYiVPTDPJZsbSQnAq9uOcgH5TNMVvB0TZaVG2sA0K47UlZVoPd%2FKsQsEHcnct5hmVWRkgPQAiLwQ6cVeTnxp4KsBqFbsPPNOKncVL8mCQcMpWVMQ%2Fbp8NHRqCuSNQmWDW1WUGAsdg4Q%2BGDpvku%2BsYS0uvW1swbtejd9FiVMrc%2FJfBbstL6zVJAulBRqpBZtT6fuszeIAXIVupghK&X-Amz-Signature=dfc7b10697ea92cd4d13c067e54cb25cde48c104e36e31e4da6f08b2c8e0ac44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FLK3CIX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXbU1SoKexnvht0PN0CBKCQ%2FvX3sAleUEtydkXYzW3JAIhAInh%2BdbxD2tnOjj7f57c4M%2BuD7PyUBk%2BO7huamwwVrBZKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0q9yjIJIpJkypnqEq3ANJmBXJv8ezL8mijAuCLP2BFSJfZEiO%2FY1%2BZt33cYHhYpakc0nyklwB4a94tXVTCGBonZVqYB3CaTmY3TyeusyhdtTiUu3ra0xknurSnrfCb550o2c16kCifZ3lxwftuI617x4uy73bSTgGR%2B0oT0CIStlAgSnHQ3AdMBa9SS2dHbC0E%2BVNtzqwAqENzrtE0Ad9Q%2Bdv8Y5V3kXoJ1ttHUwsikoXwpCw%2BAKZV7n3T7AvoqfKJ%2FBKpvdWIv3dwjerp4Gp3fn7L0LiT9yy4aCjo4M27ppv%2B9NzqXvMyue2TA3y2YWC%2BLW%2B3KIMuw%2FUUcRmRChwbDj2%2F85UOD%2FmqJJahp7zyxO0sudpw5rOKOxWXxeSpv%2F8EfvNYJkucO4VmFQm7zrZOOrkD3cDseAOBjKMSa6wz9i5H1LbLDULiQVuORhsOVwHmku7knHuZo6cd7z5nDkha0t1MHMG%2FRwA7Lq%2FEr9Jt%2Bvxgj3YoZ7ZBofpcLLT0pt8fyQ4OoSrnRm9HTkRXAFZ4niPHUmCp5cvSC7hcZfnD99CBVWbCEWcqM48SjhNl5Mp3tafqK%2B8Xjzv3tCkJY76bMnoaGYrT%2BC5pezWwx9Suum9SHrkmVRbQW%2BnBB7c9bZn0yKH%2FHbWLedeJTCgo%2BfEBjqkAdct6Ud6qGkxrjXv3ogDwicPfSOIfDQHchyMjWJjA%2B30EMV0nJbaSWeTONkSxQ0w3AljvfXJrJRV395FDJ8h79rh9MG0h37UirnyQXbVYlk0I2IG5IGf5pu0aR9ubBqXmi8mPkUZ2BL7nKwxt51fdzGAve39hYOm5qckUP%2Brkpa0YhefvtjMKvA9ru9wL8lUOdx2rIepqhi4YrtGXdT0Z%2BPPk1O8&X-Amz-Signature=683fd033703e95fae36d304670437ee27b2c639eb86ff1e1792f357c459ca747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U47TU437%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAmMnc%2Bl57hpO1I92uqk34rUV1s1R9Dpef8QH9Rc9aBQIhAN81fXGuK9Cu69d46vgj8ofOgOGfnKOHdl8Oq1D7wQnnKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuHbe5o%2F3fSPsaVDgq3ANuabyl40FACZM0xEcX%2BeiA2dHknw7bnONXVZzw5drhFpEUGiGtYhL2TzUxXC2AxgoyTyCcN3g5hNjT6fMI9nMPHKiYPPd2RlGAHK6qGydOea1V3uK8hEjCGaaPBiXVp57p%2BgOL93KCDwBT0QSA3sHpiSjooL7Q0fSVcuzbaa3HC1wHwUpqmD3DP1CdtdD4goJeg0EnjHVfb5Sj3ukG4N8KqguaSkDE%2FWWvVwinKgkWklDxQS7lm5hs9LrGPF9GuZIgJna2cM45VZFSNNemCVYIBkzMN%2FgqnFlVdAM1B85hVy3lPi8Ge1PmRBxNuziEGG6TgjeIyUCTc2YC9SJU1%2F2mZ8esD5Vq2geXFcJb%2FQUSgjrFuA6lfWgn%2FW0Uf3Ot0m2wTORvqBsNJfo%2F4%2Bea2QK0K2RQTd%2Fd4SthFsmQbMuODstRGTPhTM0QHYMnVqY0PZE1EMMMquXkFrvr3suEPrTv%2B4TvJdzwVCRdgdfxMn7G%2FdRNw4xgiNeJJXdfe9P5R7cWn0nHF4SBPgrX99j4F2Fs2uT7WKUW9Gb%2Frcm%2FX84bucFip8lGnAmQKaAi%2Bp%2Fhz%2Foq31%2FyuLf%2FmQ5iE5HGzLusI6GepG6NP%2F9uf3W32c74wk05dVUeMFh9cQwAZjD1oufEBjqkAZY%2Br2hJhq9SvnnaqThdiR3v0zCW2CxB5Y0GIO4j81nsFEW1sFHjFuEGFQvnSu0ax%2B5OTVo77c2XH5hgMH75q25o%2BOEU1Fz6BFr1dKGlATqxqC8gNc6KUmhlRMU0AwrA9PSwRuZSr9C6LCM8mybraOZITLDPLw6nmRkXhlPXEF5P1rv2aGmpZTVZzdJt%2F9LBTw22k8bcsMN2NDf4Hjv3w3HV2oFZ&X-Amz-Signature=44306c2689769964be5ec0265e183a8733984a1dc2f8970071e329f92fa87cab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UAZ3KPH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYY4zX79yAY5JidrXLEUuhTu33B10xCGu4aCar2P7LYQIhAOzUpS8i6r%2FKbsqrvGJ4LzI3Wu%2FAJ2pAXvU9q60ldV%2FdKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE5nl5CiHHmoHVRIkq3APbIex2Nun4Jj9liLxSEWZFj57tcu6V6FxSMwviRGJ6NpuhVuOhUNLKDzOR4%2BOtRoQ50%2FuNo0A6OedR%2B2tm%2BU5uHOHz9fNlgTdWgCBZSUt7LWAJZrMKAiChXetYLVbc59spESpGhm9hRMfZVM0WA7l5rF5qW2xaeEnPhTGDFAgtpXKHQSwxDPb472hNMbM63JEkXhrAiRC4%2BTY%2F2ZHeDRZK3YEtAquw9uWY%2Fg6kudPdQss0ykJniaNguQE2bXPUR0oDWFVtKbQQBuVblaAIyU%2BfZLDXHn3IiTK3mforL%2F%2Bty3W1Pkr7A0mhxDcgX5ltY7XHreRmjbAqBoFHj4%2FsANNJlGyedOHT1b36CWBZ9ySkMRlOTDpdn4mfivZ5DKZszlUYu%2Byyo85X9hbh1ambJuqRWHNXJGIRl4nTbyzpl1eiirt7ZfFxfWQcOqSDW5TdEvTzRaFeCX9DbQE5JYXMkw4fo%2BJFc6M36pTXlGyCGdIiZoRHG5F0Fv7kwPaakjhxjH4O82LRnMnVI8UJ%2B0cwgQ6JhB3fbqE4ItgaDwQ5a9HDyy70MQmiLn1snhLeOtJXdFky4xvlzBDz8caebmtPDQ1rrvUt9QqZ5fQBrpJTwxmOEs8kvLvVFMSOTfKLMzCOo%2BfEBjqkAYGtMgNcMaJBySgohIKliLR5Glky17DwasAlrCZtPM%2BMemQtujIRL9A%2BgLWb9xx5ojLmNkS1AZsRsfJkpPTODoXmqrGMEZK9oBh0BU8CtgS%2FsGEPqBxPcLilTeU8gNqD3GUrXP1Qp3XW%2Bb88JP11PoWOUiKAPgkdAU8T0HGt2USfQlvof%2BZCBjzunMn3NMuklUov24%2Fq2p%2Fw5F6cPgblZJFtdP%2F4&X-Amz-Signature=ccd6b84440d0726bf53486c06e0c0c4f35cb95a9f95b6931c3f75e0164f605fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFQF6WP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzT7hS1pm5%2BU3L%2BZoRbov9%2FKLNM9NCsgSZTXiAttwZkQIgSfLU%2F8KqdnjZdD5xXQASPdgN3H8VAJK6FScq3xsxgVIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0EDJ71pY5jXbUiHSrcA8tZpHLL1Nft47QF1YDDBWpd0DIBlvoOt%2BX5zw4au%2BhCn2ZZUmGUjfz%2BHUDtrO6Bgn3uznzhPg20N1sKtXMAI3WJDuU%2F4aG34SysMK9klobcGpxaezMx%2B0oEPyW99uT0kKsiquNaX3FIezl2iPEpWLGXOlD%2BH%2FRgEiRliqQiN%2Fd660RrIpVJClMDWArxAwgeGd21OEORlGugMV2vLZQpEwm4k1q8kk%2F5sHloiyfuw7LNBxiTZCL9udQavGZYVldR0RJl%2BVV7NLOdPon4Rnagnfoul1wyEe6d2S2dLUhOmieY7mFnisQoCzh2Pg3MY9G0Pv7mtoRPlSTa6%2BtV0EqrD35%2FE%2FHuP%2Fueck9mqJ3oJGaytyF4PDwd2DEDh5sE3qKyMVz3aWHuhLt9RP0jiE28PNuFG2tTsKEzl1%2FA5wh%2B0r7y8DPoVyEf76haB0h5nFDLl5HYNNJRrn6N%2F5SCy%2FemIPbR7GAyRt9h76EoVkd6c2wlVZHKZjjlUHLORoC1oh574g%2Bu4AEG5uNqwAlAaeXE3uh6g%2FToesgGkwJuDr2eBqnZgKtb5Bz3oqsK%2FXvkbfvERyF7AGf0gE%2FCMlGuX7IxYL5JfWsK8TVPD7SjNUcH8RtoGJoi213mTkI4nrXBMJij58QGOqUBSWi%2B0f%2Bcdt3XnYiVPTDPJZsbSQnAq9uOcgH5TNMVvB0TZaVG2sA0K47UlZVoPd%2FKsQsEHcnct5hmVWRkgPQAiLwQ6cVeTnxp4KsBqFbsPPNOKncVL8mCQcMpWVMQ%2Fbp8NHRqCuSNQmWDW1WUGAsdg4Q%2BGDpvku%2BsYS0uvW1swbtejd9FiVMrc%2FJfBbstL6zVJAulBRqpBZtT6fuszeIAXIVupghK&X-Amz-Signature=67e1be25332ab3f4b9ffbf2889659efd70acf6528006b2aafdb403c4070421fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J5BKNJD%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK3L%2FEOPsc0%2BwBKh3OjL7gEaenjSdxjfYdiAI4vh9EUgIgU7o1i50Ui7Xs0rnUNBASyzOydGpolx18%2B%2B5rGIdXQ0UqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLezSQxE6ziq2PlpQSrcAw9LPwXaP7i2lj%2BjkDwp22%2Blj0VhgEW0rIb0wxDWYHv4oKuEnPBL4w7%2FVPYG77vSxIoCIahHnkBTMqAxQtU6tuJsA9np5fiMaTL2a9mGhzaj4wrHcGnjniMC2iTd3IJUDdN9yE3xf1%2FUADC%2BNgyUgsb01bl%2BOMugwKzfMK5Gh2Ao%2BWXBRZmAsafwBJ6OM74aBMj%2BDf3mh6spZ9ZDONLRxPly%2BQMaYTS7QW6Y4IueT3BcFBX5jY6%2BAjCMJXfthBs4qVmgLm0qZglUEcJzaZtgQbe269CsGUrByIzCTQEAMMx8go0kPuJhuByVRU9%2FxubOTlkDxYeQaoFptPjAgTyVbxzCoPlEnecfaVZ49z5liQaBa7cWreat608r2w2t62xwOBF5EG0BeGxaeYdMKhmUUK%2FhtwHJwUy2ndxsYbFwgHuv74g2%2Bep4satw3fCg1XnQx1GXGBTb71hXp%2BThD0tVtNVDs0p%2BwqR8YRFZWjxW27qPoEheAEaL8J0d%2BVPu0tIjUC%2BcqVBor01zZiA%2FbeITZUNcrEmmM1yHcR3LSfk06lHL5f9IFjbgukWr%2Fsi6%2Bpcj%2BiJSlbrnCPXnQuoicBVDL7tuuJKU%2Ff5ld5Ei3oRCci7t380odhASp3RAsqv6MK%2Bj58QGOqUBhN7bwEEljWNXv3TLEQyQB0UNtC2HU2A3SKlGRVR1jnrrWwcu%2FWae3q5Y9FNpzttCvxApL8cbuFoyH%2FxdddIM7V51uItmsEY%2FOqoMXIYMJRHHqTfWyZwMGlnbP%2FbDw7cT4XM%2FQb7z7T7%2BBOzKNpbdz4UA8EpHE1odprD2mjgXsLNgGi7rBdexYKkPMj6UYfX0ini5xtUlhh7ziuZOT%2BuBMF7jRysx&X-Amz-Signature=c1e30c0146fb5a1ed0faa868087800d756da1d3a4f384e06e12e59c57d1c4a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFQF6WP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzT7hS1pm5%2BU3L%2BZoRbov9%2FKLNM9NCsgSZTXiAttwZkQIgSfLU%2F8KqdnjZdD5xXQASPdgN3H8VAJK6FScq3xsxgVIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0EDJ71pY5jXbUiHSrcA8tZpHLL1Nft47QF1YDDBWpd0DIBlvoOt%2BX5zw4au%2BhCn2ZZUmGUjfz%2BHUDtrO6Bgn3uznzhPg20N1sKtXMAI3WJDuU%2F4aG34SysMK9klobcGpxaezMx%2B0oEPyW99uT0kKsiquNaX3FIezl2iPEpWLGXOlD%2BH%2FRgEiRliqQiN%2Fd660RrIpVJClMDWArxAwgeGd21OEORlGugMV2vLZQpEwm4k1q8kk%2F5sHloiyfuw7LNBxiTZCL9udQavGZYVldR0RJl%2BVV7NLOdPon4Rnagnfoul1wyEe6d2S2dLUhOmieY7mFnisQoCzh2Pg3MY9G0Pv7mtoRPlSTa6%2BtV0EqrD35%2FE%2FHuP%2Fueck9mqJ3oJGaytyF4PDwd2DEDh5sE3qKyMVz3aWHuhLt9RP0jiE28PNuFG2tTsKEzl1%2FA5wh%2B0r7y8DPoVyEf76haB0h5nFDLl5HYNNJRrn6N%2F5SCy%2FemIPbR7GAyRt9h76EoVkd6c2wlVZHKZjjlUHLORoC1oh574g%2Bu4AEG5uNqwAlAaeXE3uh6g%2FToesgGkwJuDr2eBqnZgKtb5Bz3oqsK%2FXvkbfvERyF7AGf0gE%2FCMlGuX7IxYL5JfWsK8TVPD7SjNUcH8RtoGJoi213mTkI4nrXBMJij58QGOqUBSWi%2B0f%2Bcdt3XnYiVPTDPJZsbSQnAq9uOcgH5TNMVvB0TZaVG2sA0K47UlZVoPd%2FKsQsEHcnct5hmVWRkgPQAiLwQ6cVeTnxp4KsBqFbsPPNOKncVL8mCQcMpWVMQ%2Fbp8NHRqCuSNQmWDW1WUGAsdg4Q%2BGDpvku%2BsYS0uvW1swbtejd9FiVMrc%2FJfBbstL6zVJAulBRqpBZtT6fuszeIAXIVupghK&X-Amz-Signature=1f5013c2488ec198bfc70e57fb88b97b613d7896c1a59986fc0c9257a2e96490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR2OAQGI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbcExqrtyAI0f6hgRRMAR5zPsfEr4%2FA6tsN32E9SWtlAiBqqkcgd%2FKHunSs4Q2Het%2FjVJBe7qJhrfkuV3%2FYCbCjfCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYROfA%2F%2FbqD6226paKtwDBnxYevfqTaVjwwYleOuKW2IssYtNNf1FbSGPcS9cLuQgGszBNrelWSfpG%2Buet16pjRBuj9PhS%2B%2B5LWRFLm9kAai59W3%2Fgx%2BGHBVNOMJUsZzJIlCFgZZ2HwyD4TWxosUtULy25Q07qWHH63R36yas3P2uy%2FTKPmLnS%2BqM0p0gjkF25bgWKQe4goLcfSSdXItOS2%2FIiJtvJrunF4YTZS6ppCSfqDCsqmQotC5s8sYfZp4h9jBhILhgwd95pdNM%2B50Xd0feiuaHFT21sL8KD%2FxoEuOr6Jtg5QpGukHpjoVGnoh0Kj1SPCMGh6LKkf5gFo1W4eQ9SMFseHPAtLKbKsD3g9RtSVuIr4rBkegxV1K5N7ffftEfCnGnrUEb4Yiuh1nyqlcv%2BBnie%2FW4OEcHRn2wc4eYuhPbgkNCKrK6BjlgyexPZzXxK5W0jPxfsp%2BmKSn229Pj9%2Fp4kFzQyv3qqC2R003EIrdxK%2FGTnRWoKidNwaFETnGW5xKvPdbRhjowirG8%2BevHq42umECKuXxIwx4WAMz%2F9f%2FnfbEVGsLHur6JG7xri9vwKUeHgbcxR0VpbisVTaDCy8biftJVvCkQ84uV%2Ff81lXZpw%2B%2B6Ugr7p%2BXmvTF7xwwbJC7xIPiRcFswo6PnxAY6pgGooMvZ%2BhsFXYDAy5lnk72OFBvrtOnNjYhnEnAlf%2BB%2Fmu7QpYenQiNnF7VgdAq9ZKpS%2BI7pIWSPn8CDx2ytEUXrVM57Lfl%2FRqSQLq5bYF4QEu85001BT8xGI6ImD3G1lwO%2BnEOSDmERXkTFP%2BHdpBbZ1O5PfDpLsKJu2%2FsLFp9TuOYTRhvwjf9nFUGRTq1nl3%2F%2BYxQn9UxqBtz4I8BKefqMADT2OC8u&X-Amz-Signature=9f34c98f22c2c442dc3e6ef1336d0ea055ec4b38adcf981cda9b8a03d0fbe4c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFQF6WP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzT7hS1pm5%2BU3L%2BZoRbov9%2FKLNM9NCsgSZTXiAttwZkQIgSfLU%2F8KqdnjZdD5xXQASPdgN3H8VAJK6FScq3xsxgVIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0EDJ71pY5jXbUiHSrcA8tZpHLL1Nft47QF1YDDBWpd0DIBlvoOt%2BX5zw4au%2BhCn2ZZUmGUjfz%2BHUDtrO6Bgn3uznzhPg20N1sKtXMAI3WJDuU%2F4aG34SysMK9klobcGpxaezMx%2B0oEPyW99uT0kKsiquNaX3FIezl2iPEpWLGXOlD%2BH%2FRgEiRliqQiN%2Fd660RrIpVJClMDWArxAwgeGd21OEORlGugMV2vLZQpEwm4k1q8kk%2F5sHloiyfuw7LNBxiTZCL9udQavGZYVldR0RJl%2BVV7NLOdPon4Rnagnfoul1wyEe6d2S2dLUhOmieY7mFnisQoCzh2Pg3MY9G0Pv7mtoRPlSTa6%2BtV0EqrD35%2FE%2FHuP%2Fueck9mqJ3oJGaytyF4PDwd2DEDh5sE3qKyMVz3aWHuhLt9RP0jiE28PNuFG2tTsKEzl1%2FA5wh%2B0r7y8DPoVyEf76haB0h5nFDLl5HYNNJRrn6N%2F5SCy%2FemIPbR7GAyRt9h76EoVkd6c2wlVZHKZjjlUHLORoC1oh574g%2Bu4AEG5uNqwAlAaeXE3uh6g%2FToesgGkwJuDr2eBqnZgKtb5Bz3oqsK%2FXvkbfvERyF7AGf0gE%2FCMlGuX7IxYL5JfWsK8TVPD7SjNUcH8RtoGJoi213mTkI4nrXBMJij58QGOqUBSWi%2B0f%2Bcdt3XnYiVPTDPJZsbSQnAq9uOcgH5TNMVvB0TZaVG2sA0K47UlZVoPd%2FKsQsEHcnct5hmVWRkgPQAiLwQ6cVeTnxp4KsBqFbsPPNOKncVL8mCQcMpWVMQ%2Fbp8NHRqCuSNQmWDW1WUGAsdg4Q%2BGDpvku%2BsYS0uvW1swbtejd9FiVMrc%2FJfBbstL6zVJAulBRqpBZtT6fuszeIAXIVupghK&X-Amz-Signature=75f3a5884d755fcd08997ab2979e8846c90075723ee823ca84b65b5c2c5e444c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4UOPWLW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3k637MQkul%2Fsai4RfO1%2BwzcYVk%2FVn2En9aCVe0IFnBAiEAuwuYcvVyniJQKFd1ie68Sw4wO%2Bw8aZqlC9wKh2s3gt8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFhck6BZc5mhJeH%2ByrcA%2Fa3x5Skygdu%2B3IZX14coqmX1yor87ASEkQ%2BgcIZ%2FspQnjBTEgWrrK6SgCzvGI%2FKlttPXC02cXFDtqN9AnNL6q6uH2wTj%2FUkdDvXHXMLMM9Ra0Cf%2FKww3KB0dyF6W4ChMhHLJCNGRzr4X5e02FLzcXgNU%2BQAvPDQW6ztiheGk0%2FZ3Jde2NGDLAI17ol%2FbRobqZ7F9OYRyA2q%2BFlkRDj0NVgIBpxKATfkwRc6919IUqxQExA11cQUesH0sWTNhEsFnDQ1rVVqH02vaKmXSAiNVR4%2FrF2NmoNEyzQ2Dqc%2BcVOLaC%2F%2FdkeXS507O9TLE9QpbTWOSl%2FGuVzC%2BBkrltJhokEo2OsROo4Z4%2FiOMWHPkXyffep030oW7Z8kPNMEszLQWh04mS8Otuma4dPcftnKktNXfQmxKlIFT9c3O%2BemidQfuLJ9ublaDoJld3nj4S3GjrX0pWqApmnSLwdTfdUpi0Dm4Nu78fNQzTiZn6Bt51EkW33WwgN%2FSKwx2TiKf6cS5EoI9Gbgjy1lBY2DD%2FnmYQtwbcauDj1rF%2F66%2BUCi6BedmzbqvqiYi07qpXXNqcjo4v9SXj%2FoXjmRASr46uxU80LrYBhYvKdpmciigWdU2J%2BYBYjUWtcZA8KMfB07MLii58QGOqUBjWnCNnB0nCLXFgxHewUPT3mia2745%2FpcY24%2FKjBKQHV%2FmSoluBfwhPpHgWxVbjl7FTJh86tVPGg%2Fjjzqhn27dHhg7WCyRUCOiYZ0mI%2FSqZdYtoyZITgVj2gEVJs2Bcti%2B%2BSIsbZTdrT%2Byf9v5V9rzxVcQr9bwiToqubpAyqvYdHuC9GCuwgt%2Fh%2BUbpF0toImAhVQfPzP1Eyf8FMNIwZyd3tWGzmn&X-Amz-Signature=4e58a64741987451e38900a4d9fbdd42ea8ec0fa8e7670246e5755f29c366c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFQF6WP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzT7hS1pm5%2BU3L%2BZoRbov9%2FKLNM9NCsgSZTXiAttwZkQIgSfLU%2F8KqdnjZdD5xXQASPdgN3H8VAJK6FScq3xsxgVIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0EDJ71pY5jXbUiHSrcA8tZpHLL1Nft47QF1YDDBWpd0DIBlvoOt%2BX5zw4au%2BhCn2ZZUmGUjfz%2BHUDtrO6Bgn3uznzhPg20N1sKtXMAI3WJDuU%2F4aG34SysMK9klobcGpxaezMx%2B0oEPyW99uT0kKsiquNaX3FIezl2iPEpWLGXOlD%2BH%2FRgEiRliqQiN%2Fd660RrIpVJClMDWArxAwgeGd21OEORlGugMV2vLZQpEwm4k1q8kk%2F5sHloiyfuw7LNBxiTZCL9udQavGZYVldR0RJl%2BVV7NLOdPon4Rnagnfoul1wyEe6d2S2dLUhOmieY7mFnisQoCzh2Pg3MY9G0Pv7mtoRPlSTa6%2BtV0EqrD35%2FE%2FHuP%2Fueck9mqJ3oJGaytyF4PDwd2DEDh5sE3qKyMVz3aWHuhLt9RP0jiE28PNuFG2tTsKEzl1%2FA5wh%2B0r7y8DPoVyEf76haB0h5nFDLl5HYNNJRrn6N%2F5SCy%2FemIPbR7GAyRt9h76EoVkd6c2wlVZHKZjjlUHLORoC1oh574g%2Bu4AEG5uNqwAlAaeXE3uh6g%2FToesgGkwJuDr2eBqnZgKtb5Bz3oqsK%2FXvkbfvERyF7AGf0gE%2FCMlGuX7IxYL5JfWsK8TVPD7SjNUcH8RtoGJoi213mTkI4nrXBMJij58QGOqUBSWi%2B0f%2Bcdt3XnYiVPTDPJZsbSQnAq9uOcgH5TNMVvB0TZaVG2sA0K47UlZVoPd%2FKsQsEHcnct5hmVWRkgPQAiLwQ6cVeTnxp4KsBqFbsPPNOKncVL8mCQcMpWVMQ%2Fbp8NHRqCuSNQmWDW1WUGAsdg4Q%2BGDpvku%2BsYS0uvW1swbtejd9FiVMrc%2FJfBbstL6zVJAulBRqpBZtT6fuszeIAXIVupghK&X-Amz-Signature=40f868e330c53b34f8defdd04e795450b8ca4550197e73ae64be1158cd0e9cb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR2OAQGI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbcExqrtyAI0f6hgRRMAR5zPsfEr4%2FA6tsN32E9SWtlAiBqqkcgd%2FKHunSs4Q2Het%2FjVJBe7qJhrfkuV3%2FYCbCjfCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYROfA%2F%2FbqD6226paKtwDBnxYevfqTaVjwwYleOuKW2IssYtNNf1FbSGPcS9cLuQgGszBNrelWSfpG%2Buet16pjRBuj9PhS%2B%2B5LWRFLm9kAai59W3%2Fgx%2BGHBVNOMJUsZzJIlCFgZZ2HwyD4TWxosUtULy25Q07qWHH63R36yas3P2uy%2FTKPmLnS%2BqM0p0gjkF25bgWKQe4goLcfSSdXItOS2%2FIiJtvJrunF4YTZS6ppCSfqDCsqmQotC5s8sYfZp4h9jBhILhgwd95pdNM%2B50Xd0feiuaHFT21sL8KD%2FxoEuOr6Jtg5QpGukHpjoVGnoh0Kj1SPCMGh6LKkf5gFo1W4eQ9SMFseHPAtLKbKsD3g9RtSVuIr4rBkegxV1K5N7ffftEfCnGnrUEb4Yiuh1nyqlcv%2BBnie%2FW4OEcHRn2wc4eYuhPbgkNCKrK6BjlgyexPZzXxK5W0jPxfsp%2BmKSn229Pj9%2Fp4kFzQyv3qqC2R003EIrdxK%2FGTnRWoKidNwaFETnGW5xKvPdbRhjowirG8%2BevHq42umECKuXxIwx4WAMz%2F9f%2FnfbEVGsLHur6JG7xri9vwKUeHgbcxR0VpbisVTaDCy8biftJVvCkQ84uV%2Ff81lXZpw%2B%2B6Ugr7p%2BXmvTF7xwwbJC7xIPiRcFswo6PnxAY6pgGooMvZ%2BhsFXYDAy5lnk72OFBvrtOnNjYhnEnAlf%2BB%2Fmu7QpYenQiNnF7VgdAq9ZKpS%2BI7pIWSPn8CDx2ytEUXrVM57Lfl%2FRqSQLq5bYF4QEu85001BT8xGI6ImD3G1lwO%2BnEOSDmERXkTFP%2BHdpBbZ1O5PfDpLsKJu2%2FsLFp9TuOYTRhvwjf9nFUGRTq1nl3%2F%2BYxQn9UxqBtz4I8BKefqMADT2OC8u&X-Amz-Signature=14ff6358a8cc6c8f372188939319400ff76f876dda03b5c8f702a85bdfe47b09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YODPYUU4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlUUB%2FkSBDjPEusUlJzjGDrMDu8KhzhkBqKvjvwJtT0gIgC8dt7ooNSkmodD7DA7hzto1YWI6iVN8StXuLiUZXXJMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpDYCAf4XEN5NjOgCrcAyRFtm9ftsNIeRk44Ww4vyFadtpQCoOJs%2FuQlanpb7D4Y027502hjC0XKVn2nrMLyipFmsAlYOCXGJ4HA9uGcFJWKzBas%2FtYv9hlRU%2F7ZvoXeGJt8A%2F6Ug2g9wzxKSQLLvN8XUtcDDFIz0U0AN0OodHpOpBEqOAjLfCicdTz%2F%2FrkKztazEKCOqXyGyVtGelHZlc8C%2FtTT8K1Fd2yyGNymlrCEV9KshwS2qvGBBaTE4KM1oRnk1EqMYGsW5qLUPAdrNEsdg4disUJXCQlpnNdHtkvJfUCSFdOHoTwdX6q%2BmXyXuc6u2zHqoU9D1vEzdxG7xWLQ3Y1HtrQH1Y1cazkE1aZ81k5zvVV%2F7EWnsQinX6ep0chEss5aemibhvlT4PNxuR1t4fhlwZ1TeHJumKu3efwdAc%2FdR97NSfaU1DK%2Bvhpa%2Bqhp8aFbu9DrWP%2F%2BUvE%2F4TGS3q%2FdmxBTkLgrZ9dHdbtj682qzyvjOVsKVhN9Mvdm4qwlKzsgN7fwkFlBABLGAFDdVR4kFcxVAkBxiRg83cnNKv%2F89dNHkrZkpd3WnXTOQCwwqPhxXegQGkYoZM2bdMjrwS578sACN6q790kUHqh21qxOHYFd1kPhREqwz%2BeDySDPByXX0pDGm7nMLOi58QGOqUB8X1%2F6GgdN7sjxPMJj6ZoHwzn92HAxYwPrCIgECUJGa7zVl%2BncuGucvKhSA2Ul8Xw3819ZMLeoEepF9NNZ6ajo30guuWPsQermEkrVITJYWNL21Lc3e%2BB2P92pP%2FcfprnVTu%2Fn1D%2BfbbOfMfb6zN2jWJ65LhU5J4wHTt9tLsA1Xy44ibD5aHNmfKbFW9O6%2FNZUE7Pjxl4VZLyes%2BVe8MHU12GaoBp&X-Amz-Signature=b073333ef03f9ddc214e2a6dffb2187ed7fa5b914cd2f03ea26d9ddca8231ce8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z5P5TFP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6IKGAQstsb4vYepPHwmy9iq5J48OMA7vHPAqzsptJRAiEA7D6rxdJFFXNXCnEtrYYYMWgESRSQp8TEqwDREv8mHBsqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeEIe3fpp8yv1HhryrcA2qSTOD2UhtAS1DMPkJQX2gTNLEGzueooQ0gweKsVyTlkeUNlvObYK5FD9IVALMuME59yPJ1bx5FufTybjVfc3UeS%2FpTKMJYEKP2%2B6mqcRK5ZfLbthIaZQxkL8upWlkxXJVD8H8VTuSjs8HoDlHxAxzqG3kVd%2B4GsveG%2Fj7DHq35nwaXUju67dT0DdVT3KDBFrxqo2yVmCUkH%2FV49N9p7tegGUEmhwSqpADKZCblTIGh949HjG8f0Jew3GjVV%2BPV8lzxCqvPokjNxEjmIHusXHWUjUyHVtCwVZ%2BnKHuYMViRMTsZFccSyXPDTzSwnlhvo2kXyb62oVYlkIUvd23kcwo2QTQpdcNOYvwuu6BjtonQn2OEzSGe1eIAKpogAe2GdNWhWn%2BM89FKOrlVHAmNiVJzKSWNuPm5hE2U6em34o%2BG40vqg8kLiVh2kX0gIuRgbXrKCXaHkghd9FAyrTcR3EJg4PobZeFTDRtcaDukY3UFxqgtdfI40PEQXqw2qj%2FqSrHFhwHeyVzPcx7ZH%2BnuvFzHOk6Wrg5IgKw0F5tZ1PR7Ikyi7L5AsOACEKPFK9VzT86HHo0eydrivS3XdFKBjXNThxpdQnrSwOYalhYKzx8wFGBn1ZjW3AJvWqHoMM6j58QGOqUB0Fi3tdu%2BVofryptLGZh5ryWi0kvFcOgLOoasLFeI5eXm4X3HURHqU%2Fn6A6cv4kPk9WVb8xew8SJelnlNdaSkAbOYewtbag4x%2BqWrOz86BzN26OvElJkU4q%2BkwlhMVPl8Q0yAfXXetM%2Bisu5wucy7nu6GHvQuL%2Fg%2FQqE2euzEVdk4lkCdPFjpypdPKLI9kI0S309%2B%2FNceiC54l%2FVS5Ive93HfxhWy&X-Amz-Signature=e626e57dccaccbd812f57e250134342034f9a4f9de3c1bc647c30c52cac3144f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZLM2UVP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVHCS39WvBhadz1rvHml5Rlnke9RZFJi%2FTS15xbRojuAiEAqFAgzhg273kmW0zFOa9D5ROZxU8s9b7IDiwSncoxwMQqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkpRGj0r9W5ikG4tCrcAxMAr7XVxO9xDTUHj55bsA5LcqzuZ9GVb6idADuWDrTL%2Fcbo9sy%2BnYIBA4Ewv3U43c7SWNMH6ADjR6U%2FZqqUBBLQS9%2Biaj%2B9S0ke0FzaFi14u2NPdgWGeIU96%2FE%2Brqw4woAupTire0xHrs0MFWys%2FbyVYoEocEr3MEYIDhO3t%2BDmJEshB8yGjBieiAJ%2BHD7UEVlxbp53x4BiwHp409X5Dydvs5%2BXBlmEX8Yh8QzqKDbn6KbjfK0Nlce12LFEbepyf2m7BccJ15%2BStX9jfgJ4NF4Fjfl9bCeEYDP0BJT%2F%2FcWAtB2CS%2B5PODKGfUyXcE4PRCxv96GbnnMvughmeU7hN1G2IscM2SVno5s7Hc9HgVKJWp3OheugB0ANWFcw7RtVwpsRtU1BLNTGZJICegolQGGW41w9x1oXw85fugKFSWL98%2BZ%2FoJP4tvUcswf2XtpDhmy3SAxpXc4fMaGFV0onL0FGPTsK9tdUR9CljaWjc0S9Gjlc2n3b%2BFRjc%2FCvAWA6qFymrI%2BIOF6Dy9%2BzjEOVpMIFU2mCz9MphOTFSGWDqvf0UViEN4uzsY%2FnyXlCOrLUx8fUutkkE%2FvjMFeFn%2BAMbgEcelIXqD8RJHHpCG6sOQ0zUJuWc3nN%2Fsu2V4CyMOWj58QGOqUBs1YtilgtuDGq5PhZs1A1nckoIvs6RRvFpWQUs1R8Zsbi%2FSwK9v72s1rFR8IUSMF9qVlJ79KsypwSFbXkXXuClJdDIbNVoVRmPU7%2FH5wCPMtCfHRJEDOdUGla25r%2BEhrhF1flPbR%2FamJLNwYalJYcr5CoWax5RM5jbpihMUZUoEXG3kWeRvu%2FjucUu36wQrjQtrySCdVAZbtOiAL0uA3ASrqJYAIz&X-Amz-Signature=56f1bd833ccfa255349ef8176fbfaf779bf88e04336b13c670e31e80202d38f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HDJMRHO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFoE2yt7H8BCiFOmHNLTI14wp2voUAz46a6pdZKA%2FMmAiBiU37UFlPkbRVBIos6HiBzN7gHj%2F5jNQocyySBBqv0bSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoLpmVhuMb7ndCd7vKtwDa3iqcGZyZBAyRY%2BXe6zyfRStBhmtCqwaigMpk2DxpvgwQLXahoPFeUmsVsiNktvBlRynnV%2FcvN45uzERdHsR8WFRyly9oUT32La3acCT5VTxLR10qkC2kp2nP86aU1K464hqVwJ7uwpOeEL8fx4736qRl9HGKG6MtFDS7wfUDcWU%2FNjMp1negZp7l957zt9SMNuXGQ69hRjOWj5EBJveli8YjzUClCgO0Hi2F%2Fe8gPR0uUFAPCOkpRgZl6v0S4gT6LXdWNyBso5t5iEZ7BJ7rOnF9fnbDdRCAoB3Nw7%2BhXfa%2Br8%2Btq9Y5WD3ijjvhPuKJUdeAFwPQ0fYPyWf0jAc1mmmcrkbD4uV3XTRdxxyaI2tYTTLoKxdjITl%2FkoMKIALsa4LVcVJPgBejkYalfGbYRulXFKh97R2fHD65AlXQvLqIdFDXjcuMo69V8rIAlgeUCeJcip7z6ZPX%2BnVvsgL2CTbPG69fJc35J4qAZZEWz3rNqGP%2FwxKbYD5L3OTRhgpPFkwfuBzcqbYDIGFq1lIcd5eEbYTZW3trqqnzEC%2B98LMSCT5n1RzD8i%2FFdq72TCRHPizVR6ZRjQdMi%2B8mNzkWEY1If4w3XEDwLX2jDkdCvueqxV0WKIuUKBgbo8wlqPnxAY6pgG%2B3J38M9GKPiGJdz9OTI9PI0SQCXA3WnVld2p3idIfOIqIqIWPRlAYl%2Bi6izAKLAfdOb%2BLD2eBxqWcF8UuPLmO5JXyP8gqTEt%2B1PPW0g6N1iRKDuuBn71lUZ10a7zTdz%2BRb3dGHIk6J6Z9ZhblU08hmhtxiCrMYwaeoNFE91YzYatMhv62MzDEvoOEWy3w3e%2Fua9BgB%2B0wfbBWVvf25P1qAfSKBGNu&X-Amz-Signature=84702e4999b98171e786c1803c06c28bc5d39633126cf9c3b31895fef23fc644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFQF6WP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzT7hS1pm5%2BU3L%2BZoRbov9%2FKLNM9NCsgSZTXiAttwZkQIgSfLU%2F8KqdnjZdD5xXQASPdgN3H8VAJK6FScq3xsxgVIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0EDJ71pY5jXbUiHSrcA8tZpHLL1Nft47QF1YDDBWpd0DIBlvoOt%2BX5zw4au%2BhCn2ZZUmGUjfz%2BHUDtrO6Bgn3uznzhPg20N1sKtXMAI3WJDuU%2F4aG34SysMK9klobcGpxaezMx%2B0oEPyW99uT0kKsiquNaX3FIezl2iPEpWLGXOlD%2BH%2FRgEiRliqQiN%2Fd660RrIpVJClMDWArxAwgeGd21OEORlGugMV2vLZQpEwm4k1q8kk%2F5sHloiyfuw7LNBxiTZCL9udQavGZYVldR0RJl%2BVV7NLOdPon4Rnagnfoul1wyEe6d2S2dLUhOmieY7mFnisQoCzh2Pg3MY9G0Pv7mtoRPlSTa6%2BtV0EqrD35%2FE%2FHuP%2Fueck9mqJ3oJGaytyF4PDwd2DEDh5sE3qKyMVz3aWHuhLt9RP0jiE28PNuFG2tTsKEzl1%2FA5wh%2B0r7y8DPoVyEf76haB0h5nFDLl5HYNNJRrn6N%2F5SCy%2FemIPbR7GAyRt9h76EoVkd6c2wlVZHKZjjlUHLORoC1oh574g%2Bu4AEG5uNqwAlAaeXE3uh6g%2FToesgGkwJuDr2eBqnZgKtb5Bz3oqsK%2FXvkbfvERyF7AGf0gE%2FCMlGuX7IxYL5JfWsK8TVPD7SjNUcH8RtoGJoi213mTkI4nrXBMJij58QGOqUBSWi%2B0f%2Bcdt3XnYiVPTDPJZsbSQnAq9uOcgH5TNMVvB0TZaVG2sA0K47UlZVoPd%2FKsQsEHcnct5hmVWRkgPQAiLwQ6cVeTnxp4KsBqFbsPPNOKncVL8mCQcMpWVMQ%2Fbp8NHRqCuSNQmWDW1WUGAsdg4Q%2BGDpvku%2BsYS0uvW1swbtejd9FiVMrc%2FJfBbstL6zVJAulBRqpBZtT6fuszeIAXIVupghK&X-Amz-Signature=dea8db2384d2c5892deb0ab395e1db35099233c9cb91054a5b4211f413750c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBFQF6WP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzT7hS1pm5%2BU3L%2BZoRbov9%2FKLNM9NCsgSZTXiAttwZkQIgSfLU%2F8KqdnjZdD5xXQASPdgN3H8VAJK6FScq3xsxgVIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0EDJ71pY5jXbUiHSrcA8tZpHLL1Nft47QF1YDDBWpd0DIBlvoOt%2BX5zw4au%2BhCn2ZZUmGUjfz%2BHUDtrO6Bgn3uznzhPg20N1sKtXMAI3WJDuU%2F4aG34SysMK9klobcGpxaezMx%2B0oEPyW99uT0kKsiquNaX3FIezl2iPEpWLGXOlD%2BH%2FRgEiRliqQiN%2Fd660RrIpVJClMDWArxAwgeGd21OEORlGugMV2vLZQpEwm4k1q8kk%2F5sHloiyfuw7LNBxiTZCL9udQavGZYVldR0RJl%2BVV7NLOdPon4Rnagnfoul1wyEe6d2S2dLUhOmieY7mFnisQoCzh2Pg3MY9G0Pv7mtoRPlSTa6%2BtV0EqrD35%2FE%2FHuP%2Fueck9mqJ3oJGaytyF4PDwd2DEDh5sE3qKyMVz3aWHuhLt9RP0jiE28PNuFG2tTsKEzl1%2FA5wh%2B0r7y8DPoVyEf76haB0h5nFDLl5HYNNJRrn6N%2F5SCy%2FemIPbR7GAyRt9h76EoVkd6c2wlVZHKZjjlUHLORoC1oh574g%2Bu4AEG5uNqwAlAaeXE3uh6g%2FToesgGkwJuDr2eBqnZgKtb5Bz3oqsK%2FXvkbfvERyF7AGf0gE%2FCMlGuX7IxYL5JfWsK8TVPD7SjNUcH8RtoGJoi213mTkI4nrXBMJij58QGOqUBSWi%2B0f%2Bcdt3XnYiVPTDPJZsbSQnAq9uOcgH5TNMVvB0TZaVG2sA0K47UlZVoPd%2FKsQsEHcnct5hmVWRkgPQAiLwQ6cVeTnxp4KsBqFbsPPNOKncVL8mCQcMpWVMQ%2Fbp8NHRqCuSNQmWDW1WUGAsdg4Q%2BGDpvku%2BsYS0uvW1swbtejd9FiVMrc%2FJfBbstL6zVJAulBRqpBZtT6fuszeIAXIVupghK&X-Amz-Signature=e6ddbf02da76bbc99ecf32cc2d55f28779fd7eb20d0d628875089d2bb5daf8bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7LGMB5H%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJ8xa%2FR2rtLrzakT5sYs140U%2BkYjZnbqqOx6ECYOISqAiAx0bMg5AxbZYMNW6Zk07dBcnQT7Q6uljM%2FnFXcIOD1nSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeM4ME2jkffAgD8wvKtwDj%2BDGLJ%2B1H%2FPoS3e4DFV%2BK9EcnVD4FOb8wEiHAMNXMIYIJWZKC0PjojlOBa1VXeORJzKvY%2FHTbbBQLLjbcAUisdygkVJpLAcIqTTdBNihQbFtvV%2FQfMENs2UyIUlJ64Ol4Wj3wNE2ghHD2KVqvR4AT3Ysy%2FZiOBDjdrLdwl66idiBcs8Be0uMCTuMRvbgqgYBR5GLSrnmFvs7OlLY52IkRH%2FKuCbygVPfoQGdmcB44Hxb3JX1iADZt8yJKpxcnX12u4O4IHNDvJ%2FNUp2rGeq1KVNJf4iD9rtfil1gwWRFiwQFxylplz1a%2BCJEf1L%2BcS%2BuH0A%2Fl376yQXkpZENnlHLJzbnARv%2BJMp%2FP45cNhksuZEOdpREWNWDYw8ejfc%2BB05nGnYEWeH4Tgii%2BRE1u7%2F4JR8x8KLkFTQKiMgRh28%2BucBQVwsMegImgEcjrkTQuNud2s9o5zyfguU0ysz84tPexgAxeGqxLVWplVDOeejqABVxMnzAhEjLg76Lx4PSpCDvL1EAjdocDRpYGg1JMoohbmF0YkaLag1ZBBDGFPZX9V4iktUBmSJXHsgVJHfvAEZ3k9besSHEF2p2xsgWC4QeRDEOVu%2FrXQzoMKsxfMzE4jwBSpf7YtL0n1Vl7M8w9aLnxAY6pgGWPunI2SVCanr3%2B2UDmeIwYNIzvRg8e3myF2FEGZM21lWmGIQALjpmbak1AnsDRufUmTSRPOgnsOnwMesvn0czXz0NS6G2QZWqDOnO1tToHymU1ZQe6KHjuYzugpTgzyjbqWpwvNrePq5nPd6u1GoLZcrPaIRMuA9BaeTy5khBDRgIFF1krT%2F3vOtRte0qPCknywbrzEfynQ%2BTyU7gMXS0WGfWfTZ6&X-Amz-Signature=4b278c2875381f4886c2d2db8461f07a361beda48b436fac370d7dd6a2da591b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7LGMB5H%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJ8xa%2FR2rtLrzakT5sYs140U%2BkYjZnbqqOx6ECYOISqAiAx0bMg5AxbZYMNW6Zk07dBcnQT7Q6uljM%2FnFXcIOD1nSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeM4ME2jkffAgD8wvKtwDj%2BDGLJ%2B1H%2FPoS3e4DFV%2BK9EcnVD4FOb8wEiHAMNXMIYIJWZKC0PjojlOBa1VXeORJzKvY%2FHTbbBQLLjbcAUisdygkVJpLAcIqTTdBNihQbFtvV%2FQfMENs2UyIUlJ64Ol4Wj3wNE2ghHD2KVqvR4AT3Ysy%2FZiOBDjdrLdwl66idiBcs8Be0uMCTuMRvbgqgYBR5GLSrnmFvs7OlLY52IkRH%2FKuCbygVPfoQGdmcB44Hxb3JX1iADZt8yJKpxcnX12u4O4IHNDvJ%2FNUp2rGeq1KVNJf4iD9rtfil1gwWRFiwQFxylplz1a%2BCJEf1L%2BcS%2BuH0A%2Fl376yQXkpZENnlHLJzbnARv%2BJMp%2FP45cNhksuZEOdpREWNWDYw8ejfc%2BB05nGnYEWeH4Tgii%2BRE1u7%2F4JR8x8KLkFTQKiMgRh28%2BucBQVwsMegImgEcjrkTQuNud2s9o5zyfguU0ysz84tPexgAxeGqxLVWplVDOeejqABVxMnzAhEjLg76Lx4PSpCDvL1EAjdocDRpYGg1JMoohbmF0YkaLag1ZBBDGFPZX9V4iktUBmSJXHsgVJHfvAEZ3k9besSHEF2p2xsgWC4QeRDEOVu%2FrXQzoMKsxfMzE4jwBSpf7YtL0n1Vl7M8w9aLnxAY6pgGWPunI2SVCanr3%2B2UDmeIwYNIzvRg8e3myF2FEGZM21lWmGIQALjpmbak1AnsDRufUmTSRPOgnsOnwMesvn0czXz0NS6G2QZWqDOnO1tToHymU1ZQe6KHjuYzugpTgzyjbqWpwvNrePq5nPd6u1GoLZcrPaIRMuA9BaeTy5khBDRgIFF1krT%2F3vOtRte0qPCknywbrzEfynQ%2BTyU7gMXS0WGfWfTZ6&X-Amz-Signature=2d5335d2c3593422bc0cb0ff12a25b371d61e2a593497a1a9c64f45b598d285c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7LGMB5H%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJ8xa%2FR2rtLrzakT5sYs140U%2BkYjZnbqqOx6ECYOISqAiAx0bMg5AxbZYMNW6Zk07dBcnQT7Q6uljM%2FnFXcIOD1nSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeM4ME2jkffAgD8wvKtwDj%2BDGLJ%2B1H%2FPoS3e4DFV%2BK9EcnVD4FOb8wEiHAMNXMIYIJWZKC0PjojlOBa1VXeORJzKvY%2FHTbbBQLLjbcAUisdygkVJpLAcIqTTdBNihQbFtvV%2FQfMENs2UyIUlJ64Ol4Wj3wNE2ghHD2KVqvR4AT3Ysy%2FZiOBDjdrLdwl66idiBcs8Be0uMCTuMRvbgqgYBR5GLSrnmFvs7OlLY52IkRH%2FKuCbygVPfoQGdmcB44Hxb3JX1iADZt8yJKpxcnX12u4O4IHNDvJ%2FNUp2rGeq1KVNJf4iD9rtfil1gwWRFiwQFxylplz1a%2BCJEf1L%2BcS%2BuH0A%2Fl376yQXkpZENnlHLJzbnARv%2BJMp%2FP45cNhksuZEOdpREWNWDYw8ejfc%2BB05nGnYEWeH4Tgii%2BRE1u7%2F4JR8x8KLkFTQKiMgRh28%2BucBQVwsMegImgEcjrkTQuNud2s9o5zyfguU0ysz84tPexgAxeGqxLVWplVDOeejqABVxMnzAhEjLg76Lx4PSpCDvL1EAjdocDRpYGg1JMoohbmF0YkaLag1ZBBDGFPZX9V4iktUBmSJXHsgVJHfvAEZ3k9besSHEF2p2xsgWC4QeRDEOVu%2FrXQzoMKsxfMzE4jwBSpf7YtL0n1Vl7M8w9aLnxAY6pgGWPunI2SVCanr3%2B2UDmeIwYNIzvRg8e3myF2FEGZM21lWmGIQALjpmbak1AnsDRufUmTSRPOgnsOnwMesvn0czXz0NS6G2QZWqDOnO1tToHymU1ZQe6KHjuYzugpTgzyjbqWpwvNrePq5nPd6u1GoLZcrPaIRMuA9BaeTy5khBDRgIFF1krT%2F3vOtRte0qPCknywbrzEfynQ%2BTyU7gMXS0WGfWfTZ6&X-Amz-Signature=67986a7930b59984baf910ff5d4354ad3cc3e5d8cb773ff758a401b79369d7d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7LGMB5H%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJ8xa%2FR2rtLrzakT5sYs140U%2BkYjZnbqqOx6ECYOISqAiAx0bMg5AxbZYMNW6Zk07dBcnQT7Q6uljM%2FnFXcIOD1nSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeM4ME2jkffAgD8wvKtwDj%2BDGLJ%2B1H%2FPoS3e4DFV%2BK9EcnVD4FOb8wEiHAMNXMIYIJWZKC0PjojlOBa1VXeORJzKvY%2FHTbbBQLLjbcAUisdygkVJpLAcIqTTdBNihQbFtvV%2FQfMENs2UyIUlJ64Ol4Wj3wNE2ghHD2KVqvR4AT3Ysy%2FZiOBDjdrLdwl66idiBcs8Be0uMCTuMRvbgqgYBR5GLSrnmFvs7OlLY52IkRH%2FKuCbygVPfoQGdmcB44Hxb3JX1iADZt8yJKpxcnX12u4O4IHNDvJ%2FNUp2rGeq1KVNJf4iD9rtfil1gwWRFiwQFxylplz1a%2BCJEf1L%2BcS%2BuH0A%2Fl376yQXkpZENnlHLJzbnARv%2BJMp%2FP45cNhksuZEOdpREWNWDYw8ejfc%2BB05nGnYEWeH4Tgii%2BRE1u7%2F4JR8x8KLkFTQKiMgRh28%2BucBQVwsMegImgEcjrkTQuNud2s9o5zyfguU0ysz84tPexgAxeGqxLVWplVDOeejqABVxMnzAhEjLg76Lx4PSpCDvL1EAjdocDRpYGg1JMoohbmF0YkaLag1ZBBDGFPZX9V4iktUBmSJXHsgVJHfvAEZ3k9besSHEF2p2xsgWC4QeRDEOVu%2FrXQzoMKsxfMzE4jwBSpf7YtL0n1Vl7M8w9aLnxAY6pgGWPunI2SVCanr3%2B2UDmeIwYNIzvRg8e3myF2FEGZM21lWmGIQALjpmbak1AnsDRufUmTSRPOgnsOnwMesvn0czXz0NS6G2QZWqDOnO1tToHymU1ZQe6KHjuYzugpTgzyjbqWpwvNrePq5nPd6u1GoLZcrPaIRMuA9BaeTy5khBDRgIFF1krT%2F3vOtRte0qPCknywbrzEfynQ%2BTyU7gMXS0WGfWfTZ6&X-Amz-Signature=c9efb2bd50298fe758594a4490f464a45ba8ad691157f87652a397721035a828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7LGMB5H%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJ8xa%2FR2rtLrzakT5sYs140U%2BkYjZnbqqOx6ECYOISqAiAx0bMg5AxbZYMNW6Zk07dBcnQT7Q6uljM%2FnFXcIOD1nSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeM4ME2jkffAgD8wvKtwDj%2BDGLJ%2B1H%2FPoS3e4DFV%2BK9EcnVD4FOb8wEiHAMNXMIYIJWZKC0PjojlOBa1VXeORJzKvY%2FHTbbBQLLjbcAUisdygkVJpLAcIqTTdBNihQbFtvV%2FQfMENs2UyIUlJ64Ol4Wj3wNE2ghHD2KVqvR4AT3Ysy%2FZiOBDjdrLdwl66idiBcs8Be0uMCTuMRvbgqgYBR5GLSrnmFvs7OlLY52IkRH%2FKuCbygVPfoQGdmcB44Hxb3JX1iADZt8yJKpxcnX12u4O4IHNDvJ%2FNUp2rGeq1KVNJf4iD9rtfil1gwWRFiwQFxylplz1a%2BCJEf1L%2BcS%2BuH0A%2Fl376yQXkpZENnlHLJzbnARv%2BJMp%2FP45cNhksuZEOdpREWNWDYw8ejfc%2BB05nGnYEWeH4Tgii%2BRE1u7%2F4JR8x8KLkFTQKiMgRh28%2BucBQVwsMegImgEcjrkTQuNud2s9o5zyfguU0ysz84tPexgAxeGqxLVWplVDOeejqABVxMnzAhEjLg76Lx4PSpCDvL1EAjdocDRpYGg1JMoohbmF0YkaLag1ZBBDGFPZX9V4iktUBmSJXHsgVJHfvAEZ3k9besSHEF2p2xsgWC4QeRDEOVu%2FrXQzoMKsxfMzE4jwBSpf7YtL0n1Vl7M8w9aLnxAY6pgGWPunI2SVCanr3%2B2UDmeIwYNIzvRg8e3myF2FEGZM21lWmGIQALjpmbak1AnsDRufUmTSRPOgnsOnwMesvn0czXz0NS6G2QZWqDOnO1tToHymU1ZQe6KHjuYzugpTgzyjbqWpwvNrePq5nPd6u1GoLZcrPaIRMuA9BaeTy5khBDRgIFF1krT%2F3vOtRte0qPCknywbrzEfynQ%2BTyU7gMXS0WGfWfTZ6&X-Amz-Signature=6940b4ba51ec168f78fea535579ca5b1660b879b116fd4ec6f29b22e8a724d8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7LGMB5H%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJ8xa%2FR2rtLrzakT5sYs140U%2BkYjZnbqqOx6ECYOISqAiAx0bMg5AxbZYMNW6Zk07dBcnQT7Q6uljM%2FnFXcIOD1nSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeM4ME2jkffAgD8wvKtwDj%2BDGLJ%2B1H%2FPoS3e4DFV%2BK9EcnVD4FOb8wEiHAMNXMIYIJWZKC0PjojlOBa1VXeORJzKvY%2FHTbbBQLLjbcAUisdygkVJpLAcIqTTdBNihQbFtvV%2FQfMENs2UyIUlJ64Ol4Wj3wNE2ghHD2KVqvR4AT3Ysy%2FZiOBDjdrLdwl66idiBcs8Be0uMCTuMRvbgqgYBR5GLSrnmFvs7OlLY52IkRH%2FKuCbygVPfoQGdmcB44Hxb3JX1iADZt8yJKpxcnX12u4O4IHNDvJ%2FNUp2rGeq1KVNJf4iD9rtfil1gwWRFiwQFxylplz1a%2BCJEf1L%2BcS%2BuH0A%2Fl376yQXkpZENnlHLJzbnARv%2BJMp%2FP45cNhksuZEOdpREWNWDYw8ejfc%2BB05nGnYEWeH4Tgii%2BRE1u7%2F4JR8x8KLkFTQKiMgRh28%2BucBQVwsMegImgEcjrkTQuNud2s9o5zyfguU0ysz84tPexgAxeGqxLVWplVDOeejqABVxMnzAhEjLg76Lx4PSpCDvL1EAjdocDRpYGg1JMoohbmF0YkaLag1ZBBDGFPZX9V4iktUBmSJXHsgVJHfvAEZ3k9besSHEF2p2xsgWC4QeRDEOVu%2FrXQzoMKsxfMzE4jwBSpf7YtL0n1Vl7M8w9aLnxAY6pgGWPunI2SVCanr3%2B2UDmeIwYNIzvRg8e3myF2FEGZM21lWmGIQALjpmbak1AnsDRufUmTSRPOgnsOnwMesvn0czXz0NS6G2QZWqDOnO1tToHymU1ZQe6KHjuYzugpTgzyjbqWpwvNrePq5nPd6u1GoLZcrPaIRMuA9BaeTy5khBDRgIFF1krT%2F3vOtRte0qPCknywbrzEfynQ%2BTyU7gMXS0WGfWfTZ6&X-Amz-Signature=fde7e8fcfb9d8b0afa5738f81dc867f24cefea116479a9a671ce479e918d15d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7LGMB5H%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJ8xa%2FR2rtLrzakT5sYs140U%2BkYjZnbqqOx6ECYOISqAiAx0bMg5AxbZYMNW6Zk07dBcnQT7Q6uljM%2FnFXcIOD1nSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeM4ME2jkffAgD8wvKtwDj%2BDGLJ%2B1H%2FPoS3e4DFV%2BK9EcnVD4FOb8wEiHAMNXMIYIJWZKC0PjojlOBa1VXeORJzKvY%2FHTbbBQLLjbcAUisdygkVJpLAcIqTTdBNihQbFtvV%2FQfMENs2UyIUlJ64Ol4Wj3wNE2ghHD2KVqvR4AT3Ysy%2FZiOBDjdrLdwl66idiBcs8Be0uMCTuMRvbgqgYBR5GLSrnmFvs7OlLY52IkRH%2FKuCbygVPfoQGdmcB44Hxb3JX1iADZt8yJKpxcnX12u4O4IHNDvJ%2FNUp2rGeq1KVNJf4iD9rtfil1gwWRFiwQFxylplz1a%2BCJEf1L%2BcS%2BuH0A%2Fl376yQXkpZENnlHLJzbnARv%2BJMp%2FP45cNhksuZEOdpREWNWDYw8ejfc%2BB05nGnYEWeH4Tgii%2BRE1u7%2F4JR8x8KLkFTQKiMgRh28%2BucBQVwsMegImgEcjrkTQuNud2s9o5zyfguU0ysz84tPexgAxeGqxLVWplVDOeejqABVxMnzAhEjLg76Lx4PSpCDvL1EAjdocDRpYGg1JMoohbmF0YkaLag1ZBBDGFPZX9V4iktUBmSJXHsgVJHfvAEZ3k9besSHEF2p2xsgWC4QeRDEOVu%2FrXQzoMKsxfMzE4jwBSpf7YtL0n1Vl7M8w9aLnxAY6pgGWPunI2SVCanr3%2B2UDmeIwYNIzvRg8e3myF2FEGZM21lWmGIQALjpmbak1AnsDRufUmTSRPOgnsOnwMesvn0czXz0NS6G2QZWqDOnO1tToHymU1ZQe6KHjuYzugpTgzyjbqWpwvNrePq5nPd6u1GoLZcrPaIRMuA9BaeTy5khBDRgIFF1krT%2F3vOtRte0qPCknywbrzEfynQ%2BTyU7gMXS0WGfWfTZ6&X-Amz-Signature=67986a7930b59984baf910ff5d4354ad3cc3e5d8cb773ff758a401b79369d7d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7LGMB5H%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJ8xa%2FR2rtLrzakT5sYs140U%2BkYjZnbqqOx6ECYOISqAiAx0bMg5AxbZYMNW6Zk07dBcnQT7Q6uljM%2FnFXcIOD1nSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeM4ME2jkffAgD8wvKtwDj%2BDGLJ%2B1H%2FPoS3e4DFV%2BK9EcnVD4FOb8wEiHAMNXMIYIJWZKC0PjojlOBa1VXeORJzKvY%2FHTbbBQLLjbcAUisdygkVJpLAcIqTTdBNihQbFtvV%2FQfMENs2UyIUlJ64Ol4Wj3wNE2ghHD2KVqvR4AT3Ysy%2FZiOBDjdrLdwl66idiBcs8Be0uMCTuMRvbgqgYBR5GLSrnmFvs7OlLY52IkRH%2FKuCbygVPfoQGdmcB44Hxb3JX1iADZt8yJKpxcnX12u4O4IHNDvJ%2FNUp2rGeq1KVNJf4iD9rtfil1gwWRFiwQFxylplz1a%2BCJEf1L%2BcS%2BuH0A%2Fl376yQXkpZENnlHLJzbnARv%2BJMp%2FP45cNhksuZEOdpREWNWDYw8ejfc%2BB05nGnYEWeH4Tgii%2BRE1u7%2F4JR8x8KLkFTQKiMgRh28%2BucBQVwsMegImgEcjrkTQuNud2s9o5zyfguU0ysz84tPexgAxeGqxLVWplVDOeejqABVxMnzAhEjLg76Lx4PSpCDvL1EAjdocDRpYGg1JMoohbmF0YkaLag1ZBBDGFPZX9V4iktUBmSJXHsgVJHfvAEZ3k9besSHEF2p2xsgWC4QeRDEOVu%2FrXQzoMKsxfMzE4jwBSpf7YtL0n1Vl7M8w9aLnxAY6pgGWPunI2SVCanr3%2B2UDmeIwYNIzvRg8e3myF2FEGZM21lWmGIQALjpmbak1AnsDRufUmTSRPOgnsOnwMesvn0czXz0NS6G2QZWqDOnO1tToHymU1ZQe6KHjuYzugpTgzyjbqWpwvNrePq5nPd6u1GoLZcrPaIRMuA9BaeTy5khBDRgIFF1krT%2F3vOtRte0qPCknywbrzEfynQ%2BTyU7gMXS0WGfWfTZ6&X-Amz-Signature=c2172b13d62119abfbd4bdd1f027a59f05f3251bdd785651d5bcdb8d0f9028ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7LGMB5H%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJ8xa%2FR2rtLrzakT5sYs140U%2BkYjZnbqqOx6ECYOISqAiAx0bMg5AxbZYMNW6Zk07dBcnQT7Q6uljM%2FnFXcIOD1nSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeM4ME2jkffAgD8wvKtwDj%2BDGLJ%2B1H%2FPoS3e4DFV%2BK9EcnVD4FOb8wEiHAMNXMIYIJWZKC0PjojlOBa1VXeORJzKvY%2FHTbbBQLLjbcAUisdygkVJpLAcIqTTdBNihQbFtvV%2FQfMENs2UyIUlJ64Ol4Wj3wNE2ghHD2KVqvR4AT3Ysy%2FZiOBDjdrLdwl66idiBcs8Be0uMCTuMRvbgqgYBR5GLSrnmFvs7OlLY52IkRH%2FKuCbygVPfoQGdmcB44Hxb3JX1iADZt8yJKpxcnX12u4O4IHNDvJ%2FNUp2rGeq1KVNJf4iD9rtfil1gwWRFiwQFxylplz1a%2BCJEf1L%2BcS%2BuH0A%2Fl376yQXkpZENnlHLJzbnARv%2BJMp%2FP45cNhksuZEOdpREWNWDYw8ejfc%2BB05nGnYEWeH4Tgii%2BRE1u7%2F4JR8x8KLkFTQKiMgRh28%2BucBQVwsMegImgEcjrkTQuNud2s9o5zyfguU0ysz84tPexgAxeGqxLVWplVDOeejqABVxMnzAhEjLg76Lx4PSpCDvL1EAjdocDRpYGg1JMoohbmF0YkaLag1ZBBDGFPZX9V4iktUBmSJXHsgVJHfvAEZ3k9besSHEF2p2xsgWC4QeRDEOVu%2FrXQzoMKsxfMzE4jwBSpf7YtL0n1Vl7M8w9aLnxAY6pgGWPunI2SVCanr3%2B2UDmeIwYNIzvRg8e3myF2FEGZM21lWmGIQALjpmbak1AnsDRufUmTSRPOgnsOnwMesvn0czXz0NS6G2QZWqDOnO1tToHymU1ZQe6KHjuYzugpTgzyjbqWpwvNrePq5nPd6u1GoLZcrPaIRMuA9BaeTy5khBDRgIFF1krT%2F3vOtRte0qPCknywbrzEfynQ%2BTyU7gMXS0WGfWfTZ6&X-Amz-Signature=25b3ab547c1798c58a151e5f63df777220f910601ad36e1a3a76e817a9500440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7LGMB5H%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJ8xa%2FR2rtLrzakT5sYs140U%2BkYjZnbqqOx6ECYOISqAiAx0bMg5AxbZYMNW6Zk07dBcnQT7Q6uljM%2FnFXcIOD1nSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeM4ME2jkffAgD8wvKtwDj%2BDGLJ%2B1H%2FPoS3e4DFV%2BK9EcnVD4FOb8wEiHAMNXMIYIJWZKC0PjojlOBa1VXeORJzKvY%2FHTbbBQLLjbcAUisdygkVJpLAcIqTTdBNihQbFtvV%2FQfMENs2UyIUlJ64Ol4Wj3wNE2ghHD2KVqvR4AT3Ysy%2FZiOBDjdrLdwl66idiBcs8Be0uMCTuMRvbgqgYBR5GLSrnmFvs7OlLY52IkRH%2FKuCbygVPfoQGdmcB44Hxb3JX1iADZt8yJKpxcnX12u4O4IHNDvJ%2FNUp2rGeq1KVNJf4iD9rtfil1gwWRFiwQFxylplz1a%2BCJEf1L%2BcS%2BuH0A%2Fl376yQXkpZENnlHLJzbnARv%2BJMp%2FP45cNhksuZEOdpREWNWDYw8ejfc%2BB05nGnYEWeH4Tgii%2BRE1u7%2F4JR8x8KLkFTQKiMgRh28%2BucBQVwsMegImgEcjrkTQuNud2s9o5zyfguU0ysz84tPexgAxeGqxLVWplVDOeejqABVxMnzAhEjLg76Lx4PSpCDvL1EAjdocDRpYGg1JMoohbmF0YkaLag1ZBBDGFPZX9V4iktUBmSJXHsgVJHfvAEZ3k9besSHEF2p2xsgWC4QeRDEOVu%2FrXQzoMKsxfMzE4jwBSpf7YtL0n1Vl7M8w9aLnxAY6pgGWPunI2SVCanr3%2B2UDmeIwYNIzvRg8e3myF2FEGZM21lWmGIQALjpmbak1AnsDRufUmTSRPOgnsOnwMesvn0czXz0NS6G2QZWqDOnO1tToHymU1ZQe6KHjuYzugpTgzyjbqWpwvNrePq5nPd6u1GoLZcrPaIRMuA9BaeTy5khBDRgIFF1krT%2F3vOtRte0qPCknywbrzEfynQ%2BTyU7gMXS0WGfWfTZ6&X-Amz-Signature=f8481a0a251cf2f2c11c6d0a78030bca104f8c67ca30cef72f958ac0233397ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
