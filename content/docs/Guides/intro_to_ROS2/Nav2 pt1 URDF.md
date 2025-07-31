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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFKAZCRV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqcgXqCh1TMD9qWQiToa5EVddYE8ij5pGiVdjR3VskRwIgQTw0VQoaXIj6yE96zMzhjIugJ8cpMm9rED8vBXYkKskqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHU96txYfNQ7URKPoCrcAyq3HvhRIaN%2BmxH%2BcInwhroR7wsBUcEN11VMb2KeNtM2wdDsVfEHczL37gQndAtj9uIxlFngQe5UtJxRD9c5T1JbLqIktNQ79bvU7rIg4eLUdNlKvfperPO5R6%2BrbGq9KGEcZKxyVQ2vSo2IveFdPyt6FFFbYkIqA6cJmUgCtLedQ24TONZn%2FzcgGledP%2FKK9j3Uvis0sVEnsu%2F0zZJpj8SzPDphBja6GQUkcewdn8m7upx3utTC0X%2F8%2BY1zYnmY4hjv6vj3fSmaVMLrunoiDxBAEJLOwZcRH%2FtpJMAR4Oju%2FYDBrHuQP%2FzOjA9%2B0FejEafUkzxyorbyLR2sk8Tt%2BuNMP%2Bg3SfLHMrBakC95dQFoqIp0n3Dk2pILaHijSTpsZ%2BYYM9wNaKLRm1v7XBD4gHMPNvmSJ%2FPkzt%2BZGWvQAXVUrYnqDJ4iLYjksV6vl9cf9YWIaeQQBy2%2FNATR70vuTD%2BiXx82UH%2BwnzLWHgmAQirOsnStN6BmE%2Fppcti2AWZN6DDjFFSKIqevmJG7QPWUXmkuNZXMWs4O0OJLbi7gnzbe6gr4e7e0%2B3vVwojItRUJU3OYwpttGm%2B9Y%2B7RwVhDbP%2Buk5G5AucIJbHdti8xSriAFZJOhLAwju11bkfzMJmdrcQGOqUBjbiSb%2F09639q2Cqsfg%2BiTHu7c57kSnzp7hRIlUz9w%2FWkERQTVD2jsDEAsmWCq39rouo202ipThgIFDZ4cYVciKz9TEPRSZ6mXubZvhmNovefGtUIBf%2F5gtozD4NcTbJ8Ear%2B%2F5lnIFOYf8k%2BeeuhmFDnZ%2FIDsoDcYukfOQ66xEoTTPSVdVdQ8y5kgHxcLCJRKaUUVDpjVDb2NTIRWAECmSBbcAVb&X-Amz-Signature=aeb7ebb8f04f41c55da3a57f0351559fcd71705af735ee19e5033966d8317478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFKAZCRV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqcgXqCh1TMD9qWQiToa5EVddYE8ij5pGiVdjR3VskRwIgQTw0VQoaXIj6yE96zMzhjIugJ8cpMm9rED8vBXYkKskqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHU96txYfNQ7URKPoCrcAyq3HvhRIaN%2BmxH%2BcInwhroR7wsBUcEN11VMb2KeNtM2wdDsVfEHczL37gQndAtj9uIxlFngQe5UtJxRD9c5T1JbLqIktNQ79bvU7rIg4eLUdNlKvfperPO5R6%2BrbGq9KGEcZKxyVQ2vSo2IveFdPyt6FFFbYkIqA6cJmUgCtLedQ24TONZn%2FzcgGledP%2FKK9j3Uvis0sVEnsu%2F0zZJpj8SzPDphBja6GQUkcewdn8m7upx3utTC0X%2F8%2BY1zYnmY4hjv6vj3fSmaVMLrunoiDxBAEJLOwZcRH%2FtpJMAR4Oju%2FYDBrHuQP%2FzOjA9%2B0FejEafUkzxyorbyLR2sk8Tt%2BuNMP%2Bg3SfLHMrBakC95dQFoqIp0n3Dk2pILaHijSTpsZ%2BYYM9wNaKLRm1v7XBD4gHMPNvmSJ%2FPkzt%2BZGWvQAXVUrYnqDJ4iLYjksV6vl9cf9YWIaeQQBy2%2FNATR70vuTD%2BiXx82UH%2BwnzLWHgmAQirOsnStN6BmE%2Fppcti2AWZN6DDjFFSKIqevmJG7QPWUXmkuNZXMWs4O0OJLbi7gnzbe6gr4e7e0%2B3vVwojItRUJU3OYwpttGm%2B9Y%2B7RwVhDbP%2Buk5G5AucIJbHdti8xSriAFZJOhLAwju11bkfzMJmdrcQGOqUBjbiSb%2F09639q2Cqsfg%2BiTHu7c57kSnzp7hRIlUz9w%2FWkERQTVD2jsDEAsmWCq39rouo202ipThgIFDZ4cYVciKz9TEPRSZ6mXubZvhmNovefGtUIBf%2F5gtozD4NcTbJ8Ear%2B%2F5lnIFOYf8k%2BeeuhmFDnZ%2FIDsoDcYukfOQ66xEoTTPSVdVdQ8y5kgHxcLCJRKaUUVDpjVDb2NTIRWAECmSBbcAVb&X-Amz-Signature=d665aa2ad7448d3badd0ce01742294871e3a685c7dd3226e789623d8f6b3fe12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFKAZCRV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqcgXqCh1TMD9qWQiToa5EVddYE8ij5pGiVdjR3VskRwIgQTw0VQoaXIj6yE96zMzhjIugJ8cpMm9rED8vBXYkKskqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHU96txYfNQ7URKPoCrcAyq3HvhRIaN%2BmxH%2BcInwhroR7wsBUcEN11VMb2KeNtM2wdDsVfEHczL37gQndAtj9uIxlFngQe5UtJxRD9c5T1JbLqIktNQ79bvU7rIg4eLUdNlKvfperPO5R6%2BrbGq9KGEcZKxyVQ2vSo2IveFdPyt6FFFbYkIqA6cJmUgCtLedQ24TONZn%2FzcgGledP%2FKK9j3Uvis0sVEnsu%2F0zZJpj8SzPDphBja6GQUkcewdn8m7upx3utTC0X%2F8%2BY1zYnmY4hjv6vj3fSmaVMLrunoiDxBAEJLOwZcRH%2FtpJMAR4Oju%2FYDBrHuQP%2FzOjA9%2B0FejEafUkzxyorbyLR2sk8Tt%2BuNMP%2Bg3SfLHMrBakC95dQFoqIp0n3Dk2pILaHijSTpsZ%2BYYM9wNaKLRm1v7XBD4gHMPNvmSJ%2FPkzt%2BZGWvQAXVUrYnqDJ4iLYjksV6vl9cf9YWIaeQQBy2%2FNATR70vuTD%2BiXx82UH%2BwnzLWHgmAQirOsnStN6BmE%2Fppcti2AWZN6DDjFFSKIqevmJG7QPWUXmkuNZXMWs4O0OJLbi7gnzbe6gr4e7e0%2B3vVwojItRUJU3OYwpttGm%2B9Y%2B7RwVhDbP%2Buk5G5AucIJbHdti8xSriAFZJOhLAwju11bkfzMJmdrcQGOqUBjbiSb%2F09639q2Cqsfg%2BiTHu7c57kSnzp7hRIlUz9w%2FWkERQTVD2jsDEAsmWCq39rouo202ipThgIFDZ4cYVciKz9TEPRSZ6mXubZvhmNovefGtUIBf%2F5gtozD4NcTbJ8Ear%2B%2F5lnIFOYf8k%2BeeuhmFDnZ%2FIDsoDcYukfOQ66xEoTTPSVdVdQ8y5kgHxcLCJRKaUUVDpjVDb2NTIRWAECmSBbcAVb&X-Amz-Signature=5c50bc075a538171434ddfe0e28e461b8aea44fd730195e506fd3038f8c40fcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFKAZCRV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqcgXqCh1TMD9qWQiToa5EVddYE8ij5pGiVdjR3VskRwIgQTw0VQoaXIj6yE96zMzhjIugJ8cpMm9rED8vBXYkKskqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHU96txYfNQ7URKPoCrcAyq3HvhRIaN%2BmxH%2BcInwhroR7wsBUcEN11VMb2KeNtM2wdDsVfEHczL37gQndAtj9uIxlFngQe5UtJxRD9c5T1JbLqIktNQ79bvU7rIg4eLUdNlKvfperPO5R6%2BrbGq9KGEcZKxyVQ2vSo2IveFdPyt6FFFbYkIqA6cJmUgCtLedQ24TONZn%2FzcgGledP%2FKK9j3Uvis0sVEnsu%2F0zZJpj8SzPDphBja6GQUkcewdn8m7upx3utTC0X%2F8%2BY1zYnmY4hjv6vj3fSmaVMLrunoiDxBAEJLOwZcRH%2FtpJMAR4Oju%2FYDBrHuQP%2FzOjA9%2B0FejEafUkzxyorbyLR2sk8Tt%2BuNMP%2Bg3SfLHMrBakC95dQFoqIp0n3Dk2pILaHijSTpsZ%2BYYM9wNaKLRm1v7XBD4gHMPNvmSJ%2FPkzt%2BZGWvQAXVUrYnqDJ4iLYjksV6vl9cf9YWIaeQQBy2%2FNATR70vuTD%2BiXx82UH%2BwnzLWHgmAQirOsnStN6BmE%2Fppcti2AWZN6DDjFFSKIqevmJG7QPWUXmkuNZXMWs4O0OJLbi7gnzbe6gr4e7e0%2B3vVwojItRUJU3OYwpttGm%2B9Y%2B7RwVhDbP%2Buk5G5AucIJbHdti8xSriAFZJOhLAwju11bkfzMJmdrcQGOqUBjbiSb%2F09639q2Cqsfg%2BiTHu7c57kSnzp7hRIlUz9w%2FWkERQTVD2jsDEAsmWCq39rouo202ipThgIFDZ4cYVciKz9TEPRSZ6mXubZvhmNovefGtUIBf%2F5gtozD4NcTbJ8Ear%2B%2F5lnIFOYf8k%2BeeuhmFDnZ%2FIDsoDcYukfOQ66xEoTTPSVdVdQ8y5kgHxcLCJRKaUUVDpjVDb2NTIRWAECmSBbcAVb&X-Amz-Signature=4aab9a3d58422c57884ce8854dca08e30960f52d750ad2af57015a5cb554f176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFKAZCRV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqcgXqCh1TMD9qWQiToa5EVddYE8ij5pGiVdjR3VskRwIgQTw0VQoaXIj6yE96zMzhjIugJ8cpMm9rED8vBXYkKskqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHU96txYfNQ7URKPoCrcAyq3HvhRIaN%2BmxH%2BcInwhroR7wsBUcEN11VMb2KeNtM2wdDsVfEHczL37gQndAtj9uIxlFngQe5UtJxRD9c5T1JbLqIktNQ79bvU7rIg4eLUdNlKvfperPO5R6%2BrbGq9KGEcZKxyVQ2vSo2IveFdPyt6FFFbYkIqA6cJmUgCtLedQ24TONZn%2FzcgGledP%2FKK9j3Uvis0sVEnsu%2F0zZJpj8SzPDphBja6GQUkcewdn8m7upx3utTC0X%2F8%2BY1zYnmY4hjv6vj3fSmaVMLrunoiDxBAEJLOwZcRH%2FtpJMAR4Oju%2FYDBrHuQP%2FzOjA9%2B0FejEafUkzxyorbyLR2sk8Tt%2BuNMP%2Bg3SfLHMrBakC95dQFoqIp0n3Dk2pILaHijSTpsZ%2BYYM9wNaKLRm1v7XBD4gHMPNvmSJ%2FPkzt%2BZGWvQAXVUrYnqDJ4iLYjksV6vl9cf9YWIaeQQBy2%2FNATR70vuTD%2BiXx82UH%2BwnzLWHgmAQirOsnStN6BmE%2Fppcti2AWZN6DDjFFSKIqevmJG7QPWUXmkuNZXMWs4O0OJLbi7gnzbe6gr4e7e0%2B3vVwojItRUJU3OYwpttGm%2B9Y%2B7RwVhDbP%2Buk5G5AucIJbHdti8xSriAFZJOhLAwju11bkfzMJmdrcQGOqUBjbiSb%2F09639q2Cqsfg%2BiTHu7c57kSnzp7hRIlUz9w%2FWkERQTVD2jsDEAsmWCq39rouo202ipThgIFDZ4cYVciKz9TEPRSZ6mXubZvhmNovefGtUIBf%2F5gtozD4NcTbJ8Ear%2B%2F5lnIFOYf8k%2BeeuhmFDnZ%2FIDsoDcYukfOQ66xEoTTPSVdVdQ8y5kgHxcLCJRKaUUVDpjVDb2NTIRWAECmSBbcAVb&X-Amz-Signature=d8dabbad54bb4b2804e931489d9f273f903a7ed03ababa015f07b97a870f57fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFKAZCRV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqcgXqCh1TMD9qWQiToa5EVddYE8ij5pGiVdjR3VskRwIgQTw0VQoaXIj6yE96zMzhjIugJ8cpMm9rED8vBXYkKskqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHU96txYfNQ7URKPoCrcAyq3HvhRIaN%2BmxH%2BcInwhroR7wsBUcEN11VMb2KeNtM2wdDsVfEHczL37gQndAtj9uIxlFngQe5UtJxRD9c5T1JbLqIktNQ79bvU7rIg4eLUdNlKvfperPO5R6%2BrbGq9KGEcZKxyVQ2vSo2IveFdPyt6FFFbYkIqA6cJmUgCtLedQ24TONZn%2FzcgGledP%2FKK9j3Uvis0sVEnsu%2F0zZJpj8SzPDphBja6GQUkcewdn8m7upx3utTC0X%2F8%2BY1zYnmY4hjv6vj3fSmaVMLrunoiDxBAEJLOwZcRH%2FtpJMAR4Oju%2FYDBrHuQP%2FzOjA9%2B0FejEafUkzxyorbyLR2sk8Tt%2BuNMP%2Bg3SfLHMrBakC95dQFoqIp0n3Dk2pILaHijSTpsZ%2BYYM9wNaKLRm1v7XBD4gHMPNvmSJ%2FPkzt%2BZGWvQAXVUrYnqDJ4iLYjksV6vl9cf9YWIaeQQBy2%2FNATR70vuTD%2BiXx82UH%2BwnzLWHgmAQirOsnStN6BmE%2Fppcti2AWZN6DDjFFSKIqevmJG7QPWUXmkuNZXMWs4O0OJLbi7gnzbe6gr4e7e0%2B3vVwojItRUJU3OYwpttGm%2B9Y%2B7RwVhDbP%2Buk5G5AucIJbHdti8xSriAFZJOhLAwju11bkfzMJmdrcQGOqUBjbiSb%2F09639q2Cqsfg%2BiTHu7c57kSnzp7hRIlUz9w%2FWkERQTVD2jsDEAsmWCq39rouo202ipThgIFDZ4cYVciKz9TEPRSZ6mXubZvhmNovefGtUIBf%2F5gtozD4NcTbJ8Ear%2B%2F5lnIFOYf8k%2BeeuhmFDnZ%2FIDsoDcYukfOQ66xEoTTPSVdVdQ8y5kgHxcLCJRKaUUVDpjVDb2NTIRWAECmSBbcAVb&X-Amz-Signature=fd44c54d06ce7d290b30e8b81a64a682b2c5fb0fe2f12955619fd8ba3f0ab0f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFKAZCRV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqcgXqCh1TMD9qWQiToa5EVddYE8ij5pGiVdjR3VskRwIgQTw0VQoaXIj6yE96zMzhjIugJ8cpMm9rED8vBXYkKskqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHU96txYfNQ7URKPoCrcAyq3HvhRIaN%2BmxH%2BcInwhroR7wsBUcEN11VMb2KeNtM2wdDsVfEHczL37gQndAtj9uIxlFngQe5UtJxRD9c5T1JbLqIktNQ79bvU7rIg4eLUdNlKvfperPO5R6%2BrbGq9KGEcZKxyVQ2vSo2IveFdPyt6FFFbYkIqA6cJmUgCtLedQ24TONZn%2FzcgGledP%2FKK9j3Uvis0sVEnsu%2F0zZJpj8SzPDphBja6GQUkcewdn8m7upx3utTC0X%2F8%2BY1zYnmY4hjv6vj3fSmaVMLrunoiDxBAEJLOwZcRH%2FtpJMAR4Oju%2FYDBrHuQP%2FzOjA9%2B0FejEafUkzxyorbyLR2sk8Tt%2BuNMP%2Bg3SfLHMrBakC95dQFoqIp0n3Dk2pILaHijSTpsZ%2BYYM9wNaKLRm1v7XBD4gHMPNvmSJ%2FPkzt%2BZGWvQAXVUrYnqDJ4iLYjksV6vl9cf9YWIaeQQBy2%2FNATR70vuTD%2BiXx82UH%2BwnzLWHgmAQirOsnStN6BmE%2Fppcti2AWZN6DDjFFSKIqevmJG7QPWUXmkuNZXMWs4O0OJLbi7gnzbe6gr4e7e0%2B3vVwojItRUJU3OYwpttGm%2B9Y%2B7RwVhDbP%2Buk5G5AucIJbHdti8xSriAFZJOhLAwju11bkfzMJmdrcQGOqUBjbiSb%2F09639q2Cqsfg%2BiTHu7c57kSnzp7hRIlUz9w%2FWkERQTVD2jsDEAsmWCq39rouo202ipThgIFDZ4cYVciKz9TEPRSZ6mXubZvhmNovefGtUIBf%2F5gtozD4NcTbJ8Ear%2B%2F5lnIFOYf8k%2BeeuhmFDnZ%2FIDsoDcYukfOQ66xEoTTPSVdVdQ8y5kgHxcLCJRKaUUVDpjVDb2NTIRWAECmSBbcAVb&X-Amz-Signature=501f1f46d28eebc64d89b9c35f2e65dcd46d633eb371747bf709ef3f7bef871b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFKAZCRV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqcgXqCh1TMD9qWQiToa5EVddYE8ij5pGiVdjR3VskRwIgQTw0VQoaXIj6yE96zMzhjIugJ8cpMm9rED8vBXYkKskqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHU96txYfNQ7URKPoCrcAyq3HvhRIaN%2BmxH%2BcInwhroR7wsBUcEN11VMb2KeNtM2wdDsVfEHczL37gQndAtj9uIxlFngQe5UtJxRD9c5T1JbLqIktNQ79bvU7rIg4eLUdNlKvfperPO5R6%2BrbGq9KGEcZKxyVQ2vSo2IveFdPyt6FFFbYkIqA6cJmUgCtLedQ24TONZn%2FzcgGledP%2FKK9j3Uvis0sVEnsu%2F0zZJpj8SzPDphBja6GQUkcewdn8m7upx3utTC0X%2F8%2BY1zYnmY4hjv6vj3fSmaVMLrunoiDxBAEJLOwZcRH%2FtpJMAR4Oju%2FYDBrHuQP%2FzOjA9%2B0FejEafUkzxyorbyLR2sk8Tt%2BuNMP%2Bg3SfLHMrBakC95dQFoqIp0n3Dk2pILaHijSTpsZ%2BYYM9wNaKLRm1v7XBD4gHMPNvmSJ%2FPkzt%2BZGWvQAXVUrYnqDJ4iLYjksV6vl9cf9YWIaeQQBy2%2FNATR70vuTD%2BiXx82UH%2BwnzLWHgmAQirOsnStN6BmE%2Fppcti2AWZN6DDjFFSKIqevmJG7QPWUXmkuNZXMWs4O0OJLbi7gnzbe6gr4e7e0%2B3vVwojItRUJU3OYwpttGm%2B9Y%2B7RwVhDbP%2Buk5G5AucIJbHdti8xSriAFZJOhLAwju11bkfzMJmdrcQGOqUBjbiSb%2F09639q2Cqsfg%2BiTHu7c57kSnzp7hRIlUz9w%2FWkERQTVD2jsDEAsmWCq39rouo202ipThgIFDZ4cYVciKz9TEPRSZ6mXubZvhmNovefGtUIBf%2F5gtozD4NcTbJ8Ear%2B%2F5lnIFOYf8k%2BeeuhmFDnZ%2FIDsoDcYukfOQ66xEoTTPSVdVdQ8y5kgHxcLCJRKaUUVDpjVDb2NTIRWAECmSBbcAVb&X-Amz-Signature=d6ea7049b0a41d90da1b6b560fa87e1726944ae2e347b35e90359f49401e3f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFKAZCRV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqcgXqCh1TMD9qWQiToa5EVddYE8ij5pGiVdjR3VskRwIgQTw0VQoaXIj6yE96zMzhjIugJ8cpMm9rED8vBXYkKskqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHU96txYfNQ7URKPoCrcAyq3HvhRIaN%2BmxH%2BcInwhroR7wsBUcEN11VMb2KeNtM2wdDsVfEHczL37gQndAtj9uIxlFngQe5UtJxRD9c5T1JbLqIktNQ79bvU7rIg4eLUdNlKvfperPO5R6%2BrbGq9KGEcZKxyVQ2vSo2IveFdPyt6FFFbYkIqA6cJmUgCtLedQ24TONZn%2FzcgGledP%2FKK9j3Uvis0sVEnsu%2F0zZJpj8SzPDphBja6GQUkcewdn8m7upx3utTC0X%2F8%2BY1zYnmY4hjv6vj3fSmaVMLrunoiDxBAEJLOwZcRH%2FtpJMAR4Oju%2FYDBrHuQP%2FzOjA9%2B0FejEafUkzxyorbyLR2sk8Tt%2BuNMP%2Bg3SfLHMrBakC95dQFoqIp0n3Dk2pILaHijSTpsZ%2BYYM9wNaKLRm1v7XBD4gHMPNvmSJ%2FPkzt%2BZGWvQAXVUrYnqDJ4iLYjksV6vl9cf9YWIaeQQBy2%2FNATR70vuTD%2BiXx82UH%2BwnzLWHgmAQirOsnStN6BmE%2Fppcti2AWZN6DDjFFSKIqevmJG7QPWUXmkuNZXMWs4O0OJLbi7gnzbe6gr4e7e0%2B3vVwojItRUJU3OYwpttGm%2B9Y%2B7RwVhDbP%2Buk5G5AucIJbHdti8xSriAFZJOhLAwju11bkfzMJmdrcQGOqUBjbiSb%2F09639q2Cqsfg%2BiTHu7c57kSnzp7hRIlUz9w%2FWkERQTVD2jsDEAsmWCq39rouo202ipThgIFDZ4cYVciKz9TEPRSZ6mXubZvhmNovefGtUIBf%2F5gtozD4NcTbJ8Ear%2B%2F5lnIFOYf8k%2BeeuhmFDnZ%2FIDsoDcYukfOQ66xEoTTPSVdVdQ8y5kgHxcLCJRKaUUVDpjVDb2NTIRWAECmSBbcAVb&X-Amz-Signature=7b7f2c31eb62542cc690b2f0b702a70476de15a63e6e772fc8b2186bd18c379a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFKAZCRV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqcgXqCh1TMD9qWQiToa5EVddYE8ij5pGiVdjR3VskRwIgQTw0VQoaXIj6yE96zMzhjIugJ8cpMm9rED8vBXYkKskqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHU96txYfNQ7URKPoCrcAyq3HvhRIaN%2BmxH%2BcInwhroR7wsBUcEN11VMb2KeNtM2wdDsVfEHczL37gQndAtj9uIxlFngQe5UtJxRD9c5T1JbLqIktNQ79bvU7rIg4eLUdNlKvfperPO5R6%2BrbGq9KGEcZKxyVQ2vSo2IveFdPyt6FFFbYkIqA6cJmUgCtLedQ24TONZn%2FzcgGledP%2FKK9j3Uvis0sVEnsu%2F0zZJpj8SzPDphBja6GQUkcewdn8m7upx3utTC0X%2F8%2BY1zYnmY4hjv6vj3fSmaVMLrunoiDxBAEJLOwZcRH%2FtpJMAR4Oju%2FYDBrHuQP%2FzOjA9%2B0FejEafUkzxyorbyLR2sk8Tt%2BuNMP%2Bg3SfLHMrBakC95dQFoqIp0n3Dk2pILaHijSTpsZ%2BYYM9wNaKLRm1v7XBD4gHMPNvmSJ%2FPkzt%2BZGWvQAXVUrYnqDJ4iLYjksV6vl9cf9YWIaeQQBy2%2FNATR70vuTD%2BiXx82UH%2BwnzLWHgmAQirOsnStN6BmE%2Fppcti2AWZN6DDjFFSKIqevmJG7QPWUXmkuNZXMWs4O0OJLbi7gnzbe6gr4e7e0%2B3vVwojItRUJU3OYwpttGm%2B9Y%2B7RwVhDbP%2Buk5G5AucIJbHdti8xSriAFZJOhLAwju11bkfzMJmdrcQGOqUBjbiSb%2F09639q2Cqsfg%2BiTHu7c57kSnzp7hRIlUz9w%2FWkERQTVD2jsDEAsmWCq39rouo202ipThgIFDZ4cYVciKz9TEPRSZ6mXubZvhmNovefGtUIBf%2F5gtozD4NcTbJ8Ear%2B%2F5lnIFOYf8k%2BeeuhmFDnZ%2FIDsoDcYukfOQ66xEoTTPSVdVdQ8y5kgHxcLCJRKaUUVDpjVDb2NTIRWAECmSBbcAVb&X-Amz-Signature=c9487482916e48522f708d762430b966a92e19f0366b1cdf3be1de3bc51e78b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFKAZCRV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqcgXqCh1TMD9qWQiToa5EVddYE8ij5pGiVdjR3VskRwIgQTw0VQoaXIj6yE96zMzhjIugJ8cpMm9rED8vBXYkKskqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHU96txYfNQ7URKPoCrcAyq3HvhRIaN%2BmxH%2BcInwhroR7wsBUcEN11VMb2KeNtM2wdDsVfEHczL37gQndAtj9uIxlFngQe5UtJxRD9c5T1JbLqIktNQ79bvU7rIg4eLUdNlKvfperPO5R6%2BrbGq9KGEcZKxyVQ2vSo2IveFdPyt6FFFbYkIqA6cJmUgCtLedQ24TONZn%2FzcgGledP%2FKK9j3Uvis0sVEnsu%2F0zZJpj8SzPDphBja6GQUkcewdn8m7upx3utTC0X%2F8%2BY1zYnmY4hjv6vj3fSmaVMLrunoiDxBAEJLOwZcRH%2FtpJMAR4Oju%2FYDBrHuQP%2FzOjA9%2B0FejEafUkzxyorbyLR2sk8Tt%2BuNMP%2Bg3SfLHMrBakC95dQFoqIp0n3Dk2pILaHijSTpsZ%2BYYM9wNaKLRm1v7XBD4gHMPNvmSJ%2FPkzt%2BZGWvQAXVUrYnqDJ4iLYjksV6vl9cf9YWIaeQQBy2%2FNATR70vuTD%2BiXx82UH%2BwnzLWHgmAQirOsnStN6BmE%2Fppcti2AWZN6DDjFFSKIqevmJG7QPWUXmkuNZXMWs4O0OJLbi7gnzbe6gr4e7e0%2B3vVwojItRUJU3OYwpttGm%2B9Y%2B7RwVhDbP%2Buk5G5AucIJbHdti8xSriAFZJOhLAwju11bkfzMJmdrcQGOqUBjbiSb%2F09639q2Cqsfg%2BiTHu7c57kSnzp7hRIlUz9w%2FWkERQTVD2jsDEAsmWCq39rouo202ipThgIFDZ4cYVciKz9TEPRSZ6mXubZvhmNovefGtUIBf%2F5gtozD4NcTbJ8Ear%2B%2F5lnIFOYf8k%2BeeuhmFDnZ%2FIDsoDcYukfOQ66xEoTTPSVdVdQ8y5kgHxcLCJRKaUUVDpjVDb2NTIRWAECmSBbcAVb&X-Amz-Signature=4db922a2792044fdaaed2ecdeccabd18e76cbd17da720856e3b43af80fc199cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFKAZCRV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqcgXqCh1TMD9qWQiToa5EVddYE8ij5pGiVdjR3VskRwIgQTw0VQoaXIj6yE96zMzhjIugJ8cpMm9rED8vBXYkKskqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHU96txYfNQ7URKPoCrcAyq3HvhRIaN%2BmxH%2BcInwhroR7wsBUcEN11VMb2KeNtM2wdDsVfEHczL37gQndAtj9uIxlFngQe5UtJxRD9c5T1JbLqIktNQ79bvU7rIg4eLUdNlKvfperPO5R6%2BrbGq9KGEcZKxyVQ2vSo2IveFdPyt6FFFbYkIqA6cJmUgCtLedQ24TONZn%2FzcgGledP%2FKK9j3Uvis0sVEnsu%2F0zZJpj8SzPDphBja6GQUkcewdn8m7upx3utTC0X%2F8%2BY1zYnmY4hjv6vj3fSmaVMLrunoiDxBAEJLOwZcRH%2FtpJMAR4Oju%2FYDBrHuQP%2FzOjA9%2B0FejEafUkzxyorbyLR2sk8Tt%2BuNMP%2Bg3SfLHMrBakC95dQFoqIp0n3Dk2pILaHijSTpsZ%2BYYM9wNaKLRm1v7XBD4gHMPNvmSJ%2FPkzt%2BZGWvQAXVUrYnqDJ4iLYjksV6vl9cf9YWIaeQQBy2%2FNATR70vuTD%2BiXx82UH%2BwnzLWHgmAQirOsnStN6BmE%2Fppcti2AWZN6DDjFFSKIqevmJG7QPWUXmkuNZXMWs4O0OJLbi7gnzbe6gr4e7e0%2B3vVwojItRUJU3OYwpttGm%2B9Y%2B7RwVhDbP%2Buk5G5AucIJbHdti8xSriAFZJOhLAwju11bkfzMJmdrcQGOqUBjbiSb%2F09639q2Cqsfg%2BiTHu7c57kSnzp7hRIlUz9w%2FWkERQTVD2jsDEAsmWCq39rouo202ipThgIFDZ4cYVciKz9TEPRSZ6mXubZvhmNovefGtUIBf%2F5gtozD4NcTbJ8Ear%2B%2F5lnIFOYf8k%2BeeuhmFDnZ%2FIDsoDcYukfOQ66xEoTTPSVdVdQ8y5kgHxcLCJRKaUUVDpjVDb2NTIRWAECmSBbcAVb&X-Amz-Signature=3459983dea2c5146189cd6ea25d50038ad66ff3f23861dcb83cc786c7ff11702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFKAZCRV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqcgXqCh1TMD9qWQiToa5EVddYE8ij5pGiVdjR3VskRwIgQTw0VQoaXIj6yE96zMzhjIugJ8cpMm9rED8vBXYkKskqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHU96txYfNQ7URKPoCrcAyq3HvhRIaN%2BmxH%2BcInwhroR7wsBUcEN11VMb2KeNtM2wdDsVfEHczL37gQndAtj9uIxlFngQe5UtJxRD9c5T1JbLqIktNQ79bvU7rIg4eLUdNlKvfperPO5R6%2BrbGq9KGEcZKxyVQ2vSo2IveFdPyt6FFFbYkIqA6cJmUgCtLedQ24TONZn%2FzcgGledP%2FKK9j3Uvis0sVEnsu%2F0zZJpj8SzPDphBja6GQUkcewdn8m7upx3utTC0X%2F8%2BY1zYnmY4hjv6vj3fSmaVMLrunoiDxBAEJLOwZcRH%2FtpJMAR4Oju%2FYDBrHuQP%2FzOjA9%2B0FejEafUkzxyorbyLR2sk8Tt%2BuNMP%2Bg3SfLHMrBakC95dQFoqIp0n3Dk2pILaHijSTpsZ%2BYYM9wNaKLRm1v7XBD4gHMPNvmSJ%2FPkzt%2BZGWvQAXVUrYnqDJ4iLYjksV6vl9cf9YWIaeQQBy2%2FNATR70vuTD%2BiXx82UH%2BwnzLWHgmAQirOsnStN6BmE%2Fppcti2AWZN6DDjFFSKIqevmJG7QPWUXmkuNZXMWs4O0OJLbi7gnzbe6gr4e7e0%2B3vVwojItRUJU3OYwpttGm%2B9Y%2B7RwVhDbP%2Buk5G5AucIJbHdti8xSriAFZJOhLAwju11bkfzMJmdrcQGOqUBjbiSb%2F09639q2Cqsfg%2BiTHu7c57kSnzp7hRIlUz9w%2FWkERQTVD2jsDEAsmWCq39rouo202ipThgIFDZ4cYVciKz9TEPRSZ6mXubZvhmNovefGtUIBf%2F5gtozD4NcTbJ8Ear%2B%2F5lnIFOYf8k%2BeeuhmFDnZ%2FIDsoDcYukfOQ66xEoTTPSVdVdQ8y5kgHxcLCJRKaUUVDpjVDb2NTIRWAECmSBbcAVb&X-Amz-Signature=1e6f35b63009887d2150c5d00b4fe83be0d737e3ad2504ea8796f5f56669590e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG53BFQE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeeoAImyRI091yX2Hyr2wzEL%2BjUFsT%2FQw%2F9TYy7cX%2BawIgI5uWR9bgeP3oQ8gUSg4ErnXck45uMVFg46vE%2B%2BVl2HkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWjFTmGZCo3vNkmmCrcA23V%2F1hf7g%2FHMQjtg8BoG%2F1BED4v842UWcw4Bn2mqwgAiRaf0%2B%2FQOq7kUM3qfSzcfrGy1aU9hfDwImuuMz%2FTEu8eEZqfyDHUKtifDpjiZstOF6lyYamejvkKU2p2nxmFL5ExKKbx%2B5RvWHC5XTHTsvZyfm2ExE0ApF%2FJYInfkPkNV2x7X0u7tjuE4N4GdmXwX4ESH0KN1s80JBd%2BbZGxFKc5PsLyF1TXxqWtGWwPiYpggkAagysQzPS1p%2BLw8eGcsP0AMIT6K5CRdqiw1qBF6GXw7TdQ8owqRJ0OJ%2FIxnkCCosWmIu42OVn7ywfKlGMOEKxBpsxaAG3SHxZvCUlStWJ6NqSn6mic4fsN6a%2FdsFqvf73gU4T%2B2W%2F7nL%2FLbM9JsqgbY%2FynC5EaDwBzvx0l69FDd4HawcJeMbXsgapXB3k1etIPa%2FeqI%2F%2FX1NIhSSl8kFKRqvHrR7kdzLIeuldo8M%2BosdSl28AO3S0lqt6Y8QW1Tw4MocQkih%2BAAag4rpmsMjSIecGNZQDYfCSwGFHt8SdkAGMTt5t9jTCHH%2Bf%2FGD0H44bzdPuVvxh60OoxKYh3sLehUHiKvtLFTX37vn%2F8x5NUjM5jrdtMpar6mm1EY%2B9sBpyWITpdyP6uUO9mMLWdrcQGOqUBsB2XKeMuMdXXfBVbxdtCmIVc6AC3dCYsA36r9x%2By%2BsQY50rHP9tdpXl4sW1oVq%2BrvycDXI%2F9tZJg13JRIX3%2Bz8CzGPneFKMsuR%2B5xE6dbU2rLSagHEivMR1p5vp1Vv7WqOH0MzIO1ajSZ3%2FavzPfsDKUrGji8z73hwE69HBgVlaxXODn724vUg%2Bcl6L2i4Hd8D5HU%2Byy5phmwo159xOqHqEQOlSc&X-Amz-Signature=a1d2ae66cdc6bde672f2ddf2613178259dbb93ab60bf27190e3579389854c46e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG53BFQE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeeoAImyRI091yX2Hyr2wzEL%2BjUFsT%2FQw%2F9TYy7cX%2BawIgI5uWR9bgeP3oQ8gUSg4ErnXck45uMVFg46vE%2B%2BVl2HkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWjFTmGZCo3vNkmmCrcA23V%2F1hf7g%2FHMQjtg8BoG%2F1BED4v842UWcw4Bn2mqwgAiRaf0%2B%2FQOq7kUM3qfSzcfrGy1aU9hfDwImuuMz%2FTEu8eEZqfyDHUKtifDpjiZstOF6lyYamejvkKU2p2nxmFL5ExKKbx%2B5RvWHC5XTHTsvZyfm2ExE0ApF%2FJYInfkPkNV2x7X0u7tjuE4N4GdmXwX4ESH0KN1s80JBd%2BbZGxFKc5PsLyF1TXxqWtGWwPiYpggkAagysQzPS1p%2BLw8eGcsP0AMIT6K5CRdqiw1qBF6GXw7TdQ8owqRJ0OJ%2FIxnkCCosWmIu42OVn7ywfKlGMOEKxBpsxaAG3SHxZvCUlStWJ6NqSn6mic4fsN6a%2FdsFqvf73gU4T%2B2W%2F7nL%2FLbM9JsqgbY%2FynC5EaDwBzvx0l69FDd4HawcJeMbXsgapXB3k1etIPa%2FeqI%2F%2FX1NIhSSl8kFKRqvHrR7kdzLIeuldo8M%2BosdSl28AO3S0lqt6Y8QW1Tw4MocQkih%2BAAag4rpmsMjSIecGNZQDYfCSwGFHt8SdkAGMTt5t9jTCHH%2Bf%2FGD0H44bzdPuVvxh60OoxKYh3sLehUHiKvtLFTX37vn%2F8x5NUjM5jrdtMpar6mm1EY%2B9sBpyWITpdyP6uUO9mMLWdrcQGOqUBsB2XKeMuMdXXfBVbxdtCmIVc6AC3dCYsA36r9x%2By%2BsQY50rHP9tdpXl4sW1oVq%2BrvycDXI%2F9tZJg13JRIX3%2Bz8CzGPneFKMsuR%2B5xE6dbU2rLSagHEivMR1p5vp1Vv7WqOH0MzIO1ajSZ3%2FavzPfsDKUrGji8z73hwE69HBgVlaxXODn724vUg%2Bcl6L2i4Hd8D5HU%2Byy5phmwo159xOqHqEQOlSc&X-Amz-Signature=0cc93624b26b6641137723a39d32b2f83532d29c52de9249c48d740ee9d40a42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG53BFQE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeeoAImyRI091yX2Hyr2wzEL%2BjUFsT%2FQw%2F9TYy7cX%2BawIgI5uWR9bgeP3oQ8gUSg4ErnXck45uMVFg46vE%2B%2BVl2HkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWjFTmGZCo3vNkmmCrcA23V%2F1hf7g%2FHMQjtg8BoG%2F1BED4v842UWcw4Bn2mqwgAiRaf0%2B%2FQOq7kUM3qfSzcfrGy1aU9hfDwImuuMz%2FTEu8eEZqfyDHUKtifDpjiZstOF6lyYamejvkKU2p2nxmFL5ExKKbx%2B5RvWHC5XTHTsvZyfm2ExE0ApF%2FJYInfkPkNV2x7X0u7tjuE4N4GdmXwX4ESH0KN1s80JBd%2BbZGxFKc5PsLyF1TXxqWtGWwPiYpggkAagysQzPS1p%2BLw8eGcsP0AMIT6K5CRdqiw1qBF6GXw7TdQ8owqRJ0OJ%2FIxnkCCosWmIu42OVn7ywfKlGMOEKxBpsxaAG3SHxZvCUlStWJ6NqSn6mic4fsN6a%2FdsFqvf73gU4T%2B2W%2F7nL%2FLbM9JsqgbY%2FynC5EaDwBzvx0l69FDd4HawcJeMbXsgapXB3k1etIPa%2FeqI%2F%2FX1NIhSSl8kFKRqvHrR7kdzLIeuldo8M%2BosdSl28AO3S0lqt6Y8QW1Tw4MocQkih%2BAAag4rpmsMjSIecGNZQDYfCSwGFHt8SdkAGMTt5t9jTCHH%2Bf%2FGD0H44bzdPuVvxh60OoxKYh3sLehUHiKvtLFTX37vn%2F8x5NUjM5jrdtMpar6mm1EY%2B9sBpyWITpdyP6uUO9mMLWdrcQGOqUBsB2XKeMuMdXXfBVbxdtCmIVc6AC3dCYsA36r9x%2By%2BsQY50rHP9tdpXl4sW1oVq%2BrvycDXI%2F9tZJg13JRIX3%2Bz8CzGPneFKMsuR%2B5xE6dbU2rLSagHEivMR1p5vp1Vv7WqOH0MzIO1ajSZ3%2FavzPfsDKUrGji8z73hwE69HBgVlaxXODn724vUg%2Bcl6L2i4Hd8D5HU%2Byy5phmwo159xOqHqEQOlSc&X-Amz-Signature=4fd03aa52d80bb30cb24b471ae5c2fa672df459a49ffd40c7e89ecad045ad872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG53BFQE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeeoAImyRI091yX2Hyr2wzEL%2BjUFsT%2FQw%2F9TYy7cX%2BawIgI5uWR9bgeP3oQ8gUSg4ErnXck45uMVFg46vE%2B%2BVl2HkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWjFTmGZCo3vNkmmCrcA23V%2F1hf7g%2FHMQjtg8BoG%2F1BED4v842UWcw4Bn2mqwgAiRaf0%2B%2FQOq7kUM3qfSzcfrGy1aU9hfDwImuuMz%2FTEu8eEZqfyDHUKtifDpjiZstOF6lyYamejvkKU2p2nxmFL5ExKKbx%2B5RvWHC5XTHTsvZyfm2ExE0ApF%2FJYInfkPkNV2x7X0u7tjuE4N4GdmXwX4ESH0KN1s80JBd%2BbZGxFKc5PsLyF1TXxqWtGWwPiYpggkAagysQzPS1p%2BLw8eGcsP0AMIT6K5CRdqiw1qBF6GXw7TdQ8owqRJ0OJ%2FIxnkCCosWmIu42OVn7ywfKlGMOEKxBpsxaAG3SHxZvCUlStWJ6NqSn6mic4fsN6a%2FdsFqvf73gU4T%2B2W%2F7nL%2FLbM9JsqgbY%2FynC5EaDwBzvx0l69FDd4HawcJeMbXsgapXB3k1etIPa%2FeqI%2F%2FX1NIhSSl8kFKRqvHrR7kdzLIeuldo8M%2BosdSl28AO3S0lqt6Y8QW1Tw4MocQkih%2BAAag4rpmsMjSIecGNZQDYfCSwGFHt8SdkAGMTt5t9jTCHH%2Bf%2FGD0H44bzdPuVvxh60OoxKYh3sLehUHiKvtLFTX37vn%2F8x5NUjM5jrdtMpar6mm1EY%2B9sBpyWITpdyP6uUO9mMLWdrcQGOqUBsB2XKeMuMdXXfBVbxdtCmIVc6AC3dCYsA36r9x%2By%2BsQY50rHP9tdpXl4sW1oVq%2BrvycDXI%2F9tZJg13JRIX3%2Bz8CzGPneFKMsuR%2B5xE6dbU2rLSagHEivMR1p5vp1Vv7WqOH0MzIO1ajSZ3%2FavzPfsDKUrGji8z73hwE69HBgVlaxXODn724vUg%2Bcl6L2i4Hd8D5HU%2Byy5phmwo159xOqHqEQOlSc&X-Amz-Signature=3b481900353d17161ecda08c4b1d431c75e59e01aafb8ba053f7ff688ae087d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG53BFQE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeeoAImyRI091yX2Hyr2wzEL%2BjUFsT%2FQw%2F9TYy7cX%2BawIgI5uWR9bgeP3oQ8gUSg4ErnXck45uMVFg46vE%2B%2BVl2HkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWjFTmGZCo3vNkmmCrcA23V%2F1hf7g%2FHMQjtg8BoG%2F1BED4v842UWcw4Bn2mqwgAiRaf0%2B%2FQOq7kUM3qfSzcfrGy1aU9hfDwImuuMz%2FTEu8eEZqfyDHUKtifDpjiZstOF6lyYamejvkKU2p2nxmFL5ExKKbx%2B5RvWHC5XTHTsvZyfm2ExE0ApF%2FJYInfkPkNV2x7X0u7tjuE4N4GdmXwX4ESH0KN1s80JBd%2BbZGxFKc5PsLyF1TXxqWtGWwPiYpggkAagysQzPS1p%2BLw8eGcsP0AMIT6K5CRdqiw1qBF6GXw7TdQ8owqRJ0OJ%2FIxnkCCosWmIu42OVn7ywfKlGMOEKxBpsxaAG3SHxZvCUlStWJ6NqSn6mic4fsN6a%2FdsFqvf73gU4T%2B2W%2F7nL%2FLbM9JsqgbY%2FynC5EaDwBzvx0l69FDd4HawcJeMbXsgapXB3k1etIPa%2FeqI%2F%2FX1NIhSSl8kFKRqvHrR7kdzLIeuldo8M%2BosdSl28AO3S0lqt6Y8QW1Tw4MocQkih%2BAAag4rpmsMjSIecGNZQDYfCSwGFHt8SdkAGMTt5t9jTCHH%2Bf%2FGD0H44bzdPuVvxh60OoxKYh3sLehUHiKvtLFTX37vn%2F8x5NUjM5jrdtMpar6mm1EY%2B9sBpyWITpdyP6uUO9mMLWdrcQGOqUBsB2XKeMuMdXXfBVbxdtCmIVc6AC3dCYsA36r9x%2By%2BsQY50rHP9tdpXl4sW1oVq%2BrvycDXI%2F9tZJg13JRIX3%2Bz8CzGPneFKMsuR%2B5xE6dbU2rLSagHEivMR1p5vp1Vv7WqOH0MzIO1ajSZ3%2FavzPfsDKUrGji8z73hwE69HBgVlaxXODn724vUg%2Bcl6L2i4Hd8D5HU%2Byy5phmwo159xOqHqEQOlSc&X-Amz-Signature=14fd7b1714c211174d995d9e72239ca0418cf250d65c90b03a9daa9eda2e72d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG53BFQE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeeoAImyRI091yX2Hyr2wzEL%2BjUFsT%2FQw%2F9TYy7cX%2BawIgI5uWR9bgeP3oQ8gUSg4ErnXck45uMVFg46vE%2B%2BVl2HkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWjFTmGZCo3vNkmmCrcA23V%2F1hf7g%2FHMQjtg8BoG%2F1BED4v842UWcw4Bn2mqwgAiRaf0%2B%2FQOq7kUM3qfSzcfrGy1aU9hfDwImuuMz%2FTEu8eEZqfyDHUKtifDpjiZstOF6lyYamejvkKU2p2nxmFL5ExKKbx%2B5RvWHC5XTHTsvZyfm2ExE0ApF%2FJYInfkPkNV2x7X0u7tjuE4N4GdmXwX4ESH0KN1s80JBd%2BbZGxFKc5PsLyF1TXxqWtGWwPiYpggkAagysQzPS1p%2BLw8eGcsP0AMIT6K5CRdqiw1qBF6GXw7TdQ8owqRJ0OJ%2FIxnkCCosWmIu42OVn7ywfKlGMOEKxBpsxaAG3SHxZvCUlStWJ6NqSn6mic4fsN6a%2FdsFqvf73gU4T%2B2W%2F7nL%2FLbM9JsqgbY%2FynC5EaDwBzvx0l69FDd4HawcJeMbXsgapXB3k1etIPa%2FeqI%2F%2FX1NIhSSl8kFKRqvHrR7kdzLIeuldo8M%2BosdSl28AO3S0lqt6Y8QW1Tw4MocQkih%2BAAag4rpmsMjSIecGNZQDYfCSwGFHt8SdkAGMTt5t9jTCHH%2Bf%2FGD0H44bzdPuVvxh60OoxKYh3sLehUHiKvtLFTX37vn%2F8x5NUjM5jrdtMpar6mm1EY%2B9sBpyWITpdyP6uUO9mMLWdrcQGOqUBsB2XKeMuMdXXfBVbxdtCmIVc6AC3dCYsA36r9x%2By%2BsQY50rHP9tdpXl4sW1oVq%2BrvycDXI%2F9tZJg13JRIX3%2Bz8CzGPneFKMsuR%2B5xE6dbU2rLSagHEivMR1p5vp1Vv7WqOH0MzIO1ajSZ3%2FavzPfsDKUrGji8z73hwE69HBgVlaxXODn724vUg%2Bcl6L2i4Hd8D5HU%2Byy5phmwo159xOqHqEQOlSc&X-Amz-Signature=9616b45e4137e3274519f1395ee92ef3310a5341563f0ce4479c6e47f9947e2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG53BFQE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeeoAImyRI091yX2Hyr2wzEL%2BjUFsT%2FQw%2F9TYy7cX%2BawIgI5uWR9bgeP3oQ8gUSg4ErnXck45uMVFg46vE%2B%2BVl2HkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWjFTmGZCo3vNkmmCrcA23V%2F1hf7g%2FHMQjtg8BoG%2F1BED4v842UWcw4Bn2mqwgAiRaf0%2B%2FQOq7kUM3qfSzcfrGy1aU9hfDwImuuMz%2FTEu8eEZqfyDHUKtifDpjiZstOF6lyYamejvkKU2p2nxmFL5ExKKbx%2B5RvWHC5XTHTsvZyfm2ExE0ApF%2FJYInfkPkNV2x7X0u7tjuE4N4GdmXwX4ESH0KN1s80JBd%2BbZGxFKc5PsLyF1TXxqWtGWwPiYpggkAagysQzPS1p%2BLw8eGcsP0AMIT6K5CRdqiw1qBF6GXw7TdQ8owqRJ0OJ%2FIxnkCCosWmIu42OVn7ywfKlGMOEKxBpsxaAG3SHxZvCUlStWJ6NqSn6mic4fsN6a%2FdsFqvf73gU4T%2B2W%2F7nL%2FLbM9JsqgbY%2FynC5EaDwBzvx0l69FDd4HawcJeMbXsgapXB3k1etIPa%2FeqI%2F%2FX1NIhSSl8kFKRqvHrR7kdzLIeuldo8M%2BosdSl28AO3S0lqt6Y8QW1Tw4MocQkih%2BAAag4rpmsMjSIecGNZQDYfCSwGFHt8SdkAGMTt5t9jTCHH%2Bf%2FGD0H44bzdPuVvxh60OoxKYh3sLehUHiKvtLFTX37vn%2F8x5NUjM5jrdtMpar6mm1EY%2B9sBpyWITpdyP6uUO9mMLWdrcQGOqUBsB2XKeMuMdXXfBVbxdtCmIVc6AC3dCYsA36r9x%2By%2BsQY50rHP9tdpXl4sW1oVq%2BrvycDXI%2F9tZJg13JRIX3%2Bz8CzGPneFKMsuR%2B5xE6dbU2rLSagHEivMR1p5vp1Vv7WqOH0MzIO1ajSZ3%2FavzPfsDKUrGji8z73hwE69HBgVlaxXODn724vUg%2Bcl6L2i4Hd8D5HU%2Byy5phmwo159xOqHqEQOlSc&X-Amz-Signature=b58b70e9525166833f26608b69cce0fde8ca4b1f1c29125795b218c6ecd75275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
