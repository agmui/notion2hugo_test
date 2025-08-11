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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PPUBYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8brlGxds0b3FeGHPdOrXbzYK64ReKhKBiKdHVFIimqAIhAM88ZD%2FSPL%2BwBIcmHl1iGHJGHsqbv%2BxCO9FUxu60XSC8KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv0n3G1yYzaDDqD%2B8q3AOyGjCD4IHE8NpoCazLFr3gw4couhIIKWlTCAWmdtwqmLO%2FV1h5GRycKa58AiDJCIUrq52bm2L1MjAoN%2FCMCXgB41cbDMobXzthuU1hAaK6Pnjs8ahfM%2BzxF%2B64CNYBp4f4z84yPSVN%2FsZiHWFHrJLTQGeYe8eoe7A6f9e6iTSb2wiHy3S5ZAgw7j%2BPXE69zMMDT4bii3U0jOyHGZ5FdtogXJpL5SQmFzPnrnKv%2FF0Zti6rDdQ3%2BpxZfeZvNO6GBKTZ9YnYFfKbY8RWdqyGjEsHZ7jTIetxdSJrVxWzUk76y6s5IsK8TUHoyrov8LoSTemWYSrg1bdLGeRNEbqvJ8VVs7W%2Bd7%2FfFcruE2N2jnr8jXcZFatPzlUGkpBNzd5RJBd3eu9iYOd32IHrxgv%2FnK68OXrWyPi6KzyVCkn%2FEyVBKw51o8Gb6QQCA2cwgOdQkLZHuTSqRROaxH5Ow1ShuDgJ5gkCIOOKfs4oM3F4evg0z4saT%2BUK2ERS8BmO5YlxqTAsUp%2BrAJikCZFCqckrnHIJz5mp4KzCOErekbb%2BB66J1MC%2BNbYXkTKjvJHafYE8cE3scVClHBkBQNoW6X4O95yRb8VKcZBPMmBDDJullxOCuzjaFAEofLVKBtJ%2BsTDB%2BebEBjqkAeA76tn8w5B9KsZtc%2FlolnunOHd6WAVF82MJsQgjqTdOnDKf1blKiPPXh1lkZC%2Fcm%2B4tYwrwPkwYJCYyicBUDvChkuWmScDzrkxirj%2F%2Be4n%2FdMRDXQNFzI7V0ukueVsBFiBlMdx9ozKQ6hA76FgdgJ7s2vCCKcKAjBiz2ECxNDwK%2BLbupk3k9myLFcOC49swdP3oQ1Kwkiqzrj9GsvwCN5dDYrlg&X-Amz-Signature=32c70bf5e70cd884895f55061c45fe49f8a7098c874e6d0e89f55791a6c58022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PPUBYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8brlGxds0b3FeGHPdOrXbzYK64ReKhKBiKdHVFIimqAIhAM88ZD%2FSPL%2BwBIcmHl1iGHJGHsqbv%2BxCO9FUxu60XSC8KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv0n3G1yYzaDDqD%2B8q3AOyGjCD4IHE8NpoCazLFr3gw4couhIIKWlTCAWmdtwqmLO%2FV1h5GRycKa58AiDJCIUrq52bm2L1MjAoN%2FCMCXgB41cbDMobXzthuU1hAaK6Pnjs8ahfM%2BzxF%2B64CNYBp4f4z84yPSVN%2FsZiHWFHrJLTQGeYe8eoe7A6f9e6iTSb2wiHy3S5ZAgw7j%2BPXE69zMMDT4bii3U0jOyHGZ5FdtogXJpL5SQmFzPnrnKv%2FF0Zti6rDdQ3%2BpxZfeZvNO6GBKTZ9YnYFfKbY8RWdqyGjEsHZ7jTIetxdSJrVxWzUk76y6s5IsK8TUHoyrov8LoSTemWYSrg1bdLGeRNEbqvJ8VVs7W%2Bd7%2FfFcruE2N2jnr8jXcZFatPzlUGkpBNzd5RJBd3eu9iYOd32IHrxgv%2FnK68OXrWyPi6KzyVCkn%2FEyVBKw51o8Gb6QQCA2cwgOdQkLZHuTSqRROaxH5Ow1ShuDgJ5gkCIOOKfs4oM3F4evg0z4saT%2BUK2ERS8BmO5YlxqTAsUp%2BrAJikCZFCqckrnHIJz5mp4KzCOErekbb%2BB66J1MC%2BNbYXkTKjvJHafYE8cE3scVClHBkBQNoW6X4O95yRb8VKcZBPMmBDDJullxOCuzjaFAEofLVKBtJ%2BsTDB%2BebEBjqkAeA76tn8w5B9KsZtc%2FlolnunOHd6WAVF82MJsQgjqTdOnDKf1blKiPPXh1lkZC%2Fcm%2B4tYwrwPkwYJCYyicBUDvChkuWmScDzrkxirj%2F%2Be4n%2FdMRDXQNFzI7V0ukueVsBFiBlMdx9ozKQ6hA76FgdgJ7s2vCCKcKAjBiz2ECxNDwK%2BLbupk3k9myLFcOC49swdP3oQ1Kwkiqzrj9GsvwCN5dDYrlg&X-Amz-Signature=49ed4434da5198f447e806ac40dbe8f579e8521db8710bea5e32f0b3605c7418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PPUBYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8brlGxds0b3FeGHPdOrXbzYK64ReKhKBiKdHVFIimqAIhAM88ZD%2FSPL%2BwBIcmHl1iGHJGHsqbv%2BxCO9FUxu60XSC8KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv0n3G1yYzaDDqD%2B8q3AOyGjCD4IHE8NpoCazLFr3gw4couhIIKWlTCAWmdtwqmLO%2FV1h5GRycKa58AiDJCIUrq52bm2L1MjAoN%2FCMCXgB41cbDMobXzthuU1hAaK6Pnjs8ahfM%2BzxF%2B64CNYBp4f4z84yPSVN%2FsZiHWFHrJLTQGeYe8eoe7A6f9e6iTSb2wiHy3S5ZAgw7j%2BPXE69zMMDT4bii3U0jOyHGZ5FdtogXJpL5SQmFzPnrnKv%2FF0Zti6rDdQ3%2BpxZfeZvNO6GBKTZ9YnYFfKbY8RWdqyGjEsHZ7jTIetxdSJrVxWzUk76y6s5IsK8TUHoyrov8LoSTemWYSrg1bdLGeRNEbqvJ8VVs7W%2Bd7%2FfFcruE2N2jnr8jXcZFatPzlUGkpBNzd5RJBd3eu9iYOd32IHrxgv%2FnK68OXrWyPi6KzyVCkn%2FEyVBKw51o8Gb6QQCA2cwgOdQkLZHuTSqRROaxH5Ow1ShuDgJ5gkCIOOKfs4oM3F4evg0z4saT%2BUK2ERS8BmO5YlxqTAsUp%2BrAJikCZFCqckrnHIJz5mp4KzCOErekbb%2BB66J1MC%2BNbYXkTKjvJHafYE8cE3scVClHBkBQNoW6X4O95yRb8VKcZBPMmBDDJullxOCuzjaFAEofLVKBtJ%2BsTDB%2BebEBjqkAeA76tn8w5B9KsZtc%2FlolnunOHd6WAVF82MJsQgjqTdOnDKf1blKiPPXh1lkZC%2Fcm%2B4tYwrwPkwYJCYyicBUDvChkuWmScDzrkxirj%2F%2Be4n%2FdMRDXQNFzI7V0ukueVsBFiBlMdx9ozKQ6hA76FgdgJ7s2vCCKcKAjBiz2ECxNDwK%2BLbupk3k9myLFcOC49swdP3oQ1Kwkiqzrj9GsvwCN5dDYrlg&X-Amz-Signature=a3433f0d08805a545f2cc64113a6df90e58fbd0c0a22cbefe4cd9d9a3720d721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PPUBYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8brlGxds0b3FeGHPdOrXbzYK64ReKhKBiKdHVFIimqAIhAM88ZD%2FSPL%2BwBIcmHl1iGHJGHsqbv%2BxCO9FUxu60XSC8KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv0n3G1yYzaDDqD%2B8q3AOyGjCD4IHE8NpoCazLFr3gw4couhIIKWlTCAWmdtwqmLO%2FV1h5GRycKa58AiDJCIUrq52bm2L1MjAoN%2FCMCXgB41cbDMobXzthuU1hAaK6Pnjs8ahfM%2BzxF%2B64CNYBp4f4z84yPSVN%2FsZiHWFHrJLTQGeYe8eoe7A6f9e6iTSb2wiHy3S5ZAgw7j%2BPXE69zMMDT4bii3U0jOyHGZ5FdtogXJpL5SQmFzPnrnKv%2FF0Zti6rDdQ3%2BpxZfeZvNO6GBKTZ9YnYFfKbY8RWdqyGjEsHZ7jTIetxdSJrVxWzUk76y6s5IsK8TUHoyrov8LoSTemWYSrg1bdLGeRNEbqvJ8VVs7W%2Bd7%2FfFcruE2N2jnr8jXcZFatPzlUGkpBNzd5RJBd3eu9iYOd32IHrxgv%2FnK68OXrWyPi6KzyVCkn%2FEyVBKw51o8Gb6QQCA2cwgOdQkLZHuTSqRROaxH5Ow1ShuDgJ5gkCIOOKfs4oM3F4evg0z4saT%2BUK2ERS8BmO5YlxqTAsUp%2BrAJikCZFCqckrnHIJz5mp4KzCOErekbb%2BB66J1MC%2BNbYXkTKjvJHafYE8cE3scVClHBkBQNoW6X4O95yRb8VKcZBPMmBDDJullxOCuzjaFAEofLVKBtJ%2BsTDB%2BebEBjqkAeA76tn8w5B9KsZtc%2FlolnunOHd6WAVF82MJsQgjqTdOnDKf1blKiPPXh1lkZC%2Fcm%2B4tYwrwPkwYJCYyicBUDvChkuWmScDzrkxirj%2F%2Be4n%2FdMRDXQNFzI7V0ukueVsBFiBlMdx9ozKQ6hA76FgdgJ7s2vCCKcKAjBiz2ECxNDwK%2BLbupk3k9myLFcOC49swdP3oQ1Kwkiqzrj9GsvwCN5dDYrlg&X-Amz-Signature=c45e8d3dd4796675853fa408847310c6769be3360a91cd9dfc45b6cffd1ff0de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PPUBYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8brlGxds0b3FeGHPdOrXbzYK64ReKhKBiKdHVFIimqAIhAM88ZD%2FSPL%2BwBIcmHl1iGHJGHsqbv%2BxCO9FUxu60XSC8KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv0n3G1yYzaDDqD%2B8q3AOyGjCD4IHE8NpoCazLFr3gw4couhIIKWlTCAWmdtwqmLO%2FV1h5GRycKa58AiDJCIUrq52bm2L1MjAoN%2FCMCXgB41cbDMobXzthuU1hAaK6Pnjs8ahfM%2BzxF%2B64CNYBp4f4z84yPSVN%2FsZiHWFHrJLTQGeYe8eoe7A6f9e6iTSb2wiHy3S5ZAgw7j%2BPXE69zMMDT4bii3U0jOyHGZ5FdtogXJpL5SQmFzPnrnKv%2FF0Zti6rDdQ3%2BpxZfeZvNO6GBKTZ9YnYFfKbY8RWdqyGjEsHZ7jTIetxdSJrVxWzUk76y6s5IsK8TUHoyrov8LoSTemWYSrg1bdLGeRNEbqvJ8VVs7W%2Bd7%2FfFcruE2N2jnr8jXcZFatPzlUGkpBNzd5RJBd3eu9iYOd32IHrxgv%2FnK68OXrWyPi6KzyVCkn%2FEyVBKw51o8Gb6QQCA2cwgOdQkLZHuTSqRROaxH5Ow1ShuDgJ5gkCIOOKfs4oM3F4evg0z4saT%2BUK2ERS8BmO5YlxqTAsUp%2BrAJikCZFCqckrnHIJz5mp4KzCOErekbb%2BB66J1MC%2BNbYXkTKjvJHafYE8cE3scVClHBkBQNoW6X4O95yRb8VKcZBPMmBDDJullxOCuzjaFAEofLVKBtJ%2BsTDB%2BebEBjqkAeA76tn8w5B9KsZtc%2FlolnunOHd6WAVF82MJsQgjqTdOnDKf1blKiPPXh1lkZC%2Fcm%2B4tYwrwPkwYJCYyicBUDvChkuWmScDzrkxirj%2F%2Be4n%2FdMRDXQNFzI7V0ukueVsBFiBlMdx9ozKQ6hA76FgdgJ7s2vCCKcKAjBiz2ECxNDwK%2BLbupk3k9myLFcOC49swdP3oQ1Kwkiqzrj9GsvwCN5dDYrlg&X-Amz-Signature=beba9519eb1808a5d3ca9b090f16f16603f5097b250e935468bc41dc1f592f48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PPUBYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8brlGxds0b3FeGHPdOrXbzYK64ReKhKBiKdHVFIimqAIhAM88ZD%2FSPL%2BwBIcmHl1iGHJGHsqbv%2BxCO9FUxu60XSC8KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv0n3G1yYzaDDqD%2B8q3AOyGjCD4IHE8NpoCazLFr3gw4couhIIKWlTCAWmdtwqmLO%2FV1h5GRycKa58AiDJCIUrq52bm2L1MjAoN%2FCMCXgB41cbDMobXzthuU1hAaK6Pnjs8ahfM%2BzxF%2B64CNYBp4f4z84yPSVN%2FsZiHWFHrJLTQGeYe8eoe7A6f9e6iTSb2wiHy3S5ZAgw7j%2BPXE69zMMDT4bii3U0jOyHGZ5FdtogXJpL5SQmFzPnrnKv%2FF0Zti6rDdQ3%2BpxZfeZvNO6GBKTZ9YnYFfKbY8RWdqyGjEsHZ7jTIetxdSJrVxWzUk76y6s5IsK8TUHoyrov8LoSTemWYSrg1bdLGeRNEbqvJ8VVs7W%2Bd7%2FfFcruE2N2jnr8jXcZFatPzlUGkpBNzd5RJBd3eu9iYOd32IHrxgv%2FnK68OXrWyPi6KzyVCkn%2FEyVBKw51o8Gb6QQCA2cwgOdQkLZHuTSqRROaxH5Ow1ShuDgJ5gkCIOOKfs4oM3F4evg0z4saT%2BUK2ERS8BmO5YlxqTAsUp%2BrAJikCZFCqckrnHIJz5mp4KzCOErekbb%2BB66J1MC%2BNbYXkTKjvJHafYE8cE3scVClHBkBQNoW6X4O95yRb8VKcZBPMmBDDJullxOCuzjaFAEofLVKBtJ%2BsTDB%2BebEBjqkAeA76tn8w5B9KsZtc%2FlolnunOHd6WAVF82MJsQgjqTdOnDKf1blKiPPXh1lkZC%2Fcm%2B4tYwrwPkwYJCYyicBUDvChkuWmScDzrkxirj%2F%2Be4n%2FdMRDXQNFzI7V0ukueVsBFiBlMdx9ozKQ6hA76FgdgJ7s2vCCKcKAjBiz2ECxNDwK%2BLbupk3k9myLFcOC49swdP3oQ1Kwkiqzrj9GsvwCN5dDYrlg&X-Amz-Signature=f338ae301f4a0da8e43922ed09a3d0d7ed87c176eb2525bf46d4900e6a3d0ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PPUBYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8brlGxds0b3FeGHPdOrXbzYK64ReKhKBiKdHVFIimqAIhAM88ZD%2FSPL%2BwBIcmHl1iGHJGHsqbv%2BxCO9FUxu60XSC8KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv0n3G1yYzaDDqD%2B8q3AOyGjCD4IHE8NpoCazLFr3gw4couhIIKWlTCAWmdtwqmLO%2FV1h5GRycKa58AiDJCIUrq52bm2L1MjAoN%2FCMCXgB41cbDMobXzthuU1hAaK6Pnjs8ahfM%2BzxF%2B64CNYBp4f4z84yPSVN%2FsZiHWFHrJLTQGeYe8eoe7A6f9e6iTSb2wiHy3S5ZAgw7j%2BPXE69zMMDT4bii3U0jOyHGZ5FdtogXJpL5SQmFzPnrnKv%2FF0Zti6rDdQ3%2BpxZfeZvNO6GBKTZ9YnYFfKbY8RWdqyGjEsHZ7jTIetxdSJrVxWzUk76y6s5IsK8TUHoyrov8LoSTemWYSrg1bdLGeRNEbqvJ8VVs7W%2Bd7%2FfFcruE2N2jnr8jXcZFatPzlUGkpBNzd5RJBd3eu9iYOd32IHrxgv%2FnK68OXrWyPi6KzyVCkn%2FEyVBKw51o8Gb6QQCA2cwgOdQkLZHuTSqRROaxH5Ow1ShuDgJ5gkCIOOKfs4oM3F4evg0z4saT%2BUK2ERS8BmO5YlxqTAsUp%2BrAJikCZFCqckrnHIJz5mp4KzCOErekbb%2BB66J1MC%2BNbYXkTKjvJHafYE8cE3scVClHBkBQNoW6X4O95yRb8VKcZBPMmBDDJullxOCuzjaFAEofLVKBtJ%2BsTDB%2BebEBjqkAeA76tn8w5B9KsZtc%2FlolnunOHd6WAVF82MJsQgjqTdOnDKf1blKiPPXh1lkZC%2Fcm%2B4tYwrwPkwYJCYyicBUDvChkuWmScDzrkxirj%2F%2Be4n%2FdMRDXQNFzI7V0ukueVsBFiBlMdx9ozKQ6hA76FgdgJ7s2vCCKcKAjBiz2ECxNDwK%2BLbupk3k9myLFcOC49swdP3oQ1Kwkiqzrj9GsvwCN5dDYrlg&X-Amz-Signature=20d30d05b56ae192217a9753c48aa1df45e1edf4fd2547ca02462f192ad049fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PPUBYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8brlGxds0b3FeGHPdOrXbzYK64ReKhKBiKdHVFIimqAIhAM88ZD%2FSPL%2BwBIcmHl1iGHJGHsqbv%2BxCO9FUxu60XSC8KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv0n3G1yYzaDDqD%2B8q3AOyGjCD4IHE8NpoCazLFr3gw4couhIIKWlTCAWmdtwqmLO%2FV1h5GRycKa58AiDJCIUrq52bm2L1MjAoN%2FCMCXgB41cbDMobXzthuU1hAaK6Pnjs8ahfM%2BzxF%2B64CNYBp4f4z84yPSVN%2FsZiHWFHrJLTQGeYe8eoe7A6f9e6iTSb2wiHy3S5ZAgw7j%2BPXE69zMMDT4bii3U0jOyHGZ5FdtogXJpL5SQmFzPnrnKv%2FF0Zti6rDdQ3%2BpxZfeZvNO6GBKTZ9YnYFfKbY8RWdqyGjEsHZ7jTIetxdSJrVxWzUk76y6s5IsK8TUHoyrov8LoSTemWYSrg1bdLGeRNEbqvJ8VVs7W%2Bd7%2FfFcruE2N2jnr8jXcZFatPzlUGkpBNzd5RJBd3eu9iYOd32IHrxgv%2FnK68OXrWyPi6KzyVCkn%2FEyVBKw51o8Gb6QQCA2cwgOdQkLZHuTSqRROaxH5Ow1ShuDgJ5gkCIOOKfs4oM3F4evg0z4saT%2BUK2ERS8BmO5YlxqTAsUp%2BrAJikCZFCqckrnHIJz5mp4KzCOErekbb%2BB66J1MC%2BNbYXkTKjvJHafYE8cE3scVClHBkBQNoW6X4O95yRb8VKcZBPMmBDDJullxOCuzjaFAEofLVKBtJ%2BsTDB%2BebEBjqkAeA76tn8w5B9KsZtc%2FlolnunOHd6WAVF82MJsQgjqTdOnDKf1blKiPPXh1lkZC%2Fcm%2B4tYwrwPkwYJCYyicBUDvChkuWmScDzrkxirj%2F%2Be4n%2FdMRDXQNFzI7V0ukueVsBFiBlMdx9ozKQ6hA76FgdgJ7s2vCCKcKAjBiz2ECxNDwK%2BLbupk3k9myLFcOC49swdP3oQ1Kwkiqzrj9GsvwCN5dDYrlg&X-Amz-Signature=0087477e361c78bc082e481e11d9b6afb1f3c8a3eafe5a39fd183cbb97bbee97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PPUBYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8brlGxds0b3FeGHPdOrXbzYK64ReKhKBiKdHVFIimqAIhAM88ZD%2FSPL%2BwBIcmHl1iGHJGHsqbv%2BxCO9FUxu60XSC8KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv0n3G1yYzaDDqD%2B8q3AOyGjCD4IHE8NpoCazLFr3gw4couhIIKWlTCAWmdtwqmLO%2FV1h5GRycKa58AiDJCIUrq52bm2L1MjAoN%2FCMCXgB41cbDMobXzthuU1hAaK6Pnjs8ahfM%2BzxF%2B64CNYBp4f4z84yPSVN%2FsZiHWFHrJLTQGeYe8eoe7A6f9e6iTSb2wiHy3S5ZAgw7j%2BPXE69zMMDT4bii3U0jOyHGZ5FdtogXJpL5SQmFzPnrnKv%2FF0Zti6rDdQ3%2BpxZfeZvNO6GBKTZ9YnYFfKbY8RWdqyGjEsHZ7jTIetxdSJrVxWzUk76y6s5IsK8TUHoyrov8LoSTemWYSrg1bdLGeRNEbqvJ8VVs7W%2Bd7%2FfFcruE2N2jnr8jXcZFatPzlUGkpBNzd5RJBd3eu9iYOd32IHrxgv%2FnK68OXrWyPi6KzyVCkn%2FEyVBKw51o8Gb6QQCA2cwgOdQkLZHuTSqRROaxH5Ow1ShuDgJ5gkCIOOKfs4oM3F4evg0z4saT%2BUK2ERS8BmO5YlxqTAsUp%2BrAJikCZFCqckrnHIJz5mp4KzCOErekbb%2BB66J1MC%2BNbYXkTKjvJHafYE8cE3scVClHBkBQNoW6X4O95yRb8VKcZBPMmBDDJullxOCuzjaFAEofLVKBtJ%2BsTDB%2BebEBjqkAeA76tn8w5B9KsZtc%2FlolnunOHd6WAVF82MJsQgjqTdOnDKf1blKiPPXh1lkZC%2Fcm%2B4tYwrwPkwYJCYyicBUDvChkuWmScDzrkxirj%2F%2Be4n%2FdMRDXQNFzI7V0ukueVsBFiBlMdx9ozKQ6hA76FgdgJ7s2vCCKcKAjBiz2ECxNDwK%2BLbupk3k9myLFcOC49swdP3oQ1Kwkiqzrj9GsvwCN5dDYrlg&X-Amz-Signature=e62515b798f5eae1ab26dd8fe95344dba4d7d89a7e69d8eef71fbb772f110b70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PPUBYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8brlGxds0b3FeGHPdOrXbzYK64ReKhKBiKdHVFIimqAIhAM88ZD%2FSPL%2BwBIcmHl1iGHJGHsqbv%2BxCO9FUxu60XSC8KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv0n3G1yYzaDDqD%2B8q3AOyGjCD4IHE8NpoCazLFr3gw4couhIIKWlTCAWmdtwqmLO%2FV1h5GRycKa58AiDJCIUrq52bm2L1MjAoN%2FCMCXgB41cbDMobXzthuU1hAaK6Pnjs8ahfM%2BzxF%2B64CNYBp4f4z84yPSVN%2FsZiHWFHrJLTQGeYe8eoe7A6f9e6iTSb2wiHy3S5ZAgw7j%2BPXE69zMMDT4bii3U0jOyHGZ5FdtogXJpL5SQmFzPnrnKv%2FF0Zti6rDdQ3%2BpxZfeZvNO6GBKTZ9YnYFfKbY8RWdqyGjEsHZ7jTIetxdSJrVxWzUk76y6s5IsK8TUHoyrov8LoSTemWYSrg1bdLGeRNEbqvJ8VVs7W%2Bd7%2FfFcruE2N2jnr8jXcZFatPzlUGkpBNzd5RJBd3eu9iYOd32IHrxgv%2FnK68OXrWyPi6KzyVCkn%2FEyVBKw51o8Gb6QQCA2cwgOdQkLZHuTSqRROaxH5Ow1ShuDgJ5gkCIOOKfs4oM3F4evg0z4saT%2BUK2ERS8BmO5YlxqTAsUp%2BrAJikCZFCqckrnHIJz5mp4KzCOErekbb%2BB66J1MC%2BNbYXkTKjvJHafYE8cE3scVClHBkBQNoW6X4O95yRb8VKcZBPMmBDDJullxOCuzjaFAEofLVKBtJ%2BsTDB%2BebEBjqkAeA76tn8w5B9KsZtc%2FlolnunOHd6WAVF82MJsQgjqTdOnDKf1blKiPPXh1lkZC%2Fcm%2B4tYwrwPkwYJCYyicBUDvChkuWmScDzrkxirj%2F%2Be4n%2FdMRDXQNFzI7V0ukueVsBFiBlMdx9ozKQ6hA76FgdgJ7s2vCCKcKAjBiz2ECxNDwK%2BLbupk3k9myLFcOC49swdP3oQ1Kwkiqzrj9GsvwCN5dDYrlg&X-Amz-Signature=28efac74da13d50d9d08277a32e8d00d360d1c125179d1a2421f4d4e28697662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRQ26VF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSiHnd6e4Tr6OQaegzwO56ih39q9l9KZ4dVUHrdbiyPAiBgI59e%2FNzWGgtNa7FFTIM8tQwqLyGQxQfk34cBqbhSNSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2ltmVS6IdipTuLuKtwDjME%2B92OoiVGQIGm8nJqMZACm8SNR6Vz0KswK5f1qJeeC17ZnlVkz5Zrubt3tZKO7tgqe%2FWDhB8brGSR7jBgTyQ1HDNERy0xPnXPc2NOq447YCXwuzvBT2jeiyjSOnw%2F1PfqjiMzBlDqvjIhD8%2Fq8LdvRncw0X3QxFyyLUjBi90WUez56dgC18Vbhr07cEfgD8t76aNw1UehCAbOvVtTocisO9rZvd1%2BzRdS9QF%2BYW4Q2fe6dU1NMzFK3synIHF5hvGWYp1e%2BeRWLZAc8pdozVVceEZvh7hRJl4F0bKBluLaqAqA0Neojk4hWiNdrsAw%2FhB9PFuPCqcncyf%2Fkprut9H2f0%2BWFF9Yc6eECoUqjTIxyJ3%2FM6DwLkgf0PkCpqNibr7hMzIZsCOA%2BxhXObzqHibUbUlkuhKlNKR%2BqjluhVMrfvCUjVXLV59P%2Fynl5k2LXVFApnrYxHWM29Fo061wD0%2FopKTR0o98gVrP588hGRthUjklENaVQJ5SWt%2FddMjdJVQ0potJmq5UAdVLK63hefCZUXIUAQ4ylsLMdCpaXZDtXyj3CdR4u3pvVOM%2Bpr4rRNLNtebQ2ewV7dIcqmkcqt%2BcCqf01Xh0usLk76%2BsmcvYdKysxXr1tdbw7Ou8w3%2FjmxAY6pgHRT%2FdEbEyGFxLafYqCnqe0GH%2B4bX3NvAGdhwq4eeuC4sNbnFGlOAAPNEm1hCRnO2O71A46fT7%2FxMoO00xCDYgFlB8PK0vvFMMein01VowMojp1oEn%2BS4pgpmxE3QuejELFQnqTIKqmGXPRODMtXrL%2BkFVKLkxtH3mR%2BjFNF677HEFnCS5%2F7lwAUc8pN1SXKhSm82%2FYyDm5P91ItobaP%2B%2B4vUIECcru&X-Amz-Signature=c35b2de94dff35160605b755840b68186ac5a299edb65fc8b0bf340088a999de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFNHLZYP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1rgiRQMQJTiSPBeO4emre3B%2FFpZ8TMeNjkTQNxBwnCAiEAh5lLP2QRguId8Mc7emlptruuUHIwky1OrXdwwPjmgG0qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAUvl4bMoPsCbaBA3yrcA7nBBBOzC8bDVjtuQasUNeKcnPlNb3A1TRQesdAoZvdkpeNT%2FohrSg%2F60InRuRzajcUtGts05Y%2B2yE%2F9Pq8sKlQ0H32bTcIKGSlE2wb%2BOTGOirW95kD4RWJ%2B3BH0HuZJj7ITFFkVi6lmwnRu37sWqo2JDlTTOc0SumfM7U%2FMsRfZl8GvSyXqHCb2e0WowTOSQmil2Jlt%2FwlGocyO6RvFTpPj5JDwJw4gDdofz5xBUztjcxmhSUBvMEr0n7uuAAziJ8YXpJJgwqb6R1Mvu9qUyDqLYgkuUOVlcMCjb2u8wa4BVjx6scYcKUPBzJKlc%2FTUHuK5xnCJQF3BllcmPKlsvNlAzjGxEXA7zTBOiAjq7FporpDcqLYb1EcXXx60q6wgPN44U5fqF35P08VF0tWLlbqjcWNfe%2BfH9wDqJm6EUQGstMY6vjAcY4ZtbgUQyfRWMSlI1LJ0a5ih34AI%2FjGB%2BgyCAD1JHV534Q5wU6%2BL8pDag1d13O0SInQWKVtraKZ0pJog3s7ANzmwrM%2F%2FN9BG53gaOhIQ5y5I8AS2AYj6JKhnaCgIBEJdaMaH%2FSkONSAXQaH1dgKgF%2FGw%2Fq95UA%2BEbPHzg5IQYOU7fWDfhb6mnFmd8gS99vpOaQrH24gMMPn45sQGOqUB3JBaieeKsrY3%2BRALBlmhjNcMNNNmKyiQHQBWTaL69RAeKagXeSlnY9act7w%2BXfMIRMI%2Bh3xkmf3bQKUr%2FNl4a%2Bzc5qAJISlip95%2BHxTUuPftj3KvyTt5U4gTs8%2BFX5pLeVkYCeyn5vDQMzfeUwF7MKudJqBzrbUO%2BOXxZnuC47%2BDqC6zMRw12a4qkSUsK2lOL64SP1HGK6HZoihQHUiQDOQJ2xCH&X-Amz-Signature=524c8b2bf0776b8332a6a06f563bd046c14079ec023391ef83a67d2b99a850b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSIDZK3D%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoF34ryZEiP1laSPk0UncafG4QgtN18liELwO0T6fimAiEAoOQZBt6i2KreHRVcCagg%2BfMZmoDKjXQBdc4K5XyKJqcqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDbDLPFWb7LxhR%2BpircA6%2Bk%2Fta%2Bwx%2B169pPMWDXUSVNqCt5IiUkfQhfNqm4beUjmUfOMGpkWhsY02tPqStaC53Z9dxge3bMMPdJ%2Ft4AB5wDU6EduWSEqOYKRXua5Vrr6qKSUtks0tBPlK7S9mTFFk0Q8cXlPYQGI6Kf4iH7Wa5%2BFED6K8HUB7sggE9jIuKyItAzzwr3rD1XWObp%2Blus2lvlBtnarAyddMzVWOFOGfuwyzY5gTncJaDX4Q1pCD5GnoWpVSeNFRlqnucm%2FMKp%2Ffd2BPsasXveVgErvV7Kzlr9J2Y9qU6nM53yhnd92Z49xVAJwmKM7eNsy7d5DQxc76ZHu1w7Xfw81wYU4CPhCMv9ajUYoSsDS5LpwcZOVZm0r3bQsE93VQL91HowiVLMlUO5dPGa3sA%2BXru5cWS78XpofZOfZmkAxYNXJDhQ7JIzHlWWFFYWiZOxIrJJ3J2BGZ2eRiJ8Ob6XxAtRdUJFJZzoTpEOWExvKQE5%2F6wKqyZmHlwuInlHuNWTKNNOXmp9iLZ3X4xwnwkFvXCm4kfwNSB2F4XCBseKgBDylRJ6CHdpY%2Fb4cCheDr4B3me8kif757EOd%2Fu2JBsqN5c97DaLMeUTu3%2FdW3koPoa07ajNhkZfh4KGbClgPwJqkCa6MIj55sQGOqUBWc2S1AzFhyo0f1uWHKlNFeqcUTF%2BxHbS3k%2Bgy8d5GXLbc9MRORwa2u9FejBeMXFfGnH2YVh7%2F%2BSeu7uXcJMJ6Jt%2F6p14pI6HVLhG2uNfznxhjMmZAlFIx4sKXKjX9DfGfz%2BP5GPD38waxrplgeryL5S2uB5x7Qx%2FwC7NzTBSoNWX0hFwomvL0jzqhTJLSeNIO3TzoG2m4ZkugKXOANCTcjMK%2Bxrx&X-Amz-Signature=7f6d3d11121b8e009165b224af0493c388dcd97f3c94904f1bba2f0a7d69eceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PPUBYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8brlGxds0b3FeGHPdOrXbzYK64ReKhKBiKdHVFIimqAIhAM88ZD%2FSPL%2BwBIcmHl1iGHJGHsqbv%2BxCO9FUxu60XSC8KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv0n3G1yYzaDDqD%2B8q3AOyGjCD4IHE8NpoCazLFr3gw4couhIIKWlTCAWmdtwqmLO%2FV1h5GRycKa58AiDJCIUrq52bm2L1MjAoN%2FCMCXgB41cbDMobXzthuU1hAaK6Pnjs8ahfM%2BzxF%2B64CNYBp4f4z84yPSVN%2FsZiHWFHrJLTQGeYe8eoe7A6f9e6iTSb2wiHy3S5ZAgw7j%2BPXE69zMMDT4bii3U0jOyHGZ5FdtogXJpL5SQmFzPnrnKv%2FF0Zti6rDdQ3%2BpxZfeZvNO6GBKTZ9YnYFfKbY8RWdqyGjEsHZ7jTIetxdSJrVxWzUk76y6s5IsK8TUHoyrov8LoSTemWYSrg1bdLGeRNEbqvJ8VVs7W%2Bd7%2FfFcruE2N2jnr8jXcZFatPzlUGkpBNzd5RJBd3eu9iYOd32IHrxgv%2FnK68OXrWyPi6KzyVCkn%2FEyVBKw51o8Gb6QQCA2cwgOdQkLZHuTSqRROaxH5Ow1ShuDgJ5gkCIOOKfs4oM3F4evg0z4saT%2BUK2ERS8BmO5YlxqTAsUp%2BrAJikCZFCqckrnHIJz5mp4KzCOErekbb%2BB66J1MC%2BNbYXkTKjvJHafYE8cE3scVClHBkBQNoW6X4O95yRb8VKcZBPMmBDDJullxOCuzjaFAEofLVKBtJ%2BsTDB%2BebEBjqkAeA76tn8w5B9KsZtc%2FlolnunOHd6WAVF82MJsQgjqTdOnDKf1blKiPPXh1lkZC%2Fcm%2B4tYwrwPkwYJCYyicBUDvChkuWmScDzrkxirj%2F%2Be4n%2FdMRDXQNFzI7V0ukueVsBFiBlMdx9ozKQ6hA76FgdgJ7s2vCCKcKAjBiz2ECxNDwK%2BLbupk3k9myLFcOC49swdP3oQ1Kwkiqzrj9GsvwCN5dDYrlg&X-Amz-Signature=aa4dbb621f01e64c213386e6467124821423673166ad324d4910163e833e270f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRHX2DQG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYtTK23fCocNEbo9bZvAM4klrnwLQUVc5HcBWmnKjmjQIgH3cmb7PMlAsa7MIYsNI5TmTOcYcasIVycmX40v9HEdkqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCNXXvby7p7YUPeWSrcAz0R6MTo3qiVWRBDngHWuyDT3qiaqVtbEuBdqz3%2F5A%2FavdPDffgYwCYf7e4mSOafWmBCMR8xnE5GOAgjSgmTOC8f4DBEmIZZJMaycauNx1ltTC%2FvxSrLXE%2BZW4JumXdBFgBjmsHYHn6B%2F5vgeMyh%2BS0pouTMzQx0xL6spnQjprMraksly6EUP0jlppqnSnMhgz37HBljIET36FVqUw0AhJV9UGY3L4DsvETgeiYNKNIRX%2BRru%2FrlvFtIiWeeDz4AAKey4g9ins7vJeeWxsxRTfo7%2BCz3m9lu%2BQ6o4rRPnFPpd0zJv6qs6Kx5kEbj1wC6xtxEbvo2bRAf8tfOmi5rXwEuK5htiLEObHqgfJUKBfjKFVASxRvCXrOi058YTEwIaWbrTsFELKDpCKbmy8tfgUsWJMBl3ceXgZsb3iwntmEr0BQXj2VFml7qF2Nnf%2Fa0J%2FDlDfFGdXmSEl0SIQ%2FBHtX5%2BJJoFcOAZcUO9xIpFDShWNhvsVnsjvzMOHR24CkuGGsywzPEJsRaItCrQxxv%2FSg1mrO5BJMrLb%2FbMBwXBQzonXpIYTXa%2BU8iG%2Faq%2BZd6sGHTRg2zkPsCrlPl597x4QZUomudA%2B36wGz7eQmO%2Fyna1j1sn5PivkBuMSmNMOv45sQGOqUBrwnLdN1KAGajJg3gZWRNMIFfziWhMMKG6lOi0sQ3%2BOvhW3bLuxTW4fNVq5QPashBuvDvBltKx7ypvMgipZER%2F%2BssuCUCn%2BCMtEdhw9KFLEu5FoXcbJsyDqeyMuDxed7MwJBgO9kMvJnCV5DefrNvzWXxb08TKpuFPlyNxj4hZQAjx3qbkYM2XBeeVpHaOOcYgFukppYpzak928rSrAQRXNjG%2B%2BLR&X-Amz-Signature=31cc5538ead0ea44c344be88212cc7a0d4c07e96da7180f0bf939c127170edb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PPUBYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8brlGxds0b3FeGHPdOrXbzYK64ReKhKBiKdHVFIimqAIhAM88ZD%2FSPL%2BwBIcmHl1iGHJGHsqbv%2BxCO9FUxu60XSC8KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv0n3G1yYzaDDqD%2B8q3AOyGjCD4IHE8NpoCazLFr3gw4couhIIKWlTCAWmdtwqmLO%2FV1h5GRycKa58AiDJCIUrq52bm2L1MjAoN%2FCMCXgB41cbDMobXzthuU1hAaK6Pnjs8ahfM%2BzxF%2B64CNYBp4f4z84yPSVN%2FsZiHWFHrJLTQGeYe8eoe7A6f9e6iTSb2wiHy3S5ZAgw7j%2BPXE69zMMDT4bii3U0jOyHGZ5FdtogXJpL5SQmFzPnrnKv%2FF0Zti6rDdQ3%2BpxZfeZvNO6GBKTZ9YnYFfKbY8RWdqyGjEsHZ7jTIetxdSJrVxWzUk76y6s5IsK8TUHoyrov8LoSTemWYSrg1bdLGeRNEbqvJ8VVs7W%2Bd7%2FfFcruE2N2jnr8jXcZFatPzlUGkpBNzd5RJBd3eu9iYOd32IHrxgv%2FnK68OXrWyPi6KzyVCkn%2FEyVBKw51o8Gb6QQCA2cwgOdQkLZHuTSqRROaxH5Ow1ShuDgJ5gkCIOOKfs4oM3F4evg0z4saT%2BUK2ERS8BmO5YlxqTAsUp%2BrAJikCZFCqckrnHIJz5mp4KzCOErekbb%2BB66J1MC%2BNbYXkTKjvJHafYE8cE3scVClHBkBQNoW6X4O95yRb8VKcZBPMmBDDJullxOCuzjaFAEofLVKBtJ%2BsTDB%2BebEBjqkAeA76tn8w5B9KsZtc%2FlolnunOHd6WAVF82MJsQgjqTdOnDKf1blKiPPXh1lkZC%2Fcm%2B4tYwrwPkwYJCYyicBUDvChkuWmScDzrkxirj%2F%2Be4n%2FdMRDXQNFzI7V0ukueVsBFiBlMdx9ozKQ6hA76FgdgJ7s2vCCKcKAjBiz2ECxNDwK%2BLbupk3k9myLFcOC49swdP3oQ1Kwkiqzrj9GsvwCN5dDYrlg&X-Amz-Signature=d82b44347414d1b3062e68a88768fbd5bd6fb478772abdc2d9612296a0323d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7WQSNR2%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA17pSbTiryo2MvkgcE23QKCyJNFatGlGnxuVzIbOrVEAiEA6uuL2KC%2FRqBin21Nvh8tUW2PW4ZusS4I6JKXnkNE5uYqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0uY5bNhb8aSs1PGSrcAy%2FBm3yrZ25mX6%2BYsfr9OT5U4o6S64juNDMcu%2Fch1QLYYBmaS3TtwnEpQrZHCDhIH2f2NM1ZknWLnJFPHg4O6sZOLYxmy4jXAR3USO81BFa5n7xyBp%2F%2FqOdGOk9kbBoNTeiYY7kdWZTHIiaJgzAxcrwJ6AI3HFOSGPhFJiqNCO2T4QcDr6Wuc9izj4ARnyZ2%2BlwodNXgGw%2Fp7prmJuFUc4O5%2FDSMUY6b78zB6FT5ACYabCxmWNah531td%2BKCLLoEJnbNL5JFl5UgCuefJQd9RkMb4UGoR25QDfFcvH4OAJUGvEKYouC3LFtqdVsPEI0Kt61vHnweT8OIjJ3d2oYf0%2FDt9h7aIQV3idYG8Jr4%2Fe2KPnS9uyRKrW5Xs0%2BO4PkCUu9Ox4REnHzgkvr7PSotfFVcP0%2FD1%2B6mL8AOt38ftx8CEEOv13VrGwK%2B6dNKCS4x7rdzU%2F%2BwTQ%2BvWhegappCGg0CUraB0UmltqWArZA7Xilf79cBPyZcg21CkRpJWxoK%2BDrttItAvNrqtHh5kzgKJRYpfvnhisHF5cZnNoqXbtxArx41LQkEzJDli9y1WnxUC8qKiz%2F140N5nepl2Oc1oTjJEvuvLLwKFBCN2C5W1Zj3%2Fb25YXddtpasOmMjMLz45sQGOqUBAU5vQwbgzeQ0hiD4TQ1Ip2jd2MvYYoY0OT%2FkYzOPfUKtEL0Rl4v9wA6Pg%2FszDUgIGVVIs0GucM1NhHXnl%2Blq0g2IX9rI6nCt5cAaTiHHUm9ykhzPj8aRf%2FRoSzAGrwgJMLC3AxYgq6zfUQIHHLW9UdpfZLO2vBjsJkEKtQ9XntD8hzvR6dUb511ANkr8M%2BcPj%2FUWdfqaPnuvqIdUgbJ%2BOKn33d9k&X-Amz-Signature=01dcf1fe985b1c0a59acc6742333f9a49d6f8ed197813c106c9e2e42864cdc4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PPUBYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8brlGxds0b3FeGHPdOrXbzYK64ReKhKBiKdHVFIimqAIhAM88ZD%2FSPL%2BwBIcmHl1iGHJGHsqbv%2BxCO9FUxu60XSC8KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv0n3G1yYzaDDqD%2B8q3AOyGjCD4IHE8NpoCazLFr3gw4couhIIKWlTCAWmdtwqmLO%2FV1h5GRycKa58AiDJCIUrq52bm2L1MjAoN%2FCMCXgB41cbDMobXzthuU1hAaK6Pnjs8ahfM%2BzxF%2B64CNYBp4f4z84yPSVN%2FsZiHWFHrJLTQGeYe8eoe7A6f9e6iTSb2wiHy3S5ZAgw7j%2BPXE69zMMDT4bii3U0jOyHGZ5FdtogXJpL5SQmFzPnrnKv%2FF0Zti6rDdQ3%2BpxZfeZvNO6GBKTZ9YnYFfKbY8RWdqyGjEsHZ7jTIetxdSJrVxWzUk76y6s5IsK8TUHoyrov8LoSTemWYSrg1bdLGeRNEbqvJ8VVs7W%2Bd7%2FfFcruE2N2jnr8jXcZFatPzlUGkpBNzd5RJBd3eu9iYOd32IHrxgv%2FnK68OXrWyPi6KzyVCkn%2FEyVBKw51o8Gb6QQCA2cwgOdQkLZHuTSqRROaxH5Ow1ShuDgJ5gkCIOOKfs4oM3F4evg0z4saT%2BUK2ERS8BmO5YlxqTAsUp%2BrAJikCZFCqckrnHIJz5mp4KzCOErekbb%2BB66J1MC%2BNbYXkTKjvJHafYE8cE3scVClHBkBQNoW6X4O95yRb8VKcZBPMmBDDJullxOCuzjaFAEofLVKBtJ%2BsTDB%2BebEBjqkAeA76tn8w5B9KsZtc%2FlolnunOHd6WAVF82MJsQgjqTdOnDKf1blKiPPXh1lkZC%2Fcm%2B4tYwrwPkwYJCYyicBUDvChkuWmScDzrkxirj%2F%2Be4n%2FdMRDXQNFzI7V0ukueVsBFiBlMdx9ozKQ6hA76FgdgJ7s2vCCKcKAjBiz2ECxNDwK%2BLbupk3k9myLFcOC49swdP3oQ1Kwkiqzrj9GsvwCN5dDYrlg&X-Amz-Signature=cc1602bf65e3fd88e6414ba2651ed9a25e67c1a74dba4857760a0d2d1575428a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DJCDYVI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDzjPvrs8Kusb3sWsToECc4N%2FYnF9YU2qOAm3cPkkNeLAiEA%2FEoSZmmsHs7GcyQSClQb4VVPQebBr0jagFLV9WpDyf8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNu%2BKfwFtb8gyOVHKCrcA0CSOALVQ%2BTsL8gKew8T2yTBkC8wXl5klThYOMSa5fFTgOJpsxAh%2FrSZtgoWKYDTjMkdqb3XP02YPE7rApgY5%2B4HtgcIwXowmvQYciw446%2BLENVRmFOo7%2FLjug71evZY%2FIQszPbR2QYuIga7G%2B3Zi1yZ9ieIHxv4wUQqujmNXCftMkY9lOW09ifQTUrHO6MNP49dg3gWBz2TuFW2euYnToBm090qPmKbcK6MjYCGMVc1OnsuJzWTbibiJz4okGjYlcprgHq0054Rq8FWbI%2FObzZI3DXZBaOBGBpSYzjO8j9feD12dJpo4q7UcxK%2FmGawUKe%2B7GnQ7MEMRgTJImJE1uO7RH%2F4Kf%2BfgJZtVNJDMq7LuD6AqV8I9v6nCu50GH7bCW7Ms5PW1oVPCV7ypqU%2BlSWpFdS4eYuyjsqEAINky%2F3DaVh4z63Cs2Hz2jrD7o%2FYhYFkC8yoSmWDRbHXLaJexyo0kfEKuhT1ZcjHEoJGk8oe86w00rdXZCN4VGhAWOCZWSl9yWoE%2BctY3JE5ubSQmkt54ONbH4mbyGHQapV%2FsK5CrWlrpwsMnR9%2B6SKizn2Oy7pqPKSBie4Wdy7Nq6ZN9dVyg%2Flv1LbgoxuNU3RHe8D2ASC93lauof1VRU9bMJP55sQGOqUBsSGG%2Bk6WnugmMqz2fwOS6mGGlzuzi7DVcdhkUj55J8kcMxQvORCBLwM4GiwC26GVsf4n%2F9VpEx%2B1zaZ7QQWeyhMEI6UiAL8aTzPSu2%2FZDZw1Vr89r6jMH7WmXA3NkzYq08i22O0V2Vz9hZHLhBW4XCk9ATXrKkZUjIZNRQpf2OukIYMA9Fz3M5qoha7DseOuHvlYd4yQuP%2BgebKDrpwqygi2xHOt&X-Amz-Signature=750d7af50b9022878d23f97df9f3ba010852c710ceb5253ed00d074abc9993f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PPUBYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8brlGxds0b3FeGHPdOrXbzYK64ReKhKBiKdHVFIimqAIhAM88ZD%2FSPL%2BwBIcmHl1iGHJGHsqbv%2BxCO9FUxu60XSC8KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv0n3G1yYzaDDqD%2B8q3AOyGjCD4IHE8NpoCazLFr3gw4couhIIKWlTCAWmdtwqmLO%2FV1h5GRycKa58AiDJCIUrq52bm2L1MjAoN%2FCMCXgB41cbDMobXzthuU1hAaK6Pnjs8ahfM%2BzxF%2B64CNYBp4f4z84yPSVN%2FsZiHWFHrJLTQGeYe8eoe7A6f9e6iTSb2wiHy3S5ZAgw7j%2BPXE69zMMDT4bii3U0jOyHGZ5FdtogXJpL5SQmFzPnrnKv%2FF0Zti6rDdQ3%2BpxZfeZvNO6GBKTZ9YnYFfKbY8RWdqyGjEsHZ7jTIetxdSJrVxWzUk76y6s5IsK8TUHoyrov8LoSTemWYSrg1bdLGeRNEbqvJ8VVs7W%2Bd7%2FfFcruE2N2jnr8jXcZFatPzlUGkpBNzd5RJBd3eu9iYOd32IHrxgv%2FnK68OXrWyPi6KzyVCkn%2FEyVBKw51o8Gb6QQCA2cwgOdQkLZHuTSqRROaxH5Ow1ShuDgJ5gkCIOOKfs4oM3F4evg0z4saT%2BUK2ERS8BmO5YlxqTAsUp%2BrAJikCZFCqckrnHIJz5mp4KzCOErekbb%2BB66J1MC%2BNbYXkTKjvJHafYE8cE3scVClHBkBQNoW6X4O95yRb8VKcZBPMmBDDJullxOCuzjaFAEofLVKBtJ%2BsTDB%2BebEBjqkAeA76tn8w5B9KsZtc%2FlolnunOHd6WAVF82MJsQgjqTdOnDKf1blKiPPXh1lkZC%2Fcm%2B4tYwrwPkwYJCYyicBUDvChkuWmScDzrkxirj%2F%2Be4n%2FdMRDXQNFzI7V0ukueVsBFiBlMdx9ozKQ6hA76FgdgJ7s2vCCKcKAjBiz2ECxNDwK%2BLbupk3k9myLFcOC49swdP3oQ1Kwkiqzrj9GsvwCN5dDYrlg&X-Amz-Signature=68ba25f6d0968efe87bc52bf9ae491610bfc56e446f28ec18dbf6a61773b841d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVXMGPID%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRsqrnmalYrXkpe30jtv30Mw8LuAD7Vk3DbpmicO1D4gIhAJLJ%2FSTw6wbFr5gCWVTpeSGSI22cgaKC146XKDIhM2MAKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFBIvRR3Fq7nfwwLsq3AOIrFTT9FXOYzWm5GnkqoV7jrRpTJRpw5YoeDLqsR9OT9V46F1ELNNm0XOmn4a0MJTQAeq%2B4dSUicTwYwpgo6q2%2FQPt%2FV1AQnCQjbiTU5T6azWFtPcuAtLQUGQdBk8VjAdVqwczjPn2vCNM7bORZfsFgdrb%2BuSgOV9mvB2APjJojSaUNs8bFIf4x6CqwG0ORaoXxiIrddRvyZs82TXaGcO%2Fm8xZdEvo3x47Yg38PgKfOdq4Tq6JwdMSInUcE0r3mGfXr2JzPwgbRGc8ESxmG1RCOSPxdRpmtBiFd2pU1cgoBa%2BQAf%2Fz9tgfrHkJ7bNZ98q2rbEAh7f1BnGvF5uW3GcxXyp6kLoDVb8loBjQ35OJRoKa%2BXkhF3x8FjVol2D%2FU6vMoO1BCf5SV1FcV7eVpRQ4BewP6CMOLOaGqaWLKPjx51fyMS0buvy3A%2Bs5%2FYZ4ZBfD2MH2gdKl%2BuUTrLCRz9kiR9WlIAhEl5irFc7ZlphzoxXyBJ6ZBTvX5Row%2BjGaqalnvU4Zl%2BtlJbKG3wzdWXGCPbWfFJeq0sGvcOAHGIhRslEtX9XppaAIapPMr3LRsSrDkiIVbvojRW9IeEOg4Qxbjldgzf3LL9NdA5jtKx4VbQhrtx7iJLGjuGErcDCw%2BebEBjqkAeKAT9TEqSEfAE4ReIblUcRBIMm95dvZSOpMoRyp3t4Qp5UeJqFHQX9kK4gAG%2BjTvOdv%2FLRMu4%2Fe4DMDkmGov9Q%2Fp4LWqUPIbLTFPxs4mbNXutOx8erlbN0kZMcHOOP19GUXicFw5sSQDcGpVqMnWifTZX2LegsDZvdlLB3UunTokas1EChVn8XFlhoxSPmTRwZPIZFCVD4ifWP2WD58ZVqiWjoY&X-Amz-Signature=cee76870855ec6eca2dc71d69615fc1c238ba017507b5eaa9567ab5c4be6feea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYHFY5JR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6L2XbPfjKKB8c%2Bi3AkHlNbQE%2B0%2FYfwiNpyZjOR8VWTAiEAuV4ufy%2FcECLHkkDu7uc3htgWILbkIFCSSGmpwSrQXBkqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMP4sxzpsbvQ4THRYSrcA7Auy9s6CM94CDVXkx9JlqKgnVV1cO4le5rHLQdWgcZVebexKkmBgEH0W%2BMTeYvbVlWJe0Ndob5WebqUhf3DHDNJKeD97%2Fx%2FmPW3qnvIKDiatoTL%2B%2Fcf4GJc0xV4w8Iuy%2B85Y6xyBfZB9Z0wrFbCCm9hTRx9IpiUDJj%2BZiMqrvS6TgI3E1Jjy2ZWqQtpxt%2BAKvDb8tWfG%2BW5s0sTpQIOvzsS%2FMHwKZl5B4gFZ5dDY7uSj%2Bp%2BTd48uB%2F49m6xnhey5%2FyZYMk6S%2FVYhWpa%2FPKIpbkT5kRdEuQn%2FKpHGkSrqStFEyQR%2BHzEDcrROErprpHiiA0rBsdr14CcV5Se9MOT2U0eew9qHHTAjgpb1e0ef7hJNAefPo1RMIpiOFFibpVkDhRgq9JiYGnOAmDlhyMjolfQhTflCIf1a6fO8DBZPiBB4V1ztQkbN%2BDgtV0Thww5T9JKNJcY4Nl33QZKGZiANlk3tS7TTfM4EXXjhRUC%2BymIWkuSDOJgYsvcaT7j8ECT%2BIK06ZeXEF%2BF5K2QWlEEiuFgIZUrvgKzCY7zp5cYoKYUI97J4zJ%2FXWmpDU9lrZHrxtT%2FF10CvfnaV9nedlsCE6cciJ5HKQLP7XOdFuFEICr%2FyCadKvBZ8plvmq3aMOX45sQGOqUBcChzqEX9H6Buw3dW7x6AmKS2wziPTyok9P7wDo%2FNbTbpr4QIm%2BMZFFIrYRq4HTeYGokKKFUuvTBGMaQUsOi8R8vVTfOWqTIwYkRAtfJ3OiqSDyzqTMyny%2B%2FXhaL8FswzpOQWYRwAoA86hgQZ%2FuisPMVpH7xEfcc28E3vg9vO%2FBlIDWtafuKR7o4GwM5XZ%2FOpCzRH%2BdVt0PxeLlG8J%2BnxwY%2B%2BoR4u&X-Amz-Signature=42dcb0b1072cf77cefc4948787848d7b5cfb049c2e7f9ad4279d3cfb241d8438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ZVBFDG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWohasu%2B4HlIcGfOBCLS%2Bo1BU8udQ58ZfHsyRnYvk1AQIhALodyL3MyOqk9dPWxqroXvDOKuyS5ewa6I4kGYLe%2FZ1IKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0Gy5L4IWPf7C4higq3AN9t1%2B6mZcVe9YyJ%2BYktEKd1ue3AgQLlSisEP3HPLsMC%2BZdMHlJV8HPGWQquFcRRf4gxPRQR8QiDLaHdMk3tmbmGQ8ujkY38rKk6%2BPvXTWVgQyrrzl3gSTT35UZ7orJCjbrrSBcE8iHK75ystY84M36om%2FPZO02w%2FwxnWE5s%2B4PXPjUTgZ9Wu3MJJgaKEXXwC1qMIrrhgP94GSzoBS06DOGZ1rbRhjAaPEaVXaLUSosN0gpoxYqAmGnTXTbSwFrT9UgMmEPYgg49AjANj1gbKP50xl%2BgPriB49TrIZhHYJEiOv%2FXXWvmcmIyRywzHs7Z%2F2TfAKiw6NPCmjbIh0nLziP%2B9vAt6UpPamH6aP7db%2FgEy6G1skhIKEZkM6W14sUHwVu2DXUJzsH60H32aPzQtooIld6UNwVqz9sQsQSKM0yEVODeiKWR7iGQTLOw93DShtfiP6TVgqpa5y9O0GvNuO20rPJLjZkb0Kq1ff%2B%2Bp5CMulYgZmV5EYYs4soi%2B5ZweohTJEi5Th1P%2BzoPPpcvvkny9No1scEcYSFGM7uFFnvCFMfN6hDOhRr9Id%2BdNFCE4zhLfmF1gbrU6uMjPEOYofHKxEudTvMF7HzgmM5nndis7kxzAHE9xglP1fNkTCO%2BebEBjqkATIY9%2B1B%2BIEg2u0Oulfe1zdJCANNvM65ov4rbH2jNPkpwk9Nju9Wd76DaJ8vddq4HCwdSRxykzBk30lcYcvgnIVH4wUxvnaPPfWdYW1F3tDL%2FG8Uq9hTvpxeAsfqzs01U5olCteKvGrnPFJ40xz1GvPi4wrJSJZW%2BGGyKc0edZriFGsF8dW1QkzjeeHHtc%2BJebmwAWk6Hfp7OQypg7RxKYVmm4HS&X-Amz-Signature=3538d833adbb9181ea555c09a511357ef3026c8cc8cd17ba65659c34c8432859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZRRLNS5%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFczLBaOnn8SdRY%2FPm0HqegCjfFgFj7u1ozZXkZf2xfAiEAx6vSJC%2B93LTLFH70YRIsNxeZ8KiXAuzKUFTRIFCM9rAqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0DmExGxalxdYf27ircA4hz5jXlVPLibznLWY21wgVKcwJb3SHJDIoc0I8SPhqwIsh1bpGS6k2NoaYkDKxiP75kFnDd8eFv6CLWv%2BgbbkKpK%2BDkq2WVjFXVJquTxOJ83094QTVLGU1Ak%2FzgqxOPHngrNQqaEdQpB5pVNzXDbEuVXyraajwM8Lhp4Ma3UuFnaixRNlxi581Y2jhCzojnyvS5X5eeQg9Ia71iQwvVJcsKo5AqBnP7WOVJhh9XfRJelSIgLeSs%2BfSVNd4u3BWHYbVoLOGcm3497p6nEAjhFlkl7JnlWc4KRUImo6ZsedM9UGF4bGP7zCgFT157sZR3AUgkpZVFRpjRKonSRDWnvTbLsp%2FL0IVYLaExUaF5IevjF6mXznVCecScxURjjLHf4sTSWPVxZ7wdO0aTCrUimL8w6P6MBEoEUwxxrfTjTB42%2FH6tzpYV0uSYoSqIYSttZ3ymiUjmRN4%2FOHg8d%2FSxJos7nO363aacTtShFDOra%2BM8cZdSSGjC3GjGLCAsPEdfCqBB5FYKQd9IWGVHShbzfAxUpMLlj%2FU3fcoreDgWF43nC3vHJJi5nGadh3ZVVGXP3oFLrMkL%2BbzN8d%2BUIUM%2BsDNzrLZ9wYqeKghJqRR9k4D8xckmH9DSrBwfQSEzMMb45sQGOqUBRqlAYScFO8D2VvcQpbEXHNlhc%2BRBmjZFH88ZjWsiNYkJpc%2BUTe%2Ffd%2FLQr8oCYQNuZH%2B9u0foP0bv0yi5WkkpAHEeiKpXNUIfJvTzCUiP1LESpfkW2d2W4PQQa9w9RweXz5GiNpM33qgJS8RMhGdEFF5B9Qj09dmE%2BRtkpK9ujJODLBd9ukjoFszckjazXrthL9SIoUVzchyjYsMHYzs%2FD8jMaZH5&X-Amz-Signature=b4de2b6cd9eef23863280baf11b4a57a036fe31c924561a2097dc3e62c1e8907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SASN6EIH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMAZU0ralJ1GLp7HLYK4VsW8KQYY8Kub%2BKALA3f1hlYQIhANfflCJKnmMWZ%2BINfwCWPQahmsKyiKfrygO0jkq6tjZIKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxC8BTG51p220nXPF4q3AM6PHfTnuMu%2F1KIIgJ4JKYbaBQHvYXmeE%2Fz%2FbvRMXpBwyMv3COb3OJwPCJeIttKe832pQFFvKdEzF%2BIkD5fPOV%2BH0HHiMQRca6VB3ARjgQ1S7ip4xcrOIUkqPOB%2FtPuSglU0WgTiNnTEvW4IlNly%2FhziqzB71oNoLidI159IGUF5oabyGfSz7Ynuju9fsg6FaP2saH0KKt3telPVQAtnFb86e4k%2BdUoIAwoiuTAhyU0IZS%2BoE7HGLdBeOzpwd0DaJVbep28hmLTGFFQA%2FQjeVu0LfShzIo%2Fdz07owqLaE2s%2F9EfkRveUwo5Dw8tIe416aMUu3y8YhH84a7T2NMZxdx2uSamJSb07%2FWpIuBQ%2B5XkvuBSJBxwoL1QmJh4F1iv%2FJ8FACk7eS64oauBXc4SJW%2FB4iq25mjzNJAshYXEqCK%2FzEfwnsuRNPXvN00vc5tS4LAkMqI%2FpBSi7%2FVFvcdhvjAFWgAA%2BiQhlDi9CZHztQI0ZIMX8UMB%2Bz9nTxQEuCfU6i%2Fq497HnyN4UM688ZywI0eVR2CmBmeL%2B4TyZTGhZ8JW%2FuMxx1JNgaeLEHXvkgkTF1%2FQ5N1jrR475mUFqW2uz9biXXySfceGpdwR63Azvt0a4iW58TQTYWFvAG1riDC7%2BebEBjqkAS%2BflS8SmOhlrVBZ%2FJFAJNfJVYpdxbtuU1ZtZskknNFxNIcEZEivvnZfmN7yN1HjFQJkizst1eqvxbPH8W4s%2B%2BZ8eSSfi%2BrVBAc90okqcpq0XuIr62dFmXgM8hUTihouMsQDTRUfj%2FbX%2B6JQDgAS8m6%2B0ub%2B%2F1Sw8b7bg0wJF1nB7e8Frl3EpfxKGIheoIBABs0tOzTxkJmlweXjLotY1VwXyunY&X-Amz-Signature=b1a3833954b33abfeca53bc1e80fdb2f1fc05278fe44b346a8c915f66f1a44b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PPUBYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8brlGxds0b3FeGHPdOrXbzYK64ReKhKBiKdHVFIimqAIhAM88ZD%2FSPL%2BwBIcmHl1iGHJGHsqbv%2BxCO9FUxu60XSC8KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv0n3G1yYzaDDqD%2B8q3AOyGjCD4IHE8NpoCazLFr3gw4couhIIKWlTCAWmdtwqmLO%2FV1h5GRycKa58AiDJCIUrq52bm2L1MjAoN%2FCMCXgB41cbDMobXzthuU1hAaK6Pnjs8ahfM%2BzxF%2B64CNYBp4f4z84yPSVN%2FsZiHWFHrJLTQGeYe8eoe7A6f9e6iTSb2wiHy3S5ZAgw7j%2BPXE69zMMDT4bii3U0jOyHGZ5FdtogXJpL5SQmFzPnrnKv%2FF0Zti6rDdQ3%2BpxZfeZvNO6GBKTZ9YnYFfKbY8RWdqyGjEsHZ7jTIetxdSJrVxWzUk76y6s5IsK8TUHoyrov8LoSTemWYSrg1bdLGeRNEbqvJ8VVs7W%2Bd7%2FfFcruE2N2jnr8jXcZFatPzlUGkpBNzd5RJBd3eu9iYOd32IHrxgv%2FnK68OXrWyPi6KzyVCkn%2FEyVBKw51o8Gb6QQCA2cwgOdQkLZHuTSqRROaxH5Ow1ShuDgJ5gkCIOOKfs4oM3F4evg0z4saT%2BUK2ERS8BmO5YlxqTAsUp%2BrAJikCZFCqckrnHIJz5mp4KzCOErekbb%2BB66J1MC%2BNbYXkTKjvJHafYE8cE3scVClHBkBQNoW6X4O95yRb8VKcZBPMmBDDJullxOCuzjaFAEofLVKBtJ%2BsTDB%2BebEBjqkAeA76tn8w5B9KsZtc%2FlolnunOHd6WAVF82MJsQgjqTdOnDKf1blKiPPXh1lkZC%2Fcm%2B4tYwrwPkwYJCYyicBUDvChkuWmScDzrkxirj%2F%2Be4n%2FdMRDXQNFzI7V0ukueVsBFiBlMdx9ozKQ6hA76FgdgJ7s2vCCKcKAjBiz2ECxNDwK%2BLbupk3k9myLFcOC49swdP3oQ1Kwkiqzrj9GsvwCN5dDYrlg&X-Amz-Signature=f694b7153677f4bf283f5d599cf702b3be8f8f54c761770ef5f5ed2b41170d73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4PPUBYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8brlGxds0b3FeGHPdOrXbzYK64ReKhKBiKdHVFIimqAIhAM88ZD%2FSPL%2BwBIcmHl1iGHJGHsqbv%2BxCO9FUxu60XSC8KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv0n3G1yYzaDDqD%2B8q3AOyGjCD4IHE8NpoCazLFr3gw4couhIIKWlTCAWmdtwqmLO%2FV1h5GRycKa58AiDJCIUrq52bm2L1MjAoN%2FCMCXgB41cbDMobXzthuU1hAaK6Pnjs8ahfM%2BzxF%2B64CNYBp4f4z84yPSVN%2FsZiHWFHrJLTQGeYe8eoe7A6f9e6iTSb2wiHy3S5ZAgw7j%2BPXE69zMMDT4bii3U0jOyHGZ5FdtogXJpL5SQmFzPnrnKv%2FF0Zti6rDdQ3%2BpxZfeZvNO6GBKTZ9YnYFfKbY8RWdqyGjEsHZ7jTIetxdSJrVxWzUk76y6s5IsK8TUHoyrov8LoSTemWYSrg1bdLGeRNEbqvJ8VVs7W%2Bd7%2FfFcruE2N2jnr8jXcZFatPzlUGkpBNzd5RJBd3eu9iYOd32IHrxgv%2FnK68OXrWyPi6KzyVCkn%2FEyVBKw51o8Gb6QQCA2cwgOdQkLZHuTSqRROaxH5Ow1ShuDgJ5gkCIOOKfs4oM3F4evg0z4saT%2BUK2ERS8BmO5YlxqTAsUp%2BrAJikCZFCqckrnHIJz5mp4KzCOErekbb%2BB66J1MC%2BNbYXkTKjvJHafYE8cE3scVClHBkBQNoW6X4O95yRb8VKcZBPMmBDDJullxOCuzjaFAEofLVKBtJ%2BsTDB%2BebEBjqkAeA76tn8w5B9KsZtc%2FlolnunOHd6WAVF82MJsQgjqTdOnDKf1blKiPPXh1lkZC%2Fcm%2B4tYwrwPkwYJCYyicBUDvChkuWmScDzrkxirj%2F%2Be4n%2FdMRDXQNFzI7V0ukueVsBFiBlMdx9ozKQ6hA76FgdgJ7s2vCCKcKAjBiz2ECxNDwK%2BLbupk3k9myLFcOC49swdP3oQ1Kwkiqzrj9GsvwCN5dDYrlg&X-Amz-Signature=613bd79ee114aa1cfebac0589c6e9ec5fdf0d7f6961142fe3b66ca32497dccf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3OVGLU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVxKy76DvDDh5IbvRZHWdRm5SSFrgAGa%2B5n%2B86fsUfogIhAM5Euu3sWfSSz7KrMKfddQAZb9rKyF8o2yy40yfNT5dTKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKbjQU3XgKZCpnvB8q3AP9OMyiEm121xyeALdP03qXrAd%2BCh97P5rE6i3%2B8AgQ8fiIJfmUZ39rvyUIvVcb3%2F4e0KUzu1dEM2ZqkHGx8PjIHv%2FbUxvLvP1S8Oiu06i8STIyfON%2BNdiU1yflBtRF498NarDQAL6R5o%2BJUbLknI0cLzHcJ3gaF6qyPm3q1MvBVx8h9%2BpN3DP51IVHEpsouMNPsaHvXdqCbzKv1FZfPHcNrN7gb1I4eu%2FrA8yDl7Bhnml8p%2Fz0u9j%2BWNnfQWN4njh7BcEpsIduV31bBQnMIGAWDglNHQLmBjCtQWveu%2FVh55UrXC3y%2FoMjB%2BR%2F1m1VvVfcAVxnbWXR%2FZOkz6UmIiAMQR9yvPROLMzS9VZFrgORGui9%2FosHQOdr9AHfYpn8f4KYcl%2Fdso6geInQhkR%2BHAJ1MRWA26ib%2BKsdKjkXdEMXPq3UV56UsqQ5eSAXpWkmL7zvTXBJoiBArPV8sOxDAMySVg%2FpwBLPi%2BqIZfLYE6RY4se3BrB1SbcmErwgnsq7V7j%2Fkza2XjVCZa5MZuHPL321GHjovGyv9kFX7HM9DwmvVfept%2BQRbf8g6c8vfYV7rJ%2BZc%2Bz6fWuamZRB%2FEf3jt6k6RqSsKZrRIJVL7q%2By6jDm7XvxvOajlGg5uswBTC%2B%2BObEBjqkAVGQ3RRKA5Wb38NtxoZjNP4so7yPoPWexR7aqkeX5WHRBIFrIxCRuF%2B5VFXBapZmnCEggiWlmQxuOghuz9Bnz9F62MELQQPoD6cHCJGjG%2BazU7zx1B9XsNkILomMeymRS5wYMwuO0B1kRcG36y2iRL2ZSsUJ1L1AkAOvZQBstaWbQF9KIZjyXlPuy0Zp%2BTr3LafwBOL6ogbRf7KjqgeXXj47j3B6&X-Amz-Signature=692e5afb36790781323ed8b6840a211a1e7508e26bbd75b2553dbcbcb3b778ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3OVGLU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVxKy76DvDDh5IbvRZHWdRm5SSFrgAGa%2B5n%2B86fsUfogIhAM5Euu3sWfSSz7KrMKfddQAZb9rKyF8o2yy40yfNT5dTKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKbjQU3XgKZCpnvB8q3AP9OMyiEm121xyeALdP03qXrAd%2BCh97P5rE6i3%2B8AgQ8fiIJfmUZ39rvyUIvVcb3%2F4e0KUzu1dEM2ZqkHGx8PjIHv%2FbUxvLvP1S8Oiu06i8STIyfON%2BNdiU1yflBtRF498NarDQAL6R5o%2BJUbLknI0cLzHcJ3gaF6qyPm3q1MvBVx8h9%2BpN3DP51IVHEpsouMNPsaHvXdqCbzKv1FZfPHcNrN7gb1I4eu%2FrA8yDl7Bhnml8p%2Fz0u9j%2BWNnfQWN4njh7BcEpsIduV31bBQnMIGAWDglNHQLmBjCtQWveu%2FVh55UrXC3y%2FoMjB%2BR%2F1m1VvVfcAVxnbWXR%2FZOkz6UmIiAMQR9yvPROLMzS9VZFrgORGui9%2FosHQOdr9AHfYpn8f4KYcl%2Fdso6geInQhkR%2BHAJ1MRWA26ib%2BKsdKjkXdEMXPq3UV56UsqQ5eSAXpWkmL7zvTXBJoiBArPV8sOxDAMySVg%2FpwBLPi%2BqIZfLYE6RY4se3BrB1SbcmErwgnsq7V7j%2Fkza2XjVCZa5MZuHPL321GHjovGyv9kFX7HM9DwmvVfept%2BQRbf8g6c8vfYV7rJ%2BZc%2Bz6fWuamZRB%2FEf3jt6k6RqSsKZrRIJVL7q%2By6jDm7XvxvOajlGg5uswBTC%2B%2BObEBjqkAVGQ3RRKA5Wb38NtxoZjNP4so7yPoPWexR7aqkeX5WHRBIFrIxCRuF%2B5VFXBapZmnCEggiWlmQxuOghuz9Bnz9F62MELQQPoD6cHCJGjG%2BazU7zx1B9XsNkILomMeymRS5wYMwuO0B1kRcG36y2iRL2ZSsUJ1L1AkAOvZQBstaWbQF9KIZjyXlPuy0Zp%2BTr3LafwBOL6ogbRf7KjqgeXXj47j3B6&X-Amz-Signature=8e70530b8172284ab33b5522efc93bcbdf0adfba4a9da6f10c1a73e52b5250cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3OVGLU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVxKy76DvDDh5IbvRZHWdRm5SSFrgAGa%2B5n%2B86fsUfogIhAM5Euu3sWfSSz7KrMKfddQAZb9rKyF8o2yy40yfNT5dTKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKbjQU3XgKZCpnvB8q3AP9OMyiEm121xyeALdP03qXrAd%2BCh97P5rE6i3%2B8AgQ8fiIJfmUZ39rvyUIvVcb3%2F4e0KUzu1dEM2ZqkHGx8PjIHv%2FbUxvLvP1S8Oiu06i8STIyfON%2BNdiU1yflBtRF498NarDQAL6R5o%2BJUbLknI0cLzHcJ3gaF6qyPm3q1MvBVx8h9%2BpN3DP51IVHEpsouMNPsaHvXdqCbzKv1FZfPHcNrN7gb1I4eu%2FrA8yDl7Bhnml8p%2Fz0u9j%2BWNnfQWN4njh7BcEpsIduV31bBQnMIGAWDglNHQLmBjCtQWveu%2FVh55UrXC3y%2FoMjB%2BR%2F1m1VvVfcAVxnbWXR%2FZOkz6UmIiAMQR9yvPROLMzS9VZFrgORGui9%2FosHQOdr9AHfYpn8f4KYcl%2Fdso6geInQhkR%2BHAJ1MRWA26ib%2BKsdKjkXdEMXPq3UV56UsqQ5eSAXpWkmL7zvTXBJoiBArPV8sOxDAMySVg%2FpwBLPi%2BqIZfLYE6RY4se3BrB1SbcmErwgnsq7V7j%2Fkza2XjVCZa5MZuHPL321GHjovGyv9kFX7HM9DwmvVfept%2BQRbf8g6c8vfYV7rJ%2BZc%2Bz6fWuamZRB%2FEf3jt6k6RqSsKZrRIJVL7q%2By6jDm7XvxvOajlGg5uswBTC%2B%2BObEBjqkAVGQ3RRKA5Wb38NtxoZjNP4so7yPoPWexR7aqkeX5WHRBIFrIxCRuF%2B5VFXBapZmnCEggiWlmQxuOghuz9Bnz9F62MELQQPoD6cHCJGjG%2BazU7zx1B9XsNkILomMeymRS5wYMwuO0B1kRcG36y2iRL2ZSsUJ1L1AkAOvZQBstaWbQF9KIZjyXlPuy0Zp%2BTr3LafwBOL6ogbRf7KjqgeXXj47j3B6&X-Amz-Signature=c60d28c305c9fbe96c2a9f2a1dcd7e29f258d5d65dde212f76c59b462d85ab27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3OVGLU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVxKy76DvDDh5IbvRZHWdRm5SSFrgAGa%2B5n%2B86fsUfogIhAM5Euu3sWfSSz7KrMKfddQAZb9rKyF8o2yy40yfNT5dTKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKbjQU3XgKZCpnvB8q3AP9OMyiEm121xyeALdP03qXrAd%2BCh97P5rE6i3%2B8AgQ8fiIJfmUZ39rvyUIvVcb3%2F4e0KUzu1dEM2ZqkHGx8PjIHv%2FbUxvLvP1S8Oiu06i8STIyfON%2BNdiU1yflBtRF498NarDQAL6R5o%2BJUbLknI0cLzHcJ3gaF6qyPm3q1MvBVx8h9%2BpN3DP51IVHEpsouMNPsaHvXdqCbzKv1FZfPHcNrN7gb1I4eu%2FrA8yDl7Bhnml8p%2Fz0u9j%2BWNnfQWN4njh7BcEpsIduV31bBQnMIGAWDglNHQLmBjCtQWveu%2FVh55UrXC3y%2FoMjB%2BR%2F1m1VvVfcAVxnbWXR%2FZOkz6UmIiAMQR9yvPROLMzS9VZFrgORGui9%2FosHQOdr9AHfYpn8f4KYcl%2Fdso6geInQhkR%2BHAJ1MRWA26ib%2BKsdKjkXdEMXPq3UV56UsqQ5eSAXpWkmL7zvTXBJoiBArPV8sOxDAMySVg%2FpwBLPi%2BqIZfLYE6RY4se3BrB1SbcmErwgnsq7V7j%2Fkza2XjVCZa5MZuHPL321GHjovGyv9kFX7HM9DwmvVfept%2BQRbf8g6c8vfYV7rJ%2BZc%2Bz6fWuamZRB%2FEf3jt6k6RqSsKZrRIJVL7q%2By6jDm7XvxvOajlGg5uswBTC%2B%2BObEBjqkAVGQ3RRKA5Wb38NtxoZjNP4so7yPoPWexR7aqkeX5WHRBIFrIxCRuF%2B5VFXBapZmnCEggiWlmQxuOghuz9Bnz9F62MELQQPoD6cHCJGjG%2BazU7zx1B9XsNkILomMeymRS5wYMwuO0B1kRcG36y2iRL2ZSsUJ1L1AkAOvZQBstaWbQF9KIZjyXlPuy0Zp%2BTr3LafwBOL6ogbRf7KjqgeXXj47j3B6&X-Amz-Signature=2111a083c1ef76561b0224cacde4eb488ee58a57f4749652b3aeaa16e45fd7ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3OVGLU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVxKy76DvDDh5IbvRZHWdRm5SSFrgAGa%2B5n%2B86fsUfogIhAM5Euu3sWfSSz7KrMKfddQAZb9rKyF8o2yy40yfNT5dTKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKbjQU3XgKZCpnvB8q3AP9OMyiEm121xyeALdP03qXrAd%2BCh97P5rE6i3%2B8AgQ8fiIJfmUZ39rvyUIvVcb3%2F4e0KUzu1dEM2ZqkHGx8PjIHv%2FbUxvLvP1S8Oiu06i8STIyfON%2BNdiU1yflBtRF498NarDQAL6R5o%2BJUbLknI0cLzHcJ3gaF6qyPm3q1MvBVx8h9%2BpN3DP51IVHEpsouMNPsaHvXdqCbzKv1FZfPHcNrN7gb1I4eu%2FrA8yDl7Bhnml8p%2Fz0u9j%2BWNnfQWN4njh7BcEpsIduV31bBQnMIGAWDglNHQLmBjCtQWveu%2FVh55UrXC3y%2FoMjB%2BR%2F1m1VvVfcAVxnbWXR%2FZOkz6UmIiAMQR9yvPROLMzS9VZFrgORGui9%2FosHQOdr9AHfYpn8f4KYcl%2Fdso6geInQhkR%2BHAJ1MRWA26ib%2BKsdKjkXdEMXPq3UV56UsqQ5eSAXpWkmL7zvTXBJoiBArPV8sOxDAMySVg%2FpwBLPi%2BqIZfLYE6RY4se3BrB1SbcmErwgnsq7V7j%2Fkza2XjVCZa5MZuHPL321GHjovGyv9kFX7HM9DwmvVfept%2BQRbf8g6c8vfYV7rJ%2BZc%2Bz6fWuamZRB%2FEf3jt6k6RqSsKZrRIJVL7q%2By6jDm7XvxvOajlGg5uswBTC%2B%2BObEBjqkAVGQ3RRKA5Wb38NtxoZjNP4so7yPoPWexR7aqkeX5WHRBIFrIxCRuF%2B5VFXBapZmnCEggiWlmQxuOghuz9Bnz9F62MELQQPoD6cHCJGjG%2BazU7zx1B9XsNkILomMeymRS5wYMwuO0B1kRcG36y2iRL2ZSsUJ1L1AkAOvZQBstaWbQF9KIZjyXlPuy0Zp%2BTr3LafwBOL6ogbRf7KjqgeXXj47j3B6&X-Amz-Signature=e58f89778126935d3925328ba2180a45bc79a6c9f314dd9851e3551eebf40620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3OVGLU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVxKy76DvDDh5IbvRZHWdRm5SSFrgAGa%2B5n%2B86fsUfogIhAM5Euu3sWfSSz7KrMKfddQAZb9rKyF8o2yy40yfNT5dTKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKbjQU3XgKZCpnvB8q3AP9OMyiEm121xyeALdP03qXrAd%2BCh97P5rE6i3%2B8AgQ8fiIJfmUZ39rvyUIvVcb3%2F4e0KUzu1dEM2ZqkHGx8PjIHv%2FbUxvLvP1S8Oiu06i8STIyfON%2BNdiU1yflBtRF498NarDQAL6R5o%2BJUbLknI0cLzHcJ3gaF6qyPm3q1MvBVx8h9%2BpN3DP51IVHEpsouMNPsaHvXdqCbzKv1FZfPHcNrN7gb1I4eu%2FrA8yDl7Bhnml8p%2Fz0u9j%2BWNnfQWN4njh7BcEpsIduV31bBQnMIGAWDglNHQLmBjCtQWveu%2FVh55UrXC3y%2FoMjB%2BR%2F1m1VvVfcAVxnbWXR%2FZOkz6UmIiAMQR9yvPROLMzS9VZFrgORGui9%2FosHQOdr9AHfYpn8f4KYcl%2Fdso6geInQhkR%2BHAJ1MRWA26ib%2BKsdKjkXdEMXPq3UV56UsqQ5eSAXpWkmL7zvTXBJoiBArPV8sOxDAMySVg%2FpwBLPi%2BqIZfLYE6RY4se3BrB1SbcmErwgnsq7V7j%2Fkza2XjVCZa5MZuHPL321GHjovGyv9kFX7HM9DwmvVfept%2BQRbf8g6c8vfYV7rJ%2BZc%2Bz6fWuamZRB%2FEf3jt6k6RqSsKZrRIJVL7q%2By6jDm7XvxvOajlGg5uswBTC%2B%2BObEBjqkAVGQ3RRKA5Wb38NtxoZjNP4so7yPoPWexR7aqkeX5WHRBIFrIxCRuF%2B5VFXBapZmnCEggiWlmQxuOghuz9Bnz9F62MELQQPoD6cHCJGjG%2BazU7zx1B9XsNkILomMeymRS5wYMwuO0B1kRcG36y2iRL2ZSsUJ1L1AkAOvZQBstaWbQF9KIZjyXlPuy0Zp%2BTr3LafwBOL6ogbRf7KjqgeXXj47j3B6&X-Amz-Signature=7cd693b0a5241a64e678a2715ae5b2328e1eeb4210474ee140707765c009489a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3OVGLU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVxKy76DvDDh5IbvRZHWdRm5SSFrgAGa%2B5n%2B86fsUfogIhAM5Euu3sWfSSz7KrMKfddQAZb9rKyF8o2yy40yfNT5dTKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKbjQU3XgKZCpnvB8q3AP9OMyiEm121xyeALdP03qXrAd%2BCh97P5rE6i3%2B8AgQ8fiIJfmUZ39rvyUIvVcb3%2F4e0KUzu1dEM2ZqkHGx8PjIHv%2FbUxvLvP1S8Oiu06i8STIyfON%2BNdiU1yflBtRF498NarDQAL6R5o%2BJUbLknI0cLzHcJ3gaF6qyPm3q1MvBVx8h9%2BpN3DP51IVHEpsouMNPsaHvXdqCbzKv1FZfPHcNrN7gb1I4eu%2FrA8yDl7Bhnml8p%2Fz0u9j%2BWNnfQWN4njh7BcEpsIduV31bBQnMIGAWDglNHQLmBjCtQWveu%2FVh55UrXC3y%2FoMjB%2BR%2F1m1VvVfcAVxnbWXR%2FZOkz6UmIiAMQR9yvPROLMzS9VZFrgORGui9%2FosHQOdr9AHfYpn8f4KYcl%2Fdso6geInQhkR%2BHAJ1MRWA26ib%2BKsdKjkXdEMXPq3UV56UsqQ5eSAXpWkmL7zvTXBJoiBArPV8sOxDAMySVg%2FpwBLPi%2BqIZfLYE6RY4se3BrB1SbcmErwgnsq7V7j%2Fkza2XjVCZa5MZuHPL321GHjovGyv9kFX7HM9DwmvVfept%2BQRbf8g6c8vfYV7rJ%2BZc%2Bz6fWuamZRB%2FEf3jt6k6RqSsKZrRIJVL7q%2By6jDm7XvxvOajlGg5uswBTC%2B%2BObEBjqkAVGQ3RRKA5Wb38NtxoZjNP4so7yPoPWexR7aqkeX5WHRBIFrIxCRuF%2B5VFXBapZmnCEggiWlmQxuOghuz9Bnz9F62MELQQPoD6cHCJGjG%2BazU7zx1B9XsNkILomMeymRS5wYMwuO0B1kRcG36y2iRL2ZSsUJ1L1AkAOvZQBstaWbQF9KIZjyXlPuy0Zp%2BTr3LafwBOL6ogbRf7KjqgeXXj47j3B6&X-Amz-Signature=c60d28c305c9fbe96c2a9f2a1dcd7e29f258d5d65dde212f76c59b462d85ab27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3OVGLU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVxKy76DvDDh5IbvRZHWdRm5SSFrgAGa%2B5n%2B86fsUfogIhAM5Euu3sWfSSz7KrMKfddQAZb9rKyF8o2yy40yfNT5dTKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKbjQU3XgKZCpnvB8q3AP9OMyiEm121xyeALdP03qXrAd%2BCh97P5rE6i3%2B8AgQ8fiIJfmUZ39rvyUIvVcb3%2F4e0KUzu1dEM2ZqkHGx8PjIHv%2FbUxvLvP1S8Oiu06i8STIyfON%2BNdiU1yflBtRF498NarDQAL6R5o%2BJUbLknI0cLzHcJ3gaF6qyPm3q1MvBVx8h9%2BpN3DP51IVHEpsouMNPsaHvXdqCbzKv1FZfPHcNrN7gb1I4eu%2FrA8yDl7Bhnml8p%2Fz0u9j%2BWNnfQWN4njh7BcEpsIduV31bBQnMIGAWDglNHQLmBjCtQWveu%2FVh55UrXC3y%2FoMjB%2BR%2F1m1VvVfcAVxnbWXR%2FZOkz6UmIiAMQR9yvPROLMzS9VZFrgORGui9%2FosHQOdr9AHfYpn8f4KYcl%2Fdso6geInQhkR%2BHAJ1MRWA26ib%2BKsdKjkXdEMXPq3UV56UsqQ5eSAXpWkmL7zvTXBJoiBArPV8sOxDAMySVg%2FpwBLPi%2BqIZfLYE6RY4se3BrB1SbcmErwgnsq7V7j%2Fkza2XjVCZa5MZuHPL321GHjovGyv9kFX7HM9DwmvVfept%2BQRbf8g6c8vfYV7rJ%2BZc%2Bz6fWuamZRB%2FEf3jt6k6RqSsKZrRIJVL7q%2By6jDm7XvxvOajlGg5uswBTC%2B%2BObEBjqkAVGQ3RRKA5Wb38NtxoZjNP4so7yPoPWexR7aqkeX5WHRBIFrIxCRuF%2B5VFXBapZmnCEggiWlmQxuOghuz9Bnz9F62MELQQPoD6cHCJGjG%2BazU7zx1B9XsNkILomMeymRS5wYMwuO0B1kRcG36y2iRL2ZSsUJ1L1AkAOvZQBstaWbQF9KIZjyXlPuy0Zp%2BTr3LafwBOL6ogbRf7KjqgeXXj47j3B6&X-Amz-Signature=ea0ebb2ff29c9bbe84a4a20c990a96ee87015cb8418950a82d597c7c9301a1d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3OVGLU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVxKy76DvDDh5IbvRZHWdRm5SSFrgAGa%2B5n%2B86fsUfogIhAM5Euu3sWfSSz7KrMKfddQAZb9rKyF8o2yy40yfNT5dTKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKbjQU3XgKZCpnvB8q3AP9OMyiEm121xyeALdP03qXrAd%2BCh97P5rE6i3%2B8AgQ8fiIJfmUZ39rvyUIvVcb3%2F4e0KUzu1dEM2ZqkHGx8PjIHv%2FbUxvLvP1S8Oiu06i8STIyfON%2BNdiU1yflBtRF498NarDQAL6R5o%2BJUbLknI0cLzHcJ3gaF6qyPm3q1MvBVx8h9%2BpN3DP51IVHEpsouMNPsaHvXdqCbzKv1FZfPHcNrN7gb1I4eu%2FrA8yDl7Bhnml8p%2Fz0u9j%2BWNnfQWN4njh7BcEpsIduV31bBQnMIGAWDglNHQLmBjCtQWveu%2FVh55UrXC3y%2FoMjB%2BR%2F1m1VvVfcAVxnbWXR%2FZOkz6UmIiAMQR9yvPROLMzS9VZFrgORGui9%2FosHQOdr9AHfYpn8f4KYcl%2Fdso6geInQhkR%2BHAJ1MRWA26ib%2BKsdKjkXdEMXPq3UV56UsqQ5eSAXpWkmL7zvTXBJoiBArPV8sOxDAMySVg%2FpwBLPi%2BqIZfLYE6RY4se3BrB1SbcmErwgnsq7V7j%2Fkza2XjVCZa5MZuHPL321GHjovGyv9kFX7HM9DwmvVfept%2BQRbf8g6c8vfYV7rJ%2BZc%2Bz6fWuamZRB%2FEf3jt6k6RqSsKZrRIJVL7q%2By6jDm7XvxvOajlGg5uswBTC%2B%2BObEBjqkAVGQ3RRKA5Wb38NtxoZjNP4so7yPoPWexR7aqkeX5WHRBIFrIxCRuF%2B5VFXBapZmnCEggiWlmQxuOghuz9Bnz9F62MELQQPoD6cHCJGjG%2BazU7zx1B9XsNkILomMeymRS5wYMwuO0B1kRcG36y2iRL2ZSsUJ1L1AkAOvZQBstaWbQF9KIZjyXlPuy0Zp%2BTr3LafwBOL6ogbRf7KjqgeXXj47j3B6&X-Amz-Signature=c8a8263ea6fb146b67cfe77345f26f729c63831cf8653e71eb49ff0ac8583e79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3OVGLU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVxKy76DvDDh5IbvRZHWdRm5SSFrgAGa%2B5n%2B86fsUfogIhAM5Euu3sWfSSz7KrMKfddQAZb9rKyF8o2yy40yfNT5dTKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKbjQU3XgKZCpnvB8q3AP9OMyiEm121xyeALdP03qXrAd%2BCh97P5rE6i3%2B8AgQ8fiIJfmUZ39rvyUIvVcb3%2F4e0KUzu1dEM2ZqkHGx8PjIHv%2FbUxvLvP1S8Oiu06i8STIyfON%2BNdiU1yflBtRF498NarDQAL6R5o%2BJUbLknI0cLzHcJ3gaF6qyPm3q1MvBVx8h9%2BpN3DP51IVHEpsouMNPsaHvXdqCbzKv1FZfPHcNrN7gb1I4eu%2FrA8yDl7Bhnml8p%2Fz0u9j%2BWNnfQWN4njh7BcEpsIduV31bBQnMIGAWDglNHQLmBjCtQWveu%2FVh55UrXC3y%2FoMjB%2BR%2F1m1VvVfcAVxnbWXR%2FZOkz6UmIiAMQR9yvPROLMzS9VZFrgORGui9%2FosHQOdr9AHfYpn8f4KYcl%2Fdso6geInQhkR%2BHAJ1MRWA26ib%2BKsdKjkXdEMXPq3UV56UsqQ5eSAXpWkmL7zvTXBJoiBArPV8sOxDAMySVg%2FpwBLPi%2BqIZfLYE6RY4se3BrB1SbcmErwgnsq7V7j%2Fkza2XjVCZa5MZuHPL321GHjovGyv9kFX7HM9DwmvVfept%2BQRbf8g6c8vfYV7rJ%2BZc%2Bz6fWuamZRB%2FEf3jt6k6RqSsKZrRIJVL7q%2By6jDm7XvxvOajlGg5uswBTC%2B%2BObEBjqkAVGQ3RRKA5Wb38NtxoZjNP4so7yPoPWexR7aqkeX5WHRBIFrIxCRuF%2B5VFXBapZmnCEggiWlmQxuOghuz9Bnz9F62MELQQPoD6cHCJGjG%2BazU7zx1B9XsNkILomMeymRS5wYMwuO0B1kRcG36y2iRL2ZSsUJ1L1AkAOvZQBstaWbQF9KIZjyXlPuy0Zp%2BTr3LafwBOL6ogbRf7KjqgeXXj47j3B6&X-Amz-Signature=6fa4601e0d5dea0e801e8c906baaecd2b4b5808851b5fc025641832241642183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
