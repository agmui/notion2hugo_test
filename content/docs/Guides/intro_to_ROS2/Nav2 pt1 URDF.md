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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654OJJLM3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6F%2BvQhFiaXPcluBDUoAb56fRlDiLItleYRULoajBBRAIgUjwWCAnGA%2F9dcxIw1k5lguNMREBglvU9erqB8H5OlIgqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpnmicJ3CG8d48QVyrcA3R0nk1MpPTcvuv52LqOoVINKZSnH00SYs4Fd%2BjuixB2nEBbLTBRnRu87QygZ3Zh%2Bom681OCaP%2BnBjlnfuvCBK0RpLiFWjoRsawze0Few0ig7%2BzeSdP1LW9gTC4lyBDRgpdBNU57x97DxAAfP1Obp9OiOeRBvpK76JMnEfwnx6EQMckrMd2oEnZD9bPh2bUhZxZshkAx97aNUuCsD%2B%2B8Nsm3aXc95WTsSLkl%2FL3HDL4Gen3RvKHpc%2Fr74AipxNhFGO9z76qNlrNaddB%2FgxEG6Psbd1UTZdpsKqA%2FqQjA6vFL8y1L3TxB%2FrPHbAm0xlIXnF22ofb%2FZpGZfl%2FEhOMl55whqftpqnvvvGCK0jcqUQn3bzwti%2FGMuCGezW2IjdIcqVDe2XoSVwCxyujzsIPUrpMoR5hMLkdb0abxNUyjuEwZBwGIcDom6c0rXXtn0CjXcCzg%2BEVpDGCnKxmPBbpZS5lY1QhksRtR8l17VICogZmxcCCogL9eONntTZO7mgiMLzz32OUubA4TQXD30YvOX8Saa2zC6n0I1pg%2FFnims0ylJzoxIgUPPk9GdortBSqZ4%2FqmT88qMqKOCVcV1vPVPtRrLKmPbkkEpjj8zL0ko3L331VOcjWu9r5Fjv4VMML14MQGOqUByvvCAydkqcGIjnlS8lI938ZjZUtTwQJL4S%2B17DXSh5W4nuISbBK1VGtehDIADxHsYI9rTcCWHQPWx4Wu1hO9cpiEXNid5La1o0eQJ1CoRgSu9oGzfnOCnDMCsRKOKk%2F10g3JF8f56TYmt%2FkOtQ%2FTlKIKT9clX0jWvlJ%2BGgm6ZzqeoqzIrrDSI8w9eW4ooBxUIjAetMg62KXvSs25xchrN0Jtzq%2Bg&X-Amz-Signature=b7d5a37377f313a7e90d25d57cd1287bdfd1668a9fa0d44d4b64a5ebe582336c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654OJJLM3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6F%2BvQhFiaXPcluBDUoAb56fRlDiLItleYRULoajBBRAIgUjwWCAnGA%2F9dcxIw1k5lguNMREBglvU9erqB8H5OlIgqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpnmicJ3CG8d48QVyrcA3R0nk1MpPTcvuv52LqOoVINKZSnH00SYs4Fd%2BjuixB2nEBbLTBRnRu87QygZ3Zh%2Bom681OCaP%2BnBjlnfuvCBK0RpLiFWjoRsawze0Few0ig7%2BzeSdP1LW9gTC4lyBDRgpdBNU57x97DxAAfP1Obp9OiOeRBvpK76JMnEfwnx6EQMckrMd2oEnZD9bPh2bUhZxZshkAx97aNUuCsD%2B%2B8Nsm3aXc95WTsSLkl%2FL3HDL4Gen3RvKHpc%2Fr74AipxNhFGO9z76qNlrNaddB%2FgxEG6Psbd1UTZdpsKqA%2FqQjA6vFL8y1L3TxB%2FrPHbAm0xlIXnF22ofb%2FZpGZfl%2FEhOMl55whqftpqnvvvGCK0jcqUQn3bzwti%2FGMuCGezW2IjdIcqVDe2XoSVwCxyujzsIPUrpMoR5hMLkdb0abxNUyjuEwZBwGIcDom6c0rXXtn0CjXcCzg%2BEVpDGCnKxmPBbpZS5lY1QhksRtR8l17VICogZmxcCCogL9eONntTZO7mgiMLzz32OUubA4TQXD30YvOX8Saa2zC6n0I1pg%2FFnims0ylJzoxIgUPPk9GdortBSqZ4%2FqmT88qMqKOCVcV1vPVPtRrLKmPbkkEpjj8zL0ko3L331VOcjWu9r5Fjv4VMML14MQGOqUByvvCAydkqcGIjnlS8lI938ZjZUtTwQJL4S%2B17DXSh5W4nuISbBK1VGtehDIADxHsYI9rTcCWHQPWx4Wu1hO9cpiEXNid5La1o0eQJ1CoRgSu9oGzfnOCnDMCsRKOKk%2F10g3JF8f56TYmt%2FkOtQ%2FTlKIKT9clX0jWvlJ%2BGgm6ZzqeoqzIrrDSI8w9eW4ooBxUIjAetMg62KXvSs25xchrN0Jtzq%2Bg&X-Amz-Signature=2d0d2024abda40646992bfe31e9488a85036cb77096f81e55e288587aab0ec9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654OJJLM3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6F%2BvQhFiaXPcluBDUoAb56fRlDiLItleYRULoajBBRAIgUjwWCAnGA%2F9dcxIw1k5lguNMREBglvU9erqB8H5OlIgqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpnmicJ3CG8d48QVyrcA3R0nk1MpPTcvuv52LqOoVINKZSnH00SYs4Fd%2BjuixB2nEBbLTBRnRu87QygZ3Zh%2Bom681OCaP%2BnBjlnfuvCBK0RpLiFWjoRsawze0Few0ig7%2BzeSdP1LW9gTC4lyBDRgpdBNU57x97DxAAfP1Obp9OiOeRBvpK76JMnEfwnx6EQMckrMd2oEnZD9bPh2bUhZxZshkAx97aNUuCsD%2B%2B8Nsm3aXc95WTsSLkl%2FL3HDL4Gen3RvKHpc%2Fr74AipxNhFGO9z76qNlrNaddB%2FgxEG6Psbd1UTZdpsKqA%2FqQjA6vFL8y1L3TxB%2FrPHbAm0xlIXnF22ofb%2FZpGZfl%2FEhOMl55whqftpqnvvvGCK0jcqUQn3bzwti%2FGMuCGezW2IjdIcqVDe2XoSVwCxyujzsIPUrpMoR5hMLkdb0abxNUyjuEwZBwGIcDom6c0rXXtn0CjXcCzg%2BEVpDGCnKxmPBbpZS5lY1QhksRtR8l17VICogZmxcCCogL9eONntTZO7mgiMLzz32OUubA4TQXD30YvOX8Saa2zC6n0I1pg%2FFnims0ylJzoxIgUPPk9GdortBSqZ4%2FqmT88qMqKOCVcV1vPVPtRrLKmPbkkEpjj8zL0ko3L331VOcjWu9r5Fjv4VMML14MQGOqUByvvCAydkqcGIjnlS8lI938ZjZUtTwQJL4S%2B17DXSh5W4nuISbBK1VGtehDIADxHsYI9rTcCWHQPWx4Wu1hO9cpiEXNid5La1o0eQJ1CoRgSu9oGzfnOCnDMCsRKOKk%2F10g3JF8f56TYmt%2FkOtQ%2FTlKIKT9clX0jWvlJ%2BGgm6ZzqeoqzIrrDSI8w9eW4ooBxUIjAetMg62KXvSs25xchrN0Jtzq%2Bg&X-Amz-Signature=c3a61b96ccdad6a33a7284a3adf4bead6b9bfd972944c4b3b4162bf8b8e23be5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654OJJLM3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6F%2BvQhFiaXPcluBDUoAb56fRlDiLItleYRULoajBBRAIgUjwWCAnGA%2F9dcxIw1k5lguNMREBglvU9erqB8H5OlIgqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpnmicJ3CG8d48QVyrcA3R0nk1MpPTcvuv52LqOoVINKZSnH00SYs4Fd%2BjuixB2nEBbLTBRnRu87QygZ3Zh%2Bom681OCaP%2BnBjlnfuvCBK0RpLiFWjoRsawze0Few0ig7%2BzeSdP1LW9gTC4lyBDRgpdBNU57x97DxAAfP1Obp9OiOeRBvpK76JMnEfwnx6EQMckrMd2oEnZD9bPh2bUhZxZshkAx97aNUuCsD%2B%2B8Nsm3aXc95WTsSLkl%2FL3HDL4Gen3RvKHpc%2Fr74AipxNhFGO9z76qNlrNaddB%2FgxEG6Psbd1UTZdpsKqA%2FqQjA6vFL8y1L3TxB%2FrPHbAm0xlIXnF22ofb%2FZpGZfl%2FEhOMl55whqftpqnvvvGCK0jcqUQn3bzwti%2FGMuCGezW2IjdIcqVDe2XoSVwCxyujzsIPUrpMoR5hMLkdb0abxNUyjuEwZBwGIcDom6c0rXXtn0CjXcCzg%2BEVpDGCnKxmPBbpZS5lY1QhksRtR8l17VICogZmxcCCogL9eONntTZO7mgiMLzz32OUubA4TQXD30YvOX8Saa2zC6n0I1pg%2FFnims0ylJzoxIgUPPk9GdortBSqZ4%2FqmT88qMqKOCVcV1vPVPtRrLKmPbkkEpjj8zL0ko3L331VOcjWu9r5Fjv4VMML14MQGOqUByvvCAydkqcGIjnlS8lI938ZjZUtTwQJL4S%2B17DXSh5W4nuISbBK1VGtehDIADxHsYI9rTcCWHQPWx4Wu1hO9cpiEXNid5La1o0eQJ1CoRgSu9oGzfnOCnDMCsRKOKk%2F10g3JF8f56TYmt%2FkOtQ%2FTlKIKT9clX0jWvlJ%2BGgm6ZzqeoqzIrrDSI8w9eW4ooBxUIjAetMg62KXvSs25xchrN0Jtzq%2Bg&X-Amz-Signature=8993b99cae85bcb3fa860dfa2f32ad389967949593cab63ca9181237dc5fba33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654OJJLM3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6F%2BvQhFiaXPcluBDUoAb56fRlDiLItleYRULoajBBRAIgUjwWCAnGA%2F9dcxIw1k5lguNMREBglvU9erqB8H5OlIgqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpnmicJ3CG8d48QVyrcA3R0nk1MpPTcvuv52LqOoVINKZSnH00SYs4Fd%2BjuixB2nEBbLTBRnRu87QygZ3Zh%2Bom681OCaP%2BnBjlnfuvCBK0RpLiFWjoRsawze0Few0ig7%2BzeSdP1LW9gTC4lyBDRgpdBNU57x97DxAAfP1Obp9OiOeRBvpK76JMnEfwnx6EQMckrMd2oEnZD9bPh2bUhZxZshkAx97aNUuCsD%2B%2B8Nsm3aXc95WTsSLkl%2FL3HDL4Gen3RvKHpc%2Fr74AipxNhFGO9z76qNlrNaddB%2FgxEG6Psbd1UTZdpsKqA%2FqQjA6vFL8y1L3TxB%2FrPHbAm0xlIXnF22ofb%2FZpGZfl%2FEhOMl55whqftpqnvvvGCK0jcqUQn3bzwti%2FGMuCGezW2IjdIcqVDe2XoSVwCxyujzsIPUrpMoR5hMLkdb0abxNUyjuEwZBwGIcDom6c0rXXtn0CjXcCzg%2BEVpDGCnKxmPBbpZS5lY1QhksRtR8l17VICogZmxcCCogL9eONntTZO7mgiMLzz32OUubA4TQXD30YvOX8Saa2zC6n0I1pg%2FFnims0ylJzoxIgUPPk9GdortBSqZ4%2FqmT88qMqKOCVcV1vPVPtRrLKmPbkkEpjj8zL0ko3L331VOcjWu9r5Fjv4VMML14MQGOqUByvvCAydkqcGIjnlS8lI938ZjZUtTwQJL4S%2B17DXSh5W4nuISbBK1VGtehDIADxHsYI9rTcCWHQPWx4Wu1hO9cpiEXNid5La1o0eQJ1CoRgSu9oGzfnOCnDMCsRKOKk%2F10g3JF8f56TYmt%2FkOtQ%2FTlKIKT9clX0jWvlJ%2BGgm6ZzqeoqzIrrDSI8w9eW4ooBxUIjAetMg62KXvSs25xchrN0Jtzq%2Bg&X-Amz-Signature=7ca06d7e20b2273feb4c485d2a93da7a1550e4f63f272521c3e9e091da7c5a00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654OJJLM3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6F%2BvQhFiaXPcluBDUoAb56fRlDiLItleYRULoajBBRAIgUjwWCAnGA%2F9dcxIw1k5lguNMREBglvU9erqB8H5OlIgqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpnmicJ3CG8d48QVyrcA3R0nk1MpPTcvuv52LqOoVINKZSnH00SYs4Fd%2BjuixB2nEBbLTBRnRu87QygZ3Zh%2Bom681OCaP%2BnBjlnfuvCBK0RpLiFWjoRsawze0Few0ig7%2BzeSdP1LW9gTC4lyBDRgpdBNU57x97DxAAfP1Obp9OiOeRBvpK76JMnEfwnx6EQMckrMd2oEnZD9bPh2bUhZxZshkAx97aNUuCsD%2B%2B8Nsm3aXc95WTsSLkl%2FL3HDL4Gen3RvKHpc%2Fr74AipxNhFGO9z76qNlrNaddB%2FgxEG6Psbd1UTZdpsKqA%2FqQjA6vFL8y1L3TxB%2FrPHbAm0xlIXnF22ofb%2FZpGZfl%2FEhOMl55whqftpqnvvvGCK0jcqUQn3bzwti%2FGMuCGezW2IjdIcqVDe2XoSVwCxyujzsIPUrpMoR5hMLkdb0abxNUyjuEwZBwGIcDom6c0rXXtn0CjXcCzg%2BEVpDGCnKxmPBbpZS5lY1QhksRtR8l17VICogZmxcCCogL9eONntTZO7mgiMLzz32OUubA4TQXD30YvOX8Saa2zC6n0I1pg%2FFnims0ylJzoxIgUPPk9GdortBSqZ4%2FqmT88qMqKOCVcV1vPVPtRrLKmPbkkEpjj8zL0ko3L331VOcjWu9r5Fjv4VMML14MQGOqUByvvCAydkqcGIjnlS8lI938ZjZUtTwQJL4S%2B17DXSh5W4nuISbBK1VGtehDIADxHsYI9rTcCWHQPWx4Wu1hO9cpiEXNid5La1o0eQJ1CoRgSu9oGzfnOCnDMCsRKOKk%2F10g3JF8f56TYmt%2FkOtQ%2FTlKIKT9clX0jWvlJ%2BGgm6ZzqeoqzIrrDSI8w9eW4ooBxUIjAetMg62KXvSs25xchrN0Jtzq%2Bg&X-Amz-Signature=10aaa92c03f74a90495bf196dfdbd286ce0d2d73d1de02fb210b2b8e86e7f009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654OJJLM3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6F%2BvQhFiaXPcluBDUoAb56fRlDiLItleYRULoajBBRAIgUjwWCAnGA%2F9dcxIw1k5lguNMREBglvU9erqB8H5OlIgqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpnmicJ3CG8d48QVyrcA3R0nk1MpPTcvuv52LqOoVINKZSnH00SYs4Fd%2BjuixB2nEBbLTBRnRu87QygZ3Zh%2Bom681OCaP%2BnBjlnfuvCBK0RpLiFWjoRsawze0Few0ig7%2BzeSdP1LW9gTC4lyBDRgpdBNU57x97DxAAfP1Obp9OiOeRBvpK76JMnEfwnx6EQMckrMd2oEnZD9bPh2bUhZxZshkAx97aNUuCsD%2B%2B8Nsm3aXc95WTsSLkl%2FL3HDL4Gen3RvKHpc%2Fr74AipxNhFGO9z76qNlrNaddB%2FgxEG6Psbd1UTZdpsKqA%2FqQjA6vFL8y1L3TxB%2FrPHbAm0xlIXnF22ofb%2FZpGZfl%2FEhOMl55whqftpqnvvvGCK0jcqUQn3bzwti%2FGMuCGezW2IjdIcqVDe2XoSVwCxyujzsIPUrpMoR5hMLkdb0abxNUyjuEwZBwGIcDom6c0rXXtn0CjXcCzg%2BEVpDGCnKxmPBbpZS5lY1QhksRtR8l17VICogZmxcCCogL9eONntTZO7mgiMLzz32OUubA4TQXD30YvOX8Saa2zC6n0I1pg%2FFnims0ylJzoxIgUPPk9GdortBSqZ4%2FqmT88qMqKOCVcV1vPVPtRrLKmPbkkEpjj8zL0ko3L331VOcjWu9r5Fjv4VMML14MQGOqUByvvCAydkqcGIjnlS8lI938ZjZUtTwQJL4S%2B17DXSh5W4nuISbBK1VGtehDIADxHsYI9rTcCWHQPWx4Wu1hO9cpiEXNid5La1o0eQJ1CoRgSu9oGzfnOCnDMCsRKOKk%2F10g3JF8f56TYmt%2FkOtQ%2FTlKIKT9clX0jWvlJ%2BGgm6ZzqeoqzIrrDSI8w9eW4ooBxUIjAetMg62KXvSs25xchrN0Jtzq%2Bg&X-Amz-Signature=25cdd865335f0e9651a55b238294c6eff1c6350fcce3d2f9ba6a933464585167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654OJJLM3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6F%2BvQhFiaXPcluBDUoAb56fRlDiLItleYRULoajBBRAIgUjwWCAnGA%2F9dcxIw1k5lguNMREBglvU9erqB8H5OlIgqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpnmicJ3CG8d48QVyrcA3R0nk1MpPTcvuv52LqOoVINKZSnH00SYs4Fd%2BjuixB2nEBbLTBRnRu87QygZ3Zh%2Bom681OCaP%2BnBjlnfuvCBK0RpLiFWjoRsawze0Few0ig7%2BzeSdP1LW9gTC4lyBDRgpdBNU57x97DxAAfP1Obp9OiOeRBvpK76JMnEfwnx6EQMckrMd2oEnZD9bPh2bUhZxZshkAx97aNUuCsD%2B%2B8Nsm3aXc95WTsSLkl%2FL3HDL4Gen3RvKHpc%2Fr74AipxNhFGO9z76qNlrNaddB%2FgxEG6Psbd1UTZdpsKqA%2FqQjA6vFL8y1L3TxB%2FrPHbAm0xlIXnF22ofb%2FZpGZfl%2FEhOMl55whqftpqnvvvGCK0jcqUQn3bzwti%2FGMuCGezW2IjdIcqVDe2XoSVwCxyujzsIPUrpMoR5hMLkdb0abxNUyjuEwZBwGIcDom6c0rXXtn0CjXcCzg%2BEVpDGCnKxmPBbpZS5lY1QhksRtR8l17VICogZmxcCCogL9eONntTZO7mgiMLzz32OUubA4TQXD30YvOX8Saa2zC6n0I1pg%2FFnims0ylJzoxIgUPPk9GdortBSqZ4%2FqmT88qMqKOCVcV1vPVPtRrLKmPbkkEpjj8zL0ko3L331VOcjWu9r5Fjv4VMML14MQGOqUByvvCAydkqcGIjnlS8lI938ZjZUtTwQJL4S%2B17DXSh5W4nuISbBK1VGtehDIADxHsYI9rTcCWHQPWx4Wu1hO9cpiEXNid5La1o0eQJ1CoRgSu9oGzfnOCnDMCsRKOKk%2F10g3JF8f56TYmt%2FkOtQ%2FTlKIKT9clX0jWvlJ%2BGgm6ZzqeoqzIrrDSI8w9eW4ooBxUIjAetMg62KXvSs25xchrN0Jtzq%2Bg&X-Amz-Signature=db717c81b43b4cda120a54496b661d09ee931fbf549b1ae343750c846ff2abe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654OJJLM3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6F%2BvQhFiaXPcluBDUoAb56fRlDiLItleYRULoajBBRAIgUjwWCAnGA%2F9dcxIw1k5lguNMREBglvU9erqB8H5OlIgqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpnmicJ3CG8d48QVyrcA3R0nk1MpPTcvuv52LqOoVINKZSnH00SYs4Fd%2BjuixB2nEBbLTBRnRu87QygZ3Zh%2Bom681OCaP%2BnBjlnfuvCBK0RpLiFWjoRsawze0Few0ig7%2BzeSdP1LW9gTC4lyBDRgpdBNU57x97DxAAfP1Obp9OiOeRBvpK76JMnEfwnx6EQMckrMd2oEnZD9bPh2bUhZxZshkAx97aNUuCsD%2B%2B8Nsm3aXc95WTsSLkl%2FL3HDL4Gen3RvKHpc%2Fr74AipxNhFGO9z76qNlrNaddB%2FgxEG6Psbd1UTZdpsKqA%2FqQjA6vFL8y1L3TxB%2FrPHbAm0xlIXnF22ofb%2FZpGZfl%2FEhOMl55whqftpqnvvvGCK0jcqUQn3bzwti%2FGMuCGezW2IjdIcqVDe2XoSVwCxyujzsIPUrpMoR5hMLkdb0abxNUyjuEwZBwGIcDom6c0rXXtn0CjXcCzg%2BEVpDGCnKxmPBbpZS5lY1QhksRtR8l17VICogZmxcCCogL9eONntTZO7mgiMLzz32OUubA4TQXD30YvOX8Saa2zC6n0I1pg%2FFnims0ylJzoxIgUPPk9GdortBSqZ4%2FqmT88qMqKOCVcV1vPVPtRrLKmPbkkEpjj8zL0ko3L331VOcjWu9r5Fjv4VMML14MQGOqUByvvCAydkqcGIjnlS8lI938ZjZUtTwQJL4S%2B17DXSh5W4nuISbBK1VGtehDIADxHsYI9rTcCWHQPWx4Wu1hO9cpiEXNid5La1o0eQJ1CoRgSu9oGzfnOCnDMCsRKOKk%2F10g3JF8f56TYmt%2FkOtQ%2FTlKIKT9clX0jWvlJ%2BGgm6ZzqeoqzIrrDSI8w9eW4ooBxUIjAetMg62KXvSs25xchrN0Jtzq%2Bg&X-Amz-Signature=a12f168d2b8445feeb623ae58ca4ee30f33382be3fb2d8c1fab3e4dff7f6732a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654OJJLM3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6F%2BvQhFiaXPcluBDUoAb56fRlDiLItleYRULoajBBRAIgUjwWCAnGA%2F9dcxIw1k5lguNMREBglvU9erqB8H5OlIgqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpnmicJ3CG8d48QVyrcA3R0nk1MpPTcvuv52LqOoVINKZSnH00SYs4Fd%2BjuixB2nEBbLTBRnRu87QygZ3Zh%2Bom681OCaP%2BnBjlnfuvCBK0RpLiFWjoRsawze0Few0ig7%2BzeSdP1LW9gTC4lyBDRgpdBNU57x97DxAAfP1Obp9OiOeRBvpK76JMnEfwnx6EQMckrMd2oEnZD9bPh2bUhZxZshkAx97aNUuCsD%2B%2B8Nsm3aXc95WTsSLkl%2FL3HDL4Gen3RvKHpc%2Fr74AipxNhFGO9z76qNlrNaddB%2FgxEG6Psbd1UTZdpsKqA%2FqQjA6vFL8y1L3TxB%2FrPHbAm0xlIXnF22ofb%2FZpGZfl%2FEhOMl55whqftpqnvvvGCK0jcqUQn3bzwti%2FGMuCGezW2IjdIcqVDe2XoSVwCxyujzsIPUrpMoR5hMLkdb0abxNUyjuEwZBwGIcDom6c0rXXtn0CjXcCzg%2BEVpDGCnKxmPBbpZS5lY1QhksRtR8l17VICogZmxcCCogL9eONntTZO7mgiMLzz32OUubA4TQXD30YvOX8Saa2zC6n0I1pg%2FFnims0ylJzoxIgUPPk9GdortBSqZ4%2FqmT88qMqKOCVcV1vPVPtRrLKmPbkkEpjj8zL0ko3L331VOcjWu9r5Fjv4VMML14MQGOqUByvvCAydkqcGIjnlS8lI938ZjZUtTwQJL4S%2B17DXSh5W4nuISbBK1VGtehDIADxHsYI9rTcCWHQPWx4Wu1hO9cpiEXNid5La1o0eQJ1CoRgSu9oGzfnOCnDMCsRKOKk%2F10g3JF8f56TYmt%2FkOtQ%2FTlKIKT9clX0jWvlJ%2BGgm6ZzqeoqzIrrDSI8w9eW4ooBxUIjAetMg62KXvSs25xchrN0Jtzq%2Bg&X-Amz-Signature=5900f1d2cb86682591e7151eb982a42003d31a4daac6e261c42c65f444235403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYZT4XEH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtdRUImerbQWMAgWBwpPsXIiCkuOTgT4gZ0d17yLuEWgIgJUv%2B72ubbWZCi6xP8UgSE8YTD6nGrjqeTSEiWNiIh%2BMqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvgc10muw4YZBqRsircAy9WHdGFrfyRc%2BD3alBgX86exQGg6FCHyymzp7qhnQgbNNMRRT2s8BmRIyZn%2ByroLLwTfjwziaiMoKCuYUJI2%2FIeOI%2FbjZBtjLolVwzjRrq7TtKSBuJYnTC4xOgt8Gvz6Eu2ox%2FLt6mb%2B5Tfyt4dRK19ywidek4zTfGNNnq2tiuTmayviBWg0KzztS1kCyVf5pqU%2Fu1QdnTwjfgdPxdL%2BLb%2FHHj0DYRv4ifXlGmQESclRrHjRiGpbABEc5MlbOm47NBSDivPhfBKSk8mV2nnGZUjIlbRHVnB%2FB2VDkpSnN4UG2RmLGb2WuJ9yk1ZtrwhVPD%2BeiTxyW5vjU19vyGfO%2FI4qXmaXlLjKYRhtiSNa7bLIM6k%2Ff7pcfbYJ8%2Fwj3NVtgaUbukl2D8QpGkjJDTO81lYEzuwjpNqx3BMBhOe2xQ3YMHwjyGsJKgK2wp4vhNqF9peOp2WD5ATeomFN3YscOHL2jrQdnvrU3GCwDmrApSxV%2FQkjNBD1fQOzi5ASaNBy2ZnzsLB5tYnFmD1ZZSaPsqU7MjohQJPFRrrgLWTPHAjGZ5aLuEYORDEuc2NyBeaExH3Zm%2FCIUJxwX1fVXFqsOO%2BDTngwE%2FGL0eWikyXzpcqH%2FQWgidDbFAPgJAVMOf14MQGOqUBPDDrWCTJ3Nuja8K5CA3RHpAxaqlgaHqIh237rALyPt%2BZllHIaTOTRDGOYsk3qNEFBZJzL0H%2F6FjuEBOVv8wVwK2kuLrPxMBWZjAgRkeCJ%2BB3qT0RsYXHXUJNRTg6ykgx%2BlgVymwUWkaBJPJwZF7%2Bz%2BWtKyFl7CU8LWjzBc6B35TqctRni%2FqTEO%2Fi41f2xBALcc8VUWILk6JtTJAlJBaC%2BFEK1LNl&X-Amz-Signature=49bdb11f9e7376b98df26c1e2b6672e43e86b6507525b6778039c177402fce80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB7U44AR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCIiHfBxmVCQc5MYFZdY0hE%2BYhmGck157ikTxvH1%2BWvwIhAL6NfteR6%2F56xMEQN4ExtHNKzt9xuYpKDyQWEfHXbW84KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfK49YlPbnyj0H8XQq3APRqVxmIMuRKKZ67adUO6pygrQM1TjywyDa6qWjjP9QzpFh441XZ5a3b4iE8Briilp3%2BIwJHZ8V07RkUrXum25iQ8gPnStnE2wM8yygkDZ%2BQTL4qhGn6yjsx6mO4SA74Ic8c2MEMkiCjAqY02yC1YD82JRY%2FQBbmNLw5C7fMKNs5eRQuRZwEhPgd0EvM23QR21nYe9zW%2F7bS4X2oxZealeDwtVPF3RGzuoDpQ6FJydzwYQP85LitLkQeOgUkLwdMVizOoRceYadkdxexIxuGvgZrAykbzqgtubc7Z2UwaRGA6hAUajVUlLqeKoyIx7Nup%2FHka7VltBoMZwLfZGQFI7x8E5mW9I2vWwOTSlxQ7IiJ4V6SyzkUh7IfGEqbDZqKkZlJGftYEvHrOuSVTq0w7Wz%2FwUiEciCeXK9lzy0KFRwTmXBY%2BHpDiLzw6GVyLJPNV%2BBNnlm2RK5OIS1yPFykQUH5%2BLidvZcJh1wt9TsXYwKyI7RL0xEuJTVTTfeZerOtxdb0NAtjpAUffM0cuOAl5IMOHhJOKIyAlGh1KmsObMEueuF%2BZS8i0Z1o%2BVN8d2U%2B3FaqyEK5yO4y5U3Zm2wUsrK1zeFRdIkm%2BW7uViVkp62PAs3kH1DNly3EBwSejDW9eDEBjqkATyfXltblbOmxDAFsh6tcFXJFDR15UqBFt3TMrZO9I0tMFyXXoW59ucHvOGgepXj1ERbTy0L7H2u5LgvJEl7%2BF2TT2bAeTq0C0GS7T%2BIHXyiV3EWQPF8M8QcSCtnpp8JPl8Ltc4xAmwMQYBDEI7j5TfKCxsjnDx46F7HIZXJoKa%2FGcnI6oq%2BUGmq%2B3OWkNQ0mlxIlNafZB8vWkR%2Fi8iv7kQfqqBO&X-Amz-Signature=c55260f3a3ace69cfac300366f1e04c632860472c05ebb3a1bb043f304f1578d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MPJG7PW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzZyThOOmQ9e84DWcuOVJycU0JmD%2FcmJbJtPk9ojrhjQIhAKQG4kM0DHgtiJ8jmsfX5%2BK4RyJoGTuLnOGVEp%2BKAhW6KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRaTu0CJCFhfggHbQq3AMk%2BUhkpM66EJIw%2BGIFt2iYcaZmB%2BRNtEurCXAruFxlaTtxmmBHaw5iNcRlbPrkbeVkvsSGEibQSQQF16K3izur0knWBvic%2FYfc%2BWNa7HadHhhrQr6Zq%2BsSCH2EhIueStzeaJHOPmDWrQD5CVIEKhizpEOfHUMv4zv5YVyCA6nJxoiYSh%2BKbSu1sOyPmyjULJ22vuTXU7TYdlOS2V3v9SdQ3n9Zi%2FSE3OVNQlqIG6Mhbi45ffPMu7EsvStbsPtCynVD7GpKSY%2BuIMV1nbwAzB4KSZwqrISET4ueB1cuS1u%2FsXCpGeVaqOV6H1Ud00RYT3%2FVYE3plTYFIAt5UsLNmLsE%2Bs03%2BLgVhSlhBWWp5b0sQWRJPoj18E7XNk%2FttK31%2BaKHydsewnxsNd0rl6RDu9VXN3oc6Y%2FuGJesvS09pJUI2ujWSBFIKTw97lZp7YgFRA6JqJuTX3jP7RDg2H6Cw7OMeB5Xz26hYFlvYTV%2BPrJjHvq7feEm25DlwBrhxkZrThq%2FDmHxRCHuLuX2uWUs6ru0EjwFLWFoX7aZvi3x599y9D9hTSfVItUaN%2BaBOKRJp1ai9W%2FSxUrQCiF0PsVL1ORnZ2zVjKHucTPj5LJEFln0coZIy8EmN0yz2Rv4dzD89ODEBjqkAc6gDVio6F5WdupLMdHTm4byrI9fYdNxjATSmpP4gyAbG8XzEDDUAJsEaiz5yYuecBi7RFL4WZL54OrUmbD2j2rK1IFFsFVtE%2BKuVKvdzx0EE5wjzxl8YLSJhKHctQc12Wchoyz6P9zkDLUdks3OiKJv1UsI5LHiOBzVnhu%2FP5%2BA3Lw8ahv5RafpOM7riWBE0PW%2BfS%2F5rk%2Bp1Se%2B4hVD0SRcvHHD&X-Amz-Signature=6caa33a3283bb6e78773f46c0daad609f3072b6c0fa8174df2171414caf33c6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654OJJLM3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6F%2BvQhFiaXPcluBDUoAb56fRlDiLItleYRULoajBBRAIgUjwWCAnGA%2F9dcxIw1k5lguNMREBglvU9erqB8H5OlIgqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpnmicJ3CG8d48QVyrcA3R0nk1MpPTcvuv52LqOoVINKZSnH00SYs4Fd%2BjuixB2nEBbLTBRnRu87QygZ3Zh%2Bom681OCaP%2BnBjlnfuvCBK0RpLiFWjoRsawze0Few0ig7%2BzeSdP1LW9gTC4lyBDRgpdBNU57x97DxAAfP1Obp9OiOeRBvpK76JMnEfwnx6EQMckrMd2oEnZD9bPh2bUhZxZshkAx97aNUuCsD%2B%2B8Nsm3aXc95WTsSLkl%2FL3HDL4Gen3RvKHpc%2Fr74AipxNhFGO9z76qNlrNaddB%2FgxEG6Psbd1UTZdpsKqA%2FqQjA6vFL8y1L3TxB%2FrPHbAm0xlIXnF22ofb%2FZpGZfl%2FEhOMl55whqftpqnvvvGCK0jcqUQn3bzwti%2FGMuCGezW2IjdIcqVDe2XoSVwCxyujzsIPUrpMoR5hMLkdb0abxNUyjuEwZBwGIcDom6c0rXXtn0CjXcCzg%2BEVpDGCnKxmPBbpZS5lY1QhksRtR8l17VICogZmxcCCogL9eONntTZO7mgiMLzz32OUubA4TQXD30YvOX8Saa2zC6n0I1pg%2FFnims0ylJzoxIgUPPk9GdortBSqZ4%2FqmT88qMqKOCVcV1vPVPtRrLKmPbkkEpjj8zL0ko3L331VOcjWu9r5Fjv4VMML14MQGOqUByvvCAydkqcGIjnlS8lI938ZjZUtTwQJL4S%2B17DXSh5W4nuISbBK1VGtehDIADxHsYI9rTcCWHQPWx4Wu1hO9cpiEXNid5La1o0eQJ1CoRgSu9oGzfnOCnDMCsRKOKk%2F10g3JF8f56TYmt%2FkOtQ%2FTlKIKT9clX0jWvlJ%2BGgm6ZzqeoqzIrrDSI8w9eW4ooBxUIjAetMg62KXvSs25xchrN0Jtzq%2Bg&X-Amz-Signature=b1f4937575b7b5d3d27e8802befaf1dba1e24e733254e4a7a89520a2f81cb10e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVH5UASQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAhrfFW9IDPjnwN090DBDewcuNLU7LndHpS9S00VEohgAiEAsGojEN%2FcwuXRzvNOeIkbho80%2BVvqxW1bMeDFR%2FglxIUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmpQyCpoSD2YMbR1yrcA7F6xzmuZ7mMKwBCuQ3Q1bKO4k3UsPQLB4SM1ExoMrAN0udSSbtYn4sD0k0xcPUFz09mbk7iEuRh5yxlNnegqDPWOv9EPdTsCP5aHn4QW68fGBP1DITwvSSmvgKK09i1Tg4nX4WhHQXrQ3i%2Fv4hcDiuUOfq%2BGkCaHupxNEl2rlaBPf5plfMBBPu7UKJVCVF3zJbSC81AsfH%2BPo7viExQiNaTpcRHYrGRJsf4DE5CESPGhQdRqJABD%2F5Uu9c1Z5UOpNWtyRNf5vY4yNLJ8a%2FP6EVqsDMjpJQQt%2BNSELt1aYBPbH%2B0Q2C7tFA%2Fsfg5V0K3q6npM4rQGHMTzviG64W0PN4Tec6ezIdxAQkBV5CaowJavmuH78jk%2FW%2F0qiDTpbKF%2B3AVNiX5FTpp5FyFV25J1pHJ3KZrpyWD%2F5otuBJviRp%2FfNyCTk51oFe8f3O6w1UwenfsIicQIjTOCGmy23tnvXHoRIO34zc3ePf7JUQWFRI5p8IR%2B0MDp2a42M0qkUKJ2eWj0jGitbCxbKGmALDqKS5hN2vNFiJ6EeRtpzSkUwtgW4ft258x9zDfgHyZ5upDJAaBS8yvLhsm66COFbNF%2F8MK3qaxPQo%2FwifbvkviSN%2FoeiSkBIHGvpkccahWMNj14MQGOqUBafp0ktfwSp%2BYSNaot0voujuBXZynAgsVATvXOQ31mGMpgoxEqBLhPPUBrXqfFuGx2vkUc17BdCTuN1kgOHEKVQI537g4nGFR90tPkUx%2F09P78PAsWpS2sgaG9lS0wFWIS2hQLF6p6e%2FCXv%2F%2FEY7%2Fr9WTx3XDENqdW2KYH7dlN4Eb1XvuicwzVwoDKglswEpUgVKUUs1GOQVrQy%2FvrAIrFabsvlue&X-Amz-Signature=0f60fa76906b2dce33985d86504b47906a6f231afce38a72987385b40de5bfdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654OJJLM3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6F%2BvQhFiaXPcluBDUoAb56fRlDiLItleYRULoajBBRAIgUjwWCAnGA%2F9dcxIw1k5lguNMREBglvU9erqB8H5OlIgqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpnmicJ3CG8d48QVyrcA3R0nk1MpPTcvuv52LqOoVINKZSnH00SYs4Fd%2BjuixB2nEBbLTBRnRu87QygZ3Zh%2Bom681OCaP%2BnBjlnfuvCBK0RpLiFWjoRsawze0Few0ig7%2BzeSdP1LW9gTC4lyBDRgpdBNU57x97DxAAfP1Obp9OiOeRBvpK76JMnEfwnx6EQMckrMd2oEnZD9bPh2bUhZxZshkAx97aNUuCsD%2B%2B8Nsm3aXc95WTsSLkl%2FL3HDL4Gen3RvKHpc%2Fr74AipxNhFGO9z76qNlrNaddB%2FgxEG6Psbd1UTZdpsKqA%2FqQjA6vFL8y1L3TxB%2FrPHbAm0xlIXnF22ofb%2FZpGZfl%2FEhOMl55whqftpqnvvvGCK0jcqUQn3bzwti%2FGMuCGezW2IjdIcqVDe2XoSVwCxyujzsIPUrpMoR5hMLkdb0abxNUyjuEwZBwGIcDom6c0rXXtn0CjXcCzg%2BEVpDGCnKxmPBbpZS5lY1QhksRtR8l17VICogZmxcCCogL9eONntTZO7mgiMLzz32OUubA4TQXD30YvOX8Saa2zC6n0I1pg%2FFnims0ylJzoxIgUPPk9GdortBSqZ4%2FqmT88qMqKOCVcV1vPVPtRrLKmPbkkEpjj8zL0ko3L331VOcjWu9r5Fjv4VMML14MQGOqUByvvCAydkqcGIjnlS8lI938ZjZUtTwQJL4S%2B17DXSh5W4nuISbBK1VGtehDIADxHsYI9rTcCWHQPWx4Wu1hO9cpiEXNid5La1o0eQJ1CoRgSu9oGzfnOCnDMCsRKOKk%2F10g3JF8f56TYmt%2FkOtQ%2FTlKIKT9clX0jWvlJ%2BGgm6ZzqeoqzIrrDSI8w9eW4ooBxUIjAetMg62KXvSs25xchrN0Jtzq%2Bg&X-Amz-Signature=6cc68c0b422c1eac91ec2366555d9c47470d46162b730c3b1d6e38a4844e09cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3PNWOGW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BAh%2Bd4RB7196ROhKv4yGJeLOd35zTJt4xSg6ybTXosgIgXH5xTFSSDCyZw0193CHbLNLn%2FhFKcVNqonWc9Bs7zOwqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5574p6K%2Bokd1SBcircA%2BV6rAB%2B%2Buqag0HRtC%2FFKRpkakcSHWdEym6C8LCrk2KDFtCul1eIjxOjDrym%2BwJ4ACp98V%2FAuBXf3alXRb2dNZneOYrX3hVupwl%2F7McR0C3nu%2Fm8Ud2lW4SCJRisR489cqjs9Xm4RzvNCQz3a1%2FoOHFQAgUTcyXPgL9lFbyH8OcrJZWOVPVYnQSnm0nh%2FPQTAzrBLaQnd3%2BFp2JA4j%2BCHLyQ1YfuGm9k%2BsQ%2BAGOBWYpSss4GcGLmoI%2B8KY%2BpWUWAse%2BmGpeae9M4C4O0HPqvq%2B7A6IW%2FiipQQAYKcUqTpDvesL7KtHEgKUzUlRIGNsShSipUrchCo82ZUUe42UejRy3yPCP1mzTlLHdeY7xO%2FnhbVek45wLrhyRWmIRKrqrVkbLYVL72JTYGWZm0M0cNGHeJvAR%2BbqaF8Dng9ACXkKVT0yTvPhp2o%2F51DUk85fDICc6fxwTaHBnZiF15tjw1%2BS0BJWKiAkzfCNICEuLOOJcymkRGG7PgrK3hDRqLjFw%2BS8%2BPFlvwPbUWL69ejXIboBCAkqAuQPuaIk3UDwq1yJF%2FPbLtmP0G7T3qYJxfs8DkmUxyhqmK0CfVwuFTCQz0QxC9H4%2BA2gD65kF%2Bli9ekBtljQRWYj8POS1hyOD%2BMIT14MQGOqUB3o9f0iodKC9kYlOKrPmMXoT7hLXbiSJF1L9f0XlkXpSqlArdRz%2FDxRVQ2pDDyhsDjkp8DTYNT8viJDyIry8WFMQ9sjgVC6lcm55Lwjg4rIogO0JsgSsdIBP4NimYYPpUHYrgIwrcjE9ewXp4tRtxBqv00qSYPsL%2FmrPdTJRWQLgoiJXBc%2BqPaM4BZEOobZxNZ39Ah0QEETnEC2sABnKbDMpiZmyU&X-Amz-Signature=718d9d87d089b485bbe0fece92afacedfacec93ce388b868d08e18b5e1bbf28c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654OJJLM3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6F%2BvQhFiaXPcluBDUoAb56fRlDiLItleYRULoajBBRAIgUjwWCAnGA%2F9dcxIw1k5lguNMREBglvU9erqB8H5OlIgqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpnmicJ3CG8d48QVyrcA3R0nk1MpPTcvuv52LqOoVINKZSnH00SYs4Fd%2BjuixB2nEBbLTBRnRu87QygZ3Zh%2Bom681OCaP%2BnBjlnfuvCBK0RpLiFWjoRsawze0Few0ig7%2BzeSdP1LW9gTC4lyBDRgpdBNU57x97DxAAfP1Obp9OiOeRBvpK76JMnEfwnx6EQMckrMd2oEnZD9bPh2bUhZxZshkAx97aNUuCsD%2B%2B8Nsm3aXc95WTsSLkl%2FL3HDL4Gen3RvKHpc%2Fr74AipxNhFGO9z76qNlrNaddB%2FgxEG6Psbd1UTZdpsKqA%2FqQjA6vFL8y1L3TxB%2FrPHbAm0xlIXnF22ofb%2FZpGZfl%2FEhOMl55whqftpqnvvvGCK0jcqUQn3bzwti%2FGMuCGezW2IjdIcqVDe2XoSVwCxyujzsIPUrpMoR5hMLkdb0abxNUyjuEwZBwGIcDom6c0rXXtn0CjXcCzg%2BEVpDGCnKxmPBbpZS5lY1QhksRtR8l17VICogZmxcCCogL9eONntTZO7mgiMLzz32OUubA4TQXD30YvOX8Saa2zC6n0I1pg%2FFnims0ylJzoxIgUPPk9GdortBSqZ4%2FqmT88qMqKOCVcV1vPVPtRrLKmPbkkEpjj8zL0ko3L331VOcjWu9r5Fjv4VMML14MQGOqUByvvCAydkqcGIjnlS8lI938ZjZUtTwQJL4S%2B17DXSh5W4nuISbBK1VGtehDIADxHsYI9rTcCWHQPWx4Wu1hO9cpiEXNid5La1o0eQJ1CoRgSu9oGzfnOCnDMCsRKOKk%2F10g3JF8f56TYmt%2FkOtQ%2FTlKIKT9clX0jWvlJ%2BGgm6ZzqeoqzIrrDSI8w9eW4ooBxUIjAetMg62KXvSs25xchrN0Jtzq%2Bg&X-Amz-Signature=34e7896fabbf5aefaf4bbf27080930ee40ff369a714c6afaab225e22d92c1967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OK4GV6D%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD548Id%2FYEG8TsNGZI770rw0zRre8U9WmTk4QhbNFgoaQIhAI6Sg0WjPNXrp%2BWHV48cwSfIODlF1No8UpwWMQ%2BAjZa7KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6URNdmNv3kPjGhkkq3AP%2FRqPGJOqFV7n0hELCl4TIFH%2BsvP9kynO343QQ2kFQImmyzfNdCeQetEUPeaJhTZVUwiSY8XcXOyyzBEEQBhgbwoWInJJ01BXVJmnDJxXbZuDNfrCwqj2tQ4kepJuHtWRO%2BCqZrXllKZbbRRcC26yUidUq61yj1OkAA8Cydh5zkYH0xGkm%2FWY7HfRQLnH5Drr34GzFquZW0NpJkwbYxhVWvlLzweL8AQD4I7H6LIQEOfdRX6G8vMv%2FaTQmFbdo3usUa1zAc%2BlaJ9R2kv6lrNTyB6i%2BDhRvBAOjloY89crDIS%2BUvGvHIgClUaIyyoNz3XRl3uczIRRPvfOaKR8WSO%2FZFSsubFy%2BACtNFT81qX%2F8RuX9F8603FV6dsWqXKsSwWkTfqS%2FwfOhTcMTdi17rO6L2e9hecR4qICgFS0ybj%2F%2FEK1p6uvkxx4a%2BcYw8%2B1mKVdpcXr6R7Nk6QZ4ioOJ%2BZ1087ZxA9bG%2BKY4o36gHO8EjlyBhJyD%2BDmEmLxOy0p4SzuIr0DI8njJdvKkf1Yp4QCRQlkI%2FJ3mY9gTmEna32Ox%2FdBA0S4TuR7o1wmzW0t%2FgZY%2FF3bsNAkJ3awhD3WDvYnPglkNXnB%2FbSA7jR%2BjUogsDTW9yYSl7qBreh6sYjCE9eDEBjqkAbCkU0BZwTBWMcIGeNjlY4hR0lum4WHugDJjsoZnsj7TekVMhkl7JlwSGP6C4fY8OHl84Km5cac%2BKr10Z3hHiB6D6dW%2FBbqz7WK0QdwRxMQ75fUWBP92mpQFBC9ORvff3vFXv7YsuPAaT9W54atsCHPfW%2FplVISmM8aSZ91RK98vCaPSwLeizx%2FmUB5O11KiwEx4mXpDSZWVA4xDabcn7fpHLFU6&X-Amz-Signature=48b0b4df6841b043e2b359c5215140a7f5b9a4e33525233fe725180922bd18eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654OJJLM3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6F%2BvQhFiaXPcluBDUoAb56fRlDiLItleYRULoajBBRAIgUjwWCAnGA%2F9dcxIw1k5lguNMREBglvU9erqB8H5OlIgqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpnmicJ3CG8d48QVyrcA3R0nk1MpPTcvuv52LqOoVINKZSnH00SYs4Fd%2BjuixB2nEBbLTBRnRu87QygZ3Zh%2Bom681OCaP%2BnBjlnfuvCBK0RpLiFWjoRsawze0Few0ig7%2BzeSdP1LW9gTC4lyBDRgpdBNU57x97DxAAfP1Obp9OiOeRBvpK76JMnEfwnx6EQMckrMd2oEnZD9bPh2bUhZxZshkAx97aNUuCsD%2B%2B8Nsm3aXc95WTsSLkl%2FL3HDL4Gen3RvKHpc%2Fr74AipxNhFGO9z76qNlrNaddB%2FgxEG6Psbd1UTZdpsKqA%2FqQjA6vFL8y1L3TxB%2FrPHbAm0xlIXnF22ofb%2FZpGZfl%2FEhOMl55whqftpqnvvvGCK0jcqUQn3bzwti%2FGMuCGezW2IjdIcqVDe2XoSVwCxyujzsIPUrpMoR5hMLkdb0abxNUyjuEwZBwGIcDom6c0rXXtn0CjXcCzg%2BEVpDGCnKxmPBbpZS5lY1QhksRtR8l17VICogZmxcCCogL9eONntTZO7mgiMLzz32OUubA4TQXD30YvOX8Saa2zC6n0I1pg%2FFnims0ylJzoxIgUPPk9GdortBSqZ4%2FqmT88qMqKOCVcV1vPVPtRrLKmPbkkEpjj8zL0ko3L331VOcjWu9r5Fjv4VMML14MQGOqUByvvCAydkqcGIjnlS8lI938ZjZUtTwQJL4S%2B17DXSh5W4nuISbBK1VGtehDIADxHsYI9rTcCWHQPWx4Wu1hO9cpiEXNid5La1o0eQJ1CoRgSu9oGzfnOCnDMCsRKOKk%2F10g3JF8f56TYmt%2FkOtQ%2FTlKIKT9clX0jWvlJ%2BGgm6ZzqeoqzIrrDSI8w9eW4ooBxUIjAetMg62KXvSs25xchrN0Jtzq%2Bg&X-Amz-Signature=f2c728f88dc3b8bae095a4de6e3d82f5b9381f5c6f13da3a77783222f335533a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLC35CYR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkNMZDFTXKtzED0yjiYz0CZWcyZfD6JArb%2B5itwoHxVwIgSKu%2FaANqrPSEZis5nBHRPsPZq%2FjhhAsqukRqFEaGxBYqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5RnvZUQDn%2BBPaYNyrcA5nMKXApHmE9lwNQauqjLGMkBiBNsTd953GM6T1tYwdf3Lh9b4AIPYUvl48JU8AyZVcfFUggYhko3rzFpF%2BdVVT6O2VCUTOJSWmivH42z%2FpFkIMhW1C%2BmWP36QfsV%2BicO0cMQWzyqvdVqm1Bo1P4JGzADk46ocwYVx3z8iSbPRmJAo%2F0YEIzAlrzWAkpM3epuPVY7TJR7y8vl0rXaIkZIwShxxpCv4w26VSS3cKDOZeVMadDz0Xe%2FmejlvOOfnJro8Jeckt2T74vk86PVXhmNeAqHcjjY4FQRLkoLAhcLquEU1p7jTxi761SIkkIg1j0N59B6zX4OXoASQX%2FfnMubFMmt2cLwPOxXKD%2BKG7Sj7V08TWyBSCtc8eJAsYa9hjSZXza5cKTOyh0amVQzcrOsMxP1QnQzQCZKwoIgghwCNz0miTa0inUY9Y2itea%2B36t5Jss84pCqgxEFxLv92%2FH7fxtTQoTbZ8KIIDmrfIgMZFDpUFrfKoHpWiQz2gvd4%2Bl9LlbHcQM8PNEEgt6f4ibqIgchWPoxht7vyF1VPimwfgb4%2BLzvF96FTb8Dbha12qvSWFqmzUXJUBnP%2ByJZpqpOLnS01OOpwawSfZpCEs%2FnvOxcPe3FSyGOUddSJ7EMJH14MQGOqUB2LUI4NIqj9sqkEQ2dcyNDRrFG8KR%2BwZXDBjG7Z02HO5TSO0eO%2FgI%2FjpXvH6uB62YsBgYOuV4Ij1EOkA%2F5LA%2FT9UmDWAdsZsum5jY8a0NyR2qwnM6i2iXb2Upo9rbVvkne%2FHLVTDyDRyb5tsSY8U5Nvoe2ud8kgRedI1Zc2yhnBPTUuKXsIIm7%2BuNc%2BhAAoGvOxC%2FtpLolM1ez7NLc%2F2g%2FK1yjVh8&X-Amz-Signature=9098911ac170564972dca547918de9dbf01a1ad20bc56b2776be9bf92e35c5ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664TVDOLJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfNbZfIOhXttM5xrPoukeEbFLWY0C7%2BHqAV9P453Rc8gIgUmgnf%2F9Ce2bk0hvQIfAZCPDGIu9K8ucGfjofACLfrVYqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdqs6ghxD1mfvBizSrcA6V%2BqcN%2B4ALmr9KeLaffZki%2F1BkDLm9k%2F1xsm2gkW5%2B2ikQ4IPVAOPkdddURydDZa%2FwWLITaclUa%2By4JMr%2BB2AxnBP6KPLxsyHq1M6K0tJjOjzzw%2B2x%2B0ThWe2nn5VCr8h6By%2F4u8zYZBp974o2MP8uw52%2BAozrcV1cGO1DFWRV3Ov4SnNI6YuSqFJBC3AiFd07XfHj7Pgq5Yw%2F2V79ea8seckCzuLhDYXSbpBBxvAsiKmZRrch98Eg3f3GHLKAfytctrsJQ8Kdb%2B2Kfsoq3vsA2MyLFAN%2B%2BIZxn9KgNwN0lYCyL1wpogZuIK8ww0Lb8fWGdH5nXMEnz1GzOMUjiahUp86YIB35xrSS2sfF5u99PdGYW3C0QcUc2MuWhADZmhLOrbNCwCFGUxUuF6e1exZ5GP3CkbFxyMWF3h7WoO3Z44BywfNyr8Pb%2BgO312pVkTanw9OHLdsVfbDFgNhW9eQmaEevnEDfLv4FRjzVEVlrWrSb5x%2FxzbvUAqlgYr5x9YaWoJPRM91%2FktAvUg5LkvV0%2BnuEnJm4HFU9kIjQTY0l4lv3B5j6KWgFhxUsmqrrSsKqU%2BkjaDlsTz4UZngEucWicBJl05bhMV%2FzVV1%2FgXUPKUsmE7BHlZFl0v7poMMP14MQGOqUBmWHeRWIIiGwRyutO%2BAQT%2Bm%2BiA%2FcGgflZtPd649hNoMdORAVayCMnMr%2BhZbMY62c0j%2Fn7Alsm385d%2FikzchvW09d12zhquh2fCryTL%2FN4jdVbMmpXm2nqfxQZbf7JSrHjh0gAVWmON2ejbQ3ewcnOxdYIxbEdYyaBom5WSbowKBHA0P6yo0F5unVH3Rn4SJ9ECf1FwNAxtxoumRVUB9m1SHbU2ZcK&X-Amz-Signature=5838bf8f6a5b7a2ed123a3fdceafd96adbc5e5822d5731856415fa4b2fa3df00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WVDDJIE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7BNN65AqirhEnXI3MWAJDrVPkg254WO1kCptxq66bhgIhAPJAqQS16suolj4V1ZRhINoQrbepRmB9uYDHF5dtynkmKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyB3iiqVj8o0k8o3IQq3APrXZF0nEOQR4yCNGZ%2FioFWOrkBGMlUFzKMt45ThUGVV%2BLQy8s7AH0Rugn30HlaXHhWCQad7TZyxLTEgruFj5C9%2BZPc0YGAImMuU2n9ldXBW2GBErNnbXRcKSDcVzbycZOJHAwskD4sM2qsnIss9C6i5x0fBXVqoTsViiZL5zlJMjuUvj1VabUsGSpeTKVb4BmyvRkhCo9Z2vvGGDAiQLZrRV8MmnejGkj4LQBP9gXpwazw1kbUy54UaxWNGwaH5ZCqRMpi3n9e1ViJUWCsB5LW5te5ZVbeHsvpiiV0k67%2F9YX7E5KVA1JvLhKZ7pXMZLEjKl0eXIWaTY18RtuTSzEWi8Ouj9tdxPqZ0BnpFDeDkwtVsBAnhMmSezpBs%2F6Vi3SJqrcSIPq3FsRxSKjCNZbcorYmS612N%2FEAfL3JOYwNaB6DVBkKDVGu0%2BHR1B0tlrLLFepBQ9CQLFKRYrW0O1pFbZgBztvvGGXaeBh4URoQk%2FA3uhkCr35i%2BFCmGqvTfopIvWJf2%2Fuq3EnUv1wG2HhqEUMuVkODg1tsTemS2hpW7fB%2Bc7MtYt8uj1ia9hEYxM76i%2FZFe1DkXFt%2FCUz47A81bG2kWINq%2F0zbO%2F7UKROZrglU3csrvPFfLyXEuzCf9eDEBjqkAXMKoJT0kYxC3tKGX1TLc9DYFDymZuO1M%2BB%2BR%2BcbHjpiqm3Afe8aitwG79BwnxwJOAPzUtOUtdhqNavrCFQp%2Fgg2qeX%2FNtJea03nm5T1VQAHaAbOZqsZQTHM0yINfa0Vg9n1rhBxV8SSstXgwmGeGAMMXuRMnQFh39HQrH3WX0qQFdMOGNdMr%2BEfa%2FauIqGjtBUcvIJWc6LkY9BdaXraVenOnDRd&X-Amz-Signature=4a9e4ea479fba648400db25072595de24a92afaf186980ee73a9358527445a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTS4UEVB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKoUpZ8YeAeKojVWAUhtHm32tsgaQhd7tP43aqfZ%2B1QAiBCV8wox6Dz0ePVEpej81rx2aHPxCRi8svla15fI5xQ5CqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZYyfPzw5oozP%2BA21KtwDJSYsK41qnX16YHnhIo5YuEyoNk7CtlZfO5fAWVK%2BnmZ6%2FktV9AMVGyZBsLxf%2FA2niQGw4WSszCEALc4%2BfZWX0m0K2AFUQmF6Sv7prqmyDjAznhF8xye8uvAkqVNM8veZ4Orw4Klw5XLqa7dJ4kFPXbp6ESuAJzrmTZUuMJhie%2FlE08%2BXG5hS5jq12p37t7AKGDSHMDQaeavrQh3ysA7S6Fq2Tj8ZVGmLn1BHCYBX3%2BFBQGDLhErilajL3lnqRfLNexXkYMJ97bdN3MtKGfReLlPzY9eZmtwY5Exsp5%2BPFrxW7zcGCxlHnE6njNFiFpme5avZqdMLvYMD2fuc7juYHwyda5H38orpOCwCHkJ4f%2FjVXe19sPcOD%2BCL95iXIE6ebn5B337r25GyyrrxV60A4jKPYAbJxTUAZ%2FXOTF1uWBe4mFB3RnoFwpwyB6u%2F%2FWNut2SRV5vTBHwEAdzYoEH1i3c2nfv%2FXl89gw%2F6NlxK67Ns8wddJ5HLQb6z8vd%2B29Eunpv%2FKr6pjNsufYGsULRU1J35urOfYv6zAHpQEWloJxDMH1Ziil1sqg6Uzs7iD9IaQRn6gDOrq4zH2xD1bDFZd3aemiPbGCBlCNeb53ZIcWN2DH%2BqJkGG4nJ2l2wwqPXgxAY6pgHgK8rwwePEXxYIhu2yUcT%2Fs5tbh7w2et0%2BJva1iGCQzjjJT2UiFvWHn3CweoCmjhmk7vyyCJCSWh5SL1BbLaEygcGfVwqZF5HUgNZ9MQQP6yQ5%2B%2FzgJdlCzoFEtjCg6G4OyZ%2Fi6ASPD%2Fz64NuPyKBYveAs%2BEUh0v36MvqeKYZc4JFALyy%2FJSV0Q7c9kGlME2GnZfC7eJrHO7wz25CBOyEBRjsR2ghi&X-Amz-Signature=9e09f545c76865595b2b866bada6b42b03e126642253eba9b20fc7fc112029de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OTJIFDD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2tSNfcVFFG0NI0eaOWppnowVOBZIBZ7aBOZKqbv8z9gIhAPCkzG9LHPBP1PMBmy%2BG84Qm08TLjWKm2ytpKb4AERjoKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5IYkV%2F0%2BqSJxXicwq3AMNydKP8pmCYGPTKPGJIOqvO7sWfyLjwWcDkc5IUKzjzJNmMc270to8RrqawDs%2BLRpdgGLfynlIuLyF06kxCPOapVRzUbw2qUwasYw7Xvz6yNhXlamnp0cwUp8nR%2FwruTQEpp8mU2dcmo%2FRuxW8JKqgN78SYLjNCiIiNziE%2B4Sr0XoNCgzBr3exIKyvXq69jbCbSB27%2FBrJ9jlrVcOM8kDmBRHxA5zxjbUVhpV3pKKDLHoSFs49nBZtwSM6xVY7sV8AiLDSBoLoCLP0HKmK8sB3wDzbAeHXPUbq4aIdEpY7%2F8YHoE3fBwqlUHV%2BL%2F2BRB55BurFzKKVCdGeUe7tXokfzh8JbwXsPeFrEcsuMQxmXZfJaUgMGpYvBP1F2pGHdBOQj5QI7xnzRdYIf6lK9%2FHiNo85tlGqh6cqsdcCFjT71xmIQ2J0mR7EHvgpMjtg1NI8GyO6ZsCJbJbzmKYqzsk7uCDD4O4Zndv0sT2TGhprhBp5ouFSXuffk5vnQBNmH5Nz62tgWvms%2BFb5rC8Tgb%2BIa8KIVsg17hCvp8hEfNiQMw7fC8HQT5L1sgOJfXWYXMhLN5pkNqD1EZQPNCQ7u2vZtFQLSwF4qs4sqU4mE%2Fv4K9kvNJXLvRlBbpc5GjDu9eDEBjqkAbDjfDfCCabufd6Xjsn%2FzV80h2%2BZrB0kbVMJJhlE%2BfbqrNZCjF3A8EsS3xjCJFFX0UvKyBUMhXmxgQgzdlX9PAKhz5%2B9tq7S4FkoU%2FylkTm4%2FWOzlYEEy9Whf%2BhKS4jSu0gxenzkgZr7dtpJZ5LiOsLEnHbEDjT%2BVnt%2B0JyIybuOpU%2BWRrgJlMofkcipqeZ0tzcsBUuCryJqsotSwuL7JvDaJkIS&X-Amz-Signature=017dd50e1761f84d7558e4ebe7e8243d3cea77beab4d289bf8ee17d4b457f0a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654OJJLM3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6F%2BvQhFiaXPcluBDUoAb56fRlDiLItleYRULoajBBRAIgUjwWCAnGA%2F9dcxIw1k5lguNMREBglvU9erqB8H5OlIgqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpnmicJ3CG8d48QVyrcA3R0nk1MpPTcvuv52LqOoVINKZSnH00SYs4Fd%2BjuixB2nEBbLTBRnRu87QygZ3Zh%2Bom681OCaP%2BnBjlnfuvCBK0RpLiFWjoRsawze0Few0ig7%2BzeSdP1LW9gTC4lyBDRgpdBNU57x97DxAAfP1Obp9OiOeRBvpK76JMnEfwnx6EQMckrMd2oEnZD9bPh2bUhZxZshkAx97aNUuCsD%2B%2B8Nsm3aXc95WTsSLkl%2FL3HDL4Gen3RvKHpc%2Fr74AipxNhFGO9z76qNlrNaddB%2FgxEG6Psbd1UTZdpsKqA%2FqQjA6vFL8y1L3TxB%2FrPHbAm0xlIXnF22ofb%2FZpGZfl%2FEhOMl55whqftpqnvvvGCK0jcqUQn3bzwti%2FGMuCGezW2IjdIcqVDe2XoSVwCxyujzsIPUrpMoR5hMLkdb0abxNUyjuEwZBwGIcDom6c0rXXtn0CjXcCzg%2BEVpDGCnKxmPBbpZS5lY1QhksRtR8l17VICogZmxcCCogL9eONntTZO7mgiMLzz32OUubA4TQXD30YvOX8Saa2zC6n0I1pg%2FFnims0ylJzoxIgUPPk9GdortBSqZ4%2FqmT88qMqKOCVcV1vPVPtRrLKmPbkkEpjj8zL0ko3L331VOcjWu9r5Fjv4VMML14MQGOqUByvvCAydkqcGIjnlS8lI938ZjZUtTwQJL4S%2B17DXSh5W4nuISbBK1VGtehDIADxHsYI9rTcCWHQPWx4Wu1hO9cpiEXNid5La1o0eQJ1CoRgSu9oGzfnOCnDMCsRKOKk%2F10g3JF8f56TYmt%2FkOtQ%2FTlKIKT9clX0jWvlJ%2BGgm6ZzqeoqzIrrDSI8w9eW4ooBxUIjAetMg62KXvSs25xchrN0Jtzq%2Bg&X-Amz-Signature=c380f165a90792cc8f2b4b4aab880ae474b1e346c6f6b82eff4e262a8eac13b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654OJJLM3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6F%2BvQhFiaXPcluBDUoAb56fRlDiLItleYRULoajBBRAIgUjwWCAnGA%2F9dcxIw1k5lguNMREBglvU9erqB8H5OlIgqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpnmicJ3CG8d48QVyrcA3R0nk1MpPTcvuv52LqOoVINKZSnH00SYs4Fd%2BjuixB2nEBbLTBRnRu87QygZ3Zh%2Bom681OCaP%2BnBjlnfuvCBK0RpLiFWjoRsawze0Few0ig7%2BzeSdP1LW9gTC4lyBDRgpdBNU57x97DxAAfP1Obp9OiOeRBvpK76JMnEfwnx6EQMckrMd2oEnZD9bPh2bUhZxZshkAx97aNUuCsD%2B%2B8Nsm3aXc95WTsSLkl%2FL3HDL4Gen3RvKHpc%2Fr74AipxNhFGO9z76qNlrNaddB%2FgxEG6Psbd1UTZdpsKqA%2FqQjA6vFL8y1L3TxB%2FrPHbAm0xlIXnF22ofb%2FZpGZfl%2FEhOMl55whqftpqnvvvGCK0jcqUQn3bzwti%2FGMuCGezW2IjdIcqVDe2XoSVwCxyujzsIPUrpMoR5hMLkdb0abxNUyjuEwZBwGIcDom6c0rXXtn0CjXcCzg%2BEVpDGCnKxmPBbpZS5lY1QhksRtR8l17VICogZmxcCCogL9eONntTZO7mgiMLzz32OUubA4TQXD30YvOX8Saa2zC6n0I1pg%2FFnims0ylJzoxIgUPPk9GdortBSqZ4%2FqmT88qMqKOCVcV1vPVPtRrLKmPbkkEpjj8zL0ko3L331VOcjWu9r5Fjv4VMML14MQGOqUByvvCAydkqcGIjnlS8lI938ZjZUtTwQJL4S%2B17DXSh5W4nuISbBK1VGtehDIADxHsYI9rTcCWHQPWx4Wu1hO9cpiEXNid5La1o0eQJ1CoRgSu9oGzfnOCnDMCsRKOKk%2F10g3JF8f56TYmt%2FkOtQ%2FTlKIKT9clX0jWvlJ%2BGgm6ZzqeoqzIrrDSI8w9eW4ooBxUIjAetMg62KXvSs25xchrN0Jtzq%2Bg&X-Amz-Signature=1f48709058f049ff6254d9bf8e6cf28f06db7318fff2314507132d48999d7974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOZS7CGR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2ocQww9qAQEsk7fybJJLsbhp%2BDjOdX8ihosASEuNRqAIgV%2BUc9zb6clFOeqcwXDKzDk0jNXHgPSBXYYlX3tczX2wqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4MnVNT3z%2BGNdt5YSrcA3WQr1SD1cB1QWQyiQ3xH69FhBrJemp7l7PqDy97GXTjGJ9mkkpKn9sVhaVVvRQuuMQL6TVm9MjCOWuwC%2BhbW18oFWOIpe9D1LQFHrvuDYMDrWuVB3nBAyY92rUkArgCDgD6sytj4q6dLTxnV8%2FNPy1wPkNN1ahO9qdp0fK3eLQn0mRvRy1jzlMrmXnWugO47vqqtQAw7pXstLV1GKxSBK%2B5cJk6wlO0M8JTRXIF2nKVZAcI3dhg3U3X0SROcAt6Mwghst18xQ1nvEi3rxsj6DvlIaJ3bNv8EBymHzZHUzwJgUCV22Cpx65WYWgM03yiZgx%2BkB%2BF6kiYm%2FK8YN5%2BHxrsq5vqVdrHW64XpPJTjegzEk%2BJUNbrpqp4EwyTzga%2F29ywiusl5ucn01TOysC%2FWMjITCK9h5%2BzC9mL1EI29yjXXIoLQdA6pWZrbSWviGO2dAre%2FXI2FBO0hcBv1rBVNy2Spp6Y5%2F%2FE%2BkxCu4LEKU9U8KjYJK%2FOxhDj%2ByJb8ENXi3ty6vqcgJ%2BYO2yp8zMcjelbPERR9R9LWOI%2B%2BtuhtAGZfRrNfYjrKa2lZ4m7mvEHn324qqm7gb9vztWpYj7DhgXCcjSx32RA%2FCNlFJCR0M6dWKtnxt5ISYKkhNp7MKn14MQGOqUBXxjhNys0jm8EVR4LCsnXLxGtapDMB0hNcKALcck74PSoZ525EPcEUBR80vd2WYV%2Bo4RGS7PKumh%2ByDo0X9eFEKqqSBRG6BQr0xfFeWr2YUXmMQTNXBygK1SmrHsW0z3SljPXbw5jiYaO8KHvKLchL6g4DahXL%2F2ZYo8NgV7twdoHipEfCDcjlIIVOxdRa0X0UMhaLS02UW7oV%2BDv3QqtnseD6rON&X-Amz-Signature=daff3eace08c33070e8191d9ad288120d9d554df11000f202121b6d28dc41f05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOZS7CGR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2ocQww9qAQEsk7fybJJLsbhp%2BDjOdX8ihosASEuNRqAIgV%2BUc9zb6clFOeqcwXDKzDk0jNXHgPSBXYYlX3tczX2wqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4MnVNT3z%2BGNdt5YSrcA3WQr1SD1cB1QWQyiQ3xH69FhBrJemp7l7PqDy97GXTjGJ9mkkpKn9sVhaVVvRQuuMQL6TVm9MjCOWuwC%2BhbW18oFWOIpe9D1LQFHrvuDYMDrWuVB3nBAyY92rUkArgCDgD6sytj4q6dLTxnV8%2FNPy1wPkNN1ahO9qdp0fK3eLQn0mRvRy1jzlMrmXnWugO47vqqtQAw7pXstLV1GKxSBK%2B5cJk6wlO0M8JTRXIF2nKVZAcI3dhg3U3X0SROcAt6Mwghst18xQ1nvEi3rxsj6DvlIaJ3bNv8EBymHzZHUzwJgUCV22Cpx65WYWgM03yiZgx%2BkB%2BF6kiYm%2FK8YN5%2BHxrsq5vqVdrHW64XpPJTjegzEk%2BJUNbrpqp4EwyTzga%2F29ywiusl5ucn01TOysC%2FWMjITCK9h5%2BzC9mL1EI29yjXXIoLQdA6pWZrbSWviGO2dAre%2FXI2FBO0hcBv1rBVNy2Spp6Y5%2F%2FE%2BkxCu4LEKU9U8KjYJK%2FOxhDj%2ByJb8ENXi3ty6vqcgJ%2BYO2yp8zMcjelbPERR9R9LWOI%2B%2BtuhtAGZfRrNfYjrKa2lZ4m7mvEHn324qqm7gb9vztWpYj7DhgXCcjSx32RA%2FCNlFJCR0M6dWKtnxt5ISYKkhNp7MKn14MQGOqUBXxjhNys0jm8EVR4LCsnXLxGtapDMB0hNcKALcck74PSoZ525EPcEUBR80vd2WYV%2Bo4RGS7PKumh%2ByDo0X9eFEKqqSBRG6BQr0xfFeWr2YUXmMQTNXBygK1SmrHsW0z3SljPXbw5jiYaO8KHvKLchL6g4DahXL%2F2ZYo8NgV7twdoHipEfCDcjlIIVOxdRa0X0UMhaLS02UW7oV%2BDv3QqtnseD6rON&X-Amz-Signature=36e761a1f97d55e4fdeb0ebcf19d083894752b87374feb7ed775122298fd5e9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOZS7CGR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2ocQww9qAQEsk7fybJJLsbhp%2BDjOdX8ihosASEuNRqAIgV%2BUc9zb6clFOeqcwXDKzDk0jNXHgPSBXYYlX3tczX2wqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4MnVNT3z%2BGNdt5YSrcA3WQr1SD1cB1QWQyiQ3xH69FhBrJemp7l7PqDy97GXTjGJ9mkkpKn9sVhaVVvRQuuMQL6TVm9MjCOWuwC%2BhbW18oFWOIpe9D1LQFHrvuDYMDrWuVB3nBAyY92rUkArgCDgD6sytj4q6dLTxnV8%2FNPy1wPkNN1ahO9qdp0fK3eLQn0mRvRy1jzlMrmXnWugO47vqqtQAw7pXstLV1GKxSBK%2B5cJk6wlO0M8JTRXIF2nKVZAcI3dhg3U3X0SROcAt6Mwghst18xQ1nvEi3rxsj6DvlIaJ3bNv8EBymHzZHUzwJgUCV22Cpx65WYWgM03yiZgx%2BkB%2BF6kiYm%2FK8YN5%2BHxrsq5vqVdrHW64XpPJTjegzEk%2BJUNbrpqp4EwyTzga%2F29ywiusl5ucn01TOysC%2FWMjITCK9h5%2BzC9mL1EI29yjXXIoLQdA6pWZrbSWviGO2dAre%2FXI2FBO0hcBv1rBVNy2Spp6Y5%2F%2FE%2BkxCu4LEKU9U8KjYJK%2FOxhDj%2ByJb8ENXi3ty6vqcgJ%2BYO2yp8zMcjelbPERR9R9LWOI%2B%2BtuhtAGZfRrNfYjrKa2lZ4m7mvEHn324qqm7gb9vztWpYj7DhgXCcjSx32RA%2FCNlFJCR0M6dWKtnxt5ISYKkhNp7MKn14MQGOqUBXxjhNys0jm8EVR4LCsnXLxGtapDMB0hNcKALcck74PSoZ525EPcEUBR80vd2WYV%2Bo4RGS7PKumh%2ByDo0X9eFEKqqSBRG6BQr0xfFeWr2YUXmMQTNXBygK1SmrHsW0z3SljPXbw5jiYaO8KHvKLchL6g4DahXL%2F2ZYo8NgV7twdoHipEfCDcjlIIVOxdRa0X0UMhaLS02UW7oV%2BDv3QqtnseD6rON&X-Amz-Signature=2d9bff573e3631b91ae311177620d6b4878b92ed6a3147ddd8c20b33bb31cf4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOZS7CGR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2ocQww9qAQEsk7fybJJLsbhp%2BDjOdX8ihosASEuNRqAIgV%2BUc9zb6clFOeqcwXDKzDk0jNXHgPSBXYYlX3tczX2wqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4MnVNT3z%2BGNdt5YSrcA3WQr1SD1cB1QWQyiQ3xH69FhBrJemp7l7PqDy97GXTjGJ9mkkpKn9sVhaVVvRQuuMQL6TVm9MjCOWuwC%2BhbW18oFWOIpe9D1LQFHrvuDYMDrWuVB3nBAyY92rUkArgCDgD6sytj4q6dLTxnV8%2FNPy1wPkNN1ahO9qdp0fK3eLQn0mRvRy1jzlMrmXnWugO47vqqtQAw7pXstLV1GKxSBK%2B5cJk6wlO0M8JTRXIF2nKVZAcI3dhg3U3X0SROcAt6Mwghst18xQ1nvEi3rxsj6DvlIaJ3bNv8EBymHzZHUzwJgUCV22Cpx65WYWgM03yiZgx%2BkB%2BF6kiYm%2FK8YN5%2BHxrsq5vqVdrHW64XpPJTjegzEk%2BJUNbrpqp4EwyTzga%2F29ywiusl5ucn01TOysC%2FWMjITCK9h5%2BzC9mL1EI29yjXXIoLQdA6pWZrbSWviGO2dAre%2FXI2FBO0hcBv1rBVNy2Spp6Y5%2F%2FE%2BkxCu4LEKU9U8KjYJK%2FOxhDj%2ByJb8ENXi3ty6vqcgJ%2BYO2yp8zMcjelbPERR9R9LWOI%2B%2BtuhtAGZfRrNfYjrKa2lZ4m7mvEHn324qqm7gb9vztWpYj7DhgXCcjSx32RA%2FCNlFJCR0M6dWKtnxt5ISYKkhNp7MKn14MQGOqUBXxjhNys0jm8EVR4LCsnXLxGtapDMB0hNcKALcck74PSoZ525EPcEUBR80vd2WYV%2Bo4RGS7PKumh%2ByDo0X9eFEKqqSBRG6BQr0xfFeWr2YUXmMQTNXBygK1SmrHsW0z3SljPXbw5jiYaO8KHvKLchL6g4DahXL%2F2ZYo8NgV7twdoHipEfCDcjlIIVOxdRa0X0UMhaLS02UW7oV%2BDv3QqtnseD6rON&X-Amz-Signature=5ecd49115cd1bcfb8112233b592a47063de8f61a2ac239ee9d19dc338a67f3b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOZS7CGR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2ocQww9qAQEsk7fybJJLsbhp%2BDjOdX8ihosASEuNRqAIgV%2BUc9zb6clFOeqcwXDKzDk0jNXHgPSBXYYlX3tczX2wqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4MnVNT3z%2BGNdt5YSrcA3WQr1SD1cB1QWQyiQ3xH69FhBrJemp7l7PqDy97GXTjGJ9mkkpKn9sVhaVVvRQuuMQL6TVm9MjCOWuwC%2BhbW18oFWOIpe9D1LQFHrvuDYMDrWuVB3nBAyY92rUkArgCDgD6sytj4q6dLTxnV8%2FNPy1wPkNN1ahO9qdp0fK3eLQn0mRvRy1jzlMrmXnWugO47vqqtQAw7pXstLV1GKxSBK%2B5cJk6wlO0M8JTRXIF2nKVZAcI3dhg3U3X0SROcAt6Mwghst18xQ1nvEi3rxsj6DvlIaJ3bNv8EBymHzZHUzwJgUCV22Cpx65WYWgM03yiZgx%2BkB%2BF6kiYm%2FK8YN5%2BHxrsq5vqVdrHW64XpPJTjegzEk%2BJUNbrpqp4EwyTzga%2F29ywiusl5ucn01TOysC%2FWMjITCK9h5%2BzC9mL1EI29yjXXIoLQdA6pWZrbSWviGO2dAre%2FXI2FBO0hcBv1rBVNy2Spp6Y5%2F%2FE%2BkxCu4LEKU9U8KjYJK%2FOxhDj%2ByJb8ENXi3ty6vqcgJ%2BYO2yp8zMcjelbPERR9R9LWOI%2B%2BtuhtAGZfRrNfYjrKa2lZ4m7mvEHn324qqm7gb9vztWpYj7DhgXCcjSx32RA%2FCNlFJCR0M6dWKtnxt5ISYKkhNp7MKn14MQGOqUBXxjhNys0jm8EVR4LCsnXLxGtapDMB0hNcKALcck74PSoZ525EPcEUBR80vd2WYV%2Bo4RGS7PKumh%2ByDo0X9eFEKqqSBRG6BQr0xfFeWr2YUXmMQTNXBygK1SmrHsW0z3SljPXbw5jiYaO8KHvKLchL6g4DahXL%2F2ZYo8NgV7twdoHipEfCDcjlIIVOxdRa0X0UMhaLS02UW7oV%2BDv3QqtnseD6rON&X-Amz-Signature=6ebe9ccb830d5054ff297f59da51cf9d9536147d6b62da02f5982a714ab0fc51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOZS7CGR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2ocQww9qAQEsk7fybJJLsbhp%2BDjOdX8ihosASEuNRqAIgV%2BUc9zb6clFOeqcwXDKzDk0jNXHgPSBXYYlX3tczX2wqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4MnVNT3z%2BGNdt5YSrcA3WQr1SD1cB1QWQyiQ3xH69FhBrJemp7l7PqDy97GXTjGJ9mkkpKn9sVhaVVvRQuuMQL6TVm9MjCOWuwC%2BhbW18oFWOIpe9D1LQFHrvuDYMDrWuVB3nBAyY92rUkArgCDgD6sytj4q6dLTxnV8%2FNPy1wPkNN1ahO9qdp0fK3eLQn0mRvRy1jzlMrmXnWugO47vqqtQAw7pXstLV1GKxSBK%2B5cJk6wlO0M8JTRXIF2nKVZAcI3dhg3U3X0SROcAt6Mwghst18xQ1nvEi3rxsj6DvlIaJ3bNv8EBymHzZHUzwJgUCV22Cpx65WYWgM03yiZgx%2BkB%2BF6kiYm%2FK8YN5%2BHxrsq5vqVdrHW64XpPJTjegzEk%2BJUNbrpqp4EwyTzga%2F29ywiusl5ucn01TOysC%2FWMjITCK9h5%2BzC9mL1EI29yjXXIoLQdA6pWZrbSWviGO2dAre%2FXI2FBO0hcBv1rBVNy2Spp6Y5%2F%2FE%2BkxCu4LEKU9U8KjYJK%2FOxhDj%2ByJb8ENXi3ty6vqcgJ%2BYO2yp8zMcjelbPERR9R9LWOI%2B%2BtuhtAGZfRrNfYjrKa2lZ4m7mvEHn324qqm7gb9vztWpYj7DhgXCcjSx32RA%2FCNlFJCR0M6dWKtnxt5ISYKkhNp7MKn14MQGOqUBXxjhNys0jm8EVR4LCsnXLxGtapDMB0hNcKALcck74PSoZ525EPcEUBR80vd2WYV%2Bo4RGS7PKumh%2ByDo0X9eFEKqqSBRG6BQr0xfFeWr2YUXmMQTNXBygK1SmrHsW0z3SljPXbw5jiYaO8KHvKLchL6g4DahXL%2F2ZYo8NgV7twdoHipEfCDcjlIIVOxdRa0X0UMhaLS02UW7oV%2BDv3QqtnseD6rON&X-Amz-Signature=e6f40c19fba4c101ebbd8e64a79723d1dce4dd5b66136d92402561b29380efda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOZS7CGR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2ocQww9qAQEsk7fybJJLsbhp%2BDjOdX8ihosASEuNRqAIgV%2BUc9zb6clFOeqcwXDKzDk0jNXHgPSBXYYlX3tczX2wqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4MnVNT3z%2BGNdt5YSrcA3WQr1SD1cB1QWQyiQ3xH69FhBrJemp7l7PqDy97GXTjGJ9mkkpKn9sVhaVVvRQuuMQL6TVm9MjCOWuwC%2BhbW18oFWOIpe9D1LQFHrvuDYMDrWuVB3nBAyY92rUkArgCDgD6sytj4q6dLTxnV8%2FNPy1wPkNN1ahO9qdp0fK3eLQn0mRvRy1jzlMrmXnWugO47vqqtQAw7pXstLV1GKxSBK%2B5cJk6wlO0M8JTRXIF2nKVZAcI3dhg3U3X0SROcAt6Mwghst18xQ1nvEi3rxsj6DvlIaJ3bNv8EBymHzZHUzwJgUCV22Cpx65WYWgM03yiZgx%2BkB%2BF6kiYm%2FK8YN5%2BHxrsq5vqVdrHW64XpPJTjegzEk%2BJUNbrpqp4EwyTzga%2F29ywiusl5ucn01TOysC%2FWMjITCK9h5%2BzC9mL1EI29yjXXIoLQdA6pWZrbSWviGO2dAre%2FXI2FBO0hcBv1rBVNy2Spp6Y5%2F%2FE%2BkxCu4LEKU9U8KjYJK%2FOxhDj%2ByJb8ENXi3ty6vqcgJ%2BYO2yp8zMcjelbPERR9R9LWOI%2B%2BtuhtAGZfRrNfYjrKa2lZ4m7mvEHn324qqm7gb9vztWpYj7DhgXCcjSx32RA%2FCNlFJCR0M6dWKtnxt5ISYKkhNp7MKn14MQGOqUBXxjhNys0jm8EVR4LCsnXLxGtapDMB0hNcKALcck74PSoZ525EPcEUBR80vd2WYV%2Bo4RGS7PKumh%2ByDo0X9eFEKqqSBRG6BQr0xfFeWr2YUXmMQTNXBygK1SmrHsW0z3SljPXbw5jiYaO8KHvKLchL6g4DahXL%2F2ZYo8NgV7twdoHipEfCDcjlIIVOxdRa0X0UMhaLS02UW7oV%2BDv3QqtnseD6rON&X-Amz-Signature=2d9bff573e3631b91ae311177620d6b4878b92ed6a3147ddd8c20b33bb31cf4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOZS7CGR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2ocQww9qAQEsk7fybJJLsbhp%2BDjOdX8ihosASEuNRqAIgV%2BUc9zb6clFOeqcwXDKzDk0jNXHgPSBXYYlX3tczX2wqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4MnVNT3z%2BGNdt5YSrcA3WQr1SD1cB1QWQyiQ3xH69FhBrJemp7l7PqDy97GXTjGJ9mkkpKn9sVhaVVvRQuuMQL6TVm9MjCOWuwC%2BhbW18oFWOIpe9D1LQFHrvuDYMDrWuVB3nBAyY92rUkArgCDgD6sytj4q6dLTxnV8%2FNPy1wPkNN1ahO9qdp0fK3eLQn0mRvRy1jzlMrmXnWugO47vqqtQAw7pXstLV1GKxSBK%2B5cJk6wlO0M8JTRXIF2nKVZAcI3dhg3U3X0SROcAt6Mwghst18xQ1nvEi3rxsj6DvlIaJ3bNv8EBymHzZHUzwJgUCV22Cpx65WYWgM03yiZgx%2BkB%2BF6kiYm%2FK8YN5%2BHxrsq5vqVdrHW64XpPJTjegzEk%2BJUNbrpqp4EwyTzga%2F29ywiusl5ucn01TOysC%2FWMjITCK9h5%2BzC9mL1EI29yjXXIoLQdA6pWZrbSWviGO2dAre%2FXI2FBO0hcBv1rBVNy2Spp6Y5%2F%2FE%2BkxCu4LEKU9U8KjYJK%2FOxhDj%2ByJb8ENXi3ty6vqcgJ%2BYO2yp8zMcjelbPERR9R9LWOI%2B%2BtuhtAGZfRrNfYjrKa2lZ4m7mvEHn324qqm7gb9vztWpYj7DhgXCcjSx32RA%2FCNlFJCR0M6dWKtnxt5ISYKkhNp7MKn14MQGOqUBXxjhNys0jm8EVR4LCsnXLxGtapDMB0hNcKALcck74PSoZ525EPcEUBR80vd2WYV%2Bo4RGS7PKumh%2ByDo0X9eFEKqqSBRG6BQr0xfFeWr2YUXmMQTNXBygK1SmrHsW0z3SljPXbw5jiYaO8KHvKLchL6g4DahXL%2F2ZYo8NgV7twdoHipEfCDcjlIIVOxdRa0X0UMhaLS02UW7oV%2BDv3QqtnseD6rON&X-Amz-Signature=144386fc4c97e2059fa591480f880b7cb030d52f90e882d3f779a02d7dd05392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOZS7CGR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2ocQww9qAQEsk7fybJJLsbhp%2BDjOdX8ihosASEuNRqAIgV%2BUc9zb6clFOeqcwXDKzDk0jNXHgPSBXYYlX3tczX2wqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4MnVNT3z%2BGNdt5YSrcA3WQr1SD1cB1QWQyiQ3xH69FhBrJemp7l7PqDy97GXTjGJ9mkkpKn9sVhaVVvRQuuMQL6TVm9MjCOWuwC%2BhbW18oFWOIpe9D1LQFHrvuDYMDrWuVB3nBAyY92rUkArgCDgD6sytj4q6dLTxnV8%2FNPy1wPkNN1ahO9qdp0fK3eLQn0mRvRy1jzlMrmXnWugO47vqqtQAw7pXstLV1GKxSBK%2B5cJk6wlO0M8JTRXIF2nKVZAcI3dhg3U3X0SROcAt6Mwghst18xQ1nvEi3rxsj6DvlIaJ3bNv8EBymHzZHUzwJgUCV22Cpx65WYWgM03yiZgx%2BkB%2BF6kiYm%2FK8YN5%2BHxrsq5vqVdrHW64XpPJTjegzEk%2BJUNbrpqp4EwyTzga%2F29ywiusl5ucn01TOysC%2FWMjITCK9h5%2BzC9mL1EI29yjXXIoLQdA6pWZrbSWviGO2dAre%2FXI2FBO0hcBv1rBVNy2Spp6Y5%2F%2FE%2BkxCu4LEKU9U8KjYJK%2FOxhDj%2ByJb8ENXi3ty6vqcgJ%2BYO2yp8zMcjelbPERR9R9LWOI%2B%2BtuhtAGZfRrNfYjrKa2lZ4m7mvEHn324qqm7gb9vztWpYj7DhgXCcjSx32RA%2FCNlFJCR0M6dWKtnxt5ISYKkhNp7MKn14MQGOqUBXxjhNys0jm8EVR4LCsnXLxGtapDMB0hNcKALcck74PSoZ525EPcEUBR80vd2WYV%2Bo4RGS7PKumh%2ByDo0X9eFEKqqSBRG6BQr0xfFeWr2YUXmMQTNXBygK1SmrHsW0z3SljPXbw5jiYaO8KHvKLchL6g4DahXL%2F2ZYo8NgV7twdoHipEfCDcjlIIVOxdRa0X0UMhaLS02UW7oV%2BDv3QqtnseD6rON&X-Amz-Signature=948dd0670803852899553a9983fdbecb4388b5491b31c25b4e804fbd7f4870fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOZS7CGR%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2ocQww9qAQEsk7fybJJLsbhp%2BDjOdX8ihosASEuNRqAIgV%2BUc9zb6clFOeqcwXDKzDk0jNXHgPSBXYYlX3tczX2wqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4MnVNT3z%2BGNdt5YSrcA3WQr1SD1cB1QWQyiQ3xH69FhBrJemp7l7PqDy97GXTjGJ9mkkpKn9sVhaVVvRQuuMQL6TVm9MjCOWuwC%2BhbW18oFWOIpe9D1LQFHrvuDYMDrWuVB3nBAyY92rUkArgCDgD6sytj4q6dLTxnV8%2FNPy1wPkNN1ahO9qdp0fK3eLQn0mRvRy1jzlMrmXnWugO47vqqtQAw7pXstLV1GKxSBK%2B5cJk6wlO0M8JTRXIF2nKVZAcI3dhg3U3X0SROcAt6Mwghst18xQ1nvEi3rxsj6DvlIaJ3bNv8EBymHzZHUzwJgUCV22Cpx65WYWgM03yiZgx%2BkB%2BF6kiYm%2FK8YN5%2BHxrsq5vqVdrHW64XpPJTjegzEk%2BJUNbrpqp4EwyTzga%2F29ywiusl5ucn01TOysC%2FWMjITCK9h5%2BzC9mL1EI29yjXXIoLQdA6pWZrbSWviGO2dAre%2FXI2FBO0hcBv1rBVNy2Spp6Y5%2F%2FE%2BkxCu4LEKU9U8KjYJK%2FOxhDj%2ByJb8ENXi3ty6vqcgJ%2BYO2yp8zMcjelbPERR9R9LWOI%2B%2BtuhtAGZfRrNfYjrKa2lZ4m7mvEHn324qqm7gb9vztWpYj7DhgXCcjSx32RA%2FCNlFJCR0M6dWKtnxt5ISYKkhNp7MKn14MQGOqUBXxjhNys0jm8EVR4LCsnXLxGtapDMB0hNcKALcck74PSoZ525EPcEUBR80vd2WYV%2Bo4RGS7PKumh%2ByDo0X9eFEKqqSBRG6BQr0xfFeWr2YUXmMQTNXBygK1SmrHsW0z3SljPXbw5jiYaO8KHvKLchL6g4DahXL%2F2ZYo8NgV7twdoHipEfCDcjlIIVOxdRa0X0UMhaLS02UW7oV%2BDv3QqtnseD6rON&X-Amz-Signature=927a530712fba2ceed1b9e3506de323bb8cdd5263d0c43fe9690731d74e13157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
