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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFHCMFCX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBvV29Xns4YuvPe3a56%2F62UA38OusRftP6eqKt19NRJ0AiEAijFb2Ii%2F6iCQXVadzZ3DfUk3ic2ucslv6XvCxFHnW68q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDH%2FksGmiD16RHOdemyrcA9fFZjbrgVk5axEGTZbz3PCZpDNt7MMH5IRmVk86BLv3dF7JBWcFmincQNhajqotXD8TuSH0pHvDGxa51S9sWVZuP2MS4eF6e9%2FgeFS1ewMFBIfrKhy53X6HwRSljAopXiiX7xAsYgJVeS5VpQWPJvUb8DbZxUq%2BfDBOhFHiNTR0JoHSeHoTIBswpcEHQ21qb2yHwm%2F%2BhHGX9DWHqB5twNR3IaBYmTwHQJJo7X9r58jQpqAdIVvOTLjPVwLC5zkFuAE%2BiAfPgWlz9mS6pEZiI6mvlOuox6WNRN557gCh6HW2Pien%2BgIKDgtkUJjFbQhX0GTM29WKyLlFO%2BRgqbZaDF5ughBVPh3I8JVsvws%2F8rjIKZZn6YbbEp0Nqg8eev9s0lyktGx%2FoeCAZlZA3Bxk5%2BZjgrQIIeEei4m%2Fe1ztmpvIuv2vZ2Y10CL4xl4L%2FpNndwqAzG2oBWLvj0%2FiRfl9PqspAa3K3cJBTr09wxLBjh0pNeVhc9MPQyTNeJ55bXHSZvopFH5EnRI8yqH9ZbMonTdnRZSRAA%2BmVL3E1F4MlI7m3AWBsn2irzaJzy7RVgfZtqLP89YwJQdTF9FVyBL%2FEzYCa3LhW5aiqJSaeyvhFVkks6%2FsNddanTwiiWjlMJymwsQGOqUBUUxlTH55LMIcn%2BzLdTklz4mOA5b5DTIuavQglOjDA5nkg4PAhSFcAwBIL4YX%2F3APFnLz0ci%2BW2ox8%2FZu99QrbCkroJUQ7I168W2g8swKvC0e%2Fwxh71ibh%2BKu1ZkSkqy4vEYJqprY0DRRvDUPlmdYWnFJ0vMdj9xLhKQJ4qRL%2FEzgQPooo9D8AEQGQnTeH53snbRNM1os57IrC3VlUaRVI%2B42jn58&X-Amz-Signature=43b22726494ea99fac43e1d331a919bb5b60c35247fc6936e8f835d23291fcd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFHCMFCX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBvV29Xns4YuvPe3a56%2F62UA38OusRftP6eqKt19NRJ0AiEAijFb2Ii%2F6iCQXVadzZ3DfUk3ic2ucslv6XvCxFHnW68q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDH%2FksGmiD16RHOdemyrcA9fFZjbrgVk5axEGTZbz3PCZpDNt7MMH5IRmVk86BLv3dF7JBWcFmincQNhajqotXD8TuSH0pHvDGxa51S9sWVZuP2MS4eF6e9%2FgeFS1ewMFBIfrKhy53X6HwRSljAopXiiX7xAsYgJVeS5VpQWPJvUb8DbZxUq%2BfDBOhFHiNTR0JoHSeHoTIBswpcEHQ21qb2yHwm%2F%2BhHGX9DWHqB5twNR3IaBYmTwHQJJo7X9r58jQpqAdIVvOTLjPVwLC5zkFuAE%2BiAfPgWlz9mS6pEZiI6mvlOuox6WNRN557gCh6HW2Pien%2BgIKDgtkUJjFbQhX0GTM29WKyLlFO%2BRgqbZaDF5ughBVPh3I8JVsvws%2F8rjIKZZn6YbbEp0Nqg8eev9s0lyktGx%2FoeCAZlZA3Bxk5%2BZjgrQIIeEei4m%2Fe1ztmpvIuv2vZ2Y10CL4xl4L%2FpNndwqAzG2oBWLvj0%2FiRfl9PqspAa3K3cJBTr09wxLBjh0pNeVhc9MPQyTNeJ55bXHSZvopFH5EnRI8yqH9ZbMonTdnRZSRAA%2BmVL3E1F4MlI7m3AWBsn2irzaJzy7RVgfZtqLP89YwJQdTF9FVyBL%2FEzYCa3LhW5aiqJSaeyvhFVkks6%2FsNddanTwiiWjlMJymwsQGOqUBUUxlTH55LMIcn%2BzLdTklz4mOA5b5DTIuavQglOjDA5nkg4PAhSFcAwBIL4YX%2F3APFnLz0ci%2BW2ox8%2FZu99QrbCkroJUQ7I168W2g8swKvC0e%2Fwxh71ibh%2BKu1ZkSkqy4vEYJqprY0DRRvDUPlmdYWnFJ0vMdj9xLhKQJ4qRL%2FEzgQPooo9D8AEQGQnTeH53snbRNM1os57IrC3VlUaRVI%2B42jn58&X-Amz-Signature=380b3e1c3e7bbd3097778eead470ceaf9037c7c36606cc00c2bd0062ee976a41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFHCMFCX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBvV29Xns4YuvPe3a56%2F62UA38OusRftP6eqKt19NRJ0AiEAijFb2Ii%2F6iCQXVadzZ3DfUk3ic2ucslv6XvCxFHnW68q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDH%2FksGmiD16RHOdemyrcA9fFZjbrgVk5axEGTZbz3PCZpDNt7MMH5IRmVk86BLv3dF7JBWcFmincQNhajqotXD8TuSH0pHvDGxa51S9sWVZuP2MS4eF6e9%2FgeFS1ewMFBIfrKhy53X6HwRSljAopXiiX7xAsYgJVeS5VpQWPJvUb8DbZxUq%2BfDBOhFHiNTR0JoHSeHoTIBswpcEHQ21qb2yHwm%2F%2BhHGX9DWHqB5twNR3IaBYmTwHQJJo7X9r58jQpqAdIVvOTLjPVwLC5zkFuAE%2BiAfPgWlz9mS6pEZiI6mvlOuox6WNRN557gCh6HW2Pien%2BgIKDgtkUJjFbQhX0GTM29WKyLlFO%2BRgqbZaDF5ughBVPh3I8JVsvws%2F8rjIKZZn6YbbEp0Nqg8eev9s0lyktGx%2FoeCAZlZA3Bxk5%2BZjgrQIIeEei4m%2Fe1ztmpvIuv2vZ2Y10CL4xl4L%2FpNndwqAzG2oBWLvj0%2FiRfl9PqspAa3K3cJBTr09wxLBjh0pNeVhc9MPQyTNeJ55bXHSZvopFH5EnRI8yqH9ZbMonTdnRZSRAA%2BmVL3E1F4MlI7m3AWBsn2irzaJzy7RVgfZtqLP89YwJQdTF9FVyBL%2FEzYCa3LhW5aiqJSaeyvhFVkks6%2FsNddanTwiiWjlMJymwsQGOqUBUUxlTH55LMIcn%2BzLdTklz4mOA5b5DTIuavQglOjDA5nkg4PAhSFcAwBIL4YX%2F3APFnLz0ci%2BW2ox8%2FZu99QrbCkroJUQ7I168W2g8swKvC0e%2Fwxh71ibh%2BKu1ZkSkqy4vEYJqprY0DRRvDUPlmdYWnFJ0vMdj9xLhKQJ4qRL%2FEzgQPooo9D8AEQGQnTeH53snbRNM1os57IrC3VlUaRVI%2B42jn58&X-Amz-Signature=1b65625d3fcc3cce889b071387c33a7dc532923c678278f001af9722c5582dbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFHCMFCX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBvV29Xns4YuvPe3a56%2F62UA38OusRftP6eqKt19NRJ0AiEAijFb2Ii%2F6iCQXVadzZ3DfUk3ic2ucslv6XvCxFHnW68q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDH%2FksGmiD16RHOdemyrcA9fFZjbrgVk5axEGTZbz3PCZpDNt7MMH5IRmVk86BLv3dF7JBWcFmincQNhajqotXD8TuSH0pHvDGxa51S9sWVZuP2MS4eF6e9%2FgeFS1ewMFBIfrKhy53X6HwRSljAopXiiX7xAsYgJVeS5VpQWPJvUb8DbZxUq%2BfDBOhFHiNTR0JoHSeHoTIBswpcEHQ21qb2yHwm%2F%2BhHGX9DWHqB5twNR3IaBYmTwHQJJo7X9r58jQpqAdIVvOTLjPVwLC5zkFuAE%2BiAfPgWlz9mS6pEZiI6mvlOuox6WNRN557gCh6HW2Pien%2BgIKDgtkUJjFbQhX0GTM29WKyLlFO%2BRgqbZaDF5ughBVPh3I8JVsvws%2F8rjIKZZn6YbbEp0Nqg8eev9s0lyktGx%2FoeCAZlZA3Bxk5%2BZjgrQIIeEei4m%2Fe1ztmpvIuv2vZ2Y10CL4xl4L%2FpNndwqAzG2oBWLvj0%2FiRfl9PqspAa3K3cJBTr09wxLBjh0pNeVhc9MPQyTNeJ55bXHSZvopFH5EnRI8yqH9ZbMonTdnRZSRAA%2BmVL3E1F4MlI7m3AWBsn2irzaJzy7RVgfZtqLP89YwJQdTF9FVyBL%2FEzYCa3LhW5aiqJSaeyvhFVkks6%2FsNddanTwiiWjlMJymwsQGOqUBUUxlTH55LMIcn%2BzLdTklz4mOA5b5DTIuavQglOjDA5nkg4PAhSFcAwBIL4YX%2F3APFnLz0ci%2BW2ox8%2FZu99QrbCkroJUQ7I168W2g8swKvC0e%2Fwxh71ibh%2BKu1ZkSkqy4vEYJqprY0DRRvDUPlmdYWnFJ0vMdj9xLhKQJ4qRL%2FEzgQPooo9D8AEQGQnTeH53snbRNM1os57IrC3VlUaRVI%2B42jn58&X-Amz-Signature=f06651799f0cf9fa8249490aaf71f919e56726df0f273d3e39862d4167304030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFHCMFCX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBvV29Xns4YuvPe3a56%2F62UA38OusRftP6eqKt19NRJ0AiEAijFb2Ii%2F6iCQXVadzZ3DfUk3ic2ucslv6XvCxFHnW68q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDH%2FksGmiD16RHOdemyrcA9fFZjbrgVk5axEGTZbz3PCZpDNt7MMH5IRmVk86BLv3dF7JBWcFmincQNhajqotXD8TuSH0pHvDGxa51S9sWVZuP2MS4eF6e9%2FgeFS1ewMFBIfrKhy53X6HwRSljAopXiiX7xAsYgJVeS5VpQWPJvUb8DbZxUq%2BfDBOhFHiNTR0JoHSeHoTIBswpcEHQ21qb2yHwm%2F%2BhHGX9DWHqB5twNR3IaBYmTwHQJJo7X9r58jQpqAdIVvOTLjPVwLC5zkFuAE%2BiAfPgWlz9mS6pEZiI6mvlOuox6WNRN557gCh6HW2Pien%2BgIKDgtkUJjFbQhX0GTM29WKyLlFO%2BRgqbZaDF5ughBVPh3I8JVsvws%2F8rjIKZZn6YbbEp0Nqg8eev9s0lyktGx%2FoeCAZlZA3Bxk5%2BZjgrQIIeEei4m%2Fe1ztmpvIuv2vZ2Y10CL4xl4L%2FpNndwqAzG2oBWLvj0%2FiRfl9PqspAa3K3cJBTr09wxLBjh0pNeVhc9MPQyTNeJ55bXHSZvopFH5EnRI8yqH9ZbMonTdnRZSRAA%2BmVL3E1F4MlI7m3AWBsn2irzaJzy7RVgfZtqLP89YwJQdTF9FVyBL%2FEzYCa3LhW5aiqJSaeyvhFVkks6%2FsNddanTwiiWjlMJymwsQGOqUBUUxlTH55LMIcn%2BzLdTklz4mOA5b5DTIuavQglOjDA5nkg4PAhSFcAwBIL4YX%2F3APFnLz0ci%2BW2ox8%2FZu99QrbCkroJUQ7I168W2g8swKvC0e%2Fwxh71ibh%2BKu1ZkSkqy4vEYJqprY0DRRvDUPlmdYWnFJ0vMdj9xLhKQJ4qRL%2FEzgQPooo9D8AEQGQnTeH53snbRNM1os57IrC3VlUaRVI%2B42jn58&X-Amz-Signature=c17dc896d8486068ec1de6673de0e660e4908c705b7b99780b0c32f95cb5f1da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFHCMFCX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBvV29Xns4YuvPe3a56%2F62UA38OusRftP6eqKt19NRJ0AiEAijFb2Ii%2F6iCQXVadzZ3DfUk3ic2ucslv6XvCxFHnW68q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDH%2FksGmiD16RHOdemyrcA9fFZjbrgVk5axEGTZbz3PCZpDNt7MMH5IRmVk86BLv3dF7JBWcFmincQNhajqotXD8TuSH0pHvDGxa51S9sWVZuP2MS4eF6e9%2FgeFS1ewMFBIfrKhy53X6HwRSljAopXiiX7xAsYgJVeS5VpQWPJvUb8DbZxUq%2BfDBOhFHiNTR0JoHSeHoTIBswpcEHQ21qb2yHwm%2F%2BhHGX9DWHqB5twNR3IaBYmTwHQJJo7X9r58jQpqAdIVvOTLjPVwLC5zkFuAE%2BiAfPgWlz9mS6pEZiI6mvlOuox6WNRN557gCh6HW2Pien%2BgIKDgtkUJjFbQhX0GTM29WKyLlFO%2BRgqbZaDF5ughBVPh3I8JVsvws%2F8rjIKZZn6YbbEp0Nqg8eev9s0lyktGx%2FoeCAZlZA3Bxk5%2BZjgrQIIeEei4m%2Fe1ztmpvIuv2vZ2Y10CL4xl4L%2FpNndwqAzG2oBWLvj0%2FiRfl9PqspAa3K3cJBTr09wxLBjh0pNeVhc9MPQyTNeJ55bXHSZvopFH5EnRI8yqH9ZbMonTdnRZSRAA%2BmVL3E1F4MlI7m3AWBsn2irzaJzy7RVgfZtqLP89YwJQdTF9FVyBL%2FEzYCa3LhW5aiqJSaeyvhFVkks6%2FsNddanTwiiWjlMJymwsQGOqUBUUxlTH55LMIcn%2BzLdTklz4mOA5b5DTIuavQglOjDA5nkg4PAhSFcAwBIL4YX%2F3APFnLz0ci%2BW2ox8%2FZu99QrbCkroJUQ7I168W2g8swKvC0e%2Fwxh71ibh%2BKu1ZkSkqy4vEYJqprY0DRRvDUPlmdYWnFJ0vMdj9xLhKQJ4qRL%2FEzgQPooo9D8AEQGQnTeH53snbRNM1os57IrC3VlUaRVI%2B42jn58&X-Amz-Signature=cb06a1d6831644ba6a713f5e5c6e9fe8e196b17426489d953e0b058e45ef8f06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFHCMFCX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBvV29Xns4YuvPe3a56%2F62UA38OusRftP6eqKt19NRJ0AiEAijFb2Ii%2F6iCQXVadzZ3DfUk3ic2ucslv6XvCxFHnW68q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDH%2FksGmiD16RHOdemyrcA9fFZjbrgVk5axEGTZbz3PCZpDNt7MMH5IRmVk86BLv3dF7JBWcFmincQNhajqotXD8TuSH0pHvDGxa51S9sWVZuP2MS4eF6e9%2FgeFS1ewMFBIfrKhy53X6HwRSljAopXiiX7xAsYgJVeS5VpQWPJvUb8DbZxUq%2BfDBOhFHiNTR0JoHSeHoTIBswpcEHQ21qb2yHwm%2F%2BhHGX9DWHqB5twNR3IaBYmTwHQJJo7X9r58jQpqAdIVvOTLjPVwLC5zkFuAE%2BiAfPgWlz9mS6pEZiI6mvlOuox6WNRN557gCh6HW2Pien%2BgIKDgtkUJjFbQhX0GTM29WKyLlFO%2BRgqbZaDF5ughBVPh3I8JVsvws%2F8rjIKZZn6YbbEp0Nqg8eev9s0lyktGx%2FoeCAZlZA3Bxk5%2BZjgrQIIeEei4m%2Fe1ztmpvIuv2vZ2Y10CL4xl4L%2FpNndwqAzG2oBWLvj0%2FiRfl9PqspAa3K3cJBTr09wxLBjh0pNeVhc9MPQyTNeJ55bXHSZvopFH5EnRI8yqH9ZbMonTdnRZSRAA%2BmVL3E1F4MlI7m3AWBsn2irzaJzy7RVgfZtqLP89YwJQdTF9FVyBL%2FEzYCa3LhW5aiqJSaeyvhFVkks6%2FsNddanTwiiWjlMJymwsQGOqUBUUxlTH55LMIcn%2BzLdTklz4mOA5b5DTIuavQglOjDA5nkg4PAhSFcAwBIL4YX%2F3APFnLz0ci%2BW2ox8%2FZu99QrbCkroJUQ7I168W2g8swKvC0e%2Fwxh71ibh%2BKu1ZkSkqy4vEYJqprY0DRRvDUPlmdYWnFJ0vMdj9xLhKQJ4qRL%2FEzgQPooo9D8AEQGQnTeH53snbRNM1os57IrC3VlUaRVI%2B42jn58&X-Amz-Signature=f1d76248ec9944fde74b09e1caa033dda1121f26ecf3bb15c071b41f8f8d2899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFHCMFCX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBvV29Xns4YuvPe3a56%2F62UA38OusRftP6eqKt19NRJ0AiEAijFb2Ii%2F6iCQXVadzZ3DfUk3ic2ucslv6XvCxFHnW68q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDH%2FksGmiD16RHOdemyrcA9fFZjbrgVk5axEGTZbz3PCZpDNt7MMH5IRmVk86BLv3dF7JBWcFmincQNhajqotXD8TuSH0pHvDGxa51S9sWVZuP2MS4eF6e9%2FgeFS1ewMFBIfrKhy53X6HwRSljAopXiiX7xAsYgJVeS5VpQWPJvUb8DbZxUq%2BfDBOhFHiNTR0JoHSeHoTIBswpcEHQ21qb2yHwm%2F%2BhHGX9DWHqB5twNR3IaBYmTwHQJJo7X9r58jQpqAdIVvOTLjPVwLC5zkFuAE%2BiAfPgWlz9mS6pEZiI6mvlOuox6WNRN557gCh6HW2Pien%2BgIKDgtkUJjFbQhX0GTM29WKyLlFO%2BRgqbZaDF5ughBVPh3I8JVsvws%2F8rjIKZZn6YbbEp0Nqg8eev9s0lyktGx%2FoeCAZlZA3Bxk5%2BZjgrQIIeEei4m%2Fe1ztmpvIuv2vZ2Y10CL4xl4L%2FpNndwqAzG2oBWLvj0%2FiRfl9PqspAa3K3cJBTr09wxLBjh0pNeVhc9MPQyTNeJ55bXHSZvopFH5EnRI8yqH9ZbMonTdnRZSRAA%2BmVL3E1F4MlI7m3AWBsn2irzaJzy7RVgfZtqLP89YwJQdTF9FVyBL%2FEzYCa3LhW5aiqJSaeyvhFVkks6%2FsNddanTwiiWjlMJymwsQGOqUBUUxlTH55LMIcn%2BzLdTklz4mOA5b5DTIuavQglOjDA5nkg4PAhSFcAwBIL4YX%2F3APFnLz0ci%2BW2ox8%2FZu99QrbCkroJUQ7I168W2g8swKvC0e%2Fwxh71ibh%2BKu1ZkSkqy4vEYJqprY0DRRvDUPlmdYWnFJ0vMdj9xLhKQJ4qRL%2FEzgQPooo9D8AEQGQnTeH53snbRNM1os57IrC3VlUaRVI%2B42jn58&X-Amz-Signature=c3a26b90c456c0691309756b11f64e0e13563c85f04e006322ff0ab940a4f396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFHCMFCX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBvV29Xns4YuvPe3a56%2F62UA38OusRftP6eqKt19NRJ0AiEAijFb2Ii%2F6iCQXVadzZ3DfUk3ic2ucslv6XvCxFHnW68q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDH%2FksGmiD16RHOdemyrcA9fFZjbrgVk5axEGTZbz3PCZpDNt7MMH5IRmVk86BLv3dF7JBWcFmincQNhajqotXD8TuSH0pHvDGxa51S9sWVZuP2MS4eF6e9%2FgeFS1ewMFBIfrKhy53X6HwRSljAopXiiX7xAsYgJVeS5VpQWPJvUb8DbZxUq%2BfDBOhFHiNTR0JoHSeHoTIBswpcEHQ21qb2yHwm%2F%2BhHGX9DWHqB5twNR3IaBYmTwHQJJo7X9r58jQpqAdIVvOTLjPVwLC5zkFuAE%2BiAfPgWlz9mS6pEZiI6mvlOuox6WNRN557gCh6HW2Pien%2BgIKDgtkUJjFbQhX0GTM29WKyLlFO%2BRgqbZaDF5ughBVPh3I8JVsvws%2F8rjIKZZn6YbbEp0Nqg8eev9s0lyktGx%2FoeCAZlZA3Bxk5%2BZjgrQIIeEei4m%2Fe1ztmpvIuv2vZ2Y10CL4xl4L%2FpNndwqAzG2oBWLvj0%2FiRfl9PqspAa3K3cJBTr09wxLBjh0pNeVhc9MPQyTNeJ55bXHSZvopFH5EnRI8yqH9ZbMonTdnRZSRAA%2BmVL3E1F4MlI7m3AWBsn2irzaJzy7RVgfZtqLP89YwJQdTF9FVyBL%2FEzYCa3LhW5aiqJSaeyvhFVkks6%2FsNddanTwiiWjlMJymwsQGOqUBUUxlTH55LMIcn%2BzLdTklz4mOA5b5DTIuavQglOjDA5nkg4PAhSFcAwBIL4YX%2F3APFnLz0ci%2BW2ox8%2FZu99QrbCkroJUQ7I168W2g8swKvC0e%2Fwxh71ibh%2BKu1ZkSkqy4vEYJqprY0DRRvDUPlmdYWnFJ0vMdj9xLhKQJ4qRL%2FEzgQPooo9D8AEQGQnTeH53snbRNM1os57IrC3VlUaRVI%2B42jn58&X-Amz-Signature=b968515e1a6fbd5190ad6d44aca74ad438d8a787792ef724763c9469b31f24dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFHCMFCX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBvV29Xns4YuvPe3a56%2F62UA38OusRftP6eqKt19NRJ0AiEAijFb2Ii%2F6iCQXVadzZ3DfUk3ic2ucslv6XvCxFHnW68q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDH%2FksGmiD16RHOdemyrcA9fFZjbrgVk5axEGTZbz3PCZpDNt7MMH5IRmVk86BLv3dF7JBWcFmincQNhajqotXD8TuSH0pHvDGxa51S9sWVZuP2MS4eF6e9%2FgeFS1ewMFBIfrKhy53X6HwRSljAopXiiX7xAsYgJVeS5VpQWPJvUb8DbZxUq%2BfDBOhFHiNTR0JoHSeHoTIBswpcEHQ21qb2yHwm%2F%2BhHGX9DWHqB5twNR3IaBYmTwHQJJo7X9r58jQpqAdIVvOTLjPVwLC5zkFuAE%2BiAfPgWlz9mS6pEZiI6mvlOuox6WNRN557gCh6HW2Pien%2BgIKDgtkUJjFbQhX0GTM29WKyLlFO%2BRgqbZaDF5ughBVPh3I8JVsvws%2F8rjIKZZn6YbbEp0Nqg8eev9s0lyktGx%2FoeCAZlZA3Bxk5%2BZjgrQIIeEei4m%2Fe1ztmpvIuv2vZ2Y10CL4xl4L%2FpNndwqAzG2oBWLvj0%2FiRfl9PqspAa3K3cJBTr09wxLBjh0pNeVhc9MPQyTNeJ55bXHSZvopFH5EnRI8yqH9ZbMonTdnRZSRAA%2BmVL3E1F4MlI7m3AWBsn2irzaJzy7RVgfZtqLP89YwJQdTF9FVyBL%2FEzYCa3LhW5aiqJSaeyvhFVkks6%2FsNddanTwiiWjlMJymwsQGOqUBUUxlTH55LMIcn%2BzLdTklz4mOA5b5DTIuavQglOjDA5nkg4PAhSFcAwBIL4YX%2F3APFnLz0ci%2BW2ox8%2FZu99QrbCkroJUQ7I168W2g8swKvC0e%2Fwxh71ibh%2BKu1ZkSkqy4vEYJqprY0DRRvDUPlmdYWnFJ0vMdj9xLhKQJ4qRL%2FEzgQPooo9D8AEQGQnTeH53snbRNM1os57IrC3VlUaRVI%2B42jn58&X-Amz-Signature=4b5b7d2c3846f780d83adc17571544dd4528a08a2e7a1a992801d8ae9a67d05a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664Y5DDKQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIE6ATYQrM%2BprVK9md9A%2FVScGb6JuhtzEqAulCduQNhG4AiAMpTdbkDZ1UpKZE1zscHZyYgDu7tGMR8cxZiaaEFC%2Fuyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMTHGIzbDAZTgE2UucKtwDUSrFUOHRefIfR4dPA7qUTNNrfKyo7ipYs%2BE0rTGzXzyzJ1AXKpTN1czHmPa98ko50WM5XfJXwCpyku7r5nodO02KNi6go1CQUOqJ7gOaE%2B0Hk%2FDT%2FeShJxbpZUAPuXF8zhBbF2AfXEcX14ruvtPYasTYnyb6X6I5viSSbfSMTBKEptCHR9Ihqeq7t7ashYZXfbk9w1%2FE0cSRWjqQk1m0sRJlwIo%2Ff9WQ9T2DCiNyoFbkkWzy3d00XOtml95%2BG7VbEjV2L1%2B9GA3BZCLO%2F%2BE6ZV%2Fh2UALhBdAlKMaANUcdvfLNcLRrlQ4iQsGxKvXI9qtch8oLD51MK4ww5QjNNIeNVgUEtdGHWhfxm3ngdazyc5luUy7z2Yebd3rvoR3ydMBfoEkVMZnIOBfsnrb5skl2C949GWkMtVfVxD8qHQEza%2Bcz%2F%2BKO4GFxY8HeyjZWMHgGF8nwTcNhVpHa0blXrbqgUj%2BCkWswsjiJHiPqclRedu3OLUlH0vPL7PJEw509mZhjlSWVZvdG1OSwl3p12%2F6J6%2Ftplqz%2BWfW1%2FoD9YAqCdYLh1IxHzGR7ZtaC0HcIUJOV%2FZ0WYw61L90dCtU2SbqZIP4lIlfNNNNMgQOM7fOp5QewqU4Kp82s5lFg84wpKbCxAY6pgEpVvEFfPBtfBly5zffT4XRvl1V1ktKUtAzTyDtBjYaRx%2BMDWNr4iYARAtwS4bGjvEwAZKHr41DJlQi%2B8gjOmg22ynImxiww4zcAT1uH8rbyP4ryTwCJBajYfwkiQ6V4VeW6XbmWVvxhuO6engF0%2F2GXIrocFVq0hhZjWCSjFjwRIrjRHE4x9Otabf3zkyiaEd8GBDXXYsjZFqkZHo0NBr8DZaHqpFT&X-Amz-Signature=c5976444427845db03f1f8ba93724e6bcc5922c800101159d6ca4a97fb19d124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWATI6P3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCmuAT6krrTodA0bN%2BfqiVCj6quFjDg2RJqunxutqESxgIhAINsCXgZNfqNitrjXjFsimswq5gEze%2BLcfWcVs8vLdWIKv8DCEQQABoMNjM3NDIzMTgzODA1Igz7Ao7%2FuzXzBwMnX8Uq3API94XwUJuTNoZaVN%2B4NEfm%2FVEw%2FK8a8L%2BzPOqTmW3AC5pu0uXRDQMuheK64MFiZ%2Bhj3ipMDrUK%2FQhdMZiAgnj7yOFe6y6BkkmGREmWc1I78uqxQD43MtIKR1GrFl8qeL%2FcvLp%2FEQR8aR3F4Bpr3bb3vke%2BX9wjsQ3LpECWsCDEjsDh7F2P6qOZ4PPLny%2BbaGHFZGYNQqKGmGZUsNNqtp%2BUKoG%2BJ82DltalgGzZlT06BqfkqpFHnHx9%2BwWdIETxBZBwoL4MLMmh9riY%2Fcgfzc7WCruhCjyZuSbz78wrgvgzA4Ku1eXBX09Bk3FUWGnfSLg9olsLovJvLTRVTtqJ4GkXnBxOdYvm%2BBPux5HlbFnRhuq461O5AMS1VG%2FwXfI6Zy0B6Hmf89NAPk3RjnUJNVAFN4RIyIwCIjxjYq678DtkeIHDfl9FAaGQ4o6hN%2BmGZ%2BKfmvR%2FjaPO4UCSR4y88hYdLRt73PFxn6zpCwoU23Dj0lSVQP7uaENmZjygkMmfWncCTU87Qf5jGOvramdXl6B%2FGaBotTrr3I03J0fM0LgG3Bh4eq2yrOVw17tLT6Jt3UBffYHPPf4InJIR5qn%2FomS6jJJ0RKt0IktI0uPB4mI2TtwbWOu9ztmbZ%2BsinDDFpsLEBjqkARl88jgO4JE%2Fq5CBuNg779KQjmGQbkg7AzRtsANu%2FVsWA4LPx0LqytYr%2BU2UyoUsqtJIjpfXULVz%2BP7wq%2FJX8P9%2BzBjm8m4brajZcsO8K1EnR0%2FGAzBp7vpHVHXVCrZO7a9UxSHW%2B0XkvrIIJBdBqFL6Q6Mp4sCwdW4xsrjUKJoGSs6glLFsgojuf84yP0dMYg5P1qSxu6d%2Fe6wF9luYKsZi9CCk&X-Amz-Signature=13b524f4714c77890b8540ea3aa3262f59a9ff3dc83e823a84399307163b5fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LW3KFVI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIGhw41Xdk1%2F6qaRJ67VULhndZMIDve77fXkXb35ofoZDAiAYCJONVxGaQBz7rlgmQWb1wQ26AfGlGLvEfji1bIhU9Cr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMBpWEhik6o7mv5QYyKtwDJfNyBBo80yujG43XaXdcmeFINivqVYuUChGHffuH7SgR8pRFeK80UMOdy%2BwQE6jkyQFc2txuMVUFHfUqhPLpsl3gEKNr5kf4C2lK%2BRk0bQp3Rq8C4abe2BOTZFAbRTvCbu4zjnEnNJo5zYK2e2f6EmyPkvY3cgVArFtPSef7ld4VN6FZsqYGrji4D3LEZP5KJrAQoFwdjanBMvFOH03tVsOH5BUu2G0Pm6zekEG0QTopoqojF3nIGcxfd%2Bq14jk4cnYnUCH%2FgSL8FykqCZ3jgV6q6i2mp3NDDo7ODrvxH5A7ZYPxGF3a4wqLExbi1C%2FWyuaQjH81itist5KtySkSYhgQLH18p2cne%2BFNVAQJG9r4MPxbeTKF2f5%2Fd1y2TtNEzUQJ4ijx7WbdzcO%2BU1ynbrPzXFBZr6y6%2FPCWXCTPlbmPRqkmgoCp8nQlfLlpkH2r%2B07dCdIYLO%2FSKOO1x7VSzGKVRyxVVx7F%2F%2Fa03Y8QEjw5q8keZYobnmm9WRjBFl7slkRui2UE6k2Yp7545JUnaECfFdfNbsbM8%2BLSMSjgnCl32d4O3xn4hDrpFT1NZX9nzabEHjBIyv911ELM2GPUHKiOP9yFSkHwytfkjIYlgYMWKyWGTD6nwlLbdFwwnqfCxAY6pgFSUwBFNcPTDF5oo4G6G5cQKx5ktxd9ROxnnPKXyozWvr1dWnwJybzm0bHzZm2c79xxnUlBJo%2BUVQnVpqXof0h4FmBb7C6neDiq%2Bdqx%2BILZrygoI%2Bj7AHNP1fhngH86o%2BY2t%2BryI0nFCx2Imv1D8L8WUlouKrMxQw%2BUK%2FWPOJDwY1s2eEbszk6yLVuwclpdXPqQTq0S%2BCGq%2F0tw%2FYswj%2BPWd3u%2B%2FhJF&X-Amz-Signature=3f25e2c6f0319d3d97f59be2a1ab8888897769030fea49bc9394368aeaaa2b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFHCMFCX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBvV29Xns4YuvPe3a56%2F62UA38OusRftP6eqKt19NRJ0AiEAijFb2Ii%2F6iCQXVadzZ3DfUk3ic2ucslv6XvCxFHnW68q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDH%2FksGmiD16RHOdemyrcA9fFZjbrgVk5axEGTZbz3PCZpDNt7MMH5IRmVk86BLv3dF7JBWcFmincQNhajqotXD8TuSH0pHvDGxa51S9sWVZuP2MS4eF6e9%2FgeFS1ewMFBIfrKhy53X6HwRSljAopXiiX7xAsYgJVeS5VpQWPJvUb8DbZxUq%2BfDBOhFHiNTR0JoHSeHoTIBswpcEHQ21qb2yHwm%2F%2BhHGX9DWHqB5twNR3IaBYmTwHQJJo7X9r58jQpqAdIVvOTLjPVwLC5zkFuAE%2BiAfPgWlz9mS6pEZiI6mvlOuox6WNRN557gCh6HW2Pien%2BgIKDgtkUJjFbQhX0GTM29WKyLlFO%2BRgqbZaDF5ughBVPh3I8JVsvws%2F8rjIKZZn6YbbEp0Nqg8eev9s0lyktGx%2FoeCAZlZA3Bxk5%2BZjgrQIIeEei4m%2Fe1ztmpvIuv2vZ2Y10CL4xl4L%2FpNndwqAzG2oBWLvj0%2FiRfl9PqspAa3K3cJBTr09wxLBjh0pNeVhc9MPQyTNeJ55bXHSZvopFH5EnRI8yqH9ZbMonTdnRZSRAA%2BmVL3E1F4MlI7m3AWBsn2irzaJzy7RVgfZtqLP89YwJQdTF9FVyBL%2FEzYCa3LhW5aiqJSaeyvhFVkks6%2FsNddanTwiiWjlMJymwsQGOqUBUUxlTH55LMIcn%2BzLdTklz4mOA5b5DTIuavQglOjDA5nkg4PAhSFcAwBIL4YX%2F3APFnLz0ci%2BW2ox8%2FZu99QrbCkroJUQ7I168W2g8swKvC0e%2Fwxh71ibh%2BKu1ZkSkqy4vEYJqprY0DRRvDUPlmdYWnFJ0vMdj9xLhKQJ4qRL%2FEzgQPooo9D8AEQGQnTeH53snbRNM1os57IrC3VlUaRVI%2B42jn58&X-Amz-Signature=87dbaa331aaf7d3076a29655a10f19276494e775650d3cdfcfea0f54a01cfd6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QAQSAOE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDzRnsHzUnfm6Nnzy8Px%2FQIH8B25IBbaqvD8fDiorb88gIhANhHpiTNMcY0rlH8KCPQMEOWRA5kSOR6rEePTM0KBOBxKv8DCEQQABoMNjM3NDIzMTgzODA1Igx%2FOq%2BDf4t3xnkMhmQq3AMsbe056eYC7upLjSMteTGxxTNPnj8i%2BvSsIr1KmSbqGK9QWTNOOmDpszE0eT267rmF9QIUp5Fs9XPbBYIBIxtEzyBh71CIphQTe6hYFjy6jFN3j6O0I481%2FjCKueOGb9t3%2BkRNgyOCeyjJK9j11ymlz6Zj5uqzG96irbP9xkuuLcYPX5G846N0HTocLt66Lx%2BPNxNP4fqLsPIzdylU%2Fhp8KLDm6nlzfbVNaXhoB7tOUkiI%2FRsJejjxdWm0keoUwqkZrV2RZMDyvSDpKa4BpjKB8uAJdtylTroF%2FBNYy2y4zGRSLPXhRgOwiBoQHAWicB6gsaVbf3zhC2b4ltxLnP6waG7htEO%2BKYXHP66tlzU8GCwS0bmx6mME0kD1gvb4WA%2FU8UblvamDeaFPXdu3yYe67tEje90xLhrrsmw%2F%2BkfEvFR3h1aorj7CD%2BVBt2e5zwax5pZBLtbUDLu4PjDLYQFLA6vM2WHH0MSix0OYa6zAkSHw2f3MetRMjCDvj1tk4m%2FHkwGKCImcmq%2BK4jCdX0m6mBCvywys5IX%2FfFJFfjdZdmwpYNcdszoVh1rc6WquuV3uggs1fFBX%2FkqX03KNRVNVkeFWQZlaB9Lep4RE3Nuv6qaQYVBFtl4%2F6QsCpDCxp8LEBjqkAYuD9z5GmF8ephbTvAzDxkInV%2Bpd1uAq12QM9HDP0Cm%2Bm%2B7s1O1bYY9rMVQZQPCO6BXy9OXIIO2SbibjCC3KAepqZjrXYyBApGfSyst4IHFusmOZIe1CGtyqoG2jM4iOAN%2FQ4j%2BJj4xjsrtO8Yf6aCNy%2FYbNZ6TjxYbBtqe3dQAy99UVfC1FsCOniXaEhYjXOPYhr%2B1fXAKdBmtLCzn49n2qZXMJ&X-Amz-Signature=1b8398cc1cdf5341563ffae2afa6dcbb00a025f58d79a2621f94c4712b778df1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFHCMFCX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBvV29Xns4YuvPe3a56%2F62UA38OusRftP6eqKt19NRJ0AiEAijFb2Ii%2F6iCQXVadzZ3DfUk3ic2ucslv6XvCxFHnW68q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDH%2FksGmiD16RHOdemyrcA9fFZjbrgVk5axEGTZbz3PCZpDNt7MMH5IRmVk86BLv3dF7JBWcFmincQNhajqotXD8TuSH0pHvDGxa51S9sWVZuP2MS4eF6e9%2FgeFS1ewMFBIfrKhy53X6HwRSljAopXiiX7xAsYgJVeS5VpQWPJvUb8DbZxUq%2BfDBOhFHiNTR0JoHSeHoTIBswpcEHQ21qb2yHwm%2F%2BhHGX9DWHqB5twNR3IaBYmTwHQJJo7X9r58jQpqAdIVvOTLjPVwLC5zkFuAE%2BiAfPgWlz9mS6pEZiI6mvlOuox6WNRN557gCh6HW2Pien%2BgIKDgtkUJjFbQhX0GTM29WKyLlFO%2BRgqbZaDF5ughBVPh3I8JVsvws%2F8rjIKZZn6YbbEp0Nqg8eev9s0lyktGx%2FoeCAZlZA3Bxk5%2BZjgrQIIeEei4m%2Fe1ztmpvIuv2vZ2Y10CL4xl4L%2FpNndwqAzG2oBWLvj0%2FiRfl9PqspAa3K3cJBTr09wxLBjh0pNeVhc9MPQyTNeJ55bXHSZvopFH5EnRI8yqH9ZbMonTdnRZSRAA%2BmVL3E1F4MlI7m3AWBsn2irzaJzy7RVgfZtqLP89YwJQdTF9FVyBL%2FEzYCa3LhW5aiqJSaeyvhFVkks6%2FsNddanTwiiWjlMJymwsQGOqUBUUxlTH55LMIcn%2BzLdTklz4mOA5b5DTIuavQglOjDA5nkg4PAhSFcAwBIL4YX%2F3APFnLz0ci%2BW2ox8%2FZu99QrbCkroJUQ7I168W2g8swKvC0e%2Fwxh71ibh%2BKu1ZkSkqy4vEYJqprY0DRRvDUPlmdYWnFJ0vMdj9xLhKQJ4qRL%2FEzgQPooo9D8AEQGQnTeH53snbRNM1os57IrC3VlUaRVI%2B42jn58&X-Amz-Signature=55cfef3a604e48145b3d64c24fde58de2f5aaa7931dd1f44e74e110f7c160a7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ERAEW2K%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDGth8eevCWJU4s8YdT9Klr8pCytnlsRfvJVzXc4quRAgIgWEi%2BJwjx1QCPt1wAIfYrlzbqN1cEgDS8sek78MA8axkq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDIji%2F6AEZkCboiEyYyrcAx%2FfrMDMDeph%2FNh1lvZiQmNRKPMieKf6YTK7u7NPDO6Zd4V0JYpDWb4YOE3YA4oP3Q0vl2T1jzTzNT0%2B9GELkl1ZN67IQsSPLXQoyCqD9SWEyuTiuvTNFf%2FESwM0nK4awk2CfNfFY21Uq7XkztTxZXEppVfGvY2DbT28kT3uPLjPwTjoHr2%2F3E89txRuQ5KpJAti1CkaY6plnx3Rlhvy2f0Olre5E6xB%2FYjkXf7%2BgEdpRJ3YCVgOT%2BVraUDedSjq03atJgPAdqbBVkVakZT7ul7OPnizMut3zJr6aoQMpVXNh6m2Zsl4a4me7EIA3oOmWcg3%2FjtD5NgbBDikAQzoFGofK%2BUdprl2YXj2b3vuigaf1ajiwLkU4lT1hdTMYfEVfjbmVFl1sekdXEtC0LJMxYn5WdMFIgOMWr070Ve6eICtl0kaS6BT9X11s5B7jnJHTq7lvdozSSXXf48sNDHG%2F%2B2eCWDBwoR3hVPA5FCXQdRr5meqHVGa%2Fe7o9WHXUNNOMHUwKEPz1rn4Yzm0opiMdQGo7409xXphuL8e0mTQ7Nw6Xe%2BB8CO45ZSJzFc7%2B2m0GAJjiKvuLsdsBMcSJXPpnYMp3QJjzwl5vWExBRckso5cxA6QcABdMsQKTIPzMOemwsQGOqUBUkgU73xHpKDi5IE6UfH8SIkhvKaOqDM73QgwFWSryTTIRZ6IR%2BBzhFO66Lx7l1p6lTLe3zNjYY757sNnSqvpcugVI9HB%2FbOOEjDu8uQsNj0xUZo5Zf3e0uOpr%2FXjjHQ1KDQufe0Rv%2FbKp57keWBNOAOUwRc0Yif06eYm1TYAk7VHWQ%2FSoPzHFOeG9s6a6z1NdfTgXps7%2FRYpPrHV1bJLM0akH2xd&X-Amz-Signature=3fcb0310da66d02d2c5e2e2198e4b872b0e148b79bd0549ab527342383cc40c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFHCMFCX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBvV29Xns4YuvPe3a56%2F62UA38OusRftP6eqKt19NRJ0AiEAijFb2Ii%2F6iCQXVadzZ3DfUk3ic2ucslv6XvCxFHnW68q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDH%2FksGmiD16RHOdemyrcA9fFZjbrgVk5axEGTZbz3PCZpDNt7MMH5IRmVk86BLv3dF7JBWcFmincQNhajqotXD8TuSH0pHvDGxa51S9sWVZuP2MS4eF6e9%2FgeFS1ewMFBIfrKhy53X6HwRSljAopXiiX7xAsYgJVeS5VpQWPJvUb8DbZxUq%2BfDBOhFHiNTR0JoHSeHoTIBswpcEHQ21qb2yHwm%2F%2BhHGX9DWHqB5twNR3IaBYmTwHQJJo7X9r58jQpqAdIVvOTLjPVwLC5zkFuAE%2BiAfPgWlz9mS6pEZiI6mvlOuox6WNRN557gCh6HW2Pien%2BgIKDgtkUJjFbQhX0GTM29WKyLlFO%2BRgqbZaDF5ughBVPh3I8JVsvws%2F8rjIKZZn6YbbEp0Nqg8eev9s0lyktGx%2FoeCAZlZA3Bxk5%2BZjgrQIIeEei4m%2Fe1ztmpvIuv2vZ2Y10CL4xl4L%2FpNndwqAzG2oBWLvj0%2FiRfl9PqspAa3K3cJBTr09wxLBjh0pNeVhc9MPQyTNeJ55bXHSZvopFH5EnRI8yqH9ZbMonTdnRZSRAA%2BmVL3E1F4MlI7m3AWBsn2irzaJzy7RVgfZtqLP89YwJQdTF9FVyBL%2FEzYCa3LhW5aiqJSaeyvhFVkks6%2FsNddanTwiiWjlMJymwsQGOqUBUUxlTH55LMIcn%2BzLdTklz4mOA5b5DTIuavQglOjDA5nkg4PAhSFcAwBIL4YX%2F3APFnLz0ci%2BW2ox8%2FZu99QrbCkroJUQ7I168W2g8swKvC0e%2Fwxh71ibh%2BKu1ZkSkqy4vEYJqprY0DRRvDUPlmdYWnFJ0vMdj9xLhKQJ4qRL%2FEzgQPooo9D8AEQGQnTeH53snbRNM1os57IrC3VlUaRVI%2B42jn58&X-Amz-Signature=43d4727c3431471051b0c9d9a6f691c876e1995b062730f7ccbe53c042574212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6DFOBTY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIC2qUGxiR1gsxEbEa3WUJEWzxxrTSjWSRJfVAV2yQIW1AiBu9JHSUmYTx5U8K4T46YTydlh1nWBV9xAaBCHTA9YkUir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMoPyerhUuryi%2Fa8pkKtwDGx7kMfQxYjIWZvP0%2Bo3V925wJ1eL4LLYXG23gep%2F48nKi%2F7CyNdhNRD%2FNJNLi4JsaS7melrt8Pn249rYX0Y2bQIzW0EoPcRBTzluVGTBc62NOgKR0RD4KllajQOd3kR3iCR2XIumOM1AY1opgkmqIbGML9B2KNpcQZWrhVtpRP7%2FXFoIIZuyqdNBFK2jGMliAqqqsGGjW5XtzoZeJgLDp%2Frh0Sca7EK1FCHmo5Z2CgvV9FhSOFQE5l8zpB2ZAjjdf53Z4z2IaY6fZIJ1YEhsa3ryfaiB5Daw6JMnAuwxNN1RkHl9SzR%2BWfv2RrnbSJ5Qw5N3G%2B87UAwgw7V4Hdj80MHXgrNHvhFAxfwLX56RMn9G4PQpgH%2BT8mDy0R7x6v0KZ2ZM3GRl1xFE1u0Y0ke5tyIopQVCoJlmt8x6MfUlP82Zw3AqR4bepTmiIVExX12GtWcJrySjepPPx1vXlR6YRZUlD8O1%2B8h5c%2Fp%2FIBnidRTYq9WVKFafRSjNJwPUfByBIkdA9KRunI6UFsanxuJeZCR5zzuLEau%2FeMchyW%2F%2FJeOUdhgQBGTk1YlPcA%2FEKlI6rTImxfpHK1X8FxJSaIAYCadl5eVf8Zf8u5eoRQH9ir%2Bk8Tmy7PhGbHzv%2BiUwzqbCxAY6pgEPe3vG4k3PbFXPFz0nG%2B0MxevEL4b28qPDANi%2B1ZWAfZNNukMeoymz4jzX7nSG6MGukFB1d8yjcDOyES2PZA4qPQjlG%2Fgm9bS0kL3enFG2X%2FWYZkJXXfr4vRF%2BRebGfIq9%2FM4QFAKbBVFqmnoGVycghpf%2Bu6owjJfxBx3jj6Fv6iCI5Yecsa%2BkadlYvaFc%2BZpMSuaEUy5H9jTDrz8ubbg0rMB28qc%2F&X-Amz-Signature=ffce77a97b9ddcd166562b07fe8d68d8e371e9be1d2d3e6b2434865545588e69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFHCMFCX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBvV29Xns4YuvPe3a56%2F62UA38OusRftP6eqKt19NRJ0AiEAijFb2Ii%2F6iCQXVadzZ3DfUk3ic2ucslv6XvCxFHnW68q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDH%2FksGmiD16RHOdemyrcA9fFZjbrgVk5axEGTZbz3PCZpDNt7MMH5IRmVk86BLv3dF7JBWcFmincQNhajqotXD8TuSH0pHvDGxa51S9sWVZuP2MS4eF6e9%2FgeFS1ewMFBIfrKhy53X6HwRSljAopXiiX7xAsYgJVeS5VpQWPJvUb8DbZxUq%2BfDBOhFHiNTR0JoHSeHoTIBswpcEHQ21qb2yHwm%2F%2BhHGX9DWHqB5twNR3IaBYmTwHQJJo7X9r58jQpqAdIVvOTLjPVwLC5zkFuAE%2BiAfPgWlz9mS6pEZiI6mvlOuox6WNRN557gCh6HW2Pien%2BgIKDgtkUJjFbQhX0GTM29WKyLlFO%2BRgqbZaDF5ughBVPh3I8JVsvws%2F8rjIKZZn6YbbEp0Nqg8eev9s0lyktGx%2FoeCAZlZA3Bxk5%2BZjgrQIIeEei4m%2Fe1ztmpvIuv2vZ2Y10CL4xl4L%2FpNndwqAzG2oBWLvj0%2FiRfl9PqspAa3K3cJBTr09wxLBjh0pNeVhc9MPQyTNeJ55bXHSZvopFH5EnRI8yqH9ZbMonTdnRZSRAA%2BmVL3E1F4MlI7m3AWBsn2irzaJzy7RVgfZtqLP89YwJQdTF9FVyBL%2FEzYCa3LhW5aiqJSaeyvhFVkks6%2FsNddanTwiiWjlMJymwsQGOqUBUUxlTH55LMIcn%2BzLdTklz4mOA5b5DTIuavQglOjDA5nkg4PAhSFcAwBIL4YX%2F3APFnLz0ci%2BW2ox8%2FZu99QrbCkroJUQ7I168W2g8swKvC0e%2Fwxh71ibh%2BKu1ZkSkqy4vEYJqprY0DRRvDUPlmdYWnFJ0vMdj9xLhKQJ4qRL%2FEzgQPooo9D8AEQGQnTeH53snbRNM1os57IrC3VlUaRVI%2B42jn58&X-Amz-Signature=d39f5cc273d4fb51c718a4f0f1a56fe82caface66f20fee6b55a8c6b734b56e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVAJXE45%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIEioniXuhc9YHXs9fKn4RYxB0ps%2FHIGfQCgcSkdhUR6qAiBscr83DD0KnaIvtI7szhrafMBc4HUwo5Gvm%2FROEydXvyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMfsvJ7KXY8bmGfPDBKtwD3i%2FAhD%2BYw%2BTrY5wmw5dJLJW2D54MfU7DHH71rlqu9nBSMRyrr%2FTp4kY1NnUhCaP7FmrBmG1Usqfw02VfyCZl0JyCtZlB0zlX1m9GpDi368%2BNojI7fqBWs5knmgPKv9BNg37Dk%2BI%2BhOiPRCZ8ZVP9lo%2BNCZajxKW5ChZU0TzdlUYItj2NfyiclYCsuguw5MoK9HI8ANQiT1185vFp2NgZdgDVG%2Bg911JxvNyzqOHt8cLCKOJSmC1I%2FTSd5mmaDYcCajBUeZgJUABtWY%2BEefaoqBKliWAL1Z5b7vB1C%2BxwgLPLZuY8ByexvA%2B8QBV2HDUfnJUlOJcCOs%2Bkc%2BW%2Ffe%2F2dJpdt6rrynO6BquNlevg%2FwSlfgvDSvdvAjb82lYXAWgc5pXhgAM0s5PvrrX46q2QQvq6RKkE%2FDmZjx5FJM1KEt3u%2Fj29Xx%2BnxATSNRx5JoJMs%2Fh1YqHBfX%2FO7j3LsRBxuECdp8FbHNDjz2gif9dk0LJoJMwZ1OvoVUtRGvz7obL0JVDeNMk6gn2b3CLPiKa5FgP9%2BZTR9shsz7LxIHEs5ULFuMdymFEy0N8hfsDb1IfgBVFReduTX62vqTXZRMZJ%2Fc0tCFHok9n3cDLpBP49LH9XIfSRsmclsgCC4Cow7qbCxAY6pgEuuXajrRHF9Z1%2Bx3SWzmdqdmzym142EqfhG0VjELoVo5XbLZ1sbw4L2M5%2FArFgxIMqFVC%2BSdFt1mIROG84PXm44I001cAqV%2ByLilbQ7noL%2FV9qWZu41FFzmojkEZMKFdYE3iZNpCFUQ6LnC7XzdFv2kRtAz%2FrOLy1hNBKXV8LUfnqQAIdYaRXNZiOLvYDcAfLhSY9QXQ92PLnyRoEtvh0nfOByVifx&X-Amz-Signature=00a4bd9fefebf793f76e4b30a299dad1f0174793c00ba75a442425655cd6bf6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQSOR35S%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIHChnEQa%2BH9DT3wfeYZuW8sAL0aTQpzKyJs0hHxStk0BAiEA3wbtWo%2BqNdAotB2HZmBoU99t3Fz%2FmuDrHNLWstdzuoUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDEfaZ6Z6hnMmlr4GbSrcA%2Ft7mE4AwwCIF%2B8y86XQLWSPnqpYrPkvMQox3iz3jr2SWHfkS6f9TLI2KJ4mCzmQhpX%2BCb9YApK%2B4bBG3eVFNyLTXBIIgnnEZ%2Be3cSO5dJseZa0Q1QaBLmc6R6MVSXQ%2BW%2FBud646ET3Z%2BF7OJeLQPGG9ZnnBhdyTk8J3f7jrSRpmOMr0ODIz9zgELBAkj3ejVSW3Z4jvIlF15O1WmuxZJVCAD%2BQc71PbgRoDIleTc00ASMkWmzN%2BjNN1tGc7BZ4f0Ho%2FOQIFeA1QIfk%2FVaSu7kiO257y1IJjAX%2Fd2i%2FD5Z509dof%2Fu7ro6SZySJoFfYJAhoNMmrAOgehZN9ir26bPbBF5%2FmRpyD2c690sL9PMofqBOtjBrRJaKjBaxR5GwkSJta%2Bn2EWX9AaAcEP42j32zJA4ErrKUanCzWgpj9OFnL5u%2FUy%2BsS0bqGtvbAUkqe0QGAUvBaZoHvxkoBrUoMGpj3F30B7cBmdFB3rbdECxsc%2F2FUzCyn6zZst2UtYhIwqyXlJ27IdvBKAtMlGWFzTbtJb0GaHWGgPr7bBmxawtT3yfGLy1%2BOxteP9kd61lNjrLdrrESpjw1koo2pyoTvfdMvN4ihJluKyWN%2B1K5lcZDJu59WMuy5G62X3xSgoMJymwsQGOqUBb9bIOC49LHKj0rLgeGZXlvRGlS1hQNxJRefXo8GyWRxM8wHA35%2Bs8itdeXLfxYcZFbvm7XRVKHu%2F6OtLPnlEK%2B%2F2TTYQZv0py0Ibr1qiBL8BpgvrrjJh%2BtyCetZZeF6sG3HjLWSPh8wYpZU7X6rUdwzl8Rlfnzv9uReDb%2B%2Bm9XdkJZKORy7w148uXk7zWcI4kfzSU1mNFEmBY4tiQfSHQQPpNuyJ&X-Amz-Signature=b5a42f598346f4f016f086851e70117a6370b892d514bd8b276c4bba83935ea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3WOBADX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDLXkzb2oqVX%2FH3t6SoWv3vkIp04b7fy9DKj4N0eMtkuAIhANRFDS0HhV8hm7Ke3yG%2FDKz3roVqVzzH56x43XXxU57vKv8DCEQQABoMNjM3NDIzMTgzODA1IgwJdVLREIO58G5Htzgq3AMFCCOVfgjAhaIFn1ET4U%2B7p7%2FsBM413o0nNoNVCgQlP8v%2BbBPQfTe3%2BUJ0HwAk2An4rhOIFMn%2BVUwbNazEqqjtmgTIPKONTiCu4BaUFVcXf132itwX6jZasg4%2BWlHoASSI6GNoZUzPrBy%2BPQ16hGT9VuH9xtG4wed0WuoBmJsPVMwgEsRLiSJ%2FhLy0nqEq6ZI4YtswcJkfXPxMu%2FzlRJtblPRauNxFaHfH2qb7bOc4OcwBMFlXZZXnDtUYQt2gMFnU26tA9f6048LDLYiNX7ut52RmtK0Nu9bRdcBEBH6CPudxJwbdN%2BOy%2BqH1QnPegQ1l9UOkwGczIy6wRMerfndVNs10Uu05eujhzObmzBDjm202nzfg3nVEzElUMyvJ8J66mceXDuZAScsmq5BFgGLLtnJ3NFbC514TNuRTPQDKwVgS50TfQM0Y0tPvej%2BHCk00OUhqP2%2BXh4qGtAV%2Fhtc5EhyFzk%2FBdSK%2Btq%2FY3SLp8j7Eu64G63VYN0NGPCfJmJ%2B56YFHekvE2a6mgh68Ps2%2FkwFz4T7jsWlg5nANpRavprv7K2uuyXE2ZYgcRXmN%2B%2Fj0lXmBCZ5sZNJxLEbCQwhx8yGzdQDb3KkCeA3%2Bt0z8zLFXBbl1KBnYZSE91DCzp8LEBjqkAQANsB819zRq62CWN%2F6fvNOIp4NPGE6UmTHcNRe8MoyGCJm3Eyw4WqFLgmFthwea5gCqe7NtEDFeFb3nnh9Makssz20x2aNFQTH1y%2BgWROAOeb5bVK80k%2Fe4VaoZ%2Fh8xUXC09tLN5I3IddKFvT1avOcBAD1ekM60qIEaTyExVEhLUw8%2BxLbhd%2BixTqKfoiTOiUFGKK6uqmoAPCeKe%2BYDpauHa9vy&X-Amz-Signature=3686cd2534472a59cf375858d16549b7d19a9c092e253bb9e71567134c23caef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677ESFW2E%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIB4jtqu%2FSggHsXLNF7E2kQNWYH9oeJENOKiihnhBFnY6AiAdzZZZnYh5krIEu7lj86tp6qIYW697KqLT2QgJSUbBHSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMLpX6yS7K5N2QpfsfKtwDecG4OQStwuxtD4aCGS98VDtLF4mnZGh9PDcJ9D0PmXrNTSYg%2FfZ4LIg%2F15eWBvpUz4C5q1IRTGx64als5I01gpI5UTGlKPC5PSfJaWDOK4A11rpt62oOvpKHHf5rMvaSrPxRVypbl%2Bq%2FwKmVHxQmfVx9EYu2Sap%2Fd0%2FKLVz%2FV2VYycA92NmO1atFsMnlmCmZg1VvAC9BPPvVDppNY0jJro8PAarZZbC5T4zIotG%2BOraJfGOaFbGK2PCqvaQwPGr74FvyVtjL7xng8uvDlXcXz%2BUkrUp4bfvZXsxcauF0gU%2FvrQMbeJzaPtVwGSN%2BhxcpV1YAZfKZL1KClfs02gSCWvZ7gjXGvs8BP1fVV9zk4FG5JW2FVdX%2FOoKyYfCV1zmqAGbQgcgSFUv5eVUc%2ByDWTMi87lC%2FPcwJzzYObY6lFaXMCEsSIvU3P2bKUL7rB0mAKJetlsVcrt%2BSxnVO1Fjo63vUt4CIVijb3PHw8wS092hZQAQBBQ25pgVkzUQ2cN6AYYQGXwmt1m3PUxkh75DyYh8iZqYxFseZmu9TrKAAEcs%2F2fbSiW%2BF2pYLEltTL7gKh%2FgTpEsvyHXMg8ZUpgqK8K8UBWFMhmfIg8zdJbP8rK1EqZI4uyCBbwvyZAEwpqfCxAY6pgGNzb%2F10nLdWLXshLGb2u7sfNHDlQwJk9WwDnZdqkcpCrEpqodVlGSmIczq8Z5liDi8iQW0Wa3S9Jesrkc7ajJJ%2B06Em0%2FNyaZ%2FH29QlUt8ZNgXbUWeL2XY%2FFCx07CecK3pEdnRGs1l7vjW2CMu%2FHs7maVE9gZg9HWbb5wGx0Di13VOV8ApaFe7bkDHoDdmzarTTeLn%2FDIkavxqWua1gCRtSsF3QmY8&X-Amz-Signature=6925e31dd662bfc02844fdf554a58de5c821512bc1de5e0a5da60f8042a29992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625F4BZMK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCSgBkQRn6qa8bWMpnnPKuBIMeVgSb2zooKqQbMnBCuYQIgIeTSkU4WRhIA1QM%2BMOlHwKwCXPHl0uMdIuIsvTTaEwYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBvp9ACuv5NwNv195ircA8W8n7e47g8uHtdVqrHQKY0EjIX2KwEgR5kAcDmtaR0hOrvTLknLlWXyQeCrkiuAvMKoOD%2Bo8sm8Per1AhaUuBPioe9%2Bfovlg97vJlt6adZo3xdJrl9gJIK28cWhOkDPtyr9W6lTbgbwgzakygEywB2ijtqQuGy%2FQjDqeYErgHcEDMpTaJfyqXrReZ2b%2B5XHt%2BIE%2FRWOCRRnVslQXFS%2FvT%2Bbrl0PCd6tMkWKR2tHH6qCOqeAG%2F0678BgXpw3UMGLCV3VDQVFSrxoEiRHKf%2FhwH6kzLI%2FK2tjfDWi6cUfxJw69kGSovzH8qsiBDKo7U4XGDrBIjtDWvrzGg5y4DnISz%2FHRzXX5X%2BzNIKADXy%2FEv7E9YzXsyxRQc4GTfSIOczURzPsWwks5fPEz3%2BmBHltm0gcK4DQIRHFwPhUbnsmm0eebCFiey2YFC8eAgq82g0yyUFbJoHVyQ2CdIc7m2uVVVmn3tjLAVUCP459tFRNbj3zqsP2NKVIDqFA2ACF5hxFudF6rmWGUGahvasJceIuw7EDc7dtD%2FunHhr6l8m5GajEKgiIAOcFilxCO2sSzJUhcQfH2tXdMwmYLfx%2FghPEG%2BzbABD%2F8B9jsHs%2F2szagFnvLZs4Ejw7b5Qe96gwMOumwsQGOqUBhsuleNsgkbxD%2BdZsPrmCve04dV6vP7mlH3CKwb84wGVRjFxTXRoz%2FF3auboA1hcnJWGdt98VTWL2gOtiumgn5mYNUEIPHI%2FDK2P51iigH4uqLHSxNNQgkjVi7oJ2v6Gz%2BQhtEToMfXnfcVMU5CEOvEJBCknlHS7vbUp5%2Fzt5UYskrqRWu7etXNWPINEzaNwbQHZpbb8iB9ponw8MJxT0oDRnihrN&X-Amz-Signature=410afd97644158b910840b87dc9f9a7850c593dbc9069e522fd6554685cde1c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFHCMFCX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBvV29Xns4YuvPe3a56%2F62UA38OusRftP6eqKt19NRJ0AiEAijFb2Ii%2F6iCQXVadzZ3DfUk3ic2ucslv6XvCxFHnW68q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDH%2FksGmiD16RHOdemyrcA9fFZjbrgVk5axEGTZbz3PCZpDNt7MMH5IRmVk86BLv3dF7JBWcFmincQNhajqotXD8TuSH0pHvDGxa51S9sWVZuP2MS4eF6e9%2FgeFS1ewMFBIfrKhy53X6HwRSljAopXiiX7xAsYgJVeS5VpQWPJvUb8DbZxUq%2BfDBOhFHiNTR0JoHSeHoTIBswpcEHQ21qb2yHwm%2F%2BhHGX9DWHqB5twNR3IaBYmTwHQJJo7X9r58jQpqAdIVvOTLjPVwLC5zkFuAE%2BiAfPgWlz9mS6pEZiI6mvlOuox6WNRN557gCh6HW2Pien%2BgIKDgtkUJjFbQhX0GTM29WKyLlFO%2BRgqbZaDF5ughBVPh3I8JVsvws%2F8rjIKZZn6YbbEp0Nqg8eev9s0lyktGx%2FoeCAZlZA3Bxk5%2BZjgrQIIeEei4m%2Fe1ztmpvIuv2vZ2Y10CL4xl4L%2FpNndwqAzG2oBWLvj0%2FiRfl9PqspAa3K3cJBTr09wxLBjh0pNeVhc9MPQyTNeJ55bXHSZvopFH5EnRI8yqH9ZbMonTdnRZSRAA%2BmVL3E1F4MlI7m3AWBsn2irzaJzy7RVgfZtqLP89YwJQdTF9FVyBL%2FEzYCa3LhW5aiqJSaeyvhFVkks6%2FsNddanTwiiWjlMJymwsQGOqUBUUxlTH55LMIcn%2BzLdTklz4mOA5b5DTIuavQglOjDA5nkg4PAhSFcAwBIL4YX%2F3APFnLz0ci%2BW2ox8%2FZu99QrbCkroJUQ7I168W2g8swKvC0e%2Fwxh71ibh%2BKu1ZkSkqy4vEYJqprY0DRRvDUPlmdYWnFJ0vMdj9xLhKQJ4qRL%2FEzgQPooo9D8AEQGQnTeH53snbRNM1os57IrC3VlUaRVI%2B42jn58&X-Amz-Signature=09200856ab05d7c7457e41aea8eeb50b48a1c3c68b10e350f791897b4153f386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFHCMFCX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBvV29Xns4YuvPe3a56%2F62UA38OusRftP6eqKt19NRJ0AiEAijFb2Ii%2F6iCQXVadzZ3DfUk3ic2ucslv6XvCxFHnW68q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDH%2FksGmiD16RHOdemyrcA9fFZjbrgVk5axEGTZbz3PCZpDNt7MMH5IRmVk86BLv3dF7JBWcFmincQNhajqotXD8TuSH0pHvDGxa51S9sWVZuP2MS4eF6e9%2FgeFS1ewMFBIfrKhy53X6HwRSljAopXiiX7xAsYgJVeS5VpQWPJvUb8DbZxUq%2BfDBOhFHiNTR0JoHSeHoTIBswpcEHQ21qb2yHwm%2F%2BhHGX9DWHqB5twNR3IaBYmTwHQJJo7X9r58jQpqAdIVvOTLjPVwLC5zkFuAE%2BiAfPgWlz9mS6pEZiI6mvlOuox6WNRN557gCh6HW2Pien%2BgIKDgtkUJjFbQhX0GTM29WKyLlFO%2BRgqbZaDF5ughBVPh3I8JVsvws%2F8rjIKZZn6YbbEp0Nqg8eev9s0lyktGx%2FoeCAZlZA3Bxk5%2BZjgrQIIeEei4m%2Fe1ztmpvIuv2vZ2Y10CL4xl4L%2FpNndwqAzG2oBWLvj0%2FiRfl9PqspAa3K3cJBTr09wxLBjh0pNeVhc9MPQyTNeJ55bXHSZvopFH5EnRI8yqH9ZbMonTdnRZSRAA%2BmVL3E1F4MlI7m3AWBsn2irzaJzy7RVgfZtqLP89YwJQdTF9FVyBL%2FEzYCa3LhW5aiqJSaeyvhFVkks6%2FsNddanTwiiWjlMJymwsQGOqUBUUxlTH55LMIcn%2BzLdTklz4mOA5b5DTIuavQglOjDA5nkg4PAhSFcAwBIL4YX%2F3APFnLz0ci%2BW2ox8%2FZu99QrbCkroJUQ7I168W2g8swKvC0e%2Fwxh71ibh%2BKu1ZkSkqy4vEYJqprY0DRRvDUPlmdYWnFJ0vMdj9xLhKQJ4qRL%2FEzgQPooo9D8AEQGQnTeH53snbRNM1os57IrC3VlUaRVI%2B42jn58&X-Amz-Signature=37ec6d1a4a63e6a89931bd955ca2c011ef6f62a76a738355eca769cee270a087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4WE7W5D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIACTBY8mKIfyat2eNw1efWaFnldYI%2BNmR5EvQ1Kje7EyAiEAyf4V%2BzrA5VW90V2jUFAkutNttr8TtQniKdJJIhxy8gYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAMZI9%2B6ox%2FQEOa3eSrcAyfHkA8Eo4IQ6r%2B%2FdX30GE5904P5cGNMZLh9uNLF%2BIXii3vtaL26pqrxyZFHIA4k1TNJqNezXmncwOmtLPM1NfLFB3EQJHiyhXcICZLQTNJCWEoBbOjSqbZZNLXZ8TIos%2F%2BHO4QhY7sBfNFpV%2Fulw9ctw6WehH6OEPRDpldrQK%2B7zfwa6y8rx3jX5BiskkumIvPA5d6U93wQOl8wsTelDdJ7AZ3AROWNA3mD%2B715rQwZhWR3qnPc8s%2Bke6pj%2BgrssSxC3zafFlXXG5QMz25NTxsY7lHsCJmaqQR%2BRZ13ir28V16a%2FxnMKL3wEY0rBDrOjL6aCmZgnQFvvwxAWyxGOTJf7JPDXL%2BOTPhA%2BoJ1bMNt1gO1%2BZ5O4LsOwwFSgG9KFOwzeWFpjjeoRsA0Z9vVRML88nAWE2j0UOKpBuNF%2BC%2FEXKfMt808a0ub1AfBtVh54tTX%2FlW%2FAeRcNfjzpoYw%2BJJYrYJ8oEdi7YnY3Ww7%2FNrK7LCenSKmu%2F%2FoPtzC%2BWH%2BwqdBevzF9trdIHQNjGzx6gbjbE15u0%2FZLPG9ghRlUCLdArKZ5rT4oKDI5iTo5j54JDwoWxWkNrYPNGEqUlFmaKekbHKh6h9HcGPYvyzQ7aXDpSTT1eV6DhnwRP8tMKenwsQGOqUB%2BDoVCKxhvlwvXUHoduGaSpjbOXnJbro6nP4WDQFveagbhR4chXYMMzfm7mDrd1v%2BBLSlgfYT6oAcZ5aqUkSYkQ6xSFti%2FnsNwMD8ESkkBkNr8IjsoJQq1EBSrsEWNvpuMsMbGliyOjA7llfthcbDKVRlwQiNtY8Xoy5PMCvJMjQNhB4lfPjqae4hgLnOUKm%2Fhc9b9Q7ZEYAZDjOnEZd4P%2B1PKqle&X-Amz-Signature=9037fc213e1797e78161cfccaea74f577853c5f8bcf711a18b5c63bba028cfcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4WE7W5D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIACTBY8mKIfyat2eNw1efWaFnldYI%2BNmR5EvQ1Kje7EyAiEAyf4V%2BzrA5VW90V2jUFAkutNttr8TtQniKdJJIhxy8gYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAMZI9%2B6ox%2FQEOa3eSrcAyfHkA8Eo4IQ6r%2B%2FdX30GE5904P5cGNMZLh9uNLF%2BIXii3vtaL26pqrxyZFHIA4k1TNJqNezXmncwOmtLPM1NfLFB3EQJHiyhXcICZLQTNJCWEoBbOjSqbZZNLXZ8TIos%2F%2BHO4QhY7sBfNFpV%2Fulw9ctw6WehH6OEPRDpldrQK%2B7zfwa6y8rx3jX5BiskkumIvPA5d6U93wQOl8wsTelDdJ7AZ3AROWNA3mD%2B715rQwZhWR3qnPc8s%2Bke6pj%2BgrssSxC3zafFlXXG5QMz25NTxsY7lHsCJmaqQR%2BRZ13ir28V16a%2FxnMKL3wEY0rBDrOjL6aCmZgnQFvvwxAWyxGOTJf7JPDXL%2BOTPhA%2BoJ1bMNt1gO1%2BZ5O4LsOwwFSgG9KFOwzeWFpjjeoRsA0Z9vVRML88nAWE2j0UOKpBuNF%2BC%2FEXKfMt808a0ub1AfBtVh54tTX%2FlW%2FAeRcNfjzpoYw%2BJJYrYJ8oEdi7YnY3Ww7%2FNrK7LCenSKmu%2F%2FoPtzC%2BWH%2BwqdBevzF9trdIHQNjGzx6gbjbE15u0%2FZLPG9ghRlUCLdArKZ5rT4oKDI5iTo5j54JDwoWxWkNrYPNGEqUlFmaKekbHKh6h9HcGPYvyzQ7aXDpSTT1eV6DhnwRP8tMKenwsQGOqUB%2BDoVCKxhvlwvXUHoduGaSpjbOXnJbro6nP4WDQFveagbhR4chXYMMzfm7mDrd1v%2BBLSlgfYT6oAcZ5aqUkSYkQ6xSFti%2FnsNwMD8ESkkBkNr8IjsoJQq1EBSrsEWNvpuMsMbGliyOjA7llfthcbDKVRlwQiNtY8Xoy5PMCvJMjQNhB4lfPjqae4hgLnOUKm%2Fhc9b9Q7ZEYAZDjOnEZd4P%2B1PKqle&X-Amz-Signature=0caada3e523a791992a6da294606a9414668ce459dd372b5854deb53c21f4a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4WE7W5D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIACTBY8mKIfyat2eNw1efWaFnldYI%2BNmR5EvQ1Kje7EyAiEAyf4V%2BzrA5VW90V2jUFAkutNttr8TtQniKdJJIhxy8gYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAMZI9%2B6ox%2FQEOa3eSrcAyfHkA8Eo4IQ6r%2B%2FdX30GE5904P5cGNMZLh9uNLF%2BIXii3vtaL26pqrxyZFHIA4k1TNJqNezXmncwOmtLPM1NfLFB3EQJHiyhXcICZLQTNJCWEoBbOjSqbZZNLXZ8TIos%2F%2BHO4QhY7sBfNFpV%2Fulw9ctw6WehH6OEPRDpldrQK%2B7zfwa6y8rx3jX5BiskkumIvPA5d6U93wQOl8wsTelDdJ7AZ3AROWNA3mD%2B715rQwZhWR3qnPc8s%2Bke6pj%2BgrssSxC3zafFlXXG5QMz25NTxsY7lHsCJmaqQR%2BRZ13ir28V16a%2FxnMKL3wEY0rBDrOjL6aCmZgnQFvvwxAWyxGOTJf7JPDXL%2BOTPhA%2BoJ1bMNt1gO1%2BZ5O4LsOwwFSgG9KFOwzeWFpjjeoRsA0Z9vVRML88nAWE2j0UOKpBuNF%2BC%2FEXKfMt808a0ub1AfBtVh54tTX%2FlW%2FAeRcNfjzpoYw%2BJJYrYJ8oEdi7YnY3Ww7%2FNrK7LCenSKmu%2F%2FoPtzC%2BWH%2BwqdBevzF9trdIHQNjGzx6gbjbE15u0%2FZLPG9ghRlUCLdArKZ5rT4oKDI5iTo5j54JDwoWxWkNrYPNGEqUlFmaKekbHKh6h9HcGPYvyzQ7aXDpSTT1eV6DhnwRP8tMKenwsQGOqUB%2BDoVCKxhvlwvXUHoduGaSpjbOXnJbro6nP4WDQFveagbhR4chXYMMzfm7mDrd1v%2BBLSlgfYT6oAcZ5aqUkSYkQ6xSFti%2FnsNwMD8ESkkBkNr8IjsoJQq1EBSrsEWNvpuMsMbGliyOjA7llfthcbDKVRlwQiNtY8Xoy5PMCvJMjQNhB4lfPjqae4hgLnOUKm%2Fhc9b9Q7ZEYAZDjOnEZd4P%2B1PKqle&X-Amz-Signature=95d60f93810d5712910a91ec7bf2da28b7fcfcf6f94396eed12c7e00f7f66afe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4WE7W5D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIACTBY8mKIfyat2eNw1efWaFnldYI%2BNmR5EvQ1Kje7EyAiEAyf4V%2BzrA5VW90V2jUFAkutNttr8TtQniKdJJIhxy8gYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAMZI9%2B6ox%2FQEOa3eSrcAyfHkA8Eo4IQ6r%2B%2FdX30GE5904P5cGNMZLh9uNLF%2BIXii3vtaL26pqrxyZFHIA4k1TNJqNezXmncwOmtLPM1NfLFB3EQJHiyhXcICZLQTNJCWEoBbOjSqbZZNLXZ8TIos%2F%2BHO4QhY7sBfNFpV%2Fulw9ctw6WehH6OEPRDpldrQK%2B7zfwa6y8rx3jX5BiskkumIvPA5d6U93wQOl8wsTelDdJ7AZ3AROWNA3mD%2B715rQwZhWR3qnPc8s%2Bke6pj%2BgrssSxC3zafFlXXG5QMz25NTxsY7lHsCJmaqQR%2BRZ13ir28V16a%2FxnMKL3wEY0rBDrOjL6aCmZgnQFvvwxAWyxGOTJf7JPDXL%2BOTPhA%2BoJ1bMNt1gO1%2BZ5O4LsOwwFSgG9KFOwzeWFpjjeoRsA0Z9vVRML88nAWE2j0UOKpBuNF%2BC%2FEXKfMt808a0ub1AfBtVh54tTX%2FlW%2FAeRcNfjzpoYw%2BJJYrYJ8oEdi7YnY3Ww7%2FNrK7LCenSKmu%2F%2FoPtzC%2BWH%2BwqdBevzF9trdIHQNjGzx6gbjbE15u0%2FZLPG9ghRlUCLdArKZ5rT4oKDI5iTo5j54JDwoWxWkNrYPNGEqUlFmaKekbHKh6h9HcGPYvyzQ7aXDpSTT1eV6DhnwRP8tMKenwsQGOqUB%2BDoVCKxhvlwvXUHoduGaSpjbOXnJbro6nP4WDQFveagbhR4chXYMMzfm7mDrd1v%2BBLSlgfYT6oAcZ5aqUkSYkQ6xSFti%2FnsNwMD8ESkkBkNr8IjsoJQq1EBSrsEWNvpuMsMbGliyOjA7llfthcbDKVRlwQiNtY8Xoy5PMCvJMjQNhB4lfPjqae4hgLnOUKm%2Fhc9b9Q7ZEYAZDjOnEZd4P%2B1PKqle&X-Amz-Signature=75b4704b0a772dd8e8fa9574451b90fcc6520f4a49aa7a7b4c5338e2f3b299a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4WE7W5D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIACTBY8mKIfyat2eNw1efWaFnldYI%2BNmR5EvQ1Kje7EyAiEAyf4V%2BzrA5VW90V2jUFAkutNttr8TtQniKdJJIhxy8gYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAMZI9%2B6ox%2FQEOa3eSrcAyfHkA8Eo4IQ6r%2B%2FdX30GE5904P5cGNMZLh9uNLF%2BIXii3vtaL26pqrxyZFHIA4k1TNJqNezXmncwOmtLPM1NfLFB3EQJHiyhXcICZLQTNJCWEoBbOjSqbZZNLXZ8TIos%2F%2BHO4QhY7sBfNFpV%2Fulw9ctw6WehH6OEPRDpldrQK%2B7zfwa6y8rx3jX5BiskkumIvPA5d6U93wQOl8wsTelDdJ7AZ3AROWNA3mD%2B715rQwZhWR3qnPc8s%2Bke6pj%2BgrssSxC3zafFlXXG5QMz25NTxsY7lHsCJmaqQR%2BRZ13ir28V16a%2FxnMKL3wEY0rBDrOjL6aCmZgnQFvvwxAWyxGOTJf7JPDXL%2BOTPhA%2BoJ1bMNt1gO1%2BZ5O4LsOwwFSgG9KFOwzeWFpjjeoRsA0Z9vVRML88nAWE2j0UOKpBuNF%2BC%2FEXKfMt808a0ub1AfBtVh54tTX%2FlW%2FAeRcNfjzpoYw%2BJJYrYJ8oEdi7YnY3Ww7%2FNrK7LCenSKmu%2F%2FoPtzC%2BWH%2BwqdBevzF9trdIHQNjGzx6gbjbE15u0%2FZLPG9ghRlUCLdArKZ5rT4oKDI5iTo5j54JDwoWxWkNrYPNGEqUlFmaKekbHKh6h9HcGPYvyzQ7aXDpSTT1eV6DhnwRP8tMKenwsQGOqUB%2BDoVCKxhvlwvXUHoduGaSpjbOXnJbro6nP4WDQFveagbhR4chXYMMzfm7mDrd1v%2BBLSlgfYT6oAcZ5aqUkSYkQ6xSFti%2FnsNwMD8ESkkBkNr8IjsoJQq1EBSrsEWNvpuMsMbGliyOjA7llfthcbDKVRlwQiNtY8Xoy5PMCvJMjQNhB4lfPjqae4hgLnOUKm%2Fhc9b9Q7ZEYAZDjOnEZd4P%2B1PKqle&X-Amz-Signature=47412b0a8a78f360e19558900ce738a1a2717685882c8c13da2a589bf3e0ab26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4WE7W5D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIACTBY8mKIfyat2eNw1efWaFnldYI%2BNmR5EvQ1Kje7EyAiEAyf4V%2BzrA5VW90V2jUFAkutNttr8TtQniKdJJIhxy8gYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAMZI9%2B6ox%2FQEOa3eSrcAyfHkA8Eo4IQ6r%2B%2FdX30GE5904P5cGNMZLh9uNLF%2BIXii3vtaL26pqrxyZFHIA4k1TNJqNezXmncwOmtLPM1NfLFB3EQJHiyhXcICZLQTNJCWEoBbOjSqbZZNLXZ8TIos%2F%2BHO4QhY7sBfNFpV%2Fulw9ctw6WehH6OEPRDpldrQK%2B7zfwa6y8rx3jX5BiskkumIvPA5d6U93wQOl8wsTelDdJ7AZ3AROWNA3mD%2B715rQwZhWR3qnPc8s%2Bke6pj%2BgrssSxC3zafFlXXG5QMz25NTxsY7lHsCJmaqQR%2BRZ13ir28V16a%2FxnMKL3wEY0rBDrOjL6aCmZgnQFvvwxAWyxGOTJf7JPDXL%2BOTPhA%2BoJ1bMNt1gO1%2BZ5O4LsOwwFSgG9KFOwzeWFpjjeoRsA0Z9vVRML88nAWE2j0UOKpBuNF%2BC%2FEXKfMt808a0ub1AfBtVh54tTX%2FlW%2FAeRcNfjzpoYw%2BJJYrYJ8oEdi7YnY3Ww7%2FNrK7LCenSKmu%2F%2FoPtzC%2BWH%2BwqdBevzF9trdIHQNjGzx6gbjbE15u0%2FZLPG9ghRlUCLdArKZ5rT4oKDI5iTo5j54JDwoWxWkNrYPNGEqUlFmaKekbHKh6h9HcGPYvyzQ7aXDpSTT1eV6DhnwRP8tMKenwsQGOqUB%2BDoVCKxhvlwvXUHoduGaSpjbOXnJbro6nP4WDQFveagbhR4chXYMMzfm7mDrd1v%2BBLSlgfYT6oAcZ5aqUkSYkQ6xSFti%2FnsNwMD8ESkkBkNr8IjsoJQq1EBSrsEWNvpuMsMbGliyOjA7llfthcbDKVRlwQiNtY8Xoy5PMCvJMjQNhB4lfPjqae4hgLnOUKm%2Fhc9b9Q7ZEYAZDjOnEZd4P%2B1PKqle&X-Amz-Signature=65f7b4042238c11b4c5903e1060281859de50b59058f67e4c14d19bb9ae9baab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4WE7W5D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIACTBY8mKIfyat2eNw1efWaFnldYI%2BNmR5EvQ1Kje7EyAiEAyf4V%2BzrA5VW90V2jUFAkutNttr8TtQniKdJJIhxy8gYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAMZI9%2B6ox%2FQEOa3eSrcAyfHkA8Eo4IQ6r%2B%2FdX30GE5904P5cGNMZLh9uNLF%2BIXii3vtaL26pqrxyZFHIA4k1TNJqNezXmncwOmtLPM1NfLFB3EQJHiyhXcICZLQTNJCWEoBbOjSqbZZNLXZ8TIos%2F%2BHO4QhY7sBfNFpV%2Fulw9ctw6WehH6OEPRDpldrQK%2B7zfwa6y8rx3jX5BiskkumIvPA5d6U93wQOl8wsTelDdJ7AZ3AROWNA3mD%2B715rQwZhWR3qnPc8s%2Bke6pj%2BgrssSxC3zafFlXXG5QMz25NTxsY7lHsCJmaqQR%2BRZ13ir28V16a%2FxnMKL3wEY0rBDrOjL6aCmZgnQFvvwxAWyxGOTJf7JPDXL%2BOTPhA%2BoJ1bMNt1gO1%2BZ5O4LsOwwFSgG9KFOwzeWFpjjeoRsA0Z9vVRML88nAWE2j0UOKpBuNF%2BC%2FEXKfMt808a0ub1AfBtVh54tTX%2FlW%2FAeRcNfjzpoYw%2BJJYrYJ8oEdi7YnY3Ww7%2FNrK7LCenSKmu%2F%2FoPtzC%2BWH%2BwqdBevzF9trdIHQNjGzx6gbjbE15u0%2FZLPG9ghRlUCLdArKZ5rT4oKDI5iTo5j54JDwoWxWkNrYPNGEqUlFmaKekbHKh6h9HcGPYvyzQ7aXDpSTT1eV6DhnwRP8tMKenwsQGOqUB%2BDoVCKxhvlwvXUHoduGaSpjbOXnJbro6nP4WDQFveagbhR4chXYMMzfm7mDrd1v%2BBLSlgfYT6oAcZ5aqUkSYkQ6xSFti%2FnsNwMD8ESkkBkNr8IjsoJQq1EBSrsEWNvpuMsMbGliyOjA7llfthcbDKVRlwQiNtY8Xoy5PMCvJMjQNhB4lfPjqae4hgLnOUKm%2Fhc9b9Q7ZEYAZDjOnEZd4P%2B1PKqle&X-Amz-Signature=95d60f93810d5712910a91ec7bf2da28b7fcfcf6f94396eed12c7e00f7f66afe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4WE7W5D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIACTBY8mKIfyat2eNw1efWaFnldYI%2BNmR5EvQ1Kje7EyAiEAyf4V%2BzrA5VW90V2jUFAkutNttr8TtQniKdJJIhxy8gYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAMZI9%2B6ox%2FQEOa3eSrcAyfHkA8Eo4IQ6r%2B%2FdX30GE5904P5cGNMZLh9uNLF%2BIXii3vtaL26pqrxyZFHIA4k1TNJqNezXmncwOmtLPM1NfLFB3EQJHiyhXcICZLQTNJCWEoBbOjSqbZZNLXZ8TIos%2F%2BHO4QhY7sBfNFpV%2Fulw9ctw6WehH6OEPRDpldrQK%2B7zfwa6y8rx3jX5BiskkumIvPA5d6U93wQOl8wsTelDdJ7AZ3AROWNA3mD%2B715rQwZhWR3qnPc8s%2Bke6pj%2BgrssSxC3zafFlXXG5QMz25NTxsY7lHsCJmaqQR%2BRZ13ir28V16a%2FxnMKL3wEY0rBDrOjL6aCmZgnQFvvwxAWyxGOTJf7JPDXL%2BOTPhA%2BoJ1bMNt1gO1%2BZ5O4LsOwwFSgG9KFOwzeWFpjjeoRsA0Z9vVRML88nAWE2j0UOKpBuNF%2BC%2FEXKfMt808a0ub1AfBtVh54tTX%2FlW%2FAeRcNfjzpoYw%2BJJYrYJ8oEdi7YnY3Ww7%2FNrK7LCenSKmu%2F%2FoPtzC%2BWH%2BwqdBevzF9trdIHQNjGzx6gbjbE15u0%2FZLPG9ghRlUCLdArKZ5rT4oKDI5iTo5j54JDwoWxWkNrYPNGEqUlFmaKekbHKh6h9HcGPYvyzQ7aXDpSTT1eV6DhnwRP8tMKenwsQGOqUB%2BDoVCKxhvlwvXUHoduGaSpjbOXnJbro6nP4WDQFveagbhR4chXYMMzfm7mDrd1v%2BBLSlgfYT6oAcZ5aqUkSYkQ6xSFti%2FnsNwMD8ESkkBkNr8IjsoJQq1EBSrsEWNvpuMsMbGliyOjA7llfthcbDKVRlwQiNtY8Xoy5PMCvJMjQNhB4lfPjqae4hgLnOUKm%2Fhc9b9Q7ZEYAZDjOnEZd4P%2B1PKqle&X-Amz-Signature=0dccf32877d1a67ea4f79ad19f0fa1f098c4d24a7d812b42d79d8ac0ebb4f8c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4WE7W5D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIACTBY8mKIfyat2eNw1efWaFnldYI%2BNmR5EvQ1Kje7EyAiEAyf4V%2BzrA5VW90V2jUFAkutNttr8TtQniKdJJIhxy8gYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAMZI9%2B6ox%2FQEOa3eSrcAyfHkA8Eo4IQ6r%2B%2FdX30GE5904P5cGNMZLh9uNLF%2BIXii3vtaL26pqrxyZFHIA4k1TNJqNezXmncwOmtLPM1NfLFB3EQJHiyhXcICZLQTNJCWEoBbOjSqbZZNLXZ8TIos%2F%2BHO4QhY7sBfNFpV%2Fulw9ctw6WehH6OEPRDpldrQK%2B7zfwa6y8rx3jX5BiskkumIvPA5d6U93wQOl8wsTelDdJ7AZ3AROWNA3mD%2B715rQwZhWR3qnPc8s%2Bke6pj%2BgrssSxC3zafFlXXG5QMz25NTxsY7lHsCJmaqQR%2BRZ13ir28V16a%2FxnMKL3wEY0rBDrOjL6aCmZgnQFvvwxAWyxGOTJf7JPDXL%2BOTPhA%2BoJ1bMNt1gO1%2BZ5O4LsOwwFSgG9KFOwzeWFpjjeoRsA0Z9vVRML88nAWE2j0UOKpBuNF%2BC%2FEXKfMt808a0ub1AfBtVh54tTX%2FlW%2FAeRcNfjzpoYw%2BJJYrYJ8oEdi7YnY3Ww7%2FNrK7LCenSKmu%2F%2FoPtzC%2BWH%2BwqdBevzF9trdIHQNjGzx6gbjbE15u0%2FZLPG9ghRlUCLdArKZ5rT4oKDI5iTo5j54JDwoWxWkNrYPNGEqUlFmaKekbHKh6h9HcGPYvyzQ7aXDpSTT1eV6DhnwRP8tMKenwsQGOqUB%2BDoVCKxhvlwvXUHoduGaSpjbOXnJbro6nP4WDQFveagbhR4chXYMMzfm7mDrd1v%2BBLSlgfYT6oAcZ5aqUkSYkQ6xSFti%2FnsNwMD8ESkkBkNr8IjsoJQq1EBSrsEWNvpuMsMbGliyOjA7llfthcbDKVRlwQiNtY8Xoy5PMCvJMjQNhB4lfPjqae4hgLnOUKm%2Fhc9b9Q7ZEYAZDjOnEZd4P%2B1PKqle&X-Amz-Signature=ca431b4d5493542e16f4aedc8347ec34309714427c66b8a7f86bf18eadcad4da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4WE7W5D%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIACTBY8mKIfyat2eNw1efWaFnldYI%2BNmR5EvQ1Kje7EyAiEAyf4V%2BzrA5VW90V2jUFAkutNttr8TtQniKdJJIhxy8gYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAMZI9%2B6ox%2FQEOa3eSrcAyfHkA8Eo4IQ6r%2B%2FdX30GE5904P5cGNMZLh9uNLF%2BIXii3vtaL26pqrxyZFHIA4k1TNJqNezXmncwOmtLPM1NfLFB3EQJHiyhXcICZLQTNJCWEoBbOjSqbZZNLXZ8TIos%2F%2BHO4QhY7sBfNFpV%2Fulw9ctw6WehH6OEPRDpldrQK%2B7zfwa6y8rx3jX5BiskkumIvPA5d6U93wQOl8wsTelDdJ7AZ3AROWNA3mD%2B715rQwZhWR3qnPc8s%2Bke6pj%2BgrssSxC3zafFlXXG5QMz25NTxsY7lHsCJmaqQR%2BRZ13ir28V16a%2FxnMKL3wEY0rBDrOjL6aCmZgnQFvvwxAWyxGOTJf7JPDXL%2BOTPhA%2BoJ1bMNt1gO1%2BZ5O4LsOwwFSgG9KFOwzeWFpjjeoRsA0Z9vVRML88nAWE2j0UOKpBuNF%2BC%2FEXKfMt808a0ub1AfBtVh54tTX%2FlW%2FAeRcNfjzpoYw%2BJJYrYJ8oEdi7YnY3Ww7%2FNrK7LCenSKmu%2F%2FoPtzC%2BWH%2BwqdBevzF9trdIHQNjGzx6gbjbE15u0%2FZLPG9ghRlUCLdArKZ5rT4oKDI5iTo5j54JDwoWxWkNrYPNGEqUlFmaKekbHKh6h9HcGPYvyzQ7aXDpSTT1eV6DhnwRP8tMKenwsQGOqUB%2BDoVCKxhvlwvXUHoduGaSpjbOXnJbro6nP4WDQFveagbhR4chXYMMzfm7mDrd1v%2BBLSlgfYT6oAcZ5aqUkSYkQ6xSFti%2FnsNwMD8ESkkBkNr8IjsoJQq1EBSrsEWNvpuMsMbGliyOjA7llfthcbDKVRlwQiNtY8Xoy5PMCvJMjQNhB4lfPjqae4hgLnOUKm%2Fhc9b9Q7ZEYAZDjOnEZd4P%2B1PKqle&X-Amz-Signature=aafc31c25fc28fdf0dc564b899c3c34f1eb614c802c885f9c8d6b6f6f3a523ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
