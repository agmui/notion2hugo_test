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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFHD7UO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaYofSUR%2FEkyteD5w5dAb%2FZAdp9AhE2auObipTdhVUKQIhAKRtTLoVb1dZxXw4Za9qx89zRIhcsqMTZPGrL1ZlD85KKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrhgjuJuxwZVnmHXwq3AMIT28Dmy9IAKhiufutNGAWSr%2FdXGvZNwCIEakGKdggYO2j%2BSVcUOwYQiiXhWOciw0xAfOndcEZgmtnxQLc7j8cdaEmzjRq%2BG2T2iX36fUfYpFyAiHRD8pTZVVNhnCvKJPxOdCVG4G2cBCMy6tIx8Yy1uWqU5NvJU2ggBrAD2rKSW%2BBAat7kuoyN06M5s41BaS7848fVigNTptsXHnLBaNFtnfu%2FV7bkGG4pcvmU8RLEnE5t8kAwIS1TUfHrjOoPBfNnR9ycigVQMbfWmtuqm%2Baw1BKIMW4Y2t6ShvfYP866ocL%2FWKAa7NO0w2MBajAQNLXM7kOVl5nx6hD1MQRD5%2FnaSN0b6yK90uQRB%2BF1zfZPMTxE2hIESp9laQ%2FbfpOcS45%2FN5aT4hV1KItxFcKQvYeZJ%2FSV9m3TLniWEJmzCIyXCo3N3vpEtL7F8Cjsa5QrwFzfPoOUN1Vmhy0QoCw39vVPCKwiWsx1ykEC%2BO506KkE14xgr8Fn9VJalxz%2B72wUaPzK95WvmzW565q%2BA0C1Hv4i4GCVQb%2BZgs3FWFuXu80a4xLhdIp9TBJM0MK8Hq5GfPRWe9nW4BWqWRkAyG6o6wRD7q%2BJ9MCYearpJ70oKoh2g2%2BbT3DUYYOPUVWZDCot9fEBjqkAVBQaENO66GP3Ocmq5oPkYN2mlkI8wmsvgsqTXJ0vA6AhLiUHLY2tXj80BRwFYG46e%2B0zYntYAJ2N9OYZmPwY%2BKmahnSTlE%2FXqEZVR22yS8M4aIkjpGWIbrKvVKfhopQ6P%2FW0sloAIdIqYzgrT3Na6sQFWUzb21Byw1lW8LYtd3by5c%2FbkOpjMhiKyfNMPatSpDHYhafUWEiNKpXHPdEz1kETmMG&X-Amz-Signature=2dfb375707f2dfdf541244dbec6f0a9db6655ecdc1957efd61487868dbb67e89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFHD7UO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaYofSUR%2FEkyteD5w5dAb%2FZAdp9AhE2auObipTdhVUKQIhAKRtTLoVb1dZxXw4Za9qx89zRIhcsqMTZPGrL1ZlD85KKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrhgjuJuxwZVnmHXwq3AMIT28Dmy9IAKhiufutNGAWSr%2FdXGvZNwCIEakGKdggYO2j%2BSVcUOwYQiiXhWOciw0xAfOndcEZgmtnxQLc7j8cdaEmzjRq%2BG2T2iX36fUfYpFyAiHRD8pTZVVNhnCvKJPxOdCVG4G2cBCMy6tIx8Yy1uWqU5NvJU2ggBrAD2rKSW%2BBAat7kuoyN06M5s41BaS7848fVigNTptsXHnLBaNFtnfu%2FV7bkGG4pcvmU8RLEnE5t8kAwIS1TUfHrjOoPBfNnR9ycigVQMbfWmtuqm%2Baw1BKIMW4Y2t6ShvfYP866ocL%2FWKAa7NO0w2MBajAQNLXM7kOVl5nx6hD1MQRD5%2FnaSN0b6yK90uQRB%2BF1zfZPMTxE2hIESp9laQ%2FbfpOcS45%2FN5aT4hV1KItxFcKQvYeZJ%2FSV9m3TLniWEJmzCIyXCo3N3vpEtL7F8Cjsa5QrwFzfPoOUN1Vmhy0QoCw39vVPCKwiWsx1ykEC%2BO506KkE14xgr8Fn9VJalxz%2B72wUaPzK95WvmzW565q%2BA0C1Hv4i4GCVQb%2BZgs3FWFuXu80a4xLhdIp9TBJM0MK8Hq5GfPRWe9nW4BWqWRkAyG6o6wRD7q%2BJ9MCYearpJ70oKoh2g2%2BbT3DUYYOPUVWZDCot9fEBjqkAVBQaENO66GP3Ocmq5oPkYN2mlkI8wmsvgsqTXJ0vA6AhLiUHLY2tXj80BRwFYG46e%2B0zYntYAJ2N9OYZmPwY%2BKmahnSTlE%2FXqEZVR22yS8M4aIkjpGWIbrKvVKfhopQ6P%2FW0sloAIdIqYzgrT3Na6sQFWUzb21Byw1lW8LYtd3by5c%2FbkOpjMhiKyfNMPatSpDHYhafUWEiNKpXHPdEz1kETmMG&X-Amz-Signature=f2c82dc141c2c94f2d489d4e53441c48b43133845de05ed85f53dcb83b87be50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFHD7UO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaYofSUR%2FEkyteD5w5dAb%2FZAdp9AhE2auObipTdhVUKQIhAKRtTLoVb1dZxXw4Za9qx89zRIhcsqMTZPGrL1ZlD85KKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrhgjuJuxwZVnmHXwq3AMIT28Dmy9IAKhiufutNGAWSr%2FdXGvZNwCIEakGKdggYO2j%2BSVcUOwYQiiXhWOciw0xAfOndcEZgmtnxQLc7j8cdaEmzjRq%2BG2T2iX36fUfYpFyAiHRD8pTZVVNhnCvKJPxOdCVG4G2cBCMy6tIx8Yy1uWqU5NvJU2ggBrAD2rKSW%2BBAat7kuoyN06M5s41BaS7848fVigNTptsXHnLBaNFtnfu%2FV7bkGG4pcvmU8RLEnE5t8kAwIS1TUfHrjOoPBfNnR9ycigVQMbfWmtuqm%2Baw1BKIMW4Y2t6ShvfYP866ocL%2FWKAa7NO0w2MBajAQNLXM7kOVl5nx6hD1MQRD5%2FnaSN0b6yK90uQRB%2BF1zfZPMTxE2hIESp9laQ%2FbfpOcS45%2FN5aT4hV1KItxFcKQvYeZJ%2FSV9m3TLniWEJmzCIyXCo3N3vpEtL7F8Cjsa5QrwFzfPoOUN1Vmhy0QoCw39vVPCKwiWsx1ykEC%2BO506KkE14xgr8Fn9VJalxz%2B72wUaPzK95WvmzW565q%2BA0C1Hv4i4GCVQb%2BZgs3FWFuXu80a4xLhdIp9TBJM0MK8Hq5GfPRWe9nW4BWqWRkAyG6o6wRD7q%2BJ9MCYearpJ70oKoh2g2%2BbT3DUYYOPUVWZDCot9fEBjqkAVBQaENO66GP3Ocmq5oPkYN2mlkI8wmsvgsqTXJ0vA6AhLiUHLY2tXj80BRwFYG46e%2B0zYntYAJ2N9OYZmPwY%2BKmahnSTlE%2FXqEZVR22yS8M4aIkjpGWIbrKvVKfhopQ6P%2FW0sloAIdIqYzgrT3Na6sQFWUzb21Byw1lW8LYtd3by5c%2FbkOpjMhiKyfNMPatSpDHYhafUWEiNKpXHPdEz1kETmMG&X-Amz-Signature=3c6b0e048d791fead9d698c3d678e9a43644ea50c36ddc66318ac37e297161cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFHD7UO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaYofSUR%2FEkyteD5w5dAb%2FZAdp9AhE2auObipTdhVUKQIhAKRtTLoVb1dZxXw4Za9qx89zRIhcsqMTZPGrL1ZlD85KKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrhgjuJuxwZVnmHXwq3AMIT28Dmy9IAKhiufutNGAWSr%2FdXGvZNwCIEakGKdggYO2j%2BSVcUOwYQiiXhWOciw0xAfOndcEZgmtnxQLc7j8cdaEmzjRq%2BG2T2iX36fUfYpFyAiHRD8pTZVVNhnCvKJPxOdCVG4G2cBCMy6tIx8Yy1uWqU5NvJU2ggBrAD2rKSW%2BBAat7kuoyN06M5s41BaS7848fVigNTptsXHnLBaNFtnfu%2FV7bkGG4pcvmU8RLEnE5t8kAwIS1TUfHrjOoPBfNnR9ycigVQMbfWmtuqm%2Baw1BKIMW4Y2t6ShvfYP866ocL%2FWKAa7NO0w2MBajAQNLXM7kOVl5nx6hD1MQRD5%2FnaSN0b6yK90uQRB%2BF1zfZPMTxE2hIESp9laQ%2FbfpOcS45%2FN5aT4hV1KItxFcKQvYeZJ%2FSV9m3TLniWEJmzCIyXCo3N3vpEtL7F8Cjsa5QrwFzfPoOUN1Vmhy0QoCw39vVPCKwiWsx1ykEC%2BO506KkE14xgr8Fn9VJalxz%2B72wUaPzK95WvmzW565q%2BA0C1Hv4i4GCVQb%2BZgs3FWFuXu80a4xLhdIp9TBJM0MK8Hq5GfPRWe9nW4BWqWRkAyG6o6wRD7q%2BJ9MCYearpJ70oKoh2g2%2BbT3DUYYOPUVWZDCot9fEBjqkAVBQaENO66GP3Ocmq5oPkYN2mlkI8wmsvgsqTXJ0vA6AhLiUHLY2tXj80BRwFYG46e%2B0zYntYAJ2N9OYZmPwY%2BKmahnSTlE%2FXqEZVR22yS8M4aIkjpGWIbrKvVKfhopQ6P%2FW0sloAIdIqYzgrT3Na6sQFWUzb21Byw1lW8LYtd3by5c%2FbkOpjMhiKyfNMPatSpDHYhafUWEiNKpXHPdEz1kETmMG&X-Amz-Signature=aa8e4261df46a9397db6857f8aabb277a7c7b7e7c692eb7cab70745980a0505c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFHD7UO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaYofSUR%2FEkyteD5w5dAb%2FZAdp9AhE2auObipTdhVUKQIhAKRtTLoVb1dZxXw4Za9qx89zRIhcsqMTZPGrL1ZlD85KKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrhgjuJuxwZVnmHXwq3AMIT28Dmy9IAKhiufutNGAWSr%2FdXGvZNwCIEakGKdggYO2j%2BSVcUOwYQiiXhWOciw0xAfOndcEZgmtnxQLc7j8cdaEmzjRq%2BG2T2iX36fUfYpFyAiHRD8pTZVVNhnCvKJPxOdCVG4G2cBCMy6tIx8Yy1uWqU5NvJU2ggBrAD2rKSW%2BBAat7kuoyN06M5s41BaS7848fVigNTptsXHnLBaNFtnfu%2FV7bkGG4pcvmU8RLEnE5t8kAwIS1TUfHrjOoPBfNnR9ycigVQMbfWmtuqm%2Baw1BKIMW4Y2t6ShvfYP866ocL%2FWKAa7NO0w2MBajAQNLXM7kOVl5nx6hD1MQRD5%2FnaSN0b6yK90uQRB%2BF1zfZPMTxE2hIESp9laQ%2FbfpOcS45%2FN5aT4hV1KItxFcKQvYeZJ%2FSV9m3TLniWEJmzCIyXCo3N3vpEtL7F8Cjsa5QrwFzfPoOUN1Vmhy0QoCw39vVPCKwiWsx1ykEC%2BO506KkE14xgr8Fn9VJalxz%2B72wUaPzK95WvmzW565q%2BA0C1Hv4i4GCVQb%2BZgs3FWFuXu80a4xLhdIp9TBJM0MK8Hq5GfPRWe9nW4BWqWRkAyG6o6wRD7q%2BJ9MCYearpJ70oKoh2g2%2BbT3DUYYOPUVWZDCot9fEBjqkAVBQaENO66GP3Ocmq5oPkYN2mlkI8wmsvgsqTXJ0vA6AhLiUHLY2tXj80BRwFYG46e%2B0zYntYAJ2N9OYZmPwY%2BKmahnSTlE%2FXqEZVR22yS8M4aIkjpGWIbrKvVKfhopQ6P%2FW0sloAIdIqYzgrT3Na6sQFWUzb21Byw1lW8LYtd3by5c%2FbkOpjMhiKyfNMPatSpDHYhafUWEiNKpXHPdEz1kETmMG&X-Amz-Signature=13995929654f593d7301d34b97da050dbf7b1f6ed288317bf80cf21fabb45f0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFHD7UO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaYofSUR%2FEkyteD5w5dAb%2FZAdp9AhE2auObipTdhVUKQIhAKRtTLoVb1dZxXw4Za9qx89zRIhcsqMTZPGrL1ZlD85KKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrhgjuJuxwZVnmHXwq3AMIT28Dmy9IAKhiufutNGAWSr%2FdXGvZNwCIEakGKdggYO2j%2BSVcUOwYQiiXhWOciw0xAfOndcEZgmtnxQLc7j8cdaEmzjRq%2BG2T2iX36fUfYpFyAiHRD8pTZVVNhnCvKJPxOdCVG4G2cBCMy6tIx8Yy1uWqU5NvJU2ggBrAD2rKSW%2BBAat7kuoyN06M5s41BaS7848fVigNTptsXHnLBaNFtnfu%2FV7bkGG4pcvmU8RLEnE5t8kAwIS1TUfHrjOoPBfNnR9ycigVQMbfWmtuqm%2Baw1BKIMW4Y2t6ShvfYP866ocL%2FWKAa7NO0w2MBajAQNLXM7kOVl5nx6hD1MQRD5%2FnaSN0b6yK90uQRB%2BF1zfZPMTxE2hIESp9laQ%2FbfpOcS45%2FN5aT4hV1KItxFcKQvYeZJ%2FSV9m3TLniWEJmzCIyXCo3N3vpEtL7F8Cjsa5QrwFzfPoOUN1Vmhy0QoCw39vVPCKwiWsx1ykEC%2BO506KkE14xgr8Fn9VJalxz%2B72wUaPzK95WvmzW565q%2BA0C1Hv4i4GCVQb%2BZgs3FWFuXu80a4xLhdIp9TBJM0MK8Hq5GfPRWe9nW4BWqWRkAyG6o6wRD7q%2BJ9MCYearpJ70oKoh2g2%2BbT3DUYYOPUVWZDCot9fEBjqkAVBQaENO66GP3Ocmq5oPkYN2mlkI8wmsvgsqTXJ0vA6AhLiUHLY2tXj80BRwFYG46e%2B0zYntYAJ2N9OYZmPwY%2BKmahnSTlE%2FXqEZVR22yS8M4aIkjpGWIbrKvVKfhopQ6P%2FW0sloAIdIqYzgrT3Na6sQFWUzb21Byw1lW8LYtd3by5c%2FbkOpjMhiKyfNMPatSpDHYhafUWEiNKpXHPdEz1kETmMG&X-Amz-Signature=cedfe68c95d38ebbb9997fd7a8af3186a178c83f6aebe10456cc50c3c0f96ffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFHD7UO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaYofSUR%2FEkyteD5w5dAb%2FZAdp9AhE2auObipTdhVUKQIhAKRtTLoVb1dZxXw4Za9qx89zRIhcsqMTZPGrL1ZlD85KKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrhgjuJuxwZVnmHXwq3AMIT28Dmy9IAKhiufutNGAWSr%2FdXGvZNwCIEakGKdggYO2j%2BSVcUOwYQiiXhWOciw0xAfOndcEZgmtnxQLc7j8cdaEmzjRq%2BG2T2iX36fUfYpFyAiHRD8pTZVVNhnCvKJPxOdCVG4G2cBCMy6tIx8Yy1uWqU5NvJU2ggBrAD2rKSW%2BBAat7kuoyN06M5s41BaS7848fVigNTptsXHnLBaNFtnfu%2FV7bkGG4pcvmU8RLEnE5t8kAwIS1TUfHrjOoPBfNnR9ycigVQMbfWmtuqm%2Baw1BKIMW4Y2t6ShvfYP866ocL%2FWKAa7NO0w2MBajAQNLXM7kOVl5nx6hD1MQRD5%2FnaSN0b6yK90uQRB%2BF1zfZPMTxE2hIESp9laQ%2FbfpOcS45%2FN5aT4hV1KItxFcKQvYeZJ%2FSV9m3TLniWEJmzCIyXCo3N3vpEtL7F8Cjsa5QrwFzfPoOUN1Vmhy0QoCw39vVPCKwiWsx1ykEC%2BO506KkE14xgr8Fn9VJalxz%2B72wUaPzK95WvmzW565q%2BA0C1Hv4i4GCVQb%2BZgs3FWFuXu80a4xLhdIp9TBJM0MK8Hq5GfPRWe9nW4BWqWRkAyG6o6wRD7q%2BJ9MCYearpJ70oKoh2g2%2BbT3DUYYOPUVWZDCot9fEBjqkAVBQaENO66GP3Ocmq5oPkYN2mlkI8wmsvgsqTXJ0vA6AhLiUHLY2tXj80BRwFYG46e%2B0zYntYAJ2N9OYZmPwY%2BKmahnSTlE%2FXqEZVR22yS8M4aIkjpGWIbrKvVKfhopQ6P%2FW0sloAIdIqYzgrT3Na6sQFWUzb21Byw1lW8LYtd3by5c%2FbkOpjMhiKyfNMPatSpDHYhafUWEiNKpXHPdEz1kETmMG&X-Amz-Signature=cedf32d7358f01714a8270bbe1664f06bb9708844c3d53dd6ac9496e59ba9bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFHD7UO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaYofSUR%2FEkyteD5w5dAb%2FZAdp9AhE2auObipTdhVUKQIhAKRtTLoVb1dZxXw4Za9qx89zRIhcsqMTZPGrL1ZlD85KKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrhgjuJuxwZVnmHXwq3AMIT28Dmy9IAKhiufutNGAWSr%2FdXGvZNwCIEakGKdggYO2j%2BSVcUOwYQiiXhWOciw0xAfOndcEZgmtnxQLc7j8cdaEmzjRq%2BG2T2iX36fUfYpFyAiHRD8pTZVVNhnCvKJPxOdCVG4G2cBCMy6tIx8Yy1uWqU5NvJU2ggBrAD2rKSW%2BBAat7kuoyN06M5s41BaS7848fVigNTptsXHnLBaNFtnfu%2FV7bkGG4pcvmU8RLEnE5t8kAwIS1TUfHrjOoPBfNnR9ycigVQMbfWmtuqm%2Baw1BKIMW4Y2t6ShvfYP866ocL%2FWKAa7NO0w2MBajAQNLXM7kOVl5nx6hD1MQRD5%2FnaSN0b6yK90uQRB%2BF1zfZPMTxE2hIESp9laQ%2FbfpOcS45%2FN5aT4hV1KItxFcKQvYeZJ%2FSV9m3TLniWEJmzCIyXCo3N3vpEtL7F8Cjsa5QrwFzfPoOUN1Vmhy0QoCw39vVPCKwiWsx1ykEC%2BO506KkE14xgr8Fn9VJalxz%2B72wUaPzK95WvmzW565q%2BA0C1Hv4i4GCVQb%2BZgs3FWFuXu80a4xLhdIp9TBJM0MK8Hq5GfPRWe9nW4BWqWRkAyG6o6wRD7q%2BJ9MCYearpJ70oKoh2g2%2BbT3DUYYOPUVWZDCot9fEBjqkAVBQaENO66GP3Ocmq5oPkYN2mlkI8wmsvgsqTXJ0vA6AhLiUHLY2tXj80BRwFYG46e%2B0zYntYAJ2N9OYZmPwY%2BKmahnSTlE%2FXqEZVR22yS8M4aIkjpGWIbrKvVKfhopQ6P%2FW0sloAIdIqYzgrT3Na6sQFWUzb21Byw1lW8LYtd3by5c%2FbkOpjMhiKyfNMPatSpDHYhafUWEiNKpXHPdEz1kETmMG&X-Amz-Signature=7d8d64cbe45682193f4cb6f4153c3fb7bd46c5a21dacd486b3235010b04e6a6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFHD7UO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaYofSUR%2FEkyteD5w5dAb%2FZAdp9AhE2auObipTdhVUKQIhAKRtTLoVb1dZxXw4Za9qx89zRIhcsqMTZPGrL1ZlD85KKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrhgjuJuxwZVnmHXwq3AMIT28Dmy9IAKhiufutNGAWSr%2FdXGvZNwCIEakGKdggYO2j%2BSVcUOwYQiiXhWOciw0xAfOndcEZgmtnxQLc7j8cdaEmzjRq%2BG2T2iX36fUfYpFyAiHRD8pTZVVNhnCvKJPxOdCVG4G2cBCMy6tIx8Yy1uWqU5NvJU2ggBrAD2rKSW%2BBAat7kuoyN06M5s41BaS7848fVigNTptsXHnLBaNFtnfu%2FV7bkGG4pcvmU8RLEnE5t8kAwIS1TUfHrjOoPBfNnR9ycigVQMbfWmtuqm%2Baw1BKIMW4Y2t6ShvfYP866ocL%2FWKAa7NO0w2MBajAQNLXM7kOVl5nx6hD1MQRD5%2FnaSN0b6yK90uQRB%2BF1zfZPMTxE2hIESp9laQ%2FbfpOcS45%2FN5aT4hV1KItxFcKQvYeZJ%2FSV9m3TLniWEJmzCIyXCo3N3vpEtL7F8Cjsa5QrwFzfPoOUN1Vmhy0QoCw39vVPCKwiWsx1ykEC%2BO506KkE14xgr8Fn9VJalxz%2B72wUaPzK95WvmzW565q%2BA0C1Hv4i4GCVQb%2BZgs3FWFuXu80a4xLhdIp9TBJM0MK8Hq5GfPRWe9nW4BWqWRkAyG6o6wRD7q%2BJ9MCYearpJ70oKoh2g2%2BbT3DUYYOPUVWZDCot9fEBjqkAVBQaENO66GP3Ocmq5oPkYN2mlkI8wmsvgsqTXJ0vA6AhLiUHLY2tXj80BRwFYG46e%2B0zYntYAJ2N9OYZmPwY%2BKmahnSTlE%2FXqEZVR22yS8M4aIkjpGWIbrKvVKfhopQ6P%2FW0sloAIdIqYzgrT3Na6sQFWUzb21Byw1lW8LYtd3by5c%2FbkOpjMhiKyfNMPatSpDHYhafUWEiNKpXHPdEz1kETmMG&X-Amz-Signature=336a62e200797381bf7d0618315370a2d9b41021e4c28d98771f0161873d53d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFHD7UO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaYofSUR%2FEkyteD5w5dAb%2FZAdp9AhE2auObipTdhVUKQIhAKRtTLoVb1dZxXw4Za9qx89zRIhcsqMTZPGrL1ZlD85KKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrhgjuJuxwZVnmHXwq3AMIT28Dmy9IAKhiufutNGAWSr%2FdXGvZNwCIEakGKdggYO2j%2BSVcUOwYQiiXhWOciw0xAfOndcEZgmtnxQLc7j8cdaEmzjRq%2BG2T2iX36fUfYpFyAiHRD8pTZVVNhnCvKJPxOdCVG4G2cBCMy6tIx8Yy1uWqU5NvJU2ggBrAD2rKSW%2BBAat7kuoyN06M5s41BaS7848fVigNTptsXHnLBaNFtnfu%2FV7bkGG4pcvmU8RLEnE5t8kAwIS1TUfHrjOoPBfNnR9ycigVQMbfWmtuqm%2Baw1BKIMW4Y2t6ShvfYP866ocL%2FWKAa7NO0w2MBajAQNLXM7kOVl5nx6hD1MQRD5%2FnaSN0b6yK90uQRB%2BF1zfZPMTxE2hIESp9laQ%2FbfpOcS45%2FN5aT4hV1KItxFcKQvYeZJ%2FSV9m3TLniWEJmzCIyXCo3N3vpEtL7F8Cjsa5QrwFzfPoOUN1Vmhy0QoCw39vVPCKwiWsx1ykEC%2BO506KkE14xgr8Fn9VJalxz%2B72wUaPzK95WvmzW565q%2BA0C1Hv4i4GCVQb%2BZgs3FWFuXu80a4xLhdIp9TBJM0MK8Hq5GfPRWe9nW4BWqWRkAyG6o6wRD7q%2BJ9MCYearpJ70oKoh2g2%2BbT3DUYYOPUVWZDCot9fEBjqkAVBQaENO66GP3Ocmq5oPkYN2mlkI8wmsvgsqTXJ0vA6AhLiUHLY2tXj80BRwFYG46e%2B0zYntYAJ2N9OYZmPwY%2BKmahnSTlE%2FXqEZVR22yS8M4aIkjpGWIbrKvVKfhopQ6P%2FW0sloAIdIqYzgrT3Na6sQFWUzb21Byw1lW8LYtd3by5c%2FbkOpjMhiKyfNMPatSpDHYhafUWEiNKpXHPdEz1kETmMG&X-Amz-Signature=75c4ace4979a1abbc079ed96680a4e02e3df44936d10070967a7f385621f10af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3MEJLTZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCYCsBGQPyXmmSJ0yoNGXHfi4pOZmMYKaisFv554D5IDwIgHfO0vbgVGJyEMFPPXSyK3AMAPQe9MtBXEDJWjyVLdUwqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMf%2BxdkBhyy1%2FJNgSSrcA2umrQrQwg%2FyWId2GbYo5lLUtFoFEezcmrOuUtmwYxM7uRqMIMS8xG%2Ba%2BxA5YSVtAkfCwrZF%2BxsDVOPXUBsbrjCYF33IRoHMwJ33V8uE1XP0wCXBXNlF2fE%2Ft5DS%2FWHZ10eXU%2Fskb3v0f1WwmHG2by0NW%2BUqm2m6kU5aPGI5sLkdkFDZ0EhT7dR9vKeHE%2BJPck3ImDdbZQPKowQup3%2Fn3HeNk%2Bulmm%2F1s%2BwZ%2FR4Rs%2BcGDRFCR%2BS%2FoFXY9ZLi8mz0YXvk2GDqf60OSXDtJjTH2lqW3uDhupL0XmZJEJdD%2BFfY6E%2BfJ1MMZgu%2F%2FmOHswQIHZjVJ%2FT6cv1QLF1olRL618MojnAqTlc4kIYRwFcCBeIOIqZm59dVlVXTOb%2FeTP%2FrBIw2zPI%2F7MEKZ5wGAO1EYkEy%2BKNJZXOd%2FlrpTvPCbwPuVkOXJSUTcrK4Lxr3A4cEg7kc%2FGRt7OprNkcTh9P%2FUuMtvCFY7vY%2BsJsEU1NKPGM9glJ7wplj9ag5UWRXzP1D7xsUZ4NN3ZwVQyNAe3xyVqM91RAQbYZ5fEHDmpVMh7vEeJc3M6ITnIZeQ1m77ShqkxJOhjFW2gjNEe7lYzZB%2FV2sKOHlrIoJEe5HHhg1LL6trtLPGZU5WH8UOuigMLG318QGOqUB96UPJcdNMUHwt7WQAu8xFcfaeirEAUUiBzNkhfYsY%2Fb%2B1UVVmdztbehMSPshQUt0zbI1OIhvNi6MOieLZUffOWGtqCyb2w8yxO7FL5VOpiI4Kg%2FigJB17Th%2BM%2Bifcz%2BcE%2FJ2MdZiLBQBa0nhpHJlr%2FsrRzmlFviahs0Be9Q7usbJHKmI7WSUPpuUO7JdDdPDA51xmGh1oaiGSX6hdXQEZxil%2BvL5&X-Amz-Signature=8f6d92c0c1f2ba43bb03a39ee51f0dcd9c9da46174e884b7860aea1b92f57e81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR5SVWUQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQD%2FK9UZrtM%2FCVTU3vGoRc44c%2F%2F0dlrp4L8pt3j2UXb%2FtgIgalPMQAc7AvEgu33ylqBD1RU2yTBtJiQXa%2BzZCb32aFgqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BFUdH9fIfgRmm95CrcA3cQl1yBCKH3NUW59%2BuTNCd0LE%2FjCp6228XpKoD3AM888piXG%2B7V68QmV39ZoclJu704GP03z17obUEGbVCeTBv4z4yScz9utcYV1YN65modZh5e6bqK3SSuUZcwQeNmjtoqS3xpGqdtg2N1ytbIUl4WAIImKNPWPgBG09cQC7sJfxVSWSemquNOtgpB5eKOC%2Fa1tbMhLtXshWiosZZOSJhiT%2Bc8JD1bF0YpNzAJGnFEynsaJF0ylTghNcrePJzGSctJzvl8gA8%2FiJ6C8jVbMR63H2C81fUHFJvebbNNFIAPGMxnSY9qqDWA5aGHQ2TNhK7CY7LWos0pXQo4j882g77tSdfbOT7rM%2FnCt0sb7R2%2F6z3b7hp3XwK04vzTBfpptMzGqoiB4y%2FfOGO0FkW51KgQMb1lkJvgwIYsUM9j44yLN%2F84UPv77WW3woLZaUxUHXMMHe%2FJX43wOp4jTXMWGooS1mZXzSTrBca4EqnVTIaa3V%2F%2BKHpm9EcLkDoFvkoXXRFnSMAL5IbyeIxXtrco7B6dXw07XYrbRbPHltz%2BNqSrL6LKfl1PHKvQc%2BrgT0Bgom2JDObg6cGC%2FLGFGa%2FplpjWz2gwo1%2Fjs2nzDgjldH9vm3EoANVWoYEPm75mMOC318QGOqUBS%2FeQCeS1jjL3oFVnCJDYPin8npxSSfxyw2K9Y1wkjmJejmv8XTs%2FHjmbWfcCudB%2FdiDUHIvujjCZnPGPOS8Vy8Svh8w3su8sJEZyCGtAM%2BnQSBFG836waWOepPQw7vuAYs3AYB4JyoMxQSEPDklKa6EYRgw16zj%2BYfZr8CbWzcO5L%2FiyCppXldVOmB6lVI%2BHFQpXELzqn3CNphjJsn4JMrM0qKrq&X-Amz-Signature=bd286ae4975b9888c748f787824b27befd2761e1e88e56a9f89edb0a663773bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFHD7UO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaYofSUR%2FEkyteD5w5dAb%2FZAdp9AhE2auObipTdhVUKQIhAKRtTLoVb1dZxXw4Za9qx89zRIhcsqMTZPGrL1ZlD85KKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrhgjuJuxwZVnmHXwq3AMIT28Dmy9IAKhiufutNGAWSr%2FdXGvZNwCIEakGKdggYO2j%2BSVcUOwYQiiXhWOciw0xAfOndcEZgmtnxQLc7j8cdaEmzjRq%2BG2T2iX36fUfYpFyAiHRD8pTZVVNhnCvKJPxOdCVG4G2cBCMy6tIx8Yy1uWqU5NvJU2ggBrAD2rKSW%2BBAat7kuoyN06M5s41BaS7848fVigNTptsXHnLBaNFtnfu%2FV7bkGG4pcvmU8RLEnE5t8kAwIS1TUfHrjOoPBfNnR9ycigVQMbfWmtuqm%2Baw1BKIMW4Y2t6ShvfYP866ocL%2FWKAa7NO0w2MBajAQNLXM7kOVl5nx6hD1MQRD5%2FnaSN0b6yK90uQRB%2BF1zfZPMTxE2hIESp9laQ%2FbfpOcS45%2FN5aT4hV1KItxFcKQvYeZJ%2FSV9m3TLniWEJmzCIyXCo3N3vpEtL7F8Cjsa5QrwFzfPoOUN1Vmhy0QoCw39vVPCKwiWsx1ykEC%2BO506KkE14xgr8Fn9VJalxz%2B72wUaPzK95WvmzW565q%2BA0C1Hv4i4GCVQb%2BZgs3FWFuXu80a4xLhdIp9TBJM0MK8Hq5GfPRWe9nW4BWqWRkAyG6o6wRD7q%2BJ9MCYearpJ70oKoh2g2%2BbT3DUYYOPUVWZDCot9fEBjqkAVBQaENO66GP3Ocmq5oPkYN2mlkI8wmsvgsqTXJ0vA6AhLiUHLY2tXj80BRwFYG46e%2B0zYntYAJ2N9OYZmPwY%2BKmahnSTlE%2FXqEZVR22yS8M4aIkjpGWIbrKvVKfhopQ6P%2FW0sloAIdIqYzgrT3Na6sQFWUzb21Byw1lW8LYtd3by5c%2FbkOpjMhiKyfNMPatSpDHYhafUWEiNKpXHPdEz1kETmMG&X-Amz-Signature=56a451c92900acf781f7687b657b7a5ff1db13dab83b07842b8ca0202399e216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFHD7UO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaYofSUR%2FEkyteD5w5dAb%2FZAdp9AhE2auObipTdhVUKQIhAKRtTLoVb1dZxXw4Za9qx89zRIhcsqMTZPGrL1ZlD85KKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrhgjuJuxwZVnmHXwq3AMIT28Dmy9IAKhiufutNGAWSr%2FdXGvZNwCIEakGKdggYO2j%2BSVcUOwYQiiXhWOciw0xAfOndcEZgmtnxQLc7j8cdaEmzjRq%2BG2T2iX36fUfYpFyAiHRD8pTZVVNhnCvKJPxOdCVG4G2cBCMy6tIx8Yy1uWqU5NvJU2ggBrAD2rKSW%2BBAat7kuoyN06M5s41BaS7848fVigNTptsXHnLBaNFtnfu%2FV7bkGG4pcvmU8RLEnE5t8kAwIS1TUfHrjOoPBfNnR9ycigVQMbfWmtuqm%2Baw1BKIMW4Y2t6ShvfYP866ocL%2FWKAa7NO0w2MBajAQNLXM7kOVl5nx6hD1MQRD5%2FnaSN0b6yK90uQRB%2BF1zfZPMTxE2hIESp9laQ%2FbfpOcS45%2FN5aT4hV1KItxFcKQvYeZJ%2FSV9m3TLniWEJmzCIyXCo3N3vpEtL7F8Cjsa5QrwFzfPoOUN1Vmhy0QoCw39vVPCKwiWsx1ykEC%2BO506KkE14xgr8Fn9VJalxz%2B72wUaPzK95WvmzW565q%2BA0C1Hv4i4GCVQb%2BZgs3FWFuXu80a4xLhdIp9TBJM0MK8Hq5GfPRWe9nW4BWqWRkAyG6o6wRD7q%2BJ9MCYearpJ70oKoh2g2%2BbT3DUYYOPUVWZDCot9fEBjqkAVBQaENO66GP3Ocmq5oPkYN2mlkI8wmsvgsqTXJ0vA6AhLiUHLY2tXj80BRwFYG46e%2B0zYntYAJ2N9OYZmPwY%2BKmahnSTlE%2FXqEZVR22yS8M4aIkjpGWIbrKvVKfhopQ6P%2FW0sloAIdIqYzgrT3Na6sQFWUzb21Byw1lW8LYtd3by5c%2FbkOpjMhiKyfNMPatSpDHYhafUWEiNKpXHPdEz1kETmMG&X-Amz-Signature=5611d6cfabbd5f45a9150a7a0cd434361d083e9818c0a2e4ee9a3ae7f6a230c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLBDFCDD%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQD3to5Szx5WOxL8y8SRlXav%2BKdrm%2BCri0543wCUwxnOzQIhAPrXNhEUp3WgQqmGVwjyNdmKEICj3M%2FoM8H2hEPBUubRKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKb8GsfBcGewy08wUq3AM%2FMnnj%2FG6LIIj96qO1xmZ%2F7JzFLwesbNTGW7J3gTGs6fdIjLl7PoiHiGuJtLsKBVFdZSoqqRYcbirjD2%2BPydrFu6mDWgTgDls3qj3%2FZQc%2F9UoxMSv8SIiK4Jmqk4MOHZaikRsfh5Bdq6eLxPOrdhwz6aw7dYYds6rrZvyVK%2F%2FBXjJh3ykdSLmRBeIlbxE2VhuZbsHDefZ4JucQyfP%2B%2FU4nM%2BTU2puiGt4HanilCg1sJJ0uOROstELky7i2w2YC%2BIirH8hPWhLDsmlo%2BLoGmujKVBvzgNkGrrpyZ3ebBMqA3vi5SUk4P75Abe7eIJaZKi%2FP%2BfhHc%2BHccJo1tBcL%2FSZBbEVcH6N9sDQ%2FFkhcGLX00fnfNMTFPKi5SoXeF%2B%2B3PaaTd%2BTr3cyT99qfm2m%2FoqIzpJWhL01RKPAYRnZVzZrKMPoZPzogvppJ1x5AFFsVyd4xk5ofVS563PRPJOLzrwpuWwgihoNklwRUdJ2GmGCiGTqwSJuAsYvpEn8POVwZIY%2FnewF5wSSfeOpMZx89zw7gztuulb0M%2F8vwzde%2BlIOrD4STTZG6htMj%2BtpsxkPF9GT39d1AmlPquBdpvVjJ2L6uLtl8Zk%2BhDWQxa3bp9mT5%2FGQDIWGwpVXj4POavjCut9fEBjqkAR4tPnTSbbwohrv63OcvrKdYV27%2FtU1IcRMIvMrLYsXjKVni1mjYHzzYiIww9%2FeoBkUwbHua4JkXtyn7wbAwNxW8Pop%2FV8%2BUsJvr5teLk33yoGY%2FbnQAoPuS%2FAo0WtEkE4G7go7xANkg2nT01A01hO4TSn5H%2FM95y7wlO4qQFDoYWdd9YoFd8n783MdKNHjwEaNfNOH5BHOa8Z52KYLS3ENJICEl&X-Amz-Signature=83a91de2d3d8bfadb27fe889c895714b981a48966e41942d9e1f014c3e497597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFHD7UO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaYofSUR%2FEkyteD5w5dAb%2FZAdp9AhE2auObipTdhVUKQIhAKRtTLoVb1dZxXw4Za9qx89zRIhcsqMTZPGrL1ZlD85KKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrhgjuJuxwZVnmHXwq3AMIT28Dmy9IAKhiufutNGAWSr%2FdXGvZNwCIEakGKdggYO2j%2BSVcUOwYQiiXhWOciw0xAfOndcEZgmtnxQLc7j8cdaEmzjRq%2BG2T2iX36fUfYpFyAiHRD8pTZVVNhnCvKJPxOdCVG4G2cBCMy6tIx8Yy1uWqU5NvJU2ggBrAD2rKSW%2BBAat7kuoyN06M5s41BaS7848fVigNTptsXHnLBaNFtnfu%2FV7bkGG4pcvmU8RLEnE5t8kAwIS1TUfHrjOoPBfNnR9ycigVQMbfWmtuqm%2Baw1BKIMW4Y2t6ShvfYP866ocL%2FWKAa7NO0w2MBajAQNLXM7kOVl5nx6hD1MQRD5%2FnaSN0b6yK90uQRB%2BF1zfZPMTxE2hIESp9laQ%2FbfpOcS45%2FN5aT4hV1KItxFcKQvYeZJ%2FSV9m3TLniWEJmzCIyXCo3N3vpEtL7F8Cjsa5QrwFzfPoOUN1Vmhy0QoCw39vVPCKwiWsx1ykEC%2BO506KkE14xgr8Fn9VJalxz%2B72wUaPzK95WvmzW565q%2BA0C1Hv4i4GCVQb%2BZgs3FWFuXu80a4xLhdIp9TBJM0MK8Hq5GfPRWe9nW4BWqWRkAyG6o6wRD7q%2BJ9MCYearpJ70oKoh2g2%2BbT3DUYYOPUVWZDCot9fEBjqkAVBQaENO66GP3Ocmq5oPkYN2mlkI8wmsvgsqTXJ0vA6AhLiUHLY2tXj80BRwFYG46e%2B0zYntYAJ2N9OYZmPwY%2BKmahnSTlE%2FXqEZVR22yS8M4aIkjpGWIbrKvVKfhopQ6P%2FW0sloAIdIqYzgrT3Na6sQFWUzb21Byw1lW8LYtd3by5c%2FbkOpjMhiKyfNMPatSpDHYhafUWEiNKpXHPdEz1kETmMG&X-Amz-Signature=da96adc1081f7a2ed0ce5c392f57f5e74963d5009ab73846d2d6fdce55179fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLAULAD2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIG2TNRdjO%2B0OCsZS%2BJ6Vo4CgIws7Xe%2B0axCK1AP6DU8DAiBCChSKsLh1yGEb%2B%2BS%2Fcl9HEkdKqIzdeogXBwhBd%2BMQhyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoiJFT9Xlc7nDG8%2BzKtwDHQSdZq2TJ4ai0aYhGelkLIGpdvzWO%2FgE%2FzKbi1kjoLOuCZ4HPGzhToJVZtrH2UiPQ7kh%2BYg1IlRjRlYfJ5ZNkpSRlDd6KUGv8L011KvXNH4qJ93KYTAlwpLeq3ckRU3wJNyQNloIk8TVQKf%2BPLo8bPypKYM0oKYB3DPjM1GuR6vWKEy9WNVQe559AeIVuPqzn0pwFXi78tZ1el71J4K7aVUblF%2Bx2JtNBhJ1j%2B4F%2BVu2Xb1IpSvRGttGWFgp7q0P9SmLdJxbZlbD13dGDCKVb%2Bd4MyovYJYc%2BsgcREnaQROiJFviMvdytra%2BZR9HSQdv%2BLfw%2BT9vKvDlN506ef8OZhSXmJePwCHOnR4yB1n2rdkfR4zT23RF%2B%2BOFaCtdzOliya7EPxBDv4r3xb8KrFEf5M4SxN9HvdWru11e0ImUCfBdpsEPJU3i2efi7sof1XgEIVhcU0YECVHAWSYjkt%2B9XTV0h4zf9oaipWigvj6VDKDzYvXsHHCKFIx0N1MD2iWMSCDsteAzaMxTiB0Rpeg2hAzWJPaJYGfgX8T6%2FD5WOzWndCcz9db%2BRQV3CR%2BhuBZagET6mkY%2F%2FSpOOjPExX0BeqhbuKsNQtWOZan%2BZGhfag%2FIQoGW1vOjk%2FcqGCUwirfXxAY6pgG%2Flh4sMAoGBHFDEe1EcJtEJdvI2kBqSsnxeVuhb6EUel9jfThGyWtz4uTZiTXAvMNLLzeDgefj3o3e0KW41w2Vdo%2FtGA3tvgd5xIFVtfkkEPJKY7auK5VZPVYtWYljueZ5xnJgLgcuXQ2hUD3vm%2Bwa3wIjKNk5jueuHE9ma7wPRjkjzRujfZesla%2FFe35yfHyKnXidqcqzQhgwviPyXt1Fu6aHDo9D&X-Amz-Signature=88529aa6d2300ccf72d575207e42696227d7db56ea113e50534fbc73216b678d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFHD7UO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaYofSUR%2FEkyteD5w5dAb%2FZAdp9AhE2auObipTdhVUKQIhAKRtTLoVb1dZxXw4Za9qx89zRIhcsqMTZPGrL1ZlD85KKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrhgjuJuxwZVnmHXwq3AMIT28Dmy9IAKhiufutNGAWSr%2FdXGvZNwCIEakGKdggYO2j%2BSVcUOwYQiiXhWOciw0xAfOndcEZgmtnxQLc7j8cdaEmzjRq%2BG2T2iX36fUfYpFyAiHRD8pTZVVNhnCvKJPxOdCVG4G2cBCMy6tIx8Yy1uWqU5NvJU2ggBrAD2rKSW%2BBAat7kuoyN06M5s41BaS7848fVigNTptsXHnLBaNFtnfu%2FV7bkGG4pcvmU8RLEnE5t8kAwIS1TUfHrjOoPBfNnR9ycigVQMbfWmtuqm%2Baw1BKIMW4Y2t6ShvfYP866ocL%2FWKAa7NO0w2MBajAQNLXM7kOVl5nx6hD1MQRD5%2FnaSN0b6yK90uQRB%2BF1zfZPMTxE2hIESp9laQ%2FbfpOcS45%2FN5aT4hV1KItxFcKQvYeZJ%2FSV9m3TLniWEJmzCIyXCo3N3vpEtL7F8Cjsa5QrwFzfPoOUN1Vmhy0QoCw39vVPCKwiWsx1ykEC%2BO506KkE14xgr8Fn9VJalxz%2B72wUaPzK95WvmzW565q%2BA0C1Hv4i4GCVQb%2BZgs3FWFuXu80a4xLhdIp9TBJM0MK8Hq5GfPRWe9nW4BWqWRkAyG6o6wRD7q%2BJ9MCYearpJ70oKoh2g2%2BbT3DUYYOPUVWZDCot9fEBjqkAVBQaENO66GP3Ocmq5oPkYN2mlkI8wmsvgsqTXJ0vA6AhLiUHLY2tXj80BRwFYG46e%2B0zYntYAJ2N9OYZmPwY%2BKmahnSTlE%2FXqEZVR22yS8M4aIkjpGWIbrKvVKfhopQ6P%2FW0sloAIdIqYzgrT3Na6sQFWUzb21Byw1lW8LYtd3by5c%2FbkOpjMhiKyfNMPatSpDHYhafUWEiNKpXHPdEz1kETmMG&X-Amz-Signature=72bdc5194be53edd4766e10668ec6ed4aa13be9b6ac8b2727d06d2a883e721e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z62W3AWV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBpkMbx4RSNwN4HKSzrmTpiFDitP6AheSf2tpS5OO30HAiEA2ap2RGMHGFcQhoDJ2qoVyOFsj75enTsxkeTgI%2BwU7ewqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyqQCm9bbEC78nDkyrcA2YXTR4g2eMG02iImVmNGBqI0RgT2R7iA8CE0kLfLfDIQ4JgKldtTdw6o6wY%2FMgUTnIIPMtaEwmoyERi9pSfKm9MqwA2y5Ka9emY4geiZP5AOrM9OHQLHWXhSDJ98Kox%2FhJC4pK1Yusd9z8Ui6W%2FVLlzr%2FrH58cGu9ktP1i3O2qtB5sck%2BALmJE5OPppnSFG9GKBh1DRB3hivjqroj45z9FhmpHhVDfh6wmtmNuCqaVzrUdtIsWEFU%2B%2FF7%2FjyCPjk1gWUWZDmmQoR2YM1ZPOg1LcvM%2FhOl35BrwiQH7bkvxUJl%2F7mpIYgHvbgM4ALdvFP4Y8R9SQljzIRoKRDlwcl50N%2BmfTGPl7fk61DcFRz3EfEa2EXFRs3eLLuEJ%2B1OcAEoA6PWZAVbgJo3HpIJabgOYACTVlBCapVzi1CiVTWMiRmsI3677vKWZT%2Bt2uq7QRBoKrbigbNjGWo90NcrRhsQ%2BT%2Fe1jkPv9t5USfY2HPb23rUxnyFvtPadnvl89ILCIMQ82x4VojHUJOBzGITTquOWVioddf%2FTn%2Bh7I%2FtIzyvaPA3Cuc6XSV6KfaQysEA5x5hG7PZ55gT5sx9oNXCuMBc4gNaT%2FRN2XE5qWJXmSePfIq5ok%2F9gQ1Nr9PwRgMIK318QGOqUB5EmGmRbq2Kia9illnLadcOKbScA7gfT3NhsRoiDpQoCgP2RjgwLHdgSGMZ5%2F86k5dzcCRONJnqI5Y6GQRQZpcqLuWyodzCmO9G2taoLF6lA1iV7%2BUBZDBh%2BNML612AFB9yUlYLTWIhOK%2BXHz7sQFSwm%2BalWM5vocfbfp9IWszLcDKzzG3%2BdBhQv2mwoqkWXblyZNWliaIh4TmtZKL9%2Fi14kMXw7D&X-Amz-Signature=0cc9f718445c36f9cff81108fa69a9cf0830eef05715f6a6bb9912db04e0a12f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFHD7UO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaYofSUR%2FEkyteD5w5dAb%2FZAdp9AhE2auObipTdhVUKQIhAKRtTLoVb1dZxXw4Za9qx89zRIhcsqMTZPGrL1ZlD85KKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrhgjuJuxwZVnmHXwq3AMIT28Dmy9IAKhiufutNGAWSr%2FdXGvZNwCIEakGKdggYO2j%2BSVcUOwYQiiXhWOciw0xAfOndcEZgmtnxQLc7j8cdaEmzjRq%2BG2T2iX36fUfYpFyAiHRD8pTZVVNhnCvKJPxOdCVG4G2cBCMy6tIx8Yy1uWqU5NvJU2ggBrAD2rKSW%2BBAat7kuoyN06M5s41BaS7848fVigNTptsXHnLBaNFtnfu%2FV7bkGG4pcvmU8RLEnE5t8kAwIS1TUfHrjOoPBfNnR9ycigVQMbfWmtuqm%2Baw1BKIMW4Y2t6ShvfYP866ocL%2FWKAa7NO0w2MBajAQNLXM7kOVl5nx6hD1MQRD5%2FnaSN0b6yK90uQRB%2BF1zfZPMTxE2hIESp9laQ%2FbfpOcS45%2FN5aT4hV1KItxFcKQvYeZJ%2FSV9m3TLniWEJmzCIyXCo3N3vpEtL7F8Cjsa5QrwFzfPoOUN1Vmhy0QoCw39vVPCKwiWsx1ykEC%2BO506KkE14xgr8Fn9VJalxz%2B72wUaPzK95WvmzW565q%2BA0C1Hv4i4GCVQb%2BZgs3FWFuXu80a4xLhdIp9TBJM0MK8Hq5GfPRWe9nW4BWqWRkAyG6o6wRD7q%2BJ9MCYearpJ70oKoh2g2%2BbT3DUYYOPUVWZDCot9fEBjqkAVBQaENO66GP3Ocmq5oPkYN2mlkI8wmsvgsqTXJ0vA6AhLiUHLY2tXj80BRwFYG46e%2B0zYntYAJ2N9OYZmPwY%2BKmahnSTlE%2FXqEZVR22yS8M4aIkjpGWIbrKvVKfhopQ6P%2FW0sloAIdIqYzgrT3Na6sQFWUzb21Byw1lW8LYtd3by5c%2FbkOpjMhiKyfNMPatSpDHYhafUWEiNKpXHPdEz1kETmMG&X-Amz-Signature=285462cfebd9bf83a02c7b4e6bb21635e6e634c722bfe13324b3a1590946684d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEH6Z2IF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDOzM2gpP2oEoFZnlmat7fAbA1bcoYWiZiud%2Fgfh1NBYgIgCPXc3VsqSG%2BaAAiqIZr5Oo%2B376nR1PAsQssQ3qNMTWkqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtG%2BaQnodrxQAR05ircA%2F01DSNAEteCSmPJMFsmdqxN8vP97B3aPuQpfcLfpQ4v9WbnJCSPH1u2kMGWAg8rRaJgzeC%2BF33CqlHv9XAsDmOBTk4m53Y7%2FGTNU5KOlkZosVaK42OtIBjwYu0e8TYOswgY9hJ8YwElEtrlS%2BmmhlHgy%2Fw5Hi9AIAHUR%2FRshO%2BA7HHTYSxErkCGAHbwnfu1tVTCfrbki0AGwQCY0jr34AZ%2BckRE42I1C2loGLvrzXfoTrUa%2F14oGsX9lK6Bszrchk%2FFMTxCT5h11NqrOdv6mMKyGGj5x5I%2B2XsLV9lWstZK0e0d%2BaAGl%2FNUHrgnOiWYz1%2FoFWBbbEUUAomujk69e1qDtbf%2BFwuUpcvL%2F0vM7maxiO9jCJds10R2dn0RtrqcCeJbFBJN1MS8VOAqXYEF5ABwdUH4me%2Bo897OVZavFVK%2F2S2P%2B0dyRylBr7jbwmmDjj%2F543Z4AmBZF7LATokbJkPpUiprK94jcB6%2FyRStmuRrLXbzyXva13VnsN7sLAFYAHS2QgGURvOEtjfrI6%2F7zA5HnESAoVztAI0j6caG3kIpVItJZJZwzhHc99Z6HJ%2Bmg4E5se5iGaJUxfPBdA7VmciuSfuciv%2FIPJ0FuuHnZKq9DiAT%2BfCP9%2FQ6Wb4JMM%2B318QGOqUB2rSWbIuDlK4bUuzAwLkgFpFRbXuS6URmfoVMCFjq2ZmipawDORYJXSqox2R4iEDfRpaQgxxhInBZ24wYzHn2ZBhO8UsdmFqA8abj2Enor2NuiQKO4d1eXiuEanUJGJRUspuzU8NQXs2OAMc3AZyW%2FLzc8t43JsH5xxONTb9QobXSTq9etZgd6UcPtly7Ta%2FF%2B8aRnuzEBmQBwnShKfTA1%2FYIG7Z3&X-Amz-Signature=8a51cee6e12c8eb32f3072e9157d55c2c800afa5ab5ae41addbfdb8ea4242903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CMPIW4T%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCxYiqvNuoyXhLcxIKH9OTaa3BLx0zRE0UQYeY4sqL1OAIgUy96yaZMFOlfws67e5wpS9JHreJpUqVOffbBQOvNMCUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgyWE%2BsIJBl1p2L5SrcA%2FtFa4JnwcqztrMINWXK864hhhiprEX%2FFJA8kTVDn6m9Q1nP5TUTkDqSWTfgiUMb0imzTi61XBLAMQ%2BBuszZSUAsVUvPvJGFD5YMBKK3Fo9goZkTBbwrPg151r6YGqGgFC0Tdd%2B%2B9C3O2iElLoFNntb0j7ndb2cDRo5aGQd1Kj4wUJ0RRdudFBNHDZPLaru4yqotz8KejWidxIH6EJqoXdsLew1Jhpvf%2BctJBc1Yx5Yo9Q%2FOs%2FtlkB6HT2kDVzz7iYVlHibvksj8a6VVQPtcNtU96cv8rlr%2BQAauWzv%2B4SoDO%2B8qyR2vLIsK62Gt%2BGpfPghazCZtsacASTfxkcAblQ0AOHVxk3%2FIxgN5kjdb9GUHz12JLnTlPOIxJkNR8zcVDqdxhVcbS521SQEzzUWFLX9xB6%2BviLt2nB6JJyrelUh3WRPnx6NvjkzHX5fvS%2F4hG9AYf%2BXFru7FkT%2Bobi2TX0%2BsNEi94KM0NBT%2BCgj%2FL0rxt8UFD0z8RUtGNsj5NO0s2ySVpQ3rjs3or9Mc2OMBY2UFiPuNCYprB2i1s15nbsQA%2FVBNrmBvxksV5%2B6tVdHj3wBL0SByOle0GXPIRQ9uL7W5TeTKQ1gmW0ogmDV%2FEH6CaXaPY5v1fnq1J95QMOe318QGOqUBE8aWXXXnsgjRCA9WH1tswKK0OWWJih0Qpmn0PsY9tZm6nqLwBzDTjUNfqHbqfa0iNEFluhajVFaqOGamwqc272ilifBBA1ig4eX53Ka6GIL5bawyDpS7x6F0yj9FtNTxUjIxZSntgvXFo3zKdGigxkotUZEceW5hFUZNxCYPiphgQABdZuPuT6Q1qAyh0aV%2FFGj7vJsYPn4YnmYU%2BL2MmaKtgMbZ&X-Amz-Signature=eb17cacd6245bfb8ddf92e0cae6550b7a7f59774ec3df668fa7bbd06338c981e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUW4NM2U%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDmk4ApAOqeRKacUJnNEWzKPouTsGGAtkIANCpc%2BCqaCwIhAJNEjzAzCDN2k00Hl8IFWN2SUTz8pFphkPm9mWU%2FcSLkKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx07K5DUdZXm99o1wq3AONVBd5kJln889H3TZA3qCpMARk7yQnkCAfNTwHxCNvSBDKDHYAmf3YZtZ0H8Y2pBg0qGzUrcvyvnaBT7KYO%2BXtYvvh%2BNK7IpZ83062cicxUFVPXD44BG%2Bac5e%2Fh3B9%2FOEwQzwIftlKfMYsYdyRAeF8nyWOkmTbmPvo0QqkF5fKnGqJ8C2sV7gn%2FE7%2Fdrbdm1Nzvh3AHFx7Dz%2F6%2FWtNSgx1ndhIDgvFSkaKhP6l2rtliUNmdbR86CwuUcJ%2B2OBK2QLFoY%2FSJ4OpD3Kn4hdWTNYuKLaDmg4lyjJ6IAqKaFhObtOzTDovywhWFZyZcdLHCrmzdAv9T3UhFzfXvfG7Ouu%2F1pkaDD14YdjQVls2HS6%2FM4nyDQMZX%2FuYrhnr01PTfPgLyA7tT70IQtGxy3u7gcwRlGao753Nac9IeGgrHn11xMqwXTwkse%2FRPdbFmRvOPBOGrltug9NJXUtJ5S9UFPkDKChwvzay9tZ8hzsxcvqAL7ittIjrDxhr02U5Y63zfKuTIGogB6I6N73TKjDkixV4rDNiEliH4vU3lsPmvgHTlrVPLyAUIY9DMYtDdXIZZaJMtVI5ll89Jr42hqrYxMA%2FaoqAum42Ajmune%2FHbL7QvQug4DDXM5kOjsGonzC5t9fEBjqkAfsju%2BnC1G8b7WkmH2%2FZVmlu7E6Osl%2FDaMkhr1PVEv8EwImVNX1%2Fz3HEgnbM6RGUgBfwgQ7tZxGql2dF7v4CsQsDE1fCLoFTJZSLC%2BAiWircvUtTOqZwXSyh1ms%2BZVDC3CwK%2B1MEJCSxluvGw9cLwMW3ik%2BLsqOmlsseljJ1qBfQq3kottf9pYvA7aa%2BKB4UESc2Ogqfz15Kd9CKFhNnbVVAqmid&X-Amz-Signature=5c5d5c4f9fdd832cbbf3a078623775e84ccca16a4b2b3c4ee1d703529d8298f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXE6AMXU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIGE9ZeL%2BeXL3RiJRmMmfMRfnIu0F3pXBIkwIfB%2BBWrZXAiEAsZ938FZlrNgSQTbqK0ZwYvIA0EGH8d8GeH98O21S6l8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2B9oyEI%2FOVFlqej6SrcA2f30zGgDPPLKnw3gKZr0EWeCUiDKQdGwH5R2JhIPnRyRb50jjTUZHwLyZhwKGBlee0ysvoi8OWir1CZjwRce5XGCLFcJdFqnE9SRGXfNs5Xs4RAg87SOWHynzK4rPO792r8S0kYbj8oR1lGZFn3pvoCuabcwpyF1fh9MX%2FV7U5a35ruprv5vhB9N8o49HJCWRseO%2B%2FKK1a3%2FPtFcz%2FyFJFCSC9PAMr18au35dXGqWl36tqVC3hUGaglKZYXa3fguJD8RHDLNxsOEH9dnx7nuw5vb3kwFqzPrBXXvFgfSISkXHoOAWQar24yjuq7EL7xzXabvtqPutZ17fb2Ofj7YThC%2BlmOUylirvcM%2FwrIXldv5hqz6tG%2B6AzwOvOnNzJT%2FFlpw6zjJwe4u89cnbkO37%2FAtsssM8A9XZ2gtFeBJxytSe1ipd6IHS%2B91E1SIhoJiz8CrxLbJGSi%2BL8Jtbmfv3wrpO2KvYPfZgnLaW4Ja3HdGgDngAuNFmgdo6z0yY2KDyqMc4cmIllUiLebADjix0Cv39qHWc9T1j0r5CGiP5a761Wdw46h2e33rW9l70URTmnB3LW5Iz0tyxOiqFotW7cNjFkqdgiMdxP%2F1KRZ4Wbm4TlSS1RL0TGtwE38MIC418QGOqUBgM%2B7q%2FQ8x0s1FVZ4DnWRBErj4mdCvHPOir%2FUXgyTsGYhJH68VlHom8jCuPBIwQQv0OcnDhgTVtvmt9%2BJdzJ4bNKoSieSCkVC3ZIv310z5WJiQS80MXR0dXjGoBjQdMnglYMjzyfJSLcAhbbnqGFO8HPuYQxD0eg9JHL05E2qXzN1JzGGGEsCWsqioX1Jmv5LDg1zRTQxD9valXVKYicR0kneQlks&X-Amz-Signature=83267b723ba07c00eff56bf0a3a628f46c8de344133b1044629d5abc08023e14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRPLDJDV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQD9ezKxjcZO4iI9MTag2KUF1jXIMzUqSoW5jbpS9utxAQIhAPT8tEhHQ3DD1ogCIa2jTPmCHMCUon%2FmICueY4u2SoruKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHsiK89MUa4pwZrn8q3AN8vUvIedYxTUKJZUkRTK%2FM5o6c%2FKVeG0IgdjOfUOAzv0ObRH4gn2Ae8hdHQ0ER5zeo%2BgxVhptQkxEDcSc6HnmvSEiLIGJ8gwRwIZCYvBI8wBYfsCWYaoANEZe%2B8fOxUYsYDyuve8QU%2BkBy1kD9MT46F3zgZYmIFSbb16Gm7vS6Achb9dti35omRoQHKx7tk52hZywuCaJ4IHizs2fPown7894ZJaEZIAMSCpKRKnOyJ4ST5wAJlS9oSFT0L%2Bt1CLgq2o7B11Wz4qf7YiYOTbZumgvyqhWr9V4vHJLd10%2BuOPybJuuU9QpjqFHemHMQCBtjIiSNb366ZVe3Ff3Pcz6boBrkvqkQYDCdM7S%2FDN8kRQJ0XxKBWQoMLTY%2Fnmvq4yWded8zj1chxG%2B%2B%2BOXPLINzS3q9BeQuV7x74o8opmklYG4LGvBt9xd0tlxSBBkbTEHEB1UeAZpiy%2FKiwD3SAuzJ2CPO6FGpvMsb6cRts1ICj8Gn1xSXpSXNVKTBP3H8PLf3upxza%2B1y%2B8ueeflBkcz0BmDka7dhI8SEHsecfuwq3J59DSFrRlYhmP4r63Ng7Ex6PDYs%2FSeXefgPHwHNipNwHNefokuIsA9zdMRd2FZd2sdc17FfuWNzgnZ91TD9ttfEBjqkAQSqeOfrLhbu18H4wIHUncTDklORR%2FgYA2hjzHwJMt21vRoKZW0FrKiRO1dzLumGv1uem9mVgdLuDka5q0j%2B5EiU%2FeIM2xN47j0lLECHyFfi7VgG5czCbWRGS%2BVt6kkhuI9AISiQcB39FvKCnu4uaa9jkacLYnkUH212MO4FkSZWXjTSUS877IUzurw2za%2FZPJv%2FMheGjeHL1%2FNDFuo1mdxpwCdW&X-Amz-Signature=42ed5600370810e098fd799905f358976e81b1768edbad85643ee5c66ee54654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFHD7UO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaYofSUR%2FEkyteD5w5dAb%2FZAdp9AhE2auObipTdhVUKQIhAKRtTLoVb1dZxXw4Za9qx89zRIhcsqMTZPGrL1ZlD85KKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrhgjuJuxwZVnmHXwq3AMIT28Dmy9IAKhiufutNGAWSr%2FdXGvZNwCIEakGKdggYO2j%2BSVcUOwYQiiXhWOciw0xAfOndcEZgmtnxQLc7j8cdaEmzjRq%2BG2T2iX36fUfYpFyAiHRD8pTZVVNhnCvKJPxOdCVG4G2cBCMy6tIx8Yy1uWqU5NvJU2ggBrAD2rKSW%2BBAat7kuoyN06M5s41BaS7848fVigNTptsXHnLBaNFtnfu%2FV7bkGG4pcvmU8RLEnE5t8kAwIS1TUfHrjOoPBfNnR9ycigVQMbfWmtuqm%2Baw1BKIMW4Y2t6ShvfYP866ocL%2FWKAa7NO0w2MBajAQNLXM7kOVl5nx6hD1MQRD5%2FnaSN0b6yK90uQRB%2BF1zfZPMTxE2hIESp9laQ%2FbfpOcS45%2FN5aT4hV1KItxFcKQvYeZJ%2FSV9m3TLniWEJmzCIyXCo3N3vpEtL7F8Cjsa5QrwFzfPoOUN1Vmhy0QoCw39vVPCKwiWsx1ykEC%2BO506KkE14xgr8Fn9VJalxz%2B72wUaPzK95WvmzW565q%2BA0C1Hv4i4GCVQb%2BZgs3FWFuXu80a4xLhdIp9TBJM0MK8Hq5GfPRWe9nW4BWqWRkAyG6o6wRD7q%2BJ9MCYearpJ70oKoh2g2%2BbT3DUYYOPUVWZDCot9fEBjqkAVBQaENO66GP3Ocmq5oPkYN2mlkI8wmsvgsqTXJ0vA6AhLiUHLY2tXj80BRwFYG46e%2B0zYntYAJ2N9OYZmPwY%2BKmahnSTlE%2FXqEZVR22yS8M4aIkjpGWIbrKvVKfhopQ6P%2FW0sloAIdIqYzgrT3Na6sQFWUzb21Byw1lW8LYtd3by5c%2FbkOpjMhiKyfNMPatSpDHYhafUWEiNKpXHPdEz1kETmMG&X-Amz-Signature=74504e841e449fc35f23bc6be0530cd3213ddeb3ba6bcb6604059fdf9af48bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFHD7UO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaYofSUR%2FEkyteD5w5dAb%2FZAdp9AhE2auObipTdhVUKQIhAKRtTLoVb1dZxXw4Za9qx89zRIhcsqMTZPGrL1ZlD85KKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrhgjuJuxwZVnmHXwq3AMIT28Dmy9IAKhiufutNGAWSr%2FdXGvZNwCIEakGKdggYO2j%2BSVcUOwYQiiXhWOciw0xAfOndcEZgmtnxQLc7j8cdaEmzjRq%2BG2T2iX36fUfYpFyAiHRD8pTZVVNhnCvKJPxOdCVG4G2cBCMy6tIx8Yy1uWqU5NvJU2ggBrAD2rKSW%2BBAat7kuoyN06M5s41BaS7848fVigNTptsXHnLBaNFtnfu%2FV7bkGG4pcvmU8RLEnE5t8kAwIS1TUfHrjOoPBfNnR9ycigVQMbfWmtuqm%2Baw1BKIMW4Y2t6ShvfYP866ocL%2FWKAa7NO0w2MBajAQNLXM7kOVl5nx6hD1MQRD5%2FnaSN0b6yK90uQRB%2BF1zfZPMTxE2hIESp9laQ%2FbfpOcS45%2FN5aT4hV1KItxFcKQvYeZJ%2FSV9m3TLniWEJmzCIyXCo3N3vpEtL7F8Cjsa5QrwFzfPoOUN1Vmhy0QoCw39vVPCKwiWsx1ykEC%2BO506KkE14xgr8Fn9VJalxz%2B72wUaPzK95WvmzW565q%2BA0C1Hv4i4GCVQb%2BZgs3FWFuXu80a4xLhdIp9TBJM0MK8Hq5GfPRWe9nW4BWqWRkAyG6o6wRD7q%2BJ9MCYearpJ70oKoh2g2%2BbT3DUYYOPUVWZDCot9fEBjqkAVBQaENO66GP3Ocmq5oPkYN2mlkI8wmsvgsqTXJ0vA6AhLiUHLY2tXj80BRwFYG46e%2B0zYntYAJ2N9OYZmPwY%2BKmahnSTlE%2FXqEZVR22yS8M4aIkjpGWIbrKvVKfhopQ6P%2FW0sloAIdIqYzgrT3Na6sQFWUzb21Byw1lW8LYtd3by5c%2FbkOpjMhiKyfNMPatSpDHYhafUWEiNKpXHPdEz1kETmMG&X-Amz-Signature=62be8f0fb8b9d1bfa4729aa7b6cb3e121c874d796670565aba09882acbbb0482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MPZQO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEsX7cR09kPMChjvnWXJFLkiE470tcJKubRMukKyXVp4AiEAkOeEEjNeMYrOYpsLJFu6DuQziJd2E068I9RDc5j2Zl4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWITExcRWAdpyPuPCrcA518Oi9tjFhnMHhnLHA7q3RzUFtZsnNTwPJBGfbGpTO5lKqirw3Ubmbm%2B24bJYjxR6i2mGXsjzhi8Rwr9wS0Evba2hu9%2BTjCU82%2Fj9Aeh2jsWVsNzTJ2%2F6hJLxwGeQSa97Bx3TarQ667n25B0Jg65pxc0WCD1eGQudLxuy2l1w4oV2Yar7VAjeI4AL57yYIXZuoBKFmkwQKcERnf%2F1htfzuGa9RplTzgdm35WOU%2BkqhuuDfs2%2B8mrJcm6j0lPkq2q5V0DZIjcZFVYgHTbQ6R%2BNmhBTIkp3b7u9DKUoKsuNdrM0VyTcptnZKlHL1jNPc72bqwM16RLcuS1%2BaiusBKbQrqB4sOVSIwhZTmNG%2FksuV6EdjB1RM2b4mRlLF0TlmOdq45qRfrQeodd3ftXoLwWAeN1cCRPdOrTm5NUlxBZerpyT7iPpM0MqKL2CK%2FDLAPEXOtLytgre34WZOr3pzwofzS5QU0teifEMmg7zDkn%2B%2BKq0yek5qH4%2BBgXCNWOf81N51rnVgPjPHwbIcDwjd0j%2F7Pne98XwEXluyFjoEOOFi%2FSyMg7pSgBOKZ%2B8Gmfe63sMW9bLFS8t%2BAFByX%2FGS2E9TI9M8Lo9GS%2F56gDH%2BUACRzfB0T9XIGc9b%2FAA%2BQMP2218QGOqUBVsX0rGvM1EZZD49sJaMlRg6jtVXe%2Bxc14fpASiQD%2FI6sC9l%2BhfyrkdPcvF4zxA8aWBS%2BgduPGnKqOxo7ylwMncCyODlB5I7DWAg7WSjuTKEMWvvsl5ySNqP77W5fVqgcAwl9Ji9PRgHInw0XqWWu7xtNVaPmXQAfFfqclEhZa1z02LlyLp0%2FPX7gQPBhk345eBgN1mY2mVwnVEI4GpGywecCxRp0&X-Amz-Signature=5073c6a214dbf236ce1d5ec53d45083de72904f9a5b12b5c6910fdf8fdb536ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MPZQO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEsX7cR09kPMChjvnWXJFLkiE470tcJKubRMukKyXVp4AiEAkOeEEjNeMYrOYpsLJFu6DuQziJd2E068I9RDc5j2Zl4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWITExcRWAdpyPuPCrcA518Oi9tjFhnMHhnLHA7q3RzUFtZsnNTwPJBGfbGpTO5lKqirw3Ubmbm%2B24bJYjxR6i2mGXsjzhi8Rwr9wS0Evba2hu9%2BTjCU82%2Fj9Aeh2jsWVsNzTJ2%2F6hJLxwGeQSa97Bx3TarQ667n25B0Jg65pxc0WCD1eGQudLxuy2l1w4oV2Yar7VAjeI4AL57yYIXZuoBKFmkwQKcERnf%2F1htfzuGa9RplTzgdm35WOU%2BkqhuuDfs2%2B8mrJcm6j0lPkq2q5V0DZIjcZFVYgHTbQ6R%2BNmhBTIkp3b7u9DKUoKsuNdrM0VyTcptnZKlHL1jNPc72bqwM16RLcuS1%2BaiusBKbQrqB4sOVSIwhZTmNG%2FksuV6EdjB1RM2b4mRlLF0TlmOdq45qRfrQeodd3ftXoLwWAeN1cCRPdOrTm5NUlxBZerpyT7iPpM0MqKL2CK%2FDLAPEXOtLytgre34WZOr3pzwofzS5QU0teifEMmg7zDkn%2B%2BKq0yek5qH4%2BBgXCNWOf81N51rnVgPjPHwbIcDwjd0j%2F7Pne98XwEXluyFjoEOOFi%2FSyMg7pSgBOKZ%2B8Gmfe63sMW9bLFS8t%2BAFByX%2FGS2E9TI9M8Lo9GS%2F56gDH%2BUACRzfB0T9XIGc9b%2FAA%2BQMP2218QGOqUBVsX0rGvM1EZZD49sJaMlRg6jtVXe%2Bxc14fpASiQD%2FI6sC9l%2BhfyrkdPcvF4zxA8aWBS%2BgduPGnKqOxo7ylwMncCyODlB5I7DWAg7WSjuTKEMWvvsl5ySNqP77W5fVqgcAwl9Ji9PRgHInw0XqWWu7xtNVaPmXQAfFfqclEhZa1z02LlyLp0%2FPX7gQPBhk345eBgN1mY2mVwnVEI4GpGywecCxRp0&X-Amz-Signature=b49372d7ab0d3ae244c0ed7937e5ae333895ef6a71194b108aa5fb0c27eef296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MPZQO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEsX7cR09kPMChjvnWXJFLkiE470tcJKubRMukKyXVp4AiEAkOeEEjNeMYrOYpsLJFu6DuQziJd2E068I9RDc5j2Zl4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWITExcRWAdpyPuPCrcA518Oi9tjFhnMHhnLHA7q3RzUFtZsnNTwPJBGfbGpTO5lKqirw3Ubmbm%2B24bJYjxR6i2mGXsjzhi8Rwr9wS0Evba2hu9%2BTjCU82%2Fj9Aeh2jsWVsNzTJ2%2F6hJLxwGeQSa97Bx3TarQ667n25B0Jg65pxc0WCD1eGQudLxuy2l1w4oV2Yar7VAjeI4AL57yYIXZuoBKFmkwQKcERnf%2F1htfzuGa9RplTzgdm35WOU%2BkqhuuDfs2%2B8mrJcm6j0lPkq2q5V0DZIjcZFVYgHTbQ6R%2BNmhBTIkp3b7u9DKUoKsuNdrM0VyTcptnZKlHL1jNPc72bqwM16RLcuS1%2BaiusBKbQrqB4sOVSIwhZTmNG%2FksuV6EdjB1RM2b4mRlLF0TlmOdq45qRfrQeodd3ftXoLwWAeN1cCRPdOrTm5NUlxBZerpyT7iPpM0MqKL2CK%2FDLAPEXOtLytgre34WZOr3pzwofzS5QU0teifEMmg7zDkn%2B%2BKq0yek5qH4%2BBgXCNWOf81N51rnVgPjPHwbIcDwjd0j%2F7Pne98XwEXluyFjoEOOFi%2FSyMg7pSgBOKZ%2B8Gmfe63sMW9bLFS8t%2BAFByX%2FGS2E9TI9M8Lo9GS%2F56gDH%2BUACRzfB0T9XIGc9b%2FAA%2BQMP2218QGOqUBVsX0rGvM1EZZD49sJaMlRg6jtVXe%2Bxc14fpASiQD%2FI6sC9l%2BhfyrkdPcvF4zxA8aWBS%2BgduPGnKqOxo7ylwMncCyODlB5I7DWAg7WSjuTKEMWvvsl5ySNqP77W5fVqgcAwl9Ji9PRgHInw0XqWWu7xtNVaPmXQAfFfqclEhZa1z02LlyLp0%2FPX7gQPBhk345eBgN1mY2mVwnVEI4GpGywecCxRp0&X-Amz-Signature=5e3e026574e0a27b7edef0de197f6143f09cf0e13d29f72f38d998f83f0c11df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MPZQO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEsX7cR09kPMChjvnWXJFLkiE470tcJKubRMukKyXVp4AiEAkOeEEjNeMYrOYpsLJFu6DuQziJd2E068I9RDc5j2Zl4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWITExcRWAdpyPuPCrcA518Oi9tjFhnMHhnLHA7q3RzUFtZsnNTwPJBGfbGpTO5lKqirw3Ubmbm%2B24bJYjxR6i2mGXsjzhi8Rwr9wS0Evba2hu9%2BTjCU82%2Fj9Aeh2jsWVsNzTJ2%2F6hJLxwGeQSa97Bx3TarQ667n25B0Jg65pxc0WCD1eGQudLxuy2l1w4oV2Yar7VAjeI4AL57yYIXZuoBKFmkwQKcERnf%2F1htfzuGa9RplTzgdm35WOU%2BkqhuuDfs2%2B8mrJcm6j0lPkq2q5V0DZIjcZFVYgHTbQ6R%2BNmhBTIkp3b7u9DKUoKsuNdrM0VyTcptnZKlHL1jNPc72bqwM16RLcuS1%2BaiusBKbQrqB4sOVSIwhZTmNG%2FksuV6EdjB1RM2b4mRlLF0TlmOdq45qRfrQeodd3ftXoLwWAeN1cCRPdOrTm5NUlxBZerpyT7iPpM0MqKL2CK%2FDLAPEXOtLytgre34WZOr3pzwofzS5QU0teifEMmg7zDkn%2B%2BKq0yek5qH4%2BBgXCNWOf81N51rnVgPjPHwbIcDwjd0j%2F7Pne98XwEXluyFjoEOOFi%2FSyMg7pSgBOKZ%2B8Gmfe63sMW9bLFS8t%2BAFByX%2FGS2E9TI9M8Lo9GS%2F56gDH%2BUACRzfB0T9XIGc9b%2FAA%2BQMP2218QGOqUBVsX0rGvM1EZZD49sJaMlRg6jtVXe%2Bxc14fpASiQD%2FI6sC9l%2BhfyrkdPcvF4zxA8aWBS%2BgduPGnKqOxo7ylwMncCyODlB5I7DWAg7WSjuTKEMWvvsl5ySNqP77W5fVqgcAwl9Ji9PRgHInw0XqWWu7xtNVaPmXQAfFfqclEhZa1z02LlyLp0%2FPX7gQPBhk345eBgN1mY2mVwnVEI4GpGywecCxRp0&X-Amz-Signature=220bae3ac6d0b2dc0b25d412e86716cfd37bf337c769ee6547fd9a860ce4c4ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MPZQO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEsX7cR09kPMChjvnWXJFLkiE470tcJKubRMukKyXVp4AiEAkOeEEjNeMYrOYpsLJFu6DuQziJd2E068I9RDc5j2Zl4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWITExcRWAdpyPuPCrcA518Oi9tjFhnMHhnLHA7q3RzUFtZsnNTwPJBGfbGpTO5lKqirw3Ubmbm%2B24bJYjxR6i2mGXsjzhi8Rwr9wS0Evba2hu9%2BTjCU82%2Fj9Aeh2jsWVsNzTJ2%2F6hJLxwGeQSa97Bx3TarQ667n25B0Jg65pxc0WCD1eGQudLxuy2l1w4oV2Yar7VAjeI4AL57yYIXZuoBKFmkwQKcERnf%2F1htfzuGa9RplTzgdm35WOU%2BkqhuuDfs2%2B8mrJcm6j0lPkq2q5V0DZIjcZFVYgHTbQ6R%2BNmhBTIkp3b7u9DKUoKsuNdrM0VyTcptnZKlHL1jNPc72bqwM16RLcuS1%2BaiusBKbQrqB4sOVSIwhZTmNG%2FksuV6EdjB1RM2b4mRlLF0TlmOdq45qRfrQeodd3ftXoLwWAeN1cCRPdOrTm5NUlxBZerpyT7iPpM0MqKL2CK%2FDLAPEXOtLytgre34WZOr3pzwofzS5QU0teifEMmg7zDkn%2B%2BKq0yek5qH4%2BBgXCNWOf81N51rnVgPjPHwbIcDwjd0j%2F7Pne98XwEXluyFjoEOOFi%2FSyMg7pSgBOKZ%2B8Gmfe63sMW9bLFS8t%2BAFByX%2FGS2E9TI9M8Lo9GS%2F56gDH%2BUACRzfB0T9XIGc9b%2FAA%2BQMP2218QGOqUBVsX0rGvM1EZZD49sJaMlRg6jtVXe%2Bxc14fpASiQD%2FI6sC9l%2BhfyrkdPcvF4zxA8aWBS%2BgduPGnKqOxo7ylwMncCyODlB5I7DWAg7WSjuTKEMWvvsl5ySNqP77W5fVqgcAwl9Ji9PRgHInw0XqWWu7xtNVaPmXQAfFfqclEhZa1z02LlyLp0%2FPX7gQPBhk345eBgN1mY2mVwnVEI4GpGywecCxRp0&X-Amz-Signature=e702a75065204012c0f926bd8658e37b0fa4ffe5278229c9f511d529acdd0334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MPZQO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEsX7cR09kPMChjvnWXJFLkiE470tcJKubRMukKyXVp4AiEAkOeEEjNeMYrOYpsLJFu6DuQziJd2E068I9RDc5j2Zl4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWITExcRWAdpyPuPCrcA518Oi9tjFhnMHhnLHA7q3RzUFtZsnNTwPJBGfbGpTO5lKqirw3Ubmbm%2B24bJYjxR6i2mGXsjzhi8Rwr9wS0Evba2hu9%2BTjCU82%2Fj9Aeh2jsWVsNzTJ2%2F6hJLxwGeQSa97Bx3TarQ667n25B0Jg65pxc0WCD1eGQudLxuy2l1w4oV2Yar7VAjeI4AL57yYIXZuoBKFmkwQKcERnf%2F1htfzuGa9RplTzgdm35WOU%2BkqhuuDfs2%2B8mrJcm6j0lPkq2q5V0DZIjcZFVYgHTbQ6R%2BNmhBTIkp3b7u9DKUoKsuNdrM0VyTcptnZKlHL1jNPc72bqwM16RLcuS1%2BaiusBKbQrqB4sOVSIwhZTmNG%2FksuV6EdjB1RM2b4mRlLF0TlmOdq45qRfrQeodd3ftXoLwWAeN1cCRPdOrTm5NUlxBZerpyT7iPpM0MqKL2CK%2FDLAPEXOtLytgre34WZOr3pzwofzS5QU0teifEMmg7zDkn%2B%2BKq0yek5qH4%2BBgXCNWOf81N51rnVgPjPHwbIcDwjd0j%2F7Pne98XwEXluyFjoEOOFi%2FSyMg7pSgBOKZ%2B8Gmfe63sMW9bLFS8t%2BAFByX%2FGS2E9TI9M8Lo9GS%2F56gDH%2BUACRzfB0T9XIGc9b%2FAA%2BQMP2218QGOqUBVsX0rGvM1EZZD49sJaMlRg6jtVXe%2Bxc14fpASiQD%2FI6sC9l%2BhfyrkdPcvF4zxA8aWBS%2BgduPGnKqOxo7ylwMncCyODlB5I7DWAg7WSjuTKEMWvvsl5ySNqP77W5fVqgcAwl9Ji9PRgHInw0XqWWu7xtNVaPmXQAfFfqclEhZa1z02LlyLp0%2FPX7gQPBhk345eBgN1mY2mVwnVEI4GpGywecCxRp0&X-Amz-Signature=104ef3f407e2f818b384ef2a61aebbba02e5027f6e283af25985ee183b84b329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MPZQO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEsX7cR09kPMChjvnWXJFLkiE470tcJKubRMukKyXVp4AiEAkOeEEjNeMYrOYpsLJFu6DuQziJd2E068I9RDc5j2Zl4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWITExcRWAdpyPuPCrcA518Oi9tjFhnMHhnLHA7q3RzUFtZsnNTwPJBGfbGpTO5lKqirw3Ubmbm%2B24bJYjxR6i2mGXsjzhi8Rwr9wS0Evba2hu9%2BTjCU82%2Fj9Aeh2jsWVsNzTJ2%2F6hJLxwGeQSa97Bx3TarQ667n25B0Jg65pxc0WCD1eGQudLxuy2l1w4oV2Yar7VAjeI4AL57yYIXZuoBKFmkwQKcERnf%2F1htfzuGa9RplTzgdm35WOU%2BkqhuuDfs2%2B8mrJcm6j0lPkq2q5V0DZIjcZFVYgHTbQ6R%2BNmhBTIkp3b7u9DKUoKsuNdrM0VyTcptnZKlHL1jNPc72bqwM16RLcuS1%2BaiusBKbQrqB4sOVSIwhZTmNG%2FksuV6EdjB1RM2b4mRlLF0TlmOdq45qRfrQeodd3ftXoLwWAeN1cCRPdOrTm5NUlxBZerpyT7iPpM0MqKL2CK%2FDLAPEXOtLytgre34WZOr3pzwofzS5QU0teifEMmg7zDkn%2B%2BKq0yek5qH4%2BBgXCNWOf81N51rnVgPjPHwbIcDwjd0j%2F7Pne98XwEXluyFjoEOOFi%2FSyMg7pSgBOKZ%2B8Gmfe63sMW9bLFS8t%2BAFByX%2FGS2E9TI9M8Lo9GS%2F56gDH%2BUACRzfB0T9XIGc9b%2FAA%2BQMP2218QGOqUBVsX0rGvM1EZZD49sJaMlRg6jtVXe%2Bxc14fpASiQD%2FI6sC9l%2BhfyrkdPcvF4zxA8aWBS%2BgduPGnKqOxo7ylwMncCyODlB5I7DWAg7WSjuTKEMWvvsl5ySNqP77W5fVqgcAwl9Ji9PRgHInw0XqWWu7xtNVaPmXQAfFfqclEhZa1z02LlyLp0%2FPX7gQPBhk345eBgN1mY2mVwnVEI4GpGywecCxRp0&X-Amz-Signature=5e3e026574e0a27b7edef0de197f6143f09cf0e13d29f72f38d998f83f0c11df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MPZQO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEsX7cR09kPMChjvnWXJFLkiE470tcJKubRMukKyXVp4AiEAkOeEEjNeMYrOYpsLJFu6DuQziJd2E068I9RDc5j2Zl4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWITExcRWAdpyPuPCrcA518Oi9tjFhnMHhnLHA7q3RzUFtZsnNTwPJBGfbGpTO5lKqirw3Ubmbm%2B24bJYjxR6i2mGXsjzhi8Rwr9wS0Evba2hu9%2BTjCU82%2Fj9Aeh2jsWVsNzTJ2%2F6hJLxwGeQSa97Bx3TarQ667n25B0Jg65pxc0WCD1eGQudLxuy2l1w4oV2Yar7VAjeI4AL57yYIXZuoBKFmkwQKcERnf%2F1htfzuGa9RplTzgdm35WOU%2BkqhuuDfs2%2B8mrJcm6j0lPkq2q5V0DZIjcZFVYgHTbQ6R%2BNmhBTIkp3b7u9DKUoKsuNdrM0VyTcptnZKlHL1jNPc72bqwM16RLcuS1%2BaiusBKbQrqB4sOVSIwhZTmNG%2FksuV6EdjB1RM2b4mRlLF0TlmOdq45qRfrQeodd3ftXoLwWAeN1cCRPdOrTm5NUlxBZerpyT7iPpM0MqKL2CK%2FDLAPEXOtLytgre34WZOr3pzwofzS5QU0teifEMmg7zDkn%2B%2BKq0yek5qH4%2BBgXCNWOf81N51rnVgPjPHwbIcDwjd0j%2F7Pne98XwEXluyFjoEOOFi%2FSyMg7pSgBOKZ%2B8Gmfe63sMW9bLFS8t%2BAFByX%2FGS2E9TI9M8Lo9GS%2F56gDH%2BUACRzfB0T9XIGc9b%2FAA%2BQMP2218QGOqUBVsX0rGvM1EZZD49sJaMlRg6jtVXe%2Bxc14fpASiQD%2FI6sC9l%2BhfyrkdPcvF4zxA8aWBS%2BgduPGnKqOxo7ylwMncCyODlB5I7DWAg7WSjuTKEMWvvsl5ySNqP77W5fVqgcAwl9Ji9PRgHInw0XqWWu7xtNVaPmXQAfFfqclEhZa1z02LlyLp0%2FPX7gQPBhk345eBgN1mY2mVwnVEI4GpGywecCxRp0&X-Amz-Signature=04ba8240036629d6f9d9ee77d501f8d526535b67a4a5ff68a5bca40953b538cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MPZQO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEsX7cR09kPMChjvnWXJFLkiE470tcJKubRMukKyXVp4AiEAkOeEEjNeMYrOYpsLJFu6DuQziJd2E068I9RDc5j2Zl4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWITExcRWAdpyPuPCrcA518Oi9tjFhnMHhnLHA7q3RzUFtZsnNTwPJBGfbGpTO5lKqirw3Ubmbm%2B24bJYjxR6i2mGXsjzhi8Rwr9wS0Evba2hu9%2BTjCU82%2Fj9Aeh2jsWVsNzTJ2%2F6hJLxwGeQSa97Bx3TarQ667n25B0Jg65pxc0WCD1eGQudLxuy2l1w4oV2Yar7VAjeI4AL57yYIXZuoBKFmkwQKcERnf%2F1htfzuGa9RplTzgdm35WOU%2BkqhuuDfs2%2B8mrJcm6j0lPkq2q5V0DZIjcZFVYgHTbQ6R%2BNmhBTIkp3b7u9DKUoKsuNdrM0VyTcptnZKlHL1jNPc72bqwM16RLcuS1%2BaiusBKbQrqB4sOVSIwhZTmNG%2FksuV6EdjB1RM2b4mRlLF0TlmOdq45qRfrQeodd3ftXoLwWAeN1cCRPdOrTm5NUlxBZerpyT7iPpM0MqKL2CK%2FDLAPEXOtLytgre34WZOr3pzwofzS5QU0teifEMmg7zDkn%2B%2BKq0yek5qH4%2BBgXCNWOf81N51rnVgPjPHwbIcDwjd0j%2F7Pne98XwEXluyFjoEOOFi%2FSyMg7pSgBOKZ%2B8Gmfe63sMW9bLFS8t%2BAFByX%2FGS2E9TI9M8Lo9GS%2F56gDH%2BUACRzfB0T9XIGc9b%2FAA%2BQMP2218QGOqUBVsX0rGvM1EZZD49sJaMlRg6jtVXe%2Bxc14fpASiQD%2FI6sC9l%2BhfyrkdPcvF4zxA8aWBS%2BgduPGnKqOxo7ylwMncCyODlB5I7DWAg7WSjuTKEMWvvsl5ySNqP77W5fVqgcAwl9Ji9PRgHInw0XqWWu7xtNVaPmXQAfFfqclEhZa1z02LlyLp0%2FPX7gQPBhk345eBgN1mY2mVwnVEI4GpGywecCxRp0&X-Amz-Signature=4320ea0f11452451d14bba7aeb897247ce51f170392991b959c9c8061450d11b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MPZQO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEsX7cR09kPMChjvnWXJFLkiE470tcJKubRMukKyXVp4AiEAkOeEEjNeMYrOYpsLJFu6DuQziJd2E068I9RDc5j2Zl4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEWITExcRWAdpyPuPCrcA518Oi9tjFhnMHhnLHA7q3RzUFtZsnNTwPJBGfbGpTO5lKqirw3Ubmbm%2B24bJYjxR6i2mGXsjzhi8Rwr9wS0Evba2hu9%2BTjCU82%2Fj9Aeh2jsWVsNzTJ2%2F6hJLxwGeQSa97Bx3TarQ667n25B0Jg65pxc0WCD1eGQudLxuy2l1w4oV2Yar7VAjeI4AL57yYIXZuoBKFmkwQKcERnf%2F1htfzuGa9RplTzgdm35WOU%2BkqhuuDfs2%2B8mrJcm6j0lPkq2q5V0DZIjcZFVYgHTbQ6R%2BNmhBTIkp3b7u9DKUoKsuNdrM0VyTcptnZKlHL1jNPc72bqwM16RLcuS1%2BaiusBKbQrqB4sOVSIwhZTmNG%2FksuV6EdjB1RM2b4mRlLF0TlmOdq45qRfrQeodd3ftXoLwWAeN1cCRPdOrTm5NUlxBZerpyT7iPpM0MqKL2CK%2FDLAPEXOtLytgre34WZOr3pzwofzS5QU0teifEMmg7zDkn%2B%2BKq0yek5qH4%2BBgXCNWOf81N51rnVgPjPHwbIcDwjd0j%2F7Pne98XwEXluyFjoEOOFi%2FSyMg7pSgBOKZ%2B8Gmfe63sMW9bLFS8t%2BAFByX%2FGS2E9TI9M8Lo9GS%2F56gDH%2BUACRzfB0T9XIGc9b%2FAA%2BQMP2218QGOqUBVsX0rGvM1EZZD49sJaMlRg6jtVXe%2Bxc14fpASiQD%2FI6sC9l%2BhfyrkdPcvF4zxA8aWBS%2BgduPGnKqOxo7ylwMncCyODlB5I7DWAg7WSjuTKEMWvvsl5ySNqP77W5fVqgcAwl9Ji9PRgHInw0XqWWu7xtNVaPmXQAfFfqclEhZa1z02LlyLp0%2FPX7gQPBhk345eBgN1mY2mVwnVEI4GpGywecCxRp0&X-Amz-Signature=b18a9e066e1c76f25b26bede66e2c23ef8fa603b5027c5ee21a1ea5feaf9d430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
