---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-30T10:15:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-30T10:15:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYOVOB7Y%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj%2FQyyeLtuP7EAn2L0t9tkBfWvVrqMPqIoYInOA6SPeAiEAtaxuI3AzNLLhhfBAUju0fIkXczr3njaHCwcsbt7%2Bt2gqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI621ARtpmVUuoE%2BCircA92P0Lxayj%2FaA6Xg%2FkFWz%2FbCPVLjV0Chy84sLJWSs2El1%2FiF8NfAu%2FDT%2FEJ3LGRhmRdHw9QPRBvD%2FOCpdxBSRD%2B7lkU8paNsFSEte3wbc%2B0jDCuGILp6yXTVldMMStO4IaPFUTrFRW033Ph0lEMNWfLT%2BTG9sn6DISDngJix6YVS9dimeJb14ZyJEB2LAHS9crv5il3oav6TBs7wokiJ9Aa%2FnGayV5hW2rVrj%2BtCH4PW0m2FtSp%2BQSH54%2FoOFIapbyu8paIQ3ua7I8CfbZVpBLs5umNvtj5xJdt1rrb9iS24oIUMBhfKzdF89lWH5jmZH%2Bf%2FbhY9W7MLbK16yb01DVApYeBU5a43XvNwyvITB9KWl5y%2F4dnn%2FUI3%2FuWRqxglC3nsvbf8LUuoN64kOtp6WQ8iaftDDJ4o1leYj2v%2F9d%2B4wf4WodzD%2F6k5z9NFwGTDXBo5mmzjoMApvvgwfBqKF9FVsUsnLNPG9JBU%2FF%2FtLe3sl6HxC1ncaOA%2FrdB%2Bta8pg6x%2FTZ8ObS3O0T06l4N3XRbRtNv1ttrE9k3SWowVsW9vqia2oDBdlUWEb0Lb3LO1K8xy7Dxy8BWaELkvixjY8RwAoJ4ydzaxISlsFCEhZSWUFq97trd8LrPSOjd%2FMKq7qcQGOqUB3wwcIRu3abJhErZeaQ0qTc0lp5ftp7niNWd6yfeVy0548LCVgzjMopMTV94eG%2Br69Up8rn%2BnSUdkVLt%2FAvtuKFFa3MlYmgJXwTEgdgRxC1vgEU%2BK%2BYcGvbB5k%2BPSBuisbZehVOBcN8FGqd%2FAflk%2FMAAwpICLA%2BV4nO3SS0TdBJtNojdmqz%2Bzr0%2B7LlfivEiDyPcLOUEAz49U%2FNqUmo%2FgevzHEof1&X-Amz-Signature=ef936127b7881f6a5d89308fa6e8f55b4f0e7946900fed329c929d2b45a54ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYOVOB7Y%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj%2FQyyeLtuP7EAn2L0t9tkBfWvVrqMPqIoYInOA6SPeAiEAtaxuI3AzNLLhhfBAUju0fIkXczr3njaHCwcsbt7%2Bt2gqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI621ARtpmVUuoE%2BCircA92P0Lxayj%2FaA6Xg%2FkFWz%2FbCPVLjV0Chy84sLJWSs2El1%2FiF8NfAu%2FDT%2FEJ3LGRhmRdHw9QPRBvD%2FOCpdxBSRD%2B7lkU8paNsFSEte3wbc%2B0jDCuGILp6yXTVldMMStO4IaPFUTrFRW033Ph0lEMNWfLT%2BTG9sn6DISDngJix6YVS9dimeJb14ZyJEB2LAHS9crv5il3oav6TBs7wokiJ9Aa%2FnGayV5hW2rVrj%2BtCH4PW0m2FtSp%2BQSH54%2FoOFIapbyu8paIQ3ua7I8CfbZVpBLs5umNvtj5xJdt1rrb9iS24oIUMBhfKzdF89lWH5jmZH%2Bf%2FbhY9W7MLbK16yb01DVApYeBU5a43XvNwyvITB9KWl5y%2F4dnn%2FUI3%2FuWRqxglC3nsvbf8LUuoN64kOtp6WQ8iaftDDJ4o1leYj2v%2F9d%2B4wf4WodzD%2F6k5z9NFwGTDXBo5mmzjoMApvvgwfBqKF9FVsUsnLNPG9JBU%2FF%2FtLe3sl6HxC1ncaOA%2FrdB%2Bta8pg6x%2FTZ8ObS3O0T06l4N3XRbRtNv1ttrE9k3SWowVsW9vqia2oDBdlUWEb0Lb3LO1K8xy7Dxy8BWaELkvixjY8RwAoJ4ydzaxISlsFCEhZSWUFq97trd8LrPSOjd%2FMKq7qcQGOqUB3wwcIRu3abJhErZeaQ0qTc0lp5ftp7niNWd6yfeVy0548LCVgzjMopMTV94eG%2Br69Up8rn%2BnSUdkVLt%2FAvtuKFFa3MlYmgJXwTEgdgRxC1vgEU%2BK%2BYcGvbB5k%2BPSBuisbZehVOBcN8FGqd%2FAflk%2FMAAwpICLA%2BV4nO3SS0TdBJtNojdmqz%2Bzr0%2B7LlfivEiDyPcLOUEAz49U%2FNqUmo%2FgevzHEof1&X-Amz-Signature=572538129e6cc5aaf6f6d4e724412b5ac649226fe9abd378d527e14b7d5c6ea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYOVOB7Y%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj%2FQyyeLtuP7EAn2L0t9tkBfWvVrqMPqIoYInOA6SPeAiEAtaxuI3AzNLLhhfBAUju0fIkXczr3njaHCwcsbt7%2Bt2gqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI621ARtpmVUuoE%2BCircA92P0Lxayj%2FaA6Xg%2FkFWz%2FbCPVLjV0Chy84sLJWSs2El1%2FiF8NfAu%2FDT%2FEJ3LGRhmRdHw9QPRBvD%2FOCpdxBSRD%2B7lkU8paNsFSEte3wbc%2B0jDCuGILp6yXTVldMMStO4IaPFUTrFRW033Ph0lEMNWfLT%2BTG9sn6DISDngJix6YVS9dimeJb14ZyJEB2LAHS9crv5il3oav6TBs7wokiJ9Aa%2FnGayV5hW2rVrj%2BtCH4PW0m2FtSp%2BQSH54%2FoOFIapbyu8paIQ3ua7I8CfbZVpBLs5umNvtj5xJdt1rrb9iS24oIUMBhfKzdF89lWH5jmZH%2Bf%2FbhY9W7MLbK16yb01DVApYeBU5a43XvNwyvITB9KWl5y%2F4dnn%2FUI3%2FuWRqxglC3nsvbf8LUuoN64kOtp6WQ8iaftDDJ4o1leYj2v%2F9d%2B4wf4WodzD%2F6k5z9NFwGTDXBo5mmzjoMApvvgwfBqKF9FVsUsnLNPG9JBU%2FF%2FtLe3sl6HxC1ncaOA%2FrdB%2Bta8pg6x%2FTZ8ObS3O0T06l4N3XRbRtNv1ttrE9k3SWowVsW9vqia2oDBdlUWEb0Lb3LO1K8xy7Dxy8BWaELkvixjY8RwAoJ4ydzaxISlsFCEhZSWUFq97trd8LrPSOjd%2FMKq7qcQGOqUB3wwcIRu3abJhErZeaQ0qTc0lp5ftp7niNWd6yfeVy0548LCVgzjMopMTV94eG%2Br69Up8rn%2BnSUdkVLt%2FAvtuKFFa3MlYmgJXwTEgdgRxC1vgEU%2BK%2BYcGvbB5k%2BPSBuisbZehVOBcN8FGqd%2FAflk%2FMAAwpICLA%2BV4nO3SS0TdBJtNojdmqz%2Bzr0%2B7LlfivEiDyPcLOUEAz49U%2FNqUmo%2FgevzHEof1&X-Amz-Signature=848c4f8cf80952d4607603f0f9d768607c05cf00dc0d83a889fba29797914f69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYOVOB7Y%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj%2FQyyeLtuP7EAn2L0t9tkBfWvVrqMPqIoYInOA6SPeAiEAtaxuI3AzNLLhhfBAUju0fIkXczr3njaHCwcsbt7%2Bt2gqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI621ARtpmVUuoE%2BCircA92P0Lxayj%2FaA6Xg%2FkFWz%2FbCPVLjV0Chy84sLJWSs2El1%2FiF8NfAu%2FDT%2FEJ3LGRhmRdHw9QPRBvD%2FOCpdxBSRD%2B7lkU8paNsFSEte3wbc%2B0jDCuGILp6yXTVldMMStO4IaPFUTrFRW033Ph0lEMNWfLT%2BTG9sn6DISDngJix6YVS9dimeJb14ZyJEB2LAHS9crv5il3oav6TBs7wokiJ9Aa%2FnGayV5hW2rVrj%2BtCH4PW0m2FtSp%2BQSH54%2FoOFIapbyu8paIQ3ua7I8CfbZVpBLs5umNvtj5xJdt1rrb9iS24oIUMBhfKzdF89lWH5jmZH%2Bf%2FbhY9W7MLbK16yb01DVApYeBU5a43XvNwyvITB9KWl5y%2F4dnn%2FUI3%2FuWRqxglC3nsvbf8LUuoN64kOtp6WQ8iaftDDJ4o1leYj2v%2F9d%2B4wf4WodzD%2F6k5z9NFwGTDXBo5mmzjoMApvvgwfBqKF9FVsUsnLNPG9JBU%2FF%2FtLe3sl6HxC1ncaOA%2FrdB%2Bta8pg6x%2FTZ8ObS3O0T06l4N3XRbRtNv1ttrE9k3SWowVsW9vqia2oDBdlUWEb0Lb3LO1K8xy7Dxy8BWaELkvixjY8RwAoJ4ydzaxISlsFCEhZSWUFq97trd8LrPSOjd%2FMKq7qcQGOqUB3wwcIRu3abJhErZeaQ0qTc0lp5ftp7niNWd6yfeVy0548LCVgzjMopMTV94eG%2Br69Up8rn%2BnSUdkVLt%2FAvtuKFFa3MlYmgJXwTEgdgRxC1vgEU%2BK%2BYcGvbB5k%2BPSBuisbZehVOBcN8FGqd%2FAflk%2FMAAwpICLA%2BV4nO3SS0TdBJtNojdmqz%2Bzr0%2B7LlfivEiDyPcLOUEAz49U%2FNqUmo%2FgevzHEof1&X-Amz-Signature=256e26d8d5784189c7b50a48854f1bf2f6c59f76c25dac93b19eae7e8b2676e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYOVOB7Y%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj%2FQyyeLtuP7EAn2L0t9tkBfWvVrqMPqIoYInOA6SPeAiEAtaxuI3AzNLLhhfBAUju0fIkXczr3njaHCwcsbt7%2Bt2gqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI621ARtpmVUuoE%2BCircA92P0Lxayj%2FaA6Xg%2FkFWz%2FbCPVLjV0Chy84sLJWSs2El1%2FiF8NfAu%2FDT%2FEJ3LGRhmRdHw9QPRBvD%2FOCpdxBSRD%2B7lkU8paNsFSEte3wbc%2B0jDCuGILp6yXTVldMMStO4IaPFUTrFRW033Ph0lEMNWfLT%2BTG9sn6DISDngJix6YVS9dimeJb14ZyJEB2LAHS9crv5il3oav6TBs7wokiJ9Aa%2FnGayV5hW2rVrj%2BtCH4PW0m2FtSp%2BQSH54%2FoOFIapbyu8paIQ3ua7I8CfbZVpBLs5umNvtj5xJdt1rrb9iS24oIUMBhfKzdF89lWH5jmZH%2Bf%2FbhY9W7MLbK16yb01DVApYeBU5a43XvNwyvITB9KWl5y%2F4dnn%2FUI3%2FuWRqxglC3nsvbf8LUuoN64kOtp6WQ8iaftDDJ4o1leYj2v%2F9d%2B4wf4WodzD%2F6k5z9NFwGTDXBo5mmzjoMApvvgwfBqKF9FVsUsnLNPG9JBU%2FF%2FtLe3sl6HxC1ncaOA%2FrdB%2Bta8pg6x%2FTZ8ObS3O0T06l4N3XRbRtNv1ttrE9k3SWowVsW9vqia2oDBdlUWEb0Lb3LO1K8xy7Dxy8BWaELkvixjY8RwAoJ4ydzaxISlsFCEhZSWUFq97trd8LrPSOjd%2FMKq7qcQGOqUB3wwcIRu3abJhErZeaQ0qTc0lp5ftp7niNWd6yfeVy0548LCVgzjMopMTV94eG%2Br69Up8rn%2BnSUdkVLt%2FAvtuKFFa3MlYmgJXwTEgdgRxC1vgEU%2BK%2BYcGvbB5k%2BPSBuisbZehVOBcN8FGqd%2FAflk%2FMAAwpICLA%2BV4nO3SS0TdBJtNojdmqz%2Bzr0%2B7LlfivEiDyPcLOUEAz49U%2FNqUmo%2FgevzHEof1&X-Amz-Signature=d832a673a7e249ec2701adcf89ae89b9b081a2200681db5c2dcd1599a6d71e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYOVOB7Y%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj%2FQyyeLtuP7EAn2L0t9tkBfWvVrqMPqIoYInOA6SPeAiEAtaxuI3AzNLLhhfBAUju0fIkXczr3njaHCwcsbt7%2Bt2gqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI621ARtpmVUuoE%2BCircA92P0Lxayj%2FaA6Xg%2FkFWz%2FbCPVLjV0Chy84sLJWSs2El1%2FiF8NfAu%2FDT%2FEJ3LGRhmRdHw9QPRBvD%2FOCpdxBSRD%2B7lkU8paNsFSEte3wbc%2B0jDCuGILp6yXTVldMMStO4IaPFUTrFRW033Ph0lEMNWfLT%2BTG9sn6DISDngJix6YVS9dimeJb14ZyJEB2LAHS9crv5il3oav6TBs7wokiJ9Aa%2FnGayV5hW2rVrj%2BtCH4PW0m2FtSp%2BQSH54%2FoOFIapbyu8paIQ3ua7I8CfbZVpBLs5umNvtj5xJdt1rrb9iS24oIUMBhfKzdF89lWH5jmZH%2Bf%2FbhY9W7MLbK16yb01DVApYeBU5a43XvNwyvITB9KWl5y%2F4dnn%2FUI3%2FuWRqxglC3nsvbf8LUuoN64kOtp6WQ8iaftDDJ4o1leYj2v%2F9d%2B4wf4WodzD%2F6k5z9NFwGTDXBo5mmzjoMApvvgwfBqKF9FVsUsnLNPG9JBU%2FF%2FtLe3sl6HxC1ncaOA%2FrdB%2Bta8pg6x%2FTZ8ObS3O0T06l4N3XRbRtNv1ttrE9k3SWowVsW9vqia2oDBdlUWEb0Lb3LO1K8xy7Dxy8BWaELkvixjY8RwAoJ4ydzaxISlsFCEhZSWUFq97trd8LrPSOjd%2FMKq7qcQGOqUB3wwcIRu3abJhErZeaQ0qTc0lp5ftp7niNWd6yfeVy0548LCVgzjMopMTV94eG%2Br69Up8rn%2BnSUdkVLt%2FAvtuKFFa3MlYmgJXwTEgdgRxC1vgEU%2BK%2BYcGvbB5k%2BPSBuisbZehVOBcN8FGqd%2FAflk%2FMAAwpICLA%2BV4nO3SS0TdBJtNojdmqz%2Bzr0%2B7LlfivEiDyPcLOUEAz49U%2FNqUmo%2FgevzHEof1&X-Amz-Signature=7c394b180d5ac539d96d0a5012972bc2959cfa4fc5719fd725ad9c6755d9da70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYOVOB7Y%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj%2FQyyeLtuP7EAn2L0t9tkBfWvVrqMPqIoYInOA6SPeAiEAtaxuI3AzNLLhhfBAUju0fIkXczr3njaHCwcsbt7%2Bt2gqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI621ARtpmVUuoE%2BCircA92P0Lxayj%2FaA6Xg%2FkFWz%2FbCPVLjV0Chy84sLJWSs2El1%2FiF8NfAu%2FDT%2FEJ3LGRhmRdHw9QPRBvD%2FOCpdxBSRD%2B7lkU8paNsFSEte3wbc%2B0jDCuGILp6yXTVldMMStO4IaPFUTrFRW033Ph0lEMNWfLT%2BTG9sn6DISDngJix6YVS9dimeJb14ZyJEB2LAHS9crv5il3oav6TBs7wokiJ9Aa%2FnGayV5hW2rVrj%2BtCH4PW0m2FtSp%2BQSH54%2FoOFIapbyu8paIQ3ua7I8CfbZVpBLs5umNvtj5xJdt1rrb9iS24oIUMBhfKzdF89lWH5jmZH%2Bf%2FbhY9W7MLbK16yb01DVApYeBU5a43XvNwyvITB9KWl5y%2F4dnn%2FUI3%2FuWRqxglC3nsvbf8LUuoN64kOtp6WQ8iaftDDJ4o1leYj2v%2F9d%2B4wf4WodzD%2F6k5z9NFwGTDXBo5mmzjoMApvvgwfBqKF9FVsUsnLNPG9JBU%2FF%2FtLe3sl6HxC1ncaOA%2FrdB%2Bta8pg6x%2FTZ8ObS3O0T06l4N3XRbRtNv1ttrE9k3SWowVsW9vqia2oDBdlUWEb0Lb3LO1K8xy7Dxy8BWaELkvixjY8RwAoJ4ydzaxISlsFCEhZSWUFq97trd8LrPSOjd%2FMKq7qcQGOqUB3wwcIRu3abJhErZeaQ0qTc0lp5ftp7niNWd6yfeVy0548LCVgzjMopMTV94eG%2Br69Up8rn%2BnSUdkVLt%2FAvtuKFFa3MlYmgJXwTEgdgRxC1vgEU%2BK%2BYcGvbB5k%2BPSBuisbZehVOBcN8FGqd%2FAflk%2FMAAwpICLA%2BV4nO3SS0TdBJtNojdmqz%2Bzr0%2B7LlfivEiDyPcLOUEAz49U%2FNqUmo%2FgevzHEof1&X-Amz-Signature=9f7d8a3ffed36a2d1ab8946c4a362803152584c372a91e4b9d8070e264b84d1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYOVOB7Y%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj%2FQyyeLtuP7EAn2L0t9tkBfWvVrqMPqIoYInOA6SPeAiEAtaxuI3AzNLLhhfBAUju0fIkXczr3njaHCwcsbt7%2Bt2gqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI621ARtpmVUuoE%2BCircA92P0Lxayj%2FaA6Xg%2FkFWz%2FbCPVLjV0Chy84sLJWSs2El1%2FiF8NfAu%2FDT%2FEJ3LGRhmRdHw9QPRBvD%2FOCpdxBSRD%2B7lkU8paNsFSEte3wbc%2B0jDCuGILp6yXTVldMMStO4IaPFUTrFRW033Ph0lEMNWfLT%2BTG9sn6DISDngJix6YVS9dimeJb14ZyJEB2LAHS9crv5il3oav6TBs7wokiJ9Aa%2FnGayV5hW2rVrj%2BtCH4PW0m2FtSp%2BQSH54%2FoOFIapbyu8paIQ3ua7I8CfbZVpBLs5umNvtj5xJdt1rrb9iS24oIUMBhfKzdF89lWH5jmZH%2Bf%2FbhY9W7MLbK16yb01DVApYeBU5a43XvNwyvITB9KWl5y%2F4dnn%2FUI3%2FuWRqxglC3nsvbf8LUuoN64kOtp6WQ8iaftDDJ4o1leYj2v%2F9d%2B4wf4WodzD%2F6k5z9NFwGTDXBo5mmzjoMApvvgwfBqKF9FVsUsnLNPG9JBU%2FF%2FtLe3sl6HxC1ncaOA%2FrdB%2Bta8pg6x%2FTZ8ObS3O0T06l4N3XRbRtNv1ttrE9k3SWowVsW9vqia2oDBdlUWEb0Lb3LO1K8xy7Dxy8BWaELkvixjY8RwAoJ4ydzaxISlsFCEhZSWUFq97trd8LrPSOjd%2FMKq7qcQGOqUB3wwcIRu3abJhErZeaQ0qTc0lp5ftp7niNWd6yfeVy0548LCVgzjMopMTV94eG%2Br69Up8rn%2BnSUdkVLt%2FAvtuKFFa3MlYmgJXwTEgdgRxC1vgEU%2BK%2BYcGvbB5k%2BPSBuisbZehVOBcN8FGqd%2FAflk%2FMAAwpICLA%2BV4nO3SS0TdBJtNojdmqz%2Bzr0%2B7LlfivEiDyPcLOUEAz49U%2FNqUmo%2FgevzHEof1&X-Amz-Signature=631820ad76b87fb6354e86993c7ea3c7ff1a39ee61e9419b904d4c8fb6e532a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYOVOB7Y%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj%2FQyyeLtuP7EAn2L0t9tkBfWvVrqMPqIoYInOA6SPeAiEAtaxuI3AzNLLhhfBAUju0fIkXczr3njaHCwcsbt7%2Bt2gqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI621ARtpmVUuoE%2BCircA92P0Lxayj%2FaA6Xg%2FkFWz%2FbCPVLjV0Chy84sLJWSs2El1%2FiF8NfAu%2FDT%2FEJ3LGRhmRdHw9QPRBvD%2FOCpdxBSRD%2B7lkU8paNsFSEte3wbc%2B0jDCuGILp6yXTVldMMStO4IaPFUTrFRW033Ph0lEMNWfLT%2BTG9sn6DISDngJix6YVS9dimeJb14ZyJEB2LAHS9crv5il3oav6TBs7wokiJ9Aa%2FnGayV5hW2rVrj%2BtCH4PW0m2FtSp%2BQSH54%2FoOFIapbyu8paIQ3ua7I8CfbZVpBLs5umNvtj5xJdt1rrb9iS24oIUMBhfKzdF89lWH5jmZH%2Bf%2FbhY9W7MLbK16yb01DVApYeBU5a43XvNwyvITB9KWl5y%2F4dnn%2FUI3%2FuWRqxglC3nsvbf8LUuoN64kOtp6WQ8iaftDDJ4o1leYj2v%2F9d%2B4wf4WodzD%2F6k5z9NFwGTDXBo5mmzjoMApvvgwfBqKF9FVsUsnLNPG9JBU%2FF%2FtLe3sl6HxC1ncaOA%2FrdB%2Bta8pg6x%2FTZ8ObS3O0T06l4N3XRbRtNv1ttrE9k3SWowVsW9vqia2oDBdlUWEb0Lb3LO1K8xy7Dxy8BWaELkvixjY8RwAoJ4ydzaxISlsFCEhZSWUFq97trd8LrPSOjd%2FMKq7qcQGOqUB3wwcIRu3abJhErZeaQ0qTc0lp5ftp7niNWd6yfeVy0548LCVgzjMopMTV94eG%2Br69Up8rn%2BnSUdkVLt%2FAvtuKFFa3MlYmgJXwTEgdgRxC1vgEU%2BK%2BYcGvbB5k%2BPSBuisbZehVOBcN8FGqd%2FAflk%2FMAAwpICLA%2BV4nO3SS0TdBJtNojdmqz%2Bzr0%2B7LlfivEiDyPcLOUEAz49U%2FNqUmo%2FgevzHEof1&X-Amz-Signature=7280f41c86d9b0a4665204e220a9314120a665545e3d994969b04aeb297e50f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYOVOB7Y%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj%2FQyyeLtuP7EAn2L0t9tkBfWvVrqMPqIoYInOA6SPeAiEAtaxuI3AzNLLhhfBAUju0fIkXczr3njaHCwcsbt7%2Bt2gqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI621ARtpmVUuoE%2BCircA92P0Lxayj%2FaA6Xg%2FkFWz%2FbCPVLjV0Chy84sLJWSs2El1%2FiF8NfAu%2FDT%2FEJ3LGRhmRdHw9QPRBvD%2FOCpdxBSRD%2B7lkU8paNsFSEte3wbc%2B0jDCuGILp6yXTVldMMStO4IaPFUTrFRW033Ph0lEMNWfLT%2BTG9sn6DISDngJix6YVS9dimeJb14ZyJEB2LAHS9crv5il3oav6TBs7wokiJ9Aa%2FnGayV5hW2rVrj%2BtCH4PW0m2FtSp%2BQSH54%2FoOFIapbyu8paIQ3ua7I8CfbZVpBLs5umNvtj5xJdt1rrb9iS24oIUMBhfKzdF89lWH5jmZH%2Bf%2FbhY9W7MLbK16yb01DVApYeBU5a43XvNwyvITB9KWl5y%2F4dnn%2FUI3%2FuWRqxglC3nsvbf8LUuoN64kOtp6WQ8iaftDDJ4o1leYj2v%2F9d%2B4wf4WodzD%2F6k5z9NFwGTDXBo5mmzjoMApvvgwfBqKF9FVsUsnLNPG9JBU%2FF%2FtLe3sl6HxC1ncaOA%2FrdB%2Bta8pg6x%2FTZ8ObS3O0T06l4N3XRbRtNv1ttrE9k3SWowVsW9vqia2oDBdlUWEb0Lb3LO1K8xy7Dxy8BWaELkvixjY8RwAoJ4ydzaxISlsFCEhZSWUFq97trd8LrPSOjd%2FMKq7qcQGOqUB3wwcIRu3abJhErZeaQ0qTc0lp5ftp7niNWd6yfeVy0548LCVgzjMopMTV94eG%2Br69Up8rn%2BnSUdkVLt%2FAvtuKFFa3MlYmgJXwTEgdgRxC1vgEU%2BK%2BYcGvbB5k%2BPSBuisbZehVOBcN8FGqd%2FAflk%2FMAAwpICLA%2BV4nO3SS0TdBJtNojdmqz%2Bzr0%2B7LlfivEiDyPcLOUEAz49U%2FNqUmo%2FgevzHEof1&X-Amz-Signature=3cbe33d3b3005711ff2c71ee8db29e138cf142c6809e291a61638ec5ce5f2e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

Types of blocks in URDF:

- robot
- vars/Properties
- macros
- link:
	- visual
		- geometry
		- material
	- collision
		- origin
		- geometry
		- friction
	- inertial
- joint:
	- parent
	- child
	- origin

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
        <surface><friction><ode>
          <mu>1.0</mu>
          <mu2>1.0</mu2>
          <fdir1>1 0 0</fdir1>
        </ode></friction></surface>
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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYOVOB7Y%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj%2FQyyeLtuP7EAn2L0t9tkBfWvVrqMPqIoYInOA6SPeAiEAtaxuI3AzNLLhhfBAUju0fIkXczr3njaHCwcsbt7%2Bt2gqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI621ARtpmVUuoE%2BCircA92P0Lxayj%2FaA6Xg%2FkFWz%2FbCPVLjV0Chy84sLJWSs2El1%2FiF8NfAu%2FDT%2FEJ3LGRhmRdHw9QPRBvD%2FOCpdxBSRD%2B7lkU8paNsFSEte3wbc%2B0jDCuGILp6yXTVldMMStO4IaPFUTrFRW033Ph0lEMNWfLT%2BTG9sn6DISDngJix6YVS9dimeJb14ZyJEB2LAHS9crv5il3oav6TBs7wokiJ9Aa%2FnGayV5hW2rVrj%2BtCH4PW0m2FtSp%2BQSH54%2FoOFIapbyu8paIQ3ua7I8CfbZVpBLs5umNvtj5xJdt1rrb9iS24oIUMBhfKzdF89lWH5jmZH%2Bf%2FbhY9W7MLbK16yb01DVApYeBU5a43XvNwyvITB9KWl5y%2F4dnn%2FUI3%2FuWRqxglC3nsvbf8LUuoN64kOtp6WQ8iaftDDJ4o1leYj2v%2F9d%2B4wf4WodzD%2F6k5z9NFwGTDXBo5mmzjoMApvvgwfBqKF9FVsUsnLNPG9JBU%2FF%2FtLe3sl6HxC1ncaOA%2FrdB%2Bta8pg6x%2FTZ8ObS3O0T06l4N3XRbRtNv1ttrE9k3SWowVsW9vqia2oDBdlUWEb0Lb3LO1K8xy7Dxy8BWaELkvixjY8RwAoJ4ydzaxISlsFCEhZSWUFq97trd8LrPSOjd%2FMKq7qcQGOqUB3wwcIRu3abJhErZeaQ0qTc0lp5ftp7niNWd6yfeVy0548LCVgzjMopMTV94eG%2Br69Up8rn%2BnSUdkVLt%2FAvtuKFFa3MlYmgJXwTEgdgRxC1vgEU%2BK%2BYcGvbB5k%2BPSBuisbZehVOBcN8FGqd%2FAflk%2FMAAwpICLA%2BV4nO3SS0TdBJtNojdmqz%2Bzr0%2B7LlfivEiDyPcLOUEAz49U%2FNqUmo%2FgevzHEof1&X-Amz-Signature=02022ef331067fb551bfc69067a2915f1319207d054259ba0b03f6fe60842a47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYOVOB7Y%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj%2FQyyeLtuP7EAn2L0t9tkBfWvVrqMPqIoYInOA6SPeAiEAtaxuI3AzNLLhhfBAUju0fIkXczr3njaHCwcsbt7%2Bt2gqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI621ARtpmVUuoE%2BCircA92P0Lxayj%2FaA6Xg%2FkFWz%2FbCPVLjV0Chy84sLJWSs2El1%2FiF8NfAu%2FDT%2FEJ3LGRhmRdHw9QPRBvD%2FOCpdxBSRD%2B7lkU8paNsFSEte3wbc%2B0jDCuGILp6yXTVldMMStO4IaPFUTrFRW033Ph0lEMNWfLT%2BTG9sn6DISDngJix6YVS9dimeJb14ZyJEB2LAHS9crv5il3oav6TBs7wokiJ9Aa%2FnGayV5hW2rVrj%2BtCH4PW0m2FtSp%2BQSH54%2FoOFIapbyu8paIQ3ua7I8CfbZVpBLs5umNvtj5xJdt1rrb9iS24oIUMBhfKzdF89lWH5jmZH%2Bf%2FbhY9W7MLbK16yb01DVApYeBU5a43XvNwyvITB9KWl5y%2F4dnn%2FUI3%2FuWRqxglC3nsvbf8LUuoN64kOtp6WQ8iaftDDJ4o1leYj2v%2F9d%2B4wf4WodzD%2F6k5z9NFwGTDXBo5mmzjoMApvvgwfBqKF9FVsUsnLNPG9JBU%2FF%2FtLe3sl6HxC1ncaOA%2FrdB%2Bta8pg6x%2FTZ8ObS3O0T06l4N3XRbRtNv1ttrE9k3SWowVsW9vqia2oDBdlUWEb0Lb3LO1K8xy7Dxy8BWaELkvixjY8RwAoJ4ydzaxISlsFCEhZSWUFq97trd8LrPSOjd%2FMKq7qcQGOqUB3wwcIRu3abJhErZeaQ0qTc0lp5ftp7niNWd6yfeVy0548LCVgzjMopMTV94eG%2Br69Up8rn%2BnSUdkVLt%2FAvtuKFFa3MlYmgJXwTEgdgRxC1vgEU%2BK%2BYcGvbB5k%2BPSBuisbZehVOBcN8FGqd%2FAflk%2FMAAwpICLA%2BV4nO3SS0TdBJtNojdmqz%2Bzr0%2B7LlfivEiDyPcLOUEAz49U%2FNqUmo%2FgevzHEof1&X-Amz-Signature=edf925cf303db245b22691c7bcf2096cb18e9dc131f9786f2821ab5f292059ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYOVOB7Y%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj%2FQyyeLtuP7EAn2L0t9tkBfWvVrqMPqIoYInOA6SPeAiEAtaxuI3AzNLLhhfBAUju0fIkXczr3njaHCwcsbt7%2Bt2gqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI621ARtpmVUuoE%2BCircA92P0Lxayj%2FaA6Xg%2FkFWz%2FbCPVLjV0Chy84sLJWSs2El1%2FiF8NfAu%2FDT%2FEJ3LGRhmRdHw9QPRBvD%2FOCpdxBSRD%2B7lkU8paNsFSEte3wbc%2B0jDCuGILp6yXTVldMMStO4IaPFUTrFRW033Ph0lEMNWfLT%2BTG9sn6DISDngJix6YVS9dimeJb14ZyJEB2LAHS9crv5il3oav6TBs7wokiJ9Aa%2FnGayV5hW2rVrj%2BtCH4PW0m2FtSp%2BQSH54%2FoOFIapbyu8paIQ3ua7I8CfbZVpBLs5umNvtj5xJdt1rrb9iS24oIUMBhfKzdF89lWH5jmZH%2Bf%2FbhY9W7MLbK16yb01DVApYeBU5a43XvNwyvITB9KWl5y%2F4dnn%2FUI3%2FuWRqxglC3nsvbf8LUuoN64kOtp6WQ8iaftDDJ4o1leYj2v%2F9d%2B4wf4WodzD%2F6k5z9NFwGTDXBo5mmzjoMApvvgwfBqKF9FVsUsnLNPG9JBU%2FF%2FtLe3sl6HxC1ncaOA%2FrdB%2Bta8pg6x%2FTZ8ObS3O0T06l4N3XRbRtNv1ttrE9k3SWowVsW9vqia2oDBdlUWEb0Lb3LO1K8xy7Dxy8BWaELkvixjY8RwAoJ4ydzaxISlsFCEhZSWUFq97trd8LrPSOjd%2FMKq7qcQGOqUB3wwcIRu3abJhErZeaQ0qTc0lp5ftp7niNWd6yfeVy0548LCVgzjMopMTV94eG%2Br69Up8rn%2BnSUdkVLt%2FAvtuKFFa3MlYmgJXwTEgdgRxC1vgEU%2BK%2BYcGvbB5k%2BPSBuisbZehVOBcN8FGqd%2FAflk%2FMAAwpICLA%2BV4nO3SS0TdBJtNojdmqz%2Bzr0%2B7LlfivEiDyPcLOUEAz49U%2FNqUmo%2FgevzHEof1&X-Amz-Signature=f8e99bb9c80baa95bcc7dcc5f23fa25a5015864c3192a7cc3632c55be8c855c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT2ZQOSL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdP%2BIERCgm2i7bX7RXpr%2BTFV%2F6Jgft%2FsuIRbgNSkV1XAiBGIaKxcxt%2BqiZKjMG0XZf%2FWpBo5V%2FJF0mrEctJeqFZWiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFRoN37Zc7bkTSQEGKtwDCIe69B7i9jaxvKf%2BpKkibGLDyVzP9xsnDqln2qnXZjLULm5rmmwQm1PvJUotKM3jqii0JP9j4%2BNJNUiuLEtH%2FilT929wu%2B8rJ5GK3UKS5Ml%2FLimj8RhdPGwShr2EqZqHRJbn4zSXN8HVyyq8LLAJjEWNmKwWMawmhF%2F1yTCHg5Zw%2FXe6kzYWep6IXmvGmdLDW3t%2BGVn229LaN5RSN5WIOnrBHEAOHuuv26x2pCnOhj4Q0f%2FIBT0tEN0gdZHn2v83WRVMuAxcig6ILUPHy%2FQDXL5yIIRmyD%2FgDhjfLo8i0LnDx97fxwu1J0HQLjxj7yDGzIUniQewMHK6YXNHQ%2FVFh%2B6%2BUBAS%2F2mkLWiq6dli8LyK5uiNdv5H%2Bql3cTQjDi2J7goqbXjLxW79bQkaKIQVCJNjaKntPz1SdV55Qk5i8jVjS6pxsemFbZmfW%2Bg0aGFRcZfNRIGfPG7Pic5QxB4CtkjCEHVKT8zK8QO3u3OVfqCCz3DsBXtzdfeGxhGEPRhlNBSEy6A24IgbJMNtiseqEEXCgbCE18eKlq0MfpwkSw9ZjP6iuzdt4moJ7FaRcnBKk4nhiVES7Wedg5yMjf%2B5%2BBy32NWl9Mf9iPcOnGZ6J3%2Fq57Xi3LoY2HLi%2BEsw77qpxAY6pgHdESeRK0O%2B7Yd22GBEMtUbz6KcMF7hN9MImsXSO%2BI6u3UDm%2BoG6H7TByWSpjlF1Q94OLkgmn8bzSY%2BtMZ9H1CuP3ujM6r9L%2F%2BwLS%2Byb3VE%2Fk5X%2Bd4akVK%2FW1OS5n3osobSkJpt36vpHVUKgB9GI0fc7hBgqv0UpX97yz4pmIjw3YIR7oceKmM2QYPbqoCku5ua2t7mBRNd9qYUZvF7SrydJB%2Fghfve&X-Amz-Signature=974c54f487dafd90af59fab3fedc38ad77ef205b3223ce6c790f01b411fbdb01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT2ZQOSL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdP%2BIERCgm2i7bX7RXpr%2BTFV%2F6Jgft%2FsuIRbgNSkV1XAiBGIaKxcxt%2BqiZKjMG0XZf%2FWpBo5V%2FJF0mrEctJeqFZWiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFRoN37Zc7bkTSQEGKtwDCIe69B7i9jaxvKf%2BpKkibGLDyVzP9xsnDqln2qnXZjLULm5rmmwQm1PvJUotKM3jqii0JP9j4%2BNJNUiuLEtH%2FilT929wu%2B8rJ5GK3UKS5Ml%2FLimj8RhdPGwShr2EqZqHRJbn4zSXN8HVyyq8LLAJjEWNmKwWMawmhF%2F1yTCHg5Zw%2FXe6kzYWep6IXmvGmdLDW3t%2BGVn229LaN5RSN5WIOnrBHEAOHuuv26x2pCnOhj4Q0f%2FIBT0tEN0gdZHn2v83WRVMuAxcig6ILUPHy%2FQDXL5yIIRmyD%2FgDhjfLo8i0LnDx97fxwu1J0HQLjxj7yDGzIUniQewMHK6YXNHQ%2FVFh%2B6%2BUBAS%2F2mkLWiq6dli8LyK5uiNdv5H%2Bql3cTQjDi2J7goqbXjLxW79bQkaKIQVCJNjaKntPz1SdV55Qk5i8jVjS6pxsemFbZmfW%2Bg0aGFRcZfNRIGfPG7Pic5QxB4CtkjCEHVKT8zK8QO3u3OVfqCCz3DsBXtzdfeGxhGEPRhlNBSEy6A24IgbJMNtiseqEEXCgbCE18eKlq0MfpwkSw9ZjP6iuzdt4moJ7FaRcnBKk4nhiVES7Wedg5yMjf%2B5%2BBy32NWl9Mf9iPcOnGZ6J3%2Fq57Xi3LoY2HLi%2BEsw77qpxAY6pgHdESeRK0O%2B7Yd22GBEMtUbz6KcMF7hN9MImsXSO%2BI6u3UDm%2BoG6H7TByWSpjlF1Q94OLkgmn8bzSY%2BtMZ9H1CuP3ujM6r9L%2F%2BwLS%2Byb3VE%2Fk5X%2Bd4akVK%2FW1OS5n3osobSkJpt36vpHVUKgB9GI0fc7hBgqv0UpX97yz4pmIjw3YIR7oceKmM2QYPbqoCku5ua2t7mBRNd9qYUZvF7SrydJB%2Fghfve&X-Amz-Signature=aafd7d98033df1db639957b90d20fba7ebcca4547a3fd1dd988595a7cc7d3d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT2ZQOSL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdP%2BIERCgm2i7bX7RXpr%2BTFV%2F6Jgft%2FsuIRbgNSkV1XAiBGIaKxcxt%2BqiZKjMG0XZf%2FWpBo5V%2FJF0mrEctJeqFZWiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFRoN37Zc7bkTSQEGKtwDCIe69B7i9jaxvKf%2BpKkibGLDyVzP9xsnDqln2qnXZjLULm5rmmwQm1PvJUotKM3jqii0JP9j4%2BNJNUiuLEtH%2FilT929wu%2B8rJ5GK3UKS5Ml%2FLimj8RhdPGwShr2EqZqHRJbn4zSXN8HVyyq8LLAJjEWNmKwWMawmhF%2F1yTCHg5Zw%2FXe6kzYWep6IXmvGmdLDW3t%2BGVn229LaN5RSN5WIOnrBHEAOHuuv26x2pCnOhj4Q0f%2FIBT0tEN0gdZHn2v83WRVMuAxcig6ILUPHy%2FQDXL5yIIRmyD%2FgDhjfLo8i0LnDx97fxwu1J0HQLjxj7yDGzIUniQewMHK6YXNHQ%2FVFh%2B6%2BUBAS%2F2mkLWiq6dli8LyK5uiNdv5H%2Bql3cTQjDi2J7goqbXjLxW79bQkaKIQVCJNjaKntPz1SdV55Qk5i8jVjS6pxsemFbZmfW%2Bg0aGFRcZfNRIGfPG7Pic5QxB4CtkjCEHVKT8zK8QO3u3OVfqCCz3DsBXtzdfeGxhGEPRhlNBSEy6A24IgbJMNtiseqEEXCgbCE18eKlq0MfpwkSw9ZjP6iuzdt4moJ7FaRcnBKk4nhiVES7Wedg5yMjf%2B5%2BBy32NWl9Mf9iPcOnGZ6J3%2Fq57Xi3LoY2HLi%2BEsw77qpxAY6pgHdESeRK0O%2B7Yd22GBEMtUbz6KcMF7hN9MImsXSO%2BI6u3UDm%2BoG6H7TByWSpjlF1Q94OLkgmn8bzSY%2BtMZ9H1CuP3ujM6r9L%2F%2BwLS%2Byb3VE%2Fk5X%2Bd4akVK%2FW1OS5n3osobSkJpt36vpHVUKgB9GI0fc7hBgqv0UpX97yz4pmIjw3YIR7oceKmM2QYPbqoCku5ua2t7mBRNd9qYUZvF7SrydJB%2Fghfve&X-Amz-Signature=bf0c657de90dd15e47300df0807568b6f7ca6e51fbc8def13e06055206d93092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT2ZQOSL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdP%2BIERCgm2i7bX7RXpr%2BTFV%2F6Jgft%2FsuIRbgNSkV1XAiBGIaKxcxt%2BqiZKjMG0XZf%2FWpBo5V%2FJF0mrEctJeqFZWiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFRoN37Zc7bkTSQEGKtwDCIe69B7i9jaxvKf%2BpKkibGLDyVzP9xsnDqln2qnXZjLULm5rmmwQm1PvJUotKM3jqii0JP9j4%2BNJNUiuLEtH%2FilT929wu%2B8rJ5GK3UKS5Ml%2FLimj8RhdPGwShr2EqZqHRJbn4zSXN8HVyyq8LLAJjEWNmKwWMawmhF%2F1yTCHg5Zw%2FXe6kzYWep6IXmvGmdLDW3t%2BGVn229LaN5RSN5WIOnrBHEAOHuuv26x2pCnOhj4Q0f%2FIBT0tEN0gdZHn2v83WRVMuAxcig6ILUPHy%2FQDXL5yIIRmyD%2FgDhjfLo8i0LnDx97fxwu1J0HQLjxj7yDGzIUniQewMHK6YXNHQ%2FVFh%2B6%2BUBAS%2F2mkLWiq6dli8LyK5uiNdv5H%2Bql3cTQjDi2J7goqbXjLxW79bQkaKIQVCJNjaKntPz1SdV55Qk5i8jVjS6pxsemFbZmfW%2Bg0aGFRcZfNRIGfPG7Pic5QxB4CtkjCEHVKT8zK8QO3u3OVfqCCz3DsBXtzdfeGxhGEPRhlNBSEy6A24IgbJMNtiseqEEXCgbCE18eKlq0MfpwkSw9ZjP6iuzdt4moJ7FaRcnBKk4nhiVES7Wedg5yMjf%2B5%2BBy32NWl9Mf9iPcOnGZ6J3%2Fq57Xi3LoY2HLi%2BEsw77qpxAY6pgHdESeRK0O%2B7Yd22GBEMtUbz6KcMF7hN9MImsXSO%2BI6u3UDm%2BoG6H7TByWSpjlF1Q94OLkgmn8bzSY%2BtMZ9H1CuP3ujM6r9L%2F%2BwLS%2Byb3VE%2Fk5X%2Bd4akVK%2FW1OS5n3osobSkJpt36vpHVUKgB9GI0fc7hBgqv0UpX97yz4pmIjw3YIR7oceKmM2QYPbqoCku5ua2t7mBRNd9qYUZvF7SrydJB%2Fghfve&X-Amz-Signature=3fca8ae66288ea268d2d04bcefb1d7e96e2b6d9f877424d907ad3233fe13323d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT2ZQOSL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdP%2BIERCgm2i7bX7RXpr%2BTFV%2F6Jgft%2FsuIRbgNSkV1XAiBGIaKxcxt%2BqiZKjMG0XZf%2FWpBo5V%2FJF0mrEctJeqFZWiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFRoN37Zc7bkTSQEGKtwDCIe69B7i9jaxvKf%2BpKkibGLDyVzP9xsnDqln2qnXZjLULm5rmmwQm1PvJUotKM3jqii0JP9j4%2BNJNUiuLEtH%2FilT929wu%2B8rJ5GK3UKS5Ml%2FLimj8RhdPGwShr2EqZqHRJbn4zSXN8HVyyq8LLAJjEWNmKwWMawmhF%2F1yTCHg5Zw%2FXe6kzYWep6IXmvGmdLDW3t%2BGVn229LaN5RSN5WIOnrBHEAOHuuv26x2pCnOhj4Q0f%2FIBT0tEN0gdZHn2v83WRVMuAxcig6ILUPHy%2FQDXL5yIIRmyD%2FgDhjfLo8i0LnDx97fxwu1J0HQLjxj7yDGzIUniQewMHK6YXNHQ%2FVFh%2B6%2BUBAS%2F2mkLWiq6dli8LyK5uiNdv5H%2Bql3cTQjDi2J7goqbXjLxW79bQkaKIQVCJNjaKntPz1SdV55Qk5i8jVjS6pxsemFbZmfW%2Bg0aGFRcZfNRIGfPG7Pic5QxB4CtkjCEHVKT8zK8QO3u3OVfqCCz3DsBXtzdfeGxhGEPRhlNBSEy6A24IgbJMNtiseqEEXCgbCE18eKlq0MfpwkSw9ZjP6iuzdt4moJ7FaRcnBKk4nhiVES7Wedg5yMjf%2B5%2BBy32NWl9Mf9iPcOnGZ6J3%2Fq57Xi3LoY2HLi%2BEsw77qpxAY6pgHdESeRK0O%2B7Yd22GBEMtUbz6KcMF7hN9MImsXSO%2BI6u3UDm%2BoG6H7TByWSpjlF1Q94OLkgmn8bzSY%2BtMZ9H1CuP3ujM6r9L%2F%2BwLS%2Byb3VE%2Fk5X%2Bd4akVK%2FW1OS5n3osobSkJpt36vpHVUKgB9GI0fc7hBgqv0UpX97yz4pmIjw3YIR7oceKmM2QYPbqoCku5ua2t7mBRNd9qYUZvF7SrydJB%2Fghfve&X-Amz-Signature=01610e7bcbf3e65fbe451706bd3aa8a5aedf0cc769e2d4239dfe38350083a604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT2ZQOSL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdP%2BIERCgm2i7bX7RXpr%2BTFV%2F6Jgft%2FsuIRbgNSkV1XAiBGIaKxcxt%2BqiZKjMG0XZf%2FWpBo5V%2FJF0mrEctJeqFZWiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFRoN37Zc7bkTSQEGKtwDCIe69B7i9jaxvKf%2BpKkibGLDyVzP9xsnDqln2qnXZjLULm5rmmwQm1PvJUotKM3jqii0JP9j4%2BNJNUiuLEtH%2FilT929wu%2B8rJ5GK3UKS5Ml%2FLimj8RhdPGwShr2EqZqHRJbn4zSXN8HVyyq8LLAJjEWNmKwWMawmhF%2F1yTCHg5Zw%2FXe6kzYWep6IXmvGmdLDW3t%2BGVn229LaN5RSN5WIOnrBHEAOHuuv26x2pCnOhj4Q0f%2FIBT0tEN0gdZHn2v83WRVMuAxcig6ILUPHy%2FQDXL5yIIRmyD%2FgDhjfLo8i0LnDx97fxwu1J0HQLjxj7yDGzIUniQewMHK6YXNHQ%2FVFh%2B6%2BUBAS%2F2mkLWiq6dli8LyK5uiNdv5H%2Bql3cTQjDi2J7goqbXjLxW79bQkaKIQVCJNjaKntPz1SdV55Qk5i8jVjS6pxsemFbZmfW%2Bg0aGFRcZfNRIGfPG7Pic5QxB4CtkjCEHVKT8zK8QO3u3OVfqCCz3DsBXtzdfeGxhGEPRhlNBSEy6A24IgbJMNtiseqEEXCgbCE18eKlq0MfpwkSw9ZjP6iuzdt4moJ7FaRcnBKk4nhiVES7Wedg5yMjf%2B5%2BBy32NWl9Mf9iPcOnGZ6J3%2Fq57Xi3LoY2HLi%2BEsw77qpxAY6pgHdESeRK0O%2B7Yd22GBEMtUbz6KcMF7hN9MImsXSO%2BI6u3UDm%2BoG6H7TByWSpjlF1Q94OLkgmn8bzSY%2BtMZ9H1CuP3ujM6r9L%2F%2BwLS%2Byb3VE%2Fk5X%2Bd4akVK%2FW1OS5n3osobSkJpt36vpHVUKgB9GI0fc7hBgqv0UpX97yz4pmIjw3YIR7oceKmM2QYPbqoCku5ua2t7mBRNd9qYUZvF7SrydJB%2Fghfve&X-Amz-Signature=ea965b64038babb39f111a4ca35d6add80318558cb20083b8c0ea36ef2642283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT2ZQOSL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdP%2BIERCgm2i7bX7RXpr%2BTFV%2F6Jgft%2FsuIRbgNSkV1XAiBGIaKxcxt%2BqiZKjMG0XZf%2FWpBo5V%2FJF0mrEctJeqFZWiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFRoN37Zc7bkTSQEGKtwDCIe69B7i9jaxvKf%2BpKkibGLDyVzP9xsnDqln2qnXZjLULm5rmmwQm1PvJUotKM3jqii0JP9j4%2BNJNUiuLEtH%2FilT929wu%2B8rJ5GK3UKS5Ml%2FLimj8RhdPGwShr2EqZqHRJbn4zSXN8HVyyq8LLAJjEWNmKwWMawmhF%2F1yTCHg5Zw%2FXe6kzYWep6IXmvGmdLDW3t%2BGVn229LaN5RSN5WIOnrBHEAOHuuv26x2pCnOhj4Q0f%2FIBT0tEN0gdZHn2v83WRVMuAxcig6ILUPHy%2FQDXL5yIIRmyD%2FgDhjfLo8i0LnDx97fxwu1J0HQLjxj7yDGzIUniQewMHK6YXNHQ%2FVFh%2B6%2BUBAS%2F2mkLWiq6dli8LyK5uiNdv5H%2Bql3cTQjDi2J7goqbXjLxW79bQkaKIQVCJNjaKntPz1SdV55Qk5i8jVjS6pxsemFbZmfW%2Bg0aGFRcZfNRIGfPG7Pic5QxB4CtkjCEHVKT8zK8QO3u3OVfqCCz3DsBXtzdfeGxhGEPRhlNBSEy6A24IgbJMNtiseqEEXCgbCE18eKlq0MfpwkSw9ZjP6iuzdt4moJ7FaRcnBKk4nhiVES7Wedg5yMjf%2B5%2BBy32NWl9Mf9iPcOnGZ6J3%2Fq57Xi3LoY2HLi%2BEsw77qpxAY6pgHdESeRK0O%2B7Yd22GBEMtUbz6KcMF7hN9MImsXSO%2BI6u3UDm%2BoG6H7TByWSpjlF1Q94OLkgmn8bzSY%2BtMZ9H1CuP3ujM6r9L%2F%2BwLS%2Byb3VE%2Fk5X%2Bd4akVK%2FW1OS5n3osobSkJpt36vpHVUKgB9GI0fc7hBgqv0UpX97yz4pmIjw3YIR7oceKmM2QYPbqoCku5ua2t7mBRNd9qYUZvF7SrydJB%2Fghfve&X-Amz-Signature=102de84bf0413ad182d8e80fb411c2e26147fca00c6d7f0a3cf243b5f93b0d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
