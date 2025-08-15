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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3HMFDMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIG1oy%2FkJhSfW1wDu62rfvZKDQwQWXWSGMLlDYoy83vcmAiEAqRGtYDooN%2FGO4eY5Rr%2BpYUjpRrb5gxRX0XTOcab%2FHSoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDO0X%2FG37fIE4bE1qBircA3n40GMwFgLzmC2tWGSmg7KvM7Bwmw5tBmfr5gVV3NvidjbhernsW8WxKrUA%2BFxdEWH1AZjiX2Z7DyX6v7pJEiv%2FG8SjB6UaoKjEGhIFfps09aHBnXY3JYfyR09ODZQv8uOCUdCH6e8Foj6Dxjdf9jDflEzlmFrWv%2F71aksUyue2Z43mBJrAl5KsEFGk5yp1Nze3JobZnG3NLxO61XCFemuX6r1g8BCZnDNXtwpPWOVcdKowYYS%2B0nUk615zAh86rL9ByBKs3lMU7SuUQ8CYU0V7kETsmVLOr08Mjmn1B3jZ99MLindZqZAujWgZx4puBqqgVaCZVLkEqwx9ZQ1MyhgPxxuL3Vvs1rCK3LwI3j6VEmLdhnKWfd54ULfr7Ma6crtziehvK0R7tEvMWsNZcjO59qzwipO48TDQ7%2BZpJl0UjAvOAvNGHtKFZWVbtWOyvlorWaVbBWC6ATlu1iUk5GpIZMvH59MjynAmEpwyV7CebT1QUSnV9FkLKMcy0kDOZ5dbzzHSEsan4GvMulSSFNhT5XdOLJV%2BIdw9MsWIqM6vwsRmBEzsQZ7I1W4OcewufWKCMMgG8eqhw%2Bp0hKca1JZ%2BpKwCQk5%2B1qVUeVNLXFCswy5xkeXMXpSMemb1MN7Y%2FsQGOqUBzN3V3csZeAp%2BYV0nDqV1jz80aAiGDPPUVzKVMwYO6Nh%2FsQ5w9zapdsqVKjraadPM0HkRH4yUEMTaJ7Ok8F%2FYBvP0QXYErsjhw7ejngGBs3PRmGaqUZb8D8UKeTTAlV7Y%2FqUtqet%2BZbVCqxF87Cesgozt44fiyl1pV01SHxW34wLl69Ofivk2pQAi4JlxKzrnEJhPmIzh3ZfqMWQLA5PC5XKGu0E7&X-Amz-Signature=56f56816fcc479bd112355eaeb0ae5adc3b2562b4407233a529243da5136e3f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3HMFDMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIG1oy%2FkJhSfW1wDu62rfvZKDQwQWXWSGMLlDYoy83vcmAiEAqRGtYDooN%2FGO4eY5Rr%2BpYUjpRrb5gxRX0XTOcab%2FHSoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDO0X%2FG37fIE4bE1qBircA3n40GMwFgLzmC2tWGSmg7KvM7Bwmw5tBmfr5gVV3NvidjbhernsW8WxKrUA%2BFxdEWH1AZjiX2Z7DyX6v7pJEiv%2FG8SjB6UaoKjEGhIFfps09aHBnXY3JYfyR09ODZQv8uOCUdCH6e8Foj6Dxjdf9jDflEzlmFrWv%2F71aksUyue2Z43mBJrAl5KsEFGk5yp1Nze3JobZnG3NLxO61XCFemuX6r1g8BCZnDNXtwpPWOVcdKowYYS%2B0nUk615zAh86rL9ByBKs3lMU7SuUQ8CYU0V7kETsmVLOr08Mjmn1B3jZ99MLindZqZAujWgZx4puBqqgVaCZVLkEqwx9ZQ1MyhgPxxuL3Vvs1rCK3LwI3j6VEmLdhnKWfd54ULfr7Ma6crtziehvK0R7tEvMWsNZcjO59qzwipO48TDQ7%2BZpJl0UjAvOAvNGHtKFZWVbtWOyvlorWaVbBWC6ATlu1iUk5GpIZMvH59MjynAmEpwyV7CebT1QUSnV9FkLKMcy0kDOZ5dbzzHSEsan4GvMulSSFNhT5XdOLJV%2BIdw9MsWIqM6vwsRmBEzsQZ7I1W4OcewufWKCMMgG8eqhw%2Bp0hKca1JZ%2BpKwCQk5%2B1qVUeVNLXFCswy5xkeXMXpSMemb1MN7Y%2FsQGOqUBzN3V3csZeAp%2BYV0nDqV1jz80aAiGDPPUVzKVMwYO6Nh%2FsQ5w9zapdsqVKjraadPM0HkRH4yUEMTaJ7Ok8F%2FYBvP0QXYErsjhw7ejngGBs3PRmGaqUZb8D8UKeTTAlV7Y%2FqUtqet%2BZbVCqxF87Cesgozt44fiyl1pV01SHxW34wLl69Ofivk2pQAi4JlxKzrnEJhPmIzh3ZfqMWQLA5PC5XKGu0E7&X-Amz-Signature=8dae040cc5650a8ad906fe1ce45bc9babf03f021797a4f326a45414c4c75ade8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3HMFDMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIG1oy%2FkJhSfW1wDu62rfvZKDQwQWXWSGMLlDYoy83vcmAiEAqRGtYDooN%2FGO4eY5Rr%2BpYUjpRrb5gxRX0XTOcab%2FHSoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDO0X%2FG37fIE4bE1qBircA3n40GMwFgLzmC2tWGSmg7KvM7Bwmw5tBmfr5gVV3NvidjbhernsW8WxKrUA%2BFxdEWH1AZjiX2Z7DyX6v7pJEiv%2FG8SjB6UaoKjEGhIFfps09aHBnXY3JYfyR09ODZQv8uOCUdCH6e8Foj6Dxjdf9jDflEzlmFrWv%2F71aksUyue2Z43mBJrAl5KsEFGk5yp1Nze3JobZnG3NLxO61XCFemuX6r1g8BCZnDNXtwpPWOVcdKowYYS%2B0nUk615zAh86rL9ByBKs3lMU7SuUQ8CYU0V7kETsmVLOr08Mjmn1B3jZ99MLindZqZAujWgZx4puBqqgVaCZVLkEqwx9ZQ1MyhgPxxuL3Vvs1rCK3LwI3j6VEmLdhnKWfd54ULfr7Ma6crtziehvK0R7tEvMWsNZcjO59qzwipO48TDQ7%2BZpJl0UjAvOAvNGHtKFZWVbtWOyvlorWaVbBWC6ATlu1iUk5GpIZMvH59MjynAmEpwyV7CebT1QUSnV9FkLKMcy0kDOZ5dbzzHSEsan4GvMulSSFNhT5XdOLJV%2BIdw9MsWIqM6vwsRmBEzsQZ7I1W4OcewufWKCMMgG8eqhw%2Bp0hKca1JZ%2BpKwCQk5%2B1qVUeVNLXFCswy5xkeXMXpSMemb1MN7Y%2FsQGOqUBzN3V3csZeAp%2BYV0nDqV1jz80aAiGDPPUVzKVMwYO6Nh%2FsQ5w9zapdsqVKjraadPM0HkRH4yUEMTaJ7Ok8F%2FYBvP0QXYErsjhw7ejngGBs3PRmGaqUZb8D8UKeTTAlV7Y%2FqUtqet%2BZbVCqxF87Cesgozt44fiyl1pV01SHxW34wLl69Ofivk2pQAi4JlxKzrnEJhPmIzh3ZfqMWQLA5PC5XKGu0E7&X-Amz-Signature=2dcb7186673eccd993784a710e305c6624f9027d77f23d0a5fc70f9b1883825e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3HMFDMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIG1oy%2FkJhSfW1wDu62rfvZKDQwQWXWSGMLlDYoy83vcmAiEAqRGtYDooN%2FGO4eY5Rr%2BpYUjpRrb5gxRX0XTOcab%2FHSoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDO0X%2FG37fIE4bE1qBircA3n40GMwFgLzmC2tWGSmg7KvM7Bwmw5tBmfr5gVV3NvidjbhernsW8WxKrUA%2BFxdEWH1AZjiX2Z7DyX6v7pJEiv%2FG8SjB6UaoKjEGhIFfps09aHBnXY3JYfyR09ODZQv8uOCUdCH6e8Foj6Dxjdf9jDflEzlmFrWv%2F71aksUyue2Z43mBJrAl5KsEFGk5yp1Nze3JobZnG3NLxO61XCFemuX6r1g8BCZnDNXtwpPWOVcdKowYYS%2B0nUk615zAh86rL9ByBKs3lMU7SuUQ8CYU0V7kETsmVLOr08Mjmn1B3jZ99MLindZqZAujWgZx4puBqqgVaCZVLkEqwx9ZQ1MyhgPxxuL3Vvs1rCK3LwI3j6VEmLdhnKWfd54ULfr7Ma6crtziehvK0R7tEvMWsNZcjO59qzwipO48TDQ7%2BZpJl0UjAvOAvNGHtKFZWVbtWOyvlorWaVbBWC6ATlu1iUk5GpIZMvH59MjynAmEpwyV7CebT1QUSnV9FkLKMcy0kDOZ5dbzzHSEsan4GvMulSSFNhT5XdOLJV%2BIdw9MsWIqM6vwsRmBEzsQZ7I1W4OcewufWKCMMgG8eqhw%2Bp0hKca1JZ%2BpKwCQk5%2B1qVUeVNLXFCswy5xkeXMXpSMemb1MN7Y%2FsQGOqUBzN3V3csZeAp%2BYV0nDqV1jz80aAiGDPPUVzKVMwYO6Nh%2FsQ5w9zapdsqVKjraadPM0HkRH4yUEMTaJ7Ok8F%2FYBvP0QXYErsjhw7ejngGBs3PRmGaqUZb8D8UKeTTAlV7Y%2FqUtqet%2BZbVCqxF87Cesgozt44fiyl1pV01SHxW34wLl69Ofivk2pQAi4JlxKzrnEJhPmIzh3ZfqMWQLA5PC5XKGu0E7&X-Amz-Signature=ee6c895cecff5facc65c3e596671cf84388535315d60608c5b0792b7132858dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3HMFDMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIG1oy%2FkJhSfW1wDu62rfvZKDQwQWXWSGMLlDYoy83vcmAiEAqRGtYDooN%2FGO4eY5Rr%2BpYUjpRrb5gxRX0XTOcab%2FHSoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDO0X%2FG37fIE4bE1qBircA3n40GMwFgLzmC2tWGSmg7KvM7Bwmw5tBmfr5gVV3NvidjbhernsW8WxKrUA%2BFxdEWH1AZjiX2Z7DyX6v7pJEiv%2FG8SjB6UaoKjEGhIFfps09aHBnXY3JYfyR09ODZQv8uOCUdCH6e8Foj6Dxjdf9jDflEzlmFrWv%2F71aksUyue2Z43mBJrAl5KsEFGk5yp1Nze3JobZnG3NLxO61XCFemuX6r1g8BCZnDNXtwpPWOVcdKowYYS%2B0nUk615zAh86rL9ByBKs3lMU7SuUQ8CYU0V7kETsmVLOr08Mjmn1B3jZ99MLindZqZAujWgZx4puBqqgVaCZVLkEqwx9ZQ1MyhgPxxuL3Vvs1rCK3LwI3j6VEmLdhnKWfd54ULfr7Ma6crtziehvK0R7tEvMWsNZcjO59qzwipO48TDQ7%2BZpJl0UjAvOAvNGHtKFZWVbtWOyvlorWaVbBWC6ATlu1iUk5GpIZMvH59MjynAmEpwyV7CebT1QUSnV9FkLKMcy0kDOZ5dbzzHSEsan4GvMulSSFNhT5XdOLJV%2BIdw9MsWIqM6vwsRmBEzsQZ7I1W4OcewufWKCMMgG8eqhw%2Bp0hKca1JZ%2BpKwCQk5%2B1qVUeVNLXFCswy5xkeXMXpSMemb1MN7Y%2FsQGOqUBzN3V3csZeAp%2BYV0nDqV1jz80aAiGDPPUVzKVMwYO6Nh%2FsQ5w9zapdsqVKjraadPM0HkRH4yUEMTaJ7Ok8F%2FYBvP0QXYErsjhw7ejngGBs3PRmGaqUZb8D8UKeTTAlV7Y%2FqUtqet%2BZbVCqxF87Cesgozt44fiyl1pV01SHxW34wLl69Ofivk2pQAi4JlxKzrnEJhPmIzh3ZfqMWQLA5PC5XKGu0E7&X-Amz-Signature=c52ca33078293f4df14c08e319266407a56f0b31d6848b07ecca260145ceabff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3HMFDMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIG1oy%2FkJhSfW1wDu62rfvZKDQwQWXWSGMLlDYoy83vcmAiEAqRGtYDooN%2FGO4eY5Rr%2BpYUjpRrb5gxRX0XTOcab%2FHSoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDO0X%2FG37fIE4bE1qBircA3n40GMwFgLzmC2tWGSmg7KvM7Bwmw5tBmfr5gVV3NvidjbhernsW8WxKrUA%2BFxdEWH1AZjiX2Z7DyX6v7pJEiv%2FG8SjB6UaoKjEGhIFfps09aHBnXY3JYfyR09ODZQv8uOCUdCH6e8Foj6Dxjdf9jDflEzlmFrWv%2F71aksUyue2Z43mBJrAl5KsEFGk5yp1Nze3JobZnG3NLxO61XCFemuX6r1g8BCZnDNXtwpPWOVcdKowYYS%2B0nUk615zAh86rL9ByBKs3lMU7SuUQ8CYU0V7kETsmVLOr08Mjmn1B3jZ99MLindZqZAujWgZx4puBqqgVaCZVLkEqwx9ZQ1MyhgPxxuL3Vvs1rCK3LwI3j6VEmLdhnKWfd54ULfr7Ma6crtziehvK0R7tEvMWsNZcjO59qzwipO48TDQ7%2BZpJl0UjAvOAvNGHtKFZWVbtWOyvlorWaVbBWC6ATlu1iUk5GpIZMvH59MjynAmEpwyV7CebT1QUSnV9FkLKMcy0kDOZ5dbzzHSEsan4GvMulSSFNhT5XdOLJV%2BIdw9MsWIqM6vwsRmBEzsQZ7I1W4OcewufWKCMMgG8eqhw%2Bp0hKca1JZ%2BpKwCQk5%2B1qVUeVNLXFCswy5xkeXMXpSMemb1MN7Y%2FsQGOqUBzN3V3csZeAp%2BYV0nDqV1jz80aAiGDPPUVzKVMwYO6Nh%2FsQ5w9zapdsqVKjraadPM0HkRH4yUEMTaJ7Ok8F%2FYBvP0QXYErsjhw7ejngGBs3PRmGaqUZb8D8UKeTTAlV7Y%2FqUtqet%2BZbVCqxF87Cesgozt44fiyl1pV01SHxW34wLl69Ofivk2pQAi4JlxKzrnEJhPmIzh3ZfqMWQLA5PC5XKGu0E7&X-Amz-Signature=6ed32a64a9ce34531d30f4ee830c72240a0f6956fd93f94c2498dea191591d17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3HMFDMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIG1oy%2FkJhSfW1wDu62rfvZKDQwQWXWSGMLlDYoy83vcmAiEAqRGtYDooN%2FGO4eY5Rr%2BpYUjpRrb5gxRX0XTOcab%2FHSoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDO0X%2FG37fIE4bE1qBircA3n40GMwFgLzmC2tWGSmg7KvM7Bwmw5tBmfr5gVV3NvidjbhernsW8WxKrUA%2BFxdEWH1AZjiX2Z7DyX6v7pJEiv%2FG8SjB6UaoKjEGhIFfps09aHBnXY3JYfyR09ODZQv8uOCUdCH6e8Foj6Dxjdf9jDflEzlmFrWv%2F71aksUyue2Z43mBJrAl5KsEFGk5yp1Nze3JobZnG3NLxO61XCFemuX6r1g8BCZnDNXtwpPWOVcdKowYYS%2B0nUk615zAh86rL9ByBKs3lMU7SuUQ8CYU0V7kETsmVLOr08Mjmn1B3jZ99MLindZqZAujWgZx4puBqqgVaCZVLkEqwx9ZQ1MyhgPxxuL3Vvs1rCK3LwI3j6VEmLdhnKWfd54ULfr7Ma6crtziehvK0R7tEvMWsNZcjO59qzwipO48TDQ7%2BZpJl0UjAvOAvNGHtKFZWVbtWOyvlorWaVbBWC6ATlu1iUk5GpIZMvH59MjynAmEpwyV7CebT1QUSnV9FkLKMcy0kDOZ5dbzzHSEsan4GvMulSSFNhT5XdOLJV%2BIdw9MsWIqM6vwsRmBEzsQZ7I1W4OcewufWKCMMgG8eqhw%2Bp0hKca1JZ%2BpKwCQk5%2B1qVUeVNLXFCswy5xkeXMXpSMemb1MN7Y%2FsQGOqUBzN3V3csZeAp%2BYV0nDqV1jz80aAiGDPPUVzKVMwYO6Nh%2FsQ5w9zapdsqVKjraadPM0HkRH4yUEMTaJ7Ok8F%2FYBvP0QXYErsjhw7ejngGBs3PRmGaqUZb8D8UKeTTAlV7Y%2FqUtqet%2BZbVCqxF87Cesgozt44fiyl1pV01SHxW34wLl69Ofivk2pQAi4JlxKzrnEJhPmIzh3ZfqMWQLA5PC5XKGu0E7&X-Amz-Signature=dba309a007764e82e802cdee1dc801e693ea0e0b69a492e7124861cb3dd2ff66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3HMFDMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIG1oy%2FkJhSfW1wDu62rfvZKDQwQWXWSGMLlDYoy83vcmAiEAqRGtYDooN%2FGO4eY5Rr%2BpYUjpRrb5gxRX0XTOcab%2FHSoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDO0X%2FG37fIE4bE1qBircA3n40GMwFgLzmC2tWGSmg7KvM7Bwmw5tBmfr5gVV3NvidjbhernsW8WxKrUA%2BFxdEWH1AZjiX2Z7DyX6v7pJEiv%2FG8SjB6UaoKjEGhIFfps09aHBnXY3JYfyR09ODZQv8uOCUdCH6e8Foj6Dxjdf9jDflEzlmFrWv%2F71aksUyue2Z43mBJrAl5KsEFGk5yp1Nze3JobZnG3NLxO61XCFemuX6r1g8BCZnDNXtwpPWOVcdKowYYS%2B0nUk615zAh86rL9ByBKs3lMU7SuUQ8CYU0V7kETsmVLOr08Mjmn1B3jZ99MLindZqZAujWgZx4puBqqgVaCZVLkEqwx9ZQ1MyhgPxxuL3Vvs1rCK3LwI3j6VEmLdhnKWfd54ULfr7Ma6crtziehvK0R7tEvMWsNZcjO59qzwipO48TDQ7%2BZpJl0UjAvOAvNGHtKFZWVbtWOyvlorWaVbBWC6ATlu1iUk5GpIZMvH59MjynAmEpwyV7CebT1QUSnV9FkLKMcy0kDOZ5dbzzHSEsan4GvMulSSFNhT5XdOLJV%2BIdw9MsWIqM6vwsRmBEzsQZ7I1W4OcewufWKCMMgG8eqhw%2Bp0hKca1JZ%2BpKwCQk5%2B1qVUeVNLXFCswy5xkeXMXpSMemb1MN7Y%2FsQGOqUBzN3V3csZeAp%2BYV0nDqV1jz80aAiGDPPUVzKVMwYO6Nh%2FsQ5w9zapdsqVKjraadPM0HkRH4yUEMTaJ7Ok8F%2FYBvP0QXYErsjhw7ejngGBs3PRmGaqUZb8D8UKeTTAlV7Y%2FqUtqet%2BZbVCqxF87Cesgozt44fiyl1pV01SHxW34wLl69Ofivk2pQAi4JlxKzrnEJhPmIzh3ZfqMWQLA5PC5XKGu0E7&X-Amz-Signature=6b0e68f26be9dd9b315e4d4fbe8c3e7951ea71251e5ff376d80485a0a01b59e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3HMFDMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIG1oy%2FkJhSfW1wDu62rfvZKDQwQWXWSGMLlDYoy83vcmAiEAqRGtYDooN%2FGO4eY5Rr%2BpYUjpRrb5gxRX0XTOcab%2FHSoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDO0X%2FG37fIE4bE1qBircA3n40GMwFgLzmC2tWGSmg7KvM7Bwmw5tBmfr5gVV3NvidjbhernsW8WxKrUA%2BFxdEWH1AZjiX2Z7DyX6v7pJEiv%2FG8SjB6UaoKjEGhIFfps09aHBnXY3JYfyR09ODZQv8uOCUdCH6e8Foj6Dxjdf9jDflEzlmFrWv%2F71aksUyue2Z43mBJrAl5KsEFGk5yp1Nze3JobZnG3NLxO61XCFemuX6r1g8BCZnDNXtwpPWOVcdKowYYS%2B0nUk615zAh86rL9ByBKs3lMU7SuUQ8CYU0V7kETsmVLOr08Mjmn1B3jZ99MLindZqZAujWgZx4puBqqgVaCZVLkEqwx9ZQ1MyhgPxxuL3Vvs1rCK3LwI3j6VEmLdhnKWfd54ULfr7Ma6crtziehvK0R7tEvMWsNZcjO59qzwipO48TDQ7%2BZpJl0UjAvOAvNGHtKFZWVbtWOyvlorWaVbBWC6ATlu1iUk5GpIZMvH59MjynAmEpwyV7CebT1QUSnV9FkLKMcy0kDOZ5dbzzHSEsan4GvMulSSFNhT5XdOLJV%2BIdw9MsWIqM6vwsRmBEzsQZ7I1W4OcewufWKCMMgG8eqhw%2Bp0hKca1JZ%2BpKwCQk5%2B1qVUeVNLXFCswy5xkeXMXpSMemb1MN7Y%2FsQGOqUBzN3V3csZeAp%2BYV0nDqV1jz80aAiGDPPUVzKVMwYO6Nh%2FsQ5w9zapdsqVKjraadPM0HkRH4yUEMTaJ7Ok8F%2FYBvP0QXYErsjhw7ejngGBs3PRmGaqUZb8D8UKeTTAlV7Y%2FqUtqet%2BZbVCqxF87Cesgozt44fiyl1pV01SHxW34wLl69Ofivk2pQAi4JlxKzrnEJhPmIzh3ZfqMWQLA5PC5XKGu0E7&X-Amz-Signature=d4e7d3517cefc55258210edfca971b52e10049b2b86dcf48673fa545fc72657b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3HMFDMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIG1oy%2FkJhSfW1wDu62rfvZKDQwQWXWSGMLlDYoy83vcmAiEAqRGtYDooN%2FGO4eY5Rr%2BpYUjpRrb5gxRX0XTOcab%2FHSoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDO0X%2FG37fIE4bE1qBircA3n40GMwFgLzmC2tWGSmg7KvM7Bwmw5tBmfr5gVV3NvidjbhernsW8WxKrUA%2BFxdEWH1AZjiX2Z7DyX6v7pJEiv%2FG8SjB6UaoKjEGhIFfps09aHBnXY3JYfyR09ODZQv8uOCUdCH6e8Foj6Dxjdf9jDflEzlmFrWv%2F71aksUyue2Z43mBJrAl5KsEFGk5yp1Nze3JobZnG3NLxO61XCFemuX6r1g8BCZnDNXtwpPWOVcdKowYYS%2B0nUk615zAh86rL9ByBKs3lMU7SuUQ8CYU0V7kETsmVLOr08Mjmn1B3jZ99MLindZqZAujWgZx4puBqqgVaCZVLkEqwx9ZQ1MyhgPxxuL3Vvs1rCK3LwI3j6VEmLdhnKWfd54ULfr7Ma6crtziehvK0R7tEvMWsNZcjO59qzwipO48TDQ7%2BZpJl0UjAvOAvNGHtKFZWVbtWOyvlorWaVbBWC6ATlu1iUk5GpIZMvH59MjynAmEpwyV7CebT1QUSnV9FkLKMcy0kDOZ5dbzzHSEsan4GvMulSSFNhT5XdOLJV%2BIdw9MsWIqM6vwsRmBEzsQZ7I1W4OcewufWKCMMgG8eqhw%2Bp0hKca1JZ%2BpKwCQk5%2B1qVUeVNLXFCswy5xkeXMXpSMemb1MN7Y%2FsQGOqUBzN3V3csZeAp%2BYV0nDqV1jz80aAiGDPPUVzKVMwYO6Nh%2FsQ5w9zapdsqVKjraadPM0HkRH4yUEMTaJ7Ok8F%2FYBvP0QXYErsjhw7ejngGBs3PRmGaqUZb8D8UKeTTAlV7Y%2FqUtqet%2BZbVCqxF87Cesgozt44fiyl1pV01SHxW34wLl69Ofivk2pQAi4JlxKzrnEJhPmIzh3ZfqMWQLA5PC5XKGu0E7&X-Amz-Signature=f70a68459be77061256fbc6f4a3316295badc316213de3bca151575baed1daf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQA37LNP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCzobL5NW%2BgNS9h0P%2BV1s7tHjfZDCRob4SzTEpSPdSNKAIhALmpd5CjYnpcIz%2FHcwVHvVfl50TZwZMhZusfVCBv2gPQKv8DCGcQABoMNjM3NDIzMTgzODA1Igws2Vh1odsZEjbB6toq3AOC4yL6uKida3N9c%2F6lVZWcr693rgkWcPlQfoJucjA2qRMWpm8sOtSH0jfUq4Le8brr%2Fk6nzyLxGZI1zwUM9YYCZkooO1ZchlaWMyLYRM8v8fbu6l%2FH3%2Fs7nNRFnMFKCKaH%2F9HEF5oQjqed6ICOf3hPmnDJjgqZXV7dlUqwqL0Gz2iPR0pWbdbvWI9lxF6yQPg9O8pJCmunjL4bhYo384aryq6ZcuQjHlcexBEzxvftU9qeZOVGivTY%2BlOa53%2BCDbrx5CctXUByfpiy2J9Cr%2F5IoZL8175MwuCSAWg%2FLWIqg25uHbFKQ6Hqea0raZb%2B3nJiAcOTqAWkd0FQHjh4oGVf%2Blq3zS%2FmaqLAHtYSPEu3C0m0k2PDdqWssMzgsaeNwXpLvNiV0NSJIX0e8BvuHkRceHwbbk0IasFQes6IOLI%2BRzLLNh52Qxb8gPsn%2Fd1kaAiUA%2B5N6cM5yXGRIyz6dGS6DU5Epjtb%2FAFemmw31Rbt%2BdkRilzP6Vs%2BkRQPa90xHjchY0dvEK8wTdAproamql9guZDAbg%2BP0dFc87I6ss6gts9zUP4yT2KV%2BtyYvbJRGS5i%2F%2FXv05SwkS2%2Fb%2Bzugx8j7VfJOPOgUOVsloZsAPnuoFxLCasvEpuqGALMWDCv2P7EBjqkAV3KR0B60bV6g9Y7n3WRGdHf7tEi%2Flb0ZoYMwT7WtINaNYIK8txHE20HEj74W8A2xc7xHaqbwvtceQ%2B6I2R7c9xCEIDSo4BudxSWxgNcEi8DPi5MgkJV0rWIW%2B4UW7twEtGnNcyHcR98sFKmpFZfrVKLmvKUa%2F1R%2F6pgTXS%2Fwjit6wF6NdkSiqVcQ8vC0jPJXXHBW0aJgkXMwQOh2iwyAmvKkGKL&X-Amz-Signature=6db8d3bed62b3c0f06ae58e8ef0692ae4c5deb4c81eefdffe32565b283dbd25b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHXVWH5S%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDWX8oeBwXfDeGHeZbi82ZcRdyfrO3Lkwkpxdox7uR1WwIhAMWKQOJZKJNUUHS4jzHKkmS7GHSDiIRRgWEMerL3689wKv8DCGcQABoMNjM3NDIzMTgzODA1IgxjZMyZddTpsOQzyfkq3AM0wP1GgGeA4lkPKg%2B2tzRHhlNzr4FMckViJfoAbPl7fcMMXwto9qdvhNeh3IvzvYWK4SsLC0wjWPlPR0nKsFq0aj0jMsH125mVixd98mp7bdnLbyzNiKI1W48%2FTDKvxazRd%2FuCWYhE8BaG7QhhGaHzZccq%2BVMOcdEHZaru38Rz5V7%2Bs%2FDtdyj9Gfv63vCHCknaVnTMZThKd58cMOZqZZVsrI6%2FYMKv2NKYLmj19D%2F6xnr3ZmvGaW0lq4XmXUwLgH8ebvtM0imAWgzHt1XfxpKHWBqbdEL8dn618VMhjBA4HrVVmiUsLdyieA6tosQEed4wmC3hXneIWCB%2F%2F%2BqCbjlyrOi1S5pNHMYuYh4aHk02svetrNhYSpIwBDmuL6fF1f0VW6UJFphUW5VFniJ8Ymwgst7A4oe%2BePXWsBKDWtgNLGVNTPoyiT%2FXBx5JGIOn6%2By%2B59ZFiNXkkeMFhfibTEhjHaqX6FZHf6Y6XuYZutZ7gpeJQKSJqrzfQUI2r%2FgyADqIfWUYeBVco82SdeTUrgMUZFjqP4XvDwMQ0a5Jk1l%2F15bijEUpj5PhMG5KeCwRyGJhN2JuiBV9sjFdiCKQdZY7dnqpXM9S19aS8N3H5TKSzf5Y8KBM26Juh4UNXDDu1%2F7EBjqkASw%2FD3wdKRrVmuNtZJHYEX2sBAr9DH9%2FJc15O3iuivpAdeCJaxxT6LfCuHt3qk8imh%2BB0azb24OxtENuvtvLyTOP5SymVN5l%2B3SUpLOPFgzgGReQURBAdIASH3bUcqveJyje1KNWPi0TwZYnEufYDdxh88CN5vhCaDNbo1bbkJhGbA2nSqsqkRHFNWgGp1TJr6l86RkPado8ZHLg2fPXgec0W%2FDE&X-Amz-Signature=10342ad7c77bfa4a229f2d69ca4194b2386fc39629771f0ce5e79059df011ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MZBC23U%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDtq8l3ev1JhJGiuBUqmZXmVtLnT6uzWfgYTsZ3yJpLOAiEAkhtj2CslVC1RykRkeBofjxbYu%2FlzWggG5Bgn7YrAsycq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDPTXwXoHHG%2BjvZH5vSrcA4qZ7%2FZ3KzWkgI9YdH%2BiryTubP1y0xlWwjJOydVZV07dJfNfwpVer760%2F11ZWLou7DupP4Z2x3RwWNa6LpIYXdpLQ%2FbI2fmH%2FvZnZFoEpuCjzXU6wDHgfCdh%2BuLzpaSVakrH%2BK7yuPaGV7VnRsnO9tSoSR72Z7FzwMHPxHxJEPq4WfSkn%2BSZHpJqZPf3LNOrDxtIWJ5r5itYu0dMfbEctnu0mCeOGw19Epj1fJgEgi0JYJzJ6%2FLsPzBIaFZ8eOXqLR%2BMxcj2VOW0xXqDxX32NKUoEq2PiFWfXbs9%2Br3ntyn7pqrFyXpJX1IS2v5JlCktcoZZdllLh21yYZfBTZ96hFWeHgqwQCxIffAOFys80e6wb2%2B%2Bx8AeX56OeCpy4JetBYkkTSUWCBhishlgy9WkQKxFtpZMt4emAC%2B8dQUPtJKtHSnu3lOCigMcz1hta%2FYN6LVpCUSXf4ydtEHEv%2FYpeaVfZTib0zcqcXmZqCJ7eZngIEi1Od9P57Bx2CpIVptd%2B5B7cMcjexWqx4EWj%2BAW2YwIv3hUK4wwHQh0kU4LJxdJcYGpTKpGrNQH8VNYnatH5JQw1T92MpLiTFnY%2F27bROwvi6lCpe4qtQo8c8oenuSXmlzi53t9MkABCgUNMOfY%2FsQGOqUBmh3Ym0xefvvnHmXPk1OGEoYwpOVa7rk32BBcAt6lp%2FJWlWgaaChBGDDmwUSZXnk9MvCF7jgRX%2BLzU0%2B9Dq00Pd9eGqVt39ExsYxpvohIY0WRJ%2BqXwB0GznObNHBhcv%2FGPZPsfV7t85NfY51JwGadA0ieoFOKJijN3jJ9xZ7DxOX96vc7fSaVPYvCrJRe4q8K5Wyfj3s3fASW2%2ByVDAiOQrW3Q2WI&X-Amz-Signature=b57955c40c05c83606c290ff46b938e0bbddc92319340917df4d3a0f8fc48cb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3HMFDMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIG1oy%2FkJhSfW1wDu62rfvZKDQwQWXWSGMLlDYoy83vcmAiEAqRGtYDooN%2FGO4eY5Rr%2BpYUjpRrb5gxRX0XTOcab%2FHSoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDO0X%2FG37fIE4bE1qBircA3n40GMwFgLzmC2tWGSmg7KvM7Bwmw5tBmfr5gVV3NvidjbhernsW8WxKrUA%2BFxdEWH1AZjiX2Z7DyX6v7pJEiv%2FG8SjB6UaoKjEGhIFfps09aHBnXY3JYfyR09ODZQv8uOCUdCH6e8Foj6Dxjdf9jDflEzlmFrWv%2F71aksUyue2Z43mBJrAl5KsEFGk5yp1Nze3JobZnG3NLxO61XCFemuX6r1g8BCZnDNXtwpPWOVcdKowYYS%2B0nUk615zAh86rL9ByBKs3lMU7SuUQ8CYU0V7kETsmVLOr08Mjmn1B3jZ99MLindZqZAujWgZx4puBqqgVaCZVLkEqwx9ZQ1MyhgPxxuL3Vvs1rCK3LwI3j6VEmLdhnKWfd54ULfr7Ma6crtziehvK0R7tEvMWsNZcjO59qzwipO48TDQ7%2BZpJl0UjAvOAvNGHtKFZWVbtWOyvlorWaVbBWC6ATlu1iUk5GpIZMvH59MjynAmEpwyV7CebT1QUSnV9FkLKMcy0kDOZ5dbzzHSEsan4GvMulSSFNhT5XdOLJV%2BIdw9MsWIqM6vwsRmBEzsQZ7I1W4OcewufWKCMMgG8eqhw%2Bp0hKca1JZ%2BpKwCQk5%2B1qVUeVNLXFCswy5xkeXMXpSMemb1MN7Y%2FsQGOqUBzN3V3csZeAp%2BYV0nDqV1jz80aAiGDPPUVzKVMwYO6Nh%2FsQ5w9zapdsqVKjraadPM0HkRH4yUEMTaJ7Ok8F%2FYBvP0QXYErsjhw7ejngGBs3PRmGaqUZb8D8UKeTTAlV7Y%2FqUtqet%2BZbVCqxF87Cesgozt44fiyl1pV01SHxW34wLl69Ofivk2pQAi4JlxKzrnEJhPmIzh3ZfqMWQLA5PC5XKGu0E7&X-Amz-Signature=913e5047b655fc1a6b5c2d6b3942dc4393d532368fb12f68436b5e350c003b20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZWMGJU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCpSOsiHSTBhIptcm9ao%2BbaxaUWZ%2B4CBaSD0NHSbM4JlAIgYVW3cqJl5Z5l4r4seW6Iq7B%2BH44zLat3eaOrIDuL5O4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDAUjZjGzq%2FyRPgxKayrcA9foPoSPJySNGiJwGN%2BZ7Gk%2BsDU65ttIA%2Fej385mN3b%2BuMiCzubrJnpGRQsmAY%2BzpYcpkPt8AtBTAX%2BPEXKFABZNM8aq%2BqS5Qv28e9msY9PtBT8ZtCQCE3fvvOewaGt5Yad3atwBl9obC293E8gaGP6xLU643sLgLiEzrQDuEl0EQP9ZsbyYCHk466YIZpCAqbB6LjL%2Fr0HxGu0NiwxvynLF8Hm8c9jjqzaKbSgMtzwWKrTYX5Z1ZfkkJvm5pOCuIIaUVf22WbeLCaVtx6kw6xUysjA%2B8YPgZJRGOiDL8PlM9DlSPm2LnkhC44wfOpcmQQiJu%2BrI9spFvYtgC0uMEIW4hVpZFb6WbaFEm1urM53CPrPBhUrw7aDYh%2BMvK22tolaX3JdsLxBYzp0ef5%2Fwgf%2BIil5SVIa0qd7t9jUvVIXY6s%2F6KWoS8JPqO65gqfdGjuCyrVfBhjze8uc4obLS4n3x5REEKPE%2B4z%2B6HqtHFu5c7tQU2HkY5E0uxgFvCgZ9K0ACD4EMQY7ZEKMAbbk379GI2OXPV6mQTmYz6FkB8mKjx%2Fldf9J9y26eSVk8oExoPszPFz2z%2FSXwHVbAvkgYeg4HSHnWpYUPHVO1NORLwGOzfQndQ6vTLp4ZxYSzMIjY%2FsQGOqUB9xTWS4nHstJtCeHl89FLDxA01EsnVveVW9EG5c4wBDVTekl%2BXuvlFDniO7VtHzFs2bsj47oh%2Bb9mRWozv4gq80BAzeADVgOEBbwgy6wuU4ydMgKEIRNMSIHSV42pKbgJHwYNJfpGuS0WownSNEXz%2FmtedB0xt8eiLvo61st%2FQ1nj36FtllFY9vLDrB%2FatNV9Sl9246Ey0Rxoq0OrPdyr0Vigya59&X-Amz-Signature=7aced6aaee4e5afd3ac8176a7f7e23d9d549c6c0e11e7406917bb13f59adccef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3HMFDMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIG1oy%2FkJhSfW1wDu62rfvZKDQwQWXWSGMLlDYoy83vcmAiEAqRGtYDooN%2FGO4eY5Rr%2BpYUjpRrb5gxRX0XTOcab%2FHSoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDO0X%2FG37fIE4bE1qBircA3n40GMwFgLzmC2tWGSmg7KvM7Bwmw5tBmfr5gVV3NvidjbhernsW8WxKrUA%2BFxdEWH1AZjiX2Z7DyX6v7pJEiv%2FG8SjB6UaoKjEGhIFfps09aHBnXY3JYfyR09ODZQv8uOCUdCH6e8Foj6Dxjdf9jDflEzlmFrWv%2F71aksUyue2Z43mBJrAl5KsEFGk5yp1Nze3JobZnG3NLxO61XCFemuX6r1g8BCZnDNXtwpPWOVcdKowYYS%2B0nUk615zAh86rL9ByBKs3lMU7SuUQ8CYU0V7kETsmVLOr08Mjmn1B3jZ99MLindZqZAujWgZx4puBqqgVaCZVLkEqwx9ZQ1MyhgPxxuL3Vvs1rCK3LwI3j6VEmLdhnKWfd54ULfr7Ma6crtziehvK0R7tEvMWsNZcjO59qzwipO48TDQ7%2BZpJl0UjAvOAvNGHtKFZWVbtWOyvlorWaVbBWC6ATlu1iUk5GpIZMvH59MjynAmEpwyV7CebT1QUSnV9FkLKMcy0kDOZ5dbzzHSEsan4GvMulSSFNhT5XdOLJV%2BIdw9MsWIqM6vwsRmBEzsQZ7I1W4OcewufWKCMMgG8eqhw%2Bp0hKca1JZ%2BpKwCQk5%2B1qVUeVNLXFCswy5xkeXMXpSMemb1MN7Y%2FsQGOqUBzN3V3csZeAp%2BYV0nDqV1jz80aAiGDPPUVzKVMwYO6Nh%2FsQ5w9zapdsqVKjraadPM0HkRH4yUEMTaJ7Ok8F%2FYBvP0QXYErsjhw7ejngGBs3PRmGaqUZb8D8UKeTTAlV7Y%2FqUtqet%2BZbVCqxF87Cesgozt44fiyl1pV01SHxW34wLl69Ofivk2pQAi4JlxKzrnEJhPmIzh3ZfqMWQLA5PC5XKGu0E7&X-Amz-Signature=43ea80ae73378562a168896f053b40cae6b489b3bf1eb59f36fcfea3de3bb7ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNTIEPSB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDm78CGxqt8TpDjibGExtNf8qpNxBfkSyAF6hr2JdkQuAIhAMjbtJWwA%2BquxDrNBYb0Lxw5%2Fx5AA2o2kcG2SXif70RLKv8DCGcQABoMNjM3NDIzMTgzODA1Igw1lrLQu%2BF44V2%2BlKEq3AO7y6qtvC92bMtggaMwaxI2tS0GM346fGfRo%2FroPjRlKA3M1IJ8m6SGzTiFj6maJtChHu6x5FITsU3Yn%2BOMPJVS8s4xLzjGB2TPIebHmJun3LddIG0DmW3D5WlH4hS4BP6Z3QniV3GVpCyxd0dpkTJ1JI1YI80Tq9J3sqWBhcVSzJlmdmMkXAqS0%2BUmAKX%2B%2FlihNk22x8C%2BJuqcHEPN%2FD7NiW94RV8QZQIwdPQKuYTE8tdEbE%2FIegfuKwLHHLB2QkcBksi3KJnSJHhfT7WkOLotDYdzquhUwkJr%2B%2B45m26cPcxsiyvZ9ceWFqeExIz9TCH9fLGtPYnvMgoPHiI%2BBHCwrZ3H3q%2B4U3coM%2BB7oSSbqsyfxAPZfgOWxRpueN2AxkdOmV9UCogwsGaJm3FZKofSnk9zRKBcPmB%2B3FzR%2Fvow6uGL2yx%2F2RbuIUd43RXjwTHe7fYr%2F4nCtvcE0UdRV8wMwvjkHytrrQ%2B%2FbAfq12Pop7s3WCIyu3SBuyD%2FVIN8Ju116QsOv4j%2Bbj2z96d6NXgqexg9%2BRoSsJcSnX6oHRaK3%2F93DAK9xt%2Bq%2FT%2Bxwnbp8iLfHCi2fxs30K5AwUmjMwoWcgOSTNnxNSecxGuFrDZlJcxg%2BuOCsD0U%2B3bOoTD81%2F7EBjqkAc5BwTGmcLoUDsC1G4uoGvs7dyMI4Dc0BTAOywyK4CyOfuacG%2BR3sb1iej2sbD%2Fn5Dr75XltXPnf0QZ1mippd882RAX3LlbJjcJ86qdTfwh7Cm8rbvtteMoRB6JhxEcinMzPAXGY1cVF1ixvJkxAWg%2B1wxN4t0Lw1O1p8RC%2FMDl%2FIpLVOKw%2FtYH%2FCuwbiPxo21OyXtCgbSgOI7RnTFXbTQZf1Tva&X-Amz-Signature=b336bd901d01be407d6dd512c978e815d8255170f526d297d206b00f0d05c82b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3HMFDMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIG1oy%2FkJhSfW1wDu62rfvZKDQwQWXWSGMLlDYoy83vcmAiEAqRGtYDooN%2FGO4eY5Rr%2BpYUjpRrb5gxRX0XTOcab%2FHSoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDO0X%2FG37fIE4bE1qBircA3n40GMwFgLzmC2tWGSmg7KvM7Bwmw5tBmfr5gVV3NvidjbhernsW8WxKrUA%2BFxdEWH1AZjiX2Z7DyX6v7pJEiv%2FG8SjB6UaoKjEGhIFfps09aHBnXY3JYfyR09ODZQv8uOCUdCH6e8Foj6Dxjdf9jDflEzlmFrWv%2F71aksUyue2Z43mBJrAl5KsEFGk5yp1Nze3JobZnG3NLxO61XCFemuX6r1g8BCZnDNXtwpPWOVcdKowYYS%2B0nUk615zAh86rL9ByBKs3lMU7SuUQ8CYU0V7kETsmVLOr08Mjmn1B3jZ99MLindZqZAujWgZx4puBqqgVaCZVLkEqwx9ZQ1MyhgPxxuL3Vvs1rCK3LwI3j6VEmLdhnKWfd54ULfr7Ma6crtziehvK0R7tEvMWsNZcjO59qzwipO48TDQ7%2BZpJl0UjAvOAvNGHtKFZWVbtWOyvlorWaVbBWC6ATlu1iUk5GpIZMvH59MjynAmEpwyV7CebT1QUSnV9FkLKMcy0kDOZ5dbzzHSEsan4GvMulSSFNhT5XdOLJV%2BIdw9MsWIqM6vwsRmBEzsQZ7I1W4OcewufWKCMMgG8eqhw%2Bp0hKca1JZ%2BpKwCQk5%2B1qVUeVNLXFCswy5xkeXMXpSMemb1MN7Y%2FsQGOqUBzN3V3csZeAp%2BYV0nDqV1jz80aAiGDPPUVzKVMwYO6Nh%2FsQ5w9zapdsqVKjraadPM0HkRH4yUEMTaJ7Ok8F%2FYBvP0QXYErsjhw7ejngGBs3PRmGaqUZb8D8UKeTTAlV7Y%2FqUtqet%2BZbVCqxF87Cesgozt44fiyl1pV01SHxW34wLl69Ofivk2pQAi4JlxKzrnEJhPmIzh3ZfqMWQLA5PC5XKGu0E7&X-Amz-Signature=871d81983f389c3b10a3e0721a2bb42ab2000b79c862b887faf682190fd46313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J25JTSR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDHLPForGBYc6YYDvBra8ixXWfv8v4Ls0lovw1AlP%2FEXgIgFZTW2XNeZlhmen7IqTJvocefyJW2wCp4YiVgKkWM7b4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDBbBBcJku7kTgTz2cyrcA59cC1mWzRgN9aThf438XJEBgJeAaBPToADq04%2FuIdLIK6F26p5XrA1m6qc2VX%2Fh290qyLjjUeiX0zlqtq1IEWbcFmXdBi7BkTgoQ5Hlc39hzIFESF3Inyl%2Bc0qHEzm3iK56bVhSQ7DviPV9dWYWl1kue%2F1szWPidRqy5BYJipDK7jeco13bajWmJqdaIsaavMw59t9YxNaLFPwGAcdAWsfNVxuheQN3Zycn8jWdkhCpKYSGc72Rkl6KfRoY8pMepehAGwZJq39sRu5pLV%2Fd2vOtJ0G79xS3hGMN7bPXbcI7a09xFPIIWk46c5nIKgkrVahQszrqWjuOnFD5o4aVugAKctobi4dUzcZtP8jJVpIwV9OdbOVxyxKUBnm7%2BgsKtxoagfO6R%2BHu4Pp7nbFUlg64jrZKiNbbNrgUcQn9gWsZ%2B8NkizAr7WLIdQNljjTpvSxZVMn2OtiEgSANLJqDoBZwTMo7hSXbxViR1cZ%2B918PzY5LEfPyP4VXQhm3RW2LNkpEQFHLM%2FZpw8LP%2Ftmr%2FiJKSD8RAURgIfKE34D%2BYiMfZtA5QBkNgcezpdFt3kw1BNXQOqQ5eJLtRQaee%2BUXTFrzV%2BSxFC8iVF5FiZlOuPYEApaP3ZtqdyRfam2oMN3Y%2FsQGOqUBcogEfTS7Fzfv%2BbozvBhp51kogk7CHeWSrBRmx%2FzO96lL7FQav7m6X8Qnk3Zh%2B5tE77sUEO4x%2FWtEnCFCjRKMsIzVtxrDoRzKIocWRvnkgBn4lXT9ONePN0y7F9nleOFeJVFO%2Fy3zCcEdieTw%2FOB2u59rx9VlbiDuNE3P%2FcXUSqLYInmF%2FvK%2BhCqLj4v04lrEAY50GucpwBxIQuBn%2Bu487Q4FSNtU&X-Amz-Signature=0102ce7fbc330edbb40ff5b129f8c31f6ede4e122ebb17eb9feb20c17377aa96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3HMFDMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIG1oy%2FkJhSfW1wDu62rfvZKDQwQWXWSGMLlDYoy83vcmAiEAqRGtYDooN%2FGO4eY5Rr%2BpYUjpRrb5gxRX0XTOcab%2FHSoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDO0X%2FG37fIE4bE1qBircA3n40GMwFgLzmC2tWGSmg7KvM7Bwmw5tBmfr5gVV3NvidjbhernsW8WxKrUA%2BFxdEWH1AZjiX2Z7DyX6v7pJEiv%2FG8SjB6UaoKjEGhIFfps09aHBnXY3JYfyR09ODZQv8uOCUdCH6e8Foj6Dxjdf9jDflEzlmFrWv%2F71aksUyue2Z43mBJrAl5KsEFGk5yp1Nze3JobZnG3NLxO61XCFemuX6r1g8BCZnDNXtwpPWOVcdKowYYS%2B0nUk615zAh86rL9ByBKs3lMU7SuUQ8CYU0V7kETsmVLOr08Mjmn1B3jZ99MLindZqZAujWgZx4puBqqgVaCZVLkEqwx9ZQ1MyhgPxxuL3Vvs1rCK3LwI3j6VEmLdhnKWfd54ULfr7Ma6crtziehvK0R7tEvMWsNZcjO59qzwipO48TDQ7%2BZpJl0UjAvOAvNGHtKFZWVbtWOyvlorWaVbBWC6ATlu1iUk5GpIZMvH59MjynAmEpwyV7CebT1QUSnV9FkLKMcy0kDOZ5dbzzHSEsan4GvMulSSFNhT5XdOLJV%2BIdw9MsWIqM6vwsRmBEzsQZ7I1W4OcewufWKCMMgG8eqhw%2Bp0hKca1JZ%2BpKwCQk5%2B1qVUeVNLXFCswy5xkeXMXpSMemb1MN7Y%2FsQGOqUBzN3V3csZeAp%2BYV0nDqV1jz80aAiGDPPUVzKVMwYO6Nh%2FsQ5w9zapdsqVKjraadPM0HkRH4yUEMTaJ7Ok8F%2FYBvP0QXYErsjhw7ejngGBs3PRmGaqUZb8D8UKeTTAlV7Y%2FqUtqet%2BZbVCqxF87Cesgozt44fiyl1pV01SHxW34wLl69Ofivk2pQAi4JlxKzrnEJhPmIzh3ZfqMWQLA5PC5XKGu0E7&X-Amz-Signature=7815716db0f52497f06e07a6fe22f87ca14404d5fd6b1ebf82ef06e92dcf874c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSD4OU23%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T221000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCb90foq3ONjc9171cGS9WAdxw1cvpx4Mn%2BAojrBvOwhgIgeoCIx4KzjSH5sF81LWFI6tdTfraFKyC40aP9g1D2Vdkq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCkRWBYs6GH0QPVzqircA2kaR2KdrvFYoe7mgWzn8%2F5GsSYI%2FZRThb0AlJRNpEuot1QaFAzR5Vgt%2BWlL%2BIVFwr0U2lU01MikDUIXQdbkUwSyaAHKAdVTJmLdvSVld2eM119FRBfQTKZ7lXxRenmCNK3oAX8fj4sKdR9QBYlG4yDOKrR65jn0bAOLxHHxqNaHyEbIhCVelmxFP%2Bdgh%2FzEZUyZWsNS%2B3bYVCeTgrHMon%2FKBROm2AN2uzFi5be7yQGrxHGtFmpG6e%2BnP5tGIbPOfCyt8MhD0HAJsybLUoVb%2BcqoKz%2Bw5iTBxy2s8eKlETw18EBxXG2QOMeFsi84Ucao2in6Jndu4N55jIlrbRzG%2FUE%2FTSIzoR9AF2AzHwhe3XGMB2rKHUBp7bsv8S%2BkinY0cIyjsjh90cnluemNtbWLwYjL1GRchayF36McAaO6hV4D0F%2FngjPnkjS4sHhnsg83LKQvZ7oTBPSq%2BWYHcQ4BltufmOvHja4W5pL8%2BXIQl8v0ttta14LtMpMI4Dby9Rh%2B6nfsKSNXafv5HSQ50dvY%2BDdnIkTJJ51wOLkKJWpk3X8FtppoRc0IyDa40t0Ykzjr7CnqMOEhTDQAMb%2BSunxx%2Fys55PjSaHrJm4nRBwR3%2FaHG8Z9%2FaAJy7TlPeq7lMMjY%2FsQGOqUBrLdWDR7v8eAt9qk%2FMGQ6vsZ%2B8bx8hQpe2233HmImTTtaImRwOIyPLNBos5s1c4xPbYpnK9nIw3ruWC7Lb6DUs7XylSUE4Y7EYP6fNWG%2Bsc40QId2W6EA76Z0dXO%2FTi5HncEsu8mkG%2F1fjdj2D5XnW%2FkdWj90AfDHO7U%2BxsD0KNjvaei40tf4mezVXnC0gI%2FZ%2FeUshrUMFEtU8VW6OaneG0jkfm7F&X-Amz-Signature=00ad8c1af479704a48f1873ed301e1d099f7c14e8ac3ac95c89c38fdf1e48ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIOC3MOT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T221005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICik2pqdUMD%2FPq6HB%2BgU9fh7pyX4DDa9BJDzpB1D6ysmAiEAhCa8XUycyC3avUGIxWt1pSpFoK0WUeGbcY3JSTFwZrcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDA3bbZfrIBRg%2Bi73uyrcAy%2FCP1zwTWoVT7QufMFgV0adlWx7gnpfThulCtMIxQVyYkI%2BdgvNVSWCNIwsIVIx5BUDdcl0r0SuFOwBHWmWOV1vKl8dJi%2BdGEvz38JfdfHOO30wn1cQYLCxTWtExKJqs7Q4jQ6XNzmTM78vdD1olStbRJ184x9aoYq7aQkhECUT5AKs7qWauUARGLhRqtaKiAlalNo0r9245YOIhO6vWdXi52pmmlsvgC67%2FugmrmJ0cIidfZlNZfomCbXKhhoNTUm%2FlbPYQ92OSk0PyNpAvN5mOkNChgOY9cyepXnNLwlWc3d8SQ9yHxA6c7sdJ7WUlipP5fnMzvzs69awWsgAc5bsmtFe0Uf0omHaP4ubvtCA3DJd8DhO6S%2BspbiZ4CNONMvU1h9Lfjsl1gwlTlmMUdDCOgWb%2FUrFO7maL8G7pzGZnpgwxrRPETHKV5Hh1sSuU19N2%2FGzu%2BJo4fYHW2UyQmpYexR3qBnbvb2Fj9OHaXc535fmNFkhrdKJYN4OdYllb0osnvC5hfx1WBjh6f0CHt98SgejhZqlmkShp%2BsGGSPsv9JS9CKyPwyvQYnta8bVcPxBUdaP3Rh9%2BmS73R%2Bzx%2FijJ686miIXaPKlCq%2FeDjJzW9cPZSKsim0y4JEfMI3Y%2FsQGOqUB1EIaKHV9OitXKV74ezWbSZy38SCwASrzokpzn5QZFPoevHjehF5Lns7W0gsp%2Fgc0osQH8td36CyFipgwJuj0h64Q%2BtLszj4hUk3%2FaiWiFZIlU0Yc%2F%2BD1%2BlquXDeJiea02IbCrCvFoS%2FQyVjOuINlzzNgZ3aA1P%2F926rkZ3rGIjf7mXq6ITHSLHh9Aie6cUEtaPk8i7Qd1tPZ8BN6JQ8T6VtStlXK&X-Amz-Signature=51de351a6552e67927200795967a10930f7322cd31f41ed26bd50866e6e7fc41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUBTOQVS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T221006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCcQ%2FMOYw5lVgyfJxFLLFpntxB2TLulTaCDmGVXjamAOAIgPbKIYq5Tk5PYRKo68vsCRw4cpaYOAgD6LPkND8f78fkq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMXcfye20io2Ed24NSrcA3VOQXF3CQg%2FpOGyrvtvuGvKE%2F7LNzZvRSC1kzyZ7jLA1AppDHbPpMn7YPO2ebugueNmuLqK0w5BKMN84pd%2FRXHY65k%2BDfEULUop6TrLuWAoGhCJ0ccj0GChGRCyuecgFORsc3ps2RQVRuYfLRaoJ4kk5tjw8Q8ABiFWXUrwz9yvRcnhpsG7WpM9dnwdg3bw1bDHKdTQxmA%2Bg8j7eIuCg0vW%2FFR3%2B6i01XDQYEplnc02YQwux85%2BMwOpx4FCPW4fRkrzFlseaDHRr0T%2BO9OtN9xE1KH9sZRsyTPf1E7lvh%2BS9wBSB1SV3OnPNhPCgwKZ%2FxmhzQiwvoUeaThVIn4sG%2Bx%2FSUpeS7DCrScoR7gZ0Bg11kpAslRHjhBLpbY7iu7SZZpRqU1VPTeWPPAgPw7haVHa80PbMpFbX40DbLc%2BXyzGI5YpkisVoX0O6UDa7J%2FOODBazcmuRri6egzd8my3MztjmzbAxypRZjlLjLjcyuFz76x5ChmOoGfojWBzznH6H50GSHhNwJOCgLs7xXva5cpUSwr0JLs3Wt9%2Bj9zpJSR9PNxlX5QiqdtmBnroVRa%2BjRFIMPM7L%2B7CFyrChVGom4djTiK91EvL46rSQTl8fyghj1wDJP9mhwaA%2Bs%2FSMP3X%2FsQGOqUBzpgfWZ8atowlYHPoXsqO3jkl1YycF5jNQdJDzZCTxdSLjnB6roK4rFNTxE8%2FIGLNit8mkrFhIoOLAYaPaQ84H5ruyHhNJRyonbD85sL6D9zPkD0IhyC2mt7RL7OFimxGPdIli0sOBLzqxwK%2Fe6An6ZsClRC07GpAaJd%2FYsSxkVwKq1Qp%2FE0X0c2f3fwJTtqWNuOyE%2Bv1fK4EvUad71zR2TgrslJ7&X-Amz-Signature=f59685ae59f540f2781bbacc85962e32be36c41428b34fbddb45ae8e26595492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QSAK2KP%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T221007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCWNB%2FmilXkpyOr8%2B%2FyUq4lL44nxU8KtPkS4TGb6beAbwIgeLcKmIDKGC7FzKHxVf6IyCidN6jxLCxX%2BtXFpsAZBYMq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDK8HO6JOq0mJ8FiTNyrcA354DfeMZHVrK9P4W%2Fgr85bdztleuvUF5fhe0dnFP%2B8h7tDUSePXauNfz7BuLJv1CT7EDVhohYKC3YC1lQGC7nQbVcwDvPMjzhvVTCr%2Bb0eqjO1pnEmawV2l2EP1ZtxZXtbpSvRK0%2BXQbwKc5dSs42%2B%2BCigN9CXj%2BExYoPF1Wh08diSeQfZ4XmnH4xr7mB3f2gyDPqnWx73wXlmYg95wdcH8MoIRIVn13u%2BNDuzKmay0PjbZtXchKg%2Fv3a12dCSIDnwCCfMu3yiR0YbsTUnvwx464uBVna15XTtPo%2F6BTUZytsF9NCPb2ibB9JQAmLL5KCCKhA%2FJNli3QE%2B6pRuqiyLSqnJmoX4auUoPJfN66Fl3wo1JfXhd%2FabFysJlpHgzHXSb1EJOn%2BV1fjIkLUIgG8dklLqgIe4Y6hOBIAr76vJbAZlDKmMkECcsqXubK8MPTVs9dbyPEZdp16apIUMPAeOlp0EUuznJHh2qBFBmpbjq4Xa2uAtw8v5Xi1OJWkdze4IGbeDHG4Yu%2Fq1u5Ru5tdUtLtgTA7CrL153sE69YxBJGuamlhhldl7q29Vw8NovsXwhgQsS4zvUIQi2jIbr%2FprRnu8ebWIUDPmKLXtClec0mMktnzVGWU3qt%2FjDMPHX%2FsQGOqUB6F8geRqHNqiCnOSnSuX%2FnoJ%2B%2BVsTKr9%2FFWh4VpzoODnJI2pyxk2%2Bav%2FIE4ZmNXs%2ForeA5snkXJkGSPVW3kcKMT6H%2BW%2F1fihKLXKttcZ678d0bqMOi5AhDyXOnjVKGCUYGLwZo8edrItPsCAKwdtQINudo5i65bRi4ahC5cGkzEnOUgz51uNhK8bj0CH3LtSipWdw%2BzCi%2FjSSQV9yyZI4VukmBOq0&X-Amz-Signature=c9c4499e209acfa49ddab8d11050a0f52035831cc1ec4bcb939aa2a25ca9b592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665F6IUJO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T221008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEL9DL7gKn8xcqGIQJJHuDsxp6d1HViwx3ZRD2zTZqpvAiBNs4UOjPbEgjE%2FW79v1A5Kt%2F0CI1Jis12G3y7GExXJrCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMns0dVyyVmD9exFT9KtwDWJF6U0bA%2FZsqWgQ0WtcCOYBz7CS14kSAfOQ7oLE38OnvWEQ75hqh6nM1birfByXVqrel7dELTEOmNIY5WUQTXm9jZ1SWADFYsIE29TxrTLVBJJDAobxz%2BL9egJe8QIRxGFYGy653f7TV%2BQd8FTFAF2K52S6Z%2FchIUOFCGbRETPgy%2FYrsAURIpANGB0L5Xm7u8ayiNvJeXISFtX4zwW1ccbeCCnZ%2FUNd%2BKmwEwp%2FsGVDmEWnECF34a8x%2FXtOlVCB9g3NpDJ4t1euqoqzrd9C6%2B8m7EVwsp71XYJID2Td2Oj%2BLJtcEDled%2BZsROwl87s0jWUQ6H%2F9u6FcDAhIoZMaKH5ma0f%2FJqGDsM2wfZfGbwbZru6Ful2IolktLxYS%2Fe1tm8TQJocFCD6r33A14tstZxsTsn%2BBNcB42DcHgM0UBnfOQkvYFcaxsA00Agf2%2FqKxIjtN%2F5MQX3nLvflFm5caHSvLwzeswyC2GctmyJSs3p04Tpfq6Z6501U4s0juhYEtTnerR7%2FPkWca%2BS4QYUnRHdlOCFW%2BAIu6ONGp5j%2FKITXt1gjR9mdp5gm%2B37BGO1cHoe1VUklAXK6qGGygFnA29XZboBMxye6d9m6yvrRg9vRn8XCpBUcTsUBCfIScwgtj%2BxAY6pgHSnnZUZinIe94Q5katVTUpExRlxclH49WuSX0LZEdG1Xa6EbUNGlEF1ECeAehxBPtTyyQwYb5dRs7o0l4Nj2bkD%2B71PKZIaIrmLrRCmiTGuhZN%2BIY5v4iB6730I1rlmpl7O5IjFA4qTWwHROvMl6PJ3XAHFfENayDkjAO6nMLdh7HJ9ODNzTtRlJXbPh7yHsG7BfnFCuF2IIPiVL3a7lPP1jAqmnw4&X-Amz-Signature=58576e6e8de5035524381dd006da7d9cde7bab9f4bb5ec2c14d6511187856574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3HMFDMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIG1oy%2FkJhSfW1wDu62rfvZKDQwQWXWSGMLlDYoy83vcmAiEAqRGtYDooN%2FGO4eY5Rr%2BpYUjpRrb5gxRX0XTOcab%2FHSoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDO0X%2FG37fIE4bE1qBircA3n40GMwFgLzmC2tWGSmg7KvM7Bwmw5tBmfr5gVV3NvidjbhernsW8WxKrUA%2BFxdEWH1AZjiX2Z7DyX6v7pJEiv%2FG8SjB6UaoKjEGhIFfps09aHBnXY3JYfyR09ODZQv8uOCUdCH6e8Foj6Dxjdf9jDflEzlmFrWv%2F71aksUyue2Z43mBJrAl5KsEFGk5yp1Nze3JobZnG3NLxO61XCFemuX6r1g8BCZnDNXtwpPWOVcdKowYYS%2B0nUk615zAh86rL9ByBKs3lMU7SuUQ8CYU0V7kETsmVLOr08Mjmn1B3jZ99MLindZqZAujWgZx4puBqqgVaCZVLkEqwx9ZQ1MyhgPxxuL3Vvs1rCK3LwI3j6VEmLdhnKWfd54ULfr7Ma6crtziehvK0R7tEvMWsNZcjO59qzwipO48TDQ7%2BZpJl0UjAvOAvNGHtKFZWVbtWOyvlorWaVbBWC6ATlu1iUk5GpIZMvH59MjynAmEpwyV7CebT1QUSnV9FkLKMcy0kDOZ5dbzzHSEsan4GvMulSSFNhT5XdOLJV%2BIdw9MsWIqM6vwsRmBEzsQZ7I1W4OcewufWKCMMgG8eqhw%2Bp0hKca1JZ%2BpKwCQk5%2B1qVUeVNLXFCswy5xkeXMXpSMemb1MN7Y%2FsQGOqUBzN3V3csZeAp%2BYV0nDqV1jz80aAiGDPPUVzKVMwYO6Nh%2FsQ5w9zapdsqVKjraadPM0HkRH4yUEMTaJ7Ok8F%2FYBvP0QXYErsjhw7ejngGBs3PRmGaqUZb8D8UKeTTAlV7Y%2FqUtqet%2BZbVCqxF87Cesgozt44fiyl1pV01SHxW34wLl69Ofivk2pQAi4JlxKzrnEJhPmIzh3ZfqMWQLA5PC5XKGu0E7&X-Amz-Signature=5a3838a0be3ffa538f3c5c2fc4b93634ddbe1a1f0baf9af06db2c25b0960e32f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3HMFDMI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIG1oy%2FkJhSfW1wDu62rfvZKDQwQWXWSGMLlDYoy83vcmAiEAqRGtYDooN%2FGO4eY5Rr%2BpYUjpRrb5gxRX0XTOcab%2FHSoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDO0X%2FG37fIE4bE1qBircA3n40GMwFgLzmC2tWGSmg7KvM7Bwmw5tBmfr5gVV3NvidjbhernsW8WxKrUA%2BFxdEWH1AZjiX2Z7DyX6v7pJEiv%2FG8SjB6UaoKjEGhIFfps09aHBnXY3JYfyR09ODZQv8uOCUdCH6e8Foj6Dxjdf9jDflEzlmFrWv%2F71aksUyue2Z43mBJrAl5KsEFGk5yp1Nze3JobZnG3NLxO61XCFemuX6r1g8BCZnDNXtwpPWOVcdKowYYS%2B0nUk615zAh86rL9ByBKs3lMU7SuUQ8CYU0V7kETsmVLOr08Mjmn1B3jZ99MLindZqZAujWgZx4puBqqgVaCZVLkEqwx9ZQ1MyhgPxxuL3Vvs1rCK3LwI3j6VEmLdhnKWfd54ULfr7Ma6crtziehvK0R7tEvMWsNZcjO59qzwipO48TDQ7%2BZpJl0UjAvOAvNGHtKFZWVbtWOyvlorWaVbBWC6ATlu1iUk5GpIZMvH59MjynAmEpwyV7CebT1QUSnV9FkLKMcy0kDOZ5dbzzHSEsan4GvMulSSFNhT5XdOLJV%2BIdw9MsWIqM6vwsRmBEzsQZ7I1W4OcewufWKCMMgG8eqhw%2Bp0hKca1JZ%2BpKwCQk5%2B1qVUeVNLXFCswy5xkeXMXpSMemb1MN7Y%2FsQGOqUBzN3V3csZeAp%2BYV0nDqV1jz80aAiGDPPUVzKVMwYO6Nh%2FsQ5w9zapdsqVKjraadPM0HkRH4yUEMTaJ7Ok8F%2FYBvP0QXYErsjhw7ejngGBs3PRmGaqUZb8D8UKeTTAlV7Y%2FqUtqet%2BZbVCqxF87Cesgozt44fiyl1pV01SHxW34wLl69Ofivk2pQAi4JlxKzrnEJhPmIzh3ZfqMWQLA5PC5XKGu0E7&X-Amz-Signature=39ca8e28d6cc05058ab23880dd47062ea49e3048d4b98405627f96c470bc76a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUWQ4CB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICyxfGfoHWMYLJZMWPa%2FF5e7UeGXZML9KzR81quHOeGQAiBngnoSFsZ8hQiXyh4wb%2FzUoLQwEC2PPh1xDsQ5hjsTBCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMrwW24hMzt9YAY2YlKtwDTt4i3aiLHNTNNRp7L3r%2BzgTJQ29nnXNmgpiQ3ESdFYydDFxqD58aRITAwe7em%2BloP04ZUsFuxXvQ%2BWMjhhzDSnuaaIFy2baOOeh7gvinEm3CTee18F2sx8F8471Q41SsX8icGJdVLj9WYiUVUdFEBe7k%2FT%2F9IAwW4SSFfkfGMF%2B75SajDmCpA0rUjFq3j5TKNQgoedDqd9sc7bwET8uMJO32hBR96LaQqHGEuQjF4NYKD0FLoWyZma2t4QgfFnmJp6%2FJxNjB0jUZP3LM1dIOdBUIRrQiVQC4%2BpeNypNHysdFPO%2FFMgB5tGpdHdi%2FvblFWuY3vqlTXulYUbM4zr4g%2FMnPz%2BtsxADHa4HWCTnWZ5Ho4jkCddfBKlXAiXRYhHEwiQ%2FHqzDhxN6Sot0o49OAvgW5%2Fco7a2xFS4VewKxv7PMc3iSFcdabM6ZOmlUtWAOeCL%2FRuVR%2F4W85WxRXbct4h2HRPz96Lx8HGmlzqu0miIdNKqxxyKGuyFYg3UC3vDoP9WF5eBkD0WmVDj6gErTgkGyxBssiLOuXFMWKiS%2B3x%2FL21dpkDA26y4FF0hDqiJUKsoOom5m5%2BR5GcU8GDG9i%2Fp%2FsBvzuRN76q%2BCRMPCr5on4sOLlVj3iS4vbc8Uw59f%2BxAY6pgHS%2FDekehXqQ4SBPpGe6q%2FCyM2aisQnQvPiyiEX6hUH0NsxJujguhah0kTNPF%2BNqZx5w9ia2lG5XMNb249QTcmxQLa9FznQA6GSxr5reUr74qHfwIqdZYHUi3dOXfWskq5Pwu2ZtBbMeVyMV4Pry%2BW3WsqqChHh4kUdo8qdYgF92SyuW%2FIOaSyIjL8oGwAwL9FdKdB58etrNPrHjQmYK4um13T4ohDD&X-Amz-Signature=55433fd123916ffdd850f1f856463fdf766d00eb8046a5c26f3d5e709d2b91ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUWQ4CB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICyxfGfoHWMYLJZMWPa%2FF5e7UeGXZML9KzR81quHOeGQAiBngnoSFsZ8hQiXyh4wb%2FzUoLQwEC2PPh1xDsQ5hjsTBCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMrwW24hMzt9YAY2YlKtwDTt4i3aiLHNTNNRp7L3r%2BzgTJQ29nnXNmgpiQ3ESdFYydDFxqD58aRITAwe7em%2BloP04ZUsFuxXvQ%2BWMjhhzDSnuaaIFy2baOOeh7gvinEm3CTee18F2sx8F8471Q41SsX8icGJdVLj9WYiUVUdFEBe7k%2FT%2F9IAwW4SSFfkfGMF%2B75SajDmCpA0rUjFq3j5TKNQgoedDqd9sc7bwET8uMJO32hBR96LaQqHGEuQjF4NYKD0FLoWyZma2t4QgfFnmJp6%2FJxNjB0jUZP3LM1dIOdBUIRrQiVQC4%2BpeNypNHysdFPO%2FFMgB5tGpdHdi%2FvblFWuY3vqlTXulYUbM4zr4g%2FMnPz%2BtsxADHa4HWCTnWZ5Ho4jkCddfBKlXAiXRYhHEwiQ%2FHqzDhxN6Sot0o49OAvgW5%2Fco7a2xFS4VewKxv7PMc3iSFcdabM6ZOmlUtWAOeCL%2FRuVR%2F4W85WxRXbct4h2HRPz96Lx8HGmlzqu0miIdNKqxxyKGuyFYg3UC3vDoP9WF5eBkD0WmVDj6gErTgkGyxBssiLOuXFMWKiS%2B3x%2FL21dpkDA26y4FF0hDqiJUKsoOom5m5%2BR5GcU8GDG9i%2Fp%2FsBvzuRN76q%2BCRMPCr5on4sOLlVj3iS4vbc8Uw59f%2BxAY6pgHS%2FDekehXqQ4SBPpGe6q%2FCyM2aisQnQvPiyiEX6hUH0NsxJujguhah0kTNPF%2BNqZx5w9ia2lG5XMNb249QTcmxQLa9FznQA6GSxr5reUr74qHfwIqdZYHUi3dOXfWskq5Pwu2ZtBbMeVyMV4Pry%2BW3WsqqChHh4kUdo8qdYgF92SyuW%2FIOaSyIjL8oGwAwL9FdKdB58etrNPrHjQmYK4um13T4ohDD&X-Amz-Signature=59777a4e28890e9a9b28177a5fce06e67a25e4a6e9f053304f9585eafac14ca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUWQ4CB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICyxfGfoHWMYLJZMWPa%2FF5e7UeGXZML9KzR81quHOeGQAiBngnoSFsZ8hQiXyh4wb%2FzUoLQwEC2PPh1xDsQ5hjsTBCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMrwW24hMzt9YAY2YlKtwDTt4i3aiLHNTNNRp7L3r%2BzgTJQ29nnXNmgpiQ3ESdFYydDFxqD58aRITAwe7em%2BloP04ZUsFuxXvQ%2BWMjhhzDSnuaaIFy2baOOeh7gvinEm3CTee18F2sx8F8471Q41SsX8icGJdVLj9WYiUVUdFEBe7k%2FT%2F9IAwW4SSFfkfGMF%2B75SajDmCpA0rUjFq3j5TKNQgoedDqd9sc7bwET8uMJO32hBR96LaQqHGEuQjF4NYKD0FLoWyZma2t4QgfFnmJp6%2FJxNjB0jUZP3LM1dIOdBUIRrQiVQC4%2BpeNypNHysdFPO%2FFMgB5tGpdHdi%2FvblFWuY3vqlTXulYUbM4zr4g%2FMnPz%2BtsxADHa4HWCTnWZ5Ho4jkCddfBKlXAiXRYhHEwiQ%2FHqzDhxN6Sot0o49OAvgW5%2Fco7a2xFS4VewKxv7PMc3iSFcdabM6ZOmlUtWAOeCL%2FRuVR%2F4W85WxRXbct4h2HRPz96Lx8HGmlzqu0miIdNKqxxyKGuyFYg3UC3vDoP9WF5eBkD0WmVDj6gErTgkGyxBssiLOuXFMWKiS%2B3x%2FL21dpkDA26y4FF0hDqiJUKsoOom5m5%2BR5GcU8GDG9i%2Fp%2FsBvzuRN76q%2BCRMPCr5on4sOLlVj3iS4vbc8Uw59f%2BxAY6pgHS%2FDekehXqQ4SBPpGe6q%2FCyM2aisQnQvPiyiEX6hUH0NsxJujguhah0kTNPF%2BNqZx5w9ia2lG5XMNb249QTcmxQLa9FznQA6GSxr5reUr74qHfwIqdZYHUi3dOXfWskq5Pwu2ZtBbMeVyMV4Pry%2BW3WsqqChHh4kUdo8qdYgF92SyuW%2FIOaSyIjL8oGwAwL9FdKdB58etrNPrHjQmYK4um13T4ohDD&X-Amz-Signature=4b9133b2ed27499881f2b864688e460310f1946fa2b696cc1138bd4ff83145fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUWQ4CB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICyxfGfoHWMYLJZMWPa%2FF5e7UeGXZML9KzR81quHOeGQAiBngnoSFsZ8hQiXyh4wb%2FzUoLQwEC2PPh1xDsQ5hjsTBCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMrwW24hMzt9YAY2YlKtwDTt4i3aiLHNTNNRp7L3r%2BzgTJQ29nnXNmgpiQ3ESdFYydDFxqD58aRITAwe7em%2BloP04ZUsFuxXvQ%2BWMjhhzDSnuaaIFy2baOOeh7gvinEm3CTee18F2sx8F8471Q41SsX8icGJdVLj9WYiUVUdFEBe7k%2FT%2F9IAwW4SSFfkfGMF%2B75SajDmCpA0rUjFq3j5TKNQgoedDqd9sc7bwET8uMJO32hBR96LaQqHGEuQjF4NYKD0FLoWyZma2t4QgfFnmJp6%2FJxNjB0jUZP3LM1dIOdBUIRrQiVQC4%2BpeNypNHysdFPO%2FFMgB5tGpdHdi%2FvblFWuY3vqlTXulYUbM4zr4g%2FMnPz%2BtsxADHa4HWCTnWZ5Ho4jkCddfBKlXAiXRYhHEwiQ%2FHqzDhxN6Sot0o49OAvgW5%2Fco7a2xFS4VewKxv7PMc3iSFcdabM6ZOmlUtWAOeCL%2FRuVR%2F4W85WxRXbct4h2HRPz96Lx8HGmlzqu0miIdNKqxxyKGuyFYg3UC3vDoP9WF5eBkD0WmVDj6gErTgkGyxBssiLOuXFMWKiS%2B3x%2FL21dpkDA26y4FF0hDqiJUKsoOom5m5%2BR5GcU8GDG9i%2Fp%2FsBvzuRN76q%2BCRMPCr5on4sOLlVj3iS4vbc8Uw59f%2BxAY6pgHS%2FDekehXqQ4SBPpGe6q%2FCyM2aisQnQvPiyiEX6hUH0NsxJujguhah0kTNPF%2BNqZx5w9ia2lG5XMNb249QTcmxQLa9FznQA6GSxr5reUr74qHfwIqdZYHUi3dOXfWskq5Pwu2ZtBbMeVyMV4Pry%2BW3WsqqChHh4kUdo8qdYgF92SyuW%2FIOaSyIjL8oGwAwL9FdKdB58etrNPrHjQmYK4um13T4ohDD&X-Amz-Signature=96121b6af97f3b5799a91b12e84f923ee3dd57f14dac09694a1a785dc27f33f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUWQ4CB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICyxfGfoHWMYLJZMWPa%2FF5e7UeGXZML9KzR81quHOeGQAiBngnoSFsZ8hQiXyh4wb%2FzUoLQwEC2PPh1xDsQ5hjsTBCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMrwW24hMzt9YAY2YlKtwDTt4i3aiLHNTNNRp7L3r%2BzgTJQ29nnXNmgpiQ3ESdFYydDFxqD58aRITAwe7em%2BloP04ZUsFuxXvQ%2BWMjhhzDSnuaaIFy2baOOeh7gvinEm3CTee18F2sx8F8471Q41SsX8icGJdVLj9WYiUVUdFEBe7k%2FT%2F9IAwW4SSFfkfGMF%2B75SajDmCpA0rUjFq3j5TKNQgoedDqd9sc7bwET8uMJO32hBR96LaQqHGEuQjF4NYKD0FLoWyZma2t4QgfFnmJp6%2FJxNjB0jUZP3LM1dIOdBUIRrQiVQC4%2BpeNypNHysdFPO%2FFMgB5tGpdHdi%2FvblFWuY3vqlTXulYUbM4zr4g%2FMnPz%2BtsxADHa4HWCTnWZ5Ho4jkCddfBKlXAiXRYhHEwiQ%2FHqzDhxN6Sot0o49OAvgW5%2Fco7a2xFS4VewKxv7PMc3iSFcdabM6ZOmlUtWAOeCL%2FRuVR%2F4W85WxRXbct4h2HRPz96Lx8HGmlzqu0miIdNKqxxyKGuyFYg3UC3vDoP9WF5eBkD0WmVDj6gErTgkGyxBssiLOuXFMWKiS%2B3x%2FL21dpkDA26y4FF0hDqiJUKsoOom5m5%2BR5GcU8GDG9i%2Fp%2FsBvzuRN76q%2BCRMPCr5on4sOLlVj3iS4vbc8Uw59f%2BxAY6pgHS%2FDekehXqQ4SBPpGe6q%2FCyM2aisQnQvPiyiEX6hUH0NsxJujguhah0kTNPF%2BNqZx5w9ia2lG5XMNb249QTcmxQLa9FznQA6GSxr5reUr74qHfwIqdZYHUi3dOXfWskq5Pwu2ZtBbMeVyMV4Pry%2BW3WsqqChHh4kUdo8qdYgF92SyuW%2FIOaSyIjL8oGwAwL9FdKdB58etrNPrHjQmYK4um13T4ohDD&X-Amz-Signature=4e6abaccd2f173a73ae4467a7c0ecb35d1731b1db1500016a3e0fd37c596ff7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUWQ4CB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICyxfGfoHWMYLJZMWPa%2FF5e7UeGXZML9KzR81quHOeGQAiBngnoSFsZ8hQiXyh4wb%2FzUoLQwEC2PPh1xDsQ5hjsTBCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMrwW24hMzt9YAY2YlKtwDTt4i3aiLHNTNNRp7L3r%2BzgTJQ29nnXNmgpiQ3ESdFYydDFxqD58aRITAwe7em%2BloP04ZUsFuxXvQ%2BWMjhhzDSnuaaIFy2baOOeh7gvinEm3CTee18F2sx8F8471Q41SsX8icGJdVLj9WYiUVUdFEBe7k%2FT%2F9IAwW4SSFfkfGMF%2B75SajDmCpA0rUjFq3j5TKNQgoedDqd9sc7bwET8uMJO32hBR96LaQqHGEuQjF4NYKD0FLoWyZma2t4QgfFnmJp6%2FJxNjB0jUZP3LM1dIOdBUIRrQiVQC4%2BpeNypNHysdFPO%2FFMgB5tGpdHdi%2FvblFWuY3vqlTXulYUbM4zr4g%2FMnPz%2BtsxADHa4HWCTnWZ5Ho4jkCddfBKlXAiXRYhHEwiQ%2FHqzDhxN6Sot0o49OAvgW5%2Fco7a2xFS4VewKxv7PMc3iSFcdabM6ZOmlUtWAOeCL%2FRuVR%2F4W85WxRXbct4h2HRPz96Lx8HGmlzqu0miIdNKqxxyKGuyFYg3UC3vDoP9WF5eBkD0WmVDj6gErTgkGyxBssiLOuXFMWKiS%2B3x%2FL21dpkDA26y4FF0hDqiJUKsoOom5m5%2BR5GcU8GDG9i%2Fp%2FsBvzuRN76q%2BCRMPCr5on4sOLlVj3iS4vbc8Uw59f%2BxAY6pgHS%2FDekehXqQ4SBPpGe6q%2FCyM2aisQnQvPiyiEX6hUH0NsxJujguhah0kTNPF%2BNqZx5w9ia2lG5XMNb249QTcmxQLa9FznQA6GSxr5reUr74qHfwIqdZYHUi3dOXfWskq5Pwu2ZtBbMeVyMV4Pry%2BW3WsqqChHh4kUdo8qdYgF92SyuW%2FIOaSyIjL8oGwAwL9FdKdB58etrNPrHjQmYK4um13T4ohDD&X-Amz-Signature=2b762206057913d3bf85380214cefbdf9e460a167f61b0553a39b8b6df14f3cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUWQ4CB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICyxfGfoHWMYLJZMWPa%2FF5e7UeGXZML9KzR81quHOeGQAiBngnoSFsZ8hQiXyh4wb%2FzUoLQwEC2PPh1xDsQ5hjsTBCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMrwW24hMzt9YAY2YlKtwDTt4i3aiLHNTNNRp7L3r%2BzgTJQ29nnXNmgpiQ3ESdFYydDFxqD58aRITAwe7em%2BloP04ZUsFuxXvQ%2BWMjhhzDSnuaaIFy2baOOeh7gvinEm3CTee18F2sx8F8471Q41SsX8icGJdVLj9WYiUVUdFEBe7k%2FT%2F9IAwW4SSFfkfGMF%2B75SajDmCpA0rUjFq3j5TKNQgoedDqd9sc7bwET8uMJO32hBR96LaQqHGEuQjF4NYKD0FLoWyZma2t4QgfFnmJp6%2FJxNjB0jUZP3LM1dIOdBUIRrQiVQC4%2BpeNypNHysdFPO%2FFMgB5tGpdHdi%2FvblFWuY3vqlTXulYUbM4zr4g%2FMnPz%2BtsxADHa4HWCTnWZ5Ho4jkCddfBKlXAiXRYhHEwiQ%2FHqzDhxN6Sot0o49OAvgW5%2Fco7a2xFS4VewKxv7PMc3iSFcdabM6ZOmlUtWAOeCL%2FRuVR%2F4W85WxRXbct4h2HRPz96Lx8HGmlzqu0miIdNKqxxyKGuyFYg3UC3vDoP9WF5eBkD0WmVDj6gErTgkGyxBssiLOuXFMWKiS%2B3x%2FL21dpkDA26y4FF0hDqiJUKsoOom5m5%2BR5GcU8GDG9i%2Fp%2FsBvzuRN76q%2BCRMPCr5on4sOLlVj3iS4vbc8Uw59f%2BxAY6pgHS%2FDekehXqQ4SBPpGe6q%2FCyM2aisQnQvPiyiEX6hUH0NsxJujguhah0kTNPF%2BNqZx5w9ia2lG5XMNb249QTcmxQLa9FznQA6GSxr5reUr74qHfwIqdZYHUi3dOXfWskq5Pwu2ZtBbMeVyMV4Pry%2BW3WsqqChHh4kUdo8qdYgF92SyuW%2FIOaSyIjL8oGwAwL9FdKdB58etrNPrHjQmYK4um13T4ohDD&X-Amz-Signature=4b9133b2ed27499881f2b864688e460310f1946fa2b696cc1138bd4ff83145fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUWQ4CB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICyxfGfoHWMYLJZMWPa%2FF5e7UeGXZML9KzR81quHOeGQAiBngnoSFsZ8hQiXyh4wb%2FzUoLQwEC2PPh1xDsQ5hjsTBCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMrwW24hMzt9YAY2YlKtwDTt4i3aiLHNTNNRp7L3r%2BzgTJQ29nnXNmgpiQ3ESdFYydDFxqD58aRITAwe7em%2BloP04ZUsFuxXvQ%2BWMjhhzDSnuaaIFy2baOOeh7gvinEm3CTee18F2sx8F8471Q41SsX8icGJdVLj9WYiUVUdFEBe7k%2FT%2F9IAwW4SSFfkfGMF%2B75SajDmCpA0rUjFq3j5TKNQgoedDqd9sc7bwET8uMJO32hBR96LaQqHGEuQjF4NYKD0FLoWyZma2t4QgfFnmJp6%2FJxNjB0jUZP3LM1dIOdBUIRrQiVQC4%2BpeNypNHysdFPO%2FFMgB5tGpdHdi%2FvblFWuY3vqlTXulYUbM4zr4g%2FMnPz%2BtsxADHa4HWCTnWZ5Ho4jkCddfBKlXAiXRYhHEwiQ%2FHqzDhxN6Sot0o49OAvgW5%2Fco7a2xFS4VewKxv7PMc3iSFcdabM6ZOmlUtWAOeCL%2FRuVR%2F4W85WxRXbct4h2HRPz96Lx8HGmlzqu0miIdNKqxxyKGuyFYg3UC3vDoP9WF5eBkD0WmVDj6gErTgkGyxBssiLOuXFMWKiS%2B3x%2FL21dpkDA26y4FF0hDqiJUKsoOom5m5%2BR5GcU8GDG9i%2Fp%2FsBvzuRN76q%2BCRMPCr5on4sOLlVj3iS4vbc8Uw59f%2BxAY6pgHS%2FDekehXqQ4SBPpGe6q%2FCyM2aisQnQvPiyiEX6hUH0NsxJujguhah0kTNPF%2BNqZx5w9ia2lG5XMNb249QTcmxQLa9FznQA6GSxr5reUr74qHfwIqdZYHUi3dOXfWskq5Pwu2ZtBbMeVyMV4Pry%2BW3WsqqChHh4kUdo8qdYgF92SyuW%2FIOaSyIjL8oGwAwL9FdKdB58etrNPrHjQmYK4um13T4ohDD&X-Amz-Signature=8b35f5d569e798dd78ccc15b38645f4306ea6cba865e52aa2b58cbc3a3a28ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUWQ4CB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICyxfGfoHWMYLJZMWPa%2FF5e7UeGXZML9KzR81quHOeGQAiBngnoSFsZ8hQiXyh4wb%2FzUoLQwEC2PPh1xDsQ5hjsTBCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMrwW24hMzt9YAY2YlKtwDTt4i3aiLHNTNNRp7L3r%2BzgTJQ29nnXNmgpiQ3ESdFYydDFxqD58aRITAwe7em%2BloP04ZUsFuxXvQ%2BWMjhhzDSnuaaIFy2baOOeh7gvinEm3CTee18F2sx8F8471Q41SsX8icGJdVLj9WYiUVUdFEBe7k%2FT%2F9IAwW4SSFfkfGMF%2B75SajDmCpA0rUjFq3j5TKNQgoedDqd9sc7bwET8uMJO32hBR96LaQqHGEuQjF4NYKD0FLoWyZma2t4QgfFnmJp6%2FJxNjB0jUZP3LM1dIOdBUIRrQiVQC4%2BpeNypNHysdFPO%2FFMgB5tGpdHdi%2FvblFWuY3vqlTXulYUbM4zr4g%2FMnPz%2BtsxADHa4HWCTnWZ5Ho4jkCddfBKlXAiXRYhHEwiQ%2FHqzDhxN6Sot0o49OAvgW5%2Fco7a2xFS4VewKxv7PMc3iSFcdabM6ZOmlUtWAOeCL%2FRuVR%2F4W85WxRXbct4h2HRPz96Lx8HGmlzqu0miIdNKqxxyKGuyFYg3UC3vDoP9WF5eBkD0WmVDj6gErTgkGyxBssiLOuXFMWKiS%2B3x%2FL21dpkDA26y4FF0hDqiJUKsoOom5m5%2BR5GcU8GDG9i%2Fp%2FsBvzuRN76q%2BCRMPCr5on4sOLlVj3iS4vbc8Uw59f%2BxAY6pgHS%2FDekehXqQ4SBPpGe6q%2FCyM2aisQnQvPiyiEX6hUH0NsxJujguhah0kTNPF%2BNqZx5w9ia2lG5XMNb249QTcmxQLa9FznQA6GSxr5reUr74qHfwIqdZYHUi3dOXfWskq5Pwu2ZtBbMeVyMV4Pry%2BW3WsqqChHh4kUdo8qdYgF92SyuW%2FIOaSyIjL8oGwAwL9FdKdB58etrNPrHjQmYK4um13T4ohDD&X-Amz-Signature=18bb4406d1ed4a92687cec3d8d9e5f75273c9de39d33316d27af4854eb273ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OUWQ4CB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCICyxfGfoHWMYLJZMWPa%2FF5e7UeGXZML9KzR81quHOeGQAiBngnoSFsZ8hQiXyh4wb%2FzUoLQwEC2PPh1xDsQ5hjsTBCr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMrwW24hMzt9YAY2YlKtwDTt4i3aiLHNTNNRp7L3r%2BzgTJQ29nnXNmgpiQ3ESdFYydDFxqD58aRITAwe7em%2BloP04ZUsFuxXvQ%2BWMjhhzDSnuaaIFy2baOOeh7gvinEm3CTee18F2sx8F8471Q41SsX8icGJdVLj9WYiUVUdFEBe7k%2FT%2F9IAwW4SSFfkfGMF%2B75SajDmCpA0rUjFq3j5TKNQgoedDqd9sc7bwET8uMJO32hBR96LaQqHGEuQjF4NYKD0FLoWyZma2t4QgfFnmJp6%2FJxNjB0jUZP3LM1dIOdBUIRrQiVQC4%2BpeNypNHysdFPO%2FFMgB5tGpdHdi%2FvblFWuY3vqlTXulYUbM4zr4g%2FMnPz%2BtsxADHa4HWCTnWZ5Ho4jkCddfBKlXAiXRYhHEwiQ%2FHqzDhxN6Sot0o49OAvgW5%2Fco7a2xFS4VewKxv7PMc3iSFcdabM6ZOmlUtWAOeCL%2FRuVR%2F4W85WxRXbct4h2HRPz96Lx8HGmlzqu0miIdNKqxxyKGuyFYg3UC3vDoP9WF5eBkD0WmVDj6gErTgkGyxBssiLOuXFMWKiS%2B3x%2FL21dpkDA26y4FF0hDqiJUKsoOom5m5%2BR5GcU8GDG9i%2Fp%2FsBvzuRN76q%2BCRMPCr5on4sOLlVj3iS4vbc8Uw59f%2BxAY6pgHS%2FDekehXqQ4SBPpGe6q%2FCyM2aisQnQvPiyiEX6hUH0NsxJujguhah0kTNPF%2BNqZx5w9ia2lG5XMNb249QTcmxQLa9FznQA6GSxr5reUr74qHfwIqdZYHUi3dOXfWskq5Pwu2ZtBbMeVyMV4Pry%2BW3WsqqChHh4kUdo8qdYgF92SyuW%2FIOaSyIjL8oGwAwL9FdKdB58etrNPrHjQmYK4um13T4ohDD&X-Amz-Signature=af2822a951db8a9ee2b23bfd3edd30b897249bf7d123818064c8593785c41ba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
