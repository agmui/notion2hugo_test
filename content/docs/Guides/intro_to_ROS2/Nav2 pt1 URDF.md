---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T23:33:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T23:33:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R3YM6ZP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCDyvBchPtIJail4fwhtvtiTMdWeEWr1oR%2FH%2BA4kRQZFQIgaYHAB3uUTWViGUiV86j8H2CmwqvA4wadx4NlhftN5GsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4YmoxG9D%2FJjBGsEyrcA2fOZaRguOw0VpIsqXWj%2Bcn4bFDErVsxHD4bcQlj3bVhwa6pPhONvRfFjooTd5yUigtBZMjSr1aL3Dd9eNb2Sw02X854TKskqz29ZpYKieacI%2FyFUn1x1fmJ%2FDDadFyVFsHTnHzDe%2B9q34G6q5qpDVzK57ltlPpJ9LCv%2FAxK2BDqSCS2NWzVKE9S3gZTiH6pEPaEyDlCz0jh7%2Fw%2FeFQ9sGgiTwjmR5mlbjKvRhuDpbehkdLS0HyDYu1F4Ak4EPxjimpTp1aXC04tMHu7QNAfbeF6reLmoaTkUK2xt%2Fy%2ByRguxhoNmYGhibDxHT9s%2FctJo1kdQQw81qQLBxTee9OQZeWL15QsQ6fVINDrQxSRJtNBsqy5exbrhFUPsJ2fA%2FAh%2FkLKDMoBbILF1GbQDFRDSOzm6Xr9bSyienvt%2B4k9mV4SnEPS24SU2gPjwx6VcfznV73EejYjYap2yU9bG0Ext4o35Agd3TnpY%2Fr8onTGzXnbNaxK1P8tLdzimcIftufKRtILuohhbS%2FXhl%2BBEru13N7pOU9fBx0HFB938xjtmHCwYGM5wgrRRXy%2FlRAhOWrRXGufimUytqAjSpQel7dxQ6WoGlt0%2F%2F7K7rsjo6q91cFRjMozsV7nZYMWFVDPMLDXncQGOqUBuORk7HiG59Bowg9M0imM4ZtZwASpu4towPqMQCATUFwbeV8yarrkNsJEBwUESHqkZMKMXt8hRXilIcd3PgIe0fqj%2FkBda0grwJzATqqlye8k5f2CBjK9DCJNcuROWZWTPH%2B8JvxhHsWHqmi8G9XiB2tTe8ITuO7b92oS6Gf8IPfQ7JzgTQfjNfhdhg%2BF%2Fix8MxZaI8FnukjtCqDFEpCnXCiI5oHP&X-Amz-Signature=2cc167b29f86a12909898bf41d0fc0771a2634b099d9f68f890ac4f5f38bc2e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R3YM6ZP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCDyvBchPtIJail4fwhtvtiTMdWeEWr1oR%2FH%2BA4kRQZFQIgaYHAB3uUTWViGUiV86j8H2CmwqvA4wadx4NlhftN5GsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4YmoxG9D%2FJjBGsEyrcA2fOZaRguOw0VpIsqXWj%2Bcn4bFDErVsxHD4bcQlj3bVhwa6pPhONvRfFjooTd5yUigtBZMjSr1aL3Dd9eNb2Sw02X854TKskqz29ZpYKieacI%2FyFUn1x1fmJ%2FDDadFyVFsHTnHzDe%2B9q34G6q5qpDVzK57ltlPpJ9LCv%2FAxK2BDqSCS2NWzVKE9S3gZTiH6pEPaEyDlCz0jh7%2Fw%2FeFQ9sGgiTwjmR5mlbjKvRhuDpbehkdLS0HyDYu1F4Ak4EPxjimpTp1aXC04tMHu7QNAfbeF6reLmoaTkUK2xt%2Fy%2ByRguxhoNmYGhibDxHT9s%2FctJo1kdQQw81qQLBxTee9OQZeWL15QsQ6fVINDrQxSRJtNBsqy5exbrhFUPsJ2fA%2FAh%2FkLKDMoBbILF1GbQDFRDSOzm6Xr9bSyienvt%2B4k9mV4SnEPS24SU2gPjwx6VcfznV73EejYjYap2yU9bG0Ext4o35Agd3TnpY%2Fr8onTGzXnbNaxK1P8tLdzimcIftufKRtILuohhbS%2FXhl%2BBEru13N7pOU9fBx0HFB938xjtmHCwYGM5wgrRRXy%2FlRAhOWrRXGufimUytqAjSpQel7dxQ6WoGlt0%2F%2F7K7rsjo6q91cFRjMozsV7nZYMWFVDPMLDXncQGOqUBuORk7HiG59Bowg9M0imM4ZtZwASpu4towPqMQCATUFwbeV8yarrkNsJEBwUESHqkZMKMXt8hRXilIcd3PgIe0fqj%2FkBda0grwJzATqqlye8k5f2CBjK9DCJNcuROWZWTPH%2B8JvxhHsWHqmi8G9XiB2tTe8ITuO7b92oS6Gf8IPfQ7JzgTQfjNfhdhg%2BF%2Fix8MxZaI8FnukjtCqDFEpCnXCiI5oHP&X-Amz-Signature=d652c9ba739db2e5faba0ab9267285e15bdbac5087929f7539592e8456e778c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R3YM6ZP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCDyvBchPtIJail4fwhtvtiTMdWeEWr1oR%2FH%2BA4kRQZFQIgaYHAB3uUTWViGUiV86j8H2CmwqvA4wadx4NlhftN5GsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4YmoxG9D%2FJjBGsEyrcA2fOZaRguOw0VpIsqXWj%2Bcn4bFDErVsxHD4bcQlj3bVhwa6pPhONvRfFjooTd5yUigtBZMjSr1aL3Dd9eNb2Sw02X854TKskqz29ZpYKieacI%2FyFUn1x1fmJ%2FDDadFyVFsHTnHzDe%2B9q34G6q5qpDVzK57ltlPpJ9LCv%2FAxK2BDqSCS2NWzVKE9S3gZTiH6pEPaEyDlCz0jh7%2Fw%2FeFQ9sGgiTwjmR5mlbjKvRhuDpbehkdLS0HyDYu1F4Ak4EPxjimpTp1aXC04tMHu7QNAfbeF6reLmoaTkUK2xt%2Fy%2ByRguxhoNmYGhibDxHT9s%2FctJo1kdQQw81qQLBxTee9OQZeWL15QsQ6fVINDrQxSRJtNBsqy5exbrhFUPsJ2fA%2FAh%2FkLKDMoBbILF1GbQDFRDSOzm6Xr9bSyienvt%2B4k9mV4SnEPS24SU2gPjwx6VcfznV73EejYjYap2yU9bG0Ext4o35Agd3TnpY%2Fr8onTGzXnbNaxK1P8tLdzimcIftufKRtILuohhbS%2FXhl%2BBEru13N7pOU9fBx0HFB938xjtmHCwYGM5wgrRRXy%2FlRAhOWrRXGufimUytqAjSpQel7dxQ6WoGlt0%2F%2F7K7rsjo6q91cFRjMozsV7nZYMWFVDPMLDXncQGOqUBuORk7HiG59Bowg9M0imM4ZtZwASpu4towPqMQCATUFwbeV8yarrkNsJEBwUESHqkZMKMXt8hRXilIcd3PgIe0fqj%2FkBda0grwJzATqqlye8k5f2CBjK9DCJNcuROWZWTPH%2B8JvxhHsWHqmi8G9XiB2tTe8ITuO7b92oS6Gf8IPfQ7JzgTQfjNfhdhg%2BF%2Fix8MxZaI8FnukjtCqDFEpCnXCiI5oHP&X-Amz-Signature=803d3583d1faee4da1f8fed98cfccfa34324eaa2ec4dd71568e22013a3ccb00b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R3YM6ZP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCDyvBchPtIJail4fwhtvtiTMdWeEWr1oR%2FH%2BA4kRQZFQIgaYHAB3uUTWViGUiV86j8H2CmwqvA4wadx4NlhftN5GsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4YmoxG9D%2FJjBGsEyrcA2fOZaRguOw0VpIsqXWj%2Bcn4bFDErVsxHD4bcQlj3bVhwa6pPhONvRfFjooTd5yUigtBZMjSr1aL3Dd9eNb2Sw02X854TKskqz29ZpYKieacI%2FyFUn1x1fmJ%2FDDadFyVFsHTnHzDe%2B9q34G6q5qpDVzK57ltlPpJ9LCv%2FAxK2BDqSCS2NWzVKE9S3gZTiH6pEPaEyDlCz0jh7%2Fw%2FeFQ9sGgiTwjmR5mlbjKvRhuDpbehkdLS0HyDYu1F4Ak4EPxjimpTp1aXC04tMHu7QNAfbeF6reLmoaTkUK2xt%2Fy%2ByRguxhoNmYGhibDxHT9s%2FctJo1kdQQw81qQLBxTee9OQZeWL15QsQ6fVINDrQxSRJtNBsqy5exbrhFUPsJ2fA%2FAh%2FkLKDMoBbILF1GbQDFRDSOzm6Xr9bSyienvt%2B4k9mV4SnEPS24SU2gPjwx6VcfznV73EejYjYap2yU9bG0Ext4o35Agd3TnpY%2Fr8onTGzXnbNaxK1P8tLdzimcIftufKRtILuohhbS%2FXhl%2BBEru13N7pOU9fBx0HFB938xjtmHCwYGM5wgrRRXy%2FlRAhOWrRXGufimUytqAjSpQel7dxQ6WoGlt0%2F%2F7K7rsjo6q91cFRjMozsV7nZYMWFVDPMLDXncQGOqUBuORk7HiG59Bowg9M0imM4ZtZwASpu4towPqMQCATUFwbeV8yarrkNsJEBwUESHqkZMKMXt8hRXilIcd3PgIe0fqj%2FkBda0grwJzATqqlye8k5f2CBjK9DCJNcuROWZWTPH%2B8JvxhHsWHqmi8G9XiB2tTe8ITuO7b92oS6Gf8IPfQ7JzgTQfjNfhdhg%2BF%2Fix8MxZaI8FnukjtCqDFEpCnXCiI5oHP&X-Amz-Signature=c21e622b91d9c80c10fcf3ef07950821f86ea953470dc8974d8d4773aa8c45c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R3YM6ZP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCDyvBchPtIJail4fwhtvtiTMdWeEWr1oR%2FH%2BA4kRQZFQIgaYHAB3uUTWViGUiV86j8H2CmwqvA4wadx4NlhftN5GsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4YmoxG9D%2FJjBGsEyrcA2fOZaRguOw0VpIsqXWj%2Bcn4bFDErVsxHD4bcQlj3bVhwa6pPhONvRfFjooTd5yUigtBZMjSr1aL3Dd9eNb2Sw02X854TKskqz29ZpYKieacI%2FyFUn1x1fmJ%2FDDadFyVFsHTnHzDe%2B9q34G6q5qpDVzK57ltlPpJ9LCv%2FAxK2BDqSCS2NWzVKE9S3gZTiH6pEPaEyDlCz0jh7%2Fw%2FeFQ9sGgiTwjmR5mlbjKvRhuDpbehkdLS0HyDYu1F4Ak4EPxjimpTp1aXC04tMHu7QNAfbeF6reLmoaTkUK2xt%2Fy%2ByRguxhoNmYGhibDxHT9s%2FctJo1kdQQw81qQLBxTee9OQZeWL15QsQ6fVINDrQxSRJtNBsqy5exbrhFUPsJ2fA%2FAh%2FkLKDMoBbILF1GbQDFRDSOzm6Xr9bSyienvt%2B4k9mV4SnEPS24SU2gPjwx6VcfznV73EejYjYap2yU9bG0Ext4o35Agd3TnpY%2Fr8onTGzXnbNaxK1P8tLdzimcIftufKRtILuohhbS%2FXhl%2BBEru13N7pOU9fBx0HFB938xjtmHCwYGM5wgrRRXy%2FlRAhOWrRXGufimUytqAjSpQel7dxQ6WoGlt0%2F%2F7K7rsjo6q91cFRjMozsV7nZYMWFVDPMLDXncQGOqUBuORk7HiG59Bowg9M0imM4ZtZwASpu4towPqMQCATUFwbeV8yarrkNsJEBwUESHqkZMKMXt8hRXilIcd3PgIe0fqj%2FkBda0grwJzATqqlye8k5f2CBjK9DCJNcuROWZWTPH%2B8JvxhHsWHqmi8G9XiB2tTe8ITuO7b92oS6Gf8IPfQ7JzgTQfjNfhdhg%2BF%2Fix8MxZaI8FnukjtCqDFEpCnXCiI5oHP&X-Amz-Signature=fd2d4eaac1791ec1f1748cf116b6a866a47b46d38a05d9476382747f1384e965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R3YM6ZP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCDyvBchPtIJail4fwhtvtiTMdWeEWr1oR%2FH%2BA4kRQZFQIgaYHAB3uUTWViGUiV86j8H2CmwqvA4wadx4NlhftN5GsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4YmoxG9D%2FJjBGsEyrcA2fOZaRguOw0VpIsqXWj%2Bcn4bFDErVsxHD4bcQlj3bVhwa6pPhONvRfFjooTd5yUigtBZMjSr1aL3Dd9eNb2Sw02X854TKskqz29ZpYKieacI%2FyFUn1x1fmJ%2FDDadFyVFsHTnHzDe%2B9q34G6q5qpDVzK57ltlPpJ9LCv%2FAxK2BDqSCS2NWzVKE9S3gZTiH6pEPaEyDlCz0jh7%2Fw%2FeFQ9sGgiTwjmR5mlbjKvRhuDpbehkdLS0HyDYu1F4Ak4EPxjimpTp1aXC04tMHu7QNAfbeF6reLmoaTkUK2xt%2Fy%2ByRguxhoNmYGhibDxHT9s%2FctJo1kdQQw81qQLBxTee9OQZeWL15QsQ6fVINDrQxSRJtNBsqy5exbrhFUPsJ2fA%2FAh%2FkLKDMoBbILF1GbQDFRDSOzm6Xr9bSyienvt%2B4k9mV4SnEPS24SU2gPjwx6VcfznV73EejYjYap2yU9bG0Ext4o35Agd3TnpY%2Fr8onTGzXnbNaxK1P8tLdzimcIftufKRtILuohhbS%2FXhl%2BBEru13N7pOU9fBx0HFB938xjtmHCwYGM5wgrRRXy%2FlRAhOWrRXGufimUytqAjSpQel7dxQ6WoGlt0%2F%2F7K7rsjo6q91cFRjMozsV7nZYMWFVDPMLDXncQGOqUBuORk7HiG59Bowg9M0imM4ZtZwASpu4towPqMQCATUFwbeV8yarrkNsJEBwUESHqkZMKMXt8hRXilIcd3PgIe0fqj%2FkBda0grwJzATqqlye8k5f2CBjK9DCJNcuROWZWTPH%2B8JvxhHsWHqmi8G9XiB2tTe8ITuO7b92oS6Gf8IPfQ7JzgTQfjNfhdhg%2BF%2Fix8MxZaI8FnukjtCqDFEpCnXCiI5oHP&X-Amz-Signature=54244bff83e10628b5968f15aa1e2217b2336055a6369b17ab506a52805b539b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R3YM6ZP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCDyvBchPtIJail4fwhtvtiTMdWeEWr1oR%2FH%2BA4kRQZFQIgaYHAB3uUTWViGUiV86j8H2CmwqvA4wadx4NlhftN5GsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4YmoxG9D%2FJjBGsEyrcA2fOZaRguOw0VpIsqXWj%2Bcn4bFDErVsxHD4bcQlj3bVhwa6pPhONvRfFjooTd5yUigtBZMjSr1aL3Dd9eNb2Sw02X854TKskqz29ZpYKieacI%2FyFUn1x1fmJ%2FDDadFyVFsHTnHzDe%2B9q34G6q5qpDVzK57ltlPpJ9LCv%2FAxK2BDqSCS2NWzVKE9S3gZTiH6pEPaEyDlCz0jh7%2Fw%2FeFQ9sGgiTwjmR5mlbjKvRhuDpbehkdLS0HyDYu1F4Ak4EPxjimpTp1aXC04tMHu7QNAfbeF6reLmoaTkUK2xt%2Fy%2ByRguxhoNmYGhibDxHT9s%2FctJo1kdQQw81qQLBxTee9OQZeWL15QsQ6fVINDrQxSRJtNBsqy5exbrhFUPsJ2fA%2FAh%2FkLKDMoBbILF1GbQDFRDSOzm6Xr9bSyienvt%2B4k9mV4SnEPS24SU2gPjwx6VcfznV73EejYjYap2yU9bG0Ext4o35Agd3TnpY%2Fr8onTGzXnbNaxK1P8tLdzimcIftufKRtILuohhbS%2FXhl%2BBEru13N7pOU9fBx0HFB938xjtmHCwYGM5wgrRRXy%2FlRAhOWrRXGufimUytqAjSpQel7dxQ6WoGlt0%2F%2F7K7rsjo6q91cFRjMozsV7nZYMWFVDPMLDXncQGOqUBuORk7HiG59Bowg9M0imM4ZtZwASpu4towPqMQCATUFwbeV8yarrkNsJEBwUESHqkZMKMXt8hRXilIcd3PgIe0fqj%2FkBda0grwJzATqqlye8k5f2CBjK9DCJNcuROWZWTPH%2B8JvxhHsWHqmi8G9XiB2tTe8ITuO7b92oS6Gf8IPfQ7JzgTQfjNfhdhg%2BF%2Fix8MxZaI8FnukjtCqDFEpCnXCiI5oHP&X-Amz-Signature=ea26b5853fee14bf22fcf1b733664c37ec2572969758fa30af40330a2ff13313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R3YM6ZP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCDyvBchPtIJail4fwhtvtiTMdWeEWr1oR%2FH%2BA4kRQZFQIgaYHAB3uUTWViGUiV86j8H2CmwqvA4wadx4NlhftN5GsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4YmoxG9D%2FJjBGsEyrcA2fOZaRguOw0VpIsqXWj%2Bcn4bFDErVsxHD4bcQlj3bVhwa6pPhONvRfFjooTd5yUigtBZMjSr1aL3Dd9eNb2Sw02X854TKskqz29ZpYKieacI%2FyFUn1x1fmJ%2FDDadFyVFsHTnHzDe%2B9q34G6q5qpDVzK57ltlPpJ9LCv%2FAxK2BDqSCS2NWzVKE9S3gZTiH6pEPaEyDlCz0jh7%2Fw%2FeFQ9sGgiTwjmR5mlbjKvRhuDpbehkdLS0HyDYu1F4Ak4EPxjimpTp1aXC04tMHu7QNAfbeF6reLmoaTkUK2xt%2Fy%2ByRguxhoNmYGhibDxHT9s%2FctJo1kdQQw81qQLBxTee9OQZeWL15QsQ6fVINDrQxSRJtNBsqy5exbrhFUPsJ2fA%2FAh%2FkLKDMoBbILF1GbQDFRDSOzm6Xr9bSyienvt%2B4k9mV4SnEPS24SU2gPjwx6VcfznV73EejYjYap2yU9bG0Ext4o35Agd3TnpY%2Fr8onTGzXnbNaxK1P8tLdzimcIftufKRtILuohhbS%2FXhl%2BBEru13N7pOU9fBx0HFB938xjtmHCwYGM5wgrRRXy%2FlRAhOWrRXGufimUytqAjSpQel7dxQ6WoGlt0%2F%2F7K7rsjo6q91cFRjMozsV7nZYMWFVDPMLDXncQGOqUBuORk7HiG59Bowg9M0imM4ZtZwASpu4towPqMQCATUFwbeV8yarrkNsJEBwUESHqkZMKMXt8hRXilIcd3PgIe0fqj%2FkBda0grwJzATqqlye8k5f2CBjK9DCJNcuROWZWTPH%2B8JvxhHsWHqmi8G9XiB2tTe8ITuO7b92oS6Gf8IPfQ7JzgTQfjNfhdhg%2BF%2Fix8MxZaI8FnukjtCqDFEpCnXCiI5oHP&X-Amz-Signature=489fee118988f8a02344262ea8598644060e73032909a45639af19dc8e60a843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R3YM6ZP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCDyvBchPtIJail4fwhtvtiTMdWeEWr1oR%2FH%2BA4kRQZFQIgaYHAB3uUTWViGUiV86j8H2CmwqvA4wadx4NlhftN5GsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4YmoxG9D%2FJjBGsEyrcA2fOZaRguOw0VpIsqXWj%2Bcn4bFDErVsxHD4bcQlj3bVhwa6pPhONvRfFjooTd5yUigtBZMjSr1aL3Dd9eNb2Sw02X854TKskqz29ZpYKieacI%2FyFUn1x1fmJ%2FDDadFyVFsHTnHzDe%2B9q34G6q5qpDVzK57ltlPpJ9LCv%2FAxK2BDqSCS2NWzVKE9S3gZTiH6pEPaEyDlCz0jh7%2Fw%2FeFQ9sGgiTwjmR5mlbjKvRhuDpbehkdLS0HyDYu1F4Ak4EPxjimpTp1aXC04tMHu7QNAfbeF6reLmoaTkUK2xt%2Fy%2ByRguxhoNmYGhibDxHT9s%2FctJo1kdQQw81qQLBxTee9OQZeWL15QsQ6fVINDrQxSRJtNBsqy5exbrhFUPsJ2fA%2FAh%2FkLKDMoBbILF1GbQDFRDSOzm6Xr9bSyienvt%2B4k9mV4SnEPS24SU2gPjwx6VcfznV73EejYjYap2yU9bG0Ext4o35Agd3TnpY%2Fr8onTGzXnbNaxK1P8tLdzimcIftufKRtILuohhbS%2FXhl%2BBEru13N7pOU9fBx0HFB938xjtmHCwYGM5wgrRRXy%2FlRAhOWrRXGufimUytqAjSpQel7dxQ6WoGlt0%2F%2F7K7rsjo6q91cFRjMozsV7nZYMWFVDPMLDXncQGOqUBuORk7HiG59Bowg9M0imM4ZtZwASpu4towPqMQCATUFwbeV8yarrkNsJEBwUESHqkZMKMXt8hRXilIcd3PgIe0fqj%2FkBda0grwJzATqqlye8k5f2CBjK9DCJNcuROWZWTPH%2B8JvxhHsWHqmi8G9XiB2tTe8ITuO7b92oS6Gf8IPfQ7JzgTQfjNfhdhg%2BF%2Fix8MxZaI8FnukjtCqDFEpCnXCiI5oHP&X-Amz-Signature=ad912ad8b428db5232bec48fd626c86d4a0f8a1e65d4ef781b3c7ceb83e3a25b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R3YM6ZP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCDyvBchPtIJail4fwhtvtiTMdWeEWr1oR%2FH%2BA4kRQZFQIgaYHAB3uUTWViGUiV86j8H2CmwqvA4wadx4NlhftN5GsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4YmoxG9D%2FJjBGsEyrcA2fOZaRguOw0VpIsqXWj%2Bcn4bFDErVsxHD4bcQlj3bVhwa6pPhONvRfFjooTd5yUigtBZMjSr1aL3Dd9eNb2Sw02X854TKskqz29ZpYKieacI%2FyFUn1x1fmJ%2FDDadFyVFsHTnHzDe%2B9q34G6q5qpDVzK57ltlPpJ9LCv%2FAxK2BDqSCS2NWzVKE9S3gZTiH6pEPaEyDlCz0jh7%2Fw%2FeFQ9sGgiTwjmR5mlbjKvRhuDpbehkdLS0HyDYu1F4Ak4EPxjimpTp1aXC04tMHu7QNAfbeF6reLmoaTkUK2xt%2Fy%2ByRguxhoNmYGhibDxHT9s%2FctJo1kdQQw81qQLBxTee9OQZeWL15QsQ6fVINDrQxSRJtNBsqy5exbrhFUPsJ2fA%2FAh%2FkLKDMoBbILF1GbQDFRDSOzm6Xr9bSyienvt%2B4k9mV4SnEPS24SU2gPjwx6VcfznV73EejYjYap2yU9bG0Ext4o35Agd3TnpY%2Fr8onTGzXnbNaxK1P8tLdzimcIftufKRtILuohhbS%2FXhl%2BBEru13N7pOU9fBx0HFB938xjtmHCwYGM5wgrRRXy%2FlRAhOWrRXGufimUytqAjSpQel7dxQ6WoGlt0%2F%2F7K7rsjo6q91cFRjMozsV7nZYMWFVDPMLDXncQGOqUBuORk7HiG59Bowg9M0imM4ZtZwASpu4towPqMQCATUFwbeV8yarrkNsJEBwUESHqkZMKMXt8hRXilIcd3PgIe0fqj%2FkBda0grwJzATqqlye8k5f2CBjK9DCJNcuROWZWTPH%2B8JvxhHsWHqmi8G9XiB2tTe8ITuO7b92oS6Gf8IPfQ7JzgTQfjNfhdhg%2BF%2Fix8MxZaI8FnukjtCqDFEpCnXCiI5oHP&X-Amz-Signature=983b3413d91797e9bb1812aa58dd502b7d824d53191ab158d7999df56b8e5f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R3YM6ZP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCDyvBchPtIJail4fwhtvtiTMdWeEWr1oR%2FH%2BA4kRQZFQIgaYHAB3uUTWViGUiV86j8H2CmwqvA4wadx4NlhftN5GsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4YmoxG9D%2FJjBGsEyrcA2fOZaRguOw0VpIsqXWj%2Bcn4bFDErVsxHD4bcQlj3bVhwa6pPhONvRfFjooTd5yUigtBZMjSr1aL3Dd9eNb2Sw02X854TKskqz29ZpYKieacI%2FyFUn1x1fmJ%2FDDadFyVFsHTnHzDe%2B9q34G6q5qpDVzK57ltlPpJ9LCv%2FAxK2BDqSCS2NWzVKE9S3gZTiH6pEPaEyDlCz0jh7%2Fw%2FeFQ9sGgiTwjmR5mlbjKvRhuDpbehkdLS0HyDYu1F4Ak4EPxjimpTp1aXC04tMHu7QNAfbeF6reLmoaTkUK2xt%2Fy%2ByRguxhoNmYGhibDxHT9s%2FctJo1kdQQw81qQLBxTee9OQZeWL15QsQ6fVINDrQxSRJtNBsqy5exbrhFUPsJ2fA%2FAh%2FkLKDMoBbILF1GbQDFRDSOzm6Xr9bSyienvt%2B4k9mV4SnEPS24SU2gPjwx6VcfznV73EejYjYap2yU9bG0Ext4o35Agd3TnpY%2Fr8onTGzXnbNaxK1P8tLdzimcIftufKRtILuohhbS%2FXhl%2BBEru13N7pOU9fBx0HFB938xjtmHCwYGM5wgrRRXy%2FlRAhOWrRXGufimUytqAjSpQel7dxQ6WoGlt0%2F%2F7K7rsjo6q91cFRjMozsV7nZYMWFVDPMLDXncQGOqUBuORk7HiG59Bowg9M0imM4ZtZwASpu4towPqMQCATUFwbeV8yarrkNsJEBwUESHqkZMKMXt8hRXilIcd3PgIe0fqj%2FkBda0grwJzATqqlye8k5f2CBjK9DCJNcuROWZWTPH%2B8JvxhHsWHqmi8G9XiB2tTe8ITuO7b92oS6Gf8IPfQ7JzgTQfjNfhdhg%2BF%2Fix8MxZaI8FnukjtCqDFEpCnXCiI5oHP&X-Amz-Signature=13830dbd8d45fcf66da9eb7e94d84d05c84bcd07b890e09ae2ff91b3bc364ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R3YM6ZP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCDyvBchPtIJail4fwhtvtiTMdWeEWr1oR%2FH%2BA4kRQZFQIgaYHAB3uUTWViGUiV86j8H2CmwqvA4wadx4NlhftN5GsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4YmoxG9D%2FJjBGsEyrcA2fOZaRguOw0VpIsqXWj%2Bcn4bFDErVsxHD4bcQlj3bVhwa6pPhONvRfFjooTd5yUigtBZMjSr1aL3Dd9eNb2Sw02X854TKskqz29ZpYKieacI%2FyFUn1x1fmJ%2FDDadFyVFsHTnHzDe%2B9q34G6q5qpDVzK57ltlPpJ9LCv%2FAxK2BDqSCS2NWzVKE9S3gZTiH6pEPaEyDlCz0jh7%2Fw%2FeFQ9sGgiTwjmR5mlbjKvRhuDpbehkdLS0HyDYu1F4Ak4EPxjimpTp1aXC04tMHu7QNAfbeF6reLmoaTkUK2xt%2Fy%2ByRguxhoNmYGhibDxHT9s%2FctJo1kdQQw81qQLBxTee9OQZeWL15QsQ6fVINDrQxSRJtNBsqy5exbrhFUPsJ2fA%2FAh%2FkLKDMoBbILF1GbQDFRDSOzm6Xr9bSyienvt%2B4k9mV4SnEPS24SU2gPjwx6VcfznV73EejYjYap2yU9bG0Ext4o35Agd3TnpY%2Fr8onTGzXnbNaxK1P8tLdzimcIftufKRtILuohhbS%2FXhl%2BBEru13N7pOU9fBx0HFB938xjtmHCwYGM5wgrRRXy%2FlRAhOWrRXGufimUytqAjSpQel7dxQ6WoGlt0%2F%2F7K7rsjo6q91cFRjMozsV7nZYMWFVDPMLDXncQGOqUBuORk7HiG59Bowg9M0imM4ZtZwASpu4towPqMQCATUFwbeV8yarrkNsJEBwUESHqkZMKMXt8hRXilIcd3PgIe0fqj%2FkBda0grwJzATqqlye8k5f2CBjK9DCJNcuROWZWTPH%2B8JvxhHsWHqmi8G9XiB2tTe8ITuO7b92oS6Gf8IPfQ7JzgTQfjNfhdhg%2BF%2Fix8MxZaI8FnukjtCqDFEpCnXCiI5oHP&X-Amz-Signature=8d1b9f767a673e2208f1fd473d2b577f889c7d92045a3fb9ea525a6cbd28bcd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R3YM6ZP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCDyvBchPtIJail4fwhtvtiTMdWeEWr1oR%2FH%2BA4kRQZFQIgaYHAB3uUTWViGUiV86j8H2CmwqvA4wadx4NlhftN5GsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4YmoxG9D%2FJjBGsEyrcA2fOZaRguOw0VpIsqXWj%2Bcn4bFDErVsxHD4bcQlj3bVhwa6pPhONvRfFjooTd5yUigtBZMjSr1aL3Dd9eNb2Sw02X854TKskqz29ZpYKieacI%2FyFUn1x1fmJ%2FDDadFyVFsHTnHzDe%2B9q34G6q5qpDVzK57ltlPpJ9LCv%2FAxK2BDqSCS2NWzVKE9S3gZTiH6pEPaEyDlCz0jh7%2Fw%2FeFQ9sGgiTwjmR5mlbjKvRhuDpbehkdLS0HyDYu1F4Ak4EPxjimpTp1aXC04tMHu7QNAfbeF6reLmoaTkUK2xt%2Fy%2ByRguxhoNmYGhibDxHT9s%2FctJo1kdQQw81qQLBxTee9OQZeWL15QsQ6fVINDrQxSRJtNBsqy5exbrhFUPsJ2fA%2FAh%2FkLKDMoBbILF1GbQDFRDSOzm6Xr9bSyienvt%2B4k9mV4SnEPS24SU2gPjwx6VcfznV73EejYjYap2yU9bG0Ext4o35Agd3TnpY%2Fr8onTGzXnbNaxK1P8tLdzimcIftufKRtILuohhbS%2FXhl%2BBEru13N7pOU9fBx0HFB938xjtmHCwYGM5wgrRRXy%2FlRAhOWrRXGufimUytqAjSpQel7dxQ6WoGlt0%2F%2F7K7rsjo6q91cFRjMozsV7nZYMWFVDPMLDXncQGOqUBuORk7HiG59Bowg9M0imM4ZtZwASpu4towPqMQCATUFwbeV8yarrkNsJEBwUESHqkZMKMXt8hRXilIcd3PgIe0fqj%2FkBda0grwJzATqqlye8k5f2CBjK9DCJNcuROWZWTPH%2B8JvxhHsWHqmi8G9XiB2tTe8ITuO7b92oS6Gf8IPfQ7JzgTQfjNfhdhg%2BF%2Fix8MxZaI8FnukjtCqDFEpCnXCiI5oHP&X-Amz-Signature=452cdf91142a28249b7e32f57d98aa611c3a0f8b73aa72dedc600147c642bf3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R3YM6ZP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCDyvBchPtIJail4fwhtvtiTMdWeEWr1oR%2FH%2BA4kRQZFQIgaYHAB3uUTWViGUiV86j8H2CmwqvA4wadx4NlhftN5GsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4YmoxG9D%2FJjBGsEyrcA2fOZaRguOw0VpIsqXWj%2Bcn4bFDErVsxHD4bcQlj3bVhwa6pPhONvRfFjooTd5yUigtBZMjSr1aL3Dd9eNb2Sw02X854TKskqz29ZpYKieacI%2FyFUn1x1fmJ%2FDDadFyVFsHTnHzDe%2B9q34G6q5qpDVzK57ltlPpJ9LCv%2FAxK2BDqSCS2NWzVKE9S3gZTiH6pEPaEyDlCz0jh7%2Fw%2FeFQ9sGgiTwjmR5mlbjKvRhuDpbehkdLS0HyDYu1F4Ak4EPxjimpTp1aXC04tMHu7QNAfbeF6reLmoaTkUK2xt%2Fy%2ByRguxhoNmYGhibDxHT9s%2FctJo1kdQQw81qQLBxTee9OQZeWL15QsQ6fVINDrQxSRJtNBsqy5exbrhFUPsJ2fA%2FAh%2FkLKDMoBbILF1GbQDFRDSOzm6Xr9bSyienvt%2B4k9mV4SnEPS24SU2gPjwx6VcfznV73EejYjYap2yU9bG0Ext4o35Agd3TnpY%2Fr8onTGzXnbNaxK1P8tLdzimcIftufKRtILuohhbS%2FXhl%2BBEru13N7pOU9fBx0HFB938xjtmHCwYGM5wgrRRXy%2FlRAhOWrRXGufimUytqAjSpQel7dxQ6WoGlt0%2F%2F7K7rsjo6q91cFRjMozsV7nZYMWFVDPMLDXncQGOqUBuORk7HiG59Bowg9M0imM4ZtZwASpu4towPqMQCATUFwbeV8yarrkNsJEBwUESHqkZMKMXt8hRXilIcd3PgIe0fqj%2FkBda0grwJzATqqlye8k5f2CBjK9DCJNcuROWZWTPH%2B8JvxhHsWHqmi8G9XiB2tTe8ITuO7b92oS6Gf8IPfQ7JzgTQfjNfhdhg%2BF%2Fix8MxZaI8FnukjtCqDFEpCnXCiI5oHP&X-Amz-Signature=89412c27271ac7b808354959c62facc140a81ef427c791aaf9b95e98ab1faf94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NTOHAP2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIFOxoCS3%2FBQ%2Fs3wrmLf093HOZ2Dv32NNIsbCmIxKfT8rAiEA5WIUmn2MDQygCJsAc%2F2cetdsVuNWT0B16xfpRPlACSgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuACL05xxX%2F8p4%2B2yrcA4bNQpBsIslMN8SodzRBYDlS47Rbvc%2B04q30ig7gd5PvBhk%2FpqLwD3T1dWXEnhFapA4KSWKzW2cTgLnPr1eslNrmhquGt40Ii2TGXQhpSGbAQ9qS52KGfqsQQun%2FsAFByR1DDngUOwP7BUj0TYQJw8U%2BNF4vfU9w6CVD5dJYkWHCcwYOI4zqYPkzA2Q5mMoAXwjaMDjMRQmy1g1snayHDPgfCikr81wcLp%2FGuJF3A7%2BKvskrYkra7lv8gPHr%2FVZa6aeBFwpmi0rhDOcTnaKhmq52HxkHILf115utMCMSPwuvMNBQSae0t%2BeKKBEdrsZl%2FGGRfMqnWWrT8EDvh4qHYfqBWCJWLDoseO3KljT5oeYu77kXoKB7mQ8TrQH%2FfekGBOPjbygCNLS%2FLtfGIFchIwW9ZkdqcGgpurffkTgjvMz8N2FaD%2Fi7QRqwpT3rxcz%2BHUVNILNM8WdLWVp%2B2OqzHvaVfZReCw9KR1UscZckXyqpkg2OoI6QwGG1LOp37v%2FPClVhFYGLsnVY7EsM3vRO2LhA4cK7%2FYoSWW9o6pNveCW1MAFkvaaCfGpMpaboUAIgFPMpSWM0a3D9aFedtjL50OV%2FQxftUIVbdPEFHgcQy%2FJsUpA3ki3mW50jXip%2BMMXXncQGOqUB7IboDmEeEtrhOH5btVufy3ZBODCYbbI1EFuQVNWb1kY7GA14HZKdg9t%2B8JIhj05CJPRXtXbF1PECRrZDWG2JMljbIfmcvCqPe%2FJe7QdDN7LNLKZgDdfDJp3l78p7Bzh5ckhho8zYfb%2BAHsaSwz5GXILp8wNvKBpOygrFImas6Ktm8dIv6AF2JPxYQC4tIq1V%2BwQSwq4YQ0HprYxS9zb0VDW7wAVa&X-Amz-Signature=2361048444de3209353611a1e6016317aab52d90dc7aa21333e9a4302db0bfe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NTOHAP2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIFOxoCS3%2FBQ%2Fs3wrmLf093HOZ2Dv32NNIsbCmIxKfT8rAiEA5WIUmn2MDQygCJsAc%2F2cetdsVuNWT0B16xfpRPlACSgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuACL05xxX%2F8p4%2B2yrcA4bNQpBsIslMN8SodzRBYDlS47Rbvc%2B04q30ig7gd5PvBhk%2FpqLwD3T1dWXEnhFapA4KSWKzW2cTgLnPr1eslNrmhquGt40Ii2TGXQhpSGbAQ9qS52KGfqsQQun%2FsAFByR1DDngUOwP7BUj0TYQJw8U%2BNF4vfU9w6CVD5dJYkWHCcwYOI4zqYPkzA2Q5mMoAXwjaMDjMRQmy1g1snayHDPgfCikr81wcLp%2FGuJF3A7%2BKvskrYkra7lv8gPHr%2FVZa6aeBFwpmi0rhDOcTnaKhmq52HxkHILf115utMCMSPwuvMNBQSae0t%2BeKKBEdrsZl%2FGGRfMqnWWrT8EDvh4qHYfqBWCJWLDoseO3KljT5oeYu77kXoKB7mQ8TrQH%2FfekGBOPjbygCNLS%2FLtfGIFchIwW9ZkdqcGgpurffkTgjvMz8N2FaD%2Fi7QRqwpT3rxcz%2BHUVNILNM8WdLWVp%2B2OqzHvaVfZReCw9KR1UscZckXyqpkg2OoI6QwGG1LOp37v%2FPClVhFYGLsnVY7EsM3vRO2LhA4cK7%2FYoSWW9o6pNveCW1MAFkvaaCfGpMpaboUAIgFPMpSWM0a3D9aFedtjL50OV%2FQxftUIVbdPEFHgcQy%2FJsUpA3ki3mW50jXip%2BMMXXncQGOqUB7IboDmEeEtrhOH5btVufy3ZBODCYbbI1EFuQVNWb1kY7GA14HZKdg9t%2B8JIhj05CJPRXtXbF1PECRrZDWG2JMljbIfmcvCqPe%2FJe7QdDN7LNLKZgDdfDJp3l78p7Bzh5ckhho8zYfb%2BAHsaSwz5GXILp8wNvKBpOygrFImas6Ktm8dIv6AF2JPxYQC4tIq1V%2BwQSwq4YQ0HprYxS9zb0VDW7wAVa&X-Amz-Signature=ab5ea48666229d586957f78a67a0c7c7fa22fca90e40575856a565d4aa1a1f4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NTOHAP2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIFOxoCS3%2FBQ%2Fs3wrmLf093HOZ2Dv32NNIsbCmIxKfT8rAiEA5WIUmn2MDQygCJsAc%2F2cetdsVuNWT0B16xfpRPlACSgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuACL05xxX%2F8p4%2B2yrcA4bNQpBsIslMN8SodzRBYDlS47Rbvc%2B04q30ig7gd5PvBhk%2FpqLwD3T1dWXEnhFapA4KSWKzW2cTgLnPr1eslNrmhquGt40Ii2TGXQhpSGbAQ9qS52KGfqsQQun%2FsAFByR1DDngUOwP7BUj0TYQJw8U%2BNF4vfU9w6CVD5dJYkWHCcwYOI4zqYPkzA2Q5mMoAXwjaMDjMRQmy1g1snayHDPgfCikr81wcLp%2FGuJF3A7%2BKvskrYkra7lv8gPHr%2FVZa6aeBFwpmi0rhDOcTnaKhmq52HxkHILf115utMCMSPwuvMNBQSae0t%2BeKKBEdrsZl%2FGGRfMqnWWrT8EDvh4qHYfqBWCJWLDoseO3KljT5oeYu77kXoKB7mQ8TrQH%2FfekGBOPjbygCNLS%2FLtfGIFchIwW9ZkdqcGgpurffkTgjvMz8N2FaD%2Fi7QRqwpT3rxcz%2BHUVNILNM8WdLWVp%2B2OqzHvaVfZReCw9KR1UscZckXyqpkg2OoI6QwGG1LOp37v%2FPClVhFYGLsnVY7EsM3vRO2LhA4cK7%2FYoSWW9o6pNveCW1MAFkvaaCfGpMpaboUAIgFPMpSWM0a3D9aFedtjL50OV%2FQxftUIVbdPEFHgcQy%2FJsUpA3ki3mW50jXip%2BMMXXncQGOqUB7IboDmEeEtrhOH5btVufy3ZBODCYbbI1EFuQVNWb1kY7GA14HZKdg9t%2B8JIhj05CJPRXtXbF1PECRrZDWG2JMljbIfmcvCqPe%2FJe7QdDN7LNLKZgDdfDJp3l78p7Bzh5ckhho8zYfb%2BAHsaSwz5GXILp8wNvKBpOygrFImas6Ktm8dIv6AF2JPxYQC4tIq1V%2BwQSwq4YQ0HprYxS9zb0VDW7wAVa&X-Amz-Signature=5ec2868c16574bb83bb0074a6b49b3466c2eda34dd4179b9e9b10d5f93beadff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NTOHAP2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIFOxoCS3%2FBQ%2Fs3wrmLf093HOZ2Dv32NNIsbCmIxKfT8rAiEA5WIUmn2MDQygCJsAc%2F2cetdsVuNWT0B16xfpRPlACSgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuACL05xxX%2F8p4%2B2yrcA4bNQpBsIslMN8SodzRBYDlS47Rbvc%2B04q30ig7gd5PvBhk%2FpqLwD3T1dWXEnhFapA4KSWKzW2cTgLnPr1eslNrmhquGt40Ii2TGXQhpSGbAQ9qS52KGfqsQQun%2FsAFByR1DDngUOwP7BUj0TYQJw8U%2BNF4vfU9w6CVD5dJYkWHCcwYOI4zqYPkzA2Q5mMoAXwjaMDjMRQmy1g1snayHDPgfCikr81wcLp%2FGuJF3A7%2BKvskrYkra7lv8gPHr%2FVZa6aeBFwpmi0rhDOcTnaKhmq52HxkHILf115utMCMSPwuvMNBQSae0t%2BeKKBEdrsZl%2FGGRfMqnWWrT8EDvh4qHYfqBWCJWLDoseO3KljT5oeYu77kXoKB7mQ8TrQH%2FfekGBOPjbygCNLS%2FLtfGIFchIwW9ZkdqcGgpurffkTgjvMz8N2FaD%2Fi7QRqwpT3rxcz%2BHUVNILNM8WdLWVp%2B2OqzHvaVfZReCw9KR1UscZckXyqpkg2OoI6QwGG1LOp37v%2FPClVhFYGLsnVY7EsM3vRO2LhA4cK7%2FYoSWW9o6pNveCW1MAFkvaaCfGpMpaboUAIgFPMpSWM0a3D9aFedtjL50OV%2FQxftUIVbdPEFHgcQy%2FJsUpA3ki3mW50jXip%2BMMXXncQGOqUB7IboDmEeEtrhOH5btVufy3ZBODCYbbI1EFuQVNWb1kY7GA14HZKdg9t%2B8JIhj05CJPRXtXbF1PECRrZDWG2JMljbIfmcvCqPe%2FJe7QdDN7LNLKZgDdfDJp3l78p7Bzh5ckhho8zYfb%2BAHsaSwz5GXILp8wNvKBpOygrFImas6Ktm8dIv6AF2JPxYQC4tIq1V%2BwQSwq4YQ0HprYxS9zb0VDW7wAVa&X-Amz-Signature=0f0106b43ff108ed8e931fba25d03dece3256714d211e43e4d2661fb974dac70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NTOHAP2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIFOxoCS3%2FBQ%2Fs3wrmLf093HOZ2Dv32NNIsbCmIxKfT8rAiEA5WIUmn2MDQygCJsAc%2F2cetdsVuNWT0B16xfpRPlACSgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuACL05xxX%2F8p4%2B2yrcA4bNQpBsIslMN8SodzRBYDlS47Rbvc%2B04q30ig7gd5PvBhk%2FpqLwD3T1dWXEnhFapA4KSWKzW2cTgLnPr1eslNrmhquGt40Ii2TGXQhpSGbAQ9qS52KGfqsQQun%2FsAFByR1DDngUOwP7BUj0TYQJw8U%2BNF4vfU9w6CVD5dJYkWHCcwYOI4zqYPkzA2Q5mMoAXwjaMDjMRQmy1g1snayHDPgfCikr81wcLp%2FGuJF3A7%2BKvskrYkra7lv8gPHr%2FVZa6aeBFwpmi0rhDOcTnaKhmq52HxkHILf115utMCMSPwuvMNBQSae0t%2BeKKBEdrsZl%2FGGRfMqnWWrT8EDvh4qHYfqBWCJWLDoseO3KljT5oeYu77kXoKB7mQ8TrQH%2FfekGBOPjbygCNLS%2FLtfGIFchIwW9ZkdqcGgpurffkTgjvMz8N2FaD%2Fi7QRqwpT3rxcz%2BHUVNILNM8WdLWVp%2B2OqzHvaVfZReCw9KR1UscZckXyqpkg2OoI6QwGG1LOp37v%2FPClVhFYGLsnVY7EsM3vRO2LhA4cK7%2FYoSWW9o6pNveCW1MAFkvaaCfGpMpaboUAIgFPMpSWM0a3D9aFedtjL50OV%2FQxftUIVbdPEFHgcQy%2FJsUpA3ki3mW50jXip%2BMMXXncQGOqUB7IboDmEeEtrhOH5btVufy3ZBODCYbbI1EFuQVNWb1kY7GA14HZKdg9t%2B8JIhj05CJPRXtXbF1PECRrZDWG2JMljbIfmcvCqPe%2FJe7QdDN7LNLKZgDdfDJp3l78p7Bzh5ckhho8zYfb%2BAHsaSwz5GXILp8wNvKBpOygrFImas6Ktm8dIv6AF2JPxYQC4tIq1V%2BwQSwq4YQ0HprYxS9zb0VDW7wAVa&X-Amz-Signature=3da13db0e55d4513417705e3ac47eec4dad6699abe9e9d00c10e7f16b8cc8aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NTOHAP2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIFOxoCS3%2FBQ%2Fs3wrmLf093HOZ2Dv32NNIsbCmIxKfT8rAiEA5WIUmn2MDQygCJsAc%2F2cetdsVuNWT0B16xfpRPlACSgqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMuACL05xxX%2F8p4%2B2yrcA4bNQpBsIslMN8SodzRBYDlS47Rbvc%2B04q30ig7gd5PvBhk%2FpqLwD3T1dWXEnhFapA4KSWKzW2cTgLnPr1eslNrmhquGt40Ii2TGXQhpSGbAQ9qS52KGfqsQQun%2FsAFByR1DDngUOwP7BUj0TYQJw8U%2BNF4vfU9w6CVD5dJYkWHCcwYOI4zqYPkzA2Q5mMoAXwjaMDjMRQmy1g1snayHDPgfCikr81wcLp%2FGuJF3A7%2BKvskrYkra7lv8gPHr%2FVZa6aeBFwpmi0rhDOcTnaKhmq52HxkHILf115utMCMSPwuvMNBQSae0t%2BeKKBEdrsZl%2FGGRfMqnWWrT8EDvh4qHYfqBWCJWLDoseO3KljT5oeYu77kXoKB7mQ8TrQH%2FfekGBOPjbygCNLS%2FLtfGIFchIwW9ZkdqcGgpurffkTgjvMz8N2FaD%2Fi7QRqwpT3rxcz%2BHUVNILNM8WdLWVp%2B2OqzHvaVfZReCw9KR1UscZckXyqpkg2OoI6QwGG1LOp37v%2FPClVhFYGLsnVY7EsM3vRO2LhA4cK7%2FYoSWW9o6pNveCW1MAFkvaaCfGpMpaboUAIgFPMpSWM0a3D9aFedtjL50OV%2FQxftUIVbdPEFHgcQy%2FJsUpA3ki3mW50jXip%2BMMXXncQGOqUB7IboDmEeEtrhOH5btVufy3ZBODCYbbI1EFuQVNWb1kY7GA14HZKdg9t%2B8JIhj05CJPRXtXbF1PECRrZDWG2JMljbIfmcvCqPe%2FJe7QdDN7LNLKZgDdfDJp3l78p7Bzh5ckhho8zYfb%2BAHsaSwz5GXILp8wNvKBpOygrFImas6Ktm8dIv6AF2JPxYQC4tIq1V%2BwQSwq4YQ0HprYxS9zb0VDW7wAVa&X-Amz-Signature=e518ea4e3b0ff8edc0c22009aa67e83263b8381d28483bc9b6f582354c4eaede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
