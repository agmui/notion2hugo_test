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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDL32TZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIErwE8ScDUksi%2By5701VUli04pvM%2BLrkjmqxOAro6phiAiEAm5bPTVg2jpyhFeSL6o39Sg7Vd13T4FrQJn7zTKau2%2FUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGcA0hVixWOUY7oxQSrcA8Oi1aSh5LnhpZlaruX6ffyuPR8CVShgL%2FSt5LqnWyQAzUadmjqZ%2BN0pN1QNyMyO4BLv%2FSnsU08JiCOQz7Egux0PKakCEJ1VE%2F%2Fom%2FZOR4Saue9xdL%2FcmcM6e6prgXOyfHdx6HA%2FyQFj%2B9aAE5w0BhzE9qac6Wqsl4ZNlcw%2BysJPEoiT5u3h%2FDzpqcBePVs7vcWRMhEYFrPbd75oz00ymaftwRndIHeWl9Vpf6%2F1aitJZr3CCZfvDTWb8bbLGF0kNtQ0RF5EWNUyoA833N5EP0%2BtOG7fQJPDBEsuZu%2FmXo7aPygQMZlmPxpDhVUBYimkxEyfgTXu6oP25BE7h9YJo4%2FbziKDIWhEI0QI4B%2FsS5ZLuCD184N6vpXdcCQIoq2AFjg%2BHlGbjTB9krQtpUrSwBxSaKLhI8qEKfNAEmnHDxPK7FVpqgGSU5ClZcCaVX5T8b3vxlGtFXaAbSgn7zcCuNfwK6h5Rvm4sh7a71qLzZgShZnrb%2FNU8e0a%2FD%2F6GkVTzWN8WbNhJowiFrGYQcTCLgY3PD3HN%2FnuqjuHqsY7NzIisJ8Zoj1vQSGe7AeZo2iIjhNw%2FJQB%2BMY8G1YDuDdtoWUJTUWngNR98G11LE8jRcoRxLkaFHeFHlM4idD7MMnC%2BMQGOqUBKrs1l6bcRPEHkfaBpLAuA%2FPx6rZVhbnkrmiDOxL6C4n9TrDJaUQk6JLCaGstXyqQOrW1WSA8%2Bc2WmOA5LH%2FOk724p%2FiCaO%2BS2oV8emS1syVMh0kh1Aby%2Fb5Scd%2BKUeCnvFZBZGLjVhpJU%2FA33%2BJmoHVimDGqltA1KG7voPfB%2F05v%2FAHxWitDQjqIrPiX7p10BHdT0hOHu7FvTSUa4vXEaYUuUUh%2F&X-Amz-Signature=aef34f8490cea5721e63a545ff295dd7778fb3fdb53b5e6d20731ef400e4dd78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDL32TZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIErwE8ScDUksi%2By5701VUli04pvM%2BLrkjmqxOAro6phiAiEAm5bPTVg2jpyhFeSL6o39Sg7Vd13T4FrQJn7zTKau2%2FUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGcA0hVixWOUY7oxQSrcA8Oi1aSh5LnhpZlaruX6ffyuPR8CVShgL%2FSt5LqnWyQAzUadmjqZ%2BN0pN1QNyMyO4BLv%2FSnsU08JiCOQz7Egux0PKakCEJ1VE%2F%2Fom%2FZOR4Saue9xdL%2FcmcM6e6prgXOyfHdx6HA%2FyQFj%2B9aAE5w0BhzE9qac6Wqsl4ZNlcw%2BysJPEoiT5u3h%2FDzpqcBePVs7vcWRMhEYFrPbd75oz00ymaftwRndIHeWl9Vpf6%2F1aitJZr3CCZfvDTWb8bbLGF0kNtQ0RF5EWNUyoA833N5EP0%2BtOG7fQJPDBEsuZu%2FmXo7aPygQMZlmPxpDhVUBYimkxEyfgTXu6oP25BE7h9YJo4%2FbziKDIWhEI0QI4B%2FsS5ZLuCD184N6vpXdcCQIoq2AFjg%2BHlGbjTB9krQtpUrSwBxSaKLhI8qEKfNAEmnHDxPK7FVpqgGSU5ClZcCaVX5T8b3vxlGtFXaAbSgn7zcCuNfwK6h5Rvm4sh7a71qLzZgShZnrb%2FNU8e0a%2FD%2F6GkVTzWN8WbNhJowiFrGYQcTCLgY3PD3HN%2FnuqjuHqsY7NzIisJ8Zoj1vQSGe7AeZo2iIjhNw%2FJQB%2BMY8G1YDuDdtoWUJTUWngNR98G11LE8jRcoRxLkaFHeFHlM4idD7MMnC%2BMQGOqUBKrs1l6bcRPEHkfaBpLAuA%2FPx6rZVhbnkrmiDOxL6C4n9TrDJaUQk6JLCaGstXyqQOrW1WSA8%2Bc2WmOA5LH%2FOk724p%2FiCaO%2BS2oV8emS1syVMh0kh1Aby%2Fb5Scd%2BKUeCnvFZBZGLjVhpJU%2FA33%2BJmoHVimDGqltA1KG7voPfB%2F05v%2FAHxWitDQjqIrPiX7p10BHdT0hOHu7FvTSUa4vXEaYUuUUh%2F&X-Amz-Signature=394506f488792d34fb8d33df2a0ac9072182d2992b93105275ed1a6cd608eb59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDL32TZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIErwE8ScDUksi%2By5701VUli04pvM%2BLrkjmqxOAro6phiAiEAm5bPTVg2jpyhFeSL6o39Sg7Vd13T4FrQJn7zTKau2%2FUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGcA0hVixWOUY7oxQSrcA8Oi1aSh5LnhpZlaruX6ffyuPR8CVShgL%2FSt5LqnWyQAzUadmjqZ%2BN0pN1QNyMyO4BLv%2FSnsU08JiCOQz7Egux0PKakCEJ1VE%2F%2Fom%2FZOR4Saue9xdL%2FcmcM6e6prgXOyfHdx6HA%2FyQFj%2B9aAE5w0BhzE9qac6Wqsl4ZNlcw%2BysJPEoiT5u3h%2FDzpqcBePVs7vcWRMhEYFrPbd75oz00ymaftwRndIHeWl9Vpf6%2F1aitJZr3CCZfvDTWb8bbLGF0kNtQ0RF5EWNUyoA833N5EP0%2BtOG7fQJPDBEsuZu%2FmXo7aPygQMZlmPxpDhVUBYimkxEyfgTXu6oP25BE7h9YJo4%2FbziKDIWhEI0QI4B%2FsS5ZLuCD184N6vpXdcCQIoq2AFjg%2BHlGbjTB9krQtpUrSwBxSaKLhI8qEKfNAEmnHDxPK7FVpqgGSU5ClZcCaVX5T8b3vxlGtFXaAbSgn7zcCuNfwK6h5Rvm4sh7a71qLzZgShZnrb%2FNU8e0a%2FD%2F6GkVTzWN8WbNhJowiFrGYQcTCLgY3PD3HN%2FnuqjuHqsY7NzIisJ8Zoj1vQSGe7AeZo2iIjhNw%2FJQB%2BMY8G1YDuDdtoWUJTUWngNR98G11LE8jRcoRxLkaFHeFHlM4idD7MMnC%2BMQGOqUBKrs1l6bcRPEHkfaBpLAuA%2FPx6rZVhbnkrmiDOxL6C4n9TrDJaUQk6JLCaGstXyqQOrW1WSA8%2Bc2WmOA5LH%2FOk724p%2FiCaO%2BS2oV8emS1syVMh0kh1Aby%2Fb5Scd%2BKUeCnvFZBZGLjVhpJU%2FA33%2BJmoHVimDGqltA1KG7voPfB%2F05v%2FAHxWitDQjqIrPiX7p10BHdT0hOHu7FvTSUa4vXEaYUuUUh%2F&X-Amz-Signature=3a37538b2d1fb152b37bd4d82ba81d9d4f76a43a32e403963a29168decde7f66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDL32TZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIErwE8ScDUksi%2By5701VUli04pvM%2BLrkjmqxOAro6phiAiEAm5bPTVg2jpyhFeSL6o39Sg7Vd13T4FrQJn7zTKau2%2FUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGcA0hVixWOUY7oxQSrcA8Oi1aSh5LnhpZlaruX6ffyuPR8CVShgL%2FSt5LqnWyQAzUadmjqZ%2BN0pN1QNyMyO4BLv%2FSnsU08JiCOQz7Egux0PKakCEJ1VE%2F%2Fom%2FZOR4Saue9xdL%2FcmcM6e6prgXOyfHdx6HA%2FyQFj%2B9aAE5w0BhzE9qac6Wqsl4ZNlcw%2BysJPEoiT5u3h%2FDzpqcBePVs7vcWRMhEYFrPbd75oz00ymaftwRndIHeWl9Vpf6%2F1aitJZr3CCZfvDTWb8bbLGF0kNtQ0RF5EWNUyoA833N5EP0%2BtOG7fQJPDBEsuZu%2FmXo7aPygQMZlmPxpDhVUBYimkxEyfgTXu6oP25BE7h9YJo4%2FbziKDIWhEI0QI4B%2FsS5ZLuCD184N6vpXdcCQIoq2AFjg%2BHlGbjTB9krQtpUrSwBxSaKLhI8qEKfNAEmnHDxPK7FVpqgGSU5ClZcCaVX5T8b3vxlGtFXaAbSgn7zcCuNfwK6h5Rvm4sh7a71qLzZgShZnrb%2FNU8e0a%2FD%2F6GkVTzWN8WbNhJowiFrGYQcTCLgY3PD3HN%2FnuqjuHqsY7NzIisJ8Zoj1vQSGe7AeZo2iIjhNw%2FJQB%2BMY8G1YDuDdtoWUJTUWngNR98G11LE8jRcoRxLkaFHeFHlM4idD7MMnC%2BMQGOqUBKrs1l6bcRPEHkfaBpLAuA%2FPx6rZVhbnkrmiDOxL6C4n9TrDJaUQk6JLCaGstXyqQOrW1WSA8%2Bc2WmOA5LH%2FOk724p%2FiCaO%2BS2oV8emS1syVMh0kh1Aby%2Fb5Scd%2BKUeCnvFZBZGLjVhpJU%2FA33%2BJmoHVimDGqltA1KG7voPfB%2F05v%2FAHxWitDQjqIrPiX7p10BHdT0hOHu7FvTSUa4vXEaYUuUUh%2F&X-Amz-Signature=eb4bc2fb332f5d99b90a12ca6224986347536243776b6d6b22ca024d56857015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDL32TZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIErwE8ScDUksi%2By5701VUli04pvM%2BLrkjmqxOAro6phiAiEAm5bPTVg2jpyhFeSL6o39Sg7Vd13T4FrQJn7zTKau2%2FUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGcA0hVixWOUY7oxQSrcA8Oi1aSh5LnhpZlaruX6ffyuPR8CVShgL%2FSt5LqnWyQAzUadmjqZ%2BN0pN1QNyMyO4BLv%2FSnsU08JiCOQz7Egux0PKakCEJ1VE%2F%2Fom%2FZOR4Saue9xdL%2FcmcM6e6prgXOyfHdx6HA%2FyQFj%2B9aAE5w0BhzE9qac6Wqsl4ZNlcw%2BysJPEoiT5u3h%2FDzpqcBePVs7vcWRMhEYFrPbd75oz00ymaftwRndIHeWl9Vpf6%2F1aitJZr3CCZfvDTWb8bbLGF0kNtQ0RF5EWNUyoA833N5EP0%2BtOG7fQJPDBEsuZu%2FmXo7aPygQMZlmPxpDhVUBYimkxEyfgTXu6oP25BE7h9YJo4%2FbziKDIWhEI0QI4B%2FsS5ZLuCD184N6vpXdcCQIoq2AFjg%2BHlGbjTB9krQtpUrSwBxSaKLhI8qEKfNAEmnHDxPK7FVpqgGSU5ClZcCaVX5T8b3vxlGtFXaAbSgn7zcCuNfwK6h5Rvm4sh7a71qLzZgShZnrb%2FNU8e0a%2FD%2F6GkVTzWN8WbNhJowiFrGYQcTCLgY3PD3HN%2FnuqjuHqsY7NzIisJ8Zoj1vQSGe7AeZo2iIjhNw%2FJQB%2BMY8G1YDuDdtoWUJTUWngNR98G11LE8jRcoRxLkaFHeFHlM4idD7MMnC%2BMQGOqUBKrs1l6bcRPEHkfaBpLAuA%2FPx6rZVhbnkrmiDOxL6C4n9TrDJaUQk6JLCaGstXyqQOrW1WSA8%2Bc2WmOA5LH%2FOk724p%2FiCaO%2BS2oV8emS1syVMh0kh1Aby%2Fb5Scd%2BKUeCnvFZBZGLjVhpJU%2FA33%2BJmoHVimDGqltA1KG7voPfB%2F05v%2FAHxWitDQjqIrPiX7p10BHdT0hOHu7FvTSUa4vXEaYUuUUh%2F&X-Amz-Signature=5acd46b03245505a4195fe06401d4473b1e48389818c7b7dd26357da24af784a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDL32TZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIErwE8ScDUksi%2By5701VUli04pvM%2BLrkjmqxOAro6phiAiEAm5bPTVg2jpyhFeSL6o39Sg7Vd13T4FrQJn7zTKau2%2FUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGcA0hVixWOUY7oxQSrcA8Oi1aSh5LnhpZlaruX6ffyuPR8CVShgL%2FSt5LqnWyQAzUadmjqZ%2BN0pN1QNyMyO4BLv%2FSnsU08JiCOQz7Egux0PKakCEJ1VE%2F%2Fom%2FZOR4Saue9xdL%2FcmcM6e6prgXOyfHdx6HA%2FyQFj%2B9aAE5w0BhzE9qac6Wqsl4ZNlcw%2BysJPEoiT5u3h%2FDzpqcBePVs7vcWRMhEYFrPbd75oz00ymaftwRndIHeWl9Vpf6%2F1aitJZr3CCZfvDTWb8bbLGF0kNtQ0RF5EWNUyoA833N5EP0%2BtOG7fQJPDBEsuZu%2FmXo7aPygQMZlmPxpDhVUBYimkxEyfgTXu6oP25BE7h9YJo4%2FbziKDIWhEI0QI4B%2FsS5ZLuCD184N6vpXdcCQIoq2AFjg%2BHlGbjTB9krQtpUrSwBxSaKLhI8qEKfNAEmnHDxPK7FVpqgGSU5ClZcCaVX5T8b3vxlGtFXaAbSgn7zcCuNfwK6h5Rvm4sh7a71qLzZgShZnrb%2FNU8e0a%2FD%2F6GkVTzWN8WbNhJowiFrGYQcTCLgY3PD3HN%2FnuqjuHqsY7NzIisJ8Zoj1vQSGe7AeZo2iIjhNw%2FJQB%2BMY8G1YDuDdtoWUJTUWngNR98G11LE8jRcoRxLkaFHeFHlM4idD7MMnC%2BMQGOqUBKrs1l6bcRPEHkfaBpLAuA%2FPx6rZVhbnkrmiDOxL6C4n9TrDJaUQk6JLCaGstXyqQOrW1WSA8%2Bc2WmOA5LH%2FOk724p%2FiCaO%2BS2oV8emS1syVMh0kh1Aby%2Fb5Scd%2BKUeCnvFZBZGLjVhpJU%2FA33%2BJmoHVimDGqltA1KG7voPfB%2F05v%2FAHxWitDQjqIrPiX7p10BHdT0hOHu7FvTSUa4vXEaYUuUUh%2F&X-Amz-Signature=462cd4181e6b92191d4b92f3279fe1159c697f232753f610296f253d67b9288d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDL32TZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIErwE8ScDUksi%2By5701VUli04pvM%2BLrkjmqxOAro6phiAiEAm5bPTVg2jpyhFeSL6o39Sg7Vd13T4FrQJn7zTKau2%2FUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGcA0hVixWOUY7oxQSrcA8Oi1aSh5LnhpZlaruX6ffyuPR8CVShgL%2FSt5LqnWyQAzUadmjqZ%2BN0pN1QNyMyO4BLv%2FSnsU08JiCOQz7Egux0PKakCEJ1VE%2F%2Fom%2FZOR4Saue9xdL%2FcmcM6e6prgXOyfHdx6HA%2FyQFj%2B9aAE5w0BhzE9qac6Wqsl4ZNlcw%2BysJPEoiT5u3h%2FDzpqcBePVs7vcWRMhEYFrPbd75oz00ymaftwRndIHeWl9Vpf6%2F1aitJZr3CCZfvDTWb8bbLGF0kNtQ0RF5EWNUyoA833N5EP0%2BtOG7fQJPDBEsuZu%2FmXo7aPygQMZlmPxpDhVUBYimkxEyfgTXu6oP25BE7h9YJo4%2FbziKDIWhEI0QI4B%2FsS5ZLuCD184N6vpXdcCQIoq2AFjg%2BHlGbjTB9krQtpUrSwBxSaKLhI8qEKfNAEmnHDxPK7FVpqgGSU5ClZcCaVX5T8b3vxlGtFXaAbSgn7zcCuNfwK6h5Rvm4sh7a71qLzZgShZnrb%2FNU8e0a%2FD%2F6GkVTzWN8WbNhJowiFrGYQcTCLgY3PD3HN%2FnuqjuHqsY7NzIisJ8Zoj1vQSGe7AeZo2iIjhNw%2FJQB%2BMY8G1YDuDdtoWUJTUWngNR98G11LE8jRcoRxLkaFHeFHlM4idD7MMnC%2BMQGOqUBKrs1l6bcRPEHkfaBpLAuA%2FPx6rZVhbnkrmiDOxL6C4n9TrDJaUQk6JLCaGstXyqQOrW1WSA8%2Bc2WmOA5LH%2FOk724p%2FiCaO%2BS2oV8emS1syVMh0kh1Aby%2Fb5Scd%2BKUeCnvFZBZGLjVhpJU%2FA33%2BJmoHVimDGqltA1KG7voPfB%2F05v%2FAHxWitDQjqIrPiX7p10BHdT0hOHu7FvTSUa4vXEaYUuUUh%2F&X-Amz-Signature=ed2a0a90f21da3fb22a9e59914250359dcda313b45653210daffeaed55e70b1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDL32TZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIErwE8ScDUksi%2By5701VUli04pvM%2BLrkjmqxOAro6phiAiEAm5bPTVg2jpyhFeSL6o39Sg7Vd13T4FrQJn7zTKau2%2FUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGcA0hVixWOUY7oxQSrcA8Oi1aSh5LnhpZlaruX6ffyuPR8CVShgL%2FSt5LqnWyQAzUadmjqZ%2BN0pN1QNyMyO4BLv%2FSnsU08JiCOQz7Egux0PKakCEJ1VE%2F%2Fom%2FZOR4Saue9xdL%2FcmcM6e6prgXOyfHdx6HA%2FyQFj%2B9aAE5w0BhzE9qac6Wqsl4ZNlcw%2BysJPEoiT5u3h%2FDzpqcBePVs7vcWRMhEYFrPbd75oz00ymaftwRndIHeWl9Vpf6%2F1aitJZr3CCZfvDTWb8bbLGF0kNtQ0RF5EWNUyoA833N5EP0%2BtOG7fQJPDBEsuZu%2FmXo7aPygQMZlmPxpDhVUBYimkxEyfgTXu6oP25BE7h9YJo4%2FbziKDIWhEI0QI4B%2FsS5ZLuCD184N6vpXdcCQIoq2AFjg%2BHlGbjTB9krQtpUrSwBxSaKLhI8qEKfNAEmnHDxPK7FVpqgGSU5ClZcCaVX5T8b3vxlGtFXaAbSgn7zcCuNfwK6h5Rvm4sh7a71qLzZgShZnrb%2FNU8e0a%2FD%2F6GkVTzWN8WbNhJowiFrGYQcTCLgY3PD3HN%2FnuqjuHqsY7NzIisJ8Zoj1vQSGe7AeZo2iIjhNw%2FJQB%2BMY8G1YDuDdtoWUJTUWngNR98G11LE8jRcoRxLkaFHeFHlM4idD7MMnC%2BMQGOqUBKrs1l6bcRPEHkfaBpLAuA%2FPx6rZVhbnkrmiDOxL6C4n9TrDJaUQk6JLCaGstXyqQOrW1WSA8%2Bc2WmOA5LH%2FOk724p%2FiCaO%2BS2oV8emS1syVMh0kh1Aby%2Fb5Scd%2BKUeCnvFZBZGLjVhpJU%2FA33%2BJmoHVimDGqltA1KG7voPfB%2F05v%2FAHxWitDQjqIrPiX7p10BHdT0hOHu7FvTSUa4vXEaYUuUUh%2F&X-Amz-Signature=9f634447daf7cddbb2f0a3bf9e305ab9d673070d9897be62953f4091fffb008e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDL32TZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIErwE8ScDUksi%2By5701VUli04pvM%2BLrkjmqxOAro6phiAiEAm5bPTVg2jpyhFeSL6o39Sg7Vd13T4FrQJn7zTKau2%2FUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGcA0hVixWOUY7oxQSrcA8Oi1aSh5LnhpZlaruX6ffyuPR8CVShgL%2FSt5LqnWyQAzUadmjqZ%2BN0pN1QNyMyO4BLv%2FSnsU08JiCOQz7Egux0PKakCEJ1VE%2F%2Fom%2FZOR4Saue9xdL%2FcmcM6e6prgXOyfHdx6HA%2FyQFj%2B9aAE5w0BhzE9qac6Wqsl4ZNlcw%2BysJPEoiT5u3h%2FDzpqcBePVs7vcWRMhEYFrPbd75oz00ymaftwRndIHeWl9Vpf6%2F1aitJZr3CCZfvDTWb8bbLGF0kNtQ0RF5EWNUyoA833N5EP0%2BtOG7fQJPDBEsuZu%2FmXo7aPygQMZlmPxpDhVUBYimkxEyfgTXu6oP25BE7h9YJo4%2FbziKDIWhEI0QI4B%2FsS5ZLuCD184N6vpXdcCQIoq2AFjg%2BHlGbjTB9krQtpUrSwBxSaKLhI8qEKfNAEmnHDxPK7FVpqgGSU5ClZcCaVX5T8b3vxlGtFXaAbSgn7zcCuNfwK6h5Rvm4sh7a71qLzZgShZnrb%2FNU8e0a%2FD%2F6GkVTzWN8WbNhJowiFrGYQcTCLgY3PD3HN%2FnuqjuHqsY7NzIisJ8Zoj1vQSGe7AeZo2iIjhNw%2FJQB%2BMY8G1YDuDdtoWUJTUWngNR98G11LE8jRcoRxLkaFHeFHlM4idD7MMnC%2BMQGOqUBKrs1l6bcRPEHkfaBpLAuA%2FPx6rZVhbnkrmiDOxL6C4n9TrDJaUQk6JLCaGstXyqQOrW1WSA8%2Bc2WmOA5LH%2FOk724p%2FiCaO%2BS2oV8emS1syVMh0kh1Aby%2Fb5Scd%2BKUeCnvFZBZGLjVhpJU%2FA33%2BJmoHVimDGqltA1KG7voPfB%2F05v%2FAHxWitDQjqIrPiX7p10BHdT0hOHu7FvTSUa4vXEaYUuUUh%2F&X-Amz-Signature=702ad29aabaff2a8645bc06f9217f50ad7ac64a4df020a66c352f7e188704842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDL32TZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIErwE8ScDUksi%2By5701VUli04pvM%2BLrkjmqxOAro6phiAiEAm5bPTVg2jpyhFeSL6o39Sg7Vd13T4FrQJn7zTKau2%2FUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGcA0hVixWOUY7oxQSrcA8Oi1aSh5LnhpZlaruX6ffyuPR8CVShgL%2FSt5LqnWyQAzUadmjqZ%2BN0pN1QNyMyO4BLv%2FSnsU08JiCOQz7Egux0PKakCEJ1VE%2F%2Fom%2FZOR4Saue9xdL%2FcmcM6e6prgXOyfHdx6HA%2FyQFj%2B9aAE5w0BhzE9qac6Wqsl4ZNlcw%2BysJPEoiT5u3h%2FDzpqcBePVs7vcWRMhEYFrPbd75oz00ymaftwRndIHeWl9Vpf6%2F1aitJZr3CCZfvDTWb8bbLGF0kNtQ0RF5EWNUyoA833N5EP0%2BtOG7fQJPDBEsuZu%2FmXo7aPygQMZlmPxpDhVUBYimkxEyfgTXu6oP25BE7h9YJo4%2FbziKDIWhEI0QI4B%2FsS5ZLuCD184N6vpXdcCQIoq2AFjg%2BHlGbjTB9krQtpUrSwBxSaKLhI8qEKfNAEmnHDxPK7FVpqgGSU5ClZcCaVX5T8b3vxlGtFXaAbSgn7zcCuNfwK6h5Rvm4sh7a71qLzZgShZnrb%2FNU8e0a%2FD%2F6GkVTzWN8WbNhJowiFrGYQcTCLgY3PD3HN%2FnuqjuHqsY7NzIisJ8Zoj1vQSGe7AeZo2iIjhNw%2FJQB%2BMY8G1YDuDdtoWUJTUWngNR98G11LE8jRcoRxLkaFHeFHlM4idD7MMnC%2BMQGOqUBKrs1l6bcRPEHkfaBpLAuA%2FPx6rZVhbnkrmiDOxL6C4n9TrDJaUQk6JLCaGstXyqQOrW1WSA8%2Bc2WmOA5LH%2FOk724p%2FiCaO%2BS2oV8emS1syVMh0kh1Aby%2Fb5Scd%2BKUeCnvFZBZGLjVhpJU%2FA33%2BJmoHVimDGqltA1KG7voPfB%2F05v%2FAHxWitDQjqIrPiX7p10BHdT0hOHu7FvTSUa4vXEaYUuUUh%2F&X-Amz-Signature=4f92617b6cf88399a7aeac06f2debff3b5f7c438ee1401d251bfedc20fc950c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X27LVOHH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIAMIDY7Ddtm%2BrLN2DAHe1cMb0TVSY3B2DdT9LZ6CuLXqAiEAtgF0okWyfCWf0R9RQi76OKFG1NP%2FsV%2Bn96KNnd3Cbp8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDCcFj001HSKn8Pb18CrcAyECnnQLObfkzO3GV7wQBiTv%2FGJz5AS%2FA%2FQQsGwfSCkxj%2Fte6Wptc6ApKCybgbZYwGrhtvB1tB%2B3ac3I8G29g4QkhPle5mjrCU1wwwGJj%2B81661W%2Fi1DbPbHdYIu9S7eJ6kiOdCsMwztfj66SovgvJOESIeARqTqTOICQChMVdsBOiIFXom7UQOmVmxWoaLvOFfx8efpTEtKZo%2BsnznWZgMVCq5wPD7lyVZJqE6mcLEBBiqp7KXA26ZwDtDFZTbvma0BH50OiQYPijwEuZu20S4OdpdKm%2FxiWXTeyioGHKiR3hVmj2v2SvbPzKiyXtJ2sgouneDM%2Fe%2FVhcFoRCGiPVI1oJYY84VBsmHQXxEM5iT1%2BaAH4SOoqu6r1KcPc06M7Xn24PY7x9H7BDDG0aUz3mjifbQLky0PNOzJVVPw0gtKr4y%2F3AzwTnbQluWCQ6nDbpbmfJStH8pcmuhsPg0hHan5SrbQixswKFDQeZlYMJhfMmB%2F8qsDXoZDBzKlXVGXDyWBzwoul0t6zHrbRMQWRZ0mkZyaBdzMV19fJTTt93Gt8Kn7bh2Zz3ClkvXYKFkEhpbu%2Brpfjrye5TvM8z2A%2Bn9o5G%2BcuOdxScoI1BjicsTHGvGsdBRF4%2Bw2hbeSMPrB%2BMQGOqUBg9psrxqBcjUECckxQXYsn70lkrKWWFB72vpKyMVnF7iZZEfkUiUW%2B%2FxFJBEtvih%2FaeDS7BPS1OvGcvdfYiwsFo%2FRUw4RosO4GJaC8C%2BzRYw4RCFv6w%2B5qhVw0tLV8lqiNb4bQKGBC%2FkxgY5hYU4%2BGdArO8XxVeV44sidAzDe8aen0LV%2FOwUZy0%2FxPQ%2FmLyVZCJVQh4o6b%2BEdb08x0JmdyOePi6%2F4&X-Amz-Signature=319a63b1a58d2de9fe114060dfd781a9bc84d7a887814d2ae1041177ba74a079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HHSWIQX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDCWHGQX89Q9c0H8pJXUcOEiRfnDKDBrJd08Fcnl3syCQIhALZ%2BBJOXdAeH8oQQ4%2Fc3XcTD9%2Bd%2BghbITG93xJ9v8UbYKv8DCEsQABoMNjM3NDIzMTgzODA1IgxsC%2FCkRx1gyBwTdqEq3AMojIj8lIZqe0arLzeURVA2v3jiSwI6MOxNSmCqTVF4Z7LFIRQGxoIn7rQW9z5qdGgYSUZ2736zZC9mQTNxKAvNDpxbLQyw9Kca5yPiNuvcslU7BDNo1bVAlxl0oWGI4TEtmmTn1SYA%2BjDsR4VfsnJPKmwoeW8QApTm40A2ktOqizFXDXNEORLM%2B9GufePMKGE8bDI5Zk5AGr2U2cJmciTksBj%2Ffwhe560n9%2BLv5Y8cc7c%2BonyJ7DBwAU7WxsSfNAxpp4Joqywa0ITDVumaT8snVoN%2Feis2AOHa9Dqw5%2B3jp2OEvlV6uyBjgLoZdZ%2BrOHQMQe%2Bk8ipEWPFDjHjfSdXtKmHZ4Y3OGYpYStLuHypkqYip3QXUOLNx48HPPwLUhn0UxuWmyf9wWKE%2Fhp4avTcUtZUZwJaQoZ1U8TN6DyVGlhxxqLyB7ByS%2F3mPn%2BL%2Bkofwu48V4xgpKDOlHBH0P%2FZbX1Ybp8%2FIAeDsZVFMMbl1J9pFirwnqWhys53NgtcUbM4y%2FRvPOg36%2BmQAxtbeAjTKIwGS0HBVKkqy8GbZWfX2asujgy79W3X%2B0hijzarsVScDqs4uybkeTaurPdyEGfvMypumuIPaF1xtlATwH7ok2P2a2HiFpbghnjQYOTDcwvjEBjqkAXlISrz4uCWU6l2YVu9w6YqsphYADmhBi4LT1xYiFEoLLCeet0j6%2Btlrp67%2FffDxHJVoQAaxsEjC63vUw0APExeXIokofQDifi6xgBkOPBliTMID6CF5xSyAP9uE2Ejs8XWW2v0gnbpujCSpgmM88QwDGJ4mPSUGuwy1R28UEyvQkyW2eUHmAFwurrTdP6Er7sMtKzaDPCbfcivUco9cHhDhZRDq&X-Amz-Signature=a3ccf50df713f292eef8ecb9677868f6c5e8ef6ecf4052f2d3e9532120e84c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWQOXL7Z%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIEw%2FPdZJNisllHakd1G0bQJLPd1JaaSmpV6fd3WPXAxbAiBbTR3NmFOlU0lWg0FX7KBhGCImAfSrpp6iIE7bdySHGyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM0sy%2Bd%2FEEVGDnZUcNKtwDCs6OAgVZlorrzj6T9l4GtNFj4I3cjufzFyn7pu5bt7r%2F4FSMP0qNXoxaGZ90DyCxA8X2Zy1OPr%2BzNFIlg8d1a9%2F39qT2908clIfzfRoaCnRx3Op5VUviYvHfUewXYsQEvfsH2Yt9Ibnkk95Gd0UNMbCmTRl9Fw4B1OdcE1oTF6yvjO3h2C1Q2Xdj2j74qkvNU2NKeXb3Ze2wjlfwDJkSfEozrNRqiSeO7ftV9weHbZMNiyUtzJG6%2FnvT13MKVKSRgQWzKdYuEOvkFukQ7q8%2BG6tZetbtCtxCGCi9bh1sg5sY%2FjoJ4bmKnddFYn9WThTGn46Ifyn%2BAOwGa0PPDUsTzHQ4qgmBQh7eSnOyxHQkYalNxgs9%2BW%2FbC0oe2%2BsOcrL4bIFQUfgdWMGxzl3UXuX%2B0nt7BatYhccquZR1hrLfTtkEH9nEL3sGIwzljWn9a%2Bsc2iloTHvZZcRlz5YMiLyCu0UlnQ9vIuDOGP9bP6a1zVHKb9Ej7JewgGmhmDDa1ioJWveVrQvOYkbFxxpAA7MlWrw2suVNyJCnbpENsmb8fHX1rsbqpIGkXEhQ5NgJy2XipCfjc6jTNqdiuekjR%2F5kwAbqzDFJiKID8bMjW7VH0RH0enSZ5ZCsZRwY6Fwwk8L4xAY6pgFBTkFgnnmP8X8BPSLVNkweyGa3isJ5uJKZH736zHNgbVb0HpQxHyTdRQY4h6Y6rflzJ1GtDUgfNoWHW%2B%2FV%2BxXyyVxjUtnuhmySC8gmbWz%2FGoYWCrQY07jdSfDOTkRvcgr4PJ0oi78yTrX6UByHPf6yGQEu%2FLyt%2B6AGWV%2BrvaJ68SNtrY%2FY%2BQusB49Tx%2FZBZQ%2FW8nPRtOMoLmomr%2B4zeQ96F%2BxguxTD&X-Amz-Signature=1cdd69b3446bc45879c26573662416031e067f9aee42752af8aa76599394e4b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDL32TZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIErwE8ScDUksi%2By5701VUli04pvM%2BLrkjmqxOAro6phiAiEAm5bPTVg2jpyhFeSL6o39Sg7Vd13T4FrQJn7zTKau2%2FUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGcA0hVixWOUY7oxQSrcA8Oi1aSh5LnhpZlaruX6ffyuPR8CVShgL%2FSt5LqnWyQAzUadmjqZ%2BN0pN1QNyMyO4BLv%2FSnsU08JiCOQz7Egux0PKakCEJ1VE%2F%2Fom%2FZOR4Saue9xdL%2FcmcM6e6prgXOyfHdx6HA%2FyQFj%2B9aAE5w0BhzE9qac6Wqsl4ZNlcw%2BysJPEoiT5u3h%2FDzpqcBePVs7vcWRMhEYFrPbd75oz00ymaftwRndIHeWl9Vpf6%2F1aitJZr3CCZfvDTWb8bbLGF0kNtQ0RF5EWNUyoA833N5EP0%2BtOG7fQJPDBEsuZu%2FmXo7aPygQMZlmPxpDhVUBYimkxEyfgTXu6oP25BE7h9YJo4%2FbziKDIWhEI0QI4B%2FsS5ZLuCD184N6vpXdcCQIoq2AFjg%2BHlGbjTB9krQtpUrSwBxSaKLhI8qEKfNAEmnHDxPK7FVpqgGSU5ClZcCaVX5T8b3vxlGtFXaAbSgn7zcCuNfwK6h5Rvm4sh7a71qLzZgShZnrb%2FNU8e0a%2FD%2F6GkVTzWN8WbNhJowiFrGYQcTCLgY3PD3HN%2FnuqjuHqsY7NzIisJ8Zoj1vQSGe7AeZo2iIjhNw%2FJQB%2BMY8G1YDuDdtoWUJTUWngNR98G11LE8jRcoRxLkaFHeFHlM4idD7MMnC%2BMQGOqUBKrs1l6bcRPEHkfaBpLAuA%2FPx6rZVhbnkrmiDOxL6C4n9TrDJaUQk6JLCaGstXyqQOrW1WSA8%2Bc2WmOA5LH%2FOk724p%2FiCaO%2BS2oV8emS1syVMh0kh1Aby%2Fb5Scd%2BKUeCnvFZBZGLjVhpJU%2FA33%2BJmoHVimDGqltA1KG7voPfB%2F05v%2FAHxWitDQjqIrPiX7p10BHdT0hOHu7FvTSUa4vXEaYUuUUh%2F&X-Amz-Signature=4c266c3a7132d9b37c837298fa3bcf0902aaac6785c8d69b854bd6fd9efc5d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNGGXJR5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDPXu3twr4HR0SqUaAqtqoUDraVk%2F5M2hbepKeLOeL0dgIhAORv8tmmiAcJ7IUFfjDYkv6h9nqDME2sOw1yXMyFN52pKv8DCEwQABoMNjM3NDIzMTgzODA1IgxJBkokK0apE%2FxJTsQq3AO9nepOv9MReJKtiPr4%2F9kp6hbadVjC8PQidF8EtC30K45Y4vMTq8jILTx%2F%2BqFvuNrHUkoctjUDUnXixwcxIDzO8AJWgTtppBV7BNPGHHrV2s4RbQ9Ee63QdfZA678QCl5I1CVVTWo6ZxhMJNXT5pDkDXYih0r0rI0IK8f%2FTGv7503y76CyZlyLHfOHhhgpwZujGEBPtA3oLn82AKBOMZsPoo2M8anklJV%2Bw2GExfaqnOg0XIWDly5pjfRbQwgZqoGrJBzV32XmWx3Bfh1SM1PnBwhzEHe4wUOMKIMWPhx8Z0zonUElJJ88gGY9Od1FVQMiS30SxJESBJ8S%2Bk45g%2BDGT0DT4ojqZd2Jmm0eKZlabVYIthsfMEadagH7iRiHvzmfK4lLvoMtiW5ww6YDsnnc8GlKFpfV8PlIV6JHNXqGjYEswBybUkCVIju9YQsTzSmUdDK5MZEeUCOrpGfHBVryXEUjDxpadVhT%2BKwKm4DAFmV5YqImm903oiIqxvqd5hlsyYUNA49Qcgg%2FnqPug0VJU3%2FclndviFZSlYu3lMDvRaK6DmG4xAHuJtHrBM1r%2BnJ6gt9wuFL7gp5mWOjkBOEE6a%2BrwxvDkmMFW%2BZZBsAIucXdBaqzHt183JgcyDDF6PjEBjqkAah9NYWjjbb%2FsKOijkVuK%2F%2BQE79Dbq4ik1gfzWuH96emA8YZjJNy%2BEm0k%2FMiL5N0qhhCLojiHPUPkp4SmZ7XHLHsZSr5XPfGocUFtAz%2ByoqPo0pnlfYEY3yBxEKH2ySS46r1d4CntdoECPC5qvgS9ZGKGqmDuyJl2%2FicAXZyCvB4dxUeq9wwXhFjP%2FAp5%2Bvtyv9sZO7vmntcrmBkEPwv0Mfat3Yp&X-Amz-Signature=e08e006654f473fb5c0ccabbd73767a5c3e68bae94c6b89ff55442d0fbf43fe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDL32TZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIErwE8ScDUksi%2By5701VUli04pvM%2BLrkjmqxOAro6phiAiEAm5bPTVg2jpyhFeSL6o39Sg7Vd13T4FrQJn7zTKau2%2FUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGcA0hVixWOUY7oxQSrcA8Oi1aSh5LnhpZlaruX6ffyuPR8CVShgL%2FSt5LqnWyQAzUadmjqZ%2BN0pN1QNyMyO4BLv%2FSnsU08JiCOQz7Egux0PKakCEJ1VE%2F%2Fom%2FZOR4Saue9xdL%2FcmcM6e6prgXOyfHdx6HA%2FyQFj%2B9aAE5w0BhzE9qac6Wqsl4ZNlcw%2BysJPEoiT5u3h%2FDzpqcBePVs7vcWRMhEYFrPbd75oz00ymaftwRndIHeWl9Vpf6%2F1aitJZr3CCZfvDTWb8bbLGF0kNtQ0RF5EWNUyoA833N5EP0%2BtOG7fQJPDBEsuZu%2FmXo7aPygQMZlmPxpDhVUBYimkxEyfgTXu6oP25BE7h9YJo4%2FbziKDIWhEI0QI4B%2FsS5ZLuCD184N6vpXdcCQIoq2AFjg%2BHlGbjTB9krQtpUrSwBxSaKLhI8qEKfNAEmnHDxPK7FVpqgGSU5ClZcCaVX5T8b3vxlGtFXaAbSgn7zcCuNfwK6h5Rvm4sh7a71qLzZgShZnrb%2FNU8e0a%2FD%2F6GkVTzWN8WbNhJowiFrGYQcTCLgY3PD3HN%2FnuqjuHqsY7NzIisJ8Zoj1vQSGe7AeZo2iIjhNw%2FJQB%2BMY8G1YDuDdtoWUJTUWngNR98G11LE8jRcoRxLkaFHeFHlM4idD7MMnC%2BMQGOqUBKrs1l6bcRPEHkfaBpLAuA%2FPx6rZVhbnkrmiDOxL6C4n9TrDJaUQk6JLCaGstXyqQOrW1WSA8%2Bc2WmOA5LH%2FOk724p%2FiCaO%2BS2oV8emS1syVMh0kh1Aby%2Fb5Scd%2BKUeCnvFZBZGLjVhpJU%2FA33%2BJmoHVimDGqltA1KG7voPfB%2F05v%2FAHxWitDQjqIrPiX7p10BHdT0hOHu7FvTSUa4vXEaYUuUUh%2F&X-Amz-Signature=98d06c1e6d4acf2d7096325f0c05007a20b2757533e22ff4bb9865491d4b07c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSHJSXES%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIGVxgj97J%2Fq4GENff2npBmlOBaPHPrbLt%2Fvhcxno%2BdtoAiEAgI0yzucYr6xlUw3Gr8rBkpSRAUBEFaUGAdrWHIq7LCMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGaN01mB2HkbgmSlJyrcAx6VlpTahLMRs1lh7g5qWZecbFixar6hiQH9LEaI0X%2F0pt51vYtdIHgN4y1BRxORIWI38TA0m0AGD5pSObmXfrZA0uZ2zvEK6duJv%2BjjAPjp0AQ%2FedRRo9BD8R6t08vXnHGTdOKAD7vxkcYI%2FfhyRdipkwvIqVnSCGzN8NqxvmgIbhvRKr8XxBFkiXPR2rV7qvDrRFvcVsItL9eQ8Is%2BKF6%2BS0YSSAHofuB6xA9fahGjUuPvwqAe40jVPqXhioVvgZVlhAHrmqsv2xY1syqyyCz1P5UQ%2FIY5Pm3TDVKmL5%2FmUHRR75IWdUGqNdi79RSsTQFSlxfLm36XO8A6rXeQZ%2FAAnJ6HObs26sQarSfpQ2%2FFP%2Bi%2F7WoLQc%2BlZ056HWR0fl%2FayRi%2BD30a0bWBTOj8ULqYU7hYuoHpEI3RNEURyBFFalQC0b81QyGHm0Mc5gCEp5mIF7%2F6MdQGBb6wAOcfNlUTvTP4aaa7GgzuqelnEZDrJjPupoVkn5TVxv37x3%2BMlPh%2FSBHBL5iZCfwq6KOPJKRviZD%2BC%2B9ivDMmFMhRxMzIzAdCI3z7Zbth1MNGnx%2F3as%2Fnhaad6Eal9mXBUTIwMUwLFdjdC6zFhFaQxaD1swbwHuXtQ%2F7xJdrY5I4yMIfC%2BMQGOqUBp2mQBbV9wNmkOwCGFWqZuD7WHGLgkZocz5sK9P76JUXlJcSlc%2BqI5C4tXhh5vUqqm6GaF76lI%2BkrWk58KdhiESXkXs5%2BDSANeiDviBWTxNUZS5o8OQ5m%2FgZkCgxiXJ0M%2FqJrQe%2Fbwjgq1EGcbp3EzDfYd5FPviT1wsACgcLgr4l3lNkd206hgZ%2FwrjtQlkl2fP%2FWHpHwS4MCANcMs2yPq08cSVGY&X-Amz-Signature=771a490103d02d582cbb64f828e1f192e85434442b2643f95a231d3390e962d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDL32TZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIErwE8ScDUksi%2By5701VUli04pvM%2BLrkjmqxOAro6phiAiEAm5bPTVg2jpyhFeSL6o39Sg7Vd13T4FrQJn7zTKau2%2FUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGcA0hVixWOUY7oxQSrcA8Oi1aSh5LnhpZlaruX6ffyuPR8CVShgL%2FSt5LqnWyQAzUadmjqZ%2BN0pN1QNyMyO4BLv%2FSnsU08JiCOQz7Egux0PKakCEJ1VE%2F%2Fom%2FZOR4Saue9xdL%2FcmcM6e6prgXOyfHdx6HA%2FyQFj%2B9aAE5w0BhzE9qac6Wqsl4ZNlcw%2BysJPEoiT5u3h%2FDzpqcBePVs7vcWRMhEYFrPbd75oz00ymaftwRndIHeWl9Vpf6%2F1aitJZr3CCZfvDTWb8bbLGF0kNtQ0RF5EWNUyoA833N5EP0%2BtOG7fQJPDBEsuZu%2FmXo7aPygQMZlmPxpDhVUBYimkxEyfgTXu6oP25BE7h9YJo4%2FbziKDIWhEI0QI4B%2FsS5ZLuCD184N6vpXdcCQIoq2AFjg%2BHlGbjTB9krQtpUrSwBxSaKLhI8qEKfNAEmnHDxPK7FVpqgGSU5ClZcCaVX5T8b3vxlGtFXaAbSgn7zcCuNfwK6h5Rvm4sh7a71qLzZgShZnrb%2FNU8e0a%2FD%2F6GkVTzWN8WbNhJowiFrGYQcTCLgY3PD3HN%2FnuqjuHqsY7NzIisJ8Zoj1vQSGe7AeZo2iIjhNw%2FJQB%2BMY8G1YDuDdtoWUJTUWngNR98G11LE8jRcoRxLkaFHeFHlM4idD7MMnC%2BMQGOqUBKrs1l6bcRPEHkfaBpLAuA%2FPx6rZVhbnkrmiDOxL6C4n9TrDJaUQk6JLCaGstXyqQOrW1WSA8%2Bc2WmOA5LH%2FOk724p%2FiCaO%2BS2oV8emS1syVMh0kh1Aby%2Fb5Scd%2BKUeCnvFZBZGLjVhpJU%2FA33%2BJmoHVimDGqltA1KG7voPfB%2F05v%2FAHxWitDQjqIrPiX7p10BHdT0hOHu7FvTSUa4vXEaYUuUUh%2F&X-Amz-Signature=53ac9e8c2669d0fe6cbcb4d4793f1c42ae2ff74b66ebb54440ed9935578ede4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFBYQVME%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T191000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDC163ZWsGiNOwI0dO6LzM6aBlxHk3IcA6oy2EN4U1DwQIhAK6sL5ulzs8HiUD5ZOTUv56x%2BAcdQSXPFIG0qk7XgijRKv8DCEsQABoMNjM3NDIzMTgzODA1Igyzvyy8LyHQezq7lYQq3AON351N24XZrxPyQIkrpbX9zSpUw0PY%2F%2FIEGizCwHh6MVnIVaPuDxs3uMtGvUI74xPl1uAyRwZXkE69nXBzrKjWBPfw7UpuxIby3rbKl0rub7FGkVlGlQCuoCw7li8E4%2FTmYD65dbhdrOrFxGithK3HykoWTAduhhcI9OCsMTn%2BIKZqU6JxHuvwqUKR5lfjgWW%2BscjoVA8EZ7zrohORA%2BLtr8r9KafuvxDQGx%2FvF6o%2B7dv%2FV69O4r5bGHiAbIBNbPLHijj4ka07%2FaReIiX1%2FUCSN9nKCoLgRb%2BNxu6z2sb%2Fun%2FjGiQxpkcdpEqEHlLGt8%2FrcJRa2m2ObL%2BrNI8nU4IqYewKqEp1cJAr%2BKXahMZF7kPxOwqGawdceghht1ae6GZ8ZpSU2z7ppv9wuLJ7rsiyOOUotRg4F49aAMKS6Gd6JL0i6J4l8eoGY05%2BS1ND%2F1hWpUde9%2Fsg2Z7WV0mMOqTd32o1V5l1iB%2BVevQk0cc%2BYwb9B0m2%2BwbLZudPpWwY29RIxgd1L5510P2rgpsNpE6fviygrvXoWk5yJrAn14fAf%2BRok6gh4%2FD2MjDv1rxOn0uAMNQ%2FoAmZGA86w9M4qgwyX1zMFDvnZt%2BfXiScOHa3%2FO6Y4kc68sH7K9TD9TCEw%2FjEBjqkAYwCQ%2BBHBvI0iJ0doglnAEg00F41ooE1MMV2J8MOLHgdNzuqbiEJL%2FKXbKv1QMerfaf7p%2FZB3nweJJPMCc2JrJmiVBPiR9XT7BdnoQqMjiJ6ZO2xjBfY7VDkl006IdBIgZRlxTfNuRh0hdrjUiZRkvi7jwYSMgYurdzwg6vdyWVOtkL3LPoV%2BLXP0KO3%2BpAad%2Bzs0YqJf8pDMdSlmQav41l9bvLV&X-Amz-Signature=e49556e977e30dcdf0bcc4f56d6b6db99bfb3dfa8cf97078ade66c8885d77693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDL32TZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIErwE8ScDUksi%2By5701VUli04pvM%2BLrkjmqxOAro6phiAiEAm5bPTVg2jpyhFeSL6o39Sg7Vd13T4FrQJn7zTKau2%2FUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGcA0hVixWOUY7oxQSrcA8Oi1aSh5LnhpZlaruX6ffyuPR8CVShgL%2FSt5LqnWyQAzUadmjqZ%2BN0pN1QNyMyO4BLv%2FSnsU08JiCOQz7Egux0PKakCEJ1VE%2F%2Fom%2FZOR4Saue9xdL%2FcmcM6e6prgXOyfHdx6HA%2FyQFj%2B9aAE5w0BhzE9qac6Wqsl4ZNlcw%2BysJPEoiT5u3h%2FDzpqcBePVs7vcWRMhEYFrPbd75oz00ymaftwRndIHeWl9Vpf6%2F1aitJZr3CCZfvDTWb8bbLGF0kNtQ0RF5EWNUyoA833N5EP0%2BtOG7fQJPDBEsuZu%2FmXo7aPygQMZlmPxpDhVUBYimkxEyfgTXu6oP25BE7h9YJo4%2FbziKDIWhEI0QI4B%2FsS5ZLuCD184N6vpXdcCQIoq2AFjg%2BHlGbjTB9krQtpUrSwBxSaKLhI8qEKfNAEmnHDxPK7FVpqgGSU5ClZcCaVX5T8b3vxlGtFXaAbSgn7zcCuNfwK6h5Rvm4sh7a71qLzZgShZnrb%2FNU8e0a%2FD%2F6GkVTzWN8WbNhJowiFrGYQcTCLgY3PD3HN%2FnuqjuHqsY7NzIisJ8Zoj1vQSGe7AeZo2iIjhNw%2FJQB%2BMY8G1YDuDdtoWUJTUWngNR98G11LE8jRcoRxLkaFHeFHlM4idD7MMnC%2BMQGOqUBKrs1l6bcRPEHkfaBpLAuA%2FPx6rZVhbnkrmiDOxL6C4n9TrDJaUQk6JLCaGstXyqQOrW1WSA8%2Bc2WmOA5LH%2FOk724p%2FiCaO%2BS2oV8emS1syVMh0kh1Aby%2Fb5Scd%2BKUeCnvFZBZGLjVhpJU%2FA33%2BJmoHVimDGqltA1KG7voPfB%2F05v%2FAHxWitDQjqIrPiX7p10BHdT0hOHu7FvTSUa4vXEaYUuUUh%2F&X-Amz-Signature=ae8bec0219fa03cd0dd7fc71e233626ba8f383ae300003932e9852455921feb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JE47NBX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T191008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCID%2FeZFSX5S2ScJ6hVmJNUaxqWzX1OVRCwMKKWcZhKtwnAiAnY48MN%2FdPhk7GzUKdBijDNDxKe%2Be7YOPxNdieW648Wyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMonOFRwLIB6IhxwZrKtwDSDxYLOQNaIAXnFrrqe%2FU%2B%2F5ExE3tV%2F6oh0rbYl1RkUmGkh5Eoxiy88gDRh6zdpF6PdtYW4QcRSqzPxnDkaLkgMcX6tGA98AQaC6Waym53txQPDbSK7QX%2BdsujbJrT%2FKgPnzLzDJPo%2F0aGXbMGY72pLcYH9ZQL6oTuCEeVxaytL%2Fi8b8TI1RQzrfNV7J6ur1QcrdjuM8hKqSI1ZbQlozOLQWVWB%2FwMigLTkyoKJ14%2B8iArZYHgB8SAlR9Ga9n4KxRB%2BspykJqVglffY0HP95c5VM314NvdTgNOPlgB16jL%2BMvfEwErUElr87pAtgbc1Jo509YKjUTdcUi%2FFAzlpQuo10gpmPiIedwFswLnbAvcx%2FKhptNPLjICgLAiTPFhUA1l5eiOm9JXiJTldulMMMBVJKZtNEevOmJmadW7PISlDKl2GkvCWJo2lAKRK9tdhjHlgv29M0BKSPKOlJTbN5cSjnT1sD7nlqG%2BqMu4qcVq2TzsEFYaBIx4757bmAa6cHzczaqCEPEoCAOYMA2NlmR7%2B9Pg4yciDwhxI25tzeGJdHb5AxDr7ZWvYwJCFoak4NUWgcNgJ%2FLA5ss%2FzcuzfbaESk9gufiWHkPtiq5H9MXUsuA%2FxcjjYwO6MHZ4PAwkcL4xAY6pgHYl9lWUV1Ebi9xDnpjc7JL9KYu%2F4cWeQw83YILO0uBaWYuUIJlzlCvIsgpoycWr7dzkLHauBgI0PzIphBPKt%2BPW7yJVTzimnOCKLhtoBtNSmrbQDJbz0MsK%2BSE5dZ%2B0cy07EqmHVwusjr3IpSX7PL3Jl9Ln0KX6opw88dDKCJqXM10hI5bgXQjZ0Tm12Uh6Kj3Gz3AaN7Dqhp4qWU21mcO4e7jEcJC&X-Amz-Signature=d63061fbe7a85853f40fde373d8224b9d79c3a499addb386c951670b7e9eee58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNO3G5Z%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T191012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIFt15xh5ca7iS5NqOwFcLkTRGz07UY3c5OLtiadQM1PuAiB7zI0Eptg7jXO0igMzDMJfi62s2bUbnhOzJYiYRdDeEyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMGU1%2Fxu2sowHGcTG9KtwD0S4TOVex6YWXWJjOLjZ67vCaAWaMNByN7d8xK%2BPIJPLzsdka7n%2Fsx5idO4AU5v3I2u%2B9jfWEf%2FzEYsFHuLnRTIU0tZ8EyLCg3NYHvDdZC4wZR0KldUgY2v08b%2B3bNWTkL0Jr7cq%2BYjNXI9ajD5G3%2FBAi9RAAxBHtvxrxJYaY4x%2FaPQJW9KhKGT7yhtTHOZ2fXHw3sCsSzHaYMGmvd%2BANyBB8BTpNbtbWl0kDA6%2F4KKKXWGlkwZhhog9II5mbG45Ns6q0wvs5okjZZBxvayzdvTLacIjSgtDwe%2F5v4FMfFBojYNygb3kRyMdF2O0HxhHcJ36NtRPZdAe2vduekPIvKKuPzokRuHd%2FoGgLY9Okdl5sQkkV9MLqENmkbAMjTgCmTpselyqEYG9T06FAszUlU%2BRIJ6W0qSLCIJnPPZ8mMd%2BayscHbSRv54xshyQAS%2B4E%2FTxsLn084l9tgntdFtZdZq2qIExoX8ZS%2BXyNdCjuco%2BWuSt%2B%2FYhkm%2B4bFbOi9%2Fh4pm1CyLvERes2YPU7C%2BJMIn7LTgT7N6IpjUQPBfgVr9tSuKk923MEtvURYnVg0LpQXlEJMqjfojc66tbNnWZGgsEBojMfIhdN%2FZBIjvZswwI8IVWO3TUNgSH3zKgw2cL4xAY6pgHCQUAxd%2FOoKzl6RPl6Qq55zFakvkGWVu5yABI6169gIYqEcjKUBghbnrbJssBsglR4XD6dWn%2BuYrlOetHHFf%2BQSlY9RPwxAW1WipmaOQL37aAdHlVtg%2B7UsrToonzpA%2FoMKGvZD%2Fgv0ZMpycI%2FE40O6PYOqvJkdOAN1GGhykIkMJ9aa8%2FKeELFNZ1tDzEXtqCLZitWutQb1%2F94cbQ6%2FigKZlXBJkZM&X-Amz-Signature=eceb5be8cc61c2cb4b920c1dea36d489a4d4d42eabf2bd69cfbc7a28dd419f78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KVP3UFA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T191014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDjgpNuykxE8xSjrfcHorfmxluCFENlbmg2Z745Hgk3%2BQIgdN%2Be3dABdtFJaiHZQg6yGUJXs8TFTmXNjEE8y%2FdXBJsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHf8uCFGjZ7t2OML0yrcA5RgG3Iqd9yw%2FccOZZujuKUlW6oz%2FiVLkivJEv68NrhA7L1GRyN64HR%2FO%2FZWaIJb46meLjsy%2FToW2CWWRAMOtZEI6njNVDCftyqFgl674L8gfJZa9OdBzZ1KNf%2ByS47xxtFoMlh3Ihl7rVmmfuS9%2F%2F6moiuJPd9R%2BtfLr5ung55m%2F%2F0kPQBCIGynBA5vN6lx%2Bw9QexrlxN1sCKxwQqv7QRQCVEdrkIpkr%2B4PU2Kk%2BTL3FQUHobPDD6TJqYXHrcVVHRSVIwT0LYVuDV3j6RxONP8azkuvf8E1uX2bGh2Fahw3loAdaP0xha%2FlKdnnET8g3m8ioUiCdAs5G42ODjjRmeRpPkHcr7AykaqgdGMsZnv5WkC0vXpwkqc4%2FQyG0iJ7PxooJTBuyu1SRETSy4ufLIpzd3CulWD5UiSwgbNUpWP3gI9sKikhnDoplpG03HFmeLbHKbD14dWDFCSfSZGLZMZ%2B4D2v36pRsHSQKEEp7sp4Ej0NzWhlg0Avb3t2dTbB%2BSWpgS2R4lm3kQlpHNI5wXvzSgqaJOiarHWOj9%2F3Fs9mNz%2BY6pksHST9SmS49ARUUuQGL2OXyXVOp0SZDQi8Io0rbIuGFy2wi0oG0tEOGqODebqbJUN6VsYTOnK0MNro%2BMQGOqUBR9C7EbMTAlrmMksHckL%2FQPjmmW4zSotia1LQ5E7Tt%2BYDXA7jF6dMMHCHPASgKTPwbXgPsX6JNBakWcwzCMHozL2Q%2B7pPvFWFn25g0stEPGsgqLXZz4hP6VP5aKQ7XU1jk%2FZ8QMyBbS1mj6U77LGWQ4pbYnW0lZ7lfkSN6jEZWAoFlh9GktNoHi1wKbSv1AZHhsGgycV16csEq%2BYG1HH0wgmP9wUb&X-Amz-Signature=bce9ad4583e34fed17c1310dda62607e564ff9dd3bcffcb2f6e5dab8082e6fa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YNTGBQ2%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T191019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFkZc8n9FF721xDtHqP2sLHrMNSkO3Md%2B5KNPs4%2Bwy%2F%2BAiEAz99UCs4IO0zbv7bUWqGgpxJzLQBcZVu30bdAl%2BuppVwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDI%2BTVdm4gZ1Nsq%2B%2BrircA%2F8xIUh4HMea2LlHRAHcr7buawPvXCXp%2FAd3u8qxELRxSN5b4P4XYtgZrRbq2IYxWOa6VakVlAsMvMg6fpeJLg37GSPDwPUKZtacFWO1iY3cSHj%2BaI1DVUBwKuDCl4yiAEFi5f%2B3Ax%2FSn0WSZhmYKRGgQ42FbQVLijCDbvlJi%2FbfKCQxPqpsft%2BrqP4CVaVDRzONSSs%2B5uUfxkOnaVkwf85Q9fNdZUudVkvvWE5L33h%2BbETu3bVw0QOwauy5%2B8Z198WcWl1ovbDHOvUaPkqMIyyYchAYN6oEHWVqbbdxASNdrqSHoy3%2FAihSSL%2BSB4tB4zdrGu2nKs0S7HYAT8TFxevkA3lCtND2yPGcHXa7k453lIl42GJEhxNAJ2ZbJXB61Xvo41sgC4Eyr3MxZ0o6WUNAbHTG7%2BdAMWM5DxBB6m%2FqWPUA2OpHjjU1fix6B6J8H6uQu76VMeVu%2BDQf0ZPX%2Ft4VOR%2FFqJ7y%2FVi5AlrgqZoCZ67IZgeRKN87YxnXTAf6GjieuFzKnthsSi4y5M9bRDtKIazs%2Bvci0FYwX2kCel1s2xS%2BGAoBa%2FCPwnMzM47u0hobyW2EtBHvuthFG7B5b4lw248JNaaF1saN3xX4cP5VOSTUIJdOo3F7DUQ6MNjC%2BMQGOqUBvz5wyrkKZ7Igody70lr9R1fe7HVTKUgw7wlmiq8H66i2MG8tfLK32WyWSZATYqgKduWL9wOVGtGmLr3gdKPlytnzG4KJQa3qi9HV9Zy6Ly673Ky8CCEwJ0QB1qD0eBLy6n5m2xqbO6HHBWRYWnhXD8%2FEw%2Flhek06Y50ptUqUOkO%2FLkxUyQHdlPzNKNCXkvLbfdJ%2FkYy89xE3QvZf%2BF4O8QGdkUgm&X-Amz-Signature=279d0846f2d33337784e166427a80724dabc3d78c647db3a20732d6580d4bf11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJTUT6J%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T191022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIFAA%2B%2BJg7becwdM36uQfQQ3%2FFyh3QzxwfXaWSUoyA0POAiB52SuPiePTWExzN037uHSJJHIt%2BAgKKxtz7HZ%2FTJs7%2FSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMyZzFqzABLTzd2ji%2BKtwDzTMsjWtSHpWJFN9lTXV2Dnv3WZ1Jve5RY8EKvogE0uFP3YBR0Tw6ffK3gEKdZwfc76Buci6Zckohqsv3DCZva06i0%2FHHjfTXsLKKHZSDNl67DAhumgBY4nMYSdfEs%2FzLO4XEiMTsjc6b%2F7mHz5vrvC1RSMOzYkOg5Ws4WaJj7Dm4dxeta1V7iWu0zi%2BKN6oSI5jFgqZkqCDrm1wYvncZucjLoaMW3F8Kw5Ov98SG5AzQEUNgKt5dfd6aH7sQViQ9TE0lZsTPCDtuuzhJxLoXXj9XkiY7mV9esF1GI3GeMCGuy6g%2FE80Puz4gp3TQLAxhOEekDlN4mLGYiCU8USpmI%2BqDsUkmPvwnvjW%2BI%2BLmTzp3o4Z94OMoBKfnv7R8rxkgMtMeMS7FOiQE4nRwZPrSsifjrqZ27DhNrKCQMGW81l8CMSsPvfYtnfQY6xE0qjE0XuYYbsbn7K%2Fn8MikgP%2FJ7Ujb4FxdHMxSXL0LC%2BcrkNErYAyBj3CXWHvg2JVqCR6wAy%2FPBBlQmwDeE7aVvrElNGlt7ZX4pSRUr3U9D5GVPM6J%2FacRYEKbfJjA5w3vHRN%2BAuEJpw6GJBvW3m9wTsRF2ZDXQxNlqzpGU0%2Bj6oB71%2FmHJA1YEFYFcLwYMfgwxej4xAY6pgGtIrGT%2FHHmwkItwYoV6skjbcXeZXfRSs%2Bl%2BRvaSht3Xz%2FizduQ9KteGS17yHxpvM0fjYcpL6J4EPkOZFhZ1XVs6jT1K9VzgL%2BmS2UEIiYRyQNKBvQqYNssbR51KGBhTkWmwdkPCnVulQi8EwA9XVS5lj0z7k9uFJHS9l7kHMkbZl9pwjCkLkoy0i0sCKpx9vcOGCx3NeHU6Vs9741T5qB%2FeSBb5Ukc&X-Amz-Signature=a9b6b28f09b8665fa688b256e14dff67981d81a215b41106b1e2d57c855ba58e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDL32TZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIErwE8ScDUksi%2By5701VUli04pvM%2BLrkjmqxOAro6phiAiEAm5bPTVg2jpyhFeSL6o39Sg7Vd13T4FrQJn7zTKau2%2FUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGcA0hVixWOUY7oxQSrcA8Oi1aSh5LnhpZlaruX6ffyuPR8CVShgL%2FSt5LqnWyQAzUadmjqZ%2BN0pN1QNyMyO4BLv%2FSnsU08JiCOQz7Egux0PKakCEJ1VE%2F%2Fom%2FZOR4Saue9xdL%2FcmcM6e6prgXOyfHdx6HA%2FyQFj%2B9aAE5w0BhzE9qac6Wqsl4ZNlcw%2BysJPEoiT5u3h%2FDzpqcBePVs7vcWRMhEYFrPbd75oz00ymaftwRndIHeWl9Vpf6%2F1aitJZr3CCZfvDTWb8bbLGF0kNtQ0RF5EWNUyoA833N5EP0%2BtOG7fQJPDBEsuZu%2FmXo7aPygQMZlmPxpDhVUBYimkxEyfgTXu6oP25BE7h9YJo4%2FbziKDIWhEI0QI4B%2FsS5ZLuCD184N6vpXdcCQIoq2AFjg%2BHlGbjTB9krQtpUrSwBxSaKLhI8qEKfNAEmnHDxPK7FVpqgGSU5ClZcCaVX5T8b3vxlGtFXaAbSgn7zcCuNfwK6h5Rvm4sh7a71qLzZgShZnrb%2FNU8e0a%2FD%2F6GkVTzWN8WbNhJowiFrGYQcTCLgY3PD3HN%2FnuqjuHqsY7NzIisJ8Zoj1vQSGe7AeZo2iIjhNw%2FJQB%2BMY8G1YDuDdtoWUJTUWngNR98G11LE8jRcoRxLkaFHeFHlM4idD7MMnC%2BMQGOqUBKrs1l6bcRPEHkfaBpLAuA%2FPx6rZVhbnkrmiDOxL6C4n9TrDJaUQk6JLCaGstXyqQOrW1WSA8%2Bc2WmOA5LH%2FOk724p%2FiCaO%2BS2oV8emS1syVMh0kh1Aby%2Fb5Scd%2BKUeCnvFZBZGLjVhpJU%2FA33%2BJmoHVimDGqltA1KG7voPfB%2F05v%2FAHxWitDQjqIrPiX7p10BHdT0hOHu7FvTSUa4vXEaYUuUUh%2F&X-Amz-Signature=03f59cf945b6d241e91c3b86bbec494c720da81e17e8d8124b0596baa3d04137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDL32TZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIErwE8ScDUksi%2By5701VUli04pvM%2BLrkjmqxOAro6phiAiEAm5bPTVg2jpyhFeSL6o39Sg7Vd13T4FrQJn7zTKau2%2FUq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDGcA0hVixWOUY7oxQSrcA8Oi1aSh5LnhpZlaruX6ffyuPR8CVShgL%2FSt5LqnWyQAzUadmjqZ%2BN0pN1QNyMyO4BLv%2FSnsU08JiCOQz7Egux0PKakCEJ1VE%2F%2Fom%2FZOR4Saue9xdL%2FcmcM6e6prgXOyfHdx6HA%2FyQFj%2B9aAE5w0BhzE9qac6Wqsl4ZNlcw%2BysJPEoiT5u3h%2FDzpqcBePVs7vcWRMhEYFrPbd75oz00ymaftwRndIHeWl9Vpf6%2F1aitJZr3CCZfvDTWb8bbLGF0kNtQ0RF5EWNUyoA833N5EP0%2BtOG7fQJPDBEsuZu%2FmXo7aPygQMZlmPxpDhVUBYimkxEyfgTXu6oP25BE7h9YJo4%2FbziKDIWhEI0QI4B%2FsS5ZLuCD184N6vpXdcCQIoq2AFjg%2BHlGbjTB9krQtpUrSwBxSaKLhI8qEKfNAEmnHDxPK7FVpqgGSU5ClZcCaVX5T8b3vxlGtFXaAbSgn7zcCuNfwK6h5Rvm4sh7a71qLzZgShZnrb%2FNU8e0a%2FD%2F6GkVTzWN8WbNhJowiFrGYQcTCLgY3PD3HN%2FnuqjuHqsY7NzIisJ8Zoj1vQSGe7AeZo2iIjhNw%2FJQB%2BMY8G1YDuDdtoWUJTUWngNR98G11LE8jRcoRxLkaFHeFHlM4idD7MMnC%2BMQGOqUBKrs1l6bcRPEHkfaBpLAuA%2FPx6rZVhbnkrmiDOxL6C4n9TrDJaUQk6JLCaGstXyqQOrW1WSA8%2Bc2WmOA5LH%2FOk724p%2FiCaO%2BS2oV8emS1syVMh0kh1Aby%2Fb5Scd%2BKUeCnvFZBZGLjVhpJU%2FA33%2BJmoHVimDGqltA1KG7voPfB%2F05v%2FAHxWitDQjqIrPiX7p10BHdT0hOHu7FvTSUa4vXEaYUuUUh%2F&X-Amz-Signature=8f6c7e9a2c0c73ead7de7a866a9d75a8edfa392cf3fb952ffcf7dcb81417af76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF4EYBJD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDd9cN25TyMOLDIRmMTItgBQ%2BiHIWGMA8Ut8juJM%2FaSJgIgYuEmE3UuEi4SuRAXfdwJpuc7UEJBIYBY928YA2ol6Qgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPjaps3vDhigKvjdJSrcA2%2BLU19LYKue4BgFNgeryc6kozm5tByv9tqoW4AS1ch%2BWO%2FVlCaEQE7t1CNHwZJKuCfiKP0Ydbp1kwl8d%2FUgRgeSC6K9LkdvRbNZEmjhLo7ayBS4f8ruk8BwBP4w0cMESQx%2BUiKkfKY7ThBS9P8xbSFu%2FvRi%2F80co54RPbd3zjcFoRugR6JOunnBGaHearvhV8%2F4cLqk67Ty7O42h04CEdfvCa75RN7CTUCpPY%2FlI4YmPw59rtWJJG1%2BLe%2FDLZMAwTesbCxNDpaPwAk4upLvFNrzxwpGXBSfUXqG%2B0YHakSwCq%2Fi2oEUVp5QcES06qVP7dT18fVGmgXdJGVFykKr%2BthiVBEmlnyiSgQHoLt4jIOLFDXQKRnOa182tZFjUhgzRizPM7UY%2BlHrrXQjt%2FzAV9HeGhr%2FBP6D%2F3%2B1cXsbJARJoEHk9aDgVVuo2EDzM%2FfRtepNleTKRWs%2FUrRtpAgWhFGe3QNYi3ReG72ps0MW4bP5ciF6ig7WoTAdJjOF47dwfDAlFaUkqfZiOUTuZ3AJuLf8IlPf6MlsXndH6X%2Bdm12VATXTrDS5XI6GbyT4%2Fa%2FaTvjDdJtki6Kb9APNstJbyUGUM5jl4ycGNnNGifiyQfYBgO9GvIxDShq%2FiAzzMIXC%2BMQGOqUBEMaTQqEs%2BrsGb7B2KB699GQLM0mdQbPTVohhgfu2Cd0FJE6itny1A%2F4jeQ4ZAqX8YuyvbQXhoV8K7Qu4M3POoWtVCqm3jZaMA5nAWAOHsnIKPoFHM6PBqHMrElmdgCjR6Lds2KTJcmYjCGYyuSE5o1ERXbQdXGQNWUlyn3NFetQXAp3q26qbnvlOzqqg43Wpl8XQBUI2cWbSubsgbUVccBJqUV%2Fp&X-Amz-Signature=1a917caf325efd36f82f0c92ad9701b089382d042fa5afdcc1e65969a2334259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF4EYBJD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDd9cN25TyMOLDIRmMTItgBQ%2BiHIWGMA8Ut8juJM%2FaSJgIgYuEmE3UuEi4SuRAXfdwJpuc7UEJBIYBY928YA2ol6Qgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPjaps3vDhigKvjdJSrcA2%2BLU19LYKue4BgFNgeryc6kozm5tByv9tqoW4AS1ch%2BWO%2FVlCaEQE7t1CNHwZJKuCfiKP0Ydbp1kwl8d%2FUgRgeSC6K9LkdvRbNZEmjhLo7ayBS4f8ruk8BwBP4w0cMESQx%2BUiKkfKY7ThBS9P8xbSFu%2FvRi%2F80co54RPbd3zjcFoRugR6JOunnBGaHearvhV8%2F4cLqk67Ty7O42h04CEdfvCa75RN7CTUCpPY%2FlI4YmPw59rtWJJG1%2BLe%2FDLZMAwTesbCxNDpaPwAk4upLvFNrzxwpGXBSfUXqG%2B0YHakSwCq%2Fi2oEUVp5QcES06qVP7dT18fVGmgXdJGVFykKr%2BthiVBEmlnyiSgQHoLt4jIOLFDXQKRnOa182tZFjUhgzRizPM7UY%2BlHrrXQjt%2FzAV9HeGhr%2FBP6D%2F3%2B1cXsbJARJoEHk9aDgVVuo2EDzM%2FfRtepNleTKRWs%2FUrRtpAgWhFGe3QNYi3ReG72ps0MW4bP5ciF6ig7WoTAdJjOF47dwfDAlFaUkqfZiOUTuZ3AJuLf8IlPf6MlsXndH6X%2Bdm12VATXTrDS5XI6GbyT4%2Fa%2FaTvjDdJtki6Kb9APNstJbyUGUM5jl4ycGNnNGifiyQfYBgO9GvIxDShq%2FiAzzMIXC%2BMQGOqUBEMaTQqEs%2BrsGb7B2KB699GQLM0mdQbPTVohhgfu2Cd0FJE6itny1A%2F4jeQ4ZAqX8YuyvbQXhoV8K7Qu4M3POoWtVCqm3jZaMA5nAWAOHsnIKPoFHM6PBqHMrElmdgCjR6Lds2KTJcmYjCGYyuSE5o1ERXbQdXGQNWUlyn3NFetQXAp3q26qbnvlOzqqg43Wpl8XQBUI2cWbSubsgbUVccBJqUV%2Fp&X-Amz-Signature=f6415475fccdc122c5e18f7df9f570bbf696d4274d4be5fa2c66eb8bafb2d7f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF4EYBJD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDd9cN25TyMOLDIRmMTItgBQ%2BiHIWGMA8Ut8juJM%2FaSJgIgYuEmE3UuEi4SuRAXfdwJpuc7UEJBIYBY928YA2ol6Qgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPjaps3vDhigKvjdJSrcA2%2BLU19LYKue4BgFNgeryc6kozm5tByv9tqoW4AS1ch%2BWO%2FVlCaEQE7t1CNHwZJKuCfiKP0Ydbp1kwl8d%2FUgRgeSC6K9LkdvRbNZEmjhLo7ayBS4f8ruk8BwBP4w0cMESQx%2BUiKkfKY7ThBS9P8xbSFu%2FvRi%2F80co54RPbd3zjcFoRugR6JOunnBGaHearvhV8%2F4cLqk67Ty7O42h04CEdfvCa75RN7CTUCpPY%2FlI4YmPw59rtWJJG1%2BLe%2FDLZMAwTesbCxNDpaPwAk4upLvFNrzxwpGXBSfUXqG%2B0YHakSwCq%2Fi2oEUVp5QcES06qVP7dT18fVGmgXdJGVFykKr%2BthiVBEmlnyiSgQHoLt4jIOLFDXQKRnOa182tZFjUhgzRizPM7UY%2BlHrrXQjt%2FzAV9HeGhr%2FBP6D%2F3%2B1cXsbJARJoEHk9aDgVVuo2EDzM%2FfRtepNleTKRWs%2FUrRtpAgWhFGe3QNYi3ReG72ps0MW4bP5ciF6ig7WoTAdJjOF47dwfDAlFaUkqfZiOUTuZ3AJuLf8IlPf6MlsXndH6X%2Bdm12VATXTrDS5XI6GbyT4%2Fa%2FaTvjDdJtki6Kb9APNstJbyUGUM5jl4ycGNnNGifiyQfYBgO9GvIxDShq%2FiAzzMIXC%2BMQGOqUBEMaTQqEs%2BrsGb7B2KB699GQLM0mdQbPTVohhgfu2Cd0FJE6itny1A%2F4jeQ4ZAqX8YuyvbQXhoV8K7Qu4M3POoWtVCqm3jZaMA5nAWAOHsnIKPoFHM6PBqHMrElmdgCjR6Lds2KTJcmYjCGYyuSE5o1ERXbQdXGQNWUlyn3NFetQXAp3q26qbnvlOzqqg43Wpl8XQBUI2cWbSubsgbUVccBJqUV%2Fp&X-Amz-Signature=8c91a2375794b3ad325eaec32543598dc1b294ce178438107a91549fce233b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF4EYBJD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDd9cN25TyMOLDIRmMTItgBQ%2BiHIWGMA8Ut8juJM%2FaSJgIgYuEmE3UuEi4SuRAXfdwJpuc7UEJBIYBY928YA2ol6Qgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPjaps3vDhigKvjdJSrcA2%2BLU19LYKue4BgFNgeryc6kozm5tByv9tqoW4AS1ch%2BWO%2FVlCaEQE7t1CNHwZJKuCfiKP0Ydbp1kwl8d%2FUgRgeSC6K9LkdvRbNZEmjhLo7ayBS4f8ruk8BwBP4w0cMESQx%2BUiKkfKY7ThBS9P8xbSFu%2FvRi%2F80co54RPbd3zjcFoRugR6JOunnBGaHearvhV8%2F4cLqk67Ty7O42h04CEdfvCa75RN7CTUCpPY%2FlI4YmPw59rtWJJG1%2BLe%2FDLZMAwTesbCxNDpaPwAk4upLvFNrzxwpGXBSfUXqG%2B0YHakSwCq%2Fi2oEUVp5QcES06qVP7dT18fVGmgXdJGVFykKr%2BthiVBEmlnyiSgQHoLt4jIOLFDXQKRnOa182tZFjUhgzRizPM7UY%2BlHrrXQjt%2FzAV9HeGhr%2FBP6D%2F3%2B1cXsbJARJoEHk9aDgVVuo2EDzM%2FfRtepNleTKRWs%2FUrRtpAgWhFGe3QNYi3ReG72ps0MW4bP5ciF6ig7WoTAdJjOF47dwfDAlFaUkqfZiOUTuZ3AJuLf8IlPf6MlsXndH6X%2Bdm12VATXTrDS5XI6GbyT4%2Fa%2FaTvjDdJtki6Kb9APNstJbyUGUM5jl4ycGNnNGifiyQfYBgO9GvIxDShq%2FiAzzMIXC%2BMQGOqUBEMaTQqEs%2BrsGb7B2KB699GQLM0mdQbPTVohhgfu2Cd0FJE6itny1A%2F4jeQ4ZAqX8YuyvbQXhoV8K7Qu4M3POoWtVCqm3jZaMA5nAWAOHsnIKPoFHM6PBqHMrElmdgCjR6Lds2KTJcmYjCGYyuSE5o1ERXbQdXGQNWUlyn3NFetQXAp3q26qbnvlOzqqg43Wpl8XQBUI2cWbSubsgbUVccBJqUV%2Fp&X-Amz-Signature=7d58bd13c6937a26357c230d341a62e7aa07130762378d6438438e24b1eb11aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF4EYBJD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDd9cN25TyMOLDIRmMTItgBQ%2BiHIWGMA8Ut8juJM%2FaSJgIgYuEmE3UuEi4SuRAXfdwJpuc7UEJBIYBY928YA2ol6Qgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPjaps3vDhigKvjdJSrcA2%2BLU19LYKue4BgFNgeryc6kozm5tByv9tqoW4AS1ch%2BWO%2FVlCaEQE7t1CNHwZJKuCfiKP0Ydbp1kwl8d%2FUgRgeSC6K9LkdvRbNZEmjhLo7ayBS4f8ruk8BwBP4w0cMESQx%2BUiKkfKY7ThBS9P8xbSFu%2FvRi%2F80co54RPbd3zjcFoRugR6JOunnBGaHearvhV8%2F4cLqk67Ty7O42h04CEdfvCa75RN7CTUCpPY%2FlI4YmPw59rtWJJG1%2BLe%2FDLZMAwTesbCxNDpaPwAk4upLvFNrzxwpGXBSfUXqG%2B0YHakSwCq%2Fi2oEUVp5QcES06qVP7dT18fVGmgXdJGVFykKr%2BthiVBEmlnyiSgQHoLt4jIOLFDXQKRnOa182tZFjUhgzRizPM7UY%2BlHrrXQjt%2FzAV9HeGhr%2FBP6D%2F3%2B1cXsbJARJoEHk9aDgVVuo2EDzM%2FfRtepNleTKRWs%2FUrRtpAgWhFGe3QNYi3ReG72ps0MW4bP5ciF6ig7WoTAdJjOF47dwfDAlFaUkqfZiOUTuZ3AJuLf8IlPf6MlsXndH6X%2Bdm12VATXTrDS5XI6GbyT4%2Fa%2FaTvjDdJtki6Kb9APNstJbyUGUM5jl4ycGNnNGifiyQfYBgO9GvIxDShq%2FiAzzMIXC%2BMQGOqUBEMaTQqEs%2BrsGb7B2KB699GQLM0mdQbPTVohhgfu2Cd0FJE6itny1A%2F4jeQ4ZAqX8YuyvbQXhoV8K7Qu4M3POoWtVCqm3jZaMA5nAWAOHsnIKPoFHM6PBqHMrElmdgCjR6Lds2KTJcmYjCGYyuSE5o1ERXbQdXGQNWUlyn3NFetQXAp3q26qbnvlOzqqg43Wpl8XQBUI2cWbSubsgbUVccBJqUV%2Fp&X-Amz-Signature=104b571c62cf03fdbd16120f661f1e2b66ea50a41eec76d653403f4dbb1c5ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF4EYBJD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDd9cN25TyMOLDIRmMTItgBQ%2BiHIWGMA8Ut8juJM%2FaSJgIgYuEmE3UuEi4SuRAXfdwJpuc7UEJBIYBY928YA2ol6Qgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPjaps3vDhigKvjdJSrcA2%2BLU19LYKue4BgFNgeryc6kozm5tByv9tqoW4AS1ch%2BWO%2FVlCaEQE7t1CNHwZJKuCfiKP0Ydbp1kwl8d%2FUgRgeSC6K9LkdvRbNZEmjhLo7ayBS4f8ruk8BwBP4w0cMESQx%2BUiKkfKY7ThBS9P8xbSFu%2FvRi%2F80co54RPbd3zjcFoRugR6JOunnBGaHearvhV8%2F4cLqk67Ty7O42h04CEdfvCa75RN7CTUCpPY%2FlI4YmPw59rtWJJG1%2BLe%2FDLZMAwTesbCxNDpaPwAk4upLvFNrzxwpGXBSfUXqG%2B0YHakSwCq%2Fi2oEUVp5QcES06qVP7dT18fVGmgXdJGVFykKr%2BthiVBEmlnyiSgQHoLt4jIOLFDXQKRnOa182tZFjUhgzRizPM7UY%2BlHrrXQjt%2FzAV9HeGhr%2FBP6D%2F3%2B1cXsbJARJoEHk9aDgVVuo2EDzM%2FfRtepNleTKRWs%2FUrRtpAgWhFGe3QNYi3ReG72ps0MW4bP5ciF6ig7WoTAdJjOF47dwfDAlFaUkqfZiOUTuZ3AJuLf8IlPf6MlsXndH6X%2Bdm12VATXTrDS5XI6GbyT4%2Fa%2FaTvjDdJtki6Kb9APNstJbyUGUM5jl4ycGNnNGifiyQfYBgO9GvIxDShq%2FiAzzMIXC%2BMQGOqUBEMaTQqEs%2BrsGb7B2KB699GQLM0mdQbPTVohhgfu2Cd0FJE6itny1A%2F4jeQ4ZAqX8YuyvbQXhoV8K7Qu4M3POoWtVCqm3jZaMA5nAWAOHsnIKPoFHM6PBqHMrElmdgCjR6Lds2KTJcmYjCGYyuSE5o1ERXbQdXGQNWUlyn3NFetQXAp3q26qbnvlOzqqg43Wpl8XQBUI2cWbSubsgbUVccBJqUV%2Fp&X-Amz-Signature=59112320257eb4487fff9442b03bf27c7f8a98e7a6fe51836fa61c4b221613f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF4EYBJD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDd9cN25TyMOLDIRmMTItgBQ%2BiHIWGMA8Ut8juJM%2FaSJgIgYuEmE3UuEi4SuRAXfdwJpuc7UEJBIYBY928YA2ol6Qgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPjaps3vDhigKvjdJSrcA2%2BLU19LYKue4BgFNgeryc6kozm5tByv9tqoW4AS1ch%2BWO%2FVlCaEQE7t1CNHwZJKuCfiKP0Ydbp1kwl8d%2FUgRgeSC6K9LkdvRbNZEmjhLo7ayBS4f8ruk8BwBP4w0cMESQx%2BUiKkfKY7ThBS9P8xbSFu%2FvRi%2F80co54RPbd3zjcFoRugR6JOunnBGaHearvhV8%2F4cLqk67Ty7O42h04CEdfvCa75RN7CTUCpPY%2FlI4YmPw59rtWJJG1%2BLe%2FDLZMAwTesbCxNDpaPwAk4upLvFNrzxwpGXBSfUXqG%2B0YHakSwCq%2Fi2oEUVp5QcES06qVP7dT18fVGmgXdJGVFykKr%2BthiVBEmlnyiSgQHoLt4jIOLFDXQKRnOa182tZFjUhgzRizPM7UY%2BlHrrXQjt%2FzAV9HeGhr%2FBP6D%2F3%2B1cXsbJARJoEHk9aDgVVuo2EDzM%2FfRtepNleTKRWs%2FUrRtpAgWhFGe3QNYi3ReG72ps0MW4bP5ciF6ig7WoTAdJjOF47dwfDAlFaUkqfZiOUTuZ3AJuLf8IlPf6MlsXndH6X%2Bdm12VATXTrDS5XI6GbyT4%2Fa%2FaTvjDdJtki6Kb9APNstJbyUGUM5jl4ycGNnNGifiyQfYBgO9GvIxDShq%2FiAzzMIXC%2BMQGOqUBEMaTQqEs%2BrsGb7B2KB699GQLM0mdQbPTVohhgfu2Cd0FJE6itny1A%2F4jeQ4ZAqX8YuyvbQXhoV8K7Qu4M3POoWtVCqm3jZaMA5nAWAOHsnIKPoFHM6PBqHMrElmdgCjR6Lds2KTJcmYjCGYyuSE5o1ERXbQdXGQNWUlyn3NFetQXAp3q26qbnvlOzqqg43Wpl8XQBUI2cWbSubsgbUVccBJqUV%2Fp&X-Amz-Signature=8c91a2375794b3ad325eaec32543598dc1b294ce178438107a91549fce233b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF4EYBJD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDd9cN25TyMOLDIRmMTItgBQ%2BiHIWGMA8Ut8juJM%2FaSJgIgYuEmE3UuEi4SuRAXfdwJpuc7UEJBIYBY928YA2ol6Qgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPjaps3vDhigKvjdJSrcA2%2BLU19LYKue4BgFNgeryc6kozm5tByv9tqoW4AS1ch%2BWO%2FVlCaEQE7t1CNHwZJKuCfiKP0Ydbp1kwl8d%2FUgRgeSC6K9LkdvRbNZEmjhLo7ayBS4f8ruk8BwBP4w0cMESQx%2BUiKkfKY7ThBS9P8xbSFu%2FvRi%2F80co54RPbd3zjcFoRugR6JOunnBGaHearvhV8%2F4cLqk67Ty7O42h04CEdfvCa75RN7CTUCpPY%2FlI4YmPw59rtWJJG1%2BLe%2FDLZMAwTesbCxNDpaPwAk4upLvFNrzxwpGXBSfUXqG%2B0YHakSwCq%2Fi2oEUVp5QcES06qVP7dT18fVGmgXdJGVFykKr%2BthiVBEmlnyiSgQHoLt4jIOLFDXQKRnOa182tZFjUhgzRizPM7UY%2BlHrrXQjt%2FzAV9HeGhr%2FBP6D%2F3%2B1cXsbJARJoEHk9aDgVVuo2EDzM%2FfRtepNleTKRWs%2FUrRtpAgWhFGe3QNYi3ReG72ps0MW4bP5ciF6ig7WoTAdJjOF47dwfDAlFaUkqfZiOUTuZ3AJuLf8IlPf6MlsXndH6X%2Bdm12VATXTrDS5XI6GbyT4%2Fa%2FaTvjDdJtki6Kb9APNstJbyUGUM5jl4ycGNnNGifiyQfYBgO9GvIxDShq%2FiAzzMIXC%2BMQGOqUBEMaTQqEs%2BrsGb7B2KB699GQLM0mdQbPTVohhgfu2Cd0FJE6itny1A%2F4jeQ4ZAqX8YuyvbQXhoV8K7Qu4M3POoWtVCqm3jZaMA5nAWAOHsnIKPoFHM6PBqHMrElmdgCjR6Lds2KTJcmYjCGYyuSE5o1ERXbQdXGQNWUlyn3NFetQXAp3q26qbnvlOzqqg43Wpl8XQBUI2cWbSubsgbUVccBJqUV%2Fp&X-Amz-Signature=dc9c1317410b4a019c4c2755f86fe60396747fe8367fcc70359cf137bcb10fad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF4EYBJD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDd9cN25TyMOLDIRmMTItgBQ%2BiHIWGMA8Ut8juJM%2FaSJgIgYuEmE3UuEi4SuRAXfdwJpuc7UEJBIYBY928YA2ol6Qgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPjaps3vDhigKvjdJSrcA2%2BLU19LYKue4BgFNgeryc6kozm5tByv9tqoW4AS1ch%2BWO%2FVlCaEQE7t1CNHwZJKuCfiKP0Ydbp1kwl8d%2FUgRgeSC6K9LkdvRbNZEmjhLo7ayBS4f8ruk8BwBP4w0cMESQx%2BUiKkfKY7ThBS9P8xbSFu%2FvRi%2F80co54RPbd3zjcFoRugR6JOunnBGaHearvhV8%2F4cLqk67Ty7O42h04CEdfvCa75RN7CTUCpPY%2FlI4YmPw59rtWJJG1%2BLe%2FDLZMAwTesbCxNDpaPwAk4upLvFNrzxwpGXBSfUXqG%2B0YHakSwCq%2Fi2oEUVp5QcES06qVP7dT18fVGmgXdJGVFykKr%2BthiVBEmlnyiSgQHoLt4jIOLFDXQKRnOa182tZFjUhgzRizPM7UY%2BlHrrXQjt%2FzAV9HeGhr%2FBP6D%2F3%2B1cXsbJARJoEHk9aDgVVuo2EDzM%2FfRtepNleTKRWs%2FUrRtpAgWhFGe3QNYi3ReG72ps0MW4bP5ciF6ig7WoTAdJjOF47dwfDAlFaUkqfZiOUTuZ3AJuLf8IlPf6MlsXndH6X%2Bdm12VATXTrDS5XI6GbyT4%2Fa%2FaTvjDdJtki6Kb9APNstJbyUGUM5jl4ycGNnNGifiyQfYBgO9GvIxDShq%2FiAzzMIXC%2BMQGOqUBEMaTQqEs%2BrsGb7B2KB699GQLM0mdQbPTVohhgfu2Cd0FJE6itny1A%2F4jeQ4ZAqX8YuyvbQXhoV8K7Qu4M3POoWtVCqm3jZaMA5nAWAOHsnIKPoFHM6PBqHMrElmdgCjR6Lds2KTJcmYjCGYyuSE5o1ERXbQdXGQNWUlyn3NFetQXAp3q26qbnvlOzqqg43Wpl8XQBUI2cWbSubsgbUVccBJqUV%2Fp&X-Amz-Signature=7f232b1d6e62e1674cf93d436949d846b171c6ce7238a64e7a1adee57aebabc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF4EYBJD%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDd9cN25TyMOLDIRmMTItgBQ%2BiHIWGMA8Ut8juJM%2FaSJgIgYuEmE3UuEi4SuRAXfdwJpuc7UEJBIYBY928YA2ol6Qgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPjaps3vDhigKvjdJSrcA2%2BLU19LYKue4BgFNgeryc6kozm5tByv9tqoW4AS1ch%2BWO%2FVlCaEQE7t1CNHwZJKuCfiKP0Ydbp1kwl8d%2FUgRgeSC6K9LkdvRbNZEmjhLo7ayBS4f8ruk8BwBP4w0cMESQx%2BUiKkfKY7ThBS9P8xbSFu%2FvRi%2F80co54RPbd3zjcFoRugR6JOunnBGaHearvhV8%2F4cLqk67Ty7O42h04CEdfvCa75RN7CTUCpPY%2FlI4YmPw59rtWJJG1%2BLe%2FDLZMAwTesbCxNDpaPwAk4upLvFNrzxwpGXBSfUXqG%2B0YHakSwCq%2Fi2oEUVp5QcES06qVP7dT18fVGmgXdJGVFykKr%2BthiVBEmlnyiSgQHoLt4jIOLFDXQKRnOa182tZFjUhgzRizPM7UY%2BlHrrXQjt%2FzAV9HeGhr%2FBP6D%2F3%2B1cXsbJARJoEHk9aDgVVuo2EDzM%2FfRtepNleTKRWs%2FUrRtpAgWhFGe3QNYi3ReG72ps0MW4bP5ciF6ig7WoTAdJjOF47dwfDAlFaUkqfZiOUTuZ3AJuLf8IlPf6MlsXndH6X%2Bdm12VATXTrDS5XI6GbyT4%2Fa%2FaTvjDdJtki6Kb9APNstJbyUGUM5jl4ycGNnNGifiyQfYBgO9GvIxDShq%2FiAzzMIXC%2BMQGOqUBEMaTQqEs%2BrsGb7B2KB699GQLM0mdQbPTVohhgfu2Cd0FJE6itny1A%2F4jeQ4ZAqX8YuyvbQXhoV8K7Qu4M3POoWtVCqm3jZaMA5nAWAOHsnIKPoFHM6PBqHMrElmdgCjR6Lds2KTJcmYjCGYyuSE5o1ERXbQdXGQNWUlyn3NFetQXAp3q26qbnvlOzqqg43Wpl8XQBUI2cWbSubsgbUVccBJqUV%2Fp&X-Amz-Signature=d967e767d1fc92fea2477a2276a86e0f96744ada05ec7d9258f86ab7e8872d7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
