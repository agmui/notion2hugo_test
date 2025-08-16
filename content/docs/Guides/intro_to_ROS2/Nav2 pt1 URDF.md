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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDDG3CK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDV2%2Bp%2Bja85mIgGePrpC7rORuBBbjWR26OPRRx2p4jaCAiEAzlAZlcwqza%2Fslgkh%2FdhYnSRrthzhwT6%2FZvUZ4JNcan8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB0c28pJeyXKm%2FykPSrcA4Zyh4D8q9Xz71NqvgYwshGgCWCUSlihtU%2F%2FFYqevb7xvC%2FlU7UTNpJtUHTgd3dP%2FfRCA9QTKFdURlOpz3mxAOh4q5JJXMKdVFsnY%2B6zk5v0afKX3j%2BnpTarKRCdz8WJfT5UY1m%2B7FdqhOSHuZjSYasC89aysCZeeUZwQTns%2FAp9i0RZdDHX4lr3KnHdVs2eGJl5a482yBJWQEbp5XmrPRr5IXQL0wO7f4Sso7gh672L%2BqQSv1DcQSwp4qfsbZB42C5Zl6dxkw7RSoiVlqogTa2ww6bsUxYdX88mdUaLdtUKyUgBzqWKto5bXUJr7tLxIrEVyFL0o9npaxAirgT7gFwkzeGs9K9ZovKkV663TtJCHIBUxd2md%2B1bFzeP0yM2jMyMlU8pkC3NdQ6Kd3v3A2DzSp6%2BbWLipRQfj6Ct%2FusSNpY5GVCiVfYJR20Kad37pqQnhxG7lWfGjdP4bkv6JXS4I32s5zjBJhGTXHH2leiIrv%2FCrk7364xGjbBeYcRPbRslaBy7mDrIeR3hB500By7ONC%2BCPJuymoSEAma8IWmOtbWvQpmXlwMhewWD3dzsKTQvquCSOwWyw6quWHyVQbnLLfWeYAUc6FodKvg9xw%2FbYoVjO6zMtlclPJQ7MKT4gMUGOqUBM8gkr%2FXB0Ri344aKxVFECwCEUF6XPHB7aunU9p4Jl5mR2QeeNX9sx1FlXF%2BRoyyelKZZRK%2BAfjHg8NHChQ9vvq8LagDwppzMfEGQCgQChEDC7dBi1i4qqvm9wBDpRbEeQI4MOS%2Fg4SeaahJ40e58%2B5s1EUy%2F%2F7gJ%2BejaWiMxZXBJ8YOgAY%2BuqnjkpaMLhUBz9zC4JzGuA9hee1rda6Xzy3Ea8s0N&X-Amz-Signature=bea716034a6cad92f4cf8711b737dbd42a8af84b691de74054fe85009bac868d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDDG3CK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDV2%2Bp%2Bja85mIgGePrpC7rORuBBbjWR26OPRRx2p4jaCAiEAzlAZlcwqza%2Fslgkh%2FdhYnSRrthzhwT6%2FZvUZ4JNcan8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB0c28pJeyXKm%2FykPSrcA4Zyh4D8q9Xz71NqvgYwshGgCWCUSlihtU%2F%2FFYqevb7xvC%2FlU7UTNpJtUHTgd3dP%2FfRCA9QTKFdURlOpz3mxAOh4q5JJXMKdVFsnY%2B6zk5v0afKX3j%2BnpTarKRCdz8WJfT5UY1m%2B7FdqhOSHuZjSYasC89aysCZeeUZwQTns%2FAp9i0RZdDHX4lr3KnHdVs2eGJl5a482yBJWQEbp5XmrPRr5IXQL0wO7f4Sso7gh672L%2BqQSv1DcQSwp4qfsbZB42C5Zl6dxkw7RSoiVlqogTa2ww6bsUxYdX88mdUaLdtUKyUgBzqWKto5bXUJr7tLxIrEVyFL0o9npaxAirgT7gFwkzeGs9K9ZovKkV663TtJCHIBUxd2md%2B1bFzeP0yM2jMyMlU8pkC3NdQ6Kd3v3A2DzSp6%2BbWLipRQfj6Ct%2FusSNpY5GVCiVfYJR20Kad37pqQnhxG7lWfGjdP4bkv6JXS4I32s5zjBJhGTXHH2leiIrv%2FCrk7364xGjbBeYcRPbRslaBy7mDrIeR3hB500By7ONC%2BCPJuymoSEAma8IWmOtbWvQpmXlwMhewWD3dzsKTQvquCSOwWyw6quWHyVQbnLLfWeYAUc6FodKvg9xw%2FbYoVjO6zMtlclPJQ7MKT4gMUGOqUBM8gkr%2FXB0Ri344aKxVFECwCEUF6XPHB7aunU9p4Jl5mR2QeeNX9sx1FlXF%2BRoyyelKZZRK%2BAfjHg8NHChQ9vvq8LagDwppzMfEGQCgQChEDC7dBi1i4qqvm9wBDpRbEeQI4MOS%2Fg4SeaahJ40e58%2B5s1EUy%2F%2F7gJ%2BejaWiMxZXBJ8YOgAY%2BuqnjkpaMLhUBz9zC4JzGuA9hee1rda6Xzy3Ea8s0N&X-Amz-Signature=5f71a253aa872508dce820dbfec96f2bc872b55227e839235dcede0ec4717479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDDG3CK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDV2%2Bp%2Bja85mIgGePrpC7rORuBBbjWR26OPRRx2p4jaCAiEAzlAZlcwqza%2Fslgkh%2FdhYnSRrthzhwT6%2FZvUZ4JNcan8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB0c28pJeyXKm%2FykPSrcA4Zyh4D8q9Xz71NqvgYwshGgCWCUSlihtU%2F%2FFYqevb7xvC%2FlU7UTNpJtUHTgd3dP%2FfRCA9QTKFdURlOpz3mxAOh4q5JJXMKdVFsnY%2B6zk5v0afKX3j%2BnpTarKRCdz8WJfT5UY1m%2B7FdqhOSHuZjSYasC89aysCZeeUZwQTns%2FAp9i0RZdDHX4lr3KnHdVs2eGJl5a482yBJWQEbp5XmrPRr5IXQL0wO7f4Sso7gh672L%2BqQSv1DcQSwp4qfsbZB42C5Zl6dxkw7RSoiVlqogTa2ww6bsUxYdX88mdUaLdtUKyUgBzqWKto5bXUJr7tLxIrEVyFL0o9npaxAirgT7gFwkzeGs9K9ZovKkV663TtJCHIBUxd2md%2B1bFzeP0yM2jMyMlU8pkC3NdQ6Kd3v3A2DzSp6%2BbWLipRQfj6Ct%2FusSNpY5GVCiVfYJR20Kad37pqQnhxG7lWfGjdP4bkv6JXS4I32s5zjBJhGTXHH2leiIrv%2FCrk7364xGjbBeYcRPbRslaBy7mDrIeR3hB500By7ONC%2BCPJuymoSEAma8IWmOtbWvQpmXlwMhewWD3dzsKTQvquCSOwWyw6quWHyVQbnLLfWeYAUc6FodKvg9xw%2FbYoVjO6zMtlclPJQ7MKT4gMUGOqUBM8gkr%2FXB0Ri344aKxVFECwCEUF6XPHB7aunU9p4Jl5mR2QeeNX9sx1FlXF%2BRoyyelKZZRK%2BAfjHg8NHChQ9vvq8LagDwppzMfEGQCgQChEDC7dBi1i4qqvm9wBDpRbEeQI4MOS%2Fg4SeaahJ40e58%2B5s1EUy%2F%2F7gJ%2BejaWiMxZXBJ8YOgAY%2BuqnjkpaMLhUBz9zC4JzGuA9hee1rda6Xzy3Ea8s0N&X-Amz-Signature=a9f31909280a0169219dc1e83bd939861c6664ab22e92989dd3da43e02f54b1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDDG3CK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDV2%2Bp%2Bja85mIgGePrpC7rORuBBbjWR26OPRRx2p4jaCAiEAzlAZlcwqza%2Fslgkh%2FdhYnSRrthzhwT6%2FZvUZ4JNcan8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB0c28pJeyXKm%2FykPSrcA4Zyh4D8q9Xz71NqvgYwshGgCWCUSlihtU%2F%2FFYqevb7xvC%2FlU7UTNpJtUHTgd3dP%2FfRCA9QTKFdURlOpz3mxAOh4q5JJXMKdVFsnY%2B6zk5v0afKX3j%2BnpTarKRCdz8WJfT5UY1m%2B7FdqhOSHuZjSYasC89aysCZeeUZwQTns%2FAp9i0RZdDHX4lr3KnHdVs2eGJl5a482yBJWQEbp5XmrPRr5IXQL0wO7f4Sso7gh672L%2BqQSv1DcQSwp4qfsbZB42C5Zl6dxkw7RSoiVlqogTa2ww6bsUxYdX88mdUaLdtUKyUgBzqWKto5bXUJr7tLxIrEVyFL0o9npaxAirgT7gFwkzeGs9K9ZovKkV663TtJCHIBUxd2md%2B1bFzeP0yM2jMyMlU8pkC3NdQ6Kd3v3A2DzSp6%2BbWLipRQfj6Ct%2FusSNpY5GVCiVfYJR20Kad37pqQnhxG7lWfGjdP4bkv6JXS4I32s5zjBJhGTXHH2leiIrv%2FCrk7364xGjbBeYcRPbRslaBy7mDrIeR3hB500By7ONC%2BCPJuymoSEAma8IWmOtbWvQpmXlwMhewWD3dzsKTQvquCSOwWyw6quWHyVQbnLLfWeYAUc6FodKvg9xw%2FbYoVjO6zMtlclPJQ7MKT4gMUGOqUBM8gkr%2FXB0Ri344aKxVFECwCEUF6XPHB7aunU9p4Jl5mR2QeeNX9sx1FlXF%2BRoyyelKZZRK%2BAfjHg8NHChQ9vvq8LagDwppzMfEGQCgQChEDC7dBi1i4qqvm9wBDpRbEeQI4MOS%2Fg4SeaahJ40e58%2B5s1EUy%2F%2F7gJ%2BejaWiMxZXBJ8YOgAY%2BuqnjkpaMLhUBz9zC4JzGuA9hee1rda6Xzy3Ea8s0N&X-Amz-Signature=a6395f744b1855a6dd55707b612cbc47bde2c2c3521c76675df0950437e668ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDDG3CK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDV2%2Bp%2Bja85mIgGePrpC7rORuBBbjWR26OPRRx2p4jaCAiEAzlAZlcwqza%2Fslgkh%2FdhYnSRrthzhwT6%2FZvUZ4JNcan8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB0c28pJeyXKm%2FykPSrcA4Zyh4D8q9Xz71NqvgYwshGgCWCUSlihtU%2F%2FFYqevb7xvC%2FlU7UTNpJtUHTgd3dP%2FfRCA9QTKFdURlOpz3mxAOh4q5JJXMKdVFsnY%2B6zk5v0afKX3j%2BnpTarKRCdz8WJfT5UY1m%2B7FdqhOSHuZjSYasC89aysCZeeUZwQTns%2FAp9i0RZdDHX4lr3KnHdVs2eGJl5a482yBJWQEbp5XmrPRr5IXQL0wO7f4Sso7gh672L%2BqQSv1DcQSwp4qfsbZB42C5Zl6dxkw7RSoiVlqogTa2ww6bsUxYdX88mdUaLdtUKyUgBzqWKto5bXUJr7tLxIrEVyFL0o9npaxAirgT7gFwkzeGs9K9ZovKkV663TtJCHIBUxd2md%2B1bFzeP0yM2jMyMlU8pkC3NdQ6Kd3v3A2DzSp6%2BbWLipRQfj6Ct%2FusSNpY5GVCiVfYJR20Kad37pqQnhxG7lWfGjdP4bkv6JXS4I32s5zjBJhGTXHH2leiIrv%2FCrk7364xGjbBeYcRPbRslaBy7mDrIeR3hB500By7ONC%2BCPJuymoSEAma8IWmOtbWvQpmXlwMhewWD3dzsKTQvquCSOwWyw6quWHyVQbnLLfWeYAUc6FodKvg9xw%2FbYoVjO6zMtlclPJQ7MKT4gMUGOqUBM8gkr%2FXB0Ri344aKxVFECwCEUF6XPHB7aunU9p4Jl5mR2QeeNX9sx1FlXF%2BRoyyelKZZRK%2BAfjHg8NHChQ9vvq8LagDwppzMfEGQCgQChEDC7dBi1i4qqvm9wBDpRbEeQI4MOS%2Fg4SeaahJ40e58%2B5s1EUy%2F%2F7gJ%2BejaWiMxZXBJ8YOgAY%2BuqnjkpaMLhUBz9zC4JzGuA9hee1rda6Xzy3Ea8s0N&X-Amz-Signature=cfe26627a9e42652a6c50bf586a90079c9fb693f740955d218f0cb14d1488664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDDG3CK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDV2%2Bp%2Bja85mIgGePrpC7rORuBBbjWR26OPRRx2p4jaCAiEAzlAZlcwqza%2Fslgkh%2FdhYnSRrthzhwT6%2FZvUZ4JNcan8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB0c28pJeyXKm%2FykPSrcA4Zyh4D8q9Xz71NqvgYwshGgCWCUSlihtU%2F%2FFYqevb7xvC%2FlU7UTNpJtUHTgd3dP%2FfRCA9QTKFdURlOpz3mxAOh4q5JJXMKdVFsnY%2B6zk5v0afKX3j%2BnpTarKRCdz8WJfT5UY1m%2B7FdqhOSHuZjSYasC89aysCZeeUZwQTns%2FAp9i0RZdDHX4lr3KnHdVs2eGJl5a482yBJWQEbp5XmrPRr5IXQL0wO7f4Sso7gh672L%2BqQSv1DcQSwp4qfsbZB42C5Zl6dxkw7RSoiVlqogTa2ww6bsUxYdX88mdUaLdtUKyUgBzqWKto5bXUJr7tLxIrEVyFL0o9npaxAirgT7gFwkzeGs9K9ZovKkV663TtJCHIBUxd2md%2B1bFzeP0yM2jMyMlU8pkC3NdQ6Kd3v3A2DzSp6%2BbWLipRQfj6Ct%2FusSNpY5GVCiVfYJR20Kad37pqQnhxG7lWfGjdP4bkv6JXS4I32s5zjBJhGTXHH2leiIrv%2FCrk7364xGjbBeYcRPbRslaBy7mDrIeR3hB500By7ONC%2BCPJuymoSEAma8IWmOtbWvQpmXlwMhewWD3dzsKTQvquCSOwWyw6quWHyVQbnLLfWeYAUc6FodKvg9xw%2FbYoVjO6zMtlclPJQ7MKT4gMUGOqUBM8gkr%2FXB0Ri344aKxVFECwCEUF6XPHB7aunU9p4Jl5mR2QeeNX9sx1FlXF%2BRoyyelKZZRK%2BAfjHg8NHChQ9vvq8LagDwppzMfEGQCgQChEDC7dBi1i4qqvm9wBDpRbEeQI4MOS%2Fg4SeaahJ40e58%2B5s1EUy%2F%2F7gJ%2BejaWiMxZXBJ8YOgAY%2BuqnjkpaMLhUBz9zC4JzGuA9hee1rda6Xzy3Ea8s0N&X-Amz-Signature=563551b4c67bd2c722df8626d535d83d16d6f60abaa35e746a1f85f2010f6d4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDDG3CK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDV2%2Bp%2Bja85mIgGePrpC7rORuBBbjWR26OPRRx2p4jaCAiEAzlAZlcwqza%2Fslgkh%2FdhYnSRrthzhwT6%2FZvUZ4JNcan8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB0c28pJeyXKm%2FykPSrcA4Zyh4D8q9Xz71NqvgYwshGgCWCUSlihtU%2F%2FFYqevb7xvC%2FlU7UTNpJtUHTgd3dP%2FfRCA9QTKFdURlOpz3mxAOh4q5JJXMKdVFsnY%2B6zk5v0afKX3j%2BnpTarKRCdz8WJfT5UY1m%2B7FdqhOSHuZjSYasC89aysCZeeUZwQTns%2FAp9i0RZdDHX4lr3KnHdVs2eGJl5a482yBJWQEbp5XmrPRr5IXQL0wO7f4Sso7gh672L%2BqQSv1DcQSwp4qfsbZB42C5Zl6dxkw7RSoiVlqogTa2ww6bsUxYdX88mdUaLdtUKyUgBzqWKto5bXUJr7tLxIrEVyFL0o9npaxAirgT7gFwkzeGs9K9ZovKkV663TtJCHIBUxd2md%2B1bFzeP0yM2jMyMlU8pkC3NdQ6Kd3v3A2DzSp6%2BbWLipRQfj6Ct%2FusSNpY5GVCiVfYJR20Kad37pqQnhxG7lWfGjdP4bkv6JXS4I32s5zjBJhGTXHH2leiIrv%2FCrk7364xGjbBeYcRPbRslaBy7mDrIeR3hB500By7ONC%2BCPJuymoSEAma8IWmOtbWvQpmXlwMhewWD3dzsKTQvquCSOwWyw6quWHyVQbnLLfWeYAUc6FodKvg9xw%2FbYoVjO6zMtlclPJQ7MKT4gMUGOqUBM8gkr%2FXB0Ri344aKxVFECwCEUF6XPHB7aunU9p4Jl5mR2QeeNX9sx1FlXF%2BRoyyelKZZRK%2BAfjHg8NHChQ9vvq8LagDwppzMfEGQCgQChEDC7dBi1i4qqvm9wBDpRbEeQI4MOS%2Fg4SeaahJ40e58%2B5s1EUy%2F%2F7gJ%2BejaWiMxZXBJ8YOgAY%2BuqnjkpaMLhUBz9zC4JzGuA9hee1rda6Xzy3Ea8s0N&X-Amz-Signature=142ab33b05f49dd860aa33fde491e4a8f470564b6c938c6743636e9c313a0ec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDDG3CK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDV2%2Bp%2Bja85mIgGePrpC7rORuBBbjWR26OPRRx2p4jaCAiEAzlAZlcwqza%2Fslgkh%2FdhYnSRrthzhwT6%2FZvUZ4JNcan8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB0c28pJeyXKm%2FykPSrcA4Zyh4D8q9Xz71NqvgYwshGgCWCUSlihtU%2F%2FFYqevb7xvC%2FlU7UTNpJtUHTgd3dP%2FfRCA9QTKFdURlOpz3mxAOh4q5JJXMKdVFsnY%2B6zk5v0afKX3j%2BnpTarKRCdz8WJfT5UY1m%2B7FdqhOSHuZjSYasC89aysCZeeUZwQTns%2FAp9i0RZdDHX4lr3KnHdVs2eGJl5a482yBJWQEbp5XmrPRr5IXQL0wO7f4Sso7gh672L%2BqQSv1DcQSwp4qfsbZB42C5Zl6dxkw7RSoiVlqogTa2ww6bsUxYdX88mdUaLdtUKyUgBzqWKto5bXUJr7tLxIrEVyFL0o9npaxAirgT7gFwkzeGs9K9ZovKkV663TtJCHIBUxd2md%2B1bFzeP0yM2jMyMlU8pkC3NdQ6Kd3v3A2DzSp6%2BbWLipRQfj6Ct%2FusSNpY5GVCiVfYJR20Kad37pqQnhxG7lWfGjdP4bkv6JXS4I32s5zjBJhGTXHH2leiIrv%2FCrk7364xGjbBeYcRPbRslaBy7mDrIeR3hB500By7ONC%2BCPJuymoSEAma8IWmOtbWvQpmXlwMhewWD3dzsKTQvquCSOwWyw6quWHyVQbnLLfWeYAUc6FodKvg9xw%2FbYoVjO6zMtlclPJQ7MKT4gMUGOqUBM8gkr%2FXB0Ri344aKxVFECwCEUF6XPHB7aunU9p4Jl5mR2QeeNX9sx1FlXF%2BRoyyelKZZRK%2BAfjHg8NHChQ9vvq8LagDwppzMfEGQCgQChEDC7dBi1i4qqvm9wBDpRbEeQI4MOS%2Fg4SeaahJ40e58%2B5s1EUy%2F%2F7gJ%2BejaWiMxZXBJ8YOgAY%2BuqnjkpaMLhUBz9zC4JzGuA9hee1rda6Xzy3Ea8s0N&X-Amz-Signature=3f748cd71fd0ec24889791c80bdea5916b7f46127a860eb5bfe39383bf675a5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDDG3CK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDV2%2Bp%2Bja85mIgGePrpC7rORuBBbjWR26OPRRx2p4jaCAiEAzlAZlcwqza%2Fslgkh%2FdhYnSRrthzhwT6%2FZvUZ4JNcan8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB0c28pJeyXKm%2FykPSrcA4Zyh4D8q9Xz71NqvgYwshGgCWCUSlihtU%2F%2FFYqevb7xvC%2FlU7UTNpJtUHTgd3dP%2FfRCA9QTKFdURlOpz3mxAOh4q5JJXMKdVFsnY%2B6zk5v0afKX3j%2BnpTarKRCdz8WJfT5UY1m%2B7FdqhOSHuZjSYasC89aysCZeeUZwQTns%2FAp9i0RZdDHX4lr3KnHdVs2eGJl5a482yBJWQEbp5XmrPRr5IXQL0wO7f4Sso7gh672L%2BqQSv1DcQSwp4qfsbZB42C5Zl6dxkw7RSoiVlqogTa2ww6bsUxYdX88mdUaLdtUKyUgBzqWKto5bXUJr7tLxIrEVyFL0o9npaxAirgT7gFwkzeGs9K9ZovKkV663TtJCHIBUxd2md%2B1bFzeP0yM2jMyMlU8pkC3NdQ6Kd3v3A2DzSp6%2BbWLipRQfj6Ct%2FusSNpY5GVCiVfYJR20Kad37pqQnhxG7lWfGjdP4bkv6JXS4I32s5zjBJhGTXHH2leiIrv%2FCrk7364xGjbBeYcRPbRslaBy7mDrIeR3hB500By7ONC%2BCPJuymoSEAma8IWmOtbWvQpmXlwMhewWD3dzsKTQvquCSOwWyw6quWHyVQbnLLfWeYAUc6FodKvg9xw%2FbYoVjO6zMtlclPJQ7MKT4gMUGOqUBM8gkr%2FXB0Ri344aKxVFECwCEUF6XPHB7aunU9p4Jl5mR2QeeNX9sx1FlXF%2BRoyyelKZZRK%2BAfjHg8NHChQ9vvq8LagDwppzMfEGQCgQChEDC7dBi1i4qqvm9wBDpRbEeQI4MOS%2Fg4SeaahJ40e58%2B5s1EUy%2F%2F7gJ%2BejaWiMxZXBJ8YOgAY%2BuqnjkpaMLhUBz9zC4JzGuA9hee1rda6Xzy3Ea8s0N&X-Amz-Signature=2f1f04f203654f77f1220e85a59ba06b338f98000920497848bd414014bbf338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDDG3CK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDV2%2Bp%2Bja85mIgGePrpC7rORuBBbjWR26OPRRx2p4jaCAiEAzlAZlcwqza%2Fslgkh%2FdhYnSRrthzhwT6%2FZvUZ4JNcan8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB0c28pJeyXKm%2FykPSrcA4Zyh4D8q9Xz71NqvgYwshGgCWCUSlihtU%2F%2FFYqevb7xvC%2FlU7UTNpJtUHTgd3dP%2FfRCA9QTKFdURlOpz3mxAOh4q5JJXMKdVFsnY%2B6zk5v0afKX3j%2BnpTarKRCdz8WJfT5UY1m%2B7FdqhOSHuZjSYasC89aysCZeeUZwQTns%2FAp9i0RZdDHX4lr3KnHdVs2eGJl5a482yBJWQEbp5XmrPRr5IXQL0wO7f4Sso7gh672L%2BqQSv1DcQSwp4qfsbZB42C5Zl6dxkw7RSoiVlqogTa2ww6bsUxYdX88mdUaLdtUKyUgBzqWKto5bXUJr7tLxIrEVyFL0o9npaxAirgT7gFwkzeGs9K9ZovKkV663TtJCHIBUxd2md%2B1bFzeP0yM2jMyMlU8pkC3NdQ6Kd3v3A2DzSp6%2BbWLipRQfj6Ct%2FusSNpY5GVCiVfYJR20Kad37pqQnhxG7lWfGjdP4bkv6JXS4I32s5zjBJhGTXHH2leiIrv%2FCrk7364xGjbBeYcRPbRslaBy7mDrIeR3hB500By7ONC%2BCPJuymoSEAma8IWmOtbWvQpmXlwMhewWD3dzsKTQvquCSOwWyw6quWHyVQbnLLfWeYAUc6FodKvg9xw%2FbYoVjO6zMtlclPJQ7MKT4gMUGOqUBM8gkr%2FXB0Ri344aKxVFECwCEUF6XPHB7aunU9p4Jl5mR2QeeNX9sx1FlXF%2BRoyyelKZZRK%2BAfjHg8NHChQ9vvq8LagDwppzMfEGQCgQChEDC7dBi1i4qqvm9wBDpRbEeQI4MOS%2Fg4SeaahJ40e58%2B5s1EUy%2F%2F7gJ%2BejaWiMxZXBJ8YOgAY%2BuqnjkpaMLhUBz9zC4JzGuA9hee1rda6Xzy3Ea8s0N&X-Amz-Signature=62922ba983ba645a7485923db562c0b81954708522f6300fc93164f559eea072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBMROZGJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDTe1TO4x65inSNAWp0x68sTpxkRLMs8XbwoJIgOXuZrAIgTdnWpYr%2FMFJLj2KInpz8SoOnidYy6dmwhGsoFlW8Avcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFvKqGtQBbIVe5AsFSrcA%2Fo0qpI3V%2FWyMDpuGi7v0f8ATnHN0HNZ1QGbQ6hwALIotNS6fjb7Fq1i1GuKa2Bd23oM5aTRlo1K2yb1yIB%2BYn9N0Sy%2FjH%2FzhCKz69n8EFw8C9O25dS3RdDh0woMea%2FodepoqPS%2FS3Ux4BcbjvZObINDKlomOF%2FY7BUGMSoItpo3Inpz9MbNjhgCgJ6aJ262k5oFVnhy0WT7MWNcPcyCSkmmlwtps4uS2Jq8j%2Fd3nMenGsbG3zs0OWVsjJ3l1l%2BZStXHRxKQl%2BfQzr7CZ7xtvwCuB84Zu89ArAMjBfPM4vSydnivtrHc5coXZcGhAqW303hQZsABcn4Cr91p5cAmM7vJZP0YZ%2F3duVObb64w6tK6YmIwC7eVRyHVoej6gzKWQfks7%2FPQZ1TbK1W7mb%2FJ9ztiWCLM2F53Or1bsvRDIU5Ee44XlpnEG5HdG9GCOzZGwumoFYtxEr%2FbDmWJ0k6KwvpZ5LVdEytnXVrpBe7mOwR%2BqSa7uJRV5PEv4ca1MCUjrOkLVoMnTIU153S4AGy6r3kTI%2FHz%2FNJn7Nix3D7vgcxaWbO%2Bu4jH%2BNDfQNVYgc2hJJ7%2FrqRdURHFQg2%2FsIV8fjCEXe1DEDpmBD96D3kycemh%2FHhtqRKPqsqU3jYnMN35gMUGOqUB7pq57s2HSwV7iX00X63gYfH3wCpO8KbutHoE0IJuPnUuDrxkuDaBcoIOBBjntjNLNbHRoQ2CXPBGIISLjnWdIesa9iiMer7STtDsizIrUDIJ0xRNeYf5JCRNEfV3tHkxu0xsz3iG8b2Oj0R0eEn0OGhX4g5bNCY8WjlbjzEacK6Rf0gYvPWZGWrF0aTexm%2FKzq8BDkRMg9qKt7P0RsSKFXq33JCS&X-Amz-Signature=b7aa5fd04d006643f44814b2cf3712a78192ca9c3ec7e6d9d08a64ab9d47b64c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKDGER5W%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIDpPJGaTrGm5ZC1L6J0Eq1vsZxjaWhrd750aJ9r2St7tAiAu6lIgvtxGHtDhhRUOW%2Fv9QRB4ZkhpeJrSlzXR6sIodCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMJn2QTfbXo28ATEHRKtwDcGo0DWrgOv0jb%2BEMX1RH2qlH3hIFFkt0OQ7wLWmJLoRd23rwtUQ9ZT%2BgdJ64pGzptw5gWeG7Ne%2FhcUlicY3j3lj7PsGr4XLhiJzm%2BGhDBZxn77m24I%2F20HGi49shk%2FzadURTjBakvdq3Wjhj9OKcqThDFWLKvIt3LdBCJMIp%2Fx%2FnPPr%2F4HbaDHZTcXGV8DfyO102hc2bJYT4DGagzBfpPMm70VV%2FOf%2FDw3K1%2BJ1l5F7%2BGRe8SEMSeSAeqHNe5O2h1X%2BRykcTdmTsYeVxd3xhRF3y5xFkBxHRjimI0wiYTESf6rp0KHde2yP3iPFM5DpP4M%2ByXYFH9jSNkRESmwcfJaomp1dnvTAapHP1P7QA3gAUwYDWmGEaGsfl9e0vrGw13ij7aAbA8kDu4I46EBAS0TaSmRhJnY0g0RFsr7BM2LqD323eihlRkMGvGPGhu24xF6PijKmCN2pQsr%2FkeHg6sTx7UOM1Em6dphj1eBhgJl7t%2FpKW2yjsjTh2WOSQBhQBQ%2BJTca0vchEwSKRQ5lKWkroPsmQj%2FDCbAshbBMom6Kf1ZnExjEAFVXHNGIGpo9LSSqLydGpQsBnlSU8f7IKu9cLSysrj8%2BFJwvgIIyGHPo8EMA4fqbl0%2F0uyYrkw6PeAxQY6pgGjkWnNITUs6%2FaQBOyvjF4shK4ZM1BBL8KvAH2ZGps%2BlQU3aZkxGHJr9B0fM5NrR1dHcrwMjpTKRPA0pNFiYTmT27xBYM2l7FTUHUleur665iwjn1t%2FOAR92sx8LBCQ9cgR4bxASPeINiHijZWTP5MykQPxOH%2Fg8ynFb9Yhan%2BTi5b%2FKtCR7aszSI6zFQY6M4egNPfkw%2BlB%2FuPdp0GBUXN5R7nrxmv4&X-Amz-Signature=d7475643f833cfc65dd43f146fa73c1b7d0b82ef046bc4d1b4b20ccb3914a309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YXQ5LA4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDOkSqAZfZgy4BIf%2B%2FWspq%2BdvgIwVMafm5UUtJMvF7ZIAIhAPpTh91xW3dJifvgRfe5dus3ID4LG2ZQ6HZtwnNgHNSiKv8DCHEQABoMNjM3NDIzMTgzODA1IgzspQH4osCLyFauGhsq3ANL9gvWDgVLusxHRC%2Fm%2BS8k3kGZxoNUCpJVVdJ5RvsHdtGxTgzmPPC%2F3N%2Bt825m16ZVbmaipeFuw905stFSOGcN3h2UN5GHZ%2Bg0IjXY6INmrUp83xHDNz9pbkEB%2BbC9tuWB%2B4AzQcnuqjFXWept7O3Bh%2BEzuPVFIfx1FJlz9yL9s7W%2FmpiEqTBFftyG4arz0%2FDsQj0VaohDpEIGpPUjlrK4MM%2FnmSnS4WwJVJ5%2Fa%2FkPmy1uDQYNrXyQXosxKcA7SxzKGjOT8CyPDyb49u%2BMMzj9%2Fpe1DyUZycnEsFpC0luETTXjeA3W4m0KYWxuKvrPaN2QXrVKXkgwDFPAHI4Dpm0qd7UhL4LwCynXtOrBqGsK19Xc9Ykoqj04zgl2UmRqcNTmmQP2lrpp5ipYQ0ZiIOWZyl6zuUT4UTpx2fvh5GjiwZTBEH8bKI7hspDZynvNdsx5mRpjHRq4ShV%2F%2BCNQAdCwaQFtMy49%2FrYunQyfVz6J%2FdM4I%2FHsk13vqzkneHkt4%2FrpAL%2FL0cVj5Abm8qiHUDxDcTOYIHQeCJmJEu8r6KQHuETO%2BLfheBqcV%2FrJR3TCi1tvgeF0Pf2JHbO2h1OnaHbgNb5WSqpYvT%2B0diHp6wzvTZOuWeIDr4vzgaK27TDF94DFBjqkAdiV6g7HxImUcATb4Ep8AliSo%2FqeKR%2BpO8guMKy%2BDWGkFb4QHAFp6MddzVB5F5gMnIYhpm%2Br1yaUqMHHXEYpb4L9NuuUGbgTkPycXWG1%2FYEhTAJc%2BM2jkQ23iBeFQYjEcKXjPSXEgNz1ZAruwmBHvVZCgZUJ%2FPkx%2FS3lOFvtBqMT%2BsX4t%2FxhRZLzJRVakKfnKl97R%2BROpgqiNIGD8P7ZmLm8Bbe6&X-Amz-Signature=96a492cd1db36cadf416d4d9bea95fcf77343516b05d3a272ae8ebcddbb93427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDDG3CK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDV2%2Bp%2Bja85mIgGePrpC7rORuBBbjWR26OPRRx2p4jaCAiEAzlAZlcwqza%2Fslgkh%2FdhYnSRrthzhwT6%2FZvUZ4JNcan8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB0c28pJeyXKm%2FykPSrcA4Zyh4D8q9Xz71NqvgYwshGgCWCUSlihtU%2F%2FFYqevb7xvC%2FlU7UTNpJtUHTgd3dP%2FfRCA9QTKFdURlOpz3mxAOh4q5JJXMKdVFsnY%2B6zk5v0afKX3j%2BnpTarKRCdz8WJfT5UY1m%2B7FdqhOSHuZjSYasC89aysCZeeUZwQTns%2FAp9i0RZdDHX4lr3KnHdVs2eGJl5a482yBJWQEbp5XmrPRr5IXQL0wO7f4Sso7gh672L%2BqQSv1DcQSwp4qfsbZB42C5Zl6dxkw7RSoiVlqogTa2ww6bsUxYdX88mdUaLdtUKyUgBzqWKto5bXUJr7tLxIrEVyFL0o9npaxAirgT7gFwkzeGs9K9ZovKkV663TtJCHIBUxd2md%2B1bFzeP0yM2jMyMlU8pkC3NdQ6Kd3v3A2DzSp6%2BbWLipRQfj6Ct%2FusSNpY5GVCiVfYJR20Kad37pqQnhxG7lWfGjdP4bkv6JXS4I32s5zjBJhGTXHH2leiIrv%2FCrk7364xGjbBeYcRPbRslaBy7mDrIeR3hB500By7ONC%2BCPJuymoSEAma8IWmOtbWvQpmXlwMhewWD3dzsKTQvquCSOwWyw6quWHyVQbnLLfWeYAUc6FodKvg9xw%2FbYoVjO6zMtlclPJQ7MKT4gMUGOqUBM8gkr%2FXB0Ri344aKxVFECwCEUF6XPHB7aunU9p4Jl5mR2QeeNX9sx1FlXF%2BRoyyelKZZRK%2BAfjHg8NHChQ9vvq8LagDwppzMfEGQCgQChEDC7dBi1i4qqvm9wBDpRbEeQI4MOS%2Fg4SeaahJ40e58%2B5s1EUy%2F%2F7gJ%2BejaWiMxZXBJ8YOgAY%2BuqnjkpaMLhUBz9zC4JzGuA9hee1rda6Xzy3Ea8s0N&X-Amz-Signature=6804cf3e62cc3ea7209c6627b2f9245aa74497bf6cc188a75e8519506a6e6def&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGLEKHFV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGpKC4yVxAYGMtQ59PjRGmrs%2FOP20q8ZaBZ5fYaMzSNXAiEApa8WyA1x%2BmY43I13we%2BWX3Jt4Mm6oGTNDt2JbQpgy%2FEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDN9yOJlmiWlM1uh13CrcAxhJAdjzD%2BjCrn1PJ9HM8Edfht4lCfi6ozsjR4rgjZldB6lwoUFu0ndsH%2BB8wxmzwVIpHg3XBTow0Ii5%2FVO9nIZGgolCCzM3sqYsTJf14fdou8pDYETFBvyFafsGgH%2BEKde5grmCco4crqgvDa2%2F0kRXwpgb1fLKihZp%2Bb5wd%2BxLKeVzhWoc2OW8BS3EqBJsupDEowXe7H8uC7tEMjiLbD3xLb8zySDIW81o1v%2FAq93N0qWT%2FeYnFoMvuw%2FNp7EFgcO8RMIhUSFWQluIdCmljzBppaoN6xiMDVPJ%2FeCcqvHThzN7JJz6uj1DbiDJ7%2F95qEVX%2F9zKiFrqU8i2axUnbxyaOGsihUB6BrNTkPU3tar6SIMCN7fO0huvoBUoTIeuNL8D7o3Xuw333YBhkM9r%2BWzZDCIGq9XQxlTspUHvvD2wcsC2MDPD87UOIezcWLhw8ab9oK0o%2BNdCvR4YzO%2B4wvNnwI%2BVk%2Fc5SzbHoxoSDqbWAsOijYKLbWiEckOkuCa3NFIFctSgGU1VnxeHWjxFDOGkUQAs60zu1iFs1FBVYz%2BLnGwjKdBjMLXqZVDyWmExT2zyweRkQJs4ZvYzb5%2BDFtZsbJsNvAIjKeuwwQ%2BeOaIPPVCSXZ5%2B2GMB31bKMJD4gMUGOqUBvpXRyfXTGV4RPQhN8RZ78qt7eEjtqBCYJxOryBKnFJwmCCvTVv7E6CWwBCx%2FAcgRNZgsQtnFdrxqOX%2FyWo8hzW13udRIpv0DoWnsZ6k%2F1KkiaTlh5VjCnR4lGGVXjWWuKtgcIFobd0aEgteZuD9Y5AKOqQ%2Bp0aHCIDoJzvf5eYBojQ6ejDvnOeZ0XWrNLmfLMn%2BvBKDWodhQVyASCbLEToPA0%2FLE&X-Amz-Signature=91f39b0e591b95020d9c1887917dd3ee4b380a8066e629e496e859c836e8fb5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDDG3CK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDV2%2Bp%2Bja85mIgGePrpC7rORuBBbjWR26OPRRx2p4jaCAiEAzlAZlcwqza%2Fslgkh%2FdhYnSRrthzhwT6%2FZvUZ4JNcan8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB0c28pJeyXKm%2FykPSrcA4Zyh4D8q9Xz71NqvgYwshGgCWCUSlihtU%2F%2FFYqevb7xvC%2FlU7UTNpJtUHTgd3dP%2FfRCA9QTKFdURlOpz3mxAOh4q5JJXMKdVFsnY%2B6zk5v0afKX3j%2BnpTarKRCdz8WJfT5UY1m%2B7FdqhOSHuZjSYasC89aysCZeeUZwQTns%2FAp9i0RZdDHX4lr3KnHdVs2eGJl5a482yBJWQEbp5XmrPRr5IXQL0wO7f4Sso7gh672L%2BqQSv1DcQSwp4qfsbZB42C5Zl6dxkw7RSoiVlqogTa2ww6bsUxYdX88mdUaLdtUKyUgBzqWKto5bXUJr7tLxIrEVyFL0o9npaxAirgT7gFwkzeGs9K9ZovKkV663TtJCHIBUxd2md%2B1bFzeP0yM2jMyMlU8pkC3NdQ6Kd3v3A2DzSp6%2BbWLipRQfj6Ct%2FusSNpY5GVCiVfYJR20Kad37pqQnhxG7lWfGjdP4bkv6JXS4I32s5zjBJhGTXHH2leiIrv%2FCrk7364xGjbBeYcRPbRslaBy7mDrIeR3hB500By7ONC%2BCPJuymoSEAma8IWmOtbWvQpmXlwMhewWD3dzsKTQvquCSOwWyw6quWHyVQbnLLfWeYAUc6FodKvg9xw%2FbYoVjO6zMtlclPJQ7MKT4gMUGOqUBM8gkr%2FXB0Ri344aKxVFECwCEUF6XPHB7aunU9p4Jl5mR2QeeNX9sx1FlXF%2BRoyyelKZZRK%2BAfjHg8NHChQ9vvq8LagDwppzMfEGQCgQChEDC7dBi1i4qqvm9wBDpRbEeQI4MOS%2Fg4SeaahJ40e58%2B5s1EUy%2F%2F7gJ%2BejaWiMxZXBJ8YOgAY%2BuqnjkpaMLhUBz9zC4JzGuA9hee1rda6Xzy3Ea8s0N&X-Amz-Signature=a367ed668c29ed7670e29788a80a13d436957aa7bba860295a044fb37771fabd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ICOU7R2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDKEhH5gNEAez2WPOX5%2FlZRP%2BNQd3mhBBS3k8kNRYWXQgIhAJ8uCqwRxbncaOtSzrYaAnAcJWVywK6dT5vbs%2FwrM6WkKv8DCHEQABoMNjM3NDIzMTgzODA1IgwMMWcTiARSXkv2NQ4q3AOp6VrVS68eaSltPKBVRGUtovwChzutohcJNf6xRpPwOT9wwyGe1LEt48st2SrPdEEmBBzspegdrA0ygxaGCgdZ4%2FW7O5U7uU3jSY%2FVF%2FfmdyN65w4I3X1G6WiZOnAzvlevv9y5FeQzNLqeVvj5NoxDTwO5rP9WcuAJPjgYKtZAgL%2B5htB4NHz%2FMKyB985sKKBAPF88Kw1UKlx%2B6UXzureSiG7dqAmEKf5NDJALX7NXCS2MUBasbOMLJ7SlYNTxDPskRB5k6iCUGtkH9u2jnjRq5szpvzKLQ7G9yzPdttQPySjPWpZWF8DZVLCX9ZCm%2FME0yXPUEwzRs%2FSUoUOlJJtCnOPD6wtZ%2FVWMcoG1olMd6qP0RDMOw9Cu63mHzSkvjOhOqo2mXyIKoTjvKNRE3c0OvAq7QvqvSO76%2BwV%2Fker24uNnhfexecrEkdO7iES%2BUtZxYS0PH0hMqfbHyCfvUmR1b8s7c1pH04pLsVaPu9ZG67BT6ZznLayhnnPTylO23qlXXdEoQ8nO0PeQZPZJd8GXc5%2F%2FoUsGgbrhLfhXUpyFbieNQ4PS%2BguztupJBG%2FVJuEx4P%2F1NY2mLlbvcMSKPHEgWHQSNGRcfn54e3Jh6txmmRxYBBUPofg62EpsjjDL94DFBjqkAeYOB5kNoq41Wh4yAO9BzkdeyNVGn4%2FslC%2FVIovKIALqeovvmd6pP5d8sXpLHg8qwdAhVw7ZZfH47C3Pmf6Ysl0bRuBEUtoiTfIB42%2Fj85ywJB3vJDC5bxbhhFGRZqFdKOH4wnDULLnfDb%2FbqkTja6%2BH%2BKOgCrgO5Pkf40%2Fiknq6Y8yg5nw%2BU2hZYQV%2ByVkzoj8MLoPP8rLKg2cFzRB9l8MVXcgm&X-Amz-Signature=0cfb97882e779efe487fa8d089d19439aac66bf5aa0813004e9cf0bc1e6ad2b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDDG3CK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDV2%2Bp%2Bja85mIgGePrpC7rORuBBbjWR26OPRRx2p4jaCAiEAzlAZlcwqza%2Fslgkh%2FdhYnSRrthzhwT6%2FZvUZ4JNcan8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB0c28pJeyXKm%2FykPSrcA4Zyh4D8q9Xz71NqvgYwshGgCWCUSlihtU%2F%2FFYqevb7xvC%2FlU7UTNpJtUHTgd3dP%2FfRCA9QTKFdURlOpz3mxAOh4q5JJXMKdVFsnY%2B6zk5v0afKX3j%2BnpTarKRCdz8WJfT5UY1m%2B7FdqhOSHuZjSYasC89aysCZeeUZwQTns%2FAp9i0RZdDHX4lr3KnHdVs2eGJl5a482yBJWQEbp5XmrPRr5IXQL0wO7f4Sso7gh672L%2BqQSv1DcQSwp4qfsbZB42C5Zl6dxkw7RSoiVlqogTa2ww6bsUxYdX88mdUaLdtUKyUgBzqWKto5bXUJr7tLxIrEVyFL0o9npaxAirgT7gFwkzeGs9K9ZovKkV663TtJCHIBUxd2md%2B1bFzeP0yM2jMyMlU8pkC3NdQ6Kd3v3A2DzSp6%2BbWLipRQfj6Ct%2FusSNpY5GVCiVfYJR20Kad37pqQnhxG7lWfGjdP4bkv6JXS4I32s5zjBJhGTXHH2leiIrv%2FCrk7364xGjbBeYcRPbRslaBy7mDrIeR3hB500By7ONC%2BCPJuymoSEAma8IWmOtbWvQpmXlwMhewWD3dzsKTQvquCSOwWyw6quWHyVQbnLLfWeYAUc6FodKvg9xw%2FbYoVjO6zMtlclPJQ7MKT4gMUGOqUBM8gkr%2FXB0Ri344aKxVFECwCEUF6XPHB7aunU9p4Jl5mR2QeeNX9sx1FlXF%2BRoyyelKZZRK%2BAfjHg8NHChQ9vvq8LagDwppzMfEGQCgQChEDC7dBi1i4qqvm9wBDpRbEeQI4MOS%2Fg4SeaahJ40e58%2B5s1EUy%2F%2F7gJ%2BejaWiMxZXBJ8YOgAY%2BuqnjkpaMLhUBz9zC4JzGuA9hee1rda6Xzy3Ea8s0N&X-Amz-Signature=fe8e08e70c198597f95e477ea46a5ba69769a5232894834191150330ba58d394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVFR5NHS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD%2F%2FAGQ5VG5ZsgkOyIYXMM1QRt9T%2BYIW9zxUNgy4VVxsQIhAL1%2Btj%2BJyYF6HHkGGzU83scp%2BkhRLmkI2PJ0MgyeKYbBKv8DCHEQABoMNjM3NDIzMTgzODA1Igw5URosmdYOxnvgUKkq3AM47rBvyplLvBGov4qNTQf%2B45N605v%2Fa8E11JZVEV7T0NAQwinoWfydR6sxty006Q4CXXeUrQToWXfn7DnUyCSd3V1QSP%2BppygI1LMrfTBALGHQMqlFfQKfRlSgahi5NHsp%2BimRn638ia8EiLrrhAMFjP3GTjiassWoyT8stfEM3a3wtnDpjBo6O6LhNhzjFxooCr6yPKmgGVDGMa92QjIpyO6gC%2BC1bewnmGg9hq3kD1nVJN3%2FVL%2Bd7qbbtSuedX1dK1CYCQmD0GUyDUQunvV1vXAvGRrbdd1AEVNNMJP2y47nTI%2FSI4Jcwsdd3aEkfEdmCTL6ySvVwNQ0bXZGCkzke4L76OcY0BNBxymZakgQ%2FbBIdz38i3bSVCxOFRaldtxmq33AZXMHhkENuwgHfwbNYZsF4a82ZAOtonU0A%2BJWTWEd5%2Fc21K4kCS8%2F%2B7AQ5HAz7Yba4V0fJTwYdOujdufwUIN0RJhmfZY0yfiTo25QaSFql9HthRc1MKUoPz8OiRyloTfbZW377AeEU6%2B1T1zmrtkIhUGrA25c2LjBd0H91U6%2BdIxlf1MIuvgned5lnwCcXSodDtffRhTXbPGx2dg9NFDCZZMXiBeP4Ik1eNosfxEcVHVBf8q98n64KTCr%2BIDFBjqkAa%2FQvBOKn43gXUuikoYgKBFX5aLP1Cc%2B6pdSJ1xeHoVDLXYAHjvzIWEQNXCY%2BSITBtnDXnCrYEVfT8AhBnjLTDxbTvZrvYWPGeYlUUliSNi1GG3YEJwFhC%2Fw2E34v1EU1xurqKn98aSisamapXwuqB49QPFFuHeIKGxEt2PZ9itGJsf1H0NS%2F857%2FIlJae7fOvdmQIGToi4UVrZth9NfkC%2BzHgFd&X-Amz-Signature=e39c1b6779d7317fc9490f081e8037def7d9194b8661e3d3f8b20df088812fe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDDG3CK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDV2%2Bp%2Bja85mIgGePrpC7rORuBBbjWR26OPRRx2p4jaCAiEAzlAZlcwqza%2Fslgkh%2FdhYnSRrthzhwT6%2FZvUZ4JNcan8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB0c28pJeyXKm%2FykPSrcA4Zyh4D8q9Xz71NqvgYwshGgCWCUSlihtU%2F%2FFYqevb7xvC%2FlU7UTNpJtUHTgd3dP%2FfRCA9QTKFdURlOpz3mxAOh4q5JJXMKdVFsnY%2B6zk5v0afKX3j%2BnpTarKRCdz8WJfT5UY1m%2B7FdqhOSHuZjSYasC89aysCZeeUZwQTns%2FAp9i0RZdDHX4lr3KnHdVs2eGJl5a482yBJWQEbp5XmrPRr5IXQL0wO7f4Sso7gh672L%2BqQSv1DcQSwp4qfsbZB42C5Zl6dxkw7RSoiVlqogTa2ww6bsUxYdX88mdUaLdtUKyUgBzqWKto5bXUJr7tLxIrEVyFL0o9npaxAirgT7gFwkzeGs9K9ZovKkV663TtJCHIBUxd2md%2B1bFzeP0yM2jMyMlU8pkC3NdQ6Kd3v3A2DzSp6%2BbWLipRQfj6Ct%2FusSNpY5GVCiVfYJR20Kad37pqQnhxG7lWfGjdP4bkv6JXS4I32s5zjBJhGTXHH2leiIrv%2FCrk7364xGjbBeYcRPbRslaBy7mDrIeR3hB500By7ONC%2BCPJuymoSEAma8IWmOtbWvQpmXlwMhewWD3dzsKTQvquCSOwWyw6quWHyVQbnLLfWeYAUc6FodKvg9xw%2FbYoVjO6zMtlclPJQ7MKT4gMUGOqUBM8gkr%2FXB0Ri344aKxVFECwCEUF6XPHB7aunU9p4Jl5mR2QeeNX9sx1FlXF%2BRoyyelKZZRK%2BAfjHg8NHChQ9vvq8LagDwppzMfEGQCgQChEDC7dBi1i4qqvm9wBDpRbEeQI4MOS%2Fg4SeaahJ40e58%2B5s1EUy%2F%2F7gJ%2BejaWiMxZXBJ8YOgAY%2BuqnjkpaMLhUBz9zC4JzGuA9hee1rda6Xzy3Ea8s0N&X-Amz-Signature=d4043043d95989da88a117bad9e857cfffa294c9a758b5b14345506d6bd6faaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP6NXZXJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCXvLX1ukiAxv5HvhmGFGRRYSqr%2FVfazC34WTTvCQcTfQIhAK8w6kOaHMUxZvWrxNLXX44z3OsXnhA3JjTLr9gxqBs1Kv8DCHEQABoMNjM3NDIzMTgzODA1Igww8lSEpJ88tGDtD44q3ANKcRaroe623Kz1HR5ce8%2BNNukjtIvGpi1PuiiUy2msYkSZFMznz8878EYfCY0jUTxjpI%2FuHdX%2FkN%2B9zlZs6hkOnVqr%2BKjjwQiKz2wWH9kxgRCz%2BIXy14WRx6aJ30BYDYhT7Dcy%2BrXFtBN1sBp5HwfBmcYaL9nTyXHDPRr2i4FKF2FQor386tRusbqmId86wXEel%2BjkH4YO4C1gEUyFM1BxfPaAxUbs9ZwZsjWeWbR79Q1mOnTnfkVV8%2FWP6MVvCYRwRwHMKox7QjaZozv%2FxiGUjtSe0H3%2FrbIqltczZ06wfL%2FICk0%2FRKvExYRuTSGE5oohRBLhxZan3LRpZ%2FbqCp2JtvB5t1XD6BZ7FeM%2FJVYPV0C32bXGsWJtCVzEctgYo%2FmL78cN4CWYP7ejDl7UJk0xzHHR%2B3mk5bKRBPJGkYSz2k8DRAv%2BIZ3PalkB2PV4WgFHLEt%2BlFTA%2BL%2B1%2BfRuw0RWN6h6L2X9qemWEWA%2FPwdYcfRGKzDGRLQKVtUxNsG8%2BnVUCTWOHiDgl7Ao%2BRbGX8slNuQ2FVi73clSlfsaFoh3p9%2B232ighXqvjJvWmuSDud9bgVY0IjB1Nr8LuNSV7%2FrkEhTWqTg%2F4uOZvxf%2BZ2%2BKal45R5srr%2F%2FPbzOGRzDF94DFBjqkAQfPaoGUo5hUCXErDxkiGyTEySuedEdAD5tr930v2n03qzJa9OsdQWrg%2FUq4PsyL7kGmZ6Lhy9r2urYj7LFEBE4cvafmW4seJxjleZ8Fo1VKXs%2F%2FNhf8EqEGuCF8t6ejKgboyf84TmRm9y8Kc5XcyDdT7Bs8qyLtewlDEUXrLTdZlHxdkgQC0WP%2FW8VEMFQCmpSgYDQfK94Pb8XdaSx3wH4JsEfv&X-Amz-Signature=d01f856f6450d94732e2bcdf7b3414a8029d8b2855c1fa6d1e137787b69e0e89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K5IQSMH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDap3qO77o%2BPNtc4W2SjyHinKIRnN2%2BRpXmiXvReURMVQIhAJVt4njn0lzdA3HmVKTIK7%2F%2BYpLAZeKmwiya7f0JJ%2BOzKv8DCHEQABoMNjM3NDIzMTgzODA1IgxxPyOw5PGmEWoLXAwq3AMTSiXlPB0iz5NybEIsU37lBKHi3GVR5dblRPkD2HxM0fHWf0%2Fyi2d7Njlrj%2B472goeaSMNdt7hfwir07g9F6NAHCF0hy9HmxxrGrTBbS3CSMIbAAt1smWdgom58Q4aI1d1voSU15eMFFEeBYXi3KUO%2F14FlsRC%2Bpyl4eOnsNbyB0FjuniTUThMNeseCcLbAi%2BzTp1TNY%2B%2B%2BRdQ3KNO7DsoijQTYd9mTXNHds446oyq52rBJ5lfqwLLyYRDI0EhvM3sx80%2BO2ZvUqZL9PjOf0B46s77fARUHdVOc3HMtFcKo5SaTLWSNSq7mLpbE%2Bsl33ovI9tFbz5VMqpeyGu83bJx5WSJ4sKbqsMTIGb33ppNzAPS4V7rDmtgVTz1QdMkhwk55p4wgA2Lb0fe%2BjqWh%2BGdPL2RYq5tPtSmgf7jzNKlFS%2By7e7lyF%2B6pXnfI5s1qrTqZeBqq5bPFKiPpK5AI2kOID%2FLtX0eYgVOoyRNk6YH7vl9KtQUAMrzor1sK5HS9EoFikA%2FNlXXVI1hFJLV3EYJV8wGaj3WVTwQq0HDGMmpJ9vhMEDe3xB8GnOPm9TQN5AdwVd3DjgC4LtMAa2ek0KaEVaankXWuFmy62Jn8y4vWy22m1uDRz7eadcxADC294DFBjqkAXs6CrnoCKyEV8%2BhNP2i2weg90hoZHPhCTZOzXQXk%2FXYYpIjsQOrjqKut4yNorvyPhfHDGTngERyXZxbPfImupYPgzZxyhlLwFK%2BYH3Jo0r2JCsZ%2F7DJ9F7OVkmkGJMz8xEQXhhgg8SkRgVng4cD7Sh3%2FZ3DFuzS0Mekyv%2BVsainUX0iG2TniRtX%2BOulmwquePerLF4EMT6IdNFs2k%2BCu1jbSJW%2F&X-Amz-Signature=0a5cae855639f532cddb5a8c1ea0803572752148e86f1f2aada85eebc10d9156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKAJQYZD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGLV1D%2FFJ%2B6Bl26YDGaFV0dbAUNLsTm8BOygQBVOsAtxAiAgLaupC2ng4NpMry7rZt9Z8TywEZs7v8GDw6ctG4iRCir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM%2BzKnF02L9ZU06vT6KtwDNuf36tFQ%2BWvC7MDDQGaC%2B92XEvesoDGfL3VJlOtqRrZ0amACuSh0djMaJ2syv7Ot1Gbv9Y2xHyDqERRe1EpKcJPNVPufDdCQDz4qy4m%2BwHwaBDf9NE38cL5wEFRgZYhxMwVTEcORP6b0dHSGvbckOqYuxW22E4OklpXEiKf29xtcYwS6ZD7W0t30KWmCF2LgKwF0s%2F%2BdK7wGlURQtbZBdzbN8QTTyQM5sNF9xI%2FqBalysqS6lvCvotawRQqMd8jaOtnxU8Uwh9LrktPjtxlgzID6tfjyW%2Bg2jfansYobfKEJJ8tFkzHJIkk2dHBtX%2Bz%2FCjaUj5oh%2ByLZjbClkfwt3px8%2Fg6txclqap%2B%2FPXWynf%2FQxvVeYSZMpnZJrbyKNKnFqZh18prucXtp8GwR8nqrxcojLC4ozjzJvo79%2FitqtaO9GuIRlQLDCpz%2BlecypiPIHA%2F4VleJS8%2FWq5lSKNUoG0m%2Frcl75fjWrdtz69Qabz82W%2B0JM6IV0%2FGqYOcvsV1D0MFipaO1fbi2ZcR9sY%2FgnvU%2B37IMniitXIj5AADPIJePHWjawxwegMVzex51ucRHIeIqL1%2F1ci7abxupoQi2eYu%2FMZ6Adzspp6yKE%2FfruVdCDE9KqWrhHgKJLagw8PeAxQY6pgFDUA8kZIfMSyJ5rgts62e0%2BlgOIO9CccVl2oS8TU4Pqh5p4HTXjBgnsfr6wHVQCHjJerR7IB2d5Fu0w8%2BY73KKPgHyh6jtlY%2F%2FOSuczVF3wAtEls%2BT7AOB3foGW%2FvLwPVJdatYGy6hXVGu4Yju3mwRRKafTqgbEcXmidiWZC4DxDCr0%2FGx%2B9dGf4RLi6Xrbv2zL5%2B6uE5kW0tq96XKedKzl6%2Fyk9Z0&X-Amz-Signature=806b4d0e1eeb0316a516896d93d7673e61dd5cbb67cf74c85aadfe383358bfc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BPLMUUJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCDFc0ffabpznK2YqytSUvWabZuF3ucwSAvClPvQ2uN2wIhANg6RHyuaQEk2i9b2ifRNKXxb8QoSMFe81m%2BF598cAIJKv8DCHEQABoMNjM3NDIzMTgzODA1IgzbdWV68t8pKcXC19oq3AN7eK%2Bk9Rw77Vd1Sxvg7ShhZzkij%2BUf%2BKB%2B9BZk8UkdRp4d7927Usa7S5uOXbzroeMw8DyYmze0vuT8KCIfASaYHVQ7F0TwxMswketUjOcKlJZX7LBkXy22xs2gquhI4p6%2BNEiBdIXZ%2Fss9%2F2bAYtpMi0NJ1%2Fm0yRqNZSYjZ0wXucGT%2Fjf3aKCGySbjd6J6CnnxTmJQF%2BOPwbnqVM4C2Nkn%2BaEI1N4yLxQXq8knPu9lma9AYBp%2B1xgw85OhLCxZZF1EBQl7QGepA3Nphr4PS54jFQRRGcfiM%2FT3UFO%2F6wpVIOD1xmL46E1FpJOZBk32WSqFQ%2BZifJooPo7OW5QzLDzE6DZCxCYd3H7rthkO5Z2NUIbgNxfSigPQYznIhnbTTFOV8Lm0ZafnPtv16ukNvtuxBvbe86DjambrnvOSZn9DTaTbaxzX5Ph%2FhUJ9HLH%2Bv2THifQsr%2FrKIQR2HkKpUQkRM3kzXZuwlbzcofXDdcGEI%2BgZVwI4KYYwJ0QTly4JFKIjIhifRGQla2J7wPGf02879CXxKkdKvMwZxFVkSfoQQ2Z9%2BIvN49VZU%2BVmLBf0BAVuZwAziTb%2FvvqgpTG5u3fSpNdDJ3ukjKWnB9qgW0v5cWgpHsjvSqtJzTTGhDDp94DFBjqkAUNvVCvHn1qmYUZiGnAU2%2BV3c4pyZLP61dfBLmPA4HQ5jupjfCLcsMbEv%2BpAQpdeaI02TfU45Yo1p1vFKHupYDV2nN%2F0YuMVfDX0wKLY9pp9jAt%2BYKhGp8aPwoiSnxIwvlqlw7wu46B74wOe86A7MfTugM4Oi%2FaD69qBQIs19uKo6BO%2BaAeHQFZn51D6rgkRq6%2B%2BBQUcTHXEbYS4uJifXdhz5g2O&X-Amz-Signature=1576c41b7633018ccbcc6f9bad6712c8522da7df1f4e80875907face94b00410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNIOFM6H%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCLmSsvpVAJvUEj13bA0UN0AP6Sr%2BlzCVQYti58oYhZmAIgeggBw92wARS6SB5YbiN2ORieRhxHXjp18xb8yvirR6Iq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBJuKqL%2F3qn7GcbP9SrcA0jK0T04Q9LGSy2NXnfWnAzAJhxuSkE5O0rz0k2uGqf1BfUg2rw09XP1Jq1Q38bQxaydpn8fU2ibzDAtl1vHyUXbMbfFGzPf1rflti%2FUfm%2FEu9q3zFtSxrikdXfSW5VX3FFGFqv0NZm59F0wQ7MXW4%2BIgxqYCmf%2FWvZCljyziqgo8NyCI1evrfanal2s%2BZ2JFHV091r1R1fxFDoGr7h1P23%2B1RwGy3AOWQMemXtCj9IGCz3l0QNEtjydaK8%2FMrQ5ZzYxXKlGi9AMMiT5hEsXBau4V9KhIGAL%2BdTukSz1%2FqwkMTt7Yri%2F7bKzFFyuMmbRm2EWgv20hlFuCNT6m0fo4AXS0YvRDYUVSZOl1oRRdluOTIhrDoI2g66albNPinJCb3sQiT8mLvnWMUrstpSe8FlkL2JIrimkzUZWK4jSGYN0kt2ElW3%2B1qeVSIhU6lNE96lqv4LPI0lUrKqGEFZSSfhYRXjZJ%2B6EV4eCQCoz%2BM0gNDxu%2BoqxAV2jWRpkvH8scLBE9NOfHdK6NU5vXJnjvaJFXJyNpi4nPfuDJDbL9ue8dtw1X4B%2BTgcnoq%2FKs0omoCQAmPQeDfWMcBXb1ALB3Hkp6TuX0iNqok4YCIfMGBhRV2%2FMEAe1KX2oby3lMPX3gMUGOqUB8YYQU9Os5PE0lrhdo%2FmLL4CSWwSe2kRK5g0fbXL4NTuTKCMXqmx%2F1v%2BmzLgdTb2W%2F2K5x%2FP03xksWfHjss2GcMruGg0VBSMmy6SoRcdrJgr%2BGibPlgEStKCJkyH4faWKOE7Cc8G15mniJWfm8fef46yC949w9iqfl1%2FAcUpLWTiy8iD%2FvysadBd1NLdTo5W7vTFXCCuRdILcTTz3gEVrdLG6A7vu&X-Amz-Signature=035e6e6215aed4d1b6067aad5a916951aecccabad736942d2caa808f97967eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDDG3CK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDV2%2Bp%2Bja85mIgGePrpC7rORuBBbjWR26OPRRx2p4jaCAiEAzlAZlcwqza%2Fslgkh%2FdhYnSRrthzhwT6%2FZvUZ4JNcan8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB0c28pJeyXKm%2FykPSrcA4Zyh4D8q9Xz71NqvgYwshGgCWCUSlihtU%2F%2FFYqevb7xvC%2FlU7UTNpJtUHTgd3dP%2FfRCA9QTKFdURlOpz3mxAOh4q5JJXMKdVFsnY%2B6zk5v0afKX3j%2BnpTarKRCdz8WJfT5UY1m%2B7FdqhOSHuZjSYasC89aysCZeeUZwQTns%2FAp9i0RZdDHX4lr3KnHdVs2eGJl5a482yBJWQEbp5XmrPRr5IXQL0wO7f4Sso7gh672L%2BqQSv1DcQSwp4qfsbZB42C5Zl6dxkw7RSoiVlqogTa2ww6bsUxYdX88mdUaLdtUKyUgBzqWKto5bXUJr7tLxIrEVyFL0o9npaxAirgT7gFwkzeGs9K9ZovKkV663TtJCHIBUxd2md%2B1bFzeP0yM2jMyMlU8pkC3NdQ6Kd3v3A2DzSp6%2BbWLipRQfj6Ct%2FusSNpY5GVCiVfYJR20Kad37pqQnhxG7lWfGjdP4bkv6JXS4I32s5zjBJhGTXHH2leiIrv%2FCrk7364xGjbBeYcRPbRslaBy7mDrIeR3hB500By7ONC%2BCPJuymoSEAma8IWmOtbWvQpmXlwMhewWD3dzsKTQvquCSOwWyw6quWHyVQbnLLfWeYAUc6FodKvg9xw%2FbYoVjO6zMtlclPJQ7MKT4gMUGOqUBM8gkr%2FXB0Ri344aKxVFECwCEUF6XPHB7aunU9p4Jl5mR2QeeNX9sx1FlXF%2BRoyyelKZZRK%2BAfjHg8NHChQ9vvq8LagDwppzMfEGQCgQChEDC7dBi1i4qqvm9wBDpRbEeQI4MOS%2Fg4SeaahJ40e58%2B5s1EUy%2F%2F7gJ%2BejaWiMxZXBJ8YOgAY%2BuqnjkpaMLhUBz9zC4JzGuA9hee1rda6Xzy3Ea8s0N&X-Amz-Signature=3f2fc4001963bad7cda58cff82fcff2c5b183b548346954abfac8b3a9dabba22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDDG3CK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDV2%2Bp%2Bja85mIgGePrpC7rORuBBbjWR26OPRRx2p4jaCAiEAzlAZlcwqza%2Fslgkh%2FdhYnSRrthzhwT6%2FZvUZ4JNcan8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB0c28pJeyXKm%2FykPSrcA4Zyh4D8q9Xz71NqvgYwshGgCWCUSlihtU%2F%2FFYqevb7xvC%2FlU7UTNpJtUHTgd3dP%2FfRCA9QTKFdURlOpz3mxAOh4q5JJXMKdVFsnY%2B6zk5v0afKX3j%2BnpTarKRCdz8WJfT5UY1m%2B7FdqhOSHuZjSYasC89aysCZeeUZwQTns%2FAp9i0RZdDHX4lr3KnHdVs2eGJl5a482yBJWQEbp5XmrPRr5IXQL0wO7f4Sso7gh672L%2BqQSv1DcQSwp4qfsbZB42C5Zl6dxkw7RSoiVlqogTa2ww6bsUxYdX88mdUaLdtUKyUgBzqWKto5bXUJr7tLxIrEVyFL0o9npaxAirgT7gFwkzeGs9K9ZovKkV663TtJCHIBUxd2md%2B1bFzeP0yM2jMyMlU8pkC3NdQ6Kd3v3A2DzSp6%2BbWLipRQfj6Ct%2FusSNpY5GVCiVfYJR20Kad37pqQnhxG7lWfGjdP4bkv6JXS4I32s5zjBJhGTXHH2leiIrv%2FCrk7364xGjbBeYcRPbRslaBy7mDrIeR3hB500By7ONC%2BCPJuymoSEAma8IWmOtbWvQpmXlwMhewWD3dzsKTQvquCSOwWyw6quWHyVQbnLLfWeYAUc6FodKvg9xw%2FbYoVjO6zMtlclPJQ7MKT4gMUGOqUBM8gkr%2FXB0Ri344aKxVFECwCEUF6XPHB7aunU9p4Jl5mR2QeeNX9sx1FlXF%2BRoyyelKZZRK%2BAfjHg8NHChQ9vvq8LagDwppzMfEGQCgQChEDC7dBi1i4qqvm9wBDpRbEeQI4MOS%2Fg4SeaahJ40e58%2B5s1EUy%2F%2F7gJ%2BejaWiMxZXBJ8YOgAY%2BuqnjkpaMLhUBz9zC4JzGuA9hee1rda6Xzy3Ea8s0N&X-Amz-Signature=0a75c4d37a26a8a64d806f98015e9f15cfdbe210494191701a589f63f2231610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GHGLDDD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICxLCmqzgVgGal00G17dPntb%2FmrFVrUQk80BrknowNDUAiEAiIgilgryGjp8I7GAM9%2BEbv%2B3PA9LE0zceR7cvpnLSHwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPqvZwbo9rtKUG9u%2FyrcAwejq1k%2BAyt1dnBdPW8%2FX7b1H%2B1jhIfr2bj5pA1YVJEI1Fm%2FIQ6AIcHK78oYZFULROFHGpMbkDYZ1Z%2BYa5HHZWfUBOFOuaq5I7L%2BJ0V5ZAd%2F36ezJyX%2FJ3zDGRhuDtMr7Y0yFeayXzd4WmGZCeVwWyqjd9weL30jtMuQGsW19eKf03oCZYzx5CcnjL0s9BHIlKOh8tF2W4jF4neaAXpOuygqROSQJ9xtYCMAN2qm7ZoHqub%2B0pDejj2HMZL2qju6NHoCnaJlb%2Bz8AbLWWwMPqBF6gzbEFCpXXKb1%2FwthIaZnvEUjLx3dXvByFvcvpPhBNhlv6S4YF8%2FRUD7HDEnsjQOdN3AL%2B6fqwuFc9UHbTreH70F7anvPtZN8hd3FPrrE0kv0isJhk8FmMobdc4QMDwg%2BfTtzHS7RpEZg%2BEwzV9zUJaT2%2BDSvwRSMnBjR7sp32eH4UF49YGVuhhW6NKEm1e4aMsf8vA5zQZ0ttgsAif3z22v%2FO7QDaYq4mqfzM%2BsV6LY%2BIRjKS1ZaW%2B%2FNMG0hfajMSLF17M3sxwZ50s3EyUajU5%2BXkM1qOGMKNts%2BDT1UrPBw1M6vbdnDNt0ax3zztoavTJUkeV%2FH%2Baf3QXcARGi0kJEkxl5axxyeyXS7ML33gMUGOqUBnMv59h63TIpyZEoYk0p6o6%2B74swnI7kvvQesqxKxmYIetfE8DkD%2B%2FbPqlTPdPscgLqntd%2BYi7rOBrVKcV551o56Hm1Kwh1jVLGmDe%2BueO05JeuaNDZbQdQzSkcZlcEl6DQLiqQ9QOzSECYltADnn4BXxgvyN9bWRVUUWMK5tEldDXgzOiqpt49JKEaqIbHpfjKJNMMSg3gFTAVhZCQfSgHzw3P8F&X-Amz-Signature=2f652740cfabd9c4ff93be5deddce63a3e00a26dc57c4a3c59e44f2104a697cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GHGLDDD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICxLCmqzgVgGal00G17dPntb%2FmrFVrUQk80BrknowNDUAiEAiIgilgryGjp8I7GAM9%2BEbv%2B3PA9LE0zceR7cvpnLSHwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPqvZwbo9rtKUG9u%2FyrcAwejq1k%2BAyt1dnBdPW8%2FX7b1H%2B1jhIfr2bj5pA1YVJEI1Fm%2FIQ6AIcHK78oYZFULROFHGpMbkDYZ1Z%2BYa5HHZWfUBOFOuaq5I7L%2BJ0V5ZAd%2F36ezJyX%2FJ3zDGRhuDtMr7Y0yFeayXzd4WmGZCeVwWyqjd9weL30jtMuQGsW19eKf03oCZYzx5CcnjL0s9BHIlKOh8tF2W4jF4neaAXpOuygqROSQJ9xtYCMAN2qm7ZoHqub%2B0pDejj2HMZL2qju6NHoCnaJlb%2Bz8AbLWWwMPqBF6gzbEFCpXXKb1%2FwthIaZnvEUjLx3dXvByFvcvpPhBNhlv6S4YF8%2FRUD7HDEnsjQOdN3AL%2B6fqwuFc9UHbTreH70F7anvPtZN8hd3FPrrE0kv0isJhk8FmMobdc4QMDwg%2BfTtzHS7RpEZg%2BEwzV9zUJaT2%2BDSvwRSMnBjR7sp32eH4UF49YGVuhhW6NKEm1e4aMsf8vA5zQZ0ttgsAif3z22v%2FO7QDaYq4mqfzM%2BsV6LY%2BIRjKS1ZaW%2B%2FNMG0hfajMSLF17M3sxwZ50s3EyUajU5%2BXkM1qOGMKNts%2BDT1UrPBw1M6vbdnDNt0ax3zztoavTJUkeV%2FH%2Baf3QXcARGi0kJEkxl5axxyeyXS7ML33gMUGOqUBnMv59h63TIpyZEoYk0p6o6%2B74swnI7kvvQesqxKxmYIetfE8DkD%2B%2FbPqlTPdPscgLqntd%2BYi7rOBrVKcV551o56Hm1Kwh1jVLGmDe%2BueO05JeuaNDZbQdQzSkcZlcEl6DQLiqQ9QOzSECYltADnn4BXxgvyN9bWRVUUWMK5tEldDXgzOiqpt49JKEaqIbHpfjKJNMMSg3gFTAVhZCQfSgHzw3P8F&X-Amz-Signature=495e25bfed2c667f0ad7e223409eb9c380b75e4832a1d9e6e29bbfc940764451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GHGLDDD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICxLCmqzgVgGal00G17dPntb%2FmrFVrUQk80BrknowNDUAiEAiIgilgryGjp8I7GAM9%2BEbv%2B3PA9LE0zceR7cvpnLSHwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPqvZwbo9rtKUG9u%2FyrcAwejq1k%2BAyt1dnBdPW8%2FX7b1H%2B1jhIfr2bj5pA1YVJEI1Fm%2FIQ6AIcHK78oYZFULROFHGpMbkDYZ1Z%2BYa5HHZWfUBOFOuaq5I7L%2BJ0V5ZAd%2F36ezJyX%2FJ3zDGRhuDtMr7Y0yFeayXzd4WmGZCeVwWyqjd9weL30jtMuQGsW19eKf03oCZYzx5CcnjL0s9BHIlKOh8tF2W4jF4neaAXpOuygqROSQJ9xtYCMAN2qm7ZoHqub%2B0pDejj2HMZL2qju6NHoCnaJlb%2Bz8AbLWWwMPqBF6gzbEFCpXXKb1%2FwthIaZnvEUjLx3dXvByFvcvpPhBNhlv6S4YF8%2FRUD7HDEnsjQOdN3AL%2B6fqwuFc9UHbTreH70F7anvPtZN8hd3FPrrE0kv0isJhk8FmMobdc4QMDwg%2BfTtzHS7RpEZg%2BEwzV9zUJaT2%2BDSvwRSMnBjR7sp32eH4UF49YGVuhhW6NKEm1e4aMsf8vA5zQZ0ttgsAif3z22v%2FO7QDaYq4mqfzM%2BsV6LY%2BIRjKS1ZaW%2B%2FNMG0hfajMSLF17M3sxwZ50s3EyUajU5%2BXkM1qOGMKNts%2BDT1UrPBw1M6vbdnDNt0ax3zztoavTJUkeV%2FH%2Baf3QXcARGi0kJEkxl5axxyeyXS7ML33gMUGOqUBnMv59h63TIpyZEoYk0p6o6%2B74swnI7kvvQesqxKxmYIetfE8DkD%2B%2FbPqlTPdPscgLqntd%2BYi7rOBrVKcV551o56Hm1Kwh1jVLGmDe%2BueO05JeuaNDZbQdQzSkcZlcEl6DQLiqQ9QOzSECYltADnn4BXxgvyN9bWRVUUWMK5tEldDXgzOiqpt49JKEaqIbHpfjKJNMMSg3gFTAVhZCQfSgHzw3P8F&X-Amz-Signature=87c9d296fae6c6c9b0d48b8041e035270f67e59e89aaed8d48b70a12af798512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GHGLDDD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICxLCmqzgVgGal00G17dPntb%2FmrFVrUQk80BrknowNDUAiEAiIgilgryGjp8I7GAM9%2BEbv%2B3PA9LE0zceR7cvpnLSHwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPqvZwbo9rtKUG9u%2FyrcAwejq1k%2BAyt1dnBdPW8%2FX7b1H%2B1jhIfr2bj5pA1YVJEI1Fm%2FIQ6AIcHK78oYZFULROFHGpMbkDYZ1Z%2BYa5HHZWfUBOFOuaq5I7L%2BJ0V5ZAd%2F36ezJyX%2FJ3zDGRhuDtMr7Y0yFeayXzd4WmGZCeVwWyqjd9weL30jtMuQGsW19eKf03oCZYzx5CcnjL0s9BHIlKOh8tF2W4jF4neaAXpOuygqROSQJ9xtYCMAN2qm7ZoHqub%2B0pDejj2HMZL2qju6NHoCnaJlb%2Bz8AbLWWwMPqBF6gzbEFCpXXKb1%2FwthIaZnvEUjLx3dXvByFvcvpPhBNhlv6S4YF8%2FRUD7HDEnsjQOdN3AL%2B6fqwuFc9UHbTreH70F7anvPtZN8hd3FPrrE0kv0isJhk8FmMobdc4QMDwg%2BfTtzHS7RpEZg%2BEwzV9zUJaT2%2BDSvwRSMnBjR7sp32eH4UF49YGVuhhW6NKEm1e4aMsf8vA5zQZ0ttgsAif3z22v%2FO7QDaYq4mqfzM%2BsV6LY%2BIRjKS1ZaW%2B%2FNMG0hfajMSLF17M3sxwZ50s3EyUajU5%2BXkM1qOGMKNts%2BDT1UrPBw1M6vbdnDNt0ax3zztoavTJUkeV%2FH%2Baf3QXcARGi0kJEkxl5axxyeyXS7ML33gMUGOqUBnMv59h63TIpyZEoYk0p6o6%2B74swnI7kvvQesqxKxmYIetfE8DkD%2B%2FbPqlTPdPscgLqntd%2BYi7rOBrVKcV551o56Hm1Kwh1jVLGmDe%2BueO05JeuaNDZbQdQzSkcZlcEl6DQLiqQ9QOzSECYltADnn4BXxgvyN9bWRVUUWMK5tEldDXgzOiqpt49JKEaqIbHpfjKJNMMSg3gFTAVhZCQfSgHzw3P8F&X-Amz-Signature=bb990a8af84a147b580dfb5bd580f0b871f469076a7a07be0c0d951794ec8cce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GHGLDDD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICxLCmqzgVgGal00G17dPntb%2FmrFVrUQk80BrknowNDUAiEAiIgilgryGjp8I7GAM9%2BEbv%2B3PA9LE0zceR7cvpnLSHwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPqvZwbo9rtKUG9u%2FyrcAwejq1k%2BAyt1dnBdPW8%2FX7b1H%2B1jhIfr2bj5pA1YVJEI1Fm%2FIQ6AIcHK78oYZFULROFHGpMbkDYZ1Z%2BYa5HHZWfUBOFOuaq5I7L%2BJ0V5ZAd%2F36ezJyX%2FJ3zDGRhuDtMr7Y0yFeayXzd4WmGZCeVwWyqjd9weL30jtMuQGsW19eKf03oCZYzx5CcnjL0s9BHIlKOh8tF2W4jF4neaAXpOuygqROSQJ9xtYCMAN2qm7ZoHqub%2B0pDejj2HMZL2qju6NHoCnaJlb%2Bz8AbLWWwMPqBF6gzbEFCpXXKb1%2FwthIaZnvEUjLx3dXvByFvcvpPhBNhlv6S4YF8%2FRUD7HDEnsjQOdN3AL%2B6fqwuFc9UHbTreH70F7anvPtZN8hd3FPrrE0kv0isJhk8FmMobdc4QMDwg%2BfTtzHS7RpEZg%2BEwzV9zUJaT2%2BDSvwRSMnBjR7sp32eH4UF49YGVuhhW6NKEm1e4aMsf8vA5zQZ0ttgsAif3z22v%2FO7QDaYq4mqfzM%2BsV6LY%2BIRjKS1ZaW%2B%2FNMG0hfajMSLF17M3sxwZ50s3EyUajU5%2BXkM1qOGMKNts%2BDT1UrPBw1M6vbdnDNt0ax3zztoavTJUkeV%2FH%2Baf3QXcARGi0kJEkxl5axxyeyXS7ML33gMUGOqUBnMv59h63TIpyZEoYk0p6o6%2B74swnI7kvvQesqxKxmYIetfE8DkD%2B%2FbPqlTPdPscgLqntd%2BYi7rOBrVKcV551o56Hm1Kwh1jVLGmDe%2BueO05JeuaNDZbQdQzSkcZlcEl6DQLiqQ9QOzSECYltADnn4BXxgvyN9bWRVUUWMK5tEldDXgzOiqpt49JKEaqIbHpfjKJNMMSg3gFTAVhZCQfSgHzw3P8F&X-Amz-Signature=70ea6b71dc482ff7cfa11cb003399efff90e001763629474d7b971cd8dae20b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GHGLDDD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICxLCmqzgVgGal00G17dPntb%2FmrFVrUQk80BrknowNDUAiEAiIgilgryGjp8I7GAM9%2BEbv%2B3PA9LE0zceR7cvpnLSHwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPqvZwbo9rtKUG9u%2FyrcAwejq1k%2BAyt1dnBdPW8%2FX7b1H%2B1jhIfr2bj5pA1YVJEI1Fm%2FIQ6AIcHK78oYZFULROFHGpMbkDYZ1Z%2BYa5HHZWfUBOFOuaq5I7L%2BJ0V5ZAd%2F36ezJyX%2FJ3zDGRhuDtMr7Y0yFeayXzd4WmGZCeVwWyqjd9weL30jtMuQGsW19eKf03oCZYzx5CcnjL0s9BHIlKOh8tF2W4jF4neaAXpOuygqROSQJ9xtYCMAN2qm7ZoHqub%2B0pDejj2HMZL2qju6NHoCnaJlb%2Bz8AbLWWwMPqBF6gzbEFCpXXKb1%2FwthIaZnvEUjLx3dXvByFvcvpPhBNhlv6S4YF8%2FRUD7HDEnsjQOdN3AL%2B6fqwuFc9UHbTreH70F7anvPtZN8hd3FPrrE0kv0isJhk8FmMobdc4QMDwg%2BfTtzHS7RpEZg%2BEwzV9zUJaT2%2BDSvwRSMnBjR7sp32eH4UF49YGVuhhW6NKEm1e4aMsf8vA5zQZ0ttgsAif3z22v%2FO7QDaYq4mqfzM%2BsV6LY%2BIRjKS1ZaW%2B%2FNMG0hfajMSLF17M3sxwZ50s3EyUajU5%2BXkM1qOGMKNts%2BDT1UrPBw1M6vbdnDNt0ax3zztoavTJUkeV%2FH%2Baf3QXcARGi0kJEkxl5axxyeyXS7ML33gMUGOqUBnMv59h63TIpyZEoYk0p6o6%2B74swnI7kvvQesqxKxmYIetfE8DkD%2B%2FbPqlTPdPscgLqntd%2BYi7rOBrVKcV551o56Hm1Kwh1jVLGmDe%2BueO05JeuaNDZbQdQzSkcZlcEl6DQLiqQ9QOzSECYltADnn4BXxgvyN9bWRVUUWMK5tEldDXgzOiqpt49JKEaqIbHpfjKJNMMSg3gFTAVhZCQfSgHzw3P8F&X-Amz-Signature=9a2f9adb928a682252c6dad006932926c190b044537faf1c7c260daa4a3ed4c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GHGLDDD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICxLCmqzgVgGal00G17dPntb%2FmrFVrUQk80BrknowNDUAiEAiIgilgryGjp8I7GAM9%2BEbv%2B3PA9LE0zceR7cvpnLSHwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPqvZwbo9rtKUG9u%2FyrcAwejq1k%2BAyt1dnBdPW8%2FX7b1H%2B1jhIfr2bj5pA1YVJEI1Fm%2FIQ6AIcHK78oYZFULROFHGpMbkDYZ1Z%2BYa5HHZWfUBOFOuaq5I7L%2BJ0V5ZAd%2F36ezJyX%2FJ3zDGRhuDtMr7Y0yFeayXzd4WmGZCeVwWyqjd9weL30jtMuQGsW19eKf03oCZYzx5CcnjL0s9BHIlKOh8tF2W4jF4neaAXpOuygqROSQJ9xtYCMAN2qm7ZoHqub%2B0pDejj2HMZL2qju6NHoCnaJlb%2Bz8AbLWWwMPqBF6gzbEFCpXXKb1%2FwthIaZnvEUjLx3dXvByFvcvpPhBNhlv6S4YF8%2FRUD7HDEnsjQOdN3AL%2B6fqwuFc9UHbTreH70F7anvPtZN8hd3FPrrE0kv0isJhk8FmMobdc4QMDwg%2BfTtzHS7RpEZg%2BEwzV9zUJaT2%2BDSvwRSMnBjR7sp32eH4UF49YGVuhhW6NKEm1e4aMsf8vA5zQZ0ttgsAif3z22v%2FO7QDaYq4mqfzM%2BsV6LY%2BIRjKS1ZaW%2B%2FNMG0hfajMSLF17M3sxwZ50s3EyUajU5%2BXkM1qOGMKNts%2BDT1UrPBw1M6vbdnDNt0ax3zztoavTJUkeV%2FH%2Baf3QXcARGi0kJEkxl5axxyeyXS7ML33gMUGOqUBnMv59h63TIpyZEoYk0p6o6%2B74swnI7kvvQesqxKxmYIetfE8DkD%2B%2FbPqlTPdPscgLqntd%2BYi7rOBrVKcV551o56Hm1Kwh1jVLGmDe%2BueO05JeuaNDZbQdQzSkcZlcEl6DQLiqQ9QOzSECYltADnn4BXxgvyN9bWRVUUWMK5tEldDXgzOiqpt49JKEaqIbHpfjKJNMMSg3gFTAVhZCQfSgHzw3P8F&X-Amz-Signature=87c9d296fae6c6c9b0d48b8041e035270f67e59e89aaed8d48b70a12af798512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GHGLDDD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICxLCmqzgVgGal00G17dPntb%2FmrFVrUQk80BrknowNDUAiEAiIgilgryGjp8I7GAM9%2BEbv%2B3PA9LE0zceR7cvpnLSHwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPqvZwbo9rtKUG9u%2FyrcAwejq1k%2BAyt1dnBdPW8%2FX7b1H%2B1jhIfr2bj5pA1YVJEI1Fm%2FIQ6AIcHK78oYZFULROFHGpMbkDYZ1Z%2BYa5HHZWfUBOFOuaq5I7L%2BJ0V5ZAd%2F36ezJyX%2FJ3zDGRhuDtMr7Y0yFeayXzd4WmGZCeVwWyqjd9weL30jtMuQGsW19eKf03oCZYzx5CcnjL0s9BHIlKOh8tF2W4jF4neaAXpOuygqROSQJ9xtYCMAN2qm7ZoHqub%2B0pDejj2HMZL2qju6NHoCnaJlb%2Bz8AbLWWwMPqBF6gzbEFCpXXKb1%2FwthIaZnvEUjLx3dXvByFvcvpPhBNhlv6S4YF8%2FRUD7HDEnsjQOdN3AL%2B6fqwuFc9UHbTreH70F7anvPtZN8hd3FPrrE0kv0isJhk8FmMobdc4QMDwg%2BfTtzHS7RpEZg%2BEwzV9zUJaT2%2BDSvwRSMnBjR7sp32eH4UF49YGVuhhW6NKEm1e4aMsf8vA5zQZ0ttgsAif3z22v%2FO7QDaYq4mqfzM%2BsV6LY%2BIRjKS1ZaW%2B%2FNMG0hfajMSLF17M3sxwZ50s3EyUajU5%2BXkM1qOGMKNts%2BDT1UrPBw1M6vbdnDNt0ax3zztoavTJUkeV%2FH%2Baf3QXcARGi0kJEkxl5axxyeyXS7ML33gMUGOqUBnMv59h63TIpyZEoYk0p6o6%2B74swnI7kvvQesqxKxmYIetfE8DkD%2B%2FbPqlTPdPscgLqntd%2BYi7rOBrVKcV551o56Hm1Kwh1jVLGmDe%2BueO05JeuaNDZbQdQzSkcZlcEl6DQLiqQ9QOzSECYltADnn4BXxgvyN9bWRVUUWMK5tEldDXgzOiqpt49JKEaqIbHpfjKJNMMSg3gFTAVhZCQfSgHzw3P8F&X-Amz-Signature=d9a6bf5768e50fdddc6748d037bc5a7eb799531cbbce242159cc31730f0b8419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GHGLDDD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICxLCmqzgVgGal00G17dPntb%2FmrFVrUQk80BrknowNDUAiEAiIgilgryGjp8I7GAM9%2BEbv%2B3PA9LE0zceR7cvpnLSHwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPqvZwbo9rtKUG9u%2FyrcAwejq1k%2BAyt1dnBdPW8%2FX7b1H%2B1jhIfr2bj5pA1YVJEI1Fm%2FIQ6AIcHK78oYZFULROFHGpMbkDYZ1Z%2BYa5HHZWfUBOFOuaq5I7L%2BJ0V5ZAd%2F36ezJyX%2FJ3zDGRhuDtMr7Y0yFeayXzd4WmGZCeVwWyqjd9weL30jtMuQGsW19eKf03oCZYzx5CcnjL0s9BHIlKOh8tF2W4jF4neaAXpOuygqROSQJ9xtYCMAN2qm7ZoHqub%2B0pDejj2HMZL2qju6NHoCnaJlb%2Bz8AbLWWwMPqBF6gzbEFCpXXKb1%2FwthIaZnvEUjLx3dXvByFvcvpPhBNhlv6S4YF8%2FRUD7HDEnsjQOdN3AL%2B6fqwuFc9UHbTreH70F7anvPtZN8hd3FPrrE0kv0isJhk8FmMobdc4QMDwg%2BfTtzHS7RpEZg%2BEwzV9zUJaT2%2BDSvwRSMnBjR7sp32eH4UF49YGVuhhW6NKEm1e4aMsf8vA5zQZ0ttgsAif3z22v%2FO7QDaYq4mqfzM%2BsV6LY%2BIRjKS1ZaW%2B%2FNMG0hfajMSLF17M3sxwZ50s3EyUajU5%2BXkM1qOGMKNts%2BDT1UrPBw1M6vbdnDNt0ax3zztoavTJUkeV%2FH%2Baf3QXcARGi0kJEkxl5axxyeyXS7ML33gMUGOqUBnMv59h63TIpyZEoYk0p6o6%2B74swnI7kvvQesqxKxmYIetfE8DkD%2B%2FbPqlTPdPscgLqntd%2BYi7rOBrVKcV551o56Hm1Kwh1jVLGmDe%2BueO05JeuaNDZbQdQzSkcZlcEl6DQLiqQ9QOzSECYltADnn4BXxgvyN9bWRVUUWMK5tEldDXgzOiqpt49JKEaqIbHpfjKJNMMSg3gFTAVhZCQfSgHzw3P8F&X-Amz-Signature=8df9316419e9c2c3590dc3d4ba969a8e9ea14978c69f544b2451b559958211c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GHGLDDD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICxLCmqzgVgGal00G17dPntb%2FmrFVrUQk80BrknowNDUAiEAiIgilgryGjp8I7GAM9%2BEbv%2B3PA9LE0zceR7cvpnLSHwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPqvZwbo9rtKUG9u%2FyrcAwejq1k%2BAyt1dnBdPW8%2FX7b1H%2B1jhIfr2bj5pA1YVJEI1Fm%2FIQ6AIcHK78oYZFULROFHGpMbkDYZ1Z%2BYa5HHZWfUBOFOuaq5I7L%2BJ0V5ZAd%2F36ezJyX%2FJ3zDGRhuDtMr7Y0yFeayXzd4WmGZCeVwWyqjd9weL30jtMuQGsW19eKf03oCZYzx5CcnjL0s9BHIlKOh8tF2W4jF4neaAXpOuygqROSQJ9xtYCMAN2qm7ZoHqub%2B0pDejj2HMZL2qju6NHoCnaJlb%2Bz8AbLWWwMPqBF6gzbEFCpXXKb1%2FwthIaZnvEUjLx3dXvByFvcvpPhBNhlv6S4YF8%2FRUD7HDEnsjQOdN3AL%2B6fqwuFc9UHbTreH70F7anvPtZN8hd3FPrrE0kv0isJhk8FmMobdc4QMDwg%2BfTtzHS7RpEZg%2BEwzV9zUJaT2%2BDSvwRSMnBjR7sp32eH4UF49YGVuhhW6NKEm1e4aMsf8vA5zQZ0ttgsAif3z22v%2FO7QDaYq4mqfzM%2BsV6LY%2BIRjKS1ZaW%2B%2FNMG0hfajMSLF17M3sxwZ50s3EyUajU5%2BXkM1qOGMKNts%2BDT1UrPBw1M6vbdnDNt0ax3zztoavTJUkeV%2FH%2Baf3QXcARGi0kJEkxl5axxyeyXS7ML33gMUGOqUBnMv59h63TIpyZEoYk0p6o6%2B74swnI7kvvQesqxKxmYIetfE8DkD%2B%2FbPqlTPdPscgLqntd%2BYi7rOBrVKcV551o56Hm1Kwh1jVLGmDe%2BueO05JeuaNDZbQdQzSkcZlcEl6DQLiqQ9QOzSECYltADnn4BXxgvyN9bWRVUUWMK5tEldDXgzOiqpt49JKEaqIbHpfjKJNMMSg3gFTAVhZCQfSgHzw3P8F&X-Amz-Signature=2199b88272e7c4fefebadf57e195df142c4f09727b789ff344afa6aca2ca4081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
