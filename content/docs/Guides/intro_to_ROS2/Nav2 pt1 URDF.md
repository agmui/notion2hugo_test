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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTU44A5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGawe3TtoPYaZC%2Bc95qDbIu6K5TPRcrVx64ptbj87wjLAiA04h8KfkNZfsm4pW6r%2B2qkZ8Y5gUy2eDqWR4HPBRhaEiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXjYkjv55t5p3r6mkKtwDGYzHAcoLWbLWN%2FspDxmRtM3vNBOV5%2FwVzB6%2BBgbRFZ67jijUwxBN0nuS9HyJfc4Q%2BtWqREHyhN32dxiM2ws62W7N0MHcBGFefvy7NRBIO715IqHaHj8FM7Ir%2BkmuMehAkp3ZNkCrfTGKKohmmiWxRLFm1h5xn3LIFRBm7Dk%2FSBjyQWrsOx3rE2eicDnQ3BJ9RWVVDW0VJq65%2BcMrpiEr%2Fnw6rWUqjl7FlO9AltB99VS5cTzXXPhr%2FLybj2uAlM%2FcMWO5%2FgB7Gieh%2FVUR8%2B2Rm6F4NsyRXS4K36Eq%2BhNSs%2FYwTZ8SV52P%2FSLepj8tCGNbBX%2FgpBpOQs4iSt2%2BVpkN2dcUZOtX9%2Bs6HVsirzH78hk%2BbOU6D21HcxigKmAeFnBrC3ow4mF%2FATAzc88umILYyy358n32Ix8zTuGbElc93zWhD8kdQ95hGknIvvHweuf97rwI2QoYa5Fh72jEmYXk8%2FALWy2ZPP2Oz5LqBhLQCMesQPh6JvyBRnETxvdOdzy97eARHNujF3gJIKEefL3MLbSD1wyXsJo5sQmTHwambkCtzIsEd2pRbS9ETkJDgE9p1pULCL5s5gLng17R6T0FjYs3yyzFKH6xSL8c7e4nMOkPicpiLk9dekIFmV0w85qmxAY6pgGCgu1HM0MuWSdy13WPrh9tMWvxkQwJhuRxN5krFNjdG8SL1HLTkw4K58Pxd3HV%2FUf%2BXJKYN2f7bXm9HyJcf9yD97fIDw%2BQDWRbVC31rri1JElTUkGZpASxgqbdzl63fwbx7EK6scT3vk788c771rY9b1vTXQuLVd9gt6fDgMw1GygWwaKvFznCwTAb8QeGBttlLrnzHxVmm0AWQrZansu9pm04DSEQ&X-Amz-Signature=87cbe06760ccebf66ccccc89aea4d64df13aa2bcf49fce10d0d66bfd7ef91f12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTU44A5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGawe3TtoPYaZC%2Bc95qDbIu6K5TPRcrVx64ptbj87wjLAiA04h8KfkNZfsm4pW6r%2B2qkZ8Y5gUy2eDqWR4HPBRhaEiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXjYkjv55t5p3r6mkKtwDGYzHAcoLWbLWN%2FspDxmRtM3vNBOV5%2FwVzB6%2BBgbRFZ67jijUwxBN0nuS9HyJfc4Q%2BtWqREHyhN32dxiM2ws62W7N0MHcBGFefvy7NRBIO715IqHaHj8FM7Ir%2BkmuMehAkp3ZNkCrfTGKKohmmiWxRLFm1h5xn3LIFRBm7Dk%2FSBjyQWrsOx3rE2eicDnQ3BJ9RWVVDW0VJq65%2BcMrpiEr%2Fnw6rWUqjl7FlO9AltB99VS5cTzXXPhr%2FLybj2uAlM%2FcMWO5%2FgB7Gieh%2FVUR8%2B2Rm6F4NsyRXS4K36Eq%2BhNSs%2FYwTZ8SV52P%2FSLepj8tCGNbBX%2FgpBpOQs4iSt2%2BVpkN2dcUZOtX9%2Bs6HVsirzH78hk%2BbOU6D21HcxigKmAeFnBrC3ow4mF%2FATAzc88umILYyy358n32Ix8zTuGbElc93zWhD8kdQ95hGknIvvHweuf97rwI2QoYa5Fh72jEmYXk8%2FALWy2ZPP2Oz5LqBhLQCMesQPh6JvyBRnETxvdOdzy97eARHNujF3gJIKEefL3MLbSD1wyXsJo5sQmTHwambkCtzIsEd2pRbS9ETkJDgE9p1pULCL5s5gLng17R6T0FjYs3yyzFKH6xSL8c7e4nMOkPicpiLk9dekIFmV0w85qmxAY6pgGCgu1HM0MuWSdy13WPrh9tMWvxkQwJhuRxN5krFNjdG8SL1HLTkw4K58Pxd3HV%2FUf%2BXJKYN2f7bXm9HyJcf9yD97fIDw%2BQDWRbVC31rri1JElTUkGZpASxgqbdzl63fwbx7EK6scT3vk788c771rY9b1vTXQuLVd9gt6fDgMw1GygWwaKvFznCwTAb8QeGBttlLrnzHxVmm0AWQrZansu9pm04DSEQ&X-Amz-Signature=253a0335fb435818e9b45591dccbe406f171f7c36a5bc9bd8f43cd0effd2cb5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTU44A5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGawe3TtoPYaZC%2Bc95qDbIu6K5TPRcrVx64ptbj87wjLAiA04h8KfkNZfsm4pW6r%2B2qkZ8Y5gUy2eDqWR4HPBRhaEiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXjYkjv55t5p3r6mkKtwDGYzHAcoLWbLWN%2FspDxmRtM3vNBOV5%2FwVzB6%2BBgbRFZ67jijUwxBN0nuS9HyJfc4Q%2BtWqREHyhN32dxiM2ws62W7N0MHcBGFefvy7NRBIO715IqHaHj8FM7Ir%2BkmuMehAkp3ZNkCrfTGKKohmmiWxRLFm1h5xn3LIFRBm7Dk%2FSBjyQWrsOx3rE2eicDnQ3BJ9RWVVDW0VJq65%2BcMrpiEr%2Fnw6rWUqjl7FlO9AltB99VS5cTzXXPhr%2FLybj2uAlM%2FcMWO5%2FgB7Gieh%2FVUR8%2B2Rm6F4NsyRXS4K36Eq%2BhNSs%2FYwTZ8SV52P%2FSLepj8tCGNbBX%2FgpBpOQs4iSt2%2BVpkN2dcUZOtX9%2Bs6HVsirzH78hk%2BbOU6D21HcxigKmAeFnBrC3ow4mF%2FATAzc88umILYyy358n32Ix8zTuGbElc93zWhD8kdQ95hGknIvvHweuf97rwI2QoYa5Fh72jEmYXk8%2FALWy2ZPP2Oz5LqBhLQCMesQPh6JvyBRnETxvdOdzy97eARHNujF3gJIKEefL3MLbSD1wyXsJo5sQmTHwambkCtzIsEd2pRbS9ETkJDgE9p1pULCL5s5gLng17R6T0FjYs3yyzFKH6xSL8c7e4nMOkPicpiLk9dekIFmV0w85qmxAY6pgGCgu1HM0MuWSdy13WPrh9tMWvxkQwJhuRxN5krFNjdG8SL1HLTkw4K58Pxd3HV%2FUf%2BXJKYN2f7bXm9HyJcf9yD97fIDw%2BQDWRbVC31rri1JElTUkGZpASxgqbdzl63fwbx7EK6scT3vk788c771rY9b1vTXQuLVd9gt6fDgMw1GygWwaKvFznCwTAb8QeGBttlLrnzHxVmm0AWQrZansu9pm04DSEQ&X-Amz-Signature=a1c6b04be1e7a479eee4efe9823a1a8491f57da25e55c4825409a6c88970981d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTU44A5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGawe3TtoPYaZC%2Bc95qDbIu6K5TPRcrVx64ptbj87wjLAiA04h8KfkNZfsm4pW6r%2B2qkZ8Y5gUy2eDqWR4HPBRhaEiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXjYkjv55t5p3r6mkKtwDGYzHAcoLWbLWN%2FspDxmRtM3vNBOV5%2FwVzB6%2BBgbRFZ67jijUwxBN0nuS9HyJfc4Q%2BtWqREHyhN32dxiM2ws62W7N0MHcBGFefvy7NRBIO715IqHaHj8FM7Ir%2BkmuMehAkp3ZNkCrfTGKKohmmiWxRLFm1h5xn3LIFRBm7Dk%2FSBjyQWrsOx3rE2eicDnQ3BJ9RWVVDW0VJq65%2BcMrpiEr%2Fnw6rWUqjl7FlO9AltB99VS5cTzXXPhr%2FLybj2uAlM%2FcMWO5%2FgB7Gieh%2FVUR8%2B2Rm6F4NsyRXS4K36Eq%2BhNSs%2FYwTZ8SV52P%2FSLepj8tCGNbBX%2FgpBpOQs4iSt2%2BVpkN2dcUZOtX9%2Bs6HVsirzH78hk%2BbOU6D21HcxigKmAeFnBrC3ow4mF%2FATAzc88umILYyy358n32Ix8zTuGbElc93zWhD8kdQ95hGknIvvHweuf97rwI2QoYa5Fh72jEmYXk8%2FALWy2ZPP2Oz5LqBhLQCMesQPh6JvyBRnETxvdOdzy97eARHNujF3gJIKEefL3MLbSD1wyXsJo5sQmTHwambkCtzIsEd2pRbS9ETkJDgE9p1pULCL5s5gLng17R6T0FjYs3yyzFKH6xSL8c7e4nMOkPicpiLk9dekIFmV0w85qmxAY6pgGCgu1HM0MuWSdy13WPrh9tMWvxkQwJhuRxN5krFNjdG8SL1HLTkw4K58Pxd3HV%2FUf%2BXJKYN2f7bXm9HyJcf9yD97fIDw%2BQDWRbVC31rri1JElTUkGZpASxgqbdzl63fwbx7EK6scT3vk788c771rY9b1vTXQuLVd9gt6fDgMw1GygWwaKvFznCwTAb8QeGBttlLrnzHxVmm0AWQrZansu9pm04DSEQ&X-Amz-Signature=c157d455aa07fa3dc4f3daae3f7a03e65c4126bc7c4f875cc018189efafbda2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTU44A5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGawe3TtoPYaZC%2Bc95qDbIu6K5TPRcrVx64ptbj87wjLAiA04h8KfkNZfsm4pW6r%2B2qkZ8Y5gUy2eDqWR4HPBRhaEiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXjYkjv55t5p3r6mkKtwDGYzHAcoLWbLWN%2FspDxmRtM3vNBOV5%2FwVzB6%2BBgbRFZ67jijUwxBN0nuS9HyJfc4Q%2BtWqREHyhN32dxiM2ws62W7N0MHcBGFefvy7NRBIO715IqHaHj8FM7Ir%2BkmuMehAkp3ZNkCrfTGKKohmmiWxRLFm1h5xn3LIFRBm7Dk%2FSBjyQWrsOx3rE2eicDnQ3BJ9RWVVDW0VJq65%2BcMrpiEr%2Fnw6rWUqjl7FlO9AltB99VS5cTzXXPhr%2FLybj2uAlM%2FcMWO5%2FgB7Gieh%2FVUR8%2B2Rm6F4NsyRXS4K36Eq%2BhNSs%2FYwTZ8SV52P%2FSLepj8tCGNbBX%2FgpBpOQs4iSt2%2BVpkN2dcUZOtX9%2Bs6HVsirzH78hk%2BbOU6D21HcxigKmAeFnBrC3ow4mF%2FATAzc88umILYyy358n32Ix8zTuGbElc93zWhD8kdQ95hGknIvvHweuf97rwI2QoYa5Fh72jEmYXk8%2FALWy2ZPP2Oz5LqBhLQCMesQPh6JvyBRnETxvdOdzy97eARHNujF3gJIKEefL3MLbSD1wyXsJo5sQmTHwambkCtzIsEd2pRbS9ETkJDgE9p1pULCL5s5gLng17R6T0FjYs3yyzFKH6xSL8c7e4nMOkPicpiLk9dekIFmV0w85qmxAY6pgGCgu1HM0MuWSdy13WPrh9tMWvxkQwJhuRxN5krFNjdG8SL1HLTkw4K58Pxd3HV%2FUf%2BXJKYN2f7bXm9HyJcf9yD97fIDw%2BQDWRbVC31rri1JElTUkGZpASxgqbdzl63fwbx7EK6scT3vk788c771rY9b1vTXQuLVd9gt6fDgMw1GygWwaKvFznCwTAb8QeGBttlLrnzHxVmm0AWQrZansu9pm04DSEQ&X-Amz-Signature=2bb0b49e64bb5a9927361994216297a0944242ab19fd9ddc1a0583117393f213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTU44A5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGawe3TtoPYaZC%2Bc95qDbIu6K5TPRcrVx64ptbj87wjLAiA04h8KfkNZfsm4pW6r%2B2qkZ8Y5gUy2eDqWR4HPBRhaEiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXjYkjv55t5p3r6mkKtwDGYzHAcoLWbLWN%2FspDxmRtM3vNBOV5%2FwVzB6%2BBgbRFZ67jijUwxBN0nuS9HyJfc4Q%2BtWqREHyhN32dxiM2ws62W7N0MHcBGFefvy7NRBIO715IqHaHj8FM7Ir%2BkmuMehAkp3ZNkCrfTGKKohmmiWxRLFm1h5xn3LIFRBm7Dk%2FSBjyQWrsOx3rE2eicDnQ3BJ9RWVVDW0VJq65%2BcMrpiEr%2Fnw6rWUqjl7FlO9AltB99VS5cTzXXPhr%2FLybj2uAlM%2FcMWO5%2FgB7Gieh%2FVUR8%2B2Rm6F4NsyRXS4K36Eq%2BhNSs%2FYwTZ8SV52P%2FSLepj8tCGNbBX%2FgpBpOQs4iSt2%2BVpkN2dcUZOtX9%2Bs6HVsirzH78hk%2BbOU6D21HcxigKmAeFnBrC3ow4mF%2FATAzc88umILYyy358n32Ix8zTuGbElc93zWhD8kdQ95hGknIvvHweuf97rwI2QoYa5Fh72jEmYXk8%2FALWy2ZPP2Oz5LqBhLQCMesQPh6JvyBRnETxvdOdzy97eARHNujF3gJIKEefL3MLbSD1wyXsJo5sQmTHwambkCtzIsEd2pRbS9ETkJDgE9p1pULCL5s5gLng17R6T0FjYs3yyzFKH6xSL8c7e4nMOkPicpiLk9dekIFmV0w85qmxAY6pgGCgu1HM0MuWSdy13WPrh9tMWvxkQwJhuRxN5krFNjdG8SL1HLTkw4K58Pxd3HV%2FUf%2BXJKYN2f7bXm9HyJcf9yD97fIDw%2BQDWRbVC31rri1JElTUkGZpASxgqbdzl63fwbx7EK6scT3vk788c771rY9b1vTXQuLVd9gt6fDgMw1GygWwaKvFznCwTAb8QeGBttlLrnzHxVmm0AWQrZansu9pm04DSEQ&X-Amz-Signature=14b7355d2e7e05bae69b459adc489717fefef9ed6207d205daee303e2e021f7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTU44A5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGawe3TtoPYaZC%2Bc95qDbIu6K5TPRcrVx64ptbj87wjLAiA04h8KfkNZfsm4pW6r%2B2qkZ8Y5gUy2eDqWR4HPBRhaEiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXjYkjv55t5p3r6mkKtwDGYzHAcoLWbLWN%2FspDxmRtM3vNBOV5%2FwVzB6%2BBgbRFZ67jijUwxBN0nuS9HyJfc4Q%2BtWqREHyhN32dxiM2ws62W7N0MHcBGFefvy7NRBIO715IqHaHj8FM7Ir%2BkmuMehAkp3ZNkCrfTGKKohmmiWxRLFm1h5xn3LIFRBm7Dk%2FSBjyQWrsOx3rE2eicDnQ3BJ9RWVVDW0VJq65%2BcMrpiEr%2Fnw6rWUqjl7FlO9AltB99VS5cTzXXPhr%2FLybj2uAlM%2FcMWO5%2FgB7Gieh%2FVUR8%2B2Rm6F4NsyRXS4K36Eq%2BhNSs%2FYwTZ8SV52P%2FSLepj8tCGNbBX%2FgpBpOQs4iSt2%2BVpkN2dcUZOtX9%2Bs6HVsirzH78hk%2BbOU6D21HcxigKmAeFnBrC3ow4mF%2FATAzc88umILYyy358n32Ix8zTuGbElc93zWhD8kdQ95hGknIvvHweuf97rwI2QoYa5Fh72jEmYXk8%2FALWy2ZPP2Oz5LqBhLQCMesQPh6JvyBRnETxvdOdzy97eARHNujF3gJIKEefL3MLbSD1wyXsJo5sQmTHwambkCtzIsEd2pRbS9ETkJDgE9p1pULCL5s5gLng17R6T0FjYs3yyzFKH6xSL8c7e4nMOkPicpiLk9dekIFmV0w85qmxAY6pgGCgu1HM0MuWSdy13WPrh9tMWvxkQwJhuRxN5krFNjdG8SL1HLTkw4K58Pxd3HV%2FUf%2BXJKYN2f7bXm9HyJcf9yD97fIDw%2BQDWRbVC31rri1JElTUkGZpASxgqbdzl63fwbx7EK6scT3vk788c771rY9b1vTXQuLVd9gt6fDgMw1GygWwaKvFznCwTAb8QeGBttlLrnzHxVmm0AWQrZansu9pm04DSEQ&X-Amz-Signature=13e13772a44aee66e65d18709da936b9766fb17d84aabc1f31189f7fe8d037de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTU44A5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGawe3TtoPYaZC%2Bc95qDbIu6K5TPRcrVx64ptbj87wjLAiA04h8KfkNZfsm4pW6r%2B2qkZ8Y5gUy2eDqWR4HPBRhaEiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXjYkjv55t5p3r6mkKtwDGYzHAcoLWbLWN%2FspDxmRtM3vNBOV5%2FwVzB6%2BBgbRFZ67jijUwxBN0nuS9HyJfc4Q%2BtWqREHyhN32dxiM2ws62W7N0MHcBGFefvy7NRBIO715IqHaHj8FM7Ir%2BkmuMehAkp3ZNkCrfTGKKohmmiWxRLFm1h5xn3LIFRBm7Dk%2FSBjyQWrsOx3rE2eicDnQ3BJ9RWVVDW0VJq65%2BcMrpiEr%2Fnw6rWUqjl7FlO9AltB99VS5cTzXXPhr%2FLybj2uAlM%2FcMWO5%2FgB7Gieh%2FVUR8%2B2Rm6F4NsyRXS4K36Eq%2BhNSs%2FYwTZ8SV52P%2FSLepj8tCGNbBX%2FgpBpOQs4iSt2%2BVpkN2dcUZOtX9%2Bs6HVsirzH78hk%2BbOU6D21HcxigKmAeFnBrC3ow4mF%2FATAzc88umILYyy358n32Ix8zTuGbElc93zWhD8kdQ95hGknIvvHweuf97rwI2QoYa5Fh72jEmYXk8%2FALWy2ZPP2Oz5LqBhLQCMesQPh6JvyBRnETxvdOdzy97eARHNujF3gJIKEefL3MLbSD1wyXsJo5sQmTHwambkCtzIsEd2pRbS9ETkJDgE9p1pULCL5s5gLng17R6T0FjYs3yyzFKH6xSL8c7e4nMOkPicpiLk9dekIFmV0w85qmxAY6pgGCgu1HM0MuWSdy13WPrh9tMWvxkQwJhuRxN5krFNjdG8SL1HLTkw4K58Pxd3HV%2FUf%2BXJKYN2f7bXm9HyJcf9yD97fIDw%2BQDWRbVC31rri1JElTUkGZpASxgqbdzl63fwbx7EK6scT3vk788c771rY9b1vTXQuLVd9gt6fDgMw1GygWwaKvFznCwTAb8QeGBttlLrnzHxVmm0AWQrZansu9pm04DSEQ&X-Amz-Signature=627b9f660d3ef2b580aa7b6b5453bc3f539f472e56ccc2fcd8d70e44398192e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTU44A5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGawe3TtoPYaZC%2Bc95qDbIu6K5TPRcrVx64ptbj87wjLAiA04h8KfkNZfsm4pW6r%2B2qkZ8Y5gUy2eDqWR4HPBRhaEiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXjYkjv55t5p3r6mkKtwDGYzHAcoLWbLWN%2FspDxmRtM3vNBOV5%2FwVzB6%2BBgbRFZ67jijUwxBN0nuS9HyJfc4Q%2BtWqREHyhN32dxiM2ws62W7N0MHcBGFefvy7NRBIO715IqHaHj8FM7Ir%2BkmuMehAkp3ZNkCrfTGKKohmmiWxRLFm1h5xn3LIFRBm7Dk%2FSBjyQWrsOx3rE2eicDnQ3BJ9RWVVDW0VJq65%2BcMrpiEr%2Fnw6rWUqjl7FlO9AltB99VS5cTzXXPhr%2FLybj2uAlM%2FcMWO5%2FgB7Gieh%2FVUR8%2B2Rm6F4NsyRXS4K36Eq%2BhNSs%2FYwTZ8SV52P%2FSLepj8tCGNbBX%2FgpBpOQs4iSt2%2BVpkN2dcUZOtX9%2Bs6HVsirzH78hk%2BbOU6D21HcxigKmAeFnBrC3ow4mF%2FATAzc88umILYyy358n32Ix8zTuGbElc93zWhD8kdQ95hGknIvvHweuf97rwI2QoYa5Fh72jEmYXk8%2FALWy2ZPP2Oz5LqBhLQCMesQPh6JvyBRnETxvdOdzy97eARHNujF3gJIKEefL3MLbSD1wyXsJo5sQmTHwambkCtzIsEd2pRbS9ETkJDgE9p1pULCL5s5gLng17R6T0FjYs3yyzFKH6xSL8c7e4nMOkPicpiLk9dekIFmV0w85qmxAY6pgGCgu1HM0MuWSdy13WPrh9tMWvxkQwJhuRxN5krFNjdG8SL1HLTkw4K58Pxd3HV%2FUf%2BXJKYN2f7bXm9HyJcf9yD97fIDw%2BQDWRbVC31rri1JElTUkGZpASxgqbdzl63fwbx7EK6scT3vk788c771rY9b1vTXQuLVd9gt6fDgMw1GygWwaKvFznCwTAb8QeGBttlLrnzHxVmm0AWQrZansu9pm04DSEQ&X-Amz-Signature=f1e35ec93cc1b9d92c359e2aea5f0364c2ccc927988bfa5e83a530a6e1c671a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTU44A5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGawe3TtoPYaZC%2Bc95qDbIu6K5TPRcrVx64ptbj87wjLAiA04h8KfkNZfsm4pW6r%2B2qkZ8Y5gUy2eDqWR4HPBRhaEiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXjYkjv55t5p3r6mkKtwDGYzHAcoLWbLWN%2FspDxmRtM3vNBOV5%2FwVzB6%2BBgbRFZ67jijUwxBN0nuS9HyJfc4Q%2BtWqREHyhN32dxiM2ws62W7N0MHcBGFefvy7NRBIO715IqHaHj8FM7Ir%2BkmuMehAkp3ZNkCrfTGKKohmmiWxRLFm1h5xn3LIFRBm7Dk%2FSBjyQWrsOx3rE2eicDnQ3BJ9RWVVDW0VJq65%2BcMrpiEr%2Fnw6rWUqjl7FlO9AltB99VS5cTzXXPhr%2FLybj2uAlM%2FcMWO5%2FgB7Gieh%2FVUR8%2B2Rm6F4NsyRXS4K36Eq%2BhNSs%2FYwTZ8SV52P%2FSLepj8tCGNbBX%2FgpBpOQs4iSt2%2BVpkN2dcUZOtX9%2Bs6HVsirzH78hk%2BbOU6D21HcxigKmAeFnBrC3ow4mF%2FATAzc88umILYyy358n32Ix8zTuGbElc93zWhD8kdQ95hGknIvvHweuf97rwI2QoYa5Fh72jEmYXk8%2FALWy2ZPP2Oz5LqBhLQCMesQPh6JvyBRnETxvdOdzy97eARHNujF3gJIKEefL3MLbSD1wyXsJo5sQmTHwambkCtzIsEd2pRbS9ETkJDgE9p1pULCL5s5gLng17R6T0FjYs3yyzFKH6xSL8c7e4nMOkPicpiLk9dekIFmV0w85qmxAY6pgGCgu1HM0MuWSdy13WPrh9tMWvxkQwJhuRxN5krFNjdG8SL1HLTkw4K58Pxd3HV%2FUf%2BXJKYN2f7bXm9HyJcf9yD97fIDw%2BQDWRbVC31rri1JElTUkGZpASxgqbdzl63fwbx7EK6scT3vk788c771rY9b1vTXQuLVd9gt6fDgMw1GygWwaKvFznCwTAb8QeGBttlLrnzHxVmm0AWQrZansu9pm04DSEQ&X-Amz-Signature=3563a387bcc8990e52e0671933516084d5c79bfc4f5bd982cc90c0b965427a6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTU44A5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGawe3TtoPYaZC%2Bc95qDbIu6K5TPRcrVx64ptbj87wjLAiA04h8KfkNZfsm4pW6r%2B2qkZ8Y5gUy2eDqWR4HPBRhaEiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXjYkjv55t5p3r6mkKtwDGYzHAcoLWbLWN%2FspDxmRtM3vNBOV5%2FwVzB6%2BBgbRFZ67jijUwxBN0nuS9HyJfc4Q%2BtWqREHyhN32dxiM2ws62W7N0MHcBGFefvy7NRBIO715IqHaHj8FM7Ir%2BkmuMehAkp3ZNkCrfTGKKohmmiWxRLFm1h5xn3LIFRBm7Dk%2FSBjyQWrsOx3rE2eicDnQ3BJ9RWVVDW0VJq65%2BcMrpiEr%2Fnw6rWUqjl7FlO9AltB99VS5cTzXXPhr%2FLybj2uAlM%2FcMWO5%2FgB7Gieh%2FVUR8%2B2Rm6F4NsyRXS4K36Eq%2BhNSs%2FYwTZ8SV52P%2FSLepj8tCGNbBX%2FgpBpOQs4iSt2%2BVpkN2dcUZOtX9%2Bs6HVsirzH78hk%2BbOU6D21HcxigKmAeFnBrC3ow4mF%2FATAzc88umILYyy358n32Ix8zTuGbElc93zWhD8kdQ95hGknIvvHweuf97rwI2QoYa5Fh72jEmYXk8%2FALWy2ZPP2Oz5LqBhLQCMesQPh6JvyBRnETxvdOdzy97eARHNujF3gJIKEefL3MLbSD1wyXsJo5sQmTHwambkCtzIsEd2pRbS9ETkJDgE9p1pULCL5s5gLng17R6T0FjYs3yyzFKH6xSL8c7e4nMOkPicpiLk9dekIFmV0w85qmxAY6pgGCgu1HM0MuWSdy13WPrh9tMWvxkQwJhuRxN5krFNjdG8SL1HLTkw4K58Pxd3HV%2FUf%2BXJKYN2f7bXm9HyJcf9yD97fIDw%2BQDWRbVC31rri1JElTUkGZpASxgqbdzl63fwbx7EK6scT3vk788c771rY9b1vTXQuLVd9gt6fDgMw1GygWwaKvFznCwTAb8QeGBttlLrnzHxVmm0AWQrZansu9pm04DSEQ&X-Amz-Signature=5db2eaa2ed353f5459efdef9821e7dc48c8dfa7c84914c16f88a7e74fb5df134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTU44A5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGawe3TtoPYaZC%2Bc95qDbIu6K5TPRcrVx64ptbj87wjLAiA04h8KfkNZfsm4pW6r%2B2qkZ8Y5gUy2eDqWR4HPBRhaEiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXjYkjv55t5p3r6mkKtwDGYzHAcoLWbLWN%2FspDxmRtM3vNBOV5%2FwVzB6%2BBgbRFZ67jijUwxBN0nuS9HyJfc4Q%2BtWqREHyhN32dxiM2ws62W7N0MHcBGFefvy7NRBIO715IqHaHj8FM7Ir%2BkmuMehAkp3ZNkCrfTGKKohmmiWxRLFm1h5xn3LIFRBm7Dk%2FSBjyQWrsOx3rE2eicDnQ3BJ9RWVVDW0VJq65%2BcMrpiEr%2Fnw6rWUqjl7FlO9AltB99VS5cTzXXPhr%2FLybj2uAlM%2FcMWO5%2FgB7Gieh%2FVUR8%2B2Rm6F4NsyRXS4K36Eq%2BhNSs%2FYwTZ8SV52P%2FSLepj8tCGNbBX%2FgpBpOQs4iSt2%2BVpkN2dcUZOtX9%2Bs6HVsirzH78hk%2BbOU6D21HcxigKmAeFnBrC3ow4mF%2FATAzc88umILYyy358n32Ix8zTuGbElc93zWhD8kdQ95hGknIvvHweuf97rwI2QoYa5Fh72jEmYXk8%2FALWy2ZPP2Oz5LqBhLQCMesQPh6JvyBRnETxvdOdzy97eARHNujF3gJIKEefL3MLbSD1wyXsJo5sQmTHwambkCtzIsEd2pRbS9ETkJDgE9p1pULCL5s5gLng17R6T0FjYs3yyzFKH6xSL8c7e4nMOkPicpiLk9dekIFmV0w85qmxAY6pgGCgu1HM0MuWSdy13WPrh9tMWvxkQwJhuRxN5krFNjdG8SL1HLTkw4K58Pxd3HV%2FUf%2BXJKYN2f7bXm9HyJcf9yD97fIDw%2BQDWRbVC31rri1JElTUkGZpASxgqbdzl63fwbx7EK6scT3vk788c771rY9b1vTXQuLVd9gt6fDgMw1GygWwaKvFznCwTAb8QeGBttlLrnzHxVmm0AWQrZansu9pm04DSEQ&X-Amz-Signature=b984fff19803e84e58e6d735d731df99f3e5eb3cd7ea20221a8c2b1f13446e38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTU44A5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGawe3TtoPYaZC%2Bc95qDbIu6K5TPRcrVx64ptbj87wjLAiA04h8KfkNZfsm4pW6r%2B2qkZ8Y5gUy2eDqWR4HPBRhaEiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXjYkjv55t5p3r6mkKtwDGYzHAcoLWbLWN%2FspDxmRtM3vNBOV5%2FwVzB6%2BBgbRFZ67jijUwxBN0nuS9HyJfc4Q%2BtWqREHyhN32dxiM2ws62W7N0MHcBGFefvy7NRBIO715IqHaHj8FM7Ir%2BkmuMehAkp3ZNkCrfTGKKohmmiWxRLFm1h5xn3LIFRBm7Dk%2FSBjyQWrsOx3rE2eicDnQ3BJ9RWVVDW0VJq65%2BcMrpiEr%2Fnw6rWUqjl7FlO9AltB99VS5cTzXXPhr%2FLybj2uAlM%2FcMWO5%2FgB7Gieh%2FVUR8%2B2Rm6F4NsyRXS4K36Eq%2BhNSs%2FYwTZ8SV52P%2FSLepj8tCGNbBX%2FgpBpOQs4iSt2%2BVpkN2dcUZOtX9%2Bs6HVsirzH78hk%2BbOU6D21HcxigKmAeFnBrC3ow4mF%2FATAzc88umILYyy358n32Ix8zTuGbElc93zWhD8kdQ95hGknIvvHweuf97rwI2QoYa5Fh72jEmYXk8%2FALWy2ZPP2Oz5LqBhLQCMesQPh6JvyBRnETxvdOdzy97eARHNujF3gJIKEefL3MLbSD1wyXsJo5sQmTHwambkCtzIsEd2pRbS9ETkJDgE9p1pULCL5s5gLng17R6T0FjYs3yyzFKH6xSL8c7e4nMOkPicpiLk9dekIFmV0w85qmxAY6pgGCgu1HM0MuWSdy13WPrh9tMWvxkQwJhuRxN5krFNjdG8SL1HLTkw4K58Pxd3HV%2FUf%2BXJKYN2f7bXm9HyJcf9yD97fIDw%2BQDWRbVC31rri1JElTUkGZpASxgqbdzl63fwbx7EK6scT3vk788c771rY9b1vTXQuLVd9gt6fDgMw1GygWwaKvFznCwTAb8QeGBttlLrnzHxVmm0AWQrZansu9pm04DSEQ&X-Amz-Signature=56d7680fb57c49e8bb24445803586d796d20a1235c5e51d2dbb7b38306a25e55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVTU44A5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGawe3TtoPYaZC%2Bc95qDbIu6K5TPRcrVx64ptbj87wjLAiA04h8KfkNZfsm4pW6r%2B2qkZ8Y5gUy2eDqWR4HPBRhaEiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXjYkjv55t5p3r6mkKtwDGYzHAcoLWbLWN%2FspDxmRtM3vNBOV5%2FwVzB6%2BBgbRFZ67jijUwxBN0nuS9HyJfc4Q%2BtWqREHyhN32dxiM2ws62W7N0MHcBGFefvy7NRBIO715IqHaHj8FM7Ir%2BkmuMehAkp3ZNkCrfTGKKohmmiWxRLFm1h5xn3LIFRBm7Dk%2FSBjyQWrsOx3rE2eicDnQ3BJ9RWVVDW0VJq65%2BcMrpiEr%2Fnw6rWUqjl7FlO9AltB99VS5cTzXXPhr%2FLybj2uAlM%2FcMWO5%2FgB7Gieh%2FVUR8%2B2Rm6F4NsyRXS4K36Eq%2BhNSs%2FYwTZ8SV52P%2FSLepj8tCGNbBX%2FgpBpOQs4iSt2%2BVpkN2dcUZOtX9%2Bs6HVsirzH78hk%2BbOU6D21HcxigKmAeFnBrC3ow4mF%2FATAzc88umILYyy358n32Ix8zTuGbElc93zWhD8kdQ95hGknIvvHweuf97rwI2QoYa5Fh72jEmYXk8%2FALWy2ZPP2Oz5LqBhLQCMesQPh6JvyBRnETxvdOdzy97eARHNujF3gJIKEefL3MLbSD1wyXsJo5sQmTHwambkCtzIsEd2pRbS9ETkJDgE9p1pULCL5s5gLng17R6T0FjYs3yyzFKH6xSL8c7e4nMOkPicpiLk9dekIFmV0w85qmxAY6pgGCgu1HM0MuWSdy13WPrh9tMWvxkQwJhuRxN5krFNjdG8SL1HLTkw4K58Pxd3HV%2FUf%2BXJKYN2f7bXm9HyJcf9yD97fIDw%2BQDWRbVC31rri1JElTUkGZpASxgqbdzl63fwbx7EK6scT3vk788c771rY9b1vTXQuLVd9gt6fDgMw1GygWwaKvFznCwTAb8QeGBttlLrnzHxVmm0AWQrZansu9pm04DSEQ&X-Amz-Signature=65aa209311724cff9ab09930afa72a4ae598d3b67324f67ed9d7e26693fbd112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B4NZXRF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7FRJz5a1nHu7Z6iTKCpfENCqeLFM0HYlhCgJgVIGWTAiEA7MnyC2hvL%2BDweM8jVQ2kAZCkkatbS2vnGWP2nVfYvEEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdwDfKvLkbxuha%2FoircA80tSuuSuAupazSZvpQsjOa6btwEFXW26kXQ8xFeQJ0MS8FDtPVxCnsBMzso0o015REFk1PAiE8a%2BxAu7UhhmfWjckNusNg0DyqszlsGS5EN%2FUjpiykf1FPI%2FMuxblzxS6wvmdC1wMtEeduUeFajzeN4UPTpveQqCd2oRNbIYHA5xqikUNpk99vI5SvIR39DNuqovYPUBE12bb8OZ%2FKP8hiyufzqyJvzG8elqkcpZ%2Fts8jdy5HbjgM6Uee0SyP0tF7Aj9UmDgJ4TfkhCHIdIyZeB3EpeceSqbqlOFh3Z8WWQx8x7pAqZ85jVrcA%2FHRqvQqKK6Dj1y7ds272EMpImsBR%2Bu9tKFPVDfRVfma2dQJdo7crtoShFmW3H4DwN7yWKnxNuy8kZ5S%2Focedohl7F3JeatVyrzryTRpuZjwV%2Fcd4j8ZuuMXVLHxOmP8igRX6vZApiKHgmkubAWfOqMwYP784NsE7EdtXvqGa33UXIcB1i%2FnPwAeP8YkDKZW1c86rbqQs4qlNyAK%2BNaqU9%2Fye9IvsgX8ORgC2kh4QvkuXWureVQc1PY%2FN6pK4FwGDfDgKm5ehoM%2BYZEmbIOLOAt7DfebjzobeY3XaJAwjmSDqGkirOlyHrUeCQSiGKkMVpMIDypcQGOqUBKOC0C7PUepE5SmupNkD1u3TEirQuuYOlqF2oOdWlcP%2BjBTS%2BlJgtJ6q4erEMksWX7fICI9pWZn5tbYnXxKOgMvxRsLUVl2UV0rQlmc278x0FAfIlKTXarM7cy3exXz2X%2FxlLRXf1CoDblwtS9fd5oS%2BUMpCh%2B%2FXDrQXuuQc12HNnVfyeZU%2Bi9GXGj7Rb4TmRbkVzVL9V8iiS%2FAu8M5VZwwkK43DK&X-Amz-Signature=ec480cf1c8ef64ec09621990c3ac197a26fb86589b919b1d5fbbad5e98224922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B4NZXRF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7FRJz5a1nHu7Z6iTKCpfENCqeLFM0HYlhCgJgVIGWTAiEA7MnyC2hvL%2BDweM8jVQ2kAZCkkatbS2vnGWP2nVfYvEEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdwDfKvLkbxuha%2FoircA80tSuuSuAupazSZvpQsjOa6btwEFXW26kXQ8xFeQJ0MS8FDtPVxCnsBMzso0o015REFk1PAiE8a%2BxAu7UhhmfWjckNusNg0DyqszlsGS5EN%2FUjpiykf1FPI%2FMuxblzxS6wvmdC1wMtEeduUeFajzeN4UPTpveQqCd2oRNbIYHA5xqikUNpk99vI5SvIR39DNuqovYPUBE12bb8OZ%2FKP8hiyufzqyJvzG8elqkcpZ%2Fts8jdy5HbjgM6Uee0SyP0tF7Aj9UmDgJ4TfkhCHIdIyZeB3EpeceSqbqlOFh3Z8WWQx8x7pAqZ85jVrcA%2FHRqvQqKK6Dj1y7ds272EMpImsBR%2Bu9tKFPVDfRVfma2dQJdo7crtoShFmW3H4DwN7yWKnxNuy8kZ5S%2Focedohl7F3JeatVyrzryTRpuZjwV%2Fcd4j8ZuuMXVLHxOmP8igRX6vZApiKHgmkubAWfOqMwYP784NsE7EdtXvqGa33UXIcB1i%2FnPwAeP8YkDKZW1c86rbqQs4qlNyAK%2BNaqU9%2Fye9IvsgX8ORgC2kh4QvkuXWureVQc1PY%2FN6pK4FwGDfDgKm5ehoM%2BYZEmbIOLOAt7DfebjzobeY3XaJAwjmSDqGkirOlyHrUeCQSiGKkMVpMIDypcQGOqUBKOC0C7PUepE5SmupNkD1u3TEirQuuYOlqF2oOdWlcP%2BjBTS%2BlJgtJ6q4erEMksWX7fICI9pWZn5tbYnXxKOgMvxRsLUVl2UV0rQlmc278x0FAfIlKTXarM7cy3exXz2X%2FxlLRXf1CoDblwtS9fd5oS%2BUMpCh%2B%2FXDrQXuuQc12HNnVfyeZU%2Bi9GXGj7Rb4TmRbkVzVL9V8iiS%2FAu8M5VZwwkK43DK&X-Amz-Signature=a8f15233a30a33a62f8cb1ab3411de0b2cb83ad00ac35ac38af89e229a8e1514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B4NZXRF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7FRJz5a1nHu7Z6iTKCpfENCqeLFM0HYlhCgJgVIGWTAiEA7MnyC2hvL%2BDweM8jVQ2kAZCkkatbS2vnGWP2nVfYvEEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdwDfKvLkbxuha%2FoircA80tSuuSuAupazSZvpQsjOa6btwEFXW26kXQ8xFeQJ0MS8FDtPVxCnsBMzso0o015REFk1PAiE8a%2BxAu7UhhmfWjckNusNg0DyqszlsGS5EN%2FUjpiykf1FPI%2FMuxblzxS6wvmdC1wMtEeduUeFajzeN4UPTpveQqCd2oRNbIYHA5xqikUNpk99vI5SvIR39DNuqovYPUBE12bb8OZ%2FKP8hiyufzqyJvzG8elqkcpZ%2Fts8jdy5HbjgM6Uee0SyP0tF7Aj9UmDgJ4TfkhCHIdIyZeB3EpeceSqbqlOFh3Z8WWQx8x7pAqZ85jVrcA%2FHRqvQqKK6Dj1y7ds272EMpImsBR%2Bu9tKFPVDfRVfma2dQJdo7crtoShFmW3H4DwN7yWKnxNuy8kZ5S%2Focedohl7F3JeatVyrzryTRpuZjwV%2Fcd4j8ZuuMXVLHxOmP8igRX6vZApiKHgmkubAWfOqMwYP784NsE7EdtXvqGa33UXIcB1i%2FnPwAeP8YkDKZW1c86rbqQs4qlNyAK%2BNaqU9%2Fye9IvsgX8ORgC2kh4QvkuXWureVQc1PY%2FN6pK4FwGDfDgKm5ehoM%2BYZEmbIOLOAt7DfebjzobeY3XaJAwjmSDqGkirOlyHrUeCQSiGKkMVpMIDypcQGOqUBKOC0C7PUepE5SmupNkD1u3TEirQuuYOlqF2oOdWlcP%2BjBTS%2BlJgtJ6q4erEMksWX7fICI9pWZn5tbYnXxKOgMvxRsLUVl2UV0rQlmc278x0FAfIlKTXarM7cy3exXz2X%2FxlLRXf1CoDblwtS9fd5oS%2BUMpCh%2B%2FXDrQXuuQc12HNnVfyeZU%2Bi9GXGj7Rb4TmRbkVzVL9V8iiS%2FAu8M5VZwwkK43DK&X-Amz-Signature=ac9ff909e86017c025fbf75443450ede3d6c1b2b36b95bc8dd13c38c930a682d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B4NZXRF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7FRJz5a1nHu7Z6iTKCpfENCqeLFM0HYlhCgJgVIGWTAiEA7MnyC2hvL%2BDweM8jVQ2kAZCkkatbS2vnGWP2nVfYvEEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdwDfKvLkbxuha%2FoircA80tSuuSuAupazSZvpQsjOa6btwEFXW26kXQ8xFeQJ0MS8FDtPVxCnsBMzso0o015REFk1PAiE8a%2BxAu7UhhmfWjckNusNg0DyqszlsGS5EN%2FUjpiykf1FPI%2FMuxblzxS6wvmdC1wMtEeduUeFajzeN4UPTpveQqCd2oRNbIYHA5xqikUNpk99vI5SvIR39DNuqovYPUBE12bb8OZ%2FKP8hiyufzqyJvzG8elqkcpZ%2Fts8jdy5HbjgM6Uee0SyP0tF7Aj9UmDgJ4TfkhCHIdIyZeB3EpeceSqbqlOFh3Z8WWQx8x7pAqZ85jVrcA%2FHRqvQqKK6Dj1y7ds272EMpImsBR%2Bu9tKFPVDfRVfma2dQJdo7crtoShFmW3H4DwN7yWKnxNuy8kZ5S%2Focedohl7F3JeatVyrzryTRpuZjwV%2Fcd4j8ZuuMXVLHxOmP8igRX6vZApiKHgmkubAWfOqMwYP784NsE7EdtXvqGa33UXIcB1i%2FnPwAeP8YkDKZW1c86rbqQs4qlNyAK%2BNaqU9%2Fye9IvsgX8ORgC2kh4QvkuXWureVQc1PY%2FN6pK4FwGDfDgKm5ehoM%2BYZEmbIOLOAt7DfebjzobeY3XaJAwjmSDqGkirOlyHrUeCQSiGKkMVpMIDypcQGOqUBKOC0C7PUepE5SmupNkD1u3TEirQuuYOlqF2oOdWlcP%2BjBTS%2BlJgtJ6q4erEMksWX7fICI9pWZn5tbYnXxKOgMvxRsLUVl2UV0rQlmc278x0FAfIlKTXarM7cy3exXz2X%2FxlLRXf1CoDblwtS9fd5oS%2BUMpCh%2B%2FXDrQXuuQc12HNnVfyeZU%2Bi9GXGj7Rb4TmRbkVzVL9V8iiS%2FAu8M5VZwwkK43DK&X-Amz-Signature=2e191816df86b029a8413cf880e3b0efe4c7abeb3a4ffbd98eb26841d115dbfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B4NZXRF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7FRJz5a1nHu7Z6iTKCpfENCqeLFM0HYlhCgJgVIGWTAiEA7MnyC2hvL%2BDweM8jVQ2kAZCkkatbS2vnGWP2nVfYvEEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdwDfKvLkbxuha%2FoircA80tSuuSuAupazSZvpQsjOa6btwEFXW26kXQ8xFeQJ0MS8FDtPVxCnsBMzso0o015REFk1PAiE8a%2BxAu7UhhmfWjckNusNg0DyqszlsGS5EN%2FUjpiykf1FPI%2FMuxblzxS6wvmdC1wMtEeduUeFajzeN4UPTpveQqCd2oRNbIYHA5xqikUNpk99vI5SvIR39DNuqovYPUBE12bb8OZ%2FKP8hiyufzqyJvzG8elqkcpZ%2Fts8jdy5HbjgM6Uee0SyP0tF7Aj9UmDgJ4TfkhCHIdIyZeB3EpeceSqbqlOFh3Z8WWQx8x7pAqZ85jVrcA%2FHRqvQqKK6Dj1y7ds272EMpImsBR%2Bu9tKFPVDfRVfma2dQJdo7crtoShFmW3H4DwN7yWKnxNuy8kZ5S%2Focedohl7F3JeatVyrzryTRpuZjwV%2Fcd4j8ZuuMXVLHxOmP8igRX6vZApiKHgmkubAWfOqMwYP784NsE7EdtXvqGa33UXIcB1i%2FnPwAeP8YkDKZW1c86rbqQs4qlNyAK%2BNaqU9%2Fye9IvsgX8ORgC2kh4QvkuXWureVQc1PY%2FN6pK4FwGDfDgKm5ehoM%2BYZEmbIOLOAt7DfebjzobeY3XaJAwjmSDqGkirOlyHrUeCQSiGKkMVpMIDypcQGOqUBKOC0C7PUepE5SmupNkD1u3TEirQuuYOlqF2oOdWlcP%2BjBTS%2BlJgtJ6q4erEMksWX7fICI9pWZn5tbYnXxKOgMvxRsLUVl2UV0rQlmc278x0FAfIlKTXarM7cy3exXz2X%2FxlLRXf1CoDblwtS9fd5oS%2BUMpCh%2B%2FXDrQXuuQc12HNnVfyeZU%2Bi9GXGj7Rb4TmRbkVzVL9V8iiS%2FAu8M5VZwwkK43DK&X-Amz-Signature=f5bff7237350f14264a98ea008099c6bc2bd5f142c30696704d93ff4c5673739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B4NZXRF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7FRJz5a1nHu7Z6iTKCpfENCqeLFM0HYlhCgJgVIGWTAiEA7MnyC2hvL%2BDweM8jVQ2kAZCkkatbS2vnGWP2nVfYvEEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdwDfKvLkbxuha%2FoircA80tSuuSuAupazSZvpQsjOa6btwEFXW26kXQ8xFeQJ0MS8FDtPVxCnsBMzso0o015REFk1PAiE8a%2BxAu7UhhmfWjckNusNg0DyqszlsGS5EN%2FUjpiykf1FPI%2FMuxblzxS6wvmdC1wMtEeduUeFajzeN4UPTpveQqCd2oRNbIYHA5xqikUNpk99vI5SvIR39DNuqovYPUBE12bb8OZ%2FKP8hiyufzqyJvzG8elqkcpZ%2Fts8jdy5HbjgM6Uee0SyP0tF7Aj9UmDgJ4TfkhCHIdIyZeB3EpeceSqbqlOFh3Z8WWQx8x7pAqZ85jVrcA%2FHRqvQqKK6Dj1y7ds272EMpImsBR%2Bu9tKFPVDfRVfma2dQJdo7crtoShFmW3H4DwN7yWKnxNuy8kZ5S%2Focedohl7F3JeatVyrzryTRpuZjwV%2Fcd4j8ZuuMXVLHxOmP8igRX6vZApiKHgmkubAWfOqMwYP784NsE7EdtXvqGa33UXIcB1i%2FnPwAeP8YkDKZW1c86rbqQs4qlNyAK%2BNaqU9%2Fye9IvsgX8ORgC2kh4QvkuXWureVQc1PY%2FN6pK4FwGDfDgKm5ehoM%2BYZEmbIOLOAt7DfebjzobeY3XaJAwjmSDqGkirOlyHrUeCQSiGKkMVpMIDypcQGOqUBKOC0C7PUepE5SmupNkD1u3TEirQuuYOlqF2oOdWlcP%2BjBTS%2BlJgtJ6q4erEMksWX7fICI9pWZn5tbYnXxKOgMvxRsLUVl2UV0rQlmc278x0FAfIlKTXarM7cy3exXz2X%2FxlLRXf1CoDblwtS9fd5oS%2BUMpCh%2B%2FXDrQXuuQc12HNnVfyeZU%2Bi9GXGj7Rb4TmRbkVzVL9V8iiS%2FAu8M5VZwwkK43DK&X-Amz-Signature=9a1fc0072c2438e2971b5eb58b3729c798828a0e78cece6d5c6274eb87643c54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
