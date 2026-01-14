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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSMWPSW2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEwvPfFtpCQLgL6bzSHGl7t6hwODvOZyo8A0PZYIRCupAiBVaOwFfczC5dnMb%2BCejKYKBjNyv5jEOuBdRSnt9GLo4Sr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM1guENR5Mc5iIQcKLKtwDaX8EVU36DpUIwXgGINm3Rw2o0BBqy1mP94Kc7x388O5P%2FITNbickDNgA3aAfDo3fGsRWy336ZA3P8XZaizyd4EOa1Tb2n3ZUJq5CDVvkm7zv1IPE%2FMp4sKpXI3UgcfZqkiArezZzhVuRrR3F%2FlvzcJCYKhmQzHaGDPEdkvuG5Im%2Bb09HsR6tpS0niMyS91JASXVDaYxia%2F9UPh%2BT77QOYS7IsP%2F620M4k7u6TZiXt4MzrtZDDVDfKOvXGl466HhtFVbPKoDnCa6My546NbKdYRwkkNuvcis3fLhHOOQHItYwFB0hs7epueRPXDI1Zcz9ExfMeWvMtm5xnuC2r%2FhnwXNh%2BmxlTuGn7uA4Ox6rhl7JjzszIkBJyus1utk4cWT63fAdWHh6Et1cYokuEWGC1Q13OvhRxvKXuSf%2BVz%2BSsNVQDwlnE7MkWhcA6V73dJL1jzDIQgFHtth%2F71achh09mAkdTHkxrCEpwtPhUEZPoULv6iPgC457zFKjC6H98l%2FoC7Bktw%2B5HG4xCb3Gd12iqBQxbneJa%2F8WJzOnkFxRWnp%2FrSqymHTMsO5hFf%2BKJlZ7I27s0HHh1vnnqKkCwCTLUThRH%2BN5oVzmNwqebmD5D0rt2%2FjIFzJJ59MC1GEwt82bywY6pgHicxbanfc1e5ag8QJUiHQpiwTWJAOxW9nH0xcjI%2BefjQ9sdNNmYqLK91O2GkxrPWgUrNpLZJmSXf0ah8U4vqCUefxcW6Pe%2Facv9qsLL1dMUCXfhVimFylDWOGFMkr6UGPzdx3%2Fons0eXJVQH%2FYKln4MlaA4K9uN%2FGVVf8QybtVDWKTK%2F%2Fm4ugWapRzwmMQ3rl%2FtScjrEQkLtFLG0v71pP%2FSSRkbEs%2F&X-Amz-Signature=fd090866a940ecf1ea92b6c05b0a99c6c70af4367d3f8c90a63ec65cf17e9157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSMWPSW2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEwvPfFtpCQLgL6bzSHGl7t6hwODvOZyo8A0PZYIRCupAiBVaOwFfczC5dnMb%2BCejKYKBjNyv5jEOuBdRSnt9GLo4Sr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM1guENR5Mc5iIQcKLKtwDaX8EVU36DpUIwXgGINm3Rw2o0BBqy1mP94Kc7x388O5P%2FITNbickDNgA3aAfDo3fGsRWy336ZA3P8XZaizyd4EOa1Tb2n3ZUJq5CDVvkm7zv1IPE%2FMp4sKpXI3UgcfZqkiArezZzhVuRrR3F%2FlvzcJCYKhmQzHaGDPEdkvuG5Im%2Bb09HsR6tpS0niMyS91JASXVDaYxia%2F9UPh%2BT77QOYS7IsP%2F620M4k7u6TZiXt4MzrtZDDVDfKOvXGl466HhtFVbPKoDnCa6My546NbKdYRwkkNuvcis3fLhHOOQHItYwFB0hs7epueRPXDI1Zcz9ExfMeWvMtm5xnuC2r%2FhnwXNh%2BmxlTuGn7uA4Ox6rhl7JjzszIkBJyus1utk4cWT63fAdWHh6Et1cYokuEWGC1Q13OvhRxvKXuSf%2BVz%2BSsNVQDwlnE7MkWhcA6V73dJL1jzDIQgFHtth%2F71achh09mAkdTHkxrCEpwtPhUEZPoULv6iPgC457zFKjC6H98l%2FoC7Bktw%2B5HG4xCb3Gd12iqBQxbneJa%2F8WJzOnkFxRWnp%2FrSqymHTMsO5hFf%2BKJlZ7I27s0HHh1vnnqKkCwCTLUThRH%2BN5oVzmNwqebmD5D0rt2%2FjIFzJJ59MC1GEwt82bywY6pgHicxbanfc1e5ag8QJUiHQpiwTWJAOxW9nH0xcjI%2BefjQ9sdNNmYqLK91O2GkxrPWgUrNpLZJmSXf0ah8U4vqCUefxcW6Pe%2Facv9qsLL1dMUCXfhVimFylDWOGFMkr6UGPzdx3%2Fons0eXJVQH%2FYKln4MlaA4K9uN%2FGVVf8QybtVDWKTK%2F%2Fm4ugWapRzwmMQ3rl%2FtScjrEQkLtFLG0v71pP%2FSSRkbEs%2F&X-Amz-Signature=174c939e7406cec3361d034b606b54de622fab89bdc6a99c0d43395983921ae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSMWPSW2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEwvPfFtpCQLgL6bzSHGl7t6hwODvOZyo8A0PZYIRCupAiBVaOwFfczC5dnMb%2BCejKYKBjNyv5jEOuBdRSnt9GLo4Sr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM1guENR5Mc5iIQcKLKtwDaX8EVU36DpUIwXgGINm3Rw2o0BBqy1mP94Kc7x388O5P%2FITNbickDNgA3aAfDo3fGsRWy336ZA3P8XZaizyd4EOa1Tb2n3ZUJq5CDVvkm7zv1IPE%2FMp4sKpXI3UgcfZqkiArezZzhVuRrR3F%2FlvzcJCYKhmQzHaGDPEdkvuG5Im%2Bb09HsR6tpS0niMyS91JASXVDaYxia%2F9UPh%2BT77QOYS7IsP%2F620M4k7u6TZiXt4MzrtZDDVDfKOvXGl466HhtFVbPKoDnCa6My546NbKdYRwkkNuvcis3fLhHOOQHItYwFB0hs7epueRPXDI1Zcz9ExfMeWvMtm5xnuC2r%2FhnwXNh%2BmxlTuGn7uA4Ox6rhl7JjzszIkBJyus1utk4cWT63fAdWHh6Et1cYokuEWGC1Q13OvhRxvKXuSf%2BVz%2BSsNVQDwlnE7MkWhcA6V73dJL1jzDIQgFHtth%2F71achh09mAkdTHkxrCEpwtPhUEZPoULv6iPgC457zFKjC6H98l%2FoC7Bktw%2B5HG4xCb3Gd12iqBQxbneJa%2F8WJzOnkFxRWnp%2FrSqymHTMsO5hFf%2BKJlZ7I27s0HHh1vnnqKkCwCTLUThRH%2BN5oVzmNwqebmD5D0rt2%2FjIFzJJ59MC1GEwt82bywY6pgHicxbanfc1e5ag8QJUiHQpiwTWJAOxW9nH0xcjI%2BefjQ9sdNNmYqLK91O2GkxrPWgUrNpLZJmSXf0ah8U4vqCUefxcW6Pe%2Facv9qsLL1dMUCXfhVimFylDWOGFMkr6UGPzdx3%2Fons0eXJVQH%2FYKln4MlaA4K9uN%2FGVVf8QybtVDWKTK%2F%2Fm4ugWapRzwmMQ3rl%2FtScjrEQkLtFLG0v71pP%2FSSRkbEs%2F&X-Amz-Signature=bad354c14290626424dd220d5094f2a9fb7a656d21abbe49a32809db1ec56f24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSMWPSW2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEwvPfFtpCQLgL6bzSHGl7t6hwODvOZyo8A0PZYIRCupAiBVaOwFfczC5dnMb%2BCejKYKBjNyv5jEOuBdRSnt9GLo4Sr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM1guENR5Mc5iIQcKLKtwDaX8EVU36DpUIwXgGINm3Rw2o0BBqy1mP94Kc7x388O5P%2FITNbickDNgA3aAfDo3fGsRWy336ZA3P8XZaizyd4EOa1Tb2n3ZUJq5CDVvkm7zv1IPE%2FMp4sKpXI3UgcfZqkiArezZzhVuRrR3F%2FlvzcJCYKhmQzHaGDPEdkvuG5Im%2Bb09HsR6tpS0niMyS91JASXVDaYxia%2F9UPh%2BT77QOYS7IsP%2F620M4k7u6TZiXt4MzrtZDDVDfKOvXGl466HhtFVbPKoDnCa6My546NbKdYRwkkNuvcis3fLhHOOQHItYwFB0hs7epueRPXDI1Zcz9ExfMeWvMtm5xnuC2r%2FhnwXNh%2BmxlTuGn7uA4Ox6rhl7JjzszIkBJyus1utk4cWT63fAdWHh6Et1cYokuEWGC1Q13OvhRxvKXuSf%2BVz%2BSsNVQDwlnE7MkWhcA6V73dJL1jzDIQgFHtth%2F71achh09mAkdTHkxrCEpwtPhUEZPoULv6iPgC457zFKjC6H98l%2FoC7Bktw%2B5HG4xCb3Gd12iqBQxbneJa%2F8WJzOnkFxRWnp%2FrSqymHTMsO5hFf%2BKJlZ7I27s0HHh1vnnqKkCwCTLUThRH%2BN5oVzmNwqebmD5D0rt2%2FjIFzJJ59MC1GEwt82bywY6pgHicxbanfc1e5ag8QJUiHQpiwTWJAOxW9nH0xcjI%2BefjQ9sdNNmYqLK91O2GkxrPWgUrNpLZJmSXf0ah8U4vqCUefxcW6Pe%2Facv9qsLL1dMUCXfhVimFylDWOGFMkr6UGPzdx3%2Fons0eXJVQH%2FYKln4MlaA4K9uN%2FGVVf8QybtVDWKTK%2F%2Fm4ugWapRzwmMQ3rl%2FtScjrEQkLtFLG0v71pP%2FSSRkbEs%2F&X-Amz-Signature=ba50fd87d819317af0edc39922b0e9b8ecd0755e3386dbf879cd0e602ea039aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSMWPSW2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEwvPfFtpCQLgL6bzSHGl7t6hwODvOZyo8A0PZYIRCupAiBVaOwFfczC5dnMb%2BCejKYKBjNyv5jEOuBdRSnt9GLo4Sr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM1guENR5Mc5iIQcKLKtwDaX8EVU36DpUIwXgGINm3Rw2o0BBqy1mP94Kc7x388O5P%2FITNbickDNgA3aAfDo3fGsRWy336ZA3P8XZaizyd4EOa1Tb2n3ZUJq5CDVvkm7zv1IPE%2FMp4sKpXI3UgcfZqkiArezZzhVuRrR3F%2FlvzcJCYKhmQzHaGDPEdkvuG5Im%2Bb09HsR6tpS0niMyS91JASXVDaYxia%2F9UPh%2BT77QOYS7IsP%2F620M4k7u6TZiXt4MzrtZDDVDfKOvXGl466HhtFVbPKoDnCa6My546NbKdYRwkkNuvcis3fLhHOOQHItYwFB0hs7epueRPXDI1Zcz9ExfMeWvMtm5xnuC2r%2FhnwXNh%2BmxlTuGn7uA4Ox6rhl7JjzszIkBJyus1utk4cWT63fAdWHh6Et1cYokuEWGC1Q13OvhRxvKXuSf%2BVz%2BSsNVQDwlnE7MkWhcA6V73dJL1jzDIQgFHtth%2F71achh09mAkdTHkxrCEpwtPhUEZPoULv6iPgC457zFKjC6H98l%2FoC7Bktw%2B5HG4xCb3Gd12iqBQxbneJa%2F8WJzOnkFxRWnp%2FrSqymHTMsO5hFf%2BKJlZ7I27s0HHh1vnnqKkCwCTLUThRH%2BN5oVzmNwqebmD5D0rt2%2FjIFzJJ59MC1GEwt82bywY6pgHicxbanfc1e5ag8QJUiHQpiwTWJAOxW9nH0xcjI%2BefjQ9sdNNmYqLK91O2GkxrPWgUrNpLZJmSXf0ah8U4vqCUefxcW6Pe%2Facv9qsLL1dMUCXfhVimFylDWOGFMkr6UGPzdx3%2Fons0eXJVQH%2FYKln4MlaA4K9uN%2FGVVf8QybtVDWKTK%2F%2Fm4ugWapRzwmMQ3rl%2FtScjrEQkLtFLG0v71pP%2FSSRkbEs%2F&X-Amz-Signature=a8793bcd45bc6e207063cdd2317a5749a4385d6d427bf220729a12d2f26aa5f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSMWPSW2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEwvPfFtpCQLgL6bzSHGl7t6hwODvOZyo8A0PZYIRCupAiBVaOwFfczC5dnMb%2BCejKYKBjNyv5jEOuBdRSnt9GLo4Sr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM1guENR5Mc5iIQcKLKtwDaX8EVU36DpUIwXgGINm3Rw2o0BBqy1mP94Kc7x388O5P%2FITNbickDNgA3aAfDo3fGsRWy336ZA3P8XZaizyd4EOa1Tb2n3ZUJq5CDVvkm7zv1IPE%2FMp4sKpXI3UgcfZqkiArezZzhVuRrR3F%2FlvzcJCYKhmQzHaGDPEdkvuG5Im%2Bb09HsR6tpS0niMyS91JASXVDaYxia%2F9UPh%2BT77QOYS7IsP%2F620M4k7u6TZiXt4MzrtZDDVDfKOvXGl466HhtFVbPKoDnCa6My546NbKdYRwkkNuvcis3fLhHOOQHItYwFB0hs7epueRPXDI1Zcz9ExfMeWvMtm5xnuC2r%2FhnwXNh%2BmxlTuGn7uA4Ox6rhl7JjzszIkBJyus1utk4cWT63fAdWHh6Et1cYokuEWGC1Q13OvhRxvKXuSf%2BVz%2BSsNVQDwlnE7MkWhcA6V73dJL1jzDIQgFHtth%2F71achh09mAkdTHkxrCEpwtPhUEZPoULv6iPgC457zFKjC6H98l%2FoC7Bktw%2B5HG4xCb3Gd12iqBQxbneJa%2F8WJzOnkFxRWnp%2FrSqymHTMsO5hFf%2BKJlZ7I27s0HHh1vnnqKkCwCTLUThRH%2BN5oVzmNwqebmD5D0rt2%2FjIFzJJ59MC1GEwt82bywY6pgHicxbanfc1e5ag8QJUiHQpiwTWJAOxW9nH0xcjI%2BefjQ9sdNNmYqLK91O2GkxrPWgUrNpLZJmSXf0ah8U4vqCUefxcW6Pe%2Facv9qsLL1dMUCXfhVimFylDWOGFMkr6UGPzdx3%2Fons0eXJVQH%2FYKln4MlaA4K9uN%2FGVVf8QybtVDWKTK%2F%2Fm4ugWapRzwmMQ3rl%2FtScjrEQkLtFLG0v71pP%2FSSRkbEs%2F&X-Amz-Signature=d1509c537b3c547d7c568c3f40532bb30ae75371fef929f7345f9977615567f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSMWPSW2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEwvPfFtpCQLgL6bzSHGl7t6hwODvOZyo8A0PZYIRCupAiBVaOwFfczC5dnMb%2BCejKYKBjNyv5jEOuBdRSnt9GLo4Sr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM1guENR5Mc5iIQcKLKtwDaX8EVU36DpUIwXgGINm3Rw2o0BBqy1mP94Kc7x388O5P%2FITNbickDNgA3aAfDo3fGsRWy336ZA3P8XZaizyd4EOa1Tb2n3ZUJq5CDVvkm7zv1IPE%2FMp4sKpXI3UgcfZqkiArezZzhVuRrR3F%2FlvzcJCYKhmQzHaGDPEdkvuG5Im%2Bb09HsR6tpS0niMyS91JASXVDaYxia%2F9UPh%2BT77QOYS7IsP%2F620M4k7u6TZiXt4MzrtZDDVDfKOvXGl466HhtFVbPKoDnCa6My546NbKdYRwkkNuvcis3fLhHOOQHItYwFB0hs7epueRPXDI1Zcz9ExfMeWvMtm5xnuC2r%2FhnwXNh%2BmxlTuGn7uA4Ox6rhl7JjzszIkBJyus1utk4cWT63fAdWHh6Et1cYokuEWGC1Q13OvhRxvKXuSf%2BVz%2BSsNVQDwlnE7MkWhcA6V73dJL1jzDIQgFHtth%2F71achh09mAkdTHkxrCEpwtPhUEZPoULv6iPgC457zFKjC6H98l%2FoC7Bktw%2B5HG4xCb3Gd12iqBQxbneJa%2F8WJzOnkFxRWnp%2FrSqymHTMsO5hFf%2BKJlZ7I27s0HHh1vnnqKkCwCTLUThRH%2BN5oVzmNwqebmD5D0rt2%2FjIFzJJ59MC1GEwt82bywY6pgHicxbanfc1e5ag8QJUiHQpiwTWJAOxW9nH0xcjI%2BefjQ9sdNNmYqLK91O2GkxrPWgUrNpLZJmSXf0ah8U4vqCUefxcW6Pe%2Facv9qsLL1dMUCXfhVimFylDWOGFMkr6UGPzdx3%2Fons0eXJVQH%2FYKln4MlaA4K9uN%2FGVVf8QybtVDWKTK%2F%2Fm4ugWapRzwmMQ3rl%2FtScjrEQkLtFLG0v71pP%2FSSRkbEs%2F&X-Amz-Signature=025c4aa19ffab2b457a07e7b0ceeedce3e4de4bc6183beabbb3c1eee552edd1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSMWPSW2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEwvPfFtpCQLgL6bzSHGl7t6hwODvOZyo8A0PZYIRCupAiBVaOwFfczC5dnMb%2BCejKYKBjNyv5jEOuBdRSnt9GLo4Sr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM1guENR5Mc5iIQcKLKtwDaX8EVU36DpUIwXgGINm3Rw2o0BBqy1mP94Kc7x388O5P%2FITNbickDNgA3aAfDo3fGsRWy336ZA3P8XZaizyd4EOa1Tb2n3ZUJq5CDVvkm7zv1IPE%2FMp4sKpXI3UgcfZqkiArezZzhVuRrR3F%2FlvzcJCYKhmQzHaGDPEdkvuG5Im%2Bb09HsR6tpS0niMyS91JASXVDaYxia%2F9UPh%2BT77QOYS7IsP%2F620M4k7u6TZiXt4MzrtZDDVDfKOvXGl466HhtFVbPKoDnCa6My546NbKdYRwkkNuvcis3fLhHOOQHItYwFB0hs7epueRPXDI1Zcz9ExfMeWvMtm5xnuC2r%2FhnwXNh%2BmxlTuGn7uA4Ox6rhl7JjzszIkBJyus1utk4cWT63fAdWHh6Et1cYokuEWGC1Q13OvhRxvKXuSf%2BVz%2BSsNVQDwlnE7MkWhcA6V73dJL1jzDIQgFHtth%2F71achh09mAkdTHkxrCEpwtPhUEZPoULv6iPgC457zFKjC6H98l%2FoC7Bktw%2B5HG4xCb3Gd12iqBQxbneJa%2F8WJzOnkFxRWnp%2FrSqymHTMsO5hFf%2BKJlZ7I27s0HHh1vnnqKkCwCTLUThRH%2BN5oVzmNwqebmD5D0rt2%2FjIFzJJ59MC1GEwt82bywY6pgHicxbanfc1e5ag8QJUiHQpiwTWJAOxW9nH0xcjI%2BefjQ9sdNNmYqLK91O2GkxrPWgUrNpLZJmSXf0ah8U4vqCUefxcW6Pe%2Facv9qsLL1dMUCXfhVimFylDWOGFMkr6UGPzdx3%2Fons0eXJVQH%2FYKln4MlaA4K9uN%2FGVVf8QybtVDWKTK%2F%2Fm4ugWapRzwmMQ3rl%2FtScjrEQkLtFLG0v71pP%2FSSRkbEs%2F&X-Amz-Signature=28320672d0215d55eea7ac4a0e95194fd2aa02a6c7f864231e0720b1dadf96a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSMWPSW2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEwvPfFtpCQLgL6bzSHGl7t6hwODvOZyo8A0PZYIRCupAiBVaOwFfczC5dnMb%2BCejKYKBjNyv5jEOuBdRSnt9GLo4Sr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM1guENR5Mc5iIQcKLKtwDaX8EVU36DpUIwXgGINm3Rw2o0BBqy1mP94Kc7x388O5P%2FITNbickDNgA3aAfDo3fGsRWy336ZA3P8XZaizyd4EOa1Tb2n3ZUJq5CDVvkm7zv1IPE%2FMp4sKpXI3UgcfZqkiArezZzhVuRrR3F%2FlvzcJCYKhmQzHaGDPEdkvuG5Im%2Bb09HsR6tpS0niMyS91JASXVDaYxia%2F9UPh%2BT77QOYS7IsP%2F620M4k7u6TZiXt4MzrtZDDVDfKOvXGl466HhtFVbPKoDnCa6My546NbKdYRwkkNuvcis3fLhHOOQHItYwFB0hs7epueRPXDI1Zcz9ExfMeWvMtm5xnuC2r%2FhnwXNh%2BmxlTuGn7uA4Ox6rhl7JjzszIkBJyus1utk4cWT63fAdWHh6Et1cYokuEWGC1Q13OvhRxvKXuSf%2BVz%2BSsNVQDwlnE7MkWhcA6V73dJL1jzDIQgFHtth%2F71achh09mAkdTHkxrCEpwtPhUEZPoULv6iPgC457zFKjC6H98l%2FoC7Bktw%2B5HG4xCb3Gd12iqBQxbneJa%2F8WJzOnkFxRWnp%2FrSqymHTMsO5hFf%2BKJlZ7I27s0HHh1vnnqKkCwCTLUThRH%2BN5oVzmNwqebmD5D0rt2%2FjIFzJJ59MC1GEwt82bywY6pgHicxbanfc1e5ag8QJUiHQpiwTWJAOxW9nH0xcjI%2BefjQ9sdNNmYqLK91O2GkxrPWgUrNpLZJmSXf0ah8U4vqCUefxcW6Pe%2Facv9qsLL1dMUCXfhVimFylDWOGFMkr6UGPzdx3%2Fons0eXJVQH%2FYKln4MlaA4K9uN%2FGVVf8QybtVDWKTK%2F%2Fm4ugWapRzwmMQ3rl%2FtScjrEQkLtFLG0v71pP%2FSSRkbEs%2F&X-Amz-Signature=66936454201bd4351bd520d31a77f6706b38d427221e27fbc385ff35ff1b48d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSMWPSW2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEwvPfFtpCQLgL6bzSHGl7t6hwODvOZyo8A0PZYIRCupAiBVaOwFfczC5dnMb%2BCejKYKBjNyv5jEOuBdRSnt9GLo4Sr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM1guENR5Mc5iIQcKLKtwDaX8EVU36DpUIwXgGINm3Rw2o0BBqy1mP94Kc7x388O5P%2FITNbickDNgA3aAfDo3fGsRWy336ZA3P8XZaizyd4EOa1Tb2n3ZUJq5CDVvkm7zv1IPE%2FMp4sKpXI3UgcfZqkiArezZzhVuRrR3F%2FlvzcJCYKhmQzHaGDPEdkvuG5Im%2Bb09HsR6tpS0niMyS91JASXVDaYxia%2F9UPh%2BT77QOYS7IsP%2F620M4k7u6TZiXt4MzrtZDDVDfKOvXGl466HhtFVbPKoDnCa6My546NbKdYRwkkNuvcis3fLhHOOQHItYwFB0hs7epueRPXDI1Zcz9ExfMeWvMtm5xnuC2r%2FhnwXNh%2BmxlTuGn7uA4Ox6rhl7JjzszIkBJyus1utk4cWT63fAdWHh6Et1cYokuEWGC1Q13OvhRxvKXuSf%2BVz%2BSsNVQDwlnE7MkWhcA6V73dJL1jzDIQgFHtth%2F71achh09mAkdTHkxrCEpwtPhUEZPoULv6iPgC457zFKjC6H98l%2FoC7Bktw%2B5HG4xCb3Gd12iqBQxbneJa%2F8WJzOnkFxRWnp%2FrSqymHTMsO5hFf%2BKJlZ7I27s0HHh1vnnqKkCwCTLUThRH%2BN5oVzmNwqebmD5D0rt2%2FjIFzJJ59MC1GEwt82bywY6pgHicxbanfc1e5ag8QJUiHQpiwTWJAOxW9nH0xcjI%2BefjQ9sdNNmYqLK91O2GkxrPWgUrNpLZJmSXf0ah8U4vqCUefxcW6Pe%2Facv9qsLL1dMUCXfhVimFylDWOGFMkr6UGPzdx3%2Fons0eXJVQH%2FYKln4MlaA4K9uN%2FGVVf8QybtVDWKTK%2F%2Fm4ugWapRzwmMQ3rl%2FtScjrEQkLtFLG0v71pP%2FSSRkbEs%2F&X-Amz-Signature=999356474b2f44e5f13017f72c0fd7e224b51b8b7cd29b9ba24ab2aa3331c8dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WSCJAIT%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDyuGELu95oYl2BiVaWbfWl7EVRzeQyaJvX%2FX6zijdn3wIhAPujB3xKr0kyU1YnvpQBpOF%2FZa9wJ378keAi1fp4TfdIKv8DCBIQABoMNjM3NDIzMTgzODA1IgyWNdghFGcm8s4TLYQq3AOdx2VD%2Bv2kS1CeG50T%2B1p7YDbwXLksMViL4U0t1q3K5NAYMUjoSRL3ADyFdhU2XExixPzjRMEMINrKqOgKU%2BJDLURBdgoJbUr43Ysw4LOGNLfy9rlYNvfoPgWzT7SRrDLvn32gc0Y%2BkxZf4zWt7W5AHD%2Br8vwz0iFwmNxufSwwrqv62%2B1Udot%2BKY6c4fOOmyzeZJctDiejlu0cekDDOGWufUJYYN044AmunNfoYeIjm7qh4TIr5lKjGFfRQEFxCm6I8HVRjpPATR5tHTBpw3NFSxnclnoe%2BlVMZNF9UW27sH6HiZRREHzLhyyigY2xjjlIKTwyOrn8iYYavO%2BX0qH6BtCrFFiNrQ3nPWskP8nQFkkJw3u1CEpZYl8S%2FOSewykCLHfUJJfxSzsdNjMSFXThrCczHI5TLsSmwtyzRZSzecR71kUMj36TURS6H%2FkIcAKzWZAGwecUknarhVuRqNYVc6R124fLOHTi6uUlNo9GY5F5rcDO2uWRsgmj9J7%2BY6kO%2BLGwkolXdui4z5EM5UGjqN3faQoI2e9q40WJAyu%2B0QFYDHJlKQA5%2B4QMk%2FjSUWb%2FIpG3ZuHrUiQnBdB%2BhFYmOpDWKS%2F0dsoa9%2BU98zKSt%2BDBdtTbiBcfU4g8%2BzDWzpvLBjqkAfQ%2Bo44kU0XAD4Vij3li9w%2B1DOtCtPZSeIvGIrXrlGaAU3k%2BhTg0GsKDRmFKUUKqeFsoQ0OMKztqt5cOY7wr7W1%2F3JMziR4PI0tmwvQvC63MGQU4TcouzisGPgIKxuQtDrsc817gEl%2FmC9Ajxvu8ry0PD6Q3oGhviCITjnasczR2Okmk5JHjSmw1dRqLm1BEyVAF77e2nlwfM6fEqVvQD7oFJiin&X-Amz-Signature=f5880d6937c5c6374a40d9c459f49916e2bf100a95d265b31d0cd349eaf9cca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD5SB57V%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHnzWgEeiezquaO%2BG8uOcGOh21nT6Ir9eWhZeH4mXSj6AiEAhkqZVi8hmALdbZ5dV3J3oR0kuJqEkf9ZHndHoTgYmfYq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDFTUQ0OWQ3YsbDXYYircAwFvh%2FRBIe1PGy%2BZTaBWtelmxF4QHUz7wuWZLy%2BSLYow9IIit%2F7mT6sDk2WDWQ%2B%2BTahDxiFXe6oo3gZgCbDcezJ7ihHUr%2BfLFdkzknI%2BsVqtQDPRtPJpGq1BHCTPbSIGaEyfHhVIF1Wl3TYktjHjb3aOqQ1cLqN%2B5exJxIvzxbgMlg7QA5WKLrrFB5NkjpdCM3wu9c8Fq0wmnz7lNxT2cPSTs7fYsRW09pbyTNizWIFRuA7HfFjU8nDigunipBR2N%2F9qAz28yDwcmcikIdR%2F%2BWdtqjgsz9%2FafZCOSw8LNWagIpvygVhj343RPOus5L%2BVUlq%2BipkDYAsEIxV23s4IqI07IM2%2BarJqHTuP9YYuJexdc53nltzNru9j6IRGmu3S5LItmqpOey0bxWIqtighidPJcT9FPi0edztRH5x0aY57RovRadYw7vec%2B2IpN%2FODkKGx1w5FYReCXqLfESp3hBwGQnLS33tjDMfQJV4HdmmwDWjw9CMeHRtbpsRFsDBqAKorg%2F0jODoQjd8WxCRK0K76ZSqeGdEqgLfqxBS%2BoYwBUyH6mlABowbxoUGJgixlP%2FuP7WAB6INgRE1uHP0aIVu77MdiJdJvVkbo5MMYDZvlxfafg2tmabMYxS5%2FMPPNm8sGOqUBUNSYQq7TKCQz%2B6NBTXrgYyD0kTD7CTP1gE%2FqQaHgy11NZ2Do7LqpSp4gniNTMOdsBPrhiH15Jpw6Lh%2FaKjXkoN7R8hYYOlvOD3s0q0%2FbtwlRJvskSGBy1pibbOwrxybaNsxU5I%2BRUro52I6hhO7RfRYT%2BUV8hcM1wKGcVgL6ej0AJ3Bs2Vaf5swzRkTI8emD8ZAv%2FvwC3KLZFhCdxt%2BJu4IjvSAW&X-Amz-Signature=c9271d66e7712baa62fd9baee3771513cef6e3c792fb86128ce2cf55a8bef8bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632T4J6VM%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIANO%2F%2B65IiSG%2BnW%2FHK6KxtXzIJcwg5OzFDIbRn22SyRsAiBcusDaR8Skugpf6DUaF96AHVzIXoqI4c2gi1U2YrgYOCr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMivd16ehCJLRw12WXKtwDnq92GqQYSUGIqp1b7H4NEaP9zXTuWh1E3qmLc13jvrV70FH3ulE3CXNQqFuEM6r4MXTBZV4UD9XShIBvUwlt0JpEGJ8kxa9BljemvZJAnwm4BduuhYk4%2Fxy4lunWcdn49gtorLW5MlBrzEbJniBdh%2FHZAm5CE0gl%2BSg0OFdrieXxvAXnib57GIn3qK4BI8PtMY1LOU%2FRiLALt3BrXeuhom5Rz3pm66sN%2B95nv9N1n8b%2FlV77mzkykvrxn2%2FiNRyX%2B%2Fg7DKLIChicD7bpRaqXJMNKcYXohk0%2B6BPMuhrEdqWwDoyuZSE1rR3RdWzZGS4dgJbxDl3SmaR9pm%2BVxUKmERFCfzkTFlNza6ptcB2D6RLmttosvVyW5VyOgHp5AA8I8jx5gyBFUjmhI7teHccS36OvF%2BN0gximn1505cvp3I7zlJxcEjo54Z9HVOVEe2CTzXE3Dm4EgvZRl8NMsTiX0syFFYQRDhWrs8DM0%2FKcOs%2Bj68GneG53F%2FDy2479AlLMX3R%2Bnc1AH1NVkS8BdDlx32ubQSWIKSSPdR3fXg2%2FV%2FvcNSfPtXZoW0mRdou42R5JFgKOtJGDC2c5D%2BS6sTqqaz4ucxx0GFhQPqAwBnNHs9tlKRXqmevUAfK5MHMw0c%2BbywY6pgHMRbZcFmMQwsHis5XQ4cD%2FNdDots%2FPscfyZCN%2BaKg4PQlWHflPcIqjCiK%2Bl2MuuM9TuRWJexk0InrGOccZG%2FTGFcmX30tKCFod0inDxTyzVfOZf1MQ7uNWrlbezuHW8hraLvk2TbV54ipLnrr9%2FX%2FeKqXf7q398UGBE8EBPtZMa1Qm4vxQfpFu3%2FI9kR2eYPH610Lisd0JNUygEx%2FrTUKxb8gBgOa0&X-Amz-Signature=a9d1135e0dab27aec2bb5f3b9f80472c93f4dbadbd8ac7e2faae319b1b9dd8af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSMWPSW2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEwvPfFtpCQLgL6bzSHGl7t6hwODvOZyo8A0PZYIRCupAiBVaOwFfczC5dnMb%2BCejKYKBjNyv5jEOuBdRSnt9GLo4Sr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM1guENR5Mc5iIQcKLKtwDaX8EVU36DpUIwXgGINm3Rw2o0BBqy1mP94Kc7x388O5P%2FITNbickDNgA3aAfDo3fGsRWy336ZA3P8XZaizyd4EOa1Tb2n3ZUJq5CDVvkm7zv1IPE%2FMp4sKpXI3UgcfZqkiArezZzhVuRrR3F%2FlvzcJCYKhmQzHaGDPEdkvuG5Im%2Bb09HsR6tpS0niMyS91JASXVDaYxia%2F9UPh%2BT77QOYS7IsP%2F620M4k7u6TZiXt4MzrtZDDVDfKOvXGl466HhtFVbPKoDnCa6My546NbKdYRwkkNuvcis3fLhHOOQHItYwFB0hs7epueRPXDI1Zcz9ExfMeWvMtm5xnuC2r%2FhnwXNh%2BmxlTuGn7uA4Ox6rhl7JjzszIkBJyus1utk4cWT63fAdWHh6Et1cYokuEWGC1Q13OvhRxvKXuSf%2BVz%2BSsNVQDwlnE7MkWhcA6V73dJL1jzDIQgFHtth%2F71achh09mAkdTHkxrCEpwtPhUEZPoULv6iPgC457zFKjC6H98l%2FoC7Bktw%2B5HG4xCb3Gd12iqBQxbneJa%2F8WJzOnkFxRWnp%2FrSqymHTMsO5hFf%2BKJlZ7I27s0HHh1vnnqKkCwCTLUThRH%2BN5oVzmNwqebmD5D0rt2%2FjIFzJJ59MC1GEwt82bywY6pgHicxbanfc1e5ag8QJUiHQpiwTWJAOxW9nH0xcjI%2BefjQ9sdNNmYqLK91O2GkxrPWgUrNpLZJmSXf0ah8U4vqCUefxcW6Pe%2Facv9qsLL1dMUCXfhVimFylDWOGFMkr6UGPzdx3%2Fons0eXJVQH%2FYKln4MlaA4K9uN%2FGVVf8QybtVDWKTK%2F%2Fm4ugWapRzwmMQ3rl%2FtScjrEQkLtFLG0v71pP%2FSSRkbEs%2F&X-Amz-Signature=8de42eef6c9898194929ab59aa34269f43b7ffb3e5bade05b1b983dc3b1e3416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZGRHF6B%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDzCdH3jq3RZj9mHZrWI8sp2ovHVMaILOKsdD00%2FJfb%2FAiEA3GXPlcWSzBealrw%2FX1lwunNqmuXkHhMdSmpWzQHgxrcq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOR%2Fh7B8rYCAuke%2FMCrcA6NC4vhtJXG6bSQ563k15h%2B0gaqZXl2g1LED%2BnrMFf8Rwd0tusPDxT1iPQVy3AJpwDTfdBLpw9l4eyWTonBuxr%2BktvBWI%2BK4ctpOX%2Bn%2BIW8HttDz3xXbW6CEoXEFVTMRxuWjnL%2BOQr%2B0Wdpjyh%2Baf8ehj8%2B6OEiGGct4It5SQCBzV0egQW4Ui66G4bdEVADQaFRusGpIPNgitATjUstwbc9PllLJE26Qgb4EsuiOWPzJ1CNpEQ8orGxeJPFpNLaKqFJPS237BYbPlxDqtjtIAtOlXfx87CPq5nYQDW823oxQrNC7MQCTMFe8fwGNw8O%2BgrO4aohGjzxRPLYMeGWmkEWJ9fNR32HArd8OGRLenKGdf3kRX3o9rtu%2BQhzgHEdCxzi6k1m7sxKZufLPhToXA8MLB9tsJdd0Wc7MZ5xUdV3lzp%2BUNOe%2BNWJkRtUKrgXxPe12p5p6OtFcx680Gs8YbU324zkuk9fNImlAywXwFis0RSDkw9ZtOaBoBmSMGCYd2rkl2lFuyYM4DT0EWl%2Fd3WCUUcBd2avPHPIuHW9T0GORzI3G9MVfhK9RFz9xT%2B6pEjKzNc2ZqFjNQxRt4bYWL6ftUe%2FQV48NeKKpmsnMFCUG8V0U7z5kmvW%2FDTAEMOvOm8sGOqUBHsHC2SiezuBZYXrofCAZZsxZXqlZxvE6XrtEq6aMXaomp%2BdZ7QCs0IvJ9kOzOKCndktJimslFkyJXDAzVy8y3IcWcp9ZfIVFBhbmvmUUsNnz6dnBb2hly5Tj5D%2B3bSBMJrKL0sMJcngMLEBjEqBewCYkQ%2B5WtX%2FM8P2p%2BajXYOaXY8eFEgU2czs%2BnUtd2HfaRsaywFbvSUcib1YUCsN4GVmC90J6&X-Amz-Signature=bdf6988ca8712a38f3b244a64f221c72632f6b626eb54b0891c11f9552591fdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSMWPSW2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEwvPfFtpCQLgL6bzSHGl7t6hwODvOZyo8A0PZYIRCupAiBVaOwFfczC5dnMb%2BCejKYKBjNyv5jEOuBdRSnt9GLo4Sr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM1guENR5Mc5iIQcKLKtwDaX8EVU36DpUIwXgGINm3Rw2o0BBqy1mP94Kc7x388O5P%2FITNbickDNgA3aAfDo3fGsRWy336ZA3P8XZaizyd4EOa1Tb2n3ZUJq5CDVvkm7zv1IPE%2FMp4sKpXI3UgcfZqkiArezZzhVuRrR3F%2FlvzcJCYKhmQzHaGDPEdkvuG5Im%2Bb09HsR6tpS0niMyS91JASXVDaYxia%2F9UPh%2BT77QOYS7IsP%2F620M4k7u6TZiXt4MzrtZDDVDfKOvXGl466HhtFVbPKoDnCa6My546NbKdYRwkkNuvcis3fLhHOOQHItYwFB0hs7epueRPXDI1Zcz9ExfMeWvMtm5xnuC2r%2FhnwXNh%2BmxlTuGn7uA4Ox6rhl7JjzszIkBJyus1utk4cWT63fAdWHh6Et1cYokuEWGC1Q13OvhRxvKXuSf%2BVz%2BSsNVQDwlnE7MkWhcA6V73dJL1jzDIQgFHtth%2F71achh09mAkdTHkxrCEpwtPhUEZPoULv6iPgC457zFKjC6H98l%2FoC7Bktw%2B5HG4xCb3Gd12iqBQxbneJa%2F8WJzOnkFxRWnp%2FrSqymHTMsO5hFf%2BKJlZ7I27s0HHh1vnnqKkCwCTLUThRH%2BN5oVzmNwqebmD5D0rt2%2FjIFzJJ59MC1GEwt82bywY6pgHicxbanfc1e5ag8QJUiHQpiwTWJAOxW9nH0xcjI%2BefjQ9sdNNmYqLK91O2GkxrPWgUrNpLZJmSXf0ah8U4vqCUefxcW6Pe%2Facv9qsLL1dMUCXfhVimFylDWOGFMkr6UGPzdx3%2Fons0eXJVQH%2FYKln4MlaA4K9uN%2FGVVf8QybtVDWKTK%2F%2Fm4ugWapRzwmMQ3rl%2FtScjrEQkLtFLG0v71pP%2FSSRkbEs%2F&X-Amz-Signature=0922ad719d3cf0ae2d6456baebd35dd36726ae19e12327fbb1e9b9aaec8a32e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHWFAHOD%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDFfUZX7crM6NJa4RtyRSuMlKDYwMvnISULQsSU0szB4gIhAMTyn2CKBSRFlJFbnoFa3SL%2B6QcuG%2F1FLycR1BoaRhLJKv8DCBIQABoMNjM3NDIzMTgzODA1IgxJjI2tJXBNeamIDQYq3AO2uf0%2B4U2P8qPUxAISMLMTSmTBD0nw9jL1k3vgtHk79GO4w2jdQHyS0x8cTwO8kukpbJ%2Fv%2BoTpHbBGjC8jXF0uMHFo3cW9C2RFzOKQ4A%2BYZgAQxGy19J1507zVUYZGmB57FIB6Te4bVJUEFvf7n5I6WEHBytz12a5fsqhBBU9fm8jx5G5TY3HRlzmmW%2Ba9DBq%2B8uM1lHHwGeECQNFer%2BA3hJDXmoalgDee%2FeFtk0VnSSV1kLSgH065UUstHJNN5AyGQZmnpWThRkJFcRRwEz4UlaMRvLMemQxyUS4dwZAcABJnqen4h8RLQEdiYKGW6Gy7PY8YDFmbeqOAxSshV7gLPDY3Le0X6c177EuAXtI2Gn20wcWh%2BuLP47Y3BLMsR7AJ%2FZA4e%2FBLjA4UgdDPt%2BautueCs8565eXOlol3t7%2BN36bssTdaiep7mvNjYbVh0tUPNy%2F9N4aOGZEu1ECSxYTnJnyhnKYMuVQ2Gc1nC710m1dn0IDbQZuBmnPudDAXI2bwc2CG0CrPjBqg2oGQxn3%2BapLLGmvQ%2BsLXWVKnmJZyFyMpNpbdj0O8cdqdGu%2Bun00fxsvx2W22bxUBg4mNmIbjGr4XzubW6M11RBQLdC8VeioxrW%2BTbglaUWr4uTC8zpvLBjqkAckSlCOiVPoARGedQ3fW9oi137j65%2B2tbh0j5F7al9NjwfM9HUwVOuqz5ewZpSAZxEeaQfnMGKZ61HD8U3AMjKlUsIHTJZErWE%2Fvl7Mc52TgiBfLDCLBq8XqsnE7fdnTeh3qMdS1I4CCEwDlhqtDEv1w0KZToEvP0%2F0NWkX9tQjzB%2F8NvpaXqp%2BncrIvegVpcEONeMd7JoYUP6OMJsNIQKj2RA%2Bu&X-Amz-Signature=bba38672968dddce8131d9663b33be87c71f037b14fa8e1c09773585fa4035eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSMWPSW2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEwvPfFtpCQLgL6bzSHGl7t6hwODvOZyo8A0PZYIRCupAiBVaOwFfczC5dnMb%2BCejKYKBjNyv5jEOuBdRSnt9GLo4Sr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM1guENR5Mc5iIQcKLKtwDaX8EVU36DpUIwXgGINm3Rw2o0BBqy1mP94Kc7x388O5P%2FITNbickDNgA3aAfDo3fGsRWy336ZA3P8XZaizyd4EOa1Tb2n3ZUJq5CDVvkm7zv1IPE%2FMp4sKpXI3UgcfZqkiArezZzhVuRrR3F%2FlvzcJCYKhmQzHaGDPEdkvuG5Im%2Bb09HsR6tpS0niMyS91JASXVDaYxia%2F9UPh%2BT77QOYS7IsP%2F620M4k7u6TZiXt4MzrtZDDVDfKOvXGl466HhtFVbPKoDnCa6My546NbKdYRwkkNuvcis3fLhHOOQHItYwFB0hs7epueRPXDI1Zcz9ExfMeWvMtm5xnuC2r%2FhnwXNh%2BmxlTuGn7uA4Ox6rhl7JjzszIkBJyus1utk4cWT63fAdWHh6Et1cYokuEWGC1Q13OvhRxvKXuSf%2BVz%2BSsNVQDwlnE7MkWhcA6V73dJL1jzDIQgFHtth%2F71achh09mAkdTHkxrCEpwtPhUEZPoULv6iPgC457zFKjC6H98l%2FoC7Bktw%2B5HG4xCb3Gd12iqBQxbneJa%2F8WJzOnkFxRWnp%2FrSqymHTMsO5hFf%2BKJlZ7I27s0HHh1vnnqKkCwCTLUThRH%2BN5oVzmNwqebmD5D0rt2%2FjIFzJJ59MC1GEwt82bywY6pgHicxbanfc1e5ag8QJUiHQpiwTWJAOxW9nH0xcjI%2BefjQ9sdNNmYqLK91O2GkxrPWgUrNpLZJmSXf0ah8U4vqCUefxcW6Pe%2Facv9qsLL1dMUCXfhVimFylDWOGFMkr6UGPzdx3%2Fons0eXJVQH%2FYKln4MlaA4K9uN%2FGVVf8QybtVDWKTK%2F%2Fm4ugWapRzwmMQ3rl%2FtScjrEQkLtFLG0v71pP%2FSSRkbEs%2F&X-Amz-Signature=f9f5bbadbeb772977f4afdea656461273ffba9a7b8eafb542f6755d58028c911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIKAUNBO%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDnchOIBVcg7P1%2Fcvoo95qoYBH%2BTm0Qjq8HViKaIGHFtAiA3i02TiH2DACX4lER5iH2jMo5FgCqBpEoez1L6NRx9mSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMm17fkY%2FRkwskz4g9KtwDsLhOqPTY8fE2vONSihAae%2Fa8eGa5OD04vT%2FXkSPaTA860dpPBoYLHQedyQxpTjy99Dwhpx7S1iqAR1p3gbGPMkzE3c0GDHmUkUPqi9JzxpcMI1w0ZQ1bvT8lfgzHJDLpv%2BQ0o3nbTyZyr63DSriBbYj%2BBvyRMcBfFj21Me9lrVn4XkYymFd6Ds9CjlutukgPwzhC25rc6yq5k6sO%2Fb6rvlH3kuxcS01zBFPpOJTr9gEBZeyLwFB8urHk1VMzAmc%2F6T3SYzwPmqKUAXM0vCX7FR0bAEr0i1DSUO%2FsInxT6hKBZItpFbv4dkPzQMLKsYQaUVdoLlmqLKj62bPTX2oZ0aCkFViw2XclxoMIVwHTBJ9ChCdJaYgJU7ZGLWYbyxfgN3%2FYSnRRfSdlhsM%2FWLlEmiF7T3owgj37pQwKU2iPS0ri0kszJtgwBmGLF1g2R6pv0KwQ7Y1PrCdA2TcYp%2FIZGmLTKrlzkcUH5EcPNMzmyrHGmgocLwsEWnkMpXbJ%2BNTRvTVjfX0yLu95rNIamOCR3V%2BSf7o31sGThj9ovFaYtF5CnK%2BzaNIgvPHpmkCbpaXM%2BqdvrcUzGdkd51y%2FCmK9aM7k6crzhadj%2B%2Bf8oOMk0gDn9qZPM49E8nyltQ8whs6bywY6pgFP49WWbmiu8jzRkEIqO7NwKALi2KSRn%2FhWDa0EFQiwjWFrpTed2pL23JEWxw6YZE6yNpfoDgJwmAyAFO2UgLgeY9VcgvQg8c2kYPfIjxVw5vGp3iqvBtVLO6Jv%2Fpa1zClPLXwL4g8fkc0m8%2B%2FQgSXWt2bc0WXoxFoSl5x8vlYqPbTx%2BXODWbMPEgY432zStYt1NwJLxai2sCgVQ0Catw3sk456FXFx&X-Amz-Signature=d9d565807536ea925e70e7a376c7c55b34431cc008586334195a194aa55fd498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSMWPSW2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEwvPfFtpCQLgL6bzSHGl7t6hwODvOZyo8A0PZYIRCupAiBVaOwFfczC5dnMb%2BCejKYKBjNyv5jEOuBdRSnt9GLo4Sr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM1guENR5Mc5iIQcKLKtwDaX8EVU36DpUIwXgGINm3Rw2o0BBqy1mP94Kc7x388O5P%2FITNbickDNgA3aAfDo3fGsRWy336ZA3P8XZaizyd4EOa1Tb2n3ZUJq5CDVvkm7zv1IPE%2FMp4sKpXI3UgcfZqkiArezZzhVuRrR3F%2FlvzcJCYKhmQzHaGDPEdkvuG5Im%2Bb09HsR6tpS0niMyS91JASXVDaYxia%2F9UPh%2BT77QOYS7IsP%2F620M4k7u6TZiXt4MzrtZDDVDfKOvXGl466HhtFVbPKoDnCa6My546NbKdYRwkkNuvcis3fLhHOOQHItYwFB0hs7epueRPXDI1Zcz9ExfMeWvMtm5xnuC2r%2FhnwXNh%2BmxlTuGn7uA4Ox6rhl7JjzszIkBJyus1utk4cWT63fAdWHh6Et1cYokuEWGC1Q13OvhRxvKXuSf%2BVz%2BSsNVQDwlnE7MkWhcA6V73dJL1jzDIQgFHtth%2F71achh09mAkdTHkxrCEpwtPhUEZPoULv6iPgC457zFKjC6H98l%2FoC7Bktw%2B5HG4xCb3Gd12iqBQxbneJa%2F8WJzOnkFxRWnp%2FrSqymHTMsO5hFf%2BKJlZ7I27s0HHh1vnnqKkCwCTLUThRH%2BN5oVzmNwqebmD5D0rt2%2FjIFzJJ59MC1GEwt82bywY6pgHicxbanfc1e5ag8QJUiHQpiwTWJAOxW9nH0xcjI%2BefjQ9sdNNmYqLK91O2GkxrPWgUrNpLZJmSXf0ah8U4vqCUefxcW6Pe%2Facv9qsLL1dMUCXfhVimFylDWOGFMkr6UGPzdx3%2Fons0eXJVQH%2FYKln4MlaA4K9uN%2FGVVf8QybtVDWKTK%2F%2Fm4ugWapRzwmMQ3rl%2FtScjrEQkLtFLG0v71pP%2FSSRkbEs%2F&X-Amz-Signature=596474b1dbecfe930a3299be10aabc1805736989b013c2276ef7488f97825129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZHCYQWK%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCAsZOTG59XdmREQL%2B21SoJ4FL7KQDmHqmPQfvSH9gNmAIhAKHTlShwnjUQbaUm00n1YwKdraiaNSCsQVDVHddN83ZAKv8DCBIQABoMNjM3NDIzMTgzODA1Igwth6UHEq%2FiqqV9uGAq3ANNUxRqtItQwB44Zsx1DynU3up1PwCLsmRasF0kPt70ucCklREX24tWKYITNliKDtz1LJr2jpENGwM9B1c39wzcdjAg8MSpBwXDUam4ItZdzTl%2FU4ApCugpCAtHHFPHLTKTR9Z3j8Phf0ZekDXjgVGcSfS0z7yZOhU%2BKen4JLO7KmX%2Fy39TCZhztgR2Q%2B8fczT31oaCxp%2F0l2BY5W0Z4Xh%2FhDZZXYOw9XlGFJZQUToNGRHQYznmoAyqNPwlWXuVhij3huEHSHo3KOGPmL86ZqW5SVe2otBt7imTrpm9keOct8STwm4y8JuLKBBuqg1ic%2Fn%2FuA227MDnBEFu0bS5sheS2A2sRf4x2pMrRo4J0fv1wfcA2UdZ4%2FxXcTMKiOJh0s7prlDfJRLURPg7zbf%2FIwfZOfCSWfTojkJxkVuj2P1CXWv60C2beMCkEgJ6dLOWy4ftJpAQ2kmqDsYH4LJrRym8hXSGn8HHx66bfmRu0WDYhtFjDzHbRbmNpxQiraiAM9jnFumHLgyowks%2BWyrA%2BUvxqqNm3d%2BXluvYuhbF8iMGHWAt4JU4M1SLGdFnudnsTSBxjKup95vMf2ywN5n6IsG7Srp%2FlLZGPWAX5dQUQrlr6DBHEgc4rY6jfmwa6TDUz5vLBjqkASTwlR8OE2R%2FLEqyC9LBWDmhX19IZi3ylSw9StCpMYToe6EKKemhio7Tx3%2F3bdQ%2BXwBLRnS%2F7BaXYX%2FaJiFmdHHjLhwK8O4DRiQzNc9FKBxU1CZrNOE3ScIPGSMwKyX2TmsJEqznKsEzuWBI4v2UKTuvSITiGW%2B9BQgsuQ%2BiOX9xTac1zjoeM%2FjQ1wbFxvNBAdhOXha3%2F15VPGr79oFB81qr9pvG&X-Amz-Signature=840c23a34d9120bd0f0ad835bbdae3886a119f796a2cd16ddef4eb94bfb13b23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSMWPSW2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEwvPfFtpCQLgL6bzSHGl7t6hwODvOZyo8A0PZYIRCupAiBVaOwFfczC5dnMb%2BCejKYKBjNyv5jEOuBdRSnt9GLo4Sr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM1guENR5Mc5iIQcKLKtwDaX8EVU36DpUIwXgGINm3Rw2o0BBqy1mP94Kc7x388O5P%2FITNbickDNgA3aAfDo3fGsRWy336ZA3P8XZaizyd4EOa1Tb2n3ZUJq5CDVvkm7zv1IPE%2FMp4sKpXI3UgcfZqkiArezZzhVuRrR3F%2FlvzcJCYKhmQzHaGDPEdkvuG5Im%2Bb09HsR6tpS0niMyS91JASXVDaYxia%2F9UPh%2BT77QOYS7IsP%2F620M4k7u6TZiXt4MzrtZDDVDfKOvXGl466HhtFVbPKoDnCa6My546NbKdYRwkkNuvcis3fLhHOOQHItYwFB0hs7epueRPXDI1Zcz9ExfMeWvMtm5xnuC2r%2FhnwXNh%2BmxlTuGn7uA4Ox6rhl7JjzszIkBJyus1utk4cWT63fAdWHh6Et1cYokuEWGC1Q13OvhRxvKXuSf%2BVz%2BSsNVQDwlnE7MkWhcA6V73dJL1jzDIQgFHtth%2F71achh09mAkdTHkxrCEpwtPhUEZPoULv6iPgC457zFKjC6H98l%2FoC7Bktw%2B5HG4xCb3Gd12iqBQxbneJa%2F8WJzOnkFxRWnp%2FrSqymHTMsO5hFf%2BKJlZ7I27s0HHh1vnnqKkCwCTLUThRH%2BN5oVzmNwqebmD5D0rt2%2FjIFzJJ59MC1GEwt82bywY6pgHicxbanfc1e5ag8QJUiHQpiwTWJAOxW9nH0xcjI%2BefjQ9sdNNmYqLK91O2GkxrPWgUrNpLZJmSXf0ah8U4vqCUefxcW6Pe%2Facv9qsLL1dMUCXfhVimFylDWOGFMkr6UGPzdx3%2Fons0eXJVQH%2FYKln4MlaA4K9uN%2FGVVf8QybtVDWKTK%2F%2Fm4ugWapRzwmMQ3rl%2FtScjrEQkLtFLG0v71pP%2FSSRkbEs%2F&X-Amz-Signature=0be3a410f52fe351edc67ba1efa2206e325316b5c3983190a8d4f99082814e31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XHK5TKQ%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCgHtcwiMeje8keSb4DtMtgbUGqSLWM5XxsCsxwT4jJ6QIhAJpEwaLNEQy9s1V3a2yn5u2bybyGXTYIylRUfVg2AtT4Kv8DCBIQABoMNjM3NDIzMTgzODA1IgwxKILJfOSioqQrz8Mq3APY3sb5ooiz8Eq3KIC8hdd%2FwHoXel37e0a3igMO5QljnXuIW68BYJaH1rfEO7GQVFhywXQd2GSZMoRFKI4lxvJPpGv2daaltrZnQ1m2D4gQfDURRmLLLTkKSfJWyBQ5qG%2BCskezDPqeqgrsQpTAGZH4gFh%2Ffe%2Fb4eBR%2F9Jz6eMwPaJko%2FNeBlnZ%2BY%2Bg6j9ysDyrWMLnslMrUZCguAciln5SX8Sh4JNVitfE1jAm%2Ffhk%2Bdt4w9BBU5bZ2DCxhJAw6nNM6TcFyJlbhB9yAa6wGHK%2FQrr%2BpHzsXb6IHx6gsJsLWzbgBnBHNec8CdfdLakNJY7TwHh0yy7T%2BblMhl7MUBARZ27TOjsLdGMrnpvrQ8kVhdA%2BUNyh%2FHIpOmKCGXUikCZg3W4otea0O%2B0uEjs%2BslFCSrkFGRfyi7EnujzoAzODV2ezw%2FM5IZwz3OcYyCDfsMVxMv6gu5vTInnuemIspaIpHquAdJZE6TsALXWQpjRTpGg8Mz1L19C%2F%2B%2Br9xTlO8B4XHQkPO2IrIY8iodgRMesplYJLIRdw49xzP7rrsM7KPhIz9zihKeRR5hJ6sickKWCutTPbjOtrBzNracYuTgErwlkes2BVxiXrNf3j94BIogg%2BYbntcPMAyLfupDDMzpvLBjqkAV2XgwcyBW1XMYCTF%2B4%2BnWS8VgHnbIcksslusEnCL2B%2BIW9OQ9sn30gDGlPHPYGq9DNaywc73YhHQJdBEs7AxvjT3o7dKhXFI6Higbwd6zuDgwyOqvNugm%2FxRFE%2BuLE34V0oZqC19whoebeuPopziT5btN60a%2FY8QAalR%2FsoKW6NezTFuN1UJzbT0ThcVhG%2BPz82HXBE%2Bu85wBJvwAKlwyuXhWd5&X-Amz-Signature=9043073be94b0d93bb97500d027be0566f5ce31f606e3eae350070a6eded0f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIJBG2VF%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIGXLTyO8%2BSWIbmxHtt8TUhwlkZ9EJfTNNQy28aWRKLukAiEA4LU2y%2BPNmPfB%2FUqTmB%2F4AL9joDgqP%2BxTHiX6BpHVFU4q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMSk62SexzI1gWsRMSrcA7T712Db0rN0LIJKSA%2FVYNINdm29PFcW6WbabB7sYKHv7Dg26zHJU5zPfsNNdmNV51oCIp6yovOSYZrT1MOVb%2BsR7IUnkygmzd6mQaRN9vTkX4Jy6lBW9j2WlGkCw9YrG%2Ff3uMN6RphfBS1zeEtr2jKBUDz3Xs7wT0rsKaVhYE2Z%2BMH1reUBdPy6ur%2BVulXaUGdf76Qnmh6VZpLNPefZaX0R4t049FcSXKcZwYkzWob9JUQTO7b9xkoZq2TypeT0rn2mH0AiQX86kGRv22AhidNpZvc45x9p7RQWlomUpkcLzkXUmkxRfYCO%2F%2BRg92lndnOJDEX4Cz%2FcPSobr9DJQehquJjWXUzF4MwG9aKqbcfFUds5aHC7MZwEbUXUtE3SGmHSgqFPb8XeG%2F8EanX2dwcDWnx0xxjwVSQuS55PjdC2ezdJyU6GvEWL7GvsjpLk3lOff8HS8nLNw%2FH7n8ozmFXUgsBGP7wOEkVX1scaz5Rj%2BfJJ71ub6siPy7KAlVymzwAg7IYr1tfeW%2B3EzztyRC6SnHZeDdWoEWdln%2BMk0y9r904MeLqYRaTV%2BKz8NFvYX15xLXbMLbwgIaUbBnc5c%2BmbQf%2B%2F2j51U9J9c9a9qdVD2tyA7p0xaLHkKKlnMLvNm8sGOqUBYyCRufLUOcGn8Q04fFhFoiCg1X5piNNPNtZ8cTH5l%2BSCkG5Ax%2Bkl2y6ViigqUNZk8VPgOJH4FPKmoubvxvqsDJf9xf2NBzD0rCxvw23EW8FbXhxo97PnsTaGAuy%2BAbKWaPlwslpDyio9%2FDVygDA587N9wNmSBtFcVzKoNvUkfPRioEqY%2BCpC%2BEbQWgXkueghMoaNBZrhDWOM%2FDZwx0dVlrZdoBGr&X-Amz-Signature=3c2bd594290c12bd11d36cdfd922008d659a8578f92303021eb61c26fd9a53eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WOBOPYX%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCSSrM5GzMGw91BnbuQQkZnBpYrjm1kR5qm7hDdrB0cswIgE1sCF9%2FvPBpLAQdvkOZFp7%2BQ64rpiT2qbU0wANGWqiYq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDAoktSvzWxUQD1wIvyrcA8DfaJ%2FPSoB7IPJJfsEueQfsp%2FRjTAsBf%2BbR6yoweX8zMZI%2FVZdl0RKjYmUZ8qSrepybGkiQw5qXvThb9YQ1x3o%2BLB4GNTY2UPiL0XFqKXRtTLp2I0JGuEG1VyFPa37rADAX4y0AODqDqU4MXBc5D1HlMMRwu1HujJQx%2B%2Bc4OEkor3D2ssqQriQUzj2bwwokfDcvbwccT1Yw4PPuaq3Gdav6eRsP15RAJEGNGZ1cqX1scYrfvc16H%2BBB8a1xM7jG5Op4VicLqjBjIseE1jHYl2Jl3obGluS2DmzBj5RPb6LL3rqwrAXGNAaqPFav28mUWftokmKV45AvBVUAvw7LEg5cZdeStkQrHPM%2FENFpS8fi5KiCWx9KbnjmuUYr9O%2BXqxdpYiNhTU%2B6JkYCIiLPS1fQslixNBI4Ed8fXb0QhuREU2HDD9ecbUrCa%2BHZWfOjfQXgqeTxh1swQINKN5X9EJVKnG3ycAwvqTjisA%2Bnax5sko6IaHvil6q%2Bt9kCLKQklBuSF8x9dVB92ERu%2FFrw%2B4%2BTRVDn1JEW9E3hudZHW24E4ZtoAkunoc1%2BgS4BnT6cTfpypetD2D8N6wNB668U5w99uKcXbLbnKJ5F2KgtlLOngVjV2cZdAoRm39BlMPrNm8sGOqUBhdASlZejcyeBpFOU8%2BZMtGPb%2BZzJznSXXccdMdUGzJh0qwog9H2TSCHlS5tQ%2FfTmYpYtPXdnn9607j8L9lygrucBfL7GtaVJ8SHws1TaphfnSoFgHTBPL4otagHK8A6QyzSzydG7%2BH2rwXJeGkfhSqlCghQsa1Ag0EGy5yKb3yhpSBgWhH2HAG7RXe2i0xsReFA67S2JCcP7r3jXcaJrGekB%2Fd1G&X-Amz-Signature=452f65d8b89b52dd2ba335d9c1dcfded51d6681d5002195cce462303df1d9a18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSMWPSW2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEwvPfFtpCQLgL6bzSHGl7t6hwODvOZyo8A0PZYIRCupAiBVaOwFfczC5dnMb%2BCejKYKBjNyv5jEOuBdRSnt9GLo4Sr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM1guENR5Mc5iIQcKLKtwDaX8EVU36DpUIwXgGINm3Rw2o0BBqy1mP94Kc7x388O5P%2FITNbickDNgA3aAfDo3fGsRWy336ZA3P8XZaizyd4EOa1Tb2n3ZUJq5CDVvkm7zv1IPE%2FMp4sKpXI3UgcfZqkiArezZzhVuRrR3F%2FlvzcJCYKhmQzHaGDPEdkvuG5Im%2Bb09HsR6tpS0niMyS91JASXVDaYxia%2F9UPh%2BT77QOYS7IsP%2F620M4k7u6TZiXt4MzrtZDDVDfKOvXGl466HhtFVbPKoDnCa6My546NbKdYRwkkNuvcis3fLhHOOQHItYwFB0hs7epueRPXDI1Zcz9ExfMeWvMtm5xnuC2r%2FhnwXNh%2BmxlTuGn7uA4Ox6rhl7JjzszIkBJyus1utk4cWT63fAdWHh6Et1cYokuEWGC1Q13OvhRxvKXuSf%2BVz%2BSsNVQDwlnE7MkWhcA6V73dJL1jzDIQgFHtth%2F71achh09mAkdTHkxrCEpwtPhUEZPoULv6iPgC457zFKjC6H98l%2FoC7Bktw%2B5HG4xCb3Gd12iqBQxbneJa%2F8WJzOnkFxRWnp%2FrSqymHTMsO5hFf%2BKJlZ7I27s0HHh1vnnqKkCwCTLUThRH%2BN5oVzmNwqebmD5D0rt2%2FjIFzJJ59MC1GEwt82bywY6pgHicxbanfc1e5ag8QJUiHQpiwTWJAOxW9nH0xcjI%2BefjQ9sdNNmYqLK91O2GkxrPWgUrNpLZJmSXf0ah8U4vqCUefxcW6Pe%2Facv9qsLL1dMUCXfhVimFylDWOGFMkr6UGPzdx3%2Fons0eXJVQH%2FYKln4MlaA4K9uN%2FGVVf8QybtVDWKTK%2F%2Fm4ugWapRzwmMQ3rl%2FtScjrEQkLtFLG0v71pP%2FSSRkbEs%2F&X-Amz-Signature=340085f5e62df8c40e06f125bf0896fd4697b098d25cbd061a290b9b503c746b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSMWPSW2%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEwvPfFtpCQLgL6bzSHGl7t6hwODvOZyo8A0PZYIRCupAiBVaOwFfczC5dnMb%2BCejKYKBjNyv5jEOuBdRSnt9GLo4Sr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM1guENR5Mc5iIQcKLKtwDaX8EVU36DpUIwXgGINm3Rw2o0BBqy1mP94Kc7x388O5P%2FITNbickDNgA3aAfDo3fGsRWy336ZA3P8XZaizyd4EOa1Tb2n3ZUJq5CDVvkm7zv1IPE%2FMp4sKpXI3UgcfZqkiArezZzhVuRrR3F%2FlvzcJCYKhmQzHaGDPEdkvuG5Im%2Bb09HsR6tpS0niMyS91JASXVDaYxia%2F9UPh%2BT77QOYS7IsP%2F620M4k7u6TZiXt4MzrtZDDVDfKOvXGl466HhtFVbPKoDnCa6My546NbKdYRwkkNuvcis3fLhHOOQHItYwFB0hs7epueRPXDI1Zcz9ExfMeWvMtm5xnuC2r%2FhnwXNh%2BmxlTuGn7uA4Ox6rhl7JjzszIkBJyus1utk4cWT63fAdWHh6Et1cYokuEWGC1Q13OvhRxvKXuSf%2BVz%2BSsNVQDwlnE7MkWhcA6V73dJL1jzDIQgFHtth%2F71achh09mAkdTHkxrCEpwtPhUEZPoULv6iPgC457zFKjC6H98l%2FoC7Bktw%2B5HG4xCb3Gd12iqBQxbneJa%2F8WJzOnkFxRWnp%2FrSqymHTMsO5hFf%2BKJlZ7I27s0HHh1vnnqKkCwCTLUThRH%2BN5oVzmNwqebmD5D0rt2%2FjIFzJJ59MC1GEwt82bywY6pgHicxbanfc1e5ag8QJUiHQpiwTWJAOxW9nH0xcjI%2BefjQ9sdNNmYqLK91O2GkxrPWgUrNpLZJmSXf0ah8U4vqCUefxcW6Pe%2Facv9qsLL1dMUCXfhVimFylDWOGFMkr6UGPzdx3%2Fons0eXJVQH%2FYKln4MlaA4K9uN%2FGVVf8QybtVDWKTK%2F%2Fm4ugWapRzwmMQ3rl%2FtScjrEQkLtFLG0v71pP%2FSSRkbEs%2F&X-Amz-Signature=5ce2ffcfe06ebb86f2a3623da11fccad1f1558a4493debeae5f5d2d57657a608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXURCBVE%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDmsEIU3NdYg3lcYhSlJBKJf5f40irWoOWcy3zgr0GxEAIgLspxTZyOKHhoQV4eznIvbdp4thdzTie7XJwIT64JL0gq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOsfio%2FoxfRsY%2BXvzircA9RXCJQJItGKCdm%2BzdmTciL1zydM2cZTeXbx%2FCydoAcwqS3HaCXrgjdDqTomF8hP1kaLy9AEulxTx1Zu%2FAESNwkBPuo6hGjFq4rOS7BKinT7wW5RBUW8DIrxcYx0O8FjRGPrsv6YJkEfvdDc10HNPjr%2FeVnweeDJJXA4OllQizr%2FujFpLEdaRP05RYUt32RmcFTdF0DPy5dCMIBXTOyRup9KsuW6GT%2Ff0BLOyRfNDHl0QrZFdV79Ym3weLRDeBa1fQqgNM5eAMAyV3EZq6zuRPTLNohjkfcrDAJp4TYX5mG8lrv%2BHYx9wgTW6IR2DPx0DknP%2BhN19Nc9Rm0f8k1IRNZZmyAF6xXevvbVI4%2FY5M5%2FXiHjGHmBdriqYaqTOL%2BWINPs9YGSabrsL0CK%2Fu%2Bs6fLzmcBYKRdDK%2FQBWdbmTekcsfZ5my8%2FYVCx1MJ9xznlTeE4WNhNtAIlPBGvRQy93Wst8L6EIMdkGVR%2BUnY5LWRtMySUJYi%2B%2F85e%2Fzv1w29Gek5%2BPs2R3PJxPA6zqtA7susjBzTo9AAxQjqhEnPJLHqSdaHkly10V09CNp7lxQd83swtxHhx7fYlpfNHXyUZAegYCUya6omvvdaWEFIW%2Bj8TsLbISmIaKTk%2F2yevMNbOm8sGOqUBThkyllPmvotvARozTT2C%2BNxAfe14H%2Bby%2Ba4uRks74rF%2Fy%2BiLgK%2F88hjYEhn%2BTGQCuqXTN3D2yrh4OOhVxiye7je79BntgLe1Rt0HxR4IZrdSgI595WNqsMzX7eOHyfrDivtPqc5Gq97ByeZ%2BdAy42J3HJVR4pNfbmg%2BC57jC3Eo%2FnlLkEjWCDAXBN9SMx4btrY2hDwXzEZ1LCqfIteuFKBXmwTdP&X-Amz-Signature=a351e78fef09f0332f2bde490cdd6bb77e8030a45e8af0c22878751a1d70da87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXURCBVE%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDmsEIU3NdYg3lcYhSlJBKJf5f40irWoOWcy3zgr0GxEAIgLspxTZyOKHhoQV4eznIvbdp4thdzTie7XJwIT64JL0gq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOsfio%2FoxfRsY%2BXvzircA9RXCJQJItGKCdm%2BzdmTciL1zydM2cZTeXbx%2FCydoAcwqS3HaCXrgjdDqTomF8hP1kaLy9AEulxTx1Zu%2FAESNwkBPuo6hGjFq4rOS7BKinT7wW5RBUW8DIrxcYx0O8FjRGPrsv6YJkEfvdDc10HNPjr%2FeVnweeDJJXA4OllQizr%2FujFpLEdaRP05RYUt32RmcFTdF0DPy5dCMIBXTOyRup9KsuW6GT%2Ff0BLOyRfNDHl0QrZFdV79Ym3weLRDeBa1fQqgNM5eAMAyV3EZq6zuRPTLNohjkfcrDAJp4TYX5mG8lrv%2BHYx9wgTW6IR2DPx0DknP%2BhN19Nc9Rm0f8k1IRNZZmyAF6xXevvbVI4%2FY5M5%2FXiHjGHmBdriqYaqTOL%2BWINPs9YGSabrsL0CK%2Fu%2Bs6fLzmcBYKRdDK%2FQBWdbmTekcsfZ5my8%2FYVCx1MJ9xznlTeE4WNhNtAIlPBGvRQy93Wst8L6EIMdkGVR%2BUnY5LWRtMySUJYi%2B%2F85e%2Fzv1w29Gek5%2BPs2R3PJxPA6zqtA7susjBzTo9AAxQjqhEnPJLHqSdaHkly10V09CNp7lxQd83swtxHhx7fYlpfNHXyUZAegYCUya6omvvdaWEFIW%2Bj8TsLbISmIaKTk%2F2yevMNbOm8sGOqUBThkyllPmvotvARozTT2C%2BNxAfe14H%2Bby%2Ba4uRks74rF%2Fy%2BiLgK%2F88hjYEhn%2BTGQCuqXTN3D2yrh4OOhVxiye7je79BntgLe1Rt0HxR4IZrdSgI595WNqsMzX7eOHyfrDivtPqc5Gq97ByeZ%2BdAy42J3HJVR4pNfbmg%2BC57jC3Eo%2FnlLkEjWCDAXBN9SMx4btrY2hDwXzEZ1LCqfIteuFKBXmwTdP&X-Amz-Signature=f8c4913b8c6d36e5dfc8e5eeff16b5ba0fbc7386dfccee4107d0dc100732c7fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXURCBVE%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDmsEIU3NdYg3lcYhSlJBKJf5f40irWoOWcy3zgr0GxEAIgLspxTZyOKHhoQV4eznIvbdp4thdzTie7XJwIT64JL0gq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOsfio%2FoxfRsY%2BXvzircA9RXCJQJItGKCdm%2BzdmTciL1zydM2cZTeXbx%2FCydoAcwqS3HaCXrgjdDqTomF8hP1kaLy9AEulxTx1Zu%2FAESNwkBPuo6hGjFq4rOS7BKinT7wW5RBUW8DIrxcYx0O8FjRGPrsv6YJkEfvdDc10HNPjr%2FeVnweeDJJXA4OllQizr%2FujFpLEdaRP05RYUt32RmcFTdF0DPy5dCMIBXTOyRup9KsuW6GT%2Ff0BLOyRfNDHl0QrZFdV79Ym3weLRDeBa1fQqgNM5eAMAyV3EZq6zuRPTLNohjkfcrDAJp4TYX5mG8lrv%2BHYx9wgTW6IR2DPx0DknP%2BhN19Nc9Rm0f8k1IRNZZmyAF6xXevvbVI4%2FY5M5%2FXiHjGHmBdriqYaqTOL%2BWINPs9YGSabrsL0CK%2Fu%2Bs6fLzmcBYKRdDK%2FQBWdbmTekcsfZ5my8%2FYVCx1MJ9xznlTeE4WNhNtAIlPBGvRQy93Wst8L6EIMdkGVR%2BUnY5LWRtMySUJYi%2B%2F85e%2Fzv1w29Gek5%2BPs2R3PJxPA6zqtA7susjBzTo9AAxQjqhEnPJLHqSdaHkly10V09CNp7lxQd83swtxHhx7fYlpfNHXyUZAegYCUya6omvvdaWEFIW%2Bj8TsLbISmIaKTk%2F2yevMNbOm8sGOqUBThkyllPmvotvARozTT2C%2BNxAfe14H%2Bby%2Ba4uRks74rF%2Fy%2BiLgK%2F88hjYEhn%2BTGQCuqXTN3D2yrh4OOhVxiye7je79BntgLe1Rt0HxR4IZrdSgI595WNqsMzX7eOHyfrDivtPqc5Gq97ByeZ%2BdAy42J3HJVR4pNfbmg%2BC57jC3Eo%2FnlLkEjWCDAXBN9SMx4btrY2hDwXzEZ1LCqfIteuFKBXmwTdP&X-Amz-Signature=7ae3ade3f8e17ad2ca2fba069fbb102ee49be61075517bab202b817bf6180477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXURCBVE%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDmsEIU3NdYg3lcYhSlJBKJf5f40irWoOWcy3zgr0GxEAIgLspxTZyOKHhoQV4eznIvbdp4thdzTie7XJwIT64JL0gq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOsfio%2FoxfRsY%2BXvzircA9RXCJQJItGKCdm%2BzdmTciL1zydM2cZTeXbx%2FCydoAcwqS3HaCXrgjdDqTomF8hP1kaLy9AEulxTx1Zu%2FAESNwkBPuo6hGjFq4rOS7BKinT7wW5RBUW8DIrxcYx0O8FjRGPrsv6YJkEfvdDc10HNPjr%2FeVnweeDJJXA4OllQizr%2FujFpLEdaRP05RYUt32RmcFTdF0DPy5dCMIBXTOyRup9KsuW6GT%2Ff0BLOyRfNDHl0QrZFdV79Ym3weLRDeBa1fQqgNM5eAMAyV3EZq6zuRPTLNohjkfcrDAJp4TYX5mG8lrv%2BHYx9wgTW6IR2DPx0DknP%2BhN19Nc9Rm0f8k1IRNZZmyAF6xXevvbVI4%2FY5M5%2FXiHjGHmBdriqYaqTOL%2BWINPs9YGSabrsL0CK%2Fu%2Bs6fLzmcBYKRdDK%2FQBWdbmTekcsfZ5my8%2FYVCx1MJ9xznlTeE4WNhNtAIlPBGvRQy93Wst8L6EIMdkGVR%2BUnY5LWRtMySUJYi%2B%2F85e%2Fzv1w29Gek5%2BPs2R3PJxPA6zqtA7susjBzTo9AAxQjqhEnPJLHqSdaHkly10V09CNp7lxQd83swtxHhx7fYlpfNHXyUZAegYCUya6omvvdaWEFIW%2Bj8TsLbISmIaKTk%2F2yevMNbOm8sGOqUBThkyllPmvotvARozTT2C%2BNxAfe14H%2Bby%2Ba4uRks74rF%2Fy%2BiLgK%2F88hjYEhn%2BTGQCuqXTN3D2yrh4OOhVxiye7je79BntgLe1Rt0HxR4IZrdSgI595WNqsMzX7eOHyfrDivtPqc5Gq97ByeZ%2BdAy42J3HJVR4pNfbmg%2BC57jC3Eo%2FnlLkEjWCDAXBN9SMx4btrY2hDwXzEZ1LCqfIteuFKBXmwTdP&X-Amz-Signature=f902bf9283057ef12d3e2b829c7e959b5b5083c558af904c7d334ca4d28a4869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQJ7BYP%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCr4K5HrPdfdun1TP28IHA%2F%2BOnSwP4gUK0OZG3hhb4t6QIgfXocKQqZXMOe%2BFLp%2Bwc%2F%2F7eilQbm4qxxd8rWF%2FcRceUq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDHFOry8pRYsVc10i2ircA0juyxUdzaCxI6lM3rXQFbXX%2Bbi18TvqpHVcUKufVDrz8a1t6qIZD9im7M4zGFfgOo1uqGxr8Wr8%2FtF%2FdSX212osuoAvnTnZ8epcauK6juzz6DLtu98SFMt04MZHz1q99rJoOUXCmJQtIACZlidF48I6T2qcyQO47FRmHPz5kgjnosQQ%2BUW%2BQFYGKkW%2FJJCb6SGwaiiXdfxY9vfHVTOp9qkDHVaQUqExcE7AUqMdKeY7QYrScTaesrKgImCdeoHGNfJXEg8fNpkHZMq2djsu3Ofa8S%2F9w%2FXXZQZsKAyGmqWQjH8vaGFssbOHvhpLCTlle%2BGni5qoKcL%2Bp4WCdNtOa%2BClMhs59yw9vDf3arzGJaIQUh4NK%2FyikoA5jwGdB1MwcOp5LhKHl0ioKzc3L7KDHdAvxrEr97sSgEbo6YytcIqBN302%2FE4y5KxY8HvzVusHWkS9fQpZsRHteX7FmQLfKsOD3fBKSpC6Ll0ynv9dKprGyBWYZwKprOk4lcHWXk8OIG6q9htPXjfwdXwol80ux5%2BhqMAPPwxgh%2B13KCFENUcJKFbDSiZ594qHHwVYrUHdgRvscDhzvzQHP5sXlz41MjzqlqXR%2BB6hKJQOD4%2Bt2GXiSY1eyumSFnNbFS6OMMnNm8sGOqUBJPnkYBFw2pGqtjTvYpcKi28glcT%2B3Tndt4qh4Y1qiL%2FZIP9Bqp1kX2X109db%2FOS0r003mkf2GYot7zu5EnuBjptlYQNlDlynsFsvcx1JQpLT322393aTB%2FaUFzW7sPXAzwgfWA4Qx9YWupadX3fa7EirYxxSymryDOoQuvaZB%2BE2J2YB%2Flqcmgr51j466fyBMa%2FEh18Ca8%2BSa7Igaoy1q1FVELQL&X-Amz-Signature=bf76081e6e14c19c19874b5e09ac1b7e0031e4d79f50b337ff468d131409579a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXURCBVE%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDmsEIU3NdYg3lcYhSlJBKJf5f40irWoOWcy3zgr0GxEAIgLspxTZyOKHhoQV4eznIvbdp4thdzTie7XJwIT64JL0gq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOsfio%2FoxfRsY%2BXvzircA9RXCJQJItGKCdm%2BzdmTciL1zydM2cZTeXbx%2FCydoAcwqS3HaCXrgjdDqTomF8hP1kaLy9AEulxTx1Zu%2FAESNwkBPuo6hGjFq4rOS7BKinT7wW5RBUW8DIrxcYx0O8FjRGPrsv6YJkEfvdDc10HNPjr%2FeVnweeDJJXA4OllQizr%2FujFpLEdaRP05RYUt32RmcFTdF0DPy5dCMIBXTOyRup9KsuW6GT%2Ff0BLOyRfNDHl0QrZFdV79Ym3weLRDeBa1fQqgNM5eAMAyV3EZq6zuRPTLNohjkfcrDAJp4TYX5mG8lrv%2BHYx9wgTW6IR2DPx0DknP%2BhN19Nc9Rm0f8k1IRNZZmyAF6xXevvbVI4%2FY5M5%2FXiHjGHmBdriqYaqTOL%2BWINPs9YGSabrsL0CK%2Fu%2Bs6fLzmcBYKRdDK%2FQBWdbmTekcsfZ5my8%2FYVCx1MJ9xznlTeE4WNhNtAIlPBGvRQy93Wst8L6EIMdkGVR%2BUnY5LWRtMySUJYi%2B%2F85e%2Fzv1w29Gek5%2BPs2R3PJxPA6zqtA7susjBzTo9AAxQjqhEnPJLHqSdaHkly10V09CNp7lxQd83swtxHhx7fYlpfNHXyUZAegYCUya6omvvdaWEFIW%2Bj8TsLbISmIaKTk%2F2yevMNbOm8sGOqUBThkyllPmvotvARozTT2C%2BNxAfe14H%2Bby%2Ba4uRks74rF%2Fy%2BiLgK%2F88hjYEhn%2BTGQCuqXTN3D2yrh4OOhVxiye7je79BntgLe1Rt0HxR4IZrdSgI595WNqsMzX7eOHyfrDivtPqc5Gq97ByeZ%2BdAy42J3HJVR4pNfbmg%2BC57jC3Eo%2FnlLkEjWCDAXBN9SMx4btrY2hDwXzEZ1LCqfIteuFKBXmwTdP&X-Amz-Signature=164328b2899f91c098d70c6e403f7d1a5f8cff1f18ad3195c75c66da54d6930b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXURCBVE%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDmsEIU3NdYg3lcYhSlJBKJf5f40irWoOWcy3zgr0GxEAIgLspxTZyOKHhoQV4eznIvbdp4thdzTie7XJwIT64JL0gq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOsfio%2FoxfRsY%2BXvzircA9RXCJQJItGKCdm%2BzdmTciL1zydM2cZTeXbx%2FCydoAcwqS3HaCXrgjdDqTomF8hP1kaLy9AEulxTx1Zu%2FAESNwkBPuo6hGjFq4rOS7BKinT7wW5RBUW8DIrxcYx0O8FjRGPrsv6YJkEfvdDc10HNPjr%2FeVnweeDJJXA4OllQizr%2FujFpLEdaRP05RYUt32RmcFTdF0DPy5dCMIBXTOyRup9KsuW6GT%2Ff0BLOyRfNDHl0QrZFdV79Ym3weLRDeBa1fQqgNM5eAMAyV3EZq6zuRPTLNohjkfcrDAJp4TYX5mG8lrv%2BHYx9wgTW6IR2DPx0DknP%2BhN19Nc9Rm0f8k1IRNZZmyAF6xXevvbVI4%2FY5M5%2FXiHjGHmBdriqYaqTOL%2BWINPs9YGSabrsL0CK%2Fu%2Bs6fLzmcBYKRdDK%2FQBWdbmTekcsfZ5my8%2FYVCx1MJ9xznlTeE4WNhNtAIlPBGvRQy93Wst8L6EIMdkGVR%2BUnY5LWRtMySUJYi%2B%2F85e%2Fzv1w29Gek5%2BPs2R3PJxPA6zqtA7susjBzTo9AAxQjqhEnPJLHqSdaHkly10V09CNp7lxQd83swtxHhx7fYlpfNHXyUZAegYCUya6omvvdaWEFIW%2Bj8TsLbISmIaKTk%2F2yevMNbOm8sGOqUBThkyllPmvotvARozTT2C%2BNxAfe14H%2Bby%2Ba4uRks74rF%2Fy%2BiLgK%2F88hjYEhn%2BTGQCuqXTN3D2yrh4OOhVxiye7je79BntgLe1Rt0HxR4IZrdSgI595WNqsMzX7eOHyfrDivtPqc5Gq97ByeZ%2BdAy42J3HJVR4pNfbmg%2BC57jC3Eo%2FnlLkEjWCDAXBN9SMx4btrY2hDwXzEZ1LCqfIteuFKBXmwTdP&X-Amz-Signature=09e4660c1401efbe152d4717aeedd24b8ac28c83d4f554f722d36c545b8b85c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXURCBVE%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDmsEIU3NdYg3lcYhSlJBKJf5f40irWoOWcy3zgr0GxEAIgLspxTZyOKHhoQV4eznIvbdp4thdzTie7XJwIT64JL0gq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOsfio%2FoxfRsY%2BXvzircA9RXCJQJItGKCdm%2BzdmTciL1zydM2cZTeXbx%2FCydoAcwqS3HaCXrgjdDqTomF8hP1kaLy9AEulxTx1Zu%2FAESNwkBPuo6hGjFq4rOS7BKinT7wW5RBUW8DIrxcYx0O8FjRGPrsv6YJkEfvdDc10HNPjr%2FeVnweeDJJXA4OllQizr%2FujFpLEdaRP05RYUt32RmcFTdF0DPy5dCMIBXTOyRup9KsuW6GT%2Ff0BLOyRfNDHl0QrZFdV79Ym3weLRDeBa1fQqgNM5eAMAyV3EZq6zuRPTLNohjkfcrDAJp4TYX5mG8lrv%2BHYx9wgTW6IR2DPx0DknP%2BhN19Nc9Rm0f8k1IRNZZmyAF6xXevvbVI4%2FY5M5%2FXiHjGHmBdriqYaqTOL%2BWINPs9YGSabrsL0CK%2Fu%2Bs6fLzmcBYKRdDK%2FQBWdbmTekcsfZ5my8%2FYVCx1MJ9xznlTeE4WNhNtAIlPBGvRQy93Wst8L6EIMdkGVR%2BUnY5LWRtMySUJYi%2B%2F85e%2Fzv1w29Gek5%2BPs2R3PJxPA6zqtA7susjBzTo9AAxQjqhEnPJLHqSdaHkly10V09CNp7lxQd83swtxHhx7fYlpfNHXyUZAegYCUya6omvvdaWEFIW%2Bj8TsLbISmIaKTk%2F2yevMNbOm8sGOqUBThkyllPmvotvARozTT2C%2BNxAfe14H%2Bby%2Ba4uRks74rF%2Fy%2BiLgK%2F88hjYEhn%2BTGQCuqXTN3D2yrh4OOhVxiye7je79BntgLe1Rt0HxR4IZrdSgI595WNqsMzX7eOHyfrDivtPqc5Gq97ByeZ%2BdAy42J3HJVR4pNfbmg%2BC57jC3Eo%2FnlLkEjWCDAXBN9SMx4btrY2hDwXzEZ1LCqfIteuFKBXmwTdP&X-Amz-Signature=7ae3ade3f8e17ad2ca2fba069fbb102ee49be61075517bab202b817bf6180477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXURCBVE%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDmsEIU3NdYg3lcYhSlJBKJf5f40irWoOWcy3zgr0GxEAIgLspxTZyOKHhoQV4eznIvbdp4thdzTie7XJwIT64JL0gq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOsfio%2FoxfRsY%2BXvzircA9RXCJQJItGKCdm%2BzdmTciL1zydM2cZTeXbx%2FCydoAcwqS3HaCXrgjdDqTomF8hP1kaLy9AEulxTx1Zu%2FAESNwkBPuo6hGjFq4rOS7BKinT7wW5RBUW8DIrxcYx0O8FjRGPrsv6YJkEfvdDc10HNPjr%2FeVnweeDJJXA4OllQizr%2FujFpLEdaRP05RYUt32RmcFTdF0DPy5dCMIBXTOyRup9KsuW6GT%2Ff0BLOyRfNDHl0QrZFdV79Ym3weLRDeBa1fQqgNM5eAMAyV3EZq6zuRPTLNohjkfcrDAJp4TYX5mG8lrv%2BHYx9wgTW6IR2DPx0DknP%2BhN19Nc9Rm0f8k1IRNZZmyAF6xXevvbVI4%2FY5M5%2FXiHjGHmBdriqYaqTOL%2BWINPs9YGSabrsL0CK%2Fu%2Bs6fLzmcBYKRdDK%2FQBWdbmTekcsfZ5my8%2FYVCx1MJ9xznlTeE4WNhNtAIlPBGvRQy93Wst8L6EIMdkGVR%2BUnY5LWRtMySUJYi%2B%2F85e%2Fzv1w29Gek5%2BPs2R3PJxPA6zqtA7susjBzTo9AAxQjqhEnPJLHqSdaHkly10V09CNp7lxQd83swtxHhx7fYlpfNHXyUZAegYCUya6omvvdaWEFIW%2Bj8TsLbISmIaKTk%2F2yevMNbOm8sGOqUBThkyllPmvotvARozTT2C%2BNxAfe14H%2Bby%2Ba4uRks74rF%2Fy%2BiLgK%2F88hjYEhn%2BTGQCuqXTN3D2yrh4OOhVxiye7je79BntgLe1Rt0HxR4IZrdSgI595WNqsMzX7eOHyfrDivtPqc5Gq97ByeZ%2BdAy42J3HJVR4pNfbmg%2BC57jC3Eo%2FnlLkEjWCDAXBN9SMx4btrY2hDwXzEZ1LCqfIteuFKBXmwTdP&X-Amz-Signature=def5b9957fb50e1682c3fb53d0a101f4356521f1351e008fb5372785dc2f6d4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXURCBVE%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDmsEIU3NdYg3lcYhSlJBKJf5f40irWoOWcy3zgr0GxEAIgLspxTZyOKHhoQV4eznIvbdp4thdzTie7XJwIT64JL0gq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOsfio%2FoxfRsY%2BXvzircA9RXCJQJItGKCdm%2BzdmTciL1zydM2cZTeXbx%2FCydoAcwqS3HaCXrgjdDqTomF8hP1kaLy9AEulxTx1Zu%2FAESNwkBPuo6hGjFq4rOS7BKinT7wW5RBUW8DIrxcYx0O8FjRGPrsv6YJkEfvdDc10HNPjr%2FeVnweeDJJXA4OllQizr%2FujFpLEdaRP05RYUt32RmcFTdF0DPy5dCMIBXTOyRup9KsuW6GT%2Ff0BLOyRfNDHl0QrZFdV79Ym3weLRDeBa1fQqgNM5eAMAyV3EZq6zuRPTLNohjkfcrDAJp4TYX5mG8lrv%2BHYx9wgTW6IR2DPx0DknP%2BhN19Nc9Rm0f8k1IRNZZmyAF6xXevvbVI4%2FY5M5%2FXiHjGHmBdriqYaqTOL%2BWINPs9YGSabrsL0CK%2Fu%2Bs6fLzmcBYKRdDK%2FQBWdbmTekcsfZ5my8%2FYVCx1MJ9xznlTeE4WNhNtAIlPBGvRQy93Wst8L6EIMdkGVR%2BUnY5LWRtMySUJYi%2B%2F85e%2Fzv1w29Gek5%2BPs2R3PJxPA6zqtA7susjBzTo9AAxQjqhEnPJLHqSdaHkly10V09CNp7lxQd83swtxHhx7fYlpfNHXyUZAegYCUya6omvvdaWEFIW%2Bj8TsLbISmIaKTk%2F2yevMNbOm8sGOqUBThkyllPmvotvARozTT2C%2BNxAfe14H%2Bby%2Ba4uRks74rF%2Fy%2BiLgK%2F88hjYEhn%2BTGQCuqXTN3D2yrh4OOhVxiye7je79BntgLe1Rt0HxR4IZrdSgI595WNqsMzX7eOHyfrDivtPqc5Gq97ByeZ%2BdAy42J3HJVR4pNfbmg%2BC57jC3Eo%2FnlLkEjWCDAXBN9SMx4btrY2hDwXzEZ1LCqfIteuFKBXmwTdP&X-Amz-Signature=7634be6b8b6c6a27845e0d2928626eb648b294b0b5a71c0b16b11fd6f05ad893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXURCBVE%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDmsEIU3NdYg3lcYhSlJBKJf5f40irWoOWcy3zgr0GxEAIgLspxTZyOKHhoQV4eznIvbdp4thdzTie7XJwIT64JL0gq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOsfio%2FoxfRsY%2BXvzircA9RXCJQJItGKCdm%2BzdmTciL1zydM2cZTeXbx%2FCydoAcwqS3HaCXrgjdDqTomF8hP1kaLy9AEulxTx1Zu%2FAESNwkBPuo6hGjFq4rOS7BKinT7wW5RBUW8DIrxcYx0O8FjRGPrsv6YJkEfvdDc10HNPjr%2FeVnweeDJJXA4OllQizr%2FujFpLEdaRP05RYUt32RmcFTdF0DPy5dCMIBXTOyRup9KsuW6GT%2Ff0BLOyRfNDHl0QrZFdV79Ym3weLRDeBa1fQqgNM5eAMAyV3EZq6zuRPTLNohjkfcrDAJp4TYX5mG8lrv%2BHYx9wgTW6IR2DPx0DknP%2BhN19Nc9Rm0f8k1IRNZZmyAF6xXevvbVI4%2FY5M5%2FXiHjGHmBdriqYaqTOL%2BWINPs9YGSabrsL0CK%2Fu%2Bs6fLzmcBYKRdDK%2FQBWdbmTekcsfZ5my8%2FYVCx1MJ9xznlTeE4WNhNtAIlPBGvRQy93Wst8L6EIMdkGVR%2BUnY5LWRtMySUJYi%2B%2F85e%2Fzv1w29Gek5%2BPs2R3PJxPA6zqtA7susjBzTo9AAxQjqhEnPJLHqSdaHkly10V09CNp7lxQd83swtxHhx7fYlpfNHXyUZAegYCUya6omvvdaWEFIW%2Bj8TsLbISmIaKTk%2F2yevMNbOm8sGOqUBThkyllPmvotvARozTT2C%2BNxAfe14H%2Bby%2Ba4uRks74rF%2Fy%2BiLgK%2F88hjYEhn%2BTGQCuqXTN3D2yrh4OOhVxiye7je79BntgLe1Rt0HxR4IZrdSgI595WNqsMzX7eOHyfrDivtPqc5Gq97ByeZ%2BdAy42J3HJVR4pNfbmg%2BC57jC3Eo%2FnlLkEjWCDAXBN9SMx4btrY2hDwXzEZ1LCqfIteuFKBXmwTdP&X-Amz-Signature=15e605b307af72d2a07b0568c3d7e53afa2ecce421a400583cc0e7a8227ff8d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


