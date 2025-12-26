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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFVA6KS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDmmAsthKm63qjI7ljfZAHEJ6TXjvN4qRb11ato6ljZrwIgHmGprwFHFxToT84MMa8CzoSywCd5PC9dj4CfcK5xNF8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLOjB5daz565CccgyCrcAz8x2NCQpavKML4cex9IYRv%2FyfN0gfVq%2Fyrr%2BM%2FFoa2aB4lQYVGn0dtsZUih3Tzj%2FdXsFqmYJQtUutoVC0FIRiVDEf8qlGKSqce%2FH%2BKR5gfUV5nsYld4PjUEqlF9tGZ4eHAGtvnhQbUZY9N0f%2BRgH0345DYqPzn%2F76baj4e90EUVqze35Qfy%2BW7YRpXG7EwBCj7La%2BHoea3SlhCyyTa2Y77BWhJpSjwSsrjtEHVLjc6Had53dJFE4%2FjUrGR1Gm6beHgENcwkRZjIxGkcMzPLoBLtcr%2FFmenqKZLaPZ1Nc4sb9CeKpbGdRXOLpplGYeS1TqY354AUFNE8JnmKhUSjlolgPj%2FWWd1Y%2FNFOOOUUk9bEdbVmJuCME6WOoExZepxMFyBaFncBruUgzoqgEeGA%2FKDvzGxXSQzIfdCaVM1kW%2BoK22W0ldREhtFVXV1spHJ8aE5JGilGuhMFTyOUtGdp%2BNhpH1wQrw0sSBetbpGhnjgRF3ov5GDSV7L0NV0LCl3eBJNWmw3%2BJoRnfuZ3RiiqvjqNk0VLLCpOuI7dNGMd0J1OktO5TdmxRCFno%2FAZXYvLlI8zBKIx8HdjuYJZ8vHV7UklQCBXrjRT6aFxd5gtLCnN9dW7qFQ6lT%2BUFLmsMJGstsoGOqUBob3DYZ7atA%2FA7Lz%2FEL6OtXZV%2FG1T9HMGz81JTvPVOheza%2BrCF7N%2F%2FK%2F5H4ib9wJM1RWDwnN2u%2BiUIjbRW2AxgOgqJg96KWY9XjBrfRj5eq7Z3fR0tUHZp7mqD6wvdK7USrL%2F2p6epV8VfvUhXB14yIP0%2FheG%2BVwJFgcaBMPHfbMWvBgHz4c5sAX3efLdaFtF%2FUKG2CAx%2BEo5bCLBVhXuQRnbh9Gw&X-Amz-Signature=d4babc9987add320c700f01fb9f13dfe50704eda0b04922c50cfa307708f8888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFVA6KS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDmmAsthKm63qjI7ljfZAHEJ6TXjvN4qRb11ato6ljZrwIgHmGprwFHFxToT84MMa8CzoSywCd5PC9dj4CfcK5xNF8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLOjB5daz565CccgyCrcAz8x2NCQpavKML4cex9IYRv%2FyfN0gfVq%2Fyrr%2BM%2FFoa2aB4lQYVGn0dtsZUih3Tzj%2FdXsFqmYJQtUutoVC0FIRiVDEf8qlGKSqce%2FH%2BKR5gfUV5nsYld4PjUEqlF9tGZ4eHAGtvnhQbUZY9N0f%2BRgH0345DYqPzn%2F76baj4e90EUVqze35Qfy%2BW7YRpXG7EwBCj7La%2BHoea3SlhCyyTa2Y77BWhJpSjwSsrjtEHVLjc6Had53dJFE4%2FjUrGR1Gm6beHgENcwkRZjIxGkcMzPLoBLtcr%2FFmenqKZLaPZ1Nc4sb9CeKpbGdRXOLpplGYeS1TqY354AUFNE8JnmKhUSjlolgPj%2FWWd1Y%2FNFOOOUUk9bEdbVmJuCME6WOoExZepxMFyBaFncBruUgzoqgEeGA%2FKDvzGxXSQzIfdCaVM1kW%2BoK22W0ldREhtFVXV1spHJ8aE5JGilGuhMFTyOUtGdp%2BNhpH1wQrw0sSBetbpGhnjgRF3ov5GDSV7L0NV0LCl3eBJNWmw3%2BJoRnfuZ3RiiqvjqNk0VLLCpOuI7dNGMd0J1OktO5TdmxRCFno%2FAZXYvLlI8zBKIx8HdjuYJZ8vHV7UklQCBXrjRT6aFxd5gtLCnN9dW7qFQ6lT%2BUFLmsMJGstsoGOqUBob3DYZ7atA%2FA7Lz%2FEL6OtXZV%2FG1T9HMGz81JTvPVOheza%2BrCF7N%2F%2FK%2F5H4ib9wJM1RWDwnN2u%2BiUIjbRW2AxgOgqJg96KWY9XjBrfRj5eq7Z3fR0tUHZp7mqD6wvdK7USrL%2F2p6epV8VfvUhXB14yIP0%2FheG%2BVwJFgcaBMPHfbMWvBgHz4c5sAX3efLdaFtF%2FUKG2CAx%2BEo5bCLBVhXuQRnbh9Gw&X-Amz-Signature=8f24d3430099166b3a578ddfed8b87e28543a089e99baab572516b62bcaeb6a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFVA6KS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDmmAsthKm63qjI7ljfZAHEJ6TXjvN4qRb11ato6ljZrwIgHmGprwFHFxToT84MMa8CzoSywCd5PC9dj4CfcK5xNF8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLOjB5daz565CccgyCrcAz8x2NCQpavKML4cex9IYRv%2FyfN0gfVq%2Fyrr%2BM%2FFoa2aB4lQYVGn0dtsZUih3Tzj%2FdXsFqmYJQtUutoVC0FIRiVDEf8qlGKSqce%2FH%2BKR5gfUV5nsYld4PjUEqlF9tGZ4eHAGtvnhQbUZY9N0f%2BRgH0345DYqPzn%2F76baj4e90EUVqze35Qfy%2BW7YRpXG7EwBCj7La%2BHoea3SlhCyyTa2Y77BWhJpSjwSsrjtEHVLjc6Had53dJFE4%2FjUrGR1Gm6beHgENcwkRZjIxGkcMzPLoBLtcr%2FFmenqKZLaPZ1Nc4sb9CeKpbGdRXOLpplGYeS1TqY354AUFNE8JnmKhUSjlolgPj%2FWWd1Y%2FNFOOOUUk9bEdbVmJuCME6WOoExZepxMFyBaFncBruUgzoqgEeGA%2FKDvzGxXSQzIfdCaVM1kW%2BoK22W0ldREhtFVXV1spHJ8aE5JGilGuhMFTyOUtGdp%2BNhpH1wQrw0sSBetbpGhnjgRF3ov5GDSV7L0NV0LCl3eBJNWmw3%2BJoRnfuZ3RiiqvjqNk0VLLCpOuI7dNGMd0J1OktO5TdmxRCFno%2FAZXYvLlI8zBKIx8HdjuYJZ8vHV7UklQCBXrjRT6aFxd5gtLCnN9dW7qFQ6lT%2BUFLmsMJGstsoGOqUBob3DYZ7atA%2FA7Lz%2FEL6OtXZV%2FG1T9HMGz81JTvPVOheza%2BrCF7N%2F%2FK%2F5H4ib9wJM1RWDwnN2u%2BiUIjbRW2AxgOgqJg96KWY9XjBrfRj5eq7Z3fR0tUHZp7mqD6wvdK7USrL%2F2p6epV8VfvUhXB14yIP0%2FheG%2BVwJFgcaBMPHfbMWvBgHz4c5sAX3efLdaFtF%2FUKG2CAx%2BEo5bCLBVhXuQRnbh9Gw&X-Amz-Signature=7114a2904e666918066dde3f0b0bf287321af7a86b1c274773dfffb9e1e549d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFVA6KS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDmmAsthKm63qjI7ljfZAHEJ6TXjvN4qRb11ato6ljZrwIgHmGprwFHFxToT84MMa8CzoSywCd5PC9dj4CfcK5xNF8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLOjB5daz565CccgyCrcAz8x2NCQpavKML4cex9IYRv%2FyfN0gfVq%2Fyrr%2BM%2FFoa2aB4lQYVGn0dtsZUih3Tzj%2FdXsFqmYJQtUutoVC0FIRiVDEf8qlGKSqce%2FH%2BKR5gfUV5nsYld4PjUEqlF9tGZ4eHAGtvnhQbUZY9N0f%2BRgH0345DYqPzn%2F76baj4e90EUVqze35Qfy%2BW7YRpXG7EwBCj7La%2BHoea3SlhCyyTa2Y77BWhJpSjwSsrjtEHVLjc6Had53dJFE4%2FjUrGR1Gm6beHgENcwkRZjIxGkcMzPLoBLtcr%2FFmenqKZLaPZ1Nc4sb9CeKpbGdRXOLpplGYeS1TqY354AUFNE8JnmKhUSjlolgPj%2FWWd1Y%2FNFOOOUUk9bEdbVmJuCME6WOoExZepxMFyBaFncBruUgzoqgEeGA%2FKDvzGxXSQzIfdCaVM1kW%2BoK22W0ldREhtFVXV1spHJ8aE5JGilGuhMFTyOUtGdp%2BNhpH1wQrw0sSBetbpGhnjgRF3ov5GDSV7L0NV0LCl3eBJNWmw3%2BJoRnfuZ3RiiqvjqNk0VLLCpOuI7dNGMd0J1OktO5TdmxRCFno%2FAZXYvLlI8zBKIx8HdjuYJZ8vHV7UklQCBXrjRT6aFxd5gtLCnN9dW7qFQ6lT%2BUFLmsMJGstsoGOqUBob3DYZ7atA%2FA7Lz%2FEL6OtXZV%2FG1T9HMGz81JTvPVOheza%2BrCF7N%2F%2FK%2F5H4ib9wJM1RWDwnN2u%2BiUIjbRW2AxgOgqJg96KWY9XjBrfRj5eq7Z3fR0tUHZp7mqD6wvdK7USrL%2F2p6epV8VfvUhXB14yIP0%2FheG%2BVwJFgcaBMPHfbMWvBgHz4c5sAX3efLdaFtF%2FUKG2CAx%2BEo5bCLBVhXuQRnbh9Gw&X-Amz-Signature=f5b1b20d0402add381acb591f57b4031f6e48f0449441e958a4bbe4f257a28d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFVA6KS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDmmAsthKm63qjI7ljfZAHEJ6TXjvN4qRb11ato6ljZrwIgHmGprwFHFxToT84MMa8CzoSywCd5PC9dj4CfcK5xNF8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLOjB5daz565CccgyCrcAz8x2NCQpavKML4cex9IYRv%2FyfN0gfVq%2Fyrr%2BM%2FFoa2aB4lQYVGn0dtsZUih3Tzj%2FdXsFqmYJQtUutoVC0FIRiVDEf8qlGKSqce%2FH%2BKR5gfUV5nsYld4PjUEqlF9tGZ4eHAGtvnhQbUZY9N0f%2BRgH0345DYqPzn%2F76baj4e90EUVqze35Qfy%2BW7YRpXG7EwBCj7La%2BHoea3SlhCyyTa2Y77BWhJpSjwSsrjtEHVLjc6Had53dJFE4%2FjUrGR1Gm6beHgENcwkRZjIxGkcMzPLoBLtcr%2FFmenqKZLaPZ1Nc4sb9CeKpbGdRXOLpplGYeS1TqY354AUFNE8JnmKhUSjlolgPj%2FWWd1Y%2FNFOOOUUk9bEdbVmJuCME6WOoExZepxMFyBaFncBruUgzoqgEeGA%2FKDvzGxXSQzIfdCaVM1kW%2BoK22W0ldREhtFVXV1spHJ8aE5JGilGuhMFTyOUtGdp%2BNhpH1wQrw0sSBetbpGhnjgRF3ov5GDSV7L0NV0LCl3eBJNWmw3%2BJoRnfuZ3RiiqvjqNk0VLLCpOuI7dNGMd0J1OktO5TdmxRCFno%2FAZXYvLlI8zBKIx8HdjuYJZ8vHV7UklQCBXrjRT6aFxd5gtLCnN9dW7qFQ6lT%2BUFLmsMJGstsoGOqUBob3DYZ7atA%2FA7Lz%2FEL6OtXZV%2FG1T9HMGz81JTvPVOheza%2BrCF7N%2F%2FK%2F5H4ib9wJM1RWDwnN2u%2BiUIjbRW2AxgOgqJg96KWY9XjBrfRj5eq7Z3fR0tUHZp7mqD6wvdK7USrL%2F2p6epV8VfvUhXB14yIP0%2FheG%2BVwJFgcaBMPHfbMWvBgHz4c5sAX3efLdaFtF%2FUKG2CAx%2BEo5bCLBVhXuQRnbh9Gw&X-Amz-Signature=42fd969fa6c8b85751cf738ba69802f1f8b66701d2c1cb4f8ec4e25745328784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFVA6KS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDmmAsthKm63qjI7ljfZAHEJ6TXjvN4qRb11ato6ljZrwIgHmGprwFHFxToT84MMa8CzoSywCd5PC9dj4CfcK5xNF8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLOjB5daz565CccgyCrcAz8x2NCQpavKML4cex9IYRv%2FyfN0gfVq%2Fyrr%2BM%2FFoa2aB4lQYVGn0dtsZUih3Tzj%2FdXsFqmYJQtUutoVC0FIRiVDEf8qlGKSqce%2FH%2BKR5gfUV5nsYld4PjUEqlF9tGZ4eHAGtvnhQbUZY9N0f%2BRgH0345DYqPzn%2F76baj4e90EUVqze35Qfy%2BW7YRpXG7EwBCj7La%2BHoea3SlhCyyTa2Y77BWhJpSjwSsrjtEHVLjc6Had53dJFE4%2FjUrGR1Gm6beHgENcwkRZjIxGkcMzPLoBLtcr%2FFmenqKZLaPZ1Nc4sb9CeKpbGdRXOLpplGYeS1TqY354AUFNE8JnmKhUSjlolgPj%2FWWd1Y%2FNFOOOUUk9bEdbVmJuCME6WOoExZepxMFyBaFncBruUgzoqgEeGA%2FKDvzGxXSQzIfdCaVM1kW%2BoK22W0ldREhtFVXV1spHJ8aE5JGilGuhMFTyOUtGdp%2BNhpH1wQrw0sSBetbpGhnjgRF3ov5GDSV7L0NV0LCl3eBJNWmw3%2BJoRnfuZ3RiiqvjqNk0VLLCpOuI7dNGMd0J1OktO5TdmxRCFno%2FAZXYvLlI8zBKIx8HdjuYJZ8vHV7UklQCBXrjRT6aFxd5gtLCnN9dW7qFQ6lT%2BUFLmsMJGstsoGOqUBob3DYZ7atA%2FA7Lz%2FEL6OtXZV%2FG1T9HMGz81JTvPVOheza%2BrCF7N%2F%2FK%2F5H4ib9wJM1RWDwnN2u%2BiUIjbRW2AxgOgqJg96KWY9XjBrfRj5eq7Z3fR0tUHZp7mqD6wvdK7USrL%2F2p6epV8VfvUhXB14yIP0%2FheG%2BVwJFgcaBMPHfbMWvBgHz4c5sAX3efLdaFtF%2FUKG2CAx%2BEo5bCLBVhXuQRnbh9Gw&X-Amz-Signature=19b381eea25d5e2e288dc39f721b4b6e1e4b89a1422e28f00eee26d94efaa942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFVA6KS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDmmAsthKm63qjI7ljfZAHEJ6TXjvN4qRb11ato6ljZrwIgHmGprwFHFxToT84MMa8CzoSywCd5PC9dj4CfcK5xNF8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLOjB5daz565CccgyCrcAz8x2NCQpavKML4cex9IYRv%2FyfN0gfVq%2Fyrr%2BM%2FFoa2aB4lQYVGn0dtsZUih3Tzj%2FdXsFqmYJQtUutoVC0FIRiVDEf8qlGKSqce%2FH%2BKR5gfUV5nsYld4PjUEqlF9tGZ4eHAGtvnhQbUZY9N0f%2BRgH0345DYqPzn%2F76baj4e90EUVqze35Qfy%2BW7YRpXG7EwBCj7La%2BHoea3SlhCyyTa2Y77BWhJpSjwSsrjtEHVLjc6Had53dJFE4%2FjUrGR1Gm6beHgENcwkRZjIxGkcMzPLoBLtcr%2FFmenqKZLaPZ1Nc4sb9CeKpbGdRXOLpplGYeS1TqY354AUFNE8JnmKhUSjlolgPj%2FWWd1Y%2FNFOOOUUk9bEdbVmJuCME6WOoExZepxMFyBaFncBruUgzoqgEeGA%2FKDvzGxXSQzIfdCaVM1kW%2BoK22W0ldREhtFVXV1spHJ8aE5JGilGuhMFTyOUtGdp%2BNhpH1wQrw0sSBetbpGhnjgRF3ov5GDSV7L0NV0LCl3eBJNWmw3%2BJoRnfuZ3RiiqvjqNk0VLLCpOuI7dNGMd0J1OktO5TdmxRCFno%2FAZXYvLlI8zBKIx8HdjuYJZ8vHV7UklQCBXrjRT6aFxd5gtLCnN9dW7qFQ6lT%2BUFLmsMJGstsoGOqUBob3DYZ7atA%2FA7Lz%2FEL6OtXZV%2FG1T9HMGz81JTvPVOheza%2BrCF7N%2F%2FK%2F5H4ib9wJM1RWDwnN2u%2BiUIjbRW2AxgOgqJg96KWY9XjBrfRj5eq7Z3fR0tUHZp7mqD6wvdK7USrL%2F2p6epV8VfvUhXB14yIP0%2FheG%2BVwJFgcaBMPHfbMWvBgHz4c5sAX3efLdaFtF%2FUKG2CAx%2BEo5bCLBVhXuQRnbh9Gw&X-Amz-Signature=3b73ed4315ba11c949e7d590fe0c1400ac3d4fae3d098feef4083ba0e33e8179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFVA6KS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDmmAsthKm63qjI7ljfZAHEJ6TXjvN4qRb11ato6ljZrwIgHmGprwFHFxToT84MMa8CzoSywCd5PC9dj4CfcK5xNF8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLOjB5daz565CccgyCrcAz8x2NCQpavKML4cex9IYRv%2FyfN0gfVq%2Fyrr%2BM%2FFoa2aB4lQYVGn0dtsZUih3Tzj%2FdXsFqmYJQtUutoVC0FIRiVDEf8qlGKSqce%2FH%2BKR5gfUV5nsYld4PjUEqlF9tGZ4eHAGtvnhQbUZY9N0f%2BRgH0345DYqPzn%2F76baj4e90EUVqze35Qfy%2BW7YRpXG7EwBCj7La%2BHoea3SlhCyyTa2Y77BWhJpSjwSsrjtEHVLjc6Had53dJFE4%2FjUrGR1Gm6beHgENcwkRZjIxGkcMzPLoBLtcr%2FFmenqKZLaPZ1Nc4sb9CeKpbGdRXOLpplGYeS1TqY354AUFNE8JnmKhUSjlolgPj%2FWWd1Y%2FNFOOOUUk9bEdbVmJuCME6WOoExZepxMFyBaFncBruUgzoqgEeGA%2FKDvzGxXSQzIfdCaVM1kW%2BoK22W0ldREhtFVXV1spHJ8aE5JGilGuhMFTyOUtGdp%2BNhpH1wQrw0sSBetbpGhnjgRF3ov5GDSV7L0NV0LCl3eBJNWmw3%2BJoRnfuZ3RiiqvjqNk0VLLCpOuI7dNGMd0J1OktO5TdmxRCFno%2FAZXYvLlI8zBKIx8HdjuYJZ8vHV7UklQCBXrjRT6aFxd5gtLCnN9dW7qFQ6lT%2BUFLmsMJGstsoGOqUBob3DYZ7atA%2FA7Lz%2FEL6OtXZV%2FG1T9HMGz81JTvPVOheza%2BrCF7N%2F%2FK%2F5H4ib9wJM1RWDwnN2u%2BiUIjbRW2AxgOgqJg96KWY9XjBrfRj5eq7Z3fR0tUHZp7mqD6wvdK7USrL%2F2p6epV8VfvUhXB14yIP0%2FheG%2BVwJFgcaBMPHfbMWvBgHz4c5sAX3efLdaFtF%2FUKG2CAx%2BEo5bCLBVhXuQRnbh9Gw&X-Amz-Signature=8a30ee4b25778776f64112b47a99bcf8897c7ab4906dc469a4a2ea48af663875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFVA6KS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDmmAsthKm63qjI7ljfZAHEJ6TXjvN4qRb11ato6ljZrwIgHmGprwFHFxToT84MMa8CzoSywCd5PC9dj4CfcK5xNF8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLOjB5daz565CccgyCrcAz8x2NCQpavKML4cex9IYRv%2FyfN0gfVq%2Fyrr%2BM%2FFoa2aB4lQYVGn0dtsZUih3Tzj%2FdXsFqmYJQtUutoVC0FIRiVDEf8qlGKSqce%2FH%2BKR5gfUV5nsYld4PjUEqlF9tGZ4eHAGtvnhQbUZY9N0f%2BRgH0345DYqPzn%2F76baj4e90EUVqze35Qfy%2BW7YRpXG7EwBCj7La%2BHoea3SlhCyyTa2Y77BWhJpSjwSsrjtEHVLjc6Had53dJFE4%2FjUrGR1Gm6beHgENcwkRZjIxGkcMzPLoBLtcr%2FFmenqKZLaPZ1Nc4sb9CeKpbGdRXOLpplGYeS1TqY354AUFNE8JnmKhUSjlolgPj%2FWWd1Y%2FNFOOOUUk9bEdbVmJuCME6WOoExZepxMFyBaFncBruUgzoqgEeGA%2FKDvzGxXSQzIfdCaVM1kW%2BoK22W0ldREhtFVXV1spHJ8aE5JGilGuhMFTyOUtGdp%2BNhpH1wQrw0sSBetbpGhnjgRF3ov5GDSV7L0NV0LCl3eBJNWmw3%2BJoRnfuZ3RiiqvjqNk0VLLCpOuI7dNGMd0J1OktO5TdmxRCFno%2FAZXYvLlI8zBKIx8HdjuYJZ8vHV7UklQCBXrjRT6aFxd5gtLCnN9dW7qFQ6lT%2BUFLmsMJGstsoGOqUBob3DYZ7atA%2FA7Lz%2FEL6OtXZV%2FG1T9HMGz81JTvPVOheza%2BrCF7N%2F%2FK%2F5H4ib9wJM1RWDwnN2u%2BiUIjbRW2AxgOgqJg96KWY9XjBrfRj5eq7Z3fR0tUHZp7mqD6wvdK7USrL%2F2p6epV8VfvUhXB14yIP0%2FheG%2BVwJFgcaBMPHfbMWvBgHz4c5sAX3efLdaFtF%2FUKG2CAx%2BEo5bCLBVhXuQRnbh9Gw&X-Amz-Signature=9cd9fdb7e789b5666c49bc2dcbcc4a5b7c022d5543537d1bf1ccbb49c37ac499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFVA6KS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDmmAsthKm63qjI7ljfZAHEJ6TXjvN4qRb11ato6ljZrwIgHmGprwFHFxToT84MMa8CzoSywCd5PC9dj4CfcK5xNF8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLOjB5daz565CccgyCrcAz8x2NCQpavKML4cex9IYRv%2FyfN0gfVq%2Fyrr%2BM%2FFoa2aB4lQYVGn0dtsZUih3Tzj%2FdXsFqmYJQtUutoVC0FIRiVDEf8qlGKSqce%2FH%2BKR5gfUV5nsYld4PjUEqlF9tGZ4eHAGtvnhQbUZY9N0f%2BRgH0345DYqPzn%2F76baj4e90EUVqze35Qfy%2BW7YRpXG7EwBCj7La%2BHoea3SlhCyyTa2Y77BWhJpSjwSsrjtEHVLjc6Had53dJFE4%2FjUrGR1Gm6beHgENcwkRZjIxGkcMzPLoBLtcr%2FFmenqKZLaPZ1Nc4sb9CeKpbGdRXOLpplGYeS1TqY354AUFNE8JnmKhUSjlolgPj%2FWWd1Y%2FNFOOOUUk9bEdbVmJuCME6WOoExZepxMFyBaFncBruUgzoqgEeGA%2FKDvzGxXSQzIfdCaVM1kW%2BoK22W0ldREhtFVXV1spHJ8aE5JGilGuhMFTyOUtGdp%2BNhpH1wQrw0sSBetbpGhnjgRF3ov5GDSV7L0NV0LCl3eBJNWmw3%2BJoRnfuZ3RiiqvjqNk0VLLCpOuI7dNGMd0J1OktO5TdmxRCFno%2FAZXYvLlI8zBKIx8HdjuYJZ8vHV7UklQCBXrjRT6aFxd5gtLCnN9dW7qFQ6lT%2BUFLmsMJGstsoGOqUBob3DYZ7atA%2FA7Lz%2FEL6OtXZV%2FG1T9HMGz81JTvPVOheza%2BrCF7N%2F%2FK%2F5H4ib9wJM1RWDwnN2u%2BiUIjbRW2AxgOgqJg96KWY9XjBrfRj5eq7Z3fR0tUHZp7mqD6wvdK7USrL%2F2p6epV8VfvUhXB14yIP0%2FheG%2BVwJFgcaBMPHfbMWvBgHz4c5sAX3efLdaFtF%2FUKG2CAx%2BEo5bCLBVhXuQRnbh9Gw&X-Amz-Signature=3d012816a177078c1516357a766832e07e6dd1ddf7bdb2ac12f155a4fb61477b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCO3F3ZP%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDLJNc62ixppkMUU7chFnu8fqvHhuIw0h7Ex6Gl5XMoxQIhAPwY%2FCWhNiphNu7Ic0kPZBPiy%2BG%2BaPb8N5ONpG3WC2H9Kv8DCEUQABoMNjM3NDIzMTgzODA1IgwZS93JVeeNVp%2FHP4cq3AOdGe6whADFUrxS6dy%2FKSOXNhdoJTBIK%2FVVMzbOvapiA%2BrVw2j3mMKIUeXcnLom8sFmPjdxhrJFeEEbHnXDV2ew0jmDWT67C2lCuOmfp%2B9WxlcTQbiW9Xu8x7P%2BqDXS8PPFLn%2FvPJwVOtrFnw4Rc26gTxAjy4Q%2BOVTASh7EMIp2IAwgXhTunGUBHPShvEO1aRTcIcDgxFlguClQBMJmwz%2FIKzu1nW%2F3Cmv4Z6rTz4n54J0L5pdOsU8m%2B5h0EksHOwyIvlseCRRWDZotbkCZY%2BSzGZ5COvWs9e0vAcYoBn3xLx%2BvKaX4lQSWReXRJh7FUYcR5v0UNnGsxJaCO3KyJEelsTLNKx71YPoo6Vf3sXVkrnmWJUh%2BrNKe68uGviggXG9SpfYu%2BSDJzUYINJrvdEbkkdzJyJJDd3f5f2FMJyH94eRRqDVfJzQZJAQwxW5gbtyiNKuvhVRqAq9Unr9mnyYwLelhUi31aRB5ttMA3D%2Byv8hPPhxJWXmYCG42WF%2BNN0wdKLFzr69g39wAjvjhyi58NBsLdCNV95eLYZbbxIzadzKza2Gr6BrYSdn9bFm3nqSO9BkA1lT1FiTOAgGEEZddAx9feEQ7LRie2gdW5Mnig3DeQmMebKzGtgZZVTCLrrbKBjqkAft56RGDI9y3RrZqYYCIbySWN252UX6JMVhZLGeFCFOFMe44ITCzZlgGehQHZXOZ8uSdcceU%2FvdOj3JvTVcxwEiYYnn2yCAhnhM5%2Fncw85dPVE9zWaG84RUv3TB18DeYsVu%2BVBkcu5FkAAlkoWnwZwvrRFfUOHzNf3zbAWa3K6rhT70HsOKn9XpvQODLteSoaAF9TsYfRmPt6W3d6IBfOnlF0Tpm&X-Amz-Signature=f6e03b1e69dfa5a3b242855329e2449b6213faf7d78bc01815990ed3a8e6af17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U54BTECT%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCGeNrU0xTtU%2FJ3EZDthbKybYGCr1XDhURxrrBqw0%2FGswIhAO8aMcwr0LR0RGxXypw8R9wucYWqJ0jl%2BT%2BwGJMYt0ahKv8DCEUQABoMNjM3NDIzMTgzODA1Igyydg4ztl%2BBzl%2BTLokq3AP0ODV8a%2F7H1y2m7%2BUL1ATvBC%2Fg3Q7GwKxvI3wSv%2By%2BYBw0km%2FQsrblLX%2FmDw2P4JGllLHQ4A6f8YpymdHVYRefSxId%2FRhEXk1LIfFByumAuMtCT9BNeoNM8OGQeoWJucQFfmktL8LnZcRUgz446HV048kzAhfThiCrdettVxMKZtBjsesDvfv023Ycp2LES37RrA1QOsU%2FRSDjtiRAqhSWJVEjJhIBktslYEjq9UoMVQELN2gKbUtfl0MMeiYor8FbAyfoHqGtbPxaawC2gl9CQbPAekydrmHa6zEG47SZlFNK3dRLnA4Tao5u3GkOW%2BpbGcWMLUvyMr3wIwd37YBALh9nbY%2F0aaajmQpEQMDNJd5KAX3IIPI%2BmR9GZRhPsJJMjMAewfInCpVx0zr6bsgxRhaQ46QPb0KVVEQ5IfRGlyUXK5QXzdn%2FoXTy414cyM3cFdwX%2BwXoYNqsCIKCis7xlR1ME6OEC%2Bwir5Ry%2FxUHxxW%2FYN%2BhLCT7IMmTktSBAk4dncaU7DvqWNfJUKSMNxkUpN8IkGW7J6yMIAebbSifRomhie51F6eZ9AOpJGgPUBGuUs9KCvN1dR5%2B3HQdJKJS9Q5Qf%2FOhE6WcwBloCSHlzuQrX7JRxz4sMsgYsDCQrLbKBjqkAdIgr4l7e1NFDzJZMEzYmiC%2B4bdqhFeLCK06hX95%2FozO1l9O4UDTjoCiT%2BQ8bIbq8tv1v%2BLmBbDi7IBM4fnfkHCoNT2Iq2%2FWuGSPwuUqpbsYEWmUU2j0ICFCb3PMSQLpnflRE2ubW%2FeTE1F7DkzO6c%2BEqBaUXrv7vFUW%2BpgFBnyQIFas0eUG8koRRZ7wwy7xdp87ox%2Fp4pG88%2F7UK8%2FVtNOfyJp9&X-Amz-Signature=ad5948dbc14976dcec2b245da02a68c7c1208a980a8545586c53c7b25cd6a894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DF6WE5H%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7U7EbR%2BSBW3MtaPMDXh3QhdYdW%2FJdk6%2FFU9qBfxfTmwIhAJIhCk4hUyJRKqVup8syV0zQWFvYgBAMhxawqINQEwIgKv8DCEsQABoMNjM3NDIzMTgzODA1IgzwW3V7xcGaN1s0vMYq3AOijSolZvMzkcq6qYX4G9RdENUaa5N2hjzF7yw1ta1AeGAzx8AkiUMks%2FBiKc0J9stZqwgGt8Zyjd0Zepi%2FNyz1YQHQ3gcDJGnm1d1axl4nI3rLnWiwiTFvzFxwsrUgVRX0Ru%2BY3ye3xPGFls3HrFBmXEJVXpySvAby%2F9YDpV%2B8m1LsbsGljjKwQqFQUvjAhSOTvtn0C3dYqZzIbj8pcbWyIckFEsBFmzEZtLQReKQ5r4yIX386RqbcfKu9qUx1Azpm2qmQs2d5vPgUYZDk5e17HeESJTne8TlGqU7lj%2FAWDlmCp6ei5Az4%2FT0ly6j6v4hToPM3N9O5JTKcBj9tN1FHGykS8MCwsFOZsMqaSgynwGwijVgnknJ%2FgbREDzBekRnJjLodPnnR19QFz2mlwoGMIZcKcCs9h29raHvglBTS1IJvoWESfL6Dxe4hHb%2BfVq410sO9Z%2B49bRuNoICQWE0OHlDpBJwu7wGOOavexagL7FGhx9HSkJOrN0KAKCV%2FKX7JqMFXJqe3o%2Brpj1XIAp9QAMO2b7W205iB5Ld%2BnLhjJ3831JKdKUIiT5PbcXOrrHP4QT0abqLgrJZQpjqR21iSsY7xbe1Ei0gz2IcZOQdijR5ULOgtWCkcqgycajD8x7fKBjqkAVd5VqS3AK6bJFP0yTkz6YdaMJMkExGQcDFA1ImTd62jWs6RIOmt5GC7eoHLsc4uLAIysjBi5gIWmXaav63j8NP0n6LoQiBMsGbl%2BZU7rXr7cOiHUFVR1a9V18TGD%2B5XO3ivevi32VnsQL8KtjSzrRPsY64DnbADmdDXrAvvTJ5l%2BELw4kjWR27RcJ41YQmv9zAEwDTCz7V%2BFeHquDpQOYzjv%2BxU&X-Amz-Signature=6fc61cc3d0addb8017802033d743fdc0025ae48adb8a0dfb2abb05a3180142fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFVA6KS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDmmAsthKm63qjI7ljfZAHEJ6TXjvN4qRb11ato6ljZrwIgHmGprwFHFxToT84MMa8CzoSywCd5PC9dj4CfcK5xNF8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLOjB5daz565CccgyCrcAz8x2NCQpavKML4cex9IYRv%2FyfN0gfVq%2Fyrr%2BM%2FFoa2aB4lQYVGn0dtsZUih3Tzj%2FdXsFqmYJQtUutoVC0FIRiVDEf8qlGKSqce%2FH%2BKR5gfUV5nsYld4PjUEqlF9tGZ4eHAGtvnhQbUZY9N0f%2BRgH0345DYqPzn%2F76baj4e90EUVqze35Qfy%2BW7YRpXG7EwBCj7La%2BHoea3SlhCyyTa2Y77BWhJpSjwSsrjtEHVLjc6Had53dJFE4%2FjUrGR1Gm6beHgENcwkRZjIxGkcMzPLoBLtcr%2FFmenqKZLaPZ1Nc4sb9CeKpbGdRXOLpplGYeS1TqY354AUFNE8JnmKhUSjlolgPj%2FWWd1Y%2FNFOOOUUk9bEdbVmJuCME6WOoExZepxMFyBaFncBruUgzoqgEeGA%2FKDvzGxXSQzIfdCaVM1kW%2BoK22W0ldREhtFVXV1spHJ8aE5JGilGuhMFTyOUtGdp%2BNhpH1wQrw0sSBetbpGhnjgRF3ov5GDSV7L0NV0LCl3eBJNWmw3%2BJoRnfuZ3RiiqvjqNk0VLLCpOuI7dNGMd0J1OktO5TdmxRCFno%2FAZXYvLlI8zBKIx8HdjuYJZ8vHV7UklQCBXrjRT6aFxd5gtLCnN9dW7qFQ6lT%2BUFLmsMJGstsoGOqUBob3DYZ7atA%2FA7Lz%2FEL6OtXZV%2FG1T9HMGz81JTvPVOheza%2BrCF7N%2F%2FK%2F5H4ib9wJM1RWDwnN2u%2BiUIjbRW2AxgOgqJg96KWY9XjBrfRj5eq7Z3fR0tUHZp7mqD6wvdK7USrL%2F2p6epV8VfvUhXB14yIP0%2FheG%2BVwJFgcaBMPHfbMWvBgHz4c5sAX3efLdaFtF%2FUKG2CAx%2BEo5bCLBVhXuQRnbh9Gw&X-Amz-Signature=6c8b34cc8e178bab465b087eff9b44a0665a68fee91f6a5512777e706b46a022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRFARMMN%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCN3ni%2BbC6l4uRfrYDh0WS%2BVX7W0ilRPYd2TysOnvjdXAIgOI65DtJLFDq9kRqu5CliglctttdsguBiNo7kG%2FFkHV0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDFda5yf3%2FLEiVRefXyrcA0CM1%2F4bRKv75vyuNU4mtVtzBPfGjr5kvo1IyU2R6uDiHO6ubf30%2FOK4fDA38WLDw5UpjDy7X7bD4FximLyPfK2CSOXauw8HM87MSpHeempwkEz1YWmm%2Fj1%2BdpZa0VUez9HiJzoXDZBXIAA1Oj9saoVmN5rWfDgPPgHS%2FlVUFF2AJo2chJlH5vvXDCqf4nCQOeMS5rxu4%2BBeXjqb5EYhWEV84C%2FvvBCIR%2FQcgEnOAcfqaVegRRvI60SwNXakwKV9PhSv4FopCLP2Dho6SY7jSSrS7BXG65TR%2FbaQCYmGwQW%2Bfb%2B%2BQAV8qFwSjXP3cFiUNKCDe3yxFZQZ2AhrhO1EgWZ25s9XACvC4ULmg1jaDNKMw1CvfqsW%2B%2FK6NWZ9GpcMHsKCrvg1deHthJk2Zs71NvOYLblBxkUQzrCzctW3sA2ZNfA5F5%2B9rOYbHWWsPZn5eVE53JPV%2B0u5gGQMyxJtwRWq6JPXK%2BPIe4zAVKQV30wfX30e0TqonAP2YBPjjpdQQVjVpubYW2d7vO8zUekZjOldp06Osx32G8HrSYMNSCxm7QC9sby0%2FXIOTn2gLHwthSON2yCqGVQDDOwx8dyU7QTorCXZEkI1lR%2Bx%2BaISXFvg5SDMA15ZSG8rf8jyMKKttsoGOqUBPSgHsDwu%2BAgup4pXUmAB1K%2FyP68SLOAZ3iFckt5g6ZY0PaKDXgNLo0K%2FuJCJL5PyPz9jBJBMBC500THS394zz5f8a1Pn%2FV9Rr07qmN5d2vg1m1BmgNpiXHsHUj4JHAszGJQFcTkrW2Hlmb5YoeEEHTalPZViY9KgdctWXMUN8wvTmeJETXZorOFs8m8CfuRBzKtE1Yflk7WtBW1qSq6gtoWlH61l&X-Amz-Signature=475cbb6ec98adcced0691d3d75f3efde79a41564e608d6e3743ab5e49d76095f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFVA6KS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDmmAsthKm63qjI7ljfZAHEJ6TXjvN4qRb11ato6ljZrwIgHmGprwFHFxToT84MMa8CzoSywCd5PC9dj4CfcK5xNF8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLOjB5daz565CccgyCrcAz8x2NCQpavKML4cex9IYRv%2FyfN0gfVq%2Fyrr%2BM%2FFoa2aB4lQYVGn0dtsZUih3Tzj%2FdXsFqmYJQtUutoVC0FIRiVDEf8qlGKSqce%2FH%2BKR5gfUV5nsYld4PjUEqlF9tGZ4eHAGtvnhQbUZY9N0f%2BRgH0345DYqPzn%2F76baj4e90EUVqze35Qfy%2BW7YRpXG7EwBCj7La%2BHoea3SlhCyyTa2Y77BWhJpSjwSsrjtEHVLjc6Had53dJFE4%2FjUrGR1Gm6beHgENcwkRZjIxGkcMzPLoBLtcr%2FFmenqKZLaPZ1Nc4sb9CeKpbGdRXOLpplGYeS1TqY354AUFNE8JnmKhUSjlolgPj%2FWWd1Y%2FNFOOOUUk9bEdbVmJuCME6WOoExZepxMFyBaFncBruUgzoqgEeGA%2FKDvzGxXSQzIfdCaVM1kW%2BoK22W0ldREhtFVXV1spHJ8aE5JGilGuhMFTyOUtGdp%2BNhpH1wQrw0sSBetbpGhnjgRF3ov5GDSV7L0NV0LCl3eBJNWmw3%2BJoRnfuZ3RiiqvjqNk0VLLCpOuI7dNGMd0J1OktO5TdmxRCFno%2FAZXYvLlI8zBKIx8HdjuYJZ8vHV7UklQCBXrjRT6aFxd5gtLCnN9dW7qFQ6lT%2BUFLmsMJGstsoGOqUBob3DYZ7atA%2FA7Lz%2FEL6OtXZV%2FG1T9HMGz81JTvPVOheza%2BrCF7N%2F%2FK%2F5H4ib9wJM1RWDwnN2u%2BiUIjbRW2AxgOgqJg96KWY9XjBrfRj5eq7Z3fR0tUHZp7mqD6wvdK7USrL%2F2p6epV8VfvUhXB14yIP0%2FheG%2BVwJFgcaBMPHfbMWvBgHz4c5sAX3efLdaFtF%2FUKG2CAx%2BEo5bCLBVhXuQRnbh9Gw&X-Amz-Signature=8a45d3027db39d983881f2d5a5adb4942748946d28a2874c903d7d306015f090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMQ7T7BG%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEbR36MsXOOMFC9QZqkkgpDKl2dopYDloKXtsUvcR2JAiEAkhzKHJpE%2BBPs%2Bcy6jC9u2G9%2B0RKgJajn4PI%2BNzWWraEq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGGLVEsH9N1zQ2YNXyrcA0KLpu3coapWH%2FpcURfW%2FxVe%2B8IBtAVxOFao9rKBiiojnV2524usOb5XOKCcpd%2BkPi92p5B8mfXCDgysu6n7bqjOX76zOvMq9CTGEHmv1UyedmLt7vRBZ0eCm1ymyvdPDYo5QX6iCu6WiWrCNpYTWNm7yCP0x25tYmOYchmAgnTRFmUu1fMlE2ER1Tz8xQvCCkIweWMKgB5pH32b4NtX5hXb8h35zciET3lPAQGuA%2FVS%2B9jzzgSeMg4%2F%2F5pAwxWXdRNzbHjL7ajJ6U0akCXIba5jwBaKgXUfRHDGYz1FTQnzQbjVaA3C07z2zI5Qk3qKL37p%2B4gE%2Bby%2BJ%2BwbWY7OnARbO74xtsypIOTQCYUrs6vG9cCUpnVy3I6AQhk3yR36e4df1g2KGxsKSZm1zdIMmYDzgdAnWduNRT2cNPMKeBKqKIn%2FjiVA3tIgANfUKylsIDMXhwm7e8gVqQ6kDYaqZYBgZbwpqwZCt3ds2QZ7g8wSQeCZkMaX6qNwwyD7mZ29zz5lHMmFSTP8RbSOy6aNz1fY4oJRz6br8vZkxv85dOe4WCrxjxkRSahQMzqyCKyk9wYOqPyyYfcbrGdLdUqaaOTCAB0%2BpGgH5SGwO%2B5%2F36cOjvz8VJYOrZRPCQvnMM7Pt8oGOqUBL7H6W5uJyKzY88iO%2B4w6YaoHGfzo3EvfF7Mzrh2Ct24D5YsW5LZiEqJfAVLv6K%2BcmhUFbR7ebxZuJR6iXj1g3UDtjSsOGTlfNsbVFdTFh6hpVqTP5WRTjsXOr3nfXLQbCP7EBZGW6AHxDozqaBLfCKKWFlyL7ZRbsX%2FkVslP4bChYTrvu2q5Kr7X2FfdCKdO7J2fFjWRtvX8Vur5ZY5Gj3g3%2BhlL&X-Amz-Signature=17c439ff1b04a1a8221835f4a0f34be9b19d96ae6086f5172c23d108074a28e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFVA6KS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDmmAsthKm63qjI7ljfZAHEJ6TXjvN4qRb11ato6ljZrwIgHmGprwFHFxToT84MMa8CzoSywCd5PC9dj4CfcK5xNF8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLOjB5daz565CccgyCrcAz8x2NCQpavKML4cex9IYRv%2FyfN0gfVq%2Fyrr%2BM%2FFoa2aB4lQYVGn0dtsZUih3Tzj%2FdXsFqmYJQtUutoVC0FIRiVDEf8qlGKSqce%2FH%2BKR5gfUV5nsYld4PjUEqlF9tGZ4eHAGtvnhQbUZY9N0f%2BRgH0345DYqPzn%2F76baj4e90EUVqze35Qfy%2BW7YRpXG7EwBCj7La%2BHoea3SlhCyyTa2Y77BWhJpSjwSsrjtEHVLjc6Had53dJFE4%2FjUrGR1Gm6beHgENcwkRZjIxGkcMzPLoBLtcr%2FFmenqKZLaPZ1Nc4sb9CeKpbGdRXOLpplGYeS1TqY354AUFNE8JnmKhUSjlolgPj%2FWWd1Y%2FNFOOOUUk9bEdbVmJuCME6WOoExZepxMFyBaFncBruUgzoqgEeGA%2FKDvzGxXSQzIfdCaVM1kW%2BoK22W0ldREhtFVXV1spHJ8aE5JGilGuhMFTyOUtGdp%2BNhpH1wQrw0sSBetbpGhnjgRF3ov5GDSV7L0NV0LCl3eBJNWmw3%2BJoRnfuZ3RiiqvjqNk0VLLCpOuI7dNGMd0J1OktO5TdmxRCFno%2FAZXYvLlI8zBKIx8HdjuYJZ8vHV7UklQCBXrjRT6aFxd5gtLCnN9dW7qFQ6lT%2BUFLmsMJGstsoGOqUBob3DYZ7atA%2FA7Lz%2FEL6OtXZV%2FG1T9HMGz81JTvPVOheza%2BrCF7N%2F%2FK%2F5H4ib9wJM1RWDwnN2u%2BiUIjbRW2AxgOgqJg96KWY9XjBrfRj5eq7Z3fR0tUHZp7mqD6wvdK7USrL%2F2p6epV8VfvUhXB14yIP0%2FheG%2BVwJFgcaBMPHfbMWvBgHz4c5sAX3efLdaFtF%2FUKG2CAx%2BEo5bCLBVhXuQRnbh9Gw&X-Amz-Signature=f267ade3028ba0a7e971dbb221391a815b1cf0312418882c4a246cc58b95ba75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HZGQJF5%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQD5yJ8K5ZPwFQMoVJLM2LV3vi6%2FWBQ60NfgFx05YfT4UQIgTtPeGP52Nxq8H%2Fuaz8xexfg%2FqVBs%2FQ3oUH471n%2Fw9P4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDIKlEl9uW9NT5iIuUircA95Yzd05bVzOn6aGqBRv1hFbhOt8nYMx16u5mFNLTvS0NUqAZXSo4KgNVK5P6eCsKy9GAMLsyITv5kgMWWwX3p5SoPOsbz3XdvU1UaAA5lMOPIyjcxRSRG3QErxEnFocGiqq%2B8bVW239qD%2FRdc3q8a%2FYIC7LRAW1XqEbJWyiutEwHOZ47nAakQXniTJzjyDLpm6Nxh0yqk9JwO4L5r%2FGOXSXrHslHyNHDIOdlD%2Bw88NElfyLbdqF4uW16N5YuwAOuc2j%2BDyjMHzI%2BVYuR%2F0GYPjV0PJX7MF3A01ruTcXzQxdkMgECIXFzrSR0yrOQlEN2svvIGoIo56847G6HzbyeMIXoLWK%2FT8xcrdyF1eezY6M8F1wWtiVaF5CRK0u2565Ph4mAtGpEMC004vtnGdYTRTygnNjqWZ3txHlqt1l4A%2BhZMw1tizemqUCeWmEVIXdG7f6DvKFQ9L1wrNVI%2FgUki1gnqTFV%2B6YTWsqw0xYsFls%2F%2FYheW6MGB9caKfQMYvy5shYdf9x6Myh%2BIIUlvci%2B%2FN5ps0wLVTtCpA6q%2FZXKaYXPlCBayUJwF5rZkQtdboU7SEhLeRH%2B5QCLgGqyQj5vlC7jrQyMHg7ieBzBx9U6YL0w7uTNw2nGqaK7sGYMPuytsoGOqUBmc8gmPFhNqkf%2F2mSrvPtLvAvi%2BXr0wmILJHFfdVXOLFnlBiPbKO8tgtf%2BhsM4imPTgtvl5E2MNvu2cdf2aPfLgL3O3Ah4Mnv2zj2yvDGxQOyRLgUkquRDuUo%2FkUHHLFX69SapZsg%2BcGP0HWED0quVJBGir8E4FfVYeaoP9z8W8AITlKoJGMUDvCI%2F0p4SZOKIgDGGCY8BJFQakcfAejA64sbt%2FMe&X-Amz-Signature=d33f21b41a205486a45faf855a0ae77b624de00c1a071212fd77684f99de147b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFVA6KS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDmmAsthKm63qjI7ljfZAHEJ6TXjvN4qRb11ato6ljZrwIgHmGprwFHFxToT84MMa8CzoSywCd5PC9dj4CfcK5xNF8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLOjB5daz565CccgyCrcAz8x2NCQpavKML4cex9IYRv%2FyfN0gfVq%2Fyrr%2BM%2FFoa2aB4lQYVGn0dtsZUih3Tzj%2FdXsFqmYJQtUutoVC0FIRiVDEf8qlGKSqce%2FH%2BKR5gfUV5nsYld4PjUEqlF9tGZ4eHAGtvnhQbUZY9N0f%2BRgH0345DYqPzn%2F76baj4e90EUVqze35Qfy%2BW7YRpXG7EwBCj7La%2BHoea3SlhCyyTa2Y77BWhJpSjwSsrjtEHVLjc6Had53dJFE4%2FjUrGR1Gm6beHgENcwkRZjIxGkcMzPLoBLtcr%2FFmenqKZLaPZ1Nc4sb9CeKpbGdRXOLpplGYeS1TqY354AUFNE8JnmKhUSjlolgPj%2FWWd1Y%2FNFOOOUUk9bEdbVmJuCME6WOoExZepxMFyBaFncBruUgzoqgEeGA%2FKDvzGxXSQzIfdCaVM1kW%2BoK22W0ldREhtFVXV1spHJ8aE5JGilGuhMFTyOUtGdp%2BNhpH1wQrw0sSBetbpGhnjgRF3ov5GDSV7L0NV0LCl3eBJNWmw3%2BJoRnfuZ3RiiqvjqNk0VLLCpOuI7dNGMd0J1OktO5TdmxRCFno%2FAZXYvLlI8zBKIx8HdjuYJZ8vHV7UklQCBXrjRT6aFxd5gtLCnN9dW7qFQ6lT%2BUFLmsMJGstsoGOqUBob3DYZ7atA%2FA7Lz%2FEL6OtXZV%2FG1T9HMGz81JTvPVOheza%2BrCF7N%2F%2FK%2F5H4ib9wJM1RWDwnN2u%2BiUIjbRW2AxgOgqJg96KWY9XjBrfRj5eq7Z3fR0tUHZp7mqD6wvdK7USrL%2F2p6epV8VfvUhXB14yIP0%2FheG%2BVwJFgcaBMPHfbMWvBgHz4c5sAX3efLdaFtF%2FUKG2CAx%2BEo5bCLBVhXuQRnbh9Gw&X-Amz-Signature=10444f0d90a5a1b38a3b87ce3da9647e962217fe37a8617a8f5ef08de6f08d3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIP667GV%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDxponJxMKBlj7zIYcClXUMACDaLKCVI7ZLCDk%2FwJBvYwIgaCES0VKYlJ2P8a3UH%2BQ3tV6Tz2sj0etZ4YMVj735gyYq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDMBQFmNnUDgq2sp3VyrcA5eOU9RSA8tAKH5I9%2BDuEMuOUGONra%2FD3LaZILTRLgR%2B6Lm%2BzrIWVCvMxNanOA%2FFmNgUkk4QOLDDh%2FIuFVDzX43k1r6tcxVttn0bwd9It7hhT8Sw9DiKSTTZ974uLDm%2Bl5G7AXCkkyn%2FZ7w0FQNBVyIH9%2FQyHI%2BSSN5xMhfJ%2BDaTjqwxHtpLbD0NyvIsYSkbPZMl7mZnSvBa9AZBt2UCW1GgjV53ULMXSJowgFohl1zfnmnFEsyAeibiKpq6F5%2FiR8sSx37HJkCg%2FdaDlcaS6xsRtL4ftsV8qHKqA8wRh%2FDPpAMsy6mAKgaeW21dAyyNWfk4CQ8siUVs3KgakNwlEY2M3eWh0gKy0RX7GBZoQ%2FKMwBWYdqyC%2Fssm08DoBJFgY%2FGFOMw8pqd5p57kY%2Be%2F91WWGb58lMAAc1daVDnRW3NypTzRdSaZYNwwOgbsGXle5Q%2BWM6IPiTcYG0jBgSTtP8HAg9qaOoBjXowklG3O3P6cql1fK0BErUn5tI%2BVZ7e4c6uWILpvdp71aqZ54J30l2Kqlaj26Rikod%2BXs9dUVdsGbu5N7rlWw8BySwqJNDWGBm%2BNqCI8%2FAJebcC1aRR5qoHpz3LrJOfvgs%2BLxzYeoIWDb87P2cu8ZTNFDPRRMMSxtsoGOqUBiXeQNoA4SN01ah1Eu9HdJlKLIUeYcypXkoprhAQMz84InN0N%2FgPU%2Bn1CNqxdva9qEZbovmd%2BY1dbMnuIgdgiQG8e%2B%2Fy5%2FXETroejqgCS%2Bvr1WcHLVzMH%2Fw6veFzXMYI6bfAyenAaywDgHpXHRax%2BBrQ8FqTaNs%2FNU9lzorSqSPQ2lo9KyDVB34WOwvf%2BWNyMdbbrjjtW%2BWvea7Aynyg6ptljuWuJ&X-Amz-Signature=43b73a761c34926014a59bedf193587ce025fc4e167eceb24a0f86a2f12d8faa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFVA6KS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDmmAsthKm63qjI7ljfZAHEJ6TXjvN4qRb11ato6ljZrwIgHmGprwFHFxToT84MMa8CzoSywCd5PC9dj4CfcK5xNF8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLOjB5daz565CccgyCrcAz8x2NCQpavKML4cex9IYRv%2FyfN0gfVq%2Fyrr%2BM%2FFoa2aB4lQYVGn0dtsZUih3Tzj%2FdXsFqmYJQtUutoVC0FIRiVDEf8qlGKSqce%2FH%2BKR5gfUV5nsYld4PjUEqlF9tGZ4eHAGtvnhQbUZY9N0f%2BRgH0345DYqPzn%2F76baj4e90EUVqze35Qfy%2BW7YRpXG7EwBCj7La%2BHoea3SlhCyyTa2Y77BWhJpSjwSsrjtEHVLjc6Had53dJFE4%2FjUrGR1Gm6beHgENcwkRZjIxGkcMzPLoBLtcr%2FFmenqKZLaPZ1Nc4sb9CeKpbGdRXOLpplGYeS1TqY354AUFNE8JnmKhUSjlolgPj%2FWWd1Y%2FNFOOOUUk9bEdbVmJuCME6WOoExZepxMFyBaFncBruUgzoqgEeGA%2FKDvzGxXSQzIfdCaVM1kW%2BoK22W0ldREhtFVXV1spHJ8aE5JGilGuhMFTyOUtGdp%2BNhpH1wQrw0sSBetbpGhnjgRF3ov5GDSV7L0NV0LCl3eBJNWmw3%2BJoRnfuZ3RiiqvjqNk0VLLCpOuI7dNGMd0J1OktO5TdmxRCFno%2FAZXYvLlI8zBKIx8HdjuYJZ8vHV7UklQCBXrjRT6aFxd5gtLCnN9dW7qFQ6lT%2BUFLmsMJGstsoGOqUBob3DYZ7atA%2FA7Lz%2FEL6OtXZV%2FG1T9HMGz81JTvPVOheza%2BrCF7N%2F%2FK%2F5H4ib9wJM1RWDwnN2u%2BiUIjbRW2AxgOgqJg96KWY9XjBrfRj5eq7Z3fR0tUHZp7mqD6wvdK7USrL%2F2p6epV8VfvUhXB14yIP0%2FheG%2BVwJFgcaBMPHfbMWvBgHz4c5sAX3efLdaFtF%2FUKG2CAx%2BEo5bCLBVhXuQRnbh9Gw&X-Amz-Signature=e2584341338912a5d8885aa82812db7b8b2c69724d94a1ef7b1b76de679999a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GYYLLAT%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIF4V1V%2FTuBJL5zvCkKQkMNYGpMk%2BweJXzJRfkfJyAOswAiATCUmwGfEb7zFHM0eOcvgSFSJiDUi7fzltIqBIbKgcWir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMG3i0FjG84qXRD9WnKtwDPX%2FnzcJQ3cieTG8l55suuuk%2FEvu2rcljAbTSU5HaP5s6Tbr5ggGNNuUG0e0IN17C%2F55eA9WVjTM%2BlyIwDGKhkEBZHVGPxQY%2B9sHyM%2BWUVHTE6wHdG7admGE5IhZlJ1du6mdkKZecLSHKA2ZufyGWHiyZgvsq9SKjMjwwlb780yWH285NW%2B%2BRl0Li3RPxXyA4shG5hwxlUMIEk3ZL%2FxnWmNMFPmrpNP1eSPEhO4OmcLX1MQh%2F9N2tT%2F3IJz2cdyJRstbO00uzecUh54jv7bWP7vgLloiONkUax%2FZj%2F12FI%2FDPrv97yptBZh6UNRHnIzi1AuM00rH4uSaTFLGQDaRSD%2Bb7JXMnxiDMn7BKBZgphRRIhbLKtStc%2BAWUZOnPsazY9pIwJRnq3g3oZC%2Bkap6Jc5olpNDM%2FIj6Y8FwlIbKwzaZZMjE%2BN9jYGtc7ZfsZpblNQr%2BRoZBoF%2FV7cRDQE%2Bp34Ifo5YiHG0kwYA2762yD%2BvBVwbZ00CRjgG9jUqRG6Y1waxp3u00gb783cFJVlx3pZvraxBW8cq%2BJDfIA%2FdepIm09QwuKiDL6l%2BPd2D9IiAwk7M%2F7xzMJX8qz3VL3dAznwhcJzcqagto24k2AMMn8BiYr9sh%2FEHc0PUEmXUw0LO2ygY6pgEVHXPPi3F9Aic4%2BG3t2h%2B5qZcH6onrJ392Hrr8i60ZyMAGnaUtJ%2FGJJWRwm4CjQPpJM2oOAhdMkttIPDwGJTB8gVLAwGwVTHe6zCsdjVYj%2F4W5kNOFFzfih3a2yDQ4t%2F3NtsH2aU55qJJlU4iLlTamnU%2Bnv2UZMVyXCmO6ofMwv%2FAIHiGjcH7%2B3BVMV5C282pUFI4yZ6wrd71y1IH3uwc13H%2BYvXXf&X-Amz-Signature=602ab2f33612d2508b9dca1b927f753e98ea1640e4c59f8566bfb84b312d56cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622INC6GG%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4%2BQ0lZgHDReY%2FGv%2BcYOW9Xl6SVC6eMVTBM5KJalr5BgIgHffpZJnnmW1nOtwBpxHLPp4T1klAb94DA%2BkuwZiYKOYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKw8CJZR%2F9ZEAs1yryrcA1Fs6qLE6Us2q9A58%2Fg7ARaCEIOKyQ%2BR4UcGSmMoH9TQpz59oMHvQlyTfGGUMV8l43EPpqAvOFMUE5NIRjlNLeZCnrfokSIkKeePJbCExKsXPfSWzTd2yaJk%2FKzIWB8bd5DVBzdSFCPxjV5RvwLORB%2BukFj6Hd57uOJXXrhe61Wrmg1l6ZpUw3akRnq9ZI0EUcFOtwjE9iqiYTMwKUndpkO%2FyVFdtYmxPiNtp5lAqoLiLGXhT6jbyZ6aThN%2Bx4YkB7pD4%2BMHRrAnJm0VR8Mk%2Bvcp%2FnXIhgZO1Nyo5xqjzglF%2F%2Fkc6P%2B4XcEPdNgtzfPnbCoU3DKO0srTP%2BGXf%2FYPJnDgAtgUJwIOzcsd3t9NksURAEvsav9u5QcWuOekgA7Vj5wDoUVloWE7fcIAZ661qJTcG3rNJm7ly9YnucZt5oVv54fboYUvm%2FZO61eZZdH%2FIlAXI6kGHU3ztyCMq%2FxiFHMZEOxMYgldDbbdZQYMw%2Fxslbb8ONkpjzUFTPsGYeGTUtJj8dNpvJmJ33xrxXI2S6k0yzktujmfoNS0EetmwrqEHul8XVNLdP0a4K9JgKUe6v9x%2BFPYJU5kAf4wb0a%2BpsWXKM7xMdneYTRvvsx%2BGPeKL8MbwoG6jx4FEpCuMOnJt8oGOqUBHTWWgTTetXc3FqqOoM%2B2nburKD9KEKHj4SS6WGzE%2B%2BULvuLo%2BRInccjmTY9joVsCXk%2FRyow6%2BERtMXPTwT8b4loh3QdAHnrvf9uSBCne8lyGtTsziX0wZzzYUhiyjx0oXE4ArBOkfmFSyHfeI1IFeh2k1uRpV%2B2dhWFXVZvxzxr7CfrP%2FncCv%2FzGz%2B4zj6L0uGA6IGv9kHDD3uZmC197ZG7zA4Ua&X-Amz-Signature=8798b3577305a316e5ee99fbee5cca5fbc7c71fe12a1c74365f7697c5781d126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BAWGU5E%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCvQ4pksFAqeKt6AVQmxMswkEl%2BeYqkAzRcRXMYPwflAwIgAfq4BlHDW7djRtan4d9cLn6tP9BSl%2BWt%2FmKh%2B%2B30koUq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDMPZci%2FvFWNJNbCksCrcA16rhuwZ94U8NX930ObW7FbIu7y5Y%2Bm2zQgXVnHny%2BEyeJB9SizDvqhOlzDYTKh6GlxfxSnzAd92h%2Fh0HDeZ3w9Ub4C57FUHgJMZMs6T5c2C46tnP9htOa9jXAcFcXGoBcJb%2F%2FUxxGwWoRfCWCTIx4skBiBADTZOb%2FmQphCMLDh0JMzpTl3pMsttMRVtJmfIA2cmnSJ63k06N0WPkpYXzQDgRwUqJobPeYgDn1X40tmygeoDpwkVBOnBXbU3mXbqh%2BFDM%2FX2guYEldkoQLPChGiQ%2F0xdeRI4xWTDf2SbiR6CGZ2VGuOqCRToxMY1wABTdlN4FC7F40lQ1eimjgEgCKhFiVmwgyJbIZTw0HJNmjBdOTJxuPaRsouA0DcRxROX07bk6jrYb6zmxwcZBHSHrrryMvDxy4ztA5qYOan661jOpFJWubw3EvLlxWonwUb65JafEmH%2B8RIsnia9unxovTvqLIH7jklnArSUwsBF2Jfmkn7JxmrBPvRG9zcSjjnPHUREhfrUlv4137D4%2BRYqxMhMs0C06by89P5cQgUVceCFVrZrUs5ejd77vXMwfW6tasdHx%2FITpXYHPJREdob39zLVLDY5bjdHY8VJjZOVf4KmWck1UhhDZd03tTp3MPuytsoGOqUB7Tt9PirdEPVcdnJm56n2G1sGdDo4xFS30%2F4Ylh4cDOUiv2P8RIcjBb7uXXimdG%2F32Pp5YGyvlyUwmhzJgwU9uJEjjwkXNxXiLe8OqpbCK5%2Fcun%2Fcrp0JlOLWqfD4jQI397biDramugsG7HFXOwpfqUAdO8lozmdL2PVjaAXU06pb3lQ5e3EWwlB2uk7gwq7rGD9j6n5JGg%2Bf%2BWkoeAdAcMzHg0MM&X-Amz-Signature=54d32155447feec928740b8d0ae3a27e6001a66f9a02d44831234e503b7e9b44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFVA6KS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDmmAsthKm63qjI7ljfZAHEJ6TXjvN4qRb11ato6ljZrwIgHmGprwFHFxToT84MMa8CzoSywCd5PC9dj4CfcK5xNF8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLOjB5daz565CccgyCrcAz8x2NCQpavKML4cex9IYRv%2FyfN0gfVq%2Fyrr%2BM%2FFoa2aB4lQYVGn0dtsZUih3Tzj%2FdXsFqmYJQtUutoVC0FIRiVDEf8qlGKSqce%2FH%2BKR5gfUV5nsYld4PjUEqlF9tGZ4eHAGtvnhQbUZY9N0f%2BRgH0345DYqPzn%2F76baj4e90EUVqze35Qfy%2BW7YRpXG7EwBCj7La%2BHoea3SlhCyyTa2Y77BWhJpSjwSsrjtEHVLjc6Had53dJFE4%2FjUrGR1Gm6beHgENcwkRZjIxGkcMzPLoBLtcr%2FFmenqKZLaPZ1Nc4sb9CeKpbGdRXOLpplGYeS1TqY354AUFNE8JnmKhUSjlolgPj%2FWWd1Y%2FNFOOOUUk9bEdbVmJuCME6WOoExZepxMFyBaFncBruUgzoqgEeGA%2FKDvzGxXSQzIfdCaVM1kW%2BoK22W0ldREhtFVXV1spHJ8aE5JGilGuhMFTyOUtGdp%2BNhpH1wQrw0sSBetbpGhnjgRF3ov5GDSV7L0NV0LCl3eBJNWmw3%2BJoRnfuZ3RiiqvjqNk0VLLCpOuI7dNGMd0J1OktO5TdmxRCFno%2FAZXYvLlI8zBKIx8HdjuYJZ8vHV7UklQCBXrjRT6aFxd5gtLCnN9dW7qFQ6lT%2BUFLmsMJGstsoGOqUBob3DYZ7atA%2FA7Lz%2FEL6OtXZV%2FG1T9HMGz81JTvPVOheza%2BrCF7N%2F%2FK%2F5H4ib9wJM1RWDwnN2u%2BiUIjbRW2AxgOgqJg96KWY9XjBrfRj5eq7Z3fR0tUHZp7mqD6wvdK7USrL%2F2p6epV8VfvUhXB14yIP0%2FheG%2BVwJFgcaBMPHfbMWvBgHz4c5sAX3efLdaFtF%2FUKG2CAx%2BEo5bCLBVhXuQRnbh9Gw&X-Amz-Signature=aa421177b0e494fbc11c813f1bb1d548ec3b9f01e22665f15b764671f7911b6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFVA6KS%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDmmAsthKm63qjI7ljfZAHEJ6TXjvN4qRb11ato6ljZrwIgHmGprwFHFxToT84MMa8CzoSywCd5PC9dj4CfcK5xNF8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLOjB5daz565CccgyCrcAz8x2NCQpavKML4cex9IYRv%2FyfN0gfVq%2Fyrr%2BM%2FFoa2aB4lQYVGn0dtsZUih3Tzj%2FdXsFqmYJQtUutoVC0FIRiVDEf8qlGKSqce%2FH%2BKR5gfUV5nsYld4PjUEqlF9tGZ4eHAGtvnhQbUZY9N0f%2BRgH0345DYqPzn%2F76baj4e90EUVqze35Qfy%2BW7YRpXG7EwBCj7La%2BHoea3SlhCyyTa2Y77BWhJpSjwSsrjtEHVLjc6Had53dJFE4%2FjUrGR1Gm6beHgENcwkRZjIxGkcMzPLoBLtcr%2FFmenqKZLaPZ1Nc4sb9CeKpbGdRXOLpplGYeS1TqY354AUFNE8JnmKhUSjlolgPj%2FWWd1Y%2FNFOOOUUk9bEdbVmJuCME6WOoExZepxMFyBaFncBruUgzoqgEeGA%2FKDvzGxXSQzIfdCaVM1kW%2BoK22W0ldREhtFVXV1spHJ8aE5JGilGuhMFTyOUtGdp%2BNhpH1wQrw0sSBetbpGhnjgRF3ov5GDSV7L0NV0LCl3eBJNWmw3%2BJoRnfuZ3RiiqvjqNk0VLLCpOuI7dNGMd0J1OktO5TdmxRCFno%2FAZXYvLlI8zBKIx8HdjuYJZ8vHV7UklQCBXrjRT6aFxd5gtLCnN9dW7qFQ6lT%2BUFLmsMJGstsoGOqUBob3DYZ7atA%2FA7Lz%2FEL6OtXZV%2FG1T9HMGz81JTvPVOheza%2BrCF7N%2F%2FK%2F5H4ib9wJM1RWDwnN2u%2BiUIjbRW2AxgOgqJg96KWY9XjBrfRj5eq7Z3fR0tUHZp7mqD6wvdK7USrL%2F2p6epV8VfvUhXB14yIP0%2FheG%2BVwJFgcaBMPHfbMWvBgHz4c5sAX3efLdaFtF%2FUKG2CAx%2BEo5bCLBVhXuQRnbh9Gw&X-Amz-Signature=216481e954f8ad4e1898aa53f06619b97b7617bba29b8ded7439e359b71c4574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5US3N4%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDrLhmnqjJ1GbEcaOBpe1Jo4VaEvBO5amz3%2FDBU2cU0EQIhAPdKA93tgb9pC5ZXdBS9DNrt0%2BvbPwKsAj66776cS5YYKv8DCEUQABoMNjM3NDIzMTgzODA1IgyhZGZSYEFORyi94%2Bgq3AOAOmHBXW0t61GV3ulT1AejTecdwlGXg0BS2uwkWUaCI6kDiD3%2FvD7BS9AY9EWsna313VVs1GrBjnYDuLHo8dNMaNyY9qCiCeDkMcAltKwGUeHS%2B7ysdrDCBja0mZBS7PDrioXwO7Nua4%2Bs%2Fakh1YETJuMJlXHHqil5HPXaOiORG5BnGEViAhDs5yTvXFeT2a7Py2oloUd3A3rcvO2ijI6erM9fsFiRkUH6J3pJUuKfaYm%2BvgM7SARXfh0yI3KGk%2FfcHUzcdEZMZ6H5FB4bDlAO2b4maIw2sh7SxQC%2FTJZxI7pxdq83CEmoG1Z5JYb62hZ11Qp0zCgRqnYqy0WtNUum2kjw%2Fr8b5%2BFyUEOefTQ79%2FJt3VsoUXI%2BkHBdTllill8ytamYIm9N8Wjh0Jwd%2BTqvpc4nMVW57QVnA8IgK2J9oA1Iva%2FKFRDv8aTtwkWcI4eDv4PftaiNOqYlWesbaxud6Zxlun545va51TIZxYNaavWuFhW4D6UvXrHaSlV7RrOXfzfkaJhkUnC8w5zK2tKAQfMhFqJNlie7CyhK7uTGzJFol%2BGekQAYJd4oiXDSgZVl3XrtwF5m6hGsbngD87a8J4fOK2rLcB2pi1IdQf9fwqzoe%2BQaUjejtrtqJzCTsLbKBjqkAfQ%2BiIbwux5SSDYBwkur2AIKMcqlQTG2w9EDqGZ2fS3re7dnz3LZg1usdaPmpmMmQw%2Byy0qQYIwqsjTTs%2FsQAPOBeEoZskQ4Wqr9Vwa%2Fs%2FqnT2QmaN1coGt6U8nNyPZWUXmArZaIDiOWyNKTrVXufy%2B%2Bc3gmiENOPjFht5NwwPsrz1DnysuKwE8M8BwMHp0l79pNSTBGbAfdHcB6yen7pcLQgrKH&X-Amz-Signature=dba392665f81b5afec9f28490dbb65383359a616fa84ae5284b8f9cf5b115e6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5US3N4%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDrLhmnqjJ1GbEcaOBpe1Jo4VaEvBO5amz3%2FDBU2cU0EQIhAPdKA93tgb9pC5ZXdBS9DNrt0%2BvbPwKsAj66776cS5YYKv8DCEUQABoMNjM3NDIzMTgzODA1IgyhZGZSYEFORyi94%2Bgq3AOAOmHBXW0t61GV3ulT1AejTecdwlGXg0BS2uwkWUaCI6kDiD3%2FvD7BS9AY9EWsna313VVs1GrBjnYDuLHo8dNMaNyY9qCiCeDkMcAltKwGUeHS%2B7ysdrDCBja0mZBS7PDrioXwO7Nua4%2Bs%2Fakh1YETJuMJlXHHqil5HPXaOiORG5BnGEViAhDs5yTvXFeT2a7Py2oloUd3A3rcvO2ijI6erM9fsFiRkUH6J3pJUuKfaYm%2BvgM7SARXfh0yI3KGk%2FfcHUzcdEZMZ6H5FB4bDlAO2b4maIw2sh7SxQC%2FTJZxI7pxdq83CEmoG1Z5JYb62hZ11Qp0zCgRqnYqy0WtNUum2kjw%2Fr8b5%2BFyUEOefTQ79%2FJt3VsoUXI%2BkHBdTllill8ytamYIm9N8Wjh0Jwd%2BTqvpc4nMVW57QVnA8IgK2J9oA1Iva%2FKFRDv8aTtwkWcI4eDv4PftaiNOqYlWesbaxud6Zxlun545va51TIZxYNaavWuFhW4D6UvXrHaSlV7RrOXfzfkaJhkUnC8w5zK2tKAQfMhFqJNlie7CyhK7uTGzJFol%2BGekQAYJd4oiXDSgZVl3XrtwF5m6hGsbngD87a8J4fOK2rLcB2pi1IdQf9fwqzoe%2BQaUjejtrtqJzCTsLbKBjqkAfQ%2BiIbwux5SSDYBwkur2AIKMcqlQTG2w9EDqGZ2fS3re7dnz3LZg1usdaPmpmMmQw%2Byy0qQYIwqsjTTs%2FsQAPOBeEoZskQ4Wqr9Vwa%2Fs%2FqnT2QmaN1coGt6U8nNyPZWUXmArZaIDiOWyNKTrVXufy%2B%2Bc3gmiENOPjFht5NwwPsrz1DnysuKwE8M8BwMHp0l79pNSTBGbAfdHcB6yen7pcLQgrKH&X-Amz-Signature=ef91baf261faae7a469fee8bc6276c2cb25b40050a7b0a98cb71f0ed5ae42bf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5US3N4%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDrLhmnqjJ1GbEcaOBpe1Jo4VaEvBO5amz3%2FDBU2cU0EQIhAPdKA93tgb9pC5ZXdBS9DNrt0%2BvbPwKsAj66776cS5YYKv8DCEUQABoMNjM3NDIzMTgzODA1IgyhZGZSYEFORyi94%2Bgq3AOAOmHBXW0t61GV3ulT1AejTecdwlGXg0BS2uwkWUaCI6kDiD3%2FvD7BS9AY9EWsna313VVs1GrBjnYDuLHo8dNMaNyY9qCiCeDkMcAltKwGUeHS%2B7ysdrDCBja0mZBS7PDrioXwO7Nua4%2Bs%2Fakh1YETJuMJlXHHqil5HPXaOiORG5BnGEViAhDs5yTvXFeT2a7Py2oloUd3A3rcvO2ijI6erM9fsFiRkUH6J3pJUuKfaYm%2BvgM7SARXfh0yI3KGk%2FfcHUzcdEZMZ6H5FB4bDlAO2b4maIw2sh7SxQC%2FTJZxI7pxdq83CEmoG1Z5JYb62hZ11Qp0zCgRqnYqy0WtNUum2kjw%2Fr8b5%2BFyUEOefTQ79%2FJt3VsoUXI%2BkHBdTllill8ytamYIm9N8Wjh0Jwd%2BTqvpc4nMVW57QVnA8IgK2J9oA1Iva%2FKFRDv8aTtwkWcI4eDv4PftaiNOqYlWesbaxud6Zxlun545va51TIZxYNaavWuFhW4D6UvXrHaSlV7RrOXfzfkaJhkUnC8w5zK2tKAQfMhFqJNlie7CyhK7uTGzJFol%2BGekQAYJd4oiXDSgZVl3XrtwF5m6hGsbngD87a8J4fOK2rLcB2pi1IdQf9fwqzoe%2BQaUjejtrtqJzCTsLbKBjqkAfQ%2BiIbwux5SSDYBwkur2AIKMcqlQTG2w9EDqGZ2fS3re7dnz3LZg1usdaPmpmMmQw%2Byy0qQYIwqsjTTs%2FsQAPOBeEoZskQ4Wqr9Vwa%2Fs%2FqnT2QmaN1coGt6U8nNyPZWUXmArZaIDiOWyNKTrVXufy%2B%2Bc3gmiENOPjFht5NwwPsrz1DnysuKwE8M8BwMHp0l79pNSTBGbAfdHcB6yen7pcLQgrKH&X-Amz-Signature=7c670ed8630b1ac1ad4f18aaa2607398b44571a05be642a1053fb32f722aee4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5US3N4%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDrLhmnqjJ1GbEcaOBpe1Jo4VaEvBO5amz3%2FDBU2cU0EQIhAPdKA93tgb9pC5ZXdBS9DNrt0%2BvbPwKsAj66776cS5YYKv8DCEUQABoMNjM3NDIzMTgzODA1IgyhZGZSYEFORyi94%2Bgq3AOAOmHBXW0t61GV3ulT1AejTecdwlGXg0BS2uwkWUaCI6kDiD3%2FvD7BS9AY9EWsna313VVs1GrBjnYDuLHo8dNMaNyY9qCiCeDkMcAltKwGUeHS%2B7ysdrDCBja0mZBS7PDrioXwO7Nua4%2Bs%2Fakh1YETJuMJlXHHqil5HPXaOiORG5BnGEViAhDs5yTvXFeT2a7Py2oloUd3A3rcvO2ijI6erM9fsFiRkUH6J3pJUuKfaYm%2BvgM7SARXfh0yI3KGk%2FfcHUzcdEZMZ6H5FB4bDlAO2b4maIw2sh7SxQC%2FTJZxI7pxdq83CEmoG1Z5JYb62hZ11Qp0zCgRqnYqy0WtNUum2kjw%2Fr8b5%2BFyUEOefTQ79%2FJt3VsoUXI%2BkHBdTllill8ytamYIm9N8Wjh0Jwd%2BTqvpc4nMVW57QVnA8IgK2J9oA1Iva%2FKFRDv8aTtwkWcI4eDv4PftaiNOqYlWesbaxud6Zxlun545va51TIZxYNaavWuFhW4D6UvXrHaSlV7RrOXfzfkaJhkUnC8w5zK2tKAQfMhFqJNlie7CyhK7uTGzJFol%2BGekQAYJd4oiXDSgZVl3XrtwF5m6hGsbngD87a8J4fOK2rLcB2pi1IdQf9fwqzoe%2BQaUjejtrtqJzCTsLbKBjqkAfQ%2BiIbwux5SSDYBwkur2AIKMcqlQTG2w9EDqGZ2fS3re7dnz3LZg1usdaPmpmMmQw%2Byy0qQYIwqsjTTs%2FsQAPOBeEoZskQ4Wqr9Vwa%2Fs%2FqnT2QmaN1coGt6U8nNyPZWUXmArZaIDiOWyNKTrVXufy%2B%2Bc3gmiENOPjFht5NwwPsrz1DnysuKwE8M8BwMHp0l79pNSTBGbAfdHcB6yen7pcLQgrKH&X-Amz-Signature=370eb649266aeda8147d39a17cd196f4064eb98f948b91b0d1400ebfbf4241a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667PB7KBN%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIEvMMOyTgnoQnfOgeV2yfx5tabLvWM4g%2BbMf4k1pXVpMAiBwIlvPaIcF7Wi3CZGChkg%2FcNqxvG0oGySwekkVa6E6Pyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMCpEIw1xBY19WbQNdKtwDPfbMzJnnsWwvwBacl7UvuZo6hHyF%2FYsE4Dd4gP%2B4Rx%2FCepYhRm82bxPuQz2bVW54bxW7z5xgKNqtoaVi62rTBfbeDoDI5AxqRTDeaZvYkNezO8nvHgzT4BfxYY7UcWwzzfvZg8iCs%2BxHmt6lD4XqBBaBovlLIqNa0kZIW2lPiBD5ut5gmzq2FdbyECy6sPvhT%2B80gLKKJYyeoCnd%2BtXkhGDQyF6xEICo8bzuGo28%2BvrCBBFhW397NRe8qjqPN%2FdHwg7blYHjThI%2F9WHk4jDypURkVC7D%2BntPXYU9jXjmNOb9ecQJFG9iuFK6qlKPxGOaGGRIA9xhCB2G4IaaQoYVFMpXqOf%2BLK7NqudjvqBVhXL3MkZg5NK3%2FIobX4jtMXoka4PjyL1c2moTSbUAc0cMx5P5dRL%2FWTfpgtyGwD9Ovwe2zucgPpVTXOox5NwPp6%2FOPHaS%2BQQ5yhk2u1Uh0YweTvHgaA7g1%2BAK9oiv86rPgCmz4ktgk85Y5m54Ba%2B2gtGCeSu%2F9BDWahVc%2BMlmcFKynvofOrWjFzHV3RQPzlcfWmzdI576WuEqCwmRkaLRmauuk9x%2FvLan6ff2aDJcFUYt0Bm4XP5kJg1zhxKuLfmT7Zw3XYmtLI7WVUEJxE0wn7O2ygY6pgEYkIN0p1SqPqm4Udp%2Bc%2FA9tbUusQLiAdklNeidwh%2FtzfHJCLwuYKCShYIf8ymFW7%2F1CDOKB%2Bm6iyRp3aG%2FLV7mer5RcPoMFAIu9QT%2BW30eRR70O%2Byq6x95GF9coRuQlML3D%2FGmttZZ%2FZtL4bE1lZ60bkAE9tt2dY4N1Sm6aX2RqswGODXs0WEWNkRfFG8OvzWVj4him%2BFb1M5nTderflOBk7DmMQ0l&X-Amz-Signature=19d7a86251dc198ab2bc663cd726648c46995e54ccaead7de329b25e14ba5a77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5US3N4%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDrLhmnqjJ1GbEcaOBpe1Jo4VaEvBO5amz3%2FDBU2cU0EQIhAPdKA93tgb9pC5ZXdBS9DNrt0%2BvbPwKsAj66776cS5YYKv8DCEUQABoMNjM3NDIzMTgzODA1IgyhZGZSYEFORyi94%2Bgq3AOAOmHBXW0t61GV3ulT1AejTecdwlGXg0BS2uwkWUaCI6kDiD3%2FvD7BS9AY9EWsna313VVs1GrBjnYDuLHo8dNMaNyY9qCiCeDkMcAltKwGUeHS%2B7ysdrDCBja0mZBS7PDrioXwO7Nua4%2Bs%2Fakh1YETJuMJlXHHqil5HPXaOiORG5BnGEViAhDs5yTvXFeT2a7Py2oloUd3A3rcvO2ijI6erM9fsFiRkUH6J3pJUuKfaYm%2BvgM7SARXfh0yI3KGk%2FfcHUzcdEZMZ6H5FB4bDlAO2b4maIw2sh7SxQC%2FTJZxI7pxdq83CEmoG1Z5JYb62hZ11Qp0zCgRqnYqy0WtNUum2kjw%2Fr8b5%2BFyUEOefTQ79%2FJt3VsoUXI%2BkHBdTllill8ytamYIm9N8Wjh0Jwd%2BTqvpc4nMVW57QVnA8IgK2J9oA1Iva%2FKFRDv8aTtwkWcI4eDv4PftaiNOqYlWesbaxud6Zxlun545va51TIZxYNaavWuFhW4D6UvXrHaSlV7RrOXfzfkaJhkUnC8w5zK2tKAQfMhFqJNlie7CyhK7uTGzJFol%2BGekQAYJd4oiXDSgZVl3XrtwF5m6hGsbngD87a8J4fOK2rLcB2pi1IdQf9fwqzoe%2BQaUjejtrtqJzCTsLbKBjqkAfQ%2BiIbwux5SSDYBwkur2AIKMcqlQTG2w9EDqGZ2fS3re7dnz3LZg1usdaPmpmMmQw%2Byy0qQYIwqsjTTs%2FsQAPOBeEoZskQ4Wqr9Vwa%2Fs%2FqnT2QmaN1coGt6U8nNyPZWUXmArZaIDiOWyNKTrVXufy%2B%2Bc3gmiENOPjFht5NwwPsrz1DnysuKwE8M8BwMHp0l79pNSTBGbAfdHcB6yen7pcLQgrKH&X-Amz-Signature=10c84021ea52ae83896b274fcf6f83985b5973a06c751b14684a41207201a354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5US3N4%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDrLhmnqjJ1GbEcaOBpe1Jo4VaEvBO5amz3%2FDBU2cU0EQIhAPdKA93tgb9pC5ZXdBS9DNrt0%2BvbPwKsAj66776cS5YYKv8DCEUQABoMNjM3NDIzMTgzODA1IgyhZGZSYEFORyi94%2Bgq3AOAOmHBXW0t61GV3ulT1AejTecdwlGXg0BS2uwkWUaCI6kDiD3%2FvD7BS9AY9EWsna313VVs1GrBjnYDuLHo8dNMaNyY9qCiCeDkMcAltKwGUeHS%2B7ysdrDCBja0mZBS7PDrioXwO7Nua4%2Bs%2Fakh1YETJuMJlXHHqil5HPXaOiORG5BnGEViAhDs5yTvXFeT2a7Py2oloUd3A3rcvO2ijI6erM9fsFiRkUH6J3pJUuKfaYm%2BvgM7SARXfh0yI3KGk%2FfcHUzcdEZMZ6H5FB4bDlAO2b4maIw2sh7SxQC%2FTJZxI7pxdq83CEmoG1Z5JYb62hZ11Qp0zCgRqnYqy0WtNUum2kjw%2Fr8b5%2BFyUEOefTQ79%2FJt3VsoUXI%2BkHBdTllill8ytamYIm9N8Wjh0Jwd%2BTqvpc4nMVW57QVnA8IgK2J9oA1Iva%2FKFRDv8aTtwkWcI4eDv4PftaiNOqYlWesbaxud6Zxlun545va51TIZxYNaavWuFhW4D6UvXrHaSlV7RrOXfzfkaJhkUnC8w5zK2tKAQfMhFqJNlie7CyhK7uTGzJFol%2BGekQAYJd4oiXDSgZVl3XrtwF5m6hGsbngD87a8J4fOK2rLcB2pi1IdQf9fwqzoe%2BQaUjejtrtqJzCTsLbKBjqkAfQ%2BiIbwux5SSDYBwkur2AIKMcqlQTG2w9EDqGZ2fS3re7dnz3LZg1usdaPmpmMmQw%2Byy0qQYIwqsjTTs%2FsQAPOBeEoZskQ4Wqr9Vwa%2Fs%2FqnT2QmaN1coGt6U8nNyPZWUXmArZaIDiOWyNKTrVXufy%2B%2Bc3gmiENOPjFht5NwwPsrz1DnysuKwE8M8BwMHp0l79pNSTBGbAfdHcB6yen7pcLQgrKH&X-Amz-Signature=a0a7f9384bc4e3cd96cc41c144b2c4cdd7ee4b3de5447a230e3d65449ffc6f39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5US3N4%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDrLhmnqjJ1GbEcaOBpe1Jo4VaEvBO5amz3%2FDBU2cU0EQIhAPdKA93tgb9pC5ZXdBS9DNrt0%2BvbPwKsAj66776cS5YYKv8DCEUQABoMNjM3NDIzMTgzODA1IgyhZGZSYEFORyi94%2Bgq3AOAOmHBXW0t61GV3ulT1AejTecdwlGXg0BS2uwkWUaCI6kDiD3%2FvD7BS9AY9EWsna313VVs1GrBjnYDuLHo8dNMaNyY9qCiCeDkMcAltKwGUeHS%2B7ysdrDCBja0mZBS7PDrioXwO7Nua4%2Bs%2Fakh1YETJuMJlXHHqil5HPXaOiORG5BnGEViAhDs5yTvXFeT2a7Py2oloUd3A3rcvO2ijI6erM9fsFiRkUH6J3pJUuKfaYm%2BvgM7SARXfh0yI3KGk%2FfcHUzcdEZMZ6H5FB4bDlAO2b4maIw2sh7SxQC%2FTJZxI7pxdq83CEmoG1Z5JYb62hZ11Qp0zCgRqnYqy0WtNUum2kjw%2Fr8b5%2BFyUEOefTQ79%2FJt3VsoUXI%2BkHBdTllill8ytamYIm9N8Wjh0Jwd%2BTqvpc4nMVW57QVnA8IgK2J9oA1Iva%2FKFRDv8aTtwkWcI4eDv4PftaiNOqYlWesbaxud6Zxlun545va51TIZxYNaavWuFhW4D6UvXrHaSlV7RrOXfzfkaJhkUnC8w5zK2tKAQfMhFqJNlie7CyhK7uTGzJFol%2BGekQAYJd4oiXDSgZVl3XrtwF5m6hGsbngD87a8J4fOK2rLcB2pi1IdQf9fwqzoe%2BQaUjejtrtqJzCTsLbKBjqkAfQ%2BiIbwux5SSDYBwkur2AIKMcqlQTG2w9EDqGZ2fS3re7dnz3LZg1usdaPmpmMmQw%2Byy0qQYIwqsjTTs%2FsQAPOBeEoZskQ4Wqr9Vwa%2Fs%2FqnT2QmaN1coGt6U8nNyPZWUXmArZaIDiOWyNKTrVXufy%2B%2Bc3gmiENOPjFht5NwwPsrz1DnysuKwE8M8BwMHp0l79pNSTBGbAfdHcB6yen7pcLQgrKH&X-Amz-Signature=7c670ed8630b1ac1ad4f18aaa2607398b44571a05be642a1053fb32f722aee4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5US3N4%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDrLhmnqjJ1GbEcaOBpe1Jo4VaEvBO5amz3%2FDBU2cU0EQIhAPdKA93tgb9pC5ZXdBS9DNrt0%2BvbPwKsAj66776cS5YYKv8DCEUQABoMNjM3NDIzMTgzODA1IgyhZGZSYEFORyi94%2Bgq3AOAOmHBXW0t61GV3ulT1AejTecdwlGXg0BS2uwkWUaCI6kDiD3%2FvD7BS9AY9EWsna313VVs1GrBjnYDuLHo8dNMaNyY9qCiCeDkMcAltKwGUeHS%2B7ysdrDCBja0mZBS7PDrioXwO7Nua4%2Bs%2Fakh1YETJuMJlXHHqil5HPXaOiORG5BnGEViAhDs5yTvXFeT2a7Py2oloUd3A3rcvO2ijI6erM9fsFiRkUH6J3pJUuKfaYm%2BvgM7SARXfh0yI3KGk%2FfcHUzcdEZMZ6H5FB4bDlAO2b4maIw2sh7SxQC%2FTJZxI7pxdq83CEmoG1Z5JYb62hZ11Qp0zCgRqnYqy0WtNUum2kjw%2Fr8b5%2BFyUEOefTQ79%2FJt3VsoUXI%2BkHBdTllill8ytamYIm9N8Wjh0Jwd%2BTqvpc4nMVW57QVnA8IgK2J9oA1Iva%2FKFRDv8aTtwkWcI4eDv4PftaiNOqYlWesbaxud6Zxlun545va51TIZxYNaavWuFhW4D6UvXrHaSlV7RrOXfzfkaJhkUnC8w5zK2tKAQfMhFqJNlie7CyhK7uTGzJFol%2BGekQAYJd4oiXDSgZVl3XrtwF5m6hGsbngD87a8J4fOK2rLcB2pi1IdQf9fwqzoe%2BQaUjejtrtqJzCTsLbKBjqkAfQ%2BiIbwux5SSDYBwkur2AIKMcqlQTG2w9EDqGZ2fS3re7dnz3LZg1usdaPmpmMmQw%2Byy0qQYIwqsjTTs%2FsQAPOBeEoZskQ4Wqr9Vwa%2Fs%2FqnT2QmaN1coGt6U8nNyPZWUXmArZaIDiOWyNKTrVXufy%2B%2Bc3gmiENOPjFht5NwwPsrz1DnysuKwE8M8BwMHp0l79pNSTBGbAfdHcB6yen7pcLQgrKH&X-Amz-Signature=bfec82de1ad356b3c5eee1e2e65466f7f17dcca8a0fa1d33ea1bb4852c861a80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5US3N4%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDrLhmnqjJ1GbEcaOBpe1Jo4VaEvBO5amz3%2FDBU2cU0EQIhAPdKA93tgb9pC5ZXdBS9DNrt0%2BvbPwKsAj66776cS5YYKv8DCEUQABoMNjM3NDIzMTgzODA1IgyhZGZSYEFORyi94%2Bgq3AOAOmHBXW0t61GV3ulT1AejTecdwlGXg0BS2uwkWUaCI6kDiD3%2FvD7BS9AY9EWsna313VVs1GrBjnYDuLHo8dNMaNyY9qCiCeDkMcAltKwGUeHS%2B7ysdrDCBja0mZBS7PDrioXwO7Nua4%2Bs%2Fakh1YETJuMJlXHHqil5HPXaOiORG5BnGEViAhDs5yTvXFeT2a7Py2oloUd3A3rcvO2ijI6erM9fsFiRkUH6J3pJUuKfaYm%2BvgM7SARXfh0yI3KGk%2FfcHUzcdEZMZ6H5FB4bDlAO2b4maIw2sh7SxQC%2FTJZxI7pxdq83CEmoG1Z5JYb62hZ11Qp0zCgRqnYqy0WtNUum2kjw%2Fr8b5%2BFyUEOefTQ79%2FJt3VsoUXI%2BkHBdTllill8ytamYIm9N8Wjh0Jwd%2BTqvpc4nMVW57QVnA8IgK2J9oA1Iva%2FKFRDv8aTtwkWcI4eDv4PftaiNOqYlWesbaxud6Zxlun545va51TIZxYNaavWuFhW4D6UvXrHaSlV7RrOXfzfkaJhkUnC8w5zK2tKAQfMhFqJNlie7CyhK7uTGzJFol%2BGekQAYJd4oiXDSgZVl3XrtwF5m6hGsbngD87a8J4fOK2rLcB2pi1IdQf9fwqzoe%2BQaUjejtrtqJzCTsLbKBjqkAfQ%2BiIbwux5SSDYBwkur2AIKMcqlQTG2w9EDqGZ2fS3re7dnz3LZg1usdaPmpmMmQw%2Byy0qQYIwqsjTTs%2FsQAPOBeEoZskQ4Wqr9Vwa%2Fs%2FqnT2QmaN1coGt6U8nNyPZWUXmArZaIDiOWyNKTrVXufy%2B%2Bc3gmiENOPjFht5NwwPsrz1DnysuKwE8M8BwMHp0l79pNSTBGbAfdHcB6yen7pcLQgrKH&X-Amz-Signature=6afe8cd9cc49c1aa113a2af3037172c21dd004ee14f900d8b67d46db7f67f76b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5US3N4%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDrLhmnqjJ1GbEcaOBpe1Jo4VaEvBO5amz3%2FDBU2cU0EQIhAPdKA93tgb9pC5ZXdBS9DNrt0%2BvbPwKsAj66776cS5YYKv8DCEUQABoMNjM3NDIzMTgzODA1IgyhZGZSYEFORyi94%2Bgq3AOAOmHBXW0t61GV3ulT1AejTecdwlGXg0BS2uwkWUaCI6kDiD3%2FvD7BS9AY9EWsna313VVs1GrBjnYDuLHo8dNMaNyY9qCiCeDkMcAltKwGUeHS%2B7ysdrDCBja0mZBS7PDrioXwO7Nua4%2Bs%2Fakh1YETJuMJlXHHqil5HPXaOiORG5BnGEViAhDs5yTvXFeT2a7Py2oloUd3A3rcvO2ijI6erM9fsFiRkUH6J3pJUuKfaYm%2BvgM7SARXfh0yI3KGk%2FfcHUzcdEZMZ6H5FB4bDlAO2b4maIw2sh7SxQC%2FTJZxI7pxdq83CEmoG1Z5JYb62hZ11Qp0zCgRqnYqy0WtNUum2kjw%2Fr8b5%2BFyUEOefTQ79%2FJt3VsoUXI%2BkHBdTllill8ytamYIm9N8Wjh0Jwd%2BTqvpc4nMVW57QVnA8IgK2J9oA1Iva%2FKFRDv8aTtwkWcI4eDv4PftaiNOqYlWesbaxud6Zxlun545va51TIZxYNaavWuFhW4D6UvXrHaSlV7RrOXfzfkaJhkUnC8w5zK2tKAQfMhFqJNlie7CyhK7uTGzJFol%2BGekQAYJd4oiXDSgZVl3XrtwF5m6hGsbngD87a8J4fOK2rLcB2pi1IdQf9fwqzoe%2BQaUjejtrtqJzCTsLbKBjqkAfQ%2BiIbwux5SSDYBwkur2AIKMcqlQTG2w9EDqGZ2fS3re7dnz3LZg1usdaPmpmMmQw%2Byy0qQYIwqsjTTs%2FsQAPOBeEoZskQ4Wqr9Vwa%2Fs%2FqnT2QmaN1coGt6U8nNyPZWUXmArZaIDiOWyNKTrVXufy%2B%2Bc3gmiENOPjFht5NwwPsrz1DnysuKwE8M8BwMHp0l79pNSTBGbAfdHcB6yen7pcLQgrKH&X-Amz-Signature=dcb6ba146b34b0dbfdd27587e56d36607c5a36a2cedffdb111c65a57fce07a33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


