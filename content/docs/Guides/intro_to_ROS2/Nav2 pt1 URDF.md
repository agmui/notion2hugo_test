---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T01:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T01:34:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667562Y4ZY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC2ggDsjROpI3Ba6MJyVWJLaxCQ7YUXo0iyicPRN9uVygIhALWVqhsv1tV2JdScTuyzA7rBOnUi15rUGf%2BNlzUIIdoiKv8DCDIQABoMNjM3NDIzMTgzODA1Igx5fdcqS3YmZBSMuk8q3AM3tDrVlZlgMHwvmOM00srTrzyCFwDeKQU17q1YD%2B1TKqnlnp%2BtYtudzoRG0wr%2BdasGxpug%2F5Ktno0RvghZkVcAPB8k8oyEarQNYHbRdyMahxxgmiHngtC%2FH34qTBC6HO8DIwUKdPC6zzFXOLcw8%2B3ejdRndUFO14C4NZUQZ7z3EvdGl0Eykf74VZzZugHm7G7th%2FPcKy1RmZxRiRtX8vLJxPs05hAyOdXcGnDe8NTvv8UxWcdGQL34sVYO3FJRqDD%2F%2F%2F4tveMUOfkwlbtvh1vOsyNwW400YEaJWEZ03p5UmifcGICuqzv4kodzXvEnLwQgrIrFqVPS%2FP%2F4WPhf5r2DUfXewAZufIBdAvE2jmThQ9VIu357%2BrLHxuRVT%2FUAvVr%2FxOK6kgulOOLUA3dO3Sgaq5InUHe5JY0cQgroH27luED7yVIySdJ%2BQTRrXA1fCY4VHfp5QAesnCfQ7BMwuGK1q%2FMPkVxUMhjGkpQfRL4DNSe8WUkQjeDXL9M9IYH2eG1LV9y9p66Nofg35CJmcB%2B4Y4NqnnJ5ZUH1xlGqXg%2FQlL4JrV6m%2Bhw925WANgNbtdJmmXwyK3JnKjSnQv0U2dhexp%2FKzxgqOi8jlGdm9FgNM3sXRo5auXMWMZijXDC504nEBjqkAQR%2BncCR6Xy1EANf6Z8sH0Ik%2BOPljJiGhb%2BMFoQ%2B1usozXOtx9HWZKzscbOXLhBsiYse1%2FFpimTVnS5w724%2B7OgittNEXg2d1e0noUVnDGNhillxp09fIW%2Fk3WLOCcqc8aVemzjHhXWmc4hHAXUz6F7KVaktGwt%2FXK5qwRwaV9eMMmDN9bS8ey87KjD43%2FmRi4dHoJcClqzv%2BRxQQWmy9i2Cmioz&X-Amz-Signature=40530ae6ba253c048dad0b209441e8a07545763ab11bb863cd91c3d5fc240712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667562Y4ZY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC2ggDsjROpI3Ba6MJyVWJLaxCQ7YUXo0iyicPRN9uVygIhALWVqhsv1tV2JdScTuyzA7rBOnUi15rUGf%2BNlzUIIdoiKv8DCDIQABoMNjM3NDIzMTgzODA1Igx5fdcqS3YmZBSMuk8q3AM3tDrVlZlgMHwvmOM00srTrzyCFwDeKQU17q1YD%2B1TKqnlnp%2BtYtudzoRG0wr%2BdasGxpug%2F5Ktno0RvghZkVcAPB8k8oyEarQNYHbRdyMahxxgmiHngtC%2FH34qTBC6HO8DIwUKdPC6zzFXOLcw8%2B3ejdRndUFO14C4NZUQZ7z3EvdGl0Eykf74VZzZugHm7G7th%2FPcKy1RmZxRiRtX8vLJxPs05hAyOdXcGnDe8NTvv8UxWcdGQL34sVYO3FJRqDD%2F%2F%2F4tveMUOfkwlbtvh1vOsyNwW400YEaJWEZ03p5UmifcGICuqzv4kodzXvEnLwQgrIrFqVPS%2FP%2F4WPhf5r2DUfXewAZufIBdAvE2jmThQ9VIu357%2BrLHxuRVT%2FUAvVr%2FxOK6kgulOOLUA3dO3Sgaq5InUHe5JY0cQgroH27luED7yVIySdJ%2BQTRrXA1fCY4VHfp5QAesnCfQ7BMwuGK1q%2FMPkVxUMhjGkpQfRL4DNSe8WUkQjeDXL9M9IYH2eG1LV9y9p66Nofg35CJmcB%2B4Y4NqnnJ5ZUH1xlGqXg%2FQlL4JrV6m%2Bhw925WANgNbtdJmmXwyK3JnKjSnQv0U2dhexp%2FKzxgqOi8jlGdm9FgNM3sXRo5auXMWMZijXDC504nEBjqkAQR%2BncCR6Xy1EANf6Z8sH0Ik%2BOPljJiGhb%2BMFoQ%2B1usozXOtx9HWZKzscbOXLhBsiYse1%2FFpimTVnS5w724%2B7OgittNEXg2d1e0noUVnDGNhillxp09fIW%2Fk3WLOCcqc8aVemzjHhXWmc4hHAXUz6F7KVaktGwt%2FXK5qwRwaV9eMMmDN9bS8ey87KjD43%2FmRi4dHoJcClqzv%2BRxQQWmy9i2Cmioz&X-Amz-Signature=d253aae129c7d0675ffb30760adba64da3b3c798b5b184cd285786ce60f5ba13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly highly HIGHLY recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667562Y4ZY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC2ggDsjROpI3Ba6MJyVWJLaxCQ7YUXo0iyicPRN9uVygIhALWVqhsv1tV2JdScTuyzA7rBOnUi15rUGf%2BNlzUIIdoiKv8DCDIQABoMNjM3NDIzMTgzODA1Igx5fdcqS3YmZBSMuk8q3AM3tDrVlZlgMHwvmOM00srTrzyCFwDeKQU17q1YD%2B1TKqnlnp%2BtYtudzoRG0wr%2BdasGxpug%2F5Ktno0RvghZkVcAPB8k8oyEarQNYHbRdyMahxxgmiHngtC%2FH34qTBC6HO8DIwUKdPC6zzFXOLcw8%2B3ejdRndUFO14C4NZUQZ7z3EvdGl0Eykf74VZzZugHm7G7th%2FPcKy1RmZxRiRtX8vLJxPs05hAyOdXcGnDe8NTvv8UxWcdGQL34sVYO3FJRqDD%2F%2F%2F4tveMUOfkwlbtvh1vOsyNwW400YEaJWEZ03p5UmifcGICuqzv4kodzXvEnLwQgrIrFqVPS%2FP%2F4WPhf5r2DUfXewAZufIBdAvE2jmThQ9VIu357%2BrLHxuRVT%2FUAvVr%2FxOK6kgulOOLUA3dO3Sgaq5InUHe5JY0cQgroH27luED7yVIySdJ%2BQTRrXA1fCY4VHfp5QAesnCfQ7BMwuGK1q%2FMPkVxUMhjGkpQfRL4DNSe8WUkQjeDXL9M9IYH2eG1LV9y9p66Nofg35CJmcB%2B4Y4NqnnJ5ZUH1xlGqXg%2FQlL4JrV6m%2Bhw925WANgNbtdJmmXwyK3JnKjSnQv0U2dhexp%2FKzxgqOi8jlGdm9FgNM3sXRo5auXMWMZijXDC504nEBjqkAQR%2BncCR6Xy1EANf6Z8sH0Ik%2BOPljJiGhb%2BMFoQ%2B1usozXOtx9HWZKzscbOXLhBsiYse1%2FFpimTVnS5w724%2B7OgittNEXg2d1e0noUVnDGNhillxp09fIW%2Fk3WLOCcqc8aVemzjHhXWmc4hHAXUz6F7KVaktGwt%2FXK5qwRwaV9eMMmDN9bS8ey87KjD43%2FmRi4dHoJcClqzv%2BRxQQWmy9i2Cmioz&X-Amz-Signature=e182e2d51613f3652355e35b73519ccb49b8131cda0349c011d41c44debd61c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are many reasons for this because

- keeps all your code in one place
- You don’t need a monitor, mouse, and keyboard to connect to your Raspberry Pi
- Your laptop is much much faster than your Raspberry Pi so debugging is faster
- Once you are done developing on your laptop all you have to do is copy all the files over to the Pi and Docker will automatically make it work

{{% /alert %}}

## creating workspace + package

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

If you are doing the Dev container setup put these at the bottom of your `Dockerfile`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667562Y4ZY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC2ggDsjROpI3Ba6MJyVWJLaxCQ7YUXo0iyicPRN9uVygIhALWVqhsv1tV2JdScTuyzA7rBOnUi15rUGf%2BNlzUIIdoiKv8DCDIQABoMNjM3NDIzMTgzODA1Igx5fdcqS3YmZBSMuk8q3AM3tDrVlZlgMHwvmOM00srTrzyCFwDeKQU17q1YD%2B1TKqnlnp%2BtYtudzoRG0wr%2BdasGxpug%2F5Ktno0RvghZkVcAPB8k8oyEarQNYHbRdyMahxxgmiHngtC%2FH34qTBC6HO8DIwUKdPC6zzFXOLcw8%2B3ejdRndUFO14C4NZUQZ7z3EvdGl0Eykf74VZzZugHm7G7th%2FPcKy1RmZxRiRtX8vLJxPs05hAyOdXcGnDe8NTvv8UxWcdGQL34sVYO3FJRqDD%2F%2F%2F4tveMUOfkwlbtvh1vOsyNwW400YEaJWEZ03p5UmifcGICuqzv4kodzXvEnLwQgrIrFqVPS%2FP%2F4WPhf5r2DUfXewAZufIBdAvE2jmThQ9VIu357%2BrLHxuRVT%2FUAvVr%2FxOK6kgulOOLUA3dO3Sgaq5InUHe5JY0cQgroH27luED7yVIySdJ%2BQTRrXA1fCY4VHfp5QAesnCfQ7BMwuGK1q%2FMPkVxUMhjGkpQfRL4DNSe8WUkQjeDXL9M9IYH2eG1LV9y9p66Nofg35CJmcB%2B4Y4NqnnJ5ZUH1xlGqXg%2FQlL4JrV6m%2Bhw925WANgNbtdJmmXwyK3JnKjSnQv0U2dhexp%2FKzxgqOi8jlGdm9FgNM3sXRo5auXMWMZijXDC504nEBjqkAQR%2BncCR6Xy1EANf6Z8sH0Ik%2BOPljJiGhb%2BMFoQ%2B1usozXOtx9HWZKzscbOXLhBsiYse1%2FFpimTVnS5w724%2B7OgittNEXg2d1e0noUVnDGNhillxp09fIW%2Fk3WLOCcqc8aVemzjHhXWmc4hHAXUz6F7KVaktGwt%2FXK5qwRwaV9eMMmDN9bS8ey87KjD43%2FmRi4dHoJcClqzv%2BRxQQWmy9i2Cmioz&X-Amz-Signature=c2200f08faa06bcac0b828f2c9210bbfd8602992f327663eee3a9684f4b3f8d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667562Y4ZY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC2ggDsjROpI3Ba6MJyVWJLaxCQ7YUXo0iyicPRN9uVygIhALWVqhsv1tV2JdScTuyzA7rBOnUi15rUGf%2BNlzUIIdoiKv8DCDIQABoMNjM3NDIzMTgzODA1Igx5fdcqS3YmZBSMuk8q3AM3tDrVlZlgMHwvmOM00srTrzyCFwDeKQU17q1YD%2B1TKqnlnp%2BtYtudzoRG0wr%2BdasGxpug%2F5Ktno0RvghZkVcAPB8k8oyEarQNYHbRdyMahxxgmiHngtC%2FH34qTBC6HO8DIwUKdPC6zzFXOLcw8%2B3ejdRndUFO14C4NZUQZ7z3EvdGl0Eykf74VZzZugHm7G7th%2FPcKy1RmZxRiRtX8vLJxPs05hAyOdXcGnDe8NTvv8UxWcdGQL34sVYO3FJRqDD%2F%2F%2F4tveMUOfkwlbtvh1vOsyNwW400YEaJWEZ03p5UmifcGICuqzv4kodzXvEnLwQgrIrFqVPS%2FP%2F4WPhf5r2DUfXewAZufIBdAvE2jmThQ9VIu357%2BrLHxuRVT%2FUAvVr%2FxOK6kgulOOLUA3dO3Sgaq5InUHe5JY0cQgroH27luED7yVIySdJ%2BQTRrXA1fCY4VHfp5QAesnCfQ7BMwuGK1q%2FMPkVxUMhjGkpQfRL4DNSe8WUkQjeDXL9M9IYH2eG1LV9y9p66Nofg35CJmcB%2B4Y4NqnnJ5ZUH1xlGqXg%2FQlL4JrV6m%2Bhw925WANgNbtdJmmXwyK3JnKjSnQv0U2dhexp%2FKzxgqOi8jlGdm9FgNM3sXRo5auXMWMZijXDC504nEBjqkAQR%2BncCR6Xy1EANf6Z8sH0Ik%2BOPljJiGhb%2BMFoQ%2B1usozXOtx9HWZKzscbOXLhBsiYse1%2FFpimTVnS5w724%2B7OgittNEXg2d1e0noUVnDGNhillxp09fIW%2Fk3WLOCcqc8aVemzjHhXWmc4hHAXUz6F7KVaktGwt%2FXK5qwRwaV9eMMmDN9bS8ey87KjD43%2FmRi4dHoJcClqzv%2BRxQQWmy9i2Cmioz&X-Amz-Signature=0d3d8f27c68c28060167b76d8cde1302800703761b03fd4c3cd2394f30e3922f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667562Y4ZY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC2ggDsjROpI3Ba6MJyVWJLaxCQ7YUXo0iyicPRN9uVygIhALWVqhsv1tV2JdScTuyzA7rBOnUi15rUGf%2BNlzUIIdoiKv8DCDIQABoMNjM3NDIzMTgzODA1Igx5fdcqS3YmZBSMuk8q3AM3tDrVlZlgMHwvmOM00srTrzyCFwDeKQU17q1YD%2B1TKqnlnp%2BtYtudzoRG0wr%2BdasGxpug%2F5Ktno0RvghZkVcAPB8k8oyEarQNYHbRdyMahxxgmiHngtC%2FH34qTBC6HO8DIwUKdPC6zzFXOLcw8%2B3ejdRndUFO14C4NZUQZ7z3EvdGl0Eykf74VZzZugHm7G7th%2FPcKy1RmZxRiRtX8vLJxPs05hAyOdXcGnDe8NTvv8UxWcdGQL34sVYO3FJRqDD%2F%2F%2F4tveMUOfkwlbtvh1vOsyNwW400YEaJWEZ03p5UmifcGICuqzv4kodzXvEnLwQgrIrFqVPS%2FP%2F4WPhf5r2DUfXewAZufIBdAvE2jmThQ9VIu357%2BrLHxuRVT%2FUAvVr%2FxOK6kgulOOLUA3dO3Sgaq5InUHe5JY0cQgroH27luED7yVIySdJ%2BQTRrXA1fCY4VHfp5QAesnCfQ7BMwuGK1q%2FMPkVxUMhjGkpQfRL4DNSe8WUkQjeDXL9M9IYH2eG1LV9y9p66Nofg35CJmcB%2B4Y4NqnnJ5ZUH1xlGqXg%2FQlL4JrV6m%2Bhw925WANgNbtdJmmXwyK3JnKjSnQv0U2dhexp%2FKzxgqOi8jlGdm9FgNM3sXRo5auXMWMZijXDC504nEBjqkAQR%2BncCR6Xy1EANf6Z8sH0Ik%2BOPljJiGhb%2BMFoQ%2B1usozXOtx9HWZKzscbOXLhBsiYse1%2FFpimTVnS5w724%2B7OgittNEXg2d1e0noUVnDGNhillxp09fIW%2Fk3WLOCcqc8aVemzjHhXWmc4hHAXUz6F7KVaktGwt%2FXK5qwRwaV9eMMmDN9bS8ey87KjD43%2FmRi4dHoJcClqzv%2BRxQQWmy9i2Cmioz&X-Amz-Signature=217e581d378887e1c2d8dad40f2021dfd042ced365e7dbe678a0aeb05814cdf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667562Y4ZY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC2ggDsjROpI3Ba6MJyVWJLaxCQ7YUXo0iyicPRN9uVygIhALWVqhsv1tV2JdScTuyzA7rBOnUi15rUGf%2BNlzUIIdoiKv8DCDIQABoMNjM3NDIzMTgzODA1Igx5fdcqS3YmZBSMuk8q3AM3tDrVlZlgMHwvmOM00srTrzyCFwDeKQU17q1YD%2B1TKqnlnp%2BtYtudzoRG0wr%2BdasGxpug%2F5Ktno0RvghZkVcAPB8k8oyEarQNYHbRdyMahxxgmiHngtC%2FH34qTBC6HO8DIwUKdPC6zzFXOLcw8%2B3ejdRndUFO14C4NZUQZ7z3EvdGl0Eykf74VZzZugHm7G7th%2FPcKy1RmZxRiRtX8vLJxPs05hAyOdXcGnDe8NTvv8UxWcdGQL34sVYO3FJRqDD%2F%2F%2F4tveMUOfkwlbtvh1vOsyNwW400YEaJWEZ03p5UmifcGICuqzv4kodzXvEnLwQgrIrFqVPS%2FP%2F4WPhf5r2DUfXewAZufIBdAvE2jmThQ9VIu357%2BrLHxuRVT%2FUAvVr%2FxOK6kgulOOLUA3dO3Sgaq5InUHe5JY0cQgroH27luED7yVIySdJ%2BQTRrXA1fCY4VHfp5QAesnCfQ7BMwuGK1q%2FMPkVxUMhjGkpQfRL4DNSe8WUkQjeDXL9M9IYH2eG1LV9y9p66Nofg35CJmcB%2B4Y4NqnnJ5ZUH1xlGqXg%2FQlL4JrV6m%2Bhw925WANgNbtdJmmXwyK3JnKjSnQv0U2dhexp%2FKzxgqOi8jlGdm9FgNM3sXRo5auXMWMZijXDC504nEBjqkAQR%2BncCR6Xy1EANf6Z8sH0Ik%2BOPljJiGhb%2BMFoQ%2B1usozXOtx9HWZKzscbOXLhBsiYse1%2FFpimTVnS5w724%2B7OgittNEXg2d1e0noUVnDGNhillxp09fIW%2Fk3WLOCcqc8aVemzjHhXWmc4hHAXUz6F7KVaktGwt%2FXK5qwRwaV9eMMmDN9bS8ey87KjD43%2FmRi4dHoJcClqzv%2BRxQQWmy9i2Cmioz&X-Amz-Signature=877c3cb7ec8b95cb13c6f1ad410d77ef40932323ea4a3edf6a2349b41dcd4c7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

make a folder in `mbot_pkg` called description and a file called `mbot_description.urdf`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667562Y4ZY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC2ggDsjROpI3Ba6MJyVWJLaxCQ7YUXo0iyicPRN9uVygIhALWVqhsv1tV2JdScTuyzA7rBOnUi15rUGf%2BNlzUIIdoiKv8DCDIQABoMNjM3NDIzMTgzODA1Igx5fdcqS3YmZBSMuk8q3AM3tDrVlZlgMHwvmOM00srTrzyCFwDeKQU17q1YD%2B1TKqnlnp%2BtYtudzoRG0wr%2BdasGxpug%2F5Ktno0RvghZkVcAPB8k8oyEarQNYHbRdyMahxxgmiHngtC%2FH34qTBC6HO8DIwUKdPC6zzFXOLcw8%2B3ejdRndUFO14C4NZUQZ7z3EvdGl0Eykf74VZzZugHm7G7th%2FPcKy1RmZxRiRtX8vLJxPs05hAyOdXcGnDe8NTvv8UxWcdGQL34sVYO3FJRqDD%2F%2F%2F4tveMUOfkwlbtvh1vOsyNwW400YEaJWEZ03p5UmifcGICuqzv4kodzXvEnLwQgrIrFqVPS%2FP%2F4WPhf5r2DUfXewAZufIBdAvE2jmThQ9VIu357%2BrLHxuRVT%2FUAvVr%2FxOK6kgulOOLUA3dO3Sgaq5InUHe5JY0cQgroH27luED7yVIySdJ%2BQTRrXA1fCY4VHfp5QAesnCfQ7BMwuGK1q%2FMPkVxUMhjGkpQfRL4DNSe8WUkQjeDXL9M9IYH2eG1LV9y9p66Nofg35CJmcB%2B4Y4NqnnJ5ZUH1xlGqXg%2FQlL4JrV6m%2Bhw925WANgNbtdJmmXwyK3JnKjSnQv0U2dhexp%2FKzxgqOi8jlGdm9FgNM3sXRo5auXMWMZijXDC504nEBjqkAQR%2BncCR6Xy1EANf6Z8sH0Ik%2BOPljJiGhb%2BMFoQ%2B1usozXOtx9HWZKzscbOXLhBsiYse1%2FFpimTVnS5w724%2B7OgittNEXg2d1e0noUVnDGNhillxp09fIW%2Fk3WLOCcqc8aVemzjHhXWmc4hHAXUz6F7KVaktGwt%2FXK5qwRwaV9eMMmDN9bS8ey87KjD43%2FmRi4dHoJcClqzv%2BRxQQWmy9i2Cmioz&X-Amz-Signature=8060ac583e51d9e3c00607e195de21e72135a57497637d603f31acad2a605027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667562Y4ZY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC2ggDsjROpI3Ba6MJyVWJLaxCQ7YUXo0iyicPRN9uVygIhALWVqhsv1tV2JdScTuyzA7rBOnUi15rUGf%2BNlzUIIdoiKv8DCDIQABoMNjM3NDIzMTgzODA1Igx5fdcqS3YmZBSMuk8q3AM3tDrVlZlgMHwvmOM00srTrzyCFwDeKQU17q1YD%2B1TKqnlnp%2BtYtudzoRG0wr%2BdasGxpug%2F5Ktno0RvghZkVcAPB8k8oyEarQNYHbRdyMahxxgmiHngtC%2FH34qTBC6HO8DIwUKdPC6zzFXOLcw8%2B3ejdRndUFO14C4NZUQZ7z3EvdGl0Eykf74VZzZugHm7G7th%2FPcKy1RmZxRiRtX8vLJxPs05hAyOdXcGnDe8NTvv8UxWcdGQL34sVYO3FJRqDD%2F%2F%2F4tveMUOfkwlbtvh1vOsyNwW400YEaJWEZ03p5UmifcGICuqzv4kodzXvEnLwQgrIrFqVPS%2FP%2F4WPhf5r2DUfXewAZufIBdAvE2jmThQ9VIu357%2BrLHxuRVT%2FUAvVr%2FxOK6kgulOOLUA3dO3Sgaq5InUHe5JY0cQgroH27luED7yVIySdJ%2BQTRrXA1fCY4VHfp5QAesnCfQ7BMwuGK1q%2FMPkVxUMhjGkpQfRL4DNSe8WUkQjeDXL9M9IYH2eG1LV9y9p66Nofg35CJmcB%2B4Y4NqnnJ5ZUH1xlGqXg%2FQlL4JrV6m%2Bhw925WANgNbtdJmmXwyK3JnKjSnQv0U2dhexp%2FKzxgqOi8jlGdm9FgNM3sXRo5auXMWMZijXDC504nEBjqkAQR%2BncCR6Xy1EANf6Z8sH0Ik%2BOPljJiGhb%2BMFoQ%2B1usozXOtx9HWZKzscbOXLhBsiYse1%2FFpimTVnS5w724%2B7OgittNEXg2d1e0noUVnDGNhillxp09fIW%2Fk3WLOCcqc8aVemzjHhXWmc4hHAXUz6F7KVaktGwt%2FXK5qwRwaV9eMMmDN9bS8ey87KjD43%2FmRi4dHoJcClqzv%2BRxQQWmy9i2Cmioz&X-Amz-Signature=c56be35397f53953bd01171e5f969ae20ddcc231c89eff7e74d9802fc9b4be8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667562Y4ZY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC2ggDsjROpI3Ba6MJyVWJLaxCQ7YUXo0iyicPRN9uVygIhALWVqhsv1tV2JdScTuyzA7rBOnUi15rUGf%2BNlzUIIdoiKv8DCDIQABoMNjM3NDIzMTgzODA1Igx5fdcqS3YmZBSMuk8q3AM3tDrVlZlgMHwvmOM00srTrzyCFwDeKQU17q1YD%2B1TKqnlnp%2BtYtudzoRG0wr%2BdasGxpug%2F5Ktno0RvghZkVcAPB8k8oyEarQNYHbRdyMahxxgmiHngtC%2FH34qTBC6HO8DIwUKdPC6zzFXOLcw8%2B3ejdRndUFO14C4NZUQZ7z3EvdGl0Eykf74VZzZugHm7G7th%2FPcKy1RmZxRiRtX8vLJxPs05hAyOdXcGnDe8NTvv8UxWcdGQL34sVYO3FJRqDD%2F%2F%2F4tveMUOfkwlbtvh1vOsyNwW400YEaJWEZ03p5UmifcGICuqzv4kodzXvEnLwQgrIrFqVPS%2FP%2F4WPhf5r2DUfXewAZufIBdAvE2jmThQ9VIu357%2BrLHxuRVT%2FUAvVr%2FxOK6kgulOOLUA3dO3Sgaq5InUHe5JY0cQgroH27luED7yVIySdJ%2BQTRrXA1fCY4VHfp5QAesnCfQ7BMwuGK1q%2FMPkVxUMhjGkpQfRL4DNSe8WUkQjeDXL9M9IYH2eG1LV9y9p66Nofg35CJmcB%2B4Y4NqnnJ5ZUH1xlGqXg%2FQlL4JrV6m%2Bhw925WANgNbtdJmmXwyK3JnKjSnQv0U2dhexp%2FKzxgqOi8jlGdm9FgNM3sXRo5auXMWMZijXDC504nEBjqkAQR%2BncCR6Xy1EANf6Z8sH0Ik%2BOPljJiGhb%2BMFoQ%2B1usozXOtx9HWZKzscbOXLhBsiYse1%2FFpimTVnS5w724%2B7OgittNEXg2d1e0noUVnDGNhillxp09fIW%2Fk3WLOCcqc8aVemzjHhXWmc4hHAXUz6F7KVaktGwt%2FXK5qwRwaV9eMMmDN9bS8ey87KjD43%2FmRi4dHoJcClqzv%2BRxQQWmy9i2Cmioz&X-Amz-Signature=a0e4b5184c76e4f398a2547101a79711ba132fdadf8ff3ecf1d1794a84700c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667562Y4ZY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC2ggDsjROpI3Ba6MJyVWJLaxCQ7YUXo0iyicPRN9uVygIhALWVqhsv1tV2JdScTuyzA7rBOnUi15rUGf%2BNlzUIIdoiKv8DCDIQABoMNjM3NDIzMTgzODA1Igx5fdcqS3YmZBSMuk8q3AM3tDrVlZlgMHwvmOM00srTrzyCFwDeKQU17q1YD%2B1TKqnlnp%2BtYtudzoRG0wr%2BdasGxpug%2F5Ktno0RvghZkVcAPB8k8oyEarQNYHbRdyMahxxgmiHngtC%2FH34qTBC6HO8DIwUKdPC6zzFXOLcw8%2B3ejdRndUFO14C4NZUQZ7z3EvdGl0Eykf74VZzZugHm7G7th%2FPcKy1RmZxRiRtX8vLJxPs05hAyOdXcGnDe8NTvv8UxWcdGQL34sVYO3FJRqDD%2F%2F%2F4tveMUOfkwlbtvh1vOsyNwW400YEaJWEZ03p5UmifcGICuqzv4kodzXvEnLwQgrIrFqVPS%2FP%2F4WPhf5r2DUfXewAZufIBdAvE2jmThQ9VIu357%2BrLHxuRVT%2FUAvVr%2FxOK6kgulOOLUA3dO3Sgaq5InUHe5JY0cQgroH27luED7yVIySdJ%2BQTRrXA1fCY4VHfp5QAesnCfQ7BMwuGK1q%2FMPkVxUMhjGkpQfRL4DNSe8WUkQjeDXL9M9IYH2eG1LV9y9p66Nofg35CJmcB%2B4Y4NqnnJ5ZUH1xlGqXg%2FQlL4JrV6m%2Bhw925WANgNbtdJmmXwyK3JnKjSnQv0U2dhexp%2FKzxgqOi8jlGdm9FgNM3sXRo5auXMWMZijXDC504nEBjqkAQR%2BncCR6Xy1EANf6Z8sH0Ik%2BOPljJiGhb%2BMFoQ%2B1usozXOtx9HWZKzscbOXLhBsiYse1%2FFpimTVnS5w724%2B7OgittNEXg2d1e0noUVnDGNhillxp09fIW%2Fk3WLOCcqc8aVemzjHhXWmc4hHAXUz6F7KVaktGwt%2FXK5qwRwaV9eMMmDN9bS8ey87KjD43%2FmRi4dHoJcClqzv%2BRxQQWmy9i2Cmioz&X-Amz-Signature=3aba204f806f2f2ed3bd89423c8ffb7315c264ec1e8a500cde1ad1468bb5d234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`joint`**_**`_`**_**`state_publisher_gui`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667562Y4ZY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC2ggDsjROpI3Ba6MJyVWJLaxCQ7YUXo0iyicPRN9uVygIhALWVqhsv1tV2JdScTuyzA7rBOnUi15rUGf%2BNlzUIIdoiKv8DCDIQABoMNjM3NDIzMTgzODA1Igx5fdcqS3YmZBSMuk8q3AM3tDrVlZlgMHwvmOM00srTrzyCFwDeKQU17q1YD%2B1TKqnlnp%2BtYtudzoRG0wr%2BdasGxpug%2F5Ktno0RvghZkVcAPB8k8oyEarQNYHbRdyMahxxgmiHngtC%2FH34qTBC6HO8DIwUKdPC6zzFXOLcw8%2B3ejdRndUFO14C4NZUQZ7z3EvdGl0Eykf74VZzZugHm7G7th%2FPcKy1RmZxRiRtX8vLJxPs05hAyOdXcGnDe8NTvv8UxWcdGQL34sVYO3FJRqDD%2F%2F%2F4tveMUOfkwlbtvh1vOsyNwW400YEaJWEZ03p5UmifcGICuqzv4kodzXvEnLwQgrIrFqVPS%2FP%2F4WPhf5r2DUfXewAZufIBdAvE2jmThQ9VIu357%2BrLHxuRVT%2FUAvVr%2FxOK6kgulOOLUA3dO3Sgaq5InUHe5JY0cQgroH27luED7yVIySdJ%2BQTRrXA1fCY4VHfp5QAesnCfQ7BMwuGK1q%2FMPkVxUMhjGkpQfRL4DNSe8WUkQjeDXL9M9IYH2eG1LV9y9p66Nofg35CJmcB%2B4Y4NqnnJ5ZUH1xlGqXg%2FQlL4JrV6m%2Bhw925WANgNbtdJmmXwyK3JnKjSnQv0U2dhexp%2FKzxgqOi8jlGdm9FgNM3sXRo5auXMWMZijXDC504nEBjqkAQR%2BncCR6Xy1EANf6Z8sH0Ik%2BOPljJiGhb%2BMFoQ%2B1usozXOtx9HWZKzscbOXLhBsiYse1%2FFpimTVnS5w724%2B7OgittNEXg2d1e0noUVnDGNhillxp09fIW%2Fk3WLOCcqc8aVemzjHhXWmc4hHAXUz6F7KVaktGwt%2FXK5qwRwaV9eMMmDN9bS8ey87KjD43%2FmRi4dHoJcClqzv%2BRxQQWmy9i2Cmioz&X-Amz-Signature=54347c8a37de2ec26d0b624cf15bd7856b82e117d2aa9f6cb867eb377dd768e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667562Y4ZY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC2ggDsjROpI3Ba6MJyVWJLaxCQ7YUXo0iyicPRN9uVygIhALWVqhsv1tV2JdScTuyzA7rBOnUi15rUGf%2BNlzUIIdoiKv8DCDIQABoMNjM3NDIzMTgzODA1Igx5fdcqS3YmZBSMuk8q3AM3tDrVlZlgMHwvmOM00srTrzyCFwDeKQU17q1YD%2B1TKqnlnp%2BtYtudzoRG0wr%2BdasGxpug%2F5Ktno0RvghZkVcAPB8k8oyEarQNYHbRdyMahxxgmiHngtC%2FH34qTBC6HO8DIwUKdPC6zzFXOLcw8%2B3ejdRndUFO14C4NZUQZ7z3EvdGl0Eykf74VZzZugHm7G7th%2FPcKy1RmZxRiRtX8vLJxPs05hAyOdXcGnDe8NTvv8UxWcdGQL34sVYO3FJRqDD%2F%2F%2F4tveMUOfkwlbtvh1vOsyNwW400YEaJWEZ03p5UmifcGICuqzv4kodzXvEnLwQgrIrFqVPS%2FP%2F4WPhf5r2DUfXewAZufIBdAvE2jmThQ9VIu357%2BrLHxuRVT%2FUAvVr%2FxOK6kgulOOLUA3dO3Sgaq5InUHe5JY0cQgroH27luED7yVIySdJ%2BQTRrXA1fCY4VHfp5QAesnCfQ7BMwuGK1q%2FMPkVxUMhjGkpQfRL4DNSe8WUkQjeDXL9M9IYH2eG1LV9y9p66Nofg35CJmcB%2B4Y4NqnnJ5ZUH1xlGqXg%2FQlL4JrV6m%2Bhw925WANgNbtdJmmXwyK3JnKjSnQv0U2dhexp%2FKzxgqOi8jlGdm9FgNM3sXRo5auXMWMZijXDC504nEBjqkAQR%2BncCR6Xy1EANf6Z8sH0Ik%2BOPljJiGhb%2BMFoQ%2B1usozXOtx9HWZKzscbOXLhBsiYse1%2FFpimTVnS5w724%2B7OgittNEXg2d1e0noUVnDGNhillxp09fIW%2Fk3WLOCcqc8aVemzjHhXWmc4hHAXUz6F7KVaktGwt%2FXK5qwRwaV9eMMmDN9bS8ey87KjD43%2FmRi4dHoJcClqzv%2BRxQQWmy9i2Cmioz&X-Amz-Signature=c7b08c64d484e952507576acda6dddec89c03f312f08a3369bf3b2399c1c4a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667562Y4ZY%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC2ggDsjROpI3Ba6MJyVWJLaxCQ7YUXo0iyicPRN9uVygIhALWVqhsv1tV2JdScTuyzA7rBOnUi15rUGf%2BNlzUIIdoiKv8DCDIQABoMNjM3NDIzMTgzODA1Igx5fdcqS3YmZBSMuk8q3AM3tDrVlZlgMHwvmOM00srTrzyCFwDeKQU17q1YD%2B1TKqnlnp%2BtYtudzoRG0wr%2BdasGxpug%2F5Ktno0RvghZkVcAPB8k8oyEarQNYHbRdyMahxxgmiHngtC%2FH34qTBC6HO8DIwUKdPC6zzFXOLcw8%2B3ejdRndUFO14C4NZUQZ7z3EvdGl0Eykf74VZzZugHm7G7th%2FPcKy1RmZxRiRtX8vLJxPs05hAyOdXcGnDe8NTvv8UxWcdGQL34sVYO3FJRqDD%2F%2F%2F4tveMUOfkwlbtvh1vOsyNwW400YEaJWEZ03p5UmifcGICuqzv4kodzXvEnLwQgrIrFqVPS%2FP%2F4WPhf5r2DUfXewAZufIBdAvE2jmThQ9VIu357%2BrLHxuRVT%2FUAvVr%2FxOK6kgulOOLUA3dO3Sgaq5InUHe5JY0cQgroH27luED7yVIySdJ%2BQTRrXA1fCY4VHfp5QAesnCfQ7BMwuGK1q%2FMPkVxUMhjGkpQfRL4DNSe8WUkQjeDXL9M9IYH2eG1LV9y9p66Nofg35CJmcB%2B4Y4NqnnJ5ZUH1xlGqXg%2FQlL4JrV6m%2Bhw925WANgNbtdJmmXwyK3JnKjSnQv0U2dhexp%2FKzxgqOi8jlGdm9FgNM3sXRo5auXMWMZijXDC504nEBjqkAQR%2BncCR6Xy1EANf6Z8sH0Ik%2BOPljJiGhb%2BMFoQ%2B1usozXOtx9HWZKzscbOXLhBsiYse1%2FFpimTVnS5w724%2B7OgittNEXg2d1e0noUVnDGNhillxp09fIW%2Fk3WLOCcqc8aVemzjHhXWmc4hHAXUz6F7KVaktGwt%2FXK5qwRwaV9eMMmDN9bS8ey87KjD43%2FmRi4dHoJcClqzv%2BRxQQWmy9i2Cmioz&X-Amz-Signature=b07754029416629a98fb77de2f9110779448b6bf55b3701bfe12094e9be9a9af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFQD43BV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCUBqSpLqtksqzpGAhqH%2B67SZz1rFf3IO7p6J89o5Zz8gIhAMTtDXoIF8%2Fi%2B7D40t8USZ0z5yxuj4RV%2FdkEF0UAkYjRKv8DCDIQABoMNjM3NDIzMTgzODA1IgwRXUHbHKA%2ByGPn%2FAAq3ANWGca9leNk2tLJ7aUqM%2B%2FWeBhYWtNbHDQHHI2FR4QNTiXulVbBCKPcM8bgqGh%2FMAz%2B%2ByDFoNBUa4ZFwkEeHFmHrz0cnECbFrt2Hw2wiggTYx9Xh1c9MCI9nL9sjODnawMBefoiqzRDkzEjEd732%2F6sVLMDVfSPDp4uQD87AXtc0K%2FwZ7rbIx%2Ba%2F08w62vgMrttaDoLji0N8XXOJRxhI7Qg%2FgwUvG%2FCHhIDoDfsWjAXrqD42RhUOZ%2Fd04SH3c3Z49OS6U3eFyhbfl%2FMmGlpfcIUfEJIJW%2FOL2L6H5nYUtH%2F5R68iB%2BPxNqZEYE7eiStUOQufRtRKJ64P89tYruiznsaKRbwy85XwzQbokoZmN%2Bg4ZDj79s7j2CJ2roe%2BuzcF0ImxfiKavpjZ%2FFBRly9hSZzYUF%2FKP33bwzqG5E56MGlFygTY6AuQ0jVuJAsLY537rcNarQyu%2FiiF2Ruvw0HCiDLDDE1A0slUaQ1c0%2Fej%2Fut2XkIlhV3mgJJUmz9IRnzIh4mEDy0QBtmLkxNCVaxrc8Xz%2BHmZ9jUCXnHHtVIgqV6X8xbe1KjuT6HnTQSskpxiHfo1yVo%2B8RUzfJBL7l7LkZcfKsNkyodRFXWoal%2Bv6X8g1v7SBqkp8kXZpUVkzCQ1InEBjqkASzw6D%2B0Emfp6KBK9TQNeNSVkHQuZOCqWg8Pk8d%2FOFRFT05yq4bAYM3UYN6zVknKUKr4DcV2S6vp4WFRtiAPn4%2FHex9%2FFhqLG%2F9AfvcmrFsse6iqske%2F62IsfEitW81DFxZN7CRDsqRJ7PWzRslUcHgpf8wBKArpUGBoql%2B47GDTlaEqso0H5KrOCE7Wz6aW0xt1O6w4IfpkTETn9u9lan5%2FmgWu&X-Amz-Signature=07e0f57711266a4ddf38c532f798d4e38678d9a33cdef3c7835d342138530c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFQD43BV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCUBqSpLqtksqzpGAhqH%2B67SZz1rFf3IO7p6J89o5Zz8gIhAMTtDXoIF8%2Fi%2B7D40t8USZ0z5yxuj4RV%2FdkEF0UAkYjRKv8DCDIQABoMNjM3NDIzMTgzODA1IgwRXUHbHKA%2ByGPn%2FAAq3ANWGca9leNk2tLJ7aUqM%2B%2FWeBhYWtNbHDQHHI2FR4QNTiXulVbBCKPcM8bgqGh%2FMAz%2B%2ByDFoNBUa4ZFwkEeHFmHrz0cnECbFrt2Hw2wiggTYx9Xh1c9MCI9nL9sjODnawMBefoiqzRDkzEjEd732%2F6sVLMDVfSPDp4uQD87AXtc0K%2FwZ7rbIx%2Ba%2F08w62vgMrttaDoLji0N8XXOJRxhI7Qg%2FgwUvG%2FCHhIDoDfsWjAXrqD42RhUOZ%2Fd04SH3c3Z49OS6U3eFyhbfl%2FMmGlpfcIUfEJIJW%2FOL2L6H5nYUtH%2F5R68iB%2BPxNqZEYE7eiStUOQufRtRKJ64P89tYruiznsaKRbwy85XwzQbokoZmN%2Bg4ZDj79s7j2CJ2roe%2BuzcF0ImxfiKavpjZ%2FFBRly9hSZzYUF%2FKP33bwzqG5E56MGlFygTY6AuQ0jVuJAsLY537rcNarQyu%2FiiF2Ruvw0HCiDLDDE1A0slUaQ1c0%2Fej%2Fut2XkIlhV3mgJJUmz9IRnzIh4mEDy0QBtmLkxNCVaxrc8Xz%2BHmZ9jUCXnHHtVIgqV6X8xbe1KjuT6HnTQSskpxiHfo1yVo%2B8RUzfJBL7l7LkZcfKsNkyodRFXWoal%2Bv6X8g1v7SBqkp8kXZpUVkzCQ1InEBjqkASzw6D%2B0Emfp6KBK9TQNeNSVkHQuZOCqWg8Pk8d%2FOFRFT05yq4bAYM3UYN6zVknKUKr4DcV2S6vp4WFRtiAPn4%2FHex9%2FFhqLG%2F9AfvcmrFsse6iqske%2F62IsfEitW81DFxZN7CRDsqRJ7PWzRslUcHgpf8wBKArpUGBoql%2B47GDTlaEqso0H5KrOCE7Wz6aW0xt1O6w4IfpkTETn9u9lan5%2FmgWu&X-Amz-Signature=056f3554eb97e23cc69bb4e28bb8b228cdab58ce007d2df6bef56d357635c1d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## launch file

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

## add new files to `setup.py` 

if we add new files types to the package we need to update the `setup.py` and rebuild

```python

from setuptools import find_packages, setup
import os
from glob import glob

files = []
for full_filepath in glob('**/*.*', recursive=True):
    filepath = os.path.split(full_filepath)
    if filepath[0] != '':
        result = (os.path.join('share', package_name, filepath[0]), [full_filepath])
        files.append(result)

package_name = 'mbot_pkg'

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

**run:**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFQD43BV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCUBqSpLqtksqzpGAhqH%2B67SZz1rFf3IO7p6J89o5Zz8gIhAMTtDXoIF8%2Fi%2B7D40t8USZ0z5yxuj4RV%2FdkEF0UAkYjRKv8DCDIQABoMNjM3NDIzMTgzODA1IgwRXUHbHKA%2ByGPn%2FAAq3ANWGca9leNk2tLJ7aUqM%2B%2FWeBhYWtNbHDQHHI2FR4QNTiXulVbBCKPcM8bgqGh%2FMAz%2B%2ByDFoNBUa4ZFwkEeHFmHrz0cnECbFrt2Hw2wiggTYx9Xh1c9MCI9nL9sjODnawMBefoiqzRDkzEjEd732%2F6sVLMDVfSPDp4uQD87AXtc0K%2FwZ7rbIx%2Ba%2F08w62vgMrttaDoLji0N8XXOJRxhI7Qg%2FgwUvG%2FCHhIDoDfsWjAXrqD42RhUOZ%2Fd04SH3c3Z49OS6U3eFyhbfl%2FMmGlpfcIUfEJIJW%2FOL2L6H5nYUtH%2F5R68iB%2BPxNqZEYE7eiStUOQufRtRKJ64P89tYruiznsaKRbwy85XwzQbokoZmN%2Bg4ZDj79s7j2CJ2roe%2BuzcF0ImxfiKavpjZ%2FFBRly9hSZzYUF%2FKP33bwzqG5E56MGlFygTY6AuQ0jVuJAsLY537rcNarQyu%2FiiF2Ruvw0HCiDLDDE1A0slUaQ1c0%2Fej%2Fut2XkIlhV3mgJJUmz9IRnzIh4mEDy0QBtmLkxNCVaxrc8Xz%2BHmZ9jUCXnHHtVIgqV6X8xbe1KjuT6HnTQSskpxiHfo1yVo%2B8RUzfJBL7l7LkZcfKsNkyodRFXWoal%2Bv6X8g1v7SBqkp8kXZpUVkzCQ1InEBjqkASzw6D%2B0Emfp6KBK9TQNeNSVkHQuZOCqWg8Pk8d%2FOFRFT05yq4bAYM3UYN6zVknKUKr4DcV2S6vp4WFRtiAPn4%2FHex9%2FFhqLG%2F9AfvcmrFsse6iqske%2F62IsfEitW81DFxZN7CRDsqRJ7PWzRslUcHgpf8wBKArpUGBoql%2B47GDTlaEqso0H5KrOCE7Wz6aW0xt1O6w4IfpkTETn9u9lan5%2FmgWu&X-Amz-Signature=7bc0341e85818599369b160acd8cfaa0460cbab2019df418b3a903fb5826a58b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running

In a new terminal tab while `rviz` is still open run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFQD43BV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCUBqSpLqtksqzpGAhqH%2B67SZz1rFf3IO7p6J89o5Zz8gIhAMTtDXoIF8%2Fi%2B7D40t8USZ0z5yxuj4RV%2FdkEF0UAkYjRKv8DCDIQABoMNjM3NDIzMTgzODA1IgwRXUHbHKA%2ByGPn%2FAAq3ANWGca9leNk2tLJ7aUqM%2B%2FWeBhYWtNbHDQHHI2FR4QNTiXulVbBCKPcM8bgqGh%2FMAz%2B%2ByDFoNBUa4ZFwkEeHFmHrz0cnECbFrt2Hw2wiggTYx9Xh1c9MCI9nL9sjODnawMBefoiqzRDkzEjEd732%2F6sVLMDVfSPDp4uQD87AXtc0K%2FwZ7rbIx%2Ba%2F08w62vgMrttaDoLji0N8XXOJRxhI7Qg%2FgwUvG%2FCHhIDoDfsWjAXrqD42RhUOZ%2Fd04SH3c3Z49OS6U3eFyhbfl%2FMmGlpfcIUfEJIJW%2FOL2L6H5nYUtH%2F5R68iB%2BPxNqZEYE7eiStUOQufRtRKJ64P89tYruiznsaKRbwy85XwzQbokoZmN%2Bg4ZDj79s7j2CJ2roe%2BuzcF0ImxfiKavpjZ%2FFBRly9hSZzYUF%2FKP33bwzqG5E56MGlFygTY6AuQ0jVuJAsLY537rcNarQyu%2FiiF2Ruvw0HCiDLDDE1A0slUaQ1c0%2Fej%2Fut2XkIlhV3mgJJUmz9IRnzIh4mEDy0QBtmLkxNCVaxrc8Xz%2BHmZ9jUCXnHHtVIgqV6X8xbe1KjuT6HnTQSskpxiHfo1yVo%2B8RUzfJBL7l7LkZcfKsNkyodRFXWoal%2Bv6X8g1v7SBqkp8kXZpUVkzCQ1InEBjqkASzw6D%2B0Emfp6KBK9TQNeNSVkHQuZOCqWg8Pk8d%2FOFRFT05yq4bAYM3UYN6zVknKUKr4DcV2S6vp4WFRtiAPn4%2FHex9%2FFhqLG%2F9AfvcmrFsse6iqske%2F62IsfEitW81DFxZN7CRDsqRJ7PWzRslUcHgpf8wBKArpUGBoql%2B47GDTlaEqso0H5KrOCE7Wz6aW0xt1O6w4IfpkTETn9u9lan5%2FmgWu&X-Amz-Signature=ca0d40e272eaab68b29dc859191502d83c7c3b9de35af5b977de2365729b8fb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFQD43BV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCUBqSpLqtksqzpGAhqH%2B67SZz1rFf3IO7p6J89o5Zz8gIhAMTtDXoIF8%2Fi%2B7D40t8USZ0z5yxuj4RV%2FdkEF0UAkYjRKv8DCDIQABoMNjM3NDIzMTgzODA1IgwRXUHbHKA%2ByGPn%2FAAq3ANWGca9leNk2tLJ7aUqM%2B%2FWeBhYWtNbHDQHHI2FR4QNTiXulVbBCKPcM8bgqGh%2FMAz%2B%2ByDFoNBUa4ZFwkEeHFmHrz0cnECbFrt2Hw2wiggTYx9Xh1c9MCI9nL9sjODnawMBefoiqzRDkzEjEd732%2F6sVLMDVfSPDp4uQD87AXtc0K%2FwZ7rbIx%2Ba%2F08w62vgMrttaDoLji0N8XXOJRxhI7Qg%2FgwUvG%2FCHhIDoDfsWjAXrqD42RhUOZ%2Fd04SH3c3Z49OS6U3eFyhbfl%2FMmGlpfcIUfEJIJW%2FOL2L6H5nYUtH%2F5R68iB%2BPxNqZEYE7eiStUOQufRtRKJ64P89tYruiznsaKRbwy85XwzQbokoZmN%2Bg4ZDj79s7j2CJ2roe%2BuzcF0ImxfiKavpjZ%2FFBRly9hSZzYUF%2FKP33bwzqG5E56MGlFygTY6AuQ0jVuJAsLY537rcNarQyu%2FiiF2Ruvw0HCiDLDDE1A0slUaQ1c0%2Fej%2Fut2XkIlhV3mgJJUmz9IRnzIh4mEDy0QBtmLkxNCVaxrc8Xz%2BHmZ9jUCXnHHtVIgqV6X8xbe1KjuT6HnTQSskpxiHfo1yVo%2B8RUzfJBL7l7LkZcfKsNkyodRFXWoal%2Bv6X8g1v7SBqkp8kXZpUVkzCQ1InEBjqkASzw6D%2B0Emfp6KBK9TQNeNSVkHQuZOCqWg8Pk8d%2FOFRFT05yq4bAYM3UYN6zVknKUKr4DcV2S6vp4WFRtiAPn4%2FHex9%2FFhqLG%2F9AfvcmrFsse6iqske%2F62IsfEitW81DFxZN7CRDsqRJ7PWzRslUcHgpf8wBKArpUGBoql%2B47GDTlaEqso0H5KrOCE7Wz6aW0xt1O6w4IfpkTETn9u9lan5%2FmgWu&X-Amz-Signature=9e4745e54d5f359182ecd34a3edbd7fb801cd46c7d9c08abe4da835ee1e00183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFQD43BV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCUBqSpLqtksqzpGAhqH%2B67SZz1rFf3IO7p6J89o5Zz8gIhAMTtDXoIF8%2Fi%2B7D40t8USZ0z5yxuj4RV%2FdkEF0UAkYjRKv8DCDIQABoMNjM3NDIzMTgzODA1IgwRXUHbHKA%2ByGPn%2FAAq3ANWGca9leNk2tLJ7aUqM%2B%2FWeBhYWtNbHDQHHI2FR4QNTiXulVbBCKPcM8bgqGh%2FMAz%2B%2ByDFoNBUa4ZFwkEeHFmHrz0cnECbFrt2Hw2wiggTYx9Xh1c9MCI9nL9sjODnawMBefoiqzRDkzEjEd732%2F6sVLMDVfSPDp4uQD87AXtc0K%2FwZ7rbIx%2Ba%2F08w62vgMrttaDoLji0N8XXOJRxhI7Qg%2FgwUvG%2FCHhIDoDfsWjAXrqD42RhUOZ%2Fd04SH3c3Z49OS6U3eFyhbfl%2FMmGlpfcIUfEJIJW%2FOL2L6H5nYUtH%2F5R68iB%2BPxNqZEYE7eiStUOQufRtRKJ64P89tYruiznsaKRbwy85XwzQbokoZmN%2Bg4ZDj79s7j2CJ2roe%2BuzcF0ImxfiKavpjZ%2FFBRly9hSZzYUF%2FKP33bwzqG5E56MGlFygTY6AuQ0jVuJAsLY537rcNarQyu%2FiiF2Ruvw0HCiDLDDE1A0slUaQ1c0%2Fej%2Fut2XkIlhV3mgJJUmz9IRnzIh4mEDy0QBtmLkxNCVaxrc8Xz%2BHmZ9jUCXnHHtVIgqV6X8xbe1KjuT6HnTQSskpxiHfo1yVo%2B8RUzfJBL7l7LkZcfKsNkyodRFXWoal%2Bv6X8g1v7SBqkp8kXZpUVkzCQ1InEBjqkASzw6D%2B0Emfp6KBK9TQNeNSVkHQuZOCqWg8Pk8d%2FOFRFT05yq4bAYM3UYN6zVknKUKr4DcV2S6vp4WFRtiAPn4%2FHex9%2FFhqLG%2F9AfvcmrFsse6iqske%2F62IsfEitW81DFxZN7CRDsqRJ7PWzRslUcHgpf8wBKArpUGBoql%2B47GDTlaEqso0H5KrOCE7Wz6aW0xt1O6w4IfpkTETn9u9lan5%2FmgWu&X-Amz-Signature=c525ecf0eabc3cf570f17ef626f6f7f8534120d4f1864469fa463b50aac6d1cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
