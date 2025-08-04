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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJG5HMSC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHo3ITbAPt9DV%2BzsDMr6z9dusXUWVIRFPe44DBV5uZCjAiEA0U%2B5n%2BAW7k3VurCS9QvsEXnMo4t%2B7J5%2BZKl8UIBHZ54q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLxj4DAyclItKTlyhyrcA6Xgl7OPdMr6J7MFCcYKo1pfNjWFcV14UQ4r8zFzckTkAO7GveqADdMAYYJDkTt1iBmOmUsb29mzhfFLro5Pv6DVE8t%2BNhEaPiWWudShpycAUvDMuCDCQ3HWVWbsqPv80Tc1UzkcotSC4GzkoSk0waDAzpYWHZFoV1jwNMYuvJC%2BemWOYLIcpLgmAG02%2BXFdrPKq85uXfMsUb2vQAb0EFySMZ8ekAucfEL0MZ%2BQd7Rs3OgrUhG8kKGbSVv66fWCrL9BrVgNWNK62X7P0BCITTRVbSqvZioNligGIRrTgoMAJHajHsSRrLXtQk%2FjHOFSo1FfAMD7ld0uxR%2F1gILihKmJQEp%2BjiKPyI4ROn2jXJD1FYyorF1kYtuvPTOi74tb4ab1KFaMRw8iflTLR89s34MpB0aKCixMJWRopL4hcGBp%2FsxoV77uczo%2Ffnq%2B0%2B6HRQds48ed93UlBaQ4YP%2FHDBHGzVrgx%2BlrvyHd4okPfZfmwh7WQt5FzHLnAshCnKrBOhNjsHjJg%2FJjIOrlsEGBC59h8HSgehmgur5Dd%2Bczxfmrz0L%2FPLudOlIvJxd1rKT8BxzPBbSPg1TWvUWxYxd0Al2q7cgGpPtxs9mVzT0kyZXM03NnZFB%2BImFrbkCVEMIH0xMQGOqUBIIPyqfO00QJqqJbcLaHDXQfnLrzqyteZD0g61GkcIVw%2F1FnifBYDWFvOvoClr8tn%2BcjE6pETYYv1yPJORgP%2BwNeP6ffgCrXh2f%2F1U5zno%2BeF91oL2Ay8s9upsdewvsAZ7oenM8QcRKfqCMkYBDkVJbBHmMGXXKlx767txNuXJUaMjkYmKjvQyD3FpXReLtAdMEWIYHBmduUEITXUuc4kJSuXydFB&X-Amz-Signature=adfc3c2574c82acfc1ef0a50e8a2c72f4e426211fd85cf73d0f23fbb68889bea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJG5HMSC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHo3ITbAPt9DV%2BzsDMr6z9dusXUWVIRFPe44DBV5uZCjAiEA0U%2B5n%2BAW7k3VurCS9QvsEXnMo4t%2B7J5%2BZKl8UIBHZ54q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLxj4DAyclItKTlyhyrcA6Xgl7OPdMr6J7MFCcYKo1pfNjWFcV14UQ4r8zFzckTkAO7GveqADdMAYYJDkTt1iBmOmUsb29mzhfFLro5Pv6DVE8t%2BNhEaPiWWudShpycAUvDMuCDCQ3HWVWbsqPv80Tc1UzkcotSC4GzkoSk0waDAzpYWHZFoV1jwNMYuvJC%2BemWOYLIcpLgmAG02%2BXFdrPKq85uXfMsUb2vQAb0EFySMZ8ekAucfEL0MZ%2BQd7Rs3OgrUhG8kKGbSVv66fWCrL9BrVgNWNK62X7P0BCITTRVbSqvZioNligGIRrTgoMAJHajHsSRrLXtQk%2FjHOFSo1FfAMD7ld0uxR%2F1gILihKmJQEp%2BjiKPyI4ROn2jXJD1FYyorF1kYtuvPTOi74tb4ab1KFaMRw8iflTLR89s34MpB0aKCixMJWRopL4hcGBp%2FsxoV77uczo%2Ffnq%2B0%2B6HRQds48ed93UlBaQ4YP%2FHDBHGzVrgx%2BlrvyHd4okPfZfmwh7WQt5FzHLnAshCnKrBOhNjsHjJg%2FJjIOrlsEGBC59h8HSgehmgur5Dd%2Bczxfmrz0L%2FPLudOlIvJxd1rKT8BxzPBbSPg1TWvUWxYxd0Al2q7cgGpPtxs9mVzT0kyZXM03NnZFB%2BImFrbkCVEMIH0xMQGOqUBIIPyqfO00QJqqJbcLaHDXQfnLrzqyteZD0g61GkcIVw%2F1FnifBYDWFvOvoClr8tn%2BcjE6pETYYv1yPJORgP%2BwNeP6ffgCrXh2f%2F1U5zno%2BeF91oL2Ay8s9upsdewvsAZ7oenM8QcRKfqCMkYBDkVJbBHmMGXXKlx767txNuXJUaMjkYmKjvQyD3FpXReLtAdMEWIYHBmduUEITXUuc4kJSuXydFB&X-Amz-Signature=f262978ee0f99324814381840e496fb09b41692b8fe44c5a0ba262b799f55351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJG5HMSC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHo3ITbAPt9DV%2BzsDMr6z9dusXUWVIRFPe44DBV5uZCjAiEA0U%2B5n%2BAW7k3VurCS9QvsEXnMo4t%2B7J5%2BZKl8UIBHZ54q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLxj4DAyclItKTlyhyrcA6Xgl7OPdMr6J7MFCcYKo1pfNjWFcV14UQ4r8zFzckTkAO7GveqADdMAYYJDkTt1iBmOmUsb29mzhfFLro5Pv6DVE8t%2BNhEaPiWWudShpycAUvDMuCDCQ3HWVWbsqPv80Tc1UzkcotSC4GzkoSk0waDAzpYWHZFoV1jwNMYuvJC%2BemWOYLIcpLgmAG02%2BXFdrPKq85uXfMsUb2vQAb0EFySMZ8ekAucfEL0MZ%2BQd7Rs3OgrUhG8kKGbSVv66fWCrL9BrVgNWNK62X7P0BCITTRVbSqvZioNligGIRrTgoMAJHajHsSRrLXtQk%2FjHOFSo1FfAMD7ld0uxR%2F1gILihKmJQEp%2BjiKPyI4ROn2jXJD1FYyorF1kYtuvPTOi74tb4ab1KFaMRw8iflTLR89s34MpB0aKCixMJWRopL4hcGBp%2FsxoV77uczo%2Ffnq%2B0%2B6HRQds48ed93UlBaQ4YP%2FHDBHGzVrgx%2BlrvyHd4okPfZfmwh7WQt5FzHLnAshCnKrBOhNjsHjJg%2FJjIOrlsEGBC59h8HSgehmgur5Dd%2Bczxfmrz0L%2FPLudOlIvJxd1rKT8BxzPBbSPg1TWvUWxYxd0Al2q7cgGpPtxs9mVzT0kyZXM03NnZFB%2BImFrbkCVEMIH0xMQGOqUBIIPyqfO00QJqqJbcLaHDXQfnLrzqyteZD0g61GkcIVw%2F1FnifBYDWFvOvoClr8tn%2BcjE6pETYYv1yPJORgP%2BwNeP6ffgCrXh2f%2F1U5zno%2BeF91oL2Ay8s9upsdewvsAZ7oenM8QcRKfqCMkYBDkVJbBHmMGXXKlx767txNuXJUaMjkYmKjvQyD3FpXReLtAdMEWIYHBmduUEITXUuc4kJSuXydFB&X-Amz-Signature=9b57dae5676df466056d9c7c407b516a77d1849239602175ea07254b8b726754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJG5HMSC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHo3ITbAPt9DV%2BzsDMr6z9dusXUWVIRFPe44DBV5uZCjAiEA0U%2B5n%2BAW7k3VurCS9QvsEXnMo4t%2B7J5%2BZKl8UIBHZ54q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLxj4DAyclItKTlyhyrcA6Xgl7OPdMr6J7MFCcYKo1pfNjWFcV14UQ4r8zFzckTkAO7GveqADdMAYYJDkTt1iBmOmUsb29mzhfFLro5Pv6DVE8t%2BNhEaPiWWudShpycAUvDMuCDCQ3HWVWbsqPv80Tc1UzkcotSC4GzkoSk0waDAzpYWHZFoV1jwNMYuvJC%2BemWOYLIcpLgmAG02%2BXFdrPKq85uXfMsUb2vQAb0EFySMZ8ekAucfEL0MZ%2BQd7Rs3OgrUhG8kKGbSVv66fWCrL9BrVgNWNK62X7P0BCITTRVbSqvZioNligGIRrTgoMAJHajHsSRrLXtQk%2FjHOFSo1FfAMD7ld0uxR%2F1gILihKmJQEp%2BjiKPyI4ROn2jXJD1FYyorF1kYtuvPTOi74tb4ab1KFaMRw8iflTLR89s34MpB0aKCixMJWRopL4hcGBp%2FsxoV77uczo%2Ffnq%2B0%2B6HRQds48ed93UlBaQ4YP%2FHDBHGzVrgx%2BlrvyHd4okPfZfmwh7WQt5FzHLnAshCnKrBOhNjsHjJg%2FJjIOrlsEGBC59h8HSgehmgur5Dd%2Bczxfmrz0L%2FPLudOlIvJxd1rKT8BxzPBbSPg1TWvUWxYxd0Al2q7cgGpPtxs9mVzT0kyZXM03NnZFB%2BImFrbkCVEMIH0xMQGOqUBIIPyqfO00QJqqJbcLaHDXQfnLrzqyteZD0g61GkcIVw%2F1FnifBYDWFvOvoClr8tn%2BcjE6pETYYv1yPJORgP%2BwNeP6ffgCrXh2f%2F1U5zno%2BeF91oL2Ay8s9upsdewvsAZ7oenM8QcRKfqCMkYBDkVJbBHmMGXXKlx767txNuXJUaMjkYmKjvQyD3FpXReLtAdMEWIYHBmduUEITXUuc4kJSuXydFB&X-Amz-Signature=605400485067b6f6f2fbe42455340d18316411556018c6ef7af83dde84658275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJG5HMSC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHo3ITbAPt9DV%2BzsDMr6z9dusXUWVIRFPe44DBV5uZCjAiEA0U%2B5n%2BAW7k3VurCS9QvsEXnMo4t%2B7J5%2BZKl8UIBHZ54q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLxj4DAyclItKTlyhyrcA6Xgl7OPdMr6J7MFCcYKo1pfNjWFcV14UQ4r8zFzckTkAO7GveqADdMAYYJDkTt1iBmOmUsb29mzhfFLro5Pv6DVE8t%2BNhEaPiWWudShpycAUvDMuCDCQ3HWVWbsqPv80Tc1UzkcotSC4GzkoSk0waDAzpYWHZFoV1jwNMYuvJC%2BemWOYLIcpLgmAG02%2BXFdrPKq85uXfMsUb2vQAb0EFySMZ8ekAucfEL0MZ%2BQd7Rs3OgrUhG8kKGbSVv66fWCrL9BrVgNWNK62X7P0BCITTRVbSqvZioNligGIRrTgoMAJHajHsSRrLXtQk%2FjHOFSo1FfAMD7ld0uxR%2F1gILihKmJQEp%2BjiKPyI4ROn2jXJD1FYyorF1kYtuvPTOi74tb4ab1KFaMRw8iflTLR89s34MpB0aKCixMJWRopL4hcGBp%2FsxoV77uczo%2Ffnq%2B0%2B6HRQds48ed93UlBaQ4YP%2FHDBHGzVrgx%2BlrvyHd4okPfZfmwh7WQt5FzHLnAshCnKrBOhNjsHjJg%2FJjIOrlsEGBC59h8HSgehmgur5Dd%2Bczxfmrz0L%2FPLudOlIvJxd1rKT8BxzPBbSPg1TWvUWxYxd0Al2q7cgGpPtxs9mVzT0kyZXM03NnZFB%2BImFrbkCVEMIH0xMQGOqUBIIPyqfO00QJqqJbcLaHDXQfnLrzqyteZD0g61GkcIVw%2F1FnifBYDWFvOvoClr8tn%2BcjE6pETYYv1yPJORgP%2BwNeP6ffgCrXh2f%2F1U5zno%2BeF91oL2Ay8s9upsdewvsAZ7oenM8QcRKfqCMkYBDkVJbBHmMGXXKlx767txNuXJUaMjkYmKjvQyD3FpXReLtAdMEWIYHBmduUEITXUuc4kJSuXydFB&X-Amz-Signature=d9c7ccf58d1af6ac7d1068c56b512eb8a7b35c64ce96f94f5050759b35b8e8b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJG5HMSC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHo3ITbAPt9DV%2BzsDMr6z9dusXUWVIRFPe44DBV5uZCjAiEA0U%2B5n%2BAW7k3VurCS9QvsEXnMo4t%2B7J5%2BZKl8UIBHZ54q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLxj4DAyclItKTlyhyrcA6Xgl7OPdMr6J7MFCcYKo1pfNjWFcV14UQ4r8zFzckTkAO7GveqADdMAYYJDkTt1iBmOmUsb29mzhfFLro5Pv6DVE8t%2BNhEaPiWWudShpycAUvDMuCDCQ3HWVWbsqPv80Tc1UzkcotSC4GzkoSk0waDAzpYWHZFoV1jwNMYuvJC%2BemWOYLIcpLgmAG02%2BXFdrPKq85uXfMsUb2vQAb0EFySMZ8ekAucfEL0MZ%2BQd7Rs3OgrUhG8kKGbSVv66fWCrL9BrVgNWNK62X7P0BCITTRVbSqvZioNligGIRrTgoMAJHajHsSRrLXtQk%2FjHOFSo1FfAMD7ld0uxR%2F1gILihKmJQEp%2BjiKPyI4ROn2jXJD1FYyorF1kYtuvPTOi74tb4ab1KFaMRw8iflTLR89s34MpB0aKCixMJWRopL4hcGBp%2FsxoV77uczo%2Ffnq%2B0%2B6HRQds48ed93UlBaQ4YP%2FHDBHGzVrgx%2BlrvyHd4okPfZfmwh7WQt5FzHLnAshCnKrBOhNjsHjJg%2FJjIOrlsEGBC59h8HSgehmgur5Dd%2Bczxfmrz0L%2FPLudOlIvJxd1rKT8BxzPBbSPg1TWvUWxYxd0Al2q7cgGpPtxs9mVzT0kyZXM03NnZFB%2BImFrbkCVEMIH0xMQGOqUBIIPyqfO00QJqqJbcLaHDXQfnLrzqyteZD0g61GkcIVw%2F1FnifBYDWFvOvoClr8tn%2BcjE6pETYYv1yPJORgP%2BwNeP6ffgCrXh2f%2F1U5zno%2BeF91oL2Ay8s9upsdewvsAZ7oenM8QcRKfqCMkYBDkVJbBHmMGXXKlx767txNuXJUaMjkYmKjvQyD3FpXReLtAdMEWIYHBmduUEITXUuc4kJSuXydFB&X-Amz-Signature=938036e469f73201bddbee0d1319d2526780944a1e1583a070697aa5c7ff6832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJG5HMSC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHo3ITbAPt9DV%2BzsDMr6z9dusXUWVIRFPe44DBV5uZCjAiEA0U%2B5n%2BAW7k3VurCS9QvsEXnMo4t%2B7J5%2BZKl8UIBHZ54q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLxj4DAyclItKTlyhyrcA6Xgl7OPdMr6J7MFCcYKo1pfNjWFcV14UQ4r8zFzckTkAO7GveqADdMAYYJDkTt1iBmOmUsb29mzhfFLro5Pv6DVE8t%2BNhEaPiWWudShpycAUvDMuCDCQ3HWVWbsqPv80Tc1UzkcotSC4GzkoSk0waDAzpYWHZFoV1jwNMYuvJC%2BemWOYLIcpLgmAG02%2BXFdrPKq85uXfMsUb2vQAb0EFySMZ8ekAucfEL0MZ%2BQd7Rs3OgrUhG8kKGbSVv66fWCrL9BrVgNWNK62X7P0BCITTRVbSqvZioNligGIRrTgoMAJHajHsSRrLXtQk%2FjHOFSo1FfAMD7ld0uxR%2F1gILihKmJQEp%2BjiKPyI4ROn2jXJD1FYyorF1kYtuvPTOi74tb4ab1KFaMRw8iflTLR89s34MpB0aKCixMJWRopL4hcGBp%2FsxoV77uczo%2Ffnq%2B0%2B6HRQds48ed93UlBaQ4YP%2FHDBHGzVrgx%2BlrvyHd4okPfZfmwh7WQt5FzHLnAshCnKrBOhNjsHjJg%2FJjIOrlsEGBC59h8HSgehmgur5Dd%2Bczxfmrz0L%2FPLudOlIvJxd1rKT8BxzPBbSPg1TWvUWxYxd0Al2q7cgGpPtxs9mVzT0kyZXM03NnZFB%2BImFrbkCVEMIH0xMQGOqUBIIPyqfO00QJqqJbcLaHDXQfnLrzqyteZD0g61GkcIVw%2F1FnifBYDWFvOvoClr8tn%2BcjE6pETYYv1yPJORgP%2BwNeP6ffgCrXh2f%2F1U5zno%2BeF91oL2Ay8s9upsdewvsAZ7oenM8QcRKfqCMkYBDkVJbBHmMGXXKlx767txNuXJUaMjkYmKjvQyD3FpXReLtAdMEWIYHBmduUEITXUuc4kJSuXydFB&X-Amz-Signature=a541b3a838391ab9e99cf60534ab17cd9a9b4d60dcb86bcae5cda168681229f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJG5HMSC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHo3ITbAPt9DV%2BzsDMr6z9dusXUWVIRFPe44DBV5uZCjAiEA0U%2B5n%2BAW7k3VurCS9QvsEXnMo4t%2B7J5%2BZKl8UIBHZ54q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLxj4DAyclItKTlyhyrcA6Xgl7OPdMr6J7MFCcYKo1pfNjWFcV14UQ4r8zFzckTkAO7GveqADdMAYYJDkTt1iBmOmUsb29mzhfFLro5Pv6DVE8t%2BNhEaPiWWudShpycAUvDMuCDCQ3HWVWbsqPv80Tc1UzkcotSC4GzkoSk0waDAzpYWHZFoV1jwNMYuvJC%2BemWOYLIcpLgmAG02%2BXFdrPKq85uXfMsUb2vQAb0EFySMZ8ekAucfEL0MZ%2BQd7Rs3OgrUhG8kKGbSVv66fWCrL9BrVgNWNK62X7P0BCITTRVbSqvZioNligGIRrTgoMAJHajHsSRrLXtQk%2FjHOFSo1FfAMD7ld0uxR%2F1gILihKmJQEp%2BjiKPyI4ROn2jXJD1FYyorF1kYtuvPTOi74tb4ab1KFaMRw8iflTLR89s34MpB0aKCixMJWRopL4hcGBp%2FsxoV77uczo%2Ffnq%2B0%2B6HRQds48ed93UlBaQ4YP%2FHDBHGzVrgx%2BlrvyHd4okPfZfmwh7WQt5FzHLnAshCnKrBOhNjsHjJg%2FJjIOrlsEGBC59h8HSgehmgur5Dd%2Bczxfmrz0L%2FPLudOlIvJxd1rKT8BxzPBbSPg1TWvUWxYxd0Al2q7cgGpPtxs9mVzT0kyZXM03NnZFB%2BImFrbkCVEMIH0xMQGOqUBIIPyqfO00QJqqJbcLaHDXQfnLrzqyteZD0g61GkcIVw%2F1FnifBYDWFvOvoClr8tn%2BcjE6pETYYv1yPJORgP%2BwNeP6ffgCrXh2f%2F1U5zno%2BeF91oL2Ay8s9upsdewvsAZ7oenM8QcRKfqCMkYBDkVJbBHmMGXXKlx767txNuXJUaMjkYmKjvQyD3FpXReLtAdMEWIYHBmduUEITXUuc4kJSuXydFB&X-Amz-Signature=ceeb4048b5130740a9ac1c9e60ecd8180753c5c3907762ebff5d8cf79a69938f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJG5HMSC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHo3ITbAPt9DV%2BzsDMr6z9dusXUWVIRFPe44DBV5uZCjAiEA0U%2B5n%2BAW7k3VurCS9QvsEXnMo4t%2B7J5%2BZKl8UIBHZ54q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLxj4DAyclItKTlyhyrcA6Xgl7OPdMr6J7MFCcYKo1pfNjWFcV14UQ4r8zFzckTkAO7GveqADdMAYYJDkTt1iBmOmUsb29mzhfFLro5Pv6DVE8t%2BNhEaPiWWudShpycAUvDMuCDCQ3HWVWbsqPv80Tc1UzkcotSC4GzkoSk0waDAzpYWHZFoV1jwNMYuvJC%2BemWOYLIcpLgmAG02%2BXFdrPKq85uXfMsUb2vQAb0EFySMZ8ekAucfEL0MZ%2BQd7Rs3OgrUhG8kKGbSVv66fWCrL9BrVgNWNK62X7P0BCITTRVbSqvZioNligGIRrTgoMAJHajHsSRrLXtQk%2FjHOFSo1FfAMD7ld0uxR%2F1gILihKmJQEp%2BjiKPyI4ROn2jXJD1FYyorF1kYtuvPTOi74tb4ab1KFaMRw8iflTLR89s34MpB0aKCixMJWRopL4hcGBp%2FsxoV77uczo%2Ffnq%2B0%2B6HRQds48ed93UlBaQ4YP%2FHDBHGzVrgx%2BlrvyHd4okPfZfmwh7WQt5FzHLnAshCnKrBOhNjsHjJg%2FJjIOrlsEGBC59h8HSgehmgur5Dd%2Bczxfmrz0L%2FPLudOlIvJxd1rKT8BxzPBbSPg1TWvUWxYxd0Al2q7cgGpPtxs9mVzT0kyZXM03NnZFB%2BImFrbkCVEMIH0xMQGOqUBIIPyqfO00QJqqJbcLaHDXQfnLrzqyteZD0g61GkcIVw%2F1FnifBYDWFvOvoClr8tn%2BcjE6pETYYv1yPJORgP%2BwNeP6ffgCrXh2f%2F1U5zno%2BeF91oL2Ay8s9upsdewvsAZ7oenM8QcRKfqCMkYBDkVJbBHmMGXXKlx767txNuXJUaMjkYmKjvQyD3FpXReLtAdMEWIYHBmduUEITXUuc4kJSuXydFB&X-Amz-Signature=39435e96bd7ab9ca98b04e81671609fd0353c93ecf9635f6818838cacbf7b610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJG5HMSC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHo3ITbAPt9DV%2BzsDMr6z9dusXUWVIRFPe44DBV5uZCjAiEA0U%2B5n%2BAW7k3VurCS9QvsEXnMo4t%2B7J5%2BZKl8UIBHZ54q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLxj4DAyclItKTlyhyrcA6Xgl7OPdMr6J7MFCcYKo1pfNjWFcV14UQ4r8zFzckTkAO7GveqADdMAYYJDkTt1iBmOmUsb29mzhfFLro5Pv6DVE8t%2BNhEaPiWWudShpycAUvDMuCDCQ3HWVWbsqPv80Tc1UzkcotSC4GzkoSk0waDAzpYWHZFoV1jwNMYuvJC%2BemWOYLIcpLgmAG02%2BXFdrPKq85uXfMsUb2vQAb0EFySMZ8ekAucfEL0MZ%2BQd7Rs3OgrUhG8kKGbSVv66fWCrL9BrVgNWNK62X7P0BCITTRVbSqvZioNligGIRrTgoMAJHajHsSRrLXtQk%2FjHOFSo1FfAMD7ld0uxR%2F1gILihKmJQEp%2BjiKPyI4ROn2jXJD1FYyorF1kYtuvPTOi74tb4ab1KFaMRw8iflTLR89s34MpB0aKCixMJWRopL4hcGBp%2FsxoV77uczo%2Ffnq%2B0%2B6HRQds48ed93UlBaQ4YP%2FHDBHGzVrgx%2BlrvyHd4okPfZfmwh7WQt5FzHLnAshCnKrBOhNjsHjJg%2FJjIOrlsEGBC59h8HSgehmgur5Dd%2Bczxfmrz0L%2FPLudOlIvJxd1rKT8BxzPBbSPg1TWvUWxYxd0Al2q7cgGpPtxs9mVzT0kyZXM03NnZFB%2BImFrbkCVEMIH0xMQGOqUBIIPyqfO00QJqqJbcLaHDXQfnLrzqyteZD0g61GkcIVw%2F1FnifBYDWFvOvoClr8tn%2BcjE6pETYYv1yPJORgP%2BwNeP6ffgCrXh2f%2F1U5zno%2BeF91oL2Ay8s9upsdewvsAZ7oenM8QcRKfqCMkYBDkVJbBHmMGXXKlx767txNuXJUaMjkYmKjvQyD3FpXReLtAdMEWIYHBmduUEITXUuc4kJSuXydFB&X-Amz-Signature=4a7859be7ea05608d0eba2cae100393c51155843c4965e36c72c35f535c54839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQNVITU3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDX0VPZr2nQvVQ4CXvJET7%2FrAd0Mvt4Bc%2F8Xnqjy3ZTYAIhAIvBKlgNBHJU52cFnJ3baWdFswa3FRJfT7n3kGvcVx%2FeKv8DCFAQABoMNjM3NDIzMTgzODA1Igy4ulIOwiTyH6gyzgIq3APHyvLIUCWCIaXSsfQRPH0IYAEFckgJvmQFyZwuYx5O3H%2FLgiRGljQi8F%2BzCIu4GEv7Czexa%2F57vRD9HKm44PrsuK0E0AJJYvpA%2BFXHJ8LVHWaMHyIUSqq8L6WIUXNbuX2ifFG3xMZKzy3GKnnuhP5lCOl%2F4OL%2B7KhUyBNGGGtUuB46Imr%2Bfa%2BdWmLTkPovvMza9LC6xjSLtcQJOYccMjaTpEQJ0e1juF2mJBJna82%2FB0kNgBgAvVPYcv24gDWQZ69vaDcjnibQXVvPx%2BWElPPOA7rO3tnVxNiLxR%2FfEEUhwihHsUEedhQA1aAONZr6uRic8R1JLijB9q7%2F7bi3kJYgnp4XaddluBQX9HuiRphCE1AGhMfZgMblTLvRA8YBxhB9a5IcfSSE%2FSyWbiXhp%2FTv0tfGW0uh6iXRpPNJ207HHmyEwL3VGEGFi8XeRQCEhej35nQH5bGbBSPCnMrJsNMYNCZHSAKhOd%2FtfPn%2BEYu6OMVAaayAJqrKYBScJaPslozXu25y2hjnv0EhCgTRwWl6z2wQoSXGwL5MocFzGMNrLrgwnhm9G7eSZKCptaTd%2FkZlPExHebulw9bMx8dl91%2Flc9u3yiH5s3oVI4Bl2wjKa7U3b0oFaq5fFKRgrzCp9MTEBjqkASuzlvZynO9qc7e5DzMKByqARneL3vqm9ByNf2nylNYbEBkRQO3UOFZwJg4uVFX6B9I9mroGA3IZTDM%2FL4NizpTtlLq5BiCWM0toICo7AbqeYU6Jhsc%2Bc%2FbllbTJ6diYDbDdlK0wtxllutifPrNDj3IStBe7ZjBm7SvJSvcyVN7BYUR%2FX0qNZYkaoo89iNjBeDQZFjUDu2q%2BgKLySvif%2F9cGib3l&X-Amz-Signature=084a0ffd6877755d1ad0607fde648d2ec6e36ed669c00d5e18c1bf535dbd7f38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RACFEVNT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T231004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHEsvg9LxYSs5VYZG83FYguZTdzQ1p%2Fl1VTm%2FndDBPzIAiEA9kvrEyuBGBM6bGeNTgQxJwBIgNijGR3p4RftSxKH824q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDBoIDF9E1qAhfrLrqircAwx0%2BmQcSYyw0FzdnJp3F7qIFTQbSlIK%2BdyplDTAxNinTiRclXTM4eza5LMKmcflFqY2MhDmjfqx8sll8V2aa4yAAC%2BnyLOjMf9hfGPeJag5P92z0Ts9b2CSb5qXQOEZpzAIa4BqHW6u6Xj4pMh%2FPOxUGNHutQG52TFrnOv7GD8G7PxFNeuhxBOOS8TvD%2BHJMpKQ8kXii24se80sptg%2FKdZc1UEs%2B3LyL1ogaAXbYojM69ZzTHBy70cV4bM9BGfOqM%2ByG4B4PGlq9BoMVnxKAaFih3budniJjoFXm81%2FVBcdtA%2FtjoAGLShGc%2FoFfY7kmoxLzGtqWObMFisUIWwvyOI0iJvSB%2BaY8wIAE0gvKz1ZBpPP1uxplYy0XmweQesJAEzyqYUK3MeMQ%2F%2FCkADhU9r2KyZyuXfE6SSceC3mnN6hg4BM86pj9lL01I2tqt2lZ7%2FWAk5aua9vRytDDczDNGPX%2BqdBSnTlshTMX8CjUFqV2VORwE114NSmvXcvS0rsm%2FC2%2BhFtHYawbzYn7YA0K2d1FNKdhRQLI%2Bl%2BuWt%2FKMEhlxbjyjr7skjOrVkVPhOD%2BMhRG%2F1LPS%2BFuV6e12BSODS9SxoDH9lXc%2BBrnXCnBMchWh8PD4gBT%2FNQSD5eMKn0xMQGOqUBG3f2vsHPbaMCFy2VB2jRAHIMYLFo4gmcEo9hGRNuWxkXY4FqCknEu4RiSXrwN1OtuDkvnmPF148dk0aMXFpuNP%2B45RDbOBftEvF70QnFV2XrwRixRrI02jD4Qwu2lhBjSnP95zeXP6nfRW99%2F5kSEyOl1yCleYNKX2pKuKT%2FApSq15bUtvJH2tDR%2BHKil9RPt721RklMzkBFYnx%2BbRKVGMF5shKD&X-Amz-Signature=16136053d285e013c04eebc6098fa7ff007dd7a578798de7fb2545e64b8297de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVGKDVW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T231007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICjnlCahQJoh6lWqeiBp18fHnw146if5WJmncmPShWIyAiB%2BRLXEZJJX74dfezEjuWRpx0aXvv9lVCyc84HtQ1ECCyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMXcu6CL8TF0SkT3zcKtwDytOtPm8oIbsZvYDdcfkmXZj%2FAiIC%2B8Frjm2I3Wte9A6I4xnp0L4xLqa5llEVv3d63Z3m9jZ7xCl17%2FFamBV%2FCYeREAaXb9xWXmc50Z6Cmgf%2BMHf2bVB9fN8L2xNfAFtZ5a7wADWc4tbG52nevEIzXnxgXKWJPxCwEs4ydcuJkbSNth0OGtu0h6nDH50axzuRGask7cDQ8LIoMIBYV66DUFcyQa667a7YVO%2FFhrTnMOFH4cvM%2Bk5vT5V%2F6%2F1UeocrLQKIdhXeazH6aAcu4ysX88riqe3Z8efvLrioPPIk4kv2WVuaspgJ2j%2F93FD94JyFwVqHus%2BGo8ouQl8VweaP94D52OLTAFaC5HdRFRZuYAaGtSZkAlEfLlI7%2BNs%2FFnGLtihQnJbbeBQqsmeSGPDiibd9f7%2BNWQmuzoYTcafNlh3f%2BzP1MlH8jT007F90jlMwOAykBhHGBaIqHmXabbpqzJ96dLAQ5SEURftJCETyq2tYrSg6%2BR1yXihmUIfojteelCHu%2FNmd6A9MY3Y5ABIuujhN%2BOG0hSs0gaqO3NRP7OkDGHdx07QB2b5vLVUVhWZOA7pX54wJsxFe4stm3vOtiqWDPWtWiOZg7RLCAPm9dBHV%2FA%2Be5mlfiCFl1fcw7fPExAY6pgEyWgDQxy%2Bh41YnfVKREIPTpil%2Fz8DiusyUv%2FPoxj0%2FVKqWTw4T%2F0JjQwyd2Mbrp95W2jQMjTzpPlYfdegi%2BENL4OzmyNEyBzll5O%2BUSfxnVMkxkzIObhca5GMfqmfunVysOhk9DB0NJgwSBX1zpuAJxgpx6LZW76%2B3FkHnIoDQ0Scw%2BWJhtEBZ7Bx%2BGddRYLwKE1riyv8UF9G2OzP%2F9YR0JD8POKMl&X-Amz-Signature=d52cdf0c7b86c222556359b31a5957fc49708e968c2f9e3f72380ea41711d1ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJG5HMSC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHo3ITbAPt9DV%2BzsDMr6z9dusXUWVIRFPe44DBV5uZCjAiEA0U%2B5n%2BAW7k3VurCS9QvsEXnMo4t%2B7J5%2BZKl8UIBHZ54q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLxj4DAyclItKTlyhyrcA6Xgl7OPdMr6J7MFCcYKo1pfNjWFcV14UQ4r8zFzckTkAO7GveqADdMAYYJDkTt1iBmOmUsb29mzhfFLro5Pv6DVE8t%2BNhEaPiWWudShpycAUvDMuCDCQ3HWVWbsqPv80Tc1UzkcotSC4GzkoSk0waDAzpYWHZFoV1jwNMYuvJC%2BemWOYLIcpLgmAG02%2BXFdrPKq85uXfMsUb2vQAb0EFySMZ8ekAucfEL0MZ%2BQd7Rs3OgrUhG8kKGbSVv66fWCrL9BrVgNWNK62X7P0BCITTRVbSqvZioNligGIRrTgoMAJHajHsSRrLXtQk%2FjHOFSo1FfAMD7ld0uxR%2F1gILihKmJQEp%2BjiKPyI4ROn2jXJD1FYyorF1kYtuvPTOi74tb4ab1KFaMRw8iflTLR89s34MpB0aKCixMJWRopL4hcGBp%2FsxoV77uczo%2Ffnq%2B0%2B6HRQds48ed93UlBaQ4YP%2FHDBHGzVrgx%2BlrvyHd4okPfZfmwh7WQt5FzHLnAshCnKrBOhNjsHjJg%2FJjIOrlsEGBC59h8HSgehmgur5Dd%2Bczxfmrz0L%2FPLudOlIvJxd1rKT8BxzPBbSPg1TWvUWxYxd0Al2q7cgGpPtxs9mVzT0kyZXM03NnZFB%2BImFrbkCVEMIH0xMQGOqUBIIPyqfO00QJqqJbcLaHDXQfnLrzqyteZD0g61GkcIVw%2F1FnifBYDWFvOvoClr8tn%2BcjE6pETYYv1yPJORgP%2BwNeP6ffgCrXh2f%2F1U5zno%2BeF91oL2Ay8s9upsdewvsAZ7oenM8QcRKfqCMkYBDkVJbBHmMGXXKlx767txNuXJUaMjkYmKjvQyD3FpXReLtAdMEWIYHBmduUEITXUuc4kJSuXydFB&X-Amz-Signature=bfa36103fbe131a89e5b53dadb93192f227b5832775093cabf124367c893b4ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JDCZUAH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T231009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQD9gGCImdtY09XgDf9gAOpOCdbmbhNsgSGlYwNG4Lc7SgIgG6u4uDvamnkWLcIGzsaOxwB1rgGnJPzkOtaUku4D060q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDJWEXZ%2BIIBjiWZlDcircA3epjeLEKyeaAxN3n2QCOfGY%2Fwahb9g%2BTghR%2BoAWLYd2HXA%2FOFForbbFxFFTYrshpdjinYfsrCuU4II1RawfMvM%2BXNLsHN0%2BD%2BeSC7DXD98duAo6ybDYR7WKuxt81pItEanewcfdRRHIksUVq7HUpuwbbvNzOzkIgEtar1a9BxM396VS7tk1IetAe1gKFMenwBqQLcd7gwi4tzqet9th5f2NRcBAMWswxlAbf2HJWL0IQ1gmBRP8zowl0WQN8KrmEMgYfds%2Bwx7IPltf7c6qzNqy0lALq%2FIrUO2c6PhJjqZ%2BCDizPtK7%2BT3cS3oQy2Sw%2FDV36CJy2rjRVr608rkQfGZ21cUAdKQzAhCvnKy0CRTJTk7wl0eAesh7Nxy0e1Sv4hOPSYX7399J%2BU6Kse8srfFxiI1LYm34jz%2BHNfxdp4xoL8D69GradueGzihBsGTsFuLv%2B9DHY448%2FUfaP1tX2i3xgMpulXDemEBvvDY29HdZtiarCNQLY06qvWenJkt%2BjIIUvXqGpdDfciaw8%2FaCkHj2M85AycNFYmGBVb8Mf6IKf%2B5qvTkMBV3oejE3C9aiq0roolsOfZpD44DkkYLwDF1laHRenEYhfOzu5uhg%2FUJzZkGFmb50liH%2Fm2RwMNr0xMQGOqUBZ3EUGKh%2FtIyPrR9NrmsUAAsr50rdJ6SVAuNtG0%2Bd0vM96dcRfiSA0Z0EAaQ9ZtNkJNM%2F5g1czDimuiZUw34bvEG0x%2FpPHPadGmgbBOCdoHK05i40lgUmNs5AGX1l2ZVImV52go9gVQ3QwU32zHj0KOw5u8VnlO2%2F7jHXkLzvkyS2qpVbqFM%2BGBB3JFhjV7yrQm6pV6OHvr0XPI%2BmV5u1z%2BHGU8It&X-Amz-Signature=759c533d447dbdf3885817d616948b3bd104457d72e1f482da117910c94de00e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJG5HMSC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHo3ITbAPt9DV%2BzsDMr6z9dusXUWVIRFPe44DBV5uZCjAiEA0U%2B5n%2BAW7k3VurCS9QvsEXnMo4t%2B7J5%2BZKl8UIBHZ54q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLxj4DAyclItKTlyhyrcA6Xgl7OPdMr6J7MFCcYKo1pfNjWFcV14UQ4r8zFzckTkAO7GveqADdMAYYJDkTt1iBmOmUsb29mzhfFLro5Pv6DVE8t%2BNhEaPiWWudShpycAUvDMuCDCQ3HWVWbsqPv80Tc1UzkcotSC4GzkoSk0waDAzpYWHZFoV1jwNMYuvJC%2BemWOYLIcpLgmAG02%2BXFdrPKq85uXfMsUb2vQAb0EFySMZ8ekAucfEL0MZ%2BQd7Rs3OgrUhG8kKGbSVv66fWCrL9BrVgNWNK62X7P0BCITTRVbSqvZioNligGIRrTgoMAJHajHsSRrLXtQk%2FjHOFSo1FfAMD7ld0uxR%2F1gILihKmJQEp%2BjiKPyI4ROn2jXJD1FYyorF1kYtuvPTOi74tb4ab1KFaMRw8iflTLR89s34MpB0aKCixMJWRopL4hcGBp%2FsxoV77uczo%2Ffnq%2B0%2B6HRQds48ed93UlBaQ4YP%2FHDBHGzVrgx%2BlrvyHd4okPfZfmwh7WQt5FzHLnAshCnKrBOhNjsHjJg%2FJjIOrlsEGBC59h8HSgehmgur5Dd%2Bczxfmrz0L%2FPLudOlIvJxd1rKT8BxzPBbSPg1TWvUWxYxd0Al2q7cgGpPtxs9mVzT0kyZXM03NnZFB%2BImFrbkCVEMIH0xMQGOqUBIIPyqfO00QJqqJbcLaHDXQfnLrzqyteZD0g61GkcIVw%2F1FnifBYDWFvOvoClr8tn%2BcjE6pETYYv1yPJORgP%2BwNeP6ffgCrXh2f%2F1U5zno%2BeF91oL2Ay8s9upsdewvsAZ7oenM8QcRKfqCMkYBDkVJbBHmMGXXKlx767txNuXJUaMjkYmKjvQyD3FpXReLtAdMEWIYHBmduUEITXUuc4kJSuXydFB&X-Amz-Signature=33931e1eec700faf0ec093dfdcb55bb647091dbd98721b33f87764db4fcf33b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V33FFBA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T231012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCVLZ0TDoJuKGjH0MOjSrvffo8MY4mUEaiT3NwhBt8B9gIgXBOChnmGOb2kCl1m1qD89Nepom%2BQRiUBus2kjd3AT%2F4q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMBlMIkqBIf6MsTXsSrcA8d6yr9ykCKX8iRk7Zgbn1IQkOKVFWH2zQXXAxYTrtp%2BoWYoWaIlyx6wX3mRWql2E%2Bsn8rvucFbCuQHKiYTfYmk6jgoTYvbHd0q8Gi8PbVj0BIxf8QVnpwQL%2B4a0Qpcag1Qzzc%2BlEvZ%2Fi6W6o4Lp%2Bm3S491O6dSdurK9wUo6xFXNeeNOwjsTrg5aznHvkL2j8u%2BZtxmlBDs4mXefw%2BaKJa%2FtPK78VHczdMaAI5P%2FJY%2BJlQRXQcB3ycDtvaUH2IPmhIBoQQXWQpMegk4WHQBInlTT%2FC52twuAchsi4dMbXKbTCAMZODZWZesdNVJSAqaOP7JyoxD9q%2BRSkdR6SH%2BXTaIk4eCJBP7hhrXREQhzNMf6FQDLoAHUmxmZ9FvvtUs%2F5GjgvqUuRIhndjZkXT70tSUB6SnAFGKtVYE3PK5uWoOpCb8tLY6zwWQcb8IFXnjjvQcOvOUez1FIOUGxCAUj9MaoJ8oq%2B0qprN4dzL8VchpOyO3WhKH1soV0L3JIJoAsv2sx9NfSQP48%2BwHi0oNVMx7w1PyaqN0hQILjzeXi%2B%2FBriuz0MQEjZYgop7gfOBoEUUC14SpET8a6EihZ2SD3s62UYxOzsLLC5ZSUbwpBNlq%2F35TS2hbvrK1jLt4UMM%2F0xMQGOqUBjVizNnwKz5CNeqYdG3sl4OD5l6nBQw8tFtUMYUL9%2Fhm1%2BntkGn%2Bumxd7rBjm0cWv%2F9sjxzxZyoe4%2FzpVpcmAUD3XKgzdfbUbFIqlXsZq0Pub9rb1jzOxhCGP3SX4oIH2Q%2Fxdxl%2FtNGv0HcvmG0ww5X8ffLXIlObG1toC9tSueFQgQuTqlv%2BBeu%2F6kMOYuWSZ2ve3NHk4P9zYtlVy2v%2FhogQi4HIV&X-Amz-Signature=870df3aafd281386a8994b66131a832e935c985c6fce58e85486818ceaa049a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJG5HMSC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHo3ITbAPt9DV%2BzsDMr6z9dusXUWVIRFPe44DBV5uZCjAiEA0U%2B5n%2BAW7k3VurCS9QvsEXnMo4t%2B7J5%2BZKl8UIBHZ54q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLxj4DAyclItKTlyhyrcA6Xgl7OPdMr6J7MFCcYKo1pfNjWFcV14UQ4r8zFzckTkAO7GveqADdMAYYJDkTt1iBmOmUsb29mzhfFLro5Pv6DVE8t%2BNhEaPiWWudShpycAUvDMuCDCQ3HWVWbsqPv80Tc1UzkcotSC4GzkoSk0waDAzpYWHZFoV1jwNMYuvJC%2BemWOYLIcpLgmAG02%2BXFdrPKq85uXfMsUb2vQAb0EFySMZ8ekAucfEL0MZ%2BQd7Rs3OgrUhG8kKGbSVv66fWCrL9BrVgNWNK62X7P0BCITTRVbSqvZioNligGIRrTgoMAJHajHsSRrLXtQk%2FjHOFSo1FfAMD7ld0uxR%2F1gILihKmJQEp%2BjiKPyI4ROn2jXJD1FYyorF1kYtuvPTOi74tb4ab1KFaMRw8iflTLR89s34MpB0aKCixMJWRopL4hcGBp%2FsxoV77uczo%2Ffnq%2B0%2B6HRQds48ed93UlBaQ4YP%2FHDBHGzVrgx%2BlrvyHd4okPfZfmwh7WQt5FzHLnAshCnKrBOhNjsHjJg%2FJjIOrlsEGBC59h8HSgehmgur5Dd%2Bczxfmrz0L%2FPLudOlIvJxd1rKT8BxzPBbSPg1TWvUWxYxd0Al2q7cgGpPtxs9mVzT0kyZXM03NnZFB%2BImFrbkCVEMIH0xMQGOqUBIIPyqfO00QJqqJbcLaHDXQfnLrzqyteZD0g61GkcIVw%2F1FnifBYDWFvOvoClr8tn%2BcjE6pETYYv1yPJORgP%2BwNeP6ffgCrXh2f%2F1U5zno%2BeF91oL2Ay8s9upsdewvsAZ7oenM8QcRKfqCMkYBDkVJbBHmMGXXKlx767txNuXJUaMjkYmKjvQyD3FpXReLtAdMEWIYHBmduUEITXUuc4kJSuXydFB&X-Amz-Signature=f3d32b1de47e5bbe5f5ddf0d405f1ee20aede7525aafc5323ec2e0d416bb1058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LYNKOHD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T231013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCamOMCGcYPG2zzXQVrxMc3FAsBoVX6Pso%2F8q45Q7L32wIgDg0H8%2FdzjSfAClQiaCdzthjoogcPB3Q274GBCWGPhsMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMX1DpEnw%2BxBfErpHSrcAz9agk74RdIoZZ1CbAgmwhzPr%2B0XvT0rFwqeuNg8yHrCUppLJACYuYNTSuCxE4%2FGbzmdd316MYpX9Ai54IuE9ZKsKTPIBkjtfYeevRCFjyJx0prsSZX6XB5BM%2B%2BnelQKuotjcyXPa0X0WSHuYfQd9kjq2SGgCupzd500zSft9Unt88D6YjuFXSDxhiP09w4CyiF8uI8bQrEFyxS3dsAuWvtz0fXQ9kIdcbhYfwKi3pINMoFOiFyOqFImA9oee96Yaq6yRRNAZYqLcMIS4hdggVxluSEq0W%2Bs7ui02TCbRv%2FuOX3NlS7gfePHumgdk7r25zAOkr6wtyCVtOxZIgUZOlILIf7U7nmMGEjFm%2B1whov3hK4S%2BsaD1c5uczbUeRTXi%2FBZg8MkoOr3Y0qTlB6gk89E8h1%2BIghl2xwF4PYEhISP3X0VUO%2FHVuJ%2BHmTpieJSA7eGYb2h1xouuybgR1oATN7ky6NIB80M5evsB6Ns36FZDfNcquapfHnWnhlj2SQsv8c54ekfR1YmP7oPRSO2yZO1QT1bW4KRK2wEpZtPRhdmzbON3wEb06OZ8ODBrzsuF7SAzbpPoMFmC4gnVv%2B1nLDyJEZpI8QE63fliG8VSvT7tqcKHAuK4kWs7q5YMOz0xMQGOqUBQC0Fe6Ii2toOsAC9bH1hcoIymjpqiSyZ6it63Tyv4usoKFlto19R0XTiNHDn4P8ZZ8KY22BUPrEagFBmKqjnAltcD1bkx9MBZuoyDSBmkEOuLk%2B8RUajPCoh6ygviDmcDl8iwC9I04wDCY44gdDFfqbMwo4Y56Ma7O9rGEM3qxJwaXKAiYsFrRKMElTmg%2ByfATWfpYc8F3OnjOYjybP4%2FMv3rdTz&X-Amz-Signature=5d72f66834727fd2cf77aaff4c25674cbb3bd2bdeb729b43008d9b8cfefb24ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJG5HMSC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHo3ITbAPt9DV%2BzsDMr6z9dusXUWVIRFPe44DBV5uZCjAiEA0U%2B5n%2BAW7k3VurCS9QvsEXnMo4t%2B7J5%2BZKl8UIBHZ54q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLxj4DAyclItKTlyhyrcA6Xgl7OPdMr6J7MFCcYKo1pfNjWFcV14UQ4r8zFzckTkAO7GveqADdMAYYJDkTt1iBmOmUsb29mzhfFLro5Pv6DVE8t%2BNhEaPiWWudShpycAUvDMuCDCQ3HWVWbsqPv80Tc1UzkcotSC4GzkoSk0waDAzpYWHZFoV1jwNMYuvJC%2BemWOYLIcpLgmAG02%2BXFdrPKq85uXfMsUb2vQAb0EFySMZ8ekAucfEL0MZ%2BQd7Rs3OgrUhG8kKGbSVv66fWCrL9BrVgNWNK62X7P0BCITTRVbSqvZioNligGIRrTgoMAJHajHsSRrLXtQk%2FjHOFSo1FfAMD7ld0uxR%2F1gILihKmJQEp%2BjiKPyI4ROn2jXJD1FYyorF1kYtuvPTOi74tb4ab1KFaMRw8iflTLR89s34MpB0aKCixMJWRopL4hcGBp%2FsxoV77uczo%2Ffnq%2B0%2B6HRQds48ed93UlBaQ4YP%2FHDBHGzVrgx%2BlrvyHd4okPfZfmwh7WQt5FzHLnAshCnKrBOhNjsHjJg%2FJjIOrlsEGBC59h8HSgehmgur5Dd%2Bczxfmrz0L%2FPLudOlIvJxd1rKT8BxzPBbSPg1TWvUWxYxd0Al2q7cgGpPtxs9mVzT0kyZXM03NnZFB%2BImFrbkCVEMIH0xMQGOqUBIIPyqfO00QJqqJbcLaHDXQfnLrzqyteZD0g61GkcIVw%2F1FnifBYDWFvOvoClr8tn%2BcjE6pETYYv1yPJORgP%2BwNeP6ffgCrXh2f%2F1U5zno%2BeF91oL2Ay8s9upsdewvsAZ7oenM8QcRKfqCMkYBDkVJbBHmMGXXKlx767txNuXJUaMjkYmKjvQyD3FpXReLtAdMEWIYHBmduUEITXUuc4kJSuXydFB&X-Amz-Signature=381686abbdfbd38d03e08a4f5f188fc364ce613f1dbf36f8ea332d27c86db1d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PIWU72Q%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T231021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIALKbIftVNDRC0EtOkqMxyL1%2BDCVJ2amJXW85irYtsXmAiEAmGH2eu%2FMqoEwc1WD%2BW28DpJivCoouvB2NzapLoJ%2Fwg8q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDOi6QmdxCHZOFfDDHyrcA0MsE668sAU2fWtD6AH79UYhetmN%2BiSxnrzQc1V71xy7ivStrnIDk38KM8lDUb5zE9C384xR%2BilyStPvb%2FxG5cMrDOdzbUO3E5Qy%2B6u%2BvJZb%2BtWqg0eDlBgbUg3A90YTD518byyNOsglOpSdN1yfrhmBaY4VxGICBc%2FGR4sgGLfgK%2BjAQnEj7kfo9kMqlP%2BzRMcLXptPXdgl0t9gbGF2Ji2wSTaJOVwil9dr1FoWhZULvcR45HDN9D5lnNJM%2BRCnRPuSdtOOPvj6TP%2BWDVuVdJM1xKAlZ7tnAGU1jqoVYNw6bEfIMwsj0Ri5O%2BM3D0TNm%2BVph0ftC1IV%2FoIR2dp%2BVLpjOWXKAvS07NiTtDQZekYeor2wOFfNyYC1InwQIxkm9jnz9y5YimKN1QKqiirZ8bE3D%2FWTaamRsgxNKObBsV87k8I%2FvoeUKnM%2FVtpTxN1drSJy7xc48Syd6DfhMT2vYkOEVHCLkFN8c10jvhC69GiJrWoPw8z%2F6Pvibh8wjtMox7R%2BU0TkpcFYwFQ%2BhXsTm2xE1J7%2FL8wk3bc9gHao7a109SiHBI5id2%2Beos4wDwMZSn1yDGgdqBSxKnYJ8XHQWcEXPR0OEMS3T6LwDWy5ZqYbKse7BbUzhvH5CzY1MJ30xMQGOqUBkRP6ZEEiLcbPChhwX7chHtiKucbPAE7aiuk8dE5%2FVGs9Nysfuvzzl5cctpKE166HfYXaw9BJEpovHsmTp4DIIlGryvicrM9LRraqHc5UwmrXH%2BvCf%2BhGbGyecB8Gidl5mN3R8S7usUh64DagvfQJwsoZqDqn4FDNrCt%2BlQ28gHYRcc8kDXTgn5ZECGJTqM9DS2rnVBxgd%2BY2zGE4lWTnEG9%2BAfV4&X-Amz-Signature=e48979b06dd5fa20ab6e563d6cf6256a677b49a7f5a61e505a02262d2496cfb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3CTZBX2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T231022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIFgLRJv%2BJ0vCQbCn5IlTPEmVTSeB8AMe8tgWBBn3jf72AiBMMdJzAsUMNTL7m0oDKtX5TixGdRu%2Bbu%2FPTc33zYwsfyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMPUANsKrEg1bFr%2FQXKtwDlFTRcyRl33ON7iZRNvqk1gQ1wwwBcOsim2ty4DqhFt3jmw7%2Fjpg2Q4Hk81aqs4EbUATWyhCRMQebalyVWLw%2BFh5S52WqTKtW6HdFqusKFIRSoLtagxT%2FcI1%2B4dxgn6vE71p54iSa6L0MJT1%2FFGnBxHP%2BVboMkJ%2F6jGtFfLSSVVaEme9fYmkiVIn8Gn1yllsQhfKEz6KGTlo%2F%2BOxIrGx4%2FEBg4koOH9NbIvkYm8uregiUH7DnzkUqudcDGj1edyVnoeRS1neEi8GKJ9OLn%2BYZCi%2FhqRbUKdYrUISZOFGjz7ZlvnWd4JKrwM%2BrYRtTDTUXA4UUnqncS5j02M8Dj08Fd4mQD5i4MstWJLieDTnXEoqixsk8rFRS5D4TZoNIZE9e3p2jyu3tU%2BpwztaCdOCtwEJt7Ba7ALWhiX8GKv9%2Fm%2B75CKVUllW58bqCmEKjKtqMsdCWFu9hwlbyekeQzVb3u%2BnlLPzWPvLw6GwKrrc0yz89CG6t%2FkKdpPGg40zarSdLxIm%2Fgj9gkLvblK0WnN1X6CRTf8tK4FC%2FLxBS26dcxTNbN%2B6TDk8gC2oVHgmwGwRhfv%2FXaMrQFXAm7XT3vwYDwGU0KlsEe2Vj3DQdG3k3hzNC%2FSkkuxRH2QU9U20woPTExAY6pgHKsKGZjDA%2FOAYIaCq6%2FmP83DnAS7DWN4%2FSdg5hEJOBKABzvjlzLsCAm1DaJObqEczTgeLxC94Sj24GMfS8mBRpUvnOtltPzM1hWVKU1F33xjB2WAsKTEeLz%2F12KbthJ2uowEizT9uM9GEqu1D747ajzE3uZxY2UlHWrPlvqg6LZJQnHDdNKISpJ%2F1kl%2BzdTB0P5zkMK64G7RiobAmAiL6DBuykjiPx&X-Amz-Signature=84990da28ab825df70100a8daea60200334aee6a83e4f82f2ea008b64297bf9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PIWU72Q%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T231026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIALKbIftVNDRC0EtOkqMxyL1%2BDCVJ2amJXW85irYtsXmAiEAmGH2eu%2FMqoEwc1WD%2BW28DpJivCoouvB2NzapLoJ%2Fwg8q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDOi6QmdxCHZOFfDDHyrcA0MsE668sAU2fWtD6AH79UYhetmN%2BiSxnrzQc1V71xy7ivStrnIDk38KM8lDUb5zE9C384xR%2BilyStPvb%2FxG5cMrDOdzbUO3E5Qy%2B6u%2BvJZb%2BtWqg0eDlBgbUg3A90YTD518byyNOsglOpSdN1yfrhmBaY4VxGICBc%2FGR4sgGLfgK%2BjAQnEj7kfo9kMqlP%2BzRMcLXptPXdgl0t9gbGF2Ji2wSTaJOVwil9dr1FoWhZULvcR45HDN9D5lnNJM%2BRCnRPuSdtOOPvj6TP%2BWDVuVdJM1xKAlZ7tnAGU1jqoVYNw6bEfIMwsj0Ri5O%2BM3D0TNm%2BVph0ftC1IV%2FoIR2dp%2BVLpjOWXKAvS07NiTtDQZekYeor2wOFfNyYC1InwQIxkm9jnz9y5YimKN1QKqiirZ8bE3D%2FWTaamRsgxNKObBsV87k8I%2FvoeUKnM%2FVtpTxN1drSJy7xc48Syd6DfhMT2vYkOEVHCLkFN8c10jvhC69GiJrWoPw8z%2F6Pvibh8wjtMox7R%2BU0TkpcFYwFQ%2BhXsTm2xE1J7%2FL8wk3bc9gHao7a109SiHBI5id2%2Beos4wDwMZSn1yDGgdqBSxKnYJ8XHQWcEXPR0OEMS3T6LwDWy5ZqYbKse7BbUzhvH5CzY1MJ30xMQGOqUBkRP6ZEEiLcbPChhwX7chHtiKucbPAE7aiuk8dE5%2FVGs9Nysfuvzzl5cctpKE166HfYXaw9BJEpovHsmTp4DIIlGryvicrM9LRraqHc5UwmrXH%2BvCf%2BhGbGyecB8Gidl5mN3R8S7usUh64DagvfQJwsoZqDqn4FDNrCt%2BlQ28gHYRcc8kDXTgn5ZECGJTqM9DS2rnVBxgd%2BY2zGE4lWTnEG9%2BAfV4&X-Amz-Signature=531e4d1cb45f4cf966407264c0e5bc91beaf263d1458d737e022ae8b01d05dcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7UKBL75%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T231029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIBkhQDax6dzpmUZJS8Mdgm4UAGYQXanCzLPs9syY%2Fs%2BDAiBGbaXJm5hs1PSyhNdKeZRI2FhAbe5noEiHo7Rj8eNVxCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIM1YFNhdHdGl5AtlvrKtwDjNEyWG7bxLmoHnPpltlK7ZJKv7ZC1A3GvK6q%2BXBNjvNeOi6WgPROFWkt0xgKq%2FwV7ULqnuJk%2Bv3TQdPt0SPZ0C0ShFgg5LPMTNAUKXlLOa%2B4Tu49%2BWFPZ365ASsK%2B3a0KNbud2oadOZ%2Fk8bQfwM4FT%2FiP28aUac1uRWogFvieH8nDsAkzWwriFZEcJhx19Hj%2ByHxmxNgt5sah7ikE0Bw8TX9h6%2BPMsToqR90g%2FpdE%2Bg6BwpCwn5zAPWRqYhDvzCb%2Fmsbpqcz3aUwbXDGDRdWxyBVSimQG0uxy87hLWZ9EPOC8k4Il9wuCX2H6mAXJ24Qidn%2FeoGbSl6yqUlPZHC5BHXAt4nwuLY2j0nnlAcnhyOk6tfNwysoFI7KfKNc6WIEd1%2BQrzemDIPMj36ycFg5dWySjQoxi7by6bOZhj5wuFoBliDCOyRvxKo4%2FBvIGgCjvP1JVGMlOU4KhgThp3xYsv3Te4LaQgbzndtIkif5Osv9SOova5bQfi6jBt5kAO6tjKoZZ7XcLOXSF3%2BHFuES7miOUPkch%2F0ZY9EMIqOZr%2BtDKc2JeWvZCQTUdE8eUlfgmOtCtsmQzuEcamkwUa3UK0uKoklgnlmYqw4D84EnpN3ZXT2v80rlNoX1CC4wrPnExAY6pgFjCoRxiMTu72n%2B9SA7OhSIzkLLu6mMQFS%2BIE15kMCNLJEsnInCdzZGoXgFS4ELRYayU020kzyi3Ni7cBDnHrRCPr5w07It8TVBD%2BrnySzy5oYSiYbNQ1gLGZBwgT2KlYkXsze%2FWRr%2B51RlV5ICDre9clH%2FG1lDbesFVxo3kA2N5GV1eNokbQWFVEYDG%2FC3pey9Q3nkwa6vJWGoYDhWZz0soXmFmys3&X-Amz-Signature=8cecc88df8fb3ab0973e2f0f4a855543e4903db517c8b19308cc5110b216991a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWJHGXNT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T231030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHNB3LkEiR1HhO08rBLFCzjau2X%2BsIo01cML06QVGf4rAiEAqfZhelj03YBzGSkmYt4q7od5C5F6lrmEcOETTVdveEcq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDAqnfLqOPRdQuneYTCrcAyvQ2oFSpTItqFa8vEDlJRFnZz7JTOb5J2bqa1j5c6Czls6%2FNjFq7ib4mJv1VG3XJoPrTVOz2DL2jEaPWPv4im9vUIohVtOvKroEGOfqPgYo2LWaoJSTcUTgYEiENuTpvJfSYEOQjfl5UgKLUSY%2F3pCK7fNQrP%2FF5elgT7cKdtcnqrSdHlwxXSGiuBN2gehPQi6KToejPrlUJspmMqF722Lhwx6SxhHLe6xMDf%2BqwrYEBqju9kW18crNLaAkDgIVlqGnXIqH3gfp1tfQKc7quwEcL4T6qKMXqi%2FkUtAuCxz9%2BXS0poshZQ3CbUyz3F1qqxVopj8KeIalBloI%2BnSU06SPAscciTivfictZCfx0NxRg5RZyx%2FM6XHZgVxkdgjILlv%2BPmQymMxaCZRV%2FeqP%2Bd%2FYGaVtrwF2cTnwDDsdxQQ2GcZsmGCAGPpAsebdLWzs%2B7R80rO%2FIxcfRtB0geuDSEgrQuxKJX9%2BGktcvWC2UkhXKcb0MhjnTgWWSf%2F9yIhXXXWO7UDUmDx2PL%2F1VCtuoMyyySee%2B9I%2FlMF18kq2Uzw%2BINAC6bd4oIKf6DvYYECjmif0OBTdCD4sSPxRHjaOljZtNcvKdV31QofbBZsK82aIJRDvOD%2BfczMBTImFMJb0xMQGOqUB5ViIznNI%2BtJW9SyvUeIQWT7HZGhtxoMEm%2FpVivm5npwqEon4a1rOG66WOFK6SdZVOiOrm6GFvEpO5gmro50UORllk4eZIubVSibVa13Lq%2FF6AF4sg9yE1EPI5LvepwavE6AL5PIQTThKHCmbPUFEUoHM%2F1%2FH6qxcbryPkoF9ydZvjtIFWsS4YngZd6tsZKzBeJGjWNRieI%2F4q2sxbudjvG%2FX9gaQ&X-Amz-Signature=b7c39743ee8216b23f5e9fdfa902a06fc1979a2dcff760f76b6477706ca32a8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJG5HMSC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHo3ITbAPt9DV%2BzsDMr6z9dusXUWVIRFPe44DBV5uZCjAiEA0U%2B5n%2BAW7k3VurCS9QvsEXnMo4t%2B7J5%2BZKl8UIBHZ54q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLxj4DAyclItKTlyhyrcA6Xgl7OPdMr6J7MFCcYKo1pfNjWFcV14UQ4r8zFzckTkAO7GveqADdMAYYJDkTt1iBmOmUsb29mzhfFLro5Pv6DVE8t%2BNhEaPiWWudShpycAUvDMuCDCQ3HWVWbsqPv80Tc1UzkcotSC4GzkoSk0waDAzpYWHZFoV1jwNMYuvJC%2BemWOYLIcpLgmAG02%2BXFdrPKq85uXfMsUb2vQAb0EFySMZ8ekAucfEL0MZ%2BQd7Rs3OgrUhG8kKGbSVv66fWCrL9BrVgNWNK62X7P0BCITTRVbSqvZioNligGIRrTgoMAJHajHsSRrLXtQk%2FjHOFSo1FfAMD7ld0uxR%2F1gILihKmJQEp%2BjiKPyI4ROn2jXJD1FYyorF1kYtuvPTOi74tb4ab1KFaMRw8iflTLR89s34MpB0aKCixMJWRopL4hcGBp%2FsxoV77uczo%2Ffnq%2B0%2B6HRQds48ed93UlBaQ4YP%2FHDBHGzVrgx%2BlrvyHd4okPfZfmwh7WQt5FzHLnAshCnKrBOhNjsHjJg%2FJjIOrlsEGBC59h8HSgehmgur5Dd%2Bczxfmrz0L%2FPLudOlIvJxd1rKT8BxzPBbSPg1TWvUWxYxd0Al2q7cgGpPtxs9mVzT0kyZXM03NnZFB%2BImFrbkCVEMIH0xMQGOqUBIIPyqfO00QJqqJbcLaHDXQfnLrzqyteZD0g61GkcIVw%2F1FnifBYDWFvOvoClr8tn%2BcjE6pETYYv1yPJORgP%2BwNeP6ffgCrXh2f%2F1U5zno%2BeF91oL2Ay8s9upsdewvsAZ7oenM8QcRKfqCMkYBDkVJbBHmMGXXKlx767txNuXJUaMjkYmKjvQyD3FpXReLtAdMEWIYHBmduUEITXUuc4kJSuXydFB&X-Amz-Signature=56e7074f79fed560df94af0130de4d8fc8c1342a497793a23c5c2b3133d59215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJG5HMSC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIHo3ITbAPt9DV%2BzsDMr6z9dusXUWVIRFPe44DBV5uZCjAiEA0U%2B5n%2BAW7k3VurCS9QvsEXnMo4t%2B7J5%2BZKl8UIBHZ54q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLxj4DAyclItKTlyhyrcA6Xgl7OPdMr6J7MFCcYKo1pfNjWFcV14UQ4r8zFzckTkAO7GveqADdMAYYJDkTt1iBmOmUsb29mzhfFLro5Pv6DVE8t%2BNhEaPiWWudShpycAUvDMuCDCQ3HWVWbsqPv80Tc1UzkcotSC4GzkoSk0waDAzpYWHZFoV1jwNMYuvJC%2BemWOYLIcpLgmAG02%2BXFdrPKq85uXfMsUb2vQAb0EFySMZ8ekAucfEL0MZ%2BQd7Rs3OgrUhG8kKGbSVv66fWCrL9BrVgNWNK62X7P0BCITTRVbSqvZioNligGIRrTgoMAJHajHsSRrLXtQk%2FjHOFSo1FfAMD7ld0uxR%2F1gILihKmJQEp%2BjiKPyI4ROn2jXJD1FYyorF1kYtuvPTOi74tb4ab1KFaMRw8iflTLR89s34MpB0aKCixMJWRopL4hcGBp%2FsxoV77uczo%2Ffnq%2B0%2B6HRQds48ed93UlBaQ4YP%2FHDBHGzVrgx%2BlrvyHd4okPfZfmwh7WQt5FzHLnAshCnKrBOhNjsHjJg%2FJjIOrlsEGBC59h8HSgehmgur5Dd%2Bczxfmrz0L%2FPLudOlIvJxd1rKT8BxzPBbSPg1TWvUWxYxd0Al2q7cgGpPtxs9mVzT0kyZXM03NnZFB%2BImFrbkCVEMIH0xMQGOqUBIIPyqfO00QJqqJbcLaHDXQfnLrzqyteZD0g61GkcIVw%2F1FnifBYDWFvOvoClr8tn%2BcjE6pETYYv1yPJORgP%2BwNeP6ffgCrXh2f%2F1U5zno%2BeF91oL2Ay8s9upsdewvsAZ7oenM8QcRKfqCMkYBDkVJbBHmMGXXKlx767txNuXJUaMjkYmKjvQyD3FpXReLtAdMEWIYHBmduUEITXUuc4kJSuXydFB&X-Amz-Signature=a67258fe1834bfdd27411f88492b97a9ba170df615eaa4ffba8d02cfa61e3326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3Q4NJIS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGuXHyNTHLlc5BsJQDhT4kxwuJ3jgVJt7IQpbimKu%2F5mAiEA%2B67d%2Ba2khP8H8V1BSd1OTrH%2FY6nuDmaPsCQFBbCxnlkq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMEXvGlQDORv8iottyrcA2XJrXMaGl4PtNCJ49FuCtmPMK9fMXOJsEtr1ES3MLEaDK1XiGJp61eU6i3DZ0hhMerhdBmdiE7KlahG5GVhN9wlVl0l2ALbJ95H3f8uKYEOITz%2FufjpFpjMmfN9aui%2FUCMfpD8S76FfxkIkmh3N43qPYU8qyglL5GsKQN1CyXY5GF1Q%2Bto6Z02hvNDo21VRqnxJdnxYhJs3DV8gPMFKwtBiNWfWTIQIfzvw0PWUGVApe1ZUA20cblHnV8fawZ%2FuReoOCvWCZdN0F6Njnpnwn8%2Fyn1f3umr9Tk5D0C17g9CSmERTibpSeZYRs4LPZXp4APahOl5OAU%2FIeru2T4qzJRfebbLNzMo6DOceaDO9wLFThMFsHjrOzB9VbyKUdI%2Bko9Z7vpwT0LB4hssx5jI5pC4sC%2BAJzyD0c3qz0U3hIjz24ydu6jeamuyLRU%2FHtSoPFRrzo2jyB9HEMy4xClQyBinmQR8REAcMA3gKP5aP%2BjUsVsducpN88y0dKXljmFUN57HMFi2YjWoWjufFa%2BGsD7OaPxL1Tr5JGa0D5QB2QEyt1uHx1qMRg5VHtLhlz%2FpD4a1t6eqWnKRRB1eE3nLg%2FGnKbLIxbbdXcMbeonguoAMOk%2BFTfEkzrzJlMPhSMK75xMQGOqUBE1H%2BX0bK%2BrguqlBtWRX070I9TkHzEZyt3li%2BDLv698XV5gAcVZuAmNQopHzDcuA7JL1s4ZAux4d8OLMGk50o8o6gbkdPrFgJgAIvPuphiU0Aqy%2FapIPjRwZ06VwxUlcBOaDSvkcO2Wyq1s9rY4GS%2B1gj9seKSKJol4DWA5vjpoa0FCpOoL%2FX9Ue3cL2Ll4RTwc3GFZlUUBJxKX%2F3FUc%2FXnjSF2Gk&X-Amz-Signature=ae70b96c6f9c16469094b308fc5fdc5c960fed69cf946fa2cac6d1d91c5f55d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3Q4NJIS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGuXHyNTHLlc5BsJQDhT4kxwuJ3jgVJt7IQpbimKu%2F5mAiEA%2B67d%2Ba2khP8H8V1BSd1OTrH%2FY6nuDmaPsCQFBbCxnlkq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMEXvGlQDORv8iottyrcA2XJrXMaGl4PtNCJ49FuCtmPMK9fMXOJsEtr1ES3MLEaDK1XiGJp61eU6i3DZ0hhMerhdBmdiE7KlahG5GVhN9wlVl0l2ALbJ95H3f8uKYEOITz%2FufjpFpjMmfN9aui%2FUCMfpD8S76FfxkIkmh3N43qPYU8qyglL5GsKQN1CyXY5GF1Q%2Bto6Z02hvNDo21VRqnxJdnxYhJs3DV8gPMFKwtBiNWfWTIQIfzvw0PWUGVApe1ZUA20cblHnV8fawZ%2FuReoOCvWCZdN0F6Njnpnwn8%2Fyn1f3umr9Tk5D0C17g9CSmERTibpSeZYRs4LPZXp4APahOl5OAU%2FIeru2T4qzJRfebbLNzMo6DOceaDO9wLFThMFsHjrOzB9VbyKUdI%2Bko9Z7vpwT0LB4hssx5jI5pC4sC%2BAJzyD0c3qz0U3hIjz24ydu6jeamuyLRU%2FHtSoPFRrzo2jyB9HEMy4xClQyBinmQR8REAcMA3gKP5aP%2BjUsVsducpN88y0dKXljmFUN57HMFi2YjWoWjufFa%2BGsD7OaPxL1Tr5JGa0D5QB2QEyt1uHx1qMRg5VHtLhlz%2FpD4a1t6eqWnKRRB1eE3nLg%2FGnKbLIxbbdXcMbeonguoAMOk%2BFTfEkzrzJlMPhSMK75xMQGOqUBE1H%2BX0bK%2BrguqlBtWRX070I9TkHzEZyt3li%2BDLv698XV5gAcVZuAmNQopHzDcuA7JL1s4ZAux4d8OLMGk50o8o6gbkdPrFgJgAIvPuphiU0Aqy%2FapIPjRwZ06VwxUlcBOaDSvkcO2Wyq1s9rY4GS%2B1gj9seKSKJol4DWA5vjpoa0FCpOoL%2FX9Ue3cL2Ll4RTwc3GFZlUUBJxKX%2F3FUc%2FXnjSF2Gk&X-Amz-Signature=36a226728bb76d941131743f0de5a936a074e1eb354fbbe38c4f71d72ff97127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3Q4NJIS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGuXHyNTHLlc5BsJQDhT4kxwuJ3jgVJt7IQpbimKu%2F5mAiEA%2B67d%2Ba2khP8H8V1BSd1OTrH%2FY6nuDmaPsCQFBbCxnlkq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMEXvGlQDORv8iottyrcA2XJrXMaGl4PtNCJ49FuCtmPMK9fMXOJsEtr1ES3MLEaDK1XiGJp61eU6i3DZ0hhMerhdBmdiE7KlahG5GVhN9wlVl0l2ALbJ95H3f8uKYEOITz%2FufjpFpjMmfN9aui%2FUCMfpD8S76FfxkIkmh3N43qPYU8qyglL5GsKQN1CyXY5GF1Q%2Bto6Z02hvNDo21VRqnxJdnxYhJs3DV8gPMFKwtBiNWfWTIQIfzvw0PWUGVApe1ZUA20cblHnV8fawZ%2FuReoOCvWCZdN0F6Njnpnwn8%2Fyn1f3umr9Tk5D0C17g9CSmERTibpSeZYRs4LPZXp4APahOl5OAU%2FIeru2T4qzJRfebbLNzMo6DOceaDO9wLFThMFsHjrOzB9VbyKUdI%2Bko9Z7vpwT0LB4hssx5jI5pC4sC%2BAJzyD0c3qz0U3hIjz24ydu6jeamuyLRU%2FHtSoPFRrzo2jyB9HEMy4xClQyBinmQR8REAcMA3gKP5aP%2BjUsVsducpN88y0dKXljmFUN57HMFi2YjWoWjufFa%2BGsD7OaPxL1Tr5JGa0D5QB2QEyt1uHx1qMRg5VHtLhlz%2FpD4a1t6eqWnKRRB1eE3nLg%2FGnKbLIxbbdXcMbeonguoAMOk%2BFTfEkzrzJlMPhSMK75xMQGOqUBE1H%2BX0bK%2BrguqlBtWRX070I9TkHzEZyt3li%2BDLv698XV5gAcVZuAmNQopHzDcuA7JL1s4ZAux4d8OLMGk50o8o6gbkdPrFgJgAIvPuphiU0Aqy%2FapIPjRwZ06VwxUlcBOaDSvkcO2Wyq1s9rY4GS%2B1gj9seKSKJol4DWA5vjpoa0FCpOoL%2FX9Ue3cL2Ll4RTwc3GFZlUUBJxKX%2F3FUc%2FXnjSF2Gk&X-Amz-Signature=472fc377770ebef36383290322827c29a6135f5746dd67c620532fea69f40edd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3Q4NJIS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGuXHyNTHLlc5BsJQDhT4kxwuJ3jgVJt7IQpbimKu%2F5mAiEA%2B67d%2Ba2khP8H8V1BSd1OTrH%2FY6nuDmaPsCQFBbCxnlkq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMEXvGlQDORv8iottyrcA2XJrXMaGl4PtNCJ49FuCtmPMK9fMXOJsEtr1ES3MLEaDK1XiGJp61eU6i3DZ0hhMerhdBmdiE7KlahG5GVhN9wlVl0l2ALbJ95H3f8uKYEOITz%2FufjpFpjMmfN9aui%2FUCMfpD8S76FfxkIkmh3N43qPYU8qyglL5GsKQN1CyXY5GF1Q%2Bto6Z02hvNDo21VRqnxJdnxYhJs3DV8gPMFKwtBiNWfWTIQIfzvw0PWUGVApe1ZUA20cblHnV8fawZ%2FuReoOCvWCZdN0F6Njnpnwn8%2Fyn1f3umr9Tk5D0C17g9CSmERTibpSeZYRs4LPZXp4APahOl5OAU%2FIeru2T4qzJRfebbLNzMo6DOceaDO9wLFThMFsHjrOzB9VbyKUdI%2Bko9Z7vpwT0LB4hssx5jI5pC4sC%2BAJzyD0c3qz0U3hIjz24ydu6jeamuyLRU%2FHtSoPFRrzo2jyB9HEMy4xClQyBinmQR8REAcMA3gKP5aP%2BjUsVsducpN88y0dKXljmFUN57HMFi2YjWoWjufFa%2BGsD7OaPxL1Tr5JGa0D5QB2QEyt1uHx1qMRg5VHtLhlz%2FpD4a1t6eqWnKRRB1eE3nLg%2FGnKbLIxbbdXcMbeonguoAMOk%2BFTfEkzrzJlMPhSMK75xMQGOqUBE1H%2BX0bK%2BrguqlBtWRX070I9TkHzEZyt3li%2BDLv698XV5gAcVZuAmNQopHzDcuA7JL1s4ZAux4d8OLMGk50o8o6gbkdPrFgJgAIvPuphiU0Aqy%2FapIPjRwZ06VwxUlcBOaDSvkcO2Wyq1s9rY4GS%2B1gj9seKSKJol4DWA5vjpoa0FCpOoL%2FX9Ue3cL2Ll4RTwc3GFZlUUBJxKX%2F3FUc%2FXnjSF2Gk&X-Amz-Signature=015e543671178e5197c33d2c126e8438de60b39e48ff38a789b05f66145e127f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3Q4NJIS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGuXHyNTHLlc5BsJQDhT4kxwuJ3jgVJt7IQpbimKu%2F5mAiEA%2B67d%2Ba2khP8H8V1BSd1OTrH%2FY6nuDmaPsCQFBbCxnlkq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMEXvGlQDORv8iottyrcA2XJrXMaGl4PtNCJ49FuCtmPMK9fMXOJsEtr1ES3MLEaDK1XiGJp61eU6i3DZ0hhMerhdBmdiE7KlahG5GVhN9wlVl0l2ALbJ95H3f8uKYEOITz%2FufjpFpjMmfN9aui%2FUCMfpD8S76FfxkIkmh3N43qPYU8qyglL5GsKQN1CyXY5GF1Q%2Bto6Z02hvNDo21VRqnxJdnxYhJs3DV8gPMFKwtBiNWfWTIQIfzvw0PWUGVApe1ZUA20cblHnV8fawZ%2FuReoOCvWCZdN0F6Njnpnwn8%2Fyn1f3umr9Tk5D0C17g9CSmERTibpSeZYRs4LPZXp4APahOl5OAU%2FIeru2T4qzJRfebbLNzMo6DOceaDO9wLFThMFsHjrOzB9VbyKUdI%2Bko9Z7vpwT0LB4hssx5jI5pC4sC%2BAJzyD0c3qz0U3hIjz24ydu6jeamuyLRU%2FHtSoPFRrzo2jyB9HEMy4xClQyBinmQR8REAcMA3gKP5aP%2BjUsVsducpN88y0dKXljmFUN57HMFi2YjWoWjufFa%2BGsD7OaPxL1Tr5JGa0D5QB2QEyt1uHx1qMRg5VHtLhlz%2FpD4a1t6eqWnKRRB1eE3nLg%2FGnKbLIxbbdXcMbeonguoAMOk%2BFTfEkzrzJlMPhSMK75xMQGOqUBE1H%2BX0bK%2BrguqlBtWRX070I9TkHzEZyt3li%2BDLv698XV5gAcVZuAmNQopHzDcuA7JL1s4ZAux4d8OLMGk50o8o6gbkdPrFgJgAIvPuphiU0Aqy%2FapIPjRwZ06VwxUlcBOaDSvkcO2Wyq1s9rY4GS%2B1gj9seKSKJol4DWA5vjpoa0FCpOoL%2FX9Ue3cL2Ll4RTwc3GFZlUUBJxKX%2F3FUc%2FXnjSF2Gk&X-Amz-Signature=6ee6291447a2b099bd7d577543a06238a634b74d83af158f845095000c510029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3Q4NJIS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGuXHyNTHLlc5BsJQDhT4kxwuJ3jgVJt7IQpbimKu%2F5mAiEA%2B67d%2Ba2khP8H8V1BSd1OTrH%2FY6nuDmaPsCQFBbCxnlkq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMEXvGlQDORv8iottyrcA2XJrXMaGl4PtNCJ49FuCtmPMK9fMXOJsEtr1ES3MLEaDK1XiGJp61eU6i3DZ0hhMerhdBmdiE7KlahG5GVhN9wlVl0l2ALbJ95H3f8uKYEOITz%2FufjpFpjMmfN9aui%2FUCMfpD8S76FfxkIkmh3N43qPYU8qyglL5GsKQN1CyXY5GF1Q%2Bto6Z02hvNDo21VRqnxJdnxYhJs3DV8gPMFKwtBiNWfWTIQIfzvw0PWUGVApe1ZUA20cblHnV8fawZ%2FuReoOCvWCZdN0F6Njnpnwn8%2Fyn1f3umr9Tk5D0C17g9CSmERTibpSeZYRs4LPZXp4APahOl5OAU%2FIeru2T4qzJRfebbLNzMo6DOceaDO9wLFThMFsHjrOzB9VbyKUdI%2Bko9Z7vpwT0LB4hssx5jI5pC4sC%2BAJzyD0c3qz0U3hIjz24ydu6jeamuyLRU%2FHtSoPFRrzo2jyB9HEMy4xClQyBinmQR8REAcMA3gKP5aP%2BjUsVsducpN88y0dKXljmFUN57HMFi2YjWoWjufFa%2BGsD7OaPxL1Tr5JGa0D5QB2QEyt1uHx1qMRg5VHtLhlz%2FpD4a1t6eqWnKRRB1eE3nLg%2FGnKbLIxbbdXcMbeonguoAMOk%2BFTfEkzrzJlMPhSMK75xMQGOqUBE1H%2BX0bK%2BrguqlBtWRX070I9TkHzEZyt3li%2BDLv698XV5gAcVZuAmNQopHzDcuA7JL1s4ZAux4d8OLMGk50o8o6gbkdPrFgJgAIvPuphiU0Aqy%2FapIPjRwZ06VwxUlcBOaDSvkcO2Wyq1s9rY4GS%2B1gj9seKSKJol4DWA5vjpoa0FCpOoL%2FX9Ue3cL2Ll4RTwc3GFZlUUBJxKX%2F3FUc%2FXnjSF2Gk&X-Amz-Signature=8693abb146dce224ff496034436e904180d12ed241facd0ac7c764460a9223e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3Q4NJIS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGuXHyNTHLlc5BsJQDhT4kxwuJ3jgVJt7IQpbimKu%2F5mAiEA%2B67d%2Ba2khP8H8V1BSd1OTrH%2FY6nuDmaPsCQFBbCxnlkq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMEXvGlQDORv8iottyrcA2XJrXMaGl4PtNCJ49FuCtmPMK9fMXOJsEtr1ES3MLEaDK1XiGJp61eU6i3DZ0hhMerhdBmdiE7KlahG5GVhN9wlVl0l2ALbJ95H3f8uKYEOITz%2FufjpFpjMmfN9aui%2FUCMfpD8S76FfxkIkmh3N43qPYU8qyglL5GsKQN1CyXY5GF1Q%2Bto6Z02hvNDo21VRqnxJdnxYhJs3DV8gPMFKwtBiNWfWTIQIfzvw0PWUGVApe1ZUA20cblHnV8fawZ%2FuReoOCvWCZdN0F6Njnpnwn8%2Fyn1f3umr9Tk5D0C17g9CSmERTibpSeZYRs4LPZXp4APahOl5OAU%2FIeru2T4qzJRfebbLNzMo6DOceaDO9wLFThMFsHjrOzB9VbyKUdI%2Bko9Z7vpwT0LB4hssx5jI5pC4sC%2BAJzyD0c3qz0U3hIjz24ydu6jeamuyLRU%2FHtSoPFRrzo2jyB9HEMy4xClQyBinmQR8REAcMA3gKP5aP%2BjUsVsducpN88y0dKXljmFUN57HMFi2YjWoWjufFa%2BGsD7OaPxL1Tr5JGa0D5QB2QEyt1uHx1qMRg5VHtLhlz%2FpD4a1t6eqWnKRRB1eE3nLg%2FGnKbLIxbbdXcMbeonguoAMOk%2BFTfEkzrzJlMPhSMK75xMQGOqUBE1H%2BX0bK%2BrguqlBtWRX070I9TkHzEZyt3li%2BDLv698XV5gAcVZuAmNQopHzDcuA7JL1s4ZAux4d8OLMGk50o8o6gbkdPrFgJgAIvPuphiU0Aqy%2FapIPjRwZ06VwxUlcBOaDSvkcO2Wyq1s9rY4GS%2B1gj9seKSKJol4DWA5vjpoa0FCpOoL%2FX9Ue3cL2Ll4RTwc3GFZlUUBJxKX%2F3FUc%2FXnjSF2Gk&X-Amz-Signature=472fc377770ebef36383290322827c29a6135f5746dd67c620532fea69f40edd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3Q4NJIS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGuXHyNTHLlc5BsJQDhT4kxwuJ3jgVJt7IQpbimKu%2F5mAiEA%2B67d%2Ba2khP8H8V1BSd1OTrH%2FY6nuDmaPsCQFBbCxnlkq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMEXvGlQDORv8iottyrcA2XJrXMaGl4PtNCJ49FuCtmPMK9fMXOJsEtr1ES3MLEaDK1XiGJp61eU6i3DZ0hhMerhdBmdiE7KlahG5GVhN9wlVl0l2ALbJ95H3f8uKYEOITz%2FufjpFpjMmfN9aui%2FUCMfpD8S76FfxkIkmh3N43qPYU8qyglL5GsKQN1CyXY5GF1Q%2Bto6Z02hvNDo21VRqnxJdnxYhJs3DV8gPMFKwtBiNWfWTIQIfzvw0PWUGVApe1ZUA20cblHnV8fawZ%2FuReoOCvWCZdN0F6Njnpnwn8%2Fyn1f3umr9Tk5D0C17g9CSmERTibpSeZYRs4LPZXp4APahOl5OAU%2FIeru2T4qzJRfebbLNzMo6DOceaDO9wLFThMFsHjrOzB9VbyKUdI%2Bko9Z7vpwT0LB4hssx5jI5pC4sC%2BAJzyD0c3qz0U3hIjz24ydu6jeamuyLRU%2FHtSoPFRrzo2jyB9HEMy4xClQyBinmQR8REAcMA3gKP5aP%2BjUsVsducpN88y0dKXljmFUN57HMFi2YjWoWjufFa%2BGsD7OaPxL1Tr5JGa0D5QB2QEyt1uHx1qMRg5VHtLhlz%2FpD4a1t6eqWnKRRB1eE3nLg%2FGnKbLIxbbdXcMbeonguoAMOk%2BFTfEkzrzJlMPhSMK75xMQGOqUBE1H%2BX0bK%2BrguqlBtWRX070I9TkHzEZyt3li%2BDLv698XV5gAcVZuAmNQopHzDcuA7JL1s4ZAux4d8OLMGk50o8o6gbkdPrFgJgAIvPuphiU0Aqy%2FapIPjRwZ06VwxUlcBOaDSvkcO2Wyq1s9rY4GS%2B1gj9seKSKJol4DWA5vjpoa0FCpOoL%2FX9Ue3cL2Ll4RTwc3GFZlUUBJxKX%2F3FUc%2FXnjSF2Gk&X-Amz-Signature=facec6074a16674ff31e413c97927c22d2ea959d627c8cab8e1df20eb0da02ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3Q4NJIS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGuXHyNTHLlc5BsJQDhT4kxwuJ3jgVJt7IQpbimKu%2F5mAiEA%2B67d%2Ba2khP8H8V1BSd1OTrH%2FY6nuDmaPsCQFBbCxnlkq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMEXvGlQDORv8iottyrcA2XJrXMaGl4PtNCJ49FuCtmPMK9fMXOJsEtr1ES3MLEaDK1XiGJp61eU6i3DZ0hhMerhdBmdiE7KlahG5GVhN9wlVl0l2ALbJ95H3f8uKYEOITz%2FufjpFpjMmfN9aui%2FUCMfpD8S76FfxkIkmh3N43qPYU8qyglL5GsKQN1CyXY5GF1Q%2Bto6Z02hvNDo21VRqnxJdnxYhJs3DV8gPMFKwtBiNWfWTIQIfzvw0PWUGVApe1ZUA20cblHnV8fawZ%2FuReoOCvWCZdN0F6Njnpnwn8%2Fyn1f3umr9Tk5D0C17g9CSmERTibpSeZYRs4LPZXp4APahOl5OAU%2FIeru2T4qzJRfebbLNzMo6DOceaDO9wLFThMFsHjrOzB9VbyKUdI%2Bko9Z7vpwT0LB4hssx5jI5pC4sC%2BAJzyD0c3qz0U3hIjz24ydu6jeamuyLRU%2FHtSoPFRrzo2jyB9HEMy4xClQyBinmQR8REAcMA3gKP5aP%2BjUsVsducpN88y0dKXljmFUN57HMFi2YjWoWjufFa%2BGsD7OaPxL1Tr5JGa0D5QB2QEyt1uHx1qMRg5VHtLhlz%2FpD4a1t6eqWnKRRB1eE3nLg%2FGnKbLIxbbdXcMbeonguoAMOk%2BFTfEkzrzJlMPhSMK75xMQGOqUBE1H%2BX0bK%2BrguqlBtWRX070I9TkHzEZyt3li%2BDLv698XV5gAcVZuAmNQopHzDcuA7JL1s4ZAux4d8OLMGk50o8o6gbkdPrFgJgAIvPuphiU0Aqy%2FapIPjRwZ06VwxUlcBOaDSvkcO2Wyq1s9rY4GS%2B1gj9seKSKJol4DWA5vjpoa0FCpOoL%2FX9Ue3cL2Ll4RTwc3GFZlUUBJxKX%2F3FUc%2FXnjSF2Gk&X-Amz-Signature=3cb3e8c8c0da8a02583d9f929ad1def4e2c586536aef70b3b3bdc5f6a3ebde0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3Q4NJIS%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGuXHyNTHLlc5BsJQDhT4kxwuJ3jgVJt7IQpbimKu%2F5mAiEA%2B67d%2Ba2khP8H8V1BSd1OTrH%2FY6nuDmaPsCQFBbCxnlkq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMEXvGlQDORv8iottyrcA2XJrXMaGl4PtNCJ49FuCtmPMK9fMXOJsEtr1ES3MLEaDK1XiGJp61eU6i3DZ0hhMerhdBmdiE7KlahG5GVhN9wlVl0l2ALbJ95H3f8uKYEOITz%2FufjpFpjMmfN9aui%2FUCMfpD8S76FfxkIkmh3N43qPYU8qyglL5GsKQN1CyXY5GF1Q%2Bto6Z02hvNDo21VRqnxJdnxYhJs3DV8gPMFKwtBiNWfWTIQIfzvw0PWUGVApe1ZUA20cblHnV8fawZ%2FuReoOCvWCZdN0F6Njnpnwn8%2Fyn1f3umr9Tk5D0C17g9CSmERTibpSeZYRs4LPZXp4APahOl5OAU%2FIeru2T4qzJRfebbLNzMo6DOceaDO9wLFThMFsHjrOzB9VbyKUdI%2Bko9Z7vpwT0LB4hssx5jI5pC4sC%2BAJzyD0c3qz0U3hIjz24ydu6jeamuyLRU%2FHtSoPFRrzo2jyB9HEMy4xClQyBinmQR8REAcMA3gKP5aP%2BjUsVsducpN88y0dKXljmFUN57HMFi2YjWoWjufFa%2BGsD7OaPxL1Tr5JGa0D5QB2QEyt1uHx1qMRg5VHtLhlz%2FpD4a1t6eqWnKRRB1eE3nLg%2FGnKbLIxbbdXcMbeonguoAMOk%2BFTfEkzrzJlMPhSMK75xMQGOqUBE1H%2BX0bK%2BrguqlBtWRX070I9TkHzEZyt3li%2BDLv698XV5gAcVZuAmNQopHzDcuA7JL1s4ZAux4d8OLMGk50o8o6gbkdPrFgJgAIvPuphiU0Aqy%2FapIPjRwZ06VwxUlcBOaDSvkcO2Wyq1s9rY4GS%2B1gj9seKSKJol4DWA5vjpoa0FCpOoL%2FX9Ue3cL2Ll4RTwc3GFZlUUBJxKX%2F3FUc%2FXnjSF2Gk&X-Amz-Signature=f8ddf43b9d2015ed44e72e935e2dc5a40242be14c60b58e183f13decb3cf59f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
