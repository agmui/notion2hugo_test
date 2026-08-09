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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDSSAVZ%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMmA8sVKnsaJVV8Od6qVDjDBHodDDhWmh%2FPyh7PTCUYgIgabBatZNGsuRJPdxtnTIP5WQcuSzi04767xWXJn9gH3Yq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjMfjBACXjbtqEs2SrcA2SuA5PXc%2B2bbQtmn0FJfwS5oiSmjuT9AnWsiHZi7d5RprYVSMSCHnyFrN2LGTi5%2FoGuAeNioSTEHiFPgMI0DkbC9xoSu6XO0TGiW7c1lv6Vk%2Fbha5yIc1i%2BBqSr3o8gtWKmd64aJUyv4jhqrQoLgxg860uHNqxUVRmdoxo%2BgJSAYyzfPGiOFEYmG5BwShRNnRJtyCp09loc1aKWpip1PZnCv9dvwvxLN3Kige5BtykcwEDsz5aQG8XsEYwkKwmTqDw9Gozm84DPc2d3Ip47s6iH7rMqB%2FTSgN3yednLlodA8PialhrhZm1h25iLFamHBLCGU6%2BNtntYrHdROllrM9U234nnJ4E6jUBp2KJU21PLqguggIKcfwX5jeAFBvgJbJ2bzpoyVcJOpyYxRt8aC3oLw2wyc8zLcLTqk2qpbn45Lmhj2nMdnZLCpRzwdYOoh9Fx8R%2B1tmqkWvIImX0s5dRVlWp2Qhed%2BCFtKwEU2Ick8aCxLf%2FhmfgmJchqD0cljIP7nCo8CRIKB2Pz6w9PbuBHuhbYN5z1Qp3ZhTXY5e%2BUFGEkl0H1IlCU8vDFpoWR0lA8QEMfW99V9VyPLILjCpjf26hnXhXGK3ay1wnEtGe2Wg1hDds7N8OOj22FMLTV3tMGOqUBmP64%2FMertKVGhOh%2B3wDQ8mEKgl4XCa6xroyu6uHcxSlGWUDN5HND5U2jPNejXvHzRpNljV7ulVuYl9fos%2BE9gCOxPjNrfGf0MFKboxsBAE9fdXQ1TeZqQ%2B%2Fs1VTvKVVRQ4lYW4ajsDM8Or0CNnFhjGIAMAMRNCGzI7s%2BH%2Fi3Ziv%2FQw328bqSddGcavSdwT9bpUwpH01nNJDxbZP%2Bup2PkxvRl3VS&X-Amz-Signature=5c36a1f16ea7a7e7cc48e16c710222e5fb8a3c3e71a1103f6ee573f19e1dbcce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDSSAVZ%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMmA8sVKnsaJVV8Od6qVDjDBHodDDhWmh%2FPyh7PTCUYgIgabBatZNGsuRJPdxtnTIP5WQcuSzi04767xWXJn9gH3Yq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjMfjBACXjbtqEs2SrcA2SuA5PXc%2B2bbQtmn0FJfwS5oiSmjuT9AnWsiHZi7d5RprYVSMSCHnyFrN2LGTi5%2FoGuAeNioSTEHiFPgMI0DkbC9xoSu6XO0TGiW7c1lv6Vk%2Fbha5yIc1i%2BBqSr3o8gtWKmd64aJUyv4jhqrQoLgxg860uHNqxUVRmdoxo%2BgJSAYyzfPGiOFEYmG5BwShRNnRJtyCp09loc1aKWpip1PZnCv9dvwvxLN3Kige5BtykcwEDsz5aQG8XsEYwkKwmTqDw9Gozm84DPc2d3Ip47s6iH7rMqB%2FTSgN3yednLlodA8PialhrhZm1h25iLFamHBLCGU6%2BNtntYrHdROllrM9U234nnJ4E6jUBp2KJU21PLqguggIKcfwX5jeAFBvgJbJ2bzpoyVcJOpyYxRt8aC3oLw2wyc8zLcLTqk2qpbn45Lmhj2nMdnZLCpRzwdYOoh9Fx8R%2B1tmqkWvIImX0s5dRVlWp2Qhed%2BCFtKwEU2Ick8aCxLf%2FhmfgmJchqD0cljIP7nCo8CRIKB2Pz6w9PbuBHuhbYN5z1Qp3ZhTXY5e%2BUFGEkl0H1IlCU8vDFpoWR0lA8QEMfW99V9VyPLILjCpjf26hnXhXGK3ay1wnEtGe2Wg1hDds7N8OOj22FMLTV3tMGOqUBmP64%2FMertKVGhOh%2B3wDQ8mEKgl4XCa6xroyu6uHcxSlGWUDN5HND5U2jPNejXvHzRpNljV7ulVuYl9fos%2BE9gCOxPjNrfGf0MFKboxsBAE9fdXQ1TeZqQ%2B%2Fs1VTvKVVRQ4lYW4ajsDM8Or0CNnFhjGIAMAMRNCGzI7s%2BH%2Fi3Ziv%2FQw328bqSddGcavSdwT9bpUwpH01nNJDxbZP%2Bup2PkxvRl3VS&X-Amz-Signature=8912b3c4b868f8ee0720ee4db120483ead68e988cdd2a22ab0aad9b0d7511cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDSSAVZ%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMmA8sVKnsaJVV8Od6qVDjDBHodDDhWmh%2FPyh7PTCUYgIgabBatZNGsuRJPdxtnTIP5WQcuSzi04767xWXJn9gH3Yq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjMfjBACXjbtqEs2SrcA2SuA5PXc%2B2bbQtmn0FJfwS5oiSmjuT9AnWsiHZi7d5RprYVSMSCHnyFrN2LGTi5%2FoGuAeNioSTEHiFPgMI0DkbC9xoSu6XO0TGiW7c1lv6Vk%2Fbha5yIc1i%2BBqSr3o8gtWKmd64aJUyv4jhqrQoLgxg860uHNqxUVRmdoxo%2BgJSAYyzfPGiOFEYmG5BwShRNnRJtyCp09loc1aKWpip1PZnCv9dvwvxLN3Kige5BtykcwEDsz5aQG8XsEYwkKwmTqDw9Gozm84DPc2d3Ip47s6iH7rMqB%2FTSgN3yednLlodA8PialhrhZm1h25iLFamHBLCGU6%2BNtntYrHdROllrM9U234nnJ4E6jUBp2KJU21PLqguggIKcfwX5jeAFBvgJbJ2bzpoyVcJOpyYxRt8aC3oLw2wyc8zLcLTqk2qpbn45Lmhj2nMdnZLCpRzwdYOoh9Fx8R%2B1tmqkWvIImX0s5dRVlWp2Qhed%2BCFtKwEU2Ick8aCxLf%2FhmfgmJchqD0cljIP7nCo8CRIKB2Pz6w9PbuBHuhbYN5z1Qp3ZhTXY5e%2BUFGEkl0H1IlCU8vDFpoWR0lA8QEMfW99V9VyPLILjCpjf26hnXhXGK3ay1wnEtGe2Wg1hDds7N8OOj22FMLTV3tMGOqUBmP64%2FMertKVGhOh%2B3wDQ8mEKgl4XCa6xroyu6uHcxSlGWUDN5HND5U2jPNejXvHzRpNljV7ulVuYl9fos%2BE9gCOxPjNrfGf0MFKboxsBAE9fdXQ1TeZqQ%2B%2Fs1VTvKVVRQ4lYW4ajsDM8Or0CNnFhjGIAMAMRNCGzI7s%2BH%2Fi3Ziv%2FQw328bqSddGcavSdwT9bpUwpH01nNJDxbZP%2Bup2PkxvRl3VS&X-Amz-Signature=8c632c4b6f7b37cbb6fe6dc8b74730b657a69876c282136c52e5ad49f8c13398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDSSAVZ%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMmA8sVKnsaJVV8Od6qVDjDBHodDDhWmh%2FPyh7PTCUYgIgabBatZNGsuRJPdxtnTIP5WQcuSzi04767xWXJn9gH3Yq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjMfjBACXjbtqEs2SrcA2SuA5PXc%2B2bbQtmn0FJfwS5oiSmjuT9AnWsiHZi7d5RprYVSMSCHnyFrN2LGTi5%2FoGuAeNioSTEHiFPgMI0DkbC9xoSu6XO0TGiW7c1lv6Vk%2Fbha5yIc1i%2BBqSr3o8gtWKmd64aJUyv4jhqrQoLgxg860uHNqxUVRmdoxo%2BgJSAYyzfPGiOFEYmG5BwShRNnRJtyCp09loc1aKWpip1PZnCv9dvwvxLN3Kige5BtykcwEDsz5aQG8XsEYwkKwmTqDw9Gozm84DPc2d3Ip47s6iH7rMqB%2FTSgN3yednLlodA8PialhrhZm1h25iLFamHBLCGU6%2BNtntYrHdROllrM9U234nnJ4E6jUBp2KJU21PLqguggIKcfwX5jeAFBvgJbJ2bzpoyVcJOpyYxRt8aC3oLw2wyc8zLcLTqk2qpbn45Lmhj2nMdnZLCpRzwdYOoh9Fx8R%2B1tmqkWvIImX0s5dRVlWp2Qhed%2BCFtKwEU2Ick8aCxLf%2FhmfgmJchqD0cljIP7nCo8CRIKB2Pz6w9PbuBHuhbYN5z1Qp3ZhTXY5e%2BUFGEkl0H1IlCU8vDFpoWR0lA8QEMfW99V9VyPLILjCpjf26hnXhXGK3ay1wnEtGe2Wg1hDds7N8OOj22FMLTV3tMGOqUBmP64%2FMertKVGhOh%2B3wDQ8mEKgl4XCa6xroyu6uHcxSlGWUDN5HND5U2jPNejXvHzRpNljV7ulVuYl9fos%2BE9gCOxPjNrfGf0MFKboxsBAE9fdXQ1TeZqQ%2B%2Fs1VTvKVVRQ4lYW4ajsDM8Or0CNnFhjGIAMAMRNCGzI7s%2BH%2Fi3Ziv%2FQw328bqSddGcavSdwT9bpUwpH01nNJDxbZP%2Bup2PkxvRl3VS&X-Amz-Signature=d577490ec80f1c90a651be16c5b61f9ebb2e025b6877952542fb83dd78a8814c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDSSAVZ%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMmA8sVKnsaJVV8Od6qVDjDBHodDDhWmh%2FPyh7PTCUYgIgabBatZNGsuRJPdxtnTIP5WQcuSzi04767xWXJn9gH3Yq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjMfjBACXjbtqEs2SrcA2SuA5PXc%2B2bbQtmn0FJfwS5oiSmjuT9AnWsiHZi7d5RprYVSMSCHnyFrN2LGTi5%2FoGuAeNioSTEHiFPgMI0DkbC9xoSu6XO0TGiW7c1lv6Vk%2Fbha5yIc1i%2BBqSr3o8gtWKmd64aJUyv4jhqrQoLgxg860uHNqxUVRmdoxo%2BgJSAYyzfPGiOFEYmG5BwShRNnRJtyCp09loc1aKWpip1PZnCv9dvwvxLN3Kige5BtykcwEDsz5aQG8XsEYwkKwmTqDw9Gozm84DPc2d3Ip47s6iH7rMqB%2FTSgN3yednLlodA8PialhrhZm1h25iLFamHBLCGU6%2BNtntYrHdROllrM9U234nnJ4E6jUBp2KJU21PLqguggIKcfwX5jeAFBvgJbJ2bzpoyVcJOpyYxRt8aC3oLw2wyc8zLcLTqk2qpbn45Lmhj2nMdnZLCpRzwdYOoh9Fx8R%2B1tmqkWvIImX0s5dRVlWp2Qhed%2BCFtKwEU2Ick8aCxLf%2FhmfgmJchqD0cljIP7nCo8CRIKB2Pz6w9PbuBHuhbYN5z1Qp3ZhTXY5e%2BUFGEkl0H1IlCU8vDFpoWR0lA8QEMfW99V9VyPLILjCpjf26hnXhXGK3ay1wnEtGe2Wg1hDds7N8OOj22FMLTV3tMGOqUBmP64%2FMertKVGhOh%2B3wDQ8mEKgl4XCa6xroyu6uHcxSlGWUDN5HND5U2jPNejXvHzRpNljV7ulVuYl9fos%2BE9gCOxPjNrfGf0MFKboxsBAE9fdXQ1TeZqQ%2B%2Fs1VTvKVVRQ4lYW4ajsDM8Or0CNnFhjGIAMAMRNCGzI7s%2BH%2Fi3Ziv%2FQw328bqSddGcavSdwT9bpUwpH01nNJDxbZP%2Bup2PkxvRl3VS&X-Amz-Signature=5b93e357df7e7df7397e3be8156b090b4b98933f123ed12dbc0829e0c179a83f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDSSAVZ%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMmA8sVKnsaJVV8Od6qVDjDBHodDDhWmh%2FPyh7PTCUYgIgabBatZNGsuRJPdxtnTIP5WQcuSzi04767xWXJn9gH3Yq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjMfjBACXjbtqEs2SrcA2SuA5PXc%2B2bbQtmn0FJfwS5oiSmjuT9AnWsiHZi7d5RprYVSMSCHnyFrN2LGTi5%2FoGuAeNioSTEHiFPgMI0DkbC9xoSu6XO0TGiW7c1lv6Vk%2Fbha5yIc1i%2BBqSr3o8gtWKmd64aJUyv4jhqrQoLgxg860uHNqxUVRmdoxo%2BgJSAYyzfPGiOFEYmG5BwShRNnRJtyCp09loc1aKWpip1PZnCv9dvwvxLN3Kige5BtykcwEDsz5aQG8XsEYwkKwmTqDw9Gozm84DPc2d3Ip47s6iH7rMqB%2FTSgN3yednLlodA8PialhrhZm1h25iLFamHBLCGU6%2BNtntYrHdROllrM9U234nnJ4E6jUBp2KJU21PLqguggIKcfwX5jeAFBvgJbJ2bzpoyVcJOpyYxRt8aC3oLw2wyc8zLcLTqk2qpbn45Lmhj2nMdnZLCpRzwdYOoh9Fx8R%2B1tmqkWvIImX0s5dRVlWp2Qhed%2BCFtKwEU2Ick8aCxLf%2FhmfgmJchqD0cljIP7nCo8CRIKB2Pz6w9PbuBHuhbYN5z1Qp3ZhTXY5e%2BUFGEkl0H1IlCU8vDFpoWR0lA8QEMfW99V9VyPLILjCpjf26hnXhXGK3ay1wnEtGe2Wg1hDds7N8OOj22FMLTV3tMGOqUBmP64%2FMertKVGhOh%2B3wDQ8mEKgl4XCa6xroyu6uHcxSlGWUDN5HND5U2jPNejXvHzRpNljV7ulVuYl9fos%2BE9gCOxPjNrfGf0MFKboxsBAE9fdXQ1TeZqQ%2B%2Fs1VTvKVVRQ4lYW4ajsDM8Or0CNnFhjGIAMAMRNCGzI7s%2BH%2Fi3Ziv%2FQw328bqSddGcavSdwT9bpUwpH01nNJDxbZP%2Bup2PkxvRl3VS&X-Amz-Signature=ff3fcc142646bdd0706779761bfe5238e4d33b00357ead1724abab870acef084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDSSAVZ%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMmA8sVKnsaJVV8Od6qVDjDBHodDDhWmh%2FPyh7PTCUYgIgabBatZNGsuRJPdxtnTIP5WQcuSzi04767xWXJn9gH3Yq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjMfjBACXjbtqEs2SrcA2SuA5PXc%2B2bbQtmn0FJfwS5oiSmjuT9AnWsiHZi7d5RprYVSMSCHnyFrN2LGTi5%2FoGuAeNioSTEHiFPgMI0DkbC9xoSu6XO0TGiW7c1lv6Vk%2Fbha5yIc1i%2BBqSr3o8gtWKmd64aJUyv4jhqrQoLgxg860uHNqxUVRmdoxo%2BgJSAYyzfPGiOFEYmG5BwShRNnRJtyCp09loc1aKWpip1PZnCv9dvwvxLN3Kige5BtykcwEDsz5aQG8XsEYwkKwmTqDw9Gozm84DPc2d3Ip47s6iH7rMqB%2FTSgN3yednLlodA8PialhrhZm1h25iLFamHBLCGU6%2BNtntYrHdROllrM9U234nnJ4E6jUBp2KJU21PLqguggIKcfwX5jeAFBvgJbJ2bzpoyVcJOpyYxRt8aC3oLw2wyc8zLcLTqk2qpbn45Lmhj2nMdnZLCpRzwdYOoh9Fx8R%2B1tmqkWvIImX0s5dRVlWp2Qhed%2BCFtKwEU2Ick8aCxLf%2FhmfgmJchqD0cljIP7nCo8CRIKB2Pz6w9PbuBHuhbYN5z1Qp3ZhTXY5e%2BUFGEkl0H1IlCU8vDFpoWR0lA8QEMfW99V9VyPLILjCpjf26hnXhXGK3ay1wnEtGe2Wg1hDds7N8OOj22FMLTV3tMGOqUBmP64%2FMertKVGhOh%2B3wDQ8mEKgl4XCa6xroyu6uHcxSlGWUDN5HND5U2jPNejXvHzRpNljV7ulVuYl9fos%2BE9gCOxPjNrfGf0MFKboxsBAE9fdXQ1TeZqQ%2B%2Fs1VTvKVVRQ4lYW4ajsDM8Or0CNnFhjGIAMAMRNCGzI7s%2BH%2Fi3Ziv%2FQw328bqSddGcavSdwT9bpUwpH01nNJDxbZP%2Bup2PkxvRl3VS&X-Amz-Signature=29dfa871119872054d8621e036f8872efd11d59bde2eaea8b0d6529730d14d16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDSSAVZ%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMmA8sVKnsaJVV8Od6qVDjDBHodDDhWmh%2FPyh7PTCUYgIgabBatZNGsuRJPdxtnTIP5WQcuSzi04767xWXJn9gH3Yq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjMfjBACXjbtqEs2SrcA2SuA5PXc%2B2bbQtmn0FJfwS5oiSmjuT9AnWsiHZi7d5RprYVSMSCHnyFrN2LGTi5%2FoGuAeNioSTEHiFPgMI0DkbC9xoSu6XO0TGiW7c1lv6Vk%2Fbha5yIc1i%2BBqSr3o8gtWKmd64aJUyv4jhqrQoLgxg860uHNqxUVRmdoxo%2BgJSAYyzfPGiOFEYmG5BwShRNnRJtyCp09loc1aKWpip1PZnCv9dvwvxLN3Kige5BtykcwEDsz5aQG8XsEYwkKwmTqDw9Gozm84DPc2d3Ip47s6iH7rMqB%2FTSgN3yednLlodA8PialhrhZm1h25iLFamHBLCGU6%2BNtntYrHdROllrM9U234nnJ4E6jUBp2KJU21PLqguggIKcfwX5jeAFBvgJbJ2bzpoyVcJOpyYxRt8aC3oLw2wyc8zLcLTqk2qpbn45Lmhj2nMdnZLCpRzwdYOoh9Fx8R%2B1tmqkWvIImX0s5dRVlWp2Qhed%2BCFtKwEU2Ick8aCxLf%2FhmfgmJchqD0cljIP7nCo8CRIKB2Pz6w9PbuBHuhbYN5z1Qp3ZhTXY5e%2BUFGEkl0H1IlCU8vDFpoWR0lA8QEMfW99V9VyPLILjCpjf26hnXhXGK3ay1wnEtGe2Wg1hDds7N8OOj22FMLTV3tMGOqUBmP64%2FMertKVGhOh%2B3wDQ8mEKgl4XCa6xroyu6uHcxSlGWUDN5HND5U2jPNejXvHzRpNljV7ulVuYl9fos%2BE9gCOxPjNrfGf0MFKboxsBAE9fdXQ1TeZqQ%2B%2Fs1VTvKVVRQ4lYW4ajsDM8Or0CNnFhjGIAMAMRNCGzI7s%2BH%2Fi3Ziv%2FQw328bqSddGcavSdwT9bpUwpH01nNJDxbZP%2Bup2PkxvRl3VS&X-Amz-Signature=7bb219549da9c1a36c5a4477f99053424bc253fd6298566774fd48f077b3797b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDSSAVZ%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMmA8sVKnsaJVV8Od6qVDjDBHodDDhWmh%2FPyh7PTCUYgIgabBatZNGsuRJPdxtnTIP5WQcuSzi04767xWXJn9gH3Yq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjMfjBACXjbtqEs2SrcA2SuA5PXc%2B2bbQtmn0FJfwS5oiSmjuT9AnWsiHZi7d5RprYVSMSCHnyFrN2LGTi5%2FoGuAeNioSTEHiFPgMI0DkbC9xoSu6XO0TGiW7c1lv6Vk%2Fbha5yIc1i%2BBqSr3o8gtWKmd64aJUyv4jhqrQoLgxg860uHNqxUVRmdoxo%2BgJSAYyzfPGiOFEYmG5BwShRNnRJtyCp09loc1aKWpip1PZnCv9dvwvxLN3Kige5BtykcwEDsz5aQG8XsEYwkKwmTqDw9Gozm84DPc2d3Ip47s6iH7rMqB%2FTSgN3yednLlodA8PialhrhZm1h25iLFamHBLCGU6%2BNtntYrHdROllrM9U234nnJ4E6jUBp2KJU21PLqguggIKcfwX5jeAFBvgJbJ2bzpoyVcJOpyYxRt8aC3oLw2wyc8zLcLTqk2qpbn45Lmhj2nMdnZLCpRzwdYOoh9Fx8R%2B1tmqkWvIImX0s5dRVlWp2Qhed%2BCFtKwEU2Ick8aCxLf%2FhmfgmJchqD0cljIP7nCo8CRIKB2Pz6w9PbuBHuhbYN5z1Qp3ZhTXY5e%2BUFGEkl0H1IlCU8vDFpoWR0lA8QEMfW99V9VyPLILjCpjf26hnXhXGK3ay1wnEtGe2Wg1hDds7N8OOj22FMLTV3tMGOqUBmP64%2FMertKVGhOh%2B3wDQ8mEKgl4XCa6xroyu6uHcxSlGWUDN5HND5U2jPNejXvHzRpNljV7ulVuYl9fos%2BE9gCOxPjNrfGf0MFKboxsBAE9fdXQ1TeZqQ%2B%2Fs1VTvKVVRQ4lYW4ajsDM8Or0CNnFhjGIAMAMRNCGzI7s%2BH%2Fi3Ziv%2FQw328bqSddGcavSdwT9bpUwpH01nNJDxbZP%2Bup2PkxvRl3VS&X-Amz-Signature=34d2bf9dcedb3b4ba22cec1f38ad01a937c012f227b734b7f9d1023e3b153bef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDSSAVZ%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMmA8sVKnsaJVV8Od6qVDjDBHodDDhWmh%2FPyh7PTCUYgIgabBatZNGsuRJPdxtnTIP5WQcuSzi04767xWXJn9gH3Yq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjMfjBACXjbtqEs2SrcA2SuA5PXc%2B2bbQtmn0FJfwS5oiSmjuT9AnWsiHZi7d5RprYVSMSCHnyFrN2LGTi5%2FoGuAeNioSTEHiFPgMI0DkbC9xoSu6XO0TGiW7c1lv6Vk%2Fbha5yIc1i%2BBqSr3o8gtWKmd64aJUyv4jhqrQoLgxg860uHNqxUVRmdoxo%2BgJSAYyzfPGiOFEYmG5BwShRNnRJtyCp09loc1aKWpip1PZnCv9dvwvxLN3Kige5BtykcwEDsz5aQG8XsEYwkKwmTqDw9Gozm84DPc2d3Ip47s6iH7rMqB%2FTSgN3yednLlodA8PialhrhZm1h25iLFamHBLCGU6%2BNtntYrHdROllrM9U234nnJ4E6jUBp2KJU21PLqguggIKcfwX5jeAFBvgJbJ2bzpoyVcJOpyYxRt8aC3oLw2wyc8zLcLTqk2qpbn45Lmhj2nMdnZLCpRzwdYOoh9Fx8R%2B1tmqkWvIImX0s5dRVlWp2Qhed%2BCFtKwEU2Ick8aCxLf%2FhmfgmJchqD0cljIP7nCo8CRIKB2Pz6w9PbuBHuhbYN5z1Qp3ZhTXY5e%2BUFGEkl0H1IlCU8vDFpoWR0lA8QEMfW99V9VyPLILjCpjf26hnXhXGK3ay1wnEtGe2Wg1hDds7N8OOj22FMLTV3tMGOqUBmP64%2FMertKVGhOh%2B3wDQ8mEKgl4XCa6xroyu6uHcxSlGWUDN5HND5U2jPNejXvHzRpNljV7ulVuYl9fos%2BE9gCOxPjNrfGf0MFKboxsBAE9fdXQ1TeZqQ%2B%2Fs1VTvKVVRQ4lYW4ajsDM8Or0CNnFhjGIAMAMRNCGzI7s%2BH%2Fi3Ziv%2FQw328bqSddGcavSdwT9bpUwpH01nNJDxbZP%2Bup2PkxvRl3VS&X-Amz-Signature=086b0f18ef2bd5dbba6f8fcff30389830f87319023f3dadcac4596ca5b4b9323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOJ6RKQB%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLCpLSo8i4NRbWNQPeK1GLbODqg%2FawKo0fyt3UYRXhtgIhANnQr9HcVHtE5o5VUFCZzdGEQ5r7k6t4R%2FCgke7%2BfTUFKv8DCHcQABoMNjM3NDIzMTgzODA1Igxe7pX8j9QR%2BYxrIYkq3AOckn0MlMqsqzCuy%2B%2B5gsX3n0LE1TM2r%2FJNhwPvOpNpFDEsJs8m%2BWRhhn38PFJjxm7CJkHeoKT%2FRmh8n7div8%2BpQ%2Bk69k2t7hz4u9E%2Bs2nZuD9oQt%2Bro4Umb0h%2FOL%2FoNSCWn0wV6PFtqYnGTRFF9cq6tv6FojC6la3RZEPc65LTSa3vsLSyBj5FvHvjutNXwK%2Fli36tfK3zF9It2zAADZHZcF8ta36zDuS2C5ymXNzBiPHSgxcWPP7i6xIbeFplaRKdgFSc2ktkdNcyEXBIYYQaPoqNho%2FouodgnKK%2BZjpzdoYqlvwwaebp5TybKWgcfNqiMgpqvhr3PoQMLS7Ks0JN0crktcOUdsdhA%2FZZl5qq%2FsXSCpQZFAim3i3GiIqgZVNfvLOGAvu5j0VpBQh%2BKjRBSl932CgwRSafQUq%2FU6LyWl2ExeSatfXehI8xCLHv30tTcDF2YzccZ0fbfNrZ03f9yp40Go88yTU%2BOI0hKiYaXjrbb8lXG3hhLOZ1Ov5jTl3vM6n6F6ka0Ev24EmB2wgIDVlYNT502wekH8TOH2v58ext%2F7gPob2HjzGnaqJ0c85paUuBnZsuzsxinhb2Ls1Ip2ZFfBxPBpRzZ3EvNsQhQjz4skaXoGWIjYxnNDDc1N7TBjqkAQCl2u3iZ4G5ugKDaf%2FTPDPgErShslgldn2m%2BLlTmyUTqICyIJ%2Bbp4BcAcD6OzCgMHA0uDFP76QRPoOdc6ryTOi4zBa5XKyJdJvy4%2FcjX0%2BvTCA%2Bb7DM9UbUamWJCC%2BJLXzhUFDPsSlxKDrIL2CJFh8nnxvn8aMfnYsyi7uWs793MZ4Reg%2Fhc2%2FaLZh11uGxW5r4AUPCvD8KcmGL51FS9BETKuVc&X-Amz-Signature=1ae30f850c321efc74ed1957620902408373506660361afb1a2134db2e7510c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6YF4C7X%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBpJZzDHKpBSHpberFh5oBM0A2WERz%2FkDkCTJ4zT5f6AIhAPcduwYl15ldWCN4VbRg9JApgrXQP6X%2F1gzmEEC6Glb2Kv8DCHcQABoMNjM3NDIzMTgzODA1Igy3bUptttlJereQ10wq3AMZqUqASUaF18c3RpVm3iZTQPWnA4aY1GXg%2FRpMnPw3BJYfl3U7XL96k4wWeqGzfGtc944AEc1Mw88ycZ3nzR6DGsZbGsdSmCyfz7WISQATY5bfMh0Kx0Io1cmKx2MuGq6rll80Pg5%2BjE1VtEnr9A5gF2AZBaABvXYConzida5K5xur8SE5TtbatDrt8Z123eIPT0yRIs0a7qrevpNKRvmneyHMjUzK4xyBkvxtQfaXAJSWmAAtJsmzyDJ4sKga0FnYuYhIt07v27TcCsCan1tIdYWlIbIg4sIPak1erNc909h62ubD0sUc7qRXwoPxCUdr7Zo1%2BP55lyP2FA7QrbBMkqee%2FLLTw2rKJy4edQd0aDjbUo%2BB6SK%2FMVVlzPOZEZ0Z7UPZyB58Srb744xdbWSZLAPOHT6CXxtqjHzAG6oI5ArxN9hexYoFyCPMEHDFNVZNdHALKwnR6FrjerYV4hfyMbOYuQS47WvqP9sKSdzgaSZQNfskZjtBloREgrTuMU1474LaHtvMwrNfk8t5JBOjYyKmbVBXf4HIef3eWwWmBo2hCPskIgJvTGkRFRK1KoblXtRLNUkRPMwrREEawzikROoVC6UplvOKsLxPc8AgXWfiNPzpGAOM%2Fw8%2BCzC11d7TBjqkAWM%2FtFp6alHzdGD%2ByhG%2FCjItmcmTcTllFRwmH2qvAJgia0lPgygEVAkvse0oTXE16UQXdhR7GP0YGa4rinEA7S6rs5M4IKDV%2BuKNl%2FmH3CHoRBzenUX2K0yEDpN4R3z39zn53gGKQ7vIgof5%2BOOGHOzMc3ejQE3ZMRHLDWBAXQ1r2%2FzssEHSA44%2BqOqgYV2xnn5qqxfaUt%2FyjPyU3BevenVbrxxu&X-Amz-Signature=f03b01ca6714ddf9633dd139e2355278e74de4c7b8318e532dacb8fb8a504f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOFSU6L6%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3eUFdwpY7%2FK16JJkzKf0QBUbuHnq1WD91nLYN9VpMrAiEA%2FKS2gpJk7WknBwztVw8C29Imfh2eev0PRe3vCYeKqCYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDwRmKZMZsJ0B8ZdYircA4Ljd6vP3sU%2Biz6cNc%2FurvHEMoJEinJQPotCFHyjkGmzNPPEaqVDDEScvGHNw3XJCBEHEnMeQj38Y3nlzzFmkHcAEi7DH9xJR1v0ll1ASGIIrYM1U8pUBJaYa7l%2B0aOnJzoqdvFXj6JJOo0S5N3y4ClAsgfePeiwnw7k7ELQD4v4ig6GdYw6RMUuh1X9s4T06JDDzf7aXU7qMMwrDMFlqnQ3up%2F6%2FahiFAQGr8EyP2D7uveRqRtUE0iyiPXoQg2oOwiOS%2Fdv5VnR2UaQdHKaBIJKg5qBEKexo50CgFv%2F7%2FXlqLaX0Mg3R7PMk3h4DD09HuZCORUY9eRADYSzB0b3AKiLH%2F8Ch4kV1aFRXVWrSAlFuFfpGKzVJFs3R07OJUfnP3eY9J8j3Vz%2FSP%2Foitt4avo9yoVI1sFIB06HrSsRNnnpGiKM0Ungqij0FMQ%2F76wXgP3oxdnMmwtqx5AEtfprE%2BLgR%2B%2FBVeTPU5bEMUrGQ4zhZ2gflrVYxJFGuIhLOd8xpvHwisADQhCOQPxhQNUBAjCie2k5owPJ%2BTeh3OkMCR448LFmykdj3uH11e7UMm%2Fk9DiX3bkyd82NFTF1OrCCCGWULg33SNIp5eW1GhG2bsAxV3iCfwHMGI7lgpusMOvV3tMGOqUByFffhAF%2Bii%2BDs4KO56HtiyPh7PHlBbGwi5Nj0tg7oJKDBzinnEbKtXe5hO5C6LmAeywHTXugF2W%2F2Pv6XYfa2nwSZDRjYUj4nRXi8rd2OAQSTM9CbuUHUtwJ8waIzzGouc5Gp7imi3T3R2%2B0%2BxW4TLCqDo1WxKyBflIY1LqsSAxCYCV6WQbw3caGbtd3jjnXQZRBSAneUpaFDX9%2Boe%2BvZMDyxFD3&X-Amz-Signature=219e2cf4a145c2d32d7bc99e1a88cd76763e3756a13724a4d35eb7a8a2ed1b2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDSSAVZ%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMmA8sVKnsaJVV8Od6qVDjDBHodDDhWmh%2FPyh7PTCUYgIgabBatZNGsuRJPdxtnTIP5WQcuSzi04767xWXJn9gH3Yq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjMfjBACXjbtqEs2SrcA2SuA5PXc%2B2bbQtmn0FJfwS5oiSmjuT9AnWsiHZi7d5RprYVSMSCHnyFrN2LGTi5%2FoGuAeNioSTEHiFPgMI0DkbC9xoSu6XO0TGiW7c1lv6Vk%2Fbha5yIc1i%2BBqSr3o8gtWKmd64aJUyv4jhqrQoLgxg860uHNqxUVRmdoxo%2BgJSAYyzfPGiOFEYmG5BwShRNnRJtyCp09loc1aKWpip1PZnCv9dvwvxLN3Kige5BtykcwEDsz5aQG8XsEYwkKwmTqDw9Gozm84DPc2d3Ip47s6iH7rMqB%2FTSgN3yednLlodA8PialhrhZm1h25iLFamHBLCGU6%2BNtntYrHdROllrM9U234nnJ4E6jUBp2KJU21PLqguggIKcfwX5jeAFBvgJbJ2bzpoyVcJOpyYxRt8aC3oLw2wyc8zLcLTqk2qpbn45Lmhj2nMdnZLCpRzwdYOoh9Fx8R%2B1tmqkWvIImX0s5dRVlWp2Qhed%2BCFtKwEU2Ick8aCxLf%2FhmfgmJchqD0cljIP7nCo8CRIKB2Pz6w9PbuBHuhbYN5z1Qp3ZhTXY5e%2BUFGEkl0H1IlCU8vDFpoWR0lA8QEMfW99V9VyPLILjCpjf26hnXhXGK3ay1wnEtGe2Wg1hDds7N8OOj22FMLTV3tMGOqUBmP64%2FMertKVGhOh%2B3wDQ8mEKgl4XCa6xroyu6uHcxSlGWUDN5HND5U2jPNejXvHzRpNljV7ulVuYl9fos%2BE9gCOxPjNrfGf0MFKboxsBAE9fdXQ1TeZqQ%2B%2Fs1VTvKVVRQ4lYW4ajsDM8Or0CNnFhjGIAMAMRNCGzI7s%2BH%2Fi3Ziv%2FQw328bqSddGcavSdwT9bpUwpH01nNJDxbZP%2Bup2PkxvRl3VS&X-Amz-Signature=f18dd9f440f6377a12774c028899e9bb2a9799ba2db766bbd1f59ef8a2e1084b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQXHJ36V%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FnnaYmsPIVMDvXyjYzNyRjdp8aA0T7AJKHjpRT%2Ffe%2BgIgCy6OSZUbeeRTUOZnWKtC7sQHNiE5xV1jha8P%2BpPZPF8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBpYHjzJCAfq0BH3SyrcA434Tf5%2FGuRp1eQZZWbzNWGVR3%2F1crvK1CY99b3HltKqEdlOfgeAPKpxwA68XSlw9073MgchD1aaxKe2qKi%2FXYQAmDQpJe28UpcJdxQfwJ%2FKA1f1U3KQ2ac2XQgKQzQfW%2FbRgZ9FdU9dGsBMyEdRJKftnD19J2qpJATpwHXnS3R%2B3kNb4zk57AheV3X27PuwtH4elbTsQPFMOn5T5x5kBx9s9kzisZWyE%2BNlj61kmI%2BAm9vQnLS0%2BHT%2BtRAhF%2BoqZ%2BfXwIep6aSZhai5Dy3HI8FgwNGEekFZ%2FuRD%2BsScS8pm5ZVpqdQ%2BNfgJuQ%2FAENimxXFRPeQdGt73ghJ7BsPpb3mMKrhNf8XkEXr535kYgknhEaTYGXttux2q6lpaw8UIhsjOt6qTeiQCmYuGqama9%2Bs85i01OVAcqGlKMSQUkn7rMTPULMGGGfuUOj96CqiszlTDl3%2Fh%2B1DXUUxFmZDo2FEGjWHjCq%2B0b%2BQy3e6X0fqXe0avnXwDBqRup1YOf4cY%2FZXu56PayOVoZNrO2HXlAMEoW5SDfx%2BoCAgvuk6upIe4VYx5B%2FKbSsZ2C82SSCQX%2FOj%2BnlRwHZRBbbVaT3S3k4ANoTocvtXjTLEOSlZMa5l3Abu5nZe8Btg6QzHgMKDU3tMGOqUB12LixJlGHtn3kmvNWh06K67Re2ZGlvCTPqtBK7bhXYcrf2UmctpJrtWdDH2Rde2vJm0%2B5Nz3BS067AxPGA%2B6pnp2gNfgCQdFdjEQYkeKCJAynKPJfUECNCapE8EHjnajVewwvY4NOwaXnqERBfSYcDvrT2qYIta8A10BOmBFyq2utOhMgKBE6fuF2vnyMvNp4ZMD21onTf5pFrty%2FauNVt87t9fV&X-Amz-Signature=0f44f6d34dfcdbe7c7655ccc63385286e1297e1fbad79b6fffcba99de1caac74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDSSAVZ%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMmA8sVKnsaJVV8Od6qVDjDBHodDDhWmh%2FPyh7PTCUYgIgabBatZNGsuRJPdxtnTIP5WQcuSzi04767xWXJn9gH3Yq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjMfjBACXjbtqEs2SrcA2SuA5PXc%2B2bbQtmn0FJfwS5oiSmjuT9AnWsiHZi7d5RprYVSMSCHnyFrN2LGTi5%2FoGuAeNioSTEHiFPgMI0DkbC9xoSu6XO0TGiW7c1lv6Vk%2Fbha5yIc1i%2BBqSr3o8gtWKmd64aJUyv4jhqrQoLgxg860uHNqxUVRmdoxo%2BgJSAYyzfPGiOFEYmG5BwShRNnRJtyCp09loc1aKWpip1PZnCv9dvwvxLN3Kige5BtykcwEDsz5aQG8XsEYwkKwmTqDw9Gozm84DPc2d3Ip47s6iH7rMqB%2FTSgN3yednLlodA8PialhrhZm1h25iLFamHBLCGU6%2BNtntYrHdROllrM9U234nnJ4E6jUBp2KJU21PLqguggIKcfwX5jeAFBvgJbJ2bzpoyVcJOpyYxRt8aC3oLw2wyc8zLcLTqk2qpbn45Lmhj2nMdnZLCpRzwdYOoh9Fx8R%2B1tmqkWvIImX0s5dRVlWp2Qhed%2BCFtKwEU2Ick8aCxLf%2FhmfgmJchqD0cljIP7nCo8CRIKB2Pz6w9PbuBHuhbYN5z1Qp3ZhTXY5e%2BUFGEkl0H1IlCU8vDFpoWR0lA8QEMfW99V9VyPLILjCpjf26hnXhXGK3ay1wnEtGe2Wg1hDds7N8OOj22FMLTV3tMGOqUBmP64%2FMertKVGhOh%2B3wDQ8mEKgl4XCa6xroyu6uHcxSlGWUDN5HND5U2jPNejXvHzRpNljV7ulVuYl9fos%2BE9gCOxPjNrfGf0MFKboxsBAE9fdXQ1TeZqQ%2B%2Fs1VTvKVVRQ4lYW4ajsDM8Or0CNnFhjGIAMAMRNCGzI7s%2BH%2Fi3Ziv%2FQw328bqSddGcavSdwT9bpUwpH01nNJDxbZP%2Bup2PkxvRl3VS&X-Amz-Signature=b53747212db1012f7c692bf746e85660633933588172022e28c130e9875328b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ63JH4D%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZhTgofKYclO1Qpd1IS57Z%2FcRE%2BOuoo%2BuoLNI8mGI%2FFAiARMn7L%2FsfZLn3z7yAi40PXsxFhZBPB9XgdJ3nrJAoDyCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMwJYWPtPZldGhI47kKtwDmGCJCAohKnEIrojbGrTiQtKzh596%2Bkfy4V55g04NqIcfSkTk6HYAp8B1nZLj2nmK3wUjxVmruOwSwH7b2d3IeV6Clixap7Mk3FIBlEn%2BwR5oNqoqsW4JIMxTTGhGKUBW0lL%2FFzR1Foch6FPxRaKt%2FN4DBt2AIcgL%2BKKNArmc8O%2Bz1arBke4LRd6ZZk50%2BiiovcbkhClz9CedJClAxbwE7qc5vnYNqCeqTmXhCXLmcb8TE1Ifoa%2BwxXbdzuJXwMBfLunX6EDEKzE8W0X%2BIhQr%2BW2fY0qNYT9HomU7W%2B0uQN0rTjI13kYE2i3Mk7tRICPGSmk6FNAT4l3ShK%2BgGXKLAxTtjecDEmo3AFaa3RoGtutF%2Bkccslkq8xKYBB9g2IS%2Fa1AGX5Tspg72zOOViIXVJnRssj2ax1UDT9AFhK9Vt4WbCPfCaAFBJZA21%2BQvGl0DU%2FdRWqoilBUikO2AXxR5sbAHlRVoD4waR8iDRTaTUS0TlpWjFJ%2BCas56RuTB8lFuk4ZapxvXCDg3d8DwZ8nhDu1JlCqQUjzRnEbsKJsjvcdZkvuucDGCmUga6kis1dF3XZ3O2SdoeKjFzcoZwiGj2qexynmBQs8gPJOamQc80wuka47RotYGonpScIIwiNPe0wY6pgF5pTLFuaI8rOzSWv7j4ShjZJMp%2BJPTjX7NxUs%2FwDY4To1DjcMJJ1gto%2Bq2j0Yxvt5hWlMaXe3d3crrnxupOF9NnEZVcZH0TGJRm5YP2XdBpC0Yc%2Fq2to1KJBtP4ZZjCV03gC3LjwjKPGl15OB51SMnF0niBI8WXgCK651FNltYtxHml%2FBxyj4dUzwHwbVAb%2Bncbj6x2%2FNmBQFnK7xJrXoLiUMcnnn%2F&X-Amz-Signature=7b4a7484b145f515282423e5e89a1d4148852672aa6618db1a147347bbacfada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDSSAVZ%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMmA8sVKnsaJVV8Od6qVDjDBHodDDhWmh%2FPyh7PTCUYgIgabBatZNGsuRJPdxtnTIP5WQcuSzi04767xWXJn9gH3Yq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjMfjBACXjbtqEs2SrcA2SuA5PXc%2B2bbQtmn0FJfwS5oiSmjuT9AnWsiHZi7d5RprYVSMSCHnyFrN2LGTi5%2FoGuAeNioSTEHiFPgMI0DkbC9xoSu6XO0TGiW7c1lv6Vk%2Fbha5yIc1i%2BBqSr3o8gtWKmd64aJUyv4jhqrQoLgxg860uHNqxUVRmdoxo%2BgJSAYyzfPGiOFEYmG5BwShRNnRJtyCp09loc1aKWpip1PZnCv9dvwvxLN3Kige5BtykcwEDsz5aQG8XsEYwkKwmTqDw9Gozm84DPc2d3Ip47s6iH7rMqB%2FTSgN3yednLlodA8PialhrhZm1h25iLFamHBLCGU6%2BNtntYrHdROllrM9U234nnJ4E6jUBp2KJU21PLqguggIKcfwX5jeAFBvgJbJ2bzpoyVcJOpyYxRt8aC3oLw2wyc8zLcLTqk2qpbn45Lmhj2nMdnZLCpRzwdYOoh9Fx8R%2B1tmqkWvIImX0s5dRVlWp2Qhed%2BCFtKwEU2Ick8aCxLf%2FhmfgmJchqD0cljIP7nCo8CRIKB2Pz6w9PbuBHuhbYN5z1Qp3ZhTXY5e%2BUFGEkl0H1IlCU8vDFpoWR0lA8QEMfW99V9VyPLILjCpjf26hnXhXGK3ay1wnEtGe2Wg1hDds7N8OOj22FMLTV3tMGOqUBmP64%2FMertKVGhOh%2B3wDQ8mEKgl4XCa6xroyu6uHcxSlGWUDN5HND5U2jPNejXvHzRpNljV7ulVuYl9fos%2BE9gCOxPjNrfGf0MFKboxsBAE9fdXQ1TeZqQ%2B%2Fs1VTvKVVRQ4lYW4ajsDM8Or0CNnFhjGIAMAMRNCGzI7s%2BH%2Fi3Ziv%2FQw328bqSddGcavSdwT9bpUwpH01nNJDxbZP%2Bup2PkxvRl3VS&X-Amz-Signature=913394ee8800cf15d682b2360cde2e06f0fc5b4a146a640acf63831be42ddde7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7BE3HO5%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLZDbxrgXUh9p9zTjzIkn7NL2eiNHiLoklxJx8H7R0MAiEAoP7EVNAa5VhlzzuipYXy6uTdUa3P6H9P4XgD1%2BGXhf4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDjxBHVgYs3cNxpSDyrcA4GCXo2G%2BX%2BjagHgIfCbFr%2BJY5BAZRK0ZTBPCLl92g6FkLUJufObxONNt4lTqJt91NR5KBdBVv5G5J59uzxFJUdvnJIIuJlO8RilhmFoYVnaD%2BpRa3pyIpMEcvuGqXBKAeOLR61wOnuNDi1Q58aWgj7%2F4Ud7KZqwzZbYdjbIXSI8yekYIWKbX2HGUfHW7HqGxpAXwkpoNgOtl3bo63N2dHKzcGPeBHCfY8OEZRAhnaJXxkCbBo%2FFuSdDm7GGoNFgVPKGM7YMEmid8lhvZ773XnHIkLbvrAmBNk1TH2Ju1Th40lpVGLtWPu0EXkQtMINJc1livGU7ObA56PjviXwQkmOrK%2B04qIy6P4FSRQtQbQ8VhTPZ%2FVkoVvuieiQPDJpY7t%2BSeOB%2FLUxlv3xo487GbOY%2B8Z%2BkQJGj6CzU%2BP8FAiDAzbG4D2x8qM4%2F5mmVxYyx1fudmRX2vkExC3ViGSlyI859vGXNmteTWAVgATUWo%2BKBExHJVaaH2rKbBkIRnIUJXOWdJZ2CbjSmsKEpP4Bkt7vmfowKFQ6OL4FS4swHvglhKfi1AMQMDIGesZj55nz9Y9DXNpcZYcS5hK3aEc63GXcIOiLVAmLf6GtQN%2BuQiPN45NRgcTGLH0HJCBSQMKjT3tMGOqUBoJo4etmuHo4d4B1UX1SYjeiUU8CQPl%2Bt1HhPbmaC5KOIR%2FBGeo15IAcgOzDS0j47HbbZvZ9GAlZ29K2GRnIM575QBB6x%2BQsPclI11HDp7db%2FPM33oKWcm7ckM0xB7suNsrzVGMTXb5rDia833w2HFhuFFSWJ7wm3N9JOmzedOjO0N0wz%2FsGAfzon2pzOtrCV%2B79k1WhZPUwSYJdHGu1YGMY%2FwC12&X-Amz-Signature=b1850e2fe2a87af740a451b81af98505d19b8eff06fb179ad973e568b9847bf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDSSAVZ%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMmA8sVKnsaJVV8Od6qVDjDBHodDDhWmh%2FPyh7PTCUYgIgabBatZNGsuRJPdxtnTIP5WQcuSzi04767xWXJn9gH3Yq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjMfjBACXjbtqEs2SrcA2SuA5PXc%2B2bbQtmn0FJfwS5oiSmjuT9AnWsiHZi7d5RprYVSMSCHnyFrN2LGTi5%2FoGuAeNioSTEHiFPgMI0DkbC9xoSu6XO0TGiW7c1lv6Vk%2Fbha5yIc1i%2BBqSr3o8gtWKmd64aJUyv4jhqrQoLgxg860uHNqxUVRmdoxo%2BgJSAYyzfPGiOFEYmG5BwShRNnRJtyCp09loc1aKWpip1PZnCv9dvwvxLN3Kige5BtykcwEDsz5aQG8XsEYwkKwmTqDw9Gozm84DPc2d3Ip47s6iH7rMqB%2FTSgN3yednLlodA8PialhrhZm1h25iLFamHBLCGU6%2BNtntYrHdROllrM9U234nnJ4E6jUBp2KJU21PLqguggIKcfwX5jeAFBvgJbJ2bzpoyVcJOpyYxRt8aC3oLw2wyc8zLcLTqk2qpbn45Lmhj2nMdnZLCpRzwdYOoh9Fx8R%2B1tmqkWvIImX0s5dRVlWp2Qhed%2BCFtKwEU2Ick8aCxLf%2FhmfgmJchqD0cljIP7nCo8CRIKB2Pz6w9PbuBHuhbYN5z1Qp3ZhTXY5e%2BUFGEkl0H1IlCU8vDFpoWR0lA8QEMfW99V9VyPLILjCpjf26hnXhXGK3ay1wnEtGe2Wg1hDds7N8OOj22FMLTV3tMGOqUBmP64%2FMertKVGhOh%2B3wDQ8mEKgl4XCa6xroyu6uHcxSlGWUDN5HND5U2jPNejXvHzRpNljV7ulVuYl9fos%2BE9gCOxPjNrfGf0MFKboxsBAE9fdXQ1TeZqQ%2B%2Fs1VTvKVVRQ4lYW4ajsDM8Or0CNnFhjGIAMAMRNCGzI7s%2BH%2Fi3Ziv%2FQw328bqSddGcavSdwT9bpUwpH01nNJDxbZP%2Bup2PkxvRl3VS&X-Amz-Signature=9cf103aa37ca490b383bc995682eda5f0217f6215465038f444db603709bf74c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PRLYV2S%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtSIr6x8N3oPqaNx6rbNCGL8jLs97QLrRwqlqzqfPMRAiEA0iszTP%2BHrAyms1EnWBz%2F48sc8EyuTyOQXoF4BFboJL8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIMhjfHFuTL3km74LircA%2BtBhrmqrNBLcGQZ4X9yz6SP3zPAms%2BUgGns0OKq%2BaRkl%2BHWjaO36zV3YYqP0uJvQlVmWMUdCdyBwKtudlaJOR%2FgV%2FdB3Vmnrs9S160gaQ71aeAXhdBrX82bYjuBxHRybTf2VLGYXrJ%2FUUQ0ePmX%2Fp3MbEBYA8%2BIc2jhkdT5hB%2BwTBlHvTWON96L4NNRcCE0%2BoCAoWEcO1Zic9L8yR9n8F8oVHRB96qESGqIN1w0OhcF1779t%2BjqIq6ZDU%2B2oMx9VLqD08x6YHgNJpWuIBpsJt5lDOd1%2FGYXgk7t6fEuk5MJsMeFpyCx%2B2H8pQsaHuaknn2ZfLsQ9mO5FzxchXEXsh3HkpJ4VLnfKKCs8vgMendKxl2DFGYrE8l%2Br8n1pw0lz98SBu0ikbjwbUB1TGxz1ErfC83qG3bsi6YYs4zhl5OcW8XDVAiA6ubCCZMdVfetFNCFsWjV8U%2F5nsHbJ7ARLCN9ls%2B38oNzRBeN6xldEY%2BHPq%2BVeOaiLAJW%2B44IJfsWLnRS1UOGblgfi4mlYdO%2FphG6AaTIblurOmr12%2Fgf1pTAXXBcueCCOOstzufjBsWGmdmGzM1PUGBVkk%2BmaXbtqgmyr4BLQv7Vm5cHhVTbhNIj%2Fftpnl1YaQA4WJvKMKLT3tMGOqUBzEiJ9s8o0bon06y%2BgRvBJ4hNjKuPFr8pWobHsVHv%2BFzBEW3NXRdbTMQJX7F1vyqdYouSQ3VNb9fyBt8A32fthZ8CMbWp31Ms9T6wuG2SJ0VW36wbVPiQXR4Ws8%2BsCOscfB876fOf7V28ZJTTItpEr%2BwFii6kKR86MAU03X65oxZ20kqfuiVAQ3ASjf69BjQQrHnraB2K9wi4K6L9aUphTY9wJ9Dq&X-Amz-Signature=0f778ca107c733c4a9f888d63d5617e0cbab398779a284fd14ebaaeec4a83bfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDSSAVZ%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMmA8sVKnsaJVV8Od6qVDjDBHodDDhWmh%2FPyh7PTCUYgIgabBatZNGsuRJPdxtnTIP5WQcuSzi04767xWXJn9gH3Yq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjMfjBACXjbtqEs2SrcA2SuA5PXc%2B2bbQtmn0FJfwS5oiSmjuT9AnWsiHZi7d5RprYVSMSCHnyFrN2LGTi5%2FoGuAeNioSTEHiFPgMI0DkbC9xoSu6XO0TGiW7c1lv6Vk%2Fbha5yIc1i%2BBqSr3o8gtWKmd64aJUyv4jhqrQoLgxg860uHNqxUVRmdoxo%2BgJSAYyzfPGiOFEYmG5BwShRNnRJtyCp09loc1aKWpip1PZnCv9dvwvxLN3Kige5BtykcwEDsz5aQG8XsEYwkKwmTqDw9Gozm84DPc2d3Ip47s6iH7rMqB%2FTSgN3yednLlodA8PialhrhZm1h25iLFamHBLCGU6%2BNtntYrHdROllrM9U234nnJ4E6jUBp2KJU21PLqguggIKcfwX5jeAFBvgJbJ2bzpoyVcJOpyYxRt8aC3oLw2wyc8zLcLTqk2qpbn45Lmhj2nMdnZLCpRzwdYOoh9Fx8R%2B1tmqkWvIImX0s5dRVlWp2Qhed%2BCFtKwEU2Ick8aCxLf%2FhmfgmJchqD0cljIP7nCo8CRIKB2Pz6w9PbuBHuhbYN5z1Qp3ZhTXY5e%2BUFGEkl0H1IlCU8vDFpoWR0lA8QEMfW99V9VyPLILjCpjf26hnXhXGK3ay1wnEtGe2Wg1hDds7N8OOj22FMLTV3tMGOqUBmP64%2FMertKVGhOh%2B3wDQ8mEKgl4XCa6xroyu6uHcxSlGWUDN5HND5U2jPNejXvHzRpNljV7ulVuYl9fos%2BE9gCOxPjNrfGf0MFKboxsBAE9fdXQ1TeZqQ%2B%2Fs1VTvKVVRQ4lYW4ajsDM8Or0CNnFhjGIAMAMRNCGzI7s%2BH%2Fi3Ziv%2FQw328bqSddGcavSdwT9bpUwpH01nNJDxbZP%2Bup2PkxvRl3VS&X-Amz-Signature=972e25c24d260d374eb187ec78d2cf5b499ccfce6d32c8b74e649790b6569362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEISU3VW%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuwvqDAmXqKPaDElMJTgbC0wb1BgIBq2rLvbPL%2FVxnAgIhAI2XkqVKwL%2FNOxN5l2z6hKaQsEtTeQSvgFMQXt%2BDd91jKv8DCHcQABoMNjM3NDIzMTgzODA1IgzEwKKghXjzByNxKxUq3AO5xQuSLdJGEm%2FIFIQd%2BRlGR21TLVXGwpANzHhFwPR1kxdLbK1k3c2jrFonYFAKx7lqCxuU3WIZvYViFU5HhgfydR0lDv85RMD8F%2BzekLMG02Itd2XFEirOZx0hSYWiqCl0ypO6f9ZqI7LOcJQD71bSTJ5FWmctzicj5WiPVJZ8E151wgNZY7%2FXGtNebzcXGr7e8EAmFPnxPCI96J1EvIIW7YuD9RPqaTCw%2FNXU4mD9mB2jynYOxZvvAtK30kwXAH%2BPVK6BOUgpFXZOWvpXWytWCSXJCAv5DQpdkIVa883f7s7Oe7l5Wh7ZecJTuVusKzC8SmAAk%2BeU7mVU2V3nzCSNEHKXRuwXEW3jU5xivago9FAzpAT0WBShRsipM66druOgvFsTiF6go9IiWuXJw9z3AbcuAlZu1P324Y9wbHMhMEh2rkK6maW45cruDGWeOCZgFskt%2BbNC2CXM7FP6FQtHtf8bdkTgBdFM7xmbiK2gAMuDSKFqN3fggfPjba64haMJHdTS8wB0NYYGDM%2FwAiQ4%2BVnAQWpp10JH%2BTcsF1rU8NU8t3Mpwjii2wbWbzvpgcnCX%2FmcwBMRi%2FF7tFBKd3lCvKj3Q%2FynOF%2B79C2QCMlrJAZ%2FlBNUwMNJmVlVtTD70t7TBjqkAXfgyExzSI6HwpOFT%2FRg39ZEs6DI7gUTqzhGZ%2BJmQWXHLpie84OYJ9w5WBKwSONskTLQ8JoyA%2FKh5CQYNFstlhzzfiJQjo7SOLV9NUmVwS6fH%2BUzQe2iuhdXQrjccrjziskKplNl97KiMDmYpHitCQxeypqFvK2umsDCC9do6kcdg%2BjlUqXNNwnRa7KroNn8RmlCthh0fKX0DuNq7Ay9vPIBlXQU&X-Amz-Signature=72012c0def723e0a9eae912362b10da9f7e2697ee815f783af1530a77a30ea00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VHG2QXV%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzxeJ5sht5dfi6o9kgQhdOn87QjKrJQG66LQz3EVrJ8QIhALzwiQMHMcBzJjXuIQfCv4ykEm2zNiLTeMKo3nmdjQ5IKv8DCHcQABoMNjM3NDIzMTgzODA1IgybbOP747Shwr1LQDkq3AMjvjzDgSaAFiGFFhlQWwRD2SCeWHRigC7rUxlWGQkiHwVHFC5eL8j7%2FNjgblLhx8TFg6EJqfic%2BsSKCVmLvNZ33iArXPWyz4Rk%2F2rhn6BYBDXjOwdmV1SGrLVCP5HIH2FYLB7buP7WVPoR4j5mnw5luGJQBi6HBC6UOx2Fy4Uh2T1J%2FiWWiTwNvtgYT1vv3DFyVfkyVqKtfYNs%2BS3ZXG5kh%2BPrHbu0pyFaweTciaMeMbkz3IQPfnQNHcltNf1YnZ95pozkbwyYu%2BdPgdV8c0vac3lIixD9lCppj%2BYGFzWUEuWKKscHnwyLNqpxBRfVedZ6TkIMiN1PrsGKyKGgHRRXjfDImT9kuHESDyrEoDBwATMe8Lhk5kif%2Bge1BrIHAOyTvG9c%2B5LraPKE8qnkAhd42E6bqPPpC9qlkE16B9Z70N4%2F9XSu5pfLn6YgbFx2PEJOtv9W37%2FZxBTh1kOoaKbQwVy%2FwTKkWU6KczqGkvILfSNfkqpx%2B0NCNjoL2VNA69%2BRoFgRHkAh3p%2FJRW%2BMSIL7oM8e9nSOaze5%2B%2BfVNP881QWssCVelk%2FsVjmLqERGZ%2F3qrgBuJssCQof49Rv50omLm3XZUu9uPyf%2Bry5Yw%2FaMMgbAEoxeQPOKUC1VAjD70t7TBjqkAZwD7rVhOs0RewtKUvgP%2BrTd1slpg6HS5ahWzuaH%2BnWkOaQCGh4luapgNqAG2L9f1W7I5O4Zco1nGC4dNIE%2FL%2FTvhCHsk2nL143pv1r%2BM7IE73wY2zdr%2Bv31NYrU%2Bx63W79M4zKRAFPTvMKvqheTYn5bzVXlZGs0cHmdtdWJ5jeHla7mgtoSFPJPRYgz%2FBs%2Bnhbejxo%2FHCbBHM9zsmov0eDvWg58&X-Amz-Signature=53926ad420c9554a285d09e61207dced8525d75d0be82a0cb8e727d146a5390d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RNWH7WA%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2R4Wb8n6D4Mmd21bIRU%2FxvYzikqi4n9q6%2F0Vv3y8ElAiEAynnfmN0wSR61iMdJZyjgVT7oMXafhXuHJUrBs%2BisjrEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDN2qVBlRc7%2FMtfnQFSrcA%2FPTCb%2FzyYP1EKo2rPAnt2RmovGyauKuIi7aPtfJvv7MLOz4BEi6CI7BE8oIZESGU94tzQ8cqTZF1vhNY1xqQxKQLlzSPoOqJKPSVuaHF0l%2Bxzs%2BB1xcpgBr0l3K%2Bg8k3CsoIFRBVw2ZIjdlBfBzVd%2Bou6eGLhcKFGCGYNMP8Qi3D22JHOtUbeKsn6SNjz%2B33omqrAeg64CMddllCPWhGZ1bRjRXUMELyAwmaufnNDdonqHCRBCG69nCW0vxIlujaR4J66L7JqO1hTtXXYevMjX2UplvgHbPwKpatjfheLbFPKOS9MRZnhodIvkbeJWg6wabbxJl3XDwms2UtrcqLuHELOPu5oTPyZI1AjuhZCd%2Fn0RUEFuUwy5vb00xoytmeVtcSrcYSFe2xH1IJzLmlwTfUPuvH1VSpKdSlEgya4CPvt83Qb1Wuc1xS1kD8PYNAe7kDzcudZLIX2YA1Vf%2F5z0BefDi2905Mo9L%2FnJjRXQHJiZhklu%2BLQ17wCXYktNcwzJptKFhPED6PwgDhZhs25cY2qXvs07x%2FqXi5ufi3FKNivjvxfT7GbBd%2FwZcLp7BRDUmaYq5Nx4rc%2Bj1PEsa11fI%2BffNogRVSRul78DOBV%2BeISveTbq07AlvFiKVMJbW3tMGOqUBq4b9LTll6Xnwxp939FfdOA914Ji6uuvpDoLWaoyNL6l4bPnB9lmMX4UBruv2R9JnExRbpTP%2BUG1OloEMHpXHyAAG95oQehPIE36XIUH4mZ2XrHFUTHSPHhfkgIQvUut9UNKdQIzAC0txgZD6PZU8nBbaeg7Bp2rYWaTiC8vXQgUpE3iYMa68bBpcGDwtPoevGXeHKRPyXDTrQx%2B4OTgDX9r4DwJz&X-Amz-Signature=a9e7623223b22faa4b651f08c2c61d720e9ad998c78098c706328896dd084bd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDSSAVZ%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMmA8sVKnsaJVV8Od6qVDjDBHodDDhWmh%2FPyh7PTCUYgIgabBatZNGsuRJPdxtnTIP5WQcuSzi04767xWXJn9gH3Yq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjMfjBACXjbtqEs2SrcA2SuA5PXc%2B2bbQtmn0FJfwS5oiSmjuT9AnWsiHZi7d5RprYVSMSCHnyFrN2LGTi5%2FoGuAeNioSTEHiFPgMI0DkbC9xoSu6XO0TGiW7c1lv6Vk%2Fbha5yIc1i%2BBqSr3o8gtWKmd64aJUyv4jhqrQoLgxg860uHNqxUVRmdoxo%2BgJSAYyzfPGiOFEYmG5BwShRNnRJtyCp09loc1aKWpip1PZnCv9dvwvxLN3Kige5BtykcwEDsz5aQG8XsEYwkKwmTqDw9Gozm84DPc2d3Ip47s6iH7rMqB%2FTSgN3yednLlodA8PialhrhZm1h25iLFamHBLCGU6%2BNtntYrHdROllrM9U234nnJ4E6jUBp2KJU21PLqguggIKcfwX5jeAFBvgJbJ2bzpoyVcJOpyYxRt8aC3oLw2wyc8zLcLTqk2qpbn45Lmhj2nMdnZLCpRzwdYOoh9Fx8R%2B1tmqkWvIImX0s5dRVlWp2Qhed%2BCFtKwEU2Ick8aCxLf%2FhmfgmJchqD0cljIP7nCo8CRIKB2Pz6w9PbuBHuhbYN5z1Qp3ZhTXY5e%2BUFGEkl0H1IlCU8vDFpoWR0lA8QEMfW99V9VyPLILjCpjf26hnXhXGK3ay1wnEtGe2Wg1hDds7N8OOj22FMLTV3tMGOqUBmP64%2FMertKVGhOh%2B3wDQ8mEKgl4XCa6xroyu6uHcxSlGWUDN5HND5U2jPNejXvHzRpNljV7ulVuYl9fos%2BE9gCOxPjNrfGf0MFKboxsBAE9fdXQ1TeZqQ%2B%2Fs1VTvKVVRQ4lYW4ajsDM8Or0CNnFhjGIAMAMRNCGzI7s%2BH%2Fi3Ziv%2FQw328bqSddGcavSdwT9bpUwpH01nNJDxbZP%2Bup2PkxvRl3VS&X-Amz-Signature=0614ccba156e26dcace511afbaaa155ed46d6f81750ec144a666a181dd7489dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SDSSAVZ%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMmA8sVKnsaJVV8Od6qVDjDBHodDDhWmh%2FPyh7PTCUYgIgabBatZNGsuRJPdxtnTIP5WQcuSzi04767xWXJn9gH3Yq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOjMfjBACXjbtqEs2SrcA2SuA5PXc%2B2bbQtmn0FJfwS5oiSmjuT9AnWsiHZi7d5RprYVSMSCHnyFrN2LGTi5%2FoGuAeNioSTEHiFPgMI0DkbC9xoSu6XO0TGiW7c1lv6Vk%2Fbha5yIc1i%2BBqSr3o8gtWKmd64aJUyv4jhqrQoLgxg860uHNqxUVRmdoxo%2BgJSAYyzfPGiOFEYmG5BwShRNnRJtyCp09loc1aKWpip1PZnCv9dvwvxLN3Kige5BtykcwEDsz5aQG8XsEYwkKwmTqDw9Gozm84DPc2d3Ip47s6iH7rMqB%2FTSgN3yednLlodA8PialhrhZm1h25iLFamHBLCGU6%2BNtntYrHdROllrM9U234nnJ4E6jUBp2KJU21PLqguggIKcfwX5jeAFBvgJbJ2bzpoyVcJOpyYxRt8aC3oLw2wyc8zLcLTqk2qpbn45Lmhj2nMdnZLCpRzwdYOoh9Fx8R%2B1tmqkWvIImX0s5dRVlWp2Qhed%2BCFtKwEU2Ick8aCxLf%2FhmfgmJchqD0cljIP7nCo8CRIKB2Pz6w9PbuBHuhbYN5z1Qp3ZhTXY5e%2BUFGEkl0H1IlCU8vDFpoWR0lA8QEMfW99V9VyPLILjCpjf26hnXhXGK3ay1wnEtGe2Wg1hDds7N8OOj22FMLTV3tMGOqUBmP64%2FMertKVGhOh%2B3wDQ8mEKgl4XCa6xroyu6uHcxSlGWUDN5HND5U2jPNejXvHzRpNljV7ulVuYl9fos%2BE9gCOxPjNrfGf0MFKboxsBAE9fdXQ1TeZqQ%2B%2Fs1VTvKVVRQ4lYW4ajsDM8Or0CNnFhjGIAMAMRNCGzI7s%2BH%2Fi3Ziv%2FQw328bqSddGcavSdwT9bpUwpH01nNJDxbZP%2Bup2PkxvRl3VS&X-Amz-Signature=b2b44ab461508cfe7269248f7c8f406628de8ff7de1d27990217f891e789b446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UN7C7B%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAERknv2SxSzcYGv7Yg4LVcBCdwLGScJAm7b%2F004s4YwAiAvdhxgS1H2k6w2nFC5IpvKMyvR%2FNrnj6t0BRvQCihV0yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHWjATViZd6J6CniYKtwDTagj1f8EungCQjw8DmL9cXm0mHrcevHXOfbajpiOkWddr0Vv6Pq1nA9KuQXXVvx2BF3xrPmBEpWcGOI%2BwTRElzdf1iPiZRAUzpyLweoPnc1oBhDQOEJqx2SNZfgMLOyXye2bt%2B0AGxiBVrFM7CJhaN7iyagIJz%2FcsqX2PI8LdP%2BkAPmoFXP0dCSY%2FMEU5rpFmFdDPEr%2F9JQ9%2Fkj%2BdFkOqZiKmqZPv4aAz6IWpve4sXieMufRYPRlsr5eBPo6zk2%2BrF%2Bvs7KFc9wa8ZXso7WMX9tYomMeKojwiXY09AnkniN7MFXAbriYgYGlnKrcJ%2BHdKFzNqRAEDn26Rqm0F9QqOWa9p4AFct%2BEgcskmMgIHmKomuUsiSKqu0q2Jv0XS0dyozEZNCNMo1vDH6JB7erD5VBTE%2Bs04%2Fza0eNw282UGqxPIDfkPFze%2BR63Nqb2n7ckFuuW4eum6ho48aXjBJU9ISjHgWslkfkLcuUJu3qclygt6TJvYnA%2B9TcuuRLyHW%2FbItN21a5%2FFbwkWTScnq3WbgclJdaNKz6Yu%2F2lz68BLrSpPI37ERwRhT4GzfQ%2F%2FqJsI8UMZC7NpFAgChZ0T1Umkdr3cojDe3yWnDojrLiBmjTDhDaUbjcBeW0snCgw%2FdPe0wY6pgEi3uT6RiaWMLR%2BXkvToGRd1Efbanbs5nLrDImAUP41zzsD0NDJmHqbfC70YBkuKmNMiFAGz4pvjf0Ap9cuKtLoC4Kad346vVn76QLhzapGPR%2F3lXsSTwje%2Bm%2FEOP1F5Eq%2BWg3G9%2FEIE%2FWJa477eq50ePq0TiStMQgvTVCRHkn032AIjB%2FDpgaiPEFgRzAYi9D2a3SBk0lHnfRHQFfkCyqVGHpElKGH&X-Amz-Signature=dd186797e86e1bc21cb4ee8bafc826632260c9cf490587b334a391c92adb7a72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UN7C7B%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAERknv2SxSzcYGv7Yg4LVcBCdwLGScJAm7b%2F004s4YwAiAvdhxgS1H2k6w2nFC5IpvKMyvR%2FNrnj6t0BRvQCihV0yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHWjATViZd6J6CniYKtwDTagj1f8EungCQjw8DmL9cXm0mHrcevHXOfbajpiOkWddr0Vv6Pq1nA9KuQXXVvx2BF3xrPmBEpWcGOI%2BwTRElzdf1iPiZRAUzpyLweoPnc1oBhDQOEJqx2SNZfgMLOyXye2bt%2B0AGxiBVrFM7CJhaN7iyagIJz%2FcsqX2PI8LdP%2BkAPmoFXP0dCSY%2FMEU5rpFmFdDPEr%2F9JQ9%2Fkj%2BdFkOqZiKmqZPv4aAz6IWpve4sXieMufRYPRlsr5eBPo6zk2%2BrF%2Bvs7KFc9wa8ZXso7WMX9tYomMeKojwiXY09AnkniN7MFXAbriYgYGlnKrcJ%2BHdKFzNqRAEDn26Rqm0F9QqOWa9p4AFct%2BEgcskmMgIHmKomuUsiSKqu0q2Jv0XS0dyozEZNCNMo1vDH6JB7erD5VBTE%2Bs04%2Fza0eNw282UGqxPIDfkPFze%2BR63Nqb2n7ckFuuW4eum6ho48aXjBJU9ISjHgWslkfkLcuUJu3qclygt6TJvYnA%2B9TcuuRLyHW%2FbItN21a5%2FFbwkWTScnq3WbgclJdaNKz6Yu%2F2lz68BLrSpPI37ERwRhT4GzfQ%2F%2FqJsI8UMZC7NpFAgChZ0T1Umkdr3cojDe3yWnDojrLiBmjTDhDaUbjcBeW0snCgw%2FdPe0wY6pgEi3uT6RiaWMLR%2BXkvToGRd1Efbanbs5nLrDImAUP41zzsD0NDJmHqbfC70YBkuKmNMiFAGz4pvjf0Ap9cuKtLoC4Kad346vVn76QLhzapGPR%2F3lXsSTwje%2Bm%2FEOP1F5Eq%2BWg3G9%2FEIE%2FWJa477eq50ePq0TiStMQgvTVCRHkn032AIjB%2FDpgaiPEFgRzAYi9D2a3SBk0lHnfRHQFfkCyqVGHpElKGH&X-Amz-Signature=36eee4ca3c0d6a4df1ed18d2a3263799d246f12f96a7cc709a2fd91b3d377aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UN7C7B%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAERknv2SxSzcYGv7Yg4LVcBCdwLGScJAm7b%2F004s4YwAiAvdhxgS1H2k6w2nFC5IpvKMyvR%2FNrnj6t0BRvQCihV0yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHWjATViZd6J6CniYKtwDTagj1f8EungCQjw8DmL9cXm0mHrcevHXOfbajpiOkWddr0Vv6Pq1nA9KuQXXVvx2BF3xrPmBEpWcGOI%2BwTRElzdf1iPiZRAUzpyLweoPnc1oBhDQOEJqx2SNZfgMLOyXye2bt%2B0AGxiBVrFM7CJhaN7iyagIJz%2FcsqX2PI8LdP%2BkAPmoFXP0dCSY%2FMEU5rpFmFdDPEr%2F9JQ9%2Fkj%2BdFkOqZiKmqZPv4aAz6IWpve4sXieMufRYPRlsr5eBPo6zk2%2BrF%2Bvs7KFc9wa8ZXso7WMX9tYomMeKojwiXY09AnkniN7MFXAbriYgYGlnKrcJ%2BHdKFzNqRAEDn26Rqm0F9QqOWa9p4AFct%2BEgcskmMgIHmKomuUsiSKqu0q2Jv0XS0dyozEZNCNMo1vDH6JB7erD5VBTE%2Bs04%2Fza0eNw282UGqxPIDfkPFze%2BR63Nqb2n7ckFuuW4eum6ho48aXjBJU9ISjHgWslkfkLcuUJu3qclygt6TJvYnA%2B9TcuuRLyHW%2FbItN21a5%2FFbwkWTScnq3WbgclJdaNKz6Yu%2F2lz68BLrSpPI37ERwRhT4GzfQ%2F%2FqJsI8UMZC7NpFAgChZ0T1Umkdr3cojDe3yWnDojrLiBmjTDhDaUbjcBeW0snCgw%2FdPe0wY6pgEi3uT6RiaWMLR%2BXkvToGRd1Efbanbs5nLrDImAUP41zzsD0NDJmHqbfC70YBkuKmNMiFAGz4pvjf0Ap9cuKtLoC4Kad346vVn76QLhzapGPR%2F3lXsSTwje%2Bm%2FEOP1F5Eq%2BWg3G9%2FEIE%2FWJa477eq50ePq0TiStMQgvTVCRHkn032AIjB%2FDpgaiPEFgRzAYi9D2a3SBk0lHnfRHQFfkCyqVGHpElKGH&X-Amz-Signature=20b32dd3c2c86890816c36a73dcbda5338da006818fdd0690ada24d023643b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UN7C7B%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAERknv2SxSzcYGv7Yg4LVcBCdwLGScJAm7b%2F004s4YwAiAvdhxgS1H2k6w2nFC5IpvKMyvR%2FNrnj6t0BRvQCihV0yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHWjATViZd6J6CniYKtwDTagj1f8EungCQjw8DmL9cXm0mHrcevHXOfbajpiOkWddr0Vv6Pq1nA9KuQXXVvx2BF3xrPmBEpWcGOI%2BwTRElzdf1iPiZRAUzpyLweoPnc1oBhDQOEJqx2SNZfgMLOyXye2bt%2B0AGxiBVrFM7CJhaN7iyagIJz%2FcsqX2PI8LdP%2BkAPmoFXP0dCSY%2FMEU5rpFmFdDPEr%2F9JQ9%2Fkj%2BdFkOqZiKmqZPv4aAz6IWpve4sXieMufRYPRlsr5eBPo6zk2%2BrF%2Bvs7KFc9wa8ZXso7WMX9tYomMeKojwiXY09AnkniN7MFXAbriYgYGlnKrcJ%2BHdKFzNqRAEDn26Rqm0F9QqOWa9p4AFct%2BEgcskmMgIHmKomuUsiSKqu0q2Jv0XS0dyozEZNCNMo1vDH6JB7erD5VBTE%2Bs04%2Fza0eNw282UGqxPIDfkPFze%2BR63Nqb2n7ckFuuW4eum6ho48aXjBJU9ISjHgWslkfkLcuUJu3qclygt6TJvYnA%2B9TcuuRLyHW%2FbItN21a5%2FFbwkWTScnq3WbgclJdaNKz6Yu%2F2lz68BLrSpPI37ERwRhT4GzfQ%2F%2FqJsI8UMZC7NpFAgChZ0T1Umkdr3cojDe3yWnDojrLiBmjTDhDaUbjcBeW0snCgw%2FdPe0wY6pgEi3uT6RiaWMLR%2BXkvToGRd1Efbanbs5nLrDImAUP41zzsD0NDJmHqbfC70YBkuKmNMiFAGz4pvjf0Ap9cuKtLoC4Kad346vVn76QLhzapGPR%2F3lXsSTwje%2Bm%2FEOP1F5Eq%2BWg3G9%2FEIE%2FWJa477eq50ePq0TiStMQgvTVCRHkn032AIjB%2FDpgaiPEFgRzAYi9D2a3SBk0lHnfRHQFfkCyqVGHpElKGH&X-Amz-Signature=cf14707a3c8d332f5235d2b7f8f729c14cc4c3337c2cdc9b4ffe9f1a71939812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZTGA74C%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdULLcJCf5kuRoIsO%2Bg4eUGOAvwr1WNUI4C5YrKD8J1AiEAgtRmN3QXJnSXGjNP4n3ipYSiPyZsDxhdMACOtnGv%2Fkkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPiVCWsHo3BIHGZW7yrcA8CaVNtxvorSaCR270av31MJnyLx2%2FQaBekpkjkcxLp%2BbjDIRW0Q7%2FMx%2FAkW59ANJ5pOiCa4j%2BfpaX%2FK4xjtVe3wFTAQC6IYQuCb8WUFFMSAnzYL99p0gEP6WCr9aluu5tWj%2BYTZ7zlBPoBhjrOuOiKaiiUPrtCgGC2e1rY9EPQUrPxYnBRtKOwxiR8%2FTB%2FActNNN%2BnwcaMHJ2i5%2BS1K%2FEU6Ksb9SoO5j9ZmjbvlsrMCzZqnWidDwi3ECpLbC%2FyCR2gmWiT87MIkN6HGhXI3rDBC2QgHBS4jlXRAazVhxeB5Gt%2FPTj2dGWq3XA83JNBgpWQpA6xMgHQJ4YL50p4CghQ1AEBIxW7FJ50UeHgX%2FwmZVlJqjdMjz4niHXR22dNZXqdMJk3vR7ZBnDYvhCIyv%2FbufYBh0JJVaiNQCPlSdC2aqtTs7RsDTUQYtxs9uD9T06WRYh4egUdW0E1TsGHw6ie8TIVHQG9%2BXldWXoZAaR7cTrFgN1xWQP2GHNsScvK8gkeYzpXou0NbTaIk1xve5jvua6AeJ7ZvcLK98SWsLAmSHE8pPQIx%2BwGMW01kklZJxhFK6yrlFNqLycog2DoEpuR%2FjY1KkOVpyyletgZfTRV%2FvKEJ%2BHAHFJhaFt40MLbW3tMGOqUBkx26gJaGd0%2B4bGvT8nFsnFcUysJDzwpoxlYYI0I0i4fmHxufk4Z4hb%2Bz1nw%2BoiKY%2BEkbm4K6SguwLx0xCFPih4FIG2JHA0Mz%2B4pA7O0BArIDPmQZh3WhBp78I5hwhTYPLJAWqb%2BxKLzclwF5CdI9KW61ZNVVzu63gxycNYwC2JkQtTUB529tM3gM1nz1xYC1HYiCr9eM93P4mGX%2Bwz%2BDqvfdNWka&X-Amz-Signature=672a469f7eee3e22015f4b7a6a38362a49c54f3b8111b7c5525fdc0fe460861d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UN7C7B%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAERknv2SxSzcYGv7Yg4LVcBCdwLGScJAm7b%2F004s4YwAiAvdhxgS1H2k6w2nFC5IpvKMyvR%2FNrnj6t0BRvQCihV0yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHWjATViZd6J6CniYKtwDTagj1f8EungCQjw8DmL9cXm0mHrcevHXOfbajpiOkWddr0Vv6Pq1nA9KuQXXVvx2BF3xrPmBEpWcGOI%2BwTRElzdf1iPiZRAUzpyLweoPnc1oBhDQOEJqx2SNZfgMLOyXye2bt%2B0AGxiBVrFM7CJhaN7iyagIJz%2FcsqX2PI8LdP%2BkAPmoFXP0dCSY%2FMEU5rpFmFdDPEr%2F9JQ9%2Fkj%2BdFkOqZiKmqZPv4aAz6IWpve4sXieMufRYPRlsr5eBPo6zk2%2BrF%2Bvs7KFc9wa8ZXso7WMX9tYomMeKojwiXY09AnkniN7MFXAbriYgYGlnKrcJ%2BHdKFzNqRAEDn26Rqm0F9QqOWa9p4AFct%2BEgcskmMgIHmKomuUsiSKqu0q2Jv0XS0dyozEZNCNMo1vDH6JB7erD5VBTE%2Bs04%2Fza0eNw282UGqxPIDfkPFze%2BR63Nqb2n7ckFuuW4eum6ho48aXjBJU9ISjHgWslkfkLcuUJu3qclygt6TJvYnA%2B9TcuuRLyHW%2FbItN21a5%2FFbwkWTScnq3WbgclJdaNKz6Yu%2F2lz68BLrSpPI37ERwRhT4GzfQ%2F%2FqJsI8UMZC7NpFAgChZ0T1Umkdr3cojDe3yWnDojrLiBmjTDhDaUbjcBeW0snCgw%2FdPe0wY6pgEi3uT6RiaWMLR%2BXkvToGRd1Efbanbs5nLrDImAUP41zzsD0NDJmHqbfC70YBkuKmNMiFAGz4pvjf0Ap9cuKtLoC4Kad346vVn76QLhzapGPR%2F3lXsSTwje%2Bm%2FEOP1F5Eq%2BWg3G9%2FEIE%2FWJa477eq50ePq0TiStMQgvTVCRHkn032AIjB%2FDpgaiPEFgRzAYi9D2a3SBk0lHnfRHQFfkCyqVGHpElKGH&X-Amz-Signature=7f9f5444a1e2717bf294a345e9b8943af56ea0374e812eb52163c117367b6cd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UN7C7B%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAERknv2SxSzcYGv7Yg4LVcBCdwLGScJAm7b%2F004s4YwAiAvdhxgS1H2k6w2nFC5IpvKMyvR%2FNrnj6t0BRvQCihV0yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHWjATViZd6J6CniYKtwDTagj1f8EungCQjw8DmL9cXm0mHrcevHXOfbajpiOkWddr0Vv6Pq1nA9KuQXXVvx2BF3xrPmBEpWcGOI%2BwTRElzdf1iPiZRAUzpyLweoPnc1oBhDQOEJqx2SNZfgMLOyXye2bt%2B0AGxiBVrFM7CJhaN7iyagIJz%2FcsqX2PI8LdP%2BkAPmoFXP0dCSY%2FMEU5rpFmFdDPEr%2F9JQ9%2Fkj%2BdFkOqZiKmqZPv4aAz6IWpve4sXieMufRYPRlsr5eBPo6zk2%2BrF%2Bvs7KFc9wa8ZXso7WMX9tYomMeKojwiXY09AnkniN7MFXAbriYgYGlnKrcJ%2BHdKFzNqRAEDn26Rqm0F9QqOWa9p4AFct%2BEgcskmMgIHmKomuUsiSKqu0q2Jv0XS0dyozEZNCNMo1vDH6JB7erD5VBTE%2Bs04%2Fza0eNw282UGqxPIDfkPFze%2BR63Nqb2n7ckFuuW4eum6ho48aXjBJU9ISjHgWslkfkLcuUJu3qclygt6TJvYnA%2B9TcuuRLyHW%2FbItN21a5%2FFbwkWTScnq3WbgclJdaNKz6Yu%2F2lz68BLrSpPI37ERwRhT4GzfQ%2F%2FqJsI8UMZC7NpFAgChZ0T1Umkdr3cojDe3yWnDojrLiBmjTDhDaUbjcBeW0snCgw%2FdPe0wY6pgEi3uT6RiaWMLR%2BXkvToGRd1Efbanbs5nLrDImAUP41zzsD0NDJmHqbfC70YBkuKmNMiFAGz4pvjf0Ap9cuKtLoC4Kad346vVn76QLhzapGPR%2F3lXsSTwje%2Bm%2FEOP1F5Eq%2BWg3G9%2FEIE%2FWJa477eq50ePq0TiStMQgvTVCRHkn032AIjB%2FDpgaiPEFgRzAYi9D2a3SBk0lHnfRHQFfkCyqVGHpElKGH&X-Amz-Signature=5adb9d46398a0c266fea30ad5dc7c11d17d8e32c69ebbb66393a625ac0a5a3c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UN7C7B%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAERknv2SxSzcYGv7Yg4LVcBCdwLGScJAm7b%2F004s4YwAiAvdhxgS1H2k6w2nFC5IpvKMyvR%2FNrnj6t0BRvQCihV0yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHWjATViZd6J6CniYKtwDTagj1f8EungCQjw8DmL9cXm0mHrcevHXOfbajpiOkWddr0Vv6Pq1nA9KuQXXVvx2BF3xrPmBEpWcGOI%2BwTRElzdf1iPiZRAUzpyLweoPnc1oBhDQOEJqx2SNZfgMLOyXye2bt%2B0AGxiBVrFM7CJhaN7iyagIJz%2FcsqX2PI8LdP%2BkAPmoFXP0dCSY%2FMEU5rpFmFdDPEr%2F9JQ9%2Fkj%2BdFkOqZiKmqZPv4aAz6IWpve4sXieMufRYPRlsr5eBPo6zk2%2BrF%2Bvs7KFc9wa8ZXso7WMX9tYomMeKojwiXY09AnkniN7MFXAbriYgYGlnKrcJ%2BHdKFzNqRAEDn26Rqm0F9QqOWa9p4AFct%2BEgcskmMgIHmKomuUsiSKqu0q2Jv0XS0dyozEZNCNMo1vDH6JB7erD5VBTE%2Bs04%2Fza0eNw282UGqxPIDfkPFze%2BR63Nqb2n7ckFuuW4eum6ho48aXjBJU9ISjHgWslkfkLcuUJu3qclygt6TJvYnA%2B9TcuuRLyHW%2FbItN21a5%2FFbwkWTScnq3WbgclJdaNKz6Yu%2F2lz68BLrSpPI37ERwRhT4GzfQ%2F%2FqJsI8UMZC7NpFAgChZ0T1Umkdr3cojDe3yWnDojrLiBmjTDhDaUbjcBeW0snCgw%2FdPe0wY6pgEi3uT6RiaWMLR%2BXkvToGRd1Efbanbs5nLrDImAUP41zzsD0NDJmHqbfC70YBkuKmNMiFAGz4pvjf0Ap9cuKtLoC4Kad346vVn76QLhzapGPR%2F3lXsSTwje%2Bm%2FEOP1F5Eq%2BWg3G9%2FEIE%2FWJa477eq50ePq0TiStMQgvTVCRHkn032AIjB%2FDpgaiPEFgRzAYi9D2a3SBk0lHnfRHQFfkCyqVGHpElKGH&X-Amz-Signature=20b32dd3c2c86890816c36a73dcbda5338da006818fdd0690ada24d023643b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UN7C7B%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAERknv2SxSzcYGv7Yg4LVcBCdwLGScJAm7b%2F004s4YwAiAvdhxgS1H2k6w2nFC5IpvKMyvR%2FNrnj6t0BRvQCihV0yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHWjATViZd6J6CniYKtwDTagj1f8EungCQjw8DmL9cXm0mHrcevHXOfbajpiOkWddr0Vv6Pq1nA9KuQXXVvx2BF3xrPmBEpWcGOI%2BwTRElzdf1iPiZRAUzpyLweoPnc1oBhDQOEJqx2SNZfgMLOyXye2bt%2B0AGxiBVrFM7CJhaN7iyagIJz%2FcsqX2PI8LdP%2BkAPmoFXP0dCSY%2FMEU5rpFmFdDPEr%2F9JQ9%2Fkj%2BdFkOqZiKmqZPv4aAz6IWpve4sXieMufRYPRlsr5eBPo6zk2%2BrF%2Bvs7KFc9wa8ZXso7WMX9tYomMeKojwiXY09AnkniN7MFXAbriYgYGlnKrcJ%2BHdKFzNqRAEDn26Rqm0F9QqOWa9p4AFct%2BEgcskmMgIHmKomuUsiSKqu0q2Jv0XS0dyozEZNCNMo1vDH6JB7erD5VBTE%2Bs04%2Fza0eNw282UGqxPIDfkPFze%2BR63Nqb2n7ckFuuW4eum6ho48aXjBJU9ISjHgWslkfkLcuUJu3qclygt6TJvYnA%2B9TcuuRLyHW%2FbItN21a5%2FFbwkWTScnq3WbgclJdaNKz6Yu%2F2lz68BLrSpPI37ERwRhT4GzfQ%2F%2FqJsI8UMZC7NpFAgChZ0T1Umkdr3cojDe3yWnDojrLiBmjTDhDaUbjcBeW0snCgw%2FdPe0wY6pgEi3uT6RiaWMLR%2BXkvToGRd1Efbanbs5nLrDImAUP41zzsD0NDJmHqbfC70YBkuKmNMiFAGz4pvjf0Ap9cuKtLoC4Kad346vVn76QLhzapGPR%2F3lXsSTwje%2Bm%2FEOP1F5Eq%2BWg3G9%2FEIE%2FWJa477eq50ePq0TiStMQgvTVCRHkn032AIjB%2FDpgaiPEFgRzAYi9D2a3SBk0lHnfRHQFfkCyqVGHpElKGH&X-Amz-Signature=063707572e6b62a8433cb8eee3318205320b441e0bceda02a586dcbfe928e966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UN7C7B%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAERknv2SxSzcYGv7Yg4LVcBCdwLGScJAm7b%2F004s4YwAiAvdhxgS1H2k6w2nFC5IpvKMyvR%2FNrnj6t0BRvQCihV0yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHWjATViZd6J6CniYKtwDTagj1f8EungCQjw8DmL9cXm0mHrcevHXOfbajpiOkWddr0Vv6Pq1nA9KuQXXVvx2BF3xrPmBEpWcGOI%2BwTRElzdf1iPiZRAUzpyLweoPnc1oBhDQOEJqx2SNZfgMLOyXye2bt%2B0AGxiBVrFM7CJhaN7iyagIJz%2FcsqX2PI8LdP%2BkAPmoFXP0dCSY%2FMEU5rpFmFdDPEr%2F9JQ9%2Fkj%2BdFkOqZiKmqZPv4aAz6IWpve4sXieMufRYPRlsr5eBPo6zk2%2BrF%2Bvs7KFc9wa8ZXso7WMX9tYomMeKojwiXY09AnkniN7MFXAbriYgYGlnKrcJ%2BHdKFzNqRAEDn26Rqm0F9QqOWa9p4AFct%2BEgcskmMgIHmKomuUsiSKqu0q2Jv0XS0dyozEZNCNMo1vDH6JB7erD5VBTE%2Bs04%2Fza0eNw282UGqxPIDfkPFze%2BR63Nqb2n7ckFuuW4eum6ho48aXjBJU9ISjHgWslkfkLcuUJu3qclygt6TJvYnA%2B9TcuuRLyHW%2FbItN21a5%2FFbwkWTScnq3WbgclJdaNKz6Yu%2F2lz68BLrSpPI37ERwRhT4GzfQ%2F%2FqJsI8UMZC7NpFAgChZ0T1Umkdr3cojDe3yWnDojrLiBmjTDhDaUbjcBeW0snCgw%2FdPe0wY6pgEi3uT6RiaWMLR%2BXkvToGRd1Efbanbs5nLrDImAUP41zzsD0NDJmHqbfC70YBkuKmNMiFAGz4pvjf0Ap9cuKtLoC4Kad346vVn76QLhzapGPR%2F3lXsSTwje%2Bm%2FEOP1F5Eq%2BWg3G9%2FEIE%2FWJa477eq50ePq0TiStMQgvTVCRHkn032AIjB%2FDpgaiPEFgRzAYi9D2a3SBk0lHnfRHQFfkCyqVGHpElKGH&X-Amz-Signature=0519f4f740816c64ff2c5cdb0542bb75680b253dc91f649da82f2e0225a45a1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UN7C7B%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAERknv2SxSzcYGv7Yg4LVcBCdwLGScJAm7b%2F004s4YwAiAvdhxgS1H2k6w2nFC5IpvKMyvR%2FNrnj6t0BRvQCihV0yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMHWjATViZd6J6CniYKtwDTagj1f8EungCQjw8DmL9cXm0mHrcevHXOfbajpiOkWddr0Vv6Pq1nA9KuQXXVvx2BF3xrPmBEpWcGOI%2BwTRElzdf1iPiZRAUzpyLweoPnc1oBhDQOEJqx2SNZfgMLOyXye2bt%2B0AGxiBVrFM7CJhaN7iyagIJz%2FcsqX2PI8LdP%2BkAPmoFXP0dCSY%2FMEU5rpFmFdDPEr%2F9JQ9%2Fkj%2BdFkOqZiKmqZPv4aAz6IWpve4sXieMufRYPRlsr5eBPo6zk2%2BrF%2Bvs7KFc9wa8ZXso7WMX9tYomMeKojwiXY09AnkniN7MFXAbriYgYGlnKrcJ%2BHdKFzNqRAEDn26Rqm0F9QqOWa9p4AFct%2BEgcskmMgIHmKomuUsiSKqu0q2Jv0XS0dyozEZNCNMo1vDH6JB7erD5VBTE%2Bs04%2Fza0eNw282UGqxPIDfkPFze%2BR63Nqb2n7ckFuuW4eum6ho48aXjBJU9ISjHgWslkfkLcuUJu3qclygt6TJvYnA%2B9TcuuRLyHW%2FbItN21a5%2FFbwkWTScnq3WbgclJdaNKz6Yu%2F2lz68BLrSpPI37ERwRhT4GzfQ%2F%2FqJsI8UMZC7NpFAgChZ0T1Umkdr3cojDe3yWnDojrLiBmjTDhDaUbjcBeW0snCgw%2FdPe0wY6pgEi3uT6RiaWMLR%2BXkvToGRd1Efbanbs5nLrDImAUP41zzsD0NDJmHqbfC70YBkuKmNMiFAGz4pvjf0Ap9cuKtLoC4Kad346vVn76QLhzapGPR%2F3lXsSTwje%2Bm%2FEOP1F5Eq%2BWg3G9%2FEIE%2FWJa477eq50ePq0TiStMQgvTVCRHkn032AIjB%2FDpgaiPEFgRzAYi9D2a3SBk0lHnfRHQFfkCyqVGHpElKGH&X-Amz-Signature=e89016ad3a19ff0f68efa114f2ca63c53eb75b3e6d19cc1025d5a847a6148dfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


