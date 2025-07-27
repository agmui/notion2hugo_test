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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZXM2XO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFt5XWC%2B3wQaYuLdM1fpD5KZXv%2BWp1O1%2FIfNdRfrCQw6AiEAvQ3IiHHyB0UYDOWXVYO1I5yiYM5EqC5RSTZk2htU3egq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJHfyRh5jGiZV2swTircA2zsNErPaAQHjaAE%2FJUhIl0EoQpr7gk3iJJYb0L4Bp%2FV799KX5LlDprXsDlj3aAYMXS2qhxF1vblaihB80VWYHMHmTtDwGbsTPeVGKPaOa9k20uxznVPCSvH98aAhZKsC63d42zDssTgf8JclG9D0zUyC7Wqs3Gu%2BIL9kMJpVyx9gb7YXUJ7legXWsP%2Fx7U7BNSdCgMKEg6T%2FJSeONQCRBxzvOlunZdUDRR4%2FygL2kEd0npxrAcCyOAXLBUp8Hr%2BbSRZKZsjIkMcd6qssmUHCvNGC%2BX4vJzpP7PbEDYFJrz%2FX%2Bmukhw9QlMKc2J7r4DC9jeM7elm5Ur5P%2BT%2FZfYwK%2BxDsoGynrn9dIE2h5v9rEdrLqmPIra%2FREyv%2FpGysnUJSJVlB2GzG5a7bjBK848Kwg8KxGQHdwM5YjhjKsJrBGeUvO%2FqVn1ovL4%2Bs4GnR1VOwAN7yFgXII2dm75bXXAAZYFtXTPwZCkGoqfVK1fsGVCtGV5SKXpYPn8e8cx504R5yeVoPMSBUaVbMDbUvekpQysVtCpSR7rtj6oIkkgpuXqI46KD35zPrup950YW%2Fudxc%2F3iURm7K8l2mzBDhOUQ789EzwQOrUZFIoX34orUModjyd5zUSqZjWLBnEajMPC6lsQGOqUBR%2BcIJ4N605V4JCeM8d55L9xg4wh%2F0nK%2BFN69btSpLJHwNhBrKwV3Aa3j47NbqohNul0h4rEgkxtIlvLzNkBzxYouP09oARn5ood3FldIQjjLs0axbDzNiAKfIiLSDNgaLz2o9Y2My8egKsU%2BGD3ft6nB2FMW04fdnmvQvQJkZ8DtYeBgQ2rDMNiwxdYsjPkt6Q2kyFZNGRaBSDDH12%2B6%2BK%2Fp5DS9&X-Amz-Signature=c9f6fe2638b91ed89b74903feb53fa7b8547deff25047bd692bad649a0d89c3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZXM2XO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFt5XWC%2B3wQaYuLdM1fpD5KZXv%2BWp1O1%2FIfNdRfrCQw6AiEAvQ3IiHHyB0UYDOWXVYO1I5yiYM5EqC5RSTZk2htU3egq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJHfyRh5jGiZV2swTircA2zsNErPaAQHjaAE%2FJUhIl0EoQpr7gk3iJJYb0L4Bp%2FV799KX5LlDprXsDlj3aAYMXS2qhxF1vblaihB80VWYHMHmTtDwGbsTPeVGKPaOa9k20uxznVPCSvH98aAhZKsC63d42zDssTgf8JclG9D0zUyC7Wqs3Gu%2BIL9kMJpVyx9gb7YXUJ7legXWsP%2Fx7U7BNSdCgMKEg6T%2FJSeONQCRBxzvOlunZdUDRR4%2FygL2kEd0npxrAcCyOAXLBUp8Hr%2BbSRZKZsjIkMcd6qssmUHCvNGC%2BX4vJzpP7PbEDYFJrz%2FX%2Bmukhw9QlMKc2J7r4DC9jeM7elm5Ur5P%2BT%2FZfYwK%2BxDsoGynrn9dIE2h5v9rEdrLqmPIra%2FREyv%2FpGysnUJSJVlB2GzG5a7bjBK848Kwg8KxGQHdwM5YjhjKsJrBGeUvO%2FqVn1ovL4%2Bs4GnR1VOwAN7yFgXII2dm75bXXAAZYFtXTPwZCkGoqfVK1fsGVCtGV5SKXpYPn8e8cx504R5yeVoPMSBUaVbMDbUvekpQysVtCpSR7rtj6oIkkgpuXqI46KD35zPrup950YW%2Fudxc%2F3iURm7K8l2mzBDhOUQ789EzwQOrUZFIoX34orUModjyd5zUSqZjWLBnEajMPC6lsQGOqUBR%2BcIJ4N605V4JCeM8d55L9xg4wh%2F0nK%2BFN69btSpLJHwNhBrKwV3Aa3j47NbqohNul0h4rEgkxtIlvLzNkBzxYouP09oARn5ood3FldIQjjLs0axbDzNiAKfIiLSDNgaLz2o9Y2My8egKsU%2BGD3ft6nB2FMW04fdnmvQvQJkZ8DtYeBgQ2rDMNiwxdYsjPkt6Q2kyFZNGRaBSDDH12%2B6%2BK%2Fp5DS9&X-Amz-Signature=e156650493a5b58f407b486bea78d8b3065640ac80fdf8dd88ebb7c208ec860e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZXM2XO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFt5XWC%2B3wQaYuLdM1fpD5KZXv%2BWp1O1%2FIfNdRfrCQw6AiEAvQ3IiHHyB0UYDOWXVYO1I5yiYM5EqC5RSTZk2htU3egq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJHfyRh5jGiZV2swTircA2zsNErPaAQHjaAE%2FJUhIl0EoQpr7gk3iJJYb0L4Bp%2FV799KX5LlDprXsDlj3aAYMXS2qhxF1vblaihB80VWYHMHmTtDwGbsTPeVGKPaOa9k20uxznVPCSvH98aAhZKsC63d42zDssTgf8JclG9D0zUyC7Wqs3Gu%2BIL9kMJpVyx9gb7YXUJ7legXWsP%2Fx7U7BNSdCgMKEg6T%2FJSeONQCRBxzvOlunZdUDRR4%2FygL2kEd0npxrAcCyOAXLBUp8Hr%2BbSRZKZsjIkMcd6qssmUHCvNGC%2BX4vJzpP7PbEDYFJrz%2FX%2Bmukhw9QlMKc2J7r4DC9jeM7elm5Ur5P%2BT%2FZfYwK%2BxDsoGynrn9dIE2h5v9rEdrLqmPIra%2FREyv%2FpGysnUJSJVlB2GzG5a7bjBK848Kwg8KxGQHdwM5YjhjKsJrBGeUvO%2FqVn1ovL4%2Bs4GnR1VOwAN7yFgXII2dm75bXXAAZYFtXTPwZCkGoqfVK1fsGVCtGV5SKXpYPn8e8cx504R5yeVoPMSBUaVbMDbUvekpQysVtCpSR7rtj6oIkkgpuXqI46KD35zPrup950YW%2Fudxc%2F3iURm7K8l2mzBDhOUQ789EzwQOrUZFIoX34orUModjyd5zUSqZjWLBnEajMPC6lsQGOqUBR%2BcIJ4N605V4JCeM8d55L9xg4wh%2F0nK%2BFN69btSpLJHwNhBrKwV3Aa3j47NbqohNul0h4rEgkxtIlvLzNkBzxYouP09oARn5ood3FldIQjjLs0axbDzNiAKfIiLSDNgaLz2o9Y2My8egKsU%2BGD3ft6nB2FMW04fdnmvQvQJkZ8DtYeBgQ2rDMNiwxdYsjPkt6Q2kyFZNGRaBSDDH12%2B6%2BK%2Fp5DS9&X-Amz-Signature=4d23b6405624da8820f6c56940065e50e6d6f25a52d0003e81fa0d3c5562400a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZXM2XO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFt5XWC%2B3wQaYuLdM1fpD5KZXv%2BWp1O1%2FIfNdRfrCQw6AiEAvQ3IiHHyB0UYDOWXVYO1I5yiYM5EqC5RSTZk2htU3egq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJHfyRh5jGiZV2swTircA2zsNErPaAQHjaAE%2FJUhIl0EoQpr7gk3iJJYb0L4Bp%2FV799KX5LlDprXsDlj3aAYMXS2qhxF1vblaihB80VWYHMHmTtDwGbsTPeVGKPaOa9k20uxznVPCSvH98aAhZKsC63d42zDssTgf8JclG9D0zUyC7Wqs3Gu%2BIL9kMJpVyx9gb7YXUJ7legXWsP%2Fx7U7BNSdCgMKEg6T%2FJSeONQCRBxzvOlunZdUDRR4%2FygL2kEd0npxrAcCyOAXLBUp8Hr%2BbSRZKZsjIkMcd6qssmUHCvNGC%2BX4vJzpP7PbEDYFJrz%2FX%2Bmukhw9QlMKc2J7r4DC9jeM7elm5Ur5P%2BT%2FZfYwK%2BxDsoGynrn9dIE2h5v9rEdrLqmPIra%2FREyv%2FpGysnUJSJVlB2GzG5a7bjBK848Kwg8KxGQHdwM5YjhjKsJrBGeUvO%2FqVn1ovL4%2Bs4GnR1VOwAN7yFgXII2dm75bXXAAZYFtXTPwZCkGoqfVK1fsGVCtGV5SKXpYPn8e8cx504R5yeVoPMSBUaVbMDbUvekpQysVtCpSR7rtj6oIkkgpuXqI46KD35zPrup950YW%2Fudxc%2F3iURm7K8l2mzBDhOUQ789EzwQOrUZFIoX34orUModjyd5zUSqZjWLBnEajMPC6lsQGOqUBR%2BcIJ4N605V4JCeM8d55L9xg4wh%2F0nK%2BFN69btSpLJHwNhBrKwV3Aa3j47NbqohNul0h4rEgkxtIlvLzNkBzxYouP09oARn5ood3FldIQjjLs0axbDzNiAKfIiLSDNgaLz2o9Y2My8egKsU%2BGD3ft6nB2FMW04fdnmvQvQJkZ8DtYeBgQ2rDMNiwxdYsjPkt6Q2kyFZNGRaBSDDH12%2B6%2BK%2Fp5DS9&X-Amz-Signature=9572ce79ebda38e19283fd974be0cce2980c8076e00cbc7a445ba6295fa5164c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZXM2XO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFt5XWC%2B3wQaYuLdM1fpD5KZXv%2BWp1O1%2FIfNdRfrCQw6AiEAvQ3IiHHyB0UYDOWXVYO1I5yiYM5EqC5RSTZk2htU3egq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJHfyRh5jGiZV2swTircA2zsNErPaAQHjaAE%2FJUhIl0EoQpr7gk3iJJYb0L4Bp%2FV799KX5LlDprXsDlj3aAYMXS2qhxF1vblaihB80VWYHMHmTtDwGbsTPeVGKPaOa9k20uxznVPCSvH98aAhZKsC63d42zDssTgf8JclG9D0zUyC7Wqs3Gu%2BIL9kMJpVyx9gb7YXUJ7legXWsP%2Fx7U7BNSdCgMKEg6T%2FJSeONQCRBxzvOlunZdUDRR4%2FygL2kEd0npxrAcCyOAXLBUp8Hr%2BbSRZKZsjIkMcd6qssmUHCvNGC%2BX4vJzpP7PbEDYFJrz%2FX%2Bmukhw9QlMKc2J7r4DC9jeM7elm5Ur5P%2BT%2FZfYwK%2BxDsoGynrn9dIE2h5v9rEdrLqmPIra%2FREyv%2FpGysnUJSJVlB2GzG5a7bjBK848Kwg8KxGQHdwM5YjhjKsJrBGeUvO%2FqVn1ovL4%2Bs4GnR1VOwAN7yFgXII2dm75bXXAAZYFtXTPwZCkGoqfVK1fsGVCtGV5SKXpYPn8e8cx504R5yeVoPMSBUaVbMDbUvekpQysVtCpSR7rtj6oIkkgpuXqI46KD35zPrup950YW%2Fudxc%2F3iURm7K8l2mzBDhOUQ789EzwQOrUZFIoX34orUModjyd5zUSqZjWLBnEajMPC6lsQGOqUBR%2BcIJ4N605V4JCeM8d55L9xg4wh%2F0nK%2BFN69btSpLJHwNhBrKwV3Aa3j47NbqohNul0h4rEgkxtIlvLzNkBzxYouP09oARn5ood3FldIQjjLs0axbDzNiAKfIiLSDNgaLz2o9Y2My8egKsU%2BGD3ft6nB2FMW04fdnmvQvQJkZ8DtYeBgQ2rDMNiwxdYsjPkt6Q2kyFZNGRaBSDDH12%2B6%2BK%2Fp5DS9&X-Amz-Signature=eed881673b3b48b95b85242eb12b99e353fd0edb3cc73e4581e3954b9e68f922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZXM2XO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFt5XWC%2B3wQaYuLdM1fpD5KZXv%2BWp1O1%2FIfNdRfrCQw6AiEAvQ3IiHHyB0UYDOWXVYO1I5yiYM5EqC5RSTZk2htU3egq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJHfyRh5jGiZV2swTircA2zsNErPaAQHjaAE%2FJUhIl0EoQpr7gk3iJJYb0L4Bp%2FV799KX5LlDprXsDlj3aAYMXS2qhxF1vblaihB80VWYHMHmTtDwGbsTPeVGKPaOa9k20uxznVPCSvH98aAhZKsC63d42zDssTgf8JclG9D0zUyC7Wqs3Gu%2BIL9kMJpVyx9gb7YXUJ7legXWsP%2Fx7U7BNSdCgMKEg6T%2FJSeONQCRBxzvOlunZdUDRR4%2FygL2kEd0npxrAcCyOAXLBUp8Hr%2BbSRZKZsjIkMcd6qssmUHCvNGC%2BX4vJzpP7PbEDYFJrz%2FX%2Bmukhw9QlMKc2J7r4DC9jeM7elm5Ur5P%2BT%2FZfYwK%2BxDsoGynrn9dIE2h5v9rEdrLqmPIra%2FREyv%2FpGysnUJSJVlB2GzG5a7bjBK848Kwg8KxGQHdwM5YjhjKsJrBGeUvO%2FqVn1ovL4%2Bs4GnR1VOwAN7yFgXII2dm75bXXAAZYFtXTPwZCkGoqfVK1fsGVCtGV5SKXpYPn8e8cx504R5yeVoPMSBUaVbMDbUvekpQysVtCpSR7rtj6oIkkgpuXqI46KD35zPrup950YW%2Fudxc%2F3iURm7K8l2mzBDhOUQ789EzwQOrUZFIoX34orUModjyd5zUSqZjWLBnEajMPC6lsQGOqUBR%2BcIJ4N605V4JCeM8d55L9xg4wh%2F0nK%2BFN69btSpLJHwNhBrKwV3Aa3j47NbqohNul0h4rEgkxtIlvLzNkBzxYouP09oARn5ood3FldIQjjLs0axbDzNiAKfIiLSDNgaLz2o9Y2My8egKsU%2BGD3ft6nB2FMW04fdnmvQvQJkZ8DtYeBgQ2rDMNiwxdYsjPkt6Q2kyFZNGRaBSDDH12%2B6%2BK%2Fp5DS9&X-Amz-Signature=e6ff90db99d9b6de33eda879f9c390213819fcbc204c05e232f21e7f9df4b08b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZXM2XO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFt5XWC%2B3wQaYuLdM1fpD5KZXv%2BWp1O1%2FIfNdRfrCQw6AiEAvQ3IiHHyB0UYDOWXVYO1I5yiYM5EqC5RSTZk2htU3egq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJHfyRh5jGiZV2swTircA2zsNErPaAQHjaAE%2FJUhIl0EoQpr7gk3iJJYb0L4Bp%2FV799KX5LlDprXsDlj3aAYMXS2qhxF1vblaihB80VWYHMHmTtDwGbsTPeVGKPaOa9k20uxznVPCSvH98aAhZKsC63d42zDssTgf8JclG9D0zUyC7Wqs3Gu%2BIL9kMJpVyx9gb7YXUJ7legXWsP%2Fx7U7BNSdCgMKEg6T%2FJSeONQCRBxzvOlunZdUDRR4%2FygL2kEd0npxrAcCyOAXLBUp8Hr%2BbSRZKZsjIkMcd6qssmUHCvNGC%2BX4vJzpP7PbEDYFJrz%2FX%2Bmukhw9QlMKc2J7r4DC9jeM7elm5Ur5P%2BT%2FZfYwK%2BxDsoGynrn9dIE2h5v9rEdrLqmPIra%2FREyv%2FpGysnUJSJVlB2GzG5a7bjBK848Kwg8KxGQHdwM5YjhjKsJrBGeUvO%2FqVn1ovL4%2Bs4GnR1VOwAN7yFgXII2dm75bXXAAZYFtXTPwZCkGoqfVK1fsGVCtGV5SKXpYPn8e8cx504R5yeVoPMSBUaVbMDbUvekpQysVtCpSR7rtj6oIkkgpuXqI46KD35zPrup950YW%2Fudxc%2F3iURm7K8l2mzBDhOUQ789EzwQOrUZFIoX34orUModjyd5zUSqZjWLBnEajMPC6lsQGOqUBR%2BcIJ4N605V4JCeM8d55L9xg4wh%2F0nK%2BFN69btSpLJHwNhBrKwV3Aa3j47NbqohNul0h4rEgkxtIlvLzNkBzxYouP09oARn5ood3FldIQjjLs0axbDzNiAKfIiLSDNgaLz2o9Y2My8egKsU%2BGD3ft6nB2FMW04fdnmvQvQJkZ8DtYeBgQ2rDMNiwxdYsjPkt6Q2kyFZNGRaBSDDH12%2B6%2BK%2Fp5DS9&X-Amz-Signature=46d586b59cf33fd79b3f521d45b233125c14e9d2f0e0a2c3fa832d6d067f1d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZXM2XO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFt5XWC%2B3wQaYuLdM1fpD5KZXv%2BWp1O1%2FIfNdRfrCQw6AiEAvQ3IiHHyB0UYDOWXVYO1I5yiYM5EqC5RSTZk2htU3egq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJHfyRh5jGiZV2swTircA2zsNErPaAQHjaAE%2FJUhIl0EoQpr7gk3iJJYb0L4Bp%2FV799KX5LlDprXsDlj3aAYMXS2qhxF1vblaihB80VWYHMHmTtDwGbsTPeVGKPaOa9k20uxznVPCSvH98aAhZKsC63d42zDssTgf8JclG9D0zUyC7Wqs3Gu%2BIL9kMJpVyx9gb7YXUJ7legXWsP%2Fx7U7BNSdCgMKEg6T%2FJSeONQCRBxzvOlunZdUDRR4%2FygL2kEd0npxrAcCyOAXLBUp8Hr%2BbSRZKZsjIkMcd6qssmUHCvNGC%2BX4vJzpP7PbEDYFJrz%2FX%2Bmukhw9QlMKc2J7r4DC9jeM7elm5Ur5P%2BT%2FZfYwK%2BxDsoGynrn9dIE2h5v9rEdrLqmPIra%2FREyv%2FpGysnUJSJVlB2GzG5a7bjBK848Kwg8KxGQHdwM5YjhjKsJrBGeUvO%2FqVn1ovL4%2Bs4GnR1VOwAN7yFgXII2dm75bXXAAZYFtXTPwZCkGoqfVK1fsGVCtGV5SKXpYPn8e8cx504R5yeVoPMSBUaVbMDbUvekpQysVtCpSR7rtj6oIkkgpuXqI46KD35zPrup950YW%2Fudxc%2F3iURm7K8l2mzBDhOUQ789EzwQOrUZFIoX34orUModjyd5zUSqZjWLBnEajMPC6lsQGOqUBR%2BcIJ4N605V4JCeM8d55L9xg4wh%2F0nK%2BFN69btSpLJHwNhBrKwV3Aa3j47NbqohNul0h4rEgkxtIlvLzNkBzxYouP09oARn5ood3FldIQjjLs0axbDzNiAKfIiLSDNgaLz2o9Y2My8egKsU%2BGD3ft6nB2FMW04fdnmvQvQJkZ8DtYeBgQ2rDMNiwxdYsjPkt6Q2kyFZNGRaBSDDH12%2B6%2BK%2Fp5DS9&X-Amz-Signature=67ebe06c626b4f0d2bfbefb4514b6b31e3f190f9e604345f841d4c4afa242769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZXM2XO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFt5XWC%2B3wQaYuLdM1fpD5KZXv%2BWp1O1%2FIfNdRfrCQw6AiEAvQ3IiHHyB0UYDOWXVYO1I5yiYM5EqC5RSTZk2htU3egq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJHfyRh5jGiZV2swTircA2zsNErPaAQHjaAE%2FJUhIl0EoQpr7gk3iJJYb0L4Bp%2FV799KX5LlDprXsDlj3aAYMXS2qhxF1vblaihB80VWYHMHmTtDwGbsTPeVGKPaOa9k20uxznVPCSvH98aAhZKsC63d42zDssTgf8JclG9D0zUyC7Wqs3Gu%2BIL9kMJpVyx9gb7YXUJ7legXWsP%2Fx7U7BNSdCgMKEg6T%2FJSeONQCRBxzvOlunZdUDRR4%2FygL2kEd0npxrAcCyOAXLBUp8Hr%2BbSRZKZsjIkMcd6qssmUHCvNGC%2BX4vJzpP7PbEDYFJrz%2FX%2Bmukhw9QlMKc2J7r4DC9jeM7elm5Ur5P%2BT%2FZfYwK%2BxDsoGynrn9dIE2h5v9rEdrLqmPIra%2FREyv%2FpGysnUJSJVlB2GzG5a7bjBK848Kwg8KxGQHdwM5YjhjKsJrBGeUvO%2FqVn1ovL4%2Bs4GnR1VOwAN7yFgXII2dm75bXXAAZYFtXTPwZCkGoqfVK1fsGVCtGV5SKXpYPn8e8cx504R5yeVoPMSBUaVbMDbUvekpQysVtCpSR7rtj6oIkkgpuXqI46KD35zPrup950YW%2Fudxc%2F3iURm7K8l2mzBDhOUQ789EzwQOrUZFIoX34orUModjyd5zUSqZjWLBnEajMPC6lsQGOqUBR%2BcIJ4N605V4JCeM8d55L9xg4wh%2F0nK%2BFN69btSpLJHwNhBrKwV3Aa3j47NbqohNul0h4rEgkxtIlvLzNkBzxYouP09oARn5ood3FldIQjjLs0axbDzNiAKfIiLSDNgaLz2o9Y2My8egKsU%2BGD3ft6nB2FMW04fdnmvQvQJkZ8DtYeBgQ2rDMNiwxdYsjPkt6Q2kyFZNGRaBSDDH12%2B6%2BK%2Fp5DS9&X-Amz-Signature=a3f679b38dc117f77e20d7a0fa22acb4df8af619195d7a9893919a54918b2548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZXM2XO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFt5XWC%2B3wQaYuLdM1fpD5KZXv%2BWp1O1%2FIfNdRfrCQw6AiEAvQ3IiHHyB0UYDOWXVYO1I5yiYM5EqC5RSTZk2htU3egq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJHfyRh5jGiZV2swTircA2zsNErPaAQHjaAE%2FJUhIl0EoQpr7gk3iJJYb0L4Bp%2FV799KX5LlDprXsDlj3aAYMXS2qhxF1vblaihB80VWYHMHmTtDwGbsTPeVGKPaOa9k20uxznVPCSvH98aAhZKsC63d42zDssTgf8JclG9D0zUyC7Wqs3Gu%2BIL9kMJpVyx9gb7YXUJ7legXWsP%2Fx7U7BNSdCgMKEg6T%2FJSeONQCRBxzvOlunZdUDRR4%2FygL2kEd0npxrAcCyOAXLBUp8Hr%2BbSRZKZsjIkMcd6qssmUHCvNGC%2BX4vJzpP7PbEDYFJrz%2FX%2Bmukhw9QlMKc2J7r4DC9jeM7elm5Ur5P%2BT%2FZfYwK%2BxDsoGynrn9dIE2h5v9rEdrLqmPIra%2FREyv%2FpGysnUJSJVlB2GzG5a7bjBK848Kwg8KxGQHdwM5YjhjKsJrBGeUvO%2FqVn1ovL4%2Bs4GnR1VOwAN7yFgXII2dm75bXXAAZYFtXTPwZCkGoqfVK1fsGVCtGV5SKXpYPn8e8cx504R5yeVoPMSBUaVbMDbUvekpQysVtCpSR7rtj6oIkkgpuXqI46KD35zPrup950YW%2Fudxc%2F3iURm7K8l2mzBDhOUQ789EzwQOrUZFIoX34orUModjyd5zUSqZjWLBnEajMPC6lsQGOqUBR%2BcIJ4N605V4JCeM8d55L9xg4wh%2F0nK%2BFN69btSpLJHwNhBrKwV3Aa3j47NbqohNul0h4rEgkxtIlvLzNkBzxYouP09oARn5ood3FldIQjjLs0axbDzNiAKfIiLSDNgaLz2o9Y2My8egKsU%2BGD3ft6nB2FMW04fdnmvQvQJkZ8DtYeBgQ2rDMNiwxdYsjPkt6Q2kyFZNGRaBSDDH12%2B6%2BK%2Fp5DS9&X-Amz-Signature=0256a2fc8864ff88feee0ae9347e99614ec650ce94a8ea5f62677a1c45a72c67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZXM2XO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFt5XWC%2B3wQaYuLdM1fpD5KZXv%2BWp1O1%2FIfNdRfrCQw6AiEAvQ3IiHHyB0UYDOWXVYO1I5yiYM5EqC5RSTZk2htU3egq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJHfyRh5jGiZV2swTircA2zsNErPaAQHjaAE%2FJUhIl0EoQpr7gk3iJJYb0L4Bp%2FV799KX5LlDprXsDlj3aAYMXS2qhxF1vblaihB80VWYHMHmTtDwGbsTPeVGKPaOa9k20uxznVPCSvH98aAhZKsC63d42zDssTgf8JclG9D0zUyC7Wqs3Gu%2BIL9kMJpVyx9gb7YXUJ7legXWsP%2Fx7U7BNSdCgMKEg6T%2FJSeONQCRBxzvOlunZdUDRR4%2FygL2kEd0npxrAcCyOAXLBUp8Hr%2BbSRZKZsjIkMcd6qssmUHCvNGC%2BX4vJzpP7PbEDYFJrz%2FX%2Bmukhw9QlMKc2J7r4DC9jeM7elm5Ur5P%2BT%2FZfYwK%2BxDsoGynrn9dIE2h5v9rEdrLqmPIra%2FREyv%2FpGysnUJSJVlB2GzG5a7bjBK848Kwg8KxGQHdwM5YjhjKsJrBGeUvO%2FqVn1ovL4%2Bs4GnR1VOwAN7yFgXII2dm75bXXAAZYFtXTPwZCkGoqfVK1fsGVCtGV5SKXpYPn8e8cx504R5yeVoPMSBUaVbMDbUvekpQysVtCpSR7rtj6oIkkgpuXqI46KD35zPrup950YW%2Fudxc%2F3iURm7K8l2mzBDhOUQ789EzwQOrUZFIoX34orUModjyd5zUSqZjWLBnEajMPC6lsQGOqUBR%2BcIJ4N605V4JCeM8d55L9xg4wh%2F0nK%2BFN69btSpLJHwNhBrKwV3Aa3j47NbqohNul0h4rEgkxtIlvLzNkBzxYouP09oARn5ood3FldIQjjLs0axbDzNiAKfIiLSDNgaLz2o9Y2My8egKsU%2BGD3ft6nB2FMW04fdnmvQvQJkZ8DtYeBgQ2rDMNiwxdYsjPkt6Q2kyFZNGRaBSDDH12%2B6%2BK%2Fp5DS9&X-Amz-Signature=89f534699050a47617df45e3037b4f4339ec5b3d097c231a512aca461836dfa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZXM2XO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFt5XWC%2B3wQaYuLdM1fpD5KZXv%2BWp1O1%2FIfNdRfrCQw6AiEAvQ3IiHHyB0UYDOWXVYO1I5yiYM5EqC5RSTZk2htU3egq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJHfyRh5jGiZV2swTircA2zsNErPaAQHjaAE%2FJUhIl0EoQpr7gk3iJJYb0L4Bp%2FV799KX5LlDprXsDlj3aAYMXS2qhxF1vblaihB80VWYHMHmTtDwGbsTPeVGKPaOa9k20uxznVPCSvH98aAhZKsC63d42zDssTgf8JclG9D0zUyC7Wqs3Gu%2BIL9kMJpVyx9gb7YXUJ7legXWsP%2Fx7U7BNSdCgMKEg6T%2FJSeONQCRBxzvOlunZdUDRR4%2FygL2kEd0npxrAcCyOAXLBUp8Hr%2BbSRZKZsjIkMcd6qssmUHCvNGC%2BX4vJzpP7PbEDYFJrz%2FX%2Bmukhw9QlMKc2J7r4DC9jeM7elm5Ur5P%2BT%2FZfYwK%2BxDsoGynrn9dIE2h5v9rEdrLqmPIra%2FREyv%2FpGysnUJSJVlB2GzG5a7bjBK848Kwg8KxGQHdwM5YjhjKsJrBGeUvO%2FqVn1ovL4%2Bs4GnR1VOwAN7yFgXII2dm75bXXAAZYFtXTPwZCkGoqfVK1fsGVCtGV5SKXpYPn8e8cx504R5yeVoPMSBUaVbMDbUvekpQysVtCpSR7rtj6oIkkgpuXqI46KD35zPrup950YW%2Fudxc%2F3iURm7K8l2mzBDhOUQ789EzwQOrUZFIoX34orUModjyd5zUSqZjWLBnEajMPC6lsQGOqUBR%2BcIJ4N605V4JCeM8d55L9xg4wh%2F0nK%2BFN69btSpLJHwNhBrKwV3Aa3j47NbqohNul0h4rEgkxtIlvLzNkBzxYouP09oARn5ood3FldIQjjLs0axbDzNiAKfIiLSDNgaLz2o9Y2My8egKsU%2BGD3ft6nB2FMW04fdnmvQvQJkZ8DtYeBgQ2rDMNiwxdYsjPkt6Q2kyFZNGRaBSDDH12%2B6%2BK%2Fp5DS9&X-Amz-Signature=e672aebb182d8defa026908ec8a26ece12210adb1e6f8ed233ba3b085c882c2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZXM2XO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFt5XWC%2B3wQaYuLdM1fpD5KZXv%2BWp1O1%2FIfNdRfrCQw6AiEAvQ3IiHHyB0UYDOWXVYO1I5yiYM5EqC5RSTZk2htU3egq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJHfyRh5jGiZV2swTircA2zsNErPaAQHjaAE%2FJUhIl0EoQpr7gk3iJJYb0L4Bp%2FV799KX5LlDprXsDlj3aAYMXS2qhxF1vblaihB80VWYHMHmTtDwGbsTPeVGKPaOa9k20uxznVPCSvH98aAhZKsC63d42zDssTgf8JclG9D0zUyC7Wqs3Gu%2BIL9kMJpVyx9gb7YXUJ7legXWsP%2Fx7U7BNSdCgMKEg6T%2FJSeONQCRBxzvOlunZdUDRR4%2FygL2kEd0npxrAcCyOAXLBUp8Hr%2BbSRZKZsjIkMcd6qssmUHCvNGC%2BX4vJzpP7PbEDYFJrz%2FX%2Bmukhw9QlMKc2J7r4DC9jeM7elm5Ur5P%2BT%2FZfYwK%2BxDsoGynrn9dIE2h5v9rEdrLqmPIra%2FREyv%2FpGysnUJSJVlB2GzG5a7bjBK848Kwg8KxGQHdwM5YjhjKsJrBGeUvO%2FqVn1ovL4%2Bs4GnR1VOwAN7yFgXII2dm75bXXAAZYFtXTPwZCkGoqfVK1fsGVCtGV5SKXpYPn8e8cx504R5yeVoPMSBUaVbMDbUvekpQysVtCpSR7rtj6oIkkgpuXqI46KD35zPrup950YW%2Fudxc%2F3iURm7K8l2mzBDhOUQ789EzwQOrUZFIoX34orUModjyd5zUSqZjWLBnEajMPC6lsQGOqUBR%2BcIJ4N605V4JCeM8d55L9xg4wh%2F0nK%2BFN69btSpLJHwNhBrKwV3Aa3j47NbqohNul0h4rEgkxtIlvLzNkBzxYouP09oARn5ood3FldIQjjLs0axbDzNiAKfIiLSDNgaLz2o9Y2My8egKsU%2BGD3ft6nB2FMW04fdnmvQvQJkZ8DtYeBgQ2rDMNiwxdYsjPkt6Q2kyFZNGRaBSDDH12%2B6%2BK%2Fp5DS9&X-Amz-Signature=bc07f04e74d836b6fb8d68bf06cf30b2f28f8fc13e0819a86a983ea9c7d68a00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZXM2XO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFt5XWC%2B3wQaYuLdM1fpD5KZXv%2BWp1O1%2FIfNdRfrCQw6AiEAvQ3IiHHyB0UYDOWXVYO1I5yiYM5EqC5RSTZk2htU3egq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJHfyRh5jGiZV2swTircA2zsNErPaAQHjaAE%2FJUhIl0EoQpr7gk3iJJYb0L4Bp%2FV799KX5LlDprXsDlj3aAYMXS2qhxF1vblaihB80VWYHMHmTtDwGbsTPeVGKPaOa9k20uxznVPCSvH98aAhZKsC63d42zDssTgf8JclG9D0zUyC7Wqs3Gu%2BIL9kMJpVyx9gb7YXUJ7legXWsP%2Fx7U7BNSdCgMKEg6T%2FJSeONQCRBxzvOlunZdUDRR4%2FygL2kEd0npxrAcCyOAXLBUp8Hr%2BbSRZKZsjIkMcd6qssmUHCvNGC%2BX4vJzpP7PbEDYFJrz%2FX%2Bmukhw9QlMKc2J7r4DC9jeM7elm5Ur5P%2BT%2FZfYwK%2BxDsoGynrn9dIE2h5v9rEdrLqmPIra%2FREyv%2FpGysnUJSJVlB2GzG5a7bjBK848Kwg8KxGQHdwM5YjhjKsJrBGeUvO%2FqVn1ovL4%2Bs4GnR1VOwAN7yFgXII2dm75bXXAAZYFtXTPwZCkGoqfVK1fsGVCtGV5SKXpYPn8e8cx504R5yeVoPMSBUaVbMDbUvekpQysVtCpSR7rtj6oIkkgpuXqI46KD35zPrup950YW%2Fudxc%2F3iURm7K8l2mzBDhOUQ789EzwQOrUZFIoX34orUModjyd5zUSqZjWLBnEajMPC6lsQGOqUBR%2BcIJ4N605V4JCeM8d55L9xg4wh%2F0nK%2BFN69btSpLJHwNhBrKwV3Aa3j47NbqohNul0h4rEgkxtIlvLzNkBzxYouP09oARn5ood3FldIQjjLs0axbDzNiAKfIiLSDNgaLz2o9Y2My8egKsU%2BGD3ft6nB2FMW04fdnmvQvQJkZ8DtYeBgQ2rDMNiwxdYsjPkt6Q2kyFZNGRaBSDDH12%2B6%2BK%2Fp5DS9&X-Amz-Signature=8104a4921bc22bbb85960cbd3fd741cb730980c5ea6f363d745dd25abad9f766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKYKHE6C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIASld%2FljYUrAGcHBwL4gIDqDI7bL1Hp2Jq6r7k9oPnXBAiEAlBm1M8NWuPNe76p0fo33n1y7AojrRjYXj92rTA%2BulxAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEXiDPZCj2bdXSOBAircA4wRHFakv1DXcg4bIGkvCSZBafaTvhF1KLGQ10GUJ8sm69iOx9BJR84HaB%2B9oVLlxrOdr5pbm6zYvF3E4TQjHpp%2BIOSk9FxGihFnK2J1i3rbgD10egPh%2Bapn%2BWcFI3ngRyegT%2BkBbrr5CCQGrV5zYmM0Y1lrrkAs9gwrH8r0Z41tWJL6yJHJ8OsppTsAV7N0MtCH2EJGyOImDmFB6cWJn81Kx7NQ9%2Fi7KgfEOIkEi7AT2hmdUgoRDP0aCrx1rXsca224AkVM2tdTiVPmtLkCeBtvs6PDd7fJNVIpkDxVjNTCA1fIUXSxl9aQyWeiUEVSKG2ZT5k64DEUWfUaAstldBXUFbjC4TscyDxWtTUfs7%2Fv3icITMQ2msdjqEihBj8%2FmhAZjUV%2BcBNi5R2cBmjo6fRR9onWVTU6VErG29ZdJeSKFPu1GhFx43o5rRa7A7E1p9jjJOsJKj%2BF4Y%2FJrbbkU3WbwAUZT16MxhhSOARC69ypX23sF7rDfrh6BY2%2BQoMc8WteJqEwjHOc4lt6rvOVs%2FPvqOM9qO6aLo4bJg1Wgi69bIVTfG%2BNNAyO0wu0eFhB9AhKwiXXTOhNg4eQN06yvwEcZM333IBgiMWH1uTM0MLU3MUJmcYxl0enljLYMKS7lsQGOqUB4jTwAvbvx%2BOeKJ%2BTYo4dg2SrL%2Bar%2BsNy%2Bxse5VROksA2M9PCh0GvSVDq3dBE7b3SfhEwLeVa%2BHl9jpjiVX5p0c0FCA09bvYwSq3FCV0MnDsVILvXsPKxfYaqBBkRBcoTDBtlR0CaBsjt13OvnMeeF7udIAAJ6KJnAsKSCTJEM5XRXBspzp%2BLeR7sOVN0Vclp7Iv0IoAFaiYeSSIo%2BGQeTFjXp21Z&X-Amz-Signature=d7c71cabe20cc88c529e43aed8062b654c1df64c29fdc7d00c59b159cc425032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKYKHE6C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIASld%2FljYUrAGcHBwL4gIDqDI7bL1Hp2Jq6r7k9oPnXBAiEAlBm1M8NWuPNe76p0fo33n1y7AojrRjYXj92rTA%2BulxAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEXiDPZCj2bdXSOBAircA4wRHFakv1DXcg4bIGkvCSZBafaTvhF1KLGQ10GUJ8sm69iOx9BJR84HaB%2B9oVLlxrOdr5pbm6zYvF3E4TQjHpp%2BIOSk9FxGihFnK2J1i3rbgD10egPh%2Bapn%2BWcFI3ngRyegT%2BkBbrr5CCQGrV5zYmM0Y1lrrkAs9gwrH8r0Z41tWJL6yJHJ8OsppTsAV7N0MtCH2EJGyOImDmFB6cWJn81Kx7NQ9%2Fi7KgfEOIkEi7AT2hmdUgoRDP0aCrx1rXsca224AkVM2tdTiVPmtLkCeBtvs6PDd7fJNVIpkDxVjNTCA1fIUXSxl9aQyWeiUEVSKG2ZT5k64DEUWfUaAstldBXUFbjC4TscyDxWtTUfs7%2Fv3icITMQ2msdjqEihBj8%2FmhAZjUV%2BcBNi5R2cBmjo6fRR9onWVTU6VErG29ZdJeSKFPu1GhFx43o5rRa7A7E1p9jjJOsJKj%2BF4Y%2FJrbbkU3WbwAUZT16MxhhSOARC69ypX23sF7rDfrh6BY2%2BQoMc8WteJqEwjHOc4lt6rvOVs%2FPvqOM9qO6aLo4bJg1Wgi69bIVTfG%2BNNAyO0wu0eFhB9AhKwiXXTOhNg4eQN06yvwEcZM333IBgiMWH1uTM0MLU3MUJmcYxl0enljLYMKS7lsQGOqUB4jTwAvbvx%2BOeKJ%2BTYo4dg2SrL%2Bar%2BsNy%2Bxse5VROksA2M9PCh0GvSVDq3dBE7b3SfhEwLeVa%2BHl9jpjiVX5p0c0FCA09bvYwSq3FCV0MnDsVILvXsPKxfYaqBBkRBcoTDBtlR0CaBsjt13OvnMeeF7udIAAJ6KJnAsKSCTJEM5XRXBspzp%2BLeR7sOVN0Vclp7Iv0IoAFaiYeSSIo%2BGQeTFjXp21Z&X-Amz-Signature=91c02973b2ebfa9c2774b017d220058d06ab1034b8eeb165764d7825b56f3cf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKYKHE6C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIASld%2FljYUrAGcHBwL4gIDqDI7bL1Hp2Jq6r7k9oPnXBAiEAlBm1M8NWuPNe76p0fo33n1y7AojrRjYXj92rTA%2BulxAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEXiDPZCj2bdXSOBAircA4wRHFakv1DXcg4bIGkvCSZBafaTvhF1KLGQ10GUJ8sm69iOx9BJR84HaB%2B9oVLlxrOdr5pbm6zYvF3E4TQjHpp%2BIOSk9FxGihFnK2J1i3rbgD10egPh%2Bapn%2BWcFI3ngRyegT%2BkBbrr5CCQGrV5zYmM0Y1lrrkAs9gwrH8r0Z41tWJL6yJHJ8OsppTsAV7N0MtCH2EJGyOImDmFB6cWJn81Kx7NQ9%2Fi7KgfEOIkEi7AT2hmdUgoRDP0aCrx1rXsca224AkVM2tdTiVPmtLkCeBtvs6PDd7fJNVIpkDxVjNTCA1fIUXSxl9aQyWeiUEVSKG2ZT5k64DEUWfUaAstldBXUFbjC4TscyDxWtTUfs7%2Fv3icITMQ2msdjqEihBj8%2FmhAZjUV%2BcBNi5R2cBmjo6fRR9onWVTU6VErG29ZdJeSKFPu1GhFx43o5rRa7A7E1p9jjJOsJKj%2BF4Y%2FJrbbkU3WbwAUZT16MxhhSOARC69ypX23sF7rDfrh6BY2%2BQoMc8WteJqEwjHOc4lt6rvOVs%2FPvqOM9qO6aLo4bJg1Wgi69bIVTfG%2BNNAyO0wu0eFhB9AhKwiXXTOhNg4eQN06yvwEcZM333IBgiMWH1uTM0MLU3MUJmcYxl0enljLYMKS7lsQGOqUB4jTwAvbvx%2BOeKJ%2BTYo4dg2SrL%2Bar%2BsNy%2Bxse5VROksA2M9PCh0GvSVDq3dBE7b3SfhEwLeVa%2BHl9jpjiVX5p0c0FCA09bvYwSq3FCV0MnDsVILvXsPKxfYaqBBkRBcoTDBtlR0CaBsjt13OvnMeeF7udIAAJ6KJnAsKSCTJEM5XRXBspzp%2BLeR7sOVN0Vclp7Iv0IoAFaiYeSSIo%2BGQeTFjXp21Z&X-Amz-Signature=f7c9f32b2115342fcc94976207c0d4f680b1b0d146c328462f8c7c4a034fe7a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKYKHE6C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIASld%2FljYUrAGcHBwL4gIDqDI7bL1Hp2Jq6r7k9oPnXBAiEAlBm1M8NWuPNe76p0fo33n1y7AojrRjYXj92rTA%2BulxAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEXiDPZCj2bdXSOBAircA4wRHFakv1DXcg4bIGkvCSZBafaTvhF1KLGQ10GUJ8sm69iOx9BJR84HaB%2B9oVLlxrOdr5pbm6zYvF3E4TQjHpp%2BIOSk9FxGihFnK2J1i3rbgD10egPh%2Bapn%2BWcFI3ngRyegT%2BkBbrr5CCQGrV5zYmM0Y1lrrkAs9gwrH8r0Z41tWJL6yJHJ8OsppTsAV7N0MtCH2EJGyOImDmFB6cWJn81Kx7NQ9%2Fi7KgfEOIkEi7AT2hmdUgoRDP0aCrx1rXsca224AkVM2tdTiVPmtLkCeBtvs6PDd7fJNVIpkDxVjNTCA1fIUXSxl9aQyWeiUEVSKG2ZT5k64DEUWfUaAstldBXUFbjC4TscyDxWtTUfs7%2Fv3icITMQ2msdjqEihBj8%2FmhAZjUV%2BcBNi5R2cBmjo6fRR9onWVTU6VErG29ZdJeSKFPu1GhFx43o5rRa7A7E1p9jjJOsJKj%2BF4Y%2FJrbbkU3WbwAUZT16MxhhSOARC69ypX23sF7rDfrh6BY2%2BQoMc8WteJqEwjHOc4lt6rvOVs%2FPvqOM9qO6aLo4bJg1Wgi69bIVTfG%2BNNAyO0wu0eFhB9AhKwiXXTOhNg4eQN06yvwEcZM333IBgiMWH1uTM0MLU3MUJmcYxl0enljLYMKS7lsQGOqUB4jTwAvbvx%2BOeKJ%2BTYo4dg2SrL%2Bar%2BsNy%2Bxse5VROksA2M9PCh0GvSVDq3dBE7b3SfhEwLeVa%2BHl9jpjiVX5p0c0FCA09bvYwSq3FCV0MnDsVILvXsPKxfYaqBBkRBcoTDBtlR0CaBsjt13OvnMeeF7udIAAJ6KJnAsKSCTJEM5XRXBspzp%2BLeR7sOVN0Vclp7Iv0IoAFaiYeSSIo%2BGQeTFjXp21Z&X-Amz-Signature=3c688c38e53784ae516422fdc174f63b36c59af2345683ebcb5de3f29fa7e143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKYKHE6C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIASld%2FljYUrAGcHBwL4gIDqDI7bL1Hp2Jq6r7k9oPnXBAiEAlBm1M8NWuPNe76p0fo33n1y7AojrRjYXj92rTA%2BulxAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEXiDPZCj2bdXSOBAircA4wRHFakv1DXcg4bIGkvCSZBafaTvhF1KLGQ10GUJ8sm69iOx9BJR84HaB%2B9oVLlxrOdr5pbm6zYvF3E4TQjHpp%2BIOSk9FxGihFnK2J1i3rbgD10egPh%2Bapn%2BWcFI3ngRyegT%2BkBbrr5CCQGrV5zYmM0Y1lrrkAs9gwrH8r0Z41tWJL6yJHJ8OsppTsAV7N0MtCH2EJGyOImDmFB6cWJn81Kx7NQ9%2Fi7KgfEOIkEi7AT2hmdUgoRDP0aCrx1rXsca224AkVM2tdTiVPmtLkCeBtvs6PDd7fJNVIpkDxVjNTCA1fIUXSxl9aQyWeiUEVSKG2ZT5k64DEUWfUaAstldBXUFbjC4TscyDxWtTUfs7%2Fv3icITMQ2msdjqEihBj8%2FmhAZjUV%2BcBNi5R2cBmjo6fRR9onWVTU6VErG29ZdJeSKFPu1GhFx43o5rRa7A7E1p9jjJOsJKj%2BF4Y%2FJrbbkU3WbwAUZT16MxhhSOARC69ypX23sF7rDfrh6BY2%2BQoMc8WteJqEwjHOc4lt6rvOVs%2FPvqOM9qO6aLo4bJg1Wgi69bIVTfG%2BNNAyO0wu0eFhB9AhKwiXXTOhNg4eQN06yvwEcZM333IBgiMWH1uTM0MLU3MUJmcYxl0enljLYMKS7lsQGOqUB4jTwAvbvx%2BOeKJ%2BTYo4dg2SrL%2Bar%2BsNy%2Bxse5VROksA2M9PCh0GvSVDq3dBE7b3SfhEwLeVa%2BHl9jpjiVX5p0c0FCA09bvYwSq3FCV0MnDsVILvXsPKxfYaqBBkRBcoTDBtlR0CaBsjt13OvnMeeF7udIAAJ6KJnAsKSCTJEM5XRXBspzp%2BLeR7sOVN0Vclp7Iv0IoAFaiYeSSIo%2BGQeTFjXp21Z&X-Amz-Signature=c075fd026b82f8ee57c29e385dd9d0ed6f7ec1d7500ecdcc8f462bfa44847bd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKYKHE6C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIASld%2FljYUrAGcHBwL4gIDqDI7bL1Hp2Jq6r7k9oPnXBAiEAlBm1M8NWuPNe76p0fo33n1y7AojrRjYXj92rTA%2BulxAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDEXiDPZCj2bdXSOBAircA4wRHFakv1DXcg4bIGkvCSZBafaTvhF1KLGQ10GUJ8sm69iOx9BJR84HaB%2B9oVLlxrOdr5pbm6zYvF3E4TQjHpp%2BIOSk9FxGihFnK2J1i3rbgD10egPh%2Bapn%2BWcFI3ngRyegT%2BkBbrr5CCQGrV5zYmM0Y1lrrkAs9gwrH8r0Z41tWJL6yJHJ8OsppTsAV7N0MtCH2EJGyOImDmFB6cWJn81Kx7NQ9%2Fi7KgfEOIkEi7AT2hmdUgoRDP0aCrx1rXsca224AkVM2tdTiVPmtLkCeBtvs6PDd7fJNVIpkDxVjNTCA1fIUXSxl9aQyWeiUEVSKG2ZT5k64DEUWfUaAstldBXUFbjC4TscyDxWtTUfs7%2Fv3icITMQ2msdjqEihBj8%2FmhAZjUV%2BcBNi5R2cBmjo6fRR9onWVTU6VErG29ZdJeSKFPu1GhFx43o5rRa7A7E1p9jjJOsJKj%2BF4Y%2FJrbbkU3WbwAUZT16MxhhSOARC69ypX23sF7rDfrh6BY2%2BQoMc8WteJqEwjHOc4lt6rvOVs%2FPvqOM9qO6aLo4bJg1Wgi69bIVTfG%2BNNAyO0wu0eFhB9AhKwiXXTOhNg4eQN06yvwEcZM333IBgiMWH1uTM0MLU3MUJmcYxl0enljLYMKS7lsQGOqUB4jTwAvbvx%2BOeKJ%2BTYo4dg2SrL%2Bar%2BsNy%2Bxse5VROksA2M9PCh0GvSVDq3dBE7b3SfhEwLeVa%2BHl9jpjiVX5p0c0FCA09bvYwSq3FCV0MnDsVILvXsPKxfYaqBBkRBcoTDBtlR0CaBsjt13OvnMeeF7udIAAJ6KJnAsKSCTJEM5XRXBspzp%2BLeR7sOVN0Vclp7Iv0IoAFaiYeSSIo%2BGQeTFjXp21Z&X-Amz-Signature=be5d96ceb3532701e69a91f25fb6049ed1ae42309b1ecec9b14d37bbeac33458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
